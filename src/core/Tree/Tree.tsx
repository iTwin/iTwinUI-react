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
      nodeDepth: number;
      subNodeIds?: string[];
      hasSubNodes: boolean;
    }
  | undefined
>(undefined);

export type NodeData<T> = {
  subNodes?: Array<T>;
  nodeId: string;
  node: T;
  isExpanded?: boolean;
  isDisabled?: boolean;
  isSelected?: boolean;
  depth?: number;
  subNodeIds?: Array<string>;
  hasSubNodes: boolean;
};

export type TreeProps<T> = {
  /**
   * Custom renderer for tree nodes, recommended to use TreeNode component.
   */
  nodeRenderer: (props: NodeData<T>) => JSX.Element;
  /**
   * Items inside tree.
   */
  data: T[];
  /**
   * Get the NodeData.
   */
  getNode: (node: T) => NodeData<T>;
} & CommonProps;

/**
 * Tree
 * @example
  <Tree<TreeData>
    data={data}
    getNode={getNode}
    nodeRenderer={(props) => (
      <TreeNode
        nodeId={props.nodeId}
        label={props.node.label}
        sublabel={props.node.subLabel}
        onNodeExpanded={onNodeExpanded}
        onNodeSelected={onSelectedNodeChange}
        isDisabled={props.isDisabled}
        isExpanded={props.isExpanded}
        isSelected={props.isSelected}
        nodeCheckbox={
          <Checkbox variant='eyeball' disabled={props.isDisabled} />
        }
        icon={<SvgPlaceholder />}
      />
    )}
  />
 */

export const Tree = <T,>(props: TreeProps<T>) => {
  const { data, className, nodeRenderer, getNode, ...rest } = props;
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
          let parentIndex = -1;
          for (let n = 0; n < nodes.length; n++) {
            const parentOwns = (nodes[n].parentElement
              ?.lastChild as HTMLElement)
              .getAttribute('aria-owns')
              ?.split(', ');
            if (
              parentOwns &&
              parentOwns?.findIndex(
                (id) => id === nodes[currentIndex].parentElement?.id,
              ) != -1
            ) {
              parentIndex = n;
              break;
            }
          }
          if (parentIndex != -1) {
            newIndex = parentIndex;
          } else {
            newIndex = currentIndex - 1;
          }
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
      event.preventDefault();
    }
  };

  const flatNodesList = React.useMemo(() => {
    const flatList: NodeData<T>[] = [];

    const flatNodes = (nodes: T[] = [], depth = 0) => {
      const nodeIdList = Array<string>();
      nodes.forEach((element) => {
        const flatNode = getNode(element);
        nodeIdList.push(flatNode.nodeId);
        flatList.push(flatNode);
        flatNode.depth = depth;
        if (flatNode.isExpanded) {
          const subNodeIds = flatNodes(flatNode.subNodes, depth + 1);
          flatNode.subNodeIds = subNodeIds;
        }
      });
      return nodeIdList;
    };
    flatNodes(data);
    return flatList;
  }, [data, getNode]);

  return (
    <ul
      className={cx('iui-tree', className)}
      role='tree'
      onKeyDown={handleKeyDown}
      ref={treeRef}
      {...rest}
    >
      {flatNodesList.map((flatNode) => (
        <TreeContext.Provider
          key={flatNode.nodeId}
          value={{
            nodeDepth: flatNode.depth ?? 0,
            subNodeIds: flatNode.subNodeIds,
            hasSubNodes: flatNode.hasSubNodes,
          }}
        >
          {nodeRenderer(flatNode)}
        </TreeContext.Provider>
      ))}
    </ul>
  );
};

export default Tree;
