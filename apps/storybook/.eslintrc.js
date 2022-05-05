const preset = require('configs/eslint-preset');

module.exports = {
  ...preset,
  extends: [...preset.extends, 'plugin:storybook/recommended'],
  ignorePatterns: [
    '**/node_modules/**',
    '**/cypress/**',
    '.eslintrc.js',
    'scripts/**',
  ],
};
