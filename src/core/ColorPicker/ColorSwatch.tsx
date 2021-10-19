/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import '@itwin/itwinui-css/css/color-picker.css';
import { useTheme, getWindow, ColorValue, ColorType } from '../utils';
import { getColorValue } from './ColorPicker';

export type ColorSwatchProps = {
  /**
   * Color code.
   */
  color: ColorValue | ColorType;
  /**
   * Is color selected.
   */
  isActive?: boolean;
} & Omit<React.ComponentPropsWithRef<'div'>, 'color'>;

/**
 * ColorSwatch component to display a color within a basic color picker.
 * @example
 * <ColorSwatch color={ColorValue.create('#23450b'}  onClick={onClick}/>
 */
export const ColorSwatch = React.forwardRef<HTMLDivElement, ColorSwatchProps>(
  (props, ref) => {
    const { color, style, onClick, isActive, className, ...rest } = props;
    const inColor = getColorValue(color);

    useTheme();

    const c = inColor.toHexString();
    const _style =
      color && getWindow()?.CSS?.supports?.(`--swatch-color: ${c}`)
        ? { '--swatch-color': c, ...style }
        : { backgroundColor: c, ...style };

    return (
      <div
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
