/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import '@itwin/itwinui-css/css/table.css';
import { useTheme } from '../../utils/hooks/useTheme';
import { Button } from '../../Buttons';

export type FilterButtonBarProps = {
  children?: React.ReactNode;
  setFilter: () => void;
  clearFilter: () => void;
};

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
