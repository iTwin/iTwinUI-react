/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import '@itwin/itwinui-css/css/dialog.css';
import DialogTitleBar from './DialogTitleBar';
import DialogContent from './DialogContent';
import DialogMain from './DialogMain';
import DialogBackdrop from './DialogBackdrop';
import { DialogContext, DialogContextProps } from './DialogContext';
import DialogButtonBar from './DialogButtonBar';
import { FocusTrap, getDocument } from '../utils';

export type DialogProps = {
  /**
   * Dialog content.
   * @example
   * <Dialog isOpen={true} onClose={() => setIsOpen(false)}>
   *   <Dialog.Backdrop />
   *   <Dialog.Main>
   *     <Dialog.TitleBar>My dialog title</Dialog.TitleBar>
   *     <Dialog.Content>
   *      Here is my dialog content
   *    </Dialog.Content>
   *     <Dialog.ButtonBar>
   *       <Button styleType='high-visibility'>Confirm</Button>
   *       <Button>Close</Button>
   *     </Dialog.ButtonBar>
   *   </Dialog.Main>
   * </Dialog>
   */
  children: React.ReactNode;
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
   * Can be specified to render in a different document (e.g. a popup window).
   * @default document
   */
  ownerDocument?: Document;
} & DialogContextProps;

export const Dialog = Object.assign(
  (props: DialogProps) => {
    const {
      children,
      trapFocus = false,
      preventBodyScroll = false,
      ownerDocument = getDocument(),
      isOpen = false,
      ...rest
    } = props;

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

    return (
      <DialogContext.Provider value={{ isOpen, ...rest }}>
        {trapFocus && (
          <FocusTrap>
            <div>{children}</div>
          </FocusTrap>
        )}
        {!trapFocus && children}
      </DialogContext.Provider>
    );
  },
  {
    Backdrop: DialogBackdrop,
    Main: DialogMain,
    TitleBar: DialogTitleBar,
    Content: DialogContent,
    ButtonBar: DialogButtonBar,
  },
);

export default Dialog;
