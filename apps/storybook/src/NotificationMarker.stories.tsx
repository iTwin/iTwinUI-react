/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  Text,
  IconButton,
  NotificationMarker,
  NotificationMarkerProps,
} from '@itwin/itwinui-react';
import SvgNotification from '@itwin/itwinui-icons-react/cjs/icons/Notification';

export default {
  component: NotificationMarker,
  args: {
    enabled: true,
    pulsing: false,
  },
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    status: {
      control: 'radio',
      options: ['primary', 'positive', 'warning', 'negative'],
    },
  },
  title: 'Core/NotificationMarker',
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '20px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<NotificationMarkerProps>;

export const Basic: Story<NotificationMarkerProps> = (args) => {
  return (
    <>
      <IconButton styleType='borderless'>
        <NotificationMarker {...args}>{args.children}</NotificationMarker>
      </IconButton>
      <NotificationMarker {...args}>3 members online</NotificationMarker>
    </>
  );
};

Basic.args = {
  status: 'primary',
  children: <SvgNotification />,
};

Basic.argTypes = {
  children: {
    control: false,
  },
};

export const Pulsing: Story<NotificationMarkerProps> = (args) => {
  return (
    <>
      <IconButton styleType='borderless'>
        <NotificationMarker status='primary' {...args}>
          <SvgNotification />
        </NotificationMarker>
      </IconButton>

      <NotificationMarker status='primary' {...args}>
        <Text style={{ fontWeight: '700' }}>URGENT</Text>
      </NotificationMarker>
    </>
  );
};

Pulsing.args = {
  status: 'negative',
  pulsing: true,
};

export const Status: Story<NotificationMarkerProps> = (args) => {
  return (
    <>
      <span>
        <IconButton styleType='borderless'>
          <NotificationMarker status='primary' {...args}>
            <SvgNotification />
          </NotificationMarker>
        </IconButton>
        <IconButton styleType='borderless'>
          <NotificationMarker status='positive' {...args}>
            <SvgNotification />
          </NotificationMarker>
        </IconButton>
        <IconButton styleType='borderless'>
          <NotificationMarker status='warning' {...args}>
            <SvgNotification />
          </NotificationMarker>
        </IconButton>
        <IconButton styleType='borderless'>
          <NotificationMarker status='negative' {...args}>
            <SvgNotification />
          </NotificationMarker>
        </IconButton>
      </span>
      <NotificationMarker status='positive' {...args}>
        Live
      </NotificationMarker>
      <NotificationMarker status='warning' {...args}>
        Loads exceeded
      </NotificationMarker>
      <NotificationMarker status='negative' {...args}>
        Rec
      </NotificationMarker>
      <NotificationMarker status='primary' {...args}>
        1 new message
      </NotificationMarker>
    </>
  );
};

Status.argTypes = {
  status: {
    control: false,
  },
};
