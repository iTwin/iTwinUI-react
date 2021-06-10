import * as React from 'react';
import reactStringReplace from 'react-string-replace';
import { CellProps } from 'react-table';

export const searchKeepWS: React.CSSProperties = {
  whiteSpace: 'pre',
};

export const searchMatch: React.CSSProperties = {
  backgroundColor: 'var(--bwc-yellow)',
};

export const highlightText = (text: string, pattern: RegExp) => {
  return typeof text === 'string'
    ? reactStringReplace(text, pattern, (match, i) => {
        console.log(match, i);
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
  return typeof value === 'string' && highlightRegex
    ? highlightText(value, highlightRegex)
    : value;
};
