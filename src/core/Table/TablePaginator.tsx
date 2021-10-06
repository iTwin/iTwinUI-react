/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import '@itwin/itwinui-css/css/table.css';
import SvgChevronLeft from '@itwin/itwinui-icons-react/cjs/icons/ChevronLeft';
import SvgChevronRight from '@itwin/itwinui-icons-react/cjs/icons/ChevronRight';
import { ButtonGroup } from '../ButtonGroup';
import { IconButton, Button, DropdownButton } from '../Buttons';
import { ProgressRadial } from '../ProgressIndicators';
import { MenuItem } from '../Menu';
import { CommonProps, getBoundedValue, useTheme, useOverflow } from '../utils';
import { TablePaginatorRendererProps } from './Table';

const defaultLocalization = {
  rowsPerPageLabel: (size: number) => `${size} per page`,
  rangeLabel: (
    startIndex: number,
    endIndex: number,
    totalRows: number,
    isLoading: boolean,
  ) =>
    isLoading
      ? `${startIndex}-${endIndex}…`
      : `${startIndex}-${endIndex} of ${totalRows}`,
  previousPage: 'Previous page',
  nextPage: 'Next page',
  goToPageLabel: (page: number) => `Go to page ${page}`,
} as const;

export type TablePaginatorProps = {
  /**
   * Control whether focusing tabs (using arrow keys) should automatically select them.
   * Use 'manual' if tab panel content is not preloaded.
   * @default 'auto'
   */
  focusActivationMode?: 'auto' | 'manual';
  /**
   * Array of possible page size options. When provided then shows current rows info and page size selection.
   */
  rowsPerPage?: number[];
  /**
   * Object of functions to localize pagination labels.
   */
  localization?: {
    /**
     * Function that returns a label for the page size selector.
     * @default (size: number) => `${size} per page`
     */
    rowsPerPageLabel?: (size: number) => string;
    /**
     * Function that returns a label for the range of rows within the current page and the length of the whole data.
     * @default
     *  (
     *  startIndex: number,
     *  endIndex: number,
     *  totalRows: number,
     *  isLoading: boolean,
     *  ) =>
     *    isLoading
     *      ? `${startIndex}-${endIndex}…`
     *      : `${startIndex}-${endIndex} of ${totalRows}`;
     */
    rangeLabel?: (
      startIndex: number,
      endIndex: number,
      totalRows: number,
      isLoading: boolean,
    ) => string;
    /**
     * A label for previous page button. Used for accessibility attribute.
     * @default 'Previous page'
     */
    previousPage?: string;
    /**
     * A label for next page button. Used for accessibility attribute.
     * @default 'Next page'
     */
    nextPage?: string;
    /**
     * Function that returns a label for page selector buttons. Used for accessibility attribute.
     * @default (page: number) => `Go to page ${page}`
     */
    goToPageLabel?: (page: number) => string;
  };
} & TablePaginatorRendererProps &
  Omit<CommonProps, 'title'>;

/**
 * Table paginator component. Recommended to pass to the `Table` as `paginatorRenderer` prop.
 * @example
 * <Table
 *   // ...
 *   paginatorRenderer={(props) => <TablePaginator {...props} />}
 * />
 */
export const TablePaginator = (props: TablePaginatorProps) => {
  const {
    currentPage,
    totalRowsCount,
    pageSize,
    onPageChange,
    focusActivationMode = 'auto',
    isLoading = false,
    density = 'default',
    rowsPerPage,
    onPageSizeChange,
    localization: userLocalization,
    className,
    ...rest
  } = props;

  useTheme();

  const localization = React.useMemo(
    () => ({ ...defaultLocalization, ...userLocalization }),
    [userLocalization],
  );

  const pageListRef = React.useRef<HTMLDivElement | null>(null);

  const [focusedIndex, setFocusedIndex] = React.useState<number>(currentPage);
  React.useEffect(() => {
    setFocusedIndex(currentPage);
  }, [currentPage]);

  const size = density != 'default' ? 'small' : undefined;

  const pageButton = React.useCallback(
    (index: number, tabIndex = index === focusedIndex ? 0 : -1) => (
      <Button
        key={index}
        styleType='borderless'
        className={cx({ 'iui-active': index === currentPage })}
        style={{ transition: 'none' }}
        onClick={() => onPageChange(index)}
        aria-current={index === currentPage}
        aria-label={localization.goToPageLabel(index + 1)}
        tabIndex={tabIndex}
        size={size}
      >
        {index + 1}
      </Button>
    ),
    [focusedIndex, currentPage, localization, size, onPageChange],
  );

  const totalPagesCount = Math.ceil(totalRowsCount / pageSize);
  const pageList = React.useMemo(
    () =>
      new Array(totalPagesCount)
        .fill(null)
        .map((_, index) => pageButton(index)),
    [pageButton, totalPagesCount],
  );
  const [overflowRef, visibleCount] = useOverflow(pageList);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // alt + arrow keys are used by browser/assistive technologies
    if (event.altKey) {
      return;
    }

    const focusPage = (delta: number) => {
      const newFocusedIndex = getBoundedValue(
        focusedIndex + delta,
        0,
        totalPagesCount - 1,
      );

      if (focusActivationMode === 'auto') {
        onPageChange(newFocusedIndex);
      } else {
        setFocusedIndex(newFocusedIndex);
        const buttonToFocus = Array.from(
          pageListRef.current?.querySelectorAll('.iui-button') ?? [],
        ).find(
          (el) => el.textContent?.trim() === (newFocusedIndex + 1).toString(),
        );
        (buttonToFocus as HTMLButtonElement | undefined)?.focus();
      }
    };

    switch (event.key) {
      case 'ArrowRight': {
        focusPage(+1);
        event.preventDefault();
        break;
      }
      case 'ArrowLeft': {
        focusPage(-1);
        event.preventDefault();
        break;
      }
      case 'Enter':
      case ' ':
      case 'Spacebar': {
        event.preventDefault();
        if (focusActivationMode === 'manual') {
          onPageChange(focusedIndex);
        }
        break;
      }
      default:
        break;
    }
  };

  const halfVisibleCount = Math.floor(visibleCount / 2);
  let startPage = focusedIndex - halfVisibleCount;
  let endPage = focusedIndex + halfVisibleCount + 1;
  if (startPage < 0) {
    endPage = Math.min(totalPagesCount, endPage + Math.abs(startPage));
    startPage = 0;
  }
  if (endPage > totalPagesCount) {
    startPage = Math.max(0, startPage - (endPage - totalPagesCount));
    endPage = totalPagesCount;
  }

  const hasNoRows = totalPagesCount === 0;

  const ellipsis = (
    <span className={cx('iui-ellipsis', { 'iui-small': size === 'small' })}>
      …
    </span>
  );

  return (
    <div className={cx('iui-paginator', className)} {...rest}>
      <div className='iui-left' />
      <div className='iui-center' style={{ minWidth: 0 }} ref={overflowRef}>
        <IconButton
          styleType='borderless'
          disabled={currentPage === 0 || hasNoRows}
          onClick={() => onPageChange(currentPage - 1)}
          size={size}
          aria-label={localization.previousPage}
        >
          <SvgChevronLeft />
        </IconButton>
        <ButtonGroup onKeyDown={onKeyDown} ref={pageListRef}>
          {hasNoRows ? (
            <>
              {!isLoading && (
                <Button styleType='borderless' disabled size={size}>
                  1
                </Button>
              )}
              {isLoading && <ProgressRadial indeterminate size='small' />}
            </>
          ) : (
            <>
              {startPage !== 0 && visibleCount > 1 && (
                <>
                  {pageButton(0, 0)}
                  {ellipsis}
                </>
              )}
              {[
                ...pageList.slice(startPage, focusedIndex),
                ...pageList.slice(focusedIndex, endPage),
              ]}
              {endPage !== totalPagesCount && visibleCount > 1 && !isLoading && (
                <>
                  {ellipsis}
                  {pageButton(totalPagesCount - 1, 0)}
                </>
              )}
              {isLoading && visibleCount > 1 && (
                <>
                  {ellipsis}
                  <ProgressRadial indeterminate size='small' />
                </>
              )}
            </>
          )}
        </ButtonGroup>
        <IconButton
          styleType='borderless'
          disabled={currentPage === totalPagesCount - 1 || hasNoRows}
          onClick={() => onPageChange(currentPage + 1)}
          size={size}
          aria-label={localization.nextPage}
        >
          <SvgChevronRight />
        </IconButton>
      </div>
      <div className='iui-right'>
        {rowsPerPage && onPageSizeChange && !!totalRowsCount && (
          <DropdownButton
            styleType='borderless'
            size={size}
            menuItems={(close) =>
              rowsPerPage.map((size) => (
                <MenuItem
                  key={size}
                  isSelected={size === pageSize}
                  onClick={() => {
                    close();
                    onPageSizeChange(size);
                  }}
                >
                  {localization.rowsPerPageLabel(size)}
                </MenuItem>
              ))
            }
          >
            {localization.rangeLabel(
              currentPage * pageSize + 1,
              Math.min(totalRowsCount, (currentPage + 1) * pageSize),
              totalRowsCount,
              isLoading,
            )}
          </DropdownButton>
        )}
      </div>
    </div>
  );
};

export default TablePaginator;
