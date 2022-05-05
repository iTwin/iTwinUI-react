/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from '../../types/toaster';
import { getContainer } from '../utils';
import { ToastCategory, ToastProps } from './Toast';
import { ToastWrapper } from './ToastWrapper';

const TOASTS_CONTAINER_ID = 'iui-toasts-container';

export type ToasterSettings = {
  /**
   * Order of toasts.
   * When set to 'descending', most recent toasts are on top. When set to 'ascending', most recent toasts are on bottom.

   * When `placement` is set to a top value, order defaults to 'descending', otherwise 'ascending'.
   */
  order?: 'descending' | 'ascending';
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
  /**
   * If using React v18, use`ReactDom.createRoot`function to return root and enable v18.
   * Otherwise, old `ReadDom.render` method will be used to render toasts.
   */
  getRoot?: (container: Element | undefined) => Root;
};

export type ToastOptions = Omit<
  ToastProps,
  'category' | 'isVisible' | 'id' | 'content'
>;

export default class Toaster {
  private toasts: ToastProps[] = [];
  private lastId = 0;
  private settings: ToasterSettings = {
    order: 'descending',
    placement: 'top',
  };
  private root: Root | undefined;

  /**
   * Set global Toaster settings for toasts order and placement.
   * Settings will be applied to new toasts on the page.
   */
  public setSettings(newSettings: ToasterSettings) {
    newSettings.placement ??= this.settings.placement;
    newSettings.order ??= newSettings.placement?.startsWith('bottom')
      ? 'ascending'
      : 'descending';
    this.root =
      newSettings?.getRoot?.(getContainer(TOASTS_CONTAINER_ID)) ?? this.root;
    this.settings = newSettings;
  }

  public positive(content: React.ReactNode, options?: ToastOptions) {
    return this.createToast(content, 'positive', options);
  }

  public informational(content: React.ReactNode, options?: ToastOptions) {
    return this.createToast(content, 'informational', options);
  }

  public negative(content: React.ReactNode, options?: ToastOptions) {
    return this.createToast(content, 'negative', options);
  }

  public warning(content: React.ReactNode, options?: ToastOptions) {
    return this.createToast(content, 'warning', options);
  }

  private createToast(
    content: React.ReactNode,
    category: ToastCategory,
    options?: ToastOptions,
  ) {
    ++this.lastId;
    const currentId = this.lastId;
    this.toasts = [
      ...(this.settings.order === 'ascending' ? this.toasts : []),
      {
        ...options,
        content,
        category,
        onRemove: () => {
          this.removeToast(currentId);
          options?.onRemove?.();
        },
        id: currentId,
        isVisible: true,
      },
      ...(this.settings.order === 'descending' ? this.toasts : []),
    ];
    this.updateView();
    return { close: () => this.closeToast(currentId) };
  }

  private removeToast(id: number) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
    this.updateView();
  }

  private updateView() {
    const toastWrapper = (
      <ToastWrapper toasts={this.toasts} placement={this.settings.placement} />
    );
    if (!!this.root) {
      this.root.render(toastWrapper);
      return;
    }

    const container = getContainer(TOASTS_CONTAINER_ID);
    if (!container) {
      return;
    }

    ReactDOM.render(toastWrapper, container);
  }

  private closeToast(toastId: number): void {
    this.toasts = this.toasts.map((toast) => {
      return {
        ...toast,
        isVisible: toast.id !== toastId,
      };
    });
    this.updateView();
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
