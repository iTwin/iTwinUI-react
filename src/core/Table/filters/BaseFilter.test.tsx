/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BaseFilter } from './BaseFilter';

it('should consume the click event and stop its propagation', () => {
  const parentClick = jest.fn();
  const childClick = jest.fn();
  render(
    <div onClick={parentClick}>
      <BaseFilter>
        <button onClick={childClick}>button</button>
      </BaseFilter>
    </div>,
  );

  screen.getByText('button').click();
  expect(childClick).toHaveBeenCalled();
  expect(parentClick).not.toHaveBeenCalled();
});
