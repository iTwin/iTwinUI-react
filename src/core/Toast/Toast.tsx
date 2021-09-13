/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Transition } from 'react-transition-group';
import SvgCloseSmall from '@itwin/itwinui-icons-react/cjs/icons/CloseSmall';
import cx from 'classnames';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/toast-notification.css';
import { IconButton } from '../Buttons';
import { getWindow, StatusIconMap } from '../utils/common';
import { CommonProps } from '../utils/props';

export type ToastCategory =
  | 'informational'
  | 'negative'
  | 'positive'
  | 'warning';

export type ToastProps = {
  /**
   * Internal id of the toast. Used for closing the toasts.
   */
  id: number;
  /**
   * Content of the Toast message
   */
  content: React.ReactNode;
  /**
   * Category of the Toast, which controls the border color, as well as the category icon.
   */
  category: ToastCategory;
  /**
   * The Type of the Toast.
   * Persisting Toasts will not be closed automatically, and will contain a close button.
   * Temporary Toasts will automatically close after 7 seconds and will not contain a close button.
   * @default 'temporary'
   */
  type?: 'persisting' | 'temporary';
  /**
   * Boolean indicating when the toast is visible.
   * When false, will close the Toast and call onRemove when finished closing.
   */
  isVisible: boolean;
  /**
   * Duration of the toast in millisecond.
   * @default 7000
   */
  duration?: number;
  /**
   * Boolean indicating when the close button is visible.
   * When false, the toast will not have any close button.
   */
  hasCloseButton?: boolean;
  /**
   * A Callback that can be used to add additional information to a Toast
   */
  link?: { onClick: () => void; title: string };
  /**
   * Function called when the toast is all the way closed.
   */
  onRemove?: () => void;
  /**
   * Element to which the toast will animate out to.
   */
  animateOutTo?: HTMLElement | null;
};

/**
 * Generic Toast Notification Component
 * @example
 * <Toast type='persisting' content='Job processing completed.' category='positive' link={{onClick:() => {alert('Link callback')}, title:'View the report'}} />
 * <Toast type='temporary' content='Processing completed.' category='positive' />
 * <Toast type='temporary' content='26 files are available for synchronization.' category='informational' />
 * <Toast type='persisting' content='Job processing error.' category='negative' />
 */
export const Toast = (props: ToastProps) => {
  const {
    content,
    category,
    type = 'temporary',
    isVisible,
    link,
    duration = 7000,
    hasCloseButton,
    onRemove,
    animateOutTo,
  } = props;

  useTheme();
  const closeTimeout = React.useRef(0);

  const [visible, setVisible] = React.useState(isVisible);
  const [height, setHeight] = React.useState(0);
  const [animationX, setAnimationX] = React.useState(0);
  const [animationY, setAnimationY] = React.useState(0);
  const [animateOutX, setAnimateOutX] = React.useState(0);
  const [animateOutY, setAnimateOutY] = React.useState(0);

  React.useEffect(() => {
    if (type === 'temporary') {
      setCloseTimeout(duration);
    }

    return () => {
      clearCloseTimeout();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, type]);

  React.useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  const close = () => {
    clearCloseTimeout();
    setVisible(false);
  };

  const setCloseTimeout = (timeout: number) => {
    const definedWindow = getWindow();
    if (!definedWindow) {
      return;
    }

    closeTimeout.current = definedWindow.setTimeout(() => {
      close();
    }, timeout);
  };

  const clearCloseTimeout = () => {
    getWindow()?.clearTimeout(closeTimeout.current);
  };

  const onRef = (ref: HTMLDivElement) => {
    if (ref) {
      const { height } = ref.getBoundingClientRect();
      setHeight(height);
    }
  };

  const onAnimationRef = (ref: HTMLDivElement) => {
    if (ref && animateOutTo) {
      const { x, y } = ref.getBoundingClientRect();
      setAnimateOutX(animateOutTo.getBoundingClientRect().x);
      setAnimateOutY(animateOutTo.getBoundingClientRect().y);
      setAnimationX(x);
      setAnimationY(y);
    }
  };

  const style = { height, marginBottom: visible ? '0' : -height };

  const _transition = {
    '--x-translate': `${animateOutX - animationX}px`,
    '--y-translate': `${animateOutY - animationY}px`,
    ...style,
  };

  return (
    <Transition
      timeout={{ enter: 240, exit: 120 }}
      in={visible}
      appear={true}
      unmountOnExit={true}
      onExited={onRemove}
    >
      {(state) => (
        <div
          ref={onAnimationRef}
          className={cx('iui-toast-all', `iui-toast-${state}`)}
          style={_transition}
        >
          <div ref={onRef}>
            <ToastPresentation
              category={category}
              content={content}
              link={link}
              type={type}
              hasCloseButton={hasCloseButton}
              onClose={close}
            />
          </div>
        </div>
      )}
    </Transition>
  );
};

export type ToastPresentationProps = Omit<
  ToastProps,
  'duration' | 'id' | 'isVisible' | 'onRemove'
> & { onClose?: () => void } & CommonProps;

/**
 * The presentational part of a toast notification, without any animation or logic.
 * @private
 */
export const ToastPresentation = (props: ToastPresentationProps) => {
  const {
    content,
    category,
    type = 'temporary',
    link,
    hasCloseButton,
    onClose,
    className,
    ...rest
  } = props;

  const StatusIcon = StatusIconMap[category];

  return (
    <div className={cx(`iui-toast iui-${category}`, className)} {...rest}>
      <div className='iui-status-area'>
        {<StatusIcon className='iui-icon' />}
      </div>
      <div className='iui-message'>{content}</div>
      {link && (
        <a className='iui-anchor' onClick={link.onClick}>
          {link.title}
        </a>
      )}
      {(type === 'persisting' || hasCloseButton) && (
        <IconButton
          size='small'
          styleType='borderless'
          onClick={onClose}
          aria-label='Close'
        >
          <SvgCloseSmall />
        </IconButton>
      )}
    </div>
  );
};

export default Toast;
