/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { ColumnInstance, IdType, TableInstance } from 'react-table';
import { SELECTION_CELL_ID } from './hooks/useSelectionCell';

export const getCellStyle = <T extends Record<string, unknown>>(
  column: ColumnInstance<T>,
  isTableResizing: boolean,
): React.CSSProperties | undefined => {
  const style = {} as React.CSSProperties;
  style.flex = `1 1 145px`;
  if (column.width) {
    const width =
      typeof column.width === 'string' ? column.width : `${column.width}px`;
    style.width = width;
    // This allows flexbox to handle the width of the column on table resize
    if (isTableResizing && column.canResize) {
      style.flex = `${Number(column.width)} 1 ${width}`;
    } else {
      style.flex = `0 0 ${width}`;
    }
  }
  if (column.maxWidth) {
    style.maxWidth = `${column.maxWidth}px`;
  }
  if (column.minWidth) {
    style.minWidth = `${column.minWidth}px`;
  }
  return style;
};

const isLastLeftStickyColumn = <T extends Record<string, unknown>>(
  id: IdType<T>,
  columns: ColumnInstance<T>[],
) => {
  const index = columns.findIndex((x) => x.id === id);
  const nextColumn = columns[index + 1];
  return !nextColumn.sticky;
};

const getLeftMargin = <T extends Record<string, unknown>>(
  id: IdType<T>,
  columns: ColumnInstance<T>[],
) => {
  let leftMargin = 0;
  const index = columns.findIndex((x) => x.id === id);
  for (let i = 0; i < index; i++) {
    leftMargin += +columns[i].width! || 0;
  }
  return leftMargin;
};

const getRightMargin = <T extends Record<string, unknown>>(
  id: IdType<T>,
  columns: ColumnInstance<T>[],
) => {
  let rightMargin = 0;
  const index = columns.findIndex((x) => x.id === id);
  for (let i = index + 1; i < columns.length; i++) {
    rightMargin += +columns[i].width!;
  }
  return rightMargin;
};

const isLastRightStickyColumn = <T extends Record<string, unknown>>(
  id: IdType<T>,
  columns: ColumnInstance<T>[],
) => {
  return columns[columns.length - 1].id === id;
};

export const getStickyCellStyle = <T extends Record<string, unknown>>(
  tableInstance: TableInstance<T>,
  column: ColumnInstance<T>,
  isSelectable: boolean,
): React.CSSProperties => {
  const style = {} as React.CSSProperties;
  if (column.id === SELECTION_CELL_ID) {
    const isStickyTable = !!tableInstance.flatHeaders.find((x) => x.sticky);
    if (isStickyTable) {
      style.backgroundColor = '#FFF';
      style.position = 'sticky';
      style.zIndex = 1;
      style.left = 0;
      style.boxShadow = '-1px 0px 5px -2px gray';
    }
  }

  if (column.sticky) {
    style.backgroundColor = '#FFF';
    style.position = 'sticky';
    style.zIndex = 1;
    if (column.sticky === 'left') {
      style.left = getLeftMargin(column.id, tableInstance.flatHeaders);
      if (isLastLeftStickyColumn(column.id, tableInstance.flatHeaders)) {
        style.boxShadow = '1px 0px 5px -2px gray';
      }
    }
    if (column.sticky === 'right') {
      style.right = getRightMargin(column.id, tableInstance.flatHeaders);
      if (!isLastRightStickyColumn(column.id, tableInstance.flatHeaders)) {
        style.boxShadow = '-1px 0px 5px -2px gray';
      } else {
        style.boxShadow = '1px 0px 5px -2px gray';
      }
    }
  }
  return style;
};
