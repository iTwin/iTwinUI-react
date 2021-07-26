/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { useTheme } from '../utils/hooks/useTheme';
import { CommonProps } from '../utils/props';
import SvgChevronRight from '@itwin/itwinui-icons-react/cjs/icons/ChevronRight';
import '@itwin/itwinui-css/css/breadcrumbs.css';
import { useResizeObserver } from '../utils/hooks/useResizeObserver';
import { useMergedRefs } from '../utils/hooks/useMergedRefs';

export type BreadcrumbsProps = {
  /**
   * Index of the currently active breadcrumb.
   * Defaults to last index in the items array.
   */
  currentIndex?: number;
  /**
   * Breadcrumb items.
   */
  items: JSX.Element[];
  /**
   * Specify a custom separator element to show between breadcrumb items.
   * Defaults to the `SvgChevronRight` icon.
   */
  separator?: React.ReactNode;
} & Omit<CommonProps, 'title'>;

/**
 * A breadcrumb trail is used as a navigational aid to help users keep track
 * of their place in the application. It is often placed before a page's main content.
 *
 * For accessibility, make sure to provide an aria-label describing the type of navigation.
 *
 * @example
 * <Breadcrumbs
 *   items={[
 *     <BreadcrumbItem onClick={() => {}}>Root</BreadcrumbItem>,
 *     <BreadcrumbItem onClick={() => {}}>Item 1</BreadcrumbItem>,
 *     <BreadcrumbItem onClick={() => {}}>Item 2</BreadcrumbItem>,
 *   ]}
 * />
 />
 */
export const Breadcrumbs = React.forwardRef(
  (props: BreadcrumbsProps, ref: React.RefObject<HTMLElement>) => {
    const {
      items,
      currentIndex = items.length - 1,
      separator,
      className,
      ...rest
    } = props;

    useTheme();

    const breadcrumbsRef = React.useRef<HTMLElement>(null);

    const [visibleCount, setVisibleCount] = React.useState(items.length);
    const overflowBreakpoints = React.useRef<number[]>([]);

    const [breadcrumbsWidth, setBreadcrumbsWith] = React.useState<number>(0);
    const updateBreadcrumbsWidth = React.useCallback(
      ({ width }) => setBreadcrumbsWith(width),
      [],
    );
    const [resizeRef] = useResizeObserver(updateBreadcrumbsWidth);
    const refs = useMergedRefs(breadcrumbsRef, resizeRef, ref);

    React.useLayoutEffect(() => {
      if (!breadcrumbsRef.current) {
        return;
      }

      // hide items when there's no space available
      if (
        breadcrumbsRef.current.offsetWidth <
          breadcrumbsRef.current.scrollWidth &&
        visibleCount > 1
      ) {
        setVisibleCount((count) => count - 1);
        overflowBreakpoints.current.push(breadcrumbsRef.current.offsetWidth);
      }
      // restore items when there's enough space again
      else if (
        overflowBreakpoints.current.length > 0 &&
        breadcrumbsRef.current.offsetWidth >
          overflowBreakpoints.current[overflowBreakpoints.current.length - 1]
      ) {
        setVisibleCount((count) => count + 1);
        overflowBreakpoints.current.pop();
      }
    }, [breadcrumbsWidth, items, visibleCount]);

    const Separator = () => (
      <li className='iui-breadcrumbs-separator' aria-hidden>
        {separator ?? <SvgChevronRight />}
      </li>
    );

    const ListItem = ({
      item,
      index,
    }: {
      item: JSX.Element;
      index: number;
    }) => (
      <li
        className={cx('iui-breadcrumbs-item', {
          'iui-current': currentIndex === index,
        })}
      >
        {React.cloneElement(item, {
          'aria-current':
            item.props['aria-current'] ?? currentIndex === index
              ? 'location'
              : undefined,
        })}
      </li>
    );

    return (
      <nav
        className={cx('iui-breadcrumbs', className)}
        ref={refs}
        aria-label='Breadcrumb'
        {...rest}
      >
        <ol className='iui-breadcrumbs-list'>
          {<ListItem item={items[0]} index={0} />}
          {visibleCount > 1 && <Separator />}
          {items.length - visibleCount > 0 && (
            <>
              <li className='iui-breadcrumbs-item'>
                <span className='iui-ellipsis'>…</span>
              </li>
              <Separator />
            </>
          )}
          {items.slice(items.length - visibleCount + 1).map((item, _index) => {
            const index = 1 + (items.length - visibleCount) + _index;
            return (
              <React.Fragment key={index}>
                <ListItem item={item} index={index} />
                {index < items.length - 1 && <Separator />}
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    );
  },
);

export default Breadcrumbs;
