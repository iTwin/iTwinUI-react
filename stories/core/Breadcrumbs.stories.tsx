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
    children: { control: { disable: true } },
  },
  args: {
    children: [
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

export const Basic: Story<BreadcrumbsProps> = (args) => {
  return (
    <Breadcrumbs {...args}>
      <BreadcrumbItem key={0} onClick={() => action('Root')()}>
        Root
      </BreadcrumbItem>
      <BreadcrumbItem key={1} onClick={() => action('Item 1')()}>
        Item 1
      </BreadcrumbItem>
      <BreadcrumbItem key={2} onClick={() => action('Item 2')()}>
        Item 2
      </BreadcrumbItem>
    </Breadcrumbs>
  );
};

export const Links: Story<BreadcrumbsProps> = (args) => {
  return (
    <Breadcrumbs {...args}>
      <BreadcrumbItem key={0} element='a' href='/'>
        iTwinUI
      </BreadcrumbItem>
      <BreadcrumbItem key={1} element='a' href='/?path=/docs/core-breadcrumbs'>
        Breadcrumbs
      </BreadcrumbItem>
      <BreadcrumbItem key={2} element='span'>
        Links
      </BreadcrumbItem>
    </Breadcrumbs>
  );
};
Links.args = {
  children: [
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

export const CustomSeparator: Story<BreadcrumbsProps> = (args) => {
  return (
    <Breadcrumbs separator={<SvgChevronRightDouble />} {...args}>
      <BreadcrumbItem key={0} onClick={() => action('Root')()}>
        Root
      </BreadcrumbItem>
      <BreadcrumbItem key={1} onClick={() => action('Item 1')()}>
        Item 1
      </BreadcrumbItem>
      <BreadcrumbItem key={2} onClick={() => action('Item 2')()}>
        Item 2
      </BreadcrumbItem>
    </Breadcrumbs>
  );
};
CustomSeparator.args = {
  separator: <SvgChevronRightDouble />,
};

export const Overflow: Story<BreadcrumbsProps> = (args) => {
  const items = Array(10)
    .fill(null)
    .map((_, index) => (
      <BreadcrumbItem key={index}>Item {index}</BreadcrumbItem>
    ));

  return (
    <div style={{ maxWidth: '50%', border: '1px solid lightpink', padding: 8 }}>
      <Breadcrumbs {...args}>{items}</Breadcrumbs>
    </div>
  );
};
