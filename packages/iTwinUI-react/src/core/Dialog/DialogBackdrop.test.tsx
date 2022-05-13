/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { DialogBackdrop, DialogBackdropProps } from './DialogBackdrop';

function renderComponent(props?: Partial<DialogBackdropProps>) {
  return render(
    <DialogBackdrop isOpen={true} {...props}>
      Body
    </DialogBackdrop>,
  );
}

beforeEach(() => {
  document.body.style.overflow = '';
});

it('should render in basic form', () => {
  renderComponent();

  const backdrop = document.querySelector(
    '.iui-dialog-backdrop.iui-dialog-default.iui-dialog-visible',
  ) as HTMLElement;
  expect(backdrop).toBeTruthy();
});

it('should render in full page form', () => {
  renderComponent({ styleType: 'fullPage' });

  const backdrop = document.querySelector(
    '.iui-dialog-backdrop.iui-dialog-full-page.iui-dialog-visible',
  ) as HTMLElement;
  expect(backdrop).toBeTruthy();
});

it('should not render when closed', () => {
  renderComponent({ isOpen: false });

  const backdrop = document.querySelector('.iui-dialog-backdrop');
  expect(backdrop).toBeFalsy();
});

it('should call onClose on backdrop mouse down', () => {
  const onClose = jest.fn();
  renderComponent({ onClose });

  const backdrop = document.querySelector(
    '.iui-dialog-backdrop.iui-dialog-visible',
  ) as HTMLElement;
  expect(backdrop).toBeTruthy();

  fireEvent.mouseDown(backdrop);
  expect(onClose).toHaveBeenCalled();
});

it('should not call onClose on backdrop mouse down when closeOnExternalClick is false', () => {
  const onClose = jest.fn();
  renderComponent({ onClose, closeOnExternalClick: false });

  const backdrop = document.querySelector(
    '.iui-dialog-backdrop.iui-dialog-visible',
  ) as HTMLElement;
  expect(backdrop).toBeTruthy();

  fireEvent.mouseDown(backdrop);
  expect(onClose).not.toHaveBeenCalled();
});

it('should close on Esc click and move focus back', () => {
  const { container } = render(<button>button</button>);
  const button = container.querySelector('button') as HTMLElement;
  button.focus();
  expect(document.activeElement).toEqual(button);
  const onClose = jest.fn();
  const { rerender } = renderComponent({ onClose });

  let backdrop = document.querySelector(
    '.iui-dialog-backdrop.iui-dialog-visible',
  ) as HTMLElement;
  expect(backdrop).toBeTruthy();
  expect(document.activeElement).toEqual(backdrop);

  fireEvent.keyDown(backdrop, { key: 'Escape' });
  expect(onClose).toHaveBeenCalled();

  backdrop = document.querySelector(
    '.iui-dialog-backdrop.iui-dialog-visible',
  ) as HTMLElement;
  expect(backdrop).toBeTruthy();
  rerender(<DialogBackdrop isOpen={false}>Body</DialogBackdrop>);
  expect(document.activeElement).toEqual(button);
});

it('should not call onClose on Esc click when closeOnEsc is false', () => {
  const onClose = jest.fn();
  renderComponent({ onClose, closeOnEsc: false });

  const backdrop = document.querySelector(
    '.iui-dialog-backdrop.iui-dialog-visible',
  ) as HTMLElement;
  expect(backdrop).toBeTruthy();

  fireEvent.keyDown(backdrop, { key: 'Escape' });
  expect(onClose).not.toHaveBeenCalled();
});

it('should not call onClose when isDismissible is false', () => {
  const onClose = jest.fn();
  renderComponent({ onClose, isDismissible: false });

  const backdrop = document.querySelector(
    '.iui-dialog-backdrop.iui-dialog-visible',
  ) as HTMLElement;
  expect(backdrop).toBeTruthy();

  fireEvent.keyDown(backdrop, { key: 'Escape' });
  expect(onClose).not.toHaveBeenCalled();
  fireEvent.mouseDown(backdrop);
  expect(onClose).not.toHaveBeenCalled();
});

it('should call onKeyDown when pressed any key inside dialog', () => {
  const onKeyDown = jest.fn();
  renderComponent({ onKeyDown });

  const backdrop = document.querySelector(
    '.iui-dialog-backdrop.iui-dialog-visible',
  ) as HTMLElement;
  expect(backdrop).toBeTruthy();

  fireEvent.keyDown(backdrop, {
    key: 'Enter',
  });

  expect(onKeyDown).toHaveBeenCalledWith(
    expect.objectContaining({ key: 'Enter' }),
  );
});

it('should render backdrops in the same portal container', () => {
  renderComponent({ dialogRootId: 'test-id' });

  let container = document.querySelector('body > #test-id') as HTMLElement;
  expect(container).toBeTruthy();
  expect(container.children.length).toBe(1);

  renderComponent({ dialogRootId: 'test-id' });
  container = document.querySelector('body > #test-id') as HTMLElement;
  expect(container.children.length).toBe(2);
});

it('should reset body overflow on closing and unmounting', () => {
  const { rerender, unmount } = render(
    <DialogBackdrop isOpen>Test Content</DialogBackdrop>,
  );
  expect(document.body.style.overflow).toEqual('hidden');

  // Closing by setting isOpen to false
  rerender(<DialogBackdrop isOpen={false}>Test Content</DialogBackdrop>);
  expect(document.body.style.overflow).not.toEqual('hidden');

  rerender(<DialogBackdrop isOpen={true}>Test Content</DialogBackdrop>);
  expect(document.body.style.overflow).toEqual('hidden');

  // Closing by unmounting/destructing the DialogBackdrop
  unmount();
  expect(document.body.style.overflow).not.toEqual('hidden');
});
