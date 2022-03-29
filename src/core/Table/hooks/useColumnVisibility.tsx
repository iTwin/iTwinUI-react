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
  hasColumnManager: boolean,
) => (hooks: Hooks<T>) => {
  if (!hasColumnManager) {
    return;
  }

  hooks.allColumns.push((columns: ColumnInstance<T>[]) => [
    ...columns,
    {
      id: COLUMN_MANAGER_ID,
      minWidth: 48,
      width: 48,
      maxWidth: 48,
      disableReordering: true,
      columnClassName: 'iui-slot',
      cellClassName: 'iui-slot',
      Header: ({ allColumns }: HeaderProps<T>) => {
        const [isOpen, setIsOpen] = React.useState(false);
        const headerCheckBoxes = () =>
          allColumns
            //Filters out any default columns made such as selection and expansion
            .filter(({ id }) => !id.includes('iui-table'))
            .map((column) => {
              const { onChange, checked } = column.getToggleHiddenProps();
              return (
                <MenuItem
                  key={column.id}
                  icon={
                    <Checkbox
                      id={`iui-column-${column.id}`}
                      checked={checked}
                      disabled={column.disableToggleVisibility}
                      onClick={(e) => e.stopPropagation()}
                      onChange={onChange}
                    />
                  }
                  onClick={() => column.toggleHidden(checked)}
                  disabled={column.disableToggleVisibility}
                >
                  {column.Header}
                </MenuItem>
              );
            });
        return (
          <DropdownMenu
            menuItems={headerCheckBoxes}
            onHide={() => setIsOpen(false)}
            onShow={() => setIsOpen(true)}
          >
            <IconButton styleType='borderless' isActive={isOpen}>
              <SvgColumnManager />
            </IconButton>
          </DropdownMenu>
        );
      },
    },
  ]);
};
