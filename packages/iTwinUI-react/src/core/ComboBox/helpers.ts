/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { SelectOption } from '../Select/Select';

export const ComboBoxRefsContext = React.createContext<
  | {
      inputRef: React.RefObject<HTMLInputElement>;
      menuRef: React.RefObject<HTMLUListElement>;
      toggleButtonRef: React.RefObject<HTMLSpanElement>;
      optionsExtraInfoRef: React.MutableRefObject<
        Record<string, { __originalIndex: number }>
      >;
    }
  | undefined
>(undefined);
ComboBoxRefsContext.displayName = 'ComboBoxRefsContext';

export const comboBoxReducer = (
  state: {
    isOpen: boolean;
    selected: number | number[];
    focusedIndex: number;
  },
  action:
    | { type: 'multiselect'; value: number }
    | { type: 'multi-override'; value: number[] }
    | { type: 'open' }
    | { type: 'close' }
    | { type: 'select'; value: number }
    | { type: 'focus'; value: number | undefined },
) => {
  switch (action.type) {
    case 'open': {
      return { ...state, isOpen: true };
    }
    case 'close': {
      return { ...state, isOpen: false };
    }
    case 'select': {
      if (Array.isArray(state.selected)) {
        return { ...state };
      }
      return {
        ...state,
        selected: action.value ?? state.selected,
        focusedIndex: action.value ?? state.focusedIndex,
      };
    }
    case 'multi-override': {
      if (!Array.isArray(state.selected)) {
        return { ...state };
      }
      return { ...state, selected: action.value };
    }
    case 'multiselect': {
      if (!Array.isArray(state.selected)) {
        return { ...state };
      }
      const actionIndex = state.selected.findIndex(
        (item) => item === action.value,
      );
      if (actionIndex >= 0) {
        return {
          ...state,
          focusedIndex: action.value ?? state.focusedIndex,
          selected: state.selected.filter(
            (index) => index !== action.value,
          ) as number[],
        };
      } else if (actionIndex === -1) {
        return {
          ...state,
          focusedIndex: action.value ?? state.focusedIndex,
          selected:
            action.value != null
              ? [...state.selected, action.value]
              : state.selected,
        };
      }
    }
    case 'focus': {
      if (Array.isArray(state.selected)) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        focusedIndex: action.value ?? state.selected ?? -1,
      };
    }
    default: {
      return state;
    }
  }
};

type ComboBoxStateContextProps<T = unknown> = {
  isOpen: boolean;
  id: string;
  minWidth: number;
  enableVirtualization: boolean;
  filteredOptions: SelectOption<T>[];
  onChangeHandler?: (prop: number) => void;
  getMenuItem: (option: SelectOption<T>, filteredIndex?: number) => JSX.Element;
  focusedIndex?: number;
  multiple?: boolean;
};

export const ComboBoxStateContext = React.createContext<
  ComboBoxStateContextProps | undefined
>(undefined);
ComboBoxStateContext.displayName = 'ComboBoxStateContext';

export const ComboBoxActionContext = React.createContext<
  | ((
      x:
        | { type: 'multiselect'; value: number }
        | { type: 'multi-override'; value: number[] }
        | { type: 'open' }
        | { type: 'close' }
        | { type: 'select'; value: number }
        | { type: 'focus'; value: number | undefined },
    ) => void)
  | undefined
>(undefined);
ComboBoxActionContext.displayName = 'ComboBoxActionContext';
