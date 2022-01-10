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
import { TreeContext, TreeData } from './Tree';

export type TreeNodeProps = {
  /**
   * Unique id of the node.
   */
  nodeId: string;
  /**
   * The main text displayed on the node.
   */
  label?: React.ReactNode;
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
   * Callback fired when expanding or closing a TreeNode.
   */
  onNodeExpanded?: (nodeId: string, expanded: boolean) => void;
  /**
   * Callback fired when selecting a TreeNode.
   */
  onNodeSelected?: (nodeId: string, selected: boolean) => void;
  /**
   * The TreeNode's child nodes.
   * If undefined or empty, expander button is not shown.
   */
  subNodes?: Array<TreeData>;
  /**
   * Checkbox to be shown before TreeNode.
   * If undefined checkbox will not be shown.
   * Recommended to use Checkbox component.
   */
  nodeCheckbox?: React.ReactNode;
  /**
   * Callback fired when checking a TreeNode's checkbox.
   */
  onNodeCheckboxSelected?: (nodeId: string, checked: boolean) => void;
  /**
   * Content shown after TreeNode.
   */
  children?: React.ReactNode;
} & CommonProps;

/**
 * @example
  <TreeNode
    nodeId={nodeId}
    label={label}
    sublabel={subLabel}
    subNodes={subnodes}
    onNodeExpanded={onNodeExpanded}
    onNodeSelected={onSelectedNodeChange}
    isDisabled={isDisabled}
    nodeCheckbox={<Checkbox variant='eyeball' checked={true} />}
    onNodeCheckboxSelected={onCheckboxSelected}
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
    onNodeSelected,
    onNodeExpanded,
    subNodes,
    nodeCheckbox,
    onNodeCheckboxSelected,
    ...rest
  } = props;
  useTheme();

  const context = React.useContext(TreeContext);
  const nodeDepth = context?.nodeDepth ?? 0;
  const parentNode = context?.parentNode;

  const subNodeIds = React.useMemo(() => {
    const nodes = Array<string>();
    subNodes?.forEach((subNode) => {
      if (subNode.nodeId) {
        nodes.push(subNode?.nodeId);
      }
    });
    return nodes;
  }, [subNodes]);

  const styleLevel = React.useMemo(
    () =>
      getWindow()?.CSS?.supports?.(`--level: ${nodeDepth}`)
        ? { '--level': nodeDepth, ...style }
        : { marginLeft: nodeDepth ? nodeDepth * 28 : 0, ...style },
    [nodeDepth, style],
  );

  const expandedNodes = React.useMemo(() => {
    return context?.expandedNodes ?? [];
  }, [context?.expandedNodes]);

  const isExpanded = React.useMemo(() => {
    return expandedNodes.findIndex((id) => id === nodeId) != -1;
  }, [expandedNodes, nodeId]);

  const onExpandChanged = (e: React.SyntheticEvent<Element, Event>) => {
    if (isExpanded) {
      context?.setExpandedNodes?.(
        expandedNodes.filter((item) => item != nodeId),
      );
    } else {
      context?.setExpandedNodes?.([...expandedNodes, nodeId]);
    }

    onNodeExpanded?.(nodeId, !isExpanded);
    e.stopPropagation();
  };

  const visible = React.useMemo(() => {
    let isParentExpanded = parentNode
      ? expandedNodes.findIndex((id) => id === parentNode.data.nodeId) != -1
      : true;
    if (parentNode) {
      let currentParent = parentNode.parent;
      while (currentParent) {
        if (
          expandedNodes.findIndex((id) => id === currentParent?.data.nodeId) ===
          -1
        ) {
          isParentExpanded = false;
        }
        currentParent = currentParent.parent;
      }
    }
    return isParentExpanded;
  }, [expandedNodes, parentNode]);

  const [isChecked, setIsChecked] = React.useState(
    React.isValidElement(nodeCheckbox) ? nodeCheckbox.props['checked'] : false,
  );

  const selectedNodes = React.useMemo(() => {
    return context?.selectedNodes ?? [];
  }, [context?.selectedNodes]);

  const isSelected = React.useMemo(() => {
    return selectedNodes.findIndex((id) => id === nodeId) != -1;
  }, [selectedNodes, nodeId]);

  const onNodeClick = () => {
    if (isDisabled) {
      return;
    }
    if (isSelected) {
      context?.setSelectedNode?.(
        selectedNodes.filter((item) => item != nodeId),
      );
    } else {
      context?.setSelectedNode?.([nodeId]);
    }
    onNodeSelected?.(nodeId, !isSelected);
  };

  return (
    <>
      <li role='treeitem' id={nodeId} aria-expanded={isExpanded} {...rest}>
        {visible && (
          <div
            className={cx(
              'iui-tree-node',
              {
                'iui-active': isSelected,
                'iui-disabled': isDisabled,
              },
              className,
            )}
            style={styleLevel}
            onClick={() => onNodeClick()}
            tabIndex={isSelected ? 0 : -1}
          >
            {nodeCheckbox && React.isValidElement(nodeCheckbox)
              ? React.cloneElement(nodeCheckbox, {
                  className: 'iui-tree-node-checkbox',
                  disabled: isDisabled,
                  checked: isChecked,
                  onClick: () => {
                    setIsChecked(!isChecked);
                    onNodeCheckboxSelected?.(nodeId, !isChecked);
                  },
                })
              : nodeCheckbox}
            <div className='iui-tree-node-content'>
              {subNodes && subNodes.length > 0 && (
                <IconButton
                  styleType='borderless'
                  size='small'
                  onClick={(e) => onExpandChanged(e)}
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
                <div className='iui-tree-node-content-caption'>{sublabel}</div>
              </span>
            </div>
            {children}
          </div>
        )}
        {subNodes && subNodes.length > 0 && (
          <ul
            className='iui-sub-tree'
            role='group'
            aria-owns={subNodeIds.join(' ')}
          />
        )}
      </li>
    </>
  );
};

export default TreeNode;
