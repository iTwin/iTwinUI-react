/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Breadcrumbs, BreadcrumbsProps } from '../../src/core';
import { BreadcrumbItem } from '../../src/core/Breadcrumbs';
import { SvgChevronRightDouble } from '@itwin/itwinui-icons-react';

export default {
  component: Breadcrumbs,
  subcomponents: { BreadcrumbItem },
  title: 'Core/Breadcrumbs',
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
  },
  args: {
    items: [
      <BreadcrumbItem key={0} onClick={() => action('Root')()}>
        Root
      </BreadcrumbItem>,
      <BreadcrumbItem key={1} onClick={() => action('Root')()}>
        Item 1
      </BreadcrumbItem>,
      <BreadcrumbItem key={2} onClick={() => action('Root')()}>
        Item 2
      </BreadcrumbItem>,
    ],
  },
} as Meta<BreadcrumbsProps>;

export const Basic: Story<BreadcrumbsProps> = ({ items, ...rest }) => {
  return (
    <Breadcrumbs
      items={
        items || [
          <BreadcrumbItem key={0} onClick={() => action('Root')()}>
            Root
          </BreadcrumbItem>,
          <BreadcrumbItem key={1} onClick={() => action('Item 1')()}>
            Item 1
          </BreadcrumbItem>,
          <BreadcrumbItem key={2} onClick={() => action('Item 2')()}>
            Item 2
          </BreadcrumbItem>,
        ]
      }
      {...rest}
    />
  );
};

export const Links: Story<BreadcrumbsProps> = ({ items, ...rest }) => {
  return (
    <Breadcrumbs
      items={
        items || [
          <BreadcrumbItem key={0} element='a' href='/'>
            iTwinUI
          </BreadcrumbItem>,
          <BreadcrumbItem
            key={1}
            element='a'
            href='/?path=/docs/core-breadcrumbs'
          >
            Breadcrumbs
          </BreadcrumbItem>,
          <BreadcrumbItem key={2} element='span'>
            Links
          </BreadcrumbItem>,
        ]
      }
      {...rest}
    />
  );
};
Links.args = {
  items: [
    <BreadcrumbItem key={0} element='a' href='/'>
      iTwinUI
    </BreadcrumbItem>,
    <BreadcrumbItem key={1} element='a' href='/?path=/docs/core-breadcrumbs'>
      Breadcrumbs
    </BreadcrumbItem>,
    <BreadcrumbItem key={2} element='span'>
      Links
    </BreadcrumbItem>,
  ],
};

export const CustomSeparator: Story<BreadcrumbsProps> = ({
  items,
  ...rest
}) => {
  return (
    <Breadcrumbs
      items={
        items || [
          <BreadcrumbItem key={0} onClick={() => action('Root')()}>
            Root
          </BreadcrumbItem>,
          <BreadcrumbItem key={1} onClick={() => action('Item 1')()}>
            Item 1
          </BreadcrumbItem>,
          <BreadcrumbItem key={2} onClick={() => action('Item 2')()}>
            Item 2
          </BreadcrumbItem>,
        ]
      }
      separator={<SvgChevronRightDouble />}
      {...rest}
    />
  );
};
CustomSeparator.args = {
  separator: <SvgChevronRightDouble />,
};
