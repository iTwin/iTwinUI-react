/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { IconButton } from '@itwin/itwinui-react';
import _icons from '@itwin/itwinui-icons-react';
const { SvgAdd } = _icons;

export default () => {
  return (
    <div>
      <IconButton onClick={() => {}}>
        <SvgAdd />
      </IconButton>
    </div>
  );
};
