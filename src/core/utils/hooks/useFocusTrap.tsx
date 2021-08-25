/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { getFocusableElements } from '../common';

/**
 * Hook that traps focus within container.
 * Useful for modals or dialogs.
 */
export const useFocusTrap = () => {
  const element = React.useRef<HTMLElement>();

  const handleKeyDown = React.useCallback((event: KeyboardEvent) => {
    if (event.key !== 'Tab') {
      return;
    }

    const focusableElements = getFocusableElements(element.current);
    if (!focusableElements.length) {
      return;
    }

    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement =
      focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      if (
        document.activeElement === firstFocusableElement ||
        document.activeElement === element.current
      ) {
        event.preventDefault();
        (lastFocusableElement as HTMLElement).focus();
      }
    } else if (document.activeElement === lastFocusableElement) {
      event.preventDefault();
      (firstFocusableElement as HTMLElement).focus();
    }
  }, []);

  React.useEffect(() => {
    return () => element.current?.removeEventListener('keydown', handleKeyDown);
  });

  const setRef = React.useCallback(
    (node: HTMLElement | null) => {
      if (!node) {
        return;
      }

      if (element.current) {
        element.current.removeEventListener('keydown', handleKeyDown);
      }

      element.current = node;
      element.current.addEventListener('keydown', handleKeyDown);
    },
    [handleKeyDown],
  );

  return setRef;
};
