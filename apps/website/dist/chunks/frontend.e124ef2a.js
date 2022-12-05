import { r as qe, g as et } from './index.e8aae4d9.js';
import { r as tt, s as nt } from './index.b16088e3.js';
function ot(we, g) {
  for (var o = 0; o < g.length; o++) {
    const e = g[o];
    if (typeof e != 'string' && !Array.isArray(e)) {
      for (const t in e)
        if (t !== 'default' && !(t in we)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n &&
            Object.defineProperty(
              we,
              t,
              n.get ? n : { enumerable: !0, get: () => e[t] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(we, Symbol.toStringTag, { value: 'Module' }),
  );
}
var Ve = { exports: {} },
  Ze = { exports: {} },
  He = { exports: {} },
  De = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ye;
function rt() {
  if (Ye) return De;
  Ye = 1;
  var we = 60103,
    g = 60106,
    o = 60107,
    e = 60108,
    t = 60114,
    n = 60109,
    r = 60110,
    C = 60112,
    b = 60113,
    m = 60120,
    y = 60115,
    p = 60116,
    x = 60121,
    P = 60122,
    B = 60117,
    d = 60129,
    i = 60131;
  if (typeof Symbol == 'function' && Symbol.for) {
    var _ = Symbol.for;
    (we = _('react.element')),
      (g = _('react.portal')),
      (o = _('react.fragment')),
      (e = _('react.strict_mode')),
      (t = _('react.profiler')),
      (n = _('react.provider')),
      (r = _('react.context')),
      (C = _('react.forward_ref')),
      (b = _('react.suspense')),
      (m = _('react.suspense_list')),
      (y = _('react.memo')),
      (p = _('react.lazy')),
      (x = _('react.block')),
      (P = _('react.server.block')),
      (B = _('react.fundamental')),
      (d = _('react.debug_trace_mode')),
      (i = _('react.legacy_hidden'));
  }
  function a(D) {
    if (typeof D == 'object' && D !== null) {
      var I = D.$$typeof;
      switch (I) {
        case we:
          switch (((D = D.type), D)) {
            case o:
            case t:
            case e:
            case b:
            case m:
              return D;
            default:
              switch (((D = D && D.$$typeof), D)) {
                case r:
                case C:
                case p:
                case y:
                case n:
                  return D;
                default:
                  return I;
              }
          }
        case g:
          return I;
      }
    }
  }
  var s = n,
    u = we,
    O = C,
    v = o,
    A = p,
    l = y,
    c = g,
    h = t,
    f = e,
    E = b;
  return (
    (De.ContextConsumer = r),
    (De.ContextProvider = s),
    (De.Element = u),
    (De.ForwardRef = O),
    (De.Fragment = v),
    (De.Lazy = A),
    (De.Memo = l),
    (De.Portal = c),
    (De.Profiler = h),
    (De.StrictMode = f),
    (De.Suspense = E),
    (De.isAsyncMode = function () {
      return !1;
    }),
    (De.isConcurrentMode = function () {
      return !1;
    }),
    (De.isContextConsumer = function (D) {
      return a(D) === r;
    }),
    (De.isContextProvider = function (D) {
      return a(D) === n;
    }),
    (De.isElement = function (D) {
      return typeof D == 'object' && D !== null && D.$$typeof === we;
    }),
    (De.isForwardRef = function (D) {
      return a(D) === C;
    }),
    (De.isFragment = function (D) {
      return a(D) === o;
    }),
    (De.isLazy = function (D) {
      return a(D) === p;
    }),
    (De.isMemo = function (D) {
      return a(D) === y;
    }),
    (De.isPortal = function (D) {
      return a(D) === g;
    }),
    (De.isProfiler = function (D) {
      return a(D) === t;
    }),
    (De.isStrictMode = function (D) {
      return a(D) === e;
    }),
    (De.isSuspense = function (D) {
      return a(D) === b;
    }),
    (De.isValidElementType = function (D) {
      return (
        typeof D == 'string' ||
        typeof D == 'function' ||
        D === o ||
        D === t ||
        D === d ||
        D === e ||
        D === b ||
        D === m ||
        D === i ||
        (typeof D == 'object' &&
          D !== null &&
          (D.$$typeof === p ||
            D.$$typeof === y ||
            D.$$typeof === n ||
            D.$$typeof === r ||
            D.$$typeof === C ||
            D.$$typeof === B ||
            D.$$typeof === x ||
            D[0] === P))
      );
    }),
    (De.typeOf = a),
    De
  );
}
var Xe;
function at() {
  return (
    Xe ||
      ((Xe = 1),
      (function (we) {
        we.exports = rt();
      })(He)),
    He.exports
  );
}
(function (we) {
  we.exports = (function (g) {
    var o = {};
    function e(t) {
      if (o[t]) return o[t].exports;
      var n = (o[t] = { i: t, l: !1, exports: {} });
      return g[t].call(n.exports, n, n.exports, e), (n.l = !0), n.exports;
    }
    return (
      (e.m = g),
      (e.c = o),
      (e.d = function (t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
      }),
      (e.r = function (t) {
        typeof Symbol < 'u' &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (e.t = function (t, n) {
        if (
          (n & 1 && (t = e(t)),
          n & 8 || (n & 4 && typeof t == 'object' && t && t.__esModule))
        )
          return t;
        var r = Object.create(null);
        if (
          (e.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
          n & 2 && typeof t != 'string')
        )
          for (var C in t)
            e.d(
              r,
              C,
              function (b) {
                return t[b];
              }.bind(null, C),
            );
        return r;
      }),
      (e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(n, 'a', n), n;
      }),
      (e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (e.p = ''),
      e((e.s = './src/frontend.js'))
    );
  })({
    '../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return t;
        });
      function t(n) {
        if (n === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return n;
      }
    },
    '../../node_modules/@babel/runtime/helpers/esm/extends.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return t;
        });
      function t() {
        return (
          (t =
            Object.assign ||
            function (n) {
              for (var r = 1; r < arguments.length; r++) {
                var C = arguments[r];
                for (var b in C)
                  Object.prototype.hasOwnProperty.call(C, b) && (n[b] = C[b]);
              }
              return n;
            }),
          t.apply(this, arguments)
        );
      }
    },
    '../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return t;
        });
      function t(n, r) {
        (n.prototype = Object.create(r.prototype)),
          (n.prototype.constructor = n),
          (n.__proto__ = r);
      }
    },
    '../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return t;
        });
      function t(n, r) {
        if (n == null) return {};
        var C = {},
          b = Object.keys(n),
          m,
          y;
        for (y = 0; y < b.length; y++)
          (m = b[y]), !(r.indexOf(m) >= 0) && (C[m] = n[m]);
        return C;
      }
    },
    '../../node_modules/@reach/auto-id/es/index.js': function (g, o, e) {
      e.r(o),
        e.d(o, 'useId', function () {
          return C;
        });
      var t = e('react'),
        n = 0,
        r = function () {
          return ++n;
        },
        C = function () {
          var m = Object(t.useState)(null),
            y = m[0],
            p = m[1];
          return (
            Object(t.useEffect)(function () {
              return p(r());
            }, []),
            y
          );
        };
    },
    '../../node_modules/@reach/component-component/es/index.js': function (
      g,
      o,
      e,
    ) {
      e.r(o);
      var t = e('react'),
        n = e.n(t);
      e('../../node_modules/prop-types/index.js');
      function r(B) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (r = function (i) {
                return typeof i;
              })
            : (r = function (i) {
                return i &&
                  typeof Symbol == 'function' &&
                  i.constructor === Symbol &&
                  i !== Symbol.prototype
                  ? 'symbol'
                  : typeof i;
              }),
          r(B)
        );
      }
      function C(B, d) {
        if (!(B instanceof d))
          throw new TypeError('Cannot call a class as a function');
      }
      function b(B, d) {
        if (!B)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return d && (r(d) === 'object' || typeof d == 'function') ? d : B;
      }
      function m(B, d) {
        if (typeof d != 'function' && d !== null)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + r(d),
          );
        (B.prototype = Object.create(d && d.prototype, {
          constructor: {
            value: B,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          d &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(B, d)
              : (B.__proto__ = d));
      }
      function y(B, d) {
        var i = {};
        for (var _ in B)
          d.indexOf(_) >= 0 ||
            !Object.prototype.hasOwnProperty.call(B, _) ||
            (i[_] = B[_]);
        return i;
      }
      var p = function (d) {
          d.initialState,
            d.getInitialState,
            d.refs,
            d.getRefs,
            d.didMount,
            d.didUpdate,
            d.willUnmount,
            d.getSnapshotBeforeUpdate,
            d.shouldUpdate,
            d.render;
          var i = y(d, [
            'initialState',
            'getInitialState',
            'refs',
            'getRefs',
            'didMount',
            'didUpdate',
            'willUnmount',
            'getSnapshotBeforeUpdate',
            'shouldUpdate',
            'render',
          ]);
          return i;
        },
        x = (function (B) {
          m(d, B);
          function d() {
            var i, _, a;
            C(this, d);
            for (var s = arguments.length, u = Array(s), O = 0; O < s; O++)
              u[O] = arguments[O];
            return (
              (a =
                ((i = ((_ = b(this, B.call.apply(B, [this].concat(u)))), _)),
                P.call(_),
                i)),
              b(_, a)
            );
          }
          return (
            (d.prototype.getArgs = function () {
              var _ = this.state,
                a = this.props,
                s = this._setState,
                u = this._forceUpdate,
                O = this._refs;
              return {
                state: _,
                props: p(a),
                refs: O,
                setState: s,
                forceUpdate: u,
              };
            }),
            (d.prototype.componentDidMount = function () {
              this.props.didMount && this.props.didMount(this.getArgs());
            }),
            (d.prototype.shouldComponentUpdate = function (_, a) {
              return this.props.shouldUpdate
                ? this.props.shouldUpdate({
                    props: this.props,
                    state: this.state,
                    nextProps: p(_),
                    nextState: a,
                  })
                : !0;
            }),
            (d.prototype.componentWillUnmount = function () {
              this.props.willUnmount &&
                this.props.willUnmount({
                  state: this.state,
                  props: p(this.props),
                  refs: this._refs,
                });
            }),
            (d.prototype.componentDidUpdate = function (_, a, s) {
              this.props.didUpdate &&
                this.props.didUpdate(
                  Object.assign(this.getArgs(), {
                    prevProps: p(_),
                    prevState: a,
                  }),
                  s,
                );
            }),
            (d.prototype.getSnapshotBeforeUpdate = function (_, a) {
              return this.props.getSnapshotBeforeUpdate
                ? this.props.getSnapshotBeforeUpdate(
                    Object.assign(this.getArgs(), {
                      prevProps: p(_),
                      prevState: a,
                    }),
                  )
                : null;
            }),
            (d.prototype.render = function () {
              var _ = this.props,
                a = _.children,
                s = _.render;
              return s
                ? s(this.getArgs())
                : typeof a == 'function'
                ? a(this.getArgs())
                : a || null;
            }),
            d
          );
        })(n.a.Component);
      x.defaultProps = {
        getInitialState: function () {},
        getRefs: function () {
          return {};
        },
      };
      var P = function () {
        var d = this;
        (this.state =
          this.props.initialState || this.props.getInitialState(this.props)),
          (this._refs = this.props.refs || this.props.getRefs(this.getArgs())),
          (this._setState = function () {
            return d.setState.apply(d, arguments);
          }),
          (this._forceUpdate = function () {
            return d.forceUpdate.apply(d, arguments);
          });
      };
      o.default = x;
    },
    '../../node_modules/@reach/menu-button/es/index.js': function (g, o, e) {
      e.r(o),
        e.d(o, 'Menu', function () {
          return h;
        }),
        e.d(o, 'MenuList', function () {
          return T;
        }),
        e.d(o, 'MenuButton', function () {
          return f;
        }),
        e.d(o, 'MenuLink', function () {
          return I;
        }),
        e.d(o, 'MenuItem', function () {
          return E;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../../node_modules/@reach/portal/es/index.js'),
        C = e('../../node_modules/@reach/rect/es/index.js'),
        b = e('../../node_modules/@reach/window-size/es/index.js'),
        m = e('../../node_modules/@reach/component-component/es/index.js'),
        y = e('../../node_modules/prop-types/index.js'),
        p = e('../../node_modules/@reach/utils/es/index.js'),
        x =
          Object.assign ||
          function (S) {
            for (var F = 1; F < arguments.length; F++) {
              var k = arguments[F];
              for (var H in k)
                Object.prototype.hasOwnProperty.call(k, H) && (S[H] = k[H]);
            }
            return S;
          };
      function P(S, F) {
        var k = {};
        for (var H in S)
          F.indexOf(H) >= 0 ||
            !Object.prototype.hasOwnProperty.call(S, H) ||
            (k[H] = S[H]);
        return k;
      }
      var B = Object(t.createContext)(),
        d = B.Provider,
        i = B.Consumer,
        _ = function (F) {
          var k = F.refs,
            H = F.state,
            w = F.prevState;
          return !H.isOpen && w.isOpen
            ? !k.menu.contains(document.activeElement)
            : !1;
        },
        a = function (F, k) {
          var H = F.refs,
            w = F.state,
            L = F.prevState;
          w.isOpen && !L.isOpen
            ? ((window.__REACH_DISABLE_TOOLTIPS = !0),
              w.selectionIndex !== -1
                ? requestAnimationFrame(function () {
                    H.items[w.selectionIndex].focus();
                  })
                : H.menu.focus())
            : !w.isOpen && L.isOpen
            ? (k || H.button.focus(), (window.__REACH_DISABLE_TOOLTIPS = !1))
            : w.selectionIndex !== L.selectionIndex &&
              (w.selectionIndex === -1
                ? H.menu.focus()
                : H.items[w.selectionIndex].focus());
        },
        s = function (F) {
          return { isOpen: !0, selectionIndex: 0 };
        },
        u = function (F) {
          return { isOpen: !1, selectionIndex: -1, closingWithClick: !1 };
        },
        O = function (F) {
          return function (k) {
            return { selectionIndex: F };
          };
        },
        v = function (F) {
          return F + '-' + Math.random().toString(32).substr(2, 8);
        },
        A = function () {
          return { button: null, menu: null, items: [] };
        },
        l = function () {
          return {
            isOpen: !1,
            buttonRect: void 0,
            selectionIndex: -1,
            closingWithClick: !1,
            buttonId: v('button'),
          };
        },
        c = function () {
          return Object(p.checkStyles)('menu-button');
        },
        h = function (F) {
          var k = F.children;
          return n.a.createElement(
            m.default,
            {
              getRefs: A,
              getInitialState: l,
              didMount: c,
              didUpdate: a,
              getSnapshotBeforeUpdate: _,
            },
            function (H) {
              return n.a.createElement(
                d,
                { value: H },
                typeof k == 'function' ? k({ isOpen: H.state.isOpen }) : k,
              );
            },
          );
        },
        f = n.a.forwardRef(function (S, F) {
          var k = S.onClick,
            H = S.onKeyDown,
            w = S.onMouseDown,
            L = P(S, ['onClick', 'onKeyDown', 'onMouseDown']);
          return n.a.createElement(i, null, function (M) {
            var U = M.refs,
              Y = M.state,
              Z = M.setState;
            return n.a.createElement(
              C.default,
              {
                observe: Y.isOpen,
                onChange: function (ee) {
                  return Z({ buttonRect: ee });
                },
              },
              function (q) {
                var ee = q.ref;
                return n.a.createElement(
                  'button',
                  x(
                    {
                      id: Y.buttonId,
                      'aria-haspopup': 'menu',
                      'aria-expanded': Y.isOpen,
                      'data-reach-menu-button': !0,
                      type: 'button',
                      ref: function (N) {
                        ee(N), Object(p.assignRef)(F, N), (U.button = N);
                      },
                      onMouseDown: Object(p.wrapEvent)(w, function () {
                        Y.isOpen && Z({ closingWithClick: !0 });
                      }),
                      onClick: Object(p.wrapEvent)(k, function () {
                        Y.isOpen ? Z(u) : Z(s);
                      }),
                      onKeyDown: Object(p.wrapEvent)(H, function (G) {
                        (G.key === 'ArrowDown' || G.key === 'ArrowUp') &&
                          (G.preventDefault(), Z(s));
                      }),
                    },
                    L,
                  ),
                );
              },
            );
          });
        });
      f.propTypes = { onClick: y.func, onKeyDown: y.func, children: y.node };
      var E = n.a.forwardRef(function (S, F) {
          var k = S.onSelect,
            H = S.onClick,
            w = S.role,
            L = w === void 0 ? 'menuitem' : w,
            M = S.state,
            U = S.setState,
            Y = S.index,
            Z = S.onKeyDown,
            q = S.onMouseMove,
            ee = S.onMouseLeave,
            G = S._ref,
            N = P(S, [
              'onSelect',
              'onClick',
              'role',
              'state',
              'setState',
              'index',
              'onKeyDown',
              'onMouseMove',
              'onMouseLeave',
              '_ref',
            ]),
            V = Y === M.selectionIndex,
            X = function () {
              k(), U(u);
            };
          return n.a.createElement(
            'div',
            x({}, N, {
              ref: function (te) {
                Object(p.assignRef)(F, te), Object(p.assignRef)(G, te);
              },
              'data-reach-menu-item': L === 'menuitem' ? !0 : void 0,
              role: L,
              tabIndex: '-1',
              'data-selected': L === 'menuitem' && V ? !0 : void 0,
              onClick: Object(p.wrapEvent)(H, function ($) {
                X();
              }),
              onKeyDown: Object(p.wrapEvent)(Z, function ($) {
                $.key === 'Enter' && ($.preventDefault(), X());
              }),
              onMouseMove: Object(p.wrapEvent)(q, function ($) {
                V || U(O(Y));
              }),
              onMouseLeave: Object(p.wrapEvent)(ee, function ($) {
                U({ selectionIndex: -1 });
              }),
            }),
          );
        }),
        D = function () {},
        I = n.a.forwardRef(function (S, F) {
          var k = S.onKeyDown,
            H = S.onClick,
            w = S.component,
            L = S.as,
            M = L === void 0 ? 'a' : L,
            U = S.style,
            Y = S.setState,
            Z = S.state,
            q = S.index,
            ee = S._ref,
            G = P(S, [
              'onKeyDown',
              'onClick',
              'component',
              'as',
              'style',
              'setState',
              'state',
              'index',
              '_ref',
            ]),
            N = w || M;
          return (
            w &&
              console.warn(
                '[@reach/menu-button]: Please use the `as` prop instead of `component`.',
              ),
            n.a.createElement(
              E,
              {
                role: 'none',
                state: Z,
                setState: Y,
                index: q,
                onSelect: D,
                _ref: D,
              },
              n.a.createElement(
                N,
                x(
                  {
                    role: 'menuitem',
                    'data-reach-menu-item': !0,
                    tabIndex: '-1',
                    'data-selected': q === Z.selectionIndex ? !0 : void 0,
                    onClick: Object(p.wrapEvent)(H, function (V) {
                      Y(u);
                    }),
                    onKeyDown: Object(p.wrapEvent)(k, function (V) {
                      V.key === 'Enter' && V.stopPropagation();
                    }),
                    ref: function (X) {
                      Object(p.assignRef)(ee, X), Object(p.assignRef)(F, X);
                    },
                    style: x({}, U),
                  },
                  G,
                ),
              ),
            )
          );
        }),
        T = n.a.forwardRef(function (S, F) {
          return n.a.createElement(i, null, function (k) {
            var H = k.refs,
              w = k.state,
              L = k.setState;
            return (
              w.isOpen &&
              n.a.createElement(
                r.default,
                null,
                n.a.createElement(b.default, null, function () {
                  return n.a.createElement(C.default, null, function (M) {
                    var U = M.rect,
                      Y = M.ref;
                    return n.a.createElement(
                      'div',
                      {
                        'data-reach-menu': !0,
                        ref: Y,
                        style: K(w.buttonRect, U),
                      },
                      n.a.createElement(
                        W,
                        x({}, S, { setState: L, state: w, refs: H, ref: F }),
                      ),
                    );
                  });
                }),
              )
            );
          });
        });
      T.propTypes = { children: y.node };
      var R = [E, I],
        j = function (F) {
          return R.includes(F.type);
        },
        z = function (F) {
          var k = [];
          return (
            t.Children.forEach(F, function (H) {
              j(H) && k.push(H);
            }),
            k
          );
        },
        W = n.a.forwardRef(function (S, F) {
          var k = S.refs,
            H = S.state,
            w = S.setState,
            L = S.children,
            M = S.onKeyDown;
          S.onBlur;
          var U = P(S, [
              'refs',
              'state',
              'setState',
              'children',
              'onKeyDown',
              'onBlur',
            ]),
            Y = z(L);
          return n.a.createElement(
            'div',
            x({ 'data-reach-menu-list': !0 }, U, {
              role: 'menu',
              'aria-labelledby': H.buttonId,
              tabIndex: '-1',
              ref: function (q) {
                (k.menu = q), Object(p.assignRef)(F, q);
              },
              onBlur: function (q) {
                !H.closingWithClick &&
                  !k.menu.contains(q.relatedTarget) &&
                  w(u);
              },
              onKeyDown: Object(p.wrapEvent)(M, function (Z) {
                if (Z.key === 'Escape') w(u);
                else if (Z.key === 'ArrowDown') {
                  Z.preventDefault();
                  var q = H.selectionIndex + 1;
                  q !== Y.length && w({ selectionIndex: q });
                } else if (Z.key === 'ArrowUp') {
                  Z.preventDefault();
                  var ee = H.selectionIndex - 1;
                  ee !== -1 && w({ selectionIndex: ee });
                } else Z.key === 'Tab' && Z.preventDefault();
              }),
            }),
            t.Children.map(L, function (Z, q) {
              if (j(Z)) {
                var ee = Y.indexOf(Z);
                return n.a.cloneElement(Z, {
                  setState: w,
                  state: H,
                  index: ee,
                  _ref: function (N) {
                    return (k.items[ee] = N);
                  },
                });
              }
              return Z;
            }),
          );
        }),
        K = function (F, k) {
          var H = !F;
          if (H) return { opacity: 0 };
          var w = !k,
            L = {
              left: F.left + window.pageXOffset + 'px',
              top: F.top + F.height + window.pageYOffset + 'px',
            };
          if (w) return x({}, L, { opacity: 0 });
          F.width < 500 && (L.minWidth = F.width);
          var M = {
              top: F.top - k.height < 0,
              right: window.innerWidth < F.left + k.width,
              bottom: window.innerHeight < F.top + k.height,
              left: F.left - k.width < 0,
            },
            U = M.right && !M.left,
            Y = M.bottom && !M.top;
          return x({}, L, {
            left: U
              ? F.right - k.width + window.pageXOffset + 'px'
              : F.left + window.pageXOffset + 'px',
            top: Y
              ? F.top - k.height + window.pageYOffset + 'px'
              : F.top + F.height + window.pageYOffset + 'px',
          });
        };
    },
    '../../node_modules/@reach/menu-button/styles.css': function (g, o, e) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../../node_modules/@reach/menu-button/styles.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../../node_modules/@reach/observe-rect/dist/index.m.js': function (
      g,
      o,
      e,
    ) {
      e.r(o);
      var t = ['width', 'height', 'top', 'right', 'bottom', 'left'],
        n = function (C, b) {
          return (
            C === void 0 && (C = {}),
            b === void 0 && (b = {}),
            t.some(function (m) {
              return C[m] !== b[m];
            })
          );
        };
      o.default = function (r, C) {
        var b,
          m,
          y = function p() {
            var x = r.getBoundingClientRect();
            n(x, b) && C((b = x)), (m = requestAnimationFrame(p));
          };
        return {
          observe: y,
          unobserve: function () {
            cancelAnimationFrame(m);
          },
        };
      };
    },
    '../../node_modules/@reach/portal/es/index.js': function (g, o, e) {
      e.r(o);
      var t = e('react'),
        n = e.n(t),
        r = e('react-dom'),
        C = e('../../node_modules/@reach/component-component/es/index.js'),
        b = function (y) {
          var p = y.children,
            x = y.type,
            P = x === void 0 ? 'reach-portal' : x;
          return n.a.createElement(C.default, {
            getRefs: function () {
              return { mountNode: null, portalNode: null };
            },
            didMount: function (d) {
              var i = d.refs,
                _ = d.forceUpdate,
                a = i.mountNode.ownerDocument;
              (i.portalNode = a.createElement(P)),
                a.body.appendChild(i.portalNode),
                _();
            },
            willUnmount: function (d) {
              var i = d.refs.portalNode;
              i.ownerDocument.body.removeChild(i);
            },
            render: function (d) {
              var i = d.refs,
                _ = i.portalNode;
              return _
                ? Object(r.createPortal)(p, _)
                : n.a.createElement('div', {
                    ref: function (s) {
                      return (i.mountNode = s);
                    },
                  });
            },
          });
        };
      o.default = b;
    },
    '../../node_modules/@reach/rect/es/index.js': function (g, o, e) {
      e.r(o),
        e.d(o, 'useRect', function () {
          return B;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../../node_modules/@reach/component-component/es/index.js'),
        C = e('../../node_modules/@reach/observe-rect/dist/index.m.js');
      e('../../node_modules/prop-types/index.js');
      var b =
          Object.assign ||
          function (d) {
            for (var i = 1; i < arguments.length; i++) {
              var _ = arguments[i];
              for (var a in _)
                Object.prototype.hasOwnProperty.call(_, a) && (d[a] = _[a]);
            }
            return d;
          },
        m = function (i) {
          var _ = i.refs,
            a = i.props.children,
            s = i.state.rect;
          return a({
            ref: function (O) {
              return (_.node = O);
            },
            rect: s,
          });
        },
        y = function (i) {
          var _ = i.setState,
            a = i.refs,
            s = i.props;
          if (!a.node) {
            console.warn('You need to place the ref');
            return;
          }
          (a.observer = Object(C.default)(a.node, function (u) {
            s.onChange && s.onChange(u), _({ rect: u });
          })),
            s.observe && a.observer.observe();
        },
        p = function (i) {
          var _ = i.refs,
            a = i.props,
            s = i.prevProps;
          a.observe && !s.observe
            ? _.observer.observe()
            : !a.observe && s.observe && _.observer.unobserve();
        },
        x = function (i) {
          var _ = i.refs;
          _.observer.unobserve();
        },
        P = function (i) {
          return n.a.createElement(
            r.default,
            b({}, i, {
              refs: { node: void 0, observer: void 0 },
              initialState: { rect: void 0 },
              didMount: y,
              didUpdate: p,
              willUnmount: x,
              render: m,
            }),
          );
        };
      P.defaultProps = { observe: !0 };
      function B(d) {
        var i =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
          _ = Object(t.useState)(null),
          a = _[0],
          s = _[1],
          u = Object(t.useRef)(null);
        return (
          Object(t.useLayoutEffect)(
            function () {
              return (
                u.current || (u.current = Object(C.default)(d.current, s)),
                i && u.current.observe(),
                function () {
                  return u.current.unobserve();
                }
              );
            },
            [i],
          ),
          a
        );
      }
      o.default = P;
    },
    '../../node_modules/@reach/tooltip/es/index.js': function (g, o, e) {
      e.r(o),
        e.d(o, 'useTooltip', function () {
          return j;
        }),
        e.d(o, 'default', function () {
          return z;
        }),
        e.d(o, 'TooltipPopup', function () {
          return W;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../../node_modules/@reach/auto-id/es/index.js'),
        C = e('../../node_modules/@reach/utils/es/index.js'),
        b = e('../../node_modules/@reach/portal/es/index.js'),
        m = e('../../node_modules/@reach/visually-hidden/es/index.js'),
        y = e('../../node_modules/@reach/rect/es/index.js');
      e('../../node_modules/prop-types/index.js');
      var p =
          Object.assign ||
          function (H) {
            for (var w = 1; w < arguments.length; w++) {
              var L = arguments[w];
              for (var M in L)
                Object.prototype.hasOwnProperty.call(L, M) && (H[M] = L[M]);
            }
            return H;
          },
        x;
      function P(H, w) {
        var L = {};
        for (var M in H)
          w.indexOf(M) >= 0 ||
            !Object.prototype.hasOwnProperty.call(H, M) ||
            (L[M] = H[M]);
        return L;
      }
      var B = 'idle',
        d = 'focused',
        i = 'visible',
        _ = 'leavingVisible',
        a = 'dismissed',
        s = {
          initial: B,
          states:
            ((x = {}),
            (x[B] = { enter: R, on: { mouseenter: d, focus: i } }),
            (x[d] = {
              enter: f,
              leave: E,
              on: {
                mousemove: d,
                mouseleave: B,
                mousedown: a,
                blur: B,
                rest: i,
              },
            }),
            (x[i] = {
              on: {
                focus: d,
                mouseenter: d,
                mouseleave: _,
                blur: _,
                mousedown: a,
                selectWithKeyboard: a,
                globalMouseMove: _,
              },
            }),
            (x[_] = {
              enter: I,
              leave: function () {
                T(), R();
              },
              on: { mouseenter: i, focus: i, timecomplete: B },
            }),
            (x[a] = {
              leave: function () {
                u.id = null;
              },
              on: { mouseleave: B, blur: B },
            }),
            x),
        },
        u = { id: null },
        O = s.initial;
      function v(H, w) {
        var L = s.states[O],
          M = L.on[H];
        if (!M)
          throw new Error(
            'Unknown state for action "' + H + '" from state "' + O + '"',
          );
        L.leave && L.leave(), w && (u = w);
        var U = s.states[M];
        U.enter && U.enter(), (O = M), c();
      }
      var A = [];
      function l(H) {
        return (
          A.push(H),
          function () {
            A.splice(A.indexOf(H), 1);
          }
        );
      }
      function c() {
        A.forEach(function (H) {
          return H(O, u);
        });
      }
      var h = void 0;
      function f() {
        clearTimeout(h),
          (h = setTimeout(function () {
            return v('rest');
          }, 100));
      }
      function E() {
        clearTimeout(h);
      }
      var D = void 0;
      function I() {
        clearTimeout(D),
          (D = setTimeout(function () {
            return v('timecomplete');
          }, 500));
      }
      function T() {
        clearTimeout(D);
      }
      function R() {
        u.id = null;
      }
      function j() {
        var H =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          w = H.onMouseEnter,
          L = H.onMouseMove,
          M = H.onMouseLeave,
          U = H.onFocus;
        H.onBlur;
        var Y = H.onKeyDown,
          Z = H.onMouseDown,
          q = H.ref,
          ee = H.DEBUG_STYLE,
          G = 'tooltip:' + Object(r.useId)(),
          N = Object(t.useState)(ee ? !0 : u.id === G && O === i),
          V = N[0],
          X = N[1],
          $ = q || Object(t.useRef)(),
          te = Object(y.useRect)($, V);
        Object(t.useEffect)(
          function () {
            return l(function () {
              u.id === G && (O === i || O === _) ? X(!0) : X(!1);
            });
          },
          [G],
        ),
          Object(t.useEffect)(function () {
            return Object(C.checkStyles)('tooltip');
          });
        var Q = function () {
            switch (O) {
              case B:
              case i:
              case _:
                v('mouseenter', { id: G });
            }
          },
          ne = function () {
            switch (O) {
              case d:
                v('mousemove', { id: G });
            }
          },
          re = function (oe) {
            if (!window.__REACH_DISABLE_TOOLTIPS)
              switch (O) {
                case B:
                case i:
                case _:
                  v('focus', { id: G });
              }
          },
          ce = function () {
            switch (O) {
              case d:
              case i:
              case a:
                v('mouseleave');
            }
          },
          se = function () {
            if (u.id === G)
              switch (O) {
                case d:
                case i:
                case a:
                  v('blur');
              }
          },
          fe = function () {
            if (u.id === G)
              switch (O) {
                case d:
                case i:
                  v('mousedown');
              }
          },
          de = function (oe) {
            if (oe.key === 'Enter' || oe.key === ' ')
              switch (O) {
                case i:
                  v('selectWithKeyboard');
              }
          },
          ge = {
            'aria-describedby': G,
            'data-reach-tooltip-trigger': '',
            ref: $,
            onMouseEnter: Object(C.wrapEvent)(w, Q),
            onMouseMove: Object(C.wrapEvent)(L, ne),
            onFocus: Object(C.wrapEvent)(U, re),
            onBlur: Object(C.wrapEvent)(U, se),
            onMouseLeave: Object(C.wrapEvent)(M, ce),
            onKeyDown: Object(C.wrapEvent)(Y, de),
            onMouseDown: Object(C.wrapEvent)(Z, fe),
          },
          pe = { id: G, triggerRect: te, isVisible: V };
        return [ge, pe, V];
      }
      function z(H) {
        var w = H.children,
          L = H.label,
          M = H.ariaLabel,
          U = H.DEBUG_STYLE,
          Y = P(H, ['children', 'label', 'ariaLabel', 'DEBUG_STYLE']),
          Z = j({ DEBUG_STYLE: U }),
          q = Z[0],
          ee = Z[1];
        return n.a.createElement(
          t.Fragment,
          null,
          Object(t.cloneElement)(t.Children.only(w), q),
          n.a.createElement(W, p({ label: L, ariaLabel: M }, ee, Y)),
        );
      }
      var W = Object(t.forwardRef)(function (w, L) {
          var M = w.label,
            U = w.ariaLabel,
            Y = w.position,
            Z = w.isVisible,
            q = w.id,
            ee = w.triggerRect,
            G = P(w, [
              'label',
              'ariaLabel',
              'position',
              'isVisible',
              'id',
              'triggerRect',
            ]);
          return Z
            ? n.a.createElement(
                b.default,
                null,
                n.a.createElement(
                  K,
                  p(
                    {
                      label: M,
                      ariaLabel: U,
                      position: Y,
                      isVisible: Z,
                      id: q,
                      triggerRect: ee,
                      ref: L,
                    },
                    G,
                  ),
                ),
              )
            : null;
        }),
        K = Object(t.forwardRef)(function (w, L) {
          var M = w.label,
            U = w.ariaLabel,
            Y = w.position,
            Z = Y === void 0 ? k : Y,
            q = w.isVisible,
            ee = w.id,
            G = w.triggerRect,
            N = w.style,
            V = P(w, [
              'label',
              'ariaLabel',
              'position',
              'isVisible',
              'id',
              'triggerRect',
              'style',
            ]),
            X = U != null,
            $ = Object(t.useRef)(),
            te = Object(y.useRect)($, q);
          return n.a.createElement(
            t.Fragment,
            null,
            n.a.createElement(
              'div',
              p(
                {
                  'data-reach-tooltip': !0,
                  role: X ? void 0 : 'tooltip',
                  id: X ? void 0 : ee,
                  children: M,
                  style: p({}, N, F(Z, G, te)),
                  ref: function (ne) {
                    ($.current = ne), L && L(ne);
                  },
                },
                V,
              ),
            ),
            X && n.a.createElement(m.default, { role: 'tooltip', id: ee }, U),
          );
        }),
        S = 8,
        F = function (w, L, M) {
          var U = !M;
          return U ? { visibility: 'hidden' } : w(L, M);
        },
        k = function (w, L) {
          var M = {
              left: w.left + window.pageXOffset + 'px',
              top: w.top + w.height + window.pageYOffset + 'px',
            },
            U = {
              top: w.top - L.height < 0,
              right: window.innerWidth < w.left + L.width,
              bottom: window.innerHeight < w.bottom + L.height + S,
              left: w.left - L.width < 0,
            },
            Y = U.right && !U.left,
            Z = U.bottom && !U.top;
          return p({}, M, {
            left: Y
              ? w.right - L.width + window.pageXOffset + 'px'
              : w.left + window.pageXOffset + 'px',
            top: Z
              ? w.top - S - L.height + window.pageYOffset + 'px'
              : w.top + S + w.height + window.pageYOffset + 'px',
          });
        };
    },
    '../../node_modules/@reach/tooltip/styles.css': function (g, o, e) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../../node_modules/@reach/tooltip/styles.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../../node_modules/@reach/utils/es/index.js': function (g, o, e) {
      e.r(o),
        e.d(o, 'checkStyles', function () {
          return t;
        }),
        e.d(o, 'wrapEvent', function () {
          return n;
        }),
        e.d(o, 'assignRef', function () {
          return r;
        });
      var t = function () {},
        n = function (b, m) {
          return function (y) {
            if ((b && b(y), !y.defaultPrevented)) return m(y);
          };
        },
        r = function (b, m) {
          if (b != null)
            if (typeof b == 'function') b(m);
            else
              try {
                b.current = m;
              } catch {
                throw new Error(
                  'Cannot assign value "' + m + '" to ref "' + b + '"',
                );
              }
        };
    },
    '../../node_modules/@reach/visually-hidden/es/index.js': function (
      g,
      o,
      e,
    ) {
      e.r(o);
      var t = e('react'),
        n = e.n(t),
        r =
          Object.assign ||
          function (b) {
            for (var m = 1; m < arguments.length; m++) {
              var y = arguments[m];
              for (var p in y)
                Object.prototype.hasOwnProperty.call(y, p) && (b[p] = y[p]);
            }
            return b;
          },
        C = {
          border: 0,
          clip: 'rect(0 0 0 0)',
          height: '1px',
          width: '1px',
          margin: '-1px',
          padding: 0,
          overflow: 'hidden',
          position: 'absolute',
        };
      o.default = function (b) {
        return n.a.createElement('div', r({ style: C }, b));
      };
    },
    '../../node_modules/@reach/window-size/es/index.js': function (g, o, e) {
      e.r(o);
      var t = e('react'),
        n = e.n(t),
        r = e('../../node_modules/@reach/component-component/es/index.js');
      e('../../node_modules/prop-types/index.js');
      var C = typeof window < 'u',
        b = function (x) {
          var P = x.refs,
            B = x.setState,
            d = function () {
              return B({
                width: window.innerWidth,
                height: window.innerHeight,
              });
            };
          window.addEventListener('resize', d),
            (P.removeEvent = function () {
              window.removeEventListener('resize', d);
            });
        },
        m = function (x) {
          var P = x.refs;
          P.removeEvent();
        },
        y = function (x) {
          var P = x.children;
          return n.a.createElement(r.default, {
            refs: { removeEvent: null },
            initialState: {
              width: C && window.innerWidth,
              height: C && window.innerHeight,
            },
            didMount: b,
            willUnmount: m,
            render: function (d) {
              var i = d.state;
              return P(i);
            },
          });
        };
      o.default = y;
    },
    '../../node_modules/clipboard-js/clipboard.js': function (g, o, e) {
      (function (t) {
        function n(r) {
          return (
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? (n = function (b) {
                  return typeof b;
                })
              : (n = function (b) {
                  return b &&
                    typeof Symbol == 'function' &&
                    b.constructor === Symbol &&
                    b !== Symbol.prototype
                    ? 'symbol'
                    : typeof b;
                }),
            n(r)
          );
        }
        (function (r, C) {
          g.exports = C();
        })('clipboard', function () {
          if (typeof document > 'u' || !document.addEventListener) return null;
          var r = {};
          if (
            ((r.copy = (function () {
              var C = !1,
                b = null,
                m = !1;
              function y() {
                (C = !1),
                  (b = null),
                  m && window.getSelection().removeAllRanges(),
                  (m = !1);
              }
              document.addEventListener('copy', function (x) {
                if (C) {
                  for (var P in b) x.clipboardData.setData(P, b[P]);
                  x.preventDefault();
                }
              });
              function p() {
                var x = document.getSelection();
                if (!document.queryCommandEnabled('copy') && x.isCollapsed) {
                  var P = document.createRange();
                  P.selectNodeContents(document.body),
                    x.removeAllRanges(),
                    x.addRange(P),
                    (m = !0);
                }
              }
              return function (x) {
                return new Promise(function (P, B) {
                  (C = !0),
                    typeof x == 'string'
                      ? (b = { 'text/plain': x })
                      : x instanceof Node
                      ? (b = {
                          'text/html': new XMLSerializer().serializeToString(x),
                        })
                      : x instanceof Object
                      ? (b = x)
                      : B(
                          'Invalid data type. Must be string, DOM node, or an object mapping MIME types to strings.',
                        );
                  function d(i) {
                    try {
                      if (document.execCommand('copy')) y(), P();
                      else if (!i) p(), d(!0);
                      else
                        throw (
                          (y(),
                          new Error(
                            "Unable to copy. Perhaps it's not available in your browser?",
                          ))
                        );
                    } catch (_) {
                      y(), B(_);
                    }
                  }
                  d(!1);
                });
              };
            })()),
            (r.paste = (function () {
              var C = !1,
                b,
                m;
              return (
                document.addEventListener('paste', function (y) {
                  if (C) {
                    (C = !1), y.preventDefault();
                    var p = b;
                    (b = null), p(y.clipboardData.getData(m));
                  }
                }),
                function (y) {
                  return new Promise(function (p, x) {
                    (C = !0), (b = p), (m = y || 'text/plain');
                    try {
                      document.execCommand('paste') ||
                        ((C = !1),
                        x(
                          new Error(
                            'Unable to paste. Pasting only works in Internet Explorer at the moment.',
                          ),
                        ));
                    } catch (P) {
                      (C = !1), x(new Error(P));
                    }
                  });
                }
              );
            })()),
            typeof ClipboardEvent > 'u' &&
              typeof window.clipboardData < 'u' &&
              typeof window.clipboardData.setData < 'u')
          ) {
            /*! promise-polyfill 2.0.1 */ (function (C) {
              function b(a, s) {
                return function () {
                  a.apply(s, arguments);
                };
              }
              function m(a) {
                if (n(this) != 'object')
                  throw new TypeError('Promises must be constructed via new');
                if (typeof a != 'function')
                  throw new TypeError('not a function');
                (this._state = null),
                  (this._value = null),
                  (this._deferreds = []),
                  d(a, b(p, this), b(x, this));
              }
              function y(a) {
                var s = this;
                return this._state === null
                  ? void this._deferreds.push(a)
                  : void i(function () {
                      var u = s._state ? a.onFulfilled : a.onRejected;
                      if (u === null)
                        return void (s._state ? a.resolve : a.reject)(s._value);
                      var O;
                      try {
                        O = u(s._value);
                      } catch (v) {
                        return void a.reject(v);
                      }
                      a.resolve(O);
                    });
              }
              function p(a) {
                try {
                  if (a === this)
                    throw new TypeError(
                      'A promise cannot be resolved with itself.',
                    );
                  if (a && (n(a) == 'object' || typeof a == 'function')) {
                    var s = a.then;
                    if (typeof s == 'function')
                      return void d(b(s, a), b(p, this), b(x, this));
                  }
                  (this._state = !0), (this._value = a), P.call(this);
                } catch (u) {
                  x.call(this, u);
                }
              }
              function x(a) {
                (this._state = !1), (this._value = a), P.call(this);
              }
              function P() {
                for (var a = 0, s = this._deferreds.length; s > a; a++)
                  y.call(this, this._deferreds[a]);
                this._deferreds = null;
              }
              function B(a, s, u, O) {
                (this.onFulfilled = typeof a == 'function' ? a : null),
                  (this.onRejected = typeof s == 'function' ? s : null),
                  (this.resolve = u),
                  (this.reject = O);
              }
              function d(a, s, u) {
                var O = !1;
                try {
                  a(
                    function (v) {
                      O || ((O = !0), s(v));
                    },
                    function (v) {
                      O || ((O = !0), u(v));
                    },
                  );
                } catch (v) {
                  if (O) return;
                  (O = !0), u(v);
                }
              }
              var i =
                  m.immediateFn ||
                  (typeof t == 'function' && t) ||
                  function (a) {
                    setTimeout(a, 1);
                  },
                _ =
                  Array.isArray ||
                  function (a) {
                    return (
                      Object.prototype.toString.call(a) === '[object Array]'
                    );
                  };
              (m.prototype.catch = function (a) {
                return this.then(null, a);
              }),
                (m.prototype.then = function (a, s) {
                  var u = this;
                  return new m(function (O, v) {
                    y.call(u, new B(a, s, O, v));
                  });
                }),
                (m.all = function () {
                  var a = Array.prototype.slice.call(
                    arguments.length === 1 && _(arguments[0])
                      ? arguments[0]
                      : arguments,
                  );
                  return new m(function (s, u) {
                    function O(l, c) {
                      try {
                        if (c && (n(c) == 'object' || typeof c == 'function')) {
                          var h = c.then;
                          if (typeof h == 'function')
                            return void h.call(
                              c,
                              function (f) {
                                O(l, f);
                              },
                              u,
                            );
                        }
                        (a[l] = c), --v === 0 && s(a);
                      } catch (f) {
                        u(f);
                      }
                    }
                    if (a.length === 0) return s([]);
                    for (var v = a.length, A = 0; A < a.length; A++) O(A, a[A]);
                  });
                }),
                (m.resolve = function (a) {
                  return a && n(a) == 'object' && a.constructor === m
                    ? a
                    : new m(function (s) {
                        s(a);
                      });
                }),
                (m.reject = function (a) {
                  return new m(function (s, u) {
                    u(a);
                  });
                }),
                (m.race = function (a) {
                  return new m(function (s, u) {
                    for (var O = 0, v = a.length; v > O; O++) a[O].then(s, u);
                  });
                }),
                g.exports ? (g.exports = m) : C.Promise || (C.Promise = m);
            })(this),
              (r.copy = function (C) {
                return new Promise(function (b, m) {
                  if (typeof C != 'string' && !('text/plain' in C))
                    throw new Error('You must provide a text/plain type.');
                  var y = typeof C == 'string' ? C : C['text/plain'],
                    p = window.clipboardData.setData('Text', y);
                  p ? b() : m(new Error('Copying was rejected.'));
                });
              }),
              (r.paste = function () {
                return new Promise(function (C, b) {
                  var m = window.clipboardData.getData('Text');
                  m ? C(m) : b(new Error('Pasting was rejected.'));
                });
              });
          }
          return r;
        });
      }.call(
        this,
        e('../../node_modules/webpack/node_modules/timers-browserify/main.js')
          .setImmediate,
      ));
    },
    '../../node_modules/css-loader/index.js?!../../node_modules/@reach/menu-button/styles.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `/* Used to detect in JavaScript if apps have loaded styles or not. */
:root {
  --reach-menu-button: 1;
}

[data-reach-menu] {
  font-family: sans-serif;
  display: block;
  position: absolute;
}

[data-reach-menu-list] {
  display: block;
  white-space: nowrap;
  border: solid 1px hsla(0, 0%, 0%, 0.25);
  background: hsla(0, 100%, 100%, 0.99);
  outline: none;
  padding: 1rem 0;
  font-size: 85%;
}

[data-reach-menu-item] {
  display: block;
}

/*
 The dom structure of a MenuLink is reach-menu-item > a,
 so to target all items we can use \`data-reach-menu-item\`
*/
[data-reach-menu-item] {
  /*
    These are styled in one rule instead of something like a[data-reach-menu-item]
    and li[data-reach-menu-item] so that apps don't have to fight specificity and
    can style both li and a menu items with one rule,
    ie: \`[data-selected] { background: red; }\`.
    Otherwise they'd have to define two styles, one for a and one for li.
  */

  /* reach-menu-item */
  cursor: pointer;

  /* a */
  display: block;
  color: inherit;
  font: inherit;
  text-decoration: initial;

  /* both */
  padding: 5px 20px;
}

/* pseudo pseudo selector */
[data-reach-menu-item][data-selected] {
  background: hsl(211, 81%, 36%);
  color: white;
  outline: none;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/node_modules/@reach/menu-button/styles.css',
            ],
            names: [],
            mappings:
              'AAAA,qEAAqE;AACrE;EACE,uBAAuB;CACxB;;AAED;EACE,wBAAwB;EACxB,eAAe;EACf,mBAAmB;CACpB;;AAED;EACE,eAAe;EACf,oBAAoB;EACpB,wCAAwC;EACxC,sCAAsC;EACtC,cAAc;EACd,gBAAgB;EAChB,eAAe;CAChB;;AAED;EACE,eAAe;CAChB;;AAED;;;EAGE;AACF;EACE;;;;;;IAME;;EAEF,qBAAqB;EACrB,gBAAgB;;EAEhB,OAAO;EACP,eAAe;EACf,eAAe;EACf,cAAc;EACd,yBAAyB;;EAEzB,UAAU;EACV,kBAAkB;CACnB;;AAED,4BAA4B;AAC5B;EACE,+BAA+B;EAC/B,aAAa;EACb,cAAc;CACf',
            file: 'styles.css',
            sourcesContent: [
              `/* Used to detect in JavaScript if apps have loaded styles or not. */
:root {
  --reach-menu-button: 1;
}

[data-reach-menu] {
  font-family: sans-serif;
  display: block;
  position: absolute;
}

[data-reach-menu-list] {
  display: block;
  white-space: nowrap;
  border: solid 1px hsla(0, 0%, 0%, 0.25);
  background: hsla(0, 100%, 100%, 0.99);
  outline: none;
  padding: 1rem 0;
  font-size: 85%;
}

[data-reach-menu-item] {
  display: block;
}

/*
 The dom structure of a MenuLink is reach-menu-item > a,
 so to target all items we can use \`data-reach-menu-item\`
*/
[data-reach-menu-item] {
  /*
    These are styled in one rule instead of something like a[data-reach-menu-item]
    and li[data-reach-menu-item] so that apps don't have to fight specificity and
    can style both li and a menu items with one rule,
    ie: \`[data-selected] { background: red; }\`.
    Otherwise they'd have to define two styles, one for a and one for li.
  */

  /* reach-menu-item */
  cursor: pointer;

  /* a */
  display: block;
  color: inherit;
  font: inherit;
  text-decoration: initial;

  /* both */
  padding: 5px 20px;
}

/* pseudo pseudo selector */
[data-reach-menu-item][data-selected] {
  background: hsl(211, 81%, 36%);
  color: white;
  outline: none;
}
`,
            ],
            sourceRoot: '',
          },
        ]);
    },
    '../../node_modules/css-loader/index.js?!../../node_modules/@reach/tooltip/styles.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `:root {
  --reach-tooltip: 1;
}

[data-reach-tooltip] {
  z-index: 1;
  pointer-events: none;
  position: absolute;
  padding: 0.25em 0.5em;
  box-shadow: 2px 2px 10px hsla(0, 0%, 0%, 0.1);
  white-space: nowrap;
  font-size: 85%;
  background: #f0f0f0;
  color: #444;
  border: solid 1px #ccc;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/node_modules/@reach/tooltip/styles.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,mBAAmB;CACpB;;AAED;EACE,WAAW;EACX,qBAAqB;EACrB,mBAAmB;EACnB,sBAAsB;EACtB,8CAA8C;EAC9C,oBAAoB;EACpB,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,uBAAuB;CACxB',
            file: 'styles.css',
            sourcesContent: [
              `:root {
  --reach-tooltip: 1;
}

[data-reach-tooltip] {
  z-index: 1;
  pointer-events: none;
  position: absolute;
  padding: 0.25em 0.5em;
  box-shadow: 2px 2px 10px hsla(0, 0%, 0%, 0.1);
  white-space: nowrap;
  font-size: 85%;
  background: #f0f0f0;
  color: #444;
  border: solid 1px #ccc;
}
`,
            ],
            sourceRoot: '',
          },
        ]);
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/ContextMenu/ContextMenu.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.ContextMenu___3Zn8W {
  position: absolute;
  background-color: var(--color-context-background);
  border-radius: 0.25rem;
  overflow: hidden;
  z-index: 10000002;
}`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/ContextMenu/ContextMenu.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,mBAAmB;EACnB,kDAAkD;EAClD,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;CACnB',
            file: 'ContextMenu.css',
            sourcesContent: [
              `.ContextMenu {
  position: absolute;
  background-color: var(--color-context-background);
  border-radius: 0.25rem;
  overflow: hidden;
  z-index: 10000002;
}`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = { ContextMenu: 'ContextMenu___3Zn8W' });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/ContextMenu/ContextMenuItem.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.ContextMenuItem___21C_r {
  display: flex;
  align-items: center;
  color: var(--color-context-text);
  padding: 0.5rem 0.75rem;
  cursor: default;
  border-top: 1px solid var(--color-context-border);
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sans-normal);
}
.ContextMenuItem___21C_r:first-of-type {
  border-top: none;
}
.ContextMenuItem___21C_r:hover,
.ContextMenuItem___21C_r:focus {
  outline: 0;
  background-color: var(--color-context-background-hover);
}
.ContextMenuItem___21C_r:active {
  background-color: var(--color-context-background-selected);
  color: var(--color-context-text-selected);
}`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/ContextMenu/ContextMenuItem.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,cAAc;EACd,oBAAoB;EACpB,iCAAiC;EACjC,wBAAwB;EACxB,gBAAgB;EAChB,kDAAkD;EAClD,qCAAqC;EACrC,wCAAwC;CACzC;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,WAAW;EACX,wDAAwD;CACzD;AACD;EACE,2DAA2D;EAC3D,0CAA0C;CAC3C',
            file: 'ContextMenuItem.css',
            sourcesContent: [
              `.ContextMenuItem {
  display: flex;
  align-items: center;
  color: var(--color-context-text);
  padding: 0.5rem 0.75rem;
  cursor: default;
  border-top: 1px solid var(--color-context-border);
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sans-normal);
}
.ContextMenuItem:first-of-type {
  border-top: none;
}
.ContextMenuItem:hover,
.ContextMenuItem:focus {
  outline: 0;
  background-color: var(--color-context-background-hover);
}
.ContextMenuItem:active {
  background-color: var(--color-context-background-selected);
  color: var(--color-context-text-selected);
}`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = { ContextMenuItem: 'ContextMenuItem___21C_r' });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Button.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Button___1-PiG {
  border: none;
  background: var(--color-button-background);
  color: var(--color-button);
  padding: 0;
  border-radius: 0.25rem;
  flex: 0 0 auto;
}
.ButtonContent___2mZ9q {
  display: inline-flex;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.25rem;
}

.Button___1-PiG:hover {
  color: var(--color-button-hover);
}
.Button___1-PiG:active {
  color: var(--color-button-focus);
  outline: none;
}
.Button___1-PiG:focus,
.ButtonContent___2mZ9q:focus {
  outline: none;
}

.Button___1-PiG:focus > .ButtonContent___2mZ9q {
  background: var(--color-button-background-focus);
}

.Button___1-PiG:disabled,
.Button___1-PiG:disabled:active {
  background: var(--color-button-background);
  color: var(--color-button-disabled);
  cursor: default;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Button.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,aAAa;EACb,2CAA2C;EAC3C,2BAA2B;EAC3B,WAAW;EACX,uBAAuB;EACvB,eAAe;CAChB;AACD;EACE,qBAAqB;EACrB,oBAAoB;EACpB,uBAAuB;EACvB,iBAAiB;CAClB;;AAED;EACE,iCAAiC;CAClC;AACD;EACE,iCAAiC;EACjC,cAAc;CACf;AACD;;EAEE,cAAc;CACf;;AAED;EACE,iDAAiD;CAClD;;AAED;;EAEE,2CAA2C;EAC3C,oCAAoC;EACpC,gBAAgB;CACjB',
            file: 'Button.css',
            sourcesContent: [
              `.Button {
  border: none;
  background: var(--color-button-background);
  color: var(--color-button);
  padding: 0;
  border-radius: 0.25rem;
  flex: 0 0 auto;
}
.ButtonContent {
  display: inline-flex;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.25rem;
}

.Button:hover {
  color: var(--color-button-hover);
}
.Button:active {
  color: var(--color-button-focus);
  outline: none;
}
.Button:focus,
.ButtonContent:focus {
  outline: none;
}

.Button:focus > .ButtonContent {
  background: var(--color-button-background-focus);
}

.Button:disabled,
.Button:disabled:active {
  background: var(--color-button-background);
  color: var(--color-button-disabled);
  cursor: default;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Button: 'Button___1-PiG',
          ButtonContent: 'ButtonContent___2mZ9q',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/ButtonIcon.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.ButtonIcon___1AgYV {
  width: 1rem;
  height: 1rem;
  fill: currentColor;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/ButtonIcon.css',
            ],
            names: [],
            mappings: 'AAAA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;CACpB',
            file: 'ButtonIcon.css',
            sourcesContent: [
              `.ButtonIcon {
  width: 1rem;
  height: 1rem;
  fill: currentColor;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = { ButtonIcon: 'ButtonIcon___1AgYV' });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/Badge.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Badge___1D92d {
  display: inline-block;
  background-color: var(--color-component-badge-background);
  color: var(--color-text);
  padding: 0.125rem 0.25rem;
  line-height: normal;
  border-radius: 0.125rem;
  margin-right: 0.25rem;
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-small);
}

.ExtraLabel___ktyWc {
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-small);
  color: var(--color-component-badge-count);
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Components/Badge.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,sBAAsB;EACtB,0DAA0D;EAC1D,yBAAyB;EACzB,0BAA0B;EAC1B,oBAAoB;EACpB,wBAAwB;EACxB,sBAAsB;EACtB,0CAA0C;EAC1C,4CAA4C;CAC7C;;AAED;EACE,0CAA0C;EAC1C,4CAA4C;EAC5C,0CAA0C;CAC3C',
            file: 'Badge.css',
            sourcesContent: [
              `.Badge {
  display: inline-block;
  background-color: var(--color-component-badge-background);
  color: var(--color-text);
  padding: 0.125rem 0.25rem;
  line-height: normal;
  border-radius: 0.125rem;
  margin-right: 0.25rem;
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-small);
}

.ExtraLabel {
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-small);
  color: var(--color-component-badge-count);
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Badge: 'Badge___1D92d',
          ExtraLabel: 'ExtraLabel___ktyWc',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/Components.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Components___MlQHS {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-family-sans);
}

.TreeWrapper___2uPTC {
  flex: 0 0 65%;
  overflow: auto;
}

.SelectedElementWrapper___1wT_p {
  flex: 0 0 35%;
  overflow-x: hidden;
  overflow-y: auto;
}

@media screen and (max-width: 600px) {
  .Components___MlQHS {
    flex-direction: column;
  }

  .TreeWrapper___2uPTC {
    flex: 0 0 50%;
  }

  .SelectedElementWrapper___1wT_p {
    flex: 0 0 50%;
  }
}

.Loading___Slif- {
  height: 100%;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sans-large);
  color: var(--color-dim);
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Components/Components.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,cAAc;EACd,oBAAoB;EACpB,0CAA0C;EAC1C,yBAAyB;EACzB,qCAAqC;CACtC;;AAED;EACE,cAAc;EACd,eAAe;CAChB;;AAED;EACE,cAAc;EACd,mBAAmB;EACnB,iBAAiB;CAClB;;AAED;EACE;IACE,uBAAuB;GACxB;;EAED;IACE,cAAc;GACf;;EAED;IACE,cAAc;GACf;CACF;;AAED;EACE,aAAa;EACb,qBAAqB;EACrB,cAAc;EACd,oBAAoB;EACpB,wBAAwB;EACxB,uCAAuC;EACvC,wBAAwB;CACzB',
            file: 'Components.css',
            sourcesContent: [
              `.Components {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-family-sans);
}

.TreeWrapper {
  flex: 0 0 65%;
  overflow: auto;
}

.SelectedElementWrapper {
  flex: 0 0 35%;
  overflow-x: hidden;
  overflow-y: auto;
}

@media screen and (max-width: 600px) {
  .Components {
    flex-direction: column;
  }

  .TreeWrapper {
    flex: 0 0 50%;
  }

  .SelectedElementWrapper {
    flex: 0 0 50%;
  }
}

.Loading {
  height: 100%;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sans-large);
  color: var(--color-dim);
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Components: 'Components___MlQHS',
          TreeWrapper: 'TreeWrapper___2uPTC',
          SelectedElementWrapper: 'SelectedElementWrapper___1wT_p',
          Loading: 'Loading___Slif-',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/EditableName.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Input___2v7pX {
  flex: 0 1 auto;
  padding: 1px;
  box-shadow: 0px 1px 3px transparent;
  color: var(--color-text);
}
.Input___2v7pX:focus {
  color: var(--color-text);
  box-shadow: 0px 1px 3px var(--color-shadow);
}`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Components/EditableName.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,eAAe;EACf,aAAa;EACb,oCAAoC;EACpC,yBAAyB;CAC1B;AACD;EACE,yBAAyB;EACzB,4CAA4C;CAC7C',
            file: 'EditableName.css',
            sourcesContent: [
              `.Input {
  flex: 0 1 auto;
  padding: 1px;
  box-shadow: 0px 1px 3px transparent;
  color: var(--color-text);
}
.Input:focus {
  color: var(--color-text);
  box-shadow: 0px 1px 3px var(--color-shadow);
}`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = { Input: 'Input___2v7pX' });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/EditableValue.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.CheckboxLabel___vFDNi {
  flex: 1 1 100%;
  display: flex;
}
.CheckboxLabel___vFDNi:focus-within {
  background-color: var(--color-button-background-focus);
}

.Checkbox___S8zDe:focus {
  outline: none;
}

.Input___54okB {
  flex: 1 1;
  background: none;
  border: 1px solid transparent;
  color: var(--color-attribute-editable-value);
  border-radius: 0.125rem;
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
}

.Invalid___AR4Hd {
  flex: 1 1;
  background: none;
  border: 1px solid transparent;
  color: var(--color-attribute-editable-value);
  border-radius: 0.125rem;
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
  background-color: var(--color-background-invalid);
  color: var(--color-text-invalid);

  --color-border: var(--color-text-invalid);
}

.Input___54okB:focus,
.Invalid___AR4Hd:focus {
  background-color: var(--color-button-background-focus);
  outline: none;
}

.ResetButton___k3gxk {
  flex: 0 0 auto;
  padding: 0 0.5rem;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Components/EditableValue.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,eAAe;EACf,cAAc;CACf;AACD;EACE,uDAAuD;CACxD;;AAED;EACE,cAAc;CACf;;AAED;EACE,UAAU;EACV,iBAAiB;EACjB,8BAA8B;EAC9B,6CAA6C;EAC7C,wBAAwB;EACxB,0CAA0C;EAC1C,6CAA6C;CAC9C;;AAED;EACE,UAAU;EACV,iBAAiB;EACjB,8BAA8B;EAC9B,6CAA6C;EAC7C,wBAAwB;EACxB,0CAA0C;EAC1C,6CAA6C;EAC7C,kDAAkD;EAClD,iCAAiC;;EAEjC,0CAA0C;CAC3C;;AAED;;EAEE,uDAAuD;EACvD,cAAc;CACf;;AAED;EACE,eAAe;EACf,kBAAkB;CACnB',
            file: 'EditableValue.css',
            sourcesContent: [
              `.CheckboxLabel {
  flex: 1 1 100%;
  display: flex;
}
.CheckboxLabel:focus-within {
  background-color: var(--color-button-background-focus);
}

.Checkbox:focus {
  outline: none;
}

.Input {
  flex: 1 1;
  background: none;
  border: 1px solid transparent;
  color: var(--color-attribute-editable-value);
  border-radius: 0.125rem;
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
}

.Invalid {
  flex: 1 1;
  background: none;
  border: 1px solid transparent;
  color: var(--color-attribute-editable-value);
  border-radius: 0.125rem;
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
  background-color: var(--color-background-invalid);
  color: var(--color-text-invalid);

  --color-border: var(--color-text-invalid);
}

.Input:focus,
.Invalid:focus {
  background-color: var(--color-button-background-focus);
  outline: none;
}

.ResetButton {
  flex: 0 0 auto;
  padding: 0 0.5rem;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          CheckboxLabel: 'CheckboxLabel___vFDNi',
          Checkbox: 'Checkbox___S8zDe',
          Input: 'Input___54okB',
          Invalid: 'Invalid___AR4Hd',
          ResetButton: 'ResetButton___k3gxk',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/Element.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Element___1PGUo,
.InactiveSelectedElement___3H2V0,
.SelectedElement___2BZuq,
.HoveredElement___4tCuC {
  color: var(--color-component-name);
}
.HoveredElement___4tCuC {
  background-color: var(--color-background-hover);
}
.InactiveSelectedElement___3H2V0 {
  background-color: var(--color-background-inactive);
}

.Wrapper___1kRcF {
  padding: 0 0.25rem;
  white-space: nowrap;
  height: var(--line-height-data);
  line-height: var(--line-height-data);
  display: inline-flex;
  align-items: center;
  cursor: default;
  user-select: none;
}

.ScrollAnchor___31Dc8 {
  height: 100%;
  width: 0;
}

.SelectedElement___2BZuq {
  background-color: var(--color-background-selected);
  color: var(--color-text-selected);

  /* Invert colors */
  --color-component-name: var(--color-component-name-inverted);
  --color-text: var(--color-text-selected);
  --color-component-badge-background: var(
    --color-component-badge-background-inverted
  );
  --color-component-badge-count: var(--color-component-badge-count-inverted);
  --color-attribute-name: var(--color-attribute-name-inverted);
  --color-attribute-value: var(--color-attribute-value-inverted);
  --color-expand-collapse-toggle: var(--color-component-name-inverted);
}

.KeyName___iOoVX {
  color: var(--color-attribute-name);
}

.KeyValue___2hQzO {
  color: var(--color-attribute-value);
  user-select: text;
  max-width: 100px;
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.Highlight___OJ7Ox {
  background-color: var(--color-search-match);
}
.CurrentHighlight___3RWa2 {
  background-color: var(--color-search-match-current);
}

.ExpandCollapseToggle___3CxPD {
  display: inline-flex;
  width: 1rem;
  height: 1rem;
  flex: 0 0 1rem;
  color: var(--color-expand-collapse-toggle);
}

.Badge___36OB- {
  margin-left: 0.25rem;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Components/Element.css',
            ],
            names: [],
            mappings:
              'AAAA;;;;EAIE,mCAAmC;CACpC;AACD;EACE,gDAAgD;CACjD;AACD;EACE,mDAAmD;CACpD;;AAED;EACE,mBAAmB;EACnB,oBAAoB;EACpB,gCAAgC;EAChC,qCAAqC;EACrC,qBAAqB;EACrB,oBAAoB;EACpB,gBAAgB;EAChB,kBAAkB;CACnB;;AAED;EACE,aAAa;EACb,SAAS;CACV;;AAED;EACE,mDAAmD;EACnD,kCAAkC;;EAElC,mBAAmB;EACnB,6DAA6D;EAC7D,yCAAyC;EACzC;;IAEE;EACF,2EAA2E;EAC3E,6DAA6D;EAC7D,+DAA+D;EAC/D,qEAAqE;CACtE;;AAED;EACE,mCAAmC;CACpC;;AAED;EACE,oCAAoC;EACpC,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,wBAAwB;CACzB;;AAED;EACE,4CAA4C;CAC7C;AACD;EACE,oDAAoD;CACrD;;AAED;EACE,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,2CAA2C;CAC5C;;AAED;EACE,qBAAqB;CACtB',
            file: 'Element.css',
            sourcesContent: [
              `.Element,
.InactiveSelectedElement,
.SelectedElement,
.HoveredElement {
  color: var(--color-component-name);
}
.HoveredElement {
  background-color: var(--color-background-hover);
}
.InactiveSelectedElement {
  background-color: var(--color-background-inactive);
}

.Wrapper {
  padding: 0 0.25rem;
  white-space: nowrap;
  height: var(--line-height-data);
  line-height: var(--line-height-data);
  display: inline-flex;
  align-items: center;
  cursor: default;
  user-select: none;
}

.ScrollAnchor {
  height: 100%;
  width: 0;
}

.SelectedElement {
  background-color: var(--color-background-selected);
  color: var(--color-text-selected);

  /* Invert colors */
  --color-component-name: var(--color-component-name-inverted);
  --color-text: var(--color-text-selected);
  --color-component-badge-background: var(
    --color-component-badge-background-inverted
  );
  --color-component-badge-count: var(--color-component-badge-count-inverted);
  --color-attribute-name: var(--color-attribute-name-inverted);
  --color-attribute-value: var(--color-attribute-value-inverted);
  --color-expand-collapse-toggle: var(--color-component-name-inverted);
}

.KeyName {
  color: var(--color-attribute-name);
}

.KeyValue {
  color: var(--color-attribute-value);
  user-select: text;
  max-width: 100px;
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.Highlight {
  background-color: var(--color-search-match);
}
.CurrentHighlight {
  background-color: var(--color-search-match-current);
}

.ExpandCollapseToggle {
  display: inline-flex;
  width: 1rem;
  height: 1rem;
  flex: 0 0 1rem;
  color: var(--color-expand-collapse-toggle);
}

.Badge {
  margin-left: 0.25rem;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Element: 'Element___1PGUo',
          InactiveSelectedElement: 'InactiveSelectedElement___3H2V0',
          SelectedElement: 'SelectedElement___2BZuq',
          HoveredElement: 'HoveredElement___4tCuC',
          Wrapper: 'Wrapper___1kRcF',
          ScrollAnchor: 'ScrollAnchor___31Dc8',
          KeyName: 'KeyName___iOoVX',
          KeyValue: 'KeyValue___2hQzO',
          Highlight: 'Highlight___OJ7Ox',
          CurrentHighlight: 'CurrentHighlight___3RWa2',
          ExpandCollapseToggle: 'ExpandCollapseToggle___3CxPD',
          Badge: 'Badge___36OB-',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/ExpandCollapseToggle.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.ExpandCollapseToggle___1eSq5 {
  flex: 0 0 1rem;
  width: 1rem;
  height: 1rem;
  padding: 0;
  color: var(--color-expand-collapse-toggle);
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Components/ExpandCollapseToggle.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,WAAW;EACX,2CAA2C;CAC5C',
            file: 'ExpandCollapseToggle.css',
            sourcesContent: [
              `.ExpandCollapseToggle {
  flex: 0 0 1rem;
  width: 1rem;
  height: 1rem;
  padding: 0;
  color: var(--color-expand-collapse-toggle);
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = { ExpandCollapseToggle: 'ExpandCollapseToggle___1eSq5' });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/HocBadges.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.HocBadges___3V-9f {
  padding: 0.125rem 0.25rem;
  user-select: none;
}

.Badge___yfw97 {
  display: inline-block;
  background-color: var(--color-component-badge-background);
  color: var(--color-text);
  padding: 0.125rem 0.25rem;
  line-height: normal;
  border-radius: 0.125rem;
  margin-right: 0.25rem;
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-small);
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Components/HocBadges.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,0BAA0B;EAC1B,kBAAkB;CACnB;;AAED;EACE,sBAAsB;EACtB,0DAA0D;EAC1D,yBAAyB;EACzB,0BAA0B;EAC1B,oBAAoB;EACpB,wBAAwB;EACxB,sBAAsB;EACtB,0CAA0C;EAC1C,4CAA4C;CAC7C',
            file: 'HocBadges.css',
            sourcesContent: [
              `.HocBadges {
  padding: 0.125rem 0.25rem;
  user-select: none;
}

.Badge {
  display: inline-block;
  background-color: var(--color-component-badge-background);
  color: var(--color-text);
  padding: 0.125rem 0.25rem;
  line-height: normal;
  border-radius: 0.125rem;
  margin-right: 0.25rem;
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-small);
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = { HocBadges: 'HocBadges___3V-9f', Badge: 'Badge___yfw97' });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/HooksTree.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.HooksTreeView___1Fl2v {
  padding: 0.25rem;
  border-top: 1px solid var(--color-border);
}

.Hook___3YGvA {
}

.Children___czkVv {
  padding-left: 1rem;
}

.HeaderRow___2ys42 {
  display: flex;
  align-items: center;
}

.Header___1QK7j {
  flex: 1 1;
  font-family: var(--font-family-sans);
}

.NameValueRow___2wmen {
  display: flex;
}

.Name___2hzUF,
.NameAnonymous___2bMmB {
  flex: 0 0 auto;
  cursor: default;
}
.Name___2hzUF {
  color: var(--color-dim);
}
.NameAnonymous___2bMmB {
  color: var(--color-dimmer);
}

.EditableName___3-YQT {
  color: var(--color-attribute-name);
  flex: 0 0 auto;
  cursor: default;
}
.EditableName___3-YQT:after,
.Name___2hzUF:after {
  color: var(--color-text);
  content: ': ';
  margin-right: 0.5rem;
}

.Value___1cSv3 {
  color: var(--color-attribute-value);
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
}

.None___2tUHz {
  color: var(--color-dimmer);
  font-style: italic;
}

.TruncationIndicator___2crPv {
  color: var(--color-dimmer);
}

.ExpandCollapseToggleSpacer___1O9Og {
  flex: 0 0 1rem;
  width: 1rem;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Components/HooksTree.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,iBAAiB;EACjB,0CAA0C;CAC3C;;AAED;CACC;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,cAAc;EACd,oBAAoB;CACrB;;AAED;EACE,UAAU;EACV,qCAAqC;CACtC;;AAED;EACE,cAAc;CACf;;AAED;;EAEE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,2BAA2B;CAC5B;;AAED;EACE,mCAAmC;EACnC,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,yBAAyB;EACzB,cAAc;EACd,qBAAqB;CACtB;;AAED;EACE,oCAAoC;EACpC,iBAAiB;EACjB,wBAAwB;EACxB,gBAAgB;CACjB;;AAED;EACE,2BAA2B;EAC3B,mBAAmB;CACpB;;AAED;EACE,2BAA2B;CAC5B;;AAED;EACE,eAAe;EACf,YAAY;CACb',
            file: 'HooksTree.css',
            sourcesContent: [
              `.HooksTreeView {
  padding: 0.25rem;
  border-top: 1px solid var(--color-border);
}

.Hook {
}

.Children {
  padding-left: 1rem;
}

.HeaderRow {
  display: flex;
  align-items: center;
}

.Header {
  flex: 1 1;
  font-family: var(--font-family-sans);
}

.NameValueRow {
  display: flex;
}

.Name,
.NameAnonymous {
  flex: 0 0 auto;
  cursor: default;
}
.Name {
  color: var(--color-dim);
}
.NameAnonymous {
  color: var(--color-dimmer);
}

.EditableName {
  color: var(--color-attribute-name);
  flex: 0 0 auto;
  cursor: default;
}
.EditableName:after,
.Name:after {
  color: var(--color-text);
  content: ': ';
  margin-right: 0.5rem;
}

.Value {
  color: var(--color-attribute-value);
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
}

.None {
  color: var(--color-dimmer);
  font-style: italic;
}

.TruncationIndicator {
  color: var(--color-dimmer);
}

.ExpandCollapseToggleSpacer {
  flex: 0 0 1rem;
  width: 1rem;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          HooksTreeView: 'HooksTreeView___1Fl2v',
          Hook: 'Hook___3YGvA',
          Children: 'Children___czkVv',
          HeaderRow: 'HeaderRow___2ys42',
          Header: 'Header___1QK7j',
          NameValueRow: 'NameValueRow___2wmen',
          Name: 'Name___2hzUF',
          NameAnonymous: 'NameAnonymous___2bMmB',
          EditableName: 'EditableName___3-YQT',
          Value: 'Value___1cSv3',
          None: 'None___2tUHz',
          TruncationIndicator: 'TruncationIndicator___2crPv',
          ExpandCollapseToggleSpacer: 'ExpandCollapseToggleSpacer___1O9Og',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/InspectedElementTree.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.InspectedElementTree___Tif5r {
  padding: 0.25rem;
  border-top: 1px solid var(--color-border);
}
.InspectedElementTree___Tif5r:first-of-type {
  border-top: none;
}

.HeaderRow___2wqh5 {
  display: flex;
  align-items: center;
}

.Header___32vgs {
  flex: 1 1;
  font-family: var(--font-family-sans);
}

.Item___1VriK {
  display: flex;
}

.Name___3xGyI {
  color: var(--color-attribute-name);
  flex: 0 0 auto;
}
.Name___3xGyI:after {
  content: ': ';
  color: var(--color-text);
  margin-right: 0.5rem;
}

.Value___2-EFH {
  color: var(--color-attribute-value);
  overflow: hidden;
  text-overflow: ellipsis;
}

.None___1Nr1V {
  color: var(--color-dimmer);
  font-style: italic;
}

.Empty___3VMY5 {
  color: var(--color-dimmer);
  font-style: italic;
  padding-left: 0.75rem;
}

.AddEntry___2tQv9 {
  padding-left: 1rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.EditableValue___2wZwY {
  min-width: 1rem;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Components/InspectedElementTree.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,iBAAiB;EACjB,0CAA0C;CAC3C;AACD;EACE,iBAAiB;CAClB;;AAED;EACE,cAAc;EACd,oBAAoB;CACrB;;AAED;EACE,UAAU;EACV,qCAAqC;CACtC;;AAED;EACE,cAAc;CACf;;AAED;EACE,mCAAmC;EACnC,eAAe;CAChB;AACD;EACE,cAAc;EACd,yBAAyB;EACzB,qBAAqB;CACtB;;AAED;EACE,oCAAoC;EACpC,iBAAiB;EACjB,wBAAwB;CACzB;;AAED;EACE,2BAA2B;EAC3B,mBAAmB;CACpB;;AAED;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,sBAAsB;CACvB;;AAED;EACE,mBAAmB;EACnB,oBAAoB;EACpB,cAAc;EACd,oBAAoB;CACrB;;AAED;EACE,gBAAgB;CACjB',
            file: 'InspectedElementTree.css',
            sourcesContent: [
              `.InspectedElementTree {
  padding: 0.25rem;
  border-top: 1px solid var(--color-border);
}
.InspectedElementTree:first-of-type {
  border-top: none;
}

.HeaderRow {
  display: flex;
  align-items: center;
}

.Header {
  flex: 1 1;
  font-family: var(--font-family-sans);
}

.Item {
  display: flex;
}

.Name {
  color: var(--color-attribute-name);
  flex: 0 0 auto;
}
.Name:after {
  content: ': ';
  color: var(--color-text);
  margin-right: 0.5rem;
}

.Value {
  color: var(--color-attribute-value);
  overflow: hidden;
  text-overflow: ellipsis;
}

.None {
  color: var(--color-dimmer);
  font-style: italic;
}

.Empty {
  color: var(--color-dimmer);
  font-style: italic;
  padding-left: 0.75rem;
}

.AddEntry {
  padding-left: 1rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.EditableValue {
  min-width: 1rem;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          InspectedElementTree: 'InspectedElementTree___Tif5r',
          HeaderRow: 'HeaderRow___2wqh5',
          Header: 'Header___32vgs',
          Item: 'Item___1VriK',
          Name: 'Name___3xGyI',
          Value: 'Value___2-EFH',
          None: 'None___1Nr1V',
          Empty: 'Empty___3VMY5',
          AddEntry: 'AddEntry___2tQv9',
          EditableValue: 'EditableValue___2wZwY',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/KeyValue.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Item___2n2qv:not([hidden]) {
  display: flex;
}

.Name___3LSJX {
  color: var(--color-dim);
  flex: 0 0 auto;
  cursor: default;
}
.EditableName___2TyRo {
  color: var(--color-attribute-name);
  flex: 0 0 auto;
  cursor: default;
}
.EditableName___2TyRo:after,
.Name___3LSJX:after {
  content: ': ';
  color: var(--color-text);
  margin-right: 0.5rem;
}

.Value___7p123 {
  color: var(--color-attribute-value);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
}

.None___RYyex {
  color: var(--color-dimmer);
  font-style: italic;
}

.ExpandCollapseToggleSpacer___3KNWO {
  flex: 0 0 1rem;
  width: 1rem;
}

.Empty___1MaDj {
  color: var(--color-dimmer);
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Components/KeyValue.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,cAAc;CACf;;AAED;EACE,wBAAwB;EACxB,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,mCAAmC;EACnC,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,cAAc;EACd,yBAAyB;EACzB,qBAAqB;CACtB;;AAED;EACE,oCAAoC;EACpC,oBAAoB;EACpB,iBAAiB;EACjB,wBAAwB;EACxB,gBAAgB;CACjB;;AAED;EACE,2BAA2B;EAC3B,mBAAmB;CACpB;;AAED;EACE,eAAe;EACf,YAAY;CACb;;AAED;EACE,2BAA2B;CAC5B',
            file: 'KeyValue.css',
            sourcesContent: [
              `.Item:not([hidden]) {
  display: flex;
}

.Name {
  color: var(--color-dim);
  flex: 0 0 auto;
  cursor: default;
}
.EditableName {
  color: var(--color-attribute-name);
  flex: 0 0 auto;
  cursor: default;
}
.EditableName:after,
.Name:after {
  content: ': ';
  color: var(--color-text);
  margin-right: 0.5rem;
}

.Value {
  color: var(--color-attribute-value);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
}

.None {
  color: var(--color-dimmer);
  font-style: italic;
}

.ExpandCollapseToggleSpacer {
  flex: 0 0 1rem;
  width: 1rem;
}

.Empty {
  color: var(--color-dimmer);
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Item: 'Item___2n2qv',
          Name: 'Name___3LSJX',
          EditableName: 'EditableName___2TyRo',
          Value: 'Value___7p123',
          None: 'None___RYyex',
          ExpandCollapseToggleSpacer: 'ExpandCollapseToggleSpacer___3KNWO',
          Empty: 'Empty___1MaDj',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/AutoSizeInput.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Input___2Lqoc {
  width: 0;
  min-width: 0.5rem;
  flex: 1 1 auto;
  border: none;
  background: transparent;
  outline: none;
  padding: 0;
  border: none;
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
}

.Input___2Lqoc:focus {
  border-color: var(--color-border);
}

.HiddenDiv___32TVk {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  height: 0;
  overflow: scroll;
  white-space: pre;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/AutoSizeInput.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,wBAAwB;EACxB,cAAc;EACd,WAAW;EACX,aAAa;EACb,0CAA0C;EAC1C,6CAA6C;CAC9C;;AAED;EACE,kCAAkC;CACnC;;AAED;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,mBAAmB;EACnB,UAAU;EACV,iBAAiB;EACjB,iBAAiB;CAClB',
            file: 'AutoSizeInput.css',
            sourcesContent: [
              `.Input {
  width: 0;
  min-width: 0.5rem;
  flex: 1 1 auto;
  border: none;
  background: transparent;
  outline: none;
  padding: 0;
  border: none;
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
}

.Input:focus {
  border-color: var(--color-border);
}

.HiddenDiv {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  height: 0;
  overflow: scroll;
  white-space: pre;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = { Input: 'Input___2Lqoc', HiddenDiv: 'HiddenDiv___32TVk' });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/LayoutViewer.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.LayoutViewer___215Ad {
  padding: 0.25rem;
  border-top: 1px solid var(--color-border);
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-small);
}

.Header___YXSRg {
  font-family: var(--font-family-sans);
}

.DashedBox___i8dxS,
.SolidBox___1W-UG {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-width: 1px;
  border-color: var(--color-dim);
  padding: 0.25rem;
  margin: 0.25rem;
}
.DashedBox___i8dxS {
  border-style: dashed;
}
.SolidBox___1W-UG {
  border-style: solid;
}

.LabelRow___2SQOh {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Label___IskVY {
  position: absolute;
  left: 0.5rem;
  flex: 1 0 100px;
  color: var(--color-attribute-name);
}

.BoxRow___2_1as {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/LayoutViewer.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,iBAAiB;EACjB,0CAA0C;EAC1C,0CAA0C;EAC1C,4CAA4C;CAC7C;;AAED;EACE,qCAAqC;CACtC;;AAED;;EAEE,eAAe;EACf,cAAc;EACd,uBAAuB;EACvB,oBAAoB;EACpB,kBAAkB;EAClB,+BAA+B;EAC/B,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;CACrB;;AAED;EACE,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,oBAAoB;EACpB,wBAAwB;CACzB;;AAED;EACE,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,mCAAmC;CACpC;;AAED;EACE,YAAY;EACZ,cAAc;EACd,oBAAoB;EACpB,oBAAoB;CACrB',
            file: 'LayoutViewer.css',
            sourcesContent: [
              `.LayoutViewer {
  padding: 0.25rem;
  border-top: 1px solid var(--color-border);
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-small);
}

.Header {
  font-family: var(--font-family-sans);
}

.DashedBox,
.SolidBox {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-width: 1px;
  border-color: var(--color-dim);
  padding: 0.25rem;
  margin: 0.25rem;
}
.DashedBox {
  border-style: dashed;
}
.SolidBox {
  border-style: solid;
}

.LabelRow {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Label {
  position: absolute;
  left: 0.5rem;
  flex: 1 0 100px;
  color: var(--color-attribute-name);
}

.BoxRow {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          LayoutViewer: 'LayoutViewer___215Ad',
          Header: 'Header___YXSRg',
          DashedBox: 'DashedBox___i8dxS',
          SolidBox: 'SolidBox___1W-UG',
          LabelRow: 'LabelRow___2SQOh',
          Label: 'Label___IskVY',
          BoxRow: 'BoxRow___2_1as',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/StyleEditor.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.StyleEditor___1RvzE {
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
  padding: 0.25rem;
  border-top: 1px solid var(--color-border);
}

.HeaderRow___xyA6t {
  display: flex;
  align-items: center;
}

.Header___2SGfE {
  flex: 1 1;
}

.Brackets___2zA4K {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sans-small);
}

.Row___3v8mp {
  white-space: nowrap;
  padding-left: 1rem;
  display: flex;
  align-items: center;
}

.Invalid___3ogBH {
  background-color: var(--color-background-invalid);
  color: var(--color-text-invalid);

  --color-border: var(--color-text-invalid);
}
.Attribute___2yC0c {
  color: var(--color-attribute-name);
}

.Value___1yJUg {
  color: var(--color-attribute-value);
}

.Input___3Zdnf {
  flex: 0 1 auto;
  padding: 1px;
  box-shadow: 0px 1px 3px transparent;
}
.Input___3Zdnf:focus {
  color: var(--color-text);
  box-shadow: 0px 1px 3px var(--color-shadow);
}

.Empty___3Pi3w {
  color: var(--color-dimmer);
  font-style: italic;
  user-select: none;
  padding-left: 1rem;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/StyleEditor.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,0CAA0C;EAC1C,6CAA6C;EAC7C,iBAAiB;EACjB,0CAA0C;CAC3C;;AAED;EACE,cAAc;EACd,oBAAoB;CACrB;;AAED;EACE,UAAU;CACX;;AAED;EACE,qCAAqC;EACrC,uCAAuC;CACxC;;AAED;EACE,oBAAoB;EACpB,mBAAmB;EACnB,cAAc;EACd,oBAAoB;CACrB;;AAED;EACE,kDAAkD;EAClD,iCAAiC;;EAEjC,0CAA0C;CAC3C;AACD;EACE,mCAAmC;CACpC;;AAED;EACE,oCAAoC;CACrC;;AAED;EACE,eAAe;EACf,aAAa;EACb,oCAAoC;CACrC;AACD;EACE,yBAAyB;EACzB,4CAA4C;CAC7C;;AAED;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;CACpB',
            file: 'StyleEditor.css',
            sourcesContent: [
              `.StyleEditor {
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
  padding: 0.25rem;
  border-top: 1px solid var(--color-border);
}

.HeaderRow {
  display: flex;
  align-items: center;
}

.Header {
  flex: 1 1;
}

.Brackets {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sans-small);
}

.Row {
  white-space: nowrap;
  padding-left: 1rem;
  display: flex;
  align-items: center;
}

.Invalid {
  background-color: var(--color-background-invalid);
  color: var(--color-text-invalid);

  --color-border: var(--color-text-invalid);
}
.Attribute {
  color: var(--color-attribute-name);
}

.Value {
  color: var(--color-attribute-value);
}

.Input {
  flex: 0 1 auto;
  padding: 1px;
  box-shadow: 0px 1px 3px transparent;
}
.Input:focus {
  color: var(--color-text);
  box-shadow: 0px 1px 3px var(--color-shadow);
}

.Empty {
  color: var(--color-dimmer);
  font-style: italic;
  user-select: none;
  padding-left: 1rem;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          StyleEditor: 'StyleEditor___1RvzE',
          HeaderRow: 'HeaderRow___xyA6t',
          Header: 'Header___2SGfE',
          Brackets: 'Brackets___2zA4K',
          Row: 'Row___3v8mp',
          Invalid: 'Invalid___3ogBH',
          Attribute: 'Attribute___2yC0c',
          Value: 'Value___1yJUg',
          Input: 'Input___3Zdnf',
          Empty: 'Empty___3Pi3w',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/OwnersStack.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.OwnerStack___32qwj {
  max-width: 100%;
  overflow-x: auto;
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}

.Component___3e3s7,
.Component___3e3s7[data-reach-menu-item] {
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
  user-select: none;
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.Component___3e3s7[data-reach-menu-item][data-selected],
.Component___3e3s7[data-reach-menu-item][data-selected]:hover {
  color: var(--color-text-selected);
  background: var(--color-background-selected);
}
.Component___3e3s7[data-reach-menu-item][data-selected]:focus {
  outline: none;
}

.Bar___3G3dX {
  display: flex;
  flex: 1 1 auto;
  overflow-x: auto;
}

.VRule___IJYKJ {
  flex: 0 0 auto;
  height: 20px;
  width: 1px;
  background-color: var(--color-border);
  margin: 0 0.5rem;
}

.MenuButton___3te3U {
  border-radius: 0.25rem;
  display: inline-flex;
  align-items: center;
  padding: 0;
  flex: 0 0 auto;
  border: none;
  background: var(--color-button-background);
  color: var(--color-button);
}
.MenuButtonContent___3VvHH {
  display: inline-flex;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.25rem;
}
.MenuButton___3te3U:hover {
  color: var(--color-button-hover);
}
.MenuButton___3te3U[aria-expanded='true'],
.MenuButton___3te3U[aria-expanded='true']:active {
  color: var(--color-button-active);
  outline: none;
}

.MenuButton___3te3U:focus,
.MenuButtonContent___3VvHH:focus {
  outline: none;
}
.MenuButton___3te3U:focus > .MenuButtonContent___3VvHH {
  background: var(--color-button-background-focus);
}

.Modal___8b8bs[data-reach-menu-list] {
  display: inline-flex;
  flex-direction: column;
  background-color: var(--color-background);
  color: var(--color-button);
  padding: 0.25rem 0;
  padding-right: 0;
  border: 1px solid var(--color-border);
  border-radius: 0.25rem;
  max-height: 10rem;
  overflow: auto;

  /* Make sure this is above the DevTools, which are above the Overlay */
  z-index: 10000002;
  position: relative;

  /* Reach UI tries to set its own :( */
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
}

.NotInStore___3Y2P2,
.NotInStore___3Y2P2:hover {
  color: var(--color-dimmest);
}

.Badge___2E6aT {
  margin-left: 0.25rem;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Components/OwnersStack.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,QAAQ;EACR,cAAc;EACd,oBAAoB;EACpB,mBAAmB;CACpB;;AAED;;EAEE,0CAA0C;EAC1C,6CAA6C;EAC7C,kBAAkB;EAClB,oBAAoB;EACpB,cAAc;EACd,oBAAoB;CACrB;;AAED;;EAEE,kCAAkC;EAClC,6CAA6C;CAC9C;AACD;EACE,cAAc;CACf;;AAED;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,aAAa;EACb,WAAW;EACX,sCAAsC;EACtC,iBAAiB;CAClB;;AAED;EACE,uBAAuB;EACvB,qBAAqB;EACrB,oBAAoB;EACpB,WAAW;EACX,eAAe;EACf,aAAa;EACb,2CAA2C;EAC3C,2BAA2B;CAC5B;AACD;EACE,qBAAqB;EACrB,oBAAoB;EACpB,uBAAuB;EACvB,iBAAiB;CAClB;AACD;EACE,iCAAiC;CAClC;AACD;;EAEE,kCAAkC;EAClC,cAAc;CACf;;AAED;;EAEE,cAAc;CACf;AACD;EACE,iDAAiD;CAClD;;AAED;EACE,qBAAqB;EACrB,uBAAuB;EACvB,0CAA0C;EAC1C,2BAA2B;EAC3B,mBAAmB;EACnB,iBAAiB;EACjB,sCAAsC;EACtC,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;;EAEf,uEAAuE;EACvE,kBAAkB;EAClB,mBAAmB;;EAEnB,sCAAsC;EACtC,0CAA0C;EAC1C,6CAA6C;CAC9C;;AAED;;EAEE,4BAA4B;CAC7B;;AAED;EACE,qBAAqB;CACtB',
            file: 'OwnersStack.css',
            sourcesContent: [
              `.OwnerStack {
  max-width: 100%;
  overflow-x: auto;
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}

.Component,
.Component[data-reach-menu-item] {
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
  user-select: none;
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.Component[data-reach-menu-item][data-selected],
.Component[data-reach-menu-item][data-selected]:hover {
  color: var(--color-text-selected);
  background: var(--color-background-selected);
}
.Component[data-reach-menu-item][data-selected]:focus {
  outline: none;
}

.Bar {
  display: flex;
  flex: 1 1 auto;
  overflow-x: auto;
}

.VRule {
  flex: 0 0 auto;
  height: 20px;
  width: 1px;
  background-color: var(--color-border);
  margin: 0 0.5rem;
}

.MenuButton {
  border-radius: 0.25rem;
  display: inline-flex;
  align-items: center;
  padding: 0;
  flex: 0 0 auto;
  border: none;
  background: var(--color-button-background);
  color: var(--color-button);
}
.MenuButtonContent {
  display: inline-flex;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.25rem;
}
.MenuButton:hover {
  color: var(--color-button-hover);
}
.MenuButton[aria-expanded='true'],
.MenuButton[aria-expanded='true']:active {
  color: var(--color-button-active);
  outline: none;
}

.MenuButton:focus,
.MenuButtonContent:focus {
  outline: none;
}
.MenuButton:focus > .MenuButtonContent {
  background: var(--color-button-background-focus);
}

.Modal[data-reach-menu-list] {
  display: inline-flex;
  flex-direction: column;
  background-color: var(--color-background);
  color: var(--color-button);
  padding: 0.25rem 0;
  padding-right: 0;
  border: 1px solid var(--color-border);
  border-radius: 0.25rem;
  max-height: 10rem;
  overflow: auto;

  /* Make sure this is above the DevTools, which are above the Overlay */
  z-index: 10000002;
  position: relative;

  /* Reach UI tries to set its own :( */
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
}

.NotInStore,
.NotInStore:hover {
  color: var(--color-dimmest);
}

.Badge {
  margin-left: 0.25rem;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          OwnerStack: 'OwnerStack___32qwj',
          Component: 'Component___3e3s7',
          Bar: 'Bar___3G3dX',
          VRule: 'VRule___IJYKJ',
          MenuButton: 'MenuButton___3te3U',
          MenuButtonContent: 'MenuButtonContent___3VvHH',
          Modal: 'Modal___8b8bs',
          NotInStore: 'NotInStore___3Y2P2',
          Badge: 'Badge___2E6aT',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/SearchInput.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.SearchInput___3_D7A {
  flex: 1 1;
  display: flex;
  align-items: center;
}

.Input___3Kf09 {
  flex: 1 1 100px;
  width: 100px;
  font-size: var(--font-size-sans-large);
  outline: none;
  border: none;
  background-color: var(--color-background);
  color: var(--color-text);
  padding-left: 1.5rem;
  margin-left: -1rem;
}

.InputIcon___1HrXN {
  pointer-events: none;
  z-index: 2;
  color: var(--color-dimmer);
}

.IndexLabel___2cd8c {
  color: var(--color-dim);
  font-size: var(--font-size-sans-normal);
  white-space: pre;
}

.LeftVRule___wcxjb,
.RightVRule___cvpx8 {
  height: 20px;
  width: 1px;
  background-color: var(--color-border);
}
.LeftVRule___wcxjb {
  margin: 0 0.25rem 0 0.5rem;
}
.RightVRule___cvpx8 {
  margin: 0 0.5rem 0 0.25rem;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Components/SearchInput.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,UAAU;EACV,cAAc;EACd,oBAAoB;CACrB;;AAED;EACE,gBAAgB;EAChB,aAAa;EACb,uCAAuC;EACvC,cAAc;EACd,aAAa;EACb,0CAA0C;EAC1C,yBAAyB;EACzB,qBAAqB;EACrB,mBAAmB;CACpB;;AAED;EACE,qBAAqB;EACrB,WAAW;EACX,2BAA2B;CAC5B;;AAED;EACE,wBAAwB;EACxB,wCAAwC;EACxC,iBAAiB;CAClB;;AAED;;EAEE,aAAa;EACb,WAAW;EACX,sCAAsC;CACvC;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,2BAA2B;CAC5B',
            file: 'SearchInput.css',
            sourcesContent: [
              `.SearchInput {
  flex: 1 1;
  display: flex;
  align-items: center;
}

.Input {
  flex: 1 1 100px;
  width: 100px;
  font-size: var(--font-size-sans-large);
  outline: none;
  border: none;
  background-color: var(--color-background);
  color: var(--color-text);
  padding-left: 1.5rem;
  margin-left: -1rem;
}

.InputIcon {
  pointer-events: none;
  z-index: 2;
  color: var(--color-dimmer);
}

.IndexLabel {
  color: var(--color-dim);
  font-size: var(--font-size-sans-normal);
  white-space: pre;
}

.LeftVRule,
.RightVRule {
  height: 20px;
  width: 1px;
  background-color: var(--color-border);
}
.LeftVRule {
  margin: 0 0.25rem 0 0.5rem;
}
.RightVRule {
  margin: 0 0.5rem 0 0.25rem;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          SearchInput: 'SearchInput___3_D7A',
          Input: 'Input___3Kf09',
          InputIcon: 'InputIcon___1HrXN',
          IndexLabel: 'IndexLabel___2cd8c',
          LeftVRule: 'LeftVRule___wcxjb',
          RightVRule: 'RightVRule___cvpx8',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/SelectedElement.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.SelectedElement___1BBE- {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-left: 1px solid var(--color-border);
  border-top: 1px solid var(--color-border);
}

.TitleRow___3KXaU {
  flex: 0 0 42px;
  display: flex;
  align-items: center;
  font-size: var(--font-size-monospace-large);
  border-bottom: 1px solid var(--color-border);
  padding: 0.5rem;
}

.SelectedComponentName___fsoQf {
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
}

.Owners___2TDn3 {
  padding: 0.25rem;
  border-top: 1px solid var(--color-border);
}

.OwnersHeader___1W8cp {
  font-family: var(--font-family-sans);
}

.Source___2Od53 {
  padding: 0.25rem;
  border-top: 1px solid var(--color-border);
}

.SourceHeaderRow___3osMX {
  display: flex;
  align-items: center;
}

.SourceHeader___31-ng {
  flex: 1 1;
  font-family: var(--font-family-sans);
}

.SourceOneLiner___3UyoL {
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  margin-left: 1rem;
}

.Component___3aCZ4,
.Owner___ZV1NX {
  color: var(--color-component-name);
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.Component___3aCZ4 {
  flex: 1 1 auto;
}

.InspectedElement___OD3PD {
  overflow-x: hidden;
  overflow-y: auto;
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
  line-height: var(--line-height-data);
}

.Owner___ZV1NX {
  border-radius: 0.25rem;
  padding: 0.125rem 0.25rem;
  cursor: pointer;
  background: none;
  border: none;
  display: block;
}
.Owner___ZV1NX:focus {
  outline: none;
  background-color: var(--color-button-background-focus);
}

.Loading___14NUm {
  padding: 0.25rem;
  color: var(--color-dimmer);
  font-style: italic;
}

.CannotSuspendWarningMessage___3ycws {
}

.NotInStore___3Nvun {
  color: var(--color-dim);
  cursor: default;
}

.OwnerButton___2JyFR {
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  padding: 0;
}

.ContextMenuIcon___2FD5s {
  margin-right: 0.5rem;
}`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Components/SelectedElement.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,cAAc;EACd,uBAAuB;EACvB,aAAa;EACb,YAAY;EACZ,2CAA2C;EAC3C,0CAA0C;CAC3C;;AAED;EACE,eAAe;EACf,cAAc;EACd,oBAAoB;EACpB,4CAA4C;EAC5C,6CAA6C;EAC7C,gBAAgB;CACjB;;AAED;EACE,eAAe;EACf,iBAAiB;EACjB,wBAAwB;CACzB;;AAED;EACE,iBAAiB;EACjB,0CAA0C;CAC3C;;AAED;EACE,qCAAqC;CACtC;;AAED;EACE,iBAAiB;EACjB,0CAA0C;CAC3C;;AAED;EACE,cAAc;EACd,oBAAoB;CACrB;;AAED;EACE,UAAU;EACV,qCAAqC;CACtC;;AAED;EACE,0CAA0C;EAC1C,6CAA6C;EAC7C,oBAAoB;EACpB,iBAAiB;EACjB,wBAAwB;EACxB,gBAAgB;EAChB,kBAAkB;CACnB;;AAED;;EAEE,mCAAmC;EACnC,0CAA0C;EAC1C,6CAA6C;EAC7C,oBAAoB;EACpB,iBAAiB;EACjB,wBAAwB;EACxB,gBAAgB;CACjB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,mBAAmB;EACnB,iBAAiB;EACjB,0CAA0C;EAC1C,6CAA6C;EAC7C,qCAAqC;CACtC;;AAED;EACE,uBAAuB;EACvB,0BAA0B;EAC1B,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,eAAe;CAChB;AACD;EACE,cAAc;EACd,uDAAuD;CACxD;;AAED;EACE,iBAAiB;EACjB,2BAA2B;EAC3B,mBAAmB;CACpB;;AAED;CACC;;AAED;EACE,wBAAwB;EACxB,gBAAgB;CACjB;;AAED;EACE,cAAc;EACd,oBAAoB;EACpB,oBAAoB;EACpB,WAAW;CACZ;;AAED;EACE,qBAAqB;CACtB',
            file: 'SelectedElement.css',
            sourcesContent: [
              `.SelectedElement {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-left: 1px solid var(--color-border);
  border-top: 1px solid var(--color-border);
}

.TitleRow {
  flex: 0 0 42px;
  display: flex;
  align-items: center;
  font-size: var(--font-size-monospace-large);
  border-bottom: 1px solid var(--color-border);
  padding: 0.5rem;
}

.SelectedComponentName {
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
}

.Owners {
  padding: 0.25rem;
  border-top: 1px solid var(--color-border);
}

.OwnersHeader {
  font-family: var(--font-family-sans);
}

.Source {
  padding: 0.25rem;
  border-top: 1px solid var(--color-border);
}

.SourceHeaderRow {
  display: flex;
  align-items: center;
}

.SourceHeader {
  flex: 1 1;
  font-family: var(--font-family-sans);
}

.SourceOneLiner {
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  margin-left: 1rem;
}

.Component,
.Owner {
  color: var(--color-component-name);
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.Component {
  flex: 1 1 auto;
}

.InspectedElement {
  overflow-x: hidden;
  overflow-y: auto;
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
  line-height: var(--line-height-data);
}

.Owner {
  border-radius: 0.25rem;
  padding: 0.125rem 0.25rem;
  cursor: pointer;
  background: none;
  border: none;
  display: block;
}
.Owner:focus {
  outline: none;
  background-color: var(--color-button-background-focus);
}

.Loading {
  padding: 0.25rem;
  color: var(--color-dimmer);
  font-style: italic;
}

.CannotSuspendWarningMessage {
}

.NotInStore {
  color: var(--color-dim);
  cursor: default;
}

.OwnerButton {
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  padding: 0;
}

.ContextMenuIcon {
  margin-right: 0.5rem;
}`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          SelectedElement: 'SelectedElement___1BBE-',
          TitleRow: 'TitleRow___3KXaU',
          SelectedComponentName: 'SelectedComponentName___fsoQf',
          Owners: 'Owners___2TDn3',
          OwnersHeader: 'OwnersHeader___1W8cp',
          Source: 'Source___2Od53',
          SourceHeaderRow: 'SourceHeaderRow___3osMX',
          SourceHeader: 'SourceHeader___31-ng',
          SourceOneLiner: 'SourceOneLiner___3UyoL',
          Component: 'Component___3aCZ4',
          Owner: 'Owner___ZV1NX',
          InspectedElement: 'InspectedElement___OD3PD',
          Loading: 'Loading___14NUm',
          CannotSuspendWarningMessage: 'CannotSuspendWarningMessage___3ycws',
          NotInStore: 'NotInStore___3Nvun',
          OwnerButton: 'OwnerButton___2JyFR',
          ContextMenuIcon: 'ContextMenuIcon___2FD5s',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/SelectedTreeHighlight.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Active___3Y5D2,
.Inactive___2Ddkx {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 0;
  pointer-events: none;
}

.Active___3Y5D2 {
  background-color: var(--color-selected-tree-highlight-active);
}

.Inactive___2Ddkx {
  background-color: var(--color-selected-tree-highlight-inactive);
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Components/SelectedTreeHighlight.css',
            ],
            names: [],
            mappings:
              'AAAA;;EAEE,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,WAAW;EACX,qBAAqB;CACtB;;AAED;EACE,8DAA8D;CAC/D;;AAED;EACE,gEAAgE;CACjE',
            file: 'SelectedTreeHighlight.css',
            sourcesContent: [
              `.Active,
.Inactive {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 0;
  pointer-events: none;
}

.Active {
  background-color: var(--color-selected-tree-highlight-active);
}

.Inactive {
  background-color: var(--color-selected-tree-highlight-inactive);
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = { Active: 'Active___3Y5D2', Inactive: 'Inactive___2Ddkx' });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/Tree.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Tree___3Pjje {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-border);

  /* Default size will be adjusted by Tree after scrolling */
  --indentation-size: 12px;
}

.List___qlOJG {
  overflow-x: hidden !important;
}

.InnerElementType___1csGF {
  overflow-x: hidden;
}

.SearchInput___1Q2I_ {
  flex: 0 0 42px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  padding: 0.5rem;
}

.AutoSizerWrapper___3IcMr {
  width: 100%;
  overflow: hidden;
  flex: 1 0 auto;
}
.AutoSizerWrapper___3IcMr:focus {
  outline: none;
}

.List___qlOJG {
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
  line-height: var(--line-height-data);
}

.VRule___3yG5q {
  height: 20px;
  width: 1px;
  margin: 0 0.5rem;
  background-color: var(--color-border);
}

.Loading___TrqnR {
  height: 100%;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
  font-size: var(--font-size-sans-large);
  color: var(--color-dim);
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Components/Tree.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,cAAc;EACd,uBAAuB;EACvB,0CAA0C;;EAE1C,2DAA2D;EAC3D,yBAAyB;CAC1B;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,eAAe;EACf,cAAc;EACd,oBAAoB;EACpB,6CAA6C;EAC7C,gBAAgB;CACjB;;AAED;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,cAAc;CACf;;AAED;EACE,0CAA0C;EAC1C,6CAA6C;EAC7C,qCAAqC;CACtC;;AAED;EACE,aAAa;EACb,WAAW;EACX,iBAAiB;EACjB,sCAAsC;CACvC;;AAED;EACE,aAAa;EACb,qBAAqB;EACrB,cAAc;EACd,oBAAoB;EACpB,QAAQ;EACR,4BAA4B;EAC5B,uCAAuC;EACvC,wBAAwB;CACzB',
            file: 'Tree.css',
            sourcesContent: [
              `.Tree {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-border);

  /* Default size will be adjusted by Tree after scrolling */
  --indentation-size: 12px;
}

.List {
  overflow-x: hidden !important;
}

.InnerElementType {
  overflow-x: hidden;
}

.SearchInput {
  flex: 0 0 42px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  padding: 0.5rem;
}

.AutoSizerWrapper {
  width: 100%;
  overflow: hidden;
  flex: 1 0 auto;
}
.AutoSizerWrapper:focus {
  outline: none;
}

.List {
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
  line-height: var(--line-height-data);
}

.VRule {
  height: 20px;
  width: 1px;
  margin: 0 0.5rem;
  background-color: var(--color-border);
}

.Loading {
  height: 100%;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
  font-size: var(--font-size-sans-large);
  color: var(--color-dim);
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Tree: 'Tree___3Pjje',
          List: 'List___qlOJG',
          InnerElementType: 'InnerElementType___1csGF',
          SearchInput: 'SearchInput___1Q2I_',
          AutoSizerWrapper: 'AutoSizerWrapper___3IcMr',
          VRule: 'VRule___3yG5q',
          Loading: 'Loading___TrqnR',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/DevTools.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.DevTools___NAxvy {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  color: var(--color-text);
}

.TabBar___2aDHU {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  background-color: var(--color-background);
  border-top: 1px solid var(--color-border);
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sans-large);
  user-select: none;

  /* Electron drag area */
  -webkit-app-region: drag;
}

.Spacer___1VPRF {
  flex: 1;
}

.TabContent___27Qz1 {
  flex: 1 1 100%;
  overflow: auto;
  -webkit-app-region: no-drag;
}

.DevToolsVersion___3_3UD {
  font-size: var(--font-size-sans-normal);
  margin-right: 0.5rem;
}

.DevToolsVersion___3_3UD:before {
  font-size: var(--font-size-sans-large);
  content: 'DevTools ';
}

@media screen and (max-width: 400px) {
  .DevToolsVersion___3_3UD:before {
    content: '';
  }
}

@media screen and (max-width: 300px) {
  .DevToolsVersion___3_3UD {
    display: none;
  }
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/DevTools.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,0CAA0C;EAC1C,yBAAyB;CAC1B;;AAED;EACE,eAAe;EACf,cAAc;EACd,oBAAoB;EACpB,kBAAkB;EAClB,0CAA0C;EAC1C,0CAA0C;EAC1C,qCAAqC;EACrC,uCAAuC;EACvC,kBAAkB;;EAElB,wBAAwB;EACxB,yBAAyB;CAC1B;;AAED;EACE,QAAQ;CACT;;AAED;EACE,eAAe;EACf,eAAe;EACf,4BAA4B;CAC7B;;AAED;EACE,wCAAwC;EACxC,qBAAqB;CACtB;;AAED;EACE,uCAAuC;EACvC,qBAAqB;CACtB;;AAED;EACE;IACE,YAAY;GACb;CACF;;AAED;EACE;IACE,cAAc;GACf;CACF',
            file: 'DevTools.css',
            sourcesContent: [
              `.DevTools {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  color: var(--color-text);
}

.TabBar {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  background-color: var(--color-background);
  border-top: 1px solid var(--color-border);
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sans-large);
  user-select: none;

  /* Electron drag area */
  -webkit-app-region: drag;
}

.Spacer {
  flex: 1;
}

.TabContent {
  flex: 1 1 100%;
  overflow: auto;
  -webkit-app-region: no-drag;
}

.DevToolsVersion {
  font-size: var(--font-size-sans-normal);
  margin-right: 0.5rem;
}

.DevToolsVersion:before {
  font-size: var(--font-size-sans-large);
  content: 'DevTools ';
}

@media screen and (max-width: 400px) {
  .DevToolsVersion:before {
    content: '';
  }
}

@media screen and (max-width: 300px) {
  .DevToolsVersion {
    display: none;
  }
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          DevTools: 'DevTools___NAxvy',
          TabBar: 'TabBar___2aDHU',
          Spacer: 'Spacer___1VPRF',
          TabContent: 'TabContent___27Qz1',
          DevToolsVersion: 'DevToolsVersion___3_3UD',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/ErrorBoundary.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.ErrorBoundary___24NcV {
  height: 100%;
  width: 100%;
  background-color: white;
  color: red;
  padding: 0.5rem;
  overflow: auto;
}

.Header___8LGXN {
  font-size: var(--font-size-sans-large);
  font-weight: bold;
}

.Stack___3-PTh {
  margin-top: 0.5rem;
  white-space: pre-wrap;
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-small);
  background-color: hsl(0, 100%, 97%);
  border: 1px solid hsl(0, 100%, 92%);
  border-radius: 0.25rem;
  padding: 0.5rem;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/ErrorBoundary.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,aAAa;EACb,YAAY;EACZ,wBAAwB;EACxB,WAAW;EACX,gBAAgB;EAChB,eAAe;CAChB;;AAED;EACE,uCAAuC;EACvC,kBAAkB;CACnB;;AAED;EACE,mBAAmB;EACnB,sBAAsB;EACtB,0CAA0C;EAC1C,4CAA4C;EAC5C,oCAAoC;EACpC,oCAAoC;EACpC,uBAAuB;EACvB,gBAAgB;CACjB',
            file: 'ErrorBoundary.css',
            sourcesContent: [
              `.ErrorBoundary {
  height: 100%;
  width: 100%;
  background-color: white;
  color: red;
  padding: 0.5rem;
  overflow: auto;
}

.Header {
  font-size: var(--font-size-sans-large);
  font-weight: bold;
}

.Stack {
  margin-top: 0.5rem;
  white-space: pre-wrap;
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-small);
  background-color: hsl(0, 100%, 97%);
  border: 1px solid hsl(0, 100%, 92%);
  border-radius: 0.25rem;
  padding: 0.5rem;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          ErrorBoundary: 'ErrorBoundary___24NcV',
          Header: 'Header___8LGXN',
          Stack: 'Stack___3-PTh',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Icon.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Icon___v5HwN {
  width: 1rem;
  height: 1rem;
  fill: currentColor;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Icon.css',
            ],
            names: [],
            mappings: 'AAAA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;CACpB',
            file: 'Icon.css',
            sourcesContent: [
              `.Icon {
  width: 1rem;
  height: 1rem;
  fill: currentColor;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = { Icon: 'Icon___v5HwN' });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/ModalDialog.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Background___39iOi {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  background-color: var(--color-modal-background);
  overflow: auto;
}

.Dialog___2XI77 {
  position: relative;
  z-index: 3;
  width: 25rem;
  min-width: 20rem;
  max-width: 100%;
  display: inline-block;
  background-color: var(--color-background);
  box-shadow: 0 2px 4px var(--color-shadow);
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 0.25rem;
  font-size: var(--font-size-sans-normal);
}

.Title___1FtK3 {
  font-size: var(--font-size-sans-large);
  margin-bottom: 0.5rem;
}

.Buttons___3N6w8 {
  text-align: right;
  margin-top: 0.5rem;
}

.Button___3JNc2 {
  font-size: var(--font-size-sans-large);
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/ModalDialog.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,cAAc;EACd,wBAAwB;EACxB,wBAAwB;EACxB,cAAc;EACd,gDAAgD;EAChD,eAAe;CAChB;;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,0CAA0C;EAC1C,0CAA0C;EAC1C,gBAAgB;EAChB,sCAAsC;EACtC,uBAAuB;EACvB,wCAAwC;CACzC;;AAED;EACE,uCAAuC;EACvC,sBAAsB;CACvB;;AAED;EACE,kBAAkB;EAClB,mBAAmB;CACpB;;AAED;EACE,uCAAuC;CACxC',
            file: 'ModalDialog.css',
            sourcesContent: [
              `.Background {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  background-color: var(--color-modal-background);
  overflow: auto;
}

.Dialog {
  position: relative;
  z-index: 3;
  width: 25rem;
  min-width: 20rem;
  max-width: 100%;
  display: inline-block;
  background-color: var(--color-background);
  box-shadow: 0 2px 4px var(--color-shadow);
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 0.25rem;
  font-size: var(--font-size-sans-normal);
}

.Title {
  font-size: var(--font-size-sans-large);
  margin-bottom: 0.5rem;
}

.Buttons {
  text-align: right;
  margin-top: 0.5rem;
}

.Button {
  font-size: var(--font-size-sans-large);
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Background: 'Background___39iOi',
          Dialog: 'Dialog___2XI77',
          Title: 'Title___1FtK3',
          Buttons: 'Buttons___3N6w8',
          Button: 'Button___3JNc2',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/ChartNode.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Group___2hArG {
  transition: all ease-in-out 250ms;
}

.Rect___fBfs_ {
  cursor: pointer;
  stroke: var(--color-background);
  transition: all ease-in-out 250ms;
}

.ForeignObject___2EdVc {
  pointer-events: none;
  transition: all ease-in-out 250ms;
}

.Div___1Pgrm {
  pointer-events: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sans-normal);
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  line-height: 1.5;
  padding: 0 0 0;
  font-weight: 400;
  color: var(--color-commit-gradient-text);
  text-align: left;
  transition: all ease-in-out 250ms;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Profiler/ChartNode.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,kCAAkC;CACnC;;AAED;EACE,gBAAgB;EAChB,gCAAgC;EAChC,kCAAkC;CACnC;;AAED;EACE,qBAAqB;EACrB,kCAAkC;CACnC;;AAED;EACE,qBAAqB;EACrB,oBAAoB;EACpB,wBAAwB;EACxB,iBAAiB;EACjB,qCAAqC;EACrC,wCAAwC;EACxC,qBAAqB;EACrB,sBAAsB;EACtB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,yCAAyC;EACzC,iBAAiB;EACjB,kCAAkC;CACnC',
            file: 'ChartNode.css',
            sourcesContent: [
              `.Group {
  transition: all ease-in-out 250ms;
}

.Rect {
  cursor: pointer;
  stroke: var(--color-background);
  transition: all ease-in-out 250ms;
}

.ForeignObject {
  pointer-events: none;
  transition: all ease-in-out 250ms;
}

.Div {
  pointer-events: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sans-normal);
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  line-height: 1.5;
  padding: 0 0 0;
  font-weight: 400;
  color: var(--color-commit-gradient-text);
  text-align: left;
  transition: all ease-in-out 250ms;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Group: 'Group___2hArG',
          Rect: 'Rect___fBfs_',
          ForeignObject: 'ForeignObject___2EdVc',
          Div: 'Div___1Pgrm',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/CommitFlamegraph.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Container___WYOTp {
  width: 100%;
  flex: 1;
  padding: 0.5rem;
}

.PatternPath___2kgd1 {
  stroke: var(--color-commit-did-not-render-pattern);
  stroke-width: 1;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Profiler/CommitFlamegraph.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,YAAY;EACZ,QAAQ;EACR,gBAAgB;CACjB;;AAED;EACE,mDAAmD;EACnD,gBAAgB;CACjB',
            file: 'CommitFlamegraph.css',
            sourcesContent: [
              `.Container {
  width: 100%;
  flex: 1;
  padding: 0.5rem;
}

.PatternPath {
  stroke: var(--color-commit-did-not-render-pattern);
  stroke-width: 1;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Container: 'Container___WYOTp',
          PatternPath: 'PatternPath___2kgd1',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/CommitRanked.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Container___2D32U {
  width: 100%;
  flex: 1;
  padding: 0.5rem;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Profiler/CommitRanked.css',
            ],
            names: [],
            mappings: 'AAAA;EACE,YAAY;EACZ,QAAQ;EACR,gBAAgB;CACjB',
            file: 'CommitRanked.css',
            sourcesContent: [
              `.Container {
  width: 100%;
  flex: 1;
  padding: 0.5rem;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = { Container: 'Container___2D32U' });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/InteractionListItem.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Interaction___1wkkK,
.SelectedInteraction___7La_q {
  display: flex;
  align-items: center;
  padding: 0 0.25rem;
  border-bottom: 1px solid var(--color-border);
}

.Interaction___1wkkK:hover {
  background-color: var(--color-background-hover);
}

.SelectedInteraction___7La_q {
  background-color: var(--color-background-hover);
}

.Name___3dY_4 {
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.Timeline___O0RIy {
  position: relative;
  height: 100%;
}

.InteractionLine___r6F9K {
  position: absolute;
  height: 3px;
  background-color: var(--color-commit-did-not-render-fill);
  color: var(--color-commit-did-not-render-fill-text);
  border-radius: 0.125rem;
}

.CommitBox___2Ly_w {
  position: absolute;
  width: var(--interaction-commit-size);
  height: var(--interaction-commit-size);
  background-color: var(--color-commit-did-not-render-fill);
  color: var(--color-commit-did-not-render-fill-text);
  cursor: pointer;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Profiler/InteractionListItem.css',
            ],
            names: [],
            mappings:
              'AAAA;;EAEE,cAAc;EACd,oBAAoB;EACpB,mBAAmB;EACnB,6CAA6C;CAC9C;;AAED;EACE,gDAAgD;CACjD;;AAED;EACE,gDAAgD;CACjD;;AAED;EACE,oBAAoB;EACpB,mBAAmB;EACnB,wBAAwB;CACzB;;AAED;EACE,mBAAmB;EACnB,aAAa;CACd;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,0DAA0D;EAC1D,oDAAoD;EACpD,wBAAwB;CACzB;;AAED;EACE,mBAAmB;EACnB,sCAAsC;EACtC,uCAAuC;EACvC,0DAA0D;EAC1D,oDAAoD;EACpD,gBAAgB;CACjB',
            file: 'InteractionListItem.css',
            sourcesContent: [
              `.Interaction,
.SelectedInteraction {
  display: flex;
  align-items: center;
  padding: 0 0.25rem;
  border-bottom: 1px solid var(--color-border);
}

.Interaction:hover {
  background-color: var(--color-background-hover);
}

.SelectedInteraction {
  background-color: var(--color-background-hover);
}

.Name {
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.Timeline {
  position: relative;
  height: 100%;
}

.InteractionLine {
  position: absolute;
  height: 3px;
  background-color: var(--color-commit-did-not-render-fill);
  color: var(--color-commit-did-not-render-fill-text);
  border-radius: 0.125rem;
}

.CommitBox {
  position: absolute;
  width: var(--interaction-commit-size);
  height: var(--interaction-commit-size);
  background-color: var(--color-commit-did-not-render-fill);
  color: var(--color-commit-did-not-render-fill-text);
  cursor: pointer;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Interaction: 'Interaction___1wkkK',
          SelectedInteraction: 'SelectedInteraction___7La_q',
          Name: 'Name___3dY_4',
          Timeline: 'Timeline___O0RIy',
          InteractionLine: 'InteractionLine___r6F9K',
          CommitBox: 'CommitBox___2Ly_w',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/Interactions.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Container___1CyNc {
  width: 100%;
  flex: 1;
  padding: 0.5rem;
}

.FocusTarget___3WP7F:focus {
  outline: none;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Profiler/Interactions.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,YAAY;EACZ,QAAQ;EACR,gBAAgB;CACjB;;AAED;EACE,cAAc;CACf',
            file: 'Interactions.css',
            sourcesContent: [
              `.Container {
  width: 100%;
  flex: 1;
  padding: 0.5rem;
}

.FocusTarget:focus {
  outline: none;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Container: 'Container___1CyNc',
          FocusTarget: 'FocusTarget___3WP7F',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/NoCommitData.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.NoCommitData___2oJ_z {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.Header___1oGeD {
  font-size: var(--font-size-sans-large);
  margin-bottom: 0.5rem;
}

.FilterMessage___1Yg5n {
  display: flex;
  align-items: center;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Profiler/NoCommitData.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,oBAAoB;EACpB,wBAAwB;CACzB;;AAED;EACE,uCAAuC;EACvC,sBAAsB;CACvB;;AAED;EACE,cAAc;EACd,oBAAoB;CACrB',
            file: 'NoCommitData.css',
            sourcesContent: [
              `.NoCommitData {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.Header {
  font-size: var(--font-size-sans-large);
  margin-bottom: 0.5rem;
}

.FilterMessage {
  display: flex;
  align-items: center;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          NoCommitData: 'NoCommitData___2oJ_z',
          Header: 'Header___1oGeD',
          FilterMessage: 'FilterMessage___1Yg5n',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/NoInteractions.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.NoInteractions___1FQiN {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.Header___26pfp {
  font-size: var(--font-size-sans-large);
}

.Link___1QIRe {
  color: var(--color-button);
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Profiler/NoInteractions.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,oBAAoB;EACpB,wBAAwB;CACzB;;AAED;EACE,uCAAuC;CACxC;;AAED;EACE,2BAA2B;CAC5B',
            file: 'NoInteractions.css',
            sourcesContent: [
              `.NoInteractions {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.Header {
  font-size: var(--font-size-sans-large);
}

.Link {
  color: var(--color-button);
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          NoInteractions: 'NoInteractions___1FQiN',
          Header: 'Header___26pfp',
          Link: 'Link___1QIRe',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/Profiler.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Profiler___20Ry4 {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sans-normal);
  background-color: var(--color-background);
  color: var(--color-text);
}

.LeftColumn___3I7-I {
  display: flex;
  flex-direction: column;
  flex: 2 1 200px;
  border-top: 1px solid var(--color-border);
}

.RightColumn___3smXD {
  display: flex;
  flex-direction: column;
  flex: 1 1 100px;
  max-width: 300px;
  overflow-x: hidden;
  border-left: 1px solid var(--color-border);
  border-top: 1px solid var(--color-border);
}

.Content___1LjDy {
  position: relative;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.Column___3WWtw {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
}

.Paragraph___1HLty {
  text-align: center;
}

.Row___1RpSu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.Header___QyJw2 {
  font-size: var(--font-size-sans-large);
  margin-bottom: 0.5rem;
}

.Toolbar___30kHu {
  height: 2.25rem;
  padding: 0 0.25rem;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
}

.VRule___2y9G3 {
  height: 20px;
  width: 1px;
  border-left: 1px solid var(--color-border);
  padding-left: 0.25rem;
  margin-left: 0.25rem;
}

.Spacer___1sezP {
  flex: 1;
}

.StopRecordingButton___1-ElU {
  font-size: var(--font-size-sans-large);
  padding: 0.5rem;
}

.ContentFallback___2Ata2 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sans-large);
  color: var(--color-dim);
}

.SnapshotSelectorFallback___3fsFv {
  height: 100%;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sans-large);
  color: var(--color-dim);
}

.Link___mZ2LE {
  color: var(--color-button);
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Profiler/Profiler.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,oBAAoB;EACpB,qBAAqB;EACrB,qCAAqC;EACrC,wCAAwC;EACxC,0CAA0C;EAC1C,yBAAyB;CAC1B;;AAED;EACE,cAAc;EACd,uBAAuB;EACvB,gBAAgB;EAChB,0CAA0C;CAC3C;;AAED;EACE,cAAc;EACd,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,2CAA2C;EAC3C,0CAA0C;CAC3C;;AAED;EACE,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,uBAAuB;EACvB,oBAAoB;EACpB,wBAAwB;CACzB;;AAED;EACE,cAAc;EACd,uBAAuB;EACvB,oBAAoB;EACpB,wBAAwB;EACxB,gBAAgB;CACjB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,cAAc;EACd,oBAAoB;EACpB,oBAAoB;EACpB,wBAAwB;CACzB;;AAED;EACE,uCAAuC;EACvC,sBAAsB;CACvB;;AAED;EACE,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,oBAAoB;EACpB,6CAA6C;CAC9C;;AAED;EACE,aAAa;EACb,WAAW;EACX,2CAA2C;EAC3C,sBAAsB;EACtB,qBAAqB;CACtB;;AAED;EACE,QAAQ;CACT;;AAED;EACE,uCAAuC;EACvC,gBAAgB;CACjB;;AAED;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,oBAAoB;EACpB,wBAAwB;EACxB,uCAAuC;EACvC,wBAAwB;CACzB;;AAED;EACE,aAAa;EACb,qBAAqB;EACrB,cAAc;EACd,oBAAoB;EACpB,wBAAwB;EACxB,uCAAuC;EACvC,wBAAwB;CACzB;;AAED;EACE,2BAA2B;CAC5B',
            file: 'Profiler.css',
            sourcesContent: [
              `.Profiler {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sans-normal);
  background-color: var(--color-background);
  color: var(--color-text);
}

.LeftColumn {
  display: flex;
  flex-direction: column;
  flex: 2 1 200px;
  border-top: 1px solid var(--color-border);
}

.RightColumn {
  display: flex;
  flex-direction: column;
  flex: 1 1 100px;
  max-width: 300px;
  overflow-x: hidden;
  border-left: 1px solid var(--color-border);
  border-top: 1px solid var(--color-border);
}

.Content {
  position: relative;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.Column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
}

.Paragraph {
  text-align: center;
}

.Row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.Header {
  font-size: var(--font-size-sans-large);
  margin-bottom: 0.5rem;
}

.Toolbar {
  height: 2.25rem;
  padding: 0 0.25rem;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
}

.VRule {
  height: 20px;
  width: 1px;
  border-left: 1px solid var(--color-border);
  padding-left: 0.25rem;
  margin-left: 0.25rem;
}

.Spacer {
  flex: 1;
}

.StopRecordingButton {
  font-size: var(--font-size-sans-large);
  padding: 0.5rem;
}

.ContentFallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sans-large);
  color: var(--color-dim);
}

.SnapshotSelectorFallback {
  height: 100%;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sans-large);
  color: var(--color-dim);
}

.Link {
  color: var(--color-button);
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Profiler: 'Profiler___20Ry4',
          LeftColumn: 'LeftColumn___3I7-I',
          RightColumn: 'RightColumn___3smXD',
          Content: 'Content___1LjDy',
          Column: 'Column___3WWtw',
          Paragraph: 'Paragraph___1HLty',
          Row: 'Row___1RpSu',
          Header: 'Header___QyJw2',
          Toolbar: 'Toolbar___30kHu',
          VRule: 'VRule___2y9G3',
          Spacer: 'Spacer___1sezP',
          StopRecordingButton: 'StopRecordingButton___1-ElU',
          ContentFallback: 'ContentFallback___2Ata2',
          SnapshotSelectorFallback: 'SnapshotSelectorFallback___3fsFv',
          Link: 'Link___mZ2LE',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/ProfilingImportExportButtons.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.VRule___2XiHw {
  height: 20px;
  width: 1px;
  border-left: 1px solid var(--color-border);
  padding-left: 0.25rem;
  margin-left: 0.25rem;
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
 */
.Input___2GKA7 {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}

.ErrorMessage___3yR0b {
  margin: 0.5rem 0;
  color: var(--color-dim);
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Profiler/ProfilingImportExportButtons.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,aAAa;EACb,WAAW;EACX,2CAA2C;EAC3C,sBAAsB;EACtB,qBAAqB;CACtB;;AAED;;GAEG;AACH;EACE,8BAA8B;EAC9B,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,+BAA+B;CAChC;;AAED;EACE,iBAAiB;EACjB,wBAAwB;EACxB,0CAA0C;EAC1C,6CAA6C;CAC9C',
            file: 'ProfilingImportExportButtons.css',
            sourcesContent: [
              `.VRule {
  height: 20px;
  width: 1px;
  border-left: 1px solid var(--color-border);
  padding-left: 0.25rem;
  margin-left: 0.25rem;
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
 */
.Input {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}

.ErrorMessage {
  margin: 0.5rem 0;
  color: var(--color-dim);
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          VRule: 'VRule___2XiHw',
          Input: 'Input___2GKA7',
          ErrorMessage: 'ErrorMessage___3yR0b',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/RecordToggle.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.ActiveRecordToggle___1Cpcb {
  color: var(--color-record-active);
}
.ActiveRecordToggle___1Cpcb:hover {
  color: var(--color-record-active);
}
.ActiveRecordToggle___1Cpcb:focus {
  color: var(--color-record-active);
}
.ActiveRecordToggle___1Cpcb:active {
  color: var(--color-record-hover);
}

.InactiveRecordToggle___2CUtF {
  color: var(--color-record-inactive);
}
.InactiveRecordToggle___2CUtF:hover {
  color: var(--color-record-hover);
}
.InactiveRecordToggle___2CUtF:focus {
  color: var(--color-record-inactive);
}
.InactiveRecordToggle___2CUtF:active {
  color: var(--color-record-hover);
}

.DisabledRecordToggle___gcsbF {
  color: var(--color-button-disabled);
}
.DisabledRecordToggle___gcsbF:hover {
  color: var(--color-button-disabled);
}
.DisabledRecordToggle___gcsbF:focus {
  color: var(--color-button-disabled);
}
.DisabledRecordToggle___gcsbF:active {
  color: var(--color-button-disabled);
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Profiler/RecordToggle.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,kCAAkC;CACnC;AACD;EACE,kCAAkC;CACnC;AACD;EACE,kCAAkC;CACnC;AACD;EACE,iCAAiC;CAClC;;AAED;EACE,oCAAoC;CACrC;AACD;EACE,iCAAiC;CAClC;AACD;EACE,oCAAoC;CACrC;AACD;EACE,iCAAiC;CAClC;;AAED;EACE,oCAAoC;CACrC;AACD;EACE,oCAAoC;CACrC;AACD;EACE,oCAAoC;CACrC;AACD;EACE,oCAAoC;CACrC',
            file: 'RecordToggle.css',
            sourcesContent: [
              `.ActiveRecordToggle {
  color: var(--color-record-active);
}
.ActiveRecordToggle:hover {
  color: var(--color-record-active);
}
.ActiveRecordToggle:focus {
  color: var(--color-record-active);
}
.ActiveRecordToggle:active {
  color: var(--color-record-hover);
}

.InactiveRecordToggle {
  color: var(--color-record-inactive);
}
.InactiveRecordToggle:hover {
  color: var(--color-record-hover);
}
.InactiveRecordToggle:focus {
  color: var(--color-record-inactive);
}
.InactiveRecordToggle:active {
  color: var(--color-record-hover);
}

.DisabledRecordToggle {
  color: var(--color-button-disabled);
}
.DisabledRecordToggle:hover {
  color: var(--color-button-disabled);
}
.DisabledRecordToggle:focus {
  color: var(--color-button-disabled);
}
.DisabledRecordToggle:active {
  color: var(--color-button-disabled);
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          ActiveRecordToggle: 'ActiveRecordToggle___1Cpcb',
          InactiveRecordToggle: 'InactiveRecordToggle___2CUtF',
          DisabledRecordToggle: 'DisabledRecordToggle___gcsbF',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/RootSelector.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Spacer___1c3sH {
  flex: 1;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Profiler/RootSelector.css',
            ],
            names: [],
            mappings: 'AAAA;EACE,QAAQ;CACT',
            file: 'RootSelector.css',
            sourcesContent: [
              `.Spacer {
  flex: 1;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = { Spacer: 'Spacer___1c3sH' });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/SidebarCommitInfo.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Toolbar___CuJgF {
  height: 2.25rem;
  padding: 0 0.5rem;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
}

.Content___2tGS0 {
  padding: 0.5rem;
  user-select: none;
  overflow: auto;
}

.List___2AC9R {
  list-style: none;
  margin: 0;
  padding: 0;
}

.ListItem___2wzT0 {
  margin: 0 0 0.5rem;
}

.NoInteractions___2-rNG {
  color: var(--color-dim);
}

.Interactions___2JjM3 {
  margin: 0 0 0.5rem;
}
.Interaction___2_WfJ {
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.25rem 0.5rem;
  color: var(--color-text);
}
.Interaction___2_WfJ:focus,
.Interaction___2_WfJ:hover {
  outline: none;
  background-color: var(--color-background-hover);
}

.Label___3KINM {
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
}

.Value___3wrFP {
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
}

.NothingSelected___2Sj9L {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--color-dim);
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Profiler/SidebarCommitInfo.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,oBAAoB;EACpB,6CAA6C;CAC9C;;AAED;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;CAChB;;AAED;EACE,iBAAiB;EACjB,UAAU;EACV,WAAW;CACZ;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,wBAAwB;CACzB;;AAED;EACE,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,wBAAwB;EACxB,yBAAyB;CAC1B;AACD;;EAEE,cAAc;EACd,gDAAgD;CACjD;;AAED;EACE,iBAAiB;EACjB,wBAAwB;EACxB,kBAAkB;CACnB;;AAED;EACE,0CAA0C;EAC1C,6CAA6C;CAC9C;;AAED;EACE,cAAc;EACd,oBAAoB;EACpB,wBAAwB;EACxB,aAAa;EACb,wBAAwB;CACzB',
            file: 'SidebarCommitInfo.css',
            sourcesContent: [
              `.Toolbar {
  height: 2.25rem;
  padding: 0 0.5rem;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
}

.Content {
  padding: 0.5rem;
  user-select: none;
  overflow: auto;
}

.List {
  list-style: none;
  margin: 0;
  padding: 0;
}

.ListItem {
  margin: 0 0 0.5rem;
}

.NoInteractions {
  color: var(--color-dim);
}

.Interactions {
  margin: 0 0 0.5rem;
}
.Interaction {
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.25rem 0.5rem;
  color: var(--color-text);
}
.Interaction:focus,
.Interaction:hover {
  outline: none;
  background-color: var(--color-background-hover);
}

.Label {
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
}

.Value {
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
}

.NothingSelected {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--color-dim);
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Toolbar: 'Toolbar___CuJgF',
          Content: 'Content___2tGS0',
          List: 'List___2AC9R',
          ListItem: 'ListItem___2wzT0',
          NoInteractions: 'NoInteractions___2-rNG',
          Interactions: 'Interactions___2JjM3',
          Interaction: 'Interaction___2_WfJ',
          Label: 'Label___3KINM',
          Value: 'Value___3wrFP',
          NothingSelected: 'NothingSelected___2Sj9L',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/SidebarInteractions.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Toolbar___14c8s {
  height: 2.25rem;
  padding: 0 0.5rem;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.Content___2Br59 {
  padding: 0.5rem;
  user-select: none;
  border-top: 1px solid var(--color-border);
  overflow: auto;
}

.Name___y3sqj {
  font-size: var(--font-size-sans-large);
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.NothingSelected___LXwMm {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--color-dim);
}

.Commits___3dPiw {
  font-weight: bold;
}

.List___1d-dx {
  list-style: none;
  margin: 0;
  padding: 0;
}

.ListItem___6d_7z {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.25rem 0.5rem;
}
.ListItem___6d_7z:hover {
  background-color: var(--color-background-hover);
}

.CommitBox___5r9ed {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Profiler/SidebarInteractions.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,oBAAoB;CACrB;;AAED;EACE,gBAAgB;EAChB,kBAAkB;EAClB,0CAA0C;EAC1C,eAAe;CAChB;;AAED;EACE,uCAAuC;EACvC,oBAAoB;EACpB,mBAAmB;EACnB,wBAAwB;CACzB;;AAED;EACE,cAAc;EACd,oBAAoB;EACpB,wBAAwB;EACxB,aAAa;EACb,wBAAwB;CACzB;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,iBAAiB;EACjB,UAAU;EACV,WAAW;CACZ;;AAED;EACE,cAAc;EACd,oBAAoB;EACpB,oBAAoB;EACpB,wBAAwB;CACzB;AACD;EACE,gDAAgD;CACjD;;AAED;EACE,YAAY;EACZ,aAAa;EACb,qBAAqB;CACtB',
            file: 'SidebarInteractions.css',
            sourcesContent: [
              `.Toolbar {
  height: 2.25rem;
  padding: 0 0.5rem;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.Content {
  padding: 0.5rem;
  user-select: none;
  border-top: 1px solid var(--color-border);
  overflow: auto;
}

.Name {
  font-size: var(--font-size-sans-large);
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.NothingSelected {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--color-dim);
}

.Commits {
  font-weight: bold;
}

.List {
  list-style: none;
  margin: 0;
  padding: 0;
}

.ListItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.25rem 0.5rem;
}
.ListItem:hover {
  background-color: var(--color-background-hover);
}

.CommitBox {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Toolbar: 'Toolbar___14c8s',
          Content: 'Content___2Br59',
          Name: 'Name___y3sqj',
          NothingSelected: 'NothingSelected___LXwMm',
          Commits: 'Commits___3dPiw',
          List: 'List___1d-dx',
          ListItem: 'ListItem___6d_7z',
          CommitBox: 'CommitBox___5r9ed',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/SidebarSelectedFiberInfo.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Toolbar___2uBS2 {
  height: 2.25rem;
  padding: 0 0.5rem;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
}

.Content___1WAA9 {
  padding: 0.5rem;
  user-select: none;
  overflow-y: auto;
}

.WhatChanged___3T3Sx {
  margin-bottom: 1rem;
}

.Component___1oc9o {
  flex: 1;
  color: var(--color-component-name);
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.Label___buTyu {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.CurrentCommit___2ZAl5,
.Commit___2PAr5 {
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.25rem 0.5rem;
  color: var(--color-text);
}
.Commit___2PAr5:focus,
.Commit___2PAr5:hover {
  outline: none;
  background-color: var(--color-background-hover);
}

.CurrentCommit___2ZAl5 {
  background-color: var(--color-background-selected);
  color: var(--color-text-selected);
}
.CurrentCommit___2ZAl5:focus {
  outline: none;
}

.WhatChangedItem___2pe1a {
  margin-top: 0.25rem;
}

.WhatChangedKey___2XHw- {
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-small);
  line-height: 1;
}
.WhatChangedKey___2XHw-:first-of-type::before {
  content: ' (';
}
.WhatChangedKey___2XHw-::after {
  content: ', ';
}
.WhatChangedKey___2XHw-:last-of-type::after {
  content: ')';
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Profiler/SidebarSelectedFiberInfo.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,oBAAoB;EACpB,6CAA6C;CAC9C;;AAED;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;CAClB;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,QAAQ;EACR,mCAAmC;EACnC,0CAA0C;EAC1C,6CAA6C;EAC7C,oBAAoB;EACpB,mBAAmB;EACnB,wBAAwB;CACzB;;AAED;EACE,kBAAkB;EAClB,sBAAsB;CACvB;;AAED;;EAEE,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,wBAAwB;EACxB,yBAAyB;CAC1B;AACD;;EAEE,cAAc;EACd,gDAAgD;CACjD;;AAED;EACE,mDAAmD;EACnD,kCAAkC;CACnC;AACD;EACE,cAAc;CACf;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,0CAA0C;EAC1C,4CAA4C;EAC5C,eAAe;CAChB;AACD;EACE,cAAc;CACf;AACD;EACE,cAAc;CACf;AACD;EACE,aAAa;CACd',
            file: 'SidebarSelectedFiberInfo.css',
            sourcesContent: [
              `.Toolbar {
  height: 2.25rem;
  padding: 0 0.5rem;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
}

.Content {
  padding: 0.5rem;
  user-select: none;
  overflow-y: auto;
}

.WhatChanged {
  margin-bottom: 1rem;
}

.Component {
  flex: 1;
  color: var(--color-component-name);
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-normal);
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.Label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.CurrentCommit,
.Commit {
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.25rem 0.5rem;
  color: var(--color-text);
}
.Commit:focus,
.Commit:hover {
  outline: none;
  background-color: var(--color-background-hover);
}

.CurrentCommit {
  background-color: var(--color-background-selected);
  color: var(--color-text-selected);
}
.CurrentCommit:focus {
  outline: none;
}

.WhatChangedItem {
  margin-top: 0.25rem;
}

.WhatChangedKey {
  font-family: var(--font-family-monospace);
  font-size: var(--font-size-monospace-small);
  line-height: 1;
}
.WhatChangedKey:first-of-type::before {
  content: ' (';
}
.WhatChangedKey::after {
  content: ', ';
}
.WhatChangedKey:last-of-type::after {
  content: ')';
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Toolbar: 'Toolbar___2uBS2',
          Content: 'Content___1WAA9',
          WhatChanged: 'WhatChanged___3T3Sx',
          Component: 'Component___1oc9o',
          Label: 'Label___buTyu',
          CurrentCommit: 'CurrentCommit___2ZAl5',
          Commit: 'Commit___2PAr5',
          WhatChangedItem: 'WhatChangedItem___2pe1a',
          WhatChangedKey: 'WhatChangedKey___2XHw-',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/SnapshotCommitList.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.List___1_Mwa {
  /**
   * The decision to suppress the default (horizontal) scroll bars is intentional.
   * The snapshot selector is small enough that the scrollbar renders it essentially useless.
   * There are two alternative navigation mechanisms (arrow keys and arrow buttons).
   * If necessary, we could also expand the click-and-drag mechanism to scroll.
   */
  overflow-x: hidden !important;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Profiler/SnapshotCommitList.css',
            ],
            names: [],
            mappings: 'AAAA;EACE;;;;;KAKG;EACH,8BAA8B;CAC/B',
            file: 'SnapshotCommitList.css',
            sourcesContent: [
              `.List {
  /**
   * The decision to suppress the default (horizontal) scroll bars is intentional.
   * The snapshot selector is small enough that the scrollbar renders it essentially useless.
   * There are two alternative navigation mechanisms (arrow keys and arrow buttons).
   * If necessary, we could also expand the click-and-drag mechanism to scroll.
   */
  overflow-x: hidden !important;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = { List: 'List___1_Mwa' });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/SnapshotCommitListItem.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Outer___2YMUU {
  user-select: none;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  padding-top: 4px;
  padding-bottom: 1px;
  display: flex;
  align-items: flex-end;
}

.Inner___TFCLU {
  width: 100%;
  min-height: 5px;
  background-color: var(--color-commit-did-not-render-fill);
  color: var(--color-commit-did-not-render-fill-text);
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Profiler/SnapshotCommitListItem.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,qCAAqC;EACrC,iBAAiB;EACjB,oBAAoB;EACpB,cAAc;EACd,sBAAsB;CACvB;;AAED;EACE,YAAY;EACZ,gBAAgB;EAChB,0DAA0D;EAC1D,oDAAoD;CACrD',
            file: 'SnapshotCommitListItem.css',
            sourcesContent: [
              `.Outer {
  user-select: none;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  padding-top: 4px;
  padding-bottom: 1px;
  display: flex;
  align-items: flex-end;
}

.Inner {
  width: 100%;
  min-height: 5px;
  background-color: var(--color-commit-did-not-render-fill);
  color: var(--color-commit-did-not-render-fill-text);
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = { Outer: 'Outer___2YMUU', Inner: 'Inner___TFCLU' });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/SnapshotSelector.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Button___7tgtJ {
  flex: 0 0 auto;
  margin-left: 0.25rem;
}

.Commits___2KF5W {
  height: 100%;
  min-width: 30px;
  margin-left: 0.25rem;
  overflow: hidden;
}
.Commits___2KF5W:focus {
  outline: none;
  background-color: var(--color-button-background-focus);
}

.IndexLabel___36CS7 {
  flex: 0 0 auto;
  white-space: nowrap;
  font-family: var(--font-family-monospace);
  margin-left: 0.25rem;
}

.NoCommits___3GzV1 {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-dim);
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Profiler/SnapshotSelector.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,eAAe;EACf,qBAAqB;CACtB;;AAED;EACE,aAAa;EACb,gBAAgB;EAChB,qBAAqB;EACrB,iBAAiB;CAClB;AACD;EACE,cAAc;EACd,uDAAuD;CACxD;;AAED;EACE,eAAe;EACf,oBAAoB;EACpB,0CAA0C;EAC1C,qBAAqB;CACtB;;AAED;EACE,aAAa;EACb,cAAc;EACd,oBAAoB;EACpB,wBAAwB;EACxB,wBAAwB;CACzB',
            file: 'SnapshotSelector.css',
            sourcesContent: [
              `.Button {
  flex: 0 0 auto;
  margin-left: 0.25rem;
}

.Commits {
  height: 100%;
  min-width: 30px;
  margin-left: 0.25rem;
  overflow: hidden;
}
.Commits:focus {
  outline: none;
  background-color: var(--color-button-background-focus);
}

.IndexLabel {
  flex: 0 0 auto;
  white-space: nowrap;
  font-family: var(--font-family-monospace);
  margin-left: 0.25rem;
}

.NoCommits {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-dim);
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Button: 'Button___7tgtJ',
          Commits: 'Commits___2KF5W',
          IndexLabel: 'IndexLabel___36CS7',
          NoCommits: 'NoCommits___3GzV1',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/ReactLogo.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.ReactLogo___O8zf5 {
  width: 1.75rem;
  height: 1.75rem;
  margin: 0 0.75rem 0 0.25rem;
  color: var(--color-button-active);
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/ReactLogo.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,eAAe;EACf,gBAAgB;EAChB,4BAA4B;EAC5B,kCAAkC;CACnC',
            file: 'ReactLogo.css',
            sourcesContent: [
              `.ReactLogo {
  width: 1.75rem;
  height: 1.75rem;
  margin: 0 0.75rem 0 0.25rem;
  color: var(--color-button-active);
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = { ReactLogo: 'ReactLogo___O8zf5' });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Settings/SettingsModal.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Background___3ncIs {
  position: absolute;
  z-index: 3;
  width: 100%;
  top: 0;
  bottom: 0;
  background-color: var(--color-modal-background);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: var(--font-size-sans-normal);
  padding: 1rem;
}

.Modal___rU10h {
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  max-height: 100%;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 4px var(--color-shadow);
  border-radius: 0.25rem;
  overflow: auto;
  width: 400px;
  max-width: 100%;
}

.Spacer___3_C0y {
  flex: 1;
}

.Tabs___3mQky {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid var(--color-border);
  padding-right: 0.25rem;
  flex: 0 0 auto;
}

.Content___2YU9A {
  padding: 0.5rem;
  flex: 0 1 auto;
  overflow: auto;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Settings/SettingsModal.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,OAAO;EACP,UAAU;EACV,gDAAgD;EAChD,cAAc;EACd,wBAAwB;EACxB,wBAAwB;EACxB,wCAAwC;EACxC,cAAc;CACf;;AAED;EACE,cAAc;EACd,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,0CAA0C;EAC1C,sCAAsC;EACtC,0CAA0C;EAC1C,uBAAuB;EACvB,eAAe;EACf,aAAa;EACb,gBAAgB;CACjB;;AAED;EACE,QAAQ;CACT;;AAED;EACE,cAAc;EACd,oBAAoB;EACpB,6CAA6C;EAC7C,uBAAuB;EACvB,eAAe;CAChB;;AAED;EACE,gBAAgB;EAChB,eAAe;EACf,eAAe;CAChB',
            file: 'SettingsModal.css',
            sourcesContent: [
              `.Background {
  position: absolute;
  z-index: 3;
  width: 100%;
  top: 0;
  bottom: 0;
  background-color: var(--color-modal-background);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: var(--font-size-sans-normal);
  padding: 1rem;
}

.Modal {
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  max-height: 100%;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 4px var(--color-shadow);
  border-radius: 0.25rem;
  overflow: auto;
  width: 400px;
  max-width: 100%;
}

.Spacer {
  flex: 1;
}

.Tabs {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid var(--color-border);
  padding-right: 0.25rem;
  flex: 0 0 auto;
}

.Content {
  padding: 0.5rem;
  flex: 0 1 auto;
  overflow: auto;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Background: 'Background___3ncIs',
          Modal: 'Modal___rU10h',
          Spacer: 'Spacer___3_C0y',
          Tabs: 'Tabs___3mQky',
          Content: 'Content___2YU9A',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Settings/SettingsShared.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Settings___29B2k {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sans-normal);
}

.Setting___1NJgU {
  margin-bottom: 0.5rem;
}
.Setting___1NJgU:last-of-type {
  margin-bottom: 0;
}

.OptionGroup___2ZgHP {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
  margin: 0 1rem 0.5rem 0;
}
.OptionGroup___2ZgHP:last-of-type {
  margin-right: 0;
}

.RadioLabel___1oyOB {
  display: inline;
  margin-right: 0.5rem;
}

.Select___1otXV {
}

.CheckboxOption___2XWVZ {
  display: block;
  padding: 0 0 0.5rem;
}

.HRule___1h4ad {
  height: 1px;
  background-color: var(--color-border);
  width: 100%;
  border: none;
  margin: 0.5rem 0;
}

.Header___NGIlt {
  font-size: var(--font-size-sans-large);
  margin-top: 0.5rem;
}

.ButtonIcon___3ZAjp {
  margin-right: 0.25rem;
}

.NoFiltersCell___1WYR2 {
  padding: 0.25rem 0;
  color: var(--color-dim);
}

.Table___2srES {
  min-width: 20rem;
  margin-top: 0.5rem;
  border-spacing: 0;
}

.TableRow___3kYuW {
  padding-bottom: 0.5rem;
}

.TableCell___1yj52 {
  padding: 0;
  padding-right: 0.5rem;
}
.TableCell___1yj52:last-of-type {
  text-align: right;
  padding-right: 0;
}

.Input___I9AdA {
  border: 1px solid var(--color-border);
  border-radius: 0.125rem;
  padding: 0.125rem;
}

.InvalidRegExp___35lmE,
.InvalidRegExp___35lmE:active,
.InvalidRegExp___35lmE:focus,
.InvalidRegExp___35lmE:hover {
  color: var(--color-value-invalid);
}

.ToggleOffInvalid___2Rg2K,
.ToggleOnInvalid___1Kamt,
.ToggleOff___3cr6E,
.ToggleOn___3KAVB {
  border-radius: 0.75rem;
  width: 1rem;
  height: 0.625rem;
  display: flex;
  align-items: center;
  padding: 0.125rem;
}
.ToggleOffInvalid___2Rg2K {
  background-color: var(--color-toggle-background-invalid);
  justify-content: flex-start;
}
.ToggleOnInvalid___1Kamt {
  background-color: var(--color-toggle-background-invalid);
  justify-content: flex-end;
}
.ToggleOff___3cr6E {
  background-color: var(--color-toggle-background-off);
  justify-content: flex-start;
}
.ToggleOn___3KAVB {
  background-color: var(--color-toggle-background-on);
  justify-content: flex-end;
}

.ToggleInsideOff___1pXcm,
.ToggleInsideOn___3kEsU {
  border-radius: 0.375rem;
  width: 0.375rem;
  height: 0.375rem;
  background-color: var(--color-toggle-text);
}

.ReleaseNotes___q8NY1 {
  width: 100%;
  background-color: var(--color-background-hover);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.ReleaseNotesLink___2gjE8 {
  color: var(--color-button-active);
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Settings/SettingsShared.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,cAAc;EACd,uBAAuB;EACvB,wBAAwB;EACxB,4BAA4B;EAC5B,qCAAqC;EACrC,wCAAwC;CACzC;;AAED;EACE,sBAAsB;CACvB;AACD;EACE,iBAAiB;CAClB;;AAED;EACE,qBAAqB;EACrB,oBAAoB;EACpB,oBAAoB;EACpB,kBAAkB;EAClB,wBAAwB;CACzB;AACD;EACE,gBAAgB;CACjB;;AAED;EACE,gBAAgB;EAChB,qBAAqB;CACtB;;AAED;CACC;;AAED;EACE,eAAe;EACf,oBAAoB;CACrB;;AAED;EACE,YAAY;EACZ,sCAAsC;EACtC,YAAY;EACZ,aAAa;EACb,iBAAiB;CAClB;;AAED;EACE,uCAAuC;EACvC,mBAAmB;CACpB;;AAED;EACE,sBAAsB;CACvB;;AAED;EACE,mBAAmB;EACnB,wBAAwB;CACzB;;AAED;EACE,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;CACnB;;AAED;EACE,uBAAuB;CACxB;;AAED;EACE,WAAW;EACX,sBAAsB;CACvB;AACD;EACE,kBAAkB;EAClB,iBAAiB;CAClB;;AAED;EACE,sCAAsC;EACtC,wBAAwB;EACxB,kBAAkB;CACnB;;AAED;;;;EAIE,kCAAkC;CACnC;;AAED;;;;EAIE,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;EACjB,cAAc;EACd,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,yDAAyD;EACzD,4BAA4B;CAC7B;AACD;EACE,yDAAyD;EACzD,0BAA0B;CAC3B;AACD;EACE,qDAAqD;EACrD,4BAA4B;CAC7B;AACD;EACE,oDAAoD;EACpD,0BAA0B;CAC3B;;AAED;;EAEE,wBAAwB;EACxB,gBAAgB;EAChB,iBAAiB;EACjB,2CAA2C;CAC5C;;AAED;EACE,YAAY;EACZ,gDAAgD;EAChD,wBAAwB;EACxB,uBAAuB;CACxB;;AAED;EACE,kCAAkC;CACnC',
            file: 'SettingsShared.css',
            sourcesContent: [
              `.Settings {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sans-normal);
}

.Setting {
  margin-bottom: 0.5rem;
}
.Setting:last-of-type {
  margin-bottom: 0;
}

.OptionGroup {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
  margin: 0 1rem 0.5rem 0;
}
.OptionGroup:last-of-type {
  margin-right: 0;
}

.RadioLabel {
  display: inline;
  margin-right: 0.5rem;
}

.Select {
}

.CheckboxOption {
  display: block;
  padding: 0 0 0.5rem;
}

.HRule {
  height: 1px;
  background-color: var(--color-border);
  width: 100%;
  border: none;
  margin: 0.5rem 0;
}

.Header {
  font-size: var(--font-size-sans-large);
  margin-top: 0.5rem;
}

.ButtonIcon {
  margin-right: 0.25rem;
}

.NoFiltersCell {
  padding: 0.25rem 0;
  color: var(--color-dim);
}

.Table {
  min-width: 20rem;
  margin-top: 0.5rem;
  border-spacing: 0;
}

.TableRow {
  padding-bottom: 0.5rem;
}

.TableCell {
  padding: 0;
  padding-right: 0.5rem;
}
.TableCell:last-of-type {
  text-align: right;
  padding-right: 0;
}

.Input {
  border: 1px solid var(--color-border);
  border-radius: 0.125rem;
  padding: 0.125rem;
}

.InvalidRegExp,
.InvalidRegExp:active,
.InvalidRegExp:focus,
.InvalidRegExp:hover {
  color: var(--color-value-invalid);
}

.ToggleOffInvalid,
.ToggleOnInvalid,
.ToggleOff,
.ToggleOn {
  border-radius: 0.75rem;
  width: 1rem;
  height: 0.625rem;
  display: flex;
  align-items: center;
  padding: 0.125rem;
}
.ToggleOffInvalid {
  background-color: var(--color-toggle-background-invalid);
  justify-content: flex-start;
}
.ToggleOnInvalid {
  background-color: var(--color-toggle-background-invalid);
  justify-content: flex-end;
}
.ToggleOff {
  background-color: var(--color-toggle-background-off);
  justify-content: flex-start;
}
.ToggleOn {
  background-color: var(--color-toggle-background-on);
  justify-content: flex-end;
}

.ToggleInsideOff,
.ToggleInsideOn {
  border-radius: 0.375rem;
  width: 0.375rem;
  height: 0.375rem;
  background-color: var(--color-toggle-text);
}

.ReleaseNotes {
  width: 100%;
  background-color: var(--color-background-hover);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.ReleaseNotesLink {
  color: var(--color-button-active);
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Settings: 'Settings___29B2k',
          Setting: 'Setting___1NJgU',
          OptionGroup: 'OptionGroup___2ZgHP',
          RadioLabel: 'RadioLabel___1oyOB',
          Select: 'Select___1otXV',
          CheckboxOption: 'CheckboxOption___2XWVZ',
          HRule: 'HRule___1h4ad',
          Header: 'Header___NGIlt',
          ButtonIcon: 'ButtonIcon___3ZAjp',
          NoFiltersCell: 'NoFiltersCell___1WYR2',
          Table: 'Table___2srES',
          TableRow: 'TableRow___3kYuW',
          TableCell: 'TableCell___1yj52',
          Input: 'Input___I9AdA',
          InvalidRegExp: 'InvalidRegExp___35lmE',
          ToggleOffInvalid: 'ToggleOffInvalid___2Rg2K',
          ToggleOnInvalid: 'ToggleOnInvalid___1Kamt',
          ToggleOff: 'ToggleOff___3cr6E',
          ToggleOn: 'ToggleOn___3KAVB',
          ToggleInsideOff: 'ToggleInsideOff___1pXcm',
          ToggleInsideOn: 'ToggleInsideOn___3kEsU',
          ReleaseNotes: 'ReleaseNotes___q8NY1',
          ReleaseNotesLink: 'ReleaseNotesLink___2gjE8',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/TabBar.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Tab___20JoC,
.TabCurrent___b4c3L,
.TabDisabled___l1-ZF {
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  user-select: none;
  color: var(--color-text);

  /* Electron drag area */
  -webkit-app-region: no-drag;
}
.Tab___20JoC:hover,
.TabCurrent___b4c3L:hover {
  background-color: var(--color-background-hover);
}
.Tab___20JoC:focus-within,
.TabCurrent___b4c3L:focus-within {
  background-color: var(--color-background-hover);
}

.TabCurrent___b4c3L {
  border-bottom: 3px solid var(--color-tab-selected-border);
}

.TabDisabled___l1-ZF {
  color: var(--color-dim);
  cursor: default;
}

.TabSizeNavigation___2GG1g {
  font-size: var(--font-size-sans-large);
  padding: 0.5rem 1rem;
}
.TabSizeProfiler___2wFBf {
  font-size: var(--font-size-sans-normal);
  padding: 0.25rem 0.5rem;
}
.TabSizeSettings___3V4f9 {
  font-size: var(--font-size-sans-normal);
  padding: 0.25rem 0.5rem;
}

.Input___2unCl {
  width: 0;
  margin: 0;
  opacity: 0;
}

.IconSizeNavigation___mZIpl,
.IconSizeProfiler___1jYXs,
.IconSizeSettings___1HNRk {
  margin-right: 0.5rem;
  color: var(--color-button-active);
}

.IconDisabled___17Sd2 {
  color: var(--color-dim);
}

.IconSizeNavigation___mZIpl {
  width: 1.5rem;
  height: 1.5rem;
}
.IconSizeProfiler___1jYXs {
  width: 1rem;
  height: 1rem;
}
.IconSizeSettings___1HNRk {
  width: 1rem;
  height: 1rem;
}

.TabLabelNavigation___2q3j3,
.TabLabelProfiler___2QHeh,
.TabLabelSettings___1pDKr {
}

@media screen and (max-width: 525px) {
  .IconSizeNavigation___mZIpl {
    margin-right: 0;
  }

  .TabLabelNavigation___2q3j3 {
    display: none;
  }
}

@media screen and (max-width: 900px) {
  .TabLabelProfiler___2QHeh {
    display: none;
  }

  .IconSizeProfiler___1jYXs {
    margin-right: 0;
  }
}

@media screen and (max-width: 400px) {
  .TabLabelSettings___1pDKr {
    display: none;
  }

  .IconSizeSettings___1HNRk {
    margin-right: 0;
  }
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/TabBar.css',
            ],
            names: [],
            mappings:
              'AAAA;;;EAGE,aAAa;EACb,cAAc;EACd,oBAAoB;EACpB,gBAAgB;EAChB,kCAAkC;EAClC,qCAAqC;EACrC,kBAAkB;EAClB,yBAAyB;;EAEzB,wBAAwB;EACxB,4BAA4B;CAC7B;AACD;;EAEE,gDAAgD;CACjD;AACD;;EAEE,gDAAgD;CACjD;;AAED;EACE,0DAA0D;CAC3D;;AAED;EACE,wBAAwB;EACxB,gBAAgB;CACjB;;AAED;EACE,uCAAuC;EACvC,qBAAqB;CACtB;AACD;EACE,wCAAwC;EACxC,wBAAwB;CACzB;AACD;EACE,wCAAwC;EACxC,wBAAwB;CACzB;;AAED;EACE,SAAS;EACT,UAAU;EACV,WAAW;CACZ;;AAED;;;EAGE,qBAAqB;EACrB,kCAAkC;CACnC;;AAED;EACE,wBAAwB;CACzB;;AAED;EACE,cAAc;EACd,eAAe;CAChB;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,YAAY;EACZ,aAAa;CACd;;AAED;;;CAGC;;AAED;EACE;IACE,gBAAgB;GACjB;;EAED;IACE,cAAc;GACf;CACF;;AAED;EACE;IACE,cAAc;GACf;;EAED;IACE,gBAAgB;GACjB;CACF;;AAED;EACE;IACE,cAAc;GACf;;EAED;IACE,gBAAgB;GACjB;CACF',
            file: 'TabBar.css',
            sourcesContent: [
              `.Tab,
.TabCurrent,
.TabDisabled {
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  user-select: none;
  color: var(--color-text);

  /* Electron drag area */
  -webkit-app-region: no-drag;
}
.Tab:hover,
.TabCurrent:hover {
  background-color: var(--color-background-hover);
}
.Tab:focus-within,
.TabCurrent:focus-within {
  background-color: var(--color-background-hover);
}

.TabCurrent {
  border-bottom: 3px solid var(--color-tab-selected-border);
}

.TabDisabled {
  color: var(--color-dim);
  cursor: default;
}

.TabSizeNavigation {
  font-size: var(--font-size-sans-large);
  padding: 0.5rem 1rem;
}
.TabSizeProfiler {
  font-size: var(--font-size-sans-normal);
  padding: 0.25rem 0.5rem;
}
.TabSizeSettings {
  font-size: var(--font-size-sans-normal);
  padding: 0.25rem 0.5rem;
}

.Input {
  width: 0;
  margin: 0;
  opacity: 0;
}

.IconSizeNavigation,
.IconSizeProfiler,
.IconSizeSettings {
  margin-right: 0.5rem;
  color: var(--color-button-active);
}

.IconDisabled {
  color: var(--color-dim);
}

.IconSizeNavigation {
  width: 1.5rem;
  height: 1.5rem;
}
.IconSizeProfiler {
  width: 1rem;
  height: 1rem;
}
.IconSizeSettings {
  width: 1rem;
  height: 1rem;
}

.TabLabelNavigation,
.TabLabelProfiler,
.TabLabelSettings {
}

@media screen and (max-width: 525px) {
  .IconSizeNavigation {
    margin-right: 0;
  }

  .TabLabelNavigation {
    display: none;
  }
}

@media screen and (max-width: 900px) {
  .TabLabelProfiler {
    display: none;
  }

  .IconSizeProfiler {
    margin-right: 0;
  }
}

@media screen and (max-width: 400px) {
  .TabLabelSettings {
    display: none;
  }

  .IconSizeSettings {
    margin-right: 0;
  }
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Tab: 'Tab___20JoC',
          TabCurrent: 'TabCurrent___b4c3L',
          TabDisabled: 'TabDisabled___l1-ZF',
          TabSizeNavigation: 'TabSizeNavigation___2GG1g',
          TabSizeProfiler: 'TabSizeProfiler___2wFBf',
          TabSizeSettings: 'TabSizeSettings___3V4f9',
          Input: 'Input___2unCl',
          IconSizeNavigation: 'IconSizeNavigation___mZIpl',
          IconSizeProfiler: 'IconSizeProfiler___1jYXs',
          IconSizeSettings: 'IconSizeSettings___1HNRk',
          IconDisabled: 'IconDisabled___17Sd2',
          TabLabelNavigation: 'TabLabelNavigation___2q3j3',
          TabLabelProfiler: 'TabLabelProfiler___2QHeh',
          TabLabelSettings: 'TabLabelSettings___1pDKr',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Toggle.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.ToggleDisabled___iQeZ3,
.ToggleOn___3XJTo,
.ToggleOff___142SC {
  background: var(--color-button-background);
  border: none;
  border-radius: 0.25rem;
  padding: 0;
  flex: 0 0 auto;
}

.ToggleContent___1C-vg {
  display: inline-flex;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.25rem;
}

.ToggleOff___142SC {
  border: none;
  background: var(--color-button-background);
  color: var(--color-button);
}
.ToggleOff___142SC:hover {
  color: var(--color-button-hover);
}

.ToggleOn___3XJTo,
.ToggleOn___3XJTo:active {
  color: var(--color-button-active);
  outline: none;
}

.ToggleOn___3XJTo:focus,
.ToggleOff___142SC:focus,
.ToggleContent___1C-vg:focus {
  outline: none;
}

.ToggleOn___3XJTo:focus > .ToggleContent___1C-vg,
.ToggleOff___142SC:focus > .ToggleContent___1C-vg {
  background: var(--color-button-background-focus);
}

.ToggleDisabled___iQeZ3 {
  background: var(--color-button-background);
  color: var(--color-button-disabled);
  cursor: default;
}

.Input___ESX-3 {
  width: 0;
  margin: 0;
  opacity: 0;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Toggle.css',
            ],
            names: [],
            mappings:
              'AAAA;;;EAGE,2CAA2C;EAC3C,aAAa;EACb,uBAAuB;EACvB,WAAW;EACX,eAAe;CAChB;;AAED;EACE,qBAAqB;EACrB,oBAAoB;EACpB,uBAAuB;EACvB,iBAAiB;CAClB;;AAED;EACE,aAAa;EACb,2CAA2C;EAC3C,2BAA2B;CAC5B;AACD;EACE,iCAAiC;CAClC;;AAED;;EAEE,kCAAkC;EAClC,cAAc;CACf;;AAED;;;EAGE,cAAc;CACf;;AAED;;EAEE,iDAAiD;CAClD;;AAED;EACE,2CAA2C;EAC3C,oCAAoC;EACpC,gBAAgB;CACjB;;AAED;EACE,SAAS;EACT,UAAU;EACV,WAAW;CACZ',
            file: 'Toggle.css',
            sourcesContent: [
              `.ToggleDisabled,
.ToggleOn,
.ToggleOff {
  background: var(--color-button-background);
  border: none;
  border-radius: 0.25rem;
  padding: 0;
  flex: 0 0 auto;
}

.ToggleContent {
  display: inline-flex;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.25rem;
}

.ToggleOff {
  border: none;
  background: var(--color-button-background);
  color: var(--color-button);
}
.ToggleOff:hover {
  color: var(--color-button-hover);
}

.ToggleOn,
.ToggleOn:active {
  color: var(--color-button-active);
  outline: none;
}

.ToggleOn:focus,
.ToggleOff:focus,
.ToggleContent:focus {
  outline: none;
}

.ToggleOn:focus > .ToggleContent,
.ToggleOff:focus > .ToggleContent {
  background: var(--color-button-background-focus);
}

.ToggleDisabled {
  background: var(--color-button-background);
  color: var(--color-button-disabled);
  cursor: default;
}

.Input {
  width: 0;
  margin: 0;
  opacity: 0;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          ToggleDisabled: 'ToggleDisabled___iQeZ3',
          ToggleOn: 'ToggleOn___3XJTo',
          ToggleOff: 'ToggleOff___142SC',
          ToggleContent: 'ToggleContent___1C-vg',
          Input: 'Input___ESX-3',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Tooltip.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Tooltip___3QR8H {
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-family: var(--font-family-sans);
  font-size: 12px;
  background-color: var(--color-tooltip-background);
  color: var(--color-tooltip-text);

  /* Make sure this is above the DevTools, which are above the Overlay */
  z-index: 10000002;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/Tooltip.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,wBAAwB;EACxB,qCAAqC;EACrC,gBAAgB;EAChB,kDAAkD;EAClD,iCAAiC;;EAEjC,uEAAuE;EACvE,kBAAkB;CACnB',
            file: 'Tooltip.css',
            sourcesContent: [
              `.Tooltip {
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-family: var(--font-family-sans);
  font-size: 12px;
  background-color: var(--color-tooltip-background);
  color: var(--color-tooltip-text);

  /* Make sure this is above the DevTools, which are above the Overlay */
  z-index: 10000002;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = { Tooltip: 'Tooltip___3QR8H' });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/UnsupportedVersionDialog.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Row___3IwJ6 {  
  display: flex;  
  flex-direction: row;  
  align-items: center;  
} 

.Column___w9Fle { 
  display: flex;  
  flex-direction: column; 
  align-items: center;  
} 

.Title___1PTyg {  
  font-size: var(--font-size-sans-large); 
  margin-bottom: 0.5rem;  
} 

.ReleaseNotesLink___2_Y38 { 
  color: var(--color-button-active);  
}`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/UnsupportedVersionDialog.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,cAAc;EACd,oBAAoB;EACpB,oBAAoB;CACrB;;AAED;EACE,cAAc;EACd,uBAAuB;EACvB,oBAAoB;CACrB;;AAED;EACE,uCAAuC;EACvC,sBAAsB;CACvB;;AAED;EACE,kCAAkC;CACnC',
            file: 'UnsupportedVersionDialog.css',
            sourcesContent: [
              `.Row {  
  display: flex;  
  flex-direction: row;  
  align-items: center;  
} 

.Column { 
  display: flex;  
  flex-direction: column; 
  align-items: center;  
} 

.Title {  
  font-size: var(--font-size-sans-large); 
  margin-bottom: 0.5rem;  
} 

.ReleaseNotesLink { 
  color: var(--color-button-active);  
}`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = {
          Row: 'Row___3IwJ6',
          Column: 'Column___w9Fle',
          Title: 'Title___1PTyg',
          ReleaseNotesLink: 'ReleaseNotesLink___2_Y38',
        });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/WarnIfLegacyBackendDetected.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `.Command___2iS3V {
  background-color: var(--color-dimmest);
  padding: 0.25rem 0.5rem;
  display: block;
  border-radius: 0.125rem;
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/WarnIfLegacyBackendDetected.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,uCAAuC;EACvC,wBAAwB;EACxB,eAAe;EACf,wBAAwB;CACzB',
            file: 'WarnIfLegacyBackendDetected.css',
            sourcesContent: [
              `.Command {
  background-color: var(--color-dimmest);
  padding: 0.25rem 0.5rem;
  display: block;
  border-radius: 0.125rem;
}
`,
            ],
            sourceRoot: '',
          },
        ]),
        (o.locals = { Command: 'Command___2iS3V' });
    },
    '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/root.css': function (
      g,
      o,
      e,
    ) {
      (o = g.exports = e('../../node_modules/css-loader/lib/css-base.js')(!0)),
        o.push([
          g.i,
          `:root {
  /**
   * IMPORTANT: When new theme variables are added below\u2013 also add them to SettingsContext updateThemeVariables()
   */

  /* Light theme */
  --light-color-attribute-name: #ef6632;
  --light-color-attribute-name-inverted: rgba(255, 255, 255, 0.7);
  --light-color-attribute-value: #1a1aa6;
  --light-color-attribute-value-inverted: #ffffff;
  --light-color-attribute-editable-value: #1a1aa6;
  --light-color-background: #ffffff;
  --light-color-background-hover: rgba(0, 136, 250, 0.1);
  --light-color-background-inactive: #e5e5e5;
  --light-color-background-invalid: #fff0f0;
  --light-color-background-selected: #0088fa;
  --light-color-button-background: #ffffff;
  --light-color-button-background-focus: #ededed;
  --light-color-button: #5f6673;
  --light-color-button-disabled: #cfd1d5;
  --light-color-button-active: #0088fa;
  --light-color-button-focus: #23272f;
  --light-color-button-hover: #23272f;
  --light-color-border: #eeeeee;
  --light-color-commit-did-not-render-fill: #cfd1d5;
  --light-color-commit-did-not-render-fill-text: #000000;
  --light-color-commit-did-not-render-pattern: #cfd1d5;
  --light-color-commit-did-not-render-pattern-text: #333333;
  --light-color-commit-gradient-0: #37afa9;
  --light-color-commit-gradient-1: #63b19e;
  --light-color-commit-gradient-2: #80b393;
  --light-color-commit-gradient-3: #97b488;
  --light-color-commit-gradient-4: #abb67d;
  --light-color-commit-gradient-5: #beb771;
  --light-color-commit-gradient-6: #cfb965;
  --light-color-commit-gradient-7: #dfba57;
  --light-color-commit-gradient-8: #efbb49;
  --light-color-commit-gradient-9: #febc38;
  --light-color-commit-gradient-text: #000000;
  --light-color-component-name: #6a51b2;
  --light-color-component-name-inverted: #ffffff;
  --light-color-component-badge-background: rgba(0, 0, 0, 0.1);
  --light-color-component-badge-background-inverted: rgba(255, 255, 255, 0.25);
  --light-color-component-badge-count: #777d88;
  --light-color-component-badge-count-inverted: rgba(255, 255, 255, 0.7);
  --light-color-context-background: rgba(0,0,0,.9);
  --light-color-context-background-hover: rgba(255, 255, 255, 0.1);
  --light-color-context-background-selected: #178fb9;
  --light-color-context-border: #3d424a;
  --light-color-context-text: #ffffff;
  --light-color-context-text-selected: #ffffff;
  --light-color-dim: #777d88;
  --light-color-dimmer: #cfd1d5;
  --light-color-dimmest: #eff0f1;
  --light-color-expand-collapse-toggle: #777d88;
  --light-color-modal-background: rgba(255, 255, 255, 0.75);
  --light-color-record-active: #fc3a4b;
  --light-color-record-hover: #3578e5;
  --light-color-record-inactive: #0088fa;
  --light-color-scroll-thumb: #c2c2c2;
  --light-color-scroll-track: #fafafa;
  --light-color-search-match: yellow;
  --light-color-search-match-current: #f7923b;
  --light-color-selected-tree-highlight-active: rgba(0, 136, 250, 0.1);
  --light-color-selected-tree-highlight-inactive: rgba(0, 0, 0, 0.05);
  --light-color-shadow: rgba(0, 0, 0, 0.25);
  --light-color-tab-selected-border: #0088fa;
  --light-color-text: #000000;
  --light-color-text-invalid: #ff0000;
  --light-color-text-selected: #ffffff;
  --light-color-toggle-background-invalid: #fc3a4b;
  --light-color-toggle-background-on: #0088fa;
  --light-color-toggle-background-off: #cfd1d5;
  --light-color-toggle-text: #ffffff;
  --light-color-tooltip-background: rgba(0, 0, 0, 0.9);
  --light-color-tooltip-text: #ffffff;

  /* Dark theme */
  --dark-color-attribute-name: #9d87d2;
  --dark-color-attribute-name-inverted: #282828;
  --dark-color-attribute-value: #cedae0;
  --dark-color-attribute-value-inverted: #ffffff;
  --dark-color-attribute-editable-value: yellow;
  --dark-color-background: #282c34;
  --dark-color-background-hover: rgba(255, 255, 255, 0.1);
  --dark-color-background-inactive: #3d424a;
  --dark-color-background-invalid: #5c0000;
  --dark-color-background-selected: #178fb9;
  --dark-color-button-background: #282c34;
  --dark-color-button-background-focus: #3d424a;
  --dark-color-button: #afb3b9;
  --dark-color-button-active: #61dafb;
  --dark-color-button-disabled: #4f5766;
  --dark-color-button-focus: #a2e9fc;
  --dark-color-button-hover: #ededed;
  --dark-color-border: #3d424a;
  --dark-color-commit-did-not-render-fill: #777d88;
  --dark-color-commit-did-not-render-fill-text: #000000;
  --dark-color-commit-did-not-render-pattern: #666c77;
  --dark-color-commit-did-not-render-pattern-text: #ffffff;
  --dark-color-commit-gradient-0: #37afa9;
  --dark-color-commit-gradient-1: #63b19e;
  --dark-color-commit-gradient-2: #80b393;
  --dark-color-commit-gradient-3: #97b488;
  --dark-color-commit-gradient-4: #abb67d;
  --dark-color-commit-gradient-5: #beb771;
  --dark-color-commit-gradient-6: #cfb965;
  --dark-color-commit-gradient-7: #dfba57;
  --dark-color-commit-gradient-8: #efbb49;
  --dark-color-commit-gradient-9: #febc38;
  --dark-color-commit-gradient-text: #000000;
  --dark-color-component-name: #61dafb;
  --dark-color-component-name-inverted: #282828;
  --dark-color-component-badge-background: rgba(255, 255, 255, 0.25);
  --dark-color-component-badge-background-inverted: rgba(0, 0, 0, 0.25);
  --dark-color-component-badge-count: #8f949d;
  --dark-color-component-badge-count-inverted: rgba(255, 255, 255, 0.7);
  --dark-color-context-background: rgba(255,255,255,.9);
  --dark-color-context-background-hover: rgba(0, 136, 250, 0.1);
  --dark-color-context-background-selected: #0088fa;
  --dark-color-context-border: #eeeeee;
  --dark-color-context-text: #000000;
  --dark-color-context-text-selected: #ffffff;
  --dark-color-dim: #8f949d;
  --dark-color-dimmer: #777d88;
  --dark-color-dimmest: #4f5766;
  --dark-color-expand-collapse-toggle: #8f949d;
  --dark-color-modal-background: rgba(0, 0, 0, 0.75);
  --dark-color-record-active: #fc3a4b;
  --dark-color-record-hover: #a2e9fc;
  --dark-color-record-inactive: #61dafb;
  --dark-color-scroll-thumb: #afb3b9;
  --dark-color-scroll-track: #313640;
  --dark-color-search-match: yellow;
  --dark-color-search-match-current: #f7923b;
  --dark-color-selected-tree-highlight-active: rgba(23, 143, 185, 0.15);
  --dark-color-selected-tree-highlight-inactive: rgba(255, 255, 255, 0.05);
  --dark-color-shadow: rgba(0, 0, 0, 0.5);
  --dark-color-tab-selected-border: #178fb9;
  --dark-color-text: #ffffff;
  --dark-color-text-invalid: #ff8080;
  --dark-color-text-selected: #ffffff;
  --dark-color-toggle-background-invalid: #fc3a4b;
  --dark-color-toggle-background-on: #178fb9;
  --dark-color-toggle-background-off: #777d88;
  --dark-color-toggle-text: #ffffff;
  --dark-color-tooltip-background: rgba(255, 255, 255, 0.9);
  --dark-color-tooltip-text: #000000;

  /* Font smoothing */
  --light-font-smoothing: auto;
  --dark-font-smoothing: antialiased;
  --font-smoothing: auto;

  /* Compact density */
  --compact-font-size-monospace-small: 9px;
  --compact-font-size-monospace-normal: 11px;
  --compact-font-size-monospace-large: 15px;
  --compact-font-size-sans-small: 10px;
  --compact-font-size-sans-normal: 12px;
  --compact-font-size-sans-large: 14px;
  --compact-line-height-data: 18px;
  --compact-root-font-size: 16px;

  /* Comfortable density */
  --comfortable-font-size-monospace-small: 10px;
  --comfortable-font-size-monospace-normal: 13px;
  --comfortable-font-size-monospace-large: 17px;
  --comfortable-font-size-sans-small: 12px;
  --comfortable-font-size-sans-normal: 14px;
  --comfortable-font-size-sans-large: 16px;
  --comfortable-line-height-data: 22px;
  --comfortable-root-font-size: 20px;

  /* GitHub.com system fonts */
  --font-family-monospace: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,
    Courier, monospace;
  --font-family-sans: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;

  /* Constant values shared between JS and CSS */
  --interaction-commit-size: 10px;
  --interaction-label-width: 200px;
}

* {
  box-sizing: border-box;

  -webkit-font-smoothing: var(--font-smoothing);
}
`,
          '',
          {
            version: 3,
            sources: [
              '/Users/bvaughn/Documents/git/react/packages/react-devtools-shared/src/devtools/views/root.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE;;KAEG;;EAEH,iBAAiB;EACjB,sCAAsC;EACtC,gEAAgE;EAChE,uCAAuC;EACvC,gDAAgD;EAChD,gDAAgD;EAChD,kCAAkC;EAClC,uDAAuD;EACvD,2CAA2C;EAC3C,0CAA0C;EAC1C,2CAA2C;EAC3C,yCAAyC;EACzC,+CAA+C;EAC/C,8BAA8B;EAC9B,uCAAuC;EACvC,qCAAqC;EACrC,oCAAoC;EACpC,oCAAoC;EACpC,8BAA8B;EAC9B,kDAAkD;EAClD,uDAAuD;EACvD,qDAAqD;EACrD,0DAA0D;EAC1D,yCAAyC;EACzC,yCAAyC;EACzC,yCAAyC;EACzC,yCAAyC;EACzC,yCAAyC;EACzC,yCAAyC;EACzC,yCAAyC;EACzC,yCAAyC;EACzC,yCAAyC;EACzC,yCAAyC;EACzC,4CAA4C;EAC5C,sCAAsC;EACtC,+CAA+C;EAC/C,6DAA6D;EAC7D,6EAA6E;EAC7E,6CAA6C;EAC7C,uEAAuE;EACvE,iDAAiD;EACjD,iEAAiE;EACjE,mDAAmD;EACnD,sCAAsC;EACtC,oCAAoC;EACpC,6CAA6C;EAC7C,2BAA2B;EAC3B,8BAA8B;EAC9B,+BAA+B;EAC/B,8CAA8C;EAC9C,0DAA0D;EAC1D,qCAAqC;EACrC,oCAAoC;EACpC,uCAAuC;EACvC,oCAAoC;EACpC,oCAAoC;EACpC,mCAAmC;EACnC,4CAA4C;EAC5C,qEAAqE;EACrE,oEAAoE;EACpE,0CAA0C;EAC1C,2CAA2C;EAC3C,4BAA4B;EAC5B,oCAAoC;EACpC,qCAAqC;EACrC,iDAAiD;EACjD,4CAA4C;EAC5C,6CAA6C;EAC7C,mCAAmC;EACnC,qDAAqD;EACrD,oCAAoC;;EAEpC,gBAAgB;EAChB,qCAAqC;EACrC,8CAA8C;EAC9C,sCAAsC;EACtC,+CAA+C;EAC/C,8CAA8C;EAC9C,iCAAiC;EACjC,wDAAwD;EACxD,0CAA0C;EAC1C,yCAAyC;EACzC,0CAA0C;EAC1C,wCAAwC;EACxC,8CAA8C;EAC9C,6BAA6B;EAC7B,oCAAoC;EACpC,sCAAsC;EACtC,mCAAmC;EACnC,mCAAmC;EACnC,6BAA6B;EAC7B,iDAAiD;EACjD,sDAAsD;EACtD,oDAAoD;EACpD,yDAAyD;EACzD,wCAAwC;EACxC,wCAAwC;EACxC,wCAAwC;EACxC,wCAAwC;EACxC,wCAAwC;EACxC,wCAAwC;EACxC,wCAAwC;EACxC,wCAAwC;EACxC,wCAAwC;EACxC,wCAAwC;EACxC,2CAA2C;EAC3C,qCAAqC;EACrC,8CAA8C;EAC9C,mEAAmE;EACnE,sEAAsE;EACtE,4CAA4C;EAC5C,sEAAsE;EACtE,sDAAsD;EACtD,8DAA8D;EAC9D,kDAAkD;EAClD,qCAAqC;EACrC,mCAAmC;EACnC,4CAA4C;EAC5C,0BAA0B;EAC1B,6BAA6B;EAC7B,8BAA8B;EAC9B,6CAA6C;EAC7C,mDAAmD;EACnD,oCAAoC;EACpC,mCAAmC;EACnC,sCAAsC;EACtC,mCAAmC;EACnC,mCAAmC;EACnC,kCAAkC;EAClC,2CAA2C;EAC3C,sEAAsE;EACtE,yEAAyE;EACzE,wCAAwC;EACxC,0CAA0C;EAC1C,2BAA2B;EAC3B,mCAAmC;EACnC,oCAAoC;EACpC,gDAAgD;EAChD,2CAA2C;EAC3C,4CAA4C;EAC5C,kCAAkC;EAClC,0DAA0D;EAC1D,mCAAmC;;EAEnC,oBAAoB;EACpB,6BAA6B;EAC7B,mCAAmC;EACnC,uBAAuB;;EAEvB,qBAAqB;EACrB,yCAAyC;EACzC,2CAA2C;EAC3C,0CAA0C;EAC1C,qCAAqC;EACrC,sCAAsC;EACtC,qCAAqC;EACrC,iCAAiC;EACjC,+BAA+B;;EAE/B,yBAAyB;EACzB,8CAA8C;EAC9C,+CAA+C;EAC/C,8CAA8C;EAC9C,yCAAyC;EACzC,0CAA0C;EAC1C,yCAAyC;EACzC,qCAAqC;EACrC,mCAAmC;;EAEnC,6BAA6B;EAC7B;uBACqB;EACrB;0EACwE;;EAExE,+CAA+C;EAC/C,gCAAgC;EAChC,iCAAiC;CAClC;;AAED;EACE,uBAAuB;;EAEvB,8CAA8C;CAC/C',
            file: 'root.css',
            sourcesContent: [
              `:root {
  /**
   * IMPORTANT: When new theme variables are added below\u2013 also add them to SettingsContext updateThemeVariables()
   */

  /* Light theme */
  --light-color-attribute-name: #ef6632;
  --light-color-attribute-name-inverted: rgba(255, 255, 255, 0.7);
  --light-color-attribute-value: #1a1aa6;
  --light-color-attribute-value-inverted: #ffffff;
  --light-color-attribute-editable-value: #1a1aa6;
  --light-color-background: #ffffff;
  --light-color-background-hover: rgba(0, 136, 250, 0.1);
  --light-color-background-inactive: #e5e5e5;
  --light-color-background-invalid: #fff0f0;
  --light-color-background-selected: #0088fa;
  --light-color-button-background: #ffffff;
  --light-color-button-background-focus: #ededed;
  --light-color-button: #5f6673;
  --light-color-button-disabled: #cfd1d5;
  --light-color-button-active: #0088fa;
  --light-color-button-focus: #23272f;
  --light-color-button-hover: #23272f;
  --light-color-border: #eeeeee;
  --light-color-commit-did-not-render-fill: #cfd1d5;
  --light-color-commit-did-not-render-fill-text: #000000;
  --light-color-commit-did-not-render-pattern: #cfd1d5;
  --light-color-commit-did-not-render-pattern-text: #333333;
  --light-color-commit-gradient-0: #37afa9;
  --light-color-commit-gradient-1: #63b19e;
  --light-color-commit-gradient-2: #80b393;
  --light-color-commit-gradient-3: #97b488;
  --light-color-commit-gradient-4: #abb67d;
  --light-color-commit-gradient-5: #beb771;
  --light-color-commit-gradient-6: #cfb965;
  --light-color-commit-gradient-7: #dfba57;
  --light-color-commit-gradient-8: #efbb49;
  --light-color-commit-gradient-9: #febc38;
  --light-color-commit-gradient-text: #000000;
  --light-color-component-name: #6a51b2;
  --light-color-component-name-inverted: #ffffff;
  --light-color-component-badge-background: rgba(0, 0, 0, 0.1);
  --light-color-component-badge-background-inverted: rgba(255, 255, 255, 0.25);
  --light-color-component-badge-count: #777d88;
  --light-color-component-badge-count-inverted: rgba(255, 255, 255, 0.7);
  --light-color-context-background: rgba(0,0,0,.9);
  --light-color-context-background-hover: rgba(255, 255, 255, 0.1);
  --light-color-context-background-selected: #178fb9;
  --light-color-context-border: #3d424a;
  --light-color-context-text: #ffffff;
  --light-color-context-text-selected: #ffffff;
  --light-color-dim: #777d88;
  --light-color-dimmer: #cfd1d5;
  --light-color-dimmest: #eff0f1;
  --light-color-expand-collapse-toggle: #777d88;
  --light-color-modal-background: rgba(255, 255, 255, 0.75);
  --light-color-record-active: #fc3a4b;
  --light-color-record-hover: #3578e5;
  --light-color-record-inactive: #0088fa;
  --light-color-scroll-thumb: #c2c2c2;
  --light-color-scroll-track: #fafafa;
  --light-color-search-match: yellow;
  --light-color-search-match-current: #f7923b;
  --light-color-selected-tree-highlight-active: rgba(0, 136, 250, 0.1);
  --light-color-selected-tree-highlight-inactive: rgba(0, 0, 0, 0.05);
  --light-color-shadow: rgba(0, 0, 0, 0.25);
  --light-color-tab-selected-border: #0088fa;
  --light-color-text: #000000;
  --light-color-text-invalid: #ff0000;
  --light-color-text-selected: #ffffff;
  --light-color-toggle-background-invalid: #fc3a4b;
  --light-color-toggle-background-on: #0088fa;
  --light-color-toggle-background-off: #cfd1d5;
  --light-color-toggle-text: #ffffff;
  --light-color-tooltip-background: rgba(0, 0, 0, 0.9);
  --light-color-tooltip-text: #ffffff;

  /* Dark theme */
  --dark-color-attribute-name: #9d87d2;
  --dark-color-attribute-name-inverted: #282828;
  --dark-color-attribute-value: #cedae0;
  --dark-color-attribute-value-inverted: #ffffff;
  --dark-color-attribute-editable-value: yellow;
  --dark-color-background: #282c34;
  --dark-color-background-hover: rgba(255, 255, 255, 0.1);
  --dark-color-background-inactive: #3d424a;
  --dark-color-background-invalid: #5c0000;
  --dark-color-background-selected: #178fb9;
  --dark-color-button-background: #282c34;
  --dark-color-button-background-focus: #3d424a;
  --dark-color-button: #afb3b9;
  --dark-color-button-active: #61dafb;
  --dark-color-button-disabled: #4f5766;
  --dark-color-button-focus: #a2e9fc;
  --dark-color-button-hover: #ededed;
  --dark-color-border: #3d424a;
  --dark-color-commit-did-not-render-fill: #777d88;
  --dark-color-commit-did-not-render-fill-text: #000000;
  --dark-color-commit-did-not-render-pattern: #666c77;
  --dark-color-commit-did-not-render-pattern-text: #ffffff;
  --dark-color-commit-gradient-0: #37afa9;
  --dark-color-commit-gradient-1: #63b19e;
  --dark-color-commit-gradient-2: #80b393;
  --dark-color-commit-gradient-3: #97b488;
  --dark-color-commit-gradient-4: #abb67d;
  --dark-color-commit-gradient-5: #beb771;
  --dark-color-commit-gradient-6: #cfb965;
  --dark-color-commit-gradient-7: #dfba57;
  --dark-color-commit-gradient-8: #efbb49;
  --dark-color-commit-gradient-9: #febc38;
  --dark-color-commit-gradient-text: #000000;
  --dark-color-component-name: #61dafb;
  --dark-color-component-name-inverted: #282828;
  --dark-color-component-badge-background: rgba(255, 255, 255, 0.25);
  --dark-color-component-badge-background-inverted: rgba(0, 0, 0, 0.25);
  --dark-color-component-badge-count: #8f949d;
  --dark-color-component-badge-count-inverted: rgba(255, 255, 255, 0.7);
  --dark-color-context-background: rgba(255,255,255,.9);
  --dark-color-context-background-hover: rgba(0, 136, 250, 0.1);
  --dark-color-context-background-selected: #0088fa;
  --dark-color-context-border: #eeeeee;
  --dark-color-context-text: #000000;
  --dark-color-context-text-selected: #ffffff;
  --dark-color-dim: #8f949d;
  --dark-color-dimmer: #777d88;
  --dark-color-dimmest: #4f5766;
  --dark-color-expand-collapse-toggle: #8f949d;
  --dark-color-modal-background: rgba(0, 0, 0, 0.75);
  --dark-color-record-active: #fc3a4b;
  --dark-color-record-hover: #a2e9fc;
  --dark-color-record-inactive: #61dafb;
  --dark-color-scroll-thumb: #afb3b9;
  --dark-color-scroll-track: #313640;
  --dark-color-search-match: yellow;
  --dark-color-search-match-current: #f7923b;
  --dark-color-selected-tree-highlight-active: rgba(23, 143, 185, 0.15);
  --dark-color-selected-tree-highlight-inactive: rgba(255, 255, 255, 0.05);
  --dark-color-shadow: rgba(0, 0, 0, 0.5);
  --dark-color-tab-selected-border: #178fb9;
  --dark-color-text: #ffffff;
  --dark-color-text-invalid: #ff8080;
  --dark-color-text-selected: #ffffff;
  --dark-color-toggle-background-invalid: #fc3a4b;
  --dark-color-toggle-background-on: #178fb9;
  --dark-color-toggle-background-off: #777d88;
  --dark-color-toggle-text: #ffffff;
  --dark-color-tooltip-background: rgba(255, 255, 255, 0.9);
  --dark-color-tooltip-text: #000000;

  /* Font smoothing */
  --light-font-smoothing: auto;
  --dark-font-smoothing: antialiased;
  --font-smoothing: auto;

  /* Compact density */
  --compact-font-size-monospace-small: 9px;
  --compact-font-size-monospace-normal: 11px;
  --compact-font-size-monospace-large: 15px;
  --compact-font-size-sans-small: 10px;
  --compact-font-size-sans-normal: 12px;
  --compact-font-size-sans-large: 14px;
  --compact-line-height-data: 18px;
  --compact-root-font-size: 16px;

  /* Comfortable density */
  --comfortable-font-size-monospace-small: 10px;
  --comfortable-font-size-monospace-normal: 13px;
  --comfortable-font-size-monospace-large: 17px;
  --comfortable-font-size-sans-small: 12px;
  --comfortable-font-size-sans-normal: 14px;
  --comfortable-font-size-sans-large: 16px;
  --comfortable-line-height-data: 22px;
  --comfortable-root-font-size: 20px;

  /* GitHub.com system fonts */
  --font-family-monospace: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,
    Courier, monospace;
  --font-family-sans: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;

  /* Constant values shared between JS and CSS */
  --interaction-commit-size: 10px;
  --interaction-label-width: 200px;
}

* {
  box-sizing: border-box;

  -webkit-font-smoothing: var(--font-smoothing);
}
`,
            ],
            sourceRoot: '',
          },
        ]);
    },
    '../../node_modules/css-loader/lib/css-base.js': function (g, o) {
      g.exports = function (n) {
        var r = [];
        return (
          (r.toString = function () {
            return this.map(function (b) {
              var m = e(b, n);
              return b[2] ? '@media ' + b[2] + '{' + m + '}' : m;
            }).join('');
          }),
          (r.i = function (C, b) {
            typeof C == 'string' && (C = [[null, C, '']]);
            for (var m = {}, y = 0; y < this.length; y++) {
              var p = this[y][0];
              typeof p == 'number' && (m[p] = !0);
            }
            for (y = 0; y < C.length; y++) {
              var x = C[y];
              (typeof x[0] != 'number' || !m[x[0]]) &&
                (b && !x[2]
                  ? (x[2] = b)
                  : b && (x[2] = '(' + x[2] + ') and (' + b + ')'),
                r.push(x));
            }
          }),
          r
        );
      };
      function e(n, r) {
        var C = n[1] || '',
          b = n[3];
        if (!b) return C;
        if (r && typeof btoa == 'function') {
          var m = t(b),
            y = b.sources.map(function (p) {
              return '/*# sourceURL=' + b.sourceRoot + p + ' */';
            });
          return [C].concat(y).concat([m]).join(`
`);
        }
        return [C].join(`
`);
      }
      function t(n) {
        var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
          C =
            'sourceMappingURL=data:application/json;charset=utf-8;base64,' + r;
        return '/*# ' + C + ' */';
      }
    },
    '../../node_modules/d/index.js': function (g, o, e) {
      var t = e('../../node_modules/type/value/is.js'),
        n = e('../../node_modules/type/plain-function/is.js'),
        r = e('../../node_modules/es5-ext/object/assign/index.js'),
        C = e('../../node_modules/es5-ext/object/normalize-options.js'),
        b = e('../../node_modules/es5-ext/string/#/contains/index.js'),
        m = (g.exports = function (y, p) {
          var x, P, B, d, i;
          return (
            arguments.length < 2 || typeof y != 'string'
              ? ((d = p), (p = y), (y = null))
              : (d = arguments[2]),
            t(y)
              ? ((x = b.call(y, 'c')),
                (P = b.call(y, 'e')),
                (B = b.call(y, 'w')))
              : ((x = B = !0), (P = !1)),
            (i = { value: p, configurable: x, enumerable: P, writable: B }),
            d ? r(C(d), i) : i
          );
        });
      m.gs = function (y, p, x) {
        var P, B, d, i;
        return (
          typeof y != 'string'
            ? ((d = x), (x = p), (p = y), (y = null))
            : (d = arguments[3]),
          t(p)
            ? n(p)
              ? t(x)
                ? n(x) || ((d = x), (x = void 0))
                : (x = void 0)
              : ((d = p), (p = x = void 0))
            : (p = void 0),
          t(y)
            ? ((P = b.call(y, 'c')), (B = b.call(y, 'e')))
            : ((P = !0), (B = !1)),
          (i = { get: p, set: x, configurable: P, enumerable: B }),
          d ? r(C(d), i) : i
        );
      };
    },
    '../../node_modules/es5-ext/function/noop.js': function (g, o, e) {
      g.exports = function () {};
    },
    '../../node_modules/es5-ext/object/assign/index.js': function (g, o, e) {
      g.exports = e(
        '../../node_modules/es5-ext/object/assign/is-implemented.js',
      )()
        ? Object.assign
        : e('../../node_modules/es5-ext/object/assign/shim.js');
    },
    '../../node_modules/es5-ext/object/assign/is-implemented.js': function (
      g,
      o,
      e,
    ) {
      g.exports = function () {
        var t = Object.assign,
          n;
        return typeof t != 'function'
          ? !1
          : ((n = { foo: 'raz' }),
            t(n, { bar: 'dwa' }, { trzy: 'trzy' }),
            n.foo + n.bar + n.trzy === 'razdwatrzy');
      };
    },
    '../../node_modules/es5-ext/object/assign/shim.js': function (g, o, e) {
      var t = e('../../node_modules/es5-ext/object/keys/index.js'),
        n = e('../../node_modules/es5-ext/object/valid-value.js'),
        r = Math.max;
      g.exports = function (C, b) {
        var m,
          y,
          p = r(arguments.length, 2),
          x;
        for (
          C = Object(n(C)),
            x = function (B) {
              try {
                C[B] = b[B];
              } catch (d) {
                m || (m = d);
              }
            },
            y = 1;
          y < p;
          ++y
        )
          (b = arguments[y]), t(b).forEach(x);
        if (m !== void 0) throw m;
        return C;
      };
    },
    '../../node_modules/es5-ext/object/is-value.js': function (g, o, e) {
      var t = e('../../node_modules/es5-ext/function/noop.js')();
      g.exports = function (n) {
        return n !== t && n !== null;
      };
    },
    '../../node_modules/es5-ext/object/keys/index.js': function (g, o, e) {
      g.exports = e(
        '../../node_modules/es5-ext/object/keys/is-implemented.js',
      )()
        ? Object.keys
        : e('../../node_modules/es5-ext/object/keys/shim.js');
    },
    '../../node_modules/es5-ext/object/keys/is-implemented.js': function (
      g,
      o,
      e,
    ) {
      g.exports = function () {
        try {
          return Object.keys('primitive'), !0;
        } catch {
          return !1;
        }
      };
    },
    '../../node_modules/es5-ext/object/keys/shim.js': function (g, o, e) {
      var t = e('../../node_modules/es5-ext/object/is-value.js'),
        n = Object.keys;
      g.exports = function (r) {
        return n(t(r) ? Object(r) : r);
      };
    },
    '../../node_modules/es5-ext/object/normalize-options.js': function (
      g,
      o,
      e,
    ) {
      var t = e('../../node_modules/es5-ext/object/is-value.js'),
        n = Array.prototype.forEach,
        r = Object.create,
        C = function (m, y) {
          var p;
          for (p in m) y[p] = m[p];
        };
      g.exports = function (b) {
        var m = r(null);
        return (
          n.call(arguments, function (y) {
            !t(y) || C(Object(y), m);
          }),
          m
        );
      };
    },
    '../../node_modules/es5-ext/object/valid-value.js': function (g, o, e) {
      var t = e('../../node_modules/es5-ext/object/is-value.js');
      g.exports = function (n) {
        if (!t(n)) throw new TypeError('Cannot use null or undefined');
        return n;
      };
    },
    '../../node_modules/es5-ext/string/#/contains/index.js': function (
      g,
      o,
      e,
    ) {
      g.exports = e(
        '../../node_modules/es5-ext/string/#/contains/is-implemented.js',
      )()
        ? String.prototype.contains
        : e('../../node_modules/es5-ext/string/#/contains/shim.js');
    },
    '../../node_modules/es5-ext/string/#/contains/is-implemented.js': function (
      g,
      o,
      e,
    ) {
      var t = 'razdwatrzy';
      g.exports = function () {
        return typeof t.contains != 'function'
          ? !1
          : t.contains('dwa') === !0 && t.contains('foo') === !1;
      };
    },
    '../../node_modules/es5-ext/string/#/contains/shim.js': function (g, o, e) {
      var t = String.prototype.indexOf;
      g.exports = function (n) {
        return t.call(this, n, arguments[1]) > -1;
      };
    },
    '../../node_modules/es6-symbol/index.js': function (g, o, e) {
      g.exports = e('../../node_modules/es6-symbol/is-implemented.js')()
        ? Symbol
        : e('../../node_modules/es6-symbol/polyfill.js');
    },
    '../../node_modules/es6-symbol/is-implemented.js': function (g, o, e) {
      function t(r) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (t = function (b) {
                return typeof b;
              })
            : (t = function (b) {
                return b &&
                  typeof Symbol == 'function' &&
                  b.constructor === Symbol &&
                  b !== Symbol.prototype
                  ? 'symbol'
                  : typeof b;
              }),
          t(r)
        );
      }
      var n = { object: !0, symbol: !0 };
      g.exports = function () {
        var r;
        if (typeof Symbol != 'function') return !1;
        r = Symbol('test symbol');
        try {
          String(r);
        } catch {
          return !1;
        }
        return !(
          !n[t(Symbol.iterator)] ||
          !n[t(Symbol.toPrimitive)] ||
          !n[t(Symbol.toStringTag)]
        );
      };
    },
    '../../node_modules/es6-symbol/is-symbol.js': function (g, o, e) {
      function t(n) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (t = function (C) {
                return typeof C;
              })
            : (t = function (C) {
                return C &&
                  typeof Symbol == 'function' &&
                  C.constructor === Symbol &&
                  C !== Symbol.prototype
                  ? 'symbol'
                  : typeof C;
              }),
          t(n)
        );
      }
      g.exports = function (n) {
        return n
          ? t(n) === 'symbol'
            ? !0
            : !n.constructor || n.constructor.name !== 'Symbol'
            ? !1
            : n[n.constructor.toStringTag] === 'Symbol'
          : !1;
      };
    },
    '../../node_modules/es6-symbol/polyfill.js': function (g, o, e) {
      function t(_) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (t = function (s) {
                return typeof s;
              })
            : (t = function (s) {
                return s &&
                  typeof Symbol == 'function' &&
                  s.constructor === Symbol &&
                  s !== Symbol.prototype
                  ? 'symbol'
                  : typeof s;
              }),
          t(_)
        );
      }
      var n = e('../../node_modules/d/index.js'),
        r = e('../../node_modules/es6-symbol/validate-symbol.js'),
        C = Object.create,
        b = Object.defineProperties,
        m = Object.defineProperty,
        y = Object.prototype,
        p,
        x,
        P,
        B = C(null),
        d;
      if (typeof Symbol == 'function') {
        p = Symbol;
        try {
          String(p()), (d = !0);
        } catch {}
      }
      var i = (function () {
        var _ = C(null);
        return function (a) {
          for (var s = 0, u, O; _[a + (s || '')]; ) ++s;
          return (
            (a += s || ''),
            (_[a] = !0),
            (u = '@@' + a),
            m(
              y,
              u,
              n.gs(null, function (v) {
                O || ((O = !0), m(this, u, n(v)), (O = !1));
              }),
            ),
            u
          );
        };
      })();
      (P = function (a) {
        if (this instanceof P)
          throw new TypeError('Symbol is not a constructor');
        return x(a);
      }),
        (g.exports = x = function _(a) {
          var s;
          if (this instanceof _)
            throw new TypeError('Symbol is not a constructor');
          return d
            ? p(a)
            : ((s = C(P.prototype)),
              (a = a === void 0 ? '' : String(a)),
              b(s, { __description__: n('', a), __name__: n('', i(a)) }));
        }),
        b(x, {
          for: n(function (_) {
            return B[_] ? B[_] : (B[_] = x(String(_)));
          }),
          keyFor: n(function (_) {
            var a;
            r(_);
            for (a in B) if (B[a] === _) return a;
          }),
          hasInstance: n('', (p && p.hasInstance) || x('hasInstance')),
          isConcatSpreadable: n(
            '',
            (p && p.isConcatSpreadable) || x('isConcatSpreadable'),
          ),
          iterator: n('', (p && p.iterator) || x('iterator')),
          match: n('', (p && p.match) || x('match')),
          replace: n('', (p && p.replace) || x('replace')),
          search: n('', (p && p.search) || x('search')),
          species: n('', (p && p.species) || x('species')),
          split: n('', (p && p.split) || x('split')),
          toPrimitive: n('', (p && p.toPrimitive) || x('toPrimitive')),
          toStringTag: n('', (p && p.toStringTag) || x('toStringTag')),
          unscopables: n('', (p && p.unscopables) || x('unscopables')),
        }),
        b(P.prototype, {
          constructor: n(x),
          toString: n('', function () {
            return this.__name__;
          }),
        }),
        b(x.prototype, {
          toString: n(function () {
            return 'Symbol (' + r(this).__description__ + ')';
          }),
          valueOf: n(function () {
            return r(this);
          }),
        }),
        m(
          x.prototype,
          x.toPrimitive,
          n('', function () {
            var _ = r(this);
            return t(_) === 'symbol' ? _ : _.toString();
          }),
        ),
        m(x.prototype, x.toStringTag, n('c', 'Symbol')),
        m(P.prototype, x.toStringTag, n('c', x.prototype[x.toStringTag])),
        m(P.prototype, x.toPrimitive, n('c', x.prototype[x.toPrimitive]));
    },
    '../../node_modules/es6-symbol/validate-symbol.js': function (g, o, e) {
      var t = e('../../node_modules/es6-symbol/is-symbol.js');
      g.exports = function (n) {
        if (!t(n)) throw new TypeError(n + ' is not a symbol');
        return n;
      };
    },
    '../../node_modules/escape-string-regexp/index.js': function (g, o, e) {
      var t = /[|\\{}()[\]^$+*?.]/g;
      g.exports = function (n) {
        if (typeof n != 'string') throw new TypeError('Expected a string');
        return n.replace(t, '\\$&');
      };
    },
    '../../node_modules/events/events.js': function (g, o) {
      function e(m) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (e = function (p) {
                return typeof p;
              })
            : (e = function (p) {
                return p &&
                  typeof Symbol == 'function' &&
                  p.constructor === Symbol &&
                  p !== Symbol.prototype
                  ? 'symbol'
                  : typeof p;
              }),
          e(m)
        );
      }
      function t() {
        (this._events = this._events || {}),
          (this._maxListeners = this._maxListeners || void 0);
      }
      (g.exports = t),
        (t.EventEmitter = t),
        (t.prototype._events = void 0),
        (t.prototype._maxListeners = void 0),
        (t.defaultMaxListeners = 10),
        (t.prototype.setMaxListeners = function (m) {
          if (!r(m) || m < 0 || isNaN(m))
            throw TypeError('n must be a positive number');
          return (this._maxListeners = m), this;
        }),
        (t.prototype.emit = function (m) {
          var y, p, x, P, B, d;
          if (
            (this._events || (this._events = {}),
            m === 'error' &&
              (!this._events.error ||
                (C(this._events.error) && !this._events.error.length)))
          ) {
            if (((y = arguments[1]), y instanceof Error)) throw y;
            var i = new Error(
              'Uncaught, unspecified "error" event. (' + y + ')',
            );
            throw ((i.context = y), i);
          }
          if (((p = this._events[m]), b(p))) return !1;
          if (n(p))
            switch (arguments.length) {
              case 1:
                p.call(this);
                break;
              case 2:
                p.call(this, arguments[1]);
                break;
              case 3:
                p.call(this, arguments[1], arguments[2]);
                break;
              default:
                (P = Array.prototype.slice.call(arguments, 1)),
                  p.apply(this, P);
            }
          else if (C(p))
            for (
              P = Array.prototype.slice.call(arguments, 1),
                d = p.slice(),
                x = d.length,
                B = 0;
              B < x;
              B++
            )
              d[B].apply(this, P);
          return !0;
        }),
        (t.prototype.addListener = function (m, y) {
          var p;
          if (!n(y)) throw TypeError('listener must be a function');
          return (
            this._events || (this._events = {}),
            this._events.newListener &&
              this.emit('newListener', m, n(y.listener) ? y.listener : y),
            this._events[m]
              ? C(this._events[m])
                ? this._events[m].push(y)
                : (this._events[m] = [this._events[m], y])
              : (this._events[m] = y),
            C(this._events[m]) &&
              !this._events[m].warned &&
              (b(this._maxListeners)
                ? (p = t.defaultMaxListeners)
                : (p = this._maxListeners),
              p &&
                p > 0 &&
                this._events[m].length > p &&
                ((this._events[m].warned = !0),
                console.error(
                  '(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',
                  this._events[m].length,
                ),
                typeof console.trace == 'function' && console.trace())),
            this
          );
        }),
        (t.prototype.on = t.prototype.addListener),
        (t.prototype.once = function (m, y) {
          if (!n(y)) throw TypeError('listener must be a function');
          var p = !1;
          function x() {
            this.removeListener(m, x),
              p || ((p = !0), y.apply(this, arguments));
          }
          return (x.listener = y), this.on(m, x), this;
        }),
        (t.prototype.removeListener = function (m, y) {
          var p, x, P, B;
          if (!n(y)) throw TypeError('listener must be a function');
          if (!this._events || !this._events[m]) return this;
          if (
            ((p = this._events[m]),
            (P = p.length),
            (x = -1),
            p === y || (n(p.listener) && p.listener === y))
          )
            delete this._events[m],
              this._events.removeListener && this.emit('removeListener', m, y);
          else if (C(p)) {
            for (B = P; B-- > 0; )
              if (p[B] === y || (p[B].listener && p[B].listener === y)) {
                x = B;
                break;
              }
            if (x < 0) return this;
            p.length === 1
              ? ((p.length = 0), delete this._events[m])
              : p.splice(x, 1),
              this._events.removeListener && this.emit('removeListener', m, y);
          }
          return this;
        }),
        (t.prototype.removeAllListeners = function (m) {
          var y, p;
          if (!this._events) return this;
          if (!this._events.removeListener)
            return (
              arguments.length === 0
                ? (this._events = {})
                : this._events[m] && delete this._events[m],
              this
            );
          if (arguments.length === 0) {
            for (y in this._events)
              y !== 'removeListener' && this.removeAllListeners(y);
            return (
              this.removeAllListeners('removeListener'),
              (this._events = {}),
              this
            );
          }
          if (((p = this._events[m]), n(p))) this.removeListener(m, p);
          else if (p)
            for (; p.length; ) this.removeListener(m, p[p.length - 1]);
          return delete this._events[m], this;
        }),
        (t.prototype.listeners = function (m) {
          var y;
          return (
            !this._events || !this._events[m]
              ? (y = [])
              : n(this._events[m])
              ? (y = [this._events[m]])
              : (y = this._events[m].slice()),
            y
          );
        }),
        (t.prototype.listenerCount = function (m) {
          if (this._events) {
            var y = this._events[m];
            if (n(y)) return 1;
            if (y) return y.length;
          }
          return 0;
        }),
        (t.listenerCount = function (m, y) {
          return m.listenerCount(y);
        });
      function n(m) {
        return typeof m == 'function';
      }
      function r(m) {
        return typeof m == 'number';
      }
      function C(m) {
        return e(m) === 'object' && m !== null;
      }
      function b(m) {
        return m === void 0;
      }
    },
    '../../node_modules/lodash.throttle/index.js': function (g, o, e) {
      (function (t) {
        function n(E) {
          return (
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? (n = function (I) {
                  return typeof I;
                })
              : (n = function (I) {
                  return I &&
                    typeof Symbol == 'function' &&
                    I.constructor === Symbol &&
                    I !== Symbol.prototype
                    ? 'symbol'
                    : typeof I;
                }),
            n(E)
          );
        }
        var r = 'Expected a function',
          C = 0 / 0,
          b = '[object Symbol]',
          m = /^\s+|\s+$/g,
          y = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          x = /^0o[0-7]+$/i,
          P = parseInt,
          B =
            (typeof t > 'u' ? 'undefined' : n(t)) == 'object' &&
            t &&
            t.Object === Object &&
            t,
          d =
            (typeof self > 'u' ? 'undefined' : n(self)) == 'object' &&
            self &&
            self.Object === Object &&
            self,
          i = B || d || Function('return this')(),
          _ = Object.prototype,
          a = _.toString,
          s = Math.max,
          u = Math.min,
          O = function () {
            return i.Date.now();
          };
        function v(E, D, I) {
          var T,
            R,
            j,
            z,
            W,
            K,
            S = 0,
            F = !1,
            k = !1,
            H = !0;
          if (typeof E != 'function') throw new TypeError(r);
          (D = f(D) || 0),
            l(I) &&
              ((F = !!I.leading),
              (k = 'maxWait' in I),
              (j = k ? s(f(I.maxWait) || 0, D) : j),
              (H = 'trailing' in I ? !!I.trailing : H));
          function w(N) {
            var V = T,
              X = R;
            return (T = R = void 0), (S = N), (z = E.apply(X, V)), z;
          }
          function L(N) {
            return (S = N), (W = setTimeout(Y, D)), F ? w(N) : z;
          }
          function M(N) {
            var V = N - K,
              X = N - S,
              $ = D - V;
            return k ? u($, j - X) : $;
          }
          function U(N) {
            var V = N - K,
              X = N - S;
            return K === void 0 || V >= D || V < 0 || (k && X >= j);
          }
          function Y() {
            var N = O();
            if (U(N)) return Z(N);
            W = setTimeout(Y, M(N));
          }
          function Z(N) {
            return (W = void 0), H && T ? w(N) : ((T = R = void 0), z);
          }
          function q() {
            W !== void 0 && clearTimeout(W), (S = 0), (T = K = R = W = void 0);
          }
          function ee() {
            return W === void 0 ? z : Z(O());
          }
          function G() {
            var N = O(),
              V = U(N);
            if (((T = arguments), (R = this), (K = N), V)) {
              if (W === void 0) return L(K);
              if (k) return (W = setTimeout(Y, D)), w(K);
            }
            return W === void 0 && (W = setTimeout(Y, D)), z;
          }
          return (G.cancel = q), (G.flush = ee), G;
        }
        function A(E, D, I) {
          var T = !0,
            R = !0;
          if (typeof E != 'function') throw new TypeError(r);
          return (
            l(I) &&
              ((T = 'leading' in I ? !!I.leading : T),
              (R = 'trailing' in I ? !!I.trailing : R)),
            v(E, D, { leading: T, maxWait: D, trailing: R })
          );
        }
        function l(E) {
          var D = n(E);
          return !!E && (D == 'object' || D == 'function');
        }
        function c(E) {
          return !!E && n(E) == 'object';
        }
        function h(E) {
          return n(E) == 'symbol' || (c(E) && a.call(E) == b);
        }
        function f(E) {
          if (typeof E == 'number') return E;
          if (h(E)) return C;
          if (l(E)) {
            var D = typeof E.valueOf == 'function' ? E.valueOf() : E;
            E = l(D) ? D + '' : D;
          }
          if (typeof E != 'string') return E === 0 ? E : +E;
          E = E.replace(m, '');
          var I = p.test(E);
          return I || x.test(E) ? P(E.slice(2), I ? 2 : 8) : y.test(E) ? C : +E;
        }
        g.exports = A;
      }.call(this, e('../../node_modules/webpack/buildin/global.js')));
    },
    '../../node_modules/lru-cache/index.js': function (g, o, e) {
      (function (t) {
        g.exports = u;
        var n = e('../../node_modules/pseudomap/map.js'),
          r = e('../../node_modules/util/util.js'),
          C = e('../../node_modules/lru-cache/node_modules/yallist/yallist.js'),
          b =
            typeof Symbol == 'function' &&
            t.env._nodeLRUCacheForceNoSymbol !== '1',
          m;
        b
          ? (m = function (E) {
              return Symbol(E);
            })
          : (m = function (E) {
              return '_' + E;
            });
        var y = m('max'),
          p = m('length'),
          x = m('lengthCalculator'),
          P = m('allowStale'),
          B = m('maxAge'),
          d = m('dispose'),
          i = m('noDisposeOnSet'),
          _ = m('lruList'),
          a = m('cache');
        function s() {
          return 1;
        }
        function u(f) {
          if (!(this instanceof u)) return new u(f);
          typeof f == 'number' && (f = { max: f }), f || (f = {});
          var E = (this[y] = f.max);
          (!E || typeof E != 'number' || E <= 0) && (this[y] = 1 / 0);
          var D = f.length || s;
          typeof D != 'function' && (D = s),
            (this[x] = D),
            (this[P] = f.stale || !1),
            (this[B] = f.maxAge || 0),
            (this[d] = f.dispose),
            (this[i] = f.noDisposeOnSet || !1),
            this.reset();
        }
        Object.defineProperty(u.prototype, 'max', {
          set: function (E) {
            (!E || typeof E != 'number' || E <= 0) && (E = 1 / 0),
              (this[y] = E),
              l(this);
          },
          get: function () {
            return this[y];
          },
          enumerable: !0,
        }),
          Object.defineProperty(u.prototype, 'allowStale', {
            set: function (E) {
              this[P] = !!E;
            },
            get: function () {
              return this[P];
            },
            enumerable: !0,
          }),
          Object.defineProperty(u.prototype, 'maxAge', {
            set: function (E) {
              (!E || typeof E != 'number' || E < 0) && (E = 0),
                (this[B] = E),
                l(this);
            },
            get: function () {
              return this[B];
            },
            enumerable: !0,
          }),
          Object.defineProperty(u.prototype, 'lengthCalculator', {
            set: function (E) {
              typeof E != 'function' && (E = s),
                E !== this[x] &&
                  ((this[x] = E),
                  (this[p] = 0),
                  this[_].forEach(function (D) {
                    (D.length = this[x](D.value, D.key)), (this[p] += D.length);
                  }, this)),
                l(this);
            },
            get: function () {
              return this[x];
            },
            enumerable: !0,
          }),
          Object.defineProperty(u.prototype, 'length', {
            get: function () {
              return this[p];
            },
            enumerable: !0,
          }),
          Object.defineProperty(u.prototype, 'itemCount', {
            get: function () {
              return this[_].length;
            },
            enumerable: !0,
          }),
          (u.prototype.rforEach = function (f, E) {
            E = E || this;
            for (var D = this[_].tail; D !== null; ) {
              var I = D.prev;
              O(this, f, D, E), (D = I);
            }
          });
        function O(f, E, D, I) {
          var T = D.value;
          A(f, T) && (c(f, D), f[P] || (T = void 0)),
            T && E.call(I, T.value, T.key, f);
        }
        (u.prototype.forEach = function (f, E) {
          E = E || this;
          for (var D = this[_].head; D !== null; ) {
            var I = D.next;
            O(this, f, D, E), (D = I);
          }
        }),
          (u.prototype.keys = function () {
            return this[_].toArray().map(function (f) {
              return f.key;
            }, this);
          }),
          (u.prototype.values = function () {
            return this[_].toArray().map(function (f) {
              return f.value;
            }, this);
          }),
          (u.prototype.reset = function () {
            this[d] &&
              this[_] &&
              this[_].length &&
              this[_].forEach(function (f) {
                this[d](f.key, f.value);
              }, this),
              (this[a] = new n()),
              (this[_] = new C()),
              (this[p] = 0);
          }),
          (u.prototype.dump = function () {
            return this[_].map(function (f) {
              if (!A(this, f))
                return { k: f.key, v: f.value, e: f.now + (f.maxAge || 0) };
            }, this)
              .toArray()
              .filter(function (f) {
                return f;
              });
          }),
          (u.prototype.dumpLru = function () {
            return this[_];
          }),
          (u.prototype.inspect = function (f, E) {
            var D = 'LRUCache {',
              I = !1,
              T = this[P];
            T &&
              ((D += `
  allowStale: true`),
              (I = !0));
            var R = this[y];
            R &&
              R !== 1 / 0 &&
              (I && (D += ','),
              (D +=
                `
  max: ` + r.inspect(R, E)),
              (I = !0));
            var j = this[B];
            j &&
              (I && (D += ','),
              (D +=
                `
  maxAge: ` + r.inspect(j, E)),
              (I = !0));
            var z = this[x];
            z &&
              z !== s &&
              (I && (D += ','),
              (D +=
                `
  length: ` + r.inspect(this[p], E)),
              (I = !0));
            var W = !1;
            return (
              this[_].forEach(function (K) {
                W
                  ? (D += `,
  `)
                  : (I &&
                      (D += `,
`),
                    (W = !0),
                    (D += `
  `));
                var S = r.inspect(K.key).split(`
`).join(`
  `),
                  F = { value: K.value };
                K.maxAge !== j && (F.maxAge = K.maxAge),
                  z !== s && (F.length = K.length),
                  A(this, K) && (F.stale = !0),
                  (F = r.inspect(F, E).split(`
`).join(`
  `)),
                  (D += S + ' => ' + F);
              }),
              (W || I) &&
                (D += `
`),
              (D += '}'),
              D
            );
          }),
          (u.prototype.set = function (f, E, D) {
            D = D || this[B];
            var I = D ? Date.now() : 0,
              T = this[x](E, f);
            if (this[a].has(f)) {
              if (T > this[y]) return c(this, this[a].get(f)), !1;
              var R = this[a].get(f),
                j = R.value;
              return (
                this[d] && (this[i] || this[d](f, j.value)),
                (j.now = I),
                (j.maxAge = D),
                (j.value = E),
                (this[p] += T - j.length),
                (j.length = T),
                this.get(f),
                l(this),
                !0
              );
            }
            var z = new h(f, E, T, I, D);
            return z.length > this[y]
              ? (this[d] && this[d](f, E), !1)
              : ((this[p] += z.length),
                this[_].unshift(z),
                this[a].set(f, this[_].head),
                l(this),
                !0);
          }),
          (u.prototype.has = function (f) {
            if (!this[a].has(f)) return !1;
            var E = this[a].get(f).value;
            return !A(this, E);
          }),
          (u.prototype.get = function (f) {
            return v(this, f, !0);
          }),
          (u.prototype.peek = function (f) {
            return v(this, f, !1);
          }),
          (u.prototype.pop = function () {
            var f = this[_].tail;
            return f ? (c(this, f), f.value) : null;
          }),
          (u.prototype.del = function (f) {
            c(this, this[a].get(f));
          }),
          (u.prototype.load = function (f) {
            this.reset();
            for (var E = Date.now(), D = f.length - 1; D >= 0; D--) {
              var I = f[D],
                T = I.e || 0;
              if (T === 0) this.set(I.k, I.v);
              else {
                var R = T - E;
                R > 0 && this.set(I.k, I.v, R);
              }
            }
          }),
          (u.prototype.prune = function () {
            var f = this;
            this[a].forEach(function (E, D) {
              v(f, D, !1);
            });
          });
        function v(f, E, D) {
          var I = f[a].get(E);
          if (I) {
            var T = I.value;
            A(f, T)
              ? (c(f, I), f[P] || (T = void 0))
              : D && f[_].unshiftNode(I),
              T && (T = T.value);
          }
          return T;
        }
        function A(f, E) {
          if (!E || (!E.maxAge && !f[B])) return !1;
          var D = !1,
            I = Date.now() - E.now;
          return E.maxAge ? (D = I > E.maxAge) : (D = f[B] && I > f[B]), D;
        }
        function l(f) {
          if (f[p] > f[y])
            for (var E = f[_].tail; f[p] > f[y] && E !== null; ) {
              var D = E.prev;
              c(f, E), (E = D);
            }
        }
        function c(f, E) {
          if (E) {
            var D = E.value;
            f[d] && f[d](D.key, D.value),
              (f[p] -= D.length),
              f[a].delete(D.key),
              f[_].removeNode(E);
          }
        }
        function h(f, E, D, I, T) {
          (this.key = f),
            (this.value = E),
            (this.length = D),
            (this.now = I),
            (this.maxAge = T || 0);
        }
      }.call(this, e('../../node_modules/process/browser.js')));
    },
    '../../node_modules/lru-cache/node_modules/yallist/yallist.js': function (
      g,
      o,
    ) {
      (g.exports = e), (e.Node = r), (e.create = e);
      function e(C) {
        var b = this;
        if (
          (b instanceof e || (b = new e()),
          (b.tail = null),
          (b.head = null),
          (b.length = 0),
          C && typeof C.forEach == 'function')
        )
          C.forEach(function (p) {
            b.push(p);
          });
        else if (arguments.length > 0)
          for (var m = 0, y = arguments.length; m < y; m++)
            b.push(arguments[m]);
        return b;
      }
      (e.prototype.removeNode = function (C) {
        if (C.list !== this)
          throw new Error('removing node which does not belong to this list');
        var b = C.next,
          m = C.prev;
        b && (b.prev = m),
          m && (m.next = b),
          C === this.head && (this.head = b),
          C === this.tail && (this.tail = m),
          C.list.length--,
          (C.next = null),
          (C.prev = null),
          (C.list = null);
      }),
        (e.prototype.unshiftNode = function (C) {
          if (C !== this.head) {
            C.list && C.list.removeNode(C);
            var b = this.head;
            (C.list = this),
              (C.next = b),
              b && (b.prev = C),
              (this.head = C),
              this.tail || (this.tail = C),
              this.length++;
          }
        }),
        (e.prototype.pushNode = function (C) {
          if (C !== this.tail) {
            C.list && C.list.removeNode(C);
            var b = this.tail;
            (C.list = this),
              (C.prev = b),
              b && (b.next = C),
              (this.tail = C),
              this.head || (this.head = C),
              this.length++;
          }
        }),
        (e.prototype.push = function () {
          for (var C = 0, b = arguments.length; C < b; C++)
            t(this, arguments[C]);
          return this.length;
        }),
        (e.prototype.unshift = function () {
          for (var C = 0, b = arguments.length; C < b; C++)
            n(this, arguments[C]);
          return this.length;
        }),
        (e.prototype.pop = function () {
          if (!!this.tail) {
            var C = this.tail.value;
            return (
              (this.tail = this.tail.prev),
              this.tail ? (this.tail.next = null) : (this.head = null),
              this.length--,
              C
            );
          }
        }),
        (e.prototype.shift = function () {
          if (!!this.head) {
            var C = this.head.value;
            return (
              (this.head = this.head.next),
              this.head ? (this.head.prev = null) : (this.tail = null),
              this.length--,
              C
            );
          }
        }),
        (e.prototype.forEach = function (C, b) {
          b = b || this;
          for (var m = this.head, y = 0; m !== null; y++)
            C.call(b, m.value, y, this), (m = m.next);
        }),
        (e.prototype.forEachReverse = function (C, b) {
          b = b || this;
          for (var m = this.tail, y = this.length - 1; m !== null; y--)
            C.call(b, m.value, y, this), (m = m.prev);
        }),
        (e.prototype.get = function (C) {
          for (var b = 0, m = this.head; m !== null && b < C; b++) m = m.next;
          if (b === C && m !== null) return m.value;
        }),
        (e.prototype.getReverse = function (C) {
          for (var b = 0, m = this.tail; m !== null && b < C; b++) m = m.prev;
          if (b === C && m !== null) return m.value;
        }),
        (e.prototype.map = function (C, b) {
          b = b || this;
          for (var m = new e(), y = this.head; y !== null; )
            m.push(C.call(b, y.value, this)), (y = y.next);
          return m;
        }),
        (e.prototype.mapReverse = function (C, b) {
          b = b || this;
          for (var m = new e(), y = this.tail; y !== null; )
            m.push(C.call(b, y.value, this)), (y = y.prev);
          return m;
        }),
        (e.prototype.reduce = function (C, b) {
          var m,
            y = this.head;
          if (arguments.length > 1) m = b;
          else if (this.head) (y = this.head.next), (m = this.head.value);
          else
            throw new TypeError('Reduce of empty list with no initial value');
          for (var p = 0; y !== null; p++) (m = C(m, y.value, p)), (y = y.next);
          return m;
        }),
        (e.prototype.reduceReverse = function (C, b) {
          var m,
            y = this.tail;
          if (arguments.length > 1) m = b;
          else if (this.tail) (y = this.tail.prev), (m = this.tail.value);
          else
            throw new TypeError('Reduce of empty list with no initial value');
          for (var p = this.length - 1; y !== null; p--)
            (m = C(m, y.value, p)), (y = y.prev);
          return m;
        }),
        (e.prototype.toArray = function () {
          for (
            var C = new Array(this.length), b = 0, m = this.head;
            m !== null;
            b++
          )
            (C[b] = m.value), (m = m.next);
          return C;
        }),
        (e.prototype.toArrayReverse = function () {
          for (
            var C = new Array(this.length), b = 0, m = this.tail;
            m !== null;
            b++
          )
            (C[b] = m.value), (m = m.prev);
          return C;
        }),
        (e.prototype.slice = function (C, b) {
          (b = b || this.length),
            b < 0 && (b += this.length),
            (C = C || 0),
            C < 0 && (C += this.length);
          var m = new e();
          if (b < C || b < 0) return m;
          C < 0 && (C = 0), b > this.length && (b = this.length);
          for (var y = 0, p = this.head; p !== null && y < C; y++) p = p.next;
          for (; p !== null && y < b; y++, p = p.next) m.push(p.value);
          return m;
        }),
        (e.prototype.sliceReverse = function (C, b) {
          (b = b || this.length),
            b < 0 && (b += this.length),
            (C = C || 0),
            C < 0 && (C += this.length);
          var m = new e();
          if (b < C || b < 0) return m;
          C < 0 && (C = 0), b > this.length && (b = this.length);
          for (var y = this.length, p = this.tail; p !== null && y > b; y--)
            p = p.prev;
          for (; p !== null && y > C; y--, p = p.prev) m.push(p.value);
          return m;
        }),
        (e.prototype.reverse = function () {
          for (
            var C = this.head, b = this.tail, m = C;
            m !== null;
            m = m.prev
          ) {
            var y = m.prev;
            (m.prev = m.next), (m.next = y);
          }
          return (this.head = b), (this.tail = C), this;
        });
      function t(C, b) {
        (C.tail = new r(b, C.tail, null, C)),
          C.head || (C.head = C.tail),
          C.length++;
      }
      function n(C, b) {
        (C.head = new r(b, null, C.head, C)),
          C.tail || (C.tail = C.head),
          C.length++;
      }
      function r(C, b, m, y) {
        if (!(this instanceof r)) return new r(C, b, m, y);
        (this.list = y),
          (this.value = C),
          b ? ((b.next = this), (this.prev = b)) : (this.prev = null),
          m ? ((m.prev = this), (this.next = m)) : (this.next = null);
      }
    },
    '../../node_modules/memoize-one/esm/index.js': function (g, o, e) {
      e.r(o);
      var t = function (r, C) {
        return r === C;
      };
      o.default = function (n) {
        var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
          C = void 0,
          b = [],
          m = void 0,
          y = !1,
          p = function (B, d) {
            return r(B, b[d]);
          },
          x = function () {
            for (var B = arguments.length, d = Array(B), i = 0; i < B; i++)
              d[i] = arguments[i];
            return (
              (y && C === this && d.length === b.length && d.every(p)) ||
                ((y = !0), (C = this), (b = d), (m = n.apply(this, d))),
              m
            );
          };
        return x;
      };
    },
    '../../node_modules/process/browser.js': function (g, o) {
      var e = (g.exports = {}),
        t,
        n;
      function r() {
        throw new Error('setTimeout has not been defined');
      }
      function C() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          typeof setTimeout == 'function' ? (t = setTimeout) : (t = r);
        } catch {
          t = r;
        }
        try {
          typeof clearTimeout == 'function' ? (n = clearTimeout) : (n = C);
        } catch {
          n = C;
        }
      })();
      function b(a) {
        if (t === setTimeout) return setTimeout(a, 0);
        if ((t === r || !t) && setTimeout)
          return (t = setTimeout), setTimeout(a, 0);
        try {
          return t(a, 0);
        } catch {
          try {
            return t.call(null, a, 0);
          } catch {
            return t.call(this, a, 0);
          }
        }
      }
      function m(a) {
        if (n === clearTimeout) return clearTimeout(a);
        if ((n === C || !n) && clearTimeout)
          return (n = clearTimeout), clearTimeout(a);
        try {
          return n(a);
        } catch {
          try {
            return n.call(null, a);
          } catch {
            return n.call(this, a);
          }
        }
      }
      var y = [],
        p = !1,
        x,
        P = -1;
      function B() {
        !p ||
          !x ||
          ((p = !1), x.length ? (y = x.concat(y)) : (P = -1), y.length && d());
      }
      function d() {
        if (!p) {
          var a = b(B);
          p = !0;
          for (var s = y.length; s; ) {
            for (x = y, y = []; ++P < s; ) x && x[P].run();
            (P = -1), (s = y.length);
          }
          (x = null), (p = !1), m(a);
        }
      }
      e.nextTick = function (a) {
        var s = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var u = 1; u < arguments.length; u++) s[u - 1] = arguments[u];
        y.push(new i(a, s)), y.length === 1 && !p && b(d);
      };
      function i(a, s) {
        (this.fun = a), (this.array = s);
      }
      (i.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
        (e.title = 'browser'),
        (e.browser = !0),
        (e.env = {}),
        (e.argv = []),
        (e.version = ''),
        (e.versions = {});
      function _() {}
      (e.on = _),
        (e.addListener = _),
        (e.once = _),
        (e.off = _),
        (e.removeListener = _),
        (e.removeAllListeners = _),
        (e.emit = _),
        (e.prependListener = _),
        (e.prependOnceListener = _),
        (e.listeners = function (a) {
          return [];
        }),
        (e.binding = function (a) {
          throw new Error('process.binding is not supported');
        }),
        (e.cwd = function () {
          return '/';
        }),
        (e.chdir = function (a) {
          throw new Error('process.chdir is not supported');
        }),
        (e.umask = function () {
          return 0;
        });
    },
    '../../node_modules/prop-types/factoryWithThrowingShims.js': function (
      g,
      o,
      e,
    ) {
      var t = e('../../node_modules/prop-types/lib/ReactPropTypesSecret.js');
      function n() {}
      function r() {}
      (r.resetWarningCache = n),
        (g.exports = function () {
          function C(y, p, x, P, B, d) {
            if (d !== t) {
              var i = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
              );
              throw ((i.name = 'Invariant Violation'), i);
            }
          }
          C.isRequired = C;
          function b() {
            return C;
          }
          var m = {
            array: C,
            bool: C,
            func: C,
            number: C,
            object: C,
            string: C,
            symbol: C,
            any: C,
            arrayOf: b,
            element: C,
            elementType: C,
            instanceOf: b,
            node: C,
            objectOf: b,
            oneOf: b,
            oneOfType: b,
            shape: b,
            exact: b,
            checkPropTypes: r,
            resetWarningCache: n,
          };
          return (m.PropTypes = m), m;
        });
    },
    '../../node_modules/prop-types/index.js': function (g, o, e) {
      g.exports = e(
        '../../node_modules/prop-types/factoryWithThrowingShims.js',
      )();
    },
    '../../node_modules/prop-types/lib/ReactPropTypesSecret.js': function (
      g,
      o,
      e,
    ) {
      var t = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
      g.exports = t;
    },
    '../../node_modules/pseudomap/map.js': function (g, o, e) {
      (function (t) {
        t.env.npm_package_name === 'pseudomap' &&
          t.env.npm_lifecycle_script === 'test' &&
          (t.env.TEST_PSEUDOMAP = 'true'),
          typeof Map == 'function' && !t.env.TEST_PSEUDOMAP
            ? (g.exports = Map)
            : (g.exports = e('../../node_modules/pseudomap/pseudomap.js'));
      }.call(this, e('../../node_modules/process/browser.js')));
    },
    '../../node_modules/pseudomap/pseudomap.js': function (g, o) {
      var e = Object.prototype.hasOwnProperty;
      g.exports = t;
      function t(m) {
        if (!(this instanceof t))
          throw new TypeError("Constructor PseudoMap requires 'new'");
        if ((this.clear(), m))
          if (m instanceof t || (typeof Map == 'function' && m instanceof Map))
            m.forEach(function (y, p) {
              this.set(p, y);
            }, this);
          else if (Array.isArray(m))
            m.forEach(function (y) {
              this.set(y[0], y[1]);
            }, this);
          else throw new TypeError('invalid argument');
      }
      (t.prototype.forEach = function (m, y) {
        (y = y || this),
          Object.keys(this._data).forEach(function (p) {
            p !== 'size' && m.call(y, this._data[p].value, this._data[p].key);
          }, this);
      }),
        (t.prototype.has = function (m) {
          return !!C(this._data, m);
        }),
        (t.prototype.get = function (m) {
          var y = C(this._data, m);
          return y && y.value;
        }),
        (t.prototype.set = function (m, y) {
          b(this._data, m, y);
        }),
        (t.prototype.delete = function (m) {
          var y = C(this._data, m);
          y && (delete this._data[y._index], this._data.size--);
        }),
        (t.prototype.clear = function () {
          var m = Object.create(null);
          (m.size = 0),
            Object.defineProperty(this, '_data', {
              value: m,
              enumerable: !1,
              configurable: !0,
              writable: !1,
            });
        }),
        Object.defineProperty(t.prototype, 'size', {
          get: function () {
            return this._data.size;
          },
          set: function (y) {},
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.values = t.prototype.keys = t.prototype.entries = function () {
          throw new Error('iterators are not implemented in this version');
        });
      function n(m, y) {
        return m === y || (m !== m && y !== y);
      }
      function r(m, y, p) {
        (this.key = m), (this.value = y), (this._index = p);
      }
      function C(m, y) {
        for (var p = 0, x = '_' + y, P = x; e.call(m, P); P = x + p++)
          if (n(m[P].key, y)) return m[P];
      }
      function b(m, y, p) {
        for (var x = 0, P = '_' + y, B = P; e.call(m, B); B = P + x++)
          if (n(m[B].key, y)) {
            m[B].value = p;
            return;
          }
        m.size++, (m[B] = new r(y, p, B));
      }
    },
    '../../node_modules/raw-loader/dist/cjs.js!../react-devtools-shared/src/devtools/views/root.css': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        (o.default = `:root {
  /**
   * IMPORTANT: When new theme variables are added below\u2013 also add them to SettingsContext updateThemeVariables()
   */

  /* Light theme */
  --light-color-attribute-name: #ef6632;
  --light-color-attribute-name-inverted: rgba(255, 255, 255, 0.7);
  --light-color-attribute-value: #1a1aa6;
  --light-color-attribute-value-inverted: #ffffff;
  --light-color-attribute-editable-value: #1a1aa6;
  --light-color-background: #ffffff;
  --light-color-background-hover: rgba(0, 136, 250, 0.1);
  --light-color-background-inactive: #e5e5e5;
  --light-color-background-invalid: #fff0f0;
  --light-color-background-selected: #0088fa;
  --light-color-button-background: #ffffff;
  --light-color-button-background-focus: #ededed;
  --light-color-button: #5f6673;
  --light-color-button-disabled: #cfd1d5;
  --light-color-button-active: #0088fa;
  --light-color-button-focus: #23272f;
  --light-color-button-hover: #23272f;
  --light-color-border: #eeeeee;
  --light-color-commit-did-not-render-fill: #cfd1d5;
  --light-color-commit-did-not-render-fill-text: #000000;
  --light-color-commit-did-not-render-pattern: #cfd1d5;
  --light-color-commit-did-not-render-pattern-text: #333333;
  --light-color-commit-gradient-0: #37afa9;
  --light-color-commit-gradient-1: #63b19e;
  --light-color-commit-gradient-2: #80b393;
  --light-color-commit-gradient-3: #97b488;
  --light-color-commit-gradient-4: #abb67d;
  --light-color-commit-gradient-5: #beb771;
  --light-color-commit-gradient-6: #cfb965;
  --light-color-commit-gradient-7: #dfba57;
  --light-color-commit-gradient-8: #efbb49;
  --light-color-commit-gradient-9: #febc38;
  --light-color-commit-gradient-text: #000000;
  --light-color-component-name: #6a51b2;
  --light-color-component-name-inverted: #ffffff;
  --light-color-component-badge-background: rgba(0, 0, 0, 0.1);
  --light-color-component-badge-background-inverted: rgba(255, 255, 255, 0.25);
  --light-color-component-badge-count: #777d88;
  --light-color-component-badge-count-inverted: rgba(255, 255, 255, 0.7);
  --light-color-context-background: rgba(0,0,0,.9);
  --light-color-context-background-hover: rgba(255, 255, 255, 0.1);
  --light-color-context-background-selected: #178fb9;
  --light-color-context-border: #3d424a;
  --light-color-context-text: #ffffff;
  --light-color-context-text-selected: #ffffff;
  --light-color-dim: #777d88;
  --light-color-dimmer: #cfd1d5;
  --light-color-dimmest: #eff0f1;
  --light-color-expand-collapse-toggle: #777d88;
  --light-color-modal-background: rgba(255, 255, 255, 0.75);
  --light-color-record-active: #fc3a4b;
  --light-color-record-hover: #3578e5;
  --light-color-record-inactive: #0088fa;
  --light-color-scroll-thumb: #c2c2c2;
  --light-color-scroll-track: #fafafa;
  --light-color-search-match: yellow;
  --light-color-search-match-current: #f7923b;
  --light-color-selected-tree-highlight-active: rgba(0, 136, 250, 0.1);
  --light-color-selected-tree-highlight-inactive: rgba(0, 0, 0, 0.05);
  --light-color-shadow: rgba(0, 0, 0, 0.25);
  --light-color-tab-selected-border: #0088fa;
  --light-color-text: #000000;
  --light-color-text-invalid: #ff0000;
  --light-color-text-selected: #ffffff;
  --light-color-toggle-background-invalid: #fc3a4b;
  --light-color-toggle-background-on: #0088fa;
  --light-color-toggle-background-off: #cfd1d5;
  --light-color-toggle-text: #ffffff;
  --light-color-tooltip-background: rgba(0, 0, 0, 0.9);
  --light-color-tooltip-text: #ffffff;

  /* Dark theme */
  --dark-color-attribute-name: #9d87d2;
  --dark-color-attribute-name-inverted: #282828;
  --dark-color-attribute-value: #cedae0;
  --dark-color-attribute-value-inverted: #ffffff;
  --dark-color-attribute-editable-value: yellow;
  --dark-color-background: #282c34;
  --dark-color-background-hover: rgba(255, 255, 255, 0.1);
  --dark-color-background-inactive: #3d424a;
  --dark-color-background-invalid: #5c0000;
  --dark-color-background-selected: #178fb9;
  --dark-color-button-background: #282c34;
  --dark-color-button-background-focus: #3d424a;
  --dark-color-button: #afb3b9;
  --dark-color-button-active: #61dafb;
  --dark-color-button-disabled: #4f5766;
  --dark-color-button-focus: #a2e9fc;
  --dark-color-button-hover: #ededed;
  --dark-color-border: #3d424a;
  --dark-color-commit-did-not-render-fill: #777d88;
  --dark-color-commit-did-not-render-fill-text: #000000;
  --dark-color-commit-did-not-render-pattern: #666c77;
  --dark-color-commit-did-not-render-pattern-text: #ffffff;
  --dark-color-commit-gradient-0: #37afa9;
  --dark-color-commit-gradient-1: #63b19e;
  --dark-color-commit-gradient-2: #80b393;
  --dark-color-commit-gradient-3: #97b488;
  --dark-color-commit-gradient-4: #abb67d;
  --dark-color-commit-gradient-5: #beb771;
  --dark-color-commit-gradient-6: #cfb965;
  --dark-color-commit-gradient-7: #dfba57;
  --dark-color-commit-gradient-8: #efbb49;
  --dark-color-commit-gradient-9: #febc38;
  --dark-color-commit-gradient-text: #000000;
  --dark-color-component-name: #61dafb;
  --dark-color-component-name-inverted: #282828;
  --dark-color-component-badge-background: rgba(255, 255, 255, 0.25);
  --dark-color-component-badge-background-inverted: rgba(0, 0, 0, 0.25);
  --dark-color-component-badge-count: #8f949d;
  --dark-color-component-badge-count-inverted: rgba(255, 255, 255, 0.7);
  --dark-color-context-background: rgba(255,255,255,.9);
  --dark-color-context-background-hover: rgba(0, 136, 250, 0.1);
  --dark-color-context-background-selected: #0088fa;
  --dark-color-context-border: #eeeeee;
  --dark-color-context-text: #000000;
  --dark-color-context-text-selected: #ffffff;
  --dark-color-dim: #8f949d;
  --dark-color-dimmer: #777d88;
  --dark-color-dimmest: #4f5766;
  --dark-color-expand-collapse-toggle: #8f949d;
  --dark-color-modal-background: rgba(0, 0, 0, 0.75);
  --dark-color-record-active: #fc3a4b;
  --dark-color-record-hover: #a2e9fc;
  --dark-color-record-inactive: #61dafb;
  --dark-color-scroll-thumb: #afb3b9;
  --dark-color-scroll-track: #313640;
  --dark-color-search-match: yellow;
  --dark-color-search-match-current: #f7923b;
  --dark-color-selected-tree-highlight-active: rgba(23, 143, 185, 0.15);
  --dark-color-selected-tree-highlight-inactive: rgba(255, 255, 255, 0.05);
  --dark-color-shadow: rgba(0, 0, 0, 0.5);
  --dark-color-tab-selected-border: #178fb9;
  --dark-color-text: #ffffff;
  --dark-color-text-invalid: #ff8080;
  --dark-color-text-selected: #ffffff;
  --dark-color-toggle-background-invalid: #fc3a4b;
  --dark-color-toggle-background-on: #178fb9;
  --dark-color-toggle-background-off: #777d88;
  --dark-color-toggle-text: #ffffff;
  --dark-color-tooltip-background: rgba(255, 255, 255, 0.9);
  --dark-color-tooltip-text: #000000;

  /* Font smoothing */
  --light-font-smoothing: auto;
  --dark-font-smoothing: antialiased;
  --font-smoothing: auto;

  /* Compact density */
  --compact-font-size-monospace-small: 9px;
  --compact-font-size-monospace-normal: 11px;
  --compact-font-size-monospace-large: 15px;
  --compact-font-size-sans-small: 10px;
  --compact-font-size-sans-normal: 12px;
  --compact-font-size-sans-large: 14px;
  --compact-line-height-data: 18px;
  --compact-root-font-size: 16px;

  /* Comfortable density */
  --comfortable-font-size-monospace-small: 10px;
  --comfortable-font-size-monospace-normal: 13px;
  --comfortable-font-size-monospace-large: 17px;
  --comfortable-font-size-sans-small: 12px;
  --comfortable-font-size-sans-normal: 14px;
  --comfortable-font-size-sans-large: 16px;
  --comfortable-line-height-data: 22px;
  --comfortable-root-font-size: 20px;

  /* GitHub.com system fonts */
  --font-family-monospace: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,
    Courier, monospace;
  --font-family-sans: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;

  /* Constant values shared between JS and CSS */
  --interaction-commit-size: 10px;
  --interaction-label-width: 200px;
}

* {
  box-sizing: border-box;

  -webkit-font-smoothing: var(--font-smoothing);
}
`);
    },
    '../../node_modules/react-virtualized-auto-sizer/dist/index.esm.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        function (t) {
          var n = e('react');
          function r(B) {
            return (
              typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? (r = function (i) {
                    return typeof i;
                  })
                : (r = function (i) {
                    return i &&
                      typeof Symbol == 'function' &&
                      i.constructor === Symbol &&
                      i !== Symbol.prototype
                      ? 'symbol'
                      : typeof i;
                  }),
              r(B)
            );
          }
          function C(B) {
            var d;
            typeof window < 'u'
              ? (d = window)
              : typeof self < 'u'
              ? (d = self)
              : (d = t);
            var i = typeof document < 'u' && document.attachEvent;
            if (!i) {
              var _ = (function () {
                  var K =
                    d.requestAnimationFrame ||
                    d.mozRequestAnimationFrame ||
                    d.webkitRequestAnimationFrame ||
                    function (S) {
                      return d.setTimeout(S, 20);
                    };
                  return function (S) {
                    return K(S);
                  };
                })(),
                a = (function () {
                  var K =
                    d.cancelAnimationFrame ||
                    d.mozCancelAnimationFrame ||
                    d.webkitCancelAnimationFrame ||
                    d.clearTimeout;
                  return function (S) {
                    return K(S);
                  };
                })(),
                s = function (S) {
                  var F = S.__resizeTriggers__,
                    k = F.firstElementChild,
                    H = F.lastElementChild,
                    w = k.firstElementChild;
                  (H.scrollLeft = H.scrollWidth),
                    (H.scrollTop = H.scrollHeight),
                    (w.style.width = k.offsetWidth + 1 + 'px'),
                    (w.style.height = k.offsetHeight + 1 + 'px'),
                    (k.scrollLeft = k.scrollWidth),
                    (k.scrollTop = k.scrollHeight);
                },
                u = function (S) {
                  return (
                    S.offsetWidth != S.__resizeLast__.width ||
                    S.offsetHeight != S.__resizeLast__.height
                  );
                },
                O = function (S) {
                  if (
                    !(
                      S.target.className.indexOf('contract-trigger') < 0 &&
                      S.target.className.indexOf('expand-trigger') < 0
                    )
                  ) {
                    var F = this;
                    s(this),
                      this.__resizeRAF__ && a(this.__resizeRAF__),
                      (this.__resizeRAF__ = _(function () {
                        u(F) &&
                          ((F.__resizeLast__.width = F.offsetWidth),
                          (F.__resizeLast__.height = F.offsetHeight),
                          F.__resizeListeners__.forEach(function (k) {
                            k.call(F, S);
                          }));
                      }));
                  }
                },
                v = !1,
                A = '',
                l = 'animationstart',
                c = 'Webkit Moz O ms'.split(' '),
                h = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(
                  ' ',
                ),
                f = '';
              {
                var E = document.createElement('fakeelement');
                if ((E.style.animationName !== void 0 && (v = !0), v === !1)) {
                  for (var D = 0; D < c.length; D++)
                    if (E.style[c[D] + 'AnimationName'] !== void 0) {
                      (f = c[D]),
                        (A = '-' + f.toLowerCase() + '-'),
                        (l = h[D]),
                        (v = !0);
                      break;
                    }
                }
              }
              var I = 'resizeanim',
                T =
                  '@' +
                  A +
                  'keyframes ' +
                  I +
                  ' { from { opacity: 0; } to { opacity: 0; } } ',
                R = A + 'animation: 1ms ' + I + '; ';
            }
            var j = function (S) {
                if (!S.getElementById('detectElementResize')) {
                  var F =
                      (T || '') +
                      '.resize-triggers { ' +
                      (R || '') +
                      'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
                    k = S.head || S.getElementsByTagName('head')[0],
                    H = S.createElement('style');
                  (H.id = 'detectElementResize'),
                    (H.type = 'text/css'),
                    B != null && H.setAttribute('nonce', B),
                    H.styleSheet
                      ? (H.styleSheet.cssText = F)
                      : H.appendChild(S.createTextNode(F)),
                    k.appendChild(H);
                }
              },
              z = function (S, F) {
                if (i) S.attachEvent('onresize', F);
                else {
                  if (!S.__resizeTriggers__) {
                    var k = S.ownerDocument,
                      H = d.getComputedStyle(S);
                    H &&
                      H.position == 'static' &&
                      (S.style.position = 'relative'),
                      j(k),
                      (S.__resizeLast__ = {}),
                      (S.__resizeListeners__ = []),
                      ((S.__resizeTriggers__ = k.createElement(
                        'div',
                      )).className = 'resize-triggers'),
                      (S.__resizeTriggers__.innerHTML =
                        '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>'),
                      S.appendChild(S.__resizeTriggers__),
                      s(S),
                      S.addEventListener('scroll', O, !0),
                      l &&
                        ((S.__resizeTriggers__.__animationListener__ = function (
                          L,
                        ) {
                          L.animationName == I && s(S);
                        }),
                        S.__resizeTriggers__.addEventListener(
                          l,
                          S.__resizeTriggers__.__animationListener__,
                        ));
                  }
                  S.__resizeListeners__.push(F);
                }
              },
              W = function (S, F) {
                if (i) S.detachEvent('onresize', F);
                else if (
                  (S.__resizeListeners__.splice(
                    S.__resizeListeners__.indexOf(F),
                    1,
                  ),
                  !S.__resizeListeners__.length)
                ) {
                  S.removeEventListener('scroll', O, !0),
                    S.__resizeTriggers__.__animationListener__ &&
                      (S.__resizeTriggers__.removeEventListener(
                        l,
                        S.__resizeTriggers__.__animationListener__,
                      ),
                      (S.__resizeTriggers__.__animationListener__ = null));
                  try {
                    S.__resizeTriggers__ = !S.removeChild(S.__resizeTriggers__);
                  } catch {}
                }
              };
            return { addResizeListener: z, removeResizeListener: W };
          }
          var b = function (d, i) {
              if (!(d instanceof i))
                throw new TypeError('Cannot call a class as a function');
            },
            m = (function () {
              function B(d, i) {
                for (var _ = 0; _ < i.length; _++) {
                  var a = i[_];
                  (a.enumerable = a.enumerable || !1),
                    (a.configurable = !0),
                    'value' in a && (a.writable = !0),
                    Object.defineProperty(d, a.key, a);
                }
              }
              return function (d, i, _) {
                return i && B(d.prototype, i), _ && B(d, _), d;
              };
            })(),
            y =
              Object.assign ||
              function (B) {
                for (var d = 1; d < arguments.length; d++) {
                  var i = arguments[d];
                  for (var _ in i)
                    Object.prototype.hasOwnProperty.call(i, _) && (B[_] = i[_]);
                }
                return B;
              },
            p = function (d, i) {
              if (typeof i != 'function' && i !== null)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    r(i),
                );
              (d.prototype = Object.create(i && i.prototype, {
                constructor: {
                  value: d,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                i &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(d, i)
                    : (d.__proto__ = i));
            },
            x = function (d, i) {
              if (!d)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return i && (r(i) === 'object' || typeof i == 'function') ? i : d;
            },
            P = (function (B) {
              p(d, B);
              function d() {
                var i, _, a, s;
                b(this, d);
                for (var u = arguments.length, O = Array(u), v = 0; v < u; v++)
                  O[v] = arguments[v];
                return (
                  (s =
                    ((_ =
                      ((a = x(
                        this,
                        (i =
                          d.__proto__ || Object.getPrototypeOf(d)).call.apply(
                          i,
                          [this].concat(O),
                        ),
                      )),
                      a)),
                    (a.state = {
                      height: a.props.defaultHeight || 0,
                      width: a.props.defaultWidth || 0,
                    }),
                    (a._onResize = function () {
                      var A = a.props,
                        l = A.disableHeight,
                        c = A.disableWidth,
                        h = A.onResize;
                      if (a._parentNode) {
                        var f = a._parentNode.offsetHeight || 0,
                          E = a._parentNode.offsetWidth || 0,
                          D = window.getComputedStyle(a._parentNode) || {},
                          I = parseInt(D.paddingLeft, 10) || 0,
                          T = parseInt(D.paddingRight, 10) || 0,
                          R = parseInt(D.paddingTop, 10) || 0,
                          j = parseInt(D.paddingBottom, 10) || 0,
                          z = f - R - j,
                          W = E - I - T;
                        ((!l && a.state.height !== z) ||
                          (!c && a.state.width !== W)) &&
                          (a.setState({ height: f - R - j, width: E - I - T }),
                          h({ height: f, width: E }));
                      }
                    }),
                    (a._setRef = function (A) {
                      a._autoSizer = A;
                    }),
                    _)),
                  x(a, s)
                );
              }
              return (
                m(d, [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      var _ = this.props.nonce;
                      this._autoSizer &&
                        this._autoSizer.parentNode &&
                        this._autoSizer.parentNode.ownerDocument &&
                        this._autoSizer.parentNode.ownerDocument.defaultView &&
                        this._autoSizer.parentNode instanceof
                          this._autoSizer.parentNode.ownerDocument.defaultView
                            .HTMLElement &&
                        ((this._parentNode = this._autoSizer.parentNode),
                        (this._detectElementResize = C(_)),
                        this._detectElementResize.addResizeListener(
                          this._parentNode,
                          this._onResize,
                        ),
                        this._onResize());
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function () {
                      this._detectElementResize &&
                        this._parentNode &&
                        this._detectElementResize.removeResizeListener(
                          this._parentNode,
                          this._onResize,
                        );
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var _ = this.props,
                        a = _.children,
                        s = _.className,
                        u = _.disableHeight,
                        O = _.disableWidth,
                        v = _.style,
                        A = this.state,
                        l = A.height,
                        c = A.width,
                        h = { overflow: 'visible' },
                        f = {},
                        E = !1;
                      return (
                        u ||
                          (l === 0 && (E = !0), (h.height = 0), (f.height = l)),
                        O ||
                          (c === 0 && (E = !0), (h.width = 0), (f.width = c)),
                        Object(n.createElement)(
                          'div',
                          {
                            className: s,
                            ref: this._setRef,
                            style: y({}, h, v),
                          },
                          !E && a(f),
                        )
                      );
                    },
                  },
                ]),
                d
              );
            })(n.PureComponent);
          (P.defaultProps = {
            onResize: function () {},
            disableHeight: !1,
            disableWidth: !1,
            style: {},
          }),
            (o.default = P);
        }.call(this, e('../../node_modules/webpack/buildin/global.js'));
    },
    '../../node_modules/setimmediate/setImmediate.js': function (g, o, e) {
      (function (t, n) {
        (function (r, C) {
          if (r.setImmediate) return;
          var b = 1,
            m = {},
            y = !1,
            p = r.document,
            x;
          function P(l) {
            typeof l != 'function' && (l = new Function('' + l));
            for (
              var c = new Array(arguments.length - 1), h = 0;
              h < c.length;
              h++
            )
              c[h] = arguments[h + 1];
            var f = { callback: l, args: c };
            return (m[b] = f), x(b), b++;
          }
          function B(l) {
            delete m[l];
          }
          function d(l) {
            var c = l.callback,
              h = l.args;
            switch (h.length) {
              case 0:
                c();
                break;
              case 1:
                c(h[0]);
                break;
              case 2:
                c(h[0], h[1]);
                break;
              case 3:
                c(h[0], h[1], h[2]);
                break;
              default:
                c.apply(C, h);
                break;
            }
          }
          function i(l) {
            if (y) setTimeout(i, 0, l);
            else {
              var c = m[l];
              if (c) {
                y = !0;
                try {
                  d(c);
                } finally {
                  B(l), (y = !1);
                }
              }
            }
          }
          function _() {
            x = function (c) {
              n.nextTick(function () {
                i(c);
              });
            };
          }
          function a() {
            if (r.postMessage && !r.importScripts) {
              var l = !0,
                c = r.onmessage;
              return (
                (r.onmessage = function () {
                  l = !1;
                }),
                r.postMessage('', '*'),
                (r.onmessage = c),
                l
              );
            }
          }
          function s() {
            var l = 'setImmediate$' + Math.random() + '$',
              c = function (f) {
                f.source === r &&
                  typeof f.data == 'string' &&
                  f.data.indexOf(l) === 0 &&
                  i(+f.data.slice(l.length));
              };
            r.addEventListener
              ? r.addEventListener('message', c, !1)
              : r.attachEvent('onmessage', c),
              (x = function (f) {
                r.postMessage(l + f, '*');
              });
          }
          function u() {
            var l = new MessageChannel();
            (l.port1.onmessage = function (c) {
              var h = c.data;
              i(h);
            }),
              (x = function (h) {
                l.port2.postMessage(h);
              });
          }
          function O() {
            var l = p.documentElement;
            x = function (h) {
              var f = p.createElement('script');
              (f.onreadystatechange = function () {
                i(h),
                  (f.onreadystatechange = null),
                  l.removeChild(f),
                  (f = null);
              }),
                l.appendChild(f);
            };
          }
          function v() {
            x = function (c) {
              setTimeout(i, 0, c);
            };
          }
          var A = Object.getPrototypeOf && Object.getPrototypeOf(r);
          (A = A && A.setTimeout ? A : r),
            {}.toString.call(r.process) === '[object process]'
              ? _()
              : a()
              ? s()
              : r.MessageChannel
              ? u()
              : p && 'onreadystatechange' in p.createElement('script')
              ? O()
              : v(),
            (A.setImmediate = P),
            (A.clearImmediate = B);
        })(typeof self > 'u' ? (typeof t > 'u' ? this : t) : self);
      }.call(
        this,
        e('../../node_modules/webpack/buildin/global.js'),
        e('../../node_modules/process/browser.js'),
      ));
    },
    '../../node_modules/style-loader/lib/addStyles.js': function (g, o, e) {
      var t = {},
        n = function (h) {
          var f;
          return function () {
            return typeof f > 'u' && (f = h.apply(this, arguments)), f;
          };
        },
        r = n(function () {
          return window && document && document.all && !window.atob;
        }),
        C = function (h, f) {
          return f ? f.querySelector(h) : document.querySelector(h);
        },
        b = (function (h) {
          var f = {};
          return function (E, D) {
            if (typeof E == 'function') return E();
            if (typeof f[E] > 'u') {
              var I = C.call(this, E, D);
              if (
                window.HTMLIFrameElement &&
                I instanceof window.HTMLIFrameElement
              )
                try {
                  I = I.contentDocument.head;
                } catch {
                  I = null;
                }
              f[E] = I;
            }
            return f[E];
          };
        })(),
        m = null,
        y = 0,
        p = [],
        x = e('../../node_modules/style-loader/lib/urls.js');
      g.exports = function (h, f) {
        if (typeof DEBUG < 'u' && DEBUG && typeof document != 'object')
          throw new Error(
            'The style-loader cannot be used in a non-browser environment',
          );
        (f = f || {}),
          (f.attrs = typeof f.attrs == 'object' ? f.attrs : {}),
          !f.singleton &&
            typeof f.singleton != 'boolean' &&
            (f.singleton = r()),
          f.insertInto || (f.insertInto = 'head'),
          f.insertAt || (f.insertAt = 'bottom');
        var E = B(h, f);
        return (
          P(E, f),
          function (I) {
            for (var T = [], R = 0; R < E.length; R++) {
              var j = E[R],
                z = t[j.id];
              z.refs--, T.push(z);
            }
            if (I) {
              var W = B(I, f);
              P(W, f);
            }
            for (var R = 0; R < T.length; R++) {
              var z = T[R];
              if (z.refs === 0) {
                for (var K = 0; K < z.parts.length; K++) z.parts[K]();
                delete t[z.id];
              }
            }
          }
        );
      };
      function P(h, f) {
        for (var E = 0; E < h.length; E++) {
          var D = h[E],
            I = t[D.id];
          if (I) {
            I.refs++;
            for (var T = 0; T < I.parts.length; T++) I.parts[T](D.parts[T]);
            for (; T < D.parts.length; T++) I.parts.push(O(D.parts[T], f));
          } else {
            for (var R = [], T = 0; T < D.parts.length; T++)
              R.push(O(D.parts[T], f));
            t[D.id] = { id: D.id, refs: 1, parts: R };
          }
        }
      }
      function B(h, f) {
        for (var E = [], D = {}, I = 0; I < h.length; I++) {
          var T = h[I],
            R = f.base ? T[0] + f.base : T[0],
            j = T[1],
            z = T[2],
            W = T[3],
            K = { css: j, media: z, sourceMap: W };
          D[R] ? D[R].parts.push(K) : E.push((D[R] = { id: R, parts: [K] }));
        }
        return E;
      }
      function d(h, f) {
        var E = b(h.insertInto);
        if (!E)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.",
          );
        var D = p[p.length - 1];
        if (h.insertAt === 'top')
          D
            ? D.nextSibling
              ? E.insertBefore(f, D.nextSibling)
              : E.appendChild(f)
            : E.insertBefore(f, E.firstChild),
            p.push(f);
        else if (h.insertAt === 'bottom') E.appendChild(f);
        else if (typeof h.insertAt == 'object' && h.insertAt.before) {
          var I = b(h.insertAt.before, E);
          E.insertBefore(f, I);
        } else
          throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
      }
      function i(h) {
        if (h.parentNode === null) return !1;
        h.parentNode.removeChild(h);
        var f = p.indexOf(h);
        f >= 0 && p.splice(f, 1);
      }
      function _(h) {
        var f = document.createElement('style');
        if (
          (h.attrs.type === void 0 && (h.attrs.type = 'text/css'),
          h.attrs.nonce === void 0)
        ) {
          var E = u();
          E && (h.attrs.nonce = E);
        }
        return s(f, h.attrs), d(h, f), f;
      }
      function a(h) {
        var f = document.createElement('link');
        return (
          h.attrs.type === void 0 && (h.attrs.type = 'text/css'),
          (h.attrs.rel = 'stylesheet'),
          s(f, h.attrs),
          d(h, f),
          f
        );
      }
      function s(h, f) {
        Object.keys(f).forEach(function (E) {
          h.setAttribute(E, f[E]);
        });
      }
      function u() {
        return e.nc;
      }
      function O(h, f) {
        var E, D, I, T;
        if (f.transform && h.css)
          if (
            ((T =
              typeof f.transform == 'function'
                ? f.transform(h.css)
                : f.transform.default(h.css)),
            T)
          )
            h.css = T;
          else return function () {};
        if (f.singleton) {
          var R = y++;
          (E = m || (m = _(f))),
            (D = A.bind(null, E, R, !1)),
            (I = A.bind(null, E, R, !0));
        } else
          h.sourceMap &&
          typeof URL == 'function' &&
          typeof URL.createObjectURL == 'function' &&
          typeof URL.revokeObjectURL == 'function' &&
          typeof Blob == 'function' &&
          typeof btoa == 'function'
            ? ((E = a(f)),
              (D = c.bind(null, E, f)),
              (I = function () {
                i(E), E.href && URL.revokeObjectURL(E.href);
              }))
            : ((E = _(f)),
              (D = l.bind(null, E)),
              (I = function () {
                i(E);
              }));
        return (
          D(h),
          function (z) {
            if (z) {
              if (
                z.css === h.css &&
                z.media === h.media &&
                z.sourceMap === h.sourceMap
              )
                return;
              D((h = z));
            } else I();
          }
        );
      }
      var v = (function () {
        var h = [];
        return function (f, E) {
          return (
            (h[f] = E),
            h.filter(Boolean).join(`
`)
          );
        };
      })();
      function A(h, f, E, D) {
        var I = E ? '' : D.css;
        if (h.styleSheet) h.styleSheet.cssText = v(f, I);
        else {
          var T = document.createTextNode(I),
            R = h.childNodes;
          R[f] && h.removeChild(R[f]),
            R.length ? h.insertBefore(T, R[f]) : h.appendChild(T);
        }
      }
      function l(h, f) {
        var E = f.css,
          D = f.media;
        if ((D && h.setAttribute('media', D), h.styleSheet))
          h.styleSheet.cssText = E;
        else {
          for (; h.firstChild; ) h.removeChild(h.firstChild);
          h.appendChild(document.createTextNode(E));
        }
      }
      function c(h, f, E) {
        var D = E.css,
          I = E.sourceMap,
          T = f.convertToAbsoluteUrls === void 0 && I;
        (f.convertToAbsoluteUrls || T) && (D = x(D)),
          I &&
            (D +=
              `
/*# sourceMappingURL=data:application/json;base64,` +
              btoa(unescape(encodeURIComponent(JSON.stringify(I)))) +
              ' */');
        var R = new Blob([D], { type: 'text/css' }),
          j = h.href;
        (h.href = URL.createObjectURL(R)), j && URL.revokeObjectURL(j);
      }
    },
    '../../node_modules/style-loader/lib/urls.js': function (g, o) {
      g.exports = function (e) {
        var t = typeof window < 'u' && window.location;
        if (!t) throw new Error('fixUrls requires window.location');
        if (!e || typeof e != 'string') return e;
        var n = t.protocol + '//' + t.host,
          r = n + t.pathname.replace(/\/[^\/]*$/, '/'),
          C = e.replace(
            /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
            function (b, m) {
              var y = m
                .trim()
                .replace(/^"(.*)"$/, function (x, P) {
                  return P;
                })
                .replace(/^'(.*)'$/, function (x, P) {
                  return P;
                });
              if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(y))
                return b;
              var p;
              return (
                y.indexOf('//') === 0
                  ? (p = y)
                  : y.indexOf('/') === 0
                  ? (p = n + y)
                  : (p = r + y.replace(/^\.\//, '')),
                'url(' + JSON.stringify(p) + ')'
              );
            },
          );
        return C;
      };
    },
    '../../node_modules/type/function/is.js': function (g, o, e) {
      var t = e('../../node_modules/type/prototype/is.js');
      g.exports = function (n) {
        if (typeof n != 'function' || !hasOwnProperty.call(n, 'length'))
          return !1;
        try {
          if (
            typeof n.length != 'number' ||
            typeof n.call != 'function' ||
            typeof n.apply != 'function'
          )
            return !1;
        } catch {
          return !1;
        }
        return !t(n);
      };
    },
    '../../node_modules/type/object/is.js': function (g, o, e) {
      function t(C) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (t = function (m) {
                return typeof m;
              })
            : (t = function (m) {
                return m &&
                  typeof Symbol == 'function' &&
                  m.constructor === Symbol &&
                  m !== Symbol.prototype
                  ? 'symbol'
                  : typeof m;
              }),
          t(C)
        );
      }
      var n = e('../../node_modules/type/value/is.js'),
        r = { object: !0, function: !0, undefined: !0 };
      g.exports = function (C) {
        return n(C) ? hasOwnProperty.call(r, t(C)) : !1;
      };
    },
    '../../node_modules/type/plain-function/is.js': function (g, o, e) {
      var t = e('../../node_modules/type/function/is.js'),
        n = /^\s*class[\s{/}]/,
        r = Function.prototype.toString;
      g.exports = function (C) {
        return !(!t(C) || n.test(r.call(C)));
      };
    },
    '../../node_modules/type/prototype/is.js': function (g, o, e) {
      var t = e('../../node_modules/type/object/is.js');
      g.exports = function (n) {
        if (!t(n)) return !1;
        try {
          return n.constructor ? n.constructor.prototype === n : !1;
        } catch {
          return !1;
        }
      };
    },
    '../../node_modules/type/value/is.js': function (g, o, e) {
      var t = void 0;
      g.exports = function (n) {
        return n !== t && n !== null;
      };
    },
    '../../node_modules/util/node_modules/inherits/inherits_browser.js': function (
      g,
      o,
    ) {
      typeof Object.create == 'function'
        ? (g.exports = function (t, n) {
            (t.super_ = n),
              (t.prototype = Object.create(n.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
          })
        : (g.exports = function (t, n) {
            t.super_ = n;
            var r = function () {};
            (r.prototype = n.prototype),
              (t.prototype = new r()),
              (t.prototype.constructor = t);
          });
    },
    '../../node_modules/util/support/isBufferBrowser.js': function (g, o) {
      function e(t) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (e = function (r) {
                return typeof r;
              })
            : (e = function (r) {
                return r &&
                  typeof Symbol == 'function' &&
                  r.constructor === Symbol &&
                  r !== Symbol.prototype
                  ? 'symbol'
                  : typeof r;
              }),
          e(t)
        );
      }
      g.exports = function (n) {
        return (
          n &&
          e(n) === 'object' &&
          typeof n.copy == 'function' &&
          typeof n.fill == 'function' &&
          typeof n.readUInt8 == 'function'
        );
      };
    },
    '../../node_modules/util/util.js': function (g, o, e) {
      (function (t) {
        function n(L) {
          return (
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? (n = function (U) {
                  return typeof U;
                })
              : (n = function (U) {
                  return U &&
                    typeof Symbol == 'function' &&
                    U.constructor === Symbol &&
                    U !== Symbol.prototype
                    ? 'symbol'
                    : typeof U;
                }),
            n(L)
          );
        }
        var r =
            Object.getOwnPropertyDescriptors ||
            function (M) {
              for (var U = Object.keys(M), Y = {}, Z = 0; Z < U.length; Z++)
                Y[U[Z]] = Object.getOwnPropertyDescriptor(M, U[Z]);
              return Y;
            },
          C = /%[sdj%]/g;
        (o.format = function (L) {
          if (!c(L)) {
            for (var M = [], U = 0; U < arguments.length; U++)
              M.push(y(arguments[U]));
            return M.join(' ');
          }
          for (
            var U = 1,
              Y = arguments,
              Z = Y.length,
              q = String(L).replace(C, function (G) {
                if (G === '%%') return '%';
                if (U >= Z) return G;
                switch (G) {
                  case '%s':
                    return String(Y[U++]);
                  case '%d':
                    return Number(Y[U++]);
                  case '%j':
                    try {
                      return JSON.stringify(Y[U++]);
                    } catch {
                      return '[Circular]';
                    }
                  default:
                    return G;
                }
              }),
              ee = Y[U];
            U < Z;
            ee = Y[++U]
          )
            v(ee) || !D(ee) ? (q += ' ' + ee) : (q += ' ' + y(ee));
          return q;
        }),
          (o.deprecate = function (L, M) {
            if (typeof t < 'u' && t.noDeprecation === !0) return L;
            if (typeof t > 'u')
              return function () {
                return o.deprecate(L, M).apply(this, arguments);
              };
            var U = !1;
            function Y() {
              if (!U) {
                if (t.throwDeprecation) throw new Error(M);
                t.traceDeprecation ? console.trace(M) : console.error(M),
                  (U = !0);
              }
              return L.apply(this, arguments);
            }
            return Y;
          });
        var b = {},
          m;
        o.debuglog = function (L) {
          if (
            (f(m) && (m = t.env.NODE_DEBUG || ''), (L = L.toUpperCase()), !b[L])
          )
            if (new RegExp('\\b' + L + '\\b', 'i').test(m)) {
              var M = t.pid;
              b[L] = function () {
                var U = o.format.apply(o, arguments);
                console.error('%s %d: %s', L, M, U);
              };
            } else b[L] = function () {};
          return b[L];
        };
        function y(L, M) {
          var U = { seen: [], stylize: x };
          return (
            arguments.length >= 3 && (U.depth = arguments[2]),
            arguments.length >= 4 && (U.colors = arguments[3]),
            O(M) ? (U.showHidden = M) : M && o._extend(U, M),
            f(U.showHidden) && (U.showHidden = !1),
            f(U.depth) && (U.depth = 2),
            f(U.colors) && (U.colors = !1),
            f(U.customInspect) && (U.customInspect = !0),
            U.colors && (U.stylize = p),
            B(U, L, U.depth)
          );
        }
        (o.inspect = y),
          (y.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39],
          }),
          (y.styles = {
            special: 'cyan',
            number: 'yellow',
            boolean: 'yellow',
            undefined: 'grey',
            null: 'bold',
            string: 'green',
            date: 'magenta',
            regexp: 'red',
          });
        function p(L, M) {
          var U = y.styles[M];
          return U
            ? '\x1B[' +
                y.colors[U][0] +
                'm' +
                L +
                '\x1B[' +
                y.colors[U][1] +
                'm'
            : L;
        }
        function x(L, M) {
          return L;
        }
        function P(L) {
          var M = {};
          return (
            L.forEach(function (U, Y) {
              M[U] = !0;
            }),
            M
          );
        }
        function B(L, M, U) {
          if (
            L.customInspect &&
            M &&
            R(M.inspect) &&
            M.inspect !== o.inspect &&
            !(M.constructor && M.constructor.prototype === M)
          ) {
            var Y = M.inspect(U, L);
            return c(Y) || (Y = B(L, Y, U)), Y;
          }
          var Z = d(L, M);
          if (Z) return Z;
          var q = Object.keys(M),
            ee = P(q);
          if (
            (L.showHidden && (q = Object.getOwnPropertyNames(M)),
            T(M) &&
              (q.indexOf('message') >= 0 || q.indexOf('description') >= 0))
          )
            return i(M);
          if (q.length === 0) {
            if (R(M)) {
              var G = M.name ? ': ' + M.name : '';
              return L.stylize('[Function' + G + ']', 'special');
            }
            if (E(M))
              return L.stylize(RegExp.prototype.toString.call(M), 'regexp');
            if (I(M)) return L.stylize(Date.prototype.toString.call(M), 'date');
            if (T(M)) return i(M);
          }
          var N = '',
            V = !1,
            X = ['{', '}'];
          if ((u(M) && ((V = !0), (X = ['[', ']'])), R(M))) {
            var $ = M.name ? ': ' + M.name : '';
            N = ' [Function' + $ + ']';
          }
          if (
            (E(M) && (N = ' ' + RegExp.prototype.toString.call(M)),
            I(M) && (N = ' ' + Date.prototype.toUTCString.call(M)),
            T(M) && (N = ' ' + i(M)),
            q.length === 0 && (!V || M.length == 0))
          )
            return X[0] + N + X[1];
          if (U < 0)
            return E(M)
              ? L.stylize(RegExp.prototype.toString.call(M), 'regexp')
              : L.stylize('[Object]', 'special');
          L.seen.push(M);
          var te;
          return (
            V
              ? (te = _(L, M, U, ee, q))
              : (te = q.map(function (Q) {
                  return a(L, M, U, ee, Q, V);
                })),
            L.seen.pop(),
            s(te, N, X)
          );
        }
        function d(L, M) {
          if (f(M)) return L.stylize('undefined', 'undefined');
          if (c(M)) {
            var U =
              "'" +
              JSON.stringify(M)
                .replace(/^"|"$/g, '')
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"') +
              "'";
            return L.stylize(U, 'string');
          }
          if (l(M)) return L.stylize('' + M, 'number');
          if (O(M)) return L.stylize('' + M, 'boolean');
          if (v(M)) return L.stylize('null', 'null');
        }
        function i(L) {
          return '[' + Error.prototype.toString.call(L) + ']';
        }
        function _(L, M, U, Y, Z) {
          for (var q = [], ee = 0, G = M.length; ee < G; ++ee)
            F(M, String(ee))
              ? q.push(a(L, M, U, Y, String(ee), !0))
              : q.push('');
          return (
            Z.forEach(function (N) {
              N.match(/^\d+$/) || q.push(a(L, M, U, Y, N, !0));
            }),
            q
          );
        }
        function a(L, M, U, Y, Z, q) {
          var ee, G, N;
          if (
            ((N = Object.getOwnPropertyDescriptor(M, Z) || { value: M[Z] }),
            N.get
              ? N.set
                ? (G = L.stylize('[Getter/Setter]', 'special'))
                : (G = L.stylize('[Getter]', 'special'))
              : N.set && (G = L.stylize('[Setter]', 'special')),
            F(Y, Z) || (ee = '[' + Z + ']'),
            G ||
              (L.seen.indexOf(N.value) < 0
                ? (v(U)
                    ? (G = B(L, N.value, null))
                    : (G = B(L, N.value, U - 1)),
                  G.indexOf(`
`) > -1 &&
                    (q
                      ? (G = G.split(
                          `
`,
                        )
                          .map(function (V) {
                            return '  ' + V;
                          })
                          .join(
                            `
`,
                          )
                          .substr(2))
                      : (G =
                          `
` +
                          G.split(
                            `
`,
                          ).map(function (V) {
                            return '   ' + V;
                          }).join(`
`))))
                : (G = L.stylize('[Circular]', 'special'))),
            f(ee))
          ) {
            if (q && Z.match(/^\d+$/)) return G;
            (ee = JSON.stringify('' + Z)),
              ee.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
                ? ((ee = ee.substr(1, ee.length - 2)),
                  (ee = L.stylize(ee, 'name')))
                : ((ee = ee
                    .replace(/'/g, "\\'")
                    .replace(/\\"/g, '"')
                    .replace(/(^"|"$)/g, "'")),
                  (ee = L.stylize(ee, 'string')));
          }
          return ee + ': ' + G;
        }
        function s(L, M, U) {
          var Y = L.reduce(function (Z, q) {
            return (
              q.indexOf(`
`) >= 0,
              Z + q.replace(/\u001b\[\d\d?m/g, '').length + 1
            );
          }, 0);
          return Y > 60
            ? U[0] +
                (M === ''
                  ? ''
                  : M +
                    `
 `) +
                ' ' +
                L.join(`,
  `) +
                ' ' +
                U[1]
            : U[0] + M + ' ' + L.join(', ') + ' ' + U[1];
        }
        function u(L) {
          return Array.isArray(L);
        }
        o.isArray = u;
        function O(L) {
          return typeof L == 'boolean';
        }
        o.isBoolean = O;
        function v(L) {
          return L === null;
        }
        o.isNull = v;
        function A(L) {
          return L == null;
        }
        o.isNullOrUndefined = A;
        function l(L) {
          return typeof L == 'number';
        }
        o.isNumber = l;
        function c(L) {
          return typeof L == 'string';
        }
        o.isString = c;
        function h(L) {
          return n(L) === 'symbol';
        }
        o.isSymbol = h;
        function f(L) {
          return L === void 0;
        }
        o.isUndefined = f;
        function E(L) {
          return D(L) && z(L) === '[object RegExp]';
        }
        o.isRegExp = E;
        function D(L) {
          return n(L) === 'object' && L !== null;
        }
        o.isObject = D;
        function I(L) {
          return D(L) && z(L) === '[object Date]';
        }
        o.isDate = I;
        function T(L) {
          return D(L) && (z(L) === '[object Error]' || L instanceof Error);
        }
        o.isError = T;
        function R(L) {
          return typeof L == 'function';
        }
        o.isFunction = R;
        function j(L) {
          return (
            L === null ||
            typeof L == 'boolean' ||
            typeof L == 'number' ||
            typeof L == 'string' ||
            n(L) === 'symbol' ||
            typeof L > 'u'
          );
        }
        (o.isPrimitive = j),
          (o.isBuffer = e(
            '../../node_modules/util/support/isBufferBrowser.js',
          ));
        function z(L) {
          return Object.prototype.toString.call(L);
        }
        function W(L) {
          return L < 10 ? '0' + L.toString(10) : L.toString(10);
        }
        var K = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];
        function S() {
          var L = new Date(),
            M = [W(L.getHours()), W(L.getMinutes()), W(L.getSeconds())].join(
              ':',
            );
          return [L.getDate(), K[L.getMonth()], M].join(' ');
        }
        (o.log = function () {
          console.log('%s - %s', S(), o.format.apply(o, arguments));
        }),
          (o.inherits = e(
            '../../node_modules/util/node_modules/inherits/inherits_browser.js',
          )),
          (o._extend = function (L, M) {
            if (!M || !D(M)) return L;
            for (var U = Object.keys(M), Y = U.length; Y--; ) L[U[Y]] = M[U[Y]];
            return L;
          });
        function F(L, M) {
          return Object.prototype.hasOwnProperty.call(L, M);
        }
        var k = typeof Symbol < 'u' ? Symbol('util.promisify.custom') : void 0;
        (o.promisify = function (M) {
          if (typeof M != 'function')
            throw new TypeError(
              'The "original" argument must be of type Function',
            );
          if (k && M[k]) {
            var U = M[k];
            if (typeof U != 'function')
              throw new TypeError(
                'The "util.promisify.custom" argument must be of type Function',
              );
            return (
              Object.defineProperty(U, k, {
                value: U,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              }),
              U
            );
          }
          function U() {
            for (
              var Y,
                Z,
                q = new Promise(function (N, V) {
                  (Y = N), (Z = V);
                }),
                ee = [],
                G = 0;
              G < arguments.length;
              G++
            )
              ee.push(arguments[G]);
            ee.push(function (N, V) {
              N ? Z(N) : Y(V);
            });
            try {
              M.apply(this, ee);
            } catch (N) {
              Z(N);
            }
            return q;
          }
          return (
            Object.setPrototypeOf(U, Object.getPrototypeOf(M)),
            k &&
              Object.defineProperty(U, k, {
                value: U,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              }),
            Object.defineProperties(U, r(M))
          );
        }),
          (o.promisify.custom = k);
        function H(L, M) {
          if (!L) {
            var U = new Error('Promise was rejected with a falsy value');
            (U.reason = L), (L = U);
          }
          return M(L);
        }
        function w(L) {
          if (typeof L != 'function')
            throw new TypeError(
              'The "original" argument must be of type Function',
            );
          function M() {
            for (var U = [], Y = 0; Y < arguments.length; Y++)
              U.push(arguments[Y]);
            var Z = U.pop();
            if (typeof Z != 'function')
              throw new TypeError('The last argument must be of type Function');
            var q = this,
              ee = function () {
                return Z.apply(q, arguments);
              };
            L.apply(this, U).then(
              function (G) {
                t.nextTick(ee, null, G);
              },
              function (G) {
                t.nextTick(H, G, ee);
              },
            );
          }
          return (
            Object.setPrototypeOf(M, Object.getPrototypeOf(L)),
            Object.defineProperties(M, r(L)),
            M
          );
        }
        o.callbackify = w;
      }.call(this, e('../../node_modules/process/browser.js')));
    },
    '../../node_modules/webpack/buildin/global.js': function (g, o) {
      function e(n) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (e = function (C) {
                return typeof C;
              })
            : (e = function (C) {
                return C &&
                  typeof Symbol == 'function' &&
                  C.constructor === Symbol &&
                  C !== Symbol.prototype
                  ? 'symbol'
                  : typeof C;
              }),
          e(n)
        );
      }
      var t;
      t = (function () {
        return this;
      })();
      try {
        t = t || new Function('return this')();
      } catch {
        (typeof window > 'u' ? 'undefined' : e(window)) === 'object' &&
          (t = window);
      }
      g.exports = t;
    },
    '../../node_modules/webpack/node_modules/timers-browserify/main.js': function (
      g,
      o,
      e,
    ) {
      (function (t) {
        var n = (typeof t < 'u' && t) || (typeof self < 'u' && self) || window,
          r = Function.prototype.apply;
        (o.setTimeout = function () {
          return new C(r.call(setTimeout, n, arguments), clearTimeout);
        }),
          (o.setInterval = function () {
            return new C(r.call(setInterval, n, arguments), clearInterval);
          }),
          (o.clearTimeout = o.clearInterval = function (b) {
            b && b.close();
          });
        function C(b, m) {
          (this._id = b), (this._clearFn = m);
        }
        (C.prototype.unref = C.prototype.ref = function () {}),
          (C.prototype.close = function () {
            this._clearFn.call(n, this._id);
          }),
          (o.enroll = function (b, m) {
            clearTimeout(b._idleTimeoutId), (b._idleTimeout = m);
          }),
          (o.unenroll = function (b) {
            clearTimeout(b._idleTimeoutId), (b._idleTimeout = -1);
          }),
          (o._unrefActive = o.active = function (b) {
            clearTimeout(b._idleTimeoutId);
            var m = b._idleTimeout;
            m >= 0 &&
              (b._idleTimeoutId = setTimeout(function () {
                b._onTimeout && b._onTimeout();
              }, m));
          }),
          e('../../node_modules/setimmediate/setImmediate.js'),
          (o.setImmediate =
            (typeof self < 'u' && self.setImmediate) ||
            (typeof t < 'u' && t.setImmediate) ||
            (this && this.setImmediate)),
          (o.clearImmediate =
            (typeof self < 'u' && self.clearImmediate) ||
            (typeof t < 'u' && t.clearImmediate) ||
            (this && this.clearImmediate));
      }.call(this, e('../../node_modules/webpack/buildin/global.js')));
    },
    '../react-devtools-shared/src/bridge.js': function (g, o, e) {
      e.r(o);
      var t = e('../../node_modules/events/events.js'),
        n = e.n(t);
      function r(v) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (r = function (l) {
                return typeof l;
              })
            : (r = function (l) {
                return l &&
                  typeof Symbol == 'function' &&
                  l.constructor === Symbol &&
                  l !== Symbol.prototype
                  ? 'symbol'
                  : typeof l;
              }),
          r(v)
        );
      }
      function C(v) {
        return y(v) || m(v) || b();
      }
      function b() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      }
      function m(v) {
        if (
          Symbol.iterator in Object(v) ||
          Object.prototype.toString.call(v) === '[object Arguments]'
        )
          return Array.from(v);
      }
      function y(v) {
        if (Array.isArray(v)) {
          for (var A = 0, l = new Array(v.length); A < v.length; A++)
            l[A] = v[A];
          return l;
        }
      }
      function p(v, A) {
        if (!(v instanceof A))
          throw new TypeError('Cannot call a class as a function');
      }
      function x(v, A) {
        for (var l = 0; l < A.length; l++) {
          var c = A[l];
          (c.enumerable = c.enumerable || !1),
            (c.configurable = !0),
            'value' in c && (c.writable = !0),
            Object.defineProperty(v, c.key, c);
        }
      }
      function P(v, A, l) {
        return A && x(v.prototype, A), l && x(v, l), v;
      }
      function B(v, A) {
        return A && (r(A) === 'object' || typeof A == 'function') ? A : i(v);
      }
      function d(v) {
        return (
          (d = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (l) {
                return l.__proto__ || Object.getPrototypeOf(l);
              }),
          d(v)
        );
      }
      function i(v) {
        if (v === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return v;
      }
      function _(v, A) {
        if (typeof A != 'function' && A !== null)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (v.prototype = Object.create(A && A.prototype, {
          constructor: { value: v, writable: !0, configurable: !0 },
        })),
          A && a(v, A);
      }
      function a(v, A) {
        return (
          (a =
            Object.setPrototypeOf ||
            function (c, h) {
              return (c.__proto__ = h), c;
            }),
          a(v, A)
        );
      }
      function s(v, A, l) {
        return (
          A in v
            ? Object.defineProperty(v, A, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (v[A] = l),
          v
        );
      }
      var u = 100,
        O = (function (v) {
          _(A, v);
          function A(l) {
            var c;
            return (
              p(this, A),
              (c = B(this, d(A).call(this))),
              s(i(c), '_isShutdown', !1),
              s(i(c), '_messageQueue', []),
              s(i(c), '_timeoutID', null),
              s(i(c), '_wallUnlisten', null),
              s(i(c), '_flush', function () {
                if (
                  (c._timeoutID !== null &&
                    (clearTimeout(c._timeoutID), (c._timeoutID = null)),
                  c._messageQueue.length)
                ) {
                  for (var h = 0; h < c._messageQueue.length; h += 2) {
                    var f;
                    (f = c._wall).send.apply(
                      f,
                      [c._messageQueue[h]].concat(C(c._messageQueue[h + 1])),
                    );
                  }
                  (c._messageQueue.length = 0),
                    (c._timeoutID = setTimeout(c._flush, u));
                }
              }),
              (c._wall = l),
              (c._wallUnlisten =
                l.listen(function (h) {
                  i(c).emit(h.event, h.payload);
                }) || null),
              c
            );
          }
          return (
            P(A, [
              {
                key: 'send',
                value: function (c) {
                  if (this._isShutdown) {
                    console.warn(
                      'Cannot send message "'.concat(
                        c,
                        '" through a Bridge that has been shutdown.',
                      ),
                    );
                    return;
                  }
                  for (
                    var h = arguments.length,
                      f = new Array(h > 1 ? h - 1 : 0),
                      E = 1;
                    E < h;
                    E++
                  )
                    f[E - 1] = arguments[E];
                  this._messageQueue.push(c, f),
                    this._timeoutID ||
                      (this._timeoutID = setTimeout(this._flush, 0));
                },
              },
              {
                key: 'shutdown',
                value: function () {
                  if (this._isShutdown) {
                    console.warn('Bridge was already shutdown.');
                    return;
                  }
                  this.send('shutdown'),
                    (this._isShutdown = !0),
                    (this.addListener = function () {}),
                    (this.emit = function () {}),
                    this.removeAllListeners();
                  var c = this._wallUnlisten;
                  c && c();
                  do this._flush();
                  while (this._messageQueue.length);
                  this._timeoutID !== null &&
                    (clearTimeout(this._timeoutID), (this._timeoutID = null));
                },
              },
              {
                key: 'wall',
                get: function () {
                  return this._wall;
                },
              },
            ]),
            A
          );
        })(n.a);
      o.default = O;
    },
    '../react-devtools-shared/src/constants.js': function (g, o, e) {
      e.r(o),
        e.d(o, '__DEBUG__', function () {
          return t;
        }),
        e.d(o, 'TREE_OPERATION_ADD', function () {
          return n;
        }),
        e.d(o, 'TREE_OPERATION_REMOVE', function () {
          return r;
        }),
        e.d(o, 'TREE_OPERATION_REORDER_CHILDREN', function () {
          return C;
        }),
        e.d(o, 'TREE_OPERATION_UPDATE_TREE_BASE_DURATION', function () {
          return b;
        }),
        e.d(o, 'LOCAL_STORAGE_FILTER_PREFERENCES_KEY', function () {
          return m;
        }),
        e.d(o, 'SESSION_STORAGE_LAST_SELECTION_KEY', function () {
          return y;
        }),
        e.d(o, 'SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY', function () {
          return p;
        }),
        e.d(o, 'SESSION_STORAGE_RELOAD_AND_PROFILE_KEY', function () {
          return x;
        }),
        e.d(o, 'LOCAL_STORAGE_SHOULD_PATCH_CONSOLE_KEY', function () {
          return P;
        }),
        e.d(o, 'LOCAL_STORAGE_TRACE_UPDATES_ENABLED_KEY', function () {
          return B;
        }),
        e.d(o, 'PROFILER_EXPORT_VERSION', function () {
          return d;
        }),
        e.d(o, 'CHANGE_LOG_URL', function () {
          return i;
        }),
        e.d(o, 'UNSUPPORTED_VERSION_URL', function () {
          return _;
        }),
        e.d(o, 'COMFORTABLE_LINE_HEIGHT', function () {
          return a;
        }),
        e.d(o, 'COMPACT_LINE_HEIGHT', function () {
          return s;
        });
      var t = !1,
        n = 1,
        r = 2,
        C = 3,
        b = 4,
        m = 'React::DevTools::componentFilters',
        y = 'React::DevTools::lastSelection',
        p = 'React::DevTools::recordChangeDescriptions',
        x = 'React::DevTools::reloadAndProfile',
        P = 'React::DevTools::appendComponentStack',
        B = 'React::DevTools::traceUpdatesEnabled',
        d = 4,
        i =
          'https://github.com/facebook/react/blob/master/packages/react-devtools/CHANGELOG.md',
        _ =
          'https://reactjs.org/blog/2019/08/15/new-react-devtools.html#how-do-i-get-the-old-version-back',
        a,
        s;
      try {
        var u = e(
            '../../node_modules/raw-loader/dist/cjs.js!../react-devtools-shared/src/devtools/views/root.css',
          ).default,
          O = function (A) {
            var l = new RegExp(''.concat(A, ': ([0-9]+)')),
              c = u.match(l);
            return parseInt(c[1], 10);
          };
        (a = O('comfortable-line-height-data')),
          (s = O('compact-line-height-data'));
      } catch {
        (a = 15), (s = 10);
      }
    },
    '../react-devtools-shared/src/devtools/ContextMenu/ContextMenu.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/ContextMenu/ContextMenu.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/ContextMenu/ContextMenu.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return i;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('react-dom'),
        C = e('../react-devtools-shared/src/devtools/ContextMenu/Contexts.js'),
        b = e(
          '../react-devtools-shared/src/devtools/ContextMenu/ContextMenu.css',
        ),
        m = e.n(b);
      function y(_, a) {
        return P(_) || x(_, a) || p();
      }
      function p() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function x(_, a) {
        var s = [],
          u = !0,
          O = !1,
          v = void 0;
        try {
          for (
            var A = _[Symbol.iterator](), l;
            !(u = (l = A.next()).done) &&
            (s.push(l.value), !(a && s.length === a));
            u = !0
          );
        } catch (c) {
          (O = !0), (v = c);
        } finally {
          try {
            !u && A.return != null && A.return();
          } finally {
            if (O) throw v;
          }
        }
        return s;
      }
      function P(_) {
        if (Array.isArray(_)) return _;
      }
      function B(_, a, s) {
        var u = _.ownerDocument.defaultView;
        _ !== null &&
          (s + _.offsetHeight >= u.innerHeight
            ? s - _.offsetHeight > 0
              ? (_.style.top = ''.concat(s - _.offsetHeight, 'px'))
              : (_.style.top = '0px')
            : (_.style.top = ''.concat(s, 'px')),
          a + _.offsetWidth >= u.innerWidth
            ? a - _.offsetWidth > 0
              ? (_.style.left = ''.concat(a - _.offsetWidth, 'px'))
              : (_.style.left = '0px')
            : (_.style.left = ''.concat(a, 'px')));
      }
      var d = { data: null, isVisible: !1, pageX: 0, pageY: 0 };
      function i(_) {
        var a = _.children,
          s = _.id,
          u = Object(t.useContext)(C.RegistryContext),
          O = u.registerMenu,
          v = Object(t.useState)(d),
          A = y(v, 2),
          l = A[0],
          c = A[1],
          h = Object(t.useRef)(null),
          f = Object(t.useRef)(null),
          E = Object(t.useRef)(null);
        return (
          Object(t.useEffect)(function () {
            var D = h.current.ownerDocument;
            return (
              (f.current = D.createElement('div')),
              D.body.appendChild(f.current),
              function () {
                D.body.removeChild(f.current);
              }
            );
          }, []),
          Object(t.useEffect)(
            function () {
              var D = function (R) {
                  var j = R.data,
                    z = R.pageX,
                    W = R.pageY;
                  c({ data: j, isVisible: !0, pageX: z, pageY: W });
                },
                I = function () {
                  return c(d);
                };
              return O(s, D, I);
            },
            [s],
          ),
          Object(t.useLayoutEffect)(
            function () {
              if (!!l.isVisible) {
                var D = E.current,
                  I = function (W) {
                    D.contains(W.target) || c(d);
                  },
                  T = function (W) {
                    c(d);
                  },
                  R = f.current.ownerDocument;
                R.addEventListener('mousedown', I),
                  R.addEventListener('touchstart', I),
                  R.addEventListener('keydown', I);
                var j = R.defaultView;
                return (
                  j.addEventListener('resize', T),
                  B(D, l.pageX, l.pageY),
                  function () {
                    R.removeEventListener('mousedown', I),
                      R.removeEventListener('touchstart', I),
                      R.removeEventListener('keydown', I),
                      j.removeEventListener('resize', T);
                  }
                );
              }
            },
            [l],
          ),
          l.isVisible
            ? Object(r.createPortal)(
                n.a.createElement(
                  'div',
                  { ref: E, className: m.a.ContextMenu },
                  a(l.data),
                ),
                f.current,
              )
            : n.a.createElement('div', { ref: h })
        );
      }
    },
    '../react-devtools-shared/src/devtools/ContextMenu/ContextMenuItem.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/ContextMenu/ContextMenuItem.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/ContextMenu/ContextMenuItem.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return m;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/ContextMenu/Contexts.js'),
        C = e(
          '../react-devtools-shared/src/devtools/ContextMenu/ContextMenuItem.css',
        ),
        b = e.n(C);
      function m(y) {
        var p = y.children,
          x = y.onClick;
        y.title;
        var P = Object(t.useContext)(r.RegistryContext),
          B = P.hideMenu,
          d = function (_) {
            x(), B();
          };
        return n.a.createElement(
          'div',
          { className: b.a.ContextMenuItem, onClick: d, onTouchEnd: d },
          p,
        );
      }
    },
    '../react-devtools-shared/src/devtools/ContextMenu/Contexts.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'RegistryContext', function () {
          return p;
        });
      var t = e('react'),
        n = new Map(),
        r = new Map(),
        C = null;
      function b() {
        typeof C == 'function' && C();
      }
      function m(x) {
        var P = x.data,
          B = x.id,
          d = x.pageX,
          i = x.pageY,
          _ = n.get(B);
        typeof _ == 'function' &&
          ((C = r.get(B)), _({ data: P, pageX: d, pageY: i }));
      }
      function y(x, P, B) {
        if (n.has(x))
          throw Error(
            'Context menu with id "'.concat(x, '" already registered.'),
          );
        return (
          n.set(x, P),
          r.set(x, B),
          function () {
            n.delete(x), r.delete(x);
          }
        );
      }
      var p = Object(t.createContext)({
        hideMenu: b,
        showMenu: m,
        registerMenu: y,
      });
    },
    '../react-devtools-shared/src/devtools/ContextMenu/useContextMenu.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return r;
        });
      var t = e('react'),
        n = e('../react-devtools-shared/src/devtools/ContextMenu/Contexts.js');
      function r(C) {
        var b = C.data,
          m = C.id,
          y = C.ref,
          p = Object(t.useContext)(n.RegistryContext),
          x = p.showMenu;
        Object(t.useEffect)(
          function () {
            if (y.current !== null) {
              var P = function (i) {
                  i.preventDefault(), i.stopPropagation();
                  var _ = i.pageX || (i.touches && i.touches[0].pageX),
                    a = i.pageY || (i.touches && i.touches[0].pageY);
                  x({ data: b, id: m, pageX: _, pageY: a });
                },
                B = y.current;
              return (
                B.addEventListener('contextmenu', P),
                function () {
                  B.removeEventListener('contextmenu', P);
                }
              );
            }
          },
          [b, m, x],
        );
      }
    },
    '../react-devtools-shared/src/devtools/ProfilerStore.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return a;
        });
      var t = e('../../node_modules/events/events.js'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/views/Profiler/utils.js'),
        C = e('../react-devtools-shared/src/devtools/ProfilingCache.js');
      e('../react-devtools-shared/src/devtools/store.js');
      function b(s) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (b = function (O) {
                return typeof O;
              })
            : (b = function (O) {
                return O &&
                  typeof Symbol == 'function' &&
                  O.constructor === Symbol &&
                  O !== Symbol.prototype
                  ? 'symbol'
                  : typeof O;
              }),
          b(s)
        );
      }
      function m(s, u) {
        if (!(s instanceof u))
          throw new TypeError('Cannot call a class as a function');
      }
      function y(s, u) {
        for (var O = 0; O < u.length; O++) {
          var v = u[O];
          (v.enumerable = v.enumerable || !1),
            (v.configurable = !0),
            'value' in v && (v.writable = !0),
            Object.defineProperty(s, v.key, v);
        }
      }
      function p(s, u, O) {
        return u && y(s.prototype, u), O && y(s, O), s;
      }
      function x(s, u) {
        return u && (b(u) === 'object' || typeof u == 'function') ? u : B(s);
      }
      function P(s) {
        return (
          (P = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (O) {
                return O.__proto__ || Object.getPrototypeOf(O);
              }),
          P(s)
        );
      }
      function B(s) {
        if (s === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return s;
      }
      function d(s, u) {
        if (typeof u != 'function' && u !== null)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (s.prototype = Object.create(u && u.prototype, {
          constructor: { value: s, writable: !0, configurable: !0 },
        })),
          u && i(s, u);
      }
      function i(s, u) {
        return (
          (i =
            Object.setPrototypeOf ||
            function (v, A) {
              return (v.__proto__ = A), v;
            }),
          i(s, u)
        );
      }
      function _(s, u, O) {
        return (
          u in s
            ? Object.defineProperty(s, u, {
                value: O,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (s[u] = O),
          s
        );
      }
      var a = (function (s) {
        d(u, s);
        function u(O, v, A) {
          var l;
          return (
            m(this, u),
            (l = x(this, P(u).call(this))),
            _(B(l), '_dataBackends', []),
            _(B(l), '_dataFrontend', null),
            _(B(l), '_initialRendererIDs', new Set()),
            _(B(l), '_initialSnapshotsByRootID', new Map()),
            _(B(l), '_inProgressOperationsByRootID', new Map()),
            _(B(l), '_isProfiling', !1),
            _(B(l), '_rendererIDsThatReportedProfilingData', new Set()),
            _(B(l), '_rendererQueue', new Set()),
            _(B(l), '_takeProfilingSnapshotRecursive', function (c, h) {
              var f = l._store.getElementByID(c);
              if (f !== null) {
                var E = {
                  id: c,
                  children: f.children.slice(0),
                  displayName: f.displayName,
                  key: f.key,
                  type: f.type,
                };
                h.set(c, E),
                  f.children.forEach(function (D) {
                    return l._takeProfilingSnapshotRecursive(D, h);
                  });
              }
            }),
            _(B(l), 'onBridgeOperations', function (c) {
              var h = c[0],
                f = c[1];
              if (l._isProfiling) {
                var E = l._inProgressOperationsByRootID.get(f);
                E == null
                  ? ((E = [c]), l._inProgressOperationsByRootID.set(f, E))
                  : E.push(c),
                  l._initialRendererIDs.has(h) || l._initialRendererIDs.add(h),
                  l._initialSnapshotsByRootID.has(f) ||
                    l._initialSnapshotsByRootID.set(f, new Map()),
                  l._rendererIDsThatReportedProfilingData.add(h);
              }
            }),
            _(B(l), 'onBridgeProfilingData', function (c) {
              if (!l._isProfiling) {
                var h = c.rendererID;
                if (!l._rendererQueue.has(h))
                  throw Error(
                    'Unexpected profiling data update from renderer "'.concat(
                      h,
                      '"',
                    ),
                  );
                l._dataBackends.push(c),
                  l._rendererQueue.delete(h),
                  l._rendererQueue.size === 0 &&
                    ((l._dataFrontend = Object(
                      r.prepareProfilingDataFrontendFromBackendAndStore,
                    )(
                      l._dataBackends,
                      l._inProgressOperationsByRootID,
                      l._initialSnapshotsByRootID,
                    )),
                    l._dataBackends.splice(0),
                    l.emit('isProcessingData'));
              }
            }),
            _(B(l), 'onBridgeShutdown', function () {
              l._bridge.removeListener('operations', l.onBridgeOperations),
                l._bridge.removeListener(
                  'profilingData',
                  l.onBridgeProfilingData,
                ),
                l._bridge.removeListener(
                  'profilingStatus',
                  l.onProfilingStatus,
                ),
                l._bridge.removeListener('shutdown', l.onBridgeShutdown);
            }),
            _(B(l), 'onProfilingStatus', function (c) {
              if (c) {
                l._dataBackends.splice(0),
                  (l._dataFrontend = null),
                  l._initialRendererIDs.clear(),
                  l._initialSnapshotsByRootID.clear(),
                  l._inProgressOperationsByRootID.clear(),
                  l._rendererIDsThatReportedProfilingData.clear(),
                  l._rendererQueue.clear();
                var h = !0,
                  f = !1,
                  E = void 0;
                try {
                  for (
                    var D = l._store.rootIDToRendererID
                        .values()
                        [Symbol.iterator](),
                      I;
                    !(h = (I = D.next()).done);
                    h = !0
                  ) {
                    var T = I.value;
                    l._initialRendererIDs.has(T) ||
                      l._initialRendererIDs.add(T);
                  }
                } catch (R) {
                  (f = !0), (E = R);
                } finally {
                  try {
                    !h && D.return != null && D.return();
                  } finally {
                    if (f) throw E;
                  }
                }
                l._store.roots.forEach(function (R) {
                  var j = new Map();
                  l._initialSnapshotsByRootID.set(R, j),
                    l._takeProfilingSnapshotRecursive(R, j);
                });
              }
              l._isProfiling !== c &&
                ((l._isProfiling = c),
                l._cache.invalidate(),
                l.emit('isProfiling'),
                c ||
                  (l._dataBackends.splice(0),
                  l._rendererQueue.clear(),
                  l._rendererIDsThatReportedProfilingData.forEach(function (R) {
                    l._rendererQueue.has(R) ||
                      (l._rendererQueue.add(R),
                      l._bridge.send('getProfilingData', { rendererID: R }));
                  }),
                  l.emit('isProcessingData')));
            }),
            (l._bridge = O),
            (l._isProfiling = A),
            (l._store = v),
            O.addListener('operations', l.onBridgeOperations),
            O.addListener('profilingData', l.onBridgeProfilingData),
            O.addListener('profilingStatus', l.onProfilingStatus),
            O.addListener('shutdown', l.onBridgeShutdown),
            O.send('getProfilingStatus'),
            (l._cache = new C.default(B(l))),
            l
          );
        }
        return (
          p(u, [
            {
              key: 'getCommitData',
              value: function (v, A) {
                if (this._dataFrontend !== null) {
                  var l = this._dataFrontend.dataForRoots.get(v);
                  if (l != null) {
                    var c = l.commitData[A];
                    if (c != null) return c;
                  }
                }
                throw Error(
                  'Could not find commit data for root "'
                    .concat(v, '" and commit ')
                    .concat(A),
                );
              },
            },
            {
              key: 'getDataForRoot',
              value: function (v) {
                if (this._dataFrontend !== null) {
                  var A = this._dataFrontend.dataForRoots.get(v);
                  if (A != null) return A;
                }
                throw Error(
                  'Could not find commit data for root "'.concat(v, '"'),
                );
              },
            },
            {
              key: 'clear',
              value: function () {
                this._dataBackends.splice(0),
                  (this._dataFrontend = null),
                  this._initialRendererIDs.clear(),
                  this._initialSnapshotsByRootID.clear(),
                  this._inProgressOperationsByRootID.clear(),
                  this._rendererQueue.clear(),
                  this._cache.invalidate(),
                  this.emit('profilingData');
              },
            },
            {
              key: 'startProfiling',
              value: function () {
                this._bridge.send(
                  'startProfiling',
                  this._store.recordChangeDescriptions,
                );
              },
            },
            {
              key: 'stopProfiling',
              value: function () {
                this._bridge.send('stopProfiling');
              },
            },
            {
              key: 'didRecordCommits',
              get: function () {
                return (
                  this._dataFrontend !== null &&
                  this._dataFrontend.dataForRoots.size > 0
                );
              },
            },
            {
              key: 'isProcessingData',
              get: function () {
                return (
                  this._rendererQueue.size > 0 || this._dataBackends.length > 0
                );
              },
            },
            {
              key: 'isProfiling',
              get: function () {
                return this._isProfiling;
              },
            },
            {
              key: 'profilingCache',
              get: function () {
                return this._cache;
              },
            },
            {
              key: 'profilingData',
              get: function () {
                return this._dataFrontend;
              },
              set: function (v) {
                if (this._isProfiling) {
                  console.warn(
                    'Profiling data cannot be updated while profiling is in progress.',
                  );
                  return;
                }
                this._dataBackends.splice(0),
                  (this._dataFrontend = v),
                  this._initialRendererIDs.clear(),
                  this._initialSnapshotsByRootID.clear(),
                  this._inProgressOperationsByRootID.clear(),
                  this._cache.invalidate(),
                  this.emit('profilingData');
              },
            },
          ]),
          u
        );
      })(n.a);
    },
    '../react-devtools-shared/src/devtools/ProfilingCache.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return x;
        }),
        e('../react-devtools-shared/src/devtools/ProfilerStore.js');
      var t = e(
          '../react-devtools-shared/src/devtools/views/Profiler/CommitTreeBuilder.js',
        ),
        n = e(
          '../react-devtools-shared/src/devtools/views/Profiler/FlamegraphChartBuilder.js',
        ),
        r = e(
          '../react-devtools-shared/src/devtools/views/Profiler/InteractionsChartBuilder.js',
        ),
        C = e(
          '../react-devtools-shared/src/devtools/views/Profiler/RankedChartBuilder.js',
        );
      function b(P, B) {
        if (!(P instanceof B))
          throw new TypeError('Cannot call a class as a function');
      }
      function m(P, B) {
        for (var d = 0; d < B.length; d++) {
          var i = B[d];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(P, i.key, i);
        }
      }
      function y(P, B, d) {
        return B && m(P.prototype, B), d && m(P, d), P;
      }
      function p(P, B, d) {
        return (
          B in P
            ? Object.defineProperty(P, B, {
                value: d,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (P[B] = d),
          P
        );
      }
      var x = (function () {
        function P(B) {
          var d = this;
          b(this, P),
            p(this, '_fiberCommits', new Map()),
            p(this, 'getCommitTree', function (i) {
              var _ = i.commitIndex,
                a = i.rootID;
              return Object(t.getCommitTree)({
                commitIndex: _,
                profilerStore: d._profilerStore,
                rootID: a,
              });
            }),
            p(this, 'getFiberCommits', function (i) {
              var _ = i.fiberID,
                a = i.rootID,
                s = d._fiberCommits.get(_);
              if (s != null) return s;
              var u = [],
                O = d._profilerStore.getDataForRoot(a);
              return (
                O.commitData.forEach(function (v, A) {
                  v.fiberActualDurations.has(_) && u.push(A);
                }),
                d._fiberCommits.set(_, u),
                u
              );
            }),
            p(this, 'getFlamegraphChartData', function (i) {
              var _ = i.commitIndex,
                a = i.commitTree,
                s = i.rootID;
              return Object(n.getChartData)({
                commitIndex: _,
                commitTree: a,
                profilerStore: d._profilerStore,
                rootID: s,
              });
            }),
            p(this, 'getInteractionsChartData', function (i) {
              var _ = i.rootID;
              return Object(r.getChartData)({
                profilerStore: d._profilerStore,
                rootID: _,
              });
            }),
            p(this, 'getRankedChartData', function (i) {
              var _ = i.commitIndex,
                a = i.commitTree,
                s = i.rootID;
              return Object(C.getChartData)({
                commitIndex: _,
                commitTree: a,
                profilerStore: d._profilerStore,
                rootID: s,
              });
            }),
            (this._profilerStore = B);
        }
        return (
          y(P, [
            {
              key: 'invalidate',
              value: function () {
                this._fiberCommits.clear(),
                  Object(t.invalidateCommitTrees)(),
                  Object(n.invalidateChartData)(),
                  Object(r.invalidateChartData)(),
                  Object(C.invalidateChartData)();
              },
            },
          ]),
          P
        );
      })();
    },
    '../react-devtools-shared/src/devtools/cache.js': function (g, o, e) {
      e.r(o),
        e.d(o, 'createResource', function () {
          return i;
        }),
        e.d(o, 'invalidateResources', function () {
          return _;
        });
      var t = e('react'),
        n = e.n(t),
        r = 0,
        C = 1,
        b = 2,
        m =
          n.a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentDispatcher;
      function y(a, s) {
        var u = m.current;
        if (u === null)
          throw new Error(
            "react-cache: read and preload may only be called from within a component's render. They are not supported in event handlers or lifecycle methods.",
          );
        return u.readContext(a, s);
      }
      var p = Object(t.createContext)(null),
        x = new Map(),
        P = new Map();
      function B(a) {
        var s = x.get(a);
        if (s === void 0) {
          var u = P.get(a);
          (s = u !== void 0 && u.useWeakMap ? new WeakMap() : new Map()),
            x.set(a, s);
        }
        return s;
      }
      function d(a, s, u, O) {
        var v = B(a),
          A = v.get(O);
        if (A === void 0) {
          var l = s(u);
          l.then(
            function (h) {
              if (c.status === r) {
                var f = c;
                (f.status = C), (f.value = h);
              }
            },
            function (h) {
              if (c.status === r) {
                var f = c;
                (f.status = b), (f.value = h);
              }
            },
          );
          var c = { status: r, value: l };
          return v.set(O, c), c;
        } else return A;
      }
      function i(a, s) {
        var u =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          O = {
            clear: function () {
              x.delete(O);
            },
            invalidate: function (A) {
              var l = B(O);
              l.delete(A);
            },
            read: function (A) {
              y(p);
              var l = s(A),
                c = d(O, a, A, l);
              switch (c.status) {
                case r: {
                  var h = c.value;
                  throw h;
                }
                case C: {
                  var f = c.value;
                  return f;
                }
                case b: {
                  var E = c.value;
                  throw E;
                }
                default:
                  return;
              }
            },
            preload: function (A) {
              y(p);
              var l = s(A);
              d(O, a, A, l);
            },
            write: function (A, l) {
              var c = B(O),
                h = { status: C, value: l };
              c.set(A, h);
            },
          };
        return P.set(O, u), O;
      }
      function _() {
        x.clear();
      }
    },
    '../react-devtools-shared/src/devtools/store.js': function (g, o, e) {
      e.r(o),
        e.d(o, 'default', function () {
          return R;
        });
      var t = e('../../node_modules/events/events.js'),
        n = e.n(t),
        r = e('../../node_modules/util/util.js'),
        C = e('../react-devtools-shared/src/constants.js'),
        b = e('../react-devtools-shared/src/types.js'),
        m = e('../react-devtools-shared/src/utils.js'),
        y = e('../react-devtools-shared/src/storage.js'),
        p = e('../react-devtools-shared/src/devtools/utils.js'),
        x = e('../react-devtools-shared/src/devtools/ProfilerStore.js');
      function P(j) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (P = function (W) {
                return typeof W;
              })
            : (P = function (W) {
                return W &&
                  typeof Symbol == 'function' &&
                  W.constructor === Symbol &&
                  W !== Symbol.prototype
                  ? 'symbol'
                  : typeof W;
              }),
          P(j)
        );
      }
      function B(j, z) {
        var W = Object.keys(j);
        if (Object.getOwnPropertySymbols) {
          var K = Object.getOwnPropertySymbols(j);
          z &&
            (K = K.filter(function (S) {
              return Object.getOwnPropertyDescriptor(j, S).enumerable;
            })),
            W.push.apply(W, K);
        }
        return W;
      }
      function d(j) {
        for (var z = 1; z < arguments.length; z++) {
          var W = arguments[z] != null ? arguments[z] : {};
          z % 2
            ? B(W, !0).forEach(function (K) {
                E(j, K, W[K]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(W))
            : B(W).forEach(function (K) {
                Object.defineProperty(
                  j,
                  K,
                  Object.getOwnPropertyDescriptor(W, K),
                );
              });
        }
        return j;
      }
      function i(j, z) {
        return s(j) || a(j, z) || _();
      }
      function _() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function a(j, z) {
        var W = [],
          K = !0,
          S = !1,
          F = void 0;
        try {
          for (
            var k = j[Symbol.iterator](), H;
            !(K = (H = k.next()).done) &&
            (W.push(H.value), !(z && W.length === z));
            K = !0
          );
        } catch (w) {
          (S = !0), (F = w);
        } finally {
          try {
            !K && k.return != null && k.return();
          } finally {
            if (S) throw F;
          }
        }
        return W;
      }
      function s(j) {
        if (Array.isArray(j)) return j;
      }
      function u(j, z) {
        if (!(j instanceof z))
          throw new TypeError('Cannot call a class as a function');
      }
      function O(j, z) {
        for (var W = 0; W < z.length; W++) {
          var K = z[W];
          (K.enumerable = K.enumerable || !1),
            (K.configurable = !0),
            'value' in K && (K.writable = !0),
            Object.defineProperty(j, K.key, K);
        }
      }
      function v(j, z, W) {
        return z && O(j.prototype, z), W && O(j, W), j;
      }
      function A(j, z) {
        return z && (P(z) === 'object' || typeof z == 'function') ? z : c(j);
      }
      function l(j) {
        return (
          (l = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (W) {
                return W.__proto__ || Object.getPrototypeOf(W);
              }),
          l(j)
        );
      }
      function c(j) {
        if (j === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return j;
      }
      function h(j, z) {
        if (typeof z != 'function' && z !== null)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (j.prototype = Object.create(z && z.prototype, {
          constructor: { value: j, writable: !0, configurable: !0 },
        })),
          z && f(j, z);
      }
      function f(j, z) {
        return (
          (f =
            Object.setPrototypeOf ||
            function (K, S) {
              return (K.__proto__ = S), K;
            }),
          f(j, z)
        );
      }
      function E(j, z, W) {
        return (
          z in j
            ? Object.defineProperty(j, z, {
                value: W,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (j[z] = W),
          j
        );
      }
      var D = function (z) {
          if (C.__DEBUG__) {
            for (
              var W,
                K = arguments.length,
                S = new Array(K > 1 ? K - 1 : 0),
                F = 1;
              F < K;
              F++
            )
              S[F - 1] = arguments[F];
            (W = console).log.apply(
              W,
              [
                '%cStore %c'.concat(z),
                'color: green; font-weight: bold;',
                'font-weight: bold;',
              ].concat(S),
            );
          }
        },
        I = 'React::DevTools::collapseNodesByDefault',
        T = 'React::DevTools::recordChangeDescriptions',
        R = (function (j) {
          h(z, j);
          function z(W, K) {
            var S;
            u(this, z),
              (S = A(this, l(z).call(this))),
              E(c(S), '_collapseNodesByDefault', !0),
              E(c(S), '_hasOwnerMetadata', !1),
              E(c(S), '_idToElement', new Map()),
              E(c(S), '_isNativeStyleEditorSupported', !1),
              E(c(S), '_isBackendStorageAPISupported', !1),
              E(c(S), '_nativeStyleEditorValidAttributes', null),
              E(c(S), '_ownersMap', new Map()),
              E(c(S), '_recordChangeDescriptions', !1),
              E(c(S), '_revision', 0),
              E(c(S), '_roots', []),
              E(c(S), '_rootIDToCapabilities', new Map()),
              E(c(S), '_rootIDToRendererID', new Map()),
              E(c(S), '_supportsNativeInspection', !0),
              E(c(S), '_supportsProfiling', !1),
              E(c(S), '_supportsReloadAndProfile', !1),
              E(c(S), '_supportsTraceUpdates', !1),
              E(c(S), '_unsupportedRendererVersionDetected', !1),
              E(c(S), '_weightAcrossRoots', 0),
              E(c(S), '_adjustParentTreeWeight', function (M, U) {
                for (var Y = !1; M != null; ) {
                  if (((M.weight += U), M.isCollapsed)) {
                    Y = !0;
                    break;
                  }
                  M = S._idToElement.get(M.parentID);
                }
                Y || (S._weightAcrossRoots += U);
              }),
              E(c(S), 'onBridgeNativeStyleEditorSupported', function (M) {
                var U = M.isSupported,
                  Y = M.validAttributes;
                (S._isNativeStyleEditorSupported = U),
                  (S._nativeStyleEditorValidAttributes = Y || null),
                  S.emit('supportsNativeStyleEditor');
              }),
              E(c(S), 'onBridgeOperations', function (M) {
                C.__DEBUG__ &&
                  (console.groupCollapsed('onBridgeOperations'),
                  D('onBridgeOperations', M.join(',')));
                for (
                  var U = !1,
                    Y = M[0],
                    Z = [],
                    q = new Map(),
                    ee = 2,
                    G = [null],
                    N = M[ee++],
                    V = ee + N;
                  ee < V;

                ) {
                  var X = M[ee++],
                    $ = Object(m.utfDecodeString)(M.slice(ee, ee + X));
                  G.push($), (ee += X);
                }
                for (; ee < M.length; ) {
                  var te = M[ee];
                  switch (te) {
                    case C.TREE_OPERATION_ADD: {
                      var Q = M[ee + 1],
                        ne = M[ee + 2];
                      if (((ee += 3), S._idToElement.has(Q)))
                        throw Error(
                          'Cannot add node '.concat(
                            Q,
                            ' because a node with that id is already in the Store.',
                          ),
                        );
                      var re = 0,
                        ce = null;
                      if (ne === b.ElementTypeRoot) {
                        C.__DEBUG__ && D('Add', 'new root node '.concat(Q));
                        var se = M[ee] > 0;
                        ee++;
                        var fe = M[ee] > 0;
                        ee++,
                          (S._roots = S._roots.concat(Q)),
                          S._rootIDToRendererID.set(Q, Y),
                          S._rootIDToCapabilities.set(Q, {
                            hasOwnerMetadata: fe,
                            supportsProfiling: se,
                          }),
                          S._idToElement.set(Q, {
                            children: [],
                            depth: -1,
                            displayName: null,
                            hocDisplayNames: null,
                            id: Q,
                            isCollapsed: !1,
                            key: null,
                            ownerID: 0,
                            parentID: 0,
                            type: ne,
                            weight: 0,
                          }),
                          (U = !0);
                      } else {
                        (ce = M[ee]), ee++, (re = M[ee]), ee++;
                        var de = M[ee],
                          ge = G[de];
                        ee++;
                        var pe = M[ee],
                          me = G[pe];
                        if (
                          (ee++,
                          C.__DEBUG__ &&
                            D(
                              'Add',
                              'node '
                                .concat(Q, ' (')
                                .concat(ge || 'null', ') as child of ')
                                .concat(ce),
                            ),
                          !S._idToElement.has(ce))
                        )
                          throw Error(
                            'Cannot add child '
                              .concat(Q, ' to parent ')
                              .concat(
                                ce,
                                ' because parent node was not found in the Store.',
                              ),
                          );
                        var oe = S._idToElement.get(ce);
                        oe.children.push(Q);
                        var ve = Object(m.separateDisplayNameAndHOCs)(ge, ne),
                          le = i(ve, 2),
                          Ee = le[0],
                          Ae = le[1],
                          ue = {
                            children: [],
                            depth: oe.depth + 1,
                            displayName: Ee,
                            hocDisplayNames: Ae,
                            id: Q,
                            isCollapsed: S._collapseNodesByDefault,
                            key: me,
                            ownerID: re,
                            parentID: oe.id,
                            type: ne,
                            weight: 1,
                          };
                        if (
                          (S._idToElement.set(Q, ue),
                          Z.push(Q),
                          S._adjustParentTreeWeight(oe, 1),
                          re > 0)
                        ) {
                          var J = S._ownersMap.get(re);
                          J === void 0 &&
                            ((J = new Set()), S._ownersMap.set(re, J)),
                            J.add(Q);
                        }
                      }
                      break;
                    }
                    case C.TREE_OPERATION_REMOVE: {
                      var ie = M[ee + 1];
                      ee += 2;
                      for (
                        var ae = function (Te) {
                            var be = M[ee];
                            if (!S._idToElement.has(be))
                              throw Error(
                                'Cannot remove node '.concat(
                                  be,
                                  ' because no matching node was found in the Store.',
                                ),
                              );
                            ee += 1;
                            var Me = S._idToElement.get(be),
                              Ue = Me.children,
                              Ne = Me.ownerID,
                              Re = Me.parentID,
                              je = Me.weight;
                            if (Ue.length > 0)
                              throw new Error(
                                'Node '.concat(
                                  be,
                                  ' was removed before its children.',
                                ),
                              );
                            S._idToElement.delete(be);
                            var Le = null;
                            if (Re === 0)
                              C.__DEBUG__ &&
                                D('Remove', 'node '.concat(be, ' root')),
                                (S._roots = S._roots.filter(function (ke) {
                                  return ke !== be;
                                })),
                                S._rootIDToRendererID.delete(be),
                                S._rootIDToCapabilities.delete(be),
                                (U = !0);
                            else {
                              if (
                                (C.__DEBUG__ &&
                                  D(
                                    'Remove',
                                    'node '
                                      .concat(be, ' from parent ')
                                      .concat(Re),
                                  ),
                                (Le = S._idToElement.get(Re)),
                                Le === void 0)
                              )
                                throw Error(
                                  'Cannot remove node '
                                    .concat(be, ' from parent ')
                                    .concat(
                                      Re,
                                      ' because no matching node was found in the Store.',
                                    ),
                                );
                              var Fe = Le.children.indexOf(be);
                              Le.children.splice(Fe, 1);
                            }
                            if (
                              (S._adjustParentTreeWeight(Le, -je),
                              q.set(be, Re),
                              S._ownersMap.delete(be),
                              Ne > 0)
                            ) {
                              var We = S._ownersMap.get(Ne);
                              We !== void 0 && We.delete(be);
                            }
                          },
                          he = 0;
                        he < ie;
                        he++
                      )
                        ae(he);
                      break;
                    }
                    case C.TREE_OPERATION_REORDER_CHILDREN: {
                      var ye = M[ee + 1],
                        Ce = M[ee + 2];
                      if (((ee += 3), !S._idToElement.has(ye)))
                        throw Error(
                          'Cannot reorder children for node '.concat(
                            ye,
                            ' because no matching node was found in the Store.',
                          ),
                        );
                      var Oe = S._idToElement.get(ye),
                        Be = Oe.children;
                      if (Be.length !== Ce)
                        throw Error(
                          'Children cannot be added or removed during a reorder operation.',
                        );
                      for (var Ie = 0; Ie < Ce; Ie++) {
                        var xe = M[ee + Ie];
                        Be[Ie] = xe;
                        {
                          var _e = S._idToElement.get(xe);
                          (_e == null || _e.parentID !== ye) &&
                            console.error(
                              'Children cannot be added or removed during a reorder operation.',
                            );
                        }
                      }
                      (ee += Ce),
                        C.__DEBUG__ &&
                          D(
                            'Re-order',
                            'Node '
                              .concat(ye, ' children ')
                              .concat(Be.join(',')),
                          );
                      break;
                    }
                    case C.TREE_OPERATION_UPDATE_TREE_BASE_DURATION:
                      ee += 3;
                      break;
                    default:
                      throw Error('Unsupported Bridge operation '.concat(te));
                  }
                }
                if ((S._revision++, U)) {
                  var Se = S._supportsProfiling;
                  (S._hasOwnerMetadata = !1),
                    (S._supportsProfiling = !1),
                    S._rootIDToCapabilities.forEach(function (Pe) {
                      var Te = Pe.hasOwnerMetadata,
                        be = Pe.supportsProfiling;
                      Te && (S._hasOwnerMetadata = !0),
                        be && (S._supportsProfiling = !0);
                    }),
                    S.emit('roots'),
                    S._supportsProfiling !== Se && S.emit('supportsProfiling');
                }
                C.__DEBUG__ &&
                  (console.log(Object(p.printStore)(c(S), !0)),
                  console.groupEnd()),
                  S.emit('mutated', [Z, q]);
              }),
              E(c(S), 'onBridgeOverrideComponentFilters', function (M) {
                (S._componentFilters = M), Object(m.saveComponentFilters)(M);
              }),
              E(c(S), 'onBridgeShutdown', function () {
                C.__DEBUG__ &&
                  D('onBridgeShutdown', 'unsubscribing from Bridge'),
                  S._bridge.removeListener('operations', S.onBridgeOperations),
                  S._bridge.removeListener('shutdown', S.onBridgeShutdown),
                  S._bridge.removeListener(
                    'isBackendStorageAPISupported',
                    S.onBridgeStorageSupported,
                  );
              }),
              E(c(S), 'onBridgeStorageSupported', function (M) {
                (S._isBackendStorageAPISupported = M),
                  S.emit('supportsReloadAndProfile');
              }),
              E(c(S), 'onBridgeUnsupportedRendererVersion', function () {
                (S._unsupportedRendererVersionDetected = !0),
                  S.emit('unsupportedRendererVersionDetected');
              }),
              C.__DEBUG__ && D('constructor', 'subscribing to Bridge'),
              (S._collapseNodesByDefault =
                Object(y.localStorageGetItem)(I) === 'true'),
              (S._recordChangeDescriptions =
                Object(y.localStorageGetItem)(T) === 'true'),
              (S._componentFilters = Object(m.getSavedComponentFilters)());
            var F = !1;
            if (K != null) {
              F = K.isProfiling === !0;
              var k = K.supportsNativeInspection,
                H = K.supportsProfiling,
                w = K.supportsReloadAndProfile,
                L = K.supportsTraceUpdates;
              (S._supportsNativeInspection = k !== !1),
                H && (S._supportsProfiling = !0),
                w && (S._supportsReloadAndProfile = !0),
                L && (S._supportsTraceUpdates = !0);
            }
            return (
              (S._bridge = W),
              W.addListener('operations', S.onBridgeOperations),
              W.addListener(
                'overrideComponentFilters',
                S.onBridgeOverrideComponentFilters,
              ),
              W.addListener('shutdown', S.onBridgeShutdown),
              W.addListener(
                'isBackendStorageAPISupported',
                S.onBridgeStorageSupported,
              ),
              W.addListener(
                'isNativeStyleEditorSupported',
                S.onBridgeNativeStyleEditorSupported,
              ),
              W.addListener(
                'unsupportedRendererVersion',
                S.onBridgeUnsupportedRendererVersion,
              ),
              (S._profilerStore = new x.default(W, c(S), F)),
              S
            );
          }
          return (
            v(z, [
              {
                key: 'assertExpectedRootMapSizes',
                value: function () {
                  this.roots.length === 0 &&
                    (this.assertMapSizeMatchesRootCount(
                      this._idToElement,
                      '_idToElement',
                    ),
                    this.assertMapSizeMatchesRootCount(
                      this._ownersMap,
                      '_ownersMap',
                    )),
                    this.assertMapSizeMatchesRootCount(
                      this._rootIDToCapabilities,
                      '_rootIDToCapabilities',
                    ),
                    this.assertMapSizeMatchesRootCount(
                      this._rootIDToRendererID,
                      '_rootIDToRendererID',
                    );
                },
              },
              {
                key: 'assertMapSizeMatchesRootCount',
                value: function (K, S) {
                  var F = this.roots.length;
                  if (K.size !== F)
                    throw new Error(
                      'Expected '
                        .concat(S, ' to contain ')
                        .concat(F, ' items, but it contains ')
                        .concat(
                          K.size,
                          ` items

`,
                        )
                        .concat(Object(r.inspect)(K, { depth: 20 })),
                    );
                },
              },
              {
                key: 'containsElement',
                value: function (K) {
                  return this._idToElement.get(K) != null;
                },
              },
              {
                key: 'getElementAtIndex',
                value: function (K) {
                  if (K < 0 || K >= this.numElements)
                    return (
                      console.warn(
                        'Invalid index '
                          .concat(K, ' specified; store contains ')
                          .concat(this.numElements, ' items.'),
                      ),
                      null
                    );
                  for (var S, F, k = 0, H = 0; H < this._roots.length; H++)
                    if (
                      ((S = this._roots[H]),
                      (F = this._idToElement.get(S)),
                      F.children.length !== 0)
                    ) {
                      if (k + F.weight > K) break;
                      k += F.weight;
                    }
                  for (var w = F, L = k - 1; K !== L; )
                    for (var M = w.children.length, U = 0; U < M; U++) {
                      var Y = w.children[U],
                        Z = this._idToElement.get(Y),
                        q = Z.isCollapsed ? 1 : Z.weight;
                      if (K <= L + q) {
                        L++, (w = Z);
                        break;
                      } else L += q;
                    }
                  return w || null;
                },
              },
              {
                key: 'getElementIDAtIndex',
                value: function (K) {
                  var S = this.getElementAtIndex(K);
                  return S === null ? null : S.id;
                },
              },
              {
                key: 'getElementByID',
                value: function (K) {
                  var S = this._idToElement.get(K);
                  return (
                    S ??
                    (console.warn('No element found with id "'.concat(K, '"')),
                    null)
                  );
                },
              },
              {
                key: 'getIndexOfElementID',
                value: function (K) {
                  var S = this.getElementByID(K);
                  if (S === null || S.parentID === 0) return null;
                  for (var F = K, k = S.parentID, H = 0; ; ) {
                    for (
                      var w = this._idToElement.get(k), L = w.children, M = 0;
                      M < L.length;
                      M++
                    ) {
                      var U = L[M];
                      if (U === F) break;
                      var Y = this._idToElement.get(U);
                      H += Y.isCollapsed ? 1 : Y.weight;
                    }
                    if (w.parentID === 0) break;
                    H++, (F = w.id), (k = w.parentID);
                  }
                  for (var Z = 0; Z < this._roots.length; Z++) {
                    var q = this._roots[Z];
                    if (q === k) break;
                    var ee = this._idToElement.get(q);
                    H += ee.weight;
                  }
                  return H;
                },
              },
              {
                key: 'getOwnersListForElement',
                value: function (K) {
                  var S = this,
                    F = [],
                    k = this._idToElement.get(K);
                  if (k != null) {
                    F.push(d({}, k, { depth: 0 }));
                    var H = this._ownersMap.get(K);
                    if (H !== void 0) {
                      var w = new Map([[K, 0]]),
                        L = Array.from(H).sort(function (M, U) {
                          return (
                            S.getIndexOfElementID(M) - S.getIndexOfElementID(U)
                          );
                        });
                      L.forEach(function (M) {
                        var U = S._idToElement.get(M);
                        if (U != null) {
                          for (var Y = U.parentID, Z = 0; Y > 0; ) {
                            if (Y === K || H.has(Y)) {
                              (Z = w.get(Y) + 1), w.set(M, Z);
                              break;
                            }
                            var q = S._idToElement.get(Y);
                            if (q == null) break;
                            Y = q.parentID;
                          }
                          if (Z === 0) throw Error('Invalid owners list');
                          F.push(d({}, U, { depth: Z }));
                        }
                      });
                    }
                  }
                  return F;
                },
              },
              {
                key: 'getRendererIDForElement',
                value: function (K) {
                  for (var S = this._idToElement.get(K); S != null; )
                    if (S.parentID === 0) {
                      var F = this._rootIDToRendererID.get(S.id);
                      return F ?? null;
                    } else S = this._idToElement.get(S.parentID);
                  return null;
                },
              },
              {
                key: 'getRootIDForElement',
                value: function (K) {
                  for (var S = this._idToElement.get(K); S != null; ) {
                    if (S.parentID === 0) return S.id;
                    S = this._idToElement.get(S.parentID);
                  }
                  return null;
                },
              },
              {
                key: 'isInsideCollapsedSubTree',
                value: function (K) {
                  for (var S = this._idToElement.get(K); S != null; ) {
                    if (S.parentID === 0) return !1;
                    if (
                      ((S = this._idToElement.get(S.parentID)),
                      S != null && S.isCollapsed)
                    )
                      return !0;
                  }
                  return !1;
                },
              },
              {
                key: 'toggleIsCollapsed',
                value: function (K, S) {
                  var F = this,
                    k = !1,
                    H = this.getElementByID(K);
                  if (H !== null) {
                    if (S) {
                      if (H.type === b.ElementTypeRoot)
                        throw Error('Root nodes cannot be collapsed');
                      if (!H.isCollapsed) {
                        (k = !0), (H.isCollapsed = !0);
                        for (
                          var w = 1 - H.weight,
                            L = this._idToElement.get(H.parentID);
                          L != null;

                        )
                          (L.weight += w),
                            (L = this._idToElement.get(L.parentID));
                      }
                    } else
                      for (var M = H; M != null; ) {
                        var U = M.isCollapsed ? 1 : M.weight;
                        if (M.isCollapsed) {
                          (k = !0), (M.isCollapsed = !1);
                          for (
                            var Y = M.isCollapsed ? 1 : M.weight,
                              Z = Y - U,
                              q = this._idToElement.get(M.parentID);
                            q != null && ((q.weight += Z), !q.isCollapsed);

                          )
                            q = this._idToElement.get(q.parentID);
                        }
                        M =
                          M.parentID !== 0
                            ? this.getElementByID(M.parentID)
                            : null;
                      }
                    if (k) {
                      var ee = 0;
                      this._roots.forEach(function (G) {
                        var N = F.getElementByID(G),
                          V = N.weight;
                        ee += V;
                      }),
                        (this._weightAcrossRoots = ee),
                        this.emit('mutated', [[], new Map()]);
                    }
                  }
                },
              },
              {
                key: 'collapseNodesByDefault',
                get: function () {
                  return this._collapseNodesByDefault;
                },
                set: function (K) {
                  (this._collapseNodesByDefault = K),
                    Object(y.localStorageSetItem)(I, K ? 'true' : 'false'),
                    this.emit('collapseNodesByDefault');
                },
              },
              {
                key: 'componentFilters',
                get: function () {
                  return this._componentFilters;
                },
                set: function (K) {
                  if (this._profilerStore.isProfiling)
                    throw Error(
                      'Cannot modify filter preferences while profiling',
                    );
                  var S = this._componentFilters.filter(function (M) {
                      return M.isEnabled;
                    }),
                    F = K.filter(function (M) {
                      return M.isEnabled;
                    }),
                    k = S.length !== F.length;
                  if (!k)
                    for (var H = 0; H < F.length; H++) {
                      var w = S[H],
                        L = F[H];
                      if (Object(m.shallowDiffers)(w, L)) {
                        k = !0;
                        break;
                      }
                    }
                  (this._componentFilters = K),
                    Object(m.saveComponentFilters)(K),
                    k && this._bridge.send('updateComponentFilters', K),
                    this.emit('componentFilters');
                },
              },
              {
                key: 'hasOwnerMetadata',
                get: function () {
                  return this._hasOwnerMetadata;
                },
              },
              {
                key: 'nativeStyleEditorValidAttributes',
                get: function () {
                  return this._nativeStyleEditorValidAttributes;
                },
              },
              {
                key: 'numElements',
                get: function () {
                  return this._weightAcrossRoots;
                },
              },
              {
                key: 'profilerStore',
                get: function () {
                  return this._profilerStore;
                },
              },
              {
                key: 'recordChangeDescriptions',
                get: function () {
                  return this._recordChangeDescriptions;
                },
                set: function (K) {
                  (this._recordChangeDescriptions = K),
                    Object(y.localStorageSetItem)(T, K ? 'true' : 'false'),
                    this.emit('recordChangeDescriptions');
                },
              },
              {
                key: 'revision',
                get: function () {
                  return this._revision;
                },
              },
              {
                key: 'rootIDToRendererID',
                get: function () {
                  return this._rootIDToRendererID;
                },
              },
              {
                key: 'roots',
                get: function () {
                  return this._roots;
                },
              },
              {
                key: 'supportsNativeInspection',
                get: function () {
                  return this._supportsNativeInspection;
                },
              },
              {
                key: 'supportsNativeStyleEditor',
                get: function () {
                  return this._isNativeStyleEditorSupported;
                },
              },
              {
                key: 'supportsProfiling',
                get: function () {
                  return this._supportsProfiling;
                },
              },
              {
                key: 'supportsReloadAndProfile',
                get: function () {
                  return (
                    this._supportsReloadAndProfile &&
                    this._isBackendStorageAPISupported
                  );
                },
              },
              {
                key: 'supportsTraceUpdates',
                get: function () {
                  return this._supportsTraceUpdates;
                },
              },
              {
                key: 'unsupportedRendererVersionDetected',
                get: function () {
                  return this._unsupportedRendererVersionDetected;
                },
              },
            ]),
            z
          );
        })(n.a);
    },
    '../react-devtools-shared/src/devtools/utils.js': function (g, o, e) {
      e.r(o),
        e.d(o, 'printElement', function () {
          return m;
        }),
        e.d(o, 'printOwnersList', function () {
          return y;
        }),
        e.d(o, 'printStore', function () {
          return p;
        }),
        e.d(o, 'sanitizeForParse', function () {
          return x;
        }),
        e.d(o, 'smartParse', function () {
          return P;
        }),
        e.d(o, 'smartStringify', function () {
          return B;
        });
      var t = e('../react-devtools-shared/src/types.js');
      function n(d) {
        return b(d) || C(d) || r();
      }
      function r() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      }
      function C(d) {
        if (
          Symbol.iterator in Object(d) ||
          Object.prototype.toString.call(d) === '[object Arguments]'
        )
          return Array.from(d);
      }
      function b(d) {
        if (Array.isArray(d)) {
          for (var i = 0, _ = new Array(d.length); i < d.length; i++)
            _[i] = d[i];
          return _;
        }
      }
      function m(d) {
        var i =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          _ = ' ';
        d.children.length > 0 && (_ = d.isCollapsed ? '\u25B8' : '\u25BE');
        var a = '';
        d.key !== null && (a = ' key="'.concat(d.key, '"'));
        var s = null;
        d.hocDisplayNames !== null && (s = n(d.hocDisplayNames)),
          d.type === t.ElementTypeMemo
            ? s === null
              ? (s = ['Memo'])
              : s.push('Memo')
            : d.type === t.ElementTypeForwardRef &&
              (s === null ? (s = ['ForwardRef']) : s.push('ForwardRef'));
        var u = s === null ? '' : ' ['.concat(s.join(']['), ']'),
          O = '';
        return (
          i && (O = ' ('.concat(d.isCollapsed ? 1 : d.weight, ')')),
          ''
            .concat('  '.repeat(d.depth + 1))
            .concat(_, ' <')
            .concat(d.displayName || 'null')
            .concat(a, '>')
            .concat(u)
            .concat(O)
        );
      }
      function y(d) {
        var i =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        return d.map(function (_) {
          return m(_, i);
        }).join(`
`);
      }
      function p(d) {
        var i =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          _ = [],
          a = 0;
        if (
          (d.roots.forEach(function (s) {
            var u = d.getElementByID(s),
              O = u.weight;
            _.push('[root]' + (i ? ' ('.concat(O, ')') : ''));
            for (var v = a; v < a + O; v++) {
              var A = d.getElementAtIndex(v);
              if (A == null)
                throw Error('Could not find element at index '.concat(v));
              _.push(m(A, i));
            }
            a += O;
          }),
          a !== d.numElements)
        )
          throw Error(
            'Inconsistent Store state. Individual root weights ('
              .concat(a, ') do not match total weight (')
              .concat(d.numElements, ')'),
          );
        return (
          d.assertExpectedRootMapSizes(),
          _.join(`
`)
        );
      }
      function x(d) {
        return typeof d == 'string' &&
          d.length >= 2 &&
          d.charAt(0) === "'" &&
          d.charAt(d.length - 1) === "'"
          ? '"' + d.substr(1, d.length - 2) + '"'
          : d;
      }
      function P(d) {
        switch (d) {
          case 'Infinity':
            return 1 / 0;
          case 'NaN':
            return NaN;
          case 'undefined':
            return;
          default:
            return JSON.parse(x(d));
        }
      }
      function B(d) {
        if (typeof d == 'number') {
          if (Number.isNaN(d)) return 'NaN';
          if (!Number.isFinite(d)) return 'Infinity';
        } else if (d === void 0) return 'undefined';
        return JSON.stringify(d);
      }
    },
    '../react-devtools-shared/src/devtools/views/Button.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Button.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Button.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return B;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../../node_modules/@reach/tooltip/es/index.js'),
        C = e('../react-devtools-shared/src/devtools/views/Button.css'),
        b = e.n(C),
        m = e('../react-devtools-shared/src/devtools/views/Tooltip.css'),
        y = e.n(m);
      function p() {
        return (
          (p =
            Object.assign ||
            function (d) {
              for (var i = 1; i < arguments.length; i++) {
                var _ = arguments[i];
                for (var a in _)
                  Object.prototype.hasOwnProperty.call(_, a) && (d[a] = _[a]);
              }
              return d;
            }),
          p.apply(this, arguments)
        );
      }
      function x(d, i) {
        if (d == null) return {};
        var _ = P(d, i),
          a,
          s;
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(d);
          for (s = 0; s < u.length; s++)
            (a = u[s]),
              !(i.indexOf(a) >= 0) &&
                (!Object.prototype.propertyIsEnumerable.call(d, a) ||
                  (_[a] = d[a]));
        }
        return _;
      }
      function P(d, i) {
        if (d == null) return {};
        var _ = {},
          a = Object.keys(d),
          s,
          u;
        for (u = 0; u < a.length; u++)
          (s = a[u]), !(i.indexOf(s) >= 0) && (_[s] = d[s]);
        return _;
      }
      function B(d) {
        var i = d.children,
          _ = d.className,
          a = _ === void 0 ? '' : _,
          s = d.title,
          u = s === void 0 ? '' : s,
          O = x(d, ['children', 'className', 'title']),
          v = n.a.createElement(
            'button',
            p({ className: ''.concat(b.a.Button, ' ').concat(a) }, O),
            n.a.createElement(
              'span',
              {
                className: ''.concat(b.a.ButtonContent, ' ').concat(a),
                tabIndex: -1,
              },
              i,
            ),
          );
        return (
          u &&
            (v = n.a.createElement(
              r.default,
              { className: y.a.Tooltip, label: u },
              v,
            )),
          v
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/ButtonIcon.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/ButtonIcon.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/ButtonIcon.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return b;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/views/ButtonIcon.css'),
        C = e.n(r);
      function b(W) {
        var K = W.className,
          S = K === void 0 ? '' : K,
          F = W.type,
          k = null;
        switch (F) {
          case 'add':
            k = m;
            break;
          case 'cancel':
            k = y;
            break;
          case 'clear':
            k = p;
            break;
          case 'close':
            k = x;
            break;
          case 'collapsed':
            k = P;
            break;
          case 'copy':
            k = B;
            break;
          case 'delete':
            k = d;
            break;
          case 'down':
            k = i;
            break;
          case 'expanded':
            k = _;
            break;
          case 'export':
            k = a;
            break;
          case 'filter':
            k = s;
            break;
          case 'import':
            k = u;
            break;
          case 'log-data':
            k = O;
            break;
          case 'more':
            k = v;
            break;
          case 'next':
            k = A;
            break;
          case 'previous':
            k = l;
            break;
          case 'record':
            k = c;
            break;
          case 'reload':
            k = h;
            break;
          case 'save':
            k = f;
            break;
          case 'search':
            k = E;
            break;
          case 'settings':
            k = D;
            break;
          case 'suspend':
            k = I;
            break;
          case 'undo':
            k = T;
            break;
          case 'up':
            k = R;
            break;
          case 'view-dom':
            k = j;
            break;
          case 'view-source':
            k = z;
            break;
          default:
            console.warn(
              'Unsupported type "'.concat(F, '" specified for ButtonIcon'),
            );
            break;
        }
        return n.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            className: ''.concat(C.a.ButtonIcon, ' ').concat(S),
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
          },
          n.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
          n.a.createElement('path', { fill: 'currentColor', d: k }),
        );
      }
      var m =
          'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
        y = `
  M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z
`,
        p = `
  M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69
  16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z
`,
        x =
          'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
        P = 'M10 17l5-5-5-5v10z',
        B = `
  M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3a2 2 0 0 0 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9a2 2 0 0 0-2
  2v10a2 2 0 0 0 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z
`,
        d = `
  M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12
  13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z
`,
        i = 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z',
        _ = 'M7 10l5 5 5-5z',
        a = 'M15.82,2.14v7H21l-9,9L3,9.18H8.18v-7ZM3,20.13H21v1.73H3Z',
        s = 'M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z',
        u = 'M8.18,18.13v-7H3l9-8.95,9,9H15.82v7ZM3,20.13H21v1.73H3Z',
        O = `
  M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41
  3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04
  1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6
  8h-4v-2h4v2zm0-4h-4v-2h4v2z
`,
        v = `
  M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 
  2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z
`,
        A = 'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z',
        l = 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
        c = 'M4,12a8,8 0 1,0 16,0a8,8 0 1,0 -16,0',
        h = `
  M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0
  6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0
  3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z
`,
        f = `
  M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z
`,
        E = `
  M8.5,22H3.7l-1.4-1.5V3.8l1.3-1.5h17.2l1,1.5v4.9h-1.3V4.3l-0.4-0.6H4.2L3.6,4.3V20l0.7,0.7h4.2V22z
  M23,13.9l-4.6,3.6l4.6,4.6l-1.1,1.1l-4.7-4.4l-3.3,4.4l-3.2-12.3L23,13.9z
`,
        D = `
  M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49
  1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38
  2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11
  1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4
  1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49
  1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5
  3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z
`,
        I = `
  M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97
  0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z
`,
        T = `
  M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88
  3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z
`,
        R = 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z',
        j = `
  M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12
  17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3
  3-1.34 3-3-1.34-3-3-3z
`,
        z = `
  M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z
  `;
    },
    '../react-devtools-shared/src/devtools/views/Components/Badge.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/Badge.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Components/Badge.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return m;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/types.js'),
        C = e(
          '../react-devtools-shared/src/devtools/views/Components/Badge.css',
        ),
        b = e.n(C);
      function m(y) {
        var p = y.className,
          x = y.hocDisplayNames,
          P = y.type,
          B = null,
          d = 0,
          i = null;
        return (
          x !== null && ((B = x[0]), (d += x.length)),
          P === r.ElementTypeMemo
            ? ((i = 'Memo'), d++)
            : P === r.ElementTypeForwardRef && ((i = 'ForwardRef'), d++),
          x === null && i === null
            ? null
            : n.a.createElement(
                t.Fragment,
                null,
                n.a.createElement(
                  'div',
                  { className: ''.concat(b.a.Badge, ' ').concat(p || '') },
                  B || i,
                ),
                d > 1 &&
                  n.a.createElement(
                    'div',
                    { className: b.a.ExtraLabel },
                    '+',
                    d - 1,
                  ),
              )
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/Components.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/Components.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Components/Components.js': function (
      g,
      o,
      e,
    ) {
      e.r(o);
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/views/Components/Tree.js'),
        C = e(
          '../react-devtools-shared/src/devtools/views/Components/SelectedElement.js',
        ),
        b = e(
          '../react-devtools-shared/src/devtools/views/Components/InspectedElementContext.js',
        ),
        m = e(
          '../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/context.js',
        ),
        y = e(
          '../react-devtools-shared/src/devtools/views/Components/OwnersListContext.js',
        ),
        p = e('../react-devtools-shared/src/devtools/views/portaledContent.js'),
        x = e('../react-devtools-shared/src/devtools/views/ModalDialog.js'),
        P = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsModal.js',
        ),
        B = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsModalContext.js',
        ),
        d = e(
          '../react-devtools-shared/src/devtools/views/Components/Components.css',
        ),
        i = e.n(d);
      function _(s) {
        return n.a.createElement(
          B.SettingsModalContextController,
          null,
          n.a.createElement(
            y.OwnersListContextController,
            null,
            n.a.createElement(
              b.InspectedElementContextController,
              null,
              n.a.createElement(
                'div',
                { className: i.a.Components },
                n.a.createElement(
                  'div',
                  { className: i.a.TreeWrapper },
                  n.a.createElement(r.default, null),
                ),
                n.a.createElement(
                  'div',
                  { className: i.a.SelectedElementWrapper },
                  n.a.createElement(
                    m.NativeStyleContextController,
                    null,
                    n.a.createElement(
                      t.Suspense,
                      { fallback: n.a.createElement(a, null) },
                      n.a.createElement(C.default, null),
                    ),
                  ),
                ),
                n.a.createElement(x.ModalDialog, null),
                n.a.createElement(P.default, null),
              ),
            ),
          ),
        );
      }
      function a() {
        return n.a.createElement(
          'div',
          { className: i.a.Loading },
          'Loading...',
        );
      }
      o.default = Object(p.default)(_);
    },
    '../react-devtools-shared/src/devtools/views/Components/EditableName.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/EditableName.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Components/EditableName.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return P;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/AutoSizeInput.js',
        ),
        C = e(
          '../react-devtools-shared/src/devtools/views/Components/EditableName.css',
        ),
        b = e.n(C);
      function m(B, d) {
        return x(B) || p(B, d) || y();
      }
      function y() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function p(B, d) {
        var i = [],
          _ = !0,
          a = !1,
          s = void 0;
        try {
          for (
            var u = B[Symbol.iterator](), O;
            !(_ = (O = u.next()).done) &&
            (i.push(O.value), !(d && i.length === d));
            _ = !0
          );
        } catch (v) {
          (a = !0), (s = v);
        } finally {
          try {
            !_ && u.return != null && u.return();
          } finally {
            if (a) throw s;
          }
        }
        return i;
      }
      function x(B) {
        if (Array.isArray(B)) return B;
      }
      function P(B) {
        var d = B.autoFocus,
          i = d === void 0 ? !1 : d,
          _ = B.initialValue,
          a = _ === void 0 ? '' : _,
          s = B.overrideNameFn,
          u = Object(t.useState)(a),
          O = m(u, 2),
          v = O[0],
          A = O[1],
          l = Object(t.useState)(!1),
          c = m(l, 2),
          h = c[0],
          f = c[1],
          E = Object(t.useCallback)(
            function (I) {
              var T = I.target,
                R = T.value.trim();
              f(!!R), A(R);
            },
            [s],
          ),
          D = Object(t.useCallback)(
            function (I) {
              switch ((I.stopPropagation(), I.key)) {
                case 'Enter':
                case 'Tab':
                  h && s(v);
                  break;
                case 'Escape':
                  A(a);
                  break;
              }
            },
            [v, A, h, a, s],
          );
        return n.a.createElement(r.default, {
          autoFocus: i,
          className: b.a.Input,
          onChange: E,
          onKeyDown: D,
          placeholder: 'new prop',
          type: 'text',
          value: v,
        });
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/EditableValue.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/EditableValue.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Components/EditableValue.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return d;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/views/Button.js'),
        C = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js'),
        b = e(
          '../react-devtools-shared/src/devtools/views/Components/EditableValue.css',
        ),
        m = e.n(b),
        y = e('../react-devtools-shared/src/devtools/views/hooks.js');
      function p(i, _) {
        return B(i) || P(i, _) || x();
      }
      function x() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function P(i, _) {
        var a = [],
          s = !0,
          u = !1,
          O = void 0;
        try {
          for (
            var v = i[Symbol.iterator](), A;
            !(s = (A = v.next()).done) &&
            (a.push(A.value), !(_ && a.length === _));
            s = !0
          );
        } catch (l) {
          (u = !0), (O = l);
        } finally {
          try {
            !s && v.return != null && v.return();
          } finally {
            if (u) throw O;
          }
        }
        return a;
      }
      function B(i) {
        if (Array.isArray(i)) return i;
      }
      function d(i) {
        var _ = i.className,
          a = _ === void 0 ? '' : _,
          s = i.overrideValueFn,
          u = i.path,
          O = i.value,
          v = Object(t.useRef)(null),
          A = Object(y.useEditableValue)(O),
          l = p(A, 2),
          c = l[0],
          h = l[1],
          f = c.editableValue,
          E = c.hasPendingChanges,
          D = c.isValid,
          I = c.parsedValue,
          T = function () {
            return h({ type: 'RESET', externalValue: O });
          },
          R = function (K) {
            var S = K.target;
            return h({
              type: 'UPDATE',
              editableValue: S.value,
              externalValue: O,
            });
          },
          j = function (K) {
            switch ((K.stopPropagation(), K.key)) {
              case 'Enter':
                D && E && s(u, I);
                break;
              case 'Escape':
                T();
                break;
            }
          },
          z = '';
        return (
          f === void 0 ? (z = '(undefined)') : (z = 'Enter valid JSON'),
          n.a.createElement(
            t.Fragment,
            null,
            n.a.createElement('input', {
              autoComplete: 'new-password',
              className: ''.concat(D ? m.a.Input : m.a.Invalid, ' ').concat(a),
              onChange: R,
              onKeyDown: j,
              placeholder: z,
              ref: v,
              type: 'text',
              value: f,
            }),
            E &&
              n.a.createElement(
                r.default,
                {
                  className: m.a.ResetButton,
                  onClick: T,
                  title: 'Reset value',
                },
                n.a.createElement(C.default, { type: 'undo' }),
              ),
          )
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/Element.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/Element.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Components/Element.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return _;
        });
      var t = e('react'),
        n = e.n(t);
      e('../react-devtools-shared/src/devtools/store.js');
      var r = e(
          '../react-devtools-shared/src/devtools/views/Components/Badge.js',
        ),
        C = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js'),
        b = e('../react-devtools-shared/src/devtools/views/utils.js'),
        m = e(
          '../react-devtools-shared/src/devtools/views/Components/TreeContext.js',
        ),
        y = e('../react-devtools-shared/src/devtools/views/context.js'),
        p = e(
          '../react-devtools-shared/src/devtools/views/Components/Element.css',
        ),
        x = e.n(p);
      function P(O, v) {
        return i(O) || d(O, v) || B();
      }
      function B() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function d(O, v) {
        var A = [],
          l = !0,
          c = !1,
          h = void 0;
        try {
          for (
            var f = O[Symbol.iterator](), E;
            !(l = (E = f.next()).done) &&
            (A.push(E.value), !(v && A.length === v));
            l = !0
          );
        } catch (D) {
          (c = !0), (h = D);
        } finally {
          try {
            !l && f.return != null && f.return();
          } finally {
            if (c) throw h;
          }
        }
        return A;
      }
      function i(O) {
        if (Array.isArray(O)) return O;
      }
      function _(O) {
        var v = O.data,
          A = O.index,
          l = O.style,
          c = Object(t.useContext)(y.StoreContext),
          h = Object(t.useContext)(m.TreeStateContext),
          f = h.ownerFlatTree,
          E = h.ownerID,
          D = h.selectedElementID,
          I = Object(t.useContext)(m.TreeDispatcherContext),
          T = f !== null ? f[A] : c.getElementAtIndex(A),
          R = Object(t.useState)(!1),
          j = P(R, 2),
          z = j[0],
          W = j[1],
          K = v.isNavigatingWithKeyboard,
          S = v.onElementMouseEnter,
          F = v.treeFocused,
          k = T === null ? null : T.id,
          H = D === k,
          w = function () {
            k !== null && I({ type: 'SELECT_OWNER', payload: k });
          },
          L = function (te) {
            var Q = te.metaKey;
            k !== null &&
              I({ type: 'SELECT_ELEMENT_BY_ID', payload: Q ? null : k });
          },
          M = function () {
            W(!0), k !== null && S(k);
          },
          U = function () {
            W(!1);
          },
          Y = function (te) {
            te.stopPropagation(), te.preventDefault();
          };
        if (T == null)
          return (
            console.warn(
              '<ElementView> Could not find element at index '.concat(A),
            ),
            null
          );
        var Z = T,
          q = Z.depth,
          ee = Z.displayName,
          G = Z.hocDisplayNames,
          N = Z.key,
          V = Z.type,
          X = x.a.Element;
        return (
          H
            ? (X = F ? x.a.SelectedElement : x.a.InactiveSelectedElement)
            : z && !K && (X = x.a.HoveredElement),
          n.a.createElement(
            'div',
            {
              className: X,
              onMouseEnter: M,
              onMouseLeave: U,
              onMouseDown: L,
              onDoubleClick: w,
              style: l,
              'data-depth': q,
            },
            n.a.createElement(
              'div',
              {
                className: x.a.Wrapper,
                style: {
                  transform: 'translateX(calc('.concat(
                    q,
                    ' * var(--indentation-size)))',
                  ),
                },
              },
              E === null
                ? n.a.createElement(s, { element: T, store: c })
                : null,
              n.a.createElement(u, { displayName: ee, id: k }),
              N &&
                n.a.createElement(
                  t.Fragment,
                  null,
                  '\xA0',
                  n.a.createElement('span', { className: x.a.KeyName }, 'key'),
                  '="',
                  n.a.createElement(
                    'span',
                    { className: x.a.KeyValue, title: N, onDoubleClick: Y },
                    N,
                  ),
                  '"',
                ),
              n.a.createElement(r.default, {
                className: x.a.Badge,
                hocDisplayNames: G,
                type: V,
              }),
            ),
          )
        );
      }
      var a = function (v) {
        v.preventDefault(), v.stopPropagation();
      };
      function s(O) {
        var v = O.element,
          A = O.store,
          l = v.children,
          c = v.id,
          h = v.isCollapsed,
          f = function (I) {
            I.preventDefault(), I.stopPropagation(), A.toggleIsCollapsed(c, !h);
          },
          E = function (I) {
            I.stopPropagation();
          };
        return l.length === 0
          ? n.a.createElement('div', { className: x.a.ExpandCollapseToggle })
          : n.a.createElement(
              'div',
              {
                className: x.a.ExpandCollapseToggle,
                onMouseDown: E,
                onClick: f,
                onDoubleClick: a,
              },
              n.a.createElement(C.default, {
                type: h ? 'collapsed' : 'expanded',
              }),
            );
      }
      function u(O) {
        var v = O.displayName,
          A = O.id,
          l = Object(t.useContext)(m.TreeStateContext),
          c = l.searchIndex,
          h = l.searchResults,
          f = l.searchText,
          E = Object(t.useMemo)(
            function () {
              return h.includes(A);
            },
            [A, h],
          ),
          D = c !== null && A === h[c];
        if (!E || v === null) return v;
        var I = Object(b.createRegExp)(f).exec(v);
        if (I === null) return v;
        var T = I.index,
          R = T + I[0].length,
          j = [];
        return (
          T > 0 &&
            j.push(n.a.createElement('span', { key: 'begin' }, v.slice(0, T))),
          j.push(
            n.a.createElement(
              'mark',
              {
                key: 'middle',
                className: D ? x.a.CurrentHighlight : x.a.Highlight,
              },
              v.slice(T, R),
            ),
          ),
          R < v.length &&
            j.push(n.a.createElement('span', { key: 'end' }, v.slice(R))),
          j
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/ExpandCollapseToggle.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/ExpandCollapseToggle.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Components/ExpandCollapseToggle.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return y;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/views/Button.js'),
        C = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js'),
        b = e(
          '../react-devtools-shared/src/devtools/views/Components/ExpandCollapseToggle.css',
        ),
        m = e.n(b);
      function y(p) {
        var x = p.isOpen,
          P = p.setIsOpen;
        return n.a.createElement(
          r.default,
          {
            className: m.a.ExpandCollapseToggle,
            onClick: function () {
              return P(function (d) {
                return !d;
              });
            },
            title: ''.concat(x ? 'Collapse' : 'Expand', ' prop value'),
          },
          n.a.createElement(C.default, { type: x ? 'expanded' : 'collapsed' }),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/HocBadges.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/HocBadges.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Components/HocBadges.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return m;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/types.js'),
        C = e(
          '../react-devtools-shared/src/devtools/views/Components/HocBadges.css',
        ),
        b = e.n(C);
      function m(y) {
        var p = y.element,
          x = p,
          P = x.hocDisplayNames,
          B = x.type,
          d = null;
        return (
          B === r.ElementTypeMemo
            ? (d = 'Memo')
            : B === r.ElementTypeForwardRef && (d = 'ForwardRef'),
          P === null && d === null
            ? null
            : n.a.createElement(
                'div',
                { className: b.a.HocBadges },
                d !== null &&
                  n.a.createElement('div', { className: b.a.Badge }, d),
                P !== null &&
                  P.map(function (i) {
                    return n.a.createElement(
                      'div',
                      { key: i, className: b.a.Badge },
                      i,
                    );
                  }),
              )
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/HooksTree.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/HooksTree.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Components/HooksTree.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'HooksTreeView', function () {
          return E;
        }),
        e.d(o, 'InnerHooksTreeView', function () {
          return D;
        });
      var t = e('../../node_modules/clipboard-js/clipboard.js'),
        n = e('react'),
        r = e.n(n),
        C = e('../react-devtools-shared/src/devtools/views/context.js'),
        b = e('../react-devtools-shared/src/devtools/views/Button.js'),
        m = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js'),
        y = e(
          '../react-devtools-shared/src/devtools/views/Components/EditableValue.js',
        ),
        p = e(
          '../react-devtools-shared/src/devtools/views/Components/ExpandCollapseToggle.js',
        ),
        x = e(
          '../react-devtools-shared/src/devtools/views/Components/InspectedElementContext.js',
        ),
        P = e(
          '../react-devtools-shared/src/devtools/views/Components/KeyValue.js',
        ),
        B = e('../react-devtools-shared/src/devtools/views/utils.js'),
        d = e(
          '../react-devtools-shared/src/devtools/views/Components/HooksTree.css',
        ),
        i = e.n(d),
        _ = e(
          '../react-devtools-shared/src/devtools/ContextMenu/useContextMenu.js',
        ),
        a = e('../react-devtools-shared/src/hydration.js');
      function s(T) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (s = function (j) {
                return typeof j;
              })
            : (s = function (j) {
                return j &&
                  typeof Symbol == 'function' &&
                  j.constructor === Symbol &&
                  j !== Symbol.prototype
                  ? 'symbol'
                  : typeof j;
              }),
          s(T)
        );
      }
      function u(T, R) {
        return A(T) || v(T, R) || O();
      }
      function O() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function v(T, R) {
        var j = [],
          z = !0,
          W = !1,
          K = void 0;
        try {
          for (
            var S = T[Symbol.iterator](), F;
            !(z = (F = S.next()).done) &&
            (j.push(F.value), !(R && j.length === R));
            z = !0
          );
        } catch (k) {
          (W = !0), (K = k);
        } finally {
          try {
            !z && S.return != null && S.return();
          } finally {
            if (W) throw K;
          }
        }
        return j;
      }
      function A(T) {
        if (Array.isArray(T)) return T;
      }
      function l(T) {
        return f(T) || h(T) || c();
      }
      function c() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      }
      function h(T) {
        if (
          Symbol.iterator in Object(T) ||
          Object.prototype.toString.call(T) === '[object Arguments]'
        )
          return Array.from(T);
      }
      function f(T) {
        if (Array.isArray(T)) {
          for (var R = 0, j = new Array(T.length); R < T.length; R++)
            j[R] = T[R];
          return j;
        }
      }
      function E(T) {
        var R = T.canEditHooks,
          j = T.hooks,
          z = T.id,
          W = Object(n.useContext)(x.InspectedElementContext),
          K = W.getInspectedElementPath,
          S = Object(n.useCallback)(
            function (k) {
              K(z, ['hooks'].concat(l(k)));
            },
            [K, z],
          ),
          F = Object(n.useCallback)(
            function () {
              return Object(t.copy)(Object(B.serializeHooksForCopy)(j));
            },
            [j],
          );
        return j === null
          ? null
          : r.a.createElement(
              'div',
              { className: i.a.HooksTreeView },
              r.a.createElement(
                'div',
                { className: i.a.HeaderRow },
                r.a.createElement('div', { className: i.a.Header }, 'hooks'),
                r.a.createElement(
                  b.default,
                  { onClick: F, title: 'Copy to clipboard' },
                  r.a.createElement(m.default, { type: 'copy' }),
                ),
              ),
              r.a.createElement(D, {
                canEditHooks: R,
                hooks: j,
                id: z,
                inspectPath: S,
                path: [],
              }),
            );
      }
      function D(T) {
        var R = T.canEditHooks,
          j = T.hooks,
          z = T.id,
          W = T.inspectPath,
          K = T.path;
        return j.map(function (S, F) {
          return r.a.createElement(I, {
            key: F,
            canEditHooks: R,
            hook: j[F],
            id: z,
            inspectPath: W,
            path: K.concat([F]),
          });
        });
      }
      function I(T) {
        var R = T.canEditHooks,
          j = T.hook,
          z = T.id,
          W = T.inspectPath,
          K = T.path,
          S = j.name,
          F = j.id,
          k = j.isStateEditable,
          H = j.subHooks,
          w = j.value,
          L = Object(n.useContext)(C.BridgeContext),
          M = Object(n.useContext)(C.StoreContext),
          U = Object(n.useState)(!1),
          Y = u(U, 2),
          Z = Y[0],
          q = Y[1],
          ee = Object(n.useCallback)(function () {
            return q(function (ne) {
              return !ne;
            });
          }, []),
          G = Object(n.useRef)(null);
        if (
          (Object(_.default)({
            data: {
              path: ['hooks'].concat(l(K)),
              type:
                j !== null && s(j) === 'object' && j.hasOwnProperty(a.meta.type)
                  ? j[a.meta.type]
                  : s(w),
            },
            id: 'SelectedElement',
            ref: G,
          }),
          j.hasOwnProperty(a.meta.inspected))
        )
          return (
            console.warn(
              'Unexpected dehydrated hook; this is a DevTools error.',
            ),
            r.a.createElement(
              'div',
              { className: i.a.Hook },
              r.a.createElement(
                'div',
                { className: i.a.NameValueRow },
                r.a.createElement(
                  'span',
                  { className: i.a.TruncationIndicator },
                  '...',
                ),
              ),
            )
          );
        var N = H.length > 0,
          V = s(w),
          X,
          $ = !1;
        if (
          (V === 'string'
            ? (X = '"'.concat(w, '"'))
            : V === 'boolean'
            ? (X = w ? 'true' : 'false')
            : V === 'number'
            ? (X = w)
            : w === null
            ? (X = 'null')
            : w === void 0
            ? (X = null)
            : Array.isArray(w)
            ? (($ = !0), (X = 'Array'))
            : V === 'object' && (($ = !0), (X = 'Object')),
          N)
        ) {
          var te = Array.isArray(H)
            ? r.a.createElement(D, {
                canEditHooks: R,
                hooks: H,
                id: z,
                inspectPath: W,
                path: K.concat(['subHooks']),
              })
            : r.a.createElement(P.default, {
                depth: 1,
                alphaSort: !1,
                inspectPath: W,
                name: 'subHooks',
                path: K.concat(['subHooks']),
                pathRoot: 'hooks',
                value: H,
              });
          return $
            ? r.a.createElement(
                'div',
                { className: i.a.Hook },
                r.a.createElement(
                  'div',
                  { ref: G, className: i.a.NameValueRow },
                  r.a.createElement(p.default, { isOpen: Z, setIsOpen: q }),
                  r.a.createElement(
                    'span',
                    {
                      onClick: ee,
                      className: S !== '' ? i.a.Name : i.a.NameAnonymous,
                    },
                    S || 'Anonymous',
                  ),
                ),
                r.a.createElement(
                  'div',
                  { className: i.a.Children, hidden: !Z },
                  r.a.createElement(P.default, {
                    depth: 1,
                    alphaSort: !1,
                    inspectPath: W,
                    name: 'DebugValue',
                    path: K.concat(['value']),
                    pathRoot: 'hooks',
                    value: w,
                  }),
                  te,
                ),
              )
            : r.a.createElement(
                'div',
                { className: i.a.Hook },
                r.a.createElement(
                  'div',
                  { ref: G, className: i.a.NameValueRow },
                  r.a.createElement(p.default, { isOpen: Z, setIsOpen: q }),
                  r.a.createElement(
                    'span',
                    {
                      onClick: ee,
                      className: S !== '' ? i.a.Name : i.a.NameAnonymous,
                    },
                    S || 'Anonymous',
                  ),
                  ' ',
                  r.a.createElement(
                    'span',
                    { className: i.a.Value, onClick: ee },
                    X,
                  ),
                ),
                r.a.createElement(
                  'div',
                  { className: i.a.Children, hidden: !Z },
                  te,
                ),
              );
        } else {
          var Q = null;
          return (
            R &&
              k &&
              (Q = function (re, ce) {
                var se = M.getRendererIDForElement(z);
                se !== null &&
                  L.send('overrideHookState', {
                    id: z,
                    hookID: F,
                    path: re.slice(K.length + 1),
                    rendererID: se,
                    value: ce,
                  });
              }),
            $
              ? r.a.createElement(
                  'div',
                  { className: i.a.Hook },
                  r.a.createElement(P.default, {
                    depth: 1,
                    alphaSort: !1,
                    inspectPath: W,
                    name: S,
                    overrideValueFn: Q,
                    path: K.concat(['value']),
                    pathRoot: 'hooks',
                    value: w,
                  }),
                )
              : r.a.createElement(
                  'div',
                  { className: i.a.Hook },
                  r.a.createElement(
                    'div',
                    { ref: G, className: i.a.NameValueRow },
                    r.a.createElement('span', {
                      className: i.a.ExpandCollapseToggleSpacer,
                    }),
                    r.a.createElement(
                      'span',
                      {
                        className:
                          typeof Q == 'function' ? i.a.EditableName : i.a.Name,
                      },
                      S,
                    ),
                    typeof Q == 'function'
                      ? r.a.createElement(y.default, {
                          overrideValueFn: Q,
                          path: [],
                          value: w,
                        })
                      : r.a.createElement('span', { className: i.a.Value }, X),
                  ),
                )
          );
        }
      }
      o.default = r.a.memo(E);
    },
    '../react-devtools-shared/src/devtools/views/Components/InspectHostNodesToggle.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return P;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/views/context.js'),
        C = e('../react-devtools-shared/src/devtools/views/Toggle.js'),
        b = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js');
      function m(B, d) {
        return x(B) || p(B, d) || y();
      }
      function y() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function p(B, d) {
        var i = [],
          _ = !0,
          a = !1,
          s = void 0;
        try {
          for (
            var u = B[Symbol.iterator](), O;
            !(_ = (O = u.next()).done) &&
            (i.push(O.value), !(d && i.length === d));
            _ = !0
          );
        } catch (v) {
          (a = !0), (s = v);
        } finally {
          try {
            !_ && u.return != null && u.return();
          } finally {
            if (a) throw s;
          }
        }
        return i;
      }
      function x(B) {
        if (Array.isArray(B)) return B;
      }
      function P() {
        var B = Object(t.useState)(!1),
          d = m(B, 2),
          i = d[0],
          _ = d[1],
          a = Object(t.useContext)(r.BridgeContext),
          s = Object(t.useCallback)(
            function (u) {
              _(u),
                u
                  ? a.send('startInspectingNative')
                  : a.send('stopInspectingNative', !1);
            },
            [a],
          );
        return (
          Object(t.useEffect)(
            function () {
              var u = function () {
                return _(!1);
              };
              return (
                a.addListener('stopInspectingNative', u),
                function () {
                  return a.removeListener('stopInspectingNative', u);
                }
              );
            },
            [a],
          ),
          n.a.createElement(
            C.default,
            {
              onChange: s,
              isChecked: i,
              title: 'Select an element in the page to inspect it',
            },
            n.a.createElement(b.default, { type: 'search' }),
          )
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/InspectedElementContext.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'InspectedElementContext', function () {
          return s;
        }),
        e.d(o, 'InspectedElementContextController', function () {
          return v;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('react-dom'),
        C = e('../react-devtools-shared/src/devtools/cache.js'),
        b = e('../react-devtools-shared/src/devtools/views/context.js'),
        m = e('../react-devtools-shared/src/hydration.js'),
        y = e(
          '../react-devtools-shared/src/devtools/views/Components/TreeContext.js',
        ),
        p = e('../react-devtools-shared/src/utils.js');
      function x(l, c) {
        var h = Object.keys(l);
        if (Object.getOwnPropertySymbols) {
          var f = Object.getOwnPropertySymbols(l);
          c &&
            (f = f.filter(function (E) {
              return Object.getOwnPropertyDescriptor(l, E).enumerable;
            })),
            h.push.apply(h, f);
        }
        return h;
      }
      function P(l) {
        for (var c = 1; c < arguments.length; c++) {
          var h = arguments[c] != null ? arguments[c] : {};
          c % 2
            ? x(h, !0).forEach(function (f) {
                B(l, f, h[f]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(h))
            : x(h).forEach(function (f) {
                Object.defineProperty(
                  l,
                  f,
                  Object.getOwnPropertyDescriptor(h, f),
                );
              });
        }
        return l;
      }
      function B(l, c, h) {
        return (
          c in l
            ? Object.defineProperty(l, c, {
                value: h,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (l[c] = h),
          l
        );
      }
      function d(l, c) {
        return a(l) || _(l, c) || i();
      }
      function i() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function _(l, c) {
        var h = [],
          f = !0,
          E = !1,
          D = void 0;
        try {
          for (
            var I = l[Symbol.iterator](), T;
            !(f = (T = I.next()).done) &&
            (h.push(T.value), !(c && h.length === c));
            f = !0
          );
        } catch (R) {
          (E = !0), (D = R);
        } finally {
          try {
            !f && I.return != null && I.return();
          } finally {
            if (E) throw D;
          }
        }
        return h;
      }
      function a(l) {
        if (Array.isArray(l)) return l;
      }
      var s = Object(t.createContext)(null);
      s.displayName = 'InspectedElementContext';
      var u = new WeakMap(),
        O = Object(C.createResource)(
          function (l) {
            var c = u.get(l);
            if (c != null) return c.promise;
            var h = null,
              f = new Promise(function (E) {
                h = E;
              });
            return u.set(l, { promise: f, resolveFn: h }), f;
          },
          function (l) {
            return l;
          },
          { useWeakMap: !0 },
        );
      function v(l) {
        var c = l.children,
          h = Object(t.useContext)(b.BridgeContext),
          f = Object(t.useContext)(b.StoreContext),
          E = Object(t.useRef)(1),
          D = Object(t.useCallback)(
            function (H, w) {
              var L = f.getRendererIDForElement(H);
              L !== null &&
                h.send('storeAsGlobal', {
                  count: E.current++,
                  id: H,
                  path: w,
                  rendererID: L,
                });
            },
            [h, f],
          ),
          I = Object(t.useCallback)(
            function (H, w) {
              var L = f.getRendererIDForElement(H);
              L !== null &&
                h.send('copyElementPath', { id: H, path: w, rendererID: L });
            },
            [h, f],
          ),
          T = Object(t.useCallback)(
            function (H, w) {
              var L = f.getRendererIDForElement(H);
              L !== null &&
                h.send('inspectElement', { id: H, path: w, rendererID: L });
            },
            [h, f],
          ),
          R = Object(t.useCallback)(
            function (H) {
              var w = f.getElementByID(H);
              return w !== null ? O.read(w) : null;
            },
            [f],
          ),
          j = Object(t.useContext)(y.TreeStateContext),
          z = j.selectedElementID,
          W = Object(t.useState)(null),
          K = d(W, 2),
          S = K[0],
          F = K[1];
        Object(t.useEffect)(
          function () {
            var H = function (L) {
              var M = L.id,
                U;
              switch (L.type) {
                case 'no-change':
                case 'not-found':
                  break;
                case 'hydrated-path':
                  if (((U = f.getElementByID(M)), U !== null && S != null)) {
                    var Y = A(L.value, L.path),
                      Z = P({}, S);
                    Object(m.fillInPath)(Z, L.value, L.path, Y),
                      O.write(U, Z),
                      M === z && F(Z);
                  }
                  break;
                case 'full-data':
                  var q = L.value,
                    ee = q.canEditFunctionProps,
                    G = q.canEditHooks,
                    N = q.canToggleSuspense,
                    V = q.canViewSource,
                    X = q.hasLegacyContext,
                    $ = q.source,
                    te = q.type,
                    Q = q.owners,
                    ne = q.context,
                    re = q.hooks,
                    ce = q.props,
                    se = q.state,
                    fe = {
                      canEditFunctionProps: ee,
                      canEditHooks: G,
                      canToggleSuspense: N,
                      canViewSource: V,
                      hasLegacyContext: X,
                      id: M,
                      source: $,
                      type: te,
                      owners:
                        Q === null
                          ? null
                          : Q.map(function (ge) {
                              var pe = Object(p.separateDisplayNameAndHOCs)(
                                  ge.displayName,
                                  ge.type,
                                ),
                                me = d(pe, 2),
                                oe = me[0],
                                ve = me[1];
                              return P({}, ge, {
                                displayName: oe,
                                hocDisplayNames: ve,
                              });
                            }),
                      context: A(ne),
                      hooks: A(re),
                      props: A(ce),
                      state: A(se),
                    };
                  if (((U = f.getElementByID(M)), U !== null)) {
                    var de = u.get(U);
                    de != null
                      ? (u.delete(U),
                        Object(r.unstable_batchedUpdates)(function () {
                          de.resolveFn(fe), F(fe);
                        }))
                      : (O.write(U, fe), M === z && F(fe));
                  }
                  break;
              }
            };
            return (
              h.addListener('inspectedElement', H),
              function () {
                return h.removeListener('inspectedElement', H);
              }
            );
          },
          [h, S, z, f],
        ),
          Object(t.useEffect)(
            function () {
              if (z === null) return function () {};
              var H = f.getRendererIDForElement(z),
                w = null,
                L = function () {
                  (w = null),
                    H !== null &&
                      h.send('inspectElement', { id: z, rendererID: H });
                };
              L();
              var M = function (Y) {
                if (Y.id === z)
                  switch (Y.type) {
                    case 'no-change':
                    case 'full-data':
                    case 'hydrated-path':
                      w !== null && clearTimeout(w), (w = setTimeout(L, 1e3));
                      break;
                  }
              };
              return (
                h.addListener('inspectedElement', M),
                function () {
                  h.removeListener('inspectedElement', M),
                    w !== null && clearTimeout(w);
                }
              );
            },
            [h, z, f],
          );
        var k = Object(t.useMemo)(
          function () {
            return {
              copyInspectedElementPath: I,
              getInspectedElement: R,
              getInspectedElementPath: T,
              storeAsGlobal: D,
            };
          },
          [I, S, R, T, D],
        );
        return n.a.createElement(s.Provider, { value: k }, c);
      }
      function A(l, c) {
        if (l !== null) {
          var h = l.cleaned,
            f = l.data,
            E = l.unserializable;
          if (c) {
            var D = c.length;
            D > 0 &&
              ((h = h.map(function (I) {
                return I.slice(D);
              })),
              (E = E.map(function (I) {
                return I.slice(D);
              })));
          }
          return Object(m.hydrate)(f, h, E);
        } else return null;
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/InspectedElementTree.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/InspectedElementTree.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Components/InspectedElementTree.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return s;
        });
      var t = e('../../node_modules/clipboard-js/clipboard.js'),
        n = e('react'),
        r = e.n(n),
        C = e('../react-devtools-shared/src/devtools/views/Button.js'),
        b = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js'),
        m = e(
          '../react-devtools-shared/src/devtools/views/Components/KeyValue.js',
        ),
        y = e(
          '../react-devtools-shared/src/devtools/views/Components/EditableName.js',
        ),
        p = e(
          '../react-devtools-shared/src/devtools/views/Components/EditableValue.js',
        ),
        x = e('../react-devtools-shared/src/devtools/views/utils.js'),
        P = e(
          '../react-devtools-shared/src/devtools/views/Components/InspectedElementTree.css',
        ),
        B = e.n(P);
      function d(u, O) {
        return a(u) || _(u, O) || i();
      }
      function i() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function _(u, O) {
        var v = [],
          A = !0,
          l = !1,
          c = void 0;
        try {
          for (
            var h = u[Symbol.iterator](), f;
            !(A = (f = h.next()).done) &&
            (v.push(f.value), !(O && v.length === O));
            A = !0
          );
        } catch (E) {
          (l = !0), (c = E);
        } finally {
          try {
            !A && h.return != null && h.return();
          } finally {
            if (l) throw c;
          }
        }
        return v;
      }
      function a(u) {
        if (Array.isArray(u)) return u;
      }
      function s(u) {
        var O = u.data,
          v = u.inspectPath,
          A = u.label,
          l = u.overrideValueFn,
          c = u.pathRoot,
          h = u.canAddEntries,
          f = h === void 0 ? !1 : h,
          E = u.showWhenEmpty,
          D = E === void 0 ? !1 : E,
          I = O != null ? Object.entries(O) : null;
        I !== null && I.sort(x.alphaSortEntries);
        var T = Object(n.useState)(0),
          R = d(T, 2),
          j = R[0],
          z = R[1],
          W = Object(n.useState)(''),
          K = d(W, 2),
          S = K[0],
          F = K[1],
          k = I === null || I.length === 0,
          H = Object(n.useCallback)(
            function () {
              return Object(t.copy)(Object(x.serializeDataForCopy)(O));
            },
            [O],
          ),
          w = Object(n.useCallback)(
            function (L, M) {
              !S ||
                (F(''),
                z(function (U) {
                  return U + 1;
                }),
                typeof l == 'function' && l(L, M));
            },
            [S, l],
          );
        return k && !D && !f
          ? null
          : r.a.createElement(
              'div',
              { className: B.a.InspectedElementTree },
              r.a.createElement(
                'div',
                { className: B.a.HeaderRow },
                r.a.createElement('div', { className: B.a.Header }, A),
                !k &&
                  r.a.createElement(
                    C.default,
                    { onClick: H, title: 'Copy to clipboard' },
                    r.a.createElement(b.default, { type: 'copy' }),
                  ),
              ),
              k &&
                !f &&
                r.a.createElement('div', { className: B.a.Empty }, 'None'),
              !k &&
                I.map(function (L) {
                  var M = d(L, 2),
                    U = M[0],
                    Y = M[1];
                  return r.a.createElement(m.default, {
                    key: U,
                    alphaSort: !0,
                    pathRoot: c,
                    depth: 1,
                    inspectPath: v,
                    name: U,
                    overrideValueFn: l,
                    path: [U],
                    value: Y,
                  });
                }),
              f &&
                r.a.createElement(
                  'div',
                  { className: B.a.AddEntry, key: j },
                  r.a.createElement(y.default, {
                    autoFocus: j > 0,
                    overrideNameFn: F,
                  }),
                  ':\xA0',
                  r.a.createElement(p.default, {
                    className: B.a.EditableValue,
                    overrideValueFn: w,
                    path: [S],
                    value: '',
                  }),
                ),
            );
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/KeyValue.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/KeyValue.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Components/KeyValue.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return v;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/devtools/views/Components/EditableValue.js',
        ),
        C = e(
          '../react-devtools-shared/src/devtools/views/Components/ExpandCollapseToggle.js',
        ),
        b = e('../react-devtools-shared/src/devtools/views/utils.js'),
        m = e('../react-devtools-shared/src/hydration.js'),
        y = e(
          '../react-devtools-shared/src/devtools/ContextMenu/useContextMenu.js',
        ),
        p = e(
          '../react-devtools-shared/src/devtools/views/Components/KeyValue.css',
        ),
        x = e.n(p);
      function P(A) {
        return i(A) || d(A) || B();
      }
      function B() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      }
      function d(A) {
        if (
          Symbol.iterator in Object(A) ||
          Object.prototype.toString.call(A) === '[object Arguments]'
        )
          return Array.from(A);
      }
      function i(A) {
        if (Array.isArray(A)) {
          for (var l = 0, c = new Array(A.length); l < A.length; l++)
            c[l] = A[l];
          return c;
        }
      }
      function _(A) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (_ = function (c) {
                return typeof c;
              })
            : (_ = function (c) {
                return c &&
                  typeof Symbol == 'function' &&
                  c.constructor === Symbol &&
                  c !== Symbol.prototype
                  ? 'symbol'
                  : typeof c;
              }),
          _(A)
        );
      }
      function a(A, l) {
        return O(A) || u(A, l) || s();
      }
      function s() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function u(A, l) {
        var c = [],
          h = !0,
          f = !1,
          E = void 0;
        try {
          for (
            var D = A[Symbol.iterator](), I;
            !(h = (I = D.next()).done) &&
            (c.push(I.value), !(l && c.length === l));
            h = !0
          );
        } catch (T) {
          (f = !0), (E = T);
        } finally {
          try {
            !h && D.return != null && D.return();
          } finally {
            if (f) throw E;
          }
        }
        return c;
      }
      function O(A) {
        if (Array.isArray(A)) return A;
      }
      function v(A) {
        var l = A.alphaSort,
          c = A.depth,
          h = A.inspectPath,
          f = A.isReadOnly,
          E = A.hidden,
          D = A.name,
          I = A.overrideValueFn,
          T = A.path,
          R = A.pathRoot,
          j = A.value,
          z = Object(t.useState)(!1),
          W = a(z, 2),
          K = W[0],
          S = W[1],
          F = Object(t.useRef)(K),
          k = Object(t.useRef)(null),
          H =
            j !== null &&
            _(j) === 'object' &&
            j[m.meta.inspectable] &&
            j[m.meta.size] !== 0;
        Object(t.useEffect)(
          function () {
            H && K && !F.current && typeof h == 'function' && h(T),
              (F.current = K);
          },
          [h, H, K, T],
        );
        var w = function () {
          return S(function (Q) {
            return !Q;
          });
        };
        Object(y.default)({
          data: {
            path: [R].concat(P(T)),
            type:
              j !== null &&
              _(j) === 'object' &&
              hasOwnProperty.call(j, m.meta.type)
                ? j[m.meta.type]
                : _(j),
          },
          id: 'SelectedElement',
          ref: k,
        });
        var L = _(j),
          M = L === 'number' || L === 'string' || L === 'boolean' || j == null,
          U = { paddingLeft: ''.concat((c - 1) * 0.75, 'rem') },
          Y = null;
        if (M) {
          var Z = j;
          L === 'string'
            ? (Z = '"'.concat(j, '"'))
            : L === 'boolean'
            ? (Z = j ? 'true' : 'false')
            : j === null
            ? (Z = 'null')
            : j === void 0 && (Z = 'undefined');
          var q = typeof I == 'function' && !f;
          Y = n.a.createElement(
            'div',
            {
              key: 'root',
              path: T,
              className: x.a.Item,
              hidden: E,
              ref: k,
              style: U,
            },
            n.a.createElement('div', {
              className: x.a.ExpandCollapseToggleSpacer,
            }),
            n.a.createElement(
              'span',
              { className: q ? x.a.EditableName : x.a.Name },
              D,
            ),
            q
              ? n.a.createElement(r.default, {
                  overrideValueFn: I,
                  path: T,
                  value: j,
                })
              : n.a.createElement('span', { className: x.a.Value }, Z),
          );
        } else if (
          hasOwnProperty.call(j, m.meta.type) &&
          !hasOwnProperty.call(j, m.meta.unserializable)
        )
          Y = n.a.createElement(
            'div',
            { ref: k, key: 'root', className: x.a.Item, hidden: E, style: U },
            H
              ? n.a.createElement(C.default, { isOpen: K, setIsOpen: S })
              : n.a.createElement('div', {
                  className: x.a.ExpandCollapseToggleSpacer,
                }),
            n.a.createElement(
              'span',
              { className: x.a.Name, onClick: H ? w : void 0 },
              D,
            ),
            n.a.createElement(
              'span',
              { className: x.a.Value, onClick: H ? w : void 0 },
              Object(b.getMetaValueLabel)(j),
            ),
          );
        else if (Array.isArray(j)) {
          var ee = j.length > 0,
            G = Object(b.getMetaValueLabel)(j);
          (Y = j.map(function (te, Q) {
            return n.a.createElement(v, {
              key: Q,
              alphaSort: l,
              depth: c + 1,
              inspectPath: h,
              isReadOnly: f,
              hidden: E || !K,
              name: Q,
              overrideValueFn: I,
              path: T.concat(Q),
              pathRoot: R,
              value: j[Q],
            });
          })),
            Y.unshift(
              n.a.createElement(
                'div',
                {
                  ref: k,
                  key: ''.concat(c, '-root'),
                  className: x.a.Item,
                  hidden: E,
                  style: U,
                },
                ee
                  ? n.a.createElement(C.default, { isOpen: K, setIsOpen: S })
                  : n.a.createElement('div', {
                      className: x.a.ExpandCollapseToggleSpacer,
                    }),
                n.a.createElement(
                  'span',
                  { className: x.a.Name, onClick: ee ? w : void 0 },
                  D,
                ),
                n.a.createElement(
                  'span',
                  { className: x.a.Value, onClick: ee ? w : void 0 },
                  G,
                ),
              ),
            );
        } else {
          var N = Object.entries(j);
          l && N.sort(b.alphaSortEntries);
          var V = N.length > 0,
            X = Object(b.getMetaValueLabel)(j),
            $ = f || !!j[m.meta.readonly];
          (Y = N.map(function (te) {
            var Q = a(te, 2),
              ne = Q[0],
              re = Q[1];
            return n.a.createElement(v, {
              key: ne,
              alphaSort: l,
              depth: c + 1,
              inspectPath: h,
              isReadOnly: $,
              hidden: E || !K,
              name: ne,
              overrideValueFn: I,
              path: T.concat(ne),
              pathRoot: R,
              value: re,
            });
          })),
            Y.unshift(
              n.a.createElement(
                'div',
                {
                  ref: k,
                  key: ''.concat(c, '-root'),
                  className: x.a.Item,
                  hidden: E,
                  style: U,
                },
                V
                  ? n.a.createElement(C.default, { isOpen: K, setIsOpen: S })
                  : n.a.createElement('div', {
                      className: x.a.ExpandCollapseToggleSpacer,
                    }),
                n.a.createElement(
                  'span',
                  { className: x.a.Name, onClick: V ? w : void 0 },
                  D,
                ),
                n.a.createElement(
                  'span',
                  { className: x.a.Value, onClick: V ? w : void 0 },
                  X,
                ),
              ),
            );
        }
        return Y;
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/AutoSizeInput.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/AutoSizeInput.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/AutoSizeInput.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return p;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/AutoSizeInput.css',
        ),
        C = e.n(r);
      function b() {
        return (
          (b =
            Object.assign ||
            function (x) {
              for (var P = 1; P < arguments.length; P++) {
                var B = arguments[P];
                for (var d in B)
                  Object.prototype.hasOwnProperty.call(B, d) && (x[d] = B[d]);
              }
              return x;
            }),
          b.apply(this, arguments)
        );
      }
      function m(x, P) {
        if (x == null) return {};
        var B = y(x, P),
          d,
          i;
        if (Object.getOwnPropertySymbols) {
          var _ = Object.getOwnPropertySymbols(x);
          for (i = 0; i < _.length; i++)
            (d = _[i]),
              !(P.indexOf(d) >= 0) &&
                (!Object.prototype.propertyIsEnumerable.call(x, d) ||
                  (B[d] = x[d]));
        }
        return B;
      }
      function y(x, P) {
        if (x == null) return {};
        var B = {},
          d = Object.keys(x),
          i,
          _;
        for (_ = 0; _ < d.length; _++)
          (i = d[_]), !(P.indexOf(i) >= 0) && (B[i] = x[i]);
        return B;
      }
      function p(x) {
        var P = x.className,
          B = x.onFocus,
          d = x.placeholder,
          i = x.value,
          _ = m(x, ['className', 'onFocus', 'placeholder', 'value']),
          a = Object(t.useRef)(null),
          s = Object(t.useRef)(null),
          u = function (A) {
            s.current !== null &&
              ((s.current.selectionStart = 0),
              (s.current.selectionEnd = i.length)),
              typeof B == 'function' && B(A);
          };
        Object(t.useLayoutEffect)(function () {
          if (
            !(
              typeof window.getComputedStyle != 'function' || s.current === null
            )
          ) {
            var v = window.getComputedStyle(s.current);
            if (!!v && a.current !== null) {
              var A = a.current.style;
              (A.border = v.border),
                (A.fontFamily = v.fontFamily),
                (A.fontSize = v.fontSize),
                (A.fontStyle = v.fontStyle),
                (A.fontWeight = v.fontWeight),
                (A.letterSpacing = v.letterSpacing),
                (A.padding = v.padding);
            }
          }
        }, []),
          Object(t.useLayoutEffect)(
            function () {
              if (a.current !== null) {
                var v = a.current.getBoundingClientRect().width;
                if (!!v) {
                  var A = Math.ceil(v) + 1;
                  s.current !== null &&
                    (s.current.style.width = ''.concat(A, 'px'));
                }
              }
            },
            [i],
          );
        var O = i === '' || i === '""';
        return n.a.createElement(
          t.Fragment,
          null,
          n.a.createElement(
            'input',
            b(
              {
                ref: s,
                className: ''.concat(P || '', ' ').concat(C.a.Input),
                onFocus: u,
                placeholder: d,
                value: O ? '' : i,
              },
              _,
            ),
          ),
          n.a.createElement(
            'div',
            { ref: a, className: C.a.HiddenDiv },
            O ? d : i,
          ),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/LayoutViewer.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/LayoutViewer.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/LayoutViewer.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return b;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/LayoutViewer.css',
        ),
        C = e.n(r);
      function b(y) {
        y.id;
        var p = y.layout,
          x = p.height,
          P = p.margin,
          B = p.padding,
          d = p.y,
          i = p.width,
          _ = p.x;
        return n.a.createElement(
          'div',
          { className: C.a.LayoutViewer },
          n.a.createElement('div', { className: C.a.Header }, 'layout'),
          n.a.createElement(
            'div',
            { className: C.a.DashedBox },
            n.a.createElement(
              'div',
              { className: C.a.LabelRow },
              n.a.createElement('label', { className: C.a.Label }, 'margin'),
              n.a.createElement('label', null, P.top || '-'),
            ),
            n.a.createElement(
              'div',
              { className: C.a.BoxRow },
              n.a.createElement('label', null, P.left || '-'),
              n.a.createElement(
                'div',
                { className: C.a.SolidBox },
                n.a.createElement(
                  'div',
                  { className: C.a.LabelRow },
                  n.a.createElement(
                    'label',
                    { className: C.a.Label },
                    'padding',
                  ),
                  n.a.createElement('label', null, B.top || '-'),
                ),
                n.a.createElement(
                  'div',
                  { className: C.a.BoxRow },
                  n.a.createElement('label', null, B.left || '-'),
                  n.a.createElement(
                    'div',
                    { className: C.a.DashedBox },
                    n.a.createElement(
                      'div',
                      { className: C.a.LabelRow },
                      m(i),
                      ' x ',
                      m(x),
                      ' (',
                      m(_),
                      ', ',
                      m(d),
                      ')',
                    ),
                  ),
                  n.a.createElement('label', null, B.right || '-'),
                ),
                n.a.createElement('label', null, B.bottom || '-'),
              ),
              n.a.createElement('label', null, P.right || '-'),
            ),
            n.a.createElement('label', null, P.bottom || '-'),
          ),
        );
      }
      function m(y) {
        return Math.round(y) === y ? y : y.toFixed(1);
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/StyleEditor.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/StyleEditor.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/StyleEditor.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return u;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('react-dom'),
        C = e('../../node_modules/clipboard-js/clipboard.js'),
        b = e('../react-devtools-shared/src/devtools/views/context.js'),
        m = e('../react-devtools-shared/src/devtools/views/Button.js'),
        y = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js'),
        p = e('../react-devtools-shared/src/devtools/views/utils.js'),
        x = e(
          '../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/AutoSizeInput.js',
        ),
        P = e(
          '../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/StyleEditor.css',
        ),
        B = e.n(P),
        d = e('../react-devtools-shared/src/devtools/utils.js');
      function i(l, c) {
        return s(l) || a(l, c) || _();
      }
      function _() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function a(l, c) {
        var h = [],
          f = !0,
          E = !1,
          D = void 0;
        try {
          for (
            var I = l[Symbol.iterator](), T;
            !(f = (T = I.next()).done) &&
            (h.push(T.value), !(c && h.length === c));
            f = !0
          );
        } catch (R) {
          (E = !0), (D = R);
        } finally {
          try {
            !f && I.return != null && I.return();
          } finally {
            if (E) throw D;
          }
        }
        return h;
      }
      function s(l) {
        if (Array.isArray(l)) return l;
      }
      function u(l) {
        var c = l.id,
          h = l.style,
          f = Object(t.useContext)(b.BridgeContext),
          E = Object(t.useContext)(b.StoreContext),
          D = function (z, W, K) {
            var S = E.getRendererIDForElement(c);
            S !== null &&
              f.send('NativeStyleEditor_renameAttribute', {
                id: c,
                rendererID: S,
                oldName: z,
                newName: W,
                value: K,
              });
          },
          I = function (z, W) {
            var K = E.getRendererIDForElement(c);
            K !== null &&
              f.send('NativeStyleEditor_setValue', {
                id: c,
                rendererID: K,
                name: z,
                value: W,
              });
          },
          T = Object(t.useMemo)(
            function () {
              return Array.from(Object.keys(h));
            },
            [h],
          ),
          R = function () {
            return Object(C.copy)(Object(p.serializeDataForCopy)(h));
          };
        return n.a.createElement(
          'div',
          { className: B.a.StyleEditor },
          n.a.createElement(
            'div',
            { className: B.a.HeaderRow },
            n.a.createElement(
              'div',
              { className: B.a.Header },
              n.a.createElement('div', { className: B.a.Brackets }, 'style {'),
            ),
            n.a.createElement(
              m.default,
              { onClick: R, title: 'Copy to clipboard' },
              n.a.createElement(y.default, { type: 'copy' }),
            ),
          ),
          T.length > 0 &&
            T.map(function (j) {
              return n.a.createElement(v, {
                key: j,
                attribute: j,
                changeAttribute: D,
                changeValue: I,
                validAttributes: E.nativeStyleEditorValidAttributes,
                value: h[j],
              });
            }),
          n.a.createElement(O, {
            changeAttribute: D,
            changeValue: I,
            validAttributes: E.nativeStyleEditorValidAttributes,
          }),
          n.a.createElement('div', { className: B.a.Brackets }, '}'),
        );
      }
      function O(l) {
        l.changeAttribute;
        var c = l.changeValue,
          h = l.validAttributes,
          f = Object(t.useState)(0),
          E = i(f, 2),
          D = E[0],
          I = E[1],
          T = function () {
            return I(D + 1);
          },
          R = Object(t.useRef)(''),
          j = function (K, S, F) {
            R.current = S;
          },
          z = function (K, S) {
            R.current !== '' && (S !== '' && c(R.current, S), T());
          };
        return n.a.createElement(v, {
          key: D,
          attribute: '',
          attributePlaceholder: 'attribute',
          changeAttribute: j,
          changeValue: z,
          validAttributes: h,
          value: '',
          valuePlaceholder: 'value',
        });
      }
      function v(l) {
        var c = l.attribute,
          h = l.attributePlaceholder,
          f = l.changeAttribute,
          E = l.changeValue,
          D = l.validAttributes,
          I = l.value,
          T = l.valuePlaceholder,
          R = Object(t.useState)(c),
          j = i(R, 2),
          z = j[0],
          W = j[1],
          K = Object(t.useState)(JSON.stringify(I)),
          S = i(K, 2),
          F = S[0],
          k = S[1],
          H = Object(t.useState)(!0),
          w = i(H, 2),
          L = w[0],
          M = w[1],
          U = Object(t.useState)(!0),
          Y = i(U, 2),
          Z = Y[0],
          q = Y[1],
          ee = function (Q) {
            var ne = Q === '' || D === null || D.indexOf(Q) >= 0;
            Object(r.unstable_batchedUpdates)(function () {
              W(Q), M(ne);
            });
          },
          G = function (Q) {
            var ne = !1;
            try {
              JSON.parse(Object(d.sanitizeForParse)(Q)), (ne = !0);
            } catch {}
            Object(r.unstable_batchedUpdates)(function () {
              k(Q), q(ne);
            });
          },
          N = function () {
            W(c);
          },
          V = function () {
            k(I);
          },
          X = function () {
            if (L && Z) {
              var Q = JSON.parse(Object(d.sanitizeForParse)(F));
              I !== Q && E(c, Q);
            }
          },
          $ = function () {
            L && Z && c !== z && f(c, z, I);
          };
        return n.a.createElement(
          'div',
          { className: B.a.Row },
          n.a.createElement(A, {
            className: L ? B.a.Attribute : B.a.Invalid,
            onChange: ee,
            onReset: N,
            onSubmit: $,
            placeholder: h,
            value: z,
          }),
          ':\xA0',
          n.a.createElement(A, {
            className: Z ? B.a.Value : B.a.Invalid,
            onChange: G,
            onReset: V,
            onSubmit: X,
            placeholder: T,
            value: F,
          }),
          ';',
        );
      }
      function A(l) {
        var c = l.className,
          h = l.onChange,
          f = l.onReset,
          E = l.onSubmit,
          D = l.placeholder,
          I = l.value,
          T = function (j) {
            switch (j.key) {
              case 'Enter':
                E();
                break;
              case 'Escape':
                f();
                break;
              case 'ArrowDown':
              case 'ArrowLeft':
              case 'ArrowRight':
              case 'ArrowUp':
                j.stopPropagation();
                break;
            }
          };
        return n.a.createElement(x.default, {
          className: ''.concat(c, ' ').concat(B.a.Input),
          onBlur: E,
          onChange: function (j) {
            return h(j.target.value);
          },
          onKeyDown: T,
          placeholder: D,
          value: I,
        });
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/context.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'NativeStyleContext', function () {
          return B;
        }),
        e.d(o, 'NativeStyleContextController', function () {
          return _;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('react-dom'),
        C = e('../react-devtools-shared/src/devtools/cache.js'),
        b = e('../react-devtools-shared/src/devtools/views/context.js'),
        m = e(
          '../react-devtools-shared/src/devtools/views/Components/TreeContext.js',
        );
      function y(a, s) {
        return P(a) || x(a, s) || p();
      }
      function p() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function x(a, s) {
        var u = [],
          O = !0,
          v = !1,
          A = void 0;
        try {
          for (
            var l = a[Symbol.iterator](), c;
            !(O = (c = l.next()).done) &&
            (u.push(c.value), !(s && u.length === s));
            O = !0
          );
        } catch (h) {
          (v = !0), (A = h);
        } finally {
          try {
            !O && l.return != null && l.return();
          } finally {
            if (v) throw A;
          }
        }
        return u;
      }
      function P(a) {
        if (Array.isArray(a)) return a;
      }
      var B = Object(t.createContext)(null);
      B.displayName = 'NativeStyleContext';
      var d = new WeakMap(),
        i = Object(C.createResource)(
          function (a) {
            var s = d.get(a);
            if (s != null) return s.promise;
            var u = null,
              O = new Promise(function (v) {
                u = v;
              });
            return d.set(a, { promise: O, resolveFn: u }), O;
          },
          function (a) {
            return a;
          },
          { useWeakMap: !0 },
        );
      function _(a) {
        var s = a.children,
          u = Object(t.useContext)(b.BridgeContext),
          O = Object(t.useContext)(b.StoreContext),
          v = Object(t.useCallback)(
            function (I) {
              var T = O.getElementByID(I);
              return T !== null ? i.read(T) : null;
            },
            [O],
          ),
          A = Object(t.useContext)(m.TreeStateContext),
          l = A.selectedElementID,
          c = Object(t.useState)(null),
          h = y(c, 2),
          f = h[0],
          E = h[1];
        Object(t.useEffect)(
          function () {
            var I = function (R) {
              var j = R.id,
                z = R.layout,
                W = R.style,
                K = O.getElementByID(j);
              if (K !== null) {
                var S = { layout: z, style: W },
                  F = d.get(K);
                F != null
                  ? (d.delete(K),
                    Object(r.unstable_batchedUpdates)(function () {
                      F.resolveFn(S), E(S);
                    }))
                  : (i.write(K, S), j === l && E(S));
              }
            };
            return (
              u.addListener('NativeStyleEditor_styleAndLayout', I),
              function () {
                return u.removeListener('NativeStyleEditor_styleAndLayout', I);
              }
            );
          },
          [u, f, l, O],
        ),
          Object(t.useEffect)(
            function () {
              if (l === null) return function () {};
              var I = O.getRendererIDForElement(l),
                T = null,
                R = function () {
                  (T = null),
                    I !== null &&
                      u.send('NativeStyleEditor_measure', {
                        id: l,
                        rendererID: I,
                      });
                };
              R();
              var j = function (W) {
                var K = W.id;
                K === l &&
                  (T !== null && clearTimeout(T), (T = setTimeout(R, 1e3)));
              };
              return (
                u.addListener('NativeStyleEditor_styleAndLayout', j),
                function () {
                  u.removeListener('NativeStyleEditor_styleAndLayout', j),
                    T !== null && clearTimeout(T);
                }
              );
            },
            [u, l, O],
          );
        var D = Object(t.useMemo)(
          function () {
            return { getStyleAndLayout: v };
          },
          [f, v],
        );
        return n.a.createElement(B.Provider, { value: D }, s);
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/index.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return x;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/views/context.js'),
        C = e('../react-devtools-shared/src/devtools/views/hooks.js'),
        b = e(
          '../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/context.js',
        ),
        m = e(
          '../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/LayoutViewer.js',
        ),
        y = e(
          '../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/StyleEditor.js',
        ),
        p = e(
          '../react-devtools-shared/src/devtools/views/Components/TreeContext.js',
        );
      function x(B) {
        var d = Object(t.useContext)(r.StoreContext),
          i = Object(t.useMemo)(
            function () {
              return {
                getCurrentValue: function () {
                  return d.supportsNativeStyleEditor;
                },
                subscribe: function (s) {
                  return (
                    d.addListener('supportsNativeStyleEditor', s),
                    function () {
                      d.removeListener('supportsNativeStyleEditor', s);
                    }
                  );
                },
              };
            },
            [d],
          ),
          _ = Object(C.useSubscription)(i);
        return _ ? n.a.createElement(P, null) : null;
      }
      function P(B) {
        var d = Object(t.useContext)(b.NativeStyleContext),
          i = d.getStyleAndLayout,
          _ = Object(t.useContext)(p.TreeStateContext),
          a = _.inspectedElementID;
        if (a === null) return null;
        var s = i(a);
        if (s === null) return null;
        var u = s.layout,
          O = s.style;
        return n.a.createElement(
          t.Fragment,
          null,
          u !== null && n.a.createElement(m.default, { id: a, layout: u }),
          O !== null &&
            n.a.createElement(y.default, { id: a, style: O !== null ? O : {} }),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/OwnersListContext.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'OwnersListContext', function () {
          return _;
        }),
        e.d(o, 'OwnersListContextController', function () {
          return u;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/cache.js'),
        C = e('../react-devtools-shared/src/devtools/views/context.js'),
        b = e(
          '../react-devtools-shared/src/devtools/views/Components/TreeContext.js',
        ),
        m = e('../react-devtools-shared/src/utils.js');
      function y(O, v) {
        var A = Object.keys(O);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(O);
          v &&
            (l = l.filter(function (c) {
              return Object.getOwnPropertyDescriptor(O, c).enumerable;
            })),
            A.push.apply(A, l);
        }
        return A;
      }
      function p(O) {
        for (var v = 1; v < arguments.length; v++) {
          var A = arguments[v] != null ? arguments[v] : {};
          v % 2
            ? y(A, !0).forEach(function (l) {
                x(O, l, A[l]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(A))
            : y(A).forEach(function (l) {
                Object.defineProperty(
                  O,
                  l,
                  Object.getOwnPropertyDescriptor(A, l),
                );
              });
        }
        return O;
      }
      function x(O, v, A) {
        return (
          v in O
            ? Object.defineProperty(O, v, {
                value: A,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (O[v] = A),
          O
        );
      }
      function P(O, v) {
        return i(O) || d(O, v) || B();
      }
      function B() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function d(O, v) {
        var A = [],
          l = !0,
          c = !1,
          h = void 0;
        try {
          for (
            var f = O[Symbol.iterator](), E;
            !(l = (E = f.next()).done) &&
            (A.push(E.value), !(v && A.length === v));
            l = !0
          );
        } catch (D) {
          (c = !0), (h = D);
        } finally {
          try {
            !l && f.return != null && f.return();
          } finally {
            if (c) throw h;
          }
        }
        return A;
      }
      function i(O) {
        if (Array.isArray(O)) return O;
      }
      var _ = Object(t.createContext)(null);
      _.displayName = 'OwnersListContext';
      var a = new WeakMap(),
        s = Object(r.createResource)(
          function (O) {
            var v = a.get(O);
            if (v != null) return v.promise;
            var A = null,
              l = new Promise(function (c) {
                A = c;
              });
            return a.set(O, { promise: l, resolveFn: A }), l;
          },
          function (O) {
            return O;
          },
          { useWeakMap: !0 },
        );
      function u(O) {
        var v = O.children,
          A = Object(t.useContext)(C.BridgeContext),
          l = Object(t.useContext)(C.StoreContext),
          c = Object(t.useContext)(b.TreeStateContext),
          h = c.ownerID,
          f = Object(t.useCallback)(
            function (E) {
              var D = l.getElementByID(E);
              return D !== null ? s.read(D) : null;
            },
            [l],
          );
        return (
          Object(t.useEffect)(
            function () {
              var E = function (I) {
                var T = I.id,
                  R = l.getElementByID(T);
                if (R !== null) {
                  var j = a.get(R);
                  j != null &&
                    (a.delete(R),
                    j.resolveFn(
                      I.owners === null
                        ? null
                        : I.owners.map(function (z) {
                            var W = Object(m.separateDisplayNameAndHOCs)(
                                z.displayName,
                                z.type,
                              ),
                              K = P(W, 2),
                              S = K[0],
                              F = K[1];
                            return p({}, z, {
                              displayName: S,
                              hocDisplayNames: F,
                            });
                          }),
                    ));
                }
              };
              return (
                A.addListener('ownersList', E),
                function () {
                  return A.removeListener('ownersList', E);
                }
              );
            },
            [A, l],
          ),
          Object(t.useEffect)(
            function () {
              if (h !== null) {
                var E = l.getRendererIDForElement(h);
                E !== null && A.send('getOwnersList', { id: h, rendererID: E });
              }
              return function () {};
            },
            [A, h, l],
          ),
          n.a.createElement(_.Provider, { value: f }, v)
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/OwnersStack.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/OwnersStack.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Components/OwnersStack.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return h;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../../node_modules/@reach/tooltip/es/index.js'),
        C = e('../../node_modules/@reach/menu-button/es/index.js'),
        b = e('../react-devtools-shared/src/devtools/views/Button.js'),
        m = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js'),
        y = e('../react-devtools-shared/src/devtools/views/Toggle.js'),
        p = e(
          '../react-devtools-shared/src/devtools/views/Components/Badge.js',
        ),
        x = e(
          '../react-devtools-shared/src/devtools/views/Components/OwnersListContext.js',
        ),
        P = e(
          '../react-devtools-shared/src/devtools/views/Components/TreeContext.js',
        ),
        B = e('../react-devtools-shared/src/devtools/views/hooks.js'),
        d = e('../react-devtools-shared/src/devtools/views/context.js'),
        i = e(
          '../react-devtools-shared/src/devtools/views/Components/OwnersStack.css',
        ),
        _ = e.n(i);
      function a(I, T) {
        return O(I) || u(I, T) || s();
      }
      function s() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function u(I, T) {
        var R = [],
          j = !0,
          z = !1,
          W = void 0;
        try {
          for (
            var K = I[Symbol.iterator](), S;
            !(j = (S = K.next()).done) &&
            (R.push(S.value), !(T && R.length === T));
            j = !0
          );
        } catch (F) {
          (z = !0), (W = F);
        } finally {
          try {
            !j && K.return != null && K.return();
          } finally {
            if (z) throw W;
          }
        }
        return R;
      }
      function O(I) {
        if (Array.isArray(I)) return I;
      }
      function v(I, T) {
        var R = Object.keys(I);
        if (Object.getOwnPropertySymbols) {
          var j = Object.getOwnPropertySymbols(I);
          T &&
            (j = j.filter(function (z) {
              return Object.getOwnPropertyDescriptor(I, z).enumerable;
            })),
            R.push.apply(R, j);
        }
        return R;
      }
      function A(I) {
        for (var T = 1; T < arguments.length; T++) {
          var R = arguments[T] != null ? arguments[T] : {};
          T % 2
            ? v(R, !0).forEach(function (j) {
                l(I, j, R[j]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(R))
            : v(R).forEach(function (j) {
                Object.defineProperty(
                  I,
                  j,
                  Object.getOwnPropertyDescriptor(R, j),
                );
              });
        }
        return I;
      }
      function l(I, T, R) {
        return (
          T in I
            ? Object.defineProperty(I, T, {
                value: R,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (I[T] = R),
          I
        );
      }
      function c(I, T) {
        switch (T.type) {
          case 'UPDATE_OWNER_ID':
            var R = T.owners.findIndex(function (j) {
              return j.id === T.ownerID;
            });
            return { ownerID: T.ownerID, owners: T.owners, selectedIndex: R };
          case 'UPDATE_SELECTED_INDEX':
            return A({}, I, { selectedIndex: T.selectedIndex });
          default:
            throw new Error('Invalid action "'.concat(T.type, '"'));
        }
      }
      function h() {
        var I = Object(t.useContext)(x.OwnersListContext),
          T = Object(t.useContext)(P.TreeStateContext),
          R = T.ownerID,
          j = Object(t.useContext)(P.TreeDispatcherContext),
          z = Object(t.useReducer)(c, {
            ownerID: null,
            owners: [],
            selectedIndex: 0,
          }),
          W = a(z, 2),
          K = W[0],
          S = W[1];
        if (R === null)
          S({ type: 'UPDATE_OWNER_ID', ownerID: null, owners: [] });
        else if (R !== K.ownerID) {
          var F =
            K.owners.findIndex(function (G) {
              return G.id === R;
            }) >= 0;
          S({
            type: 'UPDATE_OWNER_ID',
            ownerID: R,
            owners: F ? K.owners : I(R) || [],
          });
        }
        var k = K.owners,
          H = K.selectedIndex,
          w = Object(t.useCallback)(
            function (G) {
              if (G !== null) {
                var N = k.indexOf(G);
                S({
                  type: 'UPDATE_SELECTED_INDEX',
                  selectedIndex: N >= 0 ? N : 0,
                }),
                  j({ type: 'SELECT_OWNER', payload: G.id });
              } else
                S({ type: 'UPDATE_SELECTED_INDEX', selectedIndex: 0 }),
                  j({ type: 'RESET_OWNER_STACK' });
            },
            [k, j],
          ),
          L = Object(t.useState)(0),
          M = a(L, 2),
          U = M[0],
          Y = M[1],
          Z = Object(t.useRef)(null),
          q = Object(B.useIsOverflowing)(Z, U),
          ee = k[H];
        return (
          Object(t.useLayoutEffect)(
            function () {
              if (Z.current === null || q) return function () {};
              for (var G = 0, N = 0; N < k.length; N++) {
                var V = Z.current.children[N],
                  X = getComputedStyle(V);
                G +=
                  V.offsetWidth +
                  parseInt(X.marginLeft, 10) +
                  parseInt(X.marginRight, 10);
              }
              Y(G);
            },
            [Z, q, k.length],
          ),
          n.a.createElement(
            'div',
            { className: _.a.OwnerStack },
            n.a.createElement(
              'div',
              { className: _.a.Bar, ref: Z },
              q &&
                n.a.createElement(
                  t.Fragment,
                  null,
                  n.a.createElement(f, {
                    owners: k,
                    selectedIndex: H,
                    selectOwner: w,
                  }),
                  n.a.createElement(D, {
                    owners: k,
                    selectedIndex: H,
                    selectOwner: w,
                  }),
                  ee != null &&
                    n.a.createElement(E, {
                      owner: ee,
                      isSelected: !0,
                      selectOwner: w,
                    }),
                ),
              !q &&
                k.map(function (G, N) {
                  return n.a.createElement(E, {
                    key: N,
                    owner: G,
                    isSelected: N === H,
                    selectOwner: w,
                  });
                }),
            ),
            n.a.createElement('div', { className: _.a.VRule }),
            n.a.createElement(
              b.default,
              {
                className: _.a.IconButton,
                onClick: function () {
                  return w(null);
                },
                title: 'Back to tree view',
              },
              n.a.createElement(m.default, { type: 'close' }),
            ),
          )
        );
      }
      function f(I) {
        var T = I.owners;
        I.selectedIndex;
        for (
          var R = I.selectOwner,
            j = Object(t.useContext)(d.StoreContext),
            z = [],
            W = function (F) {
              var k = T[F],
                H = j.containsElement(k.id);
              z.push(
                n.a.createElement(
                  C.MenuItem,
                  {
                    key: k.id,
                    className: ''
                      .concat(_.a.Component, ' ')
                      .concat(H ? '' : _.a.NotInStore),
                    onSelect: function () {
                      return H ? R(k) : null;
                    },
                  },
                  k.displayName,
                  n.a.createElement(p.default, {
                    className: _.a.Badge,
                    hocDisplayNames: k.hocDisplayNames,
                    type: k.type,
                  }),
                ),
              );
            },
            K = T.length - 1;
          K >= 0;
          K--
        )
          W(K);
        return n.a.createElement(
          C.Menu,
          null,
          n.a.createElement(
            C.MenuButton,
            { className: _.a.MenuButton },
            n.a.createElement(
              r.default,
              { label: 'Open elements dropdown' },
              n.a.createElement(
                'span',
                { className: _.a.MenuButtonContent, tabIndex: -1 },
                n.a.createElement(m.default, { type: 'more' }),
              ),
            ),
          ),
          n.a.createElement(C.MenuList, { className: _.a.Modal }, z),
        );
      }
      function E(I) {
        var T = I.isSelected,
          R = I.owner,
          j = I.selectOwner,
          z = Object(t.useContext)(d.StoreContext),
          W = R.displayName,
          K = R.hocDisplayNames,
          S = R.type,
          F = z.containsElement(R.id),
          k = Object(t.useCallback)(
            function () {
              F && j(R);
            },
            [F, j, R],
          );
        return n.a.createElement(
          y.default,
          {
            className: ''
              .concat(_.a.Component, ' ')
              .concat(F ? '' : _.a.NotInStore),
            isChecked: T,
            onChange: k,
          },
          W,
          n.a.createElement(p.default, {
            className: _.a.Badge,
            hocDisplayNames: K,
            type: S,
          }),
        );
      }
      function D(I) {
        var T = I.owners,
          R = I.selectedIndex,
          j = I.selectOwner,
          z = Object(t.useContext)(d.StoreContext);
        if (R <= 0) return null;
        var W = T[R - 1],
          K = z.containsElement(W.id);
        return n.a.createElement(
          b.default,
          {
            className: K ? void 0 : _.a.NotInStore,
            onClick: function () {
              return K ? j(W) : null;
            },
            title: 'Up to '.concat(W.displayName || 'owner'),
          },
          n.a.createElement(m.default, { type: 'previous' }),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/SearchInput.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/SearchInput.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Components/SearchInput.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return x;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/devtools/views/Components/TreeContext.js',
        ),
        C = e('../react-devtools-shared/src/devtools/views/Button.js'),
        b = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js'),
        m = e('../react-devtools-shared/src/devtools/views/Icon.js'),
        y = e(
          '../react-devtools-shared/src/devtools/views/Components/SearchInput.css',
        ),
        p = e.n(y);
      function x(P) {
        var B = Object(t.useContext)(r.TreeStateContext),
          d = B.searchIndex,
          i = B.searchResults,
          _ = B.searchText,
          a = Object(t.useContext)(r.TreeDispatcherContext),
          s = Object(t.useRef)(null),
          u = Object(t.useCallback)(
            function (l) {
              var c = l.currentTarget;
              return a({ type: 'SET_SEARCH_TEXT', payload: c.value });
            },
            [a],
          ),
          O = Object(t.useCallback)(
            function () {
              return a({ type: 'SET_SEARCH_TEXT', payload: '' });
            },
            [a],
          ),
          v = Object(t.useCallback)(
            function (l) {
              switch (l.key) {
                case 'ArrowDown':
                  a({ type: 'SELECT_NEXT_ELEMENT_IN_TREE' }),
                    l.preventDefault();
                  break;
                case 'ArrowUp':
                  a({ type: 'SELECT_PREVIOUS_ELEMENT_IN_TREE' }),
                    l.preventDefault();
                  break;
              }
            },
            [a],
          ),
          A = Object(t.useCallback)(
            function (l) {
              var c = l.key,
                h = l.shiftKey;
              c === 'Enter' &&
                a(
                  h
                    ? { type: 'GO_TO_PREVIOUS_SEARCH_RESULT' }
                    : { type: 'GO_TO_NEXT_SEARCH_RESULT' },
                );
            },
            [a],
          );
        return (
          Object(t.useEffect)(
            function () {
              if (s.current === null) return function () {};
              var l = function (f) {
                  var E = f.key,
                    D = f.metaKey;
                  E === 'f' &&
                    D &&
                    s.current !== null &&
                    (s.current.focus(),
                    f.preventDefault(),
                    f.stopPropagation());
                },
                c = s.current.ownerDocument;
              return (
                c.addEventListener('keydown', l),
                function () {
                  return c.removeEventListener('keydown', l);
                }
              );
            },
            [s],
          ),
          n.a.createElement(
            'div',
            { className: p.a.SearchInput },
            n.a.createElement(m.default, {
              className: p.a.InputIcon,
              type: 'search',
            }),
            n.a.createElement('input', {
              className: p.a.Input,
              onChange: u,
              onKeyDown: v,
              onKeyPress: A,
              placeholder: 'Search (text or /regex/)',
              ref: s,
              value: _,
            }),
            !!_ &&
              n.a.createElement(
                'span',
                { className: p.a.IndexLabel },
                Math.min(d + 1, i.length),
                ' |',
                ' ',
                i.length,
              ),
            n.a.createElement('div', { className: p.a.LeftVRule }),
            n.a.createElement(
              C.default,
              {
                className: p.a.IconButton,
                disabled: !_,
                onClick: function () {
                  return a({ type: 'GO_TO_PREVIOUS_SEARCH_RESULT' });
                },
                title: 'Scroll to previous search result',
              },
              n.a.createElement(b.default, { type: 'up' }),
            ),
            n.a.createElement(
              C.default,
              {
                className: p.a.IconButton,
                disabled: !_,
                onClick: function () {
                  return a({ type: 'GO_TO_NEXT_SEARCH_RESULT' });
                },
                title: 'Scroll to next search result',
              },
              n.a.createElement(b.default, { type: 'down' }),
            ),
            n.a.createElement(
              C.default,
              {
                className: p.a.IconButton,
                disabled: !_,
                onClick: O,
                title: 'Reset search',
              },
              n.a.createElement(b.default, { type: 'close' }),
            ),
          )
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/SelectedElement.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/SelectedElement.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Components/SelectedElement.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return T;
        });
      var t = e('../../node_modules/clipboard-js/clipboard.js'),
        n = e('react'),
        r = e.n(n),
        C = e(
          '../react-devtools-shared/src/devtools/views/Components/TreeContext.js',
        ),
        b = e('../react-devtools-shared/src/devtools/views/context.js'),
        m = e(
          '../react-devtools-shared/src/devtools/ContextMenu/ContextMenu.js',
        ),
        y = e(
          '../react-devtools-shared/src/devtools/ContextMenu/ContextMenuItem.js',
        ),
        p = e('../react-devtools-shared/src/devtools/views/Button.js'),
        x = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js'),
        P = e('../react-devtools-shared/src/devtools/views/Icon.js'),
        B = e(
          '../react-devtools-shared/src/devtools/views/Components/HooksTree.js',
        ),
        d = e('../react-devtools-shared/src/devtools/views/ModalDialog.js'),
        i = e(
          '../react-devtools-shared/src/devtools/views/Components/HocBadges.js',
        ),
        _ = e(
          '../react-devtools-shared/src/devtools/views/Components/InspectedElementTree.js',
        ),
        a = e(
          '../react-devtools-shared/src/devtools/views/Components/InspectedElementContext.js',
        ),
        s = e(
          '../react-devtools-shared/src/devtools/views/Components/ViewElementSourceContext.js',
        ),
        u = e(
          '../react-devtools-shared/src/devtools/views/Components/NativeStyleEditor/index.js',
        ),
        O = e('../react-devtools-shared/src/devtools/views/Toggle.js'),
        v = e(
          '../react-devtools-shared/src/devtools/views/Components/Badge.js',
        ),
        A = e('../react-devtools-shared/src/types.js'),
        l = e(
          '../react-devtools-shared/src/devtools/views/Components/SelectedElement.css',
        ),
        c = e.n(l);
      function h(F, k, H) {
        return (
          k in F
            ? Object.defineProperty(F, k, {
                value: H,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (F[k] = H),
          F
        );
      }
      function f(F) {
        return I(F) || D(F) || E();
      }
      function E() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      }
      function D(F) {
        if (
          Symbol.iterator in Object(F) ||
          Object.prototype.toString.call(F) === '[object Arguments]'
        )
          return Array.from(F);
      }
      function I(F) {
        if (Array.isArray(F)) {
          for (var k = 0, H = new Array(F.length); k < F.length; k++)
            H[k] = F[k];
          return H;
        }
      }
      function T(F) {
        var k = Object(n.useContext)(C.TreeStateContext),
          H = k.inspectedElementID,
          w = Object(n.useContext)(C.TreeDispatcherContext),
          L = Object(n.useContext)(s.default),
          M = L.canViewElementSourceFunction,
          U = L.viewElementSourceFunction,
          Y = Object(n.useContext)(b.BridgeContext),
          Z = Object(n.useContext)(b.StoreContext),
          q = Object(n.useContext)(d.ModalDialogContext),
          ee = q.dispatch,
          G = Object(n.useContext)(a.InspectedElementContext),
          N = G.copyInspectedElementPath,
          V = G.getInspectedElementPath,
          X = G.getInspectedElement,
          $ = G.storeAsGlobal,
          te = G.viewInspectedElementPath,
          Q = H !== null ? Z.getElementByID(H) : null,
          ne = H != null ? X(H) : null,
          re = Object(n.useCallback)(
            function () {
              if (Q !== null && H !== null) {
                var me = Z.getRendererIDForElement(H);
                me !== null &&
                  Y.send('highlightNativeElement', {
                    displayName: Q.displayName,
                    hideAfterTimeout: !0,
                    id: H,
                    openNativeElementsPanel: !0,
                    rendererID: me,
                    scrollIntoView: !0,
                  });
              }
            },
            [Y, Q, H, Z],
          ),
          ce = Object(n.useCallback)(
            function () {
              if (H !== null) {
                var me = Z.getRendererIDForElement(H);
                me !== null &&
                  Y.send('logElementToConsole', { id: H, rendererID: me });
              }
            },
            [Y, H, Z],
          ),
          se = Object(n.useCallback)(
            function () {
              U != null && ne !== null && U(ne.id, ne);
            },
            [ne, U],
          ),
          fe =
            ne !== null &&
            ne.canViewSource &&
            U !== null &&
            (M === null || M(ne)),
          de =
            Q !== null &&
            Q.type === A.ElementTypeSuspense &&
            ne != null &&
            ne.state != null,
          ge = ne != null && ne.canToggleSuspense,
          pe = Object(n.useCallback)(
            function () {
              for (var me = null, oe = Q; oe !== null; )
                if (oe.type === A.ElementTypeSuspense) {
                  me = oe;
                  break;
                } else
                  oe.parentID > 0
                    ? (oe = Z.getElementByID(oe.parentID))
                    : (oe = null);
              if (me === null)
                ee({ type: 'SHOW', content: r.a.createElement(S, null) });
              else {
                var ve = me.id;
                me !== Q && w({ type: 'SELECT_ELEMENT_BY_ID', payload: ve });
                var le = Z.getRendererIDForElement(ve);
                le !== null &&
                  Y.send('overrideSuspense', {
                    id: ve,
                    rendererID: le,
                    forceFallback: !de,
                  });
              }
            },
            [Y, w, Q, de, ee, Z],
          );
        return Q === null
          ? r.a.createElement(
              'div',
              { className: c.a.SelectedElement },
              r.a.createElement('div', { className: c.a.TitleRow }),
            )
          : r.a.createElement(
              'div',
              { className: c.a.SelectedElement },
              r.a.createElement(
                'div',
                { className: c.a.TitleRow },
                r.a.createElement(
                  'div',
                  { className: c.a.SelectedComponentName },
                  r.a.createElement(
                    'div',
                    { className: c.a.Component, title: Q.displayName },
                    Q.displayName,
                  ),
                ),
                ge &&
                  r.a.createElement(
                    O.default,
                    {
                      className: c.a.IconButton,
                      isChecked: de,
                      onChange: pe,
                      title: de
                        ? 'Unsuspend the selected component'
                        : 'Suspend the selected component',
                    },
                    r.a.createElement(x.default, { type: 'suspend' }),
                  ),
                Z.supportsNativeInspection &&
                  r.a.createElement(
                    p.default,
                    {
                      className: c.a.IconButton,
                      onClick: re,
                      title: 'Inspect the matching DOM element',
                    },
                    r.a.createElement(x.default, { type: 'view-dom' }),
                  ),
                r.a.createElement(
                  p.default,
                  {
                    className: c.a.IconButton,
                    onClick: ce,
                    title: 'Log this component data to the console',
                  },
                  r.a.createElement(x.default, { type: 'log-data' }),
                ),
                r.a.createElement(
                  p.default,
                  {
                    className: c.a.IconButton,
                    disabled: !fe,
                    onClick: se,
                    title: 'View source for this element',
                  },
                  r.a.createElement(x.default, { type: 'view-source' }),
                ),
              ),
              ne === null &&
                r.a.createElement(
                  'div',
                  { className: c.a.Loading },
                  'Loading...',
                ),
              ne !== null &&
                r.a.createElement(j, {
                  key: H,
                  copyInspectedElementPath: N,
                  element: Q,
                  getInspectedElementPath: V,
                  inspectedElement: ne,
                  storeAsGlobal: $,
                  viewInspectedElementPath: te,
                }),
            );
      }
      var R = 'Suspended';
      function j(F) {
        var k = F.copyInspectedElementPath,
          H = F.element,
          w = F.getInspectedElementPath,
          L = F.inspectedElement,
          M = F.storeAsGlobal;
        F.viewInspectedElementPath;
        var U = H.id,
          Y = H.type,
          Z = L.canEditFunctionProps,
          q = L.canEditHooks,
          ee = L.canToggleSuspense,
          G = L.hasLegacyContext,
          N = L.context,
          V = L.hooks,
          X = L.owners,
          $ = L.props,
          te = L.source,
          Q = L.state,
          ne = Object(n.useContext)(C.TreeStateContext),
          re = ne.ownerID,
          ce = Object(n.useContext)(b.BridgeContext),
          se = Object(n.useContext)(b.StoreContext),
          fe = Object(n.useContext)(b.ContextMenuContext),
          de = fe.isEnabledForInspectedElement,
          ge = fe.viewAttributeSourceFunction,
          pe = Object(n.useCallback)(
            function (ue) {
              w(U, ['context'].concat(f(ue)));
            },
            [w, U],
          ),
          me = Object(n.useCallback)(
            function (ue) {
              w(U, ['props'].concat(f(ue)));
            },
            [w, U],
          ),
          oe = Object(n.useCallback)(
            function (ue) {
              w(U, ['state'].concat(f(ue)));
            },
            [w, U],
          ),
          ve = null,
          le = null,
          Ee = null,
          Ae = null;
        return (
          Y === A.ElementTypeClass
            ? ((ve = function (J, ie) {
                var ae = se.getRendererIDForElement(U);
                ae !== null &&
                  ce.send('overrideContext', {
                    id: U,
                    path: J,
                    rendererID: ae,
                    value: ie,
                  });
              }),
              (le = function (J, ie) {
                var ae = se.getRendererIDForElement(U);
                ae !== null &&
                  ce.send('overrideProps', {
                    id: U,
                    path: J,
                    rendererID: ae,
                    value: ie,
                  });
              }),
              (Ee = function (J, ie) {
                var ae = se.getRendererIDForElement(U);
                ae !== null &&
                  ce.send('overrideState', {
                    id: U,
                    path: J,
                    rendererID: ae,
                    value: ie,
                  });
              }))
            : (Y === A.ElementTypeFunction ||
                Y === A.ElementTypeMemo ||
                Y === A.ElementTypeForwardRef) &&
              Z
            ? (le = function (J, ie) {
                var ae = se.getRendererIDForElement(U);
                ae !== null &&
                  ce.send('overrideProps', {
                    id: U,
                    path: J,
                    rendererID: ae,
                    value: ie,
                  });
              })
            : Y === A.ElementTypeSuspense &&
              ee &&
              (Ae = function (J, ie) {
                if (J.length !== 1 && J !== R)
                  throw new Error('Unexpected path.');
                var ae = se.getRendererIDForElement(U);
                ae !== null &&
                  ce.send('overrideSuspense', {
                    id: U,
                    rendererID: ae,
                    forceFallback: ie,
                  });
              }),
          r.a.createElement(
            n.Fragment,
            null,
            r.a.createElement(
              'div',
              { className: c.a.InspectedElement },
              r.a.createElement(i.default, { element: H }),
              r.a.createElement(_.default, {
                label: 'props',
                data: $,
                inspectPath: me,
                overrideValueFn: le,
                pathRoot: 'props',
                showWhenEmpty: !0,
                canAddEntries: typeof le == 'function',
              }),
              Y === A.ElementTypeSuspense
                ? r.a.createElement(_.default, {
                    label: 'suspense',
                    data: h({}, R, Q !== null),
                    overrideValueFn: Ae,
                  })
                : r.a.createElement(_.default, {
                    label: 'state',
                    data: Q,
                    inspectPath: oe,
                    overrideValueFn: Ee,
                    pathRoot: 'state',
                  }),
              r.a.createElement(B.default, {
                canEditHooks: q,
                hooks: V,
                id: U,
              }),
              r.a.createElement(_.default, {
                label: G ? 'legacy context' : 'context',
                data: N,
                inspectPath: pe,
                overrideValueFn: ve,
                pathRoot: 'context',
              }),
              r.a.createElement(u.default, null),
              re === null &&
                X !== null &&
                X.length > 0 &&
                r.a.createElement(
                  'div',
                  { className: c.a.Owners },
                  r.a.createElement(
                    'div',
                    { className: c.a.OwnersHeader },
                    'rendered by',
                  ),
                  X.map(function (ue) {
                    return r.a.createElement(K, {
                      key: ue.id,
                      displayName: ue.displayName || 'Anonymous',
                      hocDisplayNames: ue.hocDisplayNames,
                      id: ue.id,
                      isInStore: se.containsElement(ue.id),
                      type: ue.type,
                    });
                  }),
                ),
              te !== null &&
                r.a.createElement(W, {
                  fileName: te.fileName,
                  lineNumber: te.lineNumber,
                }),
            ),
            de &&
              r.a.createElement(
                m.default,
                { id: 'SelectedElement' },
                function (ue) {
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(
                      y.default,
                      {
                        onClick: function () {
                          return k(U, ue.path);
                        },
                        title: 'Copy value to clipboard',
                      },
                      r.a.createElement(P.default, {
                        className: c.a.ContextMenuIcon,
                        type: 'copy',
                      }),
                      ' Copy value to clipboard',
                    ),
                    r.a.createElement(
                      y.default,
                      {
                        onClick: function () {
                          return M(U, ue.path);
                        },
                        title: 'Store as global variable',
                      },
                      r.a.createElement(P.default, {
                        className: c.a.ContextMenuIcon,
                        type: 'store-as-global-variable',
                      }),
                      ' ',
                      'Store as global variable',
                    ),
                    ge !== null &&
                      ue.type === 'function' &&
                      r.a.createElement(
                        y.default,
                        {
                          onClick: function () {
                            return ge(U, ue.path);
                          },
                          title: 'Go to definition',
                        },
                        r.a.createElement(P.default, {
                          className: c.a.ContextMenuIcon,
                          type: 'code',
                        }),
                        ' Go to definition',
                      ),
                  );
                },
              ),
          )
        );
      }
      function z(F, k) {
        var H = /^(.*)[\\\/]/,
          w = F.replace(H, '');
        if (/^index\./.test(w)) {
          var L = F.match(H);
          if (L) {
            var M = L[1];
            if (M) {
              var U = M.replace(H, '');
              w = U + '/' + w;
            }
          }
        }
        return ''.concat(w, ':').concat(k);
      }
      function W(F) {
        var k = F.fileName,
          H = F.lineNumber,
          w = function () {
            return Object(t.copy)(''.concat(k, ':').concat(H));
          };
        return r.a.createElement(
          'div',
          { className: c.a.Source },
          r.a.createElement(
            'div',
            { className: c.a.SourceHeaderRow },
            r.a.createElement('div', { className: c.a.SourceHeader }, 'source'),
            r.a.createElement(
              p.default,
              { onClick: w, title: 'Copy to clipboard' },
              r.a.createElement(x.default, { type: 'copy' }),
            ),
          ),
          r.a.createElement('div', { className: c.a.SourceOneLiner }, z(k, H)),
        );
      }
      function K(F) {
        var k = F.displayName,
          H = F.hocDisplayNames,
          w = F.id,
          L = F.isInStore,
          M = F.type,
          U = Object(n.useContext)(C.TreeDispatcherContext),
          Y = Object(n.useCallback)(
            function () {
              return U({ type: 'SELECT_ELEMENT_BY_ID', payload: w });
            },
            [U, w],
          );
        return r.a.createElement(
          p.default,
          { key: w, className: c.a.OwnerButton, disabled: !L, onClick: Y },
          r.a.createElement(
            'span',
            {
              className: ''
                .concat(c.a.Owner, ' ')
                .concat(L ? '' : c.a.NotInStore),
              title: k,
            },
            k,
          ),
          r.a.createElement(v.default, { hocDisplayNames: H, type: M }),
        );
      }
      function S() {
        var F = Object(n.useContext)(b.StoreContext),
          k = !!F.componentFilters.find(function (H) {
            return (
              H.type === A.ComponentFilterElementType &&
              H.value === A.ElementTypeSuspense &&
              H.isEnabled
            );
          });
        return k
          ? r.a.createElement(
              'div',
              { className: c.a.CannotSuspendWarningMessage },
              'Suspended state cannot be toggled while Suspense components are hidden. Disable the filter and try agan.',
            )
          : r.a.createElement(
              'div',
              { className: c.a.CannotSuspendWarningMessage },
              'The selected element is not within a Suspense container. Suspending it would cause an error.',
            );
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/SelectedTreeHighlight.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/SelectedTreeHighlight.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Components/SelectedTreeHighlight.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return P;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/devtools/views/Components/TreeContext.js',
        ),
        C = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsContext.js',
        ),
        b = e(
          '../react-devtools-shared/src/devtools/views/Components/TreeFocusedContext.js',
        ),
        m = e('../react-devtools-shared/src/devtools/views/context.js'),
        y = e('../react-devtools-shared/src/devtools/views/hooks.js'),
        p = e(
          '../react-devtools-shared/src/devtools/views/Components/SelectedTreeHighlight.css',
        ),
        x = e.n(p);
      function P(B) {
        var d = Object(t.useContext)(C.SettingsContext),
          i = d.lineHeight,
          _ = Object(t.useContext)(m.StoreContext),
          a = Object(t.useContext)(b.default),
          s = Object(t.useContext)(r.TreeStateContext),
          u = s.ownerID,
          O = s.selectedElementID,
          v = Object(t.useMemo)(
            function () {
              return {
                getCurrentValue: function () {
                  if (O === null || _.isInsideCollapsedSubTree(O)) return null;
                  var f = _.getElementByID(O);
                  if (f === null || f.isCollapsed || f.children.length === 0)
                    return null;
                  var E = _.getIndexOfElementID(f.children[0]);
                  if (E === null) return null;
                  for (var D = null, I = f; I !== null; )
                    if (I.isCollapsed || I.children.length === 0)
                      (D = _.getIndexOfElementID(I.id)), (I = null);
                    else {
                      var T = I.children[I.children.length - 1];
                      I = _.getElementByID(T);
                    }
                  return D === null ? null : { startIndex: E, stopIndex: D };
                },
                subscribe: function (f) {
                  return (
                    _.addListener('mutated', f),
                    function () {
                      _.removeListener('mutated', f);
                    }
                  );
                },
              };
            },
            [O, _],
          ),
          A = Object(y.useSubscription)(v);
        if (u !== null || A === null) return null;
        var l = A.startIndex,
          c = A.stopIndex;
        return n.a.createElement('div', {
          className: a ? x.a.Active : x.a.Inactive,
          style: {
            position: 'absolute',
            top: ''.concat(l * i, 'px'),
            height: ''.concat((c + 1 - l) * i, 'px'),
          },
        });
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/Tree.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Components/Tree.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Components/Tree.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return E;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../../node_modules/react-virtualized-auto-sizer/dist/index.esm.js',
        ),
        C = e(
          '../react-devtools-shared/src/node_modules/react-window/dist/index.esm.js',
        ),
        b = e(
          '../react-devtools-shared/src/devtools/views/Components/TreeContext.js',
        ),
        m = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsContext.js',
        ),
        y = e('../react-devtools-shared/src/devtools/views/context.js'),
        p = e(
          '../react-devtools-shared/src/devtools/views/Components/Element.js',
        ),
        x = e(
          '../react-devtools-shared/src/devtools/views/Components/InspectHostNodesToggle.js',
        ),
        P = e(
          '../react-devtools-shared/src/devtools/views/Components/OwnersStack.js',
        ),
        B = e(
          '../react-devtools-shared/src/devtools/views/Components/SearchInput.js',
        ),
        d = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsModalContextToggle.js',
        ),
        i = e(
          '../react-devtools-shared/src/devtools/views/Components/SelectedTreeHighlight.js',
        ),
        _ = e(
          '../react-devtools-shared/src/devtools/views/Components/TreeFocusedContext.js',
        ),
        a = e(
          '../react-devtools-shared/src/devtools/views/Components/Tree.css',
        ),
        s = e.n(a);
      function u() {
        return (
          (u =
            Object.assign ||
            function (R) {
              for (var j = 1; j < arguments.length; j++) {
                var z = arguments[j];
                for (var W in z)
                  Object.prototype.hasOwnProperty.call(z, W) && (R[W] = z[W]);
              }
              return R;
            }),
          u.apply(this, arguments)
        );
      }
      function O(R, j) {
        if (R == null) return {};
        var z = v(R, j),
          W,
          K;
        if (Object.getOwnPropertySymbols) {
          var S = Object.getOwnPropertySymbols(R);
          for (K = 0; K < S.length; K++)
            (W = S[K]),
              !(j.indexOf(W) >= 0) &&
                (!Object.prototype.propertyIsEnumerable.call(R, W) ||
                  (z[W] = R[W]));
        }
        return z;
      }
      function v(R, j) {
        if (R == null) return {};
        var z = {},
          W = Object.keys(R),
          K,
          S;
        for (S = 0; S < W.length; S++)
          (K = W[S]), !(j.indexOf(K) >= 0) && (z[K] = R[K]);
        return z;
      }
      function A(R, j) {
        return h(R) || c(R, j) || l();
      }
      function l() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function c(R, j) {
        var z = [],
          W = !0,
          K = !1,
          S = void 0;
        try {
          for (
            var F = R[Symbol.iterator](), k;
            !(W = (k = F.next()).done) &&
            (z.push(k.value), !(j && z.length === j));
            W = !0
          );
        } catch (H) {
          (K = !0), (S = H);
        } finally {
          try {
            !W && F.return != null && F.return();
          } finally {
            if (K) throw S;
          }
        }
        return z;
      }
      function h(R) {
        if (Array.isArray(R)) return R;
      }
      var f = 12;
      function E(R) {
        var j = Object(t.useContext)(b.TreeDispatcherContext),
          z = Object(t.useContext)(b.TreeStateContext),
          W = z.numElements,
          K = z.ownerID,
          S = z.searchIndex,
          F = z.searchResults,
          k = z.selectedElementID,
          H = z.selectedElementIndex,
          w = Object(t.useContext)(y.BridgeContext),
          L = Object(t.useContext)(y.StoreContext),
          M = Object(t.useState)(!1),
          U = A(M, 2),
          Y = U[0],
          Z = U[1],
          q = Object(t.useRef)(null),
          ee = Object(t.useRef)(null),
          G = Object(t.useState)(!1),
          N = A(G, 2),
          V = N[0],
          X = N[1],
          $ = Object(t.useContext)(m.SettingsContext),
          te = $.lineHeight,
          Q = Object(t.useCallback)(
            function (le) {
              le != null && H !== null && le.scrollToItem(H, 'smart');
            },
            [H],
          );
        Object(t.useEffect)(
          function () {
            function le(Ee) {
              Ee && ee.current !== null && ee.current.focus();
            }
            return (
              w.addListener('stopInspectingNative', le),
              function () {
                return w.removeListener('stopInspectingNative', le);
              }
            );
          },
          [w],
        );
        var ne = Object(t.useRef)(null);
        Object(t.useEffect)(
          function () {
            if (q.current === null) return function () {};
            var le = function (ue) {
                if (!(ue.target.tagName === 'INPUT' || ue.defaultPrevented)) {
                  var J;
                  switch (ue.key) {
                    case 'ArrowDown':
                      ue.preventDefault(),
                        j({ type: 'SELECT_NEXT_ELEMENT_IN_TREE' });
                      break;
                    case 'ArrowLeft':
                      ue.preventDefault(),
                        (J = k !== null ? L.getElementByID(k) : null),
                        J !== null &&
                          (J.children.length > 0 && !J.isCollapsed
                            ? L.toggleIsCollapsed(J.id, !0)
                            : j({ type: 'SELECT_PARENT_ELEMENT_IN_TREE' }));
                      break;
                    case 'ArrowRight':
                      ue.preventDefault(),
                        (J = k !== null ? L.getElementByID(k) : null),
                        J !== null &&
                          (J.children.length > 0 && J.isCollapsed
                            ? L.toggleIsCollapsed(J.id, !1)
                            : j({ type: 'SELECT_CHILD_ELEMENT_IN_TREE' }));
                      break;
                    case 'ArrowUp':
                      ue.preventDefault(),
                        j({ type: 'SELECT_PREVIOUS_ELEMENT_IN_TREE' });
                      break;
                    default:
                      return;
                  }
                  Z(!0);
                }
              },
              Ee = q.current.ownerDocument;
            return (
              Ee.addEventListener('keydown', le),
              function () {
                Ee.removeEventListener('keydown', le);
              }
            );
          },
          [j, k, L],
        );
        var re = Object(t.useCallback)(function () {
            return X(!1);
          }, []),
          ce = Object(t.useCallback)(
            function () {
              X(!0),
                H === null &&
                  W > 0 &&
                  j({ type: 'SELECT_ELEMENT_AT_INDEX', payload: 0 });
            },
            [j, W, H],
          ),
          se = Object(t.useCallback)(
            function (le) {
              switch (le.key) {
                case 'Enter':
                case ' ':
                  k !== null && j({ type: 'SELECT_OWNER', payload: k });
                  break;
              }
            },
            [j, k],
          ),
          fe = Object(t.useCallback)(
            function (le) {
              var Ee = L.getElementByID(le),
                Ae = L.getRendererIDForElement(le);
              Ee !== null &&
                Ae !== null &&
                w.send('highlightNativeElement', {
                  displayName: Ee.displayName,
                  hideAfterTimeout: !1,
                  id: le,
                  openNativeElementsPanel: !1,
                  rendererID: Ae,
                  scrollIntoView: !1,
                });
            },
            [L, w],
          ),
          de = Object(t.useRef)({ searchIndex: S, searchResults: F });
        Object(t.useEffect)(
          function () {
            var le = !1;
            (de.current.searchIndex !== S || de.current.searchResults !== F) &&
              ((de.current.searchIndex = S),
              (de.current.searchResults = F),
              (le = !0)),
              (Y || le) &&
                (k !== null ? fe(k) : w.send('clearNativeElementHighlight'));
          },
          [w, Y, fe, S, F, k],
        );
        var ge = Object(t.useCallback)(
            function (le) {
              Y || fe(le);
            },
            [Y, fe],
          ),
          pe = Object(t.useCallback)(function () {
            Z(!1);
          }, []),
          me = Object(t.useCallback)(
            function () {
              w.send('clearNativeElementHighlight');
            },
            [w],
          ),
          oe = Object(t.useMemo)(
            function () {
              return {
                numElements: W,
                isNavigatingWithKeyboard: Y,
                onElementMouseEnter: ge,
                lastScrolledIDRef: ne,
                treeFocused: V,
              };
            },
            [W, Y, ge, ne, V],
          ),
          ve = Object(t.useCallback)(
            function (le) {
              return L.getElementIDAtIndex(le);
            },
            [L],
          );
        return n.a.createElement(
          _.default.Provider,
          { value: V },
          n.a.createElement(
            'div',
            { className: s.a.Tree, ref: q },
            n.a.createElement(
              'div',
              { className: s.a.SearchInput },
              L.supportsNativeInspection &&
                n.a.createElement(
                  t.Fragment,
                  null,
                  n.a.createElement(x.default, null),
                  n.a.createElement('div', { className: s.a.VRule }),
                ),
              n.a.createElement(
                t.Suspense,
                { fallback: n.a.createElement(T, null) },
                K !== null
                  ? n.a.createElement(P.default, null)
                  : n.a.createElement(B.default, null),
              ),
              n.a.createElement('div', { className: s.a.VRule }),
              n.a.createElement(d.default, null),
            ),
            n.a.createElement(
              'div',
              {
                className: s.a.AutoSizerWrapper,
                onBlur: re,
                onFocus: ce,
                onKeyPress: se,
                onMouseMove: pe,
                onMouseLeave: me,
                ref: ee,
                tabIndex: 0,
              },
              n.a.createElement(r.default, null, function (le) {
                var Ee = le.height,
                  Ae = le.width;
                return n.a.createElement(
                  C.FixedSizeList,
                  {
                    className: s.a.List,
                    height: Ee,
                    innerElementType: I,
                    itemCount: W,
                    itemData: oe,
                    itemKey: ve,
                    itemSize: te,
                    ref: Q,
                    width: Ae,
                  },
                  p.default,
                );
              }),
            ),
          ),
        );
      }
      function D(R, j, z, W) {
        var K = R.parentElement,
          S = K.clientWidth;
        if (S !== 0) {
          S > W.current && (z.current = f), (W.current = S);
          var F = z.current,
            k = !0,
            H = !1,
            w = void 0;
          try {
            for (
              var L = R.children[Symbol.iterator](), M;
              !(k = (M = L.next()).done);
              k = !0
            ) {
              var U = M.value,
                Y = parseInt(U.getAttribute('data-depth'), 10) || 0,
                Z = 0,
                q = j.get(U);
              if (q != null) Z = q;
              else {
                var ee = U.firstElementChild;
                ee != null && ((Z = ee.clientWidth), j.set(U, Z));
              }
              var G = Math.max(0, S - Z);
              F = Math.min(F, G / Y);
            }
          } catch (N) {
            (H = !0), (w = N);
          } finally {
            try {
              !k && L.return != null && L.return();
            } finally {
              if (H) throw w;
            }
          }
          (z.current = F),
            K.style.setProperty('--indentation-size', ''.concat(F, 'px'));
        }
      }
      function I(R) {
        var j = R.children,
          z = R.style,
          W = O(R, ['children', 'style']),
          K = Object(t.useContext)(b.TreeStateContext),
          S = K.ownerID,
          F = Object(t.useMemo)(function () {
            return new WeakMap();
          }, []),
          k = Object(t.useRef)(f),
          H = Object(t.useRef)(0),
          w = Object(t.useRef)(S),
          L = Object(t.useRef)(null);
        return (
          S !== w.current && ((w.current = S), (k.current = f)),
          Object(t.useEffect)(function () {
            L.current !== null && D(L.current, F, k, H);
          }),
          n.a.createElement(
            'div',
            u({ className: s.a.InnerElementType, ref: L, style: z }, W),
            n.a.createElement(i.default, null),
            j,
          )
        );
      }
      function T() {
        return n.a.createElement(
          'div',
          { className: s.a.Loading },
          'Loading...',
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/TreeContext.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'TreeDispatcherContext', function () {
          return _;
        }),
        e.d(o, 'TreeStateContext', function () {
          return i;
        }),
        e.d(o, 'TreeContextController', function () {
          return v;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('scheduler'),
        C = e('../react-devtools-shared/src/devtools/views/utils.js'),
        b = e('../react-devtools-shared/src/devtools/views/context.js');
      e('../react-devtools-shared/src/devtools/store.js');
      function m(c, h) {
        return x(c) || p(c, h) || y();
      }
      function y() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function p(c, h) {
        var f = [],
          E = !0,
          D = !1,
          I = void 0;
        try {
          for (
            var T = c[Symbol.iterator](), R;
            !(E = (R = T.next()).done) &&
            (f.push(R.value), !(h && f.length === h));
            E = !0
          );
        } catch (j) {
          (D = !0), (I = j);
        } finally {
          try {
            !E && T.return != null && T.return();
          } finally {
            if (D) throw I;
          }
        }
        return f;
      }
      function x(c) {
        if (Array.isArray(c)) return c;
      }
      function P(c, h) {
        var f = Object.keys(c);
        if (Object.getOwnPropertySymbols) {
          var E = Object.getOwnPropertySymbols(c);
          h &&
            (E = E.filter(function (D) {
              return Object.getOwnPropertyDescriptor(c, D).enumerable;
            })),
            f.push.apply(f, E);
        }
        return f;
      }
      function B(c) {
        for (var h = 1; h < arguments.length; h++) {
          var f = arguments[h] != null ? arguments[h] : {};
          h % 2
            ? P(f, !0).forEach(function (E) {
                d(c, E, f[E]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(f))
            : P(f).forEach(function (E) {
                Object.defineProperty(
                  c,
                  E,
                  Object.getOwnPropertyDescriptor(f, E),
                );
              });
        }
        return c;
      }
      function d(c, h, f) {
        return (
          h in c
            ? Object.defineProperty(c, h, {
                value: f,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (c[h] = f),
          c
        );
      }
      var i = Object(t.createContext)(null);
      i.displayName = 'TreeStateContext';
      var _ = Object(t.createContext)(null);
      _.displayName = 'TreeDispatcherContext';
      function a(c, h, f) {
        var E = h.numElements,
          D = h.ownerID,
          I = h.selectedElementIndex,
          T = h.selectedElementID,
          R = !0;
        if (D === null)
          switch (f.type) {
            case 'HANDLE_STORE_MUTATION':
              E = c.numElements;
              for (var j = f.payload[1]; T !== null && j.has(T); ) T = j.get(T);
              T === 0 && (I = null);
              break;
            case 'SELECT_CHILD_ELEMENT_IN_TREE':
              if (I !== null) {
                var z = c.getElementAtIndex(I);
                if (z !== null && z.children.length > 0 && !z.isCollapsed) {
                  var W = z.children[0],
                    K = c.getIndexOfElementID(W);
                  K !== null && (I = K);
                }
              }
              break;
            case 'SELECT_ELEMENT_AT_INDEX':
              I = f.payload;
              break;
            case 'SELECT_ELEMENT_BY_ID':
              (R = !1),
                (T = f.payload),
                (I = T === null ? null : c.getIndexOfElementID(T));
              break;
            case 'SELECT_NEXT_ELEMENT_IN_TREE':
              I === null || I + 1 >= E ? (I = 0) : I++;
              break;
            case 'SELECT_PARENT_ELEMENT_IN_TREE':
              if (I !== null) {
                var S = c.getElementAtIndex(I);
                if (S !== null && S.parentID !== null) {
                  var F = c.getIndexOfElementID(S.parentID);
                  F !== null && (I = F);
                }
              }
              break;
            case 'SELECT_PREVIOUS_ELEMENT_IN_TREE':
              I === null || I === 0 ? (I = E - 1) : I--;
              break;
            default:
              return h;
          }
        return (
          R &&
            I !== h.selectedElementIndex &&
            (I === null ? (T = null) : (T = c.getElementIDAtIndex(I))),
          B({}, h, {
            numElements: E,
            selectedElementIndex: I,
            selectedElementID: T,
          })
        );
      }
      function s(c, h, f) {
        var E = h.ownerID,
          D = h.searchIndex,
          I = h.searchResults,
          T = h.searchText,
          R = h.selectedElementID,
          j = h.selectedElementIndex,
          z = D,
          W = T,
          K = I.length,
          S = !1;
        if (E === null)
          switch (f.type) {
            case 'GO_TO_NEXT_SEARCH_RESULT':
              K > 0 && ((S = !0), (D = D + 1 < K ? D + 1 : 0));
              break;
            case 'GO_TO_PREVIOUS_SEARCH_RESULT':
              K > 0 && ((S = !0), (D = D > 0 ? D - 1 : K - 1));
              break;
            case 'HANDLE_STORE_MUTATION':
              if (T !== '') {
                var F = m(f.payload, 2),
                  k = F[0],
                  H = F[1];
                H.forEach(function (M, U) {
                  var Y = I.indexOf(U);
                  Y >= 0 &&
                    ((I = I.slice(0, Y).concat(I.slice(Y + 1))),
                    I.length === 0
                      ? (D = null)
                      : D >= I.length && (D = I.length - 1));
                }),
                  k.forEach(function (M) {
                    var U = c.getElementByID(M);
                    if (U !== null) {
                      var Y = U.displayName,
                        Z = Object(C.createRegExp)(T);
                      if (Y !== null && Z.test(Y)) {
                        for (
                          var q = c.getIndexOfElementID(M), ee = !1, G = 0;
                          G < I.length;
                          G++
                        ) {
                          var N = I[G];
                          if (q < c.getIndexOfElementID(N)) {
                            (ee = !0),
                              (I = I.slice(0, G).concat(N).concat(I.slice(G)));
                            break;
                          }
                        }
                        ee || (I = I.concat(M)), (D = D === null ? 0 : D);
                      }
                    }
                  });
              }
              break;
            case 'SET_SEARCH_TEXT':
              if (((D = null), (I = []), (T = f.payload), T !== '')) {
                var w = Object(C.createRegExp)(T);
                c.roots.forEach(function (M) {
                  A(c, M, w, I);
                }),
                  I.length > 0 &&
                    (z === null
                      ? j !== null
                        ? (D = l(c, I, j))
                        : (D = 0)
                      : (D = Math.min(z, I.length - 1)));
              }
              break;
            default:
              return h;
          }
        if (T !== W) {
          var L = I.indexOf(R);
          L === -1 ? (S = !0) : (D = L);
        }
        return (
          S && D !== null && ((R = I[D]), (j = c.getIndexOfElementID(R))),
          B({}, h, {
            selectedElementID: R,
            selectedElementIndex: j,
            searchIndex: D,
            searchResults: I,
            searchText: T,
          })
        );
      }
      function u(c, h, f) {
        var E = h.numElements,
          D = h.selectedElementID,
          I = h.selectedElementIndex,
          T = h.ownerID,
          R = h.ownerFlatTree,
          j = h.searchIndex,
          z = h.searchResults,
          W = h.searchText,
          K = I;
        switch (f.type) {
          case 'HANDLE_STORE_MUTATION':
            T !== null
              ? c.containsElement(T)
                ? ((R = c.getOwnersListForElement(T)),
                  D !== null &&
                    (I = R.findIndex(function (F) {
                      return F.id === D;
                    })))
                : ((T = null), (R = null), (D = null))
              : D !== null && (I = c.getIndexOfElementID(D)),
              I === -1 && ((I = null), (D = null));
            break;
          case 'RESET_OWNER_STACK':
            (T = null),
              (R = null),
              (I = D !== null ? c.getIndexOfElementID(D) : null);
            break;
          case 'SELECT_ELEMENT_AT_INDEX':
            R !== null && (I = f.payload);
            break;
          case 'SELECT_ELEMENT_BY_ID':
            if (R !== null) {
              var S = f.payload;
              S === null
                ? (I = null)
                : ((I = R.findIndex(function (F) {
                    return F.id === S;
                  })),
                  I !== null &&
                    I < 0 &&
                    ((T = null), (R = null), (I = c.getIndexOfElementID(S))));
            }
            break;
          case 'SELECT_NEXT_ELEMENT_IN_TREE':
            R !== null &&
              R.length > 0 &&
              (I === null ? (I = 0) : I + 1 < R.length && I++);
            break;
          case 'SELECT_PREVIOUS_ELEMENT_IN_TREE':
            R !== null && R.length > 0 && I !== null && I > 0 && I--;
            break;
          case 'SELECT_OWNER':
            c.hasOwnerMetadata &&
              ((T = f.payload),
              (R = c.getOwnersListForElement(T)),
              (I = 0),
              (K = null));
            break;
          default:
            return h;
        }
        return (
          (R !== h.ownerFlatTree || f.type === 'HANDLE_STORE_MUTATION') &&
            (R === null ? (E = c.numElements) : (E = R.length)),
          I !== K && (I === null ? (D = null) : R !== null && (D = R[I].id)),
          B({}, h, {
            numElements: E,
            selectedElementID: D,
            selectedElementIndex: I,
            searchIndex: j,
            searchResults: z,
            searchText: W,
            ownerID: T,
            ownerFlatTree: R,
          })
        );
      }
      function O(c, h, f) {
        var E = f.type;
        switch (E) {
          case 'UPDATE_INSPECTED_ELEMENT_ID':
            if (h.inspectedElementID !== h.selectedElementID)
              return B({}, h, { inspectedElementID: h.selectedElementID });
            break;
        }
        return h;
      }
      function v(c) {
        var h = c.children,
          f = c.defaultInspectedElementID,
          E = c.defaultOwnerID,
          D = c.defaultSelectedElementID,
          I = c.defaultSelectedElementIndex,
          T = Object(t.useContext)(b.BridgeContext),
          R = Object(t.useContext)(b.StoreContext),
          j = Object(t.useMemo)(
            function () {
              return R.revision;
            },
            [R],
          ),
          z = Object(t.useMemo)(
            function () {
              return function (w, L) {
                var M = L.type;
                switch (M) {
                  case 'GO_TO_NEXT_SEARCH_RESULT':
                  case 'GO_TO_PREVIOUS_SEARCH_RESULT':
                  case 'HANDLE_STORE_MUTATION':
                  case 'RESET_OWNER_STACK':
                  case 'SELECT_ELEMENT_AT_INDEX':
                  case 'SELECT_ELEMENT_BY_ID':
                  case 'SELECT_CHILD_ELEMENT_IN_TREE':
                  case 'SELECT_NEXT_ELEMENT_IN_TREE':
                  case 'SELECT_PARENT_ELEMENT_IN_TREE':
                  case 'SELECT_PREVIOUS_ELEMENT_IN_TREE':
                  case 'SELECT_OWNER':
                  case 'UPDATE_INSPECTED_ELEMENT_ID':
                  case 'SET_SEARCH_TEXT':
                    return (
                      (w = a(R, w, L)),
                      (w = s(R, w, L)),
                      (w = u(R, w, L)),
                      (w = O(R, w, L)),
                      w.selectedElementID !== null &&
                      R.isInsideCollapsedSubTree(w.selectedElementID)
                        ? B({}, w, { selectedElementIndex: null })
                        : w
                    );
                  default:
                    throw new Error('Unrecognized action "'.concat(M, '"'));
                }
              };
            },
            [R],
          ),
          W = Object(t.useReducer)(z, {
            numElements: R.numElements,
            selectedElementID: D ?? null,
            selectedElementIndex: I ?? null,
            searchIndex: null,
            searchResults: [],
            searchText: '',
            ownerID: E ?? null,
            ownerFlatTree: null,
            inspectedElementID: f ?? null,
          }),
          K = m(W, 2),
          S = K[0],
          F = K[1],
          k = Object(t.useCallback)(
            function (w) {
              Object(r.unstable_runWithPriority)(
                r.unstable_UserBlockingPriority,
                function () {
                  return F(w);
                },
              ),
                Object(r.unstable_next)(function () {
                  return F({ type: 'UPDATE_INSPECTED_ELEMENT_ID' });
                });
            },
            [F],
          );
        Object(t.useEffect)(
          function () {
            var w = function (M) {
              return k({ type: 'SELECT_ELEMENT_BY_ID', payload: M });
            };
            return (
              T.addListener('selectFiber', w),
              function () {
                return T.removeListener('selectFiber', w);
              }
            );
          },
          [T, k],
        );
        var H = Object(t.useRef)(null);
        return (
          Object(t.useLayoutEffect)(
            function () {
              if (
                S.selectedElementID !== H.current &&
                ((H.current = S.selectedElementID),
                S.selectedElementID !== null)
              ) {
                var w = R.getElementByID(S.selectedElementID);
                w !== null &&
                  w.parentID > 0 &&
                  R.toggleIsCollapsed(w.parentID, !1);
              }
            },
            [S.selectedElementID, R],
          ),
          Object(t.useEffect)(
            function () {
              var w = function (M) {
                var U = m(M, 2),
                  Y = U[0],
                  Z = U[1];
                k({ type: 'HANDLE_STORE_MUTATION', payload: [Y, Z] });
              };
              return (
                R.revision !== j &&
                  k({
                    type: 'HANDLE_STORE_MUTATION',
                    payload: [[], new Map()],
                  }),
                R.addListener('mutated', w),
                function () {
                  return R.removeListener('mutated', w);
                }
              );
            },
            [k, j, R],
          ),
          n.a.createElement(
            i.Provider,
            { value: S },
            n.a.createElement(_.Provider, { value: k }, h),
          )
        );
      }
      function A(c, h, f, E) {
        var D = c.getElementByID(h),
          I = D.children,
          T = D.displayName,
          R = D.hocDisplayNames;
        ((T != null && f.test(T) === !0) ||
          (R != null &&
            R.length > 0 &&
            R.some(function (j) {
              return f.test(j);
            }) === !0)) &&
          E.push(h),
          I.forEach(function (j) {
            return A(c, j, f, E);
          });
      }
      function l(c, h, f) {
        var E = h.findIndex(function (D) {
          var I = c.getIndexOfElementID(D);
          return I !== null && I >= f;
        });
        return E === -1 ? 0 : E;
      }
    },
    '../react-devtools-shared/src/devtools/views/Components/TreeFocusedContext.js': function (
      g,
      o,
      e,
    ) {
      e.r(o);
      var t = e('react'),
        n = Object(t.createContext)(!1);
      o.default = n;
    },
    '../react-devtools-shared/src/devtools/views/Components/ViewElementSourceContext.js': function (
      g,
      o,
      e,
    ) {
      e.r(o);
      var t = e('react'),
        n = Object(t.createContext)(null);
      (n.displayName = 'ViewElementSourceContext'), (o.default = n);
    },
    '../react-devtools-shared/src/devtools/views/DevTools.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/DevTools.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/DevTools.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return f;
        }),
        e('../../node_modules/@reach/menu-button/styles.css'),
        e('../../node_modules/@reach/tooltip/styles.css');
      var t = e('react'),
        n = e.n(t);
      e('../react-devtools-shared/src/devtools/store.js');
      var r = e('../react-devtools-shared/src/devtools/views/context.js'),
        C = e(
          '../react-devtools-shared/src/devtools/views/Components/Components.js',
        ),
        b = e(
          '../react-devtools-shared/src/devtools/views/Profiler/Profiler.js',
        ),
        m = e('../react-devtools-shared/src/devtools/views/TabBar.js'),
        y = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsContext.js',
        ),
        p = e(
          '../react-devtools-shared/src/devtools/views/Components/TreeContext.js',
        ),
        x = e(
          '../react-devtools-shared/src/devtools/views/Components/ViewElementSourceContext.js',
        ),
        P = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ProfilerContext.js',
        ),
        B = e('../react-devtools-shared/src/devtools/views/ModalDialog.js'),
        d = e('../react-devtools-shared/src/devtools/views/ReactLogo.js'),
        i = e(
          '../react-devtools-shared/src/devtools/views/UnsupportedVersionDialog.js',
        ),
        _ = e(
          '../react-devtools-shared/src/devtools/views/WarnIfLegacyBackendDetected.js',
        ),
        a = e('../react-devtools-shared/src/devtools/views/DevTools.css'),
        s = e.n(a);
      e('../react-devtools-shared/src/devtools/views/root.css');
      function u(E, D) {
        return A(E) || v(E, D) || O();
      }
      function O() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function v(E, D) {
        var I = [],
          T = !0,
          R = !1,
          j = void 0;
        try {
          for (
            var z = E[Symbol.iterator](), W;
            !(T = (W = z.next()).done) &&
            (I.push(W.value), !(D && I.length === D));
            T = !0
          );
        } catch (K) {
          (R = !0), (j = K);
        } finally {
          try {
            !T && z.return != null && z.return();
          } finally {
            if (R) throw j;
          }
        }
        return I;
      }
      function A(E) {
        if (Array.isArray(E)) return E;
      }
      var l = {
          id: 'components',
          icon: 'components',
          label: 'Components',
          title: 'React Components',
        },
        c = {
          id: 'profiler',
          icon: 'profiler',
          label: 'Profiler',
          title: 'React Profiler',
        },
        h = [l, c];
      function f(E) {
        var D = E.bridge,
          I = E.browserTheme,
          T = I === void 0 ? 'light' : I,
          R = E.canViewElementSourceFunction,
          j = E.componentsPortalContainer,
          z = E.defaultTab,
          W = z === void 0 ? 'components' : z,
          K = E.enabledInspectedElementContextMenu,
          S = K === void 0 ? !1 : K,
          F = E.overrideTab,
          k = E.profilerPortalContainer,
          H = E.showTabBar,
          w = H === void 0 ? !1 : H,
          L = E.store,
          M = E.warnIfLegacyBackendDetected,
          U = M === void 0 ? !1 : M,
          Y = E.warnIfUnsupportedVersionDetected,
          Z = Y === void 0 ? !1 : Y,
          q = E.viewAttributeSourceFunction,
          ee = E.viewElementSourceFunction,
          G = Object(t.useState)(W),
          N = u(G, 2),
          V = N[0],
          X = N[1];
        F != null && F !== V && X(F);
        var $ = Object(t.useMemo)(
            function () {
              return {
                canViewElementSourceFunction: R || null,
                viewElementSourceFunction: ee || null,
              };
            },
            [R, ee],
          ),
          te = Object(t.useMemo)(
            function () {
              return {
                isEnabledForInspectedElement: S,
                viewAttributeSourceFunction: q || null,
              };
            },
            [S, q],
          );
        return (
          Object(t.useEffect)(
            function () {
              return function () {
                try {
                  D.shutdown();
                } catch {}
              };
            },
            [D],
          ),
          n.a.createElement(
            r.BridgeContext.Provider,
            { value: D },
            n.a.createElement(
              r.StoreContext.Provider,
              { value: L },
              n.a.createElement(
                r.ContextMenuContext.Provider,
                { value: te },
                n.a.createElement(
                  B.ModalDialogContextController,
                  null,
                  n.a.createElement(
                    y.SettingsContextController,
                    {
                      browserTheme: T,
                      componentsPortalContainer: j,
                      profilerPortalContainer: k,
                    },
                    n.a.createElement(
                      x.default.Provider,
                      { value: $ },
                      n.a.createElement(
                        p.TreeContextController,
                        null,
                        n.a.createElement(
                          P.ProfilerContextController,
                          null,
                          n.a.createElement(
                            'div',
                            { className: s.a.DevTools },
                            w &&
                              n.a.createElement(
                                'div',
                                { className: s.a.TabBar },
                                n.a.createElement(d.default, null),
                                n.a.createElement(
                                  'span',
                                  { className: s.a.DevToolsVersion },
                                  '4.4.0-f749045a5',
                                ),
                                n.a.createElement('div', {
                                  className: s.a.Spacer,
                                }),
                                n.a.createElement(m.default, {
                                  currentTab: V,
                                  id: 'DevTools',
                                  selectTab: X,
                                  tabs: h,
                                  type: 'navigation',
                                }),
                              ),
                            n.a.createElement(
                              'div',
                              {
                                className: s.a.TabContent,
                                hidden: V !== 'components',
                              },
                              n.a.createElement(C.default, {
                                portalContainer: j,
                              }),
                            ),
                            n.a.createElement(
                              'div',
                              {
                                className: s.a.TabContent,
                                hidden: V !== 'profiler',
                              },
                              n.a.createElement(b.default, {
                                portalContainer: k,
                              }),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  U && n.a.createElement(_.default, null),
                  Z && n.a.createElement(i.default, null),
                ),
              ),
            ),
          )
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/ErrorBoundary.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/ErrorBoundary.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/ErrorBoundary.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return a;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/views/ErrorBoundary.css'),
        C = e.n(r);
      function b(s) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (b = function (O) {
                return typeof O;
              })
            : (b = function (O) {
                return O &&
                  typeof Symbol == 'function' &&
                  O.constructor === Symbol &&
                  O !== Symbol.prototype
                  ? 'symbol'
                  : typeof O;
              }),
          b(s)
        );
      }
      function m(s, u) {
        if (!(s instanceof u))
          throw new TypeError('Cannot call a class as a function');
      }
      function y(s, u) {
        for (var O = 0; O < u.length; O++) {
          var v = u[O];
          (v.enumerable = v.enumerable || !1),
            (v.configurable = !0),
            'value' in v && (v.writable = !0),
            Object.defineProperty(s, v.key, v);
        }
      }
      function p(s, u, O) {
        return u && y(s.prototype, u), O && y(s, O), s;
      }
      function x(s, u) {
        return u && (b(u) === 'object' || typeof u == 'function') ? u : B(s);
      }
      function P(s) {
        return (
          (P = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (O) {
                return O.__proto__ || Object.getPrototypeOf(O);
              }),
          P(s)
        );
      }
      function B(s) {
        if (s === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return s;
      }
      function d(s, u) {
        if (typeof u != 'function' && u !== null)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (s.prototype = Object.create(u && u.prototype, {
          constructor: { value: s, writable: !0, configurable: !0 },
        })),
          u && i(s, u);
      }
      function i(s, u) {
        return (
          (i =
            Object.setPrototypeOf ||
            function (v, A) {
              return (v.__proto__ = A), v;
            }),
          i(s, u)
        );
      }
      function _(s, u, O) {
        return (
          u in s
            ? Object.defineProperty(s, u, {
                value: O,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (s[u] = O),
          s
        );
      }
      var a = (function (s) {
        d(u, s);
        function u() {
          var O, v;
          m(this, u);
          for (var A = arguments.length, l = new Array(A), c = 0; c < A; c++)
            l[c] = arguments[c];
          return (
            (v = x(this, (O = P(u)).call.apply(O, [this].concat(l)))),
            _(B(v), 'state', {
              callStack: null,
              componentStack: null,
              errorMessage: null,
              hasError: !1,
            }),
            v
          );
        }
        return (
          p(u, [
            {
              key: 'componentDidCatch',
              value: function (v, A) {
                var l = A.componentStack,
                  c =
                    b(v) === 'object' && v.hasOwnProperty('message')
                      ? v.message
                      : v,
                  h =
                    b(v) === 'object' && v.hasOwnProperty('stack')
                      ? v.stack
                          .split(
                            `
`,
                          )
                          .slice(1).join(`
`)
                      : null;
                this.setState({
                  callStack: h,
                  componentStack: l,
                  errorMessage: c,
                  hasError: !0,
                });
              },
            },
            {
              key: 'render',
              value: function () {
                var v = this.props.children,
                  A = this.state,
                  l = A.callStack,
                  c = A.componentStack,
                  h = A.errorMessage,
                  f = A.hasError,
                  E = 'https://github.com/facebook/react';
                if (E) {
                  var D = 'Error: "'.concat(h || '', '"'),
                    I = 'Component: Developer Tools',
                    T = 'Describe what you were doing when the bug occurred:';
                  (T += `
1. `),
                    (T += `
2. `),
                    (T += `
3. `),
                    (T += `

---------------------------------------------`),
                    (T += `
Please do not remove the text below this line`),
                    (T += `
---------------------------------------------`),
                    (T += `

DevTools version: `.concat('4.4.0-f749045a5')),
                    l &&
                      (T += `

Call stack: `.concat(l.trim())),
                    c &&
                      (T += `

Component stack: `.concat(c.trim())),
                    (E += '/issues/new?labels='
                      .concat(encodeURI(I), '&title=')
                      .concat(encodeURI(D), '&body=')
                      .concat(encodeURI(T)));
                }
                return f
                  ? n.a.createElement(
                      'div',
                      { className: C.a.ErrorBoundary },
                      n.a.createElement(
                        'div',
                        { className: C.a.Header },
                        'An error was thrown: "',
                        h,
                        '"',
                      ),
                      E &&
                        n.a.createElement(
                          'a',
                          {
                            href: E,
                            rel: 'noopener noreferrer',
                            target: '_blank',
                            title: 'Report bug',
                          },
                          'Report this issue',
                        ),
                      !!l &&
                        n.a.createElement(
                          'div',
                          { className: C.a.Stack },
                          'The error was thrown ',
                          l.trim(),
                        ),
                      !!c &&
                        n.a.createElement(
                          'div',
                          { className: C.a.Stack },
                          'The error occurred ',
                          c.trim(),
                        ),
                    )
                  : v;
              },
            },
          ]),
          u
        );
      })(t.Component);
    },
    '../react-devtools-shared/src/devtools/views/Icon.css': function (g, o, e) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Icon.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Icon.js': function (g, o, e) {
      e.r(o),
        e.d(o, 'default', function () {
          return b;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/views/Icon.css'),
        C = e.n(r);
      function b(u) {
        var O = u.className,
          v = O === void 0 ? '' : O,
          A = u.type,
          l = null;
        switch (A) {
          case 'arrow':
            l = m;
            break;
          case 'code':
            l = y;
            break;
          case 'components':
            l = p;
            break;
          case 'copy':
            l = x;
            break;
          case 'flame-chart':
            l = P;
            break;
          case 'interactions':
            l = B;
            break;
          case 'profiler':
            l = d;
            break;
          case 'ranked-chart':
            l = _;
            break;
          case 'search':
            l = i;
            break;
          case 'settings':
            l = a;
            break;
          case 'store-as-global-variable':
            l = s;
            break;
          default:
            console.warn(
              'Unsupported type "'.concat(A, '" specified for Icon'),
            );
            break;
        }
        return n.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            className: ''.concat(C.a.Icon, ' ').concat(v),
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
          },
          n.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
          n.a.createElement('path', { fill: 'currentColor', d: l }),
        );
      }
      var m = 'M8 5v14l11-7z',
        y = `
  M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z
  `,
        p =
          'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
        x = `
  M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3a2 2 0 0 0 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9a2 2 0 0 0-2
  2v10a2 2 0 0 0 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z
`,
        P = `
  M10.0650893,21.5040462 C7.14020814,20.6850349 5,18.0558698 5,14.9390244 C5,14.017627
  5,9.81707317 7.83333333,7.37804878 C7.83333333,7.37804878 7.58333333,11.199187 10,
  10.6300813 C11.125,10.326087 13.0062497,7.63043487 8.91666667,2.5 C14.1666667,3.06910569
  19,9.32926829 19,14.9390244 C19,18.0558698 16.8597919,20.6850349 13.9349107,21.5040462
  C14.454014,21.0118505 14.7765152,20.3233394 14.7765152,19.5613412 C14.7765152,17.2826087
  12,15.0875871 12,15.0875871 C12,15.0875871 9.22348485,17.2826087 9.22348485,19.5613412
  C9.22348485,20.3233394 9.54598603,21.0118505 10.0650893,21.5040462 Z M12.0833333,20.6514763
  C11.3814715,20.6514763 10.8125,20.1226027 10.8125,19.4702042 C10.8125,18.6069669
  12.0833333,16.9347829 12.0833333,16.9347829 C12.0833333,16.9347829 13.3541667,18.6069669
  13.3541667,19.4702042 C13.3541667,20.1226027 12.7851952,20.6514763 12.0833333,20.6514763 Z
`,
        B = `
  M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2
  2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55
  4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02
  9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55
  2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z
`,
        d = 'M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z',
        i = `
  M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91
  16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99
  5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z
`,
        _ = 'M3 5h18v3H3zM3 10.5h13v3H3zM3 16h8v3H3z',
        a = `
  M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49
  1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38
  2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11
  1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4
  1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49
  1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5
  3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z
`,
        s = `
  M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41
  3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04
  1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6
  8h-4v-2h4v2zm0-4h-4v-2h4v2z
`;
    },
    '../react-devtools-shared/src/devtools/views/ModalDialog.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/ModalDialog.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/ModalDialog.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'ModalDialog', function () {
          return _;
        }),
        e.d(o, 'ModalDialogContext', function () {
          return B;
        }),
        e.d(o, 'ModalDialogContextController', function () {
          return i;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/views/Button.js'),
        C = e('../react-devtools-shared/src/devtools/views/hooks.js'),
        b = e('../react-devtools-shared/src/devtools/views/ModalDialog.css'),
        m = e.n(b);
      function y(s, u) {
        return P(s) || x(s, u) || p();
      }
      function p() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function x(s, u) {
        var O = [],
          v = !0,
          A = !1,
          l = void 0;
        try {
          for (
            var c = s[Symbol.iterator](), h;
            !(v = (h = c.next()).done) &&
            (O.push(h.value), !(u && O.length === u));
            v = !0
          );
        } catch (f) {
          (A = !0), (l = f);
        } finally {
          try {
            !v && c.return != null && c.return();
          } finally {
            if (A) throw l;
          }
        }
        return O;
      }
      function P(s) {
        if (Array.isArray(s)) return s;
      }
      var B = Object(t.createContext)(null);
      B.displayName = 'ModalDialogContext';
      function d(s, u) {
        switch (u.type) {
          case 'HIDE':
            return {
              canBeDismissed: !0,
              content: null,
              isVisible: !1,
              title: null,
            };
          case 'SHOW':
            return {
              canBeDismissed: u.canBeDismissed !== !1,
              content: u.content,
              isVisible: !0,
              title: u.title || null,
            };
          default:
            throw new Error('Invalid action "'.concat(u.type, '"'));
        }
      }
      function i(s) {
        var u = s.children,
          O = Object(t.useReducer)(d, {
            canBeDismissed: !0,
            content: null,
            isVisible: !1,
            title: null,
          }),
          v = y(O, 2),
          A = v[0],
          l = v[1],
          c = Object(t.useMemo)(
            function () {
              return {
                canBeDismissed: A.canBeDismissed,
                content: A.content,
                isVisible: A.isVisible,
                title: A.title,
                dispatch: l,
              };
            },
            [A, l],
          );
        return n.a.createElement(B.Provider, { value: c }, u);
      }
      function _(s) {
        var u = Object(t.useContext)(B),
          O = u.isVisible;
        return O ? n.a.createElement(a, null) : null;
      }
      function a(s) {
        var u = Object(t.useContext)(B),
          O = u.canBeDismissed,
          v = u.content,
          A = u.dispatch,
          l = u.title,
          c = Object(t.useCallback)(
            function () {
              O && A({ type: 'HIDE' });
            },
            [O, A],
          ),
          h = Object(t.useRef)(null);
        Object(C.useModalDismissSignal)(h, c, !1);
        var f = function (D) {
          D.stopPropagation();
        };
        return n.a.createElement(
          'div',
          { className: m.a.Background, onClick: c },
          n.a.createElement(
            'div',
            { ref: h, className: m.a.Dialog, onClick: f },
            l !== null && n.a.createElement('div', { className: m.a.Title }, l),
            v,
            O &&
              n.a.createElement(
                'div',
                { className: m.a.Buttons },
                n.a.createElement(
                  r.default,
                  { autoFocus: !0, className: m.a.Button, onClick: c },
                  'Okay',
                ),
              ),
          ),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/ChartNode.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/ChartNode.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/ChartNode.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return m;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ChartNode.css',
        ),
        C = e.n(r),
        b = 35;
      function m(y) {
        var p = y.color,
          x = y.height,
          P = y.isDimmed,
          B = P === void 0 ? !1 : P,
          d = y.label,
          i = y.onClick,
          _ = y.onDoubleClick,
          a = y.textStyle,
          s = y.width,
          u = y.x,
          O = y.y;
        return n.a.createElement(
          'g',
          {
            className: C.a.Group,
            transform: 'translate('.concat(u, ',').concat(O, ')'),
          },
          n.a.createElement('title', null, d),
          n.a.createElement('rect', {
            width: s,
            height: x,
            fill: p,
            onClick: i,
            onDoubleClick: _,
            className: C.a.Rect,
            style: { opacity: B ? 0.5 : 1 },
          }),
          s >= b &&
            n.a.createElement(
              'foreignObject',
              {
                width: s,
                height: x,
                className: C.a.ForeignObject,
                style: {
                  paddingLeft: u < 0 ? -u : 0,
                  opacity: B ? 0.75 : 1,
                  display: s < b ? 'none' : 'block',
                },
                y: 0,
              },
              n.a.createElement('div', { className: C.a.Div, style: a }, d),
            ),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/ClearProfilingDataButton.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return y;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ProfilerContext.js',
        ),
        C = e('../react-devtools-shared/src/devtools/views/Button.js'),
        b = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js'),
        m = e('../react-devtools-shared/src/devtools/views/context.js');
      function y() {
        var p = Object(t.useContext)(m.StoreContext),
          x = Object(t.useContext)(r.ProfilerContext),
          P = x.didRecordCommits,
          B = x.isProfiling,
          d = p.profilerStore,
          i = Object(t.useCallback)(
            function () {
              return d.clear();
            },
            [d],
          );
        return n.a.createElement(
          C.default,
          { disabled: B || !P, onClick: i, title: 'Clear profiling data' },
          n.a.createElement(b.default, { type: 'clear' }),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/CommitFlamegraph.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/CommitFlamegraph.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/CommitFlamegraph.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return s;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../../node_modules/react-virtualized-auto-sizer/dist/index.esm.js',
        ),
        C = e(
          '../react-devtools-shared/src/node_modules/react-window/dist/index.esm.js',
        ),
        b = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ProfilerContext.js',
        ),
        m = e(
          '../react-devtools-shared/src/devtools/views/Profiler/NoCommitData.js',
        ),
        y = e(
          '../react-devtools-shared/src/devtools/views/Profiler/CommitFlamegraphListItem.js',
        ),
        p = e('../react-devtools-shared/src/devtools/views/Profiler/utils.js'),
        x = e('../react-devtools-shared/src/devtools/views/context.js'),
        P = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsContext.js',
        ),
        B = e(
          '../react-devtools-shared/src/devtools/views/Profiler/CommitFlamegraph.css',
        ),
        d = e.n(B);
      function i() {
        return (
          (i =
            Object.assign ||
            function (v) {
              for (var A = 1; A < arguments.length; A++) {
                var l = arguments[A];
                for (var c in l)
                  Object.prototype.hasOwnProperty.call(l, c) && (v[c] = l[c]);
              }
              return v;
            }),
          i.apply(this, arguments)
        );
      }
      function _(v, A) {
        if (v == null) return {};
        var l = a(v, A),
          c,
          h;
        if (Object.getOwnPropertySymbols) {
          var f = Object.getOwnPropertySymbols(v);
          for (h = 0; h < f.length; h++)
            (c = f[h]),
              !(A.indexOf(c) >= 0) &&
                (!Object.prototype.propertyIsEnumerable.call(v, c) ||
                  (l[c] = v[c]));
        }
        return l;
      }
      function a(v, A) {
        if (v == null) return {};
        var l = {},
          c = Object.keys(v),
          h,
          f;
        for (f = 0; f < c.length; f++)
          (h = c[f]), !(A.indexOf(h) >= 0) && (l[h] = v[h]);
        return l;
      }
      function s(v) {
        var A = Object(t.useContext)(x.StoreContext),
          l = A.profilerStore,
          c = Object(t.useContext)(b.ProfilerContext),
          h = c.rootID,
          f = c.selectedCommitIndex,
          E = c.selectFiber,
          D = l.profilingCache,
          I = Object(t.useCallback)(
            function (j) {
              j.stopPropagation(), E(null, null);
            },
            [E],
          ),
          T = null,
          R = null;
        return (
          f !== null &&
            ((T = D.getCommitTree({ commitIndex: f, rootID: h })),
            (R = D.getFlamegraphChartData({
              commitIndex: f,
              commitTree: T,
              rootID: h,
            }))),
          T != null && R != null && R.depth > 0
            ? n.a.createElement(
                'div',
                { className: d.a.Container, onClick: I },
                n.a.createElement(r.default, null, function (j) {
                  var z = j.height,
                    W = j.width;
                  return n.a.createElement(u, {
                    chartData: R,
                    commitTree: T,
                    height: z,
                    width: W,
                  });
                }),
              )
            : n.a.createElement(m.default, null)
        );
      }
      function u(v) {
        var A = v.chartData;
        v.commitTree;
        var l = v.height,
          c = v.width,
          h = Object(t.useContext)(P.SettingsContext),
          f = h.lineHeight,
          E = Object(t.useContext)(b.ProfilerContext),
          D = E.selectFiber,
          I = E.selectedFiberID,
          T = Object(t.useMemo)(
            function () {
              if (I === null) return 0;
              var z = A.idToDepthMap.get(I);
              return z !== void 0 ? z - 1 : 0;
            },
            [A, I],
          ),
          R = Object(t.useMemo)(
            function () {
              return (
                (I !== null &&
                  A.rows[T].find(function (z) {
                    return z.id === I;
                  })) ||
                null
              );
            },
            [A, I, T],
          ),
          j = Object(t.useMemo)(
            function () {
              return {
                chartData: A,
                scaleX: Object(p.scale)(
                  0,
                  R !== null ? R.treeBaseDuration : A.baseDuration,
                  0,
                  c,
                ),
                selectedChartNode: R,
                selectedChartNodeIndex: T,
                selectFiber: D,
                width: c,
              };
            },
            [A, R, T, D, c],
          );
        return n.a.createElement(
          C.FixedSizeList,
          {
            height: l,
            innerElementType: O,
            itemCount: A.depth,
            itemData: j,
            itemSize: f,
            width: c,
          },
          y.default,
        );
      }
      var O = Object(t.forwardRef)(function (v, A) {
        var l = v.children,
          c = _(v, ['children']);
        return n.a.createElement(
          'svg',
          i({ ref: A }, c),
          n.a.createElement(
            'defs',
            null,
            n.a.createElement(
              'pattern',
              {
                id: 'didNotRenderPattern',
                patternUnits: 'userSpaceOnUse',
                width: '4',
                height: '4',
              },
              n.a.createElement('path', {
                d: 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2',
                className: d.a.PatternPath,
              }),
            ),
          ),
          l,
        );
      });
    },
    '../react-devtools-shared/src/devtools/views/Profiler/CommitFlamegraphListItem.js': function (
      g,
      o,
      e,
    ) {
      e.r(o);
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/node_modules/react-window/dist/index.esm.js',
        ),
        C = e(
          '../react-devtools-shared/src/devtools/views/Profiler/constants.js',
        ),
        b = e('../react-devtools-shared/src/devtools/views/Profiler/utils.js'),
        m = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ChartNode.js',
        ),
        y = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsContext.js',
        );
      function p(x) {
        var P = x.data,
          B = x.index,
          d = x.style,
          i = P.chartData,
          _ = P.scaleX,
          a = P.selectedChartNode,
          s = P.selectedChartNodeIndex,
          u = P.selectFiber,
          O = P.width,
          v = i.renderPathNodes,
          A = i.maxSelfDuration,
          l = i.rows,
          c = Object(t.useContext)(y.SettingsContext),
          h = c.lineHeight,
          f = Object(t.useCallback)(
            function (T, R, j) {
              T.stopPropagation(), u(R, j);
            },
            [u],
          ),
          E = parseInt(d.top, 10),
          D = l[B],
          I = _(a !== null ? a.offset : 0, O);
        return n.a.createElement(
          t.Fragment,
          null,
          D.map(function (T) {
            var R = T.didRender,
              j = T.id,
              z = T.label,
              W = T.name,
              K = T.offset,
              S = T.selfDuration,
              F = T.treeBaseDuration,
              k = _(K, O),
              H = _(F, O);
            if (H < C.barWidthThreshold || k + H < I || k > I + O) return null;
            var w = 'url(#didNotRenderPattern)',
              L = 'var(--color-commit-did-not-render-pattern-text)';
            return (
              R
                ? ((w = Object(b.getGradientColor)(S / A)),
                  (L = 'var(--color-commit-gradient-text)'))
                : v.has(j) &&
                  ((w = 'var(--color-commit-did-not-render-fill)'),
                  (L = 'var(--color-commit-did-not-render-fill-text)')),
              n.a.createElement(m.default, {
                color: w,
                height: h,
                isDimmed: B < s,
                key: j,
                label: z,
                onClick: function (U) {
                  return f(U, j, W);
                },
                textStyle: { color: L },
                width: H,
                x: k - I,
                y: E,
              })
            );
          }),
        );
      }
      o.default = Object(t.memo)(p, r.areEqual);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/CommitRanked.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/CommitRanked.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/CommitRanked.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return i;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../../node_modules/react-virtualized-auto-sizer/dist/index.esm.js',
        ),
        C = e(
          '../react-devtools-shared/src/node_modules/react-window/dist/index.esm.js',
        ),
        b = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ProfilerContext.js',
        ),
        m = e(
          '../react-devtools-shared/src/devtools/views/Profiler/NoCommitData.js',
        ),
        y = e(
          '../react-devtools-shared/src/devtools/views/Profiler/CommitRankedListItem.js',
        ),
        p = e('../react-devtools-shared/src/devtools/views/Profiler/utils.js'),
        x = e('../react-devtools-shared/src/devtools/views/context.js'),
        P = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsContext.js',
        ),
        B = e(
          '../react-devtools-shared/src/devtools/views/Profiler/CommitRanked.css',
        ),
        d = e.n(B);
      function i(s) {
        var u = Object(t.useContext)(x.StoreContext),
          O = u.profilerStore,
          v = Object(t.useContext)(b.ProfilerContext),
          A = v.rootID,
          l = v.selectedCommitIndex,
          c = v.selectFiber,
          h = O.profilingCache,
          f = Object(t.useCallback)(
            function (I) {
              I.stopPropagation(), c(null, null);
            },
            [c],
          ),
          E = null,
          D = null;
        return (
          l !== null &&
            ((E = h.getCommitTree({ commitIndex: l, rootID: A })),
            (D = h.getRankedChartData({
              commitIndex: l,
              commitTree: E,
              rootID: A,
            }))),
          E != null && D != null && D.nodes.length > 0
            ? n.a.createElement(
                'div',
                { className: d.a.Container, onClick: f },
                n.a.createElement(r.default, null, function (I) {
                  var T = I.height,
                    R = I.width;
                  return n.a.createElement(_, {
                    chartData: D,
                    commitTree: E,
                    height: T,
                    width: R,
                  });
                }),
              )
            : n.a.createElement(m.default, null)
        );
      }
      function _(s) {
        var u = s.chartData;
        s.commitTree;
        var O = s.height,
          v = s.width,
          A = Object(t.useContext)(P.SettingsContext),
          l = A.lineHeight,
          c = Object(t.useContext)(b.ProfilerContext),
          h = c.selectedFiberID,
          f = c.selectFiber,
          E = Object(t.useMemo)(
            function () {
              return a(u, h);
            },
            [u, h],
          ),
          D = Object(t.useMemo)(
            function () {
              return {
                chartData: u,
                scaleX: Object(p.scale)(0, u.nodes[E].value, 0, v),
                selectedFiberID: h,
                selectedFiberIndex: E,
                selectFiber: f,
                width: v,
              };
            },
            [u, h, E, f, v],
          );
        return n.a.createElement(
          C.FixedSizeList,
          {
            height: O,
            innerElementType: 'svg',
            itemCount: u.nodes.length,
            itemData: D,
            itemSize: l,
            width: v,
          },
          y.default,
        );
      }
      var a = function (u, O) {
        if (O === null) return 0;
        for (var v = u.nodes, A = 0; A < v.length; A++)
          if (v[A].id === O) return A;
        return 0;
      };
    },
    '../react-devtools-shared/src/devtools/views/Profiler/CommitRankedListItem.js': function (
      g,
      o,
      e,
    ) {
      e.r(o);
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/node_modules/react-window/dist/index.esm.js',
        ),
        C = e(
          '../react-devtools-shared/src/devtools/views/Profiler/constants.js',
        ),
        b = e('../react-devtools-shared/src/devtools/views/Profiler/utils.js'),
        m = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ChartNode.js',
        ),
        y = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsContext.js',
        );
      function p(x) {
        var P = x.data,
          B = x.index,
          d = x.style,
          i = P.chartData,
          _ = P.scaleX,
          a = P.selectedFiberIndex,
          s = P.selectFiber,
          u = P.width,
          O = i.nodes[B],
          v = Object(t.useContext)(y.SettingsContext),
          A = v.lineHeight,
          l = Object(t.useCallback)(
            function (h) {
              h.stopPropagation(), s(O.id, O.name);
            },
            [O, s],
          ),
          c = parseInt(d.top, 10);
        return n.a.createElement(m.default, {
          color: Object(b.getGradientColor)(O.value / i.maxValue),
          height: A,
          isDimmed: B < a,
          key: O.id,
          label: O.label,
          onClick: l,
          width: Math.max(C.minBarWidth, _(O.value, u)),
          x: 0,
          y: c,
        });
      }
      o.default = Object(t.memo)(p, r.areEqual);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/CommitTreeBuilder.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'getCommitTree', function () {
          return m;
        }),
        e.d(o, 'invalidateCommitTrees', function () {
          return x;
        });
      var t = e('../react-devtools-shared/src/constants.js'),
        n = e('../react-devtools-shared/src/utils.js'),
        r = e('../react-devtools-shared/src/types.js');
      e('../react-devtools-shared/src/devtools/ProfilerStore.js');
      var C = function (d) {
          if (t.__DEBUG__) {
            for (
              var i,
                _ = arguments.length,
                a = new Array(_ > 1 ? _ - 1 : 0),
                s = 1;
              s < _;
              s++
            )
              a[s - 1] = arguments[s];
            (i = console).log.apply(
              i,
              [
                '%cCommitTreeBuilder %c'.concat(d),
                'color: pink; font-weight: bold;',
                'font-weight: bold;',
              ].concat(a),
            );
          }
        },
        b = new Map();
      function m(B) {
        var d = B.commitIndex,
          i = B.profilerStore,
          _ = B.rootID;
        b.has(_) || b.set(_, []);
        var a = b.get(_);
        if (d < a.length) return a[d];
        var s = i.profilingData;
        if (s === null) throw Error('No profiling data available');
        var u = s.dataForRoots.get(_);
        if (u == null)
          throw Error(
            'Could not find profiling data for root "'.concat(_, '"'),
          );
        var O = u.operations;
        if (d === 0) {
          var v = new Map();
          if ((y(_, 0, v, u), O != null && d < O.length)) {
            var A = p({ nodes: v, rootID: _ }, O[d]);
            return t.__DEBUG__ && P(A), a.push(A), A;
          }
        } else {
          var l = m({ commitIndex: d - 1, profilerStore: i, rootID: _ });
          if (O != null && d < O.length) {
            var c = p(l, O[d]);
            return t.__DEBUG__ && P(c), a.push(c), c;
          }
        }
        throw Error(
          'getCommitTree(): Unable to reconstruct tree for root "'
            .concat(_, '" and commit ')
            .concat(d),
        );
      }
      function y(B, d, i, _) {
        var a = _.snapshots.get(B);
        a != null &&
          (i.set(B, {
            id: B,
            children: a.children,
            displayName: a.displayName,
            key: a.key,
            parentID: d,
            treeBaseDuration: _.initialTreeBaseDurations.get(B),
            type: a.type,
          }),
          a.children.forEach(function (s) {
            return y(s, B, i, _);
          }));
      }
      function p(B, d) {
        for (
          var i = new Map(B.nodes),
            _ = function (Y) {
              var Z = Object.assign({}, i.get(Y));
              return i.set(Y, Z), Z;
            },
            a = 2,
            s = null,
            u = [null],
            O = d[a++],
            v = a + O;
          a < v;

        ) {
          var A = d[a++],
            l = Object(n.utfDecodeString)(d.slice(a, a + A));
          u.push(l), (a += A);
        }
        for (; a < d.length; ) {
          var c = d[a];
          switch (c) {
            case t.TREE_OPERATION_ADD:
              s = d[a + 1];
              var h = d[a + 2];
              if (((a += 3), i.has(s)))
                throw new Error(
                  'Commit tree already contains fiber ' +
                    s +
                    '. This is a bug in React DevTools.',
                );
              if (h === r.ElementTypeRoot) {
                a++, a++, t.__DEBUG__ && C('Add', 'new root fiber '.concat(s));
                var f = {
                  children: [],
                  displayName: null,
                  id: s,
                  key: null,
                  parentID: 0,
                  treeBaseDuration: 0,
                  type: h,
                };
                i.set(s, f);
              } else {
                var E = d[a];
                a++, a++;
                var D = d[a],
                  I = u[D];
                a++;
                var T = d[a],
                  R = u[T];
                a++,
                  t.__DEBUG__ &&
                    C(
                      'Add',
                      'fiber '
                        .concat(s, ' (')
                        .concat(I || 'null', ') as child of ')
                        .concat(E),
                    );
                var j = _(E);
                j.children = j.children.concat(s);
                var z = {
                  children: [],
                  displayName: I,
                  id: s,
                  key: R,
                  parentID: E,
                  treeBaseDuration: 0,
                  type: h,
                };
                i.set(s, z);
              }
              break;
            case t.TREE_OPERATION_REMOVE: {
              var W = d[a + 1];
              a += 2;
              for (var K = 0; K < W; K++) {
                if (((s = d[a]), a++, !i.has(s)))
                  throw new Error(
                    'Commit tree does not contain fiber ' +
                      s +
                      '. This is a bug in React DevTools.',
                  );
                var S = _(s),
                  F = S.parentID;
                if ((i.delete(s), i.has(F))) {
                  var k = _(F);
                  t.__DEBUG__ &&
                    C('Remove', 'fiber '.concat(s, ' from parent ').concat(F)),
                    (k.children = k.children.filter(function (U) {
                      return U !== s;
                    }));
                }
              }
              break;
            }
            case t.TREE_OPERATION_REORDER_CHILDREN: {
              s = d[a + 1];
              var H = d[a + 2],
                w = d.slice(a + 3, a + 3 + H);
              (a = a + 3 + H),
                t.__DEBUG__ &&
                  C(
                    'Re-order',
                    'fiber '.concat(s, ' children ').concat(w.join(',')),
                  );
              var L = _(s);
              L.children = Array.from(w);
              break;
            }
            case t.TREE_OPERATION_UPDATE_TREE_BASE_DURATION: {
              s = d[a + 1];
              var M = _(s);
              (M.treeBaseDuration = d[a + 2] / 1e3),
                t.__DEBUG__ &&
                  C(
                    'Update',
                    'fiber '
                      .concat(s, ' treeBaseDuration to ')
                      .concat(M.treeBaseDuration),
                  ),
                (a += 3);
              break;
            }
            default:
              throw Error('Unsupported Bridge operation '.concat(c));
          }
        }
        return { nodes: i, rootID: B.rootID };
      }
      function x() {
        b.clear();
      }
      var P = function (d) {
        t.__DEBUG__ &&
          (function () {
            var i = d.nodes,
              _ = d.rootID;
            console.group('__printTree()');
            for (
              var a = [_, 0],
                s = function () {
                  var O = a.shift(),
                    v = a.shift(),
                    A = i.get(O);
                  if (A == null)
                    throw Error(
                      'Could not find node with id "'.concat(
                        O,
                        '" in commit tree',
                      ),
                    );
                  console.log(
                    ''
                      .concat('\u2022'.repeat(v))
                      .concat(A.id, ':')
                      .concat(A.displayName || '', ' ')
                      .concat(A.key ? 'key:"'.concat(A.key, '"') : '', ' (')
                      .concat(A.treeBaseDuration, ')'),
                  ),
                    A.children.forEach(function (l) {
                      a.push(l, v + 1);
                    });
                };
              a.length > 0;

            )
              s();
            console.groupEnd();
          })();
      };
    },
    '../react-devtools-shared/src/devtools/views/Profiler/FlamegraphChartBuilder.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'getChartData', function () {
          return C;
        }),
        e.d(o, 'invalidateChartData', function () {
          return b;
        });
      var t = e('../react-devtools-shared/src/types.js'),
        n = e('../react-devtools-shared/src/devtools/views/Profiler/utils.js');
      e('../react-devtools-shared/src/devtools/ProfilerStore.js');
      var r = new Map();
      function C(m) {
        var y = m.commitIndex,
          p = m.commitTree,
          x = m.profilerStore,
          P = m.rootID,
          B = x.getCommitData(P, y),
          d = B.fiberActualDurations,
          i = B.fiberSelfDurations,
          _ = p.nodes,
          a = ''.concat(P, '-').concat(y);
        if (r.has(a)) return r.get(a);
        var s = new Map(),
          u = new Set(),
          O = [],
          v = 0,
          A = 0,
          l = function T(R, j, z) {
            s.set(R, z);
            var W = _.get(R);
            if (W == null)
              throw Error(
                'Could not find node with id "'.concat(R, '" in commit tree'),
              );
            var K = W.children,
              S = W.displayName,
              F = W.key,
              k = W.treeBaseDuration,
              H = W.type,
              w = d.get(R) || 0,
              L = i.get(R) || 0,
              M = d.has(R),
              U = S || 'Anonymous',
              Y = F !== null ? ' key="'.concat(F, '"') : '',
              Z = '';
            H === t.ElementTypeForwardRef
              ? (Z = ' (ForwardRef)')
              : H === t.ElementTypeMemo && (Z = ' (Memo)');
            var q = ''.concat(U).concat(Z).concat(Y);
            M &&
              (q += ' ('
                .concat(Object(n.formatDuration)(L), 'ms of ')
                .concat(Object(n.formatDuration)(w), 'ms)')),
              (v = Math.max(v, z)),
              (A = Math.max(A, L));
            var ee = {
              actualDuration: w,
              didRender: M,
              id: R,
              label: q,
              name: U,
              offset: j - k,
              selfDuration: L,
              treeBaseDuration: k,
            };
            z > O.length ? O.push([ee]) : O[z - 1].push(ee);
            for (var G = K.length - 1; G >= 0; G--) {
              var N = K[G],
                V = T(N, j, z + 1);
              j -= V.treeBaseDuration;
            }
            return ee;
          },
          c = 0;
        if (_.size > 0) {
          var h = _.get(P);
          if (h == null)
            throw Error(
              'Could not find root node with id "'.concat(
                P,
                '" in commit tree',
              ),
            );
          for (var f = h.children.length - 1; f >= 0; f--) {
            var E = h.children[f],
              D = _.get(E);
            if (D == null)
              throw Error(
                'Could not find node with id "'.concat(E, '" in commit tree'),
              );
            (c += D.treeBaseDuration), l(E, c, 1);
          }
          d.forEach(function (T, R) {
            var j = _.get(R);
            if (j != null)
              for (var z = j.parentID; z !== 0 && !u.has(z); )
                u.add(z), (j = _.get(z)), (z = j != null ? j.parentID : 0);
          });
        }
        var I = {
          baseDuration: c,
          depth: v,
          idToDepthMap: s,
          maxSelfDuration: A,
          renderPathNodes: u,
          rows: O,
        };
        return r.set(a, I), I;
      }
      function b() {
        r.clear();
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/InteractionListItem.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/InteractionListItem.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/InteractionListItem.js': function (
      g,
      o,
      e,
    ) {
      e.r(o);
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/node_modules/react-window/dist/index.esm.js',
        ),
        C = e('../react-devtools-shared/src/devtools/views/Profiler/utils.js'),
        b = e(
          '../react-devtools-shared/src/devtools/views/Profiler/InteractionListItem.css',
        ),
        m = e.n(b);
      function y(p) {
        var x = p.data,
          P = p.index,
          B = p.style,
          d = x.chartData,
          i = x.dataForRoot,
          _ = x.labelWidth,
          a = x.scaleX,
          s = x.selectedInteractionID,
          u = x.selectCommitIndex,
          O = x.selectInteraction,
          v = x.selectTab,
          A = i.commitData,
          l = i.interactionCommits,
          c = d.interactions,
          h = d.lastInteractionTime,
          f = d.maxCommitDuration,
          E = c[P];
        if (E == null) throw Error('Could not find interaction #'.concat(P));
        var D = Object(t.useCallback)(
            function () {
              O(E.id);
            },
            [E, O],
          ),
          I = l.get(E.id) || [],
          T = E.timestamp,
          R = h,
          j = function (W) {
            v('flame-chart'), u(W);
          };
        return n.a.createElement(
          'div',
          {
            className: s === E.id ? m.a.SelectedInteraction : m.a.Interaction,
            onClick: D,
            style: B,
          },
          n.a.createElement(
            'div',
            { className: m.a.Name, style: { maxWidth: _ }, title: E.name },
            E.name,
          ),
          n.a.createElement('div', {
            className: m.a.InteractionLine,
            style: { left: _ + a(T, 0), width: a(R - T, 0) },
          }),
          I.map(function (z) {
            return n.a.createElement('div', {
              className: m.a.CommitBox,
              key: z,
              onClick: function () {
                return j(z);
              },
              style: {
                backgroundColor: Object(C.getGradientColor)(
                  Math.min(1, Math.max(0, A[z].duration / f)) || 0,
                ),
                left: _ + a(A[z].timestamp, 0),
              },
            });
          }),
        );
      }
      o.default = Object(t.memo)(y, r.areEqual);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/Interactions.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/Interactions.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/Interactions.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return d;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../../node_modules/react-virtualized-auto-sizer/dist/index.esm.js',
        ),
        C = e(
          '../react-devtools-shared/src/node_modules/react-window/dist/index.esm.js',
        ),
        b = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ProfilerContext.js',
        ),
        m = e(
          '../react-devtools-shared/src/devtools/views/Profiler/InteractionListItem.js',
        ),
        y = e(
          '../react-devtools-shared/src/devtools/views/Profiler/NoInteractions.js',
        ),
        p = e('../react-devtools-shared/src/devtools/views/context.js'),
        x = e('../react-devtools-shared/src/devtools/views/Profiler/utils.js'),
        P = e(
          '../react-devtools-shared/src/devtools/views/Profiler/Interactions.css',
        ),
        B = e.n(P);
      function d(_) {
        return n.a.createElement(
          'div',
          { className: B.a.Container },
          n.a.createElement(r.default, null, function (a) {
            var s = a.height,
              u = a.width;
            return n.a.createElement(i, { height: s, width: u });
          }),
        );
      }
      function i(_) {
        var a = _.height,
          s = _.width,
          u = Object(t.useContext)(b.ProfilerContext),
          O = u.rootID,
          v = u.selectedInteractionID,
          A = u.selectInteraction,
          l = u.selectCommitIndex,
          c = u.selectTab,
          h = Object(t.useContext)(p.StoreContext),
          f = h.profilerStore,
          E = f.profilingCache,
          D = f.getDataForRoot(O),
          I = E.getInteractionsChartData({ rootID: O }),
          T = I.interactions,
          R = Object(t.useCallback)(
            function (z) {
              var W;
              switch (z.key) {
                case 'ArrowDown':
                  (W = T.findIndex(function (K) {
                    return K.id === v;
                  })),
                    A(Math.min(T.length - 1, W + 1)),
                    z.stopPropagation();
                  break;
                case 'ArrowUp':
                  (W = T.findIndex(function (K) {
                    return K.id === v;
                  })),
                    A(Math.max(0, W - 1)),
                    z.stopPropagation();
                  break;
              }
            },
            [T, v, A],
          ),
          j = Object(t.useMemo)(
            function () {
              var z = parseInt(
                  getComputedStyle(document.body).getPropertyValue(
                    '--interaction-commit-size',
                  ),
                  10,
                ),
                W = parseInt(
                  getComputedStyle(document.body).getPropertyValue(
                    '--interaction-label-width',
                  ),
                  10,
                ),
                K = Math.min(W, s / 5),
                S = s - K - z;
              return {
                chartData: I,
                dataForRoot: D,
                labelWidth: K,
                scaleX: Object(x.scale)(0, I.lastInteractionTime, 0, S),
                selectedInteractionID: v,
                selectCommitIndex: l,
                selectInteraction: A,
                selectTab: c,
              };
            },
            [I, D, v, l, A, c, s],
          );
        return T.length === 0
          ? n.a.createElement(y.default, { height: a, width: s })
          : n.a.createElement(
              'div',
              { className: B.a.FocusTarget, onKeyDown: R, tabIndex: 0 },
              n.a.createElement(
                C.FixedSizeList,
                {
                  height: a,
                  itemCount: T.length,
                  itemData: j,
                  itemSize: 30,
                  width: s,
                },
                m.default,
              ),
            );
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/InteractionsChartBuilder.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'getChartData', function () {
          return n;
        }),
        e.d(o, 'invalidateChartData', function () {
          return r;
        }),
        e('../react-devtools-shared/src/devtools/ProfilerStore.js');
      var t = new Map();
      function n(C) {
        var b = C.profilerStore,
          m = C.rootID;
        if (t.has(m)) return t.get(m);
        var y = b.getDataForRoot(m);
        if (y == null)
          throw Error(
            'Could not find profiling data for root "'.concat(m, '"'),
          );
        var p = y.commitData,
          x = y.interactions,
          P = p.length > 0 ? p[p.length - 1].timestamp : 0,
          B = 0;
        p.forEach(function (i) {
          B = Math.max(B, i.duration);
        });
        var d = {
          interactions: Array.from(x.values()),
          lastInteractionTime: P,
          maxCommitDuration: B,
        };
        return t.set(m, d), d;
      }
      function r() {
        t.clear();
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/NoCommitData.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/NoCommitData.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/NoCommitData.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return b;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/devtools/views/Profiler/NoCommitData.css',
        ),
        C = e.n(r);
      function b(m) {
        return n.a.createElement(
          'div',
          { className: C.a.NoCommitData },
          n.a.createElement(
            'div',
            { className: C.a.Header },
            'There is no data matching the current filter criteria.',
          ),
          n.a.createElement(
            'div',
            { className: C.a.FilterMessage },
            'Try adjusting the commit filter in Profiler settings.',
          ),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/NoInteractions.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/NoInteractions.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/NoInteractions.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return b;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/devtools/views/Profiler/NoInteractions.css',
        ),
        C = e.n(r);
      function b(m) {
        var y = m.height,
          p = m.width;
        return n.a.createElement(
          'div',
          { className: C.a.NoInteractions, style: { height: y, width: p } },
          n.a.createElement(
            'p',
            { className: C.a.Header },
            'No interactions were recorded.',
          ),
          n.a.createElement(
            'p',
            null,
            n.a.createElement(
              'a',
              {
                className: C.a.Link,
                href: 'http://fb.me/react-interaction-tracing',
                rel: 'noopener noreferrer',
                target: '_blank',
              },
              'Learn more about the interaction tracing API here.',
            ),
          ),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/Profiler.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/Profiler.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/Profiler.js': function (
      g,
      o,
      e,
    ) {
      e.r(o);
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/views/ModalDialog.js'),
        C = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ProfilerContext.js',
        ),
        b = e('../react-devtools-shared/src/devtools/views/TabBar.js'),
        m = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ClearProfilingDataButton.js',
        ),
        y = e(
          '../react-devtools-shared/src/devtools/views/Profiler/CommitFlamegraph.js',
        ),
        p = e(
          '../react-devtools-shared/src/devtools/views/Profiler/CommitRanked.js',
        ),
        x = e(
          '../react-devtools-shared/src/devtools/views/Profiler/Interactions.js',
        ),
        P = e(
          '../react-devtools-shared/src/devtools/views/Profiler/RootSelector.js',
        ),
        B = e(
          '../react-devtools-shared/src/devtools/views/Profiler/RecordToggle.js',
        ),
        d = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ReloadAndProfileButton.js',
        ),
        i = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ProfilingImportExportButtons.js',
        ),
        _ = e(
          '../react-devtools-shared/src/devtools/views/Profiler/SnapshotSelector.js',
        ),
        a = e(
          '../react-devtools-shared/src/devtools/views/Profiler/SidebarCommitInfo.js',
        ),
        s = e(
          '../react-devtools-shared/src/devtools/views/Profiler/SidebarInteractions.js',
        ),
        u = e(
          '../react-devtools-shared/src/devtools/views/Profiler/SidebarSelectedFiberInfo.js',
        ),
        O = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsModal.js',
        ),
        v = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsModalContextToggle.js',
        ),
        A = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsModalContext.js',
        ),
        l = e('../react-devtools-shared/src/devtools/views/portaledContent.js'),
        c = e(
          '../react-devtools-shared/src/devtools/views/Profiler/Profiler.css',
        ),
        h = e.n(c);
      function f(j) {
        var z = Object(t.useContext)(C.ProfilerContext),
          W = z.didRecordCommits,
          K = z.isProcessingData,
          S = z.isProfiling,
          F = z.selectedCommitIndex,
          k = z.selectedFiberID,
          H = z.selectedTabID,
          w = z.selectTab,
          L = z.supportsProfiling,
          M = null;
        if (W)
          switch (H) {
            case 'flame-chart':
              M = n.a.createElement(y.default, null);
              break;
            case 'ranked-chart':
              M = n.a.createElement(p.default, null);
              break;
            case 'interactions':
              M = n.a.createElement(x.default, null);
              break;
          }
        else
          S
            ? (M = n.a.createElement(R, null))
            : K
            ? (M = n.a.createElement(T, null))
            : L
            ? (M = n.a.createElement(D, null))
            : (M = n.a.createElement(I, null));
        var U = null;
        if (!S && !K && W)
          switch (H) {
            case 'interactions':
              U = n.a.createElement(s.default, null);
              break;
            case 'flame-chart':
            case 'ranked-chart':
              F !== null &&
                (k !== null
                  ? (U = n.a.createElement(u.default, null))
                  : (U = n.a.createElement(a.default, null)));
              break;
          }
        return n.a.createElement(
          A.SettingsModalContextController,
          null,
          n.a.createElement(
            'div',
            { className: h.a.Profiler },
            n.a.createElement(
              'div',
              { className: h.a.LeftColumn },
              n.a.createElement(
                'div',
                { className: h.a.Toolbar },
                n.a.createElement(B.default, { disabled: !L }),
                n.a.createElement(d.default, null),
                n.a.createElement(m.default, null),
                n.a.createElement(i.default, null),
                n.a.createElement('div', { className: h.a.VRule }),
                n.a.createElement(b.default, {
                  currentTab: H,
                  id: 'Profiler',
                  selectTab: w,
                  tabs: E,
                  type: 'profiler',
                }),
                n.a.createElement(P.default, null),
                n.a.createElement('div', { className: h.a.Spacer }),
                n.a.createElement(v.default, null),
                W &&
                  n.a.createElement(
                    t.Fragment,
                    null,
                    n.a.createElement('div', { className: h.a.VRule }),
                    n.a.createElement(_.default, null),
                  ),
              ),
              n.a.createElement(
                'div',
                { className: h.a.Content },
                M,
                n.a.createElement(r.ModalDialog, null),
              ),
            ),
            n.a.createElement('div', { className: h.a.RightColumn }, U),
            n.a.createElement(O.default, null),
          ),
        );
      }
      var E = [
          {
            id: 'flame-chart',
            icon: 'flame-chart',
            label: 'Flamegraph',
            title: 'Flamegraph chart',
          },
          {
            id: 'ranked-chart',
            icon: 'ranked-chart',
            label: 'Ranked',
            title: 'Ranked chart',
          },
          {
            id: 'interactions',
            icon: 'interactions',
            label: 'Interactions',
            title: 'Profiled interactions',
          },
        ],
        D = function () {
          return n.a.createElement(
            'div',
            { className: h.a.Column },
            n.a.createElement(
              'div',
              { className: h.a.Header },
              'No profiling data has been recorded.',
            ),
            n.a.createElement(
              'div',
              { className: h.a.Row },
              'Click the record button ',
              n.a.createElement(B.default, null),
              ' to start recording.',
            ),
          );
        },
        I = function () {
          return n.a.createElement(
            'div',
            { className: h.a.Column },
            n.a.createElement(
              'div',
              { className: h.a.Header },
              'Profiling not supported.',
            ),
            n.a.createElement(
              'p',
              { className: h.a.Paragraph },
              'Profiling support requires either a development or production-profiling build of React v16.5+.',
            ),
            n.a.createElement(
              'p',
              { className: h.a.Paragraph },
              'Learn more at',
              ' ',
              n.a.createElement(
                'a',
                {
                  className: h.a.Link,
                  href: 'https://fb.me/react-profiling',
                  rel: 'noopener noreferrer',
                  target: '_blank',
                },
                'fb.me/react-profiling',
              ),
              '.',
            ),
          );
        },
        T = function () {
          return n.a.createElement(
            'div',
            { className: h.a.Column },
            n.a.createElement(
              'div',
              { className: h.a.Header },
              'Processing data...',
            ),
            n.a.createElement(
              'div',
              { className: h.a.Row },
              'This should only take a minute.',
            ),
          );
        },
        R = function () {
          return n.a.createElement(
            'div',
            { className: h.a.Column },
            n.a.createElement(
              'div',
              { className: h.a.Header },
              'Profiling is in progress...',
            ),
            n.a.createElement(
              'div',
              { className: h.a.Row },
              'Click the record button ',
              n.a.createElement(B.default, null),
              ' to stop recording.',
            ),
          );
        };
      o.default = Object(l.default)(f);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/ProfilerContext.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'ProfilerContext', function () {
          return B;
        }),
        e.d(o, 'ProfilerContextController', function () {
          return d;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('react-dom'),
        C = e('../react-devtools-shared/src/devtools/views/hooks.js'),
        b = e(
          '../react-devtools-shared/src/devtools/views/Components/TreeContext.js',
        ),
        m = e('../react-devtools-shared/src/devtools/views/context.js');
      function y(i, _) {
        return P(i) || x(i, _) || p();
      }
      function p() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function x(i, _) {
        var a = [],
          s = !0,
          u = !1,
          O = void 0;
        try {
          for (
            var v = i[Symbol.iterator](), A;
            !(s = (A = v.next()).done) &&
            (a.push(A.value), !(_ && a.length === _));
            s = !0
          );
        } catch (l) {
          (u = !0), (O = l);
        } finally {
          try {
            !s && v.return != null && v.return();
          } finally {
            if (u) throw O;
          }
        }
        return a;
      }
      function P(i) {
        if (Array.isArray(i)) return i;
      }
      var B = Object(t.createContext)(null);
      B.displayName = 'ProfilerContext';
      function d(i) {
        var _ = i.children,
          a = Object(t.useContext)(m.StoreContext),
          s = Object(t.useContext)(b.TreeStateContext),
          u = s.selectedElementID,
          O = Object(t.useContext)(b.TreeDispatcherContext),
          v = a.profilerStore,
          A = Object(t.useMemo)(
            function () {
              return {
                getCurrentValue: function () {
                  return {
                    didRecordCommits: v.didRecordCommits,
                    isProcessingData: v.isProcessingData,
                    isProfiling: v.isProfiling,
                    profilingData: v.profilingData,
                    supportsProfiling: a.supportsProfiling,
                  };
                },
                subscribe: function (J) {
                  return (
                    v.addListener('profilingData', J),
                    v.addListener('isProcessingData', J),
                    v.addListener('isProfiling', J),
                    a.addListener('supportsProfiling', J),
                    function () {
                      v.removeListener('profilingData', J),
                        v.removeListener('isProcessingData', J),
                        v.removeListener('isProfiling', J),
                        a.removeListener('supportsProfiling', J);
                    }
                  );
                },
              };
            },
            [v, a],
          ),
          l = Object(C.useSubscription)(A),
          c = l.didRecordCommits,
          h = l.isProcessingData,
          f = l.isProfiling,
          E = l.profilingData,
          D = l.supportsProfiling,
          I = Object(t.useState)(),
          T = y(I, 2),
          R = T[0],
          j = T[1],
          z = Object(t.useState)(null),
          W = y(z, 2),
          K = W[0],
          S = W[1];
        R !== E &&
          Object(r.unstable_batchedUpdates)(function () {
            j(E);
            var ue = E !== null ? E.dataForRoots : null;
            if (ue != null) {
              var J = ue.keys().next().value || null;
              if (K === null || !ue.has(K)) {
                var ie = null;
                u !== null && (ie = a.getRootIDForElement(u)),
                  ie !== null && ue.has(ie) ? S(ie) : S(J);
              }
            }
          });
        var F = Object(t.useCallback)(
            function () {
              return a.profilerStore.startProfiling();
            },
            [a],
          ),
          k = Object(t.useCallback)(
            function () {
              return a.profilerStore.stopProfiling();
            },
            [a],
          ),
          H = Object(C.useLocalStorage)(
            'React::DevTools::isCommitFilterEnabled',
            !1,
          ),
          w = y(H, 2),
          L = w[0],
          M = w[1],
          U = Object(C.useLocalStorage)('minCommitDuration', 0),
          Y = y(U, 2),
          Z = Y[0],
          q = Y[1],
          ee = Object(t.useState)(null),
          G = y(ee, 2),
          N = G[0],
          V = G[1],
          X = Object(t.useState)('flame-chart'),
          $ = y(X, 2),
          te = $[0],
          Q = $[1],
          ne = Object(t.useState)(null),
          re = y(ne, 2),
          ce = re[0],
          se = re[1],
          fe = Object(t.useState)(null),
          de = y(fe, 2),
          ge = de[0],
          pe = de[1],
          me = Object(t.useState)(null),
          oe = y(me, 2),
          ve = oe[0],
          le = oe[1],
          Ee = Object(t.useCallback)(
            function (ue, J) {
              if ((se(ue), pe(J), ue !== null)) {
                var ie = a.getElementByID(ue);
                ie !== null &&
                  ie.displayName === J &&
                  O({ type: 'SELECT_ELEMENT_BY_ID', payload: ue });
              }
            },
            [O, se, pe, a],
          );
        f &&
          Object(r.unstable_batchedUpdates)(function () {
            N !== null && V(null),
              ce !== null && (se(null), pe(null)),
              ve !== null && le(null);
          });
        var Ae = Object(t.useMemo)(
          function () {
            return {
              selectedTabID: te,
              selectTab: Q,
              didRecordCommits: c,
              isProcessingData: h,
              isProfiling: f,
              profilingData: E,
              startProfiling: F,
              stopProfiling: k,
              supportsProfiling: D,
              rootID: K,
              setRootID: S,
              isCommitFilterEnabled: L,
              setIsCommitFilterEnabled: M,
              minCommitDuration: Z,
              setMinCommitDuration: q,
              selectedCommitIndex: N,
              selectCommitIndex: V,
              selectedFiberID: ce,
              selectedFiberName: ge,
              selectFiber: Ee,
              selectedInteractionID: ve,
              selectInteraction: le,
            };
          },
          [
            te,
            Q,
            c,
            h,
            f,
            E,
            F,
            k,
            D,
            K,
            S,
            L,
            M,
            Z,
            q,
            N,
            V,
            ce,
            ge,
            Ee,
            ve,
            le,
          ],
        );
        return n.a.createElement(B.Provider, { value: Ae }, _);
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/ProfilingImportExportButtons.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/ProfilingImportExportButtons.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/ProfilingImportExportButtons.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return d;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ProfilerContext.js',
        ),
        C = e('../react-devtools-shared/src/devtools/views/ModalDialog.js'),
        b = e('../react-devtools-shared/src/devtools/views/Button.js'),
        m = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js'),
        y = e('../react-devtools-shared/src/devtools/views/context.js'),
        p = e('../react-devtools-shared/src/devtools/views/Profiler/utils.js'),
        x = e('../react-devtools-shared/src/devtools/views/utils.js'),
        P = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ProfilingImportExportButtons.css',
        ),
        B = e.n(P);
      function d() {
        var i = Object(t.useContext)(r.ProfilerContext),
          _ = i.isProfiling,
          a = i.profilingData,
          s = i.rootID,
          u = Object(t.useContext)(y.StoreContext),
          O = u.profilerStore,
          v = Object(t.useRef)(null),
          A = Object(t.useRef)(null),
          l = Object(t.useContext)(C.ModalDialogContext),
          c = l.dispatch,
          h = Object(t.useCallback)(
            function () {
              if (s !== null && a !== null && A.current !== null) {
                var D = Object(p.prepareProfilingDataExport)(a),
                  I = new Date(),
                  T = I.toLocaleDateString(void 0, {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  }).replace(/\//g, '-'),
                  R = I.toLocaleTimeString(void 0, { hour12: !1 }).replace(
                    /:/g,
                    '-',
                  );
                Object(x.downloadFile)(
                  A.current,
                  'profiling-data.'.concat(T, '.').concat(R, '.json'),
                  JSON.stringify(D, null, 2),
                );
              }
            },
            [s, a],
          ),
          f = Object(t.useCallback)(function () {
            v.current !== null && v.current.click();
          }, []),
          E = Object(t.useCallback)(
            function () {
              var D = v.current;
              if (D !== null && D.files.length > 0) {
                var I = new FileReader();
                I.addEventListener('load', function () {
                  try {
                    var T = I.result,
                      R = JSON.parse(T);
                    O.profilingData = Object(
                      p.prepareProfilingDataFrontendFromExport,
                    )(R);
                  } catch (j) {
                    c({
                      type: 'SHOW',
                      title: 'Import failed',
                      content: n.a.createElement(
                        t.Fragment,
                        null,
                        n.a.createElement(
                          'div',
                          null,
                          'The profiling data you selected cannot be imported.',
                        ),
                        j !== null &&
                          n.a.createElement(
                            'div',
                            { className: B.a.ErrorMessage },
                            j.message,
                          ),
                      ),
                    });
                  }
                }),
                  I.readAsText(D.files[0]);
              }
            },
            [c, O],
          );
        return n.a.createElement(
          t.Fragment,
          null,
          n.a.createElement('div', { className: B.a.VRule }),
          n.a.createElement('input', {
            ref: v,
            className: B.a.Input,
            type: 'file',
            onChange: E,
            tabIndex: -1,
          }),
          n.a.createElement('a', { ref: A, className: B.a.Input }),
          n.a.createElement(
            b.default,
            { disabled: _, onClick: f, title: 'Load profile...' },
            n.a.createElement(m.default, { type: 'import' }),
          ),
          n.a.createElement(
            b.default,
            {
              disabled: _ || !O.didRecordCommits,
              onClick: h,
              title: 'Save profile...',
            },
            n.a.createElement(m.default, { type: 'export' }),
          ),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/RankedChartBuilder.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'getChartData', function () {
          return C;
        }),
        e.d(o, 'invalidateChartData', function () {
          return b;
        });
      var t = e('../react-devtools-shared/src/types.js'),
        n = e('../react-devtools-shared/src/devtools/views/Profiler/utils.js');
      e('../react-devtools-shared/src/devtools/ProfilerStore.js');
      var r = new Map();
      function C(m) {
        var y = m.commitIndex,
          p = m.commitTree,
          x = m.profilerStore,
          P = m.rootID,
          B = x.getCommitData(P, y),
          d = B.fiberActualDurations,
          i = B.fiberSelfDurations,
          _ = p.nodes,
          a = ''.concat(P, '-').concat(y);
        if (r.has(a)) return r.get(a);
        var s = 0,
          u = [];
        d.forEach(function (v, A) {
          var l = _.get(A);
          if (l == null)
            throw Error(
              'Could not find node with id "'.concat(A, '" in commit tree'),
            );
          var c = l.displayName,
            h = l.key,
            f = l.parentID,
            E = l.type;
          if (f !== 0) {
            var D = i.get(A) || 0;
            s = Math.max(s, D);
            var I = c || 'Anonymous',
              T = h !== null ? ' key="'.concat(h, '"') : '',
              R = '';
            E === t.ElementTypeForwardRef
              ? (R = ' (ForwardRef)')
              : E === t.ElementTypeMemo && (R = ' (Memo)');
            var j = ''
              .concat(I)
              .concat(R)
              .concat(T, ' (')
              .concat(Object(n.formatDuration)(D), 'ms)');
            u.push({ id: A, label: j, name: I, value: D });
          }
        });
        var O = {
          maxValue: s,
          nodes: u.sort(function (v, A) {
            return A.value - v.value;
          }),
        };
        return r.set(a, O), O;
      }
      function b() {
        r.clear();
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/RecordToggle.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/RecordToggle.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/RecordToggle.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return p;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/views/Button.js'),
        C = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js'),
        b = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ProfilerContext.js',
        ),
        m = e(
          '../react-devtools-shared/src/devtools/views/Profiler/RecordToggle.css',
        ),
        y = e.n(m);
      function p(x) {
        var P = x.disabled,
          B = Object(t.useContext)(b.ProfilerContext),
          d = B.isProfiling,
          i = B.startProfiling,
          _ = B.stopProfiling,
          a = y.a.InactiveRecordToggle;
        return (
          P
            ? (a = y.a.DisabledRecordToggle)
            : d && (a = y.a.ActiveRecordToggle),
          n.a.createElement(
            r.default,
            {
              className: a,
              disabled: P,
              onClick: d ? _ : i,
              title: d ? 'Stop profiling' : 'Start profiling',
            },
            n.a.createElement(C.default, { type: 'record' }),
          )
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/ReloadAndProfileButton.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return y;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/views/Button.js'),
        C = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js'),
        b = e('../react-devtools-shared/src/devtools/views/context.js'),
        m = e('../react-devtools-shared/src/devtools/views/hooks.js');
      function y() {
        var p = Object(t.useContext)(b.BridgeContext),
          x = Object(t.useContext)(b.StoreContext),
          P = Object(t.useMemo)(
            function () {
              return {
                getCurrentValue: function () {
                  return {
                    recordChangeDescriptions: x.recordChangeDescriptions,
                    supportsReloadAndProfile: x.supportsReloadAndProfile,
                  };
                },
                subscribe: function (s) {
                  return (
                    x.addListener('recordChangeDescriptions', s),
                    x.addListener('supportsReloadAndProfile', s),
                    function () {
                      x.removeListener('recordChangeDescriptions', s),
                        x.removeListener('supportsReloadAndProfile', s);
                    }
                  );
                },
              };
            },
            [x],
          ),
          B = Object(m.useSubscription)(P),
          d = B.recordChangeDescriptions,
          i = B.supportsReloadAndProfile,
          _ = Object(t.useCallback)(
            function () {
              p.send('reloadAndProfile', d);
            },
            [p, d],
          );
        return i
          ? n.a.createElement(
              r.default,
              {
                disabled: !x.supportsProfiling,
                onClick: _,
                title: 'Reload and start profiling',
              },
              n.a.createElement(C.default, { type: 'reload' }),
            )
          : null;
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/RootSelector.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/RootSelector.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/RootSelector.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return m;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ProfilerContext.js',
        ),
        C = e(
          '../react-devtools-shared/src/devtools/views/Profiler/RootSelector.css',
        ),
        b = e.n(C);
      function m(y) {
        var p = Object(t.useContext)(r.ProfilerContext),
          x = p.profilingData,
          P = p.rootID,
          B = p.setRootID,
          d = [];
        x !== null &&
          x.dataForRoots.forEach(function (_, a) {
            d.push(
              n.a.createElement('option', { key: a, value: a }, _.displayName),
            );
          });
        var i = Object(t.useCallback)(
          function (_) {
            var a = _.currentTarget;
            B(parseInt(a.value, 10));
          },
          [B],
        );
        return x === null || x.dataForRoots.size <= 1
          ? null
          : n.a.createElement(
              t.Fragment,
              null,
              n.a.createElement('div', { className: b.a.Spacer }),
              n.a.createElement('select', { value: P, onChange: i }, d),
            );
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/SidebarCommitInfo.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/SidebarCommitInfo.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/SidebarCommitInfo.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return p;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ProfilerContext.js',
        ),
        C = e('../react-devtools-shared/src/devtools/views/Profiler/utils.js'),
        b = e('../react-devtools-shared/src/devtools/views/context.js'),
        m = e(
          '../react-devtools-shared/src/devtools/views/Profiler/SidebarCommitInfo.css',
        ),
        y = e.n(m);
      function p(x) {
        var P = Object(t.useContext)(r.ProfilerContext),
          B = P.selectedCommitIndex,
          d = P.rootID,
          i = P.selectInteraction,
          _ = P.selectTab,
          a = Object(t.useContext)(b.StoreContext),
          s = a.profilerStore;
        if (d === null || B === null)
          return n.a.createElement(
            'div',
            { className: y.a.NothingSelected },
            'Nothing selected',
          );
        var u = s.getDataForRoot(d),
          O = u.interactions,
          v = s.getCommitData(d, B),
          A = v.duration,
          l = v.interactionIDs,
          c = v.priorityLevel,
          h = v.timestamp,
          f = function (D) {
            _('interactions'), i(D);
          };
        return n.a.createElement(
          t.Fragment,
          null,
          n.a.createElement(
            'div',
            { className: y.a.Toolbar },
            'Commit information',
          ),
          n.a.createElement(
            'div',
            { className: y.a.Content },
            n.a.createElement(
              'ul',
              { className: y.a.List },
              c !== null &&
                n.a.createElement(
                  'li',
                  { className: y.a.ListItem },
                  n.a.createElement(
                    'label',
                    { className: y.a.Label },
                    'Priority',
                  ),
                  ':',
                  ' ',
                  n.a.createElement('span', { className: y.a.Value }, c),
                ),
              n.a.createElement(
                'li',
                { className: y.a.ListItem },
                n.a.createElement(
                  'label',
                  { className: y.a.Label },
                  'Committed at',
                ),
                ':',
                ' ',
                n.a.createElement(
                  'span',
                  { className: y.a.Value },
                  Object(C.formatTime)(h),
                  's',
                ),
              ),
              n.a.createElement(
                'li',
                { className: y.a.ListItem },
                n.a.createElement(
                  'label',
                  { className: y.a.Label },
                  'Render duration',
                ),
                ':',
                ' ',
                n.a.createElement(
                  'span',
                  { className: y.a.Value },
                  Object(C.formatDuration)(A),
                  'ms',
                ),
              ),
              n.a.createElement(
                'li',
                { className: y.a.Interactions },
                n.a.createElement(
                  'label',
                  { className: y.a.Label },
                  'Interactions',
                ),
                ':',
                n.a.createElement(
                  'div',
                  { className: y.a.InteractionList },
                  l.length === 0
                    ? n.a.createElement(
                        'div',
                        { className: y.a.NoInteractions },
                        'None',
                      )
                    : null,
                  l.map(function (E) {
                    var D = O.get(E);
                    if (D == null)
                      throw Error('Invalid interaction "'.concat(E, '"'));
                    return n.a.createElement(
                      'button',
                      {
                        key: E,
                        className: y.a.Interaction,
                        onClick: function () {
                          return f(E);
                        },
                      },
                      D.name,
                    );
                  }),
                ),
              ),
            ),
          ),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/SidebarInteractions.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/SidebarInteractions.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/SidebarInteractions.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return p;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ProfilerContext.js',
        ),
        C = e('../react-devtools-shared/src/devtools/views/Profiler/utils.js'),
        b = e('../react-devtools-shared/src/devtools/views/context.js'),
        m = e(
          '../react-devtools-shared/src/devtools/views/Profiler/SidebarInteractions.css',
        ),
        y = e.n(m);
      function p(x) {
        var P = Object(t.useContext)(r.ProfilerContext),
          B = P.selectedInteractionID,
          d = P.rootID,
          i = P.selectCommitIndex,
          _ = P.selectTab,
          a = Object(t.useContext)(b.StoreContext),
          s = a.profilerStore,
          u = s.profilingCache;
        if (B === null)
          return n.a.createElement(
            'div',
            { className: y.a.NothingSelected },
            'Nothing selected',
          );
        var O = s.getDataForRoot(d),
          v = O.interactionCommits,
          A = O.interactions,
          l = A.get(B);
        if (l == null)
          throw Error(
            'Could not find interaction by selected interaction id "'.concat(
              B,
              '"',
            ),
          );
        var c = u.getInteractionsChartData({ rootID: d }),
          h = c.maxCommitDuration,
          f = function (T) {
            _('flame-chart'), i(T);
          },
          E = [],
          D = v.get(B);
        return (
          D?.forEach(function (I) {
            var T = s.getCommitData(d, I),
              R = T.duration,
              j = T.timestamp;
            E.push(
              n.a.createElement(
                'li',
                {
                  key: I,
                  className: y.a.ListItem,
                  onClick: function () {
                    return f(I);
                  },
                },
                n.a.createElement('div', {
                  className: y.a.CommitBox,
                  style: {
                    backgroundColor: Object(C.getGradientColor)(
                      Math.min(1, Math.max(0, R / h)) || 0,
                    ),
                  },
                }),
                n.a.createElement(
                  'div',
                  null,
                  'timestamp: ',
                  Object(C.formatTime)(j),
                  's',
                  n.a.createElement('br', null),
                  'duration: ',
                  Object(C.formatDuration)(R),
                  'ms',
                ),
              ),
            );
          }),
          n.a.createElement(
            t.Fragment,
            null,
            n.a.createElement(
              'div',
              { className: y.a.Toolbar },
              n.a.createElement(
                'div',
                { className: y.a.Name, title: l.name },
                l.name,
              ),
            ),
            n.a.createElement(
              'div',
              { className: y.a.Content },
              n.a.createElement('div', { className: y.a.Commits }, 'Commits:'),
              n.a.createElement('ul', { className: y.a.List }, E),
            ),
          )
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/SidebarSelectedFiberInfo.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/SidebarSelectedFiberInfo.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/SidebarSelectedFiberInfo.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return B;
        });
      var t = e('react'),
        n = e.n(t);
      e('../react-devtools-shared/src/devtools/ProfilerStore.js');
      var r = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ProfilerContext.js',
        ),
        C = e('../react-devtools-shared/src/devtools/views/Profiler/utils.js'),
        b = e('../react-devtools-shared/src/devtools/views/context.js'),
        m = e('../react-devtools-shared/src/devtools/views/Button.js'),
        y = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js'),
        p = e(
          '../react-devtools-shared/src/devtools/views/Profiler/SidebarSelectedFiberInfo.css',
        ),
        x = e.n(p);
      function P(i) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (P = function (a) {
                return typeof a;
              })
            : (P = function (a) {
                return a &&
                  typeof Symbol == 'function' &&
                  a.constructor === Symbol &&
                  a !== Symbol.prototype
                  ? 'symbol'
                  : typeof a;
              }),
          P(i)
        );
      }
      function B(i) {
        var _ = Object(t.useContext)(b.StoreContext),
          a = _.profilerStore,
          s = Object(t.useContext)(r.ProfilerContext),
          u = s.rootID,
          O = s.selectCommitIndex,
          v = s.selectedCommitIndex,
          A = s.selectedFiberID,
          l = s.selectedFiberName,
          c = s.selectFiber,
          h = a.profilingCache,
          f = h.getFiberCommits({ fiberID: A, rootID: u }),
          E = [],
          D = 0,
          I = function () {
            var R = f[D],
              j = a.getCommitData(u, R),
              z = j.duration,
              W = j.timestamp;
            E.push(
              n.a.createElement(
                'button',
                {
                  key: R,
                  className: v === R ? x.a.CurrentCommit : x.a.Commit,
                  onClick: function () {
                    return O(R);
                  },
                },
                Object(C.formatTime)(W),
                's for ',
                Object(C.formatDuration)(z),
                'ms',
              ),
            );
          };
        for (D = 0; D < f.length; D++) I();
        return n.a.createElement(
          t.Fragment,
          null,
          n.a.createElement(
            'div',
            { className: x.a.Toolbar },
            n.a.createElement(
              'div',
              { className: x.a.Component },
              l || 'Selected component',
            ),
            n.a.createElement(
              m.default,
              {
                className: x.a.IconButton,
                onClick: function () {
                  return c(null, null);
                },
                title: 'Back to commit view',
              },
              n.a.createElement(y.default, { type: 'close' }),
            ),
          ),
          n.a.createElement(
            'div',
            { className: x.a.Content },
            n.a.createElement(d, {
              commitIndex: v,
              fiberID: A,
              profilerStore: a,
              rootID: u,
            }),
            E.length > 0 &&
              n.a.createElement(
                t.Fragment,
                null,
                n.a.createElement(
                  'label',
                  { className: x.a.Label },
                  'Rendered at',
                ),
                ': ',
                E,
              ),
            E.length === 0 &&
              n.a.createElement(
                'div',
                null,
                'Did not render during this profiling session.',
              ),
          ),
        );
      }
      function d(i) {
        var _ = i.commitIndex,
          a = i.fiberID,
          s = i.profilerStore,
          u = i.rootID;
        if (_ === null) return null;
        var O = s.getCommitData(u, _),
          v = O.changeDescriptions;
        if (v === null) return null;
        var A = v.get(a);
        if (A == null) return null;
        if (A.isFirstMount)
          return n.a.createElement(
            'div',
            { className: x.a.WhatChanged },
            n.a.createElement(
              'label',
              { className: x.a.Label },
              'Why did this render?',
            ),
            n.a.createElement(
              'div',
              { className: x.a.WhatChangedItem },
              'This is the first time the component rendered.',
            ),
          );
        var l = [];
        return (
          A.context === !0
            ? l.push(
                n.a.createElement(
                  'div',
                  { key: 'context', className: x.a.WhatChangedItem },
                  '\u2022 Context changed',
                ),
              )
            : P(A.context) === 'object' &&
              A.context !== null &&
              A.context.length !== 0 &&
              l.push(
                n.a.createElement(
                  'div',
                  { key: 'context', className: x.a.WhatChangedItem },
                  '\u2022 Context changed:',
                  A.context.map(function (c) {
                    return n.a.createElement(
                      'span',
                      { key: c, className: x.a.WhatChangedKey },
                      c,
                    );
                  }),
                ),
              ),
          A.didHooksChange &&
            l.push(
              n.a.createElement(
                'div',
                { key: 'hooks', className: x.a.WhatChangedItem },
                '\u2022 Hooks changed',
              ),
            ),
          A.props !== null &&
            A.props.length !== 0 &&
            l.push(
              n.a.createElement(
                'div',
                { key: 'props', className: x.a.WhatChangedItem },
                '\u2022 Props changed:',
                A.props.map(function (c) {
                  return n.a.createElement(
                    'span',
                    { key: c, className: x.a.WhatChangedKey },
                    c,
                  );
                }),
              ),
            ),
          A.state !== null &&
            A.state.length !== 0 &&
            l.push(
              n.a.createElement(
                'div',
                { key: 'state', className: x.a.WhatChangedItem },
                '\u2022 State changed:',
                A.state.map(function (c) {
                  return n.a.createElement(
                    'span',
                    { key: c, className: x.a.WhatChangedKey },
                    c,
                  );
                }),
              ),
            ),
          l.length === 0 &&
            l.push(
              n.a.createElement(
                'div',
                { key: 'nothing', className: x.a.WhatChangedItem },
                'The parent component rendered.',
              ),
            ),
          n.a.createElement(
            'div',
            { className: x.a.WhatChanged },
            n.a.createElement(
              'label',
              { className: x.a.Label },
              'Why did this render?',
            ),
            l,
          )
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/SnapshotCommitList.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/SnapshotCommitList.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/SnapshotCommitList.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return i;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../../node_modules/react-virtualized-auto-sizer/dist/index.esm.js',
        ),
        C = e(
          '../react-devtools-shared/src/node_modules/react-window/dist/index.esm.js',
        ),
        b = e(
          '../react-devtools-shared/src/devtools/views/Profiler/SnapshotCommitListItem.js',
        ),
        m = e(
          '../react-devtools-shared/src/devtools/views/Profiler/constants.js',
        ),
        y = e(
          '../react-devtools-shared/src/devtools/views/Profiler/SnapshotCommitList.css',
        ),
        p = e.n(y);
      function x(a, s) {
        return d(a) || B(a, s) || P();
      }
      function P() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function B(a, s) {
        var u = [],
          O = !0,
          v = !1,
          A = void 0;
        try {
          for (
            var l = a[Symbol.iterator](), c;
            !(O = (c = l.next()).done) &&
            (u.push(c.value), !(s && u.length === s));
            O = !0
          );
        } catch (h) {
          (v = !0), (A = h);
        } finally {
          try {
            !O && l.return != null && l.return();
          } finally {
            if (v) throw A;
          }
        }
        return u;
      }
      function d(a) {
        if (Array.isArray(a)) return a;
      }
      function i(a) {
        var s = a.commitDurations,
          u = a.commitTimes,
          O = a.filteredCommitIndices,
          v = a.selectedCommitIndex,
          A = a.selectedFilteredCommitIndex,
          l = a.selectCommitIndex;
        return n.a.createElement(r.default, null, function (c) {
          var h = c.height,
            f = c.width;
          return n.a.createElement(_, {
            commitDurations: s,
            commitTimes: u,
            height: h,
            filteredCommitIndices: O,
            selectedCommitIndex: v,
            selectedFilteredCommitIndex: A,
            selectCommitIndex: l,
            width: f,
          });
        });
      }
      function _(a) {
        var s = a.commitDurations,
          u = a.selectedCommitIndex,
          O = a.commitTimes,
          v = a.height,
          A = a.filteredCommitIndices,
          l = a.selectedFilteredCommitIndex,
          c = a.selectCommitIndex,
          h = a.width,
          f = Object(t.useRef)(null),
          E = Object(t.useRef)(null),
          D = Object(t.useRef)(null);
        Object(t.useEffect)(
          function () {
            l !== D.current &&
              ((D.current = l),
              l !== null && f.current !== null && f.current.scrollToItem(l));
          },
          [f, l],
        );
        var I = Object(t.useState)(!1),
          T = x(I, 2),
          R = T[0],
          j = T[1],
          z = Object(t.useCallback)(function () {
            j(!0);
          }, []),
          W = Object(t.useCallback)(function () {
            j(!1);
          }, []);
        Object(t.useEffect)(
          function () {
            if (E.current === null) return function () {};
            var k = E.current.ownerDocument;
            return (
              k.addEventListener('mouseup', W),
              function () {
                return k.removeEventListener('mouseup', W);
              }
            );
          },
          [E, W],
        );
        var K = Object(t.useMemo)(
            function () {
              return Math.max(m.minBarWidth, h / A.length);
            },
            [A, h],
          ),
          S = Object(t.useMemo)(
            function () {
              return s.reduce(function (k, H) {
                return Math.max(k, H);
              }, 0);
            },
            [s],
          ),
          F = Object(t.useMemo)(
            function () {
              return {
                commitDurations: s,
                commitTimes: O,
                filteredCommitIndices: A,
                isMouseDown: R,
                maxDuration: S,
                selectedCommitIndex: u,
                selectedFilteredCommitIndex: l,
                selectCommitIndex: c,
              };
            },
            [s, O, A, R, S, u, l, c],
          );
        return n.a.createElement(
          'div',
          {
            onMouseDown: z,
            onMouseUp: W,
            ref: E,
            style: { height: v, width: h },
          },
          n.a.createElement(
            C.FixedSizeList,
            {
              className: p.a.List,
              layout: 'horizontal',
              height: v,
              itemCount: A.length,
              itemData: F,
              itemSize: K,
              ref: f,
              width: h,
            },
            b.default,
          ),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/SnapshotCommitListItem.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/SnapshotCommitListItem.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/SnapshotCommitListItem.js': function (
      g,
      o,
      e,
    ) {
      e.r(o);
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/node_modules/react-window/dist/index.esm.js',
        ),
        C = e('../react-devtools-shared/src/devtools/views/Profiler/utils.js'),
        b = e(
          '../react-devtools-shared/src/devtools/views/Profiler/SnapshotCommitListItem.css',
        ),
        m = e.n(b);
      function y(B, d) {
        var i = Object.keys(B);
        if (Object.getOwnPropertySymbols) {
          var _ = Object.getOwnPropertySymbols(B);
          d &&
            (_ = _.filter(function (a) {
              return Object.getOwnPropertyDescriptor(B, a).enumerable;
            })),
            i.push.apply(i, _);
        }
        return i;
      }
      function p(B) {
        for (var d = 1; d < arguments.length; d++) {
          var i = arguments[d] != null ? arguments[d] : {};
          d % 2
            ? y(i, !0).forEach(function (_) {
                x(B, _, i[_]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(B, Object.getOwnPropertyDescriptors(i))
            : y(i).forEach(function (_) {
                Object.defineProperty(
                  B,
                  _,
                  Object.getOwnPropertyDescriptor(i, _),
                );
              });
        }
        return B;
      }
      function x(B, d, i) {
        return (
          d in B
            ? Object.defineProperty(B, d, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (B[d] = i),
          B
        );
      }
      function P(B) {
        var d = B.data,
          i = B.index,
          _ = B.style,
          a = d.commitDurations,
          s = d.commitTimes,
          u = d.filteredCommitIndices,
          O = d.isMouseDown,
          v = d.maxDuration,
          A = d.selectedCommitIndex,
          l = d.selectCommitIndex;
        i = u[i];
        var c = a[i],
          h = s[i],
          f = Object(t.useCallback)(
            function () {
              return l(i);
            },
            [i, l],
          ),
          E = Math.min(1, Math.max(0, c / v)) || 0,
          D = A === i,
          I = parseFloat(_.width) - 1;
        return n.a.createElement(
          'div',
          {
            className: m.a.Outer,
            onClick: f,
            onMouseEnter: O ? f : null,
            style: p({}, _, {
              width: I,
              borderBottom: D
                ? '3px solid var(--color-tab-selected-border)'
                : void 0,
            }),
            title: 'Duration '
              .concat(Object(C.formatDuration)(c), 'ms at ')
              .concat(Object(C.formatTime)(h), 's'),
          },
          n.a.createElement('div', {
            className: m.a.Inner,
            style: {
              height: ''.concat(Math.round(E * 100), '%'),
              backgroundColor: E > 0 ? Object(C.getGradientColor)(E) : void 0,
            },
          }),
        );
      }
      o.default = Object(t.memo)(P, r.areEqual);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/SnapshotSelector.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Profiler/SnapshotSelector.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Profiler/SnapshotSelector.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return B;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/views/Button.js'),
        C = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js'),
        b = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ProfilerContext.js',
        ),
        m = e(
          '../react-devtools-shared/src/devtools/views/Profiler/SnapshotCommitList.js',
        ),
        y = e(
          '../react-devtools-shared/src/devtools/views/Profiler/constants.js',
        ),
        p = e('../react-devtools-shared/src/devtools/views/context.js'),
        x = e(
          '../react-devtools-shared/src/devtools/views/Profiler/SnapshotSelector.css',
        ),
        P = e.n(x);
      function B(d) {
        var i = Object(t.useContext)(b.ProfilerContext),
          _ = i.isCommitFilterEnabled,
          a = i.minCommitDuration,
          s = i.rootID,
          u = i.selectedCommitIndex,
          O = i.selectCommitIndex,
          v = Object(t.useContext)(p.StoreContext),
          A = v.profilerStore,
          l = A.getDataForRoot(s),
          c = l.commitData,
          h = [],
          f = [];
        c.forEach(function (W) {
          h.push(W.duration), f.push(W.timestamp);
        });
        var E = Object(t.useMemo)(
            function () {
              return c.reduce(function (W, K, S) {
                return (!_ || K.duration >= a) && W.push(S), W;
              }, []);
            },
            [c, _, a],
          ),
          D = E.length,
          I = Object(t.useMemo)(
            function () {
              if (u !== null) {
                for (var W = 0; W < E.length; W++) if (E[W] === u) return W;
              }
              return null;
            },
            [E, u],
          );
        I === null
          ? D > 0
            ? O(0)
            : O(null)
          : I >= D && O(D === 0 ? null : D - 1);
        var T = null;
        D > 0 &&
          (T = ''.concat(I + 1).padStart(''.concat(D).length, '0') + ' / ' + D);
        var R = Object(t.useCallback)(
            function () {
              var W = I + 1;
              W === E.length && (W = 0), O(E[W]);
            },
            [I, E, O],
          ),
          j = Object(t.useCallback)(
            function () {
              var W = I - 1;
              W < 0 && (W = E.length - 1), O(E[W]);
            },
            [I, E, O],
          ),
          z = Object(t.useCallback)(
            function (W) {
              switch (W.key) {
                case 'ArrowLeft':
                  j(), W.stopPropagation();
                  break;
                case 'ArrowRight':
                  R(), W.stopPropagation();
                  break;
              }
            },
            [R, j],
          );
        return c.length === 0
          ? null
          : n.a.createElement(
              t.Fragment,
              null,
              n.a.createElement('span', { className: P.a.IndexLabel }, T),
              n.a.createElement(
                r.default,
                {
                  className: P.a.Button,
                  disabled: D === 0,
                  onClick: j,
                  title: 'Select previous commit',
                },
                n.a.createElement(C.default, { type: 'previous' }),
              ),
              n.a.createElement(
                'div',
                {
                  className: P.a.Commits,
                  onKeyDown: z,
                  style: {
                    flex: D > 0 ? '1 1 auto' : '0 0 auto',
                    maxWidth: D > 0 ? D * y.maxBarWidth : void 0,
                  },
                  tabIndex: 0,
                },
                D > 0 &&
                  n.a.createElement(m.default, {
                    commitDurations: h,
                    commitTimes: f,
                    filteredCommitIndices: E,
                    selectedCommitIndex: u,
                    selectedFilteredCommitIndex: I,
                    selectCommitIndex: O,
                  }),
                D === 0 &&
                  n.a.createElement(
                    'div',
                    { className: P.a.NoCommits },
                    'No commits',
                  ),
              ),
              n.a.createElement(
                r.default,
                {
                  className: P.a.Button,
                  disabled: D === 0,
                  onClick: R,
                  title: 'Select next commit',
                },
                n.a.createElement(C.default, { type: 'next' }),
              ),
            );
      }
    },
    '../react-devtools-shared/src/devtools/views/Profiler/constants.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'barWidthThreshold', function () {
          return t;
        }),
        e.d(o, 'interactionCommitSize', function () {
          return n;
        }),
        e.d(o, 'interactionLabelWidth', function () {
          return r;
        }),
        e.d(o, 'maxBarWidth', function () {
          return C;
        }),
        e.d(o, 'minBarWidth', function () {
          return b;
        });
      var t = 2,
        n = 10,
        r = 200,
        C = 30,
        b = 5;
    },
    '../react-devtools-shared/src/devtools/views/Profiler/utils.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'prepareProfilingDataFrontendFromBackendAndStore', function () {
          return r;
        }),
        e.d(o, 'prepareProfilingDataFrontendFromExport', function () {
          return C;
        }),
        e.d(o, 'prepareProfilingDataExport', function () {
          return b;
        }),
        e.d(o, 'getGradientColor', function () {
          return m;
        }),
        e.d(o, 'formatDuration', function () {
          return y;
        }),
        e.d(o, 'formatPercentage', function () {
          return p;
        }),
        e.d(o, 'formatTime', function () {
          return x;
        }),
        e.d(o, 'scale', function () {
          return P;
        });
      var t = e('../react-devtools-shared/src/constants.js'),
        n = [
          'var(--color-commit-gradient-0)',
          'var(--color-commit-gradient-1)',
          'var(--color-commit-gradient-2)',
          'var(--color-commit-gradient-3)',
          'var(--color-commit-gradient-4)',
          'var(--color-commit-gradient-5)',
          'var(--color-commit-gradient-6)',
          'var(--color-commit-gradient-7)',
          'var(--color-commit-gradient-8)',
          'var(--color-commit-gradient-9)',
        ];
      function r(B, d, i) {
        var _ = new Map();
        return (
          B.forEach(function (a) {
            a.dataForRoots.forEach(function (s) {
              var u = s.commitData,
                O = s.displayName,
                v = s.initialTreeBaseDurations,
                A = s.interactionCommits,
                l = s.interactions,
                c = s.rootID,
                h = d.get(c);
              if (h == null)
                throw Error(
                  'Could not find profiling operations for root '.concat(c),
                );
              var f = i.get(c);
              if (f == null)
                throw Error(
                  'Could not find profiling snapshots for root '.concat(c),
                );
              _.set(c, {
                commitData: u.map(function (E, D) {
                  return {
                    changeDescriptions:
                      E.changeDescriptions != null
                        ? new Map(E.changeDescriptions)
                        : null,
                    duration: E.duration,
                    fiberActualDurations: new Map(E.fiberActualDurations),
                    fiberSelfDurations: new Map(E.fiberSelfDurations),
                    interactionIDs: E.interactionIDs,
                    priorityLevel: E.priorityLevel,
                    timestamp: E.timestamp,
                  };
                }),
                displayName: O,
                initialTreeBaseDurations: new Map(v),
                interactionCommits: new Map(A),
                interactions: new Map(l),
                operations: h,
                rootID: c,
                snapshots: f,
              });
            });
          }),
          { dataForRoots: _ }
        );
      }
      function C(B) {
        var d = B.version;
        if (d !== t.PROFILER_EXPORT_VERSION)
          throw Error('Unsupported profiler export version "'.concat(d, '"'));
        var i = new Map();
        return (
          B.dataForRoots.forEach(function (_) {
            var a = _.commitData,
              s = _.displayName,
              u = _.initialTreeBaseDurations,
              O = _.interactionCommits,
              v = _.interactions,
              A = _.operations,
              l = _.rootID,
              c = _.snapshots;
            i.set(l, {
              commitData: a.map(function (h) {
                var f = h.changeDescriptions,
                  E = h.duration,
                  D = h.fiberActualDurations,
                  I = h.fiberSelfDurations,
                  T = h.interactionIDs,
                  R = h.priorityLevel,
                  j = h.timestamp;
                return {
                  changeDescriptions: f != null ? new Map(f) : null,
                  duration: E,
                  fiberActualDurations: new Map(D),
                  fiberSelfDurations: new Map(I),
                  interactionIDs: T,
                  priorityLevel: R,
                  timestamp: j,
                };
              }),
              displayName: s,
              initialTreeBaseDurations: new Map(u),
              interactionCommits: new Map(O),
              interactions: new Map(v),
              operations: A,
              rootID: l,
              snapshots: new Map(c),
            });
          }),
          { dataForRoots: i }
        );
      }
      function b(B) {
        var d = [];
        return (
          B.dataForRoots.forEach(function (i) {
            var _ = i.commitData,
              a = i.displayName,
              s = i.initialTreeBaseDurations,
              u = i.interactionCommits,
              O = i.interactions,
              v = i.operations,
              A = i.rootID,
              l = i.snapshots;
            d.push({
              commitData: _.map(function (c) {
                var h = c.changeDescriptions,
                  f = c.duration,
                  E = c.fiberActualDurations,
                  D = c.fiberSelfDurations,
                  I = c.interactionIDs,
                  T = c.priorityLevel,
                  R = c.timestamp;
                return {
                  changeDescriptions:
                    h != null ? Array.from(h.entries()) : null,
                  duration: f,
                  fiberActualDurations: Array.from(E.entries()),
                  fiberSelfDurations: Array.from(D.entries()),
                  interactionIDs: I,
                  priorityLevel: T,
                  timestamp: R,
                };
              }),
              displayName: a,
              initialTreeBaseDurations: Array.from(s.entries()),
              interactionCommits: Array.from(u.entries()),
              interactions: Array.from(O.entries()),
              operations: v,
              rootID: A,
              snapshots: Array.from(l.entries()),
            });
          }),
          { version: t.PROFILER_EXPORT_VERSION, dataForRoots: d }
        );
      }
      var m = function (d) {
          var i = n.length - 1,
            _;
          return (
            Number.isNaN(d)
              ? (_ = 0)
              : Number.isFinite(d)
              ? (_ = Math.max(0, Math.min(i, d)) * i)
              : (_ = i),
            n[Math.round(_)]
          );
        },
        y = function (d) {
          return Math.round(d * 10) / 10 || '<0.1';
        },
        p = function (d) {
          return Math.round(d * 100);
        },
        x = function (d) {
          return Math.round(Math.round(d) / 100) / 10;
        },
        P = function (d, i, _, a) {
          return function (s, u) {
            return i - d === 0 ? u : ((s - d) / (i - d)) * (a - _);
          };
        };
    },
    '../react-devtools-shared/src/devtools/views/ReactLogo.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/ReactLogo.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/ReactLogo.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return b;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/views/ReactLogo.css'),
        C = e.n(r);
      function b(m) {
        var y = m.className;
        return n.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            className: ''.concat(C.a.ReactLogo, ' ').concat(y || ''),
            viewBox: '-11.5 -10.23174 23 20.46348',
          },
          n.a.createElement('circle', {
            cx: '0',
            cy: '0',
            r: '2.05',
            fill: 'currentColor',
          }),
          n.a.createElement(
            'g',
            { stroke: 'currentColor', strokeWidth: '1', fill: 'none' },
            n.a.createElement('ellipse', { rx: '11', ry: '4.2' }),
            n.a.createElement('ellipse', {
              rx: '11',
              ry: '4.2',
              transform: 'rotate(60)',
            }),
            n.a.createElement('ellipse', {
              rx: '11',
              ry: '4.2',
              transform: 'rotate(120)',
            }),
          ),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Settings/ComponentsSettings.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return c;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/views/hooks.js'),
        C = e('../react-devtools-shared/src/devtools/views/context.js'),
        b = e('../react-devtools-shared/src/devtools/views/Button.js'),
        m = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js'),
        y = e('../react-devtools-shared/src/devtools/views/Toggle.js'),
        p = e('../react-devtools-shared/src/types.js'),
        x = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsShared.css',
        ),
        P = e.n(x);
      function B(f, E) {
        var D = Object.keys(f);
        if (Object.getOwnPropertySymbols) {
          var I = Object.getOwnPropertySymbols(f);
          E &&
            (I = I.filter(function (T) {
              return Object.getOwnPropertyDescriptor(f, T).enumerable;
            })),
            D.push.apply(D, I);
        }
        return D;
      }
      function d(f) {
        for (var E = 1; E < arguments.length; E++) {
          var D = arguments[E] != null ? arguments[E] : {};
          E % 2
            ? B(D, !0).forEach(function (I) {
                i(f, I, D[I]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(D))
            : B(D).forEach(function (I) {
                Object.defineProperty(
                  f,
                  I,
                  Object.getOwnPropertyDescriptor(D, I),
                );
              });
        }
        return f;
      }
      function i(f, E, D) {
        return (
          E in f
            ? Object.defineProperty(f, E, {
                value: D,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (f[E] = D),
          f
        );
      }
      function _(f) {
        return u(f) || s(f) || a();
      }
      function a() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      }
      function s(f) {
        if (
          Symbol.iterator in Object(f) ||
          Object.prototype.toString.call(f) === '[object Arguments]'
        )
          return Array.from(f);
      }
      function u(f) {
        if (Array.isArray(f)) {
          for (var E = 0, D = new Array(f.length); E < f.length; E++)
            D[E] = f[E];
          return D;
        }
      }
      function O(f, E) {
        return l(f) || A(f, E) || v();
      }
      function v() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function A(f, E) {
        var D = [],
          I = !0,
          T = !1,
          R = void 0;
        try {
          for (
            var j = f[Symbol.iterator](), z;
            !(I = (z = j.next()).done) &&
            (D.push(z.value), !(E && D.length === E));
            I = !0
          );
        } catch (W) {
          (T = !0), (R = W);
        } finally {
          try {
            !I && j.return != null && j.return();
          } finally {
            if (T) throw R;
          }
        }
        return D;
      }
      function l(f) {
        if (Array.isArray(f)) return f;
      }
      function c(f) {
        var E = Object(t.useContext)(C.StoreContext),
          D = Object(t.useMemo)(
            function () {
              return {
                getCurrentValue: function () {
                  return E.collapseNodesByDefault;
                },
                subscribe: function (U) {
                  return (
                    E.addListener('collapseNodesByDefault', U),
                    function () {
                      return E.removeListener('collapseNodesByDefault', U);
                    }
                  );
                },
              };
            },
            [E],
          ),
          I = Object(r.useSubscription)(D),
          T = Object(t.useCallback)(
            function (M) {
              var U = M.currentTarget;
              E.collapseNodesByDefault = !U.checked;
            },
            [E],
          ),
          R = Object(t.useState)(function () {
            return _(E.componentFilters);
          }),
          j = O(R, 2),
          z = j[0],
          W = j[1],
          K = Object(t.useCallback)(function () {
            W(function (M) {
              return [].concat(_(M), [
                {
                  type: p.ComponentFilterElementType,
                  value: p.ElementTypeHostComponent,
                  isEnabled: !0,
                },
              ]);
            });
          }, []),
          S = Object(t.useCallback)(function (M, U) {
            W(function (Y) {
              var Z = _(Y),
                q = Y.indexOf(M);
              return (
                q >= 0 &&
                  (U === p.ComponentFilterElementType
                    ? (Z[q] = {
                        type: p.ComponentFilterElementType,
                        isEnabled: M.isEnabled,
                        value: p.ElementTypeHostComponent,
                      })
                    : U === p.ComponentFilterDisplayName
                    ? (Z[q] = {
                        type: p.ComponentFilterDisplayName,
                        isEnabled: M.isEnabled,
                        isValid: !0,
                        value: '',
                      })
                    : U === p.ComponentFilterLocation
                    ? (Z[q] = {
                        type: p.ComponentFilterLocation,
                        isEnabled: M.isEnabled,
                        isValid: !0,
                        value: '',
                      })
                    : U === p.ComponentFilterHOC &&
                      (Z[q] = {
                        type: p.ComponentFilterHOC,
                        isEnabled: M.isEnabled,
                        isValid: !0,
                      })),
                Z
              );
            });
          }, []),
          F = Object(t.useCallback)(function (M, U) {
            if (M.type !== p.ComponentFilterElementType)
              throw Error('Invalid value for element type filter');
            W(function (Y) {
              var Z = _(Y);
              if (M.type === p.ComponentFilterElementType) {
                var q = Y.indexOf(M);
                q >= 0 && (Z[q] = d({}, M, { value: U }));
              }
              return Z;
            });
          }, []),
          k = Object(t.useCallback)(function (M, U) {
            if (M.type === p.ComponentFilterElementType)
              throw Error('Invalid value for element type filter');
            W(function (Y) {
              var Z = _(Y);
              if (
                M.type === p.ComponentFilterDisplayName ||
                M.type === p.ComponentFilterLocation
              ) {
                var q = Y.indexOf(M);
                if (q >= 0) {
                  var ee = !0;
                  try {
                    new RegExp(U);
                  } catch {
                    ee = !1;
                  }
                  Z[q] = d({}, M, { isValid: ee, value: U });
                }
              }
              return Z;
            });
          }, []),
          H = Object(t.useCallback)(function (M) {
            W(function (U) {
              var Y = _(U);
              return Y.splice(M, 1), Y;
            });
          }, []),
          w = Object(t.useCallback)(function (M, U) {
            W(function (Y) {
              var Z = _(Y),
                q = Y.indexOf(M);
              return (
                q >= 0 &&
                  (M.type === p.ComponentFilterElementType
                    ? (Z[q] = d({}, Z[q], { isEnabled: U }))
                    : M.type === p.ComponentFilterDisplayName ||
                      M.type === p.ComponentFilterLocation
                    ? (Z[q] = d({}, Z[q], { isEnabled: U }))
                    : M.type === p.ComponentFilterHOC &&
                      (Z[q] = d({}, Z[q], { isEnabled: U }))),
                Z
              );
            });
          }, []),
          L = Object(t.useRef)(z);
        return (
          Object(t.useEffect)(
            function () {
              return (L.current = z), function () {};
            },
            [z],
          ),
          Object(t.useEffect)(
            function () {
              return function () {
                E.componentFilters = _(L.current);
              };
            },
            [E],
          ),
          n.a.createElement(
            'div',
            { className: P.a.Settings },
            n.a.createElement(
              'label',
              { className: P.a.Setting },
              n.a.createElement('input', {
                type: 'checkbox',
                checked: !I,
                onChange: T,
              }),
              ' ',
              'Expand component tree by default',
            ),
            n.a.createElement(
              'div',
              { className: P.a.Header },
              'Hide components where...',
            ),
            n.a.createElement(
              'table',
              { className: P.a.Table },
              n.a.createElement(
                'tbody',
                null,
                z.length === 0 &&
                  n.a.createElement(
                    'tr',
                    { className: P.a.TableRow },
                    n.a.createElement(
                      'td',
                      { className: P.a.NoFiltersCell },
                      'No filters have been added.',
                    ),
                  ),
                z.map(function (M, U) {
                  return n.a.createElement(
                    'tr',
                    { className: P.a.TableRow, key: U },
                    n.a.createElement(
                      'td',
                      { className: P.a.TableCell },
                      n.a.createElement(
                        y.default,
                        {
                          className: M.isValid !== !1 ? '' : P.a.InvalidRegExp,
                          isChecked: M.isEnabled,
                          onChange: function (Z) {
                            return w(M, Z);
                          },
                          title:
                            M.isValid === !1
                              ? 'Filter invalid'
                              : M.isEnabled
                              ? 'Filter enabled'
                              : 'Filter disabled',
                        },
                        n.a.createElement(h, {
                          isEnabled: M.isEnabled,
                          isValid: M.isValid == null || M.isValid === !0,
                        }),
                      ),
                    ),
                    n.a.createElement(
                      'td',
                      { className: P.a.TableCell },
                      n.a.createElement(
                        'select',
                        {
                          className: P.a.Select,
                          value: M.type,
                          onChange: function (Z) {
                            var q = Z.currentTarget;
                            return S(M, parseInt(q.value, 10));
                          },
                        },
                        n.a.createElement(
                          'option',
                          { value: p.ComponentFilterLocation },
                          'location',
                        ),
                        n.a.createElement(
                          'option',
                          { value: p.ComponentFilterDisplayName },
                          'name',
                        ),
                        n.a.createElement(
                          'option',
                          { value: p.ComponentFilterElementType },
                          'type',
                        ),
                        n.a.createElement(
                          'option',
                          { value: p.ComponentFilterHOC },
                          'hoc',
                        ),
                      ),
                    ),
                    n.a.createElement(
                      'td',
                      { className: P.a.TableCell },
                      M.type === p.ComponentFilterElementType && 'equals',
                      (M.type === p.ComponentFilterLocation ||
                        M.type === p.ComponentFilterDisplayName) &&
                        'matches',
                    ),
                    n.a.createElement(
                      'td',
                      { className: P.a.TableCell },
                      M.type === p.ComponentFilterElementType &&
                        n.a.createElement(
                          'select',
                          {
                            className: P.a.Select,
                            value: M.value,
                            onChange: function (Z) {
                              var q = Z.currentTarget;
                              return F(M, parseInt(q.value, 10));
                            },
                          },
                          n.a.createElement(
                            'option',
                            { value: p.ElementTypeClass },
                            'class',
                          ),
                          n.a.createElement(
                            'option',
                            { value: p.ElementTypeContext },
                            'context',
                          ),
                          n.a.createElement(
                            'option',
                            { value: p.ElementTypeFunction },
                            'function',
                          ),
                          n.a.createElement(
                            'option',
                            { value: p.ElementTypeForwardRef },
                            'forward ref',
                          ),
                          n.a.createElement(
                            'option',
                            { value: p.ElementTypeHostComponent },
                            'host (e.g. <div>)',
                          ),
                          n.a.createElement(
                            'option',
                            { value: p.ElementTypeMemo },
                            'memo',
                          ),
                          n.a.createElement(
                            'option',
                            { value: p.ElementTypeOtherOrUnknown },
                            'other',
                          ),
                          n.a.createElement(
                            'option',
                            { value: p.ElementTypeProfiler },
                            'profiler',
                          ),
                          n.a.createElement(
                            'option',
                            { value: p.ElementTypeSuspense },
                            'suspense',
                          ),
                        ),
                      (M.type === p.ComponentFilterLocation ||
                        M.type === p.ComponentFilterDisplayName) &&
                        n.a.createElement('input', {
                          className: P.a.Input,
                          type: 'text',
                          placeholder: 'Regular expression',
                          onChange: function (Z) {
                            var q = Z.currentTarget;
                            return k(M, q.value);
                          },
                          value: M.value,
                        }),
                    ),
                    n.a.createElement(
                      'td',
                      { className: P.a.TableCell },
                      n.a.createElement(
                        b.default,
                        {
                          onClick: function () {
                            return H(U);
                          },
                          title: 'Delete filter',
                        },
                        n.a.createElement(m.default, { type: 'delete' }),
                      ),
                    ),
                  );
                }),
              ),
            ),
            n.a.createElement(
              b.default,
              { onClick: K },
              n.a.createElement(m.default, {
                className: P.a.ButtonIcon,
                type: 'add',
              }),
              'Add filter',
            ),
          )
        );
      }
      function h(f) {
        var E = f.isEnabled,
          D = f.isValid,
          I;
        return (
          D
            ? (I = E ? P.a.ToggleOn : P.a.ToggleOff)
            : (I = E ? P.a.ToggleOnInvalid : P.a.ToggleOffInvalid),
          n.a.createElement(
            'div',
            { className: I },
            n.a.createElement('div', {
              className: E ? P.a.ToggleInsideOn : P.a.ToggleInsideOff,
            }),
          )
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Settings/GeneralSettings.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return p;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsContext.js',
        ),
        C = e('../react-devtools-shared/src/devtools/views/context.js'),
        b = e('../react-devtools-shared/src/constants.js'),
        m = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsShared.css',
        ),
        y = e.n(m);
      function p(x) {
        var P = Object(t.useContext)(r.SettingsContext),
          B = P.appendComponentStack,
          d = P.displayDensity,
          i = P.setAppendComponentStack,
          _ = P.setDisplayDensity,
          a = P.setTheme,
          s = P.setTraceUpdatesEnabled,
          u = P.theme,
          O = P.traceUpdatesEnabled,
          v = Object(t.useContext)(C.StoreContext),
          A = v.supportsTraceUpdates;
        return n.a.createElement(
          'div',
          { className: y.a.Settings },
          n.a.createElement(
            'div',
            { className: y.a.Setting },
            n.a.createElement('div', { className: y.a.RadioLabel }, 'Theme'),
            n.a.createElement(
              'select',
              {
                className: y.a.Select,
                value: u,
                onChange: function (c) {
                  var h = c.currentTarget;
                  return a(h.value);
                },
              },
              n.a.createElement('option', { value: 'auto' }, 'Auto'),
              n.a.createElement('option', { value: 'light' }, 'Light'),
              n.a.createElement('option', { value: 'dark' }, 'Dark'),
            ),
          ),
          n.a.createElement(
            'div',
            { className: y.a.Setting },
            n.a.createElement(
              'div',
              { className: y.a.RadioLabel },
              'Display density',
            ),
            n.a.createElement(
              'select',
              {
                className: y.a.Select,
                value: d,
                onChange: function (c) {
                  var h = c.currentTarget;
                  return _(h.value);
                },
              },
              n.a.createElement('option', { value: 'compact' }, 'Compact'),
              n.a.createElement(
                'option',
                { value: 'comfortable' },
                'Comfortable',
              ),
            ),
          ),
          A &&
            n.a.createElement(
              'div',
              { className: y.a.Setting },
              n.a.createElement(
                'label',
                null,
                n.a.createElement('input', {
                  type: 'checkbox',
                  checked: O,
                  onChange: function (c) {
                    var h = c.currentTarget;
                    return s(h.checked);
                  },
                }),
                ' ',
                'Highlight updates when components render.',
              ),
            ),
          n.a.createElement(
            'div',
            { className: y.a.Setting },
            n.a.createElement(
              'label',
              null,
              n.a.createElement('input', {
                type: 'checkbox',
                checked: B,
                onChange: function (c) {
                  var h = c.currentTarget;
                  return i(h.checked);
                },
              }),
              ' ',
              'Append component stacks to console warnings and errors.',
            ),
          ),
          n.a.createElement(
            'div',
            { className: y.a.ReleaseNotes },
            n.a.createElement(
              'a',
              {
                className: y.a.ReleaseNotesLink,
                target: '_blank',
                rel: 'noopener noreferrer',
                href: b.CHANGE_LOG_URL,
              },
              'View release notes',
            ),
            ' ',
            'for DevTools version ',
            '4.4.0-f749045a5',
          ),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Settings/ProfilerSettings.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return p;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/views/hooks.js'),
        C = e('../react-devtools-shared/src/devtools/views/context.js'),
        b = e(
          '../react-devtools-shared/src/devtools/views/Profiler/ProfilerContext.js',
        ),
        m = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsShared.css',
        ),
        y = e.n(m);
      function p(x) {
        var P = Object(t.useContext)(b.ProfilerContext),
          B = P.isCommitFilterEnabled,
          d = P.minCommitDuration,
          i = P.setIsCommitFilterEnabled,
          _ = P.setMinCommitDuration,
          a = Object(t.useContext)(C.StoreContext),
          s = Object(t.useMemo)(
            function () {
              return {
                getCurrentValue: function () {
                  return a.recordChangeDescriptions;
                },
                subscribe: function (h) {
                  return (
                    a.addListener('recordChangeDescriptions', h),
                    function () {
                      return a.removeListener('recordChangeDescriptions', h);
                    }
                  );
                },
              };
            },
            [a],
          ),
          u = Object(r.useSubscription)(s),
          O = Object(t.useCallback)(
            function (c) {
              var h = c.currentTarget;
              a.recordChangeDescriptions = h.checked;
            },
            [a],
          ),
          v = Object(t.useCallback)(
            function (c) {
              var h = parseFloat(c.currentTarget.value);
              _(Number.isNaN(h) || h <= 0 ? 0 : h);
            },
            [_],
          ),
          A = Object(t.useCallback)(
            function (c) {
              var h = c.currentTarget.checked;
              i(h), h && l.current !== null && l.current.focus();
            },
            [i],
          ),
          l = Object(t.useRef)(null);
        return n.a.createElement(
          'div',
          { className: y.a.Settings },
          n.a.createElement(
            'div',
            { className: y.a.Setting },
            n.a.createElement(
              'label',
              null,
              n.a.createElement('input', {
                type: 'checkbox',
                checked: u,
                onChange: O,
              }),
              ' ',
              'Record why each component rendered while profiling.',
            ),
          ),
          n.a.createElement(
            'div',
            { className: y.a.Setting },
            n.a.createElement(
              'label',
              null,
              n.a.createElement('input', {
                checked: B,
                onChange: A,
                type: 'checkbox',
              }),
              ' ',
              'Hide commits below',
            ),
            ' ',
            n.a.createElement('input', {
              className: y.a.Input,
              onChange: v,
              ref: l,
              type: 'number',
              value: d,
            }),
            ' ',
            '(ms)',
          ),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Settings/SettingsContext.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'SettingsContext', function () {
          return P;
        }),
        e.d(o, 'SettingsContextController', function () {
          return B;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/constants.js'),
        C = e('../react-devtools-shared/src/devtools/views/hooks.js'),
        b = e('../react-devtools-shared/src/devtools/views/context.js');
      function m(s, u) {
        return x(s) || p(s, u) || y();
      }
      function y() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function p(s, u) {
        var O = [],
          v = !0,
          A = !1,
          l = void 0;
        try {
          for (
            var c = s[Symbol.iterator](), h;
            !(v = (h = c.next()).done) &&
            (O.push(h.value), !(u && O.length === u));
            v = !0
          );
        } catch (f) {
          (A = !0), (l = f);
        } finally {
          try {
            !v && c.return != null && c.return();
          } finally {
            if (A) throw l;
          }
        }
        return O;
      }
      function x(s) {
        if (Array.isArray(s)) return s;
      }
      var P = Object(t.createContext)(null);
      P.displayName = 'SettingsContext';
      function B(s) {
        var u = s.browserTheme,
          O = s.children,
          v = s.componentsPortalContainer,
          A = s.profilerPortalContainer,
          l = Object(t.useContext)(b.BridgeContext),
          c = Object(C.useLocalStorage)(
            'React::DevTools::displayDensity',
            'compact',
          ),
          h = m(c, 2),
          f = h[0],
          E = h[1],
          D = Object(C.useLocalStorage)('React::DevTools::theme', 'auto'),
          I = m(D, 2),
          T = I[0],
          R = I[1],
          j = Object(C.useLocalStorage)(
            r.LOCAL_STORAGE_SHOULD_PATCH_CONSOLE_KEY,
            !0,
          ),
          z = m(j, 2),
          W = z[0],
          K = z[1],
          S = Object(C.useLocalStorage)(
            r.LOCAL_STORAGE_TRACE_UPDATES_ENABLED_KEY,
            !1,
          ),
          F = m(S, 2),
          k = F[0],
          H = F[1],
          w = Object(t.useMemo)(
            function () {
              var M = [document.documentElement];
              return (
                v != null && M.push(v.ownerDocument.documentElement),
                A != null && M.push(A.ownerDocument.documentElement),
                M
              );
            },
            [v, A],
          );
        Object(t.useLayoutEffect)(
          function () {
            switch (f) {
              case 'comfortable':
                _('comfortable', w);
                break;
              case 'compact':
                _('compact', w);
                break;
              default:
                throw Error(
                  'Unsupported displayDensity value "'.concat(f, '"'),
                );
            }
          },
          [f, w],
        ),
          Object(t.useLayoutEffect)(
            function () {
              switch (T) {
                case 'light':
                  a('light', w);
                  break;
                case 'dark':
                  a('dark', w);
                  break;
                case 'auto':
                  a(u, w);
                  break;
                default:
                  throw Error('Unsupported theme value "'.concat(T, '"'));
              }
            },
            [u, T, w],
          ),
          Object(t.useEffect)(
            function () {
              l.send('updateAppendComponentStack', W);
            },
            [l, W],
          ),
          Object(t.useEffect)(
            function () {
              l.send('setTraceUpdatesEnabled', k);
            },
            [l, k],
          );
        var L = Object(t.useMemo)(
          function () {
            return {
              appendComponentStack: W,
              displayDensity: f,
              lineHeight:
                f === 'compact'
                  ? r.COMPACT_LINE_HEIGHT
                  : r.COMFORTABLE_LINE_HEIGHT,
              setAppendComponentStack: K,
              setDisplayDensity: E,
              setTheme: R,
              setTraceUpdatesEnabled: H,
              theme: T,
              traceUpdatesEnabled: k,
            };
          },
          [W, f, K, E, R, H, T, k],
        );
        return n.a.createElement(P.Provider, { value: L }, O);
      }
      function d(s, u, O) {
        O.forEach(function (v) {
          return v.style.setProperty(s, u);
        });
      }
      function i(s, u, O) {
        d('--'.concat(u), 'var(--'.concat(s, '-').concat(u, ')'), O);
      }
      function _(s, u) {
        i(s, 'font-size-monospace-normal', u),
          i(s, 'font-size-monospace-large', u),
          i(s, 'font-size-monospace-small', u),
          i(s, 'font-size-sans-normal', u),
          i(s, 'font-size-sans-large', u),
          i(s, 'font-size-sans-small', u),
          i(s, 'line-height-data', u);
        var O = getComputedStyle(document.body),
          v = O.getPropertyValue('--'.concat(s, '-root-font-size')),
          A = document.querySelector(':root');
        A.style.fontSize = v;
      }
      function a(s, u) {
        i(s, 'color-attribute-name', u),
          i(s, 'color-attribute-name-inverted', u),
          i(s, 'color-attribute-value', u),
          i(s, 'color-attribute-value-inverted', u),
          i(s, 'color-attribute-editable-value', u),
          i(s, 'color-background', u),
          i(s, 'color-background-hover', u),
          i(s, 'color-background-inactive', u),
          i(s, 'color-background-invalid', u),
          i(s, 'color-background-selected', u),
          i(s, 'color-border', u),
          i(s, 'color-button-background', u),
          i(s, 'color-button-background-focus', u),
          i(s, 'color-button', u),
          i(s, 'color-button-active', u),
          i(s, 'color-button-disabled', u),
          i(s, 'color-button-focus', u),
          i(s, 'color-button-hover', u),
          i(s, 'color-commit-did-not-render-fill', u),
          i(s, 'color-commit-did-not-render-fill-text', u),
          i(s, 'color-commit-did-not-render-pattern', u),
          i(s, 'color-commit-did-not-render-pattern-text', u),
          i(s, 'color-commit-gradient-0', u),
          i(s, 'color-commit-gradient-1', u),
          i(s, 'color-commit-gradient-2', u),
          i(s, 'color-commit-gradient-3', u),
          i(s, 'color-commit-gradient-4', u),
          i(s, 'color-commit-gradient-5', u),
          i(s, 'color-commit-gradient-6', u),
          i(s, 'color-commit-gradient-7', u),
          i(s, 'color-commit-gradient-8', u),
          i(s, 'color-commit-gradient-9', u),
          i(s, 'color-commit-gradient-text', u),
          i(s, 'color-component-name', u),
          i(s, 'color-component-name-inverted', u),
          i(s, 'color-component-badge-background', u),
          i(s, 'color-component-badge-background-inverted', u),
          i(s, 'color-component-badge-count', u),
          i(s, 'color-component-badge-count-inverted', u),
          i(s, 'color-context-background', u),
          i(s, 'color-context-background-hover', u),
          i(s, 'color-context-background-selected', u),
          i(s, 'color-context-border', u),
          i(s, 'color-context-text', u),
          i(s, 'color-context-text-selected', u),
          i(s, 'color-dim', u),
          i(s, 'color-dimmer', u),
          i(s, 'color-dimmest', u),
          i(s, 'color-expand-collapse-toggle', u),
          i(s, 'color-modal-background', u),
          i(s, 'color-record-active', u),
          i(s, 'color-record-hover', u),
          i(s, 'color-record-inactive', u),
          i(s, 'color-color-scroll-thumb', u),
          i(s, 'color-color-scroll-track', u),
          i(s, 'color-search-match', u),
          i(s, 'color-shadow', u),
          i(s, 'color-search-match-current', u),
          i(s, 'color-selected-tree-highlight-active', u),
          i(s, 'color-selected-tree-highlight-inactive', u),
          i(s, 'color-tab-selected-border', u),
          i(s, 'color-text', u),
          i(s, 'color-text-invalid', u),
          i(s, 'color-text-selected', u),
          i(s, 'color-toggle-background-invalid', u),
          i(s, 'color-toggle-background-on', u),
          i(s, 'color-toggle-background-off', u),
          i(s, 'color-toggle-text', u),
          i(s, 'color-tooltip-background', u),
          i(s, 'color-tooltip-text', u),
          i(s, 'font-smoothing', u),
          u.forEach(function (O) {
            O.style.scrollbarColor = 'var('.concat(
              '--'.concat(s, '-color-scroll-thumb'),
              ') var(',
              '--'.concat(s, '-color-scroll-track'),
              ')',
            );
          });
      }
    },
    '../react-devtools-shared/src/devtools/views/Settings/SettingsModal.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Settings/SettingsModal.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Settings/SettingsModal.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return O;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsModalContext.js',
        ),
        C = e('../react-devtools-shared/src/devtools/views/Button.js'),
        b = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js'),
        m = e('../react-devtools-shared/src/devtools/views/TabBar.js'),
        y = e('../react-devtools-shared/src/devtools/views/context.js'),
        p = e('../react-devtools-shared/src/devtools/views/hooks.js'),
        x = e(
          '../react-devtools-shared/src/devtools/views/Settings/ComponentsSettings.js',
        ),
        P = e(
          '../react-devtools-shared/src/devtools/views/Settings/GeneralSettings.js',
        ),
        B = e(
          '../react-devtools-shared/src/devtools/views/Settings/ProfilerSettings.js',
        ),
        d = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsModal.css',
        ),
        i = e.n(d);
      function _(l, c) {
        return u(l) || s(l, c) || a();
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function s(l, c) {
        var h = [],
          f = !0,
          E = !1,
          D = void 0;
        try {
          for (
            var I = l[Symbol.iterator](), T;
            !(f = (T = I.next()).done) &&
            (h.push(T.value), !(c && h.length === c));
            f = !0
          );
        } catch (R) {
          (E = !0), (D = R);
        } finally {
          try {
            !f && I.return != null && I.return();
          } finally {
            if (E) throw D;
          }
        }
        return h;
      }
      function u(l) {
        if (Array.isArray(l)) return l;
      }
      function O(l) {
        var c = Object(t.useContext)(r.SettingsModalContext),
          h = c.isModalShowing,
          f = c.setIsModalShowing,
          E = Object(t.useContext)(y.StoreContext),
          D = E.profilerStore,
          I = Object(t.useMemo)(
            function () {
              return {
                getCurrentValue: function () {
                  return D.isProfiling;
                },
                subscribe: function (j) {
                  return (
                    D.addListener('isProfiling', j),
                    function () {
                      return D.removeListener('isProfiling', j);
                    }
                  );
                },
              };
            },
            [D],
          ),
          T = Object(p.useSubscription)(I);
        return T && h && f(!1), h ? n.a.createElement(v, null) : null;
      }
      function v(l) {
        var c = Object(t.useContext)(r.SettingsModalContext),
          h = c.setIsModalShowing,
          f = Object(t.useCallback)(
            function () {
              return h(!1);
            },
            [h],
          ),
          E = Object(p.useLocalStorage)(
            'React::DevTools::selectedSettingsTabID',
            'general',
          ),
          D = _(E, 2),
          I = D[0],
          T = D[1],
          R = Object(t.useRef)(null);
        Object(p.useModalDismissSignal)(R, f),
          Object(t.useEffect)(
            function () {
              R.current !== null && R.current.focus();
            },
            [R],
          );
        var j = null;
        switch (I) {
          case 'general':
            j = n.a.createElement(P.default, null);
            break;
          case 'profiler':
            j = n.a.createElement(B.default, null);
            break;
          case 'components':
            j = n.a.createElement(x.default, null);
            break;
        }
        return n.a.createElement(
          'div',
          { className: i.a.Background },
          n.a.createElement(
            'div',
            { className: i.a.Modal, ref: R },
            n.a.createElement(
              'div',
              { className: i.a.Tabs },
              n.a.createElement(m.default, {
                currentTab: I,
                id: 'Settings',
                selectTab: T,
                tabs: A,
                type: 'settings',
              }),
              n.a.createElement('div', { className: i.a.Spacer }),
              n.a.createElement(
                C.default,
                { onClick: f, title: 'Close settings dialog' },
                n.a.createElement(b.default, { type: 'close' }),
              ),
            ),
            n.a.createElement('div', { className: i.a.Content }, j),
          ),
        );
      }
      var A = [
        { id: 'general', icon: 'settings', label: 'General' },
        { id: 'components', icon: 'components', label: 'Components' },
        { id: 'profiler', icon: 'profiler', label: 'Profiler' },
      ];
    },
    '../react-devtools-shared/src/devtools/views/Settings/SettingsModalContext.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'SettingsModalContext', function () {
          return y;
        }),
        e.d(o, 'SettingsModalContextController', function () {
          return p;
        });
      var t = e('react'),
        n = e.n(t);
      function r(x, P) {
        return m(x) || b(x, P) || C();
      }
      function C() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function b(x, P) {
        var B = [],
          d = !0,
          i = !1,
          _ = void 0;
        try {
          for (
            var a = x[Symbol.iterator](), s;
            !(d = (s = a.next()).done) &&
            (B.push(s.value), !(P && B.length === P));
            d = !0
          );
        } catch (u) {
          (i = !0), (_ = u);
        } finally {
          try {
            !d && a.return != null && a.return();
          } finally {
            if (i) throw _;
          }
        }
        return B;
      }
      function m(x) {
        if (Array.isArray(x)) return x;
      }
      var y = Object(t.createContext)(null);
      y.displayName = 'SettingsModalContext';
      function p(x) {
        var P = x.children,
          B = Object(t.useState)(!1),
          d = r(B, 2),
          i = d[0],
          _ = d[1],
          a = Object(t.useMemo)(
            function () {
              return { isModalShowing: i, setIsModalShowing: _ };
            },
            [i, _],
          );
        return n.a.createElement(y.Provider, { value: a }, P);
      }
    },
    '../react-devtools-shared/src/devtools/views/Settings/SettingsModalContextToggle.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return p;
        });
      var t = e('react'),
        n = e.n(t),
        r = e(
          '../react-devtools-shared/src/devtools/views/Settings/SettingsModalContext.js',
        ),
        C = e('../react-devtools-shared/src/devtools/views/Button.js'),
        b = e('../react-devtools-shared/src/devtools/views/ButtonIcon.js'),
        m = e('../react-devtools-shared/src/devtools/views/context.js'),
        y = e('../react-devtools-shared/src/devtools/views/hooks.js');
      function p() {
        var x = Object(t.useContext)(r.SettingsModalContext),
          P = x.setIsModalShowing,
          B = Object(t.useContext)(m.StoreContext),
          d = B.profilerStore,
          i = Object(t.useCallback)(
            function () {
              return P(!0);
            },
            [P],
          ),
          _ = Object(t.useMemo)(
            function () {
              return {
                getCurrentValue: function () {
                  return d.isProfiling;
                },
                subscribe: function (u) {
                  return (
                    d.addListener('isProfiling', u),
                    function () {
                      return d.removeListener('isProfiling', u);
                    }
                  );
                },
              };
            },
            [d],
          ),
          a = Object(y.useSubscription)(_);
        return n.a.createElement(
          C.default,
          { disabled: a, onClick: i, title: 'View settings' },
          n.a.createElement(b.default, { type: 'settings' }),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Settings/SettingsShared.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Settings/SettingsShared.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/TabBar.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/TabBar.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/TabBar.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return x;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../../node_modules/@reach/tooltip/es/index.js'),
        C = e('../react-devtools-shared/src/devtools/views/Icon.js'),
        b = e('../react-devtools-shared/src/devtools/views/TabBar.css'),
        m = e.n(b),
        y = e('../react-devtools-shared/src/devtools/views/Tooltip.css'),
        p = e.n(y);
      function x(P) {
        var B = P.currentTab,
          d = P.disabled,
          i = d === void 0 ? !1 : d,
          _ = P.id,
          a = P.selectTab,
          s = P.tabs,
          u = P.type;
        s.some(function (h) {
          return h.id === B;
        }) || a(s[0].id);
        var O = Object(t.useCallback)(
            function (h) {
              var f = h.currentTarget;
              return a(f.value);
            },
            [a],
          ),
          v = Object(t.useCallback)(function (h) {
            switch (h.key) {
              case 'ArrowDown':
              case 'ArrowLeft':
              case 'ArrowRight':
              case 'ArrowUp':
                h.stopPropagation();
                break;
            }
          }, []),
          A,
          l,
          c;
        switch (u) {
          case 'navigation':
            (A = m.a.IconSizeNavigation),
              (l = m.a.TabLabelNavigation),
              (c = m.a.TabSizeNavigation);
            break;
          case 'profiler':
            (A = m.a.IconSizeProfiler),
              (l = m.a.TabLabelProfiler),
              (c = m.a.TabSizeProfiler);
            break;
          case 'settings':
            (A = m.a.IconSizeSettings),
              (l = m.a.TabLabelSettings),
              (c = m.a.TabSizeSettings);
            break;
          default:
            throw Error('Unsupported type "'.concat(u, '"'));
        }
        return n.a.createElement(
          t.Fragment,
          null,
          s.map(function (h) {
            var f = h.icon,
              E = h.id,
              D = h.label,
              I = h.title,
              T = n.a.createElement(
                'label',
                {
                  className: [
                    c,
                    i ? m.a.TabDisabled : m.a.Tab,
                    !i && B === E ? m.a.TabCurrent : '',
                  ].join(' '),
                  key: E,
                  onKeyDown: v,
                  onMouseDown: function () {
                    return a(E);
                  },
                },
                n.a.createElement('input', {
                  type: 'radio',
                  className: m.a.Input,
                  checked: B === E,
                  disabled: i,
                  name: _,
                  value: E,
                  onChange: O,
                }),
                n.a.createElement(C.default, {
                  className: ''
                    .concat(i ? m.a.IconDisabled : '', ' ')
                    .concat(A),
                  type: f,
                }),
                n.a.createElement('span', { className: l }, D),
              );
            return (
              I &&
                (T = n.a.createElement(
                  r.default,
                  { key: E, className: p.a.Tooltip, label: I },
                  T,
                )),
              T
            );
          }),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Toggle.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Toggle.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/Toggle.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return p;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../../node_modules/@reach/tooltip/es/index.js'),
        C = e('../react-devtools-shared/src/devtools/views/Toggle.css'),
        b = e.n(C),
        m = e('../react-devtools-shared/src/devtools/views/Tooltip.css'),
        y = e.n(m);
      function p(x) {
        var P = x.children,
          B = x.className,
          d = B === void 0 ? '' : B,
          i = x.isDisabled,
          _ = i === void 0 ? !1 : i,
          a = x.isChecked,
          s = x.onChange,
          u = x.title,
          O;
        _
          ? (O = b.a.ToggleDisabled)
          : a
          ? (O = b.a.ToggleOn)
          : (O = b.a.ToggleOff);
        var v = Object(t.useCallback)(
            function () {
              return s(!a);
            },
            [a, s],
          ),
          A = n.a.createElement(
            'button',
            { className: ''.concat(O, ' ').concat(d), disabled: _, onClick: v },
            n.a.createElement(
              'span',
              { className: b.a.ToggleContent, tabIndex: -1 },
              P,
            ),
          );
        return (
          u &&
            (A = n.a.createElement(
              r.default,
              { className: y.a.Tooltip, label: u },
              A,
            )),
          A
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/Tooltip.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/Tooltip.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/UnsupportedVersionDialog.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/UnsupportedVersionDialog.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/UnsupportedVersionDialog.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return i;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('react-dom'),
        C = e('../react-devtools-shared/src/devtools/views/ModalDialog.js'),
        b = e('../react-devtools-shared/src/devtools/views/context.js'),
        m = e('../react-devtools-shared/src/constants.js'),
        y = e(
          '../react-devtools-shared/src/devtools/views/UnsupportedVersionDialog.css',
        ),
        p = e.n(y);
      function x(a, s) {
        return d(a) || B(a, s) || P();
      }
      function P() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function B(a, s) {
        var u = [],
          O = !0,
          v = !1,
          A = void 0;
        try {
          for (
            var l = a[Symbol.iterator](), c;
            !(O = (c = l.next()).done) &&
            (u.push(c.value), !(s && u.length === s));
            O = !0
          );
        } catch (h) {
          (v = !0), (A = h);
        } finally {
          try {
            !O && l.return != null && l.return();
          } finally {
            if (v) throw A;
          }
        }
        return u;
      }
      function d(a) {
        if (Array.isArray(a)) return a;
      }
      function i(a) {
        var s = Object(t.useContext)(C.ModalDialogContext),
          u = s.dispatch,
          O = Object(t.useContext)(b.StoreContext),
          v = Object(t.useState)('dialog-not-shown'),
          A = x(v, 2),
          l = A[0],
          c = A[1];
        return (
          Object(t.useEffect)(
            function () {
              if (l === 'dialog-not-shown') {
                var h = function () {
                  Object(r.unstable_batchedUpdates)(function () {
                    c('show-dialog'),
                      u({
                        canBeDismissed: !0,
                        type: 'SHOW',
                        content: n.a.createElement(_, null),
                      });
                  });
                };
                if (O.unsupportedRendererVersionDetected) h();
                else
                  return (
                    O.addListener('unsupportedRendererVersionDetected', h),
                    function () {
                      O.removeListener('unsupportedRendererVersionDetected', h);
                    }
                  );
              }
            },
            [l, O],
          ),
          null
        );
      }
      function _(a) {
        return n.a.createElement(
          t.Fragment,
          null,
          n.a.createElement(
            'div',
            { className: p.a.Row },
            n.a.createElement(
              'div',
              null,
              n.a.createElement(
                'div',
                { className: p.a.Title },
                'Unsupported React version detected',
              ),
              n.a.createElement(
                'p',
                null,
                'This version of React DevTools supports React DOM v15+ and React Native v61+.',
              ),
              n.a.createElement(
                'p',
                null,
                "In order to use DevTools with an older version of React, you'll need to",
                ' ',
                n.a.createElement(
                  'a',
                  {
                    className: p.a.ReleaseNotesLink,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    href: m.UNSUPPORTED_VERSION_URL,
                  },
                  'install an older version of the extension',
                ),
                '.',
              ),
            ),
          ),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/WarnIfLegacyBackendDetected.css': function (
      g,
      o,
      e,
    ) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/WarnIfLegacyBackendDetected.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/WarnIfLegacyBackendDetected.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return y;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/devtools/views/context.js'),
        C = e('../react-devtools-shared/src/devtools/views/ModalDialog.js'),
        b = e(
          '../react-devtools-shared/src/devtools/views/WarnIfLegacyBackendDetected.css',
        ),
        m = e.n(b);
      function y(x) {
        var P = Object(t.useContext)(r.BridgeContext),
          B = Object(t.useContext)(C.ModalDialogContext),
          d = B.dispatch;
        return (
          Object(t.useEffect)(
            function () {
              var i = P.wall.listen(function (_) {
                switch (_.type) {
                  case 'call':
                  case 'event':
                  case 'many-events':
                    d({
                      canBeDismissed: !1,
                      type: 'SHOW',
                      title:
                        'DevTools v4 is incompatible with this version of React',
                      content: n.a.createElement(p, null),
                    }),
                      typeof i == 'function' && (i(), (i = null));
                    break;
                }
                switch (_.event) {
                  case 'isBackendStorageAPISupported':
                  case 'isNativeStyleEditorSupported':
                  case 'operations':
                  case 'overrideComponentFilters':
                    typeof i == 'function' && (i(), (i = null));
                    break;
                }
              });
              return function () {
                typeof i == 'function' && (i(), (i = null));
              };
            },
            [P, d],
          ),
          null
        );
      }
      function p(x) {
        return n.a.createElement(
          t.Fragment,
          null,
          n.a.createElement(
            'p',
            null,
            'Either upgrade React or install React DevTools v3:',
          ),
          n.a.createElement(
            'code',
            { className: m.a.Command },
            'npm install -d react-devtools@^3',
          ),
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/context.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'BridgeContext', function () {
          return n;
        }),
        e.d(o, 'StoreContext', function () {
          return r;
        }),
        e.d(o, 'ContextMenuContext', function () {
          return C;
        });
      var t = e('react');
      e('../react-devtools-shared/src/devtools/store.js');
      var n = Object(t.createContext)(null);
      n.displayName = 'BridgeContext';
      var r = Object(t.createContext)(null);
      r.displayName = 'StoreContext';
      var C = Object(t.createContext)({
        isEnabledForInspectedElement: !1,
        viewAttributeSourceFunction: null,
      });
      C.displayName = 'ContextMenuContext';
    },
    '../react-devtools-shared/src/devtools/views/hooks.js': function (g, o, e) {
      e.r(o),
        e.d(o, 'useEditableValue', function () {
          return _;
        }),
        e.d(o, 'useIsOverflowing', function () {
          return a;
        }),
        e.d(o, 'useLocalStorage', function () {
          return s;
        }),
        e.d(o, 'useModalDismissSignal', function () {
          return u;
        }),
        e.d(o, 'useSubscription', function () {
          return O;
        });
      var t = e('../../node_modules/lodash.throttle/index.js'),
        n = e.n(t),
        r = e('react'),
        C = e('../react-devtools-shared/src/storage.js'),
        b = e('../react-devtools-shared/src/devtools/utils.js');
      function m(v, A) {
        return x(v) || p(v, A) || y();
      }
      function y() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        );
      }
      function p(v, A) {
        var l = [],
          c = !0,
          h = !1,
          f = void 0;
        try {
          for (
            var E = v[Symbol.iterator](), D;
            !(c = (D = E.next()).done) &&
            (l.push(D.value), !(A && l.length === A));
            c = !0
          );
        } catch (I) {
          (h = !0), (f = I);
        } finally {
          try {
            !c && E.return != null && E.return();
          } finally {
            if (h) throw f;
          }
        }
        return l;
      }
      function x(v) {
        if (Array.isArray(v)) return v;
      }
      function P(v, A) {
        var l = Object.keys(v);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(v);
          A &&
            (c = c.filter(function (h) {
              return Object.getOwnPropertyDescriptor(v, h).enumerable;
            })),
            l.push.apply(l, c);
        }
        return l;
      }
      function B(v) {
        for (var A = 1; A < arguments.length; A++) {
          var l = arguments[A] != null ? arguments[A] : {};
          A % 2
            ? P(l, !0).forEach(function (c) {
                d(v, c, l[c]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(l))
            : P(l).forEach(function (c) {
                Object.defineProperty(
                  v,
                  c,
                  Object.getOwnPropertyDescriptor(l, c),
                );
              });
        }
        return v;
      }
      function d(v, A, l) {
        return (
          A in v
            ? Object.defineProperty(v, A, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (v[A] = l),
          v
        );
      }
      function i(v, A) {
        switch (A.type) {
          case 'RESET':
            return B({}, v, {
              editableValue: Object(b.smartStringify)(A.externalValue),
              externalValue: A.externalValue,
              hasPendingChanges: !1,
              isValid: !0,
              parsedValue: A.externalValue,
            });
          case 'UPDATE':
            var l = !1,
              c;
            try {
              (c = Object(b.smartParse)(A.editableValue)), (l = !0);
            } catch {}
            return B({}, v, {
              editableValue: Object(b.sanitizeForParse)(A.editableValue),
              externalValue: A.externalValue,
              hasPendingChanges:
                Object(b.smartStringify)(A.externalValue) !== A.editableValue,
              isValid: l,
              parsedValue: l ? c : v.parsedValue,
            });
          default:
            throw new Error('Invalid action "'.concat(A.type, '"'));
        }
      }
      function _(v) {
        var A = Object(r.useReducer)(i, {
            editableValue: Object(b.smartStringify)(v),
            externalValue: v,
            hasPendingChanges: !1,
            isValid: !0,
            parsedValue: v,
          }),
          l = m(A, 2),
          c = l[0],
          h = l[1];
        return (
          Object.is(c.externalValue, v) ||
            (c.hasPendingChanges
              ? h({
                  type: 'UPDATE',
                  editableValue: c.editableValue,
                  externalValue: v,
                })
              : h({ type: 'RESET', externalValue: v })),
          [c, h]
        );
      }
      function a(v, A) {
        var l = Object(r.useState)(!1),
          c = m(l, 2),
          h = c[0],
          f = c[1];
        return (
          Object(r.useLayoutEffect)(
            function () {
              if (v.current === null) return function () {};
              var E = v.current,
                D = n()(function () {
                  return f(E.clientWidth <= A);
                }, 100);
              D();
              var I = E.ownerDocument.defaultView;
              return (
                I.addEventListener('resize', D),
                function () {
                  return I.removeEventListener('resize', D);
                }
              );
            },
            [v, A],
          ),
          h
        );
      }
      function s(v, A) {
        var l = Object(r.useCallback)(
            function () {
              try {
                var I = Object(C.localStorageGetItem)(v);
                if (I != null) return JSON.parse(I);
              } catch (T) {
                console.log(T);
              }
              return typeof A == 'function' ? A() : A;
            },
            [A, v],
          ),
          c = Object(r.useState)(l),
          h = m(c, 2),
          f = h[0],
          E = h[1],
          D = Object(r.useCallback)(
            function (I) {
              try {
                var T = I instanceof Function ? I(f) : I;
                E(T), Object(C.localStorageSetItem)(v, JSON.stringify(T));
              } catch (R) {
                console.log(R);
              }
            },
            [v, f],
          );
        return (
          Object(r.useLayoutEffect)(
            function () {
              var I = function (R) {
                var j = l();
                v === R.key && f !== j && D(j);
              };
              return (
                window.addEventListener('storage', I),
                function () {
                  window.removeEventListener('storage', I);
                }
              );
            },
            [l, v, f, D],
          ),
          [f, D]
        );
      }
      function u(v, A) {
        var l =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        Object(r.useEffect)(
          function () {
            if (v.current === null) return function () {};
            var c = function (D) {
                var I = D.key;
                I === 'Escape' && A();
              },
              h = function (D) {
                v.current !== null &&
                  !v.current.contains(D.target) &&
                  (D.stopPropagation(), D.preventDefault(), A());
              },
              f = v.current.ownerDocument;
            return (
              f.addEventListener('keydown', c),
              l && f.addEventListener('click', h),
              function () {
                f.removeEventListener('keydown', c),
                  f.removeEventListener('click', h);
              }
            );
          },
          [v, A, l],
        );
      }
      function O(v) {
        var A = v.getCurrentValue,
          l = v.subscribe,
          c = Object(r.useState)({
            getCurrentValue: A,
            subscribe: l,
            value: A(),
          }),
          h = m(c, 2),
          f = h[0],
          E = h[1];
        return (
          (f.getCurrentValue !== A || f.subscribe !== l) &&
            E({ getCurrentValue: A, subscribe: l, value: A() }),
          Object(r.useEffect)(
            function () {
              var D = !1,
                I = function () {
                  D ||
                    E(function (j) {
                      if (j.getCurrentValue !== A || j.subscribe !== l)
                        return j;
                      var z = A();
                      return j.value === z ? j : B({}, j, { value: z });
                    });
                },
                T = l(I);
              return (
                I(),
                function () {
                  (D = !0), T();
                }
              );
            },
            [A, l],
          ),
          f.value
        );
      }
    },
    '../react-devtools-shared/src/devtools/views/portaledContent.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'default', function () {
          return y;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('react-dom'),
        C = e('../react-devtools-shared/src/devtools/views/ErrorBoundary.js');
      function b(p, x) {
        if (p == null) return {};
        var P = m(p, x),
          B,
          d;
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(p);
          for (d = 0; d < i.length; d++)
            (B = i[d]),
              !(x.indexOf(B) >= 0) &&
                (!Object.prototype.propertyIsEnumerable.call(p, B) ||
                  (P[B] = p[B]));
        }
        return P;
      }
      function m(p, x) {
        if (p == null) return {};
        var P = {},
          B = Object.keys(p),
          d,
          i;
        for (i = 0; i < B.length; i++)
          (d = B[i]), !(x.indexOf(d) >= 0) && (P[d] = p[d]);
        return P;
      }
      function y(p) {
        return function (P) {
          var B = P.portalContainer,
            d = b(P, ['portalContainer']),
            i = n.a.createElement(C.default, null, n.a.createElement(p, d));
          return B != null ? Object(r.createPortal)(i, B) : i;
        };
      }
    },
    '../react-devtools-shared/src/devtools/views/root.css': function (g, o, e) {
      var t = e(
        '../../node_modules/css-loader/index.js?!../react-devtools-shared/src/devtools/views/root.css',
      );
      typeof t == 'string' && (t = [[g.i, t, '']]);
      var n,
        r = { hmr: !0 };
      (r.transform = n),
        (r.insertInto = void 0),
        e('../../node_modules/style-loader/lib/addStyles.js')(t, r),
        t.locals && (g.exports = t.locals);
    },
    '../react-devtools-shared/src/devtools/views/utils.js': function (g, o, e) {
      e.r(o),
        e.d(o, 'alphaSortEntries', function () {
          return P;
        }),
        e.d(o, 'createRegExp', function () {
          return B;
        }),
        e.d(o, 'getMetaValueLabel', function () {
          return d;
        }),
        e.d(o, 'serializeDataForCopy', function () {
          return _;
        }),
        e.d(o, 'serializeHooksForCopy', function () {
          return a;
        }),
        e.d(o, 'downloadFile', function () {
          return u;
        }),
        e.d(o, 'truncateText', function () {
          return O;
        });
      var t = e('../../node_modules/escape-string-regexp/index.js'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/hydration.js'),
        C = e('../react-devtools-shared/src/utils.js');
      function b(v) {
        return p(v) || y(v) || m();
      }
      function m() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      }
      function y(v) {
        if (
          Symbol.iterator in Object(v) ||
          Object.prototype.toString.call(v) === '[object Arguments]'
        )
          return Array.from(v);
      }
      function p(v) {
        if (Array.isArray(v)) {
          for (var A = 0, l = new Array(v.length); A < v.length; A++)
            l[A] = v[A];
          return l;
        }
      }
      function x(v) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (x = function (l) {
                return typeof l;
              })
            : (x = function (l) {
                return l &&
                  typeof Symbol == 'function' &&
                  l.constructor === Symbol &&
                  l !== Symbol.prototype
                  ? 'symbol'
                  : typeof l;
              }),
          x(v)
        );
      }
      function P(v, A) {
        var l = v[0],
          c = A[0];
        return '' + +l === l
          ? '' + +c !== c || +l < +c
            ? -1
            : 1
          : l < c
          ? -1
          : 1;
      }
      function B(v) {
        if (v[0] === '/') {
          (v = v.substring(1)),
            v[v.length - 1] === '/' && (v = v.substring(0, v.length - 1));
          try {
            return new RegExp(v, 'i');
          } catch {
            return new RegExp('.^');
          }
        }
        function A(D) {
          return D.toLowerCase() !== D.toUpperCase();
        }
        function l(D) {
          return A(D) ? '[' + D.toLowerCase() + D.toUpperCase() + ']' : D;
        }
        for (var c = n()(v), h = c[0], f = '', E = 1; E < c.length; E++)
          f += l(c[E]);
        return A(h)
          ? new RegExp('(^' + l(h) + '|' + h.toUpperCase() + ')' + f)
          : new RegExp(h + f);
      }
      function d(v) {
        return hasOwnProperty.call(v, r.meta.preview_long)
          ? v[r.meta.preview_long]
          : Object(C.formatDataForPreview)(v, !0);
      }
      function i(v) {
        for (var A in v) {
          var l = v[A];
          l && l[r.meta.type]
            ? (v[A] = d(l))
            : l != null && (Array.isArray(l) || x(l) === 'object') && i(l);
        }
      }
      function _(v) {
        var A = Object.assign({}, v);
        i(A);
        try {
          return JSON.stringify(A, null, 2);
        } catch {
          return '';
        }
      }
      function a(v) {
        for (var A = Object.assign([], v), l = b(A); l.length > 0; ) {
          var c = l.pop();
          delete c.id,
            delete c.isStateEditable,
            c.subHooks.length > 0 && l.push.apply(l, b(c.subHooks));
        }
        i(A);
        try {
          return JSON.stringify(A, null, 2);
        } catch {
          return '';
        }
      }
      var s = null;
      function u(v, A, l) {
        var c = new Blob([l], { type: 'text/plain;charset=utf-8' });
        s !== null && URL.revokeObjectURL(s),
          (s = URL.createObjectURL(c)),
          v.setAttribute('href', s),
          v.setAttribute('download', A),
          v.click();
      }
      function O(v, A) {
        var l = v.length;
        return l > A
          ? v.substr(0, Math.floor(A / 2)) +
              '\u2026' +
              v.substr(l - Math.ceil(A / 2) - 1)
          : v;
      }
    },
    '../react-devtools-shared/src/hydration.js': function (g, o, e) {
      e.r(o),
        e.d(o, 'meta', function () {
          return p;
        }),
        e.d(o, 'dehydrate', function () {
          return B;
        }),
        e.d(o, 'fillInPath', function () {
          return d;
        }),
        e.d(o, 'hydrate', function () {
          return i;
        });
      var t = e('../../node_modules/es6-symbol/index.js'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/utils.js');
      function C(a, s) {
        var u = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
          var O = Object.getOwnPropertySymbols(a);
          s &&
            (O = O.filter(function (v) {
              return Object.getOwnPropertyDescriptor(a, v).enumerable;
            })),
            u.push.apply(u, O);
        }
        return u;
      }
      function b(a) {
        for (var s = 1; s < arguments.length; s++) {
          var u = arguments[s] != null ? arguments[s] : {};
          s % 2
            ? C(u, !0).forEach(function (O) {
                m(a, O, u[O]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u))
            : C(u).forEach(function (O) {
                Object.defineProperty(
                  a,
                  O,
                  Object.getOwnPropertyDescriptor(u, O),
                );
              });
        }
        return a;
      }
      function m(a, s, u) {
        return (
          s in a
            ? Object.defineProperty(a, s, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[s] = u),
          a
        );
      }
      function y(a) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (y = function (u) {
                return typeof u;
              })
            : (y = function (u) {
                return u &&
                  typeof Symbol == 'function' &&
                  u.constructor === Symbol &&
                  u !== Symbol.prototype
                  ? 'symbol'
                  : typeof u;
              }),
          y(a)
        );
      }
      var p = {
          inspectable: n()('inspectable'),
          inspected: n()('inspected'),
          name: n()('name'),
          preview_long: n()('preview_long'),
          preview_short: n()('preview_short'),
          readonly: n()('readonly'),
          size: n()('size'),
          type: n()('type'),
          unserializable: n()('unserializable'),
        },
        x = 2;
      function P(a, s, u, O, v) {
        O.push(v);
        var A = {
          inspectable: s,
          type: a,
          preview_long: Object(r.formatDataForPreview)(u, !0),
          preview_short: Object(r.formatDataForPreview)(u, !1),
          name:
            !u.constructor || u.constructor.name === 'Object'
              ? ''
              : u.constructor.name,
        };
        return (
          a === 'array' || a === 'typed_array'
            ? (A.size = u.length)
            : a === 'object' && (A.size = Object.keys(u).length),
          (a === 'iterator' || a === 'typed_array') && (A.readonly = !0),
          A
        );
      }
      function B(a, s, u, O, v) {
        var A =
            arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0,
          l = Object(r.getDataType)(a),
          c;
        switch (l) {
          case 'html_element':
            return (
              s.push(O),
              {
                inspectable: !1,
                preview_short: Object(r.formatDataForPreview)(a, !1),
                preview_long: Object(r.formatDataForPreview)(a, !0),
                name: a.tagName,
                type: l,
              }
            );
          case 'function':
            return (
              s.push(O),
              {
                inspectable: !1,
                preview_short: Object(r.formatDataForPreview)(a, !1),
                preview_long: Object(r.formatDataForPreview)(a, !0),
                name: a.name,
                type: l,
              }
            );
          case 'string':
            return a.length <= 500 ? a : a.slice(0, 500) + '...';
          case 'bigint':
            return (
              s.push(O),
              {
                inspectable: !1,
                preview_short: Object(r.formatDataForPreview)(a, !1),
                preview_long: Object(r.formatDataForPreview)(a, !0),
                name: a.toString(),
                type: l,
              }
            );
          case 'symbol':
            return (
              s.push(O),
              {
                inspectable: !1,
                preview_short: Object(r.formatDataForPreview)(a, !1),
                preview_long: Object(r.formatDataForPreview)(a, !0),
                name: a.toString(),
                type: l,
              }
            );
          case 'react_element':
            return (
              s.push(O),
              {
                inspectable: !1,
                preview_short: Object(r.formatDataForPreview)(a, !1),
                preview_long: Object(r.formatDataForPreview)(a, !0),
                name: Object(r.getDisplayNameForReactElement)(a) || 'Unknown',
                type: l,
              }
            );
          case 'array_buffer':
          case 'data_view':
            return (
              s.push(O),
              {
                inspectable: !1,
                preview_short: Object(r.formatDataForPreview)(a, !1),
                preview_long: Object(r.formatDataForPreview)(a, !0),
                name: l === 'data_view' ? 'DataView' : 'ArrayBuffer',
                size: a.byteLength,
                type: l,
              }
            );
          case 'array':
            return (
              (c = v(O)),
              A >= x && !c
                ? P(l, !0, a, s, O)
                : a.map(function (D, I) {
                    return B(D, s, u, O.concat([I]), v, c ? 1 : A + 1);
                  })
            );
          case 'typed_array':
          case 'iterator':
            if (((c = v(O)), A >= x && !c)) return P(l, !0, a, s, O);
            var h = {
              unserializable: !0,
              type: l,
              readonly: !0,
              size: l === 'typed_array' ? a.length : void 0,
              preview_short: Object(r.formatDataForPreview)(a, !1),
              preview_long: Object(r.formatDataForPreview)(a, !0),
              name:
                !a.constructor || a.constructor.name === 'Object'
                  ? ''
                  : a.constructor.name,
            };
            return (
              y(a[n.a.iterator]) &&
                Array.from(a).forEach(function (D, I) {
                  return (h[I] = B(D, s, u, O.concat([I]), v, c ? 1 : A + 1));
                }),
              u.push(O),
              h
            );
          case 'date':
            return (
              s.push(O),
              {
                inspectable: !1,
                preview_short: Object(r.formatDataForPreview)(a, !1),
                preview_long: Object(r.formatDataForPreview)(a, !0),
                name: a.toString(),
                type: l,
              }
            );
          case 'regexp':
            return (
              s.push(O),
              {
                inspectable: !1,
                preview_short: Object(r.formatDataForPreview)(a, !1),
                preview_long: Object(r.formatDataForPreview)(a, !0),
                name: a.toString(),
                type: l,
              }
            );
          case 'object':
            if (((c = v(O)), A >= x && !c)) return P(l, !0, a, s, O);
            var f = {};
            for (var E in a)
              f[E] = B(a[E], s, u, O.concat([E]), v, c ? 1 : A + 1);
            return f;
          case 'infinity':
          case 'nan':
          case 'undefined':
            return s.push(O), { type: l };
          default:
            return a;
        }
      }
      function d(a, s, u, O) {
        var v = Object(r.getInObject)(a, u);
        if (
          (v != null &&
            (v[p.unserializable] ||
              (delete v[p.inspectable],
              delete v[p.inspected],
              delete v[p.name],
              delete v[p.preview_long],
              delete v[p.preview_short],
              delete v[p.readonly],
              delete v[p.size],
              delete v[p.type])),
          O !== null && s.unserializable.length > 0)
        ) {
          for (
            var A = s.unserializable[0], l = A.length === u.length, c = 0;
            c < u.length;
            c++
          )
            if (u[c] !== A[c]) {
              l = !1;
              break;
            }
          l && _(O, O);
        }
        Object(r.setInObject)(a, u, O);
      }
      function i(a, s, u) {
        return (
          s.forEach(function (O) {
            var v = O.length,
              A = O[v - 1],
              l = Object(r.getInObject)(a, O.slice(0, v - 1));
            if (!(!l || !l.hasOwnProperty(A))) {
              var c = l[A];
              if (c.type === 'infinity') l[A] = 1 / 0;
              else if (c.type === 'nan') l[A] = NaN;
              else if (c.type === 'undefined') l[A] = void 0;
              else {
                var h = {};
                (h[p.inspectable] = !!c.inspectable),
                  (h[p.inspected] = !1),
                  (h[p.name] = c.name),
                  (h[p.preview_long] = c.preview_long),
                  (h[p.preview_short] = c.preview_short),
                  (h[p.size] = c.size),
                  (h[p.readonly] = !!c.readonly),
                  (h[p.type] = c.type),
                  (l[A] = h);
              }
            }
          }),
          u.forEach(function (O) {
            var v = O.length,
              A = O[v - 1],
              l = Object(r.getInObject)(a, O.slice(0, v - 1));
            if (!(!l || !l.hasOwnProperty(A))) {
              var c = l[A],
                h = b({}, c);
              _(h, c), (l[A] = h);
            }
          }),
          a
        );
      }
      function _(a, s) {
        var u;
        Object.defineProperties(
          a,
          ((u = {}),
          m(u, p.inspected, {
            configurable: !0,
            enumerable: !1,
            value: !!s.inspected,
          }),
          m(u, p.name, { configurable: !0, enumerable: !1, value: s.name }),
          m(u, p.preview_long, {
            configurable: !0,
            enumerable: !1,
            value: s.preview_long,
          }),
          m(u, p.preview_short, {
            configurable: !0,
            enumerable: !1,
            value: s.preview_short,
          }),
          m(u, p.size, { configurable: !0, enumerable: !1, value: s.size }),
          m(u, p.readonly, {
            configurable: !0,
            enumerable: !1,
            value: !!s.readonly,
          }),
          m(u, p.type, { configurable: !0, enumerable: !1, value: s.type }),
          m(u, p.unserializable, {
            configurable: !0,
            enumerable: !1,
            value: !!s.unserializable,
          }),
          u),
        ),
          delete a.inspected,
          delete a.name,
          delete a.preview_long,
          delete a.preview_short,
          delete a.size,
          delete a.readonly,
          delete a.type,
          delete a.unserializable;
      }
    },
    '../react-devtools-shared/src/node_modules/react-window/dist/index.esm.js': function (
      g,
      o,
      e,
    ) {
      e.r(o),
        e.d(o, 'VariableSizeGrid', function () {
          return R;
        }),
        e.d(o, 'VariableSizeList', function () {
          return M;
        }),
        e.d(o, 'FixedSizeGrid', function () {
          return U;
        }),
        e.d(o, 'FixedSizeList', function () {
          return Y;
        }),
        e.d(o, 'areEqual', function () {
          return q;
        }),
        e.d(o, 'shouldComponentUpdate', function () {
          return ee;
        });
      var t = e('../../node_modules/@babel/runtime/helpers/esm/extends.js'),
        n = e('../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js'),
        r = e(
          '../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js',
        ),
        C = e('../../node_modules/memoize-one/esm/index.js'),
        b = e('react'),
        m = e('react-dom'),
        y = e(
          '../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js',
        );
      function p(G) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (p = function (V) {
                return typeof V;
              })
            : (p = function (V) {
                return V &&
                  typeof Symbol == 'function' &&
                  V.constructor === Symbol &&
                  V !== Symbol.prototype
                  ? 'symbol'
                  : typeof V;
              }),
          p(G)
        );
      }
      var x =
          (typeof performance > 'u' ? 'undefined' : p(performance)) ===
            'object' && typeof performance.now == 'function',
        P = x
          ? function () {
              return performance.now();
            }
          : function () {
              return Date.now();
            };
      function B(G) {
        cancelAnimationFrame(G.id);
      }
      function d(G, N) {
        var V = P();
        function X() {
          P() - V >= N ? G.call(null) : ($.id = requestAnimationFrame(X));
        }
        var $ = { id: requestAnimationFrame(X) };
        return $;
      }
      var i = -1;
      function _(G) {
        if ((G === void 0 && (G = !1), i === -1 || G)) {
          var N = document.createElement('div'),
            V = N.style;
          (V.width = '50px'),
            (V.height = '50px'),
            (V.overflow = 'scroll'),
            document.body.appendChild(N),
            (i = N.offsetWidth - N.clientWidth),
            document.body.removeChild(N);
        }
        return i;
      }
      var a = null;
      function s(G) {
        if ((G === void 0 && (G = !1), a === null || G)) {
          var N = document.createElement('div'),
            V = N.style;
          (V.width = '50px'),
            (V.height = '50px'),
            (V.overflow = 'scroll'),
            (V.direction = 'rtl');
          var X = document.createElement('div'),
            $ = X.style;
          return (
            ($.width = '100px'),
            ($.height = '100px'),
            N.appendChild(X),
            document.body.appendChild(N),
            N.scrollLeft > 0
              ? (a = 'positive-descending')
              : ((N.scrollLeft = 1),
                N.scrollLeft === 0
                  ? (a = 'negative')
                  : (a = 'positive-ascending')),
            document.body.removeChild(N),
            a
          );
        }
        return a;
      }
      var u = 150,
        O = function (N) {
          var V = N.columnIndex;
          N.data;
          var X = N.rowIndex;
          return X + ':' + V;
        };
      function v(G) {
        var N,
          V,
          X = G.getColumnOffset,
          $ = G.getColumnStartIndexForOffset,
          te = G.getColumnStopIndexForStartIndex,
          Q = G.getColumnWidth,
          ne = G.getEstimatedTotalHeight,
          re = G.getEstimatedTotalWidth,
          ce = G.getOffsetForColumnAndAlignment,
          se = G.getOffsetForRowAndAlignment,
          fe = G.getRowHeight,
          de = G.getRowOffset,
          ge = G.getRowStartIndexForOffset,
          pe = G.getRowStopIndexForStartIndex,
          me = G.initInstanceProps,
          oe = G.shouldResetStyleCacheOnItemSizeChange,
          ve = G.validateProps;
        return (
          (V = N = (function (le) {
            Object(n.default)(Ee, le);
            function Ee(ue) {
              var J;
              return (
                (J = le.call(this, ue) || this),
                (J._instanceProps = me(
                  J.props,
                  Object(r.default)(Object(r.default)(J)),
                )),
                (J._resetIsScrollingTimeoutId = null),
                (J._outerRef = void 0),
                (J.state = {
                  instance: Object(r.default)(Object(r.default)(J)),
                  isScrolling: !1,
                  horizontalScrollDirection: 'forward',
                  scrollLeft:
                    typeof J.props.initialScrollLeft == 'number'
                      ? J.props.initialScrollLeft
                      : 0,
                  scrollTop:
                    typeof J.props.initialScrollTop == 'number'
                      ? J.props.initialScrollTop
                      : 0,
                  scrollUpdateWasRequested: !1,
                  verticalScrollDirection: 'forward',
                }),
                (J._callOnItemsRendered = void 0),
                (J._callOnItemsRendered = Object(C.default)(function (
                  ie,
                  ae,
                  he,
                  ye,
                  Ce,
                  Oe,
                  Be,
                  Ie,
                ) {
                  return J.props.onItemsRendered({
                    overscanColumnStartIndex: ie,
                    overscanColumnStopIndex: ae,
                    overscanRowStartIndex: he,
                    overscanRowStopIndex: ye,
                    visibleColumnStartIndex: Ce,
                    visibleColumnStopIndex: Oe,
                    visibleRowStartIndex: Be,
                    visibleRowStopIndex: Ie,
                  });
                })),
                (J._callOnScroll = void 0),
                (J._callOnScroll = Object(C.default)(function (
                  ie,
                  ae,
                  he,
                  ye,
                  Ce,
                ) {
                  return J.props.onScroll({
                    horizontalScrollDirection: he,
                    scrollLeft: ie,
                    scrollTop: ae,
                    verticalScrollDirection: ye,
                    scrollUpdateWasRequested: Ce,
                  });
                })),
                (J._getItemStyle = void 0),
                (J._getItemStyle = function (ie, ae) {
                  var he = J.props,
                    ye = he.columnWidth,
                    Ce = he.direction,
                    Oe = he.rowHeight,
                    Be = J._getItemStyleCache(oe && ye, oe && Ce, oe && Oe),
                    Ie = ie + ':' + ae,
                    xe;
                  if (Be.hasOwnProperty(Ie)) xe = Be[Ie];
                  else {
                    var _e;
                    Be[Ie] = xe =
                      ((_e = { position: 'absolute' }),
                      (_e[Ce === 'rtl' ? 'right' : 'left'] = X(
                        J.props,
                        ae,
                        J._instanceProps,
                      )),
                      (_e.top = de(J.props, ie, J._instanceProps)),
                      (_e.height = fe(J.props, ie, J._instanceProps)),
                      (_e.width = Q(J.props, ae, J._instanceProps)),
                      _e);
                  }
                  return xe;
                }),
                (J._getItemStyleCache = void 0),
                (J._getItemStyleCache = Object(C.default)(function (
                  ie,
                  ae,
                  he,
                ) {
                  return {};
                })),
                (J._onScroll = function (ie) {
                  var ae = ie.currentTarget,
                    he = ae.clientHeight,
                    ye = ae.clientWidth,
                    Ce = ae.scrollLeft,
                    Oe = ae.scrollTop,
                    Be = ae.scrollHeight,
                    Ie = ae.scrollWidth;
                  Object(m.flushSync)(function () {
                    J.setState(function (xe) {
                      if (xe.scrollLeft === Ce && xe.scrollTop === Oe)
                        return null;
                      var _e = J.props.direction,
                        Se = Ce;
                      if (_e === 'rtl')
                        switch (s()) {
                          case 'negative':
                            Se = -Ce;
                            break;
                          case 'positive-descending':
                            Se = Ie - ye - Ce;
                            break;
                        }
                      Se = Math.max(0, Math.min(Se, Ie - ye));
                      var Pe = Math.max(0, Math.min(Oe, Be - he));
                      return {
                        isScrolling: !0,
                        horizontalScrollDirection:
                          xe.scrollLeft < Ce ? 'forward' : 'backward',
                        scrollLeft: Se,
                        scrollTop: Pe,
                        verticalScrollDirection:
                          xe.scrollTop < Oe ? 'forward' : 'backward',
                        scrollUpdateWasRequested: !1,
                      };
                    }, J._resetIsScrollingDebounced);
                  });
                }),
                (J._outerRefSetter = function (ie) {
                  var ae = J.props.outerRef;
                  (J._outerRef = ie),
                    typeof ae == 'function'
                      ? ae(ie)
                      : ae != null &&
                        p(ae) === 'object' &&
                        ae.hasOwnProperty('current') &&
                        (ae.current = ie);
                }),
                (J._resetIsScrollingDebounced = function () {
                  J._resetIsScrollingTimeoutId !== null &&
                    B(J._resetIsScrollingTimeoutId),
                    (J._resetIsScrollingTimeoutId = d(J._resetIsScrolling, u));
                }),
                (J._resetIsScrolling = function () {
                  (J._resetIsScrollingTimeoutId = null),
                    J.setState({ isScrolling: !1 }, function () {
                      J._getItemStyleCache(-1);
                    });
                }),
                J
              );
            }
            Ee.getDerivedStateFromProps = function (J, ie) {
              return A(J, ie), ve(J), null;
            };
            var Ae = Ee.prototype;
            return (
              (Ae.scrollTo = function (J) {
                var ie = J.scrollLeft,
                  ae = J.scrollTop;
                ie !== void 0 && (ie = Math.max(0, ie)),
                  ae !== void 0 && (ae = Math.max(0, ae)),
                  this.setState(function (he) {
                    return (
                      ie === void 0 && (ie = he.scrollLeft),
                      ae === void 0 && (ae = he.scrollTop),
                      he.scrollLeft === ie && he.scrollTop === ae
                        ? null
                        : {
                            horizontalScrollDirection:
                              he.scrollLeft < ie ? 'forward' : 'backward',
                            scrollLeft: ie,
                            scrollTop: ae,
                            scrollUpdateWasRequested: !0,
                            verticalScrollDirection:
                              he.scrollTop < ae ? 'forward' : 'backward',
                          }
                    );
                  }, this._resetIsScrollingDebounced);
              }),
              (Ae.scrollToItem = function (J) {
                var ie = J.align,
                  ae = ie === void 0 ? 'auto' : ie,
                  he = J.columnIndex,
                  ye = J.rowIndex,
                  Ce = this.props,
                  Oe = Ce.columnCount,
                  Be = Ce.height,
                  Ie = Ce.rowCount,
                  xe = Ce.width,
                  _e = this.state,
                  Se = _e.scrollLeft,
                  Pe = _e.scrollTop,
                  Te = _();
                he !== void 0 && (he = Math.max(0, Math.min(he, Oe - 1))),
                  ye !== void 0 && (ye = Math.max(0, Math.min(ye, Ie - 1)));
                var be = ne(this.props, this._instanceProps),
                  Me = re(this.props, this._instanceProps),
                  Ue = Me > xe ? Te : 0,
                  Ne = be > Be ? Te : 0;
                this.scrollTo({
                  scrollLeft:
                    he !== void 0
                      ? ce(this.props, he, ae, Se, this._instanceProps, Ne)
                      : Se,
                  scrollTop:
                    ye !== void 0
                      ? se(this.props, ye, ae, Pe, this._instanceProps, Ue)
                      : Pe,
                });
              }),
              (Ae.componentDidMount = function () {
                var J = this.props,
                  ie = J.initialScrollLeft,
                  ae = J.initialScrollTop;
                if (this._outerRef != null) {
                  var he = this._outerRef;
                  typeof ie == 'number' && (he.scrollLeft = ie),
                    typeof ae == 'number' && (he.scrollTop = ae);
                }
                this._callPropsCallbacks();
              }),
              (Ae.componentDidUpdate = function () {
                var J = this.props.direction,
                  ie = this.state,
                  ae = ie.scrollLeft,
                  he = ie.scrollTop,
                  ye = ie.scrollUpdateWasRequested;
                if (ye && this._outerRef != null) {
                  var Ce = this._outerRef;
                  if (J === 'rtl')
                    switch (s()) {
                      case 'negative':
                        Ce.scrollLeft = -ae;
                        break;
                      case 'positive-ascending':
                        Ce.scrollLeft = ae;
                        break;
                      default:
                        var Oe = Ce.clientWidth,
                          Be = Ce.scrollWidth;
                        Ce.scrollLeft = Be - Oe - ae;
                        break;
                    }
                  else Ce.scrollLeft = Math.max(0, ae);
                  Ce.scrollTop = Math.max(0, he);
                }
                this._callPropsCallbacks();
              }),
              (Ae.componentWillUnmount = function () {
                this._resetIsScrollingTimeoutId !== null &&
                  B(this._resetIsScrollingTimeoutId);
              }),
              (Ae.render = function () {
                var J = this.props,
                  ie = J.children,
                  ae = J.className,
                  he = J.columnCount,
                  ye = J.direction,
                  Ce = J.height,
                  Oe = J.innerRef,
                  Be = J.innerElementType,
                  Ie = J.innerTagName,
                  xe = J.itemData,
                  _e = J.itemKey,
                  Se = _e === void 0 ? O : _e,
                  Pe = J.outerElementType,
                  Te = J.outerTagName,
                  be = J.rowCount,
                  Me = J.style,
                  Ue = J.useIsScrolling,
                  Ne = J.width,
                  Re = this.state.isScrolling,
                  je = this._getHorizontalRangeToRender(),
                  Le = je[0],
                  Fe = je[1],
                  We = this._getVerticalRangeToRender(),
                  ke = We[0],
                  $e = We[1],
                  Ge = [];
                if (he > 0 && be)
                  for (var ze = ke; ze <= $e; ze++)
                    for (var Ke = Le; Ke <= Fe; Ke++)
                      Ge.push(
                        Object(b.createElement)(ie, {
                          columnIndex: Ke,
                          data: xe,
                          isScrolling: Ue ? Re : void 0,
                          key: Se({ columnIndex: Ke, data: xe, rowIndex: ze }),
                          rowIndex: ze,
                          style: this._getItemStyle(ze, Ke),
                        }),
                      );
                var Je = ne(this.props, this._instanceProps),
                  Qe = re(this.props, this._instanceProps);
                return Object(b.createElement)(
                  Pe || Te || 'div',
                  {
                    className: ae,
                    onScroll: this._onScroll,
                    ref: this._outerRefSetter,
                    style: Object(t.default)(
                      {
                        position: 'relative',
                        height: Ce,
                        width: Ne,
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        willChange: 'transform',
                        direction: ye,
                      },
                      Me,
                    ),
                  },
                  Object(b.createElement)(Be || Ie || 'div', {
                    children: Ge,
                    ref: Oe,
                    style: {
                      height: Je,
                      pointerEvents: Re ? 'none' : void 0,
                      width: Qe,
                    },
                  }),
                );
              }),
              (Ae._callPropsCallbacks = function () {
                var J = this.props,
                  ie = J.columnCount,
                  ae = J.onItemsRendered,
                  he = J.onScroll,
                  ye = J.rowCount;
                if (typeof ae == 'function' && ie > 0 && ye > 0) {
                  var Ce = this._getHorizontalRangeToRender(),
                    Oe = Ce[0],
                    Be = Ce[1],
                    Ie = Ce[2],
                    xe = Ce[3],
                    _e = this._getVerticalRangeToRender(),
                    Se = _e[0],
                    Pe = _e[1],
                    Te = _e[2],
                    be = _e[3];
                  this._callOnItemsRendered(Oe, Be, Se, Pe, Ie, xe, Te, be);
                }
                if (typeof he == 'function') {
                  var Me = this.state,
                    Ue = Me.horizontalScrollDirection,
                    Ne = Me.scrollLeft,
                    Re = Me.scrollTop,
                    je = Me.scrollUpdateWasRequested,
                    Le = Me.verticalScrollDirection;
                  this._callOnScroll(Ne, Re, Ue, Le, je);
                }
              }),
              (Ae._getHorizontalRangeToRender = function () {
                var J = this.props,
                  ie = J.columnCount,
                  ae = J.overscanColumnCount,
                  he = J.overscanColumnsCount,
                  ye = J.overscanCount,
                  Ce = J.rowCount,
                  Oe = this.state,
                  Be = Oe.horizontalScrollDirection,
                  Ie = Oe.isScrolling,
                  xe = Oe.scrollLeft,
                  _e = ae || he || ye || 1;
                if (ie === 0 || Ce === 0) return [0, 0, 0, 0];
                var Se = $(this.props, xe, this._instanceProps),
                  Pe = te(this.props, Se, xe, this._instanceProps),
                  Te = !Ie || Be === 'backward' ? Math.max(1, _e) : 1,
                  be = !Ie || Be === 'forward' ? Math.max(1, _e) : 1;
                return [
                  Math.max(0, Se - Te),
                  Math.max(0, Math.min(ie - 1, Pe + be)),
                  Se,
                  Pe,
                ];
              }),
              (Ae._getVerticalRangeToRender = function () {
                var J = this.props,
                  ie = J.columnCount,
                  ae = J.overscanCount,
                  he = J.overscanRowCount,
                  ye = J.overscanRowsCount,
                  Ce = J.rowCount,
                  Oe = this.state,
                  Be = Oe.isScrolling,
                  Ie = Oe.verticalScrollDirection,
                  xe = Oe.scrollTop,
                  _e = he || ye || ae || 1;
                if (ie === 0 || Ce === 0) return [0, 0, 0, 0];
                var Se = ge(this.props, xe, this._instanceProps),
                  Pe = pe(this.props, Se, xe, this._instanceProps),
                  Te = !Be || Ie === 'backward' ? Math.max(1, _e) : 1,
                  be = !Be || Ie === 'forward' ? Math.max(1, _e) : 1;
                return [
                  Math.max(0, Se - Te),
                  Math.max(0, Math.min(Ce - 1, Pe + be)),
                  Se,
                  Pe,
                ];
              }),
              Ee
            );
          })(b.PureComponent)),
          (N.defaultProps = {
            direction: 'ltr',
            itemData: void 0,
            useIsScrolling: !1,
          }),
          V
        );
      }
      var A = function (N, V) {
          N.children,
            N.direction,
            N.height,
            N.innerTagName,
            N.outerTagName,
            N.overscanColumnsCount,
            N.overscanCount,
            N.overscanRowsCount,
            N.width,
            V.instance;
        },
        l = 50,
        c = function (N, V) {
          var X = N.rowCount,
            $ = V.rowMetadataMap,
            te = V.estimatedRowHeight,
            Q = V.lastMeasuredRowIndex,
            ne = 0;
          if ((Q >= X && (Q = X - 1), Q >= 0)) {
            var re = $[Q];
            ne = re.offset + re.size;
          }
          var ce = X - Q - 1,
            se = ce * te;
          return ne + se;
        },
        h = function (N, V) {
          var X = N.columnCount,
            $ = V.columnMetadataMap,
            te = V.estimatedColumnWidth,
            Q = V.lastMeasuredColumnIndex,
            ne = 0;
          if ((Q >= X && (Q = X - 1), Q >= 0)) {
            var re = $[Q];
            ne = re.offset + re.size;
          }
          var ce = X - Q - 1,
            se = ce * te;
          return ne + se;
        },
        f = function (N, V, X, $) {
          var te, Q, ne;
          if (
            (N === 'column'
              ? ((te = $.columnMetadataMap),
                (Q = V.columnWidth),
                (ne = $.lastMeasuredColumnIndex))
              : ((te = $.rowMetadataMap),
                (Q = V.rowHeight),
                (ne = $.lastMeasuredRowIndex)),
            X > ne)
          ) {
            var re = 0;
            if (ne >= 0) {
              var ce = te[ne];
              re = ce.offset + ce.size;
            }
            for (var se = ne + 1; se <= X; se++) {
              var fe = Q(se);
              (te[se] = { offset: re, size: fe }), (re += fe);
            }
            N === 'column'
              ? ($.lastMeasuredColumnIndex = X)
              : ($.lastMeasuredRowIndex = X);
          }
          return te[X];
        },
        E = function (N, V, X, $) {
          var te, Q;
          N === 'column'
            ? ((te = X.columnMetadataMap), (Q = X.lastMeasuredColumnIndex))
            : ((te = X.rowMetadataMap), (Q = X.lastMeasuredRowIndex));
          var ne = Q > 0 ? te[Q].offset : 0;
          return ne >= $ ? D(N, V, X, Q, 0, $) : I(N, V, X, Math.max(0, Q), $);
        },
        D = function (N, V, X, $, te, Q) {
          for (; te <= $; ) {
            var ne = te + Math.floor(($ - te) / 2),
              re = f(N, V, ne, X).offset;
            if (re === Q) return ne;
            re < Q ? (te = ne + 1) : re > Q && ($ = ne - 1);
          }
          return te > 0 ? te - 1 : 0;
        },
        I = function (N, V, X, $, te) {
          for (
            var Q = N === 'column' ? V.columnCount : V.rowCount, ne = 1;
            $ < Q && f(N, V, $, X).offset < te;

          )
            ($ += ne), (ne *= 2);
          return D(N, V, X, Math.min($, Q - 1), Math.floor($ / 2), te);
        },
        T = function (N, V, X, $, te, Q, ne) {
          var re = N === 'column' ? V.width : V.height,
            ce = f(N, V, X, Q),
            se = N === 'column' ? h(V, Q) : c(V, Q),
            fe = Math.max(0, Math.min(se - re, ce.offset)),
            de = Math.max(0, ce.offset - re + ne + ce.size);
          switch (
            ($ === 'smart' &&
              (te >= de - re && te <= fe + re ? ($ = 'auto') : ($ = 'center')),
            $)
          ) {
            case 'start':
              return fe;
            case 'end':
              return de;
            case 'center':
              return Math.round(de + (fe - de) / 2);
            case 'auto':
            default:
              return te >= de && te <= fe ? te : de > fe || te < de ? de : fe;
          }
        },
        R = v({
          getColumnOffset: function (N, V, X) {
            return f('column', N, V, X).offset;
          },
          getColumnStartIndexForOffset: function (N, V, X) {
            return E('column', N, X, V);
          },
          getColumnStopIndexForStartIndex: function (N, V, X, $) {
            for (
              var te = N.columnCount,
                Q = N.width,
                ne = f('column', N, V, $),
                re = X + Q,
                ce = ne.offset + ne.size,
                se = V;
              se < te - 1 && ce < re;

            )
              se++, (ce += f('column', N, se, $).size);
            return se;
          },
          getColumnWidth: function (N, V, X) {
            return X.columnMetadataMap[V].size;
          },
          getEstimatedTotalHeight: c,
          getEstimatedTotalWidth: h,
          getOffsetForColumnAndAlignment: function (N, V, X, $, te, Q) {
            return T('column', N, V, X, $, te, Q);
          },
          getOffsetForRowAndAlignment: function (N, V, X, $, te, Q) {
            return T('row', N, V, X, $, te, Q);
          },
          getRowOffset: function (N, V, X) {
            return f('row', N, V, X).offset;
          },
          getRowHeight: function (N, V, X) {
            return X.rowMetadataMap[V].size;
          },
          getRowStartIndexForOffset: function (N, V, X) {
            return E('row', N, X, V);
          },
          getRowStopIndexForStartIndex: function (N, V, X, $) {
            for (
              var te = N.rowCount,
                Q = N.height,
                ne = f('row', N, V, $),
                re = X + Q,
                ce = ne.offset + ne.size,
                se = V;
              se < te - 1 && ce < re;

            )
              se++, (ce += f('row', N, se, $).size);
            return se;
          },
          initInstanceProps: function (N, V) {
            var X = N,
              $ = X.estimatedColumnWidth,
              te = X.estimatedRowHeight,
              Q = {
                columnMetadataMap: {},
                estimatedColumnWidth: $ || l,
                estimatedRowHeight: te || l,
                lastMeasuredColumnIndex: -1,
                lastMeasuredRowIndex: -1,
                rowMetadataMap: {},
              };
            return (
              (V.resetAfterColumnIndex = function (ne, re) {
                re === void 0 && (re = !0),
                  V.resetAfterIndices({
                    columnIndex: ne,
                    shouldForceUpdate: re,
                  });
              }),
              (V.resetAfterRowIndex = function (ne, re) {
                re === void 0 && (re = !0),
                  V.resetAfterIndices({ rowIndex: ne, shouldForceUpdate: re });
              }),
              (V.resetAfterIndices = function (ne) {
                var re = ne.columnIndex,
                  ce = ne.rowIndex,
                  se = ne.shouldForceUpdate,
                  fe = se === void 0 ? !0 : se;
                typeof re == 'number' &&
                  (Q.lastMeasuredColumnIndex = Math.min(
                    Q.lastMeasuredColumnIndex,
                    re - 1,
                  )),
                  typeof ce == 'number' &&
                    (Q.lastMeasuredRowIndex = Math.min(
                      Q.lastMeasuredRowIndex,
                      ce - 1,
                    )),
                  V._getItemStyleCache(-1),
                  fe && V.forceUpdate();
              }),
              Q
            );
          },
          shouldResetStyleCacheOnItemSizeChange: !1,
          validateProps: function (N) {
            N.columnWidth, N.rowHeight;
          },
        }),
        j = 150,
        z = function (N, V) {
          return N;
        };
      function W(G) {
        var N,
          V,
          X = G.getItemOffset,
          $ = G.getEstimatedTotalSize,
          te = G.getItemSize,
          Q = G.getOffsetForIndexAndAlignment,
          ne = G.getStartIndexForOffset,
          re = G.getStopIndexForStartIndex,
          ce = G.initInstanceProps,
          se = G.shouldResetStyleCacheOnItemSizeChange,
          fe = G.validateProps;
        return (
          (V = N = (function (de) {
            Object(n.default)(ge, de);
            function ge(me) {
              var oe;
              return (
                (oe = de.call(this, me) || this),
                (oe._instanceProps = ce(
                  oe.props,
                  Object(r.default)(Object(r.default)(oe)),
                )),
                (oe._outerRef = void 0),
                (oe._resetIsScrollingTimeoutId = null),
                (oe.state = {
                  instance: Object(r.default)(Object(r.default)(oe)),
                  isScrolling: !1,
                  scrollDirection: 'forward',
                  scrollOffset:
                    typeof oe.props.initialScrollOffset == 'number'
                      ? oe.props.initialScrollOffset
                      : 0,
                  scrollUpdateWasRequested: !1,
                }),
                (oe._callOnItemsRendered = void 0),
                (oe._callOnItemsRendered = Object(C.default)(function (
                  ve,
                  le,
                  Ee,
                  Ae,
                ) {
                  return oe.props.onItemsRendered({
                    overscanStartIndex: ve,
                    overscanStopIndex: le,
                    visibleStartIndex: Ee,
                    visibleStopIndex: Ae,
                  });
                })),
                (oe._callOnScroll = void 0),
                (oe._callOnScroll = Object(C.default)(function (ve, le, Ee) {
                  return oe.props.onScroll({
                    scrollDirection: ve,
                    scrollOffset: le,
                    scrollUpdateWasRequested: Ee,
                  });
                })),
                (oe._getItemStyle = void 0),
                (oe._getItemStyle = function (ve) {
                  var le = oe.props,
                    Ee = le.direction,
                    Ae = le.itemSize,
                    ue = le.layout,
                    J = oe._getItemStyleCache(se && Ae, se && ue, se && Ee),
                    ie;
                  if (J.hasOwnProperty(ve)) ie = J[ve];
                  else {
                    var ae,
                      he = X(oe.props, ve, oe._instanceProps),
                      ye = te(oe.props, ve, oe._instanceProps),
                      Ce = Ee === 'horizontal' || ue === 'horizontal';
                    J[ve] = ie =
                      ((ae = { position: 'absolute' }),
                      (ae[Ee === 'rtl' ? 'right' : 'left'] = Ce ? he : 0),
                      (ae.top = Ce ? 0 : he),
                      (ae.height = Ce ? '100%' : ye),
                      (ae.width = Ce ? ye : '100%'),
                      ae);
                  }
                  return ie;
                }),
                (oe._getItemStyleCache = void 0),
                (oe._getItemStyleCache = Object(C.default)(function (
                  ve,
                  le,
                  Ee,
                ) {
                  return {};
                })),
                (oe._onScrollHorizontal = function (ve) {
                  var le = ve.currentTarget,
                    Ee = le.clientWidth,
                    Ae = le.scrollLeft,
                    ue = le.scrollWidth;
                  Object(m.flushSync)(function () {
                    oe.setState(function (J) {
                      if (J.scrollOffset === Ae) return null;
                      var ie = oe.props.direction,
                        ae = Ae;
                      if (ie === 'rtl')
                        switch (s()) {
                          case 'negative':
                            ae = -Ae;
                            break;
                          case 'positive-descending':
                            ae = ue - Ee - Ae;
                            break;
                        }
                      return (
                        (ae = Math.max(0, Math.min(ae, ue - Ee))),
                        {
                          isScrolling: !0,
                          scrollDirection:
                            J.scrollOffset < Ae ? 'forward' : 'backward',
                          scrollOffset: ae,
                          scrollUpdateWasRequested: !1,
                        }
                      );
                    }, oe._resetIsScrollingDebounced);
                  });
                }),
                (oe._onScrollVertical = function (ve) {
                  var le = ve.currentTarget,
                    Ee = le.clientHeight,
                    Ae = le.scrollHeight,
                    ue = le.scrollTop;
                  Object(m.flushSync)(function () {
                    oe.setState(function (J) {
                      if (J.scrollOffset === ue) return null;
                      var ie = Math.max(0, Math.min(ue, Ae - Ee));
                      return {
                        isScrolling: !0,
                        scrollDirection:
                          J.scrollOffset < ie ? 'forward' : 'backward',
                        scrollOffset: ie,
                        scrollUpdateWasRequested: !1,
                      };
                    }, oe._resetIsScrollingDebounced);
                  });
                }),
                (oe._outerRefSetter = function (ve) {
                  var le = oe.props.outerRef;
                  (oe._outerRef = ve),
                    typeof le == 'function'
                      ? le(ve)
                      : le != null &&
                        p(le) === 'object' &&
                        le.hasOwnProperty('current') &&
                        (le.current = ve);
                }),
                (oe._resetIsScrollingDebounced = function () {
                  oe._resetIsScrollingTimeoutId !== null &&
                    B(oe._resetIsScrollingTimeoutId),
                    (oe._resetIsScrollingTimeoutId = d(
                      oe._resetIsScrolling,
                      j,
                    ));
                }),
                (oe._resetIsScrolling = function () {
                  (oe._resetIsScrollingTimeoutId = null),
                    oe.setState({ isScrolling: !1 }, function () {
                      oe._getItemStyleCache(-1, null);
                    });
                }),
                oe
              );
            }
            ge.getDerivedStateFromProps = function (oe, ve) {
              return K(oe, ve), fe(oe), null;
            };
            var pe = ge.prototype;
            return (
              (pe.scrollTo = function (oe) {
                (oe = Math.max(0, oe)),
                  this.setState(function (ve) {
                    return ve.scrollOffset === oe
                      ? null
                      : {
                          scrollDirection:
                            ve.scrollOffset < oe ? 'forward' : 'backward',
                          scrollOffset: oe,
                          scrollUpdateWasRequested: !0,
                        };
                  }, this._resetIsScrollingDebounced);
              }),
              (pe.scrollToItem = function (oe, ve) {
                ve === void 0 && (ve = 'auto');
                var le = this.props.itemCount,
                  Ee = this.state.scrollOffset;
                (oe = Math.max(0, Math.min(oe, le - 1))),
                  this.scrollTo(Q(this.props, oe, ve, Ee, this._instanceProps));
              }),
              (pe.componentDidMount = function () {
                var oe = this.props,
                  ve = oe.direction,
                  le = oe.initialScrollOffset,
                  Ee = oe.layout;
                if (typeof le == 'number' && this._outerRef != null) {
                  var Ae = this._outerRef;
                  ve === 'horizontal' || Ee === 'horizontal'
                    ? (Ae.scrollLeft = le)
                    : (Ae.scrollTop = le);
                }
                this._callPropsCallbacks();
              }),
              (pe.componentDidUpdate = function () {
                var oe = this.props,
                  ve = oe.direction,
                  le = oe.layout,
                  Ee = this.state,
                  Ae = Ee.scrollOffset,
                  ue = Ee.scrollUpdateWasRequested;
                if (ue && this._outerRef != null) {
                  var J = this._outerRef;
                  if (ve === 'horizontal' || le === 'horizontal')
                    if (ve === 'rtl')
                      switch (s()) {
                        case 'negative':
                          J.scrollLeft = -Ae;
                          break;
                        case 'positive-ascending':
                          J.scrollLeft = Ae;
                          break;
                        default:
                          var ie = J.clientWidth,
                            ae = J.scrollWidth;
                          J.scrollLeft = ae - ie - Ae;
                          break;
                      }
                    else J.scrollLeft = Ae;
                  else J.scrollTop = Ae;
                }
                this._callPropsCallbacks();
              }),
              (pe.componentWillUnmount = function () {
                this._resetIsScrollingTimeoutId !== null &&
                  B(this._resetIsScrollingTimeoutId);
              }),
              (pe.render = function () {
                var oe = this.props,
                  ve = oe.children,
                  le = oe.className,
                  Ee = oe.direction,
                  Ae = oe.height,
                  ue = oe.innerRef,
                  J = oe.innerElementType,
                  ie = oe.innerTagName,
                  ae = oe.itemCount,
                  he = oe.itemData,
                  ye = oe.itemKey,
                  Ce = ye === void 0 ? z : ye,
                  Oe = oe.layout,
                  Be = oe.outerElementType,
                  Ie = oe.outerTagName,
                  xe = oe.style,
                  _e = oe.useIsScrolling,
                  Se = oe.width,
                  Pe = this.state.isScrolling,
                  Te = Ee === 'horizontal' || Oe === 'horizontal',
                  be = Te ? this._onScrollHorizontal : this._onScrollVertical,
                  Me = this._getRangeToRender(),
                  Ue = Me[0],
                  Ne = Me[1],
                  Re = [];
                if (ae > 0)
                  for (var je = Ue; je <= Ne; je++)
                    Re.push(
                      Object(b.createElement)(ve, {
                        data: he,
                        key: Ce(je, he),
                        index: je,
                        isScrolling: _e ? Pe : void 0,
                        style: this._getItemStyle(je),
                      }),
                    );
                var Le = $(this.props, this._instanceProps);
                return Object(b.createElement)(
                  Be || Ie || 'div',
                  {
                    className: le,
                    onScroll: be,
                    ref: this._outerRefSetter,
                    style: Object(t.default)(
                      {
                        position: 'relative',
                        height: Ae,
                        width: Se,
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        willChange: 'transform',
                        direction: Ee,
                      },
                      xe,
                    ),
                  },
                  Object(b.createElement)(J || ie || 'div', {
                    children: Re,
                    ref: ue,
                    style: {
                      height: Te ? '100%' : Le,
                      pointerEvents: Pe ? 'none' : void 0,
                      width: Te ? Le : '100%',
                    },
                  }),
                );
              }),
              (pe._callPropsCallbacks = function () {
                if (typeof this.props.onItemsRendered == 'function') {
                  var oe = this.props.itemCount;
                  if (oe > 0) {
                    var ve = this._getRangeToRender(),
                      le = ve[0],
                      Ee = ve[1],
                      Ae = ve[2],
                      ue = ve[3];
                    this._callOnItemsRendered(le, Ee, Ae, ue);
                  }
                }
                if (typeof this.props.onScroll == 'function') {
                  var J = this.state,
                    ie = J.scrollDirection,
                    ae = J.scrollOffset,
                    he = J.scrollUpdateWasRequested;
                  this._callOnScroll(ie, ae, he);
                }
              }),
              (pe._getRangeToRender = function () {
                var oe = this.props,
                  ve = oe.itemCount,
                  le = oe.overscanCount,
                  Ee = this.state,
                  Ae = Ee.isScrolling,
                  ue = Ee.scrollDirection,
                  J = Ee.scrollOffset;
                if (ve === 0) return [0, 0, 0, 0];
                var ie = ne(this.props, J, this._instanceProps),
                  ae = re(this.props, ie, J, this._instanceProps),
                  he = !Ae || ue === 'backward' ? Math.max(1, le) : 1,
                  ye = !Ae || ue === 'forward' ? Math.max(1, le) : 1;
                return [
                  Math.max(0, ie - he),
                  Math.max(0, Math.min(ve - 1, ae + ye)),
                  ie,
                  ae,
                ];
              }),
              ge
            );
          })(b.PureComponent)),
          (N.defaultProps = {
            direction: 'ltr',
            itemData: void 0,
            layout: 'vertical',
            overscanCount: 2,
            useIsScrolling: !1,
          }),
          V
        );
      }
      var K = function (N, V) {
          N.children,
            N.direction,
            N.height,
            N.layout,
            N.innerTagName,
            N.outerTagName,
            N.width,
            V.instance;
        },
        S = 50,
        F = function (N, V, X) {
          var $ = N,
            te = $.itemSize,
            Q = X.itemMetadataMap,
            ne = X.lastMeasuredIndex;
          if (V > ne) {
            var re = 0;
            if (ne >= 0) {
              var ce = Q[ne];
              re = ce.offset + ce.size;
            }
            for (var se = ne + 1; se <= V; se++) {
              var fe = te(se);
              (Q[se] = { offset: re, size: fe }), (re += fe);
            }
            X.lastMeasuredIndex = V;
          }
          return Q[V];
        },
        k = function (N, V, X) {
          var $ = V.itemMetadataMap,
            te = V.lastMeasuredIndex,
            Q = te > 0 ? $[te].offset : 0;
          return Q >= X ? H(N, V, te, 0, X) : w(N, V, Math.max(0, te), X);
        },
        H = function (N, V, X, $, te) {
          for (; $ <= X; ) {
            var Q = $ + Math.floor((X - $) / 2),
              ne = F(N, Q, V).offset;
            if (ne === te) return Q;
            ne < te ? ($ = Q + 1) : ne > te && (X = Q - 1);
          }
          return $ > 0 ? $ - 1 : 0;
        },
        w = function (N, V, X, $) {
          for (var te = N.itemCount, Q = 1; X < te && F(N, X, V).offset < $; )
            (X += Q), (Q *= 2);
          return H(N, V, Math.min(X, te - 1), Math.floor(X / 2), $);
        },
        L = function (N, V) {
          var X = N.itemCount,
            $ = V.itemMetadataMap,
            te = V.estimatedItemSize,
            Q = V.lastMeasuredIndex,
            ne = 0;
          if ((Q >= X && (Q = X - 1), Q >= 0)) {
            var re = $[Q];
            ne = re.offset + re.size;
          }
          var ce = X - Q - 1,
            se = ce * te;
          return ne + se;
        },
        M = W({
          getItemOffset: function (N, V, X) {
            return F(N, V, X).offset;
          },
          getItemSize: function (N, V, X) {
            return X.itemMetadataMap[V].size;
          },
          getEstimatedTotalSize: L,
          getOffsetForIndexAndAlignment: function (N, V, X, $, te) {
            var Q = N.direction,
              ne = N.height,
              re = N.layout,
              ce = N.width,
              se = Q === 'horizontal' || re === 'horizontal',
              fe = se ? ce : ne,
              de = F(N, V, te),
              ge = L(N, te),
              pe = Math.max(0, Math.min(ge - fe, de.offset)),
              me = Math.max(0, de.offset - fe + de.size);
            switch (
              (X === 'smart' &&
                ($ >= me - fe && $ <= pe + fe ? (X = 'auto') : (X = 'center')),
              X)
            ) {
              case 'start':
                return pe;
              case 'end':
                return me;
              case 'center':
                return Math.round(me + (pe - me) / 2);
              case 'auto':
              default:
                return $ >= me && $ <= pe ? $ : $ < me ? me : pe;
            }
          },
          getStartIndexForOffset: function (N, V, X) {
            return k(N, X, V);
          },
          getStopIndexForStartIndex: function (N, V, X, $) {
            for (
              var te = N.direction,
                Q = N.height,
                ne = N.itemCount,
                re = N.layout,
                ce = N.width,
                se = te === 'horizontal' || re === 'horizontal',
                fe = se ? ce : Q,
                de = F(N, V, $),
                ge = X + fe,
                pe = de.offset + de.size,
                me = V;
              me < ne - 1 && pe < ge;

            )
              me++, (pe += F(N, me, $).size);
            return me;
          },
          initInstanceProps: function (N, V) {
            var X = N,
              $ = X.estimatedItemSize,
              te = {
                itemMetadataMap: {},
                estimatedItemSize: $ || S,
                lastMeasuredIndex: -1,
              };
            return (
              (V.resetAfterIndex = function (Q, ne) {
                ne === void 0 && (ne = !0),
                  (te.lastMeasuredIndex = Math.min(
                    te.lastMeasuredIndex,
                    Q - 1,
                  )),
                  V._getItemStyleCache(-1),
                  ne && V.forceUpdate();
              }),
              te
            );
          },
          shouldResetStyleCacheOnItemSizeChange: !1,
          validateProps: function (N) {
            N.itemSize;
          },
        }),
        U = v({
          getColumnOffset: function (N, V) {
            var X = N.columnWidth;
            return V * X;
          },
          getColumnWidth: function (N, V) {
            var X = N.columnWidth;
            return X;
          },
          getRowOffset: function (N, V) {
            var X = N.rowHeight;
            return V * X;
          },
          getRowHeight: function (N, V) {
            var X = N.rowHeight;
            return X;
          },
          getEstimatedTotalHeight: function (N) {
            var V = N.rowCount,
              X = N.rowHeight;
            return X * V;
          },
          getEstimatedTotalWidth: function (N) {
            var V = N.columnCount,
              X = N.columnWidth;
            return X * V;
          },
          getOffsetForColumnAndAlignment: function (N, V, X, $, te, Q) {
            var ne = N.columnCount,
              re = N.columnWidth,
              ce = N.width,
              se = Math.max(0, ne * re - ce),
              fe = Math.min(se, V * re),
              de = Math.max(0, V * re - ce + Q + re);
            switch (
              (X === 'smart' &&
                ($ >= de - ce && $ <= fe + ce ? (X = 'auto') : (X = 'center')),
              X)
            ) {
              case 'start':
                return fe;
              case 'end':
                return de;
              case 'center':
                var ge = Math.round(de + (fe - de) / 2);
                return ge < Math.ceil(ce / 2)
                  ? 0
                  : ge > se + Math.floor(ce / 2)
                  ? se
                  : ge;
              case 'auto':
              default:
                return $ >= de && $ <= fe ? $ : de > fe || $ < de ? de : fe;
            }
          },
          getOffsetForRowAndAlignment: function (N, V, X, $, te, Q) {
            var ne = N.rowHeight,
              re = N.height,
              ce = N.rowCount,
              se = Math.max(0, ce * ne - re),
              fe = Math.min(se, V * ne),
              de = Math.max(0, V * ne - re + Q + ne);
            switch (
              (X === 'smart' &&
                ($ >= de - re && $ <= fe + re ? (X = 'auto') : (X = 'center')),
              X)
            ) {
              case 'start':
                return fe;
              case 'end':
                return de;
              case 'center':
                var ge = Math.round(de + (fe - de) / 2);
                return ge < Math.ceil(re / 2)
                  ? 0
                  : ge > se + Math.floor(re / 2)
                  ? se
                  : ge;
              case 'auto':
              default:
                return $ >= de && $ <= fe ? $ : de > fe || $ < de ? de : fe;
            }
          },
          getColumnStartIndexForOffset: function (N, V) {
            var X = N.columnWidth,
              $ = N.columnCount;
            return Math.max(0, Math.min($ - 1, Math.floor(V / X)));
          },
          getColumnStopIndexForStartIndex: function (N, V, X) {
            var $ = N.columnWidth,
              te = N.columnCount,
              Q = N.width,
              ne = V * $,
              re = Math.ceil((Q + X - ne) / $);
            return Math.max(0, Math.min(te - 1, V + re - 1));
          },
          getRowStartIndexForOffset: function (N, V) {
            var X = N.rowHeight,
              $ = N.rowCount;
            return Math.max(0, Math.min($ - 1, Math.floor(V / X)));
          },
          getRowStopIndexForStartIndex: function (N, V, X) {
            var $ = N.rowHeight,
              te = N.rowCount,
              Q = N.height,
              ne = V * $,
              re = Math.ceil((Q + X - ne) / $);
            return Math.max(0, Math.min(te - 1, V + re - 1));
          },
          initInstanceProps: function (N) {},
          shouldResetStyleCacheOnItemSizeChange: !0,
          validateProps: function (N) {
            N.columnWidth, N.rowHeight;
          },
        }),
        Y = W({
          getItemOffset: function (N, V) {
            var X = N.itemSize;
            return V * X;
          },
          getItemSize: function (N, V) {
            var X = N.itemSize;
            return X;
          },
          getEstimatedTotalSize: function (N) {
            var V = N.itemCount,
              X = N.itemSize;
            return X * V;
          },
          getOffsetForIndexAndAlignment: function (N, V, X, $) {
            var te = N.direction,
              Q = N.height,
              ne = N.itemCount,
              re = N.itemSize,
              ce = N.layout,
              se = N.width,
              fe = te === 'horizontal' || ce === 'horizontal',
              de = fe ? se : Q,
              ge = Math.max(0, ne * re - de),
              pe = Math.min(ge, V * re),
              me = Math.max(0, V * re - de + re);
            switch (
              (X === 'smart' &&
                ($ >= me - de && $ <= pe + de ? (X = 'auto') : (X = 'center')),
              X)
            ) {
              case 'start':
                return pe;
              case 'end':
                return me;
              case 'center': {
                var oe = Math.round(me + (pe - me) / 2);
                return oe < Math.ceil(de / 2)
                  ? 0
                  : oe > ge + Math.floor(de / 2)
                  ? ge
                  : oe;
              }
              case 'auto':
              default:
                return $ >= me && $ <= pe ? $ : $ < me ? me : pe;
            }
          },
          getStartIndexForOffset: function (N, V) {
            var X = N.itemCount,
              $ = N.itemSize;
            return Math.max(0, Math.min(X - 1, Math.floor(V / $)));
          },
          getStopIndexForStartIndex: function (N, V, X) {
            var $ = N.direction,
              te = N.height,
              Q = N.itemCount,
              ne = N.itemSize,
              re = N.layout,
              ce = N.width,
              se = $ === 'horizontal' || re === 'horizontal',
              fe = V * ne,
              de = se ? ce : te,
              ge = Math.ceil((de + X - fe) / ne);
            return Math.max(0, Math.min(Q - 1, V + ge - 1));
          },
          initInstanceProps: function (N) {},
          shouldResetStyleCacheOnItemSizeChange: !0,
          validateProps: function (N) {
            N.itemSize;
          },
        });
      function Z(G, N) {
        for (var V in G) if (!(V in N)) return !0;
        for (var X in N) if (G[X] !== N[X]) return !0;
        return !1;
      }
      function q(G, N) {
        var V = G.style,
          X = Object(y.default)(G, ['style']),
          $ = N.style,
          te = Object(y.default)(N, ['style']);
        return !Z(V, $) && !Z(X, te);
      }
      function ee(G, N) {
        return !q(this.props, G) || Z(this.state, N);
      }
    },
    '../react-devtools-shared/src/storage.js': function (g, o, e) {
      e.r(o),
        e.d(o, 'localStorageGetItem', function () {
          return t;
        }),
        e.d(o, 'localStorageRemoveItem', function () {
          return n;
        }),
        e.d(o, 'localStorageSetItem', function () {
          return r;
        }),
        e.d(o, 'sessionStorageGetItem', function () {
          return C;
        }),
        e.d(o, 'sessionStorageRemoveItem', function () {
          return b;
        }),
        e.d(o, 'sessionStorageSetItem', function () {
          return m;
        });
      function t(y) {
        try {
          return localStorage.getItem(y);
        } catch {
          return null;
        }
      }
      function n(y) {
        try {
          localStorage.removeItem(y);
        } catch {}
      }
      function r(y, p) {
        try {
          return localStorage.setItem(y, p);
        } catch {}
      }
      function C(y) {
        try {
          return sessionStorage.getItem(y);
        } catch {
          return null;
        }
      }
      function b(y) {
        try {
          sessionStorage.removeItem(y);
        } catch {}
      }
      function m(y, p) {
        try {
          return sessionStorage.setItem(y, p);
        } catch {}
      }
    },
    '../react-devtools-shared/src/types.js': function (g, o, e) {
      e.r(o),
        e.d(o, 'ElementTypeClass', function () {
          return t;
        }),
        e.d(o, 'ElementTypeContext', function () {
          return n;
        }),
        e.d(o, 'ElementTypeFunction', function () {
          return r;
        }),
        e.d(o, 'ElementTypeForwardRef', function () {
          return C;
        }),
        e.d(o, 'ElementTypeHostComponent', function () {
          return b;
        }),
        e.d(o, 'ElementTypeMemo', function () {
          return m;
        }),
        e.d(o, 'ElementTypeOtherOrUnknown', function () {
          return y;
        }),
        e.d(o, 'ElementTypeProfiler', function () {
          return p;
        }),
        e.d(o, 'ElementTypeRoot', function () {
          return x;
        }),
        e.d(o, 'ElementTypeSuspense', function () {
          return P;
        }),
        e.d(o, 'ElementTypeSuspenseList', function () {
          return B;
        }),
        e.d(o, 'ComponentFilterElementType', function () {
          return d;
        }),
        e.d(o, 'ComponentFilterDisplayName', function () {
          return i;
        }),
        e.d(o, 'ComponentFilterLocation', function () {
          return _;
        }),
        e.d(o, 'ComponentFilterHOC', function () {
          return a;
        });
      var t = 1,
        n = 2,
        r = 5,
        C = 6,
        b = 7,
        m = 8,
        y = 9,
        p = 10,
        x = 11,
        P = 12,
        B = 13,
        d = 1,
        i = 2,
        _ = 3,
        a = 4;
    },
    '../react-devtools-shared/src/utils.js': function (g, o, e) {
      e.r(o),
        e.d(o, 'getDisplayName', function () {
          return O;
        }),
        e.d(o, 'getUID', function () {
          return A;
        }),
        e.d(o, 'utfDecodeString', function () {
          return l;
        }),
        e.d(o, 'utfEncodeString', function () {
          return c;
        }),
        e.d(o, 'printOperationsArray', function () {
          return h;
        }),
        e.d(o, 'getDefaultComponentFilters', function () {
          return f;
        }),
        e.d(o, 'getSavedComponentFilters', function () {
          return E;
        }),
        e.d(o, 'saveComponentFilters', function () {
          return D;
        }),
        e.d(o, 'getAppendComponentStack', function () {
          return I;
        }),
        e.d(o, 'setAppendComponentStack', function () {
          return T;
        }),
        e.d(o, 'separateDisplayNameAndHOCs', function () {
          return R;
        }),
        e.d(o, 'shallowDiffers', function () {
          return j;
        }),
        e.d(o, 'getInObject', function () {
          return z;
        }),
        e.d(o, 'setInObject', function () {
          return W;
        }),
        e.d(o, 'getDataType', function () {
          return K;
        }),
        e.d(o, 'getDisplayNameForReactElement', function () {
          return S;
        }),
        e.d(o, 'formatDataForPreview', function () {
          return H;
        });
      var t = e('../../node_modules/es6-symbol/index.js'),
        n = e.n(t),
        r = e('../../node_modules/lru-cache/index.js'),
        C = e.n(r),
        b = e('react-is'),
        m = e('../react-devtools-shared/src/constants.js'),
        y = e('../react-devtools-shared/src/types.js'),
        p = e('../react-devtools-shared/src/storage.js'),
        x = e('../react-devtools-shared/src/devtools/views/utils.js'),
        P = e('../react-devtools-shared/src/hydration.js');
      function B(w) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (B = function (M) {
                return typeof M;
              })
            : (B = function (M) {
                return M &&
                  typeof Symbol == 'function' &&
                  M.constructor === Symbol &&
                  M !== Symbol.prototype
                  ? 'symbol'
                  : typeof M;
              }),
          B(w)
        );
      }
      function d(w) {
        return a(w) || _(w) || i();
      }
      function i() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      }
      function _(w) {
        if (
          Symbol.iterator in Object(w) ||
          Object.prototype.toString.call(w) === '[object Arguments]'
        )
          return Array.from(w);
      }
      function a(w) {
        if (Array.isArray(w)) {
          for (var L = 0, M = new Array(w.length); L < w.length; L++)
            M[L] = w[L];
          return M;
        }
      }
      var s = new WeakMap(),
        u = new C.a({ max: 1e3 });
      function O(w) {
        var L =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : 'Anonymous',
          M = s.get(w);
        if (M != null) return M;
        var U = L;
        return (
          typeof w.displayName == 'string'
            ? (U = w.displayName)
            : typeof w.name == 'string' && w.name !== '' && (U = w.name),
          s.set(w, U),
          U
        );
      }
      var v = 0;
      function A() {
        return ++v;
      }
      function l(w) {
        return String.fromCodePoint.apply(String, d(w));
      }
      function c(w) {
        var L = u.get(w);
        if (L !== void 0) return L;
        for (var M = new Array(w.length), U = 0; U < w.length; U++)
          M[U] = w.codePointAt(U);
        return u.set(w, M), M;
      }
      function h(w) {
        for (
          var L = w[0],
            M = w[1],
            U = ['opertions for renderer:'.concat(L, ' and root:').concat(M)],
            Y = 2,
            Z = [null],
            q = w[Y++],
            ee = Y + q;
          Y < ee;

        ) {
          var G = w[Y++],
            N = l(w.slice(Y, Y + G));
          Z.push(N), (Y += G);
        }
        for (; Y < w.length; ) {
          var V = w[Y];
          switch (V) {
            case m.TREE_OPERATION_ADD: {
              var X = w[Y + 1],
                $ = w[Y + 2];
              if (((Y += 3), $ === y.ElementTypeRoot))
                U.push('Add new root node '.concat(X)), Y++, Y++;
              else {
                var te = w[Y];
                Y++, Y++;
                var Q = w[Y],
                  ne = Z[Q];
                Y++,
                  Y++,
                  U.push(
                    'Add node '
                      .concat(X, ' (')
                      .concat(ne || 'null', ') as child of ')
                      .concat(te),
                  );
              }
              break;
            }
            case m.TREE_OPERATION_REMOVE: {
              var re = w[Y + 1];
              Y += 2;
              for (var ce = 0; ce < re; ce++) {
                var se = w[Y];
                (Y += 1), U.push('Remove node '.concat(se));
              }
              break;
            }
            case m.TREE_OPERATION_REORDER_CHILDREN: {
              var fe = w[Y + 1],
                de = w[Y + 2];
              Y += 3;
              var ge = w.slice(Y, Y + de);
              (Y += de),
                U.push(
                  'Re-order node '
                    .concat(fe, ' children ')
                    .concat(ge.join(',')),
                );
              break;
            }
            case m.TREE_OPERATION_UPDATE_TREE_BASE_DURATION:
              Y += 3;
              break;
            default:
              throw Error('Unsupported Bridge operation '.concat(V));
          }
        }
        console.log(
          U.join(`
  `),
        );
      }
      function f() {
        return [
          {
            type: y.ComponentFilterElementType,
            value: y.ElementTypeHostComponent,
            isEnabled: !0,
          },
        ];
      }
      function E() {
        try {
          var w = Object(p.localStorageGetItem)(
            m.LOCAL_STORAGE_FILTER_PREFERENCES_KEY,
          );
          if (w != null) return JSON.parse(w);
        } catch {}
        return f();
      }
      function D(w) {
        Object(p.localStorageSetItem)(
          m.LOCAL_STORAGE_FILTER_PREFERENCES_KEY,
          JSON.stringify(w),
        );
      }
      function I() {
        try {
          var w = Object(p.localStorageGetItem)(
            m.LOCAL_STORAGE_SHOULD_PATCH_CONSOLE_KEY,
          );
          if (w != null) return JSON.parse(w);
        } catch {}
        return !0;
      }
      function T(w) {
        Object(p.localStorageSetItem)(
          m.LOCAL_STORAGE_SHOULD_PATCH_CONSOLE_KEY,
          JSON.stringify(w),
        );
      }
      function R(w, L) {
        if (w === null) return [null, null];
        var M = null;
        switch (L) {
          case y.ElementTypeClass:
          case y.ElementTypeForwardRef:
          case y.ElementTypeFunction:
          case y.ElementTypeMemo:
            if (w.indexOf('(') >= 0) {
              var U = w.match(/[^()]+/g);
              U != null && ((w = U.pop()), (M = U));
            }
            break;
        }
        return [w, M];
      }
      function j(w, L) {
        for (var M in w) if (!(M in L)) return !0;
        for (var U in L) if (w[U] !== L[U]) return !0;
        return !1;
      }
      function z(w, L) {
        return L.reduce(function (M, U) {
          if (M) {
            if (hasOwnProperty.call(M, U)) return M[U];
            if (typeof M[n.a.iterator] == 'function') return Array.from(M)[U];
          }
          return null;
        }, w);
      }
      function W(w, L, M) {
        var U = L.length,
          Y = L[U - 1];
        if (w != null) {
          var Z = z(w, L.slice(0, U - 1));
          Z && (Z[Y] = M);
        }
      }
      function K(w) {
        if (w === null) return 'null';
        if (w === void 0) return 'undefined';
        if (Object(b.isElement)(w)) return 'react_element';
        if (typeof HTMLElement < 'u' && w instanceof HTMLElement)
          return 'html_element';
        var L = B(w);
        switch (L) {
          case 'bigint':
            return 'bigint';
          case 'boolean':
            return 'boolean';
          case 'function':
            return 'function';
          case 'number':
            return Number.isNaN(w)
              ? 'nan'
              : Number.isFinite(w)
              ? 'number'
              : 'infinity';
          case 'object':
            return Array.isArray(w)
              ? 'array'
              : ArrayBuffer.isView(w)
              ? hasOwnProperty.call(w.constructor, 'BYTES_PER_ELEMENT')
                ? 'typed_array'
                : 'data_view'
              : w.constructor && w.constructor.name === 'ArrayBuffer'
              ? 'array_buffer'
              : typeof w[n.a.iterator] == 'function'
              ? 'iterator'
              : w.constructor && w.constructor.name === 'RegExp'
              ? 'regexp'
              : Object.prototype.toString.call(w) === '[object Date]'
              ? 'date'
              : 'object';
          case 'string':
            return 'string';
          case 'symbol':
            return 'symbol';
          default:
            return 'unknown';
        }
      }
      function S(w) {
        var L = Object(b.typeOf)(w);
        switch (L) {
          case b.AsyncMode:
          case b.ConcurrentMode:
            return 'ConcurrentMode';
          case b.ContextConsumer:
            return 'ContextConsumer';
          case b.ContextProvider:
            return 'ContextProvider';
          case b.ForwardRef:
            return 'ForwardRef';
          case b.Fragment:
            return 'Fragment';
          case b.Lazy:
            return 'Lazy';
          case b.Memo:
            return 'Memo';
          case b.Portal:
            return 'Portal';
          case b.Profiler:
            return 'Profiler';
          case b.StrictMode:
            return 'StrictMode';
          case b.Suspense:
            return 'Suspense';
          default:
            var M = w.type;
            return typeof M == 'string'
              ? M
              : M != null
              ? O(M, 'Anonymous')
              : 'Element';
        }
      }
      var F = 50;
      function k(w) {
        var L =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : F;
        return w.length > L ? w.substr(0, L) + '\u2026' : w;
      }
      function H(w, L) {
        if (w != null && hasOwnProperty.call(w, P.meta.type))
          return L ? w[P.meta.preview_long] : w[P.meta.preview_short];
        var M = K(w);
        switch (M) {
          case 'html_element':
            return '<'.concat(k(w.tagName.toLowerCase()), ' />');
          case 'function':
            return k(w.name);
          case 'string':
            return '"'.concat(w, '"');
          case 'bigint':
            return k(w.toString() + 'n');
          case 'regexp':
            return k(w.toString());
          case 'symbol':
            return k(w.toString());
          case 'react_element':
            return '<'.concat(k(S(w) || 'Unknown'), ' />');
          case 'array_buffer':
            return 'ArrayBuffer('.concat(w.byteLength, ')');
          case 'data_view':
            return 'DataView('.concat(w.buffer.byteLength, ')');
          case 'array':
            if (L) {
              for (
                var U = '', Y = 0;
                Y < w.length &&
                (Y > 0 && (U += ', '), (U += H(w[Y], !1)), !(U.length > F));
                Y++
              );
              return '['.concat(k(U), ']');
            } else {
              var Z = hasOwnProperty.call(w, P.meta.size)
                ? w[P.meta.size]
                : w.length;
              return 'Array('.concat(Z, ')');
            }
          case 'typed_array':
            var q = ''.concat(w.constructor.name, '(').concat(w.length, ')');
            if (L) {
              for (
                var ee = '', G = 0;
                G < w.length &&
                (G > 0 && (ee += ', '), (ee += w[G]), !(ee.length > F));
                G++
              );
              return ''.concat(q, ' [').concat(k(ee), ']');
            } else return q;
          case 'iterator':
            var N = w.constructor.name;
            if (L) {
              for (var V = Array.from(w), X = '', $ = 0; $ < V.length; $++) {
                var te = V[$];
                if (($ > 0 && (X += ', '), Array.isArray(te))) {
                  var Q = H(te[0], !0),
                    ne = H(te[1], !1);
                  X += ''.concat(Q, ' => ').concat(ne);
                } else X += H(te, !1);
                if (X.length > F) break;
              }
              return ''.concat(N, '(').concat(w.size, ') {').concat(k(X), '}');
            } else return ''.concat(N, '(').concat(w.size, ')');
          case 'date':
            return w.toString();
          case 'object':
            if (L) {
              for (
                var re = Object.keys(w).sort(x.alphaSortEntries),
                  ce = '',
                  se = 0;
                se < re.length;
                se++
              ) {
                var fe = re[se];
                if (
                  (se > 0 && (ce += ', '),
                  (ce += ''.concat(fe, ': ').concat(H(w[fe], !1))),
                  ce.length > F)
                )
                  break;
              }
              return '{'.concat(k(ce), '}');
            } else return '{\u2026}';
          case 'boolean':
          case 'number':
          case 'infinity':
          case 'nan':
          case 'null':
          case 'undefined':
            return w;
          default:
            try {
              return k('' + w);
            } catch {
              return 'unserializable';
            }
        }
      }
    },
    './src/constants.js': function (g, o, e) {
      e.r(o),
        e.d(o, 'MESSAGE_TYPE_GET_SAVED_PREFERENCES', function () {
          return t;
        }),
        e.d(o, 'MESSAGE_TYPE_SAVED_PREFERENCES', function () {
          return n;
        });
      var t = 'React::DevTools::getSavedPreferences',
        n = 'React::DevTools::savedPreferences';
    },
    './src/frontend.js': function (g, o, e) {
      e.r(o),
        e.d(o, 'initialize', function () {
          return x;
        });
      var t = e('react'),
        n = e.n(t),
        r = e('../react-devtools-shared/src/bridge.js'),
        C = e('../react-devtools-shared/src/devtools/store.js'),
        b = e('../react-devtools-shared/src/devtools/views/DevTools.js'),
        m = e('../react-devtools-shared/src/utils.js'),
        y = e('./src/constants.js');
      function p() {
        return (
          (p =
            Object.assign ||
            function (P) {
              for (var B = 1; B < arguments.length; B++) {
                var d = arguments[B];
                for (var i in d)
                  Object.prototype.hasOwnProperty.call(d, i) && (P[i] = d[i]);
              }
              return P;
            }),
          p.apply(this, arguments)
        );
      }
      function x(P) {
        var B = function a(s) {
          var u = s.data;
          switch ((s.source, u.type)) {
            case y.MESSAGE_TYPE_GET_SAVED_PREFERENCES:
              window.removeEventListener('message', a),
                P.postMessage(
                  {
                    type: y.MESSAGE_TYPE_SAVED_PREFERENCES,
                    appendComponentStack: Object(m.getAppendComponentStack)(),
                    componentFilters: Object(m.getSavedComponentFilters)(),
                  },
                  '*',
                );
              break;
          }
        };
        window.addEventListener('message', B);
        var d = new r.default({
            listen: function (s) {
              var u = function (v) {
                var A = v.data;
                s(A);
              };
              return (
                window.addEventListener('message', u),
                function () {
                  window.removeEventListener('message', u);
                }
              );
            },
            send: function (s, u, O) {
              P.postMessage({ event: s, payload: u }, '*', O);
            },
          }),
          i = new C.default(d, { supportsTraceUpdates: !0 }),
          _ = Object(t.forwardRef)(function (a, s) {
            return n.a.createElement(
              b.default,
              p({ ref: s, bridge: d, store: i }, a),
            );
          });
        return (_.displayName = 'DevTools'), _;
      }
    },
    react: function (g, o) {
      g.exports = qe.exports;
    },
    'react-dom': function (g, o) {
      g.exports = tt.exports;
    },
    'react-is': function (g, o) {
      g.exports = at();
    },
    scheduler: function (g, o) {
      g.exports = nt.exports;
    },
  });
})(Ze);
(function (we) {
  we.exports = Ze.exports;
})(Ve);
const st = et(Ve.exports),
  ct = ot({ __proto__: null, default: st }, [Ve.exports]);
export { ct as f };
