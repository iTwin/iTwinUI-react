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

  // console.log(
  //   'SingleSelect',
  //   typeof Object.keys(instance?.rowsById ?? {}).map(
  //     (key) => instance?.rowsById[key],
  //   ),
  //   Object.keys(instance?.rowsById ?? {}).map((key) => instance?.rowsById[key]),
  // );

  console.log('SingleSelect', 1, instance?.allRowIds);

  const index = instance?.allRowIds.findIndex((id) => id === action.id);

  const newState = {
    ...state,
    lastSelectedRow: index,
    // lastSelectedRow: instance?.rowsById[action.id].index,
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

export const onShiftSelect = <T extends Record<string, unknown>>(
  state: TableState<T>,
  action: ActionType,
  instance?: TableInstance<T>,
  onSelect?: (
    selectedData: T[] | undefined,
    tableState?: TableState<T>,
  ) => void,
  // isRowDisabled?: (rowData: T) => boolean,
) => {
  let startIndex = state.lastSelectedRow ?? 0; // relative index to parent
  let endIndex = instance?.allRowIds.findIndex((id) => id === action.id) ?? 0; // relative index to pages

  if (startIndex > endIndex) {
    const temp = startIndex;
    startIndex = endIndex;
    endIndex = temp;
  }

  // console.log('start to end', startIndex, endIndex, instance?.page);

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

  const selectedRowIds: Record<string, boolean> = {};
  // const handleRow = (row: Row<T>) => {
  //   if (isRowDisabled?.(row.original)) {
  //     return;
  //   }

  //   const shouldSelect =
  //     !isSubRow(row.id, instance?.page[endIndex].id ?? '') ||
  //     row.id === instance?.page[endIndex].id;
  //   // pageRowIndex == endIndex;
  //   console.log(
  //     shouldSelect,
  //     row.index,
  //     endIndex,
  //     row.id,
  //     instance?.page[endIndex].id ?? '',
  //   );
  //   if (shouldSelect) {
  //     selectedRowIds[row.id] = true;
  //   }
  //   // selectedRowIds[row.id] = true;
  //   // row.initialSubRows.forEach((r) => handleRow(r));
  // };
  console.log(
    'slicing',
    startIndex,
    endIndex + 1,
    instance?.page.slice(startIndex, endIndex + 1),
  );
  // instance?.page.slice(startIndex, endIndex + 1).forEach((r) => handleRow(r)); // relative index to pages
  instance?.allRowIds
    .slice(startIndex, endIndex + 1)
    .forEach((id) => (selectedRowIds[id] = true));

  const newState = {
    ...state,
    selectedRowIds,
  };

  const selectedData = getSelectedData(selectedRowIds, instance);
  onSelect?.(selectedData, newState);

  return newState;
};
