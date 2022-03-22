/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { CarouselContext } from './CarouselContext';
import { useMergedRefs, useResizeObserver, useTheme } from '../utils';
import { CarouselDot } from './CarouselDot';
import '@itwin/itwinui-css/css/carousel.css';

type CarouselDotsListProps = {
  /** Number of total dots/slides in the carousel. Will be inferred from Carousel context. */
  length?: number;
  /** Maximum number of dots to show in the viewport. @default 5 */
  maxCount?: number;
  /** Index of currently active dot. Will be inferred from Carousel context. */
  currentIndex?: number;
  /** Callback fired when any of the dots are clicked. */
  onSlideChange?: (index: number) => void;
} & React.ComponentPropsWithoutRef<'div'>;

/**
 * The `CarouselDots` component shows a list of `CarouselDot` components which can be used to
 * choose a specific slide. If used as a descendant of `Carousel`, then this component does not need
 * any props or `children`.
 *
 * The props can be specified if this component is being used outside `Carousel`. `children` can be specified
 * to override the individual dots that are shown.
 *
 * @example
 * <Carousel>
 *   // ...
 *   <Carousel.Dots />
 * </Carousel>
 *
 * @example
 * <Carousel.Dots
 *   length={10}
 *   maxCount={3}
 *   currentIndex={current}
 *   onSlideChange={(i) => setCurrent(i)}
 * />
 */
export const CarouselDotsList = React.forwardRef<
  HTMLDivElement,
  CarouselDotsListProps
>((props, ref) => {
  const {
    // maxCount,
    currentIndex: userCurrentIndex,
    length,
    className,
    onSlideChange,
    children,
    ...rest
  } = props;

  useTheme();

  const context = React.useContext(CarouselContext);
  const slideCount = length ?? context?.slideCount;
  const currentIndex = userCurrentIndex ?? context?.currentIndex;
  const idPrefix = props.id ?? context?.idPrefix;

  const handleSlideChange = React.useCallback(
    (index: number) => {
      if (context) {
        context.setCurrentIndex(index);
      }
      onSlideChange?.(index);
    },
    [context, onSlideChange],
  );

  if (
    slideCount == undefined ||
    currentIndex == undefined ||
    (!idPrefix && !children)
  ) {
    throw new Error(
      'CarouselDotsList needs to be used inside Carousel, or missing props need to be specified',
    );
  }

  const [visibleCount, setVisibleCount] = React.useState(slideCount);
  const listRef = React.useRef<HTMLDivElement>(null);
  const [resizeRef] = useResizeObserver(({ width }) => {
    if (!listRef.current) {
      return;
    }

    const dotWidth = (listRef.current.children[0] as HTMLElement).offsetWidth;
    setVisibleCount(Math.floor(width / dotWidth));
  });

  const refs = useMergedRefs(ref, resizeRef, listRef);

  const dots = React.useMemo(() => {
    const firstDotIndex = Math.max(
      0,
      Math.min(
        currentIndex - Math.ceil(visibleCount / 2) + 1,
        slideCount - visibleCount,
      ),
    );
    const lastDotIndex = Math.min(
      slideCount - 1,
      Math.max(currentIndex + Math.floor(visibleCount / 2), visibleCount - 1),
    );

    return Array(slideCount)
      .fill(null)
      .map((_, index) => {
        const isFirstSmallDot =
          (index === firstDotIndex && index !== 0) ||
          (index === lastDotIndex && index !== slideCount - 1);
        const isSecondSmallDot =
          (index === firstDotIndex + 1 && index !== 1) ||
          (index === lastDotIndex - 1 && index !== slideCount - 2);
        const isClipped = index < firstDotIndex || index > lastDotIndex;

        return (
          <CarouselDot
            key={index}
            aria-label={`Slide ${index}`}
            isActive={index === currentIndex}
            onClick={() => handleSlideChange(index)}
            id={`${idPrefix}--dot-${index}`}
            aria-controls={`${idPrefix}--slide-${index}`}
            isSmall={isSecondSmallDot}
            isSmaller={isFirstSmallDot || isClipped}
          />
        );
      });
  }, [slideCount, currentIndex, idPrefix, visibleCount, handleSlideChange]);

  return (
    <div
      className={cx('iui-carousel-navigation-dots', className)}
      role='tablist'
      aria-label='Slides'
      ref={refs}
      {...rest}
      style={{ display: 'block' }} // TODO: don't need flex
    >
      {children ?? dots}
    </div>
  );
});
