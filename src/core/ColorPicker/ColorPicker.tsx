/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/color-picker.css';
import { CommonProps } from '../utils/props';
import cx from 'classnames';

export const DefaultColors = [
  { color: '#FFFFFF', name: 'WHITE' },
  { color: '#5A6973', name: 'GREY' },
  { color: '#00121D', name: 'KURETAKE BLACK MANGA' },
  { color: '#002A44', name: 'RHAPSODY IN BLUE' },
  { color: '#00426B', name: 'DARK IMPERIAL BLUE' },
  { color: '#005A92', name: 'JETSKI RACE' },
  { color: '#0073BA', name: 'FRENCH BLUE' },
  { color: '#008BE1', name: 'BLUE COLA' },
  { color: '#30B0FF', name: 'FANTASY CONSOLE SKY' },
  { color: '#58BFFF', name: 'HELLO SUMMER' },
  { color: '#7FCEFF', name: 'CHROMIS DAMSEL BLUE' },
  { color: '#A6DDFF', name: 'DROPLET' },
  { color: '#CDECFF', name: 'LUCID DREAMS' },
  { color: '#E5F5FD', name: 'KODAMA WHITE' },
  { color: '#010200', name: 'REGISTRATION BLACK' },
  { color: '#122306', name: 'YUZU SOY' },
  { color: '#23450b', name: 'FOREST GREEN' },
  { color: '#346711', name: 'TATZELWURM GREEN' },
  { color: '#458816', name: 'CHLOROPHYLL' },
  { color: '#56AA1C', name: 'PLASTIC PINES' },
  { color: '#5FBB1F', name: 'FIELD GREEN' },
  { color: '#67CC22', name: 'GREEN HIGH' },
  { color: '#91E458', name: 'LILLIPUTIAN LIME' },
  { color: '#B2EC8B', name: 'GREEN DAY' },
  { color: '#D4F4BD', name: 'TEA GREEN' },
  { color: '#EEF6E8', name: 'VERDE PASTEL' },
  { color: '#9BA5AF', name: 'SERYI GREY' },
  { color: '#CF0000', name: 'RED EPIPHYLLUM' },
  { color: '#FF6300', name: 'SAFETY ORANGE' },
  { color: '#FFC335', name: 'RISE-N-SHINE' },
];

export type ColorPickerProps = {
  /**
   * Color Swatches that will be added within the color palette.
   * Recommended to use `ColorSwatch` components.
   */
  children?: React.ReactNode;
} & Omit<CommonProps, 'title'>;

export const ColorPicker = (props: ColorPickerProps) => {
  const { children, className, ...rest } = props;

  useTheme();

  const ref = React.useRef<HTMLDivElement>(null);
  const [focusedColor, setFocusedColor] = React.useState(-1);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const colorSwatches = ref.current?.querySelectorAll('.iui-color-swatch');
    if (!colorSwatches?.length) {
      return;
    }

    let currentIndex = -1;
    if (focusedColor == -1) {
      // FocusedColor hasn't been set yet, find the active color index
      for (let i = 0; i < colorSwatches.length; i++) {
        const element = colorSwatches[i] as HTMLElement;
        if (element.tabIndex == 0) {
          currentIndex = i;
          break;
        }
      }
    } else {
      currentIndex = focusedColor;
    }

    const currentColor = colorSwatches[currentIndex] as HTMLElement;
    let newIndex = -1;

    switch (event.key) {
      case 'ArrowDown':
        // Look for next ColorSwatch with same offsetLeft value
        for (let i = currentIndex + 1; i < colorSwatches.length; i++) {
          const element = colorSwatches[i] as HTMLElement;
          if (element.offsetLeft == currentColor.offsetLeft) {
            newIndex = i;
            break;
          }
        }
        break;
      case 'ArrowUp':
        // Look backwards for next ColorSwatch with same offsetLeft value
        for (let i = currentIndex - 1; i >= 0; i--) {
          const element = colorSwatches[i] as HTMLElement;
          if (element.offsetLeft == currentColor.offsetLeft) {
            newIndex = i;
            break;
          }
        }
        break;
      case 'ArrowLeft':
        newIndex = currentIndex - 1;
        break;
      case 'ArrowRight':
        newIndex = currentIndex + 1;
        break;
      case 'Enter':
      case ' ':
      case 'Spacebar':
        const element = colorSwatches[currentIndex] as HTMLElement;
        element?.click();
        event.preventDefault();
        return;
    }
    if (newIndex < colorSwatches.length && newIndex >= 0) {
      setFocusedColor(newIndex);
      const element = colorSwatches[newIndex] as HTMLElement;
      element?.focus();
      event.preventDefault();
    }
  };

  return (
    <div className={cx('iui-color-picker', className)} {...rest}>
      <div className='iui-color-palette' onKeyDown={handleKeyDown} ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default ColorPicker;
