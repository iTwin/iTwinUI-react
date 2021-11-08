/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';

import { ButtonProps } from '../Button';
import {
  AsProp,
  PolymorphicComponentPropsWithRef,
  useTheme,
} from '../../utils';
import '@itwin/itwinui-css/css/button.css';

type IconButtonOwnProps = {
  /**
   * Button gets active style.
   * @default false
   */
  isActive?: boolean;
} & Omit<ButtonProps, 'startIcon' | 'endIcon'>;

export type IconButtonProps<
  T extends React.ElementType = 'button'
> = PolymorphicComponentPropsWithRef<T, IconButtonOwnProps>;

type IconButtonComponent = <T extends React.ElementType = 'button'>(
  props: IconButtonProps<T> & AsProp<T>,
) => React.ReactElement | null;

/**
 * Icon button
 * @example
 * <IconButton><SvgAdd /></IconButton>
 * <IconButton styleType='borderless'><SvgAdd /></IconButton>
 */
export const IconButton: IconButtonComponent = React.forwardRef(
  <T extends React.ElementType = 'button'>(
    props: IconButtonProps<T> & AsProp<T>,
    ref: React.ComponentPropsWithRef<T>['ref'],
  ) => {
    const {
      isActive,
      children,
      styleType = 'default',
      size,
      type = 'button',
      className,
      as: Element = 'button',
      ...rest
    } = props;

    useTheme();

    return (
      <Element
        ref={ref}
        className={cx(
          'iui-button',
          {
            [`iui-${size}`]: !!size,
            [`iui-${styleType}`]: styleType !== 'default',
            'iui-active': isActive,
          },
          className,
        )}
        type={type}
        {...rest}
      >
        {React.cloneElement(children as JSX.Element, {
          className: cx('iui-icon', (children as JSX.Element).props.className),
          'aria-hidden': true,
        })}
      </Element>
    );
  },
);

export default IconButton;
