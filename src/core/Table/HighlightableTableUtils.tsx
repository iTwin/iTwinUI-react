import * as React from 'react';
import reactStringReplace from 'react-string-replace';

export const searchKeepWS: React.CSSProperties = {
  whiteSpace: 'pre',
};

export const searchMatch: React.CSSProperties = {
  backgroundColor: 'var(--bwc-yellow)',
};

export const SearchHighlightTextDecorator = ({
  children,
  highlightRegex,
}: React.PropsWithChildren<{
  highlightRegex?: RegExp;
}>) => {
  return (
    <>
      {highlightRegex
        ? reactStringReplace([children], highlightRegex, (match, i) => {
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
        : children}
    </>
  );
};
