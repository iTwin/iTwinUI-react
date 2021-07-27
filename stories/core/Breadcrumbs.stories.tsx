/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useState } from '@storybook/addons';
import React from 'react';
import {
  Breadcrumbs,
  BreadcrumbsProps,
  BreadcrumbItem,
  DropdownButton,
  MenuItem,
  Input,
} from '../../src/core';
import { SvgChevronRightDouble, SvgFolder } from '@itwin/itwinui-icons-react';

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

export const FolderNavigation: Story<BreadcrumbsProps> = (args) => {
  const items = React.useMemo(
    () => ['Root', 'Level 1', 'Level 2', 'Level 3', 'Level 4'],
    [],
  );

  const [lastIndex, setLastIndex] = useState(items.length - 1);
  const [isEditing, setIsEditing] = useState(false);

  const breadcrumbItems = React.useMemo(
    () =>
      items.slice(0, lastIndex + 1).map((item, index) => (
        <BreadcrumbItem
          key={`Breadcrumb${index}`}
          onClick={() => {
            if (lastIndex !== index) {
              setLastIndex(index);
            } else {
              setIsEditing(true);
            }
          }}
        >
          {item}
        </BreadcrumbItem>
      )),
    [items, lastIndex],
  );

  return (
    <div style={{ display: 'inline-flex', width: 450 }}>
      {isEditing ? (
        <Input
          setFocus
          defaultValue={items.slice(0, lastIndex + 1).join('/')}
          onChange={({ target: { value } }) => {
            const lastItem = value.substring(
              value.lastIndexOf('/', value.length - 2) + 1,
            );
            setLastIndex(items.findIndex((item) => lastItem.includes(item)));
          }}
          onKeyDown={({ key }) => key === 'Enter' && setIsEditing(false)}
          onBlur={() => setIsEditing(false)}
        />
      ) : (
        <>
          <DropdownButton
            startIcon={<SvgFolder aria-hidden />}
            styleType='borderless'
            menuItems={(close) =>
              items.map((item, index) => (
                <MenuItem
                  key={`Item${index}`}
                  onClick={() => {
                    setLastIndex(index);
                    setIsEditing(false);
                    close();
                  }}
                >
                  {item}
                </MenuItem>
              ))
            }
          />
          <Breadcrumbs {...args}>{breadcrumbItems}</Breadcrumbs>
        </>
      )}
    </div>
  );
};
