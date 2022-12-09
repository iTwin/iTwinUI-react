import React, { useMemo } from 'react';
import { Column, CellProps } from 'react-table';
import { TableStoryDataType } from './useData';

const columnGroupA = [
  {
    id: 'index',
    Header: '#',
    accessor: 'index',
  },
  {
    id: 'name',
    Header: 'Name',
    accessor: 'name',
  },
  {
    id: 'description',
    Header: 'Description',
    accessor: 'description',
    fieldType: 'text',
  },
];

const columnGroupB = [
  {
    id: 'id',
    Header: 'ID',
    accessor: 'id',
  },
  {
    id: 'name',
    Header: 'Name',
    accessor: 'name',
  },
  {
    id: 'startDate',
    Header: 'Start date',
    accessor: 'startDate',
    Cell: (props: CellProps<TableStoryDataType>) => {
      return <>{props.row.original.startDate.toLocaleDateString('en-US')}</>;
    },
  },
  {
    id: 'endDate',
    Header: 'End date',
    accessor: 'endDate',
    Cell: (props: CellProps<TableStoryDataType>) => {
      return <>{props.row.original.endDate.toLocaleDateString('en-US')}</>;
    },
  },
];

export function useColumns(
  customColumns: boolean,
): Column<TableStoryDataType>[] {
  const columns = useMemo((): Column<TableStoryDataType>[] => {
    function selectedColumns() {
      if (customColumns) {
        return columnGroupA;
      } else {
        return columnGroupB;
      }
    }

    return selectedColumns() as Column<TableStoryDataType>[];

    // return [
    //   {
    //     Header: 'Table',
    //     columns: selectedColumns() as Column<TableStoryDataType>[],
    //   },
    // ];
  }, [customColumns]);

  return columns;
}
