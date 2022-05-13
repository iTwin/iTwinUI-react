/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CommonProps, useTheme } from '../utils';
import '@itwin/itwinui-css/css/dialog.css';
import { DialogBackdropProps } from '../Dialog/DialogBackdrop';
import { Dialog } from '../Dialog';

export type ModalProps = {
  /**
   * Modal title.
   */
  title: React.ReactNode;
  /**
   * Id of the root where the modal will be rendered in.
   * @default 'iui-react-portal-container'
   */
  modalRootId?: string;
  /**

  * Content of the modal.
   */
  children: React.ReactNode;
} & Omit<DialogBackdropProps, 'children' & 'dialogRootId'> &
  Omit<CommonProps, 'title'>;

/**
 * Modal component which can wrap any content.
 * @example
 * <Modal
 *   isOpen={true}
 *   title='My modal'
 *   onClose={onClose}
 * >
 *   <ModalContent>
 *     Here is my modal content
 *   </ModalContent>
 *   <ModalButtonBar>
 *     <Button styleType='high-visibility'>
 *       Primary button
 *     </Button>
 *     <Button>
 *       Secondary button
 *     </Button>
 *   </ModalButtonBar>
 * </Modal>
 */
export const Modal = (props: ModalProps) => {
  const {
    title,
    isDismissible = true,
    id,
    style,
    children,
    modalRootId = 'iui-react-portal-container',
    ...rest
  } = props;

  useTheme();

  return (
    <Dialog.Backdrop
      isDismissible={isDismissible}
      dialogRootId={modalRootId}
      {...rest}
    >
      <Dialog style={style} id={id} aria-modal>
        <Dialog.TitleBar onClose={props.onClose} isDismissible={isDismissible}>
          {title}
        </Dialog.TitleBar>
        {children}
      </Dialog>
    </Dialog.Backdrop>
  );
};

export default Modal;
