/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';
import cx from 'classnames';
import { Tooltip } from '../Tooltip/Tooltip';
import { CommonProps } from '../utils/props';

export type UserIconGroupProps = {
  /**
   * UserIconGroup max number of icons unstacked
   * @default 5
   */
  maxIcons?: number;
  /**
   * UserIconGroup is group needs to be stacked
   * @default 'true'
   */
  stacked?: boolean;
  /**
   * UserIconGroup type
   * @default 'false'
   */
  animated?: boolean;
  /**
   * UserIconGroup type
   */
  iconSize: 'small' | 'medium' | 'large' | 'x-large';
  /**
   * User Icons in the UserIconGroup.
   */
  children: React.ReactNode;

  excessIconProps?: React.HTMLAttributes<HTMLDivElement>;
} & CommonProps;

/**
 * Group User Icons together
 * User Icons stacking is based on maxIcons count. If you provide 8 UserIcons and keep default 5 maxIcons count,
 * this component will show 5 UserIcons and stacked UserIcon with "+3" in it.
 *
 * @example
 * <UserIconGroup>
 *  <UserIcon
 *    abbreviation="TR"
 *    backgroundColor="#6AB9EC"
 *    size="medium"
 *    title="Terry Rivers"
 *    type="default"
 *  />
 *  <UserIcon
 *   abbreviation="RM"
 *    backgroundColor="#C8C2B4"
 *    size="medium"
 *    title="Robin Mercer"
 *    type="default"
 *  />
 *  <UserIcon
 *    abbreviation="TR"
 *    backgroundColor="#6AB9EC"
 *    size="medium"
 *    title="Terry Rivers"
 *    type="default"
 *  />
 * </UserIconGroup>
 */
export const UserIconGroup = (props: UserIconGroupProps) => {
  const defaultLength = 5;
  const maxLength = 99;
  const {
    children,
    animated = false,
    stacked = true,
    maxIcons = defaultLength,
    iconSize,
    excessIconProps,
  } = props;

  const childrenArray = React.Children.toArray(children);
  const childrenLength = React.Children.count(children);

  useTheme();

  return (
    <div
      className={cx('iui-user-icon-list', {
        'iui-animated': animated,
      })}
    >
      {childrenLength <= maxIcons + 1 || !stacked ? (
        children
      ) : (
        <>
          {childrenArray.map((child, index) =>
            index < maxIcons
              ? React.cloneElement(child as JSX.Element, {
                  status: undefined,
                  key: index,
                  size: iconSize,
                })
              : null,
          )}

          <Tooltip content='text' placement='right'>
            <div
              {...excessIconProps} // this should be a new prop
              className={cx(
                'iui-user-icon',
                `iui-${iconSize}`,
                'iui-user-icon-count',
              )}
            >
              <abbr className='iui-initials'>
                {childrenLength <= maxLength
                  ? `${childrenLength - maxIcons}`
                  : `${maxLength}+`}
              </abbr>
              <span className='iui-stroke' />
            </div>
          </Tooltip>
        </>
      )}
    </div>
  );
};

export default UserIconGroup;
