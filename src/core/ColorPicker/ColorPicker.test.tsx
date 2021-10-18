/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ColorPicker } from './ColorPicker';
import { ColorValue } from '../utils/color/ColorValue';

it('should render in its most basic state', () => {
  const { container } = render(
    <ColorPicker
      paletteProps={{
        colors: [
          ColorValue.create('#9BA5AF'),
          ColorValue.create('#23450b'),
          ColorValue.create('#00121D'),
          ColorValue.create('#002A44'),
        ],
      }}
    />,
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
    <ColorPicker
      paletteProps={{
        colors: [
          ColorValue.create('#9BA5AF'),
          ColorValue.create('#23450b'),
          ColorValue.create('#00121D'),
          ColorValue.create('#002A44'),
        ],
      }}
      selectedColor={ColorValue.create('#23450b')}
    />,
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
    ColorValue.create('#FFFFFF'),
    ColorValue.create('#5A6973'),
    ColorValue.create('#002A44'),
    ColorValue.create('#00426B'),
    ColorValue.create('#005A92'),
    ColorValue.create('#0073BA'),
    ColorValue.create('#30B0FF'),
    ColorValue.create('#58BFFF'),
    ColorValue.create('#7FCEFF'),
    ColorValue.create('#A6DDFF'),
    ColorValue.create('#00121D'),
    ColorValue.create('#CDECFF'),
    ColorValue.create('#E5F5FD'),
    ColorValue.create('#010200'),
  ];

  const { container } = render(
    <ColorPicker
      paletteProps={{
        colors: colorsList,
      }}
      selectedColor={colorsList[10]}
      onChangeCompleted={onColorClick}
    />,
  );

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
  const { container } = render(
    <ColorPicker builderProps={{ defaultColorInputType: 'HEX' }} />,
  );

  expect(container.querySelector(`.iui-color-picker`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-selection-wrapper`)).toBeTruthy();
  expect(
    container.querySelector(`.iui-color-picker-section-label`),
  ).toBeFalsy();
  expect(container.querySelector(`.iui-color-palette`)).toBeFalsy();
  expect(container.querySelector(`.iui-color-field`)).toBeTruthy();
  expect(container.querySelector(`.iui-hue-slider`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-dot`)).toBeTruthy();
  expect(container.querySelectorAll(`.iui-color-swatch`).length).toBe(0);
});

it('should render advanced color picker with color swatches', () => {
  const { container } = render(
    <ColorPicker
      paletteProps={{ colors: [ColorValue.create('#FFFFFF')] }}
      builderProps={{ defaultColorInputType: 'HEX' }}
    />,
  );

  expect(container.querySelector(`.iui-color-picker`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-selection-wrapper`)).toBeTruthy();
  expect(
    container.querySelector(`.iui-color-picker-section-label`),
  ).toBeFalsy();
  expect(container.querySelector(`.iui-color-palette`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-field`)).toBeTruthy();
  expect(container.querySelector(`.iui-hue-slider`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-dot`)).toBeTruthy();

  expect(container.querySelectorAll(`.iui-color-swatch`).length).toBe(1);
});

it('should render color picker with color palette title', () => {
  const { container } = render(
    <ColorPicker
      paletteProps={{
        colors: [ColorValue.create('#FFFFFF')],
        colorPaletteTitle: 'Test Title',
      }}
    />,
  );

  expect(container.querySelector(`.iui-color-picker`)).toBeTruthy();
  expect(
    container.querySelector(`.iui-color-picker-section-label`),
  ).toBeTruthy();
  expect(container.querySelector(`.iui-color-palette`)).toBeTruthy();

  expect(container.querySelectorAll(`.iui-color-swatch`).length).toBe(1);
  expect(
    container.querySelector(`.iui-color-picker-section-label`)?.textContent,
  ).toEqual('Test Title');
});

// it('should set the selected color', () => {
//   window.CSS = { supports: () => true, escape: (i) => i };

//   const { container } = render(
//     <ColorPicker
//       selectedColor={ColorValue.fromHSL({ h: 42, s: 100, l: 50 })}
//     />,
//   );

//   //Set the correct square color
//   const square = container.querySelector('.iui-color-field') as HTMLElement;
//   expect(square).toBeTruthy();
//   expect(square.style.getPropertyValue('--color')).toEqual(
//     'hsl(42, 100%, 50%)',
//   );

//   //Set the correct dot color
//   const colorDot = container.querySelector('.iui-color-dot') as HTMLElement;
//   expect(colorDot).toBeTruthy();
//   expect(colorDot.style.getPropertyValue('--selected-color')).toEqual(
//     'hsl(42, 100%, 50%)',
//   );
// });

// it('should set the dot positions', () => {
//   window.CSS = { supports: () => true, escape: (i) => i };

//   const { container } = render(
//     <ColorPicker
//       selectedColor={ColorValue.fromHSL({ h: 42, s: 100, l: 50 })}
//     />,
//   );

//   //Set the correct position on color square
//   const colorDot = container.querySelector('.iui-color-dot') as HTMLElement;
//   expect(colorDot).toBeTruthy();
//   expect(colorDot.style.getPropertyValue('--left')).toEqual('100%');
//   expect(colorDot.style.getPropertyValue('--top')).toEqual('0%');

//   //Set the correct position on the slider
//   const sliderDot = container.querySelector(
//     '.iui-color-dot.iui-white',
//   ) as HTMLElement;
//   expect(sliderDot).toBeTruthy();
//   expect(sliderDot.style.getPropertyValue('--top')).toEqual('12%');
// });

// it('should handle arrow key navigation on slider dot', () => {
//   const onSelectionChanged = jest.fn();

//   const { container } = render(
//     <ColorPicker
//       onChangeCompleted={onSelectionChanged}
//       selectedColor={ColorValue.fromHSL({ h: 0, s: 100, l: 50 })}
//     />,
//   );

//   const square = container.querySelector('.iui-color-field') as HTMLElement;
//   expect(square).toBeTruthy();
//   expect(square.style.getPropertyValue('--color')).toEqual('hsl(0, 100%, 50%)');

//   const sliderDot = container.querySelector(
//     '.iui-color-dot.iui-white',
//   ) as HTMLElement;
//   expect(sliderDot).toBeTruthy();
//   expect(sliderDot.style.getPropertyValue('--top')).toEqual('0%');

//   // Go down and select with enter
//   fireEvent.keyDown(sliderDot, { key: 'ArrowDown' });
//   fireEvent.keyDown(sliderDot, { key: 'ArrowDown' });
//   fireEvent.keyDown(sliderDot, { key: 'Enter' });
//   expect(onSelectionChanged).toHaveBeenCalledTimes(1);
//   expect(sliderDot.style.getPropertyValue('--top')).toEqual('2%');
//   expect(square.style.getPropertyValue('--color')).toEqual('hsl(7, 100%, 50%)');

//   // Go up and select with space
//   fireEvent.keyDown(sliderDot, { key: 'ArrowUp' });
//   fireEvent.keyDown(sliderDot, { key: ' ' });
//   expect(onSelectionChanged).toHaveBeenCalledTimes(2);
//   expect(sliderDot.style.getPropertyValue('--top')).toEqual('1%');
//   expect(square.style.getPropertyValue('--color')).toEqual('hsl(4, 100%, 50%)');

//   // Go up to the top
//   fireEvent.keyDown(sliderDot, { key: 'ArrowUp' });
//   expect(sliderDot.style.getPropertyValue('--top')).toEqual('0%');
//   fireEvent.keyDown(sliderDot, { key: 'ArrowUp' });
//   expect(sliderDot.style.getPropertyValue('--top')).toEqual('0%');
// });

// it('should handle arrow key navigation on color dot', () => {
//   const onSelectionChanged = jest.fn();

//   const { container } = render(
//     <ColorPicker
//       onChangeCompleted={onSelectionChanged}
//       selectedColor={ColorValue.fromHSL({ h: 0, s: 100, l: 50 })}
//     />,
//   );

//   const square = container.querySelector('.iui-color-field') as HTMLElement;
//   expect(square).toBeTruthy();
//   expect(square.style.getPropertyValue('--color')).toEqual('hsl(0, 100%, 50%)');

//   const colorDot = container.querySelector('.iui-color-dot') as HTMLElement;
//   expect(colorDot).toBeTruthy();
//   expect(colorDot.style.getPropertyValue('--left')).toEqual('100%');
//   expect(colorDot.style.getPropertyValue('--top')).toEqual('0%');

//   // Go down and select with enter
//   fireEvent.keyDown(colorDot, { key: 'ArrowDown' });
//   fireEvent.keyDown(colorDot, { key: 'ArrowDown' });
//   fireEvent.keyDown(colorDot, { key: 'Enter' });
//   expect(onSelectionChanged).toHaveBeenCalledTimes(1);
//   expect(colorDot.style.getPropertyValue('--top')).toEqual('2%');
//   expect(colorDot.style.getPropertyValue('--left')).toEqual('100%');
//   expect(colorDot.style.getPropertyValue('--selected-color')).toEqual(
//     'hsl(0, 100%, 49%)',
//   );

//   // Go left and select with space
//   fireEvent.keyDown(colorDot, { key: 'ArrowLeft' });
//   fireEvent.keyDown(colorDot, { key: ' ' });
//   expect(onSelectionChanged).toHaveBeenCalledTimes(2);
//   expect(colorDot.style.getPropertyValue('--top')).toEqual('2%');
//   expect(colorDot.style.getPropertyValue('--left')).toEqual('99%');
//   expect(colorDot.style.getPropertyValue('--selected-color')).toEqual(
//     'hsl(0, 98%, 49%)',
//   );

//   // Go up to top
//   fireEvent.keyDown(colorDot, { key: 'ArrowUp' });
//   fireEvent.keyDown(colorDot, { key: 'ArrowUp' });
//   expect(colorDot.style.getPropertyValue('--top')).toEqual('0%');
//   expect(colorDot.style.getPropertyValue('--left')).toEqual('99%');
//   expect(colorDot.style.getPropertyValue('--selected-color')).toEqual(
//     'hsl(0, 100%, 51%)',
//   );
//   fireEvent.keyDown(colorDot, { key: 'ArrowUp' });
//   expect(colorDot.style.getPropertyValue('--top')).toEqual('0%');
//   expect(colorDot.style.getPropertyValue('--left')).toEqual('99%');
//   expect(colorDot.style.getPropertyValue('--selected-color')).toEqual(
//     'hsl(0, 100%, 51%)',
//   );

//   // Go right to the edge
//   fireEvent.keyDown(colorDot, { key: 'ArrowRight' });
//   expect(colorDot.style.getPropertyValue('--top')).toEqual('0%');
//   expect(colorDot.style.getPropertyValue('--left')).toEqual('100%');
//   expect(colorDot.style.getPropertyValue('--selected-color')).toEqual(
//     'hsl(0, 100%, 50%)',
//   );
//   fireEvent.keyDown(colorDot, { key: 'ArrowUp' });
//   expect(colorDot.style.getPropertyValue('--top')).toEqual('0%');
//   expect(colorDot.style.getPropertyValue('--left')).toEqual('100%');
//   expect(colorDot.style.getPropertyValue('--selected-color')).toEqual(
//     'hsl(0, 100%, 50%)',
//   );
// });

// it('should handle color conversion', () => {
//   // Any color to hsv
//   const hslColor = ColorValue.fromHSL({ h: 0, s: 100, l: 50 });
//   let color = fillColor(hslColor);
//   expect(color.hsv.displayString).toEqual('hsv(0, 100%, 100%)');

//   const hexColor = ColorValue.fromString('#ff0000');
//   color = fillColor(hexColor);
//   expect(color.hsv.displayString).toEqual('hsv(0, 100%, 100%)');

//   const rgbColor = ColorValue.fromRGB({ r: 255, g: 0, b: 0 });
//   color = fillColor(rgbColor);
//   expect(color.hsv.displayString).toEqual('hsv(0, 100%, 100%)');

//   //hsv to any color
//   const hsvColor = ColorValue.fromHSV({ h: 0, s: 100, v: 100 });
//   color = fillColor(hsvColor);

//   expect(color.hsl.displayString).toEqual('hsl(0, 100%, 50%)');
//   expect(color.hex.hex).toEqual('#ff0000');
//   expect(color.rgb.displayString).toEqual('rgb(255, 0, 0)');
// });
