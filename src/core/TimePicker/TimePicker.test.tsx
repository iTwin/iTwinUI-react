/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { render } from '@testing-library/react';
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

// it('should navigate with keyboard', () => {
//   const onClick = jest.fn();
//   const { container, getAllByText } = render(
//     <DatePicker date={new Date(2020, 1, 1)} onChange={onClick} setFocus />,
//   );
//   assertMonthYear(container, 'February', '2020');
//   let day = container.querySelector('.iui-date.iui-selected') as HTMLElement;
//   expect(day.textContent).toBe('1');
//   expect(document.activeElement).toEqual(day);

//   // go left
//   const calendar = container.querySelector('.iui-dates') as HTMLElement;
//   fireEvent.keyDown(calendar, { key: 'ArrowLeft' });
//   assertMonthYear(container, 'January', '2020');
//   day = getAllByText('31').find(
//     (el) => !el.className.includes('iui-outside-month'),
//   ) as HTMLDivElement;
//   expect(day).toBeTruthy();
//   expect(document.activeElement).toEqual(day);

//   // go right
//   fireEvent.keyDown(calendar, { key: 'ArrowRight' });
//   assertMonthYear(container, 'February', '2020');
//   day = container.querySelector('.iui-date.iui-selected') as HTMLElement;
//   expect(day.textContent).toBe('1');
//   expect(document.activeElement).toEqual(day);

//   // go up
//   fireEvent.keyDown(calendar, { key: 'ArrowUp' });
//   assertMonthYear(container, 'January', '2020');
//   day = getAllByText('25').find(
//     (el) => !el.className.includes('iui-outside-month'),
//   ) as HTMLDivElement;
//   expect(day).toBeTruthy();
//   expect(document.activeElement).toEqual(day);

//   // go down
//   fireEvent.keyDown(calendar, { key: 'ArrowDown' });
//   assertMonthYear(container, 'February', '2020');
//   day = container.querySelector('.iui-date.iui-selected') as HTMLElement;
//   expect(day.textContent).toBe('1');
//   expect(document.activeElement).toEqual(day);

//   // go right and select with enter
//   fireEvent.keyDown(calendar, { key: 'ArrowRight' });
//   assertMonthYear(container, 'February', '2020');
//   day = getAllByText('2').find(
//     (el) => !el.className.includes('iui-outside-month'),
//   ) as HTMLDivElement;
//   expect(day).toBeTruthy();
//   expect(document.activeElement).toEqual(day);
//   fireEvent.keyDown(calendar, { key: 'Enter' });
//   day = container.querySelector('.iui-date.iui-selected') as HTMLElement;
//   expect(day.textContent).toBe('2');
//   expect(onClick).toHaveBeenCalledTimes(1);

//   // go right and select with space
//   fireEvent.keyDown(calendar, { key: 'ArrowRight' });
//   assertMonthYear(container, 'February', '2020');
//   day = getAllByText('3').find(
//     (el) => !el.className.includes('iui-outside-month'),
//   ) as HTMLDivElement;
//   expect(day).toBeTruthy();
//   expect(document.activeElement).toEqual(day);
//   fireEvent.keyDown(calendar, { key: ' ' });
//   day = container.querySelector('.iui-date.iui-selected') as HTMLElement;
//   expect(day.textContent).toBe('3');
//   expect(onClick).toHaveBeenCalledTimes(2);
// });
