/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Tree, TreeProps, TreeNode, Checkbox } from '../../src/core';
import { action } from '@storybook/addon-actions';
import { SvgPlaceholder } from '@itwin/itwinui-icons-react';
import { TreeData } from '../../src/core/Tree/Tree';

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

  const [disabledNodes] = React.useState([
    'Node 4',
    'Node 3.0',
    'Node 6',
    'Node 10',
  ]);

  const onCheckboxSelected = (nodeId: string, checked: boolean) => {
    if (checked) {
      action(`Checked node: ${nodeId}`)();
    } else {
      action(`Unchecked node: ${nodeId}`)();
    }
  };

  const generateItem = React.useCallback(
    (index: number, parentRow = '', depth = 0): TreeData => {
      const keyValue = parentRow ? `${parentRow}.${index}` : `${index}`;
      return {
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
      Array(500)
        .fill(null)
        .map((_, index) => generateItem(index)),
    [generateItem],
  );

  return (
    <Tree
      data={data}
      nodeRenderer={(props) => (
        <TreeNode
          label={props.label}
          sublabel={props.subLabel}
          subNodes={props.subnodes}
          onNodeExpanded={onNodeExpanded}
          isExpanded={props.isExpanded}
          isDisabled={props.isDisabled}
          nodeCheckbox={<Checkbox variant='eyeball' checked={true} />}
          onNodeCheckboxSelected={onCheckboxSelected}
          icon={<SvgPlaceholder />}
        />
      )}
      onNodeSelected={onSelectedNodeChange}
      {...args}
    />
  );
};
