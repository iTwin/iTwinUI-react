/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';

import { SvgSettings } from '@itwin/itwinui-icons-react';
import { IconButton } from '../Buttons';
import { SidenavSubmenu } from './SidenavSubmenu';
import { SidenavSubmenuHeader } from './SidenavSubmenuHeader';

it('should render in a basic state', () => {
  const { container } = render(
    <SidenavSubmenu>
      <SidenavSubmenuHeader>Submenu header</SidenavSubmenuHeader>
      <span className='test-content'>Submenu content</span>
    </SidenavSubmenu>,
  );

  const submenu = container.querySelector(
    '.iui-side-navigation-submenu-content',
  ) as HTMLElement;
  expect(submenu).toBeTruthy();

  expect(
    submenu.querySelector('.iui-side-navigation-submenu-header'),
  ).toHaveTextContent('Submenu header');
  expect(
    submenu.querySelector(
      '.iui-side-navigation-submenu-content > .test-content',
    ),
  ).toHaveTextContent('Submenu content');
});

it('should render custom header actions', () => {
  const {
    container: { firstChild: actionButton },
  } = render(
    <IconButton styleType='borderless'>
      <SvgSettings />
    </IconButton>,
  );
  const { container } = render(
    <SidenavSubmenu>
      <SidenavSubmenuHeader
        actions={
          <IconButton styleType='borderless'>
            <SvgSettings />
          </IconButton>
        }
      >
        Header label
      </SidenavSubmenuHeader>
    </SidenavSubmenu>,
  );

  const header = container.querySelector(
    '.iui-side-navigation-submenu-header',
  ) as HTMLElement;

  expect(
    header.querySelector('.iui-side-navigation-submenu-header-label'),
  ).toHaveTextContent('Header label');

  const actions = header.querySelector(
    '.iui-side-navigation-submenu-header-actions',
  ) as HTMLElement;
  expect(actions.firstElementChild).toEqual(actionButton);
});

it('should accept className and style props', () => {
  const { container } = render(
    <SidenavSubmenu className='test-class' style={{ width: 400 }}>
      submenu content
    </SidenavSubmenu>,
  );

  const submenu = container.querySelector(
    '.iui-side-navigation-submenu-content',
  ) as HTMLElement;
  expect(submenu).toHaveClass('test-class');
  expect(submenu).toHaveStyle('width: 400px');
  expect(submenu).toHaveTextContent('submenu content');
});
