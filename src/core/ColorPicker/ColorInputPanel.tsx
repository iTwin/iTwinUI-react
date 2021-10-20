/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import '@itwin/itwinui-css/css/color-picker.css';
import { ColorValue } from '../utils/color/ColorValue';
import { IconButton } from '../Buttons';
import { Input } from '../Input';

// cspell: ignore borderless tbgr

export type ColorInputPanelProps = {
  activeColor: ColorValue;
  /**
   * Show HSL, RGB, or HEX input values.
   * Set to NONE to use advanced color builder without showing color input
   */
  currentInputType: 'HSL' | 'RGB' | 'HEX' | 'NONE';
  /**
   * Callback fired when selectedColor is done changing.
   * This can be on pointerUp when thumb is done dragging,
   * or when user clicks on color builder components, or when user clicks on color swatch
   */
  onChangeCompleted: (color: ColorValue) => void;
  /**
   * Callback fired when user changes input type
   */
  onInputTypeChanged?: (inputType: 'HSL' | 'RGB' | 'HEX' | 'NONE') => void;
};
export const ColorInputPanel = (props: ColorInputPanelProps) => {
  const {
    activeColor,
    currentInputType,
    onChangeCompleted,
    onInputTypeChanged,
  } = props;

  const [inputType, setInputType] = React.useState<
    'HEX' | 'HSL' | 'RGB' | 'NONE'
  >(currentInputType);

  React.useEffect(() => {
    setInputType(currentInputType);
  }, [currentInputType]);

  // need to use state since may have parsing error
  const [hexInput, setHexInput] = React.useState(activeColor.toHexString());

  React.useEffect(() => {
    setHexInput(activeColor.toHexString());
  }, [activeColor]);

  const [hslInput, setHslInput] = React.useState(() => {
    const hslColor = activeColor.toHslColor();
    return [
      hslColor.h.toString(),
      hslColor.s.toString(),
      hslColor.l.toString(),
    ];
  });

  React.useEffect(() => {
    const hslColor = activeColor.toHslColor();
    setHslInput([
      hslColor.h.toString(),
      hslColor.s.toString(),
      hslColor.l.toString(),
    ]);
  }, [activeColor]);

  const [rgbInput, setRgbInput] = React.useState(() => {
    const rgbColor = activeColor.toRgbColor();
    return [
      rgbColor.r.toString(),
      rgbColor.g.toString(),
      rgbColor.b.toString(),
    ];
  });

  React.useEffect(() => {
    const rgbColor = activeColor.toRgbColor();
    setRgbInput([
      rgbColor.r.toString(),
      rgbColor.g.toString(),
      rgbColor.b.toString(),
    ]);
  }, [activeColor]);

  const onSwapColorType = React.useCallback(() => {
    let newInputType: 'HEX' | 'HSL' | 'RGB' | 'NONE' = 'NONE';

    if (inputType === 'HEX') {
      newInputType = 'HSL';
    } else if (inputType === 'HSL') {
      newInputType = 'RGB';
    } else if (inputType === 'RGB') {
      newInputType = 'HEX';
    }
    setInputType(newInputType);
    onInputTypeChanged?.(newInputType);
  }, [inputType, onInputTypeChanged]);

  const handleColorInputChange = (
    type: 'HSL' | 'HEX' | 'RGB',
    value: string[],
  ) => {
    let color;

    if (type === 'HEX') {
      const colorString = value[0].startsWith('#') ? value[0] : `#${value[0]}`;
      try {
        color = ColorValue.fromString(colorString);
        onChangeCompleted(color);
        return;
      } catch (_e) {
        setHexInput(colorString);
        return;
      }
    }

    if (type === 'HSL') {
      const values: string[] = value as string[];
      color = ColorValue.create({
        h: Number(values[0]),
        s: Number(values[1]),
        l: Number(values[2]),
      });
      onChangeCompleted(color);
    }

    if (type === 'RGB') {
      const values: string[] = value as string[];
      color = ColorValue.create({
        r: Number(values[0]),
        g: Number(values[1]),
        b: Number(values[2]),
      });
      onChangeCompleted(color);
    }
  };

  return (
    <div className='iui-color-picker-input-container'>
      <div className='iui-color-picker-section-label'>{inputType}</div>
      <div className='iui-color-input'>
        <IconButton styleType={'borderless'} onClick={onSwapColorType}>
          <svg viewBox='0 0 16 16' className='iui-icon' aria-hidden='true'>
            <path d='m5 15-3.78125-3.5 3.78125-3.5v2h8v3h-8zm6-7 3.78125-3.5-3.78125-3.5v2h-8v3h8z' />
          </svg>
        </IconButton>
        {inputType === 'HEX' && (
          <div className='iui-color-input-fields'>
            <Input
              size='small'
              maxLength={7}
              minLength={1}
              placeholder='HEX'
              value={hexInput}
              onChange={(event) => {
                setHexInput(event.target.value);
              }}
              onFocus={(event) => event.target.select()}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  handleColorInputChange('HEX', [hexInput]);
                }
              }}
              onBlur={(event) => {
                event.preventDefault();
                handleColorInputChange('HEX', [hexInput]);
              }}
            />
          </div>
        )}
        {inputType === 'HSL' && (
          <div className='iui-color-input-fields'>
            <Input
              key='hsl-h'
              size='small'
              type='number'
              min='0'
              max='359'
              placeholder='H'
              value={hslInput[0]}
              onChange={(event) => {
                setHslInput([event.target.value, hslInput[1], hslInput[2]]);
              }}
              onFocus={(event) => event.target.select()}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  handleColorInputChange('HSL', hslInput);
                }
              }}
              onBlur={(event) => {
                event.preventDefault();
                handleColorInputChange('HSL', hslInput);
              }}
            />
            <Input
              key='hsl-s'
              size='small'
              type='number'
              min='0'
              max='100'
              placeholder='S'
              value={hslInput[1]}
              onChange={(event) => {
                setHslInput([hslInput[0], event.target.value, hslInput[2]]);
              }}
              onFocus={(event) => event.target.select()}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  handleColorInputChange('HSL', hslInput);
                }
              }}
              onBlur={(event) => {
                event.preventDefault();
                handleColorInputChange('HSL', hslInput);
              }}
            />
            <Input
              key='hsl-l'
              size='small'
              type='number'
              min='0'
              max='100'
              placeholder='L'
              value={hslInput[2]}
              onChange={(event) => {
                setHslInput([hslInput[0], hslInput[1], event.target.value]);
              }}
              onFocus={(event) => event.target.select()}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  handleColorInputChange('HSL', hslInput);
                }
              }}
              onBlur={(event) => {
                event.preventDefault();
                handleColorInputChange('HSL', hslInput);
              }}
            />
          </div>
        )}
        {inputType === 'RGB' && (
          <div className='iui-color-input-fields'>
            <Input
              key='rgb-r'
              size='small'
              type='number'
              min='0'
              max='255'
              placeholder='R'
              value={rgbInput[0]}
              onChange={(event) => {
                setRgbInput([event.target.value, rgbInput[1], rgbInput[2]]);
              }}
              onFocus={(event) => event.target.select()}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  handleColorInputChange('RGB', rgbInput);
                }
              }}
              onBlur={(event) => {
                event.preventDefault();
                handleColorInputChange('RGB', rgbInput);
              }}
            />
            <Input
              key='rgb-g'
              size='small'
              type='number'
              min='0'
              max='255'
              placeholder='G'
              value={rgbInput[1]}
              onChange={(event) => {
                setRgbInput([rgbInput[0], event.target.value, rgbInput[2]]);
              }}
              onFocus={(event) => event.target.select()}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  handleColorInputChange('RGB', rgbInput);
                }
              }}
              onBlur={(event) => {
                event.preventDefault();
                handleColorInputChange('RGB', rgbInput);
              }}
            />
            <Input
              key='rgb-b'
              size='small'
              type='number'
              min='0'
              max='255'
              placeholder={'B'}
              value={rgbInput[2]}
              onChange={(event) => {
                setRgbInput([rgbInput[0], rgbInput[1], event.target.value]);
              }}
              onFocus={(event) => event.target.select()}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  handleColorInputChange('RGB', rgbInput);
                }
              }}
              onBlur={(event) => {
                event.preventDefault();
                handleColorInputChange('RGB', rgbInput);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorInputPanel;
