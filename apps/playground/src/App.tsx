/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Button, Table, ActionColumn } from '@itwin/itwinui-react';
import './App.css';

const App = () => {
  const columns = [
    {
      Header: 'Table',
      columns: [
        {
          id: 'index',
          Header: '#',
          accessor: 'index',
          disableToggleVisibility: true,
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
        {
          id: 'id',
          Header: 'ID',
          accessor: 'id',
        },
        // {
        //   id: 'startDate',
        //   Header: 'Start date',
        //   accessor: 'startDate',
        //   Cell: (props: CellProps<TableStoryDataType>) => {
        //     return (
        //       <>{props.row.original.startDate.toLocaleDateString('en-US')}</>
        //     );
        //   },
        // },
        // {
        //   id: 'endDate',
        //   Header: 'End date',
        //   accessor: 'endDate',
        //   Cell: (props: CellProps<TableStoryDataType>) => {
        //     return (
        //       <>{props.row.original.endDate.toLocaleDateString('en-US')}</>
        //     );
        //   },
        // },
        // {
        //   id: 'endDate1',
        //   Header: 'End date1',
        //   accessor: 'endDate',
        //   Cell: (props: CellProps<TableStoryDataType>) => {
        //     return (
        //       <>{props.row.original.endDate.toLocaleDateString('en-US')}</>
        //     );
        //   },
        // },
        ActionColumn({
          columnManager: true,
          className: 'test-action-column',
          style: { maxHeight: '200px', overflow: 'scroll' },
        }),
      ],
    },
  ];

  const data = [
    {
      index: 1,
      name: 'Name1',
      description: 'Description1',
      id: '111',
      startDate: new Date('May 1, 2021'),
      endDate: new Date('Jun 1, 2021'),
    },
    {
      index: 2,
      name: 'Name2',
      description: 'Description2',
      id: '222',
      startDate: new Date('May 2, 2021'),
      endDate: new Date('Jun 2, 2021'),
    },
    {
      index: 3,
      name: 'Name3',
      description: 'Description3',
      id: '333',
      startDate: new Date('May 3, 2021'),
      endDate: new Date('Jun 3, 2021'),
    },
    {
      index: 4,
      name: 'Name4',
      description: 'Description4',
      id: '444',
      startDate: new Date('May 4, 2021'),
      endDate: new Date('Jun 4, 2021'),
    },
    {
      index: 5,
      name: 'Name5',
      description: 'Description5',
      id: '555',
      startDate: new Date('May 5, 2021'),
      endDate: new Date('Jun 5, 2021'),
    },
  ];

  return (
    <div>
      <Button>Hello world</Button>
      <Table columns={columns} data={data} emptyTableContent='No data.' />
    </div>
  );
};

export default App;
