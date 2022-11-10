/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Code, Text, Avatar, IconButton } from '@itwin/itwinui-react';
// import { StatusIconMap } from '@itwin/itwinui-react';
import SvgCheckmark from '@itwin/itwinui-icons-react/cjs/icons/Checkmark';
import SvgStatusSuccess from '@itwin/itwinui-icons-react/cjs/icons/StatusSuccess';
import SvgStatusError from '@itwin/itwinui-icons-react/cjs/icons/StatusError';
import SvgUndo from '@itwin/itwinui-icons-react/cjs/icons/Undo';
// import React from 'react';
import './LineChange.scss';
import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

export const LineChange = () => {
  const [isChanged, setIsChanged] = React.useState(false);

  const StatusIcon = () => (
    <Tippy
      content={isChanged ? 'Revert change' : 'Make change'}
      delay={0}
      duration={100}
    >
      <IconButton size='small' onClick={() => setIsChanged((prev) => !prev)}>
        {isChanged ? (
          <SvgStatusSuccess className='status-icon-success' aria-hidden />
        ) : (
          <SvgStatusError className='status-icon-error' aria-hidden />
        )}
      </IconButton>
    </Tippy>
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
