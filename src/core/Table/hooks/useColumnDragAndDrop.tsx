/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import {
  HeaderGroup,
  Hooks,
  IdType,
  makePropGetter,
  TableInstance,
  TableKeyedProps,
  useGetLatest,
} from 'react-table';

export const useColumnDragAndDrop = <T extends Record<string, unknown>>(
  isEnabled: boolean,
) => (hooks: Hooks<T>) => {
  hooks.getDragAndDropProps = [defaultGetDragAndDropProps(isEnabled)];
  hooks.useInstance.push(useInstance);
};

const defaultGetDragAndDropProps = <T extends Record<string, unknown>>(
  isEnabled: boolean,
) => (
  props: TableKeyedProps,
  {
    instance,
    header,
  }: {
    instance: TableInstance;
    header: HeaderGroup;
  },
) => {
  if (!isEnabled) {
    return props;
  }

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) =>
    event.dataTransfer.setData('text', header.id);

  const setOnDragColumnStyle = (
    event: React.DragEvent<HTMLDivElement>,
    position?: 'left' | 'right',
  ) => {
    const columnElement = event.target as HTMLElement;
    columnElement.classList.remove('iui-reorder-column-right');
    columnElement.classList.remove('iui-reorder-column-left');
    if (position === 'left') {
      columnElement.classList.add('iui-reorder-column-left');
    } else if (position === 'right') {
      columnElement.classList.add('iui-reorder-column-right');
    }
  };

  const reorderColumns = (
    tableColumns: IdType<T>[],
    srcIndex: number,
    dstIndex: number,
  ) => {
    const newTableColumns = [...tableColumns];
    const [removed] = newTableColumns.splice(srcIndex, 1);
    newTableColumns.splice(
      // When dragging column to the right, we need to decrease the index
      // because we removed column before and indexes shifted to the left.
      dstIndex > srcIndex ? dstIndex - 1 : dstIndex,
      0,
      removed,
    );
    return newTableColumns;
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const columnElement = event.target as HTMLElement;
    const middlePoint =
      columnElement.offsetLeft + columnElement.offsetWidth / 2;
    setOnDragColumnStyle(event, event.clientX > middlePoint ? 'right' : 'left');
  };

  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    setOnDragColumnStyle(event);
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragColumnStyle(event);

    const srcColumnId = event.dataTransfer.getData('text');
    const columnIds = instance.flatHeaders.map((x) => x.id);
    const srcIndex = columnIds.findIndex((x) => x === srcColumnId);
    const dstIndex = columnIds.findIndex((x) => x === header.id);

    if (srcIndex === dstIndex) {
      return;
    }

    const columnElement = event.target as HTMLElement;
    const middlePoint =
      columnElement.offsetLeft + columnElement.offsetWidth / 2;

    instance.setColumnOrder(
      reorderColumns(
        columnIds,
        srcIndex,
        // When dropped on the right side of the column, need to increase the index by 1
        event.clientX > middlePoint ? dstIndex + 1 : dstIndex,
      ),
    );
  };

  return [
    props,
    {
      draggable: true,
      onDragStart,
      onDragOver,
      onDragLeave,
      onDrop,
    },
  ];
};

const useInstance = <T extends Record<string, unknown>>(
  instance: TableInstance<T>,
) => {
  const { flatHeaders, getHooks } = instance;

  const getInstance = useGetLatest(instance);

  flatHeaders.forEach((header) => {
    header.getDragAndDropProps = makePropGetter(
      getHooks().getDragAndDropProps,
      {
        instance: getInstance(),
        header,
      },
    );
  });
};
