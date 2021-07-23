/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useTheme } from '../utils/hooks/useTheme';
import { CommonProps } from '../utils/props';
import SvgChevronRight from '@itwin/itwinui-icons-react/cjs/icons/ChevronRight';
import '@itwin/itwinui-css/css/breadcrumbs.css';

export type BreadcrumbsProps = {
  /**
   * Index of the currently active breadcrumb.
   * Defaults to last index in the items array.
   */
  currentIndex?: number;
  /**
   * Breadcrumb items.
   */
  items: JSX.Element[];
  /**
   * Specify a custom separator element to show between breadcrumb items.
   * Defaults to the `SvgChevronRight` icon.
   */
  separator?: React.ReactNode;
} & Omit<CommonProps, 'title'>;

/**
 * A breadcrumb trail is used as a navigational aid to help users keep track
 * of their place in the application. It is often placed before a page's main content.
 *
 * For accessibility, make sure to provide an aria-label describing the type of navigation.
 *
 * @example
 * <Breadcrumbs
 *   items={[
 *     <BreadcrumbItem onClick={() => {}}>Root</BreadcrumbItem>,
 *     <BreadcrumbItem onClick={() => {}}>Item 1</BreadcrumbItem>,
 *     <BreadcrumbItem onClick={() => {}}>Item 2</BreadcrumbItem>,
 *   ]}
 *   aria-label='breadcrumbs'
 * />
 />
 */
export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const {
    items,
    currentIndex = items.length - 1,
    separator,
    className,
    ...rest
  } = props;

  useTheme();

  const Separator = () => (
    <li className='iui-breadcrumbs-separator' aria-hidden>
      {separator ?? <SvgChevronRight />}
    </li>
  );

  return (
    <nav className={cx('iui-breadcrumbs', className)} {...rest}>
      <ol className='iui-breadcrumbs-list'>
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
              {React.cloneElement(item, {
                'aria-current':
                  item.props['aria-current'] ?? currentIndex === index
                    ? 'location'
                    : undefined,
              })}
            </li>
            {index < items.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
