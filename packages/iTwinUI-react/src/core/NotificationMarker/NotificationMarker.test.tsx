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
