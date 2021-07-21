/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useTheme } from '../utils/hooks/useTheme';
import { CommonProps } from '../utils/props';
import { SvgChevronRight } from '@itwin/itwinui-icons-react';
import '@itwin/itwinui-css/css/breadcrumbs.css';

export type BreadcrumbsProps = {
  /**
   * Index of the currently active breadcrumb.
   */
  currentIndex?: number;
  /**
   * Breadcrumb items.
   */
  items: JSX.Element[];
} & Omit<CommonProps, 'title'>;

/**
 * Describe me here!
 * @example
 * Example usages go here!
 */
export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { items, currentIndex, className, ...rest } = props;

  useTheme();

  const Separator = () => (
    <li className='iui-breadcrumbs-separator' aria-hidden>
      <SvgChevronRight />
    </li>
  );

  return (
    <nav className='iui-breadcrumbs' {...rest}>
      <ol className={cx('iui-breadcrumbs-list', className)}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li
              className={cx(
                'iui-breadcrumbs-item',
                { 'iui-current': currentIndex === index },
                className,
              )}
              {...rest}
            >
              {item}
            </li>
            {index < items.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
