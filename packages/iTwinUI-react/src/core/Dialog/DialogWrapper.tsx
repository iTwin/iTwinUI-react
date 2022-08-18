/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useMergedRefs, useTheme } from '../utils';
import '@itwin/itwinui-css/css/dialog.css';
import { DialogDragContext } from './DialogDragContext';

export type DialogWrapperProps = React.ComponentPropsWithRef<'div'>;

/**
 * Dialog wrapper used for draggable dialogs in order to make them draggable relatively to this container.
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
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const refs = useMergedRefs(ref, wrapperRef);
  useTheme();
  return (
    <div className={cx('iui-dialog-wrapper', className)} ref={refs} {...rest}>
      <DialogDragContext.Provider value={{ wrapperRef }}>
        {children}
      </DialogDragContext.Provider>
    </div>
  );
});

export default DialogWrapper;
