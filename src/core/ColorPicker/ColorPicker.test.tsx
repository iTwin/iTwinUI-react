/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { getColorValue, ColorPicker } from './ColorPicker';
import { ColorValue } from '../utils/color/ColorValue';

it('should convert color list to ColorValues', () => {
  ['#9BA5AF', '#23450b', '#00121D', '#002A44'].forEach((value) => {
    const color = getColorValue(value);
    expect(color.toHexString()).toEqual(value.toLowerCase());
  });
});

it('should render in its most basic state', () => {
  const { container } = render(
    <ColorPicker
      onChangeCompleted={() => {}}
      paletteProps={{
        colors: ['#9BA5AF', '#23450b', '#00121D', '#002A44'],
      }}
    />,
  );

  expect(container.querySelector(`.iui-color-picker`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-palette`)).toBeTruthy();
  expect(container.querySelectorAll(`.iui-color-swatch`).length).toBe(4);
});

it('should add className and style correctly', () => {
  const { container } = render(
    <ColorPicker
      className='test-class'
      style={{ width: '100px' }}
      onChangeCompleted={() => {}}
    />,
  );

  const swatch = container.querySelector(
    '.iui-color-picker.test-class',
  ) as HTMLElement;
  expect(swatch).toBeTruthy();
  expect(swatch.style.width).toBe('100px');
});

it('should set tabIndex on active color swatch', () => {
  const { container } = render(
    <ColorPicker
      onChangeCompleted={() => {}}
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

  expect((colorSwatches[0] as HTMLDivElement).tabIndex).toBe(-1);
  expect((colorSwatches[1] as HTMLDivElement).tabIndex).toBe(0);
  expect((colorSwatches[2] as HTMLDivElement).tabIndex).toBe(-1);
  expect((colorSwatches[3] as HTMLDivElement).tabIndex).toBe(-1);
});

it('should handle keyboard navigation on color swatches', () => {
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

  colorSwatches[10].focus();

  // Go Down
  fireEvent.keyDown(colorPalette, { key: 'ArrowDown' });

  colorSwatches.forEach((item, index) => {
    expect(document.activeElement === item).toBe(11 === index);
  });

  // Go Up
  fireEvent.keyDown(colorPalette, { key: 'ArrowUp' });

  colorSwatches.forEach((item, index) => {
    expect(document.activeElement === item).toBe(10 === index);
  });

  // Go Left
  fireEvent.keyDown(colorPalette, { key: 'ArrowLeft' });

  colorSwatches.forEach((item, index) => {
    expect(document.activeElement === item).toBe(9 === index);
  });

  // Go Right
  fireEvent.keyDown(colorPalette, { key: 'ArrowRight' });

  colorSwatches.forEach((item, index) => {
    expect(document.activeElement === item).toBe(10 === index);
  });

  // Go right and select with enter
  fireEvent.keyDown(colorPalette, { key: 'ArrowRight' });
  fireEvent.keyDown(colorPalette, { key: 'Enter' });
  expect(onColorClick).toHaveBeenCalledTimes(1);
  expect(colorSwatches[11]).toHaveFocus();

  // Go right and select with space
  fireEvent.keyDown(colorPalette, { key: 'ArrowRight' });
  fireEvent.keyDown(colorPalette, { key: ' ' });
  expect(onColorClick).toHaveBeenCalledTimes(2);
  expect(colorSwatches[12]).toHaveFocus();
});

it('should render properly with no color swatches', () => {
  const { container } = render(<ColorPicker onChangeCompleted={() => {}} />);

  const colorSwatches = Array.from<HTMLElement>(
    container.querySelectorAll('.iui-color-swatch'),
  );
  expect(colorSwatches).toBeTruthy();
  expect(colorSwatches.length).toEqual(0);

  expect(container.querySelector(`.iui-color-palette`)).toBeFalsy();
});

it('should render advanced color picker with no color swatches', () => {
  const { container } = render(
    <ColorPicker
      builderProps={{
        defaultColorFormat: 'hex',
      }}
      onChangeCompleted={() => {}}
    />,
  );

  expect(container.querySelector(`.iui-color-picker`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-selection-wrapper`)).toBeTruthy();
  expect(
    container.querySelectorAll(`.iui-color-picker-section-label`).length,
  ).toBe(1);
  const element = container.querySelectorAll(
    `.iui-color-picker-section-label`,
  )[0];
  expect(element).toBeDefined();
  expect(element?.textContent).toBe('HEX');
  expect(container.querySelector(`.iui-color-palette`)).toBeFalsy();
  expect(container.querySelector(`.iui-color-field`)).toBeTruthy();
  expect(container.querySelector(`.iui-hue-slider`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-dot`)).toBeTruthy();
  expect(container.querySelectorAll(`.iui-color-swatch`).length).toBe(0);
});

it('should render advanced color picker with color swatches and no title', () => {
  const { container } = render(
    <ColorPicker
      onChangeCompleted={() => {}}
      paletteProps={{ colors: [ColorValue.create('#FFFFFF')] }}
      builderProps={{
        defaultColorFormat: 'hex',
      }}
    />,
  );

  expect(container.querySelector(`.iui-color-picker`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-selection-wrapper`)).toBeTruthy();
  expect(
    container.querySelectorAll(`.iui-color-picker-section-label`).length,
  ).toBe(1);
  expect(
    container.querySelectorAll(`.iui-color-picker-section-label`)[0]
      .textContent,
  ).toBe('HEX');
  expect(container.querySelector(`.iui-color-palette`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-field`)).toBeTruthy();
  expect(container.querySelector(`.iui-hue-slider`)).toBeTruthy();
  expect(container.querySelector(`.iui-color-dot`)).toBeTruthy();

  expect(container.querySelectorAll(`.iui-color-swatch`).length).toBe(1);
});

it('should render color picker with color palette title', () => {
  const { container } = render(
    <ColorPicker
      onChangeCompleted={() => {}}
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

it('should set the selected color', () => {
  window.CSS = { supports: () => true, escape: (i) => i };

  const { container } = render(
    <ColorPicker
      onChangeCompleted={() => {}}
      selectedColor={{ h: 42, s: 100, l: 50 }}
      builderProps={{
        defaultColorFormat: 'hex',
      }}
    />,
  );

  //Set the correct square color
  const colorPicker = container.querySelector(
    '.iui-color-picker',
  ) as HTMLElement;
  expect(colorPicker.style.getPropertyValue('--selected-color')).toBe(
    '#ffb300',
  );
  expect(colorPicker.style.getPropertyValue('--hue')).toBe('#ffb300');
});

it('should set the dot positions', () => {
  window.CSS = { supports: () => true, escape: (i) => i };

  const { container } = render(
    <ColorPicker
      onChangeCompleted={() => {}}
      selectedColor={{ h: 42, s: 100, l: 50 }}
      builderProps={{}}
    />,
  );

  //Set the correct position on color square
  const colorDot = container.querySelector('.iui-color-dot') as HTMLElement;
  expect(colorDot).toBeTruthy();
  expect(colorDot.style.getPropertyValue('--left')).toEqual('100%');
  expect(colorDot.style.getPropertyValue('--top')).toEqual('0%');

  // Set the correct position on the slider
  const sliderDot = container.querySelector('.iui-slider-thumb') as HTMLElement;
  expect(sliderDot).toBeTruthy();
  expect(sliderDot.style.getPropertyValue('left')).toEqual(
    '11.699164345403899%',
  );
});

it('should handle arrow key navigation on slider dot', () => {
  window.CSS = { supports: () => true, escape: (i) => i };

  const onSelectionChanged = jest.fn();

  const { container } = render(
    <ColorPicker
      onChangeCompleted={onSelectionChanged}
      selectedColor={{ h: 0, s: 100, l: 50 }}
      builderProps={{}}
    />,
  );

  const colorPicker = container.querySelector(
    '.iui-color-picker',
  ) as HTMLElement;
  expect(colorPicker.style.getPropertyValue('--selected-color')).toBe(
    '#ff0000',
  );
  expect(colorPicker.style.getPropertyValue('--hue')).toBe('#ff0000');

  const sliderDot = container.querySelector('.iui-slider-thumb') as HTMLElement;
  expect(sliderDot).toBeTruthy();
  expect(sliderDot.style.getPropertyValue('left')).toEqual('0%');

  // Go right
  fireEvent.keyDown(sliderDot, { key: 'ArrowRight' });
  fireEvent.keyDown(sliderDot, { key: 'ArrowRight' });
  expect(onSelectionChanged).toHaveBeenCalledTimes(2);
  expect(sliderDot.style.getPropertyValue('left')).toEqual(
    '0.5571030640668524%',
  );
  expect(colorPicker.style.getPropertyValue('--hue')).toEqual('#ff0800');

  // Go left
  fireEvent.keyDown(sliderDot, { key: 'ArrowLeft' });
  expect(onSelectionChanged).toHaveBeenCalledTimes(3);
  expect(sliderDot.style.getPropertyValue('left')).toEqual(
    '0.2785515320334262%',
  );
  expect(colorPicker.style.getPropertyValue('--hue')).toEqual('#ff0400');

  // Go left to edge
  fireEvent.keyDown(sliderDot, { key: 'ArrowLeft' });
  expect(sliderDot.style.getPropertyValue('left')).toEqual('0%');
  fireEvent.keyDown(sliderDot, { key: 'ArrowLeft' });
  expect(sliderDot.style.getPropertyValue('left')).toEqual('0%');
});

it('should handle arrow key navigation on color dot', () => {
  window.CSS = { supports: () => true, escape: (i) => i };

  const onSelectionChanged = jest.fn();

  const { container } = render(
    <ColorPicker
      onChangeCompleted={onSelectionChanged}
      selectedColor={{ h: 0, s: 100, l: 50 }}
      builderProps={{}}
    />,
  );

  const colorPicker = container.querySelector(
    '.iui-color-picker',
  ) as HTMLElement;
  expect(colorPicker.style.getPropertyValue('--selected-color')).toBe(
    '#ff0000',
  );
  expect(colorPicker.style.getPropertyValue('--hue')).toBe('#ff0000');

  const sliderDot = container.querySelector('.iui-slider-thumb') as HTMLElement;
  expect(sliderDot).toBeTruthy();
  expect(sliderDot.style.getPropertyValue('left')).toEqual('0%');

  const colorDot = container.querySelector('.iui-color-dot') as HTMLElement;
  expect(colorDot).toBeTruthy();
  expect(colorDot.style.getPropertyValue('--left')).toEqual('100%');
  expect(colorDot.style.getPropertyValue('--top')).toEqual('0%');

  // Go down
  fireEvent.keyDown(colorDot, { key: 'ArrowDown' });
  fireEvent.keyDown(colorDot, { key: 'ArrowDown' });
  expect(onSelectionChanged).toHaveBeenCalledTimes(2);
  expect(colorDot.style.getPropertyValue('--top')).toEqual('2%');
  expect(colorDot.style.getPropertyValue('--left')).toEqual('100%');
  expect(colorPicker.style.getPropertyValue('--selected-color')).toEqual(
    '#fa0000',
  );

  // Go left
  fireEvent.keyDown(colorDot, { key: 'ArrowLeft' });
  expect(onSelectionChanged).toHaveBeenCalledTimes(3);
  expect(colorDot.style.getPropertyValue('--top')).toEqual('2%');
  expect(colorDot.style.getPropertyValue('--left')).toEqual('99%');
  expect(colorPicker.style.getPropertyValue('--selected-color')).toEqual(
    '#fa0202',
  );

  // Go up to top
  fireEvent.keyDown(colorDot, { key: 'ArrowUp' });
  fireEvent.keyDown(colorDot, { key: 'ArrowUp' });
  expect(colorDot.style.getPropertyValue('--top')).toEqual('0%');
  expect(colorDot.style.getPropertyValue('--left')).toEqual('99%');
  expect(colorPicker.style.getPropertyValue('--selected-color')).toEqual(
    '#ff0303',
  );

  fireEvent.keyDown(colorDot, { key: 'ArrowUp' });
  expect(colorDot.style.getPropertyValue('--top')).toEqual('0%');
  expect(colorDot.style.getPropertyValue('--left')).toEqual('99%');
  expect(colorPicker.style.getPropertyValue('--selected-color')).toEqual(
    '#ff0303',
  );

  // Go right to the edge
  fireEvent.keyDown(colorDot, { key: 'ArrowRight' });
  expect(colorDot.style.getPropertyValue('--top')).toEqual('0%');
  expect(colorDot.style.getPropertyValue('--left')).toEqual('100%');
  expect(colorPicker.style.getPropertyValue('--selected-color')).toEqual(
    '#ff0000',
  );

  fireEvent.keyDown(colorDot, { key: 'ArrowUp' });
  expect(colorDot.style.getPropertyValue('--top')).toEqual('0%');
  expect(colorDot.style.getPropertyValue('--left')).toEqual('100%');
  expect(colorPicker.style.getPropertyValue('--selected-color')).toEqual(
    '#ff0000',
  );
});

it('should call onChange and onChangeCompleted from hueSlider', () => {
  const handleOnUpdate = jest.fn();
  const handleOnChange = jest.fn();

  const { container } = render(
    <ColorPicker
      onChangeCompleted={handleOnChange}
      onChange={handleOnUpdate}
      selectedColor={{ h: 0, s: 100, l: 50 }}
      builderProps={{}}
    />,
  );

  const sliderContainer = container.querySelector(
    '.iui-slider-container',
  ) as HTMLDivElement;
  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;

  fireEvent.pointerDown(thumb, {
    pointerId: 5,
    buttons: 1,
    clientX: 210,
  });

  fireEvent.pointerMove(sliderContainer, {
    pointerId: 5,
    buttons: 1,
    clientX: 410,
  });
  expect(handleOnUpdate).toHaveBeenCalledTimes(1);

  fireEvent.pointerUp(sliderContainer, {
    pointerId: 5,
    buttons: 1,
    clientX: 410,
  });

  expect(handleOnChange).toHaveBeenCalledTimes(2);
});

it('should handle pointer down/move/up from color square', () => {
  const handleOnUpdate = jest.fn();
  const handleOnChange = jest.fn();

  const { container } = render(
    <ColorPicker
      onChangeCompleted={handleOnChange}
      onChange={handleOnUpdate}
      selectedColor={{ h: 0, s: 100, l: 50 }}
      paletteProps={{ colors: [{ h: 0, s: 100, l: 50 }] }}
      builderProps={{}}
    />,
  );

  const colorPicker = container.querySelector(
    '.iui-color-picker',
  ) as HTMLElement;
  expect(colorPicker).toBeTruthy();

  const colorDot = container.querySelector('.iui-color-dot') as HTMLElement;
  expect(colorDot).toBeTruthy();

  fireEvent.pointerDown(colorDot, {
    pointerId: 5,
    buttons: 1,
    clientX: 210,
  });
  expect(handleOnUpdate).toHaveBeenCalledTimes(1);
  expect(handleOnChange).toHaveBeenCalledTimes(0);
  expect(document.activeElement).toBe(colorDot);

  fireEvent.pointerMove(colorPicker.ownerDocument, {
    pointerId: 5,
    buttons: 1,
    clientX: 410,
  });
  expect(handleOnUpdate).toHaveBeenCalledTimes(2);
  expect(handleOnChange).toHaveBeenCalledTimes(0);

  fireEvent.pointerUp(colorPicker.ownerDocument, {
    pointerId: 5,
    buttons: 1,
    clientX: 410,
  });
  expect(handleOnUpdate).toHaveBeenCalledTimes(2);
  expect(handleOnChange).toHaveBeenCalledTimes(1);
});

it('should render advanced color picker with input fields', () => {
  const { container } = render(
    <ColorPicker
      builderProps={{
        defaultColorFormat: 'hex',
      }}
      onChangeCompleted={() => {}}
    />,
  );

  expect(
    container.querySelectorAll(`.iui-color-picker-section-label`).length,
  ).toBe(1);
  const element = container.querySelectorAll(
    `.iui-color-picker-section-label`,
  )[0];
  expect(element).toBeDefined();
  expect(element?.textContent).toBe('HEX');

  expect(container.querySelector('.iui-color-input')).toBeTruthy();
  expect(container.querySelector('.iui-color-input-fields')).toBeTruthy();
  expect(container.querySelectorAll('.iui-input-container').length).toBe(1);

  const swapButton = container.querySelector(
    '.iui-button.iui-borderless',
  ) as HTMLButtonElement;
  expect(swapButton).toBeTruthy();

  swapButton.click();
  expect(element.textContent).toBe('HSL');
  expect(container.querySelectorAll('.iui-input-container').length).toBe(3);

  swapButton.click();
  expect(element.textContent).toBe('RGB');
  expect(container.querySelectorAll('.iui-input-container').length).toBe(3);

  swapButton.click();
  expect(element.textContent).toBe('HEX');
  expect(container.querySelectorAll('.iui-input-container').length).toBe(1);
});

it('should only show allowed color formats on input panel', () => {
  const { container } = render(
    <ColorPicker
      builderProps={{
        defaultColorFormat: 'hex',
        allowedColorFormats: ['hex', 'hsl'],
      }}
      onChangeCompleted={() => {}}
    />,
  );

  expect(
    container.querySelectorAll(`.iui-color-picker-section-label`).length,
  ).toBe(1);
  const element = container.querySelectorAll(
    `.iui-color-picker-section-label`,
  )[0];
  expect(element).toBeDefined();
  expect(element?.textContent).toBe('HEX');

  const swapButton = container.querySelector(
    '.iui-button.iui-borderless',
  ) as HTMLButtonElement;
  expect(swapButton).toBeTruthy();

  swapButton.click();
  expect(element.textContent).toBe('HSL');

  swapButton.click();
  expect(element.textContent).toBe('HEX');
});

it('should not show swap button if only 1 color format allowed on input panel', () => {
  const { container } = render(
    <ColorPicker
      builderProps={{
        defaultColorFormat: 'hex',
        allowedColorFormats: ['hex'],
      }}
      onChangeCompleted={() => {}}
    />,
  );

  expect(
    container.querySelectorAll(`.iui-color-picker-section-label`).length,
  ).toBe(1);
  const element = container.querySelectorAll(
    `.iui-color-picker-section-label`,
  )[0];
  expect(element).toBeDefined();
  expect(element?.textContent).toBe('HEX');

  const swapButton = container.querySelector(
    '.iui-button.iui-borderless',
  ) as HTMLButtonElement;
  expect(swapButton).toBeFalsy();
});

it('should handle onColorFormatChanged', () => {
  const inputChange = jest.fn();

  const { container } = render(
    <ColorPicker
      builderProps={{
        defaultColorFormat: 'hex',
        onColorFormatChanged: inputChange,
      }}
      onChangeCompleted={() => {}}
    />,
  );

  expect(
    container.querySelectorAll(`.iui-color-picker-section-label`).length,
  ).toBe(1);
  const element = container.querySelectorAll(
    `.iui-color-picker-section-label`,
  )[0];
  expect(element).toBeDefined();
  expect(element?.textContent).toBe('HEX');

  expect(container.querySelector('.iui-color-input')).toBeTruthy();
  expect(container.querySelector('.iui-color-input-fields')).toBeTruthy();
  expect(container.querySelectorAll('.iui-input-container').length).toBe(1);

  const swapButton = container.querySelector(
    '.iui-button.iui-borderless',
  ) as HTMLButtonElement;
  expect(swapButton).toBeTruthy();

  swapButton.click();
  expect(inputChange).toHaveBeenCalledTimes(1);
});

it('should handle hex input change', () => {
  const handleOnChange = jest.fn();

  const { container } = render(
    <ColorPicker
      builderProps={{
        defaultColorFormat: 'hex',
      }}
      onChangeCompleted={handleOnChange}
    />,
  );

  const input = container.querySelectorAll('input')[0] as HTMLInputElement;
  expect(input).toBeTruthy();
  fireEvent.change(input, { target: { value: '#FF6200' } });
  fireEvent.keyDown(input, { key: 'Enter' });
  expect(handleOnChange).toHaveBeenCalledTimes(1);

  // Should not update with invalid input
  fireEvent.change(input, { target: { value: '#A' } });
  fireEvent.keyDown(input, { key: 'Enter' });
  expect(handleOnChange).toHaveBeenCalledTimes(1);

  // Should not update with keys other than Enter
  fireEvent.change(input, { target: { value: '#A' } });
  fireEvent.keyDown(input, { key: ' ' });
  expect(handleOnChange).toHaveBeenCalledTimes(1);

  // Should update even if # was not typed in
  fireEvent.change(input, { target: { value: 'FF6200' } });
  fireEvent.keyDown(input, { key: 'Enter' });
  expect(handleOnChange).toHaveBeenCalledTimes(2);
});

it('should handle hsl input change', () => {
  const handleOnChange = jest.fn();

  const { container } = render(
    <ColorPicker
      builderProps={{
        defaultColorFormat: 'hsl',
      }}
      onChangeCompleted={handleOnChange}
    />,
  );

  const h = container.querySelectorAll('input')[0] as HTMLInputElement;
  const s = container.querySelectorAll('input')[1] as HTMLInputElement;
  const l = container.querySelectorAll('input')[2] as HTMLInputElement;
  expect(h).toBeTruthy();
  expect(s).toBeTruthy();
  expect(l).toBeTruthy();

  fireEvent.change(h, { target: { value: '100' } });
  fireEvent.keyDown(h, { key: 'Enter' });
  expect(handleOnChange).toHaveBeenCalledTimes(1);

  fireEvent.change(s, { target: { value: '50' } });
  fireEvent.keyDown(s, { key: 'Enter' });
  expect(handleOnChange).toHaveBeenCalledTimes(2);

  fireEvent.change(l, { target: { value: '50' } });
  fireEvent.keyDown(l, { key: 'Enter' });
  expect(handleOnChange).toHaveBeenCalledTimes(3);

  // Should not update with invalid input
  fireEvent.change(h, { target: { value: '-1' } });
  fireEvent.keyDown(h, { key: 'Enter' });
  expect(handleOnChange).toHaveBeenCalledTimes(3);

  fireEvent.change(s, { target: { value: '101' } });
  fireEvent.keyDown(s, { key: 'Enter' });
  expect(handleOnChange).toHaveBeenCalledTimes(3);

  fireEvent.change(l, { target: { value: '5000' } });
  fireEvent.keyDown(l, { key: 'Enter' });
  expect(handleOnChange).toHaveBeenCalledTimes(3);

  // Should not update with keys other than Enter
  fireEvent.keyDown(h, { key: ' ' });
  expect(handleOnChange).toHaveBeenCalledTimes(3);

  fireEvent.keyDown(s, { key: ' ' });
  expect(handleOnChange).toHaveBeenCalledTimes(3);

  fireEvent.keyDown(l, { key: ' ' });
  expect(handleOnChange).toHaveBeenCalledTimes(3);
});

it('should handle rgb input change', () => {
  const handleOnChange = jest.fn();

  const { container } = render(
    <ColorPicker
      builderProps={{
        defaultColorFormat: 'rgb',
      }}
      onChangeCompleted={handleOnChange}
    />,
  );

  const r = container.querySelectorAll('input')[0] as HTMLInputElement;
  const g = container.querySelectorAll('input')[1] as HTMLInputElement;
  const b = container.querySelectorAll('input')[2] as HTMLInputElement;
  expect(r).toBeTruthy();
  expect(g).toBeTruthy();
  expect(b).toBeTruthy();

  fireEvent.change(r, { target: { value: '100' } });
  fireEvent.keyDown(r, { key: 'Enter' });
  expect(handleOnChange).toHaveBeenCalledTimes(1);

  fireEvent.change(g, { target: { value: '50' } });
  fireEvent.keyDown(g, { key: 'Enter' });
  expect(handleOnChange).toHaveBeenCalledTimes(2);

  fireEvent.change(b, { target: { value: '50' } });
  fireEvent.keyDown(b, { key: 'Enter' });
  expect(handleOnChange).toHaveBeenCalledTimes(3);

  // Should not update with invalid input
  fireEvent.change(r, { target: { value: '-1' } });
  fireEvent.keyDown(r, { key: 'Enter' });
  expect(handleOnChange).toHaveBeenCalledTimes(3);

  fireEvent.change(g, { target: { value: '256' } });
  fireEvent.keyDown(g, { key: 'Enter' });
  expect(handleOnChange).toHaveBeenCalledTimes(3);

  fireEvent.change(b, { target: { value: '5000' } });
  fireEvent.keyDown(b, { key: 'Enter' });
  expect(handleOnChange).toHaveBeenCalledTimes(3);

  // Should not update with keys other than Enter
  fireEvent.keyDown(r, { key: ' ' });
  expect(handleOnChange).toHaveBeenCalledTimes(3);

  fireEvent.keyDown(g, { key: ' ' });
  expect(handleOnChange).toHaveBeenCalledTimes(3);

  fireEvent.keyDown(b, { key: ' ' });
  expect(handleOnChange).toHaveBeenCalledTimes(3);
});

it('should handle hex input change with lose focus', () => {
  const handleOnChange = jest.fn();

  const { container } = render(
    <ColorPicker
      builderProps={{
        defaultColorFormat: 'hex',
      }}
      onChangeCompleted={handleOnChange}
    />,
  );

  const input = container.querySelectorAll('input')[0] as HTMLInputElement;
  expect(input).toBeTruthy();
  input.focus();
  fireEvent.change(input, { target: { value: '#FF6200' } });
  input.blur();
  expect(handleOnChange).toHaveBeenCalledTimes(1);
});

it('should handle hsl input change with lose focus', () => {
  const handleOnChange = jest.fn();

  const { container } = render(
    <ColorPicker
      builderProps={{
        defaultColorFormat: 'hsl',
      }}
      onChangeCompleted={handleOnChange}
    />,
  );

  const h = container.querySelectorAll('input')[0] as HTMLInputElement;
  const s = container.querySelectorAll('input')[1] as HTMLInputElement;
  const l = container.querySelectorAll('input')[2] as HTMLInputElement;
  expect(h).toBeTruthy();
  expect(s).toBeTruthy();
  expect(l).toBeTruthy();

  h.focus();
  fireEvent.change(h, { target: { value: '100' } });
  h.blur();
  expect(handleOnChange).toHaveBeenCalledTimes(1);

  s.focus();
  fireEvent.change(s, { target: { value: '50' } });
  s.blur();
  expect(handleOnChange).toHaveBeenCalledTimes(2);

  l.focus();
  fireEvent.change(l, { target: { value: '50' } });
  l.blur();
  expect(handleOnChange).toHaveBeenCalledTimes(3);
});

it('should handle rgb input change with lose focus', () => {
  const handleOnChange = jest.fn();

  const { container } = render(
    <ColorPicker
      builderProps={{
        defaultColorFormat: 'rgb',
      }}
      onChangeCompleted={handleOnChange}
    />,
  );

  const r = container.querySelectorAll('input')[0] as HTMLInputElement;
  const g = container.querySelectorAll('input')[1] as HTMLInputElement;
  const b = container.querySelectorAll('input')[2] as HTMLInputElement;
  expect(r).toBeTruthy();
  expect(g).toBeTruthy();
  expect(b).toBeTruthy();

  r.focus();
  fireEvent.change(r, { target: { value: '100' } });
  r.blur();
  expect(handleOnChange).toHaveBeenCalledTimes(1);

  g.focus();
  fireEvent.change(g, { target: { value: '50' } });
  g.blur();
  expect(handleOnChange).toHaveBeenCalledTimes(2);

  b.focus();
  fireEvent.change(b, { target: { value: '50' } });
  b.blur();
  expect(handleOnChange).toHaveBeenCalledTimes(3);
});

it('should preserve hue when color dot is black/at bottom of square', () => {
  window.CSS = { supports: () => true, escape: (i) => i };

  const { container } = render(
    <ColorPicker
      onChangeCompleted={() => {}}
      selectedColor={{ h: 140, s: 60, l: 1 }}
      builderProps={{
        defaultColorFormat: 'hex',
      }}
    />,
  );

  const colorPicker = container.querySelector(
    '.iui-color-picker',
  ) as HTMLElement;
  expect(colorPicker.style.getPropertyValue('--selected-color')).toBe(
    '#010402',
  );
  expect(colorPicker.style.getPropertyValue('--hue')).toBe('#00ff55');

  const colorDot = container.querySelector('.iui-color-dot') as HTMLElement;
  expect(colorDot).toBeTruthy();
  expect(colorDot.style.getPropertyValue('--left')).toEqual('75%');
  expect(colorDot.style.getPropertyValue('--top')).toEqual('98%');

  // Go to bottom of square and hue should be preserved
  fireEvent.keyDown(colorDot, { key: 'ArrowDown' });
  fireEvent.keyDown(colorDot, { key: 'ArrowDown' });
  expect(colorDot.style.getPropertyValue('--left')).toEqual('75%');
  expect(colorDot.style.getPropertyValue('--top')).toEqual('100%');
  expect(colorPicker.style.getPropertyValue('--hue')).toBe('#00ff55');
});
