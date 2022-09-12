/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import {
  PolymorphicComponentProps,
  PolymorphicForwardRefComponent,
  useMediaQuery,
} from '../utils';
import {
  useTheme,
  ThemeOptions,
  ThemeType,
  UseThemeProps,
} from '../utils/hooks/useTheme';

export type ThemeProviderProps<
  T extends React.ElementType = 'div'
> = PolymorphicComponentProps<T, UseThemeProps>;

/**
 * Component providing global styles that are required for all components and allows changing theme.
 */
export const ThemeProvider = React.forwardRef((props, ref) => {
  const {
    theme,
    children,
    themeOptions,
    as: Element = 'div',
    className,
    ...rest
  } = props;

  const hasChildren = React.Children.count(children) > 0;
  const parentContext = React.useContext(ThemeContext);
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const prefersHighContrast = useMediaQuery('(prefers-contrast: more)');

  const shouldApplyDark = theme === 'dark' || (theme === 'os' && prefersDark);
  const shouldApplyHC = themeOptions?.highContrast ?? prefersHighContrast;

  // only provide context if wrapped around children
  return hasChildren ? (
    <ThemeContext.Provider value={{ theme, themeOptions }}>
      <Element
        className={cx('iui-root', className)}
        data-iui-theme={shouldApplyDark ? 'dark' : 'light'}
        data-iui-contrast={shouldApplyHC ? 'high' : 'default'}
        ref={ref}
        {...rest}
      >
        {children}
      </Element>
    </ThemeContext.Provider>
  ) : (
    // otherwise just apply theme on the root using this wrapper component
    <ThemeLogicWrapper
      theme={theme ?? parentContext?.theme}
      themeOptions={themeOptions ?? parentContext?.themeOptions}
    />
  );
}) as PolymorphicForwardRefComponent<'div', UseThemeProps>;

export default ThemeProvider;

export const ThemeContext = React.createContext<
  | {
      theme?: ThemeType;
      themeOptions?: ThemeOptions;
    }
  | undefined
>(undefined);

const ThemeLogicWrapper = ({ theme, themeOptions }: UseThemeProps) => {
  useTheme(theme, themeOptions);
  return <></>;
};
