/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import {
  Fieldset,
  InputGroup,
  LabeledSelect,
  Radio,
  ToggleSwitch,
  useTheme,
} from '@itwin/itwinui-react';

export const FieldsetDemo = () => {
  const [value, setValue] = React.useState<number | undefined>(undefined);
  useTheme('dark');

  return (
    <Fieldset
      legend='General Settings'
      style={{ display: 'flex', flexDirection: 'column', gap: 11 }}
    >
      <LabeledSelect
        label='Resolution'
        options={[
          { value: 1, label: '1200 x 1000' },
          { value: 2, label: '1600 x 1200' },
          { value: 3, label: '2560 x 1600' },
        ]}
        displayStyle='inline'
        value={value}
        onChange={(value) => setValue(value)}
        placeholder='Select'
      />

      <InputGroup label='Color Theme' displayStyle='inline'>
        <Radio name='choice' value='option1' label={'Light'} />
        <Radio name='choice' value='option2' label={'Dark'} />
        <Radio name='choice' value='option3' label={'Match device'} />
      </InputGroup>

      <InputGroup>
        <ToggleSwitch label='Share usage statistics' />
        <ToggleSwitch label='Share crash logs' />
        <ToggleSwitch disabled label='Advanced settings' />
      </InputGroup>
    </Fieldset>
  );
};

export default FieldsetDemo;