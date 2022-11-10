/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render, screen } from '@testing-library/react';
import { NonIdealState } from './NonIdealState';

it(`displays correctly`, () => {
  const props = {
    svg: <div>svg</div>,
    heading: 'heading',
    description: 'description',
    actions: <div>actions</div>,
  };

  const { container } = render(<NonIdealState {...props} />);

  expect(container.querySelector('.iui-non-ideal-state')).toBeTruthy();
  expect(screen.getByText(props.heading)).toBeTruthy();
  expect(screen.getByText(props.description)).toBeTruthy();

  expect(
    container.querySelector('.iui-non-ideal-state-illustration'),
  ).toHaveTextContent('svg');

  expect(
    container.querySelector('.iui-non-ideal-state-title'),
  ).toHaveTextContent('heading');

  expect(
    container.querySelector('.iui-non-ideal-state-description'),
  ).toHaveTextContent('description');

  expect(
    container.querySelector('.iui-non-ideal-state-actions'),
  ).toHaveTextContent('actions');
});
