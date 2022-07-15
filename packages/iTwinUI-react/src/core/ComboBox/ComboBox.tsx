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
    options: SelectOption<T>[],
    inputValue: string,
  ) => SelectOption<T>[];
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
   * If `JSX.Element` is provided, it will be rendered as is and won't be wrapped with `MenuExtraContent`.
   * @default 'No options found'
   */
  emptyStateMessage?: React.ReactNode;
  /**
   * A custom item renderer can be specified to control the rendering.
   *
   * For keyboard navigation to work, the returned element should use the `id` provided by this function.
   * The `isFocused` state is calculated using this `id` and can be used for specifying the focus styling.
   * If a `MenuItem` is returned, then focus styling is automatically handled.
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
   * If enabled, virtualization is used for the scrollable dropdown list.
   * Use it if you expect a very long list of items.
   * @default false
   * @beta
   */
  enableVirtualization?: boolean;
  /**
   * Callback fired when dropdown menu is opened.
   */
  onShow?: () => void;
  /**
   * Callback fired when dropdown menu is closed.
   */
  onHide?: () => void;
} & Pick<InputContainerProps, 'status'> &
  Omit<CommonProps, 'title'>;

/** Returns either `option.id` or derives a stable id using `idPrefix` and `option.label` (without whitespace) */
const getOptionId = (option: SelectOption<unknown>, idPrefix: string) => {
  return option.id ?? `${idPrefix}-option-${option.label.replace(/\s/g, '-')}`;
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
    options,
    value: valueProp,
    onChange,
    filterFunction,
    inputProps,
    dropdownMenuProps,
    emptyStateMessage = 'No options found',
    itemRenderer,
    enableVirtualization = false,
    onShow,
    onHide,
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

  // Refs get set in subcomponents
  const inputRef = React.useRef<HTMLInputElement>(null);
  const menuRef = React.useRef<HTMLUListElement>(null);
  const toggleButtonRef = React.useRef<HTMLSpanElement>(null);
  const mounted = React.useRef(false);

  // Record to store all extra information (e.g. original indexes), where the key is the id of the option
  const optionsExtraInfoRef = React.useRef<
    Record<string, { __originalIndex: number }>
  >({});

  // Function to initialize extra info
  const initializeExtraInfo = React.useCallback(() => {
    optionsProp.current.forEach((option, index) => {
      optionsExtraInfoRef.current[getOptionId(option, id)] = {
        __originalIndex: index,
      };
    });
  }, [id]);

  // Latest value of the onChange prop
  const onChangeProp = React.useRef(onChange);
  React.useEffect(() => {
    onChangeProp.current = onChange;
  }, [onChange]);

  // Latest value of the options prop
  const optionsProp = React.useRef(options);

  // Clear the extra info when the options change so that it can be reinitialized below
  React.useEffect(() => {
    optionsExtraInfoRef.current = {};
  }, [optionsProp]);

  // Change options ref on options change
  React.useEffect(() => {
    optionsProp.current = options;
    initializeExtraInfo();
  }, [options, initializeExtraInfo]);

  // Initialize the extra info only if it is not already initialized
  if (
    optionsProp.current.length > 0 &&
    Object.keys(optionsExtraInfoRef.current).length === 0
  ) {
    initializeExtraInfo();
  }

  // Reducer where all the component-wide state is stored
  const [{ isOpen, selectedIndex, focusedIndex }, dispatch] = React.useReducer(
    comboBoxReducer,
    {
      isOpen: false,
      selectedIndex: valueProp
        ? optionsProp.current.findIndex((option) => option.value === valueProp)
        : -1,
      focusedIndex: -1,
    },
  );

  React.useLayoutEffect(() => {
    // When the dropdown opens
    if (isOpen) {
      inputRef.current?.focus(); // Focus the input
      setFilteredOptions(optionsProp.current); // Reset the filtered list
      dispatch(['focus']);
    }
    // When the dropdown closes
    else {
      // Reset the focused index
      dispatch(['focus']);

      // Reset the input value
      setInputValue(
        selectedIndex != undefined && selectedIndex >= 0
          ? optionsProp.current[selectedIndex]?.label
          : '',
      );
    }
  }, [isOpen, optionsProp, selectedIndex]);

  // Set min-width of menu to be same as input
  const [minWidth, setMinWidth] = React.useState(0);
  React.useEffect(() => {
    if (inputRef.current) {
      setMinWidth(inputRef.current.offsetWidth);
    }
  }, [isOpen]);

  // Update filtered options to the latest value options according to input value
  const [filteredOptions, setFilteredOptions] = React.useState(
    optionsProp.current,
  );
  React.useEffect(() => {
    if (inputValue) {
      setFilteredOptions(
        filterFunction?.(optionsProp.current, inputValue) ??
          options.filter((option) =>
            option.label.toLowerCase().includes(inputValue.toLowerCase()),
          ),
      );
    } else {
      setFilteredOptions(optionsProp.current);
    }
    dispatch(['focus']);
    // Only need to call on options update
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  // Filter options based on input value
  const [inputValue, setInputValue] = React.useState<string>(
    inputProps?.value?.toString() ?? '',
  );
  const handleOnInput = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;
      setInputValue(value);
      dispatch(['open']); // reopen when typing
      setFilteredOptions(
        filterFunction?.(optionsProp.current, value) ??
          optionsProp.current.filter((option) =>
            option.label.toLowerCase().includes(value.toLowerCase()),
          ),
      );
      if (focusedIndex != -1) {
        dispatch(['focus', -1]);
      }
      inputProps?.onChange?.(event);
    },
    [filterFunction, focusedIndex, inputProps, optionsProp],
  );

  // When the value prop changes, update the selectedIndex
  React.useEffect(() => {
    dispatch([
      'select',
      options.findIndex((option) => option.value === valueProp),
    ]);
  }, [options, valueProp]);

  // Call user-defined onChange when the value actually changes
  React.useEffect(() => {
    // Prevent user-defined onChange to be called on mount
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const value = optionsProp.current[selectedIndex]?.value;
    onChangeProp.current?.(value);
  }, [optionsProp, selectedIndex]);

  const getMenuItem = React.useCallback(
    (option: SelectOption<T>, filteredIndex?: number) => {
      const optionId = getOptionId(option, id);

      const { __originalIndex } = optionsExtraInfoRef.current[optionId];

      const customItem = itemRenderer
        ? itemRenderer(option, {
            isFocused: focusedIndex === __originalIndex,
            isSelected: selectedIndex === __originalIndex,
            index: __originalIndex,
            id: optionId,
          })
        : null;

      return customItem ? (
        React.cloneElement(customItem, {
          onClick: (e: unknown) => {
            dispatch(['select', __originalIndex]);
            dispatch(['close']);
            customItem.props.onClick?.(e);
          },
          // ComboBox.MenuItem handles scrollIntoView, data-iui-index and iui-focused through context
          // but we still need to pass them here for backwards compatibility with MenuItem
          className: cx(customItem.props.className, {
            'iui-focused': focusedIndex === __originalIndex,
          }),
          'data-iui-index': __originalIndex,
          'data-iui-filtered-index': filteredIndex,
          ref: mergeRefs(customItem.props.ref, (el: HTMLLIElement | null) => {
            if (!enableVirtualization && focusedIndex === __originalIndex) {
              el?.scrollIntoView({ block: 'nearest' });
            }
          }),
        })
      ) : (
        <ComboBoxMenuItem
          key={optionId}
          id={optionId}
          {...option}
          isSelected={selectedIndex === __originalIndex}
          onClick={() => {
            dispatch(['select', __originalIndex]);
            dispatch(['close']);
          }}
          index={__originalIndex}
          data-iui-filtered-index={filteredIndex}
        >
          {option.label}
        </ComboBoxMenuItem>
      );
    },
    [enableVirtualization, focusedIndex, id, itemRenderer, selectedIndex],
  );

  const emptyContent = React.useMemo(
    () => (
      <>
        {React.isValidElement(emptyStateMessage) ? (
          emptyStateMessage
        ) : (
          <MenuExtraContent>
            <Text isMuted>{emptyStateMessage}</Text>
          </MenuExtraContent>
        )}
      </>
    ),
    [emptyStateMessage],
  );

  return (
    <ComboBoxRefsContext.Provider
      value={{ inputRef, menuRef, toggleButtonRef, optionsExtraInfoRef }}
    >
      <ComboBoxActionContext.Provider value={dispatch}>
        <ComboBoxStateContext.Provider
          value={{
            id,
            minWidth,
            isOpen,
            focusedIndex,
            enableVirtualization,
            filteredOptions,
            getMenuItem,
          }}
        >
          <ComboBoxInputContainer disabled={inputProps?.disabled} {...rest}>
            <ComboBoxInput
              value={inputValue}
              {...inputProps}
              onChange={handleOnInput}
            />
            <ComboBoxEndIcon disabled={inputProps?.disabled} isOpen={isOpen} />
          </ComboBoxInputContainer>
          <ComboBoxDropdown
            {...dropdownMenuProps}
            onShow={onShow}
            onHide={onHide}
          >
            <ComboBoxMenu>
              {filteredOptions.length > 0 && !enableVirtualization
                ? filteredOptions.map(getMenuItem)
                : emptyContent}
            </ComboBoxMenu>
          </ComboBoxDropdown>
        </ComboBoxStateContext.Provider>
      </ComboBoxActionContext.Provider>
    </ComboBoxRefsContext.Provider>
  );
};

export default ComboBox;
