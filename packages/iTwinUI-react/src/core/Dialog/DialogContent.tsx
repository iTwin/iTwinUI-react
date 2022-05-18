/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { CommonProps, useTheme } from '../utils';
import '@itwin/itwinui-css/css/dialog.css';

export type DialogContentProps = {
  /**
   * Main content in the `Dialog`.
   */
  children: React.ReactNode;
} & React.ComponentPropsWithRef<'div'>;

/**
 * Container for content in `Dialog`.
 */
export const DialogContent = React.forwardRef<
  HTMLDivElement,
  DialogContentProps
>((props, ref) => {
  const { children, className, ...rest } = props;

  useTheme();
  return (
    <div className={cx('iui-dialog-content', className)} ref={ref} {...rest}>
      {children}
    </div>
  );
});

export default DialogContent;
