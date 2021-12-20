/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Tree, TreeProps, TreeNode, Checkbox } from '../../src/core';
import { action } from '@storybook/addon-actions';
import { SvgPlaceholder } from '@itwin/itwinui-icons-react';

export default {
  component: Tree,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
  },
  title: 'Core/Tree',
} as Meta<TreeProps>;

const treeNodes = [
  {
    nodeId: '1',
    label: 'Facility 1',
    subNodeIds: ['1.1', '1.2'],
  },
  { nodeId: '1.1', label: 'Unit 1' },
  { nodeId: '1.2', label: 'Unit 2' },
  { nodeId: '2', label: 'Facility 2', subNodeIds: ['2.1', '2.2'] },
  { nodeId: '2.1', label: 'Unit 1', subNodeIds: ['2.1.1'] },
  {
    nodeId: '2.1.1',
    label: 'System A',
    subNodeIds: ['2.1.1.1'],
  },
  { nodeId: '2.1.1.1', label: 'Subsystem' },
  { nodeId: '2.2', label: 'Unit 2', subNodeIds: ['2.2.1'] },
  {
    nodeId: '2.2.1',
    label: 'System A',
    subNodeIds: ['2.2.1.1'],
  },
  {
    nodeId: '2.2.1.1',
    label: 'Subsystem',
  },
  {
    nodeId: '3',
    label: 'Facility 3',
    subNodeIds: ['3.1'],
  },
  { nodeId: '3.1', label: 'Node 3.1' },
];

export const Basic: Story<TreeProps> = (args) => {
  const onSelectedNodeChange = (
    event: React.SyntheticEvent,
    nodeIds: React.ReactNode[],
  ) => {
    action(`Selected node ${nodeIds[0]}`)();
  };

  const [expandedNodes, setExpandedNodes] = React.useState(['']);
  const onNodeExpanded = (nodeId: string) => {
    if (expandedNodes.findIndex((id) => id === nodeId) != -1) {
      setExpandedNodes(expandedNodes.filter((item) => item != nodeId));
      action(`Closed node ${nodeId}`)();
    } else {
      setExpandedNodes([...expandedNodes, nodeId]);
      action(`Expanded node ${nodeId}`)();
    }
  };

  const disabledNodes = ['1.1', '2.1.1.1', '3'];

  return (
    <Tree onNodeSelected={onSelectedNodeChange} {...args}>
      {treeNodes.map((node, index) => {
        return (
          <TreeNode
            key={index + node.nodeId}
            nodeId={node.nodeId}
            label={node.label}
            sublabel={'Node ' + node.nodeId}
            subNodeIds={node.subNodeIds}
            onNodeExpanded={onNodeExpanded}
            isExpanded={
              expandedNodes.findIndex((id) => id === node.nodeId) != -1
            }
            isDisabled={
              disabledNodes.findIndex((id) => id === node.nodeId) != -1
            }
          />
        );
      })}
    </Tree>
  );
};

export const WithCheckbox: Story<TreeProps> = (args) => {
  const onSelectedNodeChange = (
    event: React.SyntheticEvent,
    nodeIds: React.ReactNode[],
  ) => {
    action(`Selected node ${nodeIds[0]}`)();
  };

  const [expandedNodes, setExpandedNodes] = React.useState(['']);
  const onNodeExpanded = (nodeId: string) => {
    action(`Expanded node ${nodeId}`)();

    if (expandedNodes.findIndex((id) => id === nodeId) != -1) {
      setExpandedNodes(expandedNodes.filter((item) => item != nodeId));
    } else {
      setExpandedNodes([...expandedNodes, nodeId]);
    }
  };

  const onCheckboxSelected = (nodeId: string, checked: boolean) => {
    if (checked) {
      action(`Checked node: ${nodeId}`)();
    } else {
      action(`Unchecked node: ${nodeId}`)();
    }
  };

  return (
    <Tree onNodeSelected={onSelectedNodeChange} {...args}>
      {treeNodes.map((node, index) => {
        return (
          <TreeNode
            key={index + node.nodeId}
            nodeId={node.nodeId}
            label={node.label}
            subNodeIds={node.subNodeIds}
            onNodeExpanded={onNodeExpanded}
            icon={<SvgPlaceholder />}
            isExpanded={
              expandedNodes.findIndex((id) => id === node.nodeId) != -1
            }
            nodeCheckbox={<Checkbox variant='eyeball' checked={true} />}
            onNodeCheckboxSelected={onCheckboxSelected}
          />
        );
      })}
    </Tree>
  );
};

export const Multiselection: Story<TreeProps> = (args) => {
  const onSelectedNodeChange = (
    event: React.SyntheticEvent,
    nodeIds: React.ReactNode[],
  ) => {
    action(`Selected ${nodeIds[nodeIds.length - 1]}`)();
  };

  const [expandedNodes, setExpandedNodes] = React.useState(['']);
  const onNodeExpanded = (nodeId: string) => {
    action(`Expanded node ` + nodeId)();

    if (expandedNodes.findIndex((id) => id === nodeId) != -1) {
      setExpandedNodes(expandedNodes.filter((item) => item != nodeId));
    } else {
      setExpandedNodes([...expandedNodes, nodeId]);
    }
  };

  return (
    <Tree onNodeSelected={onSelectedNodeChange} selectionType='multi' {...args}>
      {treeNodes.map((node, index) => {
        return (
          <TreeNode
            key={index + node.nodeId}
            nodeId={node.nodeId}
            label={node.label}
            subNodeIds={node.subNodeIds}
            onNodeExpanded={onNodeExpanded}
            icon={<SvgPlaceholder />}
            isExpanded={
              expandedNodes.findIndex((id) => id === node.nodeId) != -1
            }
          />
        );
      })}
    </Tree>
  );
};
