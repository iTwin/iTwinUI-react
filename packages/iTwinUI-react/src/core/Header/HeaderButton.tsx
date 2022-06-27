/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/

import cx from 'classnames';
import React from 'react';
import {
  Button,
  ButtonProps,
  DropdownButton,
  DropdownButtonProps,
} from '../Buttons';

import { PolymorphicForwardRefComponent, useTheme } from '../utils';
import '@itwin/itwinui-css/css/header.css';
import {
  HeaderBreadcrumbsSplitButton,
  HeaderBreadcrumbsSplitButtonProps,
} from './HeaderBreadcrumbsSplitButton';

export type HeaderButtonProps = {
  /**
   * Main label of the header button.
   */
  name: React.ReactNode;
  /**
   * Description shown below the main label, will be hidden in `Header` slim mode.
   */
  description?: React.ReactNode;
  /**
   * Is the menu active.
   * @default false
   */
  isActive?: boolean;
} & Partial<Pick<DropdownButtonProps, 'menuItems'>> &
  Pick<ButtonProps, 'startIcon' | 'endIcon'>;

const isSplitButton = (
  props: Omit<Partial<HeaderBreadcrumbsSplitButtonProps>, 'name'>,
): props is HeaderBreadcrumbsSplitButtonProps => {
  return !!props.menuItems && !!props.onClick;
};

const isDropdownButton = (
  props: Omit<Partial<DropdownButtonProps>, 'name'>,
): props is DropdownButtonProps => {
  return !!props.menuItems;
};

type HeaderButtonComponent = PolymorphicForwardRefComponent<
  'button',
  HeaderButtonProps
>;

/**
 * Header button that handles slim state of the `Header` it's in.
 * When in slim mode, will only display the name and reduce icon size.
 * Will display an arrow on the right if `menuItems` prop is provided.
 * @example
 * <HeaderButton name='Project A' description='0n00434' menuItems={...} />
 * <HeaderButton name='Project B' description='0n00434' startIcon={<SvgImodelHollow />} />
 * <HeaderButton name='Project C' startIcon={<img style={{ objectFit: 'cover' }} src='project.png' />} />
 * <HeaderButton name='Project D' isActive />
 */
export const HeaderButton: HeaderButtonComponent = React.forwardRef(
  (props, ref) => {
    const {
      name,
      description,
      isActive = false,
      className,
      startIcon,
      menuItems,
      ...rest
    } = props;

    useTheme();

    const buttonProps = {
      startIcon: React.isValidElement(startIcon)
        ? React.cloneElement(startIcon as JSX.Element, {
            className: cx(
              'iui-header-breadcrumb-button-icon',
              (startIcon as JSX.Element).props.className,
            ),
          })
        : undefined,
      styleType: 'borderless',
      className: cx(className, 'iui-header-breadcrumb-button'),
      children: (
        <>
          <div className='iui-header-breadcrumb-button-text-label'>{name}</div>
          {description && (
            <div className='iui-header-breadcrumb-button-text-sublabel'>
              {description}
            </div>
          )}
        </>
      ),
      ref: ref,
      ...(!!menuItems && { menuItems }),
      ...rest,
    } as const;

    if (isSplitButton(buttonProps)) {
      return (
        <li
          className='iui-header-breadcrumb-button-wrapper'
          aria-current={isActive ? 'location' : undefined}
        >
          <Button {...buttonProps} />
          <HeaderBreadcrumbsSplitButton {...buttonProps} />
        </li>
      );
    }
    if (isDropdownButton(buttonProps)) {
      return (
        <li
          className='iui-header-breadcrumb-button-wrapper'
          aria-current={isActive ? 'location' : undefined}
        >
          <DropdownButton {...buttonProps} />
        </li>
      );
    }
    return (
      <li
        className='iui-header-breadcrumb-button-wrapper'
        aria-current={isActive ? 'location' : undefined}
      >
        <Button {...buttonProps} />
      </li>
    );
  },
);

export default HeaderButton;
