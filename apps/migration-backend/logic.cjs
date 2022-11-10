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
      if (err) {
        console.error(err);
        // rejec
      }
      // console.log('FILE CONTENTS:');
      // console.log(data);
      resolve(data);
    });
  });
};

const readFileGetLines = async (fileName) => {
  const fileContents = await readFile(fileName);
  // console.log(fileContents.split('\n').length);

  const fileExtension = fileName.split('.').pop();
  // if (fileExtension === 'jpg') {
  //   console.log('jpg', fileContents);
  // }

  return fileContents.split('\n');
};

const getLineMatches = async (fileName) => {
  const matches = [];

  const rulesFileContents = await readFile(`${__dirname}/rules.json`);
  const rules = JSON.parse(rulesFileContents);
  console.log(`Number of rules: ${rules.length}`);
  const fileLines = await readFileGetLines(fileName);

  for (const [lineNumber, line] of fileLines.entries()) {
    for (const rule of rules) {
      if (line.indexOf(rule.replace) !== -1) {
        matches.push({
          line_number: lineNumber + 1,
          line: line,
          replace: rule.replace,
          with: rule.with,
          type: rule.type,
          description: rule.description,
        });
      }
    }
  }

  const matchObject = {
    fileName: fileName,
    matchLines: matches,
  };
  // if (matches.length > 0) {
  //   console.log(matchObject);
  // }
  return [matchObject, fileLines.length];
};

const getFileMatches = async (fileNames) => {
  const fileMatches = [];
  const fileExtensions = [];

  let numFilesScanned = 0;
  let numLinesScanned = 0;

  for (const fileName of fileNames) {
    const fileExtension = fileName.split('.').pop();
    if (!fileExtensions.includes(fileExtension)) {
      fileExtensions.push(fileExtension);
    }

    if (fileExtension === '        ') {
      console.log('failing file', fileName);
      continue;
    }

    if (['png', 'jpg', 'gif', 'PNG'].includes(fileExtension)) {
      continue;
    }

    // if (
    //   ![
    //     'tsx',
    //     'ts',
    //     'js',
    //     'html',
    //     'md',
    //     'css',
    //     'scss',
    //     'json',
    //     'svg',
    //     'txt',
    //     `mdx`,
    //     `nvmrc`,
    //     `yml`,
    //     `snap`,
    //     'gitignore',
    //     `xlsx`,
    //     `png`,
    //   ].includes(fileExtension)
    // ) {
    // if (
    //   ![
    //     'gitignore',
    //     'json',
    //     'md',
    //     'xlsx',
    //     'txt',
    //     'html',
    //     'png',
    //     'jpg',
    //     'webm',
    //     'svg',
    //     'gif',
    //     'PNG',
    //     'ico',
    //     'mdx',
    //     'ts',
    //     'npmrc',
    //     'js',
    //     'eslintrc',
    //     'scss',
    //     'tsx',
    //     'liquid',
    //     'snap',
    //     'nvmrc',
    //     'babelrc',
    //     'prettierrc',
    //     'yml',
    //     'ps1',
    //     'bicep',
    //     'xml',
    //     'gitmodules',
    //     'gitattributes',
    //     'dgn',
    //   ].includes(fileExtension)
    // ) {
    //   // if (['png', 'xlsx', 'gif', 'jpg', 'PNG', `ico`, ].includes(fileExtension)) {
    //   continue;
    // }

    const [fileMatch, numLines] = await getLineMatches(fileName);
    numFilesScanned++;
    numLinesScanned += numLines;

    // Push only if at least one match is found in the file
    if (fileMatch.matchLines.length > 0) {
      fileMatches.push(fileMatch);
    }
  }

  // console.log(fileMatches);
  console.log(
    `getFileMatches request complete (${numFilesScanned} files and ${numLinesScanned} lines scanned)`,
    // fileExtensions,
  );

  return fileMatches;
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

getLineMatches(
  `/home/rohan/Documents/iTwinUI-react/apps/migration/src/App.css`,
);

exports.getLineMatches = getLineMatches;
exports.getFileMatches = getFileMatches;
