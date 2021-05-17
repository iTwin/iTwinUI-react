/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { SideNavigation, SideNavigationProps } from '../../src/core';

export default {
  component: SideNavigation,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
  },
  title: 'Core/SideNavigation',
} as Meta<SideNavigationProps>;

export const Basic: Story<SideNavigationProps> = (args) => {
  return <SideNavigation {...args} />;
};
