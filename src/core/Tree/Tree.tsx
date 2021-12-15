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
      selectedNodes?: Array<string>;
      setSelectedNode?: (
        node: Array<string> | ((prev: Array<string>) => Array<string>),
      ) => void;
      onNodeSelected?: (
        event: React.SyntheticEvent,
        nodeIds: Array<string>,
      ) => void;
      onNodeExpanded?: () => void;
      checkbox?: React.ReactNode;
      onNodeCheckboxSelected?: () => void;
      nodeDepth?: number;
      selectionType?: 'single' | 'multi' | 'none';
    }
  | undefined
>(undefined);

export type TreeProps = {
  /**
   * Callback fired when selecting a TreeNode.
   */
  onNodeSelected?: (
    event: React.SyntheticEvent,
    nodeIds: Array<string>,
  ) => void;
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
   * Type of selection for Tree.
   * Single allows only 1 TreeNode to be selected at a time.
   * Multi allows multiple TreeNodes to be selected.
   * None does not allow selection of TreeNodes.
   * @default single
   */
  selectionType?: 'single' | 'multi' | 'none';
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
    selectionType = 'single',
    children,
    className,
    ...rest
  } = props;
  useTheme();

  const [selectedNodes, setSelectedNode] = React.useState<Array<string>>();

  return (
    <TreeContext.Provider
      value={{
        selectedNodes,
        setSelectedNode,
        onNodeSelected,
        onNodeExpanded,
        checkbox,
        onNodeCheckboxSelected,
        selectionType,
      }}
    >
      <ul className={cx('iui-tree', className)} role='tree' {...rest}>
        {children}
      </ul>
    </TreeContext.Provider>
  );
};

export default Tree;
