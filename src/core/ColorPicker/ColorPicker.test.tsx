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
  const { container } = render(<ColorPicker />);

  const colorSwatches = Array.from<HTMLElement>(
    container.querySelectorAll('.iui-color-swatch'),
  );
  expect(colorSwatches).toBeTruthy();
  expect(colorSwatches.length).toEqual(0);

  expect(container.querySelector(`.iui-color-palette`)).toBeFalsy();
});

it('should render advanced color picker with no color swatches', () => {
  const { container } = render(<ColorPicker type='advanced' />);

  expect(
    container.querySelector(`.iui-color-picker.iui-advanced`),
  ).toBeTruthy();
  expect(container.querySelector(`.iui-color-selection-wrapper`)).toBeTruthy();
  expect(container.querySelector(`.iui-saved-colors`)).toBeFalsy();
  expect(container.querySelector(`.iui-color-palette`)).toBeFalsy();
  expect(container.querySelector(`.iui-color-field`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-slider`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-dot`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-dot.iui-white`)).toBeTruthy();

  expect(container.querySelectorAll(`.iui-color-swatch`).length).toBe(0);
});

it('should render advanced color picker with color swatches', () => {
  const { container } = render(
    <ColorPicker type='advanced'>
      <ColorSwatch color='#FFFFFF' />,
    </ColorPicker>,
  );

  expect(
    container.querySelector(`.iui-color-picker.iui-advanced`),
  ).toBeTruthy();
  expect(container.querySelector(`.iui-color-selection-wrapper`)).toBeTruthy();
  expect(container.querySelector(`.iui-saved-colors`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-palette`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-field`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-slider`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-dot`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-dot.iui-white`)).toBeTruthy();

  expect(container.querySelectorAll(`.iui-color-swatch`).length).toBe(1);
  expect(container.querySelector(`.iui-saved-colors`)?.textContent).toEqual('');
});

it('should render advanced color picker with color palette title', () => {
  const { container } = render(
    <ColorPicker type='advanced' colorPaletteTitle='Test Title'>
      <ColorSwatch color='#FFFFFF' />,
    </ColorPicker>,
  );

  expect(
    container.querySelector(`.iui-color-picker.iui-advanced`),
  ).toBeTruthy();
  expect(container.querySelector(`.iui-color-selection-wrapper`)).toBeTruthy();
  expect(container.querySelector(`.iui-saved-colors`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-palette`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-field`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-slider`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-dot`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-dot.iui-white`)).toBeTruthy();

  expect(container.querySelectorAll(`.iui-color-swatch`).length).toBe(1);
  expect(container.querySelector(`.iui-saved-colors`)?.textContent).toEqual(
    'Test Title',
  );
});

it('should set the selected color', () => {
  window.CSS = { supports: () => true, escape: (i) => i };

  const { container } = render(
    <ColorPicker
      type='advanced'
      selectedColor={{
        hsl: { h: 42, s: 100, l: 50 },
      }}
    />,
  );

  //Set the correct square color
  const square = container.querySelector('.iui-color-field') as HTMLElement;
  expect(square).toBeTruthy();
  expect(square.style.getPropertyValue('--color')).toEqual(
    'hsl(42, 100%, 50%)',
  );

  //Set the correct dot color
  const colorDot = container.querySelector('.iui-color-dot') as HTMLElement;
  expect(colorDot).toBeTruthy();
  expect(colorDot.style.getPropertyValue('--selected-color')).toEqual(
    'hsl(42, 100%, 50%)',
  );
});

it('should set the dot positions', () => {
  window.CSS = { supports: () => true, escape: (i) => i };

  const { container } = render(
    <ColorPicker
      type='advanced'
      selectedColor={{
        hsl: { h: 42, s: 100, l: 50 },
      }}
    />,
  );

  //Set the correct position on color square
  const colorDot = container.querySelector('.iui-color-dot') as HTMLElement;
  expect(colorDot).toBeTruthy();
  expect(colorDot.style.getPropertyValue('--left')).toEqual('100%');
  expect(colorDot.style.getPropertyValue('--top')).toEqual('0%');

  //Set the correct position on the slider
  const sliderDot = container.querySelector(
    '.iui-color-dot.iui-white',
  ) as HTMLElement;
  expect(sliderDot).toBeTruthy();
  expect(sliderDot.style.getPropertyValue('--top')).toEqual(
    '11.999999999999998%',
  );
});

it('should handle arrow key navigation on slider dot', () => {
  const onSelectionChanged = jest.fn();

  const { container } = render(
    <ColorPicker
      type='advanced'
      onSelectionChanged={onSelectionChanged}
      selectedColor={{ hsl: { h: 0, s: 100, l: 50 } }}
    />,
  );

  const square = container.querySelector('.iui-color-field') as HTMLElement;
  expect(square).toBeTruthy();
  expect(square.style.getPropertyValue('--color')).toEqual('hsl(0, 100%, 50%)');

  const sliderDot = container.querySelector(
    '.iui-color-dot.iui-white',
  ) as HTMLElement;
  expect(sliderDot).toBeTruthy();
  expect(sliderDot.style.getPropertyValue('--top')).toEqual('0%');

  // Go down and select with enter
  fireEvent.keyDown(sliderDot, { key: 'ArrowDown' });
  fireEvent.keyDown(sliderDot, { key: 'ArrowDown' });
  fireEvent.keyDown(sliderDot, { key: 'Enter' });
  expect(onSelectionChanged).toHaveBeenCalledTimes(1);
  expect(sliderDot.style.getPropertyValue('--top')).toEqual('2%');
  expect(square.style.getPropertyValue('--color')).toEqual('hsl(7, 100%, 50%)');

  // Go up and select with space
  fireEvent.keyDown(sliderDot, { key: 'ArrowUp' });
  fireEvent.keyDown(sliderDot, { key: ' ' });
  expect(onSelectionChanged).toHaveBeenCalledTimes(2);
  expect(sliderDot.style.getPropertyValue('--top')).toEqual('1%');
  expect(square.style.getPropertyValue('--color')).toEqual('hsl(4, 100%, 50%)');

  // Go up to the top
  fireEvent.keyDown(sliderDot, { key: 'ArrowUp' });
  expect(sliderDot.style.getPropertyValue('--top')).toEqual('0%');
  fireEvent.keyDown(sliderDot, { key: 'ArrowUp' });
  expect(sliderDot.style.getPropertyValue('--top')).toEqual('0%');
});

it('should handle arrow key navigation on color dot', () => {
  const onSelectionChanged = jest.fn();

  const { container } = render(
    <ColorPicker
      type='advanced'
      onSelectionChanged={onSelectionChanged}
      selectedColor={{ hsl: { h: 0, s: 100, l: 50 } }}
    />,
  );

  const square = container.querySelector('.iui-color-field') as HTMLElement;
  expect(square).toBeTruthy();
  expect(square.style.getPropertyValue('--color')).toEqual('hsl(0, 100%, 50%)');

  const colorDot = container.querySelector('.iui-color-dot') as HTMLElement;
  expect(colorDot).toBeTruthy();
  expect(colorDot.style.getPropertyValue('--left')).toEqual('100%');
  expect(colorDot.style.getPropertyValue('--top')).toEqual('0%');

  // Go down and select with enter
  fireEvent.keyDown(colorDot, { key: 'ArrowDown' });
  fireEvent.keyDown(colorDot, { key: 'ArrowDown' });
  fireEvent.keyDown(colorDot, { key: 'Enter' });
  expect(onSelectionChanged).toHaveBeenCalledTimes(1);
  expect(colorDot.style.getPropertyValue('--top')).toEqual('2%');
  expect(colorDot.style.getPropertyValue('--left')).toEqual('100%');
  expect(colorDot.style.getPropertyValue('--selected-color')).toEqual(
    'hsl(0, 100%, 49%)',
  );

  // Go left and select with space
  fireEvent.keyDown(colorDot, { key: 'ArrowLeft' });
  fireEvent.keyDown(colorDot, { key: ' ' });
  expect(onSelectionChanged).toHaveBeenCalledTimes(2);
  expect(colorDot.style.getPropertyValue('--top')).toEqual('2%');
  expect(colorDot.style.getPropertyValue('--left')).toEqual('99%');
  expect(colorDot.style.getPropertyValue('--selected-color')).toEqual(
    'hsl(0, 98%, 49%)',
  );

  // Go up to top
  fireEvent.keyDown(colorDot, { key: 'ArrowUp' });
  fireEvent.keyDown(colorDot, { key: 'ArrowUp' });
  expect(colorDot.style.getPropertyValue('--top')).toEqual('0%');
  expect(colorDot.style.getPropertyValue('--left')).toEqual('99%');
  expect(colorDot.style.getPropertyValue('--selected-color')).toEqual(
    'hsl(0, 100%, 51%)',
  );
  fireEvent.keyDown(colorDot, { key: 'ArrowUp' });
  expect(colorDot.style.getPropertyValue('--top')).toEqual('0%');
  expect(colorDot.style.getPropertyValue('--left')).toEqual('99%');
  expect(colorDot.style.getPropertyValue('--selected-color')).toEqual(
    'hsl(0, 100%, 51%)',
  );

  // Go right to the edge
  fireEvent.keyDown(colorDot, { key: 'ArrowRight' });
  expect(colorDot.style.getPropertyValue('--top')).toEqual('0%');
  expect(colorDot.style.getPropertyValue('--left')).toEqual('100%');
  expect(colorDot.style.getPropertyValue('--selected-color')).toEqual(
    'hsl(0, 100%, 50%)',
  );
  fireEvent.keyDown(colorDot, { key: 'ArrowUp' });
  expect(colorDot.style.getPropertyValue('--top')).toEqual('0%');
  expect(colorDot.style.getPropertyValue('--left')).toEqual('100%');
  expect(colorDot.style.getPropertyValue('--selected-color')).toEqual(
    'hsl(0, 100%, 50%)',
  );
});
