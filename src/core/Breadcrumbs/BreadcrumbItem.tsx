/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CommonProps } from '../utils/props';
import { useTheme } from '../utils/hooks/useTheme';
import { Button } from '../Buttons/Button';
import '@itwin/itwinui-css/css/breadcrumbs.css';

type BreadcrumbItemOwnProps<E extends 'a' | 'button' | React.ElementType> = {
  /**
   * Control which element the breadcrumb item should use.
   *
   * Use 'button' if you specify an `onClick` handler.
   * Use 'a' only if you specify a meaningful `href`.
   * Use 'span' or 'div' if the item should not be clickable (e.g. for the current item).
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
  E extends 'a' | 'button' | React.ElementType
> = BreadcrumbItemOwnProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof BreadcrumbItemOwnProps<E>>;

/**
 * Individual breadcrumb component to be used as children of `Breadcrumbs`.
 *
 * @example
 * <BreadcrumbItem onClick={() => {}}>Breadcrumb button</BreadcrumbItem>
 *
 * @example
 * <BreadcrumbItem element='a' href='/page'>Breadcrumb link</BreadcrumbItem>,
 */
export const BreadcrumbItem = <
  E extends 'a' | 'button' | React.ElementType = 'button'
>(
  props: BreadcrumbItemProps<E>,
) => {
  const { children, element = 'button', ...rest } = props;

  const Element = element === 'button' ? Button : element;

  useTheme();

  return (
    <Element {...(Element === Button && { styleType: 'borderless' })} {...rest}>
      {children}
    </Element>
  );
};

export default BreadcrumbItem;
