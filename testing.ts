/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { ActionType, Row, TableInstance, TableState } from 'react-table';

const isAncestorParent = (currentId: string, endId: string) => {
  return endId.indexOf(currentId) === 0;
};

const getGreaterId = (id: string) => {
  const greaterId = id.split('.');
  greaterId[greaterId.length - 1] = `${
    parseInt(greaterId[greaterId.length - 1]) + 1
  }`;
  return greaterId.join('.');
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

console.log(isAncestorParent('2.4.5', '2.4.6'));
