/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { ColorByName } from './ColorByName';
import { ColorValue } from './ColorValue';

// cspell:ignore cadetblue hsla tbgr

describe('ColorValue', () => {
  it('should compare ColorValue RGB values', () => {
    const cadetBlue = ColorValue.fromTbgr(ColorByName.cadetBlue);
    expect(cadetBlue.tbgr).toEqual(ColorByName.cadetBlue);

    expect(cadetBlue.getRgb()).toEqual(0x5f9ea0);
    expect(cadetBlue.toHexString()).toEqual('#5f9ea0');
    expect(cadetBlue.getRgb()).toEqual(
      ColorValue.from(0x5f, 0x9e, 0xa0).getRgb(),
    );
    expect(cadetBlue.getRgb()).toEqual(ColorValue.from(95, 158, 160).getRgb());
    expect(cadetBlue.toRgbString()).toEqual('rgb(95, 158, 160)');
    expect(cadetBlue.tbgr).toEqual(ColorValue.fromString('cadetblue').tbgr);
    expect(cadetBlue.getRgb()).toEqual(
      ColorValue.fromString('cadetBlue').getRgb(),
    );
  });

  it('should compare ColorValues properly', () => {
    let color1 = ColorValue.from(1, 2, 3, 0);
    let color2 = ColorValue.from(1, 2, 3);
    let color3 = ColorValue.from(0xa, 2, 3, 0);
    const blue = new ColorValue(ColorByName.blue);

    expect(color1.equals(color2)).toBeTruthy();
    expect(color1.equals(blue)).toBeFalsy();
    expect(blue.tbgr).toEqual(ColorByName.blue);
    expect(blue.getRgb()).toEqual(0xff);
    expect(blue.equals(ColorValue.create(blue.toJSON()))).toBeTruthy();

    const colors = color3.colors;
    color3 = ColorValue.from(colors.r, colors.g, colors.b, 0x30);
    expect(color3.equals(ColorValue.from(0xa, 2, 3, 0x30))).toBeTruthy();

    // cornflowerBlue: 0xED9564,
    const cfg = ColorValue.create(ColorByName.cornflowerBlue);
    expect(cfg.equals(ColorValue.from(0x64, 0x95, 0xed))).toBeTruthy();

    const yellow = ColorValue.create('yellow');
    const yellow2 = ColorValue.create(ColorByName.yellow);
    expect(yellow.equals(yellow2)).toBeTruthy();
    expect(yellow.name).toEqual('yellow');
    expect(color1.name).toBeUndefined();

    const yellow3 = ColorValue.create('#FFFF00');

    expect(yellow.equals(yellow3)).toBeTruthy();
    let yellow4 = ColorValue.create('rgbA(255,255,0,100%)');
    expect(yellow.equals(yellow4)).toBeTruthy();
    yellow4 = ColorValue.create('rgb(255,255,0)');
    expect(yellow.equals(yellow4)).toBeTruthy();
    yellow4 = ColorValue.create('Yellow'); // wrong case, should still work
    expect(yellow.equals(yellow4)).toBeTruthy();
    let yellow5 = ColorValue.create('rgba(255,255,0,0.2)');
    expect(yellow5.toRgbaString()).toEqual('rgba(255, 255, 0, 0.20)');
    expect(yellow.getRgb() === yellow5.getRgb()).toBeTruthy();
    expect(yellow5.getAlpha()).toEqual(51);
    expect(yellow5.getTransparency()).toEqual(204);

    yellow5 = ColorValue.create('rgba(100%,100%, 0%, 20%)');
    expect(yellow.getRgb() === yellow5.getRgb()).toBeTruthy();
    expect(yellow5.getAlpha()).toEqual(51);

    const t1 = ColorValue.create('rgba(10% 10% 10% / 90%)').colors;
    expect(t1.r).toEqual(25);
    expect(t1.g).toEqual(25);
    expect(t1.b).toEqual(25);
    expect(t1.t).toEqual(25);
    const str = yellow.toHexString();
    expect(str).toEqual('#ffff00');
    const str2 = yellow.toRgbString();
    expect(str2).toEqual('rgb(255, 255, 0)');
    yellow4 = ColorValue.create(str);
    expect(yellow.equals(yellow4)).toBeTruthy();
    yellow4 = ColorValue.create(str2);
    expect(yellow.equals(yellow4)).toBeTruthy();
    const hsl = yellow.toHSL();
    yellow4 = ColorValue.fromHSL(hsl);
    expect(yellow4.toHslString()).toEqual('hsl(60, 100%, 50%)');
    expect(yellow.equals(yellow4)).toBeTruthy();
    const hsv = yellow.toHSV();
    yellow4 = ColorValue.fromHSV(hsv);
    expect(yellow.equals(yellow4)).toBeTruthy();
    expect(yellow4.toHsvString()).toEqual('hsv(60, 100%, 100%)');

    color1 = ColorValue.create(0x123456); // no transparency
    expect(color1.tbgr).toEqual(0x123456);

    color1 = ColorValue.create(0xf0123456); // make sure this works if high-bit is set
    expect(color1.tbgr).toEqual(0xf0123456);
    color1 = ColorValue.create(0xff00000000); // try it with a number bigger than 32 bits
    expect(color1.tbgr).toEqual(0); // should get truncated

    color1 = ColorValue.create(1.1);
    expect(color1.tbgr).toEqual(1); // should get rounded down

    color2 = ColorValue.create('hsla(180, 50%, 50%, .2)');
    let t2 = color2.colors;
    expect(t2.r).toEqual(64);
    expect(t2.g).toEqual(191);
    expect(t2.b).toEqual(191);
    expect(t2.t).toEqual(204);
    expect(color2.toHslaString()).toEqual('hsla(180, 50%, 50%, 0.20)');
    color3 = ColorValue.fromHSL({ h: 180, s: 50, l: 50 }, 204); // 204 = .8 * 255
    expect(color3.toHslaString()).toEqual('hsla(180, 50%, 50%, 0.20)');

    color3 = ColorValue.fromHSV({ h: 180, s: 50, v: 50 }, 204);
    expect(color3.toHsvaString()).toEqual('hsva(180, 50%, 50%, 0.20)');
    color3 = ColorValue.fromHSV({ h: 180, s: 50, v: 50 }, 0.8 * 255); // transparency = 1-alpha => 0.8
    expect(color3.toHsvaString()).toEqual('hsva(180, 50%, 50%, 0.20)');

    t2 = ColorValue.create('hsl(180, 50%, 50%)').colors;
    expect(64).toEqual(t2.r);
    expect(191).toEqual(t2.g);
    expect(191).toEqual(t2.b);
    expect(0).toEqual(t2.t);

    t2 = ColorValue.create('hsl(0, 0%, 97%)').colors; // s===0 is a special case
    expect(247).toEqual(t2.r);
    expect(247).toEqual(t2.g);
    expect(247).toEqual(t2.b);
    expect(0).toEqual(t2.t);

    color1 = new ColorValue(ColorByName.blue).withAlpha(100);
    expect(100).toEqual(color1.getAlpha());
    t2 = color1.colors;
    expect(255).toEqual(t2.b);
    expect(0).toEqual(t2.r);
    expect(0).toEqual(t2.g);
    expect(155).toEqual(t2.t);

    color1 = new ColorValue(ColorByName.green).withTransparency(100);
    expect(100).toEqual(color1.getTransparency());
    t2 = color1.colors;
    expect(128).toEqual(t2.g);
    expect(0).toEqual(t2.r);
    expect(0).toEqual(t2.b);
    expect(100).toEqual(t2.t);
  });
});
