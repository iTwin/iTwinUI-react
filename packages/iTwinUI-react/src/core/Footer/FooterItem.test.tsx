/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { render } from '@testing-library/react';
import React from 'react';
import { FooterItem } from './FooterItem';

it('should render item when title is passed', () => {
  const { container } = render(<FooterItem title='test-title' />);

  const item = container.querySelector('.iui-legal-footer-item') as HTMLElement;
  expect(item).toBeTruthy();
  expect(item.textContent).toEqual('test-title');
  expect(item.querySelector('a')).toBeFalsy();
});

it('should render item when title and url are passed', () => {
  const { container } = render(
    <FooterItem title='test-title' url='https://www.bentley.com/' />,
  );

  const item = container.querySelector('.iui-legal-footer-item') as HTMLElement;
  expect(item).toBeTruthy();
  expect(item.textContent).toEqual('test-title');
  const anchor = item.querySelector('a') as HTMLAnchorElement;
  expect(anchor).toBeTruthy();
  expect(anchor.href).toEqual('https://www.bentley.com/');
});

it('should render item when children is passed', () => {
  const { container } = render(<FooterItem>test-title</FooterItem>);

  const item = container.querySelector('.iui-legal-footer-item') as HTMLElement;
  expect(item).toBeTruthy();
  expect(item.textContent).toEqual('test-title');
});

it('should propagate misc props', () => {
  const { container } = render(
    <FooterItem
      title='test-title'
      className='test-class'
      style={{ color: 'red' }}
    />,
  );

  const item = container.querySelector('.iui-legal-footer-item') as HTMLElement;
  expect(item).toBeTruthy();
  expect(item.textContent).toEqual('test-title');
  expect(item).toHaveClass('test-class');
  expect(item.style.color).toEqual('red');
});
