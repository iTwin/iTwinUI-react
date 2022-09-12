/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { ActionType, Row, TableInstance, TableState } from 'react-table';

// const handleRow2Driver = <T extends Record<string, unknown>>(
//   row: Row<T>,
//   instance: TableInstance<T>,
//   newState: TableState<T>,
//   isRowDisabled?: (rowData: T) => boolean,
// ) => {
//   console.log('handle2Driver', row.id);

//   const handleRow2 = (row: Row<T>) => {
//     if (isRowDisabled?.(row.original)) {
//       return false;
//     }

//     let isAllSubSelected = true;
//     row.initialSubRows.forEach((subRow) => {
//       const result = handleRow2(subRow);
//       if (!result) {
//         isAllSubSelected = false;
//       }
//     });

//     // If `selectSubRows` is false, then no need to select sub-rows and just check current selection state.
//     // If a row doesn't have sub-rows then check its selection state.
//     // If it has sub-rows then check whether all of them are selected.
//     if (
//       (!instance.selectSubRows && newState.selectedRowIds[row.id]) ||
//       (!row.initialSubRows.length && newState.selectedRowIds[row.id]) ||
//       (row.initialSubRows.length && isAllSubSelected)
//     ) {
//       newSelectedRowIds[row.id] = true;
//       console.log('current newSelectedRowIds', newSelectedRowIds);
//     }
//     return !!newSelectedRowIds[row.id];
//   };

//   const newSelectedRowIds: Record<string, boolean> = {};
//   handleRow2(row);
// };

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
  console.log('onSingleSelectHandler');

  const selectedRowIds = { [action.id]: true } as Record<string, boolean>;
  if (instance?.selectSubRows) {
    const handleRow = (row: Row<T>) => {
      selectedRowIds[row.id] = true;
      row.subRows.forEach((r) => handleRow(r));
    };
    handleRow(instance.rowsById[action.id]);
  }

  // const index = instance?.initialRows.findIndex((row) => row.id === action.id);
  const newState = {
    ...state,
    lastSelectedRow: action.id,
    selectedRowIds,
  };
  // Passing to `onSelectHandler` to handle filtered sub-rows
  onSelectHandler(newState, instance, onSelect, isRowDisabled);

  return newState;
};

/**
 * Handles selection when clicked on a row while shift key is pressed.
 */
export const onShiftSelectHandler = <T extends Record<string, unknown>>(
  state: TableState<T>,
  action: ActionType,
  instance?: TableInstance<T>,
  onSelect?: (
    selectedData: T[] | undefined,
    tableState?: TableState<T>,
  ) => void,
  isRowDisabled?: (rowData: T) => boolean,
) => {
  // console.log(
  //   instance?.rows,
  //   instance?.initialRows,
  //   instance?.filteredRows,
  //   instance?.flatRows,
  //   instance?.rowsById,
  // );
  // instance?.flatRows.forEach((r) => console.log('row### ', r.id));

  let startIndex = instance?.flatRows.findIndex(
    (row) => row.id === state.lastSelectedRow,
  );
  let endIndex = instance?.flatRows.findIndex((row) => row.id === action.id);
  if (startIndex == null || startIndex < 0) {
    startIndex = 0;
  }
  if (endIndex == null || endIndex < 0) {
    endIndex = 0;
  }

  if (startIndex > endIndex) {
    const temp = startIndex;
    startIndex = endIndex;
    endIndex = temp;
  }

  const selectedRowIds: Record<string, boolean> = {};
  const endId = action.id;

  console.log('start-end', startIndex, endIndex, endId);
  // const newState = {
  //   ...state,
  //   selectedRowIds,
  // };
  // For all rows between start and end
  // const disabledRowIds = [];
  // let currentDisabledRowId = '';

  // const handleRow1 = (row: Row<T>) => {
  //   const rowDisabled = isRowDisabled?.(row.original);
  //   if (rowDisabled) {
  //     // disabledRowIds.push(row.id);
  //     currentDisabledRowId = row.id;
  //   }
  //   // console.log(row.id, row.original);
  //   // is NOT ancestor of endId && is NOT child of disabled row
  //   // !isSubRow(row.id, endId) && !isSubRow(currentDisabledRowId, row.id)
  //   row.initialSubRows.length === 0 && !isSubRow(currentDisabledRowId, row.id)
  //     ? (selectedRowIds[row.id] = true)
  //     : null;
  // };

  instance?.flatRows.slice(startIndex, endIndex + 1).forEach((r) => {
    selectedRowIds[r.id] = true;
    console.log('foreach iter', selectedRowIds);
  });
  // For the last row (endId)
  if (instance != null) {
    const handleRow = (row: Row<T>) => {
      // handleRow1(row);
      // row.initialSubRows.forEach((r) => handleRow1(r));

      selectedRowIds[row.id] = true;
      row.subRows.forEach((r) => handleRow(r));
    };
    handleRow(instance.rowsById[action.id]);
  }
  const newState = {
    ...state,
    selectedRowIds: selectedRowIds,
  };
  // const selectedData = getSelectedData(selectedRowIds, instance);
  // onSelect?.(selectedData, newState);
  console.log('slice', instance?.flatRows.slice(startIndex, endIndex + 1));
  console.log('old selectedRowIds', selectedRowIds, newState.selectedRowIds);
  onSelectHandler(newState, instance, onSelect, isRowDisabled);
  console.log('new selectedRowIds', newState.selectedRowIds);
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

// /**
//  * @returns `true` if `subId` is indeed a sub-row of `id`, else `false`
//  * @example
//  * isSubRow('1.4', '1.4.2.3') // true
//  * isSubRow('1.3', '1.2.5')   // false
//  * isSubRow('2.4.5', '2.4.5') // true
//  */
// const isSubRow = (id: string, subId: string) => {
//   const idSplit = id.split('.');
//   const subIdSplit = subId.split('.');

//   let i = 0;
//   while (i < idSplit.length) {
//     if (idSplit[i] !== subIdSplit[i]) {
//       return false;
//     }
//     i++;
//   }

//   return true;
// };
