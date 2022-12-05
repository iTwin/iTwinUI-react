import { j as r } from './chunks/jsx-runtime.15fba22c.js';
import { R as e } from './chunks/index.e8aae4d9.js';
import {
  u as b,
  c as f,
  a as N,
  T as y,
} from './chunks/useMediaQuery.94d811ae.js';
/* empty css                              */ import { I as j } from './chunks/InputContainer.0ab7d015.js';
import { S as R } from './chunks/StatusIconMap.31898275.js';
const w = (o) => {
    const { children: n, className: a, disabled: i, legend: s, ...t } = o;
    return (
      b(),
      e.createElement(
        'fieldset',
        { className: f('iui-fieldset', a), disabled: i, ...t },
        s && e.createElement('legend', null, s),
        i
          ? e.Children.map(n, (l) =>
              e.isValidElement(l) ? e.cloneElement(l, { disabled: !0 }) : l,
            )
          : n,
      )
    );
  },
  x = (o) => {
    const {
      children: n,
      disabled: a = !1,
      displayStyle: i = 'default',
      label: s,
      message: t,
      status: l,
      svgIcon: c,
      className: p,
      style: d,
      required: u = !1,
      ...m
    } = o;
    b();
    const h = () => {
      if (c) return e.cloneElement(c, { 'aria-hidden': !0 });
      if (l && t) return e.cloneElement(R[l](), { 'aria-hidden': !0 });
    };
    return e.createElement(
      j,
      {
        label: s,
        disabled: a,
        required: u,
        status: l,
        message: t,
        icon: h(),
        isLabelInline: i === 'inline',
        className: p,
        style: d,
        ...m,
      },
      e.createElement('div', { className: 'iui-input-group' }, n),
    );
  },
  g = e.forwardRef((o, n) => {
    const {
      className: a,
      disabled: i = !1,
      label: s,
      status: t,
      style: l,
      setFocus: c = !1,
      ...p
    } = o;
    b();
    const d = e.useRef(null),
      u = N(d, n);
    e.useEffect(() => {
      d.current && c && d.current.focus();
    }, [c]);
    const m = e.createElement('input', {
      className: f('iui-radio', a && { [a]: !s }),
      style: s ? void 0 : l,
      disabled: i,
      type: 'radio',
      ref: u,
      ...p,
    });
    return s
      ? e.createElement(
          'label',
          {
            className: f(
              'iui-radio-wrapper',
              { 'iui-disabled': i, [`iui-${t}`]: !!t },
              a,
            ),
            style: l,
          },
          m,
          s && e.createElement('span', { className: 'iui-radio-label' }, s),
        )
      : m;
  }),
  E = e.forwardRef((o, n) => {
    const {
      disabled: a = !1,
      labelPosition: i = 'right',
      icon: s,
      label: t,
      setFocus: l = !1,
      className: c,
      style: p,
      ...d
    } = o;
    b();
    const u = e.useRef(null),
      m = N(u, n),
      h = t ? 'label' : 'div';
    return (
      e.useEffect(() => {
        u.current && l && u.current.focus();
      }, [l]),
      e.createElement(
        h,
        {
          className: f(
            'iui-toggle-switch-wrapper',
            {
              'iui-disabled': a,
              'iui-label-on-right': t && i === 'right',
              'iui-label-on-left': t && i === 'left',
            },
            c,
          ),
          style: p,
        },
        e.createElement('input', {
          className: 'iui-toggle-switch',
          type: 'checkbox',
          role: 'switch',
          disabled: a,
          ref: m,
          ...d,
        }),
        s &&
          e.cloneElement(s, {
            className: f('iui-toggle-switch-icon', s.props.className),
            'aria-hidden': !0,
          }),
        t &&
          e.createElement('span', { className: 'iui-toggle-switch-label' }, t),
      )
    );
  }),
  k = () =>
    r.exports.jsx(y, {
      theme: 'dark',
      children: r.exports.jsxs(w, {
        legend: 'General Settings',
        style: { display: 'flex', flexDirection: 'column', gap: 12 },
        children: [
          r.exports.jsxs(x, {
            label: 'Color Theme',
            children: [
              r.exports.jsx(g, {
                name: 'choice',
                value: 'option1',
                label: 'Light',
              }),
              r.exports.jsx(g, {
                name: 'choice',
                value: 'option2',
                label: 'Dark',
              }),
              r.exports.jsx(g, {
                name: 'choice',
                value: 'option3',
                label: 'Match device',
              }),
            ],
          }),
          r.exports.jsxs(x, {
            children: [
              r.exports.jsx(E, { label: 'Share crash logs' }),
              r.exports.jsx(E, { disabled: !0, label: 'Advanced settings' }),
            ],
          }),
        ],
      }),
    });
export { k as default };
