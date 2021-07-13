/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { Tooltip, TooltipProps } from '../Tooltip';

/**
 * Thumb is a local component used to show and modify the values maintained by the Slider.
 * Only one Thumb can be active at a time. A Thumb is made active when the user selects
 * it with pointer. Whenever a Thumb is active, focused, or hovered its tooltip is shown.
 */
export const Thumb = ({
  value,
  index,
  minVal,
  maxVal,
  step,
  sliderMin,
  sliderMax,
  isActive,
  onThumbActivated,
  onThumbValueChanged,
  tooltipContent,
  tooltipProps,
}: {
  value: number;
  index: number;
  minVal: number;
  maxVal: number;
  step: number;
  sliderMin: number;
  sliderMax: number;
  isActive: boolean;
  onThumbActivated: (index: number) => void;
  onThumbValueChanged: (index: number, value: number) => void;
  tooltipContent: React.ReactNode;
  tooltipProps?: Partial<Omit<TooltipProps, 'content' | 'children'>>;
}) => {
  const thumbRef = React.useRef<HTMLDivElement>(null);
  const handleOnKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      switch (event.key) {
        case 'ArrowLeft':
          onThumbValueChanged(index, Math.max(value - step, minVal));
          return;
        case 'ArrowRight':
          onThumbValueChanged(index, Math.min(value + step, maxVal));
          return;
        case 'Home':
          onThumbValueChanged(index, minVal);
          return;
        case 'End':
          onThumbValueChanged(index, maxVal);
          return;
      }
    },
    [value, index, step, minVal, onThumbValueChanged, maxVal],
  );

  const handlePointerDownOnThumb = React.useCallback(() => {
    onThumbActivated(index);
  }, [index, onThumbActivated]);

  const [hasFocus, setHasFocus] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const leftPercent = (100.0 * (value - sliderMin)) / (sliderMax - sliderMin);

  return (
    <Tooltip
      visible={isActive || hasFocus || isHovered}
      content={tooltipContent}
      placement={'top'}
      {...tooltipProps}
    >
      <div
        ref={thumbRef}
        style={{ left: `${leftPercent}%` }}
        className={cx(
          'iui-slider-thumb',
          isActive && 'iui-active',
          isActive && 'iui-grabbing',
        )}
        role='slider'
        tabIndex={0}
        aria-valuemin={minVal}
        aria-valuenow={maxVal}
        aria-valuemax={value}
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
