/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CommonProps, getWindow, useTheme } from '../utils';
import '@itwin/itwinui-css/css/tree.css';
import { SvgChevronRight } from '@itwin/itwinui-icons-react';
import { IconButton } from '../Buttons/IconButton';
import cx from 'classnames';
import { TreeContext } from './Tree';

export type TreeNodeProps = {
  /**
   * Unique id of the node.
   */
  nodeId: string;
  /**
   * The main text displayed on the node.
   */
  label: React.ReactNode;
  /**
   * Small note displayed below main label.
   */
  sublabel?: React.ReactNode;
  /**
   * Icon shown before label and sublabel content.
   */
  icon?: JSX.Element;
  /**
   * Is TreeNode disabled.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Is TreeNode expanded.
   * @default false
   */
  isExpanded?: boolean;
  /**
   * Is TreeNode selected.
   * @default false
   */
  isSelected?: boolean;
  /**
   * Callback fired when expanding or closing a TreeNode.
   */
  onNodeExpanded: (nodeId: string, isExpanded: boolean) => void;
  /**
   * Callback fired when selecting a TreeNode.
   */
  onNodeSelected?: (nodeId: string, isSelected: boolean) => void;
  /**
   * Checkbox to be shown before TreeNode.
   * If undefined checkbox will not be shown.
   * Recommended to use Checkbox component.
   */
  nodeCheckbox?: React.ReactNode;
  /**
   * Content shown after TreeNode.
   */
  children?: React.ReactNode;
} & CommonProps;

/**
 * TreeNode component to display within a Tree.
 * @example
  <TreeNode
    nodeId={props.nodeId}
    label={props.node.label}
    sublabel={props.node.sublabel}
    onNodeExpanded={onNodeExpanded}
    onNodeSelected={onSelectedNodeChange}
    isDisabled={props.isDisabled}
    isExpanded={props.isExpanded}
    isSelected={props.isSelected}
    nodeCheckbox={
      <Checkbox variant='eyeball' disabled={props.isDisabled} />
    }
    icon={<SvgPlaceholder />}
  />
 */
export const TreeNode = (props: TreeNodeProps) => {
  const {
    nodeId,
    label,
    sublabel,
    children,
    style,
    className,
    icon,
    isDisabled = false,
    isExpanded = false,
    isSelected = false,
    onNodeSelected,
    onNodeExpanded,
    nodeCheckbox,
    ...rest
  } = props;
  useTheme();

  const context = React.useContext(TreeContext);
  const nodeDepth = context?.nodeDepth ?? 0;
  const subNodeIds = context?.subNodeIds ?? [];

  const styleDepth = React.useMemo(
    () =>
      getWindow()?.CSS?.supports?.(`--level: ${nodeDepth}`)
        ? { '--level': nodeDepth, ...style }
        : { marginLeft: nodeDepth ? nodeDepth * 28 : 0, ...style },
    [nodeDepth, style],
  );

  const onNodeClick = () => {
    if (isDisabled) {
      return;
    }
    onNodeSelected?.(nodeId, !isSelected);
  };

  return (
    <>
      <li role='treeitem' id={nodeId} aria-expanded={isExpanded} {...rest}>
        {
          <div
            className={cx(
              'iui-tree-node',
              {
                'iui-active': isSelected,
                'iui-disabled': isDisabled,
              },
              className,
            )}
            style={styleDepth}
            onClick={onNodeClick}
            tabIndex={isSelected ? 0 : -1}
          >
            {nodeCheckbox && React.isValidElement(nodeCheckbox)
              ? React.cloneElement(nodeCheckbox, {
                  className: cx(
                    'iui-tree-node-checkbox',
                    nodeCheckbox.props.className,
                  ),
                })
              : undefined}
            <div className='iui-tree-node-content'>
              {context?.hasSubNodes && (
                <IconButton
                  styleType='borderless'
                  size='small'
                  onClick={(e) => {
                    onNodeExpanded(nodeId, !isExpanded);
                    e.stopPropagation();
                  }}
                  disabled={isDisabled}
                  tabIndex={-1}
                >
                  <SvgChevronRight
                    className={cx('iui-tree-node-content-expander-icon', {
                      'iui-tree-node-content-expander-icon-expanded': isExpanded,
                    })}
                  />
                </IconButton>
              )}
              {icon &&
                React.cloneElement(icon, {
                  className: cx(
                    'iui-tree-node-content-icon',
                    icon.props.className,
                  ),
                })}
              <span className='iui-tree-node-content-label'>
                <div className='iui-tree-node-content-title'>{label}</div>
                {sublabel && (
                  <div className='iui-tree-node-content-caption'>
                    {sublabel}
                  </div>
                )}
              </span>
              {children}
            </div>
          </div>
        }
        {context?.hasSubNodes && (
          <ul
            className='iui-sub-tree'
            role='group'
            aria-owns={subNodeIds.join(', ')}
          />
        )}
      </li>
    </>
  );
};

export default TreeNode;
