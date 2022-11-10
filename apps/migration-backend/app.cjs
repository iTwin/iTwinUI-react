/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
// /*---------------------------------------------------------------------------------------------
//  * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
//  * See LICENSE.md in the project root for license terms and full copyright notice.
//  *--------------------------------------------------------------------------------------------*/
// const http = require('http');
// const fs = require('fs');
// const port = 5000;

// const server = http.createServer((req, res) => {
//   fs.readFile('to_read.txt', (err, data) => {
//     if (err) {
//       res.write('ERROR', err);
//     } else {
//       res.write(`Worked! ${data}`);
//     }
//     res.end();
//   });
// });

// server.listen(port, (err) => {
//   if (err) {
//     console.log('ERROR STARTING SERVER', err);
//   } else {
//     console.log('Server started!');
//   }
// });

// import Express from 'express';
// import { getAllFilesAndFolders } from './logic.cjs';

const express = require('express');
const { getLineMatches, getFileMatches } = require('./logic.cjs');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/files', async (req, res) => {
  // res.send(await getAllFilesAndFolders());
});

app.get('/matches', async (req, res) => {
  res.send(
    // `${await getRuleMatches(
    //   `/home/rohan/Documents/iTwinUI-react/apps/migration/src/App.css`,
    // )}`,
    JSON.stringify(
      await getLineMatches(
        `/home/rohan/Documents/iTwinUI-react/apps/migration/src/App.css`,
      ),
    ),
  );
});

app.get('/all_matches', async (req, res) => {
  res.send(
    // `${await getRuleMatches(
    //   `/home/rohan/Documents/iTwinUI-react/apps/migration/src/App.css`,
    // )}`,
    JSON.stringify(
      await getFileMatches(
        `/home/rohan/Documents/iTwinUI-react/apps/migration/public/robots.txt
/home/rohan/Documents/iTwinUI-react/apps/migration/public/logo512.png
/home/rohan/Documents/iTwinUI-react/apps/migration/public/logo192.png
/home/rohan/Documents/iTwinUI-react/apps/migration/public/index.html
/home/rohan/Documents/iTwinUI-react/apps/migration/public/favicon.ico
/home/rohan/Documents/iTwinUI-react/apps/migration/public/manifest.json
/home/rohan/Documents/iTwinUI-react/apps/migration/.gitignore
/home/rohan/Documents/iTwinUI-react/apps/migration/src/logo.svg
/home/rohan/Documents/iTwinUI-react/apps/migration/src/App.scss
/home/rohan/Documents/iTwinUI-react/apps/migration/src/App.tsx
/home/rohan/Documents/iTwinUI-react/apps/migration/src/index.tsx
/home/rohan/Documents/iTwinUI-react/apps/migration/src/index.css
/home/rohan/Documents/iTwinUI-react/apps/migration/src/App.test.tsx
/home/rohan/Documents/iTwinUI-react/apps/migration/src/react-app-env.d.ts
/home/rohan/Documents/iTwinUI-react/apps/migration/src/components/FileTree/FileTree.tsx
/home/rohan/Documents/iTwinUI-react/apps/migration/src/components/FilesSection/FilesSection.tsx
/home/rohan/Documents/iTwinUI-react/apps/migration/src/components/FilesSection/FilesSection.scss
/home/rohan/Documents/iTwinUI-react/apps/migration/src/components/FilesSection/components/FileCard/FileCard.tsx
/home/rohan/Documents/iTwinUI-react/apps/migration/src/components/FilesSection/components/FileCard/components/LineChange/LineChange.scss
/home/rohan/Documents/iTwinUI-react/apps/migration/src/components/FilesSection/components/FileCard/components/LineChange/LineChange.tsx
/home/rohan/Documents/iTwinUI-react/apps/migration/src/components/FilesSection/components/FileCard/FileCard.scss
/home/rohan/Documents/iTwinUI-react/apps/migration/src/setupTests.ts
/home/rohan/Documents/iTwinUI-react/apps/migration/src/App.css
/home/rohan/Documents/iTwinUI-react/apps/migration/src/reportWebVitals.ts
/home/rohan/Documents/iTwinUI-react/apps/migration/README.md
/home/rohan/Documents/iTwinUI-react/apps/migration/package.json
/home/rohan/Documents/iTwinUI-react/apps/migration/tsconfig.json`.split('\n'),
      ),
    ),
  );
});

app.listen(5000, () => console.log('Running on port 5000'));
