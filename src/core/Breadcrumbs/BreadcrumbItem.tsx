/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useTheme } from '../utils/hooks/useTheme';
import { Button } from '../Buttons/Button';
import '@itwin/itwinui-css/css/breadcrumbs.css';

type BreadcrumbItemOwnProps<E extends React.ElementType = React.ElementType> = {
  /**
   * Control which element the breadcrumb item should use.
   * Use 'a' if you also specify a meaningful href.
   * @default Button
   */
  element?: E;
};

export type BreadcrumbItemProps<
  E extends React.ElementType
> = BreadcrumbItemOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof BreadcrumbItemOwnProps>;

/**
 * Individual breadcrumb component to be used in the `Breadcrumbs` items array.
 * @example
 * const items = [
 *   <BreadcrumbItem>Root</BreadcrumbItem>,
 *   <BreadcrumbItem>Item 1</BreadcrumbItem>,
 *   <BreadcrumbItem>Item 2</BreadcrumbItem>,
 * ];
 */
export const BreadcrumbItem = <E extends React.ElementType = typeof Button>(
  props: BreadcrumbItemProps<E>,
) => {
  const { children, className, element: Element = Button, ...rest } = props;

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
