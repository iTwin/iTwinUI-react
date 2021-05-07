/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import '@itwin/itwinui-css/css/table.css';
import Popover from '../../../utils/Popover';
import { useTheme } from '../../../utils/hooks/useTheme';
import { FieldType, FilterType, HeaderGroup } from 'react-table';

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

export type BaseFilterProps<T extends Record<string, unknown>> = {
  column: HeaderGroup<T>;
  children: JSX.Element;
  filterBody: React.ReactNode;
  onShow: () => void;
  onHide: () => void;
};

export const BaseFilter = <T extends Record<string, unknown>>(
  props: BaseFilterProps<T>,
) => {
  const { column, children, filterBody, onShow, onHide } = props;

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

  return (
    <Popover
      content={
        <div className='iui-column-filter'>
          {React.isValidElement(filterBody) &&
            React.cloneElement(filterBody, { setFilter, clearFilter })}
        </div>
      }
      placement='bottom'
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
