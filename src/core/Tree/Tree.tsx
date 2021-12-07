/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CommonProps, useTheme } from '../utils';
import 'D:/itwinUI/iTwinUI/lib/css/tree.css'; //'@itwin/itwinui-css/css/tree.css';

export type TreeProps = {
  children?: React.ReactNode;
} & CommonProps;

/**
 * Describe me here!
 * @example
 * Example usages go here!
 */
export const Tree = (props: TreeProps) => {
  const { children, ...rest } = props;
  useTheme();

  return (
    <div {...rest}>
      <ul className='iui-tree' role='tree'>
        {children}
      </ul>
    </div>
  );
};

export default Tree;
