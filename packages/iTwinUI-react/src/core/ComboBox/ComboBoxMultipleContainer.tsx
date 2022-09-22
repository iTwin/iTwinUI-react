/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { SelectOption } from '../Select';
import SelectTagContainer from '../Select/SelectTagContainer';

type ComboBoxMultipleContainerProps<T> = {
  selectedItems?: SelectOption<T>[];
  tagRenderer: (item: SelectOption<T>) => JSX.Element;
  mRef: React.ForwardedRef<HTMLDivElement>;
};

export const ComboBoxMultipleContainer = <T,>({
  selectedItems,
  tagRenderer,
  mRef,
}: ComboBoxMultipleContainerProps<T>) => {
  const selectedItemsElements = React.useMemo(() => {
    if (!selectedItems) {
      return [];
    }

    return selectedItems.map((item) => tagRenderer(item));
  }, [selectedItems, tagRenderer]);

  return (
    <>
      {selectedItems && (
        // target from combobox css
        <SelectTagContainer
          style={{
            maxWidth: `70%`,
            right: 'unset',
          }}
          ref={mRef}
          tags={selectedItemsElements}
        />
      )}
    </>
  );
};

ComboBoxMultipleContainer.displayName = 'ComboBoxMultipleContainer';
