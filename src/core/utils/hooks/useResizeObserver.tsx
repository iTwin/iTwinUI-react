/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

/**
 * Hook that uses `ResizeObserver` to return an element's size every time it updates.
 * @param elementRef ref of the element to observe resizes on.
 * @param delay maximum timeout in ms to debounce the update by.
 * @returns stateful object containing height and width of the element.
 */
export const useResizeObserver = <T extends HTMLElement>(
  elementRef: React.RefObject<T>,
  { delay = 0 } = {},
) => {
  const [size, setSize] = React.useState({
    height: elementRef.current?.getBoundingClientRect().height,
    width: elementRef.current?.getBoundingClientRect().width,
  });

  const resizeObserver = React.useRef<ResizeObserver | null>(null);

  React.useLayoutEffect(() => {
    const updateSize = (entry: DOMRectReadOnly) => {
      setSize({ height: entry.height, width: entry.width });
    };
    const debouncedUpdate = delay ? debounce(updateSize, delay) : updateSize;
    resizeObserver.current = new ResizeObserver(([{ contentRect }]) =>
      debouncedUpdate(contentRect),
    );
    resizeObserver.current.observe(elementRef.current as T);
    return () => resizeObserver.current?.disconnect();
  }, [elementRef, delay]);

  return size;
};

/** Returns a debounced fn that waits delayed by the provided ms */
const debounce = <F extends (...args: never[]) => unknown>(
  fn: F,
  ms: number,
) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: never, ...args: never[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  } as F;
};
