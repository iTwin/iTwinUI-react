---
title: ComboBox
description: 
layout: ~/layouts/MainLayout.astro
setup: |
  import PropsTable from '~/components/PropsTable.astro';
  import LiveExample from '~/components/LiveExample.astro';
propsPath: '@itwin/itwinui-react/esm/core/ComboBox/ComboBox.d.ts'
exampleCodeFile1: ComboBox.example.tsx
---

<p>{frontmatter.description}</p>

<LiveExample src={frontmatter.exampleCodeFile1} />

## Props

<PropsTable path={frontmatter.propsPath} />
