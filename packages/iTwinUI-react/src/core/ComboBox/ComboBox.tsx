/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { InputProps } from '../Input';
import { MenuExtraContent } from '../Menu';
import { SelectOption } from '../Select';
import { Text } from '../Typography';
import {
  useTheme,
  PopoverProps,
  CommonProps,
  getRandomValue,
  InputContainerProps,
  mergeRefs,
} from '../utils';
import 'tippy.js/animations/shift-away.css';
import {
  ComboBoxActionContext,
  comboBoxReducer,
  ComboBoxRefsContext,
  ComboBoxStateContext,
} from './helpers';
import { ComboBoxDropdown } from './ComboBoxDropdown';
import { ComboBoxEndIcon } from './ComboBoxEndIcon';
import { ComboBoxInput } from './ComboBoxInput';
import { ComboBoxInputContainer } from './ComboBoxInputContainer';
import { ComboBoxMenu } from './ComboBoxMenu';
import { ComboBoxMenuItem } from './ComboBoxMenuItem';

export type ComboBoxProps<T> = {
  /**
   * Array of options that populate the dropdown list.
   */
  options: SelectOption<T>[];
  /**
   * Controlled value of ComboBox.
   */
  value?: T;
  /**
   * Message shown below the combobox.
   * Use `StatusMessage` component.
   */
  message?: React.ReactNode;
  /**
   * Callback fired when selected value changes.
   */
  onChange?: (value: T) => void;
  /**
   * Function to customize the default filtering logic.
   */
  filterFunction?: (
    options: ComboBoxOption<T>[],
    inputValue: string,
  ) => ComboBoxOption<T>[];
  /**
   * Native input element props.
   */
  inputProps?: Omit<InputProps, 'setFocus'>;
  /**
   * Props to customize dropdown menu behavior.
   */
  dropdownMenuProps?: PopoverProps;
  /**
   * Message shown when no options are available.
   * @default 'No options found'
   */
  emptyStateMessage?: string;
  /**
   * A custom item renderer can be specified to control the rendering.
   * This function should ideally return a customized version of `ComboBox.MenuItem`,
   * otherwise you will need to make sure to provide styling for the `isFocused` state.
   */
  itemRenderer?: (
    option: SelectOption<T>,
    states: {
      isSelected: boolean;
      isFocused: boolean;
      id: string;
      index: number;
    },
  ) => JSX.Element;
  /**
   * Children can be specified to customize individual parts.
   */
  children?: React.ReactNode;
} & Pick<InputContainerProps, 'status'> &
  Omit<CommonProps, 'title'>;

type ComboBoxOption<T> = SelectOption<T> & {
  id: string;
  __originalIndex: number;
};

/**
 * ComboBox component that allows typing a value to filter the options in dropdown list.
 * Values can be selected either using mouse clicks or using the Enter key.
 * @example
 * <ComboBox
 *   options={[
 *     { label: 'Item 1', value: 1 },
 *     { label: 'Item 2', value: 2 },
 *     { label: 'Item 3', value: 3 },
 *   ]}
 *   onChange={() => {}}
 * />
 */
export const ComboBox = <T,>(props: ComboBoxProps<T>) => {
  const {
    options: optionsProp,
    value: valueProp,
    onChange,
    filterFunction,
    inputProps,
    dropdownMenuProps,
    emptyStateMessage = 'No options found',
    itemRenderer,
    children,
    ...rest
  } = props;

  // Generate a stateful random id if not specified
  const [id] = React.useState(
    () =>
      props.id ??
      (inputProps?.id && `${inputProps.id}-cb`) ??
      `iui-cb-${getRandomValue(10)}`,
  );

  useTheme();

  // Add id and originalIndex to each option
  const [options, setOptions] = React.useState<ComboBoxOption<T>[]>([]);
  React.useLayoutEffect(() => {
    setOptions(
      optionsProp.map((option, index) => ({
        ...option,
        id: option.id ?? `${id}-option${index}`,
        __originalIndex: index,
      })),
    );
  }, [id, optionsProp]);

  // Refs get set in subcomponents
  const inputRef = React.useRef<HTMLInputElement>(null);
  const menuRef = React.useRef<HTMLUListElement>(null);
  const toggleButtonRef = React.useRef<HTMLSpanElement>(null);
  const optionsRef = React.useRef<Array<HTMLLIElement>>([]);

  // Latest value of the onChange prop
  const onChangeProp = React.useRef(onChange);
  React.useEffect(() => {
    onChangeProp.current = onChange;
  }, [onChange]);

  // Reducer where all the component-wide state is stored
  const [{ isOpen, selectedIndex, focusedIndex }, dispatch] = React.useReducer(
    comboBoxReducer,
    {
      isOpen: false,
      selectedIndex: -1,
      focusedIndex: -1,
    },
  );

  React.useEffect(() => {
    if (isOpen) {
      // Make sure the input is focused when the dropdown opens
      inputRef.current?.focus();
    } else {
      // Reset the focused index when the dropdown closes
      dispatch(['focus']);
    }
  }, [isOpen]);

  // Set min-width of menu to be same as input
  const [minWidth, setMinWidth] = React.useState(0);
  React.useEffect(() => {
    if (inputRef.current) {
      setMinWidth(inputRef.current.offsetWidth);
    }
  }, [isOpen]);

  // Initialize filtered options to the latest value options
  const [filteredOptions, setFilteredOptions] = React.useState(options);
  React.useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  // Filter options based on input value
  const [inputValue, setInputValue] = React.useState(inputProps?.value ?? '');
  const handleOnInput = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;
      setInputValue(value);
      dispatch(['open']); // reopen when typing
      setFilteredOptions(
        filterFunction?.(options, value) ??
          options.filter((option) =>
            option.label.toLowerCase().includes(value.toLowerCase()),
          ),
      );
      inputProps?.onChange?.(event);
    },
    [filterFunction, inputProps, options],
  );

  // Reset focused item when filteredOptions change
  React.useEffect(() => {
    dispatch(['focus']);
  }, [filteredOptions]);

  // When the value prop changes, update the selectedIndex
  React.useEffect(() => {
    dispatch([
      'select',
      options.findIndex((option) => option.value === valueProp),
    ]);
  }, [options, valueProp]);

  // When value is selected, update input value and reset filtered options
  React.useEffect(() => {
    if (selectedIndex != undefined && selectedIndex >= 0) {
      setInputValue(options[selectedIndex]?.label ?? '');
      setFilteredOptions(options);
    }
  }, [options, selectedIndex]);

  // When dropdown is closed, reset input value to selected option label
  React.useEffect(() => {
    if (!isOpen && selectedIndex != undefined && selectedIndex >= 0) {
      setInputValue(options[selectedIndex]?.label ?? '');
      // TODO: fix options
    }
  }, [isOpen, options, selectedIndex]);

  // Call user-defined onChange when the value actually changes
  React.useEffect(() => {
    if (selectedIndex != undefined && selectedIndex >= 0) {
      const value = options[selectedIndex]?.value;
      if (value === valueProp) {
        return;
      }
      onChangeProp.current?.(value);
    }
  }, [options, selectedIndex, valueProp]);

  const getMenuItem = React.useCallback(
    (option: ComboBoxOption<T>) => {
      const { __originalIndex, ...rest } = option;

      const customItem = itemRenderer
        ? itemRenderer(option, {
            isFocused: focusedIndex === __originalIndex,
            isSelected: selectedIndex === __originalIndex,
            index: __originalIndex,
            id: option.id,
          })
        : null;

      return customItem ? (
        React.cloneElement(customItem, {
          onClick: (e: unknown) => {
            dispatch(['select', __originalIndex]);
            customItem.props.onClick?.(e);
          },
          // ComboBox.MenuItem handles scrollIntoView, data-iui-index and iui-focused through context
          // but we still need to pass them here for backwards compatibility with MenuItem
          className: cx(customItem.props.className, {
            'iui-focused': focusedIndex === __originalIndex,
          }),
          'data-iui-index': __originalIndex,
          ref: mergeRefs(customItem.props.ref, (el: HTMLLIElement | null) => {
            // will need to check for virtualization here too
            if (focusedIndex === __originalIndex) {
              el?.scrollIntoView({ block: 'nearest' });
            }
          }),
        })
      ) : (
        <ComboBoxMenuItem
          key={option.id ?? __originalIndex}
          {...rest}
          isSelected={selectedIndex === __originalIndex}
          onClick={() => dispatch(['select', __originalIndex])}
          index={__originalIndex}
        >
          {option.label}
        </ComboBoxMenuItem>
      );
    },
    [focusedIndex, itemRenderer, selectedIndex],
  );

  return (
    <ComboBoxRefsContext.Provider
      value={{ inputRef, menuRef, toggleButtonRef, optionsRef }}
    >
      <ComboBoxActionContext.Provider value={dispatch}>
        <ComboBoxStateContext.Provider
          value={{ id, minWidth, isOpen, focusedIndex }}
        >
          {children ?? (
            <>
              <ComboBoxInputContainer disabled={inputProps?.disabled} {...rest}>
                <ComboBoxInput
                  value={inputValue}
                  {...inputProps}
                  onChange={handleOnInput}
                />
                <ComboBoxEndIcon
                  disabled={inputProps?.disabled}
                  isOpen={isOpen}
                />
              </ComboBoxInputContainer>
              <ComboBoxDropdown {...dropdownMenuProps}>
                <ComboBoxMenu>
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map(getMenuItem)
                  ) : (
                    <MenuExtraContent>
                      <Text isMuted>{emptyStateMessage}</Text>
                    </MenuExtraContent>
                  )}
                </ComboBoxMenu>
              </ComboBoxDropdown>
            </>
          )}
        </ComboBoxStateContext.Provider>
      </ComboBoxActionContext.Provider>
    </ComboBoxRefsContext.Provider>
  );
};

export default ComboBox;
