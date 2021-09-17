/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import '@itwin/itwinui-css/css/toast-notification.css';
import React from 'react';
import cx from 'classnames';
import Toast, { ToastProps } from './Toast';
import { ToasterSettings } from './Toaster';
import { TransitionGroup } from 'react-transition-group';

type ToastWrapperProps = {
  toasts: ToastProps[];
} & Pick<ToasterSettings, 'placement'>;

export const ToastWrapper = (props: ToastWrapperProps) => {
  const { toasts, placement = 'top' } = props;

  return (
    <TransitionGroup
      className={cx(`iui-toast-wrapper`, `iui-placement-${placement}`)}
    >
      {toasts.map((toastProps) => {
        return <Toast key={toastProps.id} {...toastProps} />;
      })}
    </TransitionGroup>
  );
};
