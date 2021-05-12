/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import '@itwin/itwinui-css/css/header.css';

import cx from 'classnames';
import React from 'react';

import { useTheme } from '../utils/hooks/useTheme';

export type HeaderTitleProps = {
  /**
   * Logo shown before the main content.
   */
  logo: JSX.Element;
} & React.ButtonHTMLAttributes<HTMLDivElement>;

/**
 * Header Title section
 * @example
 * <HeaderTitle logo="<SvgMicrostation />">Microstation</HeaderTitle>
 * <HeaderTitle logo="<SvgItwin />" />
 */
export const HeaderTitle = (props: HeaderTitleProps) => {
  const { className, children, logo, ...rest } = props;

  useTheme();
  return (
    <div
      className={cx('iui-header-logo', className)}
      role={rest.onClick ? 'button' : undefined}
      {...rest}
    >
      {React.isValidElement<{ className: string }>(logo)
        ? React.cloneElement(logo, {
            className: cx('iui-header-button-icon', logo.props.className),
          })
        : undefined}
      {children && <span className='iui-label'>{children}</span>}
    </div>
  );
};

export default HeaderTitle;
