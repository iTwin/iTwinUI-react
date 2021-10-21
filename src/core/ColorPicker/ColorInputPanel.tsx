/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import '@itwin/itwinui-css/css/color-picker.css';
import { ColorValue } from '../utils/color/ColorValue';
import { IconButton } from '../Buttons';
import { Input } from '../Input';
import { InputContainer } from '../utils';

// cspell: ignore borderless tbgr

export type ColorInputPanelProps = {
  /**
   * Active RGB-based color.
   */
  activeColor: ColorValue;
  /**
   * Active HUE value.
   */
  activeHue: number;
  /**
   * The currently selected input type to be displayed in the panel.
   */
  currentInputType: 'HSL' | 'RGB' | 'HEX' | 'NONE';
  /**
   * Callback fired when activeColor changed from the panel input.
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
    activeHue,
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
    setValidHexInput(true);
  }, [activeColor, inputType]);

  const [hslInput, setHslInput] = React.useState(() => {
    const hslColor = activeColor.toHslColor();
    return [activeHue.toString(), hslColor.s.toString(), hslColor.l.toString()];
  });

  React.useEffect(() => {
    const hslColor = activeColor.toHslColor();
    setHslInput([
      activeHue.toString(),
      hslColor.s.toString(),
      hslColor.l.toString(),
    ]);
  }, [activeColor, activeHue, inputType]);

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

  const [validHexInput, setValidHexInput] = React.useState(true);

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
        setValidHexInput(true);
        return;
      } catch (_e) {
        setHexInput(colorString);
        setValidHexInput(false);
        return;
      }
    }

    if (type === 'HSL') {
      const h = Number(value[0]);
      const s = Number(value[1]);
      const l = Number(value[2]);

      if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100) {
        setHslInput(value);
        return;
      }
      color = ColorValue.create({
        h: h,
        s: s,
        l: l,
      });
      onChangeCompleted(color);
    }

    if (type === 'RGB') {
      const r = Number(value[0]);
      const g = Number(value[1]);
      const b = Number(value[2]);

      if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        setRgbInput(value);
        return;
      }

      color = ColorValue.create({
        r: r,
        g: g,
        b: b,
      });
      onChangeCompleted(color);
    }
  };

  return (
    <div className='iui-color-picker-input-container'>
      <div className='iui-color-picker-section-label'>{inputType}</div>
      <div className='iui-color-input'>
        <IconButton
          styleType='borderless'
          onClick={onSwapColorType}
          size='small'
        >
          <svg viewBox='0 0 16 16' className='iui-icon' aria-hidden='true'>
            <path d='m5 15-3.78125-3.5 3.78125-3.5v2h8v3h-8zm6-7 3.78125-3.5-3.78125-3.5v2h-8v3h8z' />
          </svg>
        </IconButton>
        {inputType === 'HEX' && (
          <div className='iui-color-input-fields'>
            <InputContainer status={validHexInput ? undefined : 'negative'}>
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
            </InputContainer>
          </div>
        )}
        {inputType === 'HSL' && (
          <div className='iui-color-input-fields'>
            <InputContainer
              status={
                Number(hslInput[0]) < 0 || Number(hslInput[0]) > 360
                  ? 'negative'
                  : undefined
              }
            >
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
            </InputContainer>
            <InputContainer
              status={
                Number(hslInput[1]) < 0 || Number(hslInput[1]) > 100
                  ? 'negative'
                  : undefined
              }
            >
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
            </InputContainer>
            <InputContainer
              status={
                Number(hslInput[2]) < 0 || Number(hslInput[2]) > 100
                  ? 'negative'
                  : undefined
              }
            >
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
            </InputContainer>
          </div>
        )}
        {inputType === 'RGB' && (
          <div className='iui-color-input-fields'>
            <InputContainer
              status={
                Number(rgbInput[0]) < 0 || Number(rgbInput[0]) > 255
                  ? 'negative'
                  : undefined
              }
            >
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
            </InputContainer>
            <InputContainer
              status={
                Number(rgbInput[1]) < 0 || Number(rgbInput[1]) > 255
                  ? 'negative'
                  : undefined
              }
            >
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
            </InputContainer>
            <InputContainer
              status={
                Number(rgbInput[2]) < 0 || Number(rgbInput[2]) > 255
                  ? 'negative'
                  : undefined
              }
            >
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
            </InputContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorInputPanel;
