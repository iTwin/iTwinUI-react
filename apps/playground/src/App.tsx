/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import {
  Button,
  Slider,
  RadioTileGroup,
  RadioTile,
  Body,
  SliderProps,
} from '@itwin/itwinui-react';
import { Orientation } from '@itwin/itwinui-react/esm/core/Slider/Slider'; // TODO: This is pretty sure not recommended by the style guide. Reconfirm.
import { useState } from 'react';
import './App.css';

// import { Meta, Story } from '@storybook/react';
import { useMemo, useCallback } from '@storybook/addons';
// import { Body, Slider, SliderProps } from '@itwin/itwinui-react';
import SvgSmileyHappy from '@itwin/itwinui-icons-react/cjs/icons/SmileyHappy';
import SvgSmileySad from '@itwin/itwinui-icons-react/cjs/icons/SmileySad';

const WithCustomThumb_args = {
  thumbProps: () => {
    return {
      style: {
        // display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#33999999',
        width: '36px',
        height: '26px',
        // borderRadius: '4px',
        // border: 0,
        // // transform: 'translateX(-19.2px)',
        // transform: 'translate(50%, 50%)',
        // left: '100px',
        // right: 0,
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
    };
  },
  values: [50],
  //  minLabel: <SvgSmileyHappy />,
  //  maxLabel: <SvgSmileySad />,
  // railContainerProps: { style: { margin: '0 8px' } },
};

// export default {
//   title: 'Input/Slider',
//   component: Slider,
//   argTypes: {
//     className: { control: { disable: true } },
//     style: { control: { disable: true } },
//     id: { control: { disable: true } },
//   },
//   args: {
//     thumbMode: 'inhibit-crossing',
//     trackDisplayMode: 'auto',
//   },
// } as Meta<SliderProps>;

const Basic = (args: any) => {
  return <Slider {...args} />;
};

Basic.args = {
  values: [50],
};

const Range = (args: any) => {
  return <Slider {...args} />;
};

Range.args = {
  min: 0,
  max: 100,
  values: [20, 80],
};

const MultiThumbsAllowCrossing = (args: any) => {
  return <Slider {...args} />;
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

const WithCustomThumb = (args: any) => {
  return <Slider {...args} />;
};

WithCustomThumb.args = (orientation: Orientation) => {
  return {
    thumbProps: () => {
      return {
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#999',
          width: '36px',
          height: '26px',
          borderRadius: '4px',
          transform:
            orientation == Orientation.horizontal
              ? // ? 'translateX(-19.2px)'
                'translateX(-19.2px)'
              : 'translate(-25%, 50%)',
          // transform: 'translateX(-19.2px)',
          // transform: 'translateX(-50%)',
          // top: 0,
          top: orientation == Orientation.horizontal ? 0 : 'unset', // TODO: Confirm if this works and doesn't break anything
        },
        children: (
          <span
            style={{
              pointerEvents: 'none',
              marginBottom: '4px',
              // transform: 'transformX(400%)',
            }}
          >
            |||
          </span>
        ),
      };
    },
    values: [50],
    minLabel: <SvgSmileyHappy />,
    maxLabel: <SvgSmileySad />,
    // railContainerProps: { style: { margin: '0 8px' } },
  };
};

const Disabled = (args: any) => {
  return <Slider {...args} />;
};

Disabled.args = {
  min: 0,
  max: 60,
  values: [30],
  disabled: true,
};

export const CustomTooltip = (args: any) => {
  return <Slider {...args} />;
};

CustomTooltip.args = {
  min: 0,
  max: 60,
  values: [20],
  tickLabels: ['0', '20', '40', '60'],
  tooltipProps: (index: number, val: number) => {
    return { placement: 'right', content: `\$${val}.00` };
  },
  setFocus: true,
};

const CustomTickNoTooltip = (args: any) => {
  // const dateFormatter = useMemo(() => {
  //   return new Intl.DateTimeFormat('default', {
  //     month: 'short',
  //     day: '2-digit',
  //     timeZone: 'UTC',
  //   });
  // }, []);
  const dateFormatter = new Intl.DateTimeFormat('default', {
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC',
  });

  const [currentDate, setCurrentDate] = useState(
    new Date(Date.UTC(2019, 0, 1)),
  );

  const updateDate = (values: number) => {
    const newDate = new Date(Date.UTC(2019, 0, values));
    setCurrentDate(newDate);
  };

  return (
    <Slider
      {...args}
      onUpdate={updateDate}
      onChange={updateDate}
      tickLabels={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Body style={{ width: '60px', marginRight: '6px' }}>
            {dateFormatter.format(currentDate)}
          </Body>
        </div>
      }
    />
  );
};

CustomTickNoTooltip.args = {
  // style: { width: '50%' },
  min: 1,
  max: 365,
  values: [0],
  tooltipProps: () => {
    return { visible: false };
  },
  minLabel: 'Date',
  maxLabel: '',
};

export const DecimalIncrement = (args: any) => {
  return <Slider {...args} />;
};

DecimalIncrement.args = {
  min: 0,
  max: 50,
  step: 2.5,
  values: [25],
};

const App = () => {
  const [orientation, setOrientation] = useState(Orientation.horizontal);

  return (
    <div className='App'>
      {/* <Button>Hello world</Button> */}
      <h1 className='title'>Trial React for Vertical Slider</h1>
      <section id='demo-default'>
        <RadioTileGroup>
          <RadioTile
            label='Horizontal'
            name='map'
            value='Google Maps'
            onClick={() => setOrientation(Orientation.horizontal)}
            defaultChecked
          />
          <RadioTile
            label='Vertical'
            name='map'
            value='Bentley Blue'
            onClick={() => setOrientation(Orientation.vertical)}
          />
        </RadioTileGroup>
        <div
          className={`slider-container ${
            orientation == Orientation.vertical
              ? 'slider-container-vertical'
              : ''
          }`}
        >
          {/* <Slider
            values={[0, 25, 50, 100]}
            setFocus={true}
            orientation={orientation}
            min={0}
            max={100}
            trackDisplayMode={'odd-segments'}
            step={5}
            disabled={false}
            tickLabels={[1, 2, 3, 4, 5]}
            minLabel={<b style={{ backgroundColor: 'red' }}>min</b>}
            maxLabel={<b style={{ backgroundColor: 'blue' }}>max</b>}
            thumbMode={'allow-crossing'}
            onChange={(v) => console.log(`onChanged ${v}`)}
            onUpdate={(v) => console.log(`onUpdate ${v}`)}
          /> */}
          {/* <Slider {...WithCustomThumbargs} orientation={orientation} /> */}
          {Basic({ ...Basic.args, orientation: orientation })}
          {Range({ ...Range.args, orientation: orientation })}
          {MultiThumbsAllowCrossing({
            ...MultiThumbsAllowCrossing.args,
            orientation: orientation,
          })}
          {WithCustomThumb({
            ...WithCustomThumb.args(orientation),
            orientation: orientation,
            tickLabels: [
              '0',
              '10',
              '20',
              '30',
              '40',
              '50',
              '60',
              '70',
              '80',
              '90',
              '100',
            ],
          })}
          {Disabled({ ...Disabled.args, orientation: orientation })}
          {CustomTooltip({ ...CustomTooltip.args, orientation: orientation })}
          {CustomTickNoTooltip({
            ...CustomTickNoTooltip.args,
            orientation: orientation,
          })}
          {DecimalIncrement({
            ...DecimalIncrement.args,
            orientation: orientation,
          })}
        </div>
      </section>
    </div>
  );
};

export default App;
