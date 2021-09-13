/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React, { ReactNode } from 'react';
import { useTheme } from '../utils/hooks/useTheme';
import Color from './Color';
import cx from 'classnames';
import '@itwin/itwinui-css/css/color-picker.css';
import { getWindow } from '../utils/common';
import SvgAddCircular from '@itwin/itwinui-icons-react/cjs/icons/AddCircular';

export const DefaultColors = [
  '#FFFFFF', // "WHITE"
  '#5A6973', // "GREY"
  '#00121D', // "KURETAKE BLACK MANGA"
  '#002A44', // "RHAPSODY IN BLUE
  '#00426B', // "DARK IMPERIAL BLUE"
  '#005A92', // "JETSKI RACE"
  '#0073BA', // "FRENCH BLUE"
  '#008BE1', // "BLUE COLA"
  '#30B0FF', // 'FANTASY CONSOLE SKY'
  '#58BFFF', // 'HELLO SUMMER'
  '#7FCEFF', // 'CHROMIS DAMSEL BLUE'
  '#A6DDFF', // 'DROPLET'
  '#CDECFF', // 'LUCID DREAMS'
  '#E5F5FD', // 'KODAMA WHITE'
  '#010200', // 'REGISTRATION BLACK'
  '#122306', // 'YUZU SOY'
  '#23450b', // 'FOREST GREEN'
  '#346711', // 'TATZELWURM GREEN'
  '#458816', // 'CHLOROPHYLL'
  '#56AA1C', // 'PLASTIC PINES'
  '#5FBB1F', // 'FIELD GREEN',
  '#67CC22', // 'GREEN HIGH',
  '#91E458', // 'LILLIPUTIAN LIME'
  '#B2EC8B', // 'GREEN DAY'
  '#D4F4BD', // 'TEA GREEN'
  '#EEF6E8', // 'VERDE PASTEL'
  '#9BA5AF', // 'SERYI GREY'
  '#CF0000', // 'RED EPIPHYLLUM'
  '#FF6300', // 'SAFETY ORANGE'
  '#FFC335', // 'RISE-N-SHINE'
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
  const selectedColor = '#010200';

  // Set active color swatch
  const [currentActiveIndex, setCurrentActiveIndex] = React.useState(
    activeColorIndex,
  );
  const onColorChanged = (index: number) => {
    setCurrentActiveIndex(index);
  };

  // Set style values for advanced color picker
  const top = '10%';
  const left = '10%';
  const colorGradientStyle = getWindow()?.CSS?.supports?.(
    `--color: ${selectedColor}`,
  )
    ? { '--color': selectedColor }
    : { backgroundColor: selectedColor };

  const colorDotStyle = getWindow()?.CSS?.supports?.(
    `--selected-color: ${selectedColor}`,
  )
    ? { '--selected-color': selectedColor, '--top': top, '--left': left }
    : { backgroundColor: selectedColor, top: top, left: left };

  const sliderColorDotStyle = getWindow()?.CSS?.supports?.(`--top: ${top}`)
    ? { '--top': top }
    : { top: top };

  return (
    <div
      className={cx('iui-color-picker', {
        [`iui-${type}`]: type !== 'basic',
      })}
      {...rest}
    >
      {type == 'advanced' && (
        <div className='iui-color-selection-wrapper'>
          <div className='iui-color-field' style={colorGradientStyle}>
            <div className='iui-color-dot' style={colorDotStyle} />
          </div>
          <div className='iui-color-slider'>
            <div
              className='iui-color-dot iui-white'
              style={sliderColorDotStyle}
            />
          </div>
        </div>
      )}

      {type == 'advanced' && (
        <div className='iui-saved-colors'>Saved Colors</div>
      )}

      <div className='iui-color-palette'>
        {type == 'advanced' && (
          <button className='iui-button iui-borderless'>
            <SvgAddCircular className='iui-icon' aria-hidden='true' />
          </button>
        )}
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
