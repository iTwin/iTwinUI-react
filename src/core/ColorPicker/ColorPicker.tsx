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
  <Color key={1} color='#FFFFFF' name='WHITE' />,
  <Color key={2} color='#5A6973' name='GREY' />,
  <Color key={3} color='#00121D' name='KURETAKE BLACK MANGA' />,
  <Color key={3} color='#002A44' name='RHAPSODY IN BLUE' />,
  <Color key={3} color='#00426B' name='DARK IMPERIAL BLUE' />,
  <Color key={3} color='#005A92' name='JETSKI RACE' />,
  <Color key={3} color='#0073BA' name='FRENCH BLUE' />,
  <Color key={3} color='#008BE1' name='BLUE COLA' />,
  <Color key={3} color='#30B0FF' name='FANTASY CONSOLE SKY' />,
  <Color key={3} color='#58BFFF' name='HELLO SUMMER' />,
  <Color key={3} color='#7FCEFF' name='CHROMIS DAMSEL BLUE' />,
  <Color key={3} color='#A6DDFF' name='DROPLET' />,
  <Color key={3} color='#CDECFF' name='LUCID DREAMS' />,
  <Color key={3} color='#E5F5FD' name='KODAMA WHITE' />,
  <Color key={3} color='#010200' name='REGISTRATION BLACK' />,
  <Color key={3} color='#122306' name='YUZU SOY' />,
  <Color key={3} color='#23450b' name='FOREST GREEN' />,
  <Color key={3} color='#346711' name='TATZELWURM GREEN' />,
  <Color key={3} color='#458816' name='CHLOROPHYLL' />,
  <Color key={3} color='#56AA1C' name='PLASTIC PINES' />,
  <Color key={3} color='#5FBB1F' name='FIELD GREEN' />,
  <Color key={3} color='#67CC22' name='GREEN HIGH' />,
  <Color key={3} color='#91E458' name='LILLIPUTIAN LIME' />,
  <Color key={3} color='#B2EC8B' name='GREEN DAY' />,
  <Color key={3} color='#D4F4BD' name='TEA GREEN' />,
  <Color key={3} color='#EEF6E8' name='VERDE PASTEL' />,
  <Color key={3} color='#9BA5AF' name='SERYI GREY' />,
  <Color key={3} color='#CF0000' name='RED EPIPHYLLUM' />,
  <Color key={3} color='#FF6300' name='SAFETY ORANGE' />,
  <Color key={3} color='#FFC335' name='RISE-N-SHINE' />,
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
