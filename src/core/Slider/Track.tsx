/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useSliderContext } from './SliderContext';
import { TrackDisplayMode } from './Slider';

function shouldDisplaySegment(segmentIndex: number, mode: TrackDisplayMode) {
  if ('odd-segments' === mode && 0 === (segmentIndex + 1) % 2) {
    return true;
  } else if ('even-segments' === mode && 0 === segmentIndex % 2) {
    return true;
  } else {
    return false;
  }
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

/** Track is component shown a colored segments above Rail. */
export const Track = () => {
  const { min, max, trackDisplayMode, values } = useSliderContext();
  const [currentValues, setCurrentValues] = React.useState(
    [...values].sort((a, b) => a - b),
  );
  React.useEffect(() => {
    const newValues = [...values];
    newValues.sort((a, b) => a - b);
    setCurrentValues(newValues);
  }, [values]);

  const segments = React.useMemo(
    () => generateSegments(currentValues, min, max),
    [currentValues, min, max],
  );

  return (
    <>
      {'none' !== trackDisplayMode &&
        segments.map((segment, index) => {
          const leftPercent = (100.0 * (segment.left - min)) / (max - min);
          let rightPercent = (100.0 * (segment.right - min)) / (max - min);
          rightPercent = 100.0 - rightPercent;
          if (shouldDisplaySegment(index, trackDisplayMode)) {
            return (
              <div
                key={index}
                className='iui-slider-track'
                style={{ left: `${leftPercent}%`, right: `${rightPercent}%` }}
              />
            );
          }
          return null;
        })}
    </>
  );
};
