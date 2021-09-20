/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CSSTransition } from 'react-transition-group';
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
  const [animateOutX, setAnimateOutX] = React.useState(0);
  const [animateOutY, setAnimateOutY] = React.useState(0);
  // ref of current toast
  const thisElement = React.useRef<HTMLDivElement>(null);

  //variable for margin bottom
  const [marginBottom, setMarginBottom] = React.useState(0);

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
    // if we don't have animateOutTo point and not isVisible, set negative margin to move other toasts up.
    // Close all and close on toasts with no anchor.
    !isVisible && !animateOutTo && setMarginBottom(-height);
    setVisible(isVisible);
  }, [isVisible, animateOutTo, setMarginBottom, height]);

  const close = () => {
    clearCloseTimeout();

    // Recalculating toast animation x and y when close button is clicked or toast gets timeout.
    if (thisElement.current) {
      calculateOutAnimation(thisElement.current);
    }
    // move element up when this element is closed.
    setMarginBottom(-height);
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

  const calculateOutAnimation = (node: HTMLElement) => {
    // calculation translate x and y pixels.
    let translateX = 0;
    let translateY = 0;
    if (animateOutTo && node) {
      const { x: startX, y: startY } = node.getBoundingClientRect(); // current element
      const { x: endX, y: endY } = animateOutTo.getBoundingClientRect(); // anchor point
      translateX = endX - startX;
      translateY = endY - startY;
    }
    setAnimateOutX(translateX);
    setAnimateOutY(translateY);
  };

  return (
    <CSSTransition
      timeout={{ enter: 240, exit: animateOutTo ? 500 : 120 }}
      in={visible}
      appear={true}
      unmountOnExit={true}
      onExited={onRemove}
      onEnter={(node) => {
        node.style.transform = 'translateY(15%)';
        node.style.transitionTimingFunction = 'ease';
      }}
      onEntered={(node) => {
        node.style.transform = 'translateY(0)';
      }}
      onExit={(node) => {
        // calculate translate x and y before closing
        calculateOutAnimation(node);
      }}
      onExiting={(node) => {
        node.style.transform = animateOutTo
          ? `scale(0.9) translate(${animateOutX}px,${animateOutY}px)`
          : `scale(0.9)`;
        node.style.opacity = '0';
        node.style.transitionDuration = animateOutTo ? '400ms' : '120ms';
        node.style.transitionTimingFunction = 'cubic-bezier(0.4, 0, 1, 1)';
      }}
    >
      {
        <div
          ref={thisElement}
          className='iui-toast-all'
          style={{
            height,
            marginBottom: marginBottom,
          }}
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
      }
    </CSSTransition>
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
