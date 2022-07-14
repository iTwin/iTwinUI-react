---
title: Alert
description: A small box to quickly grab user attention and communicate a brief message
layout: ../../layouts/MainLayout.astro
setup: |
  import PropsTable from '/src/components/PropsTable.astro';
  import LiveExample from '/src/components/LiveExample.astro';
propsPath: '@itwin/itwinui-react/esm/core/Alert/Alert.d.ts'
exampleCode1: |
  import { Alert } from '@itwin/itwinui-react';
  
  export default function App() {
    return (
      <Alert
        type='positive'
        onClose={() => console.log('CLOSED')}
        clickableText='Learn more'
        style={{ minWidth: 350 }}
      >
        This is an alert
      </Alert>
    );
  }
---

<p>{frontmatter.description}</p>

<LiveExample code={frontmatter.exampleCode1} />

An alert is an element that notifies the user of something important that is not user initiated. If you need to alert the user because of something they did, consider using a toast notification or an inline message. Instead, an alert is used to notify the user of something unrelated to what they just did. Examples of this might be announcing a new feature within the product, or alerting the user of scheduled server maintenance and downtime.

## Appearance

An alert must have a foreground status color. The alert message must be concise, we recommend no more than 256 characters. If you feel the need to explain in further detail, you may use an optional hyperlink at the end of the alert message to explain more on a new page. You may also include an optional close icon (close icon is required for sticky alerts). The following types of alerts are permissible:

### Informational
Default style when there is no defined status for the alert. Inform users about events that they should be aware of, but that are not disruptive to their work.

### Positive
The positive alert is used to inform the user of a positive status.

### Warning
The warning alert is used to inform the user of something that is not currently disruptive to their work, but may be soon or eventually.

### Negative
Use this only when the system is broken. Leave the technical details behind and explain the problem to the user in an easily understood tone. Mention when the problem might get solved, if it applies.

### Multilines
All alerts may support multiple lines if necessary. We recommend keeping it brief and keep the message as concise as possible.

## Placement

The alert notification can display in two different ways:

### Inline
An inline alert appears embedded within the copy of the site as a block element. This means that when the user scrolls, the alert scrolls as well.

Inline alerts can optionally be dismissible. Once the alert is dismissed, the content below it will shift upwards due to the alert no longer consuming space.

### Sticky
A sticky alert appears full width stuck at the top of the window frame. That means if the user scrolls, the alert stays at the top of the frame and as the content scrolls underneath it. A sticky alert must always be dismissible. The alert appears above all other UI elements except for toast notifications and modals.

It is up to the development team wether or not the sticky alert should push the rest of the content down or not. In the examples above, the body content is pushed down because we do not want any of the UI to be covered by the alert. In the example below, if we were to push the content down the iFrame’s height would change, so we chose to overlay the content rather than push it down.

## Props

<PropsTable path={frontmatter.propsPath} />

## Related resources