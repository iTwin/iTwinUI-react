/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';

import { BreadcrumbItem } from './BreadcrumbItem';

it('should render as button by default', () => {
  const mockOnClick = jest.fn();
  const { container } = render(
    <BreadcrumbItem onClick={mockOnClick}>Item</BreadcrumbItem>,
  );

  const item = container.querySelector('button.iui-button') as HTMLElement;
  expect(item).toBeTruthy();
  expect(item.classList).toContain('iui-borderless');
  expect(item.textContent).toEqual('Item');

  item.click();
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});

it('should render as anchor link', () => {
  const mockHref = '/path-to-item';
  const { container } = render(
    <BreadcrumbItem element='a' href={mockHref}>
      Item
    </BreadcrumbItem>,
  );

  const item = container.querySelector('a') as HTMLAnchorElement;
  expect(item).toBeTruthy();
  expect(item.textContent).toEqual('Item');
  expect(item.href).toContain(mockHref);
});

it('should render as span', () => {
  const { container } = render(
    <BreadcrumbItem element='span'>Item</BreadcrumbItem>,
  );

  const item = container.querySelector('span') as HTMLSpanElement;
  expect(item).toBeTruthy();
  expect(item.classList.length).toEqual(0);
  expect(item.textContent).toEqual('Item');
});

it('should propagate common props', () => {
  const { container } = render(
    <BreadcrumbItem
      id='test-id'
      className='test-class'
      style={{ color: 'hotpink' }}
    >
      Item
    </BreadcrumbItem>,
  );

  const item = container.querySelector('#test-id.test-class') as HTMLElement;
  expect(item).toBeTruthy();
  expect(item.textContent).toEqual('Item');
  expect(item.style.color).toEqual('hotpink');
});
