/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { ColumnInstance, HeaderProps, Hooks } from 'react-table';
import { Checkbox } from '../..';
import SvgColumnManager from '@itwin/itwinui-icons-react/cjs/icons/ColumnManager';
import { DropdownButton } from '../../Buttons';
import { isString } from 'creevey';

export const COLUMN_MANAGER_ID = 'iui-table-column-manager';

export const useColumnVisibility = <T extends Record<string, unknown>>(
  isManageable: boolean,
) => (hooks: Hooks<T>) => {
  if (!isManageable) {
    return;
  }

  hooks.allColumns.push((columns: ColumnInstance<T>[]) => [
    ...columns,
    {
      id: COLUMN_MANAGER_ID,
      disableResizing: true,
      disableGroupBy: true,
      minWidth: 48,
      width: 48,
      maxWidth: 48,
      columnClassName: 'iui-slot',
      cellClassName: 'iui-slot',
      Header: ({ allColumns, column, headers }: HeaderProps<T>) => {
        const headerCheckBoxes = (close: () => void) =>
          allColumns.map((column) =>
            isString(column.Header) ? (
              <Checkbox
                {...column.getToggleHiddenProps}
                label={column.Header}
                key={column.id}
              />
            ) : (
              <></>
            ),
          );
        return (
          <DropdownButton menuItems={headerCheckBoxes} styleType='borderless'>
            <SvgColumnManager className='iui-button-icon' aria-hidden />
          </DropdownButton>
        );
      },
    },
  ]);
};
