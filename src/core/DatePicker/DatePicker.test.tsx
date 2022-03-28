/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { DatePicker } from './DatePicker';

const defaultMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const assertMonthYear = (
  container: HTMLElement,
  expectedMonth: string,
  expectedYear: string,
) => {
  const month = container.querySelector('.iui-calendar-month') as HTMLElement;
  expect(month.textContent).toBe(expectedMonth);
  const year = container.querySelector(
    '.iui-calendar-month-year > span',
  ) as HTMLElement;
  expect(year.textContent).toBe(
    `${expectedMonth}${String.fromCharCode(160)}${expectedYear}`,
  );
};

it('should display passed date', () => {
  const { container } = render(
    <DatePicker date={new Date(2020, 0, 5)} onChange={jest.fn()} />,
  );
  assertMonthYear(container, 'January', '2020');
  const day = container.querySelector(
    '.iui-calendar-day.iui-selected',
  ) as HTMLElement;
  expect(day).toBeTruthy();
  expect(day.textContent).toBe('5');
  expect(document.activeElement).toEqual(document.body);
});

it('should display today', () => {
  const today = new Date();
  const { container } = render(<DatePicker onChange={jest.fn()} />);
  assertMonthYear(
    container,
    `${defaultMonths[today.getMonth()]}`,
    `${today.getFullYear()}`,
  );
  const day = container.querySelector(
    '.iui-calendar-day.iui-today',
  ) as HTMLElement;
  expect(day).toBeTruthy();
  expect(day.textContent).toBe(today.getDate().toString());
});

it('should return selected date', () => {
  const onClick = jest.fn();
  const { container, getByText } = render(
    <DatePicker date={new Date(2020, 5, 5)} onChange={onClick} />,
  );
  assertMonthYear(container, 'June', '2020');
  let selectedDay = container.querySelector(
    '.iui-calendar-day.iui-selected',
  ) as HTMLElement;
  expect(selectedDay.textContent).toBe('5');
  const day = getByText('15');
  day.click();
  expect(onClick).toHaveBeenCalledWith(new Date(2020, 5, 15));
  selectedDay = container.querySelector(
    '.iui-calendar-day.iui-selected',
  ) as HTMLElement;
  expect(selectedDay.textContent).toBe('15');
});

it('should navigate between months', () => {
  const date = new Date(2020, 1, 10);
  const onClick = jest.fn();
  const { container } = render(
    <DatePicker date={new Date(2020, 1, 10)} onChange={onClick} />,
  );
  assertMonthYear(container, 'February', '2020');
  const day = container.querySelector(
    '.iui-calendar-day.iui-selected',
  ) as HTMLElement;
  expect(day).toBeTruthy();
  expect(day.textContent).toBe(date.getDate().toString());

  const arrowImages = container.querySelectorAll(
    '.iui-calendar-month-year svg',
  ) as NodeListOf<HTMLElement>;
  expect(arrowImages.length).toBe(2);
  const arrowLeft = arrowImages[0];
  const arrowRight = arrowImages[1];

  // go back
  fireEvent.click(arrowLeft);
  date.setMonth(date.getMonth() - 1);
  assertMonthYear(container, 'January', '2020');
  // go back
  fireEvent.click(arrowLeft);
  date.setMonth(date.getMonth() - 1);
  assertMonthYear(container, 'December', '2019');
  // go forward
  fireEvent.click(arrowRight);
  date.setMonth(date.getMonth() + 1);
  assertMonthYear(container, 'January', '2020');
});

it('should show localized string', () => {
  const months = [
    'January-custom',
    'February-custom',
    'March-custom',
    'April-custom',
    'May-custom',
    'June-custom',
    'July-custom',
    'August-custom',
    'September-custom',
    'October-custom',
    'November-custom',
    'December-custom',
  ];
  const shortDays = [
    'Su-custom',
    'Mo-custom',
    'Tu-custom',
    'We-custom',
    'Th-custom',
    'Fr-custom',
    'Sa-custom',
  ];
  const days = [
    'Sunday-custom',
    'Monday-custom',
    'Tuesday-custom',
    'Wednesday-custom',
    'Thursday-custom',
    'Friday-custom',
    'Saturday-custom',
  ];
  const { getByText, container } = render(
    <DatePicker
      date={new Date(2020, 0, 10)}
      localizedNames={{ months, shortDays, days }}
    />,
  );
  shortDays.forEach((day, ind) => {
    const displayedDay = getByText(day);
    expect(displayedDay.title).toBe(days[ind]);
  });
  const nextButton = container.querySelectorAll(
    '.iui-calendar-month-year svg',
  )[1];
  months.forEach((month) => {
    assertMonthYear(container, `${month}`, '2020');
    fireEvent.click(nextButton);
  });
});

it('should switch to other month if day selected from other month', () => {
  const { container, getAllByText } = render(
    <DatePicker date={new Date(2020, 0, 10)} />,
  );
  assertMonthYear(container, 'January', '2020');
  let day = container.querySelector(
    '.iui-calendar-day.iui-selected',
  ) as HTMLElement;
  expect(day).toBeTruthy();
  expect(day.textContent).toBe('10');

  const days = getAllByText('30');
  days[0].click();
  assertMonthYear(container, 'December', '2019');
  day = container.querySelector(
    '.iui-calendar-day.iui-selected',
  ) as HTMLElement;
  expect(day).toBeTruthy();
  expect(day.textContent).toBe('30');
});

it('should apply custom class and style', () => {
  const { container } = render(
    <DatePicker
      date={new Date(2020, 0, 10)}
      className='my-class'
      style={{ width: 300 }}
    />,
  );
  const picker = container.querySelector(
    '.iui-date-picker.my-class',
  ) as HTMLElement;
  expect(picker).toBeTruthy();
  picker.style.width = '300px';
});

it('should navigate with keyboard', () => {
  const onClick = jest.fn();
  const { container, getAllByText, getByRole } = render(
    <DatePicker date={new Date(2020, 1, 1)} onChange={onClick} setFocus />,
  );
  assertMonthYear(container, 'February', '2020');
  let day = container.querySelector(
    '.iui-calendar-day.iui-selected',
  ) as HTMLElement;
  expect(day.textContent).toBe('1');
  expect(document.activeElement).toEqual(day);

  // go left
  const calendar = getByRole('listbox') as HTMLElement;
  fireEvent.keyDown(calendar, { key: 'ArrowLeft' });
  assertMonthYear(container, 'January', '2020');
  day = getAllByText('31').find(
    (el) => !el.className.includes('iui-outside-month'),
  ) as HTMLDivElement;
  expect(day).toBeTruthy();
  expect(document.activeElement).toEqual(day);

  // go right
  fireEvent.keyDown(calendar, { key: 'ArrowRight' });
  assertMonthYear(container, 'February', '2020');
  day = container.querySelector(
    '.iui-calendar-day.iui-selected',
  ) as HTMLElement;
  expect(day.textContent).toBe('1');
  expect(document.activeElement).toEqual(day);

  // go up
  fireEvent.keyDown(calendar, { key: 'ArrowUp' });
  assertMonthYear(container, 'January', '2020');
  day = getAllByText('25').find(
    (el) => !el.className.includes('iui-outside-month'),
  ) as HTMLDivElement;
  expect(day).toBeTruthy();
  expect(document.activeElement).toEqual(day);

  // go down
  fireEvent.keyDown(calendar, { key: 'ArrowDown' });
  assertMonthYear(container, 'February', '2020');
  day = container.querySelector(
    '.iui-calendar-day.iui-selected',
  ) as HTMLElement;
  expect(day.textContent).toBe('1');
  expect(document.activeElement).toEqual(day);

  // go right and select with enter
  fireEvent.keyDown(calendar, { key: 'ArrowRight' });
  assertMonthYear(container, 'February', '2020');
  day = getAllByText('2').find(
    (el) => !el.className.includes('iui-outside-month'),
  ) as HTMLDivElement;
  expect(day).toBeTruthy();
  expect(document.activeElement).toEqual(day);
  fireEvent.keyDown(calendar, { key: 'Enter' });
  day = container.querySelector(
    '.iui-calendar-day.iui-selected',
  ) as HTMLElement;
  expect(day.textContent).toBe('2');
  expect(onClick).toHaveBeenCalledTimes(1);

  // go right and select with space
  fireEvent.keyDown(calendar, { key: 'ArrowRight' });
  assertMonthYear(container, 'February', '2020');
  day = getAllByText('3').find(
    (el) => !el.className.includes('iui-outside-month'),
  ) as HTMLDivElement;
  expect(day).toBeTruthy();
  expect(document.activeElement).toEqual(day);
  fireEvent.keyDown(calendar, { key: ' ' });
  day = container.querySelector(
    '.iui-calendar-day.iui-selected',
  ) as HTMLElement;
  expect(day.textContent).toBe('3');
  expect(onClick).toHaveBeenCalledTimes(2);
});

it('should show time selection', () => {
  const { container } = render(
    <DatePicker date={new Date(2020, 0, 10)} showTime />,
  );
  expect(container.querySelector('.iui-date-picker')).toBeTruthy();
  expect(container.querySelector('.iui-time')).toBeTruthy();
});

it('should navigate between years', () => {
  const date = new Date(2020, 1, 10);
  const onClick = jest.fn();
  const { container } = render(
    <DatePicker date={new Date(2020, 1, 10)} onChange={onClick} showYear />,
  );
  assertMonthYear(container, 'February', '2020');

  const yearLeft = container.querySelector(
    'button[aria-label="Previous year"]',
  ) as HTMLButtonElement;
  expect(yearLeft).toBeTruthy();
  const yearRight = container.querySelector(
    'button[aria-label="Next year"]',
  ) as HTMLButtonElement;
  expect(yearRight).toBeTruthy();

  // go left
  fireEvent.click(yearLeft);
  date.setFullYear(date.getFullYear() - 1);
  assertMonthYear(container, 'February', '2019');
  // go left
  fireEvent.click(yearLeft);
  date.setMonth(date.getFullYear() - 1);
  assertMonthYear(container, 'February', '2018');
  // go right
  fireEvent.click(yearRight);
  date.setMonth(date.getFullYear() + 1);
  assertMonthYear(container, 'February', '2019');
});
