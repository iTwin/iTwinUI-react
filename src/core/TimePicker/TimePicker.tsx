/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/date-picker.css';

const isSameHour = (
  hours: number,
  date: Date | undefined,
  period?: 'AM' | 'PM',
) => {
  const adjustedHours = period ? formatHourFrom12(hours, period) : hours;
  return !!date && adjustedHours === date.getHours();
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

const formatHourFrom12 = (hour: number, period: 'AM' | 'PM' | undefined) => {
  const adjustedHour = hour % 12;
  return period === 'PM' ? adjustedHour + 12 : adjustedHour;
};

const formatHourTo12 = (hour: number) => {
  const adjustedHour = hour % 12;
  return adjustedHour === 0 ? 12 : adjustedHour;
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
  const [focusedTime, setFocusedTime] = React.useState(
    selectedTime ?? new Date(),
  );
  const [period, setPeriod] = React.useState<'PM' | 'AM' | undefined>(
    use12Hours ? (focusedTime?.getHours() > 11 ? 'PM' : 'AM') : undefined,
  );

  React.useEffect(() => {
    setFocusedTime(date ?? new Date());
    setSelectedTime(date);
  }, [date]);

  const onHourClick = (hour: number) => {
    const adjustedHour = use12Hours ? formatHourFrom12(hour, period) : hour;
    const adjustedSelectedTime = selectedTime ?? new Date();
    adjustedSelectedTime.setHours(adjustedHour);
    updateCurrentTime(adjustedSelectedTime);
  };

  const onMinutesClick = (minutes: number) => {
    const adjustedSelectedTime = selectedTime ?? new Date();
    adjustedSelectedTime.setMinutes(minutes);
    updateCurrentTime(adjustedSelectedTime);
  };

  const onSecondsClick = (seconds: number) => {
    const adjustedSelectedTime = selectedTime ?? new Date();
    adjustedSelectedTime.setSeconds(seconds);
    updateCurrentTime(adjustedSelectedTime);
  };

  const onPeriodClick = (value: string) => {
    const adjustedSelectedTime = selectedTime ?? new Date();
    const currentHours = adjustedSelectedTime.getHours();
    if (value === 'AM' && currentHours > 11) {
      setPeriod(value);
      adjustedSelectedTime.setHours(currentHours - 12);
    }
    if (value === 'PM' && currentHours <= 12) {
      setPeriod(value);
      adjustedSelectedTime.setHours(currentHours + 12);
    }
    updateCurrentTime(adjustedSelectedTime);
  };

  const updateCurrentTime = (time: Date) => {
    setFocusedTime(time);
    setSelectedTime(time);
    onChange?.(time);
  };

  const onHourFocus = (hour: number | undefined) => {
    const adjustedHour =
      use12Hours && hour ? formatHourFrom12(hour, period) : hour;
    applyFocus(adjustedHour, (value, date) => date.setHours(value));
  };

  const onMinuteFocus = (minute: number | undefined) => {
    applyFocus(minute, (value, date) => date.setMinutes(value));
  };

  const onSecondFocus = (second: number | undefined) => {
    applyFocus(second, (value, date) => date.setSeconds(value));
  };

  const applyFocus = (
    value: number | undefined,
    callback: (value: number, date: Date) => void,
  ) => {
    if (!!value) {
      const date = new Date(focusedTime);
      callback(value, date);
      setFocusedTime(date);
    } else {
      setFocusedTime(selectedTime ?? new Date());
    }
  };

  const getHoursList = () => {
    return use12Hours
      ? [...new Array(12)].map((_, index) => (index === 0 ? 12 : index))
      : [...new Array(24)].map((_, index) => index);
  };

  return (
    <>
      <TimePickerColumn
        data={getHoursList()}
        focusedTime={focusedTime}
        selectedTime={selectedTime}
        onFocusChange={onHourFocus}
        onSelectChange={onHourClick}
        isSame={(value, date) =>
          isSameHour(value, date, use12Hours ? period : undefined)
        }
        step={hourStep}
      />
      {precision != 'hours' && (
        <TimePickerColumn
          data={[...new Array(60)].map((_, index) => index)}
          focusedTime={focusedTime}
          selectedTime={selectedTime}
          onFocusChange={onMinuteFocus}
          onSelectChange={onMinutesClick}
          isSame={areSameMinutes}
          step={minuteStep}
        />
      )}
      {precision == 'seconds' && (
        <TimePickerColumn
          data={[...new Array(60)].map((_, index) => index)}
          focusedTime={focusedTime}
          selectedTime={selectedTime}
          onFocusChange={onSecondFocus}
          onSelectChange={onSecondsClick}
          isSame={areSameSeconds}
          step={secondStep}
        />
      )}
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
                // ref={(ref) => {
                //   scrollIntoView(ref, isSamePeriod(value, selectedTime));
                // }}
                onClick={() => onPeriodClick(value)}
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

export type TimePickerColumnProps = {
  /**
   * Data to render in column.
   */
  data: number[];
  /**
   * Current focused time.
   */
  focusedTime: Date;
  /**
   * Current selected time.
   */
  selectedTime?: Date;
  /**
   * Callback when focus is changed.
   */
  onFocusChange?: (value?: number) => void;
  /**
   * Callback when date is changed.
   */
  onSelectChange?: (value: number) => void;
  /**
   * Compare function.
   */
  isSame: (value: number, date: Date | undefined) => boolean;
  /**
   * Step.
   */
  step?: number;
};

const TimePickerColumn = (props: TimePickerColumnProps): JSX.Element => {
  const {
    data,
    focusedTime,
    selectedTime,
    onFocusChange,
    onSelectChange,
    isSame,
    step = 0,
  } = props;
  const needFocus = React.useRef(false);

  React.useEffect(() => {
    if (needFocus.current) {
      needFocus.current = false;
      // onFocusChange?.(undefined);
    }
  });

  const scrollIntoView = (ref: HTMLLIElement | null, isSame: boolean) => {
    isSame && ref?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  };

  const handleTimeKeyDown = (
    event: React.KeyboardEvent<HTMLLIElement>,
    maxValue: number,
    onFocus: (value: number) => void,
    onSelect: (value: number) => void,
    currentValue?: number,
  ) => {
    if (currentValue == null) {
      return;
    }
    switch (event.key) {
      case 'ArrowDown':
        if (currentValue + 1 > maxValue) {
          break;
        }
        onFocus(currentValue + 1);
        needFocus.current = true;
        event.preventDefault();
        break;
      case 'ArrowUp':
        if (currentValue - 1 < 0) {
          break;
        }
        onFocus(currentValue - 1);
        needFocus.current = true;
        event.preventDefault();
        break;
      case 'Enter':
      case ' ':
      case 'Spacebar':
        onSelect(currentValue);
        event.preventDefault();
        break;
    }
  };

  return (
    <div className='iui-time'>
      <ol>
        {data
          .filter((_, index) => index % step === 0)
          .map((value, index) => {
            return (
              <li
                onKeyDown={(event) => {
                  handleTimeKeyDown(
                    event,
                    data.length - 1,
                    (index) => onFocusChange?.(data[index]),
                    (index) => onSelectChange?.(data[index]),
                    index,
                  );
                }}
                className={cx({
                  'iui-selected': isSame(value, selectedTime),
                })}
                key={value}
                tabIndex={isSame(value, focusedTime) ? 0 : undefined}
                ref={(ref) => {
                  scrollIntoView(ref, isSame(value, focusedTime));
                  needFocus.current &&
                    isSame(value, focusedTime) &&
                    ref?.focus();
                }}
                onClick={() => onSelectChange?.(value)}
                onBlur={() => {
                  console.log('on blur');
                  // needFocus.current = false;
                  onFocusChange?.(undefined);
                }}
              >
                {`0${value}`.slice(-2)}
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default TimePicker;
