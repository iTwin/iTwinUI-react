/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';

import { UserIconGroup } from './UserIconGroup';
import UserIcon from '../UserIcon/UserIcon';

it('should render in its most basic state', () => {
  const { container } = render(
    <UserIconGroup iconSize='medium'>
      <UserIcon
        abbreviation='RM'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Robin Mercer'
      />
    </UserIconGroup>,
  );
  expect(container.querySelector('div')).toBeTruthy();
});

it('should render animated', () => {
  const { container } = render(
    <UserIconGroup iconSize='medium' animated={true}>
      <UserIcon
        abbreviation='RM'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Robin Mercer'
      />
      <UserIcon
        abbreviation='MR'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Mercer Robin'
      />
    </UserIconGroup>,
  );
  const userGroupContainer = container.querySelector(
    '.iui-user-icon-list',
  ) as HTMLElement;
  expect(userGroupContainer.classList).toContain(`iui-animated`);
});

it('should render not animated', () => {
  const { container } = render(
    <UserIconGroup iconSize='medium' animated={false}>
      <UserIcon
        abbreviation='RM'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Robin Mercer'
      />
      <UserIcon
        abbreviation='MR'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Mercer Robin'
      />
    </UserIconGroup>,
  );
  const userGroupContainer = container.querySelector(
    '.iui-user-icon-list',
  ) as HTMLElement;
  expect(userGroupContainer.classList).not.toContain(`iui-animated`);
});

it('should render stacked', () => {
  const { container } = render(
    <UserIconGroup iconSize='medium'>
      <UserIcon
        abbreviation='RM'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Robin Mercer'
      />
      <UserIcon
        abbreviation='MR'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Mercer Robin'
      />
      <UserIcon
        abbreviation='RM'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Robin Mercer'
      />
      <UserIcon
        abbreviation='MR'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Mercer Robin'
      />
      <UserIcon
        abbreviation='RM'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Robin Mercer'
      />
      <UserIcon
        abbreviation='MR'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Mercer Robin'
      />
      <UserIcon
        abbreviation='RM'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Robin Mercer'
      />
      <UserIcon
        abbreviation='MR'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Mercer Robin'
      />
    </UserIconGroup>,
  );

  const userGroupContainer = container.querySelector(
    '.iui-user-icon-list',
  ) as HTMLElement;
  expect(userGroupContainer.classList).toContain(`iui-stacked`);
  expect(userGroupContainer.querySelector('.iui-user-icon-count')).toBeTruthy();
});

it('should render not stacked', () => {
  const { container } = render(
    <UserIconGroup iconSize='medium' stacked={false}>
      <UserIcon
        abbreviation='RM'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Robin Mercer'
      />
      <UserIcon
        abbreviation='MR'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Mercer Robin'
      />
      <UserIcon
        abbreviation='RM'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Robin Mercer'
      />
      <UserIcon
        abbreviation='MR'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Mercer Robin'
      />
      <UserIcon
        abbreviation='RM'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Robin Mercer'
      />
      <UserIcon
        abbreviation='MR'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Mercer Robin'
      />
      <UserIcon
        abbreviation='RM'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Robin Mercer'
      />
      <UserIcon
        abbreviation='MR'
        backgroundColor='#C8C2B4'
        size='medium'
        title='Mercer Robin'
      />
    </UserIconGroup>,
  );

  const userGroupContainer = container.querySelector(
    '.iui-user-icon-list',
  ) as HTMLElement;
  expect(userGroupContainer.classList).not.toContain(`iui-stacked`);
});
