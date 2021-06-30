/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/

import { renderHook } from '@testing-library/react-hooks';
import { useResizeObserver } from './useResizeObserver';

const observe = jest.fn();
const disconnect = jest.fn();

beforeAll(() => {
  jest.mock('./useResizeObserver', () => () => ({
    default: jest.fn().mockImplementation(() => ({ observe, disconnect })),
  }));

  window.ResizeObserver = jest.fn(() => ({
    observe,
    disconnect,
    unobserve: jest.fn(),
  }));
});

const renderResizeObserver = (size = { width: 50, height: 50 }) => {
  const element: HTMLDivElement = document.createElement('div');
  Object.defineProperties(element, {
    getBoundingClientRect: { value: () => size },
  });
  const ref = { current: element };

  return renderHook(() => useResizeObserver(ref));
};

it('should initialize ResizeObserver correctly', () => {
  const mockSize = { width: 100, height: 100 };
  const { result } = renderResizeObserver(mockSize);
  expect(result.current).toMatchObject(mockSize);
  expect(observe).toHaveBeenCalled();
});

it('should disconnect before unmounting', () => {
  const { unmount } = renderResizeObserver();
  unmount();
  expect(disconnect).toHaveBeenCalled();
});
