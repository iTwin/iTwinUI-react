/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
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
  const [file, setFile] = useState<File | undefined>(undefined);

  return (
    <FileUpload
      content={'Drop file to upload'}
      {...args}
      onFileDropped={(f) => {
        setFile(f);
        action(`${f.name} (${f.size / 1000} KB) uploaded`)();
      }}
    >
      <Textarea placeholder={'Drag a file here'} rows={1} value={file?.name} />
    </FileUpload>
  );
};

Basic.args = {
  content: 'Drop file to upload',
};

export const WithoutChildren: Story<FileUploadProps> = ({
  children,
  ...rest
}) => {
  const [file, setFile] = useState<File | undefined>(undefined);

  return (
    <FileUpload
      content={file?.name ?? children ?? 'Drop file to upload'}
      {...rest}
      onFileDropped={(f) => {
        setFile(f);
        action(`${f.name} (${f.size / 1000} KB) uploaded`)();
      }}
    />
  );
};
