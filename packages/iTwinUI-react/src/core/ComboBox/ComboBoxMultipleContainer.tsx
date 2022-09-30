/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { SelectOption } from '../Select';
import SelectTag from '../Select/SelectTag';
import SelectTagContainer from '../Select/SelectTagContainer';

type ComboBoxMultipleContainerProps<T> = {
  selectedItems?: SelectOption<T>[];
};

export const ComboBoxMultipleContainer = React.forwardRef(
  <T,>(
    { selectedItems = [] }: ComboBoxMultipleContainerProps<T>,
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    return (
      <SelectTagContainer
        style={{
          maxWidth: `70%`,
          right: 'unset',
        }}
        ref={ref}
        tags={selectedItems.map((item) => (
          <SelectTag key={item.label} label={item.label} />
        ))}
      />
    );
  },
);

ComboBoxMultipleContainer.displayName = 'ComboBoxMultipleContainer';
