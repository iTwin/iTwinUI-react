/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useMergedRefs, useTheme } from '../utils';
import '@itwin/itwinui-css/css/dialog.css';
import { DialogContextProps, useDialogContext } from './DialogContext';
import { CSSTransition } from 'react-transition-group';

export type DialogMainProps = {
  /**
   * Type of the dialog.
   * @default 'default'
   */
  styleType?: 'default' | 'fullPage';
  /**
   * Content of the dialog.
   */
  children: React.ReactNode;
} & Omit<DialogContextProps, 'closeOnExternalClick'> &
  React.ComponentPropsWithRef<'div'>;

/**
 * Dialog component which can wrap any content.
 * @example
 * <Dialog.Main>
 *   <Dialog.TitleBar>
 *     My dialog title
 *   </Dialog.TitleBar>
 *   <Dialog.Content>
 *     Here is my dialog content
 *   </Dialog.Content>
 *   <Dialog.ButtonBar>
 *     <Button styleType='high-visibility'>
 *       Primary button
 *     </Button>
 *     <Button>
 *       Secondary button
 *     </Button>
 *   </Dialog.ButtonBar>
 * </Dialog.Main>
 */
export const DialogMain = React.forwardRef<HTMLDivElement, DialogMainProps>(
  (props, ref) => {
    const dialogContext = useDialogContext();
    const {
      className,
      children,
      styleType = 'default',
      isOpen = dialogContext.isOpen,
      isDismissible = dialogContext.isDismissible,
      onClose = dialogContext.onClose,
      closeOnEsc = dialogContext.closeOnEsc,
      onKeyDown,
      style,
      ...rest
    } = props;

    useTheme();

    const dialogRef = React.useRef<HTMLDivElement>(null);
    const refs = useMergedRefs(dialogRef, ref);

    const previousFocusedElement = React.useRef<HTMLElement | null>();
    React.useLayoutEffect(() => {
      if (isOpen) {
        previousFocusedElement.current = document.activeElement as HTMLElement;
        dialogRef.current?.focus();
      } else {
        previousFocusedElement.current?.focus();
      }
      const modalOverlayRef = dialogRef.current;
      return () => {
        modalOverlayRef?.contains(document.activeElement) &&
          previousFocusedElement.current?.focus();
      };
    }, [isOpen]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      // Prevents React from resetting its properties
      event.persist();
      if (isDismissible && closeOnEsc && event.key === 'Escape' && onClose) {
        onClose(event);
      }
      onKeyDown?.(event);
    };

    return (
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
  },
);

export default DialogMain;
