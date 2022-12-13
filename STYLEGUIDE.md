## Style guide

### Import only React and use members from there instead of separate imports

```jsx
// Good
import React from 'react';
```

```jsx
// Bad
import React, { useState } from 'react';
```

```jsx
// Bad
import * as React from 'react';
```

### Use type instead of interface

```jsx
// Good
export type AlertProps = { ... };
```

```jsx
// Bad
export interface IAlertProps {}
```

### Comment all props in multiline using jsdoc

```jsx
// Good
export type AlertProps = {
  /**
   * Type of the alert.
   * @default 'informational'
   */
  type?: 'positive' | 'warning' | 'negative' | 'informational';
  ...
```

```jsx

// Bad (single line)
export type AlertProps = {
  /** Type of the alert. */
  type?: 'positive' | 'warning' | 'negative' | 'informational';
  ...
```

```jsx
// Bad (no comment at all)
export type AlertProps = {
  type?: 'positive' | 'warning' | 'negative' | 'informational';
  ...
```

### Add description and example how to use the component

```jsx
// Good

/**
 * A small box to quickly grab user attention and communicate a brief message.
 * @example
 * <Alert>This is a basic alert.</Alert>
 */
export const Alert = (props: AlertProps) => {
  ...
```

```jsx
// Bad (no comments)

export const Alert = (props: AlertProps) => {
  ...
```

```jsx
// Bad (no example)

/**
 * A small box to quickly grab user attention and communicate a brief message.
 */
export const Alert = (props: AlertProps) => {
  ...
```

### Destruct props and set default values

```jsx
// Good
export const Alert = (props: AlertProps) => {
  const {
    children,
    className,
    type = 'informational',
    clickableText,
    onClick,
    onClose,
    style,
    isSticky = false,
  } = props;
  ...
```

```jsx
// Bad
export const Alert = ({
    children,
    className,
    type = 'informational',
    clickableText,
    onClick,
    onClose,
    style,
    isSticky = false,
  }: AlertProps) => {
  ...
```

### Use classnames object syntax for conditional classes

```jsx
// Good
<Button
  className={cx(
    'iui-button',
    { 'iui-invisible': styleType === 'borderless' },
    className,
  )}
  ...
```

```jsx
// Bad (using short circuiting)
<Button
  className={cx(
    'iui-button',
    styleType === 'borderless' && 'iui-invisible',
    className,
  )}
  ...
```

### Import icons

* #### In `packages/itwinui-react`, combine icon imports together from `src/core/utils`
```jsx
// Good
import { SvgClose, SvgInfoCircular} from '../utils';
```

```jsx
// Bad (separate imports)
import { SvgClose} from '../utils/icons/SvgClose';
import { SvgInfoCircular} from '../utils/icons/SvgInfoCircular';
```

* #### In other modules, import individual icons directly from the cjs module

```jsx
// Good
import SvgClose from '@itwin/itwinui-icons-react/cjs/icons/Close';
import SvgInfo from '@itwin/itwinui-icons-react/cjs/icons/Info';
```

```jsx
// Bad (using barrel)
import { SvgClose } from '@itwin/itwinui-icons-react';
```

```jsx
// Bad (using esm)
import SvgClose from '@itwin/itwinui-icons-react/esm/icons/Close';
```

```jsx
// Bad (combining imports)
import { SvgClose, SvgInfo } from '@itwin/itwinui-icons-react/cjs/icons';
```

### Import individual illustrations directly from the cjs module

```jsx
// Good
import Svg503 from '@itwin/itwinui-illustrations-react/cjs/illustrations/503';
import SvgError from '@itwin/itwinui-illustrations-react/cjs/illustrations/Error';
```

```jsx
// Bad (using barrel)
import { Svg503 } from '@itwin/itwinui-illustrations-react';
```

```jsx
// Bad (using esm)
import Svg503 from '@itwin/itwinui-illustrations-react/esm/illustrations/503';
```

```jsx
// Bad (combining imports)
import { Svg503, SvgError } from '@itwin/itwinui-illustrations-react/cjs/illustrations';
```

### Use `getDocument`, `getWindow` instead of direct access

```jsx
// Good
getWindow()?.clearTimeout(1);
```

```jsx
// Good
getDocument()?.createElement('div');
```

```jsx
// Bad
window.clearTimeout(1);
```

```jsx
// Bad
document.createElement('div');
```

### Use `useIsomorphicLayoutEffect` instead of `useLayoutEffect`

```jsx
// Good
useIsomorphicLayoutEffect(() => {});
```

```jsx
// Bad
React.useLayoutEffect(() => {});
```
