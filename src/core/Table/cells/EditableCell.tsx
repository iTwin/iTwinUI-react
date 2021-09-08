/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CellRendererProps } from 'react-table';

export type EditableCellProps<
  T extends Record<string, unknown>
> = CellRendererProps<T> & {
  /**
   * Callback function when cell is edited. It is called only when `onBlur` event is fired.
   * @example
   * const onCellEdit = React.useCallback(
   *  (columnId: string, value: string, rowData: T) => {
   *    setData((oldData) => {
   *      const newData = [...oldData];
   *      const index = oldData.indexOf(rowData);
   *      const newObject = { ...newData[index] };
   *      newObject[columnId] = value;
   *      newData[index] = newObject;
   *      return newData;
   *    });
   *  },
   *  [],
   * );
   */
  onCellEdit: (columnId: string, value: string, rowData: T) => void;
} & React.ComponentPropsWithoutRef<'div'>;

/**
 * Editable cell.
 * It should be passed to `cellRenderer`.
 * @example
 * {
 *   Header: 'Name',
 *   accessor: 'name',
 *   cellRenderer: (props) => <EditableCell {...props} onCellEdit={onCellEditHandler} />,
 * }
 */
export const EditableCell = <T extends Record<string, unknown>>(
  props: EditableCellProps<T>,
) => {
  const {
    cellElementProps,
    cellProps,
    onCellEdit,
    children,
    onInput,
    onBlur,
    ...rest
  } = props;

  const [value, setValue] = React.useState(cellProps.value);
  const [isDirty, setIsDirty] = React.useState(false);

  return (
    <div
      {...cellElementProps}
      contentEditable
      suppressContentEditableWarning
      onInput={(e) => {
        setValue(
          // Removes new line symbols
          (e.target as HTMLElement).innerText.replace(/(\r\n|\n|\r)/gm, ''),
        );
        setIsDirty(true);
        onInput?.(e);
      }}
      onBlur={(e) => {
        if (isDirty) {
          onCellEdit(cellProps.column.id, value, cellProps.row.original);
        }
        onBlur?.(e);
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default EditableCell;
