/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Hooks, Row, TableInstance } from 'react-table';

export const useSubRowSelection = <T extends Record<string, unknown>>(
  hooks: Hooks<T>,
) => {
  hooks.useInstance.push(useInstance);
};

const useInstance = <T extends Record<string, unknown>>(
  instance: TableInstance<T>,
) => {
  const selectedFlatRows = React.useMemo(() => {
    const selectedFlatRows: Row<T>[] = [];
    const setSelectionState = (row: Row<T>) => {
      // react-table only checks filtered sub-rows.
      // In order to show correct states we need to also check all initial sub-rows.
      row.isSomeSelected =
        row.isSomeSelected ||
        (row.isSelected && row.subRows.length !== row.initialSubRows.length);
      row.isSelected =
        row.isSelected && row.subRows.length === row.initialSubRows.length;

      if (row.isSelected) {
        selectedFlatRows.push(row);
      }
      row.subRows.forEach((subRow) => setSelectionState(subRow));
    };
    instance.rows.forEach((row) => setSelectionState(row));
  }, [instance.rows]);

  Object.assign(instance, {
    selectedFlatRows,
  });
};
