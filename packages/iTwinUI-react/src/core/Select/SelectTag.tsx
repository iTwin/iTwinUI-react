/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';
import SvgCloseSmall from '@itwin/itwinui-icons-react/cjs/icons/CloseSmall';
import { useTheme, CommonProps } from '../utils';
import '@itwin/itwinui-css/css/inputs.css';

export type SelectTagProps = {
  /**
   * Callback function that handles click on close icon.
   * Close icon is shown only when this function is passed.
   */
  onRemove?: () => void;
  /**
   * Text inside the tag.
   */
  children: React.ReactNode;
} & CommonProps;

/**
 * Tag for showing selected value in `Select`.
 * @private
 */
export const SelectTag = (props: SelectTagProps) => {
  const { className, children, onRemove, ...rest } = props;
  useTheme();

  return (
    <span
      className={cx('iui-select-tag', className)}
      onClick={(e) => e.stopPropagation()}
      {...rest}
    >
      <span className='iui-select-tag-label'>{children}</span>
      {onRemove && (
        <button
          onClick={onRemove}
          aria-label='Delete tag'
          className='iui-select-tag-button'
          tabIndex={-1}
        >
          <SvgCloseSmall className='iui-select-tag-button-icon' aria-hidden />
        </button>
      )}
    </span>
  );
};

export default SelectTag;
