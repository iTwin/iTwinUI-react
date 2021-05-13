/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';

import { ToastMaster } from './ToastMaster';
import { ToastProps } from './Toast';

const mockToastObject1 = {
  category: 'informational',
  content: 'mockText1',
  id: 1,
  isVisible: true,
} as ToastProps;

const mockToastObject2 = {
  category: 'negative',
  content: 'mockText2',
  id: 2,
  isVisible: true,
} as ToastProps;

it('should render toasts', () => {
  const { container } = render(
    <ToastMaster toasts={[mockToastObject1, mockToastObject2]} />,
  );

  expect(container.querySelector('.iui-toast-wrapper')).toBeTruthy();

  const toasts = container.querySelectorAll('.iui-toast');
  expect(toasts.length).toBe(2);
  expect(toasts.item(0).classList).toContain('iui-informational');
  expect(toasts.item(0).textContent).toBe('mockText1');
  expect(toasts.item(1).classList).toContain('iui-negative');
  expect(toasts.item(1).textContent).toBe('mockText2');
});
