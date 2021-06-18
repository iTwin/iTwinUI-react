/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../utils/props';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/menu.css';
import { MenuItemProps } from './MenuItem';
import Popover from '../utils/Popover';

export type MenuProps = {
  /**
   * Control whether the first menu item is automatically focused when menu opens.
   * @default true;
   */
  bringFocusInside?: boolean;
  /**
   * ARIA role. For menu use 'menu', for select use 'listbox'.
   * @default 'menu'
   */
  role?: string;
  /**
   * Menu items. Recommended to use `MenuItem` components.
   */
  children: React.ReactNode;
} & StylingProps;

/**
 * Basic menu component. Can be used for select or dropdown components.
 */
export const Menu = (props: MenuProps) => {
  const {
    bringFocusInside = true,
    children,
    role = 'menu',
    className,
    style,
    ...rest
  } = props;

  useTheme();

  const [focusedIndex, setFocusedIndex] = React.useState<number>();
  const menuRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    const items = menuRef.current?.children;
    if (focusedIndex != null) {
      (items?.[focusedIndex] as HTMLLIElement)?.focus();
      return;
    }

    if (bringFocusInside) {
      const childrenArray = React.Children.toArray(children);
      const selectedIndex = childrenArray.findIndex(
        (child: JSX.Element) => child.props.isSelected,
      );
      const firstEnabledIndex = childrenArray.findIndex(
        (child: JSX.Element) => !child.props.disabled,
      );
      setFocusedIndex(selectedIndex > -1 ? selectedIndex : firstEnabledIndex);
    }
  }, [children, focusedIndex, bringFocusInside]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    const items = menuRef.current?.children;
    if (!items?.length) {
      return;
    }

    const currentIndex = focusedIndex ?? 0;
    const isItemDisabled = (index: number) =>
      items[index].classList.contains('iui-disabled');

    switch (event.key) {
      case 'ArrowDown': {
        let newIndex = Math.min(currentIndex + 1, items.length - 1);
        while (newIndex < items.length - 1 && isItemDisabled(newIndex)) {
          newIndex++;
        }
        !isItemDisabled(newIndex) && setFocusedIndex(newIndex);
        event.preventDefault();
        event.stopPropagation();
        break;
      }
      case 'ArrowUp': {
        let newIndex = Math.max(currentIndex - 1, 0);
        while (newIndex > 0 && isItemDisabled(newIndex)) {
          newIndex--;
        }
        !isItemDisabled(newIndex) && setFocusedIndex(newIndex);
        event.preventDefault();
        event.stopPropagation();
        break;
      }
      default:
        break;
    }
  };

  return (
    <ul
      className={cx('iui-menu', className)}
      style={style}
      role={role}
      onKeyDown={onKeyDown}
      ref={menuRef}
      {...rest}
    >
      {React.Children.map(children, (item) => {
        if (React.isValidElement(item)) {
          const subItems = (item.props as MenuItemProps)?.subMenuItems ?? [];
          if (subItems.length === 0) {
            return item;
          } else {
            return (
              <Popover
                placement='right-start'
                content={
                  <Menu bringFocusInside={false}>
                    {subItems.map((item) =>
                      React.cloneElement(item, {
                        onClick: (args: unknown) => {
                          close();
                          item.props.onClick?.(args);
                        },
                      }),
                    )}
                  </Menu>
                }
              >
                {item}
              </Popover>
            );
          }
        }
        return item;
      })}
    </ul>
  );
};

export default Menu;
