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
      parentNode?: FlatNode;
    }
  | undefined
>(undefined);

export type TreeData = {
  subnodes: Array<TreeData>;
  label?: string;
  subLabel?: string;
  isExpanded?: boolean;
  isDisabled?: boolean;
};

type FlatNode = {
  data: TreeData;
  id: string;
  depth: number;
  subNodeIds: string[];
  parent?: FlatNode;
};

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
   * Node renderer
   */
  nodeRenderer?: (props: TreeData) => JSX.Element;
  /**
   * Items inside tree.
   */
  data?: Array<TreeData>;
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
    data,
    className,
    nodeRenderer,
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
        event.preventDefault();
        return;
    }

    if (newIndex >= 0 && newIndex < nodes.length) {
      nodes[newIndex].focus();
    }
  };

  const [selectedNodes, setSelectedNode] = React.useState<Array<string>>();

  const flatNodesList = React.useMemo(() => {
    const flatList: FlatNode[] = [];
    const flatNodes = (
      nodes: TreeData[] = [],
      parent?: FlatNode,
      depth = 0,
    ) => {
      const parentId = parent?.id ?? null;
      const nodeIdList = Array<string>();
      nodes.forEach((node: TreeData, index) => {
        const id = parentId ? `${parentId}-${index}` : `${index}`;
        const nodeWrapper: FlatNode = {
          id,
          data: node,
          depth,
          subNodeIds: [],
          parent: parent ?? undefined,
        };
        flatList.push(nodeWrapper);
        nodeIdList.push(id);
        if (node.subnodes && node.subnodes.length) {
          const subNodeIds = flatNodes(node.subnodes, nodeWrapper, depth + 1);
          nodeWrapper.subNodeIds = subNodeIds;
        }
      });
      return nodeIdList;
    };
    flatNodes(data);
    return flatList;
  }, [data]);

  return (
    <ul
      className={cx('iui-tree', className)}
      role='tree'
      onKeyDown={handleKeyDown}
      ref={treeRef}
      {...rest}
    >
      {flatNodesList.map((flatNode) => (
        <React.Fragment key={flatNode.id}>
          <TreeContext.Provider
            value={{
              selectedNodes,
              setSelectedNode,
              onNodeSelected,
              selectionType,
              nodeDepth: flatNode.depth,
              parentNode: flatNode.parent,
            }}
          >
            {nodeRenderer?.(flatNode.data)}
          </TreeContext.Provider>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Tree;
