/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as child from 'child_process';
// const exec = ).exec;

const getAllFilesAndFolders = () => {
  return new Promise((resolve, reject) => {
    // const command = `( git status --short| grep '^?' | cut -d\  -f2- && git ls-files ) | sort -u`;
    setTimeout(() => {
      const command = `ls`;
      child.exec(command, (error, stdout, stderr) => {
        console.log(stdout);
        resolve(stdout);
      });
    }, 5000);
  });
};

export { getAllFilesAndFolders };
