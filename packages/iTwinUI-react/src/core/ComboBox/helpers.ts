/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { SelectOption } from '../Select/Select';

export const comboBoxReducer = (
  state: {
    isOpen: boolean;
    selectedIndex: number | number[];
    focusedIndex: number;
  },
  {
    type,
    value,
  }:
    | { type: 'multiselect'; value: number }
    | { type: 'multi-override'; value: number[] }
    | { type: 'open'; value: undefined }
    | { type: 'close'; value: undefined }
    | { type: 'select'; value: number }
    | { type: 'focus'; value: number | undefined },
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
    case 'multi-override': {
      return { ...state, selectedIndex: value };
    }
    case 'multiselect': {
      const actionIndex = (state.selectedIndex as number[]).findIndex(
        (item) => item === value,
      );
      if (actionIndex >= 0) {
        return {
          ...state,
          focusedIndex: value ?? state.focusedIndex,
          selectedIndex: (state.selectedIndex as number[]).filter(
            (index) => index !== value,
          ) as number[],
        };
      } else if (actionIndex === -1) {
        return {
          ...state,
          focusedIndex: value ?? state.focusedIndex,
          selectedIndex:
            value != null
              ? ([...(state.selectedIndex as number[]), value] as number[])
              : state.selectedIndex,
        };
      }
    }
    case 'focus': {
      return {
        ...state,
        focusedIndex: value ?? (state.selectedIndex as number) ?? -1,
      };
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
  | ((
      x:
        | { type: 'multiselect'; value: number }
        | { type: 'multi-override'; value: number[] }
        | { type: 'open'; value: undefined }
        | { type: 'close'; value: undefined }
        | { type: 'select'; value: number }
        | { type: 'focus'; value: number | undefined },
    ) => void)
  | undefined
>(undefined);
ComboBoxActionContext.displayName = 'ComboBoxActionContext';
