/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

/**
 * Hook that uses `ResizeObserver` to return an element's size every time it updates.
 * @param element the element to observe resizes on. You can pass `.current` member of the element's ref.
 * @returns stateful object containing height and width of the element.
 *
 * @example
 * const elementRef = React.useRef<HTMLDivElement>(null);
 * const { height, width } = useResizeObserver(elementRef.current);
 * ...
 * return <div ref={elementRef}>...</div>;
 */
export const useResizeObserver = <T extends HTMLElement>(element: T | null) => {
  const [size, setSize] = React.useState(() => ({
    height: element?.getBoundingClientRect().height,
    width: element?.getBoundingClientRect().width,
  }));

  const resizeObserver = React.useRef<ResizeObserver | null>(null);

  React.useLayoutEffect(() => {
    resizeObserver.current?.disconnect();
    if (element) {
      resizeObserver.current = new ResizeObserver(([{ contentRect }]) =>
        setSize({ height: contentRect.height, width: contentRect.width }),
      );
      resizeObserver.current?.observe(element);
    }
    return () => resizeObserver.current?.disconnect();
  }, [element]);

  return size;
};
