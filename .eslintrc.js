/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
module.exports = {
  parser: "@typescript-eslint/parser",
  // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020,
    // Allows for the parsing of modern ECMAScript features
    sourceType: "module",
    // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX

    }
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use

    }
  },
  extends: ["plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended", "prettier", "plugin:prettier/recommended", "plugin:storybook/recommended"],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "prettier/prettier": [1],
    "react/prop-types": "off",
    "react/function-component-definition": [1, {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function"
    }],
    "@typescript-eslint/no-empty-function": ["error", {
      "allow": ["arrowFunctions"]
    }],
    "react/display-name": "off",
    "react/self-closing-comp": [1],
    "curly": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-restricted-imports": ["error", ".."]
  }
};