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
import { DropdownButtonProps } from '../Buttons';
import { useMergedRefs } from '../utils';
export type HeaderDropdownButtonProps = DropdownButtonProps;
type HeaderDropdownButtonComponent = PolymorphicForwardRefComponent<
  'button',
  HeaderDropdownButtonProps
>;

/**
 * Dropdown button component for Header
 *
 */
export const HeaderDropdownButton: HeaderDropdownButtonComponent = React.forwardRef(
  (props, ref) => {
    const { menuItems, className, size, children, startIcon, ...rest } = props;

    useTheme();

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const [menuWidth, setMenuWidth] = React.useState(0);
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const refs = useMergedRefs(ref, buttonRef);

    React.useEffect(() => {
      if (buttonRef.current) {
        setMenuWidth(buttonRef.current.offsetWidth);
      }
    }, [children, size]);

    return (
      <DropdownMenu
        menuItems={menuItems}
        style={{ minWidth: menuWidth }}
        onShow={() => setIsMenuOpen(true)}
        onHide={() => setIsMenuOpen(false)}
      >
        <button
          className={cx('iui-header-breadcrumb-button', className)}
          ref={refs}
          aria-label='Dropdown'
          {...rest}
        >
          {startIcon &&
            React.cloneElement(startIcon, {
              className: startIcon.props.className,
            })}
          {children}
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
    );
  },
);

export default HeaderDropdownButton;
