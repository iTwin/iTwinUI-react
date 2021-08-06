/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { render } from '@testing-library/react';
import React from 'react';
import { Text } from './Text';

it('should render in the most basic state', () => {
  const { container } = render(<Text>Some text</Text>);
  expect(container.querySelector('div.iui-text-block')?.textContent).toEqual(
    'Some text',
  );
});

// TODO: add more tests
