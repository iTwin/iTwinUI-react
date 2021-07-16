/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Slider } from './Slider';

export const createBoundingClientRect = (
  left: number,
  top: number,
  right: number,
  bottom: number,
): DOMRect => ({
  left,
  top,
  right,
  bottom,
  width: right - left,
  height: bottom - top,
  x: left,
  y: top,
  toJSON: () => '',
});

const defaultSingleValue = [50];

const assertBaseElement = (container: HTMLElement) => {
  expect(
    container.querySelector('.iui-slider-component-container'),
  ).toBeTruthy();
};

it('should render correctly in its most basic state', () => {
  const { container } = render(<Slider values={defaultSingleValue} />);
  assertBaseElement(container);
  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(thumb.getAttribute('aria-disabled')).toEqual('false');
});
it('should render disabled component', () => {
  const { container } = render(<Slider values={defaultSingleValue} disabled />);
  assertBaseElement(container);
  expect(
    container.querySelector('.iui-slider-component-container.iui-disabled'),
  ).toBeTruthy();
  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(thumb.getAttribute('aria-disabled')).toEqual('true');
});
it('should render min max labels by default', () => {
  const { container } = render(<Slider values={defaultSingleValue} />);
  assertBaseElement(container);
  expect(
    container.querySelector('.iui-slider-component-container'),
  ).toBeTruthy();
  expect(
    (container.querySelector('.iui-slider-min') as HTMLSpanElement).textContent,
  ).toBe('0');
  expect(
    (container.querySelector('.iui-slider-max') as HTMLSpanElement).textContent,
  ).toBe('100');
});
it('should render specified min max labels', () => {
  const { container } = render(
    <Slider values={defaultSingleValue} min={5} max={55} />,
  );
  assertBaseElement(container);
  expect(
    container.querySelector('.iui-slider-component-container'),
  ).toBeTruthy();
  expect(
    (container.querySelector('.iui-slider-min') as HTMLSpanElement).textContent,
  ).toBe('5');
  expect(
    (container.querySelector('.iui-slider-max') as HTMLSpanElement).textContent,
  ).toBe('55');
});
it('should render provided min max labels', () => {
  const { container } = render(
    <Slider values={defaultSingleValue} maxLabel='big' minLabel='small' />,
  );
  assertBaseElement(container);
  expect(
    container.querySelector('.iui-slider-component-container'),
  ).toBeTruthy();
  expect(
    (container.querySelector('.iui-slider-min') as HTMLSpanElement).textContent,
  ).toBe('small');
  expect(
    (container.querySelector('.iui-slider-max') as HTMLSpanElement).textContent,
  ).toBe('big');
});
it('should render provided min max label nodes', () => {
  const { container } = render(
    <Slider
      values={defaultSingleValue}
      maxLabel={<span className='span-max'>big</span>}
      minLabel={<span className='span-min'>small</span>}
    />,
  );
  assertBaseElement(container);
  expect(
    container.querySelector('.iui-slider-component-container'),
  ).toBeTruthy();
  expect(
    (container.querySelector('.span-min') as HTMLSpanElement).textContent,
  ).toBe('small');
  expect(
    (container.querySelector('.span-max') as HTMLSpanElement).textContent,
  ).toBe('big');
});
it('should render provided min max label nodes', () => {
  const { container } = render(
    <Slider
      values={defaultSingleValue}
      maxLabel={<span className='span-max'>big</span>}
      minLabel={<span className='span-min'>small</span>}
    />,
  );
  assertBaseElement(container);
  expect(
    container.querySelector('.iui-slider-component-container'),
  ).toBeTruthy();
  expect(
    (container.querySelector('.span-min') as HTMLSpanElement).textContent,
  ).toBe('small');
  expect(
    (container.querySelector('.span-max') as HTMLSpanElement).textContent,
  ).toBe('big');
});
it('should set focus', () => {
  let element: HTMLDivElement | null = null;
  const onRef = (ref: HTMLDivElement) => {
    element = ref;
  };
  const { container } = render(
    <Slider ref={onRef} values={defaultSingleValue} setFocus />,
  );
  assertBaseElement(container);
  expect(element).toBeTruthy();
  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(document.activeElement).toEqual(thumb);
});
it('should show tooltip when focused', () => {
  let element: HTMLDivElement | null = null;
  const onRef = (ref: HTMLDivElement) => {
    element = ref;
  };
  const wrapper = render(
    <Slider ref={onRef} values={defaultSingleValue} setFocus />,
  );
  const { container } = wrapper;
  assertBaseElement(container);
  expect(element).toBeTruthy();
  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(document.activeElement).toEqual(thumb);
  expect(
    (container.querySelector('.iui-tooltip') as HTMLDivElement).textContent,
  ).toBe('50');
});
it('should NOT show tooltip if visibility is overridden', () => {
  let element: HTMLDivElement | null = null;
  const onRef = (ref: HTMLDivElement) => {
    element = ref;
  };
  const wrapper = render(
    <Slider
      ref={onRef}
      values={defaultSingleValue}
      setFocus
      tooltipProps={{ visible: false }}
    />,
  );
  const { container } = wrapper;
  assertBaseElement(container);
  expect(element).toBeTruthy();
  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(document.activeElement).toEqual(thumb);
  expect(container.querySelector('.iui-tooltip')).toBeFalsy();
});
it('should show custom tooltip when focused', () => {
  let element: HTMLDivElement | null = null;
  const onRef = (ref: HTMLDivElement) => {
    element = ref;
  };
  const wrapper = render(
    <Slider
      ref={onRef}
      values={defaultSingleValue}
      setFocus
      tooltipRenderer={(val) => {
        return `\$${val}.00`;
      }}
    />,
  );
  const { container } = wrapper;
  assertBaseElement(container);
  expect(element).toBeTruthy();
  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(document.activeElement).toEqual(thumb);
  expect(
    (container.querySelector('.iui-tooltip') as HTMLDivElement).textContent,
  ).toBe('$50.00');
});
it('should take class and style', () => {
  const { container } = render(
    <Slider
      values={defaultSingleValue}
      className='my-class'
      style={{ width: '350px' }}
    />,
  );
  const slider = container.querySelector(
    '.iui-slider-component-container.my-class',
  ) as HTMLDivElement;
  expect(slider).toBeTruthy();
  expect(slider.style.width).toBe('350px');
});
it('should take railContainerProps', () => {
  // common use case is when custom thumb is bigger than default and we must change left/right margin
  const railContainerProps = { style: { margin: '0 8px' } };
  const { container } = render(
    <Slider
      values={defaultSingleValue}
      railContainerProps={railContainerProps}
    />,
  );
  const railContainer = container.querySelector(
    '.iui-slider-container',
  ) as HTMLDivElement;
  expect(railContainer).toBeTruthy();
  expect(railContainer.style.marginLeft).toBe('8px');
  expect(railContainer.style.marginRight).toBe('8px');
});
it('should render tick marks', () => {
  const { container } = render(
    <Slider
      values={defaultSingleValue}
      tickLabels={['0', '25', '50', '75', '100']}
    />,
  );
  assertBaseElement(container);
  expect(
    container.querySelector('.iui-slider-component-container'),
  ).toBeTruthy();
  expect(container.querySelectorAll('.iui-slider-tick').length).toBe(5);
});
it('should render custom tick marks', () => {
  const { container } = render(
    <Slider
      values={defaultSingleValue}
      tickLabels={<span className='custom-tick-mark'>Custom</span>}
    />,
  );
  assertBaseElement(container);
  expect(
    container.querySelector('.iui-slider-component-container'),
  ).toBeTruthy();
  expect(container.querySelector('.custom-tick-mark')).toBeTruthy();
});
it('should render single track', () => {
  const { container } = render(<Slider values={defaultSingleValue} />);
  assertBaseElement(container);
  expect(
    container.querySelector('.iui-slider-component-container'),
  ).toBeTruthy();
  expect(container.querySelectorAll('.iui-slider-track').length).toBe(1);
});
// segments 0--10--20--30--40-----100
it('should render odd tracks based in even number of values and `auto` trackDisplayMode', () => {
  const { container } = render(<Slider values={[10, 20, 30, 40]} />);
  assertBaseElement(container);
  expect(
    container.querySelector('.iui-slider-component-container'),
  ).toBeTruthy();
  // segments 10-20, 30-40
  expect(container.querySelectorAll('.iui-slider-track').length).toBe(2);
});
it('should render 3 even track `even-segments` trackDisplayMode', () => {
  const { container } = render(
    <Slider trackDisplayMode='even-segments' values={[10, 20, 30, 40]} />,
  );
  assertBaseElement(container);
  expect(
    container.querySelector('.iui-slider-component-container'),
  ).toBeTruthy();
  // segments 0-10,20-30,40-100
  expect(container.querySelectorAll('.iui-slider-track').length).toBe(3);
});
it('should render 2 odd track `even-segments` trackDisplayMode', () => {
  const { container } = render(
    <Slider trackDisplayMode='odd-segments' values={[10, 20, 30, 40]} />,
  );
  assertBaseElement(container);
  expect(
    container.querySelector('.iui-slider-component-container'),
  ).toBeTruthy();
  // segments 10-20, 30-40
  expect(container.querySelectorAll('.iui-slider-track').length).toBe(2);
});
it('should not render track', () => {
  const { container } = render(
    <Slider trackDisplayMode='none' values={defaultSingleValue} />,
  );
  assertBaseElement(container);
  expect(
    container.querySelector('.iui-slider-component-container'),
  ).toBeTruthy();
  expect(container.querySelectorAll('.iui-slider-track').length).toBe(0);
});
it('should render custom tick marks', () => {
  const { container } = render(
    <Slider
      values={defaultSingleValue}
      tickLabels={<span className='custom-tick-mark'>Custom</span>}
    />,
  );
  assertBaseElement(container);
  expect(
    container.querySelector('.iui-slider-component-container'),
  ).toBeTruthy();
  expect(container.querySelector('.custom-tick-mark')).toBeTruthy();
});

it('should activate thumb on pointerDown', () => {
  let element: HTMLDivElement | null = null;
  const onRef = (ref: HTMLDivElement) => {
    element = ref;
  };
  const wrapper = render(<Slider ref={onRef} values={defaultSingleValue} />);
  const { container } = wrapper;
  assertBaseElement(container);
  expect(element).toBeTruthy();
  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(thumb.classList.contains('iui-active')).toBeFalsy();

  act(() => {
    fireEvent.pointerDown(thumb);
  });
  expect(thumb.classList.contains('iui-active'));
});

// it('should render handle click on rail', () => {
//   const sliderContainerSize = createBoundingClientRect(10, 0, 1010, 60);
//   const getBoundingClientRect = Element.prototype.getBoundingClientRect;
//   Element.prototype.getBoundingClientRect = () => sliderContainerSize;
//
//   const wrapper = render(
//     <Slider
//       values={defaultSingleValue}
//       tickLabels={<span className='custom-tick-mark'>Custom</span>}
//     />,
//   );
//
//   const { container } = wrapper;
//   const slideContainer = container.querySelector(
//     '.iui-slider-container',
//   ) as HTMLDivElement;
//   assertBaseElement(container);
//
//   expect(slideContainer.getBoundingClientRect().left).toBe(10);
//   expect(slideContainer.getBoundingClientRect().right).toBe(1010);
//   expect(slideContainer.getBoundingClientRect().width).toBe(1000);
//
//   const pointerEvent = new PointerEvent('pointerdown', {
//     bubbles: true,
//     cancelable: true,
//     composed: true,
//     pointerId: 42,
//     pointerType: 'pen',
//     clientX: 310,
//     clientY: 20,
//   } as Partial<EventInit>);
//
//   act(() => {
//     fireEvent(slideContainer, pointerEvent);
//   });
//   wrapper.debug();
//   Element.prototype.getBoundingClientRect = getBoundingClientRect;
// });
