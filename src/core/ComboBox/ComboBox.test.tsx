/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';

import { ComboBox, ComboBoxProps } from './ComboBox';

const renderComponent = (props?: Partial<ComboBoxProps<number>>) => {
  return render(
    <ComboBox
      options={[
        { label: 'Item 1', value: 1 },
        { label: 'Item 2', value: 2 },
        { label: 'Item 3', value: 3 },
      ]}
      {...props}
    />,
  );
};

const assertBaseElement = (container: HTMLElement) => {
  const rootElement = container.querySelector(
    '.iui-input-container',
  ) as HTMLDivElement;
  expect(rootElement).toHaveClass('iui-inline-icon');

  const input = rootElement.querySelector('.iui-input') as HTMLInputElement;
  expect(input).toHaveAttribute('role', 'combobox');
  expect(input).toHaveAttribute('autocapitalize', 'none');
  expect(input).toHaveAttribute('autocorrect', 'off');
  expect(input).toHaveAttribute('spellcheck', 'false');

  return input;
};

it('should render in its most basic state', () => {
  const { container } = renderComponent();
  const input = assertBaseElement(container);

  input.focus();
  expect(input).toHaveAttribute('aria-expanded', 'true');
  expect(input.getAttribute('aria-owns')?.endsWith('list')).toBeTruthy();

  const list = container.querySelector('.iui-menu') as HTMLUListElement;
  expect(list).toHaveAttribute('role', 'listbox');
  expect(list.children).toHaveLength(3);
  list.querySelectorAll('.iui-menu-item').forEach((item, index) => {
    expect(item).toHaveTextContent(`Item ${index + 1}`);
    expect(item).toHaveAttribute('aria-selected', 'false');
  });
});

it('should render with selected value', () => {
  const { container } = renderComponent({ value: 2 });
  const input = assertBaseElement(container);
  expect(input.value).toEqual('Item 2');

  input.focus();
  container.querySelectorAll('.iui-menu-item').forEach((item, index) => {
    expect(item).toHaveTextContent(`Item ${index + 1}`);
    if (index === 1) {
      expect(item).toHaveClass('iui-active');
      expect(item).toHaveAttribute('aria-selected', 'true');
    }
  });
});

// TODO: write more tests
