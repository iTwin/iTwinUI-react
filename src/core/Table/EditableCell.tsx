import React from 'react';
import { Cell, TableCellProps } from 'react-table';

export type OnCellEditCallbackParams<T extends Record<string, unknown>> = {
  columnId: string;
  value: string;
  rowData: T;
};

export type EditableCellProps<T extends Record<string, unknown>> = {
  cell: Cell<T>;
  cellProps: TableCellProps;
  onCellEdit?: (cellEditParams: OnCellEditCallbackParams<T>) => void;
  children: React.ReactNode;
};

const EditableCell = <T extends Record<string, unknown>>(
  props: EditableCellProps<T>,
) => {
  const { cell, cellProps, onCellEdit, children } = props;

  const [value, setValue] = React.useState(cell.value);
  const [isDirty, setIsDirty] = React.useState(false);

  return (
    <div
      {...cellProps}
      contentEditable
      suppressContentEditableWarning
      onInput={(e) => {
        setValue(
          (e.target as HTMLElement).innerText.replace(/(\r\n|\n|\r)/gm, ''),
        );
        setIsDirty(true);
      }}
      onBlur={() =>
        isDirty &&
        onCellEdit?.({
          columnId: cell.column.id,
          value,
          rowData: cell.row.original,
        })
      }
    >
      {children}
    </div>
  );
};

export default EditableCell;
