/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';
import { IconButton } from '../Buttons';
import { CommonProps, useMergedRefs, useTheme } from '../utils';
import SvgCloseSmall from '@itwin/itwinui-icons-react/cjs/icons/CloseSmall';
import '@itwin/itwinui-css/css/information-panel.css';

export type InformationPanelProps = {
  /**
   * Label shown at the top of the panel.
   */
  label?: React.ReactNode;
  /**
   * Is the panel open?
   * @default false
   */
  isOpen?: boolean;
  /**
   * Orientation of the panel.
   * @default 'vertical'
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * Callback fired when close icon is clicked.
   */
  onClose?: () => void;
  /**
   * Custom header action buttons shown alongside the close button.
   * @example
   * [
   *   <IconButton styleType='borderless' onClick={() => {}}><SvgEdit /></IconButton>,
   *   <IconButton styleType='borderless' onClick={() => {}}><SvgDelete /></IconButton>,
   * ]
   */
  headerActions?: React.ReactNode[];
  /**
   * Set to false to make the panel non-resizable.
   * @default true
   */
  resizable?: boolean;
  /**
   * Content of the panel.
   */
  children?: React.ReactNode;
} & Omit<CommonProps, 'title'>;

/**
 * InformationPanel provides a way to view additional content or attributes
 * without leaving the main content area (e.g. Table).
 *
 * The panel appears as an overlay on top of the main content.
 * @example
 * <InformationPanelWrapper>
 *   <Table ... /> // component to overlay
 *   <InformationPanel
 *     label={<Text variant='subheading'>InfoPanel heading</Text>}
 *     onClose={() => {}}
 *     isOpen={true}
 *   >
 *     <span>Info panel content</span>
 *   </InformationPanel>
 * </InformationPanelWrapper>
 */
export const InformationPanel = React.forwardRef<
  HTMLDivElement,
  InformationPanelProps
>((props, ref) => {
  const {
    className,
    label,
    isOpen = false,
    onClose,
    orientation = 'vertical',
    headerActions,
    resizable = true,
    children,
    style,
    ...rest
  } = props;

  useTheme();

  const infoPanelRef = React.useRef<HTMLDivElement>(null);
  const refs = useMergedRefs(ref, infoPanelRef);

  const [width, setWidth] = React.useState<number | undefined>();
  const [height, setHeight] = React.useState<number | undefined>();

  const onResize = React.useCallback(
    (e: PointerEvent) => {
      e.preventDefault();
      if (!infoPanelRef.current) {
        return;
      }
      const { right, bottom } = infoPanelRef.current.getBoundingClientRect();
      if (orientation === 'vertical') {
        setWidth(right - e.clientX);
      } else {
        setHeight(bottom - e.clientY);
      }
    },
    [orientation],
  );

  return (
    <div
      className={cx(
        'iui-information-panel',
        {
          'iui-right': orientation === 'vertical',
          'iui-bottom': orientation === 'horizontal',
          'iui-visible': isOpen,
        },
        className,
      )}
      style={{ ...style, width, height }}
      ref={refs}
      {...rest}
    >
      {resizable && (
        <div
          className='iui-resizer'
          onPointerDown={(e) => {
            if (!infoPanelRef.current) {
              return;
            }
            if (e.button != undefined && e.button !== 0) {
              return;
            }
            e.preventDefault();
            e.stopPropagation();
            infoPanelRef.current.ownerDocument.addEventListener(
              'pointermove',
              onResize,
            );
            infoPanelRef.current.ownerDocument.addEventListener(
              'pointerup',
              () =>
                infoPanelRef.current?.ownerDocument.removeEventListener(
                  'pointermove',
                  onResize,
                ),
            );
          }}
        >
          <div className='iui-resizer-bar' />
        </div>
      )}
      <div className='iui-information-header'>
        <span className='iui-information-header-label'>{label}</span>
        <div className='iui-information-header-actions'>
          {headerActions}
          <IconButton
            styleType='borderless'
            onClick={onClose}
            aria-label='Close'
          >
            <SvgCloseSmall aria-hidden />
          </IconButton>
        </div>
      </div>
      <div className='iui-information-body'>{children}</div>
    </div>
  );
});

export default InformationPanel;
