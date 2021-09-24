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

export type ColorSwatchProps = {
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
} & CommonProps &
  React.ComponentPropsWithRef<'span'>;

export const ColorSwatch = React.forwardRef<HTMLSpanElement, ColorSwatchProps>(
  (props, ref) => {
    const { color, style, onClick, isActive, ...rest } = props;

    useTheme();

    const _style =
      color && getWindow()?.CSS?.supports?.(`--swatch-color: ${color}`)
        ? { '--swatch-color': color, ...style }
        : { backgroundColor: color, ...style };

    return (
      <span
        className={cx('iui-color-swatch', { 'iui-active': isActive })}
        style={_style}
        onClick={onClick}
        tabIndex={isActive ? 0 : -1}
        aria-selected={isActive}
        ref={ref}
        {...rest}
      />
    );
  },
);

export default ColorSwatch;
