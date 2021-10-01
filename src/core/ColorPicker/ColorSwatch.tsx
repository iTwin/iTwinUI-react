/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';
import { CommonProps } from '../utils/props';
import cx from 'classnames';
import '@itwin/itwinui-css/css/color-picker.css';
import { getWindow } from '../utils';

export type ColorSwatchProps = {
  /**
   * Color code.
   */
  color: string;
  /**
   * Is color selected.
   */
  isActive?: boolean;
} & CommonProps &
  React.ComponentPropsWithRef<'span'>;

/**
 * ColorSwatch component to display a color within a basic color picker.
 * @example
 * <ColorSwatch color='#23450b'  onClick={onClick}/>
 */
export const ColorSwatch = React.forwardRef<HTMLSpanElement, ColorSwatchProps>(
  (props, ref) => {
    const { color, style, onClick, isActive, className, ...rest } = props;

    useTheme();

    const _style =
      color && getWindow()?.CSS?.supports?.(`--swatch-color: ${color}`)
        ? { '--swatch-color': color, ...style }
        : { backgroundColor: color, ...style };

    return (
      <span
        className={cx(
          'iui-color-swatch',
          { 'iui-active': isActive },
          className,
        )}
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
