/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils';

export type SidenavSubmenuProps = {
  /**
   * Main label shown in the header of the submenu
   */
  label?: React.ReactNode;
  /**
   * Custom actions shown after the header label
   */
  headerActions?: React.ReactNode;
  /**
   * Main content of the submenu
   */
  children: React.ReactNode;
};

export const SidenavSubmenu = (props: SidenavSubmenuProps) => {
  const { label, headerActions, children } = props;

  useTheme();

  return (
    <div className='iui-side-navigation-submenu-content'>
      <div className='iui-side-navigation-submenu-header'>
        {label && (
          <div className='iui-side-navigation-submenu-header-label'>
            {label}
          </div>
        )}
        {headerActions && (
          <div className='iui-side-navigation-submenu-header-actions'>
            {headerActions}
          </div>
        )}
      </div>
      {children}
    </div>
  );
};
