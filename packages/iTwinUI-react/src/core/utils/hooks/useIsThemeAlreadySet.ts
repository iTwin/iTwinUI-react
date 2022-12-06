/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { ThemeContext } from '../../ThemeProvider/ThemeProvider';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import { getDocument } from '../functions';

/**
 * Hook that returns true if one of the following is true:
 * - There is a parent `ThemeProvider` in the tree
 * - The <body> element has data-iui-theme attribute or iui-root class
 */
export const useIsThemeAlreadySet = (ownerDocument = getDocument()) => {
  const parentContext = React.useContext(ThemeContext);
  const [isThemeAlreadySet, setIsThemeAlreadySet] = React.useState(
    () => !!parentContext,
  );

  useIsomorphicLayoutEffect(() => {
    if (parentContext) {
      setIsThemeAlreadySet(true);
      return;
    }

    if (
      ownerDocument &&
      (ownerDocument.body.dataset.iuiTheme ||
        ownerDocument.body.classList.contains('iui-root'))
    ) {
      setIsThemeAlreadySet(true);
    }
  }, [parentContext, ownerDocument]);

  return isThemeAlreadySet;
};
