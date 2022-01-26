/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CommonProps, useTheme, getFocusableElements } from '../utils';
import '@itwin/itwinui-css/css/tree.css';
import cx from 'classnames';

export const TreeContext = React.createContext<
  | {
      nodeDepth: number;
      subNodeIds?: string[];
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
  /**
   * If true, the first selected or enabled TreeNode will be focused automatically.
   * @default true
   */
  setFocus?: boolean;
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
  const {
    data,
    className,
    nodeRenderer,
    getNode,
    setFocus = true,
    ...rest
  } = props;
  useTheme();

  const treeRef = React.useRef<HTMLUListElement>(null);
  const [focusedIndex, setFocusedIndex] = React.useState<number | null>();

  React.useEffect(() => {
    const items = getFocusableElements(treeRef.current);
    if (focusedIndex != null) {
      (items?.[focusedIndex] as HTMLLIElement)?.focus();
      return;
    }

    const selectedIndex = items.findIndex((el) =>
      el.classList.contains('iui-active'),
    );
    if (setFocus) {
      setFocusedIndex(selectedIndex > -1 ? selectedIndex : 0);
    }
  }, [setFocus, focusedIndex]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    const items = getFocusableElements(treeRef.current);
    if (!items?.length) {
      return;
    }

    let newIndex = -1;
    const activeIndex = items.findIndex(
      (el) => el === treeRef.current?.ownerDocument.activeElement,
    );
    const currentIndex = activeIndex > -1 ? activeIndex : 0;

    const expander = items[currentIndex].querySelector(
      '.iui-tree-node-content-expander-icon',
    ) as HTMLElement;
    let isCheckbox = false;
    if (items[currentIndex].parentElement?.classList.contains('iui-checkbox')) {
      isCheckbox = true;
    }

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
        if (isCheckbox) {
          newIndex = currentIndex - 1;
        } else if (
          expander === null ||
          !expander?.classList.contains(
            'iui-tree-node-content-expander-icon-expanded',
          )
        ) {
          let parentIndex = -1;
          for (let n = 0; n < items.length; n++) {
            const parentOwns = (items[n].parentElement
              ?.lastChild as HTMLElement)
              .getAttribute('aria-owns')
              ?.split(', ');
            if (
              parentOwns &&
              parentOwns?.findIndex(
                (id) => id === items[currentIndex].parentElement?.id,
              ) != -1
            ) {
              parentIndex = n;
              break;
            }
          }
          newIndex = parentIndex > -1 ? parentIndex : currentIndex - 1;
        } else {
          expander.parentElement?.click();
          return;
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
        (items[currentIndex] as HTMLElement).click();
        event.preventDefault();
        return;
    }

    if (newIndex >= 0 && newIndex < items.length) {
      setFocusedIndex(newIndex);
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
          }}
        >
          {nodeRenderer(flatNode.nodeData)}
        </TreeContext.Provider>
      ))}
    </ul>
  );
};

export default Tree;
