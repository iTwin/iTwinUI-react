/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/

import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import VirtualScroll from './VirtualScroll';

const component = (
  <div style={{ overflow: 'auto', height: 400 }} id='scroller'>
    <VirtualScroll>
      {new Array(1000).fill(null).map((_, i) => {
        return (
          <div key={i} className='element' style={{ height: 40 }}>{`Element${
            i + 1
          }`}</div>
        );
      })}
    </VirtualScroll>
  </div>
);

const renderComponent = () => {
  return render(component);
};

beforeAll(() => {
  // return correct values for container 'scroller' and children
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getBoundingClientRectMock(this: Record<string, any>) {
    if (Object.values(this)[0].memoizedProps.id === 'scroller') {
      return { height: 400 } as DOMRect;
    }
    return { height: 40 } as DOMRect;
  }
  jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockImplementation(getBoundingClientRectMock);
});

it('should render only few elements out of big list', () => {
  const { container } = renderComponent();
  expect(container.querySelectorAll('.element').length).toBe(30);
  expect(container.querySelector('.element')?.textContent).toBe('Element1');

  const scrollable = container.querySelector('#scroller') as HTMLElement;
  fireEvent.scroll(scrollable, {
    target: { scrollTop: 160 },
  });
  expect(container.querySelectorAll('.element').length).toBe(30);
  // first visible element is number 5
  expect(container.querySelector('.element')?.textContent).toBe('Element5');

  fireEvent.scroll(scrollable, {
    target: { scrollTop: 400 },
  });
  expect(container.querySelectorAll('.element').length).toBe(30);
  // first visible element is number 11
  expect(container.querySelector('.element')?.textContent).toBe('Element11');

  // scroll up
  fireEvent.scroll(scrollable, {
    target: { scrollTop: 0 },
  });
  expect(container.querySelectorAll('.element').length).toBe(30);
  // first visible element is number 1
  expect(container.querySelector('.element')?.textContent).toBe('Element1');

  // scroll to the end
  fireEvent.scroll(scrollable, {
    target: { scrollTop: 39600 },
  });
  expect(container.querySelectorAll('.element').length).toBe(10);
  // first visible element is number 991
  expect(container.querySelector('.element')?.textContent).toBe('Element991');
});
