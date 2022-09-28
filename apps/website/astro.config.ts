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
  integrations: [react(), mdx()],
  markdown: {
    syntaxHighlight: 'prism',
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }], rehypeToc],
  },
  vite: {
    ssr: {
      noExternal: [
        '@fontsource/noto-sans',
        '@codesandbox/sandpack-themes',
        '@codesandbox/sandpack-react',
        '@codesandbox/sandpack-client',
        '@tippyjs/react',
        // '@itwin/itwinui-icons-react',
        // '@itwin/itwinui-illustrations-react',
        // 'react',
        // 'react-dom',
      ],
    },
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

  return (tree, file) => {
    let showTOC = true;

    // ideally we would check if the frontmatter has a toc: false, but that is not available
    // so we will hardcode the files we don't want a toc for
    if (['index.mdx', 'variables.mdx'].includes(file.history[0].split('/').pop()!)) {
      showTOC = false;
    }

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
        showTOC && {
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
      ].filter(Boolean),
    };
  };
}
