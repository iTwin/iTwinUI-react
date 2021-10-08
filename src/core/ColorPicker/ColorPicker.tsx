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
   * @default 'Saved Colors'
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
    colorPaletteTitle = 'Saved Colors',
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
  const [squareColor, setSquareColor] = React.useState(dotColor);
  const [sliderTop, setSliderTop] = React.useState(10);
  const [squareTop, setSquareTop] = React.useState(0);
  const [squareLeft, setSquareLeft] = React.useState(100);
  const [sliderDotActive, setSliderDotActive] = React.useState(false);
  const [squareDotActive, setSquareDotActive] = React.useState(false);

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
  const updateSliderValue = React.useCallback(
    (event: PointerEvent, callbackType: 'onChange' | 'onUpdate') => {
      if (sliderRef.current) {
        const percent = getVerticalPercentageOfRectangle(
          sliderRef.current.getBoundingClientRect(),
          event.clientY,
        );
        if (
          callbackType == 'onChange' ||
          (callbackType == 'onUpdate' && sliderDotActive)
        ) {
          setSliderTop(percent);

          let hue = 0;
          if (percent <= 97) {
            //If you click in bottom of slider it should go back to red (hue = 0)
            hue = percent * 3.5;
          }
          setSquareColor(fillColor({ hsv: { h: hue, s: 100, v: 100 } }));
          // Keep same s and v, Update hue
          const color = fillColor({
            hsv: { h: hue, s: dotColor.hsv.s, v: dotColor.hsv.v },
          });
          setDotColor(color);

          //Only update selected color when dragging is done
          if (callbackType == 'onChange') {
            onSelectionChanged?.(color);
            setSliderDotActive(false);
          }
        }
      }
    },
    [dotColor, onSelectionChanged, sliderDotActive],
  );
  const handleSliderPointerUp = React.useCallback(
    (event: PointerEvent) => {
      updateSliderValue(event, 'onChange');
      event.preventDefault();
      event.stopPropagation();
    },
    [updateSliderValue],
  );
  useEventListener(
    'pointerup',
    handleSliderPointerUp,
    sliderRef.current as HTMLElement,
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
    sliderRef.current as HTMLElement,
  );

  const handlePointerOut = React.useCallback((event: PointerEvent): void => {
    event.preventDefault();
    event.stopPropagation();
    setSliderDotActive(false);
  }, []);
  useEventListener(
    'mouseout',
    handlePointerOut,
    sliderRef.current as HTMLElement,
  );

  const handlePointerDownOnThumb = React.useCallback(() => {
    setSliderDotActive(true);
  }, []);

  // Update Color field square change
  const squareRef = React.useRef<HTMLDivElement>(null);
  const updateSquareValue = React.useCallback(
    (event: PointerEvent, callbackType: 'onChange' | 'onUpdate') => {
      if (squareRef.current) {
        const percentX = getHorizontalPercentageOfRectangle(
          squareRef.current.getBoundingClientRect(),
          event.clientX,
        );
        const percentY = getVerticalPercentageOfRectangle(
          squareRef.current.getBoundingClientRect(),
          event.clientY,
        );

        if (
          callbackType == 'onChange' ||
          (callbackType == 'onUpdate' && squareDotActive)
        ) {
          setSquareTop(percentY);
          setSquareLeft(percentX);

          // Keep same hue, update s and v
          const color = {
            hsv: {
              h: squareColor.hsv.h,
              s: percentX,
              v: 100 - percentY,
            },
          };
          setDotColor(fillColor(color));

          //Only update selected color when dragging is done
          if (callbackType == 'onChange') {
            onSelectionChanged?.(fillColor(color));
            setSquareDotActive(false);
          }
        }
      }
    },
    [onSelectionChanged, squareColor.hsv.h, squareDotActive],
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
    squareRef.current as HTMLElement,
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
    squareRef.current as HTMLElement,
  );

  const handleSquarePointerOut = React.useCallback(
    (event: PointerEvent): void => {
      event.preventDefault();
      event.stopPropagation();
      setSquareDotActive(false);
    },
    [],
  );
  useEventListener(
    'mouseout',
    handleSquarePointerOut,
    squareRef.current as HTMLElement,
  );

  const handleSquarePointerDownOnThumb = React.useCallback(() => {
    setSquareDotActive(true);
  }, []);

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
          >
            <div
              className='iui-color-dot'
              style={colorDotStyle}
              onPointerDown={handleSquarePointerDownOnThumb}
            />
          </div>
          <div className='iui-color-slider' ref={sliderRef}>
            <div
              className='iui-color-dot iui-white'
              style={sliderColorDotStyle}
              onPointerDown={handlePointerDownOnThumb}
            />
          </div>
        </div>
      )}
      {type == 'advanced' && (
        <div className='iui-saved-colors'>{colorPaletteTitle}</div>
      )}
      <div className='iui-color-palette' onKeyDown={handleKeyDown} ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default ColorPicker;
