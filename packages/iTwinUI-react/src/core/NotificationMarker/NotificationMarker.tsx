/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CommonProps, useTheme } from '../utils';
import cx from 'classnames';
import '@itwin/itwinui-css/css/notification-marker.css';

export type NotificationMarkerProps = {
  /**
   * Content of the NotificationMarker.
   */
  children: React.ReactNode;
  /**
   * Status of notification
   *
   * 'primary' = blue,
   * 'positive' = green,
   * 'warning' = orange,
   * 'negative' = red,
   * @default 'primary'
   */
  status?: 'primary' | 'positive' | 'warning' | 'negative';
  /**
   * Adds a pulse effect to the notification
   * WARNING: Avoid overuse of this prop.
   * @default false
   */
  pulsing?: boolean;
  /**
   * Set this programmatically to false when you just want to render the passed children without the notification
   * @default true
   * @example
   * let [newMessagesCount, ...] = useState(0);
   * ...
   * <NotificationMarker active={newMessagesCount > 0}>
   *   <SvgNotification />
   * </NotificationMarker>
   */
  enabled?: boolean;
} & Omit<CommonProps, 'title'>;

/**
 * A small notification circle to the top-right of the passed children prop.
 * This can be applied to almost anything but mostly intended for icons within default / borderless buttons.
 * @example
 * <IconButton styleType='borderless'>
 *   <NotificationMarker><SvgNotification /></NotificationMarker>
 * </IconButton>
 * @example
 * <NotificationMarker type='positive' urgent={true}>Live</NotificationMarker>
 */
export const NotificationMarker = (props: NotificationMarkerProps) => {
  const {
    className,
    children,
    status = 'primary',
    pulsing = false,
    enabled = true,
    ...rest
  } = props;
  useTheme();
  return (
    <span
      className={cx(
        {
          [`iui-notification-${status}`]: enabled,
          'iui-urgent': enabled && pulsing,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
};

export default NotificationMarker;
