/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';
import { Dialog } from './Dialog';

it('should render in its most basic state', () => {
  const { container } = render(<Dialog>test-content</Dialog>);

  const dialog = container.querySelector('.iui-dialog') as HTMLElement;
  expect(dialog).toBeTruthy();
  expect(dialog).toHaveTextContent('test-content');
  expect(dialog.getAttribute('role')).toEqual('dialog');
});

it('should render with custom style and className', () => {
  const { container } = render(
    <Dialog style={{ color: 'red' }} className='test-class'>
      test-content
    </Dialog>,
  );

  const dialog = container.querySelector('.iui-dialog') as HTMLElement;
  expect(dialog).toBeTruthy();
  expect(dialog.classList.contains('test-class')).toBeTruthy();
  expect(dialog).toHaveStyle('color: red');
});
