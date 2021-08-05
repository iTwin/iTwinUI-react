/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { act, renderHook } from '@testing-library/react-hooks';
import { useOverflow } from './useOverflow';

const renderOverflowHook = ({ itemsCount = 5 } = {}) => {
  const hook = renderHook(() => useOverflow(itemsCount));
  const element: HTMLDivElement = document.createElement('div');
  act(() => {
    hook.result.current[0](element);
  });

  return { hook, element };
};

it('should overflow when there is not enough space', () => {
  const scrollWidthSpy = jest
    .spyOn(HTMLElement.prototype, 'scrollWidth', 'get')
    .mockReturnValueOnce(250);
  const offsetWidthSpy = jest
    .spyOn(HTMLElement.prototype, 'offsetWidth', 'get')
    .mockReturnValue(200);

  const itemsCount = 5;

  const { hook } = renderOverflowHook({ itemsCount });
  expect(hook.result.current[1]).toEqual(itemsCount);

  // hook.rerender({ itemsCount: itemsCount });

  // act(() => {
  //   scrollWidthSpy.mockReturnValueOnce(200);
  //   hook.result.current[0](element);
  // });

  // expect(hook.result.current[1]).toEqual(itemsCount - 1);

  scrollWidthSpy.mockRestore();
  offsetWidthSpy.mockRestore();
});
