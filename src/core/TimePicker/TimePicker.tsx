/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/date-picker.css';

const isSameHour = (hours: number, date: Date | undefined) => {
  return !!date && hours === date.getHours();
};

const areSameMinutes = (minutes: number, date: Date | undefined) => {
  return !!date && minutes === date.getMinutes();
};

const areSameSeconds = (seconds: number, date: Date | undefined) => {
  return !!date && seconds === date.getSeconds();
};

const isSamePeriod = (period: string, date: Date | undefined) => {
  return (
    !!date && (period === 'AM' ? date.getHours() < 12 : date.getHours() >= 12)
  );
};

export type TimePickerProps = {
  /**
   * Selected date.
   */
  date?: Date;
  /**
   * Callback when date is changed.
   */
  onChange?: (date: Date) => void;
  /**
   * Format of the time. 12h or 24h.
   * @default false
   */
  use12Hours?: boolean;
  /**
   * Precision of the time.
   * @default 'minutes'
   */
  precision?: 'hours' | 'minutes' | 'seconds';
  /**
   * Change step of the hours displayed.
   * @default 1
   */
  hourStep?: number;
  /**
   * Change step of the minutes displayed.
   * @default 1
   */
  minuteStep?: number;
  /**
   * Change step of the seconds displayed.
   * @default 1
   */
  secondStep?: number;
};

/**
 * Time picker component
 * @example
 * <TimePicker date={new Date()} onChange={(e) => console.log('New time value: ' + e)} />
 */
export const TimePicker = (props: TimePickerProps): JSX.Element => {
  const {
    date,
    onChange,
    use12Hours = false,
    precision = 'minutes',
    hourStep = 1,
    minuteStep = 1,
    secondStep = 1,
  } = props;

  useTheme();

  const [selectedTime, setSelectedTime] = React.useState(date);

  React.useEffect(() => {
    setSelectedTime(date);
  }, [date]);

  const onHourClick = (hour: number) => {
    const adjustedSelectedDay = selectedTime ?? new Date();
    adjustedSelectedDay.setHours(hour);
    updateCurrentTime(adjustedSelectedDay);
  };

  const onMinutesClick = (minutes: number) => {
    const adjustedSelectedDay = selectedTime ?? new Date();
    adjustedSelectedDay.setMinutes(minutes);
    updateCurrentTime(adjustedSelectedDay);
  };

  const onSecondsClick = (seconds: number) => {
    const adjustedSelectedDay = selectedTime ?? new Date();
    adjustedSelectedDay.setSeconds(seconds);
    updateCurrentTime(adjustedSelectedDay);
  };

  const updateCurrentTime = (time: Date) => {
    setSelectedTime(time);
    onChange?.(time);
  };

  // const handleTimeKeyDown = (
  //   event: React.KeyboardEvent<HTMLLIElement>,
  //   maxValue: number,
  //   callback: (value: number) => void,
  //   onClick: (value: number) => void,
  //   currentValue?: number,
  // ) => {
  //   if (!focusedTime || currentValue == null) {
  //     return;
  //   }
  //   switch (event.key) {
  //     case 'ArrowDown':
  //       if (currentValue + 1 > maxValue) {
  //         break;
  //       }
  //       callback(currentValue + 1);
  //       needFocus.current = true;
  //       event.preventDefault();
  //       break;
  //     case 'ArrowUp':
  //       if (currentValue - 1 < 0) {
  //         break;
  //       }
  //       callback(currentValue - 1);
  //       needFocus.current = true;
  //       event.preventDefault();
  //       break;
  //     case 'Enter':
  //     case ' ':
  //     case 'Spacebar':
  //       onClick(currentValue);
  //       event.preventDefault();
  //       break;
  //   }
  // };

  const scrollIntoView = (ref: HTMLLIElement | null, isSame: boolean) => {
    isSame && ref?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  };

  const getTimeTemplate = (
    size: number,
    step: number,
    isSame: (number: number, date: Date | undefined) => boolean,
    onClick: (number: number) => void,
  ) => {
    return (
      <div className='iui-time'>
        <ol>
          {[...new Array(size)]
            .filter((_, index) => index % step === 0)
            .map((_, index: number) => {
              const adjustedValue =
                use12Hours && size === 12 ? index + 1 : index;
              return (
                <li
                  className={cx({
                    'iui-selected': isSame(adjustedValue, selectedTime),
                  })}
                  key={adjustedValue}
                  tabIndex={isSame(adjustedValue, selectedTime) ? 0 : undefined}
                  ref={(ref) => {
                    scrollIntoView(ref, isSame(adjustedValue, selectedTime));
                  }}
                  onClick={() => onClick(adjustedValue)}
                >
                  {`0${adjustedValue}`.slice(-2)}
                </li>
              );
            })}
        </ol>
      </div>
    );
  };

  return (
    <>
      {getTimeTemplate(use12Hours ? 12 : 24, hourStep, isSameHour, onHourClick)}
      {precision != 'hours' &&
        getTimeTemplate(60, minuteStep, areSameMinutes, onMinutesClick)}
      {precision == 'seconds' &&
        getTimeTemplate(60, secondStep, areSameSeconds, onSecondsClick)}
      {use12Hours && (
        <div className='iui-time'>
          <ol>
            {['AM', 'PM'].map((value) => (
              <li
                className={cx({
                  'iui-selected': isSamePeriod(value, selectedTime),
                })}
                key={value}
                tabIndex={isSamePeriod(value, selectedTime) ? 0 : undefined}
                ref={(ref) => {
                  scrollIntoView(ref, isSamePeriod(value, selectedTime));
                }}
                // onClick={() => onClick(value)}
              >
                {value}
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
};

export default TimePicker;
