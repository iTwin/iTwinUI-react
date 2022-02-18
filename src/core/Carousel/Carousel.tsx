/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { getWindow, useTheme } from '../utils';
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
      autoPlay: boolean;
      currentIndex: number;
      setCurrentIndex: (index: number | ((old: number) => void)) => void;
    }
  | undefined
>(undefined);

export const Carousel = (props: CarouselProps) => {
  const {
    autoPlay = true,
    currentIndex: userCurrentIndex = 0,
    children,
    ...rest
  } = props;

  useTheme();

  const [currentIndex, setCurrentIndex] = React.useState(userCurrentIndex);

  return (
    <div
      className='iui-carousel'
      aria-roledescription='carousel'
      tabIndex={0}
      {...rest}
    >
      <CarouselContext.Provider
        value={{ autoPlay, currentIndex, setCurrentIndex }}
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

  const { autoPlay, currentIndex, setCurrentIndex } = context;

  const items = React.useMemo(
    () =>
      React.Children.map(props.children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { 'aria-hidden': index !== currentIndex })
          : child,
      ) ?? [],
    [props.children, currentIndex],
  );

  const autoPlayTimer = React.useRef<number>();
  React.useEffect(() => {
    if (autoPlayTimer.current) {
      getWindow()?.clearInterval(autoPlayTimer.current);
    }
    if (autoPlay) {
      autoPlayTimer.current = getWindow()?.setInterval(() => {
        setCurrentIndex((old) => (items.length + old + 1) % items.length);
      }, 5000);
    }
    return () => getWindow()?.clearInterval(autoPlayTimer.current);
  }, [autoPlay, items, setCurrentIndex]);

  return (
    <ol
      {...props}
      className={cx('iui-carousel-slider', props.className)}
      style={{
        height: '100%',
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

  return (
    <nav className={cx('iui-carousel-navigation', className)} {...rest}>
      <div className='iui-carousel-navigation-left'>
        <IconButton styleType='borderless' size='small'>
          <SvgChevronLeft />
        </IconButton>
      </div>
      {children}
      <div className='iui-carousel-navigation-right'>
        <IconButton styleType='borderless' size='small'>
          <SvgChevronRight />
        </IconButton>
      </div>
    </nav>
  );
};

const CarouselDots = (
  props: { length: number } & React.ComponentPropsWithoutRef<'ol'>,
) => {
  const { className, length, children, ...rest } = props;

  useTheme();

  const dots = React.useMemo(
    () =>
      Array(length)
        .fill(null)
        .map((_, index) => (
          <li key={index}>
            <CarouselDot aria-label={`Slide ${index}`} />
          </li>
        )),
    [length],
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

const CarouselDot = (props: React.ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      type='button'
      role='tab'
      tabIndex={-1}
      {...props}
      className={cx('iui-carousel-navigation-dot', props.className)}
    />
  );
};

Carousel.Slider = CarouselSlider;
Carousel.Slide = CarouselSlide;
Carousel.Navigation = CarouselNavigation;
Carousel.Dots = CarouselDots;
Carousel.Dot = CarouselDot;

export default Carousel;
