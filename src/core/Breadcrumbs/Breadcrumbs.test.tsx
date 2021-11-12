/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';

import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';
import { Button } from '../Buttons';
import { SvgChevronRight } from '@itwin/itwinui-icons-react';
import * as UseOverflow from '../utils/hooks/useOverflow';

const renderComponent = (props?: Partial<BreadcrumbsProps>) => {
  return render(
    <Breadcrumbs {...props}>
      {[...Array(3)].map((_, index) => (
        <Button key={index}>Item {index}</Button>
      ))}
    </Breadcrumbs>,
  );
};

const assertBaseElement = (
  container: HTMLElement,
  { itemsLength = 3, currentIndex = 2 } = {},
) => {
  expect(container.querySelector('.iui-breadcrumbs')).toBeTruthy();
  expect(container.querySelector('.iui-breadcrumbs-list')).toBeTruthy();

  // breadcrumb items
  const breadcrumbs = container.querySelectorAll('.iui-breadcrumbs-item');
  expect(breadcrumbs.length).toEqual(itemsLength);
  breadcrumbs.forEach((breadcrumb, index) => {
    expect(breadcrumb.textContent).toEqual(`Item ${index}`);

    const item = breadcrumb.firstElementChild;
    expect(item).toBeTruthy();

    if (index === currentIndex) {
      expect(breadcrumb.classList).toContain('iui-current');
      expect(item?.getAttribute('aria-current')).toEqual('location');
    } else {
      expect(breadcrumb.classList).not.toContain('iui-current');
      expect(item?.getAttribute('aria-current')).toBeFalsy();
    }
  });
};

beforeEach(() => {
  jest
    .spyOn(UseOverflow, 'useOverflow')
    .mockImplementation((items) => [jest.fn(), items.length]);
});

it('should render all elements in default state', () => {
  const { container } = renderComponent();
  assertBaseElement(container);

  const { container: chevron } = render(<SvgChevronRight />); // default separator

  const separators = container.querySelectorAll('.iui-breadcrumbs-separator');
  expect(separators.length).toEqual(2);
  separators.forEach((separator) => {
    expect(separator.getAttribute('aria-hidden')).toBeTruthy();
    expect(separator.firstElementChild).toEqual(chevron.firstChild);
  });
});

it('should render custom separators', () => {
  const { container } = renderComponent({ separator: '>' });
  expect(container.querySelector('.iui-breadcrumbs')).toBeTruthy();
  expect(container.querySelector('.iui-breadcrumbs-list')).toBeTruthy();
  expect(container.querySelectorAll('.iui-breadcrumbs-item').length).toEqual(3);

  const separators = container.querySelectorAll('.iui-breadcrumbs-separator');
  expect(separators.length).toEqual(2);
  separators.forEach((separator) => {
    expect(separator.getAttribute('aria-hidden')).toBeTruthy();
    expect(separator.textContent).toEqual('>');
  });
});

it('should accept currentIndex prop', () => {
  const { container } = renderComponent({ currentIndex: 1 });
  assertBaseElement(container, { currentIndex: 1 });
});

it('should overflow when there is not enough space', () => {
  jest.spyOn(UseOverflow, 'useOverflow').mockReturnValue([jest.fn(), 2]);
  const { container } = renderComponent();

  expect(container.querySelector('.iui-breadcrumbs')).toBeTruthy();
  expect(container.querySelector('.iui-breadcrumbs-list')).toBeTruthy();

  const breadcrumbs = container.querySelectorAll('.iui-breadcrumbs-item');
  expect(breadcrumbs.length).toEqual(3);
  expect(breadcrumbs[0].textContent).toEqual('Item 0');
  expect(breadcrumbs[1].textContent).toEqual('…');
  expect(breadcrumbs[1].firstElementChild?.classList).toContain('iui-ellipsis');
  expect(breadcrumbs[2].textContent).toEqual('Item 2');
});

it('should restore hidden items when there is enough space again', () => {
  jest.spyOn(UseOverflow, 'useOverflow').mockReturnValue([jest.fn(), 2]);

  const { container, rerender } = renderComponent();

  expect(container.querySelector('.iui-breadcrumbs')).toBeTruthy();
  expect(container.querySelectorAll('.iui-breadcrumbs-item')).toHaveLength(3);
  expect(container.querySelector('.iui-ellipsis')?.textContent).toEqual('…');

  jest.spyOn(UseOverflow, 'useOverflow').mockReturnValue([jest.fn(), 3]);
  rerender(
    <Breadcrumbs>
      {[...Array(3)].map((_, index) => (
        <Button key={index}>Item {index}</Button>
      ))}
    </Breadcrumbs>,
  );

  expect(container.querySelector('.iui-ellipsis')).toBeFalsy();
  assertBaseElement(container);
});

it('should hide first item on very small widths', () => {
  jest.spyOn(UseOverflow, 'useOverflow').mockReturnValue([jest.fn(), 1]);

  const { container } = renderComponent();

  expect(container.querySelector('.iui-breadcrumbs')).toBeTruthy();
  expect(container.querySelector('.iui-breadcrumbs-list')).toBeTruthy();

  const breadcrumbs = container.querySelectorAll('.iui-breadcrumbs-item');
  expect(breadcrumbs.length).toEqual(2);
  expect(breadcrumbs[0].textContent).toEqual('…');
  expect(breadcrumbs[0].firstElementChild?.classList).toContain('iui-ellipsis');
  expect(breadcrumbs[1].textContent).toEqual('Item 2');
});
