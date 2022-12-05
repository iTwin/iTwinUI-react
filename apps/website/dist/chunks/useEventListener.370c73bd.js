import { R as n } from './index.e8aae4d9.js';
const f = (t, u, r) => {
  const e = n.useRef();
  n.useEffect(() => {
    e.current = u;
  }, [u]),
    n.useEffect(() => {
      if (!r) return;
      const c = (o) => {
        var s;
        return (s = e.current) === null || s === void 0 ? void 0 : s.call(e, o);
      };
      return (
        r.addEventListener(t, c),
        () => {
          r.removeEventListener(t, c);
        }
      );
    }, [t, r]);
};
export { f as u };
