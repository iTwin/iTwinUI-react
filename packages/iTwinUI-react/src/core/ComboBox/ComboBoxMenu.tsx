import cx from 'classnames';
import React from 'react';
import { Menu, MenuProps } from '../Menu';
import { useSafeContext, useMergedRefs } from '../utils';
import { ComboBoxStateContext, ComboBoxRefsContext } from './helpers';

type ComboBoxMenuProps = Omit<MenuProps, 'onClick'> &
  React.ComponentPropsWithoutRef<'ul'>;

export const ComboBoxMenu = React.forwardRef(
  (props: ComboBoxMenuProps, forwardedRef: React.Ref<HTMLUListElement>) => {
    const { className, style, ...rest } = props;
    const { minWidth, id } = useSafeContext(ComboBoxStateContext);
    const { menuRef, optionsRef } = useSafeContext(ComboBoxRefsContext);

    React.useEffect(() => {
      if (menuRef.current != null) {
        const items = menuRef.current.querySelectorAll('[data-iui-index]');
        optionsRef.current = Array.from(items) as HTMLLIElement[]; // need this cast to make TS happy :(
      }
    }, [menuRef, optionsRef, props.children]);

    const refs = useMergedRefs(menuRef, forwardedRef);

    return (
      <Menu
        id={`${id}-list`}
        style={React.useMemo(
          () => ({
            minWidth,
            maxWidth: `min(${minWidth * 2}px, 90vw)`,
            maxHeight: 300,
            ...style,
          }),
          [minWidth, style],
        )}
        setFocus={false}
        role='listbox'
        ref={refs}
        className={cx('iui-scroll', className)}
        {...rest}
      />
    );
  },
);
ComboBoxMenu.displayName = 'ComboBoxMenu';
