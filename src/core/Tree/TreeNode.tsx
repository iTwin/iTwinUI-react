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
   * Unique id for TreeNode.
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
   * Icon shown before title and caption content.
   */
  icon?: JSX.Element;
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
    nodeId,
    label,
    sublabel,
    children,
    style,
    className,
    icon,
    isDisabled = false,
    ...rest
  } = props;
  useTheme();

  const context = React.useContext(TreeContext);
  const currentDepth = context?.nodeDepth ?? 0;

  const styleLevel = React.useMemo(
    () =>
      getWindow()?.CSS?.supports?.(`--level: ${currentDepth}`)
        ? { '--level': currentDepth, ...style }
        : { marginLeft: currentDepth ? currentDepth * 28 : 0, ...style },
    [currentDepth, style],
  );

  const [expanded, setExpanded] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(
    React.isValidElement(context?.checkbox)
      ? context?.checkbox.props['checked']
      : false,
  );

  const selectedNodes = React.useMemo(() => {
    let nodes = Array<string>();
    if (context?.selectionType === 'single' && context?.selectedNodes?.[0]) {
      nodes = [context?.selectedNodes?.[0]];
    } else if (context?.selectionType === 'multi') {
      nodes = context?.selectedNodes ?? [];
    }
    return nodes;
  }, [context?.selectedNodes, context?.selectionType]);

  const isSelected = React.useMemo(() => {
    let selected = false;
    selectedNodes?.forEach((node) => {
      if (node === nodeId) {
        selected = true;
      }
    });
    return selected;
  }, [selectedNodes, nodeId]);

  const onNodeClick = (e: React.SyntheticEvent<Element, Event>) => {
    if (context?.selectionType === 'none' || isDisabled) {
      return;
    } else if (context?.selectionType === 'single') {
      if (isSelected) {
        context?.setSelectedNode?.([]);
        return;
      }
      context?.setSelectedNode?.([nodeId]);
      context?.onNodeSelected?.(e, [nodeId]);
    } else if (context?.selectionType === 'multi') {
      const nodes = Array<string>();
      selectedNodes?.forEach((node) => {
        if (node != nodeId) {
          nodes.push(node);
        }
      });
      if (!isSelected) {
        nodes.push(nodeId);
        context?.onNodeSelected?.(e, nodes);
      }
      context?.setSelectedNode?.(nodes);
    }
  };

  return (
    <li role='treeitem' aria-expanded={expanded} {...rest}>
      <div
        className={cx('iui-tree-node', {
          'iui-active': isSelected,
          'iui-disabled': isDisabled,
          className,
        })}
        style={styleLevel}
        onClick={(e) => onNodeClick(e)}
      >
        {context?.checkbox && React.isValidElement(context?.checkbox)
          ? React.cloneElement(context?.checkbox, {
              className: 'iui-tree-node-checkbox',
              disabled: isDisabled,
              checked: isChecked,
              onClick: () => {
                setIsChecked(!isChecked);
                context.onNodeCheckboxSelected?.();
              },
            })
          : context?.checkbox}
        <div className='iui-tree-node-content'>
          {children && (
            <IconButton
              styleType='borderless'
              size='small'
              onClick={(e) => {
                setExpanded(!expanded);
                context?.onNodeExpanded?.();
                e.stopPropagation();
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
            <div className='iui-tree-node-content-title'>{label}</div>
            <div className='iui-tree-node-content-caption'>{sublabel}</div>
          </span>
        </div>
      </div>
      {children && expanded && (
        <ul className='iui-sub-tree' role='group'>
          <TreeContext.Provider
            value={{
              ...context,
              nodeDepth: currentDepth + 1,
            }}
          >
            {children}
          </TreeContext.Provider>
        </ul>
      )}
    </li>
  );
};

export default TreeNode;
