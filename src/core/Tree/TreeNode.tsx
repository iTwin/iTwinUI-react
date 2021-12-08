/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CommonProps, getWindow, useTheme } from '../utils';
import 'D:/itwinUI/iTwinUI/lib/css/tree.css'; //'@itwin/itwinui-css/css/tree.css';
import { SvgChevronRight } from '@itwin/itwinui-icons-react';
import { IconButton } from '../Buttons/IconButton';
import { Checkbox } from '../Checkbox/Checkbox';
import cx from 'classnames';

export type TreeNodeProps = {
  /**
   * The main text displayed on the node.
   */
  title: React.ReactNode;
  /**
   * Small note displayed below title.
   */
  caption?: React.ReactNode;
  /**
   * Is node expanded, used to show sub-nodes.
   */
  isExpanded?: boolean;
  /**
   * Is node selected.
   */
  isActive?: boolean;
  /**
   * Depth of node.
   * @default 0
   */
  depthLevel?: number;
  /**
   * Callback fired when selecting TreeNode.
   */
  onSelected?: () => void;
  /**
   * Icon shown before title and caption content.
   */
  icon?: JSX.Element;
  /**
   * Should checkbox be shown before TreeNode.
   * @default false
   */
  showCheckbox?: boolean;
  /**
   * Is TreeNode disabled.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Sub-nodes, shown and hidden by expanding TreeNode.
   * Recommended to use TreeNode components.
   */
  children?: React.ReactNode;
} & CommonProps;

/**
 * Describe me here!
 * @example
 * Example usages go here!
 */
export const TreeNode = (props: TreeNodeProps) => {
  const {
    title,
    caption,
    isExpanded = false,
    isActive,
    depthLevel = 0,
    children,
    style,
    className,
    onSelected,
    icon,
    showCheckbox = false,
    isDisabled = false,
    ...rest
  } = props;
  useTheme();

  const style_level = React.useMemo(
    () =>
      getWindow()?.CSS?.supports?.(`--level: ${depthLevel}`)
        ? { '--level': depthLevel, ...style }
        : { marginLeft: depthLevel ? depthLevel * 28 : 0, ...style },
    [depthLevel, style],
  );

  const [expanded, setExpanded] = React.useState(isExpanded);
  const [active, setActive] = React.useState(isActive);

  return (
    <li role='treeitem' aria-expanded={expanded} {...rest}>
      <div
        className={cx('iui-tree-node', {
          'iui-active': active,
          'iui-disabled': isDisabled,
          className,
        })}
        style={style_level}
        onClick={() => {
          setActive(!active);
          onSelected?.();
        }}
      >
        {showCheckbox && (
          <Checkbox className='iui-tree-node-checkbox' disabled={isDisabled} />
        )}
        <div className='iui-tree-node-content'>
          {children && (
            <IconButton
              styleType='borderless'
              size='small'
              onClick={() => {
                setExpanded(!expanded);
              }}
              disabled={isDisabled}
            >
              <SvgChevronRight
                className={cx('iui-tree-node-content-expander-icon', {
                  'iui-tree-node-content-expander-icon-expanded': expanded,
                })}
              />
            </IconButton>
          )}
          {icon &&
            React.cloneElement(icon, {
              className: cx('iui-tree-node-content-icon', icon.props.className),
            })}
          <span className='iui-tree-node-content-label'>
            <div className='iui-tree-node-content-title'>{title}</div>
            <div className='iui-tree-node-content-caption'>{caption}</div>
          </span>
        </div>
      </div>
      {children && expanded && (
        <ul className='iui-sub-tree' role='group'>
          {React.Children.map(children, (node, index) =>
            React.isValidElement(node) ? (
              <TreeNode
                key={index + node.props['title']}
                title={node.props['title']}
                caption={node.props['caption']}
                onSelected={onSelected}
                icon={node.props['icon']}
                showCheckbox={showCheckbox}
                isDisabled={node.props['isDisabled']}
                depthLevel={depthLevel + 1}
              >
                {node.props['children']}
              </TreeNode>
            ) : (
              node
            ),
          )}
        </ul>
      )}
    </li>
  );
};

export default TreeNode;
