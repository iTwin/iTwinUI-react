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

export const Basic: Story<TreeProps> = (args) => {
  const onSelectedNodeChange = (
    event: React.SyntheticEvent,
    nodeIds: React.ReactNode[],
  ) => {
    action(`Selected node ` + nodeIds[0])();
  };
  const onNodeExpanded = () => {
    action(`Expanded a node`)();
  };

  return (
    <Tree
      onNodeSelected={onSelectedNodeChange}
      onNodeExpanded={onNodeExpanded}
      {...args}
    >
      <TreeNode
        label='Node 1'
        sublabel='Node Caption'
        icon={<SvgPlaceholder />}
        nodeId='1'
      >
        <TreeNode label='Node 1.1' nodeId='1.1' />
      </TreeNode>
      <TreeNode label='Node 2' nodeId='2'>
        <TreeNode label='Node 2.1' icon={<SvgPlaceholder />} nodeId='2.1'>
          <TreeNode
            label={'Node 2.1.1'}
            sublabel='Node Caption'
            isDisabled={true}
            nodeId='2.1.1'
          />
        </TreeNode>
        <TreeNode label='Node 2.2' nodeId='2.2'>
          <TreeNode label='Node 2.2.1' nodeId='2.2.1'>
            <TreeNode
              label={'Node 2.2.1.1'}
              sublabel='Node Caption'
              nodeId='2.2.1.1'
            />
          </TreeNode>
        </TreeNode>
      </TreeNode>
      <TreeNode label='Node 3' isDisabled={true} nodeId='3'>
        <TreeNode label={'Node 3.1'} sublabel='Node Caption' nodeId='3.1' />
      </TreeNode>
    </Tree>
  );
};

export const WithCheckbox: Story<TreeProps> = (args) => {
  const onSelectedNodeChange = (
    event: React.SyntheticEvent,
    nodeIds: React.ReactNode[],
  ) => {
    action(`Selected node ` + nodeIds[0])();
  };
  const onNodeExpanded = () => {
    action(`Expanded a node`)();
  };
  const onCheckboxSelected = () => {
    action(`Checked a node`)();
  };

  return (
    <Tree
      onNodeSelected={onSelectedNodeChange}
      onNodeExpanded={onNodeExpanded}
      checkbox={<Checkbox variant='eyeball' checked={true} />}
      onNodeCheckboxSelected={onCheckboxSelected}
      {...args}
    >
      <TreeNode
        label='Facility 1'
        sublabel='Node Caption'
        icon={<SvgPlaceholder />}
        nodeId='1'
      >
        <TreeNode label='Unit 1' nodeId='1.1' />
      </TreeNode>
      <TreeNode label='Facility 2' nodeId='2'>
        <TreeNode label='Unit 1' icon={<SvgPlaceholder />} nodeId='2.1'>
          <TreeNode
            label={'System A'}
            sublabel='Node Caption'
            isDisabled={true}
            nodeId='2.1.1'
          />
        </TreeNode>
        <TreeNode label='Unit 2' nodeId='2.2'>
          <TreeNode label='System A' nodeId='2.2.1'>
            <TreeNode
              label={'Subsystem'}
              sublabel='Node Caption'
              nodeId='2.2.1.1'
            />
            <TreeNode label={'Subsystem'} nodeId='2.2.1.2' />
          </TreeNode>
          <TreeNode label='System B' nodeId='2.2.2'>
            <TreeNode
              label={'Subsystem'}
              sublabel='Node Caption'
              nodeId='2.2.2.1'
            />
          </TreeNode>
        </TreeNode>
      </TreeNode>
      <TreeNode label='Facility 3' isDisabled={true} nodeId='3'>
        <TreeNode label={'Unit 1'} sublabel='Node Caption' nodeId='3.1' />
      </TreeNode>
    </Tree>
  );
};

export const Multiselection: Story<TreeProps> = (args) => {
  const onSelectedNodeChange = (
    event: React.SyntheticEvent,
    nodeIds: React.ReactNode[],
  ) => {
    action(`Selected ` + nodeIds[nodeIds.length - 1])();
  };
  const onNodeExpanded = () => {
    action(`Expanded a node`)();
  };

  return (
    <Tree
      onNodeSelected={onSelectedNodeChange}
      onNodeExpanded={onNodeExpanded}
      selectionType='multi'
      {...args}
    >
      <TreeNode
        label='Facility 1'
        sublabel='Node Caption'
        icon={<SvgPlaceholder />}
        nodeId='1'
      >
        <TreeNode label='Unit 1' nodeId='1.1' />
      </TreeNode>
      <TreeNode label='Facility 2' nodeId='2'>
        <TreeNode label='Unit 1' icon={<SvgPlaceholder />} nodeId='2.1'>
          <TreeNode
            label={'System A'}
            sublabel='Node Caption'
            isDisabled={true}
            nodeId='2.1.1'
          />
        </TreeNode>
        <TreeNode label='Unit 2' nodeId='2.2'>
          <TreeNode label='System A' nodeId='2.2.1'>
            <TreeNode
              label={'Subsystem'}
              sublabel='Node Caption'
              nodeId='2.2.1.1'
            />
            <TreeNode label={'Subsystem'} nodeId='2.2.1.2' />
          </TreeNode>
          <TreeNode label='System B' nodeId='2.2.2'>
            <TreeNode
              label={'Subsystem'}
              sublabel='Node Caption'
              nodeId='2.2.2.1'
            />
          </TreeNode>
        </TreeNode>
      </TreeNode>
      <TreeNode label='Facility 3' isDisabled={true} nodeId='3'>
        <TreeNode label={'Unit 1'} sublabel='Node Caption' nodeId='3.1' />
      </TreeNode>
    </Tree>
  );
};
