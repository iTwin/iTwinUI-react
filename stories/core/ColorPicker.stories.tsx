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
  Tooltip,
} from '../../src/core';
import { action } from '@storybook/addon-actions';
import ColorSwatch from '../../src/core/ColorPicker/ColorSwatch';
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
  const [activeIndex, setActiveIndex] = React.useState(5);

  const [opened, setOpened] = React.useState(false);

  const onClickColor = (index: number) => {
    action(`Clicked color ${DefaultColors[index].color}`)();
    setActiveIndex(index);
  };

  return (
    <>
      <IconButton onClick={() => setOpened(!opened)}>
        <span
          style={{
            backgroundColor: DefaultColors[activeIndex].color,
            border: '1px solid',
          }}
        />
      </IconButton>
      <span style={{ marginLeft: 16 }}>{DefaultColors[activeIndex].name}</span>
      {opened && (
        <div style={{ marginTop: 4 }}>
          <ColorPicker activeColor={activeIndex} {...args}>
            {DefaultColors.map((color, index) => {
              const onClick = () => {
                onClickColor(index);
              };
              return (
                <ColorSwatch
                  key={index + color.color}
                  color={color.color}
                  onClick={onClick}
                  isActive={index === activeIndex}
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
  const [opened, setOpened] = React.useState(false);

  const [activeIndex, setCurrentActiveIndex] = React.useState<number>();

  const onColorClick = (index: number) => {
    action(`Clicked ${DefaultColors[index].name}`)();
    setCurrentActiveIndex(index);
  };

  return (
    <>
      <IconButton onClick={() => setOpened(!opened)}>
        <span
          style={{
            backgroundColor: activeIndex
              ? DefaultColors[activeIndex].color
              : '#FFF',
            border: '1px solid',
          }}
        />
      </IconButton>
      <span style={{ marginLeft: 16 }}>
        {activeIndex ? DefaultColors[activeIndex].name : 'No color selected.'}
      </span>
      {opened && (
        <div style={{ marginTop: 4 }}>
          <ColorPicker activeColor={activeIndex} {...args}>
            {DefaultColors.map((color, index) => {
              const onClick = () => {
                onColorClick(index);
              };
              return (
                <>
                  <Tooltip content={color.name} placement={'bottom-end'}>
                    <ColorSwatch
                      key={index + color.color}
                      color={color.color}
                      onClick={onClick}
                      isActive={index == activeIndex}
                    />
                  </Tooltip>
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
