/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';
import { DialogMain } from './DialogMain';

it('should render in its most basic state', () => {
  const { container } = render(<DialogMain isOpen>test-content</DialogMain>);

  const dialog = container.querySelector(
    '.iui-dialog.iui-dialog-visible',
  ) as HTMLElement;
  expect(dialog).toBeTruthy();
  expect(dialog).toHaveTextContent('test-content');
  expect(dialog.getAttribute('role')).toEqual('dialog');
});

it('should render full page dialog', () => {
  const { container } = render(
    <DialogMain isOpen styleType='fullPage'>
      test-content
    </DialogMain>,
  );

  const dialog = container.querySelector(
    '.iui-dialog.iui-dialog-full-page.iui-dialog-visible',
  ) as HTMLElement;
  expect(dialog).toBeTruthy();
  expect(dialog).toHaveTextContent('test-content');
  expect(dialog.getAttribute('role')).toEqual('dialog');
});

it('should render with custom style and className', () => {
  const { container } = render(
    <DialogMain isOpen style={{ color: 'red' }} className='test-class'>
      test-content
    </DialogMain>,
  );

  const dialog = container.querySelector(
    '.iui-dialog.iui-dialog-visible',
  ) as HTMLElement;
  expect(dialog).toBeTruthy();
  expect(dialog.classList.contains('test-class')).toBeTruthy();
  expect(dialog).toHaveStyle('color: red');
});
