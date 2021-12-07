/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CommonProps, getWindow, useTheme } from '../utils';
import 'D:/itwinUI/iTwinUI/lib/css/tree.css'; //'@itwin/itwinui-css/css/tree.css';
import { SvgChevronRight } from '@itwin/itwinui-icons-react';
import { IconButton } from '../Buttons/IconButton';
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
   * Depth of node.
   * @default 0
   */
  depthLevel?: number;
  /**
   * Sub-nodes, shown and hidden by expanding TreeNode.
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
    isExpanded,
    depthLevel = 0,
    children,
    style,
    ...rest
  } = props;
  useTheme();

  const style_level = React.useMemo(
    () =>
      getWindow()?.CSS?.supports?.(`--level: ${depthLevel}`)
        ? { '--level': depthLevel, ...style }
        : { marginLeft: depthLevel ? depthLevel * 28 : 0, ...style },
    [],
  );

  const [expanded, setExpanded] = React.useState(isExpanded);

  return (
    <li role='treeitem' aria-expanded={expanded} {...rest}>
      <div className='iui-tree-node' style={style_level}>
        <div className='iui-tree-node-content'>
          {children && (
            <IconButton
              styleType='borderless'
              size='small'
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              <SvgChevronRight
                className={cx('iui-tree-node-content-expander-icon', {
                  'iui-tree-node-content-expander-icon-expanded': expanded,
                })}
              />
            </IconButton>
          )}
          <span className='iui-tree-node-content-label'>
            <div className='iui-tree-node-content-title'>{title}</div>
          </span>
        </div>
      </div>
      {children && expanded && (
        <ul className='iui-sub-tree' role='group'>
          {children}
        </ul>
      )}
    </li>
  );
};

export default TreeNode;
