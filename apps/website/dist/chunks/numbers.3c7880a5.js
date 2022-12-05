const o = (a, e, t) => Math.min(t, Math.max(e, a)),
  r = (a = 21) => {
    const e =
      '_-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let t = '';
    for (let n = 0; n < a; n++) t += e[(Math.random() * 64) | 0];
    return t;
  };
export { r as a, o as g };
