import { j as K } from './chunks/jsx-runtime.15fba22c.js';
import { u as W, c as j, T as le } from './chunks/useMediaQuery.94d811ae.js';
import { R as e } from './chunks/index.e8aae4d9.js';
/* empty css                              */ import { P as ue } from './chunks/Popover.bbc5633c.js';
import { u as X } from './chunks/useEventListener.370c73bd.js';
import { g as U } from './chunks/numbers.3c7880a5.js';
import './chunks/tippy-react.esm.524b62aa.js';
import './chunks/index.b16088e3.js';
function ce(o, s) {
  return s === 'odd-segments' && (o + 1) % 2 === 0
    ? !0
    : s === 'even-segments' && o % 2 === 0;
}
function Y(o, s, t) {
  const a = [],
    n = [...o];
  if (
    (n.sort((d, i) => d - i),
    n.length === 0 || n[0] < s || n[n.length - 1] > t || s === t)
  )
    return [];
  let l = s;
  for (let d = 0; d < n.length; d++)
    a.push({ left: l, right: n[d] }), (l = n[d]);
  return a.push({ left: l, right: t }), a;
}
const de = (o) => {
    const {
        trackDisplayMode: s,
        sliderMin: t,
        sliderMax: a,
        values: n,
        orientation: l,
      } = o,
      [d, i] = e.useState(() => Y(n, t, a));
    return (
      e.useEffect(() => {
        i(Y(n, t, a));
      }, [n, t, a]),
      e.createElement(
        e.Fragment,
        null,
        s !== 'none' &&
          d.map((b, M) => {
            const g =
                b.left >= t && a !== t ? (100 * (b.left - t)) / (a - t) : 0,
              E =
                b.right >= t && a !== t
                  ? 100 - (100 * (b.right - t)) / (a - t)
                  : 100;
            return e.createElement(
              e.Fragment,
              { key: M },
              ce(M, s)
                ? e.createElement('div', {
                    className: 'iui-slider-track',
                    style: {
                      ...(l === 'horizontal'
                        ? { left: `${g}%`, right: `${E}%` }
                        : { top: `${E}%`, bottom: `${g}%` }),
                    },
                  })
                : null,
            );
          }),
      )
    );
  },
  me = (o) => {
    const {
      content: s,
      children: t,
      className: a,
      style: n,
      visible: l,
      ref: d,
      id: i,
      ...b
    } = o;
    return (
      W(),
      e.createElement(
        ue,
        {
          visible: l,
          interactive: !1,
          content: e.createElement(
            'div',
            {
              className: j('iui-tooltip', a),
              style: n,
              role: 'tooltip',
              id: i,
            },
            s,
          ),
          offset: [0, 4],
          ref: d,
          ...b,
        },
        t && e.cloneElement(t, { title: void 0 }),
      )
    );
  },
  fe = (o) => {
    const {
        value: s,
        index: t,
        minVal: a,
        maxVal: n,
        step: l,
        sliderMin: d,
        sliderMax: i,
        isActive: b,
        onThumbActivated: M,
        onThumbValueChanged: g,
        tooltipProps: E,
        thumbProps: w,
        disabled: h,
        orientation: y,
      } = o,
      F = e.useRef(null),
      f = e.useCallback(
        (k, D) => {
          if (!(h || k.altKey)) {
            switch (k.key) {
              case 'ArrowLeft':
              case 'ArrowDown':
                g(t, Math.max(s - l, a), D);
                break;
              case 'ArrowRight':
              case 'ArrowUp':
                g(t, Math.min(s + l, n), D);
                break;
              case 'Home':
                g(t, a, D);
                break;
              case 'End':
                g(t, n, D);
                break;
              default:
                return;
            }
            k.preventDefault();
          }
        },
        [h, g, t, s, l, a, n],
      ),
      v = e.useCallback(() => {
        !h && M(t);
      }, [h, t, M]),
      [N, R] = e.useState(!1),
      [_, P] = e.useState(!1),
      $ = e.useMemo(() => (s < d ? d : s > i ? i : s), [i, d, s]),
      u = e.useMemo(() => (i === d ? 0 : (100 * ($ - d)) / (i - d)), [$, i, d]),
      { style: C, className: I, ...z } = w || {};
    return e.createElement(
      me,
      { visible: b || N || _, placement: 'top', ...E },
      e.createElement('div', {
        ...z,
        'data-index': t,
        ref: F,
        style: {
          ...C,
          ...(y === 'horizontal' ? { left: `${u}%` } : { bottom: `${u}%` }),
        },
        className: j('iui-slider-thumb', { 'iui-active': b }, I),
        role: 'slider',
        tabIndex: h ? void 0 : 0,
        'aria-valuemin': a,
        'aria-valuenow': s,
        'aria-valuemax': n,
        'aria-disabled': h,
        onPointerDown: v,
        onKeyDown: (k) => f(k, !1),
        onKeyUp: (k) => f(k, !0),
        onFocus: () => R(!0),
        onBlur: () => R(!1),
        onMouseEnter: () => P(!0),
        onMouseLeave: () => P(!1),
      }),
    );
  },
  q = (o, s, t, a) => {
    if (a === 'horizontal') return (U(s, o.left, o.right) - o.left) / o.width;
    const n = U(t, o.top, o.bottom);
    return (o.bottom - n) / o.height;
  },
  pe = (o, s) => {
    if (o.length === 1) return 0;
    const t = o.map((n) => Math.abs(n - s)),
      a = Math.min(...t);
    return t.indexOf(a);
  },
  G = (o, s) =>
    o !== 'auto' ? o : s.length % 2 ? 'even-segments' : 'odd-segments',
  J = (o, s, t) => Math.round((o - t) / s) * s + t,
  he = (o, s, t) => (Number.isInteger(s) ? o.toFixed(0) : o.toFixed(t)),
  Q = (o, s) => {
    var t;
    const a = o.ownerDocument;
    if (
      !o.contains(a.activeElement) ||
      Number(
        (t = a.activeElement) === null || t === void 0
          ? void 0
          : t.getAttribute('data-index'),
      ) !== s
    ) {
      const n = o.querySelector(`[data-index="${s}"]`);
      n && n.focus();
    }
  },
  ve = e.forwardRef((o, s) => {
    var t, a;
    const {
        min: n = 0,
        max: l = 100,
        values: d,
        step: i = 1,
        setFocus: b = !1,
        tooltipProps: M,
        disabled: g = !1,
        tickLabels: E,
        minLabel: w,
        maxLabel: h,
        trackDisplayMode: y = 'auto',
        thumbMode: F = 'inhibit-crossing',
        onChange: f,
        onUpdate: v,
        thumbProps: N,
        className: R,
        railContainerProps: _,
        orientation: P = 'horizontal',
        ...$
      } = o,
      [u, C] = e.useState(d);
    e.useEffect(() => {
      C(d);
    }, [d]);
    const [I, z] = e.useState(() => w ?? n.toString());
    e.useEffect(() => {
      z(w ?? n.toString());
    }, [w, n]);
    const [k, D] = e.useState(() => h ?? l.toString());
    e.useEffect(() => {
      D(h ?? l.toString());
    }, [h, l]);
    const [Z, ee] = e.useState(() => G(y, u));
    e.useEffect(() => {
      ee(G(y, u));
    }, [y, u]),
      W();
    const x = e.useRef(null);
    e.useEffect(() => {
      x.current && b && Q(x.current, 0);
    }, [b]);
    const B = e.useMemo(() => {
        const r = i.toString(),
          c = r.indexOf('.');
        return r.length - (c + 1);
      }, [i]),
      A = e.useCallback(
        (r) => {
          if (F === 'inhibit-crossing') {
            const c = r === 0 ? n : u[r - 1] + i,
              m = r < u.length - 1 ? u[r + 1] - i : l;
            return [c, m];
          }
          return [n, l];
        },
        [l, n, i, F, u],
      ),
      [V, H] = e.useState(void 0),
      O = e.useCallback(
        (r, c) => {
          if (x.current && V !== void 0) {
            const m = q(
              x.current.getBoundingClientRect(),
              r.clientX,
              r.clientY,
              P,
            );
            let p = n + (l - n) * m;
            p = J(p, i, n);
            const [L, S] = A(V);
            if (((p = U(p, L, S)), p !== u[V])) {
              const T = [...u];
              (T[V] = p), C(T), c === 'onChange' ? f?.(T) : v?.(T);
            } else c === 'onChange' && f?.(u);
          }
        },
        [V, n, l, i, A, u, v, f, P],
      ),
      te = e.useCallback(
        (r) => {
          V !== void 0 &&
            (r.preventDefault(), r.stopPropagation(), O(r, 'onUpdate'));
        },
        [V, O],
      ),
      ne = e.useCallback(
        (r, c, m) => {
          if (!(u[r] === c && !m))
            if (m) f?.(u);
            else {
              const p = [...u];
              (p[r] = c), v?.(p), C(p);
            }
        },
        [u, v, f],
      ),
      oe = e.useCallback((r) => {
        H(r);
      }, []),
      se = e.useCallback(
        (r) => {
          V !== void 0 &&
            (O(r, 'onChange'),
            H(void 0),
            r.preventDefault(),
            r.stopPropagation());
        },
        [V, O],
      ),
      re = e.useCallback(
        (r) => {
          if (x.current) {
            const c = q(
              x.current.getBoundingClientRect(),
              r.clientX,
              r.clientY,
              P,
            );
            let m = n + (l - n) * c;
            m = J(m, i, n);
            const p = pe(u, m),
              [L, S] = A(p);
            if (((m = U(m, L, S)), m === u[p])) return;
            const T = [...u];
            (T[p] = m),
              C(T),
              f?.(T),
              v?.(T),
              Q(x.current, p),
              r.preventDefault(),
              r.stopPropagation();
          }
        },
        [n, l, i, u, A, f, v, P],
      );
    X(
      'pointermove',
      te,
      (t = x.current) === null || t === void 0 ? void 0 : t.ownerDocument,
    ),
      X(
        'pointerup',
        se,
        (a = x.current) === null || a === void 0 ? void 0 : a.ownerDocument,
      );
    const ae = e.useMemo(
        () =>
          E
            ? Array.isArray(E)
              ? e.createElement(
                  'div',
                  { className: 'iui-slider-ticks' },
                  E.map((r, c) =>
                    e.createElement(
                      'span',
                      { key: c, className: 'iui-slider-tick' },
                      r,
                    ),
                  ),
                )
              : E
            : null,
        [E],
      ),
      ie = e.useCallback(
        (r, c) => {
          const m = M ? M(r, c, i) : {};
          return { ...m, content: m.content ? m.content : he(c, i, B) };
        },
        [B, i, M],
      );
    return e.createElement(
      'div',
      {
        ref: s,
        className: j(
          'iui-slider-component-container',
          `iui-slider-${P}`,
          { 'iui-disabled': g },
          R,
        ),
        ...$,
      },
      I && e.createElement('span', { className: 'iui-slider-min' }, I),
      e.createElement(
        'div',
        {
          ref: x,
          className: j('iui-slider-container', {
            'iui-grabbing': V !== void 0,
          }),
          onPointerDown: re,
          ..._,
        },
        e.createElement('div', { className: 'iui-slider-rail' }),
        u.map((r, c) => {
          var m;
          const [p, L] = A(c),
            S = N?.(c);
          return e.createElement(fe, {
            key: (m = S?.id) !== null && m !== void 0 ? m : c,
            index: c,
            disabled: g,
            isActive: V === c,
            onThumbActivated: oe,
            onThumbValueChanged: ne,
            minVal: p,
            maxVal: L,
            value: r,
            tooltipProps: ie(c, r),
            thumbProps: S,
            step: i,
            sliderMin: n,
            sliderMax: l,
            orientation: P,
          });
        }),
        e.createElement(de, {
          trackDisplayMode: Z,
          sliderMin: n,
          sliderMax: l,
          values: u,
          orientation: P,
        }),
        ae,
      ),
      k && e.createElement('span', { className: 'iui-slider-max' }, k),
    );
  }),
  Te = () =>
    K.exports.jsx(le, {
      theme: 'dark',
      style: { width: '80%' },
      children: K.exports.jsx(ve, { values: [50], min: 0, max: 100 }),
    });
export { Te as default };
