/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Tree, TreeProps, TreeNode } from '../../src/core';

export default {
  component: Tree,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
  },
  title: 'Core/Tree',
} as Meta<TreeProps>;

export const Basic: Story<TreeProps> = (args) => {
  return (
    <Tree {...args}>
      <TreeNode title='Node 1'>
        <TreeNode title='Node 1.1' depthLevel={1} />
      </TreeNode>
      <TreeNode title='Node 2'>
        <TreeNode title='Node 2.1' depthLevel={1}>
          <TreeNode title={'Node 2.1.1'} depthLevel={2} />
        </TreeNode>
        <TreeNode title='Node 2.2' depthLevel={1}>
          <TreeNode title='Node 2.2.1' depthLevel={2}>
            <TreeNode title={'Node 2.2.1.1'} depthLevel={3} />
          </TreeNode>
        </TreeNode>
      </TreeNode>
      <TreeNode title='Node 3'>
        <TreeNode title={'Node 3.1'} depthLevel={2} />
      </TreeNode>
    </Tree>
  );
};
