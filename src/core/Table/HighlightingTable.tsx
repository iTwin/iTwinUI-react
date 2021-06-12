/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { CellProps } from 'react-table';

/** polyfill for Array.prototype.flat with a depth of 1 */
const flat1 = <T extends unknown>(array: T[]) => {
  if ('flat' in Array.prototype) {
    return (array as T[] & { flat(i: number): T[] }).flat(1);
  } else {
    const result: T[] = [];
    for (const item of array) {
      if (Array.isArray(item)) {
        array.push(...item);
      } else {
        array.push(item);
      }
    }
    return result;
  }
};

// based on the npm package reactStringReplace at https://github.com/iansinnott/react-string-replace
const reactStringReplace = (
  nodeOrNodes: string | React.ReactNode | React.ReactNodeArray,
  pattern: RegExp,
  replacer: (match: string, index: number) => typeof nodeOrNodes,
): React.ReactNodeArray => {
  const asArray = (a: typeof nodeOrNodes): React.ReactNodeArray =>
    Array.isArray(a) ? a : [a];

  const nodes = asArray(nodeOrNodes);

  // we add a capture group around the pattern because `String.prototype.split` requires it
  // this should be fast enough due to caching and string interning
  pattern = RegExp(`(${pattern.source})`, pattern.flags);

  return flat1(
    nodes.map((node) => {
      if (typeof node !== 'string') {
        return node;
      }
      const parts = node.split(pattern);
      const result = parts.map((part, i) => {
        const isOdd = i % 2 === 1;
        const isDelimiter = isOdd;
        if (!isDelimiter) {
          return part;
        }
        const delimiterIndex = Math.ceil(i / 2);
        return replacer(part, delimiterIndex);
      });
      return result;
    }),
  );
};

export const searchKeepWS: React.CSSProperties = {
  whiteSpace: 'pre',
};

export const searchMatch: React.CSSProperties = {
  backgroundColor: 'rgba(255, 207, 0, 0.75)',
};

export const highlightText = (text: string, pattern: RegExp) => {
  // We grab the space around the result and give it `white-space: pre` since tag
  // boundary changes may eliminate space.
  pattern = RegExp(`\\s*${pattern.source}\\s*`, pattern.flags);

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
