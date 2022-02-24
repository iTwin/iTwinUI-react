/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import { CreeveyStory } from 'creevey';
import React from 'react';
import {
  Footer,
  FooterElement,
  FooterProps,
  TitleTranslations,
} from '../../src/core';

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
  const customElements = () => {
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

export const CustomizedDefaultAndCustomElements: Story<FooterProps> = ({
  ...rest
}: FooterProps) => {
  const translatedTitles: TitleTranslations = {
    copyright: 'Copyright translated',
    termsOfService: 'Terms of service translated',
    privacy: 'Privacy translated',
    termsOfUse: 'Terms of use translated',
    cookies: 'Cookies translated',
    legalNotices: 'Legal notices translated',
  };
  const customElements = (defaultElements: FooterElement[]) => {
    const customUrls = {
      privacy: 'https://www.bentley.com/',
      cookies: 'https://www.bentley.com/',
      legalNotices: 'https://www.bentley.com/',
      copyright: null,
      termsOfUse: null,
      termsOfService: null,
    };
    const allElements: FooterElement[] = [
      {
        title: 'Custom Element 1',
        url: 'https://www.bentley.com/',
      },
      {
        title: 'Custom Element 2',
      },
      ...defaultElements,
    ];

    return allElements.map(({ key }, index) => ({
      title: key ? translatedTitles[key] : allElements[index].title,
      url: key
        ? customUrls[key] ?? allElements[index].url
        : allElements[index].url,
      key: key,
    }));
  };

  return (
    <Footer
      translatedTitles={translatedTitles}
      customElements={customElements}
      {...rest}
    />
  );
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
