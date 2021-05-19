/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { SvgPlaceholder, SvgSettings } from '@itwin/itwinui-icons-react';
import { useState } from '@storybook/addons';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Sidebar, SidebarButton, SidebarProps } from '../../src/core';

export default {
  component: Sidebar,
  subcomponents: { SidebarButton },
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    mainItems: { control: { disable: true } },
    secondaryItems: { control: { disable: true } },
  },
  args: { style: { height: 'calc(100vh - 24px) ' } },
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
        <SidebarButton startIcon={<SvgPlaceholder />} key={2} disabled>
          App 3
        </SidebarButton>,
      ]}
      secondaryItems={[
        <SidebarButton startIcon={<SvgSettings />} key={3}>
          Settings
        </SidebarButton>,
      ]}
    />
  );
};

export const ActiveItem: Story<SidebarProps> = (args) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const mainItems = [...new Array(3)].map((_, index) => (
    <SidebarButton
      startIcon={<SvgPlaceholder />}
      key={index}
      isActive={activeIndex === index}
      onClick={() => setActiveIndex(index)}
    >
      {`App ${index}`}
    </SidebarButton>
  ));

  return (
    <Sidebar
      {...args}
      mainItems={mainItems}
      secondaryItems={[
        <SidebarButton startIcon={<SvgSettings />} key={3}>
          Settings
        </SidebarButton>,
      ]}
    />
  );
};
