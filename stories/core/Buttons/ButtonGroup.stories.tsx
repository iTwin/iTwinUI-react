/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import {
  ButtonGroup,
  ButtonGroupProps,
  DropdownMenu,
  IconButton,
  MenuItem,
} from '../../../src/core';
import {
  SvgAdd,
  SvgDelete,
  SvgEdit,
  SvgUndo,
  SvgPlaceholder,
  SvgMore,
} from '@itwin/itwinui-icons-react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CreeveyMeta } from 'creevey';

export default {
  title: 'Buttons/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    style: { control: { disable: true } },
    className: { control: { disable: true } },
    id: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  parameters: {
    creevey: { skip: ['Overflow'] },
  },
} as Meta<ButtonGroupProps> & CreeveyMeta;

export const WithIcons: Story<ButtonGroupProps> = (args) => {
  return (
    <ButtonGroup {...args}>
      <IconButton onClick={action('Clicked add!')}>
        <SvgAdd />
      </IconButton>
      <IconButton onClick={action('Clicked edit!')} isActive>
        <SvgEdit />
      </IconButton>
      <IconButton disabled onClick={action('Clicked delete!')}>
        <SvgDelete />
      </IconButton>
      <IconButton onClick={action('Clicked undo!')}>
        <SvgUndo />
      </IconButton>
    </ButtonGroup>
  );
};

export const Overflow: Story<ButtonGroupProps> = (args) => {
  const buttons = Array(10)
    .fill(null)
    .map((_, index) => (
      <IconButton
        key={index}
        onClick={() => action(`Clicked on button ${index + 1}`)()}
      >
        <SvgPlaceholder />
      </IconButton>
    ));

  return (
    <div
      style={{
        maxWidth: 'clamp(300px, 50%, 100%)',
        border: '1px solid hotpink',
        padding: 8,
      }}
    >
      <ButtonGroup
        style={{ display: 'flex' }}
        overflowButton={(overflowStart) => (
          <DropdownMenu
            menuItems={(close) =>
              Array(buttons.length - overflowStart + 1)
                .fill(null)
                .map((_, _index) => {
                  const index = overflowStart + _index;
                  const onClick = (close: () => void) => {
                    action(`Clicked button ${index} (overflow)`)();
                    close();
                  };
                  return (
                    <MenuItem
                      key={index}
                      onClick={() => onClick(close)}
                      icon={<SvgPlaceholder />}
                    >
                      Button #{index}
                    </MenuItem>
                  );
                })
            }
            {...args}
          >
            <IconButton onClick={() => action('Clicked on overflow icon')()}>
              <SvgMore />
            </IconButton>
          </DropdownMenu>
        )}
      >
        {buttons}
      </ButtonGroup>
    </div>
  );
};
