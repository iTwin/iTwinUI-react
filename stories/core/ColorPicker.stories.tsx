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
  const { activeColorIndex = 0 } = args;

  const [opened, setOpened] = useState(false);

  const [currentColorName, setCurrentColorName] = useState(
    DefaultColors[activeColorIndex].props['name'],
  );
  const [currentColorValue, setCurrentColorValue] = useState(
    DefaultColors[activeColorIndex].props['color'],
  );

  const onClick = (index: number) => {
    action(`Clicked color #${index}`)();
    setCurrentColorName(DefaultColors[index].props['name']);
    setCurrentColorValue(DefaultColors[index].props['color']);
  };

  return (
    <>
      <IconButton onClick={() => setOpened(!opened)}>
        <span style={{ backgroundColor: currentColorValue }} />
      </IconButton>
      <span style={{ marginLeft: 16 }}>{currentColorName}</span>
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
  activeColorIndex: 7,
};

export const WithCustomClick: Story<ColorPickerProps> = (args) => {
  const { activeColorIndex = 0, ...rest } = args;

  const [opened, setOpened] = useState(false);

  const [currentActiveIndex, setCurrentActiveIndex] = React.useState(
    activeColorIndex,
  );
  const [currentColorName, setCurrentColorName] = useState(
    DefaultColors[currentActiveIndex].props['name'],
  );
  const [currentColorValue, setCurrentColorValue] = useState(
    DefaultColors[currentActiveIndex].props['color'],
  );
  const onCustomClick = (index: number, name: string, color: string) => {
    action(`Clicked custom color ${name}`)();
    setCurrentActiveIndex(index);
    setCurrentColorName(name);
    setCurrentColorValue(color);
  };

  return (
    <>
      <IconButton onClick={() => setOpened(!opened)}>
        <span style={{ backgroundColor: currentColorValue }} />
      </IconButton>
      <span style={{ marginLeft: 16 }}>{currentColorName}</span>
      {opened && (
        <div style={{ marginTop: 4 }}>
          <ColorPicker {...rest}>
            {DefaultColors.map((color, index) => {
              const onClick = () => {
                onCustomClick(index, color.props['name'], color.props['color']);
              };
              return (
                <Color
                  key={index}
                  color={color.props['color']}
                  onColorClicked={onClick}
                  isActive={index === currentActiveIndex}
                />
              );
            })}
          </ColorPicker>
        </div>
      )}
    </>
  );
};

WithCustomClick.args = {
  activeColorIndex: 10,
};

export const WithTooltip: Story<ColorPickerProps> = (args) => {
  const { activeColorIndex = 0, ...rest } = args;

  const [opened, setOpened] = useState(false);

  const [currentActiveIndex, setCurrentActiveIndex] = React.useState(
    activeColorIndex,
  );
  const [currentColorName, setCurrentColorName] = useState(
    DefaultColors[currentActiveIndex].props['name'],
  );
  const [currentColorValue, setCurrentColorValue] = useState(
    DefaultColors[currentActiveIndex].props['color'],
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
          <ColorPicker {...rest}>
            {DefaultColors.map((color, index) => {
              const onClick = () => {
                onColorClick(index, color.props['name'], color.props['color']);
              };
              return (
                <>
                  <Color
                    key={index}
                    color={color.props['color']}
                    onColorClicked={onClick}
                    isActive={index === currentActiveIndex}
                    tooltipRefProp={{ ref: colorRef }}
                  />
                  <Tooltip reference={colorRef} content={color.props['name']} />
                </>
              );
            })}
          </ColorPicker>
        </div>
      )}
    </>
  );
};

WithTooltip.args = {
  activeColorIndex: 20,
};

export const Advanced: Story<ColorPickerProps> = (args) => {
  const { activeColorIndex = 0 } = args;

  const [opened, setOpened] = useState(false);

  const [currentColorName, setCurrentColorName] = useState(
    DefaultColors[activeColorIndex].props['name'],
  );
  const [currentColorValue, setCurrentColorValue] = useState(
    DefaultColors[activeColorIndex].props['color'],
  );

  const onClick = (index: number) => {
    action(`Clicked color ${DefaultColors[index].props['name']}`)();
    setCurrentColorName(DefaultColors[index].props['name']);
    setCurrentColorValue(DefaultColors[index].props['color']);
  };

  return (
    <>
      <IconButton onClick={() => setOpened(!opened)}>
        <span style={{ backgroundColor: currentColorValue }} />
      </IconButton>
      <span style={{ marginLeft: 16 }}>{currentColorName}</span>
      {opened && (
        <div style={{ marginTop: 4 }}>
          <ColorPicker onColorClicked={onClick} {...args} />
        </div>
      )}
    </>
  );
};

Advanced.args = {
  type: 'advanced',
  colors: ['#458816', '#CF0000', '#00121D', '#00426B', '#008BE1', '#D4F4BD'],
  activeColorIndex: 2,
};
