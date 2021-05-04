/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  getUserColor,
  Header,
  HeaderProps,
  Input,
  MenuItem,
  UserIcon,
} from '../../src/core';
import HeaderButton from '../../src/core/Header/HeaderButton';

export default {
  title: 'Core/Header',
  component: Header,
  argTypes: {},
} as Meta<HeaderProps>;

const buildClickHandler = (menu: string, close: () => void) => (
  index: number,
) => {
  action(`Menu '${menu}', Item #${index} clicked!`)();
  close();
};

const buildMenu = (menu: string) => (close: () => void) => [
  <MenuItem key={1} value={1} onClick={buildClickHandler(menu, close)}>
    {menu} item #1
  </MenuItem>,
  <MenuItem key={2} value={2} onClick={buildClickHandler(menu, close)}>
    {menu} item #2
  </MenuItem>,
  <MenuItem key={3} value={3} onClick={buildClickHandler(menu, close)}>
    {menu} item #3
  </MenuItem>,
];

export const full: Story<HeaderProps> = (props) => <Header {...props} />;
full.args = {
  appName: 'Microstation',
  appIcon: (
    <svg
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
    >
      <path d='m12.6 13.4c-1.2-1.5-2.1-3.1-2.4-5.5-2.7 3.9-4.6 4.2-5.7 2.4l-1.2 5.7h-2.2l3.5-14.1 1.8-.4c-.1.5-1.4 6.2.6 7 2 .7 4.6-8.5 4.6-8.5l2.2.4c-1.6 3.7-1.6 7.6 1.1 10.9l-2.3 2.1' />
    </svg>
  ),
  onApplication: () => action('Clicked on the application button')(),
  userIcon: (
    <UserIcon
      abbreviation='TR'
      backgroundColor={getUserColor('Terry Rivers')}
      image={
        <img src='https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png' />
      }
      title='Terry Rivers'
    />
  ),
  onNotification: () => action('Clicked on the notification bell')(),
  userMenuItems: buildMenu('User'),
  moreMenuItems: buildMenu('More'),
  helpMenuItems: buildMenu('Help'),
  breadcrumbsButtons: [
    <HeaderButton
      key='project'
      menuItems={buildMenu('Project')}
      title={'Project A (Super Size Edition)'}
      subTitle={'YJC-2249'}
    />,
    <HeaderButton
      key='iModel'
      menuItems={buildMenu('IModel')}
      title={'IModel B'}
      thumbnail='https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png'
      active={true}
    />,
    <HeaderButton
      key='version'
      menuItems={buildMenu('Version')}
      title={'Version C'}
    />,
  ],
  centerContent: (
    /** TODO: Validate
     * Should handle `iui-slim` with css classes,
     * but I don't know if we want to add classes for Storybook stories */
    <div>
      <Input
        placeholder='Search within Model Beta...'
        style={{ borderRadius: 22, width: '20vw', margin: 12 }}
      />
    </div>
  ),
};
