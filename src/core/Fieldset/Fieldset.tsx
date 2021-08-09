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
 * <Fieldset legend='General Settings' {...args}>
 *  <LabeledSelect
 *    label='Resolution'
 *    options={[
 *      { value: 1, label: '1200 x 1000' },
 *      { value: 2, label: '1600 x 1200' },
 *      { value: 3, label: '2560 x 1600' },
 *    ]}
 *    displayStyle='inline'
 *    value={value}
 *    onChange={(value) => setValue(value)}
 *    placeholder='Select'
 *  />
 *  <InputGroup label='Color Theme' displayStyle='inline'>
 *    <Radio name='choice' value='option1' label={'Light'} />
 *    <Radio name='choice' value='option2' label={'Dark'} />
 *    <Radio name='choice' value='option3' label={'Match device'} />
 *  </InputGroup>
 *  <InputGroup>
 *    <ToggleSwitch label='Share usage statistics' />
 *    <ToggleSwitch label='Share crash logs' />
 *    <ToggleSwitch disabled label='Advanced settings' />
 *  </InputGroup>
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
