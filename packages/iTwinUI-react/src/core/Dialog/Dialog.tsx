/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { CommonProps, useTheme } from '../utils';
import '@itwin/itwinui-css/css/dialog.css';
import { DialogBackdrop } from './DialogBackdrop';
import { DialogTitleBar } from './DialogTitleBar';
import { DialogContent } from './DialogContent';

export type DialogProps = {
  /**
   * Content of the dialog.
   */
  children: React.ReactNode;
} & Omit<CommonProps, 'title'>;

/**
 * Dialog component which can wrap any content.
 * @example
 * <Dialog>
 *   <Dialog.TitleBar>
 *     My dialog title
 *   </Dialog.TitleBar>
 *   <Dialog.Content>
 *     Here is my dialog content
 *   </Dialog.Content>
 *   <Dialog.ButtonBar>
 *     <Button styleType='high-visibility'>
 *       Primary button
 *     </Button>
 *     <Button>
 *       Secondary button
 *     </Button>
 *   </Dialog.ButtonBar>
 * </Dialog>
 */
export const Dialog = (props: DialogProps) => {
  const { className, children, ...rest } = props;

  useTheme();

  return (
    <div className={cx('iui-dialog', className)} role='dialog' {...rest}>
      {children}
    </div>
  );
};

Dialog.Backdrop = DialogBackdrop;
Dialog.TitleBar = DialogTitleBar;
Dialog.Content = DialogContent;

export default Dialog;
