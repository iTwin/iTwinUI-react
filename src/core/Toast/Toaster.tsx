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
  order?: 'descending' | 'ascending';
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
    order: 'bottom-to-top',
    placement: 'top-end',
  };

  public setSettings(settings: ToasterSettings) {
    settings.placement ??= this.settings.placement;
    settings.order ??= settings.placement.startsWith('top')
      ? 'top-to-bottom'
      : 'bottom-to-top';
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
    if (this.settings.order === 'top-to-bottom') {
      this.toasts = [
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
        ...this.toasts,
      ];
    } else if (this.settings.order === 'bottom-to-top') {
      this.toasts = [
        ...this.toasts,
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
      ];
    }
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
