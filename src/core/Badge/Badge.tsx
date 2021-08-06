/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { CommonProps } from '../utils/props';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/badge.css';
import { getWindow, SoftBackgrounds } from '../utils/common';

/**
 * Helper function that returns one of the preset badge color values.
 */
const getBadgeColorValue = (color: BadgeProps['backgroundColor']) => {
  if (!color) {
    return '';
  }

  switch (color) {
    case 'primary':
      return '#A5D7F5';
    case 'positive':
      return '#C3E1AF';
    case 'negative':
      return '#EFA9A9';
    case 'warning':
      return '#F9D7AB';
    default:
      return SoftBackgrounds[color];
  }
};

export type BadgeProps = {
  /**
   * Background color of the badge.
   * Recommended to use one of the data visualization colors: `$iui-color-dataviz-*`.
   */
  backgroundColor?:
    | 'primary'
    | 'positive'
    | 'negative'
    | 'warning'
    | keyof typeof SoftBackgrounds;
  /**
   * Badge label.
   * Always gets converted to uppercase, and truncated if too long.
   */
  children: string;
} & CommonProps;

/**
 * A colorful visual indicator for categorizing items.
 * @example
 * <Badge backgroundColor="#6AB9EC">Label</Badge>
 */
export const Badge = (props: BadgeProps) => {
  const { backgroundColor, style, className, children, ...rest } = props;

  useTheme();

  const _style =
    getWindow()?.CSS &&
    backgroundColor &&
    CSS.supports(`--badge-color: ${backgroundColor}`)
      ? { '--badge-color': getBadgeColorValue(backgroundColor), ...style }
      : { backgroundColor: getBadgeColorValue(backgroundColor), ...style };

  return (
    <span className={cx('iui-badge', className)} style={_style} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
