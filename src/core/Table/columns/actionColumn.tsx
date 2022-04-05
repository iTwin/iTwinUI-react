/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { HeaderProps } from 'react-table';
import { Checkbox } from '../../Checkbox';
import SvgColumnManager from '@itwin/itwinui-icons-react/cjs/icons/ColumnManager';
import { DropdownMenu } from '../../DropdownMenu';
import { IconButton } from '../../Buttons/IconButton';
import { MenuItem } from '../../Menu';
import { TABLE_RESIZE_START_ACTION } from '../actionHandlers';
import { EXPANDER_CELL_ID, SELECTION_CELL_ID } from '../hooks';

const ACTION_CELL_ID = 'iui-table-action';

export const ActionColumn = <T extends Record<string, unknown>>({
  hasColumnManager = true,
}) => {
  return {
    id: ACTION_CELL_ID,
    disableResizing: true,
    disableGroupBy: true,
    minWidth: 48,
    width: 48,
    maxWidth: 48,
    columnClassName: 'iui-slot',
    cellClassName: 'iui-slot',
    disableReordering: true,
    Header: ({ allColumns, dispatch }: HeaderProps<T>) => {
      const [isOpen, setIsOpen] = React.useState(false);
      const defaultColumnIds = [
        SELECTION_CELL_ID,
        EXPANDER_CELL_ID,
        ACTION_CELL_ID,
      ];

      if (!hasColumnManager) {
        return null;
      } else {
        const headerCheckBoxes = () =>
          allColumns
            //Filters out any default columns made such as selection and expansion
            .filter(({ id }) => !defaultColumnIds.includes(id))
            .map((column) => {
              const { onChange, checked } = column.getToggleHiddenProps();
              return (
                <MenuItem
                  key={column.id}
                  icon={
                    <Checkbox
                      checked={checked}
                      disabled={column.disableToggleVisibility}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => {
                        onChange(e);
                        dispatch({ type: TABLE_RESIZE_START_ACTION });
                      }}
                      aria-labelledby={`iui-column-${column.id}`}
                    />
                  }
                  onClick={() => {
                    column.toggleHidden(checked);
                    dispatch({ type: TABLE_RESIZE_START_ACTION });
                  }}
                  disabled={column.disableToggleVisibility}
                >
                  <div id={`iui-column-${column.id}`}>
                    {column.render('Header')}
                  </div>
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
      }
    },
  };
};
