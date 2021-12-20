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
    selectionType = 'single',
    children,
    className,
    ...rest
  } = props;
  useTheme();

  const treeRef = React.useRef<HTMLUListElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    const nodes: Array<HTMLElement> = Array.from(
      treeRef.current?.querySelectorAll('.iui-tree-node:not(.iui-disabled)') ||
        [],
    );

    if (!nodes.length) {
      return;
    }

    let newIndex = -1;
    const currentIndex = nodes.findIndex(
      (node) => node === treeRef.current?.ownerDocument.activeElement,
    );

    const expander = nodes[currentIndex].querySelector(
      '.iui-tree-node-content-expander-icon',
    ) as HTMLElement;

    switch (event.key) {
      case 'ArrowDown': {
        newIndex = currentIndex + 1;
        break;
      }
      case 'ArrowUp': {
        newIndex = currentIndex - 1;
        break;
      }
      case 'ArrowLeft':
        if (
          expander === null ||
          !expander?.classList.contains(
            'iui-tree-node-content-expander-icon-expanded',
          )
        ) {
          newIndex = currentIndex - 1;
        } else {
          expander.parentElement?.click();
        }
        break;
      case 'ArrowRight':
        if (
          expander === null ||
          expander?.classList.contains(
            'iui-tree-node-content-expander-icon-expanded',
          )
        ) {
          newIndex = currentIndex + 1;
        } else {
          expander.parentElement?.click();
          return;
        }
        break;
      case 'Enter':
      case ' ':
      case 'Spacebar':
        nodes[currentIndex].click();
        return;
    }

    if (newIndex >= 0 && newIndex < nodes.length) {
      nodes[newIndex].focus();
    }
  };

  const getNodeDepth = (nodeId: string) => {
    let depth = 0;
    let parentFound = getParentId(nodeId);

    while (parentFound != '') {
      depth++;
      parentFound = getParentId(parentFound);
    }

    return depth;
  };

  const getParentId = (nodeId: string) => {
    let parentId = '';
    React.Children.map(children, (node) => {
      if (React.isValidElement(node)) {
        const subNodes = (node.props['subNodeIds'] as Array<string>) || [];
        const isAChild = subNodes.find((id) => {
          return id === nodeId;
        });
        if (isAChild) {
          parentId = node.props['nodeId'];
        }
      }
    });
    return parentId;
  };

  const getParentNode = (nodeId: string) => {
    const parentId = getParentId(nodeId);
    let parent = undefined;

    React.Children.map(children, (node) => {
      if (React.isValidElement(node)) {
        if (node.props['nodeId'] === parentId) {
          parent = React.cloneElement(node, {
            parentNode: getParentNode(node.props['nodeId']),
          });
        }
      }
    });

    return parent;
  };

  const [selectedNodes, setSelectedNode] = React.useState<Array<string>>();

  return (
    <ul
      className={cx('iui-tree', className)}
      role='tree'
      onKeyDown={handleKeyDown}
      ref={treeRef}
      {...rest}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return (
            <TreeContext.Provider
              value={{
                selectedNodes,
                setSelectedNode,
                onNodeSelected,
                selectionType,
                nodeDepth: getNodeDepth(child.props['nodeId']),
              }}
            >
              {React.cloneElement(child, {
                parentNode: getParentNode(child.props['nodeId']),
              })}
            </TreeContext.Provider>
          );
        } else {
          return child;
        }
      })}
    </ul>
  );
};

export default Tree;
