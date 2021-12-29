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
  return !!element ? element.getBoundingClientRect().height : 0;
};

const getCountOfNodesInHeight = (
  childHeight: number,
  totalHeight: number,
  startIndex = 0,
) => {
  let i = startIndex;
  let sum = 0;
  while (sum < totalHeight) {
    sum += childHeight;
    ++i;
  }
  i = sum > totalHeight ? i - 1 : i;
  return i - startIndex;
};

const getTranslateValue = (childHeight: number, startIndex: number) => {
  let sum = 0;
  let i = 0;
  while (i < startIndex) {
    sum += childHeight;
    ++i;
  }
  return sum;
};

const getVisibleNodeCount = (
  childHeight: number,
  startIndex: number,
  childrenLength: number,
  scrollContainer: HTMLElement,
) => {
  return Math.min(
    childrenLength - startIndex,
    getCountOfNodesInHeight(
      childHeight,
      getElementHeight(scrollContainer),
      startIndex,
    ),
  );
};

export type VirtualScrollProps = {
  /**
   * A list of children to be virtualized.
   */
  children: React.ReactNodeArray;
  /**
   * Number of items to be rendered at the end.
   * Not recommended to go lower than the visible items in viewport.
   * @default 20
   */
  renderAdditional?: number;
};

/**
 * `VirtualScroll` component to wrap a list of children and show only the ones, which are visible + some additional.
 * Good use in expected big number of data either in some of the components (e.g. Table) or just simple list of DOM elements.
 * It has 2 wrapper elements, so expect DOM tree change. One is used for setting full expected height in the scrollable container
 * and other is for transformation (translateY) to show the correct part of the list.
 * Currently, it supports only static (same) height rows virtualization. So use it with caution.
 * Expect some issues, if list consists of different height elements.
 * @example
 * <VirtualScroll>
 *  {childrenArray}
 * </VirtualScroll>
 */
export const VirtualScroll = ({
  children,
  renderAdditional = 20,
}: VirtualScrollProps) => {
  const [startNode, setStartNode] = React.useState(0);
  const [visibleNodeCount, setVisibleNodeCount] = React.useState(0);
  const scrollContainer = React.useRef<HTMLElement>();
  const childrenParentRef = React.useRef<HTMLDivElement>(null);
  const childHeight = React.useRef(0);
  const [translateY, setTranslateY] = React.useState(0);
  const onScrollRef = React.useRef<(e: Event) => void>();

  // Find scrollable parent
  // Needed only on init
  React.useLayoutEffect(() => {
    const scrollableParent = getScrollableParent(childrenParentRef.current);
    scrollContainer.current = scrollableParent;
  }, []);

  const visibleChildren = React.useMemo(() => {
    return children.slice(
      startNode,
      startNode + visibleNodeCount + renderAdditional,
    );
  }, [children, renderAdditional, startNode, visibleNodeCount]);

  // Get child height on init
  React.useLayoutEffect(() => {
    if (!childrenParentRef.current) {
      return;
    }
    let heightSum = 0;
    for (let i = startNode; i < visibleChildren.length + startNode; i++) {
      const htmlElement = childrenParentRef.current.children.item(
        Math.max(0, i - startNode),
      ) as HTMLElement;
      const elementHeight = getElementHeight(htmlElement);
      heightSum += Number(elementHeight.toFixed(2));
    }
    const elementHeight = heightSum / visibleChildren.length;
    childHeight.current = Math.ceil(elementHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onScroll = React.useCallback(
    (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target) {
        return;
      }
      const start = getCountOfNodesInHeight(
        childHeight.current,
        target.scrollTop,
      );
      setStartNode(start);
      setVisibleNodeCount(
        getVisibleNodeCount(
          childHeight.current,
          start,
          children.length,
          target,
        ),
      );
      setTranslateY(getTranslateValue(childHeight.current, start));
    },
    [children.length],
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
    const scrollableContainer = scrollContainer.current ?? document.body;
    const top = scrollableContainer.scrollTop;
    const start = getCountOfNodesInHeight(childHeight.current, top);
    setStartNode(start);
    setVisibleNodeCount(
      getVisibleNodeCount(
        childHeight.current,
        start,
        children.length,
        scrollableContainer,
      ),
    );
    setTranslateY(getTranslateValue(childHeight.current, start));
  }, [children.length]);

  return (
    <div
      style={{
        overflow: 'hidden',
        minHeight: children.length * childHeight.current,
        width: '100%',
      }}
    >
      <div
        style={{
          willChange: 'transform',
          transform: `translateY(${translateY}px)`,
        }}
        ref={childrenParentRef}
      >
        {visibleChildren}
      </div>
    </div>
  );
};

export default VirtualScroll;
