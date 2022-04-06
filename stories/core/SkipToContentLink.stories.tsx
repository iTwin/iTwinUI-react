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
  Header,
  HeaderLogo,
  HeaderBreadcrumbs,
  HeaderButton,
  Body,
  Kbd,
  Anchor,
} from '../../src/core';
import { CreeveyStoryParams } from 'creevey';

export default {
  component: SkipToContentLink,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
  },
  title: 'Core/SkipToContentLink',
  parameters: {
    creevey: {
      captureElement: null,
      tests: {
        async open() {
          const body = await this.browser.findElement({ css: '.iui-body' });
          await body.sendKeys(this.keys.TAB);
          const opened = await this.takeScreenshot();
          await this.expect({ opened }).to.matchImages();
        },
      },
    } as CreeveyStoryParams,
  },
} as Meta<SkipToContentLinkProps>;

export const Basic: Story<SkipToContentLinkProps> = () => {
  React.useEffect(() => {
    window.frameElement?.setAttribute('Name', 'storybook-iframe');
  }, []);

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
        style={{
          marginBottom: 22,
        }}
      />
      <Body>
        This is not the main content. Press&nbsp;
        <Kbd>tab</Kbd>&nbsp;to see skip-to-content-link component. You might
        need to click on the top of the page or the URL first. Press&nbsp;
        <Kbd>&crarr;</Kbd>
        &nbsp;after focusing on skip-to-content-link to skip to the main content
        below. <br />
        <em>
          Note that because of constraints with storybook, the link will open a
          new tab.
        </em>
      </Body>
      <SkipToContentMarker />
      <div
        style={{
          border: 'solid 1px var(--iui-color-background-border)',
          height: 1000,
          padding: '11px 12px',
        }}
      >
        <Body>
          This is the main content.&nbsp;
          <Anchor href='#'>This is a link that directs to this page.</Anchor>
          &nbsp;Tab again to focus on the preceding link.
        </Body>
      </div>
    </>
  );
};

export const WithChildren: Story<SkipToContentLinkProps> = () => {
  React.useEffect(() => {
    window.frameElement?.setAttribute('Name', 'storybook-iframe');
  }, []);

  return (
    <>
      <SkipToContentLink>Skip to main content (translated)</SkipToContentLink>
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
        style={{
          marginBottom: 22,
        }}
      />
      <Body>
        This is not the main content. Press&nbsp;
        <Kbd>tab</Kbd>&nbsp;to see skip-to-content-link component. You might
        need to click on the top of the page or the URL first. Press&nbsp;
        <Kbd>&crarr;</Kbd>
        &nbsp;after focusing on skip-to-content-link to skip to the main content
        below. <br />
        <em>
          Note that because of constraints with storybook, the link will open a
          new tab.
        </em>
      </Body>
      <SkipToContentMarker>
        <div
          style={{
            border: 'solid 1px var(--iui-color-background-border)',
            height: 1000,
            padding: '11px 12px',
          }}
        >
          <Body>
            This is the main content.&nbsp;
            <Anchor href='#'>This is a link that directs to this page.</Anchor>
            &nbsp;Tab again to focus on the preceding link.
          </Body>
        </div>
      </SkipToContentMarker>
    </>
  );
};
