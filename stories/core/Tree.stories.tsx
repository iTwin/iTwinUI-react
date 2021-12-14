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
  const onSelectedNodeChange = () => {
    action(`Selected a node`)();
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
      >
        <TreeNode label='Node 1.1' />
      </TreeNode>
      <TreeNode label='Node 2'>
        <TreeNode label='Node 2.1' icon={<SvgPlaceholder />}>
          <TreeNode
            label={'Node 2.1.1'}
            sublabel='Node Caption'
            isDisabled={true}
          />
        </TreeNode>
        <TreeNode label='Node 2.2'>
          <TreeNode label='Node 2.2.1'>
            <TreeNode label={'Node 2.2.1.1'} sublabel='Node Caption' />
          </TreeNode>
        </TreeNode>
      </TreeNode>
      <TreeNode label='Node 3' isDisabled={true}>
        <TreeNode label={'Node 3.1'} sublabel='Node Caption' />
      </TreeNode>
    </Tree>
  );
};

export const WithCheckbox: Story<TreeProps> = (args) => {
  const onSelectedNodeChange = () => {
    action(`Selected a node`)();
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
        label='Node 1'
        sublabel='Node Caption'
        icon={<SvgPlaceholder />}
      >
        <TreeNode label='Node 1.1' />
      </TreeNode>
      <TreeNode label='Node 2'>
        <TreeNode label='Node 2.1' icon={<SvgPlaceholder />}>
          <TreeNode
            label={'Node 2.1.1'}
            sublabel='Node Caption'
            isDisabled={true}
          />
        </TreeNode>
        <TreeNode label='Node 2.2'>
          <TreeNode label='Node 2.2.1'>
            <TreeNode label={'Node 2.2.1.1'} sublabel='Node Caption' />
          </TreeNode>
        </TreeNode>
      </TreeNode>
      <TreeNode label='Node 3' isDisabled={true}>
        <TreeNode label={'Node 3.1'} sublabel='Node Caption' />
      </TreeNode>
    </Tree>
  );
};
