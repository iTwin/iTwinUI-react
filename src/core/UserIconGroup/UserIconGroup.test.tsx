/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';

import { UserIcon, UserIconGroup } from '../../core';

function generateUserIcons(length: number) {
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

  return Array(length)
    .fill(null)
    .map((_, index) => userNames[index % userNames.length])
    .map((name, index) => (
      <UserIcon
        key={`${name}-${index}`}
        title={name}
        abbreviation={name
          .split(' ')
          .map((token) => token[0])
          .join('')}
      />
    ));
}

it('should render in its most basic state', () => {
  const { container } = render(
    <UserIconGroup iconSize='medium'>{generateUserIcons(7)}</UserIconGroup>,
  );
  const userGroup = container.querySelector(
    '.iui-user-icon-list.iui-stacked',
  ) as HTMLElement;
  expect(userGroup).toBeTruthy();
  expect(userGroup.classList).not.toContain(`iui-animated`);

  const userGroupIconCount = container.querySelectorAll(
    '.iui-user-icon-list > .iui-user-icon',
  );
  expect(userGroupIconCount.length).toBe(6);
  const countIcon = container.querySelector(
    '.iui-user-icon-count',
  ) as HTMLElement;
  expect(countIcon.textContent).toBe('2');

  expect(userGroup.querySelectorAll('.iui-stroke').length).toBe(6);
  expect(userGroup.querySelectorAll('.iui-initials').length).toBe(6);
});

it('should render animated', () => {
  const { container } = render(
    <UserIconGroup iconSize='medium' animated={true}>
      {generateUserIcons(7)}
    </UserIconGroup>,
  );
  expect(
    container.querySelector('.iui-user-icon-list.iui-animated'),
  ).toBeTruthy();
});

it('should render many icons', () => {
  const { container } = render(
    <UserIconGroup iconSize='medium'>{generateUserIcons(105)}</UserIconGroup>,
  );
  expect(
    container.querySelector('.iui-user-icon-list.iui-stacked'),
  ).toBeTruthy();
  expect(
    container.querySelectorAll('.iui-user-icon-list > .iui-user-icon').length,
  ).toBe(6);
  const countIcon = container.querySelector(
    '.iui-user-icon-count',
  ) as HTMLElement;
  expect(countIcon.textContent).toBe('99+');
});

it('should render not stacked', () => {
  const { container } = render(
    <UserIconGroup iconSize='medium' stacked={false}>
      {generateUserIcons(7)}
    </UserIconGroup>,
  );

  expect(
    container.querySelector('.iui-user-icon-list.iui-stacked'),
  ).toBeFalsy();
});

it.each(['small', 'medium', 'large', 'x-large'] as Array<
  'small' | 'medium' | 'large' | 'x-large'
>)('should render with %s size', (size) => {
  const { container } = render(
    <UserIconGroup iconSize={size} stacked={false}>
      {generateUserIcons(7)}
    </UserIconGroup>,
  );

  expect(
    container.querySelectorAll(
      `.iui-user-icon-list > .iui-user-icon.iui-${size}`,
    ),
  ).toBeTruthy();
});

it('should render custom classname', () => {
  const { container } = render(
    <UserIconGroup
      iconSize='medium'
      className='custom-classname'
      stacked={false}
    >
      {generateUserIcons(7)}
    </UserIconGroup>,
  );

  expect(
    container.querySelector('.iui-user-icon-list.custom-classname'),
  ).toBeTruthy();
});

it('should render custom classname for count icon', () => {
  const { container } = render(
    <UserIconGroup
      iconSize='medium'
      countIconProps={{ className: 'custom-classname' }}
      stacked={false}
    >
      {generateUserIcons(7)}
    </UserIconGroup>,
  );

  expect(
    container.querySelector(
      '.iui-user-icon-list > .iui-user-icon-count.custom-classname',
    ),
  ).toBeTruthy();
});
