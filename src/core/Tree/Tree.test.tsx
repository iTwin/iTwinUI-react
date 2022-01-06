/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Tree } from './Tree';
import TreeNode from './TreeNode';

it('should render in its most basic state', () => {
  const { container } = render(<Tree />);
  const tree = container.querySelector('.iui-tree');
  expect(tree).toBeTruthy();
  expect(tree).toHaveAttribute('role', 'tree');
  expect(container.querySelector('li')).toBeFalsy();
});

it('should add className and style correctly', () => {
  const { container } = render(
    <Tree className='test-class' style={{ width: '100px' }} />,
  );

  const tree = container.querySelector('.iui-tree.test-class') as HTMLElement;
  expect(tree).toBeTruthy();
  expect(tree.style.width).toBe('100px');
});

it('should render nodes as flat list', () => {
  const labels = ['Node 1', 'Node 1.1', 'Node 1.1.1'];
  const data = [
    {
      label: labels[0],
      isExpanded: false,
      subnodes: [
        {
          label: labels[1],
          subnodes: [
            {
              label: labels[2],
              subnodes: [],
            },
          ],
        },
      ],
    },
  ];

  const { container } = render(
    <Tree
      data={data}
      nodeRenderer={(props) => (
        <TreeNode
          label={props.label}
          isExpanded={props.isExpanded}
          subNodes={props.subnodes}
        />
      )}
    />,
  );

  const treeItems = container.querySelectorAll('li');
  expect(treeItems.length).toBe(3);
  treeItems.forEach((item, index) => {
    expect(item.id).toBe(labels[index]);
  });
  const treeNodes = container.querySelectorAll('.iui-tree-node');
  expect(treeNodes.length).toBe(1);
  expect(treeNodes[0].textContent).toBe(labels[0]);
});

it('should render subnodes if parent is expanded', () => {
  const labels = ['Node 1', 'Node 1.1', 'Node 1.1.1'];
  const data = [
    {
      label: labels[0],
      isExpanded: true,
      subnodes: [
        {
          label: labels[1],
          isExpanded: false,
          subnodes: [
            {
              label: labels[2],
              subnodes: [],
            },
          ],
        },
      ],
    },
  ];

  const { container } = render(
    <Tree
      data={data}
      nodeRenderer={(props) => (
        <TreeNode
          label={props.label}
          isExpanded={props.isExpanded}
          subNodes={props.subnodes}
        />
      )}
    />,
  );

  const treeNodes = container.querySelectorAll('.iui-tree-node');
  expect(treeNodes.length).toBe(2);
  treeNodes.forEach((item, index) => {
    expect(item.textContent).toBe(labels[index]);
  });
});

it('should not render node if any parent above is not expanded', () => {
  const labels = ['Node 1', 'Node 1.1', 'Node 1.1.1'];
  const data = [
    {
      label: labels[0],
      isExpanded: false,
      subnodes: [
        {
          label: labels[1],
          isExpanded: true,
          subnodes: [
            {
              label: labels[2],
              subnodes: [],
            },
          ],
        },
      ],
    },
  ];
  const { container } = render(
    <Tree
      data={data}
      nodeRenderer={(props) => (
        <TreeNode
          label={props.label}
          isExpanded={props.isExpanded}
          subNodes={props.subnodes}
        />
      )}
    />,
  );

  const treeNodes = container.querySelectorAll('.iui-tree-node');
  expect(treeNodes.length).toBe(1);
  expect(treeNodes[0].textContent).toBe(labels[0]);
});

it('should set active node with single selection', () => {
  const onNodeSelected = jest.fn();
  const labels = ['Node 1', 'Node 2'];
  const data = [
    {
      label: labels[0],
      subnodes: [],
    },
    {
      label: labels[1],
      subnodes: [],
    },
  ];

  const { container } = render(
    <Tree
      data={data}
      nodeRenderer={(props) => <TreeNode label={props.label} />}
      onNodeSelected={onNodeSelected}
    />,
  );

  const treeNodes = container.querySelectorAll('.iui-tree-node');
  expect(treeNodes.length).toBe(2);
  treeNodes.forEach((item, index) => {
    expect(labels[index]).toBe(item.textContent);
    expect(item.classList.contains('iui-active')).toBe(false);
  });

  //Select Node 1
  expect(onNodeSelected).not.toHaveBeenCalled();
  fireEvent.click(treeNodes[0]);
  expect(onNodeSelected).toHaveBeenCalledTimes(1);
  expect(treeNodes[0].classList.contains('iui-active')).toBe(true);
  expect(treeNodes[1].classList.contains('iui-active')).toBe(false);

  //Select Node 2
  fireEvent.click(treeNodes[1]);
  expect(onNodeSelected).toHaveBeenCalledTimes(2);
  expect(treeNodes[0].classList.contains('iui-active')).toBe(false);
  expect(treeNodes[1].classList.contains('iui-active')).toBe(true);

  //Unselect Node 2
  fireEvent.click(treeNodes[1]);
  expect(onNodeSelected).toHaveBeenCalledTimes(2);
  expect(treeNodes[0].classList.contains('iui-active')).toBe(false);
  expect(treeNodes[1].classList.contains('iui-active')).toBe(false);
});

it('should set active node with multi selection', () => {
  const onNodeSelected = jest.fn();
  const labels = ['Node 1', 'Node 2'];
  const data = [
    {
      label: labels[0],
      subnodes: [],
    },
    {
      label: labels[1],
      subnodes: [],
    },
  ];

  const { container } = render(
    <Tree
      data={data}
      nodeRenderer={(props) => <TreeNode label={props.label} />}
      onNodeSelected={onNodeSelected}
      selectionType='multi'
    />,
  );

  const treeNodes = container.querySelectorAll('.iui-tree-node');
  expect(treeNodes.length).toBe(2);
  treeNodes.forEach((item, index) => {
    expect(labels[index]).toBe(item.textContent);
    expect(item.classList.contains('iui-active')).toBe(false);
  });

  //Select Node 1
  expect(onNodeSelected).not.toHaveBeenCalled();
  fireEvent.click(treeNodes[0]);
  expect(onNodeSelected).toHaveBeenCalledTimes(1);
  expect(treeNodes[0].classList.contains('iui-active')).toBe(true);
  expect(treeNodes[1].classList.contains('iui-active')).toBe(false);

  //Select Node 2
  fireEvent.click(treeNodes[1]);
  expect(onNodeSelected).toHaveBeenCalledTimes(2);
  expect(treeNodes[0].classList.contains('iui-active')).toBe(true);
  expect(treeNodes[1].classList.contains('iui-active')).toBe(true);
});

it('should set active node with selection type none', () => {
  const onNodeSelected = jest.fn();
  const labels = ['Node 1', 'Node 2'];
  const data = [
    {
      label: labels[0],
      subnodes: [],
    },
    {
      label: labels[1],
      subnodes: [],
    },
  ];

  const { container } = render(
    <Tree
      data={data}
      nodeRenderer={(props) => <TreeNode label={props.label} />}
      onNodeSelected={onNodeSelected}
      selectionType='none'
    />,
  );

  const treeNodes = container.querySelectorAll('.iui-tree-node');
  expect(treeNodes.length).toBe(2);
  treeNodes.forEach((item, index) => {
    expect(labels[index]).toBe(item.textContent);
    expect(item.classList.contains('iui-active')).toBe(false);
  });

  expect(onNodeSelected).not.toHaveBeenCalled();
  fireEvent.click(treeNodes[0]);
  expect(onNodeSelected).not.toHaveBeenCalled();
  treeNodes.forEach((item) => {
    expect(item.classList.contains('iui-active')).toBe(false);
  });

  fireEvent.click(treeNodes[1]);
  expect(onNodeSelected).not.toHaveBeenCalled();
  treeNodes.forEach((item) => {
    expect(item.classList.contains('iui-active')).toBe(false);
  });
});

it('should handle arrow key navigation', () => {
  const onNodeSelected = jest.fn();
  const onNodeExpanded = jest.fn();
  const labels = ['Node 1', 'Node 1.1', 'Node 1.1.1', 'Node 2', 'Node 3'];

  const data = [
    {
      label: labels[0],
      isExpanded: true,
      subnodes: [
        {
          label: labels[1],
          isExpanded: false,
          subnodes: [
            {
              label: labels[2],
              subnodes: [],
            },
          ],
        },
      ],
    },
    {
      label: labels[3],
      isDisabled: true,
      subnodes: [],
    },
    {
      label: labels[4],
      isExpanded: true,
      subnodes: [],
    },
  ];

  const { container } = render(
    <Tree
      data={data}
      nodeRenderer={(props) => (
        <TreeNode
          label={props.label}
          isExpanded={props.isExpanded}
          onNodeExpanded={onNodeExpanded}
          isDisabled={props.isDisabled}
          subNodes={props.subnodes}
        />
      )}
      onNodeSelected={onNodeSelected}
    />,
  );

  const tree = container.querySelector('.iui-tree') as HTMLElement;
  const treeNodes = container.querySelectorAll('.iui-tree-node');
  (treeNodes[0] as HTMLElement).focus();
  treeNodes.forEach((item, index) => {
    expect(document.activeElement === item).toBe(0 === index);
  });

  // Go Down
  fireEvent.keyDown(tree, { key: 'ArrowDown' });
  treeNodes.forEach((item, index) => {
    expect(document.activeElement === item).toBe(1 === index);
  });

  // Go Up
  fireEvent.keyDown(tree, { key: 'ArrowUp' });
  treeNodes.forEach((item, index) => {
    expect(document.activeElement === item).toBe(0 === index);
  });

  // Go left to close node
  fireEvent.keyDown(tree, { key: 'ArrowLeft' });
  expect(onNodeExpanded).toHaveBeenCalledTimes(1);

  // Go left on top closed node
  fireEvent.keyDown(tree, { key: 'ArrowLeft' });
  expect(onNodeExpanded).toHaveBeenCalledTimes(1);
  treeNodes.forEach((item, index) => {
    expect(document.activeElement === item).toBe(0 === index);
  });

  // Go right to expand node
  fireEvent.keyDown(tree, { key: 'ArrowRight' });
  expect(onNodeExpanded).toHaveBeenCalledTimes(2);

  // Go right on expanded node to go down
  fireEvent.keyDown(tree, { key: 'ArrowRight' });
  treeNodes.forEach((item, index) => {
    expect(document.activeElement === item).toBe(1 === index);
  });

  // Go down and skip over disabled node
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

  //Select with enter
  fireEvent.keyDown(tree, { key: 'Enter' });
  expect(onNodeSelected).toHaveBeenCalledTimes(1);

  //Select with space
  fireEvent.keyDown(tree, { key: ' ' });
  fireEvent.keyDown(tree, { key: ' ' });
  expect(onNodeSelected).toHaveBeenCalledTimes(2);
});
