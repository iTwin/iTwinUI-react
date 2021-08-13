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
  IdType,
  FilterValue,
  Hooks,
} from 'react-table';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as defaultFilterTypes from '../../../node_modules/react-table/src/filterTypes.js';
import { ProgressRadial } from '../ProgressIndicators';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/table.css';
import { CommonProps } from '../utils/props';
import SvgSortDown from '@itwin/itwinui-icons-react/cjs/icons/SortDown';
import SvgSortUp from '@itwin/itwinui-icons-react/cjs/icons/SortUp';
import { getCellStyle } from './utils';
import { TableRowMemoized } from './TableRowMemoized';
import { FilterToggle, TableFilterValue } from './filters';
import { customFilterFunctions } from './filters/customFilterFunctions';
import { useExpanderCell, useSelectionCell } from './hooks';
import {
  onExpandHandler,
  onFilterHandler,
  onSelectHandler,
} from './actionHandlers';

const singleRowSelectedAction = 'singleRowSelected';

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
  rowProps?: (row: Row<T>) => React.ComponentPropsWithRef<'div'>;
  /**
   * Flag whether show sub-rows or not.
   * @default false
   */
  showSubRows?: boolean;
} & Omit<CommonProps, 'title'>;

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
    columns,
    isLoading = false,
    emptyTableContent,
    className,
    style,
    id,
    isSelectable = false,
    onSelect,
    onRowClick,
    isSortable = false,
    onSort,
    stateReducer,
    onBottomReached,
    onRowInViewport,
    intersectionMargin = 300,
    subComponent,
    onExpand,
    onFilter,
    emptyFilteredTableContent,
    filterTypes: filterFunctions,
    expanderCell,
    isRowDisabled,
    rowProps,
    selectSubRows = true,
    showSubRows = false,
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

  const useSubRowFiltering = (hooks: Hooks<T>) => {
    hooks.useInstance.push((instance) => {
      const setInitialRows = (rows: Row<T>[]) => {
        rows.forEach((row) => {
          if (!row.initialSubRows?.length) {
            row.initialSubRows = row.subRows;
          }
          setInitialRows(row.subRows);
        });
      };
      setInitialRows(instance.initialRows);

      const setSubRows = (rows: Row<T>[]) => {
        rows.forEach((row) => {
          row.subRows = row.initialSubRows ?? [];
          setSubRows(row.subRows);
        });
      };
      setSubRows(instance.initialRows);

      if (!showSubRows) {
        return;
      }

      let currentlyFilteredRows = [...instance.preFilteredRows];

      const filteredRows: Row<T>[] = [];
      const filteredFlatRows: Row<T>[] = [];
      const filteredRowsById: Record<string, Row<T>> = {};

      const handleFilter = ({
        id: columnId,
        value: filterValue,
      }: {
        id: IdType<T>;
        value: FilterValue;
      }) => {
        const column = instance.allColumns.find((c) => c.id === columnId);
        if (!column) {
          return;
        }

        const filterTypes = { ...defaultFilterTypes, ...instance.filterTypes };
        const filterFn =
          typeof column.filter === 'function'
            ? column.filter
            : column.filter
            ? filterTypes[column.filter]
            : filterTypes['text'];

        const handleRow = (row: Row<T>): boolean => {
          const newSubRows: Row<T>[] = [];
          let hasFilteredSubRows = false;
          row.initialSubRows?.forEach((r) => {
            const result = handleRow(r);
            if (result) {
              hasFilteredSubRows = true;
              newSubRows.push(r);
            }
          });
          row.subRows = newSubRows;

          // If row has any sub-rows that meet filter conditions,
          // then that row also needs to be shown.
          if (hasFilteredSubRows) {
            return true;
          }

          const result = filterFn([row], [columnId], filterValue);
          if (!result.length) {
            return false;
          }

          return true;
        };

        currentlyFilteredRows = currentlyFilteredRows.filter((row) =>
          handleRow(row),
        );
      };
      instance.state.filters.forEach((f) => handleFilter(f));

      const populateRows = (row: Row<T>) => {
        if (row.depth === 0) {
          filteredRows.push(row);
        }
        filteredFlatRows.push(row);
        filteredRowsById[row.id] = row;
        if (row.subRows.length) {
          row.subRows.forEach((r) => populateRows(r));
        }
      };
      currentlyFilteredRows.forEach((row) => {
        populateRows(row);
      });

      Object.assign(instance, {
        filteredRows,
        filteredFlatRows,
        filteredRowsById,
        rows: filteredRows,
        flatRows: filteredFlatRows,
        rowsById: filteredRowsById,
      });
    });
  };

  const useSubRowSelection = (hooks: Hooks<T>) => {
    hooks.useInstance.push((instance) => {
      const selectedFlatRows: Row<T>[] = [];

      const setSelectionState = (row: Row<T>) => {
        row.subRows.forEach((subRow) => setSelectionState(subRow));
        // react-table only checks filtered sub-rows.
        // In order to show correct states we need to also check initial sub-rows.
        row.isSomeSelected =
          row.isSomeSelected ||
          (row.isSelected && row.subRows.length !== row.initialSubRows?.length);
        row.isSelected =
          row.isSelected && row.subRows.length === row.initialSubRows?.length;
        if (row.isSelected) {
          selectedFlatRows.push(row);
        }
      };
      instance.rows.forEach((row) => setSelectionState(row));

      Object.assign(instance, {
        selectedFlatRows,
      });
    });
  };

  const onSingleSelectHandler = (
    newState: TableState<T>,
    action: ActionType,
    instance?: TableInstance<T>,
  ) => {
    const selectedRowIds = { [action.id]: true } as Record<string, boolean>;
    if (instance?.selectSubRows) {
      const handleRow = (row: Row<T>) => {
        selectedRowIds[row.id] = true;
        row.subRows.forEach((r) => handleRow(r));
      };
      handleRow(instance.rowsById[action.id]);
    }
    return {
      ...newState,
      selectedRowIds,
    };
  };

  const tableStateReducer = (
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
        newState = onSingleSelectHandler(newState, action, instance);
      }
      case TableActions.toggleRowSelected:
      case TableActions.toggleAllRowsSelected:
      case TableActions.toggleAllPageRowsSelected: {
        onSelectHandler(newState, instance, onSelect, isRowDisabled);
        break;
      }
      default:
        break;
    }
    return stateReducer
      ? stateReducer(newState, action, previousState, instance)
      : newState;
  };

  const instance = useTable<T>(
    {
      ...props,
      columns,
      defaultColumn,
      disableSortBy: !isSortable,
      stateReducer: tableStateReducer,
      filterTypes: { ...customFilterFunctions, ...filterFunctions },
      selectSubRows,
    },
    useFlexLayout,
    useFilters,
    useSubRowFiltering,
    useSortBy,
    useExpanded,
    useRowSelect,
    useSubRowSelection,
    useExpanderCell(subComponent, expanderCell, isRowDisabled),
    useSelectionCell(isSelectable, isRowDisabled),
  );

  const {
    getTableProps,
    rows,
    headerGroups,
    getTableBodyProps,
    prepareRow,
    data,
    state,
    allColumns,
    filteredFlatRows,
    dispatch,
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

  const areFiltersSet = allColumns.some((column) => !!column.filterValue);

  const onRowClickHandler = React.useCallback(
    (event: React.MouseEvent, row: Row<T>) => {
      const isDisabled = isRowDisabled?.(row.original);
      if (isSelectable && !isDisabled) {
        if (!row.isSelected && !event.ctrlKey) {
          dispatch({
            type: singleRowSelectedAction,
            id: row.id,
          });
        } else {
          row.toggleRowSelected(!row.isSelected);
        }
      }
      !isDisabled && onRowClick?.(event, row);
    },
    [dispatch, isSelectable, onRowClick, isRowDisabled],
  );

  return (
    <div
      ref={(element) => setOwnerDocument(element?.ownerDocument)}
      id={id}
      {...getTableProps({
        className: cx('iui-table', className),
        style,
      })}
      {...ariaDataAttributes}
    >
      <div className='iui-table-header'>
        {headerGroups.slice(1).map((headerGroup: HeaderGroup<T>) => {
          const headerGroupProps = headerGroup.getHeaderGroupProps({
            className: 'iui-row',
          });
          return (
            <div {...headerGroupProps} key={headerGroupProps.key}>
              {headerGroup.headers.map((column) => {
                const columnProps = column.getHeaderProps({
                  ...column.getSortByToggleProps(),
                  className: cx(
                    'iui-cell',
                    { 'iui-actionable': column.canSort },
                    { 'iui-sorted': column.isSorted },
                    column.columnClassName,
                  ),
                  style: { ...getCellStyle(column) },
                });
                return (
                  <div {...columnProps} key={columnProps.key} title={undefined}>
                    {column.render('Header')}
                    {!isLoading && (data.length != 0 || areFiltersSet) && (
                      <FilterToggle
                        column={column}
                        ownerDocument={ownerDocument}
                      />
                    )}
                    {!isLoading && data.length != 0 && column.canSort && (
                      <div className='iui-cell-end-icon'>
                        {column.isSorted && column.isSortedDesc ? (
                          <SvgSortUp
                            className='iui-icon iui-sort'
                            aria-hidden
                          />
                        ) : (
                          <SvgSortDown
                            className='iui-icon iui-sort'
                            aria-hidden
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div {...getTableBodyProps({ className: 'iui-table-body' })}>
        {data.length !== 0 &&
          rows.map((row: Row<T>) => {
            prepareRow(row);
            return (
              <TableRowMemoized
                row={row}
                rowProps={rowProps}
                isLast={row.index === data.length - 1}
                onRowInViewport={onRowInViewportRef}
                onBottomReached={onBottomReachedRef}
                intersectionMargin={intersectionMargin}
                state={state}
                key={row.getRowProps().key}
                onClick={onRowClickHandler}
                subComponent={subComponent}
                isDisabled={!!isRowDisabled?.(row.original)}
                tableHasSubRows={showSubRows}
                tableInstance={instance}
                expanderCell={expanderCell}
              />
            );
          })}
        {isLoading && data.length === 0 && (
          <div className={'iui-table-empty'}>
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
          <div className={'iui-table-empty'}>{emptyTableContent}</div>
        )}
        {!isLoading &&
          (data.length === 0 || filteredFlatRows.length === 0) &&
          areFiltersSet && (
            <div className={'iui-table-empty'}>{emptyFilteredTableContent}</div>
          )}
      </div>
    </div>
  );
};

export default Table;
