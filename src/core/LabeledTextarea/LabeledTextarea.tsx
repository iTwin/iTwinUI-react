/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { StatusIconMap } from '../utils/common';
import { Textarea } from '../Textarea';
import { TextareaProps } from '../Textarea/Textarea';
import { useTheme } from '../utils/hooks/useTheme';
import { LabeledInputProps } from '../LabeledInput';
import { Label } from '../utils/Label';
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
    <Label
      label={label}
      disabled={disabled}
      required={required}
      status={status}
      message={message}
      icon={icon}
      withInlineLabel={displayStyle === 'inline'}
      withInlineIcon={iconDisplayStyle === 'inline'}
      className={className}
      style={style}
    >
      <Textarea
        disabled={disabled}
        className={textareaClassName}
        style={textareaStyle}
        required={required}
        {...textareaProps}
        ref={ref}
      />
    </Label>
  );
});

export default LabeledTextarea;
