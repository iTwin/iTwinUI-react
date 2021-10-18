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
import { ColorValue } from '../utils/color/ColorValue';
import { Slider } from '../Slider';
import ColorSwatch from './ColorSwatch';
import { IconButton } from '../Buttons';
import { Input } from '../Input';

// cspell: ignore borderless

const getVerticalPercentageOfRectangle = (rect: DOMRect, pointer: number) => {
  const position = getBoundedValue(pointer, rect.top, rect.bottom);
  return ((position - rect.top) / rect.height) * 100;
};
const getHorizontalPercentageOfRectangle = (rect: DOMRect, pointer: number) => {
  const position = getBoundedValue(pointer, rect.left, rect.right);
  return ((position - rect.left) / rect.width) * 100;
};

export type ColorBuilderProps = {
  /**
   * Show HSL, RGB, or HEX input values.
   * Set to NONE to use advanced color builder without showing color input
   */
  defaultColorInputType?: 'HSL' | 'RGB' | 'HEX' | 'NONE';
};

export type ColorPaletteProps = {
  /** Available color values to show in palette */
  colors?: ColorValue[];
  /** Title shown above color palette (NOTE: do not supply a default or you will be responsible for localizing it.) */
  colorPaletteTitle?: string;
};

export type ColorPickerProps = {
  children?: React.ReactNode;
  /**
   * The selected color to be shown as the initial color in advanced color picker.
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
 * <ColorPicker>
 *   <ColorSwatch key={1} color={ColorValue.create('#D4F4BD')} onClick={onColorClick} />
 *   <ColorSwatch key={2} color={ColorValue.create('#EEF6E8')} onClick={onColorClick} />
 *   <ColorSwatch key={3} color={ColorValue.create('#9BA5AF')} onClick={onColorClick} />
 *   <ColorSwatch key={4} color={ColorValue.create('#002A44')} onClick={onColorClick} />
 * </ColorPicker>
 */
/**
 * Advanced ColorPicker component to display a palette of ColorSwatches and color customization options
 * @example
 * <ColorPicker type='advanced' selectedColor={selectedColor} onSelectionChanged={onColorChanged}>
 *   <ColorSwatch key={1} color={ColorValue.create('#D4F4BD')} onClick={onColorClick} />
 *   <ColorSwatch key={2} color={ColorValue.create('#EEF6E8')} onClick={onColorClick} />
 *   <ColorSwatch key={3} color={ColorValue.create('#9BA5AF')} onClick={onColorClick} />
 *   <ColorSwatch key={4} color={ColorValue.create('#002A44')} onClick={onColorClick} />
 * </ColorPicker>
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

  const [focusedColorIndex, setFocusedColorIndex] = React.useState<
    number | null
  >();
  const [activeColor, setActiveColor] = React.useState<ColorValue>(
    () => selectedColor ?? ColorValue.create('#00121D'),
  );
  const [inputType, setInputType] = React.useState<
    'HEX' | 'HSL' | 'RGB' | 'NONE'
  >(builderProps?.defaultColorInputType ?? 'NONE');

  const [hsvColor, setHsvColor] = React.useState(() => activeColor.toHsv());

  React.useEffect(() => {
    const newColor = selectedColor ?? ColorValue.create('#00121D');
    setActiveColor(newColor);
    setHsvColor(newColor.toHsv());
  }, [selectedColor]);

  // colorSwatches may be supplied as children which requires looking through DOM
  React.useEffect(() => {
    const colorSwatches = Array.from<HTMLElement>(
      ref.current?.querySelectorAll('.iui-color-swatch, .iui-button') ?? [],
    );
    if (focusedColorIndex != null) {
      colorSwatches[focusedColorIndex]?.focus();
      return;
    }
    const selectedIndex = colorSwatches.findIndex(
      (swatch) =>
        swatch.tabIndex === 0 || swatch.getAttribute('aria-selected') == 'true',
    );
    setFocusedColorIndex(selectedIndex > -1 ? selectedIndex : null);
  }, [focusedColorIndex]);

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
            colorSwatches[i].offsetLeft ==
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
      setFocusedColorIndex(newIndex);
      event.preventDefault();
    }
  };

  const hueSliderColor = React.useMemo(
    () => ColorValue.create({ ...hsvColor, s: 100, v: 100 }),
    [hsvColor],
  );

  const sliderValue = React.useMemo(() => Math.round(hsvColor.h / 3.59), [
    hsvColor,
  ]);

  const dotColorString = React.useMemo(
    () => ColorValue.create(hsvColor).toHexString(),
    [hsvColor],
  );
  const [activeDotIndex, setActiveDotIndex] = React.useState<
    number | undefined
  >(undefined);

  const hueColorString = hueSliderColor.toHexString();
  const colorSquareStyle = getWindow()?.CSS?.supports?.(
    `--hue: ${hueColorString}`,
    `--selected-color: ${dotColorString}`,
  )
    ? {
        '--hue': hueColorString,
        '--selected-color': dotColorString,
      }
    : { backgroundColor: dotColorString };

  const squareTop = 100 - hsvColor.v;
  const squareLeft = hsvColor.s;

  const colorDotStyle = getWindow()?.CSS?.supports?.(
    `--top: ${squareTop.toString()}%`,
    `--left: ${squareLeft.toString()}%`,
  )
    ? {
        '--top': squareTop.toString() + '%',
        '--left': squareLeft.toString() + '%',
      }
    : {
        backgroundColor: dotColorString,
        top: squareTop.toString() + '%',
        left: squareLeft.toString() + '%',
      };

  // Update slider change
  const updateSlider = React.useCallback(
    (huePercent: number, selectionChanged: boolean) => {
      const hue = Math.round(huePercent * 3.59);
      const newDotColor = ColorValue.fromHSV({
        h: hue,
        s: hsvColor.s,
        v: hsvColor.v,
      });
      setHsvColor(newDotColor.toHsv());

      // Only update selected color when dragging is done
      if (selectionChanged) {
        onChangeCompleted?.(newDotColor);
      } else {
        onChange?.(newDotColor);
      }
    },
    [hsvColor.s, hsvColor.v, onChange, onChangeCompleted],
  );

  const onChangeColor = React.useCallback(
    (values: ReadonlyArray<number>) => {
      updateSlider(values[0], false);
    },
    [updateSlider],
  );

  const onChangeColorCompleted = React.useCallback(
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
        h: hsvColor.h,
        s: x,
        v: 100 - y,
      });
      setHsvColor(newColor.toHsv());
      if (selectionChanged) {
        onChangeCompleted?.(newColor);
      }
    },
    [hsvColor.h, onChangeCompleted],
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
      setActiveDotIndex(undefined);
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

  // Handle swapping color input type
  const onSwapColorType = React.useCallback(() => {
    if (inputType == 'HEX') {
      setInputType('HSL');
    } else if (inputType == 'HSL') {
      setInputType('RGB');
    } else if (inputType == 'RGB') {
      setInputType('HEX');
    }
  }, [inputType]);

  const colorHexString = ColorValue.create(hsvColor).toHexString();
  const hslColor = ColorValue.create(hsvColor).toHsl();
  const rgbColor = ColorValue.create(hsvColor).toRgb();

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
                setActiveDotIndex(1);
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
            onChange={onChangeColorCompleted}
            onUpdate={onChangeColor}
          />
        </div>
      )}
      {builderProps && inputType != 'NONE' && (
        <div className='iui-color-picker-input-container'>
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
                  type={'small'}
                  placeholder={'HEX'}
                  value={colorHexString}
                />
              </div>
            )}
            {inputType === 'HSL' && (
              <div className='iui-color-input-fields'>
                <Input type={'small'} placeholder={'H'} value={hslColor.h} />
                <Input type={'small'} placeholder={'S'} value={hslColor.s} />
                <Input type={'small'} placeholder={'L'} value={hslColor.l} />
              </div>
            )}
            {inputType == 'RGB' && (
              <div className='iui-color-input-fields'>
                <Input type={'small'} placeholder={'R'} value={rgbColor.r} />
                <Input type={'small'} placeholder={'G'} value={rgbColor.g} />
                <Input type={'small'} placeholder={'B'} value={rgbColor.b} />
              </div>
            )}
          </div>
        </div>
      )}
      {paletteProps && (
        <div className='iui-color-picker-palette-container'>
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
                    onChangeCompleted?.(color);
                    setActiveColor(color);
                  }}
                  isActive={color.equals(activeColor)}
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
