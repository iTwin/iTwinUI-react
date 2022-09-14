/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { act, render } from '@testing-library/react';

import { ThemeProvider } from './ThemeProvider';

describe('When rendering an element (with context)', () => {
  it('should render the element with default values', () => {
    const { container } = render(<ThemeProvider>Test</ThemeProvider>);
    const element = container.querySelector('div');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('iui-root');
    expect(element).toHaveAttribute('data-iui-theme', 'light');
    expect(element).toHaveAttribute('data-iui-contrast', 'default');
  });
});

describe('Fallback (without context)', () => {
  const expectLightTheme = (ownerDocument = document) => {
    expect(ownerDocument.documentElement.dataset.iuiTheme).toEqual('light');
  };

  const expectDarkTheme = () => {
    expect(document.documentElement.dataset.iuiTheme).toEqual('dark');
  };

  afterEach(() => {
    document.documentElement.removeAttribute('data-iui-theme');
    document.documentElement.removeAttribute('data-iui-contrast');
  });

  it('should respect os theme (light)', () => {
    window.matchMedia = jest.fn().mockReturnValueOnce({ matches: false });

    render(<ThemeProvider theme='os' />);
    expectLightTheme();
  });

  it('should respect os theme (dark)', () => {
    window.matchMedia = jest.fn().mockReturnValueOnce({ matches: true });

    render(<ThemeProvider theme='os' />);
    expectDarkTheme();
  });

  // TODO: fix or remove this test
  describe.skip('media query', () => {
    const originalMatchMedia = window.matchMedia;
    let matches = false;

    const changeOSTheme = (theme: 'dark' | 'light') => {
      matches = theme === 'dark';
    };

    beforeEach(() => {
      window.matchMedia = jest.fn().mockImplementation(() => {
        return {
          matches: matches,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        };
      });
    });

    afterEach(() => {
      window.matchMedia = originalMatchMedia;
      matches = false;
    });

    it('should observe changes to os theme', () => {
      render(<ThemeProvider theme='os' />);
      expectLightTheme();

      act(() => changeOSTheme('dark'));
      expectDarkTheme();

      act(() => changeOSTheme('light'));
      expectLightTheme();

      act(() => changeOSTheme('dark'));
      expectDarkTheme();
    });

    it('should stop observing when theme is not os anymore', () => {
      const { rerender } = render(<ThemeProvider theme='os' />);
      expectLightTheme();

      changeOSTheme('dark');
      expectDarkTheme();

      rerender(<ThemeProvider theme='dark' />);
      expectDarkTheme();

      changeOSTheme('light');
      expectDarkTheme();
    });
  });

  it('should set light theme', () => {
    render(<ThemeProvider theme='light' />);
    expectLightTheme();
  });

  it('should set light theme specifying ownerDocument', () => {
    const testDocument = new DOMParser().parseFromString(
      `<!DOCTYPE html><body><p>Test</p></body>`,
      'text/html',
    );
    render(
      <ThemeProvider
        theme='light'
        themeOptions={{ ownerDocument: testDocument }}
      />,
    );
    expectLightTheme(testDocument);
  });

  it('should set dark theme', () => {
    render(<ThemeProvider theme='dark' />);
    expectDarkTheme();
  });

  it('should set default theme', () => {
    render(<ThemeProvider />);
    expectLightTheme();

    render(<ThemeProvider theme='dark' />);
    expectDarkTheme();

    // should preserve dark theme since it was set before
    render(<ThemeProvider />);
    expectDarkTheme();
  });

  it('should set iui-root class on body', () => {
    render(<ThemeProvider />);
    expect(document.body.classList).toContain('iui-root');
  });

  it.each(['light', 'dark'] as const)(
    'should respect prefers-contrast query (%s)',
    (theme) => {
      window.matchMedia = jest.fn().mockReturnValue({ matches: true });
      render(<ThemeProvider theme={theme} />);
      expect(document.documentElement.dataset.iuiTheme).toEqual(theme);
      expect(document.documentElement.dataset.iuiContrast).toEqual(`high`);
    },
  );

  it.each(['light', 'dark'] as const)(
    'should support `themeOptions.highContrast` (%s)',
    (theme) => {
      render(
        <ThemeProvider theme={theme} themeOptions={{ highContrast: true }} />,
      );
      expect(document.documentElement.dataset.iuiContrast).toEqual(`high`);
    },
  );

  it.each([true, false])(
    'should override prefers-contrast query when `themeOptions.highContrast` is %s',
    (highContrast) => {
      window.matchMedia = jest.fn().mockReturnValue({ matches: true });
      render(<ThemeProvider theme={'light'} themeOptions={{ highContrast }} />);
      expect(document.documentElement.dataset.iuiContrast).toEqual(
        highContrast ? `high` : 'default',
      );
    },
  );
});
