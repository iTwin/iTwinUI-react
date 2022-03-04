/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { mergeRefs } from '../hooks/useMergedRefs';
import { useResizeObserver } from '../hooks/useResizeObserver';

const getScrollableParent = (
  element: HTMLElement | null,
  ownerDocument: Document = document,
): HTMLElement => {
  if (!element || element === ownerDocument.body) {
    return ownerDocument.body;
  }

  return isElementScrollable(element)
    ? element
    : getScrollableParent(element.parentElement, ownerDocument);
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

const getElementHeightWithMargins = (element: HTMLElement | undefined) => {
  if (!element) {
    return 0;
  }

  const margin =
    parseFloat(getElementStyle(element, 'margin-top')) +
    parseFloat(getElementStyle(element, 'margin-bottom'));
  return getElementHeight(element) + (isNaN(margin) ? 0 : margin);
};

const getNumberOfNodesInHeight = (childHeight: number, totalHeight: number) => {
  if (!childHeight) {
    return 0;
  }

  return Math.floor(totalHeight / childHeight);
};

const getTranslateValue = (childHeight: number, startIndex: number) => {
  if (startIndex > 0) {
    return childHeight * startIndex;
  }

  return 0;
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

export type VirtualScrollProps<
  T extends React.ElementType = React.ElementType
> = {
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
   * Number of items to be rendered at the start and the end.
   * Not recommended to go lower than the visible items in viewport.
   * @default 10
   */
  bufferSize?: number;
  /**
   * Index of the first element on initial render.
   */
  scrollToIndex?: number;
  /**
   * Tag of the parent element. In most cases default `div` should be good enough.
   * @default 'div'
   */
  as?: React.ElementType;
  /**
   * Props object to set on parent of the virtualized list.
   */
  parentProps?: React.ComponentPropsWithRef<T>;
} & React.ComponentPropsWithRef<'div'>;

/**
 * `VirtualScroll` component is used to render a huge amount of items in the DOM. It renders only the ones which are visible
 * and the amount provided through `bufferSize` prop at the start and the end. Can be used inside other components like `Table`.
 *
 * It has two wrapper elements, so DOM will be changed. One is used for setting full expected height in the scrollable container
 * and other is for transformation (translateY) to show the correct part of the list.
 *
 * Currently it works only with the direct vertically scrollable parent element. It does not work with body scroll.
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
 * @private
 */
export const VirtualScroll = React.forwardRef<
  HTMLDivElement,
  VirtualScrollProps
>(
  (
    {
      itemsLength,
      itemRenderer,
      bufferSize = 10,
      scrollToIndex,
      style,
      as = 'div',
      parentProps,
      ...rest
    },
    ref,
  ) => {
    const [startNode, setStartNode] = React.useState(0);
    const [visibleNodeCount, setVisibleNodeCount] = React.useState(0);
    const scrollContainer = React.useRef<HTMLElement>();
    const parentRef = React.useRef<HTMLDivElement>(null);
    const childHeight = React.useRef({ first: 0, middle: 0, last: 0 });
    const onScrollRef = React.useRef<(e: Event) => void>();
    // Used only to recalculate on resize
    const [scrollContainerHeight, setScrollContainerHeight] = React.useState(0);
    const visibleIndex = React.useRef({ start: 0, end: 0 });
    const [isMounted, setIsMounted] = React.useState(false);

    const onResize = React.useCallback(({ height }) => {
      if (height > 0) {
        setIsMounted(true);
      }
      setScrollContainerHeight(height);
    }, []);
    const [resizeRef, resizeObserver] = useResizeObserver(onResize);
    const Component = as;

    // Find scrollable parent
    // Needed only on init
    React.useLayoutEffect(() => {
      const scrollableParent = getScrollableParent(
        parentRef.current,
        parentRef.current?.ownerDocument,
      );
      scrollContainer.current = scrollableParent;

      resizeRef(scrollableParent);
    }, [resizeRef]);

    // Stop watching resize, when virtual scroll is unmounted
    React.useLayoutEffect(() => {
      return () => resizeObserver?.disconnect();
    }, [resizeObserver]);

    const getScrollableContainer = () =>
      scrollContainer.current ??
      (parentRef.current?.ownerDocument.scrollingElement as HTMLElement);

    const visibleChildren = React.useMemo(() => {
      const arr = [];
      const endIndex = Math.min(
        itemsLength,
        startNode + visibleNodeCount + bufferSize * 2,
      );
      for (let i = startNode; i < endIndex; i++) {
        arr.push(itemRenderer(i));
      }
      return arr;
    }, [itemsLength, itemRenderer, bufferSize, startNode, visibleNodeCount]);

    // Get child height when children available
    React.useLayoutEffect(() => {
      if (!parentRef.current || !visibleChildren.length) {
        return;
      }

      const firstChild = parentRef.current.children.item(0) as HTMLElement;
      const child = parentRef.current.children.item(1) as HTMLElement;
      const lastChild = parentRef.current.children.item(
        parentRef.current.children.length - 1,
      ) as HTMLElement;
      const firstChildHeight = Number(
        getElementHeightWithMargins(firstChild).toFixed(2),
      );

      childHeight.current = {
        first: firstChildHeight,
        middle:
          Number(getElementHeightWithMargins(child).toFixed(2)) ??
          firstChildHeight,
        last: Number(getElementHeightWithMargins(lastChild).toFixed(2)),
      };
    }, [visibleChildren.length]);

    const updateVirtualScroll = React.useCallback(() => {
      const scrollableContainer = getScrollableContainer();
      if (!scrollableContainer) {
        return;
      }

      const start = getNumberOfNodesInHeight(
        childHeight.current.middle,
        scrollableContainer.scrollTop,
      );
      const startIndex = Math.max(0, start - bufferSize);
      const visibleNodes = getVisibleNodeCount(
        childHeight.current.middle,
        start,
        itemsLength,
        scrollableContainer,
      );
      visibleIndex.current = { start: start, end: start + visibleNodes - 1 };
      setStartNode(startIndex);
      setVisibleNodeCount(visibleNodes);

      if (!parentRef.current) {
        return;
      }
      parentRef.current.style.transform = `translateY(${getTranslateValue(
        childHeight.current.middle,
        startIndex,
      )}px)`;
    }, [bufferSize, itemsLength]);

    const onScroll = React.useCallback(() => {
      updateVirtualScroll();
    }, [updateVirtualScroll]);

    const removeScrollListener = React.useCallback(() => {
      if (!onScrollRef.current) {
        return;
      }
      !scrollContainer.current ||
      scrollContainer.current === parentRef.current?.ownerDocument.body
        ? parentRef.current?.ownerDocument.removeEventListener(
            'scroll',
            onScrollRef.current,
          )
        : scrollContainer.current.removeEventListener(
            'scroll',
            onScrollRef.current,
          );
    }, []);

    // Add event listener to the scrollable container.
    React.useLayoutEffect(() => {
      removeScrollListener();
      onScrollRef.current = onScroll;
      if (
        !scrollContainer.current ||
        scrollContainer.current === parentRef.current?.ownerDocument.body
      ) {
        parentRef.current?.ownerDocument.addEventListener('scroll', onScroll);
      } else {
        scrollContainer.current.addEventListener('scroll', onScroll);
      }
      return removeScrollListener;
    }, [onScroll, removeScrollListener]);

    React.useLayoutEffect(() => {
      if (!isMounted) {
        return;
      }

      const scrollableContainer = getScrollableContainer();

      // if `scrollToIndex` is not visible, scroll to it
      if (
        scrollableContainer &&
        scrollToIndex != null &&
        (scrollToIndex > visibleIndex.current.end ||
          scrollToIndex < visibleIndex.current.start)
      ) {
        const indexDiff =
          scrollToIndex > visibleIndex.current.end
            ? scrollToIndex - visibleIndex.current.end
            : scrollToIndex - visibleIndex.current.start;

        // scrollTop value to display full item height
        const adjustedScrollTop =
          scrollableContainer.scrollTop -
          (scrollableContainer.scrollTop % childHeight.current.middle);

        // smallest scroll to the index
        scrollableContainer.scrollTo({
          top: adjustedScrollTop + indexDiff * childHeight.current.middle,
        });
      }
    }, [scrollToIndex, isMounted]);

    React.useLayoutEffect(() => {
      if (!scrollContainerHeight) {
        return;
      }

      updateVirtualScroll();
    }, [scrollContainerHeight, updateVirtualScroll]);

    return (
      <div
        style={{
          overflow: 'hidden',
          minHeight:
            itemsLength > 1
              ? Math.max(itemsLength - 2, 0) * childHeight.current.middle +
                childHeight.current.first +
                childHeight.current.last
              : childHeight.current.middle,
          width: '100%',
          ...style,
        }}
        ref={ref}
        {...rest}
      >
        <Component
          {...parentProps}
          style={{
            willChange: 'transform',
            ...parentProps?.style,
          }}
          ref={mergeRefs(parentRef, parentProps?.ref)}
        >
          {visibleChildren}
        </Component>
      </div>
    );
  },
);

export default VirtualScroll;
