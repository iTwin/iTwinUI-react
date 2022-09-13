/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils';

export type NotificationMarkerProps = {
  a?: string;
};

/**
 * Describe me here!
 * @example
 * Example usages go here!
 */
export const NotificationMarker = (props: NotificationMarkerProps) => {
  // const { ...rest } = props;
  console.log(props);
  useTheme();
  return (
    <>
      {/* <div {...rest} /> */}
      <div>abc</div>
    </>
  );
};

export default NotificationMarker;
