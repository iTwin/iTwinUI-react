/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import reactStringReplace from 'react-string-replace';
import { CellProps } from 'react-table';

export const searchKeepWS: React.CSSProperties = {
  whiteSpace: 'pre',
};

export const searchMatch: React.CSSProperties = {
  backgroundColor: '#ffcf00',
};

export const highlightText = (text: string, pattern: RegExp) => {
  // Unfortunately, reactStringReplace requires a capture group so we add one for you
  // we can remove this if we patch or replace reactStringReplace.
  // We also grab the space around the result and give it `white-space: pre` since tag
  // boundary changes may eliminate space.
  pattern = RegExp(`(\\s*${pattern.source}\\s*)`, pattern.flags);

  return typeof text === 'string'
    ? reactStringReplace(text, pattern, (match, i) => {
        const leftWhitespace = (/^\s*/.exec(match) as RegExpExecArray)[0];
        const rightWhitespace = (/\s*$/.exec(match) as RegExpExecArray)[0];
        return (
          <>
            {leftWhitespace && (
              <span style={searchKeepWS}>{leftWhitespace}</span>
            )}
            <mark style={searchMatch} key={i}>
              {match.trim()}
            </mark>
            {rightWhitespace && (
              <span style={searchKeepWS}>{rightWhitespace}</span>
            )}
          </>
        );
      })
    : text;
};

declare module 'react-table' {
  // reusing type constraints from CellProps definition so ignoring linter
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-unused-vars
  interface UseTableInstanceProps<D extends object> {
    highlightRegex?: RegExp;
  }
}

// reusing type constraints from CellProps definition so ignoring linter
// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
export const HighlightingCell = <D extends object, V = any>({
  value,
  highlightRegex,
}: CellProps<D, V>) => {
  if (value === undefined) {
    return null;
  }
  return typeof value === 'string' && highlightRegex
    ? highlightText(value, highlightRegex)
    : value;
};
