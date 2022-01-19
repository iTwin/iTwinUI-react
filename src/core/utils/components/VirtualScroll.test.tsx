/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/

import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import VirtualScroll from './VirtualScroll';

beforeAll(() => {
  // return correct values for container 'scroller' and children
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockImplementation(function (this: Record<string, any>) {
      if (Object.values(this)[0].memoizedProps.id === 'scroller') {
        return { height: 400 } as DOMRect;
      }
      return { height: 40 } as DOMRect;
    });
});

it('should render only few elements out of big list', () => {
  const { container } = render(
    <div style={{ overflow: 'auto', height: 400 }} id='scroller'>
      <VirtualScroll
        itemsLength={1000}
        itemRenderer={(index) => (
          <div
            key={index}
            className='element'
            style={{ height: 40 }}
          >{`Element${index + 1}`}</div>
        )}
      />
    </div>,
  );
  const allVisibleElements = container.querySelectorAll('.element');
  expect(allVisibleElements.length).toBe(30);
  expect(allVisibleElements[0].textContent).toBe('Element1');
  expect(allVisibleElements[29].textContent).toBe('Element30');

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

it('should not crash with empty list items', () => {
  const { container } = render(
    <div style={{ overflow: 'auto', height: 400 }} id='scroller'>
      <VirtualScroll
        itemsLength={1000}
        itemRenderer={(index) => <div key={index} className='element' />}
      />
    </div>,
  );
  expect(container.querySelectorAll('.element').length).toBe(30);
});
