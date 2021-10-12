/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import '@itwin/itwinui-css/css/color-picker.css';
import {
  useTheme,
  CommonProps,
  getBoundedValue,
  getWindow,
  useEventListener,
} from '../utils';
import cx from 'classnames';
import tinyColor from 'tinycolor2';

export type Color = {
  hsl?: HslColor;
  rgb?: RgbColor;
  hex?: HexColor;
  hsv?: HsvColor;
};

interface HslColor {
  h: number;
  s: number;
  l: number;
  displayString?: string;
}
interface RgbColor {
  r: number;
  g: number;
  b: number;
  displayString?: string;
}
interface HexColor {
  hex: string;
}
interface HsvColor {
  h: number;
  s: number;
  v: number;
  displayString?: string;
}

const getVerticalPercentageOfRectangle = (rect: DOMRect, pointer: number) => {
  const position = getBoundedValue(pointer, rect.top, rect.bottom);
  return ((position - rect.top) / rect.height) * 100;
};
const getHorizontalPercentageOfRectangle = (rect: DOMRect, pointer: number) => {
  const position = getBoundedValue(pointer, rect.left, rect.right);
  return ((position - rect.left) / rect.width) * 100;
};

// Converts color value provided and fills in all hsv, hsl, rgb, hex, and displayString values
export const fillColor = (color: Color | undefined) => {
  let c;

  if (color == undefined) {
    c = tinyColor('#ff0000');
  } else if (color.hsv != undefined) {
    c = tinyColor(color.hsv);
  } else if (color.hsl != undefined) {
    c = tinyColor(color.hsl);
  } else if (color.rgb != undefined) {
    c = tinyColor(color.rgb);
  } else if (color.hex != undefined) {
    c = tinyColor(color.hex.hex);
  } else {
    c = tinyColor('#ff0000');
  }

  const hsv = c.toHsv();
  const hsl = c.toHsl();
  const rgb = c.toRgb();

  return {
    hsv: { h: hsv.h, s: hsv.s, v: hsv.v, displayString: c.toHsvString() },
    hsl: { h: hsl.h, s: hsl.s, l: hsl.l, displayString: c.toHslString() },
    rgb: { r: rgb.r, g: rgb.g, b: rgb.b, displayString: c.toRgbString() },
    hex: { hex: c.toHex() },
  };
};

export type ColorPickerProps = {
  /**
   * Color Swatches that will be added within the color palette.
   * Recommended to use `ColorSwatch` components.
   * In advanced color picker, this will be the 'Saved Colors' list - it can be empty.
   * In advanced color picker, you can pass in the 'Add' button.
   */
  children?: React.ReactNode;
  /**
   * Type of color picker.
   * Basic for a simple color palette, advanced for color customization options.
   */
  type?: 'basic' | 'advanced';
  /**
   * The selected color to be shown as the initial color in advanced color picker.
   * Only for advanced color picker.
   */
  selectedColor?: Color;
  /**
   * Handler for when selectedColor is changed.
   * Only for advanced color picker.
   */
  onSelectionChanged?: (color: Color) => void;
  /**
   * Title shown above color palette
   * Only for advanced color picker
   */
  colorPaletteTitle?: string;
} & Omit<CommonProps, 'title'>;

/**
 * Basic ColorPicker component to display a palette of ColorSwatches
 * @example
 * <ColorPicker>
 *   <ColorSwatch key={1} color='#D4F4BD' onClick={onColorClick} />
 *   <ColorSwatch key={2} color='#EEF6E8' onClick={onColorClick} />
 *   <ColorSwatch key={3} color='#9BA5AF' onClick={onColorClick} />
 *   <ColorSwatch key={4} color='#002A44' onClick={onColorClick} />
 * </ColorPicker>
 */
/**
 * Advanced ColorPicker component to display a palette of ColorSwatches and color customization options
 * @example
 * <ColorPicker type='advanced' selectedColor={selectedColor} onSelectionChanged={onColorChanged}>
 *   <ColorSwatch key={1} color='#D4F4BD' onClick={onColorClick} />
 *   <ColorSwatch key={2} color='#EEF6E8' onClick={onColorClick} />
 *   <ColorSwatch key={3} color='#9BA5AF' onClick={onColorClick} />
 *   <ColorSwatch key={4} color='#002A44' onClick={onColorClick} />
 * </ColorPicker>
 */
export const ColorPicker = (props: ColorPickerProps) => {
  const {
    children,
    className,
    type,
    selectedColor,
    onSelectionChanged,
    colorPaletteTitle,
    ...rest
  } = props;

  useTheme();

  const ref = React.useRef<HTMLDivElement>(null);
  const [focusedColor, setFocusedColor] = React.useState<number | null>();

  React.useEffect(() => {
    const colorSwatches = Array.from<HTMLElement>(
      ref.current?.querySelectorAll('.iui-color-swatch') ?? [],
    );
    if (focusedColor != null) {
      colorSwatches[focusedColor]?.focus();
      return;
    }
    const selectedIndex = colorSwatches.findIndex(
      (swatch) =>
        swatch.tabIndex === 0 || swatch.getAttribute('aria-selected') == 'true',
    );
    setFocusedColor(selectedIndex > -1 ? selectedIndex : null);
  }, [focusedColor]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const colorSwatches = Array.from<HTMLElement>(
      ref.current?.querySelectorAll('.iui-color-swatch') ?? [],
    );
    if (!colorSwatches.length) {
      return;
    }

    const currentlyFocused = colorSwatches.findIndex(
      (swatch) => swatch === ref.current?.ownerDocument.activeElement,
    );
    const currentIndex = currentlyFocused > -1 ? currentlyFocused : 0;

    switch (event.key) {
      case 'ArrowDown': {
        // Look for next ColorSwatch with same offsetLeft value
        const newIndex = colorSwatches.findIndex(
          (swatch, index) =>
            index > currentIndex &&
            swatch.offsetLeft === colorSwatches[currentIndex].offsetLeft,
        );
        setFocusedColor(newIndex > -1 ? newIndex : currentIndex);
        event.preventDefault();
        break;
      }
      case 'ArrowUp': {
        // Look backwards for next ColorSwatch with same offsetLeft value
        let newIndex = -1;
        for (let i = currentIndex - 1; i >= 0; i--) {
          if (
            colorSwatches[i].offsetLeft ==
            colorSwatches[currentIndex].offsetLeft
          ) {
            newIndex = i;
            break;
          }
        }
        setFocusedColor(newIndex > -1 ? newIndex : currentIndex);
        event.preventDefault();
        break;
      }
      case 'ArrowLeft':
        setFocusedColor(Math.max(currentIndex - 1, 0));
        event.preventDefault();
        break;
      case 'ArrowRight':
        setFocusedColor(Math.min(currentIndex + 1, colorSwatches.length - 1));
        event.preventDefault();
        break;
      case 'Enter':
      case ' ':
      case 'Spacebar':
        colorSwatches[currentIndex].click();
        event.preventDefault();
        break;
    }
  };

  // Set style values for advanced color picker
  const [dotColor, setDotColor] = React.useState(fillColor(selectedColor));
  const [squareColor, setSquareColor] = React.useState(
    fillColor({ hsv: { h: dotColor.hsv.h, s: 100, v: 100 } }),
  );
  const [sliderTop, setSliderTop] = React.useState(dotColor.hsv.h / 3.5);
  const [squareTop, setSquareTop] = React.useState((1 - dotColor.hsv.v) * 100);
  const [squareLeft, setSquareLeft] = React.useState(dotColor.hsv.s * 100);
  const [activeDotIndex, setActiveDotIndex] = React.useState<
    number | undefined
  >(undefined);

  const colorSquareStyle = getWindow()?.CSS?.supports?.(
    `--color: ${squareColor.hsl.displayString}`,
  )
    ? { '--color': squareColor.hsl.displayString }
    : { backgroundColor: squareColor.hsl.displayString };

  const colorDotStyle = getWindow()?.CSS?.supports?.(
    `--selected-color: ${dotColor.hsl.displayString}`,
  )
    ? {
        '--selected-color': dotColor.hsl.displayString,
        '--top': squareTop.toString() + '%',
        '--left': squareLeft.toString() + '%',
        cursor: 'crosshair',
      }
    : {
        backgroundColor: dotColor.hsl.displayString,
        top: squareTop.toString() + '%',
        left: squareLeft.toString() + '%',
        cursor: 'crosshair',
      };

  const sliderColorDotStyle = getWindow()?.CSS?.supports?.(
    `--top: ${sliderTop}%`,
  )
    ? { '--top': sliderTop.toString() + '%' }
    : { top: sliderTop.toString() + '%' };

  // Update slider change
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const updateSlider = React.useCallback(
    (y: number, selectionChanged: boolean) => {
      setSliderTop(y);

      const hue = y * 3.5;
      setSquareColor(fillColor({ hsv: { h: hue, s: 100, v: 100 } }));
      // Keep same s and v, Update hue
      const color = fillColor({
        hsv: { h: hue, s: dotColor.hsv.s, v: dotColor.hsv.v },
      });
      setDotColor(color);

      //Only update selected color when dragging is done
      if (selectionChanged) {
        onSelectionChanged?.(color);
      }
    },
    [dotColor.hsv.s, dotColor.hsv.v, onSelectionChanged],
  );

  const updateSliderValue = React.useCallback(
    (
      event: PointerEvent | React.PointerEvent,
      callbackType: 'onChange' | 'onUpdate' | 'onClick',
    ) => {
      if (
        (sliderRef.current && activeDotIndex == 0) ||
        (sliderRef.current && callbackType == 'onClick')
      ) {
        const percent = getVerticalPercentageOfRectangle(
          sliderRef.current.getBoundingClientRect(),
          event.clientY,
        );

        if (callbackType == 'onChange' || callbackType == 'onClick') {
          updateSlider(percent, true);
        } else if (callbackType == 'onUpdate') {
          updateSlider(percent, false);
        }
      }
    },
    [activeDotIndex, updateSlider],
  );
  const handleSliderPointerUp = React.useCallback(
    (event: PointerEvent) => {
      updateSliderValue(event, 'onChange');
      setActiveDotIndex(undefined);
      event.preventDefault();
      event.stopPropagation();
    },
    [updateSliderValue],
  );
  useEventListener(
    'pointerup',
    handleSliderPointerUp,
    ref.current?.ownerDocument,
  );

  const handlePointerMove = React.useCallback(
    (event: PointerEvent): void => {
      event.preventDefault();
      event.stopPropagation();
      updateSliderValue(event, 'onUpdate');
    },
    [updateSliderValue],
  );
  useEventListener(
    'pointermove',
    handlePointerMove,
    ref.current?.ownerDocument,
  );

  const handlePointerDownOnSlider = React.useCallback(
    (event: React.PointerEvent) => {
      updateSliderValue(event, 'onClick');
      setActiveDotIndex(0);
    },
    [updateSliderValue],
  );

  // Arrow key navigation for slider dot
  const handleSliderDotKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    let y = sliderTop;
    switch (event.key) {
      case 'ArrowDown': {
        y = Math.min(y + 1, 100);
        updateSlider(y, false);
        break;
      }
      case 'ArrowUp': {
        y = Math.max(y - 1, 0);
        updateSlider(y, false);
        break;
      }
      case 'Enter':
      case ' ':
      case 'Spacebar':
        updateSlider(y, true);
        break;
    }
  };

  // Update Color field square change
  const squareRef = React.useRef<HTMLDivElement>(null);

  const updateColorDot = React.useCallback(
    (x: number, y: number, selectionChanged: boolean) => {
      setSquareTop(y);
      setSquareLeft(x);

      const color = fillColor({
        hsv: {
          h: squareColor.hsv.h,
          s: x / 100,
          v: (100 - y) / 100,
        },
      });
      setDotColor(color);
      if (selectionChanged) {
        onSelectionChanged?.(color);
      }
    },
    [onSelectionChanged, squareColor.hsv.h],
  );

  const updateSquareValue = React.useCallback(
    (
      event: PointerEvent | React.PointerEvent,
      callbackType: 'onChange' | 'onUpdate' | 'onClick',
    ) => {
      if (
        (squareRef.current && activeDotIndex == 1) ||
        (squareRef.current && callbackType == 'onClick')
      ) {
        const percentX = getHorizontalPercentageOfRectangle(
          squareRef.current.getBoundingClientRect(),
          event.clientX,
        );
        const percentY = getVerticalPercentageOfRectangle(
          squareRef.current.getBoundingClientRect(),
          event.clientY,
        );

        if (callbackType == 'onChange' || callbackType == 'onClick') {
          updateColorDot(percentX, percentY, true);
        } else if (callbackType == 'onUpdate') {
          updateColorDot(percentX, percentY, false);
        }
      }
    },
    [activeDotIndex, updateColorDot],
  );
  const handleSquarePointerUp = React.useCallback(
    (event: PointerEvent) => {
      updateSquareValue(event, 'onChange');

      event.preventDefault();
      event.stopPropagation();
    },
    [updateSquareValue],
  );
  useEventListener(
    'pointerup',
    handleSquarePointerUp,
    ref.current?.ownerDocument,
  );

  const handleSquarePointerMove = React.useCallback(
    (event: PointerEvent): void => {
      event.preventDefault();
      event.stopPropagation();
      updateSquareValue(event, 'onUpdate');
    },
    [updateSquareValue],
  );
  useEventListener(
    'pointermove',
    handleSquarePointerMove,
    ref.current?.ownerDocument,
  );

  const handlePointerDownOnSquare = React.useCallback(
    (event: React.PointerEvent) => {
      updateSquareValue(event, 'onClick');
      setActiveDotIndex(1);
    },
    [updateSquareValue],
  );

  // Arrow key navigation for color dot
  const handleColorDotKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    let x = squareLeft;
    let y = squareTop;
    switch (event.key) {
      case 'ArrowDown': {
        y = Math.min(y + 1, 100);
        updateColorDot(x, y, false);
        break;
      }
      case 'ArrowUp': {
        y = Math.max(y - 1, 0);
        updateColorDot(x, y, false);
        break;
      }
      case 'ArrowLeft':
        x = Math.max(x - 1, 0);
        updateColorDot(x, y, false);
        break;
      case 'ArrowRight':
        x = Math.min(x + 1, 100);
        updateColorDot(x, y, false);
        break;
      case 'Enter':
      case ' ':
      case 'Spacebar':
        updateColorDot(x, y, true);
        break;
    }
  };

  return (
    <div
      className={cx(
        'iui-color-picker',
        { [`iui-${type}`]: type !== 'basic' },
        className,
      )}
      {...rest}
    >
      {type == 'advanced' && (
        <div className='iui-color-selection-wrapper'>
          <div
            className='iui-color-field'
            style={colorSquareStyle}
            ref={squareRef}
            onPointerDown={handlePointerDownOnSquare}
          >
            <div
              className='iui-color-dot'
              style={colorDotStyle}
              onPointerDown={() => {
                setActiveDotIndex(1);
              }}
              onKeyDown={handleColorDotKeyDown}
              tabIndex={0}
            />
          </div>
          <div
            className='iui-color-slider'
            ref={sliderRef}
            onPointerDown={handlePointerDownOnSlider}
          >
            <div
              className='iui-color-dot iui-white'
              style={sliderColorDotStyle}
              onPointerDown={() => {
                setActiveDotIndex(0);
              }}
              onKeyDown={handleSliderDotKeyDown}
              tabIndex={0}
            />
          </div>
        </div>
      )}
      {type == 'advanced' && children && (
        <div className='iui-saved-colors'>{colorPaletteTitle}</div>
      )}
      {children && (
        <div className='iui-color-palette' onKeyDown={handleKeyDown} ref={ref}>
          {children}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
