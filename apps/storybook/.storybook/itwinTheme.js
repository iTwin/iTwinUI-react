/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { create } from '@storybook/theming/create';
import itwinImage from './public/itwin.svg';
import itwinImageDark from './public/itwin-dark.svg';

export const lightTheme = create({
  base: 'light',
  brandTitle: 'iTwinUI',
  brandImage: itwinImage,

  colorPrimary: '#0071B8',
  colorSecondary: '#0071B8',

  // UI
  appBg: '#eef0f1',
  appContentBg: '#FFFFFF',
  appBorderColor: '#b3bcc1',
  appBorderRadius: 9,

  // Typography
  fontBase:
    '"Noto Sans", "Open Sans", BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, system-ui, sans-serif',
  fontCode:
    '"Noto Sans Mono", ui-monospace, "SF Mono", SFMono-Regular, "DejaVu Sans Mono", Menlo, Consolas, monospace',

  // Text colors
  textColor: '#242424',

  // Toolbar default and active colors
  barTextColor: '#242424',
  barSelectedColor: '#0071B8',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#b3bcc1',
  inputTextColor: '#242424',
  inputBorderRadius: 3,
});

export const darkTheme = create({
  base: 'dark',
  brandTitle: 'iTwinUI',
  brandImage: itwinImageDark,

  colorPrimary: '#0071B8',
  colorSecondary: '#0071B8',

  // UI
  appBg: '#242b2e',
  appContentBg: '#333c41', // background-1
  appBorderColor: '#49555d',
  appBorderRadius: 9,

  // Typography
  fontBase:
    '"Noto Sans", "Open Sans", BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, system-ui, sans-serif',
  fontCode:
    '"Noto Sans Mono", ui-monospace, "SF Mono", SFMono-Regular, "DejaVu Sans Mono", Menlo, Consolas, monospace',

  // Text colors
  textColor: '#dbdbdb',

  // Toolbar default and active colors
  barTextColor: '#dbdbdb',
  barSelectedColor: '#008ee0',
  barBg: '#333c41',

  // Form colors
  inputBg: '#333c41',
  inputBorder: '#49555d',
  inputTextColor: '#dbdbdb',
  inputBorderRadius: 3,
});
