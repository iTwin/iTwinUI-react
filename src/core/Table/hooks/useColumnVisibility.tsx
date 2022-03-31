/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { ColumnInstance, Hooks } from 'react-table';
import { COLUMN_MANAGER_ID, ManagerColumn } from '../columns';
export const useColumnVisibility = <T extends Record<string, unknown>>(
  hasColumnManager: boolean,
) => (hooks: Hooks<T>) => {
  if (!hasColumnManager) {
    return;
  }

  hooks.allColumns.push((columns: ColumnInstance<T>[]) => {
    const hasManagerColumn = columns.find((c) => c.id === COLUMN_MANAGER_ID);
    if (hasManagerColumn) {
      return columns;
    }
    const lastColumn = columns[columns.length - 1];
    const managerColumn = ManagerColumn();
    // If the last column is an iui-slot that has it's own Cell props, don't generate a separate column for Column Manager
    if (
      lastColumn.cellClassName?.includes('iui-slot') &&
      lastColumn.Cell !== undefined
    ) {
      columns.pop();
      return [...columns, { ...managerColumn, Cell: lastColumn.Cell }];
    } else {
      return [...columns, managerColumn];
    }
  });
};
