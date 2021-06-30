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
) => {
  const [size, setSize] = React.useState(() => ({
    height: elementRef.current?.getBoundingClientRect().height,
    width: elementRef.current?.getBoundingClientRect().width,
  }));

  const resizeObserver = React.useRef<ResizeObserver | null>(null);

  const observe = React.useCallback(() => {
    const updateSize = (entry: DOMRectReadOnly) => {
      setSize({ height: entry.height, width: entry.width });
    };

    if (elementRef.current) {
      resizeObserver.current = new ResizeObserver(([{ contentRect }]) =>
        updateSize(contentRect),
      );
      resizeObserver.current?.observe(elementRef.current as T);
    }
  }, [elementRef]);

  const disconnect = React.useCallback(() => {
    resizeObserver.current?.disconnect();
  }, []);

  React.useLayoutEffect(() => {
    observe();
    return () => disconnect();
  }, [observe, disconnect]);

  return size;
};
