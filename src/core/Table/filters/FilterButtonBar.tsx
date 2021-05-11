/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import '@itwin/itwinui-css/css/table.css';
import { useTheme } from '../../utils/hooks/useTheme';
import { Button } from '../../Buttons';

export type FilterButtonBarLocalization = {
  filter: string;
  clear: string;
};

const defaultStrings: FilterButtonBarLocalization = {
  filter: 'Filter',
  clear: 'Clear',
};

export type FilterButtonBarProps = {
  /**
   * Additional content that you want to be shown on the left of the buttons.
   */
  children?: React.ReactNode;
  /**
   * Callback used for Filter button click. Should come from `BaseFilter`.
   */
  setFilter: () => void;
  /**
   * Callback used for Clear button click. Should come from `BaseFilter`.
   */
  clearFilter: () => void;
  /**
   * Localized strings used in buttons.
   */
  localization?: FilterButtonBarLocalization;
};

/**
 * Button bar component that should be used in a filter. It already has Filter and Clear buttons.
 * @example
 * <FilterButtonBar setFilter={() => setFilter(text)} clearFilter={clearFilter} />
 */
export const FilterButtonBar = (props: FilterButtonBarProps) => {
  const { children, setFilter, clearFilter, localization } = props;

  const localizedStrings = { ...defaultStrings, ...localization };

  useTheme();

  return (
    <div className='iui-button-bar'>
      {children}
      <Button styleType='high-visibility' onClick={setFilter}>
        {localizedStrings.filter}
      </Button>
      <Button onClick={clearFilter}>{localizedStrings.clear}</Button>
    </div>
  );
};
