/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import MenuItem from './MenuItem';
import SvgSmileyHappy from '@itwin/itwinui-icons-react/cjs/icons/SmileyHappy';

function assertBaseElement(
  menuItem: HTMLLIElement,
  {
    role = 'menuitem',
    isSelected = false,
    hasIcon = false,
    hasBadge = false,
    disabled = false,
  } = {},
) {
  expect(menuItem).toBeTruthy();
  expect(menuItem.getAttribute('tabindex')).toEqual(disabled ? null : '-1');
  expect(menuItem.getAttribute('role')).toEqual(role);
  expect(menuItem.classList.contains('iui-active')).toBe(isSelected);
  expect(menuItem.classList.contains('iui-disabled')).toBe(disabled);
  expect(menuItem.textContent).toContain('Test item');
  const content = menuItem.querySelector('.iui-content') as HTMLElement;
  const label = content.querySelector('.iui-menu-label') as HTMLElement;
  expect(label).toBeTruthy();
  expect(label.textContent).toContain('Test item');
  expect(
    (menuItem.firstChild as HTMLElement).classList.contains('iui-icon'),
  ).toBe(hasIcon);
  expect(
    (menuItem.lastChild as HTMLElement).classList.contains('iui-icon'),
  ).toBe(hasBadge);
}

it('should render content', () => {
  const { container } = render(<MenuItem>Test item</MenuItem>);

  const menuItem = container.querySelector('.iui-menu-item') as HTMLLIElement;
  assertBaseElement(menuItem);
});

it('should render as selected', () => {
  const { container } = render(<MenuItem isSelected>Test item</MenuItem>);

  const menuItem = container.querySelector('.iui-menu-item') as HTMLLIElement;
  assertBaseElement(menuItem, { isSelected: true });
});

it('should render as disabled', () => {
  const mockedOnClick = jest.fn();
  const { container } = render(
    <MenuItem disabled onClick={mockedOnClick}>
      Test item
    </MenuItem>,
  );

  const menuItem = container.querySelector('.iui-menu-item') as HTMLLIElement;
  assertBaseElement(menuItem, { disabled: true });

  fireEvent.click(menuItem);
  expect(mockedOnClick).toHaveBeenCalledTimes(0);
});

it('should render with an icon', () => {
  const { container } = render(
    <MenuItem icon={<SvgSmileyHappy />}>Test item</MenuItem>,
  );

  const menuItem = container.querySelector('.iui-menu-item') as HTMLLIElement;
  assertBaseElement(menuItem, { hasIcon: true });
});

it('should render with a badge', () => {
  const { container } = render(
    <MenuItem badge={<SvgSmileyHappy />}>Test item</MenuItem>,
  );

  const menuItem = container.querySelector('.iui-menu-item') as HTMLLIElement;
  assertBaseElement(menuItem, { hasBadge: true });
});

it('should render with custom role', () => {
  const { container } = render(<MenuItem role='option'>Test item</MenuItem>);

  const menuItem = container.querySelector('.iui-menu-item') as HTMLLIElement;
  assertBaseElement(menuItem, { role: 'option' });
});

it('should handle click', () => {
  const mockedOnClick = jest.fn();
  const { container } = render(
    <MenuItem onClick={mockedOnClick} value='test_value'>
      Test item
    </MenuItem>,
  );

  const menuItem = container.querySelector('.iui-menu-item') as HTMLLIElement;
  assertBaseElement(menuItem);

  fireEvent.click(menuItem);
  expect(mockedOnClick).toHaveBeenCalledWith('test_value');
});

it('should handle key press', () => {
  const mockedOnClick = jest.fn();
  const { container } = render(
    <MenuItem onClick={mockedOnClick} value='test_value'>
      Test item
    </MenuItem>,
  );

  const menuItem = container.querySelector('.iui-menu-item') as HTMLLIElement;
  assertBaseElement(menuItem);

  fireEvent.keyDown(menuItem, { key: 'Enter' });
  expect(mockedOnClick).toHaveBeenNthCalledWith(1, 'test_value');
  fireEvent.keyDown(menuItem, { key: ' ' });
  expect(mockedOnClick).toHaveBeenNthCalledWith(2, 'test_value');
  fireEvent.keyDown(menuItem, { key: 'Spacebar' });
  expect(mockedOnClick).toHaveBeenNthCalledWith(3, 'test_value');
});

it('should add custom className', () => {
  const { container } = render(
    <MenuItem className='test-className'>Test item</MenuItem>,
  );

  const menuItem = container.querySelector('.iui-menu-item') as HTMLLIElement;
  assertBaseElement(menuItem);
  expect(menuItem.classList).toContain('test-className');
});

it('should add custom style', () => {
  const { container } = render(
    <MenuItem style={{ color: 'red' }}>Test item</MenuItem>,
  );

  const menuItem = container.querySelector('.iui-menu-item') as HTMLLIElement;
  assertBaseElement(menuItem);
  expect(menuItem.style.color).toEqual('red');
});

it('should render sublabel', () => {
  const { container } = render(
    <MenuItem sublabel='Test sublabel'>Test item</MenuItem>,
  );

  const menuItem = container.querySelector(
    '.iui-menu-item.iui-large',
  ) as HTMLLIElement;
  assertBaseElement(menuItem);

  const sublabel = menuItem.querySelector(
    '.iui-content .iui-menu-description',
  ) as HTMLElement;
  expect(sublabel).toBeTruthy();
  expect(sublabel.textContent).toEqual('Test sublabel');
});
