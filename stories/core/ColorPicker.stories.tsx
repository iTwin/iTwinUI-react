/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';
import { ColorPicker, ColorPickerProps, IconButton } from '../../src/core';
import { action } from '@storybook/addon-actions';
import Color from '../../src/core/ColorPicker/Color';
import { DefaultColors } from '../../src/core/ColorPicker/ColorPicker';
import SvgAdd from '@itwin/itwinui-icons-react/cjs/icons/Add';

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
  const onClick = (index: number) => {
    setCurrentColor(index.toString());
    action(`Clicked color #${index}`)();
  };
  const [opened, setOpened] = useState(false);

  const [currentColor, setCurrentColor] = useState('No color selected');

  return (
    <>
      <IconButton onClick={() => setOpened(!opened)}>
        <SvgAdd />
      </IconButton>
      <span style={{ marginLeft: 16 }}>{currentColor.toString()}</span>
      {opened && (
        <div style={{ marginTop: 4 }}>
          <ColorPicker onColorClicked={onClick} {...args} />
        </div>
      )}
    </>
  );
};

Basic.args = {
  colors: DefaultColors,
};

export const WithCustomClick: Story<ColorPickerProps> = (args) => {
  const { activeColorIndex, ...rest } = args;

  const [opened, setOpened] = useState(false);
  const [currentColor, setCurrentColor] = useState('No color selected');

  const [currentActiveIndex, setCurrentActiveIndex] = React.useState(
    activeColorIndex,
  );
  const onCustomClick = (index: number) => {
    action(`Clicked custom color #${index}`)();
    setCurrentActiveIndex(index);
  };

  return (
    <>
      <IconButton onClick={() => setOpened(!opened)}>
        <SvgAdd />
      </IconButton>
      <span style={{ marginLeft: 16 }}>{currentColor.toString()}</span>
      {opened && (
        <div style={{ marginTop: 4 }}>
          <ColorPicker {...rest}>
            {DefaultColors.map((color, index) => {
              const onClick = () => {
                onCustomClick(index);
                setCurrentColor(index.toString());
              };
              return (
                <Color
                  key={index}
                  color={color}
                  onColorClicked={onClick}
                  isActive={index === currentActiveIndex}
                />
              );
            })}
          </ColorPicker>{' '}
        </div>
      )}
    </>
  );
};

export const Advanced: Story<ColorPickerProps> = (args) => {
  const [opened, setOpened] = useState(false);
  const [currentColor, setCurrentColor] = useState('No color selected');

  const onClick = (index: number) => {
    action(`Clicked color #${index}`)();
    setCurrentColor(index.toString());
  };

  return (
    <>
      <IconButton onClick={() => setOpened(!opened)}>
        <SvgAdd />
      </IconButton>
      <span style={{ marginLeft: 16 }}>{currentColor.toString()}</span>
      {opened && (
        <div style={{ marginTop: 4 }}>
          <ColorPicker onColorClicked={onClick} {...args} />{' '}
        </div>
      )}
    </>
  );
};

Advanced.args = {
  type: 'advanced',
  colors: ['#458816', '#CF0000', '#00121D', '#00426B', '#008BE1', '#D4F4BD'],
};
