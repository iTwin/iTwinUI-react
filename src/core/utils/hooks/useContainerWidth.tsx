/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useMergedRefs } from './useMergedRefs';
import { useResizeObserver } from './useResizeObserver';

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
    } else {
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
