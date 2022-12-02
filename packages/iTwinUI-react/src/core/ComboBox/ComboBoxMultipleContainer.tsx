/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import SelectTagContainer from '../Select/SelectTagContainer';

type ComboBoxMultipleContainerProps = {
  selectedItems?: JSX.Element[];
};

export const ComboBoxMultipleContainer = React.forwardRef(
  (
    { selectedItems = [] }: ComboBoxMultipleContainerProps,
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    return <SelectTagContainer ref={ref} tags={selectedItems} />;
  },
);

ComboBoxMultipleContainer.displayName = 'ComboBoxMultipleContainer';
