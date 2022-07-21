---
title: Color picker
description: A panel containing swatches for selecting colors.
layout: ~/layouts/MainLayout.astro
setup: |
  import PropsTable from '~/components/PropsTable.astro';
  import LiveExample from '~/components/LiveExample.astro';
propsPath: '@itwin/itwinui-react/esm/core/UserIcon/UserIcon.d.ts'
exampleCodeFile1: ColorPicker.example.tsx
---

<p>{frontmatter.description}</p>

<LiveExample src={frontmatter.exampleCodeFile1} />

A color picker allows the user to browse and apply a color to a selected item. The eyedropper cursor displays when hovering over the color swatches. On hover, the color swatch expands 138%. Depending on your needs, you can adjust what is included in your color picker.

## Appearance

### Basic
A basic color picker displays a pre-determined selection of colors. Because the colors are system-provided, each color should have a user friendly name. There is a set of basic system-provided colors available in color standards.

If you must use colors other than what is in the basic set, you can find unique color names for HEX values again in our color standards or this Color Name & Hue tool.

The user cannot add or remove swatches from what is available in the basic color picker. You may offer a transparent / no color option as seen displayed in the first slot in the example image.

The color swatches display in rows of 10 swatches maximum. After a row reaches this quantity, the next swatch will wrap to the following row.

### Advanced
The advanced color picker lets the user pick any color. Optionally, you may display user saved colors, or recently used colors if needed.

### Color code
Because the colors are immensely flexible, do not display a specific color name like in the basic color picker. Instead, display the HEX, RGB, RGBA, CMYK or other color code values. A clickable icon in the text field allows the user to rotate through the different color code types.

The color code is displayed in editable fields for precise color selection. There are two ways to show this code: Within the panel itself as seen in the examples above, or in a dropdown button/input field combo, like below.

If the color code is shown outside of the panel, like in the example above, do not include the color code within the panel at the same time.

## Usage
The color picker is extremely flexible. Bits and pieces can be used based on product requirements. If certain parts are not required for your context, they can be left out.

There is no hard guidelines for what an advanced color picker contains. The point is that it remains usable and aligns with the user’s workflow. If you are unsure about a product’s use of the color picker, contact a member of the visual team for advice.

## Props

<PropsTable path={frontmatter.propsPath} />

## Related resources
