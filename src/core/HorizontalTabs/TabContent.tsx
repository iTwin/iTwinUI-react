/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/tabs.css';

export type TabContentProps = {
  /**
   * The main label shown in the tab.
   */
  label: React.ReactNode;
  /**
   * Secondary label shown below the main label.
   * Only shown if `size` of `HorizontalTabs` is set to large.
   */
  sublabel?: React.ReactNode;
  /**
   * Svg icon shown before the labels.
   */
  icon?: JSX.Element;
  /**
   * Control whether the tab is disabled.
   */
  disabled?: boolean;
  /**
   * Custom content appended to the tab.
   */
  children?: React.ReactNode;
};

/**
 * Individual tab content to be used in the `labels` prop of `HorizontalTabs`.
 * @example
 * const tabs = [
 *   <Tab label='Label 1' sublabel='Description 1' />,
 *   <Tab label='Label 2' icon={<SvgPlaceholder />} />,
 * ];
 */
export const TabContent = (props: TabContentProps) => {
  const { label, sublabel, icon, children } = props;

  useTheme();

  return (
    <>
      {icon && React.cloneElement(icon, { className: 'iui-tab-icon' })}
      <div className='iui-tab-label'>
        <div>{label}</div>
        <div className='iui-tab-description'>{sublabel}</div>
      </div>
      {children}
    </>
  );
};

export default TabContent;
