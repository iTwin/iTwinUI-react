/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import '@itwin/itwinui-css/css/header.css';

import cx from 'classnames';
import React from 'react';

import { useTheme } from '../utils/hooks/useTheme';
import { CommonProps } from '../utils/props';

export type HeaderLogoProps = React.PropsWithChildren<
  {
    /**
     * Logo shown before the main content.
     */
    logo: JSX.Element;
    /**
     * Click event handler.
     * Will update the Logo to have mouse and keyboard interaction if provided.
     */
    onClick?: () => void;
  } & CommonProps
>;

/**
 * Header Title section
 * @example
 * <HeaderLogo logo={<SvgImodelHollow />}>iTwin Application</HeaderLogo>
 * <HeaderLogo logo={<SvgImodelHollow />} />
 * <HeaderLogo logo={<img src='image.png' />} />
 * <HeaderLogo logo={<img src='data:image/png;base64,...' />} >Downloaded Image</HeaderLogo>
 */
export const HeaderLogo = (props: HeaderLogoProps) => {
  const { className, children, logo, onClick, ...rest } = props;
  const keyDownHandler = React.useCallback<
    React.KeyboardEventHandler<HTMLDivElement>
  >(
    (e) => {
      if (onClick && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onClick();
      }
    },
    [onClick],
  );
  useTheme();
  return (
    <div
      className={cx('iui-header-logo', className)}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? keyDownHandler : undefined}
      onClick={onClick}
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

export default HeaderLogo;
