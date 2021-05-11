/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import SvgFilterHollow from '@itwin/itwinui-icons-react/cjs/icons/FilterHollow';
import SvgFilter from '@itwin/itwinui-icons-react/cjs/icons/Filter';
import React from 'react';
import { HeaderGroup } from 'react-table';
import '@itwin/itwinui-css/css/table.css';
import { useTheme } from '../../utils/hooks/useTheme';
import { Popover } from '../../utils/Popover';

export type FilterIconProps<T extends Record<string, unknown>> = {
  column: HeaderGroup<T>;
};

/**
 * Handles showing filter icon and opening filter component.
 */
export const FilterIcon = <T extends Record<string, unknown>>(
  props: FilterIconProps<T>,
) => {
  const { column } = props;

  useTheme();

  const [isVisible, setIsVisible] = React.useState(false);
  const close = React.useCallback(() => setIsVisible(false), []);

  return (
    <>
      {column.canFilter && column.Filter && (
        <Popover
          content={column.render('Filter', { close })}
          placement='bottom'
          visible={isVisible}
          onClickOutside={close}
        >
          <div
            className='iui-filter'
            style={{
              visibility:
                isVisible || column.filterValue ? 'visible' : undefined,
            }}
            onClick={() => setIsVisible((v) => !v)}
          >
            {column.filterValue ? (
              <SvgFilter style={{ fill: '#008BE1' }} />
            ) : (
              <SvgFilterHollow />
            )}
          </div>
        </Popover>
      )}
    </>
  );
};
