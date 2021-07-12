/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { TooltipProps } from '../Tooltip';
import { TrackDisplayMode, ThumbMoveMode } from './Slider';

/**
 * Defines shape of Local Context set up by Slider and provided to children.
 */
interface SliderContextProps {
  readonly values: number[];
  readonly step: number;
  readonly trackDisplayMode: TrackDisplayMode;
  readonly min: number;
  readonly max: number;
  readonly thumbMode: ThumbMoveMode;
  readonly setThumbMoveIndex: (index: number) => void;
  readonly setThumbValue: (index: number, value: number) => void;
  readonly tooltipRender?: (val: number, step: number) => React.ReactNode;
  readonly tooltipProps?: Partial<Omit<TooltipProps, 'content' | 'children'>>;
}

/**
 * Internal Context used only by Slider and its child components.
 */
export const SliderContext = React.createContext<SliderContextProps>({
  values: [],
  step: 1,
  trackDisplayMode: 'none',
  min: 0,
  max: 100,
  thumbMode: 'allow-crossing',
  setThumbMoveIndex: () => {
    throw new Error('Not Implemented');
  },
  setThumbValue: () => {
    throw new Error('Not Implemented');
  },
});

/**
 * Internal hook used by Slider's child components.
 */
export const useSliderContext = (): SliderContextProps => {
  return React.useContext(SliderContext);
};
