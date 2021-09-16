/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';
import {
  ColorPicker,
  ColorPickerProps,
  IconButton,
  Tooltip,
} from '../../src/core';
import { action } from '@storybook/addon-actions';
import Color from '../../src/core/ColorPicker/Color';
import { DefaultColors } from '../../src/core/ColorPicker/ColorPicker';

export default {
  component: ColorPicker,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  title: 'Core/ColorPicker',
} as Meta<ColorPickerProps>;

export const Basic: Story<ColorPickerProps> = (args) => {
  const [activeIndex, setActiveIndex] = useState(5);

  const [opened, setOpened] = useState(false);

  const [currentColorName, setCurrentColorName] = useState(
    DefaultColors[activeIndex].name,
  );
  const [currentColorValue, setCurrentColorValue] = useState(
    DefaultColors[activeIndex].color,
  );

  const onClickColor = (index: number) => {
    action(`Clicked color ${DefaultColors[index].color}`)();
    setActiveIndex(index);
    setCurrentColorName(DefaultColors[index].name);
    setCurrentColorValue(DefaultColors[index].color);
  };

  return (
    <>
      <IconButton onClick={() => setOpened(!opened)}>
        <span style={{ backgroundColor: currentColorValue }} />
      </IconButton>
      <span style={{ marginLeft: 16 }}>{currentColorName}</span>
      {opened && (
        <div style={{ marginTop: 4 }}>
          <ColorPicker {...args}>
            {DefaultColors.map((color, index) => {
              const onClick = () => {
                onClickColor(index);
              };
              return (
                <Color
                  key={index + color.color}
                  color={color.color}
                  onClick={onClick}
                  isActive={color.color === currentColorValue}
                />
              );
            })}
          </ColorPicker>
        </div>
      )}
    </>
  );
};

Basic.args = {};

export const WithTooltip: Story<ColorPickerProps> = (args) => {
  const [opened, setOpened] = useState(false);

  const [activeIndex, setCurrentActiveIndex] = React.useState(10);
  const [currentColorName, setCurrentColorName] = useState(
    DefaultColors[activeIndex].name,
  );
  const [currentColorValue, setCurrentColorValue] = useState(
    DefaultColors[activeIndex].color,
  );

  const onColorClick = (index: number, name: string, color: string) => {
    action(`Clicked ${name}`)();
    setCurrentActiveIndex(index);
    setCurrentColorName(name);
    setCurrentColorValue(color);
  };

  const colorRef = React.useRef<HTMLSpanElement>(null);

  return (
    <>
      <IconButton onClick={() => setOpened(!opened)}>
        <span style={{ backgroundColor: currentColorValue }} />
      </IconButton>
      <span style={{ marginLeft: 16 }}>{currentColorName.toString()}</span>
      {opened && (
        <div style={{ marginTop: 4 }}>
          <ColorPicker {...args}>
            {DefaultColors.map((color, index) => {
              const onClick = () => {
                onColorClick(index, color.name, color.color);
              };
              return (
                <>
                  <Color
                    key={index + color.color}
                    color={color.color}
                    onClick={onClick}
                    isActive={color.color === currentColorValue}
                    tooltipRefProp={{ ref: colorRef }}
                  />
                  <Tooltip reference={colorRef} content={color.name} />
                </>
              );
            })}
          </ColorPicker>
        </div>
      )}
    </>
  );
};

WithTooltip.args = {};
