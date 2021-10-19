/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/

import { getBoundedValue } from '../functions/numbers';

// cspell: ignore rgbt tbgr ttbbggrr bbggrr rrggbb rrggbbaa hsla lerp torgb dhue dsaturation dvalue intpart fractpart cyanish

// portions adapted from Three.js Copyright © 2010-2017 three.js authors

const scratchBytes = new Uint8Array(4);
const scratchUInt32 = new Uint32Array(scratchBytes.buffer);

/**
 * A color defined by Red, Green, and Blue
 * @public
 */
export type RgbColor = {
  /** 0-255 */
  r: number;
  /** 0-255 */
  g: number;
  /** 0-255 */
  b: number;
  /** 0-1 */
  a?: number;
};

/**
 * A color defined by Hue, Saturation, and Lightness.
 */
export type HslColor = {
  /** 0-360 */
  h: number;
  /** 0-100 */
  s: number;
  /** 0-100 */
  l: number;
  /** 0-1 */
  a?: number;
};

/**
 * A color defined by Hue, Saturation, and Value
 * @public
 */
export type HsvColor = {
  /** 0-360 */
  h: number;
  /** 0-100 */
  s: number;
  /** 0-100 */
  v: number;
  /** 0-1 */
  a?: number;
};

/**
 * An unsigned integer in 0xRRGGBB or 0xRRGGBBAA format
 */
export type RgbColorNumber = number;

/** All supported color specifications. */
export type ColorType =
  | string
  | RgbColor
  | HslColor
  | HsvColor
  | RgbColorNumber;

/** isRgbValue type guard. */
export const isRgbColor = (value: ColorType): value is RgbColor => {
  return (
    typeof value !== 'string' &&
    typeof value !== 'number' &&
    'r' in value &&
    'g' in value &&
    'b' in value
  );
};

/** isHslValue type guard. */
export const isHslColor = (value: ColorType): value is HslColor => {
  return (
    typeof value !== 'string' &&
    typeof value !== 'number' &&
    'h' in value &&
    's' in value &&
    'l' in value
  );
};

/** isHsvValue type guard. */
export const isHsvColor = (value: ColorType): value is HsvColor => {
  return (
    typeof value !== 'string' &&
    typeof value !== 'number' &&
    'h' in value &&
    's' in value &&
    'v' in value
  );
};

/** is string type guard. */
export const isStringColor = (value: ColorType): value is string => {
  return typeof value === 'string';
};

/** is RGBA number type guard. */
export const isRgbColorNumber = (value: ColorType): value is number => {
  return typeof value === 'number';
};

/**
 * An unsigned 32-bit integer in 0xTTBBGGRR format
 */
export type TbgrColor = number;

/** An immutable integer representation of a color.
 *
 * Colors are stored as 4 components: Red, Blue, Green, and Transparency (0=fully opaque). Each is an 8-bit integer between 0-255.
 *
 * Much confusion results from attempting to interpret those 4 one-byte values as a 4 byte integer. There are generally two sources
 * of confusion:
 *  1. The ordering of the Red, Green, Blue bytes; and
 *  2. Whether to specify transparency or opacity (sometimes referred to as "alpha").
 *
 * ColorValue uses `0xTTBBGGRR` (red in the low byte. 0==fully opaque in high byte) internally, but it also provides methods
 *
 * The `create` method accepts any ColorType format.
 *
 * @public
 */
export class ColorValue {
  private readonly _tbgr: number;

  private constructor(tbgr: number) {
    scratchUInt32[0] = tbgr; // Force to be a 32-bit unsigned integer
    this._tbgr = scratchUInt32[0];
  }

  /**
   * Create a new ColorValue.
   * @param val value to use.
   * If a number, it is interpreted as a 0xRRGGBB or 0xRRGGBBAA value.
   *
   * If a string, must be in one of the following forms:
   * *"rgb(255,0,0)"*
   * *"rgba(255,0,0,.2)"*
   * *"rgb(100%,0%,0%)"*
   * *"hsl(120,50%,50%)"*
   * *"#rrggbb"*
   */
  public static create(val: ColorType): ColorValue {
    if (isRgbColor(val)) {
      return ColorValue.fromRGB(val);
    }
    if (isHslColor(val)) {
      return ColorValue.fromHSL(val);
    }
    if (isHsvColor(val)) {
      return ColorValue.fromHSV(val);
    }
    if (isRgbColorNumber(val)) {
      let red = 0;
      let green = 0;
      let blue = 0;
      let alpha = 1;

      if (val > 0xffffff) {
        /* 0xRRGGBBAA */
        scratchUInt32[0] = val;
        red = scratchBytes[3];
        green = scratchBytes[2];
        blue = scratchBytes[1];
        alpha = scratchBytes[0];
      } else {
        /* 0xRRGGBB */
        scratchUInt32[0] = val;
        red = scratchBytes[2];
        green = scratchBytes[1];
        blue = scratchBytes[0];
      }
      const transparency = (1 - alpha) * 255;

      return ColorValue.fromTbgr(
        ColorValue.computeTbgrFromComponents(red, green, blue, transparency),
      );
    }

    if (isStringColor(val)) {
      return ColorValue.fromString(val);
    }

    return ColorValue.fromTbgr(0);
  }

  /** Convert this ColorValue to a 32 bit number representing the 0xTTBBGGRR value */
  public toTbgr(): TbgrColor {
    return this._tbgr;
  }

  /** Create a ColorValue from its 0xTTBBGGRR representation. */
  public static fromTbgr(tbgr: TbgrColor): ColorValue {
    return new ColorValue(tbgr);
  }

  /** Create a ColorValue from Red, Green, Blue, Transparency values. All inputs should be integers between 0-255. */
  private static fromRgbt(
    red: number,
    green: number,
    blue: number,
    transparency?: number,
  ): ColorValue {
    return this.fromTbgr(
      this.computeTbgrFromComponents(red, green, blue, transparency),
    );
  }

  /** Compute the 0xTTBBGGRR value corresponding to the specified Red, Green, Blue, Transparency components. All inputs should be integers between 0-255. */
  private static computeTbgrFromComponents(
    red: number,
    green: number,
    blue: number,
    transparency?: number,
  ): number {
    scratchBytes[0] = red;
    scratchBytes[1] = green;
    scratchBytes[2] = blue;
    scratchBytes[3] = transparency || 0;
    return scratchUInt32[0];
  }

  /** Create a ColorValue from a string representation. The following representations are supported:
   * *"rgb(255,0,0)"*
   * *"rgba(255,0,0,.2)"*
   * *"rgb(100%,0%,0%)"*
   * *"hsl(120,50%,50%)"*
   * *"#rrggbb"*
   */
  public static fromString(val: string): ColorValue {
    return this.fromTbgr(this.computeTbgrFromString(val));
  }

  /** Create a ColorValue from hue, saturation, lightness values.  */
  public static fromHSL(hsl: HslColor): ColorValue {
    const alpha = hsl.a ?? 1;
    return this.fromTbgr(
      this.computeTbgrFromHSL(
        hsl.h / 360,
        hsl.s / 100,
        hsl.l / 100,
        (1 - alpha) * 255,
      ),
    );
  }

  /** Create a ColorValue from an RgbColor */
  public static fromRGB(rgb: RgbColor): ColorValue {
    const alpha = rgb.a ?? 1;
    return ColorValue.fromRgbt(rgb.r, rgb.g, rgb.b, (1 - alpha) * 255);
  }

  /** Create a ColorValue from an HsvColor */
  public static fromHSV(hsv: HsvColor): ColorValue {
    const alpha = hsv.a ?? 1;
    const transparency = (1 - alpha) * 255;

    // Check for simple case first.
    if (!hsv.s || hsv.h === -1) {
      // hue must be undefined, have no color only white
      const white = 0xff & Math.floor((255.0 * hsv.v) / 100.0 + 0.5 + 3.0e-14);
      return ColorValue.fromRgbt(white, white, white, 0);
    }

    let dhue = hsv.h,
      dsaturation = hsv.s,
      dvalue = hsv.v;
    if (dhue === 360) {
      dhue = 0.0;
    }

    dhue /= 60; // hue is now [0..6]
    const hueIntpart = Math.floor(dhue); // convert double -> int
    const hueFractpart = dhue - hueIntpart;
    dvalue /= 100;
    dsaturation /= 100;

    const p = 0xff & Math.floor(dvalue * (1.0 - dsaturation) * 255.0 + 0.5);
    const q =
      0xff &
      Math.floor(dvalue * (1.0 - dsaturation * hueFractpart) * 255.0 + 0.5);
    const t =
      0xff &
      Math.floor(
        dvalue * (1.0 - dsaturation * (1.0 - hueFractpart)) * 255.0 + 0.5,
      );
    const v = 0xff & Math.floor(dvalue * 255 + 0.5);

    let r = 0,
      b = 0,
      g = 0;
    switch (hueIntpart) {
      case 0:
        r = v;
        g = t;
        b = p;
        break; // reddish
      case 1:
        (r = q), (g = v);
        b = p;
        break; // yellowish
      case 2:
        (r = p), (g = v);
        b = t;
        break; // greenish
      case 3:
        (r = p), (g = q);
        b = v;
        break; // cyanish
      case 4:
        (r = t), (g = p);
        b = v;
        break; // bluish
      case 5:
        (r = v), (g = p);
        b = q;
        break; // magenta-ish
    }

    return ColorValue.fromRgbt(r, g, b, transparency);
  }

  /** Compute the 0xTTBBGGRR value corresponding to a string representation of a color. The following representations are supported:
   * *"rgb(255,0,0)"*
   * *"rgba(255,0,0,.2)"*
   * *"rgb(100%,0%,0%)"*
   * *"hsl(120,50%,50%)"*
   * *"#rrggbb"*
   */
  private static computeTbgrFromString(val: string): number {
    val = val.toLowerCase();
    let m = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(val);
    if (m) {
      // rgb / hsl
      let color;
      const name = m[1];
      const components = m[2];

      const hasPercent = (str: string) => str[str.length - 1] === '%';
      const floatOrPercent = (str: string) => {
        const v = parseFloat(str);
        return 255 * getBoundedValue(hasPercent(str) ? v / 100 : v, 0, 1);
      };
      const intOrPercent = (str: string) => {
        const v = hasPercent(str)
          ? (parseFloat(str) / 100) * 255
          : parseInt(str, 10);
        return getBoundedValue(v, 0, 255);
      };

      switch (name) {
        case 'rgb':
        case 'rgba':
          color = /^(\d+%*)\s*[, ]\s*(\d+%*)\s*[, ]\s*(\d+%*)\s*([,\/]\s*([0-9]*\.?[0-9]+%*)\s*)?$/.exec(
            components,
          );
          if (color) {
            // rgb(255,0,0) rgba(255,0,0,0.5)
            return this.computeTbgrFromComponents(
              intOrPercent(color[1]),
              intOrPercent(color[2]),
              intOrPercent(color[3]),
              typeof color[5] === 'string' ? 255 - floatOrPercent(color[5]) : 0,
            );
          }

          break;
        case 'hsl':
        case 'hsla':
          color = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
            components,
          );
          if (color) {
            // hsl(120,50%,50%) hsla(120,50%,50%,0.5)
            const h = parseFloat(color[1]) / 360;
            const s = parseInt(color[2], 10) / 100;
            const l = parseInt(color[3], 10) / 100;
            const t =
              typeof color[5] === 'string' ? 255 - floatOrPercent(color[5]) : 0;
            return this.computeTbgrFromHSL(h, s, l, t);
          }

          break;
      }
      // eslint-disable-next-line no-cond-assign
    } else if ((m = /^\#([a-f0-9]+)$/.exec(val))) {
      // hex color
      const hex = m[1];
      const size = hex.length;

      if (size === 3) {
        // #ff0
        return this.computeTbgrFromComponents(
          parseInt(hex.charAt(0) + hex.charAt(0), 16),
          parseInt(hex.charAt(1) + hex.charAt(1), 16),
          parseInt(hex.charAt(2) + hex.charAt(2), 16),
          0,
        );
      }
      if (size === 6) {
        // #ff0000
        return this.computeTbgrFromComponents(
          parseInt(hex.charAt(0) + hex.charAt(1), 16),
          parseInt(hex.charAt(2) + hex.charAt(3), 16),
          parseInt(hex.charAt(4) + hex.charAt(5), 16),
          0,
        );
      }
      if (size === 8) {
        // #ff0000ff
        return this.computeTbgrFromComponents(
          parseInt(hex.charAt(0) + hex.charAt(1), 16),
          parseInt(hex.charAt(2) + hex.charAt(3), 16),
          parseInt(hex.charAt(4) + hex.charAt(5), 16),
          255 - parseInt(hex.charAt(6) + hex.charAt(7), 16),
        );
      }
    }

    throw new Error('unable to parse string into ColorValue');
  }

  public get colors(): { r: number; g: number; b: number; t: number } {
    return ColorValue.getColors(this._tbgr);
  }

  /** Get the r,g,b,t values encoded in an 0xTTBBGGRR value. Values will be integers between 0-255. */
  public static getColors(tbgr: number) {
    scratchUInt32[0] = tbgr;
    return {
      b: scratchBytes[2],
      g: scratchBytes[1],
      r: scratchBytes[0],
      t: scratchBytes[3],
    };
  }

  /** The color value of this ColorValue as an integer in the form 0xTTBBGGRR (red in the low byte) */
  public get tbgr(): number {
    return this._tbgr;
  }

  /** Get the RGB value of the 0xTTBBGGRR color as a number in 0xRRGGBB or 0xRRGGBBAA format */
  private getRgb(includeAlpha?: boolean): number {
    scratchUInt32[0] = this._tbgr;
    if (includeAlpha) {
      return (
        (scratchBytes[0] << 24) +
        (scratchBytes[1] << 16) +
        (scratchBytes[2] << 8) +
        (255 - scratchBytes[3])
      );
    }

    return (scratchBytes[0] << 16) + (scratchBytes[1] << 8) + scratchBytes[2];
  }

  /** Get the alpha value for this ColorValue. Will be between 0-255 */
  public getAlpha(): number {
    scratchUInt32[0] = this._tbgr;
    return 255 - scratchBytes[3];
  }

  /** Convert this ColorValue to a string in the form "#rrggbb" or "#rrggbbaa" where values are hex digits of the respective colors */
  public toHexString(includeAlpha?: boolean): string {
    if (includeAlpha) {
      return `#${this.getRgb(includeAlpha).toString(16)}`;
    }
    return `#${`000000${this.getRgb().toString(16)}`.slice(-6)}`;
  }

  /** Compute the 0xTTBBGGRR color corresponding to the specified hue, saturation, lightness values. */
  private static computeTbgrFromHSL(
    /** 0-1 */
    h: number,
    /** 0-1 */
    s: number,
    /** 0-1 */
    l: number,
    transparency = 0,
  ): number {
    const torgb = (p1: number, q1: number, t: number) => {
      if (t < 0) {
        t += 1;
      }
      if (t > 1) {
        t -= 1;
      }
      if (t < 1 / 6) {
        return p1 + (q1 - p1) * 6 * t;
      }
      if (t < 1 / 2) {
        return q1;
      }
      if (t < 2 / 3) {
        return p1 + (q1 - p1) * 6 * (2 / 3 - t);
      }
      return p1;
    };

    const hue2rgb = (p1: number, q1: number, t: number) =>
      Math.round(torgb(p1, q1, t) * 255);
    const modulo = (n: number, m: number) => ((n % m) + m) % m;

    // h,s,l ranges are in 0.0 - 1.0
    h = modulo(h, 1);
    s = getBoundedValue(s, 0, 1);
    l = getBoundedValue(l, 0, 1);

    if (s === 0) {
      l *= 255;
      return this.computeTbgrFromComponents(l, l, l, transparency);
    }

    const p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
    const q = 2 * l - p;
    return this.computeTbgrFromComponents(
      hue2rgb(q, p, h + 1 / 3),
      hue2rgb(q, p, h),
      hue2rgb(q, p, h - 1 / 3),
      transparency,
    );
  }

  /** Create an HslColor from this ColorValue */
  public toHsl(): HslColor {
    // internally h,s,l ranges are in 0.0 - 1.0
    const col = this.colors;
    col.r /= 255;
    col.g /= 255;
    col.b /= 255;
    const max = Math.max(col.r, col.g, col.b);
    const min = Math.min(col.r, col.g, col.b);

    let hue = 0;
    let saturation;
    const lightness = (min + max) / 2.0;

    if (min === max) {
      saturation = 0;
    } else {
      const delta = max - min;
      saturation =
        lightness <= 0.5 ? delta / (max + min) : delta / (2 - max - min);
      switch (max) {
        case col.r:
          hue = (col.g - col.b) / delta + (col.g < col.b ? 6 : 0);
          break;
        case col.g:
          hue = (col.b - col.r) / delta + 2;
          break;
        case col.b:
          hue = (col.r - col.g) / delta + 4;
          break;
      }
      hue /= 6;
    }

    return {
      h: Math.round(hue * 360),
      s: Math.round(saturation * 100),
      l: Math.round(lightness * 100),
      a: this.getAlpha() / 255,
    };
  }

  /** Create an [[RgbColor]] from this ColorValue */
  public toRgb(): RgbColor {
    const { r, g, b } = ColorValue.getColors(this._tbgr);
    return { r, g, b, a: this.getAlpha() / 255 };
  }

  /** Create an [[HsvColor]] from this ColorValue */
  public toHsv(): HsvColor {
    const { r, g, b } = this.colors;
    let min = r < g ? r : g;
    if (b < min) {
      min = b;
    }

    let max = r > g ? r : g;
    if (b > max) {
      max = b;
    }

    /* amount of "blackness" present */
    const v = Math.floor((max / 255.0) * 100 + 0.5);
    const deltaRgb = max - min;
    const s = max !== 0.0 ? Math.floor((deltaRgb / max) * 100 + 0.5) : 0;
    let h = 0;

    if (s) {
      const redDistance = (max - r) / deltaRgb;
      const greenDistance = (max - g) / deltaRgb;
      const blueDistance = (max - b) / deltaRgb;

      let intermediateHue: number;
      if (r === max) {
        /* color between yellow & magenta */
        intermediateHue = blueDistance - greenDistance;
      } else if (g === max) {
        /* color between cyan & yellow */
        intermediateHue = 2.0 + redDistance - blueDistance;
      } else {
        /* color between magenta & cyan */
        intermediateHue = 4.0 + greenDistance - redDistance;
      }

      /* intermediate hue is [0..6] */
      intermediateHue *= 60;

      if (intermediateHue < 0.0) {
        intermediateHue += 360;
      }

      h = Math.floor(intermediateHue + 0.5);

      if (h >= 360) {
        h = 0;
      }
    } else {
      h = 0;
    }

    return { h, s, v, a: this.getAlpha() / 255 };
  }

  /** True if the value of this ColorValue is the same as another ColorValue. */
  public equals(other: ColorValue): boolean {
    return this._tbgr === other._tbgr;
  }

  /** Convert the 0xTTBBGGRR color to a string of the form "rgba(r,g,b,a)" where the color components are specified in decimal and the alpha component is a fraction. */
  public toRgbString(includeAlpha?: boolean): string {
    const rgb = this.toRgb();
    const rgbString = `${rgb.r}, ${rgb.g}, ${rgb.b}`;

    if (includeAlpha) {
      const alpha = rgb.a ?? 1;
      return `rgba(${rgbString}, ${alpha.toFixed(2)})`;
    }
    return `rgb(${rgbString})`;
  }

  /** Convert this ColorValue to a string in the form "hsl(h,s,l) or hsla(h,s,l,a)" - i.e hsl(120,50%,50%). */
  public toHslString(includeAlpha?: boolean): string {
    const hsl = this.toHsl();
    const hslString = `${hsl.h}, ${hsl.s}%, ${hsl.l}%`;
    if (includeAlpha) {
      const alpha = hsl.a ?? 1;
      return `hsla(${hslString}, ${alpha.toFixed(2)})`;
    }
    return `hsl(${hslString})`;
  }

  /** Convert this ColorValue to a string in the form "hsv(h,s,v) or hsva(h,s,v,a)" - i.e hsv(120,50%,50%). */
  public toHsvString(includeAlpha?: boolean): string {
    const hsv = this.toHsv();
    const hsvString = `${hsv.h}, ${hsv.s}%, ${hsv.v}%`;

    if (includeAlpha) {
      const alpha = hsv.a ?? 1;
      return `hsva(${hsvString}, ${alpha.toFixed(2)})`;
    }
    return `hsv(${hsvString})`;
  }
}
