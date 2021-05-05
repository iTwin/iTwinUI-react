/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { Row, TableRowProps, TableState } from 'react-table';
import { useIntersection } from '../utils/hooks/useIntersection';
import { getCellStyle } from './utils';

const TableRow = <T extends Record<string, unknown>>(props: {
  row: Row<T>;
  rowProps: TableRowProps;
  isLast: boolean;
  onRowInViewport: React.MutableRefObject<((rowData: T) => void) | undefined>;
  onBottomReached: React.MutableRefObject<(() => void) | undefined>;
  intersectionMargin: number;
  state: TableState<T>; // Needed for explicitly checking selection changes
}) => {
  const {
    row,
    rowProps,
    isLast,
    onRowInViewport,
    onBottomReached,
    intersectionMargin,
  } = props;

  const onIntersect = React.useCallback(() => {
    onRowInViewport.current?.(row.original);
    isLast && onBottomReached.current?.();
  }, [isLast, onBottomReached, onRowInViewport, row.original]);

  const setRef = useIntersection(onIntersect, {
    rootMargin: `${intersectionMargin}px`,
  });

  return (
    <div {...rowProps} key={rowProps.key} ref={setRef}>
      {row.cells.map((cell) => {
        const cellProps = cell.getCellProps({
          className: cx('iui-tables-cell', cell.column.cellClassName),
          style: getCellStyle(cell.column),
        });
        return (
          <div {...cellProps} key={cellProps.key}>
            {cell.render('Cell')}
          </div>
        );
      })}
    </div>
  );
};

export const TableRowMemoized = React.memo(
  TableRow,
  (prevProp, nextProp) =>
    prevProp.isLast === nextProp.isLast &&
    prevProp.onRowInViewport === nextProp.onRowInViewport &&
    prevProp.onBottomReached === nextProp.onBottomReached &&
    prevProp.row.original === nextProp.row.original &&
    prevProp.state.selectedRowIds?.[prevProp.row.id] ===
      nextProp.state.selectedRowIds?.[nextProp.row.id],
) as typeof TableRow;
