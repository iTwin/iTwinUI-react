/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { nanoid } from 'nanoid';
import { nanoid as nonsecureNanoid } from 'nanoid/non-secure';
import { getWindow } from './dom';

/**
 * Return input value bounded by specified range.
 */
export const getBoundedValue = (val: number, min: number, max: number) => {
  return Math.min(max, Math.max(min, val));
};

/**
 * Returns a random value using nanoid (which uses crypto API).
 * Contains IE fallback to return a uuid using Math.random.
 */
export const getRandomValue = (length?: number) => {
  return getWindow()?.crypto ? nanoid(length) : nonsecureNanoid(length);
};
