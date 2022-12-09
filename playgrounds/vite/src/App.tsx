import { Button, Table } from '@itwin/itwinui-react';
import { useState } from 'react';
import { useColumns } from './useColumns';
import { useData } from './useData';

const App = () => {
  const [customColumns, setCustomColumns] = useState<boolean>(true);

  const columns = useColumns(customColumns);
  const data = useData(10);

  // console.log(
  //   'passed columns',
  //   columns.map((c) => c.id),
  // );

  return (
    <>
      <Button onClick={() => setCustomColumns((cur) => !cur)}>
        Toggle columns
      </Button>
      <pre>
        {/* {JSON.stringify({passedColumns: columns.[0].columns.map(c => c.id)})} */}
      </pre>
      <Table
        columns={columns}
        data={data}
        enableColumnReordering={true}
        emptyTableContent='No data.'
      />
    </>
  );
};

export default App;
