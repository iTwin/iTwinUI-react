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
  return (
    <>
      <SkipToContentLink />
      <Body>
        This is not the main content. Press&nbsp;
        <Kbd>tab</Kbd>&nbsp;to see skip-to-content-link component. You might
        need to click on the top of the page or the URL first. Press&nbsp;
        <Kbd>&crarr;</Kbd>
        &nbsp;after focusing on skip-to-content-link to skip to the main content
        below. <Anchor href='#'>This link will be skipped.</Anchor> <br />
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
          This is the main content. Focus will be directed here from the
          skip-to-content-link component.&nbsp;
          <Anchor href='#'>Tab again to focus on this link.</Anchor>
          &nbsp;
        </Body>
      </div>
    </>
  );
};

export const WithChildren: Story<SkipToContentLinkProps> = () => {
  return (
    <>
      <SkipToContentLink>Skip to main content (translated)</SkipToContentLink>
      <Body>
        This is not the main content. Press&nbsp;
        <Kbd>tab</Kbd>&nbsp;to see skip-to-content-link component. You might
        need to click on the top of the page or the URL first. Press&nbsp;
        <Kbd>&crarr;</Kbd>
        &nbsp;after focusing on skip-to-content-link to skip to the main content
        below. <Anchor href='#'>This link will be skipped.</Anchor> <br />
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
            This is the main content. Focus will be directed here from the
            skip-to-content-link component.&nbsp;
            <Anchor href='#'>Tab again to focus on this link.</Anchor>
            &nbsp;
          </Body>
        </div>
      </SkipToContentMarker>
    </>
  );
};

export const NoMarker: Story<SkipToContentLinkProps> = () => {
  return (
    <>
      <SkipToContentLink href='#main-content-id' />
      <Body>
        This is not the main content. Press&nbsp;
        <Kbd>tab</Kbd>&nbsp;to see skip-to-content-link component. You might
        need to click on the top of the page or the URL first. Press&nbsp;
        <Kbd>&crarr;</Kbd>
        &nbsp;after focusing on skip-to-content-link to skip to the main content
        below. <Anchor href='#'>This link will be skipped.</Anchor> <br />
        <em>
          Note that because of constraints with storybook, the link will open a
          new tab.
        </em>
      </Body>
      <div
        style={{
          border: 'solid 1px var(--iui-color-background-border)',
          height: 1000,
          padding: '11px 12px',
        }}
        id='main-content-id'
      >
        <Body>
          This is the main content. Focus will be directed here from the
          skip-to-content-link component.&nbsp;
          <Anchor href='#'>Tab again to focus on this link.</Anchor>
          &nbsp;
        </Body>
      </div>
    </>
  );
};
