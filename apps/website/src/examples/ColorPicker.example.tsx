/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { useState } from 'react';

import {
  ColorPicker,
  ColorBuilder,
  ColorInputPanel,
  ColorPalette,
  ColorValue,
} from '@itwin/itwinui-react';

export default () => {
  const [selectedColor, setSelectedColor] = useState(() =>
    ColorValue.create({ h: 0, s: 100, l: 50 })
  );

  return (
    <ColorPicker
      selectedColor={selectedColor}
      onChangeComplete={(color) => setSelectedColor(color)}
    >
      <ColorBuilder />
      <ColorInputPanel defaultColorFormat={'hex'} />
      <ColorPalette
        label='Saved Colors'
        colors={[
          { h: 0, s: 100, l: 50 },
          { r: 255, g: 98, b: 0 },
          '#fec134',
          '#5A6973',
          { h: 95, s: 83, v: 72 },
          { h: 250, s: 100, l: 59 },
        ]}
      />
    </ColorPicker>
  );
};
