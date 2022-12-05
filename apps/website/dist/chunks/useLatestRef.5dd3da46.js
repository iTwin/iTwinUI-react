import { R as s } from './index.e8aae4d9.js';
import { g as c } from './useMediaQuery.94d811ae.js';
const l =
    'a[href], button, input, textarea, select, details, audio[controls], video[controls], [contenteditable]:not([contenteditable="false"]), [tabindex]:not([tabindex="-1"])',
  f = (e) => {
    if (!e) return [];
    const t = e.querySelectorAll(l);
    return Array.from(t).filter(
      (r) =>
        !r.hasAttribute('disabled') &&
        !r.classList.contains('iui-disabled') &&
        r.getAttribute('aria-disabled') !== 'true',
    );
  },
  m = (e) => {
    if (!e) return [];
    const t = e.querySelectorAll(`${l}, [tabindex="-1"]`);
    return Array.from(t).filter(
      (r) =>
        !r.hasAttribute('disabled') &&
        !r.classList.contains('iui-disabled') &&
        r.getAttribute('aria-disabled') !== 'true',
    );
  },
  v = (e) => {
    const t = s.useRef();
    return [
      s.useCallback(
        (o) => {
          var n, i, a;
          !(!((n = c()) === null || n === void 0) && n.ResizeObserver) ||
            ((i = t.current) === null || i === void 0 || i.disconnect(),
            o &&
              ((t.current = new ResizeObserver(([{ contentRect: u }]) => e(u))),
              (a = t.current) === null || a === void 0 || a.observe(o)));
        },
        [e],
      ),
      t.current,
    ];
  },
  R = (e) => {
    const t = s.useRef(e);
    return (
      s.useEffect(() => {
        t.current = e;
      }, [e]),
      t
    );
  };
export { R as a, m as b, f as g, v as u };
