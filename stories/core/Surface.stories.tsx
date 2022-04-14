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
    id: { control: { disable: true } },
    elevation: {
      options: [0, 2, 4, 8, 16, 24],
    },
  },
  parameters: {
    creevey: {
      captureElement: null,
    },
  },
  title: 'Core/Surface',
} as Meta<SurfaceProps> & CreeveyMeta;

export const Basic: Story<SurfaceProps> = ({ elevation = 2 }) => {
  const cardStyle = {
    height: '100px',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
  };
  return (
    <Surface elevation={elevation} style={cardStyle}>
      The Surface container allows content to appear elevated through the use of
      a drop shadow
    </Surface>
  );
};

Basic.args = { elevation: 2 };
