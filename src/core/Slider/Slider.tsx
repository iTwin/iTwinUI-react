/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';
import { useMergedRefs } from '../utils/hooks/useMergedRefs';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/slider.css';
import { TooltipProps } from '../Tooltip';
import { CommonProps } from '../utils/props';
import { getBoundedValue } from '../utils/common';
import { Track } from './Track';
import { Thumb } from './Thumb';

/**
 * Determines which segments are shown with color.
 * 'auto' - segment display is based on number of values.
 * 'none' - no colored tracks are displayed.
 * 'odd-segments'- colored tracks shown in segments 1,3,5, etc. Default if number of Thumbs values are odd.
 * 'even-segments'- colored tracks shown in segments 2,4,6, etc. Default if number of Thumbs values are even.
 */
export type TrackDisplayMode =
  | 'auto'
  | 'none'
  | 'odd-segments'
  | 'even-segments';

/** Private Utility Functions */
const getPercentageOfRectangle = (rect: DOMRect, pointer: number) => {
  const position = getBoundedValue(pointer, rect.left, rect.right);
  return (position - rect.left) / rect.width;
};

const getClosestValueIndex = (values: number[], pointerValue: number) => {
  if (1 === values.length) {
    return 0;
  }
  const distances = values.map((value) => Math.abs(value - pointerValue));
  const smallest = Math.min(...distances);
  return distances.indexOf(smallest);
};

const getDefaultTrackDisplay = (
  trackDisplayMode?: TrackDisplayMode,
  values?: number[],
) => {
  const numValues = values?.length ?? 0;
  if (undefined !== trackDisplayMode && 'auto' !== trackDisplayMode) {
    return trackDisplayMode;
  }

  return numValues % 2 ? 'even-segments' : 'odd-segments';
};

const roundValueToClosestStep = (value: number, step: number, min: number) => {
  return Math.round((value - min) / step) * step + min;
};

const formatNumberValue = (
  value: number,
  step: number,
  numDecimals: number,
) => {
  if (Number.isInteger(step)) {
    return value.toFixed(0);
  }
  return value.toFixed(numDecimals);
};

/**
 * Properties for Slider component
 */
export type SliderProps = {
  /**
   * Set focus on first thumb in slider element.
   * @default false
   */
  setFocus?: boolean;
  /**
   * Minimum slider value.
   * @default 0
   */
  min?: number;
  /**
   * Maximum slider value.
   * @default 100
   */
  max?: number;
  /**
   * Array of one or more values to show.
   */
  values: number[];
  /**
   *  Determines which segments are shown with color.
   * 'none' - no colored tracks are displayed.
   * 'auto' - no colored tracks are displayed.
   * 'odd-segments'- colored tracks shown in segments 1,3,5, etc.
   *                 Default if number of thumbs values are even.
   * 'even-segments'- colored tracks shown in segments 0,2,4, etc.
   *                 Default if number of thumbs values are odd.
   * @default 'auto'
   */
  trackDisplayMode?: TrackDisplayMode;
  /**
   * Step increment controls what values are allowed and the amount the value will
   * change when left and right arrows are pressed when a Thumb has focus.
   * @default 1
   */
  step?: number;
  /**
   * Forces control to be displayed in a disabled state where no interactive value
   * changes are allowed.
   *  @default false
   */
  disabled?: boolean;
  /**
   * Props to override default for showing a tooltip when Thumb is active or has focus.
   * changes are allowed.
   */
  tooltipProps?: Partial<Omit<TooltipProps, 'content' | 'children'>>;
  /**
   * Optional tooltip function that can be supplied to generate tooltip text.
   *  @default undefined
   */
  tooltipRenderer?: (val: number, step: number) => React.ReactNode;
  /**
   * Preferred position of tooltip relative to thumb.
   * @default 'top'
   */
  /**
   *  Optional array of labels that will be used to determine number of ticks
   * displayed and their labels. Ticks are spaced evenly across width of Slider.
   * @default undefined
   */
  tickLabels?: React.ReactNode[];
  /**
   * Optional label for the minimum value. If undefined then the min
   * value is shown. Use empty string for no label.
   * @default undefined
   */
  minLabel?: React.ReactNode;
  /**
   * Optional label for the maximum value. If undefined then the max
   *  value is shown. Use empty string for no label.
   * @default undefined
   */
  maxLabel?: React.ReactNode;
  /**
   * Defines the allowed behavior when moving Thumbs when multiple Thumbs are
   * shown. It controls if a Thumb movement should be limited to only move in
   * the segments adjacent to the Thumb. Possible values:
   * 'allow-crossing' - allows thumb to cross other thumbs. Default.
   * 'inhibit-crossing'- keeps the thumb from crossing and separated by a step.
   * @default 'inhibit-crossing'
   */
  thumbMode?: 'allow-crossing' | 'inhibit-crossing';
  /**
   * Additional props to include on each thumb container.
   */
  thumbProps?: Omit<CommonProps, 'title'>;
  /**
   * Callback fired when the value(s) of the slider has changed. This will receive
   * changes at the end of a slide as well as changes from clicks on rails and tracks.
   */
  onChange?: (values: ReadonlyArray<number>) => void;
  /**
   * Callback fired when the value(s) of the slider are internally updated during
   * operations like dragging a Thumb. Use this callback with caution as a
   * high-volume of updates will occur when dragging.
   */
  onUpdate?: (values: ReadonlyArray<number>) => void;
} & Omit<CommonProps, 'title'>;

/**
 * Slider component that display Thumbs for each value specified along a Rail.
 * @example
 * <Slider values={[10]} min={0} max={60} disabled />
 * <Slider values={[10, 20]} min={0} max={50} step={2} />
 * <Slider values={[10, 20, 30, 40]} min={0} max={60} setFocus
 *   thumbMode='allow-crossing' />
 */
export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (props, ref) => {
    const {
      min = 0,
      max = 100,
      values,
      step = 1,
      setFocus = false,
      tooltipProps,
      tooltipRenderer,
      disabled = false,
      tickLabels,
      minLabel,
      maxLabel,
      trackDisplayMode = undefined,
      thumbMode = 'inhibit-crossing',
      onChange,
      onUpdate,
      thumbProps,
      className,
      ...rest
    } = props;

    const [currentValues, setCurrentValues] = React.useState(values);
    React.useEffect(() => {
      setCurrentValues(values);
    }, [values]);

    const [minValueLabel, setMinValueLabel] = React.useState(minLabel);
    React.useEffect(() => {
      setMinValueLabel(minLabel ?? min.toString());
    }, [minLabel, min]);

    const [maxValueLabel, setMaxValueLabel] = React.useState(maxLabel);
    React.useEffect(() => {
      setMaxValueLabel(maxLabel ?? max.toString());
    }, [maxLabel, max]);

    const [trackDisplay, setTrackDisplay] = React.useState<TrackDisplayMode>(
      () => getDefaultTrackDisplay(trackDisplayMode, currentValues),
    );
    React.useEffect(() => {
      setTrackDisplay(getDefaultTrackDisplay(trackDisplayMode, currentValues));
    }, [trackDisplayMode, currentValues]);

    useTheme();
    const containerRef = React.useRef<HTMLDivElement>(null);
    const refs = useMergedRefs<HTMLDivElement>(containerRef, ref);

    React.useEffect(() => {
      if (containerRef.current && setFocus) {
        const firstThumb = containerRef.current.querySelector(
          '.iui-slider-thumb',
        );
        firstThumb && (firstThumb as HTMLElement).focus();
      }
    }, [setFocus]);

    const fractionDigits = React.useMemo(() => {
      const stepString = step.toString();
      const decimalIndex = stepString.indexOf('.');
      return stepString.length - (decimalIndex + 1);
    }, [step]);

    const generateTooltip = React.useCallback(
      (val: number): React.ReactNode => {
        return tooltipRenderer
          ? tooltipRenderer(val, step)
          : formatNumberValue(val, step, fractionDigits);
      },
      [fractionDigits, step, tooltipRenderer],
    );

    const getAllowableThumbRange = React.useCallback(
      (index: number) => {
        if (thumbMode === 'inhibit-crossing') {
          const minVal = index === 0 ? min : currentValues[index - 1] + step;
          const maxVal =
            index < currentValues.length - 1
              ? currentValues[index + 1] - step
              : max;
          return [minVal, maxVal];
        }
        return [min, max];
      },
      [max, min, step, thumbMode, currentValues],
    );

    const [activeThumbIndex, setActiveThumbIndex] = React.useState<
      number | undefined
    >(undefined);

    const updateThumbValue = React.useCallback(
      (
        event: PointerEvent,
        callback?: (values: ReadonlyArray<number>) => void,
      ) => {
        if (containerRef.current && undefined !== activeThumbIndex) {
          const percent = getPercentageOfRectangle(
            containerRef.current.getBoundingClientRect(),
            event.pageX,
          );
          let pointerValue = min + (max - min) * percent;
          pointerValue = roundValueToClosestStep(pointerValue, step, min);
          const [minVal, maxVal] = getAllowableThumbRange(activeThumbIndex);
          pointerValue = getBoundedValue(pointerValue, minVal, maxVal);
          if (pointerValue === currentValues[activeThumbIndex]) {
            return;
          }
          const newValues = [...currentValues];
          newValues[activeThumbIndex] = pointerValue;
          setCurrentValues(newValues);
          callback?.(newValues);
        }
      },
      [activeThumbIndex, min, max, step, getAllowableThumbRange, currentValues],
    );

    const handlePointerMove = React.useCallback(
      (event: PointerEvent): void => {
        updateThumbValue(event, onUpdate);
      },
      [onUpdate, updateThumbValue],
    );

    // function called by Thumb keyboard processing
    const onThumbValueChanged = React.useCallback(
      (index: number, value: number) => {
        if (currentValues[index] === value) {
          return;
        }
        const newValues = [...currentValues];
        newValues[index] = value;
        setCurrentValues(newValues);
        onChange?.(newValues);
      },
      [currentValues, onChange],
    );

    const onThumbActivated = React.useCallback((index: number) => {
      setActiveThumbIndex(index);
    }, []);

    const handlePointerUp = React.useCallback(
      (event: PointerEvent) => {
        updateThumbValue(event, onChange);
        setActiveThumbIndex(undefined);
        event.preventDefault();
        event.stopPropagation();
      },
      [onChange, updateThumbValue],
    );

    const handlePointerDownOnSlider = React.useCallback(
      (event: React.PointerEvent) => {
        if (containerRef.current) {
          const percent = getPercentageOfRectangle(
            containerRef.current.getBoundingClientRect(),
            event.pageX,
          );
          let pointerValue = min + (max - min) * percent;
          pointerValue = roundValueToClosestStep(pointerValue, step, min);

          const closestValueIndex = getClosestValueIndex(
            currentValues,
            pointerValue,
          );
          const [minVal, maxVal] = getAllowableThumbRange(closestValueIndex);
          pointerValue = getBoundedValue(pointerValue, minVal, maxVal);
          if (pointerValue === currentValues[closestValueIndex]) {
            return;
          }
          const newValues = [...currentValues];
          newValues[closestValueIndex] = pointerValue;
          setCurrentValues(newValues);
          onChange?.(newValues);
        }
      },
      [min, max, step, currentValues, getAllowableThumbRange, onChange],
    );

    const pointerMoveFunctionRef = React.useRef<
      (event: PointerEvent) => void
    >();
    React.useEffect(() => {
      const ownerDoc = containerRef.current?.ownerDocument;
      if (pointerMoveFunctionRef.current && ownerDoc) {
        ownerDoc.removeEventListener(
          'pointermove',
          pointerMoveFunctionRef.current,
        );
      }
      pointerMoveFunctionRef.current = handlePointerMove;
    }, [handlePointerMove]);

    const pointerUpFunctionRef = React.useRef<(event: PointerEvent) => void>();
    React.useEffect(() => {
      const ownerDoc = containerRef.current?.ownerDocument;
      if (pointerUpFunctionRef.current && ownerDoc) {
        ownerDoc.removeEventListener('pointerup', pointerUpFunctionRef.current);
      }
      pointerUpFunctionRef.current = handlePointerUp;
    }, [handlePointerUp]);

    React.useEffect(() => {
      const ownerDoc = containerRef.current?.ownerDocument;
      ownerDoc?.addEventListener('pointermove', handlePointerMove);
      ownerDoc?.addEventListener('pointerup', handlePointerUp);
      return () => {
        ownerDoc?.removeEventListener('pointermove', handlePointerMove);
        ownerDoc?.removeEventListener('pointerup', handlePointerUp);
      };
    }, [handlePointerMove, handlePointerUp]);

    return (
      <div
        className={cx(
          'iui-slider-component-container',
          disabled && 'iui-disabled',
          className,
        )}
        {...rest}
      >
        {minValueLabel && (
          <span className='iui-slider-min'>{minValueLabel}</span>
        )}
        <div
          ref={refs}
          className={cx(
            'iui-slider-container',
            undefined !== activeThumbIndex && 'iui-grabbing',
          )}
          onPointerDown={handlePointerDownOnSlider}
        >
          <div className='iui-slider-rail' />
          {currentValues.map((thumbValue, index) => {
            const [minVal, maxVal] = getAllowableThumbRange(index);
            return (
              <Thumb
                key={index}
                index={index}
                isActive={activeThumbIndex === index}
                onThumbActivated={onThumbActivated}
                onThumbValueChanged={onThumbValueChanged}
                minVal={minVal}
                maxVal={maxVal}
                value={thumbValue}
                tooltipContent={generateTooltip(thumbValue)}
                tooltipProps={tooltipProps}
                thumbProps={thumbProps}
                step={step}
                sliderMin={min}
                sliderMax={max}
              />
            );
          })}
          <Track
            trackDisplayMode={trackDisplay}
            sliderMin={min}
            sliderMax={max}
            values={currentValues}
          />
          {tickLabels?.length && (
            <div className='iui-slider-ticks'>
              {tickLabels.map((label, index) => (
                <span key={index} className='iui-slider-tick'>
                  {label}
                </span>
              ))}
            </div>
          )}
        </div>
        {maxValueLabel && (
          <span className='iui-slider-max'>{maxValueLabel}</span>
        )}
      </div>
    );
  },
);

export default Slider;
