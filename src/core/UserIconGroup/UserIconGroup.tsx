/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';
import cx from 'classnames';
import { UserIcon } from '../UserIcon';
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
   * User Icons in the UserIconGroup.
   */
  children: React.ReactNode;
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
  const maxLength = 9;
  const {
    children,
    animated = false,
    stacked = true,
    maxIcons = defaultLength,
  } = props;

  const childrenArray = React.Children.toArray(children);
  const childrenLength = React.Children.count(children);
  let additionalChildren = '';
  if (childrenLength > maxIcons) {
    React.Children.forEach(children, (child: JSX.Element, index) => {
      if (index >= maxIcons) {
        additionalChildren += child.props.title + '\n';
      }
    });
  }

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
                })
              : null,
          )}

          <UserIcon
            size={(childrenArray[0] as JSX.Element).props.size}
            title={additionalChildren}
            abbreviation={
              childrenLength <= maxLength
                ? `+${childrenLength - maxIcons}`
                : `${maxLength}+`
            }
            backgroundColor='#dce0e3'
          />
        </>
      )}
    </div>
  );
};

export default UserIconGroup;
