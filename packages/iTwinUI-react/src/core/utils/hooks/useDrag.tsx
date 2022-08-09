/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

/**
 * Helper hook that handles elements drag logic.
 * @param elementRef Element ref that is draggable.
 * @returns
 * `onPointerDown` - handler that is called when pointer is down and handles all the dragging logic.
 * `transform` - current transform of the element, it is used to preserve drag position when element visibility is being toggled.
 */
export const useDrag = (elementRef: React.RefObject<HTMLElement>) => {
  const grabOffsetX = React.useRef(0);
  const grabOffsetY = React.useRef(0);
  const translateX = React.useRef(0);
  const translateY = React.useRef(0);

  const [transform, setTransform] = React.useState('');

  const onPointerDown = (e: React.PointerEvent<HTMLElement>) => {
    if (!elementRef.current || e.button !== 0) {
      return;
    }
    const transformValue = getComputedStyle(
      elementRef.current,
    ).getPropertyValue('transform');
    const matrix = new DOMMatrix(transformValue);

    translateX.current = matrix.m41;
    translateY.current = matrix.m42;

    grabOffsetX.current = e.clientX - translateX.current;
    grabOffsetY.current = e.clientY - translateY.current;

    elementRef.current.ownerDocument.addEventListener(
      'pointermove',
      onPointerMove,
      false,
    );
    elementRef.current.ownerDocument.addEventListener(
      'pointerup',
      () => {
        setTransform(
          `translate(${translateX.current}px, ${translateY.current}px)`,
        );
        document.removeEventListener('pointermove', onPointerMove);
      },
      { once: true },
    );
  };

  const onPointerMove = React.useCallback(
    (event: PointerEvent) => {
      if (elementRef.current) {
        translateX.current = event.clientX - grabOffsetX.current;
        translateY.current = event.clientY - grabOffsetY.current;
        elementRef.current.style.transform = `translate(${translateX.current}px, ${translateY.current}px)`;
      }
    },
    [elementRef],
  );

  return { onPointerDown, transform };
};

export default useDrag;
