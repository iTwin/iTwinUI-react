/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils';

export type SkipToContentMarkerProps = {
  /**
   * Optional main content as child.
   */
  children?: React.ReactNode;
};

/**
 * Marks the start of the main content of the page.
 * Used in conjunction with `SkipToContentLink`.
 * @example <caption>`SkipToContentMarker` is placed before the main content</caption>
 * <SkipToContentMarker /> <MainContentMarker />
 * @example <caption>The main content is placed as a child of the `SkipToContentMarker` element</caption>
 * <SkipToContentMarker> <MainContent /> </SkipToContentMarker>
 */
export const SkipToContentMarker = (props: SkipToContentMarkerProps) => {
  const { children, ...rest } = props;

  useTheme();

  return (
    <div {...rest} id='skip-to-content-marker'>
      {children}
    </div>
  );
};

export default SkipToContentMarker;
