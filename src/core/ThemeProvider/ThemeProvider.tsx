/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { ThemeType, useTheme } from '../utils/hooks/useTheme';

export type ThemeProviderProps = {
  /**
   * Theme to be applied. If not set, light theme will be used.
   */
  theme?: ThemeType;
  /**
   * Optional children.
   */
  children?: React.ReactNode;
  /**
   * Document to which the theme will be applied.
   * Can be specified to handle popup windows.
   * @default document
   */
  ownerDocument?: Document;
};

/**
 * Component providing global styles that are required for all components and allows changing theme.
 */
export const ThemeProvider = (props: ThemeProviderProps) => {
  const { theme, children, ownerDocument } = props;

  useTheme(theme, ownerDocument);
  return <>{children}</>;
};

export default ThemeProvider;
