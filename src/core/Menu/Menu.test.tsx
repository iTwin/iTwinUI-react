/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import MenuItem from './MenuItem';
import Menu, { MenuProps } from './Menu';
import { MenuDivider } from './MenuDivider';
import { MenuContent } from './MenuContent';

const testLabels = ['Test0', 'Test1', 'Test2'];

function assertBaseElement(
  menu: HTMLUListElement,
  { role = 'menu', focusedIndex = 0, labels = testLabels } = {},
) {
  expect(menu).toBeTruthy();
  expect(menu.getAttribute('role')).toEqual(role);
  const menuItems = menu.querySelectorAll('li');
  expect(menuItems.length).toBe(labels.length);
  menuItems.forEach((item, index) => {
    expect(item.textContent).toContain(labels[index]);
    expect(document.activeElement === item).toBe(focusedIndex === index);
  });
}

function renderComponent(
  initialProps?: Partial<MenuProps>,
  selectedIndex?: number,
) {
  const props: MenuProps = {
    children: testLabels.map((label, index) => (
      <MenuItem key={index} isSelected={selectedIndex === index}>
        {label}
      </MenuItem>
    )),
    ...initialProps,
  };
  return render(<Menu {...props} />);
}

it('should render menu items', () => {
  const { container } = renderComponent();

  const menu = container.querySelector('.iui-menu') as HTMLUListElement;
  assertBaseElement(menu);
});

it('should render menu with custom role', () => {
  const { container } = renderComponent({ role: 'listbox' });

  const menu = container.querySelector('.iui-menu') as HTMLUListElement;
  assertBaseElement(menu, { role: 'listbox' });
});

it('should focus selected item', () => {
  const { container } = renderComponent(undefined, 1);

  const menu = container.querySelector('.iui-menu') as HTMLUListElement;
  assertBaseElement(menu, { focusedIndex: 1 });
});

it('should handle keyboard navigation', () => {
  const { container } = renderComponent({
    children: [
      <MenuContent key={0}>Test content</MenuContent>,
      <MenuItem key={1}>Test0</MenuItem>,
      <MenuItem key={2}>Test1</MenuItem>,
      <MenuDivider key={3} />,
      <MenuItem key={4} disabled>
        Test2
      </MenuItem>,
      <MenuItem key={5}>Test3</MenuItem>,
    ],
  });
  const labels = ['Test content', 'Test0', 'Test1', '', 'Test2', 'Test3'];

  const menu = container.querySelector('.iui-menu') as HTMLUListElement;
  assertBaseElement(menu, { labels, focusedIndex: 1 });

  // Test0 -> Test1
  fireEvent.keyDown(menu, { key: 'ArrowDown' });
  assertBaseElement(menu, { labels, focusedIndex: 2 });
  // Test1 -> Test3
  // Should skip separator and disabled item
  fireEvent.keyDown(menu, { key: 'ArrowDown' });
  assertBaseElement(menu, { labels, focusedIndex: 5 });
  fireEvent.keyDown(menu, { key: 'ArrowDown' });
  assertBaseElement(menu, { labels, focusedIndex: 5 });

  // Test3 -> Test1
  fireEvent.keyDown(menu, { key: 'ArrowUp' });
  assertBaseElement(menu, { labels, focusedIndex: 2 });
  // Test1 -> Test0
  // Should skip separator and disabled item
  fireEvent.keyDown(menu, { key: 'ArrowUp' });
  assertBaseElement(menu, { labels, focusedIndex: 1 });
  fireEvent.keyDown(menu, { key: 'ArrowUp' });
  assertBaseElement(menu, { labels, focusedIndex: 1 });
});

it('should reset focus when children changes', () => {
  const { container, rerender } = render(
    <Menu>
      <MenuItem key={0}>Test0</MenuItem>
      <MenuItem key={1} isSelected>
        Test1
      </MenuItem>
      <MenuItem key={2}>Test2</MenuItem>
    </Menu>,
  );
  const menu = container.querySelector('.iui-menu') as HTMLUListElement;
  assertBaseElement(menu, { focusedIndex: 1 });

  rerender(
    <Menu>
      <MenuItem key={0}>Test0</MenuItem>
      <MenuItem key={1}>Test1</MenuItem>
      <MenuItem key={2}>Test2</MenuItem>
      <MenuItem key={3} isSelected>
        Test3
      </MenuItem>
    </Menu>,
  );
  assertBaseElement(menu, {
    focusedIndex: 3,
    labels: ['Test0', 'Test1', 'Test2', 'Test3'],
  });
});

it('should add custom className', () => {
  const { container } = renderComponent({ className: 'test-className' });

  const menu = container.querySelector('.iui-menu') as HTMLUListElement;
  assertBaseElement(menu);
  expect(menu.classList).toContain('test-className');
});

it('should add custom style', () => {
  const { container } = renderComponent({ style: { color: 'red' } });

  const menu = container.querySelector('.iui-menu') as HTMLUListElement;
  assertBaseElement(menu);
  expect(menu.style.color).toEqual('red');
});
