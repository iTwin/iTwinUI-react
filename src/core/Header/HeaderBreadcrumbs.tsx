/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import '@itwin/itwinui-css/css/header.css';
import SvgChevronRight from '@itwin/itwinui-icons-react/cjs/icons/ChevronRight';

import React from 'react';

import { useTheme } from '../utils/hooks/useTheme';

export type HeaderBreadcrumbsProps = {
  items: React.ReactNode[];
};

/**
 * Header breadcrumbs, adds chevron between each provided items.
 * @example
 * <HeaderBreadcrumbs
 *   items={[
 *     <HeaderButton key={...} ... />
 *     <HeaderButton key={...} ... />
 *   ]}
 * />
 */
export const HeaderBreadcrumbs = (props: HeaderBreadcrumbsProps) => {
  const { items } = props;

  useTheme();
  return (
    <>
      {items.reduce(
        (previous: React.ReactNode[], current, index) => [
          ...previous,
          current,
          index !== items.length - 1 && (
            <SvgChevronRight
              key={`chevron${index}`}
              aria-hidden={true}
              className='iui-chevron'
            />
          ),
        ],
        [],
      )}
    </>
  );
};

export default HeaderBreadcrumbs;
