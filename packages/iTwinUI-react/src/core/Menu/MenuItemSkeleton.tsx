/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { CommonProps, useTheme } from '../utils';
import '@itwin/itwinui-css/css/menu.css';

export type MenuItemSkeletonProps = {
  /**
   * Flag whether to show skeleton for sub-label.
   */
  hasSublabel?: boolean;
  /**
   * Flag whether to show skeleton for icon.
   */
  hasIcon?: boolean;
  /**
   * Skeleton content width in percentage.
   */
  contentWidth?: number;
  /**
   * Translated strings used for accessibility.
   */
  translatedStrings?: {
    /**
     * Label for loading state. Defaults to "Loading…".
     */
    loading: string;
  };
} & CommonProps;

/**
 * Loading skeleton menu item.
 */
export const MenuItemSkeleton = (props: MenuItemSkeletonProps) => {
  const {
    hasSublabel,
    hasIcon,
    contentWidth,
    translatedStrings = { loading: 'Loading…' },
    className,
    style,
    ...rest
  } = props;

  useTheme();

  return (
    <li
      className={cx(
        'iui-menu-item',
        'iui-menu-item-skeleton',
        { 'iui-large': hasSublabel },
        className,
      )}
      style={{
        ...{
          '--iui-menu-item-content-skeleton-max-width': contentWidth
            ? `${contentWidth}%`
            : undefined,
        },
        ...style,
      }}
      {...rest}
    >
      {hasIcon && <div className='iui-icon iui-skeleton' aria-hidden='true' />}
      <span className='iui-content'>
        <div className='iui-menu-label iui-skeleton' aria-hidden='true' />
        {hasSublabel && (
          <div
            className='iui-menu-description iui-skeleton'
            aria-hidden='true'
          />
        )}
        <div className='iui-visually-hidden'>{translatedStrings.loading}</div>
      </span>
    </li>
  );
};

export default MenuItemSkeleton;
