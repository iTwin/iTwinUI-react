/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { Button, ModalContent, ModalButtonBar } from '@itwin/itwinui-react';
import { Dialog } from '@itwin/itwinui-react/esm/core/Dialog';

export default () => {
  const [isModalOpen, setIsModalOpen] = React.useState(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Dialog.Main
        isOpen={isModalOpen}
        onClose={() => closeModal()}
        style={{
          position: 'static',
          transform: 'none',
          maxWidth: '80%',
          minWidth: 0,
        }}
        trapFocus={false}
      >
        <Dialog.TitleBar isDismissible>Listen</Dialog.TitleBar>
        <ModalContent>
          A dialog informs users about a task and can contain critical information, require
          decisions, or involve multiple tasks.
        </ModalContent>
        <ModalButtonBar>
          <Button styleType='high-visibility' onClick={() => closeModal()}>
            Sounds good
          </Button>
        </ModalButtonBar>
      </Dialog.Main>
    </>
  );
};
