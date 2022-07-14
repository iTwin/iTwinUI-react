/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Button, Slider } from '@itwin/itwinui-react';
import { Orientation } from '@itwin/itwinui-react/esm/core/Slider/Slider'; // TODO: This is pretty sure not recommended by the style guide. Reconfirm.
import './App.css';

const App = () => {
  return (
    <div>
      {/* <Button>Hello world</Button> */}
      <h1>Trial React for Vertical Slider</h1>
      <div className='slider-container'>
        <Slider values={[50]} orientation={Orientation.vertical} />
      </div>
    </div>
  );
};

export default App;
