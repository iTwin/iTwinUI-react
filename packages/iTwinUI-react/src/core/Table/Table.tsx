/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import {
  actions as TableActions,
  CellProps,
  HeaderGroup,
  TableOptions,
  Row,
  TableState,
  useFlexLayout,
  useFilters,
  useRowSelect,
  useSortBy,
  useTable,
  ActionType,
  TableInstance,
  useExpanded,
  usePagination,
  useColumnOrder,
  Column,
  useGlobalFilter,
} from 'react-table';
import { ProgressRadial } from '../ProgressIndicators';
import { useTheme, CommonProps, useResizeObserver, mergeRefs } from '../utils';
import '@itwin/itwinui-css/css/table.css';
import SvgSortDown from '@itwin/itwinui-icons-react/cjs/icons/SortDown';
import SvgSortUp from '@itwin/itwinui-icons-react/cjs/icons/SortUp';
import { getCellStyle, getStickyStyle } from './utils';
import { TableRowMemoized } from './TableRowMemoized';
import { FilterToggle, TableFilterValue } from './filters';
import { customFilterFunctions } from './filters/customFilterFunctions';
import {
  useExpanderCell,
  useSelectionCell,
  useSubRowFiltering,
  useSubRowSelection,
  useResizeColumns,
  useColumnDragAndDrop,
  useScrollToRow,
  useStickyColumns,
} from './hooks';
import {
  onExpandHandler,
  onFilterHandler,
  onSelectHandler,
  onShiftSelectHandler,
  onSingleSelectHandler,
  onTableResizeEnd,
  onTableResizeStart,
} from './actionHandlers';
import VirtualScroll from '../utils/components/VirtualScroll';
import { SELECTION_CELL_ID } from './columns';

const singleRowSelectedAction = 'singleRowSelected';
const shiftRowSelectedAction = 'shiftRowSelected';
export const tableResizeStartAction = 'tableResizeStart';
const tableResizeEndAction = 'tableResizeEnd';

export type TablePaginatorRendererProps = {
  /**
   * The zero-based index of the current page.
   */
  currentPage: number;
  /**
   * Total number of rows.
   */
  totalRowsCount: number;
  /**
   * Number of rows per page.
   */
  pageSize: number;
  /**
   * Callback when page is changed.
   */
  onPageChange: (page: number) => void;
  /**
   * Callback when page size is changed.
   */
  onPageSizeChange: (size: number) => void;
  /**
   * Modify the size of the pagination (adjusts the elements size).
   * @default 'default' if Table density is `default` else `small`
   */
  size?: 'default' | 'small';
  /**
   * Flag whether data is still loading and total rows count is not known.
   * @default false
   */
  isLoading?: boolean;
  /**
   * Total number of rows selected (for mutli-selection mode only)
   */
  totalSelectedRowsCount?: number;
};

/**
 * Table props.
 * columns and data must be memoized.
 */
export type TableProps<
  T extends Record<string, unknown> = Record<string, unknown>
> = Omit<TableOptions<T>, 'disableSortBy'> & {
  /**
   * Flag whether data is loading.
   * @default false
   */
  isLoading?: boolean;
  /**
   * Content shown when there is no data.
   */
  emptyTableContent: React.ReactNode;
  /**
   * Flag whether table rows can be selectable.
   * @default false
   */
  isSelectable?: boolean;
  /**
   * Handler for rows selection. Must be memoized.
   * This is triggered only by user initiated actions (i.e. data change will not call it).
   */
  onSelect?: (
    selectedData: T[] | undefined,
    tableState?: TableState<T>,
  ) => void;
  /**
   * Handler for when a row is clicked. Must be memoized.
   */
  onRowClick?: (event: React.MouseEvent, row: Row<T>) => void;
  /**
   * Modify the selection mode of the table.
   * The column with checkboxes will not be present with 'single' selection mode.
   * @default 'multi'
   */
  selectionMode?: 'multi' | 'single';
  /**
   * Flag whether table columns can be sortable.
   * @default false
   */
  isSortable?: boolean;
  /**
   * Callback function when sort changes.
   * Use with `manualSortBy` to handle sorting yourself e.g. sort in server-side.
   * Must be memoized.
   */
  onSort?: (state: TableState<T>) => void;
  /**
   * Callback function when scroll reaches bottom. Can be used for lazy-loading the data.
   * If you want to use it in older browsers e.g. IE, then you need to have IntersectionObserver polyfill.
   */
  onBottomReached?: () => void;
  /**
   * Callback function when row is in viewport.
   * If you want to use it in older browsers e.g. IE, then you need to have IntersectionObserver polyfill.
   */
  onRowInViewport?: (rowData: T) => void;
  /**
   * Margin in pixels when row is considered to be already in viewport. Used for `onBottomReached` and `onRowInViewport`.
   * @default 300
   */
  intersectionMargin?: number;
  /**
   * A function that will be used for rendering a component for each row if that row is expanded.
   * Component will be placed right after the row. Can return false/null if row should not be expandable.
   */
  subComponent?: (row: Row<T>) => React.ReactNode;
  /**
   * A function used for overriding default expander cell. `subComponent` must be present.
   * Make sure to trigger `cellProps.row.toggleRowExpanded()`.
   */
  expanderCell?: (cellProps: CellProps<T>) => React.ReactNode;
  /**
   * Handler for row expand events. Will trigger when expanding and collapsing rows.
   */
  onExpand?: (
    expandedData: T[] | undefined,
    tableState?: TableState<T>,
  ) => void;
  /**
   * Callback function when filters change.
   * Use with `manualFilters` to handle filtering yourself e.g. filter in server-side.
   * Must be memoized.
   */
  onFilter?: (filters: TableFilterValue<T>[], state: TableState<T>) => void;
  /**
   * Value used for global filtering.
   * Use with `globalFilter` and/or `manualGlobalFilter` to handle filtering yourself e.g. filter in server-side.
   * Must be memoized.
   */
  globalFilterValue?: unknown;
  /**
   * Content shown when there is no data after filtering.
   */
  emptyFilteredTableContent?: React.ReactNode;
  /**
   * Function that should return true if a row is disabled (i.e. cannot be selected or expanded).
   * If not specified, all rows are enabled.
   */
  isRowDisabled?: (rowData: T) => boolean;
  /**
   * Function that should return custom props passed to the each row.
   * Must be memoized.
   */
  rowProps?: (
    row: Row<T>,
  ) => React.ComponentPropsWithRef<'div'> & {
    status?: 'positive' | 'warning' | 'negative';
  };
  /**
   * Modify the density of the table (adjusts the row height).
   * @default 'default'
   */
  density?: 'default' | 'condensed' | 'extra-condensed';
  /**
   * Flag whether to select a row when clicked anywhere inside of it.
   * @default true
   */
  selectRowOnClick?: boolean;
  /**
   * Function that takes `TablePaginatorRendererProps` as an argument and returns pagination component.
   *
   * Recommended to use `TablePaginator`. Passing `props` to `TablePaginator` handles all state management and is enough for basic use-cases.
   * @example
   * (props: TablePaginatorRendererProps) => (
   *   <TablePaginator {...props} />
   * )
   */
  paginatorRenderer?: (props: TablePaginatorRendererProps) => React.ReactNode;
  /**
   * Number of rows per page.
   * @default 25
   */
  pageSize?: number;
  /**
   * Flag whether columns are resizable.
   * In order to disable resizing for specific column, set `disableResizing: true` for that column.
   *
   * If you want to use it in older browsers e.g. IE, then you need to have `ResizeObserver` polyfill.
   * @default false
   */
  isResizable?: boolean;
  /**
   * Style of the table.
   * @default 'default'
   */
  styleType?: 'default' | 'zebra-rows';
  /**
   * Virtualization is used for the scrollable table body.
   * Height on the table is required for virtualization to work.
   * @example
   * <Table enableVirtualization style={{height: 400}} {...} />
   * @default false
   * @beta
   */
  enableVirtualization?: boolean;
  /**
   * Flag whether columns can be reordered.
   * @default false
   */
  enableColumnReordering?: boolean;
  /**
   * Function that returns index of the row that you want to scroll to.
   *
   * When using with lazy-loading table, you need to take care that row is already loaded.
   * It doesn't work with paginated tables.
   * @beta
   * @example
   * <Table
   *   scrollToRow={React.useCallback(
   *     (rows, data) => rows.findIndex((row) => row.original === data[250]),
   *     []
   *   )}
   *   {...restProps}
   * />
   * @example
   * <Table
   *   scrollToRow={React.useCallback(
   *     (rows, data) => rows.findIndex((row) => row.original.id === data[250].id),
   *     []
   *   )}
   *   {...restProps}
   * />
   */
  scrollToRow?: (rows: Row<T>[], data: T[]) => number;
} & Omit<CommonProps, 'title'>;

// Original type for some reason is missing sub-columns
type ColumnType<
  T extends Record<string, unknown> = Record<string, unknown>
> = Column<T> & {
  columns: ColumnType[];
};
const flattenColumns = (columns: ColumnType[]): ColumnType[] => {
  const flatColumns: ColumnType[] = [];
  columns.forEach((column) => {
    flatColumns.push(column);
    if (column.columns) {
      flatColumns.push(...flattenColumns(column.columns));
    }
  });
  return flatColumns;
};

/**
 * Table based on [react-table](https://react-table.tanstack.com/docs/api/overview).
 * @example
 * const columns = React.useMemo(() => [
 *  {
 *    Header: 'Header name',
 *    columns: [
 *      {
 *        id: 'name',
 *        Header: 'Name',
 *        accessor: 'name',
 *        width: 90,
 *      },
 *      {
 *        id: 'description',
 *        Header: 'description',
 *        accessor: 'description',
 *        maxWidth: 200,
 *      },
 *      {
 *        id: 'view',
 *        Header: 'view',
 *        Cell: () => {
 *          return <span onClick={onViewClick}>View</span>
 *        },
 *      },
 *    ],
 *  },
 * ], [onViewClick])
 * const data = [
 *  { name: 'Name1', description: 'Description1' },
 *  { name: 'Name2', description: 'Description2' },
 *  { name: 'Name3', description: 'Description3' },
 * ]
 * <Table
 *   columns={columns}
 *   data={data}
 *   emptyTableContent='No data.'
 *   isLoading={false}
 *   isSortable={true}
 * />
 */
export const Table = <
  T extends Record<string, unknown> = Record<string, unknown>
>(
  props: TableProps<T>,
): JSX.Element => {
  const {
    data,
    columns,
    isLoading = false,
    emptyTableContent,
    className,
    style,
    id,
    isSelectable = false,
    onSelect,
    onRowClick,
    selectionMode = 'multi',
    isSortable = false,
    onSort,
    stateReducer,
    onBottomReached,
    onRowInViewport,
    intersectionMargin = 300,
    subComponent,
    onExpand,
    onFilter,
    globalFilterValue,
    emptyFilteredTableContent,
    filterTypes: filterFunctions,
    expanderCell,
    isRowDisabled,
    rowProps,
    density = 'default',
    selectSubRows = true,
    getSubRows,
    selectRowOnClick = true,
    paginatorRenderer,
    pageSize = 25,
    isResizable = false,
    styleType = 'default',
    enableVirtualization = false,
    enableColumnReordering = false,
    ...rest
  } = props;

  useTheme();

  const [ownerDocument, setOwnerDocument] = React.useState<Document>();

  const defaultColumn = React.useMemo(
    () => ({
      maxWidth: 0,
      minWidth: 0,
      width: 0,
    }),
    [],
  );

  // useRef prevents from rerendering when one of these callbacks changes
  const onBottomReachedRef = React.useRef(onBottomReached);
  const onRowInViewportRef = React.useRef(onRowInViewport);
  React.useEffect(() => {
    onBottomReachedRef.current = onBottomReached;
    onRowInViewportRef.current = onRowInViewport;
  }, [onBottomReached, onRowInViewport]);

  const hasManualSelectionColumn = React.useMemo(() => {
    const flatColumns = flattenColumns(columns as ColumnType[]);
    return flatColumns.some((column) => column.id === SELECTION_CELL_ID);
  }, [columns]);

  const disableUserSelect = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        ownerDocument &&
          (ownerDocument.documentElement.style.userSelect = 'none');
      }
    },
    [ownerDocument],
  );

  const enableUserSelect = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        ownerDocument && (ownerDocument.documentElement.style.userSelect = '');
      }
    },
    [ownerDocument],
  );

  React.useEffect(() => {
    if (!isSelectable || selectionMode !== 'multi') {
      return;
    }

    ownerDocument?.addEventListener('keydown', disableUserSelect);
    ownerDocument?.addEventListener('keyup', enableUserSelect);

    return () => {
      ownerDocument?.removeEventListener('keydown', disableUserSelect);
      ownerDocument?.removeEventListener('keyup', enableUserSelect);
    };
  }, [
    isSelectable,
    selectionMode,
    ownerDocument,
    disableUserSelect,
    enableUserSelect,
  ]);

  const tableStateReducer = React.useCallback(
    (
      newState: TableState<T>,
      action: ActionType,
      previousState: TableState<T>,
      instance?: TableInstance<T>,
    ): TableState<T> => {
      switch (action.type) {
        case TableActions.toggleSortBy:
          onSort?.(newState);
          break;
        case TableActions.setFilter:
          onFilterHandler(newState, action, previousState, instance, onFilter);
          break;
        case TableActions.toggleRowExpanded:
        case TableActions.toggleAllRowsExpanded:
          onExpandHandler(newState, instance, onExpand);
          break;
        case singleRowSelectedAction: {
          newState = onSingleSelectHandler(
            newState,
            action,
            instance,
            onSelect,
            // If it has manual selection column, then we can't check whether row is disabled
            hasManualSelectionColumn ? undefined : isRowDisabled,
          );
          break;
        }
        case shiftRowSelectedAction: {
          newState = onShiftSelectHandler(
            newState,
            action,
            instance,
            onSelect,
            // If it has manual selection column, then we can't check whether row is disabled
            hasManualSelectionColumn ? undefined : isRowDisabled,
          );
          break;
        }
        case TableActions.toggleRowSelected:
        case TableActions.toggleAllRowsSelected:
        case TableActions.toggleAllPageRowsSelected: {
          onSelectHandler(
            newState,
            instance,
            onSelect,
            // If it has manual selection column, then we can't check whether row is disabled
            hasManualSelectionColumn ? undefined : isRowDisabled,
          );
          break;
        }
        case tableResizeStartAction: {
          newState = onTableResizeStart(newState);
          break;
        }
        case tableResizeEndAction: {
          newState = onTableResizeEnd(newState, action);
          break;
        }
        default:
          break;
      }
      return stateReducer
        ? stateReducer(newState, action, previousState, instance)
        : newState;
    },
    [
      hasManualSelectionColumn,
      isRowDisabled,
      onExpand,
      onFilter,
      onSelect,
      onSort,
      stateReducer,
    ],
  );

  const filterTypes = React.useMemo(
    () => ({ ...customFilterFunctions, ...filterFunctions }),
    [filterFunctions],
  );

  const hasAnySubRows = React.useMemo(() => {
    return data.some((item, index) =>
      getSubRows ? getSubRows(item, index) : item.subRows,
    );
  }, [data, getSubRows]);

  const instance = useTable<T>(
    {
      manualPagination: !paginatorRenderer, // Prevents from paginating rows in regular table without pagination
      paginateExpandedRows: false, // When false, it shows sub-rows in the current page instead of splitting them
      ...props,
      columns,
      defaultColumn,
      disableSortBy: !isSortable,
      stateReducer: tableStateReducer,
      filterTypes,
      selectSubRows,
      data,
      getSubRows,
      initialState: { pageSize, ...props.initialState },
    },
    useFlexLayout,
    useResizeColumns(ownerDocument),
    useFilters,
    useSubRowFiltering(hasAnySubRows),
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
    useSubRowSelection,
    useExpanderCell(subComponent, expanderCell, isRowDisabled),
    useSelectionCell(isSelectable, selectionMode, isRowDisabled),
    useColumnOrder,
    useColumnDragAndDrop(enableColumnReordering),
    useStickyColumns,
  );

  const {
    getTableProps,
    rows,
    headerGroups,
    getTableBodyProps,
    prepareRow,
    state,
    allColumns,
    dispatch,
    page,
    gotoPage,
    setPageSize,
    flatHeaders,
    visibleColumns,
    setGlobalFilter,
  } = instance;

  const ariaDataAttributes = Object.entries(rest).reduce(
    (result, [key, value]) => {
      if (key.startsWith('data-') || key.startsWith('aria-')) {
        result[key] = value;
      }
      return result;
    },
    {} as Record<string, string>,
  );

  const areFiltersSet =
    allColumns.some(
      (column) => column.filterValue != null && column.filterValue !== '',
    ) || !!globalFilterValue;

  const showFilterButton = (column: HeaderGroup<T>) =>
    (data.length !== 0 || areFiltersSet) && column.canFilter;

  const showSortButton = (column: HeaderGroup<T>) =>
    data.length !== 0 && column.canSort;

  const onRowClickHandler = React.useCallback(
    (event: React.MouseEvent, row: Row<T>) => {
      const isDisabled = isRowDisabled?.(row.original);
      if (!isDisabled) {
        onRowClick?.(event, row);
      }
      if (
        isSelectable &&
        !isDisabled &&
        selectRowOnClick &&
        !event.isDefaultPrevented()
      ) {
        if (selectionMode === 'multi' && event.shiftKey) {
          dispatch({
            type: shiftRowSelectedAction,
            id: row.id,
          });
        } else if (
          !row.isSelected &&
          (selectionMode === 'single' || !event.ctrlKey)
        ) {
          dispatch({
            type: singleRowSelectedAction,
            id: row.id,
          });
        } else {
          row.toggleRowSelected(!row.isSelected);
        }
      }
    },
    [
      isRowDisabled,
      isSelectable,
      selectRowOnClick,
      selectionMode,
      dispatch,
      onRowClick,
    ],
  );

  React.useEffect(() => {
    setGlobalFilter(globalFilterValue);
  }, [globalFilterValue, setGlobalFilter]);

  React.useEffect(() => {
    setPageSize(pageSize);
  }, [pageSize, setPageSize]);

  const numSelectedRows =
    selectionMode === 'single'
      ? 0
      : rows.filter((row) => row.isSelected).length;
  const paginatorRendererProps: TablePaginatorRendererProps = React.useMemo(
    () => ({
      currentPage: state.pageIndex,
      pageSize: state.pageSize,
      totalRowsCount: rows.length,
      size: density !== 'default' ? 'small' : 'default',
      isLoading,
      onPageChange: gotoPage,
      onPageSizeChange: setPageSize,
      totalSelectedRowsCount: numSelectedRows,
    }),
    [
      density,
      gotoPage,
      isLoading,
      rows.length,
      setPageSize,
      state.pageIndex,
      state.pageSize,
      numSelectedRows,
    ],
  );

  const { scrollToIndex, tableRowRef } = useScrollToRow<T>({ ...props, page });
  const columnRefs = React.useRef<Record<string, HTMLDivElement>>({});
  const previousTableWidth = React.useRef(0);
  const onTableResize = React.useCallback(
    ({ width }: DOMRectReadOnly) => {
      if (width === previousTableWidth.current) {
        return;
      }
      previousTableWidth.current = width;

      // Update column widths when table was resized
      flatHeaders.forEach((header) => {
        if (columnRefs.current[header.id]) {
          header.resizeWidth = columnRefs.current[
            header.id
          ].getBoundingClientRect().width;
        }
      });

      // If no column was resized then leave table resize handling to the flexbox
      if (Object.keys(state.columnResizing.columnWidths).length === 0) {
        return;
      }

      dispatch({ type: tableResizeStartAction });
    },
    [dispatch, state.columnResizing.columnWidths, flatHeaders],
  );
  const [resizeRef] = useResizeObserver(onTableResize);

  // Flexbox handles columns resize so we take new column widths before browser repaints.
  React.useLayoutEffect(() => {
    if (state.isTableResizing) {
      const newColumnWidths: Record<string, number> = {};
      flatHeaders.forEach((column) => {
        if (columnRefs.current[column.id]) {
          newColumnWidths[column.id] = columnRefs.current[
            column.id
          ].getBoundingClientRect().width;
        }
      });
      dispatch({ type: tableResizeEndAction, columnWidths: newColumnWidths });
    }
  });

  const headerRef = React.useRef<HTMLDivElement>(null);
  const bodyRef = React.useRef<HTMLDivElement>(null);
  // Using `useState` to rerender rows when table body ref is available
  const [bodyRefState, setBodyRefState] = React.useState<HTMLDivElement | null>(
    null,
  );

  const getPreparedRow = React.useCallback(
    (index: number) => {
      const row = page[index];
      prepareRow(row);
      return (
        <TableRowMemoized
          row={row}
          rowProps={rowProps}
          isLast={index === page.length - 1}
          onRowInViewport={onRowInViewportRef}
          onBottomReached={onBottomReachedRef}
          intersectionMargin={intersectionMargin}
          state={state}
          key={row.getRowProps().key}
          onClick={onRowClickHandler}
          subComponent={subComponent}
          isDisabled={!!isRowDisabled?.(row.original)}
          tableHasSubRows={hasAnySubRows}
          tableInstance={instance}
          expanderCell={expanderCell}
          bodyRef={bodyRefState}
          tableRowRef={enableVirtualization ? undefined : tableRowRef(row)}
        />
      );
    },
    [
      page,
      prepareRow,
      rowProps,
      intersectionMargin,
      state,
      onRowClickHandler,
      subComponent,
      isRowDisabled,
      hasAnySubRows,
      instance,
      expanderCell,
      bodyRefState,
      enableVirtualization,
      tableRowRef,
    ],
  );

  const virtualizedItemRenderer = React.useCallback(
    (index: number) => getPreparedRow(index),
    [getPreparedRow],
  );

  const updateStickyState = () => {
    if (!bodyRef.current || flatHeaders.every((header) => !header.sticky)) {
      return;
    }

    if (bodyRef.current.scrollLeft !== 0) {
      dispatch({ type: TableActions.setScrolledRight, value: true });
    } else {
      dispatch({ type: TableActions.setScrolledRight, value: false });
    }

    // If scrolled a bit to the left looking from the right side
    if (
      bodyRef.current.scrollLeft !==
      bodyRef.current.scrollWidth - bodyRef.current.clientWidth
    ) {
      dispatch({ type: TableActions.setScrolledLeft, value: true });
    } else {
      dispatch({ type: TableActions.setScrolledLeft, value: false });
    }
  };

  React.useEffect(() => {
    updateStickyState();
    // Call only on init
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        ref={(element) => {
          setOwnerDocument(element?.ownerDocument);
          if (isResizable) {
            resizeRef(element);
          }
        }}
        id={id}
        {...getTableProps({
          className: cx(
            'iui-table',
            { [`iui-${density}`]: density !== 'default' },
            className,
          ),
          style: {
            minWidth: 0, // Overrides the min-width set by the react-table but when we support horizontal scroll it is not needed
            ...style,
          },
        })}
        {...ariaDataAttributes}
      >
        <div
          className='iui-table-header-wrapper'
          ref={headerRef}
          onScroll={() => {
            if (headerRef.current && bodyRef.current) {
              bodyRef.current.scrollLeft = headerRef.current.scrollLeft;
              updateStickyState();
            }
          }}
        >
          <div className='iui-table-header'>
            {headerGroups.slice(1).map((headerGroup: HeaderGroup<T>) => {
              const headerGroupProps = headerGroup.getHeaderGroupProps({
                className: 'iui-row',
              });
              return (
                <div {...headerGroupProps} key={headerGroupProps.key}>
                  {headerGroup.headers.map((column, index) => {
                    const columnProps = column.getHeaderProps({
                      ...column.getSortByToggleProps(),
                      className: cx(
                        'iui-cell',
                        {
                          'iui-actionable': column.canSort,
                          'iui-sorted': column.isSorted,
                          'iui-cell-sticky': !!column.sticky,
                        },
                        column.columnClassName,
                      ),
                      style: {
                        ...getCellStyle(column, !!state.isTableResizing),
                        ...getStickyStyle(column, visibleColumns),
                        flexWrap: 'unset',
                      },
                    });
                    return (
                      <div
                        {...columnProps}
                        {...column.getDragAndDropProps()}
                        key={columnProps.key}
                        title={undefined}
                        ref={(el) => {
                          if (el) {
                            columnRefs.current[column.id] = el;
                            column.resizeWidth = el.getBoundingClientRect().width;
                          }
                        }}
                      >
                        {column.render('Header')}
                        {(showFilterButton(column) ||
                          showSortButton(column)) && (
                          <div className='iui-table-header-actions-container'>
                            {showFilterButton(column) && (
                              <FilterToggle
                                column={column}
                                ownerDocument={ownerDocument}
                              />
                            )}
                            {showSortButton(column) && (
                              <div className='iui-cell-end-icon'>
                                {column.isSortedDesc ||
                                (!column.isSorted && column.sortDescFirst) ? (
                                  <SvgSortDown
                                    className='iui-icon iui-sort'
                                    aria-hidden
                                  />
                                ) : (
                                  <SvgSortUp
                                    className='iui-icon iui-sort'
                                    aria-hidden
                                  />
                                )}
                              </div>
                            )}
                          </div>
                        )}
                        {isResizable &&
                          column.isResizerVisible &&
                          index !== headerGroup.headers.length - 1 && (
                            <div
                              {...column.getResizerProps()}
                              className='iui-resizer'
                            >
                              <div className='iui-resizer-bar' />
                            </div>
                          )}
                        {enableColumnReordering &&
                          !column.disableReordering && (
                            <div className='iui-reorder-bar' />
                          )}
                        {column.sticky === 'left' &&
                          state.sticky.isScrolledToRight && (
                            <div className='iui-cell-shadow-right' />
                          )}
                        {column.sticky === 'right' &&
                          state.sticky.isScrolledToLeft && (
                            <div className='iui-cell-shadow-left' />
                          )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div
          {...getTableBodyProps({
            className: cx('iui-table-body', {
              'iui-zebra-striping': styleType === 'zebra-rows',
            }),
            style: { outline: 0 },
          })}
          ref={mergeRefs(bodyRef, setBodyRefState)}
          onScroll={() => {
            if (headerRef.current && bodyRef.current) {
              headerRef.current.scrollLeft = bodyRef.current.scrollLeft;
              updateStickyState();
            }
          }}
          tabIndex={-1}
        >
          {data.length !== 0 && (
            <>
              {enableVirtualization ? (
                <VirtualScroll
                  itemsLength={page.length}
                  itemRenderer={virtualizedItemRenderer}
                  scrollToIndex={scrollToIndex}
                />
              ) : (
                page.map((_, index) => getPreparedRow(index))
              )}
            </>
          )}
          {isLoading && data.length === 0 && (
            <div className='iui-table-empty'>
              <ProgressRadial indeterminate={true} />
            </div>
          )}
          {isLoading && data.length !== 0 && (
            <div className='iui-row'>
              <div className='iui-cell' style={{ justifyContent: 'center' }}>
                <ProgressRadial
                  indeterminate={true}
                  size='small'
                  style={{ float: 'none', marginLeft: 0 }}
                />
              </div>
            </div>
          )}
          {!isLoading && data.length === 0 && !areFiltersSet && (
            <div className='iui-table-empty'>
              <div>{emptyTableContent}</div>
            </div>
          )}
          {!isLoading &&
            (data.length === 0 || rows.length === 0) &&
            areFiltersSet && (
              <div className='iui-table-empty'>
                <div>{emptyFilteredTableContent}</div>
              </div>
            )}
        </div>
        {paginatorRenderer?.(paginatorRendererProps)}
      </div>
    </>
  );
};

export default Table;
