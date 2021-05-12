/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import '@itwin/itwinui-css/css/header.css';
import SvgMoreVertical from '@itwin/itwinui-icons-react/cjs/icons/MoreVertical';

import cx from 'classnames';
import React from 'react';
import { IconButton } from '../Buttons';

import { useTheme } from '../utils/hooks/useTheme';
import { DropdownMenu } from '../DropdownMenu';

export type HeaderTranslations = {
  moreOptions: string;
};

export type HeaderProps = {
  /**
   * Application title.
   * (expects `HeaderTitle`)
   */
  appTitle: React.ReactNode;
  /**
   * Content on the right of the application button
   * (expects `HeaderBreadcrumbs`)
   */
  breadcrumbs?: React.ReactNode;
  /**
   * Content displayed to the left of the user icon
   * (expects array of `IconButton`, potentially wrapped in a `DropdownMenu`)
   */
  actions?: React.ReactNode[];
  /**
   * User icon
   * (expects a `UserIcon`, potentially wrapped in a `DropdownMenu`)
   */
  userIcon?: React.ReactNode;
  /**
   * Items in the more dropdown menu.
   * Pass a function that takes the `close` argument (to close the menu),
   * and returns a list of `MenuItem` components.
   */
  menuItems?: (close: () => void) => JSX.Element[];
  /**
   * If true, the header height is reduced, typically used when viewing 3D content.
   * @default false
   */
  isSlim?: boolean;
  /**
   * Provide localized strings.
   */
  translatedStrings?: HeaderTranslations;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const headerTranslations: HeaderTranslations = {
  moreOptions: 'More options',
};

/**
 * Application header
 * @example
 * Example to come when we are set for the props.
 */
export const Header = (props: HeaderProps) => {
  const {
    appTitle,
    breadcrumbs,
    isSlim = false,
    actions,
    userIcon,
    menuItems,
    translatedStrings,
    className,
    children,
    ...rest
  } = props;
  useTheme();
  const strings = { ...headerTranslations, ...translatedStrings };
  return (
    <header
      className={cx(className, 'iui-header', { 'iui-slim': isSlim })}
      {...rest}
    >
      <div className='iui-left'>
        {appTitle}
        <div className='iui-divider' />
        {breadcrumbs}
      </div>
      {children && <div className='iui-center'>{children}</div>}
      <div className='iui-right'>
        {actions}
        {userIcon}
        {menuItems && (
          <DropdownMenu menuItems={menuItems}>
            <IconButton styleType='borderless' aria-label={strings.moreOptions}>
              <SvgMoreVertical aria-hidden='true' />
            </IconButton>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
};

export default Header;
