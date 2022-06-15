/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import {
  CommonProps,
  useTheme,
  getFocusableElements,
  VirtualScroll,
} from '../utils';
import '@itwin/itwinui-css/css/tree.css';
import cx from 'classnames';
import { TreeContext } from './TreeContext';

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
  indexInGroup: number;
};

export type NodeRenderProps<T> = Omit<NodeData<T>, 'subNodes'>;

export type TreeProps<T> = {
  /**
   * Render function that should return the node element.
   * Recommended to use `TreeNode` component.
   * Must be memoized.
   * @example
   * const nodeRenderer = React.useCallback(({ node, ...rest }: NodeRenderProps<DataType>) => (
   *   <TreeNode
   *     label={node.label}
   *     onNodeExpanded={onNodeExpanded}
   *     {...rest}
   *   />
   * ), [onNodeExpanded])
   */
  nodeRenderer: (props: NodeRenderProps<T>) => JSX.Element;
  /**
   * Array of custom data used for `TreeNodes` inside `Tree`.
   */
  data: T[];
  /**
   * Function that maps your `data` entry to `NodeData` that has all info about the node state.
   * It will be used to render a tree node in `nodeRenderer`.
   * Must be memoized.
   * @example
   * const getNode = React.useCallback((node: DemoData): NodeData<DemoData> => {
   *   return {
   *     subNodes: node.subItems,
   *     nodeId: node.id,
   *     node,
   *     isExpanded: expandedNodes[node.id],
   *     hasSubNodes: node.subItems.length > 0,
   *   };
   * }, [expandedNodes]);
   */
  getNode: (node: T) => NodeData<T>;
  /**
   * Virtualization is used to have a better perfomance with a lot of nodes.
   * @default false
   * @beta
   */
  enableVirtualization?: boolean;
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

  const [expandedNodes, setExpandedNodes] = React.useState<Record<string, boolean>>({});
  const onNodeExpanded = React.useCallback((nodeId: string, isExpanded: boolean) => {
    setExpandedNodes((oldExpanded) => ({ ...oldExpanded, [nodeId]: isExpanded }));
  }, []);

  const getNode = React.useCallback((node: DemoData): NodeData<DemoData> => {
    return {
      subNodes: node.subItems,
      nodeId: node.id,
      node,
      isExpanded: expandedNodes[node.id],
      hasSubNodes: node.subItems.length > 0,
    };
  }, [expandedNodes]);

  <Tree<DemoData>
    data={data}
    getNode={getNode}
    nodeRenderer={React.useCallback(({ node, ...rest }) => (
      <TreeNode
        label={node.label}
        onNodeExpanded={onNodeExpanded}
        {...rest}
      />
    ), [onNodeExpanded])}
  />
 */

export const Tree = <T,>(props: TreeProps<T>) => {
  const {
    data,
    className,
    nodeRenderer,
    getNode,
    enableVirtualization = false,
    ...rest
  } = props;
  useTheme();

  const treeRef = React.useRef<HTMLUListElement>(null);

  const focusedIndex = React.useRef<number>(0);
  React.useEffect(() => {
    focusedIndex.current = 0;
  }, [data]);

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

  const [flatNodesList, firstLevelNodesList] = React.useMemo(() => {
    const flatList: FlatNode<T>[] = [];
    const firstLevelNodes: FlatNode<T>[] = [];

    const flattenNodes = (
      nodes: T[] = [],
      depth = 0,
      parentNode?: FlatNode<T>,
    ) => {
      const nodeIdList = Array<string>();
      nodes.forEach((element, index) => {
        const { subNodes, ...nodeProps } = getNode(element);
        const flatNode: FlatNode<T> = {
          nodeProps,
          depth,
          parentNode,
          indexInGroup: index,
        };
        nodeIdList.push(flatNode.nodeProps.nodeId);
        flatList.push(flatNode);
        if (depth === 0) {
          firstLevelNodes.push(flatNode);
        }
        if (flatNode.nodeProps.isExpanded) {
          const subNodeIds = flattenNodes(subNodes, depth + 1, flatNode);
          flatNode.subNodeIds = subNodeIds;
        }
      });
      return nodeIdList;
    };

    flattenNodes(data);

    return [flatList, firstLevelNodes];
  }, [data, getNode]);

  const virtualizedItemRenderer = React.useCallback(
    (index: number) => {
      const node = flatNodesList[index];
      return (
        <TreeContext.Provider
          key={node.nodeProps.nodeId}
          value={{
            nodeDepth: node.depth,
            subNodeIds: node.subNodeIds,
            groupSize:
              node.depth === 0
                ? firstLevelNodesList.length
                : node.parentNode?.subNodeIds?.length ?? 0,
            indexInGroup: node.indexInGroup,
            parentNodeId: node.parentNode?.nodeProps.nodeId,
          }}
        >
          {nodeRenderer(node.nodeProps)}
        </TreeContext.Provider>
      );
    },
    [firstLevelNodesList.length, flatNodesList, nodeRenderer],
  );

  // const { outerProps, innerProps, visibleChildren } = useVirtualization({
  //   itemsLength: flatNodesList.length,
  //   itemRenderer: virtualizedItemRenderer,
  // });

  return (
    <div>
      <ul
        className={cx('iui-tree', className)}
        role='tree'
        onKeyDown={handleKeyDown}
        ref={treeRef}
        tabIndex={0}
        onFocus={() => {
          const items = getFocusableNodes();
          if (items.length > 0) {
            items[focusedIndex.current]?.focus();
          }
        }}
        {...rest}
      >
        {enableVirtualization && (
          <VirtualScroll
            itemsLength={flatNodesList.length}
            itemRenderer={virtualizedItemRenderer}
          />
        )}
        {!enableVirtualization &&
          flatNodesList.map((flatNode) => (
            <TreeContext.Provider
              key={flatNode.nodeProps.nodeId}
              value={{
                nodeDepth: flatNode.depth,
                subNodeIds: flatNode.subNodeIds,
                groupSize:
                  flatNode.depth === 0
                    ? firstLevelNodesList.length
                    : flatNode.parentNode?.subNodeIds?.length ?? 0,
                indexInGroup: flatNode.indexInGroup,
                parentNodeId: flatNode.parentNode?.nodeProps.nodeId,
              }}
            >
              {nodeRenderer(flatNode.nodeProps)}
            </TreeContext.Provider>
          ))}
      </ul>
    </div>
  );
};

export default Tree;
