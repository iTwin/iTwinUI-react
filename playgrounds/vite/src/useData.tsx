import { useMemo } from 'react';

export type TableStoryDataType = {
  index: number;
  name: string;
  description: string;
  id: string;
  startDate: Date;
  endDate: Date;
};

export function useData(count: number): TableStoryDataType[] {
  const data = useMemo((): TableStoryDataType[] => {
    const data = new Array(count).fill(null).map(
      (item, index) =>
        ({
          index: index,
          name: `Name${index}`,
          description: `Description${index}`,
          id: String(index),
          startDate: new Date('May 1, 20201'),
          endDate: new Date('Jun 1, 2021'),
        } as TableStoryDataType),
    );

    return data;
  }, [count]);

  return data;
}
