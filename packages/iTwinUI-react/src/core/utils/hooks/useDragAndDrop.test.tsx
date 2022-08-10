/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import useDragAndDrop from './useDragAndDrop';

const DOMMatrixMock = jest.fn();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).DOMMatrix = DOMMatrixMock;

const TestComponent = (props: { isVisible?: boolean }) => {
  const { isVisible = true } = props;
  const ref = React.useRef<HTMLDivElement>(null);
  const { onPointerDown, transform } = useDragAndDrop(ref);

  return (
    <>
      {isVisible && (
        <div ref={ref} onPointerDown={onPointerDown} style={{ transform }} />
      )}
    </>
  );
};

beforeEach(() => {
  DOMMatrixMock.mockReturnValue({ m41: 0, m42: 0 });
});

afterAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).DOMMatrix = undefined;
});

it('should handle drag', () => {
  const { container } = render(<TestComponent />);

  const element = container.firstChild as HTMLDivElement;
  fireEvent.pointerDown(element, { clientX: 100, clientY: 100, button: 0 });
  fireEvent.pointerMove(element, { clientX: 200, clientY: 200 });
  expect(element.style.transform).toBe('translate(100px, 100px)');
  fireEvent.pointerUp(element);
  expect(element.style.transform).toBe('translate(100px, 100px)');

  // Should take previous transform into account.
  DOMMatrixMock.mockReturnValue({ m41: 100, m42: 100 });
  fireEvent.pointerDown(element, { clientX: 100, clientY: 100, button: 0 });
  fireEvent.pointerMove(element, { clientX: 200, clientY: 200 });
  expect(element.style.transform).toBe('translate(200px, 200px)');
  fireEvent.pointerUp(element);
  expect(element.style.transform).toBe('translate(200px, 200px)');
});

it('should preserve transform value after element was removed and brought back to the DOM', () => {
  const { container, rerender } = render(<TestComponent />);

  let element = container.firstChild as HTMLDivElement;
  fireEvent.pointerDown(element, { clientX: 100, clientY: 100, button: 0 });
  fireEvent.pointerMove(element, { clientX: 200, clientY: 200 });
  expect(element.style.transform).toBe('translate(100px, 100px)');
  fireEvent.pointerUp(element);
  expect(element.style.transform).toBe('translate(100px, 100px)');

  rerender(<TestComponent isVisible={false} />);

  rerender(<TestComponent />);
  element = container.firstChild as HTMLDivElement;
  expect(element.style.transform).toBe('translate(100px, 100px)');
});

it('should do nothing for mouse right click', () => {
  const { container } = render(<TestComponent />);

  const element = container.firstChild as HTMLDivElement;
  fireEvent.pointerDown(element, { clientX: 100, clientY: 100, button: 2 });
  fireEvent.pointerMove(element, { clientX: 200, clientY: 200 });
  expect(element.style.transform).toBe('');
  fireEvent.pointerUp(element);
  expect(element.style.transform).toBe('');
});
