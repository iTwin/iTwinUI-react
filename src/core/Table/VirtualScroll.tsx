/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { getBoundedValue } from '../utils/common';

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
  height: string | number;
};

export const VirtualScroll = ({ children, height }: VirtualScrollProps) => {
  const renderAdditional = 10;
  const [startNode, setStartNode] = React.useState(0);
  const [visibleNodeCount, setVisibleNodeCount] = React.useState(0);
  const [scrollContainer, setScrollContainer] = React.useState<HTMLElement>();
  const childrenParentRef = React.useRef<HTMLDivElement>(null);
  const [childHeight, setChildHeight] = React.useState(0);
  const [translateY, setTranslateY] = React.useState(0);
  const heightMap: React.MutableRefObject<{
    [key: string]: number;
  }> = React.useRef({});

  React.useLayoutEffect(() => {
    setScrollContainer(getScrollableParent(childrenParentRef.current));
  }, []);

  const visibleChildren = React.useMemo(() => {
    const adjustedVisibleCount =
      visibleNodeCount > 0 ? visibleNodeCount : 20 + renderAdditional;
    return children.slice(startNode, startNode + adjustedVisibleCount);
  }, [startNode, visibleNodeCount, children]);

  React.useLayoutEffect(() => {
    const childrenLength = getBoundedValue(
      visibleChildren.length,
      1,
      visibleChildren.length,
    );
    let heightSum = 0;
    for (let i = startNode; i < childrenLength + startNode; i++) {
      const elementHeight =
        childrenParentRef.current?.children.item(i)?.clientHeight || 0;
      if (elementHeight !== 0) {
        heightMap.current[i] = elementHeight;
        heightSum += elementHeight;
      }
    }
    if (startNode === 0) {
      setChildHeight(heightSum / childrenLength);
    }
  }, [visibleChildren, startNode, heightMap]);

  const getCountOfChildrenInHeight = (height: number, startIndex = 0) => {
    let i = startIndex;
    let sum = 0;
    while (sum < height) {
      sum += heightMap.current[i];
      ++i;
    }
    i = sum > height ? i - 1 : i;
    return i;
  };

  const getTranslateValue = (startNode: number) => {
    let sum = 0;
    let i = 0;
    while (i < startNode) {
      sum += heightMap.current[i];
      ++i;
    }
    console.log(startNode, sum, i);
    return sum;
  };

  const onScroll = React.useCallback(
    () =>
      requestAnimationFrame(() => {
        if (!scrollContainer) {
          return;
        }
        const top = scrollContainer.scrollTop;
        const start = getCountOfChildrenInHeight(top);
        // : document.scrollingElement?.scrollTop) ?? 0;
        setStartNode(start);
        setVisibleNodeCount(
          Math.min(
            children.length - start,
            typeof height === 'string'
              ? getCountOfChildrenInHeight(Number.parseInt(height), start) +
                  1 +
                  renderAdditional
              : getCountOfChildrenInHeight(height, start) +
                  1 +
                  renderAdditional,
          ),
        );
        console.log('translatee', start, getTranslateValue(start), top);
        setTranslateY(getTranslateValue(start));
      }),
    [children.length, height, scrollContainer],
  );

  React.useEffect(() => {
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
    setVisibleNodeCount(
      Math.min(
        children.length - start,
        typeof height === 'string'
          ? getCountOfChildrenInHeight(Number.parseInt(height), start) +
              1 +
              renderAdditional
          : getCountOfChildrenInHeight(height, start) + 1 + renderAdditional,
      ),
    );
    console.log('translatee', top);
    setTranslateY(getTranslateValue(start));
    return () =>
      scrollContainer
        ? scrollContainer.removeEventListener('scroll', onScroll)
        : document.removeEventListener('scroll', onScroll);
  }, [children.length, height, onScroll, scrollContainer]);

  return (
    <>
      <div
        style={{
          overflow: 'hidden',
          willChange: 'transform',
          height: children.length * childHeight,
          position: 'relative',
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
