/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Input, InputProps } from '../Input';
import SelectTag from '../Select/SelectTag';
import SelectTagContainer from '../Select/SelectTagContainer';
import { useSafeContext, useMergedRefs, useContainerWidth } from '../utils';
import {
  ComboBoxStateContext,
  ComboBoxActionContext,
  ComboBoxRefsContext,
} from './helpers';

type ComboBoxInputProps = InputProps;

export const ComboBoxInput = React.forwardRef(
  (props: ComboBoxInputProps, forwardedRef: React.Ref<HTMLInputElement>) => {
    const { onKeyDown: onKeyDownProp, onFocus: onFocusProp, ...rest } = props;

    const {
      isOpen,
      id,
      focusedIndex,
      enableVirtualization,
      multiple,
    } = useSafeContext(ComboBoxStateContext);
    const dispatch = useSafeContext(ComboBoxActionContext);
    const { inputRef, menuRef, optionsExtraInfoRef } = useSafeContext(
      ComboBoxRefsContext,
    );
    const refs = useMergedRefs(inputRef, forwardedRef);

    const focusedIndexRef = React.useRef(focusedIndex ?? -1);
    React.useEffect(() => {
      focusedIndexRef.current = focusedIndex ?? -1;
    }, [focusedIndex]);

    const getIdFromIndex = (index: number) => {
      return (
        menuRef.current?.querySelector(`[data-iui-index="${index}"]`)?.id ?? ''
      );
    };

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        onKeyDownProp?.(event);
        const length = Object.keys(optionsExtraInfoRef.current).length ?? 0;

        switch (event.key) {
          case 'ArrowDown': {
            event.preventDefault();
            if (!isOpen) {
              return dispatch(['open']);
            }

            if (length === 0) {
              return;
            }

            if (focusedIndexRef.current === -1) {
              const currentElement = menuRef.current?.querySelector(
                '[data-iui-index]',
              );
              return dispatch([
                'focus',
                Number(currentElement?.getAttribute('data-iui-index') ?? 0),
              ]);
            }

            // If virtualization is enabled, dont let round scrolling
            if (
              enableVirtualization &&
              !menuRef.current?.querySelector(
                `[data-iui-index="${focusedIndexRef.current}"]`,
              )?.nextElementSibling
            ) {
              return;
            }

            let nextIndex = focusedIndexRef.current;
            do {
              const currentElement = menuRef.current?.querySelector(
                `[data-iui-index="${nextIndex}"]`,
              );
              const nextElement =
                currentElement?.nextElementSibling ??
                menuRef.current?.querySelector('[data-iui-index]');
              nextIndex = Number(nextElement?.getAttribute('data-iui-index'));

              if (nextElement?.ariaDisabled !== 'true') {
                return dispatch(['focus', nextIndex]);
              }
            } while (nextIndex !== focusedIndexRef.current);
            break;
          }
          case 'ArrowUp': {
            event.preventDefault();
            if (!isOpen) {
              return dispatch(['open']);
            }

            if (length === 0) {
              return;
            }

            // If virtualization is enabled, dont let round scrolling
            if (
              enableVirtualization &&
              !menuRef.current?.querySelector(
                `[data-iui-index="${focusedIndexRef.current}"]`,
              )?.previousElementSibling
            ) {
              return;
            }

            if (focusedIndexRef.current === -1) {
              return dispatch([
                'focus',
                Object.values(optionsExtraInfoRef.current)?.[length - 1]
                  .__originalIndex ?? -1,
              ]);
            }

            let prevIndex = focusedIndexRef.current;
            do {
              const currentElement = menuRef.current?.querySelector(
                `[data-iui-index="${prevIndex}"]`,
              );
              const prevElement =
                currentElement?.previousElementSibling ??
                menuRef.current?.querySelector('[data-iui-index]:last-of-type');
              prevIndex = Number(prevElement?.getAttribute('data-iui-index'));

              if (prevElement?.ariaDisabled !== 'true') {
                return dispatch(['focus', prevIndex]);
              }
            } while (prevIndex !== focusedIndexRef.current);
            break;
          }
          case 'Enter': {
            event.preventDefault();
            if (isOpen) {
              dispatch(['select', focusedIndexRef.current]);
              dispatch(['close']);
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
          case 'Tab':
            dispatch(['close']);
            break;
        }
      },
      [
        dispatch,
        enableVirtualization,
        isOpen,
        menuRef,
        onKeyDownProp,
        optionsExtraInfoRef,
      ],
    );

    const handleFocus = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        dispatch(['open']);
        onFocusProp?.(event);
      },
      [dispatch, onFocusProp],
    );

    const [tagContainerRef, tagContainerWidth] = useContainerWidth(true);
    const [inputContainerRef] = useContainerWidth();

    const selectedItemsRenderer = (customRenderer: boolean) => {
      return customRenderer ? (
        <div
          ref={tagContainerRef}
          className='iui-select-tag-container'
          style={{
            maxWidth: `calc(100% - 150px)`,
            right: 'unset',
          }}
        >
          <span>item 1</span>
          <span>item 1</span>
          <span>item 1</span>
          <span>item 1</span>
          <span>item 1</span>
          <span>item 1</span>
          <span>item 1</span>
          <span>item 1</span>
          <span>item 1</span>
        </div>
      ) : (
        <SelectTagContainer
          ref={tagContainerRef}
          style={{
            maxWidth: `calc(100% - 150px)`,
            right: 'unset',
          }}
          tags={[
            <SelectTag key={1} label='asdasd' />,
            <SelectTag key={2} label='asdasd' />,
            <SelectTag key={3} label='asdasd' />,
            <SelectTag key={4} label='asdasd' />,
            <SelectTag key={5} label='asdasd' />,
            <SelectTag key={6} label='asdasd' />,
            <SelectTag key={7} label='asdasd' />,
            <SelectTag key={8} label='asdasd' />,
          ]}
        />
      );
    };

    return (
      <>
        <Input
          style={{ paddingLeft: tagContainerWidth + 18 }}
          ref={useMergedRefs(refs, inputContainerRef)}
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
        {multiple && selectedItemsRenderer(true)}
      </>
    );
  },
);
ComboBoxInput.displayName = 'ComboBoxInput';
