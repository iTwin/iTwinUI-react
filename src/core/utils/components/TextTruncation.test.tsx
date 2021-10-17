/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { render } from '@testing-library/react';
import React from 'react';
import TextTruncation from './TextTruncation';

it('should truncate the text', () => {
  const { container } = render(
    <div style={{ width: 20 }}>
      <TextTruncation text='This is some very long text to truncate and expect ellipsis.' />
    </div>,
  );

  const containerSpan = container.querySelector('span') as HTMLSpanElement;
  expect(containerSpan.textContent).toBe('uncate');
});
