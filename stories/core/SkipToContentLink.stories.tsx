/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import {
  SkipToContentLink,
  SkipToContentLinkProps,
  SkipToContentMarker,
  SkipToContentMarkerProps,
  Header,
  HeaderLogo,
  HeaderBreadcrumbs,
  HeaderButton,
  Tile,
  MenuItem,
} from '../../src/core';
import SvgImodelHollow from '@itwin/itwinui-icons-react/cjs/icons/ImodelHollow';

export default {
  component: SkipToContentLink,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
  },
  title: 'Core/SkipToContentLink',
} as Meta<SkipToContentLinkProps>;

export const Basic: Story<SkipToContentLinkProps> = () => {
  return (
    <>
      <SkipToContentLink />
      <Header
        appLogo={
          <HeaderLogo
            logo={
              <svg
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path d='m12.6 13.4c-1.2-1.5-2.1-3.1-2.4-5.5-2.7 3.9-4.6 4.2-5.7 2.4l-1.2 5.7h-2.2l3.5-14.1 1.8-.4c-.1.5-1.4 6.2.6 7 2 .7 4.6-8.5 4.6-8.5l2.2.4c-1.6 3.7-1.6 7.6 1.1 10.9l-2.3 2.1' />
              </svg>
            }
          />
        }
        breadcrumbs={
          <HeaderBreadcrumbs
            items={[
              <HeaderButton
                key='project'
                name='Project A (Super Size Edition)'
                description='YJC-2249'
                onClick={() => action('Clicked on the Project')()}
              />,
              <HeaderButton
                key='iModel'
                name='iModel B'
                onClick={() => action('Clicked on the iModel')()}
              />,
              <HeaderButton key='version' name='Version C' isActive={true} />,
            ]}
          />
        }
      />
      <SkipToContentMarker />
      <Tile
        name='Example of main content'
        thumbnail={<SvgImodelHollow />}
        moreOptions={[
          <MenuItem key={1} onClick={action('clicked item 1')}>
            Item 1
          </MenuItem>,
          <MenuItem key={2} onClick={action('clicked item 2')}>
            Item 2
          </MenuItem>,
        ]}
      />
    </>
  );
};

// Basic.args = {
//   mainContentLink: '#',
// };
