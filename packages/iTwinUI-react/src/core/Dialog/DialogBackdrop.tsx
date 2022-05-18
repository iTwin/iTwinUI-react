/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import {
  useTheme,
  getContainer,
  getDocument,
  FocusTrap,
  useMergedRefs,
} from '../utils';
import '@itwin/itwinui-css/css/dialog.css';
import { CSSTransition } from 'react-transition-group';

export type DialogBackdropProps = {
  /**
   * Flag whether dialog should be shown.
   * @default false
   */
  isOpen?: boolean;
  /**
   * Handler that is called when Dialog is closed.
   */
  onClose?: (event?: React.SyntheticEvent) => void;
  /**
   * Flag whether dialog is dismissible. If false, you can't close it.
   * @default true
   */
  isDismissible?: boolean;
  /**
   * Flag whether dialog should be closed on background overlay press.
   * @default true
   */
  closeOnExternalClick?: boolean;
  /**
   * Flag whether dialog should be closed on Escape key press.
   * @default true
   */
  closeOnEsc?: boolean;
  /**
   * Id of the root where the dialog will be rendered in.
   * @default 'iui-react-portal-container'
   */
  dialogRootId?: string;
  /**
   * Document where the dialog will be rendered.
   * Can be specified to render in a different document (e.g. a popup window).
   * @default document
   */
  ownerDocument?: Document;
  /**
   * Type of the dialog.
   * @default 'default'
   */
  styleType?: 'default' | 'fullPage';
  /**
   * Content of the backdrop.
   */
  children: React.ReactNode;
} & React.ComponentPropsWithRef<'div'>;

/**
 * It is a wrapper component for `Dialog` that also adds a backdrop.
 * @example
 * <Dialog.Backdrop
 *   isOpen={true}
 *   onClose={onClose}
 * >
 *   <Dialog>
 *     <Dialog.TitleBar>
 *       My dialog title
 *     </Dialog.TitleBar>
 *     <Dialog.Content>
 *       Here is my dialog content
 *     </Dialog.Content>
 *     <Dialog.ButtonBar>
 *       <Button styleType='high-visibility'>
 *         Primary button
 *       </Button>
 *       <Button>
 *         Secondary button
 *       </Button>
 *     </Dialog.ButtonBar>
 *   </Dialog>
 * </Dialog.Backdrop>
 */
export const DialogBackdrop = React.forwardRef<
  HTMLDivElement,
  DialogBackdropProps
>((props, ref) => {
  const {
    children,
    isOpen = false,
    styleType = 'default',
    ownerDocument = getDocument(),
    closeOnEsc = true,
    closeOnExternalClick = true,
    dialogRootId = 'iui-react-portal-container',
    isDismissible = true,
    onClose,
    onKeyDown,
    className,
    ...rest
  } = props;

  useTheme();

  const container = getContainer(dialogRootId, ownerDocument);

  const overlayRef = React.useRef<HTMLDivElement>(null);
  const refs = useMergedRefs(overlayRef, ref);

  const originalBodyOverflow = React.useRef('');

  const previousFocusedElement = React.useRef<HTMLElement | null>();

  // Give focus to overlay for key handling to work.
  React.useLayoutEffect(() => {
    if (isOpen) {
      previousFocusedElement.current = document.activeElement as HTMLElement;
      overlayRef.current?.focus();
    } else {
      previousFocusedElement.current?.focus();
    }
    const dialogOverlayRef = overlayRef.current;
    return () => {
      dialogOverlayRef?.contains(document.activeElement) &&
        previousFocusedElement.current?.focus();
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (!ownerDocument) {
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
  }, [isOpen, ownerDocument]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Prevents React from resetting its properties
    event.persist();
    if (isDismissible && closeOnEsc && event.key === 'Escape' && onClose) {
      onClose(event);
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    // Prevents React from resetting its properties
    event.persist();
    if (event.target !== overlayRef.current) {
      return;
    }
    if (isDismissible && closeOnExternalClick && onClose) {
      onClose(event);
    }
  };

  return !!container ? (
    ReactDOM.createPortal(
      <CSSTransition
        in={isOpen}
        classNames='iui-dialog-animation'
        timeout={{ exit: 600 }}
        unmountOnExit={true}
      >
        <FocusTrap>
          <div
            className={cx(
              'iui-dialog-backdrop',
              {
                'iui-dialog-default': styleType === 'default',
                'iui-dialog-full-page': styleType === 'fullPage',
                'iui-dialog-visible': isOpen,
              },
              className,
            )}
            tabIndex={-1}
            onKeyDown={handleKeyDown}
            ref={refs}
            onMouseDown={handleMouseDown}
            {...rest}
          >
            {children}
          </div>
        </FocusTrap>
      </CSSTransition>,
      container,
    )
  ) : (
    <></>
  );
});

export default DialogBackdrop;
