/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import '@itwin/itwinui-css/css/table.css';
import { useTheme } from '../../utils/hooks/useTheme';
import { TableFilterProps } from './types';
import { CommonProps } from '../../utils/props';

export type BaseFilterProps<
  T extends Record<string, unknown>
> = TableFilterProps<T> & {
  /**
   * Filter body. `setFilter` and `clearFilter` should be used for `FilterButtonBar`.
   */
  children: (
    setFilter: (filterValue: unknown | undefined) => void,
    clearFilter: () => void,
  ) => JSX.Element;
} & Omit<CommonProps, 'title'>;

/**
 * Filter wrapper that should be used when creating custom filters.
 * It provides `setFilter` and `clearFilter` functions.
 * @example
 * <BaseFilter {...rest} column={column}>
 *   {(setFilter, clearFilter) => (
 *     <>
 *       <Input
 *         value={text}
 *         onChange={(e) => setText(e.target.value)}
 *       />
 *       <FilterButtonBar
 *         setFilter={() => setFilter(text)}
 *         clearFilter={clearFilter}
 *       />
 *     </>
 *   )}
 * </BaseFilter>
 */
export const BaseFilter = <T extends Record<string, unknown>>(
  props: BaseFilterProps<T>,
) => {
  const { column, children, close, className, style } = props;

  useTheme();

  const setFilter = React.useCallback(
    (filterValue: unknown | undefined) => {
      column.setFilter(filterValue);
      close();
    },
    [close, column],
  );

  const clearFilter = React.useCallback(() => {
    column.setFilter(undefined);
    close();
  }, [close, column]);

  return (
    <div className={cx('iui-column-filter', className)} style={style}>
      {children(setFilter, clearFilter)}
    </div>
  );
};
