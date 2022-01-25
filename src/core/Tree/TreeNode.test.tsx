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

const onNodeExpanded = jest.fn();

it('should render in its most basic state', () => {
  const { container } = render(
    <TreeNode
      nodeId='testId'
      label='label'
      sublabel='sublabel'
      onNodeExpanded={onNodeExpanded}
    />,
  );

  const treeItem = container.querySelector('li');
  expect(treeItem).toBeTruthy();
  expect(treeItem).toHaveAttribute('role', 'treeitem');
  expect(treeItem).toHaveAttribute('id', 'testId');
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
      nodeId='testId'
      onNodeExpanded={onNodeExpanded}
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

  const { container } = render(
    <TreeNode nodeId='testId' label='label' onNodeExpanded={onNodeExpanded} />,
  );

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
        hasSubNodes: false,
      }}
    >
      <TreeNode nodeId='testId' label='label' onNodeExpanded={onNodeExpanded} />
    </TreeContext.Provider>,
  );

  const treeNode = container.querySelector('.iui-tree-node');
  expect(treeNode).toBeTruthy();
  expect(treeNode).toHaveAttribute('style', '--level: 2;');
});

it('should render node with checkbox', () => {
  const { container } = render(
    <TreeNode
      nodeId='testId'
      label='label'
      onNodeExpanded={onNodeExpanded}
      nodeCheckbox={<Checkbox variant='eyeball' className='testClass' />}
    />,
  );

  const checkbox = container.querySelector(
    '.iui-tree-node-checkbox.testClass',
  ) as HTMLElement;
  expect(checkbox).toBeTruthy();
  expect(checkbox.classList.contains('iui-disabled')).toBe(false);
});

it('should render node with icon', () => {
  const { container } = render(
    <TreeNode
      nodeId='testId'
      label='label'
      onNodeExpanded={onNodeExpanded}
      icon={<SvgPlaceholder className='testClass' />}
    />,
  );

  expect(
    container.querySelector('.iui-tree-node-content-icon.testClass'),
  ).toBeTruthy();
});

it('should render node with collapsed expander button', () => {
  const { container } = render(
    <TreeContext.Provider
      value={{
        nodeDepth: 0,
        hasSubNodes: true,
      }}
    >
      <TreeNode
        nodeId='testId'
        label='label'
        onNodeExpanded={onNodeExpanded}
        isExpanded={false}
      />
    </TreeContext.Provider>,
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
});

it('should render node with expanded expander button', () => {
  const onNodeExpanded = jest.fn();

  const { container } = render(
    <TreeContext.Provider
      value={{
        nodeDepth: 0,
        hasSubNodes: true,
      }}
    >
      <TreeNode
        nodeId='testId'
        label='label'
        onNodeExpanded={onNodeExpanded}
        isExpanded={true}
      />
    </TreeContext.Provider>,
  );

  const treeItem = container.querySelector('li');
  expect(treeItem).toBeTruthy();
  expect(treeItem).toHaveAttribute('aria-expanded', 'true');

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
  ).toBeTruthy();

  expect(onNodeExpanded).not.toHaveBeenCalled();
  fireEvent.click(expanderButton);
  expect(onNodeExpanded).toHaveBeenCalled();
});

it('should render disabled node', () => {
  const { container } = render(
    <TreeContext.Provider
      value={{
        nodeDepth: 0,
        hasSubNodes: true,
      }}
    >
      <TreeNode
        nodeId='testId'
        label='label'
        onNodeExpanded={onNodeExpanded}
        isDisabled={true}
        nodeCheckbox={<Checkbox variant='eyeball' disabled={true} />}
      />
    </TreeContext.Provider>,
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
  const onNodeSelected = jest.fn();
  const { container } = render(
    <TreeNode
      nodeId='testId'
      label='label'
      onNodeExpanded={onNodeExpanded}
      isSelected={true}
      onNodeSelected={onNodeSelected}
    />,
  );
  const treeNode = container.querySelector('.iui-tree-node') as HTMLElement;
  expect(treeNode).toBeTruthy();
  expect(treeNode?.classList.contains('iui-active')).toBe(true);

  expect(onNodeSelected).not.toHaveBeenCalled();
  fireEvent.click(treeNode);
  expect(onNodeSelected).toHaveBeenCalled();
});

it('should not click a disabled node', () => {
  const onNodeSelected = jest.fn();

  const { container } = render(
    <TreeContext.Provider
      value={{
        nodeDepth: 0,
        hasSubNodes: true,
      }}
    >
      <TreeNode
        nodeId='testId'
        label='label'
        onNodeExpanded={onNodeExpanded}
        onNodeSelected={onNodeSelected}
        isDisabled={true}
      />
    </TreeContext.Provider>,
  );
  const treeNode = container.querySelector('.iui-tree-node') as HTMLElement;
  expect(treeNode).toBeTruthy();
  expect(treeNode?.classList.contains('iui-disabled')).toBe(true);

  expect(onNodeSelected).not.toHaveBeenCalled();
  fireEvent.click(treeNode);
  expect(onNodeSelected).not.toHaveBeenCalled();
});

it('should not select node when clicking expander button', () => {
  const onNodeSelected = jest.fn();

  const { container } = render(
    <TreeContext.Provider
      value={{
        nodeDepth: 0,
        hasSubNodes: true,
      }}
    >
      <TreeNode
        nodeId='testId'
        label='label'
        onNodeExpanded={onNodeExpanded}
        onNodeSelected={onNodeSelected}
        isExpanded={true}
      />
    </TreeContext.Provider>,
  );

  const treeItem = container.querySelector('li');
  expect(treeItem).toBeTruthy();
  expect(treeItem).toHaveAttribute('aria-expanded', 'true');

  const expanderButton = container.querySelector(
    '.iui-button.iui-borderless.iui-small',
  ) as HTMLButtonElement;
  expect(expanderButton).toBeTruthy();
  expect(expanderButton.disabled).toBe(false);

  fireEvent.click(expanderButton);
  expect(onNodeExpanded).toHaveBeenCalled();
  expect(onNodeSelected).not.toHaveBeenCalled();
});

it('should set subnodes', () => {
  const { container } = render(
    <>
      <TreeContext.Provider
        value={{
          nodeDepth: 0,
          hasSubNodes: true,
          subNodeIds: ['subNode1', 'subNode2'],
        }}
      >
        <TreeNode
          nodeId='parent'
          label='parent'
          onNodeExpanded={onNodeExpanded}
          isExpanded={true}
        />
      </TreeContext.Provider>
      ,
      <TreeContext.Provider value={{ nodeDepth: 1, hasSubNodes: false }}>
        <TreeNode
          nodeId='subNode1'
          label='subNode1'
          onNodeExpanded={onNodeExpanded}
        />
      </TreeContext.Provider>
      <TreeContext.Provider
        value={{
          nodeDepth: 1,
          hasSubNodes: false,
        }}
      >
        <TreeNode
          nodeId='subNode2'
          label='subNode2'
          onNodeExpanded={onNodeExpanded}
        />
      </TreeContext.Provider>
      <TreeContext.Provider value={{ nodeDepth: 0, hasSubNodes: true }}>
        <TreeNode
          nodeId='parent2'
          label='parent2'
          onNodeExpanded={onNodeExpanded}
          isExpanded={false}
        />
      </TreeContext.Provider>
    </>,
  );

  const treeItem = container.querySelectorAll('li');
  expect(treeItem.length).toBe(4);

  //Parents should have subtree
  const subTree = container.querySelectorAll('.iui-sub-tree');
  expect(subTree.length).toBe(2);
  subTree.forEach((item) => {
    expect(item).toHaveAttribute('role', 'group');
  });
  //Parents should have aria owns label
  expect(subTree[0]).toHaveAttribute('aria-owns', 'subNode1, subNode2');
  expect(subTree[1]).toHaveAttribute('aria-owns', '');

  //Parents should have expander button
  const expanderButton = container.querySelectorAll(
    '.iui-button.iui-borderless.iui-small',
  );
  expect(expanderButton.length).toBe(2);
  expanderButton.forEach((item) => {
    expect((item as HTMLButtonElement).disabled).toBe(false);
  });
  expect(
    container.querySelectorAll(
      '.iui-tree-node-content-expander-icon.iui-tree-node-content-expander-icon-expanded',
    ),
  ).toHaveLength(1);
});
