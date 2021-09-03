/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';
import Color from './Color';
import 'D:/itwinUI/iTwinUI/lib/css/color-picker.css';

export type ColorPickerProps = {
  /**
   * List of colors to show in color palette
   */
  colors: string[];
};

export const ColorPicker = (props: ColorPickerProps) => {
  const { colors, ...rest } = props;

  useTheme();

  return (
    <div className='iui-color-picker' {...rest}>
      <div className='iui-color-palette'>
        {colors.length > 0 &&
          colors.map((color, index) => <Color key={index} color={color} />)}
      </div>
    </div>
  );
};

export default ColorPicker;
