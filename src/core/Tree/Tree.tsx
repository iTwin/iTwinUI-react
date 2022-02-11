/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CommonProps, useTheme, getFocusableElements } from '../utils';
import '@itwin/itwinui-css/css/tree.css';
import cx from 'classnames';

export type TreeContextProps = {
  nodeDepth: number;
  subNodeIds?: string[];
  parentNodeId?: string;
  groupSize: number;
  indexInGroup: number;
};

export const TreeContext = React.createContext<TreeContextProps | undefined>(
  undefined,
);

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
   * Flag whether the node is expanded.
   */
  isExpanded?: boolean;
  /**
   * Flag whether the node is disabled.
   */
  isDisabled?: boolean;
  /**
   * Flag whether the node is selected.
   */
  isSelected?: boolean;
  /**
   * Flag whether the node has sub-nodes.
   * Used to determine if node should be expandable.
   */
  hasSubNodes: boolean;
};

type FlatNode<T> = {
  nodeProps: NodeRenderProps<T>;
  depth: number;
  subNodeIds?: Array<string>;
  parentNode?: FlatNode<T>;
};

export type NodeRenderProps<T> = Omit<NodeData<T>, 'subNodes'>;

export type TreeProps<T> = {
  /**
   * Custom renderer for items inside tree, recommended to use `TreeNode` component.
   */
  nodeRenderer: (props: NodeRenderProps<T>) => JSX.Element;
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
 * Tree component used to display a hierarchical structure of `TreeNodes`. 
 * User should control state of expanded, selected and disabled nodes using `getNode` prop.
 * @example
  type DemoData = {
    id: string;
    label: string;
    subItems: DemoData[];
  };

  const data: Array<DemoData> = [
    {
      id: 'Node-1',
      label: 'Facility 1',
      subItems: [{ id: 'Node-1-1', label: 'Unit 1', subItems: [] }],
    },
    {
      id: 'Node-2',
      label: 'Facility 2',
      subItems: [{ id: 'Node-2-1', label: 'Unit 2', subItems: [] }],
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

  const getNode = (node: DemoData): NodeData<DemoData> => {
    return {
      subNodes: node.subItems,
      nodeId: node.id,
      node: node,
      isExpanded: expandedNodes.some((id) => id === node.id),
      hasSubNodes: node.subItems.length > 0,
    };
  };

  <Tree<DemoData>
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

  const focusedIndex = React.useRef<number>(0);
  React.useEffect(() => {
    focusedIndex.current = 0;
  }, [data, getNode]);

  const getFocusableNodes = React.useCallback(() => {
    const focusableItems = getFocusableElements(treeRef.current);
    // Filter out focusable elements that are inside each node, e.g. checkbox
    return focusableItems.filter(
      (i) => !focusableItems.some((p) => p.contains(i.parentElement)),
    ) as HTMLElement[];
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    const items = getFocusableNodes();
    if (!items?.length) {
      return;
    }

    const activeIndex = items.findIndex((el) =>
      el.contains(treeRef.current?.ownerDocument.activeElement as HTMLElement),
    );
    const currentIndex = activeIndex > -1 ? activeIndex : 0;

    switch (event.key) {
      case 'ArrowUp': {
        event.preventDefault();
        const newIndex = Math.max(0, currentIndex - 1);
        items[newIndex].focus();
        focusedIndex.current = newIndex;
        break;
      }
      case 'ArrowDown': {
        event.preventDefault();
        const newIndex = Math.min(items.length - 1, currentIndex + 1);
        items[newIndex].focus();
        focusedIndex.current = newIndex;
        break;
      }
      default:
        break;
    }
  };

  const flatNodesList = React.useMemo(() => {
    const flatList: FlatNode<T>[] = [];

    const flattenNodes = (
      nodes: T[] = [],
      depth = 0,
      parentNode?: FlatNode<T>,
    ) => {
      const nodeIdList = Array<string>();
      nodes.forEach((element) => {
        const { subNodes, ...nodeProps } = getNode(element);
        const flatNode: FlatNode<T> = {
          nodeProps,
          depth,
          parentNode,
        };
        nodeIdList.push(flatNode.nodeProps.nodeId);
        flatList.push(flatNode);
        if (flatNode.nodeProps.isExpanded) {
          const subNodeIds = flattenNodes(subNodes, depth + 1, flatNode);
          flatNode.subNodeIds = subNodeIds;
        }
      });
      return nodeIdList;
    };

    flattenNodes(data);

    return flatList;
  }, [data, getNode]);

  const firstLevelNodes = React.useMemo(
    () => flatNodesList.filter((n) => n.depth === 0),
    [flatNodesList],
  );

  return (
    <ul
      className={cx('iui-tree', className)}
      role='tree'
      onKeyDown={handleKeyDown}
      ref={treeRef}
      tabIndex={0}
      style={{ outline: 0 }}
      onFocus={() => {
        const items = getFocusableNodes();
        if (items.length > 0) {
          items[focusedIndex.current]?.focus();
        }
      }}
      {...rest}
    >
      {flatNodesList.map((flatNode) => (
        <TreeContext.Provider
          key={flatNode.nodeProps.nodeId}
          value={{
            nodeDepth: flatNode.depth,
            subNodeIds: flatNode.subNodeIds,
            groupSize:
              flatNode.depth === 0
                ? firstLevelNodes.length
                : flatNode.parentNode?.subNodeIds?.length ?? 0,
            indexInGroup:
              flatNode.depth === 0
                ? firstLevelNodes.findIndex(
                    (n) => n.nodeProps.nodeId === flatNode.nodeProps.nodeId,
                  )
                : flatNode.parentNode?.subNodeIds?.indexOf(
                    flatNode.nodeProps.nodeId,
                  ) ?? 0,
            parentNodeId: flatNode.parentNode?.nodeProps.nodeId,
          }}
        >
          {nodeRenderer(flatNode.nodeProps)}
        </TreeContext.Provider>
      ))}
    </ul>
  );
};

export default Tree;
