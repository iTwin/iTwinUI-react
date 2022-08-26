/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { ActionType, Row, TableInstance, TableState } from 'react-table';

/**
 * Handles selection when clicked on a checkbox.
 */
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
    row.initialSubRows.forEach((subRow) => {
      const result = handleRow(subRow);
      if (!result) {
        isAllSubSelected = false;
      }
    });

    // If `selectSubRows` is false, then no need to select sub-rows and just check current selection state.
    // If a row doesn't have sub-rows then check its selection state.
    // If it has sub-rows then check whether all of them are selected.
    if (
      (!instance.selectSubRows && newState.selectedRowIds[row.id]) ||
      (!row.initialSubRows.length && newState.selectedRowIds[row.id]) ||
      (row.initialSubRows.length && isAllSubSelected)
    ) {
      newSelectedRowIds[row.id] = true;
    }
    return !!newSelectedRowIds[row.id];
  };
  instance.initialRows.forEach((row) => handleRow(row));

  const selectedData = getSelectedData(newSelectedRowIds, instance);

  newState.selectedRowIds = newSelectedRowIds;
  onSelect?.(selectedData, newState);
};

export const onShiftSelectHandler = <T extends Record<string, unknown>>(
  state: TableState<T>,
  action: ActionType,
  instance: TableInstance<T>,
) => {
  const resetSelection = () => {
    instance.toggleAllRowsSelected(false);
  };

  const getGreaterId = (id: string) => {
    const greaterId = id.split('.');
    greaterId[greaterId.length - 1] = `${
      parseInt(greaterId[greaterId.length - 1]) + 1
    }`;
    return greaterId.join('.');
  };

  const getParentId = (id: string) => {
    const lastDotIndex = id.lastIndexOf('.');
    if (lastDotIndex < 0) {
      return null;
    }
    return id.substring(0, lastDotIndex);
  };

  /**
   * @returns true if `endId` is a parent of `currentId`
   * @example
   * isAncestorParent('1.4.2.3', '1.4') // true
   * isAncestorParent('1.2.5', '1.3')   // false
   * isAncestorParent('2.4.5', '2.4.5') // true
   */
  const isAncestorParent = (currentId: string, endId: string) => {
    const currentIdSplit = currentId.split('.');
    const endIdSplit = endId.split('.');

    let i = 0;
    while (i < endIdSplit.length) {
      if (currentIdSplit[i] !== endIdSplit[i]) {
        return false;
      }
      i++;
    }

    return true;
  };

  // Returns the next row as if it was just a non subrows list
  const getNextRow = (currentRow: Row<T>, endId: string) => {
    let nextRow;
    if (
      (currentRow.subRows ?? []).length > 0 &&
      isAncestorParent(currentRow.id, endId)
    ) {
      // child
      nextRow = currentRow.subRows[0];
    } else {
      // next sibling
      nextRow = instance.rowsById[getGreaterId(currentRow.id)];

      // If the next sibling doesn't exist, go to the next child at a one upper depth
      let parentId = getParentId(currentRow.id);
      while (nextRow == null && parentId != null) {
        nextRow = instance.rowsById[getGreaterId(parentId)];
        parentId = getParentId(parentId);
      }
    }

    return nextRow;
  };

  resetSelection();

  // If no row selected before shift clicking, then assume first row is the last selectedRow (like Windows File Explorer)
  let startId = state.lastSelectedRow ?? instance.rows[0].id;
  let endId = action.id;

  // Make sure startId is lesser than endId. Selection always goes from top to bottom
  if (startId > endId) {
    const temp = startId;
    startId = endId;
    endId = temp;
  }

  let currentRow = instance.rowsById[startId];

  while (currentRow != null) {
    if (currentRow.id === endId) {
      currentRow.toggleRowSelected(true);
      break;
    }

    if (!isAncestorParent(currentRow.id, endId)) {
      currentRow.toggleRowSelected(true);
    }

    currentRow = getNextRow(currentRow, endId);
  }
};

/**
 * Handles selection when clicked on a row.
 */
export const onSingleSelectHandler = <T extends Record<string, unknown>>(
  state: TableState<T>,
  action: ActionType,
  instance?: TableInstance<T>,
  onSelect?: (
    selectedData: T[] | undefined,
    tableState?: TableState<T>,
  ) => void,
  isRowDisabled?: (rowData: T) => boolean,
) => {
  const selectedRowIds = { [action.id]: true } as Record<string, boolean>;
  if (instance?.selectSubRows) {
    const handleRow = (row: Row<T>) => {
      selectedRowIds[row.id] = true;
      row.subRows.forEach((r) => handleRow(r));
    };
    handleRow(instance.rowsById[action.id]);
  }

  const newState = {
    ...state,
    lastSelectedRow: action.id,
    selectedRowIds,
  };
  // Passing to `onSelectHandler` to handle filtered sub-rows
  onSelectHandler(newState, instance, onSelect, isRowDisabled);

  return newState;
};

const getSelectedData = <T extends Record<string, unknown>>(
  selectedRowIds: Record<string, boolean>,
  instance?: TableInstance<T>,
) => {
  const selectedData: T[] = [];
  const setSelectedData = (row: Row<T>) => {
    if (selectedRowIds[row.id]) {
      selectedData.push(row.original);
    }
    row.initialSubRows.forEach((subRow) => setSelectedData(subRow));
  };
  instance?.initialRows.forEach((row) => setSelectedData(row));

  return selectedData;
};
