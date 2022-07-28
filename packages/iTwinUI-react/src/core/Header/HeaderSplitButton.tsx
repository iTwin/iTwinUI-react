/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';
import { DropdownMenu } from '../DropdownMenu';
import SvgCaretDownSmall from '@itwin/itwinui-icons-react/cjs/icons/CaretDownSmall';
import SvgCaretUpSmall from '@itwin/itwinui-icons-react/cjs/icons/CaretUpSmall';

import { PolymorphicForwardRefComponent, useTheme } from '../utils';
import { SplitButtonProps } from '../Buttons';

export type HeaderSplitButtonProps = SplitButtonProps;

type HeaderSplitButtonComponent = PolymorphicForwardRefComponent<
  'button',
  HeaderSplitButtonProps
>;

/**
 * Split button component for Header
 *
 */
export const HeaderSplitButton: HeaderSplitButtonComponent = React.forwardRef(
  (props, forwardedRef) => {
    const {
      onClick,
      menuItems,
      className,
      menuPlacement = 'bottom-end',
      size,
      children,
      style,
      title,
      type = 'button',
      startIcon,
      ...rest
    } = props;

    useTheme();

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const [menuWidth, setMenuWidth] = React.useState(0);
    const ref = React.useRef<HTMLLIElement>(null);

    React.useEffect(() => {
      if (ref.current) {
        setMenuWidth(ref.current.offsetWidth);
      }
    }, [children, size]);

    return (
      <span
        className={cx('iui-header-breadcrumb-button-wrapper', className)}
        style={style}
        title={title}
        ref={ref}
      >
        <button
          className='iui-header-breadcrumb-button'
          onClick={onClick}
          ref={forwardedRef}
          type={type}
          {...rest}
        >
          {startIcon &&
            React.cloneElement(startIcon, {
              className: startIcon.props.className,
            })}
          {children}
        </button>
        <DropdownMenu
          placement={menuPlacement}
          menuItems={menuItems}
          style={{ minWidth: menuWidth }}
          onShow={React.useCallback(() => setIsMenuOpen(true), [])}
          onHide={React.useCallback(() => setIsMenuOpen(false), [])}
        >
          <button className='iui-header-breadcrumb-button iui-header-breadcrumb-button-split'>
            {isMenuOpen ? (
              <SvgCaretUpSmall
                className='iui-header-breadcrumb-button-dropdown-icon'
                aria-hidden
              />
            ) : (
              <SvgCaretDownSmall
                className='iui-header-breadcrumb-button-dropdown-icon'
                aria-hidden
              />
            )}
          </button>
        </DropdownMenu>
      </span>
    );
  },
);

export default HeaderSplitButton;
