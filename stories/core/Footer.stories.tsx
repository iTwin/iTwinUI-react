/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import { CreeveyStory } from 'creevey';
import React from 'react';
import { Footer, FooterElement, FooterProps } from '../../src/core';

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

export const AppendedCustomElements: Story<FooterProps> = ({
  ...rest
}: FooterProps) => {
  const customElements = [
    {
      title: 'Custom',
      url: 'https://www.bentley.com/',
    },
  ];
  return <Footer customElements={customElements} {...rest} />;
};

export const OnlyCustomElements: Story<FooterProps> = ({
  ...rest
}: FooterProps) => {
  const customElements = (defaultElements: FooterElement[]) => {
    return [
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
    ];
  };

  return <Footer customElements={customElements} {...rest} />;
};

export const CustomDefaultElements: Story<FooterProps> = ({
  ...rest
}: FooterProps) => {
  const customElements = (defaultElements: FooterElement[]) => {
    const termsOfUse = defaultElements.find(
      (element) => element.title === 'termsOfUse',
    );
    const termsOfService = defaultElements.find(
      (element) => element.title === 'termsOfService',
    );

    if (termsOfUse && termsOfService) {
    }
    return [
      {
        title: defaultElements[2].title,
        url: 'https://www.bentley.com/',
      },
      {
        title: 'Custom Element 1',
        url: 'https://www.bentley.com/',
      },
      {
        title: defaultElements[2].title,
        url: defaultElements[2].url,
      },
      {
        title: 'Custom Element 2',
      },
      {
        title: 'Custom Element 3',
      },
      {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        title: termsOfUse!.title,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        url: termsOfUse!.url,
      },
      {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        title: termsOfService!.title,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        url: termsOfService!.url,
      },
    ];
  };

  return <Footer customElements={customElements} {...rest} />;
};

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
