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
    { selectedItems }: ComboBoxMultipleContainerProps<T>,
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    const tagRenderer = React.useCallback((item: SelectOption<T>) => {
      console.log(item.label);
      return <SelectTag key={item.label} label={item.label} />;
    }, []);

    const selectedItemsElements = React.useMemo(() => {
      if (!selectedItems) {
        return [];
      }

      return selectedItems.map((item) => tagRenderer(item));
    }, [selectedItems, tagRenderer]);

    return (
      <>
        {selectedItems && (
          <SelectTagContainer
            style={{
              maxWidth: `70%`,
              right: 'unset',
            }}
            ref={ref}
            tags={selectedItemsElements}
          />
        )}
      </>
    );
  },
);

ComboBoxMultipleContainer.displayName = 'ComboBoxMultipleContainer';
