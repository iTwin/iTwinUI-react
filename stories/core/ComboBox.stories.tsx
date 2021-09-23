/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { ComboBox, ComboBoxProps } from '../../src/core';

export default {
  component: ComboBox,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 'clamp(300px, 50%, 100%)', minHeight: 350 }}>
        <Story />
      </div>
    ),
  ],
  title: 'Core/ComboBox',
} as Meta<ComboBoxProps<unknown>>;

export const Basic: Story<Partial<ComboBoxProps<number>>> = (args) => {
  return (
    <ComboBox
      options={[
        { value: 1, label: 'Item 1' },
        { value: 2, label: 'Item 2' },
        { value: 3, label: 'Item 3' },
      ]}
      {...args}
    />
  );
};
