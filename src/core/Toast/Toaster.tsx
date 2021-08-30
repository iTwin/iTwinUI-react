/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom';
import { getContainer } from '../utils/common';
import { ToastCategory, ToastProps } from './Toast';
import { ToastWrapper } from './ToastWrapper';

const TOASTS_CONTAINER_ID = 'iui-toasts-container';

export type ToasterSettings = {
  /**
   * Order of toasts.
   * Ascending places toasts from newest to oldest. Descending - from oldest to newest (new toasts appear on the bottom of the list).
   * When placement is set and order not specified, toasts are ordered by placement. Top placement sets order 'ascending', bottom placement sets order 'descending'.
   * @default 'ascending'
   */
  order?: 'ascending' | 'descending';
  /**
   * Placement of toasts.
   * Changes placement of toasts. Start indicates left side of viewport. End - right side of viewport.
   * @default 'top'
   */
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end';
};

export type ToastOptions = Omit<
  ToastProps,
  'category' | 'isVisible' | 'id' | 'content'
>;

export default class Toaster {
  private toasts: ToastProps[] = [];
  private lastId = 0;
  private settings: ToasterSettings = {
    order: 'ascending',
    placement: 'top',
  };

  /**
   * Set Toaster settings for toasts order and placement.
   * Order: ascending or descending.
   * Placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';
   * @param settings
   */
  public setSettings(settings: ToasterSettings) {
    if (!settings.order && settings.placement?.startsWith('top')) {
      settings.order = 'ascending';
    }
    if (!settings.order && settings.placement?.startsWith('bottom')) {
      settings.order = 'descending';
    }
    this.settings = settings;
  }

  public positive(content: React.ReactNode, settings?: ToastOptions): void {
    this.createToast(content, 'positive', settings);
  }

  public informational(
    content: React.ReactNode,
    settings?: ToastOptions,
  ): void {
    this.createToast(content, 'informational', settings);
  }

  public negative(content: React.ReactNode, settings?: ToastOptions): void {
    this.createToast(content, 'negative', settings);
  }

  public warning(content: React.ReactNode, settings?: ToastOptions): void {
    this.createToast(content, 'warning', settings);
  }

  private createToast(
    content: React.ReactNode,
    category: ToastCategory,
    settings?: ToastOptions,
  ) {
    ++this.lastId;
    const currentId = this.lastId;
    this.toasts = [
      ...(this.settings.order === 'descending' ? this.toasts : []),
      {
        ...settings,
        content,
        category,
        onRemove: () => {
          this.removeToast(currentId);
          settings?.onRemove?.();
        },
        id: currentId,
        isVisible: true,
      },
      ...(this.settings.order === 'ascending' ? this.toasts : []),
    ];
    this.updateView();
  }

  private removeToast(id: number) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
    this.updateView();
  }

  private updateView() {
    const container = getContainer(TOASTS_CONTAINER_ID);
    if (!container) {
      return;
    }

    ReactDOM.render(
      <ToastWrapper toasts={this.toasts} placement={this.settings.placement} />,
      container,
    );
  }

  public closeAll(): void {
    this.toasts = this.toasts.map((toast) => {
      return {
        ...toast,
        isVisible: false,
      };
    });
    this.updateView();
  }
}
