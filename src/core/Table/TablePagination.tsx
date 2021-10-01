/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import '@itwin/itwinui-css/css/table.css';
import { useTheme } from '../utils/hooks/useTheme';
import { IconButton } from '../Buttons/IconButton';
import SvgChevronLeft from '@itwin/itwinui-icons-react/cjs/icons/ChevronLeft';
import SvgChevronRight from '@itwin/itwinui-icons-react/cjs/icons/ChevronRight';
import { ButtonGroup } from '../ButtonGroup';
import { Button, ButtonProps } from '../Buttons/Button';
import { useOverflow } from '../utils/hooks/useOverflow';
import { getBoundedValue } from '../utils/common';
import { ProgressRadial } from '../ProgressIndicators';
import { TableProps } from '.';
import { DropdownButton } from '../Buttons';
import { MenuItem } from '../Menu';
import { CommonProps } from '../utils/props';

const defaultLocalization = {
  rowsPerPageLabel: (size: number) => `${size} per page`,
  currentRowsInfoLabel: (
    startIndex: number,
    endIndex: number,
    totalRows: number,
    isLoading: boolean,
  ) =>
    isLoading
      ? `${startIndex}-${endIndex}…`
      : `${startIndex}-${endIndex} of ${totalRows}`,
};

export type TablePaginationProps = {
  /**
   * The zero-based index of the current page.
   */
  currentPage: number;
  /**
   * Total number of rows.
   */
  totalRowsCount: number;
  /**
   * Number of rows per page.
   */
  pageSize: number;
  /**
   * Callback when page is changed.
   */
  onPageChange: (page: number) => void;
  /**
   * Callback when page size is changed.
   */
  setPageSize: (size: number) => void;
  /**
   * Modify the density of the pagination (adjusts the height).
   * @default 'default'
   */
  density?: TableProps['density'];
  /**
   * Control whether focusing tabs (using arrow keys) should automatically select them.
   * Use 'manual' if tab panel content is not preloaded.
   * @default 'auto'
   */
  focusActivationMode?: 'auto' | 'manual';
  /**
   * Flag whether data is still loading and total rows count is not known.
   * @default false
   */
  isLoading?: boolean;
  /**
   * Array of possible page size options. When provided then shows current rows info and page size selection.
   */
  rowsPerPage?: number[];
  /**
   * Object of functions to localize pagination labels.
   */
  localization?: {
    /**
     * Function that returns page size selection label.
     * @default (size: number) => `${size} per page`
     */
    rowsPerPageLabel?: (size: number) => string;
    /**
     * Function that returns currently visible rows info.
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
    currentRowsInfoLabel?: (
      startIndex: number,
      endIndex: number,
      totalRows: number,
      isLoading: boolean,
    ) => string;
  };
} & Omit<CommonProps, 'title'>;

export const TablePagination = (props: TablePaginationProps) => {
  const {
    currentPage,
    totalRowsCount,
    pageSize,
    onPageChange,
    focusActivationMode = 'auto',
    isLoading = false,
    density = 'default',
    rowsPerPage,
    setPageSize,
    localization,
    className,
    style,
    ...rest
  } = props;

  useTheme();

  const localizationFunctions = { ...defaultLocalization, ...localization };

  const pageListRef = React.useRef<HTMLDivElement | null>(null);

  const [focusedIndex, setFocusedIndex] = React.useState<number>(currentPage);
  React.useEffect(() => {
    setFocusedIndex(currentPage);
  }, [currentPage]);

  const buttonSize: ButtonProps['size'] =
    density != 'default' ? 'small' : undefined;

  const pageButton = React.useCallback(
    (index: number, tabIndex = index === focusedIndex ? 0 : -1) => (
      <Button
        key={index}
        styleType='borderless'
        className={cx({ 'iui-active': index === currentPage })}
        style={{ transition: 'none' }}
        onClick={() => onPageChange(index)}
        aria-current={index === currentPage}
        tabIndex={tabIndex}
        size={buttonSize}
      >
        {index + 1}
      </Button>
    ),
    [buttonSize, currentPage, focusedIndex, onPageChange],
  );

  const totalPagesCount = Math.ceil(totalRowsCount / pageSize);
  const pageList = React.useMemo(
    () =>
      [...Array(totalPagesCount).fill(null)].map((_, index) =>
        pageButton(index),
      ),
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
      setFocusedIndex(newFocusedIndex);

      const buttonToFocus = Array.from(
        pageListRef.current?.querySelectorAll('.iui-button') ?? [],
      ).find(
        (el) => el.textContent?.trim() === (newFocusedIndex + 1).toString(),
      );
      (buttonToFocus as HTMLButtonElement | undefined)?.focus();

      if (focusActivationMode === 'auto') {
        onPageChange(newFocusedIndex);
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

  const ellipsis = <span className='iui-ellipsis iui-small'>…</span>;

  return (
    <div className={cx('iui-paginator', className)} style={style} {...rest}>
      <div className='iui-left' />
      <div className='iui-center' style={{ minWidth: 0 }} ref={overflowRef}>
        <IconButton
          styleType='borderless'
          disabled={currentPage === 0 || hasNoRows}
          onClick={() => onPageChange(currentPage - 1)}
          size={buttonSize}
        >
          <SvgChevronLeft />
        </IconButton>
        <ButtonGroup onKeyDown={onKeyDown} ref={pageListRef}>
          {hasNoRows ? (
            <Button styleType='borderless' disabled size={buttonSize}>
              1
            </Button>
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
          size={buttonSize}
        >
          <SvgChevronRight />
        </IconButton>
      </div>
      <div className='iui-right'>
        {rowsPerPage && !!totalRowsCount && (
          <DropdownButton
            styleType='borderless'
            size={buttonSize}
            menuItems={(close) =>
              rowsPerPage.map((size) => (
                <MenuItem
                  key={size}
                  isSelected={size === pageSize}
                  onClick={() => {
                    close();
                    setPageSize(size);
                  }}
                >
                  {localizationFunctions.rowsPerPageLabel(size)}
                </MenuItem>
              ))
            }
          >
            {localizationFunctions.currentRowsInfoLabel(
              currentPage * pageSize + 1,
              (currentPage + 1) * pageSize,
              totalRowsCount,
              isLoading,
            )}
          </DropdownButton>
        )}
      </div>
    </div>
  );
};

export default TablePagination;
