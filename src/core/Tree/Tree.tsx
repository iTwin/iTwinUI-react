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
      nodeDepth?: number;
    }
  | undefined
>(undefined);

export type NodeData = {
  subnodes?: Array<NodeData>;
  nodeId: string;
  label?: string;
  subLabel?: string;
  isExpanded?: boolean;
  isDisabled?: boolean;
  depth?: number;
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
   * Node ids of selected nodes.
   * If undefined, selecting nodes will be handled automatically.
   */
  selectedNodes?: Array<string>;
  /**
   * Get the NodeData.
   */
  getNode?: (node?: NodeData | number) => NodeData | undefined;
} & CommonProps;

/**
 * @example
  <Tree
    data={data}
    getNode={getNode}
    nodeRenderer={(props) => (
      <TreeNode
        nodeId={props.nodeId}
        label={props.label}
        sublabel={props.subLabel}
        subNodes={props.subnodes}
        onNodeExpanded={onNodeExpanded}
        onNodeSelected={onSelectedNodeChange}
        isDisabled={props.isDisabled}
        isExpanded={props.isExpanded}
        nodeCheckbox={<Checkbox variant='eyeball' checked={true} />}
        icon={<SvgPlaceholder />}
      />
    )}
    selectedNodes={selectedNodes}
    {...args}
  />
 */
export const Tree = (props: TreeProps) => {
  const {
    data,
    className,
    nodeRenderer,
    getNode,
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

  const getSubNodes = React.useCallback((node: NodeData, depth: number) => {
    let flatNodes: NodeData[] = [];

    if (node.isExpanded) {
      if (node?.subnodes?.length) {
        node.subnodes.forEach((sub) => {
          sub.depth = depth;
          flatNodes.push(sub);
          flatNodes = [...flatNodes, ...getSubNodes(sub, depth + 1)];
        });
      }
    }
    return flatNodes;
  }, []);

  const flatNodesList = React.useMemo(() => {
    let flatList: NodeData[] = [];
    data?.forEach((_, index) => {
      const flatNode = getNode?.(index);
      if (flatNode) {
        flatList = [...flatList, flatNode];
        if (flatNode.isExpanded) {
          flatList = [...flatList, ...getSubNodes(flatNode, 1)];
        }
      }
    });

    return flatList;
  }, [data, getNode, getSubNodes]);

  return (
    <ul
      className={cx('iui-tree', className)}
      role='tree'
      onKeyDown={handleKeyDown}
      ref={treeRef}
      {...rest}
    >
      {flatNodesList.map((flatNode) => (
        <React.Fragment key={flatNode.nodeId}>
          <TreeContext.Provider
            value={{
              selectedNodes: selectedNodes ?? selected,
              setSelectedNode: selectedNodes ? undefined : setSelected,
              nodeDepth: flatNode.depth,
            }}
          >
            {nodeRenderer?.(flatNode)}
          </TreeContext.Provider>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Tree;
