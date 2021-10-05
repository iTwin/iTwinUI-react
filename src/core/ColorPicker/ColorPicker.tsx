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

export interface HslColor {
  h: number;
  s: number;
  l: number;
}
const getVerticalPercentageOfRectangle = (rect: DOMRect, pointer: number) => {
  const position = getBoundedValue(pointer, rect.top, rect.bottom);
  return ((position - rect.top) / rect.height) * 100;
};
const getHorizontalPercentageOfRectangle = (rect: DOMRect, pointer: number) => {
  const position = getBoundedValue(pointer, rect.left, rect.right);
  return ((position - rect.left) / rect.width) * 100;
};
const getPart = (color: string) => {
  let result = '';
  for (let i = 0; i < color.length; i++) {
    if (!isNaN(Number(color[i]))) {
      result += color[i];
    } else if (color[i] == ',') {
      break;
    }
  }
  return Number(result);
};
export const getHSL = (color: string) => {
  const h = getPart(color.split(',')[0]);
  const s = getPart(color.split(',')[1]);
  const l = getPart(color.split(',')[2]);

  return { h: h, s: s, l: l };
};
export const getHSLString = (color: HslColor | undefined) => {
  if (color == undefined) {
    return 'hsl( ' + 0 + ', ' + 0 + '%, ' + 100 + '% )';
  }
  return 'hsl( ' + color.h + ', ' + color.s + '%, ' + color.l + '% )';
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
   * The selected color.
   * Only for advanced color picker.
   */
  selectedColor?: HslColor;
  /**
   * Handler for when selectedColor is changed.
   * Only for advanced color picker.
   */
  onSelectionChanged?: (color: HslColor) => void;
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
  const [dotColor, setDotColor] = React.useState(selectedColor);
  const [squareColor, setSquareColor] = React.useState(dotColor);
  const [sliderTop, setSliderTop] = React.useState(10);
  const [squareTop, setSquareTop] = React.useState(10);
  const [squareLeft, setSquareLeft] = React.useState(10);

  const colorSquareStyle = getWindow()?.CSS?.supports?.(
    `--color: ${getHSLString(squareColor)}`,
  )
    ? { '--color': getHSLString(squareColor) }
    : { backgroundColor: getHSLString(squareColor) };

  const colorDotStyle = getWindow()?.CSS?.supports?.(
    `--selected-color: ${getHSLString(dotColor)}`,
  )
    ? {
        '--selected-color': getHSLString(dotColor),
        '--top': squareTop.toString() + '%',
        '--left': squareLeft.toString() + '%',
      }
    : {
        backgroundColor: getHSLString(dotColor),
        top: squareTop.toString() + '%',
        left: squareLeft.toString() + '%',
      };

  const sliderColorDotStyle = getWindow()?.CSS?.supports?.(
    `--top: ${sliderTop}%`,
  )
    ? { '--top': sliderTop.toString() + '%' }
    : { top: sliderTop.toString() + '%' };

  // Update slider change
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const updateSliderValue = React.useCallback(
    (event: PointerEvent) => {
      if (sliderRef.current) {
        const percent = getVerticalPercentageOfRectangle(
          sliderRef.current.getBoundingClientRect(),
          event.clientY,
        );
        setSliderTop(percent);

        let hue = 0;
        if (percent <= 97) {
          //If you click in bottom of slider it should go back to red (hue = 0)
          hue = Math.round(percent * 3.5);
        }
        setSquareColor({ h: hue, s: 100, l: 50 });
        if (dotColor != null) {
          // Keep same s and l, Update hue
          const color = { h: hue, s: dotColor.s, l: dotColor.l };
          setDotColor(color);
          onSelectionChanged?.(color);
        }
      }
    },
    [dotColor, onSelectionChanged],
  );
  const handleSliderPointerUp = React.useCallback(
    (event: PointerEvent) => {
      updateSliderValue(event);
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

  // Update Color field square change
  const squareRef = React.useRef<HTMLDivElement>(null);
  const updateSquareValue = React.useCallback(
    (event: PointerEvent) => {
      if (squareRef.current) {
        const percentX = getHorizontalPercentageOfRectangle(
          squareRef.current.getBoundingClientRect(),
          event.clientX,
        );
        const percentY = getVerticalPercentageOfRectangle(
          squareRef.current.getBoundingClientRect(),
          event.clientY,
        );

        setSquareTop(percentY);
        setSquareLeft(percentX);

        // TODO: Calculate new dotColor value from new position in the colorSquare
        let l = 0;
        if (percentX < 50 && percentY < 50) {
          l = 70; // Top left
        } else if (percentX < 50 && percentY > 50) {
          l = 30; // Bottom left
        } else if (percentX > 50 && percentY > 50) {
          l = 20; // Bottom right
        } else if (percentX > 50 && percentY < 50) {
          l = 50; // top right
        }

        // Keep same hue, update s and l
        if (squareColor != null) {
          const color = {
            h: squareColor.h,
            s: Math.round(percentY),
            l: l,
          };
          setDotColor(color);
          onSelectionChanged?.(color);
        }
      }
    },
    [onSelectionChanged, squareColor],
  );
  const handleSquarePointerUp = React.useCallback(
    (event: PointerEvent) => {
      updateSquareValue(event);
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
            <div className='iui-color-dot' style={colorDotStyle} />
          </div>
          <div className='iui-color-slider' ref={sliderRef}>
            <div
              className='iui-color-dot iui-white'
              style={sliderColorDotStyle}
            />
          </div>
        </div>
      )}
      {type == 'advanced' && (
        <div className='iui-saved-colors'>Saved Colors</div>
      )}
      <div className='iui-color-palette' onKeyDown={handleKeyDown} ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default ColorPicker;
