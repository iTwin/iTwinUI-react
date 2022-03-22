/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { ColumnInstance, HeaderProps, Hooks } from 'react-table';
import { Checkbox } from '../..';
import SvgColumnManager from '@itwin/itwinui-icons-react/cjs/icons/ColumnManager';
import { DropdownMenu } from '../../DropdownMenu';
import { IconButton } from '../../Buttons/IconButton';
import { MenuItem } from '../../Menu';

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
      minWidth: 48,
      width: 48,
      maxWidth: 48,
      columnClassName: 'iui-slot',
      cellClassName: 'iui-slot',
      Header: ({ allColumns }: HeaderProps<T>) => {
        const headerCheckBoxes = () =>
          allColumns
            .filter(({ id }) => !id.includes('iui-table'))
            .map((column) => {
              const { onChange, checked } = column.getToggleHiddenProps();

              console.log(column.getResizerProps());
              return (
                <MenuItem
                  key={column.id}
                  {...column.getToggleHiddenProps()}
                  icon={
                    <Checkbox
                      id={`iui-column-${column.id}`}
                      checked={checked}
                      disabled={column.disableToggleVisibility}
                    />
                  }
                  onClick={() => onChange({ target: { checked: !checked } })}
                  disabled={column.disableToggleVisibility}
                >
                  <label htmlFor={`iui-column-${column.id}`}>
                    {column.Header}
                  </label>
                </MenuItem>
              );
            });
        return (
          <DropdownMenu menuItems={headerCheckBoxes}>
            <IconButton styleType='borderless'>
              <SvgColumnManager />
            </IconButton>
          </DropdownMenu>
        );
      },
    },
  ]);
};
