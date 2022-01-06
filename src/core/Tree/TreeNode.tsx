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
   * If true, subNodes will be visible.
   * @default false
   */
  isExpanded?: boolean;
  /**
   * Callback fired when expanding or closing a TreeNode.
   */
  onNodeExpanded?: (nodeId: string) => void;
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
  <TreeNode
    label={label}
    sublabel={subLabel}
    subNodes={subnodes}
    onNodeExpanded={onNodeExpanded}
    isExpanded={isExpanded}
    isDisabled={isDisabled}
    nodeCheckbox={<Checkbox variant='eyeball' checked={true} />}
    onNodeCheckboxSelected={onCheckboxSelected}
    icon={<SvgPlaceholder />}
  />
 */
export const TreeNode = (props: TreeNodeProps) => {
  const {
    label,
    sublabel,
    children,
    style,
    className,
    icon,
    isDisabled = false,
    isExpanded = false,
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
      if (subNode.label) {
        nodes.push(subNode?.label);
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

  const [expanded, setExpanded] = React.useState(isExpanded);
  React.useEffect(() => {
    setExpanded(isExpanded);
  }, [isExpanded]);

  const [visible, setVisible] = React.useState(
    parentNode ? parentNode.data.isExpanded : true,
  );
  React.useEffect(() => {
    let currentParent = parentNode;
    let isParentExpanded = parentNode?.data.isExpanded ?? true;
    while (currentParent) {
      if (currentParent.data.isExpanded === false) {
        isParentExpanded = false;
      }
      currentParent = currentParent.parent;
    }
    setVisible(isParentExpanded);
  }, [parentNode]);

  const [isChecked, setIsChecked] = React.useState(
    React.isValidElement(nodeCheckbox) ? nodeCheckbox.props['checked'] : false,
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
      if (node === label) {
        selected = true;
      }
    });
    return selected;
  }, [selectedNodes, label]);

  const onNodeClick = (e: React.SyntheticEvent<Element, Event>) => {
    if (context?.selectionType === 'none' || isDisabled) {
      return;
    } else if (context?.selectionType === 'single') {
      if (isSelected) {
        context?.setSelectedNode?.([]);
        return;
      }
      context?.setSelectedNode?.([label?.toString() ?? '']);
      context?.onNodeSelected?.(e, [label?.toString() ?? '']);
    } else if (context?.selectionType === 'multi') {
      const nodes = Array<string>();
      selectedNodes?.forEach((node) => {
        if (node != label) {
          nodes.push(node);
        }
      });
      if (!isSelected) {
        nodes.push(label?.toString() ?? '');
        context?.onNodeSelected?.(e, nodes);
      }
      context?.setSelectedNode?.(nodes);
    }
  };

  return (
    <>
      <li
        role='treeitem'
        id={label?.toString() ?? ''}
        aria-expanded={expanded}
        {...rest}
      >
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
            onClick={(e) => onNodeClick(e)}
            tabIndex={isSelected ? 0 : -1}
          >
            {nodeCheckbox && React.isValidElement(nodeCheckbox)
              ? React.cloneElement(nodeCheckbox, {
                  className: 'iui-tree-node-checkbox',
                  disabled: isDisabled,
                  checked: isChecked,
                  onClick: () => {
                    setIsChecked(!isChecked);
                    onNodeCheckboxSelected?.(
                      label?.toString() ?? '',
                      !isChecked,
                    );
                  },
                })
              : nodeCheckbox}
            <div className='iui-tree-node-content'>
              {subNodes && subNodes.length > 0 && (
                <IconButton
                  styleType='borderless'
                  size='small'
                  onClick={(e) => {
                    setExpanded(!expanded);
                    onNodeExpanded?.(label?.toString() ?? '');
                    e.stopPropagation();
                  }}
                  disabled={isDisabled}
                  tabIndex={-1}
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
