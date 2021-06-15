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
   * Whether the file input accepts multiple files.
   * Passed to the `multiple` attribute of native file input.
   * @deprecated Use `inputProps` instead
   */
  acceptMultiple?: boolean;
  /**
   * Localized version of primary clickable label. Gets styled like a hyperlink.
   * @default 'Choose a file'
   */
  label?: React.ReactNode;
  /**
   * Localized version of the secondary text shown below the label.
   * @default 'or drag & drop it here.'
   */
  subtitle?: React.ReactNode;
  /**
   * Optional children appended to the template.
   */
  children?: React.ReactNode;
  /**
   * Attributes applied on the native input element.
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

/**
 * Default template to be used with the `FileUpload` wrapper component.
 * Contains a hidden input with styled labels (customizable).
 * @example
 * <FileUploadTemplate onChange={(e) => console.log(e.target.files)} />
 */
export const FileUploadTemplate = (props: FileUploadTemplateProps) => {
  const {
    onChange,
    acceptMultiple,
    label = 'Choose a file',
    subtitle = 'or drag & drop it here.',
    children,
    inputProps,
  } = props;
  useTheme();

  return (
    <>
      <SvgUpload className='iui-icon' aria-hidden />
      <div className='iui-template-text'>
        <label className='iui-anchor'>
          <input
            className='iui-browse-input'
            type='file'
            onChange={onChange}
            multiple={acceptMultiple}
            {...inputProps}
          />
          {label}
        </label>
        <div>{subtitle}</div>
        {children}
      </div>
    </>
  );
};

export default FileUploadTemplate;
