/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';

import { StatusMessage } from './StatusMessage';

it('should render only message', () => {
  const { container } = render(<StatusMessage>This is my text</StatusMessage>);
  const message = container.querySelector('.iui-message') as HTMLElement;
  expect(message.textContent).toBe('This is my text');
  expect(container.querySelector('.iui-input-icon')).toBeFalsy();
});

it('should render message with status icon', () => {
  const { container } = render(
    <StatusMessage status='positive'>This is my text</StatusMessage>,
  );
  const message = container.querySelector('.iui-message') as HTMLElement;
  expect(message.textContent).toBe('This is my text');
  expect(container.querySelector('.iui-input-icon')).toBeTruthy();
});

it('should render message with custom icon', () => {
  const { container } = render(
    <StatusMessage startIcon={<svg className='my-icon' />}>
      This is my text
    </StatusMessage>,
  );
  const message = container.querySelector('.iui-message') as HTMLElement;
  expect(message.textContent).toBe('This is my text');
  expect(container.querySelector('.iui-input-icon.my-icon')).toBeTruthy();
});
