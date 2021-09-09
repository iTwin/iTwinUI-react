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

type VirtualScrollProps = {
  children: React.ReactNodeArray;
};

export const VirtualScroll = ({ children }: VirtualScrollProps) => {
  const renderAdditional = 20;
  const [startNode, setStartNode] = React.useState(0);
  const [visibleNodeCount, setVisibleNodeCount] = React.useState(0);
  const [scrollContainer, setScrollContainer] = React.useState<HTMLElement>();
  const childrenParentRef = React.useRef<HTMLDivElement>(null);
  const [childHeight, setChildHeight] = React.useState(0);
  const [translateY, setTranslateY] = React.useState(0);
  const heightMap: React.MutableRefObject<{
    [key: string]: number;
  }> = React.useRef({});
  const firstLoad = React.useRef(true);
  const [viewportHeight, setViewportHeight] = React.useState(0);
  const recalculatedHeight: React.MutableRefObject<{
    [key: string]: boolean;
  }> = React.useRef({});
  const [containerHeight, setContainerHeight] = React.useState(0);

  // Find scrollable parent and viewport height
  // Needed only on init
  React.useLayoutEffect(() => {
    const scrollableParent = getScrollableParent(childrenParentRef.current);
    setScrollContainer(scrollableParent);
    setViewportHeight(scrollableParent.getBoundingClientRect().height);
  }, []);

  const visibleChildren = React.useMemo(() => {
    return children.slice(
      startNode,
      startNode + visibleNodeCount + renderAdditional,
    );
  }, [children, startNode, visibleNodeCount]);

  // Update heights map with visible children height
  React.useLayoutEffect(() => {
    if (!childrenParentRef.current) {
      return;
    }

    let heightSum = 0;
    for (let i = startNode; i < visibleChildren.length + startNode; i++) {
      const htmlElement = childrenParentRef.current.children.item(
        Math.max(0, i - startNode),
      ) as HTMLElement;
      const elementHeight = htmlElement.getBoundingClientRect().height;
      heightMap.current[i] = Number(elementHeight.toFixed(2));
      heightSum += Number(elementHeight.toFixed(2));
    }

    // On the first load, set container and child heights
    // Later on they will be updated on scroll or children change
    if (firstLoad.current) {
      setContainerHeight(
        Math.ceil(heightSum / visibleChildren.length) * children.length,
      );
      setChildHeight(Math.ceil(heightSum / visibleChildren.length));
    }
  }, [
    visibleChildren,
    startNode,
    scrollContainer,
    childHeight,
    children.length,
  ]);

  // When children change, recalculate container height
  React.useLayoutEffect(() => {
    console.log('calculate', firstLoad.current, childHeight, children.length);
    if (childHeight === 0) {
      return;
    }

    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    let maxCount = 0;
    Object.keys(recalculatedHeight.current).forEach((count) => {
      if (Number(count) > maxCount) {
        maxCount = Number(count);
      }
    });
    const addedElementsCount = children.length - maxCount;
    console.log(children.length, recalculatedHeight.current);
    setContainerHeight((height) => height + addedElementsCount * childHeight);
  }, [childHeight, children.length]);

  const getCountOfChildrenInHeight = React.useCallback(
    (height: number, startIndex = 0) => {
      let i = startIndex;
      let sum = 0;
      while (sum < height) {
        sum += heightMap.current[i] ?? childHeight;
        ++i;
      }
      i = sum > height ? i - 1 : i;
      return i - startIndex;
    },
    [childHeight],
  );

  const getTranslateValue = React.useCallback(
    (startIndex: number) => {
      let sum = 0;
      let i = 0;
      while (i < startIndex) {
        sum += heightMap.current[i] ?? childHeight;
        ++i;
      }
      return sum;
    },
    [childHeight],
  );

  const getVisibleNodeCount = React.useCallback(
    (startIndex: number) => {
      return Math.min(
        children.length - startIndex,
        getCountOfChildrenInHeight(viewportHeight, startIndex),
      );
    },
    [children.length, getCountOfChildrenInHeight, viewportHeight],
  );

  const onScroll = React.useCallback(() => {
    if (!scrollContainer) {
      return;
    }
    const start = getCountOfChildrenInHeight(scrollContainer.scrollTop);
    setStartNode(start);
    setVisibleNodeCount(getVisibleNodeCount(start));
    setTranslateY(getTranslateValue(start));
    // When getting closer to the end,
    // recalculate container and child height
    if (
      viewportHeight +
        scrollContainer.scrollTop +
        renderAdditional * childHeight >=
      scrollContainer.scrollHeight
    ) {
      if (
        Object.keys(heightMap.current).length === children.length &&
        !recalculatedHeight.current[children.length]
      ) {
        recalculatedHeight.current[children.length] = true;
        let sum = 0;
        for (let i = 0; i < Object.keys(heightMap.current).length; ++i) {
          sum += heightMap.current[i];
        }
        console.log('SCROLL RECALCULATE', sum, childHeight * children.length);
        setChildHeight(sum / Object.keys(heightMap.current).length);
        setContainerHeight(sum);
      }
    }
  }, [
    childHeight,
    children.length,
    getCountOfChildrenInHeight,
    getTranslateValue,
    getVisibleNodeCount,
    scrollContainer,
    viewportHeight,
  ]);

  // Add scroll listener and set initial values
  React.useLayoutEffect(() => {
    let top = 0;
    if (!scrollContainer || scrollContainer === document.body) {
      document.addEventListener('scroll', onScroll);
      top = document.body.scrollTop;
    } else {
      scrollContainer?.addEventListener('scroll', onScroll);
      top = scrollContainer.scrollTop;
    }
    const start = getCountOfChildrenInHeight(top);
    setStartNode(start);
    setVisibleNodeCount(getVisibleNodeCount(start));
    setTranslateY(getTranslateValue(start));
    return () =>
      scrollContainer
        ? scrollContainer.removeEventListener('scroll', onScroll)
        : document.removeEventListener('scroll', onScroll);
  }, [
    getCountOfChildrenInHeight,
    getTranslateValue,
    getVisibleNodeCount,
    onScroll,
    scrollContainer,
  ]);

  return (
    <>
      <div
        style={{
          overflow: 'hidden',
          height: containerHeight || children.length * childHeight,
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
    </>
  );
};

export default VirtualScroll;
