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

type ScrollToRowProps<T extends Record<string, unknown>> = TableProps<T> & {
  page: Row<T>[];
};

export function useScrollToRow<T extends Record<string, unknown>>({
  enableVirtualization,
  page,
  paginatorRenderer,
  scrollToRow,
}: ScrollToRowProps<T>): ScrollToRow<T> {
  const rowRefs = React.useRef<Record<string, HTMLDivElement>>({});

  // For virtualized tables, all we need to do is pass the index of the item
  // to the VirtualScroll component
  const scrollToIndex = React.useMemo((): number | undefined => {
    if (!scrollToRow || paginatorRenderer) {
      return undefined;
    }

    const index = scrollToRow(page);
    return index < 0 ? undefined : index;
  }, [page, paginatorRenderer, scrollToRow]);

  // For non-virtualized tables, we need to add a ref to each row
  // and scroll to the element
  React.useEffect(() => {
    if (
      enableVirtualization ||
      scrollToIndex === undefined ||
      scrollToIndex === null ||
      scrollToIndex < 0
    ) {
      return;
    }

    rowRefs.current[page[scrollToIndex].id]?.scrollIntoView();
  }, [enableVirtualization, page, scrollToIndex]);

  const tableRowRef = React.useCallback((row: Row<T>) => {
    return (element: HTMLDivElement) => {
      rowRefs.current[row.id] = element;
    };
  }, []);

  return { scrollToIndex, tableRowRef };
}