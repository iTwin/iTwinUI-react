/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import toaster from '.';
import { ToastCategory, ToastProps } from './Toast';
import { ToastOptions } from './Toaster';

const mockOnClick = jest.fn();

function mockedOptions(): ToastOptions {
  return {
    duration: 2000,
    hasCloseButton: true,
    type: 'temporary',
    link: {
      title: 'mockTitle',
      onClick: mockOnClick,
    },
  };
}

function assertAddedToast(
  toast: ToastProps,
  category: ToastCategory,
  content: string,
  id: number,
) {
  expect(toast).toEqual(
    expect.objectContaining({
      ...mockedOptions(),
      id: id,
      content: content,
      isVisible: true,
      category: category,
    }),
  );
}

function assertRemovedToast(
  toast: ToastProps,
  category: ToastCategory,
  content: string,
  id: number,
) {
  expect(toast).toEqual(
    expect.objectContaining({
      ...mockedOptions(),
      id: id,
      content: content,
      isVisible: false,
      category: category,
    }),
  );
}

afterEach(() => {
  toaster['toasts'] = [];
  jest.clearAllMocks();
});

it('should add toast with succuss', () => {
  toaster.positive('mockContent', mockedOptions());
  expect(toaster['toasts'].length).toBe(1);
  assertAddedToast(toaster['toasts'][0], 'positive', 'mockContent', 1);
});

it('should add toast with negative', () => {
  toaster.negative('mockContent', mockedOptions());
  assertAddedToast(toaster['toasts'][0], 'negative', 'mockContent', 1);
});

it('should add toast with informational', () => {
  toaster.informational('mockContent', mockedOptions());
  assertAddedToast(toaster['toasts'][0], 'informational', 'mockContent', 1);
});

it('should add toasts and remove all', () => {
  toaster.informational('mockContent', mockedOptions());
  assertAddedToast(toaster['toasts'][0], 'informational', 'mockContent', 1);

  toaster.positive('mockContent', mockedOptions());
  assertAddedToast(toaster['toasts'][0], 'positive', 'mockContent', 2);

  toaster.closeAll();
  assertRemovedToast(toaster['toasts'][1], 'informational', 'mockContent', 1);
  assertRemovedToast(toaster['toasts'][0], 'positive', 'mockContent', 2);
});
