/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  ColorPicker,
  ColorPickerProps,
  IconButton,
  ColorSwatch,
  Button,
  ButtonGroup,
} from '../../src/core';
import { action } from '@storybook/addon-actions';
import { ColorValue } from '../../src/core/utils/color/ColorValue';
import { CreeveyStoryParams } from 'creevey';
import { Popover } from '../../src/core/utils';

export default {
  component: ColorPicker,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  title: 'Core/ColorPicker',
  parameters: {
    creevey: {
      tests: {
        async open() {
          const button = await this.browser.findElement({ css: '.iui-button' });
          await button.click();
          const opened = await this.takeScreenshot();
          await this.expect({ opened }).to.matchImages();
        },
      },
    } as CreeveyStoryParams,
  },
} as Meta<ColorPickerProps>;

const ColorsList = [
  { color: '#ffffff', name: 'WHITE' },
  { color: '#5a6973', name: 'GREY' },
  { color: '#00121d', name: 'KURETAKE BLACK MANGA' },
  { color: '#002a44', name: 'RHAPSODY IN BLUE' },
  { color: '#00426b', name: 'DARK IMPERIAL BLUE' },
  { color: '#005a92', name: 'JETSKI RACE' },
  { color: '#0073ba', name: 'FRENCH BLUE' },
  { color: '#008be1', name: 'BLUE COLA' },
  { color: '#30b0ff', name: 'FANTASY CONSOLE SKY' },
  { color: '#58bfff', name: 'HELLO SUMMER' },
  { color: '#7fceff', name: 'CHROMIS DAMSEL BLUE' },
  { color: '#a6ddff', name: 'DROPLET' },
  { color: '#cdecff', name: 'LUCID DREAMS' },
  { color: '#e5f5fd', name: 'KODAMA WHITE' },
  { color: '#010200', name: 'REGISTRATION BLACK' },
  { color: '#122306', name: 'YUZU SOY' },
  { color: '#23450b', name: 'FOREST GREEN' },
  { color: '#346711', name: 'TATZELWURM GREEN' },
  { color: '#458816', name: 'CHLOROPHYLL' },
  { color: '#56aa1c', name: 'PLASTIC PINES' },
  { color: '#5fbb1f', name: 'FIELD GREEN' },
  { color: '#67cc22', name: 'GREEN HIGH' },
  { color: '#91e458', name: 'LILLIPUTIAN LIME' },
  { color: '#b2ec8b', name: 'GREEN DAY' },
  { color: '#d4f4bd', name: 'TEA GREEN' },
  { color: '#eef6e8', name: 'VERDE PASTEL' },
  { color: '#9ba5af', name: 'SERYI GREY' },
  { color: '#cf0000', name: 'RED EPIPHYLLUM' },
  { color: '#ff6300', name: 'SAFETY ORANGE' },
  { color: '#ffc335', name: 'RISE-N-SHINE' },
];

export const Basic: Story<ColorPickerProps> = (args) => {
  const [activeColor, setActiveColor] = React.useState(ColorsList[5]);
  const [colorName, setColorName] = React.useState(ColorsList[5].name);

  const onColorChanged = (color: ColorValue) => {
    const hexString = color.toHexString();
    const index = ColorsList.findIndex(
      (swatch) => swatch.color === hexString.toLowerCase(),
    );
    setActiveColor(ColorsList[index]);
    setColorName(ColorsList[index].name);
    action(`Selected ${ColorsList[index].color}`)();
  };

  return (
    <>
      <Popover
        content={
          <ColorPicker
            selectedColor={activeColor.color}
            {...args}
            onChangeCompleted={onColorChanged}
          />
        }
        trigger='click'
        placement='bottom-start'
      >
        <IconButton>
          <ColorSwatch
            style={{ pointerEvents: 'none' }}
            color={activeColor.color}
          />
        </IconButton>
      </Popover>
      <span style={{ marginLeft: 16 }}>{colorName}</span>
    </>
  );
};
Basic.args = {
  paletteProps: {
    colors: ColorsList.map(({ color }) => color),
  },
};

export const Advanced: Story<ColorPickerProps> = (args) => {
  const [selectedColor, setSelectedColor] = React.useState<ColorValue>(
    ColorValue.create({ h: 0, s: 100, l: 50 }),
  );

  const formats = ['hsl', 'rgb', 'hex'] as const;
  const [currentFormat, setCurrentFormat] = React.useState<
    typeof formats[number]
  >(formats[0]);

  const onColorChanged = (color: ColorValue) => {
    setSelectedColor(color);
    action(`Selected ${getDisplayString(color)}`)();
  };

  const getDisplayString = (color = selectedColor) => {
    switch (currentFormat) {
      case 'hsl':
        return color.toHslString();
      case 'rgb':
        return color.toRgbString();
      case 'hex':
        return color.toHexString();
    }
  };

  return (
    <>
      <ButtonGroup>
        <Popover
          content={
            <ColorPicker
              selectedColor={selectedColor}
              {...args}
              onChangeCompleted={onColorChanged}
              builderProps={{
                defaultColorFormat: currentFormat,
                onColorFormatChanged: setCurrentFormat,
              }}
            />
          }
          appendTo={() => document.body}
          trigger='click'
          placement='bottom-start'
        >
          <IconButton>
            <ColorSwatch
              style={{ pointerEvents: 'none' }}
              color={selectedColor}
            />
          </IconButton>
        </Popover>
        <Button
          onClick={() => {
            setCurrentFormat(
              formats[(formats.indexOf(currentFormat) + 1) % formats.length],
            );
          }}
          endIcon={
            <svg viewBox='0 0 16 16' className='iui-icon' aria-hidden='true'>
              <path d='m5 15-3.78125-3.5 3.78125-3.5v2h8v3h-8zm6-7 3.78125-3.5-3.78125-3.5v2h-8v3h8z' />
            </svg>
          }
        >
          <div style={{ width: 115 }}>
            {getDisplayString() ?? 'No color selected.'}
          </div>
        </Button>
      </ButtonGroup>
    </>
  );
};

Advanced.args = {
  paletteProps: {
    colors: [
      { h: 0, s: 100, l: 50 },
      { r: 255, g: 98, b: 0 },
      '#fec134',
      '#5A6973',
      { h: 95, s: 83, v: 72 },
      { h: 250, s: 100, l: 59 },
    ],
    colorPaletteTitle: 'Saved Colors',
  },
};
