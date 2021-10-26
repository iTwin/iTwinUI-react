/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useMergedRefs } from '../hooks';
import { getWindow } from '../functions';

export type InputContainerProps<T extends React.ElementType = 'div'> = {
  as?: T;
  label?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  status?: 'positive' | 'warning' | 'negative';
  message?: React.ReactNode;
  icon?: JSX.Element;
  isLabelInline?: boolean;
  isIconInline?: boolean;
} & React.ComponentPropsWithoutRef<T>;

/**
 * Input container to wrap inputs with label, and add optional message and icon.
 * @private
 */
export const InputContainer = React.forwardRef(
  <T extends React.ElementType = 'div'>(
    props: InputContainerProps<T>,
    ref: React.Ref<HTMLElement>,
  ) => {
    const {
      as: Element = 'div',
      label,
      disabled,
      required,
      status,
      message,
      icon,
      isLabelInline,
      isIconInline,
      children,
      className,
      style,
      ...rest
    } = props;

    const [inlinePadding, setInlinePadding] = React.useState(40);
    const updateInlinePadding = React.useCallback(
      (el: HTMLElement) => {
        if (el && icon && isIconInline) {
          const iconEl = el.querySelector('.iui-input-icon') as HTMLElement;
          const iconStyles = getWindow()?.getComputedStyle(iconEl);
          if (!iconEl || !iconStyles) {
            return;
          }
          const iconWidth = parseInt(iconStyles.width, 10);
          const iconMargin =
            parseInt(iconStyles.marginInlineStart) +
            parseInt(iconStyles.marginInlineEnd);
          setInlinePadding(iconWidth + iconMargin + 12);
        }
      },
      [icon, isIconInline],
    );

    const refs = useMergedRefs(ref, updateInlinePadding);

    return (
      <Element
        className={cx(
          'iui-input-container',
          {
            'iui-disabled': disabled,
            [`iui-${status}`]: !!status,
            'iui-inline-label': isLabelInline,
            'iui-inline-icon': isIconInline,
            'iui-with-message': !!message && !isLabelInline,
          },
          className,
        )}
        style={{
          ...(isIconInline &&
            icon && { '--inline-icon-width': `${inlinePadding}px` }),
          ...style,
        }}
        ref={refs}
        {...rest}
      >
        {label && (
          <div
            className={cx('iui-label', {
              'iui-required': required,
            })}
          >
            {label}
          </div>
        )}
        {children}
        {icon &&
          React.cloneElement(icon, {
            className: cx('iui-input-icon', icon.props?.className),
          })}
        {message && !isLabelInline && (
          <div className='iui-message'>{message}</div>
        )}
      </Element>
    );
  },
);
