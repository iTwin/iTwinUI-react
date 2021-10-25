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
  getTabbableElements,
} from '../utils';
import cx from 'classnames';
import { Slider } from '../Slider';
import { ColorSwatch } from './ColorSwatch';
import { ColorInputPanel, ColorInputPanelProps } from './ColorInputPanel';
import { ColorPalette } from './ColorPalette';

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

export type ColorBuilderProps = Partial<
  Pick<ColorInputPanelProps, 'defaultColorFormat' | 'allowedColorFormats'>
>;

export type ColorPaletteProps = {
  /**
   * Available color values to show in palette.
   */
  colors: Array<ColorType | ColorValue>;
  /**
   * Label shown above color palette.
   */
  colorPaletteTitle?: string;
};

export type ColorPickerProps = {
  /**
   * Content shown below the color builder and color palette.
   */
  children?: React.ReactNode;
  /**
   * The selected color within color picker.
   */
  selectedColor?: ColorType | ColorValue;
  /**
   * Callback fired when the color value is internally updated during
   * operations like dragging a thumb. Use this callback with caution as a
   * high-volume of updates will occur when dragging.
   */
  onChange?: (color: ColorValue) => void;
  /**
   * Callback fired when selectedColor is done changing.
   * This can be on pointerUp or keyUp when thumb is done dragging,
   * or when user clicks on color builder components, or when user clicks on color swatch.
   */
  onChangeCompleted?: (color: ColorValue) => void;
  /**
   * Props used to determine what advanced color picker components to display
   * to allow user to build their own color.
   *
   * If not specified, the color builder and inputs will not be shown.
   */
  builderProps?: ColorBuilderProps;
  /**
   * Props used to display a palette of colors
   * If used in combination with builderProps then the palette is shown below the builder components.
   *
   * If not specified, the color palette will not be shown.
   */
  paletteProps?: ColorPaletteProps;
  /**
   * If true, the first focusable element in the color picker will automatically be focused.
   * @default false
   */
  setFocus?: boolean;
} & Omit<CommonProps, 'title'>;

/**
 * ColorPicker to display color builder options, color inputs, and a palette of ColorSwatches.
 * @example
 * <ColorPicker
 *    onChangeCompleted={onColorChanged}
 *    selectedColor={activeColor}
 *    paletteProps={{ colors: ['#FFFFFF', '#5A6973'] }}
 * />
 * @example
 * <ColorPicker
 *   onChangeCompleted={onColorChanged}
 *   selectedColor={selectedColor}
 *   paletteProps={{
 *     colors: ['#FFFFFF', '#5A6973'],
 *     colorPaletteTitle: 'Saved Colors',
 *   }}
 *   builderProps={{
 *     defaultColorFormat: 'hsl',
 *   }}
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
    setFocus = false,
    ...rest
  } = props;

  useTheme();

  const ref = React.useRef<HTMLDivElement>(null);

  // set focus on the first tabbable element
  React.useEffect(() => {
    if (ref.current && setFocus) {
      const tabbableElements = getTabbableElements(ref.current);
      (tabbableElements[0] as HTMLElement).focus();
    }
  }, [setFocus]);

  const inColor = React.useMemo(() => getColorValue(selectedColor), [
    selectedColor,
  ]);
  const activeColorTbgr = React.useRef(inColor.toTbgr());

  const [activeColor, setActiveColor] = React.useState<ColorValue>(inColor); // Color of colorDot or active ColorSwatch
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
    if (inColor.toTbgr() !== activeColorTbgr.current) {
      activeColorTbgr.current = inColor.toTbgr();
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
        onChangeCompleted?.(newActiveColor);
      } else {
        onChange?.(newActiveColor);
      }

      activeColorTbgr.current = newActiveColor.toTbgr();

      // this converts it to store in tbgr
      setActiveColor(newActiveColor);
    },
    [onChange, onChangeCompleted],
  );

  // Set values for slider
  const hueSliderColor = React.useMemo(
    () => ColorValue.create({ h: hsvColor.h, s: 100, v: 100 }),
    [hsvColor],
  );
  const sliderValue = React.useMemo(() => hsvColor.h, [hsvColor]);

  // Set values for color square and color dot
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
    : { backgroundColor: hueColorString };

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
      const hue = Math.round(huePercent);
      const newHsvColor = {
        h: hue,
        s: hsvColor.s,
        v: hsvColor.v,
      };
      applyHsvColorChange(newHsvColor, selectionChanged);
    },
    [applyHsvColorChange, hsvColor.s, hsvColor.v],
  );

  // Update Color field square change
  const squareRef = React.useRef<HTMLDivElement>(null);
  const colorDotRef = React.useRef<HTMLDivElement>(null);

  const updateColorDot = React.useCallback(
    (x: number, y: number, selectionChanged: boolean) => {
      const newHsvColor: HsvColor = {
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

        if (callbackType === 'onChange') {
          updateColorDot(percentX, percentY, true);
        } else {
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

  const handleSquarePointerLeave = React.useCallback(
    (event: PointerEvent): void => {
      updateSquareValue(event, 'onChange');
      setColorDotActive(false);
    },
    [updateSquareValue],
  );
  useEventListener(
    'pointerleave',
    handleSquarePointerLeave,
    ref.current?.ownerDocument,
  );

  const keysPressed = React.useRef<Record<string, boolean>>({}); // keep track of which keys are currently pressed

  // Arrow key navigation for color dot
  const handleColorDotKeyDown = (event: React.KeyboardEvent) => {
    let x = squareLeft;
    let y = squareTop;
    keysPressed.current[event.key] = true;
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
    }
  };

  const handleColorDotKeyUp = (event: React.KeyboardEvent) => {
    keysPressed.current[event.key] = false;
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        if (
          keysPressed.current['ArrowUp'] ||
          keysPressed.current['ArrowDown'] ||
          keysPressed.current['ArrowLeft'] ||
          keysPressed.current['ArrowRight']
        ) {
          return;
        }
        onChangeCompleted?.(ColorValue.create(hsvColor));
        break;
    }
  };

  return (
    <div
      className={cx('iui-color-picker', className)}
      style={colorSquareStyle}
      ref={ref}
      {...rest}
    >
      {builderProps && (
        <div className='iui-color-selection-wrapper'>
          <div
            className='iui-color-field'
            ref={squareRef}
            onPointerDown={(event: React.PointerEvent) => {
              event.preventDefault();
              updateSquareValue(event, 'onClick');
              setColorDotActive(true);
              colorDotRef.current?.focus();
            }}
          >
            <div
              className='iui-color-dot'
              style={colorDotStyle}
              onPointerDown={() => {
                setColorDotActive(true);
                colorDotRef.current?.focus();
              }}
              onKeyDown={handleColorDotKeyDown}
              onKeyUp={handleColorDotKeyUp}
              tabIndex={0}
              ref={colorDotRef}
            />
          </div>

          <Slider
            minLabel=''
            maxLabel=''
            values={[sliderValue]}
            className='iui-hue-slider'
            trackDisplayMode='none'
            tooltipProps={() => ({ visible: false })}
            onChange={(values) => {
              updateSlider(values[0], true);
            }}
            onUpdate={(values) => {
              updateSlider(values[0], false);
            }}
            min={0}
            max={359}
          />
        </div>
      )}
      {builderProps && builderProps.defaultColorFormat && (
        <ColorInputPanel
          activeColor={activeColor}
          activeHue={hsvColor.h}
          defaultColorFormat={builderProps?.defaultColorFormat}
          onChangeCompleted={onChangeCompleted}
          allowedColorFormats={builderProps?.allowedColorFormats}
        />
      )}
      {paletteProps && (
        <div>
          {paletteProps.colorPaletteTitle && (
            <div className='iui-color-picker-section-label'>
              {paletteProps.colorPaletteTitle}
            </div>
          )}
          <ColorPalette>
            {paletteProps.colors.map((inColor, index) => {
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
          </ColorPalette>
        </div>
      )}
      {children}
    </div>
  );
};

export default ColorPicker;
