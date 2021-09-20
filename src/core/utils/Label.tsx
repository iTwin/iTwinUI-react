/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';

export type LabelProps = {
  label?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  status?: 'positive' | 'warning' | 'negative';
  message?: React.ReactNode;
  icon?: JSX.Element;
  withInlineLabel?: boolean;
  withInlineIcon?: boolean;
} & React.ComponentPropsWithoutRef<'label'>;

/**
 * Wrapper component for label with message and icon.
 * @private
 */
export const Label = (props: LabelProps) => {
  const {
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
    <label
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
    </label>
  );
};
