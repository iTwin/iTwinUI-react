/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import '@itwin/itwinui-css/css/dialog.css';
import { DialogTitleBar } from './DialogTitleBar';
import { DialogContent } from './DialogContent';
import { DialogBackdrop } from './DialogBackdrop';
import { DialogContext, DialogContextProps } from './DialogContext';
import { DialogButtonBar } from './DialogButtonBar';
import { FocusTrap, useMergedRefs } from '../utils';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';

export type DialogProps = {
  /**
   * Type of the dialog.
   * @default 'default'
   */
  styleType?: 'default' | 'fullPage';
  /**
   * Dialog content.
   */
  children: React.ReactNode;
  /**
   * Backdrop element which is used to cover the rest of the page behind the dialog.
   */
  backdrop?: React.ReactNode;
  /**
   * Traps the focus inside the dialog. This is useful when the dialog is modal.
   * @default false
   */
  trapFocus?: boolean;
  /**
   * Prevents body from being scrollable. This is useful when the dialog is modal.
   * @default false
   */
  preventDocumentScroll?: boolean;
} & DialogContextProps &
  React.ComponentPropsWithRef<'div'>;

/**
 * Dialog component.
 * @example
 * <Dialog
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   backdrop={<Dialog.Backdrop />}
 *   trapFocus
 *   preventDocumentScroll
 * >
 *   <Dialog.TitleBar>My dialog title</Dialog.TitleBar>
 *   <Dialog.Content>
 *     Here is my dialog content
 *   </Dialog.Content>
 *   <Dialog.ButtonBar>
 *     <Button styleType='high-visibility'>Confirm</Button>
 *     <Button>Close</Button>
 *   </Dialog.ButtonBar>
 * </Dialog>
 */
export const Dialog = Object.assign(
  React.forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
    const {
      children,
      backdrop,
      styleType = 'default',
      trapFocus = false,
      preventDocumentScroll = false,
      isOpen = false,
      isDismissible = true,
      closeOnEsc = true,
      closeOnExternalClick = false,
      onClose,
      onKeyDown,
      className,
      ...rest
    } = props;

    // Focuses dialog when opened and brings back focus to the previously focused element when closed.
    const previousFocusedElement = React.useRef<HTMLElement | null>();
    React.useEffect(() => {
      if (isOpen) {
        previousFocusedElement.current = dialogMainRef.current?.ownerDocument
          .activeElement as HTMLElement;
        dialogMainRef.current?.focus();
      } else {
        previousFocusedElement.current?.focus();
      }
      const dialogRef = dialogMainRef.current;
      return () => {
        dialogRef?.contains(document.activeElement) &&
          previousFocusedElement.current?.focus();
      };
    }, [isOpen]);

    // Prevents document from scrolling when the dialog is open.
    const originalBodyOverflow = React.useRef('');
    React.useEffect(() => {
      const ownerDocument = dialogMainRef.current?.ownerDocument;
      if (!ownerDocument || !preventDocumentScroll) {
        return;
      }

      if (isOpen) {
        originalBodyOverflow.current = ownerDocument.body.style.overflow;
        ownerDocument.body.style.overflow = 'hidden';
      } else {
        ownerDocument.body.style.overflow = originalBodyOverflow.current;
      }
      return () => {
        ownerDocument.body.style.overflow = originalBodyOverflow.current;
      };
    }, [isOpen, preventDocumentScroll]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      // Prevents React from resetting its properties
      event.persist();
      if (isDismissible && closeOnEsc && event.key === 'Escape' && onClose) {
        onClose(event);
      }
      onKeyDown?.(event);
    };

    const dialogMainRef = React.useRef<HTMLDivElement>(null);
    const refs = useMergedRefs(dialogMainRef, ref);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
      // Prevents React from resetting its properties
      event.persist();
      if (dialogMainRef.current?.contains(event.target as Node)) {
        return;
      }
      if (isDismissible && closeOnExternalClick && onClose) {
        onClose(event);
      }
    };

    const content = (
      <div onMouseDown={handleMouseDown}>
        {backdrop}
        <CSSTransition
          in={isOpen}
          classNames='iui-dialog-animation'
          timeout={{ exit: 600 }}
          unmountOnExit={true}
        >
          <div
            className={cx(
              'iui-dialog',
              {
                'iui-dialog-default': styleType === 'default',
                'iui-dialog-full-page': styleType === 'fullPage',
                'iui-dialog-visible': isOpen,
              },
              className,
            )}
            role='dialog'
            ref={refs}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            {...rest}
          >
            {children}
          </div>
        </CSSTransition>
      </div>
    );

    return (
      <DialogContext.Provider
        value={{
          isOpen,
          onClose,
          closeOnEsc,
          closeOnExternalClick,
          isDismissible,
        }}
      >
        <>
          {trapFocus && <FocusTrap>{content}</FocusTrap>}
          {!trapFocus && content}
        </>
      </DialogContext.Provider>
    );
  }),
  {
    Backdrop: DialogBackdrop,
    TitleBar: DialogTitleBar,
    Content: DialogContent,
    ButtonBar: DialogButtonBar,
  },
);

export default Dialog;
