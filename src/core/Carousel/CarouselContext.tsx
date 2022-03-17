/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

export const CarouselContext = React.createContext<
  | {
      /**
       * Stateful index of currently active slide.
       */
      currentIndex: number;
      /**
       * State updater for currentIndex.
       */
      setCurrentIndex: (index: number | ((old: number) => void)) => void;
      /**
       * Number of slides in the carousel. Gets set in CarouselSlider for reading in CarouselDots.
       */
      slideCount: number;
      /**
       * State updater for slideCount.
       */
      setSlideCount: (length: number | ((old: number) => void)) => void;
      /**
       * Stateful value of the left/right arrow keys currently pressed.
       */
      keysPressed: Record<string, boolean>;
      /**
       * Prefix used for setting id for internal carousel components.
       */
      idPrefix: string;
      /**
       * Ref object used for preventing intersection observer callback from interfering with manual slide updates.
       *
       * Should be set to true when updating slides using any of the buttons, and should be set to false when the manual slide update completes.
       */
      isManuallyUpdating: React.MutableRefObject<boolean>;
    }
  | undefined
>(undefined);
