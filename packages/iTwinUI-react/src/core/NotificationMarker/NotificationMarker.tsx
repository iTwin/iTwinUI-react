/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CommonProps, useTheme } from '../utils';
import cx from 'classnames';
import '@itwin/itwinui-css/css/notification-marker.css';

export type NotificationMarkerProps = {
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
  variant?: 'primary' | 'positive' | 'warning' | 'negative';
  /**
   * Set this to true for important notifications
   */
  urgent?: boolean;
} & Omit<CommonProps, 'title'>;

/**
 * Describe me here!
 * @example
 * Example usages go here!
 */
export const NotificationMarker = (props: NotificationMarkerProps) => {
  const {
    className,
    children,
    variant = 'primary',
    urgent = false,
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
        { [`iui-notification-${variant}`]: true, 'iui-urgent': urgent },
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
