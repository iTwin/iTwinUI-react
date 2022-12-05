import { R as l, r as Z } from './chunks/index.e8aae4d9.js';
import { j as z } from './chunks/jsx-runtime.15fba22c.js';
import {
  m as xe,
  u as P,
  c as S,
  a as se,
  g as ee,
  T as be,
} from './chunks/useMediaQuery.94d811ae.js';
/* empty css                              */ import { u as Ce } from './chunks/useEventListener.370c73bd.js';
import { g as we, u as ye, a as De } from './chunks/useLatestRef.5dd3da46.js';
import { g as ae } from './chunks/numbers.3c7880a5.js';
import { R as q } from './chunks/index.b16088e3.js';
const G = (n) => {
    if (!n) return [];
    const t = getComputedStyle(n).getPropertyValue('transform'),
      a = new DOMMatrix(t);
    return [a.m41, a.m42];
  },
  Ne = (n) => {
    const {
        elementRef: t,
        containerRef: a,
        onResizeStart: e,
        onResizeEnd: i,
      } = n,
      r = l.useRef(!1),
      o = (s) => {
        if (!t.current || s.button !== 0) return;
        const c = s.clientX,
          u = s.clientY,
          [d, f] = G(t.current),
          { width: p, height: v } = t.current.getBoundingClientRect();
        let g = `${p}px`,
          C = `${v}px`,
          m = d,
          E = f;
        const T = parseFloat(getComputedStyle(t.current).minWidth),
          O = parseFloat(getComputedStyle(t.current).minHeight),
          w = s.currentTarget.dataset.iuiResizer,
          k = t.current.ownerDocument.body.style.userSelect;
        t.current.ownerDocument.body.style.userSelect = 'none';
        const R = (B) => {
          var F, _, Y, j, U, V, A;
          if (!t.current) return;
          r.current || ((r.current = !0), e?.());
          const y =
              (F = a?.current) === null || F === void 0
                ? void 0
                : F.getBoundingClientRect(),
            h = ae(
              B.clientX,
              (_ = y?.left) !== null && _ !== void 0 ? _ : 0,
              (j =
                (Y = y?.right) !== null && Y !== void 0
                  ? Y
                  : t.current.ownerDocument.documentElement.clientWidth) !==
                null && j !== void 0
                ? j
                : 0,
            ),
            b = ae(
              B.clientY,
              (U = y?.top) !== null && U !== void 0 ? U : 0,
              (A =
                (V = y?.bottom) !== null && V !== void 0
                  ? V
                  : t.current.ownerDocument.documentElement.clientHeight) !==
                null && A !== void 0
                ? A
                : 0,
            ),
            D = c - h,
            N = u - b;
          switch (w) {
            case 'top-left': {
              const x = v + N;
              x >= O && ((C = t.current.style.height = `${x}px`), (E = f - N));
              const X = p + D;
              X >= T && ((g = t.current.style.width = `${X}px`), (m = d - D)),
                (t.current.style.transform = `translate(${m}px, ${E}px)`);
              break;
            }
            case 'top': {
              const x = v + N;
              if (x < O) break;
              (C = t.current.style.height = `${x}px`),
                (E = f - N),
                (t.current.style.transform = `translate(${m}px, ${E}px)`);
              break;
            }
            case 'top-right': {
              const x = v + N;
              x >= O && ((C = t.current.style.height = `${x}px`), (E = f - N)),
                (g = t.current.style.width = `${p - D}px`),
                (t.current.style.transform = `translate(${m}px, ${E}px)`);
              break;
            }
            case 'right': {
              g = t.current.style.width = `${p - D}px`;
              break;
            }
            case 'bottom-right': {
              (g = t.current.style.width = `${p - D}px`),
                (C = t.current.style.height = `${v - N}px`);
              break;
            }
            case 'bottom': {
              C = t.current.style.height = `${v - N}px`;
              break;
            }
            case 'bottom-left': {
              const x = p + D;
              x >= T && ((g = t.current.style.width = `${x}px`), (m = d - D)),
                (C = t.current.style.height = `${v - N}px`),
                (t.current.style.transform = `translate(${m}px, ${E}px)`);
              break;
            }
            case 'left': {
              const x = p + D;
              if (x < T) break;
              (g = t.current.style.width = `${x}px`),
                (m = d - D),
                (t.current.style.transform = `translate(${m}px, ${E}px)`);
              break;
            }
          }
        };
        t.current.ownerDocument.addEventListener('pointermove', R),
          t.current.ownerDocument.addEventListener(
            'pointerup',
            () => {
              document.removeEventListener('pointermove', R),
                t.current &&
                  ((t.current.ownerDocument.body.style.userSelect = k),
                  (r.current = !1),
                  i?.({
                    width: g,
                    height: C,
                    transform: `translate(${m}px, ${E}px)`,
                  }));
            },
            { once: !0 },
          );
      };
    return l.createElement(
      l.Fragment,
      null,
      l.createElement('div', {
        'data-iui-resizer': 'top-left',
        onPointerDown: o,
        style: {
          position: 'absolute',
          top: -4,
          left: -4,
          width: 12,
          height: 12,
          cursor: 'nw-resize',
        },
      }),
      l.createElement('div', {
        'data-iui-resizer': 'top',
        onPointerDown: o,
        style: {
          position: 'absolute',
          top: -4,
          left: 8,
          right: 8,
          height: 8,
          cursor: 'n-resize',
        },
      }),
      l.createElement('div', {
        'data-iui-resizer': 'top-right',
        onPointerDown: o,
        style: {
          position: 'absolute',
          top: -4,
          right: -4,
          width: 12,
          height: 12,
          cursor: 'ne-resize',
        },
      }),
      l.createElement('div', {
        'data-iui-resizer': 'right',
        onPointerDown: o,
        style: {
          position: 'absolute',
          top: 8,
          right: -4,
          bottom: 8,
          width: 8,
          cursor: 'e-resize',
        },
      }),
      l.createElement('div', {
        'data-iui-resizer': 'bottom-right',
        onPointerDown: o,
        style: {
          position: 'absolute',
          bottom: -4,
          right: -4,
          width: 12,
          height: 12,
          cursor: 'se-resize',
        },
      }),
      l.createElement('div', {
        'data-iui-resizer': 'bottom',
        onPointerDown: o,
        style: {
          position: 'absolute',
          bottom: -4,
          left: 8,
          right: 8,
          height: 8,
          cursor: 's-resize',
        },
      }),
      l.createElement('div', {
        'data-iui-resizer': 'bottom-left',
        onPointerDown: o,
        style: {
          position: 'absolute',
          bottom: -4,
          left: -4,
          width: 12,
          height: 12,
          cursor: 'sw-resize',
        },
      }),
      l.createElement('div', {
        'data-iui-resizer': 'left',
        onPointerDown: o,
        style: {
          position: 'absolute',
          top: 8,
          left: -4,
          bottom: 8,
          width: 8,
          cursor: 'w-resize',
        },
      }),
    );
  },
  Te = (n) => {
    const { children: t } = n,
      a = l.useRef(),
      e = () => {
        const o = we(a.current),
          s = o[0],
          c = o[(o.length || 1) - 1];
        return [s, c];
      },
      i = (o) => {
        const [s, c] = e();
        o.relatedTarget === s ? c?.focus() : s?.focus();
      },
      r = (o) => {
        const [s, c] = e();
        o.relatedTarget === c ? s?.focus() : c?.focus();
      };
    return l.createElement(
      l.Fragment,
      null,
      l.createElement('div', { tabIndex: 0, onFocus: i, 'aria-hidden': !0 }),
      l.cloneElement(t, { ref: xe(t.ref, a) }),
      l.createElement('div', { tabIndex: 0, onFocus: r, 'aria-hidden': !0 }),
    );
  };
function te() {
  return (
    (te = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var e in a)
              Object.prototype.hasOwnProperty.call(a, e) && (n[e] = a[e]);
          }
          return n;
        }),
    te.apply(this, arguments)
  );
}
function fe(n, t) {
  if (n == null) return {};
  var a = {},
    e = Object.keys(n),
    i,
    r;
  for (r = 0; r < e.length; r++)
    (i = e[r]), !(t.indexOf(i) >= 0) && (a[i] = n[i]);
  return a;
}
function ne(n, t) {
  return (
    (ne = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, i) {
          return (e.__proto__ = i), e;
        }),
    ne(n, t)
  );
}
function pe(n, t) {
  (n.prototype = Object.create(t.prototype)),
    (n.prototype.constructor = n),
    ne(n, t);
}
function Re(n, t) {
  return n.classList
    ? !!t && n.classList.contains(t)
    : (' ' + (n.className.baseVal || n.className) + ' ').indexOf(
        ' ' + t + ' ',
      ) !== -1;
}
function Se(n, t) {
  n.classList
    ? n.classList.add(t)
    : Re(n, t) ||
      (typeof n.className == 'string'
        ? (n.className = n.className + ' ' + t)
        : n.setAttribute(
            'class',
            ((n.className && n.className.baseVal) || '') + ' ' + t,
          ));
}
function le(n, t) {
  return n
    .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '');
}
function Oe(n, t) {
  n.classList
    ? n.classList.remove(t)
    : typeof n.className == 'string'
    ? (n.className = le(n.className, t))
    : n.setAttribute(
        'class',
        le((n.className && n.className.baseVal) || '', t),
      );
}
const ce = { disabled: !1 },
  ve = l.createContext(null);
var H = 'unmounted',
  L = 'exited',
  M = 'entering',
  W = 'entered',
  re = 'exiting',
  $ = (function (n) {
    pe(t, n);
    function t(e, i) {
      var r;
      r = n.call(this, e, i) || this;
      var o = i,
        s = o && !o.isMounting ? e.enter : e.appear,
        c;
      return (
        (r.appearStatus = null),
        e.in
          ? s
            ? ((c = L), (r.appearStatus = M))
            : (c = W)
          : e.unmountOnExit || e.mountOnEnter
          ? (c = H)
          : (c = L),
        (r.state = { status: c }),
        (r.nextCallback = null),
        r
      );
    }
    t.getDerivedStateFromProps = function (i, r) {
      var o = i.in;
      return o && r.status === H ? { status: L } : null;
    };
    var a = t.prototype;
    return (
      (a.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (a.componentDidUpdate = function (i) {
        var r = null;
        if (i !== this.props) {
          var o = this.state.status;
          this.props.in
            ? o !== M && o !== W && (r = M)
            : (o === M || o === W) && (r = re);
        }
        this.updateStatus(!1, r);
      }),
      (a.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (a.getTimeouts = function () {
        var i = this.props.timeout,
          r,
          o,
          s;
        return (
          (r = o = s = i),
          i != null &&
            typeof i != 'number' &&
            ((r = i.exit),
            (o = i.enter),
            (s = i.appear !== void 0 ? i.appear : o)),
          { exit: r, enter: o, appear: s }
        );
      }),
      (a.updateStatus = function (i, r) {
        i === void 0 && (i = !1),
          r !== null
            ? (this.cancelNextCallback(),
              r === M ? this.performEnter(i) : this.performExit())
            : this.props.unmountOnExit &&
              this.state.status === L &&
              this.setState({ status: H });
      }),
      (a.performEnter = function (i) {
        var r = this,
          o = this.props.enter,
          s = this.context ? this.context.isMounting : i,
          c = this.props.nodeRef ? [s] : [q.findDOMNode(this), s],
          u = c[0],
          d = c[1],
          f = this.getTimeouts(),
          p = s ? f.appear : f.enter;
        if ((!i && !o) || ce.disabled) {
          this.safeSetState({ status: W }, function () {
            r.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, d),
          this.safeSetState({ status: M }, function () {
            r.props.onEntering(u, d),
              r.onTransitionEnd(p, function () {
                r.safeSetState({ status: W }, function () {
                  r.props.onEntered(u, d);
                });
              });
          });
      }),
      (a.performExit = function () {
        var i = this,
          r = this.props.exit,
          o = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : q.findDOMNode(this);
        if (!r || ce.disabled) {
          this.safeSetState({ status: L }, function () {
            i.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: re }, function () {
            i.props.onExiting(s),
              i.onTransitionEnd(o.exit, function () {
                i.safeSetState({ status: L }, function () {
                  i.props.onExited(s);
                });
              });
          });
      }),
      (a.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (a.safeSetState = function (i, r) {
        (r = this.setNextCallback(r)), this.setState(i, r);
      }),
      (a.setNextCallback = function (i) {
        var r = this,
          o = !0;
        return (
          (this.nextCallback = function (s) {
            o && ((o = !1), (r.nextCallback = null), i(s));
          }),
          (this.nextCallback.cancel = function () {
            o = !1;
          }),
          this.nextCallback
        );
      }),
      (a.onTransitionEnd = function (i, r) {
        this.setNextCallback(r);
        var o = this.props.nodeRef
            ? this.props.nodeRef.current
            : q.findDOMNode(this),
          s = i == null && !this.props.addEndListener;
        if (!o || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var c = this.props.nodeRef
              ? [this.nextCallback]
              : [o, this.nextCallback],
            u = c[0],
            d = c[1];
          this.props.addEndListener(u, d);
        }
        i != null && setTimeout(this.nextCallback, i);
      }),
      (a.render = function () {
        var i = this.state.status;
        if (i === H) return null;
        var r = this.props,
          o = r.children;
        r.in,
          r.mountOnEnter,
          r.unmountOnExit,
          r.appear,
          r.enter,
          r.exit,
          r.timeout,
          r.addEndListener,
          r.onEnter,
          r.onEntering,
          r.onEntered,
          r.onExit,
          r.onExiting,
          r.onExited,
          r.nodeRef;
        var s = fe(r, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return l.createElement(
          ve.Provider,
          { value: null },
          typeof o == 'function'
            ? o(i, s)
            : l.cloneElement(l.Children.only(o), s),
        );
      }),
      t
    );
  })(l.Component);
$.contextType = ve;
$.propTypes = {};
function I() {}
$.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: I,
  onEntering: I,
  onEntered: I,
  onExit: I,
  onExiting: I,
  onExited: I,
};
$.UNMOUNTED = H;
$.EXITED = L;
$.ENTERING = M;
$.ENTERED = W;
$.EXITING = re;
const $e = $;
var ke = function (t, a) {
    return (
      t &&
      a &&
      a.split(' ').forEach(function (e) {
        return Se(t, e);
      })
    );
  },
  J = function (t, a) {
    return (
      t &&
      a &&
      a.split(' ').forEach(function (e) {
        return Oe(t, e);
      })
    );
  },
  ie = (function (n) {
    pe(t, n);
    function t() {
      for (var e, i = arguments.length, r = new Array(i), o = 0; o < i; o++)
        r[o] = arguments[o];
      return (
        (e = n.call.apply(n, [this].concat(r)) || this),
        (e.appliedClasses = { appear: {}, enter: {}, exit: {} }),
        (e.onEnter = function (s, c) {
          var u = e.resolveArguments(s, c),
            d = u[0],
            f = u[1];
          e.removeClasses(d, 'exit'),
            e.addClass(d, f ? 'appear' : 'enter', 'base'),
            e.props.onEnter && e.props.onEnter(s, c);
        }),
        (e.onEntering = function (s, c) {
          var u = e.resolveArguments(s, c),
            d = u[0],
            f = u[1],
            p = f ? 'appear' : 'enter';
          e.addClass(d, p, 'active'),
            e.props.onEntering && e.props.onEntering(s, c);
        }),
        (e.onEntered = function (s, c) {
          var u = e.resolveArguments(s, c),
            d = u[0],
            f = u[1],
            p = f ? 'appear' : 'enter';
          e.removeClasses(d, p),
            e.addClass(d, p, 'done'),
            e.props.onEntered && e.props.onEntered(s, c);
        }),
        (e.onExit = function (s) {
          var c = e.resolveArguments(s),
            u = c[0];
          e.removeClasses(u, 'appear'),
            e.removeClasses(u, 'enter'),
            e.addClass(u, 'exit', 'base'),
            e.props.onExit && e.props.onExit(s);
        }),
        (e.onExiting = function (s) {
          var c = e.resolveArguments(s),
            u = c[0];
          e.addClass(u, 'exit', 'active'),
            e.props.onExiting && e.props.onExiting(s);
        }),
        (e.onExited = function (s) {
          var c = e.resolveArguments(s),
            u = c[0];
          e.removeClasses(u, 'exit'),
            e.addClass(u, 'exit', 'done'),
            e.props.onExited && e.props.onExited(s);
        }),
        (e.resolveArguments = function (s, c) {
          return e.props.nodeRef ? [e.props.nodeRef.current, s] : [s, c];
        }),
        (e.getClassNames = function (s) {
          var c = e.props.classNames,
            u = typeof c == 'string',
            d = u && c ? c + '-' : '',
            f = u ? '' + d + s : c[s],
            p = u ? f + '-active' : c[s + 'Active'],
            v = u ? f + '-done' : c[s + 'Done'];
          return { baseClassName: f, activeClassName: p, doneClassName: v };
        }),
        e
      );
    }
    var a = t.prototype;
    return (
      (a.addClass = function (i, r, o) {
        var s = this.getClassNames(r)[o + 'ClassName'],
          c = this.getClassNames('enter'),
          u = c.doneClassName;
        r === 'appear' && o === 'done' && u && (s += ' ' + u),
          o === 'active' && i && i.scrollTop,
          s && ((this.appliedClasses[r][o] = s), ke(i, s));
      }),
      (a.removeClasses = function (i, r) {
        var o = this.appliedClasses[r],
          s = o.base,
          c = o.active,
          u = o.done;
        (this.appliedClasses[r] = {}), s && J(i, s), c && J(i, c), u && J(i, u);
      }),
      (a.render = function () {
        var i = this.props;
        i.classNames;
        var r = fe(i, ['classNames']);
        return l.createElement(
          $e,
          te({}, r, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          }),
        );
      }),
      t
    );
  })(l.Component);
ie.defaultProps = { classNames: '' };
ie.propTypes = {};
const _e = ie,
  Pe = (n) =>
    Z.exports.createElement(
      'svg',
      { viewBox: '0 0 16 16', ...n },
      Z.exports.createElement('path', {
        d: 'm14 0-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6 6-6',
      }),
    ),
  ze = l.forwardRef((n, t) => {
    const { isVisible: a = !0, className: e, ...i } = n;
    return (
      P(),
      l.createElement('div', {
        className: S('iui-backdrop', { 'iui-backdrop-visible': a }, e),
        ref: t,
        ...i,
      })
    );
  }),
  Le = l.forwardRef((n, t) => {
    const {
      children: a,
      className: e,
      size: i,
      style: r,
      styleType: o = 'default',
      type: s = 'button',
      startIcon: c,
      endIcon: u,
      as: d = 'button',
      ...f
    } = n;
    return (
      P(),
      l.createElement(
        d,
        {
          ref: t,
          className: S('iui-button', e),
          'data-iui-variant': o !== 'default' ? o : void 0,
          'data-iui-size': i,
          style: r,
          type: s,
          ...f,
        },
        c &&
          l.createElement(
            'span',
            { className: 'iui-button-icon', 'aria-hidden': !0 },
            c,
          ),
        a && l.createElement('span', null, a),
        u &&
          l.createElement(
            'span',
            { className: 'iui-button-icon', 'aria-hidden': !0 },
            u,
          ),
      )
    );
  }),
  Me = l.forwardRef((n, t) => {
    const {
      isActive: a,
      children: e,
      styleType: i = 'default',
      size: r,
      type: o = 'button',
      className: s,
      as: c = 'button',
      ...u
    } = n;
    return (
      P(),
      l.createElement(
        c,
        {
          ref: t,
          className: S('iui-button', s),
          'data-iui-variant': i !== 'default' ? i : void 0,
          'data-iui-size': r,
          'data-iui-active': a,
          type: o,
          ...u,
        },
        l.createElement(
          'span',
          { className: 'iui-button-icon', 'aria-hidden': !0 },
          e,
        ),
      )
    );
  }),
  me = l.createContext(void 0),
  oe = () => l.useContext(me) || {},
  ue = l.forwardRef((n, t) => {
    const { children: a, className: e, ...i } = n;
    return (
      P(),
      l.createElement(
        'div',
        { className: S('iui-dialog-title', e), ref: t, ...i },
        a,
      )
    );
  }),
  he = l.createContext(void 0),
  Be = () => ({ ...l.useContext(he) }),
  Fe = Object.assign(
    l.forwardRef((n, t) => {
      const a = oe(),
        {
          children: e,
          titleText: i,
          isDismissible: r = a.isDismissible,
          onClose: o = a.onClose,
          isDraggable: s = a.isDraggable,
          className: c,
          onPointerDown: u,
          ...d
        } = n,
        { onPointerDown: f } = Be(),
        p = l.useCallback(
          (v) => {
            u?.(v), v.defaultPrevented || f?.(v);
          },
          [f, u],
        );
      return (
        P(),
        l.createElement(
          'div',
          {
            className: S('iui-dialog-title-bar', c, {
              'iui-dialog-title-bar-filled': s,
            }),
            ref: t,
            onPointerDown: p,
            ...d,
          },
          e ||
            l.createElement(
              l.Fragment,
              null,
              l.createElement(ue, null, i),
              r &&
                l.createElement(
                  Me,
                  {
                    size: 'small',
                    styleType: 'borderless',
                    onClick: o,
                    'aria-label': 'Close',
                  },
                  l.createElement(Pe, null),
                ),
            ),
        )
      );
    }),
    { Title: ue },
  ),
  ge = l.forwardRef((n, t) => {
    const { children: a, className: e, ...i } = n;
    return (
      P(),
      l.createElement(
        'div',
        { className: S('iui-dialog-content', e), ref: t, ...i },
        a,
      )
    );
  }),
  je = l.forwardRef((n, t) => {
    const a = oe(),
      {
        isVisible: e = a.isOpen,
        isDismissible: i = a.isDismissible,
        onClose: r = a.onClose,
        closeOnExternalClick: o = a.closeOnExternalClick,
        relativeTo: s = a.relativeTo,
        onMouseDown: c,
        className: u,
        style: d,
        ...f
      } = n,
      p = l.useRef(null),
      v = se(p, t),
      g = (C) => {
        C.persist(), C.target === p.current && (i && o && r && r(C), c?.(C));
      };
    return l.createElement(ze, {
      isVisible: e,
      className: S({ 'iui-backdrop-fixed': s === 'viewport' }, u),
      ref: v,
      onMouseDown: g,
      style: { pointerEvents: 'auto', ...d },
      ...f,
    });
  }),
  Ee = l.forwardRef((n, t) => {
    const { children: a, className: e, ...i } = n;
    return (
      P(),
      l.createElement(
        'div',
        { className: S('iui-dialog-button-bar', e), ref: t, ...i },
        a,
      )
    );
  }),
  de = (n) => {
    var t, a, e, i, r, o, s, c, u;
    const d =
      (t = n?.current) === null || t === void 0
        ? void 0
        : t.getBoundingClientRect();
    return {
      top: (a = d?.top) !== null && a !== void 0 ? a : 0,
      right:
        (r =
          (e = d?.right) !== null && e !== void 0
            ? e
            : (i = ee()) === null || i === void 0
            ? void 0
            : i.innerWidth) !== null && r !== void 0
          ? r
          : 0,
      bottom:
        (c =
          (o = d?.bottom) !== null && o !== void 0
            ? o
            : (s = ee()) === null || s === void 0
            ? void 0
            : s.innerHeight) !== null && c !== void 0
          ? c
          : 0,
      left: (u = d?.left) !== null && u !== void 0 ? u : 0,
    };
  },
  Ae = (n, t, a = !0) => {
    const e = l.useRef(0),
      i = l.useRef(0),
      r = l.useRef(),
      o = l.useRef(),
      s = l.useRef(de(t)),
      c = l.useCallback(() => {
        var m;
        if (!n.current || !a) return;
        const { top: E, right: T, bottom: O, left: w } =
          (m = n.current) === null || m === void 0
            ? void 0
            : m.getBoundingClientRect();
        let [k, R] = G(n.current);
        (s.current = de(t)),
          O > s.current.bottom && (R -= O - s.current.bottom),
          E < s.current.top && (R += s.current.top - E),
          T > s.current.right && (k -= T - s.current.right),
          w < s.current.left && (k += s.current.left - w),
          (r.current = k),
          (o.current = R),
          (n.current.style.transform = `translate(${k}px, ${R}px)`);
      }, [t, n, a]),
      [u, d] = ye(c);
    u(t?.current),
      l.useEffect(
        () => () => {
          d?.disconnect();
        },
        [d],
      ),
      Ce(
        'resize',
        () => {
          c(),
            r.current != null &&
              o.current != null &&
              p(`translate(${r.current}px, ${o.current}px)`);
        },
        ee(),
      );
    const [f, p] = l.useState(''),
      v = l.useRef((m) => {
        if (!n.current) return;
        const E = m.clientX - e.current,
          T = m.clientY - i.current;
        (n.current.style.transform = `translate(${E}px, ${T}px)`), c();
      }),
      g = l.useRef('');
    return {
      onPointerDown: l.useCallback(
        (m) => {
          if (!n.current || m.button !== 0 || !a) return;
          const [E, T] = G(n.current);
          (e.current = m.clientX - E),
            (i.current = m.clientY - T),
            (g.current = n.current.style.userSelect),
            (n.current.style.userSelect = 'none'),
            n.current.ownerDocument.addEventListener('pointermove', v.current),
            n.current.ownerDocument.addEventListener(
              'pointerup',
              () => {
                p(`translate(${r.current}px, ${o.current}px)`),
                  document.removeEventListener('pointermove', v.current),
                  n.current && (n.current.style.userSelect = g.current);
              },
              { once: !0 },
            );
        },
        [n, a],
      ),
      transform: f,
    };
  },
  Xe = Ae,
  Ie = l.forwardRef((n, t) => {
    const a = oe(),
      {
        className: e,
        children: i,
        styleType: r = 'default',
        isOpen: o = a.isOpen,
        isDismissible: s = a.isDismissible,
        onClose: c = a.onClose,
        closeOnEsc: u = a.closeOnEsc,
        trapFocus: d = a.trapFocus,
        setFocus: f = a.setFocus,
        preventDocumentScroll: p = a.preventDocumentScroll,
        onKeyDown: v,
        isDraggable: g = a.isDraggable,
        isResizable: C = a.isResizable,
        style: m,
        ...E
      } = n;
    P();
    const [T, O] = l.useState(),
      w = l.useRef(null),
      k = se(w, t),
      R = l.useRef(!1),
      B = l.useRef(),
      F = De(f);
    l.useEffect(() => {
      var h, b, D;
      if (!F.current) return;
      o
        ? ((B.current =
            (h = w.current) === null || h === void 0
              ? void 0
              : h.ownerDocument.activeElement),
          (b = w.current) === null || b === void 0 || b.focus())
        : (D = B.current) === null || D === void 0 || D.focus();
      const N = w.current;
      return () => {
        var x;
        N?.contains(document.activeElement) &&
          ((x = B.current) === null || x === void 0 || x.focus());
      };
    }, [o, F]);
    const _ = l.useRef('');
    l.useEffect(() => {
      o && (_.current = document.body.style.overflow);
    }, [o]),
      l.useEffect(() => {
        var h;
        const b =
          (h = w.current) === null || h === void 0 ? void 0 : h.ownerDocument;
        if (!(!b || !p || _.current === 'hidden'))
          return (
            o
              ? (b.body.style.overflow = 'hidden')
              : (b.body.style.overflow = _.current),
            () => {
              b.body.style.overflow = _.current;
            }
          );
      }, [o, p]);
    const Y = (h) => {
        h.persist(), s && u && h.key === 'Escape' && c && c(h), v?.(h);
      },
      { onPointerDown: j, transform: U } = Xe(w, a.dialogRootRef, g),
      V = l.useCallback(
        (h) => {
          g && j(h);
        },
        [g, j],
      );
    l.useLayoutEffect(() => {
      var h;
      if (!g || !o) return;
      const b =
          (h = w.current) === null || h === void 0
            ? void 0
            : h.getBoundingClientRect(),
        [D, N] = G(w.current);
      O((x) => {
        var X, K;
        return {
          ...x,
          width: b?.width,
          height: b?.height,
          left:
            (X = w.current) === null || X === void 0 ? void 0 : X.offsetLeft,
          top: (K = w.current) === null || K === void 0 ? void 0 : K.offsetTop,
          transform: `translate(${D}px,${N}px)`,
        };
      });
    }, [g, o]);
    const A = l.useCallback((h) => {
        O((b) => ({ ...b, ...h }));
      }, []),
      y = l.createElement(
        'div',
        {
          className: S(
            'iui-dialog',
            {
              'iui-dialog-default': r === 'default',
              'iui-dialog-full-page': r === 'fullPage',
              'iui-dialog-visible': o,
              'iui-dialog-draggable': g,
            },
            e,
          ),
          role: 'dialog',
          ref: k,
          onKeyDown: Y,
          tabIndex: -1,
          style: { transform: U, overflow: 'unset', ...T, ...m },
          ...E,
        },
        C &&
          l.createElement(Ne, {
            elementRef: w,
            containerRef: a.dialogRootRef,
            onResizeStart: () => {
              R.current || ((R.current = !0), A({ maxWidth: '100%' }));
            },
            onResizeEnd: A,
          }),
        i,
      );
    return l.createElement(
      _e,
      {
        in: o,
        classNames: 'iui-dialog-animation',
        timeout: { exit: 600 },
        unmountOnExit: !0,
        nodeRef: w,
      },
      l.createElement(
        he.Provider,
        { value: { onPointerDown: V } },
        d && l.createElement(Te, null, y),
        !d && y,
      ),
    );
  }),
  Q = Object.assign(
    l.forwardRef((n, t) => {
      const {
          children: a,
          trapFocus: e = !1,
          setFocus: i = !1,
          preventDocumentScroll: r = !1,
          isOpen: o = !1,
          isDismissible: s = !0,
          closeOnEsc: c = !0,
          closeOnExternalClick: u = !1,
          onClose: d,
          isDraggable: f = !1,
          isResizable: p = !1,
          relativeTo: v = 'viewport',
          className: g,
          style: C,
          ...m
        } = n,
        E = l.useRef(null),
        T = se(t, E);
      return l.createElement(
        me.Provider,
        {
          value: {
            isOpen: o,
            onClose: d,
            closeOnEsc: c,
            closeOnExternalClick: u,
            isDismissible: s,
            preventDocumentScroll: r,
            trapFocus: e,
            setFocus: i,
            isDraggable: f,
            isResizable: p,
            relativeTo: v,
            dialogRootRef: E,
          },
        },
        l.createElement(
          'div',
          {
            className: S('iui-dialog-wrapper', g),
            'data-iui-relative': v === 'container',
            ref: T,
            style: { ...C },
            ...m,
          },
          a,
        ),
      );
    }),
    { Backdrop: je, Main: Ie, TitleBar: Fe, Content: ge, ButtonBar: Ee },
  ),
  We = Ee,
  Ye = ge,
  Ze = () => {
    const [n, t] = Z.exports.useState(!0),
      a = () => {
        t(!1),
          window.setTimeout(() => {
            t(!0);
          }, 2500);
      };
    return z.exports.jsx(be, {
      theme: 'dark',
      style: { position: 'relative', width: '100%', height: '100%' },
      children: z.exports.jsx(Q, {
        relativeTo: 'container',
        isOpen: n,
        onClose: () => a(),
        children: z.exports.jsxs(Q.Main, {
          trapFocus: !1,
          style: {
            width: '80%',
            minWidth: '80%',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          },
          children: [
            z.exports.jsx(Q.TitleBar, { titleText: 'Listen' }),
            z.exports.jsx(Ye, {
              children:
                'A dialog informs users about a task and can contain critical information, require decisions, or involve multiple tasks.',
            }),
            z.exports.jsx(We, {
              children: z.exports.jsx(Le, {
                styleType: 'high-visibility',
                onClick: () => a(),
                children: 'Sounds good',
              }),
            }),
          ],
        }),
      }),
    });
  };
export { Ze as default };
