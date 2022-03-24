/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import SvgChevronRight from '@itwin/itwinui-icons-react/cjs/icons/ChevronRight';
import { CellProps, Row } from 'react-table';
import { IconButton } from '../../Buttons';

export const EXPANDER_CELL_ID = 'iui-table-expander';

export const ExpanderColumn = <T extends Record<string, unknown>>(
  subComponent?: (row: Row<T>) => React.ReactNode,
  isDisabled?: (rowData: T) => boolean,
) => {
  return {
    id: EXPANDER_CELL_ID,
    disableResizing: true,
    disableGroupBy: true,
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
  };
};
