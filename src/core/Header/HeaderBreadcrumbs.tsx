/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import SvgChevronRight from '@itwin/itwinui-icons-react/cjs/icons/ChevronRight';

import React from 'react';

import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/header.css';

export type HeaderBreadcrumbsTranslations = {
  /**
   * `nav` element aria-label.
   */
  breadcrumbs: string;
};

export type HeaderBreadcrumbsProps = {
  /**
   * Array of elements, chevrons will be put between them.
   * (expects HeaderButton[])
   * @example
   * [
   *  <HeaderButton key={...} ... />
   *  <HeaderButton key={...} ... />
   * ]
   */
  items: React.ReactNode[];
  /**
   * Provide localized strings.
   */
  translatedStrings?: HeaderBreadcrumbsTranslations;
};

const defaultTranslations: HeaderBreadcrumbsTranslations = {
  breadcrumbs: 'breadcrumbs',
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
  const { items, translatedStrings } = props;
  const breadcrumbsTranslations = {
    ...defaultTranslations,
    ...translatedStrings,
  };

  useTheme();
  return (
    <nav aria-label={breadcrumbsTranslations.breadcrumbs}>
      {items.reduce(
        (previous: React.ReactNode[], current, index) => [
          ...previous,
          current,
          index !== items.length - 1 && (
            <SvgChevronRight
              key={`chevron${index}`}
              aria-hidden
              className='iui-chevron'
            />
          ),
        ],
        [],
      )}
    </nav>
  );
};

export default HeaderBreadcrumbs;
