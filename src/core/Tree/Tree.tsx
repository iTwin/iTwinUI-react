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
  nodeData: NodeRenderData<T>;
  depth: number;
  subNodeIds?: Array<string>;
};

type NodeRenderData<T> = Omit<NodeData<T>, 'subNodes'>;

export type TreeProps<T> = {
  /**
   * Custom renderer for items inside tree, recommended to use `TreeNode` component.
   */
  nodeRenderer: (props: NodeRenderData<T>) => JSX.Element;
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

    const activeIndex = items.findIndex(
      (el) => el === treeRef.current?.ownerDocument.activeElement,
    );
    const currentIndex = activeIndex > -1 ? activeIndex : 0;
    const currentItem = items[currentIndex] as HTMLElement;

    const type = currentItem.classList.contains('iui-tree-node')
      ? 'node'
      : currentItem.classList.contains('iui-button')
      ? 'expander'
      : currentItem.parentElement?.classList.contains('iui-checkbox')
      ? 'checkbox'
      : '';

    let nodeId = '';
    let expander;
    let checkbox;
    switch (type) {
      case 'expander':
        nodeId =
          currentItem.parentElement?.parentElement?.parentElement?.id ?? '';
        expander = currentItem;
        checkbox = currentItem.parentElement?.parentElement?.querySelector(
          '.iui-checkbox',
        );
        break;
      case 'checkbox':
        nodeId =
          currentItem.parentElement?.parentElement?.parentElement?.id ?? '';
        expander = currentItem.parentElement?.parentElement?.querySelector(
          '.iui-button',
        ) as HTMLElement;
        checkbox = currentItem;
        break;
      default:
        nodeId = currentItem.parentElement?.id ?? '';
        expander = currentItem.querySelector('.iui-button') as HTMLElement;
        checkbox = currentItem.querySelector('.iui-checkbox');
        break;
    }

    const itemsInNode = [checkbox, expander].filter((el) => el != null);
    let newIndex = -1;
    const isExpanded = expander
      ?.querySelector('.iui-button-icon')
      ?.classList.contains('iui-tree-node-content-expander-icon-expanded');

    switch (event.key) {
      case 'ArrowDown': {
        //Go to next tree node
        for (let n = currentIndex + 1; n < items.length; n++) {
          if (items[n].classList.contains('iui-tree-node')) {
            newIndex = n;
            break;
          }
        }
        break;
      }
      case 'ArrowUp': {
        //Go to previous tree node
        for (let n = currentIndex - 1; n >= 0; n--) {
          if (items[n].classList.contains('iui-tree-node')) {
            newIndex = n;
            break;
          }
        }
        break;
      }
      case 'ArrowLeft':
        if (currentItem === itemsInNode[0] && isExpanded) {
          expander.click();
          return;
        } else if (currentItem === itemsInNode[0] || itemsInNode.length === 0) {
          //Go to parent
          let parentIndex = -1;
          for (let n = 0; n < items.length; n++) {
            const parentOwns = (items[n].parentElement
              ?.lastChild as HTMLElement)
              .getAttribute('aria-owns')
              ?.split(', ');
            if (
              parentOwns &&
              parentOwns?.findIndex((id) => id === nodeId) != -1
            ) {
              parentIndex = n;
              break;
            }
          }
          if (parentIndex === -1) {
            //If no parent was found, go to node above
            for (let n = currentIndex - 1; n >= 0; n--) {
              if (items[n].classList.contains('iui-tree-node')) {
                if (items[n].parentElement?.id != nodeId) {
                  parentIndex = n;
                  break;
                }
              }
            }
          }
          newIndex = parentIndex;
        } else if (type === 'node') {
          const rightMostItem = items.findIndex(
            (el) => el === itemsInNode[itemsInNode.length - 1],
          );
          newIndex = rightMostItem != -1 ? rightMostItem : currentIndex - 1;
        } else {
          newIndex = currentIndex - 1;
        }
        break;
      case 'ArrowRight':
        if (
          currentItem === itemsInNode[itemsInNode.length - 1] &&
          isExpanded === false
        ) {
          expander.click();
          return;
        } else {
          newIndex = currentIndex + 1;
        }
        break;
      case 'Enter':
      case ' ':
      case 'Spacebar':
        currentItem.click();
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
        const { subNodes, ...nodeRenderData } = getNode(element);
        const flatNode: FlatNode<T> = {
          nodeData: nodeRenderData,
          depth: depth,
        };
        nodeIdList.push(flatNode.nodeData.nodeId);
        flatList.push(flatNode);
        if (flatNode.nodeData.isExpanded) {
          const subNodeIds = flatNodes(subNodes, depth + 1);
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
