/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useMergedRefs } from './useMergedRefs';
import { useResizeObserver } from './useResizeObserver';

/**
 * Hook that returns the height of an element in three stages:
 *  - initialized with 0
 *  - immediately set to element's initial height as soon as it's mounted
 *  - update to new height every time it changes (using `useResizeObserver` hook)
 *
 * @private
 * @param watchResizes If false, ResizeObserver will not be connected and only the initial height will be returned
 * @returns [ref to attach to the element, stateful height of the element]
 *
 * @example
 * const [ref, height] = useContainerHeight();
 * ... // do something with height
 * return <div ref={ref}>...</div>;
 */
export const useContainerHeight = <T extends HTMLElement>(
  watchResizes = true,
) => {
  const [contentHeight, setContentHeight] = React.useState(0);

  const ref = React.useCallback((element: T) => {
    if (!element) {
      return;
    }
    setContentHeight(element.getBoundingClientRect().height);
  }, []);

  const updateWidth = React.useCallback(
    ({ height }: DOMRectReadOnly) => setContentHeight(height),
    [],
  );

  const [resizeRef, resizeObserver] = useResizeObserver(updateWidth);

  if (!watchResizes) {
    resizeObserver?.disconnect();
  }

  const refs = useMergedRefs(ref, watchResizes ? resizeRef : undefined);

  return [refs, contentHeight] as const;
};

export default useContainerHeight;
