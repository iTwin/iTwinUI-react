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
export const useTheme = (theme?: ThemeType): void => {
  React.useLayoutEffect(() => {
    if (!document.body.classList.contains('iui-body')) {
      document.body.classList.add('iui-body');
    }
  }, []);

  React.useLayoutEffect(() => {
    switch (theme) {
      case 'light':
        addLightTheme();
        break;
      case 'dark':
        addDarkTheme();
        break;
      case 'os':
        if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
          addDarkTheme();
        } else {
          addLightTheme();
        }
        break;
      default:
        if (document.documentElement.className.indexOf('iui-theme') === -1) {
          addLightTheme();
        }
    }
  }, [theme]);
};

const addLightTheme = () => {
  document.documentElement.classList.add('iui-theme-light');
  document.documentElement.classList.remove('iui-theme-dark');
};

const addDarkTheme = () => {
  document.documentElement.classList.add('iui-theme-dark');
  document.documentElement.classList.remove('iui-theme-light');
};
