/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { getWindow } from '../functions';
import { useLatestRef } from './useLatestRef';

/**
 * Helper hook that handles elements drag logic.
 * @param elementRef Element ref that is draggable.
 * @param containerRect Bounding rectangle of container element that element can't go outside. If not passed window is used as a container.
 * @returns
 * `onPointerDown` - handler that is called when pointer is down and handles all the dragging logic.
 * `transform` - current transform of the element, it is used to preserve drag position when element visibility is being toggled.
 */
export const useDragAndDrop = (
  elementRef: React.RefObject<HTMLElement>,
  containerRect?: DOMRect,
) => {
  const grabOffsetX = React.useRef(0);
  const grabOffsetY = React.useRef(0);
  const translateX = React.useRef(0);
  const translateY = React.useRef(0);

  const distancesToEdges = React.useRef({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  const containerRectRef = useLatestRef({
    top: containerRect?.top ?? 0,
    right: containerRect?.right ?? getWindow()?.innerWidth ?? 0,
    bottom: containerRect?.bottom ?? getWindow()?.innerHeight ?? 0,
    left: containerRect?.left ?? 0,
  });

  const [transform, setTransform] = React.useState('');

  const onPointerMove = React.useRef((event: PointerEvent) => {
    if (!elementRef.current) {
      return;
    }

    let newTranslateX = event.clientX - grabOffsetX.current;
    let newTranslateY = event.clientY - grabOffsetY.current;

    const elementTop = event.clientY - distancesToEdges.current.top;
    const elementRight = event.clientX + distancesToEdges.current.right;
    const elementBottom = event.clientY + distancesToEdges.current.bottom;
    const elementLeft = event.clientX - distancesToEdges.current.left;

    // Make sure element is not dragged outside of the container.
    if (elementLeft < containerRectRef.current.left) {
      newTranslateX += containerRectRef.current.left - elementLeft;
    } else if (elementRight > containerRectRef.current.right) {
      newTranslateX -= elementRight - containerRectRef.current.right;
    }

    if (elementTop < containerRectRef.current.top) {
      newTranslateY += containerRectRef.current.top - elementTop;
    } else if (elementBottom > containerRectRef.current.bottom) {
      newTranslateY -= elementBottom - containerRectRef.current.bottom;
    }

    translateX.current = newTranslateX;
    translateY.current = newTranslateY;

    elementRef.current.style.transform = `translate(${translateX.current}px, ${translateY.current}px)`;
  });

  const originalUserSelect = React.useRef('');

  const onPointerDown = React.useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
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

      // Calculate distances from pointer to edges of the element.
      const elementRect = elementRef.current.getBoundingClientRect();
      distancesToEdges.current = {
        top: e.clientY - elementRect.top,
        right: elementRect.right - e.clientX,
        bottom: elementRect.bottom - e.clientY,
        left: e.clientX - elementRect.left,
      };

      originalUserSelect.current = elementRef.current.style.userSelect;
      // Prevents from selecting inner content when dragging.
      elementRef.current.style.userSelect = 'none';

      elementRef.current.ownerDocument.addEventListener(
        'pointermove',
        onPointerMove.current,
      );
      elementRef.current.ownerDocument.addEventListener(
        'pointerup',
        () => {
          setTransform(
            `translate(${translateX.current}px, ${translateY.current}px)`,
          );
          document.removeEventListener('pointermove', onPointerMove.current);
          if (elementRef.current) {
            elementRef.current.style.userSelect = originalUserSelect.current;
          }
        },
        { once: true },
      );
    },
    [elementRef],
  );

  return { onPointerDown, transform };
};

export default useDragAndDrop;
