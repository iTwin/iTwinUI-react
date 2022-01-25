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
    'Node 0',
    'Node 3.2',
    'Node 22',
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
    'Node 2',
    'Node 2.1',
    'Node 3',
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
    'Node 4',
    'Node 3.0',
    'Node 6',
    'Node 10',
  ]);

  const generateItem = React.useCallback(
    (index: number, parentNode = '', depth = 0): StoryData => {
      const keyValue = parentNode ? `${parentNode}.${index}` : `${index}`;
      return {
        id: `Node ${keyValue}`,
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
            onNodeExpanded={onNodeExpanded}
            onNodeSelected={onSelectedNodeChange}
            nodeCheckbox={
              <Checkbox variant='eyeball' disabled={rest.isDisabled} />
            }
            icon={<SvgPlaceholder />}
            {...rest}
          />
        ),
        [onNodeExpanded, onSelectedNodeChange],
      )}
    />
  );
};
