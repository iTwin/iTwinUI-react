/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import '@itwin/itwinui-css/css/table.css';
import { useTheme } from '../../utils/hooks/useTheme';
import { TableFilterProps } from './types';

export type BaseFilterProps<
  T extends Record<string, unknown>
> = TableFilterProps<T> & {
  children: (
    setFilter: (filterValue: unknown | undefined) => void,
    clearFilter: () => void,
  ) => JSX.Element;
};

export const BaseFilter = <T extends Record<string, unknown>>(
  props: BaseFilterProps<T>,
) => {
  const { column, children, close } = props;

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
    <div className='iui-column-filter'>{children(setFilter, clearFilter)}</div>
  );
};
