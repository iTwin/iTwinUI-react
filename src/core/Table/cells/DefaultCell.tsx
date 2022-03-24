/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CellRendererProps } from 'react-table';
import cx from 'classnames';

export type DefaultCellProps<T extends Record<string, unknown>> = {
  isDisabled?: (rowData: T) => boolean;
} & CellRendererProps<T> &
  React.ComponentPropsWithoutRef<'div'>;

/**
 * Default cell.
 * It should be passed to `cellRenderer`.
 * It can can be used to pass native HTML attributes to the cell container.
 * @example
 * {
 *   Header: 'Name',
 *   accessor: 'name',
 *   cellRenderer: (props) => <DefaultCell {...props} />,
 * }
 */
export const DefaultCell = <T extends Record<string, unknown>>(
  props: DefaultCellProps<T>,
) => {
  // Omitting `cellProps`
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    cellElementProps: {
      className: cellElementClassName,
      style: cellElementStyle,
      ...cellElementProps
    },
    children,
    cellProps,
    isDisabled: isDisabledFn,
    className,
    style,
    ...rest
  } = props;

  const isDisabled = isDisabledFn?.(cellProps.row.original);
  // Temporary until CSS is ready
  const disabledStyle = isDisabled
    ? {
        fontStyle: 'italic',
        cursor: 'not-allowed',
        color: 'var(--iui-text-color-muted)',
      }
    : {};

  return (
    <div
      {...cellElementProps}
      {...rest}
      className={cx(cellElementClassName, className, {
        'iui-disabled': isDisabled,
      })}
      style={{ ...disabledStyle, ...cellElementStyle, ...style }}
    >
      {children}
    </div>
  );
};

export default DefaultCell;
