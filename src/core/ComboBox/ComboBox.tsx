/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { nanoid } from 'nanoid';
import { Input, Menu, MenuItem, SelectOption } from '../..';
import { InputContainer } from '../utils/InputContainer';
import { useTheme } from '../utils/hooks/useTheme';
import { Popover, PopoverProps } from '../utils/Popover';
import { CommonProps } from '../utils/props';
import SvgCaretDownSmall from '@itwin/itwinui-icons-react/cjs/icons/CaretDownSmall';
import SvgCaretUpSmall from '@itwin/itwinui-icons-react/cjs/icons/CaretUpSmall';
import { getFocusableElements } from '../utils/common';

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
   * Callback fired when selected value changes.
   */
  onChange?: (value: T | null) => void;
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
  inputProps?: Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>;
  /**
   * Props to customize dropdown menu behavior.
   */
  dropdownMenuProps?: PopoverProps;
  /**
   * Message shown when no options are available (after filtering).
   * @default 'No options found'
   */
  emptyStateMessage?: string;
} & Omit<CommonProps, 'title'>;

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
    value,
    onChange,
    filterFunction,
    className,
    inputProps,
    dropdownMenuProps,
    emptyStateMessage = 'No options found',
    ...rest
  } = props;

  // Generate a stateful random id if not specified
  const [id] = React.useState(() => props.id ?? `iui-${nanoid(10)}`);

  useTheme();

  /** Generates an memoized id for an option, given the index from original list */
  const getOptionId = React.useCallback(
    (index: number) =>
      options[index].id ??
      `${id}-option${options.findIndex(
        ({ value }) => value === options[index].value,
      )}`,
    [options, id],
  );

  const memoizedItems = React.useMemo(
    () =>
      options.map(({ label, value, ...rest }, index) => (
        <MenuItem
          id={getOptionId(index)}
          key={getOptionId(index)}
          value={value}
          role='option'
          onClick={(value: T) => {
            setSelectedValue(value);
            setIsOpen(false);
          }}
          {...rest}
        >
          {label}
        </MenuItem>
      )),
    [options, getOptionId],
  );

  const inputRef = React.useRef<HTMLInputElement>(null);
  const menuRef = React.useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  // Set min-width of menu to be same as input
  const [minWidth, setMinWidth] = React.useState(0);
  React.useEffect(() => {
    if (inputRef.current) {
      setMinWidth(inputRef.current.offsetWidth);
    }
  }, [isOpen]);

  const [filteredOptions, setFilteredOptions] = React.useState(options);
  const [focusedIndex, setFocusedIndex] = React.useState(() =>
    options.findIndex((option) => value === option.value),
  );

  // Maintain internal selected value state synced with `value` prop
  const [selectedValue, setSelectedValue] = React.useState<T | undefined>();
  React.useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  // Controlled input value
  const [inputValue, setInputValue] = React.useState<string>('');
  const onInput = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
      inputProps?.onChange?.(event);
    },
    [inputProps],
  );

  // Fire onChange callback and update inputValue every time selected value changes
  React.useEffect(() => {
    if (selectedValue) {
      onChange?.(selectedValue);
      setInputValue(
        options.find(({ value }) => value === selectedValue)?.label ?? '',
      );
    }
  }, [selectedValue, onChange, options]);

  // Filter options and update focus when input value changes
  React.useEffect(() => {
    if (!isOpen) {
      return;
    }

    // if input is empty or same as selected value, show the whole list
    const selectedOption = options.find(({ value }) => value === selectedValue);
    if (!inputValue || selectedOption?.label === inputValue) {
      setFilteredOptions(options);
      return;
    }

    const _filteredOptions =
      filterFunction?.(options, inputValue) ??
      options.filter((option) =>
        option.label.toLowerCase().includes(inputValue?.trim().toLowerCase()),
      );
    setFilteredOptions(_filteredOptions);
    if (!_filteredOptions.find(({ value }) => value === selectedValue)) {
      setSelectedValue(undefined);
    }

    setFocusedIndex((previouslyFocusedIndex) => {
      if (_filteredOptions.includes(options[previouslyFocusedIndex])) {
        return previouslyFocusedIndex;
      } else if (
        _filteredOptions.find(({ value }) => value === selectedValue)
      ) {
        return options.findIndex(({ value }) => value === selectedValue);
      } else {
        return -1; // reset focus if previously focused or selected value is not in filtered list
      }
    });
  }, [inputValue, options, selectedValue, isOpen, filterFunction]);

  const onKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      const focusableOptions = getFocusableElements(menuRef.current);
      const focusedIndexInFilteredList = focusableOptions.findIndex(
        ({ id }) =>
          id === inputRef.current?.getAttribute('aria-activedescendant'),
      );
      switch (event.key) {
        case 'ArrowDown':
          if (isOpen) {
            const nextIndex = Math.min(
              focusedIndexInFilteredList + 1,
              focusableOptions.length - 1,
            );
            setFocusedIndex(
              options.findIndex(
                (_, index) =>
                  getOptionId(index) === focusableOptions[nextIndex].id,
              ),
            );
          } else {
            setIsOpen(true); // reopen menu if closed when typing
          }
          event.preventDefault();
          event.stopPropagation();
          break;
        case 'ArrowUp':
          if (isOpen) {
            const previousIndex = Math.max(focusedIndexInFilteredList - 1, 0);
            setFocusedIndex(
              options.findIndex(
                (_, index) =>
                  getOptionId(index) === focusableOptions[previousIndex].id,
              ),
            );
          }
          event.preventDefault();
          event.stopPropagation();
          break;
        case 'Enter':
          if (isOpen) {
            setSelectedValue(options[focusedIndex].value);
          }
          setIsOpen((open) => !open);
          event.preventDefault();
          event.stopPropagation();
          break;
        case 'Escape':
          setIsOpen(false);
          event.preventDefault();
          event.stopPropagation();
          break;
        case 'Tab':
          setIsOpen(false);
          break;
        default:
          if (!isOpen) {
            setIsOpen(true); // reopen menu if closed when typing
          }
          break;
      }
    },
    [focusedIndex, isOpen, options, getOptionId],
  );

  const menuItems = React.useMemo(() => {
    if (filteredOptions.length === 0) {
      return <MenuItem disabled>{emptyStateMessage}</MenuItem>;
    }
    return filteredOptions.map((option) => {
      const index = options.findIndex(({ value }) => option.value === value);
      return focusedIndex !== index && selectedValue !== option.value
        ? memoizedItems[index]
        : React.cloneElement(memoizedItems[index], {
            className: cx({ 'iui-focused': focusedIndex === index }),
            isSelected: selectedValue === option.value,
            ref: (el: HTMLElement) =>
              focusedIndex === index && el?.scrollIntoView(false),
          });
    });
  }, [
    filteredOptions,
    emptyStateMessage,
    options,
    focusedIndex,
    selectedValue,
    memoizedItems,
  ]);

  return (
    <InputContainer
      className={className}
      isIconInline={true}
      icon={
        isOpen ? (
          <SvgCaretUpSmall
            style={{ cursor: 'pointer' }}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <SvgCaretDownSmall
            style={{ cursor: 'pointer' }}
            onClick={() => inputRef.current?.focus()}
          />
        )
      }
      {...rest}
      id={id}
    >
      <Popover
        placement='bottom-start'
        visible={isOpen}
        onClickOutside={() => setIsOpen(false)}
        {...dropdownMenuProps}
        content={
          <Menu
            id={`${id}-list`}
            className='iui-scroll'
            style={{
              minWidth,
              maxWidth: `min(${minWidth * 2}px, 90vw)`,
              maxHeight: 300,
            }}
            setFocus={false}
            role='listbox'
            ref={menuRef}
          >
            {menuItems}
          </Menu>
        }
        onHide={(instance) => {
          const selectedIndex = options.findIndex(
            ({ value }) => value === selectedValue,
          );
          setFocusedIndex(selectedIndex);
          if (selectedIndex > -1) {
            setInputValue(options[selectedIndex].label); // update input value to be same as selected value
          }
          dropdownMenuProps?.onHide?.(instance);
        }}
      >
        <Input
          ref={inputRef}
          onKeyDown={onKeyDown}
          onFocus={() => setIsOpen(true)}
          onChange={onInput}
          value={inputValue}
          aria-activedescendant={
            isOpen && focusedIndex > -1 ? getOptionId(focusedIndex) : undefined
          }
          role='combobox'
          aria-controls={isOpen ? `${id}-list` : undefined}
          aria-autocomplete='list'
          spellCheck={false}
          autoCapitalize='none'
          autoCorrect='off'
          {...inputProps}
        />
      </Popover>
    </InputContainer>
  );
};

export default ComboBox;
