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
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Dialog relativeTo='container' isOpen={isModalOpen}>
        <Dialog.Main
          onClose={() => closeModal()}
          trapFocus={false}
          style={{
            width: '80%',
            minWidth: '80%',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
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
      </Dialog>
    </div>
  );
};
