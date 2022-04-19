/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { Input, InputProps } from '../Input';
import { Menu, MenuExtraContent, MenuItemProps, MenuProps } from '../Menu';
import { SelectOption } from '../Select';
import { Text } from '../Typography';
import {
  InputContainer,
  useTheme,
  Popover,
  PopoverProps,
  CommonProps,
  getRandomValue,
  InputContainerProps,
  useMergedRefs,
} from '../utils';
import SvgCaretDownSmall from '@itwin/itwinui-icons-react/cjs/icons/CaretDownSmall';
import 'tippy.js/animations/shift-away.css';
import { StatusMessage } from '../StatusMessage';

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
        id: `${id}-option${index}`,
        __originalIndex: index,
      })),
    );
  }, [id, optionsProp]);

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
      dispatch(['open']);
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

  // Reset focused item when filter changes
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
      setInputValue(`${options[selectedIndex]?.label ?? ''}`);
      setFilteredOptions(options);
    }
  }, [options, selectedIndex]);

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

  // Memoize the default (not selected/focused) version of menu items
  const memoizedItems = React.useMemo(() => {
    return options.map((option, index) => {
      const { __originalIndex, ...rest } = option;

      const customItem = itemRenderer
        ? itemRenderer(option, {
            isFocused: false,
            isSelected: false,
            index: __originalIndex,
            id: option.id,
          })
        : null;

      return customItem ? (
        React.cloneElement(customItem, {
          onClick: (e: unknown) => {
            dispatch(['select', __originalIndex as number]);
            customItem.props.onClick?.(e);
          },
          'data-iui-index': __originalIndex,
        })
      ) : (
        <ComboBoxMenuItem
          key={(__originalIndex as number) ?? index}
          index={option.__originalIndex}
          onClick={() => dispatch(['select', __originalIndex as number])}
          {...rest}
        >
          {option.label}
        </ComboBoxMenuItem>
      );
    });
  }, [itemRenderer, options]);

  const getMenuItem = React.useCallback(
    (option: ComboBoxOption<T>) => {
      const { __originalIndex, ...rest } = option;

      if (
        selectedIndex !== __originalIndex &&
        focusedIndex !== __originalIndex
      ) {
        return memoizedItems[option.__originalIndex];
      }

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
            dispatch(['select', __originalIndex as number]);
            customItem.props.onClick?.(e);
          },
          // ComboBox.MenuItem handles data-iui-index and iui-focused through context
          // but we still need to pass them here for backwards compatibility with MenuItem
          className: cx(customItem.props.className, 'iui-focused'),
          'data-iui-index': __originalIndex,
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
    [focusedIndex, itemRenderer, memoizedItems, selectedIndex],
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
              <ComboBoxInputContainer
                disabled={inputProps?.disabled}
                endIcon={
                  <ComboBoxEndIcon
                    className={cx({
                      'iui-actionable': !inputProps?.disabled,
                      'iui-disabled': inputProps?.disabled,
                      'iui-open': isOpen,
                    })}
                  />
                }
                {...rest}
              >
                <ComboBoxInput
                  value={inputValue}
                  {...inputProps}
                  onChange={handleOnInput}
                />
              </ComboBoxInputContainer>
              <ComboBoxPopover {...dropdownMenuProps}>
                <ComboBoxMenu>
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map(getMenuItem)
                  ) : (
                    <MenuExtraContent>
                      <Text isMuted>{emptyStateMessage}</Text>
                    </MenuExtraContent>
                  )}
                </ComboBoxMenu>
              </ComboBoxPopover>
            </>
          )}
        </ComboBoxStateContext.Provider>
      </ComboBoxActionContext.Provider>
    </ComboBoxRefsContext.Provider>
  );
};

type ComboBoxAction = 'open' | 'close' | 'toggle' | 'select' | 'focus';

const comboBoxReducer = (
  state: { isOpen: boolean; selectedIndex: number; focusedIndex: number },
  [type, value]: [ComboBoxAction] | [ComboBoxAction, number | undefined],
) => {
  switch (type) {
    case 'open': {
      return { ...state, isOpen: true };
    }
    case 'close': {
      return { ...state, isOpen: false };
    }
    case 'toggle': {
      return { ...state, isOpen: !state.isOpen };
    }
    case 'select': {
      return {
        ...state,
        isOpen: false,
        selectedIndex: value ?? state.focusedIndex ?? state.selectedIndex,
        focusedIndex: value ?? state.focusedIndex,
      };
    }
    case 'focus': {
      return { ...state, focusedIndex: value ?? state.selectedIndex ?? -1 };
    }
    default: {
      return state;
    }
  }
};

const ComboBoxRefsContext = React.createContext<
  | {
      inputRef: React.RefObject<HTMLInputElement>;
      menuRef: React.RefObject<HTMLUListElement>;
      toggleButtonRef: React.RefObject<HTMLSpanElement>;
      optionsRef: React.MutableRefObject<Array<HTMLLIElement>>;
    }
  | undefined
>(undefined);
ComboBoxRefsContext.displayName = 'ComboBoxRefsContext';

const ComboBoxStateContext = React.createContext<
  | {
      isOpen: boolean;
      id: string;
      minWidth: number;
      focusedIndex?: number;
    }
  | undefined
>(undefined);
ComboBoxStateContext.displayName = 'ComboBoxStateContext';

const ComboBoxActionContext = React.createContext<
  ((x: [ComboBoxAction] | [ComboBoxAction, number]) => void) | undefined
>(undefined);
ComboBoxActionContext.displayName = 'ComboBoxActionContext';

const useSafeContext = <T,>(context: React.Context<T>) => {
  const value = React.useContext(context);
  if (!value) {
    throw new Error(`${context.displayName} is undefined`);
  }
  return value!; // eslint-disable-line @typescript-eslint/no-non-null-assertion -- we already checked for undefined
};

const ComboBoxInputContainer = (
  props: React.ComponentPropsWithoutRef<'div'> & {
    endIcon?: React.ReactNode;
  } & Pick<InputContainerProps, 'status' | 'message' | 'disabled'>,
) => {
  const { className, status, message, endIcon, children, ...rest } = props;

  const { id } = useSafeContext(ComboBoxStateContext);

  return (
    <InputContainer
      className={className}
      status={status}
      statusMessage={
        typeof message === 'string' ? (
          <StatusMessage status={status}>{message}</StatusMessage>
        ) : (
          React.isValidElement(message) &&
          React.cloneElement(message, { status })
        )
      }
      {...rest}
      id={id}
    >
      <div className='iui-input-with-icon'>
        {children}
        {endIcon}
      </div>
    </InputContainer>
  );
};
ComboBoxInputContainer.displayName = 'ComboBoxInputContainer';

const ComboBoxEndIcon = React.forwardRef(
  (
    props: React.ComponentPropsWithoutRef<'span'>,
    forwardedRef: React.RefObject<HTMLSpanElement>,
  ) => {
    const { className, children, onClick: onClickProp, ...rest } = props;
    const dispatch = useSafeContext(ComboBoxActionContext);
    const { toggleButtonRef } = useSafeContext(ComboBoxRefsContext);
    const refs = useMergedRefs(toggleButtonRef, forwardedRef);

    return (
      <span
        ref={refs}
        className={cx('iui-end-icon', className)}
        onClick={(e) => {
          onClickProp?.(e);
          if (!e.isDefaultPrevented()) {
            dispatch(['toggle']);
          }
        }}
        {...rest}
      >
        {children ?? <SvgCaretDownSmall aria-hidden />}
      </span>
    );
  },
);
ComboBoxEndIcon.displayName = 'ComboBoxEndIcon';

const ComboBoxInput = React.forwardRef(
  (props: InputProps, forwardedRef: React.RefObject<HTMLInputElement>) => {
    const { onKeyDown: onKeyDownProp, onFocus: onFocusProp, ...rest } = props;

    const { isOpen, id, focusedIndex } = useSafeContext(ComboBoxStateContext);
    const dispatch = useSafeContext(ComboBoxActionContext);
    const { inputRef, menuRef, optionsRef } = useSafeContext(
      ComboBoxRefsContext,
    );
    const refs = useMergedRefs(inputRef, forwardedRef);

    const focusedIndexRef = React.useRef({ original: -1, filtered: -1 });

    // FIXME: Currently, the selected item is not focused on the first render.

    // const forceRerender = React.useReducer(() => ({}), {})[1];
    // const [optionsMounted, setOptionsMounted] = React.useState(false);
    // React.useEffect(() => {

    //   if (!isOpen) {
    //     return;
    //   }

    //   if (isOpen && !menuRef.current) {
    //     forceRerender();
    //   }

    //   if (menuRef.current?.children.length && optionsRef.current.length > 0) {
    //     setOptionsMounted(true);
    //   }
    // });

    React.useEffect(() => {
      focusedIndexRef.current = {
        original: focusedIndex ?? -1,
        filtered: optionsRef.current.findIndex(
          (el) => Number(el.dataset.iuiIndex) === focusedIndex,
        ),
      };
    }, [focusedIndex, optionsRef]);

    const getIdFromIndex = (index: number) => {
      return (
        menuRef.current?.querySelector(`[data-iui-index="${index}"]`)?.id ?? ''
      );
    };

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        onKeyDownProp?.(event);
        const length = optionsRef.current.length ?? 0;

        switch (event.key) {
          case 'ArrowDown': {
            event.preventDefault();
            if (!isOpen) {
              return dispatch(['open']);
            }

            if (focusedIndexRef.current.original === -1 && length > 0) {
              return dispatch([
                'focus',
                Number(optionsRef.current[0].dataset.iuiIndex),
              ]);
            }

            if (length === 0) {
              return;
            }

            let nextIndex = focusedIndexRef.current.filtered;
            do {
              nextIndex = (nextIndex + length + 1) % length;
              const item = optionsRef.current[nextIndex];

              if (
                item.dataset.iuiIndex != undefined &&
                item.ariaDisabled !== 'true'
              ) {
                return dispatch(['focus', Number(item.dataset.iuiIndex)]);
              }
            } while (nextIndex !== focusedIndexRef.current.filtered);
            break;
          }
          case 'ArrowUp': {
            event.preventDefault();
            if (!isOpen) {
              return dispatch(['open']);
            }

            if (focusedIndexRef.current.original === -1 && length > 0) {
              return dispatch([
                'focus',
                Number(optionsRef.current[length - 1].dataset.iuiIndex),
              ]);
            }

            if (length === 0) {
              return;
            }

            let prevIndex = focusedIndexRef.current.filtered;
            do {
              prevIndex = (prevIndex + length - 1) % length;
              const item = optionsRef.current[prevIndex];
              if (
                item.dataset.iuiIndex != undefined &&
                item.ariaDisabled !== 'true'
              ) {
                return dispatch(['focus', Number(item.dataset.iuiIndex)]);
              }
            } while (prevIndex !== focusedIndexRef.current.filtered);
            break;
          }
          case 'Enter': {
            event.preventDefault();
            if (isOpen) {
              dispatch(['select']);
            } else {
              dispatch(['open']);
            }
            break;
          }
          case 'Escape': {
            event.preventDefault();
            dispatch(['close']);
            break;
          }
        }
      },
      [dispatch, isOpen, onKeyDownProp, optionsRef],
    );

    const handleFocus = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        dispatch(['open']);
        onFocusProp?.(event);
      },
      [dispatch, onFocusProp],
    );

    return (
      <Input
        ref={refs}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        aria-activedescendant={
          isOpen && focusedIndex != undefined && focusedIndex > -1
            ? getIdFromIndex(focusedIndex)
            : undefined
        }
        role='combobox'
        aria-controls={isOpen ? `${id}-list` : undefined}
        aria-autocomplete='list'
        spellCheck={false}
        autoCapitalize='none'
        autoCorrect='off'
        {...rest}
      />
    );
  },
);
ComboBoxInput.displayName = 'ComboBoxInput';

const ComboBoxPopover = React.forwardRef(
  (
    props: PopoverProps & { children: JSX.Element },
    forwardedRef: React.RefObject<Element>,
  ) => {
    const { children, ...rest } = props;
    const { isOpen } = useSafeContext(ComboBoxStateContext);
    const dispatch = useSafeContext(ComboBoxActionContext);
    const { inputRef, toggleButtonRef } = useSafeContext(ComboBoxRefsContext);

    // sync internal isOpen state with user's visible prop
    React.useEffect(() => {
      dispatch([props.visible ? 'open' : 'close']);
    }, [dispatch, props.visible]);

    return (
      <Popover
        placement='bottom-start'
        visible={isOpen}
        onClickOutside={React.useCallback(
          (_, { target }) => {
            if (!toggleButtonRef.current?.contains(target as Element)) {
              dispatch(['close']);
            }
          },
          [dispatch, toggleButtonRef],
        )}
        animation='shift-away'
        duration={200}
        reference={inputRef}
        ref={forwardedRef}
        content={children}
        {...rest}
      />
    );
  },
);
ComboBoxPopover.displayName = 'ComboBoxPopover';

const ComboBoxMenu = React.forwardRef(
  (
    props: Omit<MenuProps, 'onClick'> & React.ComponentPropsWithoutRef<'ul'>,
    forwardedRef: React.RefObject<HTMLUListElement>,
  ) => {
    const { className, style, ...rest } = props;
    const { minWidth, id } = useSafeContext(ComboBoxStateContext);
    const { menuRef, optionsRef } = useSafeContext(ComboBoxRefsContext);

    React.useEffect(() => {
      if (menuRef.current != null) {
        const items = menuRef.current.querySelectorAll('[data-iui-index]');
        optionsRef.current = Array.from(items) as HTMLLIElement[]; // need this cast to make TS happy :(
      }
    }, [menuRef, optionsRef, props.children]);

    const refs = useMergedRefs(menuRef, forwardedRef);

    return (
      <Menu
        id={`${id}-list`}
        style={React.useMemo(
          () => ({
            minWidth,
            maxWidth: `min(${minWidth * 2}px, 90vw)`,
            maxHeight: 300,
            ...style,
          }),
          [minWidth, style],
        )}
        setFocus={false}
        role='listbox'
        ref={refs}
        className={cx('iui-scroll', className)}
        {...rest}
      />
    );
  },
);
ComboBoxMenu.displayName = 'ComboBoxMenu';

const ComboBoxMenuItem = React.memo(
  React.forwardRef(
    (
      props: MenuItemProps & { index: number },
      forwardedRef: React.RefObject<HTMLLIElement>,
    ) => {
      const {
        children,
        isSelected,
        disabled,
        value,
        onClick,
        sublabel,
        size = !!sublabel ? 'large' : 'default',
        icon,
        badge,
        className,
        role = 'menuitem',
        index,
        ...rest
      } = props;

      const { focusedIndex } = useSafeContext(ComboBoxStateContext);

      const focusRef = (el: HTMLLIElement | null) => {
        // will need to check for virtualization here too
        if (focusedIndex === index) {
          el?.scrollIntoView({ block: 'nearest' });
        }
      };

      const refs = useMergedRefs(forwardedRef, focusRef);

      return (
        <li
          className={cx(
            'iui-menu-item',
            {
              'iui-large': size === 'large',
              'iui-active': isSelected,
              'iui-disabled': disabled,
              'iui-focused': focusedIndex === index,
            },
            className,
          )}
          ref={refs}
          onClick={() => !disabled && onClick?.(value)}
          role={role}
          tabIndex={disabled || role === 'presentation' ? undefined : -1}
          aria-selected={isSelected}
          aria-disabled={disabled}
          data-iui-index={index}
          {...rest}
        >
          {icon &&
            React.cloneElement(icon, {
              className: cx(icon.props.className, 'iui-icon'),
            })}
          <span className='iui-content'>
            <div className='iui-menu-label'>{children}</div>
            {sublabel && <div className='iui-menu-description'>{sublabel}</div>}
          </span>
          {badge &&
            React.cloneElement(badge, {
              className: cx(badge.props.className, 'iui-icon'),
            })}
        </li>
      );
    },
  ),
);
ComboBoxMenuItem.displayName = 'ComboBoxMenuItem';

ComboBox.InputContainer = ComboBoxInputContainer;
ComboBox.Input = ComboBoxInput;
ComboBox.EndIcon = ComboBoxEndIcon;
ComboBox.Popover = ComboBoxPopover;
ComboBox.Menu = ComboBoxMenu;
ComboBox.MenuItem = ComboBoxMenuItem;

export default ComboBox;
