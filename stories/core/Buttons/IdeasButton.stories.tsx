/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { IdeasButton, IdeasButtonProps } from '../../../src/core';
import { CreeveyStory } from 'creevey';

export default {
  title: 'Buttons/IdeasButton',
  component: IdeasButton,
  parameters: {
    docs: { inlineStories: false },
  },
  argTypes: {
    onClick: { control: { disable: true } },
  },
} as Meta<IdeasButtonProps>;

export const Ideas: Story<IdeasButtonProps> & CreeveyStory = (args) => {
  return <IdeasButton onClick={action('clicked')} {...args} />;
};

Ideas.parameters = {
  creevey: {
    captureElement: null,
  },
};

export const LocalizedIdeas: Story<IdeasButtonProps> & CreeveyStory = (
  args,
) => {
  return <IdeasButton onClick={action('clicked')} {...args} />;
};

LocalizedIdeas.args = {
  feedbackLabel: 'Localized feedback',
};

LocalizedIdeas.parameters = {
  creevey: {
    captureElement: null,
  },
};
