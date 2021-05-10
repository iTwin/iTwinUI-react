/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import '@itwin/itwinui-css/css/table.css';
import { useTheme } from '../../utils/hooks/useTheme';
import { Button } from '../../Buttons';

export type FilterButtonBarProps = {
  /**
   * Additional content that you want to be shown on the right of the buttons.
   */
  children?: React.ReactNode;
  /**
   * Callback used for Filter button click.
   */
  setFilter: () => void;
  /**
   * Callback used for Clear button click.
   */
  clearFilter: () => void;
};

/**
 * Button bar component that should be used in a filter. It already has Filter and Clear buttons.
 * @example
 * <FilterButtonBar setFilter={() => setFilter(text)} clearFilter={clearFilter} />
 */
export const FilterButtonBar = (props: FilterButtonBarProps) => {
  const { children, setFilter, clearFilter } = props;

  useTheme();

  return (
    <div className='iui-button-bar'>
      {children}
      <Button styleType='high-visibility' onClick={setFilter}>
        Filter
      </Button>
      <Button onClick={clearFilter}>Clear</Button>
    </div>
  );
};
