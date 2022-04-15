/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { CommonProps, useTheme, getWindow } from '../utils';
import '@itwin/itwinui-css/css/surface.css';

/**
 * Helper function that returns one of the preset surface elevation values.
 */
const getSurfaceElevationValue = (elevation: SurfaceProps['elevation']) => {
  switch (elevation) {
    case 0:
      return 'none';
    case 4:
      return '0 1px 10px rgba(0, 0, 0, 0.25)';
    case 8:
      return '0 3px 14px rgba(0, 0, 0, 0.25)';
    case 16:
      return '0 6px 30px rgba(0, 0, 0, 0.25)';
    case 24:
      return '0 9px 46px rgba(0, 0, 0, 0.25)';
    default:
      return '';
  }
};

export type SurfaceProps = {
  /**
   * Sets the elevation of the surface in density-independent pixels (dp)
   * @default 2
   */
  elevation?: 0 | 2 | 4 | 8 | 16 | 24;
  /**
   * Content in the surface.
   */
  children: React.ReactNode;
} & Omit<CommonProps, 'title'>;

/**
 * The Surface container allows content to appear elevated through the use of a drop shadow
 * @example
 * <Surface>Surface Content</Surface>
 * <Surface elevation={2}>Surface Content</Surface>
 */
export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  (props, ref) => {
    const { elevation = 2, className, style, children, ...rest } = props;
    useTheme();

    const _style = getWindow()?.CSS?.supports?.(
      `--iui-surface-elevation: ${getSurfaceElevationValue(elevation)}`,
    )
      ? {
          '--iui-surface-elevation': getSurfaceElevationValue(elevation),
          ...style,
        }
      : {
          boxShadow: getSurfaceElevationValue(elevation),
          ...style,
        };

    return (
      <div
        className={cx('iui-surface', className)}
        style={_style}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

export default Surface;
