/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

const ELLIPSIS_CHAR = '…';

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

  const childRef = React.useRef<HTMLDivElement>(null);

  const [truncatedText, setTruncatedText] = React.useState(text);
  React.useLayoutEffect(() => {
    setTruncatedText(text);
  }, [text]);

  React.useLayoutEffect(() => {
    if (!childRef.current) {
      return;
    }

    const parentElement = childRef.current.parentElement ?? childRef.current;
    if (parentElement.scrollWidth <= parentElement.clientWidth) {
      return;
    }

    const { paddingLeft, paddingRight } = getComputedStyle(parentElement);
    const actualWidth =
      parentElement.clientWidth -
      parseFloat(paddingLeft) -
      parseFloat(paddingRight);
    const charWidth = Math.ceil(parentElement.scrollWidth / text.length);
    const totalVisibleCount = Math.floor(actualWidth / charWidth);
    if (totalVisibleCount >= text.length) {
      return;
    }
    setTruncatedText(
      `${text.substr(
        0,
        totalVisibleCount - endCharsCount - ELLIPSIS_CHAR.length * 2,
      )}${ELLIPSIS_CHAR}${text.substr(text.length - endCharsCount)}`,
    );
  }, [endCharsCount, text, truncatedText]);

  return <span ref={childRef}>{truncatedText}</span>;
};

export default TextTruncation;
