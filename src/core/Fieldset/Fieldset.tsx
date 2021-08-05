/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';

import cx from 'classnames';
import '@itwin/itwinui-css/css/fieldset.css';

export type FieldsetProps = {
  legend?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'fieldset'>;

/**
 * Fieldset component
 * @example
 * Example usages go here!
 */
export const Fieldset = (props: FieldsetProps) => {
  const { children, className, disabled, legend, ...rest } = props;
  const childrenArray = React.Children.toArray(children);

  useTheme();

  return (
    <fieldset
      className={cx('iui-fieldset', className)}
      disabled={disabled}
      {...rest}
    >
      {legend && <legend>{legend}</legend>}

      {children && disabled
        ? childrenArray.map((child) =>
            React.cloneElement(child as JSX.Element, {
              disabled: true,
            }),
          )
        : children}
    </fieldset>
  );
};

export default Fieldset;
