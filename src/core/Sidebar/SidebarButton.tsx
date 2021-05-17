/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/

import cx from 'classnames';
import React from 'react';

import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/side-navigation.css';
import { Button, ButtonProps } from '../Buttons';

export type SidebarButtonProps = {
  /**
   * Whether the sidebar button is active.
   */
  isActive?: boolean;
} & Omit<ButtonProps, 'styleType' | 'size'>;

/**
 * Sidebar button
 */
export const SidebarButton = (props: SidebarButtonProps) => {
  const { className, children, isActive = false, ...rest } = props;

  useTheme();

  return (
    <Button
      className={cx(
        '.iui-sidenav-button',
        { '.iui-active': isActive },
        className,
      )}
      size='large'
      {...rest}
    >
      {children}
    </Button>
  );
};

export default SidebarButton;
