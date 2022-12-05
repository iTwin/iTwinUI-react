import { R as e, r as te } from './chunks/index.e8aae4d9.js';
/* empty css                              */ import { j as re } from './chunks/jsx-runtime.15fba22c.js';
import {
  m as ne,
  u as K,
  a as U,
  c as V,
  g as xe,
  T as he,
} from './chunks/useMediaQuery.94d811ae.js';
import { P as ge } from './chunks/Popover.bbc5633c.js';
import { S as Ee } from './chunks/StatusIconMap.31898275.js';
import { I as Ce } from './chunks/InputContainer.0ab7d015.js';
import { u as ye, b as we, a as Z } from './chunks/useLatestRef.5dd3da46.js';
import { a as Re } from './chunks/numbers.3c7880a5.js';
import './chunks/tippy-react.esm.524b62aa.js';
import './chunks/index.b16088e3.js';
const T = (t) => {
    const n = e.useContext(t);
    if (!n) throw new Error(`${t.displayName} is undefined`);
    return n;
  },
  ie = (t, n = document) =>
    !t || t === n.body ? n.body : _e(t) ? t : ie(t.parentElement, n),
  _e = (t) =>
    /(auto|scroll|overlay)/.test(Q(t, 'overflow') + Q(t, 'overflow-y')),
  Q = (t, n) => getComputedStyle(t, null).getPropertyValue(n),
  se = (t) => {
    var n;
    return (n = t?.getBoundingClientRect().height) !== null && n !== void 0
      ? n
      : 0;
  },
  ee = (t) => {
    if (!t) return;
    const n =
      parseFloat(Q(t, 'margin-top')) + parseFloat(Q(t, 'margin-bottom'));
    return se(t) + (isNaN(n) ? 0 : n);
  },
  ue = (t, n) => (t ? Math.floor(n / t) : 0),
  Ne = (t, n) => (n > 0 ? t * n : 0),
  Ie = (t, n, r, o) => Math.min(r - n, ue(t, se(o)));
e.forwardRef((t, n) => {
  const { innerProps: r, outerProps: o, visibleChildren: i } = ae(t);
  return e.createElement(
    'div',
    { ...o, ref: n },
    e.createElement('div', { ...r }, i),
  );
});
const ae = (t) => {
    const {
        itemsLength: n,
        itemRenderer: r,
        bufferSize: o = 10,
        scrollToIndex: i,
        style: a,
        ...d
      } = t,
      [l, C] = e.useState(0),
      [f, x] = e.useState(0),
      v = e.useRef(),
      p = e.useRef(null),
      b = e.useRef({ first: 0, middle: 0, last: 0 }),
      m = e.useRef(),
      [h, R] = e.useState(0),
      S = e.useRef({ start: 0, end: 0 }),
      [N, k] = e.useState(!1),
      B = () => {
        var s, c;
        return (s = v.current) !== null && s !== void 0
          ? s
          : (c = p.current) === null || c === void 0
          ? void 0
          : c.ownerDocument.scrollingElement;
      },
      y = e.useMemo(() => {
        const s = [],
          c = Math.min(n, l + f + o * 2);
        for (let g = l; g < c; g++) s.push(r(g));
        return s;
      }, [n, r, o, l, f]),
      w = e.useCallback(() => {
        var s, c, g, M, A, q;
        if (!p.current || !y.length) return;
        const L = p.current.children.item(0),
          D = p.current.children.item(1),
          u = p.current.children.item(p.current.children.length - 1),
          E = Number(
            (c =
              (s = ee(L)) === null || s === void 0 ? void 0 : s.toFixed(2)) !==
              null && c !== void 0
              ? c
              : 0,
          );
        b.current = {
          first: E,
          middle: Number(
            (M =
              (g = ee(D)) === null || g === void 0 ? void 0 : g.toFixed(2)) !==
              null && M !== void 0
              ? M
              : E,
          ),
          last: Number(
            (q =
              (A = ee(u)) === null || A === void 0 ? void 0 : A.toFixed(2)) !==
              null && q !== void 0
              ? q
              : E,
          ),
        };
      }, [y.length]),
      F = e.useCallback(
        ({ height: s }) => {
          s > 0 && k(!0), R(s), w();
        },
        [w],
      ),
      [$, I] = ye(F);
    e.useLayoutEffect(() => {
      var s;
      const c = ie(
        p.current,
        (s = p.current) === null || s === void 0 ? void 0 : s.ownerDocument,
      );
      (v.current = c), $(c);
    }, [$]),
      e.useLayoutEffect(() => () => I?.disconnect(), [I]),
      e.useLayoutEffect(() => w(), [w]);
    const P = e.useCallback(() => {
        const s = B();
        if (!s) return;
        const c = ue(b.current.middle, Math.round(s.scrollTop)),
          g = Ie(b.current.middle, c, n, s),
          M = Math.min(Math.max(0, c - o), Math.max(0, n - o * 2 - g));
        (S.current = { start: c, end: c + g }),
          C(M),
          x(g),
          p.current &&
            (p.current.style.transform = `translateY(${Ne(
              b.current.middle,
              M,
            )}px)`);
      }, [o, n]),
      _ = e.useCallback(() => {
        P();
      }, [P]),
      H = e.useCallback(() => {
        var s, c;
        !m.current ||
          (!v.current ||
          v.current ===
            ((s = p.current) === null || s === void 0
              ? void 0
              : s.ownerDocument.body)
            ? (c = p.current) === null ||
              c === void 0 ||
              c.ownerDocument.removeEventListener('scroll', m.current)
            : v.current.removeEventListener('scroll', m.current));
      }, []);
    return (
      e.useLayoutEffect(() => {
        var s, c;
        return (
          H(),
          (m.current = _),
          !v.current ||
          v.current ===
            ((s = p.current) === null || s === void 0
              ? void 0
              : s.ownerDocument.body)
            ? (c = p.current) === null ||
              c === void 0 ||
              c.ownerDocument.addEventListener('scroll', _)
            : v.current.addEventListener('scroll', _),
          H
        );
      }, [_, H]),
      e.useLayoutEffect(() => {
        if (!N) return;
        const s = B();
        if (!(!s || i == null)) {
          if (i > S.current.end || i < S.current.start) {
            const c =
              i > S.current.end ? i - S.current.end : i - S.current.start;
            if (i === 0) {
              s.scrollTo({ top: 0 });
              return;
            }
            s.scrollTo({
              top:
                c > 0
                  ? Math.ceil(s.scrollTop) + c * b.current.middle
                  : i * b.current.middle,
            });
          }
          if (i === S.current.start) {
            const c = Math.round(s.scrollTop),
              g = c % b.current.middle;
            g > 0 && s.scrollTo({ top: c - g });
            return;
          }
          if (i === S.current.end) {
            const c = (s.offsetHeight - b.current.first) % b.current.middle,
              g = Math.ceil(s.scrollTop),
              M = g % b.current.middle;
            c > 0 && M === 0 && s.scrollTo({ top: g + b.current.middle - c });
          }
        }
      }, [i, N]),
      e.useLayoutEffect(() => {
        !h || P();
      }, [h, P]),
      {
        outerProps: {
          style: {
            minHeight:
              n > 1
                ? Math.max(n - 2, 0) * b.current.middle +
                  b.current.first +
                  b.current.last
                : b.current.middle,
            minWidth: '100%',
            ...a,
          },
          ...d,
        },
        innerProps: { style: { willChange: 'transform' }, ref: ne(p) },
        visibleChildren: y,
      }
    );
  },
  Se = (t) =>
    te.exports.createElement(
      'svg',
      { viewBox: '0 0 16 16', ...t },
      te.exports.createElement('path', {
        d:
          'M4.807 6h6.395a.28.28 0 0 1 .24.443L8.27 9.9a.34.34 0 0 1-.481 0L4.566 6.443A.27.27 0 0 1 4.806 6z',
      }),
    ),
  ce = e.forwardRef((t, n) => {
    const {
      children: r,
      role: o = 'menu',
      setFocus: i = !0,
      className: a,
      style: d,
      ...l
    } = t;
    K();
    const [C, f] = e.useState(),
      x = e.useRef(null),
      v = U(x, n),
      p = e.useCallback(() => {
        const m = we(x.current);
        return m.filter((h) => !m.some((R) => R.contains(h.parentElement)));
      }, []);
    e.useEffect(() => {
      var m;
      const h = p();
      if (C != null) {
        (m = h?.[C]) === null || m === void 0 || m.focus();
        return;
      }
      const R = h.findIndex((S) => S.getAttribute('aria-selected') === 'true');
      i && f(R > -1 ? R : 0);
    }, [i, C, p]);
    const b = (m) => {
      const h = p();
      if (!h?.length) return;
      const R = C ?? 0;
      switch (m.key) {
        case 'ArrowDown': {
          f(Math.min(R + 1, h.length - 1)),
            m.preventDefault(),
            m.stopPropagation();
          break;
        }
        case 'ArrowUp': {
          f(Math.max(R - 1, 0)), m.preventDefault(), m.stopPropagation();
          break;
        }
      }
    };
    return e.createElement(
      'ul',
      {
        className: V('iui-menu', a),
        style: d,
        role: o,
        onKeyDown: b,
        ref: v,
        ...l,
      },
      r,
    );
  }),
  ke = (t) => {
    const { children: n, className: r, ...o } = t;
    return (
      K(),
      e.createElement(
        'li',
        { className: V('iui-menu-content', r), role: 'presentation', ...o },
        n,
      )
    );
  },
  Me = e.forwardRef((t, n) => {
    const { setFocus: r = !1, size: o, className: i, ...a } = t;
    K();
    const d = e.useRef(null),
      l = U(d, n);
    return (
      e.useEffect(() => {
        d.current && r && d.current.focus();
      }, [r]),
      e.createElement('input', {
        className: V('iui-input', i),
        'data-iui-size': o,
        ref: l,
        ...a,
      })
    );
  }),
  Pe = e.forwardRef((t, n) => {
    const {
      variant: r = 'body',
      as: o = 'div',
      className: i,
      isMuted: a = !1,
      isSkeleton: d = !1,
      ...l
    } = t;
    return (
      K(),
      e.createElement(o, {
        className: V(
          {
            [`iui-text-${r}`]: r !== 'body',
            'iui-text-block': r === 'body',
            'iui-text-muted': a,
            'iui-skeleton': d,
          },
          i,
        ),
        ref: n,
        ...l,
      })
    );
  }),
  Be = (t, [n, r]) => {
    var o;
    switch (n) {
      case 'open':
        return { ...t, isOpen: !0 };
      case 'close':
        return { ...t, isOpen: !1 };
      case 'select':
        return {
          ...t,
          selectedIndex: r ?? t.selectedIndex,
          focusedIndex: r ?? t.focusedIndex,
        };
      case 'focus':
        return {
          ...t,
          focusedIndex:
            (o = r ?? t.selectedIndex) !== null && o !== void 0 ? o : -1,
        };
      default:
        return t;
    }
  },
  Y = e.createContext(void 0);
Y.displayName = 'ComboBoxRefsContext';
const W = e.createContext(void 0);
W.displayName = 'ComboBoxStateContext';
const J = e.createContext(void 0);
J.displayName = 'ComboBoxActionContext';
const de = e.forwardRef((t, n) => {
  const { children: r, ...o } = t,
    { isOpen: i } = T(W),
    a = T(J),
    { inputRef: d, toggleButtonRef: l } = T(Y);
  return (
    e.useEffect(() => {
      t.visible != null && a([t.visible ? 'open' : 'close']);
    }, [a, t.visible]),
    e.createElement(ge, {
      placement: 'bottom-start',
      visible: i,
      onClickOutside: e.useCallback(
        (C, { target: f }) => {
          var x;
          (!((x = l.current) === null || x === void 0) && x.contains(f)) ||
            a(['close']);
        },
        [a, l],
      ),
      animation: 'shift-away',
      duration: 200,
      reference: d,
      ref: n,
      content: r,
      ...o,
    })
  );
});
de.displayName = 'ComboBoxDropdown';
const fe = e.forwardRef((t, n) => {
  const {
      className: r,
      children: o,
      onClick: i,
      disabled: a,
      isOpen: d,
      ...l
    } = t,
    C = T(J),
    { toggleButtonRef: f } = T(Y),
    x = U(f, n);
  return e.createElement(
    'span',
    {
      ref: x,
      className: V(
        'iui-end-icon',
        { 'iui-actionable': !a, 'iui-disabled': a, 'iui-open': d },
        r,
      ),
      onClick: (v) => {
        i?.(v), v.isDefaultPrevented() || C([d ? 'close' : 'open']);
      },
      ...l,
    },
    o ?? e.createElement(Se, { 'aria-hidden': !0 }),
  );
});
fe.displayName = 'ComboBoxEndIcon';
const me = e.forwardRef((t, n) => {
  const { onKeyDown: r, onFocus: o, ...i } = t,
    { isOpen: a, id: d, focusedIndex: l, enableVirtualization: C } = T(W),
    f = T(J),
    { inputRef: x, menuRef: v, optionsExtraInfoRef: p } = T(Y),
    b = U(x, n),
    m = e.useRef(l ?? -1);
  e.useEffect(() => {
    m.current = l ?? -1;
  }, [l]);
  const h = (N) => {
      var k, B, y;
      return (y =
        (B =
          (k = v.current) === null || k === void 0
            ? void 0
            : k.querySelector(`[data-iui-index="${N}"]`)) === null ||
        B === void 0
          ? void 0
          : B.id) !== null && y !== void 0
        ? y
        : '';
    },
    R = e.useCallback(
      (N) => {
        var k, B, y, w, F, $, I, P, _, H, s, c, g, M, A;
        r?.(N);
        const q =
          (k = Object.keys(p.current).length) !== null && k !== void 0 ? k : 0;
        switch (N.key) {
          case 'ArrowDown': {
            if ((N.preventDefault(), !a)) return f(['open']);
            if (q === 0) return;
            if (m.current === -1) {
              const D =
                (B = v.current) === null || B === void 0
                  ? void 0
                  : B.querySelector('[data-iui-index]');
              return f([
                'focus',
                Number(
                  (y = D?.getAttribute('data-iui-index')) !== null &&
                    y !== void 0
                    ? y
                    : 0,
                ),
              ]);
            }
            if (
              C &&
              !(
                !(
                  (F =
                    (w = v.current) === null || w === void 0
                      ? void 0
                      : w.querySelector(`[data-iui-index="${m.current}"]`)) ===
                    null || F === void 0
                ) && F.nextElementSibling
              )
            )
              return;
            let L = m.current;
            do {
              const D =
                  ($ = v.current) === null || $ === void 0
                    ? void 0
                    : $.querySelector(`[data-iui-index="${L}"]`),
                u =
                  (I = D?.nextElementSibling) !== null && I !== void 0
                    ? I
                    : (P = v.current) === null || P === void 0
                    ? void 0
                    : P.querySelector('[data-iui-index]');
              if (
                ((L = Number(u?.getAttribute('data-iui-index'))),
                u?.ariaDisabled !== 'true')
              )
                return f(['focus', L]);
            } while (L !== m.current);
            break;
          }
          case 'ArrowUp': {
            if ((N.preventDefault(), !a)) return f(['open']);
            if (
              q === 0 ||
              (C &&
                !(
                  !(
                    (H =
                      (_ = v.current) === null || _ === void 0
                        ? void 0
                        : _.querySelector(
                            `[data-iui-index="${m.current}"]`,
                          )) === null || H === void 0
                  ) && H.previousElementSibling
                ))
            )
              return;
            if (m.current === -1)
              return f([
                'focus',
                (c =
                  (s = Object.values(p.current)) === null || s === void 0
                    ? void 0
                    : s[q - 1].__originalIndex) !== null && c !== void 0
                  ? c
                  : -1,
              ]);
            let L = m.current;
            do {
              const D =
                  (g = v.current) === null || g === void 0
                    ? void 0
                    : g.querySelector(`[data-iui-index="${L}"]`),
                u =
                  (M = D?.previousElementSibling) !== null && M !== void 0
                    ? M
                    : (A = v.current) === null || A === void 0
                    ? void 0
                    : A.querySelector('[data-iui-index]:last-of-type');
              if (
                ((L = Number(u?.getAttribute('data-iui-index'))),
                u?.ariaDisabled !== 'true')
              )
                return f(['focus', L]);
            } while (L !== m.current);
            break;
          }
          case 'Enter': {
            N.preventDefault(),
              a ? (f(['select', m.current]), f(['close'])) : f(['open']);
            break;
          }
          case 'Escape': {
            N.preventDefault(), f(['close']);
            break;
          }
          case 'Tab':
            f(['close']);
            break;
        }
      },
      [f, C, a, v, r, p],
    ),
    S = e.useCallback(
      (N) => {
        f(['open']), o?.(N);
      },
      [f, o],
    );
  return e.createElement(Me, {
    ref: b,
    onKeyDown: R,
    onFocus: S,
    'aria-activedescendant': a && l != null && l > -1 ? h(l) : void 0,
    role: 'combobox',
    'aria-controls': a ? `${d}-list` : void 0,
    'aria-autocomplete': 'list',
    spellCheck: !1,
    autoCapitalize: 'none',
    autoCorrect: 'off',
    ...i,
  });
});
me.displayName = 'ComboBoxInput';
const De = ({ startIcon: t, children: n, status: r }) => {
    K();
    const o = () => {
      var i;
      const a = t ?? (r && Ee[r]());
      return a
        ? e.cloneElement(a, {
            className: V(
              'iui-input-icon',
              (i = a.props) === null || i === void 0 ? void 0 : i.className,
            ),
            'aria-hidden': !0,
          })
        : null;
    };
    return e.createElement(
      e.Fragment,
      null,
      e.createElement(o, null),
      e.createElement('div', { className: 'iui-message' }, n),
    );
  },
  ve = (t) => {
    const { className: n, status: r, message: o, children: i, ...a } = t,
      { id: d } = T(W);
    return e.createElement(
      Ce,
      {
        className: n,
        status: r,
        statusMessage:
          typeof o == 'string'
            ? e.createElement(De, { status: r }, o)
            : e.isValidElement(o) && e.cloneElement(o, { status: r }),
        ...a,
        id: d,
      },
      e.createElement('div', { className: 'iui-input-with-icon' }, i),
    );
  };
ve.displayName = 'ComboBoxInputContainer';
const Fe = (t) => {
    switch (t) {
      case 0:
        return 'none';
      case 1:
        return 'var(--iui-shadow-1)';
      case 2:
        return 'var(--iui-shadow-2)';
      case 3:
        return 'var(--iui-shadow-3)';
      case 4:
        return 'var(--iui-shadow-4)';
      case 5:
        return 'var(--iui-shadow-5)';
      default:
        return '';
    }
  },
  Le = e.forwardRef((t, n) => {
    const { elevation: r, className: o, style: i, children: a, ...d } = t;
    K();
    const l = { '--iui-surface-elevation': Fe(r), ...i };
    return e.createElement(
      'div',
      { className: V('iui-surface', o), style: l, ref: n, ...d },
      a,
    );
  }),
  Oe = e.forwardRef(({ children: t, className: n, style: r, ...o }, i) => {
    var a, d, l;
    const {
        minWidth: C,
        id: f,
        filteredOptions: x,
        getMenuItem: v,
        focusedIndex: p,
      } = T(W),
      { menuRef: b } = T(Y),
      m = e.useCallback((y) => (x.length > 0 ? v(x[y], y) : t), [x, v, t]),
      h = e.useMemo(() => {
        var y, w;
        const F =
          (y = b.current) === null || y === void 0
            ? void 0
            : y.querySelector(`[data-iui-index="${p}"]`);
        return F
          ? Number(
              (w = F.getAttribute('data-iui-filtered-index')) !== null &&
                w !== void 0
                ? w
                : p,
            )
          : p;
      }, [p, b]),
      { outerProps: R, innerProps: S, visibleChildren: N } = ae({
        itemsLength: x.length || 1,
        itemRenderer: m,
        scrollToIndex: h,
      }),
      k =
        !(
          (l =
            (d = (a = xe()) === null || a === void 0 ? void 0 : a.CSS) ===
              null || d === void 0
              ? void 0
              : d.supports) === null || l === void 0
        ) && l.call(d, 'overflow-x: overlay')
          ? { overflowY: 'overlay' }
          : { overflowY: 'auto' },
      B = e.useMemo(
        () => ({ minWidth: C, maxWidth: `min(${C * 2}px, 90vw)` }),
        [C],
      );
    return e.createElement(
      Le,
      { elevation: 1, style: { ...B, ...k, ...r }, ...o },
      e.createElement(
        'div',
        { ...R },
        e.createElement(
          ce,
          {
            id: `${f}-list`,
            setFocus: !1,
            role: 'listbox',
            ref: ne(b, S.ref, i),
            className: V('iui-scroll', n),
            style: S.style,
          },
          N,
        ),
      ),
    );
  }),
  pe = e.forwardRef((t, n) => {
    const { className: r, style: o, ...i } = t,
      { minWidth: a, id: d, enableVirtualization: l } = T(W),
      { menuRef: C } = T(Y),
      f = U(C, n),
      x = e.useMemo(
        () => ({ minWidth: a, maxWidth: `min(${a * 2}px, 90vw)` }),
        [a],
      );
    return e.createElement(
      e.Fragment,
      null,
      l
        ? e.createElement(Oe, { ref: n, ...t })
        : e.createElement(ce, {
            id: `${d}-list`,
            style: { ...x, ...o },
            setFocus: !1,
            role: 'listbox',
            ref: f,
            className: V('iui-scroll', r),
            ...i,
          }),
    );
  });
pe.displayName = 'ComboBoxMenu';
const be = e.memo(
  e.forwardRef((t, n) => {
    const {
        children: r,
        isSelected: o,
        disabled: i,
        value: a,
        onClick: d,
        sublabel: l,
        size: C = l ? 'large' : 'default',
        icon: f,
        badge: x,
        className: v,
        role: p = 'menuitem',
        index: b,
        ...m
      } = t,
      { focusedIndex: h, enableVirtualization: R } = T(W),
      N = U(n, (k) => {
        !R && h === b && k?.scrollIntoView({ block: 'nearest' });
      });
    return e.createElement(
      'li',
      {
        className: V(
          'iui-menu-item',
          {
            'iui-large': C === 'large',
            'iui-active': o,
            'iui-disabled': i,
            'iui-focused': h === b,
          },
          v,
        ),
        ref: N,
        onClick: () => !i && d?.(a),
        role: p,
        tabIndex: i || p === 'presentation' ? void 0 : -1,
        'aria-selected': o,
        'aria-disabled': i,
        'data-iui-index': b,
        ...m,
      },
      f && e.cloneElement(f, { className: V(f.props.className, 'iui-icon') }),
      e.createElement(
        'span',
        { className: 'iui-content' },
        e.createElement('div', { className: 'iui-menu-label' }, r),
        l && e.createElement('div', { className: 'iui-menu-description' }, l),
      ),
      x && e.cloneElement(x, { className: V(x.props.className, 'iui-icon') }),
    );
  }),
);
be.displayName = 'ComboBoxMenuItem';
const le = (t, n) => {
    var r;
    return (r = t.id) !== null && r !== void 0
      ? r
      : `${n}-option-${t.label.replace(/\s/g, '-')}`;
  },
  Te = (t) => {
    var n, r;
    const {
        options: o,
        value: i,
        onChange: a,
        filterFunction: d,
        inputProps: l,
        dropdownMenuProps: C,
        emptyStateMessage: f = 'No options found',
        itemRenderer: x,
        enableVirtualization: v = !1,
        onShow: p,
        onHide: b,
        ...m
      } = t,
      [h] = e.useState(() => {
        var u, E;
        return (E =
          (u = t.id) !== null && u !== void 0 ? u : l?.id && `${l.id}-cb`) !==
          null && E !== void 0
          ? E
          : `iui-cb-${Re(10)}`;
      });
    K();
    const R = e.useRef(null),
      S = e.useRef(null),
      N = e.useRef(null),
      k = e.useRef(!1),
      B = Z(i),
      y = Z(a),
      w = Z(o),
      F = e.useRef({});
    e.useEffect(() => {
      F.current = {};
    }, [o]),
      o.length > 0 &&
        Object.keys(F.current).length === 0 &&
        o.forEach((u, E) => {
          F.current[le(u, h)] = { __originalIndex: E };
        });
    const [
      { isOpen: $, selectedIndex: I, focusedIndex: P },
      _,
    ] = e.useReducer(Be, {
      isOpen: !1,
      selectedIndex: i ? w.current.findIndex((u) => u.value === i) : -1,
      focusedIndex: -1,
    });
    e.useLayoutEffect(() => {
      var u, E;
      $
        ? ((u = R.current) === null || u === void 0 || u.focus(),
          g(w.current),
          _(['focus']))
        : (_(['focus']),
          A(
            I != null && I >= 0
              ? (E = w.current[I]) === null || E === void 0
                ? void 0
                : E.label
              : '',
          ));
    }, [$, w, I]);
    const [H, s] = e.useState(0);
    e.useEffect(() => {
      R.current && s(R.current.offsetWidth);
    }, [$]);
    const [c, g] = e.useState(o);
    e.useEffect(() => {
      var u;
      g(
        M
          ? (u = d?.(o, M)) !== null && u !== void 0
            ? u
            : o.filter((E) => E.label.toLowerCase().includes(M.toLowerCase()))
          : o,
      ),
        _(['focus']);
    }, [o]);
    const [M, A] = e.useState(
        (r =
          (n = l?.value) === null || n === void 0 ? void 0 : n.toString()) !==
          null && r !== void 0
          ? r
          : '',
      ),
      q = e.useCallback(
        (u) => {
          var E, z;
          const { value: O } = u.currentTarget;
          A(O),
            _(['open']),
            g(
              (E = d?.(w.current, O)) !== null && E !== void 0
                ? E
                : w.current.filter((j) =>
                    j.label.toLowerCase().includes(O.toLowerCase()),
                  ),
            ),
            P != -1 && _(['focus', -1]),
            (z = l?.onChange) === null || z === void 0 || z.call(l, u);
        },
        [d, P, l, w],
      );
    e.useEffect(() => {
      _(['select', o.findIndex((u) => u.value === i)]);
    }, [o, i]),
      e.useEffect(() => {
        var u, E;
        if (!k.current) {
          k.current = !0;
          return;
        }
        const z =
          (u = w.current[I]) === null || u === void 0 ? void 0 : u.value;
        z === B.current ||
          I === -1 ||
          (E = y.current) === null ||
          E === void 0 ||
          E.call(y, z);
      }, [y, w, I, B]);
    const L = e.useCallback(
        (u, E) => {
          const z = le(u, h),
            { __originalIndex: O } = F.current[z],
            j = x
              ? x(u, {
                  isFocused: P === O,
                  isSelected: I === O,
                  index: O,
                  id: z,
                })
              : null;
          return j
            ? e.cloneElement(j, {
                onClick: (G) => {
                  var oe, X;
                  _(['select', O]),
                    _(['close']),
                    (X = (oe = j.props).onClick) === null ||
                      X === void 0 ||
                      X.call(oe, G);
                },
                className: V(j.props.className, { 'iui-focused': P === O }),
                'data-iui-index': O,
                'data-iui-filtered-index': E,
                ref: ne(j.props.ref, (G) => {
                  !v && P === O && G?.scrollIntoView({ block: 'nearest' });
                }),
              })
            : e.createElement(
                be,
                {
                  key: z,
                  id: z,
                  ...u,
                  isSelected: I === O,
                  onClick: () => {
                    _(['select', O]), _(['close']);
                  },
                  index: O,
                  'data-iui-filtered-index': E,
                },
                u.label,
              );
        },
        [v, P, h, x, I],
      ),
      D = e.useMemo(
        () =>
          e.createElement(
            e.Fragment,
            null,
            e.isValidElement(f)
              ? f
              : e.createElement(
                  ke,
                  null,
                  e.createElement(Pe, { isMuted: !0 }, f),
                ),
          ),
        [f],
      );
    return e.createElement(
      Y.Provider,
      {
        value: {
          inputRef: R,
          menuRef: S,
          toggleButtonRef: N,
          optionsExtraInfoRef: F,
        },
      },
      e.createElement(
        J.Provider,
        { value: _ },
        e.createElement(
          W.Provider,
          {
            value: {
              id: h,
              minWidth: H,
              isOpen: $,
              focusedIndex: P,
              enableVirtualization: v,
              filteredOptions: c,
              getMenuItem: L,
            },
          },
          e.createElement(
            ve,
            { disabled: l?.disabled, ...m },
            e.createElement(me, { value: M, ...l, onChange: q }),
            e.createElement(fe, { disabled: l?.disabled, isOpen: $ }),
          ),
          e.createElement(
            de,
            { ...C, onShow: p, onHide: b },
            e.createElement(pe, null, c.length > 0 && !v ? c.map(L) : D),
          ),
        ),
      ),
    );
  };
function Ge() {
  const t = te.exports.useMemo(
    () => [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Grapefruit', value: 'grapefruit' },
      { label: 'Lychee', value: 'lychee' },
      { label: 'Kiwi', value: 'kiwi' },
      { label: 'Orange', value: 'orange' },
    ],
    [],
  );
  return re.exports.jsx(he, {
    theme: 'dark',
    children: re.exports.jsx(Te, {
      options: t,
      inputProps: { placeholder: 'Pick a fruit, any fruit' },
      dropdownMenuProps: { appendTo: 'parent' },
    }),
  });
}
export { Ge as default };
