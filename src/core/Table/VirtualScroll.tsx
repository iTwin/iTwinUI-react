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
  const [childHeight, setChildHeight] = React.useState(57);
  const [translateY, setTranslateY] = React.useState(0);
  const heightMap: React.MutableRefObject<{
    [key: string]: number;
  }> = React.useRef({});
  const animationFrame = React.useRef<number>();
  const firstLoad = React.useRef(true);
  const [viewportHeight, setViewportHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    const scrollableParent = getScrollableParent(childrenParentRef.current);
    setScrollContainer(scrollableParent);
    setViewportHeight(scrollableParent.offsetHeight);
  }, []);

  const visibleChildren = React.useMemo(() => {
    return children.slice(
      startNode,
      startNode + visibleNodeCount + renderAdditional,
    );
  }, [children, startNode, visibleNodeCount]);

  React.useLayoutEffect(() => {
    if (!childrenParentRef.current) {
      return;
    }

    let heightSum = 0;
    for (let i = startNode; i < visibleChildren.length + startNode; i++) {
      const htmlElement = childrenParentRef.current.children.item(
        Math.max(0, i - startNode),
      ) as HTMLElement;
      const elementHeight = htmlElement.offsetHeight;
      heightMap.current[i] = elementHeight;
      heightSum += elementHeight;
    }
    if (startNode === 0 && firstLoad.current) {
      // setChildHeight(
      //   Math.max(57, Math.ceil(heightSum / visibleChildren.length)),
      // );
      setChildHeight(Math.ceil(heightSum / visibleChildren.length));
      firstLoad.current = false;
    }
  }, [visibleChildren, startNode]);

  const getCountOfChildrenInHeight = (height: number, startIndex = 0) => {
    let i = startIndex;
    let sum = 0;
    while (sum < height) {
      sum += heightMap.current[i];
      ++i;
    }
    i = sum > height ? i - 1 : i;
    return i - startIndex;
  };

  const getTranslateValue = React.useCallback((startNode: number) => {
    let sum = 0;
    let i = 0;
    while (i < startNode) {
      sum += heightMap.current[i];
      ++i;
    }
    return sum;
  }, []);

  const getVisibleNodeCount = React.useCallback(
    (startIndex: number) => {
      return Math.min(
        children.length - startIndex,
        getCountOfChildrenInHeight(viewportHeight, startIndex),
      );
    },
    [children.length, viewportHeight],
  );

  const onScroll = React.useCallback(() => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    animationFrame.current = requestAnimationFrame(() => {
      if (!scrollContainer) {
        return;
      }
      const start = getCountOfChildrenInHeight(scrollContainer.scrollTop);

      setStartNode(start);
      setVisibleNodeCount(getVisibleNodeCount(start));
      setTranslateY(getTranslateValue(start));
    });
  }, [getTranslateValue, getVisibleNodeCount, scrollContainer]);

  React.useLayoutEffect(() => {
    let top = 0;
    if (!scrollContainer) {
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
  }, [getTranslateValue, getVisibleNodeCount, onScroll, scrollContainer]);

  return (
    <>
      <div
        style={{
          overflow: 'hidden',
          height: children.length * childHeight,
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
