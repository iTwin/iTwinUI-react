/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

const getScrollableParent = (element: HTMLElement | null): HTMLElement => {
  if (!element || element === document.body) {
    return document.body;
  }

  return isElementScrollable(element)
    ? element
    : getScrollableParent(element.parentElement);
};

const isElementScrollable = (element: HTMLElement) => {
  return /(auto|scroll|overlay)/.test(
    getElementStyle(element, 'overflow') +
      getElementStyle(element, 'overflow-y'),
  );
};

const getElementStyle = (element: HTMLElement, prop: string) => {
  return getComputedStyle(element, null).getPropertyValue(prop);
};

const getElementHeight = (element: HTMLElement | undefined) => {
  return element?.getBoundingClientRect().height ?? 0;
};

const getNumberOfNodesInHeight = (childHeight: number, totalHeight: number) => {
  if (!childHeight) {
    return 0;
  }

  return Math.floor(totalHeight / childHeight);
};

const getTranslateValue = (childHeight: number, startIndex: number) => {
  return childHeight * startIndex;
};

const getVisibleNodeCount = (
  childHeight: number,
  startIndex: number,
  childrenLength: number,
  scrollContainer: HTMLElement,
) => {
  return Math.min(
    childrenLength - startIndex,
    getNumberOfNodesInHeight(childHeight, getElementHeight(scrollContainer)),
  );
};

export type VirtualScrollProps = {
  /**
   * Length of the items to virtualize.
   */
  itemsLength: number;
  /**
   * Single item render function, which gives index of the item (0 based) in the data array
   * and expects to get the JSX of that element to render.
   * Recommended to memoize the reference of the function.
   */
  itemRenderer: (index: number) => JSX.Element;
  /**
   * Number of items to be rendered at the end.
   * Not recommended to go lower than the visible items in viewport.
   * @default 20
   */
  buffer?: number;
};

/**
 * `VirtualScroll` component used to render a huge amount of items in the DOM. It renders only the ones which are visible
 * and the amount provided through `buffer` prop. Can be used inside other components like `Table`.
 *
 * It has two wrapper elements, so DOM will be changed. One is used for setting full expected height in the scrollable container
 * and other is for transformation (translateY) to show the correct part of the list.
 *
 * Currently it works only with the direct scrollable parent element. It does not work with body scroll.
 * It supports only static (same) height rows virtualization. Expect some issues, if list consists of different height elements.
 * @example
 * const itemRenderer = React.useCallback(() => (
 *  <div key={index}>
 *    This is my item #{index}
 *  </div>
 * ), [])
 * <VirtualScroll
 *  itemsLength={1000}
 *  itemRenderer={itemRenderer}
 * />
 */
export const VirtualScroll = ({
  itemsLength,
  itemRenderer,
  buffer = 20,
}: VirtualScrollProps) => {
  const [startNode, setStartNode] = React.useState(0);
  const [visibleNodeCount, setVisibleNodeCount] = React.useState(0);
  const scrollContainer = React.useRef<HTMLElement>();
  const parentRef = React.useRef<HTMLDivElement>(null);
  const childHeight = React.useRef(0);
  const onScrollRef = React.useRef<(e: Event) => void>();

  // Find scrollable parent
  // Needed only on init
  React.useLayoutEffect(() => {
    const scrollableParent = getScrollableParent(parentRef.current);
    scrollContainer.current = scrollableParent;
  }, []);

  const visibleChildren = React.useMemo(() => {
    const arr = [];
    const endIndex = Math.min(
      itemsLength,
      startNode + visibleNodeCount + buffer,
    );
    for (let i = startNode; i < endIndex; i++) {
      arr.push(itemRenderer(i));
    }
    return arr;
  }, [itemsLength, itemRenderer, buffer, startNode, visibleNodeCount]);

  // Get child height when children available
  React.useLayoutEffect(() => {
    if (!parentRef.current || !visibleChildren.length) {
      return;
    }

    const firstChild = parentRef.current.children.item(0) as HTMLElement;
    childHeight.current = Number(getElementHeight(firstChild).toFixed(2));
  }, [visibleChildren.length]);

  const updateVirtualScroll = React.useCallback(
    (scrollableContainer: HTMLElement) => {
      const start = getNumberOfNodesInHeight(
        childHeight.current,
        scrollableContainer.scrollTop,
      );
      setStartNode(start);
      setVisibleNodeCount(
        getVisibleNodeCount(
          childHeight.current,
          start,
          itemsLength,
          scrollableContainer,
        ),
      );

      if (!parentRef.current) {
        return;
      }
      parentRef.current.style.transform = `translateY(${getTranslateValue(
        childHeight.current,
        start,
      )}px)`;
    },
    [itemsLength],
  );

  const onScroll = React.useCallback(
    (e: Event) => {
      const target =
        scrollContainer.current !== document.body
          ? (e.target as HTMLElement)
          : (document.scrollingElement as HTMLElement);
      if (!target) {
        return;
      }
      updateVirtualScroll(target);
    },
    [updateVirtualScroll],
  );

  const removeScrollListener = React.useCallback(() => {
    if (!onScrollRef.current) {
      return;
    }
    !scrollContainer.current || scrollContainer.current === document.body
      ? document.removeEventListener('scroll', onScrollRef.current)
      : scrollContainer.current.removeEventListener(
          'scroll',
          onScrollRef.current,
        );
  }, []);

  // Add event listener to the scrollable container.
  React.useLayoutEffect(() => {
    removeScrollListener();
    onScrollRef.current = onScroll;
    if (!scrollContainer.current || scrollContainer.current === document.body) {
      document.addEventListener('scroll', onScroll);
    } else {
      scrollContainer.current.addEventListener('scroll', onScroll);
    }
    return removeScrollListener;
  }, [onScroll, removeScrollListener]);

  React.useLayoutEffect(() => {
    updateVirtualScroll(scrollContainer.current ?? document.body);
  }, [itemsLength, updateVirtualScroll]);

  return (
    <div
      style={{
        overflow: 'hidden',
        minHeight: itemsLength * childHeight.current,
        width: '100%',
      }}
    >
      <div
        style={{
          willChange: 'transform',
        }}
        ref={parentRef}
      >
        {visibleChildren}
      </div>
    </div>
  );
};

export default VirtualScroll;
