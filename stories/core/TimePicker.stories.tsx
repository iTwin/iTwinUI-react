/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { action } from '@storybook/addon-actions';
import { useEffect, useState } from '@storybook/addons';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  TimePicker,
  TimePickerProps,
  IconButton,
  LabeledInput,
  MeridiemType,
} from '../../src/core';
import SvgCalendar from '@itwin/itwinui-icons-react/cjs/icons/Calendar';

export default {
  title: 'Core/TimePicker',
  component: TimePicker,
  argTypes: {
    onChange: { control: { disable: true } },
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    date: { control: { type: 'date' } },
  },
} as Meta<TimePickerProps>;

export const Basic: Story<TimePickerProps> = (args) => {
  const { date = new Date(), ...rest } = args;
  const [opened, setOpened] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date(date));
  const onChange = (date: Date) => {
    setCurrentDate(date);
    action(`New Time value: ${date}`, { clearOnStoryChange: false })();
  };

  useEffect(() => {
    setCurrentDate(new Date(date));
    return () => action('', { clearOnStoryChange: true })();
  }, [date]);
  return (
    <>
      <LabeledInput
        displayStyle='inline'
        value={currentDate.toLocaleTimeString()}
        svgIcon={
          <IconButton
            styleType='borderless'
            onClick={() => setOpened((v) => !v)}
          >
            <SvgCalendar />
          </IconButton>
        }
        style={{ width: 150 }}
        readOnly
      />
      {opened && (
        <div>
          <TimePicker date={currentDate} onChange={onChange} {...rest} />
        </div>
      )}
    </>
  );
};

Basic.args = {
  date: new Date(),
  hourRenderer: (date: Date) =>
    date.getHours().toLocaleString(undefined, { minimumIntegerDigits: 2 }),
  minuteRenderer: (date: Date) =>
    date.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 }),
  secondRenderer: (date: Date) =>
    date.getSeconds().toLocaleString(undefined, { minimumIntegerDigits: 2 }),
  meridiemRenderer: (meridiem: MeridiemType) => meridiem,
};
