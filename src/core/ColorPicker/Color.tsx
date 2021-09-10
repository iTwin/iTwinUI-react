/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';
import { getWindow } from '../utils/common';
import { CommonProps } from '../utils/props';
import cx from 'classnames';
import '@itwin/itwinui-css/css/color-picker.css';

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
  /**
   * Handler for clicking a color
   */
  onColorClicked?: () => void;
  /**
   * Is color selected
   */
  isActive?: boolean;
} & CommonProps;

export const Color = (props: ColorProps) => {
  const { color, style, onColorClicked, isActive, ...rest } = props;

  useTheme();

  const _style =
    color && getWindow()?.CSS?.supports?.(`--swatch-color: ${color}`)
      ? { '--swatch-color': getColorValue(color), ...style }
      : { backgroundColor: getColorValue(color), ...style };

  return (
    <span
      className={cx('iui-color-swatch', { [`iui-active`]: isActive })}
      style={_style}
      onClick={onColorClicked}
      tabIndex={0}
      {...rest}
    />
  );
};

export default Color;
