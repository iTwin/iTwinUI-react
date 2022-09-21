/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { SelectOption } from '../Select';
import SelectTagContainer from '../Select/SelectTagContainer';

type ComboBoxMultipleContainerProps<T> = {
  selectedItems?: SelectOption<T>[];
  selectedItemsRenderer?: (options: SelectOption<T>[]) => JSX.Element;
  tagRenderer: (item: SelectOption<T>) => JSX.Element;
  mRef: React.ForwardedRef<HTMLDivElement>;
};

export const ComboBoxMultipleContainer = <T,>({
  selectedItems,
  selectedItemsRenderer,
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
      {selectedItems && selectedItemsRenderer && (
        <div
          className='iui-select-tag-container'
          ref={mRef}
          style={{
            maxWidth: `70%`,
            inset: 'unset',
            paddingLeft: '12px',
            height: 'fit-content',
            right: 'unset',
          }}
        >
          {selectedItemsRenderer(selectedItems)}
        </div>
      )}
      {selectedItems && !selectedItemsRenderer && (
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
