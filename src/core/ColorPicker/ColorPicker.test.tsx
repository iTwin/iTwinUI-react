/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';
import { ColorPicker } from './ColorPicker';

it('should render in its most basic state', () => {
  const colorList = ['#00121D', '#002A44'];
  const { container } = render(<ColorPicker colors={colorList} />);

  expect(container.querySelector(`.iui-color-picker`)).toBeTruthy();

  expect(container.querySelectorAll(`.iui-color-swatch`).length).toBe(2);
});

it('should render color picker with active color swatch', () => {
  const colorList = ['#00121D', '#002A44'];
  const { container } = render(
    <ColorPicker colors={colorList} activeColorIndex={0} />,
  );

  expect(
    container.querySelectorAll(`.iui-color-swatch.iui-active`).length,
  ).toBe(1);
});
