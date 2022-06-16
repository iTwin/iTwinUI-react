/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useTheme } from '../utils';
import '@itwin/itwinui-css/css/dialog.css';
import { DialogTitleBar } from './DialogTitleBar';
import { DialogContent } from './DialogContent';
import { CSSTransition } from 'react-transition-group';

export type DialogProps = {
  /**
   * Flag whether dialog should be shown.
   * @default false
   */
  isOpen?: boolean;
  /**
   * Type of the dialog.
   * @default 'default'
   */
  styleType?: 'default' | 'fullPage';
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
export const Dialog = Object.assign(
  React.forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
    const {
      className,
      children,
      styleType = 'default',
      isOpen = false,
      ...rest
    } = props;

    useTheme();

    return (
      <CSSTransition
        in={isOpen}
        classNames='iui-dialog-animation'
        timeout={{ exit: 600 }}
        unmountOnExit={true}
      >
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
      </CSSTransition>
    );
  }),
  {
    TitleBar: DialogTitleBar,
    Content: DialogContent,
  },
);

export default Dialog;
