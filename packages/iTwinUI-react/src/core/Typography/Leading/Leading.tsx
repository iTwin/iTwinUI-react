/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';
import { useTheme } from '../../utils';
import '@itwin/itwinui-css/css/text.css';

export type LeadingProps = {
  /**
   * Set text to muted.
   * @default false
   */
  isMuted?: boolean;
} & React.HTMLAttributes<HTMLHeadingElement>;

/**
 * The third biggest title on the page, renders a h3 element
 * @deprecated Use `Text` with attribute `variant='leading'` instead.
 * @example
 * <Leading>I'm a Leading!</Leading>
 * <Leading isMuted>I'm a muted Leading.</Leading>
 */
export const Leading = React.forwardRef<HTMLHeadingElement, LeadingProps>(
  (props, ref) => {
    const { className, isMuted = false, ...rest } = props;

    useTheme();

    return (
      <h3
        ref={ref}
        className={cx(
          'iui-text-leading',
          'iui-text-spacing',
          { 'iui-text-muted': isMuted },
          className,
        )}
        {...rest}
      />
    );
  },
);

/**
 * @deprecated Use `Text` with attribute `variant='leading'` instead.
 */
export default Leading;
