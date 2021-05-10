/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import '@itwin/itwinui-css/css/table.css';
import Popover from '../../../utils/Popover';
import { useTheme } from '../../../utils/hooks/useTheme';
import {
  ColumnInstance,
  FieldType,
  FilterType,
  HeaderGroup,
} from 'react-table';

export interface TableFilterValue<T extends Record<string, unknown>> {
  id: string;
  value: unknown;
  fieldType: FieldType;
  filterType: FilterType<T>;
}

export type TableFilterProps<T extends Record<string, unknown>> = {
  column: HeaderGroup<T>;
  setFilter: (filterValue: TableFilterValue<T> | undefined) => void;
  clearFilter: () => void;
};

export type FilterWrapperProps<T extends Record<string, unknown>> = {
  column: HeaderGroup<T>;
  allColumns: ColumnInstance<T>[];
  children: JSX.Element;
  filterBody: React.ReactNode;
  onShow: () => void;
  onHide: () => void;
};

export const FilterWrapper = <T extends Record<string, unknown>>(
  props: FilterWrapperProps<T>,
) => {
  const { column, children, filterBody, onShow, onHide, allColumns } = props;

  useTheme();

  const [isVisible, setIsVisible] = React.useState(false);
  const close = React.useCallback(() => setIsVisible(false), []);

  const setFilter = React.useCallback(
    (filterValue: TableFilterValue<T> | undefined) => {
      column.setFilter(filterValue);
      close();
    },
    [close, column],
  );

  const clearFilter = React.useCallback(() => {
    column.setFilter(undefined);
    close();
  }, [close, column]);

  const placement = React.useMemo(() => {
    const columnIndex = allColumns.findIndex((c) => c.id === column.id);
    const columnsCount = allColumns.length;
    if (columnIndex === 0) {
      return 'bottom-start';
    }
    if (columnIndex === columnsCount - 1) {
      return 'bottom-end';
    }
    return 'bottom';
  }, [allColumns, column.id]);

  return (
    <Popover
      content={
        <div className='iui-column-filter'>
          {React.isValidElement(filterBody) &&
            React.cloneElement(filterBody, { setFilter, clearFilter })}
        </div>
      }
      placement={placement}
      visible={isVisible}
      onClickOutside={close}
      onShow={onShow}
      onHide={onHide}
    >
      {React.cloneElement(children, {
        onClick: () => setIsVisible((v) => !v),
      })}
    </Popover>
  );
};
