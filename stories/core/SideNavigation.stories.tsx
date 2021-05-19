/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { SvgPlaceholder, SvgSettings } from '@itwin/itwinui-icons-react';
import { useState } from '@storybook/addons';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  SideNavigation,
  SidenavButton,
  SideNavigationProps,
} from '../../src/core';

export default {
  component: SideNavigation,
  subcomponents: { SidenavButton },
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    mainItems: { control: { disable: true } },
    secondaryItems: { control: { disable: true } },
  },
  args: { style: { height: 'calc(100vh - 24px) ' } },
  title: 'Core/SideNavigation',
} as Meta<SideNavigationProps>;

export const Basic: Story<SideNavigationProps> = (args) => {
  return (
    <SideNavigation
      {...args}
      mainItems={[
        <SidenavButton startIcon={<SvgPlaceholder />} key={0}>
          App 1
        </SidenavButton>,
        <SidenavButton startIcon={<SvgPlaceholder />} key={1}>
          App 2
        </SidenavButton>,
        <SidenavButton startIcon={<SvgPlaceholder />} key={2} disabled>
          App 3
        </SidenavButton>,
      ]}
      secondaryItems={[
        <SidenavButton startIcon={<SvgSettings />} key={3}>
          Settings
        </SidenavButton>,
      ]}
    />
  );
};

export const ActiveItem: Story<SideNavigationProps> = (args) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const mainItems = [...new Array(3)].map((_, index) => (
    <SidenavButton
      startIcon={<SvgPlaceholder />}
      key={index}
      isActive={activeIndex === index}
      onClick={() => setActiveIndex(index)}
    >
      {`App ${index}`}
    </SidenavButton>
  ));

  return (
    <SideNavigation
      {...args}
      mainItems={mainItems}
      secondaryItems={[
        <SidenavButton startIcon={<SvgSettings />} key={3}>
          Settings
        </SidenavButton>,
      ]}
    />
  );
};
