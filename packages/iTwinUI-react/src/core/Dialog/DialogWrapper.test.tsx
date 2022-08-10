/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';
import { DialogWrapper } from './DialogWrapper';

it('should render in its most basic state', () => {
  const { container } = render(<DialogWrapper>test content</DialogWrapper>);
  const wrapper = container.querySelector('.iui-dialog-wrapper') as HTMLElement;
  expect(wrapper).toBeTruthy();
  expect(wrapper).toHaveTextContent('test content');
});

it('should propagate miscellaneous props', () => {
  const { container } = render(
    <DialogWrapper
      className='test-class'
      id='test-id'
      style={{ fontSize: 'x-large' }}
    >
      test content
    </DialogWrapper>,
  );

  const wrapper = container.querySelector('.iui-dialog-wrapper') as HTMLElement;
  expect(wrapper).toBeTruthy();
  expect(wrapper).toHaveTextContent('test content');
  expect(wrapper).toHaveClass('test-class');
  expect(wrapper).toHaveStyle('fontSize: x-large');
  expect(wrapper.id).toEqual('test-id');
});
