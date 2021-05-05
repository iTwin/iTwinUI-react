/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Table, TableProps } from './Table';

const observers = new Map<
  Element,
  (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void
>();

const originalIntersectionObserver = window.IntersectionObserver;
window.IntersectionObserver = jest.fn(
  (callback: IntersectionObserverCallback) => {
    return ({
      observe: (el: Element) => observers.set(el, callback),
      disconnect: jest.fn(),
    } as unknown) as IntersectionObserver;
  },
);

const mockIntersection = (element: Element) => {
  observers.get(element)?.(
    [{ isIntersecting: true } as IntersectionObserverEntry],
    ({ disconnect: jest.fn() } as unknown) as IntersectionObserver,
  );
};

const columns = (onViewClick: () => void = jest.fn()) => [
  {
    Header: 'Header name',
    columns: [
      {
        id: 'name',
        Header: 'Name',
        accessor: 'name',
        width: 90,
      },
      {
        id: 'description',
        Header: 'description',
        accessor: 'description',
        maxWidth: 200,
      },
      {
        id: 'view',
        Header: 'view',
        Cell: () => {
          return <span onClick={onViewClick}>View</span>;
        },
      },
    ],
  },
];

const mockedData = (count = 3) =>
  [...new Array(count)].map((_, index) => ({
    name: `Name${index + 1}`,
    description: `Description${index + 1}`,
  }));

function renderComponent(
  initialsProps?: Partial<TableProps>,
  onViewClick?: () => void,
) {
  const defaultProps: TableProps = {
    columns: columns(onViewClick),
    data: mockedData(),
    emptyTableContent: 'Empty table',
  };

  const props = { ...defaultProps, ...initialsProps };
  return render(<Table {...props} />);
}

function assertRowsData(
  rows: NodeListOf<Element>,
  data: { name: string; description: string }[] = mockedData(),
) {
  expect(rows.length).toBe(3);
  for (let i = 0; i < rows.length; i++) {
    const row = rows.item(i);
    const { name, description } = data[i];
    const cells = row.querySelectorAll('.iui-tables-cell');
    expect(cells.length).toBe(3);
    expect(cells[0].textContent).toEqual(name);
    expect(cells[1].textContent).toEqual(description);
    expect(cells[2].textContent).toEqual('View');
    fireEvent.click(cells[2].firstElementChild as HTMLElement);
  }
}

beforeEach(() => {
  observers.clear();
});

afterAll(() => {
  window.IntersectionObserver = originalIntersectionObserver;
});

it('should render table with data', () => {
  const onViewClick = jest.fn();
  const { container } = renderComponent(undefined, onViewClick);

  expect(screen.queryByText('Header name')).toBeFalsy();
  const rows = container.querySelectorAll('.iui-tables-body .iui-tables-row');
  assertRowsData(rows);
  expect(onViewClick).toHaveBeenCalledTimes(3);
});

it('should show spinner when loading', () => {
  const { container } = renderComponent({ data: [], isLoading: true });

  expect(
    container.querySelector('.iui-progress-indicator-radial'),
  ).toBeTruthy();
  const rows = container.querySelectorAll('.iui-tables-body .iui-tables-row');
  expect(rows.length).toBe(0);
});

it('should show empty message when there is no data', () => {
  const { container } = renderComponent({ data: [] });

  screen.getByText('Empty table');
  const rows = container.querySelectorAll('.iui-tables-body .iui-tables-row');
  expect(rows.length).toBe(0);
});

it('should render table with custom className', () => {
  const { container } = renderComponent({ className: 'test-className' });

  const table = container.querySelector('.iui-tables-table.test-className');
  expect(table).toBeTruthy();
});

it('should render table with custom style', () => {
  const { container } = renderComponent({ style: { color: 'red' } });

  const table = container.querySelector('.iui-tables-table') as HTMLElement;
  expect(table).toBeTruthy();
  expect(table.style.color).toEqual('red');
});

it('should render column with custom className', () => {
  const { container } = renderComponent({
    columns: [
      {
        Header: 'Header name',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
            columnClassName: 'test-className',
          },
        ],
      },
    ],
  });

  const column = container.querySelector(
    '.iui-tables-cell.iui-tables-head.test-className',
  );
  expect(column).toBeTruthy();
});

it('should render cell with custom className', () => {
  const { container } = renderComponent({
    columns: [
      {
        Header: 'Header name',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
            cellClassName: 'test-className',
          },
        ],
      },
    ],
  });

  const cell = container.querySelector(
    '.iui-tables-body .iui-tables-cell.test-className',
  );
  expect(cell).toBeTruthy();
});

it('should handle checkbox clicks', () => {
  const onSelect = jest.fn();
  const { container } = renderComponent({ isSelectable: true, onSelect });

  expect(screen.queryByText('Header name')).toBeFalsy();
  const rows = container.querySelectorAll('.iui-tables-body .iui-tables-row');
  expect(rows.length).toBe(3);

  expect(onSelect).not.toHaveBeenCalled();

  const checkboxCells = container.querySelectorAll(
    '.iui-tables-slot .iui-checkbox',
  );
  expect(checkboxCells.length).toBe(4);
  fireEvent.click(checkboxCells[2]);
  expect(onSelect).toHaveBeenCalledWith([mockedData()[1]], expect.any(Object));

  fireEvent.click(checkboxCells[0]);
  expect(onSelect).toHaveBeenCalledWith(mockedData(), expect.any(Object));

  fireEvent.click(checkboxCells[0]);
  expect(onSelect).toHaveBeenCalledWith([], expect.any(Object));
});

it('should not show sorting icon if sorting is disabled', () => {
  const { container } = renderComponent({
    isSortable: false,
  });

  expect(container.querySelector('.iui-sort .iui-icon-wrapper')).toBeFalsy();
});

it('should not show sort icon if data is loading', () => {
  const { container } = renderComponent({
    isSortable: true,
    isLoading: true,
  });

  expect(container.querySelector('.iui-sort .iui-icon-wrapper')).toBeFalsy();
});

it('should not show sort icon if data is empty', () => {
  const { container } = renderComponent({
    isSortable: true,
    data: [],
  });

  expect(container.querySelector('.iui-sort .iui-icon-wrapper')).toBeFalsy();
});

it('should sort name column correctly', () => {
  const mocked = [
    { name: 'name1', description: 'Description1' },
    { name: 'name3', description: 'Description3' },
    { name: 'name2', description: 'Description2' },
  ];
  const sortedByName = [...mocked].sort((a, b) => (a.name > b.name ? 1 : -1));
  const onSort = jest.fn();
  const { container } = renderComponent({
    isSortable: true,
    data: mocked,
    onSort,
  });

  const nameHeader = container.querySelector(
    '.iui-tables-head',
  ) as HTMLDivElement;
  expect(nameHeader).toBeTruthy();
  expect(nameHeader.classList).not.toContain('iui-active-sort');
  let rows = container.querySelectorAll('.iui-tables-body .iui-tables-row');

  assertRowsData(rows, mocked);

  const sortIcon = container.querySelector(
    '.iui-sort .iui-icon-wrapper',
  ) as HTMLDivElement;
  expect(sortIcon).toBeTruthy();

  //first click
  sortIcon.click();
  rows = container.querySelectorAll('.iui-tables-body .iui-tables-row');
  expect(nameHeader.classList).toContain('iui-active-sort');
  assertRowsData(rows, sortedByName);
  expect(onSort).toHaveBeenCalledWith(
    expect.objectContaining({
      sortBy: [
        {
          id: 'name',
          desc: false,
        },
      ],
    }),
  );

  //second click
  sortIcon.click();
  rows = container.querySelectorAll('.iui-tables-body .iui-tables-row');
  expect(nameHeader.classList).toContain('iui-active-sort');
  assertRowsData(rows, [...sortedByName].reverse());
  expect(onSort).toHaveBeenCalledWith(
    expect.objectContaining({
      sortBy: [
        {
          id: 'name',
          desc: true,
        },
      ],
    }),
  );

  //third click resets it
  sortIcon.click();
  rows = container.querySelectorAll('.iui-tables-body .iui-tables-row');
  expect(nameHeader.classList).not.toContain('iui-active-sort');
  assertRowsData(rows, mocked);
  expect(onSort).toHaveBeenCalledWith(
    expect.objectContaining({
      sortBy: [],
    }),
  );
});

it('should not show sort icon if disabled in column level', () => {
  const mockedColumns = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          disableSortBy: true,
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns: mockedColumns,
    isSortable: true,
  });

  expect(container.querySelector('.iui-sort .iui-icon-wrapper')).toBeFalsy();
});

it('should trigger onBottomReached', () => {
  const onBottomReached = jest.fn();
  const { container } = renderComponent({
    data: mockedData(50),
    onBottomReached,
  });

  const rows = container.querySelectorAll('.iui-tables-body .iui-tables-row');
  expect(rows.length).toBe(50);

  expect(onBottomReached).not.toHaveBeenCalled();
  expect(observers.size).toBe(50);
  mockIntersection(rows[49]);

  expect(onBottomReached).toHaveBeenCalledTimes(1);
});

it('should trigger onRowInView', () => {
  const onRowInView = jest.fn();
  const { container } = renderComponent({
    data: mockedData(50),
    onRowInView,
  });

  const rows = container.querySelectorAll('.iui-tables-body .iui-tables-row');
  expect(rows.length).toBe(50);

  expect(onRowInView).not.toHaveBeenCalled();
  expect(observers.size).toBe(50);
  for (let i = 0; i < 10; i++) {
    mockIntersection(rows[i]);
  }

  expect(onRowInView).toHaveBeenCalledTimes(10);
});
