/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import {
  Button,
  Slider,
  RadioTileGroup,
  RadioTile,
} from '@itwin/itwinui-react';
import { Orientation } from '@itwin/itwinui-react/esm/core/Slider/Slider'; // TODO: This is pretty sure not recommended by the style guide. Reconfirm.
import { useState } from 'react';
import './App.css';

const App = () => {
  const [orientation, setOrientation] = useState(Orientation.horizontal);

  return (
    <div className='App'>
      {/* <Button>Hello world</Button> */}
      <h1 className='title'>Trial React for Vertical Slider</h1>
      <section id='demo-default'>
        <RadioTileGroup>
          <RadioTile
            label='Horizontal'
            name='map'
            value='Google Maps'
            onClick={() => setOrientation(Orientation.horizontal)}
            defaultChecked
          />
          <RadioTile
            label='Vertical'
            name='map'
            value='Bentley Blue'
            onClick={() => setOrientation(Orientation.vertical)}
          />
        </RadioTileGroup>
        <div
          className={`slider-container ${
            orientation == Orientation.vertical
              ? 'slider-container-vertical'
              : ''
          }`}
        >
          <Slider values={[50]} orientation={orientation} />
        </div>
      </section>
    </div>
  );
};

export default App;
