/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';
import { FocusTrap } from '../utils';
import { Dialog, DialogProps } from './Dialog';
import { Button } from '../Buttons';
import userEvent from '@testing-library/user-event';

const renderComponent = (props: Partial<DialogProps> = {}) => {
  return render(
    <Dialog isOpen={true} {...props}>
      <Dialog.Backdrop />
      <FocusTrap>
        <Dialog.Main>
          <Dialog.TitleBar>Test title</Dialog.TitleBar>
          <Dialog.Content>Here is my dialog content</Dialog.Content>
          <Dialog.ButtonBar>
            <Button styleType='high-visibility'>Confirm</Button>
            <Button>Close</Button>
          </Dialog.ButtonBar>
        </Dialog.Main>
      </FocusTrap>
    </Dialog>,
  );
};

it('should pass down the props through DialogContext', async () => {
  const onClose = jest.fn();
  const { container } = renderComponent({ onClose });

  const backdrop = container.querySelector('.iui-backdrop') as HTMLElement;
  expect(backdrop).toBeTruthy();
  expect(backdrop).toBeVisible();
  await userEvent.click(backdrop);
  expect(onClose).toHaveBeenCalledTimes(1);

  const dialog = container.querySelector('.iui-dialog') as HTMLElement;
  expect(dialog).toBeTruthy();
  expect(dialog).toBeVisible();

  const closeIcon = dialog.querySelector(
    '.iui-dialog-title-bar button',
  ) as HTMLElement;
  expect(closeIcon).toBeTruthy();
  await userEvent.click(closeIcon);
  expect(onClose).toHaveBeenCalledTimes(2);
});

it('should not allow to close the dialog', async () => {
  const onClose = jest.fn();
  const { container } = renderComponent({ onClose, isDismissible: false });

  const backdrop = container.querySelector('.iui-backdrop') as HTMLElement;
  expect(backdrop).toBeTruthy();
  expect(backdrop).toBeVisible();
  await userEvent.click(backdrop);
  expect(onClose).not.toHaveBeenCalled();

  const dialog = container.querySelector('.iui-dialog') as HTMLElement;
  expect(dialog).toBeTruthy();
  expect(dialog).toBeVisible();

  const closeIcon = dialog.querySelector(
    '.iui-dialog-title-bar button',
  ) as HTMLElement;
  expect(closeIcon).toBeFalsy();
});
