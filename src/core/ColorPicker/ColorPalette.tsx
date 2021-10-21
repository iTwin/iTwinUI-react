/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import {
  CommonProps,
  getFocusableElements,
  useMergedRefs,
  useTheme,
} from '../utils';
import '@itwin/itwinui-css/css/color-picker.css';

export const ColorPalette = React.forwardRef(
  (
    props: { setFocus?: boolean; children: React.ReactNode } & Omit<
      CommonProps,
      'title'
    >,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const { setFocus = false, children } = props;

    useTheme();

    const [focusedIndex, setFocusedIndex] = React.useState<number>();

    // callback ref to set tabindex=0 on first child if none of the swatches are tabbable
    const setDefaultTabIndex = (el: HTMLDivElement) => {
      if (el && !el.querySelector('[tabindex="0"]')) {
        el.firstElementChild?.setAttribute('tabindex', '0');
      }
    };

    const paletteRef = React.useRef<HTMLDivElement>(null);
    const refs = useMergedRefs(ref, paletteRef, setDefaultTabIndex);

    // Color palette arrow key navigation
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      const swatches = getFocusableElements(
        paletteRef.current,
      ) as HTMLElement[];

      if (!swatches.length) {
        return;
      }

      const currentIndex = swatches.findIndex(
        (swatch) => swatch === paletteRef.current?.ownerDocument.activeElement,
      );
      if (currentIndex < 0) {
        return;
      }
      let newIndex = -1;

      switch (event.key) {
        case 'ArrowDown': {
          // Look for next ColorSwatch with same offsetLeft value
          newIndex = swatches.findIndex(
            (swatch, index) =>
              index > currentIndex &&
              swatch.offsetLeft === swatches[currentIndex].offsetLeft,
          );
          break;
        }
        case 'ArrowUp': {
          // Look backwards for next ColorSwatch with same offsetLeft value
          for (let i = currentIndex - 1; i >= 0; i--) {
            if (swatches[i].offsetLeft === swatches[currentIndex].offsetLeft) {
              newIndex = i;
              break;
            }
          }
          break;
        }
        case 'ArrowLeft':
          newIndex = Math.max(currentIndex - 1, 0);
          break;
        case 'ArrowRight':
          newIndex = Math.min(currentIndex + 1, swatches.length - 1);
          break;
        case 'Enter':
        case ' ':
        case 'Spacebar':
          swatches[currentIndex].click();
          event.preventDefault();
          return;
      }

      if (newIndex >= 0 && newIndex < swatches.length) {
        setFocusedIndex(newIndex);
        event.preventDefault();
      }
    };

    // colorSwatches may be supplied as children which requires looking through DOM
    React.useEffect(() => {
      const swatches = getFocusableElements(
        paletteRef.current,
      ) as HTMLElement[];

      if (focusedIndex != null) {
        swatches[focusedIndex]?.focus();
        return;
      }

      if (setFocus) {
        const selectedIndex = swatches.findIndex(
          (swatch) =>
            swatch.tabIndex === 0 ||
            swatch.getAttribute('aria-selected') === 'true',
        );
        setFocusedIndex(selectedIndex > -1 ? selectedIndex : undefined);
      }
    }, [focusedIndex, setFocus]);

    return (
      <div className='iui-color-palette' onKeyDown={handleKeyDown} ref={refs}>
        {children}
      </div>
    );
  },
);

export default ColorPalette;
