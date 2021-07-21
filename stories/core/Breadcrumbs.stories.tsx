/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
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
      <BreadcrumbItem key={2} element='a' href='/?path=/docs/core-breadcrumbs'>
        Item 2
      </BreadcrumbItem>,
    ],
  },
} as Meta<BreadcrumbsProps>;

export const Basic: Story<BreadcrumbsProps> = (args) => {
  return <Breadcrumbs {...args} />;
};
