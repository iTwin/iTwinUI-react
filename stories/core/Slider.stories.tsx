/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { useMemo, useCallback, useState } from '@storybook/addons';
import { Body, Slider } from '../../src/core';
import { SliderProps } from '../../src/core/Slider/Slider';
import SvgSmileyHappy from '@itwin/itwinui-icons-react/cjs/icons/SmileyHappy';
import SvgSmileySad from '@itwin/itwinui-icons-react/cjs/icons/SmileySad';

export default {
  title: 'Input/Slider',
  component: Slider,
} as Meta<SliderProps>;

export const Basic: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

Basic.args = {
  disabled: false,
  values: [50],
  minLabel: <SvgSmileyHappy />,
  maxLabel: <SvgSmileySad />,
};

export const WithProps: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

WithProps.args = {
  className: 'test-class',
  style: { width: '80%' },
  disabled: false,
  values: [50],
  minLabel: <SvgSmileyHappy />,
  maxLabel: <SvgSmileySad />,
};

export const WithThumbProps: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

WithThumbProps.args = {
  thumbProps: () => {
    return {
      className: 'thumb-test-class',
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#999',
        width: '36px',
        height: '26px',
        borderRadius: '4px',
        transform: 'translateX(-19.2px)',
        top: 0,
      },
      children: (
        <span
          style={{
            pointerEvents: 'none',
            marginBottom: '4px',
            userSelect: 'none',
          }}
        >
          |||
        </span>
      ),
    };
  },
  disabled: false,
  values: [50],
  minLabel: <SvgSmileyHappy />,
  maxLabel: <SvgSmileySad />,
  tickLabels: ['', '', ''],
  tooltipProps: { style: { userSelect: 'none' } },
  railContainerProps: { style: { margin: '0 8px' } },
};

export const Range: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

Range.args = {
  min: 0,
  max: 100,
  values: [20, 80],
};

export const RangeEvenSegments: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

RangeEvenSegments.args = {
  values: [20, 80],
  trackDisplayMode: 'even-segments',
};

export const MultiThumbs: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

MultiThumbs.args = {
  values: [20, 40, 60, 80],
};

export const MultiThumbsAllowCrossing: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

MultiThumbsAllowCrossing.args = {
  thumbProps: (index: number) => {
    const color = 0 == index % 2 ? 'blue' : 'red';
    return {
      className: 'thumb-test-class',
      style: { backgroundColor: color },
    };
  },

  values: [20, 40, 60, 80],
  trackDisplayMode: 'even-segments',
  thumbMode: 'allow-crossing',
};

export const Disabled: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

Disabled.args = {
  min: 0,
  max: 60,
  values: [30],
  disabled: true,
};

export const NoLabels: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

NoLabels.args = {
  min: 0,
  max: 60,
  values: [30],
  minLabel: '',
  maxLabel: '',
};

export const TooltipRight: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

TooltipRight.args = {
  min: 0,
  max: 60,
  values: [30],
  tooltipProps: { placement: 'right' },
};

export const WithTick: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

WithTick.args = {
  min: 0,
  max: 60,
  values: [20],
  tickLabels: ['0', '20', '40', '60'],
};

export const CustomTooltip: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

CustomTooltip.args = {
  min: 0,
  max: 60,
  values: [20],
  tickLabels: ['0', '20', '40', '60'],
  tooltipRenderer: (val) => {
    return `\$${val}.00`;
  },
};

export const HideTooltip: Story<SliderProps> = (args) => {
  const [minLabel, setMinLabel] = useState('20');
  const updateLabel = useCallback((values: ReadonlyArray<number>) => {
    setMinLabel(values[0].toString());
  }, []);
  return (
    <Slider
      {...args}
      minLabel={<Body style={{ width: '60px' }}>{minLabel}</Body>}
      maxLabel=''
      onUpdate={updateLabel}
      onChange={updateLabel}
    />
  );
};

HideTooltip.args = {
  className: 'test-class',
  style: { width: '60%' },
  min: 0,
  max: 60,
  values: [20],
  tickLabels: ['0', '20', '40', '60'],
  tooltipProps: { visible: false },
};

export const DateSlider: Story<SliderProps> = (args) => {
  const dateFormatter = useMemo(() => {
    return new Intl.DateTimeFormat('default', {
      month: 'short',
      day: '2-digit',
      timeZone: 'UTC',
    } as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  }, []);

  const [currentDate, setCurrentDate] = useState(
    new Date(Date.UTC(2019, 0, 1)),
  );

  const [minLabel, setMinLabel] = useState(() =>
    dateFormatter.format(currentDate),
  );

  const updateDate = useCallback(
    (values: ReadonlyArray<number>) => {
      const newDate = new Date(Date.UTC(2019, 0, values[0]));
      setCurrentDate(newDate);
      setMinLabel(dateFormatter.format(newDate));
    },
    [dateFormatter],
  );

  const tooltipRenderer = useCallback(() => {
    return dateFormatter.format(currentDate);
  }, [currentDate, dateFormatter]);

  return (
    <Slider
      {...args}
      minLabel={
        <Body style={{ width: '60px', marginRight: '6px' }}>{minLabel}</Body>
      }
      tooltipRenderer={tooltipRenderer}
      onUpdate={updateDate}
      onChange={updateDate}
    />
  );
};

DateSlider.args = {
  min: 1,
  max: 365,
  values: [0],
  maxLabel: '',
  tickLabels: ['Jan', 'Dec'],
};

export const SmallIncrement: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

SmallIncrement.args = {
  disabled: false,
  min: 0,
  max: 5,
  step: 0.25,
  values: [0.25],
};

export const LargeIncrement: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

LargeIncrement.args = {
  disabled: false,
  min: 0,
  max: 500,
  step: 25,
  values: [250],
};

export const DecimalIncrement: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

DecimalIncrement.args = {
  disabled: false,
  min: 0,
  max: 50,
  step: 2.5,
  values: [25],
};
