/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { ColumnInstance } from 'react-table';

export const getCellStyle = <T extends Record<string, unknown>>(
  column: ColumnInstance<T>,
): React.CSSProperties | undefined => {
  const style = {} as React.CSSProperties;
  style.flex = `1 1 145px`;
  if (column.width) {
    style.width = column.width;
    style.flex = `1 0 ${column.width}px`;
  }
  if (column.maxWidth) {
    style.maxWidth = column.maxWidth;
  }
  if (column.minWidth) {
    style.minWidth = column.minWidth;
  }
  return style;
};
