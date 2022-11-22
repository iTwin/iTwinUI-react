/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import {
  ActionType,
  ColumnInstance,
  Row,
  TableInstance,
  TableState,
} from 'react-table';
import { TableFilterValue } from '../filters';

export const onFilterHandler = <T extends Record<string, unknown>>(
  newState: TableState<T>,
  action: ActionType,
  previousState: TableState<T>,
  instance?: TableInstance<T>,
  onFilter?: (
    filters: TableFilterValue<T>[],
    state: TableState<T>,
    filteredData?: Row<T>[],
  ) => void,
) => {
  const filterRows = (rows: Row<T>[], depth = 0) => {
    if (instance?.manualFilters || !newState.filters.length) {
      return rows;
    }

    // Filters top level and nested rows
    let filteredRows = rows;

    filteredRows = newState.filters.reduce(
      (filteredSoFar, { id: columnId, value: filterValue }) => {
        // Find the filters column
        const column = instance?.allColumns.find(
          (d) => d.id === columnId,
        ) as ColumnInstance<T>;

        if (!column) {
          return filteredSoFar;
        }

        if (depth === 0) {
          column.preFilteredRows = filteredSoFar;
        }

        //TODO: Figure out how to properly get the filter method
        // const filterMethod = getFilterMethod(
        //   column.filter,
        //   instance?.filterTypes,
        // );

        // if (!filterMethod) {
        //   console.warn(
        //     `Could not find a valid 'column.filter' for column with the ID: ${column.id}.`,
        //   );
        //   return filteredSoFar;
        // }

        // Pass the rows, id, filterValue and column to the filterMethod
        // to get the filtered rows back

        // TOOO: Figure out how to get the filterMethod function working properly
        // column.filteredRows = filterMethod(
        //   filteredSoFar,
        //   [columnId],
        //   filterValue,
        // );

        console.log(filterValue);
        return column.filteredRows;
      },
      rows,
    );

    // Apply the filter to any subRows
    // We technically could do this recursively in the above loop,
    // but that would severely hinder the API for the user, since they
    // would be required to do that recursion in some scenarios
    filteredRows.forEach((row) => {
      if (!row.subRows) {
        return;
      }

      row.subRows =
        row.subRows && row.subRows.length > 0
          ? filterRows(row.subRows, depth + 1)
          : row.subRows;
    });

    return filteredRows;
  };

  const previousFilter = previousState.filters.find(
    (f) => f.id === action.columnId,
  );
  if (previousFilter?.value != action.filterValue) {
    const filters = newState.filters.map((f) => {
      const column = instance?.allColumns.find((c) => c.id === f.id);
      return {
        id: f.id,
        value: f.value,
        fieldType: column?.fieldType ?? 'text',
        filterType: column?.filter ?? 'text',
      };
    }) as TableFilterValue<T>[];

    const filteredRows = instance && filterRows(instance.rows);
    console.log('instance.rows');
    console.log(instance?.rows);
    console.log('filteredRows');
    console.log(filteredRows);
    onFilter?.(filters, newState, filteredRows);
  }
};

//TODO: Get these function working with correct type matching

// export function getFilterMethod(filter: string | FilterType<object> | undefined, filterTypes: FilterTypes<object> | undefined) {
//   return isFunction(filter) || filterTypes?[filter]
// }

// export function isFunction(a: string | FilterType<object> | undefined) {
//   if (typeof a === 'function') {
//     return a;
//   }
//   return undefined;
// }
