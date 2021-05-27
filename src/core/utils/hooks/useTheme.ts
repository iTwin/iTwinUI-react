/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import '@itwin/itwinui-css/css/global.css';

export type ThemeType = 'light' | 'dark' | 'os';

/**
 * Hook that applies styling and theme to all components.
 * Defaults to light theme if none provided or set elsewhere.
 * @param theme Light, dark, or based on OS setting.
 */
export const useTheme = (
  theme?: ThemeType,
  owningDocument = document,
): void => {
  React.useLayoutEffect(() => {
    if (!owningDocument.body.classList.contains('iui-body')) {
      owningDocument.body.classList.add('iui-body');
    }
  }, [owningDocument]);

  React.useLayoutEffect(() => {
    switch (theme) {
      case 'light':
        addLightTheme(owningDocument);
        break;
      case 'dark':
        addDarkTheme(owningDocument);
        break;
      case 'os':
        if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
          addDarkTheme(owningDocument);
        } else {
          addLightTheme(owningDocument);
        }
        break;
      default:
        if (
          !owningDocument.documentElement.classList.value.includes('iui-theme')
        ) {
          addLightTheme(owningDocument);
        }
    }
  }, [owningDocument, theme]);
};

const addLightTheme = (ownerDocument: Document) => {
  ownerDocument.documentElement.classList.add('iui-theme-light');
  ownerDocument.documentElement.classList.remove('iui-theme-dark');
};

const addDarkTheme = (ownerDocument: Document) => {
  ownerDocument.documentElement.classList.add('iui-theme-dark');
  ownerDocument.documentElement.classList.remove('iui-theme-light');
};
