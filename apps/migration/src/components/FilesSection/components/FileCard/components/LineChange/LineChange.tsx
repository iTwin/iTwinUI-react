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
import 'tippy.js/dist/tippy.css';
import { MatchLine } from '../../../../../../data-types/file_types';

export type LineChangeProps = {
  matchLine: MatchLine;
};

export const LineChange = (props: LineChangeProps) => {
  const { matchLine } = props;

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

  const getRemoveLine = () => {
    return (
      <Code className='line-remove'>
        {matchLine.line.substring(0, matchLine.line.indexOf(matchLine.replace))}
        <strong className='code-remove'>{matchLine.replace}</strong>
      </Code>
    );
  };

  const getAddLine = () => {
    return (
      <Code className='line-add'>
        {matchLine.line.substring(0, matchLine.line.indexOf(matchLine.replace))}
        <strong className='code-add'>{matchLine.with}</strong>
      </Code>
    );
  };

  return (
    <span className='LineChange'>
      <span className='header'>
        {/* <Avatar image={<SvgCheckmark className='icon' />} /> */}
        <StatusIcon />
        <Text className='line-number'>{matchLine.line_number}</Text>
        <Text className='description'>
          Variable name changed from <Code>{matchLine.replace}</Code> to{' '}
          <Code>{matchLine.with}</Code>.
        </Text>
      </span>

      <span className='code'>
        {/* <Code className='line-remove'>
          --padding-l: <strong className='code-remove'>var(--iui-xl)</strong>;
        </Code>
        <Code className='line-add'>
          --padding-l: <strong className='code-add'>var(--iui-size-xl)</strong>;
        </Code> */}
        {getRemoveLine()}
        {getAddLine()}
      </span>
    </span>
  );
};
