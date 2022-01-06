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

/**
 * Merges provided Props with the props of T.
 *
 * T can be any native HTML element or a custom component.
 */
export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = Record<string, unknown>
> = Merge<React.ComponentPropsWithoutRef<T>, Props>;

/**
 * Merges original OwnProps and the inferred props from `as` element.
 *
 * T should be the default element that is used for the `as`  prop.
 */
export interface PolymorphicForwardRefComponent<
  T,
  OwnProps = Record<string, unknown>
> extends React.ForwardRefExoticComponent<
    Merge<
      T extends React.ElementType ? React.ComponentPropsWithRef<T> : never,
      OwnProps & { as?: T }
    >
  > {
  <As = T>(
    props: As extends ''
      ? { as: keyof JSX.IntrinsicElements }
      : As extends React.ComponentType<infer P>
      ? Merge<P, OwnProps & { as: As }>
      : As extends keyof JSX.IntrinsicElements
      ? Merge<JSX.IntrinsicElements[As], OwnProps & { as: As }>
      : never,
  ): React.ReactElement | null;
}

type Merge<P1, P2> = Omit<P1, keyof P2> & P2;
