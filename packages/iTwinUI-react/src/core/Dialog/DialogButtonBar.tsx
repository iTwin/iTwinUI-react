/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { CommonProps, useTheme } from '../utils';
import '@itwin/itwinui-css/css/dialog.css';

export type DialogButtonBarProps = {
  /**
   * Buttons in the dialog bar.
   */
  children: React.ReactNode;
} & React.ComponentPropsWithRef<'div'>;

/**
 * Container for Buttons in dialog.
 */
export const DialogButtonBar = React.forwardRef<
  HTMLDivElement,
  DialogButtonBarProps
>((props, ref) => {
  const { children, className, ...rest } = props;

  useTheme();
  return (
    <div className={cx('iui-dialog-button-bar', className)} ref={ref} {...rest}>
      {children}
    </div>
  );
});

export default DialogButtonBar;
