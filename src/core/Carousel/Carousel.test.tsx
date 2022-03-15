/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { render } from '@testing-library/react';

import { Carousel } from './Carousel';

it('should render in its most basic state', () => {
  const { container } = render(
    <Carousel>
      <Carousel.Slider>
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
      </Carousel.Slider>
      <Carousel.Navigation />
    </Carousel>,
  );

  const root = container.querySelector('section') as HTMLElement;
  expect(root).toHaveClass('iui-carousel');
  expect(root).toHaveAttribute('aria-roledescription', 'carousel');

  const slider = container.querySelector('ol') as HTMLElement;
  expect(slider).toHaveClass('iui-carousel-slider');

  slider.childNodes.forEach((slide, index) => {
    expect(slide).toHaveClass('iui-carousel-slider-item');
    expect(slide).toHaveAttribute('role', 'tabpanel');
    expect(slide).toHaveAttribute('aria-roledescription', 'slide');
    expect(slide).toHaveTextContent(`${index + 1}`);
  });

  const nav = container.querySelector('nav') as HTMLElement;
  expect(nav).toHaveClass('iui-carousel-navigation');
  expect(nav.querySelectorAll('.iui-button')).toHaveLength(2);
  expect(nav.querySelector('.iui-carousel-navigation-dots')).toHaveAttribute(
    'role',
    'tablist',
  );

  nav.querySelectorAll('iui-carousel-navigation-dot').forEach((dot, index) => {
    expect(dot).toHaveAttribute('role', 'tab');
    expect(dot).toHaveAttribute('tabindex', '-1');
    expect(dot).toHaveAccessibleName(`Slide ${index + 1}`);
  });
});

// TODO: Write more tests here!
