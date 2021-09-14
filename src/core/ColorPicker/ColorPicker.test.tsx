/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ColorPicker } from './ColorPicker';
import Color from './Color';

it('should render in its most basic state', () => {
  const colorList = [
    <Color key={1} color='#9BA5AF' />,
    <Color key={2} color='#23450b' />,
    '#00121D',
    '#002A44',
  ];
  const { container } = render(<ColorPicker colors={colorList} />);

  expect(container.querySelector(`.iui-color-picker`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-palette`)).toBeTruthy();
  expect(container.querySelectorAll(`.iui-color-swatch`).length).toBe(4);
});

it('should render children colors', () => {
  const { container } = render(
    <ColorPicker>
      <Color key={1} color='#D4F4BD' />
      <Color key={2} color='#EEF6E8' />
      <Color key={3} color='#9BA5AF' />
      <Color key={4} color='#002A44' />
    </ColorPicker>,
  );

  expect(container.querySelector(`.iui-color-picker`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-palette`)).toBeTruthy();
  expect(container.querySelectorAll(`.iui-color-swatch`).length).toBe(4);
});

it('should render color picker with active color swatch', () => {
  const colorList = ['#00121D', '#002A44'];
  const { container } = render(
    <ColorPicker colors={colorList} activeColorIndex={0} />,
  );

  expect(
    container.querySelectorAll(`.iui-color-swatch.iui-active`).length,
  ).toBe(1);

  const colorSwatches = container.querySelectorAll('.iui-color-swatch');
  expect(colorSwatches[0].classList).toContain('iui-active');
});

it('should update active color on click', () => {
  const colorList = ['#00121D', '#002A44', '#00426B', '005A92'];
  const onColorClick = jest.fn();

  const { container } = render(
    <ColorPicker
      colors={colorList}
      activeColorIndex={0}
      onColorClicked={onColorClick}
    />,
  );

  const colorSwatches = container.querySelectorAll('.iui-color-swatch');
  expect(
    container.querySelectorAll(`.iui-color-swatch.iui-active`).length,
  ).toBe(1);

  expect(colorSwatches[0].classList).toContain('iui-active');
  expect(colorSwatches[2].classList).not.toContain('iui-active');

  fireEvent.click(colorSwatches[2]);

  expect(onColorClick).toHaveBeenCalledTimes(1);
  expect(
    container.querySelectorAll(`.iui-color-swatch.iui-active`).length,
  ).toBe(1);

  expect(colorSwatches[0].classList).not.toContain('iui-active');
  expect(colorSwatches[2].classList).toContain('iui-active');
});

it('should handle custom color swatch clicks', () => {
  const onColorClick = jest.fn();
  const onCustomColorClick = jest.fn();

  const colorList = [
    <Color key={1} color='#D4F4BD' onColorClicked={onCustomColorClick} />,
    <Color key={2} color='#EEF6E8' />,
    <Color key={3} color='#9BA5AF' />,
    <Color key={4} color='#002A44' />,
  ];

  const { container } = render(
    <ColorPicker colors={colorList} onColorClicked={onColorClick} />,
  );

  const colorSwatches = container.querySelectorAll('.iui-color-swatch');

  fireEvent.click(colorSwatches[0]);
  fireEvent.click(colorSwatches[1]);
  fireEvent.click(colorSwatches[2]);
  fireEvent.click(colorSwatches[3]);

  expect(onColorClick).toHaveBeenCalledTimes(3);
  expect(onCustomColorClick).toHaveBeenCalledTimes(1);
});
