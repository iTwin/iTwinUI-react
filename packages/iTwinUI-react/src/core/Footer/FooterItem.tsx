/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useTheme } from '../utils';
import cx from 'classnames';
import '@itwin/itwinui-css/css/footer.css';

export type FooterItemProps = {
  /**
   * Url of the item.
   */
  url?: string;
  /**
   * Title of the item.
   */
  title?: string;
  /**
   * Content of the footer item. If provided, `title` and `url` props are ignored.
   */
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithRef<'li'>, 'children'>;

/**
 * Footer item. Recommended to use with `Footer`.
 */
export const FooterItem = (props: FooterItemProps) => {
  const { url, title, children, className, ...rest } = props;
  useTheme();

  return (
    <li className={cx('iui-legal-footer-item', className)} {...rest}>
      {children ? (
        children
      ) : url ? (
        <a href={url} target='_blank' rel='noreferrer'>
          {title}
        </a>
      ) : (
        title
      )}
    </li>
  );
};

export default FooterItem;
