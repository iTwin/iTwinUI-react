/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '@itwin/itwinui-css/css/dialog.css';
import DialogTitleBar from './DialogTitleBar';
import DialogContent from './DialogContent';
import DialogMain from './DialogMain';
import DialogBackdrop from './DialogBackdrop';
import { DialogContext, DialogContextProps } from './DialogContext';
import DialogButtonBar from './DialogButtonBar';

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
} & DialogContextProps;

export const Dialog = Object.assign(
  (props: DialogProps) => {
    const { children, isOpen = false, ...rest } = props;
    return (
      <DialogContext.Provider value={{ isOpen, ...rest }}>
        <CSSTransition
          in={isOpen}
          classNames='iui-dialog-animation'
          timeout={{ exit: 600 }}
          unmountOnExit={true}
        >
          <>{children}</>
        </CSSTransition>
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
