/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/side-navigation.css';
import { CommonProps } from '../utils/props';

export type SidebarProps = {
  /**
   * Buttons shown in the top portion sidebar.
   * Recommended to use `SidenavButton`s.
   */
  mainItems: React.ReactNode[];
  /**
   * Buttons shown at the bottom of the sidebar.
   */
  secondaryItems?: React.ReactNode[];
  /**
   * Control the visibility of "expander" icon button.
   * @default 'top'
   */
  expanderVisibility?: 'top' | 'bottom' | 'hidden';
} & Omit<CommonProps, 'title'>;

/**
 * Describe me here!
 * @example
 * Example usages go here!
 */
export const Sidebar = (props: SidebarProps) => {
  const {
    mainItems,
    secondaryItems,
    expanderVisibility,
    className,
    ...rest
  } = props;
  useTheme();

  return (
    <div className={cx('.iui-side-navigation', className)} {...rest}>
      {expanderVisibility === 'top'}
      {mainItems}
      {secondaryItems}
    </div>
  );
};

export default Sidebar;
