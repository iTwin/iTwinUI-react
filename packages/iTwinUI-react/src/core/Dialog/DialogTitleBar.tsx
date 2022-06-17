/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import SvgClose from '@itwin/itwinui-icons-react/cjs/icons/Close';
import { useTheme } from '@storybook/theming';
import { IconButton } from '../Buttons';
import '@itwin/itwinui-css/css/dialog.css';
import { DialogContextProps, useDialogContext } from './DialogContext';

export type DialogTitleBarProps = {
  /**
   * Dialog title bar content.
   */
  children: React.ReactNode;
} & Pick<DialogContextProps, 'isDismissible' | 'onClose'> &
  React.ComponentPropsWithRef<'div'>;

/**
 * Dialog title bar.
 * @example
 * <Dialog.TitleBar isDismissible={true} onClose={onClose}>My dialog title</Dialog.TitleBar>
 */
export const DialogTitleBar = React.forwardRef<
  HTMLDivElement,
  DialogTitleBarProps
>((props, ref) => {
  const dialogContext = useDialogContext();
  const {
    children,
    isDismissible = dialogContext.isDismissible,
    onClose = dialogContext.onClose,
    className,
    ...rest
  } = props;
  useTheme();
  return (
    <div className={cx('iui-dialog-title-bar', className)} ref={ref} {...rest}>
      <div className='iui-dialog-title'>{children}</div>
      {isDismissible && (
        <IconButton
          size='small'
          styleType='borderless'
          onClick={onClose}
          aria-label='Close'
        >
          <SvgClose />
        </IconButton>
      )}
    </div>
  );
});

export default DialogTitleBar;
