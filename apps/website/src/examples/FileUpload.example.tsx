/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { FileUpload, FileUploadTemplate } from '@itwin/itwinui-react';

export default () => {
  const [files, setFiles] = React.useState<Array<File>>([]);

  return (
    <FileUpload
      onFileDropped={(files) => {
        setFiles(Array.from(files));
      }}
    >
      <FileUploadTemplate onChange={(e) => setFiles(Array.from(e.target.files || []))}>
        {files.map((f) => f.name).join(', ')}
      </FileUploadTemplate>
    </FileUpload>
  );
};
