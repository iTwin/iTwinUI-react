/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import { CreeveyStory } from 'creevey';
import React from 'react';
import { Footer, FooterProps } from '../../src/core';

export default {
  title: 'Core/Footer',
  component: Footer,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
  },
} as Meta<FooterProps>;

export const Basic: Story<FooterProps> = ({
  translatedTitles,
  ...rest
}: FooterProps) => {
  return <Footer translatedTitles={translatedTitles} {...rest} />;
};

Basic.args = {
  translatedTitles: {
    cookies: 'Cookies translated',
  },
} as FooterProps;

export const Custom: Story<FooterProps> = ({
  customElements,
  ...rest
}: FooterProps) => {
  return <Footer customElements={customElements} {...rest} />;
};

Custom.args = {
  customElements: [
    {
      title: 'Custom',
      url: 'https://www.bentley.com/',
    },
  ],
} as FooterProps;

export const OnlyCustomElements: Story<FooterProps> = ({
  customElements,
  showOnlyCustomElements,
  ...rest
}: FooterProps) => {
  return (
    <Footer
      customElements={customElements}
      showOnlyCustomElements={showOnlyCustomElements}
      {...rest}
    />
  );
};

OnlyCustomElements.args = {
  customElements: [
    {
      title: 'Custom Element 1',
      url: 'https://www.bentley.com/',
    },
    {
      title: 'Custom Element 2',
    },
    {
      title: 'Custom Element 3',
    },
    {
      title: 'Custom Element 4',
    },
  ],
  showOnlyCustomElements: true,
} as FooterProps;

export const BottomFixed: Story<FooterProps> & CreeveyStory = ({
  ...rest
}: FooterProps) => {
  return (
    <div>
      <Footer style={{ position: 'fixed', bottom: 0 }} {...rest} />
    </div>
  );
};

BottomFixed.parameters = {
  docs: { inlineStories: false },
  creevey: {
    captureElement: null,
  },
};
