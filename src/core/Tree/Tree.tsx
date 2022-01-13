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
      expandedNodes?: Array<string>;
      setExpandedNodes?: (
        node: Array<string> | ((prev: Array<string>) => Array<string>),
      ) => void;
      nodeDepth?: number;
      parentNode?: FlatNode;
    }
  | undefined
>(undefined);

export type NodeData = {
  subnodes: Array<NodeData>;
  nodeId: string;
  label?: string;
  subLabel?: string;
  isExpanded?: boolean;
  isDisabled?: boolean;
};

type FlatNode = {
  data: NodeData;
  id: string;
  depth: number;
  subNodeIds: string[];
  parent?: FlatNode;
};

export type TreeProps = {
  /**
   * Node renderer.
   */
  nodeRenderer?: (props: NodeData) => JSX.Element;
  /**
   * Items inside tree.
   */
  data?: Array<NodeData>;
  /**
   * Node ids of expanded nodes.
   * If undefined, expanding and collapsing nodes will be handled automatically.
   */
  expandedNodes?: Array<string>;
  /**
   * Node ids of selected nodes.
   * If undefined, selecting nodes will be handled automatically.
   */
  selectedNodes?: Array<string>;
} & CommonProps;

/**
 * @example
  <Tree
    data={data}
    nodeRenderer={(props) => (
      <TreeNode
        nodeId={props.nodeId}
        label={props.label}
        sublabel={props.subLabel}
        subNodes={props.subnodes}
        onNodeExpanded={onNodeExpanded}
        onNodeSelected={onSelectedNodeChange}
        isDisabled={props.isDisabled}
        nodeCheckbox={<Checkbox variant='eyeball' checked={true} />}
        icon={<SvgPlaceholder />}
      />
    )}
    expandedNodes={expandedNodes}
    selectedNodes={selectedNodes}
    {...args}
  />
 */
export const Tree = (props: TreeProps) => {
  const {
    data,
    className,
    nodeRenderer,
    expandedNodes,
    selectedNodes,
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

  const [selected, setSelected] = React.useState<Array<string>>([]);
  const [expanded, setExpanded] = React.useState<Array<string>>([]);

  const flatNodesList = React.useMemo(() => {
    const flatList: FlatNode[] = [];
    const flatNodes = (
      nodes: NodeData[] = [],
      parent?: FlatNode,
      depth = 0,
    ) => {
      const parentId = parent?.id ?? null;
      const nodeIdList = Array<string>();
      nodes.forEach((node: NodeData, index) => {
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
          flatNodes(node.subnodes, nodeWrapper, depth + 1);
        }
      });
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
              selectedNodes: selectedNodes ?? selected,
              setSelectedNode: selectedNodes ? undefined : setSelected,
              expandedNodes: expandedNodes ?? expanded,
              setExpandedNodes: expandedNodes ? undefined : setExpanded,
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
