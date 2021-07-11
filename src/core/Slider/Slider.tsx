/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';
import { useMergedRefs } from '../utils/hooks/useMergedRefs';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/slider.css';
import { Tooltip } from '../Tooltip';
import { Placement } from 'tippy.js';
import { StylingProps } from '../utils/props';

/** Specifies domain of allowable values. */
export interface ValueDomain {
  min: number;
  max: number;
}

/** Determines which segments are shown with color.
 * 'none' - no colored tracks are displayed.
 * 'odd-segments'- colored tracks shown in segments 1,3,5, etc. Default if number of thumbs values are odd.
 * 'even-segments'- colored tracks shown in segments 2,4,6, etc. Default if number of thumbs values are even.
 * 'undefined' - temporary only here because storybook sends in string 'undefined' and not value undefined
 */
export type TrackDisplayMode =
  | 'none'
  | 'odd-segments'
  | 'even-segments'
  | 'undefined';

/** The interaction mode. Default is 1. Possible values:
 * 'allow-crossing' - allows thumb to cross other thumbs. Default.
 * 'step-separated'- keeps the thumb from crossing and separated by a step.
 */
export type ThumbMoveMode = 'allow-crossing' | 'step-separated';

/** Local Context set up by Slider and provided to children */
interface SliderContextProps {
  readonly values: number[];
  readonly step: number;
  readonly trackDisplayMode: TrackDisplayMode;
  readonly railDomain: ValueDomain;
  readonly thumbMode: ThumbMoveMode;
  readonly toolTipPosition: Placement;
  readonly setThumbMoveIndex: (index: number) => void;
  readonly setThumbValue: (index: number, value: number) => void;
  readonly toolTipFunction?: (val: number, step: number) => string;
  readonly hideTooltip: boolean;
}

const SliderContext = React.createContext<SliderContextProps>({
  values: [],
  step: 1,
  trackDisplayMode: 'none',
  hideTooltip: false,
  railDomain: { min: 0, max: 100 },
  thumbMode: 'allow-crossing',
  toolTipPosition: 'top',
  setThumbMoveIndex: () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  },
  setThumbValue: () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  },
});

const useSliderContext = (): SliderContextProps => {
  return React.useContext(SliderContext);
};

/** Private Utility Functions */
function clamp(val: number, min: number, max: number) {
  return val > max ? max : val < min ? min : val;
}

function getPercentageOfRectangle(rect: DOMRect, pointer: number) {
  const position = clamp(pointer, rect.left, rect.right);
  return (position - rect.left) / rect.width;
}

function getAllowableThumbRange(
  thumbMode: ThumbMoveMode,
  values: number[],
  index: number,
  railDomain: ValueDomain,
  step: number,
) {
  if (thumbMode === 'step-separated') {
    const min = index === 0 ? railDomain.min : values[index - 1] + step;
    const max =
      index < values.length - 1 ? values[index + 1] - step : railDomain.max;
    return [min, max];
  }
  return [railDomain.min, railDomain.max];
}

function getClosestValueIndex(values: number[], pointerValue: number) {
  if (1 === values.length) {
    return 0;
  }
  const distances = values.map((value) => Math.abs(value - pointerValue));
  const smallest = Math.min(...distances);
  return distances.indexOf(smallest);
}

function getDefaultTrackDisplay(
  trackDisplayMode?: TrackDisplayMode,
  values?: number[],
): TrackDisplayMode {
  const numValues = values?.length ?? 0;
  if (undefined !== trackDisplayMode) {
    return trackDisplayMode;
  }

  return numValues % 2 ? 'odd-segments' : 'even-segments';
}

function roundValueToClosestStep(value: number, step: number) {
  const positiveStep = Math.abs(step);
  return Math.round(value / positiveStep) * step;
}

function formatNumberValue(value: number, step: number) {
  if (Number.isInteger(step)) {
    return value.toFixed(0);
  }
  const stepString = step.toString();
  const decimalIndex = stepString.indexOf('.');
  const numDecimals = stepString.length - (decimalIndex + 1);
  return value.toFixed(numDecimals);
}

function generateSegments(
  values: number[],
  min: number,
  max: number,
): { left: number; right: number }[] {
  const segments: { left: number; right: number }[] = [];
  let lastValue = min;
  for (let i = 0; i < values.length; i++) {
    segments.push({ left: lastValue, right: values[i] });
    lastValue = values[i];
  }
  segments.push({ left: lastValue, right: max });

  return segments;
}

const TrackSegment = ({
  leftPercent,
  rightPercent,
}: {
  leftPercent: number;
  rightPercent: number;
}) => {
  return (
    <div
      className='iui-slider-track'
      style={{ left: `${leftPercent}%`, right: `${rightPercent}%` }}
    />
  );
};

/** Track is component shown a colored segments above Rail. */
const Track = () => {
  const { railDomain, trackDisplayMode, values } = useSliderContext();
  const [currentValues, setCurrentValues] = React.useState(
    [...values].sort((a, b) => a - b),
  );
  React.useEffect(() => {
    const newValues = [...values];
    newValues.sort((a, b) => a - b);
    setCurrentValues(newValues);
  }, [values]);

  const segments = React.useMemo(
    () => generateSegments(currentValues, railDomain.min, railDomain.max),
    [currentValues, railDomain],
  );

  return (
    <>
      {'none' !== trackDisplayMode &&
        segments.map((segment, index) => {
          const leftPercent =
            (100.0 * (segment.left - railDomain.min)) /
            (railDomain.max - railDomain.min);
          let rightPercent =
            (100.0 * (segment.right - railDomain.min)) /
            (railDomain.max - railDomain.min);
          rightPercent = 100.0 - rightPercent;
          if ('odd-segments' === trackDisplayMode && 0 !== (index + 1) % 2) {
            return (
              <TrackSegment
                key={index}
                leftPercent={leftPercent}
                rightPercent={rightPercent}
              />
            );
          } else if (
            'even-segments' === trackDisplayMode &&
            0 === (index + 1) % 2
          ) {
            return (
              <TrackSegment
                key={index}
                leftPercent={leftPercent}
                rightPercent={rightPercent}
              />
            );
          }
          return null;
        })}
    </>
  );
};

/** Thumb is a local component used to show and modify the values maintained by the [[Slider]].
 * Only one Thumb can be active at a time. A Thumb is made active when the user selects
 * it with pointer. Whenever a Thumb is active, focused, or hovered its tooltip is shown. */
const Thumb = ({ index, isActive }: { index: number; isActive: boolean }) => {
  const {
    hideTooltip,
    railDomain,
    setThumbMoveIndex,
    toolTipFunction,
    step,
    values,
    setThumbValue,
    thumbMode,
    toolTipPosition,
  } = useSliderContext();
  const thumbRef = React.useRef<HTMLDivElement>(null);
  const handleOnKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const [minVal, maxVal] = getAllowableThumbRange(
        thumbMode,
        values,
        index,
        railDomain,
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
    [thumbMode, values, index, railDomain, step, setThumbValue],
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
    (val: number): string => {
      return toolTipFunction
        ? toolTipFunction(val, step)
        : formatNumberValue(val, step);
    },
    [toolTipFunction, step],
  );

  const currentValue = values[index];
  const tooltipContent = generateTooltip(currentValue);
  const leftPercent =
    (100.0 * (currentValue - railDomain.min)) /
    (railDomain.max - railDomain.min);

  const thumbClassNames = React.useMemo(
    () => cx('iui-slider-thumb', isActive && 'iui-active'),
    [isActive],
  );
  const showTooltip = !hideTooltip && (isActive || hasFocus || isHovered);
  return (
    <Tooltip
      visible={showTooltip}
      content={tooltipContent}
      placement={toolTipPosition}
    >
      <div
        ref={thumbRef}
        style={{ left: `${leftPercent}%` }}
        className={thumbClassNames}
        role='slider'
        tabIndex={0}
        aria-valuemin={railDomain.min}
        aria-valuenow={railDomain.max}
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

/** Properties for [[Slider]] component */
export type SliderProps = {
  /**
   * Set focus on first thumb in slider element.
   * @default false
   */
  setFocus?: boolean;
  /**
   * Allowable range of values.
   */
  railDomain: ValueDomain;
  /**
   * Array of one or more values to show.
   */
  values: number[];
  /**
   *  Determines which segments are shown with color.
   * 'none' - no colored tracks are displayed.
   * 'odd-segments'- colored tracks shown in segments 1,3,5, etc. Default if number of thumbs values are odd.
   * 'even-segments'- colored tracks shown in segments 2,4,6, etc. Default if number of thumbs values are even.
   * @default undefined
   */
  trackDisplayMode?: TrackDisplayMode;
  /**
   * Step increment controls what values are allowed and the amount the value will change when left and
   * right arrows are pressed when a Thumb has focus.
   * @default 1
   */
  step?: number;
  /** Forces control to be displayed in a disabled state where no interactive value changes are allowed.
   *  @default false
   */
  disabled?: boolean;
  /** Hide tooltip that is displayed by default.
   *  @default false
   */
  readonly hideTooltip?: boolean;

  /** Optional tooltip function that can be supplied to generate tooltip text.
   *  @default undefined
   */
  toolTipFunction?: (val: number, step: number) => string;
  /** Preferred position of tooltip relative to thumb.
   * @default 'top'
   */
  toolTipPosition?: Placement;
  /** Optional array of labels that will be used to determine number of ticks displayed and their labels.
   * Tick are spaced evenly across width of Slider.
   * @default undefined
   */
  tickLabels?: (string | JSX.Element)[];
  /** Optional label for the minimum value. If undefined then the min railDomain value is shown. Use empty string for no label.
   * @default undefined
   */
  minLabel?: string | JSX.Element;
  /** Optional label for the maximum value. If undefined then the max railDomain value is shown. Use empty string for no label.
   * @default undefined
   */
  maxLabel?: string | JSX.Element;
  /** Defines the allowed behavior when moving Thumbs when multiple Thumbs are shown.  Possible values:
   * 'allow-crossing' - allows thumb to cross other thumbs. Default.
   * 'step-separated'- keeps the thumb from crossing and separated by a step.
   * @default 'allow-crossing'
   */
  thumbMode?: ThumbMoveMode;
  /** optional props to include on slider container */
  containerProps?: StylingProps;
  /**
   * Callback fired when the value(s) of the slider has changed. This will receive changes at
   * the end of a slide as well as changes from clicks on rails and tracks.
   */
  onChange?: (values: ReadonlyArray<number>) => void;
  /** Callback fired when the value(s) of the slider are internally updated during operations
   * like dragging a Thumb. Use this callback with caution as a high-volume updates will occur
   * when dragging.
   */
  onUpdate?: (values: ReadonlyArray<number>) => void;
};

/**
 * Slider component that display Thumbs for each value specified along a Rail.
 * @example
 * <Slider values={[10]} railDomain={{ min: 0, max: 60 }} disabled />
 * <Slider values={[10, 20]} railDomain={{ min: 0, max: 50 }} step={2} />
 * <Slider values={[10, 20, 30, 40]} railDomain={{ min: 0, max: 60 }} setFocus thumbMode='step-separated' />
 */
export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (props, ref) => {
    const {
      railDomain,
      values,
      step = 1,
      setFocus = false,
      toolTipFunction,
      disabled = false,
      tickLabels,
      minLabel,
      maxLabel,
      trackDisplayMode = undefined,
      thumbMode = 'allow-crossing',
      toolTipPosition = 'top',
      containerProps = {},
      onChange,
      onUpdate,
      hideTooltip = false,
    } = props;

    const {
      className: containerClassName,
      ...remainingContainerProps
    } = containerProps;

    const [currentValues, setCurrentValues] = React.useState(values);
    React.useEffect(() => {
      setCurrentValues(values);
    }, [values]);

    const [minValueLabel, setMinValueLabel] = React.useState(minLabel);
    React.useEffect(() => {
      setMinValueLabel(minLabel ?? railDomain.min.toString());
    }, [minLabel, railDomain]);

    const [maxValueLabel, setMaxValueLabel] = React.useState(maxLabel);
    React.useEffect(() => {
      setMaxValueLabel(maxLabel ?? railDomain.max.toString());
    }, [maxLabel, railDomain]);

    const [trackDisplay, settTackDisplay] = React.useState<TrackDisplayMode>(
      () => getDefaultTrackDisplay(trackDisplayMode, currentValues),
    );
    React.useEffect(() => {
      settTackDisplay(getDefaultTrackDisplay(trackDisplayMode, currentValues));
    }, [trackDisplayMode, currentValues]);

    useTheme();
    const containerRef = React.useRef<HTMLDivElement>(null);
    const refs = useMergedRefs<HTMLDivElement>(containerRef, ref);

    React.useEffect(() => {
      if (containerRef.current && setFocus) {
        const firstThumb = containerRef.current?.querySelector(
          '.iui-slider-thumb',
        );
        firstThumb && (firstThumb as HTMLElement).focus();
      }
    }, [setFocus]);

    const [activeMoveIndex, setActiveMoveIndex] = React.useState<
      number | undefined
    >(undefined);

    const updateThumbValue = React.useCallback(
      (
        event: PointerEvent,
        callback?: (values: ReadonlyArray<number>) => void,
      ) => {
        if (containerRef.current && undefined !== activeMoveIndex) {
          const percent = getPercentageOfRectangle(
            containerRef.current.getBoundingClientRect(),
            event.pageX,
          );
          let pointerValue =
            railDomain.min + (railDomain.max - railDomain.min) * percent;
          pointerValue = roundValueToClosestStep(pointerValue, step);

          const [minVal, maxVal] = getAllowableThumbRange(
            thumbMode,
            currentValues,
            activeMoveIndex,
            railDomain,
            step,
          );

          pointerValue = clamp(pointerValue, minVal, maxVal);
          const newValues = [...currentValues];
          newValues[activeMoveIndex] = pointerValue;
          setCurrentValues(newValues);
          callback && callback(newValues);
        }
      },
      [activeMoveIndex, railDomain, step, thumbMode, currentValues],
    );

    const handlePointerMove = React.useCallback(
      (event: PointerEvent): void => {
        updateThumbValue(event, onUpdate);
      },
      [onUpdate, updateThumbValue],
    );

    // function called by Thumb keyboard processing
    const setThumbValue = React.useCallback(
      (index: number, value: number) => {
        const newValues = [...currentValues];
        newValues[index] = value;
        setCurrentValues(newValues);
        onChange && onChange(newValues);
      },
      [currentValues, onChange],
    );

    const setThumbMoveIndex = React.useCallback((index: number) => {
      setActiveMoveIndex(index);
    }, []);

    const handlePointerUp = React.useCallback(
      (event: PointerEvent) => {
        updateThumbValue(event, onChange);
        setActiveMoveIndex(undefined);
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
          let pointerValue =
            railDomain.min + (railDomain.max - railDomain.min) * percent;
          pointerValue = roundValueToClosestStep(pointerValue, step);

          const closestValueIndex = getClosestValueIndex(
            currentValues,
            pointerValue,
          );
          const [minVal, maxVal] = getAllowableThumbRange(
            thumbMode,
            currentValues,
            closestValueIndex,
            railDomain,
            step,
          );

          pointerValue = clamp(pointerValue, minVal, maxVal);
          const newValues = [...currentValues];
          newValues[closestValueIndex] = pointerValue;
          setCurrentValues(newValues);
          onChange && onChange(newValues);
        }
      },
      [railDomain, step, currentValues, thumbMode, onChange],
    );

    React.useEffect(() => {
      const ownerDoc = containerRef.current?.ownerDocument;
      ownerDoc?.addEventListener('pointermove', handlePointerMove);
      ownerDoc?.addEventListener('pointerup', handlePointerUp);
      return () => {
        ownerDoc?.removeEventListener('pointermove', handlePointerMove);
        ownerDoc?.removeEventListener('pointerup', handlePointerUp);
      };
    }, [handlePointerMove, handlePointerUp]);

    const componentContainerClassNames = cx(
      'iui-slider-component-container',
      disabled && 'iui-disabled',
      containerClassName,
    );

    return (
      <SliderContext.Provider
        value={{
          values: currentValues,
          trackDisplayMode: trackDisplay,
          toolTipFunction,
          railDomain,
          setThumbMoveIndex,
          setThumbValue,
          step,
          thumbMode,
          toolTipPosition,
          hideTooltip,
        }}
      >
        <div
          className={componentContainerClassNames}
          {...remainingContainerProps}
        >
          {minValueLabel && (
            <span className='iui-slider-min'>{minValueLabel}</span>
          )}
          <div
            ref={refs}
            className='iui-slider-container'
            onPointerDown={handlePointerDownOnSlider}
          >
            <div className='iui-slider-rail' />
            {currentValues.map((_, index) => (
              <Thumb
                key={index}
                index={index}
                isActive={activeMoveIndex === index}
              />
            ))}
            <Track />
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
      </SliderContext.Provider>
    );
  },
);

export default Slider;
