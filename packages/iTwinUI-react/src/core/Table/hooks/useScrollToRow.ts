/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import type { Row } from 'react-table';
import { TableProps } from '../Table';

type ScrollToRow<T extends Record<string, unknown>> = {
  scrollToIndex: number | undefined;
  tableRowRef: (row: Row<T>) => (element: HTMLDivElement) => HTMLDivElement;
};

type ScrollToRowProps<T extends Record<string, unknown>> = Pick<
  TableProps<T>,
  'data' | 'enableVirtualization' | 'getRowId' | 'paginatorRenderer'
> & { scrollToItem?: T };

export function useScrollToRow<T extends Record<string, unknown>>({
  data,
  enableVirtualization,
  scrollToItem,
  getRowId,
  paginatorRenderer,
}: ScrollToRowProps<T>): ScrollToRow<T> {
  const rowRefs = React.useRef<Record<number, HTMLDivElement>>({});

  const index = React.useMemo((): number => {
    if (!scrollToItem || !getRowId || paginatorRenderer) {
      return -1;
    }

    return data.findIndex(
      (item) => getRowId(item, 0) == getRowId(scrollToItem, 0),
    );
  }, [data, getRowId, paginatorRenderer, scrollToItem]);

  // For virtualized tables, all we need to do is pass the index of the item
  // to the VirtualScroll component
  const scrollToIndex = React.useMemo((): number | undefined => {
    if (!enableVirtualization || index < 0) {
      return undefined;
    }

    return index;
  }, [enableVirtualization, index]);

  // For non-virtualized tables, we need to add a ref to each row
  // and scroll to the element
  React.useEffect(() => {
    if (enableVirtualization || index < 0) {
      return;
    }

    rowRefs.current[index]?.scrollIntoView();
  }, []);

  const tableRowRef = React.useCallback((row: Row<T>) => {
    function addReference(element: HTMLDivElement): HTMLDivElement {
      rowRefs.current[row.index] = element;
      return element;
    }

    return addReference;
  }, []);

  return { scrollToIndex, tableRowRef };
}
