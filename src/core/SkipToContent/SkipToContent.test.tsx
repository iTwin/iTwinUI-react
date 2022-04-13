/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';
import { SkipToContentLink } from './SkipToContentLink';
import { SkipToContentMarker } from './SkipToContentMarker';

it('should render link in its most basic state', () => {
  const { container } = render(<SkipToContentLink />);
  const link = container.querySelector(
    '.iui-skip-to-content-link',
  ) as HTMLElement;
  expect(link).toBeTruthy();
  expect(link.textContent).toBe('Skip to main content');
  expect(link).toHaveAttribute('href', '#skip-to-content-marker');
});

it('should render marker in its most basic state', () => {
  const { container } = render(<SkipToContentMarker />);
  expect(container.querySelector('#skip-to-content-marker')).toBeTruthy();
});

it('should render link with children', () => {
  const { container } = render(
    <SkipToContentLink>Custom child text</SkipToContentLink>,
  );

  const link = container.querySelector(
    '.iui-skip-to-content-link',
  ) as HTMLElement;
  expect(link).toBeTruthy();
  expect(link.textContent).toBe('Custom child text');
});

it('should render marker with children', () => {
  const { container } = render(
    <SkipToContentMarker>
      <a href='#' id='main'>
        main link
      </a>
    </SkipToContentMarker>,
  );

  const marker = container.querySelector('#skip-to-content-marker');
  expect(marker).toBeTruthy();
  expect(marker?.children.length === 1);
  expect(marker?.querySelector('#main')).toBeTruthy();
});

it('should propagate misc props in link', () => {
  const { container } = render(
    <SkipToContentLink
      className='test-class'
      style={{ color: 'red' }}
      aria-label='test-label'
      id='test-id'
      href='#test-href'
    />,
  );
  const link = container.querySelector(
    '.iui-skip-to-content-link',
  ) as HTMLElement;
  console.log(link);
  expect(link).toHaveClass('test-class');
  expect(link).toHaveStyle('color: red');
  expect(link).toHaveAttribute('aria-label', 'test-label');
  expect(link).toHaveAttribute('id', 'test-id');
  expect(link).toHaveAttribute('href', '#test-href');
});

it('should propagate misc props in marker', () => {
  const { container } = render(
    <SkipToContentMarker
      className='test-class'
      style={{ color: 'red' }}
      aria-label='test-label'
    />,
  );
  const marker = container.querySelector(
    '#skip-to-content-marker',
  ) as HTMLAnchorElement;
  expect(marker).toHaveClass('test-class');
  expect(marker).toHaveStyle('color: red');
  expect(marker).toHaveAttribute('aria-label', 'test-label');
});
