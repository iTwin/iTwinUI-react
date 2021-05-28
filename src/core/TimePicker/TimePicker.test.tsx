/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { TimePicker } from './TimePicker';

it('should display passed time', () => {
  const { container } = render(
    <TimePicker date={new Date(2020, 0, 5, 11, 55)} />,
  );
  const hour = container.querySelector(
    '.iui-time:first-child .iui-selected',
  ) as HTMLElement;
  expect(hour).toBeTruthy();
  expect(hour.textContent).toBe('11');

  const minutes = container.querySelector(
    '.iui-time:last-child .iui-selected',
  ) as HTMLElement;
  expect(minutes).toBeTruthy();
  expect(minutes.textContent).toBe('55');
});

it('should not display selected time', () => {
  const { container } = render(<TimePicker />);
  const time = container.querySelector(
    '.iui-time .iui-selected',
  ) as HTMLElement;
  expect(time).toBeFalsy();
});

it('should return selected time', () => {
  const onClick = jest.fn();
  const { container, getByText } = render(
    <TimePicker
      date={new Date(2020, 5, 5, 14, 21, 33)}
      precision='seconds'
      onChange={onClick}
    />,
  );
  let selectedHours = container.querySelector(
    '.iui-time:first-child .iui-selected',
  ) as HTMLElement;
  expect(selectedHours.textContent).toBe('14');
  const newHour = getByText('17', { selector: '.iui-time:first-child li' });
  newHour.click();
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 5, 5, 17, 21, 33));
  selectedHours = container.querySelector(
    '.iui-time:first-child .iui-selected',
  ) as HTMLElement;
  expect(selectedHours.textContent).toBe('17');
});

it('should navigate with keyboard', () => {
  const onClick = jest.fn();
  const { container } = render(
    <TimePicker
      date={new Date(2020, 1, 1, 22, 11)}
      onChange={onClick}
      setFocusHour
    />,
  );
  let selectedHours = container.querySelector(
    '.iui-time:first-child .iui-selected',
  ) as HTMLElement;
  expect(selectedHours.textContent).toBe('22');
  expect(document.activeElement).toEqual(selectedHours);

  // go down
  fireEvent.keyDown(selectedHours, { key: 'ArrowDown' });
  let nextHour = selectedHours.nextSibling;
  expect(nextHour?.textContent).toBe('23');
  expect(document.activeElement).toEqual(nextHour);

  // go up
  fireEvent.keyDown(nextHour as Node, { key: 'ArrowUp' });
  expect(document.activeElement).toEqual(selectedHours);

  // go up
  fireEvent.keyDown(selectedHours, { key: 'ArrowUp' });
  nextHour = selectedHours.previousSibling;
  expect(nextHour?.textContent).toBe('21');
  expect(document.activeElement).toEqual(nextHour);

  // select
  fireEvent.keyDown(nextHour as Node, { key: 'Enter' });
  selectedHours = container.querySelector(
    '.iui-time:first-child .iui-selected',
  ) as HTMLElement;
  expect(selectedHours.textContent).toBe('21');
  expect(document.activeElement).toEqual(selectedHours);
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 1, 1, 21, 11));

  // go to minutes
  let selectedMinutes = container.querySelector(
    '.iui-time:last-child .iui-selected',
  ) as HTMLElement;
  selectedMinutes.focus();
  expect(selectedMinutes.textContent).toBe('11');
  expect(document.activeElement).toEqual(selectedMinutes);

  // go up
  fireEvent.keyDown(selectedMinutes, { key: 'ArrowUp' });
  let nextMinute = selectedMinutes.previousSibling as Node;
  expect(nextMinute?.textContent).toBe('10');
  expect(document.activeElement).toEqual(nextMinute);

  // go up
  fireEvent.keyDown(nextMinute, { key: 'ArrowUp' });
  nextMinute = nextMinute.previousSibling as Node;
  expect(nextMinute?.textContent).toBe('09');
  expect(document.activeElement).toEqual(nextMinute);

  // go down
  fireEvent.keyDown(nextMinute, { key: 'ArrowDown' });
  nextMinute = nextMinute.nextSibling as Node;
  expect(nextMinute?.textContent).toBe('10');
  expect(document.activeElement).toEqual(nextMinute);

  // select
  fireEvent.keyDown(nextMinute, { key: ' ' });
  selectedMinutes = container.querySelector(
    '.iui-time:last-child .iui-selected',
  ) as HTMLElement;
  expect(selectedMinutes.textContent).toBe('10');
  expect(document.activeElement).toEqual(selectedMinutes);
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 1, 1, 21, 10));
});
