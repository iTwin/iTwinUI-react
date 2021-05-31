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
      date={new Date(2020, 1, 1, 22, 11, 45)}
      onChange={onClick}
      setFocusHour
      precision='seconds'
    />,
  );
  let selectedHours = container.querySelector(
    '.iui-time:first-child .iui-selected',
  ) as HTMLElement;
  expect(selectedHours.textContent).toBe('22');
  expect(document.activeElement).toEqual(selectedHours);

  // go down
  fireEvent.keyDown(selectedHours, { key: 'ArrowDown' });
  let nextHour = selectedHours.nextElementSibling as Element;
  expect(nextHour.textContent).toBe('23');
  expect(document.activeElement).toEqual(nextHour);

  // go up
  fireEvent.keyDown(nextHour as Node, { key: 'ArrowUp' });
  expect(document.activeElement).toEqual(selectedHours);

  // go up
  fireEvent.keyDown(selectedHours, { key: 'ArrowUp' });
  nextHour = selectedHours.previousElementSibling as Element;
  expect(nextHour.textContent).toBe('21');
  expect(document.activeElement).toEqual(nextHour);

  // select
  fireEvent.keyDown(nextHour as Node, { key: 'Enter' });
  selectedHours = container.querySelector(
    '.iui-time:first-child .iui-selected',
  ) as HTMLElement;
  expect(selectedHours.textContent).toBe('21');
  expect(document.activeElement).toEqual(selectedHours);
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 1, 1, 21, 11, 45));

  // go to minutes
  let selectedMinutes = container.querySelector(
    '.iui-time:nth-child(2) .iui-selected',
  ) as HTMLElement;
  selectedMinutes.focus();
  expect(selectedMinutes.textContent).toBe('11');
  expect(document.activeElement).toEqual(selectedMinutes);

  // go up
  fireEvent.keyDown(selectedMinutes, { key: 'ArrowUp' });
  let nextMinute = selectedMinutes.previousElementSibling as Element;
  expect(nextMinute.textContent).toBe('10');
  expect(document.activeElement).toEqual(nextMinute);

  // go up
  fireEvent.keyDown(nextMinute, { key: 'ArrowUp' });
  nextMinute = nextMinute.previousElementSibling as Element;
  expect(nextMinute.textContent).toBe('9');
  expect(document.activeElement).toEqual(nextMinute);

  // go down
  fireEvent.keyDown(nextMinute, { key: 'ArrowDown' });
  nextMinute = nextMinute.nextElementSibling as Element;
  expect(nextMinute.textContent).toBe('10');
  expect(document.activeElement).toEqual(nextMinute);

  // select
  fireEvent.keyDown(nextMinute, { key: ' ' });
  selectedMinutes = container.querySelector(
    '.iui-time:nth-child(2) .iui-selected',
  ) as HTMLElement;
  expect(selectedMinutes.textContent).toBe('10');
  expect(document.activeElement).toEqual(selectedMinutes);
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 1, 1, 21, 10, 45));

  // go to seconds
  let selectedSeconds = container.querySelector(
    '.iui-time:last-child .iui-selected',
  ) as HTMLElement;
  selectedSeconds.focus();
  expect(selectedSeconds.textContent).toBe('45');
  expect(document.activeElement).toEqual(selectedSeconds);

  // go down
  fireEvent.keyDown(selectedSeconds, { key: 'ArrowDown' });
  const nextSecond = selectedSeconds.nextElementSibling as Element;
  expect(nextSecond.textContent).toBe('46');
  expect(document.activeElement).toEqual(nextSecond);

  // select
  fireEvent.keyDown(nextSecond, { key: ' ' });
  selectedSeconds = container.querySelector(
    '.iui-time:last-child .iui-selected',
  ) as HTMLElement;
  expect(selectedSeconds.textContent).toBe('46');
  expect(document.activeElement).toEqual(selectedSeconds);
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 1, 1, 21, 10, 46));
});

it('should navigate with keyboard (12 hours)', () => {
  const onClick = jest.fn();
  const { container } = render(
    <TimePicker
      date={new Date(2020, 1, 1, 23, 22)}
      onChange={onClick}
      setFocusHour
      use12Hours
    />,
  );
  let selectedHours = container.querySelector(
    '.iui-time:first-child .iui-selected',
  ) as HTMLElement;
  expect(selectedHours.textContent).toBe('11');
  expect(document.activeElement).toEqual(selectedHours);

  // go down (already bottom, no move)
  fireEvent.keyDown(selectedHours, { key: 'ArrowDown' });
  let nextHour = selectedHours.nextElementSibling as Element;
  expect(nextHour).toBeFalsy();
  expect(document.activeElement).toEqual(selectedHours);

  // go up
  fireEvent.keyDown(selectedHours as Node, { key: 'ArrowUp' });
  nextHour = selectedHours.previousElementSibling as Element;
  expect(nextHour.textContent).toBe('10');
  expect(document.activeElement).toEqual(nextHour);

  // go up
  fireEvent.keyDown(nextHour, { key: 'ArrowUp' });
  nextHour = nextHour.previousElementSibling as Element;
  expect(nextHour.textContent).toBe('9');
  expect(document.activeElement).toEqual(nextHour);

  // select
  fireEvent.keyDown(nextHour as Node, { key: 'Enter' });
  selectedHours = container.querySelector(
    '.iui-time:first-child .iui-selected',
  ) as HTMLElement;
  expect(selectedHours.textContent).toBe('9');
  expect(document.activeElement).toEqual(selectedHours);
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 1, 1, 21, 22));

  // go to minutes
  let selectedMinutes = container.querySelector(
    '.iui-time:nth-child(2) .iui-selected',
  ) as HTMLElement;
  selectedMinutes.focus();
  expect(selectedMinutes.textContent).toBe('22');
  expect(document.activeElement).toEqual(selectedMinutes);

  // go up
  fireEvent.keyDown(selectedMinutes, { key: 'ArrowUp' });
  const nextMinute = selectedMinutes.previousElementSibling as Element;
  expect(nextMinute.textContent).toBe('21');
  expect(document.activeElement).toEqual(nextMinute);

  // select
  fireEvent.keyDown(nextMinute, { key: ' ' });
  selectedMinutes = container.querySelector(
    '.iui-time:nth-child(2) .iui-selected',
  ) as HTMLElement;
  expect(selectedMinutes.textContent).toBe('21');
  expect(document.activeElement).toEqual(selectedMinutes);
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 1, 1, 21, 21));

  // go to period
  let selectedPeriod = container.querySelector(
    '.iui-period .iui-selected',
  ) as HTMLElement;
  selectedPeriod.focus();
  expect(selectedPeriod.textContent).toBe('PM');
  expect(document.activeElement).toEqual(selectedPeriod);

  // go up
  fireEvent.keyDown(selectedPeriod, { key: 'ArrowUp' });
  let nextPeriod = selectedPeriod.previousElementSibling as Element;
  expect(nextPeriod.textContent).toBe('AM');
  expect(document.activeElement).toEqual(nextPeriod);

  // go up (already top, no move)
  fireEvent.keyDown(nextPeriod, { key: 'ArrowUp' });
  expect(nextPeriod.previousElementSibling).toBeFalsy();
  expect(document.activeElement).toEqual(nextPeriod);

  // select
  fireEvent.keyDown(nextPeriod, { key: 'Spacebar' });
  selectedPeriod = container.querySelector(
    '.iui-period .iui-selected',
  ) as HTMLElement;
  expect(selectedPeriod.textContent).toBe('AM');
  expect(document.activeElement).toEqual(selectedPeriod);
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 1, 1, 9, 21));

  // go down
  fireEvent.keyDown(selectedPeriod, { key: 'ArrowDown' });
  nextPeriod = selectedPeriod.nextElementSibling as Element;
  expect(nextPeriod.textContent).toBe('PM');
  expect(document.activeElement).toEqual(nextPeriod);

  // select
  fireEvent.keyDown(nextPeriod, { key: 'Spacebar' });
  selectedPeriod = container.querySelector(
    '.iui-period .iui-selected',
  ) as HTMLElement;
  expect(selectedPeriod.textContent).toBe('PM');
  expect(document.activeElement).toEqual(selectedPeriod);
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 1, 1, 21, 21));
});

it('should show 12 hours', () => {
  const onClick = jest.fn();
  const { container, getByText } = render(
    <TimePicker
      date={new Date(2020, 5, 5, 14, 21, 33)}
      precision='seconds'
      onChange={onClick}
      use12Hours
    />,
  );
  expect(container.querySelectorAll('.iui-time').length).toBe(3);
  expect(container.querySelector('.iui-period')).toBeTruthy();
  expect(container.querySelectorAll('.iui-time:first-child li').length).toBe(
    12,
  );
  expect(container.querySelectorAll('.iui-time:nth-child(2) li').length).toBe(
    60,
  );
  expect(container.querySelectorAll('.iui-time:nth-child(3) li').length).toBe(
    60,
  );
  // select different period
  let selectedPeriod = container.querySelector(
    '.iui-period .iui-selected',
  ) as HTMLElement;
  expect(selectedPeriod.textContent).toBe('PM');
  selectedPeriod = getByText('AM');
  selectedPeriod.click();
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 5, 5, 2, 21, 33));
  // select new seconds
  let selectedSeconds = container.querySelector(
    '.iui-time:nth-child(3) .iui-selected',
  ) as HTMLElement;
  expect(selectedSeconds.textContent).toBe('33');
  selectedSeconds = getByText('11', { selector: '.iui-time:nth-child(3) li' });
  selectedSeconds.click();
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 5, 5, 2, 21, 11));
  // select new minutes
  let selectedMinutes = container.querySelector(
    '.iui-time:nth-child(2) .iui-selected',
  ) as HTMLElement;
  expect(selectedMinutes.textContent).toBe('21');
  selectedMinutes = getByText('2', { selector: '.iui-time:nth-child(2) li' });
  selectedMinutes.click();
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 5, 5, 2, 2, 11));
  // select new hours
  let selectedHour = container.querySelector(
    '.iui-time:first-child .iui-selected',
  ) as HTMLElement;
  expect(selectedHour.textContent).toBe('2');
  selectedHour = getByText('12', { selector: '.iui-time:first-child li' });
  selectedHour.click();
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 5, 5, 0, 2, 11));
  // select different period
  selectedPeriod = container.querySelector(
    '.iui-period .iui-selected',
  ) as HTMLElement;
  expect(selectedPeriod.textContent).toBe('AM');
  selectedPeriod = getByText('PM');
  selectedPeriod.click();
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 5, 5, 12, 2, 11));
});

it('should show values with applied steps', () => {
  const onClick = jest.fn();
  const { container, getByText } = render(
    <TimePicker
      date={new Date(2020, 5, 5, 9, 10, 40)}
      precision='seconds'
      onChange={onClick}
      hourStep={3}
      minuteStep={10}
      secondStep={20}
    />,
  );
  expect(container.querySelectorAll('.iui-time:first-child li').length).toBe(8);
  expect(container.querySelectorAll('.iui-time:nth-child(2) li').length).toBe(
    6,
  );
  expect(container.querySelectorAll('.iui-time:nth-child(3) li').length).toBe(
    3,
  );
  // select new hour
  let selectedHour = container.querySelector(
    '.iui-time:first-child .iui-selected',
  ) as HTMLElement;
  expect(selectedHour.textContent).toBe('9');
  selectedHour = getByText('18', { selector: '.iui-time:first-child li' });
  selectedHour.click();
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 5, 5, 18, 10, 40));
  // select new seconds
  let selectedSeconds = container.querySelector(
    '.iui-time:nth-child(3) .iui-selected',
  ) as HTMLElement;
  expect(selectedSeconds.textContent).toBe('40');
  selectedSeconds = getByText('20', { selector: '.iui-time:nth-child(3) li' });
  selectedSeconds.click();
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 5, 5, 18, 10, 20));
  // select new minutes
  let selectedMinutes = container.querySelector(
    '.iui-time:nth-child(2) .iui-selected',
  ) as HTMLElement;
  expect(selectedMinutes.textContent).toBe('10');
  selectedMinutes = getByText('30', { selector: '.iui-time:nth-child(2) li' });
  selectedMinutes.click();
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 5, 5, 18, 30, 20));
});
