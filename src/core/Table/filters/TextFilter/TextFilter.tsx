/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import '@itwin/itwinui-css/css/table.css';
import { useTheme } from '../../../utils/hooks/useTheme';
import { Input } from '../../../Input';
import {
  FilterButtonBar,
  FilterButtonBarTranslation,
} from '../FilterButtonBar';
import { BaseFilter } from '../BaseFilter';
import { TableFilterProps } from '../types';

export type TextFilterProps<
  T extends Record<string, unknown>
> = TableFilterProps<T> & {
  translatedLabels?: FilterButtonBarTranslation;
};

export const TextFilter = <T extends Record<string, unknown>>(
  props: TextFilterProps<T>,
) => {
  const { column, translatedLabels, ...rest } = props;

  useTheme();

  const [text, setText] = React.useState(column.filterValue ?? '');

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    setFilter: (filterValue: unknown | undefined) => void,
  ) => {
    if (event.key === 'Enter') {
      setFilter(text);
    }
  };

  return (
    <BaseFilter {...rest} column={column}>
      {(setFilter, clearFilter) => (
        <>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => onKeyDown(e, setFilter)}
            setFocus
          />
          <FilterButtonBar
            setFilter={() => setFilter(text)}
            clearFilter={clearFilter}
            translatedLabels={translatedLabels}
          />
        </>
      )}
    </BaseFilter>
  );
};
