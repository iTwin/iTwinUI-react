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
   * Buttons shown in the top portion sidebar.
   * Recommended to use `SidenavButton`s.
   */
  mainItems: React.ReactNode[];
  /**
   * Buttons shown at the bottom of the sidebar.
   */
  secondaryItems?: React.ReactNode[];
  /**
   * Control the visibility of "expander" icon button.
   * @default 'top'
   */
  expanderVisibility?: 'top' | 'bottom' | 'hidden';
} & Omit<CommonProps, 'title'>;

/**
 * Describe me here!
 * @example
 * Example usages go here!
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
          {mainItems.map((sidebarButton) =>
            React.cloneElement(sidebarButton as JSX.Element, {
              showTooltip: !isExpanded,
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
