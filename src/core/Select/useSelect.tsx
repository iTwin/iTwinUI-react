import React from 'react';
import cx from 'classnames';
import { ItemRendererProps, SelectOption } from './Select';
import { PopoverInstance } from '../utils/Popover';
import { MenuItem } from '../Menu';

/**
 * Internal hook containing all logic for the `Select` component.
 * @private
 */
export const useSelect = <T,>(props: {
  options: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  visible?: boolean;
  disabled?: boolean;
  setFocus?: boolean;
  onShow?: (i: PopoverInstance) => void;
  onHide?: (i: PopoverInstance) => void;
  itemRenderer?: (
    option: SelectOption<T>,
    itemProps: ItemRendererProps,
  ) => JSX.Element;
  selectedItemRenderer?: (option: SelectOption<T>) => JSX.Element;
}) => {
  const {
    options,
    value,
    onChange,
    visible,
    disabled,
    setFocus,
    itemRenderer,
    selectedItemRenderer,
    onShow,
    onHide,
  } = props;

  const [isOpen, setIsOpen] = React.useState(visible ?? false);
  React.useEffect(() => {
    setIsOpen((open) => visible ?? open);
  }, [visible]);

  const [minWidth, setMinWidth] = React.useState(0);
  const toggle = () => setIsOpen((open) => !open);

  const selectRef = React.useRef<HTMLDivElement>(null);

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
    if (selectRef.current && !disabled && setFocus) {
      selectRef.current.focus();
    }
  }, [setFocus, disabled]);

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
        toggle();
        event.preventDefault();
        break;
      default:
        break;
    }
  };

  const menuItems = React.useCallback(
    (close: () => void) => {
      return options.map((option, index) => {
        const isSelected = value === option.value;
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
            close();
          },
          ref: (el: HTMLElement) => isSelected && el?.scrollIntoView(),
          role: 'option',
          ...option,
          ...menuItem.props,
        });
      });
    },
    [itemRenderer, onChange, options, value],
  );

  const selectedItem = React.useMemo(() => {
    if (value == null) {
      return undefined;
    }
    const selectedValue = options.find((option) => option.value === value);
    return selectedValue
      ? selectedItemRenderer?.(selectedValue) ?? (
          <>
            {selectedValue?.icon &&
              React.cloneElement(selectedValue.icon, {
                className: cx(selectedValue?.icon.props.className, 'iui-icon'),
              })}
            <span className='iui-content'>{selectedValue.label}</span>
          </>
        )
      : undefined;
  }, [options, value, selectedItemRenderer]);

  return {
    menuItems,
    isOpen,
    selectedItem,
    onKeyDown,
    onShowHandler,
    onHideHandler,
    minWidth,
    toggle,
    selectRef,
  };
};
