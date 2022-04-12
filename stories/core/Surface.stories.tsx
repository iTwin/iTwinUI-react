/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import { CreeveyMeta } from 'creevey';
import React from 'react';
import { Surface, SurfaceProps } from '../../src/core';

export default {
  component: Surface,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    elevation: {
      options: [2, 4, 8, 16, 24],
    },
  },
  parameters: {
    creevey: {
      captureElement: null,
    },
  },
  title: 'Core/Surface',
} as Meta<SurfaceProps> & CreeveyMeta;

const cardStyle = {
  height: '100px',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
};
export const Basic: Story<SurfaceProps> = ({ elevation }) => {
  return (
    <Surface elevation={elevation} style={cardStyle}>
      Sample Surface Component
    </Surface>
  );
};

Basic.args = {};
