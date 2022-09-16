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
   * Type of notification
   *
   * 'primary' = blue,
   * 'positive' = green,
   * 'warning' = orange,
   * 'negative' = red,
   * @default 'primary'
   */
  type?: 'primary' | 'positive' | 'warning' | 'negative';
  /**
   * Set this to true for important notifications
   * @default false
   */
  urgent?: boolean;
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
  active?: boolean;
} & Omit<CommonProps, 'title'>;

/**
 * A small notification circle to the top-right of the passed children prop. This can be applied to pretty much anything but mostly intended for icons within default / borderless buttons.
 * @example
 * <NotificationMarker type='positive' urgent={true}>Live</NotificationMarker>
 * @example
 * // Primary Intended Use-case
 * <IconButton styleType='borderless'>
 *   <NotificationMarker><SvgNotification /></NotificationMarker>
 * </IconButton>
 */
export const NotificationMarker = (props: NotificationMarkerProps) => {
  const {
    className,
    children,
    type = 'primary',
    urgent = false,
    active = true,
    ...rest
  } = props;
  console.log(props);
  useTheme();
  // return React.cloneElement(children as JSX.Element, {
  //   className: cx(
  //     'iui-notification-positive',
  //     (children as JSX.Element).props.className,
  //   ),
  //   'aria-hidden': true,
  // });

  return (
    <div
      className={cx(
        active
          ? { [`iui-notification-${type}`]: true, 'iui-urgent': urgent }
          : {},
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );

  // <div className={cx('iui-notification-positive', 'iui-urgent')} {...rest}>
  // <div className='iui-notification-positive' {...rest}>
  // <div
  //   className={cx(
  //     {
  //       'iui-notification-positive': true,
  //     },
  //     className,
  //   )}
  //   {...rest}
  // >
  //   {props.children}
  //   {/* abc */}
  // </div>
};

// {/* <div {...rest} /> */}
//         // <>
//     // </>

export default NotificationMarker;
