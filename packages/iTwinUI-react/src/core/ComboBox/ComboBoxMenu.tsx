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

const VirtualizedComboboxMenu = ({
  children,
  ...props
}: VirtualScrollProps) => {
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

type ComboBoxMenuProps = Omit<MenuProps, 'onClick'> &
  React.ComponentPropsWithoutRef<'ul'>;

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

    // 'Fool' VirtualScroll by passing length 1
    // whenever there is no elements, to show empty state message
    const virtualItemRenderer = React.useCallback(
      (index: number) =>
        filteredOptions.length > 0
          ? getMenuItem(filteredOptions[index])
          : (rest.children as JSX.Element), // Here is expected empty state content
      [filteredOptions, getMenuItem, rest.children],
    );

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
          <Surface
            elevation={1}
            style={{ ...styles, ...(overflowY as React.CSSProperties) }}
          >
            <VirtualizedComboboxMenu
              itemsLength={filteredOptions.length || 1}
              itemRenderer={virtualItemRenderer}
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
            </VirtualizedComboboxMenu>
          </Surface>
        )}
      </>
    );
  },
);
ComboBoxMenu.displayName = 'ComboBoxMenu';
