/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import '@itwin/itwinui-css/css/header.css';

import cx from 'classnames';
import React from 'react';
import { Button, ButtonProps } from '../Buttons/Button';

import { useTheme } from '../utils/hooks/useTheme';

export type HeaderApplicationButtonProps = Omit<ButtonProps, 'styleType'>;

/**
 * Application header button
 * @example
 * Example to come when we are set for the props.
 */
export const HeaderApplicationButton = (
  props: HeaderApplicationButtonProps,
) => {
  const { className, ...rest } = props;

  useTheme();
  return (
    <Button
      className={cx('iui-application', className)}
      styleType='borderless'
      {...rest}
    />
  );
};

export default HeaderApplicationButton;
