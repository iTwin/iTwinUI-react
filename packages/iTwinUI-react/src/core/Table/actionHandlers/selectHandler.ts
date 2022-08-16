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
  console.log('HERE');

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

  // console.log('newState', newState);

  // Passing to `onSelectHandler` to handle filtered sub-rows
  onSelectHandler(newState, instance, onSelect, isRowDisabled);

  return newState;
};

export const onShiftSelectHandler = <T extends Record<string, unknown>>(
  state: TableState<T>,
  action: ActionType,
  instance: TableInstance<T>,
) => {
  // const isInRange = (value: number, limit1: number, limit2: number) => {
  //   return (
  //     (limit1 <= value && value <= limit2) ||
  //     (limit2 <= value && value <= limit1)
  //   );
  // };

  const getParentId = (id: string) => {
    const lastDotIndex = id.lastIndexOf('.');
    if (lastDotIndex < 0) {
      return null;
    }
    return id.substring(0, lastDotIndex);
  };

  const getGreaterId = (id: string) => {
    const greaterId = id.split('.');
    greaterId[greaterId.length - 1] = `${
      parseInt(greaterId[greaterId.length - 1]) + 1
    }`;
    return greaterId.join('.');
  };

  // const isSameParent = (id1: string, id2: string) => {
  //   return getParentId(id1) === getParentId(id2);
  // };

  const isLesser = (id: string, referenceId: string) => {
    // 3.2.1    4.0.1
    // 3.0.1    3.0.3
    console.log('isLesser', id, referenceId);

    if (id === referenceId) {
      return false;
    }

    const idSplit = id.split('.');
    const referenceSplit = referenceId.split('.');

    let i = 0;
    while (true) {
      if (i >= idSplit.length) {
        return true;
      }
      if (i >= referenceSplit.length) {
        return false;
      }

      const idSub = parseInt(idSplit[i]);
      const refSub = parseInt(referenceSplit[i]);

      if (idSub > refSub) {
        return false;
      } else if (idSub < refSub) {
        return true;
      }

      i++;
    }
    return true;
  };

  const shouldBeSelected = (
    currentId: string,
    startId: string,
    endId: string,
  ) => {
    // return true;
    const selected =
      (!isLesser(currentId, startId) && isLesser(currentId, endId)) ||
      currentId === startId ||
      currentId === endId;
    // console.log(currentId, startId, endId, selected);
    return selected;
  };

  const shiftSelect = (
    currentId: string | null,
    startId: string,
    endId: string,
  ) => {
    if (currentId === endId || currentId == null) {
      return;
    }

    console.log('123', currentId);

    const row = instance.rowsById[currentId];
    row.subRows.forEach((r) => {
      const selected = shouldBeSelected(r.id, startId, endId);
      // console.log(r.id, startId, endId, selected);

      // To not undo the partially selected sub rows when control is passed to parent
      // i.e. only selecting is allowed (no un-selection)
      if (selected) {
        r.toggleRowSelected(selected);
      }
    });

    const newCurrentId = getParentId(currentId);
    const newStartId = getGreaterId(currentId);
    shiftSelect(newCurrentId, newStartId, endId);

    // if (isLesser(currentId, startId)) {

    // }

    // if (currentId)
  };

  shiftSelect(
    getParentId(state.lastSelectedRow),
    state.lastSelectedRow,
    action.id,
  );

  // console.log('Trying getting subrow', instance.rowsById['0.1.0']);

  // START OF PREVIOUS NEW WORKING CODE
  // const rows = instance.rows;
  // if (rows == null) {
  //   return;
  // }

  // console.log('action.id', action.id);

  // const selectedIndex = instance.rowsById[action.id]?.index ?? 0;
  // const startIndex =
  //   instance.rowsById[state.lastSelectedRow]?.index ?? selectedIndex;
  // const endIndex = selectedIndex;

  // // console.log("selected indices:", selectedIndex, start)
  // const parent = action.id.split().reverse().join('').split('.', 1);
  // console.log(action.id, parent);

  // // console.log('Shift key', startIndex, endIndex, state.lastSelectedRow);

  // rows.forEach((r) => {
  //   r.toggleRowSelected(isInRange(r.index, startIndex, endIndex));
  // });
  // END OF PREVIOUS NEW WORKING CODE

  // if (instance.selectSubRows) {
  //   const handleRow = (row: Row<T>) => {
  //     selectedRowIds[row.id] = true;
  //     row.subRows.forEach((r) => handleRow(r));
  //   };
  //   handleRow(instance.rowsById[action.id]);
  // }
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
