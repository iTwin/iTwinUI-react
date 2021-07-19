/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
window.HTMLElement.prototype.scrollIntoView = () => {};

/* ---------------------------------------------------------------------------------------------
 * Below is hack to allow testing of PointerEvent as used in github package
 * https://github.com/pmndrs/use-gesture
 ---------------------------------------------------------------------------------------------*/
/* eslint-disable no-console */
if (window.PointerEvent) {
  console.error('ERROR: patching PointerEvent is no longer necessary');
} else {
  // console.log('Setup: patching PointerEvent');
  window.PointerEvent = window.MouseEvent;
}
