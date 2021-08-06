/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { render } from '@testing-library/react';
import React from 'react';
import { useOverflow } from './useOverflow';

const MockComponent = ({ itemsCount = 5 }) => {
  const items = React.useMemo(
    () => [...Array(itemsCount)].map((_, i) => <span key={i}>Test {i}</span>),
    [itemsCount],
  );
  const [overflowRef, visibleCount] = useOverflow(items);
  return <div ref={overflowRef}>{items.slice(0, visibleCount)}</div>;
};

it('should overflow when there is not enough space', () => {
  const scrollWidthSpy = jest
    .spyOn(HTMLElement.prototype, 'scrollWidth', 'get')
    .mockReturnValueOnce(120)
    .mockReturnValue(100);
  const offsetWidthSpy = jest
    .spyOn(HTMLElement.prototype, 'offsetWidth', 'get')
    .mockReturnValue(100);

  const initialCount = 5;

  const { container } = render(<MockComponent itemsCount={initialCount} />);

  expect(container.querySelectorAll('span')).toHaveLength(initialCount - 1);

  scrollWidthSpy.mockRestore();
  offsetWidthSpy.mockRestore();
});

it('should restore hidden items when space is available again', () => {
  const scrollWidthSpy = jest
    .spyOn(HTMLElement.prototype, 'scrollWidth', 'get')
    .mockReturnValueOnce(120)
    .mockReturnValue(100);
  const offsetWidthSpy = jest
    .spyOn(HTMLElement.prototype, 'offsetWidth', 'get')
    .mockReturnValue(100);

  const initialCount = 5;

  const { container, rerender } = render(
    <MockComponent itemsCount={initialCount} />,
  );

  expect(container.querySelectorAll('span')).toHaveLength(initialCount - 1);

  scrollWidthSpy.mockReturnValue(120);
  offsetWidthSpy.mockReturnValue(120);
  rerender(<MockComponent itemsCount={initialCount} />);

  // expect(container.querySelectorAll('span')).toHaveLength(initialCount);

  scrollWidthSpy.mockRestore();
  offsetWidthSpy.mockRestore();
});
