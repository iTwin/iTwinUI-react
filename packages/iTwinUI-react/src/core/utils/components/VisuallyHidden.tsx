/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';

export type VisuallyHiddenProps = React.ComponentPropsWithRef<'div'>;

export const VisuallyHidden = (props: VisuallyHiddenProps) => {
  const { className, ...rest } = props;

  return <div className={cx('iui-visually-hidden', className)} {...rest} />;
};

export default VisuallyHidden;
