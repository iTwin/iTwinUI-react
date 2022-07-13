/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Backdrop, BackdropProps } from '../Backdrop';
import { useMergedRefs } from '../utils';
import { DialogContextProps, useDialogContext } from './DialogContext';

export type DialogBackdropProps = BackdropProps &
  Pick<
    DialogContextProps,
    'isOpen' | 'onClose' | 'isDismissible' | 'closeOnExternalClick'
  >;

export const DialogBackdrop = React.forwardRef<
  HTMLDivElement,
  DialogBackdropProps
>((props, ref) => {
  const dialogContext = useDialogContext();
  const {
    isVisible = dialogContext.isOpen,
    onClose = dialogContext.onClose,
    isDismissible = dialogContext.isDismissible,
    closeOnExternalClick = dialogContext.closeOnExternalClick,
    onMouseDown,
    ...rest
  } = props;

  const backdropRef = React.useRef<HTMLDivElement>(null);
  const refs = useMergedRefs(backdropRef, ref);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    // Prevents React from resetting its properties
    event.persist();
    if (event.target !== backdropRef.current) {
      return;
    }
    if (isDismissible && closeOnExternalClick && onClose) {
      onClose(event);
    }
    onMouseDown?.(event);
  };

  return (
    <Backdrop
      isVisible={isVisible}
      ref={refs}
      {...rest}
      onMouseDown={handleMouseDown}
    />
  );
});

export default DialogBackdrop;
