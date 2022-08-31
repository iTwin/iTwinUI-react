/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { ActionColumn, Button, Table } from '@itwin/itwinui-react';
import React from 'react';

const mockTableData = Array.from(new Array(1000).keys()).map((k) => {
  return {
    id: `opa${k}`,
  };
});

const App = () => {
  const columns = React.useMemo(
    () => [
      {
        ['Header']: 'TableData',
        columns: [
          {
            ...ActionColumn({ columnManager: true }),
          },
          {
            ['Header']: 'id',
            id: 'id',
            accessor: 'id',
            width: 100,
            disableSortBy: true,
          },
        ],
      },
    ],
    [],
  );

  const tableData = mockTableData;
  const tableRef = React.useRef<HTMLDivElement>(null);

  const show = () => {
    const divElement = tableRef.current;
    divElement?.setAttribute('style', 'display: block;');
  };

  return (
    <div>
      <Button onClick={show}>"Show"</Button>
      <div ref={tableRef} className='parent'>
        <Table
          columns={columns}
          data={tableData}
          emptyTableContent='No data.'
          isLoading={false}
          enableVirtualization={true}
          density='extra-condensed'
          style={{ height: '300px' }}
        />
      </div>
    </div>
  );
};

export default App;
