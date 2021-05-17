/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/

import cx from 'classnames';
import React from 'react';

import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/side-navigation.css';
import { Button, ButtonProps } from '../Buttons';
import { Tooltip } from '../Tooltip';

export type SidebarButtonProps = {
  /**
   * Whether the sidebar button is active.
   */
  isActive?: boolean;
  /**
   * If true, button label will also be shown as a tooltip.
   * By default, tooltip is shown when sidebar is collapsed, and hidden when expanded.
   */
  showTooltip?: boolean;
} & Omit<ButtonProps, 'styleType' | 'size'>;

/**
 * Sidebar button
 */
export const SidebarButton = (props: SidebarButtonProps) => {
  const {
    className,
    children,
    isActive = false,
    disabled = false,
    showTooltip,
    ...rest
  } = props;

  useTheme();

  const button = (
    <Button
      className={cx(
        'iui-sidenav-button',
        { 'iui-active': isActive },
        className,
      )}
      size='large'
      disabled={disabled}
      {...rest}
    >
      {children}
    </Button>
  );

  return showTooltip ? (
    <Tooltip content={children} placement='right'>
      {button}
    </Tooltip>
  ) : (
    button
  );
};

export default SidebarButton;
