<p align="center">
  <img src="https://itwinplatformcdn.azureedge.net/iTwinUI/iTwinUI-logo.png" alt="iTwinUI logo" />
</p>

# iTwinUI-React

<div align="center">
  
  ![Build status](https://github.com/iTwin/iTwinUI-react/actions/workflows/build.yml/badge.svg?branch=main)

</div>

<div align="center">
  
  [What is iTwinUI-React](#what is iTwinUI-React?) • [Install](#install) • [Use](#use) • [Theming](#theming) • [Contributing](#contributing) • [Changelog](#changelog)

</div>

## What is iTwinUI-React?

iTwinUI-React is a library built on top of the [iTwinUI](https://github.com/iTwin/iTwinUI) library.
The goal of this project is to provide React components for using the styles and components from the core `iTwinUI` project.

---

## Install

```
npm install @bentley/itwinui-react
```

```
yarn add @bentley/itwinui-react
```

---

## Use
Import the component you want and start using it!

```jsx
import { Button } from '@bentley/itwinui-react';

const App = () => (
  <Button>Hello!</Button>
);
```
---

## Theming
By default, all components use the light theme but we also provide support for switching to dark theme in two different ways:

- Use `ThemeProvider` in your root component where you can pass one of the following values:
  - `light` (default)
  - `dark`
  - `os` (which respects the color scheme of the operating system)

```jsx
import { ThemeProvider } from '@bentley/itwinui-react';

const App = () => (
  <>
    <ThemeProvider theme='dark' />
    // Your code goes here.
  </>
);
```

- The `useTheme` hook also provides the same functionality as `ThemeProvider`.

```jsx
import { useTheme } from '@bentley/itwinui-react';

const App = () => {
  useTheme('dark');
  return (
    <>
      // Your code goes here.
    </>
  );
};
```

*Note: You only need to use one of these methods, and it only needs to be done once.*

---

## Contributing

This project is innersourced, so we welcome you to contribute to it and make this UI design system better. You can submit ideas or bugs by creating items in [our backlog](https://dev.azure.com/bentleycs/UX%20Design/_backlogs/backlog/iTwinUI/Features/?workitem=543453).
Please read our [CONTRIBUTING.md](https://dev.azure.com/bentleycs/UX%20Design/_git/iTwinUI-React?path=%2FCONTRIBUTING.md&_a=preview) for more information.

---

## Changelog
Read our [CHANGELOG.md](https://dev.azure.com/bentleycs/UX%20Design/_git/iTwinUI-React?path=%2FCHANGELOG.md&_a=preview) to find recent changes.
