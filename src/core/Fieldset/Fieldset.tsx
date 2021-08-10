/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';

import cx from 'classnames';
import '@itwin/itwinui-css/css/fieldset.css';

export type FieldsetProps = {
  /**
   * The caption or title for the fieldset
   */
  legend?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'fieldset'>;

/**
 * Basic fieldset component to group different components together
 * @example
 * <Fieldset legend='Settings'>
 *   <Input />
 *   <InputGroup>
 *     <ToggleSwitch />
 *     <ToggleSwitch />
 *   </InputGroup>
 * </Fieldset>
 */
export const Fieldset = (props: FieldsetProps) => {
  const { children, className, disabled, legend, ...rest } = props;

  useTheme();

  return (
    <fieldset
      className={cx('iui-fieldset', className)}
      disabled={disabled}
      {...rest}
    >
      {legend && <legend>{legend}</legend>}

      {disabled
        ? React.Children.map(children, (child) =>
            React.cloneElement(child as JSX.Element, {
              disabled: true,
            }),
          )
        : children}
    </fieldset>
  );
};

export default Fieldset;
