/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CommonProps, useTheme } from '../utils';
import cx from 'classnames';
import '@itwin/itwinui-css/css/utils.css';

export type NotificationMarkerProps = {
  /**
   * Content of the NotificationMarker.
   */
  children: React.ReactNode;
  /**
   * Status of notification
   *
   * - 'primary' = blue,
   * - 'positive' = green,
   * - 'warning' = orange,
   * - 'negative' = red,
   * - 'white' = white (useful for notifications in buttons with `style` = `high-visibility` | `cta`),
   * @default 'primary'
   */
  status?: 'primary' | 'positive' | 'warning' | 'negative' | 'white';
  /**
   * Adds a pulse effect to the notification.
   *
   * **WARNING**: Avoid overuse of this prop.
   * @default false
   */
  pulsing?: boolean;
  /**
   * Set this programmatically to false when you just want to render the passed children without the notification
   * @default true
   * @example
   * let [newMessagesCount, ...] = useState(0);
   * ...
   * <NotificationMarker enabled={newMessagesCount > 0}>
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
 * <NotificationMarker status='positive' pulsing={true}>Live</NotificationMarker>
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

  const notificationAttributes = enabled
    ? {
        'data-iui-variant': status,
        'data-iui-urgent': pulsing,
      }
    : {};

  return (
    <span
      className={cx({ 'iui-notification-marker': enabled }, className)}
      {...notificationAttributes}
      {...rest}
    >
      {children}
    </span>
  );
};

export default NotificationMarker;
