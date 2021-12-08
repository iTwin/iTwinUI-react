/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Tree, TreeProps, TreeNode } from '../../src/core';
import { action } from '@storybook/addon-actions';

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

  return (
    <Tree onNodeSelected={onSelectedNodeChange} {...args}>
      <TreeNode title='Node 1' caption='Node Caption'>
        <TreeNode title='Node 1.1' />
      </TreeNode>
      <TreeNode title='Node 2'>
        <TreeNode title='Node 2.1'>
          <TreeNode title={'Node 2.1.1'} caption='Node Caption' />
        </TreeNode>
        <TreeNode title='Node 2.2'>
          <TreeNode title='Node 2.2.1'>
            <TreeNode title={'Node 2.2.1.1'} caption='Node Caption' />
          </TreeNode>
        </TreeNode>
      </TreeNode>
      <TreeNode title='Node 3'>
        <TreeNode title={'Node 3.1'} caption='Node Caption' />
      </TreeNode>
    </Tree>
  );
};
