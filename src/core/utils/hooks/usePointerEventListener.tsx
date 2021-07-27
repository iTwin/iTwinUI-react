/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

/**
 * Hook that adds and removes PointerEvent listeners.
 * @example
 *  usePointerEventListener(
 *     'pointerup',
 *     handlePointerUp,
 *     containerRef.current?.ownerDocument,
 *  );
 */
export const usePointerEventListener = (
  eventName: string,
  handler: (event: PointerEvent) => void,
  element: HTMLElement | Document | undefined,
) => {
  // Based on published hook https://usehooks.com/useEventListener/.
  // Create a ref that stores handler
  const savedHandler = React.useRef<(event: PointerEvent) => void>();

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(
    () => {
      // Make sure element supports addEventListener
      const isSupported = element && element.addEventListener;
      if (!isSupported) {
        return;
      }

      // Create event listener that calls handler function stored in ref
      const eventListener = (event: PointerEvent) =>
        savedHandler.current?.(event);

      // Add event listener
      element?.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        element?.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element], // Re-run if eventName or element changes
  );
};
