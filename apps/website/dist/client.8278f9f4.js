import { r as e } from './chunks/index.e8aae4d9.js';
import { r as y } from './chunks/index.b16088e3.js';
var l,
  f,
  u = y.exports;
(f = u.createRoot), (l = u.hydrateRoot);
const a = ({ value: t, name: r }) =>
  t
    ? e.exports.createElement('astro-slot', {
        name: r,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: { __html: t },
      })
    : null;
a.shouldComponentUpdate = () => !1;
function x(t) {
  for (const r in t) if (r.startsWith('__reactContainer')) return r;
}
const v = (t) => (r, n, { default: o, ...p }, { client: d }) => {
  if (!t.hasAttribute('ssr')) return;
  for (const [c, m] of Object.entries(p))
    n[c] = e.exports.createElement(a, { value: m, name: c });
  const s = e.exports.createElement(
      r,
      n,
      o != null ? e.exports.createElement(a, { value: o }) : o,
    ),
    i = x(t);
  return (
    i && delete t[i],
    d === 'only'
      ? e.exports.startTransition(() => {
          f(t).render(s);
        })
      : e.exports.startTransition(() => {
          l(t, s);
        })
  );
};
export { v as default };
