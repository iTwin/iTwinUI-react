/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { CommonProps } from '../utils/props';
import { useTheme } from '../utils/hooks/useTheme';
import { Button } from '../Buttons/Button';
import '@itwin/itwinui-css/css/breadcrumbs.css';

type BreadcrumbItemOwnProps<
  E extends 'a' | 'button' | 'span' | React.ComponentType
> = {
  /**
   * Control which element the breadcrumb item should use.
   *
   * Use 'button' if you specify an `onClick` handler.
   * Use 'a' only if you specify a meaningful `href`.
   * Use 'span' if the item should not be clickable (e.g. for the current item).
   *
   * You can also use a custom component like a react-router `Link` or `NavLink`.
   *
   * @default 'button'
   */
  element?: E;
  /**
   * Content of the breadcrumb item.
   */
  children: React.ReactNode;
} & CommonProps;

export type BreadcrumbItemProps<
  E extends 'a' | 'button' | 'span' | React.ComponentType
> = BreadcrumbItemOwnProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof BreadcrumbItemOwnProps<E>>;

/**
 * Individual breadcrumb component to be used in the `Breadcrumbs` items array.
 * @example
 * const items = [
 *   <BreadcrumbItem onClick={() => {}}>Root</BreadcrumbItem>,
 *   <BreadcrumbItem onClick={() => {}}>Item 1</BreadcrumbItem>,
 *   <BreadcrumbItem onClick={() => {}}>Item 2</BreadcrumbItem>,
 * ];
 * @example
 * const items = [
 *   <BreadcrumbItem element='a' href='/'>Root</BreadcrumbItem>,
 *   <BreadcrumbItem element='a' href='/page1'>Page 1</BreadcrumbItem>,
 *   <BreadcrumbItem element='a' href='/page1/sub1'>Sub page 1</BreadcrumbItem>,
 * ];
 */
export const BreadcrumbItem = <
  E extends 'a' | 'button' | 'span' | React.ComponentType = 'button'
>(
  props: BreadcrumbItemProps<E>,
) => {
  const { className, children, element = 'button', ...rest } = props;

  const Element = element === 'button' ? Button : element;

  useTheme();

  return (
    <Element
      className={cx({ 'iui-anchor': Element === 'a' }, className)}
      {...(Element === Button && { styleType: 'borderless' })}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default BreadcrumbItem;
