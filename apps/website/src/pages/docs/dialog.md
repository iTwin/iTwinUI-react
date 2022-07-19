---
title: Dialog
description: Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
layout: ~/layouts/MainLayout.astro
setup: |
  import PropsTable from '~/components/PropsTable.astro';
  import LiveExample from '~/components/LiveExample.astro';
propsPath: '@itwin/itwinui-react/esm/core/Modal/Modal.d.ts'
exampleCodeFile1: Dialog.example.tsx
---

<p>{frontmatter.description}</p>

<LiveExample src={frontmatter.exampleCodeFile1} />

A dialog informs users about a task and can contain critical information, require decisions, or involve multiple tasks. Dialogs appear in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.

Dialogs are purposefully interruptive, so they should be used sparingly.

## Anatomy

- Title: must be descriptive of the task at hand. The user must understand the context because they went from the main window to a dialog.
- Close button: only allowed in dismissible dialogs.
- Content
- Actions: see Button standard for best practices.
- Box & shadow
- Overlay: Dialog appears above all other UI elements and casts a black overlay as well as a drop shadow on all other content, creating a strong visual focus on the dialog.

The dialog should be located in the upper half of the screen, because on smaller screens it may get lost. A dialog’s maximum width is 50% of the screen width & the minimum width is 400px. If your content can not fit inside the dialog without scrollbars, you should consider alternative ways to display the information.

When the 400px minimum width conflicts with the 50% maximum of the screen width, then the dialog spans the entire width of the device. This mobile dialog can span the entire height of the screen but should not use scroll bars.

## Types

### Dismissible dialogs

A dismissible dialog contains information that is not required. The dialog can be dismissed multiple different ways:

- Clicking one of the action buttons.
- Clicking on “X” button.
- Pressing the ESC key on your keyboard.
- Clicking elsewhere outside the dialog window.

The “X” icon bears the borderless button style which appears on cursor hover.

## User guidelines

## Props

<PropsTable path={frontmatter.propsPath} />

## Related resources
