/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useTheme } from '../utils';
import '@itwin/itwinui-css/css/dialog.css';
import { DialogContextProps, useDialogContext } from './DialogContext';

export type DialogMainProps = {
  /**
   * Type of the dialog.
   * @default 'default'
   */
  styleType?: 'default' | 'fullPage';
  /**
   * Content of the dialog.
   */
  children: React.ReactNode;
} & Pick<DialogContextProps, 'isOpen'> &
  React.ComponentPropsWithRef<'div'>;

/**
 * Dialog component which can wrap any content.
 * @example
 * <Dialog.Main>
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
 * </Dialog.Main>
 */
export const DialogMain = React.forwardRef<HTMLDivElement, DialogMainProps>(
  (props, ref) => {
    const dialogContext = useDialogContext();
    const {
      className,
      children,
      styleType = 'default',
      isOpen = dialogContext.isOpen,
      ...rest
    } = props;

    useTheme();

    return (
      <div
        className={cx(
          'iui-dialog',
          {
            'iui-dialog-default': styleType === 'default',
            'iui-dialog-full-page': styleType === 'fullPage',
            'iui-dialog-visible': isOpen,
          },
          className,
        )}
        role='dialog'
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

export default DialogMain;
