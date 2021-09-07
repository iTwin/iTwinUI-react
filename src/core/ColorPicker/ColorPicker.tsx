/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';
import Color from './Color';
import cx from 'classnames';
import 'D:/itwinUI/iTwinUI/lib/css/color-picker.css';
import { getWindow } from '../utils/common';
import SvgAddCircular from '@itwin/itwinui-icons-react/cjs/icons/AddCircular';

export type ColorPickerProps = {
  /**
   * List of colors to show in color palette
   */
  colors?: string[];
  /**
   * Style of the color picker.
   * @default 'basic'
   */
  type?: 'basic' | 'advanced';
};

export const ColorPicker = (props: ColorPickerProps) => {
  const { colors, type, ...rest } = props;

  useTheme();
  const selectedColor = '#010200';
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
          colors.map((color, index) => <Color key={index} color={color} />)}
      </div>
    </div>
  );
};

export default ColorPicker;
