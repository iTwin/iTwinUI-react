/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { SvgPlaceholder } from '@itwin/itwinui-icons-react';
import { render } from '@testing-library/react';
import React from 'react';

import { HorizontalTab } from './HorizontalTab';

it('renders in its most basic state', () => {
  const { container } = render(<HorizontalTab label='Tab label' />);
  expect(container.querySelector('button.iui-tab')).toBeTruthy();

  const label = container.querySelector('.iui-tab-label') as HTMLElement;
  expect(label).toBeTruthy();
  expect(label.firstElementChild?.textContent).toBe('Tab label');
});

it('should render with sublabel', () => {
  const { container } = render(
    <HorizontalTab label='Tab label' sublabel='Sub-label' />,
  );
  expect(container.querySelector('button.iui-tab')).toBeTruthy();

  const label = container.querySelector('.iui-tab-label') as HTMLElement;
  expect(label).toBeTruthy();
  expect(label.firstElementChild?.textContent).toBe('Tab label');

  const sublabel = label.querySelector('.iui-tab-description') as HTMLElement;
  expect(sublabel.textContent).toEqual('Sub-label');
});

it('renders with icon', () => {
  const { container } = render(
    <HorizontalTab label='Tab label' icon={<SvgPlaceholder />} />,
  );
  expect(container.querySelector('button.iui-tab')).toBeTruthy();

  const label = container.querySelector('.iui-tab-label') as HTMLElement;
  expect(label).toBeTruthy();
  expect(label.firstElementChild?.textContent).toBe('Tab label');

  const {
    container: { firstChild: placeholderIcon },
  } = render(<SvgPlaceholder className='iui-tab-icon' aria-hidden />);
  expect(container.querySelector('.iui-tab-icon')).toEqual(placeholderIcon);
});
