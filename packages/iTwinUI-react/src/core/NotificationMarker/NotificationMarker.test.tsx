/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';

import { NotificationMarker } from './NotificationMarker';

it('should render in its most basic state', () => {
  const { container } = render(<NotificationMarker>Demo</NotificationMarker>);
  const notificationMarker = container.querySelector('div');

  expect(notificationMarker).toBeTruthy();
  expect(notificationMarker).toHaveClass('iui-notification-primary');
  expect(notificationMarker).toHaveTextContent('Demo');
});

it('should propagate pertinent props', () => {
  const { container } = render(
    <NotificationMarker type='positive' urgent={true}>
      🏠
    </NotificationMarker>,
  );
  const notificationMarker = container.querySelector('div');
  expect(notificationMarker).toHaveClass('iui-notification-positive');
  expect(notificationMarker).toHaveClass('iui-urgent');
  expect(notificationMarker).toHaveTextContent('🏠');
});

it('should propagate misc props', () => {
  const { container } = render(
    <NotificationMarker
      className='test-class'
      style={{ color: 'rebeccapurple' }}
      aria-label='Home'
    >
      🏠
    </NotificationMarker>,
  );
  const notificationMarker = container.querySelector('div');
  expect(notificationMarker).toHaveClass('test-class');
  expect(notificationMarker).toHaveStyle('color: rebeccapurple');
  expect(notificationMarker).toHaveTextContent('🏠');
  expect(notificationMarker).toHaveAttribute('aria-label', 'Home');
});
