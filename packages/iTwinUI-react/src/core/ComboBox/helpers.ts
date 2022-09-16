/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { SelectOption } from '../Select/Select';

type ComboBoxAction = 'open' | 'close' | 'select' | 'multiselect' | 'focus';
type SelectedAction = 'added' | 'removed';

export const comboBoxReducer = (
  state: {
    isOpen: boolean;
    selectedIndex: number | number[];
    focusedIndex: number;
  },
  [type, value, action]:
    | [ComboBoxAction]
    | [ComboBoxAction, number | undefined]
    | [ComboBoxAction, number | undefined, SelectedAction | undefined],
) => {
  switch (type) {
    case 'open': {
      return { ...state, isOpen: true };
    }
    case 'close': {
      return { ...state, isOpen: false };
    }
    case 'select': {
      return {
        ...state,
        selectedIndex: value ?? state.selectedIndex,
        focusedIndex: value ?? state.focusedIndex,
      };
    }
    case 'multiselect': {
      if (action === 'removed') {
        console.log('removed', value);
        return {
          ...state,
          focusedIndex: value ?? state.focusedIndex,
          selectedIndex: (state.selectedIndex as number[]).filter(
            (index) => index !== value,
          ),
        };
      }
      if (action === 'added') {
        console.log('added', value);
        console.log([...(state.selectedIndex as number[]), value]);
        return {
          ...state,
          focusedIndex: value ?? state.focusedIndex,
          selectedIndex:
            value !== null && value !== undefined
              ? [...(state.selectedIndex as number[]), value]
              : state.selectedIndex,
        };
      }
    }
    case 'focus': {
      return { ...state, focusedIndex: value ?? state.selectedIndex ?? -1 };
    }
    default: {
      return state;
    }
  }
};

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

type ComboBoxStateContextProps<T = unknown> = {
  isOpen: boolean;
  id: string;
  minWidth: number;
  enableVirtualization: boolean;
  filteredOptions: SelectOption<T>[];
  getMenuItem: (option: SelectOption<T>, filteredIndex?: number) => JSX.Element;
  focusedIndex?: number;
  multiple?: boolean;
};

export const ComboBoxStateContext = React.createContext<
  ComboBoxStateContextProps | undefined
>(undefined);
ComboBoxStateContext.displayName = 'ComboBoxStateContext';

export const ComboBoxActionContext = React.createContext<
  ((x: [ComboBoxAction] | [ComboBoxAction, number]) => void) | undefined
>(undefined);
ComboBoxActionContext.displayName = 'ComboBoxActionContext';
