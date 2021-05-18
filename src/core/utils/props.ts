/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
export type ClassNameProps = {
  /**
   * Custom CSS class name.
   */
  className?: string;
  /**
   * Custom CSS style properties.
   */
  style?: React.CSSProperties;
};

export type CommonProps = {
  /**
   * HTML title attribute.
   */
  title?: string;
} & ClassNameProps;
