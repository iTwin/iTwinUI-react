/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';

import { Sidebar, SidebarProps } from './Sidebar';
import { SidebarButton } from './SidebarButton';
import SvgPlaceholder from '@itwin/itwinui-icons-react/cjs/icons/Placeholder';

function renderComponent(props?: Partial<SidebarProps>) {
  return render(
    <Sidebar
      mainItems={[
        <SidebarButton startIcon={<SvgPlaceholder />} key={0}>
          mockbutton1
        </SidebarButton>,
        <SidebarButton startIcon={<SvgPlaceholder />} key={1}>
          mockbutton2
        </SidebarButton>,
        <SidebarButton startIcon={<SvgPlaceholder />} key={2}>
          mockbutton3
        </SidebarButton>,
      ]}
      {...props}
    />,
  );
}

it('should render in its most basic state', () => {
  const { container } = renderComponent();
  expect(container.querySelector('.iui-side-navigation')).toBeTruthy();
  expect(container.querySelector('.iui-sidenav-content')).toBeTruthy();
  expect(container.querySelector('.iui-expand')).toBeTruthy();

  expect(
    container.querySelectorAll('.iui-top .iui-sidenav-button'),
  ).toHaveLength(3);
});

it('should render expand icon correctly', () => {
  // top
  const { container: root1 } = renderComponent();
  const sidebar1 = root1.querySelector('.iui-side-navigation') as HTMLElement;
  expect(sidebar1).toBeTruthy();

  const expander1 = sidebar1.firstElementChild as HTMLElement;
  expect(expander1.classList).toContain('iui-expand');

  // bottom
  const { container: root2 } = renderComponent({
    expanderVisibility: 'bottom',
  });
  const sidebar2 = root2.querySelector('.iui-side-navigation') as HTMLElement;
  expect(sidebar2).toBeTruthy();

  const expander2 = sidebar2.lastElementChild as HTMLElement;
  expect(expander2.classList).toContain('iui-expand');

  // hidden
  const { container: root3 } = renderComponent({
    expanderVisibility: 'hidden',
  });
  expect(root3.querySelector('.iui-side-navigation')).toBeTruthy();
  expect(root3.querySelector('.iui-expand')).toBeFalsy();
});

// TODO: Write more tests here!
