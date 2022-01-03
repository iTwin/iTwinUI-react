/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';

import {
  PolymorphicComponentPropsWithRef,
  AsProp,
  useTheme,
} from '../../utils';
import '@itwin/itwinui-css/css/button.css';

type ButtonOwnProps = {
  /**
   * Modify size of the button.
   */
  size?: 'small' | 'large';
  /**
   * Style of the button.
   * Use 'borderless' to hide outline.
   * @default 'default'
   */
  styleType?: 'cta' | 'high-visibility' | 'default' | 'borderless';
  /**
   * Icon shown before the main button content.
   */
  startIcon?: JSX.Element;
  /**
   * Icon shown after the main button content.
   */
  endIcon?: JSX.Element;
  /**
   * Content of the button.
   */
  children?: React.ReactNode;
};

export type ButtonProps<
  T extends React.ElementType = 'button'
> = PolymorphicComponentPropsWithRef<T, ButtonOwnProps>;

type ButtonComponent = <T extends React.ElementType = 'button'>(
  props: ButtonProps<T> & AsProp<T>,
) => React.ReactElement | null;

/**
 * Generic button component
 * @example
 * <Button>This is a default button</Button>
 * <Button disabled={true}>This is a disabled button</Button>
 * <Button size='large' styleType='high-visibility'>This is a large high visibility button</Button>
 * <Button size='small' styleType='cta'>This is a small call to action button</Button>
 * <Button startIcon={<SvgAdd />}>New</Button>
 */
export const Button: ButtonComponent = React.forwardRef(
  <T extends React.ElementType = 'button'>(
    props: ButtonProps<T> & AsProp<T>,
    ref: React.ComponentPropsWithRef<T>['ref'],
  ) => {
    const {
      children,
      className,
      size,
      style,
      styleType = 'default',
      type = 'button',
      startIcon,
      endIcon,
      as: Element = 'button',
      ...rest
    } = props;

    useTheme();

    return (
      <Element
        ref={ref}
        className={cx(
          'iui-button',
          `iui-${styleType}`,
          {
            [`iui-${size}`]: !!size,
          },
          className,
        )}
        style={style}
        type={type}
        {...rest}
      >
        {startIcon &&
          React.cloneElement(startIcon, {
            className: cx('iui-button-icon', startIcon.props.className),
          })}

        {children && <span className='iui-button-label'>{children}</span>}

        {endIcon &&
          React.cloneElement(endIcon, {
            className: cx('iui-button-icon', endIcon.props.className),
          })}
      </Element>
    );
  },
);

export default Button;
