/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  getUserColor,
  UserIcon,
  UserIconGroup,
  UserIconGroupProps,
} from '../../src/core';

export default {
  component: UserIconGroup,
  subcomponents: { UserIcon },
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  title: 'Core/UserIconGroup',
} as Meta<UserIconGroupProps>;

export const Basic: Story<UserIconGroupProps> = (args) => {
  const userNames = [
    'Terry Rivers',
    'Robin Mercer',
    'Morgan Vera',
    'Ace Cash',
    'Tanner Fraser',
    'Ashley Miles',
    'Jean Mullins',
  ];

  const countProps = {
    onMouseEnter: () => console.log('mouseenter'),
  };

  return (
    <UserIconGroup
      {...args}
      excessIconProps={countProps as React.HTMLAttributes<HTMLDivElement>}
    >
      {userNames.map((name) => (
        <UserIcon
          size='medium'
          key={name}
          abbreviation={name
            .split(' ')
            .map((token) => token[0])
            .join('')}
          backgroundColor={getUserColor(name)}
          title={name}
        />
      ))}
    </UserIconGroup>
  );
};
Basic.args = {
  animated: false,
  iconSize: 'medium',
};

export const Animated: Story<UserIconGroupProps> = (args) => {
  const userNames = [
    'Terry Rivers',
    'Robin Mercer',
    'Morgan Vera',
    'Jean Mullins',
    'Ashley Miles',
  ];

  return (
    <UserIconGroup animated {...args}>
      {userNames.map((name) => (
        <UserIcon
          size='medium'
          key={name}
          abbreviation={name
            .split(' ')
            .map((token) => token[0])
            .join('')}
          backgroundColor={getUserColor(name)}
          title={name}
        />
      ))}
    </UserIconGroup>
  );
};
Animated.args = {
  animated: true,
  iconSize: 'medium',
};

export const ManyIcons: Story<UserIconGroupProps> = (args) => {
  const userNames = [
    'Terry Rivers',
    'Robin Mercer',
    'Morgan Vera',
    'Ace Cash',
    'Tanner Fraser',
    'Ashley Miles',
    'Jean Mullins',
    'Nico Triplett',
    'Drew Abel',
    'Kendall Simons',
    'Kennedy Gray',
    'Charlie Mayfield',
    'Peyton Pennington',
    'Justice Harrington',
    'Jessie Dodd',
  ];

  return (
    <>
      <UserIconGroup {...args}>
        {userNames.map((name) => (
          <UserIcon
            size='medium'
            key={name}
            abbreviation={name
              .split(' ')
              .map((token) => token[0])
              .join('')}
            backgroundColor={getUserColor(name)}
            title={name}
          />
        ))}
      </UserIconGroup>
      <br />
      <UserIconGroup animated={false} iconSize='large'>
        {userNames.map((name) => (
          <UserIcon
            size='large'
            key={name}
            abbreviation={name
              .split(' ')
              .map((token) => token[0])
              .join('')}
            backgroundColor={getUserColor(name)}
            title={name}
          />
        ))}
      </UserIconGroup>
    </>
  );
};

ManyIcons.args = {
  animated: false,
  iconSize: 'medium',
};

export const NonStacked: Story<UserIconGroupProps> = (args) => {
  const userNames = [
    'Terry Rivers',
    'Robin Mercer',
    'Morgan Vera',
    'Ashley Miles',
    'Jean Mullins',
    'Charlie Mayfield',
    'Peyton Pennington',
    'Justice Harrington',
  ];

  return (
    <UserIconGroup stacked={false} {...args}>
      {userNames.map((name) => (
        <UserIcon
          size='medium'
          key={name}
          abbreviation={name
            .split(' ')
            .map((token) => token[0])
            .join('')}
          backgroundColor={getUserColor(name)}
          title={name}
        />
      ))}
    </UserIconGroup>
  );
};
NonStacked.args = {
  animated: false,
  stacked: false,
  iconSize: 'medium',
};

export const WithTooltip: Story<UserIconGroupProps> = (args) => {
  const userNames = [
    'Terry Rivers',
    'Robin Mercer',
    'Morgan Vera',
    'Ashley Miles',
    'Jean Mullins',
    'Charlie Mayfield',
    'Peyton Pennington',
    'Justice Harrington',
  ];

  const [tooltipVisible, setTooltipVisible] = React.useState<boolean>(false);

  const excessIconProps = {
    onMouseOver: () => setTooltipVisible(true),
    onMouseOut: () => setTooltipVisible(false),
  };

  return (
    <div className='iui-tooltip-container'>
      <UserIconGroup {...args} excessIconProps={excessIconProps}>
        {userNames.map((name) => (
          <UserIcon
            size='medium'
            key={name}
            abbreviation={name
              .split(' ')
              .map((token) => token[0])
              .join('')}
            backgroundColor={getUserColor(name)}
            title={name}
          />
        ))}
      </UserIconGroup>
      {tooltipVisible && (
        <span className='iui-tooltip right'>Charlie Mayfield</span>
      )}
    </div>
  );
};
WithTooltip.args = {
  animated: false,
  iconSize: 'medium',
};
