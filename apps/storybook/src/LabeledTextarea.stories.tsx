/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import SvgCamera from '@itwin/itwinui-icons-react/cjs/icons/Camera';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { LabeledTextarea, LabeledTextareaProps } from '@itwin/itwinui-react';

export default {
  title: 'Input/LabeledTextarea',
  component: LabeledTextarea,
  argTypes: {
    textareaClassName: { control: { disable: true } },
    textareaStyle: { control: { disable: true } },
    svgIcon: { control: { disable: true } },
  },
  args: {
    placeholder: 'This is a textarea',
    label: 'Textarea Label',
    message: 'Display Message',
    displayStyle: 'default',
    disabled: false,
  },
} as Meta<LabeledTextareaProps>;

export const Basic: Story<LabeledTextareaProps> = (args) => {
  return (
    <LabeledTextarea
      message='Display Message'
      placeholder='This is a textarea'
      {...args}
      label='Textarea Label'
    />
  );
};

export const Disabled: Story<LabeledTextareaProps> = (args) => {
  return (
    <LabeledTextarea
      message='Display Message'
      placeholder='This is a textarea'
      disabled={true}
      {...args}
      label='Textarea Label'
    />
  );
};

Disabled.args = {
  disabled: true,
};

export const Positive: Story<LabeledTextareaProps> = (args) => {
  return (
    <LabeledTextarea
      message='Display Message'
      placeholder='This is a textarea'
      status='positive'
      {...args}
      label='Textarea Label'
    />
  );
};

Positive.args = {
  status: 'positive',
};

export const Warning: Story<LabeledTextareaProps> = (args) => {
  return (
    <LabeledTextarea
      message='Display Message'
      placeholder='This is a textarea'
      status='warning'
      {...args}
      label='Textarea Label'
    />
  );
};

Warning.args = {
  status: 'warning',
};

export const Negative: Story<LabeledTextareaProps> = (args) => {
  return (
    <LabeledTextarea
      message='Display Message'
      placeholder='This is a textarea'
      status='negative'
      {...args}
      label='Textarea Label'
    />
  );
};

Negative.args = {
  status: 'negative',
};

export const WithCustomIcon: Story<LabeledTextareaProps> = (args) => {
  return (
    <LabeledTextarea
      placeholder='Enter text here'
      svgIcon={<SvgCamera />}
      {...args}
      label='This is a label'
    />
  );
};

export const Inline: Story<LabeledTextareaProps> = (args) => {
  return (
    <LabeledTextarea
      placeholder='Enter text here'
      status='negative'
      displayStyle='inline'
      {...args}
      label='This is a label'
    />
  );
};

Inline.args = {
  status: 'negative',
  displayStyle: 'inline',
  message: undefined,
};
