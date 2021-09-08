/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CellRendererProps } from 'react-table';

export type DefaultCellProps<
  T extends Record<string, unknown>
> = CellRendererProps<T> & React.ComponentPropsWithoutRef<'div'>;

/**
 * Default cell.
 * It should be passed to `cellRenderer`.
 * In most cases you shouldn't need to pass this component.
 * @example
 * {
 *   Header: 'Name',
 *   accessor: 'name',
 *   cellRenderer: (props) => <DefaultCell {...props} />,
 * }
 */
export const DefaultCell = <T extends Record<string, unknown>>(
  props: CellRendererProps<T>,
) => {
  const { cellElementProps, children, ...rest } = props;
  return (
    <div {...cellElementProps} {...rest}>
      {children}
    </div>
  );
};

export default DefaultCell;
