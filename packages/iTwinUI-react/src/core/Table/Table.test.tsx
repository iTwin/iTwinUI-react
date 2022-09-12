/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import React from 'react';
import { Table, TableProps } from './Table';
import * as IntersectionHooks from '../utils/hooks/useIntersection';
import {
  BaseFilter,
  FilterButtonBar,
  TableFilterProps,
  tableFilters,
} from './filters';
import { CellProps, Column, Row } from 'react-table';
import { InputGroup } from '../InputGroup';
import { Radio } from '../Radio';
import {
  SvgChevronRight,
  SvgDeveloper,
  SvgPlaceholder,
  SvgSortUp,
  SvgSortDown,
} from '@itwin/itwinui-icons-react';
import { DefaultCell, EditableCell } from './cells';
import { TablePaginator } from './TablePaginator';
import * as UseOverflow from '../utils/hooks/useOverflow';
import * as UseResizeObserver from '../utils/hooks/useResizeObserver';
import userEvent from '@testing-library/user-event';
import { ActionColumn, SelectionColumn, ExpanderColumn } from './columns';

const intersectionCallbacks = new Map<Element, () => void>();
jest
  .spyOn(IntersectionHooks, 'useIntersection')
  .mockImplementation((onIntersect) => {
    return (el: HTMLElement) =>
      el && intersectionCallbacks.set(el, onIntersect);
  });

const mockIntersection = (element: Element) => {
  intersectionCallbacks.get(element)?.();
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
        Header: 'Description',
        accessor: 'description',
        maxWidth: 200,
      },
      {
        id: 'view',
        Header: 'View',
        Cell: () => {
          return <span onClick={onViewClick}>View</span>;
        },
      },
    ],
  },
];
type TestDataType = {
  name: string;
  description: string;
  subRows?: TestDataType[];
  booleanValue?: boolean;
};

const mockedData = (count = 3): TestDataType[] =>
  [...new Array(count)].map((_, index) => ({
    name: `Name${index + 1}`,
    description: `Description${index + 1}`,
  }));

const mockedSubRowsData = () => [
  {
    name: 'Row 1',
    description: 'Description 1',
    subRows: [
      { name: 'Row 1.1', description: 'Description 1.1', subRows: [] },
      {
        name: 'Row 1.2',
        description: 'Description 1.2',
        subRows: [
          {
            name: 'Row 1.2.1',
            description: 'Description 1.2.1',
            subRows: [],
          },
          {
            name: 'Row 1.2.2',
            description: 'Description 1.2.2',
            subRows: [],
          },
        ],
      },
      { name: 'Row 1.3', description: 'Description 1.3', subRows: [] },
    ],
  },
  {
    name: 'Row 2',
    description: 'Description 2',
    subRows: [
      { name: 'Row 2.1', description: 'Description 2.1', subRows: [] },
      { name: 'Row 2.2', description: 'Description 2.2', subRows: [] },
    ],
  },
  { name: 'Row 3', description: 'Description 3', subRows: [] },
];

function renderComponent(
  initialsProps?: Partial<TableProps<TestDataType>>,
  onViewClick?: () => void,
  renderContainer?: HTMLElement,
) {
  const defaultProps: TableProps = {
    columns: columns(onViewClick),
    data: mockedData(),
    emptyTableContent: 'Empty table',
    emptyFilteredTableContent: 'No results. Clear filter.',
  };

  const props = { ...defaultProps, ...initialsProps };
  return render(
    <Table {...props} />,
    renderContainer && { container: renderContainer },
  );
}

const flattenData = (data: TestDataType[]) => {
  const flatData: TestDataType[] = [];

  const handleItem = (item: TestDataType) => {
    flatData.push(item);
    if (item.subRows?.length) {
      item.subRows.forEach((subRow) => handleItem(subRow));
    }
  };
  data.forEach((item) => handleItem(item));

  return flatData;
};

async function assertRowsData(rows: NodeListOf<Element>, data = mockedData()) {
  expect(rows.length).toBe(data.length);
  for (let i = 0; i < rows.length; i++) {
    const row = rows.item(i);
    const { name, description } = data[i];
    const cells = row.querySelectorAll('.iui-cell');
    expect(cells.length).toBe(3);
    expect(cells[0].textContent).toEqual(name);
    expect(cells[1].textContent).toEqual(description);
    expect(cells[2].textContent).toEqual('View');
    await userEvent.click(cells[2].firstElementChild as HTMLElement);
  }
}

const setFilter = async (container: HTMLElement, value: string) => {
  const filterIcon = container.querySelector(
    '.iui-filter-button .iui-button-icon',
  ) as HTMLElement;
  expect(filterIcon).toBeTruthy();
  await userEvent.click(filterIcon);

  const filterInput = document.querySelector(
    '.iui-column-filter input',
  ) as HTMLInputElement;
  expect(filterInput).toBeVisible();

  await userEvent.type(filterInput, value);
  await userEvent.click(screen.getByText('Filter'));

  expect(filterInput).not.toBeVisible();
};

const clearFilter = async (container: HTMLElement) => {
  const filterIcon = container.querySelector(
    '.iui-filter-button .iui-button-icon',
  ) as HTMLElement;
  expect(filterIcon).toBeTruthy();
  await userEvent.click(filterIcon);

  await userEvent.click(screen.getByText('Clear'));
};

const BooleanFilter = (
  props: TableFilterProps<Record<string, unknown>>,
): JSX.Element => {
  const [value, setValue] = React.useState<boolean | undefined>(
    props.column.filterValue as boolean | undefined,
  );
  return (
    <BaseFilter>
      <InputGroup displayStyle='inline'>
        <Radio
          name='filterOption'
          onChange={() => setValue(true)}
          label='True'
          defaultChecked={value}
        />
        <Radio
          name='filterOption'
          onChange={() => setValue(false)}
          label='False'
          defaultChecked={value === false}
        />
      </InputGroup>
      <FilterButtonBar
        setFilter={() => props.setFilter(value)}
        clearFilter={props.clearFilter}
      />
    </BaseFilter>
  );
};

const expandAll = async (
  container: HTMLElement,
  oldExpanders: Element[] = [],
) => {
  const allExpanders = Array.from(
    container.querySelectorAll('.iui-row-expander'),
  );
  const newExpanders = allExpanders.filter((e) => !oldExpanders.includes(e));
  for (const button of newExpanders) {
    await userEvent.click(button);
  }
  if (newExpanders.length) {
    await expandAll(container, allExpanders);
  }
};

beforeEach(() => {
  intersectionCallbacks.clear();
});

it('should render table with data', async () => {
  const onViewClick = jest.fn();
  const { container } = renderComponent(undefined, onViewClick);

  expect(screen.queryByText('Header name')).toBeFalsy();
  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  await assertRowsData(rows);
  expect(onViewClick).toHaveBeenCalledTimes(3);
});

it('should show spinner when loading', () => {
  const { container } = renderComponent({ data: [], isLoading: true });

  expect(
    container.querySelector('.iui-progress-indicator-radial'),
  ).toBeTruthy();
  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(0);
});

it('should show empty message when there is no data', () => {
  const { container } = renderComponent({ data: [] });

  screen.getByText('Empty table');
  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(0);
});

it('should render table with custom className', () => {
  const { container } = renderComponent({ className: 'test-className' });

  const table = container.querySelector('.iui-table.test-className');
  expect(table).toBeTruthy();
});

it('should render table with custom style', () => {
  const { container } = renderComponent({ style: { color: 'red' } });

  const table = container.querySelector('.iui-table') as HTMLElement;
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
    '.iui-table-header .iui-cell.test-className',
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
    '.iui-table-body .iui-cell.test-className',
  );
  expect(cell).toBeTruthy();
});

it('should handle checkbox clicks', async () => {
  const onSelect = jest.fn();
  const { container } = renderComponent({ isSelectable: true, onSelect });

  expect(screen.queryByText('Header name')).toBeFalsy();
  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  expect(onSelect).not.toHaveBeenCalled();

  const checkboxCells = container.querySelectorAll('.iui-slot .iui-checkbox');
  expect(checkboxCells.length).toBe(4);
  await userEvent.click(checkboxCells[2]);
  expect(onSelect).toHaveBeenCalledWith([mockedData()[1]], expect.any(Object));

  await userEvent.click(checkboxCells[0]);
  expect(onSelect).toHaveBeenCalledWith(mockedData(), expect.any(Object));

  await userEvent.click(checkboxCells[0]);
  expect(onSelect).toHaveBeenCalledWith([], expect.any(Object));
});

it('should handle row clicks', async () => {
  const onSelect = jest.fn();
  const onRowClick = jest.fn();
  const { container, getByText } = renderComponent({
    isSelectable: true,
    onSelect,
    onRowClick,
  });

  expect(screen.queryByText('Header name')).toBeFalsy();
  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  await userEvent.click(getByText(mockedData()[1].name));
  expect(rows[1].classList).toContain('iui-selected'); // lastSelectedRow = 1
  expect(onSelect).toHaveBeenCalledTimes(1);
  expect(onRowClick).toHaveBeenCalledTimes(1);

  await userEvent.click(getByText(mockedData()[2].name));
  expect(rows[1].classList).not.toContain('iui-selected');
  expect(rows[2].classList).toContain('iui-selected'); // lastSelectedRow = 1 -> 2
  expect(onSelect).toHaveBeenCalledTimes(2);
  expect(onRowClick).toHaveBeenCalledTimes(2);

  const user = userEvent.setup();
  await user.keyboard('[ControlLeft>]'); // Press Control (without releasing it)
  await user.click(getByText(mockedData()[1].name)); // Perform a click with `ctrlKey: true`
  expect(rows[1].classList).toContain('iui-selected');
  expect(rows[2].classList).toContain('iui-selected');
  expect(onSelect).toHaveBeenCalledTimes(3);
  expect(onRowClick).toHaveBeenCalledTimes(3);

  await user.keyboard('[/ControlLeft]');
  await user.click(getByText(mockedData()[1].name)); // Deselect
  expect(onSelect).toHaveBeenCalledTimes(4);
  expect(onRowClick).toHaveBeenCalledTimes(4);

  await user.click(getByText(mockedData()[1].name)); // Reselect; lastSelectedRow = 2 -> 1
  expect(onSelect).toHaveBeenCalledTimes(5);
  expect(onRowClick).toHaveBeenCalledTimes(5);

  await user.keyboard('[ShiftLeft>]'); // Press Shift (without releasing it)
  await user.click(getByText(mockedData()[0].name)); // Perform a click with `shiftKey: true`

  expect(rows[0].classList).toContain('iui-selected');
  expect(rows[1].classList).toContain('iui-selected');
  expect(rows[2].classList).not.toContain('iui-selected');
  expect(onSelect).toHaveBeenCalledTimes(6);
  expect(onRowClick).toHaveBeenCalledTimes(6);
});

it('should handle sub-rows shift click selection', async () => {
  const onSelect = jest.fn();
  const onRowClick = jest.fn();
  const data = mockedSubRowsData();
  const { container, getByText } = renderComponent({
    data,
    onSelect,
    onRowClick,
    isSelectable: true,
  });

  let rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  const user = userEvent.setup();
  await user.keyboard('[ShiftLeft>]'); // Press Shift (without releasing it)
  await user.click(getByText(data[1].name)); // [shiftKey: true]

  // By default, when no row is selected before shift click, start selecting from first row to clicked row
  expect(rows[0].classList).toContain('iui-selected');
  expect(rows[1].classList).toContain('iui-selected');
  expect(rows[2].classList).not.toContain('iui-selected');
  expect(onSelect).toHaveBeenCalledTimes(1 + 2); // reset + # selected rows from start to end
  expect(onRowClick).toHaveBeenCalledTimes(1);

  await expandAll(container);

  rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(10);

  await user.keyboard('[ShiftLeft>]'); // Press Shift (without releasing it)
  await user.click(getByText(data[0].subRows[1].subRows[0].name)); // [shiftKey: true]

  let checkboxes = container.querySelectorAll<HTMLInputElement>(
    '.iui-table-body .iui-checkbox',
  );
  let selectedIndices = [1, 3];
  Array.from(checkboxes).forEach((checkbox, index) => {
    expect(!!checkbox.checked).toBe(selectedIndices.includes(index));
  });

  expect(onSelect).toHaveBeenCalledTimes(3 + (1 + 2)); // # times before + (reset + # selected rows from start to end)
  expect(onRowClick).toHaveBeenCalledTimes(2);

  rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(10);

  await user.keyboard('[/ShiftLeft]'); // Release Shift
  await user.click(getByText(data[0].subRows[1].subRows[1].name)); // [shiftKey = false]

  selectedIndices = [4];
  Array.from(checkboxes).forEach((checkbox, index) => {
    expect(!!checkbox.checked).toBe(selectedIndices.includes(index));
  });

  expect(onSelect).toHaveBeenCalledTimes(6 + 1); // # times before + 1 selection
  expect(onRowClick).toHaveBeenCalledTimes(3);

  await user.keyboard('[ShiftLeft>]'); // Press Shift (without releasing it)
  await user.click(getByText(data[1].subRows[0].name)); // [shiftKey = true]

  checkboxes = container.querySelectorAll<HTMLInputElement>(
    '.iui-table-body .iui-checkbox',
  );
  selectedIndices = [4, 5, 7];
  Array.from(checkboxes).forEach((checkbox, index) => {
    expect(!!checkbox.checked).toBe(selectedIndices.includes(index));
  });

  expect(onSelect).toHaveBeenCalledTimes(7 + (1 + 3)); // # times before + (reset + # selected rows from start to end)
  expect(onRowClick).toHaveBeenCalledTimes(4);
});

it('should not select when clicked on row but selectRowOnClick flag is false', async () => {
  const onSelect = jest.fn();
  const onRowClick = jest.fn();
  const { container, getByText } = renderComponent({
    isSelectable: true,
    onSelect,
    onRowClick,
    selectRowOnClick: false,
  });

  expect(screen.queryByText('Header name')).toBeFalsy();
  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  await userEvent.click(getByText(mockedData()[1].name));
  expect(onSelect).not.toHaveBeenCalled();
  expect(onRowClick).toHaveBeenCalled();
});

it('should not select when clicked on row and preventDefault is set', async () => {
  const onSelect = jest.fn();
  renderComponent({
    isSelectable: true,
    onSelect,
    rowProps: () => ({ onClick: (e) => e.preventDefault() }),
  });

  await userEvent.click(screen.getByText(mockedData()[1].name));
  expect(onSelect).not.toHaveBeenCalled();
});

it('should not trigger onSelect when sorting and filtering', async () => {
  const onSort = jest.fn();
  const onSelect = jest.fn();
  const onFilter = jest.fn();
  const mockedColumns = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          Filter: tableFilters.TextFilter(),
          fieldType: 'text',
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns: mockedColumns,
    isSortable: true,
    onSelect,
    onSort,
    onFilter,
  });

  const nameHeader = container.querySelector(
    '.iui-table-header .iui-cell',
  ) as HTMLDivElement;
  expect(nameHeader).toBeTruthy();
  expect(nameHeader.classList).not.toContain('iui-sorted');

  await userEvent.click(nameHeader);
  expect(onSort).toHaveBeenCalled();
  expect(onSelect).not.toHaveBeenCalled();

  await setFilter(container, '2');
  expect(onFilter).toHaveBeenCalled();
  expect(onSelect).not.toHaveBeenCalled();
});

it('should not show sorting icon if sorting is disabled', () => {
  const { container } = renderComponent({
    isSortable: false,
  });

  expect(container.querySelector('.iui-cell-end-icon .iui-sort')).toBeFalsy();
});

it('should not show sort icon if data is loading', () => {
  const { container } = renderComponent({
    data: [],
    isSortable: true,
    isLoading: true,
  });

  expect(container.querySelector('.iui-cell-end-icon .iui-sort')).toBeFalsy();
});

it('should show sort icon if more data is loading', () => {
  const { container } = renderComponent({
    isSortable: true,
    isLoading: true,
  });

  expect(container.querySelector('.iui-cell-end-icon .iui-sort')).toBeTruthy();
});

it('should not show sort icon if data is empty', () => {
  const { container } = renderComponent({
    isSortable: true,
    data: [],
  });

  expect(container.querySelector('.iui-cell-end-icon .iui-sort')).toBeFalsy();
});

it('should sort name column correctly', async () => {
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
    '.iui-table-header .iui-cell',
  ) as HTMLDivElement;
  expect(nameHeader).toBeTruthy();
  expect(nameHeader.classList).not.toContain('iui-sorted');
  let rows = container.querySelectorAll('.iui-table-body .iui-row');

  await assertRowsData(rows, mocked);

  const sortIcon = container.querySelector(
    '.iui-cell-end-icon .iui-sort',
  ) as HTMLDivElement;
  expect(sortIcon).toBeTruthy();

  //first click
  await userEvent.click(nameHeader);
  rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(nameHeader.classList).toContain('iui-sorted');
  await assertRowsData(rows, sortedByName);
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
  await userEvent.click(nameHeader);
  rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(nameHeader.classList).toContain('iui-sorted');
  await assertRowsData(rows, [...sortedByName].reverse());
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
  await userEvent.click(nameHeader);
  rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(nameHeader.classList).not.toContain('iui-sorted');
  await assertRowsData(rows, mocked);
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

it('should display correct sort icons for ascending first', async () => {
  const mockedColumns = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns: mockedColumns,
    isSortable: true,
  });
  const {
    container: { firstChild: sortUpIcon },
  } = render(<SvgSortUp className='iui-icon iui-sort' aria-hidden />);
  const {
    container: { firstChild: sortDownIcon },
  } = render(<SvgSortDown className='iui-icon iui-sort' aria-hidden />);
  const nameHeader = container.querySelector(
    '.iui-table-header .iui-cell',
  ) as HTMLDivElement;
  expect(nameHeader).toBeTruthy();

  // initial icon on column header
  expect(container.querySelector('.iui-cell-end-icon > svg')).toEqual(
    sortUpIcon,
  );

  // first click on column header
  await userEvent.click(nameHeader);
  expect(container.querySelector('.iui-cell-end-icon > svg')).toEqual(
    sortUpIcon,
  );

  // second click on column header
  await userEvent.click(nameHeader);
  expect(container.querySelector('.iui-cell-end-icon > svg')).toEqual(
    sortDownIcon,
  );

  // third click on column header to reset
  await userEvent.click(nameHeader);
  expect(container.querySelector('.iui-cell-end-icon > svg')).toEqual(
    sortUpIcon,
  );
});

it('should display correct sort icons for descending first', async () => {
  const mockedColumns = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          sortDescFirst: true,
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns: mockedColumns,
    isSortable: true,
  });
  const {
    container: { firstChild: sortUpIcon },
  } = render(<SvgSortUp className='iui-icon iui-sort' aria-hidden />);
  const {
    container: { firstChild: sortDownIcon },
  } = render(<SvgSortDown className='iui-icon iui-sort' aria-hidden />);
  const nameHeader = container.querySelector(
    '.iui-table-header .iui-cell',
  ) as HTMLDivElement;
  expect(nameHeader).toBeTruthy();

  // initial icon on column header
  expect(container.querySelector('.iui-cell-end-icon > svg')).toEqual(
    sortDownIcon,
  );

  // first click on column header
  await userEvent.click(nameHeader);
  expect(container.querySelector('.iui-cell-end-icon > svg')).toEqual(
    sortDownIcon,
  );

  // second click on column header
  await userEvent.click(nameHeader);
  expect(container.querySelector('.iui-cell-end-icon > svg')).toEqual(
    sortUpIcon,
  );

  // third click on column header to reset
  await userEvent.click(nameHeader);
  expect(container.querySelector('.iui-cell-end-icon > svg')).toEqual(
    sortDownIcon,
  );
});

it('should trigger onBottomReached', () => {
  const onBottomReached = jest.fn();
  const { container } = renderComponent({
    data: mockedData(50),
    onBottomReached,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(50);

  expect(onBottomReached).not.toHaveBeenCalled();
  expect(intersectionCallbacks.size).toBe(50);
  mockIntersection(rows[49]);

  expect(onBottomReached).toHaveBeenCalledTimes(1);
});

it('should trigger onBottomReached with filter applied', async () => {
  const onBottomReached = jest.fn();
  const mockedColumns = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          Filter: tableFilters.TextFilter(),
          fieldType: 'text',
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns: mockedColumns,
    data: mockedData(50),
    onBottomReached,
  });

  let rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(50);

  await setFilter(container, '1');
  rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(14);

  expect(onBottomReached).not.toHaveBeenCalled();
  mockIntersection(rows[13]);

  expect(onBottomReached).toHaveBeenCalledTimes(1);
});

it('should trigger onRowInViewport', () => {
  const onRowInViewport = jest.fn();
  const { container } = renderComponent({
    data: mockedData(50),
    onRowInViewport,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(50);

  expect(onRowInViewport).not.toHaveBeenCalled();
  expect(intersectionCallbacks.size).toBe(50);
  for (let i = 0; i < 10; i++) {
    mockIntersection(rows[i]);
  }

  expect(onRowInViewport).toHaveBeenCalledTimes(10);
});

it('should filter table', async () => {
  const onFilter = jest.fn();
  const mockedColumns = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          Filter: tableFilters.TextFilter(),
          fieldType: 'text',
        },
      ],
    },
  ];
  const { container } = renderComponent({ columns: mockedColumns, onFilter });

  expect(screen.queryByText('Header name')).toBeFalsy();
  let rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  await setFilter(container, '2');

  rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(1);
  expect(onFilter).toHaveBeenCalledWith(
    [{ fieldType: 'text', filterType: 'text', id: 'name', value: '2' }],
    expect.objectContaining({ filters: [{ id: 'name', value: '2' }] }),
  );
});

it('should filter false values', async () => {
  const columns = [
    {
      Header: 'Header',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
        {
          id: 'booleanValue',
          Header: 'Bool Value',
          accessor: 'booleanValue',
          Filter: BooleanFilter,
          filter: 'equals',
        },
      ],
    },
  ];

  const data = [
    { name: 'Name1', description: 'Description1', booleanValue: true },
    { name: 'Name2', description: 'Description2', booleanValue: false },
  ] as TestDataType[];

  const { container } = renderComponent({ columns, onFilter: jest.fn(), data });

  const filterIcon = container.querySelector(
    '.iui-filter-button .iui-button-icon',
  ) as HTMLElement;

  await userEvent.click(filterIcon);
  await userEvent.click(screen.getByText('False'));
  await userEvent.click(screen.getByText('Filter'));

  expect(screen.queryByText('Name1')).not.toBeInTheDocument();
  screen.getByText('Name2');
});

it('should not filter undefined values', async () => {
  const columns = [
    {
      Header: 'Header',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
        {
          id: 'booleanValue',
          Header: 'Bool Value',
          accessor: 'booleanValue',
          Filter: BooleanFilter,
          filter: 'equals',
        },
      ],
    },
  ];

  const data = [
    { name: 'Name1', description: 'Description1', booleanValue: true },
    { name: 'Name2', description: 'Description2', booleanValue: false },
    { name: 'Name3', description: 'Description2' },
  ] as TestDataType[];

  const { container } = renderComponent({ columns, onFilter: jest.fn(), data });

  const filterIcon = container.querySelector(
    '.iui-filter-button .iui-button-icon',
  ) as HTMLElement;

  await userEvent.click(filterIcon);
  await userEvent.click(screen.getByText('False'));
  await userEvent.click(screen.getByText('Filter'));

  expect(screen.queryByText('Name1')).not.toBeInTheDocument();
  screen.getByText('Name2');
  expect(screen.queryByText('Name3')).not.toBeInTheDocument();
});

it('should clear filter', async () => {
  const onFilter = jest.fn();
  const mockedColumns = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          Filter: tableFilters.TextFilter(),
          fieldType: 'text',
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns: mockedColumns,
    onFilter,
    initialState: { filters: [{ id: 'name', value: '2' }] },
  });

  expect(screen.queryByText('Header name')).toBeFalsy();
  let rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(1);

  const filterIcon = container.querySelector(
    '.iui-filter-button .iui-button-icon',
  ) as HTMLElement;
  expect(filterIcon).toBeTruthy();
  await userEvent.click(filterIcon);

  const filterInput = document.querySelector(
    '.iui-column-filter input',
  ) as HTMLInputElement;
  expect(filterInput).toBeTruthy();
  expect(filterInput).toBeVisible();
  expect(filterInput.value).toEqual('2');

  await userEvent.click(screen.getByText('Clear'));
  expect(filterInput).not.toBeVisible();

  rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);
  expect(onFilter).toHaveBeenCalledWith(
    [],
    expect.objectContaining({ filters: [] }),
  );
});

it('should not filter table when manualFilters flag is on', async () => {
  const onFilter = jest.fn();
  const mockedColumns = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          Filter: tableFilters.TextFilter(),
          fieldType: 'text',
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns: mockedColumns,
    onFilter,
    manualFilters: true,
  });

  expect(screen.queryByText('Header name')).toBeFalsy();
  let rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  await setFilter(container, '2');

  rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);
  expect(onFilter).toHaveBeenCalledWith(
    [{ fieldType: 'text', filterType: 'text', id: 'name', value: '2' }],
    expect.objectContaining({ filters: [{ id: 'name', value: '2' }] }),
  );
});

it('should not show filter icon when filter component is not set', () => {
  const mockedColumns = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns: mockedColumns,
  });

  expect(screen.queryByText('Header name')).toBeFalsy();
  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  const filterIcon = container.querySelector(
    '.iui-filter-button .iui-button-icon',
  ) as HTMLElement;
  expect(filterIcon).toBeFalsy();
});

it('should show active filter icon when more data is loading', async () => {
  const mockedColumns = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          Filter: tableFilters.TextFilter(),
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns: mockedColumns,
    isLoading: true,
  });

  await setFilter(container, '2');

  const filterIcon = container.querySelector(
    '.iui-filter-button.iui-active .iui-button-icon',
  ) as HTMLElement;
  expect(filterIcon).toBeTruthy();
});

it('should show message and active filter icon when there is no data after filtering', async () => {
  const mockedColumns = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          Filter: tableFilters.TextFilter(),
          fieldType: 'text',
        },
      ],
    },
  ];
  const { container } = renderComponent({ columns: mockedColumns });

  expect(screen.queryByText('Header name')).toBeFalsy();
  let rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  await setFilter(container, 'invalid value');

  rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(0);
  screen.getByText('No results. Clear filter.');
  const filterIcon = container.querySelector(
    '.iui-filter-button.iui-active .iui-button-icon',
  ) as HTMLElement;
  expect(filterIcon).toBeTruthy();
});

it('should show message and active filter icon when there is no data after manual filtering', async () => {
  const mockedColumns = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          Filter: tableFilters.TextFilter(),
          fieldType: 'text',
        },
      ],
    },
  ];
  const { container, rerender } = render(
    <Table
      data={mockedData()}
      columns={mockedColumns}
      emptyTableContent='Empty table'
      emptyFilteredTableContent='No results. Clear filter.'
      manualFilters={true}
    />,
  );

  expect(screen.queryByText('Header name')).toBeFalsy();
  let rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  await setFilter(container, 'invalid value');

  rerender(
    <Table
      data={[]}
      columns={mockedColumns}
      emptyTableContent='Empty table'
      emptyFilteredTableContent='No results. Clear filter.'
      manualFilters={true}
    />,
  );

  rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(0);
  screen.getByText('No results. Clear filter.');
  const filterIcon = container.querySelector(
    '.iui-filter-button.iui-active .iui-button-icon',
  ) as HTMLElement;
  expect(filterIcon).toBeTruthy();
});

it('should not trigger sorting when filter is clicked', async () => {
  const onFilter = jest.fn();
  const onSort = jest.fn();
  const mockedColumns = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          Filter: tableFilters.TextFilter(),
          fieldType: 'text',
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns: mockedColumns,
    onFilter,
    onSort,
    isSortable: true,
  });

  await setFilter(container, '2');

  expect(onFilter).toHaveBeenCalled();
  expect(onSort).not.toHaveBeenCalled();
});

it('should render filter dropdown in the correct document', async () => {
  const mockDocument = document.implementation.createHTMLDocument();
  const div = mockDocument.createElement('div');
  const mockContainer = mockDocument.body.appendChild(div);
  const onFilter = jest.fn();
  const mockedColumns = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          Filter: tableFilters.TextFilter(),
          fieldType: 'text',
        },
      ],
    },
  ];
  const { container } = renderComponent(
    { columns: mockedColumns, onFilter },
    undefined,
    mockContainer,
  );
  expect(container.querySelector('.iui-table')).toBeTruthy();

  const filterToggle = container.querySelector(
    '.iui-filter-button',
  ) as HTMLElement;
  expect(filterToggle).toBeTruthy();
  act(() => filterToggle.click());

  await waitFor(() =>
    expect(mockDocument.querySelector('.iui-column-filter')).toBeTruthy(),
  );
  expect(document.querySelector('.iui-column-filter')).toBeFalsy();
});

it('should rerender table when columns change', async () => {
  const data = mockedData();
  const { rerender } = render(
    <Table
      columns={[
        {
          Header: 'Header name',
          columns: [
            {
              id: 'name',
              Header: 'Name',
              Cell: () => <>test1</>,
            },
          ],
        },
      ]}
      data={data}
      emptyTableContent='No data.'
    />,
  );
  expect(screen.getAllByText('test1').length).toBe(3);

  rerender(
    <Table
      columns={[
        {
          Header: 'Header name',
          columns: [
            {
              id: 'name',
              Header: 'Name',
              Cell: () => <>test2</>,
            },
          ],
        },
      ]}
      data={data}
      emptyTableContent='No data.'
    />,
  );
  expect(screen.getAllByText('test2').length).toBe(3);
});

it('should expand correctly', async () => {
  const onExpandMock = jest.fn();
  const { container, getByText } = renderComponent({
    subComponent: (row) => (
      <div>{`Expanded component, name: ${row.original.name}`}</div>
    ),
    onExpand: onExpandMock,
  });
  const {
    container: { firstChild: expanderIcon },
  } = render(<SvgChevronRight className='iui-button-icon' aria-hidden />);

  expect(
    container.querySelectorAll(
      '.iui-button.iui-borderless > .iui-button-icon',
    )[0],
  ).toEqual(expanderIcon);

  await act(async () => {
    await userEvent.click(container.querySelectorAll('.iui-button')[0]);
  });

  getByText('Expanded component, name: Name1');
});

it('should expand correctly with a custom expander cell', async () => {
  const onExpandMock = jest.fn();
  const { getByText, queryByText } = renderComponent({
    subComponent: (row) => (
      <div>{`Expanded component, name: ${row.original.name}`}</div>
    ),
    onExpand: onExpandMock,
    expanderCell: (props: CellProps<TestDataType>) => {
      return (
        <button
          onClick={() => {
            props.row.toggleRowExpanded();
          }}
        >
          Expand {props.row.original.name}
        </button>
      );
    },
  });

  expect(queryByText('Expanded component, name: Name1')).toBeNull();
  expect(queryByText('Expanded component, name: Name3')).toBeNull();

  await act(async () => {
    await userEvent.click(getByText('Expand Name1'));
    await userEvent.click(getByText('Expand Name2'));
  });

  getByText('Expanded component, name: Name1');
  getByText('Expanded component, name: Name2');

  await act(async () => {
    await userEvent.click(getByText('Expand Name1'));
    await userEvent.click(getByText('Expand Name3'));
  });
  await waitFor(() =>
    expect(queryByText('Expanded component, name: Name1')).toBeNull(),
  );
  getByText('Expanded component, name: Name2');
  getByText('Expanded component, name: Name3');
  expect(onExpandMock).toHaveBeenCalledTimes(4);
});

it('should disable row and handle expansion accordingly', async () => {
  const onExpand = jest.fn();
  const { container } = renderComponent({
    onExpand,
    subComponent: (row) => (
      <div>{`Expanded component, name: ${row.original.name}`}</div>
    ),
    isRowDisabled: (rowData) => rowData.name === 'Name2',
  });

  expect(screen.queryByText('Header name')).toBeFalsy();
  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);
  expect(rows[0].classList).not.toContain('iui-disabled');
  expect(rows[1].classList).toContain('iui-disabled');
  expect(rows[2].classList).not.toContain('iui-disabled');

  const disabledRowCells = rows[1].querySelectorAll('.iui-cell');
  expect(disabledRowCells.length).toBe(4);
  disabledRowCells.forEach((cell) =>
    expect(cell.classList).toContain('iui-disabled'),
  );

  const expansionCells = container.querySelectorAll(
    '.iui-slot .iui-button',
  ) as NodeListOf<HTMLButtonElement>;
  expect(expansionCells.length).toBe(3);
  expect(expansionCells[0].disabled).toBe(false);
  expect(expansionCells[1].disabled).toBe(true);
  expect(expansionCells[2].disabled).toBe(false);

  await userEvent.click(expansionCells[1]);
  expect(onExpand).not.toHaveBeenCalled();

  await userEvent.click(expansionCells[0]);
  expect(onExpand).toHaveBeenCalled();
});

it('should disable row and handle selection accordingly', async () => {
  const onSelect = jest.fn();
  const onRowClick = jest.fn();
  const { container } = renderComponent({
    isSelectable: true,
    onSelect,
    onRowClick,
    isRowDisabled: (rowData) => rowData.name === 'Name2',
  });

  expect(screen.queryByText('Header name')).toBeFalsy();
  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);
  expect(rows[0].classList).not.toContain('iui-disabled');
  expect(rows[1].classList).toContain('iui-disabled');
  expect(rows[2].classList).not.toContain('iui-disabled');

  const disabledRowCells = rows[1].querySelectorAll('.iui-cell');
  expect(disabledRowCells.length).toBe(4);
  disabledRowCells.forEach((cell) =>
    expect(cell.classList).toContain('iui-disabled'),
  );

  const checkboxCells = container.querySelectorAll('.iui-slot .iui-checkbox');
  expect(checkboxCells.length).toBe(4);
  expect(checkboxCells[0]).not.toBeDisabled();
  expect(checkboxCells[1]).not.toBeDisabled();
  expect(checkboxCells[2]).toBeDisabled();
  expect(checkboxCells[3]).not.toBeDisabled();

  // Select disabled row
  await userEvent.click(checkboxCells[2]);
  expect(onSelect).not.toHaveBeenCalled();
  expect(onRowClick).not.toHaveBeenCalled();

  // Select first row
  await userEvent.click(checkboxCells[1]);
  expect(onSelect).toHaveBeenCalledWith([mockedData()[0]], expect.any(Object));
  const headerCheckbox = checkboxCells[0] as HTMLInputElement;
  expect(headerCheckbox.indeterminate).toBe(true);
  expect(headerCheckbox.checked).toBe(false);

  // Select all
  await userEvent.click(checkboxCells[0]);
  expect(onSelect).toHaveBeenCalledWith(
    [mockedData()[0], mockedData()[2]],
    expect.any(Object),
  );
  expect(headerCheckbox.indeterminate).toBe(false);
  expect(headerCheckbox.checked).toBe(true);

  // Deselect all
  await userEvent.click(checkboxCells[0]);
  expect(onSelect).toHaveBeenCalledWith([], expect.any(Object));
  expect(headerCheckbox.indeterminate).toBe(false);
  expect(headerCheckbox.checked).toBe(false);
});

it('should select and filter rows', async () => {
  const onSelect = jest.fn();
  const mockedColumns = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          Filter: tableFilters.TextFilter(),
          fieldType: 'text',
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns: mockedColumns,
    isSelectable: true,
    onSelect,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  let checkboxCells = container.querySelectorAll('.iui-slot .iui-checkbox');
  expect(checkboxCells.length).toBe(4);

  // Select first row
  await userEvent.click(checkboxCells[1]);
  expect(onSelect).toHaveBeenCalledWith([mockedData()[0]], expect.any(Object));
  const headerCheckbox = checkboxCells[0] as HTMLInputElement;
  expect(headerCheckbox.indeterminate).toBe(true);

  // Filter table
  await setFilter(container, '2');
  expect(headerCheckbox.indeterminate).toBe(true);

  checkboxCells = container.querySelectorAll('.iui-slot .iui-checkbox');
  expect(checkboxCells.length).toBe(2);

  // Select second row
  await userEvent.click(checkboxCells[1]);
  expect(onSelect).toHaveBeenCalledWith(
    [mockedData()[0], mockedData()[1]],
    expect.any(Object),
  );
  expect(headerCheckbox.indeterminate).toBe(true);

  // Clear filter
  await clearFilter(container);
  const checkboxInputs = container.querySelectorAll<HTMLInputElement>(
    '.iui-slot .iui-checkbox',
  );
  expect(checkboxInputs.length).toBe(4);
  expect(checkboxInputs[0].indeterminate).toBe(true);
  expect(checkboxInputs[1].checked).toBe(true);
  expect(checkboxInputs[2].checked).toBe(true);
  expect(checkboxInputs[3].checked).toBe(false);
});

it('should pass custom props to row', () => {
  const onMouseEnter = jest.fn();
  let element: HTMLInputElement | null = null;
  const onRef = (ref: HTMLInputElement) => {
    element = ref;
  };
  const rowProps = (row: Row<TestDataType>) => {
    return { onMouseEnter: () => onMouseEnter(row.original), ref: onRef };
  };
  const { container } = renderComponent({ rowProps });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  fireEvent.mouseEnter(rows[0]);
  expect(onMouseEnter).toHaveBeenCalledWith(mockedData()[0]);
  expect(element).toBeTruthy();
});

it.each(['condensed', 'extra-condensed'] as const)(
  'should render %s table',
  (density) => {
    const { container } = renderComponent({
      density: density,
    });
    expect(container.querySelector(`.iui-table.iui-${density}`)).toBeTruthy();
  },
);

it('should render sub-rows and handle expansions', async () => {
  const onExpand = jest.fn();
  const data = mockedSubRowsData();
  const { container } = renderComponent({ data, onExpand });

  let rows = container.querySelectorAll('.iui-table-body .iui-row');
  await assertRowsData(rows, data);

  await expandAll(container);

  rows = container.querySelectorAll('.iui-table-body .iui-row');
  await assertRowsData(rows, flattenData(data));

  expect(onExpand).toHaveBeenNthCalledWith(1, [data[0]], expect.any(Object));
  expect(onExpand).toHaveBeenNthCalledWith(
    2,
    [data[0], data[1]],
    expect.any(Object),
  );
  expect(onExpand).toHaveBeenNthCalledWith(
    3,
    [data[0], data[0].subRows[1], data[1]],
    expect.any(Object),
  );
});

it('should render filtered sub-rows', async () => {
  const data = mockedSubRowsData();
  const columns = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          Filter: tableFilters.TextFilter(),
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => {
            return <span>View</span>;
          },
        },
      ],
    },
  ];
  const { container } = renderComponent({ data, columns });

  await expandAll(container);

  let rows = container.querySelectorAll('.iui-table-body .iui-row');
  await assertRowsData(rows, flattenData(data));

  await setFilter(container, '2');
  rows = container.querySelectorAll('.iui-table-body .iui-row');
  await assertRowsData(rows, [
    { name: 'Row 1', description: 'Description 1' },
    { name: 'Row 1.2', description: 'Description 1.2' },
    { name: 'Row 1.2.1', description: 'Description 1.2.1' },
    { name: 'Row 1.2.2', description: 'Description 1.2.2' },
    { name: 'Row 2', description: 'Description 2' },
    { name: 'Row 2.1', description: 'Description 2.1' },
    { name: 'Row 2.2', description: 'Description 2.2' },
  ]);

  await clearFilter(container);
  rows = container.querySelectorAll('.iui-table-body .iui-row');
  await assertRowsData(rows, flattenData(data));
});

it('should handle sub-rows selection', async () => {
  const onSelect = jest.fn();
  const data = mockedSubRowsData();
  const { container } = renderComponent({
    data,
    onSelect,
    isSelectable: true,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  let checkboxes = container.querySelectorAll<HTMLInputElement>(
    '.iui-table-body .iui-checkbox',
  );
  expect(checkboxes.length).toBe(3);
  await userEvent.click(checkboxes[0]);

  await expandAll(container);

  checkboxes = container.querySelectorAll<HTMLInputElement>(
    '.iui-table-body .iui-checkbox',
  );
  expect(checkboxes.length).toBe(10);
  Array.from(checkboxes).forEach((checkbox, index) =>
    expect(!!checkbox.checked).toBe(index < 6),
  );

  expect(onSelect).toHaveBeenCalledWith(
    flattenData([data[0]]),
    expect.any(Object),
  );
});

it('should show indeterminate checkbox when some sub-rows are selected', async () => {
  const onSelect = jest.fn();
  const data = mockedSubRowsData();
  const { container } = renderComponent({
    data,
    onSelect,
    isSelectable: true,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  await expandAll(container);

  let checkboxes = container.querySelectorAll<HTMLInputElement>(
    '.iui-table-body .iui-checkbox',
  );
  expect(checkboxes.length).toBe(10);
  // Click row 1.2 checkbox
  await userEvent.click(checkboxes[2]);

  checkboxes = container.querySelectorAll<HTMLInputElement>(
    '.iui-table-body .iui-checkbox',
  );
  expect(checkboxes.length).toBe(10);
  expect(checkboxes[0].indeterminate).toBe(true);
  Array.from(checkboxes).forEach((checkbox, index) =>
    expect(!!checkbox.checked).toBe(index > 1 && index < 5),
  );

  expect(onSelect).toHaveBeenCalledWith(
    [data[0].subRows[1], ...data[0].subRows[1].subRows],
    expect.any(Object),
  );
});

it('should show indeterminate checkbox when a sub-row of a sub-row is selected', async () => {
  const onSelect = jest.fn();
  const data = mockedSubRowsData();
  const { container } = renderComponent({
    data,
    onSelect,
    isSelectable: true,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  await expandAll(container);

  let checkboxes = container.querySelectorAll<HTMLInputElement>(
    '.iui-table-body .iui-checkbox',
  );
  expect(checkboxes.length).toBe(10);
  // Click row 1.2.1 checkbox
  await userEvent.click(checkboxes[3]);

  checkboxes = container.querySelectorAll<HTMLInputElement>(
    '.iui-table-body .iui-checkbox',
  );
  expect(checkboxes.length).toBe(10);
  // Row 1
  expect(checkboxes[0].indeterminate).toBe(true);
  // Row 1.2
  expect(checkboxes[2].indeterminate).toBe(true);
  Array.from(checkboxes).forEach((checkbox, index) =>
    expect(!!checkbox.checked).toBe(index === 3),
  );

  expect(onSelect).toHaveBeenCalledWith(
    [data[0].subRows[1].subRows[0]],
    expect.any(Object),
  );
});

it('should show indeterminate checkbox when sub-row selected after filtering', async () => {
  const onSelect = jest.fn();
  const data = mockedSubRowsData();
  const columns = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          Filter: tableFilters.TextFilter(),
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => {
            return <span>View</span>;
          },
        },
      ],
    },
  ];
  const { container } = renderComponent({
    data,
    columns,
    onSelect,
    isSelectable: true,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  await setFilter(container, '2');
  await expandAll(container);

  let checkboxes = container.querySelectorAll<HTMLInputElement>(
    '.iui-table-body .iui-checkbox',
  );
  expect(checkboxes.length).toBe(7);
  // Click row 1.2 checkbox
  await userEvent.click(checkboxes[1]);

  checkboxes = container.querySelectorAll<HTMLInputElement>(
    '.iui-table-body .iui-checkbox',
  );
  expect(checkboxes.length).toBe(7);
  expect(checkboxes[0].indeterminate).toBe(true);
  Array.from(checkboxes).forEach((checkbox, index) =>
    expect(!!checkbox.checked).toBe(index > 0 && index < 4),
  );

  expect(onSelect).toHaveBeenCalledWith(
    [data[0].subRows[1], ...data[0].subRows[1].subRows],
    expect.any(Object),
  );
});

it('should show indeterminate checkbox when clicking on a row itself after filtering', async () => {
  const onSelect = jest.fn();
  const data = mockedSubRowsData();
  const columns = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          Filter: tableFilters.TextFilter(),
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => {
            return <span>View</span>;
          },
        },
      ],
    },
  ];
  const { container } = renderComponent({
    data,
    columns,
    onSelect,
    isSelectable: true,
  });

  let rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  await setFilter(container, '2');
  await expandAll(container);

  rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(7);
  // Click row 1
  await userEvent.click(rows[0]);

  const checkboxes = container.querySelectorAll<HTMLInputElement>(
    '.iui-table-body .iui-checkbox',
  );
  expect(checkboxes.length).toBe(7);
  expect(checkboxes[0].indeterminate).toBe(true);
  Array.from(checkboxes).forEach((checkbox, index) =>
    expect(!!checkbox.checked).toBe(index > 0 && index < 4),
  );

  expect(onSelect).toHaveBeenCalledWith(
    [data[0].subRows[1], ...data[0].subRows[1].subRows],
    expect.any(Object),
  );
});

it('should only select one row even if it has sub-rows when selectSubRows is false', async () => {
  const onSelect = jest.fn();
  const data = mockedSubRowsData();
  const { container } = renderComponent({
    data,
    onSelect,
    isSelectable: true,
    selectSubRows: false,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  let checkboxes = container.querySelectorAll<HTMLInputElement>(
    '.iui-table-body .iui-checkbox',
  );
  expect(checkboxes.length).toBe(3);
  await userEvent.click(checkboxes[0]);

  await expandAll(container);

  checkboxes = container.querySelectorAll<HTMLInputElement>(
    '.iui-table-body .iui-checkbox',
  );
  expect(checkboxes.length).toBe(10);
  Array.from(checkboxes).forEach((checkbox, index) =>
    expect(!!checkbox.checked).toBe(index < 1),
  );

  expect(onSelect).toHaveBeenCalledWith([data[0]], expect.any(Object));
});

it('should render sub-rows with custom expander', async () => {
  const data = mockedSubRowsData();
  const { container } = renderComponent({
    data,
    expanderCell: (props: CellProps<TestDataType>) => {
      return (
        <button
          onClick={() => {
            props.row.toggleRowExpanded();
          }}
        >
          Expand {props.row.original.name}
        </button>
      );
    },
  });

  let rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  await userEvent.click(screen.getByText('Expand Row 1'));
  await userEvent.click(screen.getByText('Expand Row 1.2'));
  await userEvent.click(screen.getByText('Expand Row 2'));

  rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(10);
});

it('should edit cell data', async () => {
  const onCellEdit = jest.fn();
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          cellRenderer: (props) => (
            <EditableCell {...props} onCellEdit={onCellEdit} />
          ),
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => {
            return <span>View</span>;
          },
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  await assertRowsData(rows);

  const editableCells = container.querySelectorAll(
    '.iui-cell[contenteditable]',
  );
  expect(editableCells).toHaveLength(3);

  fireEvent.input(editableCells[1], {
    target: { innerText: 'test data' },
  });
  fireEvent.blur(editableCells[1]);
  expect(onCellEdit).toHaveBeenCalledWith('name', 'test data', mockedData()[1]);

  fireEvent.input(editableCells[2], {
    target: { innerText: '' },
  });
  fireEvent.blur(editableCells[2]);
  expect(onCellEdit).toHaveBeenCalledWith('name', '', mockedData()[2]);
});

it('should handle unwanted actions on editable cell', async () => {
  const onCellEdit = jest.fn();
  const onSelect = jest.fn();
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          cellRenderer: (props) => (
            <EditableCell {...props} onCellEdit={onCellEdit} />
          ),
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => {
            return <span>View</span>;
          },
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
    isSelectable: true,
    onSelect,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  const editableCells = container.querySelectorAll(
    '.iui-cell[contenteditable]',
  );
  expect(editableCells).toHaveLength(3);

  fireEvent.keyDown(editableCells[1], { key: 'Enter' });
  expect(onCellEdit).not.toHaveBeenCalled();

  fireEvent.drop(editableCells[1]);
  expect(onCellEdit).not.toHaveBeenCalled();

  fireEvent.input(editableCells[1], {
    target: { innerText: 'test\n\r\r\ndata 1' },
  });
  fireEvent.blur(editableCells[1]);
  expect(onCellEdit).toHaveBeenCalledWith(
    'name',
    'test data 1',
    mockedData()[1],
  );

  await userEvent.click(editableCells[1]);
  expect(onSelect).not.toHaveBeenCalled();
});

it('should render data in pages', async () => {
  jest
    .spyOn(UseOverflow, 'useOverflow')
    .mockImplementation((items) => [jest.fn(), items.length]);
  const { container } = renderComponent({
    data: mockedData(100),
    pageSize: 10,
    paginatorRenderer: (props) => <TablePaginator {...props} />,
  });

  let rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows).toHaveLength(10);
  expect(rows[0].querySelector('.iui-cell')?.textContent).toEqual('Name1');
  expect(rows[9].querySelector('.iui-cell')?.textContent).toEqual('Name10');

  const pages = container.querySelectorAll<HTMLButtonElement>(
    '.iui-paginator .iui-paginator-page-button',
  );
  expect(pages).toHaveLength(10);
  await userEvent.click(pages[3]);
  rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows).toHaveLength(10);
  expect(rows[0].querySelector('.iui-cell')?.textContent).toEqual('Name31');
  expect(rows[9].querySelector('.iui-cell')?.textContent).toEqual('Name40');
});

it('should change page size', async () => {
  const { container } = renderComponent({
    data: mockedData(100),
    paginatorRenderer: (props) => (
      <TablePaginator {...props} pageSizeList={[10, 25, 50]} />
    ),
  });

  let rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows).toHaveLength(25);
  expect(rows[0].querySelector('.iui-cell')?.textContent).toEqual('Name1');
  expect(rows[24].querySelector('.iui-cell')?.textContent).toEqual('Name25');

  const pageSizeSelector = container.querySelector(
    '.iui-dropdown',
  ) as HTMLButtonElement;
  expect(pageSizeSelector).toBeTruthy();
  await userEvent.click(pageSizeSelector);

  await userEvent.click(screen.getByText('50 per page'));
  rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows).toHaveLength(50);
  expect(rows[0].querySelector('.iui-cell')?.textContent).toEqual('Name1');
  expect(rows[49].querySelector('.iui-cell')?.textContent).toEqual('Name50');
});

it('should handle resize by increasing width of current column and decreasing the next ones', () => {
  jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ width: 100 } as DOMRect);
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => <>View</>,
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
    isResizable: true,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  const resizer = container.querySelector('.iui-resizer') as HTMLDivElement;
  expect(resizer).toBeTruthy();

  fireEvent.mouseDown(resizer, { clientX: 100 });
  fireEvent.mouseMove(resizer, { clientX: 150 });
  fireEvent.mouseUp(resizer);

  const headerCells = container.querySelectorAll<HTMLDivElement>(
    '.iui-table-header .iui-cell',
  );
  expect(headerCells).toHaveLength(3);

  expect(headerCells[0].style.width).toBe('150px');
  expect(headerCells[1].style.width).toBe('50px');
  expect(headerCells[2].style.width).toBe('100px');
});

it('should handle resize with touch', () => {
  jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ width: 100 } as DOMRect);
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => <>View</>,
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
    isResizable: true,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  const resizer = container.querySelector('.iui-resizer') as HTMLDivElement;
  expect(resizer).toBeTruthy();

  fireEvent.touchStart(resizer, { touches: [{ clientX: 100 }] });
  fireEvent.touchMove(resizer, { touches: [{ clientX: 150 }] });
  fireEvent.touchEnd(resizer);

  const headerCells = container.querySelectorAll<HTMLDivElement>(
    '.iui-table-header .iui-cell',
  );
  expect(headerCells).toHaveLength(3);

  expect(headerCells[0].style.width).toBe('150px');
  expect(headerCells[1].style.width).toBe('50px');
  expect(headerCells[2].style.width).toBe('100px');
});

it('should prevent from resizing past 1px width', () => {
  jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ width: 100 } as DOMRect);
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => <>View</>,
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
    isResizable: true,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  const resizer = container.querySelector('.iui-resizer') as HTMLDivElement;
  expect(resizer).toBeTruthy();

  fireEvent.mouseDown(resizer, { clientX: 100 });
  fireEvent.mouseMove(resizer, { clientX: 198 });
  fireEvent.mouseMove(resizer, { clientX: 300 });
  fireEvent.mouseUp(resizer);

  const headerCells = container.querySelectorAll<HTMLDivElement>(
    '.iui-table-header .iui-cell',
  );
  expect(headerCells).toHaveLength(3);

  expect(headerCells[0].style.width).toBe('198px');
  expect(headerCells[1].style.width).toBe('2px');
  expect(headerCells[2].style.width).toBe('100px');
});

it('should prevent from resizing past max-width', () => {
  jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ width: 100 } as DOMRect);
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          maxWidth: 150,
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
          maxWidth: 150,
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => <>View</>,
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
    isResizable: true,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  const resizer = container.querySelector('.iui-resizer') as HTMLDivElement;
  expect(resizer).toBeTruthy();

  // Current column
  fireEvent.mouseDown(resizer, { clientX: 100 });
  fireEvent.mouseMove(resizer, { clientX: 150 });
  fireEvent.mouseMove(resizer, { clientX: 200 });
  fireEvent.mouseUp(resizer);

  const headerCells = container.querySelectorAll<HTMLDivElement>(
    '.iui-table-header .iui-cell',
  );
  expect(headerCells).toHaveLength(3);

  expect(headerCells[0].style.width).toBe('150px');
  expect(headerCells[1].style.width).toBe('50px');
  expect(headerCells[2].style.width).toBe('100px');

  // Next column
  fireEvent.mouseDown(resizer, { clientX: 150 });
  fireEvent.mouseMove(resizer, { clientX: 50 });
  fireEvent.mouseMove(resizer, { clientX: 10 });
  fireEvent.mouseUp(resizer);

  expect(headerCells[0].style.width).toBe('50px');
  expect(headerCells[1].style.width).toBe('150px');
  expect(headerCells[2].style.width).toBe('100px');
});

it('should prevent from resizing past min-width', () => {
  jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ width: 100 } as DOMRect);
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          minWidth: 50,
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
          minWidth: 50,
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => <>View</>,
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
    isResizable: true,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  const resizer = container.querySelector('.iui-resizer') as HTMLDivElement;
  expect(resizer).toBeTruthy();

  // Current column
  fireEvent.mouseDown(resizer, { clientX: 100 });
  fireEvent.mouseMove(resizer, { clientX: 50 });
  fireEvent.mouseMove(resizer, { clientX: 10 });
  fireEvent.mouseUp(resizer);

  const headerCells = container.querySelectorAll<HTMLDivElement>(
    '.iui-table-header .iui-cell',
  );
  expect(headerCells).toHaveLength(3);

  expect(headerCells[0].style.width).toBe('50px');
  expect(headerCells[1].style.width).toBe('150px');
  expect(headerCells[2].style.width).toBe('100px');

  // Next column
  fireEvent.mouseDown(resizer, { clientX: 50 });
  fireEvent.mouseMove(resizer, { clientX: 150 });
  fireEvent.mouseMove(resizer, { clientX: 190 });
  fireEvent.mouseUp(resizer);

  expect(headerCells[0].style.width).toBe('150px');
  expect(headerCells[1].style.width).toBe('50px');
  expect(headerCells[2].style.width).toBe('100px');
});

it('should not resize column with disabled resize but resize closest ones', () => {
  jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ width: 100 } as DOMRect);
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
          disableResizing: true,
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => <>View</>,
          disableResizing: true,
        },
        {
          id: 'edit',
          Header: 'edit',
          Cell: () => <>Edit</>,
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
    isResizable: true,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  // Current column
  const nameResizer = container.querySelector('.iui-resizer') as HTMLDivElement;
  expect(nameResizer).toBeTruthy();

  fireEvent.mouseDown(nameResizer, { clientX: 100 });
  fireEvent.mouseMove(nameResizer, { clientX: 150 });
  fireEvent.mouseUp(nameResizer);

  const headerCells = container.querySelectorAll<HTMLDivElement>(
    '.iui-table-header .iui-cell',
  );
  expect(headerCells).toHaveLength(4);

  expect(headerCells[0].style.width).toBe('150px');
  expect(headerCells[1].style.width).toBe('100px');
  expect(headerCells[2].style.width).toBe('100px');
  expect(headerCells[3].style.width).toBe('50px');

  // Description column shouldn't have resizer because resizing is disabled for it
  // and next column also isn't resizable
  const descriptionResizer = container.querySelector(
    '.iui-cell:nth-of-type(2) .iui-resizer',
  ) as HTMLDivElement;
  expect(descriptionResizer).toBeFalsy();

  // Last column
  const viewResizer = container.querySelector(
    '.iui-cell:nth-of-type(3) .iui-resizer',
  ) as HTMLDivElement;
  expect(viewResizer).toBeTruthy();

  fireEvent.mouseDown(viewResizer, { clientX: 350 });
  fireEvent.mouseMove(viewResizer, { clientX: 250 });
  fireEvent.mouseUp(viewResizer);

  expect(headerCells[0].style.width).toBe('50px');
  expect(headerCells[1].style.width).toBe('100px');
  expect(headerCells[2].style.width).toBe('100px');
  expect(headerCells[3].style.width).toBe('150px');
});

it('should not show resizer when there are no next resizable columns', () => {
  jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ width: 100 } as DOMRect);
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => <>View</>,
          disableResizing: true,
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
    isResizable: true,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  const descriptionResizer = container.querySelector(
    '.iui-cell:nth-of-type(2) .iui-resizer',
  ) as HTMLDivElement;
  expect(descriptionResizer).toBeFalsy();
});

it('should not trigger sort when resizing', () => {
  jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ width: 100 } as DOMRect);
  const onSort = jest.fn();
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => <>View</>,
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
    isResizable: true,
    isSortable: true,
    onSort,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  const resizer = container.querySelector('.iui-resizer') as HTMLDivElement;
  expect(resizer).toBeTruthy();

  fireEvent.mouseDown(resizer, { clientX: 100 });
  fireEvent.mouseMove(resizer, { clientX: 150 });
  fireEvent.mouseUp(resizer);
  fireEvent.click(resizer);

  expect(onSort).not.toHaveBeenCalled();
});

it('should handle table resize only when some columns were resized', () => {
  const htmlWidthMock = jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ width: 100 } as DOMRect);

  let triggerResize: (size: DOMRectReadOnly) => void = jest.fn();
  jest
    .spyOn(UseResizeObserver, 'useResizeObserver')
    .mockImplementation((onResize) => {
      triggerResize = onResize;
      return [
        jest.fn(),
        ({ disconnect: jest.fn() } as unknown) as ResizeObserver,
      ];
    });
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => <>View</>,
        },
      ],
    },
  ];
  const { container } = renderComponent({ columns, isResizable: true });

  // Initial render
  triggerResize({ width: 300 } as DOMRectReadOnly);

  const headerCells = container.querySelectorAll<HTMLDivElement>(
    '.iui-table-header .iui-cell',
  );
  expect(headerCells).toHaveLength(3);
  headerCells.forEach((cell) => expect(cell.style.width).toBe('0px'));

  const resizer = container.querySelector('.iui-resizer') as HTMLDivElement;
  expect(resizer).toBeTruthy();

  fireEvent.mouseDown(resizer, { clientX: 100 });
  fireEvent.mouseMove(resizer, { clientX: 150 });
  fireEvent.mouseUp(resizer);

  act(() => {
    htmlWidthMock.mockReturnValue({ width: 50 } as DOMRect);
    triggerResize({ width: 150 } as DOMRectReadOnly);
  });
  headerCells.forEach((cell) => expect(cell.style.width).toBe('50px'));
});

it('should not render resizer when resizer is disabled', () => {
  const { container } = renderComponent(undefined);

  const headerCells = container.querySelectorAll<HTMLDivElement>(
    '.iui-table-header .iui-cell',
  );
  expect(headerCells).toHaveLength(3);

  const resizer = container.querySelector('.iui-resizer') as HTMLDivElement;
  expect(resizer).toBeFalsy();
});

it('should render zebra striped table', () => {
  const { container } = renderComponent({ styleType: 'zebra-rows' });

  expect(
    container.querySelector('.iui-table-body.iui-zebra-striping'),
  ).toBeTruthy();
});

it('should sync body horizontal scroll with header scroll', () => {
  const { container } = renderComponent();

  const header = container.querySelector(
    '.iui-table-header-wrapper',
  ) as HTMLDivElement;
  const body = container.querySelector('.iui-table-body') as HTMLDivElement;

  expect(header.scrollLeft).toBe(0);
  expect(body.scrollLeft).toBe(0);

  // When body scrolls, header should scroll
  fireEvent.scroll(body, {
    target: { scrollLeft: 100 },
  });
  expect(header.scrollLeft).toBe(100);
  expect(body.scrollLeft).toBe(100);

  // When header scrolls, body should scroll
  fireEvent.scroll(header, {
    target: { scrollLeft: 0 },
  });
  expect(header.scrollLeft).toBe(0);
  expect(body.scrollLeft).toBe(0);
});

it.each([
  {
    testCase: 'dragging Name to View',
    srcIndex: 0,
    dstIndex: 2,
    resultingColumns: ['Description', 'View', 'Name'],
  },
  {
    testCase: 'dragging View to Name',
    srcIndex: 2,
    dstIndex: 0,
    resultingColumns: ['View', 'Name', 'Description'],
  },
  {
    testCase: 'dragging Name to itself and it should not change',
    srcIndex: 0,
    dstIndex: 0,
    resultingColumns: ['Name', 'Description', 'View'],
  },
  {
    testCase: 'dragging Name to Description',
    srcIndex: 0,
    dstIndex: 1,
    resultingColumns: ['Description', 'Name', 'View'],
  },
  {
    testCase: 'dragging View to Description',
    srcIndex: 2,
    dstIndex: 1,
    resultingColumns: ['Name', 'View', 'Description'],
  },
])(
  'should handle column reorder by $testCase',
  ({ srcIndex, dstIndex, resultingColumns }) => {
    const onSort = jest.fn();
    jest.spyOn(HTMLElement.prototype, 'offsetLeft', 'get').mockReturnValue(0);
    jest
      .spyOn(HTMLElement.prototype, 'offsetWidth', 'get')
      .mockReturnValue(100);
    const { container, rerender } = render(
      <Table
        columns={columns()}
        data={mockedData()}
        emptyTableContent='Empty table'
        emptyFilteredTableContent='No results. Clear filter.'
        enableColumnReordering
        isSortable
        onSort={onSort}
      />,
    );

    const headerCells = container.querySelectorAll<HTMLDivElement>(
      '.iui-table-header .iui-cell',
    );
    headerCells.forEach((cell) =>
      expect(cell.getAttribute('draggable')).toBe('true'),
    );

    const srcColumn = headerCells[srcIndex];
    const dstColumn = headerCells[dstIndex];

    fireEvent.dragStart(srcColumn);
    fireEvent.dragEnter(dstColumn);
    fireEvent.dragOver(dstColumn);
    // If dragging over itself
    if (srcIndex === dstIndex) {
      expect(dstColumn).not.toHaveClass('iui-reorder-column-left');
      expect(dstColumn).not.toHaveClass('iui-reorder-column-right');
    } else {
      expect(dstColumn).toHaveClass(
        'iui-reorder-column-' + (srcIndex < dstIndex ? 'right' : 'left'),
      );
    }
    fireEvent.drop(dstColumn);

    // Should not trigger sort
    expect(onSort).not.toHaveBeenCalled();

    rerender(
      <Table
        columns={columns()}
        data={mockedData()}
        emptyTableContent='Empty table'
        emptyFilteredTableContent='No results. Clear filter.'
        enableColumnReordering
        isSortable
        onSort={onSort}
      />,
    );

    container
      .querySelectorAll<HTMLDivElement>('.iui-table-header .iui-cell')
      .forEach((cell, index) =>
        expect(cell.textContent).toBe(resultingColumns[index]),
      );
  },
);

it('should not have `draggable` attribute on columns with `disableReordering` enabled', () => {
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => <>View</>,
          disableReordering: true,
        },
      ],
    },
  ];
  const { container } = render(
    <Table
      columns={columns}
      data={mockedData()}
      emptyTableContent='Empty table'
      emptyFilteredTableContent='No results. Clear filter.'
      enableColumnReordering
      isSelectable
      subComponent={(row) => (
        <div>{`Expanded component, name: ${row.original.name}`}</div>
      )}
    />,
  );

  const headerCells = container.querySelectorAll<HTMLDivElement>(
    '.iui-table-header .iui-cell',
  );
  expect(headerCells[0].getAttribute('draggable')).toBeFalsy(); // Selection column
  expect(headerCells[1].getAttribute('draggable')).toBeFalsy(); // Expander column
  expect(headerCells[2].getAttribute('draggable')).toBe('true'); // Name column
  expect(headerCells[3].getAttribute('draggable')).toBe('true'); // Description column
  expect(headerCells[4].getAttribute('draggable')).toBeFalsy(); // View column
});

it('should render empty action column', () => {
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
        {
          id: 'description',
          Header: 'Description',
          accessor: 'description',
        },
        {
          id: 'view',
          Header: 'View',
          Cell: () => <>View</>,
        },
        ActionColumn(),
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
  });

  const headerCells = container.querySelectorAll<HTMLDivElement>(
    '.iui-table-header .iui-cell',
  );

  expect(headerCells).toHaveLength(4);
  // The ActionColumn header cell should not contain a Column Manager
  expect(headerCells[3].firstElementChild).toBeNull();
});

it('should render empty action column with column manager', async () => {
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
        {
          id: 'description',
          Header: 'Description',
          accessor: 'description',
        },
        {
          id: 'view',
          Header: 'View',
          Cell: () => <>View</>,
        },
        ActionColumn({ columnManager: true }),
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
  });

  const headerCells = container.querySelectorAll<HTMLDivElement>(
    '.iui-table-header .iui-cell',
  );
  const columnManager = headerCells[headerCells.length - 1]
    .firstElementChild as Element;

  expect(
    columnManager.className.includes('iui-button iui-borderless'),
  ).toBeTruthy();

  await userEvent.click(columnManager);

  expect(document.querySelector('.iui-menu')).toBeTruthy();

  const columnManagerColumns = document.querySelectorAll('.iui-menu-item');
  expect(columnManagerColumns[0].textContent).toBe('Name');
  expect(columnManagerColumns[1].textContent).toBe('Description');
  expect(columnManagerColumns[2].textContent).toBe('View');
});

it('should render action column with column manager', async () => {
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
        {
          id: 'description',
          Header: 'Description',
          accessor: 'description',
        },
        {
          ...ActionColumn({ columnManager: true }),
          id: 'view',
          Cell: () => <>View</>,
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
  });

  expect(container.querySelectorAll('[role="columnheader"]').length).toBe(3);
  const actionColumn = container.querySelectorAll<HTMLInputElement>(
    '.iui-slot',
  );
  expect(
    actionColumn[0].firstElementChild?.className.includes(
      'iui-button iui-borderless',
    ),
  ).toBeTruthy();
  expect(actionColumn[1].textContent).toBe('View');
  expect(actionColumn[2].textContent).toBe('View');
  expect(actionColumn[3].textContent).toBe('View');

  const headerCells = container.querySelectorAll<HTMLDivElement>(
    '.iui-table-header .iui-cell',
  );
  const columnManager = headerCells[headerCells.length - 1]
    .firstElementChild as Element;

  await userEvent.click(columnManager);

  const dropdownMenu = document.querySelector('.iui-menu') as HTMLDivElement;
  expect(dropdownMenu).toBeTruthy();
  expect(dropdownMenu.classList.contains('iui-scroll')).toBeTruthy();
  expect(dropdownMenu).toHaveStyle('max-height: 315px');
});

it('should render dropdown menu with custom style and override default style', async () => {
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
        {
          id: 'description',
          Header: 'Description',
          accessor: 'description',
        },
        {
          id: 'view',
          Header: 'View',
          Cell: () => <>View</>,
        },
        ActionColumn({
          columnManager: {
            dropdownMenuProps: {
              className: 'testing-classname',
              style: {
                maxHeight: '600px',
                backgroundColor: 'red',
              },
              role: 'listbox',
            },
          },
        }),
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
  });

  const headerCells = container.querySelectorAll<HTMLDivElement>(
    '.iui-table-header .iui-cell',
  );
  const columnManager = headerCells[headerCells.length - 1]
    .firstElementChild as Element;

  expect(
    columnManager.className.includes('iui-button iui-borderless'),
  ).toBeTruthy();

  await userEvent.click(columnManager);

  const dropdownMenu = document.querySelector('.iui-menu') as HTMLDivElement;
  expect(dropdownMenu).toBeTruthy();
  expect(dropdownMenu.classList.contains('iui-scroll')).toBeTruthy();
  expect(dropdownMenu.classList.contains('testing-classname')).toBeTruthy();
  expect(dropdownMenu).toHaveStyle('max-height: 600px');
  expect(dropdownMenu).toHaveStyle('background-color: red');
  expect(dropdownMenu).toHaveAttribute('role', 'listbox');
});

it('should hide column when deselected in column manager', async () => {
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
        {
          id: 'description',
          Header: 'Description',
          accessor: 'description',
        },
        {
          id: 'view',
          Header: 'View',
          Cell: () => <>View</>,
        },
        ActionColumn({ columnManager: true }),
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
  });

  let headerCells = container.querySelectorAll<HTMLDivElement>(
    '.iui-table-header .iui-cell',
  );

  expect(headerCells).toHaveLength(4);
  expect(headerCells[0].textContent).toBe('Name');
  expect(headerCells[1].textContent).toBe('Description');
  expect(headerCells[2].textContent).toBe('View');

  const columnManager = container.querySelector('.iui-button') as HTMLElement;
  await userEvent.click(columnManager);
  const columnManagerColumns = document.querySelectorAll<HTMLLIElement>(
    '.iui-menu-item',
  );
  await userEvent.click(columnManagerColumns[1]);

  headerCells = container.querySelectorAll<HTMLDivElement>(
    '.iui-table-header .iui-cell',
  );

  expect(headerCells).toHaveLength(3);
  expect(headerCells[0].textContent).toBe('Name');
  expect(headerCells[1].textContent).toBe('View');
});

it('should be disabled in column manager if `disableToggleVisibility` is true', async () => {
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          disableToggleVisibility: true,
        },
        {
          id: 'description',
          Header: 'Description',
          accessor: 'description',
        },
        {
          id: 'view',
          Header: 'View',
          Cell: () => <>View</>,
        },
        ActionColumn({ columnManager: true }),
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
  });

  const columnManager = container.querySelector('.iui-button') as HTMLElement;

  await userEvent.click(columnManager);
  const columnManagerColumns = document.querySelectorAll<HTMLLIElement>(
    '.iui-menu-item',
  );
  expect(columnManagerColumns[0].classList).toContain('iui-disabled');

  expect(
    (columnManagerColumns[0].querySelector('.iui-checkbox') as HTMLInputElement)
      .disabled,
  ).toBeTruthy();
});

it('should add selection column manually', () => {
  const onSelect = jest.fn();
  const isDisabled = (rowData: TestDataType) => rowData.name === 'Name2';
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Table',
      columns: [
        SelectionColumn({ isDisabled }),
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
        {
          id: 'description',
          Header: 'Description',
          accessor: 'description',
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
    onSelect,
    isSelectable: true,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  const checkboxes = container.querySelectorAll<HTMLInputElement>(
    '.iui-table-body .iui-checkbox',
  );
  expect(checkboxes.length).toBe(3);
  expect(checkboxes[0].disabled).toBe(false);
  expect(checkboxes[1].disabled).toBe(true);
  expect(checkboxes[2].disabled).toBe(false);
  fireEvent.click(checkboxes[1]);
  expect(onSelect).toHaveBeenCalledWith(
    [{ name: 'Name2', description: 'Description2' }],
    expect.any(Object),
  );
});

it('should add expander column manually', () => {
  const onExpand = jest.fn();
  const subComponent = (row: Row<TestDataType>) => (
    <div>{`Expanded component, name: ${row.original.name}`}</div>
  );
  const isRowDisabled = (rowData: TestDataType) => rowData.name === 'Name2';
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Table',
      columns: [
        ExpanderColumn({ subComponent, isDisabled: isRowDisabled }),
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
        },
        {
          id: 'description',
          Header: 'Description',
          accessor: 'description',
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
    subComponent,
    onExpand,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  const expanders = container.querySelectorAll<HTMLButtonElement>(
    '.iui-row-expander',
  );
  expect(expanders.length).toBe(3);
  expect(expanders[0].disabled).toBe(false);
  expect(expanders[1].disabled).toBe(true);
  expect(expanders[2].disabled).toBe(false);
  fireEvent.click(expanders[2]);
  expect(onExpand).toHaveBeenCalledWith(
    [{ name: 'Name3', description: 'Description3' }],
    expect.any(Object),
  );
});

it('should add disabled column', () => {
  const isCellDisabled = (rowData: TestDataType) => rowData.name === 'Name2';
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Table',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          cellRenderer: (props) => (
            <DefaultCell {...props} isDisabled={isCellDisabled} />
          ),
        },
        {
          id: 'description',
          Header: 'Description',
          accessor: 'description',
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
  });

  const disabledCell = container.querySelector(
    '.iui-cell.iui-disabled',
  ) as HTMLElement;
  expect(disabledCell).toBeTruthy();
  expect(disabledCell.textContent).toBe('Name2');
});

it('should show column enabled when whole row is disabled', () => {
  const isCellDisabled = (rowData: TestDataType) => rowData.name !== 'Name2';
  const isRowDisabled = (rowData: TestDataType) => rowData.name === 'Name2';
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Table',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          cellRenderer: (props) => (
            <DefaultCell {...props} isDisabled={isCellDisabled} />
          ),
        },
        {
          id: 'description',
          Header: 'Description',
          accessor: 'description',
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
    isRowDisabled,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);
  expect(rows[0].classList).not.toContain('iui-disabled');
  expect(rows[1].classList).toContain('iui-disabled');
  expect(rows[2].classList).not.toContain('iui-disabled');

  const rowCells = rows[1].querySelectorAll('.iui-cell');
  expect(rowCells.length).toBe(2);
  expect(rowCells[0].classList).not.toContain('iui-disabled');
  expect(rowCells[1].classList).toContain('iui-disabled');
});

it('should render selectable rows without select column', async () => {
  const onRowClick = jest.fn();
  const { container, getByText } = renderComponent({
    isSelectable: true,
    selectionMode: 'single',
    onRowClick,
  });

  const rows = container.querySelectorAll('.iui-table-body .iui-row');
  expect(rows.length).toBe(3);

  expect(container.querySelectorAll('.iui-slot .iui-checkbox').length).toBe(0);

  await userEvent.click(getByText(mockedData()[1].name));
  expect(rows[1].classList).toContain('iui-selected');
  expect(onRowClick).toHaveBeenCalledTimes(1);

  await userEvent.click(getByText(mockedData()[2].name));
  expect(rows[1].classList).not.toContain('iui-selected');
  expect(rows[2].classList).toContain('iui-selected');
  expect(onRowClick).toHaveBeenCalledTimes(2);

  //Test that ctrl clicking doesn't highlight more than one row
  const user = userEvent.setup();
  await user.keyboard('[ControlLeft>]'); // Press Control (without releasing it)
  await user.click(getByText(mockedData()[1].name)); // Perform a click with `ctrlKey: true`
  expect(rows[1].classList).toContain('iui-selected');
  expect(rows[2].classList).not.toContain('iui-selected');
  expect(onRowClick).toHaveBeenCalledTimes(3);
});

it('should not throw on headless table', () => {
  const columns: Column<TestDataType>[] = [
    {
      id: 'name',
      Header: 'Name',
      accessor: 'name',
    },
    {
      id: 'description',
      Header: 'Description',
      accessor: 'description',
    },
  ];
  const { container } = renderComponent({
    columns,
  });

  expect(container.querySelector('.iui-table-header .iui-row')).toBeFalsy();
  expect(container.querySelector('.iui-table-body')).toBeTruthy();
});

it('should scroll to selected item in non-virtualized table', async () => {
  let scrolledElement: HTMLElement | null = null;
  jest
    .spyOn(HTMLElement.prototype, 'scrollIntoView')
    .mockImplementation(function (this: HTMLElement) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      scrolledElement = this;
    });

  const data = mockedData(50);
  renderComponent({
    data,
    scrollToRow: (rows) => rows.findIndex((row) => row.original === data[25]),
  });

  expect(scrolledElement).toBeTruthy();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  expect(scrolledElement!.querySelector('.iui-cell')?.textContent).toBe(
    data[25].name,
  );
});

it('should render sticky columns correctly', () => {
  jest
    .spyOn(HTMLDivElement.prototype, 'scrollWidth', 'get')
    .mockReturnValue(900);
  jest
    .spyOn(HTMLDivElement.prototype, 'clientWidth', 'get')
    .mockReturnValue(500);
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          width: 400,
          sticky: 'left',
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
          width: 400,
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => <>View</>,
          width: 100,
          sticky: 'right',
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
  });

  const leftSideStickyCells = container.querySelectorAll(
    '.iui-cell-sticky:first-of-type',
  );
  expect(leftSideStickyCells.length).toBe(4);
  leftSideStickyCells.forEach((cell) => {
    expect(cell.querySelector('.iui-cell-shadow-left')).toBeFalsy();
    expect(cell.querySelector('.iui-cell-shadow-right')).toBeFalsy();
  });

  const rightSideStickyCells = container.querySelectorAll(
    '.iui-cell-sticky:last-of-type',
  );
  expect(rightSideStickyCells.length).toBe(4);
  rightSideStickyCells.forEach((cell) => {
    expect(cell.querySelector('.iui-cell-shadow-left')).toBeTruthy();
    expect(cell.querySelector('.iui-cell-shadow-right')).toBeFalsy();
  });

  // Scroll a bit to the right
  const body = container.querySelector('.iui-table-body') as HTMLDivElement;
  fireEvent.scroll(body, {
    target: { scrollLeft: 100 },
  });

  expect(leftSideStickyCells.length).toBe(4);
  leftSideStickyCells.forEach((cell) => {
    expect(cell.querySelector('.iui-cell-shadow-left')).toBeFalsy();
    expect(cell.querySelector('.iui-cell-shadow-right')).toBeTruthy();
  });

  expect(rightSideStickyCells.length).toBe(4);
  rightSideStickyCells.forEach((cell) => {
    expect(cell.querySelector('.iui-cell-shadow-left')).toBeTruthy();
    expect(cell.querySelector('.iui-cell-shadow-right')).toBeFalsy();
  });

  // Scroll to the very right
  fireEvent.scroll(body, {
    target: { scrollLeft: 400 },
  });

  expect(leftSideStickyCells.length).toBe(4);
  leftSideStickyCells.forEach((cell) => {
    expect(cell.querySelector('.iui-cell-shadow-left')).toBeFalsy();
    expect(cell.querySelector('.iui-cell-shadow-right')).toBeTruthy();
  });

  expect(rightSideStickyCells.length).toBe(4);
  rightSideStickyCells.forEach((cell) => {
    expect(cell.querySelector('.iui-cell-shadow-left')).toBeFalsy();
    expect(cell.querySelector('.iui-cell-shadow-right')).toBeFalsy();
  });
});

it('should have correct sticky left style property', () => {
  jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ width: 400 } as DOMRect);
  jest
    .spyOn(HTMLDivElement.prototype, 'scrollWidth', 'get')
    .mockReturnValue(900);
  jest
    .spyOn(HTMLDivElement.prototype, 'clientWidth', 'get')
    .mockReturnValue(500);
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          width: 400,
          sticky: 'left',
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
          width: 400,
          sticky: 'left',
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => <>View</>,
          width: 100,
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
  });

  const nameCells = container.querySelectorAll<HTMLElement>(
    '.iui-cell-sticky:first-of-type',
  );
  expect(nameCells.length).toBe(4);
  nameCells.forEach((cell) => {
    expect(cell).toHaveStyle('--iui-table-sticky-left: 0px');
  });

  const descriptionCells = container.querySelectorAll<HTMLElement>(
    '.iui-cell-sticky:nth-of-type(2)',
  );
  expect(descriptionCells.length).toBe(4);
  descriptionCells.forEach((cell) => {
    expect(cell).toHaveStyle('--iui-table-sticky-left: 400px');
  });
});

it('should have correct sticky left style property when prior column does not have sticky prop', () => {
  jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ width: 400 } as DOMRect);
  jest
    .spyOn(HTMLDivElement.prototype, 'scrollWidth', 'get')
    .mockReturnValue(900);
  jest
    .spyOn(HTMLDivElement.prototype, 'clientWidth', 'get')
    .mockReturnValue(500);
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          width: 400,
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
          width: 400,
          sticky: 'left',
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => <>View</>,
          width: 100,
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
  });

  const nameCells = container.querySelectorAll<HTMLElement>(
    '.iui-cell-sticky:first-of-type',
  );
  expect(nameCells.length).toBe(4);
  nameCells.forEach((cell) => {
    expect(cell).toHaveStyle('--iui-table-sticky-left: 0px');
  });

  const descriptionCells = container.querySelectorAll<HTMLElement>(
    '.iui-cell-sticky:nth-of-type(2)',
  );
  expect(descriptionCells.length).toBe(4);
  descriptionCells.forEach((cell) => {
    expect(cell).toHaveStyle('--iui-table-sticky-left: 400px');
  });
});

it('should have correct sticky right style property', () => {
  jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ width: 400 } as DOMRect);
  jest
    .spyOn(HTMLDivElement.prototype, 'scrollWidth', 'get')
    .mockReturnValue(900);
  jest
    .spyOn(HTMLDivElement.prototype, 'clientWidth', 'get')
    .mockReturnValue(500);
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          width: 400,
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
          width: 400,
          sticky: 'right',
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => <>View</>,
          width: 400,
          sticky: 'right',
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
  });

  const descriptionCells = container.querySelectorAll<HTMLElement>(
    '.iui-cell-sticky:nth-of-type(2)',
  );
  expect(descriptionCells.length).toBe(4);
  descriptionCells.forEach((cell) => {
    expect(cell).toHaveStyle('--iui-table-sticky-right: 400px');
  });

  const viewCells = container.querySelectorAll<HTMLElement>(
    '.iui-cell-sticky:nth-of-type(3)',
  );
  expect(viewCells.length).toBe(4);
  viewCells.forEach((cell) => {
    expect(cell).toHaveStyle('--iui-table-sticky-right: 0px');
  });
});

it('should have correct sticky right style property when column after does not have sticky prop', () => {
  jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ width: 400 } as DOMRect);
  jest
    .spyOn(HTMLDivElement.prototype, 'scrollWidth', 'get')
    .mockReturnValue(900);
  jest
    .spyOn(HTMLDivElement.prototype, 'clientWidth', 'get')
    .mockReturnValue(500);
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          width: 400,
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
          width: 400,
          sticky: 'right',
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => <>View</>,
          width: 400,
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
  });

  const descriptionCells = container.querySelectorAll<HTMLElement>(
    '.iui-cell-sticky:nth-of-type(2)',
  );
  expect(descriptionCells.length).toBe(4);
  descriptionCells.forEach((cell) => {
    expect(cell).toHaveStyle('--iui-table-sticky-right: 400px');
  });

  const viewCells = container.querySelectorAll<HTMLElement>(
    '.iui-cell-sticky:nth-of-type(3)',
  );
  expect(viewCells.length).toBe(4);
  viewCells.forEach((cell) => {
    expect(cell).toHaveStyle('--iui-table-sticky-right: 0px');
  });
});

it('should have correct sticky left style property after resizing', () => {
  jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ width: 400 } as DOMRect);
  jest
    .spyOn(HTMLDivElement.prototype, 'scrollWidth', 'get')
    .mockReturnValue(900);
  jest
    .spyOn(HTMLDivElement.prototype, 'clientWidth', 'get')
    .mockReturnValue(500);
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          width: 400,
          sticky: 'left',
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
          width: 400,
          sticky: 'left',
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => <>View</>,
          width: 100,
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
    isResizable: true,
  });

  const nameCells = container.querySelectorAll<HTMLElement>(
    '.iui-cell-sticky:first-of-type',
  );
  expect(nameCells.length).toBe(4);
  nameCells.forEach((cell) => {
    expect(cell).toHaveStyle('--iui-table-sticky-left: 0px');
  });

  const descriptionCells = container.querySelectorAll<HTMLElement>(
    '.iui-cell-sticky:nth-of-type(2)',
  );
  expect(descriptionCells.length).toBe(4);
  descriptionCells.forEach((cell) => {
    expect(cell).toHaveStyle('--iui-table-sticky-left: 400px');
  });

  // Resize
  const resizer = container.querySelector('.iui-resizer') as HTMLDivElement;
  expect(resizer).toBeTruthy();

  fireEvent.mouseDown(resizer, { clientX: 400 });
  fireEvent.mouseMove(resizer, { clientX: 450 });
  fireEvent.mouseUp(resizer);

  nameCells.forEach((cell) => {
    expect(cell).toHaveStyle('--iui-table-sticky-left: 0px');
  });
  descriptionCells.forEach((cell) => {
    expect(cell).toHaveStyle('--iui-table-sticky-left: 450px');
  });
});

it('should make column sticky and then non-sticky after dragging sticky column ahead of it and back', () => {
  jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ width: 400 } as DOMRect);
  jest
    .spyOn(HTMLDivElement.prototype, 'scrollWidth', 'get')
    .mockReturnValue(900);
  jest
    .spyOn(HTMLDivElement.prototype, 'clientWidth', 'get')
    .mockReturnValue(500);
  const columns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          width: 400,
          sticky: 'left',
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
          width: 400,
        },
        {
          id: 'view',
          Header: 'view',
          Cell: () => <>View</>,
          width: 100,
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns,
    enableColumnReordering: true,
  });

  let nameCells = container.querySelectorAll<HTMLElement>(
    '.iui-cell:first-of-type',
  );
  expect(nameCells.length).toBe(4);
  nameCells.forEach((cell) => {
    expect(cell).toHaveStyle('--iui-table-sticky-left: 0px');
  });

  let descriptionCells = container.querySelectorAll<HTMLElement>(
    '.iui-cell:nth-of-type(2)',
  );
  expect(descriptionCells.length).toBe(4);
  descriptionCells.forEach((cell) => {
    expect(cell).not.toHaveStyle('--iui-table-sticky-left: 400px');
  });

  // Dragging sticky Name column ahead of Description column
  fireEvent.dragStart(nameCells[0]);
  fireEvent.dragEnter(descriptionCells[0]);
  fireEvent.dragOver(descriptionCells[0]);
  fireEvent.drop(descriptionCells[0]);

  nameCells = container.querySelectorAll<HTMLElement>(
    '.iui-cell:nth-of-type(2)',
  );
  expect(nameCells.length).toBe(4);
  nameCells.forEach((cell) => {
    expect(cell).toHaveStyle('--iui-table-sticky-left: 400px');
  });

  descriptionCells = container.querySelectorAll<HTMLElement>(
    '.iui-cell:first-of-type',
  );
  expect(descriptionCells.length).toBe(4);
  descriptionCells.forEach((cell) => {
    expect(cell).toHaveStyle('--iui-table-sticky-left: 0px');
  });

  // Dragging Name column back to the beginning
  fireEvent.dragStart(nameCells[0]);
  fireEvent.dragEnter(descriptionCells[0]);
  fireEvent.dragOver(descriptionCells[0]);
  fireEvent.drop(descriptionCells[0]);

  nameCells = container.querySelectorAll<HTMLElement>(
    '.iui-cell:first-of-type',
  );
  expect(nameCells.length).toBe(4);
  nameCells.forEach((cell) => {
    expect(cell).toHaveStyle('--iui-table-sticky-left: 0px');
  });

  descriptionCells = container.querySelectorAll<HTMLElement>(
    '.iui-cell:nth-of-type(2)',
  );
  expect(descriptionCells.length).toBe(4);
  descriptionCells.forEach((cell) => {
    expect(cell).not.toHaveStyle('--iui-table-sticky-left: 400px');
  });
});

it('should render start and end cell icons', () => {
  const testColumns: Column<TestDataType>[] = [
    {
      Header: 'Header name',
      columns: [
        {
          id: 'name',
          Header: 'Name',
          accessor: 'name',
          cellRenderer: (props) => {
            return <DefaultCell {...props} startIcon={<SvgPlaceholder />} />;
          },
        },
        {
          id: 'description',
          Header: 'description',
          accessor: 'description',
          cellRenderer: (props) => {
            return <DefaultCell {...props} endIcon={<SvgDeveloper />} />;
          },
        },
      ],
    },
  ];
  const { container } = renderComponent({
    columns: testColumns,
  });

  const {
    container: { firstChild: placeholderIcon },
  } = render(<SvgPlaceholder />);
  const {
    container: { firstChild: developerIcon },
  } = render(<SvgDeveloper />);

  const row = container.querySelector(
    '.iui-table-body .iui-row',
  ) as HTMLDivElement;
  const cells = row.querySelectorAll('.iui-cell');

  const startIcon = cells[0].querySelector(
    '.iui-cell-start-icon',
  ) as HTMLDivElement;
  expect(startIcon).toBeTruthy();
  expect(startIcon.querySelector('svg')).toEqual(placeholderIcon);

  const endIcon = cells[1].querySelector(
    '.iui-cell-end-icon',
  ) as HTMLDivElement;
  expect(endIcon).toBeTruthy();
  expect(endIcon.querySelector('svg')).toEqual(developerIcon);
});

it.each(['positive', 'warning', 'negative'] as const)(
  'should render cell with %s status',
  (status) => {
    const columns: Column<TestDataType>[] = [
      {
        Header: 'Header name',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
            cellRenderer: (props) => {
              return <DefaultCell {...props} status={status} />;
            },
          },
          {
            id: 'description',
            Header: 'description',
            accessor: 'description',
          },
        ],
      },
    ];
    const { container } = renderComponent({
      columns,
    });

    const row = container.querySelector(
      '.iui-table-body .iui-row',
    ) as HTMLDivElement;
    const cells = row.querySelectorAll('.iui-cell');

    expect(cells[0]).toHaveClass(`iui-${status}`);
    expect(cells[1]).not.toHaveClass(`iui-${status}`);
  },
);

it.each(['positive', 'warning', 'negative'] as const)(
  'should render row with %s status',
  (rowStatus) => {
    const { container } = renderComponent({
      rowProps: (row) => {
        return {
          status: row.index === 0 ? rowStatus : undefined,
        };
      },
    });

    const tableBody = container.querySelector(
      '.iui-table-body',
    ) as HTMLDivElement;
    const rows = tableBody.querySelectorAll('.iui-row');
    expect(rows[0]).toHaveClass(`iui-${rowStatus}`);
    expect(rows[1]).not.toHaveClass(`iui-${rowStatus}`);
  },
);
