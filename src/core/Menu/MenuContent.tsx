/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { CommonProps, useTheme } from '../utils';
import '@itwin/itwinui-css/css/menu.css';

export type MenuContentProps = {
  children: React.ReactNode;
} & Omit<CommonProps, 'title'>;

/**
 * Component that allows to have any additional content inside `Menu`.
 * @example
 * <Menu>
 *   {(close) => [
 *     <MenuContent key={0}>
 *       <>
 *         <Text variant='leading'>Terry Rivers</Text>
 *           terry.rivers@email.com
 *         </Text>
 *         <Select options={someOptions} />
 *       </>
 *     </MenuContent>,
 *     <MenuDivider key={1} />,
 *     <MenuItem key={2} onClick={() => {}}>
 *       Sign out
 *     </MenuItem>,
 *   ]}
 * </Menu>
 */
export const MenuContent = (props: MenuContentProps) => {
  const { children, className, ...rest } = props;
  useTheme();
  return (
    <li
      className={cx('iui-menu-content', className)}
      role='presentation'
      {...rest}
    >
      {children}
    </li>
  );
};

export default MenuContent;
