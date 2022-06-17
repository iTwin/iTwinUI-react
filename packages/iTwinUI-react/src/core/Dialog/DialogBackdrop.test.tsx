/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { DialogBackdrop } from './DialogBackdrop';

it('should close on backdrop mouse down', async () => {
  const onClose = jest.fn();
  const { container } = render(
    <DialogBackdrop isVisible={true} onClose={onClose} />,
  );

  const backdrop = container.querySelector('.iui-backdrop') as HTMLElement;
  expect(backdrop).toBeTruthy();
  await userEvent.click(backdrop);
  expect(onClose).toHaveBeenCalled();
});

it('should not close on backdrop mouse down when closeOnExternalClick is false', async () => {
  const onClose = jest.fn();
  const { container } = render(
    <DialogBackdrop onClose={onClose} closeOnExternalClick={false} />,
  );

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
    <DialogBackdrop isVisible={true} onClose={onClose} />,
  );

  const backdrop = container.querySelector('.iui-backdrop') as HTMLElement;
  expect(backdrop).toBeTruthy();
  expect(document.activeElement).toEqual(backdrop);

  fireEvent.keyDown(backdrop, { key: 'Escape' });
  expect(onClose).toHaveBeenCalled();

  rerender(<DialogBackdrop isVisible={false} onClose={onClose} />);
  expect(document.activeElement).toEqual(button);
});

it('should not close on Esc click when closeOnEsc is false', () => {
  const onClose = jest.fn();
  const { container } = render(
    <DialogBackdrop isVisible={true} onClose={onClose} closeOnEsc={false} />,
  );

  const backdrop = container.querySelector('.iui-backdrop') as HTMLElement;
  expect(backdrop).toBeTruthy();
  fireEvent.keyDown(backdrop, { key: 'Escape' });
  expect(onClose).not.toHaveBeenCalled();
});

it('should not close when isDismissible is false', () => {
  const onClose = jest.fn();
  const { container } = render(
    <DialogBackdrop isVisible={true} onClose={onClose} isDismissible={false} />,
  );

  const backdrop = container.querySelector('.iui-backdrop') as HTMLElement;
  expect(backdrop).toBeTruthy();

  fireEvent.keyDown(backdrop, { key: 'Escape' });
  expect(onClose).not.toHaveBeenCalled();

  fireEvent.mouseDown(backdrop);
  expect(onClose).not.toHaveBeenCalled();
});

it('should call onKeyDown when pressed any key inside dialog', () => {
  const onKeyDown = jest.fn();
  const { container } = render(
    <DialogBackdrop isVisible={true} onKeyDown={onKeyDown} />,
  );

  const backdrop = container.querySelector('.iui-backdrop') as HTMLElement;
  expect(backdrop).toBeTruthy();
  fireEvent.keyDown(backdrop, {
    key: 'Enter',
  });

  expect(onKeyDown).toHaveBeenCalledWith(
    expect.objectContaining({ key: 'Enter' }),
  );
});

it('should reset body overflow on closing and unmounting', () => {
  const { rerender, unmount } = render(<DialogBackdrop isVisible />);
  expect(document.body.style.overflow).toEqual('hidden');

  // Closing by setting isVisible to false
  rerender(<DialogBackdrop isVisible={false} />);
  expect(document.body.style.overflow).not.toEqual('hidden');

  rerender(<DialogBackdrop isVisible={true} />);
  expect(document.body.style.overflow).toEqual('hidden');

  // Closing by unmounting/destructing the Modal
  unmount();
  expect(document.body.style.overflow).not.toEqual('hidden');
});
