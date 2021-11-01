/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

export type ClassNameProps = {
  /**
   * Custom CSS class name.
   */
  className?: string;
};

export type StylingProps = {
  /**
   * Custom CSS style properties.
   */
  style?: React.CSSProperties;
} & ClassNameProps;

export type CommonProps = {
  /**
   * HTML title attribute.
   */
  title?: string;
  /**
   * HTML id attribute.
   */
  id?: string;
} & StylingProps;

export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = Record<string, unknown>
> = Props & Omit<React.ComponentPropsWithoutRef<T>, keyof Props>;

export type PolymorphicComponentPropsWithRef<
  T extends React.ElementType,
  Props = Record<string, unknown>
> = PolymorphicComponentProps<T, Props> & {
  ref?: React.ComponentPropsWithRef<T>['ref'];
};
