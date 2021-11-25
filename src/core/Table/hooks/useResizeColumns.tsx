import React from 'react';
import {
  actions,
  ActionType,
  ColumnInstance,
  HeaderGroup,
  Hooks,
  makePropGetter,
  TableInstance,
  TableKeyedProps,
  TableState,
  useGetLatest,
} from 'react-table';

export const useResizeColumns = <T extends Record<string, unknown>>(
  hooks: Hooks<T>,
) => {
  hooks.getResizerProps = [defaultGetResizerProps];
  // hooks.getHeaderProps.push({
  //   style: {
  //     position: 'relative',
  //   },
  // });
  hooks.stateReducers.push(reducer);
  // hooks.useInstance.push(useInstance);
  hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions);
};

const defaultGetResizerProps = (
  props: TableKeyedProps,
  {
    instance,
    header,
    nextHeader,
  }: {
    instance: TableInstance;
    header: HeaderGroup;
    nextHeader: HeaderGroup;
  },
) => {
  const { dispatch, flatHeaders } = instance;

  const onResizeStart = (
    e: React.TouchEvent & React.MouseEvent,
    header: HeaderGroup,
  ) => {
    let isTouchEvent = false;
    if (e.type === 'touchstart') {
      // lets not respond to multiple touches (e.g. 2 or 3 fingers)
      if (e.touches && e.touches.length > 1) {
        return;
      }
      isTouchEvent = true;
    }

    // Setting `width` here because it might take several rerenders until actual column width is set.
    flatHeaders.forEach((h) => {
      if (!h.width) {
        h.width = h.resizeWidth;
      }
    });

    const headerIdWidths = getLeafHeaders(header).map((d) => [d.id, d.width]);
    const siblingHeaderIdWidths = nextHeader
      ? getLeafHeaders(nextHeader).map((d) => [d.id, d.width])
      : [];

    const clientX = isTouchEvent ? Math.round(e.touches[0].clientX) : e.clientX;

    const dispatchMove = (clientXPos: number) =>
      dispatch({ type: actions.columnResizing, clientX: clientXPos });
    const dispatchEnd = () =>
      dispatch({
        type: actions.columnDoneResizing,
      });
    // const parentDomRect = (e.target as HTMLElement).parentElement?.parentElement?.parentElement?.getBoundingClientRect();
    const handlersAndEvents = {
      mouse: {
        moveEvent: 'mousemove',
        moveHandler: (e: MouseEvent) => dispatchMove(e.clientX),
        upEvent: 'mouseup',
        upHandler: () => {
          document.removeEventListener(
            'mousemove',
            handlersAndEvents.mouse.moveHandler,
          );
          document.removeEventListener(
            'mouseup',
            handlersAndEvents.mouse.upHandler,
          );
          dispatchEnd();
        },
      },
      touch: {
        moveEvent: 'touchmove',
        moveHandler: (e: TouchEvent) => {
          if (e.cancelable) {
            e.preventDefault();
            e.stopPropagation();
          }
          dispatchMove(e.touches[0].clientX);
          return false;
        },
        upEvent: 'touchend',
        upHandler: () => {
          document.removeEventListener(
            handlersAndEvents.touch.moveEvent,
            handlersAndEvents.touch.moveHandler,
          );
          document.removeEventListener(
            handlersAndEvents.touch.upEvent,
            handlersAndEvents.touch.moveHandler,
          );
          dispatchEnd();
        },
      },
    };

    const events = isTouchEvent
      ? handlersAndEvents.touch
      : handlersAndEvents.mouse;
    const passiveIfSupported = passiveEventSupported()
      ? { passive: false }
      : false;
    document.addEventListener(
      events.moveEvent,
      events.moveHandler,
      passiveIfSupported,
    );
    document.addEventListener(
      events.upEvent,
      events.upHandler,
      passiveIfSupported,
    );

    dispatch({
      type: actions.columnStartResizing,
      columnId: header.id,
      columnWidth: header.width,
      siblingColumnWidth: nextHeader?.width,
      headerIdWidths,
      siblingHeaderIdWidths,
      clientX,
    });
  };

  return [
    props,
    {
      onMouseDown: (e: React.TouchEvent & React.MouseEvent) => {
        e.persist();
        onResizeStart(e, header);
      },
      onTouchStart: (e: React.TouchEvent & React.MouseEvent) => {
        e.persist();
        onResizeStart(e, header);
      },
      style: {
        cursor: 'col-resize',
      },
      draggable: false,
      role: 'separator',
    },
  ];
};

useResizeColumns.pluginName = 'useResizeColumns';

const reducer = <T extends Record<string, unknown>>(
  newState: TableState<T>,
  action: ActionType,
  previousState: TableState<T>,
  instance?: TableInstance<T>,
) => {
  if (action.type === actions.init) {
    return {
      ...newState,
      columnResizing: {
        columnWidths: {},
      },
    };
  }

  if (action.type === actions.resetResize) {
    return {
      ...newState,
      columnResizing: {
        columnWidths: {},
      },
    };
  }

  if (action.type === actions.columnStartResizing) {
    const {
      clientX,
      columnId,
      columnWidth,
      siblingColumnWidth,
      headerIdWidths,
      siblingHeaderIdWidths,
    } = action;

    return {
      ...newState,
      columnResizing: {
        ...newState.columnResizing,
        startX: clientX,
        columnWidth,
        siblingColumnWidth,
        headerIdWidths,
        siblingHeaderIdWidths,
        isResizingColumn: columnId,
      },
    };
  }

  if (action.type === actions.columnResizing) {
    const { clientX } = action;
    const {
      startX = 0,
      columnWidth = 1,
      siblingColumnWidth = 1,
      headerIdWidths = [],
      siblingHeaderIdWidths = [],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } = newState.columnResizing as any;

    const deltaX = clientX - startX;
    const percentageDeltaX = deltaX / columnWidth;

    const newColumnWidths: Record<string, number> = {};
    (headerIdWidths as [string, number][]).forEach(
      ([headerId, headerWidth]) => {
        newColumnWidths[headerId] = Math.max(
          headerWidth + headerWidth * percentageDeltaX,
          0,
        );
      },
    );

    const newSiblingColumnWidths: Record<string, number> = {};
    (siblingHeaderIdWidths as [string, number][]).forEach(
      ([headerId, headerWidth]) => {
        newSiblingColumnWidths[headerId] = Math.max(
          headerWidth - headerWidth * (deltaX / siblingColumnWidth),
          0,
        );
      },
    );

    for (const [headerId, width] of Object.entries(newColumnWidths)) {
      const header = instance?.flatHeaders.find((h) => h.id === headerId);
      if (
        header &&
        (width < (header.minWidth || 0) ||
          width > (header.maxWidth || Infinity))
      ) {
        return newState;
      }
    }

    for (const [headerId, width] of Object.entries(newSiblingColumnWidths)) {
      const header = instance?.flatHeaders.find((h) => h.id === headerId);
      if (
        header &&
        (width < (header.minWidth || 0) ||
          width > (header.maxWidth || Infinity))
      ) {
        return newState;
      }
    }

    // Prevents from going outside bounds
    if (
      Object.values(newColumnWidths).some((width) => width <= 1) ||
      Object.values(newSiblingColumnWidths).some((width) => width <= 1)
    ) {
      return newState;
    }

    return {
      ...newState,
      columnResizing: {
        ...newState.columnResizing,
        columnWidths: {
          ...newState.columnResizing.columnWidths,
          ...newColumnWidths,
          ...newSiblingColumnWidths,
        },
      },
    };
  }

  if (action.type === actions.columnDoneResizing) {
    return {
      ...newState,
      columnResizing: {
        ...newState.columnResizing,
        startX: undefined,
        isResizingColumn: undefined,
      },
    };
  }
  return newState;
};

const useInstanceBeforeDimensions = <T extends Record<string, unknown>>(
  instance: TableInstance<T>,
) => {
  const {
    flatHeaders,
    // disableResizing,
    getHooks,
    state: { columnResizing },
  } = instance;

  const getInstance = useGetLatest(instance);

  flatHeaders.forEach((header, index) => {
    const resizeWidth = columnResizing.columnWidths[header.id];
    header.width = resizeWidth || header.width || header.originalWidth;
    header.isResizing = columnResizing.isResizingColumn === header.id;

    const headerToResize = header.disableResizing
      ? getPreviousResizableHeader(header, instance)
      : header;
    const nextResizableHeader = getNextResizableHeader(header, instance);

    header.canResize =
      header.disableResizing != null ? !header.disableResizing : true;
    header.isResizerVisible =
      header.canResize ||
      (headerToResize && instance.flatHeaders[index + 1]?.canResize);

    header.getResizerProps = makePropGetter(getHooks().getResizerProps, {
      instance: getInstance(),
      header: headerToResize,
      nextHeader: nextResizableHeader,
    });
  });
};

const getPreviousResizableHeader = <T extends Record<string, unknown>>(
  headerColumn: ColumnInstance<T>,
  instance: TableInstance<T>,
) => {
  const headerIndex = instance.flatHeaders.findIndex(
    (h) => h.id === headerColumn.id,
  );
  return [...instance.flatHeaders]
    .slice(1, headerIndex)
    .reverse()
    .find((h) => !h.disableResizing);
};

const getNextResizableHeader = <T extends Record<string, unknown>>(
  headerColumn: ColumnInstance<T>,
  instance: TableInstance<T>,
) => {
  const headerIndex = instance.flatHeaders.findIndex(
    (h) => h.id === headerColumn.id,
  );
  return [...instance.flatHeaders]
    .slice(headerIndex + 1)
    .find((h) => !h.disableResizing);
};

function getLeafHeaders(header: HeaderGroup) {
  const leafHeaders: HeaderGroup[] = [];
  const recurseHeader = (header: HeaderGroup) => {
    if (header.columns && header.columns.length) {
      header.columns.map(recurseHeader);
    }
    leafHeaders.push(header);
  };
  recurseHeader(header);
  return leafHeaders;
}

let passiveSupported: boolean | null = null;
export function passiveEventSupported() {
  // memoize support to avoid adding multiple test events
  if (typeof passiveSupported === 'boolean') {
    return passiveSupported;
  }
  let supported = false;
  try {
    const options = {
      once: true,
      get passive() {
        supported = true;
        return false;
      },
    };

    window.addEventListener(
      'test' as keyof WindowEventHandlersEventMap,
      () => {},
      options,
    );
  } catch (err) {
    supported = false;
  }
  passiveSupported = supported;
  return passiveSupported;
}
