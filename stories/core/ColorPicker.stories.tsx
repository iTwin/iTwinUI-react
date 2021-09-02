/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { ColorPicker, ColorPickerProps } from '../../src/core';

export default {
  component: ColorPicker,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  title: 'Core/ColorPicker',
} as Meta<ColorPickerProps>;

export const Basic: Story<ColorPickerProps> = (args) => {
  return (
    <ColorPicker {...args}>
      <div className='iui-color-palette'>
        <span className='iui-color-swatch' />
        <span className='iui-color-swatch' />
        <span className='iui-color-swatch' />
      </div>
    </ColorPicker>
  );
};
