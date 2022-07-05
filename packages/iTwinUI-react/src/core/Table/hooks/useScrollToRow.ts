/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import type { Row } from 'react-table';
import { TableProps } from '../Table';

type ScrollToRow<T extends Record<string, unknown>> = {
  scrollToIndex: number | undefined;
  tableRowRef: (row: Row<T>) => (element: HTMLDivElement) => void;
};

type ScrollToRowProps<T extends Record<string, unknown>> = Pick<
  TableProps<T>,
  'enableVirtualization' | 'getRowId' | 'paginatorRenderer'
> & { page: Row<T>[]; scrollToItem?: T };

export function useScrollToRow<T extends Record<string, unknown>>({
  enableVirtualization,
  scrollToItem,
  page,
  getRowId,
  paginatorRenderer,
}: ScrollToRowProps<T>): ScrollToRow<T> {
  const rowRefs = React.useRef<Record<string, HTMLDivElement>>({});

  // For virtualized tables, all we need to do is pass the index of the item
  // to the VirtualScroll component
  const scrollToIndex = React.useMemo((): number | undefined => {
    if (
      !enableVirtualization ||
      !getRowId ||
      !scrollToItem ||
      paginatorRenderer
    ) {
      return undefined;
    }

    const index = page.findIndex(
      (row) => getRowId(row.original, 0) == getRowId(scrollToItem, 0),
    );

    if (index < 0) {
      return undefined;
    }

    return index;
  }, [enableVirtualization, getRowId, page, paginatorRenderer, scrollToItem]);

  // For non-virtualized tables, we need to add a ref to each row
  // and scroll to the element
  React.useEffect(() => {
    if (enableVirtualization || !scrollToItem || !getRowId) {
      return;
    }

    const itemId = getRowId(scrollToItem, 0);

    rowRefs.current[itemId]?.scrollIntoView();
  }, [enableVirtualization, getRowId, scrollToItem]);

  const tableRowRef = React.useCallback(
    (row: Row<T>) => {
      function addReference(element: HTMLDivElement): void {
        if (!getRowId) {
          return;
        }
        const itemId = getRowId(row.original, 0);
        rowRefs.current[itemId] = element;
      }

      return addReference;
    },
    [getRowId],
  );

  return { scrollToIndex, tableRowRef };
}
