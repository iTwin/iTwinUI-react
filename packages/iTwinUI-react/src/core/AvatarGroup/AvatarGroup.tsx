/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useTheme, CommonProps } from '../utils';
import '@itwin/itwinui-css/css/avatar.css';

export type AvatarGroupProps = {
  /**
   * Max number of avatars unstacked.
   * @default 5
   */
  maxAvatars?: number;
  /**
   * If true, group will be stacked to take less space.
   * @default true
   */
  stacked?: boolean;
  /**
   * If true, group will be animated on hover.
   * @default false
   */
  animated?: boolean;
  /**
   * Size of avatars and count avatars.
   * @default 'small'
   */
  avatarSize?: 'small' | 'medium' | 'large' | 'x-large';
  /**
   * Avatars in the group.
   */
  children: React.ReactNode;
  /**
   * Count Avatar props.
   */
  countAvatarProps?: React.ComponentPropsWithRef<'div'>;
} & Omit<CommonProps, 'title'>;
/**
 * Group Avatars together.
 *
 * Avatars stacking is based on `maxAvatars` count. If you provide 8 Avatars and keep default 5 `maxAvatars` count,
 * this component will show 5 Avatars and Count Avatar with "3" in it.
 *
 * You can add custom Count Avatar behavior by using `countAvatarProps`.
 *
 * @example
 * <AvatarGroup avatarSize='medium'>
 *  <Avatar
 *    abbreviation="TR"
 *    backgroundColor={getUserColor("Terry Rivers")}
 *    title="Terry Rivers"
 *  />
 *  <Avatar
 *    abbreviation="RM"
 *    backgroundColor={getUserColor("Robin Mercer")}
 *    title="Robin Mercer"
 *  />
 *  <Avatar
 *    abbreviation="JM"
 *    backgroundColor={getUserColor("Jean Mullins")}
 *    title="Jean Mullins"
 *  />
 * </AvatarGroup>
 */
export const AvatarGroup = (props: AvatarGroupProps) => {
  const maxLength = 99;
  const {
    children,
    animated = false,
    stacked = true,
    maxAvatars = 5,
    avatarSize = 'small',
    countAvatarProps,
    className,
    ...rest
  } = props;

  const childrenArray = React.Children.toArray(children);
  const childrenLength = childrenArray.length;

  useTheme();

  const getAvatarList = (count: number) => {
    return childrenArray.slice(0, count).map((child) =>
      React.cloneElement(child as JSX.Element, {
        status: undefined,
        size: avatarSize,
      }),
    );
  };

  return (
    <>
      <div
        className={cx(
          'iui-avatar-list',
          {
            'iui-animated': animated,
            'iui-stacked': stacked,
          },
          className,
        )}
        {...rest}
      >
        {childrenArray.length <= maxAvatars + 1 &&
          getAvatarList(maxAvatars + 1)}
        {childrenArray.length > maxAvatars + 1 && (
          <>
            {getAvatarList(maxAvatars)}
            ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
            <div
              {...countAvatarProps}
              className={cx(
                'iui-avatar',
                { [`iui-${avatarSize}`]: avatarSize !== 'medium' },
                'iui-avatar-count',
                countAvatarProps?.className,
              )}
            >
              <abbr className='iui-initials'>
                {childrenLength <= maxLength
                  ? `${childrenLength - maxAvatars}`
                  : `${maxLength}+`}
              </abbr>
              <span className='iui-stroke' />
            </div>
            ​
          </>
        )}
      </div>
    </>
  );
};

export default AvatarGroup;
