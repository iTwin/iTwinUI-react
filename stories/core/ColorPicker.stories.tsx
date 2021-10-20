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
  const [activeColor, setActiveColor] = React.useState(ColorsList[2]);
  const [colorName, setColorName] = React.useState(ColorsList[2].name);

  const [opened, setOpened] = React.useState(false);

  const onColorChanged = (color: ColorValue) => {
    const hexString = color.toHslString();
    const index = ColorsList.findIndex((swatch) => swatch.color === hexString);
    setActiveColor(ColorsList[index]);
    setColorName(ColorsList[index].name);
    action(`Selected ${ColorsList[index].color}`)();
  };

  return (
    <>
      <IconButton onClick={() => setOpened(!opened)}>
        <span
          style={{
            backgroundColor: activeColor.color,
            border: '1px solid',
          }}
        />
      </IconButton>
      <span style={{ marginLeft: 16 }}>{colorName}</span>
      {opened && (
        <div style={{ marginTop: 4 }}>
          <ColorPicker {...args} onChangeCompleted={onColorChanged} />
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
    ColorValue.create({ h: 0, s: 100, l: 50 }),
  );
  const [colorDisplayString, setColorDisplayString] = React.useState(
    selectedColor.toHslString(),
  );
  const [displayType, setDisplayType] = React.useState(0); // 0 = HSL, 1= RGB, 2=HEX, 3=HSV

  // const [savedColors] = React.useState<Array<ColorValue>>([
  //   ColorValue.fromHSL({ h: 0, s: 100, l: 50 }),
  //   ColorValue.fromRGB({ r: 255, g: 98, b: 0 }),
  //   ColorValue.fromString('#fec134'),
  //   ColorValue.fromHSV({ h: 95, s: 83, v: 72 }),
  //   ColorValue.fromHSL({ h: 202, s: 100, l: 59 }),
  // ]);

  const onColorChanged = (color: ColorValue) => {
    setSelectedColor(color);
    action(`Selected ${colorDisplayString}`)();
  };

  const onDisplayTypeChange = () => {
    if (displayType === 3) {
      setDisplayType(0);
    } else {
      setDisplayType(displayType + 1);
    }
  };

  React.useEffect(() => {
    switch (displayType) {
      case 0: {
        setColorDisplayString(selectedColor.toHslString());
        break;
      }
      case 1: {
        setColorDisplayString(selectedColor.toRgbString());
        break;
      }
      case 2: {
        setColorDisplayString(selectedColor.toHexString());
        break;
      }
      case 3: {
        setColorDisplayString(selectedColor.toHsvString());
        break;
      }
    }
  }, [displayType, selectedColor]);

  const defaultColorInputType = React.useMemo<
    'HSL' | 'RGB' | 'HEX' | 'NONE'
  >(() => {
    switch (displayType) {
      case 0:
        return 'HSL';
      case 1:
        return 'RGB';
      case 2:
        return 'HEX';
      default:
        return 'NONE';
    }
  }, [displayType]);

  const builderProps = {
    defaultColorInputType,
    onInputTypeChanged: (inputType: 'HSL' | 'RGB' | 'HEX' | 'NONE') => {
      switch (inputType) {
        case 'HSL':
          setDisplayType(0);
          break;
        case 'RGB':
          setDisplayType(1);
          break;
        case 'HEX':
          setDisplayType(2);
          break;
        default:
          setDisplayType(3);
          break;
      }
    },
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
      <Button
        onClick={onDisplayTypeChange}
        endIcon={
          <svg viewBox='0 0 16 16' className='iui-icon' aria-hidden='true'>
            <path d='m5 15-3.78125-3.5 3.78125-3.5v2h8v3h-8zm6-7 3.78125-3.5-3.78125-3.5v2h-8v3h8z' />
          </svg>
        }
        styleType='default'
      >
        <div style={{ width: 115 }}>
          {colorDisplayString ?? 'No color selected.'}
        </div>
      </Button>

      {opened && (
        <div style={{ marginTop: 4 }}>
          <ColorPicker
            selectedColor={selectedColor}
            {...args}
            onChangeCompleted={onColorChanged}
            builderProps={builderProps}
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
};
