/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

export type TextTruncationProps = {
  /**
   * Text to truncate.
   */
  text: string;
  /**
   * Number of characters to leave at the end.
   * @default 6
   */
  endCharsCount?: number;
};

/**
 * Truncates text with the ellipsis in the middle,
 * leaving defined number of chars at the end.
 */
export const TextTruncation = (props: TextTruncationProps) => {
  const { text, endCharsCount = 6 } = props;

  return (
    <div style={{ display: 'flex', minWidth: 0 }}>
      <span
        style={{
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
      >
        {text.substr(0, text.length - endCharsCount)}
      </span>
      <span style={{ flexShrink: 0 }}>
        {text.substr(text.length - endCharsCount)}
      </span>
    </div>
  );
};

export default TextTruncation;
