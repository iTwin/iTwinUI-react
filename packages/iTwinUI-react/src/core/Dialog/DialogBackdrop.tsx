/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Backdrop, BackdropProps } from '../Backdrop';
import { useDialogContext } from './DialogContext';

export type DialogBackdropProps = BackdropProps;

export const DialogBackdrop = React.forwardRef<
  HTMLDivElement,
  DialogBackdropProps
>((props, ref) => {
  const dialogContext = useDialogContext();
  const { isVisible = dialogContext.isOpen, ...rest } = props;
  return <Backdrop isVisible={isVisible} ref={ref} {...rest} />;
});

export default DialogBackdrop;
