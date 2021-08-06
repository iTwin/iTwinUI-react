/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Badge, BadgeProps } from '../../src/core';

export default {
  component: Badge,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    backgroundColor: { control: 'color' },
  },
  title: 'Core/Badge',
} as Meta<BadgeProps>;

export const Basic: Story<BadgeProps> = ({ backgroundColor, children }) => {
  return <Badge backgroundColor={backgroundColor}>{children}</Badge>;
};

Basic.args = {
  backgroundColor: 'hsl(197, 71%, 83%)',
  children: 'Label',
};

export const LongLabel: Story<BadgeProps> = ({
  backgroundColor,
  title,
  children,
}) => {
  return (
    <Badge backgroundColor={backgroundColor} title={title}>
      {children}
    </Badge>
  );
};

LongLabel.args = {
  backgroundColor: 'hsl(197, 71%, 83%)',
  children: 'Long label that gets truncated',
  title: 'Long label that gets truncated',
};
