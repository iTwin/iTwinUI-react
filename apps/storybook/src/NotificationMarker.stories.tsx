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
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    type: {
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
  type: 'primary',
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
      <NotificationMarker type='positive' {...args}>
        Live
      </NotificationMarker>
      <NotificationMarker type='negative' {...args}>
        Rec
      </NotificationMarker>
      <NotificationMarker type='primary' {...args}>
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

export const ProgrammaticDisplay: Story<NotificationMarkerProps> = (args) => {
  const active = parseInt(args.demoNotificationCount) > 0;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '20px',
      }}
    >
      <Text>active = demoNotificationCount &gt; 0</Text>
      <IconButton styleType='borderless'>
        <NotificationMarker active={active} {...args}>
          <SvgNotification />
        </NotificationMarker>
      </IconButton>
      <NotificationMarker active={active} {...args}>
        <Text>
          {args.demoNotificationCount > 0
            ? 'New notification(s)'
            : `No new notifications`}
        </Text>
      </NotificationMarker>
    </div>
  );
};

ProgrammaticDisplay.args = {
  demoNotificationCount: 0,
  urgent: true,
  type: 'primary',
};

ProgrammaticDisplay.argTypes = {
  active: {
    control: false,
  },
};
