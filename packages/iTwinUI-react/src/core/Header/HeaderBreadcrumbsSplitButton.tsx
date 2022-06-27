/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { ButtonProps } from '../Buttons/Button';
import { IconButton } from '../Buttons/IconButton';
import { DropdownMenu } from '../DropdownMenu';
import { Placement } from 'tippy.js';
import SvgCaretDownSmall from '@itwin/itwinui-icons-react/cjs/icons/CaretDownSmall';
import SvgCaretUpSmall from '@itwin/itwinui-icons-react/cjs/icons/CaretUpSmall';

import { PolymorphicForwardRefComponent, useTheme } from '../utils';
import '@itwin/itwinui-css/css/button.css';

export type HeaderBreadcrumbsSplitButtonProps = ButtonProps & {
  /**
   * Items in the dropdown menu.
   * Pass a function that takes the `close` argument (to close the menu),
   * and returns a list of `MenuItem` components.
   */
  menuItems: (close: () => void) => JSX.Element[];
  /**
   * Placement of the dropdown menu.
   * @default 'bottom-end'
   */
  menuPlacement?: Placement;
  /**
   * Content of primary button.
   */
  children: React.ReactNode;
};

type HeaderBreadcrumbsSplitButtonComponent = PolymorphicForwardRefComponent<
  'button',
  HeaderBreadcrumbsSplitButtonProps
>;

/**
 * Header Breadcrumb button component with a DropdownMenu.
 *
 */
export const HeaderBreadcrumbsSplitButton: HeaderBreadcrumbsSplitButtonComponent = React.forwardRef(
  (props) => {
    const {
      menuItems,
      menuPlacement = 'bottom-end',
      styleType = 'default',
      size,
      children,
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
      <DropdownMenu
        placement={menuPlacement}
        menuItems={menuItems}
        style={{ minWidth: menuWidth }}
        onShow={React.useCallback(() => setIsMenuOpen(true), [])}
        onHide={React.useCallback(() => setIsMenuOpen(false), [])}
      >
        <IconButton
          className='iui-header-breadcrumb-button iui-header-breadcrumb-button-split'
          styleType={styleType}
          size={size}
          disabled={props.disabled}
        >
          {isMenuOpen ? (
            <SvgCaretUpSmall className='iui-header-breadcrumb-button-dropdown-icon' />
          ) : (
            <SvgCaretDownSmall className='iui-header-breadcrumb-button-dropdown-icon' />
          )}
        </IconButton>
      </DropdownMenu>
    );
  },
);

export default HeaderBreadcrumbsSplitButton;
