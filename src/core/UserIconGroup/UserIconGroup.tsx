/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';
import cx from 'classnames';
import { UserIcon } from '../UserIcon';
export type UserIconGroupType = 'default' | 'animated';

const defaultLength = 5;
const maxLength = 9;

export type UserIconGroupProps = {
  /**
   * UserIconGroup group length
   * @default 5
   */
  length?: number;
  /**
   * UserIconGroup type
   * @default 'default'
   */
  type?: UserIconGroupType;
  /**
   * User Icons in the UserIconGroup.
   */
  children: React.ReactNode;
};

/**
 * Group User Icons together
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
 * * @example
 * <UserIconGroup type='animated'>
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
  const { children, type = 'default', length = defaultLength } = props;

  const childrenArray = React.Children.toArray(children);
  const childrenLength = React.Children.count(children);
  let additionalChildren = '';
  if (childrenLength > length) {
    React.Children.forEach(children, (child: JSX.Element, index) => {
      if (index >= length) {
        additionalChildren += child.props.title + '\n';
      }
    });
  }

  useTheme();

  return (
    <div
      className={cx('iui-user-icon-list', {
        'iui-animated': type == 'animated',
      })}
    >
      {childrenLength <= length ? (
        children
      ) : (
        <>
          {childrenArray.map((child, index) =>
            index < length
              ? React.cloneElement(child as JSX.Element, {
                  status: '',
                  key: index,
                })
              : null,
          )}

          <UserIcon
            size={(childrenArray[0] as JSX.Element).props.size}
            title={additionalChildren}
            abbreviation={
              childrenLength <= maxLength
                ? `+${childrenLength - length}`
                : `${maxLength}+`
            }
            backgroundColor=''
          />
        </>
      )}
    </div>
  );
};

export default UserIconGroup;
