/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/file-upload.css';
import SvgUpload from '@itwin/itwinui-icons-react/cjs/icons/Upload';

export type FileUploadTemplateProps = {
  /**
   * Callback fired when a file is selected from the device.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Localized version of primary label. First line gets styled like a hyperlink.
   * @default 'Choose a file.\n Or drag & drop it here.'
   */
  label?: React.ReactNode;
  /**
   * Optional children appended to main label.
   */
  children?: React.ReactNode;
};

/**
 * Default template to be used with the `FileUpload` wrapper component.
 * Contains a hidden input with styled labels (customizable).
 * @example
 * <FileUploadTemplate onChange={(e) => console.log(e.target.files)} />
 */
export const FileUploadTemplate = (props: FileUploadTemplateProps) => {
  const { onChange, label, children } = props;
  useTheme();

  return (
    <>
      <input
        className='iui-browse-input'
        type='file'
        id='file-input'
        onChange={onChange}
        multiple
      />
      <SvgUpload className='iui-icon' />
      <label htmlFor='file-input' className='iui-anchor'>
        {label ?? (
          <>
            {'Choose a file.'}
            <br />
            {'Or drag & drop it here.'}
          </>
        )}
      </label>
      {children}
    </>
  );
};

export default FileUploadTemplate;
