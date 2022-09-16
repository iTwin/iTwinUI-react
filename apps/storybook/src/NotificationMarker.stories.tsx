/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  IconButton,
  NotificationMarker,
  NotificationMarkerProps,
} from '@itwin/itwinui-react';
import SvgNotification from '@itwin/itwinui-icons-react/cjs/icons/Notification';

export default {
  component: NotificationMarker,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    variant: {
      control: 'radio',
      options: ['primary', 'positive', 'warning', 'negative'],
    },
  },
  args: {
    active: true,
  },
  title: 'Core/NotificationMarker',
  decorators: [
    (Story) => (
      <div
        style={{
          width: 'fit-content',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<NotificationMarkerProps>;

export const Basic: Story<NotificationMarkerProps> = (args) => {
  console.log(args);
  return (
    <IconButton styleType='borderless'>
      <NotificationMarker {...args}>{args.children}</NotificationMarker>
    </IconButton>
  );
};

Basic.args = {
  variant: 'primary',
  urgent: false,
  children: <SvgNotification />,
};

Basic.argTypes = {
  children: {
    control: false,
  },
};

export const CustomChild: Story<NotificationMarkerProps> = (args) => {
  console.log(args);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '20px',
      }}
    >
      <NotificationMarker variant='positive' {...args}>
        Live
      </NotificationMarker>
      <NotificationMarker variant='negative' {...args}>
        Rec
      </NotificationMarker>
      <NotificationMarker variant='primary' {...args}>
        1 new message
      </NotificationMarker>
    </div>
  );
};

CustomChild.args = {
  urgent: true,
};

CustomChild.argTypes = {
  variant: {
    control: false,
  },
};
