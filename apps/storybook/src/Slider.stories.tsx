/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Meta, Story } from '@storybook/react';
import React, { ReactNode } from 'react';
import { useMemo, useCallback, useState } from '@storybook/addons';
import { Body, Slider, SliderProps } from '@itwin/itwinui-react';
import SvgSmileyHappy from '@itwin/itwinui-icons-react/cjs/icons/SmileyHappy';
import SvgSmileySad from '@itwin/itwinui-icons-react/cjs/icons/SmileySad';

export default {
  title: 'Input/Slider',
  component: Slider,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
  },
  args: {
    thumbMode: 'inhibit-crossing',
    trackDisplayMode: 'auto',
    orientation: 'horizontal',
  },
} as Meta<SliderProps>;

// TODO: Why does it give an unexpected any warning when args's data type is any? That's why changing the type to object. Confirm if that's okay
const sliderWrapper = (element: ReactNode, args: object) => {
  return (
    // TODO: Is there a way to avoid the hardcoded height of 400px? height of 100% does not work
    <div
      className='slider-wrapper'
      style={{
        ...(args.orientation == 'vertical'
          ? { height: '400px', width: 'fit-content' }
          : {}),
      }}
    >
      {element}
    </div>
  );
};

export const Basic: Story<SliderProps> = (args) => {
  return sliderWrapper(<Slider {...args} />, args);
};

Basic.args = {
  values: [50],
};

export const Range: Story<SliderProps> = (args) => {
  return sliderWrapper(<Slider {...args} />, args);
};

Range.args = {
  min: 0,
  max: 100,
  values: [20, 80],
};

export const MultiThumbsAllowCrossing: Story<SliderProps> = (args) => {
  return sliderWrapper(<Slider {...args} />, args);
};

MultiThumbsAllowCrossing.args = {
  thumbProps: (index: number) => {
    const eventsIds = [
      'building-south',
      'building-north',
      'building-west',
      'building-east',
    ];
    const color = 0 == index % 2 ? 'blue' : 'red';
    return {
      style: { backgroundColor: color },
      id: `${eventsIds[index]}`,
    };
  },
  values: [20, 40, 60, 80],
  trackDisplayMode: 'even-segments',
  thumbMode: 'allow-crossing',
};

export const WithCustomThumb: Story<SliderProps> = (args) => {
  // TODO: Why it doesn't work when we directly return args.thumbProps inside the function? Instead, I have to save it in a variable and then return the variable. Is there a better way?

  let thumbProps = args.thumbProps;
  thumbProps = {
    ...thumbProps,
    style: {
      ...thumbProps.style,
      ...(args.orientation === 'horizontal' // TODO: Is there a way to get the args inside WithCustomThumb.args? Because just to gets args, I have to move those lines of code from WithCustomThumb.args to WithCustomThumb
        ? { transform: 'translateX(-19.2px)', top: 0 }
        : { transform: 'translate(-25%, 50%)' }),
    },
  };
  args.thumbProps = () => thumbProps;

  return sliderWrapper(
    <Slider
      {...args}
      // {...{
      //   thumbProps: () => {
      //     return {
      //       style: {
      //         display: 'flex',
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //         backgroundColor: '#999',
      //         width: '36px',
      //         height: '26px',
      //         borderRadius: '4px',
      //         ...(args.orientation == 'horizontal' // TODO: Is there a way to get the args inside WithCustomThumb.args? Because just to gets args, I have to move those lines of code from WithCustomThumb.args to WithCustomThumb
      //           ? { transform: 'translateX(-19.2px)', top: 0 }
      //           : { transform: 'translate(-25%, 50%)' }),
      //       },
      //       children: (
      //         <span
      //           style={{
      //             pointerEvents: 'none',
      //             marginBottom: '4px',
      //           }}
      //         >
      //           |||
      //         </span>
      //       ),
      //     };
      //   },
      // }}
    />,
    args,
  );
};

WithCustomThumb.args = {
  // thumbProps: () => {
  //   return {
  //     style: {
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       backgroundColor: '#999',
  //       width: '36px',
  //       height: '26px',
  //       borderRadius: '4px',
  //       transform: 'translateX(-19.2px)',
  //       top: 0,
  //     },
  //     children: (
  //       <span
  //         style={{
  //           pointerEvents: 'none',
  //           marginBottom: '4px',
  //         }}
  //       >
  //         |||
  //       </span>
  //     ),
  //   };
  // },

  // TODO: Removed it from the function since when it was in the function, it anyways could not be edited in storybook
  thumbProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#999',
      width: '36px',
      height: '26px',
      borderRadius: '4px',
      // transform: 'translateX(-19.2px)',
      // top: 0,
    },
    children: (
      <span
        style={{
          pointerEvents: 'none',
          marginBottom: '4px',
        }}
      >
        |||
      </span>
    ),
  },
  values: [50],
  minLabel: <SvgSmileyHappy />,
  maxLabel: <SvgSmileySad />,
  railContainerProps: { style: { margin: '0 8px' } },
};

export const Disabled: Story<SliderProps> = (args) => {
  return sliderWrapper(<Slider {...args} />, args);
};

Disabled.args = {
  min: 0,
  max: 60,
  values: [30],
  disabled: true,
};

export const CustomTooltip: Story<SliderProps> = (args) => {
  return sliderWrapper(<Slider {...args} />, args);
};

CustomTooltip.args = {
  min: 0,
  max: 60,
  values: [20],
  tickLabels: ['0', '20', '40', '60'],
  tooltipProps: (index, val) => {
    return { placement: 'right', content: `\$${val}.00` };
  },
  setFocus: true,
};

export const CustomTickNoTooltip: Story<SliderProps> = (args) => {
  const dateFormatter = useMemo(() => {
    return new Intl.DateTimeFormat('default', {
      month: 'short',
      day: '2-digit',
      timeZone: 'UTC',
    });
  }, []);

  const [currentDate, setCurrentDate] = useState(
    new Date(Date.UTC(2019, 0, 1)),
  );

  const updateDate = useCallback((values: ReadonlyArray<number>) => {
    const newDate = new Date(Date.UTC(2019, 0, values[0]));
    setCurrentDate(newDate);
  }, []);

  return sliderWrapper(
    <Slider
      {...args}
      onUpdate={updateDate}
      onChange={updateDate}
      tickLabels={
        <div
          style={{
            backgroundColor: 'purple',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...(args.orientation === 'horizontal'
              ? { marginTop: '20px' }
              : { position: 'absolute', top: '50%', marginLeft: '20px' }),
          }}
        >
          <Body
            style={{
              width: '60px',
              marginRight: '6px',
              ...(args.orientation === 'vertical' ? { lineHeight: '0px' } : {}),
            }}
          >
            {dateFormatter.format(currentDate)}
          </Body>
        </div>
      }
    />,
    args,
  );
};

CustomTickNoTooltip.args = {
  style: { width: '50%' },
  min: 1,
  max: 365,
  values: [0],
  tooltipProps: () => {
    return { visible: false };
  },
  minLabel: 'Date',
  maxLabel: '',
};

export const DecimalIncrement: Story<SliderProps> = (args) => {
  return sliderWrapper(<Slider {...args} />, args);
};

DecimalIncrement.args = {
  min: 0,
  max: 50,
  step: 2.5,
  values: [25],
};
