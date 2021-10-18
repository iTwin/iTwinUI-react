/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';
import { CommonProps, useTheme } from '../utils';
import '@itwin/itwinui-css/css/information-panel.css';

export type InformationPanelBodyProps = {
  children: React.ReactNode;
} & Omit<CommonProps, 'title'>;

export const InformationPanelBody = (props: InformationPanelBodyProps) => {
  const { className, children, ...rest } = props;

  useTheme();

  return (
    <div className={cx('iui-information-body', className)} {...rest}>
      {children}
    </div>
  );
};

export default InformationPanelBody;
