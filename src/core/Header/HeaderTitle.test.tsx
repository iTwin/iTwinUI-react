/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';
import SvgPlaceholder from '@itwin/itwinui-icons-react/cjs/icons/Placeholder';

import HeaderTitle from './HeaderTitle';

it('renders default correctly', () => {
  const { container } = render(
    <HeaderTitle logo={<SvgPlaceholder />}>Application</HeaderTitle>,
  );

  const root = container.querySelector('.iui-header-logo') as HTMLDivElement;
  expect(root).toBeTruthy();
  expect(root.getAttribute('role')).toBeNull();

  const {
    container: { firstChild: placeholderIcon },
  } = render(<SvgPlaceholder className='iui-header-button-icon' />);
  expect(container.querySelector('.iui-header-button-icon')).toEqual(
    placeholderIcon,
  );

  const label = container.querySelector('.iui-label') as HTMLSpanElement;
  expect(label.textContent).toEqual('Application');
});

it('renders with onClick correctly', () => {
  const onClickMock = jest.fn();
  const { container } = render(
    <HeaderTitle logo={<SvgPlaceholder />} onClick={onClickMock}>
      Application
    </HeaderTitle>,
  );

  const root = container.querySelector('.iui-header-logo') as HTMLDivElement;
  expect(root).toBeTruthy();
  expect(root.getAttribute('role')).toBe('button');
  root.click();

  expect(onClickMock).toHaveBeenCalled();
});

it('renders with no children correctly', () => {
  const { container } = render(<HeaderTitle logo={<SvgPlaceholder />} />);

  const logo = container.querySelector(
    '.iui-header-button-icon:only-child',
  ) as HTMLDivElement;
  expect(logo).toBeTruthy();

  const label = container.querySelector('.iui-label') as HTMLSpanElement;
  expect(label).toBeNull();
});

it('trashes wrong logo type (JS only)', () => {
  const { container } = render(
    <HeaderTitle logo={('myLogo' as unknown) as JSX.Element}>
      Application
    </HeaderTitle>,
  );

  const root = container.querySelector('.iui-header-logo') as HTMLDivElement;
  expect(root).toBeTruthy();

  const label = container.querySelector(
    '.iui-label:only-child',
  ) as HTMLSpanElement;
  expect(label).toBeTruthy();
});
