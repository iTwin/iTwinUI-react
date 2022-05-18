/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useTheme } from '../utils';
import '@itwin/itwinui-css/css/dialog.css';
import { DialogBackdrop } from './DialogBackdrop';
import { DialogTitleBar } from './DialogTitleBar';
import { DialogContent } from './DialogContent';

export type DialogProps = {
  /**
   * Content of the dialog.
   */
  children: React.ReactNode;
} & React.ComponentPropsWithRef<'div'>;

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
const DialogComponent = React.forwardRef<HTMLDivElement, DialogProps>(
  (props, ref) => {
    const { className, children, ...rest } = props;

    useTheme();

    return (
      <div
        className={cx('iui-dialog', className)}
        role='dialog'
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
export const Dialog = Object.assign(DialogComponent, {
  Backdrop: DialogBackdrop,
  TitleBar: DialogTitleBar,
  Content: DialogContent,
});

export default DialogComponent;
