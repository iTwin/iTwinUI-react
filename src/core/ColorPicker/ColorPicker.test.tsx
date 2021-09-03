/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';

import { ColorPicker } from './ColorPicker';

it('should render in its most basic state', () => {
  // TODO: Make sure all required props are passed in here

  const colorList = ['#00121D', '#002A44'];
  const { container } = render(<ColorPicker colors={colorList} />);
  expect(container.querySelector('div')).toBeTruthy();
});

// TODO: Write tests here!

it('should be improved', () => {
  expect(false).toBe(true);
});
