/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { CarouselContext } from './CarouselContext';
import { useMergedRefs } from '../utils';

/**
 * `CarouselSlider` is the scrollable list that should consist of `CarouselSlide` components.
 */
export const CarouselSlider = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>
>((props, ref) => {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('CarouselSlider must be used within Carousel');
  }

  const { currentIndex, setSlideCount, idPrefix } = context;
  const sliderRef = React.useRef<HTMLOListElement>(null);
  const refs = useMergedRefs(sliderRef, ref);

  React.useLayoutEffect(() => {
    setSlideCount(React.Children.count(props.children));
  }, [props.children, setSlideCount]);

  const items = React.useMemo(
    () =>
      React.Children.map(props.children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              id: `${idPrefix}--slide-${index}`,
              index,
            })
          : child,
      ) ?? [],
    [props.children, idPrefix],
  ) as React.ReactNode[];

  React.useEffect(() => {
    if (!sliderRef.current) {
      return;
    }

    sliderRef.current.children.item(currentIndex)?.scrollIntoView();
  }, [currentIndex]);

  return (
    <ol
      aria-live='polite'
      {...props}
      ref={refs}
      className={cx('iui-carousel-slider', props.className)}
    >
      {items}
    </ol>
  );
});
