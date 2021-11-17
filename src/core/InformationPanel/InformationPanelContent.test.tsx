/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';

import { InformationPanelContent } from './InformationPanelContent';
import * as UseContainerWidth from '../utils/hooks/useContainerWidth';

it('should render in its most basic state', () => {
  const { container } = render(
    <InformationPanelContent>inner content</InformationPanelContent>,
  );

  const element = container.querySelector(
    '.iui-information-body-content',
  ) as HTMLElement;
  expect(element).toHaveClass('iui-inline');
  expect(element).toHaveTextContent('inner content');
});

it.each(['inline', 'stacked'] as const)(
  'should render with responsiveBreakpoint (%s)',
  (layout) => {
    jest
      .spyOn(UseContainerWidth, 'useContainerWidth')
      .mockReturnValue([jest.fn(), layout === 'inline' ? 400 : 200]);

    const { container } = render(
      <InformationPanelContent responsiveBreakpoint={300}>
        inner content
      </InformationPanelContent>,
    );
    const element = container.querySelector(
      '.iui-information-body-content',
    ) as HTMLElement;
    expect(element).toHaveTextContent('inner content');

    if (layout === 'inline') {
      expect(element).toHaveClass('iui-inline');
    } else {
      expect(element).not.toHaveClass('iui-inline');
    }
  },
);

it('should propagate misc props', () => {
  const { container } = render(
    <InformationPanelContent className='test class' style={{ color: 'black' }}>
      inner content
    </InformationPanelContent>,
  );

  const element = container.querySelector(
    '.iui-information-body-content',
  ) as HTMLElement;
  expect(element).toHaveClass('test class');
  expect(element).toHaveStyle('color: black');
  expect(element).toHaveTextContent('inner content');
});
