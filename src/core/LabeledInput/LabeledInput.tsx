/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';
import { Input, InputProps } from '../Input/Input';
import { StatusIconMap } from '../utils/common';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/inputs.css';

export type LabeledInputProps = {
  /**
   * Label of the input.
   */
  label?: React.ReactNode;
  /**
   * Message below the input. Does not apply to 'inline' input.
   */
  message?: React.ReactNode;
  /**
   * Status of the input.
   */
  status?: 'positive' | 'warning' | 'negative';
  /**
   * Custom svg icon. Will override status icon if specified.
   */
  svgIcon?: JSX.Element;
  /**
   * Custom CSS class name for the input element.
   */
  inputClassName?: string;
  /**
   * Custom CSS Style for the input element.
   */
  inputStyle?: React.CSSProperties;
  /**
   * Set display style of label.
   * Supported values:
   * - 'default' - label appears above input.
   * - 'inline' - appears in the same line as input.
   * @default 'default'
   */
  displayStyle?: 'default' | 'inline';
  /**
   * Set display style of icon.
   * Supported values:
   * - 'block' - icon appears below input.
   * - 'inline' - icon appears inside input (at the end).
   *
   * Defaults to 'block' if `displayStyle` is `default`, else 'inline'.
   */
  iconDisplayStyle?: 'block' | 'inline';
} & InputProps;

/**
 * Basic labeled input component
 * @example
 * <LabeledInput label='My label' />
 * <LabeledInput disabled label='My label' />
 * <LabeledInput status='positive' label='Positive' />
 * <LabeledInput status='negative' label='Negative' setFocus />
 */
export const LabeledInput = React.forwardRef<
  HTMLInputElement,
  LabeledInputProps
>((props, ref) => {
  const {
    className,
    disabled = false,
    label,
    message,
    status,
    svgIcon,
    style,
    inputClassName,
    inputStyle,
    displayStyle = 'default',
    iconDisplayStyle = displayStyle === 'default' ? 'block' : 'inline',
    required = false,
    ...rest
  } = props;

  useTheme();

  const icon = svgIcon ?? (status && StatusIconMap[status]());

  return (
    <label
      className={cx(
        'iui-input-container',
        {
          'iui-disabled': disabled,
          [`iui-${status}`]: !!status,
          'iui-inline-label': displayStyle === 'inline',
          'iui-with-message': !!message && displayStyle !== 'inline',
          'iui-inline-icon': iconDisplayStyle === 'inline',
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
      <Input
        disabled={disabled}
        className={inputClassName}
        style={inputStyle}
        required={required}
        ref={ref}
        {...rest}
      />
      {icon &&
        React.cloneElement(icon, {
          className: cx('iui-input-icon', icon.props?.className),
          'aria-hidden': true,
        })}
      {displayStyle !== 'inline' && message && (
        <div className='iui-message'>{message}</div>
      )}
    </label>
  );
});

export default LabeledInput;
