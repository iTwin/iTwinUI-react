/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

export const WithCSSTransition = (
  props: Partial<CSSTransitionProps> & {
    children: JSX.Element;
    orientation?: 'vertical' | 'horizontal';
  },
) => {
  const { in: visible, orientation = 'vertical', children, ...rest } = props;

  const expandedSize = React.useRef(0);
  const sizeKey = orientation === 'vertical' ? 'height' : 'width';

  return (
    <CSSTransition
      in={visible}
      timeout={200}
      unmountOnExit={true}
      onEnter={(node) => (node.style[sizeKey] = `0px`)}
      onEntering={(node) => (node.style[sizeKey] = `${expandedSize.current}px`)}
      onEntered={(node) => (node.style[sizeKey] = 'auto')}
      onExit={(node) => (node.style[sizeKey] = `${expandedSize.current}px`)}
      onExiting={(node) => (node.style[sizeKey] = `0px`)}
      classNames='iui'
      {...rest}
    >
      {React.cloneElement(children, {
        ref: (el: HTMLElement) => {
          if (el) {
            expandedSize.current = el.getBoundingClientRect()[sizeKey];
          }
        },
      })}
    </CSSTransition>
  );
};
