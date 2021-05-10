/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import '@itwin/itwinui-css/css/table.css';
import { useTheme } from '../../../utils/hooks/useTheme';
import { Input } from '../../../Input';
import { FilterButtonBar } from '../FilterButtonBar';
import { TableFilterProps } from '../types';

export const TextFilter = <T extends Record<string, unknown>>(
  props: TableFilterProps<T>,
) => {
  const { column, setFilter, clearFilter } = props;

  useTheme();

  const [text, setText] = React.useState(column.filterValue ?? '');

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      setFilter(text);
    }
  };

  return (
    <>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        setFocus
        onKeyDown={onKeyDown}
      />
      <FilterButtonBar
        setFilter={() => setFilter(text)}
        clearFilter={clearFilter}
      />
    </>
  );
};
