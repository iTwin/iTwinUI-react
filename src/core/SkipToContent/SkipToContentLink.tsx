/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useTheme } from '../utils';
import '@itwin/itwinui-css/css/skip-to-content.css';

export type SkipToContentLinkProps = {
  /**
   * Localize 'Skip to main content' label.
   * @default 'Skip to main content'
   */
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'a'>;

/**
 * `SkipToContentLink` is for screen reader and keyboard users and will not be visible unless tabbed to.
 * Provides a shortcut to the main content of the page without navigating through the header, etc.
 * Should be placed just inside the body. Used in conjunction with `SkipToContentMarker` or by setting
 * the href to the id of your main content component.
 * @example
 * <body><SkipToContentLink /> ... </body>
 * <body><SkipToContentLink>{localizedLabel}</SkipToContentLink> ... </body>
 * <body><SkipToContentLink href='#main-id' /> ... </body>
 */
export const SkipToContentLink = React.forwardRef<
  HTMLAnchorElement,
  SkipToContentLinkProps
>((props, ref) => {
  const { children = 'Skip to main content', className, ...rest } = props;

  useTheme();

  return (
    <a
      ref={ref}
      className={cx('iui-skip-to-content-link', className)}
      href='#skip-to-content-marker'
      {...rest}
    >
      {children}
    </a>
  );
});

export default SkipToContentLink;
