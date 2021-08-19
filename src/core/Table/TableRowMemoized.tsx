/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { Cell, CellProps, Row, TableInstance, TableState } from 'react-table';
import SvgChevronRight from '@itwin/itwinui-icons-react/cjs/icons/ChevronRight';
import { useIntersection } from '../utils/hooks/useIntersection';
import { getCellStyle } from './utils';
import { CSSTransition } from 'react-transition-group';
import { useMergedRefs } from '../utils/hooks/useMergedRefs';
import { IconButton } from '../Buttons';
import { SELECTION_CELL_ID } from './hooks';

/**
 * Memoization is needed to avoid unnecessary re-renders of all rows when additional data is added when lazy-loading.
 * Using `isLast` here instead of passing data length to avoid re-renders of all rows when more data is added. Now only the last row re-renders.
 * Although state is not used it is needed for `React.memo` to check state that changes row state e.g. selection.
 * When adding new features check whether it changes state that affects row. If it does then add equality check to `React.memo`.
 */
const TableRow = <T extends Record<string, unknown>>(props: {
  row: Row<T>;
  rowProps?: (row: Row<T>) => React.ComponentPropsWithRef<'div'>;
  isLast: boolean;
  onRowInViewport: React.MutableRefObject<((rowData: T) => void) | undefined>;
  onBottomReached: React.MutableRefObject<(() => void) | undefined>;
  intersectionMargin: number;
  state: TableState<T>; // Needed for explicitly checking selection changes
  onClick?: (event: React.MouseEvent, row: Row<T>) => void;
  subComponent?: (row: Row<T>) => React.ReactNode;
  isDisabled: boolean;
  tableHasSubRows: boolean;
  tableInstance: TableInstance<T>;
  expanderCell?: (cellProps: CellProps<T>) => React.ReactNode;
}) => {
  const {
    row,
    rowProps,
    isLast,
    onRowInViewport,
    onBottomReached,
    intersectionMargin,
    onClick,
    subComponent,
    isDisabled,
    tableHasSubRows,
    tableInstance,
    expanderCell,
  } = props;

  const onIntersect = React.useCallback(() => {
    onRowInViewport.current?.(row.original);
    isLast && onBottomReached.current?.();
  }, [isLast, onBottomReached, onRowInViewport, row.original]);

  const rowRef = useIntersection(onIntersect, {
    rootMargin: `${intersectionMargin}px`,
  });

  const expandedHeight = React.useRef(0);

  const userRowProps = rowProps?.(row);
  const mergedProps = {
    ...row.getRowProps(),
    ...userRowProps,
    ...{
      className: cx(
        'iui-row',
        {
          'iui-selected': row.isSelected,
          'iui-row-expanded': row.isExpanded && subComponent,
          'iui-disabled': isDisabled,
        },
        userRowProps?.className,
      ),
    },
  };

  const refs = useMergedRefs(rowRef, mergedProps.ref);

  const subRowExpanderCellIndex = row.cells.findIndex(
    (c) => c.column.id !== SELECTION_CELL_ID,
  );

  const getSubRowExpander = (cell: Cell<T>) =>
    expanderCell ? (
      expanderCell({
        ...tableInstance,
        ...{ cell, row: cell.row, value: cell.value, column: cell.column },
      })
    ) : (
      <IconButton
        style={{ marginRight: 8 }}
        className='iui-row-expander'
        styleType='borderless'
        size='small'
        onClick={(e) => {
          e.stopPropagation();
          cell.row.toggleRowExpanded();
        }}
        disabled={isDisabled}
      >
        {
          <SvgChevronRight
            style={{
              transform: cell.row.isExpanded ? 'rotate(90deg)' : undefined,
            }}
          />
        }
      </IconButton>
    );

  return (
    <>
      <div
        {...mergedProps}
        ref={refs}
        onClick={(event) => {
          mergedProps?.onClick?.(event);
          onClick?.(event, row);
        }}
      >
        {row.cells.map((cell, index) => {
          const cellProps = cell.getCellProps({
            className: cx('iui-cell', cell.column.cellClassName),
            style: {
              ...getCellStyle(cell.column),
              ...{
                paddingLeft:
                  tableHasSubRows && index === subRowExpanderCellIndex
                    ? // If it can't be expanded then shift by another level to align with expandable rows on the same depth
                      (row.depth + (row.canExpand ? 0 : 1)) * 35 // 35 = 27 + 8 = expander_width + margin
                    : undefined,
              },
            },
          });
          return (
            <div {...cellProps} key={cellProps.key}>
              {tableHasSubRows &&
                index === subRowExpanderCellIndex &&
                cell.row.canExpand &&
                getSubRowExpander(cell)}
              {cell.render('Cell')}
            </div>
          );
        })}
      </div>
      {subComponent && (
        <CSSTransition
          in={row.isExpanded}
          timeout={200}
          unmountOnExit={true}
          onEnter={(node) => (node.style.height = `0px`)}
          onEntering={(node) =>
            (node.style.height = `${expandedHeight.current}px`)
          }
          onEntered={(node) => (node.style.height = 'auto')}
          onExit={(node) => (node.style.height = `${expandedHeight.current}px`)}
          onExiting={(node) => (node.style.height = `0px`)}
          classNames='iui'
        >
          {
            <div
              className='iui-row iui-expanded-content'
              ref={(ref) => {
                if (ref) {
                  expandedHeight.current = ref.offsetHeight;
                }
              }}
            >
              {subComponent(row)}
            </div>
          }
        </CSSTransition>
      )}
    </>
  );
};

const hasAnySelectedSubRow = <T extends Record<string, unknown>>(
  row: Row<T>,
  selectedRowIds?: Record<string, boolean>,
): boolean => {
  if (selectedRowIds?.[row.id]) {
    return true;
  }
  return row.subRows.some((subRow) =>
    hasAnySelectedSubRow(subRow, selectedRowIds),
  );
};

export const TableRowMemoized = React.memo(
  TableRow,
  (prevProp, nextProp) =>
    prevProp.isLast === nextProp.isLast &&
    prevProp.onRowInViewport === nextProp.onRowInViewport &&
    prevProp.onBottomReached === nextProp.onBottomReached &&
    prevProp.onClick === nextProp.onClick &&
    prevProp.row.original === nextProp.row.original &&
    prevProp.state.selectedRowIds?.[prevProp.row.id] ===
      nextProp.state.selectedRowIds?.[nextProp.row.id] &&
    // Check if sub-rows selection has changed and whether to show indeterminate state or not
    prevProp.row.subRows.some((subRow) =>
      hasAnySelectedSubRow(subRow, prevProp.state.selectedRowIds),
    ) ===
      nextProp.row.subRows.some((subRow) =>
        hasAnySelectedSubRow(subRow, nextProp.state.selectedRowIds),
      ) &&
    prevProp.state.expanded?.[prevProp.row.id] ===
      nextProp.state.expanded?.[nextProp.row.id] &&
    prevProp.subComponent === nextProp.subComponent &&
    prevProp.row.cells.every(
      (cell, index) => nextProp.row.cells[index].column === cell.column,
    ) &&
    prevProp.isDisabled === nextProp.isDisabled &&
    prevProp.rowProps === nextProp.rowProps &&
    prevProp.expanderCell === nextProp.expanderCell &&
    prevProp.tableHasSubRows === nextProp.tableHasSubRows,
) as typeof TableRow;
