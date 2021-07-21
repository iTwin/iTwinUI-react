/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useTheme } from '../utils/hooks/useTheme';
import { CommonProps } from '../utils/props';
import { Button } from '../Buttons/Button';
import '@itwin/itwinui-css/css/breadcrumbs.css';

export type BreadcrumbItemProps = {
  /**
   * Control which element the breadcrumb item should use.
   * Only use 'anchor' if you also specify a meaningful href.
   * @default 'button'
   */
  element?: 'button' | 'anchor';
  /**
   * Customize props on the element.
   */
  elementProps?:
    | (React.HTMLAttributes<HTMLButtonElement> & { href?: undefined })
    | (React.HTMLAttributes<HTMLAnchorElement> & { href?: string });
  /**
   * Is this the currently active breadcrumb item?
   */
  isCurrent?: boolean;
  /**
   * Content inside the breadcrumb item.
   */
  children: React.ReactNode;
} & CommonProps;

/**
 * Individual breadcrumb component to be used in the `Breadcrumbs` items array.
 * @example
 * const items = [
 *   <BreadcrumbItem>Root</BreadcrumbItem>,
 *   <BreadcrumbItem>Item 1</BreadcrumbItem>,
 *   <BreadcrumbItem>Item 2</BreadcrumbItem>,
 * ];
 */
export const BreadcrumbItem = (props: BreadcrumbItemProps) => {
  const {
    element = 'button',
    elementProps,
    isCurrent,
    children,
    className,
    ...rest
  } = props;

  // type guard to narrow down prop types
  const isAnchor = (
    props?:
      | React.HTMLAttributes<HTMLButtonElement>
      | React.HTMLAttributes<HTMLAnchorElement>,
  ): props is React.HTMLAttributes<HTMLAnchorElement> => element === 'anchor';

  useTheme();

  return (
    <li
      className={cx(
        'iui-breadcrumbs-item',
        { 'iui-current': isCurrent },
        className,
      )}
      {...rest}
    >
      {!isAnchor(elementProps) ? (
        <Button styleType='borderless' {...elementProps}>
          {children}
        </Button>
      ) : (
        <a className='iui-anchor' {...elementProps}>
          {children}
        </a>
      )}
    </li>
  );
};

export default BreadcrumbItem;
