/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import '@itwin/itwinui-css/css/toast-notification.css';
import React from 'react';
import { Placement } from 'tippy.js';
import Toast, { ToastProps } from './Toast';

type ToastWrapperProps = {
  toasts: ToastProps[];
  placement?: Omit<
    Placement,
    'right' | 'left' | 'right-start' | 'right-end' | 'left-start' | 'left-end'
  >;
};

export const ToastWrapper = (props: ToastWrapperProps) => {
  const { toasts, placement = 'top' } = props;

  return (
    <span className={`iui-toast-wrapper iui-placement-${placement}`}>
      {toasts.map((toastProps) => {
        return <Toast key={toastProps.id} {...toastProps} />;
      })}
    </span>
  );
};
