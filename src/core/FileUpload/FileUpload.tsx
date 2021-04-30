/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useTheme } from '../utils/hooks/useTheme';
import { CommonProps } from '../utils/props';
import { useMergedRefs } from '../utils/hooks/useMergedRefs';
import '@itwin/itwinui-css/css/file-upload.css';

export type FileUploadProps = {
  /**
   * Content shown over `children` when file is being dragged onto the component.
   */
  content: React.ReactNode;
  /**
   * Callback fired when files are dropped onto the component.
   */
  onFileDropped: (files: FileList) => void;
  /**
   * Component to wrap `FileUpload` around.
   * `content` will be shown if `children` is not provided.
   */
  children?: React.ReactNode;
} & CommonProps;

/**
 * File upload component to be used as a wrapper or standalone.
 * Provides support for dragging and dropping multiple files.
 * @example
 * <FileUpload content='Drop file here' onFileDropped={console.log}><Textarea /></FileUpload>
 * <FileUpload
 *   content={<><SvgUpload className='iui-icon' /> Upload file</>}
 *   onFileDropped={console.log}
 * />
 */
export const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (props, ref) => {
    const { content, children, onFileDropped, className, ...rest } = props;
    useTheme();

    const [isDragActive, setIsDragActive] = React.useState(false);
    const fileUploadRef = React.useRef<HTMLDivElement>(null);
    const refs = useMergedRefs(fileUploadRef, ref);

    const onDragEnterHandler = React.useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
    }, []);

    const onDragOverHandler = React.useCallback(
      (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();

        // only set active if a valid file is dragged over
        if (!isDragActive && e.dataTransfer?.items?.[0]) {
          setIsDragActive(true);
        }
      },
      [isDragActive],
    );

    const onDragLeaveHandler = React.useCallback(
      (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();

        // only set inactive if secondary target is outside the component
        if (
          isDragActive &&
          !fileUploadRef.current?.contains(e.relatedTarget as Node)
        ) {
          setIsDragActive(false);
        }
      },
      [isDragActive],
    );

    const onDropHandler = React.useCallback(
      (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (isDragActive) {
          setIsDragActive(false);
        }
        onFileDropped(e.dataTransfer?.files);
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
        onDragEnter={onDragEnterHandler}
        onDragOver={onDragOverHandler}
        onDragLeave={onDragLeaveHandler}
        onDrop={onDropHandler}
        ref={refs}
        {...rest}
      >
        <div className='iui-content'>{content}</div>
        {children}
      </div>
    );
  },
);

export default FileUpload;
