/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { HeaderGroup } from 'react-table';
import { TableFilterProps } from '../types';
import { TextFilter } from './TextFilter';

const setFilter = jest.fn() as (value: unknown) => void;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderComponent = (initialProps?: Partial<TableFilterProps<any>>) => {
  const props = {
    column: { setFilter } as HeaderGroup,
    close: jest.fn(),
    ...initialProps,
  };
  return render(<TextFilter {...props} />);
};

beforeEach(() => {
  jest.clearAllMocks();
});

it('should call setFilter with input value', () => {
  const { container } = renderComponent();

  const input = container.querySelector('input') as HTMLInputElement;
  expect(input).toBeTruthy();

  fireEvent.change(input, { target: { value: 'test filter' } });
  screen.getByText('Filter').click();

  expect(setFilter).toHaveBeenCalledWith('test filter');
});

it('should call setFilter when Enter is pressed', () => {
  const { container } = renderComponent();

  const input = container.querySelector('input') as HTMLInputElement;
  expect(input).toBeTruthy();

  fireEvent.change(input, { target: { value: 'test filter' } });
  fireEvent.keyDown(input, {
    key: 'Enter',
    charCode: 13,
  });

  expect(setFilter).toHaveBeenCalledWith('test filter');
});

it('should load filter with set value and clear it', () => {
  const { container } = renderComponent({
    column: { filterValue: 'test filter', setFilter } as HeaderGroup,
  });

  const input = container.querySelector('input') as HTMLInputElement;
  expect(input).toBeTruthy();
  expect(input.value).toEqual('test filter');

  screen.getByText('Clear').click();

  expect(setFilter).toHaveBeenCalledWith(undefined);
});
