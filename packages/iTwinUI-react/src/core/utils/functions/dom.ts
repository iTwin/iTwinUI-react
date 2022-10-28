/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/

/**
 * Get the container as a child of body, or create one if it doesn't exist.
 * Mostly used for dynamic components like Modal or Toast.
 *
 * @param containerId id of the container to find or create
 * @param root Root element under which the container will be created.
 * Can be changed if the container should be in a different scoped root or document (e.g. in popup).
 */
export const getContainer = (
  containerId: string,
  root = getDocument()?.body || null,
) => {
  let container = root?.querySelector(`#${containerId}`) ?? undefined;
  if (container == null && !!root) {
    container = root.ownerDocument.createElement('div');
    container.setAttribute('id', containerId);
    container.innerHTML = `<style>:where(.iui-dialog-wrapper) { z-index: 999; }</style>`; // TODO: move to css
    root.appendChild(container);
  }
  return container;
};

/**
 * Get document if it is defined.
 * Used to support SSR/SSG applications.
 */
export const getDocument = () => {
  return typeof document === 'undefined' ? undefined : document;
};

/**
 * Get window if it is defined.
 * Used to support SSR/SSG applications.
 */
export const getWindow = () => {
  return typeof window === 'undefined' ? undefined : window;
};
