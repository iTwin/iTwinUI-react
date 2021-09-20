/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';

export type InputContainerProps<T extends React.ElementType = 'div'> = {
  as?: T;
  label?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  status?: 'positive' | 'warning' | 'negative';
  message?: React.ReactNode;
  icon?: JSX.Element;
  withInlineLabel?: boolean;
  withInlineIcon?: boolean;
} & React.ComponentPropsWithoutRef<T>;

/**
 * Input container to wrap inputs with label, and add optional message and icon.
 * @private
 */
export const InputContainer = <T extends React.ElementType = 'div'>(
  props: InputContainerProps<T>,
) => {
  const {
    as: Element = 'div',
    label,
    disabled,
    required,
    status,
    message,
    icon,
    withInlineLabel,
    withInlineIcon,
    children,
    className,
    style,
  } = props;

  return (
    <Element
      className={cx(
        'iui-input-container',
        {
          'iui-disabled': disabled,
          [`iui-${status}`]: !!status,
          'iui-inline-label': withInlineLabel,
          'iui-inline-icon': withInlineIcon,
          'iui-with-message': !!message,
        },
        className,
      )}
      style={style}
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
      {message && <div className='iui-message'>{message}</div>}
    </Element>
  );
};
