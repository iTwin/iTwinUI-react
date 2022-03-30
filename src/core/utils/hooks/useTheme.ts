/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import '@itwin/itwinui-css/css/global.css';
import { getDocument, getWindow } from '../functions/dom';
import { useMediaQuery } from './useMediaQuery';

export type ThemeOptions = {
  /**
   * Document to which the theme will be applied.
   * Can be specified to handle popup windows.
   * @default document
   */
  ownerDocument?: Document;
  /**
   * Whether to apply high-contrast versions of light and dark themes.
   * Will default to user preference if browser supports it.
   */
  highContrast?: boolean;
};

export type ThemeType = 'light' | 'dark' | 'os';

/**
 * Hook that applies styling and theme to all components.
 * Defaults to light theme if none provided or set elsewhere.
 * @param theme Light, dark, or based on OS setting.
 * @param themeOptions Options that override default theming behavior.
 */
export const useTheme = (
  theme?: ThemeType,
  themeOptions?: ThemeOptions,
): void => {
  const ownerDocument = themeOptions?.ownerDocument ?? getDocument();

  const prefersHighContrast = useMediaQuery('(prefers-contrast: more)');
  const highContrast = React.useMemo(
    () => !!(themeOptions?.highContrast ?? prefersHighContrast),
    [prefersHighContrast, themeOptions?.highContrast],
  );

  React.useLayoutEffect(() => {
    if (!ownerDocument?.body.classList.contains('iui-body')) {
      ownerDocument?.body.classList.add('iui-body');
    }
  }, [ownerDocument]);

  React.useLayoutEffect(() => {
    if (!ownerDocument) {
      return;
    }

    const prefersDarkMediaQuery = getWindow()?.matchMedia?.(
      '(prefers-color-scheme: dark)',
    );

    const addOSTheme = ({
      matches: isDark,
    }: MediaQueryList | MediaQueryListEvent) => {
      if (isDark) {
        addDarkTheme({ ownerDocument, highContrast });
      } else {
        addLightTheme({ ownerDocument, highContrast });
      }
    };

    switch (theme) {
      case 'light':
        prefersDarkMediaQuery?.removeEventListener?.('change', addOSTheme);
        addLightTheme({ ownerDocument, highContrast });
        break;
      case 'dark':
        prefersDarkMediaQuery?.removeEventListener?.('change', addOSTheme);
        addDarkTheme({ ownerDocument, highContrast });
        break;
      case 'os':
        if (prefersDarkMediaQuery != undefined) {
          addOSTheme(prefersDarkMediaQuery);
          prefersDarkMediaQuery.addEventListener?.('change', addOSTheme);
        } else {
          addLightTheme({ ownerDocument, highContrast });
        }
        break;
      default:
        if (
          ownerDocument.documentElement.className.indexOf('iui-theme') === -1
        ) {
          addLightTheme({ ownerDocument, highContrast });
        }
    }

    return () => {
      prefersDarkMediaQuery?.removeEventListener?.('change', addOSTheme);
    };
  }, [highContrast, ownerDocument, theme]);
};

const addLightTheme = ({
  ownerDocument,
  highContrast,
}: Required<ThemeOptions>) => {
  const classList = ownerDocument.documentElement.classList;
  const currentTheme = Array.from(classList).find((cls) =>
    cls.startsWith('iui-theme'),
  );
  if (currentTheme) {
    classList.remove(currentTheme);
  }
  classList.add(`iui-theme-light${highContrast ? '-hc' : ''}`);
};

const addDarkTheme = ({
  ownerDocument,
  highContrast,
}: Required<ThemeOptions>) => {
  const classList = ownerDocument.documentElement.classList;
  const currentTheme = Array.from(classList).find((cls) =>
    cls.startsWith('iui-theme'),
  );
  if (currentTheme) {
    classList.remove(currentTheme);
  }
  classList.add(`iui-theme-dark${highContrast ? '-hc' : ''}`);
};
