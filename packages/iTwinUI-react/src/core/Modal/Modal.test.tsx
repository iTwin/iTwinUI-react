/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Modal, ModalProps } from './Modal';

function assertBaseElement(dialog: HTMLElement, { isDismissible = true } = {}) {
  expect(dialog).toBeTruthy();
  expect(dialog.className).toContain('iui-dialog');
  expect(dialog.className).toContain('iui-dialog-visible');
  expect(dialog.className).toContain(`iui-dialog-${styleType}`);

  const overlay = document.querySelector('.iui-backdrop') as HTMLElement;
  expect(overlay).toBeTruthy();

  const title = dialog.querySelector('.iui-dialog-title-bar') as HTMLElement;
  expect(title).toBeTruthy();
  expect(title.textContent).toEqual('Modal Title');

  const closeButton = dialog.querySelector('.iui-button.iui-borderless');
  expect(!!closeButton).toBe(isDismissible);

  expect(dialog.textContent).toContain('Body');
}

function renderComponent(props?: Partial<ModalProps>) {
  return render(
    <Modal isOpen={true} title='Modal Title' {...props}>
      Body
    </Modal>,
  );
}

beforeEach(() => {
  document.body.style.overflow = '';
});

it('should render in basic form', () => {
  renderComponent();

  const dialog = document.querySelector(
    '.iui-dialog.iui-dialog-visible',
  ) as HTMLElement;
  assertBaseElement(dialog);
});

it('should render in full page form', () => {
  renderComponent({ styleType: 'fullPage' });

  const dialog = document.querySelector(
    '.iui-dialog.iui-dialog-full-page.iui-dialog-visible',
  ) as HTMLElement;
  assertBaseElement(dialog);
});

it('should not render dialog when closed', () => {
  renderComponent({ isOpen: false });

  const dialog = document.querySelector('.iui-dialog.iui-dialog-visible');
  expect(dialog).toBeFalsy();
});

it('should close on overlay mouse down', () => {
  const onClose = jest.fn();
  renderComponent({ onClose });

  const dialog = document.querySelector(
    '.iui-dialog.iui-dialog-visible',
  ) as HTMLElement;
  assertBaseElement(dialog);

  const overlay = document.querySelector('.iui-backdrop') as HTMLElement;
  fireEvent.mouseDown(overlay);
  expect(onClose).toHaveBeenCalled();
});

it('should not close on overlay mouse down when closeOnExternalClick is false', () => {
  const onClose = jest.fn();
  renderComponent({ onClose, closeOnExternalClick: false });

  const dialog = document.querySelector(
    '.iui-dialog.iui-dialog-visible',
  ) as HTMLElement;
  assertBaseElement(dialog);

  const overlay = document.querySelector('.iui-backdrop') as HTMLElement;
  fireEvent.mouseDown(overlay);
  expect(onClose).not.toHaveBeenCalled();
});

it('should close on Esc click and move focus back', () => {
  const { container } = render(<button>button</button>);
  const button = container.querySelector('button') as HTMLElement;
  button.focus();
  expect(document.activeElement).toEqual(button);
  const onClose = jest.fn();
  const { rerender } = renderComponent({ onClose });

  let dialog = document.querySelector(
    '.iui-dialog.iui-dialog-visible',
  ) as HTMLElement;
  assertBaseElement(dialog);
  const overlay = document.querySelector('.iui-backdrop') as HTMLElement;
  expect(document.activeElement).toEqual(overlay);

  fireEvent.keyDown(backdrop, { key: 'Escape' });
  expect(onClose).toHaveBeenCalled();

  dialog = document.querySelector(
    '.iui-dialog.iui-dialog-visible',
  ) as HTMLElement;
  assertBaseElement(dialog);
  rerender(
    <Modal isOpen={false} title='Modal Title'>
      Body
    </Modal>,
  );
  expect(document.activeElement).toEqual(button);
});

it('should not close on Esc click when closeOnEsc is false', () => {
  const onClose = jest.fn();
  renderComponent({ onClose, closeOnEsc: false });

  const dialog = document.querySelector(
    '.iui-dialog.iui-dialog-visible',
  ) as HTMLElement;
  assertBaseElement(dialog);

  const overlay = document.querySelector('.iui-backdrop') as HTMLElement;
  fireEvent.keyDown(overlay, { key: 'Escape' });
  expect(onClose).not.toHaveBeenCalled();
});

it('should not close when isDismissible is false', () => {
  const onClose = jest.fn();
  renderComponent({ onClose, isDismissible: false });

  const dialog = document.querySelector(
    '.iui-dialog.iui-dialog-visible',
  ) as HTMLElement;
  assertBaseElement(dialog, { isDismissible: false });

  const overlay = document.querySelector('.iui-backdrop') as HTMLElement;
  fireEvent.keyDown(overlay, { key: 'Escape' });
  expect(onClose).not.toHaveBeenCalled();
  fireEvent.mouseDown(backdrop);
  expect(onClose).not.toHaveBeenCalled();
});

it('should call onKeyDown when pressed any key inside dialog', () => {
  const onKeyDown = jest.fn();
  renderComponent({ onKeyDown });

  const dialog = document.querySelector(
    '.iui-dialog.iui-dialog-visible',
  ) as HTMLElement;
  assertBaseElement(dialog);

  const overlay = document.querySelector('.iui-backdrop') as HTMLElement;
  fireEvent.keyDown(overlay, {
    key: 'Enter',
  });

  expect(onKeyDown).toHaveBeenCalledWith(
    expect.objectContaining({ key: 'Enter' }),
  );
});

it('should work with portal container properly', () => {
  renderComponent({ modalRootId: 'test-id' });

  let container = document.querySelector('body > #test-id') as HTMLElement;
  expect(container).toBeTruthy();
  expect(container.children.length).toBe(2); // Backdrop and dialog

  renderComponent({ modalRootId: 'test-id' });
  container = document.querySelector('body > #test-id') as HTMLElement;
  expect(container.children.length).toBe(4); // 2 x Backdrop and dialog
});

it('should reset body overflow on closing and unmounting', () => {
  const { rerender, unmount } = render(
    <Modal title='Test title' isOpen>
      Test Content
    </Modal>,
  );
  expect(document.body.style.overflow).toEqual('hidden');

  // Closing by setting isOpen to false
  rerender(
    <Modal title='Test title' isOpen={false}>
      Test Content
    </Modal>,
  );
  expect(document.body.style.overflow).not.toEqual('hidden');

  rerender(
    <Modal title='Test title' isOpen={true}>
      Test Content
    </Modal>,
  );
  expect(document.body.style.overflow).toEqual('hidden');

  // Closing by unmounting/destructing the Modal
  unmount();
  expect(document.body.style.overflow).not.toEqual('hidden');
});
