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
    <UserIconGroup>
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

// TODO: Write tests here!
