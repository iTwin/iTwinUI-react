/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Cell, CellProps, TableInstance } from 'react-table';
import cx from 'classnames';
import { getCellStyle } from './utils';
import EditableCell, { OnCellEditCallbackParams } from './EditableCell';
import SubRowExpander from './SubRowExpander';
import { SELECTION_CELL_ID } from './hooks';

export type TableCellProps<T extends Record<string, unknown>> = {
  cell: Cell<T>;
  cellIndex: number;
  onCellEdit?: (cellEditParams: OnCellEditCallbackParams<T>) => void;
  isRowDisabled: boolean;
  tableHasSubRows: boolean;
  tableInstance: TableInstance<T>;
  expanderCell?: (cellProps: CellProps<T>) => React.ReactNode;
};

const TableCell = <T extends Record<string, unknown>>(
  props: TableCellProps<T>,
) => {
  const {
    cell,
    cellIndex,
    onCellEdit,
    isRowDisabled,
    tableHasSubRows,
    tableInstance,
    expanderCell,
  } = props;

  const hasSubRowExpander =
    cellIndex ===
    cell.row.cells.findIndex((c) => c.column.id !== SELECTION_CELL_ID);

  const getSubRowStyle = (): React.CSSProperties | undefined => {
    if (!tableHasSubRows || !hasSubRowExpander) {
      return undefined;
    }
    // If it doesn't have sub-rows then shift by another level to align with expandable rows on the same depth
    // 16 = initial_cell_padding, 35 = 27 + 8 = expander_width + margin
    return {
      paddingLeft: 16 + (cell.row.depth + (cell.row.canExpand ? 0 : 1)) * 35,
    };
  };

  const cellProps = cell.getCellProps({
    className: cx('iui-cell', cell.column.cellClassName),
    style: {
      ...getCellStyle(cell.column),
      ...getSubRowStyle(),
    },
  });

  const cellContent = (
    <>
      {tableHasSubRows && hasSubRowExpander && cell.row.canExpand && (
        <SubRowExpander
          cell={cell}
          isDisabled={isRowDisabled}
          tableInstance={tableInstance}
          expanderCell={expanderCell}
        />
      )}
      {cell.render('Cell')}
    </>
  );
  return (
    <>
      {isRowDisabled ||
      !cell.column.isCellEditable?.(cell.row.original) ||
      !onCellEdit ? (
        <div {...cellProps}>{cellContent}</div>
      ) : (
        <EditableCell cell={cell} cellProps={cellProps} onCellEdit={onCellEdit}>
          {cellContent}
        </EditableCell>
      )}
    </>
  );
};

export default TableCell;
