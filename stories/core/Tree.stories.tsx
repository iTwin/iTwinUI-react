/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Tree, TreeProps, TreeNode, Checkbox } from '../../src/core';
import { action } from '@storybook/addon-actions';
import { SvgPlaceholder } from '@itwin/itwinui-icons-react';
import { NodeData } from '../../src/core/Tree/Tree';

export default {
  component: Tree,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
  },
  title: 'Core/Tree',
} as Meta<TreeProps>;

export const Basic: Story<TreeProps> = (args) => {
  const [selectedNodes, setSelectedNodes] = React.useState([
    'Node 0',
    'Node 3.2',
    'Node 22',
  ]);
  const onSelectedNodeChange = React.useCallback(
    (nodeId: string, selected: boolean) => {
      if (selected) {
        setSelectedNodes([...selectedNodes, nodeId]);
        action(`Selected node ${nodeId}`)();
      } else {
        setSelectedNodes(selectedNodes.filter((item) => item != nodeId));
        action(`Unselected node ${nodeId}`)();
      }
    },
    [selectedNodes],
  );

  const [expandedNodes, setExpandedNodes] = React.useState([
    'Node 2',
    'Node 2.1',
    'Node 3',
  ]);
  const onNodeExpanded = React.useCallback(
    (nodeId: string, expanded: boolean) => {
      if (expanded) {
        setExpandedNodes([...expandedNodes, nodeId]);
        action(`Expanded node ${nodeId}`)();
      } else {
        setExpandedNodes(expandedNodes.filter((item) => item != nodeId));
        action(`Closed node ${nodeId}`)();
      }
    },
    [expandedNodes],
  );

  const [disabledNodes] = React.useState([
    'Node 4',
    'Node 3.0',
    'Node 6',
    'Node 10',
  ]);

  const generateItem = React.useCallback(
    (index: number, parentRow = '', depth = 0): NodeData => {
      const keyValue = parentRow ? `${parentRow}.${index}` : `${index}`;
      return {
        nodeId: `Node ${keyValue}`,
        label: `Node ${keyValue}`,
        subLabel: `Sublabel for Node ${keyValue}`,
        isExpanded:
          expandedNodes.findIndex((id) => id === `Node ${keyValue}`) != -1,
        isDisabled:
          disabledNodes.findIndex((id) => id === `Node ${keyValue}`) != -1,
        subnodes:
          depth < 10
            ? Array(Math.round(index % 5))
                .fill(null)
                .map((_, index) => generateItem(index, keyValue, depth + 1))
            : [],
      };
    },
    [disabledNodes, expandedNodes],
  );

  const data = React.useMemo(
    () =>
      Array(50)
        .fill(null)
        .map((_, index) => generateItem(index)),
    [generateItem],
  );

  const getNode = (node: number) => {
    return data[node];
  };

  return (
    <Tree
      nodeCount={50}
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
          nodeCheckbox={
            <Checkbox variant='eyeball' disabled={props.isDisabled} />
          }
          icon={<SvgPlaceholder />}
        />
      )}
      selectedNodes={selectedNodes}
      {...args}
    />
  );
};
