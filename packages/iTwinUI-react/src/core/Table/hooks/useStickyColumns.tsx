/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { actions, ActionType, Hooks, TableState } from 'react-table';

actions.setScrolledLeft = 'setScrolledLeft';
actions.setScrolledRight = 'setScrolledRight';

export const useStickyColumns = <T extends Record<string, unknown>>(
  hooks: Hooks<T>,
) => {
  hooks.stateReducers.push(reducer);
};

const reducer = <T extends Record<string, unknown>>(
  newState: TableState<T>,
  action: ActionType,
): TableState<T> => {
  if (action.type === actions.init) {
    return {
      ...newState,
      sticky: {},
    };
  }

  if (
    action.type === actions.setScrolledLeft &&
    newState.sticky?.isScrolledToLeft !== action.value // Prevents unnecessary re-render
  ) {
    return {
      ...newState,
      sticky: {
        ...newState.sticky,
        isScrolledToLeft: action.value,
      },
    };
  }

  if (
    action.type === actions.setScrolledRight &&
    newState.sticky?.isScrolledToRight !== action.value // Prevents unnecessary re-render
  ) {
    return {
      ...newState,
      sticky: {
        ...newState.sticky,
        isScrolledToRight: action.value,
      },
    };
  }

  return newState;
};
