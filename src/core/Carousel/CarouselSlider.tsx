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
  const { children, className, ...rest } = props;
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('CarouselSlider must be used within Carousel');
  }

  const { currentIndex, setSlideCount, idPrefix } = context;

  const items = React.useMemo(
    () =>
      React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              id: `${idPrefix}--slide-${index}`,
              index,
            })
          : child,
      ) ?? [],
    [children, idPrefix],
  ) as React.ReactNode[];

  React.useLayoutEffect(() => {
    setSlideCount(items.length);
  }, [items, setSlideCount]);

  const [mountState, setMountState] = React.useState<
    'not-mounted' | 'just-mounted' | 'post-mount'
  >('not-mounted');

  React.useLayoutEffect(() => {
    if (mountState === 'not-mounted') {
      setMountState('just-mounted');
    } else if (mountState === 'just-mounted') {
      setMountState('post-mount');
    }
  }, [mountState]);

  const sliderRef = React.useRef<HTMLOListElement>(null);
  const refs = useMergedRefs(sliderRef, ref);

  React.useLayoutEffect(() => {
    if (!sliderRef.current) {
      return;
    }

    const slideToShow = sliderRef.current.children.item(currentIndex) as
      | HTMLElement
      | undefined;

    // instant scroll on first mount
    if (mountState === 'just-mounted') {
      sliderRef.current.scrollTo({
        left: slideToShow?.offsetLeft,
        behavior: 'instant' as ScrollBehavior, // scrollTo accepts 'instant' but ScrollBehavior type is wrong
      });
      return;
    }

    try {
      slideToShow?.scrollIntoView({ block: 'nearest' });
    } catch (_) {
      // Safari fallback
      sliderRef.current.scrollTo({ left: slideToShow?.offsetLeft });
    }
  }, [mountState, currentIndex]);

  return (
    <ol
      aria-live='polite'
      className={cx('iui-carousel-slider', className)}
      ref={refs}
      {...rest}
    >
      {items}
    </ol>
  );
});
