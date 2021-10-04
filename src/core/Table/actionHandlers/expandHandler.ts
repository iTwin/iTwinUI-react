/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { TableInstance, TableState } from 'react-table';

export const onExpandHandler = <T extends Record<string, unknown>>(
  newState: TableState<T>,
  instance?: TableInstance<T>,
  onExpand?: (
    expandedData: T[] | undefined,
    tableState?: TableState<T>,
  ) => void,
) => {
  if (!instance?.page.length) {
    onExpand?.([], newState);
    return;
  }

  const expandedData: T[] = [];
  instance.page.forEach((row) => {
    if (newState.expanded[row.id]) {
      expandedData.push(row.original);
    }
  });
  onExpand?.(expandedData, newState);
};
