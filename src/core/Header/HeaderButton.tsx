/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import '@itwin/itwinui-css/css/header.css';

import cx from 'classnames';
import React from 'react';
import {
  Button,
  ButtonProps,
  DropdownButton,
  DropdownButtonProps,
} from '../Buttons';

import { useTheme } from '../utils/hooks/useTheme';

export type HeaderButtonProps = {
  /**
   * Name.
   */
  name: React.ReactNode;
  /**
   * Description
   */
  description?: React.ReactNode;
  /**
   * Is the menu active.
   * @default false
   */
  isActive?: boolean;
} & Omit<
  Partial<DropdownButtonProps> & Partial<ButtonProps>,
  'children' | 'styleType'
>;

/**
 * Header button
 * @example
 * Example to come when we are set for the props.
 */
export const HeaderButton = (props: HeaderButtonProps) => {
  const {
    name,
    description,
    isActive,
    menuItems,
    className,
    startIcon,
    ...rest
  } = props;
  const buttonProps: ButtonProps & { styleType: 'borderless' } = {
    startIcon: React.isValidElement<{ className: string }>(startIcon)
      ? React.cloneElement(startIcon, {
          className: cx('iui-header-button-icon', startIcon.props.className),
        })
      : undefined,
    styleType: 'borderless',
    className: cx(
      'iui-header-button',
      {
        'iui-active': isActive,
      },
      className,
    ),
    children: (
      <>
        <div>{name}</div>
        {description && <div className='iui-description'>{description}</div>}
      </>
    ),
    ...rest,
  };
  useTheme();
  return menuItems ? (
    <DropdownButton {...buttonProps} menuItems={menuItems} />
  ) : (
    <Button {...buttonProps} />
  );
};

export default HeaderButton;
