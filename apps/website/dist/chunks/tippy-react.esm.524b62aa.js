import { r as ae, R as dt } from './index.e8aae4d9.js';
import { r as Or } from './index.b16088e3.js';
var F = 'top',
  X = 'bottom',
  Y = 'right',
  q = 'left',
  bt = 'auto',
  Ne = [F, X, Y, q],
  Ae = 'start',
  Ie = 'end',
  xr = 'clippingParents',
  Yt = 'viewport',
  je = 'popper',
  Er = 'reference',
  St = Ne.reduce(function (e, t) {
    return e.concat([t + '-' + Ae, t + '-' + Ie]);
  }, []),
  Gt = [].concat(Ne, [bt]).reduce(function (e, t) {
    return e.concat([t, t + '-' + Ae, t + '-' + Ie]);
  }, []),
  Ar = 'beforeRead',
  Tr = 'read',
  Dr = 'afterRead',
  Cr = 'beforeMain',
  Sr = 'main',
  Lr = 'afterMain',
  Rr = 'beforeWrite',
  Pr = 'write',
  $r = 'afterWrite',
  jr = [Ar, Tr, Dr, Cr, Sr, Lr, Rr, Pr, $r];
function te(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function G(e) {
  if (e == null) return window;
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function ge(e) {
  var t = G(e).Element;
  return e instanceof t || e instanceof Element;
}
function z(e) {
  var t = G(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function wt(e) {
  if (typeof ShadowRoot > 'u') return !1;
  var t = G(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Mr(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      o = t.attributes[r] || {},
      a = t.elements[r];
    !z(a) ||
      !te(a) ||
      (Object.assign(a.style, n),
      Object.keys(o).forEach(function (f) {
        var c = o[f];
        c === !1 ? a.removeAttribute(f) : a.setAttribute(f, c === !0 ? '' : c);
      }));
  });
}
function Br(e) {
  var t = e.state,
    r = {
      popper: {
        position: t.options.strategy,
        left: '0',
        top: '0',
        margin: '0',
      },
      arrow: { position: 'absolute' },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var o = t.elements[n],
          a = t.attributes[n] || {},
          f = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          c = f.reduce(function (u, l) {
            return (u[l] = ''), u;
          }, {});
        !z(o) ||
          !te(o) ||
          (Object.assign(o.style, c),
          Object.keys(a).forEach(function (u) {
            o.removeAttribute(u);
          }));
      });
    }
  );
}
const Kt = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: Mr,
  effect: Br,
  requires: ['computeStyles'],
};
function ee(e) {
  return e.split('-')[0];
}
var he = Math.max,
  rt = Math.min,
  Te = Math.round;
function vt() {
  var e = navigator.userAgentData;
  return e != null && e.brands
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function Jt() {
  return !/^((?!chrome|android).)*safari/i.test(vt());
}
function De(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(),
    o = 1,
    a = 1;
  t &&
    z(e) &&
    ((o = (e.offsetWidth > 0 && Te(n.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && Te(n.height) / e.offsetHeight) || 1));
  var f = ge(e) ? G(e) : window,
    c = f.visualViewport,
    u = !Jt() && r,
    l = (n.left + (u && c ? c.offsetLeft : 0)) / o,
    p = (n.top + (u && c ? c.offsetTop : 0)) / a,
    b = n.width / o,
    x = n.height / a;
  return {
    width: b,
    height: x,
    top: p,
    right: l + b,
    bottom: p + x,
    left: l,
    x: l,
    y: p,
  };
}
function Ot(e) {
  var t = De(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Qt(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && wt(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function se(e) {
  return G(e).getComputedStyle(e);
}
function kr(e) {
  return ['table', 'td', 'th'].indexOf(te(e)) >= 0;
}
function ce(e) {
  return ((ge(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function it(e) {
  return te(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (wt(e) ? e.host : null) || ce(e);
}
function Lt(e) {
  return !z(e) || se(e).position === 'fixed' ? null : e.offsetParent;
}
function Ir(e) {
  var t = /firefox/i.test(vt()),
    r = /Trident/i.test(vt());
  if (r && z(e)) {
    var n = se(e);
    if (n.position === 'fixed') return null;
  }
  var o = it(e);
  for (wt(o) && (o = o.host); z(o) && ['html', 'body'].indexOf(te(o)) < 0; ) {
    var a = se(o);
    if (
      a.transform !== 'none' ||
      a.perspective !== 'none' ||
      a.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(a.willChange) !== -1 ||
      (t && a.willChange === 'filter') ||
      (t && a.filter && a.filter !== 'none')
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function We(e) {
  for (var t = G(e), r = Lt(e); r && kr(r) && se(r).position === 'static'; )
    r = Lt(r);
  return r &&
    (te(r) === 'html' || (te(r) === 'body' && se(r).position === 'static'))
    ? t
    : r || Ir(e) || t;
}
function xt(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function Me(e, t, r) {
  return he(e, rt(t, r));
}
function Hr(e, t, r) {
  var n = Me(e, t, r);
  return n > r ? r : n;
}
function Zt() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function er(e) {
  return Object.assign({}, Zt(), e);
}
function tr(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r;
  }, {});
}
var Nr = function (t, r) {
  return (
    (t =
      typeof t == 'function'
        ? t(Object.assign({}, r.rects, { placement: r.placement }))
        : t),
    er(typeof t != 'number' ? t : tr(t, Ne))
  );
};
function Wr(e) {
  var t,
    r = e.state,
    n = e.name,
    o = e.options,
    a = r.elements.arrow,
    f = r.modifiersData.popperOffsets,
    c = ee(r.placement),
    u = xt(c),
    l = [q, Y].indexOf(c) >= 0,
    p = l ? 'height' : 'width';
  if (!(!a || !f)) {
    var b = Nr(o.padding, r),
      x = Ot(a),
      m = u === 'y' ? F : q,
      w = u === 'y' ? X : Y,
      g =
        r.rects.reference[p] + r.rects.reference[u] - f[u] - r.rects.popper[p],
      y = f[u] - r.rects.reference[u],
      D = We(a),
      L = D ? (u === 'y' ? D.clientHeight || 0 : D.clientWidth || 0) : 0,
      P = g / 2 - y / 2,
      i = b[m],
      E = L - x[p] - b[w],
      d = L / 2 - x[p] / 2 + P,
      R = Me(i, d, E),
      k = u;
    r.modifiersData[n] = ((t = {}), (t[k] = R), (t.centerOffset = R - d), t);
  }
}
function Vr(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    o = n === void 0 ? '[data-popper-arrow]' : n;
  o != null &&
    ((typeof o == 'string' && ((o = t.elements.popper.querySelector(o)), !o)) ||
      !Qt(t.elements.popper, o) ||
      (t.elements.arrow = o));
}
const Ur = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: Wr,
  effect: Vr,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};
function Ce(e) {
  return e.split('-')[1];
}
var Fr = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function qr(e) {
  var t = e.x,
    r = e.y,
    n = window,
    o = n.devicePixelRatio || 1;
  return { x: Te(t * o) / o || 0, y: Te(r * o) / o || 0 };
}
function Rt(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    o = e.placement,
    a = e.variation,
    f = e.offsets,
    c = e.position,
    u = e.gpuAcceleration,
    l = e.adaptive,
    p = e.roundOffsets,
    b = e.isFixed,
    x = f.x,
    m = x === void 0 ? 0 : x,
    w = f.y,
    g = w === void 0 ? 0 : w,
    y = typeof p == 'function' ? p({ x: m, y: g }) : { x: m, y: g };
  (m = y.x), (g = y.y);
  var D = f.hasOwnProperty('x'),
    L = f.hasOwnProperty('y'),
    P = q,
    i = F,
    E = window;
  if (l) {
    var d = We(r),
      R = 'clientHeight',
      k = 'clientWidth';
    if (
      (d === G(r) &&
        ((d = ce(r)),
        se(d).position !== 'static' &&
          c === 'absolute' &&
          ((R = 'scrollHeight'), (k = 'scrollWidth'))),
      (d = d),
      o === F || ((o === q || o === Y) && a === Ie))
    ) {
      i = X;
      var T = b && d === E && E.visualViewport ? E.visualViewport.height : d[R];
      (g -= T - n.height), (g *= u ? 1 : -1);
    }
    if (o === q || ((o === F || o === X) && a === Ie)) {
      P = Y;
      var C = b && d === E && E.visualViewport ? E.visualViewport.width : d[k];
      (m -= C - n.width), (m *= u ? 1 : -1);
    }
  }
  var j = Object.assign({ position: c }, l && Fr),
    M = p === !0 ? qr({ x: m, y: g }) : { x: m, y: g };
  if (((m = M.x), (g = M.y), u)) {
    var $;
    return Object.assign(
      {},
      j,
      (($ = {}),
      ($[i] = L ? '0' : ''),
      ($[P] = D ? '0' : ''),
      ($.transform =
        (E.devicePixelRatio || 1) <= 1
          ? 'translate(' + m + 'px, ' + g + 'px)'
          : 'translate3d(' + m + 'px, ' + g + 'px, 0)'),
      $),
    );
  }
  return Object.assign(
    {},
    j,
    ((t = {}),
    (t[i] = L ? g + 'px' : ''),
    (t[P] = D ? m + 'px' : ''),
    (t.transform = ''),
    t),
  );
}
function _r(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    o = n === void 0 ? !0 : n,
    a = r.adaptive,
    f = a === void 0 ? !0 : a,
    c = r.roundOffsets,
    u = c === void 0 ? !0 : c,
    l = {
      placement: ee(t.placement),
      variation: Ce(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === 'fixed',
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Rt(
        Object.assign({}, l, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: f,
          roundOffsets: u,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Rt(
          Object.assign({}, l, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: u,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement,
    }));
}
const zr = {
  name: 'computeStyles',
  enabled: !0,
  phase: 'beforeWrite',
  fn: _r,
  data: {},
};
var Ze = { passive: !0 };
function Xr(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    o = n.scroll,
    a = o === void 0 ? !0 : o,
    f = n.resize,
    c = f === void 0 ? !0 : f,
    u = G(t.elements.popper),
    l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    a &&
      l.forEach(function (p) {
        p.addEventListener('scroll', r.update, Ze);
      }),
    c && u.addEventListener('resize', r.update, Ze),
    function () {
      a &&
        l.forEach(function (p) {
          p.removeEventListener('scroll', r.update, Ze);
        }),
        c && u.removeEventListener('resize', r.update, Ze);
    }
  );
}
const Yr = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: Xr,
  data: {},
};
var Gr = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function tt(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Gr[t];
  });
}
var Kr = { start: 'end', end: 'start' };
function Pt(e) {
  return e.replace(/start|end/g, function (t) {
    return Kr[t];
  });
}
function Et(e) {
  var t = G(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function At(e) {
  return De(ce(e)).left + Et(e).scrollLeft;
}
function Jr(e, t) {
  var r = G(e),
    n = ce(e),
    o = r.visualViewport,
    a = n.clientWidth,
    f = n.clientHeight,
    c = 0,
    u = 0;
  if (o) {
    (a = o.width), (f = o.height);
    var l = Jt();
    (l || (!l && t === 'fixed')) && ((c = o.offsetLeft), (u = o.offsetTop));
  }
  return { width: a, height: f, x: c + At(e), y: u };
}
function Qr(e) {
  var t,
    r = ce(e),
    n = Et(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    a = he(
      r.scrollWidth,
      r.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0,
    ),
    f = he(
      r.scrollHeight,
      r.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0,
    ),
    c = -n.scrollLeft + At(e),
    u = -n.scrollTop;
  return (
    se(o || r).direction === 'rtl' &&
      (c += he(r.clientWidth, o ? o.clientWidth : 0) - a),
    { width: a, height: f, x: c, y: u }
  );
}
function Tt(e) {
  var t = se(e),
    r = t.overflow,
    n = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function rr(e) {
  return ['html', 'body', '#document'].indexOf(te(e)) >= 0
    ? e.ownerDocument.body
    : z(e) && Tt(e)
    ? e
    : rr(it(e));
}
function Be(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = rr(e),
    o = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    a = G(n),
    f = o ? [a].concat(a.visualViewport || [], Tt(n) ? n : []) : n,
    c = t.concat(f);
  return o ? c : c.concat(Be(it(f)));
}
function mt(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Zr(e, t) {
  var r = De(e, !1, t === 'fixed');
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  );
}
function $t(e, t, r) {
  return t === Yt ? mt(Jr(e, r)) : ge(t) ? Zr(t, r) : mt(Qr(ce(e)));
}
function en(e) {
  var t = Be(it(e)),
    r = ['absolute', 'fixed'].indexOf(se(e).position) >= 0,
    n = r && z(e) ? We(e) : e;
  return ge(n)
    ? t.filter(function (o) {
        return ge(o) && Qt(o, n) && te(o) !== 'body';
      })
    : [];
}
function tn(e, t, r, n) {
  var o = t === 'clippingParents' ? en(e) : [].concat(t),
    a = [].concat(o, [r]),
    f = a[0],
    c = a.reduce(function (u, l) {
      var p = $t(e, l, n);
      return (
        (u.top = he(p.top, u.top)),
        (u.right = rt(p.right, u.right)),
        (u.bottom = rt(p.bottom, u.bottom)),
        (u.left = he(p.left, u.left)),
        u
      );
    }, $t(e, f, n));
  return (
    (c.width = c.right - c.left),
    (c.height = c.bottom - c.top),
    (c.x = c.left),
    (c.y = c.top),
    c
  );
}
function nr(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    o = n ? ee(n) : null,
    a = n ? Ce(n) : null,
    f = t.x + t.width / 2 - r.width / 2,
    c = t.y + t.height / 2 - r.height / 2,
    u;
  switch (o) {
    case F:
      u = { x: f, y: t.y - r.height };
      break;
    case X:
      u = { x: f, y: t.y + t.height };
      break;
    case Y:
      u = { x: t.x + t.width, y: c };
      break;
    case q:
      u = { x: t.x - r.width, y: c };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var l = o ? xt(o) : null;
  if (l != null) {
    var p = l === 'y' ? 'height' : 'width';
    switch (a) {
      case Ae:
        u[l] = u[l] - (t[p] / 2 - r[p] / 2);
        break;
      case Ie:
        u[l] = u[l] + (t[p] / 2 - r[p] / 2);
        break;
    }
  }
  return u;
}
function He(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    o = n === void 0 ? e.placement : n,
    a = r.strategy,
    f = a === void 0 ? e.strategy : a,
    c = r.boundary,
    u = c === void 0 ? xr : c,
    l = r.rootBoundary,
    p = l === void 0 ? Yt : l,
    b = r.elementContext,
    x = b === void 0 ? je : b,
    m = r.altBoundary,
    w = m === void 0 ? !1 : m,
    g = r.padding,
    y = g === void 0 ? 0 : g,
    D = er(typeof y != 'number' ? y : tr(y, Ne)),
    L = x === je ? Er : je,
    P = e.rects.popper,
    i = e.elements[w ? L : x],
    E = tn(ge(i) ? i : i.contextElement || ce(e.elements.popper), u, p, f),
    d = De(e.elements.reference),
    R = nr({ reference: d, element: P, strategy: 'absolute', placement: o }),
    k = mt(Object.assign({}, P, R)),
    T = x === je ? k : d,
    C = {
      top: E.top - T.top + D.top,
      bottom: T.bottom - E.bottom + D.bottom,
      left: E.left - T.left + D.left,
      right: T.right - E.right + D.right,
    },
    j = e.modifiersData.offset;
  if (x === je && j) {
    var M = j[o];
    Object.keys(C).forEach(function ($) {
      var B = [Y, X].indexOf($) >= 0 ? 1 : -1,
        O = [F, X].indexOf($) >= 0 ? 'y' : 'x';
      C[$] += M[O] * B;
    });
  }
  return C;
}
function rn(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    o = r.boundary,
    a = r.rootBoundary,
    f = r.padding,
    c = r.flipVariations,
    u = r.allowedAutoPlacements,
    l = u === void 0 ? Gt : u,
    p = Ce(n),
    b = p
      ? c
        ? St
        : St.filter(function (w) {
            return Ce(w) === p;
          })
      : Ne,
    x = b.filter(function (w) {
      return l.indexOf(w) >= 0;
    });
  x.length === 0 && (x = b);
  var m = x.reduce(function (w, g) {
    return (
      (w[g] = He(e, { placement: g, boundary: o, rootBoundary: a, padding: f })[
        ee(g)
      ]),
      w
    );
  }, {});
  return Object.keys(m).sort(function (w, g) {
    return m[w] - m[g];
  });
}
function nn(e) {
  if (ee(e) === bt) return [];
  var t = tt(e);
  return [Pt(e), t, Pt(t)];
}
function on(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var o = r.mainAxis,
        a = o === void 0 ? !0 : o,
        f = r.altAxis,
        c = f === void 0 ? !0 : f,
        u = r.fallbackPlacements,
        l = r.padding,
        p = r.boundary,
        b = r.rootBoundary,
        x = r.altBoundary,
        m = r.flipVariations,
        w = m === void 0 ? !0 : m,
        g = r.allowedAutoPlacements,
        y = t.options.placement,
        D = ee(y),
        L = D === y,
        P = u || (L || !w ? [tt(y)] : nn(y)),
        i = [y].concat(P).reduce(function (re, K) {
          return re.concat(
            ee(K) === bt
              ? rn(t, {
                  placement: K,
                  boundary: p,
                  rootBoundary: b,
                  padding: l,
                  flipVariations: w,
                  allowedAutoPlacements: g,
                })
              : K,
          );
        }, []),
        E = t.rects.reference,
        d = t.rects.popper,
        R = new Map(),
        k = !0,
        T = i[0],
        C = 0;
      C < i.length;
      C++
    ) {
      var j = i[C],
        M = ee(j),
        $ = Ce(j) === Ae,
        B = [F, X].indexOf(M) >= 0,
        O = B ? 'width' : 'height',
        N = He(t, {
          placement: j,
          boundary: p,
          rootBoundary: b,
          altBoundary: x,
          padding: l,
        }),
        H = B ? ($ ? Y : q) : $ ? X : F;
      E[O] > d[O] && (H = tt(H));
      var I = tt(H),
        V = [];
      if (
        (a && V.push(N[M] <= 0),
        c && V.push(N[H] <= 0, N[I] <= 0),
        V.every(function (re) {
          return re;
        }))
      ) {
        (T = j), (k = !1);
        break;
      }
      R.set(j, V);
    }
    if (k)
      for (
        var W = w ? 3 : 1,
          pe = function (K) {
            var ne = i.find(function (ye) {
              var ie = R.get(ye);
              if (ie)
                return ie.slice(0, K).every(function (be) {
                  return be;
                });
            });
            if (ne) return (T = ne), 'break';
          },
          Q = W;
        Q > 0;
        Q--
      ) {
        var le = pe(Q);
        if (le === 'break') break;
      }
    t.placement !== T &&
      ((t.modifiersData[n]._skip = !0), (t.placement = T), (t.reset = !0));
  }
}
const an = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: on,
  requiresIfExists: ['offset'],
  data: { _skip: !1 },
};
function jt(e, t, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x,
    }
  );
}
function Mt(e) {
  return [F, Y, X, q].some(function (t) {
    return e[t] >= 0;
  });
}
function sn(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    o = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    f = He(t, { elementContext: 'reference' }),
    c = He(t, { altBoundary: !0 }),
    u = jt(f, n),
    l = jt(c, o, a),
    p = Mt(u),
    b = Mt(l);
  (t.modifiersData[r] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: l,
    isReferenceHidden: p,
    hasPopperEscaped: b,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': p,
      'data-popper-escaped': b,
    }));
}
const un = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: sn,
};
function fn(e, t, r) {
  var n = ee(e),
    o = [q, F].indexOf(n) >= 0 ? -1 : 1,
    a = typeof r == 'function' ? r(Object.assign({}, t, { placement: e })) : r,
    f = a[0],
    c = a[1];
  return (
    (f = f || 0),
    (c = (c || 0) * o),
    [q, Y].indexOf(n) >= 0 ? { x: c, y: f } : { x: f, y: c }
  );
}
function cn(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.offset,
    a = o === void 0 ? [0, 0] : o,
    f = Gt.reduce(function (p, b) {
      return (p[b] = fn(b, t.rects, a)), p;
    }, {}),
    c = f[t.placement],
    u = c.x,
    l = c.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += u),
    (t.modifiersData.popperOffsets.y += l)),
    (t.modifiersData[n] = f);
}
const pn = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: cn,
};
function ln(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = nr({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  });
}
const dn = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: ln,
  data: {},
};
function vn(e) {
  return e === 'x' ? 'y' : 'x';
}
function mn(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.mainAxis,
    a = o === void 0 ? !0 : o,
    f = r.altAxis,
    c = f === void 0 ? !1 : f,
    u = r.boundary,
    l = r.rootBoundary,
    p = r.altBoundary,
    b = r.padding,
    x = r.tether,
    m = x === void 0 ? !0 : x,
    w = r.tetherOffset,
    g = w === void 0 ? 0 : w,
    y = He(t, { boundary: u, rootBoundary: l, padding: b, altBoundary: p }),
    D = ee(t.placement),
    L = Ce(t.placement),
    P = !L,
    i = xt(D),
    E = vn(i),
    d = t.modifiersData.popperOffsets,
    R = t.rects.reference,
    k = t.rects.popper,
    T =
      typeof g == 'function'
        ? g(Object.assign({}, t.rects, { placement: t.placement }))
        : g,
    C =
      typeof T == 'number'
        ? { mainAxis: T, altAxis: T }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
    j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    M = { x: 0, y: 0 };
  if (!!d) {
    if (a) {
      var $,
        B = i === 'y' ? F : q,
        O = i === 'y' ? X : Y,
        N = i === 'y' ? 'height' : 'width',
        H = d[i],
        I = H + y[B],
        V = H - y[O],
        W = m ? -k[N] / 2 : 0,
        pe = L === Ae ? R[N] : k[N],
        Q = L === Ae ? -k[N] : -R[N],
        le = t.elements.arrow,
        re = m && le ? Ot(le) : { width: 0, height: 0 },
        K = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : Zt(),
        ne = K[B],
        ye = K[O],
        ie = Me(0, R[N], re[N]),
        be = P
          ? R[N] / 2 - W - ie - ne - C.mainAxis
          : pe - ie - ne - C.mainAxis,
        ue = P
          ? -R[N] / 2 + W + ie + ye + C.mainAxis
          : Q + ie + ye + C.mainAxis,
        we = t.elements.arrow && We(t.elements.arrow),
        Ue = we ? (i === 'y' ? we.clientTop || 0 : we.clientLeft || 0) : 0,
        Se = ($ = j?.[i]) != null ? $ : 0,
        Fe = H + be - Se - Ue,
        qe = H + ue - Se,
        Le = Me(m ? rt(I, Fe) : I, H, m ? he(V, qe) : V);
      (d[i] = Le), (M[i] = Le - H);
    }
    if (c) {
      var Re,
        _e = i === 'x' ? F : q,
        ze = i === 'x' ? X : Y,
        oe = d[E],
        fe = E === 'y' ? 'height' : 'width',
        Pe = oe + y[_e],
        de = oe - y[ze],
        $e = [F, q].indexOf(D) !== -1,
        Xe = (Re = j?.[E]) != null ? Re : 0,
        Ye = $e ? Pe : oe - R[fe] - k[fe] - Xe + C.altAxis,
        Ge = $e ? oe + R[fe] + k[fe] - Xe - C.altAxis : de,
        Ke = m && $e ? Hr(Ye, oe, Ge) : Me(m ? Ye : Pe, oe, m ? Ge : de);
      (d[E] = Ke), (M[E] = Ke - oe);
    }
    t.modifiersData[n] = M;
  }
}
const hn = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: mn,
  requiresIfExists: ['offset'],
};
function gn(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function yn(e) {
  return e === G(e) || !z(e) ? Et(e) : gn(e);
}
function bn(e) {
  var t = e.getBoundingClientRect(),
    r = Te(t.width) / e.offsetWidth || 1,
    n = Te(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function wn(e, t, r) {
  r === void 0 && (r = !1);
  var n = z(t),
    o = z(t) && bn(t),
    a = ce(t),
    f = De(e, o, r),
    c = { scrollLeft: 0, scrollTop: 0 },
    u = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((te(t) !== 'body' || Tt(a)) && (c = yn(t)),
      z(t)
        ? ((u = De(t, !0)), (u.x += t.clientLeft), (u.y += t.clientTop))
        : a && (u.x = At(a))),
    {
      x: f.left + c.scrollLeft - u.x,
      y: f.top + c.scrollTop - u.y,
      width: f.width,
      height: f.height,
    }
  );
}
function On(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (a) {
    t.set(a.name, a);
  });
  function o(a) {
    r.add(a.name);
    var f = [].concat(a.requires || [], a.requiresIfExists || []);
    f.forEach(function (c) {
      if (!r.has(c)) {
        var u = t.get(c);
        u && o(u);
      }
    }),
      n.push(a);
  }
  return (
    e.forEach(function (a) {
      r.has(a.name) || o(a);
    }),
    n
  );
}
function xn(e) {
  var t = On(e);
  return jr.reduce(function (r, n) {
    return r.concat(
      t.filter(function (o) {
        return o.phase === n;
      }),
    );
  }, []);
}
function En(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            (t = void 0), r(e());
          });
        })),
      t
    );
  };
}
function An(e) {
  var t = e.reduce(function (r, n) {
    var o = r[n.name];
    return (
      (r[n.name] = o
        ? Object.assign({}, o, n, {
            options: Object.assign({}, o.options, n.options),
            data: Object.assign({}, o.data, n.data),
          })
        : n),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var Bt = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function kt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == 'function');
  });
}
function Tn(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    o = t.defaultOptions,
    a = o === void 0 ? Bt : o;
  return function (c, u, l) {
    l === void 0 && (l = a);
    var p = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, Bt, a),
        modifiersData: {},
        elements: { reference: c, popper: u },
        attributes: {},
        styles: {},
      },
      b = [],
      x = !1,
      m = {
        state: p,
        setOptions: function (D) {
          var L = typeof D == 'function' ? D(p.options) : D;
          g(),
            (p.options = Object.assign({}, a, p.options, L)),
            (p.scrollParents = {
              reference: ge(c)
                ? Be(c)
                : c.contextElement
                ? Be(c.contextElement)
                : [],
              popper: Be(u),
            });
          var P = xn(An([].concat(n, p.options.modifiers)));
          return (
            (p.orderedModifiers = P.filter(function (i) {
              return i.enabled;
            })),
            w(),
            m.update()
          );
        },
        forceUpdate: function () {
          if (!x) {
            var D = p.elements,
              L = D.reference,
              P = D.popper;
            if (!!kt(L, P)) {
              (p.rects = {
                reference: wn(L, We(P), p.options.strategy === 'fixed'),
                popper: Ot(P),
              }),
                (p.reset = !1),
                (p.placement = p.options.placement),
                p.orderedModifiers.forEach(function (C) {
                  return (p.modifiersData[C.name] = Object.assign({}, C.data));
                });
              for (var i = 0; i < p.orderedModifiers.length; i++) {
                if (p.reset === !0) {
                  (p.reset = !1), (i = -1);
                  continue;
                }
                var E = p.orderedModifiers[i],
                  d = E.fn,
                  R = E.options,
                  k = R === void 0 ? {} : R,
                  T = E.name;
                typeof d == 'function' &&
                  (p = d({ state: p, options: k, name: T, instance: m }) || p);
              }
            }
          }
        },
        update: En(function () {
          return new Promise(function (y) {
            m.forceUpdate(), y(p);
          });
        }),
        destroy: function () {
          g(), (x = !0);
        },
      };
    if (!kt(c, u)) return m;
    m.setOptions(l).then(function (y) {
      !x && l.onFirstUpdate && l.onFirstUpdate(y);
    });
    function w() {
      p.orderedModifiers.forEach(function (y) {
        var D = y.name,
          L = y.options,
          P = L === void 0 ? {} : L,
          i = y.effect;
        if (typeof i == 'function') {
          var E = i({ state: p, name: D, instance: m, options: P }),
            d = function () {};
          b.push(E || d);
        }
      });
    }
    function g() {
      b.forEach(function (y) {
        return y();
      }),
        (b = []);
    }
    return m;
  };
}
var Dn = [Yr, dn, zr, Kt, pn, an, hn, Ur, un],
  Cn = Tn({ defaultModifiers: Dn }),
  Sn = 'tippy-box',
  ir = 'tippy-content',
  Ln = 'tippy-backdrop',
  or = 'tippy-arrow',
  ar = 'tippy-svg-arrow',
  me = { passive: !0, capture: !0 },
  sr = function () {
    return document.body;
  };
function ut(e, t, r) {
  if (Array.isArray(e)) {
    var n = e[t];
    return n ?? (Array.isArray(r) ? r[t] : r);
  }
  return e;
}
function Dt(e, t) {
  var r = {}.toString.call(e);
  return r.indexOf('[object') === 0 && r.indexOf(t + ']') > -1;
}
function ur(e, t) {
  return typeof e == 'function' ? e.apply(void 0, t) : e;
}
function It(e, t) {
  if (t === 0) return e;
  var r;
  return function (n) {
    clearTimeout(r),
      (r = setTimeout(function () {
        e(n);
      }, t));
  };
}
function Rn(e) {
  return e.split(/\s+/).filter(Boolean);
}
function Ee(e) {
  return [].concat(e);
}
function Ht(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Pn(e) {
  return e.filter(function (t, r) {
    return e.indexOf(t) === r;
  });
}
function $n(e) {
  return e.split('-')[0];
}
function nt(e) {
  return [].slice.call(e);
}
function Nt(e) {
  return Object.keys(e).reduce(function (t, r) {
    return e[r] !== void 0 && (t[r] = e[r]), t;
  }, {});
}
function ke() {
  return document.createElement('div');
}
function ot(e) {
  return ['Element', 'Fragment'].some(function (t) {
    return Dt(e, t);
  });
}
function jn(e) {
  return Dt(e, 'NodeList');
}
function Mn(e) {
  return Dt(e, 'MouseEvent');
}
function Bn(e) {
  return !!(e && e._tippy && e._tippy.reference === e);
}
function kn(e) {
  return ot(e)
    ? [e]
    : jn(e)
    ? nt(e)
    : Array.isArray(e)
    ? e
    : nt(document.querySelectorAll(e));
}
function ft(e, t) {
  e.forEach(function (r) {
    r && (r.style.transitionDuration = t + 'ms');
  });
}
function Wt(e, t) {
  e.forEach(function (r) {
    r && r.setAttribute('data-state', t);
  });
}
function In(e) {
  var t,
    r = Ee(e),
    n = r[0];
  return n != null && (t = n.ownerDocument) != null && t.body
    ? n.ownerDocument
    : document;
}
function Hn(e, t) {
  var r = t.clientX,
    n = t.clientY;
  return e.every(function (o) {
    var a = o.popperRect,
      f = o.popperState,
      c = o.props,
      u = c.interactiveBorder,
      l = $n(f.placement),
      p = f.modifiersData.offset;
    if (!p) return !0;
    var b = l === 'bottom' ? p.top.y : 0,
      x = l === 'top' ? p.bottom.y : 0,
      m = l === 'right' ? p.left.x : 0,
      w = l === 'left' ? p.right.x : 0,
      g = a.top - n + b > u,
      y = n - a.bottom - x > u,
      D = a.left - r + m > u,
      L = r - a.right - w > u;
    return g || y || D || L;
  });
}
function ct(e, t, r) {
  var n = t + 'EventListener';
  ['transitionend', 'webkitTransitionEnd'].forEach(function (o) {
    e[n](o, r);
  });
}
function Vt(e, t) {
  for (var r = t; r; ) {
    var n;
    if (e.contains(r)) return !0;
    r =
      r.getRootNode == null || (n = r.getRootNode()) == null ? void 0 : n.host;
  }
  return !1;
}
var Z = { isTouch: !1 },
  Ut = 0;
function Nn() {
  Z.isTouch ||
    ((Z.isTouch = !0),
    window.performance && document.addEventListener('mousemove', fr));
}
function fr() {
  var e = performance.now();
  e - Ut < 20 &&
    ((Z.isTouch = !1), document.removeEventListener('mousemove', fr)),
    (Ut = e);
}
function Wn() {
  var e = document.activeElement;
  if (Bn(e)) {
    var t = e._tippy;
    e.blur && !t.state.isVisible && e.blur();
  }
}
function Vn() {
  document.addEventListener('touchstart', Nn, me),
    window.addEventListener('blur', Wn);
}
var Un = typeof window < 'u' && typeof document < 'u',
  Fn = Un ? !!window.msCrypto : !1,
  qn = { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
  _n = {
    allowHTML: !1,
    animation: 'fade',
    arrow: !0,
    content: '',
    inertia: !1,
    maxWidth: 350,
    role: 'tooltip',
    theme: '',
    zIndex: 9999,
  },
  J = Object.assign(
    {
      appendTo: sr,
      aria: { content: 'auto', expanded: 'auto' },
      delay: 0,
      duration: [300, 250],
      getReferenceClientRect: null,
      hideOnClick: !0,
      ignoreAttributes: !1,
      interactive: !1,
      interactiveBorder: 2,
      interactiveDebounce: 0,
      moveTransition: '',
      offset: [0, 10],
      onAfterUpdate: function () {},
      onBeforeUpdate: function () {},
      onCreate: function () {},
      onDestroy: function () {},
      onHidden: function () {},
      onHide: function () {},
      onMount: function () {},
      onShow: function () {},
      onShown: function () {},
      onTrigger: function () {},
      onUntrigger: function () {},
      onClickOutside: function () {},
      placement: 'top',
      plugins: [],
      popperOptions: {},
      render: null,
      showOnCreate: !1,
      touch: !0,
      trigger: 'mouseenter focus',
      triggerTarget: null,
    },
    qn,
    _n,
  ),
  zn = Object.keys(J),
  Xn = function (t) {
    var r = Object.keys(t);
    r.forEach(function (n) {
      J[n] = t[n];
    });
  };
function cr(e) {
  var t = e.plugins || [],
    r = t.reduce(function (n, o) {
      var a = o.name,
        f = o.defaultValue;
      if (a) {
        var c;
        n[a] = e[a] !== void 0 ? e[a] : (c = J[a]) != null ? c : f;
      }
      return n;
    }, {});
  return Object.assign({}, e, r);
}
function Yn(e, t) {
  var r = t ? Object.keys(cr(Object.assign({}, J, { plugins: t }))) : zn,
    n = r.reduce(function (o, a) {
      var f = (e.getAttribute('data-tippy-' + a) || '').trim();
      if (!f) return o;
      if (a === 'content') o[a] = f;
      else
        try {
          o[a] = JSON.parse(f);
        } catch {
          o[a] = f;
        }
      return o;
    }, {});
  return n;
}
function Ft(e, t) {
  var r = Object.assign(
    {},
    t,
    { content: ur(t.content, [e]) },
    t.ignoreAttributes ? {} : Yn(e, t.plugins),
  );
  return (
    (r.aria = Object.assign({}, J.aria, r.aria)),
    (r.aria = {
      expanded: r.aria.expanded === 'auto' ? t.interactive : r.aria.expanded,
      content:
        r.aria.content === 'auto'
          ? t.interactive
            ? null
            : 'describedby'
          : r.aria.content,
    }),
    r
  );
}
var Gn = function () {
  return 'innerHTML';
};
function ht(e, t) {
  e[Gn()] = t;
}
function qt(e) {
  var t = ke();
  return (
    e === !0
      ? (t.className = or)
      : ((t.className = ar), ot(e) ? t.appendChild(e) : ht(t, e)),
    t
  );
}
function _t(e, t) {
  ot(t.content)
    ? (ht(e, ''), e.appendChild(t.content))
    : typeof t.content != 'function' &&
      (t.allowHTML ? ht(e, t.content) : (e.textContent = t.content));
}
function gt(e) {
  var t = e.firstElementChild,
    r = nt(t.children);
  return {
    box: t,
    content: r.find(function (n) {
      return n.classList.contains(ir);
    }),
    arrow: r.find(function (n) {
      return n.classList.contains(or) || n.classList.contains(ar);
    }),
    backdrop: r.find(function (n) {
      return n.classList.contains(Ln);
    }),
  };
}
function pr(e) {
  var t = ke(),
    r = ke();
  (r.className = Sn),
    r.setAttribute('data-state', 'hidden'),
    r.setAttribute('tabindex', '-1');
  var n = ke();
  (n.className = ir),
    n.setAttribute('data-state', 'hidden'),
    _t(n, e.props),
    t.appendChild(r),
    r.appendChild(n),
    o(e.props, e.props);
  function o(a, f) {
    var c = gt(t),
      u = c.box,
      l = c.content,
      p = c.arrow;
    f.theme
      ? u.setAttribute('data-theme', f.theme)
      : u.removeAttribute('data-theme'),
      typeof f.animation == 'string'
        ? u.setAttribute('data-animation', f.animation)
        : u.removeAttribute('data-animation'),
      f.inertia
        ? u.setAttribute('data-inertia', '')
        : u.removeAttribute('data-inertia'),
      (u.style.maxWidth =
        typeof f.maxWidth == 'number' ? f.maxWidth + 'px' : f.maxWidth),
      f.role ? u.setAttribute('role', f.role) : u.removeAttribute('role'),
      (a.content !== f.content || a.allowHTML !== f.allowHTML) &&
        _t(l, e.props),
      f.arrow
        ? p
          ? a.arrow !== f.arrow &&
            (u.removeChild(p), u.appendChild(qt(f.arrow)))
          : u.appendChild(qt(f.arrow))
        : p && u.removeChild(p);
  }
  return { popper: t, onUpdate: o };
}
pr.$$tippy = !0;
var Kn = 1,
  et = [],
  pt = [];
function Jn(e, t) {
  var r = Ft(e, Object.assign({}, J, cr(Nt(t)))),
    n,
    o,
    a,
    f = !1,
    c = !1,
    u = !1,
    l = !1,
    p,
    b,
    x,
    m = [],
    w = It(Fe, r.interactiveDebounce),
    g,
    y = Kn++,
    D = null,
    L = Pn(r.plugins),
    P = {
      isEnabled: !0,
      isVisible: !1,
      isDestroyed: !1,
      isMounted: !1,
      isShown: !1,
    },
    i = {
      id: y,
      reference: e,
      popper: ke(),
      popperInstance: D,
      props: r,
      state: P,
      plugins: L,
      clearDelayTimeouts: Ye,
      setProps: Ge,
      setContent: Ke,
      show: mr,
      hide: hr,
      hideWithInteractivity: gr,
      enable: $e,
      disable: Xe,
      unmount: yr,
      destroy: br,
    };
  if (!r.render) return i;
  var E = r.render(i),
    d = E.popper,
    R = E.onUpdate;
  d.setAttribute('data-tippy-root', ''),
    (d.id = 'tippy-' + i.id),
    (i.popper = d),
    (e._tippy = i),
    (d._tippy = i);
  var k = L.map(function (s) {
      return s.fn(i);
    }),
    T = e.hasAttribute('aria-expanded');
  return (
    we(),
    W(),
    H(),
    I('onCreate', [i]),
    r.showOnCreate && Pe(),
    d.addEventListener('mouseenter', function () {
      i.props.interactive && i.state.isVisible && i.clearDelayTimeouts();
    }),
    d.addEventListener('mouseleave', function () {
      i.props.interactive &&
        i.props.trigger.indexOf('mouseenter') >= 0 &&
        B().addEventListener('mousemove', w);
    }),
    i
  );
  function C() {
    var s = i.props.touch;
    return Array.isArray(s) ? s : [s, 0];
  }
  function j() {
    return C()[0] === 'hold';
  }
  function M() {
    var s;
    return !!((s = i.props.render) != null && s.$$tippy);
  }
  function $() {
    return g || e;
  }
  function B() {
    var s = $().parentNode;
    return s ? In(s) : document;
  }
  function O() {
    return gt(d);
  }
  function N(s) {
    return (i.state.isMounted && !i.state.isVisible) ||
      Z.isTouch ||
      (p && p.type === 'focus')
      ? 0
      : ut(i.props.delay, s ? 0 : 1, J.delay);
  }
  function H(s) {
    s === void 0 && (s = !1),
      (d.style.pointerEvents = i.props.interactive && !s ? '' : 'none'),
      (d.style.zIndex = '' + i.props.zIndex);
  }
  function I(s, v, h) {
    if (
      (h === void 0 && (h = !0),
      k.forEach(function (A) {
        A[s] && A[s].apply(A, v);
      }),
      h)
    ) {
      var S;
      (S = i.props)[s].apply(S, v);
    }
  }
  function V() {
    var s = i.props.aria;
    if (!!s.content) {
      var v = 'aria-' + s.content,
        h = d.id,
        S = Ee(i.props.triggerTarget || e);
      S.forEach(function (A) {
        var U = A.getAttribute(v);
        if (i.state.isVisible) A.setAttribute(v, U ? U + ' ' + h : h);
        else {
          var _ = U && U.replace(h, '').trim();
          _ ? A.setAttribute(v, _) : A.removeAttribute(v);
        }
      });
    }
  }
  function W() {
    if (!(T || !i.props.aria.expanded)) {
      var s = Ee(i.props.triggerTarget || e);
      s.forEach(function (v) {
        i.props.interactive
          ? v.setAttribute(
              'aria-expanded',
              i.state.isVisible && v === $() ? 'true' : 'false',
            )
          : v.removeAttribute('aria-expanded');
      });
    }
  }
  function pe() {
    B().removeEventListener('mousemove', w),
      (et = et.filter(function (s) {
        return s !== w;
      }));
  }
  function Q(s) {
    if (!(Z.isTouch && (u || s.type === 'mousedown'))) {
      var v = (s.composedPath && s.composedPath()[0]) || s.target;
      if (!(i.props.interactive && Vt(d, v))) {
        if (
          Ee(i.props.triggerTarget || e).some(function (h) {
            return Vt(h, v);
          })
        ) {
          if (
            Z.isTouch ||
            (i.state.isVisible && i.props.trigger.indexOf('click') >= 0)
          )
            return;
        } else I('onClickOutside', [i, s]);
        i.props.hideOnClick === !0 &&
          (i.clearDelayTimeouts(),
          i.hide(),
          (c = !0),
          setTimeout(function () {
            c = !1;
          }),
          i.state.isMounted || ne());
      }
    }
  }
  function le() {
    u = !0;
  }
  function re() {
    u = !1;
  }
  function K() {
    var s = B();
    s.addEventListener('mousedown', Q, !0),
      s.addEventListener('touchend', Q, me),
      s.addEventListener('touchstart', re, me),
      s.addEventListener('touchmove', le, me);
  }
  function ne() {
    var s = B();
    s.removeEventListener('mousedown', Q, !0),
      s.removeEventListener('touchend', Q, me),
      s.removeEventListener('touchstart', re, me),
      s.removeEventListener('touchmove', le, me);
  }
  function ye(s, v) {
    be(s, function () {
      !i.state.isVisible && d.parentNode && d.parentNode.contains(d) && v();
    });
  }
  function ie(s, v) {
    be(s, v);
  }
  function be(s, v) {
    var h = O().box;
    function S(A) {
      A.target === h && (ct(h, 'remove', S), v());
    }
    if (s === 0) return v();
    ct(h, 'remove', b), ct(h, 'add', S), (b = S);
  }
  function ue(s, v, h) {
    h === void 0 && (h = !1);
    var S = Ee(i.props.triggerTarget || e);
    S.forEach(function (A) {
      A.addEventListener(s, v, h),
        m.push({ node: A, eventType: s, handler: v, options: h });
    });
  }
  function we() {
    j() &&
      (ue('touchstart', Se, { passive: !0 }),
      ue('touchend', qe, { passive: !0 })),
      Rn(i.props.trigger).forEach(function (s) {
        if (s !== 'manual')
          switch ((ue(s, Se), s)) {
            case 'mouseenter':
              ue('mouseleave', qe);
              break;
            case 'focus':
              ue(Fn ? 'focusout' : 'blur', Le);
              break;
            case 'focusin':
              ue('focusout', Le);
              break;
          }
      });
  }
  function Ue() {
    m.forEach(function (s) {
      var v = s.node,
        h = s.eventType,
        S = s.handler,
        A = s.options;
      v.removeEventListener(h, S, A);
    }),
      (m = []);
  }
  function Se(s) {
    var v,
      h = !1;
    if (!(!i.state.isEnabled || Re(s) || c)) {
      var S = ((v = p) == null ? void 0 : v.type) === 'focus';
      (p = s),
        (g = s.currentTarget),
        W(),
        !i.state.isVisible &&
          Mn(s) &&
          et.forEach(function (A) {
            return A(s);
          }),
        s.type === 'click' &&
        (i.props.trigger.indexOf('mouseenter') < 0 || f) &&
        i.props.hideOnClick !== !1 &&
        i.state.isVisible
          ? (h = !0)
          : Pe(s),
        s.type === 'click' && (f = !h),
        h && !S && de(s);
    }
  }
  function Fe(s) {
    var v = s.target,
      h = $().contains(v) || d.contains(v);
    if (!(s.type === 'mousemove' && h)) {
      var S = fe()
        .concat(d)
        .map(function (A) {
          var U,
            _ = A._tippy,
            Oe = (U = _.popperInstance) == null ? void 0 : U.state;
          return Oe
            ? {
                popperRect: A.getBoundingClientRect(),
                popperState: Oe,
                props: r,
              }
            : null;
        })
        .filter(Boolean);
      Hn(S, s) && (pe(), de(s));
    }
  }
  function qe(s) {
    var v = Re(s) || (i.props.trigger.indexOf('click') >= 0 && f);
    if (!v) {
      if (i.props.interactive) {
        i.hideWithInteractivity(s);
        return;
      }
      de(s);
    }
  }
  function Le(s) {
    (i.props.trigger.indexOf('focusin') < 0 && s.target !== $()) ||
      (i.props.interactive && s.relatedTarget && d.contains(s.relatedTarget)) ||
      de(s);
  }
  function Re(s) {
    return Z.isTouch ? j() !== s.type.indexOf('touch') >= 0 : !1;
  }
  function _e() {
    ze();
    var s = i.props,
      v = s.popperOptions,
      h = s.placement,
      S = s.offset,
      A = s.getReferenceClientRect,
      U = s.moveTransition,
      _ = M() ? gt(d).arrow : null,
      Oe = A
        ? { getBoundingClientRect: A, contextElement: A.contextElement || $() }
        : e,
      Ct = {
        name: '$$tippy',
        enabled: !0,
        phase: 'beforeWrite',
        requires: ['computeStyles'],
        fn: function (Je) {
          var xe = Je.state;
          if (M()) {
            var wr = O(),
              st = wr.box;
            ['placement', 'reference-hidden', 'escaped'].forEach(function (Qe) {
              Qe === 'placement'
                ? st.setAttribute('data-placement', xe.placement)
                : xe.attributes.popper['data-popper-' + Qe]
                ? st.setAttribute('data-' + Qe, '')
                : st.removeAttribute('data-' + Qe);
            }),
              (xe.attributes.popper = {});
          }
        },
      },
      ve = [
        { name: 'offset', options: { offset: S } },
        {
          name: 'preventOverflow',
          options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
        },
        { name: 'flip', options: { padding: 5 } },
        { name: 'computeStyles', options: { adaptive: !U } },
        Ct,
      ];
    M() && _ && ve.push({ name: 'arrow', options: { element: _, padding: 3 } }),
      ve.push.apply(ve, v?.modifiers || []),
      (i.popperInstance = Cn(
        Oe,
        d,
        Object.assign({}, v, { placement: h, onFirstUpdate: x, modifiers: ve }),
      ));
  }
  function ze() {
    i.popperInstance && (i.popperInstance.destroy(), (i.popperInstance = null));
  }
  function oe() {
    var s = i.props.appendTo,
      v,
      h = $();
    (i.props.interactive && s === sr) || s === 'parent'
      ? (v = h.parentNode)
      : (v = ur(s, [h])),
      v.contains(d) || v.appendChild(d),
      (i.state.isMounted = !0),
      _e();
  }
  function fe() {
    return nt(d.querySelectorAll('[data-tippy-root]'));
  }
  function Pe(s) {
    i.clearDelayTimeouts(), s && I('onTrigger', [i, s]), K();
    var v = N(!0),
      h = C(),
      S = h[0],
      A = h[1];
    Z.isTouch && S === 'hold' && A && (v = A),
      v
        ? (n = setTimeout(function () {
            i.show();
          }, v))
        : i.show();
  }
  function de(s) {
    if (
      (i.clearDelayTimeouts(), I('onUntrigger', [i, s]), !i.state.isVisible)
    ) {
      ne();
      return;
    }
    if (
      !(
        i.props.trigger.indexOf('mouseenter') >= 0 &&
        i.props.trigger.indexOf('click') >= 0 &&
        ['mouseleave', 'mousemove'].indexOf(s.type) >= 0 &&
        f
      )
    ) {
      var v = N(!1);
      v
        ? (o = setTimeout(function () {
            i.state.isVisible && i.hide();
          }, v))
        : (a = requestAnimationFrame(function () {
            i.hide();
          }));
    }
  }
  function $e() {
    i.state.isEnabled = !0;
  }
  function Xe() {
    i.hide(), (i.state.isEnabled = !1);
  }
  function Ye() {
    clearTimeout(n), clearTimeout(o), cancelAnimationFrame(a);
  }
  function Ge(s) {
    if (!i.state.isDestroyed) {
      I('onBeforeUpdate', [i, s]), Ue();
      var v = i.props,
        h = Ft(e, Object.assign({}, v, Nt(s), { ignoreAttributes: !0 }));
      (i.props = h),
        we(),
        v.interactiveDebounce !== h.interactiveDebounce &&
          (pe(), (w = It(Fe, h.interactiveDebounce))),
        v.triggerTarget && !h.triggerTarget
          ? Ee(v.triggerTarget).forEach(function (S) {
              S.removeAttribute('aria-expanded');
            })
          : h.triggerTarget && e.removeAttribute('aria-expanded'),
        W(),
        H(),
        R && R(v, h),
        i.popperInstance &&
          (_e(),
          fe().forEach(function (S) {
            requestAnimationFrame(S._tippy.popperInstance.forceUpdate);
          })),
        I('onAfterUpdate', [i, s]);
    }
  }
  function Ke(s) {
    i.setProps({ content: s });
  }
  function mr() {
    var s = i.state.isVisible,
      v = i.state.isDestroyed,
      h = !i.state.isEnabled,
      S = Z.isTouch && !i.props.touch,
      A = ut(i.props.duration, 0, J.duration);
    if (
      !(s || v || h || S) &&
      !$().hasAttribute('disabled') &&
      (I('onShow', [i], !1), i.props.onShow(i) !== !1)
    ) {
      if (
        ((i.state.isVisible = !0),
        M() && (d.style.visibility = 'visible'),
        H(),
        K(),
        i.state.isMounted || (d.style.transition = 'none'),
        M())
      ) {
        var U = O(),
          _ = U.box,
          Oe = U.content;
        ft([_, Oe], 0);
      }
      (x = function () {
        var ve;
        if (!(!i.state.isVisible || l)) {
          if (
            ((l = !0),
            d.offsetHeight,
            (d.style.transition = i.props.moveTransition),
            M() && i.props.animation)
          ) {
            var at = O(),
              Je = at.box,
              xe = at.content;
            ft([Je, xe], A), Wt([Je, xe], 'visible');
          }
          V(),
            W(),
            Ht(pt, i),
            (ve = i.popperInstance) == null || ve.forceUpdate(),
            I('onMount', [i]),
            i.props.animation &&
              M() &&
              ie(A, function () {
                (i.state.isShown = !0), I('onShown', [i]);
              });
        }
      }),
        oe();
    }
  }
  function hr() {
    var s = !i.state.isVisible,
      v = i.state.isDestroyed,
      h = !i.state.isEnabled,
      S = ut(i.props.duration, 1, J.duration);
    if (!(s || v || h) && (I('onHide', [i], !1), i.props.onHide(i) !== !1)) {
      if (
        ((i.state.isVisible = !1),
        (i.state.isShown = !1),
        (l = !1),
        (f = !1),
        M() && (d.style.visibility = 'hidden'),
        pe(),
        ne(),
        H(!0),
        M())
      ) {
        var A = O(),
          U = A.box,
          _ = A.content;
        i.props.animation && (ft([U, _], S), Wt([U, _], 'hidden'));
      }
      V(), W(), i.props.animation ? M() && ye(S, i.unmount) : i.unmount();
    }
  }
  function gr(s) {
    B().addEventListener('mousemove', w), Ht(et, w), w(s);
  }
  function yr() {
    i.state.isVisible && i.hide(),
      i.state.isMounted &&
        (ze(),
        fe().forEach(function (s) {
          s._tippy.unmount();
        }),
        d.parentNode && d.parentNode.removeChild(d),
        (pt = pt.filter(function (s) {
          return s !== i;
        })),
        (i.state.isMounted = !1),
        I('onHidden', [i]));
  }
  function br() {
    i.state.isDestroyed ||
      (i.clearDelayTimeouts(),
      i.unmount(),
      Ue(),
      delete e._tippy,
      (i.state.isDestroyed = !0),
      I('onDestroy', [i]));
  }
}
function Ve(e, t) {
  t === void 0 && (t = {});
  var r = J.plugins.concat(t.plugins || []);
  Vn();
  var n = Object.assign({}, t, { plugins: r }),
    o = kn(e),
    a = o.reduce(function (f, c) {
      var u = c && Jn(c, n);
      return u && f.push(u), f;
    }, []);
  return ot(e) ? a[0] : a;
}
Ve.defaultProps = J;
Ve.setDefaultProps = Xn;
Ve.currentInput = Z;
Object.assign({}, Kt, {
  effect: function (t) {
    var r = t.state,
      n = {
        popper: {
          position: r.options.strategy,
          left: '0',
          top: '0',
          margin: '0',
        },
        arrow: { position: 'absolute' },
        reference: {},
      };
    Object.assign(r.elements.popper.style, n.popper),
      (r.styles = n),
      r.elements.arrow && Object.assign(r.elements.arrow.style, n.arrow);
  },
});
Ve.setDefaultProps({ render: pr });
function lr(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    a;
  for (a = 0; a < n.length; a++)
    (o = n[a]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var dr = typeof window < 'u' && typeof document < 'u';
function yt(e, t) {
  e &&
    (typeof e == 'function' && e(t),
    {}.hasOwnProperty.call(e, 'current') && (e.current = t));
}
function zt() {
  return dr && document.createElement('div');
}
function Qn(e) {
  var t = { 'data-placement': e.placement };
  return (
    e.referenceHidden && (t['data-reference-hidden'] = ''),
    e.escaped && (t['data-escaped'] = ''),
    t
  );
}
function vr(e, t) {
  if (e === t) return !0;
  if (typeof e == 'object' && e != null && typeof t == 'object' && t != null) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (var r in e)
      if (t.hasOwnProperty(r)) {
        if (!vr(e[r], t[r])) return !1;
      } else return !1;
    return !0;
  } else return !1;
}
function Zn(e) {
  var t = [];
  return (
    e.forEach(function (r) {
      t.find(function (n) {
        return vr(r, n);
      }) || t.push(r);
    }),
    t
  );
}
function ei(e, t) {
  var r, n;
  return Object.assign({}, t, {
    popperOptions: Object.assign({}, e.popperOptions, t.popperOptions, {
      modifiers: Zn(
        [].concat(
          ((r = e.popperOptions) == null ? void 0 : r.modifiers) || [],
          ((n = t.popperOptions) == null ? void 0 : n.modifiers) || [],
        ),
      ),
    }),
  });
}
var lt = dr ? ae.exports.useLayoutEffect : ae.exports.useEffect;
function ti(e) {
  var t = ae.exports.useRef();
  return t.current || (t.current = typeof e == 'function' ? e() : e), t.current;
}
function Xt(e, t, r) {
  r.split(/\s+/).forEach(function (n) {
    n && e.classList[t](n);
  });
}
var ri = {
  name: 'className',
  defaultValue: '',
  fn: function (t) {
    var r = t.popper.firstElementChild,
      n = function () {
        var c;
        return !!((c = t.props.render) != null && c.$$tippy);
      };
    function o() {
      (t.props.className && !n()) || Xt(r, 'add', t.props.className);
    }
    function a() {
      n() && Xt(r, 'remove', t.props.className);
    }
    return { onCreate: o, onBeforeUpdate: a, onAfterUpdate: o };
  },
};
function ni(e) {
  function t(r) {
    var n = r.children,
      o = r.content,
      a = r.visible,
      f = r.singleton,
      c = r.render,
      u = r.reference,
      l = r.disabled,
      p = l === void 0 ? !1 : l,
      b = r.ignoreAttributes,
      x = b === void 0 ? !0 : b;
    r.__source, r.__self;
    var m = lr(r, [
        'children',
        'content',
        'visible',
        'singleton',
        'render',
        'reference',
        'disabled',
        'ignoreAttributes',
        '__source',
        '__self',
      ]),
      w = a !== void 0,
      g = f !== void 0,
      y = ae.exports.useState(!1),
      D = y[0],
      L = y[1],
      P = ae.exports.useState({}),
      i = P[0],
      E = P[1],
      d = ae.exports.useState(),
      R = d[0],
      k = d[1],
      T = ti(function () {
        return { container: zt(), renders: 1 };
      }),
      C = Object.assign({ ignoreAttributes: x }, m, { content: T.container });
    w && ((C.trigger = 'manual'), (C.hideOnClick = !1)), g && (p = !0);
    var j = C,
      M = C.plugins || [];
    c &&
      (j = Object.assign({}, C, {
        plugins:
          g && f.data != null
            ? [].concat(M, [
                {
                  fn: function () {
                    return {
                      onTrigger: function (N, H) {
                        var I = f.data.children.find(function (V) {
                          var W = V.instance;
                          return W.reference === H.currentTarget;
                        });
                        (N.state.$$activeSingletonInstance = I.instance),
                          k(I.content);
                      },
                    };
                  },
                },
              ])
            : M,
        render: function () {
          return { popper: T.container };
        },
      }));
    var $ = [u].concat(n ? [n.type] : []);
    return (
      lt(function () {
        var B = u;
        u && u.hasOwnProperty('current') && (B = u.current);
        var O = e(
          B || T.ref || zt(),
          Object.assign({}, j, { plugins: [ri].concat(C.plugins || []) }),
        );
        return (
          (T.instance = O),
          p && O.disable(),
          a && O.show(),
          g &&
            f.hook({
              instance: O,
              content: o,
              props: j,
              setSingletonContent: k,
            }),
          L(!0),
          function () {
            O.destroy(), f?.cleanup(O);
          }
        );
      }, $),
      lt(function () {
        var B;
        if (T.renders === 1) {
          T.renders++;
          return;
        }
        var O = T.instance;
        O.setProps(ei(O.props, j)),
          (B = O.popperInstance) == null || B.forceUpdate(),
          p ? O.disable() : O.enable(),
          w && (a ? O.show() : O.hide()),
          g &&
            f.hook({
              instance: O,
              content: o,
              props: j,
              setSingletonContent: k,
            });
      }),
      lt(function () {
        var B;
        if (!!c) {
          var O = T.instance;
          O.setProps({
            popperOptions: Object.assign({}, O.props.popperOptions, {
              modifiers: [].concat(
                (
                  ((B = O.props.popperOptions) == null
                    ? void 0
                    : B.modifiers) || []
                ).filter(function (N) {
                  var H = N.name;
                  return H !== '$$tippyReact';
                }),
                [
                  {
                    name: '$$tippyReact',
                    enabled: !0,
                    phase: 'beforeWrite',
                    requires: ['computeStyles'],
                    fn: function (H) {
                      var I,
                        V = H.state,
                        W = (I = V.modifiersData) == null ? void 0 : I.hide;
                      (i.placement !== V.placement ||
                        i.referenceHidden !== W?.isReferenceHidden ||
                        i.escaped !== W?.hasPopperEscaped) &&
                        E({
                          placement: V.placement,
                          referenceHidden: W?.isReferenceHidden,
                          escaped: W?.hasPopperEscaped,
                        }),
                        (V.attributes.popper = {});
                    },
                  },
                ],
              ),
            }),
          });
        }
      }, [i.placement, i.referenceHidden, i.escaped].concat($)),
      dt.createElement(
        dt.Fragment,
        null,
        n
          ? ae.exports.cloneElement(n, {
              ref: function (O) {
                (T.ref = O), yt(n.ref, O);
              },
            })
          : null,
        D &&
          Or.exports.createPortal(c ? c(Qn(i), R, T.instance) : o, T.container),
      )
    );
  }
  return t;
}
var ii = function (e, t) {
    return ae.exports.forwardRef(function (n, o) {
      var a = n.children,
        f = lr(n, ['children']);
      return dt.createElement(
        e,
        Object.assign({}, t, f),
        a
          ? ae.exports.cloneElement(a, {
              ref: function (u) {
                yt(o, u), yt(a.ref, u);
              },
            })
          : null,
      );
    });
  },
  oi = ii(ni(Ve));
const ui = oi;
export { ui as T };
