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
  ColorType,
  ColorValue,
  HsvColor,
} from '../utils';
import cx from 'classnames';
import { Slider } from '../Slider';
import { ColorSwatch } from './ColorSwatch';
import { ColorInputPanel, ColorInputPanelProps } from './ColorInputPanel';

export const getColorValue = (color: ColorType | ColorValue | undefined) => {
  if (color instanceof ColorValue) {
    return color;
  }
  return ColorValue.create(color);
};

const getVerticalPercentageOfRectangle = (rect: DOMRect, pointer: number) => {
  const position = getBoundedValue(pointer, rect.top, rect.bottom);
  return ((position - rect.top) / rect.height) * 100;
};
const getHorizontalPercentageOfRectangle = (rect: DOMRect, pointer: number) => {
  const position = getBoundedValue(pointer, rect.left, rect.right);
  return ((position - rect.left) / rect.width) * 100;
};

export type ColorBuilderProps = Pick<
  ColorInputPanelProps,
  'defaultColorFormat' | 'allowedColorFormats' | 'onColorFormatChanged'
>;

export type ColorPaletteProps = {
  /**
   * Available color values to show in palette.
   */
  colors?: Array<ColorType | ColorValue>;
  /**
   * Title shown above color palette.
   */
  colorPaletteTitle?: string;
};

export type ColorPickerProps = {
  children?: React.ReactNode;
  /**
   * The selected color to be shown as the initial color in advanced color picker.
   */
  selectedColor?: ColorType | ColorValue;
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
  onChangeCompleted: (color: ColorValue) => void;
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
 * Basic ColorPicker to display a palette of ColorSwatches
 * @example
 * <ColorPicker
 *    onChangeCompleted={onColorChanged}
 *    selectedColor={activeColor}
 *    paletteProps={{ colors: ['#FFFFFF', '#5A6973'] }}
 * />
 */
/**
 * Advanced ColorPicker to display color builder options, color input, and a palette of ColorSwatches
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

  const [focusedColorIndex, setFocusedColorIndex] = React.useState<
    number | null
  >();

  const inColor = React.useMemo(() => getColorValue(selectedColor), [
    selectedColor,
  ]);
  const rgbValueOfActiveColor = React.useRef(inColor.toTbgr());

  const [activeColor, setActiveColor] = React.useState<ColorValue>(inColor);
  React.useEffect(() => {
    setActiveColor(inColor);
  }, [inColor]);

  const [hsvColor, setHsvColor] = React.useState(() =>
    activeColor.toHsvColor(),
  );

  // The following code is used to preserve the Hue after initial mount. If the current HSV value produces the same rgb value
  // as the selectedColor prop then leave the HSV color unchanged. This prevents the jumping of HUE as the s/v values are changed
  // by user moving the pointer.
  React.useEffect(() => {
    if (inColor.toTbgr() !== rgbValueOfActiveColor.current) {
      rgbValueOfActiveColor.current = inColor.toTbgr();
      setHsvColor(inColor.toHsvColor());
    }
  }, [inColor]);

  const applyHsvColorChange = React.useCallback(
    (newColor: HsvColor, selectionChanged: boolean) => {
      // save the HSV values
      setHsvColor(newColor);
      const newActiveColor = ColorValue.create(newColor);

      // Only update selected color when dragging is done
      if (selectionChanged) {
        onChangeCompleted(newActiveColor);
      } else {
        onChange?.(newActiveColor);
      }

      rgbValueOfActiveColor.current = newActiveColor.toTbgr();

      // this converts it to store in tbgr
      setActiveColor(newActiveColor);
    },
    [onChange, onChangeCompleted],
  );

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
        swatch.tabIndex === 0 ||
        swatch.getAttribute('aria-selected') === 'true',
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
      setFocusedColorIndex(newIndex);
      event.preventDefault();
    }
  };

  const hueSliderColor = React.useMemo(
    () => ColorValue.create({ h: hsvColor.h, s: 100, v: 100 }),
    [hsvColor],
  );

  const sliderValue = React.useMemo(() => Math.round(hsvColor.h / 3.59), [
    hsvColor,
  ]);

  const dotColorString = React.useMemo(() => activeColor.toHexString(), [
    activeColor,
  ]);
  const [colorDotActive, setColorDotActive] = React.useState(false);
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
      const newHsvColor = {
        h: hue,
        s: hsvColor.s,
        v: hsvColor.v,
      };
      applyHsvColorChange(newHsvColor, selectionChanged);
    },
    [applyHsvColorChange, hsvColor.s, hsvColor.v],
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
      const newHsvColor = {
        h: hsvColor.h,
        s: x,
        v: 100 - y,
      };
      applyHsvColorChange(newHsvColor, selectionChanged);
    },
    [applyHsvColorChange, hsvColor.h],
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
      {builderProps && builderProps.defaultColorFormat && (
        <ColorInputPanel
          activeColor={activeColor}
          activeHue={hsvColor.h}
          defaultColorFormat={builderProps?.defaultColorFormat}
          onColorFormatChanged={builderProps?.onColorFormatChanged}
          onChangeCompleted={onChangeCompleted}
        />
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
            {paletteProps.colors?.map((inColor, index) => {
              const color = getColorValue(inColor);
              return (
                <ColorSwatch
                  key={index}
                  color={color}
                  onClick={(event) => {
                    event.preventDefault();
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
