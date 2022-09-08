/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { getBoundedValue, getWindow } from '../functions';

export type ResizerProps = {
  elementRef: React.RefObject<HTMLElement>;
  containerRef?: React.RefObject<HTMLElement>;
  setStyle?: (style: React.CSSProperties) => void;
};

const parseTranslate = (ref: React.RefObject<HTMLElement>) => {
  if (!ref.current) {
    return [];
  }

  const transformValue = getComputedStyle(ref.current).getPropertyValue(
    'transform',
  );
  const matrix = new DOMMatrix(transformValue);

  return [matrix.m41, matrix.m42];
};

export const Resizer = (props: ResizerProps) => {
  const { elementRef, containerRef, setStyle } = props;

  const onResizePointerDown = (event: React.PointerEvent<HTMLElement>) => {
    if (!elementRef.current) {
      return;
    }

    const initialPointerX = event.clientX;
    const initialPointerY = event.clientY;

    const [initialTranslateX, initialTranslateY] = parseTranslate(elementRef);
    const {
      width: initialWidth,
      height: initialHeight,
    } = elementRef.current.getBoundingClientRect();

    let width = `${initialWidth}px`;
    let height = `${initialHeight}px`;
    let transform = `translate(${initialTranslateX}px,${initialTranslateY}px)`;

    const minWidth = Number(
      getComputedStyle(elementRef.current).minWidth.replace('px', ''),
    );
    const minHeight = Number(
      getComputedStyle(elementRef.current).minHeight.replace('px', ''),
    );

    const resizer = event.currentTarget.dataset.iuiResizer;

    const originalUserSelect =
      elementRef.current.ownerDocument.body.style.userSelect;
    elementRef.current.ownerDocument.body.style.userSelect = 'none';

    console.log('start', { width, height, transform });

    const onResizePointerMove = (event: PointerEvent) => {
      if (!elementRef.current) {
        return;
      }

      const containerRect = containerRef?.current?.getBoundingClientRect();
      const clientX = getBoundedValue(
        event.clientX,
        containerRect?.left ?? 0,
        containerRect?.right ?? getWindow()?.innerWidth ?? 0,
      );
      const clientY = getBoundedValue(
        event.clientY,
        containerRect?.top ?? 0,
        containerRect?.bottom ?? getWindow()?.innerHeight ?? 0,
      );

      switch (resizer) {
        case 'top-left': {
          const newHeight = initialHeight + (initialPointerY - clientY);
          const newWidth = initialWidth + (initialPointerX - clientX);
          width = elementRef.current.style.width = `${Math.max(
            newWidth,
            minWidth,
          )}px`;
          height = elementRef.current.style.height = `${Math.max(
            newHeight,
            minHeight,
          )}px`;
          const [currentTranslateX, currentTranslateY] = parseTranslate(
            elementRef,
          );
          const newTranslateX =
            newWidth < minWidth
              ? currentTranslateX
              : initialTranslateX - (initialPointerX - clientX);
          const newTranslateY =
            newHeight < minHeight
              ? currentTranslateY
              : initialTranslateY - (initialPointerY - clientY);
          transform = elementRef.current.style.transform = `translate(${newTranslateX}px, ${newTranslateY}px)`;
          break;
        }
        case 'top': {
          const newHeight = initialHeight + (initialPointerY - clientY);
          if (newHeight < minHeight) {
            break;
          }
          height = elementRef.current.style.height = `${newHeight}px`;
          transform = elementRef.current.style.transform = `translate(${
            parseTranslate(elementRef)[0]
          }px, ${initialTranslateY - (initialPointerY - clientY)}px)`;
          break;
        }
        case 'top-right': {
          const newHeight = initialHeight + (initialPointerY - clientY);
          height = elementRef.current.style.height = `${Math.max(
            newHeight,
            minHeight,
          )}px`;
          width = elementRef.current.style.width = `${
            initialWidth - (initialPointerX - clientX)
          }px`;
          const [currentTranslateX, currentTranslateY] = parseTranslate(
            elementRef,
          );
          const newTranslateY =
            newHeight < minHeight
              ? currentTranslateY
              : initialTranslateY - (initialPointerY - clientY);
          transform = elementRef.current.style.transform = `translate(${currentTranslateX}px, ${newTranslateY}px)`;
          break;
        }
        case 'right': {
          width = elementRef.current.style.width = `${
            initialWidth - (initialPointerX - clientX)
          }px`;
          break;
        }
        case 'bottom-right': {
          width = elementRef.current.style.width = `${
            initialWidth - (initialPointerX - clientX)
          }px`;
          height = elementRef.current.style.height = `${
            initialHeight - (initialPointerY - clientY)
          }px`;
          break;
        }
        case 'bottom': {
          height = elementRef.current.style.height = `${
            initialHeight - (initialPointerY - clientY)
          }px`;
          break;
        }
        case 'bottom-left': {
          const newWidth = initialWidth + (initialPointerX - clientX);
          width = elementRef.current.style.width = `${Math.max(
            newWidth,
            minWidth,
          )}px`;
          height = elementRef.current.style.height = `${
            initialHeight - (initialPointerY - clientY)
          }px`;
          const newTranslateX =
            newWidth < minWidth
              ? parseTranslate(elementRef)[0]
              : initialTranslateX - (initialPointerX - clientX);
          transform = elementRef.current.style.transform = `translate(${newTranslateX}px, ${
            parseTranslate(elementRef)[1]
          }px)`;
          break;
        }
        case 'left': {
          const newWidth = initialWidth + (initialPointerX - clientX);
          if (newWidth < minWidth) {
            break;
          }
          width = elementRef.current.style.width = `${newWidth}px`;
          transform = elementRef.current.style.transform = `translate(${
            initialTranslateX - (initialPointerX - clientX)
          }px, ${parseTranslate(elementRef)[1]}px)`;
          break;
        }
        default:
          break;
      }
    };

    elementRef.current.ownerDocument.addEventListener(
      'pointermove',
      onResizePointerMove,
    );
    elementRef.current.ownerDocument.addEventListener(
      'pointerup',
      () => {
        document.removeEventListener('pointermove', onResizePointerMove);
        if (elementRef.current) {
          elementRef.current.ownerDocument.body.style.userSelect = originalUserSelect;
          console.log('end', { width, height, transform });
          setStyle?.({
            width,
            height,
            transform,
          });
        }
      },
      { once: true },
    );
  };

  return (
    <>
      <div
        data-iui-resizer='top-left'
        onPointerDown={onResizePointerDown}
        style={{
          background: 'rgba(255, 0, 0, .5)',
          position: 'absolute',
          top: -4,
          left: -4,
          width: 8,
          height: 8,
          cursor: 'nw-resize',
        }}
      />
      <div
        data-iui-resizer='top'
        onPointerDown={onResizePointerDown}
        style={{
          background: 'rgba(0, 255, 0, .5)',
          position: 'absolute',
          top: -4,
          left: 4,
          right: 4,
          height: 8,
          cursor: 'n-resize',
        }}
      />
      <div
        data-iui-resizer='top-right'
        onPointerDown={onResizePointerDown}
        style={{
          background: 'rgba(255, 0, 0, .5)',
          position: 'absolute',
          top: -4,
          right: -4,
          width: 8,
          height: 8,
          cursor: 'ne-resize',
        }}
      />
      <div
        data-iui-resizer='right'
        onPointerDown={onResizePointerDown}
        style={{
          background: 'rgba(0, 255, 0, .5)',
          position: 'absolute',
          top: 4,
          right: -4,
          bottom: 4,
          width: 8,
          cursor: 'e-resize',
        }}
      />
      <div
        data-iui-resizer='bottom-right'
        onPointerDown={onResizePointerDown}
        style={{
          background: 'rgba(255, 0, 0, .5)',
          position: 'absolute',
          bottom: -4,
          right: -4,
          width: 8,
          height: 8,
          cursor: 'se-resize',
        }}
      />
      <div
        data-iui-resizer='bottom'
        onPointerDown={onResizePointerDown}
        style={{
          background: 'rgba(0, 255, 0, .5)',
          position: 'absolute',
          bottom: -4,
          left: 4,
          right: 4,
          height: 8,
          cursor: 's-resize',
        }}
      />
      <div
        data-iui-resizer='bottom-left'
        onPointerDown={onResizePointerDown}
        style={{
          background: 'rgba(255, 0, 0, .5)',
          position: 'absolute',
          bottom: -4,
          left: -4,
          width: 8,
          height: 8,
          cursor: 'sw-resize',
        }}
      />
      <div
        data-iui-resizer='left'
        onPointerDown={onResizePointerDown}
        style={{
          background: 'rgba(0, 255, 0, .5)',
          position: 'absolute',
          top: 4,
          left: -4,
          bottom: 4,
          width: 8,
          cursor: 'w-resize',
        }}
      />
    </>
  );
};

export default Resizer;
