/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';
import { StatusIconMap } from '../utils/common';
import { Textarea } from '../Textarea';
import { TextareaProps } from '../Textarea/Textarea';
import { useTheme } from '../utils/hooks/useTheme';
import { LabeledInputProps } from '../LabeledInput';
import '@itwin/itwinui-css/css/inputs.css';

export type LabeledTextareaProps = {
  /**
   * Label for the textarea.
   */
  label: React.ReactNode;
  /**
   * Message below the textarea.
   */
  message?: React.ReactNode;
  /**
   * Status of text area.
   */
  status?: 'positive' | 'warning' | 'negative';
  /**
   * Custom class name for textarea.
   */
  textareaClassName?: string;
  /**
   * Custom style for textarea.
   */
  textareaStyle?: React.CSSProperties;
} & Pick<LabeledInputProps, 'svgIcon' | 'displayStyle' | 'iconDisplayStyle'> &
  TextareaProps;

/**
 * Textarea wrapper that allows for additional styling and labelling
 * @example
 * <LabeledTextarea
 *  label='Textarea Label'
 *  message='Help Message'
 *  placeholder='This is a textarea'
 * />
 * <LabeledTextarea
 *  label='Disabled Textarea Label'
 *  message='Help Message'
 *  placeholder='This is a textarea'
 *  disabled={true}
 * />
 * <LabeledTextarea
 *  label='Textarea Label'
 *  message='Negative Message'
 *  placeholder='This is a textarea'
 *  status='negative'
 * />
 */
export const LabeledTextarea = React.forwardRef<
  HTMLTextAreaElement,
  LabeledTextareaProps
>((props, ref) => {
  const {
    className,
    style,
    disabled = false,
    label,
    message,
    status,
    textareaClassName,
    textareaStyle,
    displayStyle = 'default',
    iconDisplayStyle = displayStyle === 'default' ? 'block' : 'inline',
    svgIcon,
    required = false,
    ...textareaProps
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
          'iui-with-message': !!message,
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
      <Textarea
        disabled={disabled}
        className={textareaClassName}
        style={textareaStyle}
        required={required}
        {...textareaProps}
        ref={ref}
      />
      {icon &&
        React.cloneElement(icon, {
          className: cx('iui-input-icon', icon.props?.className),
          'aria-hidden': true,
        })}
      {message && <div className='iui-message'>{message}</div>}
    </label>
  );
});

export default LabeledTextarea;
