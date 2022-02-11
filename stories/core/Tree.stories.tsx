/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  Tree,
  TreeProps,
  TreeNode,
  NodeData,
  Checkbox,
  TreeNodeExpander,
  ProgressRadial,
} from '../../src/core';
import { action } from '@storybook/addon-actions';
import { SvgPlaceholder } from '@itwin/itwinui-icons-react';

export default {
  component: Tree,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
  },
  parameters: { controls: { hideNoControlsWarning: true } },
  title: 'Core/Tree',
} as Meta<TreeProps<unknown>>;

export const Basic: Story<TreeProps<unknown>> = () => {
  type StoryData = {
    id: string;
    label: string;
    sublabel: string;
    subItems: StoryData[];
  };

  const [selectedNodes, setSelectedNodes] = React.useState([
    'Node-0',
    'Node-3-2',
    'Node-22',
  ]);
  const onSelectedNodeChange = React.useCallback(
    (nodeId: string, isSelected: boolean) => {
      if (isSelected) {
        setSelectedNodes((oldSelected) => [...oldSelected, nodeId]);
        action(`Selected node ${nodeId}`)();
      } else {
        setSelectedNodes((oldSelected) =>
          oldSelected.filter((item) => item != nodeId),
        );
        action(`Unselected node ${nodeId}`)();
      }
    },
    [],
  );

  const [expandedNodes, setExpandedNodes] = React.useState([
    'Node-2',
    'Node-2-1',
    'Node-3',
  ]);
  const onNodeExpanded = React.useCallback(
    (nodeId: string, isExpanded: boolean) => {
      if (isExpanded) {
        setExpandedNodes((oldExpanded) => [...oldExpanded, nodeId]);
        action(`Expanded node ${nodeId}`)();
      } else {
        setExpandedNodes((oldExpanded) =>
          oldExpanded.filter((item) => item != nodeId),
        );
        action(`Closed node ${nodeId}`)();
      }
    },
    [],
  );

  const [disabledNodes] = React.useState([
    'Node-4',
    'Node-3-0',
    'Node-6',
    'Node-10',
  ]);

  const generateItem = React.useCallback(
    (index: number, parentNode = '', depth = 0): StoryData => {
      const keyValue = parentNode ? `${parentNode}-${index}` : `${index}`;
      return {
        id: `Node-${keyValue}`,
        label: `Node ${keyValue}`,
        sublabel: `Sublabel for Node ${keyValue}`,
        subItems:
          depth < 10
            ? Array(Math.round(index % 5))
                .fill(null)
                .map((_, index) => generateItem(index, keyValue, depth + 1))
            : [],
      };
    },
    [],
  );

  const data = React.useMemo(
    () =>
      Array(50)
        .fill(null)
        .map((_, index) => generateItem(index)),
    [generateItem],
  );

  const getNode = React.useCallback(
    (node: StoryData): NodeData<StoryData> => {
      return {
        subNodes: node.subItems,
        nodeId: node.id,
        node: node,
        isExpanded: expandedNodes.some((id) => id === node.id),
        isDisabled: disabledNodes.some((id) => id === node.id),
        isSelected: selectedNodes.some((id) => id === node.id),
        hasSubNodes: node.subItems.length > 0,
      };
    },
    [disabledNodes, expandedNodes, selectedNodes],
  );

  return (
    <Tree<StoryData>
      data={data}
      getNode={getNode}
      nodeRenderer={React.useCallback(
        ({ node, ...rest }) => (
          <TreeNode
            label={node.label}
            sublabel={node.sublabel}
            onExpanded={onNodeExpanded}
            onSelected={onSelectedNodeChange}
            checkbox={<Checkbox variant='eyeball' disabled={rest.isDisabled} />}
            icon={<SvgPlaceholder />}
            {...rest}
          />
        ),
        [onNodeExpanded, onSelectedNodeChange],
      )}
    />
  );
};

export const AsyncLoading: Story<TreeProps<unknown>> = () => {
  type StoryData = {
    id: string;
    label: string;
    subItems: StoryData[];
    hasSubNodes?: boolean;
    isSkeleton?: boolean;
  };

  const generateItem = React.useCallback((index: number): StoryData => {
    return {
      id: `Node-${index}`,
      label: `Node ${index}`,
      subItems: [],
      hasSubNodes: true,
    };
  }, []);

  const [data, setData] = React.useState(() =>
    Array(50)
      .fill(null)
      .map((_, index) => generateItem(index)),
  );

  const [selectedNodes, setSelectedNodes] = React.useState<Array<string>>([]);
  const onSelectedNodeChange = React.useCallback(
    (nodeId: string, isSelected: boolean) => {
      if (isSelected) {
        setSelectedNodes((oldSelected) => [...oldSelected, nodeId]);
        action(`Selected node ${nodeId}`)();
      } else {
        setSelectedNodes((oldSelected) =>
          oldSelected.filter((item) => item != nodeId),
        );
        action(`Unselected node ${nodeId}`)();
      }
    },
    [],
  );

  const [expandedNodes, setExpandedNodes] = React.useState<Array<string>>([]);
  const onNodeExpanded = React.useCallback(
    (nodeId: string, isExpanded: boolean, node: StoryData) => {
      if (isExpanded && !node.subItems.length && node.hasSubNodes) {
        // Mocking API call
        setTimeout(() => {
          setData((oldData) => {
            const newData = [...oldData];
            const newNode = newData.find((item) => item.id === nodeId);
            if (!newNode) {
              return oldData;
            }
            newNode.subItems = [
              { id: `Async-${nodeId}`, label: `Async ${nodeId}`, subItems: [] },
            ];
            return newData;
          });
        }, 1000);
      }
      if (isExpanded) {
        setExpandedNodes((oldExpanded) => [...oldExpanded, nodeId]);
        action(`Expanded node ${nodeId}`)();
      } else {
        setExpandedNodes((oldExpanded) =>
          oldExpanded.filter((item) => item != nodeId),
        );
        action(`Closed node ${nodeId}`)();
      }
    },
    [],
  );

  const getNode = React.useCallback(
    (node: StoryData): NodeData<StoryData> => {
      return {
        subNodes:
          !node.subItems.length && node.hasSubNodes
            ? [
                {
                  id: `Async-${node.id}`,
                  label: '',
                  subItems: [],
                  isSkeleton: true,
                },
              ]
            : node.subItems,
        nodeId: node.id,
        node: node,
        isExpanded: expandedNodes.some((id) => id === node.id),
        isSelected: selectedNodes.some((id) => id === node.id),
        hasSubNodes: !!node.hasSubNodes,
      };
    },
    [expandedNodes, selectedNodes],
  );

  return (
    <Tree<StoryData>
      data={data}
      getNode={getNode}
      nodeRenderer={React.useCallback(
        ({ node, ...rest }) => (
          <TreeNode
            label={
              node.isSkeleton ? (
                <ProgressRadial size='x-small' indeterminate />
              ) : (
                node.label
              )
            }
            onExpanded={(nodeId, isExpanded) =>
              onNodeExpanded(nodeId, isExpanded, node)
            }
            onSelected={onSelectedNodeChange}
            checkbox={<Checkbox variant='eyeball' disabled={rest.isDisabled} />}
            icon={<SvgPlaceholder />}
            {...rest}
          />
        ),
        [onNodeExpanded, onSelectedNodeChange],
      )}
    />
  );
};

export const CustomizedExpander: Story<TreeProps<unknown>> = () => {
  type StoryData = {
    id: string;
    label: string;
    sublabel: string;
    subItems: StoryData[];
  };

  const [selectedNodes, setSelectedNodes] = React.useState([
    'Node-0',
    'Node-3-2',
    'Node-22',
  ]);
  const onSelectedNodeChange = React.useCallback(
    (nodeId: string, isSelected: boolean) => {
      if (isSelected) {
        setSelectedNodes((oldSelected) => [...oldSelected, nodeId]);
        action(`Selected node ${nodeId}`)();
      } else {
        setSelectedNodes((oldSelected) =>
          oldSelected.filter((item) => item != nodeId),
        );
        action(`Unselected node ${nodeId}`)();
      }
    },
    [],
  );

  const [expandedNodes, setExpandedNodes] = React.useState([
    'Node-2',
    'Node-2-1',
    'Node-3',
  ]);
  const onNodeExpanded = React.useCallback(
    (nodeId: string, isExpanded: boolean) => {
      if (isExpanded) {
        setExpandedNodes((oldExpanded) => [...oldExpanded, nodeId]);
        action(`Expanded node ${nodeId}`)();
      } else {
        setExpandedNodes((oldExpanded) =>
          oldExpanded.filter((item) => item != nodeId),
        );
        action(`Closed node ${nodeId}`)();
      }
    },
    [],
  );

  const generateItem = React.useCallback(
    (index: number, parentNode = '', depth = 0): StoryData => {
      const keyValue = parentNode ? `${parentNode}.${index}` : `${index}`;
      return {
        id: `Node-${keyValue}`,
        label: `Node ${keyValue}`,
        sublabel: `Sublabel for Node ${keyValue}`,
        subItems:
          depth < 10
            ? Array(Math.round(index % 5))
                .fill(null)
                .map((_, index) => generateItem(index, keyValue, depth + 1))
            : [],
      };
    },
    [],
  );

  const data = React.useMemo(
    () =>
      Array(50)
        .fill(null)
        .map((_, index) => generateItem(index)),
    [generateItem],
  );

  const [disabledNodes] = React.useState([
    'Node-4',
    'Node-3',
    'Node-6',
    'Node-10',
  ]);
  const isNodeDisabled = React.useCallback(
    (nodeId: string) => {
      return disabledNodes.some((id) => nodeId.startsWith(id));
    },
    [disabledNodes],
  );

  const getNode = React.useCallback(
    (node: StoryData): NodeData<StoryData> => {
      return {
        subNodes: node.subItems,
        nodeId: node.id,
        node: node,
        isExpanded: expandedNodes.some((id) => id === node.id),
        isDisabled: isNodeDisabled(node.id),
        isSelected: selectedNodes.some((id) => id === node.id),
        hasSubNodes: node.subItems.length > 0,
      };
    },
    [expandedNodes, isNodeDisabled, selectedNodes],
  );

  return (
    <Tree<StoryData>
      data={data}
      getNode={getNode}
      nodeRenderer={React.useCallback(
        ({ node, ...rest }) => (
          <TreeNode
            label={node.label}
            sublabel={node.sublabel}
            onExpanded={onNodeExpanded}
            onSelected={onSelectedNodeChange}
            checkbox={<Checkbox variant='eyeball' disabled={rest.isDisabled} />}
            icon={<SvgPlaceholder />}
            // Allows to expand disabled nodes
            expander={
              <TreeNodeExpander
                isExpanded={rest.isExpanded}
                onClick={(e) => {
                  onNodeExpanded(node.id, !rest.isExpanded);
                  e.stopPropagation();
                }}
              />
            }
            {...rest}
          />
        ),
        [onNodeExpanded, onSelectedNodeChange],
      )}
    />
  );
};
