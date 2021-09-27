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
  const [focusedIndex, setFocusedIndex] = React.useState<number>(-1);

  // Maintain internal selected value state synced with `value` prop
  const [selectedValue, setSelectedValue] = React.useState<T | undefined>();
  React.useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  // Fire onChange callback every time selected value changes
  React.useEffect(() => {
    onChange?.(selectedValue ?? null);
  }, [selectedValue, onChange]);

  // Controlled input value
  const [inputValue, setInputValue] = React.useState<string>('');
  const onInput = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
      inputProps?.onChange?.(event);
    },
    [inputProps],
  );

  // Update input value when option is selected
  React.useEffect(() => {
    const selectedOption = options.find(({ value }) => value === selectedValue);
    if (selectedOption) {
      setInputValue(selectedOption.label);
    }
  }, [selectedValue, options]);

  // Filter options when input value changes
  React.useEffect(() => {
    const selectedOption = options.find(({ value }) => value === selectedValue);
    if (
      !inputValue ||
      !isOpen ||
      selectedOption?.label === inputValue // if a value is selected, show whole list to allow selecting a different value
    ) {
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
  }, [inputValue, options, selectedValue, isOpen, filterFunction]);

  // Update focused value according to filtered list
  React.useEffect(() => {
    if (!filteredOptions.find(({ value }) => value === selectedValue)) {
      setFocusedIndex(options.indexOf(filteredOptions[0]));
    } else {
      setFocusedIndex(
        options.findIndex(({ value }) => value === selectedValue),
      );
    }
  }, [filteredOptions, options, selectedValue]);

  // Update input value and focused value when menu is closed
  React.useEffect(() => {
    if (!isOpen) {
      const selectedIndex = options.findIndex(
        ({ value }) => value === selectedValue,
      );
      if (selectedIndex > -1 && inputValue !== options[selectedIndex].label) {
        setInputValue(options[selectedIndex].label);
      }
      setFocusedIndex(selectedIndex);
    }
  }, [inputValue, isOpen, options, selectedValue]);

  const onKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      const focusedIndexInFilteredList = filteredOptions.findIndex(
        (option) => option === options[focusedIndex],
      );
      switch (event.key) {
        case 'ArrowDown':
          const nextIndex = Math.min(
            focusedIndexInFilteredList + 1,
            filteredOptions.length - 1,
          );
          setFocusedIndex(options.indexOf(filteredOptions[nextIndex]));
          !isOpen && setIsOpen(true); // reopen menu if closed when typing
          event.preventDefault();
          event.stopPropagation();
          break;
        case 'ArrowUp':
          const previousIndex = Math.max(focusedIndexInFilteredList - 1, 0);
          setFocusedIndex(options.indexOf(filteredOptions[previousIndex]));
          event.preventDefault();
          event.stopPropagation();
          break;
        case 'Enter':
          setSelectedValue(options[focusedIndex].value);
          setIsOpen(!isOpen);
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
          !isOpen && setIsOpen(true); // reopen menu if closed when typing
          break;
      }
    },
    [filteredOptions, focusedIndex, isOpen, options],
  );

  const menuItems = React.useCallback(
    (close: () => void) => {
      return filteredOptions.map((option) => {
        const isSelected = selectedValue === option.value;
        const index = options.findIndex(({ value }) => option.value === value);
        return (
          <MenuItem
            id={getOptionId(index)}
            key={getOptionId(index)}
            className={cx({ 'iui-focused': focusedIndex === index })}
            onClick={(value: T) => {
              setSelectedValue(value);
              close();
            }}
            isSelected={isSelected}
            ref={(el) => focusedIndex === index && el?.scrollIntoView(false)}
            role='option'
            {...option}
          >
            {option.label}
          </MenuItem>
        );
      });
    },
    [focusedIndex, getOptionId, filteredOptions, selectedValue, options],
  );

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
        content={
          <Menu
            id={`${id}-list`}
            className='iui-scroll'
            style={{
              minWidth,
              maxWidth: `min(${minWidth * 2}px, 100vw)`,
              maxHeight: '300px',
            }}
            bringFocusInside={false}
            role='listbox'
            ref={menuRef}
          >
            {menuItems(() => setIsOpen(false))}
          </Menu>
        }
        placement='bottom-start'
        visible={isOpen}
        onClickOutside={() => setIsOpen(false)}
        {...dropdownMenuProps}
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
          aria-owns={isOpen ? `${id}-list` : undefined}
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
