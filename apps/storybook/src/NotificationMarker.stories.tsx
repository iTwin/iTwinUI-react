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
  args: {
    enabled: true,
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
} as Meta<NotificationMarkerProps>;

export const Basic: Story<NotificationMarkerProps> = (args) => {
  return (
    <IconButton styleType='borderless'>
      <NotificationMarker {...args}>{args.children}</NotificationMarker>
    </IconButton>
  );
};

Basic.args = {
  status: 'primary',
  urgent: false,
  children: <SvgNotification />,
};

Basic.argTypes = {
  children: {
    control: false,
  },
};

export const CustomChild: Story<NotificationMarkerProps> = (args) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '20px',
      }}
    >
      <NotificationMarker status='positive' {...args}>
        Live
      </NotificationMarker>
      <NotificationMarker status='negative' {...args}>
        Rec
      </NotificationMarker>
      <NotificationMarker status='primary' {...args}>
        1 new message
      </NotificationMarker>
    </div>
  );
};

CustomChild.args = {
  urgent: true,
};

CustomChild.argTypes = {
  type: {
    control: false,
  },
};
