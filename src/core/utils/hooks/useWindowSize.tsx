/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

/**
 * Hook that returns window dimensions updated through the `resize` event.
 * @param delay maximum ms to debounce the update by
 * @returns state object containing height and width of the window
 */
export const useWindowSize = (delay = 0) => {
  const [size, setSize] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
    const updateSize = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    const listener = delay ? debounce(updateSize, delay) : updateSize;
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  });

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
