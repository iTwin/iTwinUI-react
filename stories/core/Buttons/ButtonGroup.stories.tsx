/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { ButtonGroup, ButtonGroupProps, IconButton } from '../../../src/core';
import {
  SvgAdd,
  SvgDelete,
  SvgEdit,
  SvgUndo,
  SvgPlaceholder,
} from '@itwin/itwinui-icons-react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CreeveyMeta } from 'creevey';

export default {
  title: 'Buttons/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    style: { control: { disable: true } },
    className: { control: { disable: true } },
    id: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  parameters: {
    creevey: { skip: ['Overflow'] },
  },
} as Meta<ButtonGroupProps> & CreeveyMeta;

export const WithIcons: Story<ButtonGroupProps> = (args) => {
  return (
    <ButtonGroup {...args}>
      <IconButton onClick={action('Clicked add!')}>
        <SvgAdd />
      </IconButton>
      <IconButton onClick={action('Clicked edit!')} isActive>
        <SvgEdit />
      </IconButton>
      <IconButton disabled onClick={action('Clicked delete!')}>
        <SvgDelete />
      </IconButton>
      <IconButton onClick={action('Clicked undo!')}>
        <SvgUndo />
      </IconButton>
    </ButtonGroup>
  );
};
WithIcons.args = {
  responsive: false,
};

export const Overflow: Story<ButtonGroupProps> = (args) => {
  const buttons = Array(15)
    .fill(null)
    .map((_, index) => (
      <IconButton key={index}>
        <SvgPlaceholder />
      </IconButton>
    ));

  return (
    <div style={{ maxWidth: '50%', border: '1px solid hotpink', padding: 8 }}>
      <ButtonGroup style={{ display: 'flex' }} responsive {...args}>
        {buttons}
      </ButtonGroup>
    </div>
  );
};
Overflow.args = {
  responsive: true,
};
