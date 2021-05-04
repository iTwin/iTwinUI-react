/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import '@itwin/itwinui-css/css/header.css';
import SvgChevronRight from '@itwin/itwinui-icons-react/cjs/icons/ChevronRight';
import SvgHelpCircularHollow from '@itwin/itwinui-icons-react/cjs/icons/HelpCircularHollow';
import SvgMoreVertical from '@itwin/itwinui-icons-react/cjs/icons/MoreVertical';
import SvgNotification from '@itwin/itwinui-icons-react/cjs/icons/Notification';

import cx from 'classnames';
import React from 'react';
import { IconButton } from '../Buttons';

import { useTheme } from '../utils/hooks/useTheme';
import { DropdownMenu } from '../DropdownMenu';

export type HeaderTranslations = {
  notifications: string;
  help: string;
  myAccount: string;
  moreOptions: string;
};

export type HeaderProps = {
  /**
   * Icon to the application.
   */
  appIcon: React.ReactNode;
  /**
   * Name of the application.
   */
  appName?: React.ReactNode;
  /**
   * Handler on application click
   */
  onApplication?: () => void;
  /**
   * `HeaderButton` array, chevron will be added between each.
   */
  breadcrumbsButtons?: React.ReactNode[];
  /**
   * Content to display in the center section of the header, should handle iui-slim class if used.
   */
  centerContent?: React.ReactNode;
  /**
   * Expects `UserIcon`, will be given a drop down if `userMenuItems` is also provided;
   */
  userIcon?: React.ReactNode;
  /**
   * Handler on notification click, will show notification bell if provided.
   */
  onNotification?: () => void;
  /**
   * Items in the help dropdown menu.
   * Pass a function that takes the `close` argument (to close the menu),
   * and returns a list of `MenuItem` components.
   */
  helpMenuItems?: (close: () => void) => JSX.Element[];
  /**
   * Items in the user dropdown menu.
   * Pass a function that takes the `close` argument (to close the menu),
   * and returns a list of `MenuItem` components.
   */
  userMenuItems?: (close: () => void) => JSX.Element[];
  /**
   * Items in the more dropdown menu.
   * Pass a function that takes the `close` argument (to close the menu),
   * and returns a list of `MenuItem` components.
   */
  moreMenuItems?: (close: () => void) => JSX.Element[];
  /**
   * Reduce height of the header;
   * @default false
   */
  slim?: boolean;
  /**
   * Provide localized strings.
   */
  translatedHeader?: HeaderTranslations;
};

const headerTranslations: HeaderTranslations = {
  notifications: 'Notifications',
  help: 'Help',
  myAccount: 'My Account',
  moreOptions: 'More options',
};

/**
 * Application header
 * @example
 * Example to come when we are set for the props.
 */
export const Header = (props: HeaderProps) => {
  const {
    appIcon,
    appName,
    onApplication,
    breadcrumbsButtons,
    centerContent,
    slim = false,
    userIcon,
    onNotification,
    helpMenuItems,
    userMenuItems,
    moreMenuItems,
    translatedHeader,
    ...rest
  } = props;
  useTheme();
  const translations = { ...headerTranslations, ...translatedHeader };
  const processedUserIcon =
    React.isValidElement(userIcon) &&
    React.cloneElement(userIcon, {
      size: 'medium',
      className: 'iui-user-icon',
      'aria-label': translations.myAccount,
    });
  const processedAppIcon = React.isValidElement(appIcon)
    ? React.cloneElement(appIcon, {
        className: cx('iui-icon', appIcon.props.className),
        'aria-hidden': true,
      })
    : appIcon;
  return (
    <header className={cx('iui-header', { 'iui-slim': slim })} {...rest}>
      <div className='iui-left'>
        {/* TODO: Validate
         * Button: Can't use as is because the 'iui-brand-logo' would also get 'iui-icon' and
         *         associated behavior. (Not sure what the impact is)
         * Is the "onApplication" mandatory ? If not, we might need a 'no click' version. */}
        <button
          className='iui-button iui-borderless iui-large iui-application'
          type='button'
          aria-label={typeof appName === 'string' ? appName : ''}
          onClick={onApplication}
        >
          <span className='iui-brand-logo'>{processedAppIcon}</span>
          {appName && <span className='iui-label'>{appName}</span>}
        </button>
        <div className='iui-divider' />
        {breadcrumbsButtons &&
          breadcrumbsButtons.reduce(
            (previous: React.ReactNode[], current, index) => [
              ...previous,
              current,
              index !== breadcrumbsButtons.length - 1 && (
                <SvgChevronRight aria-hidden={true} className='iui-chevron' />
              ),
            ],
            [],
          )}
      </div>
      {centerContent && <div className='iui-center'>{centerContent}</div>}
      <div className='iui-right'>
        {onNotification && (
          <IconButton
            styleType='borderless'
            onClick={onNotification}
            aria-label={translations.notifications}
          >
            <SvgNotification aria-hidden='true' />
          </IconButton>
        )}
        {helpMenuItems && (
          <DropdownMenu menuItems={helpMenuItems}>
            <IconButton styleType='borderless' aria-label={translations.help}>
              <SvgHelpCircularHollow aria-hidden='true' />
            </IconButton>
          </DropdownMenu>
        )}
        {React.isValidElement(userIcon) &&
          (userMenuItems ? (
            <DropdownMenu menuItems={userMenuItems}>
              {/* TODO: Validate
               *  IconButton adds a iui-icon to the user,
               *  Button puts the children in a iui-label which cause alignment issues.
               */}
              <button className='iui-button iui-dropdown iui-borderless'>
                {processedUserIcon}
              </button>
            </DropdownMenu>
          ) : (
            /* TODO: Validate
             * if there is no menu items, I don't add the button (as it is not interactive)
             * but then there is no margins, is it allowed to have no sub menu ?
             */
            processedUserIcon
          ))}
        {moreMenuItems && (
          <DropdownMenu menuItems={moreMenuItems}>
            <IconButton
              styleType='borderless'
              aria-label={translations.moreOptions}
            >
              <SvgMoreVertical aria-hidden='true' />
            </IconButton>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
};

export default Header;
