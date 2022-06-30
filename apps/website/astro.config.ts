/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    rehypePlugins: [
      'rehype-slug',
      ['rehype-autolink-headings', { behavior: 'wrap' }],
      [
        'rehype-toc',
        {
          headings: ['h1', 'h2', 'h3'],
          customizeTOC: addOverviewToTOC,
        },
      ],
    ],
  },
});

/**
 * Adds "Overview" link at the top of the table of contents.
 * This is useful for scrolling to the introduction section
 * that is not under any heading.
 */
function addOverviewToTOC(nav) {
  const ol = nav.children[0];
  if (ol.children.length === 0) {
    return false;
  }

  return {
    ...nav,
    children: [
      {
        ...ol,
        children: [
          {
            type: 'element',
            tagName: 'li',
            properties: { className: 'toc-item toc-item-h2' },
            children: [
              {
                type: 'element',
                tagName: 'a',
                properties: { href: '#overview', className: 'toc-link toc-link-h1' },
                children: [{ type: 'text', value: 'Overview' }],
              },
            ],
          },
          ...ol.children,
        ],
      },
    ],
  };
}
