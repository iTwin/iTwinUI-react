---
title: Badge
description: A colorful visual indicator for categorizing items
layout: ../../layouts/MainLayout.astro
setup: |
  import PropsTable from '/src/components/PropsTable.astro';
  import LiveExample from '/src/components/LiveExample.astro';
propsPath: '@itwin/itwinui-react/esm/core/Badge/Badge.d.ts'
exampleCode1: |
  import { Badge } from '@itwin/itwinui-react';

  export default function App() {
    return <Badge backgroundColor='skyblue'>Badge</Badge>;
  }
---

<p>{frontmatter.description}</p>

<LiveExample code={frontmatter.exampleCode1} />

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed flavum. Stridore nato, Alcandrumque desint ostendit derat, longoque, eadem
iunxit miserum pedum pectora. Liberat sine pignus cupit, ferit mihi venias
amores, et quod, maduere haec _gravi_ contentusque heros. Qui suae attonitas.

_Acta caelo_ ego, hoc illi ferroque, qui fluitque Achillis deiecerat erat
inhospita arasque ad sume et aquis summo. Fugerat ipse iam. Funeris Iuno Danaos
est inroravere aurum foret nati aeque tetigisset! Esse ad tibi queritur Sol sub
est pugno solitoque movet coercuit solent caput te?

## Props

<PropsTable path={frontmatter.propsPath} />
