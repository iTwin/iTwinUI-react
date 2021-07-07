/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { getWindow } from '../common';

/**
 * Hook that uses `ResizeObserver` to access an element's size every time it updates.
 * @param onResize callback fired with the element's new dimensions on every resize.
 * @returns callback ref to be attached to the element that needs to be observed.
 * @private
 *
 * @example
 * const [ref] = useResizeObserver((size) => console.log(size));
 * ...
 * return <div ref={ref}>...</div>;
 */
export const useResizeObserver = <T extends HTMLElement>(
  onResize: (size: DOMRectReadOnly) => void,
) => {
  const resizeObserver = React.useRef<ResizeObserver>();

  const elementRef = React.useCallback(
    (element: T | null) => {
      if (!getWindow()?.ResizeObserver) {
        return;
      }

      resizeObserver.current?.disconnect();
      if (element) {
        resizeObserver.current = new ResizeObserver(([{ contentRect }]) =>
          onResize(contentRect),
        );
        resizeObserver.current?.observe(element);
      }
    },
    [onResize],
  );

  return [elementRef, resizeObserver.current] as const;
};
