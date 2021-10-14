/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils';
import '@itwin/itwinui-css/css/menu.css';

/**
 * Divider between menu items. Should be used inside `Menu`.
 * @example
 * <Menu>
 *   {(close) => [
 *     <MenuItem key={0} onClick={() => {}}>
 *       Item #1
 *     </MenuItem>,
 *     <MenuDivider key={1} />,
 *     <MenuItem key={2} onClick={() => {}}>
 *       Item #2
 *     </MenuItem>,
 *   ]}
 * </Menu>
 */
export const MenuDivider = () => {
  useTheme();
  return <li role='separator' className='iui-menu-divider' />;
};

export default MenuDivider;
