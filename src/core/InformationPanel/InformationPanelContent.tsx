/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import cx from 'classnames';
import React from 'react';
import {
  CommonProps,
  useMergedRefs,
  useResizeObserver,
  useTheme,
} from '../utils';
import '@itwin/itwinui-css/css/information-panel.css';

export type InformationPanelContentProps = {
  /**
   * Maximum width of the panel below which layout will shift from two columns to one,
   * i.e. label and input will display on separate lines for widths lower than this value.
   *
   * If set to 0, the layout will always be two columns.
   * If set to `Number.POSITIVE_INFINITY`, the layout will always be one column.
   *
   * @default 0
   */
  responsiveBreakpoint?: number;
  /**
   * Content of the component.
   * Should be pairs of `Label` and input components.
   */
  children: React.ReactNode;
} & Omit<CommonProps, 'title'>;

/**
 * The `InformationPanelContent` component should be used inside `InformationPanelBody`
 * to style rows of key/value pairs, where the key is represented by a `Label` component
 * and the value can be any input element (including readonly inputs for non-modifiable fields).
 *
 * By default, the pairs are displayed as a two-column grid so the label and input are next to each other,
 * but if the panel is resized to a narrow width, the label and input will display as stacked.
 *
 * You can use multiple `InformationPanelContent` instances inside one `InformationPanelBody`; this is
 * useful when you want to show other content, e.g. separate headings for different sections of key/value pairs.
 *
 * @example
 * <InformationPanelContent>
 *   <Label htmlFor='name-input'>File name</Label>
 *   <Input id='name-input' value='Alpha.mp3' />
 *
 *   <Label htmlFor='year-input'>Year</Label>
 *   <Input id='year-input' value='2021' />
 *
 *   <Label htmlFor='path-input'>Path</Label>
 *   <Input id='path-input' value='/Shared/Music/' />
 * </InformationPanelContent>
 */
export const InformationPanelContent = (
  props: InformationPanelContentProps,
) => {
  const { className, responsiveBreakpoint = 0, children, ...rest } = props;

  useTheme();

  const [resizeRef, contentWidth] = useResizableWidth();

  return (
    <div
      className={cx(
        'iui-information-body-content',
        { 'iui-inline': contentWidth >= responsiveBreakpoint },
        className,
      )}
      ref={resizeRef}
      {...rest}
    >
      {children}
    </div>
  );
};

const useResizableWidth = (disabled = false) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [contentWidth, setContentWidth] = React.useState(
    () => ref.current?.getBoundingClientRect().width ?? 0,
  );

  const updateWidth = React.useCallback(
    ({ width }) => setContentWidth(width),
    [],
  );

  const [resizeRef] = useResizeObserver(updateWidth);
  const refs = useMergedRefs(ref, !disabled ? resizeRef : undefined);

  return [refs, contentWidth] as const;
};

export default InformationPanelContent;
