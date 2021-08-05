/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { CommonProps } from '../utils/props';
import { useTheme } from '../utils/hooks/useTheme';
import { useOverflow } from '../utils/hooks/useOverflow';
import '@itwin/itwinui-css/css/button.css';

export type ButtonGroupProps = {
  /**
   * Buttons in the ButtonGroup.
   */
  children: React.ReactNode;
  /**
   * If true, the ButtonGroup will collapse the overflowing Buttons into a menu.
   */
  responsive?: boolean;
} & Omit<CommonProps, 'title'>;

/**
 * Group buttons together for common actions
 * @example
 * <ButtonGroup>
 *   <IconButton>
 *     <SvgAdd />
 *   </IconButton>
 *   <IconButton>
 *     <SvgEdit />
 *   </IconButton>
 * </ButtonGroup>
 */
export const ButtonGroup = (props: ButtonGroupProps) => {
  const { children, className, responsive = false, ...rest } = props;
  const childrenArray = React.Children.toArray(children);

  useTheme();

  const [overflowRef, visibleCount] = useOverflow(
    childrenArray.length,
    !responsive,
  );

  return (
    <div
      className={cx('iui-button-group', className)}
      ref={overflowRef}
      {...rest}
    >
      {childrenArray.slice(0, visibleCount)}
    </div>
  );
};

export default ButtonGroup;
