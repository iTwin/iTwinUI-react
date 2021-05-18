/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/side-navigation.css';
import { CommonProps } from '../utils/props';
import SvgChevronRight from '@itwin/itwinui-icons-react/cjs/icons/ChevronRight';
import { IconButton } from '../Buttons';

export type SidebarProps = {
  /**
   * Buttons shown in the top portion of sidebar.
   * Recommended to use `SidebarButton` components.
   */
  mainItems: React.ReactNode[];
  /**
   * Buttons shown at the bottom of sidebar.
   */
  secondaryItems?: React.ReactNode[];
  /**
   * Control the visibility of "expander" icon button.
   * @default 'top'
   */
  expanderVisibility?: 'top' | 'bottom' | 'hidden';
} & Omit<CommonProps, 'title'>;

/**
 * Sidebar component.
 * @example
 * <Sidebar
 *  mainItems={[
 *    <SidebarButton startIcon={<SvgPlaceholder />}>App 1</SidebarButton>,
 *    <SidebarButton startIcon={<SvgPlaceholder />}>App 2</SidebarButton>,
 *    <SidebarButton startIcon={<SvgPlaceholder />}>App 3</SidebarButton>,
 *  ]}
 * />
 */
export const Sidebar = (props: SidebarProps) => {
  const {
    mainItems,
    secondaryItems,
    expanderVisibility = 'top',
    className,
    ...rest
  } = props;

  useTheme();

  const [isExpanded, setIsExpanded] = React.useState(false);

  const ExpandButton = (
    <IconButton
      className='iui-sidenav-button iui-expand'
      onClick={() => setIsExpanded((expanded) => !expanded)}
    >
      <SvgChevronRight />
    </IconButton>
  );

  return (
    <div
      className={cx(
        'iui-side-navigation',
        {
          'iui-expanded': isExpanded,
          'iui-collapsed': !isExpanded,
        },
        className,
      )}
      {...rest}
    >
      {expanderVisibility === 'top' && ExpandButton}
      <div className='iui-sidenav-content'>
        <div className='iui-top'>
          {mainItems.map((sidebarButton: JSX.Element) =>
            React.cloneElement(sidebarButton, {
              title:
                sidebarButton.props.title ||
                (!isExpanded ? sidebarButton.props.children : undefined),
            }),
          )}
        </div>
        <div className='iui-bottom'>{secondaryItems}</div>
      </div>
      {expanderVisibility === 'bottom' && ExpandButton}
    </div>
  );
};

export default Sidebar;
