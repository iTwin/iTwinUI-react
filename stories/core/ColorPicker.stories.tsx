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
} from '../../src/core';
import { action } from '@storybook/addon-actions';
import { ColorValue } from '../../src/core/utils/color/ColorValue';

export default {
  component: ColorPicker,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  title: 'Core/ColorPicker',
} as Meta<ColorPickerProps>;

const ColorsList = [
  { color: ColorValue.create(0xffffff), name: 'WHITE' },
  { color: ColorValue.create(0x5a6973), name: 'GREY' },
  { color: ColorValue.create(0x00121d), name: 'KURETAKE BLACK MANGA' },
  { color: ColorValue.create(0x002a44), name: 'RHAPSODY IN BLUE' },
  { color: ColorValue.create(0x00426b), name: 'DARK IMPERIAL BLUE' },
  { color: ColorValue.create(0x005a92), name: 'JETSKI RACE' },
  { color: ColorValue.create(0x0073ba), name: 'FRENCH BLUE' },
  { color: ColorValue.create(0x008be1), name: 'BLUE COLA' },
  { color: ColorValue.create(0x30b0ff), name: 'FANTASY CONSOLE SKY' },
  { color: ColorValue.create(0x58bfff), name: 'HELLO SUMMER' },
  { color: ColorValue.create(0x7fceff), name: 'CHROMIS DAMSEL BLUE' },
  { color: ColorValue.create(0xa6ddff), name: 'DROPLET' },
  { color: ColorValue.create(0xcdecff), name: 'LUCID DREAMS' },
  { color: ColorValue.create(0xe5f5fd), name: 'KODAMA WHITE' },
  { color: ColorValue.create(0x010200), name: 'REGISTRATION BLACK' },
  { color: ColorValue.create(0x122306), name: 'YUZU SOY' },
  { color: ColorValue.create(0x23450b), name: 'FOREST GREEN' },
  { color: ColorValue.create(0x346711), name: 'TATZELWURM GREEN' },
  { color: ColorValue.create(0x458816), name: 'CHLOROPHYLL' },
  { color: ColorValue.create(0x56aa1c), name: 'PLASTIC PINES' },
  { color: ColorValue.create(0x5fbb1f), name: 'FIELD GREEN' },
  { color: ColorValue.create(0x67cc22), name: 'GREEN HIGH' },
  { color: ColorValue.create(0x91e458), name: 'LILLIPUTIAN LIME' },
  { color: ColorValue.create(0xb2ec8b), name: 'GREEN DAY' },
  { color: ColorValue.create(0xd4f4bd), name: 'TEA GREEN' },
  { color: ColorValue.create(0xeef6e8), name: 'VERDE PASTEL' },
  { color: ColorValue.create(0x9ba5af), name: 'SERYI GREY' },
  { color: ColorValue.create(0xcf0000), name: 'RED EPIPHYLLUM' },
  { color: ColorValue.create(0xff6300), name: 'SAFETY ORANGE' },
  { color: ColorValue.create(0xffc335), name: 'RISE-N-SHINE' },
];

export const Basic: Story<ColorPickerProps> = (args) => {
  const [activeColor, setActiveColor] = React.useState(ColorsList[2]);
  const [colorName, setColorName] = React.useState(ColorsList[2].name);

  const [opened, setOpened] = React.useState(false);

  const onColorChanged = (color: ColorValue) => {
    const index = ColorsList.findIndex((swatch) => swatch.color.equals(color));
    setActiveColor(ColorsList[index]);
    setColorName(ColorsList[index].name);
    action(`Selected ${ColorsList[index].color.toHexString()}`)();
  };

  return (
    <>
      <IconButton onClick={() => setOpened(!opened)}>
        <span
          style={{
            backgroundColor: activeColor.color.toHexString(),
            border: '1px solid',
          }}
        />
      </IconButton>
      <span style={{ marginLeft: 16 }}>{colorName}</span>
      {opened && (
        <div style={{ marginTop: 4 }}>
          <ColorPicker onChangeCompleted={onColorChanged} {...args} />
        </div>
      )}
    </>
  );
};
Basic.args = {
  paletteProps: {
    colors: ColorsList.map((color) => {
      return color.color;
    }),
  },
};

export const ColorSwatchOnly: Story<ColorPickerProps> = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickColor = (index: number) => {
    action(`Clicked color ${ColorsList[index].color}`)();
    setActiveIndex(index);
  };

  return (
    <>
      {
        <div style={{ marginTop: 4, display: 'flex' }}>
          <ColorSwatch
            color={ColorValue.create('#5A6973')}
            onClick={() => {
              onClickColor(0);
            }}
            isActive={0 === activeIndex}
            style={{ marginRight: 8 }}
          />
          <ColorSwatch
            color={ColorValue.create('#FFFFFF')}
            onClick={() => {
              onClickColor(1);
            }}
            isActive={1 === activeIndex}
          />
        </div>
      }
    </>
  );
};
ColorSwatchOnly.args = {};

export const Advanced: Story<ColorPickerProps> = (args) => {
  const [opened, setOpened] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState<ColorValue>(
    ColorValue.fromHSL({ h: 0, s: 100, l: 50 }),
  );
  const [colorDisplayString, setColorDisplayString] = React.useState(
    selectedColor.toHslString(),
  );
  // const [savedColors] = React.useState<Array<ColorValue>>([
  //   ColorValue.fromHSL({ h: 0, s: 100, l: 50 }),
  //   ColorValue.fromRGB({ r: 255, g: 98, b: 0 }),
  //   ColorValue.fromString('#fec134'),
  //   ColorValue.fromHSV({ h: 95, s: 83, v: 72 }),
  //   ColorValue.fromHSL({ h: 202, s: 100, l: 59 }),
  // ]);

  const onColorChanged = (color: ColorValue) => {
    setSelectedColor(color);
    setColorDisplayString(color.toHslString());
    action(`Selected ${color.toHslString()}`)();
  };

  const onUpdateDisplayString = () => {
    if (colorDisplayString == undefined) {
      setColorDisplayString(selectedColor.toHslString());
    } else if (colorDisplayString.substring(0, 3) == 'hsl') {
      setColorDisplayString(selectedColor.toRgbString());
    } else if (colorDisplayString.substring(0, 3) == 'rgb') {
      setColorDisplayString(selectedColor.toHsvString());
    } else if (colorDisplayString.substring(0, 3) == 'hsv') {
      setColorDisplayString(selectedColor.toHexString());
    } else {
      setColorDisplayString(selectedColor.toHslString());
    }
  };

  return (
    <>
      <IconButton onClick={() => setOpened(!opened)}>
        <span
          style={{
            backgroundColor: selectedColor.toHslString(),
            border: '1px solid',
          }}
        />
      </IconButton>

      <span style={{ marginLeft: 16 }} onClick={onUpdateDisplayString}>
        {colorDisplayString ?? 'No color selected.'}
      </span>

      {opened && (
        <div style={{ marginTop: 4 }}>
          <ColorPicker
            selectedColor={selectedColor}
            onChangeCompleted={onColorChanged}
            {...args}
          />
        </div>
      )}
    </>
  );
};

Advanced.args = {
  paletteProps: {
    colors: [
      ColorValue.create('#FFFFFF'),
      ColorValue.create('#5A6973'),
      ColorValue.create('#346711'),
    ],
    colorPaletteTitle: 'Saved Colors',
  },
  builderProps: {
    defaultColorInputType: 'HEX',
  },
};
