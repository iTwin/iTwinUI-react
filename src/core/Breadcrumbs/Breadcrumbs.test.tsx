/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';

import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';
import { BreadcrumbItem } from './BreadcrumbItem';
import { SvgChevronRight } from '@itwin/itwinui-icons-react';

const renderComponent = (props?: Partial<BreadcrumbsProps>) => {
  return render(
    <Breadcrumbs
      items={[...Array(3)].map((_, index) => (
        <BreadcrumbItem key={index}>Item {index}</BreadcrumbItem>
      ))}
      {...props}
    />,
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
  Object.defineProperty(HTMLElement.prototype, 'scrollWidth', { value: 400 });
  Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { value: 300 });

  const { container } = renderComponent();

  expect(container.querySelector('.iui-breadcrumbs')).toBeTruthy();
  expect(container.querySelector('.iui-breadcrumbs-list')).toBeTruthy();

  const breadcrumbs = container.querySelectorAll('.iui-breadcrumbs-item');
  expect(breadcrumbs.length).toEqual(3);
  expect(breadcrumbs[0].textContent).toEqual('Item 0');
  // TODO: fix this 😕
  // expect(breadcrumbs[1].textContent).toEqual('…');
  // expect(breadcrumbs[1].firstElementChild?.classList).toContain('iui-ellipsis');
  // expect(breadcrumbs[2].textContent).toEqual('Item 2');
});
