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
import { Tooltip } from '../Tooltip';

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
  /**
   * Controlled flag to expand/collapse the sidebar.
   */
  isExpanded?: boolean;
  /**
   * Callback fired when the "expander" icon is clicked.
   */
  onExpanderClick?: () => void;
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
 * secondaryItems={[
 *  <SidebarButton
 * ]}
 * />
 */
export const Sidebar = (props: SidebarProps) => {
  const {
    mainItems,
    secondaryItems,
    expanderVisibility = 'top',
    className,
    isExpanded,
    onExpanderClick,
    ...rest
  } = props;

  useTheme();

  const [_isExpanded, _setIsExpanded] = React.useState(isExpanded ?? false);
  React.useEffect(() => {
    _setIsExpanded(isExpanded ?? false);
  }, [isExpanded]);

  const ExpandButton = (
    <IconButton
      className='iui-sidenav-button iui-expand'
      onClick={React.useCallback(() => {
        _setIsExpanded((expanded) => !expanded);
        onExpanderClick?.();
      }, [onExpanderClick])}
    >
      <SvgChevronRight />
    </IconButton>
  );

  return (
    <div
      className={cx(
        'iui-side-navigation',
        {
          'iui-expanded': _isExpanded,
          'iui-collapsed': !_isExpanded,
        },
        className,
      )}
      {...rest}
    >
      {expanderVisibility === 'top' && ExpandButton}
      <div className='iui-sidenav-content'>
        <div className='iui-top'>
          {mainItems.map((sidebarButton: JSX.Element) =>
            !_isExpanded ? (
              <Tooltip content={sidebarButton.props.children} placement='right'>
                {sidebarButton}
              </Tooltip>
            ) : (
              sidebarButton
            ),
          )}
        </div>
        <div className='iui-bottom'>
          {secondaryItems?.map((sidebarButton: JSX.Element) =>
            !_isExpanded ? (
              <Tooltip content={sidebarButton.props.children} placement='right'>
                {sidebarButton}
              </Tooltip>
            ) : (
              sidebarButton
            ),
          )}
        </div>
      </div>
      {expanderVisibility === 'bottom' && ExpandButton}
    </div>
  );
};

export default Sidebar;
