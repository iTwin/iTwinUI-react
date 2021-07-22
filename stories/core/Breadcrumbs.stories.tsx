/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Breadcrumbs, BreadcrumbsProps } from '../../src/core';
import { BreadcrumbItem } from '../../src/core/Breadcrumbs';

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
      <BreadcrumbItem key={0}>Root</BreadcrumbItem>,
      <BreadcrumbItem key={1}>Item 1</BreadcrumbItem>,
      <BreadcrumbItem key={2}>Item 2</BreadcrumbItem>,
    ],
  },
} as Meta<BreadcrumbsProps>;

export const Basic: Story<BreadcrumbsProps> = (args) => {
  return (
    <Breadcrumbs
      {...args}
      items={[
        <BreadcrumbItem key={0} onClick={() => action('Root')()}>
          Root
        </BreadcrumbItem>,
        <BreadcrumbItem key={1} onClick={() => action('Item 1')()}>
          Item 1
        </BreadcrumbItem>,
        <BreadcrumbItem key={2} onClick={() => action('Item 2')()}>
          Item 2
        </BreadcrumbItem>,
      ]}
    />
  );
};

export const Links: Story<BreadcrumbsProps> = (args) => {
  return (
    <Breadcrumbs
      {...args}
      items={[
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
        <BreadcrumbItem
          key={2}
          element='a'
          href='/?path=/docs/core-breadcrumbs--links#links'
        >
          Links
        </BreadcrumbItem>,
      ]}
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
    <BreadcrumbItem
      key={2}
      element='a'
      href='/?path=/docs/core-breadcrumbs--links#links'
    >
      Links
    </BreadcrumbItem>,
  ],
};
