/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import {
  DateRangeFilter,
  DateRangeTranslation,
} from './DateRangeFilter/DateRangeFilter';
import { FilterButtonBarTranslation } from './FilterButtonBar';
import { TextFilter } from './TextFilter/TextFilter';
import { TableFilterProps } from './types';

export const tableFilters = {
  /**
   * Basic filter with a single input field.
   */
  TextFilter: (translatedLabels?: FilterButtonBarTranslation) => <
    T extends Record<string, unknown>
  >(
    props: TableFilterProps<T>,
  ) => <TextFilter {...props} translatedLabels={translatedLabels} />,
  /**
   * Date range filter.
   */
  DateRangeFilter: (
    formatDate: (date: Date) => string,
    parseInput: (text: string) => Date,
    placeholder?: string,
    translatedLabels?: DateRangeTranslation & FilterButtonBarTranslation,
  ) => <T extends Record<string, unknown>>(props: TableFilterProps<T>) => (
    <DateRangeFilter
      {...props}
      translatedLabels={translatedLabels}
      formatDate={formatDate}
      parseInput={parseInput}
      placeholder={placeholder}
    />
  ),
};
