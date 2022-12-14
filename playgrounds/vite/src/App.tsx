import { Button, Checkbox, Table } from '@itwin/itwinui-react';
import { useRef, useState } from 'react';
import { useColumns } from './useColumns';
import { useData } from './useData';
import { Column, CellProps } from 'react-table';
import { TableStoryDataType } from './useData';

const App = () => {
  const [customColumns, setCustomColumns] = useState<boolean>(true);
  const [isSelected, setIsSelected] = useState<boolean>(true);

  // const columns = useColumns(customColumns);
  const columns = customColumns
    ? [
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
      ]
    : [
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
            return (
              <>{props.row.original.startDate.toLocaleDateString('en-US')}</>
            );
          },
        },
        {
          id: 'endDate',
          Header: 'End date',
          accessor: 'endDate',
          Cell: (props: CellProps<TableStoryDataType>) => {
            return (
              <>{props.row.original.endDate.toLocaleDateString('en-US')}</>
            );
          },
        },
      ];
  const data = useData(10);

  const lastColumns: React.MutableRefObject<any> = useRef(null);
  lastColumns.current = columns;

  // console.log(
  //   'passed columns',
  //   columns.map((c) => c.id),
  // );

  console.log('RERENDERED', columns === lastColumns.current);
  return (
    <>
      <Button onClick={() => setCustomColumns((cur) => !cur)}>
        Toggle columns
      </Button>
      <Checkbox
        checked={isSelected}
        onChange={(e) => setIsSelected(e.target.checked)}
      />
      <pre>
        {/* {JSON.stringify({passedColumns: columns.[0].columns.map(c => c.id)})} */}
      </pre>
      <Table
        columns={columns as Column<any>[]}
        data={data}
        enableColumnReordering={true}
        emptyTableContent='No data.'
      />
    </>
  );
};

export default App;
