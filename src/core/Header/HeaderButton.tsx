/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import '@itwin/itwinui-css/css/header.css';
import SvgCaretDownSmall from '@itwin/itwinui-icons-react/cjs/icons/CaretDownSmall';
import SvgCaretUpSmall from '@itwin/itwinui-icons-react/cjs/icons/CaretUpSmall';

import cx from 'classnames';
import React from 'react';

import { DropdownMenu } from '../DropdownMenu';
import { useTheme } from '../utils/hooks/useTheme';

export type HeaderButtonProps = {
  /**
   * Title to display.
   */
  title: React.ReactNode;
  /**
   * Second line to display.
   */
  subTitle?: React.ReactNode;
  /**
   * Items in the dropdown menu.
   * Pass a function that takes the `close` argument (to close the menu),
   * and returns a list of `MenuItem` components.
   */
  menuItems: (close: () => void) => JSX.Element[];
  /**
   * Is the menu active.
   * @default false
   */
  active?: boolean;
  /**
   * Thumbnail image url, a custom component or an svg.
   * @example
   * <Tile
   *  // ...
   *  thumbnail='/url/to/image.jpg'
   *  // or
   *  thumbnail={<UserIcon image={<img src='icon.png' />} />}
   *  // or
   *  thumbnail={<SvgImodel2 />}
   * />
   */
  thumbnail?: string | React.ReactNode;
};

/**
 * Application header button
 * @example
 * Example to come when we are set for the props.
 */
export const HeaderButton = (props: HeaderButtonProps) => {
  const { thumbnail, title, subTitle, menuItems, active } = props;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useTheme();
  return (
    <DropdownMenu
      menuItems={menuItems}
      onShow={() => setIsMenuOpen(true)}
      onHide={() => setIsMenuOpen(false)}
    >
      {/** TODO: Validate
       *   DropdownButton: Can't use as is because iui-thumnbail-area would be set to iui-icon.
       */}
      <button
        className={cx('iui-button', 'iui-borderless', 'iui-header-button', {
          'iui-detailed': !!subTitle,
          'iui-active': active,
        })}
        type='button'
      >
        {thumbnail && (
          <div className='iui-thumbnail-area'>
            <div
              className='iui-thumbnail'
              style={
                typeof thumbnail === 'string'
                  ? { backgroundImage: `url(${thumbnail})` }
                  : undefined
              }
            >
              {typeof thumbnail !== 'string' && thumbnail}
            </div>
          </div>
        )}
        <span className='iui-label'>
          <div className='iui-name'>{title}</div>
          {subTitle && <div className='iui-id'>{subTitle}</div>}
        </span>
        {isMenuOpen ? (
          <SvgCaretUpSmall className='iui-icon' aria-hidden='true' />
        ) : (
          <SvgCaretDownSmall className='iui-icon' aria-hidden='true' />
        )}
      </button>
    </DropdownMenu>
  );
};

export default HeaderButton;
