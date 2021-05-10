/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import {
  actions as TableActions,
  CellProps,
  ColumnInstance,
  HeaderGroup,
  HeaderProps,
  Hooks,
  TableOptions,
  Row,
  TableState,
  useFlexLayout,
  useMountedLayoutEffect,
  useRowSelect,
  useSortBy,
  useTable,
  ActionType,
  TableInstance,
  useExpanded,
} from 'react-table';
import { Checkbox } from '../Checkbox';
import { ProgressRadial } from '../ProgressIndicators';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/table.css';
import { CommonProps } from '../utils/props';
import SvgSortDown from '@itwin/itwinui-icons-react/cjs/icons/SortDown';
import SvgSortUp from '@itwin/itwinui-icons-react/cjs/icons/SortUp';
import { getCellStyle } from './utils';
import { TableRowMemoized } from './TableRowMemoized';
import { IconButton } from '../Buttons';
import { SvgChevronDown, SvgChevronRight } from '@itwin/itwinui-icons-react';

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
   * Component will be placed right after the row, in the same row group div.
   */
  expandedSubComponent?: (row: Row<T>) => React.ReactNode;
  /**
   * Handler for row expand events. Will trigger when expanding and condensing rows.
   */
  onExpand?: (
    newState: TableState<T>,
    action: ActionType,
    previousState: TableState<T>,
    instance?: TableInstance<T>,
  ) => void;
  /**
   * Flag whether to provide default expander column
   */
  provideDefaultExpander?: boolean;
} & Omit<CommonProps, 'title'>;

/**
 * Table based on react-table
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
    isSelectable = false,
    onSelect,
    isSortable = false,
    onSort,
    stateReducer,
    onBottomReached,
    onRowInViewport,
    intersectionMargin = 300,
    expandedSubComponent,
    onExpand,
    provideDefaultExpander: provideExpanderColumn = true,
    ...rest
  } = props;

  useTheme();

  const defaultColumn = React.useMemo(
    () => ({
      maxWidth: 0,
      minWidth: 0,
      width: 0,
    }),
    [],
  );

  // useRef prevents from rerendering when one of these callbacks changes
  const onSelectRef = React.useRef(onSelect);
  const onBottomReachedRef = React.useRef(onBottomReached);
  const onRowInViewportRef = React.useRef(onRowInViewport);
  React.useEffect(() => {
    onSelectRef.current = onSelect;
    onBottomReachedRef.current = onBottomReached;
    onRowInViewportRef.current = onRowInViewport;
  }, [onBottomReached, onRowInViewport, onSelect]);

  const useExpanderHook = (hooks: Hooks<T>) => {
    if (!(expandedSubComponent && provideExpanderColumn)) {
      return;
    }
    hooks.allColumns.push((columns: ColumnInstance<T>[]) => [
      {
        id: 'iui-table-expander',
        disableResizing: true,
        disableGroupBy: true,
        minWidth: 48,
        width: 48,
        maxWidth: 48,
        columnClassName: 'iui-tables-slot',
        cellClassName: 'iui-tables-slot',
        Cell: ({ row }: CellProps<T>) => (
          <IconButton
            styleType='borderless'
            size='small'
            onClick={() => {
              row.toggleRowExpanded();
            }}
          >
            {row.isExpanded ? <SvgChevronDown /> : <SvgChevronRight />}
          </IconButton>
        ),
      },
      ...columns,
    ]);
  };

  const useSelectionHook = (hooks: Hooks<T>) => {
    if (!isSelectable) {
      return;
    }

    hooks.allColumns.push((columns: ColumnInstance<T>[]) => [
      // Let's make a column for selection
      {
        id: 'iui-table-checkbox-selector',
        disableResizing: true,
        disableGroupBy: true,
        minWidth: 48,
        width: 48,
        maxWidth: 48,
        columnClassName: 'iui-tables-slot',
        cellClassName: 'iui-tables-slot',
        Header: ({ getToggleAllRowsSelectedProps }: HeaderProps<T>) => (
          <Checkbox {...getToggleAllRowsSelectedProps()} />
        ),
        Cell: ({ row }: CellProps<T>) => (
          <Checkbox {...row.getToggleRowSelectedProps()} />
        ),
      },
      ...columns,
    ]);

    hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
      // Fix the parent group of the selection button to not be resizable
      const selectionGroupHeader = headerGroups[0].headers[0];
      selectionGroupHeader.canResize = false;
    });
  };

  const tableStateReducer = (
    newState: TableState<T>,
    action: ActionType,
    previousState: TableState<T>,
    instance?: TableInstance<T>,
  ): TableState<T> => {
    if (action.type === TableActions.toggleSortBy) {
      onSort?.(newState);
    } else if (action.type === TableActions.toggleRowExpanded) {
      onExpand?.(newState, action, previousState, instance);
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
    },
    useFlexLayout,
    useSortBy,
    useExpanded,
    useRowSelect,
    useSelectionHook,
    useExpanderHook,
  );

  const {
    getTableProps,
    rows,
    headerGroups,
    getTableBodyProps,
    prepareRow,
    data,
    selectedFlatRows,
    state,
  } = instance;

  useMountedLayoutEffect(() => {
    if (isSelectable && selectedFlatRows) {
      onSelectRef.current?.(
        selectedFlatRows.map((row) => row.original),
        state,
      );
    }
  }, [selectedFlatRows, onSelectRef]);

  const ariaDataAttributes = Object.entries(rest).reduce(
    (result, [key, value]) => {
      if (key.startsWith('data-') || key.startsWith('aria-')) {
        result[key] = value;
      }
      return result;
    },
    {} as Record<string, string>,
  );

  return (
    <div
      {...getTableProps({
        className: cx('iui-tables-table', className),
        style,
      })}
      {...ariaDataAttributes}
    >
      <div>
        {headerGroups.slice(1).map((headerGroup: HeaderGroup<T>) => {
          const headerGroupProps = headerGroup.getHeaderGroupProps({
            className: 'iui-tables-row',
          });
          return (
            <div {...headerGroupProps} key={headerGroupProps.key}>
              {headerGroup.headers.map((column) => {
                const columnProps = column.getHeaderProps({
                  ...column.getSortByToggleProps(),
                  className: cx(
                    'iui-tables-cell',
                    'iui-tables-head',
                    { 'iui-active-sort': column.isSorted },
                    column.columnClassName,
                  ),
                  style: {
                    ...getCellStyle(column),
                    cursor: column.canSort ? 'pointer' : undefined,
                  },
                });
                return (
                  <div {...columnProps} key={columnProps.key}>
                    {column.render('Header')}
                    {!isLoading && data.length != 0 && column.canSort && (
                      <div className='iui-sort'>
                        <div className='iui-icon-wrapper'>
                          {column.isSorted && column.isSortedDesc ? (
                            <SvgSortUp className='iui-icon' aria-hidden />
                          ) : (
                            <SvgSortDown className='iui-icon' aria-hidden />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div {...getTableBodyProps({ className: 'iui-tables-body' })}>
        {data.length !== 0 &&
          rows.map((row: Row<T>) => {
            prepareRow(row);
            const rowProps = row.getRowProps({
              className: cx('iui-tables-row', {
                'iui-tables-row-active': row.isSelected,
                'iui-tables-expanded': row.isExpanded,
              }),
            });
            return (
              <TableRowMemoized
                row={row}
                rowProps={rowProps}
                isLast={row.index === data.length - 1}
                onRowInViewport={onRowInViewportRef}
                onBottomReached={onBottomReachedRef}
                intersectionMargin={intersectionMargin}
                state={state}
                key={rowProps.key}
                expandedSubComponent={expandedSubComponent}
                isExpanded={row.isExpanded}
              />
            );
          })}
        {isLoading && data.length === 0 && (
          <div className={'iui-tables-message-container'}>
            <ProgressRadial indeterminate={true} />
          </div>
        )}
        {isLoading && data.length !== 0 && (
          <div className='iui-tables-row'>
            <div
              className='iui-tables-cell'
              style={{ justifyContent: 'center' }}
            >
              <ProgressRadial
                indeterminate={true}
                size='small'
                style={{ float: 'none', marginLeft: 0 }}
              />
            </div>
          </div>
        )}
        {!isLoading && data.length === 0 && (
          <div className={'iui-tables-message-container'}>
            {emptyTableContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
