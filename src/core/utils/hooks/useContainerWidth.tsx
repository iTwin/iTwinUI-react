/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useMergedRefs } from './useMergedRefs';
import { useResizeObserver } from './useResizeObserver';

/**
 * Hook that returns the width of an element in three stages:
 *  - initialized with 0
 *  - immediately set to element's initial width as soon as it's mounted
 *  - update to new width every time it changes (using `useResizeObserver` hook)
 *
 * @private
 * @param watchResizes If false, ResizeObserver will not be connected and only the initial width will be returned
 * @returns [ref to attach to the element, stateful width of the element]
 *
 * @example
 * const [ref, width] = useContainerWidth();
 * ... // do something with width
 * return <div ref={ref}>...</div>;
 */
export const useContainerWidth = <T extends HTMLElement>(
  watchResizes = true,
) => {
  const [contentWidth, setContentWidth] = React.useState(0);

  // callback ref to set initial contentWidth only once
  const isInitialized = React.useRef(false);
  const ref = React.useCallback((element: T) => {
    if (!element) {
      return;
    }
    if (!isInitialized.current) {
      setContentWidth(element.getBoundingClientRect().width);
      isInitialized.current = true;
    }
  }, []);

  const updateWidth = React.useCallback(
    ({ width }) => setContentWidth(width),
    [],
  );

  const [resizeRef, resizeObserver] = useResizeObserver(updateWidth);

  if (!watchResizes) {
    resizeObserver?.disconnect();
  }

  const refs = useMergedRefs(ref, watchResizes ? resizeRef : undefined);

  return [refs, contentWidth] as const;
};

export default useContainerWidth;
