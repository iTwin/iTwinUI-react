/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Text, TextProps } from '@itwin/itwinui-react/';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: "I'm a Text",
    isMuted: false,
    isSkeleton: false,
    as: 'div',
  },
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    title: { control: { disable: true } },
    variant: {
      control: 'radio',
      options: ['small', 'body', 'leading', 'subheading', 'title', 'headline'],
    },
  },
} as Meta<TextProps>;

const TextStory: Story<TextProps> = (args) => {
  const { children, ...rest } = args;
  return <Text {...rest}>{children}</Text>;
};

export const Body: Story<TextProps> = TextStory.bind({});
Body.args = { variant: 'body' };
export const Small: Story<TextProps> = TextStory.bind({});
Small.args = { variant: 'small' };
export const Leading: Story<TextProps> = TextStory.bind({});
Leading.args = { variant: 'leading' };
export const Subheading: Story<TextProps> = TextStory.bind({});
Subheading.args = { variant: 'subheading' };
export const Title: Story<TextProps> = TextStory.bind({});
Title.args = { variant: 'title' };
export const Headline: Story<TextProps> = TextStory.bind({});
Headline.args = { variant: 'headline' };

export const Polymorphic: Story<TextProps<'h4'>> = ({ children, ...rest }) => {
  return (
    <Text variant='headline' as='h4' {...rest}>
      {children}
    </Text>
  );
};
Polymorphic.args = {
  children: "I'm a headline text rendered as an h4 element!",
  variant: 'headline',
  as: 'h4',
} as TextProps<'h4'>; // need this cast because TS is complaining about `as`

export const Skeleton: Story<TextProps> = TextStory.bind({});
Skeleton.args = { isSkeleton: true };
