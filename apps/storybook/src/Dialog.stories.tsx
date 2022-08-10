/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import {
  Button,
  Dialog,
  DialogProps,
  DialogWrapper,
} from '@itwin/itwinui-react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
export default {
  title: 'Core/Dialog',
  component: Dialog,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta<DialogProps>;

export const Basic: Story<DialogProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeDialog = () => {
    setIsOpen(false);
  };

  const onClose = (event: React.SyntheticEvent<Element, Event>) => {
    action('onClose', { depth: 1 })(event);
    closeDialog();
  };

  const primaryButtonHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    action('Primary button')(event);
    closeDialog();
  };

  const secondaryButtonHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    action('Secondary button')(event);
    closeDialog();
  };

  return (
    <>
      <Button styleType='high-visibility' onClick={() => setIsOpen(true)}>
        Open Dialog
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc
        closeOnExternalClick
        preventDocumentScroll
        trapFocus
        isDismissible
      >
        <Dialog.Backdrop onKeyDown={action('onKeyDown', { depth: 1 })} />
        <Dialog.Main>
          <Dialog.TitleBar titleText='Best dialog ever' />
          <Dialog.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Dialog.Content>
          <Dialog.ButtonBar>
            <Button styleType='high-visibility' onClick={primaryButtonHandle}>
              Primary
            </Button>
            <Button onClick={secondaryButtonHandle}>Secondary</Button>
          </Dialog.ButtonBar>
        </Dialog.Main>
      </Dialog>
    </>
  );
};

export const Draggable: Story<DialogProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeDialog = () => {
    setIsOpen(false);
  };

  const onClose = (event: React.SyntheticEvent<Element, Event>) => {
    action('onClose', { depth: 1 })(event);
    closeDialog();
  };

  const primaryButtonHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    action('Primary button')(event);
    closeDialog();
  };

  const secondaryButtonHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    action('Secondary button')(event);
    closeDialog();
  };

  return (
    <>
      <Button styleType='high-visibility' onClick={() => setIsOpen(true)}>
        Open Dialog
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc
        isDismissible
        isDraggable
      >
        <Dialog.Main>
          <Dialog.TitleBar titleText='Best dialog ever' />
          <Dialog.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Dialog.Content>
          <Dialog.ButtonBar>
            <Button styleType='high-visibility' onClick={primaryButtonHandle}>
              Primary
            </Button>
            <Button onClick={secondaryButtonHandle}>Secondary</Button>
          </Dialog.ButtonBar>
        </Dialog.Main>
      </Dialog>
    </>
  );
};

export const DraggableRelativeToContainer: Story<DialogProps> = ({
  isOpen,
  ...rest
}) => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(isOpen);

  React.useEffect(() => {
    setIsDialogOpen(isOpen);
  }, [isOpen]);

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const onClose = (event: React.SyntheticEvent<Element, Event>) => {
    action('onClose', { depth: 1 })(event);
    closeDialog();
  };

  const primaryButtonHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    action('Primary button')(event);
    closeDialog();
  };

  const secondaryButtonHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    action('Secondary button')(event);
    closeDialog();
  };

  return (
    <>
      <Button styleType='high-visibility' onClick={() => setIsDialogOpen(true)}>
        Open Dialog
      </Button>
      <DialogWrapper
        style={{
          width: '70vw',
          height: '70vh',
          border: '1px solid red',
          marginTop: 12,
        }}
      >
        <Dialog
          isOpen={isDialogOpen}
          onClose={onClose}
          {...rest}
          closeOnEsc
          isDismissible
          isDraggable
        >
          <Dialog.Main>
            <Dialog.TitleBar titleText='Best dialog ever' />
            <Dialog.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Dialog.Content>
            <Dialog.ButtonBar>
              <Button styleType='high-visibility' onClick={primaryButtonHandle}>
                Primary
              </Button>
              <Button onClick={secondaryButtonHandle}>Secondary</Button>
            </Dialog.ButtonBar>
          </Dialog.Main>
        </Dialog>
      </DialogWrapper>
    </>
  );
};