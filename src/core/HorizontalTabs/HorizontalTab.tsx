/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/tabs.css';
import { CommonProps } from '../utils/props';

export type HorizontalTab = {
  /**
   * The main label shown in the tab.
   */
  label?: React.ReactNode;
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
} & CommonProps;

/**
 * Individual tab content to be used in the `tabs` prop of `HorizontalTabs`.
 * @example
 * const tabs = [
 *   <HorizontalTab label='Label 1' sublabel='Description 1' />,
 *   <HorizontalTab label='Label 2' icon={<SvgPlaceholder />} />,
 * ];
 */
export const HorizontalTab = (props: HorizontalTab) => {
  const { label, sublabel, icon, children, className, ...rest } = props;

  useTheme();

  return (
    <button className={cx('iui-tab', className)} role='tab' {...rest}>
      {icon && React.cloneElement(icon, { className: 'iui-tab-icon' })}
      {label && (
        <span className='iui-tab-label'>
          <div>{label}</div>
          <div className='iui-tab-description'>{sublabel}</div>
        </span>
      )}
      {children}
    </button>
  );
};

export default HorizontalTab;
