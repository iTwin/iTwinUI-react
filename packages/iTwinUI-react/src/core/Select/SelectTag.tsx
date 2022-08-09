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
   */
  onCloseClick?: React.MouseEventHandler;
  /**
   * Callback function that handles kayboard click on close icon.
   */
  onCloseKeyDown?: React.KeyboardEventHandler;
  /**
   * Show close icon.
   */
  isRemovable?: boolean;
  /**
   * Text inside the tag.
   */
  label: string;
} & CommonProps;

/**
 * Tag for showing selected value in `Select`.
 * @private
 */
export const SelectTag = (props: SelectTagProps) => {
  const {
    className,
    label,
    isRemovable,
    onCloseClick,
    onCloseKeyDown,
    ...rest
  } = props;
  useTheme();

  return (
    <span
      className={cx('iui-select-tag', className)}
      onClick={(e) => e.stopPropagation()}
      role='menuitem'
      {...rest}
    >
      <span className='iui-select-tag-label'>{label}</span>
      {isRemovable && (
        <button
          onClick={onCloseClick}
          onKeyDown={onCloseKeyDown}
          aria-label={`Remove ${label}`}
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
