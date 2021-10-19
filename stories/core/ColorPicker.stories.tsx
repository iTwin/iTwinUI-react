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
  { color: '#FFFFFF', name: 'WHITE' },
  { color: '#5A6973', name: 'GREY' },
  { color: '#00121D', name: 'KURETAKE BLACK MANGA' },
  { color: '#002A44', name: 'RHAPSODY IN BLUE' },
  { color: '#00426B', name: 'DARK IMPERIAL BLUE' },
  { color: '#005A92', name: 'JETSKI RACE' },
  { color: '#0073BA', name: 'FRENCH BLUE' },
  { color: '#008BE1', name: 'BLUE COLA' },
  { color: '#30B0FF', name: 'FANTASY CONSOLE SKY' },
  { color: '#58BFFF', name: 'HELLO SUMMER' },
  { color: '#7FCEFF', name: 'CHROMIS DAMSEL BLUE' },
  { color: '#A6DDFF', name: 'DROPLET' },
  { color: '#CDECFF', name: 'LUCID DREAMS' },
  { color: '#E5F5FD', name: 'KODAMA WHITE' },
  { color: '#010200', name: 'REGISTRATION BLACK' },
  { color: '#122306', name: 'YUZU SOY' },
  { color: '#23450b', name: 'FOREST GREEN' },
  { color: '#346711', name: 'TATZELWURM GREEN' },
  { color: '#458816', name: 'CHLOROPHYLL' },
  { color: '#56AA1C', name: 'PLASTIC PINES' },
  { color: '#5FBB1F', name: 'FIELD GREEN' },
  { color: '#67CC22', name: 'GREEN HIGH' },
  { color: '#91E458', name: 'LILLIPUTIAN LIME' },
  { color: '#B2EC8B', name: 'GREEN DAY' },
  { color: '#D4F4BD', name: 'TEA GREEN' },
  { color: '#EEF6E8', name: 'VERDE PASTEL' },
  { color: '#9BA5AF', name: 'SERYI GREY' },
  { color: '#CF0000', name: 'RED EPIPHYLLUM' },
  { color: '#FF6300', name: 'SAFETY ORANGE' },
  { color: '#FFC335', name: 'RISE-N-SHINE' },
];

export const Basic: Story<ColorPickerProps> = (args) => {
  const [activeColor, setActiveColor] = React.useState('#005A92');
  const [colorName, setColorName] = React.useState(ColorsList[5].name);

  const [opened, setOpened] = React.useState(false);

  const onColorChanged = (color: ColorValue) => {
    const colorString = color.toHexString();
    const index = ColorsList.findIndex(
      (swatch) => swatch.color.toLowerCase() === colorString,
    );
    setActiveColor(colorString);
    setColorName(ColorsList[index].name);
    action(`Selected ${colorString}`)();
  };

  return (
    <>
      <IconButton onClick={() => setOpened(!opened)}>
        <span
          style={{
            backgroundColor: activeColor,
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
            color={'#5A6973'}
            onClick={() => {
              onClickColor(0);
            }}
            isActive={0 === activeIndex}
            style={{ marginRight: 8 }}
          />
          <ColorSwatch
            color={'#FFFFFF'}
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
        startIcon={
          <svg viewBox='0 0 16 16' className='iui-icon' aria-hidden='true'>
            <path d='m5 15-3.78125-3.5 3.78125-3.5v2h8v3h-8zm6-7 3.78125-3.5-3.78125-3.5v2h-8v3h8z' />
          </svg>
        }
        styleType='default'
      >
        <span style={{ marginLeft: 16 }}>
          {colorDisplayString ?? 'No color selected.'}
        </span>
      </Button>

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
    colors: ['#FFFFFF', '#5A6973', '#346711'],
    colorPaletteTitle: 'Saved Colors',
  },
  builderProps: {
    defaultColorInputType: 'HEX',
  },
};
