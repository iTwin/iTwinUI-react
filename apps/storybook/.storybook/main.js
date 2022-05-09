/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: { measure: false, outline: false },
    },
    'storybook-dark-mode/register',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: /\.stories\.tsx?$/,
        },
        loaderOptions: {
          parser: 'typescript',
        },
      },
    },
    './hcThemeAddon/register.js',
    // need to wait for https://github.com/storybookjs/storybook/pull/17997
    // '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
};
