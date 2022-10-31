/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import SvgMoreVertical from '@itwin/itwinui-icons-react/cjs/icons/MoreVertical';

import cx from 'classnames';
import React from 'react';
import { IconButton } from '../Buttons';

import { useTheme, CommonProps } from '../utils';
import '@itwin/itwinui-css/css/header.css';
import { DropdownMenu } from '../DropdownMenu';

export type HeaderTranslations = {
  /**
   * 'More' menu button aria-label.
   */
  moreOptions: string;
};

export type HeaderProps = {
  /**
   * Application logo.
   * (expects `HeaderLogo`)
   * @example
   * <HeaderLogo logo={<SvgImodelHollow />}>iTwin Application</HeaderLogo>
   */
  appLogo: React.ReactNode;
  /**
   * Content on the right of the application button
   * (expects `HeaderBreadcrumbs`)
   * @example
   * <HeaderBreadcrumbs items={[
   *   <HeaderButton key='project' name='Project A' />
   *   <HeaderButton key='imodel' name='IModel X' />
   * ]} />
   */
  breadcrumbs?: React.ReactNode;
  /**
   * Content displayed to the left of the avatar
   * (expects array of `IconButton`, potentially wrapped in a `DropdownMenu`)
   * @example
   * [
   *  <IconButton><SvgNotification /></IconButton>,
   *  <DropdownMenu>
   *   <IconButton>
   *    <SvgHelpCircularHollow />
   *   </IconButton>
   *  </DropdownMenu>
   * ]
   */
  actions?: React.ReactNode[];
  /**
   * Children is put in the center of the Header.
   */
  children?: React.ReactNode;
  /**
   * User icon
   * @deprecated Use `avatar` instead
   *
   * It's size and transition will be handled between slim/not slim state of the
   * Header
   * (expects `UserIcon`, can be wrapped in `IconButton` and `DropdownMenu` if needed)
   * @example
   * <DropdownMenu menuItems={...}>
   *   <IconButton styleType='borderless'>
   *     <UserIcon ... />
   *   </IconButton>
   * </DropdownMenu>
   */
  userIcon?: React.ReactNode;
  /**
   * Avatar
   * It's size and transition will be handled between slim/not slim state of the
   * Header
   * (expects `Avatar`, can be wrapped in `IconButton` and `DropdownMenu` if needed)
   * @example
   * <DropdownMenu menuItems={...}>
   *   <IconButton styleType='borderless'>
   *     <Avatar ... />
   *   </IconButton>
   * </DropdownMenu>
   */
  avatar?: React.ReactNode;
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
} & Omit<CommonProps, 'title'>;

const defaultTranslations: HeaderTranslations = {
  moreOptions: 'More options',
};

/**
 * Application header
 * @example
 * <Header
 *  appLogo={<HeaderLogo logo={<SvgImodelHollow />}>iTwin Application</HeaderLogo>}
 *  breadcrumbs={
 *   <HeaderBreadcrumbs items={[
 *    <HeaderButton key='project' name='Project A' />
 *    <HeaderButton key='imodel' name='IModel X' />
 *   ]} />
 *  }
 *  actions={[
 *   <IconButton><SvgNotification /></IconButton>,
 *   <DropdownMenu>
 *    <IconButton>
 *     <SvgHelpCircularHollow />
 *    </IconButton>
 *   </DropdownMenu>
 *  ]}
 *  avatarIcon={
 *   <DropdownMenu menuItems={...}>
 *    <IconButton styleType='borderless'>
 *     <AvatarIcon ... />
 *    </IconButton>
 *   </DropdownMenu>
 *  }
 *  isSlim
 * />
 */
export const Header = (props: HeaderProps) => {
  const {
    appLogo,
    breadcrumbs,
    isSlim = false,
    actions,
    avatar,
    menuItems,
    translatedStrings,
    className,
    children,
    ...rest
  } = props;
  useTheme();
  const headerTranslations = { ...defaultTranslations, ...translatedStrings };
  return (
    <header
      className={cx('iui-page-header', { 'iui-slim': isSlim }, className)}
      {...rest}
    >
      <div className='iui-page-header-left'>
        {appLogo}
        {breadcrumbs && <div className='iui-page-header-divider' />}
        {breadcrumbs}
      </div>
      {children && <div className='iui-page-header-center'>{children}</div>}
      <div className='iui-page-header-right'>
        {actions}
        {avatar}
        {menuItems && (
          <DropdownMenu menuItems={menuItems}>
            <IconButton
              styleType='borderless'
              aria-label={headerTranslations.moreOptions}
            >
              <SvgMoreVertical aria-hidden />
            </IconButton>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
};

export default Header;
