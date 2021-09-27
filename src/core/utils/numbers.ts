/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { nanoid } from 'nanoid';
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
  if (getWindow()?.crypto) {
    return nanoid(length);
  }
  /** uuid function from https://gist.github.com/jed/982883 */
  const getUuid = (a = '') =>
    a
      ? ((Number(a) ^ (Math.random() * 16)) >> (Number(a) / 4)).toString(16)
      : `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`.replace(/[018]/g, getUuid);
  return getUuid();
};
