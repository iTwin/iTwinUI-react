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
import { getFocusableElements } from '../utils/common';

export type MenuProps = {
  /**
   * ARIA role. For menu use 'menu', for select use 'listbox'.
   * @default 'menu'
   */
  role?: string;
  /**
   * Menu items. Recommended to use `MenuItem` components.
   *
   * If you have custom actionable items, they should have `tabindex={-1}`
   * because we are using rowing `tabindex` for keyboard navigation: https://www.w3.org/TR/wai-aria-practices/#kbd_roving_tabindex.
   */
  children: React.ReactNode;
} & Omit<CommonProps, 'title'>;

const getFocusableItems = (container: HTMLElement | null) => {
  return [
    ...getFocusableElements(container),
    // MenuItem has tabindex="-1".
    ...Array.from(container?.querySelectorAll('[tabindex="-1"]') ?? []),
  ].filter((el) => !el.classList.contains('iui-disabled'));
};

/**
 * Basic menu component. Can be used for select or dropdown components.
 */
export const Menu = React.forwardRef<HTMLUListElement, MenuProps>(
  (props, ref) => {
    const { children, role = 'menu', className, style, ...rest } = props;

    useTheme();

    const [focusedIndex, setFocusedIndex] = React.useState<number>();
    const menuRef = React.useRef<HTMLUListElement>(null);
    const refs = useMergedRefs(menuRef, ref);

    React.useEffect(() => {
      const items = getFocusableItems(menuRef.current);
      if (focusedIndex != null) {
        (items?.[focusedIndex] as HTMLLIElement)?.focus();
        return;
      }

      const selectedIndex = items.findIndex((el) =>
        el.classList.contains('iui-active'),
      );
      setFocusedIndex(selectedIndex > -1 ? selectedIndex : 0);
    }, [children, focusedIndex]);

    const onKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
      const items = getFocusableItems(menuRef.current);
      if (!items?.length) {
        return;
      }

      const currentIndex = focusedIndex ?? 0;
      switch (event.key) {
        case 'ArrowDown': {
          setFocusedIndex(Math.min(currentIndex + 1, items.length - 1));
          event.preventDefault();
          event.stopPropagation();
          break;
        }
        case 'ArrowUp': {
          setFocusedIndex(Math.max(currentIndex - 1, 0));
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
