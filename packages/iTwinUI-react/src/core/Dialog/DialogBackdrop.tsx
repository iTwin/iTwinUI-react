/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Backdrop, BackdropProps } from '../Backdrop';
import { useDialogContext } from './DialogContext';

export type DialogBackdropProps = BackdropProps;

/**
 * Backdrop component for dialog. Recommended to be used as a child of `Dialog`.
 * @example
 * <Dialog.Backdrop />
 */
export const DialogBackdrop = React.forwardRef<
  HTMLDivElement,
  DialogBackdropProps
>((props, ref) => {
  const dialogContext = useDialogContext();
  const { isVisible = dialogContext.isOpen, ...rest } = props;
  return <Backdrop isVisible={isVisible} ref={ref} {...rest} />;
});

export default DialogBackdrop;
