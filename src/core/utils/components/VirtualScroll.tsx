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
  renderAdditional?: number;
};

/**
 * `VirtualScroll` component to render only visible items + some additional out of a big list.
 * Good use in expected big number of data either in some of the components (e.g. Table) or just simple list of DOM elements.
 * It has 2 wrapper elements, so expect DOM tree change. One is used for setting full expected height in the scrollable container
 * and other is for transformation (translateY) to show the correct part of the list.
 * Currently it works only when items direct parent is a scrollable container (body scroll is not supported yet).
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
  itemsLength: childrenLength,
  itemRenderer,
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
    const arr = [];
    const endIndex = Math.min(
      childrenLength,
      startNode + visibleNodeCount + renderAdditional,
    );
    for (let i = startNode; i < endIndex; i++) {
      arr.push(itemRenderer(i));
    }
    return arr;
  }, [
    childrenLength,
    itemRenderer,
    renderAdditional,
    startNode,
    visibleNodeCount,
  ]);

  // Get child height when children available
  React.useLayoutEffect(() => {
    if (!childrenParentRef.current || !visibleChildren.length) {
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
  }, [visibleChildren.length]);

  const onScroll = React.useCallback(
    (e: Event) => {
      const target =
        scrollContainer.current !== document.body
          ? (e.target as HTMLElement)
          : (document.scrollingElement as HTMLElement);
      if (!target) {
        return;
      }
      const start = getNumberOfNodesInHeight(
        childHeight.current,
        target.scrollTop,
      );
      setStartNode(start);
      setVisibleNodeCount(
        getVisibleNodeCount(childHeight.current, start, childrenLength, target),
      );
      setTranslateY(getTranslateValue(childHeight.current, start));
    },
    [childrenLength],
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
    const start = getNumberOfNodesInHeight(childHeight.current, top);
    setStartNode(start);
    setVisibleNodeCount(
      getVisibleNodeCount(
        childHeight.current,
        start,
        childrenLength,
        scrollableContainer,
      ),
    );
    setTranslateY(getTranslateValue(childHeight.current, start));
  }, [childrenLength]);

  return (
    <div
      style={{
        overflow: 'hidden',
        minHeight: childrenLength * childHeight.current,
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
