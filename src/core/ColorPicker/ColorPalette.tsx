/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import {
  ColorType,
  ColorValue,
  CommonProps,
  getFocusableElements,
  useMergedRefs,
  useTheme,
} from '../utils';
import { getColorValue } from './ColorPicker';
import { ColorSwatch } from './ColorSwatch';
import { useColorPickerContext } from './ColorPickerContext';
import '@itwin/itwinui-css/css/color-picker.css';

export type ColorPaletteProps = {
  /**
   * Label shown above the palette.
   */
  label?: React.ReactNode;
  /**
   * List of colors shown as swatches in the palette.
   */
  colors?: Array<ColorType | ColorValue>;
  /**
   * Should the first active or enabled child be automatically focused?
   * @default false
   */
  setFocus?: boolean;
  /**
   * Pass any custom swatches as children.
   */
  children?: React.ReactNode;
} & Omit<CommonProps, 'title'>;

/**
 * `ColorPalette` is used to show a group of `ColorSwatch` components.
 * @example
 * <ColorPalette colors={['#ffffff', '#000000']} />
 * @example
 * <ColorPalette>
 *   <ColorSwatch color='#ffffff' />
 *   <ColorSwatch color='#000000' />
 *   // ...
 * </ColorPalette>
 */
export const ColorPalette = React.forwardRef(
  (props: ColorPaletteProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      setFocus = false,
      colors,
      label,
      className,
      children,
      ...rest
    } = props;

    useTheme();

    const {
      activeColor,
      setActiveColor,
      onChangeComplete,
    } = useColorPickerContext();

    const [focusedIndex, setFocusedIndex] = React.useState<number>();

    // callback ref to set tabindex=0 on first child if none of the swatches are tabbable
    const setDefaultTabIndex = (el: HTMLDivElement) => {
      if (el && !el.querySelector('[tabindex="0"]')) {
        el.firstElementChild?.setAttribute('tabindex', '0');
      }
    };

    const refs = useMergedRefs(ref, setDefaultTabIndex);
    const paletteRef = React.useRef<HTMLDivElement>(null);

    // Color palette arrow key navigation
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      const swatches = getFocusableElements(
        paletteRef.current,
      ) as HTMLElement[];

      if (!swatches.length) {
        return;
      }

      const currentIndex = swatches.findIndex(
        (swatch) => swatch === paletteRef.current?.ownerDocument.activeElement,
      );
      if (currentIndex < 0) {
        return;
      }
      let newIndex = -1;

      switch (event.key) {
        case 'ArrowDown': {
          // Look for next ColorSwatch with same offsetLeft value
          newIndex = swatches.findIndex(
            (swatch, index) =>
              index > currentIndex &&
              swatch.offsetLeft === swatches[currentIndex].offsetLeft,
          );
          break;
        }
        case 'ArrowUp': {
          // Look backwards for next ColorSwatch with same offsetLeft value
          for (let i = currentIndex - 1; i >= 0; i--) {
            if (swatches[i].offsetLeft === swatches[currentIndex].offsetLeft) {
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
          newIndex = Math.min(currentIndex + 1, swatches.length - 1);
          break;
        case 'Enter':
        case ' ':
        case 'Spacebar':
          swatches[currentIndex].click();
          event.preventDefault();
          return;
      }

      if (newIndex >= 0 && newIndex < swatches.length) {
        setFocusedIndex(newIndex);
        event.preventDefault();
      }
    };

    // colorSwatches may be supplied as children which requires looking through DOM
    React.useEffect(() => {
      const swatches = getFocusableElements(
        paletteRef.current,
      ) as HTMLElement[];

      if (focusedIndex != null) {
        swatches[focusedIndex]?.focus();
        return;
      }

      if (setFocus) {
        const selectedIndex = swatches.findIndex(
          (swatch) =>
            swatch.tabIndex === 0 ||
            swatch.getAttribute('aria-selected') === 'true',
        );
        setFocusedIndex(selectedIndex > -1 ? selectedIndex : undefined);
      }
    }, [focusedIndex, setFocus]);

    return (
      <div
        className={cx('iui-color-palette-wrapper', className)}
        ref={refs}
        {...rest}
      >
        {label && <div className='iui-color-picker-section-label'>{label}</div>}
        <div
          className='iui-color-palette'
          onKeyDown={handleKeyDown}
          ref={paletteRef}
        >
          {children}
          {colors &&
            colors.map((_color, index) => {
              const color = getColorValue(_color);
              return (
                <ColorSwatch
                  key={index}
                  color={color}
                  onClick={(event) => {
                    event.preventDefault();
                    onChangeComplete?.(color);
                    setActiveColor(color);
                  }}
                  isActive={color.equals(activeColor)}
                />
              );
            })}
        </div>
      </div>
    );
  },
);

export default ColorPalette;
