/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';
import { DialogBackdrop } from './DialogBackdrop';

it('should render in its most basic state', () => {
  const { container } = render(<DialogBackdrop isVisible />);
  const backdrop = container.querySelector('.iui-backdrop');
  expect(backdrop).toBeTruthy();
});

it('should render with misc props', () => {
  const { container } = render(
    <DialogBackdrop
      isVisible
      style={{ color: 'red' }}
      className='test-class'
    />,
  );
  const backdrop = container.querySelector('.iui-backdrop.test-class');
  expect(backdrop).toBeTruthy();
  expect(backdrop).toHaveStyle('color: red');
});
