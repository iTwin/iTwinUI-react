/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { Tile, TagContainer, Tag, Badge, MenuItem, IconButton } from '@itwin/itwinui-react';
import { SvgStar, SvgInfo, SvgPlaceholder } from '@itwin/itwinui-icons-react';

export default () => {
  return (
    <Tile
      name='Tile name'
      description='Tile description that takes upto 3 lines'
      metadata={
        <TagContainer>
          <Tag variant='basic'>Tag 1</Tag>
          <Tag variant='basic'>Tag 2</Tag>
        </TagContainer>
      }
      thumbnail={<SvgPlaceholder />}
      moreOptions={[<MenuItem>Item 1</MenuItem>, <MenuItem>Item 2</MenuItem>]}
      leftIcon={
        <IconButton>
          <SvgInfo />
        </IconButton>
      }
      rightIcon={
        <IconButton>
          <SvgStar />
        </IconButton>
      }
      isSelected={true}
      isNew={false}
    />
  );
};
