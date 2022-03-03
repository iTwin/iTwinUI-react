/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { getRandomValue, useTheme } from '../utils';
import { IconButton } from '../Buttons';
import SvgChevronLeft from '@itwin/itwinui-icons-react/cjs/icons/ChevronLeft';
import SvgChevronRight from '@itwin/itwinui-icons-react/cjs/icons/ChevronRight';
import '@itwin/itwinui-css/css/carousel.css';

export type CarouselProps = {
  currentIndex?: number;
} & React.ComponentPropsWithoutRef<'div'>;

const CarouselContext = React.createContext<
  | {
      currentIndex: number;
      setCurrentIndex: (index: number | ((old: number) => void)) => void;
      slideCount: number;
      setSlideCount: (length: number | ((old: number) => void)) => void;
      keysPressed: Record<string, boolean>;
      idPrefix: string;
    }
  | undefined
>(undefined);

export const Carousel = (props: CarouselProps) => {
  const { currentIndex: userCurrentIndex = 0, children, ...rest } = props;

  // Generate a stateful random id if not specified
  const [id] = React.useState(
    () => props.id ?? `iui-carousel-${getRandomValue(10)}`,
  );

  useTheme();

  const [currentIndex, setCurrentIndex] = React.useState(userCurrentIndex);
  const [slideCount, setSlideCount] = React.useState(0);

  const [keysPressed, setKeysPressed] = React.useState<Record<string, boolean>>(
    {},
  );

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      setKeysPressed((old) => ({ ...old, [event.key]: true }));
    }

    switch (event.key) {
      case 'ArrowLeft': {
        setCurrentIndex((old) => (slideCount + old - 1) % slideCount);
        break;
      }
      case 'ArrowRight': {
        setCurrentIndex((old) => (slideCount + old + 1) % slideCount);
        break;
      }
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      setKeysPressed((old) => ({ ...old, [event.key]: false }));
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
        }}
      >
        {children}
      </CarouselContext.Provider>
    </section>
  );
};

const CarouselSlider = (props: React.ComponentPropsWithoutRef<'ol'>) => {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('CarouselSlider must be used within Carousel');
  }

  const { currentIndex, setSlideCount, idPrefix } = context;

  React.useLayoutEffect(() => {
    setSlideCount(React.Children.count(props.children));
  }, [props.children, setSlideCount]);

  const items = React.useMemo(
    () =>
      React.Children.map(props.children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { id: `${idPrefix}--slide-${index}` })
          : child,
      ) ?? [],
    [props.children, idPrefix],
  );

  return (
    <ol
      aria-live='polite'
      {...props}
      className={cx('iui-carousel-slider', props.className)}
      style={{
        transform: `translateX(-${currentIndex * 100}%)`,
        ...props.style,
      }}
    >
      {items}
    </ol>
  );
};

const CarouselSlide = (props: React.ComponentPropsWithoutRef<'li'>) => {
  const { className, children, ...rest } = props;

  return (
    <li
      className={cx('iui-carousel-slider-item', className)}
      role='tabpanel'
      aria-roledescription='slide'
      {...rest}
    >
      {children}
    </li>
  );
};

const CarouselNavigation = (props: React.ComponentPropsWithoutRef<'nav'>) => {
  const { className, children, ...rest } = props;

  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error('CarouselNavigation should be used inside Carousel');
  }

  const { slideCount, setCurrentIndex, keysPressed } = context;

  return (
    <nav className={cx('iui-carousel-navigation', className)} {...rest}>
      <div className='iui-carousel-navigation-left'>
        <IconButton
          styleType='borderless'
          size='small'
          tabIndex={-1}
          onClick={() =>
            setCurrentIndex((old) => (slideCount + old - 1) % slideCount)
          }
          data-pressed={keysPressed['ArrowLeft'] || undefined}
        >
          <SvgChevronLeft />
        </IconButton>
      </div>
      {children}
      <div className='iui-carousel-navigation-right'>
        <IconButton
          styleType='borderless'
          size='small'
          tabIndex={-1}
          onClick={() =>
            setCurrentIndex((old) => (slideCount + old + 1) % slideCount)
          }
          data-pressed={keysPressed['ArrowRight'] || undefined}
        >
          <SvgChevronRight />
        </IconButton>
      </div>
    </nav>
  );
};

const CarouselDots = (
  props: {
    length?: number;
    maxCount?: number;
    currentIndex?: number;
    onSlideChange?: (index: number) => void;
  } & React.ComponentPropsWithoutRef<'div'>,
) => {
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
      context?.setCurrentIndex(index);
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
      {...rest}
    >
      {children ?? dots}
    </div>
  );
};

const CarouselDot = (
  props: {
    isActive?: boolean;
    isFirst?: boolean;
    isSecond?: boolean;
    isInvisible?: boolean;
  } & React.ComponentPropsWithoutRef<'button'>,
) => {
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
      {...rest}
    />
  );
};

Carousel.Slider = CarouselSlider;
Carousel.Slide = CarouselSlide;
Carousel.Navigation = CarouselNavigation;
Carousel.Dots = CarouselDots;
Carousel.Dot = CarouselDot;

export default Carousel;
