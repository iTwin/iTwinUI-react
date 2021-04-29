/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useTheme } from '../utils/hooks/useTheme';
import { CommonProps } from '../utils/props';
import '@itwin/itwinui-css/css/file-upload.css';

export type FileUploadProps = {
  /**
   * Content shown when file is being dragged onto the component.
   */
  content: React.ReactNode;
  /**
   * Callback fired when a file is dropped onto the component.
   */
  onFileDropped: (file: File) => void;
  /**
   * Component to wrap `FileUpload` around.
   * `content` will be shown if `children` is not provided.
   */
  children?: React.ReactNode;
} & CommonProps;

/**
 * File upload component to be used as a wrapper or standlone.
 * Provides support for dragging files.
 * @example
 * <FileUpload content={<span>Drop file to upload</span>}><Textarea /></FileUpload>
 */
export const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (props, ref) => {
    const { content, children, onFileDropped, className, ...rest } = props;
    useTheme();

    const [isDragActive, setIsDragActive] = React.useState(false);
    const dragTargetRef = React.useRef<EventTarget>();

    const _onDragEnter = React.useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
    }, []);

    const _onDragOver = React.useCallback(
      (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (!isDragActive && e.dataTransfer?.items?.[0]) {
          dragTargetRef.current = e.target;
          setIsDragActive(true);
        }
      },
      [isDragActive],
    );

    const _onDragLeave = React.useCallback(
      (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (isDragActive && dragTargetRef.current !== e.target) {
          dragTargetRef.current = undefined;
          setIsDragActive(false);
        }
      },
      [isDragActive],
    );

    const _onDrop = React.useCallback(
      (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (isDragActive) {
          setIsDragActive(false);
        }

        dragTargetRef.current = undefined;
        onFileDropped(e.dataTransfer?.files?.[0]);
      },
      [isDragActive, onFileDropped],
    );

    return (
      <div
        className={cx(
          'iui-file-upload',
          { 'iui-drag': isDragActive },
          className,
        )}
        onDragEnter={_onDragEnter}
        onDragOver={_onDragOver}
        onDragLeave={_onDragLeave}
        onDrop={_onDrop}
        ref={ref}
        {...rest}
      >
        <div className='iui-content'>{content}</div>
        {children}
      </div>
    );
  },
);

export default FileUpload;
