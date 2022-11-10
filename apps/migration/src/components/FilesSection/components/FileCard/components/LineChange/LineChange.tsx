/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Code, Text, Avatar } from '@itwin/itwinui-react';
// import { StatusIconMap } from '@itwin/itwinui-react';
import SvgCheckmark from '@itwin/itwinui-icons-react/cjs/icons/Checkmark';
import SvgStatusSuccess from '@itwin/itwinui-icons-react/cjs/icons/StatusSuccess';
// import React from 'react';
import './LineChange.scss';

export const LineChange = () => {
  const StatusIcon = () => (
    <SvgStatusSuccess className='status-icon' fill='green' aria-hidden />
  );

  return (
    <span className='LineChange'>
      <span className='header'>
        {/* <Avatar image={<SvgCheckmark className='icon' />} /> */}
        <StatusIcon />
        <Text className='line-number'>123:35</Text>
        <Text className='description'>
          Variable name changed from <Code>var(--iui-xl)</Code> to{' '}
          <Code>var(--iui-size-xl)</Code>.
        </Text>
      </span>

      <span className='code'>
        <Code className='line-remove'>
          --padding-l: <strong className='code-remove'>var(--iui-xl)</strong>;
        </Code>
        <Code className='line-add'>
          --padding-l: <strong className='code-add'>var(--iui-size-xl)</strong>;
        </Code>
      </span>
    </span>
  );
};
