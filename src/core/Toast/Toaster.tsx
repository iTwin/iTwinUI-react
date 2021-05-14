/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom';
import { getContainer } from '../utils/common';
import { ToastCategory, ToastProps } from './Toast';
import { ToastMaster } from './ToastMaster';

const TOASTS_CONTAINER_ID = 'iui-toasts-container';

export type ToastOptions = Omit<
  ToastProps,
  'category' | 'isVisible' | 'id' | 'content'
>;

export default class Toaster {
  private toasts: ToastProps[] = [];

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

  private createToast(
    content: React.ReactNode,
    category: ToastCategory,
    settings?: ToastOptions,
  ) {
    const lastId = this.toasts[0]?.id ?? 0;
    const currentId = lastId + 1;
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

    this.updateView();
  }

  private removeToast(id: number) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
    this.updateView();
  }

  private updateView() {
    ReactDOM.render(
      <ToastMaster toasts={this.toasts} />,
      getContainer(TOASTS_CONTAINER_ID),
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
