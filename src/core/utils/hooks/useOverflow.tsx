/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useMergedRefs } from './useMergedRefs';
import { useResizeObserver } from './useResizeObserver';

/**
 * Hook that observes the size of an element and returns the number of items
 * that should be visible based on the width of the container element.
 *
 * The returned number should be used to render the element with fewer items.
 *
 * @private
 * @param itemsCount Total number of items that this element contains.
 * @param disabled Set to true to disconnect the observer.
 * @returns [callback ref to set on container, stateful count of visible items]
 *
 * @example
 * const items = Array(10).fill().map((_, i) => <span>Item {i}</span>);
 * const [ref, visibleCount] = useOverflow(items.length);
 * ...
 * return (
 *   <div ref={ref}>
 *     {items.slice(0, visibleCount)}
 *   </div>
 * );
 */
export const useOverflow = <T extends HTMLElement>(
  itemsCount: number,
  disabled = false,
) => {
  const containerRef = React.useRef<T>(null);

  const [visibleCount, setVisibleCount] = React.useState(itemsCount);
  const overflowBreakpoints = React.useRef<number[]>([]);

  React.useLayoutEffect(() => {
    setVisibleCount(itemsCount);
    overflowBreakpoints.current = [];
  }, [itemsCount]);

  const [containerWidth, setContainerWidth] = React.useState<number>(0);
  const updateContainerWidth = React.useCallback(
    ({ width }) => setContainerWidth(width),
    [],
  );
  const [resizeRef, observer] = useResizeObserver<T>(updateContainerWidth);

  React.useLayoutEffect(() => {
    if (!containerRef.current || disabled) {
      observer?.disconnect();
      return;
    }

    // hide items when there's no space available
    if (
      containerRef.current.offsetWidth < containerRef.current.scrollWidth &&
      visibleCount > 1
    ) {
      setVisibleCount((count) => count - 1);
      overflowBreakpoints.current.push(containerRef.current.offsetWidth);
    }
    // restore items when there's enough space again
    else if (
      overflowBreakpoints.current.length > 0 &&
      containerRef.current.offsetWidth >
        overflowBreakpoints.current[overflowBreakpoints.current.length - 1]
    ) {
      setVisibleCount((count) => count + 1);
      overflowBreakpoints.current.pop();
    }
  }, [containerWidth, visibleCount, disabled, observer]);

  const mergedRefs = useMergedRefs(containerRef, resizeRef);

  return [mergedRefs, visibleCount] as const;
};
