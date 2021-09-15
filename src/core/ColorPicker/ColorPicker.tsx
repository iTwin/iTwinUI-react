/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React, { ReactNode } from 'react';
import { useTheme } from '../utils/hooks/useTheme';
import Color from './Color';
import cx from 'classnames';
import '@itwin/itwinui-css/css/color-picker.css';

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
   * List of colors to show in color palette
   * Can pass in strings of the color values for simple input or a list of Colors to customize onColorClick handler etc.
   */
  colors?: ReactNode[];
  /**
   * Style of the color picker - basic or advanced.
   * @default 'basic'
   */
  type?: 'basic' | 'advanced';
  /**
   * Index of the selected color on the color palette.
   */
  activeColorIndex?: number;
  /**
   * Handler for clicking a color
   * This will be applied to all colors in the palette unless specifically passed in to a specific color in the colors list
   */
  onColorClicked?: (index: number) => void;
  /**
   * Any custom nodes that will be added within the color palette
   */
  children?: React.ReactNode;
};

export const ColorPicker = (props: ColorPickerProps) => {
  const {
    colors,
    type = 'basic',
    activeColorIndex,
    onColorClicked,
    children,
    ...rest
  } = props;

  useTheme();

  // Set active color swatch
  const [currentActiveIndex, setCurrentActiveIndex] = React.useState(
    activeColorIndex,
  );
  const onColorChanged = (index: number) => {
    setCurrentActiveIndex(index);
  };

  return (
    <div
      className={cx('iui-color-picker', {
        [`iui-${type}`]: type !== 'basic',
      })}
      {...rest}
    >
      <div className='iui-color-palette'>
        {colors &&
          colors.length > 0 &&
          colors.map((color, index) => {
            const onClick = () => {
              if (onColorClicked != null) {
                onColorClicked(index);
              }
              onColorChanged(index);
            };
            if (typeof color === 'string') {
              return (
                <Color
                  key={index}
                  color={color}
                  onColorClicked={onClick}
                  isActive={index === currentActiveIndex}
                />
              );
            } else {
              {
                return React.isValidElement(color)
                  ? React.cloneElement(color, {
                      // Use the same onClick handler for all colors in palette unless a custom handler was passed in to specific color
                      onColorClicked: color.props['onColorClicked']
                        ? color.props['onColorClicked']
                        : onClick,
                      isActive: index === currentActiveIndex,
                    })
                  : color;
              }
            }
          })}
        {children}
      </div>
    </div>
  );
};

export default ColorPicker;
