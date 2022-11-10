/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
// const { exec } = require('node:child_process');
const exec = require('child_process').exec;
const fs = require('fs');

// import * as fs from 'fs';
// const exec = ).exec;

const getAllFilesAndFoldersJSON = (filesList) => {
  const folders = {};

  filesList = filesList.map((file) => file.substring(2));
  for (const file of filesList) {
    // console.log(`file: ${file}`);
  }
};

const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      // if (err) {
      //   console.error(err);
      //   rejec
      // }
      // console.log('FILE CONTENTS:');
      // console.log(data);
      resolve(data);
    });
  });
};

const readFileGetLines = async (fileName) => {
  const fileContents = await readFile(fileName);
  console.log(fileContents.split('\n').length);
  return fileContents.split('\n');
};

const getRuleMatches = async (fileName) => {
  const matches = [];

  const rulesFileContents = await readFile(`${__dirname}/rules.json`);
  const rules = JSON.parse(rulesFileContents);
  const fileLines = await readFileGetLines(fileName);

  for (const [lineNumber, line] of fileLines.entries()) {
    for (const rule of rules) {
      if (line.indexOf(rule.replace) !== -1) {
        matches.push({
          file_name: fileName,
          line_number: lineNumber + 1,
          line: line,
          replace: rule.replace,
          with: rule.with,
        });
      }
    }
  }

  console.log(matches);
  return matches;
};

const getAllFilesAndFolders = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const command = `cd ../migration && for f in $(find . -type f -a -not -path './.git/*'); do
      if ! $(git check-ignore -q $f); then echo $f; fi
  done`;
      // const command = `ls`;
      exec(command, (error, stdout, stderr) => {
        // console.log(`123${stdout}`, `2${error}`, `3${stderr}`);
        console.log(stdout.split('\n').length);
        resolve(stdout);
      });
    }, 5000);
  });
};

// export { getAllFilesAndFolders };

const filesString = `./public/robots.txt
./public/logo512.png
./public/logo192.png
./public/index.html
./public/favicon.ico
./public/manifest.json
./.gitignore
./src/logo.svg
./src/App.scss
./src/App.tsx
./src/index.tsx
./src/index.css
./src/App.test.tsx
./src/react-app-env.d.ts
./src/components/FileTree/FileTree.tsx
./src/components/FilesSection/FilesSection.tsx
./src/components/FilesSection/FilesSection.scss
./src/components/FilesSection/components/FileCard/FileCard.tsx
./src/components/FilesSection/components/FileCard/components/LineChange/LineChange.scss
./src/components/FilesSection/components/FileCard/components/LineChange/LineChange.tsx
./src/components/FilesSection/components/FileCard/FileCard.scss
./src/setupTests.ts
./src/App.css
./src/reportWebVitals.ts
./README.md
./package.json
./tsconfig.json`;

// getAllFilesAndFoldersJSON(filesString.split('\n'));
// readFile(`${__dirname}/src/App.css`);
// readFileGetLines(
//   `/home/rohan/Documents/iTwinUI-react/apps/migration/src/App.css`,
// );
// console.log(__filename, __dirname);

getRuleMatches(
  `/home/rohan/Documents/iTwinUI-react/apps/migration/src/App.css`,
);

exports.getRuleMatches = getRuleMatches;
