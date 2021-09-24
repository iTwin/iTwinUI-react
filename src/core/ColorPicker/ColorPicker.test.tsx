/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';
import { ColorPicker } from './ColorPicker';
import ColorSwatch from './ColorSwatch';

it('should render in its most basic state', () => {
  const { container } = render(
    <ColorPicker>
      <ColorSwatch key={1} color='#9BA5AF' />
      <ColorSwatch key={2} color='#23450b' />
      <ColorSwatch key={3} color='#00121D' />
      <ColorSwatch key={4} color='#002A44' />
    </ColorPicker>,
  );

  expect(container.querySelector(`.iui-color-picker`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-palette`)).toBeTruthy();
  expect(container.querySelectorAll(`.iui-color-swatch`).length).toBe(4);
});
