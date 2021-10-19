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
import {
  ColorValue,
  HslColor,
  RgbColor,
  HsvColor,
} from '../utils/color/ColorValue';
import { ColorByName } from '../utils/color/ColorByName';
import { Slider } from '../Slider';
import ColorSwatch from './ColorSwatch';
import { IconButton } from '../Buttons';
import { Input } from '../Input';

export type Color = HslColor | RgbColor | HsvColor | string;

const getVerticalPercentageOfRectangle = (rect: DOMRect, pointer: number) => {
  const position = getBoundedValue(pointer, rect.top, rect.bottom);
  return ((position - rect.top) / rect.height) * 100;
};
const getHorizontalPercentageOfRectangle = (rect: DOMRect, pointer: number) => {
  const position = getBoundedValue(pointer, rect.left, rect.right);
  return ((position - rect.left) / rect.width) * 100;
};

// Converts color value provided and fills in all hsv, hsl, rgb, hex, and displayString values
export const fillColor = (color: ColorValue) => {
  const hsv = color.toHSV();
  const hsl = color.toHSL();
  const rgb = color.toRGB();

  return {
    hsv: { h: hsv.h, s: hsv.s, v: hsv.v, displayString: color.toHsvString() },
    hsl: { h: hsl.h, s: hsl.s, l: hsl.l, displayString: color.toHslString() },
    rgb: { r: rgb.r, g: rgb.g, b: rgb.b, displayString: color.toRgbString() },
    hex: { hex: color.toHexString() },
  };
};

export type ColorBuilderProps = {
  /**
   * Show HSL, RGB, or HEX input values.
   * Set to NONE to use advanced color builder without showing color input
   */
  defaultColorInputType?: 'HSL' | 'RGB' | 'HEX' | 'NONE';
};

export type ColorPaletteProps = {
  /**
   * Available color values to show in palette
   * */
  colors?: Color[];
  /**
   * Title shown above color palette
   */
  colorPaletteTitle?: string;
};

export type ColorPickerProps = {
  children?: React.ReactNode;
  /**
   * The selected color
   */
  selectedColor?: ColorValue;
  /**
   * Callback fired when the color value is internally updated during
   * operations like dragging a Thumb. Use this callback with caution as a
   * high-volume of updates will occur when dragging.
   */
  onChange?: (color: ColorValue) => void;
  /**
   * Callback fired when selectedColor is done changing.
   * This can be on pointerUp when thumb is done dragging,
   * or when user clicks on color builder components, or when user clicks on color swatch
   */
  onChangeCompleted?: (color: ColorValue) => void;
  /**
   * Props used to determine what advanced color picker components to display
   * to allow user to build their own color.
   * If undefined, paletteProps must be defined.
   */
  builderProps?: ColorBuilderProps;
  /**
   * Props used to display a palette of colors
   * If used in combination with builderProps then the palette is shown below the builder components
   * If undefined, builderProps must be defined.
   */
  paletteProps?: ColorPaletteProps;
} & Omit<CommonProps, 'title'>;

/**
 * Basic ColorPicker component to display a palette of ColorSwatches
 * @example
 * <ColorPicker
 *    onChangeCompleted={onColorChanged}
 *    selectedColor={activeColor}
 *    paletteProps={{ colors: ['#FFFFFF', '#5A6973'] }}
 * />
 */
/**
 * Advanced ColorPicker component to display color builder options, color input, and a palette of ColorSwatches
 * @example
 * <ColorPicker
 *    onChangeCompleted={onColorChanged}
 *    selectedColor={selectedColor}
 *    paletteProps={{
 *      colors: ['#FFFFFF', '#5A6973'],
 *      colorPaletteTitle: 'Saved Colors',
 *    }}
 *   builderProps={{
 *      defaultColorInputType: 'HSL',
 *    }}
 * />
 */
export const ColorPicker = (props: ColorPickerProps) => {
  const {
    children,
    className,
    selectedColor,
    onChange,
    onChangeCompleted,
    builderProps,
    paletteProps,
    ...rest
  } = props;

  useTheme();

  const ref = React.useRef<HTMLDivElement>(null);

  const [focusedColor, setFocusedColor] = React.useState<number | null>();
  const [activeColor, setActiveColor] = React.useState<ColorValue>(
    // TODO: Fix this
    typeof selectedColor === 'string'
      ? ColorValue.fromString(selectedColor)
      : ColorValue.fromString('#00121D'),
  );

  React.useEffect(() => {
    const colorSwatches = Array.from<HTMLElement>(
      ref.current?.querySelectorAll('.iui-color-swatch, .iui-button') ?? [],
    );
    if (focusedColor != null) {
      colorSwatches[focusedColor]?.focus();
      return;
    }
    const selectedIndex = colorSwatches.findIndex(
      (swatch) =>
        swatch.tabIndex === 0 ||
        swatch.getAttribute('aria-selected') === 'true',
    );
    setFocusedColor(selectedIndex > -1 ? selectedIndex : null);
  }, [focusedColor]);

  // Color palette arrow key navigation
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const colorSwatches = Array.from<HTMLElement>(
      ref.current?.querySelectorAll('.iui-color-swatch, .iui-button') ?? [],
    );
    if (!colorSwatches.length) {
      return;
    }

    const currentlyFocused = colorSwatches.findIndex(
      (swatch) => swatch === ref.current?.ownerDocument.activeElement,
    );
    const currentIndex = currentlyFocused > -1 ? currentlyFocused : 0;
    let newIndex = -1;

    switch (event.key) {
      case 'ArrowDown': {
        // Look for next ColorSwatch with same offsetLeft value
        newIndex = colorSwatches.findIndex(
          (swatch, index) =>
            index > currentIndex &&
            swatch.offsetLeft === colorSwatches[currentIndex].offsetLeft,
        );
        break;
      }
      case 'ArrowUp': {
        // Look backwards for next ColorSwatch with same offsetLeft value
        for (let i = currentIndex - 1; i >= 0; i--) {
          if (
            colorSwatches[i].offsetLeft ===
            colorSwatches[currentIndex].offsetLeft
          ) {
            newIndex = i;
            break;
          }
        }
        break;
      }
      case 'ArrowLeft':
        newIndex = Math.max(currentIndex - 1, 0);
        break;
      case 'ArrowRight':
        newIndex = Math.min(currentIndex + 1, colorSwatches.length - 1);
        break;
      case 'Enter':
      case ' ':
      case 'Spacebar':
        colorSwatches[currentIndex].click();
        event.preventDefault();
        return;
    }

    if (newIndex >= 0 && newIndex < colorSwatches.length) {
      setFocusedColor(newIndex);
      event.preventDefault();
    }
  };

  // Set style values for advanced color picker
  const [dotColor, setDotColor] = React.useState(() =>
    fillColor(selectedColor ?? new ColorValue(ColorByName.red)),
  );

  const [squareColor, setSquareColor] = React.useState(() =>
    fillColor(ColorValue.fromHSV({ h: dotColor.hsv.h, s: 100, v: 100 })),
  );
  const [sliderValue, setSliderValue] = React.useState(() =>
    Math.round(dotColor.hsv.h / 3.59),
  );
  const [squareTop, setSquareTop] = React.useState(() => 100 - dotColor.hsv.v);
  const [squareLeft, setSquareLeft] = React.useState(() => dotColor.hsv.s);
  const [colorDotActive, setColorDotActive] = React.useState(false);

  const colorSquareStyle = getWindow()?.CSS?.supports?.(
    `--hue: ${squareColor.hsl.displayString}`,
    `--selected-color: ${dotColor.hsl.displayString}`,
  )
    ? {
        '--hue': squareColor.hsl.displayString,
        '--selected-color': dotColor.hsl.displayString,
      }
    : { backgroundColor: squareColor.hsl.displayString };

  const colorDotStyle = getWindow()?.CSS?.supports?.(
    `--top: ${squareTop.toString()}%`,
    `--left: ${squareLeft.toString()}%`,
  )
    ? {
        '--top': squareTop.toString() + '%',
        '--left': squareLeft.toString() + '%',
      }
    : {
        backgroundColor: dotColor.hsl.displayString,
        top: squareTop.toString() + '%',
        left: squareLeft.toString() + '%',
      };

  // Update color
  const updateColor = React.useCallback(
    (color: ColorValue, changeCompleted: boolean) => {
      const hue = fillColor(
        ColorValue.fromHSV({ h: color.toHSV().h, s: 100, v: 100 }),
      );

      setDotColor(fillColor(color));
      setSquareColor(hue);
      setSliderValue(Math.round(color.toHSV().h / 3.59));
      setSquareTop(100 - color.toHSV().v);
      setSquareLeft(color.toHSV().s);
      if (changeCompleted) {
        onChangeCompleted?.(color);
      } else {
        onChange?.(color);
      }
    },
    [onChange, onChangeCompleted],
  );

  // Update slider change
  const updateSlider = React.useCallback(
    (y: number, selectionChanged: boolean) => {
      const newDotColor = ColorValue.fromHSV({
        h: Math.round(y * 3.59),
        s: dotColor.hsv.s,
        v: dotColor.hsv.v,
      });
      updateColor(newDotColor, selectionChanged);
    },
    [dotColor.hsv.s, dotColor.hsv.v, updateColor],
  );
  const onChangeHue = React.useCallback(
    (values: ReadonlyArray<number>) => {
      updateSlider(values[0], false);
    },
    [updateSlider],
  );

  const onChangeHueCompleted = React.useCallback(
    (values: ReadonlyArray<number>) => {
      updateSlider(values[0], true);
    },
    [updateSlider],
  );

  // Update Color field square change
  const squareRef = React.useRef<HTMLDivElement>(null);

  const updateColorDot = React.useCallback(
    (x: number, y: number, selectionChanged: boolean) => {
      const newColor = ColorValue.fromHSV({
        h: squareColor.hsv.h,
        s: x,
        v: 100 - y,
      });
      updateColor(newColor, selectionChanged);
    },
    [squareColor.hsv.h, updateColor],
  );

  const updateSquareValue = React.useCallback(
    (
      event: PointerEvent | React.PointerEvent,
      callbackType: 'onChange' | 'onUpdate' | 'onClick',
    ) => {
      if (
        (squareRef.current && colorDotActive) ||
        (squareRef.current && callbackType === 'onClick')
      ) {
        const percentX = getHorizontalPercentageOfRectangle(
          squareRef.current.getBoundingClientRect(),
          event.clientX,
        );
        const percentY = getVerticalPercentageOfRectangle(
          squareRef.current.getBoundingClientRect(),
          event.clientY,
        );

        if (callbackType === 'onChange' || callbackType === 'onClick') {
          updateColorDot(percentX, percentY, true);
        } else if (callbackType === 'onUpdate') {
          updateColorDot(percentX, percentY, false);
        }
      }
    },
    [colorDotActive, updateColorDot],
  );
  const handleSquarePointerUp = React.useCallback(
    (event: PointerEvent) => {
      updateSquareValue(event, 'onChange');
      setColorDotActive(false);
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
      setColorDotActive(true);
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

  // Handle color inputs
  const [inputType, setInputType] = React.useState<
    'HEX' | 'HSL' | 'RGB' | 'NONE'
  >(builderProps?.defaultColorInputType ?? 'NONE');

  const [hexInput, setHexInput] = React.useState(dotColor.hex.hex);
  const [hslInput, setHslInput] = React.useState([
    dotColor.hsl.h.toString(),
    dotColor.hsl.s.toString(),
    dotColor.hsl.l.toString(),
  ]);
  const [rgbInput, setRgbInput] = React.useState([
    dotColor.rgb.r.toString(),
    dotColor.rgb.g.toString(),
    dotColor.rgb.b.toString(),
  ]);

  React.useEffect(() => {
    setHexInput(dotColor.hex.hex);
  }, [dotColor]);
  React.useEffect(() => {
    setHslInput([
      dotColor.hsl.h.toString(),
      dotColor.hsl.s.toString(),
      dotColor.hsl.l.toString(),
    ]);
  }, [dotColor]);
  React.useEffect(() => {
    setRgbInput([
      dotColor.rgb.r.toString(),
      dotColor.rgb.g.toString(),
      dotColor.rgb.b.toString(),
    ]);
  }, [dotColor]);

  const onSwapColorType = React.useCallback(() => {
    if (inputType === 'HEX') {
      setInputType('HSL');
    } else if (inputType === 'HSL') {
      setInputType('RGB');
    } else if (inputType === 'RGB') {
      setInputType('HEX');
    }
  }, [inputType]);

  const handleColorInputChange = (
    type: 'HSL' | 'HEX' | 'RGB',
    part: string,
    value: string,
  ) => {
    let color;

    if (type === 'HEX') {
      color = ColorValue.fromString(value);
      if (color.tbgr === 0 && value != '#000' && value != '#000000') {
        // Check for invalid input
        setHexInput(value);
        return;
      }
    }

    if (type === 'HSL') {
      if (part === 'h') {
        color = ColorValue.fromHSL({
          h: Number(value),
          s: dotColor.hsl.s,
          l: dotColor.hsl.l,
        });
      } else if (part === 's') {
        color = ColorValue.fromHSL({
          h: dotColor.hsl.h,
          s: Number(value),
          l: dotColor.hsl.l,
        });
      } else if (part === 'l') {
        color = ColorValue.fromHSL({
          h: dotColor.hsl.h,
          s: dotColor.hsl.l,
          l: Number(value),
        });
      }
    }

    if (type === 'RGB') {
      if (part === 'r') {
        color = ColorValue.fromRGB({
          r: Number(value),
          g: dotColor.rgb.g,
          b: dotColor.rgb.b,
        });
      } else if (part === 'g') {
        color = ColorValue.fromRGB({
          r: dotColor.rgb.r,
          g: Number(value),
          b: dotColor.rgb.b,
        });
      } else if (part === 'b') {
        color = ColorValue.fromRGB({
          r: dotColor.rgb.r,
          g: dotColor.rgb.g,
          b: Number(value),
        });
      }
    }

    if (color) {
      updateColor(color, true);
    }
  };

  return (
    <div
      className={cx('iui-color-picker', className)}
      style={colorSquareStyle}
      {...rest}
    >
      {builderProps && (
        <div className='iui-color-selection-wrapper'>
          <div
            className='iui-color-field'
            ref={squareRef}
            onPointerDown={handlePointerDownOnSquare}
          >
            <div
              className='iui-color-dot'
              style={colorDotStyle}
              onPointerDown={() => {
                setColorDotActive(true);
              }}
              onKeyDown={handleColorDotKeyDown}
              tabIndex={0}
            />
          </div>

          <Slider
            minLabel=''
            maxLabel=''
            values={[sliderValue]}
            className='iui-hue-slider'
            trackDisplayMode='none'
            tooltipProps={() => {
              return { visible: false };
            }}
            onChange={onChangeHueCompleted}
            onUpdate={onChangeHue}
          />
        </div>
      )}
      {builderProps && inputType != 'NONE' && (
        <div>
          <div className='iui-color-picker-section-label'>{inputType}</div>
          <div className='iui-color-input'>
            <IconButton styleType={'borderless'} onClick={onSwapColorType}>
              <svg viewBox='0 0 16 16' className='iui-icon' aria-hidden='true'>
                <path d='m5 15-3.78125-3.5 3.78125-3.5v2h8v3h-8zm6-7 3.78125-3.5-3.78125-3.5v2h-8v3h8z' />
              </svg>
            </IconButton>
            {inputType === 'HEX' && (
              <div className='iui-color-input-fields'>
                <Input
                  size='small'
                  maxLength={7}
                  minLength={1}
                  placeholder='HEX'
                  value={hexInput}
                  onChange={(event) => {
                    setHexInput(event.target.value);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleColorInputChange('HEX', 'hex', hexInput);
                    }
                  }}
                  onBlur={() => {
                    handleColorInputChange('HEX', 'hex', hexInput);
                  }}
                />
              </div>
            )}
            {inputType === 'HSL' && (
              <div className='iui-color-input-fields'>
                <Input
                  size='small'
                  type='number'
                  min='0'
                  max='359'
                  placeholder='H'
                  value={hslInput[0]}
                  onChange={(event) => {
                    setHslInput([event.target.value, hslInput[1], hslInput[2]]);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleColorInputChange('HSL', 'h', hslInput[0]);
                    }
                  }}
                  onBlur={() => {
                    handleColorInputChange('HSL', 'h', hslInput[0]);
                  }}
                />
                <Input
                  size='small'
                  type='number'
                  min='0'
                  max='100'
                  placeholder='S'
                  value={hslInput[1]}
                  onChange={(event) => {
                    setHslInput([hslInput[0], event.target.value, hslInput[2]]);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleColorInputChange('HSL', 's', hslInput[1]);
                    }
                  }}
                  onBlur={() => {
                    handleColorInputChange('HSL', 's', hslInput[1]);
                  }}
                />
                <Input
                  size='small'
                  type='number'
                  min='0'
                  max='100'
                  placeholder='L'
                  value={hslInput[2]}
                  onChange={(event) => {
                    setHslInput([hslInput[0], hslInput[1], event.target.value]);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleColorInputChange('HSL', 'l', hslInput[2]);
                    }
                  }}
                  onBlur={() => {
                    handleColorInputChange('HSL', 'l', hslInput[2]);
                  }}
                />
              </div>
            )}
            {inputType === 'RGB' && (
              <div className='iui-color-input-fields'>
                <Input
                  size='small'
                  type='number'
                  min='0'
                  max='255'
                  placeholder='R'
                  value={rgbInput[0]}
                  onChange={(event) => {
                    setRgbInput([event.target.value, rgbInput[1], rgbInput[2]]);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleColorInputChange('RGB', 'r', rgbInput[0]);
                    }
                  }}
                  onBlur={() => {
                    handleColorInputChange('RGB', 'r', rgbInput[0]);
                  }}
                />
                <Input
                  size='small'
                  type='number'
                  min='0'
                  max='255'
                  placeholder='G'
                  value={rgbInput[1]}
                  onChange={(event) => {
                    setRgbInput([rgbInput[0], event.target.value, rgbInput[2]]);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleColorInputChange('RGB', 'g', rgbInput[1]);
                    }
                  }}
                  onBlur={() => {
                    handleColorInputChange('RGB', 'g', rgbInput[1]);
                  }}
                />
                <Input
                  size='small'
                  type='number'
                  min='0'
                  max='255'
                  placeholder={'B'}
                  value={rgbInput[2]}
                  onChange={(event) => {
                    setRgbInput([rgbInput[0], rgbInput[1], event.target.value]);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleColorInputChange('RGB', 'b', rgbInput[2]);
                    }
                  }}
                  onBlur={() => {
                    handleColorInputChange('RGB', 'b', rgbInput[2]);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
      {paletteProps && (
        <div>
          {paletteProps.colorPaletteTitle && (
            <div className='iui-color-picker-section-label'>
              {paletteProps.colorPaletteTitle}
            </div>
          )}
          <div
            className='iui-color-palette'
            onKeyDown={handleKeyDown}
            ref={ref}
          >
            {paletteProps.colors?.map((color, index) => {
              return (
                <ColorSwatch
                  key={index}
                  color={color}
                  onClick={() => {
                    if (typeof color === 'string') {
                      onChangeCompleted?.(ColorValue.fromString(color));
                      // TODO: Fix this
                      // } else if (color.type === HSVColor) {
                      //   onChangeCompleted(ColorValue.fromHSL(color));
                      setActiveColor(ColorValue.fromString(color));
                    }
                  }}
                  isActive={
                    typeof color === 'string'
                      ? ColorValue.fromString(color).toHslString() ===
                        activeColor?.toHslString()
                      : false
                  }
                />
              );
            })}
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
