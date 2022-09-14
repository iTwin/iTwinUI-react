/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  // Button,
  IconButton,
  NotificationMarker,
  NotificationMarkerProps,
} from '@itwin/itwinui-react';
import SvgNotification from '@itwin/itwinui-icons-react/cjs/icons/Notification';
// import { action } from '@storybook/addon-actions';

export default {
  component: NotificationMarker,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
  },
  title: 'Core/NotificationMarker',
  decorators: [
    // (Story, context) => (
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
  // return (
  //   <Button styleType='borderless'>
  //     <NotificationMarker>
  //       <p>abc</p>
  //     </NotificationMarker>
  //   </Button>
  // );

  // <NotificationMarker>
  //       {/* <Button>abc</Button> */}
  //       {/* abc */}
  //       <SvgNotification />
  //       {/* abcd */}
  //     </NotificationMarker>

  return (
    <IconButton>
      {/* <div className='abcde' /> */}
      {/* <NotificationMarker> */}
      <div className={'iui-notification-positive'}>
        {/* <div className='inner-div' /> */}
        <SvgNotification />
      </div>
      {/* </NotificationMarker> */}
    </IconButton>
  );

  // return (
  //   <IconButton
  //     key='notif'
  //     onClick={() => action('Clicked on the notification bell')()}
  //     styleType='borderless'
  //   >
  //     <NotificationMarker>
  //       <div>
  //         {/* <SvgNotification /> */}
  //         {/* anb */}
  //         {/* <IconButton
  //         key='notif'
  //         onClick={() => action('Clicked on the notification bell')()}
  //         styleType='borderless'
  //       > */}
  //         <SvgNotification />
  //         {/* </IconButton> */}
  //       </div>
  //     </NotificationMarker>
  //   </IconButton>
  // );

  // return <NotificationMarker {...args} />;
};

// Basic.args = {
//   // child: <SvgNotification />,
//   child: (
//     <IconButton
//       key='notif'
//       onClick={() => action('Clicked on the notification bell')()}
//       styleType='borderless'
//     >
//       <SvgNotification>
//         a
//       </SvgNotification>
//     </IconButton>
//   ),
// };
