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
import { useMergedRefs } from '../utils/hooks/useMergedRefs';

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
} & CommonProps &
  React.ComponentPropsWithRef<'span'>;

export const Color = React.forwardRef<HTMLSpanElement, ColorProps>(
  (props, ref) => {
    const { color, style, onClick, isActive, ...rest } = props;

    useTheme();

    const spanRef = React.useRef<HTMLSpanElement>(null);
    const refs = useMergedRefs<HTMLSpanElement>(spanRef, ref);

    const _style =
      color && getWindow()?.CSS?.supports?.(`--swatch-color: ${color}`)
        ? { '--swatch-color': color, ...style }
        : { backgroundColor: color, ...style };

    return (
      <span
        className={cx('iui-color-swatch', { 'iui-active': isActive })}
        style={_style}
        onClick={onClick}
        tabIndex={0}
        ref={refs}
        {...rest}
      />
    );
  },
);

export default Color;
