/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CommonProps, useTheme } from '../utils';
import 'D:/itwinUI/iTwinUI/lib/css/tree.css'; //'@itwin/itwinui-css/css/tree.css';
import cx from 'classnames';

export const TreeContext = React.createContext<
  | {
      selectedNode?: React.ReactNode;
      setSelectedNode: (
        node: React.ReactNode | ((prev: React.ReactNode) => React.ReactNode),
      ) => void;
      onNodeSelected?: () => void;
      showCheckboxes?: boolean;
    }
  | undefined
>(undefined);

export type TreeProps = {
  /**
   * Callback fired when selecting a TreeNode.
   */
  onNodeSelected?: () => void;
  /**
   * Should Tree show checkboxes before TreeNodes.
   * @default false
   */
  showCheckboxes?: boolean;
  /**
   * Items inside tree.
   * Recommended to use TreeNode component.
   */
  children?: React.ReactNode;
} & CommonProps;

/**
 * Describe me here!
 * @example
 * Example usages go here!
 */
export const Tree = (props: TreeProps) => {
  const {
    onNodeSelected,
    showCheckboxes,
    children,
    className,
    ...rest
  } = props;
  useTheme();

  const [selectedNode, setSelectedNode] = React.useState('');

  return (
    <TreeContext.Provider
      value={{
        selectedNode: selectedNode,
        setSelectedNode: setSelectedNode,
        onNodeSelected: onNodeSelected,
        showCheckboxes: showCheckboxes,
      }}
    >
      <ul className={cx('iui-tree', className)} role='tree' {...rest}>
        {children}
      </ul>
    </TreeContext.Provider>
  );
};

export default Tree;
