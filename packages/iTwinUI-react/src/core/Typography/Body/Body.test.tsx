/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { render } from '@testing-library/react';
import React from 'react';
import { Body } from './Body';

describe('Body', () => {
  const testText = 'Test Body text';
  [
    {
      testName: 'renders in its most basic state',
      props: {},
      expectedClasses: 'iui-text-block iui-text-spacing',
    },
    {
      testName: 'renders muted',
      props: { isMuted: true },
      expectedClasses: 'iui-text-block iui-text-spacing iui-text-muted',
    },
    {
      testName: 'renders skeleton',
      props: { isSkeleton: true },
      expectedClasses: 'iui-text-block iui-text-spacing iui-skeleton',
    },
    {
      testName: 'propagates className',
      props: { className: 'mockClassName' },
      expectedClasses: 'iui-text-block iui-text-spacing mockClassName',
    },
  ].forEach(({ testName, props, expectedClasses }) => {
    it(testName, () => {
      const { getByTestId } = render(
        <Body data-testid='body' {...props}>
          {testText}
        </Body>,
      );
      const body = getByTestId('body');
      expect(body.className).toBe(expectedClasses);
      expect(body.textContent).toBe(testText);
    });
  });
});
