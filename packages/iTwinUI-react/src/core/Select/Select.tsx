/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { DropdownMenu } from '../DropdownMenu';
import { MenuItem } from '../Menu/MenuItem';
import {
  PopoverProps,
  PopoverInstance,
  CommonProps,
  useTheme,
  useOverflow,
} from '../utils';
import '@itwin/itwinui-css/css/inputs.css';
import SvgCaretDownSmall from '@itwin/itwinui-icons-react/cjs/icons/CaretDownSmall';
import SelectTag from './SelectTag';

export type ItemRendererProps = {
  /**
   * Close handler that closes the dropdown.
   */
  close: () => void;
  /**
   * Indicates whether an item is selected.
   */
  isSelected: boolean;
};

export type SelectOption<T> = {
  /**
   * Label of the item used in dropdown list and when selected.
   */
  label: string;
  /**
   * Sublabel of the item shown below the label.
   */
  sublabel?: React.ReactNode;
  /**
   * Modify height of the item.
   * Use 'large' when any of the select options have `sublabel`.
   *
   * Defaults to 'large' if `sublabel` provided, otherwise 'default'.
   */
  size?: 'default' | 'large';
  /**
   * Value of the item.
   */
  value: T;
  /**
   * SVG icon component shown on the right.
   */
  icon?: JSX.Element;
  /**
   * Item is disabled.
   */
  disabled?: boolean;
  /**
   * Any other props.
   */
  [key: string]: unknown;
} & CommonProps;

export type SelectProps<T> = {
  /**
   * Array of options that populates the select menu.
   */
  options: SelectOption<T>[];
  /**
   * Selected option value.
   */
  value?: T | T[];
  /**
   * Callback function handling change event on select.
   */
  onChange?: (value: T) => void;
  /**
   * Placeholder when no item is selected.
   */
  placeholder?: React.ReactNode;
  /**
   * Disables select.
   * @default false
   */
  disabled?: boolean;
  /**
   * Modify size of select.
   */
  size?: 'small' | 'large';
  /**
   * Set focus on select.
   * @default false
   */
  setFocus?: boolean;
  /**
   * Custom renderer for an item in the dropdown list. `MenuItem` item props are going to be populated if not provided.
   */
  itemRenderer?: (
    option: SelectOption<T>,
    itemProps: ItemRendererProps,
  ) => JSX.Element;
  /**
   * Custom renderer for the selected item in select.
   */
  selectedItemRenderer?: (option: SelectOption<T>) => JSX.Element;
  /**
   * Custom class for menu.
   */
  menuClassName?: string;
  /**
   * Custom style for menu.
   */
  menuStyle?: React.CSSProperties;
  /**
   * Props to customize {@link Popover} behavior.
   * @see [tippy.js props](https://atomiks.github.io/tippyjs/v6/all-props/)
   */
  popoverProps?: Omit<PopoverProps, 'onShow' | 'onHide' | 'disabled'>;
  /**
   * Enable multiple selection.
   * @default false
   */
  multi?: boolean;
  /**
   * Custom renderer for the selected items in select.
   */
  selectedItemsRenderer?: (options: SelectOption<T>[]) => JSX.Element;
} & Pick<PopoverProps, 'onShow' | 'onHide'> &
  Omit<
    React.ComponentPropsWithoutRef<'div'>,
    'size' | 'disabled' | 'placeholder' | 'onChange'
  >;

/**
 * Select component to select value from options.
 * Generic type is used for value. It prevents you from mistakenly using other types in `options`, `value` and `onChange`.
 * @example
 * <caption>Basic select.</caption>
 * <Select<number> options={[{ value: 1, label: 'Option 1' }, { value: 2, label: 'Option 2' }, { value: 3, label: 'Option 3' }]} />
 * @example
 * <caption>Disabled select with placeholder.</caption>
 * <Select
 *   disabled={true}
 *   placeholder='Placeholder text'
 *   options={[{ value: 1, label: 'Option 1' }, { value: 2, label: 'Option 2' }, { value: 3, label: 'Option 3' }]}
 * />
 * @example
 * <caption>Select with selected value and change handler.</caption>
 * <Select<number>
 *   value={selectedValue}
 *   onChange={(value) => setSelectedValue(value)}
 *   options={[{ value: 1, label: 'Option 1' }, { value: 2, label: 'Option 2' }, { value: 3, label: 'Option 3' }]}
 * />
 * @example
 * <caption>Select using custom renderers for menu items and selected value.</caption>
 * <Select<string>
 *   options={[
 *     { value: 'yellow', label: 'Yellow' },
 *     { value: 'green', label: 'Green' },
 *     { value: 'red', label: 'Red' },
 *   ]}
 *   value={selectedValue}
 *   placeholder='Placeholder text'
 *   itemRenderer={(option, itemProps) => (
 *     <MenuItem
 *       style={{ color: option.value }}
 *       isSelected={itemProps.isSelected}
 *       onClick={() => {
 *         setSelectedValue(option.value);
 *         itemProps.close();
 *       }}
 *       role='option'
 *       ref={(el) => itemProps.isSelected && el?.scrollIntoView()}
 *     >
 *       {option.label}
 *     </MenuItem>
 *   )}
 *   selectedItemRenderer={(option) => (
 *     <span style={{ backgroundColor: option.value }}>{option.label}</span>
 *   )}
 * />
 */
export const Select = <T,>(props: SelectProps<T>): JSX.Element => {
  const {
    options,
    value,
    onChange,
    placeholder,
    disabled = false,
    size,
    setFocus = false,
    itemRenderer,
    selectedItemRenderer,
    className,
    style,
    menuClassName,
    menuStyle,
    onShow,
    onHide,
    popoverProps,
    multi = false,
    selectedItemsRenderer,
    ...rest
  } = props;

  useTheme();

  const [isOpen, setIsOpen] = React.useState(popoverProps?.visible ?? false);
  React.useEffect(() => {
    setIsOpen((open) => popoverProps?.visible ?? open);
  }, [popoverProps]);

  const [minWidth, setMinWidth] = React.useState(0);
  const toggle = () => setIsOpen((open) => !open);

  const selectRef = React.useRef<HTMLDivElement>(null);
  const toggleButtonRef = React.useRef<HTMLSpanElement>(null);

  const onShowHandler = React.useCallback(
    (instance: PopoverInstance) => {
      setIsOpen(true);
      onShow?.(instance);
    },
    [onShow],
  );

  const onHideHandler = React.useCallback(
    (instance: PopoverInstance) => {
      setIsOpen(false);
      onHide?.(instance);
    },
    [onHide],
  );

  React.useEffect(() => {
    if (selectRef.current && !disabled && setFocus && !multi) {
      selectRef.current.focus();
    }
  }, [setFocus, disabled, multi]);

  React.useEffect(() => {
    if (selectRef.current) {
      setMinWidth(selectRef.current.offsetWidth);
    }
  }, [isOpen]);

  const onKeyDown = (event: React.KeyboardEvent, toggle: () => void) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
      case 'Spacebar':
        !multi && toggle();
        event.preventDefault();
        break;
      default:
        break;
    }
  };

  const menuItems = React.useCallback(
    (close: () => void) => {
      return options.map((option, index) => {
        const isSelected = Array.isArray(value)
          ? value.includes(option.value)
          : value === option.value;
        const menuItem: JSX.Element = itemRenderer ? (
          itemRenderer(option, { close, isSelected })
        ) : (
          <MenuItem>{option.label}</MenuItem>
        );

        return React.cloneElement(menuItem, {
          key: `${option.label}-${index}`,
          isSelected,
          onClick: () => {
            !option.disabled && onChange?.(option.value);
            !multi && close();
          },
          ref: (el: HTMLElement) => {
            if (isSelected && !multi) {
              el?.scrollIntoView();
            }
          },
          role: 'option',
          ...option,
          ...menuItem.props,
        });
      });
    },
    [itemRenderer, multi, onChange, options, value],
  );

  const selectedItems = React.useMemo(() => {
    if (value == null) {
      return undefined;
    }
    return Array.isArray(value)
      ? options.filter((option) => value.some((val) => val === option.value))
      : options.find((option) => option.value === value);
  }, [options, value]);

  const selectedItemsArray = React.useMemo(() => {
    if (!selectedItems || !Array.isArray(selectedItems)) {
      return [];
    }

    return selectedItems.map((item) => (
      <SelectTag
        key={item.label}
        onRemove={(e) => {
          e.stopPropagation();
          onChange?.(item.value);
        }}
      >
        {item.label}
      </SelectTag>
    ));
  }, [onChange, selectedItems]);

  const [containerRef, visibleCount] = useOverflow(selectedItemsArray, !multi);

  return (
    <div
      className={cx('iui-input-with-icon', className)}
      aria-expanded={isOpen}
      aria-haspopup='listbox'
      style={style}
      {...rest}
    >
      <DropdownMenu
        menuItems={menuItems}
        placement='bottom-start'
        className={cx('iui-scroll', menuClassName)}
        style={{
          minWidth,
          maxWidth: `min(${minWidth * 2}px, 90vw)`,
          maxHeight: 315,
          ...menuStyle,
        }}
        role='listbox'
        onShow={onShowHandler}
        onHide={onHideHandler}
        disabled={disabled}
        {...popoverProps}
        visible={isOpen}
        onClickOutside={(_, { target }) => {
          if (!toggleButtonRef.current?.contains(target as Element)) {
            setIsOpen(false);
          }
        }}
        setFocus={!multi}
      >
        <div
          ref={selectRef}
          className={cx('iui-select-button', {
            'iui-placeholder':
              (!selectedItems || selectedItems.length === 0) && !!placeholder,
            'iui-disabled': disabled,
            [`iui-${size}`]: !!size,
          })}
          onClick={() => !disabled && toggle()}
          onKeyDown={(e) => !disabled && onKeyDown(e, toggle)}
          tabIndex={!disabled ? 0 : undefined}
        >
          {(!selectedItems || selectedItems.length === 0) && (
            <span className='iui-content'>{placeholder}</span>
          )}
          {Array.isArray(selectedItems) ? (
            <>
              {selectedItemsRenderer && selectedItemsRenderer(selectedItems)}
              {!selectedItemsRenderer && (
                <span className='iui-content'>
                  <div
                    className='iui-multi-select-tag-container'
                    ref={containerRef}
                  >
                    {selectedItemsArray.slice(0, visibleCount)}
                    {visibleCount < selectedItemsArray.length && (
                      <SelectTag>
                        +{selectedItemsArray.length - visibleCount} item(s)
                      </SelectTag>
                    )}
                  </div>
                </span>
              )}
            </>
          ) : (
            <>
              {selectedItems &&
                selectedItemRenderer &&
                selectedItemRenderer(selectedItems)}
              {selectedItems && !selectedItemRenderer && (
                <>
                  {selectedItems.icon &&
                    React.cloneElement(selectedItems.icon, {
                      className: cx(
                        selectedItems?.icon.props.className,
                        'iui-icon',
                      ),
                    })}
                  <span className='iui-content'>{selectedItems.label}</span>
                </>
              )}
            </>
          )}
        </div>
      </DropdownMenu>
      <span
        ref={toggleButtonRef}
        className={cx('iui-end-icon', {
          'iui-actionable': !disabled,
          'iui-disabled': disabled,
          'iui-open': isOpen,
        })}
        onClick={() => !disabled && toggle()}
      >
        <SvgCaretDownSmall aria-hidden />
      </span>
    </div>
  );
};

export default Select;
