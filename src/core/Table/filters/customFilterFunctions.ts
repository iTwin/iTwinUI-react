/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { IdType, Row } from 'react-table';

const isValidDate = (date: Date | undefined) =>
  !!date && !isNaN(date.valueOf());

const betweenDate = <T extends Record<string, unknown>>(
  rows: Row<T>[],
  ids: IdType<T>[],
  filterValue: [Date?, Date?],
) => {
  const [min, max] = filterValue || [];
  console.log(filterValue);

  const MAX_DATE_VALUE = 8640000000000000;
  const minValue = (isValidDate(min) ? min : new Date(-MAX_DATE_VALUE)) as Date;
  const maxValue = (isValidDate(max) ? max : new Date(MAX_DATE_VALUE)) as Date;

  return rows.filter((row) => {
    return ids.some((id) => {
      const rowValue = row.values[id] as Date;
      return (
        rowValue.valueOf() >= minValue.valueOf() &&
        rowValue.valueOf() <= maxValue.valueOf()
      );
    });
  });
};

betweenDate.autoRemove = (val: [Date?, Date?]) => {
  return !val || (!isValidDate(val[0]) && !isValidDate(val[1]));
};

export const customFilterFunctions = {
  betweenDate,
};
