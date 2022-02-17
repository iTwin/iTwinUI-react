/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { ColumnInstance, HeaderProps, Hooks, TableInstance } from 'react-table';
import { Checkbox } from '../..';
import SvgColumnManager from '@itwin/itwinui-icons-react/cjs/icons/ColumnManager';
import { DropdownButton } from '../../Buttons';

export const COLUMN_MANAGER_ID = 'iui-table-column-manager';

export const useColumnVisibility = <T extends Record<string, unknown>>(
  isManageable: boolean,
) => (hooks: Hooks<T>) => {
  hooks.useInstance.push(useInstance.bind({}, isManageable));
  // const menuItems = (close: () => void) => [
  //   <MenuItem key={1}>Item #1</MenuItem>,
  //   <MenuItem key={2}>Item #2</MenuItem>,
  // ];

  // const inputGroup = (close: () => void) => [
  //   <InputGroup displayStyle='default' key={1}>
  //     <Checkbox checked />
  //     <Checkbox checked label='Football' />
  //     <Checkbox checked label='Hockey' />
  //   </InputGroup>,
  // ];

  // const headerCheckBoxes = (close: () => void) =>
  //   hooks.allColumns.map((column) => (
  //     <Checkbox checked label={column.name} key={1} />
  //   ));

  // const checkBoxes = (close: () => void) => [
  //   <Checkbox checked key={1} />,
  //   <Checkbox checked label='Football' key={2} />,
  //   <Checkbox checked label='Hockey' key={3} />,
  // ];

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
      Header: ({ columns }: HeaderProps<T>) => {
        const headerCheckBoxes = (close: () => void) =>
          columns[0].columns
            ? columns[0].columns.map((column) => (
                <Checkbox checked label={column.Header} key={column.id} />
              ))
            : columns.map((column) => (
                <Checkbox
                  checked
                  label={column.Header?.toString}
                  key={column.id}
                />
              ));
        return (
          <DropdownButton menuItems={headerCheckBoxes} styleType='borderless'>
            <SvgColumnManager className='iui-button-icon' aria-hidden />
          </DropdownButton>
        );
      },
    },
  ]);
};

const useInstance = <T extends Record<string, unknown>>(
  isManageable: boolean,
  instance: TableInstance<T>,
) => {
  // const defaultGetToggleHiddenProps = (isManageable: boolean | undefined) => (
  //   props: TableKeyedProps,
  //   {
  //     instance,
  //     header,
  //     nextHeader,
  //   }: {
  //     instance: TableInstance;
  //     header: HeaderGroup;
  //     nextHeader: HeaderGroup;
  //   },
  // ) => {
  //   if (!isManageable) {
  //     return props;
  //   }
  //   return [
  //     props,
  //     {
  //       onChange: (e: React.ChangeEvent) => {
  //         header.column.toggleHidden(!e.target);
  //       },
  //       style: {
  //         cursor: 'pointer',
  //       },
  //       checked: column.isVisible,
  //       title: 'Toggle Column Visible',
  //     },
  //   ]
  // };
  // {isManageable && (
  //   <div>
  //     <button
  //       className='iui-button iui-borderless'
  //       aria-label='Modify columns'
  //       type='button'
  //     >
  //       <SvgColumnManager
  //         className='iui-button-icon'
  //         aria-hidden
  //       />
  //     </button>
  //   </div>
  // )}
  // return (
  //   <DropdownButton
  //     type='button'
  //     menuItems={menuItems}
  //     styleType='borderless'
  //   >
  //     <IconButton styleType='borderless'>
  //       <SvgColumnManager className='iui-button-icon' aria-hidden />
  //     </IconButton>
  //   </DropdownButton>
  // );
};
