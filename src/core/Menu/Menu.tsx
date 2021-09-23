/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { CommonProps } from '../utils/props';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/menu.css';
import { useMergedRefs } from '../utils/hooks/useMergedRefs';

export type MenuProps = {
  /**
   * ARIA role. For menu use 'menu', for select use 'listbox'.
   * @default 'menu'
   */
  role?: string;
  /**
   * Menu items. Recommended to use `MenuItem` components.
   */
  children: React.ReactNode;
  /**
   * Should the first selected or enabled menu item be focused automatically?
   * @default true
   */
  bringFocusInside?: boolean;
} & Omit<CommonProps, 'title'>;

/**
 * Basic menu component. Can be used for select or dropdown components.
 */
export const Menu = React.forwardRef<HTMLUListElement, MenuProps>(
  (props, ref) => {
    const {
      children,
      role = 'menu',
      bringFocusInside = true,
      className,
      style,
      ...rest
    } = props;

    useTheme();

    const [focusedIndex, setFocusedIndex] = React.useState<number>();
    const menuRef = React.useRef<HTMLUListElement>(null);
    const refs = useMergedRefs(menuRef, ref);

    React.useEffect(() => {
      const items = menuRef.current?.children;
      if (focusedIndex != null) {
        (items?.[focusedIndex] as HTMLLIElement)?.focus();
        return;
      }

      const childrenArray = React.Children.toArray(children);
      const selectedIndex = childrenArray.findIndex(
        (child: JSX.Element) => child.props.isSelected,
      );
      const firstEnabledIndex = childrenArray.findIndex(
        (child: JSX.Element) => !child.props.disabled,
      );
      if (bringFocusInside) {
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
        ref={refs}
        {...rest}
      >
        {children}
      </ul>
    );
  },
);

export default Menu;
