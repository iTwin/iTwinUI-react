/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils';

export type SkipToContentLinkProps = {
  /**
   * Localize 'Skip to main content' label if needed.
   * @default 'Skip to main content'
   */
  children?: React.ReactNode;
};

/**
 * Link is for screen reader and keyboard users and will not be visible unless tabbed to.
 * Provides a shortcut to the main content of the page without navigating through the header, etc.
 * Should be placed just inside the body. Used in conjunction with `SkipToContentMarker`.
 * @example
 * <body><SkipToContentLink /> ... </body>
 * <body><SkipToContentLink>{localizedLabel}</SkipToContentLink> ... </body>
 */
export const SkipToContentLink = (props: SkipToContentLinkProps) => {
  const { children = 'Skip to main content', ...rest } = props;

  useTheme();

  return (
    <a
      className='iui-skip-to-content-link'
      href='#skip-to-content-marker'
      {...rest}
    >
      {children}
    </a>
  );
};

export default SkipToContentLink;
