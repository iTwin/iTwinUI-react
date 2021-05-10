/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { FieldType, FilterType, HeaderGroup } from 'react-table';

export interface TableFilterValue<T extends Record<string, unknown>> {
  /**
   * Id of the column.
   */
  id: string;
  /**
   * Value of the filter.
   */
  value: unknown;
  /**
   * Type of the column field.
   */
  fieldType: FieldType;
  /**
   * Type of the filter.
   */
  filterType: FilterType<T>;
}

export type TableFilterProps<T extends Record<string, unknown>> = {
  /**
   * Data of column on which filter is opened. It is provided by the table it self.
   */
  column: HeaderGroup<T>;
  /**
   * Callback function to set the filter. It is provided by the table it self.
   */
  setFilter: (filterValue: TableFilterValue<T> | undefined) => void;
  /**
   * Callback function to clear the filter. It is provided by the table it self.
   */
  clearFilter: () => void;
};
