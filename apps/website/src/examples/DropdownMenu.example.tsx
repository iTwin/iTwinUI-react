/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

import {
  Text,
  MenuExtraContent,
  Select,
  MenuDivider,
  MenuItem,
  DropdownMenu,
  IconButton,
} from '@itwin/itwinui-react';

export default () => {
  const [userType, setUserType] = React.useState('User');

  const dropdownMenuItems = (close) => [
    <MenuExtraContent key={0}>
      <>
        <Text variant='leading'>Terry Rivers</Text>
        <Text isMuted style={{ marginBottom: 8 }}>
          terry.rivers@email.com
        </Text>
        <Select
          options={[
            { value: 'User', label: 'User' },
            { value: 'Moderator', label: 'Moderator' },
            { value: 'Administrator', label: 'Administrator' },
          ]}
          value={userType}
          onChange={(type) => setUserType(type)}
        />
      </>
    </MenuExtraContent>,
    <MenuDivider key={1} />,
    <MenuItem key={2} onClick={close}>
      View profile
    </MenuItem>,
    <MenuItem key={3} onClick={close}>
      Sign out
    </MenuItem>,
  ];
  return (
    <DropdownMenu menuItems={dropdownMenuItems}>
      <IconButton>
        <span>...</span>
      </IconButton>
    </DropdownMenu>
  );
};
