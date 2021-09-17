/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
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

it('should render color picker with active color swatch', () => {
  const { container } = render(
    <ColorPicker>
      <ColorSwatch key={1} color='#9BA5AF' isActive={true} />
      <ColorSwatch key={2} color='#23450b' />
    </ColorPicker>,
  );

  expect(
    container.querySelectorAll(`.iui-color-swatch.iui-active`).length,
  ).toBe(1);

  const colorSwatches = container.querySelectorAll('.iui-color-swatch');
  expect(colorSwatches[0].classList).toContain('iui-active');
});

it('should handle color swatch onClick', () => {
  const onColorClick = jest.fn();

  const { container } = render(
    <ColorPicker>
      <ColorSwatch key={1} color='#D4F4BD' onClick={onColorClick} />
      <ColorSwatch key={2} color='#EEF6E8' onClick={onColorClick} />
      <ColorSwatch key={3} color='#9BA5AF' onClick={onColorClick} />
      <ColorSwatch key={4} color='#002A44' onClick={onColorClick} />
    </ColorPicker>,
  );

  const colorSwatches = container.querySelectorAll('.iui-color-swatch');

  fireEvent.click(colorSwatches[0]);
  fireEvent.click(colorSwatches[1]);
  fireEvent.click(colorSwatches[2]);
  fireEvent.click(colorSwatches[3]);

  expect(onColorClick).toHaveBeenCalledTimes(4);
});
