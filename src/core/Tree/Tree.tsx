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
  /**
   * Array of the child nodes contained in the node.
   */
  subNodes?: Array<T>;
  /**
   * Unique id of the node.
   */
  nodeId: string;
  /**
   * Custom type used to map type `T` to `NodeData`
   */
  node: T;
  /**
   * Is the node expanded.
   */
  isExpanded?: boolean;
  /**
   * Is the node disabled.
   */
  isDisabled?: boolean;
  /**
   * Is the node selected.
   */
  isSelected?: boolean;
  /**
   * Does the node have subNodes.
   * Used to determine if node should be expandable.
   */
  hasSubNodes: boolean;
};

type FlatNode<T> = {
  nodeData: NodeData<T>;
  depth: number;
  subNodeIds?: Array<string>;
};

export type TreeProps<T> = {
  /**
   * Custom renderer for items inside tree, recommended to use `TreeNode` component.
   */
  nodeRenderer: (props: NodeData<T>) => JSX.Element;
  /**
   * Array of custom data used for `TreeNodes` inside `Tree`.
   */
  data: T[];
  /**
   * Function to map custom type `T` to `NodeData`, which will be used to render a tree node in `nodeRenderer`.
   */
  getNode: (node: T) => NodeData<T>;
} & Omit<CommonProps, 'title'>;

/**
 * Component used to display a hierarchical structure of `TreeNodes`. 
 * User should control state of expanded, selected, and disabled nodes using `getNode` prop.
 * @example
  type StoryData = {
    id: string;
    label: string;
    subItems: StoryData[];
  };

  const data: Array<StoryData> = [
    {
      id: '1',
      label: 'Facility 1',
      subItems: [{ id: '1.1', label: 'Unit 1', subItems: [] }],
    },
    {
      id: '2',
      label: 'Facility 2',
      subItems: [{ id: '2.1', label: 'Unit 2', subItems: [] }],
    },
  ];

  const [expandedNodes, setExpandedNodes] = React.useState<Array<string>>([]);
  const onNodeExpanded = (nodeId: string, isExpanded: boolean) => {
    if (isExpanded) {
      setExpandedNodes((oldExpanded) => [...oldExpanded, nodeId]);
    } else {
      setExpandedNodes((oldExpanded) =>
        oldExpanded.filter((item) => item != nodeId),
      );
    }
  };

  const getNode = (node: StoryData): NodeData<StoryData> => {
    return {
      subNodes: node.subItems,
      nodeId: node.id,
      node: node,
      isExpanded: expandedNodes.some((id) => id === node.id),
      hasSubNodes: node.subItems.length > 0,
    };
  };

  <Tree<StoryData>
    data={data}
    getNode={getNode}
    nodeRenderer={({ node, ...rest }) => (
      <TreeNode
        label={node.label}
        onNodeExpanded={onNodeExpanded}
        {...rest}
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
    const flatList: FlatNode<T>[] = [];

    const flatNodes = (nodes: T[] = [], depth = 0) => {
      const nodeIdList = Array<string>();
      nodes.forEach((element) => {
        const flatNode: FlatNode<T> = {
          nodeData: getNode(element),
          depth: depth,
        };
        nodeIdList.push(flatNode.nodeData.nodeId);
        flatList.push(flatNode);
        if (flatNode.nodeData.isExpanded) {
          const subNodeIds = flatNodes(flatNode.nodeData.subNodes, depth + 1);
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
          key={flatNode.nodeData.nodeId}
          value={{
            nodeDepth: flatNode.depth ?? 0,
            subNodeIds: flatNode.subNodeIds,
            hasSubNodes: flatNode.nodeData.hasSubNodes,
          }}
        >
          {nodeRenderer(flatNode.nodeData)}
        </TreeContext.Provider>
      ))}
    </ul>
  );
};

export default Tree;
