/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';

import { Label } from './Label';

it('should render in its most basic state', () => {
  const { container } = render(<Label />);
  const label = container.querySelector('label') as HTMLLabelElement;
  expect(label).toHaveClass('iui-input-label');
});

// TODO: Write more tests here!
