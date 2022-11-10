/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Surface, Text } from '@itwin/itwinui-react';
import './FileCard.scss';
import { LineChange } from './components/LineChange/LineChange';

export const FileCard = () => {
  return (
    <Surface className='FileCard' elevation={2}>
      <Text variant='title'>.../src/App.tsx</Text>
      {[...Array(5)].map(() => {
        return <LineChange />;
      })}
    </Surface>
  );
};
