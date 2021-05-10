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
