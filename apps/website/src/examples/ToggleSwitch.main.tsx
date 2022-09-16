/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { ToggleSwitch } from '@itwin/itwinui-react';
import _icons from '@itwin/itwinui-icons-react';
const { SvgCheckmark } = _icons;

export default () => {
  return (
    <div>
      <ToggleSwitch onChange={() => {}} label='Toggle feature No.1' icon={<SvgCheckmark />} />
    </div>
  );
};
