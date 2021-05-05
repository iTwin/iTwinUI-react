/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

/**
 * Hook that uses `IntersectionObserver` to trigger `onIntersect` callback when element is in view.
 * Callback is called only once.
 */
export const useIntersection = (
  onIntersect: () => void,
  options: IntersectionObserverInit = {},
) => {
  const { root, rootMargin, threshold } = options;
  const observer = React.useRef<IntersectionObserver>();

  const setRef = React.useCallback(
    (node: HTMLElement | null) => {
      if (!window.IntersectionObserver) {
        return;
      }

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(
        ([entry], obs) => {
          if (entry.isIntersecting) {
            obs.disconnect();
            onIntersect();
          }
        },
        { root, rootMargin, threshold },
      );

      if (node) {
        observer.current.observe(node);
      }
    },
    [onIntersect, root, rootMargin, threshold],
  );

  return setRef;
};
