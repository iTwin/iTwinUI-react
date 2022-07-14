/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Dialog, DialogProps } from './Dialog';
import { Button } from '../Buttons';
import userEvent from '@testing-library/user-event';

const renderComponent = (props: Partial<DialogProps> = {}) => {
  return render(
    <Dialog isOpen backdrop={<Dialog.Backdrop />} {...props}>
      Here is my dialog content
    </Dialog>,
  );
};

it('should render in its most basic state', () => {
  const { container } = renderComponent();

  const dialog = container.querySelector(
    '.iui-dialog.iui-dialog-visible',
  ) as HTMLElement;
  expect(dialog).toBeTruthy();
  expect(dialog).toHaveTextContent('Here is my dialog content');
  expect(dialog.getAttribute('role')).toEqual('dialog');
});

it('should render full page dialog', () => {
  const { container } = renderComponent({ styleType: 'fullPage' });

  const dialog = container.querySelector(
    '.iui-dialog.iui-dialog-full-page.iui-dialog-visible',
  ) as HTMLElement;
  expect(dialog).toBeTruthy();
  expect(dialog).toHaveTextContent('Here is my dialog content');
  expect(dialog.getAttribute('role')).toEqual('dialog');
});

it('should render with custom style and className', () => {
  const { container } = renderComponent({
    style: { color: 'red' },
    className: 'test-class',
  });

  const dialog = container.querySelector(
    '.iui-dialog.iui-dialog-visible',
  ) as HTMLElement;
  expect(dialog).toBeTruthy();
  expect(dialog.classList.contains('test-class')).toBeTruthy();
  expect(dialog).toHaveStyle('color: red');
});

it('should pass down the props through DialogContext', async () => {
  const onClose = jest.fn();
  const { container } = render(
    <Dialog
      isOpen={true}
      backdrop={<Dialog.Backdrop />}
      onClose={onClose}
      closeOnExternalClick
    >
      <Dialog.TitleBar>Test title</Dialog.TitleBar>
      <Dialog.Content>Here is my dialog content</Dialog.Content>
      <Dialog.ButtonBar>
        <Button styleType='high-visibility'>Confirm</Button>
        <Button>Close</Button>
      </Dialog.ButtonBar>
    </Dialog>,
  );

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

it('should not allow to close the dialog when isDismissible false', async () => {
  const onClose = jest.fn();
  const { container } = render(
    <Dialog
      isOpen={true}
      backdrop={<Dialog.Backdrop />}
      onClose={onClose}
      isDismissible={false}
    >
      <Dialog.TitleBar>Test title</Dialog.TitleBar>
      <Dialog.Content>Here is my dialog content</Dialog.Content>
      <Dialog.ButtonBar>
        <Button styleType='high-visibility'>Confirm</Button>
        <Button>Close</Button>
      </Dialog.ButtonBar>
    </Dialog>,
  );

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

it('should not close on backdrop mouse down when closeOnExternalClick is false', async () => {
  const onClose = jest.fn();
  const { container } = renderComponent({
    onClose,
    closeOnExternalClick: false,
  });

  const backdrop = container.querySelector('.iui-backdrop') as HTMLElement;
  expect(backdrop).toBeTruthy();
  await userEvent.click(backdrop);
  expect(onClose).not.toHaveBeenCalled();
});

it('should close on Esc click and move focus back', () => {
  const { container: buttonContainer } = render(<button>button</button>);
  const button = buttonContainer.querySelector('button') as HTMLElement;
  button.focus();
  expect(document.activeElement).toEqual(button);

  const onClose = jest.fn();
  const { container, rerender } = render(
    <Dialog isOpen backdrop={<Dialog.Backdrop />} onClose={onClose}>
      Here is my dialog content
    </Dialog>,
  );

  const dialog = container.querySelector('.iui-dialog') as HTMLElement;
  expect(dialog).toBeTruthy();
  fireEvent.keyDown(dialog, { key: 'Escape' });
  expect(onClose).toHaveBeenCalled();
  // Focus dialog when opened
  expect(document.activeElement).toEqual(dialog);

  rerender(
    <Dialog isOpen={false} backdrop={<Dialog.Backdrop />} onClose={onClose}>
      Here is my dialog content
    </Dialog>,
  );
  // Bring back focus when dialog is closed
  expect(document.activeElement).toEqual(button);
});

it('should not close on Esc click when closeOnEsc is false', () => {
  const onClose = jest.fn();
  const { container } = renderComponent({ onClose, closeOnEsc: false });

  const backdrop = container.querySelector('.iui-backdrop') as HTMLElement;
  expect(backdrop).toBeTruthy();
  fireEvent.keyDown(backdrop, { key: 'Escape' });
  expect(onClose).not.toHaveBeenCalled();
});

it('should call onKeyDown when pressed any key inside dialog', () => {
  const onKeyDown = jest.fn();
  const { container } = renderComponent({ onKeyDown });

  const dialog = container.querySelector('.iui-dialog') as HTMLElement;
  expect(dialog).toBeTruthy();
  fireEvent.keyDown(dialog, {
    key: 'Enter',
  });

  expect(onKeyDown).toHaveBeenCalledWith(
    expect.objectContaining({ key: 'Enter' }),
  );
});

it('should reset body overflow on closing and unmounting', () => {
  const { rerender, unmount } = render(
    <Dialog isOpen preventBodyScroll>
      Here is my dialog content
    </Dialog>,
  );
  expect(document.body.style.overflow).toEqual('hidden');

  // Closing by setting isOpen to false
  rerender(
    <Dialog isOpen={false} preventBodyScroll>
      Here is my dialog content
    </Dialog>,
  );
  expect(document.body.style.overflow).not.toEqual('hidden');

  rerender(
    <Dialog isOpen preventBodyScroll>
      Here is my dialog content
    </Dialog>,
  );
  expect(document.body.style.overflow).toEqual('hidden');

  // Closing by unmounting/destructing the Modal
  unmount();
  expect(document.body.style.overflow).not.toEqual('hidden');
});
