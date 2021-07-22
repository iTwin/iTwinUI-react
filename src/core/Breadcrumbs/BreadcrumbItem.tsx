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

type BreadcrumbItemOwnProps<E extends 'a' | 'button'> = {
  /**
   * Control which element the breadcrumb item should use.
   * Use 'a' if you also specify a meaningful href.
   * @default 'button'
   */
  element?: E;
  /**
   * Content of the breadcrumb item.
   */
  children: React.ReactNode;
} & CommonProps;

export type BreadcrumbItemProps<
  E extends 'a' | 'button'
> = BreadcrumbItemOwnProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof BreadcrumbItemOwnProps<E>>;

/**
 * Individual breadcrumb component to be used in the `Breadcrumbs` items array.
 * @example
 * const items = [
 *   <BreadcrumbItem>Root</BreadcrumbItem>,
 *   <BreadcrumbItem>Item 1</BreadcrumbItem>,
 *   <BreadcrumbItem>Item 2</BreadcrumbItem>,
 * ];
 * @example
 * const items = [
 *   <BreadcrumbItem element='a' href='/'>Root</BreadcrumbItem>,
 *   <BreadcrumbItem element='a' href='/page1'>Page 1</BreadcrumbItem>,
 *   <BreadcrumbItem element='a' href='/page1/sub1'>Sub page 1</BreadcrumbItem>,
 * ];
 */
export const BreadcrumbItem = <E extends 'a' | 'button' = 'button'>(
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
