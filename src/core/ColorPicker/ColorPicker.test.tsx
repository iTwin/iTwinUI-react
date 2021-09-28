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

it('should add className and style correctly', () => {
  const { container } = render(
    <ColorPicker className='test-class' style={{ width: '100px' }} />,
  );

  const swatch = container.querySelector(
    '.iui-color-picker.test-class',
  ) as HTMLElement;
  expect(swatch).toBeTruthy();
  expect(swatch.style.width).toBe('100px');
});

it('should initially focus on active color', () => {
  const { container } = render(
    <ColorPicker>
      <ColorSwatch key={1} color='#9BA5AF' />
      <ColorSwatch key={2} color='#23450b' isActive={true} />
      <ColorSwatch key={3} color='#00121D' />
      <ColorSwatch key={4} color='#002A44' />
    </ColorPicker>,
  );

  const colorSwatches = Array.from<HTMLElement>(
    container.querySelectorAll('.iui-color-swatch'),
  );
  const focusedIndex = colorSwatches.findIndex(
    (swatch) => swatch === document.activeElement,
  );
  const activeIndex = colorSwatches.findIndex(
    (swatch) =>
      swatch.tabIndex === 0 || swatch.getAttribute('aria-selected') == 'true',
  );

  expect(focusedIndex).toEqual(activeIndex);
});

it('should handle keyboard navigation', () => {
  const onColorClick = jest.fn();

  const colorsList = [
    <ColorSwatch key={1} color='#FFFFFF' onClick={onColorClick} />,
    <ColorSwatch key={2} color='#5A6973' onClick={onColorClick} />,
    <ColorSwatch
      key={3}
      color='#00121D'
      onClick={onColorClick}
      isActive={true}
    />,
    <ColorSwatch key={4} color='#002A44' onClick={onColorClick} />,
    <ColorSwatch key={5} color='#00426B' onClick={onColorClick} />,
    <ColorSwatch key={6} color='#005A92' onClick={onColorClick} />,
    <ColorSwatch key={7} color='#0073BA' onClick={onColorClick} />,
    <ColorSwatch key={8} color='#008BE1' onClick={onColorClick} />,
    <ColorSwatch key={9} color='#30B0FF' onClick={onColorClick} />,
    <ColorSwatch key={10} color='#58BFFF' onClick={onColorClick} />,
    <ColorSwatch key={11} color='#7FCEFF' onClick={onColorClick} />,
    <ColorSwatch key={12} color='#A6DDFF' onClick={onColorClick} />,
    <ColorSwatch key={13} color='#CDECFF' onClick={onColorClick} />,
    <ColorSwatch key={14} color='#E5F5FD' onClick={onColorClick} />,
    <ColorSwatch key={15} color='#010200' onClick={onColorClick} />,
  ];

  const { container } = render(<ColorPicker>{colorsList}</ColorPicker>);

  const colorSwatches = Array.from<HTMLElement>(
    container.querySelectorAll('.iui-color-swatch'),
  );
  expect(colorSwatches).toBeTruthy();
  expect(colorSwatches.length).toBe(colorsList.length);

  const colorPalette = container.querySelector(
    `.iui-color-palette`,
  ) as HTMLElement;
  expect(colorPalette).toBeTruthy();

  let focusedIndex = -1;
  let expectedIndex = -1;

  // Go Down
  focusedIndex = colorSwatches.findIndex(
    (swatch) => swatch === document.activeElement,
  );
  expectedIndex = colorSwatches.findIndex(
    (swatch, index) =>
      index > focusedIndex &&
      swatch.offsetLeft === colorSwatches[focusedIndex].offsetLeft,
  );

  fireEvent.keyDown(colorPalette, { key: 'ArrowDown' });

  colorSwatches.forEach((item, index) => {
    expect(document.activeElement === item).toBe(expectedIndex === index);
  });

  // Go Up
  focusedIndex = colorSwatches.findIndex(
    (swatch) => swatch === document.activeElement,
  );
  for (let i = focusedIndex - 1; i >= 0; i--) {
    if (colorSwatches[i].offsetLeft == colorSwatches[focusedIndex].offsetLeft) {
      expectedIndex = i;
      break;
    }
  }

  fireEvent.keyDown(colorPalette, { key: 'ArrowUp' });

  colorSwatches.forEach((item, index) => {
    expect(document.activeElement === item).toBe(expectedIndex === index);
  });

  // Go Left
  focusedIndex = colorSwatches.findIndex(
    (swatch) => swatch === document.activeElement,
  );
  expectedIndex = focusedIndex - 1;

  fireEvent.keyDown(colorPalette, { key: 'ArrowLeft' });

  colorSwatches.forEach((item, index) => {
    expect(document.activeElement === item).toBe(expectedIndex === index);
  });

  // Go Right
  focusedIndex = colorSwatches.findIndex(
    (swatch) => swatch === document.activeElement,
  );
  expectedIndex = focusedIndex + 1;

  fireEvent.keyDown(colorPalette, { key: 'ArrowRight' });

  colorSwatches.forEach((item, index) => {
    expect(document.activeElement === item).toBe(expectedIndex === index);
  });

  // Go right and select with enter
  fireEvent.keyDown(colorPalette, { key: 'ArrowRight' });
  fireEvent.keyDown(colorPalette, { key: 'Enter' });
  expect(onColorClick).toHaveBeenCalledTimes(1);

  // Go right and select with space
  fireEvent.keyDown(colorPalette, { key: 'ArrowRight' });
  fireEvent.keyDown(colorPalette, { key: ' ' });
  expect(onColorClick).toHaveBeenCalledTimes(2);
});

it('should render properly with no color swatches', () => {
  const onColorClick = jest.fn();

  const { container } = render(<ColorPicker />);

  const colorSwatches = Array.from<HTMLElement>(
    container.querySelectorAll('.iui-color-swatch'),
  );
  expect(colorSwatches).toBeTruthy();
  expect(colorSwatches.length).toEqual(0);

  const colorPalette = container.querySelector(
    `.iui-color-palette`,
  ) as HTMLElement;
  expect(colorPalette).toBeTruthy();

  // Arrow key navigation should do nothing if no color swatches are available
  fireEvent.keyDown(colorPalette, { key: 'ArrowRight' });
  fireEvent.keyDown(colorPalette, { key: 'Enter' });
  expect(onColorClick).toHaveBeenCalledTimes(0);
});
