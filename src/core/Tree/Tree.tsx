/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CommonProps, useTheme } from '../utils';
import '@itwin/itwinui-css/css/tree.css';
import cx from 'classnames';

export const TreeContext = React.createContext<
  | {
      selectedNode?: React.ReactNode;
      setSelectedNode: (
        node: React.ReactNode | ((prev: React.ReactNode) => React.ReactNode),
      ) => void;
      onNodeSelected?: () => void;
      onNodeExpanded?: () => void;
      checkbox?: React.ReactNode;
      onNodeCheckboxSelected?: () => void;
    }
  | undefined
>(undefined);

export type TreeProps = {
  /**
   * Callback fired when selecting a TreeNode.
   */
  onNodeSelected?: () => void;
  /**
   * Callback fired when expanding a TreeNode.
   */
  onNodeExpanded?: () => void;
  /**
   * Callback fired when checking a TreeNode's checkbox.
   */
  onNodeCheckboxSelected?: () => void;
  /**
   * Checkbox to be shown before TreeNodes, if undefined checkbox will not be shown.
   * Recommended to use Checkbox component.
   */
  checkbox?: React.ReactNode;
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
    onNodeExpanded,
    checkbox,
    onNodeCheckboxSelected,
    children,
    className,
    ...rest
  } = props;
  useTheme();

  const [selectedNode, setSelectedNode] = React.useState('');

  return (
    <TreeContext.Provider
      value={{
        selectedNode,
        setSelectedNode,
        onNodeSelected,
        onNodeExpanded,
        checkbox,
        onNodeCheckboxSelected,
      }}
    >
      <ul className={cx('iui-tree', className)} role='tree' {...rest}>
        {children}
      </ul>
    </TreeContext.Provider>
  );
};

export default Tree;
