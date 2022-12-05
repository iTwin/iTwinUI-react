import { j as i } from './chunks/jsx-runtime.15fba22c.js';
import { u as h, c as n, T as E } from './chunks/useMediaQuery.94d811ae.js';
import { r as o, R as e } from './chunks/index.e8aae4d9.js';
/* empty css                              */ import { S as f } from './chunks/StatusIconMap.31898275.js';
const b = (a) =>
    o.exports.createElement(
      'svg',
      { viewBox: '0 0 16 16', ...a },
      o.exports.createElement('path', {
        d:
          'm12.5 2-4.5 4.5-4.5-4.5-1.5 1.5 4.5 4.5-4.5 4.5 1.5 1.5 4.5-4.5 4.5 4.5 1.5-1.5-4.5-4.5 4.5-4.5z',
      }),
    ),
  k = (a) => {
    const {
      children: c,
      className: m,
      type: s = 'informational',
      clickableText: l,
      clickableTextProps: t,
      onClose: r,
      style: u,
      isSticky: d = !1,
      ...p
    } = a;
    h();
    const x = f[s];
    return e.createElement(
      'div',
      {
        className: n('iui-alert', m),
        'data-iui-status': s,
        'data-iui-variant': d ? 'sticky' : void 0,
        style: u,
        ...p,
      },
      e.createElement(x, { className: 'iui-alert-icon' }),
      e.createElement(
        'span',
        { className: 'iui-alert-message' },
        c,
        l &&
          e.createElement(
            'a',
            { ...t, className: n('iui-alert-link', t?.className) },
            l,
          ),
      ),
      r &&
        e.createElement(
          'button',
          {
            onClick: r,
            'aria-label': 'Close',
            type: 'button',
            className: 'iui-alert-button',
          },
          e.createElement(
            'span',
            { className: 'iui-alert-button-icon', 'aria-hidden': !0 },
            e.createElement(b, null),
          ),
        ),
    );
  };
function C() {
  return i.exports.jsx(E, {
    theme: 'dark',
    children: i.exports.jsx(k, {
      onClose: () => console.log('CLOSED'),
      clickableText: 'Learn more',
      style: { minWidth: 280 },
      children: 'This is an alert',
    }),
  });
}
export { C as default };
