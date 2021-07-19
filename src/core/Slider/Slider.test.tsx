/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Slider, focusThumb } from './Slider';

const createBoundingClientRect = (
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

/**
 * Setup default size for slider container to be used by all slider tests
 */
const getBoundingClientRect = Element.prototype.getBoundingClientRect;
const sliderContainerSize = createBoundingClientRect(10, 0, 1010, 60);
Element.prototype.getBoundingClientRect = () => sliderContainerSize;

afterAll(() => {
  Element.prototype.getBoundingClientRect = getBoundingClientRect;
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
it('should reset callbacks on value change', () => {
  const wrapper = render(<Slider values={defaultSingleValue} />);
  const { container } = wrapper;
  assertBaseElement(container);
  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  wrapper.rerender(<Slider values={[10, 20]} max={90} />);
});
it('should not render thumbs if no values are defined', () => {
  const { container } = render(<Slider values={[]} />);
  assertBaseElement(container);
  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeFalsy();
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
  expect(container.querySelector('.span-min')?.textContent).toBe('small');
  expect(container.querySelector('.span-max')?.textContent).toBe('big');
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
  const wrapper = render(<Slider values={defaultSingleValue} setFocus />);
  const { container } = wrapper;
  assertBaseElement(container);
  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(document.activeElement).toEqual(thumb);
  expect(
    (container.querySelector('.iui-tooltip') as HTMLDivElement).textContent,
  ).toBe('50');
});
it('should NOT show tooltip if visibility is overridden', () => {
  const wrapper = render(
    <Slider
      values={defaultSingleValue}
      setFocus
      tooltipProps={{ visible: false }}
    />,
  );
  const { container } = wrapper;
  assertBaseElement(container);
  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(document.activeElement).toEqual(thumb);
  expect(container.querySelector('.iui-tooltip')).toBeFalsy();
});
it('should show custom tooltip when focused', () => {
  const wrapper = render(
    <Slider
      values={defaultSingleValue}
      setFocus
      tooltipRenderer={(val) => {
        return `\$${val}.00`;
      }}
    />,
  );
  const { container } = wrapper;
  assertBaseElement(container);
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
it('should render custom tick marks as defined by ReactNode.', () => {
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
// available track segments 0--10--20--30--40--100
it('should render odd tracks based on even number of values and `auto` trackDisplayMode', () => {
  const { container } = render(<Slider values={[10, 20, 30, 40]} />);
  assertBaseElement(container);
  expect(
    container.querySelector('.iui-slider-component-container'),
  ).toBeTruthy();
  // segments 10-20, 30-40
  expect(container.querySelectorAll('.iui-slider-track').length).toBe(2);
});
it('should render 3 `even-segments` 0-10,20-30,40-100', () => {
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
it('should render 2 `odd-segments` 10-20, 30-40', () => {
  const { container } = render(
    <Slider trackDisplayMode='odd-segments' values={[10, 20, 30, 40]} />,
  );
  assertBaseElement(container);
  expect(
    container.querySelector('.iui-slider-component-container'),
  ).toBeTruthy();
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
it('should activate thumb on pointerDown', () => {
  const wrapper = render(<Slider values={defaultSingleValue} />);
  const { container } = wrapper;
  assertBaseElement(container);
  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(thumb.classList.contains('iui-active')).toBeFalsy();

  act(() => {
    fireEvent.pointerDown(thumb, {
      pointerId: 5,
      buttons: 1,
      clientX: 510,
    });
  });
  expect(thumb.classList.contains('iui-active'));
});

it('should process keystrokes when thumb has focus', () => {
  const handleOnChange = jest.fn();
  const wrapper = render(
    <Slider values={[50]} step={5} setFocus onChange={handleOnChange} />,
  );
  const { container } = wrapper;
  assertBaseElement(container);
  let thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(thumb.classList.contains('iui-active')).toBeFalsy();

  expect(document.activeElement).toEqual(thumb);
  expect(thumb.getAttribute('aria-valuenow')).toEqual('50');

  act(() => {
    fireEvent.keyDown(thumb, { key: 'ArrowLeft' });
  });
  thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb.getAttribute('aria-valuenow')).toEqual('45');

  act(() => {
    fireEvent.keyDown(thumb, { key: 'ArrowRight' });
  });
  thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb.getAttribute('aria-valuenow')).toEqual('50');
  act(() => {
    fireEvent.keyDown(thumb, { key: 'Home' });
  });
  thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb.getAttribute('aria-valuenow')).toEqual('0');
  act(() => {
    fireEvent.keyDown(thumb, { key: 'End' });
  });
  thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb.getAttribute('aria-valuenow')).toEqual('100');
  expect(handleOnChange).toHaveBeenCalledTimes(4);
});

it('focused thumb should process keystrokes limited by segment', () => {
  const wrapper = render(<Slider values={[40, 80]} step={5} setFocus />);
  const { container } = wrapper;
  assertBaseElement(container);
  let thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(thumb.classList.contains('iui-active')).toBeFalsy();

  expect(document.activeElement).toEqual(thumb);
  expect(thumb.getAttribute('aria-valuenow')).toEqual('40');

  act(() => {
    fireEvent.keyDown(thumb, { key: 'ArrowLeft' });
  });
  thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb.getAttribute('aria-valuenow')).toEqual('35');

  act(() => {
    fireEvent.keyDown(thumb, { key: 'ArrowRight' });
  });
  thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb.getAttribute('aria-valuenow')).toEqual('40');
  act(() => {
    fireEvent.keyDown(thumb, { key: 'Home' });
  });
  thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb.getAttribute('aria-valuenow')).toEqual('0');
  act(() => {
    fireEvent.keyDown(thumb, { key: 'End' });
  });
  thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb.getAttribute('aria-valuenow')).toEqual('75');
});

it('focused thumb allow crossing should process keystrokes limited by min max', () => {
  const handleOnChange = jest.fn();
  const wrapper = render(
    <Slider
      values={[40, 80]}
      step={5}
      setFocus
      thumbMode='allow-crossing'
      onChange={handleOnChange}
    />,
  );
  const { container } = wrapper;
  assertBaseElement(container);
  let thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(thumb.classList.contains('iui-active')).toBeFalsy();

  expect(document.activeElement).toEqual(thumb);
  expect(thumb.getAttribute('aria-valuenow')).toEqual('40');

  act(() => {
    fireEvent.keyDown(thumb, { key: 'ArrowLeft' });
  });
  thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb.getAttribute('aria-valuenow')).toEqual('35');

  act(() => {
    fireEvent.keyDown(thumb, { key: 'ArrowRight' });
  });
  thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb.getAttribute('aria-valuenow')).toEqual('40');
  act(() => {
    fireEvent.keyDown(thumb, { key: 'Home' });
  });
  thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb.getAttribute('aria-valuenow')).toEqual('0');
  act(() => {
    fireEvent.keyDown(thumb, { key: 'End' });
  });
  thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb.getAttribute('aria-valuenow')).toEqual('100');
  expect(handleOnChange).toHaveBeenCalledTimes(4);

  // triggering an update with same value should not trigger callback
  act(() => {
    fireEvent.keyDown(thumb, { key: 'End' });
  });
  expect(handleOnChange).toHaveBeenCalledTimes(4);
});

it('focused thumb on disabled slider should NOT process keystrokes', () => {
  const wrapper = render(<Slider values={[50]} step={5} disabled />);
  const { container } = wrapper;
  assertBaseElement(container);
  let thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(thumb.classList.contains('iui-active')).toBeFalsy();

  // force thumb to have focus
  thumb.focus();
  expect(thumb.getAttribute('aria-valuenow')).toEqual('50');

  act(() => {
    fireEvent.keyDown(thumb, { key: 'ArrowLeft' });
  });
  thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb.getAttribute('aria-valuenow')).toEqual('50');
});

it('thumb should show tooltip on hover', () => {
  const wrapper = render(<Slider values={defaultSingleValue} />);
  const { container } = wrapper;
  assertBaseElement(container);
  let thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(thumb.classList.contains('iui-active')).toBeFalsy();
  expect(container.querySelector('.iui-tooltip')).toBeFalsy();
  act(() => {
    fireEvent.mouseEnter(thumb);
  });
  expect(
    (container.querySelector('.iui-tooltip') as HTMLDivElement).textContent,
  ).toBe('50');
  act(() => {
    thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
    fireEvent.mouseLeave(thumb);
  });
});

it('thumb should show tooltip on focus', async () => {
  const wrapper = render(<Slider values={defaultSingleValue} />);
  const { container } = wrapper;
  assertBaseElement(container);
  let thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(thumb.classList.contains('iui-active')).toBeFalsy();
  expect(container.querySelector('.iui-tooltip')).toBeFalsy();
  act(() => {
    thumb.focus();
  });
  expect(
    (container.querySelector('.iui-tooltip') as HTMLDivElement).textContent,
  ).toBe('50');

  await act(async () => {
    thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
    thumb.blur();
  });
  // The tooltip, which was constructed earlier in test, remains but it is set to hidden.
  const tippyBox = container.querySelector('.tippy-box') as HTMLDivElement;
  expect((tippyBox.parentElement as HTMLElement).style.visibility).toEqual(
    'hidden',
  );
});
it('thumb props should be applied', () => {
  const thumbProps = () => {
    return {
      className: 'thumb-test-class',
      style: { backgroundColor: 'red' },
    };
  };
  const wrapper = render(
    <Slider values={defaultSingleValue} thumbProps={thumbProps} />,
  );
  const { container } = wrapper;
  assertBaseElement(container);
  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(thumb.classList.contains('thumb-test-class'));
  expect(thumb.style.backgroundColor).toEqual('red');
});

it('focus on specific thumb', () => {
  const wrapper = render(<Slider values={[50, 80]} step={5} />);
  const { container } = wrapper;
  assertBaseElement(container);
  const sliderContainer = container.querySelector(
    '.iui-slider-container',
  ) as HTMLDivElement;
  let thumbs = container.querySelectorAll('.iui-slider-thumb');

  focusThumb(sliderContainer, 1);
  focusThumb(sliderContainer, 1);
  expect(document.activeElement).toEqual(thumbs[1]);
  focusThumb(sliderContainer, 0);
  thumbs = container.querySelectorAll('.iui-slider-thumb');
  expect(document.activeElement).toEqual(thumbs[0]);
});

it('should move thumb when pointer down on rail', () => {
  const wrapper = render(
    <Slider
      values={defaultSingleValue}
      tickLabels={<span className='custom-tick-mark'>Custom</span>}
    />,
  );

  const { container } = wrapper;
  const sliderContainer = container.querySelector(
    '.iui-slider-container',
  ) as HTMLDivElement;
  assertBaseElement(container);

  expect(sliderContainer.getBoundingClientRect().left).toBe(10);
  expect(sliderContainer.getBoundingClientRect().right).toBe(1010);
  expect(sliderContainer.getBoundingClientRect().width).toBe(1000);

  /* fire a pointer down event 30% down the slider */
  act(() => {
    fireEvent.pointerDown(sliderContainer, {
      pointerId: 5,
      buttons: 1,
      clientX: 310,
    });
  });

  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(thumb.getAttribute('aria-valuenow')).toEqual('30');
});

it('should move thumb when pointer down on rail with change handler', () => {
  const handleOnChange = jest.fn();

  const wrapper = render(
    <Slider
      values={defaultSingleValue}
      tickLabels={<span className='custom-tick-mark'>Custom</span>}
      onChange={handleOnChange}
    />,
  );

  const { container } = wrapper;
  const sliderContainer = container.querySelector(
    '.iui-slider-container',
  ) as HTMLDivElement;
  assertBaseElement(container);

  expect(sliderContainer.getBoundingClientRect().left).toBe(10);
  expect(sliderContainer.getBoundingClientRect().right).toBe(1010);
  expect(sliderContainer.getBoundingClientRect().width).toBe(1000);

  /* fire a pointer down event 30% down the slider */
  act(() => {
    fireEvent.pointerDown(sliderContainer, {
      pointerId: 5,
      buttons: 1,
      clientX: 310,
    });
  });

  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(thumb.getAttribute('aria-valuenow')).toEqual('30');

  expect(handleOnChange).toBeCalled();
});

it('should move to closest step when pointer down on rail', () => {
  const wrapper = render(
    <Slider
      min={0}
      max={1}
      values={[0.5]}
      step={0.25}
      tickLabels={<span className='custom-tick-mark'>Custom</span>}
    />,
  );

  const { container } = wrapper;
  const sliderContainer = container.querySelector(
    '.iui-slider-container',
  ) as HTMLDivElement;
  assertBaseElement(container);

  /* fire a pointer down event 30% down the slider
   * 0 - .25 - .5 - .75 - 1 so closet to .3 is .25
   */
  act(() => {
    fireEvent.pointerDown(sliderContainer, {
      pointerId: 5,
      buttons: 1,
      clientX: 310,
    });
  });

  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(thumb.getAttribute('aria-valuenow')).toEqual('0.25');
});

it('should move closest thumb when pointer down on rail', () => {
  const wrapper = render(
    <Slider
      values={[10, 80]}
      tickLabels={<span className='custom-tick-mark'>Custom</span>}
    />,
  );

  const { container } = wrapper;
  const sliderContainer = container.querySelector(
    '.iui-slider-container',
  ) as HTMLDivElement;
  assertBaseElement(container);

  /* fire a pointer down event 70% down the the slider */
  act(() => {
    fireEvent.pointerDown(sliderContainer, {
      pointerId: 5,
      buttons: 1,
      clientX: 710,
    });
  });

  const thumbs = container.querySelectorAll('.iui-slider-thumb');
  expect(thumbs.length).toBe(2);

  expect(thumbs[0].getAttribute('aria-valuenow')).toEqual('10');
  expect(thumbs[1].getAttribute('aria-valuenow')).toEqual('70');
});

it('should activate thumb on pointerDown and move to closest step on move', () => {
  const handleOnUpdate = jest.fn();
  const wrapper = render(
    <Slider
      min={0}
      max={100}
      values={[20, 80]}
      step={1}
      tickLabels={<span className='custom-tick-mark'>Custom</span>}
      onUpdate={handleOnUpdate}
    />,
  );

  const { container } = wrapper;
  assertBaseElement(container);
  const sliderContainer = container.querySelector(
    '.iui-slider-container',
  ) as HTMLDivElement;
  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(thumb.classList.contains('iui-active')).toBeFalsy();

  act(() => {
    fireEvent.pointerDown(thumb, {
      pointerId: 5,
      buttons: 1,
      clientX: 210,
    });
  });
  expect(thumb.classList.contains('iui-active'));

  // moving to same location should not trigger update
  act(() => {
    fireEvent.pointerMove(sliderContainer, {
      pointerId: 5,
      buttons: 1,
      clientX: 210,
    });
  });

  /* move thumb to 40 value on slider */
  act(() => {
    fireEvent.pointerMove(sliderContainer, {
      pointerId: 5,
      buttons: 1,
      clientX: 410,
    });
  });
  expect(handleOnUpdate).toHaveBeenCalledTimes(1);

  act(() => {
    fireEvent.pointerUp(sliderContainer, {
      pointerId: 5,
      buttons: 1,
      clientX: 410,
    });
  });

  const thumbs = container.querySelectorAll('.iui-slider-thumb');
  expect(thumbs.length).toBe(2);

  expect(thumbs[0].getAttribute('aria-valuenow')).toEqual('40');
  expect(thumbs[1].getAttribute('aria-valuenow')).toEqual('80');
});

it('should activate thumb on pointerDown and move to closest step on move/ no update handler', () => {
  const wrapper = render(
    <Slider
      min={0}
      max={100}
      values={[20, 80]}
      step={1}
      tickLabels={<span className='custom-tick-mark'>Custom</span>}
    />,
  );

  const { container } = wrapper;
  assertBaseElement(container);
  const sliderContainer = container.querySelector(
    '.iui-slider-container',
  ) as HTMLDivElement;
  const thumb = container.querySelector('.iui-slider-thumb') as HTMLDivElement;
  expect(thumb).toBeTruthy();
  expect(thumb.classList.contains('iui-active')).toBeFalsy();

  act(() => {
    fireEvent.pointerDown(thumb, {
      pointerId: 5,
      buttons: 1,
      clientX: 210,
    });
  });
  expect(thumb.classList.contains('iui-active'));
  expect(sliderContainer.classList.contains('iui-grabbing'));

  // moving to same location should not trigger update
  act(() => {
    fireEvent.pointerMove(sliderContainer, {
      pointerId: 5,
      buttons: 1,
      clientX: 210,
    });
  });

  /* move thumb to 40 value on slider */
  act(() => {
    fireEvent.pointerMove(sliderContainer, {
      pointerId: 5,
      buttons: 1,
      clientX: 410,
    });
  });

  act(() => {
    fireEvent.pointerUp(sliderContainer, {
      pointerId: 5,
      buttons: 1,
      clientX: 410,
    });
  });

  const thumbs = container.querySelectorAll('.iui-slider-thumb');
  expect(thumbs.length).toBe(2);

  expect(thumbs[0].getAttribute('aria-valuenow')).toEqual('40');
  expect(thumbs[1].getAttribute('aria-valuenow')).toEqual('80');
});
