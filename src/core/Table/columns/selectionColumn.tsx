/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CellProps, HeaderProps } from 'react-table';
import { Checkbox } from '../../Checkbox';

export const SELECTION_CELL_ID = 'iui-table-checkbox-selector';

export const SelectionColumn = <T extends Record<string, unknown>>(
  /** Function that returns whether row checkbox should be disabled. */
  isDisabled?: (rowData: T) => boolean,
) => {
  return {
    id: SELECTION_CELL_ID,
    disableResizing: true,
    disableGroupBy: true,
    disableReordering: true,
    minWidth: 48,
    width: 48,
    maxWidth: 48,
    columnClassName: 'iui-slot',
    cellClassName: 'iui-slot',
    Header: ({
      getToggleAllRowsSelectedProps,
      rows,
      initialRows,
      state,
    }: HeaderProps<T>) => {
      const disabled = rows.every((row) => isDisabled?.(row.original));
      const checked = initialRows.every(
        (row) => state.selectedRowIds[row.id] || isDisabled?.(row.original),
      );
      return (
        <Checkbox
          {...getToggleAllRowsSelectedProps()}
          checked={checked && !disabled}
          indeterminate={
            !checked && Object.keys(state.selectedRowIds).length > 0
          }
          disabled={disabled}
        />
      );
    },
    Cell: ({ row }: CellProps<T>) => (
      <Checkbox
        {...row.getToggleRowSelectedProps()}
        disabled={isDisabled?.(row.original)}
        onClick={(e) => e.stopPropagation()} // Prevents triggering on row click
      />
    ),
  };
};
