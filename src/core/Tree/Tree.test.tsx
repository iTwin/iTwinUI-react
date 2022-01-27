/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { NodeData, Tree } from './Tree';
import TreeNode from './TreeNode';

type TestData = {
  id: string;
  label: string;
  subItems: TestData[];
};
const onNodeExpanded = jest.fn();
const onNodeSelected = jest.fn();

const nodeRenderer = ({ ...rest }) => (
  <TreeNode
    nodeId='testId'
    label='label'
    onNodeExpanded={onNodeExpanded}
    onNodeSelected={onNodeSelected}
    {...rest}
  />
);

const getNode = (node: TestData): NodeData<TestData> => {
  return {
    subNodes: node.subItems,
    nodeId: node.id,
    node: node,
    isExpanded: ['1', '1.1'].some((id) => id === node.id),
    hasSubNodes: node.subItems.length > 0,
  };
};

it('should render in its most basic state', () => {
  const visibleNodeIds = ['1', '1.1', '2'];
  const data = [
    {
      id: '1',
      label: 'Facility 1',
      subItems: [{ id: '1.1', label: 'Unit 1', subItems: [] }],
    },
    {
      id: '2',
      label: 'Facility 2',
      subItems: [],
    },
  ];

  const { container } = render(
    <Tree<TestData>
      data={data}
      getNode={getNode}
      nodeRenderer={nodeRenderer}
    />,
  );
  const tree = container.querySelector('.iui-tree');
  expect(tree).toBeTruthy();
  expect(tree).toHaveAttribute('role', 'tree');

  //Only render nodes with expanded parents
  const treeNodes = container.querySelectorAll('li');
  expect(treeNodes).toHaveLength(3);
  treeNodes.forEach((item, index) => {
    expect(item.id).toBe(visibleNodeIds[index]);
  });
});

it('should add className and style correctly', () => {
  const data = [
    {
      id: '1',
      label: 'Facility 1',
      subItems: [{ id: '1.1', label: 'Unit 1', subItems: [] }],
    },
    {
      id: '2',
      label: 'Facility 2',
      subItems: [],
    },
  ];

  const { container } = render(
    <Tree<TestData>
      data={data}
      getNode={getNode}
      nodeRenderer={nodeRenderer}
      className='test-class'
      style={{ width: '100px' }}
    />,
  );

  const tree = container.querySelector('.iui-tree.test-class') as HTMLElement;
  expect(tree).toBeTruthy();
  expect(tree.style.width).toBe('100px');
});

it('should not render node if any parent above is not expanded', () => {
  const labels = ['Node 1', 'Node 1.1', 'Node 1.1.1'];
  const data = [
    {
      id: labels[0],
      label: labels[0],
      subItems: [
        {
          id: labels[1],
          label: labels[1],
          subItems: [
            {
              id: labels[2],
              label: labels[2],
              subItems: [],
            },
          ],
        },
      ],
    },
  ];

  const getNode = (node: TestData): NodeData<TestData> => {
    return {
      subNodes: node.subItems,
      nodeId: node.id,
      node: node,
      isExpanded: ['Node 1.1'].some((id) => id === node.id),
      hasSubNodes: node.subItems.length > 0,
    };
  };
  const { container } = render(
    <Tree<TestData>
      data={data}
      getNode={getNode}
      nodeRenderer={nodeRenderer}
    />,
  );

  const treeNodes = container.querySelectorAll('li');
  expect(treeNodes.length).toBe(1);
  expect(treeNodes[0].id).toBe(labels[0]);
});

it('should handle arrow key navigation', () => {
  const labels = ['Node 1', 'Node 1.1', 'Node 1.1.1', 'Node 2', 'Node 3'];

  const data = [
    {
      id: labels[0],
      label: labels[0],
      subItems: [
        {
          id: labels[1],
          label: labels[1],
          subItems: [
            {
              id: labels[2],
              label: labels[2],
              subItems: [],
            },
          ],
        },
      ],
    },
    {
      id: labels[3],
      label: labels[3],
      subItems: [],
    },
    {
      id: labels[4],
      label: labels[4],
      subItems: [],
    },
  ];

  const getNode = (node: TestData): NodeData<TestData> => {
    return {
      subNodes: node.subItems,
      nodeId: node.id,
      node: node,
      isExpanded: ['Node 1', 'Node 3'].some((id) => id === node.id),
      isDisabled: ['Node 2'].some((id) => id === node.id),
      hasSubNodes: node.subItems.length > 0,
    };
  };

  const { container } = render(
    <Tree<TestData>
      data={data}
      getNode={getNode}
      nodeRenderer={nodeRenderer}
    />,
  );

  const tree = container.querySelector('.iui-tree') as HTMLElement;
  expect(tree).toBeTruthy();
  const treeNodes = container.querySelectorAll('.iui-tree-node');
  const buttons = container.querySelectorAll('.iui-button');
  expect(treeNodes.length).toBe(4);
  expect(buttons.length).toBe(2);

  //Should initially focus on first node
  treeNodes.forEach((item, index) => {
    expect(document.activeElement === item).toBe(0 === index);
  });

  // Go Down
  fireEvent.keyDown(tree, { key: 'ArrowDown' });
  buttons.forEach((item, index) => {
    expect(document.activeElement === item).toBe(0 === index);
  });
  fireEvent.keyDown(tree, { key: 'ArrowDown' });
  treeNodes.forEach((item, index) => {
    expect(document.activeElement === item).toBe(1 === index);
  });

  // Go Up
  fireEvent.keyDown(tree, { key: 'ArrowUp' });
  buttons.forEach((item, index) => {
    expect(document.activeElement === item).toBe(0 === index);
  });
  fireEvent.keyDown(tree, { key: 'ArrowUp' });
  treeNodes.forEach((item, index) => {
    expect(document.activeElement === item).toBe(0 === index);
  });

  // Go left on expanded node - should click expander
  fireEvent.keyDown(tree, { key: 'ArrowLeft' });
  expect(onNodeExpanded).toHaveBeenCalledTimes(1);

  // Go left on closed node - should go up to parent
  fireEvent.keyDown(tree, { key: 'ArrowDown' });
  fireEvent.keyDown(tree, { key: 'ArrowDown' });
  fireEvent.keyDown(tree, { key: 'ArrowLeft' });
  expect(onNodeExpanded).toHaveBeenCalledTimes(1);
  treeNodes.forEach((item, index) => {
    expect(document.activeElement === item).toBe(0 === index);
  });

  // Go right on expanded node to go down
  fireEvent.keyDown(tree, { key: 'ArrowRight' });
  buttons.forEach((item, index) => {
    expect(document.activeElement === item).toBe(0 === index);
  });
  fireEvent.keyDown(tree, { key: 'ArrowRight' });
  treeNodes.forEach((item, index) => {
    expect(document.activeElement === item).toBe(1 === index);
  });
  expect(onNodeExpanded).toHaveBeenCalledTimes(1);

  // Go right on closed node - should click expander
  fireEvent.keyDown(tree, { key: 'ArrowRight' });
  expect(onNodeExpanded).toHaveBeenCalledTimes(2);

  // Go down and skip over disabled node
  fireEvent.keyDown(tree, { key: 'ArrowDown' });
  fireEvent.keyDown(tree, { key: 'ArrowDown' });
  treeNodes.forEach((item, index) => {
    expect(document.activeElement === item).toBe(3 === index);
  });

  //Go right on bottom expanded node
  fireEvent.keyDown(tree, { key: 'ArrowRight' });
  expect(onNodeExpanded).toHaveBeenCalledTimes(2);
  treeNodes.forEach((item, index) => {
    expect(document.activeElement === item).toBe(3 === index);
  });

  //Go left on root node with no parent - should go up
  fireEvent.keyDown(tree, { key: 'ArrowLeft' });
  expect(onNodeExpanded).toHaveBeenCalledTimes(2);
  buttons.forEach((item, index) => {
    expect(document.activeElement === item).toBe(1 === index);
  });

  //Click expander button with enter
  fireEvent.keyDown(tree, { key: 'Enter' });
  expect(onNodeExpanded).toHaveBeenCalledTimes(3);

  //Select with enter
  fireEvent.keyDown(tree, { key: 'ArrowUp' });
  fireEvent.keyDown(tree, { key: 'Enter' });
  expect(onNodeSelected).toHaveBeenCalledTimes(1);

  //Select with space
  fireEvent.keyDown(tree, { key: ' ' });
  expect(onNodeSelected).toHaveBeenCalledTimes(2);
});

it('should set setFocus on selected node', () => {
  const labels = ['Node 1', 'Node 2'];

  const data = [
    {
      id: labels[0],
      label: labels[0],
      subItems: [],
    },
    {
      id: labels[1],
      label: labels[1],
      subItems: [],
    },
  ];

  const getNode = (node: TestData): NodeData<TestData> => {
    return {
      subNodes: node.subItems,
      nodeId: node.id,
      node: node,
      isSelected: ['Node 2'].some((id) => id === node.id),
      hasSubNodes: node.subItems.length > 0,
    };
  };

  const { container } = render(
    <Tree<TestData>
      data={data}
      getNode={getNode}
      nodeRenderer={nodeRenderer}
    />,
  );

  const treeNodes = container.querySelectorAll('.iui-tree-node');
  expect(treeNodes.length).toBe(2);
  treeNodes.forEach((item, index) => {
    expect(document.activeElement === item).toBe(1 === index);
  });
});
