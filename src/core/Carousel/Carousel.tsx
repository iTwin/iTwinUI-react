/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useTheme } from '../utils';
import { IconButton } from '../Buttons';
import SvgChevronLeft from '@itwin/itwinui-icons-react/cjs/icons/ChevronLeft';
import SvgChevronRight from '@itwin/itwinui-icons-react/cjs/icons/ChevronRight';
import '@itwin/itwinui-css/css/carousel.css';

export type CarouselProps = {
  currentIndex?: number;
  autoPlay?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

const CarouselContext = React.createContext<
  | {
      currentIndex: number;
      setCurrentIndex: (index: number | ((old: number) => void)) => void;
      slideCount: number;
      setSlideCount: (length: number | ((old: number) => void)) => void;
      keysPressed: Record<string, boolean>;
    }
  | undefined
>(undefined);

export const Carousel = (props: CarouselProps) => {
  const { currentIndex: userCurrentIndex = 0, children, ...rest } = props;

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
    <div
      className='iui-carousel'
      aria-roledescription='carousel'
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      {...rest}
    >
      <CarouselContext.Provider
        value={{
          currentIndex,
          setCurrentIndex,
          slideCount,
          setSlideCount,
          keysPressed,
        }}
      >
        {children}
      </CarouselContext.Provider>
    </div>
  );
};

const CarouselSlider = (props: React.ComponentPropsWithoutRef<'ol'>) => {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('CarouselSlider must be used within Carousel');
  }

  const { currentIndex, setSlideCount } = context;

  React.useLayoutEffect(() => {
    setSlideCount(React.Children.count(props.children));
  }, [props.children, setSlideCount]);

  const items = React.useMemo(
    () =>
      React.Children.map(props.children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { 'aria-hidden': index !== currentIndex })
          : child,
      ) ?? [],
    [props.children, currentIndex],
  );

  return (
    <ol
      {...props}
      className={cx('iui-carousel-slider', props.className)}
      style={{
        // height: '100%',
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
    throw new Error('TODO');
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
  } & React.ComponentPropsWithoutRef<'ol'>,
) => {
  const { maxCount = 5, className, children, ...rest } = props;
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error('TODO: this needs to be usable without context');
  }

  const { slideCount, currentIndex, setCurrentIndex } = context;

  useTheme();

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
            <li key={index}>
              <CarouselDot
                aria-label={`Slide ${index}`}
                isActive={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
                isFirst={isFirstSmallDot}
                isSecond={isSecondSmallDot}
                isInvisible={index < firstDotIndex || index > lastDotIndex}
              />
            </li>
          );
        }),
    [slideCount, maxCount, currentIndex, setCurrentIndex],
  );

  return (
    <ol
      className={cx('iui-carousel-navigation-dots', className)}
      role='tablist'
      {...rest}
    >
      {children ?? dots}
    </ol>
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
