/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { nanoid } from 'nanoid';
import { Input, Menu, MenuItem, SelectOption } from '../..';
import { InputContainer } from '../utils/InputContainer';
import { useSelect } from '../Select/useSelect';
import { useTheme } from '../utils/hooks/useTheme';
import { Popover } from '../utils/Popover';
import { CommonProps } from '../utils/props';
import SvgCaretDownSmall from '@itwin/itwinui-icons-react/cjs/icons/CaretDownSmall';
import SvgCaretUpSmall from '@itwin/itwinui-icons-react/cjs/icons/CaretUpSmall';

export type ComboBoxProps<T> = {
  options: SelectOption<T>[];
  value?: T;
} & Omit<CommonProps, 'title'>;

/**
 * Describe me here!
 * @example
 * Example usages go here!
 */
export const ComboBox = <T,>(props: ComboBoxProps<T>) => {
  const { options, value, className, ...rest } = props;

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

  const menuRef = React.useRef<HTMLUListElement>(null);
  const [filteredOptions, setFilteredOptions] = React.useState(options);
  const [focusedIndex, setFocusedIndex] = React.useState<number>(-1);

  // Maintain internal selected value state synced with `value` prop
  const [selectedValue, setSelectedValue] = React.useState<T | undefined>();
  React.useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  // Update input value when option is selected
  React.useEffect(() => {
    const selectedOption = options.find(({ value }) => value === selectedValue);
    selectedOption && setInputValue(selectedOption.label);
  }, [selectedValue, options]);

  // Controlled input value
  const [inputValue, setInputValue] = React.useState<string>('');
  const onInput = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const _value = event.target.value;
      setInputValue(_value);
    },
    [],
  );

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

  // Filter options when input value changes
  React.useEffect(() => {
    const selectedOption = options.find(({ value }) => value === selectedValue);
    if (
      inputValue &&
      inputValue.length > 0 &&
      selectedOption?.label !== inputValue // show whole list if option is selected
    ) {
      const _filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(inputValue?.toLowerCase()),
      );
      setFilteredOptions(_filteredOptions);
      if (!_filteredOptions.find(({ value }) => value === selectedValue)) {
        setSelectedValue(undefined);
      }
    } else {
      setFilteredOptions(options);
    }
  }, [inputValue, options, selectedValue]);

  const {
    isOpen,
    toggle,
    menuItems,
    minWidth,
    onHideHandler,
    onShowHandler,
    selectRef: inputRef,
  } = useSelect<T, HTMLInputElement>({
    options: filteredOptions,
    onChange: (value) => setSelectedValue(value),
    value: selectedValue,
    itemRenderer: (option) => {
      const index = options.findIndex((op) => op === option);
      return (
        <MenuItem
          isSelected={selectedValue === option.value}
          id={getOptionId(index)}
          className={cx({ 'iui-focused': focusedIndex === index })}
          onClick={() => setSelectedValue(option.value)}
        >
          {option.label}
        </MenuItem>
      );
    },
  });

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
          toggle(!isOpen);
          event.preventDefault();
          event.stopPropagation();
          break;
        case 'Escape':
          toggle(false);
          event.preventDefault();
          event.stopPropagation();
          break;
        default:
          !isOpen && toggle(true); // reopen menu if closed when typing
          break;
      }
    },
    [filteredOptions, focusedIndex, isOpen, options, toggle],
  );

  return (
    <InputContainer
      className={className}
      isIconInline={true}
      icon={
        isOpen ? (
          <SvgCaretUpSmall onClick={() => toggle(false)} />
        ) : (
          <SvgCaretDownSmall style={{ pointerEvents: 'none' }} />
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
            style={{ minWidth, maxHeight: '300px' }}
            bringFocusInside={false}
            role='listbox'
            ref={menuRef}
          >
            {menuItems(toggle)}
          </Menu>
        }
        placement='bottom-start'
        onShow={onShowHandler}
        onHide={onHideHandler}
        visible={isOpen}
      >
        <Input
          ref={inputRef}
          onKeyDown={onKeyDown}
          onFocus={() => toggle(true)}
          onBlur={() => toggle(false)}
          onChange={onInput}
          value={inputValue}
          aria-activedescendant={
            isOpen && focusedIndex > -1 ? getOptionId(focusedIndex) : undefined
          }
          role='combobox'
          spellCheck={false}
          autoCapitalize='none'
          autoCorrect='off'
        />
      </Popover>
    </InputContainer>
  );
};

export default ComboBox;
