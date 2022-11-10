/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { FileTree } from './components/FileTree/FileTree';

function App() {
  return (
    <div className='App'>
      <FileTree />
    </div>
  );
}

export default App;
