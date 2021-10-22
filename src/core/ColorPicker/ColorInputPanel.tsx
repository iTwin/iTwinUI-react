/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import '@itwin/itwinui-css/css/color-picker.css';
import { IconButton } from '../Buttons';
import { Input } from '../Input';
import { ColorValue, InputContainer, useTheme } from '../utils';

export type ColorInputPanelProps = {
  /**
   * Active ColorValue.
   */
  activeColor: ColorValue;
  /**
   * Active hue value.
   */
  activeHue: number;
  /**
   * The default color format to be inputted in the panel.
   */
  defaultColorFormat: 'hsl' | 'rgb' | 'hex';
  /**
   * Color formats to switch between. The swap button will cycle between these formats.
   *
   * If array only has one option, then swap button will not be shown.
   *
   * @default ['hsl', 'rgb', 'hex']
   */
  allowedColorFormats?: ('hsl' | 'rgb' | 'hex')[];
  /**
   * Callback fired when activeColor changed from the panel input.
   */
  onChangeCompleted?: (color: ColorValue) => void;
  /**
   * Callback fired when colorFormat is changed.
   */
  onColorFormatChanged?: (format: 'hsl' | 'rgb' | 'hex') => void;
};

export const ColorInputPanel = (props: ColorInputPanelProps) => {
  const {
    activeColor,
    activeHue,
    defaultColorFormat,
    allowedColorFormats = ['hsl', 'rgb', 'hex'],
    onChangeCompleted,
    onColorFormatChanged,
  } = props;

  useTheme();

  const [currentFormat, setCurrentFormat] = React.useState(defaultColorFormat);

  React.useEffect(() => {
    setCurrentFormat(defaultColorFormat);
  }, [defaultColorFormat]);

  // need to use state since may have parsing error
  const [hexInput, setHexInput] = React.useState(activeColor.toHexString());

  React.useEffect(() => {
    setHexInput(activeColor.toHexString());
    setValidHexInput(true);
  }, [activeColor, currentFormat]);

  const [hslInput, setHslInput] = React.useState(() => {
    const hslColor = activeColor.toHslColor();
    return [activeHue.toString(), hslColor.s.toString(), hslColor.l.toString()];
  });

  React.useEffect(() => {
    const hslColor = activeColor.toHslColor();
    setHslInput([
      activeHue.toString(), // used to preserve hue for 0,0,0 edge case
      hslColor.s.toString(),
      hslColor.l.toString(),
    ]);
  }, [activeColor, activeHue, currentFormat]);

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

  const swapColorFormat = React.useCallback(() => {
    const newFormat =
      allowedColorFormats[
        (allowedColorFormats.indexOf(currentFormat) + 1) %
          allowedColorFormats.length
      ] ?? allowedColorFormats[0];
    setCurrentFormat(newFormat);
    onColorFormatChanged?.(newFormat);
  }, [currentFormat, onColorFormatChanged, allowedColorFormats]);

  const handleColorInputChange = (
    format: typeof defaultColorFormat,
    value: string[],
  ) => {
    let color;

    if (format === 'hex') {
      const colorString = value[0].startsWith('#') ? value[0] : `#${value[0]}`;
      try {
        color = ColorValue.fromString(colorString);
        setValidHexInput(true);
        if (activeColor.toHexString() != colorString) {
          onChangeCompleted?.(color);
        }
        return;
      } catch (_e) {
        setHexInput(colorString);
        setValidHexInput(false);
        return;
      }
    }

    if (format === 'hsl') {
      const h = Number(value[0]);
      const s = Number(value[1]);
      const l = Number(value[2]);

      if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100) {
        setHslInput(value);
        return;
      }
      const hsl = activeColor.toHslColor();
      if (hsl.h === h && hsl.s === s && hsl.l === l) {
        return;
      }

      color = ColorValue.create({
        h: h,
        s: s,
        l: l,
      });
      onChangeCompleted?.(color);
    }

    if (format === 'rgb') {
      const r = Number(value[0]);
      const g = Number(value[1]);
      const b = Number(value[2]);

      if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        setRgbInput(value);
        return;
      }
      const rgb = activeColor.toRgbColor();
      if (rgb.r === r && rgb.g === g && rgb.b === b) {
        return;
      }

      color = ColorValue.create({
        r: r,
        g: g,
        b: b,
      });
      onChangeCompleted?.(color);
    }
  };

  const hexInputField = (
    <InputContainer status={validHexInput ? undefined : 'negative'}>
      <Input
        size='small'
        maxLength={7}
        minLength={1}
        placeholder='HEX'
        value={hexInput}
        onChange={(event) => {
          const value = event.target.value.startsWith('#')
            ? event.target.value
            : `#${event.target.value}`;
          setHexInput(value);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            handleColorInputChange('hex', [hexInput]);
          }
        }}
        onBlur={(event) => {
          event.preventDefault();
          handleColorInputChange('hex', [hexInput]);
        }}
      />
    </InputContainer>
  );

  const hslInputs = (
    <>
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
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              handleColorInputChange('hsl', hslInput);
            }
          }}
          onBlur={(event) => {
            event.preventDefault();
            handleColorInputChange('hsl', hslInput);
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
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              handleColorInputChange('hsl', hslInput);
            }
          }}
          onBlur={(event) => {
            event.preventDefault();
            handleColorInputChange('hsl', hslInput);
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
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              handleColorInputChange('hsl', hslInput);
            }
          }}
          onBlur={(event) => {
            event.preventDefault();
            handleColorInputChange('hsl', hslInput);
          }}
        />
      </InputContainer>
    </>
  );

  const rgbInputs = (
    <>
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
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              handleColorInputChange('rgb', rgbInput);
            }
          }}
          onBlur={(event) => {
            event.preventDefault();
            handleColorInputChange('rgb', rgbInput);
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
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              handleColorInputChange('rgb', rgbInput);
            }
          }}
          onBlur={(event) => {
            event.preventDefault();
            handleColorInputChange('rgb', rgbInput);
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
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              handleColorInputChange('rgb', rgbInput);
            }
          }}
          onBlur={(event) => {
            event.preventDefault();
            handleColorInputChange('rgb', rgbInput);
          }}
        />
      </InputContainer>
    </>
  );

  return (
    <div>
      <div className='iui-color-picker-section-label'>
        {currentFormat.toUpperCase()}
      </div>
      <div className='iui-color-input'>
        {allowedColorFormats.length > 1 && (
          <IconButton
            styleType='borderless'
            onClick={swapColorFormat}
            size='small'
          >
            <svg viewBox='0 0 16 16' className='iui-icon' aria-hidden>
              <path d='m5 15-3.78125-3.5 3.78125-3.5v2h8v3h-8zm6-7 3.78125-3.5-3.78125-3.5v2h-8v3h8z' />
            </svg>
          </IconButton>
        )}
        <div className='iui-color-input-fields'>
          {currentFormat === 'hex' && hexInputField}
          {currentFormat === 'hsl' && hslInputs}
          {currentFormat === 'rgb' && rgbInputs}
        </div>
      </div>
    </div>
  );
};

export default ColorInputPanel;
