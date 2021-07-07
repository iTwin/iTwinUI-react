/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { CommonProps } from '../utils/props';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/menu.css';
import SvgCaretRightSmall from '@itwin/itwinui-icons-react/cjs/icons/CaretRightSmall';
import { Popover } from '../utils/Popover';
import { Menu } from './Menu';
import { useMergedRefs } from '../utils/hooks/useMergedRefs';

export type MenuItemProps = {
  /**
   * Item is selected.
   */
  isSelected?: boolean;
  /**
   * Item is disabled.
   */
  disabled?: boolean;
  /**
   * Value of the item.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  /**
   * Callback function that handles click and keyboard submit actions.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (value?: any) => void;
  /**
   * SVG icon component shown on the left.
   */
  icon?: JSX.Element;
  /**
   * SVG icon component shown on the right.
   */
  badge?: JSX.Element;
  /**
   * ARIA role. For menu item use 'menuitem', for select item use 'option'.
   * @default 'menuitem'
   */
  role?: string;
  /**
   * Items to be shown in the submenu when hovered over the item.
   */
  subMenuItems?: JSX.Element[];
  /**
   * Content of the menu item.
   */
  children?: React.ReactNode;
  /**
   * Parent `MenuItem` reference. Used in sub-menus.
   */
  parentMenuItemRef?: React.RefObject<HTMLLIElement>;
} & CommonProps;

/**
 * Basic menu item component. Should be used inside `Menu` component for each item.
 */
export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  (props, ref) => {
    const {
      children,
      isSelected,
      disabled,
      value,
      onClick,
      icon,
      badge,
      className,
      style,
      role = 'menuitem',
      subMenuItems = [],
      parentMenuItemRef,
      ...rest
    } = props;

    useTheme();

    const menuItemRef = React.useRef<HTMLLIElement>(null);
    const refs = useMergedRefs(menuItemRef, ref);

    const subMenuRef = React.useRef<HTMLUListElement>(null);

    const [isSubmenuVisible, setIsSubmenuVisible] = React.useState(false);

    const onKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
      switch (event.key) {
        case 'Enter':
        case ' ':
        case 'Spacebar': {
          !disabled && onClick?.(value);
          event.preventDefault();
          break;
        }
        case 'ArrowRight': {
          if (subMenuItems.length > 0) {
            setIsSubmenuVisible(true);
            event.preventDefault();
            event.stopPropagation();
          }
          break;
        }
        case 'ArrowLeft': {
          parentMenuItemRef?.current?.focus();
          event.preventDefault();
          event.stopPropagation();
          break;
        }
        default:
          break;
      }
    };

    const listItem = (
      <li
        className={cx(
          {
            'iui-active': isSelected,
            'iui-disabled': disabled,
          },
          className,
        )}
        onClick={() => !disabled && onClick?.(value)}
        ref={refs}
        style={style}
        role={role}
        tabIndex={disabled ? undefined : -1}
        aria-selected={isSelected}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setIsSubmenuVisible(true)}
        onMouseLeave={(e) => {
          if (!subMenuRef.current?.contains(e.relatedTarget as Node)) {
            setIsSubmenuVisible(false);
          }
        }}
        // Kind of hack to close child sub-menu
        onFocus={() => setIsSubmenuVisible(false)}
        {...rest}
      >
        {icon &&
          React.cloneElement(icon, {
            className: cx(icon.props.className, 'iui-icon'),
          })}
        <span className='iui-content'>{children}</span>
        {!badge && subMenuItems.length > 0 && (
          <SvgCaretRightSmall className='iui-icon' />
        )}
        {badge &&
          React.cloneElement(badge, {
            className: cx(badge.props.className, 'iui-icon'),
          })}
      </li>
    );

    return subMenuItems.length === 0 ? (
      listItem
    ) : (
      <Popover
        placement='right-start'
        visible={isSubmenuVisible}
        content={
          <Menu ref={subMenuRef}>
            {subMenuItems.map((item) =>
              React.cloneElement<MenuItemProps>(item, {
                parentMenuItemRef: menuItemRef,
              }),
            )}
          </Menu>
        }
      >
        {listItem}
      </Popover>
    );
  },
);

export default MenuItem;
