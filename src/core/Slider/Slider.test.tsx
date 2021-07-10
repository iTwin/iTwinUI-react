/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { render } from '@testing-library/react';
import React from 'react';

import { Slider } from './Slider';

const assertBaseElement = (container: HTMLElement) => {
  expect(container.querySelector('.iui-input')).toBeTruthy();
};

it('should render correctly in its most basic state', () => {
  const { container } = render(<Slider />);
  assertBaseElement(container);
});

// it('should render disabled component', () => {
//   const { container } = render(<Slider disabled />);
//   assertBaseElement(container);
//   expect((container.querySelector('input') as HTMLInputElement).disabled).toBe(
//     true,
//   );
// });

it('should set focus', () => {
  let element: HTMLDivElement | null = null;
  const onRef = (ref: HTMLDivElement) => {
    element = ref;
  };
  const { container } = render(<Slider ref={onRef} setFocus />);
  assertBaseElement(container);
  expect(element).toBeTruthy();
  expect(document.activeElement).toEqual(element);
});

it('should take class and style', () => {
  const { container } = render(
    <Slider className='my-class' style={{ width: 350 }} />,
  );
  assertBaseElement(container);
  const input = container.querySelector(
    'iui-slider-thumb.my-class',
  ) as HTMLElement;
  expect(input).toBeTruthy();
  // expect(input.style.width).toBe('350px');
});

// it.each(['small', 'large'] as const)(
//   'should render small and large sizes',
//   (size) => {
//     const { container } = render(<Slider min={20} max={60} value={40} />);
//     expect(container.querySelector(`.iui-input.iui-${size}`)).toBeTruthy();
//   },
// );
