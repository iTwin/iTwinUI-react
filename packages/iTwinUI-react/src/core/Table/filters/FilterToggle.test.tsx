/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/

import { render, screen } from '@testing-library/react';
import React from 'react';
import { FilterToggle } from './FilterToggle';
import { tableFilters } from './tableFilters';

it('should display active filter', () => {
  const column = {
    canFilter: true,
    filterValue: 'value',
    render: jest.fn(),
    setFilter: jest.fn(),
    Filter: tableFilters.TextFilter(),
  } as any;

  render(<FilterToggle column={column} />);

  const filterButton = screen.getByRole('button');
  expect(filterButton).toHaveClass('iui-active');
});

it('should display active filter for false filter value', () => {
  const column = {
    canFilter: true,
    filterValue: false,
    render: jest.fn(),
    setFilter: jest.fn(),
    Filter: tableFilters.TextFilter(),
  } as any;

  render(<FilterToggle column={column} />);

  const filterButton = screen.getByRole('button');
  expect(filterButton).toHaveClass('iui-active');
});

it('should hide active filter when not defined', () => {
  const column = {
    canFilter: true,
    render: jest.fn(),
    setFilter: jest.fn(),
    Filter: tableFilters.TextFilter(),
  } as any;

  render(<FilterToggle column={column} />);

  const filterButton = screen.getByRole('button');
  expect(filterButton).not.toHaveClass('iui-active');
});

it('should hide active filter for empty filter value', () => {
  const column = {
    canFilter: true,
    filterValue: '',
    render: jest.fn(),
    setFilter: jest.fn(),
    Filter: tableFilters.TextFilter(),
  } as any;

  render(<FilterToggle column={column} />);

  const filterButton = screen.getByRole('button');
  expect(filterButton).not.toHaveClass('iui-active');
});
