/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { Tooltip } from '../Tooltip';
import { ThumbMoveMode } from './Slider';
import { useSliderContext } from './SliderContext';

function formatNumberValue(value: number, step: number) {
  if (Number.isInteger(step)) {
    return value.toFixed(0);
  }
  const stepString = step.toString();
  const decimalIndex = stepString.indexOf('.');
  const numDecimals = stepString.length - (decimalIndex + 1);
  return value.toFixed(numDecimals);
}

export function getAllowableThumbRange(
  thumbMode: ThumbMoveMode,
  values: number[],
  index: number,
  min: number,
  max: number,
  step: number,
) {
  if (thumbMode === 'inhibit-crossing') {
    const minVal = index === 0 ? min : values[index - 1] + step;
    const maxVal = index < values.length - 1 ? values[index + 1] - step : max;
    return [minVal, maxVal];
  }
  return [min, max];
}

/** Thumb is a local component used to show and modify the values maintained by the Slider.
 * Only one Thumb can be active at a time. A Thumb is made active when the user selects
 * it with pointer. Whenever a Thumb is active, focused, or hovered its tooltip is shown. */
export const Thumb = ({
  index,
  isActive,
}: {
  index: number;
  isActive: boolean;
}) => {
  const {
    min,
    max,
    setThumbMoveIndex,
    tooltipRender,
    step,
    values,
    setThumbValue,
    thumbMode,
    tooltipProps,
  } = useSliderContext();
  const thumbRef = React.useRef<HTMLDivElement>(null);
  const handleOnKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const [minVal, maxVal] = getAllowableThumbRange(
        thumbMode,
        values,
        index,
        min,
        max,
        step,
      );

      if (event.key === 'ArrowLeft') {
        const newValue = Math.max(values[index] - step, minVal);
        setThumbValue(index, newValue);
      } else if (event.key === 'ArrowRight') {
        const newValue = Math.min(values[index] + step, maxVal);
        setThumbValue(index, newValue);
      } else if (event.key === 'Home') {
        setThumbValue(index, minVal);
      } else if (event.key === 'End') {
        setThumbValue(index, maxVal);
      }
    },
    [thumbMode, values, index, min, max, step, setThumbValue],
  );

  const handlePointerDownOnThumb = React.useCallback(
    (event: React.PointerEvent) => {
      thumbRef.current?.focus();
      setThumbMoveIndex(index);
      event.preventDefault();
      event.stopPropagation();
    },
    [index, setThumbMoveIndex],
  );

  const [hasFocus, setHasFocus] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const generateTooltip = React.useCallback(
    (val: number): React.ReactNode => {
      return tooltipRender
        ? tooltipRender(val, step)
        : formatNumberValue(val, step);
    },
    [tooltipRender, step],
  );

  const currentValue = values[index];
  const leftPercent = (100.0 * (currentValue - min)) / (max - min);

  return (
    <Tooltip
      visible={isActive || hasFocus || isHovered}
      content={generateTooltip(currentValue)}
      placement={'top'}
      {...tooltipProps}
    >
      <div
        ref={thumbRef}
        style={{ left: `${leftPercent}%` }}
        className={cx('iui-slider-thumb', isActive && 'iui-active')}
        role='slider'
        tabIndex={0}
        aria-valuemin={min}
        aria-valuenow={max}
        aria-valuemax={currentValue}
        onPointerDown={handlePointerDownOnThumb}
        onKeyDown={handleOnKeyDown}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </Tooltip>
  );
};
