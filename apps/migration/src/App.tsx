/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import './App.scss';
import { FileTree } from './components/FileTree/FileTree';
import { FilesSection } from './components/FilesSection/FilesSection';

function App() {
  return (
    <div className='App'>
      <FileTree />
      <FilesSection />
    </div>
  );
}

export default App;