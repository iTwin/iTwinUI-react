/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { render } from '@testing-library/react';
import React from 'react';
import TextTruncation from './TextTruncation';

it('should truncate the text', () => {
  const { container } = render(
    <TextTruncation text='This is some text to truncate' />,
  );

  const containerDiv = container.querySelector('div') as HTMLDivElement;
  expect(containerDiv.style.display).toBe('flex');
  expect(containerDiv.style.minWidth).toBe('0');
  const spans = containerDiv.querySelectorAll('span');
  expect(spans[0].style.textOverflow).toBe('ellipsis');
  expect(spans[0].style.whiteSpace).toBe('nowrap');
  expect(spans[0].style.overflow).toBe('hidden');
  expect(spans[0].textContent).toBe('This is some text to tr');
  expect(spans[1].style.flexShrink).toBe('0');
  expect(spans[1].textContent).toBe('uncate');
});
