/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { TreeNode } from './TreeNode';
import { TreeContext } from './Tree';
import { Checkbox } from '../Checkbox';
import { SvgPlaceholder } from '@itwin/itwinui-icons-react/cjs/icons';

it('should render in its most basic state', () => {
  const { container } = render(<TreeNode label='label' sublabel='sublabel' />);

  const treeItem = container.querySelector('li');
  expect(treeItem).toBeTruthy();
  expect(treeItem).toHaveAttribute('role', 'treeitem');
  expect(treeItem).toHaveAttribute('id', 'label');
  expect(treeItem).toHaveAttribute('aria-expanded', 'false');

  const treeNode = container.querySelector('.iui-tree-node');
  expect(treeNode).toBeTruthy();
  expect(treeNode).toHaveAttribute('style', 'margin-left: 0px;');
  expect(treeNode?.classList.contains('iui-disabled')).toBe(false);
  expect(treeNode?.classList.contains('iui-active')).toBe(false);

  expect(container.querySelector('.iui-tree-node-checkbox')).toBeFalsy();
  expect(container.querySelector('.iui-tree-node-content-icon')).toBeFalsy();
  expect(container.querySelector('.iui-sub-tree')).toBeFalsy();
  expect(
    container.querySelector('.iui-tree-node-content-expander-icon'),
  ).toBeFalsy();

  expect(container.querySelector('.iui-tree-node-content')).toBeTruthy();
  expect(container.querySelector('.iui-tree-node-content-label')).toBeTruthy();
  const title = container.querySelector('.iui-tree-node-content-title');
  expect(title).toBeTruthy();
  expect(title?.textContent).toBe('label');
  const caption = container.querySelector('.iui-tree-node-content-caption');
  expect(caption).toBeTruthy();
  expect(caption?.textContent).toBe('sublabel');
});

it('should add className and style correctly', () => {
  const { container } = render(
    <TreeNode
      className='test-class'
      style={{ width: '100px' }}
      label='label'
    />,
  );

  const treeNode = container.querySelector(
    '.iui-tree-node.test-class',
  ) as HTMLElement;
  expect(treeNode).toBeTruthy();
  expect(treeNode.style.width).toBe('100px');
});

it('should render node with level variable', () => {
  window.CSS = { supports: () => true, escape: (i) => i };

  const { container } = render(<TreeNode label={'label'} />);

  const treeNode = container.querySelector('.iui-tree-node');
  expect(treeNode).toBeTruthy();
  expect(treeNode).toHaveAttribute('style', '--level: 0;');
});

it('should render node with correct depth', () => {
  window.CSS = { supports: () => true, escape: (i) => i };

  const { container } = render(
    <TreeContext.Provider
      value={{
        nodeDepth: 2,
      }}
    >
      <TreeNode label={'label'} />
    </TreeContext.Provider>,
  );

  const treeNode = container.querySelector('.iui-tree-node');
  expect(treeNode).toBeTruthy();
  expect(treeNode).toHaveAttribute('style', '--level: 2;');
});

it('should render node with checkbox', () => {
  const onCheckboxSelected = jest.fn();

  const { container } = render(
    <TreeNode
      label={'label'}
      nodeCheckbox={<Checkbox variant='eyeball' checked={true} />}
      onNodeCheckboxSelected={onCheckboxSelected}
    />,
  );

  const checkbox = container.querySelector(
    '.iui-tree-node-checkbox',
  ) as HTMLElement;
  expect(checkbox).toBeTruthy();
  expect(checkbox.classList.contains('iui-disabled')).toBe(false);

  expect(onCheckboxSelected).not.toHaveBeenCalled();
  fireEvent.click(checkbox);
  expect(onCheckboxSelected).toHaveBeenCalled();
});

it('should render node with icon', () => {
  const { container } = render(
    <TreeNode label={'label'} icon={<SvgPlaceholder />} />,
  );

  expect(container.querySelector('.iui-tree-node-content-icon')).toBeTruthy();
});

it('should render node with expander button', () => {
  const onNodeExpanded = jest.fn();

  const { container } = render(
    <TreeNode
      label={'parent'}
      subNodes={[
        {
          label: 'Subnode 1',
          subnodes: [],
        },
      ]}
      onNodeExpanded={onNodeExpanded}
    />,
  );

  const treeItem = container.querySelector('li');
  expect(treeItem).toBeTruthy();
  expect(treeItem).toHaveAttribute('aria-expanded', 'false');

  const expanderButton = container.querySelector(
    '.iui-button.iui-borderless.iui-small',
  ) as HTMLButtonElement;
  expect(expanderButton).toBeTruthy();
  expect(expanderButton.disabled).toBe(false);

  expect(
    container.querySelector('.iui-tree-node-content-expander-icon'),
  ).toBeTruthy();
  expect(
    container.querySelector(
      '.iui-tree-node-content-expander-icon.iui-tree-node-content-expander-icon-expanded',
    ),
  ).toBeFalsy();

  expect(onNodeExpanded).not.toHaveBeenCalled();
  fireEvent.click(expanderButton);
  expect(onNodeExpanded).toHaveBeenCalled();

  expect(treeItem).toHaveAttribute('aria-expanded', 'true');
  expect(
    container.querySelector(
      '.iui-tree-node-content-expander-icon.iui-tree-node-content-expander-icon-expanded',
    ),
  ).toBeTruthy();
});

it('should set subnodes', () => {
  const { container } = render(
    <>
      <TreeContext.Provider value={{ nodeDepth: 0 }}>
        <TreeNode
          label={'parent'}
          subNodes={[
            { label: 'subNode1', subnodes: [] },
            { label: 'subNode2', subnodes: [] },
          ]}
        />
      </TreeContext.Provider>
      ,
      <TreeContext.Provider
        value={{
          parentNode: {
            data: {
              label: 'parent1',
              subnodes: [{ label: 'subNode', subnodes: [] }],
            },
            id: 'parent',
            depth: 0,
            subNodeIds: [],
          },
          nodeDepth: 1,
        }}
      >
        <TreeNode label={'subNode1'} />
      </TreeContext.Provider>
      <TreeContext.Provider
        value={{
          parentNode: {
            data: {
              label: 'parent1',
              subnodes: [{ label: 'subNode', subnodes: [] }],
            },
            id: 'parent1',
            depth: 0,
            subNodeIds: [],
          },
          nodeDepth: 1,
        }}
      >
        <TreeNode label={'subNode2'} />
      </TreeContext.Provider>
      <TreeContext.Provider value={{ nodeDepth: 0 }}>
        <TreeNode label={'parent2'} subNodes={[]} />
      </TreeContext.Provider>
    </>,
  );

  const treeItem = container.querySelectorAll('li');
  expect(treeItem.length).toBe(4);
  treeItem.forEach((item) => {
    expect(item).toHaveAttribute('aria-expanded', 'false');
  });

  //Only parent1 should have subtree and expander button
  const subTree = container.querySelectorAll('.iui-sub-tree');
  expect(subTree.length).toBe(1);
  expect(subTree[0]).toHaveAttribute('role', 'group');
  expect(subTree[0]).toHaveAttribute('aria-owns', 'subNode1 subNode2');
  const expanderButton = container.querySelectorAll(
    '.iui-button.iui-borderless.iui-small',
  );
  expect(expanderButton.length).toBe(1);
  expect((expanderButton[0] as HTMLButtonElement).disabled).toBe(false);
});

it('should render disabled node', () => {
  const { container } = render(
    <TreeNode
      label={'label'}
      isDisabled={true}
      nodeCheckbox={<Checkbox variant='eyeball' checked={true} />}
      subNodes={[
        {
          label: 'Subnode 1',
          subnodes: [],
        },
      ]}
    />,
  );
  const treeNode = container.querySelector('.iui-tree-node');
  expect(treeNode).toBeTruthy();
  expect(treeNode?.classList.contains('iui-disabled')).toBe(true);

  const checkbox = container.querySelector('.iui-tree-node-checkbox');
  expect(checkbox?.classList.contains('iui-disabled')).toBe(true);

  const button = container.querySelector(
    '.iui-button.iui-borderless.iui-small',
  ) as HTMLButtonElement;
  expect(button).toBeTruthy();
  expect(button.disabled).toBe(true);
});

it('should set active class', () => {
  const { container } = render(
    <TreeContext.Provider
      value={{
        selectedNodes: ['label'],
        selectionType: 'single',
      }}
    >
      <TreeNode label={'label'} />
    </TreeContext.Provider>,
  );
  const treeNode = container.querySelector('.iui-tree-node');
  expect(treeNode).toBeTruthy();
  expect(treeNode?.classList.contains('iui-active')).toBe(true);
});
