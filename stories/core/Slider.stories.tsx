/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Slider } from '../../src/core';
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
  railDomain: { min: 0, max: 100 },
  values: [50],
  minLabel: (
    <SvgSmileyHappy
      className='iui-icon'
      style={{
        width: '16px',
        height: '16px',
        marginTop: '6px',
        marginRight: '2px',
      }}
    />
  ),
  maxLabel: (
    <SvgSmileySad
      className='iui-icon'
      style={{
        width: '16px',
        height: '16px',
        marginTop: '6px',
        marginLeft: '2px',
      }}
    />
  ),
};

export const WithContainerProps: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

WithContainerProps.args = {
  containerProps: { className: 'test-class', style: { width: '80%' } },
  disabled: false,
  railDomain: { min: 0, max: 100 },
  values: [50],
  minLabel: (
    <SvgSmileyHappy
      className='iui-icon'
      style={{
        width: '16px',
        height: '16px',
        marginTop: '6px',
        marginRight: '2px',
      }}
    />
  ),
  maxLabel: (
    <SvgSmileySad
      className='iui-icon'
      style={{
        width: '16px',
        height: '16px',
        marginTop: '6px',
        marginLeft: '2px',
      }}
    />
  ),
};

export const SmallIncrement: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

SmallIncrement.args = {
  disabled: false,
  railDomain: { min: 0, max: 5 },
  step: 0.25,
  values: [0.25],
};
export const Range: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

Range.args = {
  railDomain: { min: 0, max: 100 },
  values: [20, 80],
};

export const RangeOddSegments: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

RangeOddSegments.args = {
  railDomain: { min: 0, max: 100 },
  values: [20, 80],
  trackDisplayMode: 'odd-segments',
};

export const MultiThumbs: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

MultiThumbs.args = {
  railDomain: { min: 0, max: 100 },
  values: [20, 40, 60, 80],
  trackDisplayMode: 'even-segments',
};

export const MultiThumbsStepSeparated: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

MultiThumbsStepSeparated.args = {
  railDomain: { min: 0, max: 100 },
  values: [20, 40, 60, 80],
  trackDisplayMode: 'even-segments',
  thumbMode: 'step-separated',
};

export const Disabled: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

Disabled.args = {
  railDomain: { min: 0, max: 60 },
  values: [30],
  disabled: true,
};

export const NoLabels: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

NoLabels.args = {
  railDomain: { min: 0, max: 60 },
  values: [30],
  minLabel: '',
  maxLabel: '',
};

export const TooltipRight: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

TooltipRight.args = {
  railDomain: { min: 0, max: 60 },
  values: [30],
  toolTipPosition: 'right',
};

export const WithTick: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

WithTick.args = {
  railDomain: { min: 0, max: 60 },
  values: [20],
  tickLabels: ['0', '20', '40', '60'],
};

export const CustomTooltip: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

CustomTooltip.args = {
  railDomain: { min: 0, max: 60 },
  values: [20],
  tickLabels: ['0', '20', '40', '60'],
  toolTipFunction: (val) => {
    return `\$${val}.00`;
  },
};
