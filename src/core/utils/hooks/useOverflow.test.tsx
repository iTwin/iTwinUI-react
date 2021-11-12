/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { useOverflow } from './useOverflow';
import * as UseResizeObserver from './useResizeObserver';

const MockComponent = ({
  children,
  disableOverflow = false,
}: {
  children: React.ReactNode[];
  disableOverflow?: boolean;
}) => {
  const [overflowRef, visibleCount] = useOverflow(children, disableOverflow);
  return <div ref={overflowRef}>{children.slice(0, visibleCount)}</div>;
};

it('should overflow when there is not enough space', async () => {
  const scrollWidthSpy = jest
    .spyOn(HTMLDivElement.prototype, 'scrollWidth', 'get')
    .mockReturnValueOnce(120)
    .mockReturnValue(100);
  const offsetWidthSpy = jest
    .spyOn(HTMLDivElement.prototype, 'offsetWidth', 'get')
    .mockReturnValue(100);
  const childOffsetWidthSpy = jest
    .spyOn(HTMLSpanElement.prototype, 'offsetWidth', 'get')
    .mockReturnValue(25);

  const { container } = render(
    <MockComponent>
      {[...Array(5)].map((_, i) => (
        <span key={i}>Test {i}</span>
      ))}
    </MockComponent>,
  );

  await waitFor(() => {
    expect(container.querySelectorAll('span')).toHaveLength(4);
  });

  scrollWidthSpy.mockRestore();
  offsetWidthSpy.mockRestore();
  childOffsetWidthSpy.mockRestore();
});

it('should overflow when there is not enough space but container fits 30 items', async () => {
  const scrollWidthSpy = jest
    .spyOn(HTMLDivElement.prototype, 'scrollWidth', 'get')
    .mockReturnValueOnce(300)
    .mockReturnValueOnce(600)
    .mockReturnValue(300);
  const offsetWidthSpy = jest
    .spyOn(HTMLDivElement.prototype, 'offsetWidth', 'get')
    .mockReturnValue(300);
  const childOffsetWidthSpy = jest
    .spyOn(HTMLSpanElement.prototype, 'offsetWidth', 'get')
    .mockReturnValue(10);

  const { container } = render(
    <MockComponent>
      {[...Array(100)].map((_, i) => (
        <span key={i}>Test {i}</span>
      ))}
    </MockComponent>,
  );

  await waitFor(() => {
    expect(container.querySelectorAll('span')).toHaveLength(30);
  });

  scrollWidthSpy.mockRestore();
  offsetWidthSpy.mockRestore();
  childOffsetWidthSpy.mockRestore();
});

it('should restore hidden items when space is available again', async () => {
  let onResizeFn: (size: DOMRectReadOnly) => void = jest.fn();
  jest
    .spyOn(UseResizeObserver, 'useResizeObserver')
    .mockImplementation((onResize) => {
      onResizeFn = onResize;
      return [
        jest.fn(),
        ({ disconnect: jest.fn() } as unknown) as ResizeObserver,
      ];
    });
  const scrollWidthSpy = jest
    .spyOn(HTMLDivElement.prototype, 'scrollWidth', 'get')
    .mockReturnValueOnce(120)
    .mockReturnValue(100);
  const offsetWidthSpy = jest
    .spyOn(HTMLDivElement.prototype, 'offsetWidth', 'get')
    .mockReturnValue(100);
  const childOffsetWidthSpy = jest
    .spyOn(HTMLSpanElement.prototype, 'offsetWidth', 'get')
    .mockReturnValue(25);

  const { container, rerender } = render(
    <MockComponent>
      {[...Array(5)].map((_, i) => (
        <span key={i}>Test {i}</span>
      ))}
    </MockComponent>,
  );

  await waitFor(() => {
    expect(container.querySelectorAll('span')).toHaveLength(4);
  });

  scrollWidthSpy.mockReturnValue(125);
  offsetWidthSpy.mockReturnValue(125);
  rerender(
    <MockComponent>
      {[...Array(5)].map((_, i) => (
        <span key={i}>Test {i}</span>
      ))}
    </MockComponent>,
  );
  onResizeFn({ width: 125 } as DOMRectReadOnly);

  await waitFor(() => {
    expect(container.querySelectorAll('span')).toHaveLength(5);
  });

  scrollWidthSpy.mockRestore();
  offsetWidthSpy.mockRestore();
  childOffsetWidthSpy.mockRestore();
});

it('should not overflow when disabled', () => {
  const scrollWidthSpy = jest
    .spyOn(HTMLElement.prototype, 'scrollWidth', 'get')
    .mockReturnValueOnce(120)
    .mockReturnValue(100);
  const offsetWidthSpy = jest
    .spyOn(HTMLElement.prototype, 'offsetWidth', 'get')
    .mockReturnValue(100);

  const { container } = render(
    <MockComponent disableOverflow>
      {[...Array(5)].map((_, i) => (
        <span key={i}>Test {i}</span>
      ))}
    </MockComponent>,
  );

  expect(container.querySelectorAll('span')).toHaveLength(5);

  scrollWidthSpy.mockRestore();
  offsetWidthSpy.mockRestore();
});
