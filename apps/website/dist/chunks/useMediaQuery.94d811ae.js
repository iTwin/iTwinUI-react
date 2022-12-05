import { R as d } from './index.e8aae4d9.js';
/* empty css                       */ var C = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ (function (
  i,
) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = [], r = 0; r < arguments.length; r++) {
        var e = arguments[r];
        if (!!e) {
          var l = typeof e;
          if (l === 'string' || l === 'number') o.push(e);
          else if (Array.isArray(e)) {
            if (e.length) {
              var c = n.apply(null, e);
              c && o.push(c);
            }
          } else if (l === 'object')
            if (e.toString === Object.prototype.toString)
              for (var a in e) t.call(e, a) && e[a] && o.push(a);
            else o.push(e.toString());
        }
      }
      return o.join(' ');
    }
    i.exports ? ((n.default = n), (i.exports = n)) : (window.classNames = n);
  })();
})(C);
const x = C.exports,
  b = () => (typeof document > 'u' ? void 0 : document),
  E = () => (typeof window > 'u' ? void 0 : window),
  k = (...i) => (t) => {
    i.forEach((n) => {
      typeof n == 'function' ? n(t) : n && (n.current = t);
    });
  },
  R = (...i) => d.useCallback(k(...i), [...i]),
  H = d.forwardRef((i, t) => {
    var n;
    const {
        theme: o,
        children: r,
        themeOptions: e,
        as: l = 'div',
        className: c,
        ...a
      } = i,
      v = d.useRef(null),
      p = R(v, t),
      u = d.Children.count(r) > 0,
      s = d.useContext(g),
      m = y('(prefers-color-scheme: dark)'),
      f = y('(prefers-contrast: more)'),
      h = o === 'dark' || (o === 'os' && m),
      L = (n = e?.highContrast) !== null && n !== void 0 ? n : f;
    return u
      ? d.createElement(
          g.Provider,
          { value: { theme: o, themeOptions: e, rootRef: v } },
          d.createElement(
            l,
            {
              className: x('iui-root', c),
              'data-iui-theme': h ? 'dark' : 'light',
              'data-iui-contrast': L ? 'high' : 'default',
              ref: p,
              ...a,
            },
            r,
          ),
        )
      : d.createElement(T, {
          theme: o ?? s?.theme,
          themeOptions: e ?? s?.themeOptions,
        });
  }),
  g = d.createContext(void 0),
  T = ({ theme: i, themeOptions: t }) => (
    D(i, t), d.createElement(d.Fragment, null)
  ),
  _ = typeof window < 'u' ? d.useLayoutEffect : d.useEffect,
  D = (i, t) => {
    var n;
    const o = d.useContext(g),
      r = (n = t?.ownerDocument) !== null && n !== void 0 ? n : b();
    _(() => {
      if (!(o || !r))
        switch ((r.body.classList.toggle('iui-root', !0), i)) {
          case 'light':
          case 'dark':
          case 'os':
            return w(i, r, t?.highContrast);
          default:
            return r.documentElement.dataset.iuiTheme == null
              ? w('light', r, t?.highContrast)
              : void 0;
        }
    }, [i, o, t?.highContrast, r]);
  },
  w = (i, t, n) => {
    var o, r, e, l, c;
    const a = t.documentElement,
      v = (o = t.defaultView) !== null && o !== void 0 ? o : E(),
      p = (f = !1, h = !1) => {
        (a.dataset.iuiTheme = f ? 'dark' : 'light'),
          (a.dataset.iuiContrast = h ? 'high' : 'default');
      },
      u =
        (r = v?.matchMedia) === null || r === void 0
          ? void 0
          : r.call(v, '(prefers-color-scheme: dark)'),
      s =
        (e = v?.matchMedia) === null || e === void 0
          ? void 0
          : e.call(v, '(prefers-contrast: more)'),
      m = () => {
        const f = i === 'dark' || (i === 'os' && u?.matches),
          h = n ?? s?.matches;
        p(f, h);
      };
    return (
      m(),
      (l = u?.addEventListener) === null ||
        l === void 0 ||
        l.call(u, 'change', m),
      (c = s?.addEventListener) === null ||
        c === void 0 ||
        c.call(s, 'change', m),
      () => {
        var f, h;
        (f = u?.removeEventListener) === null ||
          f === void 0 ||
          f.call(u, 'change', m),
          (h = s?.removeEventListener) === null ||
            h === void 0 ||
            h.call(s, 'change', m);
      }
    );
  },
  y = (i) => {
    const [t, n] = d.useState();
    return (
      _(() => {
        var o, r, e;
        const l =
            (r = (o = E()) === null || o === void 0 ? void 0 : o.matchMedia) ===
              null || r === void 0
              ? void 0
              : r.call(o, i),
          c = ({ matches: a }) => n(a);
        if (l != null) {
          n(l.matches);
          try {
            l.addEventListener('change', c);
          } catch {
            (e = l.addListener) === null || e === void 0 || e.call(l, c);
          }
        }
        return () => {
          var a;
          try {
            l?.removeEventListener('change', c);
          } catch {
            (a = l?.removeListener) === null || a === void 0 || a.call(l, c);
          }
        };
      }, [i]),
      !!t
    );
  };
export { H as T, R as a, g as b, x as c, E as g, k as m, D as u };
