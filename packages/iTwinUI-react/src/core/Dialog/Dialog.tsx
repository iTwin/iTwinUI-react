/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import '@itwin/itwinui-css/css/dialog.css';
import DialogTitleBar from './DialogTitleBar';
import DialogContent from './DialogContent';
import DialogBackdrop from './DialogBackdrop';
import { DialogContext, DialogContextProps } from './DialogContext';
import DialogButtonBar from './DialogButtonBar';
import { FocusTrap, getDocument, useMergedRefs } from '../utils';
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
   * @example
   * <Dialog
   *   isOpen={isOpen}
   *   onClose={() => setIsOpen(false)}
   *   backdrop={<Dialog.Backdrop />}
   *   trapFocus
   *   preventBodyScroll
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
  preventBodyScroll?: boolean;
  /**
   * Document where the dialog will be rendered.
   * @default document
   */
  ownerDocument?: Document;
} & DialogContextProps &
  React.ComponentPropsWithRef<'div'>;

export const Dialog = Object.assign(
  React.forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
    const {
      children,
      backdrop,
      styleType = 'default',
      trapFocus = false,
      preventBodyScroll = false,
      ownerDocument = getDocument(),
      isOpen = false,
      isDismissible = true,
      closeOnEsc = true,
      closeOnExternalClick = false,
      onClose,
      onKeyDown,
      style,
      className,
      ...rest
    } = props;

    // Focuses dialog when opened and brings back focus to the previously focused element when closed.
    const previousFocusedElement = React.useRef<HTMLElement | null>();
    React.useLayoutEffect(() => {
      if (isOpen) {
        previousFocusedElement.current = document.activeElement as HTMLElement;
        dialogMainRef.current?.focus();
      } else {
        previousFocusedElement.current?.focus();
      }
      const modalOverlayRef = dialogMainRef.current;
      return () => {
        modalOverlayRef?.contains(document.activeElement) &&
          previousFocusedElement.current?.focus();
      };
    }, [isOpen]);

    // Prevents document from scrolling when the dialog is open.
    const originalBodyOverflow = React.useRef('');
    React.useEffect(() => {
      if (!ownerDocument || !preventBodyScroll) {
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
    }, [isOpen, ownerDocument, preventBodyScroll]);

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
          style={{ outline: 0, ...style }}
          {...rest}
        >
          {children}
        </div>
      </CSSTransition>
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
        <div onMouseDown={handleMouseDown}>
          {backdrop}
          {trapFocus && (
            <FocusTrap>
              <div>{content}</div>
            </FocusTrap>
          )}
          {!trapFocus && content}
        </div>
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
