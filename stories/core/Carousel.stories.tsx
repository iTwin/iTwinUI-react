/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Carousel, CarouselProps } from '../../src/core';

export default {
  component: Carousel,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
  },
  title: 'Core/Carousel',
} as Meta<CarouselProps>;

export const Basic: Story<CarouselProps> = (args) => {
  const gradients = [
    { from: '#cc2b5e', to: '#753a88' },
    { from: '#00467f', to: '#a5cc82' },
    { from: '#2193b0', to: '#6dd5ed' },
    { from: '#ffe000', to: '#799f0c' },
    { from: '#e65c00', to: '#f9d423' },
    { from: '#1488cc', to: '#2b32b2' },
    { from: '#bbd2c5', to: '#536976' },
    { from: '#9796f0', to: '#fbc7d4' },
    { from: '#b79891', to: '#94716b' },
    { from: '#acb6e5', to: '#86fde8' },
  ];

  return (
    <Carousel style={{ width: 'min(800px, 90vw)' }} {...args}>
      <Carousel.Slider>
        {gradients.map(({ from, to }, index) => (
          <Carousel.Slide key={index}>
            <div
              style={{
                background: `linear-gradient(to right, ${from}, ${to})`,
                height: 350,
                width: '100%',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <div style={{ fontSize: 48, color: 'hsl(0deg 0% 100% / 0.7)' }}>
                {index + 1}
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel.Slider>
      <Carousel.Navigation />
    </Carousel>
  );
};

export const Controlled: Story<CarouselProps> = ({
  activeSlideIndex,
  ...args
}) => {
  const gradients = [
    { from: '#cc2b5e', to: '#753a88' },
    { from: '#00467f', to: '#a5cc82' },
    { from: '#2193b0', to: '#6dd5ed' },
    { from: '#ffe000', to: '#799f0c' },
    { from: '#e65c00', to: '#f9d423' },
    { from: '#1488cc', to: '#2b32b2' },
    { from: '#bbd2c5', to: '#536976' },
    { from: '#9796f0', to: '#fbc7d4' },
    { from: '#b79891', to: '#94716b' },
    { from: '#acb6e5', to: '#86fde8' },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(activeSlideIndex ?? 2);

  return (
    <Carousel
      style={{ width: 'min(800px, 90vw)' }}
      activeSlideIndex={currentIndex}
      onSlideChange={(index) => setCurrentIndex(index)}
      {...args}
    >
      <Carousel.Slider>
        {gradients.map(({ from, to }, index) => (
          <Carousel.Slide key={index}>
            <div
              style={{
                background: `linear-gradient(to right, ${from}, ${to})`,
                height: 350,
                width: '100%',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <div style={{ fontSize: 48, color: 'hsl(0deg 0% 100% / 0.7)' }}>
                {index + 1}
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel.Slider>
      <Carousel.Navigation />
    </Carousel>
  );
};
Controlled.args = {
  activeSlideIndex: 2,
};
Controlled.argTypes = {
  activeSlideIndex: { control: { disable: true } },
};
