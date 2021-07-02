/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  getUserColor,
  UserIconGroup,
  UserIconGroupProps,
} from '../../src/core';
import UserIcon from '../../src/core/UserIcon/UserIcon';

export default {
  component: UserIconGroup,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
  },
  title: 'Core/UserIconGroup',
} as Meta<UserIconGroupProps>;

export const Basic: Story<UserIconGroupProps> = (args) => {
  return (
    <UserIconGroup {...args}>
      <UserIcon
        size='small'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='small'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='small'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='small'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='small'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='small'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='small'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='small'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
    </UserIconGroup>
  );
};

export const SmallIcons: Story<UserIconGroupProps> = () => {
  return (
    <UserIconGroup>
      <UserIcon
        size='small'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='small'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='small'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='small'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
    </UserIconGroup>
  );
};

export const SmallIconsBigTeam: Story<UserIconGroupProps> = () => {
  return (
    <UserIconGroup>
      <UserIcon
        size='small'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='small'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='small'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='small'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='small'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='small'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='small'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='small'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='small'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='small'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='small'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='small'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
    </UserIconGroup>
  );
};

export const SmallIconsAnimated: Story<UserIconGroupProps> = () => {
  return (
    <UserIconGroup type='animated'>
      <UserIcon
        size='small'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='small'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='small'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='small'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='small'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='small'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
    </UserIconGroup>
  );
};

export const MediumIcons: Story<UserIconGroupProps> = () => {
  return (
    <UserIconGroup>
      <UserIcon
        size='medium'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='medium'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='medium'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='medium'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
    </UserIconGroup>
  );
};

export const MediumIconsBigTeam: Story<UserIconGroupProps> = () => {
  return (
    <UserIconGroup>
      <UserIcon
        size='medium'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='medium'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='medium'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='medium'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='medium'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='medium'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='medium'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='medium'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='medium'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='medium'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='medium'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='medium'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
    </UserIconGroup>
  );
};

export const MediumIconsAnimated: Story<UserIconGroupProps> = () => {
  return (
    <UserIconGroup type='animated'>
      <UserIcon
        size='medium'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='medium'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='medium'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='medium'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='medium'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='medium'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
    </UserIconGroup>
  );
};

export const LargeIcons: Story<UserIconGroupProps> = () => {
  return (
    <UserIconGroup>
      <UserIcon
        size='large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
    </UserIconGroup>
  );
};

export const LargeIconsBigTeam: Story<UserIconGroupProps> = () => {
  return (
    <UserIconGroup>
      <UserIcon
        size='large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
    </UserIconGroup>
  );
};

export const LargeIconsAnimated: Story<UserIconGroupProps> = () => {
  return (
    <UserIconGroup type='animated'>
      <UserIcon
        size='large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
    </UserIconGroup>
  );
};

export const ExtraLargeIcons: Story<UserIconGroupProps> = () => {
  return (
    <UserIconGroup>
      <UserIcon
        size='x-large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='x-large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='x-large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='x-large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
    </UserIconGroup>
  );
};

export const ExtraLargeIconsBigTeam: Story<UserIconGroupProps> = () => {
  return (
    <UserIconGroup>
      <UserIcon
        size='x-large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='x-large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='x-large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='x-large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='x-large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='x-large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='x-large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='x-large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='x-large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='x-large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='x-large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='x-large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
    </UserIconGroup>
  );
};

export const ExtraLargeIconsAnimated: Story<UserIconGroupProps> = () => {
  return (
    <UserIconGroup type='animated'>
      <UserIcon
        size='x-large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='x-large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='x-large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='x-large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
      <UserIcon
        size='x-large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
      />
      <UserIcon
        size='x-large'
        abbreviation='RM'
        backgroundColor={getUserColor('Robin Mercer')}
        title='Robin Mercer'
      />
    </UserIconGroup>
  );
};
