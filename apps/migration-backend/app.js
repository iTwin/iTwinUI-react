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

import Express from 'express';
import { getAllFilesAndFolders } from './logic.js';

const app = Express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/files', async (req, res) => {
  res.send(await getAllFilesAndFolders());
});

app.listen(5000, () => console.log('Running on port 5000'));
