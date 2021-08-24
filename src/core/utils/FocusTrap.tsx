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

  const onLastFocus = (event: React.FocusEvent) => {
    const elements = getFocusableElements(childRef.current);
    const firstElement = elements[0];
    const lastElement = elements[(elements.length || 1) - 1];

    if (event.relatedTarget === lastElement) {
      (firstElement as HTMLElement).focus();
    } else {
      (lastElement as HTMLElement).focus();
    }
  };

  const onFirstFocus = (event: React.FocusEvent) => {
    const elements = getFocusableElements(childRef.current);
    const firstElement = elements[0];
    const lastElement = elements[(elements.length || 1) - 1];

    if (
      event.relatedTarget === childRef.current ||
      event.relatedTarget === firstElement
    ) {
      (lastElement as HTMLElement).focus();
    } else {
      (firstElement as HTMLElement).focus();
    }
  };

  return (
    <div>
      <div tabIndex={0} onFocus={onFirstFocus} />
      {React.cloneElement(children, {
        ref: useMergedRefs(children.props.ref, childRef),
      })}
      <div tabIndex={0} onFocus={onLastFocus} />
    </div>
  );
};

export default FocusTrap;
