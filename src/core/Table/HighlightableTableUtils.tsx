import * as React from 'react';
import { CellProps } from 'react-table';
import reactStringReplace from 'react-string-replace';

export interface SearchHighlightDecoratorProps {
  text: string;
  hasSearch: boolean;
  highlightRegex: RegExp;
}

export const searchKeepWS: React.CSSProperties = {
  whiteSpace: 'pre',
};

export const searchMatch: React.CSSProperties = {
  backgroundColor: 'var(--bwc-yellow)',
};

export const SearchHighlightTextDecorator = ({
  text,
  hasSearch,
  highlightRegex,
}: SearchHighlightDecoratorProps) => {
  return (
    <>
      {hasSearch
        ? reactStringReplace(text, highlightRegex, (match, i) => {
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
        : text}
    </>
  );
};

export const SearchHighlightedCell = <T extends any>({
  children,
  highlightRegex,
  hasSearch,
}: //...rest
React.PropsWithChildren<SearchHighlightDecoratorProps>) => {
  return typeof children === 'string' ? (
    <SearchHighlightTextDecorator
      text={children}
      hasSearch={hasSearch}
      highlightRegex={highlightRegex}
    />
  ) : (
    children
  );
};
