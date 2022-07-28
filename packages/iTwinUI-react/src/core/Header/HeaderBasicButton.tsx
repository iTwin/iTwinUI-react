/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';
import { PolymorphicForwardRefComponent, useTheme } from '../utils';
import { ButtonProps } from '../Buttons';

export type HeaderBasicButtonProps = ButtonProps;

type HeaderBasicButtonComponent = PolymorphicForwardRefComponent<
  'button',
  HeaderBasicButtonProps
>;

/**
 * Basic button component for Header
 *
 */
export const HeaderBasicButton: HeaderBasicButtonComponent = React.forwardRef(
  (props, ref) => {
    const {
      onClick,
      className,
      children,
      style,
      type = 'button',
      startIcon,
      as: Element = 'button',
      ...rest
    } = props;

    useTheme();

    return (
      <Element
        className={cx('iui-header-breadcrumb-button', className)}
        onClick={onClick}
        ref={ref}
        type={type}
        style={style}
        {...rest}
      >
        {startIcon &&
          React.cloneElement(startIcon, {
            className: startIcon.props.className,
          })}
        {children}
      </Element>
    );
  },
);

export default HeaderBasicButton;
