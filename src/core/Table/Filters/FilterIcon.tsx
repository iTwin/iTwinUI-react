/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import SvgFilterHollow from '@itwin/itwinui-icons-react/cjs/icons/FilterHollow';
import SvgFilter from '@itwin/itwinui-icons-react/cjs/icons/Filter';
import React from 'react';
import { ColumnInstance, HeaderGroup } from 'react-table';
import '@itwin/itwinui-css/css/table.css';
import { useTheme } from '../../utils/hooks/useTheme';
import { BaseFilter } from './BaseFilter/BaseFilter';

export type FilterIconProps<T extends Record<string, unknown>> = {
  column: HeaderGroup<T>;
  allColumns: ColumnInstance<T>[];
};

export const FilterIcon = <T extends Record<string, unknown>>(
  props: FilterIconProps<T>,
) => {
  const { column, allColumns } = props;

  useTheme();

  const [isVisible, setIsVisible] = React.useState(false);
  const onShow = React.useCallback(() => setIsVisible(true), []);
  const onHide = React.useCallback(() => setIsVisible(false), []);

  return (
    <>
      {column.canFilter && column.Filter && (
        <BaseFilter
          column={column}
          allColumns={allColumns}
          onHide={onHide}
          onShow={onShow}
          filterBody={column.render('Filter')}
        >
          <div
            className='iui-filter'
            style={{
              visibility:
                isVisible || column.filterValue ? 'visible' : undefined,
            }}
          >
            {column.filterValue ? <SvgFilter /> : <SvgFilterHollow />}
          </div>
        </BaseFilter>
      )}
    </>
  );
};
