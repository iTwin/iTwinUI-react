/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  ButtonGroup,
  // Button,
  IconButton,
  NotificationMarker,
  NotificationMarkerProps,
  // Text,
} from '@itwin/itwinui-react';
import SvgNotification from '@itwin/itwinui-icons-react/cjs/icons/Notification';
import { action } from '@storybook/addon-actions';
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

// const trialP = () => {
//   return <b className='trial b'>abcd</b>;
// };

const notificationButton = (
  props: Omit<NotificationMarkerProps, 'children'>,
) => (
  <IconButton
    onClick={action(`props: ${JSON.stringify(props)} clicked`)}
    // onClick={() =>
    //   console.log(`props: ${JSON.stringify({ ...props })} clicked`)
    // }
  >
    <NotificationMarker {...props}>
      <SvgNotification />
      {/* <b>abc</b> */}
    </NotificationMarker>
  </IconButton>
);

export const Basic: Story<NotificationMarkerProps> = (args) => {
  console.log(args);
  return (
    <ButtonGroup>
      {['primary', 'positive', 'warning', 'negative'].map((variant) =>
        notificationButton({
          variant: variant as NotificationMarkerProps['variant'],
        }),
      )}
    </ButtonGroup>
  );

  // return (
  //   <IconButton>
  //     <NotificationMarker>
  //       <SvgNotification />
  //       {/* <b>abc</b> */}
  //     </NotificationMarker>
  //   </IconButton>
  // );

  // return (
  //   <Button
  //     styleType='borderless'
  //     // startIcon={<Text className='trial text class'>trial text</Text>}
  //     startIcon={
  //       <NotificationMarker className='My trial classname 1'>
  //         <p>abc</p>
  //       </NotificationMarker>
  //     }
  //     endIcon={<p className='trial p'>abcd</p>}
  //   >
  //     <NotificationMarker className='my trial classname 2'>
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

  // return (
  //   <IconButton>
  //     {/* <div className='abcde' /> */}
  //     <NotificationMarker>
  //       {/* <div className={'iui-notification-positive iui-urgent'}> */}
  //       {/* <div className='inner-div' /> */}
  //       <SvgNotification />
  //       {/* </div> */}
  //     </NotificationMarker>
  //   </IconButton>
  // );

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
