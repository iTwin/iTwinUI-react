/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import {
  getRandomValue,
  useIntersection,
  useMergedRefs,
  useTheme,
} from '../utils';
import { IconButton } from '../Buttons';
import SvgChevronLeft from '@itwin/itwinui-icons-react/cjs/icons/ChevronLeft';
import SvgChevronRight from '@itwin/itwinui-icons-react/cjs/icons/ChevronRight';
import '@itwin/itwinui-css/css/carousel.css';

export type CarouselProps = {
  /**
   * Index of the currently shown slide.
   * Can be used to set the default index or control the active slide programmatically.
   * @default 0
   */
  activeSlideIndex?: number;
} & React.ComponentPropsWithoutRef<'div'>;

export const CarouselContext = React.createContext<
  | {
      /** Stateful index of currently active slide. */
      currentIndex: number;
      /** State updater for currentIndex. */
      setCurrentIndex: (index: number | ((old: number) => void)) => void;
      /** Number of slides in the carousel. Gets set in CarouselSlider for reading in CarouselDots.  */
      slideCount: number;
      /** State updater for slideCount. */
      setSlideCount: (length: number | ((old: number) => void)) => void;
      /** Stateful value of the left/right arrow keys currently pressed. */
      keysPressed: Record<string, boolean>;
      /** Prefix used for setting id for internal carousel components. */
      idPrefix: string;
      /** Ref object used for preventing intersection observer from breaking manual slide updates. */
      isManuallyUpdating: React.MutableRefObject<boolean>;
    }
  | undefined
>(undefined);

/**
 * The Carousel component consists of a set of slides, normally displayed one at a time. A navigation section is
 * located below the slides, consisting of "dots" and "previous"/"next" buttons, used for changing slides.
 *
 * The currently shown slide can also be changed using the left/right arrow keys or by dragging on a touch device.
 *
 * This component uses a composition approach so it should be used with the provided subcomponents.
 *
 * @example
 * <Carousel>
 *   <Carousel.Slider>
 *     <Carousel.Slide>...</Carousel.Slide>
 *     <Carousel.Slide>...</Carousel.Slide>
 *     <Carousel.Slide>...</Carousel.Slide>
 *   </Carousel.Slider>
 *   <Carousel.Navigation />
 * </Carousel>
 */
export const Carousel = (props: CarouselProps) => {
  const { activeSlideIndex: userActiveIndex = 0, children, ...rest } = props;

  // Generate a stateful random id if not specified
  const [id] = React.useState(
    () => props.id ?? `iui-carousel-${getRandomValue(10)}`,
  );

  useTheme();

  const [currentIndex, setCurrentIndex] = React.useState(userActiveIndex);
  React.useEffect(() => {
    setCurrentIndex(userActiveIndex);
  }, [userActiveIndex]);

  const [slideCount, setSlideCount] = React.useState(0);

  const [keysPressed, setKeysPressed] = React.useState<Record<string, boolean>>(
    {},
  );

  const isManuallyUpdating = React.useRef(false);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      setKeysPressed((old) => ({ ...old, [event.key]: true }));
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft': {
        isManuallyUpdating.current = true;
        setKeysPressed((old) => ({ ...old, ArrowLeft: false }));
        setCurrentIndex((old) => (slideCount + old - 1) % slideCount);
        break;
      }
      case 'ArrowRight': {
        isManuallyUpdating.current = true;
        setKeysPressed((old) => ({ ...old, ArrowRight: false }));
        setCurrentIndex((old) => (slideCount + old + 1) % slideCount);
        break;
      }
    }
  };

  return (
    <section
      className='iui-carousel'
      aria-roledescription='carousel'
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      {...rest}
      id={id}
    >
      <CarouselContext.Provider
        value={{
          currentIndex,
          setCurrentIndex,
          slideCount,
          setSlideCount,
          keysPressed,
          idPrefix: id,
          isManuallyUpdating,
        }}
      >
        {children}
      </CarouselContext.Provider>
    </section>
  );
};

/**
 * CarouselSlider is the scrollable list that should consist of CarouselSlide components.
 */
const CarouselSlider = React.forwardRef<
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

/**
 * CarouselSlide is used for the actual slide content. The content can be specified through `children`.
 *
 * It is recommended that the slide content bring its own dimensions (esp. height) and that
 * the dimensions should be the same for all slides.
 */
const CarouselSlide = React.forwardRef<
  HTMLLIElement,
  { index?: number } & React.ComponentPropsWithoutRef<'li'>
>(({ index, ...props }, ref) => {
  const { className, children, ...rest } = props;

  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error('CarouselSlider must be used within Carousel');
  }

  const { currentIndex, isManuallyUpdating, setCurrentIndex } = context;

  const updateActiveIndex = React.useCallback(() => {
    if (!isManuallyUpdating.current) {
      setCurrentIndex((prev) => (prev !== index ? index : prev));
    }
    if (currentIndex === index) {
      isManuallyUpdating.current = false;
    }
  }, [currentIndex, index, isManuallyUpdating, setCurrentIndex]);

  const intersectionRef = useIntersection(
    updateActiveIndex,
    { threshold: 0.5 },
    false,
  );

  const refs = useMergedRefs(intersectionRef, ref);

  return (
    <li
      className={cx('iui-carousel-slider-item', className)}
      role='tabpanel'
      aria-roledescription='slide'
      ref={refs}
      {...rest}
    >
      {children}
    </li>
  );
});

/**
 * The CarouselNavigation component by default consists of the previous/next slide buttons
 * shown on the left and right, and the CarouselDots component shown in the middle.
 *
 * `children` can be specified to override what is shown in this section.
 */
const CarouselNavigation = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'>
>((props, ref) => {
  const { className, children, ...rest } = props;

  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error('CarouselNavigation should be used inside Carousel');
  }

  const {
    slideCount,
    setCurrentIndex,
    keysPressed,
    isManuallyUpdating,
  } = context;

  return (
    <nav
      className={cx('iui-carousel-navigation', className)}
      ref={ref}
      {...rest}
    >
      {children ?? (
        <>
          <div className='iui-carousel-navigation-left'>
            <IconButton
              styleType='borderless'
              size='small'
              tabIndex={-1}
              onClick={() => {
                setCurrentIndex((old) => (slideCount + old - 1) % slideCount);
                isManuallyUpdating.current = true;
              }}
              data-pressed={keysPressed['ArrowLeft'] || undefined}
            >
              <SvgChevronLeft />
            </IconButton>
          </div>

          <CarouselDots />

          <div className='iui-carousel-navigation-right'>
            <IconButton
              styleType='borderless'
              size='small'
              tabIndex={-1}
              onClick={() => {
                setCurrentIndex((old) => (slideCount + old + 1) % slideCount);
                isManuallyUpdating.current = true;
              }}
              data-pressed={keysPressed['ArrowRight'] || undefined}
            >
              <SvgChevronRight />
            </IconButton>
          </div>
        </>
      )}
    </nav>
  );
});

/**
 * The CarouselDots component shows a list of CarouselDot components which can be used to
 * choose a specific slide. If used as a descandant of Carousel, then this component does not need
 * any props or `children`.
 *
 * The props can be specified if this component is being used outside Carousel. `children` can be specified
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
const CarouselDots = React.forwardRef<
  HTMLDivElement,
  {
    /** Number of total dots/slides in the carousel. Will be inferred from Carousel context. */
    length?: number;
    /** Maximum number of dots to show in the viewport. @default 5 */
    maxCount?: number;
    /** Index of currently acitve dot. Will be inferred from Carousel context. */
    currentIndex?: number;
    /** Callback fired when any of the dots are clicked. */
    onSlideChange?: (index: number) => void;
  } & React.ComponentPropsWithoutRef<'div'>
>((props, ref) => {
  const {
    maxCount = 5,
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
        context.isManuallyUpdating.current = true;
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
      'CarouselDots needs to be used inside Carousel, or missing props need to be specified',
    );
  }

  const dots = React.useMemo(
    () =>
      Array(slideCount)
        .fill(null)
        .map((_, index) => {
          const firstDotIndex = Math.max(
            0,
            Math.min(
              currentIndex - Math.ceil(maxCount / 2) + 1,
              slideCount - maxCount,
            ),
          );
          const lastDotIndex = Math.min(
            slideCount - 1,
            Math.max(currentIndex + Math.floor(maxCount / 2), maxCount - 1),
          );

          const isFirstSmallDot =
            (index === firstDotIndex && index !== 0) ||
            (index === lastDotIndex && index !== slideCount - 1);
          const isSecondSmallDot =
            (index === firstDotIndex + 1 && index !== 1) ||
            (index === lastDotIndex - 1 && index !== slideCount - 2);

          return (
            <CarouselDot
              aria-label={`Slide ${index}`}
              isActive={index === currentIndex}
              onClick={() => handleSlideChange(index)}
              isFirst={isFirstSmallDot}
              isSecond={isSecondSmallDot}
              isInvisible={index < firstDotIndex || index > lastDotIndex}
              key={index}
              id={`${idPrefix}--dot-${index}`}
              aria-controls={`${idPrefix}--slide-${index}`}
            />
          );
        }),
    [slideCount, currentIndex, maxCount, idPrefix, handleSlideChange],
  );

  return (
    <div
      className={cx('iui-carousel-navigation-dots', className)}
      role='tablist'
      aria-label='Slides'
      ref={ref}
      {...rest}
    >
      {children ?? dots}
    </div>
  );
});

/**
 * CarouselDot is the actual "dot" component. It should be used as a child of `CarouselDots`.
 */
const CarouselDot = React.forwardRef<
  HTMLButtonElement,
  {
    /** Is this dot currently active? */
    isActive?: boolean;
    /** Should be set to true for dots that are not visible, i.e. truncated. */
    isInvisible?: boolean;
    /** Should be set to true for dots that are one spot from the edge of truncation. The dot size becomes small.  */
    isSecond?: boolean;
    /** Should be set to true for dots that are at the edge of truncation. The dot size becomes even smaller.  */
    isFirst?: boolean;
  } & React.ComponentPropsWithoutRef<'button'>
>((props, ref) => {
  const {
    isActive,
    isFirst,
    isSecond,
    isInvisible,
    className,
    ...rest
  } = props;

  return (
    <button
      type='button'
      role='tab'
      tabIndex={-1}
      className={cx(
        'iui-carousel-navigation-dot',
        {
          'iui-active': isActive,
          'iui-first': isFirst,
          'iui-second': isSecond,
          'iui-invisible': isInvisible,
        },
        className,
      )}
      aria-selected={isActive}
      ref={ref}
      {...rest}
    />
  );
});

Carousel.Slider = CarouselSlider;
Carousel.Slide = CarouselSlide;
Carousel.Navigation = CarouselNavigation;
Carousel.Dots = CarouselDots;
Carousel.Dot = CarouselDot;

export default Carousel;
