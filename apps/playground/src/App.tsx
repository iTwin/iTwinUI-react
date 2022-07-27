/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Button, Slider } from '@itwin/itwinui-react';

// TODO: Revert this file back

const App = () => {
  // return <Button>Hello world</Button>;

  return (
    <div>
      <Slider values={[50]} />
      <div style={{ height: '1000px', width: 'fit-content' }}>
        {/* <Slider values={[10]} min={20} max={40} orientation='vertical' /> */}
        {/* <Slider values={[60]} min={20} max={40} orientation='vertical' />, */}
        {/* <Slider values={[50]} orientation='horizontal' /> */}
        <Slider
          values={[50]}
          orientation='vertical'
          // tickLabels={<span className='custom-tick-mark'>Custom</span>}
        />
      </div>
    </div>
  );
};

export default App;
