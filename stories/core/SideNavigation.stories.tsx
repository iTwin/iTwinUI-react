/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import {
  SvgFlag,
  SvgFolderOpened,
  SvgHome,
  SvgPlaceholder,
  SvgSettings,
} from '@itwin/itwinui-icons-react';
import { useState } from '@storybook/addons';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  SideNavigation,
  SidenavButton,
  SidenavSubmenu,
  SideNavigationProps,
  Text,
  SidenavSubmenuHeader,
  IconButton,
} from '../../src/core';

export default {
  component: SideNavigation,
  subcomponents: { SidenavButton, SidenavSubmenu, SidenavSubmenuHeader },
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    items: { control: { disable: true } },
    secondaryItems: { control: { disable: true } },
    submenu: { control: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ height: 'calc(100vh - 24px)' }}>
        <Story />
      </div>
    ),
  ],
  parameters: { docs: { source: { excludeDecorators: true } } },
  title: 'Core/SideNavigation',
} as Meta<SideNavigationProps>;

export const Basic: Story<SideNavigationProps> = (args) => {
  return (
    <SideNavigation
      {...args}
      items={[
        <SidenavButton startIcon={<SvgHome />} key={0}>
          Home
        </SidenavButton>,
        <SidenavButton startIcon={<SvgFlag />} key={1}>
          Issues
        </SidenavButton>,
        <SidenavButton startIcon={<SvgFolderOpened />} key={2} disabled>
          Documents
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

  const mainItems = [...Array(3).fill(null)].map((_, index) => (
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
      items={mainItems}
      secondaryItems={[
        <SidenavButton startIcon={<SvgSettings />} key={3}>
          Settings
        </SidenavButton>,
      ]}
    />
  );
};

export const Submenu: Story<SideNavigationProps> = (args) => {
  const itemLabels = ['Home', 'Issues', 'Documents'];
  const itemIcons = [
    <SvgHome key={0} />,
    <SvgFlag key={1} />,
    <SvgFolderOpened key={2} />,
  ];

  const [activeItem, setActiveItem] = useState(2);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
  const [activeSubItem, setActiveSubItem] = useState(0);

  const mainItems = itemLabels.map((label, index) => (
    <SidenavButton
      key={index}
      startIcon={itemIcons[index]}
      isActive={activeItem === index}
      onClick={() => {
        if (label !== 'Documents') {
          setActiveItem(index);
          setActiveSubItem(-1);
          setIsSubmenuOpen(false);
        } else {
          setIsSubmenuOpen((open) => !open);
        }
      }}
    >
      {label}
    </SidenavButton>
  ));

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <SideNavigation
        {...args}
        expanderPlacement='bottom'
        items={mainItems}
        secondaryItems={[
          <SidenavButton startIcon={<SvgSettings />} key={3}>
            Settings
          </SidenavButton>,
        ]}
        submenu={
          isSubmenuOpen ? (
            <SidenavSubmenu>
              <SidenavSubmenuHeader
                actions={
                  <IconButton key={'settings'} styleType='borderless'>
                    <SvgSettings />
                  </IconButton>
                }
              >
                <span>Documents</span>
              </SidenavSubmenuHeader>
              <Text variant='leading'>All documents</Text>
              <ul>
                {[...Array(10).fill(null)].map((_, index) => (
                  <li key={index}>
                    <a
                      className='iui-anchor'
                      onClick={() => {
                        setActiveItem(2);
                        setActiveSubItem(index);
                      }}
                    >
                      Folder {index}
                    </a>
                  </li>
                ))}
              </ul>
            </SidenavSubmenu>
          ) : undefined
        }
      />
      <div
        style={{
          background: 'var(--iui-color-background-5)',
          padding: 16,
          flexGrow: 1,
          display: 'grid',
          placeContent: 'center',
          placeItems: 'center',
        }}
      >
        <Text>{itemLabels[activeItem]} page</Text>
        <Text isMuted>
          {activeSubItem >= 0 && `Contents of Folder ${activeSubItem}`}
        </Text>
      </div>
    </div>
  );
};
