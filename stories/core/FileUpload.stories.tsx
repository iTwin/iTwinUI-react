/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { SvgUpload } from '@itwin/itwinui-icons-react';
import { action } from '@storybook/addon-actions';
import { useState } from '@storybook/client-api';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { FileUpload, FileUploadProps, Textarea } from '../../src/core';

export default {
  component: FileUpload,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    onFileDropped: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  title: 'Core/FileUpload',
} as Meta<FileUploadProps>;

export const Basic: Story<FileUploadProps> = (args) => {
  const [files, setFiles] = useState<Array<File>>([]);

  return (
    <FileUpload
      content={'Drop file to upload'}
      {...args}
      onFileDropped={(files) => {
        setFiles(Array.from(files));
        action(`${files.length} files uploaded`)();
      }}
    >
      <Textarea
        placeholder={'Drag a file here'}
        rows={1}
        value={files.map((f) => f.name)}
      />
    </FileUpload>
  );
};

Basic.args = {
  content: 'Drop file to upload',
};

export const WithoutChildren: Story<FileUploadProps> = (args) => {
  const [files, setFiles] = useState<Array<File>>([]);

  return (
    <FileUpload
      content={
        <>
          <input
            className='iui-browse-input'
            type='file'
            id='file-input'
            onChange={(e) => setFiles(Array.from(e.target.files || []))}
            multiple
          />
          <SvgUpload className='iui-icon' />
          <label htmlFor='file-input' className='iui-anchor'>
            {files.map((f) => f.name).join() || 'Click or drag a file'}
          </label>
        </>
      }
      {...args}
      onFileDropped={(files) => {
        setFiles(Array.from(files));
        action(`${files.length} files uploaded`)();
      }}
    />
  );
};
