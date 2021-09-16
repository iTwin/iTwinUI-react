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

export type ColorProps = {
  /**
   * Color code.
   */
  color: string;
  /**
   * Is color selected.
   */
  isActive?: boolean;
  /**
   * User friendly color name.
   */
  name?: string;
  /**
   * Tooltip ref prop.
   */
  tooltipRefProp?: React.ComponentPropsWithRef<'span'>;
} & CommonProps &
  React.ComponentPropsWithRef<'span'>;

export const Color = (props: ColorProps) => {
  const { color, style, onClick, isActive, tooltipRefProp, ...rest } = props;

  useTheme();

  const _style =
    color && getWindow()?.CSS?.supports?.(`--swatch-color: ${color}`)
      ? { '--swatch-color': color, ...style }
      : { backgroundColor: color, ...style };

  return (
    <span
      className={cx('iui-color-swatch', { [`iui-active`]: isActive })}
      style={_style}
      onClick={onClick}
      tabIndex={0}
      {...tooltipRefProp}
      {...rest}
    />
  );
};

export default Color;
