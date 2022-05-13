/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';
import { Menu, MenuProps } from '../Menu';
import { Surface } from '../Surface';
import {
  useSafeContext,
  useMergedRefs,
  useVirtualization,
  VirtualScrollProps,
  mergeRefs,
  getWindow,
} from '../utils';
import { ComboBoxStateContext, ComboBoxRefsContext } from './helpers';

type ComboBoxMenuProps = Omit<MenuProps, 'onClick'> &
  React.ComponentPropsWithoutRef<'ul'>;

const VirtualComboboxMenu = ({ children, ...props }: VirtualScrollProps) => {
  const { outerProps, innerProps, visibleChildren } = useVirtualization(props);

  return (
    <div {...outerProps}>
      {React.cloneElement(
        children as JSX.Element,
        {
          ref: mergeRefs(
            innerProps.ref,
            (children as React.FunctionComponentElement<HTMLElement>).ref,
          ),
          style: {
            ...innerProps.style,
            ...(children as JSX.Element).props.style,
          },
        },
        visibleChildren,
      )}
    </div>
  );
};

export const ComboBoxMenu = React.forwardRef(
  (props: ComboBoxMenuProps, forwardedRef: React.Ref<HTMLUListElement>) => {
    const { className, style, ...rest } = props;
    const {
      minWidth,
      id,
      enableVirtualization,
      filteredOptions,
      getMenuItem,
      focusedIndex,
    } = useSafeContext(ComboBoxStateContext);
    const { menuRef } = useSafeContext(ComboBoxRefsContext);

    const refs = useMergedRefs(menuRef, forwardedRef);

    const styles = React.useMemo(
      () => ({
        minWidth,
        maxWidth: `min(${minWidth * 2}px, 90vw)`,
        maxHeight: 315,
      }),
      [minWidth],
    );

    const overflowY = getWindow()?.CSS?.supports?.('overflow-x: overlay')
      ? { overflowY: 'overlay' }
      : { overflowY: 'auto' };

    return (
      <>
        {!enableVirtualization ? (
          <Menu
            id={`${id}-list`}
            style={{ ...styles, ...style }}
            setFocus={false}
            role='listbox'
            ref={refs}
            className={cx('iui-scroll', className)}
            {...rest}
          />
        ) : (
          <Surface style={{ ...styles, ...(overflowY as React.CSSProperties) }}>
            <VirtualComboboxMenu
              itemsLength={filteredOptions.length}
              itemRenderer={(index) => getMenuItem(filteredOptions[index])}
              scrollToIndex={focusedIndex}
            >
              <Menu
                id={`${id}-list`}
                style={style}
                setFocus={false}
                role='listbox'
                ref={refs}
                className={className}
                {...rest}
              />
            </VirtualComboboxMenu>
          </Surface>
        )}
      </>
    );
  },
);
ComboBoxMenu.displayName = 'ComboBoxMenu';
