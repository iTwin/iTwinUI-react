/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useTheme } from '../utils/hooks/useTheme';
import { CommonProps } from '../utils/props';
import SvgChevronRight from '@itwin/itwinui-icons-react/cjs/icons/ChevronRight';
import { IconButton } from '../Buttons';
import { Tooltip } from '../Tooltip';
import '@itwin/itwinui-css/css/side-navigation.css';

export type SideNavigationProps = {
  /**
   * Buttons shown in the top portion of sidenav.
   * Recommended to use `SidenavButton` components.
   */
  mainItems: React.ReactNode[];
  /**
   * Buttons shown at the bottom of sidenav.
   */
  secondaryItems?: React.ReactNode[];
  /**
   * Control the visibility of "expander" icon button.
   * @default 'top'
   */
  expanderVisibility?: 'top' | 'bottom' | 'hidden';
  /**
   * Controlled flag to expand/collapse the sidenav.
   */
  isExpanded?: boolean;
  /**
   * Callback fired when the "expander" icon is clicked.
   */
  onExpanderClick?: () => void;
} & Omit<CommonProps, 'title'>;

/**
 * Left side navigation menu component.
 * @example
 * <SideNavigation
 *   mainItems={[
 *     <SidenavButton startIcon={<SvgPlaceholder />}>App 1</SidenavButton>,
 *     <SidenavButton startIcon={<SvgPlaceholder />}>App 2</SidenavButton>,
 *     <SidenavButton startIcon={<SvgPlaceholder />}>App 3</SidenavButton>,
 *   ]}
 *   secondaryItems={[
 *     <SidenavButton startIcon={<SvgSettings />}>Settings</SidenavButton>,
 *   ]}
 * />
 */
export const SideNavigation = (props: SideNavigationProps) => {
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
          {mainItems.map((sidenavButton: JSX.Element, index) =>
            !_isExpanded ? (
              <Tooltip
                content={sidenavButton.props.children}
                placement='right'
                key={index}
              >
                {sidenavButton}
              </Tooltip>
            ) : (
              sidenavButton
            ),
          )}
        </div>
        <div className='iui-bottom'>
          {secondaryItems?.map((sidenavButton: JSX.Element, index) =>
            !_isExpanded ? (
              <Tooltip
                content={sidenavButton.props.children}
                placement='right'
                key={index}
              >
                {sidenavButton}
              </Tooltip>
            ) : (
              sidenavButton
            ),
          )}
        </div>
      </div>
      {expanderVisibility === 'bottom' && ExpandButton}
    </div>
  );
};

export default SideNavigation;
