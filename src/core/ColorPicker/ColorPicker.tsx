/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';

import 'D:/itwinUI/iTwinUI/lib/css/color-picker.css';

export type ColorPickerProps = {
  // /**
  //  * Colors to show in color palette
  //  */
  // colors?: React.ReactNodeArray;
  /**
   * Content inside the tab panel.
   */
  children?: React.ReactNode;
};

export const ColorPicker = (props: ColorPickerProps) => {
  const { children, ...rest } = props;

  useTheme();

  return (
    <div className='iui-color-picker' {...rest}>
      {children}
    </div>
  );
};

export default ColorPicker;
