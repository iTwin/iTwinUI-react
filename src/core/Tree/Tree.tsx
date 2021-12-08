/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { TreeNode } from './TreeNode';
import { CommonProps, useTheme } from '../utils';
import 'D:/itwinUI/iTwinUI/lib/css/tree.css'; //'@itwin/itwinui-css/css/tree.css';

export type TreeProps = {
  /**
   * Callback fired when selecting a TreeNode.
   */
  onNodeSelected?: () => void;
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
  const { onNodeSelected, children, ...rest } = props;
  useTheme();

  return (
    <div {...rest}>
      <ul className='iui-tree' role='tree'>
        {React.Children.map(children, (node, index) =>
          React.isValidElement(node) ? (
            <TreeNode
              key={index + node.props['title']}
              title={node.props['title']}
              caption={node.props['caption']}
              onSelected={onNodeSelected}
            >
              {node.props['children']}
            </TreeNode>
          ) : (
            node
          ),
        )}
      </ul>
    </div>
  );
};

export default Tree;
