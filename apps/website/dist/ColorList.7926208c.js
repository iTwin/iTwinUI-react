import { T as i } from './chunks/tippy-react.esm.524b62aa.js';
import { j as e } from './chunks/jsx-runtime.15fba22c.js';
import './chunks/index.e8aae4d9.js';
import './chunks/index.b16088e3.js';
const m = ({ colors: a }) =>
  e.exports.jsx('div', {
    'data-iui-theme': 'dark',
    className: 'color-list',
    children: a.map((t) =>
      e.exports.jsx(
        i,
        {
          content: e.exports.jsx('div', {
            className: 'color-tooltip',
            children: t,
          }),
          aria: { content: 'labelledby' },
          delay: 0,
          duration: [300, 50],
          interactive: !0,
          allowHTML: !0,
          maxWidth: 450,
          children: e.exports.jsx(
            'button',
            {
              'aria-label': t,
              className: 'color-list-item',
              style: { '--_color': t },
            },
            t,
          ),
        },
        t,
      ),
    ),
  });
export { m as default };
