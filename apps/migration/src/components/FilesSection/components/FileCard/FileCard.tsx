/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Anchor, ExpandableBlock, Surface, Text } from '@itwin/itwinui-react';
import './FileCard.scss';
import SvgStatusSuccess from '@itwin/itwinui-icons-react/cjs/icons/StatusSuccess';
import { LineChange } from './components/LineChange/LineChange';

export const FileCard = () => {
  const StatusIcon = () => (
    <SvgStatusSuccess className='status-icon' fill='green' aria-hidden />
  );

  return (
    <ExpandableBlock
      title={
        <span className='header'>
          {StatusIcon()}
          <Anchor href=''>
            <Text className={'title'} variant='leading'>
              .../src/App.tsx
            </Text>
          </Anchor>
        </span>
      }
      className='FileCard'
      isExpanded={true}
    >
      {[...Array(5)].map(() => {
        return <LineChange />;
      })}
    </ExpandableBlock>
  );
};
