/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import SvgChevronRight from '@itwin/itwinui-icons-react/cjs/icons/ChevronRight';
import { CellProps, CellRendererProps, Row } from 'react-table';
import { IconButton } from '../../Buttons';
import { DefaultCell } from '../cells';

export const EXPANDER_CELL_ID = 'iui-table-expander';

/**
 * Expander column that adds sub-content expander column to the Table.
 * It is recommended to use it only in the first column or after selection column.
 */
export const ExpanderColumn = <T extends Record<string, unknown>>(
  /** Function that returns expanded content. If row doesn't have it, then should return `false`/`null`. */
  subComponent?: (row: Row<T>) => React.ReactNode,
  /** Function that returns whether expander is disabled */
  isDisabled?: (rowData: T) => boolean,
) => {
  return {
    id: EXPANDER_CELL_ID,
    disableResizing: true,
    disableGroupBy: true,
    disableReordering: true,
    minWidth: 48,
    width: 48,
    maxWidth: 48,
    columnClassName: 'iui-slot',
    cellClassName: 'iui-slot',
    Cell: (props: CellProps<T>) => {
      const { row } = props;
      if (!subComponent?.(row)) {
        return null;
      } else {
        return (
          <IconButton
            className='iui-row-expander'
            styleType='borderless'
            size='small'
            onClick={(e) => {
              e.stopPropagation();
              row.toggleRowExpanded();
            }}
            disabled={isDisabled?.(props.row.original)}
          >
            {<SvgChevronRight />}
          </IconButton>
        );
      }
    },
    cellRenderer: (props: CellRendererProps<T>) => (
      <DefaultCell
        {...props}
        isDisabled={(rowData) => !!isDisabled?.(rowData)}
      />
    ),
  };
};
