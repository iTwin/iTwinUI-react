import React from 'react';
import { CellRendererProps } from 'react-table';

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
  const { cellElementProps, children } = props;
  return <div {...cellElementProps}>{children}</div>;
};

export default DefaultCell;
