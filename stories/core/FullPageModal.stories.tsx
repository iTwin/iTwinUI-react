/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import { Button } from '../../src/core';
import {
  FullPageModal,
  FullPageModalProps,
  ModalButtonBar,
} from '../../src/core/Modal';
import { useEffect, useState } from '@storybook/addons';
import { CreeveyMeta } from 'creevey';
import { Transition } from '../../src/core/Modal/FullPageModal';

export default {
  title: 'Core/FullPageModal',
  component: FullPageModal,
  args: {
    title: 'This is the title',
  },
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    onClose: { control: { disable: true } },
    ownerDocument: { control: { disable: true } },
  },
  parameters: {
    creevey: {
      captureElement: null,
      tests: {
        async open() {
          const button = await this.browser.findElement({
            className: 'iui-button',
          });

          await button.click();
          await this.expect(await this.takeScreenshot()).to.matchImage(
            'opened',
          );
        },
      },
    },
  },
} as Meta<FullPageModalProps> & CreeveyMeta;

export const Basic: Story<FullPageModalProps> = ({
  isOpen,
  title = 'This is the title',
  ...rest
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClose = (event: React.SyntheticEvent<Element, Event>) => {
    action('onClose', { depth: 1 })(event);
    closeModal();
  };

  const primaryButtonHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    action('Primary button')(event);
    closeModal();
  };

  const secondaryButtonHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    action('Secondary button')(event);
    closeModal();
  };

  return (
    <>
      <Button styleType='high-visibility' onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      <FullPageModal
        isOpen={isModalOpen}
        title={title}
        onClose={onClose}
        onKeyDown={action('onKeyDown', { depth: 1 })}
        {...rest}
        transition={Transition.Scale}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <ModalButtonBar>
          <Button styleType='high-visibility' onClick={primaryButtonHandle}>
            Primary
          </Button>
          <Button onClick={secondaryButtonHandle}>Secondary</Button>
        </ModalButtonBar>
      </FullPageModal>
    </>
  );
};

export const SlideTransition: Story<FullPageModalProps> = Basic.bind({});

SlideTransition.args = {
  transition: Transition.SlideRight,
};

export const FadeTransition: Story<FullPageModalProps> = Basic.bind({});

FadeTransition.args = {
  transition: Transition.Fade,
};
