/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils';
// import cx from 'classnames';
import '@itwin/itwinui-css/css/notification-marker.css';

export type NotificationMarkerProps = {
  // children: React.ReactNode;
  children: JSX.Element;
};

/**
 * Describe me here!
 * @example
 * Example usages go here!
 */
export const NotificationMarker = (props: NotificationMarkerProps) => {
  const { ...rest } = props;
  console.log(props);
  useTheme();
  return (
    // <div className={cx('iui-notification-positive', 'iui-urgent')} {...rest}>
    <div className={'iui-notification-positive'} {...rest}>
      {props.children}
      {/* abc */}
    </div>
  );
};

// {/* <div {...rest} /> */}
//         // <>
//     // </>

export default NotificationMarker;
