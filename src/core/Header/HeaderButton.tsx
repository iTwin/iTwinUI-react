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

import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/header.css';
import { SplitButton, SplitButtonProps } from '../Buttons/SplitButton';

export type HeaderButtonProps = {
  /**
   * Name.
   */
  name: React.ReactNode;
  /**
   * Description shown below the name, will be hidden in `Header` slim mode.
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
 * Header button that handles slim state of the `Header` it's in.
 * When in slim mode, will only display the name and reduce icon size.
 * Will display an arrow on the right if `menuItems` prop is provided.
 * @example
 * <HeaderButton name='Project A' description='0n00434' menuItems={...} />
 * <HeaderButton name='Project B' description='0n00434' startIcon={<SvgImodelHollow />} />
 * <HeaderButton name='Project C' startIcon={<img style={{ objectFit: 'cover' }} src='project.png' />} />
 * <HeaderButton name='Project D' isActive />
 */
export const HeaderButton = (props: HeaderButtonProps) => {
  const {
    name,
    description,
    isActive = false,
    menuItems,
    className,
    startIcon,
    onClick,
    ...rest
  } = props;

  useTheme();

  const isSplitButton = (
    props: Partial<SplitButtonProps>,
  ): props is SplitButtonProps => {
    return !!props.menuItems && !!props.onClick;
  };

  const buttonProps: ButtonProps & {
    styleType: 'borderless';
    menuItems: ((close: () => void) => JSX.Element[]) | undefined;
  } = {
    menuItems: props.menuItems,
    onClick: onClick,
    startIcon: React.isValidElement(startIcon)
      ? React.cloneElement(startIcon as JSX.Element, {
          className: cx(
            'iui-header-button-icon',
            (startIcon as JSX.Element).props.className,
          ),
        })
      : undefined,
    styleType: 'borderless',
    className: cx(
      {
        'iui-header-button': !isSplitButton(props),
        'iui-header-split-button': isSplitButton(props),
        'iui-active': isActive,
      },
      className,
    ),
    'aria-current': isActive ? 'location' : undefined,
    children: (
      <>
        <div>{name}</div>
        {description && <div className='iui-description'>{description}</div>}
      </>
    ),
    ...rest,
  };

  if (isSplitButton(buttonProps)) {
    return <SplitButton {...buttonProps} />;
  }
  if (menuItems) {
    return <DropdownButton {...buttonProps} menuItems={menuItems} />;
  }
  return <Button {...buttonProps} />;
};

export default HeaderButton;
