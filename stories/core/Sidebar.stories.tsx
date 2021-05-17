/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { SvgPlaceholder, SvgSettings } from '@itwin/itwinui-icons-react';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Sidebar, SidebarButton, SidebarProps } from '../../src/core';

export default {
  component: Sidebar,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
  },
  title: 'Core/Sidebar',
} as Meta<SidebarProps>;

export const Basic: Story<SidebarProps> = (args) => {
  return (
    <Sidebar
      {...args}
      mainItems={[
        <SidebarButton startIcon={<SvgPlaceholder />} key={0}>
          App 1
        </SidebarButton>,
        <SidebarButton startIcon={<SvgPlaceholder />} key={1}>
          App 2
        </SidebarButton>,
        <SidebarButton startIcon={<SvgPlaceholder />} key={2}>
          App 3
        </SidebarButton>,
      ]}
      secondaryItems={[
        <SidebarButton startIcon={<SvgSettings />} key={3}>
          Settings
        </SidebarButton>,
      ]}
      style={{ height: 'calc(100vh - 24px)' }}
    />
  );
};
