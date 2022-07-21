/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

import { ComboBox } from '@itwin/itwinui-react';
import { countriesList } from './helpers';

export default () => {
  const options = React.useMemo(() => countriesList, []);
  const [value, setValue] = React.useState('');

  return (
    <ComboBox
      options={options}
      inputProps={{ placeholder: 'Select a country' }}
      onChange={setValue}
      value={value}
    />
  );
};
