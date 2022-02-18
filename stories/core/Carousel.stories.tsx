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
    { from: '#2193b0', to: '#6dd5ed' },
  ];

  return (
    <Carousel style={{ width: 800, height: 350 }} {...args}>
      <Carousel.Slider>
        {gradients.map(({ from, to }, index) => (
          <Carousel.Slide key={index}>
            <div
              style={{
                background: `linear-gradient(to right, ${from}, ${to})`,
                height: '100%',
              }}
            />
          </Carousel.Slide>
        ))}
      </Carousel.Slider>
    </Carousel>
  );
};
