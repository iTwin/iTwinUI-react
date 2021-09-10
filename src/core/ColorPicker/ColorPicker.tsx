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
};

export const ColorPicker = (props: ColorPickerProps) => {
  const {
    colors,
    type = 'basic',
    activeColorIndex,
    onColorClicked,
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
      </div>
    </div>
  );
};

export default ColorPicker;
