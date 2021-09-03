/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';
import { getWindow } from '../utils/common';
import { CommonProps } from '../utils/props';

import 'D:/itwinUI/iTwinUI/lib/css/color-picker.css';

const getColorValue = (color: ColorProps['color']) => {
  if (!color) {
    return '#FFF';
  }
  return color;
};

export type ColorProps = {
  /**
   * Color
   */
  color: string;
} & CommonProps;

export const Color = (props: ColorProps) => {
  const { color, style, ...rest } = props;

  useTheme();

  const _style =
    color && getWindow()?.CSS?.supports?.(`--swatch-color: ${color}`)
      ? { '--swatch-color': getColorValue(color), ...style }
      : { backgroundColor: getColorValue(color), ...style };

  return <span className='iui-color-swatch' style={_style} {...rest} />;
};

export default Color;
