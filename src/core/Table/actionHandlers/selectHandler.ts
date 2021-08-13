/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Row, TableInstance, TableState } from 'react-table';

export const onSelectHandler = <T extends Record<string, unknown>>(
  newState: TableState<T>,
  instance?: TableInstance<T>,
  onSelect?: (
    selectedData: T[] | undefined,
    tableState?: TableState<T>,
  ) => void,
  isRowDisabled?: (rowData: T) => boolean,
) => {
  if (!instance?.rows.length) {
    onSelect?.([], newState);
    return;
  }

  const newSelectedRowIds = {} as Record<string, boolean>;

  const handleRow = (row: Row<T>) => {
    if (isRowDisabled?.(row.original)) {
      return false;
    }

    let isAllSubSelected = true;
    row.initialSubRows?.forEach((subRow) => {
      const result = handleRow(subRow);
      if (!result) {
        isAllSubSelected = false;
      }
    });

    // If `selectSubRows` is false, then no need to select sub-rows
    // and just check current selection state.
    if (!instance.selectSubRows && newState.selectedRowIds[row.id]) {
      newSelectedRowIds[row.id] = true;
      return true;
    }

    // If a row doesn't have sub-rows then check its selection state.
    // If it has sub-rows then check whether all of them are selected.
    if (
      (!row.initialSubRows?.length && newState.selectedRowIds[row.id]) ||
      (row.initialSubRows?.length && isAllSubSelected)
    ) {
      newSelectedRowIds[row.id] = true;
    }
    return !!newSelectedRowIds[row.id];
  };
  instance.initialRows.forEach((row) => handleRow(row));

  const selectedData: T[] = [];
  const setSelectedData = (row: Row<T>) => {
    if (newSelectedRowIds[row.id]) {
      selectedData.push(row.original);
    }
    row.initialSubRows?.forEach((subRow) => setSelectedData(subRow));
  };
  instance.initialRows.forEach((row) => setSelectedData(row));

  newState.selectedRowIds = newSelectedRowIds;
  onSelect?.(selectedData, newState);
};
