/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { findHeadings } from '@jsdevtools/rehype-toc/lib/fiind-headings.js';
import { createTOC } from '@jsdevtools/rehype-toc/lib/create-toc.js';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx({
      rehypePlugins: {
        extends: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }], rehypeToc],
      },
    }),
  ],
  // markdown: {
  //   rehypePlugins: ['rehype-slug', ['rehype-autolink-headings', { behavior: 'wrap' }], rehypeToc],
  // },
  vite: {
    legacy: {
      buildSsrCjsExternalHeuristics: true,
    },
    ssr: {
      noExternal: ['@fontsource/noto-sans'],
    },
  },
  legacy: {
    // astroFlavoredMarkdown: true,
  },
});

/**
 * Customized version of rehype-toc to place table-of-contents as a sibling of main content.
 */
function rehypeToc() {
  const tocOptions = {
    nav: true,
    headings: ['h2', 'h3', 'h4'],
    position: 'afterbegin',
    cssClasses: {},
  } as any;

  return (tree) => {
    const headings = findHeadings(tree, tocOptions);
    if (!headings.length) return tree;
    const toc = createTOC(
      [
        {
          type: 'element',
          tagName: 'h2',
          properties: { id: 'overview' },
          children: [{ type: 'text', value: 'Overview' } as any],
        },
        ...headings,
      ],
      tocOptions
    );
    return {
      type: 'root',
      children: [
        // <aside> element with toc
        {
          type: 'element',
          tagName: 'aside',
          children: [toc],
          properties: { className: 'toc-wrapper', 'aria-label': 'Table of contents' },
        },
        // <main> element for the actual page content
        {
          type: 'element',
          tagName: 'main',
          children: tree?.children,
        },
      ],
    };
  };
}
