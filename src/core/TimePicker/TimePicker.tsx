/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/time-picker.css';
import { StylingProps } from '../utils/props';

const isSameHour = (
  date1: Date,
  date2: Date | undefined,
  period?: PeriodType,
) => {
  const adjustedHours = period
    ? formatHourFrom12(date1.getHours(), period)
    : date1.getHours();
  if (!!period) {
    return !!date2 && adjustedHours % 12 === date2.getHours() % 12;
  }
  return !!date2 && adjustedHours === date2.getHours();
};

const isSameMinute = (date1: Date, date2: Date | undefined) => {
  return !!date2 && date1.getMinutes() === date2.getMinutes();
};

const isSameSecond = (date1: Date, date2: Date | undefined) => {
  return !!date2 && date1.getSeconds() === date2.getSeconds();
};

const isSamePeriod = (period: PeriodType, date: Date | undefined) => {
  return (
    !!date && (period === 'AM' ? date.getHours() < 12 : date.getHours() >= 12)
  );
};

const formatHourFrom12 = (hour: number, period: PeriodType | undefined) => {
  const adjustedHour = hour % 12;
  return period === 'PM' ? adjustedHour + 12 : adjustedHour;
};

const setHours = (hour: number, date: Date) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    hour,
    date.getMinutes(),
    date.getSeconds(),
  );
};

export type PeriodType = 'AM' | 'PM';

export type TimePickerProps = {
  /**
   * Selected date. Only time is used from Date object.
   */
  date?: Date;
  /**
   * Callback when time is changed.
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
  /**
   * Set focus on hour.
   * @default false
   */
  setFocusHour?: boolean;
  /**
   * Custom hour cell renderer.
   * @default (date: Date) => <>{date.getHours()}</>
   */
  hourRenderer?: (date: Date) => JSX.Element;
  /**
   * Custom minute cell renderer.
   * @default (date: Date) => <>{date.getMinutes()}</>
   */
  minuteRenderer?: (date: Date) => JSX.Element;
  /**
   * Custom second cell renderer.
   * @default (date: Date) => <>{date.getSeconds()}</>
   */
  secondRenderer?: (date: Date) => JSX.Element;
  /**
   * Custom period cell renderer.
   * @default (period: PeriodType) => <>{period}</>
   */
  periodRenderer?: (period: PeriodType) => JSX.Element;
} & StylingProps;

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
    setFocusHour = false,
    hourRenderer = (date: Date) => <>{date.getHours()}</>,
    minuteRenderer = (date: Date) => <>{date.getMinutes()}</>,
    secondRenderer = (date: Date) => <>{date.getSeconds()}</>,
    periodRenderer = (period: PeriodType) => <>{period}</>,
    className,
    ...rest
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

  const onHourClick = (date: Date) => {
    const adjustedHour = use12Hours
      ? formatHourFrom12(date.getHours(), period)
      : date.getHours();
    const adjustedSelectedTime = setHours(
      adjustedHour,
      selectedTime ?? new Date(),
    );
    updateCurrentTime(adjustedSelectedTime);
  };

  const onPeriodClick = (value: PeriodType) => {
    let adjustedSelectedTime = selectedTime ?? new Date();
    const currentHours = adjustedSelectedTime.getHours();
    setPeriod(value);
    if (value === 'AM' && currentHours > 11) {
      adjustedSelectedTime = setHours(currentHours - 12, adjustedSelectedTime);
    }
    if (value === 'PM' && currentHours <= 12) {
      adjustedSelectedTime = setHours(currentHours + 12, adjustedSelectedTime);
    }
    updateCurrentTime(adjustedSelectedTime);
  };

  const updateCurrentTime = (time: Date) => {
    setFocusedTime(time);
    setSelectedTime(time);
    onChange?.(time);
  };

  const onHourFocus = (date: Date) => {
    const adjustedHour = use12Hours
      ? formatHourFrom12(date.getHours(), period)
      : date.getHours();
    setFocusedTime(setHours(adjustedHour, focusedTime));
  };

  const onPeriodFocus = (value: PeriodType) => {
    let adjustedSelectedTime = selectedTime ?? new Date();
    const currentHours = adjustedSelectedTime.getHours();
    if (value === 'AM' && currentHours > 11) {
      setPeriod(value);
      adjustedSelectedTime = setHours(currentHours - 12, adjustedSelectedTime);
    }
    if (value === 'PM' && currentHours <= 12) {
      setPeriod(value);
      adjustedSelectedTime = setHours(currentHours + 12, adjustedSelectedTime);
    }
    setFocusedTime(adjustedSelectedTime);
  };

  const generateDataList = (
    size: number,
    value: (index: number) => Date,
    step: number,
  ) => {
    const data = [];
    for (let i = 0; i < size; ++i) {
      if (i % step === 0) {
        data.push(value(i));
      }
    }
    return data;
  };

  const hours = React.useMemo(() => {
    const time = selectedTime ?? new Date();
    return generateDataList(
      use12Hours ? 12 : 24,
      (i: number) =>
        new Date(
          time.getFullYear(),
          time.getMonth(),
          time.getDate(),
          use12Hours && i === 0 ? 12 : i,
          time.getMinutes(),
          time.getSeconds(),
        ),
      hourStep,
    );
  }, [hourStep, selectedTime, use12Hours]);

  const minutes = React.useMemo(() => {
    const time = selectedTime ?? new Date();
    return generateDataList(
      60,
      (i: number) =>
        new Date(
          time.getFullYear(),
          time.getMonth(),
          time.getDate(),
          time.getHours(),
          i,
          time.getSeconds(),
        ),
      minuteStep,
    );
  }, [minuteStep, selectedTime]);

  const seconds = React.useMemo(() => {
    const time = selectedTime ?? new Date();
    return generateDataList(
      60,
      (i: number) =>
        new Date(
          time.getFullYear(),
          time.getMonth(),
          time.getDate(),
          time.getHours(),
          time.getMinutes(),
          i,
        ),
      secondStep,
    );
  }, [secondStep, selectedTime]);

  return (
    <div className={cx('iui-time-picker', className)} {...rest}>
      <TimePickerColumn
        data={hours}
        isSameFocused={(val) =>
          isSameHour(val, focusedTime, use12Hours ? period : undefined)
        }
        isSameSelected={(val) =>
          isSameHour(val, selectedTime, use12Hours ? period : undefined)
        }
        onFocusChange={onHourFocus}
        onSelectChange={onHourClick}
        setFocus={setFocusHour}
        valueRenderer={hourRenderer}
      />
      {precision != 'hours' && (
        <TimePickerColumn
          data={minutes}
          isSameFocused={(val) => isSameMinute(val, focusedTime)}
          isSameSelected={(val) => isSameMinute(val, selectedTime)}
          onFocusChange={(date) => setFocusedTime(date)}
          onSelectChange={(date) => updateCurrentTime(date)}
          valueRenderer={minuteRenderer}
        />
      )}
      {precision == 'seconds' && (
        <TimePickerColumn
          data={seconds}
          isSameFocused={(val) => isSameSecond(val, focusedTime)}
          isSameSelected={(val) => isSameSecond(val, selectedTime)}
          onFocusChange={(date) => setFocusedTime(date)}
          onSelectChange={(date) => updateCurrentTime(date)}
          valueRenderer={secondRenderer}
        />
      )}
      {use12Hours && (
        <TimePickerColumn<PeriodType>
          data={['AM', 'PM']}
          isSameFocused={(val) => isSamePeriod(val, focusedTime)}
          isSameSelected={(val) => isSamePeriod(val, selectedTime)}
          onFocusChange={(date) => onPeriodFocus(date)}
          onSelectChange={(value) => onPeriodClick(value)}
          valueRenderer={periodRenderer}
          className='iui-period'
        />
      )}
    </div>
  );
};

type TimePickerColumnProps<T = Date> = {
  /**
   * Data to render in column.
   */
  data: T[];
  /**
   * Compare function for focus.
   */
  isSameFocused: (value: T) => boolean;
  /**
   * Compare function for select.
   */
  isSameSelected: (value: T) => boolean;
  /**
   * Callback when focus is changed.
   */
  onFocusChange: (value: T) => void;
  /**
   * Callback when date is changed.
   */
  onSelectChange: (value: T) => void;
  /**
   * Set initial focus.
   */
  setFocus?: boolean;
  /**
   * What value to display in every cell.
   */
  valueRenderer: (value: T) => JSX.Element;
  /**
   * Class to apply on root.
   */
  className?: string;
};

const TimePickerColumn = <T,>(props: TimePickerColumnProps<T>): JSX.Element => {
  const {
    data,
    onFocusChange,
    onSelectChange,
    isSameFocused,
    isSameSelected,
    setFocus = false,
    valueRenderer,
    className = 'iui-time',
  } = props;
  const needFocus = React.useRef(setFocus);

  // Used to focus row only when changed (keyboard navigation)
  // e.g. without this on every rerender it would be focused
  React.useEffect(() => {
    if (needFocus.current) {
      needFocus.current = false;
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
    currentValue: number,
  ) => {
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
    <div className={className}>
      <ol>
        {data.map((value, index) => {
          const isSameFocus = isSameFocused(value);
          return (
            <li
              onKeyDown={(event) => {
                handleTimeKeyDown(
                  event,
                  data.length - 1,
                  (index) => onFocusChange(data[index]),
                  (index) => onSelectChange(data[index]),
                  index,
                );
              }}
              className={cx({
                'iui-selected': isSameSelected(value),
              })}
              key={index}
              tabIndex={isSameFocus ? 0 : undefined}
              ref={(ref) => {
                scrollIntoView(ref, isSameFocus);
                needFocus.current && isSameFocus && ref?.focus();
              }}
              onClick={() => {
                onSelectChange(value);
              }}
            >
              {valueRenderer(value)}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TimePicker;
