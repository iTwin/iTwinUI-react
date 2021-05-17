/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';

export type SideNavigationProps = {};

/**
 * Describe me here!
 * @example
 * Example usages go here!
 */
export const SideNavigation = (props: SideNavigationProps) => {
  const { ...rest } = props;
  useTheme();
  return <div {...rest} />;
};

export default SideNavigation;
