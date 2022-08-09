/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useTheme } from '../utils';
import '@itwin/itwinui-css/css/dialog.css';

export type DialogWrapperProps = React.ComponentPropsWithRef<'div'>;

/**
 * Dialog wrapper used for draggable dialogs.
 * @example
 * <DialogWrapper>
 *   <Dialog>
 *    ...
 *  </Dialog>
 * </DialogWrapper>
 */
export const DialogWrapper = React.forwardRef<
  HTMLDivElement,
  DialogWrapperProps
>((props, ref) => {
  const { children, className, ...rest } = props;
  useTheme();
  return (
    <div className={cx('iui-dialog-wrapper', className)} ref={ref} {...rest}>
      {children}
    </div>
  );
});

export default DialogWrapper;
