/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Backdrop, BackdropProps } from '../Backdrop';
import { getDocument, useMergedRefs } from '../utils';
import { DialogContextProps, useDialogContext } from './DialogContext';

export type DialogBackdropProps = {
  /**
   * Document where the modal will be rendered.
   * Can be specified to render in a different document (e.g. a popup window).
   * @default document
   */
  ownerDocument?: Document;
} & DialogContextProps &
  BackdropProps;

export const DialogBackdrop = React.forwardRef<
  HTMLDivElement,
  DialogBackdropProps
>((props, ref) => {
  const dialogContext = useDialogContext();
  const {
    isVisible = dialogContext.isOpen,
    onClose = dialogContext.onClose,
    isDismissible = dialogContext.isDismissible,
    closeOnExternalClick = dialogContext.closeOnExternalClick,
    closeOnEsc = dialogContext.closeOnEsc,
    onKeyDown,
    onMouseDown,
    ownerDocument = getDocument(),
    style,
    ...rest
  } = props;

  const overlayRef = React.useRef<HTMLDivElement>(null);
  const refs = useMergedRefs(overlayRef, ref);
  const previousFocusedElement = React.useRef<HTMLElement | null>();

  // Give focus to overlay for key handling to work.
  React.useLayoutEffect(() => {
    if (isVisible) {
      previousFocusedElement.current = document.activeElement as HTMLElement;
      overlayRef.current?.focus();
    } else {
      previousFocusedElement.current?.focus();
    }
    const modalOverlayRef = overlayRef.current;
    return () => {
      modalOverlayRef?.contains(document.activeElement) &&
        previousFocusedElement.current?.focus();
    };
  }, [isVisible]);

  const originalBodyOverflow = React.useRef('');
  React.useEffect(() => {
    if (!ownerDocument) {
      return;
    }

    if (isVisible) {
      originalBodyOverflow.current = ownerDocument.body.style.overflow;
      ownerDocument.body.style.overflow = 'hidden';
    } else {
      ownerDocument.body.style.overflow = originalBodyOverflow.current;
    }
    return () => {
      ownerDocument.body.style.overflow = originalBodyOverflow.current;
    };
  }, [isVisible, ownerDocument]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Prevents React from resetting its properties
    event.persist();
    if (isDismissible && closeOnEsc && event.key === 'Escape' && onClose) {
      onClose(event);
    }
    onKeyDown?.(event);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    // Prevents React from resetting its properties
    event.persist();
    if (event.target !== overlayRef.current) {
      return;
    }
    if (isDismissible && closeOnExternalClick && onClose) {
      onClose(event);
    }
    onMouseDown?.(event);
  };

  return (
    <Backdrop
      isVisible={isVisible}
      ref={refs}
      tabIndex={-1}
      style={{ outline: 0, ...style }}
      {...rest}
      onKeyDown={handleKeyDown}
      onMouseDown={handleMouseDown}
    />
  );
});

export default DialogBackdrop;
