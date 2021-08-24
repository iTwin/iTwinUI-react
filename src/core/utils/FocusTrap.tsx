/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { getFocusableElements } from './common';
import { useMergedRefs } from './hooks/useMergedRefs';

export type FocusTrapProps = {
  /**
   * A single child element to trap focus in.
   */
  children: JSX.Element;
};

/**
 * Trap focus within child container.
 * Used for modals and dialogs.
 */
export const FocusTrap = (props: FocusTrapProps) => {
  const { children } = props;
  const childRef = React.useRef<HTMLElement>();
  const lastElementRef = React.useRef(null);

  const onFocus = (event: React.FocusEvent) => {
    console.log(event.currentTarget);
    const elements = getFocusableElements(childRef.current);
    const firstElement = elements[0];
    const lastElement = elements[(elements.length || 1) - 1];

    if (
      event.relatedTarget === firstElement ||
      (event.relatedTarget === childRef.current &&
        event.target === lastElementRef.current)
    ) {
      (lastElement as HTMLElement).focus();
    } else {
      (firstElement as HTMLElement).focus();
    }
  };

  return (
    <>
      <div tabIndex={0} onFocus={onFocus} />
      {React.cloneElement(children, {
        ref: useMergedRefs(children.props.ref, childRef),
      })}
      <div ref={lastElementRef} tabIndex={0} onFocus={onFocus} />
    </>
  );
};

export default FocusTrap;
