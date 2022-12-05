import { r as O, R as ze, c as Yn } from './chunks/index.e8aae4d9.js';
import { j as Oi } from './chunks/jsx-runtime.15fba22c.js';
const mO = 'modulepreload',
  gO = function (r) {
    return '/' + r;
  },
  ba = {},
  bO = function (e, t, n) {
    if (!t || t.length === 0) return e();
    const s = document.getElementsByTagName('link');
    return Promise.all(
      t.map((o) => {
        if (((o = gO(o)), o in ba)) return;
        ba[o] = !0;
        const l = o.endsWith('.css'),
          a = l ? '[rel="stylesheet"]' : '';
        if (!!n)
          for (let u = s.length - 1; u >= 0; u--) {
            const f = s[u];
            if (f.href === o && (!l || f.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${o}"]${a}`)) return;
        const h = document.createElement('link');
        if (
          ((h.rel = l ? 'stylesheet' : mO),
          l || ((h.as = 'script'), (h.crossOrigin = '')),
          (h.href = o),
          document.head.appendChild(h),
          l)
        )
          return new Promise((u, f) => {
            h.addEventListener('load', u),
              h.addEventListener('error', () =>
                f(new Error(`Unable to preload CSS for ${o}`)),
              );
          });
      }),
    ).then(() => e());
  };
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var $r = function () {
    return (
      ($r =
        Object.assign ||
        function (e) {
          for (var t, n = 1, s = arguments.length; n < s; n++) {
            t = arguments[n];
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          }
          return e;
        }),
      $r.apply(this, arguments)
    );
  },
  ho = O.exports.createContext({});
function Mh(r) {
  var e = r.classes,
    t = r.children,
    n = O.exports.useContext(ho),
    s = jh(n, e);
  return ze.createElement(ho.Provider, { value: s, children: t });
}
function me(r, e) {
  var t = O.exports.useContext(ho),
    n = jh(t, e);
  return O.exports.useCallback(yO(r, n), [r, n]);
}
function yO(r, e) {
  return function () {
    for (var n = [], s = 0; s < arguments.length; s++) n[s] = arguments[s];
    var o = n.map(function (a) {
        return r + (r && a ? '-' : '') + a;
      }),
      l = o.slice();
    return (
      o.forEach(function (a) {
        a in e && l.push(e[a]);
      }),
      l.join(' ')
    );
  };
}
function jh(r, e) {
  return O.exports.useMemo(
    function () {
      return $r($r({}, r), e);
    },
    [r, e],
  );
}
var hl = {};
Object.defineProperty(hl, '__esModule', { value: !0 });
function QO(r) {
  return r === 'vue-cli'
    ? 'src/main.js'
    : r === 'angular-cli'
    ? 'src/main.ts'
    : r === 'create-react-app-typescript'
    ? 'src/index.tsx'
    : r === 'parcel'
    ? 'index.html'
    : r === 'gatsby'
    ? 'src/pages/index.js'
    : r === 'nuxt' ||
      r === 'next' ||
      r === 'apollo' ||
      r === 'reason' ||
      r === 'sapper'
    ? 'package.json'
    : r === 'nest'
    ? 'src/main.ts'
    : r === 'static'
    ? 'index.html'
    : 'src/index.js';
}
hl.getMainFile = QO;
var ya = 'sandbox.config.json';
function xO(r, e) {
  var t = e[ya] || e['/' + ya];
  if (t)
    try {
      var n = JSON.parse(t.content);
      if (n.template) return n.template;
    } catch {}
  var s = r.dependencies,
    o = s === void 0 ? {} : s,
    l = r.devDependencies,
    a = l === void 0 ? {} : l,
    c = Object.keys(o).concat(Object.keys(a)),
    h = ['nuxt', 'nuxt-edge'];
  if (
    c.some(function (p) {
      return h.indexOf(p) > -1;
    })
  )
    return 'nuxt';
  if (c.indexOf('next') > -1) return 'next';
  var u = [
    'apollo-server',
    'apollo-server-express',
    'apollo-server-hapi',
    'apollo-server-koa',
    'apollo-server-lambda',
    'apollo-server-micro',
  ];
  if (
    c.some(function (p) {
      return u.indexOf(p) > -1;
    })
  )
    return 'apollo';
  if (c.indexOf('ember-cli') > -1) return 'ember';
  if (c.indexOf('sapper') > -1) return 'sapper';
  var f = Object.keys(e);
  if (
    f.some(function (p) {
      return p.endsWith('.vue');
    })
  )
    return 'vue-cli';
  if (
    f.some(function (p) {
      return p.endsWith('.re');
    })
  )
    return 'reason';
  if (c.indexOf('gatsby') > -1) return 'gatsby';
  if (c.indexOf('parcel-bundler') > -1) return 'parcel';
  if (c.indexOf('react-scripts') > -1) return 'create-react-app';
  if (c.indexOf('react-scripts-ts') > -1) return 'create-react-app-typescript';
  if (c.indexOf('@angular/core') > -1) return 'angular-cli';
  if (c.indexOf('preact-cli') > -1) return 'preact-cli';
  if (c.indexOf('svelte') > -1) return 'svelte';
  if (c.indexOf('vue') > -1) return 'vue-cli';
  var d = ['@dojo/core', '@dojo/framework'];
  if (
    c.some(function (p) {
      return d.indexOf(p) > -1;
    })
  )
    return '@dojo/cli-create-app';
  if (c.indexOf('cx') > -1) return 'cxjs';
  if (c.indexOf('@nestjs/core') > -1 || c.indexOf('@nestjs/common') > -1)
    return 'nest';
}
var vO = (hl.getTemplate = xO),
  uo = { exports: {} };
(function (r, e) {
  var t = 200,
    n = '__lodash_hash_undefined__',
    s = 1,
    o = 2,
    l = 9007199254740991,
    a = '[object Arguments]',
    c = '[object Array]',
    h = '[object AsyncFunction]',
    u = '[object Boolean]',
    f = '[object Date]',
    d = '[object Error]',
    p = '[object Function]',
    m = '[object GeneratorFunction]',
    S = '[object Map]',
    T = '[object Number]',
    k = '[object Null]',
    b = '[object Object]',
    Q = '[object Promise]',
    v = '[object Proxy]',
    P = '[object RegExp]',
    y = '[object Set]',
    w = '[object String]',
    R = '[object Symbol]',
    A = '[object Undefined]',
    C = '[object WeakMap]',
    M = '[object ArrayBuffer]',
    z = '[object DataView]',
    V = '[object Float32Array]',
    re = '[object Float64Array]',
    ge = '[object Int8Array]',
    Qe = '[object Int16Array]',
    je = '[object Int32Array]',
    be = '[object Uint8Array]',
    ye = '[object Uint8ClampedArray]',
    We = '[object Uint16Array]',
    Xe = '[object Uint32Array]',
    F = /[\\^$.*+?()[\]{}|]/g,
    ie = /^\[object .+?Constructor\]$/,
    ae = /^(?:0|[1-9]\d*)$/,
    H = {};
  (H[V] = H[re] = H[ge] = H[Qe] = H[je] = H[be] = H[ye] = H[We] = H[Xe] = !0),
    (H[a] = H[c] = H[M] = H[u] = H[z] = H[f] = H[d] = H[p] = H[S] = H[T] = H[
      b
    ] = H[P] = H[y] = H[w] = H[C] = !1);
  var nt = typeof Yn == 'object' && Yn && Yn.Object === Object && Yn,
    Wi = typeof self == 'object' && self && self.Object === Object && self,
    xe = nt || Wi || Function('return this')(),
    Ae = e && !e.nodeType && e,
    Ye = Ae && !0 && r && !r.nodeType && r,
    ft = Ye && Ye.exports === Ae,
    dt = ft && nt.process,
    rt = (function () {
      try {
        return dt && dt.binding && dt.binding('util');
      } catch {}
    })(),
    Nt = rt && rt.isTypedArray;
  function oi(g, x) {
    for (var W = -1, D = g == null ? 0 : g.length, se = 0, Y = []; ++W < D; ) {
      var fe = g[W];
      x(fe, W, g) && (Y[se++] = fe);
    }
    return Y;
  }
  function xs(g, x) {
    for (var W = -1, D = x.length, se = g.length; ++W < D; ) g[se + W] = x[W];
    return g;
  }
  function li(g, x) {
    for (var W = -1, D = g == null ? 0 : g.length; ++W < D; )
      if (x(g[W], W, g)) return !0;
    return !1;
  }
  function vs(g, x) {
    for (var W = -1, D = Array(g); ++W < g; ) D[W] = x(W);
    return D;
  }
  function _n(g) {
    return function (x) {
      return g(x);
    };
  }
  function Xn(g, x) {
    return g.has(x);
  }
  function Zn(g, x) {
    return g?.[x];
  }
  function Bt(g) {
    var x = -1,
      W = Array(g.size);
    return (
      g.forEach(function (D, se) {
        W[++x] = [se, D];
      }),
      W
    );
  }
  function Dn(g, x) {
    return function (W) {
      return g(x(W));
    };
  }
  function Op(g) {
    var x = -1,
      W = Array(g.size);
    return (
      g.forEach(function (D) {
        W[++x] = D;
      }),
      W
    );
  }
  var mp = Array.prototype,
    gp = Function.prototype,
    In = Object.prototype,
    Ss = xe['__core-js_shared__'],
    ea = gp.toString,
    pt = In.hasOwnProperty,
    ta = (function () {
      var g = /[^.]+$/.exec((Ss && Ss.keys && Ss.keys.IE_PROTO) || '');
      return g ? 'Symbol(src)_1.' + g : '';
    })(),
    ia = In.toString,
    bp = RegExp(
      '^' +
        ea
          .call(pt)
          .replace(F, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    ),
    na = ft ? xe.Buffer : void 0,
    Mn = xe.Symbol,
    ra = xe.Uint8Array,
    sa = In.propertyIsEnumerable,
    yp = mp.splice,
    ai = Mn ? Mn.toStringTag : void 0,
    oa = Object.getOwnPropertySymbols,
    Qp = na ? na.isBuffer : void 0,
    xp = Dn(Object.keys, Object),
    $s = Ai(xe, 'DataView'),
    nn = Ai(xe, 'Map'),
    ks = Ai(xe, 'Promise'),
    ws = Ai(xe, 'Set'),
    Ts = Ai(xe, 'WeakMap'),
    rn = Ai(Object, 'create'),
    vp = ui($s),
    Sp = ui(nn),
    $p = ui(ks),
    kp = ui(ws),
    wp = ui(Ts),
    la = Mn ? Mn.prototype : void 0,
    Ps = la ? la.valueOf : void 0;
  function ci(g) {
    var x = -1,
      W = g == null ? 0 : g.length;
    for (this.clear(); ++x < W; ) {
      var D = g[x];
      this.set(D[0], D[1]);
    }
  }
  function Tp() {
    (this.__data__ = rn ? rn(null) : {}), (this.size = 0);
  }
  function Pp(g) {
    var x = this.has(g) && delete this.__data__[g];
    return (this.size -= x ? 1 : 0), x;
  }
  function Rp(g) {
    var x = this.__data__;
    if (rn) {
      var W = x[g];
      return W === n ? void 0 : W;
    }
    return pt.call(x, g) ? x[g] : void 0;
  }
  function Cp(g) {
    var x = this.__data__;
    return rn ? x[g] !== void 0 : pt.call(x, g);
  }
  function Wp(g, x) {
    var W = this.__data__;
    return (
      (this.size += this.has(g) ? 0 : 1),
      (W[g] = rn && x === void 0 ? n : x),
      this
    );
  }
  (ci.prototype.clear = Tp),
    (ci.prototype.delete = Pp),
    (ci.prototype.get = Rp),
    (ci.prototype.has = Cp),
    (ci.prototype.set = Wp);
  function Ct(g) {
    var x = -1,
      W = g == null ? 0 : g.length;
    for (this.clear(); ++x < W; ) {
      var D = g[x];
      this.set(D[0], D[1]);
    }
  }
  function Ap() {
    (this.__data__ = []), (this.size = 0);
  }
  function Ep(g) {
    var x = this.__data__,
      W = zn(x, g);
    if (W < 0) return !1;
    var D = x.length - 1;
    return W == D ? x.pop() : yp.call(x, W, 1), --this.size, !0;
  }
  function Lp(g) {
    var x = this.__data__,
      W = zn(x, g);
    return W < 0 ? void 0 : x[W][1];
  }
  function _p(g) {
    return zn(this.__data__, g) > -1;
  }
  function Xp(g, x) {
    var W = this.__data__,
      D = zn(W, g);
    return D < 0 ? (++this.size, W.push([g, x])) : (W[D][1] = x), this;
  }
  (Ct.prototype.clear = Ap),
    (Ct.prototype.delete = Ep),
    (Ct.prototype.get = Lp),
    (Ct.prototype.has = _p),
    (Ct.prototype.set = Xp);
  function hi(g) {
    var x = -1,
      W = g == null ? 0 : g.length;
    for (this.clear(); ++x < W; ) {
      var D = g[x];
      this.set(D[0], D[1]);
    }
  }
  function Zp() {
    (this.size = 0),
      (this.__data__ = {
        hash: new ci(),
        map: new (nn || Ct)(),
        string: new ci(),
      });
  }
  function Dp(g) {
    var x = Nn(this, g).delete(g);
    return (this.size -= x ? 1 : 0), x;
  }
  function Ip(g) {
    return Nn(this, g).get(g);
  }
  function Mp(g) {
    return Nn(this, g).has(g);
  }
  function jp(g, x) {
    var W = Nn(this, g),
      D = W.size;
    return W.set(g, x), (this.size += W.size == D ? 0 : 1), this;
  }
  (hi.prototype.clear = Zp),
    (hi.prototype.delete = Dp),
    (hi.prototype.get = Ip),
    (hi.prototype.has = Mp),
    (hi.prototype.set = jp);
  function jn(g) {
    var x = -1,
      W = g == null ? 0 : g.length;
    for (this.__data__ = new hi(); ++x < W; ) this.add(g[x]);
  }
  function zp(g) {
    return this.__data__.set(g, n), this;
  }
  function Np(g) {
    return this.__data__.has(g);
  }
  (jn.prototype.add = jn.prototype.push = zp), (jn.prototype.has = Np);
  function Ut(g) {
    var x = (this.__data__ = new Ct(g));
    this.size = x.size;
  }
  function Bp() {
    (this.__data__ = new Ct()), (this.size = 0);
  }
  function Up(g) {
    var x = this.__data__,
      W = x.delete(g);
    return (this.size = x.size), W;
  }
  function Vp(g) {
    return this.__data__.get(g);
  }
  function Yp(g) {
    return this.__data__.has(g);
  }
  function qp(g, x) {
    var W = this.__data__;
    if (W instanceof Ct) {
      var D = W.__data__;
      if (!nn || D.length < t - 1)
        return D.push([g, x]), (this.size = ++W.size), this;
      W = this.__data__ = new hi(D);
    }
    return W.set(g, x), (this.size = W.size), this;
  }
  (Ut.prototype.clear = Bp),
    (Ut.prototype.delete = Up),
    (Ut.prototype.get = Vp),
    (Ut.prototype.has = Yp),
    (Ut.prototype.set = qp);
  function Gp(g, x) {
    var W = Bn(g),
      D = !W && hO(g),
      se = !W && !D && Rs(g),
      Y = !W && !D && !se && ma(g),
      fe = W || D || se || Y,
      Se = fe ? vs(g.length, String) : [],
      Te = Se.length;
    for (var ce in g)
      (x || pt.call(g, ce)) &&
        !(
          fe &&
          (ce == 'length' ||
            (se && (ce == 'offset' || ce == 'parent')) ||
            (Y &&
              (ce == 'buffer' || ce == 'byteLength' || ce == 'byteOffset')) ||
            sO(ce, Te))
        ) &&
        Se.push(ce);
    return Se;
  }
  function zn(g, x) {
    for (var W = g.length; W--; ) if (fa(g[W][0], x)) return W;
    return -1;
  }
  function Fp(g, x, W) {
    var D = x(g);
    return Bn(g) ? D : xs(D, W(g));
  }
  function sn(g) {
    return g == null
      ? g === void 0
        ? A
        : k
      : ai && ai in Object(g)
      ? nO(g)
      : cO(g);
  }
  function aa(g) {
    return on(g) && sn(g) == a;
  }
  function ca(g, x, W, D, se) {
    return g === x
      ? !0
      : g == null || x == null || (!on(g) && !on(x))
      ? g !== g && x !== x
      : Hp(g, x, W, D, ca, se);
  }
  function Hp(g, x, W, D, se, Y) {
    var fe = Bn(g),
      Se = Bn(x),
      Te = fe ? c : Vt(g),
      ce = Se ? c : Vt(x);
    (Te = Te == a ? b : Te), (ce = ce == a ? b : ce);
    var qe = Te == b,
      st = ce == b,
      Ee = Te == ce;
    if (Ee && Rs(g)) {
      if (!Rs(x)) return !1;
      (fe = !0), (qe = !1);
    }
    if (Ee && !qe)
      return (
        Y || (Y = new Ut()),
        fe || ma(g) ? ha(g, x, W, D, se, Y) : tO(g, x, Te, W, D, se, Y)
      );
    if (!(W & s)) {
      var Ke = qe && pt.call(g, '__wrapped__'),
        et = st && pt.call(x, '__wrapped__');
      if (Ke || et) {
        var Yt = Ke ? g.value() : g,
          Wt = et ? x.value() : x;
        return Y || (Y = new Ut()), se(Yt, Wt, W, D, Y);
      }
    }
    return Ee ? (Y || (Y = new Ut()), iO(g, x, W, D, se, Y)) : !1;
  }
  function Jp(g) {
    if (!Oa(g) || lO(g)) return !1;
    var x = da(g) ? bp : ie;
    return x.test(ui(g));
  }
  function Kp(g) {
    return on(g) && pa(g.length) && !!H[sn(g)];
  }
  function eO(g) {
    if (!aO(g)) return xp(g);
    var x = [];
    for (var W in Object(g)) pt.call(g, W) && W != 'constructor' && x.push(W);
    return x;
  }
  function ha(g, x, W, D, se, Y) {
    var fe = W & s,
      Se = g.length,
      Te = x.length;
    if (Se != Te && !(fe && Te > Se)) return !1;
    var ce = Y.get(g);
    if (ce && Y.get(x)) return ce == x;
    var qe = -1,
      st = !0,
      Ee = W & o ? new jn() : void 0;
    for (Y.set(g, x), Y.set(x, g); ++qe < Se; ) {
      var Ke = g[qe],
        et = x[qe];
      if (D) var Yt = fe ? D(et, Ke, qe, x, g, Y) : D(Ke, et, qe, g, x, Y);
      if (Yt !== void 0) {
        if (Yt) continue;
        st = !1;
        break;
      }
      if (Ee) {
        if (
          !li(x, function (Wt, fi) {
            if (!Xn(Ee, fi) && (Ke === Wt || se(Ke, Wt, W, D, Y)))
              return Ee.push(fi);
          })
        ) {
          st = !1;
          break;
        }
      } else if (!(Ke === et || se(Ke, et, W, D, Y))) {
        st = !1;
        break;
      }
    }
    return Y.delete(g), Y.delete(x), st;
  }
  function tO(g, x, W, D, se, Y, fe) {
    switch (W) {
      case z:
        if (g.byteLength != x.byteLength || g.byteOffset != x.byteOffset)
          return !1;
        (g = g.buffer), (x = x.buffer);
      case M:
        return !(g.byteLength != x.byteLength || !Y(new ra(g), new ra(x)));
      case u:
      case f:
      case T:
        return fa(+g, +x);
      case d:
        return g.name == x.name && g.message == x.message;
      case P:
      case w:
        return g == x + '';
      case S:
        var Se = Bt;
      case y:
        var Te = D & s;
        if ((Se || (Se = Op), g.size != x.size && !Te)) return !1;
        var ce = fe.get(g);
        if (ce) return ce == x;
        (D |= o), fe.set(g, x);
        var qe = ha(Se(g), Se(x), D, se, Y, fe);
        return fe.delete(g), qe;
      case R:
        if (Ps) return Ps.call(g) == Ps.call(x);
    }
    return !1;
  }
  function iO(g, x, W, D, se, Y) {
    var fe = W & s,
      Se = ua(g),
      Te = Se.length,
      ce = ua(x),
      qe = ce.length;
    if (Te != qe && !fe) return !1;
    for (var st = Te; st--; ) {
      var Ee = Se[st];
      if (!(fe ? Ee in x : pt.call(x, Ee))) return !1;
    }
    var Ke = Y.get(g);
    if (Ke && Y.get(x)) return Ke == x;
    var et = !0;
    Y.set(g, x), Y.set(x, g);
    for (var Yt = fe; ++st < Te; ) {
      Ee = Se[st];
      var Wt = g[Ee],
        fi = x[Ee];
      if (D) var ga = fe ? D(fi, Wt, Ee, x, g, Y) : D(Wt, fi, Ee, g, x, Y);
      if (!(ga === void 0 ? Wt === fi || se(Wt, fi, W, D, Y) : ga)) {
        et = !1;
        break;
      }
      Yt || (Yt = Ee == 'constructor');
    }
    if (et && !Yt) {
      var Un = g.constructor,
        Vn = x.constructor;
      Un != Vn &&
        'constructor' in g &&
        'constructor' in x &&
        !(
          typeof Un == 'function' &&
          Un instanceof Un &&
          typeof Vn == 'function' &&
          Vn instanceof Vn
        ) &&
        (et = !1);
    }
    return Y.delete(g), Y.delete(x), et;
  }
  function ua(g) {
    return Fp(g, dO, rO);
  }
  function Nn(g, x) {
    var W = g.__data__;
    return oO(x) ? W[typeof x == 'string' ? 'string' : 'hash'] : W.map;
  }
  function Ai(g, x) {
    var W = Zn(g, x);
    return Jp(W) ? W : void 0;
  }
  function nO(g) {
    var x = pt.call(g, ai),
      W = g[ai];
    try {
      g[ai] = void 0;
      var D = !0;
    } catch {}
    var se = ia.call(g);
    return D && (x ? (g[ai] = W) : delete g[ai]), se;
  }
  var rO = oa
      ? function (g) {
          return g == null
            ? []
            : ((g = Object(g)),
              oi(oa(g), function (x) {
                return sa.call(g, x);
              }));
        }
      : pO,
    Vt = sn;
  (($s && Vt(new $s(new ArrayBuffer(1))) != z) ||
    (nn && Vt(new nn()) != S) ||
    (ks && Vt(ks.resolve()) != Q) ||
    (ws && Vt(new ws()) != y) ||
    (Ts && Vt(new Ts()) != C)) &&
    (Vt = function (g) {
      var x = sn(g),
        W = x == b ? g.constructor : void 0,
        D = W ? ui(W) : '';
      if (D)
        switch (D) {
          case vp:
            return z;
          case Sp:
            return S;
          case $p:
            return Q;
          case kp:
            return y;
          case wp:
            return C;
        }
      return x;
    });
  function sO(g, x) {
    return (
      (x = x ?? l),
      !!x &&
        (typeof g == 'number' || ae.test(g)) &&
        g > -1 &&
        g % 1 == 0 &&
        g < x
    );
  }
  function oO(g) {
    var x = typeof g;
    return x == 'string' || x == 'number' || x == 'symbol' || x == 'boolean'
      ? g !== '__proto__'
      : g === null;
  }
  function lO(g) {
    return !!ta && ta in g;
  }
  function aO(g) {
    var x = g && g.constructor,
      W = (typeof x == 'function' && x.prototype) || In;
    return g === W;
  }
  function cO(g) {
    return ia.call(g);
  }
  function ui(g) {
    if (g != null) {
      try {
        return ea.call(g);
      } catch {}
      try {
        return g + '';
      } catch {}
    }
    return '';
  }
  function fa(g, x) {
    return g === x || (g !== g && x !== x);
  }
  var hO = aa(
      (function () {
        return arguments;
      })(),
    )
      ? aa
      : function (g) {
          return on(g) && pt.call(g, 'callee') && !sa.call(g, 'callee');
        },
    Bn = Array.isArray;
  function uO(g) {
    return g != null && pa(g.length) && !da(g);
  }
  var Rs = Qp || OO;
  function fO(g, x) {
    return ca(g, x);
  }
  function da(g) {
    if (!Oa(g)) return !1;
    var x = sn(g);
    return x == p || x == m || x == h || x == v;
  }
  function pa(g) {
    return typeof g == 'number' && g > -1 && g % 1 == 0 && g <= l;
  }
  function Oa(g) {
    var x = typeof g;
    return g != null && (x == 'object' || x == 'function');
  }
  function on(g) {
    return g != null && typeof g == 'object';
  }
  var ma = Nt ? _n(Nt) : Kp;
  function dO(g) {
    return uO(g) ? Gp(g) : eO(g);
  }
  function pO() {
    return [];
  }
  function OO() {
    return !1;
  }
  r.exports = fO;
})(uo, uo.exports);
const dn = uo.exports;
var SO = class {
    constructor(r, e, t) {
      (this.type = r),
        (this.handleMessage = e),
        (this.protocol = t),
        (this._disposeMessageListener = this.protocol.channelListen(
          async (n) => {
            if (n.type === this.getTypeId() && n.method) {
              let s = n;
              try {
                let o = await this.handleMessage(s),
                  l = { type: this.getTypeId(), msgId: s.msgId, result: o };
                this.protocol.dispatch(l);
              } catch (o) {
                let l = {
                  type: this.getTypeId(),
                  msgId: s.msgId,
                  error: { message: o.message },
                };
                this.protocol.dispatch(l);
              }
            }
          },
        ));
    }
    getTypeId() {
      return `protocol-${this.type}`;
    }
    dispose() {
      this._disposeMessageListener();
    }
  },
  $O = class {
    constructor(r, e) {
      (this.globalListeners = {}),
        (this.globalListenersCount = 0),
        (this.channelListeners = {}),
        (this.channelListenersCount = 0),
        (this.channelId = Math.floor(Math.random() * 1e6)),
        (this.frameWindow = r.contentWindow),
        (this.origin = e),
        (this.globalListeners = []),
        (this.channelListeners = []),
        (this.eventListener = this.eventListener.bind(this)),
        typeof window < 'u' &&
          window.addEventListener('message', this.eventListener);
    }
    cleanup() {
      window.removeEventListener('message', this.eventListener),
        (this.globalListeners = {}),
        (this.channelListeners = {}),
        (this.globalListenersCount = 0),
        (this.channelListenersCount = 0);
    }
    register() {
      !this.frameWindow ||
        this.frameWindow.postMessage(
          {
            type: 'register-frame',
            origin: document.location.origin,
            id: this.channelId,
          },
          this.origin,
        );
    }
    dispatch(r) {
      !this.frameWindow ||
        this.frameWindow.postMessage(
          { $id: this.channelId, codesandbox: !0, ...r },
          this.origin,
        );
    }
    globalListen(r) {
      if (typeof r != 'function') return () => {};
      let e = this.globalListenersCount;
      return (
        (this.globalListeners[e] = r),
        this.globalListenersCount++,
        () => {
          delete this.globalListeners[e];
        }
      );
    }
    channelListen(r) {
      if (typeof r != 'function') return () => {};
      let e = this.channelListenersCount;
      return (
        (this.channelListeners[e] = r),
        this.channelListenersCount++,
        () => {
          delete this.channelListeners[e];
        }
      );
    }
    eventListener(r) {
      if (r.source !== this.frameWindow) return;
      let e = r.data;
      !e.codesandbox ||
        (Object.values(this.globalListeners).forEach((t) => t(e)),
        e.$id === this.channelId &&
          Object.values(this.channelListeners).forEach((t) => t(e)));
    }
  },
  Qa =
    '[sandpack-client]: "dependencies" was not specified - provide either a package.json or a "dependencies" value',
  kO =
    '[sandpack-client]: "entry" was not specified - provide either a package.json with the "main" field or an "entry" value';
function zh(r = {}, e = {}, t = '/index.js') {
  return JSON.stringify(
    { name: 'sandpack-project', main: t, dependencies: r, devDependencies: e },
    null,
    2,
  );
}
function Nh(r, e, t, n) {
  var s, o;
  let l = Si(r),
    a = l['/package.json'];
  if (!a) {
    if (!e) throw new Error(Qa);
    if (!n) throw new Error(kO);
    return (l['/package.json'] = { code: zh(e, t, n) }), l;
  }
  if (a) {
    let c = JSON.parse(a.code);
    if (!e && !c.dependencies) throw new Error(Qa);
    e &&
      (c.dependencies = {
        ...((s = c.dependencies) != null ? s : {}),
        ...(e ?? {}),
      }),
      t &&
        (c.devDependencies = {
          ...((o = c.devDependencies) != null ? o : {}),
          ...(t ?? {}),
        }),
      n && (c.main = n),
      (l['/package.json'] = { code: JSON.stringify(c, null, 2) });
  }
  return l;
}
function Bh(r) {
  if (r.title === 'SyntaxError') {
    let { title: s, path: o, message: l, line: a, column: c } = r;
    return { title: s, path: o, message: l, line: a, column: c };
  }
  let e = wO(r.payload.frames);
  if (!e) return { message: r.message };
  let t = PO(e),
    n = TO(e);
  return {
    message: RO(e._originalFileName, r.message, n, t),
    title: r.title,
    path: e._originalFileName,
    line: e._originalLineNumber,
    column: e._originalColumnNumber,
  };
}
function wO(r) {
  if (r) return r.find((e) => !!e._originalFileName);
}
function TO(r) {
  return r ? ` (${r._originalLineNumber}:${r._originalColumnNumber})` : '';
}
function PO(r) {
  let e = r._originalScriptCode[
      r._originalScriptCode.length - 1
    ].lineNumber.toString().length,
    t = 2,
    n = 3,
    s = t + e + n + r._originalColumnNumber;
  return r._originalScriptCode.reduce((o, l) => {
    let a = l.highlight ? '>' : ' ',
      c =
        l.lineNumber.toString().length === e
          ? `${l.lineNumber}`
          : ` ${l.lineNumber}`,
      h = l.highlight
        ? `
` +
          ' '.repeat(s) +
          '^'
        : '';
    return (
      o +
      `
` +
      a +
      ' ' +
      c +
      ' | ' +
      l.content +
      h
    );
  }, '');
}
function RO(r, e, t, n) {
  return `${r}: ${e}${t}
${n}`;
}
var Si = (r) => {
    if (typeof r == 'string') return r.startsWith('/') ? r : `/${r}`;
    if (Array.isArray(r))
      return r.map((e) => (e.startsWith('/') ? e : `/${e}`));
    if (typeof r == 'object' && r !== null)
      return Object.entries(r).reduce((e, [t, n]) => {
        let s = t.startsWith('/') ? t : `/${t}`;
        return (e[s] = n), e;
      }, {});
  },
  CO = `https://${'1.12.1'.replace(/\./g, '-')}-sandpack.codesandbox.io/`,
  WO = class {
    constructor(r, e, t = {}) {
      if (
        ((this.getTranspilerContext = () =>
          new Promise((n) => {
            let s = this.listen((o) => {
              o.type === 'transpiler-context' && (n(o.data), s());
            });
            this.dispatch({ type: 'get-transpiler-context' });
          })),
        (this.options = t),
        (this.sandboxInfo = e),
        (this.bundlerURL = t.bundlerURL || CO),
        (this.bundlerState = void 0),
        (this.errors = []),
        (this.status = 'initializing'),
        typeof r == 'string')
      ) {
        this.selector = r;
        let n = document.querySelector(r);
        if (!n)
          throw new Error(
            `[sandpack-client]: the element '${r}' was not found`,
          );
        (this.element = n),
          (this.iframe = document.createElement('iframe')),
          this.initializeElement();
      } else (this.element = r), (this.iframe = r);
      this.iframe.getAttribute('sandbox') ||
        this.iframe.setAttribute(
          'sandbox',
          'allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts',
        ),
        this.setLocationURLIntoIFrame(),
        (this.iframeProtocol = new $O(this.iframe, this.bundlerURL)),
        (this.unsubscribeGlobalListener = this.iframeProtocol.globalListen(
          (n) => {
            n.type !== 'initialized' ||
              !this.iframe.contentWindow ||
              (this.iframeProtocol.register(),
              this.options.fileResolver &&
                (this.fileResolverProtocol = new SO(
                  'fs',
                  async (s) => {
                    if (s.method === 'isFile')
                      return this.options.fileResolver.isFile(s.params[0]);
                    if (s.method === 'readFile')
                      return this.options.fileResolver.readFile(s.params[0]);
                    throw new Error('Method not supported');
                  },
                  this.iframeProtocol,
                )),
              this.updatePreview(this.sandboxInfo, !0));
          },
        )),
        (this.unsubscribeChannelListener = this.iframeProtocol.channelListen(
          (n) => {
            switch (n.type) {
              case 'start': {
                this.errors = [];
                break;
              }
              case 'status': {
                this.status = n.status;
                break;
              }
              case 'action': {
                n.action === 'show-error' &&
                  (this.errors = [...this.errors, Bh(n)]);
                break;
              }
              case 'state': {
                this.bundlerState = n.state;
                break;
              }
            }
          },
        ));
    }
    setLocationURLIntoIFrame() {
      var r;
      let e = this.options.startRoute
        ? new URL(this.options.startRoute, this.bundlerURL).toString()
        : this.bundlerURL;
      (r = this.iframe.contentWindow) == null || r.location.replace(e);
    }
    cleanup() {
      this.unsubscribeChannelListener(),
        this.unsubscribeGlobalListener(),
        this.iframeProtocol.cleanup();
    }
    updateOptions(r) {
      dn(this.options, r) || ((this.options = r), this.updatePreview());
    }
    updatePreview(r = this.sandboxInfo, e) {
      var t, n, s, o;
      this.sandboxInfo = { ...this.sandboxInfo, ...r };
      let l = this.getFiles(),
        a = Object.keys(l).reduce(
          (u, f) => ({ ...u, [f]: { code: l[f].code, path: f } }),
          {},
        ),
        c = JSON.parse(
          zh(
            this.sandboxInfo.dependencies,
            this.sandboxInfo.devDependencies,
            this.sandboxInfo.entry,
          ),
        );
      try {
        c = JSON.parse(l['/package.json'].code);
      } catch (u) {
        console.error(
          '[sandpack-client]: could not parse package.json file: ' + u.message,
        );
      }
      let h = Object.keys(l).reduce(
        (u, f) => ({ ...u, [f]: { content: l[f].code, path: f } }),
        {},
      );
      this.dispatch({
        type: 'compile',
        codesandbox: !0,
        version: 3,
        isInitializationCompile: e,
        modules: a,
        reactDevTools: this.options.reactDevTools,
        externalResources: this.options.externalResources || [],
        hasFileResolver: Boolean(this.options.fileResolver),
        disableDependencyPreprocessing: this.sandboxInfo
          .disableDependencyPreprocessing,
        template: this.sandboxInfo.template || vO(c, h),
        showOpenInCodeSandbox:
          (t = this.options.showOpenInCodeSandbox) != null ? t : !0,
        showErrorScreen: (n = this.options.showErrorScreen) != null ? n : !0,
        showLoadingScreen:
          (s = this.options.showLoadingScreen) != null ? s : !0,
        skipEval: this.options.skipEval || !1,
        clearConsoleDisabled: !this.options.clearConsoleOnFirstCompile,
        logLevel: (o = this.options.logLevel) != null ? o : fo.Info,
        customNpmRegistries: this.options.customNpmRegistries,
      });
    }
    dispatch(r) {
      r.type === 'refresh' && this.setLocationURLIntoIFrame(),
        this.iframeProtocol.dispatch(r);
    }
    listen(r) {
      return this.iframeProtocol.channelListen(r);
    }
    getCodeSandboxURL() {
      let r = this.getFiles(),
        e = Object.keys(r).reduce(
          (t, n) => ({
            ...t,
            [n.replace('/', '')]: { content: r[n].code, isBinary: !1 },
          }),
          {},
        );
      return fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
        method: 'POST',
        body: JSON.stringify({ files: e }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((t) => t.json())
        .then((t) => ({
          sandboxId: t.sandbox_id,
          editorUrl: `https://codesandbox.io/s/${t.sandbox_id}`,
          embedUrl: `https://codesandbox.io/embed/${t.sandbox_id}`,
        }));
    }
    getFiles() {
      let { sandboxInfo: r } = this;
      return r.files['/package.json'] === void 0
        ? Nh(r.files, r.dependencies, r.devDependencies, r.entry)
        : this.sandboxInfo.files;
    }
    initializeElement() {
      if (
        ((this.iframe.style.border = '0'),
        (this.iframe.style.width = this.options.width || '100%'),
        (this.iframe.style.height = this.options.height || '100%'),
        (this.iframe.style.overflow = 'hidden'),
        !this.element.parentNode)
      )
        throw new Error(
          '[sandpack-client]: the given iframe does not have a parent.',
        );
      this.element.parentNode.replaceChild(this.iframe, this.element);
    }
  },
  fo;
(function (r) {
  (r[(r.None = 0)] = 'None'),
    (r[(r.Error = 10)] = 'Error'),
    (r[(r.Warning = 20)] = 'Warning'),
    (r[(r.Info = 30)] = 'Info'),
    (r[(r.Debug = 40)] = 'Debug');
})(fo || (fo = {}));
var ee = 'colors',
  Ze = 'sizes',
  I = 'space',
  AO = {
    gap: I,
    gridGap: I,
    columnGap: I,
    gridColumnGap: I,
    rowGap: I,
    gridRowGap: I,
    inset: I,
    insetBlock: I,
    insetBlockEnd: I,
    insetBlockStart: I,
    insetInline: I,
    insetInlineEnd: I,
    insetInlineStart: I,
    margin: I,
    marginTop: I,
    marginRight: I,
    marginBottom: I,
    marginLeft: I,
    marginBlock: I,
    marginBlockEnd: I,
    marginBlockStart: I,
    marginInline: I,
    marginInlineEnd: I,
    marginInlineStart: I,
    padding: I,
    paddingTop: I,
    paddingRight: I,
    paddingBottom: I,
    paddingLeft: I,
    paddingBlock: I,
    paddingBlockEnd: I,
    paddingBlockStart: I,
    paddingInline: I,
    paddingInlineEnd: I,
    paddingInlineStart: I,
    top: I,
    right: I,
    bottom: I,
    left: I,
    scrollMargin: I,
    scrollMarginTop: I,
    scrollMarginRight: I,
    scrollMarginBottom: I,
    scrollMarginLeft: I,
    scrollMarginX: I,
    scrollMarginY: I,
    scrollMarginBlock: I,
    scrollMarginBlockEnd: I,
    scrollMarginBlockStart: I,
    scrollMarginInline: I,
    scrollMarginInlineEnd: I,
    scrollMarginInlineStart: I,
    scrollPadding: I,
    scrollPaddingTop: I,
    scrollPaddingRight: I,
    scrollPaddingBottom: I,
    scrollPaddingLeft: I,
    scrollPaddingX: I,
    scrollPaddingY: I,
    scrollPaddingBlock: I,
    scrollPaddingBlockEnd: I,
    scrollPaddingBlockStart: I,
    scrollPaddingInline: I,
    scrollPaddingInlineEnd: I,
    scrollPaddingInlineStart: I,
    fontSize: 'fontSizes',
    background: ee,
    backgroundColor: ee,
    backgroundImage: ee,
    borderImage: ee,
    border: ee,
    borderBlock: ee,
    borderBlockEnd: ee,
    borderBlockStart: ee,
    borderBottom: ee,
    borderBottomColor: ee,
    borderColor: ee,
    borderInline: ee,
    borderInlineEnd: ee,
    borderInlineStart: ee,
    borderLeft: ee,
    borderLeftColor: ee,
    borderRight: ee,
    borderRightColor: ee,
    borderTop: ee,
    borderTopColor: ee,
    caretColor: ee,
    color: ee,
    columnRuleColor: ee,
    fill: ee,
    outline: ee,
    outlineColor: ee,
    stroke: ee,
    textDecorationColor: ee,
    fontFamily: 'fonts',
    fontWeight: 'fontWeights',
    lineHeight: 'lineHeights',
    letterSpacing: 'letterSpacings',
    blockSize: Ze,
    minBlockSize: Ze,
    maxBlockSize: Ze,
    inlineSize: Ze,
    minInlineSize: Ze,
    maxInlineSize: Ze,
    width: Ze,
    minWidth: Ze,
    maxWidth: Ze,
    height: Ze,
    minHeight: Ze,
    maxHeight: Ze,
    flexBasis: Ze,
    gridTemplateColumns: Ze,
    gridTemplateRows: Ze,
    borderWidth: 'borderWidths',
    borderTopWidth: 'borderWidths',
    borderRightWidth: 'borderWidths',
    borderBottomWidth: 'borderWidths',
    borderLeftWidth: 'borderWidths',
    borderStyle: 'borderStyles',
    borderTopStyle: 'borderStyles',
    borderRightStyle: 'borderStyles',
    borderBottomStyle: 'borderStyles',
    borderLeftStyle: 'borderStyles',
    borderRadius: 'radii',
    borderTopLeftRadius: 'radii',
    borderTopRightRadius: 'radii',
    borderBottomRightRadius: 'radii',
    borderBottomLeftRadius: 'radii',
    boxShadow: 'shadows',
    textShadow: 'shadows',
    transition: 'transitions',
    zIndex: 'zIndices',
  },
  EO = (r, e) =>
    typeof e == 'function' ? { '()': Function.prototype.toString.call(e) } : e,
  Rn = () => {
    const r = Object.create(null);
    return (e, t, ...n) => {
      const s = ((o) => JSON.stringify(o, EO))(e);
      return s in r ? r[s] : (r[s] = t(e, ...n));
    };
  },
  fr = Symbol.for('sxs.internal'),
  ul = (r, e) =>
    Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)),
  xa = (r) => {
    for (const e in r) return !0;
    return !1;
  },
  { hasOwnProperty: LO } = Object.prototype,
  po = (r) =>
    r.includes('-') ? r : r.replace(/[A-Z]/g, (e) => '-' + e.toLowerCase()),
  _O = /\s+(?![^()]*\))/,
  Ei = (r) => (e) => r(...(typeof e == 'string' ? String(e).split(_O) : [e])),
  va = {
    appearance: (r) => ({ WebkitAppearance: r, appearance: r }),
    backfaceVisibility: (r) => ({
      WebkitBackfaceVisibility: r,
      backfaceVisibility: r,
    }),
    backdropFilter: (r) => ({ WebkitBackdropFilter: r, backdropFilter: r }),
    backgroundClip: (r) => ({ WebkitBackgroundClip: r, backgroundClip: r }),
    boxDecorationBreak: (r) => ({
      WebkitBoxDecorationBreak: r,
      boxDecorationBreak: r,
    }),
    clipPath: (r) => ({ WebkitClipPath: r, clipPath: r }),
    content: (r) => ({
      content:
        r.includes('"') ||
        r.includes("'") ||
        /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(
          r,
        )
          ? r
          : `"${r}"`,
    }),
    hyphens: (r) => ({ WebkitHyphens: r, hyphens: r }),
    maskImage: (r) => ({ WebkitMaskImage: r, maskImage: r }),
    maskSize: (r) => ({ WebkitMaskSize: r, maskSize: r }),
    tabSize: (r) => ({ MozTabSize: r, tabSize: r }),
    textSizeAdjust: (r) => ({ WebkitTextSizeAdjust: r, textSizeAdjust: r }),
    userSelect: (r) => ({ WebkitUserSelect: r, userSelect: r }),
    marginBlock: Ei((r, e) => ({
      marginBlockStart: r,
      marginBlockEnd: e || r,
    })),
    marginInline: Ei((r, e) => ({
      marginInlineStart: r,
      marginInlineEnd: e || r,
    })),
    maxSize: Ei((r, e) => ({ maxBlockSize: r, maxInlineSize: e || r })),
    minSize: Ei((r, e) => ({ minBlockSize: r, minInlineSize: e || r })),
    paddingBlock: Ei((r, e) => ({
      paddingBlockStart: r,
      paddingBlockEnd: e || r,
    })),
    paddingInline: Ei((r, e) => ({
      paddingInlineStart: r,
      paddingInlineEnd: e || r,
    })),
  },
  Cs = /([\d.]+)([^]*)/,
  XO = (r, e) =>
    r.length
      ? r.reduce(
          (t, n) => (
            t.push(
              ...e.map((s) =>
                s.includes('&')
                  ? s.replace(
                      /&/g,
                      /[ +>|~]/.test(n) && /&.*&/.test(s) ? `:is(${n})` : n,
                    )
                  : n + ' ' + s,
              ),
            ),
            t
          ),
          [],
        )
      : e,
  ZO = (r, e) =>
    r in DO && typeof e == 'string'
      ? e.replace(
          /^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,
          (t, n, s, o) =>
            n +
            (s === 'stretch'
              ? `-moz-available${o};${po(r)}:${n}-webkit-fill-available`
              : `-moz-fit-content${o};${po(r)}:${n}fit-content`) +
            o,
        )
      : String(e),
  DO = {
    blockSize: 1,
    height: 1,
    inlineSize: 1,
    maxBlockSize: 1,
    maxHeight: 1,
    maxInlineSize: 1,
    maxWidth: 1,
    minBlockSize: 1,
    minHeight: 1,
    minInlineSize: 1,
    minWidth: 1,
    width: 1,
  },
  Mt = (r) => (r ? r + '-' : ''),
  Uh = (r, e, t) =>
    r.replace(
      /([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,
      (n, s, o, l, a) =>
        (l == '$') == !!o
          ? n
          : (s || l == '--' ? 'calc(' : '') +
            'var(--' +
            (l === '$'
              ? Mt(e) + (a.includes('$') ? '' : Mt(t)) + a.replace(/\$/g, '-')
              : a) +
            ')' +
            (s || l == '--' ? '*' + (s || '') + (o || '1') + ')' : ''),
    ),
  IO = /\s*,\s*(?![^()]*\))/,
  MO = Object.prototype.toString,
  _i = (r, e, t, n, s) => {
    let o, l, a;
    const c = (h, u, f) => {
      let d, p;
      const m = (S) => {
        for (d in S) {
          const b = d.charCodeAt(0) === 64,
            Q = b && Array.isArray(S[d]) ? S[d] : [S[d]];
          for (p of Q) {
            const v = /[A-Z]/.test((k = d))
                ? k
                : k.replace(/-[^]/g, (y) => y[1].toUpperCase()),
              P =
                typeof p == 'object' &&
                p &&
                p.toString === MO &&
                (!n.utils[v] || !u.length);
            if (v in n.utils && !P) {
              const y = n.utils[v];
              if (y !== l) {
                (l = y), m(y(p)), (l = null);
                continue;
              }
            } else if (v in va) {
              const y = va[v];
              if (y !== a) {
                (a = y), m(y(p)), (a = null);
                continue;
              }
            }
            if (
              (b &&
                ((T =
                  d.slice(1) in n.media ? '@media ' + n.media[d.slice(1)] : d),
                (d = T.replace(
                  /\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,
                  (y, w, R, A, C, M) => {
                    const z = Cs.test(w),
                      V = 0.0625 * (z ? -1 : 1),
                      [re, ge] = z ? [A, w] : [w, A];
                    return (
                      '(' +
                      (R[0] === '='
                        ? ''
                        : (R[0] === '>') === z
                        ? 'max-'
                        : 'min-') +
                      re +
                      ':' +
                      (R[0] !== '=' && R.length === 1
                        ? ge.replace(
                            Cs,
                            (Qe, je, be) =>
                              Number(je) + V * (R === '>' ? 1 : -1) + be,
                          )
                        : ge) +
                      (C
                        ? ') and (' +
                          (C[0] === '>' ? 'min-' : 'max-') +
                          re +
                          ':' +
                          (C.length === 1
                            ? M.replace(
                                Cs,
                                (Qe, je, be) =>
                                  Number(je) + V * (C === '>' ? -1 : 1) + be,
                              )
                            : M)
                        : '') +
                      ')'
                    );
                  },
                ))),
              P)
            ) {
              const y = b ? f.concat(d) : [...f],
                w = b ? [...u] : XO(u, d.split(IO));
              o !== void 0 && s(Sa(...o)), (o = void 0), c(p, w, y);
            } else
              o === void 0 && (o = [[], u, f]),
                (d =
                  b || d.charCodeAt(0) !== 36
                    ? d
                    : `--${Mt(n.prefix)}${d.slice(1).replace(/\$/g, '-')}`),
                (p = P
                  ? p
                  : typeof p == 'number'
                  ? p && v in jO
                    ? String(p) + 'px'
                    : String(p)
                  : Uh(ZO(v, p ?? ''), n.prefix, n.themeMap[v])),
                o[0].push(`${b ? `${d} ` : `${po(d)}:`}${p}`);
          }
        }
        var T, k;
      };
      m(h), o !== void 0 && s(Sa(...o)), (o = void 0);
    };
    c(r, e, t);
  },
  Sa = (r, e, t) =>
    `${t.map((n) => `${n}{`).join('')}${
      e.length ? `${e.join(',')}{` : ''
    }${r.join(';')}${e.length ? '}' : ''}${Array(
      t.length ? t.length + 1 : 0,
    ).join('}')}`,
  jO = {
    animationDelay: 1,
    animationDuration: 1,
    backgroundSize: 1,
    blockSize: 1,
    border: 1,
    borderBlock: 1,
    borderBlockEnd: 1,
    borderBlockEndWidth: 1,
    borderBlockStart: 1,
    borderBlockStartWidth: 1,
    borderBlockWidth: 1,
    borderBottom: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    borderBottomWidth: 1,
    borderEndEndRadius: 1,
    borderEndStartRadius: 1,
    borderInlineEnd: 1,
    borderInlineEndWidth: 1,
    borderInlineStart: 1,
    borderInlineStartWidth: 1,
    borderInlineWidth: 1,
    borderLeft: 1,
    borderLeftWidth: 1,
    borderRadius: 1,
    borderRight: 1,
    borderRightWidth: 1,
    borderSpacing: 1,
    borderStartEndRadius: 1,
    borderStartStartRadius: 1,
    borderTop: 1,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderTopWidth: 1,
    borderWidth: 1,
    bottom: 1,
    columnGap: 1,
    columnRule: 1,
    columnRuleWidth: 1,
    columnWidth: 1,
    containIntrinsicSize: 1,
    flexBasis: 1,
    fontSize: 1,
    gap: 1,
    gridAutoColumns: 1,
    gridAutoRows: 1,
    gridTemplateColumns: 1,
    gridTemplateRows: 1,
    height: 1,
    inlineSize: 1,
    inset: 1,
    insetBlock: 1,
    insetBlockEnd: 1,
    insetBlockStart: 1,
    insetInline: 1,
    insetInlineEnd: 1,
    insetInlineStart: 1,
    left: 1,
    letterSpacing: 1,
    margin: 1,
    marginBlock: 1,
    marginBlockEnd: 1,
    marginBlockStart: 1,
    marginBottom: 1,
    marginInline: 1,
    marginInlineEnd: 1,
    marginInlineStart: 1,
    marginLeft: 1,
    marginRight: 1,
    marginTop: 1,
    maxBlockSize: 1,
    maxHeight: 1,
    maxInlineSize: 1,
    maxWidth: 1,
    minBlockSize: 1,
    minHeight: 1,
    minInlineSize: 1,
    minWidth: 1,
    offsetDistance: 1,
    offsetRotate: 1,
    outline: 1,
    outlineOffset: 1,
    outlineWidth: 1,
    overflowClipMargin: 1,
    padding: 1,
    paddingBlock: 1,
    paddingBlockEnd: 1,
    paddingBlockStart: 1,
    paddingBottom: 1,
    paddingInline: 1,
    paddingInlineEnd: 1,
    paddingInlineStart: 1,
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 1,
    perspective: 1,
    right: 1,
    rowGap: 1,
    scrollMargin: 1,
    scrollMarginBlock: 1,
    scrollMarginBlockEnd: 1,
    scrollMarginBlockStart: 1,
    scrollMarginBottom: 1,
    scrollMarginInline: 1,
    scrollMarginInlineEnd: 1,
    scrollMarginInlineStart: 1,
    scrollMarginLeft: 1,
    scrollMarginRight: 1,
    scrollMarginTop: 1,
    scrollPadding: 1,
    scrollPaddingBlock: 1,
    scrollPaddingBlockEnd: 1,
    scrollPaddingBlockStart: 1,
    scrollPaddingBottom: 1,
    scrollPaddingInline: 1,
    scrollPaddingInlineEnd: 1,
    scrollPaddingInlineStart: 1,
    scrollPaddingLeft: 1,
    scrollPaddingRight: 1,
    scrollPaddingTop: 1,
    shapeMargin: 1,
    textDecoration: 1,
    textDecorationThickness: 1,
    textIndent: 1,
    textUnderlineOffset: 1,
    top: 1,
    transitionDelay: 1,
    transitionDuration: 1,
    verticalAlign: 1,
    width: 1,
    wordSpacing: 1,
  },
  $a = (r) => String.fromCharCode(r + (r > 25 ? 39 : 97)),
  Qi = (r) =>
    ((e) => {
      let t,
        n = '';
      for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = $a(t % 52) + n;
      return $a(t % 52) + n;
    })(
      ((e, t) => {
        let n = t.length;
        for (; n; ) e = (33 * e) ^ t.charCodeAt(--n);
        return e;
      })(5381, JSON.stringify(r)) >>> 0,
    ),
  pn = [
    'themed',
    'global',
    'styled',
    'onevar',
    'resonevar',
    'allvar',
    'inline',
  ],
  zO = (r) => {
    if (r.href && !r.href.startsWith(location.origin)) return !1;
    try {
      return !!r.cssRules;
    } catch {
      return !1;
    }
  },
  NO = (r) => {
    let e;
    const t = () => {
        const { cssRules: s } = e.sheet;
        return [].map
          .call(s, (o, l) => {
            const { cssText: a } = o;
            let c = '';
            if (a.startsWith('--sxs')) return '';
            if (s[l - 1] && (c = s[l - 1].cssText).startsWith('--sxs')) {
              if (!o.cssRules.length) return '';
              for (const h in e.rules)
                if (e.rules[h].group === o)
                  return `--sxs{--sxs:${[...e.rules[h].cache].join(' ')}}${a}`;
              return o.cssRules.length ? `${c}${a}` : '';
            }
            return a;
          })
          .join('');
      },
      n = () => {
        if (e) {
          const { rules: a, sheet: c } = e;
          if (!c.deleteRule) {
            for (; Object(Object(c.cssRules)[0]).type === 3; )
              c.cssRules.splice(0, 1);
            c.cssRules = [];
          }
          for (const h in a) delete a[h];
        }
        const s = Object(r).styleSheets || [];
        for (const a of s)
          if (zO(a)) {
            for (let c = 0, h = a.cssRules; h[c]; ++c) {
              const u = Object(h[c]);
              if (u.type !== 1) continue;
              const f = Object(h[c + 1]);
              if (f.type !== 4) continue;
              ++c;
              const { cssText: d } = u;
              if (!d.startsWith('--sxs')) continue;
              const p = d.slice(14, -3).trim().split(/\s+/),
                m = pn[p[0]];
              m &&
                (e || (e = { sheet: a, reset: n, rules: {}, toString: t }),
                (e.rules[m] = { group: f, index: c, cache: new Set(p) }));
            }
            if (e) break;
          }
        if (!e) {
          const a = (c, h) => ({
            type: h,
            cssRules: [],
            insertRule(u, f) {
              this.cssRules.splice(
                f,
                0,
                a(
                  u,
                  { import: 3, undefined: 1 }[
                    (u.toLowerCase().match(/^@([a-z]+)/) || [])[1]
                  ] || 4,
                ),
              );
            },
            get cssText() {
              return c === '@media{}'
                ? `@media{${[].map
                    .call(this.cssRules, (u) => u.cssText)
                    .join('')}}`
                : c;
            },
          });
          e = {
            sheet: r
              ? (r.head || r).appendChild(document.createElement('style')).sheet
              : a('', 'text/css'),
            rules: {},
            reset: n,
            toString: t,
          };
        }
        const { sheet: o, rules: l } = e;
        for (let a = pn.length - 1; a >= 0; --a) {
          const c = pn[a];
          if (!l[c]) {
            const h = pn[a + 1],
              u = l[h] ? l[h].index : o.cssRules.length;
            o.insertRule('@media{}', u),
              o.insertRule(`--sxs{--sxs:${a}}`, u),
              (l[c] = {
                group: o.cssRules[u + 1],
                index: u,
                cache: new Set([a]),
              });
          }
          BO(l[c]);
        }
      };
    return n(), e;
  },
  BO = (r) => {
    const e = r.group;
    let t = e.cssRules.length;
    r.apply = (n) => {
      try {
        e.insertRule(n, t), ++t;
      } catch {}
    };
  },
  ln = Symbol(),
  UO = Rn(),
  VO = (r, e) =>
    UO(r, () => (...t) => {
      let n = { type: null, composers: new Set() };
      for (const s of t)
        if (s != null)
          if (s[fr]) {
            n.type == null && (n.type = s[fr].type);
            for (const o of s[fr].composers) n.composers.add(o);
          } else
            s.constructor !== Object || s.$$typeof
              ? n.type == null && (n.type = s)
              : n.composers.add(YO(s, r));
      return (
        n.type == null && (n.type = 'span'),
        n.composers.size || n.composers.add(['PJLV', {}, [], [], {}, []]),
        qO(r, n, e)
      );
    }),
  YO = ({ variants: r, compoundVariants: e, defaultVariants: t, ...n }, s) => {
    const o = `${Mt(s.prefix)}c-${Qi(n)}`,
      l = [],
      a = [],
      c = Object.create(null),
      h = [];
    for (const d in t) c[d] = String(t[d]);
    if (typeof r == 'object' && r)
      for (const d in r) {
        (u = c), (f = d), LO.call(u, f) || (c[d] = 'undefined');
        const p = r[d];
        for (const m in p) {
          const S = { [d]: String(m) };
          String(m) === 'undefined' && h.push(d);
          const T = p[m],
            k = [S, T, !xa(T)];
          l.push(k);
        }
      }
    var u, f;
    if (typeof e == 'object' && e)
      for (const d of e) {
        let { css: p, ...m } = d;
        p = (typeof p == 'object' && p) || {};
        for (const T in m) m[T] = String(m[T]);
        const S = [m, p, !xa(p)];
        a.push(S);
      }
    return [o, n, l, a, c, h];
  },
  qO = (r, e, t) => {
    const [n, s, o, l] = GO(e.composers),
      a =
        typeof e.type == 'function' || e.type.$$typeof
          ? ((f) => {
              function d() {
                for (let p = 0; p < d[ln].length; p++) {
                  const [m, S] = d[ln][p];
                  f.rules[m].apply(S);
                }
                return (d[ln] = []), null;
              }
              return (
                (d[ln] = []),
                (d.rules = {}),
                pn.forEach(
                  (p) => (d.rules[p] = { apply: (m) => d[ln].push([p, m]) }),
                ),
                d
              );
            })(t)
          : null,
      c = (a || t).rules,
      h = `.${n}${s.length > 1 ? `:where(.${s.slice(1).join('.')})` : ''}`,
      u = (f) => {
        f = (typeof f == 'object' && f) || FO;
        const { css: d, ...p } = f,
          m = {};
        for (const k in o)
          if ((delete p[k], k in f)) {
            let b = f[k];
            typeof b == 'object' && b
              ? (m[k] = { '@initial': o[k], ...b })
              : ((b = String(b)),
                (m[k] = b !== 'undefined' || l.has(k) ? b : o[k]));
          } else m[k] = o[k];
        const S = new Set([...s]);
        for (const [k, b, Q, v] of e.composers) {
          t.rules.styled.cache.has(k) ||
            (t.rules.styled.cache.add(k),
            _i(b, [`.${k}`], [], r, (w) => {
              c.styled.apply(w);
            }));
          const P = ka(Q, m, r.media),
            y = ka(v, m, r.media, !0);
          for (const w of P)
            if (w !== void 0)
              for (const [R, A, C] of w) {
                const M = `${k}-${Qi(A)}-${R}`;
                S.add(M);
                const z = (C ? t.rules.resonevar : t.rules.onevar).cache,
                  V = C ? c.resonevar : c.onevar;
                z.has(M) ||
                  (z.add(M),
                  _i(A, [`.${M}`], [], r, (re) => {
                    V.apply(re);
                  }));
              }
          for (const w of y)
            if (w !== void 0)
              for (const [R, A] of w) {
                const C = `${k}-${Qi(A)}-${R}`;
                S.add(C),
                  t.rules.allvar.cache.has(C) ||
                    (t.rules.allvar.cache.add(C),
                    _i(A, [`.${C}`], [], r, (M) => {
                      c.allvar.apply(M);
                    }));
              }
        }
        if (typeof d == 'object' && d) {
          const k = `${n}-i${Qi(d)}-css`;
          S.add(k),
            t.rules.inline.cache.has(k) ||
              (t.rules.inline.cache.add(k),
              _i(d, [`.${k}`], [], r, (b) => {
                c.inline.apply(b);
              }));
        }
        for (const k of String(f.className || '')
          .trim()
          .split(/\s+/))
          k && S.add(k);
        const T = (p.className = [...S].join(' '));
        return {
          type: e.type,
          className: T,
          selector: h,
          props: p,
          toString: () => T,
          deferredInjector: a,
        };
      };
    return ul(u, {
      className: n,
      selector: h,
      [fr]: e,
      toString: () => (t.rules.styled.cache.has(n) || u(), n),
    });
  },
  GO = (r) => {
    let e = '';
    const t = [],
      n = {},
      s = [];
    for (const [o, , , , l, a] of r) {
      e === '' && (e = o), t.push(o), s.push(...a);
      for (const c in l) {
        const h = l[c];
        (n[c] === void 0 || h !== 'undefined' || a.includes(h)) && (n[c] = h);
      }
    }
    return [e, t, n, new Set(s)];
  },
  ka = (r, e, t, n) => {
    const s = [];
    e: for (let [o, l, a] of r) {
      if (a) continue;
      let c,
        h = 0,
        u = !1;
      for (c in o) {
        const f = o[c];
        let d = e[c];
        if (d !== f) {
          if (typeof d != 'object' || !d) continue e;
          {
            let p,
              m,
              S = 0;
            for (const T in d) {
              if (f === String(d[T])) {
                if (T !== '@initial') {
                  const k = T.slice(1);
                  (m = m || []).push(
                    k in t ? t[k] : T.replace(/^@media ?/, ''),
                  ),
                    (u = !0);
                }
                (h += S), (p = !0);
              }
              ++S;
            }
            if ((m && m.length && (l = { ['@media ' + m.join(', ')]: l }), !p))
              continue e;
          }
        }
      }
      (s[h] = s[h] || []).push([n ? 'cv' : `${c}-${o[c]}`, l, u]);
    }
    return s;
  },
  FO = {},
  HO = Rn(),
  JO = (r, e) =>
    HO(r, () => (...t) => {
      const n = () => {
        for (let s of t) {
          s = (typeof s == 'object' && s) || {};
          let o = Qi(s);
          if (!e.rules.global.cache.has(o)) {
            if ((e.rules.global.cache.add(o), '@import' in s)) {
              let l =
                [].indexOf.call(e.sheet.cssRules, e.rules.themed.group) - 1;
              for (let a of [].concat(s['@import']))
                (a = a.includes('"') || a.includes("'") ? a : `"${a}"`),
                  e.sheet.insertRule(`@import ${a};`, l++);
              delete s['@import'];
            }
            _i(s, [], [], r, (l) => {
              e.rules.global.apply(l);
            });
          }
        }
        return '';
      };
      return ul(n, { toString: n });
    }),
  KO = Rn(),
  em = (r, e) =>
    KO(r, () => (t) => {
      const n = `${Mt(r.prefix)}k-${Qi(t)}`,
        s = () => {
          if (!e.rules.global.cache.has(n)) {
            e.rules.global.cache.add(n);
            const o = [];
            _i(t, [], [], r, (a) => o.push(a));
            const l = `@keyframes ${n}{${o.join('')}}`;
            e.rules.global.apply(l);
          }
          return n;
        };
      return ul(s, {
        get name() {
          return s();
        },
        toString: s,
      });
    }),
  tm = class {
    constructor(r, e, t, n) {
      (this.token = r == null ? '' : String(r)),
        (this.value = e == null ? '' : String(e)),
        (this.scale = t == null ? '' : String(t)),
        (this.prefix = n == null ? '' : String(n));
    }
    get computedValue() {
      return 'var(' + this.variable + ')';
    }
    get variable() {
      return '--' + Mt(this.prefix) + Mt(this.scale) + this.token;
    }
    toString() {
      return this.computedValue;
    }
  },
  im = Rn(),
  nm = (r, e) =>
    im(r, () => (t, n) => {
      n = (typeof t == 'object' && t) || Object(n);
      const s = `.${(t =
          (t = typeof t == 'string' ? t : '') || `${Mt(r.prefix)}t-${Qi(n)}`)}`,
        o = {},
        l = [];
      for (const c in n) {
        o[c] = {};
        for (const h in n[c]) {
          const u = `--${Mt(r.prefix)}${c}-${h}`,
            f = Uh(String(n[c][h]), r.prefix, c);
          (o[c][h] = new tm(h, f, c, r.prefix)), l.push(`${u}:${f}`);
        }
      }
      const a = () => {
        if (l.length && !e.rules.themed.cache.has(t)) {
          e.rules.themed.cache.add(t);
          const c = `${n === r.theme ? ':root,' : ''}.${t}{${l.join(';')}}`;
          e.rules.themed.apply(c);
        }
        return t;
      };
      return {
        ...o,
        get className() {
          return a();
        },
        selector: s,
        toString: a,
      };
    }),
  rm = Rn(),
  sm = (r) => {
    let e = !1;
    const t = rm(r, (n) => {
      e = !0;
      const s =
          'prefix' in (n = (typeof n == 'object' && n) || {})
            ? String(n.prefix)
            : '',
        o = (typeof n.media == 'object' && n.media) || {},
        l =
          typeof n.root == 'object'
            ? n.root || null
            : globalThis.document || null,
        a = (typeof n.theme == 'object' && n.theme) || {},
        c = {
          prefix: s,
          media: o,
          theme: a,
          themeMap: (typeof n.themeMap == 'object' && n.themeMap) || { ...AO },
          utils: (typeof n.utils == 'object' && n.utils) || {},
        },
        h = NO(l),
        u = {
          css: VO(c, h),
          globalCss: JO(c, h),
          keyframes: em(c, h),
          createTheme: nm(c, h),
          reset() {
            h.reset(), u.theme.toString();
          },
          theme: {},
          sheet: h,
          config: c,
          prefix: s,
          getCssText: h.toString,
          toString: h.toString,
        };
      return String((u.theme = u.createTheme(a))), u;
    });
    return e || t.reset(), t;
  };
let Ii = 'lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o'
  .split(',')
  .map((r) => (r ? parseInt(r, 36) : 1));
for (let r = 1; r < Ii.length; r++) Ii[r] += Ii[r - 1];
function om(r) {
  for (let e = 1; e < Ii.length; e += 2) if (Ii[e] > r) return Ii[e - 1] <= r;
  return !1;
}
function wa(r) {
  return r >= 127462 && r <= 127487;
}
const Ta = 8205;
function Je(r, e, t = !0, n = !0) {
  return (t ? Vh : lm)(r, e, n);
}
function Vh(r, e, t) {
  if (e == r.length) return e;
  e && Yh(r.charCodeAt(e)) && qh(r.charCodeAt(e - 1)) && e--;
  let n = Xt(r, e);
  for (e += xn(n); e < r.length; ) {
    let s = Xt(r, e);
    if (n == Ta || s == Ta || (t && om(s))) (e += xn(s)), (n = s);
    else if (wa(s)) {
      let o = 0,
        l = e - 2;
      for (; l >= 0 && wa(Xt(r, l)); ) o++, (l -= 2);
      if (o % 2 == 0) break;
      e += 2;
    } else break;
  }
  return e;
}
function lm(r, e, t) {
  for (; e > 0; ) {
    let n = Vh(r, e - 2, t);
    if (n < e) return n;
    e--;
  }
  return 0;
}
function Yh(r) {
  return r >= 56320 && r < 57344;
}
function qh(r) {
  return r >= 55296 && r < 56320;
}
function Xt(r, e) {
  let t = r.charCodeAt(e);
  if (!qh(t) || e + 1 == r.length) return t;
  let n = r.charCodeAt(e + 1);
  return Yh(n) ? ((t - 55296) << 10) + (n - 56320) + 65536 : t;
}
function am(r) {
  return r <= 65535
    ? String.fromCharCode(r)
    : ((r -= 65536),
      String.fromCharCode((r >> 10) + 55296, (r & 1023) + 56320));
}
function xn(r) {
  return r < 65536 ? 1 : 2;
}
function qr(r, e, t = r.length) {
  let n = 0;
  for (let s = 0; s < t; )
    r.charCodeAt(s) == 9 ? ((n += e - (n % e)), s++) : (n++, (s = Je(r, s)));
  return n;
}
function cm(r, e, t, n) {
  for (let s = 0, o = 0; ; ) {
    if (o >= e) return s;
    if (s == r.length) break;
    (o += r.charCodeAt(s) == 9 ? t - (o % t) : 1), (s = Je(r, s));
  }
  return n === !0 ? -1 : r.length;
}
class K {
  constructor() {}
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(
        `Invalid position ${e} in document of length ${this.length}`,
      );
    return this.lineInner(e, !1, 1, 0);
  }
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(
        `Invalid line number ${e} in ${this.lines}-line document`,
      );
    return this.lineInner(e, !0, 1, 0);
  }
  replace(e, t, n) {
    let s = [];
    return (
      this.decompose(0, e, s, 2),
      n.length && n.decompose(0, n.length, s, 3),
      this.decompose(t, this.length, s, 1),
      Qt.from(s, this.length - (t - e) + n.length)
    );
  }
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  slice(e, t = this.length) {
    let n = [];
    return this.decompose(e, t, n, 0), Qt.from(n, t - e);
  }
  eq(e) {
    if (e == this) return !0;
    if (e.length != this.length || e.lines != this.lines) return !1;
    let t = this.scanIdentical(e, 1),
      n = this.length - this.scanIdentical(e, -1),
      s = new yn(this),
      o = new yn(e);
    for (let l = t, a = t; ; ) {
      if (
        (s.next(l),
        o.next(l),
        (l = 0),
        s.lineBreak != o.lineBreak || s.done != o.done || s.value != o.value)
      )
        return !1;
      if (((a += s.value.length), s.done || a >= n)) return !0;
    }
  }
  iter(e = 1) {
    return new yn(this, e);
  }
  iterRange(e, t = this.length) {
    return new Gh(this, e, t);
  }
  iterLines(e, t) {
    let n;
    if (e == null) n = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let s = this.line(e).from;
      n = this.iterRange(
        s,
        Math.max(
          s,
          t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to,
        ),
      );
    }
    return new Fh(n);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  static of(e) {
    if (e.length == 0)
      throw new RangeError('A document must have at least one line');
    return e.length == 1 && !e[0]
      ? K.empty
      : e.length <= 32
      ? new pe(e)
      : Qt.from(pe.split(e, []));
  }
}
class pe extends K {
  constructor(e, t = hm(e)) {
    super(), (this.text = e), (this.length = t);
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, n, s) {
    for (let o = 0; ; o++) {
      let l = this.text[o],
        a = s + l.length;
      if ((t ? n : a) >= e) return new um(s, a, n, l);
      (s = a + 1), n++;
    }
  }
  decompose(e, t, n, s) {
    let o =
      e <= 0 && t >= this.length
        ? this
        : new pe(
            Pa(this.text, e, t),
            Math.min(t, this.length) - Math.max(0, e),
          );
    if (s & 1) {
      let l = n.pop(),
        a = dr(o.text, l.text.slice(), 0, o.length);
      if (a.length <= 32) n.push(new pe(a, l.length + o.length));
      else {
        let c = a.length >> 1;
        n.push(new pe(a.slice(0, c)), new pe(a.slice(c)));
      }
    } else n.push(o);
  }
  replace(e, t, n) {
    if (!(n instanceof pe)) return super.replace(e, t, n);
    let s = dr(this.text, dr(n.text, Pa(this.text, 0, e)), t),
      o = this.length + n.length - (t - e);
    return s.length <= 32 ? new pe(s, o) : Qt.from(pe.split(s, []), o);
  }
  sliceString(
    e,
    t = this.length,
    n = `
`,
  ) {
    let s = '';
    for (let o = 0, l = 0; o <= t && l < this.text.length; l++) {
      let a = this.text[l],
        c = o + a.length;
      o > e && l && (s += n),
        e < c && t > o && (s += a.slice(Math.max(0, e - o), t - o)),
        (o = c + 1);
    }
    return s;
  }
  flatten(e) {
    for (let t of this.text) e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let n = [],
      s = -1;
    for (let o of e)
      n.push(o),
        (s += o.length + 1),
        n.length == 32 && (t.push(new pe(n, s)), (n = []), (s = -1));
    return s > -1 && t.push(new pe(n, s)), t;
  }
}
class Qt extends K {
  constructor(e, t) {
    super(), (this.children = e), (this.length = t), (this.lines = 0);
    for (let n of e) this.lines += n.lines;
  }
  lineInner(e, t, n, s) {
    for (let o = 0; ; o++) {
      let l = this.children[o],
        a = s + l.length,
        c = n + l.lines - 1;
      if ((t ? c : a) >= e) return l.lineInner(e, t, n, s);
      (s = a + 1), (n = c + 1);
    }
  }
  decompose(e, t, n, s) {
    for (let o = 0, l = 0; l <= t && o < this.children.length; o++) {
      let a = this.children[o],
        c = l + a.length;
      if (e <= c && t >= l) {
        let h = s & ((l <= e ? 1 : 0) | (c >= t ? 2 : 0));
        l >= e && c <= t && !h ? n.push(a) : a.decompose(e - l, t - l, n, h);
      }
      l = c + 1;
    }
  }
  replace(e, t, n) {
    if (n.lines < this.lines)
      for (let s = 0, o = 0; s < this.children.length; s++) {
        let l = this.children[s],
          a = o + l.length;
        if (e >= o && t <= a) {
          let c = l.replace(e - o, t - o, n),
            h = this.lines - l.lines + c.lines;
          if (c.lines < h >> (5 - 1) && c.lines > h >> (5 + 1)) {
            let u = this.children.slice();
            return (u[s] = c), new Qt(u, this.length - (t - e) + n.length);
          }
          return super.replace(o, a, c);
        }
        o = a + 1;
      }
    return super.replace(e, t, n);
  }
  sliceString(
    e,
    t = this.length,
    n = `
`,
  ) {
    let s = '';
    for (let o = 0, l = 0; o < this.children.length && l <= t; o++) {
      let a = this.children[o],
        c = l + a.length;
      l > e && o && (s += n),
        e < c && t > l && (s += a.sliceString(e - l, t - l, n)),
        (l = c + 1);
    }
    return s;
  }
  flatten(e) {
    for (let t of this.children) t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof Qt)) return 0;
    let n = 0,
      [s, o, l, a] =
        t > 0
          ? [0, 0, this.children.length, e.children.length]
          : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; s += t, o += t) {
      if (s == l || o == a) return n;
      let c = this.children[s],
        h = e.children[o];
      if (c != h) return n + c.scanIdentical(h, t);
      n += c.length + 1;
    }
  }
  static from(e, t = e.reduce((n, s) => n + s.length + 1, -1)) {
    let n = 0;
    for (let p of e) n += p.lines;
    if (n < 32) {
      let p = [];
      for (let m of e) m.flatten(p);
      return new pe(p, t);
    }
    let s = Math.max(32, n >> 5),
      o = s << 1,
      l = s >> 1,
      a = [],
      c = 0,
      h = -1,
      u = [];
    function f(p) {
      let m;
      if (p.lines > o && p instanceof Qt) for (let S of p.children) f(S);
      else
        p.lines > l && (c > l || !c)
          ? (d(), a.push(p))
          : p instanceof pe &&
            c &&
            (m = u[u.length - 1]) instanceof pe &&
            p.lines + m.lines <= 32
          ? ((c += p.lines),
            (h += p.length + 1),
            (u[u.length - 1] = new pe(
              m.text.concat(p.text),
              m.length + 1 + p.length,
            )))
          : (c + p.lines > s && d(),
            (c += p.lines),
            (h += p.length + 1),
            u.push(p));
    }
    function d() {
      c != 0 &&
        (a.push(u.length == 1 ? u[0] : Qt.from(u, h)),
        (h = -1),
        (c = u.length = 0));
    }
    for (let p of e) f(p);
    return d(), a.length == 1 ? a[0] : new Qt(a, t);
  }
}
K.empty = new pe([''], 0);
function hm(r) {
  let e = -1;
  for (let t of r) e += t.length + 1;
  return e;
}
function dr(r, e, t = 0, n = 1e9) {
  for (let s = 0, o = 0, l = !0; o < r.length && s <= n; o++) {
    let a = r[o],
      c = s + a.length;
    c >= t &&
      (c > n && (a = a.slice(0, n - s)),
      s < t && (a = a.slice(t - s)),
      l ? ((e[e.length - 1] += a), (l = !1)) : e.push(a)),
      (s = c + 1);
  }
  return e;
}
function Pa(r, e, t) {
  return dr(r, [''], e, t);
}
class yn {
  constructor(e, t = 1) {
    (this.dir = t),
      (this.done = !1),
      (this.lineBreak = !1),
      (this.value = ''),
      (this.nodes = [e]),
      (this.offsets = [
        t > 0 ? 1 : (e instanceof pe ? e.text.length : e.children.length) << 1,
      ]);
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let n = this.nodes.length - 1,
        s = this.nodes[n],
        o = this.offsets[n],
        l = o >> 1,
        a = s instanceof pe ? s.text.length : s.children.length;
      if (l == (t > 0 ? a : 0)) {
        if (n == 0) return (this.done = !0), (this.value = ''), this;
        t > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((o & 1) == (t > 0 ? 0 : 1)) {
        if (((this.offsets[n] += t), e == 0))
          return (
            (this.lineBreak = !0),
            (this.value = `
`),
            this
          );
        e--;
      } else if (s instanceof pe) {
        let c = s.text[l + (t < 0 ? -1 : 0)];
        if (((this.offsets[n] += t), c.length > Math.max(0, e)))
          return (
            (this.value =
              e == 0 ? c : t > 0 ? c.slice(e) : c.slice(0, c.length - e)),
            this
          );
        e -= c.length;
      } else {
        let c = s.children[l + (t < 0 ? -1 : 0)];
        e > c.length
          ? ((e -= c.length), (this.offsets[n] += t))
          : (t < 0 && this.offsets[n]--,
            this.nodes.push(c),
            this.offsets.push(
              t > 0
                ? 1
                : (c instanceof pe ? c.text.length : c.children.length) << 1,
            ));
      }
    }
  }
  next(e = 0) {
    return (
      e < 0 && (this.nextInner(-e, -this.dir), (e = this.value.length)),
      this.nextInner(e, this.dir)
    );
  }
}
class Gh {
  constructor(e, t, n) {
    (this.value = ''),
      (this.done = !1),
      (this.cursor = new yn(e, t > n ? -1 : 1)),
      (this.pos = t > n ? e.length : 0),
      (this.from = Math.min(t, n)),
      (this.to = Math.max(t, n));
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return (this.value = ''), (this.done = !0), this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let n = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > n && (e = n), (n -= e);
    let { value: s } = this.cursor.next(e);
    return (
      (this.pos += (s.length + e) * t),
      (this.value =
        s.length <= n ? s : t < 0 ? s.slice(s.length - n) : s.slice(0, n)),
      (this.done = !this.value),
      this
    );
  }
  next(e = 0) {
    return (
      e < 0
        ? (e = Math.max(e, this.from - this.pos))
        : e > 0 && (e = Math.min(e, this.to - this.pos)),
      this.nextInner(e, this.cursor.dir)
    );
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != '';
  }
}
class Fh {
  constructor(e) {
    (this.inner = e),
      (this.afterBreak = !0),
      (this.value = ''),
      (this.done = !1);
  }
  next(e = 0) {
    let { done: t, lineBreak: n, value: s } = this.inner.next(e);
    return (
      t
        ? ((this.done = !0), (this.value = ''))
        : n
        ? this.afterBreak
          ? (this.value = '')
          : ((this.afterBreak = !0), this.next())
        : ((this.value = s), (this.afterBreak = !1)),
      this
    );
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < 'u' &&
  ((K.prototype[Symbol.iterator] = function () {
    return this.iter();
  }),
  (yn.prototype[Symbol.iterator] = Gh.prototype[Symbol.iterator] = Fh.prototype[
    Symbol.iterator
  ] = function () {
    return this;
  }));
class um {
  constructor(e, t, n, s) {
    (this.from = e), (this.to = t), (this.number = n), (this.text = s);
  }
  get length() {
    return this.to - this.from;
  }
}
const Oo = /\r\n?|\n/;
var Le = (function (r) {
  return (
    (r[(r.Simple = 0)] = 'Simple'),
    (r[(r.TrackDel = 1)] = 'TrackDel'),
    (r[(r.TrackBefore = 2)] = 'TrackBefore'),
    (r[(r.TrackAfter = 3)] = 'TrackAfter'),
    r
  );
})(Le || (Le = {}));
class Zt {
  constructor(e) {
    this.sections = e;
  }
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) e += this.sections[t];
    return e;
  }
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let n = this.sections[t + 1];
      e += n < 0 ? this.sections[t] : n;
    }
    return e;
  }
  get empty() {
    return (
      this.sections.length == 0 ||
      (this.sections.length == 2 && this.sections[1] < 0)
    );
  }
  iterGaps(e) {
    for (let t = 0, n = 0, s = 0; t < this.sections.length; ) {
      let o = this.sections[t++],
        l = this.sections[t++];
      l < 0 ? (e(n, s, o), (s += o)) : (s += l), (n += o);
    }
  }
  iterChangedRanges(e, t = !1) {
    mo(this, e, t);
  }
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let n = this.sections[t++],
        s = this.sections[t++];
      s < 0 ? e.push(n, s) : e.push(s, n);
    }
    return new Zt(e);
  }
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : Hh(this, e);
  }
  mapDesc(e, t = !1) {
    return e.empty ? this : go(this, e, t);
  }
  mapPos(e, t = -1, n = Le.Simple) {
    let s = 0,
      o = 0;
    for (let l = 0; l < this.sections.length; ) {
      let a = this.sections[l++],
        c = this.sections[l++],
        h = s + a;
      if (c < 0) {
        if (h > e) return o + (e - s);
        o += a;
      } else {
        if (
          n != Le.Simple &&
          h >= e &&
          ((n == Le.TrackDel && s < e && h > e) ||
            (n == Le.TrackBefore && s < e) ||
            (n == Le.TrackAfter && h > e))
        )
          return null;
        if (h > e || (h == e && t < 0 && !a))
          return e == s || t < 0 ? o : o + c;
        o += c;
      }
      s = h;
    }
    if (e > s)
      throw new RangeError(
        `Position ${e} is out of range for changeset of length ${s}`,
      );
    return o;
  }
  touchesRange(e, t = e) {
    for (let n = 0, s = 0; n < this.sections.length && s <= t; ) {
      let o = this.sections[n++],
        l = this.sections[n++],
        a = s + o;
      if (l >= 0 && s <= t && a >= e) return s < e && a > t ? 'cover' : !0;
      s = a;
    }
    return !1;
  }
  toString() {
    let e = '';
    for (let t = 0; t < this.sections.length; ) {
      let n = this.sections[t++],
        s = this.sections[t++];
      e += (e ? ' ' : '') + n + (s >= 0 ? ':' + s : '');
    }
    return e;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(e) {
    if (
      !Array.isArray(e) ||
      e.length % 2 ||
      e.some((t) => typeof t != 'number')
    )
      throw new RangeError('Invalid JSON representation of ChangeDesc');
    return new Zt(e);
  }
}
class $e extends Zt {
  constructor(e, t) {
    super(e), (this.inserted = t);
  }
  apply(e) {
    if (this.length != e.length)
      throw new RangeError(
        'Applying change set to a document with the wrong length',
      );
    return (
      mo(this, (t, n, s, o, l) => (e = e.replace(s, s + (n - t), l)), !1), e
    );
  }
  mapDesc(e, t = !1) {
    return go(this, e, t, !0);
  }
  invert(e) {
    let t = this.sections.slice(),
      n = [];
    for (let s = 0, o = 0; s < t.length; s += 2) {
      let l = t[s],
        a = t[s + 1];
      if (a >= 0) {
        (t[s] = a), (t[s + 1] = l);
        let c = s >> 1;
        for (; n.length < c; ) n.push(K.empty);
        n.push(l ? e.slice(o, o + l) : K.empty);
      }
      o += l;
    }
    return new $e(t, n);
  }
  compose(e) {
    return this.empty ? e : e.empty ? this : Hh(this, e, !0);
  }
  map(e, t = !1) {
    return e.empty ? this : go(this, e, t, !0);
  }
  iterChanges(e, t = !1) {
    mo(this, e, t);
  }
  get desc() {
    return new Zt(this.sections);
  }
  filter(e) {
    let t = [],
      n = [],
      s = [],
      o = new vn(this);
    e: for (let l = 0, a = 0; ; ) {
      let c = l == e.length ? 1e9 : e[l++];
      for (; a < c || (a == c && o.len == 0); ) {
        if (o.done) break e;
        let u = Math.min(o.len, c - a);
        De(s, u, -1);
        let f = o.ins == -1 ? -1 : o.off == 0 ? o.ins : 0;
        De(t, u, f), f > 0 && mi(n, t, o.text), o.forward(u), (a += u);
      }
      let h = e[l++];
      for (; a < h; ) {
        if (o.done) break e;
        let u = Math.min(o.len, h - a);
        De(t, u, -1),
          De(s, u, o.ins == -1 ? -1 : o.off == 0 ? o.ins : 0),
          o.forward(u),
          (a += u);
      }
    }
    return { changes: new $e(t, n), filtered: new Zt(s) };
  }
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let n = this.sections[t],
        s = this.sections[t + 1];
      s < 0
        ? e.push(n)
        : s == 0
        ? e.push([n])
        : e.push([n].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  static of(e, t, n) {
    let s = [],
      o = [],
      l = 0,
      a = null;
    function c(u = !1) {
      if (!u && !s.length) return;
      l < t && De(s, t - l, -1);
      let f = new $e(s, o);
      (a = a ? a.compose(f.map(a)) : f), (s = []), (o = []), (l = 0);
    }
    function h(u) {
      if (Array.isArray(u)) for (let f of u) h(f);
      else if (u instanceof $e) {
        if (u.length != t)
          throw new RangeError(
            `Mismatched change set length (got ${u.length}, expected ${t})`,
          );
        c(), (a = a ? a.compose(u.map(a)) : u);
      } else {
        let { from: f, to: d = f, insert: p } = u;
        if (f > d || f < 0 || d > t)
          throw new RangeError(
            `Invalid change range ${f} to ${d} (in doc of length ${t})`,
          );
        let m = p
            ? typeof p == 'string'
              ? K.of(p.split(n || Oo))
              : p
            : K.empty,
          S = m.length;
        if (f == d && S == 0) return;
        f < l && c(),
          f > l && De(s, f - l, -1),
          De(s, d - f, S),
          mi(o, s, m),
          (l = d);
      }
    }
    return h(e), c(!a), a;
  }
  static empty(e) {
    return new $e(e ? [e, -1] : [], []);
  }
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError('Invalid JSON representation of ChangeSet');
    let t = [],
      n = [];
    for (let s = 0; s < e.length; s++) {
      let o = e[s];
      if (typeof o == 'number') t.push(o, -1);
      else {
        if (
          !Array.isArray(o) ||
          typeof o[0] != 'number' ||
          o.some((l, a) => a && typeof l != 'string')
        )
          throw new RangeError('Invalid JSON representation of ChangeSet');
        if (o.length == 1) t.push(o[0], 0);
        else {
          for (; n.length < s; ) n.push(K.empty);
          (n[s] = K.of(o.slice(1))), t.push(o[0], n[s].length);
        }
      }
    }
    return new $e(t, n);
  }
}
function De(r, e, t, n = !1) {
  if (e == 0 && t <= 0) return;
  let s = r.length - 2;
  s >= 0 && t <= 0 && t == r[s + 1]
    ? (r[s] += e)
    : e == 0 && r[s] == 0
    ? (r[s + 1] += t)
    : n
    ? ((r[s] += e), (r[s + 1] += t))
    : r.push(e, t);
}
function mi(r, e, t) {
  if (t.length == 0) return;
  let n = (e.length - 2) >> 1;
  if (n < r.length) r[r.length - 1] = r[r.length - 1].append(t);
  else {
    for (; r.length < n; ) r.push(K.empty);
    r.push(t);
  }
}
function mo(r, e, t) {
  let n = r.inserted;
  for (let s = 0, o = 0, l = 0; l < r.sections.length; ) {
    let a = r.sections[l++],
      c = r.sections[l++];
    if (c < 0) (s += a), (o += a);
    else {
      let h = s,
        u = o,
        f = K.empty;
      for (
        ;
        (h += a),
          (u += c),
          c && n && (f = f.append(n[(l - 2) >> 1])),
          !(t || l == r.sections.length || r.sections[l + 1] < 0);

      )
        (a = r.sections[l++]), (c = r.sections[l++]);
      e(s, h, o, u, f), (s = h), (o = u);
    }
  }
}
function go(r, e, t, n = !1) {
  let s = [],
    o = n ? [] : null,
    l = new vn(r),
    a = new vn(e);
  for (let c = 0, h = 0; ; )
    if (l.ins == -1) (c += l.len), l.next();
    else if (a.ins == -1 && h < c) {
      let u = Math.min(a.len, c - h);
      a.forward(u), De(s, u, -1), (h += u);
    } else if (
      a.ins >= 0 &&
      (l.done || h < c || (h == c && (a.len < l.len || (a.len == l.len && !t))))
    ) {
      for (De(s, a.ins, -1); c > h && !l.done && c + l.len < h + a.len; )
        (c += l.len), l.next();
      (h += a.len), a.next();
    } else if (l.ins >= 0) {
      let u = 0,
        f = c + l.len;
      for (;;)
        if (a.ins >= 0 && h > c && h + a.len < f)
          (u += a.ins), (h += a.len), a.next();
        else if (a.ins == -1 && h < f) {
          let d = Math.min(a.len, f - h);
          (u += d), a.forward(d), (h += d);
        } else break;
      De(s, u, l.ins), o && mi(o, s, l.text), (c = f), l.next();
    } else {
      if (l.done && a.done) return o ? new $e(s, o) : new Zt(s);
      throw new Error('Mismatched change set lengths');
    }
}
function Hh(r, e, t = !1) {
  let n = [],
    s = t ? [] : null,
    o = new vn(r),
    l = new vn(e);
  for (let a = !1; ; ) {
    if (o.done && l.done) return s ? new $e(n, s) : new Zt(n);
    if (o.ins == 0) De(n, o.len, 0, a), o.next();
    else if (l.len == 0 && !l.done)
      De(n, 0, l.ins, a), s && mi(s, n, l.text), l.next();
    else {
      if (o.done || l.done) throw new Error('Mismatched change set lengths');
      {
        let c = Math.min(o.len2, l.len),
          h = n.length;
        if (o.ins == -1) {
          let u = l.ins == -1 ? -1 : l.off ? 0 : l.ins;
          De(n, c, u, a), s && u && mi(s, n, l.text);
        } else
          l.ins == -1
            ? (De(n, o.off ? 0 : o.len, c, a), s && mi(s, n, o.textBit(c)))
            : (De(n, o.off ? 0 : o.len, l.off ? 0 : l.ins, a),
              s && !l.off && mi(s, n, l.text));
        (a = (o.ins > c || (l.ins >= 0 && l.len > c)) && (a || n.length > h)),
          o.forward2(c),
          l.forward(c);
      }
    }
  }
}
class vn {
  constructor(e) {
    (this.set = e), (this.i = 0), this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length
      ? ((this.len = e[this.i++]), (this.ins = e[this.i++]))
      : ((this.len = 0), (this.ins = -2)),
      (this.off = 0);
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set,
      t = (this.i - 2) >> 1;
    return t >= e.length ? K.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set,
      n = (this.i - 2) >> 1;
    return n >= t.length && !e
      ? K.empty
      : t[n].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : ((this.len -= e), (this.off += e));
  }
  forward2(e) {
    this.ins == -1
      ? this.forward(e)
      : e == this.ins
      ? this.next()
      : ((this.ins -= e), (this.off += e));
  }
}
class Xi {
  constructor(e, t, n) {
    (this.from = e), (this.to = t), (this.flags = n);
  }
  get anchor() {
    return this.flags & 16 ? this.to : this.from;
  }
  get head() {
    return this.flags & 16 ? this.from : this.to;
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    return this.flags & 4 ? -1 : this.flags & 8 ? 1 : 0;
  }
  get bidiLevel() {
    let e = this.flags & 3;
    return e == 3 ? null : e;
  }
  get goalColumn() {
    let e = this.flags >> 5;
    return e == 33554431 ? void 0 : e;
  }
  map(e, t = -1) {
    let n, s;
    return (
      this.empty
        ? (n = s = e.mapPos(this.from, t))
        : ((n = e.mapPos(this.from, 1)), (s = e.mapPos(this.to, -1))),
      n == this.from && s == this.to ? this : new Xi(n, s, this.flags)
    );
  }
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor) return E.range(e, t);
    let n = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return E.range(this.anchor, n);
  }
  eq(e) {
    return this.anchor == e.anchor && this.head == e.head;
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(e) {
    if (!e || typeof e.anchor != 'number' || typeof e.head != 'number')
      throw new RangeError('Invalid JSON representation for SelectionRange');
    return E.range(e.anchor, e.head);
  }
}
class E {
  constructor(e, t = 0) {
    (this.ranges = e), (this.mainIndex = t);
  }
  map(e, t = -1) {
    return e.empty
      ? this
      : E.create(
          this.ranges.map((n) => n.map(e, t)),
          this.mainIndex,
        );
  }
  eq(e) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let t = 0; t < this.ranges.length; t++)
      if (!this.ranges[t].eq(e.ranges[t])) return !1;
    return !0;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new E([this.main]);
  }
  addRange(e, t = !0) {
    return E.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  replaceRange(e, t = this.mainIndex) {
    let n = this.ranges.slice();
    return (n[t] = e), E.create(n, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  static fromJSON(e) {
    if (
      !e ||
      !Array.isArray(e.ranges) ||
      typeof e.main != 'number' ||
      e.main >= e.ranges.length
    )
      throw new RangeError('Invalid JSON representation for EditorSelection');
    return new E(
      e.ranges.map((t) => Xi.fromJSON(t)),
      e.main,
    );
  }
  static single(e, t = e) {
    return new E([E.range(e, t)], 0);
  }
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError('A selection needs at least one range');
    for (let n = 0, s = 0; s < e.length; s++) {
      let o = e[s];
      if (o.empty ? o.from <= n : o.from < n) return fm(e.slice(), t);
      n = o.to;
    }
    return new E(e, t);
  }
  static cursor(e, t = 0, n, s) {
    return new Xi(
      e,
      e,
      (t == 0 ? 0 : t < 0 ? 4 : 8) |
        (n == null ? 3 : Math.min(2, n)) |
        ((s ?? 33554431) << 5),
    );
  }
  static range(e, t, n) {
    let s = (n ?? 33554431) << 5;
    return t < e ? new Xi(t, e, 16 | s | 8) : new Xi(e, t, s | (t > e ? 4 : 0));
  }
}
function fm(r, e = 0) {
  let t = r[e];
  r.sort((n, s) => n.from - s.from), (e = r.indexOf(t));
  for (let n = 1; n < r.length; n++) {
    let s = r[n],
      o = r[n - 1];
    if (s.empty ? s.from <= o.to : s.from < o.to) {
      let l = o.from,
        a = Math.max(s.to, o.to);
      n <= e && e--,
        r.splice(--n, 2, s.anchor > s.head ? E.range(a, l) : E.range(l, a));
    }
  }
  return new E(r, e);
}
function Jh(r, e) {
  for (let t of r.ranges)
    if (t.to > e) throw new RangeError('Selection points outside of document');
}
let fl = 0;
class U {
  constructor(e, t, n, s, o) {
    (this.combine = e),
      (this.compareInput = t),
      (this.compare = n),
      (this.isStatic = s),
      (this.extensions = o),
      (this.id = fl++),
      (this.default = e([]));
  }
  static define(e = {}) {
    return new U(
      e.combine || ((t) => t),
      e.compareInput || ((t, n) => t === n),
      e.compare || (e.combine ? (t, n) => t === n : dl),
      !!e.static,
      e.enables,
    );
  }
  of(e) {
    return new pr([], this, 0, e);
  }
  compute(e, t) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new pr(e, this, 1, t);
  }
  computeN(e, t) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new pr(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (n) => n), this.compute([e], (n) => t(n.field(e)));
  }
}
function dl(r, e) {
  return r == e || (r.length == e.length && r.every((t, n) => t === e[n]));
}
class pr {
  constructor(e, t, n, s) {
    (this.dependencies = e),
      (this.facet = t),
      (this.type = n),
      (this.value = s),
      (this.id = fl++);
  }
  dynamicSlot(e) {
    var t;
    let n = this.value,
      s = this.facet.compareInput,
      o = this.id,
      l = e[o] >> 1,
      a = this.type == 2,
      c = !1,
      h = !1,
      u = [];
    for (let f of this.dependencies)
      f == 'doc'
        ? (c = !0)
        : f == 'selection'
        ? (h = !0)
        : (((t = e[f.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 &&
          u.push(e[f.id]);
    return {
      create(f) {
        return (f.values[l] = n(f)), 1;
      },
      update(f, d) {
        if (
          (c && d.docChanged) ||
          (h && (d.docChanged || d.selection)) ||
          u.some((p) => (xi(f, p) & 1) > 0)
        ) {
          let p = n(f);
          if (a ? !Ra(p, f.values[l], s) : !s(p, f.values[l]))
            return (f.values[l] = p), 1;
        }
        return 0;
      },
      reconfigure(f, d) {
        let p = n(f),
          m = d.config.address[o];
        if (m != null) {
          let S = wr(d, m);
          if (a ? Ra(p, S, s) : s(p, S)) return (f.values[l] = S), 0;
        }
        return (f.values[l] = p), 1;
      },
    };
  }
}
function Ra(r, e, t) {
  if (r.length != e.length) return !1;
  for (let n = 0; n < r.length; n++) if (!t(r[n], e[n])) return !1;
  return !0;
}
function dm(r, e, t) {
  let n = t.map((c) => r[c.id]),
    s = t.map((c) => c.type),
    o = n.filter((c) => !(c & 1)),
    l = r[e.id] >> 1;
  function a(c) {
    let h = [];
    for (let u = 0; u < n.length; u++) {
      let f = wr(c, n[u]);
      if (s[u] == 2) for (let d of f) h.push(d);
      else h.push(f);
    }
    return e.combine(h);
  }
  return {
    create(c) {
      for (let h of n) xi(c, h);
      return (c.values[l] = a(c)), 1;
    },
    update(c, h) {
      if (!o.some((f) => xi(c, f) & 1)) return 0;
      let u = a(c);
      return e.compare(u, c.values[l]) ? 0 : ((c.values[l] = u), 1);
    },
    reconfigure(c, h) {
      let u = n.some((m) => xi(c, m) & 1),
        f = h.config.facets[e.id],
        d = h.facet(e);
      if (f && !u && dl(t, f)) return (c.values[l] = d), 0;
      let p = a(c);
      return e.compare(p, d) ? ((c.values[l] = d), 0) : ((c.values[l] = p), 1);
    },
  };
}
const Ca = U.define({ static: !0 });
class wt {
  constructor(e, t, n, s, o) {
    (this.id = e),
      (this.createF = t),
      (this.updateF = n),
      (this.compareF = s),
      (this.spec = o),
      (this.provides = void 0);
  }
  static define(e) {
    let t = new wt(
      fl++,
      e.create,
      e.update,
      e.compare || ((n, s) => n === s),
      e,
    );
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(Ca).find((n) => n.field == this);
    return (t?.create || this.createF)(e);
  }
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (n) => ((n.values[t] = this.create(n)), 1),
      update: (n, s) => {
        let o = n.values[t],
          l = this.updateF(o, s);
        return this.compareF(o, l) ? 0 : ((n.values[t] = l), 1);
      },
      reconfigure: (n, s) =>
        s.config.address[this.id] != null
          ? ((n.values[t] = s.field(this)), 0)
          : ((n.values[t] = this.create(n)), 1),
    };
  }
  init(e) {
    return [this, Ca.of({ field: this, create: e })];
  }
  get extension() {
    return this;
  }
}
const Et = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function qt(r) {
  return (e) => new Kh(e, r);
}
const pl = {
  lowest: qt(Et.lowest),
  low: qt(Et.low),
  default: qt(Et.default),
  high: qt(Et.high),
  highest: qt(Et.highest),
  fallback: qt(Et.lowest),
  extend: qt(Et.high),
  override: qt(Et.highest),
};
class Kh {
  constructor(e, t) {
    (this.inner = e), (this.prec = t);
  }
}
class Gr {
  of(e) {
    return new bo(this, e);
  }
  reconfigure(e) {
    return Gr.reconfigure.of({ compartment: this, extension: e });
  }
  get(e) {
    return e.config.compartments.get(this);
  }
}
class bo {
  constructor(e, t) {
    (this.compartment = e), (this.inner = t);
  }
}
class kr {
  constructor(e, t, n, s, o, l) {
    for (
      this.base = e,
        this.compartments = t,
        this.dynamicSlots = n,
        this.address = s,
        this.staticValues = o,
        this.facets = l,
        this.statusTemplate = [];
      this.statusTemplate.length < n.length;

    )
      this.statusTemplate.push(0);
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, n) {
    let s = [],
      o = Object.create(null),
      l = new Map();
    for (let d of pm(e, t, l))
      d instanceof wt
        ? s.push(d)
        : (o[d.facet.id] || (o[d.facet.id] = [])).push(d);
    let a = Object.create(null),
      c = [],
      h = [];
    for (let d of s) (a[d.id] = h.length << 1), h.push((p) => d.slot(p));
    let u = n?.config.facets;
    for (let d in o) {
      let p = o[d],
        m = p[0].facet,
        S = (u && u[d]) || [];
      if (p.every((T) => T.type == 0))
        if (((a[m.id] = (c.length << 1) | 1), dl(S, p))) c.push(n.facet(m));
        else {
          let T = m.combine(p.map((k) => k.value));
          c.push(n && m.compare(T, n.facet(m)) ? n.facet(m) : T);
        }
      else {
        for (let T of p)
          T.type == 0
            ? ((a[T.id] = (c.length << 1) | 1), c.push(T.value))
            : ((a[T.id] = h.length << 1), h.push((k) => T.dynamicSlot(k)));
        (a[m.id] = h.length << 1), h.push((T) => dm(T, m, p));
      }
    }
    let f = h.map((d) => d(a));
    return new kr(e, l, f, a, c, o);
  }
}
function pm(r, e, t) {
  let n = [[], [], [], [], []],
    s = new Map();
  function o(l, a) {
    let c = s.get(l);
    if (c != null) {
      if (c >= a) return;
      let h = n[c].indexOf(l);
      h > -1 && n[c].splice(h, 1), l instanceof bo && t.delete(l.compartment);
    }
    if ((s.set(l, a), Array.isArray(l))) for (let h of l) o(h, a);
    else if (l instanceof bo) {
      if (t.has(l.compartment))
        throw new RangeError('Duplicate use of compartment in extensions');
      let h = e.get(l.compartment) || l.inner;
      t.set(l.compartment, h), o(h, a);
    } else if (l instanceof Kh) o(l.inner, l.prec);
    else if (l instanceof wt) n[a].push(l), l.provides && o(l.provides, a);
    else if (l instanceof pr)
      n[a].push(l), l.facet.extensions && o(l.facet.extensions, a);
    else {
      let h = l.extension;
      if (!h)
        throw new Error(
          `Unrecognized extension value in extension set (${l}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`,
        );
      o(h, a);
    }
  }
  return o(r, Et.default), n.reduce((l, a) => l.concat(a));
}
function xi(r, e) {
  if (e & 1) return 2;
  let t = e >> 1,
    n = r.status[t];
  if (n == 4) throw new Error('Cyclic dependency between fields and/or facets');
  if (n & 2) return n;
  r.status[t] = 4;
  let s = r.computeSlot(r, r.config.dynamicSlots[t]);
  return (r.status[t] = 2 | s);
}
function wr(r, e) {
  return e & 1 ? r.config.staticValues[e >> 1] : r.values[e >> 1];
}
const eu = U.define(),
  tu = U.define({ combine: (r) => r.some((e) => e), static: !0 }),
  iu = U.define({ combine: (r) => (r.length ? r[0] : void 0), static: !0 }),
  nu = U.define(),
  ru = U.define(),
  su = U.define(),
  ou = U.define({ combine: (r) => (r.length ? r[0] : !1) });
class jt {
  constructor(e, t) {
    (this.type = e), (this.value = t);
  }
  static define() {
    return new Om();
  }
}
class Om {
  of(e) {
    return new jt(this, e);
  }
}
class mm {
  constructor(e) {
    this.map = e;
  }
  of(e) {
    return new te(this, e);
  }
}
class te {
  constructor(e, t) {
    (this.type = e), (this.value = t);
  }
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0
      ? void 0
      : t == this.value
      ? this
      : new te(this.type, t);
  }
  is(e) {
    return this.type == e;
  }
  static define(e = {}) {
    return new mm(e.map || ((t) => t));
  }
  static mapEffects(e, t) {
    if (!e.length) return e;
    let n = [];
    for (let s of e) {
      let o = s.map(t);
      o && n.push(o);
    }
    return n;
  }
}
te.reconfigure = te.define();
te.appendConfig = te.define();
class ke {
  constructor(e, t, n, s, o, l) {
    (this.startState = e),
      (this.changes = t),
      (this.selection = n),
      (this.effects = s),
      (this.annotations = o),
      (this.scrollIntoView = l),
      (this._doc = null),
      (this._state = null),
      n && Jh(n, t.newLength),
      o.some((a) => a.type == ke.time) ||
        (this.annotations = o.concat(ke.time.of(Date.now())));
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  annotation(e) {
    for (let t of this.annotations) if (t.type == e) return t.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(e) {
    let t = this.annotation(ke.userEvent);
    return !!(
      t &&
      (t == e ||
        (t.length > e.length &&
          t.slice(0, e.length) == e &&
          t[e.length] == '.'))
    );
  }
}
ke.time = jt.define();
ke.userEvent = jt.define();
ke.addToHistory = jt.define();
ke.remote = jt.define();
function gm(r, e) {
  let t = [];
  for (let n = 0, s = 0; ; ) {
    let o, l;
    if (n < r.length && (s == e.length || e[s] >= r[n]))
      (o = r[n++]), (l = r[n++]);
    else if (s < e.length) (o = e[s++]), (l = e[s++]);
    else return t;
    !t.length || t[t.length - 1] < o
      ? t.push(o, l)
      : t[t.length - 1] < l && (t[t.length - 1] = l);
  }
}
function lu(r, e, t) {
  var n;
  let s, o, l;
  return (
    t
      ? ((s = e.changes),
        (o = $e.empty(e.changes.length)),
        (l = r.changes.compose(e.changes)))
      : ((s = e.changes.map(r.changes)),
        (o = r.changes.mapDesc(e.changes, !0)),
        (l = r.changes.compose(s))),
    {
      changes: l,
      selection: e.selection
        ? e.selection.map(o)
        : (n = r.selection) === null || n === void 0
        ? void 0
        : n.map(s),
      effects: te.mapEffects(r.effects, s).concat(te.mapEffects(e.effects, o)),
      annotations: r.annotations.length
        ? r.annotations.concat(e.annotations)
        : e.annotations,
      scrollIntoView: r.scrollIntoView || e.scrollIntoView,
    }
  );
}
function yo(r, e, t) {
  let n = e.selection,
    s = Mi(e.annotations);
  return (
    e.userEvent && (s = s.concat(ke.userEvent.of(e.userEvent))),
    {
      changes:
        e.changes instanceof $e
          ? e.changes
          : $e.of(e.changes || [], t, r.facet(iu)),
      selection: n && (n instanceof E ? n : E.single(n.anchor, n.head)),
      effects: Mi(e.effects),
      annotations: s,
      scrollIntoView: !!e.scrollIntoView,
    }
  );
}
function au(r, e, t) {
  let n = yo(r, e.length ? e[0] : {}, r.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let o = 1; o < e.length; o++) {
    e[o].filter === !1 && (t = !1);
    let l = !!e[o].sequential;
    n = lu(n, yo(r, e[o], l ? n.changes.newLength : r.doc.length), l);
  }
  let s = new ke(
    r,
    n.changes,
    n.selection,
    n.effects,
    n.annotations,
    n.scrollIntoView,
  );
  return ym(t ? bm(s) : s);
}
function bm(r) {
  let e = r.startState,
    t = !0;
  for (let s of e.facet(nu)) {
    let o = s(r);
    if (o === !1) {
      t = !1;
      break;
    }
    Array.isArray(o) && (t = t === !0 ? o : gm(t, o));
  }
  if (t !== !0) {
    let s, o;
    if (t === !1) (o = r.changes.invertedDesc), (s = $e.empty(e.doc.length));
    else {
      let l = r.changes.filter(t);
      (s = l.changes), (o = l.filtered.invertedDesc);
    }
    r = new ke(
      e,
      s,
      r.selection && r.selection.map(o),
      te.mapEffects(r.effects, o),
      r.annotations,
      r.scrollIntoView,
    );
  }
  let n = e.facet(ru);
  for (let s = n.length - 1; s >= 0; s--) {
    let o = n[s](r);
    o instanceof ke
      ? (r = o)
      : Array.isArray(o) && o.length == 1 && o[0] instanceof ke
      ? (r = o[0])
      : (r = au(e, Mi(o), !1));
  }
  return r;
}
function ym(r) {
  let e = r.startState,
    t = e.facet(su),
    n = r;
  for (let s = t.length - 1; s >= 0; s--) {
    let o = t[s](r);
    o &&
      Object.keys(o).length &&
      (n = lu(r, yo(e, o, r.changes.newLength), !0));
  }
  return n == r
    ? r
    : new ke(
        e,
        r.changes,
        r.selection,
        n.effects,
        n.annotations,
        n.scrollIntoView,
      );
}
const Qm = [];
function Mi(r) {
  return r == null ? Qm : Array.isArray(r) ? r : [r];
}
var ct = (function (r) {
  return (
    (r[(r.Word = 0)] = 'Word'),
    (r[(r.Space = 1)] = 'Space'),
    (r[(r.Other = 2)] = 'Other'),
    r
  );
})(ct || (ct = {}));
const xm = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Qo;
try {
  Qo = new RegExp('[\\p{Alphabetic}\\p{Number}_]', 'u');
} catch {}
function vm(r) {
  if (Qo) return Qo.test(r);
  for (let e = 0; e < r.length; e++) {
    let t = r[e];
    if (
      /\w/.test(t) ||
      (t > '\x80' && (t.toUpperCase() != t.toLowerCase() || xm.test(t)))
    )
      return !0;
  }
  return !1;
}
function Sm(r) {
  return (e) => {
    if (!/\S/.test(e)) return ct.Space;
    if (vm(e)) return ct.Word;
    for (let t = 0; t < r.length; t++) if (e.indexOf(r[t]) > -1) return ct.Word;
    return ct.Other;
  };
}
class J {
  constructor(e, t, n, s, o, l) {
    (this.config = e),
      (this.doc = t),
      (this.selection = n),
      (this.values = s),
      (this.status = e.statusTemplate.slice()),
      (this.computeSlot = o),
      l && (l._state = this);
    for (let a = 0; a < this.config.dynamicSlots.length; a++) xi(this, a << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let n = this.config.address[e.id];
    if (n == null) {
      if (t) throw new RangeError('Field is not present in this state');
      return;
    }
    return xi(this, n), wr(this, n);
  }
  update(...e) {
    return au(this, e, !0);
  }
  applyTransaction(e) {
    let t = this.config,
      { base: n, compartments: s } = t;
    for (let l of e.effects)
      l.is(Gr.reconfigure)
        ? (t &&
            ((s = new Map()),
            t.compartments.forEach((a, c) => s.set(c, a)),
            (t = null)),
          s.set(l.value.compartment, l.value.extension))
        : l.is(te.reconfigure)
        ? ((t = null), (n = l.value))
        : l.is(te.appendConfig) && ((t = null), (n = Mi(n).concat(l.value)));
    let o;
    t
      ? (o = e.startState.values.slice())
      : ((t = kr.resolve(n, s, this)),
        (o = new J(
          t,
          this.doc,
          this.selection,
          t.dynamicSlots.map(() => null),
          (a, c) => c.reconfigure(a, this),
          null,
        ).values)),
      new J(t, e.newDoc, e.newSelection, o, (l, a) => a.update(l, e), e);
  }
  replaceSelection(e) {
    return (
      typeof e == 'string' && (e = this.toText(e)),
      this.changeByRange((t) => ({
        changes: { from: t.from, to: t.to, insert: e },
        range: E.cursor(t.from + e.length),
      }))
    );
  }
  changeByRange(e) {
    let t = this.selection,
      n = e(t.ranges[0]),
      s = this.changes(n.changes),
      o = [n.range],
      l = Mi(n.effects);
    for (let a = 1; a < t.ranges.length; a++) {
      let c = e(t.ranges[a]),
        h = this.changes(c.changes),
        u = h.map(s);
      for (let d = 0; d < a; d++) o[d] = o[d].map(u);
      let f = s.mapDesc(h, !0);
      o.push(c.range.map(f)),
        (s = s.compose(u)),
        (l = te.mapEffects(l, u).concat(te.mapEffects(Mi(c.effects), f)));
    }
    return { changes: s, selection: E.create(o, t.mainIndex), effects: l };
  }
  changes(e = []) {
    return e instanceof $e
      ? e
      : $e.of(e, this.doc.length, this.facet(J.lineSeparator));
  }
  toText(e) {
    return K.of(e.split(this.facet(J.lineSeparator) || Oo));
  }
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (xi(this, t), wr(this, t));
  }
  toJSON(e) {
    let t = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
    if (e)
      for (let n in e) {
        let s = e[n];
        s instanceof wt && (t[n] = s.spec.toJSON(this.field(e[n]), this));
      }
    return t;
  }
  static fromJSON(e, t = {}, n) {
    if (!e || typeof e.doc != 'string')
      throw new RangeError('Invalid JSON representation for EditorState');
    let s = [];
    if (n)
      for (let o in n) {
        let l = n[o],
          a = e[o];
        s.push(l.init((c) => l.spec.fromJSON(a, c)));
      }
    return J.create({
      doc: e.doc,
      selection: E.fromJSON(e.selection),
      extensions: t.extensions ? s.concat([t.extensions]) : s,
    });
  }
  static create(e = {}) {
    let t = kr.resolve(e.extensions || [], new Map()),
      n =
        e.doc instanceof K
          ? e.doc
          : K.of((e.doc || '').split(t.staticFacet(J.lineSeparator) || Oo)),
      s = e.selection
        ? e.selection instanceof E
          ? e.selection
          : E.single(e.selection.anchor, e.selection.head)
        : E.single(0);
    return (
      Jh(s, n.length),
      t.staticFacet(tu) || (s = s.asSingle()),
      new J(
        t,
        n,
        s,
        t.dynamicSlots.map(() => null),
        (o, l) => l.create(o),
        null,
      )
    );
  }
  get tabSize() {
    return this.facet(J.tabSize);
  }
  get lineBreak() {
    return (
      this.facet(J.lineSeparator) ||
      `
`
    );
  }
  get readOnly() {
    return this.facet(ou);
  }
  phrase(e) {
    for (let t of this.facet(J.phrases))
      if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
    return e;
  }
  languageDataAt(e, t, n = -1) {
    let s = [];
    for (let o of this.facet(eu))
      for (let l of o(this, t, n))
        Object.prototype.hasOwnProperty.call(l, e) && s.push(l[e]);
    return s;
  }
  charCategorizer(e) {
    return Sm(this.languageDataAt('wordChars', e).join(''));
  }
  wordAt(e) {
    let { text: t, from: n, length: s } = this.doc.lineAt(e),
      o = this.charCategorizer(e),
      l = e - n,
      a = e - n;
    for (; l > 0; ) {
      let c = Je(t, l, !1);
      if (o(t.slice(c, l)) != ct.Word) break;
      l = c;
    }
    for (; a < s; ) {
      let c = Je(t, a);
      if (o(t.slice(a, c)) != ct.Word) break;
      a = c;
    }
    return l == a ? null : E.range(l + n, a + n);
  }
}
J.allowMultipleSelections = tu;
J.tabSize = U.define({ combine: (r) => (r.length ? r[0] : 4) });
J.lineSeparator = iu;
J.readOnly = ou;
J.phrases = U.define();
J.languageData = eu;
J.changeFilter = nu;
J.transactionFilter = ru;
J.transactionExtender = su;
Gr.reconfigure = te.define();
function Fr(r, e, t = {}) {
  let n = {};
  for (let s of r)
    for (let o of Object.keys(s)) {
      let l = s[o],
        a = n[o];
      if (a === void 0) n[o] = l;
      else if (!(a === l || l === void 0))
        if (Object.hasOwnProperty.call(t, o)) n[o] = t[o](a, l);
        else throw new Error('Config merge conflict for field ' + o);
    }
  for (let s in e) n[s] === void 0 && (n[s] = e[s]);
  return n;
}
const xo = '\u037C',
  Wa = typeof Symbol > 'u' ? '__' + xo : Symbol.for(xo),
  vo =
    typeof Symbol > 'u'
      ? '__styleSet' + Math.floor(Math.random() * 1e8)
      : Symbol('styleSet'),
  Aa = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : {};
class ni {
  constructor(e, t) {
    this.rules = [];
    let { finish: n } = t || {};
    function s(l) {
      return /^@/.test(l) ? [l] : l.split(/,\s*/);
    }
    function o(l, a, c, h) {
      let u = [],
        f = /^@(\w+)\b/.exec(l[0]),
        d = f && f[1] == 'keyframes';
      if (f && a == null) return c.push(l[0] + ';');
      for (let p in a) {
        let m = a[p];
        if (/&/.test(p))
          o(
            p
              .split(/,\s*/)
              .map((S) => l.map((T) => S.replace(/&/, T)))
              .reduce((S, T) => S.concat(T)),
            m,
            c,
          );
        else if (m && typeof m == 'object') {
          if (!f)
            throw new RangeError(
              'The value of a property (' +
                p +
                ') should be a primitive value.',
            );
          o(s(p), m, u, d);
        } else
          m != null &&
            u.push(
              p
                .replace(/_.*/, '')
                .replace(/[A-Z]/g, (S) => '-' + S.toLowerCase()) +
                ': ' +
                m +
                ';',
            );
      }
      (u.length || d) &&
        c.push(
          (n && !f && !h ? l.map(n) : l).join(', ') + ' {' + u.join(' ') + '}',
        );
    }
    for (let l in e) o(s(l), e[l], this.rules);
  }
  getRules() {
    return this.rules.join(`
`);
  }
  static newName() {
    let e = Aa[Wa] || 1;
    return (Aa[Wa] = e + 1), xo + e.toString(36);
  }
  static mount(e, t) {
    (e[vo] || new $m(e)).mount(Array.isArray(t) ? t : [t]);
  }
}
let qn = null;
class $m {
  constructor(e) {
    if (!e.head && e.adoptedStyleSheets && typeof CSSStyleSheet < 'u') {
      if (qn)
        return (
          (e.adoptedStyleSheets = [qn.sheet].concat(e.adoptedStyleSheets)),
          (e[vo] = qn)
        );
      (this.sheet = new CSSStyleSheet()),
        (e.adoptedStyleSheets = [this.sheet].concat(e.adoptedStyleSheets)),
        (qn = this);
    } else {
      this.styleTag = (e.ownerDocument || e).createElement('style');
      let t = e.head || e;
      t.insertBefore(this.styleTag, t.firstChild);
    }
    (this.modules = []), (e[vo] = this);
  }
  mount(e) {
    let t = this.sheet,
      n = 0,
      s = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o],
        a = this.modules.indexOf(l);
      if (
        (a < s && a > -1 && (this.modules.splice(a, 1), s--, (a = -1)), a == -1)
      ) {
        if ((this.modules.splice(s++, 0, l), t))
          for (let c = 0; c < l.rules.length; c++)
            t.insertRule(l.rules[c], n++);
      } else {
        for (; s < a; ) n += this.modules[s++].rules.length;
        (n += l.rules.length), s++;
      }
    }
    if (!t) {
      let o = '';
      for (let l = 0; l < this.modules.length; l++)
        o +=
          this.modules[l].getRules() +
          `
`;
      this.styleTag.textContent = o;
    }
  }
}
class $i {
  eq(e) {
    return this == e;
  }
  range(e, t = e) {
    return new So(e, t, this);
  }
}
$i.prototype.startSide = $i.prototype.endSide = 0;
$i.prototype.point = !1;
$i.prototype.mapMode = Le.TrackDel;
class So {
  constructor(e, t, n) {
    (this.from = e), (this.to = t), (this.value = n);
  }
}
function $o(r, e) {
  return r.from - e.from || r.value.startSide - e.value.startSide;
}
class Ol {
  constructor(e, t, n, s) {
    (this.from = e), (this.to = t), (this.value = n), (this.maxPoint = s);
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(e, t, n, s = 0) {
    let o = n ? this.to : this.from;
    for (let l = s, a = o.length; ; ) {
      if (l == a) return l;
      let c = (l + a) >> 1,
        h =
          o[c] - e || (n ? this.value[c].endSide : this.value[c].startSide) - t;
      if (c == l) return h >= 0 ? l : a;
      h >= 0 ? (a = c) : (l = c + 1);
    }
  }
  between(e, t, n, s) {
    for (
      let o = this.findIndex(t, -1e9, !0), l = this.findIndex(n, 1e9, !1, o);
      o < l;
      o++
    )
      if (s(this.from[o] + e, this.to[o] + e, this.value[o]) === !1) return !1;
  }
  map(e, t) {
    let n = [],
      s = [],
      o = [],
      l = -1,
      a = -1;
    for (let c = 0; c < this.value.length; c++) {
      let h = this.value[c],
        u = this.from[c] + e,
        f = this.to[c] + e,
        d,
        p;
      if (u == f) {
        let m = t.mapPos(u, h.startSide, h.mapMode);
        if (
          m == null ||
          ((d = p = m),
          h.startSide != h.endSide && ((p = t.mapPos(u, h.endSide)), p < d))
        )
          continue;
      } else if (
        ((d = t.mapPos(u, h.startSide)),
        (p = t.mapPos(f, h.endSide)),
        d > p || (d == p && h.startSide > 0 && h.endSide <= 0))
      )
        continue;
      (p - d || h.endSide - h.startSide) < 0 ||
        (l < 0 && (l = d),
        h.point && (a = Math.max(a, p - d)),
        n.push(h),
        s.push(d - l),
        o.push(p - l));
    }
    return { mapped: n.length ? new Ol(s, o, n, a) : null, pos: l };
  }
}
class le {
  constructor(e, t, n = le.empty, s) {
    (this.chunkPos = e),
      (this.chunk = t),
      (this.nextLayer = n),
      (this.maxPoint = s);
  }
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty) return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk) e += t.value.length;
    return e;
  }
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  update(e) {
    let {
        add: t = [],
        sort: n = !1,
        filterFrom: s = 0,
        filterTo: o = this.length,
      } = e,
      l = e.filter;
    if (t.length == 0 && !l) return this;
    if ((n && (t = t.slice().sort($o)), this.isEmpty))
      return t.length ? le.of(t) : this;
    let a = new cu(this, null, -1).goto(0),
      c = 0,
      h = [],
      u = new zi();
    for (; a.value || c < t.length; )
      if (
        c < t.length &&
        (a.from - t[c].from || a.startSide - t[c].value.startSide) >= 0
      ) {
        let f = t[c++];
        u.addInner(f.from, f.to, f.value) || h.push(f);
      } else
        a.rangeIndex == 1 &&
        a.chunkIndex < this.chunk.length &&
        (c == t.length || this.chunkEnd(a.chunkIndex) < t[c].from) &&
        (!l ||
          s > this.chunkEnd(a.chunkIndex) ||
          o < this.chunkPos[a.chunkIndex]) &&
        u.addChunk(this.chunkPos[a.chunkIndex], this.chunk[a.chunkIndex])
          ? a.nextChunk()
          : ((!l || s > a.to || o < a.from || l(a.from, a.to, a.value)) &&
              (u.addInner(a.from, a.to, a.value) ||
                h.push(new So(a.from, a.to, a.value))),
            a.next());
    return u.finishInner(
      this.nextLayer.isEmpty && !h.length
        ? le.empty
        : this.nextLayer.update({
            add: h,
            filter: l,
            filterFrom: s,
            filterTo: o,
          }),
    );
  }
  map(e) {
    if (e.empty || this.isEmpty) return this;
    let t = [],
      n = [],
      s = -1;
    for (let l = 0; l < this.chunk.length; l++) {
      let a = this.chunkPos[l],
        c = this.chunk[l],
        h = e.touchesRange(a, a + c.length);
      if (h === !1)
        (s = Math.max(s, c.maxPoint)), t.push(c), n.push(e.mapPos(a));
      else if (h === !0) {
        let { mapped: u, pos: f } = c.map(a, e);
        u && ((s = Math.max(s, u.maxPoint)), t.push(u), n.push(f));
      }
    }
    let o = this.nextLayer.map(e);
    return t.length == 0 ? o : new le(n, t, o, s);
  }
  between(e, t, n) {
    if (!this.isEmpty) {
      for (let s = 0; s < this.chunk.length; s++) {
        let o = this.chunkPos[s],
          l = this.chunk[s];
        if (t >= o && e <= o + l.length && l.between(o, e - o, t - o, n) === !1)
          return;
      }
      this.nextLayer.between(e, t, n);
    }
  }
  iter(e = 0) {
    return Sn.from([this]).goto(e);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e, t = 0) {
    return Sn.from(e).goto(t);
  }
  static compare(e, t, n, s, o = -1) {
    let l = e.filter((f) => f.maxPoint > 0 || (!f.isEmpty && f.maxPoint >= o)),
      a = t.filter((f) => f.maxPoint > 0 || (!f.isEmpty && f.maxPoint >= o)),
      c = Ea(l, a, n),
      h = new an(l, c, o),
      u = new an(a, c, o);
    n.iterGaps((f, d, p) => La(h, f, u, d, p, s)),
      n.empty && n.length == 0 && La(h, 0, u, 0, 0, s);
  }
  static eq(e, t, n = 0, s) {
    s == null && (s = 1e9);
    let o = e.filter((u) => !u.isEmpty && t.indexOf(u) < 0),
      l = t.filter((u) => !u.isEmpty && e.indexOf(u) < 0);
    if (o.length != l.length) return !1;
    if (!o.length) return !0;
    let a = Ea(o, l),
      c = new an(o, a, 0).goto(n),
      h = new an(l, a, 0).goto(n);
    for (;;) {
      if (
        c.to != h.to ||
        !ko(c.active, h.active) ||
        (c.point && (!h.point || !c.point.eq(h.point)))
      )
        return !1;
      if (c.to > s) return !0;
      c.next(), h.next();
    }
  }
  static spans(e, t, n, s, o = -1) {
    var l;
    let a = new an(
        e,
        null,
        o,
        (l = s.filterPoint) === null || l === void 0 ? void 0 : l.bind(s),
      ).goto(t),
      c = t,
      h = a.openStart;
    for (;;) {
      let u = Math.min(a.to, n);
      if (
        (a.point
          ? (s.point(c, u, a.point, a.activeForPoint(a.to), h),
            (h = a.openEnd(u) + (a.to > u ? 1 : 0)))
          : u > c && (s.span(c, u, a.active, h), (h = a.openEnd(u))),
        a.to > n)
      )
        break;
      (c = a.to), a.next();
    }
    return h;
  }
  static of(e, t = !1) {
    let n = new zi();
    for (let s of e instanceof So ? [e] : t ? km(e) : e)
      n.add(s.from, s.to, s.value);
    return n.finish();
  }
}
le.empty = new le([], [], null, -1);
function km(r) {
  if (r.length > 1)
    for (let e = r[0], t = 1; t < r.length; t++) {
      let n = r[t];
      if ($o(e, n) > 0) return r.slice().sort($o);
      e = n;
    }
  return r;
}
le.empty.nextLayer = le.empty;
class zi {
  constructor() {
    (this.chunks = []),
      (this.chunkPos = []),
      (this.chunkStart = -1),
      (this.last = null),
      (this.lastFrom = -1e9),
      (this.lastTo = -1e9),
      (this.from = []),
      (this.to = []),
      (this.value = []),
      (this.maxPoint = -1),
      (this.setMaxPoint = -1),
      (this.nextLayer = null);
  }
  finishChunk(e) {
    this.chunks.push(new Ol(this.from, this.to, this.value, this.maxPoint)),
      this.chunkPos.push(this.chunkStart),
      (this.chunkStart = -1),
      (this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint)),
      (this.maxPoint = -1),
      e && ((this.from = []), (this.to = []), (this.value = []));
  }
  add(e, t, n) {
    this.addInner(e, t, n) ||
      (this.nextLayer || (this.nextLayer = new zi())).add(e, t, n);
  }
  addInner(e, t, n) {
    let s = e - this.lastTo || n.startSide - this.last.endSide;
    if (s <= 0 && (e - this.lastFrom || n.startSide - this.last.startSide) < 0)
      throw new Error(
        'Ranges must be added sorted by `from` position and `startSide`',
      );
    return s < 0
      ? !1
      : (this.from.length == 250 && this.finishChunk(!0),
        this.chunkStart < 0 && (this.chunkStart = e),
        this.from.push(e - this.chunkStart),
        this.to.push(t - this.chunkStart),
        (this.last = n),
        (this.lastFrom = e),
        (this.lastTo = t),
        this.value.push(n),
        n.point && (this.maxPoint = Math.max(this.maxPoint, t - e)),
        !0);
  }
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0),
      (this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint)),
      this.chunks.push(t),
      this.chunkPos.push(e);
    let n = t.value.length - 1;
    return (
      (this.last = t.value[n]),
      (this.lastFrom = t.from[n] + e),
      (this.lastTo = t.to[n] + e),
      !0
    );
  }
  finish() {
    return this.finishInner(le.empty);
  }
  finishInner(e) {
    if ((this.from.length && this.finishChunk(!1), this.chunks.length == 0))
      return e;
    let t = new le(
      this.chunkPos,
      this.chunks,
      this.nextLayer ? this.nextLayer.finishInner(e) : e,
      this.setMaxPoint,
    );
    return (this.from = null), t;
  }
}
function Ea(r, e, t) {
  let n = new Map();
  for (let o of r)
    for (let l = 0; l < o.chunk.length; l++)
      o.chunk[l].maxPoint <= 0 && n.set(o.chunk[l], o.chunkPos[l]);
  let s = new Set();
  for (let o of e)
    for (let l = 0; l < o.chunk.length; l++) {
      let a = n.get(o.chunk[l]);
      a != null &&
        (t ? t.mapPos(a) : a) == o.chunkPos[l] &&
        !t?.touchesRange(a, a + o.chunk[l].length) &&
        s.add(o.chunk[l]);
    }
  return s;
}
class cu {
  constructor(e, t, n, s = 0) {
    (this.layer = e), (this.skip = t), (this.minPoint = n), (this.rank = s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return (
      (this.chunkIndex = this.rangeIndex = 0), this.gotoInner(e, t, !1), this
    );
  }
  gotoInner(e, t, n) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let s = this.layer.chunk[this.chunkIndex];
      if (
        !(
          (this.skip && this.skip.has(s)) ||
          this.layer.chunkEnd(this.chunkIndex) < e ||
          s.maxPoint < this.minPoint
        )
      )
        break;
      this.chunkIndex++, (n = !1);
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex].findIndex(
        e - this.layer.chunkPos[this.chunkIndex],
        t,
        !0,
      );
      (!n || this.rangeIndex < s) && this.setRangeIndex(s);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (;;)
      if (this.chunkIndex == this.layer.chunk.length) {
        (this.from = this.to = 1e9), (this.value = null);
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex],
          t = this.layer.chunk[this.chunkIndex],
          n = e + t.from[this.rangeIndex];
        if (
          ((this.from = n),
          (this.to = e + t.to[this.rangeIndex]),
          (this.value = t.value[this.rangeIndex]),
          this.setRangeIndex(this.rangeIndex + 1),
          this.minPoint < 0 ||
            (this.value.point && this.to - this.from >= this.minPoint))
        )
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if ((this.chunkIndex++, this.skip))
        for (
          ;
          this.chunkIndex < this.layer.chunk.length &&
          this.skip.has(this.layer.chunk[this.chunkIndex]);

        )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, (this.rangeIndex = 0), this.next();
  }
  compare(e) {
    return (
      this.from - e.from ||
      this.startSide - e.startSide ||
      this.rank - e.rank ||
      this.to - e.to ||
      this.endSide - e.endSide
    );
  }
}
class Sn {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, n = -1) {
    let s = [];
    for (let o = 0; o < e.length; o++)
      for (let l = e[o]; !l.isEmpty; l = l.nextLayer)
        l.maxPoint >= n && s.push(new cu(l, t, n, o));
    return s.length == 1 ? s[0] : new Sn(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let n of this.heap) n.goto(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--) Ws(this.heap, n);
    return this.next(), this;
  }
  forward(e, t) {
    for (let n of this.heap) n.forward(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--) Ws(this.heap, n);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      (this.from = this.to = 1e9), (this.value = null), (this.rank = -1);
    else {
      let e = this.heap[0];
      (this.from = e.from),
        (this.to = e.to),
        (this.value = e.value),
        (this.rank = e.rank),
        e.value && e.next(),
        Ws(this.heap, 0);
    }
  }
}
function Ws(r, e) {
  for (let t = r[e]; ; ) {
    let n = (e << 1) + 1;
    if (n >= r.length) break;
    let s = r[n];
    if (
      (n + 1 < r.length && s.compare(r[n + 1]) >= 0 && ((s = r[n + 1]), n++),
      t.compare(s) < 0)
    )
      break;
    (r[n] = t), (r[e] = s), (e = n);
  }
}
class an {
  constructor(e, t, n, s = () => !0) {
    (this.minPoint = n),
      (this.filterPoint = s),
      (this.active = []),
      (this.activeTo = []),
      (this.activeRank = []),
      (this.minActive = -1),
      (this.point = null),
      (this.pointFrom = 0),
      (this.pointRank = 0),
      (this.to = -1e9),
      (this.endSide = 0),
      (this.openStart = -1),
      (this.cursor = Sn.from(e, t, n));
  }
  goto(e, t = -1e9) {
    return (
      this.cursor.goto(e, t),
      (this.active.length = this.activeTo.length = this.activeRank.length = 0),
      (this.minActive = -1),
      (this.to = e),
      (this.endSide = t),
      (this.openStart = -1),
      this.next(),
      this
    );
  }
  forward(e, t) {
    for (
      ;
      this.minActive > -1 &&
      (this.activeTo[this.minActive] - e ||
        this.active[this.minActive].endSide - t) < 0;

    )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    Gn(this.active, e),
      Gn(this.activeTo, e),
      Gn(this.activeRank, e),
      (this.minActive = _a(this.active, this.activeTo));
  }
  addActive(e) {
    let t = 0,
      { value: n, to: s, rank: o } = this.cursor;
    for (; t < this.activeRank.length && this.activeRank[t] <= o; ) t++;
    Fn(this.active, t, n),
      Fn(this.activeTo, t, s),
      Fn(this.activeRank, t, o),
      e && Fn(e, t, this.cursor.from),
      (this.minActive = _a(this.active, this.activeTo));
  }
  next() {
    let e = this.to,
      t = this.point;
    this.point = null;
    let n = this.openStart < 0 ? [] : null,
      s = 0;
    for (;;) {
      let o = this.minActive;
      if (
        o > -1 &&
        (this.activeTo[o] - this.cursor.from ||
          this.active[o].endSide - this.cursor.startSide) < 0
      ) {
        if (this.activeTo[o] > e) {
          (this.to = this.activeTo[o]), (this.endSide = this.active[o].endSide);
          break;
        }
        this.removeActive(o), n && Gn(n, o);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          (this.to = this.cursor.from), (this.endSide = this.cursor.startSide);
          break;
        } else {
          let l = this.cursor.value;
          if (!l.point) this.addActive(n), this.cursor.next();
          else if (
            t &&
            this.cursor.to == this.to &&
            this.cursor.from < this.cursor.to
          )
            this.cursor.next();
          else if (
            !this.filterPoint(
              this.cursor.from,
              this.cursor.to,
              this.cursor.value,
              this.cursor.rank,
            )
          )
            this.cursor.next();
          else {
            (this.point = l),
              (this.pointFrom = this.cursor.from),
              (this.pointRank = this.cursor.rank),
              (this.to = this.cursor.to),
              (this.endSide = l.endSide),
              this.cursor.from < e && (s = 1),
              this.cursor.next(),
              this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (n) {
      let o = 0;
      for (; o < n.length && n[o] < e; ) o++;
      this.openStart = o + s;
    }
  }
  activeForPoint(e) {
    if (!this.active.length) return this.active;
    let t = [];
    for (
      let n = this.active.length - 1;
      n >= 0 && !(this.activeRank[n] < this.pointRank);
      n--
    )
      (this.activeTo[n] > e ||
        (this.activeTo[n] == e &&
          this.active[n].endSide >= this.point.endSide)) &&
        t.push(this.active[n]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let n = this.activeTo.length - 1; n >= 0 && this.activeTo[n] > e; n--)
      t++;
    return t;
  }
}
function La(r, e, t, n, s, o) {
  r.goto(e), t.goto(n);
  let l = n + s,
    a = n,
    c = n - e;
  for (;;) {
    let h = r.to + c - t.to || r.endSide - t.endSide,
      u = h < 0 ? r.to + c : t.to,
      f = Math.min(u, l);
    if (
      (r.point || t.point
        ? (r.point &&
            t.point &&
            (r.point == t.point || r.point.eq(t.point)) &&
            ko(r.activeForPoint(r.to + c), t.activeForPoint(t.to))) ||
          o.comparePoint(a, f, r.point, t.point)
        : f > a &&
          !ko(r.active, t.active) &&
          o.compareRange(a, f, r.active, t.active),
      u > l)
    )
      break;
    (a = u), h <= 0 && r.next(), h >= 0 && t.next();
  }
}
function ko(r, e) {
  if (r.length != e.length) return !1;
  for (let t = 0; t < r.length; t++)
    if (r[t] != e[t] && !r[t].eq(e[t])) return !1;
  return !0;
}
function Gn(r, e) {
  for (let t = e, n = r.length - 1; t < n; t++) r[t] = r[t + 1];
  r.pop();
}
function Fn(r, e, t) {
  for (let n = r.length - 1; n >= e; n--) r[n + 1] = r[n];
  r[e] = t;
}
function _a(r, e) {
  let t = -1,
    n = 1e9;
  for (let s = 0; s < e.length; s++)
    (e[s] - n || r[s].endSide - r[t].endSide) < 0 && ((t = s), (n = e[s]));
  return t;
}
var ri = {
    8: 'Backspace',
    9: 'Tab',
    10: 'Enter',
    12: 'NumLock',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    44: 'PrintScreen',
    45: 'Insert',
    46: 'Delete',
    59: ';',
    61: '=',
    91: 'Meta',
    92: 'Meta',
    106: '*',
    107: '+',
    108: ',',
    109: '-',
    110: '.',
    111: '/',
    144: 'NumLock',
    145: 'ScrollLock',
    160: 'Shift',
    161: 'Shift',
    162: 'Control',
    163: 'Control',
    164: 'Alt',
    165: 'Alt',
    173: '-',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\',
    221: ']',
    222: "'",
    229: 'q',
  },
  Tr = {
    48: ')',
    49: '!',
    50: '@',
    51: '#',
    52: '$',
    53: '%',
    54: '^',
    55: '&',
    56: '*',
    57: '(',
    59: ':',
    61: '+',
    173: '_',
    186: ':',
    187: '+',
    188: '<',
    189: '_',
    190: '>',
    191: '?',
    192: '~',
    219: '{',
    220: '|',
    221: '}',
    222: '"',
    229: 'Q',
  },
  Xa = typeof navigator < 'u' && /Chrome\/(\d+)/.exec(navigator.userAgent),
  wm = typeof navigator < 'u' && /Apple Computer/.test(navigator.vendor),
  Tm = typeof navigator < 'u' && /Gecko\/\d+/.test(navigator.userAgent),
  Za = typeof navigator < 'u' && /Mac/.test(navigator.platform),
  Pm =
    typeof navigator < 'u' &&
    /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),
  Rm = (Xa && (Za || +Xa[1] < 57)) || (Tm && Za);
for (var Re = 0; Re < 10; Re++) ri[48 + Re] = ri[96 + Re] = String(Re);
for (var Re = 1; Re <= 24; Re++) ri[Re + 111] = 'F' + Re;
for (var Re = 65; Re <= 90; Re++)
  (ri[Re] = String.fromCharCode(Re + 32)), (Tr[Re] = String.fromCharCode(Re));
for (var As in ri) Tr.hasOwnProperty(As) || (Tr[As] = ri[As]);
function Cm(r) {
  var e =
      (Rm && (r.ctrlKey || r.altKey || r.metaKey)) ||
      ((wm || Pm) && r.shiftKey && r.key && r.key.length == 1),
    t =
      (!e && r.key) ||
      (r.shiftKey ? Tr : ri)[r.keyCode] ||
      r.key ||
      'Unidentified';
  return (
    t == 'Esc' && (t = 'Escape'),
    t == 'Del' && (t = 'Delete'),
    t == 'Left' && (t = 'ArrowLeft'),
    t == 'Up' && (t = 'ArrowUp'),
    t == 'Right' && (t = 'ArrowRight'),
    t == 'Down' && (t = 'ArrowDown'),
    t
  );
}
function Pr(r) {
  let e;
  return (
    r.nodeType == 11 ? (e = r.getSelection ? r : r.ownerDocument) : (e = r),
    e.getSelection()
  );
}
function Ni(r, e) {
  return e ? r == e || r.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function Wm() {
  let r = document.activeElement;
  for (; r && r.shadowRoot; ) r = r.shadowRoot.activeElement;
  return r;
}
function wo(r, e) {
  if (!e.anchorNode) return !1;
  try {
    return Ni(r, e.anchorNode);
  } catch {
    return !1;
  }
}
function $n(r) {
  return r.nodeType == 3
    ? kn(r, 0, r.nodeValue.length).getClientRects()
    : r.nodeType == 1
    ? r.getClientRects()
    : [];
}
function Rr(r, e, t, n) {
  return t ? Da(r, e, t, n, -1) || Da(r, e, t, n, 1) : !1;
}
function To(r) {
  for (var e = 0; ; e++) if (((r = r.previousSibling), !r)) return e;
}
function Da(r, e, t, n, s) {
  for (;;) {
    if (r == t && e == n) return !0;
    if (e == (s < 0 ? 0 : Cr(r))) {
      if (r.nodeName == 'DIV') return !1;
      let o = r.parentNode;
      if (!o || o.nodeType != 1) return !1;
      (e = To(r) + (s < 0 ? 0 : 1)), (r = o);
    } else if (r.nodeType == 1) {
      if (
        ((r = r.childNodes[e + (s < 0 ? -1 : 0)]),
        r.nodeType == 1 && r.contentEditable == 'false')
      )
        return !1;
      e = s < 0 ? Cr(r) : 0;
    } else return !1;
  }
}
function Cr(r) {
  return r.nodeType == 3 ? r.nodeValue.length : r.childNodes.length;
}
const hu = { left: 0, right: 0, top: 0, bottom: 0 };
function Hr(r, e) {
  let t = e ? r.left : r.right;
  return { left: t, right: t, top: r.top, bottom: r.bottom };
}
function Am(r) {
  return { left: 0, right: r.innerWidth, top: 0, bottom: r.innerHeight };
}
function Em(r, e, t, n, s, o, l, a) {
  let c = r.ownerDocument,
    h = c.defaultView;
  for (let u = r; u; )
    if (u.nodeType == 1) {
      let f,
        d = u == c.body;
      if (d) f = Am(h);
      else {
        if (
          u.scrollHeight <= u.clientHeight &&
          u.scrollWidth <= u.clientWidth
        ) {
          u = u.parentNode;
          continue;
        }
        let S = u.getBoundingClientRect();
        f = {
          left: S.left,
          right: S.left + u.clientWidth,
          top: S.top,
          bottom: S.top + u.clientHeight,
        };
      }
      let p = 0,
        m = 0;
      if (s == 'nearest')
        e.top < f.top
          ? ((m = -(f.top - e.top + l)),
            t > 0 &&
              e.bottom > f.bottom + m &&
              (m = e.bottom - f.bottom + m + l))
          : e.bottom > f.bottom &&
            ((m = e.bottom - f.bottom + l),
            t < 0 && e.top - m < f.top && (m = -(f.top + m - e.top + l)));
      else {
        let S = e.bottom - e.top,
          T = f.bottom - f.top;
        m =
          (s == 'center' && S <= T
            ? e.top + S / 2 - T / 2
            : s == 'start' || (s == 'center' && t < 0)
            ? e.top - l
            : e.bottom - T + l) - f.top;
      }
      if (
        (n == 'nearest'
          ? e.left < f.left
            ? ((p = -(f.left - e.left + o)),
              t > 0 && e.right > f.right + p && (p = e.right - f.right + p + o))
            : e.right > f.right &&
              ((p = e.right - f.right + o),
              t < 0 && e.left < f.left + p && (p = -(f.left + p - e.left + o)))
          : (p =
              (n == 'center'
                ? e.left + (e.right - e.left) / 2 - (f.right - f.left) / 2
                : (n == 'start') == a
                ? e.left - o
                : e.right - (f.right - f.left) + o) - f.left),
        p || m)
      )
        if (d) h.scrollBy(p, m);
        else {
          if (m) {
            let S = u.scrollTop;
            (u.scrollTop += m), (m = u.scrollTop - S);
          }
          if (p) {
            let S = u.scrollLeft;
            (u.scrollLeft += p), (p = u.scrollLeft - S);
          }
          e = {
            left: e.left - p,
            top: e.top - m,
            right: e.right - p,
            bottom: e.bottom - m,
          };
        }
      if (d) break;
      (u = u.assignedSlot || u.parentNode), (n = s = 'nearest');
    } else if (u.nodeType == 11) u = u.host;
    else break;
}
class Lm {
  constructor() {
    (this.anchorNode = null),
      (this.anchorOffset = 0),
      (this.focusNode = null),
      (this.focusOffset = 0);
  }
  eq(e) {
    return (
      this.anchorNode == e.anchorNode &&
      this.anchorOffset == e.anchorOffset &&
      this.focusNode == e.focusNode &&
      this.focusOffset == e.focusOffset
    );
  }
  setRange(e) {
    this.set(e.anchorNode, e.anchorOffset, e.focusNode, e.focusOffset);
  }
  set(e, t, n, s) {
    (this.anchorNode = e),
      (this.anchorOffset = t),
      (this.focusNode = n),
      (this.focusOffset = s);
  }
}
let Li = null;
function uu(r) {
  if (r.setActive) return r.setActive();
  if (Li) return r.focus(Li);
  let e = [];
  for (
    let t = r;
    t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument);
    t = t.parentNode
  );
  if (
    (r.focus(
      Li == null
        ? {
            get preventScroll() {
              return (Li = { preventScroll: !0 }), !0;
            },
          }
        : void 0,
    ),
    !Li)
  ) {
    Li = !1;
    for (let t = 0; t < e.length; ) {
      let n = e[t++],
        s = e[t++],
        o = e[t++];
      n.scrollTop != s && (n.scrollTop = s),
        n.scrollLeft != o && (n.scrollLeft = o);
    }
  }
}
let Ia;
function kn(r, e, t = e) {
  let n = Ia || (Ia = document.createRange());
  return n.setEnd(r, t), n.setStart(r, e), n;
}
function Qn(r, e, t) {
  let n = { key: e, code: e, keyCode: t, which: t, cancelable: !0 },
    s = new KeyboardEvent('keydown', n);
  (s.synthetic = !0), r.dispatchEvent(s);
  let o = new KeyboardEvent('keyup', n);
  return (
    (o.synthetic = !0),
    r.dispatchEvent(o),
    s.defaultPrevented || o.defaultPrevented
  );
}
function _m(r) {
  for (; r; ) {
    if (r && (r.nodeType == 9 || (r.nodeType == 11 && r.host))) return r;
    r = r.assignedSlot || r.parentNode;
  }
  return null;
}
function fu(r) {
  for (; r.attributes.length; ) r.removeAttributeNode(r.attributes[0]);
}
class Ce {
  constructor(e, t, n = !0) {
    (this.node = e), (this.offset = t), (this.precise = n);
  }
  static before(e, t) {
    return new Ce(e.parentNode, To(e), t);
  }
  static after(e, t) {
    return new Ce(e.parentNode, To(e) + 1, t);
  }
}
const ml = [];
class de {
  constructor() {
    (this.parent = null), (this.dom = null), (this.dirty = 2);
  }
  get editorView() {
    if (!this.parent) throw new Error('Accessing view in orphan content view');
    return this.parent.editorView;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e) {
    let t = this.posAtStart;
    for (let n of this.children) {
      if (n == e) return t;
      t += n.length + n.breakAfter;
    }
    throw new RangeError('Invalid child in posBefore');
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  coordsAt(e, t) {
    return null;
  }
  sync(e) {
    if (this.dirty & 2) {
      let t = this.dom,
        n = null,
        s;
      for (let o of this.children) {
        if (o.dirty) {
          if (!o.dom && (s = n ? n.nextSibling : t.firstChild)) {
            let l = de.get(s);
            (!l || (!l.parent && l.constructor == o.constructor)) &&
              o.reuseDOM(s);
          }
          o.sync(e), (o.dirty = 0);
        }
        if (
          ((s = n ? n.nextSibling : t.firstChild),
          e && !e.written && e.node == t && s != o.dom && (e.written = !0),
          o.dom.parentNode == t)
        )
          for (; s && s != o.dom; ) s = Ma(s);
        else t.insertBefore(o.dom, s);
        n = o.dom;
      }
      for (
        s = n ? n.nextSibling : t.firstChild,
          s && e && e.node == t && (e.written = !0);
        s;

      )
        s = Ma(s);
    } else if (this.dirty & 1)
      for (let t of this.children) t.dirty && (t.sync(e), (t.dirty = 0));
  }
  reuseDOM(e) {}
  localPosFromDOM(e, t) {
    let n;
    if (e == this.dom) n = this.dom.childNodes[t];
    else {
      let s = Cr(e) == 0 ? 0 : t == 0 ? -1 : 1;
      for (;;) {
        let o = e.parentNode;
        if (o == this.dom) break;
        s == 0 &&
          o.firstChild != o.lastChild &&
          (e == o.firstChild ? (s = -1) : (s = 1)),
          (e = o);
      }
      s < 0 ? (n = e) : (n = e.nextSibling);
    }
    if (n == this.dom.firstChild) return 0;
    for (; n && !de.get(n); ) n = n.nextSibling;
    if (!n) return this.length;
    for (let s = 0, o = 0; ; s++) {
      let l = this.children[s];
      if (l.dom == n) return o;
      o += l.length + l.breakAfter;
    }
  }
  domBoundsAround(e, t, n = 0) {
    let s = -1,
      o = -1,
      l = -1,
      a = -1;
    for (let c = 0, h = n, u = n; c < this.children.length; c++) {
      let f = this.children[c],
        d = h + f.length;
      if (h < e && d > t) return f.domBoundsAround(e, t, h);
      if (
        (d >= e && s == -1 && ((s = c), (o = h)),
        h > t && f.dom.parentNode == this.dom)
      ) {
        (l = c), (a = u);
        break;
      }
      (u = d), (h = d + f.breakAfter);
    }
    return {
      from: o,
      to: a < 0 ? n + this.length : a,
      startDOM:
        (s ? this.children[s - 1].dom.nextSibling : null) ||
        this.dom.firstChild,
      endDOM: l < this.children.length && l >= 0 ? this.children[l].dom : null,
    };
  }
  markDirty(e = !1) {
    (this.dirty |= 2), this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let t = this.parent; t; t = t.parent) {
      if ((e && (t.dirty |= 2), t.dirty & 1)) return;
      (t.dirty |= 1), (e = !1);
    }
  }
  setParent(e) {
    this.parent != e &&
      ((this.parent = e), this.dirty && this.markParentsDirty(!0));
  }
  setDOM(e) {
    this.dom && (this.dom.cmView = null), (this.dom = e), (e.cmView = this);
  }
  get rootView() {
    for (let e = this; ; ) {
      let t = e.parent;
      if (!t) return e;
      e = t;
    }
  }
  replaceChildren(e, t, n = ml) {
    this.markDirty();
    for (let s = e; s < t; s++) {
      let o = this.children[s];
      o.parent == this && o.destroy();
    }
    this.children.splice(e, t - e, ...n);
    for (let s = 0; s < n.length; s++) n[s].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new du(this.children, e, this.children.length);
  }
  childPos(e, t = 1) {
    return this.childCursor().findPos(e, t);
  }
  toString() {
    let e = this.constructor.name.replace('View', '');
    return (
      e +
      (this.children.length
        ? '(' + this.children.join() + ')'
        : this.length
        ? '[' + (e == 'Text' ? this.text : this.length) + ']'
        : '') +
      (this.breakAfter ? '#' : '')
    );
  }
  static get(e) {
    return e.cmView;
  }
  get isEditable() {
    return !0;
  }
  merge(e, t, n, s, o, l) {
    return !1;
  }
  become(e) {
    return !1;
  }
  getSide() {
    return 0;
  }
  destroy() {
    this.parent = null;
  }
}
de.prototype.breakAfter = 0;
function Ma(r) {
  let e = r.nextSibling;
  return r.parentNode.removeChild(r), e;
}
class du {
  constructor(e, t, n) {
    (this.children = e), (this.pos = t), (this.i = n), (this.off = 0);
  }
  findPos(e, t = 1) {
    for (;;) {
      if (
        e > this.pos ||
        (e == this.pos &&
          (t > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
      )
        return (this.off = e - this.pos), this;
      let n = this.children[--this.i];
      this.pos -= n.length + n.breakAfter;
    }
  }
}
function pu(r, e, t, n, s, o, l, a, c) {
  let { children: h } = r,
    u = h.length ? h[e] : null,
    f = o.length ? o[o.length - 1] : null,
    d = f ? f.breakAfter : l;
  if (
    !(
      e == n &&
      u &&
      !l &&
      !d &&
      o.length < 2 &&
      u.merge(t, s, o.length ? f : null, t == 0, a, c)
    )
  ) {
    if (n < h.length) {
      let p = h[n];
      p && s < p.length
        ? (e == n && ((p = p.split(s)), (s = 0)),
          !d && f && p.merge(0, s, f, !0, 0, c)
            ? (o[o.length - 1] = p)
            : (s && p.merge(0, s, null, !1, 0, c), o.push(p)))
        : p?.breakAfter && (f ? (f.breakAfter = 1) : (l = 1)),
        n++;
    }
    for (
      u &&
      ((u.breakAfter = l),
      t > 0 &&
        (!l && o.length && u.merge(t, u.length, o[0], !1, a, 0)
          ? (u.breakAfter = o.shift().breakAfter)
          : (t < u.length ||
              (u.children.length &&
                u.children[u.children.length - 1].length == 0)) &&
            u.merge(t, u.length, null, !1, a, 0),
        e++));
      e < n && o.length;

    )
      if (h[n - 1].become(o[o.length - 1]))
        n--, o.pop(), (c = o.length ? 0 : a);
      else if (h[e].become(o[0])) e++, o.shift(), (a = o.length ? 0 : c);
      else break;
    !o.length &&
      e &&
      n < h.length &&
      !h[e - 1].breakAfter &&
      h[n].merge(0, 0, h[e - 1], !1, a, c) &&
      e--,
      (e < n || o.length) && r.replaceChildren(e, n, o);
  }
}
function Ou(r, e, t, n, s, o) {
  let l = r.childCursor(),
    { i: a, off: c } = l.findPos(t, 1),
    { i: h, off: u } = l.findPos(e, -1),
    f = e - t;
  for (let d of n) f += d.length;
  (r.length += f), pu(r, h, u, a, c, n, 0, s, o);
}
let He =
    typeof navigator < 'u'
      ? navigator
      : { userAgent: '', vendor: '', platform: '' },
  Po = typeof document < 'u' ? document : { documentElement: { style: {} } };
const Ro = /Edge\/(\d+)/.exec(He.userAgent),
  mu = /MSIE \d/.test(He.userAgent),
  Co = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(He.userAgent),
  Jr = !!(mu || Co || Ro),
  ja = !Jr && /gecko\/(\d+)/i.test(He.userAgent),
  Es = !Jr && /Chrome\/(\d+)/.exec(He.userAgent),
  za = 'webkitFontSmoothing' in Po.documentElement.style,
  gu = !Jr && /Apple Computer/.test(He.vendor),
  Na = gu && (/Mobile\/\w+/.test(He.userAgent) || He.maxTouchPoints > 2);
var j = {
  mac: Na || /Mac/.test(He.platform),
  windows: /Win/.test(He.platform),
  linux: /Linux|X11/.test(He.platform),
  ie: Jr,
  ie_version: mu ? Po.documentMode || 6 : Co ? +Co[1] : Ro ? +Ro[1] : 0,
  gecko: ja,
  gecko_version: ja ? +(/Firefox\/(\d+)/.exec(He.userAgent) || [0, 0])[1] : 0,
  chrome: !!Es,
  chrome_version: Es ? +Es[1] : 0,
  ios: Na,
  android: /Android\b/.test(He.userAgent),
  webkit: za,
  safari: gu,
  webkit_version: za
    ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
    : 0,
  tabSize:
    Po.documentElement.style.tabSize != null ? 'tab-size' : '-moz-tab-size',
};
const Xm = 256;
class si extends de {
  constructor(e) {
    super(), (this.text = e);
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e) {
    this.dom || this.createDOM(),
      this.dom.nodeValue != this.text &&
        (e && e.node == this.dom && (e.written = !0),
        (this.dom.nodeValue = this.text));
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e);
  }
  merge(e, t, n) {
    return n && (!(n instanceof si) || this.length - (t - e) + n.length > Xm)
      ? !1
      : ((this.text =
          this.text.slice(0, e) + (n ? n.text : '') + this.text.slice(t)),
        this.markDirty(),
        !0);
  }
  split(e) {
    let t = new si(this.text.slice(e));
    return (this.text = this.text.slice(0, e)), this.markDirty(), t;
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new Ce(this.dom, e);
  }
  domBoundsAround(e, t, n) {
    return {
      from: n,
      to: n + this.length,
      startDOM: this.dom,
      endDOM: this.dom.nextSibling,
    };
  }
  coordsAt(e, t) {
    return Wo(this.dom, e, t);
  }
}
class kt extends de {
  constructor(e, t = [], n = 0) {
    super(), (this.mark = e), (this.children = t), (this.length = n);
    for (let s of t) s.setParent(this);
  }
  setAttrs(e) {
    if (
      (fu(e),
      this.mark.class && (e.className = this.mark.class),
      this.mark.attrs)
    )
      for (let t in this.mark.attrs) e.setAttribute(t, this.mark.attrs[t]);
    return e;
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() &&
      (this.setDOM(e), (this.dirty |= 6));
  }
  sync(e) {
    this.dom
      ? this.dirty & 4 && this.setAttrs(this.dom)
      : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))),
      super.sync(e);
  }
  merge(e, t, n, s, o, l) {
    return n &&
      (!(n instanceof kt && n.mark.eq(this.mark)) ||
        (e && o <= 0) ||
        (t < this.length && l <= 0))
      ? !1
      : (Ou(this, e, t, n ? n.children : [], o - 1, l - 1),
        this.markDirty(),
        !0);
  }
  split(e) {
    let t = [],
      n = 0,
      s = -1,
      o = 0;
    for (let a of this.children) {
      let c = n + a.length;
      c > e && t.push(n < e ? a.split(e - n) : a),
        s < 0 && n >= e && (s = o),
        (n = c),
        o++;
    }
    let l = this.length - e;
    return (
      (this.length = e),
      s > -1 && ((this.children.length = s), this.markDirty()),
      new kt(this.mark, t, l)
    );
  }
  domAtPos(e) {
    return Qu(this.dom, this.children, e);
  }
  coordsAt(e, t) {
    return vu(this, e, t);
  }
}
function Wo(r, e, t) {
  let n = r.nodeValue.length;
  e > n && (e = n);
  let s = e,
    o = e,
    l = 0;
  (e == 0 && t < 0) || (e == n && t >= 0)
    ? j.chrome || j.gecko || (e ? (s--, (l = 1)) : (o++, (l = -1)))
    : t < 0
    ? s--
    : o++;
  let a = kn(r, s, o).getClientRects();
  if (!a.length) return hu;
  let c = a[(l ? l < 0 : t >= 0) ? 0 : a.length - 1];
  return (
    j.safari &&
      !l &&
      c.width == 0 &&
      (c = Array.prototype.find.call(a, (h) => h.width) || c),
    l ? Hr(c, l < 0) : c || null
  );
}
class Kt extends de {
  constructor(e, t, n) {
    super(),
      (this.widget = e),
      (this.length = t),
      (this.side = n),
      (this.prevWidget = null);
  }
  static create(e, t, n) {
    return new (e.customView || Kt)(e, t, n);
  }
  split(e) {
    let t = Kt.create(this.widget, this.length - e, this.side);
    return (this.length -= e), t;
  }
  sync() {
    (!this.dom || !this.widget.updateDOM(this.dom)) &&
      (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
      (this.prevWidget = null),
      this.setDOM(this.widget.toDOM(this.editorView)),
      (this.dom.contentEditable = 'false'));
  }
  getSide() {
    return this.side;
  }
  merge(e, t, n, s, o, l) {
    return n &&
      (!(n instanceof Kt) ||
        !this.widget.compare(n.widget) ||
        (e > 0 && o <= 0) ||
        (t < this.length && l <= 0))
      ? !1
      : ((this.length = e + (n ? n.length : 0) + (this.length - t)), !0);
  }
  become(e) {
    return e.length == this.length &&
      e instanceof Kt &&
      e.side == this.side &&
      this.widget.constructor == e.widget.constructor
      ? (this.widget.eq(e.widget) || this.markDirty(!0),
        this.dom && !this.prevWidget && (this.prevWidget = this.widget),
        (this.widget = e.widget),
        !0)
      : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0) return K.empty;
    let e = this;
    for (; e.parent; ) e = e.parent;
    let t = e.editorView,
      n = t && t.state.doc,
      s = this.posAtStart;
    return n ? n.slice(s, s + this.length) : K.empty;
  }
  domAtPos(e) {
    return e == 0 ? Ce.before(this.dom) : Ce.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, t) {
    let n = this.dom.getClientRects(),
      s = null;
    if (!n.length) return hu;
    for (
      let o = e > 0 ? n.length - 1 : 0;
      (s = n[o]), !(e > 0 ? o == 0 : o == n.length - 1 || s.top < s.bottom);
      o += e > 0 ? -1 : 1
    );
    return (e == 0 && t > 0) || (e == this.length && t <= 0)
      ? s
      : Hr(s, e == 0);
  }
  get isEditable() {
    return !1;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class bu extends Kt {
  domAtPos(e) {
    let { topView: t, text: n } = this.widget;
    return t
      ? Ao(
          e,
          0,
          t,
          n,
          (s, o) => s.domAtPos(o),
          (s) => new Ce(n, Math.min(s, n.nodeValue.length)),
        )
      : new Ce(n, Math.min(e, n.nodeValue.length));
  }
  sync() {
    this.setDOM(this.widget.toDOM());
  }
  localPosFromDOM(e, t) {
    let { topView: n, text: s } = this.widget;
    return n ? yu(e, t, n, s) : Math.min(t, this.length);
  }
  ignoreMutation() {
    return !1;
  }
  get overrideDOMText() {
    return null;
  }
  coordsAt(e, t) {
    let { topView: n, text: s } = this.widget;
    return n
      ? Ao(
          e,
          t,
          n,
          s,
          (o, l, a) => o.coordsAt(l, a),
          (o, l) => Wo(s, o, l),
        )
      : Wo(s, e, t);
  }
  destroy() {
    var e;
    super.destroy(),
      (e = this.widget.topView) === null || e === void 0 || e.destroy();
  }
  get isEditable() {
    return !0;
  }
}
function Ao(r, e, t, n, s, o) {
  if (t instanceof kt) {
    for (let l of t.children) {
      let a = Ni(l.dom, n),
        c = a ? n.nodeValue.length : l.length;
      if (r < c || (r == c && l.getSide() <= 0))
        return a ? Ao(r, e, l, n, s, o) : s(l, r, e);
      r -= c;
    }
    return s(t, t.length, -1);
  } else return t.dom == n ? o(r, e) : s(t, r, e);
}
function yu(r, e, t, n) {
  if (t instanceof kt)
    for (let s of t.children) {
      let o = 0,
        l = Ni(s.dom, n);
      if (Ni(s.dom, r))
        return o + (l ? yu(r, e, s, n) : s.localPosFromDOM(r, e));
      o += l ? n.nodeValue.length : s.length;
    }
  else if (t.dom == n) return Math.min(e, n.nodeValue.length);
  return t.localPosFromDOM(r, e);
}
class Bi extends de {
  constructor(e) {
    super(), (this.side = e);
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(e) {
    return e instanceof Bi && e.side == this.side;
  }
  split() {
    return new Bi(this.side);
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement('img');
      (e.className = 'cm-widgetBuffer'),
        e.setAttribute('aria-hidden', 'true'),
        this.setDOM(e);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(e) {
    return Ce.before(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e) {
    let t = this.dom.getBoundingClientRect(),
      n = Zm(this, this.side > 0 ? -1 : 1);
    return n && n.top < t.bottom && n.bottom > t.top
      ? { left: t.left, right: t.right, top: n.top, bottom: n.bottom }
      : t;
  }
  get overrideDOMText() {
    return K.empty;
  }
}
si.prototype.children = Kt.prototype.children = Bi.prototype.children = ml;
function Zm(r, e) {
  let t = r.parent,
    n = t ? t.children.indexOf(r) : -1;
  for (; t && n >= 0; )
    if (e < 0 ? n > 0 : n < t.children.length) {
      let s = t.children[n + e];
      if (s instanceof si) {
        let o = s.coordsAt(e < 0 ? s.length : 0, e);
        if (o) return o;
      }
      n += e;
    } else if (t instanceof kt && t.parent)
      (n = t.parent.children.indexOf(t) + (e < 0 ? 0 : 1)), (t = t.parent);
    else {
      let s = t.dom.lastChild;
      if (s && s.nodeName == 'BR') return s.getClientRects()[0];
      break;
    }
}
function Qu(r, e, t) {
  let n = 0;
  for (let s = 0; n < e.length; n++) {
    let o = e[n],
      l = s + o.length;
    if (!(l == s && o.getSide() <= 0)) {
      if (t > s && t < l && o.dom.parentNode == r) return o.domAtPos(t - s);
      if (t <= s) break;
      s = l;
    }
  }
  for (; n > 0; n--) {
    let s = e[n - 1].dom;
    if (s.parentNode == r) return Ce.after(s);
  }
  return new Ce(r, 0);
}
function xu(r, e, t) {
  let n,
    { children: s } = r;
  t > 0 &&
  e instanceof kt &&
  s.length &&
  (n = s[s.length - 1]) instanceof kt &&
  n.mark.eq(e.mark)
    ? xu(n, e.children[0], t - 1)
    : (s.push(e), e.setParent(r)),
    (r.length += e.length);
}
function vu(r, e, t) {
  for (let o = 0, l = 0; l < r.children.length; l++) {
    let a = r.children[l],
      c = o + a.length,
      h;
    if (
      (t <= 0 || c == r.length || a.getSide() > 0 ? c >= e : c > e) &&
      (e < c ||
        l + 1 == r.children.length ||
        (h = r.children[l + 1]).length ||
        h.getSide() > 0)
    ) {
      let u = 0;
      if (c == o) {
        if (a.getSide() <= 0) continue;
        u = t = -a.getSide();
      }
      let f = a.coordsAt(Math.max(0, e - o), t);
      return u && f ? Hr(f, t < 0) : f;
    }
    o = c;
  }
  let n = r.dom.lastChild;
  if (!n) return r.dom.getBoundingClientRect();
  let s = $n(n);
  return s[s.length - 1] || null;
}
function Eo(r, e) {
  for (let t in r)
    t == 'class' && e.class
      ? (e.class += ' ' + r.class)
      : t == 'style' && e.style
      ? (e.style += ';' + r.style)
      : (e[t] = r[t]);
  return e;
}
function gl(r, e) {
  if (r == e) return !0;
  if (!r || !e) return !1;
  let t = Object.keys(r),
    n = Object.keys(e);
  if (t.length != n.length) return !1;
  for (let s of t) if (n.indexOf(s) == -1 || r[s] !== e[s]) return !1;
  return !0;
}
function Lo(r, e, t) {
  if (e) for (let n in e) (t && n in t) || r.removeAttribute(n);
  if (t) for (let n in t) (e && e[n] == t[n]) || r.setAttribute(n, t[n]);
}
class Ti {
  eq(e) {
    return !1;
  }
  updateDOM(e) {
    return !1;
  }
  compare(e) {
    return this == e || (this.constructor == e.constructor && this.eq(e));
  }
  get estimatedHeight() {
    return -1;
  }
  ignoreEvent(e) {
    return !0;
  }
  get customView() {
    return null;
  }
  destroy(e) {}
}
var Oe = (function (r) {
  return (
    (r[(r.Text = 0)] = 'Text'),
    (r[(r.WidgetBefore = 1)] = 'WidgetBefore'),
    (r[(r.WidgetAfter = 2)] = 'WidgetAfter'),
    (r[(r.WidgetRange = 3)] = 'WidgetRange'),
    r
  );
})(Oe || (Oe = {}));
class q extends $i {
  constructor(e, t, n, s) {
    super(),
      (this.startSide = e),
      (this.endSide = t),
      (this.widget = n),
      (this.spec = s);
  }
  get heightRelevant() {
    return !1;
  }
  static mark(e) {
    return new Kr(e);
  }
  static widget(e) {
    let t = e.side || 0,
      n = !!e.block;
    return (
      (t += n ? (t > 0 ? 3e8 : -4e8) : t > 0 ? 1e8 : -1e8),
      new ki(e, t, t, n, e.widget || null, !1)
    );
  }
  static replace(e) {
    let t = !!e.block,
      n,
      s;
    if (e.isBlockGap) (n = -5e8), (s = 4e8);
    else {
      let { start: o, end: l } = Su(e, t);
      (n = (o ? (t ? -3e8 : -1) : 5e8) - 1),
        (s = (l ? (t ? 2e8 : 1) : -6e8) + 1);
    }
    return new ki(e, n, s, t, e.widget || null, !0);
  }
  static line(e) {
    return new Cn(e);
  }
  static set(e, t = !1) {
    return le.of(e, t);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
q.none = le.empty;
class Kr extends q {
  constructor(e) {
    let { start: t, end: n } = Su(e);
    super(t ? -1 : 5e8, n ? 1 : -6e8, null, e),
      (this.tagName = e.tagName || 'span'),
      (this.class = e.class || ''),
      (this.attrs = e.attributes || null);
  }
  eq(e) {
    return (
      this == e ||
      (e instanceof Kr &&
        this.tagName == e.tagName &&
        this.class == e.class &&
        gl(this.attrs, e.attrs))
    );
  }
  range(e, t = e) {
    if (e >= t) throw new RangeError('Mark decorations may not be empty');
    return super.range(e, t);
  }
}
Kr.prototype.point = !1;
class Cn extends q {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof Cn && gl(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError('Line decoration ranges must be zero-length');
    return super.range(e, t);
  }
}
Cn.prototype.mapMode = Le.TrackBefore;
Cn.prototype.point = !0;
class ki extends q {
  constructor(e, t, n, s, o, l) {
    super(t, n, o, e),
      (this.block = s),
      (this.isReplace = l),
      (this.mapMode = s
        ? t <= 0
          ? Le.TrackBefore
          : Le.TrackAfter
        : Le.TrackDel);
  }
  get type() {
    return this.startSide < this.endSide
      ? Oe.WidgetRange
      : this.startSide <= 0
      ? Oe.WidgetBefore
      : Oe.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || (!!this.widget && this.widget.estimatedHeight >= 5);
  }
  eq(e) {
    return (
      e instanceof ki &&
      Dm(this.widget, e.widget) &&
      this.block == e.block &&
      this.startSide == e.startSide &&
      this.endSide == e.endSide
    );
  }
  range(e, t = e) {
    if (
      this.isReplace &&
      (e > t || (e == t && this.startSide > 0 && this.endSide <= 0))
    )
      throw new RangeError('Invalid range for replacement decoration');
    if (!this.isReplace && t != e)
      throw new RangeError(
        'Widget decorations can only have zero-length ranges',
      );
    return super.range(e, t);
  }
}
ki.prototype.point = !0;
function Su(r, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: n } = r;
  return (
    t == null && (t = r.inclusive),
    n == null && (n = r.inclusive),
    { start: t ?? e, end: n ?? e }
  );
}
function Dm(r, e) {
  return r == e || !!(r && e && r.compare(e));
}
function _o(r, e, t, n = 0) {
  let s = t.length - 1;
  s >= 0 && t[s] + n >= r ? (t[s] = Math.max(t[s], e)) : t.push(r, e);
}
class Ie extends de {
  constructor() {
    super(...arguments),
      (this.children = []),
      (this.length = 0),
      (this.prevAttrs = void 0),
      (this.attrs = null),
      (this.breakAfter = 0);
  }
  merge(e, t, n, s, o, l) {
    if (n) {
      if (!(n instanceof Ie)) return !1;
      this.dom || n.transferDOM(this);
    }
    return (
      s && this.setDeco(n ? n.attrs : null),
      Ou(this, e, t, n ? n.children : [], o, l),
      !0
    );
  }
  split(e) {
    let t = new Ie();
    if (((t.breakAfter = this.breakAfter), this.length == 0)) return t;
    let { i: n, off: s } = this.childPos(e);
    s &&
      (t.append(this.children[n].split(s), 0),
      this.children[n].merge(s, this.children[n].length, null, !1, 0, 0),
      n++);
    for (let o = n; o < this.children.length; o++)
      t.append(this.children[o], 0);
    for (; n > 0 && this.children[n - 1].length == 0; )
      this.children[--n].destroy();
    return (this.children.length = n), this.markDirty(), (this.length = e), t;
  }
  transferDOM(e) {
    !this.dom ||
      (e.setDOM(this.dom),
      (e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs),
      (this.prevAttrs = void 0),
      (this.dom = null));
  }
  setDeco(e) {
    gl(this.attrs, e) ||
      (this.dom && ((this.prevAttrs = this.attrs), this.markDirty()),
      (this.attrs = e));
  }
  append(e, t) {
    xu(this, e, t);
  }
  addLineDeco(e) {
    let t = e.spec.attributes,
      n = e.spec.class;
    t && (this.attrs = Eo(t, this.attrs || {})),
      n && (this.attrs = Eo({ class: n }, this.attrs || {}));
  }
  domAtPos(e) {
    return Qu(this.dom, this.children, e);
  }
  reuseDOM(e) {
    e.nodeName == 'DIV' && (this.setDOM(e), (this.dirty |= 6));
  }
  sync(e) {
    var t;
    this.dom
      ? this.dirty & 4 &&
        (fu(this.dom),
        (this.dom.className = 'cm-line'),
        (this.prevAttrs = this.attrs ? null : void 0))
      : (this.setDOM(document.createElement('div')),
        (this.dom.className = 'cm-line'),
        (this.prevAttrs = this.attrs ? null : void 0)),
      this.prevAttrs !== void 0 &&
        (Lo(this.dom, this.prevAttrs, this.attrs),
        this.dom.classList.add('cm-line'),
        (this.prevAttrs = void 0)),
      super.sync(e);
    let n = this.dom.lastChild;
    for (; n && de.get(n) instanceof kt; ) n = n.lastChild;
    if (
      !n ||
      !this.length ||
      (n.nodeName != 'BR' &&
        ((t = de.get(n)) === null || t === void 0 ? void 0 : t.isEditable) ==
          !1 &&
        (!j.ios || !this.children.some((s) => s instanceof si)))
    ) {
      let s = document.createElement('BR');
      (s.cmIgnore = !0), this.dom.appendChild(s);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20) return null;
    let e = 0;
    for (let t of this.children) {
      if (!(t instanceof si)) return null;
      let n = $n(t.dom);
      if (n.length != 1) return null;
      e += n[0].width;
    }
    return {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: e / this.length,
    };
  }
  coordsAt(e, t) {
    return vu(this, e, t);
  }
  become(e) {
    return !1;
  }
  get type() {
    return Oe.Text;
  }
  static find(e, t) {
    for (let n = 0, s = 0; n < e.children.length; n++) {
      let o = e.children[n],
        l = s + o.length;
      if (l >= t) {
        if (o instanceof Ie) return o;
        if (l > t) break;
      }
      s = l + o.breakAfter;
    }
    return null;
  }
}
class vi extends de {
  constructor(e, t, n) {
    super(),
      (this.widget = e),
      (this.length = t),
      (this.type = n),
      (this.breakAfter = 0),
      (this.prevWidget = null);
  }
  merge(e, t, n, s, o, l) {
    return n &&
      (!(n instanceof vi) ||
        !this.widget.compare(n.widget) ||
        (e > 0 && o <= 0) ||
        (t < this.length && l <= 0))
      ? !1
      : ((this.length = e + (n ? n.length : 0) + (this.length - t)), !0);
  }
  domAtPos(e) {
    return e == 0 ? Ce.before(this.dom) : Ce.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let n = new vi(this.widget, t, this.type);
    return (n.breakAfter = this.breakAfter), n;
  }
  get children() {
    return ml;
  }
  sync() {
    (!this.dom || !this.widget.updateDOM(this.dom)) &&
      (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
      (this.prevWidget = null),
      this.setDOM(this.widget.toDOM(this.editorView)),
      (this.dom.contentEditable = 'false'));
  }
  get overrideDOMText() {
    return this.parent
      ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd)
      : K.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof vi &&
      e.type == this.type &&
      e.widget.constructor == this.widget.constructor
      ? (e.widget.eq(this.widget) || this.markDirty(!0),
        this.dom && !this.prevWidget && (this.prevWidget = this.widget),
        (this.widget = e.widget),
        (this.length = e.length),
        (this.breakAfter = e.breakAfter),
        !0)
      : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class bl {
  constructor(e, t, n, s) {
    (this.doc = e),
      (this.pos = t),
      (this.end = n),
      (this.disallowBlockEffectsBelow = s),
      (this.content = []),
      (this.curLine = null),
      (this.breakAtStart = 0),
      (this.pendingBuffer = 0),
      (this.atCursorPos = !0),
      (this.openStart = -1),
      (this.openEnd = -1),
      (this.text = ''),
      (this.textOff = 0),
      (this.cursor = e.iter()),
      (this.skip = t);
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !e.breakAfter && !(e instanceof vi && e.type == Oe.WidgetBefore);
  }
  getLine() {
    return (
      this.curLine ||
        (this.content.push((this.curLine = new Ie())), (this.atCursorPos = !0)),
      this.curLine
    );
  }
  flushBuffer(e) {
    this.pendingBuffer &&
      (this.curLine.append(Hn(new Bi(-1), e), e.length),
      (this.pendingBuffer = 0));
  }
  addBlockWidget(e) {
    this.flushBuffer([]), (this.curLine = null), this.content.push(e);
  }
  finish(e) {
    e ? (this.pendingBuffer = 0) : this.flushBuffer([]),
      this.posCovered() || this.getLine();
  }
  buildText(e, t, n) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: o, lineBreak: l, done: a } = this.cursor.next(this.skip);
        if (((this.skip = 0), a))
          throw new Error('Ran out of text content when drawing inline views');
        if (l) {
          this.posCovered() || this.getLine(),
            this.content.length
              ? (this.content[this.content.length - 1].breakAfter = 1)
              : (this.breakAtStart = 1),
            this.flushBuffer([]),
            (this.curLine = null),
            e--;
          continue;
        } else (this.text = o), (this.textOff = 0);
      }
      let s = Math.min(this.text.length - this.textOff, e, 512);
      this.flushBuffer(t.slice(0, n)),
        this.getLine().append(
          Hn(new si(this.text.slice(this.textOff, this.textOff + s)), t),
          n,
        ),
        (this.atCursorPos = !0),
        (this.textOff += s),
        (e -= s),
        (n = 0);
    }
  }
  span(e, t, n, s) {
    this.buildText(t - e, n, s),
      (this.pos = t),
      this.openStart < 0 && (this.openStart = s);
  }
  point(e, t, n, s, o) {
    let l = t - e;
    if (n instanceof ki)
      if (n.block) {
        let { type: a } = n;
        a == Oe.WidgetAfter && !this.posCovered() && this.getLine(),
          this.addBlockWidget(new vi(n.widget || new Ba('div'), l, a));
      } else {
        let a = Kt.create(n.widget || new Ba('span'), l, n.startSide),
          c =
            this.atCursorPos &&
            !a.isEditable &&
            o <= s.length &&
            (e < t || n.startSide > 0),
          h = !a.isEditable && (e < t || n.startSide <= 0),
          u = this.getLine();
        this.pendingBuffer == 2 && !c && (this.pendingBuffer = 0),
          this.flushBuffer(s),
          c &&
            (u.append(Hn(new Bi(1), s), o),
            (o = s.length + Math.max(0, o - s.length))),
          u.append(Hn(a, s), o),
          (this.atCursorPos = h),
          (this.pendingBuffer = h ? (e < t ? 1 : 2) : 0);
      }
    else
      this.doc.lineAt(this.pos).from == this.pos &&
        this.getLine().addLineDeco(n);
    l &&
      (this.textOff + l <= this.text.length
        ? (this.textOff += l)
        : ((this.skip += l - (this.text.length - this.textOff)),
          (this.text = ''),
          (this.textOff = 0)),
      (this.pos = t)),
      this.openStart < 0 && (this.openStart = o);
  }
  filterPoint(e, t, n, s) {
    if (s < this.disallowBlockEffectsBelow && n instanceof ki) {
      if (n.block)
        throw new RangeError(
          'Block decorations may not be specified via plugins',
        );
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError(
          'Decorations that replace line breaks may not be specified via plugins',
        );
    }
    return !0;
  }
  static build(e, t, n, s, o) {
    let l = new bl(e, t, n, o);
    return (
      (l.openEnd = le.spans(s, t, n, l)),
      l.openStart < 0 && (l.openStart = l.openEnd),
      l.finish(l.openEnd),
      l
    );
  }
}
function Hn(r, e) {
  for (let t of e) r = new kt(t, [r], r.length);
  return r;
}
class Ba extends Ti {
  constructor(e) {
    super(), (this.tag = e);
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
}
const Im = [],
  $u = U.define(),
  ku = U.define(),
  wu = U.define(),
  Tu = U.define(),
  Xo = U.define(),
  Pu = U.define(),
  Zo = te.define({ map: (r, e) => r.map(e) }),
  Ru = te.define({ map: (r, e) => r.map(e) });
class Zi {
  constructor(e, t = 'nearest', n = 'nearest', s = 5, o = 5) {
    (this.range = e),
      (this.y = t),
      (this.x = n),
      (this.yMargin = s),
      (this.xMargin = o);
  }
  map(e) {
    return e.empty
      ? this
      : new Zi(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin);
  }
}
const Ua = te.define({ map: (r, e) => r.map(e) });
function ii(r, e, t) {
  let n = r.facet(Tu);
  n.length
    ? n[0](e)
    : window.onerror
    ? window.onerror(String(e), t, void 0, void 0, e)
    : t
    ? console.error(t + ':', e)
    : console.error(e);
}
const Wn = U.define({ combine: (r) => (r.length ? r[0] : !0) });
class Mm {
  constructor(e, t) {
    (this.field = e), (this.get = t);
  }
}
class Me {
  from(e) {
    return new Mm(this, e);
  }
  static define() {
    return new Me();
  }
}
Me.decorations = Me.define();
Me.atomicRanges = Me.define();
Me.scrollMargins = Me.define();
let jm = 0;
const On = U.define();
class ht {
  constructor(e, t, n) {
    (this.id = e),
      (this.create = t),
      (this.fields = n),
      (this.extension = On.of(this));
  }
  static define(e, t) {
    let { eventHandlers: n, provide: s, decorations: o } = t || {},
      l = [];
    if (s) for (let a of Array.isArray(s) ? s : [s]) l.push(a);
    return (
      n && l.push(Cu.from((a) => ({ plugin: a, handlers: n }))),
      o && l.push(Me.decorations.from(o)),
      new ht(jm++, e, l)
    );
  }
  static fromClass(e, t) {
    return ht.define((n) => new e(n), t);
  }
}
const Cu = Me.define();
class Ls {
  constructor(e) {
    (this.spec = e), (this.mustUpdate = null), (this.value = null);
  }
  takeField(e, t) {
    if (this.spec)
      for (let { field: n, get: s } of this.spec.fields)
        n == e && t.push(s(this.value));
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (((this.mustUpdate = null), this.value.update))
          try {
            this.value.update(t);
          } catch (n) {
            if (
              (ii(t.state, n, 'CodeMirror plugin crashed'), this.value.destroy)
            )
              try {
                this.value.destroy();
              } catch {}
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(e);
      } catch (t) {
        ii(e.state, t, 'CodeMirror plugin crashed'), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (n) {
        ii(e.state, n, 'CodeMirror plugin crashed');
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Wu = U.define(),
  Au = U.define(),
  gi = U.define(),
  mn = U.define();
class Dt {
  constructor(e, t, n, s) {
    (this.fromA = e), (this.toA = t), (this.fromB = n), (this.toB = s);
  }
  join(e) {
    return new Dt(
      Math.min(this.fromA, e.fromA),
      Math.max(this.toA, e.toA),
      Math.min(this.fromB, e.fromB),
      Math.max(this.toB, e.toB),
    );
  }
  addToSet(e) {
    let t = e.length,
      n = this;
    for (; t > 0; t--) {
      let s = e[t - 1];
      if (!(s.fromA > n.toA)) {
        if (s.toA < n.fromA) break;
        (n = n.join(s)), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, n), e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0) return e;
    let n = [];
    for (let s = 0, o = 0, l = 0, a = 0; ; s++) {
      let c = s == e.length ? null : e[s],
        h = l - a,
        u = c ? c.fromB : 1e9;
      for (; o < t.length && t[o] < u; ) {
        let f = t[o],
          d = t[o + 1],
          p = Math.max(a, f),
          m = Math.min(u, d);
        if ((p <= m && new Dt(p + h, m + h, p, m).addToSet(n), d > u)) break;
        o += 2;
      }
      if (!c) return n;
      new Dt(c.fromA, c.toA, c.fromB, c.toB).addToSet(n),
        (l = c.toA),
        (a = c.toB);
    }
  }
}
class Va {
  constructor(e, t, n = Im) {
    (this.view = e),
      (this.state = t),
      (this.transactions = n),
      (this.flags = 0),
      (this.startState = e.state),
      (this.changes = $e.empty(this.startState.doc.length));
    for (let l of n) this.changes = this.changes.compose(l.changes);
    let s = [];
    this.changes.iterChangedRanges((l, a, c, h) => s.push(new Dt(l, a, c, h))),
      (this.changedRanges = s);
    let o = e.hasFocus;
    o != e.inputState.notifiedFocused &&
      ((e.inputState.notifiedFocused = o), (this.flags |= 1));
  }
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & 10) > 0;
  }
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
var ne = (function (r) {
  return (r[(r.LTR = 0)] = 'LTR'), (r[(r.RTL = 1)] = 'RTL'), r;
})(ne || (ne = {}));
const Do = ne.LTR,
  zm = ne.RTL;
function Eu(r) {
  let e = [];
  for (let t = 0; t < r.length; t++) e.push(1 << +r[t]);
  return e;
}
const Nm = Eu(
    '88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008',
  ),
  Bm = Eu(
    '4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333',
  ),
  Io = Object.create(null),
  Ot = [];
for (let r of ['()', '[]', '{}']) {
  let e = r.charCodeAt(0),
    t = r.charCodeAt(1);
  (Io[e] = t), (Io[t] = -e);
}
function Um(r) {
  return r <= 247
    ? Nm[r]
    : 1424 <= r && r <= 1524
    ? 2
    : 1536 <= r && r <= 1785
    ? Bm[r - 1536]
    : 1774 <= r && r <= 2220
    ? 4
    : (8192 <= r && r <= 8203) || r == 8204
    ? 256
    : 1;
}
const Vm = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
class ji {
  constructor(e, t, n) {
    (this.from = e), (this.to = t), (this.level = n);
  }
  get dir() {
    return this.level % 2 ? zm : Do;
  }
  side(e, t) {
    return (this.dir == t) == e ? this.to : this.from;
  }
  static find(e, t, n, s) {
    let o = -1;
    for (let l = 0; l < e.length; l++) {
      let a = e[l];
      if (a.from <= t && a.to >= t) {
        if (a.level == n) return l;
        (o < 0 ||
          (s != 0 ? (s < 0 ? a.from < t : a.to > t) : e[o].level > a.level)) &&
          (o = l);
      }
    }
    if (o < 0) throw new RangeError('Index out of range');
    return o;
  }
}
const he = [];
function Ym(r, e) {
  let t = r.length,
    n = e == Do ? 1 : 2,
    s = e == Do ? 2 : 1;
  if (!r || (n == 1 && !Vm.test(r))) return Lu(t);
  for (let l = 0, a = n, c = n; l < t; l++) {
    let h = Um(r.charCodeAt(l));
    h == 512 ? (h = a) : h == 8 && c == 4 && (h = 16),
      (he[l] = h == 4 ? 2 : h),
      h & 7 && (c = h),
      (a = h);
  }
  for (let l = 0, a = n, c = n; l < t; l++) {
    let h = he[l];
    if (h == 128)
      l < t - 1 && a == he[l + 1] && a & 24 ? (h = he[l] = a) : (he[l] = 256);
    else if (h == 64) {
      let u = l + 1;
      for (; u < t && he[u] == 64; ) u++;
      let f = (l && a == 8) || (u < t && he[u] == 8) ? (c == 1 ? 1 : 8) : 256;
      for (let d = l; d < u; d++) he[d] = f;
      l = u - 1;
    } else h == 8 && c == 1 && (he[l] = 1);
    (a = h), h & 7 && (c = h);
  }
  for (let l = 0, a = 0, c = 0, h, u, f; l < t; l++)
    if ((u = Io[(h = r.charCodeAt(l))]))
      if (u < 0) {
        for (let d = a - 3; d >= 0; d -= 3)
          if (Ot[d + 1] == -u) {
            let p = Ot[d + 2],
              m = p & 2 ? n : p & 4 ? (p & 1 ? s : n) : 0;
            m && (he[l] = he[Ot[d]] = m), (a = d);
            break;
          }
      } else {
        if (Ot.length == 189) break;
        (Ot[a++] = l), (Ot[a++] = h), (Ot[a++] = c);
      }
    else if ((f = he[l]) == 2 || f == 1) {
      let d = f == n;
      c = d ? 0 : 1;
      for (let p = a - 3; p >= 0; p -= 3) {
        let m = Ot[p + 2];
        if (m & 2) break;
        if (d) Ot[p + 2] |= 2;
        else {
          if (m & 4) break;
          Ot[p + 2] |= 4;
        }
      }
    }
  for (let l = 0; l < t; l++)
    if (he[l] == 256) {
      let a = l + 1;
      for (; a < t && he[a] == 256; ) a++;
      let c = (l ? he[l - 1] : n) == 1,
        h = (a < t ? he[a] : n) == 1,
        u = c == h ? (c ? 1 : 2) : n;
      for (let f = l; f < a; f++) he[f] = u;
      l = a - 1;
    }
  let o = [];
  if (n == 1)
    for (let l = 0; l < t; ) {
      let a = l,
        c = he[l++] != 1;
      for (; l < t && c == (he[l] != 1); ) l++;
      if (c)
        for (let h = l; h > a; ) {
          let u = h,
            f = he[--h] != 2;
          for (; h > a && f == (he[h - 1] != 2); ) h--;
          o.push(new ji(h, u, f ? 2 : 1));
        }
      else o.push(new ji(a, l, 0));
    }
  else
    for (let l = 0; l < t; ) {
      let a = l,
        c = he[l++] == 2;
      for (; l < t && c == (he[l] == 2); ) l++;
      o.push(new ji(a, l, c ? 1 : 2));
    }
  return o;
}
function Lu(r) {
  return [new ji(0, r, 0)];
}
let _u = '';
function qm(r, e, t, n, s) {
  var o;
  let l = n.head - r.from,
    a = -1;
  if (l == 0) {
    if (!s || !r.length) return null;
    e[0].level != t && ((l = e[0].side(!1, t)), (a = 0));
  } else if (l == r.length) {
    if (s) return null;
    let d = e[e.length - 1];
    d.level != t && ((l = d.side(!0, t)), (a = e.length - 1));
  }
  a < 0 &&
    (a = ji.find(
      e,
      l,
      (o = n.bidiLevel) !== null && o !== void 0 ? o : -1,
      n.assoc,
    ));
  let c = e[a];
  l == c.side(s, t) && ((c = e[(a += s ? 1 : -1)]), (l = c.side(!s, t)));
  let h = s == (c.dir == t),
    u = Je(r.text, l, h);
  if (((_u = r.text.slice(Math.min(l, u), Math.max(l, u))), u != c.side(s, t)))
    return E.cursor(u + r.from, h ? -1 : 1, c.level);
  let f = a == (s ? e.length - 1 : 0) ? null : e[a + (s ? 1 : -1)];
  return !f && c.level != t
    ? E.cursor(s ? r.to : r.from, s ? -1 : 1, t)
    : f && f.level < c.level
    ? E.cursor(f.side(!s, t) + r.from, s ? 1 : -1, f.level)
    : E.cursor(u + r.from, s ? -1 : 1, c.level);
}
const ei = '\uFFFF';
class Xu {
  constructor(e, t) {
    (this.points = e),
      (this.text = ''),
      (this.lineSeparator = t.facet(J.lineSeparator));
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += ei;
  }
  readRange(e, t) {
    if (!e) return this;
    let n = e.parentNode;
    for (let s = e; ; ) {
      this.findPointBefore(n, s), this.readNode(s);
      let o = s.nextSibling;
      if (o == t) break;
      let l = de.get(s),
        a = de.get(o);
      (l && a
        ? l.breakAfter
        : (l ? l.breakAfter : Ya(s)) ||
          (Ya(o) && (s.nodeName != 'BR' || s.cmIgnore))) && this.lineBreak(),
        (s = o);
    }
    return this.findPointBefore(n, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let n of this.points)
      n.node == e && (n.pos = this.text.length + Math.min(n.offset, t.length));
    for (let n = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let o = -1,
        l = 1,
        a;
      if (
        (this.lineSeparator
          ? ((o = t.indexOf(this.lineSeparator, n)),
            (l = this.lineSeparator.length))
          : (a = s.exec(t)) && ((o = a.index), (l = a[0].length)),
        this.append(t.slice(n, o < 0 ? t.length : o)),
        o < 0)
      )
        break;
      if ((this.lineBreak(), l > 1))
        for (let c of this.points)
          c.node == e && c.pos > this.text.length && (c.pos -= l - 1);
      n = o + l;
    }
  }
  readNode(e) {
    if (e.cmIgnore) return;
    let t = de.get(e),
      n = t && t.overrideDOMText;
    if (n != null) {
      this.findPointInside(e, n.length);
      for (let s = n.iter(); !s.next().done; )
        s.lineBreak ? this.lineBreak() : this.append(s.value);
    } else
      e.nodeType == 3
        ? this.readTextNode(e)
        : e.nodeName == 'BR'
        ? e.nextSibling && this.lineBreak()
        : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let n of this.points)
      n.node == e && e.childNodes[n.offset] == t && (n.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let n of this.points)
      (e.nodeType == 3 ? n.node == e : e.contains(n.node)) &&
        (n.pos = this.text.length + Math.min(t, n.offset));
  }
}
function Ya(r) {
  return (
    r.nodeType == 1 &&
    /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(r.nodeName)
  );
}
class qa {
  constructor(e, t) {
    (this.node = e), (this.offset = t), (this.pos = -1);
  }
}
class Ga extends de {
  constructor(e) {
    super(),
      (this.view = e),
      (this.compositionDeco = q.none),
      (this.decorations = []),
      (this.pluginDecorationLength = 0),
      (this.minWidth = 0),
      (this.minWidthFrom = 0),
      (this.minWidthTo = 0),
      (this.impreciseAnchor = null),
      (this.impreciseHead = null),
      (this.forceSelection = !1),
      (this.lastUpdate = Date.now()),
      this.setDOM(e.contentDOM),
      (this.children = [new Ie()]),
      this.children[0].setParent(this),
      this.updateDeco(),
      this.updateInner([new Dt(0, 0, 0, e.state.doc.length)], 0);
  }
  get root() {
    return this.view.root;
  }
  get editorView() {
    return this.view;
  }
  get length() {
    return this.view.state.doc.length;
  }
  update(e) {
    let t = e.changedRanges;
    this.minWidth > 0 &&
      t.length &&
      (t.every(
        ({ fromA: l, toA: a }) => a < this.minWidthFrom || l > this.minWidthTo,
      )
        ? ((this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1)),
          (this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)))
        : (this.minWidth = this.minWidthFrom = this.minWidthTo = 0)),
      this.view.inputState.composing < 0
        ? (this.compositionDeco = q.none)
        : (e.transactions.length || this.dirty) &&
          (this.compositionDeco = Fm(this.view, e.changes)),
      (j.ie || j.chrome) &&
        !this.compositionDeco.size &&
        e &&
        e.state.doc.lines != e.startState.doc.lines &&
        (this.forceSelection = !0);
    let n = this.decorations,
      s = this.updateDeco(),
      o = eg(n, s, e.changes);
    return (
      (t = Dt.extendWithRanges(t, o)),
      this.dirty == 0 && t.length == 0
        ? !1
        : (this.updateInner(t, e.startState.doc.length),
          e.transactions.length && (this.lastUpdate = Date.now()),
          !0)
    );
  }
  updateInner(e, t) {
    (this.view.viewState.mustMeasureContent = !0), this.updateChildren(e, t);
    let { observer: n } = this.view;
    n.ignore(() => {
      (this.dom.style.height = this.view.viewState.contentHeight + 'px'),
        (this.dom.style.minWidth = this.minWidth ? this.minWidth + 'px' : '');
      let o =
        j.chrome || j.ios
          ? { node: n.selectionRange.focusNode, written: !1 }
          : void 0;
      this.sync(o),
        (this.dirty = 0),
        o &&
          (o.written || n.selectionRange.focusNode != o.node) &&
          (this.forceSelection = !0),
        (this.dom.style.height = '');
    });
    let s = [];
    if (
      this.view.viewport.from ||
      this.view.viewport.to < this.view.state.doc.length
    )
      for (let o of this.children)
        o instanceof vi && o.widget instanceof Fa && s.push(o.dom);
    n.updateGaps(s);
  }
  updateChildren(e, t) {
    let n = this.childCursor(t);
    for (let s = e.length - 1; ; s--) {
      let o = s >= 0 ? e[s] : null;
      if (!o) break;
      let { fromA: l, toA: a, fromB: c, toB: h } = o,
        { content: u, breakAtStart: f, openStart: d, openEnd: p } = bl.build(
          this.view.state.doc,
          c,
          h,
          this.decorations,
          this.pluginDecorationLength,
        ),
        { i: m, off: S } = n.findPos(a, 1),
        { i: T, off: k } = n.findPos(l, -1);
      pu(this, T, k, m, S, u, f, d, p);
    }
  }
  updateSelection(e = !1, t = !1) {
    if (
      (e && this.view.observer.readSelectionRange(),
      !(t || this.mayControlSelection()) ||
        (j.ios && this.view.inputState.rapidCompositionStart))
    )
      return;
    let n = this.forceSelection;
    this.forceSelection = !1;
    let s = this.view.state.selection.main,
      o = this.domAtPos(s.anchor),
      l = s.empty ? o : this.domAtPos(s.head);
    if (j.gecko && s.empty && Gm(o)) {
      let c = document.createTextNode('');
      this.view.observer.ignore(() =>
        o.node.insertBefore(c, o.node.childNodes[o.offset] || null),
      ),
        (o = l = new Ce(c, 0)),
        (n = !0);
    }
    let a = this.view.observer.selectionRange;
    (n ||
      !a.focusNode ||
      !Rr(o.node, o.offset, a.anchorNode, a.anchorOffset) ||
      !Rr(l.node, l.offset, a.focusNode, a.focusOffset)) &&
      (this.view.observer.ignore(() => {
        j.android &&
          j.chrome &&
          this.dom.contains(a.focusNode) &&
          tg(a.focusNode, this.dom) &&
          (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
        let c = Pr(this.root);
        if (s.empty) {
          if (j.gecko) {
            let h = Jm(o.node, o.offset);
            if (h && h != 3) {
              let u = Du(o.node, o.offset, h == 1 ? 1 : -1);
              u && (o = new Ce(u, h == 1 ? 0 : u.nodeValue.length));
            }
          }
          c.collapse(o.node, o.offset),
            s.bidiLevel != null &&
              a.cursorBidiLevel != null &&
              (a.cursorBidiLevel = s.bidiLevel);
        } else if (c.extend)
          c.collapse(o.node, o.offset), c.extend(l.node, l.offset);
        else {
          let h = document.createRange();
          s.anchor > s.head && ([o, l] = [l, o]),
            h.setEnd(l.node, l.offset),
            h.setStart(o.node, o.offset),
            c.removeAllRanges(),
            c.addRange(h);
        }
      }),
      this.view.observer.setSelectionRange(o, l)),
      (this.impreciseAnchor = o.precise
        ? null
        : new Ce(a.anchorNode, a.anchorOffset)),
      (this.impreciseHead = l.precise
        ? null
        : new Ce(a.focusNode, a.focusOffset));
  }
  enforceCursorAssoc() {
    if (this.compositionDeco.size) return;
    let e = this.view.state.selection.main,
      t = Pr(this.root);
    if (!e.empty || !e.assoc || !t.modify) return;
    let n = Ie.find(this, e.head);
    if (!n) return;
    let s = n.posAtStart;
    if (e.head == s || e.head == s + n.length) return;
    let o = this.coordsAt(e.head, -1),
      l = this.coordsAt(e.head, 1);
    if (!o || !l || o.bottom > l.top) return;
    let a = this.domAtPos(e.head + e.assoc);
    t.collapse(a.node, a.offset),
      t.modify('move', e.assoc < 0 ? 'forward' : 'backward', 'lineboundary');
  }
  mayControlSelection() {
    return this.view.state.facet(Wn)
      ? this.root.activeElement == this.dom
      : wo(this.dom, this.view.observer.selectionRange);
  }
  nearest(e) {
    for (let t = e; t; ) {
      let n = de.get(t);
      if (n && n.rootView == this) return n;
      t = t.parentNode;
    }
    return null;
  }
  posFromDOM(e, t) {
    let n = this.nearest(e);
    if (!n)
      throw new RangeError(
        'Trying to find position for a DOM position outside of the document',
      );
    return n.localPosFromDOM(e, t) + n.posAtStart;
  }
  domAtPos(e) {
    let { i: t, off: n } = this.childCursor().findPos(e, -1);
    for (; t < this.children.length - 1; ) {
      let s = this.children[t];
      if (n < s.length || s instanceof Ie) break;
      t++, (n = 0);
    }
    return this.children[t].domAtPos(n);
  }
  coordsAt(e, t) {
    for (let n = this.length, s = this.children.length - 1; ; s--) {
      let o = this.children[s],
        l = n - o.breakAfter - o.length;
      if (
        e > l ||
        (e == l &&
          o.type != Oe.WidgetBefore &&
          o.type != Oe.WidgetAfter &&
          (!s ||
            t == 2 ||
            this.children[s - 1].breakAfter ||
            (this.children[s - 1].type == Oe.WidgetBefore && t > -2)))
      )
        return o.coordsAt(e - l, t);
      n = l;
    }
  }
  measureVisibleLineHeights() {
    let e = [],
      { from: t, to: n } = this.view.viewState.viewport,
      s = this.view.contentDOM.clientWidth,
      o = s > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
      l = -1;
    for (let a = 0, c = 0; c < this.children.length; c++) {
      let h = this.children[c],
        u = a + h.length;
      if (u > n) break;
      if (a >= t) {
        let f = h.dom.getBoundingClientRect();
        if ((e.push(f.height), o)) {
          let d = h.dom.lastChild,
            p = d ? $n(d) : [];
          if (p.length) {
            let m = p[p.length - 1],
              S =
                this.view.textDirection == ne.LTR
                  ? m.right - f.left
                  : f.right - m.left;
            S > l &&
              ((l = S),
              (this.minWidth = s),
              (this.minWidthFrom = a),
              (this.minWidthTo = u));
          }
        }
      }
      a = u + h.breakAfter;
    }
    return e;
  }
  measureTextSize() {
    for (let s of this.children)
      if (s instanceof Ie) {
        let o = s.measureTextSize();
        if (o) return o;
      }
    let e = document.createElement('div'),
      t,
      n;
    return (
      (e.className = 'cm-line'),
      (e.textContent = 'abc def ghi jkl mno pqr stu'),
      this.view.observer.ignore(() => {
        this.dom.appendChild(e);
        let s = $n(e.firstChild)[0];
        (t = e.getBoundingClientRect().height),
          (n = s ? s.width / 27 : 7),
          e.remove();
      }),
      { lineHeight: t, charWidth: n }
    );
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new du(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [],
      t = this.view.viewState;
    for (let n = 0, s = 0; ; s++) {
      let o = s == t.viewports.length ? null : t.viewports[s],
        l = o ? o.from - 1 : this.length;
      if (l > n) {
        let a = t.lineBlockAt(l).bottom - t.lineBlockAt(n).top;
        e.push(
          q
            .replace({
              widget: new Fa(a),
              block: !0,
              inclusive: !0,
              isBlockGap: !0,
            })
            .range(n, l),
        );
      }
      if (!o) break;
      n = o.to + 1;
    }
    return q.set(e);
  }
  updateDeco() {
    let e = this.view.pluginField(Me.decorations);
    return (
      (this.pluginDecorationLength = e.length),
      (this.decorations = [
        ...e,
        ...this.view.state.facet(gi),
        this.compositionDeco,
        this.computeBlockGapDeco(),
        this.view.viewState.lineGapDeco,
      ])
    );
  }
  scrollIntoView(e) {
    let { range: t } = e,
      n = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1),
      s;
    if (!n) return;
    !t.empty &&
      (s = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) &&
      (n = {
        left: Math.min(n.left, s.left),
        top: Math.min(n.top, s.top),
        right: Math.max(n.right, s.right),
        bottom: Math.max(n.bottom, s.bottom),
      });
    let o = 0,
      l = 0,
      a = 0,
      c = 0;
    for (let u of this.view.pluginField(Me.scrollMargins))
      if (u) {
        let { left: f, right: d, top: p, bottom: m } = u;
        f != null && (o = Math.max(o, f)),
          d != null && (l = Math.max(l, d)),
          p != null && (a = Math.max(a, p)),
          m != null && (c = Math.max(c, m));
      }
    let h = {
      left: n.left - o,
      top: n.top - a,
      right: n.right + l,
      bottom: n.bottom + c,
    };
    Em(
      this.view.scrollDOM,
      h,
      t.head < t.anchor ? -1 : 1,
      e.x,
      e.y,
      e.xMargin,
      e.yMargin,
      this.view.textDirection == ne.LTR,
    );
  }
}
function Gm(r) {
  return (
    r.node.nodeType == 1 &&
    r.node.firstChild &&
    (r.offset == 0 ||
      r.node.childNodes[r.offset - 1].contentEditable == 'false') &&
    (r.offset == r.node.childNodes.length ||
      r.node.childNodes[r.offset].contentEditable == 'false')
  );
}
class Fa extends Ti {
  constructor(e) {
    super(), (this.height = e);
  }
  toDOM() {
    let e = document.createElement('div');
    return this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return (e.style.height = this.height + 'px'), !0;
  }
  get estimatedHeight() {
    return this.height;
  }
}
function Zu(r) {
  let e = r.observer.selectionRange,
    t = e.focusNode && Du(e.focusNode, e.focusOffset, 0);
  if (!t) return null;
  let n = r.docView.nearest(t);
  if (!n) return null;
  if (n instanceof Ie) {
    let s = t;
    for (; s.parentNode != n.dom; ) s = s.parentNode;
    let o = s.previousSibling;
    for (; o && !de.get(o); ) o = o.previousSibling;
    let l = o ? de.get(o).posAtEnd : n.posAtStart;
    return { from: l, to: l, node: s, text: t };
  } else {
    for (;;) {
      let { parent: o } = n;
      if (!o) return null;
      if (o instanceof Ie) break;
      n = o;
    }
    let s = n.posAtStart;
    return { from: s, to: s + n.length, node: n.dom, text: t };
  }
}
function Fm(r, e) {
  let t = Zu(r);
  if (!t) return q.none;
  let { from: n, to: s, node: o, text: l } = t,
    a = e.mapPos(n, 1),
    c = Math.max(a, e.mapPos(s, -1)),
    { state: h } = r,
    u =
      o.nodeType == 3
        ? o.nodeValue
        : new Xu([], h).readRange(o.firstChild, null).text;
  if (c - a < u.length)
    if (h.doc.sliceString(a, Math.min(h.doc.length, a + u.length), ei) == u)
      c = a + u.length;
    else if (h.doc.sliceString(Math.max(0, c - u.length), c, ei) == u)
      a = c - u.length;
    else return q.none;
  else if (h.doc.sliceString(a, c, ei) != u) return q.none;
  let f = de.get(o);
  return (
    f instanceof bu ? (f = f.widget.topView) : f && (f.parent = null),
    q.set(q.replace({ widget: new Hm(o, l, f) }).range(a, c))
  );
}
class Hm extends Ti {
  constructor(e, t, n) {
    super(), (this.top = e), (this.text = t), (this.topView = n);
  }
  eq(e) {
    return this.top == e.top && this.text == e.text;
  }
  toDOM() {
    return this.top;
  }
  ignoreEvent() {
    return !1;
  }
  get customView() {
    return bu;
  }
}
function Du(r, e, t) {
  for (;;) {
    if (r.nodeType == 3) return r;
    if (r.nodeType == 1 && e > 0 && t <= 0)
      (r = r.childNodes[e - 1]), (e = Cr(r));
    else if (r.nodeType == 1 && e < r.childNodes.length && t >= 0)
      (r = r.childNodes[e]), (e = 0);
    else return null;
  }
}
function Jm(r, e) {
  return r.nodeType != 1
    ? 0
    : (e && r.childNodes[e - 1].contentEditable == 'false' ? 1 : 0) |
        (e < r.childNodes.length && r.childNodes[e].contentEditable == 'false'
          ? 2
          : 0);
}
class Km {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    _o(e, t, this.changes);
  }
  comparePoint(e, t) {
    _o(e, t, this.changes);
  }
}
function eg(r, e, t) {
  let n = new Km();
  return le.compare(r, e, t, n), n.changes;
}
function tg(r, e) {
  for (let t = r; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == 'false') return !0;
  return !1;
}
function ig(r, e, t = 1) {
  let n = r.charCategorizer(e),
    s = r.doc.lineAt(e),
    o = e - s.from;
  if (s.length == 0) return E.cursor(e);
  o == 0 ? (t = 1) : o == s.length && (t = -1);
  let l = o,
    a = o;
  t < 0 ? (l = Je(s.text, o, !1)) : (a = Je(s.text, o));
  let c = n(s.text.slice(l, a));
  for (; l > 0; ) {
    let h = Je(s.text, l, !1);
    if (n(s.text.slice(h, l)) != c) break;
    l = h;
  }
  for (; a < s.length; ) {
    let h = Je(s.text, a);
    if (n(s.text.slice(a, h)) != c) break;
    a = h;
  }
  return E.range(l + s.from, a + s.from);
}
function ng(r, e) {
  return e.left > r ? e.left - r : Math.max(0, r - e.right);
}
function rg(r, e) {
  return e.top > r ? e.top - r : Math.max(0, r - e.bottom);
}
function _s(r, e) {
  return r.top < e.bottom - 1 && r.bottom > e.top + 1;
}
function Ha(r, e) {
  return e < r.top
    ? { top: e, left: r.left, right: r.right, bottom: r.bottom }
    : r;
}
function Ja(r, e) {
  return e > r.bottom
    ? { top: r.top, left: r.left, right: r.right, bottom: e }
    : r;
}
function Mo(r, e, t) {
  let n, s, o, l, a, c, h, u;
  for (let p = r.firstChild; p; p = p.nextSibling) {
    let m = $n(p);
    for (let S = 0; S < m.length; S++) {
      let T = m[S];
      s && _s(s, T) && (T = Ha(Ja(T, s.bottom), s.top));
      let k = ng(e, T),
        b = rg(t, T);
      if (k == 0 && b == 0) return p.nodeType == 3 ? Ka(p, e, t) : Mo(p, e, t);
      (!n || l > b || (l == b && o > k)) &&
        ((n = p), (s = T), (o = k), (l = b)),
        k == 0
          ? t > T.bottom && (!h || h.bottom < T.bottom)
            ? ((a = p), (h = T))
            : t < T.top && (!u || u.top > T.top) && ((c = p), (u = T))
          : h && _s(h, T)
          ? (h = Ja(h, T.bottom))
          : u && _s(u, T) && (u = Ha(u, T.top));
    }
  }
  if (
    (h && h.bottom >= t
      ? ((n = a), (s = h))
      : u && u.top <= t && ((n = c), (s = u)),
    !n)
  )
    return { node: r, offset: 0 };
  let f = Math.max(s.left, Math.min(s.right, e));
  if (n.nodeType == 3) return Ka(n, f, t);
  if (!o && n.contentEditable == 'true') return Mo(n, f, t);
  let d =
    Array.prototype.indexOf.call(r.childNodes, n) +
    (e >= (s.left + s.right) / 2 ? 1 : 0);
  return { node: r, offset: d };
}
function Ka(r, e, t) {
  let n = r.nodeValue.length,
    s = -1,
    o = 1e9,
    l = 0;
  for (let a = 0; a < n; a++) {
    let c = kn(r, a, a + 1).getClientRects();
    for (let h = 0; h < c.length; h++) {
      let u = c[h];
      if (u.top == u.bottom) continue;
      l || (l = e - u.left);
      let f = (u.top > t ? u.top - t : t - u.bottom) - 1;
      if (u.left - 1 <= e && u.right + 1 >= e && f < o) {
        let d = e >= (u.left + u.right) / 2,
          p = d;
        if (
          ((j.chrome || j.gecko) &&
            kn(r, a).getBoundingClientRect().left == u.right &&
            (p = !d),
          f <= 0)
        )
          return { node: r, offset: a + (p ? 1 : 0) };
        (s = a + (p ? 1 : 0)), (o = f);
      }
    }
  }
  return { node: r, offset: s > -1 ? s : l > 0 ? r.nodeValue.length : 0 };
}
function Iu(r, { x: e, y: t }, n, s = -1) {
  var o;
  let l = r.contentDOM.getBoundingClientRect(),
    a = l.top + r.viewState.paddingTop,
    c,
    { docHeight: h } = r.viewState,
    u = t - a;
  if (u < 0) return 0;
  if (u > h) return r.state.doc.length;
  for (
    let k = r.defaultLineHeight / 2, b = !1;
    (c = r.elementAtHeight(u)), c.type != Oe.Text;

  )
    for (; (u = s > 0 ? c.bottom + k : c.top - k), !(u >= 0 && u <= h); ) {
      if (b) return n ? null : 0;
      (b = !0), (s = -s);
    }
  t = a + u;
  let f = c.from;
  if (f < r.viewport.from)
    return r.viewport.from == 0 ? 0 : n ? null : ec(r, l, c, e, t);
  if (f > r.viewport.to)
    return r.viewport.to == r.state.doc.length
      ? r.state.doc.length
      : n
      ? null
      : ec(r, l, c, e, t);
  let d = r.dom.ownerDocument,
    p = r.root.elementFromPoint ? r.root : d,
    m = p.elementFromPoint(e, t);
  m && !r.contentDOM.contains(m) && (m = null),
    m ||
      ((e = Math.max(l.left + 1, Math.min(l.right - 1, e))),
      (m = p.elementFromPoint(e, t)),
      m && !r.contentDOM.contains(m) && (m = null));
  let S,
    T = -1;
  if (
    m &&
    ((o = r.docView.nearest(m)) === null || o === void 0
      ? void 0
      : o.isEditable) != !1
  ) {
    if (d.caretPositionFromPoint) {
      let k = d.caretPositionFromPoint(e, t);
      k && ({ offsetNode: S, offset: T } = k);
    } else if (d.caretRangeFromPoint) {
      let k = d.caretRangeFromPoint(e, t);
      k &&
        (({ startContainer: S, startOffset: T } = k),
        j.safari && sg(S, T, e) && (S = void 0));
    }
  }
  if (!S || !r.docView.dom.contains(S)) {
    let k = Ie.find(r.docView, f);
    if (!k) return u > c.top + c.height / 2 ? c.to : c.from;
    ({ node: S, offset: T } = Mo(k.dom, e, t));
  }
  return r.docView.posFromDOM(S, T);
}
function ec(r, e, t, n, s) {
  let o = Math.round((n - e.left) * r.defaultCharacterWidth);
  if (r.lineWrapping && t.height > r.defaultLineHeight * 1.5) {
    let a = Math.floor((s - t.top) / r.defaultLineHeight);
    o += a * r.viewState.heightOracle.lineLength;
  }
  let l = r.state.sliceDoc(t.from, t.to);
  return t.from + cm(l, o, r.state.tabSize);
}
function sg(r, e, t) {
  let n;
  if (r.nodeType != 3 || e != (n = r.nodeValue.length)) return !1;
  for (let s = r.nextSibling; s; s = s.nextSibling)
    if (s.nodeType != 1 || s.nodeName != 'BR') return !1;
  return kn(r, n - 1, n).getBoundingClientRect().left > t;
}
function og(r, e, t, n) {
  let s = r.state.doc.lineAt(e.head),
    o =
      !n || !r.lineWrapping
        ? null
        : r.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head);
  if (o) {
    let c = r.dom.getBoundingClientRect(),
      h = r.posAtCoords({
        x: t == (r.textDirection == ne.LTR) ? c.right - 1 : c.left + 1,
        y: (o.top + o.bottom) / 2,
      });
    if (h != null) return E.cursor(h, t ? -1 : 1);
  }
  let l = Ie.find(r.docView, e.head),
    a = l ? (t ? l.posAtEnd : l.posAtStart) : t ? s.to : s.from;
  return E.cursor(a, t ? -1 : 1);
}
function tc(r, e, t, n) {
  let s = r.state.doc.lineAt(e.head),
    o = r.bidiSpans(s);
  for (let l = e, a = null; ; ) {
    let c = qm(s, o, r.textDirection, l, t),
      h = _u;
    if (!c) {
      if (s.number == (t ? r.state.doc.lines : 1)) return l;
      (h = `
`),
        (s = r.state.doc.line(s.number + (t ? 1 : -1))),
        (o = r.bidiSpans(s)),
        (c = E.cursor(t ? s.from : s.to));
    }
    if (a) {
      if (!a(h)) return l;
    } else {
      if (!n) return c;
      a = n(h);
    }
    l = c;
  }
}
function lg(r, e, t) {
  let n = r.state.charCategorizer(e),
    s = n(t);
  return (o) => {
    let l = n(o);
    return s == ct.Space && (s = l), s == l;
  };
}
function ag(r, e, t, n) {
  let s = e.head,
    o = t ? 1 : -1;
  if (s == (t ? r.state.doc.length : 0)) return E.cursor(s, e.assoc);
  let l = e.goalColumn,
    a,
    c = r.contentDOM.getBoundingClientRect(),
    h = r.coordsAtPos(s),
    u = r.documentTop;
  if (h) l == null && (l = h.left - c.left), (a = o < 0 ? h.top : h.bottom);
  else {
    let p = r.viewState.lineBlockAt(s - u);
    l == null &&
      (l = Math.min(c.right - c.left, r.defaultCharacterWidth * (s - p.from))),
      (a = (o < 0 ? p.top : p.bottom) + u);
  }
  let f = c.left + l,
    d = n ?? r.defaultLineHeight >> 1;
  for (let p = 0; ; p += 10) {
    let m = a + (d + p) * o,
      S = Iu(r, { x: f, y: m }, !1, o);
    if (m < c.top || m > c.bottom || (o < 0 ? S < s : S > s))
      return E.cursor(S, e.assoc, void 0, l);
  }
}
function Xs(r, e, t) {
  let n = r.pluginField(Me.atomicRanges);
  for (;;) {
    let s = !1;
    for (let o of n)
      o.between(t.from - 1, t.from + 1, (l, a, c) => {
        t.from > l &&
          t.from < a &&
          ((t = e.from > t.from ? E.cursor(l, 1) : E.cursor(a, -1)), (s = !0));
      });
    if (!s) return t;
  }
}
class cg {
  constructor(e) {
    (this.lastKeyCode = 0),
      (this.lastKeyTime = 0),
      (this.pendingIOSKey = void 0),
      (this.lastSelectionOrigin = null),
      (this.lastSelectionTime = 0),
      (this.lastEscPress = 0),
      (this.lastContextMenu = 0),
      (this.scrollHandlers = []),
      (this.registeredEvents = []),
      (this.customHandlers = []),
      (this.composing = -1),
      (this.compositionFirstChange = null),
      (this.compositionEndedAt = 0),
      (this.rapidCompositionStart = !1),
      (this.mouseSelection = null);
    for (let t in we) {
      let n = we[t];
      e.contentDOM.addEventListener(t, (s) => {
        !ic(e, s) ||
          this.ignoreDuringComposition(s) ||
          (t == 'keydown' && this.keydown(e, s)) ||
          (this.mustFlushObserver(s) && e.observer.forceFlush(),
          this.runCustomHandlers(t, e, s) ? s.preventDefault() : n(e, s));
      }),
        this.registeredEvents.push(t);
    }
    (this.notifiedFocused = e.hasFocus),
      this.ensureHandlers(e),
      j.safari && e.contentDOM.addEventListener('input', () => null);
  }
  setSelectionOrigin(e) {
    (this.lastSelectionOrigin = e), (this.lastSelectionTime = Date.now());
  }
  ensureHandlers(e) {
    let t = (this.customHandlers = e.pluginField(Cu));
    for (let n of t)
      for (let s in n.handlers)
        this.registeredEvents.indexOf(s) < 0 &&
          s != 'scroll' &&
          (this.registeredEvents.push(s),
          e.contentDOM.addEventListener(s, (o) => {
            !ic(e, o) ||
              (this.runCustomHandlers(s, e, o) && o.preventDefault());
          }));
  }
  runCustomHandlers(e, t, n) {
    for (let s of this.customHandlers) {
      let o = s.handlers[e];
      if (o)
        try {
          if (o.call(s.plugin, n, t) || n.defaultPrevented) return !0;
        } catch (l) {
          ii(t.state, l);
        }
    }
    return !1;
  }
  runScrollHandlers(e, t) {
    for (let n of this.customHandlers) {
      let s = n.handlers.scroll;
      if (s)
        try {
          s.call(n.plugin, t, e);
        } catch (o) {
          ii(e.state, o);
        }
    }
  }
  keydown(e, t) {
    if (
      ((this.lastKeyCode = t.keyCode),
      (this.lastKeyTime = Date.now()),
      t.keyCode == 9 && Date.now() < this.lastEscPress + 2e3)
    )
      return !0;
    if (
      j.android &&
      j.chrome &&
      !t.synthetic &&
      (t.keyCode == 13 || t.keyCode == 8)
    )
      return e.observer.delayAndroidKey(t.key, t.keyCode), !0;
    let n;
    return j.ios &&
      (n = Mu.find((s) => s.keyCode == t.keyCode)) &&
      !(t.ctrlKey || t.altKey || t.metaKey) &&
      !t.synthetic
      ? ((this.pendingIOSKey = n),
        setTimeout(() => this.flushIOSKey(e), 250),
        !0)
      : !1;
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return t
      ? ((this.pendingIOSKey = void 0), Qn(e.contentDOM, t.key, t.keyCode))
      : !1;
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type)
      ? this.composing > 0
        ? !0
        : j.safari && Date.now() - this.compositionEndedAt < 500
        ? ((this.compositionEndedAt = 0), !0)
        : !1
      : !1;
  }
  mustFlushObserver(e) {
    return (
      (e.type == 'keydown' && e.keyCode != 229) ||
      (e.type == 'compositionend' && !j.ios)
    );
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(),
      (this.mouseSelection = e);
  }
  update(e) {
    this.mouseSelection && this.mouseSelection.update(e),
      e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
const Mu = [
    { key: 'Backspace', keyCode: 8, inputType: 'deleteContentBackward' },
    { key: 'Enter', keyCode: 13, inputType: 'insertParagraph' },
    { key: 'Delete', keyCode: 46, inputType: 'deleteContentForward' },
  ],
  ju = [16, 17, 18, 20, 91, 92, 224, 225];
class hg {
  constructor(e, t, n, s) {
    (this.view = e),
      (this.style = n),
      (this.mustSelect = s),
      (this.lastEvent = t);
    let o = e.contentDOM.ownerDocument;
    o.addEventListener('mousemove', (this.move = this.move.bind(this))),
      o.addEventListener('mouseup', (this.up = this.up.bind(this))),
      (this.extend = t.shiftKey),
      (this.multiple = e.state.facet(J.allowMultipleSelections) && ug(e, t)),
      (this.dragMove = fg(e, t)),
      (this.dragging = dg(e, t) && yl(t) == 1 ? null : !1),
      this.dragging === !1 && (t.preventDefault(), this.select(t));
  }
  move(e) {
    if (e.buttons == 0) return this.destroy();
    this.dragging === !1 && this.select((this.lastEvent = e));
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent),
      this.dragging || e.preventDefault(),
      this.destroy();
  }
  destroy() {
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener('mousemove', this.move),
      e.removeEventListener('mouseup', this.up),
      (this.view.inputState.mouseSelection = null);
  }
  select(e) {
    let t = this.style.get(e, this.extend, this.multiple);
    (this.mustSelect ||
      !t.eq(this.view.state.selection) ||
      t.main.assoc != this.view.state.selection.main.assoc) &&
      this.view.dispatch({
        selection: t,
        userEvent: 'select.pointer',
        scrollIntoView: !0,
      }),
      (this.mustSelect = !1);
  }
  update(e) {
    e.docChanged &&
      this.dragging &&
      (this.dragging = this.dragging.map(e.changes)),
      this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function ug(r, e) {
  let t = r.state.facet($u);
  return t.length ? t[0](e) : j.mac ? e.metaKey : e.ctrlKey;
}
function fg(r, e) {
  let t = r.state.facet(ku);
  return t.length ? t[0](e) : j.mac ? !e.altKey : !e.ctrlKey;
}
function dg(r, e) {
  let { main: t } = r.state.selection;
  if (t.empty) return !1;
  let n = Pr(r.root);
  if (n.rangeCount == 0) return !0;
  let s = n.getRangeAt(0).getClientRects();
  for (let o = 0; o < s.length; o++) {
    let l = s[o];
    if (
      l.left <= e.clientX &&
      l.right >= e.clientX &&
      l.top <= e.clientY &&
      l.bottom >= e.clientY
    )
      return !0;
  }
  return !1;
}
function ic(r, e) {
  if (!e.bubbles) return !0;
  if (e.defaultPrevented) return !1;
  for (let t = e.target, n; t != r.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || ((n = de.get(t)) && n.ignoreEvent(e)))
      return !1;
  return !0;
}
const we = Object.create(null),
  zu = (j.ie && j.ie_version < 15) || (j.ios && j.webkit_version < 604);
function pg(r) {
  let e = r.dom.parentNode;
  if (!e) return;
  let t = e.appendChild(document.createElement('textarea'));
  (t.style.cssText = 'position: fixed; left: -10000px; top: 10px'),
    t.focus(),
    setTimeout(() => {
      r.focus(), t.remove(), Nu(r, t.value);
    }, 50);
}
function Nu(r, e) {
  let { state: t } = r,
    n,
    s = 1,
    o = t.toText(e),
    l = o.lines == t.selection.ranges.length;
  if (
    jo != null &&
    t.selection.ranges.every((c) => c.empty) &&
    jo == o.toString()
  ) {
    let c = -1;
    n = t.changeByRange((h) => {
      let u = t.doc.lineAt(h.from);
      if (u.from == c) return { range: h };
      c = u.from;
      let f = t.toText((l ? o.line(s++).text : e) + t.lineBreak);
      return {
        changes: { from: u.from, insert: f },
        range: E.cursor(h.from + f.length),
      };
    });
  } else
    l
      ? (n = t.changeByRange((c) => {
          let h = o.line(s++);
          return {
            changes: { from: c.from, to: c.to, insert: h.text },
            range: E.cursor(c.from + h.length),
          };
        }))
      : (n = t.replaceSelection(o));
  r.dispatch(n, { userEvent: 'input.paste', scrollIntoView: !0 });
}
we.keydown = (r, e) => {
  r.inputState.setSelectionOrigin('select'),
    e.keyCode == 27
      ? (r.inputState.lastEscPress = Date.now())
      : ju.indexOf(e.keyCode) < 0 && (r.inputState.lastEscPress = 0);
};
let Bu = 0;
we.touchstart = (r, e) => {
  (Bu = Date.now()), r.inputState.setSelectionOrigin('select.pointer');
};
we.touchmove = (r) => {
  r.inputState.setSelectionOrigin('select.pointer');
};
we.mousedown = (r, e) => {
  if ((r.observer.flush(), Bu > Date.now() - 2e3 && yl(e) == 1)) return;
  let t = null;
  for (let n of r.state.facet(wu)) if (((t = n(r, e)), t)) break;
  if ((!t && e.button == 0 && (t = gg(r, e)), t)) {
    let n = r.root.activeElement != r.contentDOM;
    n && r.observer.ignore(() => uu(r.contentDOM)),
      r.inputState.startMouseSelection(new hg(r, e, t, n));
  }
};
function nc(r, e, t, n) {
  if (n == 1) return E.cursor(e, t);
  if (n == 2) return ig(r.state, e, t);
  {
    let s = Ie.find(r.docView, e),
      o = r.state.doc.lineAt(s ? s.posAtEnd : e),
      l = s ? s.posAtStart : o.from,
      a = s ? s.posAtEnd : o.to;
    return a < r.state.doc.length && a == o.to && a++, E.range(l, a);
  }
}
let Uu = (r, e) => r >= e.top && r <= e.bottom,
  rc = (r, e, t) => Uu(e, t) && r >= t.left && r <= t.right;
function Og(r, e, t, n) {
  let s = Ie.find(r.docView, e);
  if (!s) return 1;
  let o = e - s.posAtStart;
  if (o == 0) return 1;
  if (o == s.length) return -1;
  let l = s.coordsAt(o, -1);
  if (l && rc(t, n, l)) return -1;
  let a = s.coordsAt(o, 1);
  return a && rc(t, n, a) ? 1 : l && Uu(n, l) ? -1 : 1;
}
function sc(r, e) {
  let t = r.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: t, bias: Og(r, t, e.clientX, e.clientY) };
}
const mg = j.ie && j.ie_version <= 11;
let oc = null,
  lc = 0,
  ac = 0;
function yl(r) {
  if (!mg) return r.detail;
  let e = oc,
    t = ac;
  return (
    (oc = r),
    (ac = Date.now()),
    (lc =
      !e ||
      (t > Date.now() - 400 &&
        Math.abs(e.clientX - r.clientX) < 2 &&
        Math.abs(e.clientY - r.clientY) < 2)
        ? (lc + 1) % 3
        : 1)
  );
}
function gg(r, e) {
  let t = sc(r, e),
    n = yl(e),
    s = r.state.selection,
    o = t,
    l = e;
  return {
    update(a) {
      a.docChanged &&
        (t && (t.pos = a.changes.mapPos(t.pos)),
        (s = s.map(a.changes)),
        (l = null));
    },
    get(a, c, h) {
      let u;
      if (
        (l && a.clientX == l.clientX && a.clientY == l.clientY
          ? (u = o)
          : ((u = o = sc(r, a)), (l = a)),
        !u || !t)
      )
        return s;
      let f = nc(r, u.pos, u.bias, n);
      if (t.pos != u.pos && !c) {
        let d = nc(r, t.pos, t.bias, n),
          p = Math.min(d.from, f.from),
          m = Math.max(d.to, f.to);
        f = p < f.from ? E.range(p, m) : E.range(m, p);
      }
      return c
        ? s.replaceRange(s.main.extend(f.from, f.to))
        : h
        ? s.addRange(f)
        : E.create([f]);
    },
  };
}
we.dragstart = (r, e) => {
  let {
      selection: { main: t },
    } = r.state,
    { mouseSelection: n } = r.inputState;
  n && (n.dragging = t),
    e.dataTransfer &&
      (e.dataTransfer.setData('Text', r.state.sliceDoc(t.from, t.to)),
      (e.dataTransfer.effectAllowed = 'copyMove'));
};
function cc(r, e, t, n) {
  if (!t) return;
  let s = r.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  e.preventDefault();
  let { mouseSelection: o } = r.inputState,
    l =
      n && o && o.dragging && o.dragMove
        ? { from: o.dragging.from, to: o.dragging.to }
        : null,
    a = { from: s, insert: t },
    c = r.state.changes(l ? [l, a] : a);
  r.focus(),
    r.dispatch({
      changes: c,
      selection: { anchor: c.mapPos(s, -1), head: c.mapPos(s, 1) },
      userEvent: l ? 'move.drop' : 'input.drop',
    });
}
we.drop = (r, e) => {
  if (!e.dataTransfer) return;
  if (r.state.readOnly) return e.preventDefault();
  let t = e.dataTransfer.files;
  if (t && t.length) {
    e.preventDefault();
    let n = Array(t.length),
      s = 0,
      o = () => {
        ++s == t.length &&
          cc(r, e, n.filter((l) => l != null).join(r.state.lineBreak), !1);
      };
    for (let l = 0; l < t.length; l++) {
      let a = new FileReader();
      (a.onerror = o),
        (a.onload = () => {
          /[\x00-\x08\x0e-\x1f]{2}/.test(a.result) || (n[l] = a.result), o();
        }),
        a.readAsText(t[l]);
    }
  } else cc(r, e, e.dataTransfer.getData('Text'), !0);
};
we.paste = (r, e) => {
  if (r.state.readOnly) return e.preventDefault();
  r.observer.flush();
  let t = zu ? null : e.clipboardData;
  t ? (Nu(r, t.getData('text/plain')), e.preventDefault()) : pg(r);
};
function bg(r, e) {
  let t = r.dom.parentNode;
  if (!t) return;
  let n = t.appendChild(document.createElement('textarea'));
  (n.style.cssText = 'position: fixed; left: -10000px; top: 10px'),
    (n.value = e),
    n.focus(),
    (n.selectionEnd = e.length),
    (n.selectionStart = 0),
    setTimeout(() => {
      n.remove(), r.focus();
    }, 50);
}
function yg(r) {
  let e = [],
    t = [],
    n = !1;
  for (let s of r.selection.ranges)
    s.empty || (e.push(r.sliceDoc(s.from, s.to)), t.push(s));
  if (!e.length) {
    let s = -1;
    for (let { from: o } of r.selection.ranges) {
      let l = r.doc.lineAt(o);
      l.number > s &&
        (e.push(l.text),
        t.push({ from: l.from, to: Math.min(r.doc.length, l.to + 1) })),
        (s = l.number);
    }
    n = !0;
  }
  return { text: e.join(r.lineBreak), ranges: t, linewise: n };
}
let jo = null;
we.copy = we.cut = (r, e) => {
  let { text: t, ranges: n, linewise: s } = yg(r.state);
  if (!t && !s) return;
  jo = s ? t : null;
  let o = zu ? null : e.clipboardData;
  o
    ? (e.preventDefault(), o.clearData(), o.setData('text/plain', t))
    : bg(r, t),
    e.type == 'cut' &&
      !r.state.readOnly &&
      r.dispatch({ changes: n, scrollIntoView: !0, userEvent: 'delete.cut' });
};
we.focus = we.blur = (r) => {
  setTimeout(() => {
    r.hasFocus != r.inputState.notifiedFocused && r.update([]);
  }, 10);
};
function Vu(r, e) {
  if (r.docView.compositionDeco.size) {
    r.inputState.rapidCompositionStart = e;
    try {
      r.update([]);
    } finally {
      r.inputState.rapidCompositionStart = !1;
    }
  }
}
we.compositionstart = we.compositionupdate = (r) => {
  r.inputState.compositionFirstChange == null &&
    (r.inputState.compositionFirstChange = !0),
    r.inputState.composing < 0 &&
      ((r.inputState.composing = 0),
      r.docView.compositionDeco.size && (r.observer.flush(), Vu(r, !0)));
};
we.compositionend = (r) => {
  (r.inputState.composing = -1),
    (r.inputState.compositionEndedAt = Date.now()),
    (r.inputState.compositionFirstChange = null),
    setTimeout(() => {
      r.inputState.composing < 0 && Vu(r, !1);
    }, 50);
};
we.contextmenu = (r) => {
  r.inputState.lastContextMenu = Date.now();
};
we.beforeinput = (r, e) => {
  var t;
  let n;
  if (
    j.chrome &&
    j.android &&
    (n = Mu.find((s) => s.inputType == e.inputType)) &&
    (r.observer.delayAndroidKey(n.key, n.keyCode),
    n.key == 'Backspace' || n.key == 'Delete')
  ) {
    let s =
      ((t = window.visualViewport) === null || t === void 0
        ? void 0
        : t.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0
        ? void 0
        : o.height) || 0) >
        s + 10 &&
        r.hasFocus &&
        (r.contentDOM.blur(), r.focus());
    }, 100);
  }
};
const hc = ['pre-wrap', 'normal', 'pre-line', 'break-spaces'];
class Qg {
  constructor() {
    (this.doc = K.empty),
      (this.lineWrapping = !1),
      (this.direction = ne.LTR),
      (this.heightSamples = {}),
      (this.lineHeight = 14),
      (this.charWidth = 7),
      (this.lineLength = 30),
      (this.heightChanged = !1);
  }
  heightForGap(e, t) {
    let n = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return (
      this.lineWrapping &&
        (n += Math.ceil((t - e - n * this.lineLength * 0.5) / this.lineLength)),
      this.lineHeight * n
    );
  }
  heightForLine(e) {
    return this.lineWrapping
      ? (1 +
          Math.max(
            0,
            Math.ceil((e - this.lineLength) / (this.lineLength - 5)),
          )) *
          this.lineHeight
      : this.lineHeight;
  }
  setDoc(e) {
    return (this.doc = e), this;
  }
  mustRefreshForStyle(e, t) {
    return hc.indexOf(e) > -1 != this.lineWrapping || this.direction != t;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let n = 0; n < e.length; n++) {
      let s = e[n];
      s < 0
        ? n++
        : this.heightSamples[Math.floor(s * 10)] ||
          ((t = !0), (this.heightSamples[Math.floor(s * 10)] = !0));
    }
    return t;
  }
  refresh(e, t, n, s, o, l) {
    let a = hc.indexOf(e) > -1,
      c =
        Math.round(n) != Math.round(this.lineHeight) ||
        this.lineWrapping != a ||
        this.direction != t;
    if (
      ((this.lineWrapping = a),
      (this.direction = t),
      (this.lineHeight = n),
      (this.charWidth = s),
      (this.lineLength = o),
      c)
    ) {
      this.heightSamples = {};
      for (let h = 0; h < l.length; h++) {
        let u = l[h];
        u < 0 ? h++ : (this.heightSamples[Math.floor(u * 10)] = !0);
      }
    }
    return c;
  }
}
class xg {
  constructor(e, t) {
    (this.from = e), (this.heights = t), (this.index = 0);
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class _t {
  constructor(e, t, n, s, o) {
    (this.from = e),
      (this.length = t),
      (this.top = n),
      (this.height = s),
      (this.type = o);
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  join(e) {
    let t = (Array.isArray(this.type) ? this.type : [this]).concat(
      Array.isArray(e.type) ? e.type : [e],
    );
    return new _t(
      this.from,
      this.length + e.length,
      this.top,
      this.height + e.height,
      t,
    );
  }
  moveY(e) {
    return e
      ? new _t(
          this.from,
          this.length,
          this.top + e,
          this.height,
          Array.isArray(this.type)
            ? this.type.map((t) => t.moveY(e))
            : this.type,
        )
      : this;
  }
}
var oe = (function (r) {
  return (
    (r[(r.ByPos = 0)] = 'ByPos'),
    (r[(r.ByHeight = 1)] = 'ByHeight'),
    (r[(r.ByPosNoHeight = 2)] = 'ByPosNoHeight'),
    r
  );
})(oe || (oe = {}));
const Or = 0.001;
class Be {
  constructor(e, t, n = 2) {
    (this.length = e), (this.height = t), (this.flags = n);
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | (this.flags & -3);
  }
  setHeight(e, t) {
    this.height != t &&
      (Math.abs(this.height - t) > Or && (e.heightChanged = !0),
      (this.height = t));
  }
  replace(e, t, n) {
    return Be.of(n);
  }
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, n, s) {
    let o = this;
    for (let l = s.length - 1; l >= 0; l--) {
      let { fromA: a, toA: c, fromB: h, toB: u } = s[l],
        f = o.lineAt(a, oe.ByPosNoHeight, t, 0, 0),
        d = f.to >= c ? f : o.lineAt(c, oe.ByPosNoHeight, t, 0, 0);
      for (u += d.to - c, c = d.to; l > 0 && f.from <= s[l - 1].toA; )
        (a = s[l - 1].fromA),
          (h = s[l - 1].fromB),
          l--,
          a < f.from && (f = o.lineAt(a, oe.ByPosNoHeight, t, 0, 0));
      (h += f.from - a), (a = f.from);
      let p = Ql.build(n, e, h, u);
      o = o.replace(a, c, p);
    }
    return o.updateHeight(n, 0);
  }
  static empty() {
    return new Fe(0, 0);
  }
  static of(e) {
    if (e.length == 1) return e[0];
    let t = 0,
      n = e.length,
      s = 0,
      o = 0;
    for (;;)
      if (t == n)
        if (s > o * 2) {
          let a = e[t - 1];
          a.break
            ? e.splice(--t, 1, a.left, null, a.right)
            : e.splice(--t, 1, a.left, a.right),
            (n += 1 + a.break),
            (s -= a.size);
        } else if (o > s * 2) {
          let a = e[n];
          a.break
            ? e.splice(n, 1, a.left, null, a.right)
            : e.splice(n, 1, a.left, a.right),
            (n += 2 + a.break),
            (o -= a.size);
        } else break;
      else if (s < o) {
        let a = e[t++];
        a && (s += a.size);
      } else {
        let a = e[--n];
        a && (o += a.size);
      }
    let l = 0;
    return (
      e[t - 1] == null ? ((l = 1), t--) : e[t] == null && ((l = 1), n++),
      new vg(Be.of(e.slice(0, t)), l, Be.of(e.slice(n)))
    );
  }
}
Be.prototype.size = 1;
class Yu extends Be {
  constructor(e, t, n) {
    super(e, t), (this.type = n);
  }
  blockAt(e, t, n, s) {
    return new _t(s, this.length, n, this.height, this.type);
  }
  lineAt(e, t, n, s, o) {
    return this.blockAt(0, n, s, o);
  }
  forEachLine(e, t, n, s, o, l) {
    l(this.blockAt(0, n, s, o));
  }
  updateHeight(e, t = 0, n = !1, s) {
    return (
      s && s.from <= t && s.more && this.setHeight(e, s.heights[s.index++]),
      (this.outdated = !1),
      this
    );
  }
  toString() {
    return `block(${this.length})`;
  }
}
class Fe extends Yu {
  constructor(e, t) {
    super(e, t, Oe.Text), (this.collapsed = 0), (this.widgetHeight = 0);
  }
  replace(e, t, n) {
    let s = n[0];
    return n.length == 1 &&
      (s instanceof Fe || (s instanceof Pe && s.flags & 4)) &&
      Math.abs(this.length - s.length) < 10
      ? (s instanceof Pe
          ? (s = new Fe(s.length, this.height))
          : (s.height = this.height),
        this.outdated || (s.outdated = !1),
        s)
      : Be.of(n);
  }
  updateHeight(e, t = 0, n = !1, s) {
    return (
      s && s.from <= t && s.more
        ? this.setHeight(e, s.heights[s.index++])
        : (n || this.outdated) &&
          this.setHeight(
            e,
            Math.max(
              this.widgetHeight,
              e.heightForLine(this.length - this.collapsed),
            ),
          ),
      (this.outdated = !1),
      this
    );
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ''}${
      this.widgetHeight ? ':' + this.widgetHeight : ''
    })`;
  }
}
class Pe extends Be {
  constructor(e) {
    super(e, 0);
  }
  lines(e, t) {
    let n = e.lineAt(t).number,
      s = e.lineAt(t + this.length).number;
    return { firstLine: n, lastLine: s, lineHeight: this.height / (s - n + 1) };
  }
  blockAt(e, t, n, s) {
    let { firstLine: o, lastLine: l, lineHeight: a } = this.lines(t, s),
      c = Math.max(0, Math.min(l - o, Math.floor((e - n) / a))),
      { from: h, length: u } = t.line(o + c);
    return new _t(h, u, n + a * c, a, Oe.Text);
  }
  lineAt(e, t, n, s, o) {
    if (t == oe.ByHeight) return this.blockAt(e, n, s, o);
    if (t == oe.ByPosNoHeight) {
      let { from: f, to: d } = n.lineAt(e);
      return new _t(f, d - f, 0, 0, Oe.Text);
    }
    let { firstLine: l, lineHeight: a } = this.lines(n, o),
      { from: c, length: h, number: u } = n.lineAt(e);
    return new _t(c, h, s + a * (u - l), a, Oe.Text);
  }
  forEachLine(e, t, n, s, o, l) {
    let { firstLine: a, lineHeight: c } = this.lines(n, o);
    for (let h = Math.max(e, o), u = Math.min(o + this.length, t); h <= u; ) {
      let f = n.lineAt(h);
      h == e && (s += c * (f.number - a)),
        l(new _t(f.from, f.length, s, c, Oe.Text)),
        (s += c),
        (h = f.to + 1);
    }
  }
  replace(e, t, n) {
    let s = this.length - t;
    if (s > 0) {
      let o = n[n.length - 1];
      o instanceof Pe
        ? (n[n.length - 1] = new Pe(o.length + s))
        : n.push(null, new Pe(s - 1));
    }
    if (e > 0) {
      let o = n[0];
      o instanceof Pe
        ? (n[0] = new Pe(e + o.length))
        : n.unshift(new Pe(e - 1), null);
    }
    return Be.of(n);
  }
  decomposeLeft(e, t) {
    t.push(new Pe(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new Pe(this.length - e - 1));
  }
  updateHeight(e, t = 0, n = !1, s) {
    let o = t + this.length;
    if (s && s.from <= t + this.length && s.more) {
      let l = [],
        a = Math.max(t, s.from),
        c = -1,
        h = e.heightChanged;
      for (
        s.from > t && l.push(new Pe(s.from - t - 1).updateHeight(e, t));
        a <= o && s.more;

      ) {
        let f = e.doc.lineAt(a).length;
        l.length && l.push(null);
        let d = s.heights[s.index++];
        c == -1 ? (c = d) : Math.abs(d - c) >= Or && (c = -2);
        let p = new Fe(f, d);
        (p.outdated = !1), l.push(p), (a += f + 1);
      }
      a <= o && l.push(null, new Pe(o - a).updateHeight(e, a));
      let u = Be.of(l);
      return (
        (e.heightChanged =
          h ||
          c < 0 ||
          Math.abs(u.height - this.height) >= Or ||
          Math.abs(c - this.lines(e.doc, t).lineHeight) >= Or),
        u
      );
    } else
      (n || this.outdated) &&
        (this.setHeight(e, e.heightForGap(t, t + this.length)),
        (this.outdated = !1));
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class vg extends Be {
  constructor(e, t, n) {
    super(
      e.length + t + n.length,
      e.height + n.height,
      t | (e.outdated || n.outdated ? 2 : 0),
    ),
      (this.left = e),
      (this.right = n),
      (this.size = e.size + n.size);
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, n, s) {
    let o = n + this.left.height;
    return e < o
      ? this.left.blockAt(e, t, n, s)
      : this.right.blockAt(e, t, o, s + this.left.length + this.break);
  }
  lineAt(e, t, n, s, o) {
    let l = s + this.left.height,
      a = o + this.left.length + this.break,
      c = t == oe.ByHeight ? e < l : e < a,
      h = c
        ? this.left.lineAt(e, t, n, s, o)
        : this.right.lineAt(e, t, n, l, a);
    if (this.break || (c ? h.to < a : h.from > a)) return h;
    let u = t == oe.ByPosNoHeight ? oe.ByPosNoHeight : oe.ByPos;
    return c
      ? h.join(this.right.lineAt(a, u, n, l, a))
      : this.left.lineAt(a, u, n, s, o).join(h);
  }
  forEachLine(e, t, n, s, o, l) {
    let a = s + this.left.height,
      c = o + this.left.length + this.break;
    if (this.break)
      e < c && this.left.forEachLine(e, t, n, s, o, l),
        t >= c && this.right.forEachLine(e, t, n, a, c, l);
    else {
      let h = this.lineAt(c, oe.ByPos, n, s, o);
      e < h.from && this.left.forEachLine(e, h.from - 1, n, s, o, l),
        h.to >= e && h.from <= t && l(h),
        t > h.to && this.right.forEachLine(h.to + 1, t, n, a, c, l);
    }
  }
  replace(e, t, n) {
    let s = this.left.length + this.break;
    if (t < s) return this.balanced(this.left.replace(e, t, n), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - s, t - s, n));
    let o = [];
    e > 0 && this.decomposeLeft(e, o);
    let l = o.length;
    for (let a of n) o.push(a);
    if ((e > 0 && uc(o, l - 1), t < this.length)) {
      let a = o.length;
      this.decomposeRight(t, o), uc(o, a);
    }
    return Be.of(o);
  }
  decomposeLeft(e, t) {
    let n = this.left.length;
    if (e <= n) return this.left.decomposeLeft(e, t);
    t.push(this.left),
      this.break && (n++, e >= n && t.push(null)),
      e > n && this.right.decomposeLeft(e - n, t);
  }
  decomposeRight(e, t) {
    let n = this.left.length,
      s = n + this.break;
    if (e >= s) return this.right.decomposeRight(e - s, t);
    e < n && this.left.decomposeRight(e, t),
      this.break && e < s && t.push(null),
      t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size
      ? Be.of(this.break ? [e, null, t] : [e, t])
      : ((this.left = e),
        (this.right = t),
        (this.height = e.height + t.height),
        (this.outdated = e.outdated || t.outdated),
        (this.size = e.size + t.size),
        (this.length = e.length + this.break + t.length),
        this);
  }
  updateHeight(e, t = 0, n = !1, s) {
    let { left: o, right: l } = this,
      a = t + o.length + this.break,
      c = null;
    return (
      s && s.from <= t + o.length && s.more
        ? (c = o = o.updateHeight(e, t, n, s))
        : o.updateHeight(e, t, n),
      s && s.from <= a + l.length && s.more
        ? (c = l = l.updateHeight(e, a, n, s))
        : l.updateHeight(e, a, n),
      c
        ? this.balanced(o, l)
        : ((this.height = this.left.height + this.right.height),
          (this.outdated = !1),
          this)
    );
  }
  toString() {
    return this.left + (this.break ? ' ' : '-') + this.right;
  }
}
function uc(r, e) {
  let t, n;
  r[e] == null &&
    (t = r[e - 1]) instanceof Pe &&
    (n = r[e + 1]) instanceof Pe &&
    r.splice(e - 1, 3, new Pe(t.length + 1 + n.length));
}
const Sg = 5;
class Ql {
  constructor(e, t) {
    (this.pos = e),
      (this.oracle = t),
      (this.nodes = []),
      (this.lineStart = -1),
      (this.lineEnd = -1),
      (this.covering = null),
      (this.writtenTo = e);
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let n = Math.min(t, this.lineEnd),
        s = this.nodes[this.nodes.length - 1];
      s instanceof Fe
        ? (s.length += n - this.pos)
        : (n > this.pos || !this.isCovered) &&
          this.nodes.push(new Fe(n - this.pos, -1)),
        (this.writtenTo = n),
        t > n &&
          (this.nodes.push(null), this.writtenTo++, (this.lineStart = -1));
    }
    this.pos = t;
  }
  point(e, t, n) {
    if (e < t || n.heightRelevant) {
      let s = n.widget ? n.widget.estimatedHeight : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let o = t - e;
      n.block
        ? this.addBlock(new Yu(o, s, n.type))
        : (o || s >= Sg) && this.addLineDeco(s, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 &&
      this.lineEnd < this.pos &&
      (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1) return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    (this.lineStart = e),
      (this.lineEnd = t),
      this.writtenTo < e &&
        ((this.writtenTo < e - 1 ||
          this.nodes[this.nodes.length - 1] == null) &&
          this.nodes.push(this.blankContent(this.writtenTo, e - 1)),
        this.nodes.push(null)),
      this.pos > e && this.nodes.push(new Fe(this.pos - e, -1)),
      (this.writtenTo = this.pos);
  }
  blankContent(e, t) {
    let n = new Pe(t - e);
    return this.oracle.doc.lineAt(e).to == t && (n.flags |= 4), n;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof Fe) return e;
    let t = new Fe(0, -1);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine(),
      e.type == Oe.WidgetAfter && !this.isCovered && this.ensureLine(),
      this.nodes.push(e),
      (this.writtenTo = this.pos = this.pos + e.length),
      e.type != Oe.WidgetBefore && (this.covering = e);
  }
  addLineDeco(e, t) {
    let n = this.ensureLine();
    (n.length += t),
      (n.collapsed += t),
      (n.widgetHeight = Math.max(n.widgetHeight, e)),
      (this.writtenTo = this.pos = this.pos + t);
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof Fe) && !this.isCovered
      ? this.nodes.push(new Fe(0, -1))
      : (this.writtenTo < this.pos || t == null) &&
        this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let n = e;
    for (let s of this.nodes)
      s instanceof Fe && s.updateHeight(this.oracle, n),
        (n += s ? s.length : 1);
    return this.nodes;
  }
  static build(e, t, n, s) {
    let o = new Ql(n, e);
    return le.spans(t, n, s, o, 0), o.finish(n);
  }
}
function $g(r, e, t) {
  let n = new kg();
  return le.compare(r, e, t, n, 0), n.changes;
}
class kg {
  constructor() {
    this.changes = [];
  }
  compareRange() {}
  comparePoint(e, t, n, s) {
    (e < t || (n && n.heightRelevant) || (s && s.heightRelevant)) &&
      _o(e, t, this.changes, 5);
  }
}
function wg(r, e) {
  let t = r.getBoundingClientRect(),
    n = Math.max(0, t.left),
    s = Math.min(innerWidth, t.right),
    o = Math.max(0, t.top),
    l = Math.min(innerHeight, t.bottom),
    a = r.ownerDocument.body;
  for (let c = r.parentNode; c && c != a; )
    if (c.nodeType == 1) {
      let h = c,
        u = window.getComputedStyle(h);
      if (
        (h.scrollHeight > h.clientHeight || h.scrollWidth > h.clientWidth) &&
        u.overflow != 'visible'
      ) {
        let f = h.getBoundingClientRect();
        (n = Math.max(n, f.left)),
          (s = Math.min(s, f.right)),
          (o = Math.max(o, f.top)),
          (l = Math.min(l, f.bottom));
      }
      c =
        u.position == 'absolute' || u.position == 'fixed'
          ? h.offsetParent
          : h.parentNode;
    } else if (c.nodeType == 11) c = c.host;
    else break;
  return {
    left: n - t.left,
    right: Math.max(n, s) - t.left,
    top: o - (t.top + e),
    bottom: Math.max(o, l) - (t.top + e),
  };
}
function Tg(r, e) {
  let t = r.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e),
  };
}
class Zs {
  constructor(e, t, n) {
    (this.from = e), (this.to = t), (this.size = n);
  }
  static same(e, t) {
    if (e.length != t.length) return !1;
    for (let n = 0; n < e.length; n++) {
      let s = e[n],
        o = t[n];
      if (s.from != o.from || s.to != o.to || s.size != o.size) return !1;
    }
    return !0;
  }
  draw(e) {
    return q
      .replace({ widget: new Pg(this.size, e) })
      .range(this.from, this.to);
  }
}
class Pg extends Ti {
  constructor(e, t) {
    super(), (this.size = e), (this.vertical = t);
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement('div');
    return (
      this.vertical
        ? (e.style.height = this.size + 'px')
        : ((e.style.width = this.size + 'px'),
          (e.style.height = '2px'),
          (e.style.display = 'inline-block')),
      e
    );
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class fc {
  constructor(e) {
    (this.state = e),
      (this.pixelViewport = {
        left: 0,
        right: window.innerWidth,
        top: 0,
        bottom: 0,
      }),
      (this.inView = !0),
      (this.paddingTop = 0),
      (this.paddingBottom = 0),
      (this.contentDOMWidth = 0),
      (this.contentDOMHeight = 0),
      (this.editorHeight = 0),
      (this.editorWidth = 0),
      (this.heightOracle = new Qg()),
      (this.scaler = Oc),
      (this.scrollTarget = null),
      (this.printing = !1),
      (this.mustMeasureContent = !0),
      (this.visibleRanges = []),
      (this.mustEnforceCursorAssoc = !1),
      (this.heightMap = Be.empty().applyChanges(
        e.facet(gi),
        K.empty,
        this.heightOracle.setDoc(e.doc),
        [new Dt(0, 0, 0, e.doc.length)],
      )),
      (this.viewport = this.getViewport(0, null)),
      this.updateViewportLines(),
      this.updateForViewport(),
      (this.lineGaps = this.ensureLineGaps([])),
      (this.lineGapDeco = q.set(this.lineGaps.map((t) => t.draw(!1)))),
      this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport],
      { main: t } = this.state.selection;
    for (let n = 0; n <= 1; n++) {
      let s = n ? t.head : t.anchor;
      if (!e.some(({ from: o, to: l }) => s >= o && s <= l)) {
        let { from: o, to: l } = this.lineBlockAt(s);
        e.push(new Jn(o, l));
      }
    }
    (this.viewports = e.sort((n, s) => n.from - s.from)),
      (this.scaler =
        this.heightMap.height <= 7e6
          ? Oc
          : new Wg(this.heightOracle.doc, this.heightMap, this.viewports));
  }
  updateViewportLines() {
    (this.viewportLines = []),
      this.heightMap.forEachLine(
        this.viewport.from,
        this.viewport.to,
        this.state.doc,
        0,
        0,
        (e) => {
          this.viewportLines.push(
            this.scaler.scale == 1 ? e : gn(e, this.scaler),
          );
        },
      );
  }
  update(e, t = null) {
    let n = this.state;
    this.state = e.state;
    let s = this.state.facet(gi),
      o = e.changedRanges,
      l = Dt.extendWithRanges(
        o,
        $g(
          e.startState.facet(gi),
          s,
          e ? e.changes : $e.empty(this.state.doc.length),
        ),
      ),
      a = this.heightMap.height;
    (this.heightMap = this.heightMap.applyChanges(
      s,
      n.doc,
      this.heightOracle.setDoc(this.state.doc),
      l,
    )),
      this.heightMap.height != a && (e.flags |= 2);
    let c = l.length
      ? this.mapViewport(this.viewport, e.changes)
      : this.viewport;
    ((t && (t.range.head < c.from || t.range.head > c.to)) ||
      !this.viewportIsAppropriate(c)) &&
      (c = this.getViewport(0, t));
    let h =
      !e.changes.empty ||
      e.flags & 2 ||
      c.from != this.viewport.from ||
      c.to != this.viewport.to;
    (this.viewport = c),
      this.updateForViewport(),
      h && this.updateViewportLines(),
      (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) &&
        this.updateLineGaps(
          this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes)),
        ),
      (e.flags |= this.computeVisibleRanges()),
      t && (this.scrollTarget = t),
      !this.mustEnforceCursorAssoc &&
        e.selectionSet &&
        e.view.lineWrapping &&
        e.state.selection.main.empty &&
        e.state.selection.main.assoc &&
        (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM,
      n = window.getComputedStyle(t),
      s = this.heightOracle,
      o = n.whiteSpace,
      l = n.direction == 'rtl' ? ne.RTL : ne.LTR,
      a = this.heightOracle.mustRefreshForStyle(o, l),
      c =
        a || this.mustMeasureContent || this.contentDOMHeight != t.clientHeight,
      h = 0,
      u = 0;
    if (
      (this.editorWidth != e.scrollDOM.clientWidth &&
        (s.lineWrapping && (c = !0),
        (this.editorWidth = e.scrollDOM.clientWidth),
        (h |= 8)),
      c)
    ) {
      (this.mustMeasureContent = !1), (this.contentDOMHeight = t.clientHeight);
      let k = parseInt(n.paddingTop) || 0,
        b = parseInt(n.paddingBottom) || 0;
      (this.paddingTop != k || this.paddingBottom != b) &&
        ((h |= 8), (this.paddingTop = k), (this.paddingBottom = b));
    }
    let f = (this.printing ? Tg : wg)(t, this.paddingTop),
      d = f.top - this.pixelViewport.top,
      p = f.bottom - this.pixelViewport.bottom;
    this.pixelViewport = f;
    let m =
      this.pixelViewport.bottom > this.pixelViewport.top &&
      this.pixelViewport.right > this.pixelViewport.left;
    if ((m != this.inView && ((this.inView = m), m && (c = !0)), !this.inView))
      return 0;
    let S = t.clientWidth;
    if (
      ((this.contentDOMWidth != S ||
        this.editorHeight != e.scrollDOM.clientHeight) &&
        ((this.contentDOMWidth = S),
        (this.editorHeight = e.scrollDOM.clientHeight),
        (h |= 8)),
      c)
    ) {
      let k = e.docView.measureVisibleLineHeights();
      if (
        (s.mustRefreshForHeights(k) && (a = !0),
        a ||
          (s.lineWrapping && Math.abs(S - this.contentDOMWidth) > s.charWidth))
      ) {
        let { lineHeight: b, charWidth: Q } = e.docView.measureTextSize();
        (a = s.refresh(o, l, b, Q, S / Q, k)),
          a && ((e.docView.minWidth = 0), (h |= 8));
      }
      d > 0 && p > 0
        ? (u = Math.max(d, p))
        : d < 0 && p < 0 && (u = Math.min(d, p)),
        (s.heightChanged = !1),
        (this.heightMap = this.heightMap.updateHeight(
          s,
          0,
          a,
          new xg(this.viewport.from, k),
        )),
        s.heightChanged && (h |= 2);
    }
    let T =
      !this.viewportIsAppropriate(this.viewport, u) ||
      (this.scrollTarget &&
        (this.scrollTarget.range.head < this.viewport.from ||
          this.scrollTarget.range.head > this.viewport.to));
    return (
      T && (this.viewport = this.getViewport(u, this.scrollTarget)),
      this.updateForViewport(),
      (h & 2 || T) && this.updateViewportLines(),
      (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) &&
        this.updateLineGaps(this.ensureLineGaps(a ? [] : this.lineGaps)),
      (h |= this.computeVisibleRanges()),
      this.mustEnforceCursorAssoc &&
        ((this.mustEnforceCursorAssoc = !1), e.docView.enforceCursorAssoc()),
      h
    );
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let n = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)),
      s = this.heightMap,
      o = this.state.doc,
      { visibleTop: l, visibleBottom: a } = this,
      c = new Jn(
        s.lineAt(l - n * 1e3, oe.ByHeight, o, 0, 0).from,
        s.lineAt(a + (1 - n) * 1e3, oe.ByHeight, o, 0, 0).to,
      );
    if (t) {
      let { head: h } = t.range;
      if (h < c.from || h > c.to) {
        let u = Math.min(
            this.editorHeight,
            this.pixelViewport.bottom - this.pixelViewport.top,
          ),
          f = s.lineAt(h, oe.ByPos, o, 0, 0),
          d;
        t.y == 'center'
          ? (d = (f.top + f.bottom) / 2 - u / 2)
          : t.y == 'start' || (t.y == 'nearest' && h < c.from)
          ? (d = f.top)
          : (d = f.bottom - u),
          (c = new Jn(
            s.lineAt(d - 1e3 / 2, oe.ByHeight, o, 0, 0).from,
            s.lineAt(d + u + 1e3 / 2, oe.ByHeight, o, 0, 0).to,
          ));
      }
    }
    return c;
  }
  mapViewport(e, t) {
    let n = t.mapPos(e.from, -1),
      s = t.mapPos(e.to, 1);
    return new Jn(
      this.heightMap.lineAt(n, oe.ByPos, this.state.doc, 0, 0).from,
      this.heightMap.lineAt(s, oe.ByPos, this.state.doc, 0, 0).to,
    );
  }
  viewportIsAppropriate({ from: e, to: t }, n = 0) {
    if (!this.inView) return !0;
    let { top: s } = this.heightMap.lineAt(e, oe.ByPos, this.state.doc, 0, 0),
      { bottom: o } = this.heightMap.lineAt(t, oe.ByPos, this.state.doc, 0, 0),
      { visibleTop: l, visibleBottom: a } = this;
    return (
      (e == 0 || s <= l - Math.max(10, Math.min(-n, 250))) &&
      (t == this.state.doc.length || o >= a + Math.max(10, Math.min(n, 250))) &&
      s > l - 2 * 1e3 &&
      o < a + 2 * 1e3
    );
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty) return e;
    let n = [];
    for (let s of e)
      t.touchesRange(s.from, s.to) ||
        n.push(new Zs(t.mapPos(s.from), t.mapPos(s.to), s.size));
    return n;
  }
  ensureLineGaps(e) {
    let t = [];
    if (this.heightOracle.direction != ne.LTR) return t;
    for (let n of this.viewportLines) {
      if (n.length < 4e3) continue;
      let s = Rg(n.from, n.to, this.state);
      if (s.total < 4e3) continue;
      let o, l;
      if (this.heightOracle.lineWrapping) {
        let h =
          (2e3 / this.heightOracle.lineLength) * this.heightOracle.lineHeight;
        (o = Kn(s, (this.visibleTop - n.top - h) / n.height)),
          (l = Kn(s, (this.visibleBottom - n.top + h) / n.height));
      } else {
        let h = s.total * this.heightOracle.charWidth,
          u = 2e3 * this.heightOracle.charWidth;
        (o = Kn(s, (this.pixelViewport.left - u) / h)),
          (l = Kn(s, (this.pixelViewport.right + u) / h));
      }
      let a = [];
      o > n.from && a.push({ from: n.from, to: o }),
        l < n.to && a.push({ from: l, to: n.to });
      let c = this.state.selection.main;
      c.from >= n.from && c.from <= n.to && pc(a, c.from - 10, c.from + 10),
        !c.empty &&
          c.to >= n.from &&
          c.to <= n.to &&
          pc(a, c.to - 10, c.to + 10);
      for (let { from: h, to: u } of a)
        u - h > 1e3 &&
          t.push(
            Cg(
              e,
              (f) =>
                f.from >= n.from &&
                f.to <= n.to &&
                Math.abs(f.from - h) < 1e3 &&
                Math.abs(f.to - u) < 1e3,
            ) || new Zs(h, u, this.gapSize(n, h, u, s)),
          );
    }
    return t;
  }
  gapSize(e, t, n, s) {
    let o = dc(s, n) - dc(s, t);
    return this.heightOracle.lineWrapping
      ? e.height * o
      : s.total * this.heightOracle.charWidth * o;
  }
  updateLineGaps(e) {
    Zs.same(e, this.lineGaps) ||
      ((this.lineGaps = e),
      (this.lineGapDeco = q.set(
        e.map((t) => t.draw(this.heightOracle.lineWrapping)),
      )));
  }
  computeVisibleRanges() {
    let e = this.state.facet(gi);
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let t = [];
    le.spans(
      e,
      this.viewport.from,
      this.viewport.to,
      {
        span(s, o) {
          t.push({ from: s, to: o });
        },
        point() {},
      },
      20,
    );
    let n =
      t.length != this.visibleRanges.length ||
      this.visibleRanges.some((s, o) => s.from != t[o].from || s.to != t[o].to);
    return (this.visibleRanges = t), n ? 4 : 0;
  }
  lineBlockAt(e) {
    return (
      (e >= this.viewport.from &&
        e <= this.viewport.to &&
        this.viewportLines.find((t) => t.from <= e && t.to >= e)) ||
      gn(this.heightMap.lineAt(e, oe.ByPos, this.state.doc, 0, 0), this.scaler)
    );
  }
  lineBlockAtHeight(e) {
    return gn(
      this.heightMap.lineAt(
        this.scaler.fromDOM(e),
        oe.ByHeight,
        this.state.doc,
        0,
        0,
      ),
      this.scaler,
    );
  }
  elementAtHeight(e) {
    return gn(
      this.heightMap.blockAt(this.scaler.fromDOM(e), this.state.doc, 0, 0),
      this.scaler,
    );
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Jn {
  constructor(e, t) {
    (this.from = e), (this.to = t);
  }
}
function Rg(r, e, t) {
  let n = [],
    s = r,
    o = 0;
  return (
    le.spans(
      t.facet(gi),
      r,
      e,
      {
        span() {},
        point(l, a) {
          l > s && (n.push({ from: s, to: l }), (o += l - s)), (s = a);
        },
      },
      20,
    ),
    s < e && (n.push({ from: s, to: e }), (o += e - s)),
    { total: o, ranges: n }
  );
}
function Kn({ total: r, ranges: e }, t) {
  if (t <= 0) return e[0].from;
  if (t >= 1) return e[e.length - 1].to;
  let n = Math.floor(r * t);
  for (let s = 0; ; s++) {
    let { from: o, to: l } = e[s],
      a = l - o;
    if (n <= a) return o + n;
    n -= a;
  }
}
function dc(r, e) {
  let t = 0;
  for (let { from: n, to: s } of r.ranges) {
    if (e <= s) {
      t += e - n;
      break;
    }
    t += s - n;
  }
  return t / r.total;
}
function pc(r, e, t) {
  for (let n = 0; n < r.length; n++) {
    let s = r[n];
    if (s.from < t && s.to > e) {
      let o = [];
      s.from < e && o.push({ from: s.from, to: e }),
        s.to > t && o.push({ from: t, to: s.to }),
        r.splice(n, 1, ...o),
        (n += o.length - 1);
    }
  }
}
function Cg(r, e) {
  for (let t of r) if (e(t)) return t;
}
const Oc = {
  toDOM(r) {
    return r;
  },
  fromDOM(r) {
    return r;
  },
  scale: 1,
};
class Wg {
  constructor(e, t, n) {
    let s = 0,
      o = 0,
      l = 0;
    (this.viewports = n.map(({ from: a, to: c }) => {
      let h = t.lineAt(a, oe.ByPos, e, 0, 0).top,
        u = t.lineAt(c, oe.ByPos, e, 0, 0).bottom;
      return (
        (s += u - h),
        { from: a, to: c, top: h, bottom: u, domTop: 0, domBottom: 0 }
      );
    })),
      (this.scale = (7e6 - s) / (t.height - s));
    for (let a of this.viewports)
      (a.domTop = l + (a.top - o) * this.scale),
        (l = a.domBottom = a.domTop + (a.bottom - a.top)),
        (o = a.bottom);
  }
  toDOM(e) {
    for (let t = 0, n = 0, s = 0; ; t++) {
      let o = t < this.viewports.length ? this.viewports[t] : null;
      if (!o || e < o.top) return s + (e - n) * this.scale;
      if (e <= o.bottom) return o.domTop + (e - o.top);
      (n = o.bottom), (s = o.domBottom);
    }
  }
  fromDOM(e) {
    for (let t = 0, n = 0, s = 0; ; t++) {
      let o = t < this.viewports.length ? this.viewports[t] : null;
      if (!o || e < o.domTop) return n + (e - s) / this.scale;
      if (e <= o.domBottom) return o.top + (e - o.domTop);
      (n = o.bottom), (s = o.domBottom);
    }
  }
}
function gn(r, e) {
  if (e.scale == 1) return r;
  let t = e.toDOM(r.top),
    n = e.toDOM(r.bottom);
  return new _t(
    r.from,
    r.length,
    t,
    n - t,
    Array.isArray(r.type) ? r.type.map((s) => gn(s, e)) : r.type,
  );
}
const er = U.define({ combine: (r) => r.join(' ') }),
  zo = U.define({ combine: (r) => r.indexOf(!0) > -1 }),
  No = ni.newName(),
  qu = ni.newName(),
  Gu = ni.newName(),
  Fu = { '&light': '.' + qu, '&dark': '.' + Gu };
function Bo(r, e, t) {
  return new ni(e, {
    finish(n) {
      return /&/.test(n)
        ? n.replace(/&\w*/, (s) => {
            if (s == '&') return r;
            if (!t || !t[s]) throw new RangeError(`Unsupported selector: ${s}`);
            return t[s];
          })
        : r + ' ' + n;
    },
  });
}
const Ag = Bo(
    '.' + No,
    {
      '&.cm-editor': {
        position: 'relative !important',
        boxSizing: 'border-box',
        '&.cm-focused': { outline: '1px dotted #212121' },
        display: 'flex !important',
        flexDirection: 'column',
      },
      '.cm-scroller': {
        display: 'flex !important',
        alignItems: 'flex-start !important',
        fontFamily: 'monospace',
        lineHeight: 1.4,
        height: '100%',
        overflowX: 'auto',
        position: 'relative',
        zIndex: 0,
      },
      '.cm-content': {
        margin: 0,
        flexGrow: 2,
        minHeight: '100%',
        display: 'block',
        whiteSpace: 'pre',
        wordWrap: 'normal',
        boxSizing: 'border-box',
        padding: '4px 0',
        outline: 'none',
        '&[contenteditable=true]': {
          WebkitUserModify: 'read-write-plaintext-only',
        },
      },
      '.cm-lineWrapping': {
        whiteSpace_fallback: 'pre-wrap',
        whiteSpace: 'break-spaces',
        wordBreak: 'break-word',
        overflowWrap: 'anywhere',
      },
      '&light .cm-content': { caretColor: 'black' },
      '&dark .cm-content': { caretColor: 'white' },
      '.cm-line': { display: 'block', padding: '0 2px 0 4px' },
      '.cm-selectionLayer': { zIndex: -1, contain: 'size style' },
      '.cm-selectionBackground': { position: 'absolute' },
      '&light .cm-selectionBackground': { background: '#d9d9d9' },
      '&dark .cm-selectionBackground': { background: '#222' },
      '&light.cm-focused .cm-selectionBackground': { background: '#d7d4f0' },
      '&dark.cm-focused .cm-selectionBackground': { background: '#233' },
      '.cm-cursorLayer': {
        zIndex: 100,
        contain: 'size style',
        pointerEvents: 'none',
      },
      '&.cm-focused .cm-cursorLayer': {
        animation: 'steps(1) cm-blink 1.2s infinite',
      },
      '@keyframes cm-blink': {
        '0%': {},
        '50%': { visibility: 'hidden' },
        '100%': {},
      },
      '@keyframes cm-blink2': {
        '0%': {},
        '50%': { visibility: 'hidden' },
        '100%': {},
      },
      '.cm-cursor, .cm-dropCursor': {
        position: 'absolute',
        borderLeft: '1.2px solid black',
        marginLeft: '-0.6px',
        pointerEvents: 'none',
      },
      '.cm-cursor': { display: 'none' },
      '&dark .cm-cursor': { borderLeftColor: '#444' },
      '&.cm-focused .cm-cursor': { display: 'block' },
      '&light .cm-activeLine': { backgroundColor: '#f3f9ff' },
      '&dark .cm-activeLine': { backgroundColor: '#223039' },
      '&light .cm-specialChar': { color: 'red' },
      '&dark .cm-specialChar': { color: '#f78' },
      '.cm-tab': {
        display: 'inline-block',
        overflow: 'hidden',
        verticalAlign: 'bottom',
      },
      '.cm-widgetBuffer': {
        verticalAlign: 'text-top',
        height: '1em',
        display: 'inline',
      },
      '.cm-placeholder': {
        color: '#888',
        display: 'inline-block',
        verticalAlign: 'top',
      },
      '.cm-button': {
        verticalAlign: 'middle',
        color: 'inherit',
        fontSize: '70%',
        padding: '.2em 1em',
        borderRadius: '1px',
      },
      '&light .cm-button': {
        backgroundImage: 'linear-gradient(#eff1f5, #d9d9df)',
        border: '1px solid #888',
        '&:active': { backgroundImage: 'linear-gradient(#b4b4b4, #d0d3d6)' },
      },
      '&dark .cm-button': {
        backgroundImage: 'linear-gradient(#393939, #111)',
        border: '1px solid #888',
        '&:active': { backgroundImage: 'linear-gradient(#111, #333)' },
      },
      '.cm-textfield': {
        verticalAlign: 'middle',
        color: 'inherit',
        fontSize: '70%',
        border: '1px solid silver',
        padding: '.2em .5em',
      },
      '&light .cm-textfield': { backgroundColor: 'white' },
      '&dark .cm-textfield': {
        border: '1px solid #555',
        backgroundColor: 'inherit',
      },
    },
    Fu,
  ),
  Eg = {
    childList: !0,
    characterData: !0,
    subtree: !0,
    attributes: !0,
    characterDataOldValue: !0,
  },
  Ds = j.ie && j.ie_version <= 11;
class Lg {
  constructor(e, t, n) {
    (this.view = e),
      (this.onChange = t),
      (this.onScrollChanged = n),
      (this.active = !1),
      (this.selectionRange = new Lm()),
      (this.selectionChanged = !1),
      (this.delayedFlush = -1),
      (this.resizeTimeout = -1),
      (this.queue = []),
      (this.delayedAndroidKey = null),
      (this.scrollTargets = []),
      (this.intersection = null),
      (this.resize = null),
      (this.intersecting = !1),
      (this.gapIntersection = null),
      (this.gaps = []),
      (this.parentCheck = -1),
      (this.dom = e.contentDOM),
      (this.observer = new MutationObserver((s) => {
        for (let o of s) this.queue.push(o);
        ((j.ie && j.ie_version <= 11) || (j.ios && e.composing)) &&
        s.some(
          (o) =>
            (o.type == 'childList' && o.removedNodes.length) ||
            (o.type == 'characterData' &&
              o.oldValue.length > o.target.nodeValue.length),
        )
          ? this.flushSoon()
          : this.flush();
      })),
      Ds &&
        (this.onCharData = (s) => {
          this.queue.push({
            target: s.target,
            type: 'characterData',
            oldValue: s.prevValue,
          }),
            this.flushSoon();
        }),
      (this.onSelectionChange = this.onSelectionChange.bind(this)),
      window.addEventListener(
        'resize',
        (this.onResize = this.onResize.bind(this)),
      ),
      typeof ResizeObserver == 'function' &&
        ((this.resize = new ResizeObserver(() => {
          this.view.docView.lastUpdate < Date.now() - 75 && this.onResize();
        })),
        this.resize.observe(e.scrollDOM)),
      window.addEventListener(
        'beforeprint',
        (this.onPrint = this.onPrint.bind(this)),
      ),
      this.start(),
      window.addEventListener(
        'scroll',
        (this.onScroll = this.onScroll.bind(this)),
      ),
      typeof IntersectionObserver == 'function' &&
        ((this.intersection = new IntersectionObserver((s) => {
          this.parentCheck < 0 &&
            (this.parentCheck = setTimeout(
              this.listenForScroll.bind(this),
              1e3,
            )),
            s.length > 0 &&
              s[s.length - 1].intersectionRatio > 0 != this.intersecting &&
              ((this.intersecting = !this.intersecting),
              this.intersecting != this.view.inView &&
                this.onScrollChanged(document.createEvent('Event')));
        }, {})),
        this.intersection.observe(this.dom),
        (this.gapIntersection = new IntersectionObserver((s) => {
          s.length > 0 &&
            s[s.length - 1].intersectionRatio > 0 &&
            this.onScrollChanged(document.createEvent('Event'));
        }, {}))),
      this.listenForScroll(),
      this.readSelectionRange(),
      this.dom.ownerDocument.addEventListener(
        'selectionchange',
        this.onSelectionChange,
      );
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 &&
      (this.resizeTimeout = setTimeout(() => {
        (this.resizeTimeout = -1), this.view.requestMeasure();
      }, 50));
  }
  onPrint() {
    (this.view.viewState.printing = !0),
      this.view.measure(),
      setTimeout(() => {
        (this.view.viewState.printing = !1), this.view.requestMeasure();
      }, 500);
  }
  updateGaps(e) {
    if (
      this.gapIntersection &&
      (e.length != this.gaps.length || this.gaps.some((t, n) => t != e[n]))
    ) {
      this.gapIntersection.disconnect();
      for (let t of e) this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    if (!this.readSelectionRange() || this.delayedAndroidKey) return;
    let { view: t } = this,
      n = this.selectionRange;
    if (t.state.facet(Wn) ? t.root.activeElement != this.dom : !wo(t.dom, n))
      return;
    let s = n.anchorNode && t.docView.nearest(n.anchorNode);
    (s && s.ignoreEvent(e)) ||
      (((j.ie && j.ie_version <= 11) || (j.android && j.chrome)) &&
      !t.state.selection.main.empty &&
      n.focusNode &&
      Rr(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset)
        ? this.flushSoon()
        : this.flush(!1));
  }
  readSelectionRange() {
    let { root: e } = this.view,
      t = Pr(e),
      n =
        (j.safari &&
          e.nodeType == 11 &&
          Wm() == this.view.contentDOM &&
          _g(this.view)) ||
        t;
    return this.selectionRange.eq(n)
      ? !1
      : (this.selectionRange.setRange(n), (this.selectionChanged = !0));
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset),
      (this.selectionChanged = !1);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0,
      t = null;
    for (let n = this.dom; n; )
      if (n.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == n
          ? e++
          : t || (t = this.scrollTargets.slice(0, e)),
          t && t.push(n),
          (n = n.assignedSlot || n.parentNode);
      else if (n.nodeType == 11) n = n.host;
      else break;
    if (
      (e < this.scrollTargets.length &&
        !t &&
        (t = this.scrollTargets.slice(0, e)),
      t)
    ) {
      for (let n of this.scrollTargets)
        n.removeEventListener('scroll', this.onScroll);
      for (let n of (this.scrollTargets = t))
        n.addEventListener('scroll', this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active) return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active ||
      (this.observer.observe(this.dom, Eg),
      Ds &&
        this.dom.addEventListener('DOMCharacterDataModified', this.onCharData),
      (this.active = !0));
  }
  stop() {
    !this.active ||
      ((this.active = !1),
      this.observer.disconnect(),
      Ds &&
        this.dom.removeEventListener(
          'DOMCharacterDataModified',
          this.onCharData,
        ));
  }
  clear() {
    this.processRecords(),
      (this.queue.length = 0),
      (this.selectionChanged = !1);
  }
  delayAndroidKey(e, t) {
    this.delayedAndroidKey ||
      requestAnimationFrame(() => {
        let n = this.delayedAndroidKey;
        this.delayedAndroidKey = null;
        let s = this.view.state;
        Qn(this.view.contentDOM, n.key, n.keyCode)
          ? this.processRecords()
          : this.flush(),
          this.view.state == s && this.view.update([]);
      }),
      (!this.delayedAndroidKey || e == 'Enter') &&
        (this.delayedAndroidKey = { key: e, keyCode: t });
  }
  flushSoon() {
    this.delayedFlush < 0 &&
      (this.delayedFlush = window.setTimeout(() => {
        (this.delayedFlush = -1), this.flush();
      }, 20));
  }
  forceFlush() {
    this.delayedFlush >= 0 &&
      (window.clearTimeout(this.delayedFlush),
      (this.delayedFlush = -1),
      this.flush());
  }
  processRecords() {
    let e = this.queue;
    for (let o of this.observer.takeRecords()) e.push(o);
    e.length && (this.queue = []);
    let t = -1,
      n = -1,
      s = !1;
    for (let o of e) {
      let l = this.readMutation(o);
      !l ||
        (l.typeOver && (s = !0),
        t == -1
          ? ({ from: t, to: n } = l)
          : ((t = Math.min(l.from, t)), (n = Math.max(l.to, n))));
    }
    return { from: t, to: n, typeOver: s };
  }
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return;
    e && this.readSelectionRange();
    let { from: t, to: n, typeOver: s } = this.processRecords(),
      o = this.selectionChanged && wo(this.dom, this.selectionRange);
    if (t < 0 && !o) return;
    this.selectionChanged = !1;
    let l = this.view.state;
    this.onChange(t, n, s), this.view.state == l && this.view.update([]);
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e)) return null;
    if (
      (t.markDirty(e.type == 'attributes'),
      e.type == 'attributes' && (t.dirty |= 4),
      e.type == 'childList')
    ) {
      let n = mc(t, e.previousSibling || e.target.previousSibling, -1),
        s = mc(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: n ? t.posAfter(n) : t.posAtStart,
        to: s ? t.posBefore(s) : t.posAtEnd,
        typeOver: !1,
      };
    } else
      return e.type == 'characterData'
        ? {
            from: t.posAtStart,
            to: t.posAtEnd,
            typeOver: e.target.nodeValue == e.oldValue,
          }
        : null;
  }
  destroy() {
    var e, t, n;
    this.stop(),
      (e = this.intersection) === null || e === void 0 || e.disconnect(),
      (t = this.gapIntersection) === null || t === void 0 || t.disconnect(),
      (n = this.resize) === null || n === void 0 || n.disconnect();
    for (let s of this.scrollTargets)
      s.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('scroll', this.onScroll),
      window.removeEventListener('resize', this.onResize),
      window.removeEventListener('beforeprint', this.onPrint),
      this.dom.ownerDocument.removeEventListener(
        'selectionchange',
        this.onSelectionChange,
      ),
      clearTimeout(this.parentCheck),
      clearTimeout(this.resizeTimeout);
  }
}
function mc(r, e, t) {
  for (; e; ) {
    let n = de.get(e);
    if (n && n.parent == r) return n;
    let s = e.parentNode;
    e = s != r.dom ? s : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function _g(r) {
  let e = null;
  function t(c) {
    c.preventDefault(),
      c.stopImmediatePropagation(),
      (e = c.getTargetRanges()[0]);
  }
  if (
    (r.contentDOM.addEventListener('beforeinput', t, !0),
    document.execCommand('indent'),
    r.contentDOM.removeEventListener('beforeinput', t, !0),
    !e)
  )
    return null;
  let n = e.startContainer,
    s = e.startOffset,
    o = e.endContainer,
    l = e.endOffset,
    a = r.docView.domAtPos(r.state.selection.main.anchor);
  return (
    Rr(a.node, a.offset, o, l) && ([n, s, o, l] = [o, l, n, s]),
    { anchorNode: n, anchorOffset: s, focusNode: o, focusOffset: l }
  );
}
function Xg(r, e, t, n) {
  let s,
    o,
    l = r.state.selection.main;
  if (e > -1) {
    let a = r.docView.domBoundsAround(e, t, 0);
    if (!a || r.state.readOnly) return;
    let { from: c, to: h } = a,
      u = r.docView.impreciseHead || r.docView.impreciseAnchor ? [] : Dg(r),
      f = new Xu(u, r.state);
    f.readRange(a.startDOM, a.endDOM);
    let d = l.from,
      p = null;
    ((r.inputState.lastKeyCode === 8 &&
      r.inputState.lastKeyTime > Date.now() - 100) ||
      (j.android && f.text.length < h - c)) &&
      ((d = l.to), (p = 'end'));
    let m = Zg(r.state.doc.sliceString(c, h, ei), f.text, d - c, p);
    m &&
      (j.chrome &&
        r.inputState.lastKeyCode == 13 &&
        m.toB == m.from + 2 &&
        f.text.slice(m.from, m.toB) == ei + ei &&
        m.toB--,
      (s = {
        from: c + m.from,
        to: c + m.toA,
        insert: K.of(f.text.slice(m.from, m.toB).split(ei)),
      })),
      (o = Ig(u, c));
  } else if (r.hasFocus || !r.state.facet(Wn)) {
    let a = r.observer.selectionRange,
      { impreciseHead: c, impreciseAnchor: h } = r.docView,
      u =
        (c && c.node == a.focusNode && c.offset == a.focusOffset) ||
        !Ni(r.contentDOM, a.focusNode)
          ? r.state.selection.main.head
          : r.docView.posFromDOM(a.focusNode, a.focusOffset),
      f =
        (h && h.node == a.anchorNode && h.offset == a.anchorOffset) ||
        !Ni(r.contentDOM, a.anchorNode)
          ? r.state.selection.main.anchor
          : r.docView.posFromDOM(a.anchorNode, a.anchorOffset);
    (u != l.head || f != l.anchor) && (o = E.single(f, u));
  }
  if (!(!s && !o)) {
    if (
      (!s && n && !l.empty && o && o.main.empty
        ? (s = {
            from: l.from,
            to: l.to,
            insert: r.state.doc.slice(l.from, l.to),
          })
        : s &&
          s.from >= l.from &&
          s.to <= l.to &&
          (s.from != l.from || s.to != l.to) &&
          l.to - l.from - (s.to - s.from) <= 4 &&
          (s = {
            from: l.from,
            to: l.to,
            insert: r.state.doc
              .slice(l.from, s.from)
              .append(s.insert)
              .append(r.state.doc.slice(s.to, l.to)),
          }),
      s)
    ) {
      let a = r.state;
      if (
        (j.ios && r.inputState.flushIOSKey(r)) ||
        (j.android &&
          ((s.from == l.from &&
            s.to == l.to &&
            s.insert.length == 1 &&
            s.insert.lines == 2 &&
            Qn(r.contentDOM, 'Enter', 13)) ||
            (s.from == l.from - 1 &&
              s.to == l.to &&
              s.insert.length == 0 &&
              Qn(r.contentDOM, 'Backspace', 8)) ||
            (s.from == l.from &&
              s.to == l.to + 1 &&
              s.insert.length == 0 &&
              Qn(r.contentDOM, 'Delete', 46))))
      )
        return;
      let c = s.insert.toString();
      if (r.state.facet(Pu).some((f) => f(r, s.from, s.to, c))) return;
      r.inputState.composing >= 0 && r.inputState.composing++;
      let h;
      if (
        s.from >= l.from &&
        s.to <= l.to &&
        s.to - s.from >= (l.to - l.from) / 3 &&
        (!o || (o.main.empty && o.main.from == s.from + s.insert.length)) &&
        r.inputState.composing < 0
      ) {
        let f = l.from < s.from ? a.sliceDoc(l.from, s.from) : '',
          d = l.to > s.to ? a.sliceDoc(s.to, l.to) : '';
        h = a.replaceSelection(
          r.state.toText(
            f + s.insert.sliceString(0, void 0, r.state.lineBreak) + d,
          ),
        );
      } else {
        let f = a.changes(s),
          d =
            o && !a.selection.main.eq(o.main) && o.main.to <= f.newLength
              ? o.main
              : void 0;
        if (
          a.selection.ranges.length > 1 &&
          r.inputState.composing >= 0 &&
          s.to <= l.to &&
          s.to >= l.to - 10
        ) {
          let p = r.state.sliceDoc(s.from, s.to),
            m = Zu(r) || r.state.doc.lineAt(l.head),
            S = l.to - s.to,
            T = l.to - l.from;
          h = a.changeByRange((k) => {
            if (k.from == l.from && k.to == l.to)
              return { changes: f, range: d || k.map(f) };
            let b = k.to - S,
              Q = b - p.length;
            if (
              k.to - k.from != T ||
              r.state.sliceDoc(Q, b) != p ||
              (m && k.to >= m.from && k.from <= m.to)
            )
              return { range: k };
            let v = a.changes({ from: Q, to: b, insert: s.insert }),
              P = k.to - l.to;
            return {
              changes: v,
              range: d
                ? E.range(Math.max(0, d.anchor + P), Math.max(0, d.head + P))
                : k.map(v),
            };
          });
        } else h = { changes: f, selection: d && a.selection.replaceRange(d) };
      }
      let u = 'input.type';
      r.composing &&
        ((u += '.compose'),
        r.inputState.compositionFirstChange &&
          ((u += '.start'), (r.inputState.compositionFirstChange = !1))),
        r.dispatch(h, { scrollIntoView: !0, userEvent: u });
    } else if (o && !o.main.eq(l)) {
      let a = !1,
        c = 'select';
      r.inputState.lastSelectionTime > Date.now() - 50 &&
        (r.inputState.lastSelectionOrigin == 'select' && (a = !0),
        (c = r.inputState.lastSelectionOrigin)),
        r.dispatch({ selection: o, scrollIntoView: a, userEvent: c });
    }
  }
}
function Zg(r, e, t, n) {
  let s = Math.min(r.length, e.length),
    o = 0;
  for (; o < s && r.charCodeAt(o) == e.charCodeAt(o); ) o++;
  if (o == s && r.length == e.length) return null;
  let l = r.length,
    a = e.length;
  for (; l > 0 && a > 0 && r.charCodeAt(l - 1) == e.charCodeAt(a - 1); )
    l--, a--;
  if (n == 'end') {
    let c = Math.max(0, o - Math.min(l, a));
    t -= l + c - o;
  }
  if (l < o && r.length < e.length) {
    let c = t <= o && t >= l ? o - t : 0;
    (o -= c), (a = o + (a - l)), (l = o);
  } else if (a < o) {
    let c = t <= o && t >= a ? o - t : 0;
    (o -= c), (l = o + (l - a)), (a = o);
  }
  return { from: o, toA: l, toB: a };
}
function Dg(r) {
  let e = [];
  if (r.root.activeElement != r.contentDOM) return e;
  let {
    anchorNode: t,
    anchorOffset: n,
    focusNode: s,
    focusOffset: o,
  } = r.observer.selectionRange;
  return (
    t && (e.push(new qa(t, n)), (s != t || o != n) && e.push(new qa(s, o))), e
  );
}
function Ig(r, e) {
  if (r.length == 0) return null;
  let t = r[0].pos,
    n = r.length == 2 ? r[1].pos : t;
  return t > -1 && n > -1 ? E.single(t + e, n + e) : null;
}
class G {
  constructor(e = {}) {
    (this.plugins = []),
      (this.pluginMap = new Map()),
      (this.editorAttrs = {}),
      (this.contentAttrs = {}),
      (this.bidiCache = []),
      (this.destroyed = !1),
      (this.updateState = 2),
      (this.measureScheduled = -1),
      (this.measureRequests = []),
      (this.contentDOM = document.createElement('div')),
      (this.scrollDOM = document.createElement('div')),
      (this.scrollDOM.tabIndex = -1),
      (this.scrollDOM.className = 'cm-scroller'),
      this.scrollDOM.appendChild(this.contentDOM),
      (this.announceDOM = document.createElement('div')),
      (this.announceDOM.style.cssText = 'position: absolute; top: -10000px'),
      this.announceDOM.setAttribute('aria-live', 'polite'),
      (this.dom = document.createElement('div')),
      this.dom.appendChild(this.announceDOM),
      this.dom.appendChild(this.scrollDOM),
      (this._dispatch = e.dispatch || ((t) => this.update([t]))),
      (this.dispatch = this.dispatch.bind(this)),
      (this.root = e.root || _m(e.parent) || document),
      (this.viewState = new fc(e.state || J.create())),
      (this.plugins = this.state.facet(On).map((t) => new Ls(t)));
    for (let t of this.plugins) t.update(this);
    (this.observer = new Lg(
      this,
      (t, n, s) => {
        Xg(this, t, n, s);
      },
      (t) => {
        this.inputState.runScrollHandlers(this, t),
          this.observer.intersecting && this.measure();
      },
    )),
      (this.inputState = new cg(this)),
      (this.docView = new Ga(this)),
      this.mountStyles(),
      this.updateAttrs(),
      (this.updateState = 0),
      this.requestMeasure(),
      e.parent && e.parent.appendChild(this.dom);
  }
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return this.inputState.composing > 0;
  }
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  dispatch(...e) {
    this._dispatch(
      e.length == 1 && e[0] instanceof ke ? e[0] : this.state.update(...e),
    );
  }
  update(e) {
    if (this.updateState != 0)
      throw new Error(
        'Calls to EditorView.update are not allowed while an update is in progress',
      );
    let t = !1,
      n,
      s = this.state;
    for (let l of e) {
      if (l.startState != s)
        throw new RangeError(
          "Trying to update state with a transaction that doesn't start from the previous state.",
        );
      s = l.state;
    }
    if (this.destroyed) {
      this.viewState.state = s;
      return;
    }
    if (s.facet(J.phrases) != this.state.facet(J.phrases))
      return this.setState(s);
    n = new Va(this, s, e);
    let o = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let l of e) {
        if ((o && (o = o.map(l.changes)), l.scrollIntoView)) {
          let { main: a } = l.state.selection;
          o = new Zi(
            a.empty ? a : E.cursor(a.head, a.head > a.anchor ? -1 : 1),
          );
        }
        for (let a of l.effects)
          a.is(Zo)
            ? (o = new Zi(a.value))
            : a.is(Ru)
            ? (o = new Zi(a.value, 'center'))
            : a.is(Ua) && (o = a.value);
      }
      this.viewState.update(n, o),
        (this.bidiCache = Wr.update(this.bidiCache, n.changes)),
        n.empty || (this.updatePlugins(n), this.inputState.update(n)),
        (t = this.docView.update(n)),
        this.state.facet(mn) != this.styleModules && this.mountStyles(),
        this.updateAttrs(),
        this.showAnnouncements(e),
        this.docView.updateSelection(
          t,
          e.some((l) => l.isUserEvent('select.pointer')),
        );
    } finally {
      this.updateState = 0;
    }
    if (
      (n.startState.facet(er) != n.state.facet(er) &&
        (this.viewState.mustMeasureContent = !0),
      (t ||
        o ||
        this.viewState.mustEnforceCursorAssoc ||
        this.viewState.mustMeasureContent) &&
        this.requestMeasure(),
      !n.empty)
    )
      for (let l of this.state.facet(Xo)) l(n);
  }
  setState(e) {
    if (this.updateState != 0)
      throw new Error(
        'Calls to EditorView.setState are not allowed while an update is in progress',
      );
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let n of this.plugins) n.destroy(this);
      (this.viewState = new fc(e)),
        (this.plugins = e.facet(On).map((n) => new Ls(n))),
        this.pluginMap.clear();
      for (let n of this.plugins) n.update(this);
      (this.docView = new Ga(this)),
        this.inputState.ensureHandlers(this),
        this.mountStyles(),
        this.updateAttrs(),
        (this.bidiCache = []);
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(On),
      n = e.state.facet(On);
    if (t != n) {
      let s = [];
      for (let o of n) {
        let l = t.indexOf(o);
        if (l < 0) s.push(new Ls(o));
        else {
          let a = this.plugins[l];
          (a.mustUpdate = e), s.push(a);
        }
      }
      for (let o of this.plugins) o.mustUpdate != e && o.destroy(this);
      (this.plugins = s),
        this.pluginMap.clear(),
        this.inputState.ensureHandlers(this);
    } else for (let s of this.plugins) s.mustUpdate = e;
    for (let s = 0; s < this.plugins.length; s++) this.plugins[s].update(this);
  }
  measure(e = !0) {
    if (this.destroyed) return;
    this.measureScheduled > -1 && cancelAnimationFrame(this.measureScheduled),
      (this.measureScheduled = 0),
      e && this.observer.flush();
    let t = null;
    try {
      for (let n = 0; ; n++) {
        this.updateState = 1;
        let s = this.viewport,
          o = this.viewState.measure(this);
        if (
          !o &&
          !this.measureRequests.length &&
          this.viewState.scrollTarget == null
        )
          break;
        if (n > 5) {
          console.warn(
            this.measureRequests.length
              ? 'Measure loop restarted more than 5 times'
              : 'Viewport failed to stabilize',
          );
          break;
        }
        let l = [];
        o & 4 || ([this.measureRequests, l] = [l, this.measureRequests]);
        let a = l.map((f) => {
            try {
              return f.read(this);
            } catch (d) {
              return ii(this.state, d), gc;
            }
          }),
          c = new Va(this, this.state),
          h = !1,
          u = !1;
        (c.flags |= o),
          t ? (t.flags |= o) : (t = c),
          (this.updateState = 2),
          c.empty ||
            (this.updatePlugins(c),
            this.inputState.update(c),
            this.updateAttrs(),
            (h = this.docView.update(c)));
        for (let f = 0; f < l.length; f++)
          if (a[f] != gc)
            try {
              let d = l[f];
              d.write && d.write(a[f], this);
            } catch (d) {
              ii(this.state, d);
            }
        if (
          (this.viewState.scrollTarget &&
            (this.docView.scrollIntoView(this.viewState.scrollTarget),
            (this.viewState.scrollTarget = null),
            (u = !0)),
          h && this.docView.updateSelection(!0),
          this.viewport.from == s.from &&
            this.viewport.to == s.to &&
            !u &&
            this.measureRequests.length == 0)
        )
          break;
      }
    } finally {
      (this.updateState = 0), (this.measureScheduled = -1);
    }
    if (t && !t.empty) for (let n of this.state.facet(Xo)) n(t);
  }
  get themeClasses() {
    return (
      No + ' ' + (this.state.facet(zo) ? Gu : qu) + ' ' + this.state.facet(er)
    );
  }
  updateAttrs() {
    let e = bc(this, Wu, {
        class:
          'cm-editor' +
          (this.hasFocus ? ' cm-focused ' : ' ') +
          this.themeClasses,
      }),
      t = {
        spellcheck: 'false',
        autocorrect: 'off',
        autocapitalize: 'off',
        translate: 'no',
        contenteditable: this.state.facet(Wn) ? 'true' : 'false',
        class: 'cm-content',
        style: `${j.tabSize}: ${this.state.tabSize}`,
        role: 'textbox',
        'aria-multiline': 'true',
      };
    this.state.readOnly && (t['aria-readonly'] = 'true'),
      bc(this, Au, t),
      this.observer.ignore(() => {
        Lo(this.contentDOM, this.contentAttrs, t),
          Lo(this.dom, this.editorAttrs, e);
      }),
      (this.editorAttrs = e),
      (this.contentAttrs = t);
  }
  showAnnouncements(e) {
    let t = !0;
    for (let n of e)
      for (let s of n.effects)
        if (s.is(G.announce)) {
          t && (this.announceDOM.textContent = ''), (t = !1);
          let o = this.announceDOM.appendChild(document.createElement('div'));
          o.textContent = s.value;
        }
  }
  mountStyles() {
    (this.styleModules = this.state.facet(mn)),
      ni.mount(this.root, this.styleModules.concat(Ag).reverse());
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error(
        "Reading the editor layout isn't allowed during an update",
      );
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  requestMeasure(e) {
    if (
      (this.measureScheduled < 0 &&
        (this.measureScheduled = requestAnimationFrame(() => this.measure())),
      e)
    ) {
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  pluginField(e) {
    let t = [];
    for (let n of this.plugins) n.update(this).takeField(e, t);
    return t;
  }
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (
      (t === void 0 || (t && t.spec != e)) &&
        this.pluginMap.set(
          e,
          (t = this.plugins.find((n) => n.spec == e) || null),
        ),
      t && t.update(this).value
    );
  }
  get documentTop() {
    return (
      this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop
    );
  }
  get documentPadding() {
    return {
      top: this.viewState.paddingTop,
      bottom: this.viewState.paddingBottom,
    };
  }
  blockAtHeight(e, t) {
    let n = Is(t, this);
    return this.elementAtHeight(e - n).moveY(n);
  }
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  visualLineAtHeight(e, t) {
    let n = Is(t, this);
    return this.lineBlockAtHeight(e - n).moveY(n);
  }
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  viewportLines(e, t) {
    let n = Is(t, this);
    for (let s of this.viewportLineBlocks) e(s.moveY(n));
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  visualLineAt(e, t = 0) {
    return this.lineBlockAt(e).moveY(t + this.viewState.paddingTop);
  }
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(e, t, n) {
    return Xs(this, e, tc(this, e, t, n));
  }
  moveByGroup(e, t) {
    return Xs(
      this,
      e,
      tc(this, e, t, (n) => lg(this, e.head, n)),
    );
  }
  moveToLineBoundary(e, t, n = !0) {
    return og(this, e, t, n);
  }
  moveVertically(e, t, n) {
    return Xs(this, e, ag(this, e, t, n));
  }
  scrollPosIntoView(e) {
    this.dispatch({ effects: Zo.of(E.cursor(e)) });
  }
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    return this.readMeasured(), Iu(this, e, t);
  }
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let n = this.docView.coordsAt(e, t);
    if (!n || n.left == n.right) return n;
    let s = this.state.doc.lineAt(e),
      o = this.bidiSpans(s),
      l = o[ji.find(o, e - s.from, -1, t)];
    return Hr(n, (l.dir == ne.LTR) == t > 0);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.heightOracle.direction;
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(e) {
    if (e.length > Mg) return Lu(e.length);
    let t = this.textDirection;
    for (let s of this.bidiCache)
      if (s.from == e.from && s.dir == t) return s.order;
    let n = Ym(e.text, this.textDirection);
    return this.bidiCache.push(new Wr(e.from, e.to, t, n)), n;
  }
  get hasFocus() {
    var e;
    return (
      (document.hasFocus() ||
        (j.safari &&
          ((e = this.inputState) === null || e === void 0
            ? void 0
            : e.lastContextMenu) >
            Date.now() - 3e4)) &&
      this.root.activeElement == this.contentDOM
    );
  }
  focus() {
    this.observer.ignore(() => {
      uu(this.contentDOM), this.docView.updateSelection();
    });
  }
  destroy() {
    for (let e of this.plugins) e.destroy(this);
    (this.plugins = []),
      this.inputState.destroy(),
      this.dom.remove(),
      this.observer.destroy(),
      this.measureScheduled > -1 && cancelAnimationFrame(this.measureScheduled),
      (this.destroyed = !0);
  }
  static scrollIntoView(e, t = {}) {
    return Ua.of(
      new Zi(
        typeof e == 'number' ? E.cursor(e) : e,
        t.y,
        t.x,
        t.yMargin,
        t.xMargin,
      ),
    );
  }
  static domEventHandlers(e) {
    return ht.define(() => ({}), { eventHandlers: e });
  }
  static theme(e, t) {
    let n = ni.newName(),
      s = [er.of(n), mn.of(Bo(`.${n}`, e))];
    return t && t.dark && s.push(zo.of(!0)), s;
  }
  static baseTheme(e) {
    return pl.lowest(mn.of(Bo('.' + No, e, Fu)));
  }
}
G.scrollTo = Zo;
G.centerOn = Ru;
G.styleModule = mn;
G.inputHandler = Pu;
G.exceptionSink = Tu;
G.updateListener = Xo;
G.editable = Wn;
G.mouseSelectionStyle = wu;
G.dragMovesSelection = ku;
G.clickAddsSelectionRange = $u;
G.decorations = gi;
G.darkTheme = zo;
G.contentAttributes = Au;
G.editorAttributes = Wu;
G.lineWrapping = G.contentAttributes.of({ class: 'cm-lineWrapping' });
G.announce = te.define();
const Mg = 4096;
function Is(r, e) {
  return (
    (r ?? e.contentDOM.getBoundingClientRect().top) + e.viewState.paddingTop
  );
}
const gc = {};
class Wr {
  constructor(e, t, n, s) {
    (this.from = e), (this.to = t), (this.dir = n), (this.order = s);
  }
  static update(e, t) {
    if (t.empty) return e;
    let n = [],
      s = e.length ? e[e.length - 1].dir : ne.LTR;
    for (let o = Math.max(0, e.length - 10); o < e.length; o++) {
      let l = e[o];
      l.dir == s &&
        !t.touchesRange(l.from, l.to) &&
        n.push(new Wr(t.mapPos(l.from, 1), t.mapPos(l.to, -1), l.dir, l.order));
    }
    return n;
  }
}
function bc(r, e, t) {
  for (let n = r.state.facet(e), s = n.length - 1; s >= 0; s--) {
    let o = n[s],
      l = typeof o == 'function' ? o(r) : o;
    l && Eo(l, t);
  }
  return t;
}
const jg = j.mac ? 'mac' : j.windows ? 'win' : j.linux ? 'linux' : 'key';
function zg(r, e) {
  const t = r.split(/-(?!$)/);
  let n = t[t.length - 1];
  n == 'Space' && (n = ' ');
  let s, o, l, a;
  for (let c = 0; c < t.length - 1; ++c) {
    const h = t[c];
    if (/^(cmd|meta|m)$/i.test(h)) a = !0;
    else if (/^a(lt)?$/i.test(h)) s = !0;
    else if (/^(c|ctrl|control)$/i.test(h)) o = !0;
    else if (/^s(hift)?$/i.test(h)) l = !0;
    else if (/^mod$/i.test(h)) e == 'mac' ? (a = !0) : (o = !0);
    else throw new Error('Unrecognized modifier name: ' + h);
  }
  return (
    s && (n = 'Alt-' + n),
    o && (n = 'Ctrl-' + n),
    a && (n = 'Meta-' + n),
    l && (n = 'Shift-' + n),
    n
  );
}
function Ms(r, e, t) {
  return (
    e.altKey && (r = 'Alt-' + r),
    e.ctrlKey && (r = 'Ctrl-' + r),
    e.metaKey && (r = 'Meta-' + r),
    t !== !1 && e.shiftKey && (r = 'Shift-' + r),
    r
  );
}
const Ng = G.domEventHandlers({
    keydown(r, e) {
      return Yg(Bg(e.state), r, e, 'editor');
    },
  }),
  Ar = U.define({ enables: Ng }),
  yc = new WeakMap();
function Bg(r) {
  let e = r.facet(Ar),
    t = yc.get(e);
  return t || yc.set(e, (t = Vg(e.reduce((n, s) => n.concat(s), [])))), t;
}
let Jt = null;
const Ug = 4e3;
function Vg(r, e = jg) {
  let t = Object.create(null),
    n = Object.create(null),
    s = (l, a) => {
      let c = n[l];
      if (c == null) n[l] = a;
      else if (c != a)
        throw new Error(
          'Key binding ' +
            l +
            ' is used both as a regular binding and as a multi-stroke prefix',
        );
    },
    o = (l, a, c, h) => {
      let u = t[l] || (t[l] = Object.create(null)),
        f = a.split(/ (?!$)/).map((m) => zg(m, e));
      for (let m = 1; m < f.length; m++) {
        let S = f.slice(0, m).join(' ');
        s(S, !0),
          u[S] ||
            (u[S] = {
              preventDefault: !0,
              commands: [
                (T) => {
                  let k = (Jt = { view: T, prefix: S, scope: l });
                  return (
                    setTimeout(() => {
                      Jt == k && (Jt = null);
                    }, Ug),
                    !0
                  );
                },
              ],
            });
      }
      let d = f.join(' ');
      s(d, !1);
      let p = u[d] || (u[d] = { preventDefault: !1, commands: [] });
      p.commands.push(c), h && (p.preventDefault = !0);
    };
  for (let l of r) {
    let a = l[e] || l.key;
    if (!!a)
      for (let c of l.scope ? l.scope.split(' ') : ['editor'])
        o(c, a, l.run, l.preventDefault),
          l.shift && o(c, 'Shift-' + a, l.shift, l.preventDefault);
  }
  return t;
}
function Yg(r, e, t, n) {
  let s = Cm(e),
    o = s.length == 1 && s != ' ',
    l = '',
    a = !1;
  Jt &&
    Jt.view == t &&
    Jt.scope == n &&
    ((l = Jt.prefix + ' '), (a = ju.indexOf(e.keyCode) < 0) && (Jt = null));
  let c = (f) => {
      if (f) {
        for (let d of f.commands) if (d(t)) return !0;
        f.preventDefault && (a = !0);
      }
      return !1;
    },
    h = r[n],
    u;
  if (h) {
    if (c(h[l + Ms(s, e, !o)])) return !0;
    if (
      o &&
      (e.shiftKey || e.altKey || e.metaKey) &&
      (u = ri[e.keyCode]) &&
      u != s
    ) {
      if (c(h[l + Ms(u, e, !0)])) return !0;
    } else if (o && e.shiftKey && c(h[l + Ms(s, e, !0)])) return !0;
  }
  return a;
}
const qg = !j.ios,
  Gg = {
    '.cm-line': {
      '& ::selection': { backgroundColor: 'transparent !important' },
      '&::selection': { backgroundColor: 'transparent !important' },
    },
  };
qg && (Gg['.cm-line'].caretColor = 'transparent !important');
function Qc(r, e, t, n, s) {
  e.lastIndex = 0;
  for (let o = r.iterRange(t, n), l = t, a; !o.next().done; l += o.value.length)
    if (!o.lineBreak)
      for (; (a = e.exec(o.value)); )
        s(l + a.index, l + a.index + a[0].length, a);
}
function Fg(r, e) {
  let t = r.visibleRanges;
  if (t.length == 1 && t[0].from == r.viewport.from && t[0].to == r.viewport.to)
    return t;
  let n = [];
  for (let { from: s, to: o } of t)
    (s = Math.max(r.state.doc.lineAt(s).from, s - e)),
      (o = Math.min(r.state.doc.lineAt(o).to, o + e)),
      n.length && n[n.length - 1].to >= s
        ? (n[n.length - 1].to = o)
        : n.push({ from: s, to: o });
  return n;
}
class Hg {
  constructor(e) {
    let { regexp: t, decoration: n, boundary: s, maxLength: o = 1e3 } = e;
    if (!t.global)
      throw new RangeError(
        "The regular expression given to MatchDecorator should have its 'g' flag set",
      );
    (this.regexp = t),
      (this.getDeco = typeof n == 'function' ? n : () => n),
      (this.boundary = s),
      (this.maxLength = o);
  }
  createDeco(e) {
    let t = new zi();
    for (let { from: n, to: s } of Fg(e, this.maxLength))
      Qc(e.state.doc, this.regexp, n, s, (o, l, a) =>
        t.add(o, l, this.getDeco(a, e, o)),
      );
    return t.finish();
  }
  updateDeco(e, t) {
    let n = 1e9,
      s = -1;
    return (
      e.docChanged &&
        e.changes.iterChanges((o, l, a, c) => {
          c > e.view.viewport.from &&
            a < e.view.viewport.to &&
            ((n = Math.min(a, n)), (s = Math.max(c, s)));
        }),
      e.viewportChanged || s - n > 1e3
        ? this.createDeco(e.view)
        : s > -1
        ? this.updateRange(e.view, t.map(e.changes), n, s)
        : t
    );
  }
  updateRange(e, t, n, s) {
    for (let o of e.visibleRanges) {
      let l = Math.max(o.from, n),
        a = Math.min(o.to, s);
      if (a > l) {
        let c = e.state.doc.lineAt(l),
          h = c.to < a ? e.state.doc.lineAt(a) : c,
          u = Math.max(o.from, c.from),
          f = Math.min(o.to, h.to);
        if (this.boundary) {
          for (; l > c.from; l--)
            if (this.boundary.test(c.text[l - 1 - c.from])) {
              u = l;
              break;
            }
          for (; a < h.to; a++)
            if (this.boundary.test(h.text[a - h.from])) {
              f = a;
              break;
            }
        }
        let d = [],
          p;
        if (c == h)
          for (
            this.regexp.lastIndex = u - c.from;
            (p = this.regexp.exec(c.text)) && p.index < f - c.from;

          ) {
            let m = p.index + c.from;
            d.push(this.getDeco(p, e, m).range(m, m + p[0].length));
          }
        else
          Qc(e.state.doc, this.regexp, u, f, (m, S, T) =>
            d.push(this.getDeco(T, e, m).range(m, S)),
          );
        t = t.update({
          filterFrom: u,
          filterTo: f,
          filter: (m, S) => m < u || S > f,
          add: d,
        });
      }
    }
    return t;
  }
}
const Uo = /x/.unicode != null ? 'gu' : 'g',
  Jg = new RegExp(
    `[\0-\b
-\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\uFEFF\uFFF9-\uFFFC]`,
    Uo,
  ),
  Kg = {
    0: 'null',
    7: 'bell',
    8: 'backspace',
    10: 'newline',
    11: 'vertical tab',
    13: 'carriage return',
    27: 'escape',
    8203: 'zero width space',
    8204: 'zero width non-joiner',
    8205: 'zero width joiner',
    8206: 'left-to-right mark',
    8207: 'right-to-left mark',
    8232: 'line separator',
    8237: 'left-to-right override',
    8238: 'right-to-left override',
    8233: 'paragraph separator',
    65279: 'zero width no-break space',
    65532: 'object replacement',
  };
let js = null;
function e0() {
  var r;
  if (js == null && typeof document < 'u' && document.body) {
    let e = document.body.style;
    js = ((r = e.tabSize) !== null && r !== void 0 ? r : e.MozTabSize) != null;
  }
  return js || !1;
}
const mr = U.define({
  combine(r) {
    let e = Fr(r, { render: null, specialChars: Jg, addSpecialChars: null });
    return (
      (e.replaceTabs = !e0()) &&
        (e.specialChars = new RegExp('	|' + e.specialChars.source, Uo)),
      e.addSpecialChars &&
        (e.specialChars = new RegExp(
          e.specialChars.source + '|' + e.addSpecialChars.source,
          Uo,
        )),
      e
    );
  },
});
function t0(r = {}) {
  return [mr.of(r), i0()];
}
let xc = null;
function i0() {
  return (
    xc ||
    (xc = ht.fromClass(
      class {
        constructor(r) {
          (this.view = r),
            (this.decorations = q.none),
            (this.decorationCache = Object.create(null)),
            (this.decorator = this.makeDecorator(r.state.facet(mr))),
            (this.decorations = this.decorator.createDeco(r));
        }
        makeDecorator(r) {
          return new Hg({
            regexp: r.specialChars,
            decoration: (e, t, n) => {
              let { doc: s } = t.state,
                o = Xt(e[0], 0);
              if (o == 9) {
                let l = s.lineAt(n),
                  a = t.state.tabSize,
                  c = qr(l.text, a, n - l.from);
                return q.replace({
                  widget: new o0(
                    (a - (c % a)) * this.view.defaultCharacterWidth,
                  ),
                });
              }
              return (
                this.decorationCache[o] ||
                (this.decorationCache[o] = q.replace({ widget: new s0(r, o) }))
              );
            },
            boundary: r.replaceTabs ? void 0 : /[^]/,
          });
        }
        update(r) {
          let e = r.state.facet(mr);
          r.startState.facet(mr) != e
            ? ((this.decorator = this.makeDecorator(e)),
              (this.decorations = this.decorator.createDeco(r.view)))
            : (this.decorations = this.decorator.updateDeco(
                r,
                this.decorations,
              ));
        }
      },
      { decorations: (r) => r.decorations },
    ))
  );
}
const n0 = '\u2022';
function r0(r) {
  return r >= 32 ? n0 : r == 10 ? '\u2424' : String.fromCharCode(9216 + r);
}
class s0 extends Ti {
  constructor(e, t) {
    super(), (this.options = e), (this.code = t);
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = r0(this.code),
      n =
        e.state.phrase('Control character') +
        ' ' +
        (Kg[this.code] || '0x' + this.code.toString(16)),
      s = this.options.render && this.options.render(this.code, n, t);
    if (s) return s;
    let o = document.createElement('span');
    return (
      (o.textContent = t),
      (o.title = n),
      o.setAttribute('aria-label', n),
      (o.className = 'cm-specialChar'),
      o
    );
  }
  ignoreEvent() {
    return !1;
  }
}
class o0 extends Ti {
  constructor(e) {
    super(), (this.width = e);
  }
  eq(e) {
    return e.width == this.width;
  }
  toDOM() {
    let e = document.createElement('span');
    return (
      (e.textContent = '	'),
      (e.className = 'cm-tab'),
      (e.style.width = this.width + 'px'),
      e
    );
  }
  ignoreEvent() {
    return !1;
  }
}
function l0() {
  return c0;
}
const a0 = q.line({ class: 'cm-activeLine' }),
  c0 = ht.fromClass(
    class {
      constructor(r) {
        this.decorations = this.getDeco(r);
      }
      update(r) {
        (r.docChanged || r.selectionSet) &&
          (this.decorations = this.getDeco(r.view));
      }
      getDeco(r) {
        let e = -1,
          t = [];
        for (let n of r.state.selection.ranges) {
          if (!n.empty) return q.none;
          let s = r.lineBlockAt(n.head);
          s.from > e && (t.push(a0.range(s.from)), (e = s.from));
        }
        return q.set(t);
      }
    },
    { decorations: (r) => r.decorations },
  ),
  Hu = 1024;
let h0 = 0;
class tt {
  constructor(e, t) {
    (this.from = e), (this.to = t);
  }
}
class B {
  constructor(e = {}) {
    (this.id = h0++),
      (this.perNode = !!e.perNode),
      (this.deserialize =
        e.deserialize ||
        (() => {
          throw new Error(
            "This node type doesn't define a deserialize function",
          );
        }));
  }
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return (
      typeof e != 'function' && (e = Ue.match(e)),
      (t) => {
        let n = e(t);
        return n === void 0 ? null : [this, n];
      }
    );
  }
}
B.closedBy = new B({ deserialize: (r) => r.split(' ') });
B.openedBy = new B({ deserialize: (r) => r.split(' ') });
B.group = new B({ deserialize: (r) => r.split(' ') });
B.contextHash = new B({ perNode: !0 });
B.lookAhead = new B({ perNode: !0 });
B.mounted = new B({ perNode: !0 });
class u0 {
  constructor(e, t, n) {
    (this.tree = e), (this.overlay = t), (this.parser = n);
  }
}
const f0 = Object.create(null);
class Ue {
  constructor(e, t, n, s = 0) {
    (this.name = e), (this.props = t), (this.id = n), (this.flags = s);
  }
  static define(e) {
    let t = e.props && e.props.length ? Object.create(null) : f0,
      n =
        (e.top ? 1 : 0) |
        (e.skipped ? 2 : 0) |
        (e.error ? 4 : 0) |
        (e.name == null ? 8 : 0),
      s = new Ue(e.name || '', t, e.id, n);
    if (e.props) {
      for (let o of e.props)
        if ((Array.isArray(o) || (o = o(s)), o)) {
          if (o[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[o[0].id] = o[1];
        }
    }
    return s;
  }
  prop(e) {
    return this.props[e.id];
  }
  get isTop() {
    return (this.flags & 1) > 0;
  }
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  get isError() {
    return (this.flags & 4) > 0;
  }
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  is(e) {
    if (typeof e == 'string') {
      if (this.name == e) return !0;
      let t = this.prop(B.group);
      return t ? t.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  static match(e) {
    let t = Object.create(null);
    for (let n in e) for (let s of n.split(' ')) t[s] = e[n];
    return (n) => {
      for (let s = n.prop(B.group), o = -1; o < (s ? s.length : 0); o++) {
        let l = t[o < 0 ? n.name : s[o]];
        if (l) return l;
      }
    };
  }
}
Ue.none = new Ue('', Object.create(null), 0, 8);
class xl {
  constructor(e) {
    this.types = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].id != t)
        throw new RangeError(
          'Node type ids should correspond to array positions when creating a node set',
        );
  }
  extend(...e) {
    let t = [];
    for (let n of this.types) {
      let s = null;
      for (let o of e) {
        let l = o(n);
        l && (s || (s = Object.assign({}, n.props)), (s[l[0].id] = l[1]));
      }
      t.push(s ? new Ue(n.name, s, n.id, n.flags) : n);
    }
    return new xl(t);
  }
}
const tr = new WeakMap(),
  vc = new WeakMap();
class ue {
  constructor(e, t, n, s, o) {
    if (
      ((this.type = e),
      (this.children = t),
      (this.positions = n),
      (this.length = s),
      (this.props = null),
      o && o.length)
    ) {
      this.props = Object.create(null);
      for (let [l, a] of o) this.props[typeof l == 'number' ? l : l.id] = a;
    }
  }
  toString() {
    let e = this.prop(B.mounted);
    if (e && !e.overlay) return e.tree.toString();
    let t = '';
    for (let n of this.children) {
      let s = n.toString();
      s && (t && (t += ','), (t += s));
    }
    return this.type.name
      ? (/\W/.test(this.type.name) && !this.type.isError
          ? JSON.stringify(this.type.name)
          : this.type.name) + (t.length ? '(' + t + ')' : '')
      : t;
  }
  cursor(e, t = 0) {
    let n = (e != null && tr.get(this)) || this.topNode,
      s = new wn(n);
    return e != null && (s.moveTo(e, t), tr.set(this, s._tree)), s;
  }
  fullCursor() {
    return new wn(this.topNode, 1);
  }
  get topNode() {
    return new $t(this, 0, 0, null);
  }
  resolve(e, t = 0) {
    let n = Ui(tr.get(this) || this.topNode, e, t, !1);
    return tr.set(this, n), n;
  }
  resolveInner(e, t = 0) {
    let n = Ui(vc.get(this) || this.topNode, e, t, !0);
    return vc.set(this, n), n;
  }
  iterate(e) {
    let { enter: t, leave: n, from: s = 0, to: o = this.length } = e;
    for (let l = this.cursor(), a = () => l.node; ; ) {
      let c = !1;
      if (
        l.from <= o &&
        l.to >= s &&
        (l.type.isAnonymous || t(l.type, l.from, l.to, a) !== !1)
      ) {
        if (l.firstChild()) continue;
        l.type.isAnonymous || (c = !0);
      }
      for (
        ;
        c && n && n(l.type, l.from, l.to, a),
          (c = l.type.isAnonymous),
          !l.nextSibling();

      ) {
        if (!l.parent()) return;
        c = !0;
      }
    }
  }
  prop(e) {
    return e.perNode
      ? this.props
        ? this.props[e.id]
        : void 0
      : this.type.prop(e);
  }
  get propValues() {
    let e = [];
    if (this.props) for (let t in this.props) e.push([+t, this.props[t]]);
    return e;
  }
  balance(e = {}) {
    return this.children.length <= 8
      ? this
      : $l(
          Ue.none,
          this.children,
          this.positions,
          0,
          this.children.length,
          0,
          this.length,
          (t, n, s) => new ue(this.type, t, n, s, this.propValues),
          e.makeTree || ((t, n, s) => new ue(Ue.none, t, n, s)),
        );
  }
  static build(e) {
    return p0(e);
  }
}
ue.empty = new ue(Ue.none, [], [], 0);
class vl {
  constructor(e, t) {
    (this.buffer = e), (this.index = t);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new vl(this.buffer, this.index);
  }
}
class Pi {
  constructor(e, t, n) {
    (this.buffer = e), (this.length = t), (this.set = n);
  }
  get type() {
    return Ue.none;
  }
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; )
      e.push(this.childString(t)), (t = this.buffer[t + 3]);
    return e.join(',');
  }
  childString(e) {
    let t = this.buffer[e],
      n = this.buffer[e + 3],
      s = this.set.types[t],
      o = s.name;
    if (
      (/\W/.test(o) && !s.isError && (o = JSON.stringify(o)), (e += 4), n == e)
    )
      return o;
    let l = [];
    for (; e < n; ) l.push(this.childString(e)), (e = this.buffer[e + 3]);
    return o + '(' + l.join(',') + ')';
  }
  findChild(e, t, n, s, o) {
    let { buffer: l } = this,
      a = -1;
    for (
      let c = e;
      c != t && !(Ju(o, s, l[c + 1], l[c + 2]) && ((a = c), n > 0));
      c = l[c + 3]
    );
    return a;
  }
  slice(e, t, n, s) {
    let o = this.buffer,
      l = new Uint16Array(t - e);
    for (let a = e, c = 0; a < t; )
      (l[c++] = o[a++]),
        (l[c++] = o[a++] - n),
        (l[c++] = o[a++] - n),
        (l[c++] = o[a++] - e);
    return new Pi(l, s - n, this.set);
  }
}
function Ju(r, e, t, n) {
  switch (r) {
    case -2:
      return t < e;
    case -1:
      return n >= e && t < e;
    case 0:
      return t < e && n > e;
    case 1:
      return t <= e && n > e;
    case 2:
      return n > e;
    case 4:
      return !0;
  }
}
function Ku(r, e) {
  let t = r.childBefore(e);
  for (; t; ) {
    let n = t.lastChild;
    if (!n || n.to != t.to) break;
    n.type.isError && n.from == n.to ? ((r = t), (t = n.prevSibling)) : (t = n);
  }
  return r;
}
function Ui(r, e, t, n) {
  for (
    var s;
    r.from == r.to ||
    (t < 1 ? r.from >= e : r.from > e) ||
    (t > -1 ? r.to <= e : r.to < e);

  ) {
    let o = !n && r instanceof $t && r.index < 0 ? null : r.parent;
    if (!o) return r;
    r = o;
  }
  if (n)
    for (let o = r, l = o.parent; l; o = l, l = o.parent)
      o instanceof $t &&
        o.index < 0 &&
        ((s = l.enter(e, t, !0)) === null || s === void 0 ? void 0 : s.from) !=
          o.from &&
        (r = l);
  for (;;) {
    let o = r.enter(e, t, n);
    if (!o) return r;
    r = o;
  }
}
class $t {
  constructor(e, t, n, s) {
    (this.node = e), (this._from = t), (this.index = n), (this._parent = s);
  }
  get type() {
    return this.node.type;
  }
  get name() {
    return this.node.type.name;
  }
  get from() {
    return this._from;
  }
  get to() {
    return this._from + this.node.length;
  }
  nextChild(e, t, n, s, o = 0) {
    for (let l = this; ; ) {
      for (
        let { children: a, positions: c } = l.node, h = t > 0 ? a.length : -1;
        e != h;
        e += t
      ) {
        let u = a[e],
          f = c[e] + l._from;
        if (!!Ju(s, n, f, f + u.length)) {
          if (u instanceof Pi) {
            if (o & 2) continue;
            let d = u.findChild(0, u.buffer.length, t, n - f, s);
            if (d > -1) return new ti(new d0(l, u, e, f), null, d);
          } else if (o & 1 || !u.type.isAnonymous || Sl(u)) {
            let d;
            if (!(o & 1) && u.props && (d = u.prop(B.mounted)) && !d.overlay)
              return new $t(d.tree, f, e, l);
            let p = new $t(u, f, e, l);
            return o & 1 || !p.type.isAnonymous
              ? p
              : p.nextChild(t < 0 ? u.children.length - 1 : 0, t, n, s);
          }
        }
      }
      if (
        o & 1 ||
        !l.type.isAnonymous ||
        (l.index >= 0
          ? (e = l.index + t)
          : (e = t < 0 ? -1 : l._parent.node.children.length),
        (l = l._parent),
        !l)
      )
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4);
  }
  get lastChild() {
    return this.nextChild(this.node.children.length - 1, -1, 0, 4);
  }
  childAfter(e) {
    return this.nextChild(0, 1, e, 2);
  }
  childBefore(e) {
    return this.nextChild(this.node.children.length - 1, -1, e, -2);
  }
  enter(e, t, n = !0, s = !0) {
    let o;
    if (n && (o = this.node.prop(B.mounted)) && o.overlay) {
      let l = e - this.from;
      for (let { from: a, to: c } of o.overlay)
        if ((t > 0 ? a <= l : a < l) && (t < 0 ? c >= l : c > l))
          return new $t(o.tree, o.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, s ? 0 : 2);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; ) e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0
      ? this._parent.nextChild(this.index + 1, 1, 0, 4)
      : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0
      ? this._parent.nextChild(this.index - 1, -1, 0, 4)
      : null;
  }
  get cursor() {
    return new wn(this);
  }
  get tree() {
    return this.node;
  }
  toTree() {
    return this.node;
  }
  resolve(e, t = 0) {
    return Ui(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return Ui(this, e, t, !0);
  }
  enterUnfinishedNodesBefore(e) {
    return Ku(this, e);
  }
  getChild(e, t = null, n = null) {
    let s = Er(this, e, t, n);
    return s.length ? s[0] : null;
  }
  getChildren(e, t = null, n = null) {
    return Er(this, e, t, n);
  }
  toString() {
    return this.node.toString();
  }
}
function Er(r, e, t, n) {
  let s = r.cursor,
    o = [];
  if (!s.firstChild()) return o;
  if (t != null) {
    for (; !s.type.is(t); ) if (!s.nextSibling()) return o;
  }
  for (;;) {
    if (n != null && s.type.is(n)) return o;
    if ((s.type.is(e) && o.push(s.node), !s.nextSibling()))
      return n == null ? o : [];
  }
}
class d0 {
  constructor(e, t, n, s) {
    (this.parent = e), (this.buffer = t), (this.index = n), (this.start = s);
  }
}
class ti {
  constructor(e, t, n) {
    (this.context = e),
      (this._parent = t),
      (this.index = n),
      (this.type = e.buffer.set.types[e.buffer.buffer[n]]);
  }
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  child(e, t, n) {
    let { buffer: s } = this.context,
      o = s.findChild(
        this.index + 4,
        s.buffer[this.index + 3],
        e,
        t - this.context.start,
        n,
      );
    return o < 0 ? null : new ti(this.context, this, o);
  }
  get firstChild() {
    return this.child(1, 0, 4);
  }
  get lastChild() {
    return this.child(-1, 0, 4);
  }
  childAfter(e) {
    return this.child(1, e, 2);
  }
  childBefore(e) {
    return this.child(-1, e, -2);
  }
  enter(e, t, n, s = !0) {
    if (!s) return null;
    let { buffer: o } = this.context,
      l = o.findChild(
        this.index + 4,
        o.buffer[this.index + 3],
        t > 0 ? 1 : -1,
        e - this.context.start,
        t,
      );
    return l < 0 ? null : new ti(this.context, this, l);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent
      ? null
      : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
  }
  get nextSibling() {
    let { buffer: e } = this.context,
      t = e.buffer[this.index + 3];
    return t <
      (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length)
      ? new ti(this.context, this._parent, t)
      : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context,
      t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t
      ? this.externalSibling(-1)
      : new ti(
          this.context,
          this._parent,
          e.findChild(t, this.index, -1, 0, 4),
        );
  }
  get cursor() {
    return new wn(this);
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [],
      t = [],
      { buffer: n } = this.context,
      s = this.index + 4,
      o = n.buffer[this.index + 3];
    if (o > s) {
      let l = n.buffer[this.index + 1],
        a = n.buffer[this.index + 2];
      e.push(n.slice(s, o, l, a)), t.push(0);
    }
    return new ue(this.type, e, t, this.to - this.from);
  }
  resolve(e, t = 0) {
    return Ui(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return Ui(this, e, t, !0);
  }
  enterUnfinishedNodesBefore(e) {
    return Ku(this, e);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
  getChild(e, t = null, n = null) {
    let s = Er(this, e, t, n);
    return s.length ? s[0] : null;
  }
  getChildren(e, t = null, n = null) {
    return Er(this, e, t, n);
  }
}
class wn {
  constructor(e, t = 0) {
    if (
      ((this.mode = t),
      (this.buffer = null),
      (this.stack = []),
      (this.index = 0),
      (this.bufferNode = null),
      e instanceof $t)
    )
      this.yieldNode(e);
    else {
      (this._tree = e.context.parent), (this.buffer = e.context);
      for (let n = e._parent; n; n = n._parent) this.stack.unshift(n.index);
      (this.bufferNode = e), this.yieldBuf(e.index);
    }
  }
  get name() {
    return this.type.name;
  }
  yieldNode(e) {
    return e
      ? ((this._tree = e),
        (this.type = e.type),
        (this.from = e.from),
        (this.to = e.to),
        !0)
      : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: n, buffer: s } = this.buffer;
    return (
      (this.type = t || s.set.types[s.buffer[e]]),
      (this.from = n + s.buffer[e + 1]),
      (this.to = n + s.buffer[e + 2]),
      !0
    );
  }
  yield(e) {
    return e
      ? e instanceof $t
        ? ((this.buffer = null), this.yieldNode(e))
        : ((this.buffer = e.context), this.yieldBuf(e.index, e.type))
      : !1;
  }
  toString() {
    return this.buffer
      ? this.buffer.buffer.childString(this.index)
      : this._tree.toString();
  }
  enterChild(e, t, n) {
    if (!this.buffer)
      return this.yield(
        this._tree.nextChild(
          e < 0 ? this._tree.node.children.length - 1 : 0,
          e,
          t,
          n,
          this.mode,
        ),
      );
    let { buffer: s } = this.buffer,
      o = s.findChild(
        this.index + 4,
        s.buffer[this.index + 3],
        e,
        t - this.buffer.start,
        n,
      );
    return o < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(o));
  }
  firstChild() {
    return this.enterChild(1, 0, 4);
  }
  lastChild() {
    return this.enterChild(-1, 0, 4);
  }
  childAfter(e) {
    return this.enterChild(1, e, 2);
  }
  childBefore(e) {
    return this.enterChild(-1, e, -2);
  }
  enter(e, t, n = !0, s = !0) {
    return this.buffer
      ? s
        ? this.enterChild(1, e, t)
        : !1
      : this.yield(this._tree.enter(e, t, n && !(this.mode & 1), s));
  }
  parent() {
    if (!this.buffer)
      return this.yieldNode(
        this.mode & 1 ? this._tree._parent : this._tree.parent,
      );
    if (this.stack.length) return this.yieldBuf(this.stack.pop());
    let e =
      this.mode & 1
        ? this.buffer.parent
        : this.buffer.parent.nextSignificantParent();
    return (this.buffer = null), this.yieldNode(e);
  }
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent
        ? this.yield(
            this._tree.index < 0
              ? null
              : this._tree._parent.nextChild(
                  this._tree.index + e,
                  e,
                  0,
                  4,
                  this.mode,
                ),
          )
        : !1;
    let { buffer: t } = this.buffer,
      n = this.stack.length - 1;
    if (e < 0) {
      let s = n < 0 ? 0 : this.stack[n] + 4;
      if (this.index != s)
        return this.yieldBuf(t.findChild(s, this.index, -1, 0, 4));
    } else {
      let s = t.buffer[this.index + 3];
      if (s < (n < 0 ? t.buffer.length : t.buffer[this.stack[n] + 3]))
        return this.yieldBuf(s);
    }
    return n < 0
      ? this.yield(
          this.buffer.parent.nextChild(
            this.buffer.index + e,
            e,
            0,
            4,
            this.mode,
          ),
        )
      : !1;
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t,
      n,
      { buffer: s } = this;
    if (s) {
      if (e > 0) {
        if (this.index < s.buffer.buffer.length) return !1;
      } else
        for (let o = 0; o < this.index; o++)
          if (s.buffer.buffer[o + 3] < this.index) return !1;
      ({ index: t, parent: n } = s);
    } else ({ index: t, _parent: n } = this._tree);
    for (; n; { index: t, _parent: n } = n)
      if (t > -1)
        for (
          let o = t + e, l = e < 0 ? -1 : n.node.children.length;
          o != l;
          o += e
        ) {
          let a = n.node.children[o];
          if (this.mode & 1 || a instanceof Pi || !a.type.isAnonymous || Sl(a))
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(e, 0, 4)) return !0;
    for (;;) {
      if (this.sibling(e)) return !0;
      if (this.atLastNode(e) || !this.parent()) return !1;
    }
  }
  next(e = !0) {
    return this.move(1, e);
  }
  prev(e = !0) {
    return this.move(-1, e);
  }
  moveTo(e, t = 0) {
    for (
      ;
      (this.from == this.to ||
        (t < 1 ? this.from >= e : this.from > e) ||
        (t > -1 ? this.to <= e : this.to < e)) &&
      this.parent();

    );
    for (; this.enterChild(1, e, t); );
    return this;
  }
  get node() {
    if (!this.buffer) return this._tree;
    let e = this.bufferNode,
      t = null,
      n = 0;
    if (e && e.context == this.buffer) {
      e: for (let s = this.index, o = this.stack.length; o >= 0; ) {
        for (let l = e; l; l = l._parent)
          if (l.index == s) {
            if (s == this.index) return l;
            (t = l), (n = o + 1);
            break e;
          }
        s = this.stack[--o];
      }
    }
    for (let s = n; s < this.stack.length; s++)
      t = new ti(this.buffer, t, this.stack[s]);
    return (this.bufferNode = new ti(this.buffer, t, this.index));
  }
  get tree() {
    return this.buffer ? null : this._tree.node;
  }
}
function Sl(r) {
  return r.children.some(
    (e) => e instanceof Pi || !e.type.isAnonymous || Sl(e),
  );
}
function p0(r) {
  var e;
  let {
      buffer: t,
      nodeSet: n,
      maxBufferLength: s = Hu,
      reused: o = [],
      minRepeatType: l = n.types.length,
    } = r,
    a = Array.isArray(t) ? new vl(t, t.length) : t,
    c = n.types,
    h = 0,
    u = 0;
  function f(v, P, y, w, R) {
    let { id: A, start: C, end: M, size: z } = a,
      V = u;
    for (; z < 0; )
      if ((a.next(), z == -1)) {
        let be = o[A];
        y.push(be), w.push(C - v);
        return;
      } else if (z == -3) {
        h = A;
        return;
      } else if (z == -4) {
        u = A;
        return;
      } else throw new RangeError(`Unrecognized record size: ${z}`);
    let re = c[A],
      ge,
      Qe,
      je = C - v;
    if (M - C <= s && (Qe = S(a.pos - P, R))) {
      let be = new Uint16Array(Qe.size - Qe.skip),
        ye = a.pos - Qe.size,
        We = be.length;
      for (; a.pos > ye; ) We = T(Qe.start, be, We);
      (ge = new Pi(be, M - Qe.start, n)), (je = Qe.start - v);
    } else {
      let be = a.pos - z;
      a.next();
      let ye = [],
        We = [],
        Xe = A >= l ? A : -1,
        F = 0,
        ie = M;
      for (; a.pos > be; )
        Xe >= 0 && a.id == Xe && a.size >= 0
          ? (a.end <= ie - s &&
              (p(ye, We, C, F, a.end, ie, Xe, V),
              (F = ye.length),
              (ie = a.end)),
            a.next())
          : f(C, be, ye, We, Xe);
      if (
        (Xe >= 0 && F > 0 && F < ye.length && p(ye, We, C, F, C, ie, Xe, V),
        ye.reverse(),
        We.reverse(),
        Xe > -1 && F > 0)
      ) {
        let ae = d(re);
        ge = $l(re, ye, We, 0, ye.length, 0, M - C, ae, ae);
      } else ge = m(re, ye, We, M - C, V - M);
    }
    y.push(ge), w.push(je);
  }
  function d(v) {
    return (P, y, w) => {
      let R = 0,
        A = P.length - 1,
        C,
        M;
      if (A >= 0 && (C = P[A]) instanceof ue) {
        if (!A && C.type == v && C.length == w) return C;
        (M = C.prop(B.lookAhead)) && (R = y[A] + C.length + M);
      }
      return m(v, P, y, w, R);
    };
  }
  function p(v, P, y, w, R, A, C, M) {
    let z = [],
      V = [];
    for (; v.length > w; ) z.push(v.pop()), V.push(P.pop() + y - R);
    v.push(m(n.types[C], z, V, A - R, M - A)), P.push(R - y);
  }
  function m(v, P, y, w, R = 0, A) {
    if (h) {
      let C = [B.contextHash, h];
      A = A ? [C].concat(A) : [C];
    }
    if (R > 25) {
      let C = [B.lookAhead, R];
      A = A ? [C].concat(A) : [C];
    }
    return new ue(v, P, y, w, A);
  }
  function S(v, P) {
    let y = a.fork(),
      w = 0,
      R = 0,
      A = 0,
      C = y.end - s,
      M = { size: 0, start: 0, skip: 0 };
    e: for (let z = y.pos - v; y.pos > z; ) {
      let V = y.size;
      if (y.id == P && V >= 0) {
        (M.size = w), (M.start = R), (M.skip = A), (A += 4), (w += 4), y.next();
        continue;
      }
      let re = y.pos - V;
      if (V < 0 || re < z || y.start < C) break;
      let ge = y.id >= l ? 4 : 0,
        Qe = y.start;
      for (y.next(); y.pos > re; ) {
        if (y.size < 0)
          if (y.size == -3) ge += 4;
          else break e;
        else y.id >= l && (ge += 4);
        y.next();
      }
      (R = Qe), (w += V), (A += ge);
    }
    return (
      (P < 0 || w == v) && ((M.size = w), (M.start = R), (M.skip = A)),
      M.size > 4 ? M : void 0
    );
  }
  function T(v, P, y) {
    let { id: w, start: R, end: A, size: C } = a;
    if ((a.next(), C >= 0 && w < l)) {
      let M = y;
      if (C > 4) {
        let z = a.pos - (C - 4);
        for (; a.pos > z; ) y = T(v, P, y);
      }
      (P[--y] = M), (P[--y] = A - v), (P[--y] = R - v), (P[--y] = w);
    } else C == -3 ? (h = w) : C == -4 && (u = w);
    return y;
  }
  let k = [],
    b = [];
  for (; a.pos > 0; ) f(r.start || 0, r.bufferStart || 0, k, b, -1);
  let Q =
    (e = r.length) !== null && e !== void 0
      ? e
      : k.length
      ? b[0] + k[0].length
      : 0;
  return new ue(c[r.topID], k.reverse(), b.reverse(), Q);
}
const Sc = new WeakMap();
function gr(r, e) {
  if (!r.isAnonymous || e instanceof Pi || e.type != r) return 1;
  let t = Sc.get(e);
  if (t == null) {
    t = 1;
    for (let n of e.children) {
      if (n.type != r || !(n instanceof ue)) {
        t = 1;
        break;
      }
      t += gr(r, n);
    }
    Sc.set(e, t);
  }
  return t;
}
function $l(r, e, t, n, s, o, l, a, c) {
  let h = 0;
  for (let m = n; m < s; m++) h += gr(r, e[m]);
  let u = Math.ceil((h * 1.5) / 8),
    f = [],
    d = [];
  function p(m, S, T, k, b) {
    for (let Q = T; Q < k; ) {
      let v = Q,
        P = S[Q],
        y = gr(r, m[Q]);
      for (Q++; Q < k; Q++) {
        let w = gr(r, m[Q]);
        if (y + w >= u) break;
        y += w;
      }
      if (Q == v + 1) {
        if (y > u) {
          let w = m[v];
          p(w.children, w.positions, 0, w.children.length, S[v] + b);
          continue;
        }
        f.push(m[v]);
      } else {
        let w = S[Q - 1] + m[Q - 1].length - P;
        f.push($l(r, m, S, v, Q, P, w, null, c));
      }
      d.push(P + b - o);
    }
  }
  return p(e, t, n, s, 0), (a || c)(f, d, l);
}
class It {
  constructor(e, t, n, s, o = !1, l = !1) {
    (this.from = e),
      (this.to = t),
      (this.tree = n),
      (this.offset = s),
      (this.open = (o ? 1 : 0) | (l ? 2 : 0));
  }
  get openStart() {
    return (this.open & 1) > 0;
  }
  get openEnd() {
    return (this.open & 2) > 0;
  }
  static addTree(e, t = [], n = !1) {
    let s = [new It(0, e.length, e, 0, !1, n)];
    for (let o of t) o.to > e.length && s.push(o);
    return s;
  }
  static applyChanges(e, t, n = 128) {
    if (!t.length) return e;
    let s = [],
      o = 1,
      l = e.length ? e[0] : null;
    for (let a = 0, c = 0, h = 0; ; a++) {
      let u = a < t.length ? t[a] : null,
        f = u ? u.fromA : 1e9;
      if (f - c >= n)
        for (; l && l.from < f; ) {
          let d = l;
          if (c >= d.from || f <= d.to || h) {
            let p = Math.max(d.from, c) - h,
              m = Math.min(d.to, f) - h;
            d = p >= m ? null : new It(p, m, d.tree, d.offset + h, a > 0, !!u);
          }
          if ((d && s.push(d), l.to > f)) break;
          l = o < e.length ? e[o++] : null;
        }
      if (!u) break;
      (c = u.toA), (h = u.toA - u.toB);
    }
    return s;
  }
}
class ef {
  startParse(e, t, n) {
    return (
      typeof e == 'string' && (e = new O0(e)),
      (n = n
        ? n.length
          ? n.map((s) => new tt(s.from, s.to))
          : [new tt(0, 0)]
        : [new tt(0, e.length)]),
      this.createParse(e, t || [], n)
    );
  }
  parse(e, t, n) {
    let s = this.startParse(e, t, n);
    for (;;) {
      let o = s.advance();
      if (o) return o;
    }
  }
}
class O0 {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
function m0(r) {
  return (e, t, n, s) => new b0(e, r, t, n, s);
}
class $c {
  constructor(e, t, n, s, o) {
    (this.parser = e),
      (this.parse = t),
      (this.overlay = n),
      (this.target = s),
      (this.ranges = o);
  }
}
class g0 {
  constructor(e, t, n, s, o, l, a) {
    (this.parser = e),
      (this.predicate = t),
      (this.mounts = n),
      (this.index = s),
      (this.start = o),
      (this.target = l),
      (this.prev = a),
      (this.depth = 0),
      (this.ranges = []);
  }
}
const Vo = new B({ perNode: !0 });
class b0 {
  constructor(e, t, n, s, o) {
    (this.nest = t),
      (this.input = n),
      (this.fragments = s),
      (this.ranges = o),
      (this.inner = []),
      (this.innerDone = 0),
      (this.baseTree = null),
      (this.stoppedAt = null),
      (this.baseParse = e);
  }
  advance() {
    if (this.baseParse) {
      let n = this.baseParse.advance();
      if (!n) return null;
      if (
        ((this.baseParse = null),
        (this.baseTree = n),
        this.startInner(),
        this.stoppedAt != null)
      )
        for (let s of this.inner) s.parse.stopAt(this.stoppedAt);
    }
    if (this.innerDone == this.inner.length) {
      let n = this.baseTree;
      return (
        this.stoppedAt != null &&
          (n = new ue(
            n.type,
            n.children,
            n.positions,
            n.length,
            n.propValues.concat([[Vo, this.stoppedAt]]),
          )),
        n
      );
    }
    let e = this.inner[this.innerDone],
      t = e.parse.advance();
    if (t) {
      this.innerDone++;
      let n = Object.assign(Object.create(null), e.target.props);
      (n[B.mounted.id] = new u0(t, e.overlay, e.parser)), (e.target.props = n);
    }
    return null;
  }
  get parsedPos() {
    if (this.baseParse) return 0;
    let e = this.input.length;
    for (let t = this.innerDone; t < this.inner.length; t++)
      this.inner[t].ranges[0].from < e &&
        (e = Math.min(e, this.inner[t].parse.parsedPos));
    return e;
  }
  stopAt(e) {
    if (((this.stoppedAt = e), this.baseParse)) this.baseParse.stopAt(e);
    else
      for (let t = this.innerDone; t < this.inner.length; t++)
        this.inner[t].parse.stopAt(e);
  }
  startInner() {
    let e = new x0(this.fragments),
      t = null,
      n = null,
      s = new wn(new $t(this.baseTree, this.ranges[0].from, 0, null), 1);
    e: for (let o, l; this.stoppedAt == null || s.from < this.stoppedAt; ) {
      let a = !0,
        c;
      if (e.hasNode(s)) {
        if (t) {
          let h = t.mounts.find(
            (u) =>
              u.frag.from <= s.from && u.frag.to >= s.to && u.mount.overlay,
          );
          if (h)
            for (let u of h.mount.overlay) {
              let f = u.from + h.pos,
                d = u.to + h.pos;
              f >= s.from &&
                d <= s.to &&
                !t.ranges.some((p) => p.from < d && p.to > f) &&
                t.ranges.push({ from: f, to: d });
            }
        }
        a = !1;
      } else if (n && (l = y0(n.ranges, s.from, s.to))) a = l != 2;
      else if (
        !s.type.isAnonymous &&
        s.from < s.to &&
        (o = this.nest(s, this.input))
      ) {
        s.tree || Q0(s);
        let h = e.findMounts(s.from, o.parser);
        if (typeof o.overlay == 'function')
          t = new g0(
            o.parser,
            o.overlay,
            h,
            this.inner.length,
            s.from,
            s.tree,
            t,
          );
        else {
          let u = Tc(this.ranges, o.overlay || [new tt(s.from, s.to)]);
          u.length &&
            this.inner.push(
              new $c(
                o.parser,
                o.parser.startParse(this.input, Pc(h, u), u),
                o.overlay
                  ? o.overlay.map((f) => new tt(f.from - s.from, f.to - s.from))
                  : null,
                s.tree,
                u,
              ),
            ),
            o.overlay
              ? u.length && (n = { ranges: u, depth: 0, prev: n })
              : (a = !1);
        }
      } else
        t &&
          (c = t.predicate(s)) &&
          (c === !0 && (c = new tt(s.from, s.to)),
          c.from < c.to && t.ranges.push(c));
      if (a && s.firstChild()) t && t.depth++, n && n.depth++;
      else
        for (; !s.nextSibling(); ) {
          if (!s.parent()) break e;
          if (t && !--t.depth) {
            let h = Tc(this.ranges, t.ranges);
            h.length &&
              this.inner.splice(
                t.index,
                0,
                new $c(
                  t.parser,
                  t.parser.startParse(this.input, Pc(t.mounts, h), h),
                  t.ranges.map((u) => new tt(u.from - t.start, u.to - t.start)),
                  t.target,
                  h,
                ),
              ),
              (t = t.prev);
          }
          n && !--n.depth && (n = n.prev);
        }
    }
  }
}
function y0(r, e, t) {
  for (let n of r) {
    if (n.from >= t) break;
    if (n.to > e) return n.from <= e && n.to >= t ? 2 : 1;
  }
  return 0;
}
function kc(r, e, t, n, s, o) {
  if (e < t) {
    let l = r.buffer[e + 1],
      a = r.buffer[t - 2];
    n.push(r.slice(e, t, l, a)), s.push(l - o);
  }
}
function Q0(r) {
  let { node: e } = r,
    t = 0;
  do r.parent(), t++;
  while (!r.tree);
  let n = 0,
    s = r.tree,
    o = 0;
  for (
    ;
    (o = s.positions[n] + r.from),
      !(o <= e.from && o + s.children[n].length >= e.to);
    n++
  );
  let l = s.children[n],
    a = l.buffer;
  function c(h, u, f, d, p) {
    let m = h;
    for (; a[m + 2] + o <= e.from; ) m = a[m + 3];
    let S = [],
      T = [];
    kc(l, h, m, S, T, d);
    let k = a[m + 1],
      b = a[m + 2],
      Q = k + o == e.from && b + o == e.to && a[m] == e.type.id;
    return (
      S.push(Q ? e.toTree() : c(m + 4, a[m + 3], l.set.types[a[m]], k, b - k)),
      T.push(k - d),
      kc(l, a[m + 3], u, S, T, d),
      new ue(f, S, T, p)
    );
  }
  s.children[n] = c(0, a.length, Ue.none, 0, l.length);
  for (let h = 0; h <= t; h++) r.childAfter(e.from);
}
class wc {
  constructor(e, t) {
    (this.offset = t), (this.done = !1), (this.cursor = e.fullCursor());
  }
  moveTo(e) {
    let { cursor: t } = this,
      n = e - this.offset;
    for (; !this.done && t.from < n; )
      (t.to >= e && t.enter(n, 1, !1, !1)) || t.next(!1) || (this.done = !0);
  }
  hasNode(e) {
    if (
      (this.moveTo(e.from),
      !this.done &&
        this.cursor.from + this.offset == e.from &&
        this.cursor.tree)
    )
      for (let t = this.cursor.tree; ; ) {
        if (t == e.tree) return !0;
        if (
          t.children.length &&
          t.positions[0] == 0 &&
          t.children[0] instanceof ue
        )
          t = t.children[0];
        else break;
      }
    return !1;
  }
}
class x0 {
  constructor(e) {
    var t;
    if (((this.fragments = e), (this.curTo = 0), (this.fragI = 0), e.length)) {
      let n = (this.curFrag = e[0]);
      (this.curTo = (t = n.tree.prop(Vo)) !== null && t !== void 0 ? t : n.to),
        (this.inner = new wc(n.tree, -n.offset));
    } else this.curFrag = this.inner = null;
  }
  hasNode(e) {
    for (; this.curFrag && e.from >= this.curTo; ) this.nextFrag();
    return (
      this.curFrag &&
      this.curFrag.from <= e.from &&
      this.curTo >= e.to &&
      this.inner.hasNode(e)
    );
  }
  nextFrag() {
    var e;
    if ((this.fragI++, this.fragI == this.fragments.length))
      this.curFrag = this.inner = null;
    else {
      let t = (this.curFrag = this.fragments[this.fragI]);
      (this.curTo = (e = t.tree.prop(Vo)) !== null && e !== void 0 ? e : t.to),
        (this.inner = new wc(t.tree, -t.offset));
    }
  }
  findMounts(e, t) {
    var n;
    let s = [];
    if (this.inner) {
      this.inner.cursor.moveTo(e, 1);
      for (let o = this.inner.cursor.node; o; o = o.parent) {
        let l =
          (n = o.tree) === null || n === void 0 ? void 0 : n.prop(B.mounted);
        if (l && l.parser == t)
          for (let a = this.fragI; a < this.fragments.length; a++) {
            let c = this.fragments[a];
            if (c.from >= o.to) break;
            c.tree == this.curFrag.tree &&
              s.push({ frag: c, pos: o.from - c.offset, mount: l });
          }
      }
    }
    return s;
  }
}
function Tc(r, e) {
  let t = null,
    n = e;
  for (let s = 1, o = 0; s < r.length; s++) {
    let l = r[s - 1].to,
      a = r[s].from;
    for (; o < n.length; o++) {
      let c = n[o];
      if (c.from >= a) break;
      c.to <= l ||
        (t || (n = t = e.slice()),
        c.from < l
          ? ((t[o] = new tt(c.from, l)),
            c.to > a && t.splice(o + 1, 0, new tt(a, c.to)))
          : c.to > a
          ? (t[o--] = new tt(a, c.to))
          : t.splice(o--, 1));
    }
  }
  return n;
}
function v0(r, e, t, n) {
  let s = 0,
    o = 0,
    l = !1,
    a = !1,
    c = -1e9,
    h = [];
  for (;;) {
    let u = s == r.length ? 1e9 : l ? r[s].to : r[s].from,
      f = o == e.length ? 1e9 : a ? e[o].to : e[o].from;
    if (l != a) {
      let d = Math.max(c, t),
        p = Math.min(u, f, n);
      d < p && h.push(new tt(d, p));
    }
    if (((c = Math.min(u, f)), c == 1e9)) break;
    u == c && (l ? ((l = !1), s++) : (l = !0)),
      f == c && (a ? ((a = !1), o++) : (a = !0));
  }
  return h;
}
function Pc(r, e) {
  let t = [];
  for (let { pos: n, mount: s, frag: o } of r) {
    let l = n + (s.overlay ? s.overlay[0].from : 0),
      a = l + s.tree.length,
      c = Math.max(o.from, l),
      h = Math.min(o.to, a);
    if (s.overlay) {
      let u = s.overlay.map((d) => new tt(d.from + n, d.to + n)),
        f = v0(e, u, c, h);
      for (let d = 0, p = c; ; d++) {
        let m = d == f.length,
          S = m ? h : f[d].from;
        if (
          (S > p && t.push(new It(p, S, s.tree, -l, o.from >= p, o.to <= S)), m)
        )
          break;
        p = f[d].to;
      }
    } else t.push(new It(c, h, s.tree, -l, o.from >= l, o.to <= a));
  }
  return t;
}
var zs;
const Lr = new B();
function S0(r) {
  return U.define({ combine: r ? (e) => e.concat(r) : void 0 });
}
class xt {
  constructor(e, t, n, s = []) {
    (this.data = e),
      (this.topNode = n),
      J.prototype.hasOwnProperty('tree') ||
        Object.defineProperty(J.prototype, 'tree', {
          get() {
            return _e(this);
          },
        }),
      (this.parser = t),
      (this.extension = [
        qi.of(this),
        J.languageData.of((o, l, a) => o.facet(Rc(o, l, a))),
      ].concat(s));
  }
  isActiveAt(e, t, n = -1) {
    return Rc(e, t, n) == this.data;
  }
  findRegions(e) {
    let t = e.facet(qi);
    if (t?.data == this.data) return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting) return [];
    let n = [],
      s = (o, l) => {
        if (o.prop(Lr) == this.data) {
          n.push({ from: l, to: l + o.length });
          return;
        }
        let a = o.prop(B.mounted);
        if (a) {
          if (a.tree.prop(Lr) == this.data) {
            if (a.overlay)
              for (let c of a.overlay)
                n.push({ from: c.from + l, to: c.to + l });
            else n.push({ from: l, to: l + o.length });
            return;
          } else if (a.overlay) {
            let c = n.length;
            if ((s(a.tree, a.overlay[0].from + l), n.length > c)) return;
          }
        }
        for (let c = 0; c < o.children.length; c++) {
          let h = o.children[c];
          h instanceof ue && s(h, o.positions[c] + l);
        }
      };
    return s(_e(e), 0), n;
  }
  get allowsNesting() {
    return !0;
  }
}
xt.setState = te.define();
function Rc(r, e, t) {
  let n = r.facet(qi);
  if (!n) return null;
  let s = n.data;
  if (n.allowsNesting)
    for (let o = _e(r).topNode; o; o = o.enter(e, t, !0, !1))
      s = o.type.prop(Lr) || s;
  return s;
}
class Vi extends xt {
  constructor(e, t) {
    super(e, t, t.topNode), (this.parser = t);
  }
  static define(e) {
    let t = S0(e.languageData);
    return new Vi(
      t,
      e.parser.configure({ props: [Lr.add((n) => (n.isTop ? t : void 0))] }),
    );
  }
  configure(e) {
    return new Vi(this.data, this.parser.configure(e));
  }
  get allowsNesting() {
    return this.parser.wrappers.length > 0;
  }
}
function _e(r) {
  let e = r.field(xt.state, !1);
  return e ? e.tree : ue.empty;
}
class $0 {
  constructor(e, t = e.length) {
    (this.doc = e),
      (this.length = t),
      (this.cursorPos = 0),
      (this.string = ''),
      (this.cursor = e.iter());
  }
  syncTo(e) {
    return (
      (this.string = this.cursor.next(e - this.cursorPos).value),
      (this.cursorPos = e + this.string.length),
      this.cursorPos - this.string.length
    );
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(e, t) {
    let n = this.cursorPos - this.string.length;
    return e < n || t >= this.cursorPos
      ? this.doc.sliceString(e, t)
      : this.string.slice(e - n, t - n);
  }
}
let cn = null;
class kl {
  constructor(e, t, n = [], s, o, l, a, c) {
    (this.parser = e),
      (this.state = t),
      (this.fragments = n),
      (this.tree = s),
      (this.treeLen = o),
      (this.viewport = l),
      (this.skipped = a),
      (this.scheduleOn = c),
      (this.parse = null),
      (this.tempSkipped = []);
  }
  startParse() {
    return this.parser.startParse(new $0(this.state.doc), this.fragments);
  }
  work(e, t) {
    return (
      t != null && t >= this.state.doc.length && (t = void 0),
      this.tree != ue.empty && this.isDone(t ?? this.state.doc.length)
        ? (this.takeTree(), !0)
        : this.withContext(() => {
            var n;
            if (typeof e == 'number') {
              let s = Date.now() + e;
              e = () => Date.now() > s;
            }
            for (
              this.parse || (this.parse = this.startParse()),
                t != null &&
                  (this.parse.stoppedAt == null || this.parse.stoppedAt > t) &&
                  t < this.state.doc.length &&
                  this.parse.stopAt(t);
              ;

            ) {
              let s = this.parse.advance();
              if (s)
                if (
                  ((this.fragments = this.withoutTempSkipped(
                    It.addTree(s, this.fragments, this.parse.stoppedAt != null),
                  )),
                  (this.treeLen =
                    (n = this.parse.stoppedAt) !== null && n !== void 0
                      ? n
                      : this.state.doc.length),
                  (this.tree = s),
                  (this.parse = null),
                  this.treeLen < (t ?? this.state.doc.length))
                )
                  this.parse = this.startParse();
                else return !0;
              if (e()) return !1;
            }
          })
    );
  }
  takeTree() {
    let e, t;
    this.parse &&
      (e = this.parse.parsedPos) >= this.treeLen &&
      ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) &&
        this.parse.stopAt(e),
      this.withContext(() => {
        for (; !(t = this.parse.advance()); );
      }),
      (this.treeLen = e),
      (this.tree = t),
      (this.fragments = this.withoutTempSkipped(
        It.addTree(this.tree, this.fragments, !0),
      )),
      (this.parse = null));
  }
  withContext(e) {
    let t = cn;
    cn = this;
    try {
      return e();
    } finally {
      cn = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; (t = this.tempSkipped.pop()); ) e = Cc(e, t.from, t.to);
    return e;
  }
  changes(e, t) {
    let { fragments: n, tree: s, treeLen: o, viewport: l, skipped: a } = this;
    if ((this.takeTree(), !e.empty)) {
      let c = [];
      if (
        (e.iterChangedRanges((h, u, f, d) =>
          c.push({ fromA: h, toA: u, fromB: f, toB: d }),
        ),
        (n = It.applyChanges(n, c)),
        (s = ue.empty),
        (o = 0),
        (l = { from: e.mapPos(l.from, -1), to: e.mapPos(l.to, 1) }),
        this.skipped.length)
      ) {
        a = [];
        for (let h of this.skipped) {
          let u = e.mapPos(h.from, 1),
            f = e.mapPos(h.to, -1);
          u < f && a.push({ from: u, to: f });
        }
      }
    }
    return new kl(this.parser, t, n, s, o, l, a, this.scheduleOn);
  }
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to) return !1;
    this.viewport = e;
    let t = this.skipped.length;
    for (let n = 0; n < this.skipped.length; n++) {
      let { from: s, to: o } = this.skipped[n];
      s < e.to &&
        o > e.from &&
        ((this.fragments = Cc(this.fragments, s, o)),
        this.skipped.splice(n--, 1));
    }
    return this.skipped.length >= t ? !1 : (this.reset(), !0);
  }
  reset() {
    this.parse && (this.takeTree(), (this.parse = null));
  }
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  static getSkippingParser(e) {
    return new (class extends ef {
      createParse(t, n, s) {
        let o = s[0].from,
          l = s[s.length - 1].to;
        return {
          parsedPos: o,
          advance() {
            let c = cn;
            if (c) {
              for (let h of s) c.tempSkipped.push(h);
              e &&
                (c.scheduleOn = c.scheduleOn
                  ? Promise.all([c.scheduleOn, e])
                  : e);
            }
            return (this.parsedPos = l), new ue(Ue.none, [], [], l - o);
          },
          stoppedAt: null,
          stopAt() {},
        };
      }
    })();
  }
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  static get() {
    return cn;
  }
}
function Cc(r, e, t) {
  return It.applyChanges(r, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class Yi {
  constructor(e) {
    (this.context = e), (this.tree = e.tree);
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree) return this;
    let t = this.context.changes(e.changes, e.state),
      n =
        this.context.treeLen == e.startState.doc.length
          ? void 0
          : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, n) || t.takeTree(), new Yi(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length),
      n = new kl(
        e.facet(qi).parser,
        e,
        [],
        ue.empty,
        0,
        { from: 0, to: t },
        [],
        null,
      );
    return n.work(20, t) || n.takeTree(), new Yi(n);
  }
}
xt.state = wt.define({
  create: Yi.init,
  update(r, e) {
    for (let t of e.effects) if (t.is(xt.setState)) return t.value;
    return e.startState.facet(qi) != e.state.facet(qi)
      ? Yi.init(e.state)
      : r.apply(e);
  },
});
let tf = (r) => {
  let e = setTimeout(() => r(), 500);
  return () => clearTimeout(e);
};
typeof requestIdleCallback < 'u' &&
  (tf = (r) => {
    let e = -1,
      t = setTimeout(() => {
        e = requestIdleCallback(r, { timeout: 500 - 100 });
      }, 100);
    return () => (e < 0 ? clearTimeout(t) : cancelIdleCallback(e));
  });
const Ns =
    typeof navigator < 'u' &&
    ((zs = navigator.scheduling) === null || zs === void 0
      ? void 0
      : zs.isInputPending)
      ? () => navigator.scheduling.isInputPending()
      : null,
  k0 = ht.fromClass(
    class {
      constructor(e) {
        (this.view = e),
          (this.working = null),
          (this.workScheduled = 0),
          (this.chunkEnd = -1),
          (this.chunkBudget = -1),
          (this.work = this.work.bind(this)),
          this.scheduleWork();
      }
      update(e) {
        let t = this.view.state.field(xt.state).context;
        (t.updateViewport(e.view.viewport) ||
          this.view.viewport.to > t.treeLen) &&
          this.scheduleWork(),
          e.docChanged &&
            (this.view.hasFocus && (this.chunkBudget += 50),
            this.scheduleWork()),
          this.checkAsyncSchedule(t);
      }
      scheduleWork() {
        if (this.working) return;
        let { state: e } = this.view,
          t = e.field(xt.state);
        (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) &&
          (this.working = tf(this.work));
      }
      work(e) {
        this.working = null;
        let t = Date.now();
        if (
          (this.chunkEnd < t &&
            (this.chunkEnd < 0 || this.view.hasFocus) &&
            ((this.chunkEnd = t + 3e4), (this.chunkBudget = 3e3)),
          this.chunkBudget <= 0)
        )
          return;
        let {
            state: n,
            viewport: { to: s },
          } = this.view,
          o = n.field(xt.state);
        if (o.tree == o.context.tree && o.context.isDone(s + 1e5)) return;
        let l =
            Date.now() +
            Math.min(
              this.chunkBudget,
              100,
              e && !Ns ? Math.max(25, e.timeRemaining() - 5) : 1e9,
            ),
          a = o.context.treeLen < s && n.doc.length > s + 1e3,
          c = o.context.work(
            () => (Ns && Ns()) || Date.now() > l,
            s + (a ? 0 : 1e5),
          );
        (this.chunkBudget -= Date.now() - t),
          (c || this.chunkBudget <= 0) &&
            (o.context.takeTree(),
            this.view.dispatch({ effects: xt.setState.of(new Yi(o.context)) })),
          this.chunkBudget > 0 && !(c && !a) && this.scheduleWork(),
          this.checkAsyncSchedule(o.context);
      }
      checkAsyncSchedule(e) {
        e.scheduleOn &&
          (this.workScheduled++,
          e.scheduleOn
            .then(() => this.scheduleWork())
            .catch((t) => ii(this.view.state, t))
            .then(() => this.workScheduled--),
          (e.scheduleOn = null));
      }
      destroy() {
        this.working && this.working();
      }
      isWorking() {
        return !!(this.working || this.workScheduled > 0);
      }
    },
    {
      eventHandlers: {
        focus() {
          this.scheduleWork();
        },
      },
    },
  ),
  qi = U.define({
    combine(r) {
      return r.length ? r[0] : null;
    },
    enables: [xt.state, k0],
  });
class wl {
  constructor(e, t = []) {
    (this.language = e), (this.support = t), (this.extension = [e, t]);
  }
}
const w0 = U.define(),
  es = U.define({
    combine: (r) => {
      if (!r.length) return '  ';
      if (!/^(?: +|\t+)$/.test(r[0]))
        throw new Error('Invalid indent unit: ' + JSON.stringify(r[0]));
      return r[0];
    },
  });
function _r(r) {
  let e = r.facet(es);
  return e.charCodeAt(0) == 9 ? r.tabSize * e.length : e.length;
}
function Xr(r, e) {
  let t = '',
    n = r.tabSize;
  if (r.facet(es).charCodeAt(0) == 9) for (; e >= n; ) (t += '	'), (e -= n);
  for (let s = 0; s < e; s++) t += ' ';
  return t;
}
function nf(r, e) {
  r instanceof J && (r = new ts(r));
  for (let n of r.state.facet(w0)) {
    let s = n(r, e);
    if (s != null) return s;
  }
  let t = _e(r.state);
  return t ? T0(r, t, e) : null;
}
class ts {
  constructor(e, t = {}) {
    (this.state = e), (this.options = t), (this.unit = _r(e));
  }
  lineAt(e, t = 1) {
    let n = this.state.doc.lineAt(e),
      { simulateBreak: s, simulateDoubleBreak: o } = this.options;
    return s != null && s >= n.from && s <= n.to
      ? o && s == e
        ? { text: '', from: e }
        : (t < 0 ? s < e : s <= e)
        ? { text: n.text.slice(s - n.from), from: s }
        : { text: n.text.slice(0, s - n.from), from: n.from }
      : n;
  }
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return '';
    let { text: n, from: s } = this.lineAt(e, t);
    return n.slice(e - s, Math.min(n.length, e + 100 - s));
  }
  column(e, t = 1) {
    let { text: n, from: s } = this.lineAt(e, t),
      o = this.countColumn(n, e - s),
      l = this.options.overrideIndentation
        ? this.options.overrideIndentation(s)
        : -1;
    return l > -1 && (o += l - this.countColumn(n, n.search(/\S|$/))), o;
  }
  countColumn(e, t = e.length) {
    return qr(e, this.state.tabSize, t);
  }
  lineIndent(e, t = 1) {
    let { text: n, from: s } = this.lineAt(e, t),
      o = this.options.overrideIndentation;
    if (o) {
      let l = o(s);
      if (l > -1) return l;
    }
    return this.countColumn(n, n.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const is = new B();
function T0(r, e, t) {
  return rf(e.resolveInner(t).enterUnfinishedNodesBefore(t), t, r);
}
function P0(r) {
  return r.pos == r.options.simulateBreak && r.options.simulateDoubleBreak;
}
function R0(r) {
  let e = r.type.prop(is);
  if (e) return e;
  let t = r.firstChild,
    n;
  if (t && (n = t.type.prop(B.closedBy))) {
    let s = r.lastChild,
      o = s && n.indexOf(s.name) > -1;
    return (l) => sf(l, !0, 1, void 0, o && !P0(l) ? s.from : void 0);
  }
  return r.parent == null ? C0 : null;
}
function rf(r, e, t) {
  for (; r; r = r.parent) {
    let n = R0(r);
    if (n) return n(new W0(t, e, r));
  }
  return null;
}
function C0() {
  return 0;
}
class W0 extends ts {
  constructor(e, t, n) {
    super(e.state, e.options), (this.base = e), (this.pos = t), (this.node = n);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    let e = this.state.doc.lineAt(this.node.from);
    for (;;) {
      let t = this.node.resolve(e.from);
      for (; t.parent && t.parent.from == t.from; ) t = t.parent;
      if (A0(t, this.node)) break;
      e = this.state.doc.lineAt(t.from);
    }
    return this.lineIndent(e.from);
  }
  continue() {
    let e = this.node.parent;
    return e ? rf(e, this.pos, this.base) : 0;
  }
}
function A0(r, e) {
  for (let t = e; t; t = t.parent) if (r == t) return !0;
  return !1;
}
function E0(r) {
  let e = r.node,
    t = e.childAfter(e.from),
    n = e.lastChild;
  if (!t) return null;
  let s = r.options.simulateBreak,
    o = r.state.doc.lineAt(t.from),
    l = s == null || s <= o.from ? o.to : Math.min(o.to, s);
  for (let a = t.to; ; ) {
    let c = e.childAfter(a);
    if (!c || c == n) return null;
    if (!c.type.isSkipped) return c.from < l ? t : null;
    a = c.to;
  }
}
function L0({ closing: r, align: e = !0, units: t = 1 }) {
  return (n) => sf(n, e, t, r);
}
function sf(r, e, t, n, s) {
  let o = r.textAfter,
    l = o.match(/^\s*/)[0].length,
    a = (n && o.slice(l, l + n.length) == n) || s == r.pos + l,
    c = e ? E0(r) : null;
  return c
    ? a
      ? r.column(c.from)
      : r.column(c.to)
    : r.baseIndent + (a ? 0 : r.unit * t);
}
const _0 = (r) => r.baseIndent;
function br({ except: r, units: e = 1 } = {}) {
  return (t) => {
    let n = r && r.test(t.textAfter);
    return t.baseIndent + (n ? 0 : e * t.unit);
  };
}
const Tl = new B();
function of(r) {
  let e = r.firstChild,
    t = r.lastChild;
  return e && e.to < t.from
    ? { from: e.to, to: t.type.isError ? r.to : t.from }
    : null;
}
const Zr = { brackets: ['(', '[', '{', "'", '"'], before: ')]}:;>' },
  bi = te.define({
    map(r, e) {
      let t = e.mapPos(r, -1, Le.TrackAfter);
      return t ?? void 0;
    },
  }),
  Pl = te.define({
    map(r, e) {
      return e.mapPos(r);
    },
  }),
  Rl = new (class extends $i {})();
Rl.startSide = 1;
Rl.endSide = -1;
const lf = wt.define({
  create() {
    return le.empty;
  },
  update(r, e) {
    if (e.selection) {
      let t = e.state.doc.lineAt(e.selection.main.head).from,
        n = e.startState.doc.lineAt(e.startState.selection.main.head).from;
      t != e.changes.mapPos(n, -1) && (r = le.empty);
    }
    r = r.map(e.changes);
    for (let t of e.effects)
      t.is(bi)
        ? (r = r.update({ add: [Rl.range(t.value, t.value + 1)] }))
        : t.is(Pl) && (r = r.update({ filter: (n) => n != t.value }));
    return r;
  },
});
function X0() {
  return [D0, lf];
}
const Bs = '()[]{}<>';
function af(r) {
  for (let e = 0; e < Bs.length; e += 2)
    if (Bs.charCodeAt(e) == r) return Bs.charAt(e + 1);
  return am(r < 128 ? r : r + 1);
}
function cf(r, e) {
  return r.languageDataAt('closeBrackets', e)[0] || Zr;
}
const Z0 =
    typeof navigator == 'object' && /Android\b/.test(navigator.userAgent),
  D0 = G.inputHandler.of((r, e, t, n) => {
    if ((Z0 ? r.composing : r.compositionStarted) || r.state.readOnly)
      return !1;
    let s = r.state.selection.main;
    if (
      n.length > 2 ||
      (n.length == 2 && xn(Xt(n, 0)) == 1) ||
      e != s.from ||
      t != s.to
    )
      return !1;
    let o = j0(r.state, n);
    return o ? (r.dispatch(o), !0) : !1;
  }),
  I0 = ({ state: r, dispatch: e }) => {
    if (r.readOnly) return !1;
    let n = cf(r, r.selection.main.head).brackets || Zr.brackets,
      s = null,
      o = r.changeByRange((l) => {
        if (l.empty) {
          let a = z0(r.doc, l.head);
          for (let c of n)
            if (c == a && ns(r.doc, l.head) == af(Xt(c, 0)))
              return {
                changes: { from: l.head - c.length, to: l.head + c.length },
                range: E.cursor(l.head - c.length),
                userEvent: 'delete.backward',
              };
        }
        return { range: (s = l) };
      });
    return s || e(r.update(o, { scrollIntoView: !0 })), !s;
  },
  M0 = [{ key: 'Backspace', run: I0 }];
function j0(r, e) {
  let t = cf(r, r.selection.main.head),
    n = t.brackets || Zr.brackets;
  for (let s of n) {
    let o = af(Xt(s, 0));
    if (e == s)
      return o == s
        ? U0(r, s, n.indexOf(s + s + s) > -1)
        : N0(r, s, o, t.before || Zr.before);
    if (e == o && hf(r, r.selection.main.from)) return B0(r, s, o);
  }
  return null;
}
function hf(r, e) {
  let t = !1;
  return (
    r.field(lf).between(0, r.doc.length, (n) => {
      n == e && (t = !0);
    }),
    t
  );
}
function ns(r, e) {
  let t = r.sliceString(e, e + 2);
  return t.slice(0, xn(Xt(t, 0)));
}
function z0(r, e) {
  let t = r.sliceString(e - 2, e);
  return xn(Xt(t, 0)) == t.length ? t : t.slice(1);
}
function N0(r, e, t, n) {
  let s = null,
    o = r.changeByRange((l) => {
      if (!l.empty)
        return {
          changes: [
            { insert: e, from: l.from },
            { insert: t, from: l.to },
          ],
          effects: bi.of(l.to + e.length),
          range: E.range(l.anchor + e.length, l.head + e.length),
        };
      let a = ns(r.doc, l.head);
      return !a || /\s/.test(a) || n.indexOf(a) > -1
        ? {
            changes: { insert: e + t, from: l.head },
            effects: bi.of(l.head + e.length),
            range: E.cursor(l.head + e.length),
          }
        : { range: (s = l) };
    });
  return s
    ? null
    : r.update(o, { scrollIntoView: !0, userEvent: 'input.type' });
}
function B0(r, e, t) {
  let n = null,
    s = r.selection.ranges.map((o) =>
      o.empty && ns(r.doc, o.head) == t ? E.cursor(o.head + t.length) : (n = o),
    );
  return n
    ? null
    : r.update({
        selection: E.create(s, r.selection.mainIndex),
        scrollIntoView: !0,
        effects: r.selection.ranges.map(({ from: o }) => Pl.of(o)),
      });
}
function U0(r, e, t) {
  let n = null,
    s = r.changeByRange((o) => {
      if (!o.empty)
        return {
          changes: [
            { insert: e, from: o.from },
            { insert: e, from: o.to },
          ],
          effects: bi.of(o.to + e.length),
          range: E.range(o.anchor + e.length, o.head + e.length),
        };
      let l = o.head,
        a = ns(r.doc, l);
      if (a == e) {
        if (Wc(r, l))
          return {
            changes: { insert: e + e, from: l },
            effects: bi.of(l + e.length),
            range: E.cursor(l + e.length),
          };
        if (hf(r, l)) {
          let c = t && r.sliceDoc(l, l + e.length * 3) == e + e + e;
          return {
            range: E.cursor(l + e.length * (c ? 3 : 1)),
            effects: Pl.of(l),
          };
        }
      } else {
        if (
          t &&
          r.sliceDoc(l - 2 * e.length, l) == e + e &&
          Wc(r, l - 2 * e.length)
        )
          return {
            changes: { insert: e + e + e + e, from: l },
            effects: bi.of(l + e.length),
            range: E.cursor(l + e.length),
          };
        if (r.charCategorizer(l)(a) != ct.Word) {
          let c = r.sliceDoc(l - 1, l);
          if (c != e && r.charCategorizer(l)(c) != ct.Word && !V0(r, l, e))
            return {
              changes: { insert: e + e, from: l },
              effects: bi.of(l + e.length),
              range: E.cursor(l + e.length),
            };
        }
      }
      return { range: (n = o) };
    });
  return n
    ? null
    : r.update(s, { scrollIntoView: !0, userEvent: 'input.type' });
}
function Wc(r, e) {
  let t = _e(r).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function V0(r, e, t) {
  let n = _e(r).resolveInner(e, -1);
  for (let s = 0; s < 5; s++) {
    if (r.sliceDoc(n.from, n.from + t.length) == t) return !0;
    let o = n.to == e && n.parent;
    if (!o) break;
    n = o;
  }
  return !1;
}
const Y0 = G.baseTheme({
    '&.cm-focused .cm-matchingBracket': { backgroundColor: '#328c8252' },
    '&.cm-focused .cm-nonmatchingBracket': { backgroundColor: '#bb555544' },
  }),
  uf = 1e4,
  ff = '()[]{}',
  df = U.define({
    combine(r) {
      return Fr(r, { afterCursor: !0, brackets: ff, maxScanDistance: uf });
    },
  }),
  q0 = q.mark({ class: 'cm-matchingBracket' }),
  G0 = q.mark({ class: 'cm-nonmatchingBracket' }),
  F0 = wt.define({
    create() {
      return q.none;
    },
    update(r, e) {
      if (!e.docChanged && !e.selection) return r;
      let t = [],
        n = e.state.facet(df);
      for (let s of e.state.selection.ranges) {
        if (!s.empty) continue;
        let o =
          vt(e.state, s.head, -1, n) ||
          (s.head > 0 && vt(e.state, s.head - 1, 1, n)) ||
          (n.afterCursor &&
            (vt(e.state, s.head, 1, n) ||
              (s.head < e.state.doc.length && vt(e.state, s.head + 1, -1, n))));
        if (!o) continue;
        let l = o.matched ? q0 : G0;
        t.push(l.range(o.start.from, o.start.to)),
          o.end && t.push(l.range(o.end.from, o.end.to));
      }
      return q.set(t, !0);
    },
    provide: (r) => G.decorations.from(r),
  }),
  H0 = [F0, Y0];
function J0(r = {}) {
  return [df.of(r), H0];
}
function Yo(r, e, t) {
  let n = r.prop(e < 0 ? B.openedBy : B.closedBy);
  if (n) return n;
  if (r.name.length == 1) {
    let s = t.indexOf(r.name);
    if (s > -1 && s % 2 == (e < 0 ? 1 : 0)) return [t[s + e]];
  }
  return null;
}
function vt(r, e, t, n = {}) {
  let s = n.maxScanDistance || uf,
    o = n.brackets || ff,
    l = _e(r),
    a = l.resolveInner(e, t);
  for (let c = a; c; c = c.parent) {
    let h = Yo(c.type, t, o);
    if (h && c.from < c.to) return K0(r, e, t, c, h, o);
  }
  return e1(r, e, t, l, a.type, s, o);
}
function K0(r, e, t, n, s, o) {
  let l = n.parent,
    a = { from: n.from, to: n.to },
    c = 0,
    h = l?.cursor;
  if (h && (t < 0 ? h.childBefore(n.from) : h.childAfter(n.to)))
    do
      if (t < 0 ? h.to <= n.from : h.from >= n.to) {
        if (c == 0 && s.indexOf(h.type.name) > -1 && h.from < h.to)
          return { start: a, end: { from: h.from, to: h.to }, matched: !0 };
        if (Yo(h.type, t, o)) c++;
        else if (Yo(h.type, -t, o) && (c--, c == 0))
          return {
            start: a,
            end: h.from == h.to ? void 0 : { from: h.from, to: h.to },
            matched: !1,
          };
      }
    while (t < 0 ? h.prevSibling() : h.nextSibling());
  return { start: a, matched: !1 };
}
function e1(r, e, t, n, s, o, l) {
  let a = t < 0 ? r.sliceDoc(e - 1, e) : r.sliceDoc(e, e + 1),
    c = l.indexOf(a);
  if (c < 0 || (c % 2 == 0) != t > 0) return null;
  let h = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e },
    u = r.doc.iterRange(e, t > 0 ? r.doc.length : 0),
    f = 0;
  for (let d = 0; !u.next().done && d <= o; ) {
    let p = u.value;
    t < 0 && (d += p.length);
    let m = e + d * t;
    for (
      let S = t > 0 ? 0 : p.length - 1, T = t > 0 ? p.length : -1;
      S != T;
      S += t
    ) {
      let k = l.indexOf(p[S]);
      if (!(k < 0 || n.resolve(m + S, 1).type != s))
        if ((k % 2 == 0) == t > 0) f++;
        else {
          if (f == 1)
            return {
              start: h,
              end: { from: m + S, to: m + S + 1 },
              matched: k >> 1 == c >> 1,
            };
          f--;
        }
    }
    t > 0 && (d += p.length);
  }
  return u.done ? { start: h, matched: !1 } : null;
}
function Ki(r, e) {
  return E.create(r.ranges.map(e), r.mainIndex);
}
function Tt(r, e) {
  return r.update({ selection: e, scrollIntoView: !0, userEvent: 'select' });
}
function zt({ state: r, dispatch: e }, t) {
  let n = Ki(r.selection, t);
  return n.eq(r.selection) ? !1 : (e(Tt(r, n)), !0);
}
function rs(r, e) {
  return E.cursor(e ? r.to : r.from);
}
function pf(r, e) {
  return zt(r, (t) => (t.empty ? r.moveByChar(t, e) : rs(t, e)));
}
const Of = (r) => pf(r, r.textDirection != ne.LTR),
  mf = (r) => pf(r, r.textDirection == ne.LTR);
function gf(r, e) {
  return zt(r, (t) => (t.empty ? r.moveByGroup(t, e) : rs(t, e)));
}
const t1 = (r) => gf(r, r.textDirection != ne.LTR),
  i1 = (r) => gf(r, r.textDirection == ne.LTR);
function n1(r, e, t) {
  if (e.type.prop(t)) return !0;
  let n = e.to - e.from;
  return (
    (n && (n > 2 || /[^\s,.;:]/.test(r.sliceDoc(e.from, e.to)))) || e.firstChild
  );
}
function ss(r, e, t) {
  let n = _e(r).resolveInner(e.head),
    s = t ? B.closedBy : B.openedBy;
  for (let c = e.head; ; ) {
    let h = t ? n.childAfter(c) : n.childBefore(c);
    if (!h) break;
    n1(r, h, s) ? (n = h) : (c = t ? h.to : h.from);
  }
  let o = n.type.prop(s),
    l,
    a;
  return (
    o && (l = t ? vt(r, n.from, 1) : vt(r, n.to, -1)) && l.matched
      ? (a = t ? l.end.to : l.end.from)
      : (a = t ? n.to : n.from),
    E.cursor(a, t ? -1 : 1)
  );
}
const r1 = (r) => zt(r, (e) => ss(r.state, e, r.textDirection != ne.LTR)),
  s1 = (r) => zt(r, (e) => ss(r.state, e, r.textDirection == ne.LTR));
function bf(r, e) {
  return zt(r, (t) => {
    if (!t.empty) return rs(t, e);
    let n = r.moveVertically(t, e);
    return n.head != t.head ? n : r.moveToLineBoundary(t, e);
  });
}
const yf = (r) => bf(r, !1),
  Qf = (r) => bf(r, !0);
function xf(r, e) {
  let { state: t } = r,
    n = Ki(t.selection, (l) =>
      l.empty ? r.moveVertically(l, e, r.dom.clientHeight) : rs(l, e),
    );
  if (n.eq(t.selection)) return !1;
  let s = r.coordsAtPos(t.selection.main.head),
    o = r.scrollDOM.getBoundingClientRect();
  return (
    r.dispatch(Tt(t, n), {
      effects:
        s && s.top > o.top && s.bottom < o.bottom
          ? G.scrollIntoView(n.main.head, {
              y: 'start',
              yMargin: s.top - o.top,
            })
          : void 0,
    }),
    !0
  );
}
const Ac = (r) => xf(r, !1),
  qo = (r) => xf(r, !0);
function os(r, e, t) {
  let n = r.lineBlockAt(e.head),
    s = r.moveToLineBoundary(e, t);
  if (
    (s.head == e.head &&
      s.head != (t ? n.to : n.from) &&
      (s = r.moveToLineBoundary(e, t, !1)),
    !t && s.head == n.from && n.length)
  ) {
    let o = /^\s*/.exec(
      r.state.sliceDoc(n.from, Math.min(n.from + 100, n.to)),
    )[0].length;
    o && e.head != n.from + o && (s = E.cursor(n.from + o));
  }
  return s;
}
const Ec = (r) => zt(r, (e) => os(r, e, !0)),
  Lc = (r) => zt(r, (e) => os(r, e, !1)),
  o1 = (r) => zt(r, (e) => E.cursor(r.lineBlockAt(e.head).from, 1)),
  l1 = (r) => zt(r, (e) => E.cursor(r.lineBlockAt(e.head).to, -1));
function a1(r, e, t) {
  let n = !1,
    s = Ki(r.selection, (o) => {
      let l =
        vt(r, o.head, -1) ||
        vt(r, o.head, 1) ||
        (o.head > 0 && vt(r, o.head - 1, 1)) ||
        (o.head < r.doc.length && vt(r, o.head + 1, -1));
      if (!l || !l.end) return o;
      n = !0;
      let a = l.start.from == o.head ? l.end.to : l.end.from;
      return t ? E.range(o.anchor, a) : E.cursor(a);
    });
  return n ? (e(Tt(r, s)), !0) : !1;
}
const c1 = ({ state: r, dispatch: e }) => a1(r, e, !1);
function Pt(r, e) {
  let t = Ki(r.state.selection, (n) => {
    let s = e(n);
    return E.range(n.anchor, s.head, s.goalColumn);
  });
  return t.eq(r.state.selection) ? !1 : (r.dispatch(Tt(r.state, t)), !0);
}
function vf(r, e) {
  return Pt(r, (t) => r.moveByChar(t, e));
}
const Sf = (r) => vf(r, r.textDirection != ne.LTR),
  $f = (r) => vf(r, r.textDirection == ne.LTR);
function kf(r, e) {
  return Pt(r, (t) => r.moveByGroup(t, e));
}
const h1 = (r) => kf(r, r.textDirection != ne.LTR),
  u1 = (r) => kf(r, r.textDirection == ne.LTR),
  f1 = (r) => Pt(r, (e) => ss(r.state, e, r.textDirection != ne.LTR)),
  d1 = (r) => Pt(r, (e) => ss(r.state, e, r.textDirection == ne.LTR));
function wf(r, e) {
  return Pt(r, (t) => r.moveVertically(t, e));
}
const Tf = (r) => wf(r, !1),
  Pf = (r) => wf(r, !0);
function Rf(r, e) {
  return Pt(r, (t) => r.moveVertically(t, e, r.dom.clientHeight));
}
const _c = (r) => Rf(r, !1),
  Xc = (r) => Rf(r, !0),
  Zc = (r) => Pt(r, (e) => os(r, e, !0)),
  Dc = (r) => Pt(r, (e) => os(r, e, !1)),
  p1 = (r) => Pt(r, (e) => E.cursor(r.lineBlockAt(e.head).from)),
  O1 = (r) => Pt(r, (e) => E.cursor(r.lineBlockAt(e.head).to)),
  Ic = ({ state: r, dispatch: e }) => (e(Tt(r, { anchor: 0 })), !0),
  Mc = ({ state: r, dispatch: e }) => (e(Tt(r, { anchor: r.doc.length })), !0),
  jc = ({ state: r, dispatch: e }) => (
    e(Tt(r, { anchor: r.selection.main.anchor, head: 0 })), !0
  ),
  zc = ({ state: r, dispatch: e }) => (
    e(Tt(r, { anchor: r.selection.main.anchor, head: r.doc.length })), !0
  ),
  m1 = ({ state: r, dispatch: e }) => (
    e(
      r.update({
        selection: { anchor: 0, head: r.doc.length },
        userEvent: 'select',
      }),
    ),
    !0
  ),
  g1 = ({ state: r, dispatch: e }) => {
    let t = cs(r).map(({ from: n, to: s }) =>
      E.range(n, Math.min(s + 1, r.doc.length)),
    );
    return e(r.update({ selection: E.create(t), userEvent: 'select' })), !0;
  },
  b1 = ({ state: r, dispatch: e }) => {
    let t = Ki(r.selection, (n) => {
      var s;
      let o = _e(r).resolveInner(n.head, 1);
      for (
        ;
        !(
          (o.from < n.from && o.to >= n.to) ||
          (o.to > n.to && o.from <= n.from) ||
          !(!((s = o.parent) === null || s === void 0) && s.parent)
        );

      )
        o = o.parent;
      return E.range(o.to, o.from);
    });
    return e(Tt(r, t)), !0;
  },
  y1 = ({ state: r, dispatch: e }) => {
    let t = r.selection,
      n = null;
    return (
      t.ranges.length > 1
        ? (n = E.create([t.main]))
        : t.main.empty || (n = E.create([E.cursor(t.main.head)])),
      n ? (e(Tt(r, n)), !0) : !1
    );
  };
function ls({ state: r, dispatch: e }, t) {
  if (r.readOnly) return !1;
  let n = 'delete.selection',
    s = r.changeByRange((o) => {
      let { from: l, to: a } = o;
      if (l == a) {
        let c = t(l);
        c < l ? (n = 'delete.backward') : c > l && (n = 'delete.forward'),
          (l = Math.min(l, c)),
          (a = Math.max(a, c));
      }
      return l == a
        ? { range: o }
        : { changes: { from: l, to: a }, range: E.cursor(l) };
    });
  return s.changes.empty
    ? !1
    : (e(r.update(s, { scrollIntoView: !0, userEvent: n })), !0);
}
function as(r, e, t) {
  if (r instanceof G)
    for (let n of r.pluginField(Me.atomicRanges))
      n.between(e, e, (s, o) => {
        s < e && o > e && (e = t ? o : s);
      });
  return e;
}
const Cf = (r, e) =>
    ls(r, (t) => {
      let { state: n } = r,
        s = n.doc.lineAt(t),
        o,
        l;
      if (
        !e &&
        t > s.from &&
        t < s.from + 200 &&
        !/[^ \t]/.test((o = s.text.slice(0, t - s.from)))
      ) {
        if (o[o.length - 1] == '	') return t - 1;
        let a = qr(o, n.tabSize),
          c = a % _r(n) || _r(n);
        for (let h = 0; h < c && o[o.length - 1 - h] == ' '; h++) t--;
        l = t;
      } else
        (l = Je(s.text, t - s.from, e, e) + s.from),
          l == t && s.number != (e ? n.doc.lines : 1) && (l += e ? 1 : -1);
      return as(r, l, e);
    }),
  Go = (r) => Cf(r, !1),
  Wf = (r) => Cf(r, !0),
  Af = (r, e) =>
    ls(r, (t) => {
      let n = t,
        { state: s } = r,
        o = s.doc.lineAt(n),
        l = s.charCategorizer(n);
      for (let a = null; ; ) {
        if (n == (e ? o.to : o.from)) {
          n == t && o.number != (e ? s.doc.lines : 1) && (n += e ? 1 : -1);
          break;
        }
        let c = Je(o.text, n - o.from, e) + o.from,
          h = o.text.slice(Math.min(n, c) - o.from, Math.max(n, c) - o.from),
          u = l(h);
        if (a != null && u != a) break;
        (h != ' ' || n != t) && (a = u), (n = c);
      }
      return as(r, n, e);
    }),
  Cl = (r) => Af(r, !1),
  Q1 = (r) => Af(r, !0),
  Ef = (r) =>
    ls(r, (e) => {
      let t = r.lineBlockAt(e).to;
      return as(r, e < t ? t : Math.min(r.state.doc.length, e + 1), !0);
    }),
  x1 = (r) =>
    ls(r, (e) => {
      let t = r.lineBlockAt(e).from;
      return as(r, e > t ? t : Math.max(0, e - 1), !1);
    }),
  v1 = ({ state: r, dispatch: e }) => {
    if (r.readOnly) return !1;
    let t = r.changeByRange((n) => ({
      changes: { from: n.from, to: n.to, insert: K.of(['', '']) },
      range: E.cursor(n.from),
    }));
    return e(r.update(t, { scrollIntoView: !0, userEvent: 'input' })), !0;
  },
  S1 = ({ state: r, dispatch: e }) => {
    if (r.readOnly) return !1;
    let t = r.changeByRange((n) => {
      if (!n.empty || n.from == 0 || n.from == r.doc.length)
        return { range: n };
      let s = n.from,
        o = r.doc.lineAt(s),
        l = s == o.from ? s - 1 : Je(o.text, s - o.from, !1) + o.from,
        a = s == o.to ? s + 1 : Je(o.text, s - o.from, !0) + o.from;
      return {
        changes: {
          from: l,
          to: a,
          insert: r.doc.slice(s, a).append(r.doc.slice(l, s)),
        },
        range: E.cursor(a),
      };
    });
    return t.changes.empty
      ? !1
      : (e(r.update(t, { scrollIntoView: !0, userEvent: 'move.character' })),
        !0);
  };
function cs(r) {
  let e = [],
    t = -1;
  for (let n of r.selection.ranges) {
    let s = r.doc.lineAt(n.from),
      o = r.doc.lineAt(n.to);
    if (
      (!n.empty && n.to == o.from && (o = r.doc.lineAt(n.to - 1)),
      t >= s.number)
    ) {
      let l = e[e.length - 1];
      (l.to = o.to), l.ranges.push(n);
    } else e.push({ from: s.from, to: o.to, ranges: [n] });
    t = o.number + 1;
  }
  return e;
}
function Lf(r, e, t) {
  if (r.readOnly) return !1;
  let n = [],
    s = [];
  for (let o of cs(r)) {
    if (t ? o.to == r.doc.length : o.from == 0) continue;
    let l = r.doc.lineAt(t ? o.to + 1 : o.from - 1),
      a = l.length + 1;
    if (t) {
      n.push(
        { from: o.to, to: l.to },
        { from: o.from, insert: l.text + r.lineBreak },
      );
      for (let c of o.ranges)
        s.push(
          E.range(
            Math.min(r.doc.length, c.anchor + a),
            Math.min(r.doc.length, c.head + a),
          ),
        );
    } else {
      n.push(
        { from: l.from, to: o.from },
        { from: o.to, insert: r.lineBreak + l.text },
      );
      for (let c of o.ranges) s.push(E.range(c.anchor - a, c.head - a));
    }
  }
  return n.length
    ? (e(
        r.update({
          changes: n,
          scrollIntoView: !0,
          selection: E.create(s, r.selection.mainIndex),
          userEvent: 'move.line',
        }),
      ),
      !0)
    : !1;
}
const $1 = ({ state: r, dispatch: e }) => Lf(r, e, !1),
  k1 = ({ state: r, dispatch: e }) => Lf(r, e, !0);
function _f(r, e, t) {
  if (r.readOnly) return !1;
  let n = [];
  for (let s of cs(r))
    t
      ? n.push({
          from: s.from,
          insert: r.doc.slice(s.from, s.to) + r.lineBreak,
        })
      : n.push({ from: s.to, insert: r.lineBreak + r.doc.slice(s.from, s.to) });
  return (
    e(
      r.update({ changes: n, scrollIntoView: !0, userEvent: 'input.copyline' }),
    ),
    !0
  );
}
const w1 = ({ state: r, dispatch: e }) => _f(r, e, !1),
  T1 = ({ state: r, dispatch: e }) => _f(r, e, !0),
  P1 = (r) => {
    if (r.state.readOnly) return !1;
    let { state: e } = r,
      t = e.changes(
        cs(e).map(
          ({ from: s, to: o }) => (
            s > 0 ? s-- : o < e.doc.length && o++, { from: s, to: o }
          ),
        ),
      ),
      n = Ki(e.selection, (s) => r.moveVertically(s, !0)).map(t);
    return (
      r.dispatch({
        changes: t,
        selection: n,
        scrollIntoView: !0,
        userEvent: 'delete.line',
      }),
      !0
    );
  };
function R1(r, e) {
  if (/\(\)|\[\]|\{\}/.test(r.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = _e(r).resolveInner(e),
    n = t.childBefore(e),
    s = t.childAfter(e),
    o;
  return n &&
    s &&
    n.to <= e &&
    s.from >= e &&
    (o = n.type.prop(B.closedBy)) &&
    o.indexOf(s.name) > -1 &&
    r.doc.lineAt(n.to).from == r.doc.lineAt(s.from).from
    ? { from: n.to, to: s.from }
    : null;
}
const C1 = Xf(!1),
  W1 = Xf(!0);
function Xf(r) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly) return !1;
    let n = e.changeByRange((s) => {
      let { from: o, to: l } = s,
        a = e.doc.lineAt(o),
        c = !r && o == l && R1(e, o);
      r && (o = l = (l <= a.to ? a : e.doc.lineAt(l)).to);
      let h = new ts(e, { simulateBreak: o, simulateDoubleBreak: !!c }),
        u = nf(h, o);
      for (
        u == null && (u = /^\s*/.exec(e.doc.lineAt(o).text)[0].length);
        l < a.to && /\s/.test(a.text[l - a.from]);

      )
        l++;
      c
        ? ({ from: o, to: l } = c)
        : o > a.from &&
          o < a.from + 100 &&
          !/\S/.test(a.text.slice(0, o)) &&
          (o = a.from);
      let f = ['', Xr(e, u)];
      return (
        c && f.push(Xr(e, h.lineIndent(a.from, -1))),
        {
          changes: { from: o, to: l, insert: K.of(f) },
          range: E.cursor(o + 1 + f[1].length),
        }
      );
    });
    return t(e.update(n, { scrollIntoView: !0, userEvent: 'input' })), !0;
  };
}
function Wl(r, e) {
  let t = -1;
  return r.changeByRange((n) => {
    let s = [];
    for (let l = n.from; l <= n.to; ) {
      let a = r.doc.lineAt(l);
      a.number > t &&
        (n.empty || n.to > a.from) &&
        (e(a, s, n), (t = a.number)),
        (l = a.to + 1);
    }
    let o = r.changes(s);
    return {
      changes: s,
      range: E.range(o.mapPos(n.anchor, 1), o.mapPos(n.head, 1)),
    };
  });
}
const A1 = ({ state: r, dispatch: e }) => {
    if (r.readOnly) return !1;
    let t = Object.create(null),
      n = new ts(r, {
        overrideIndentation: (o) => {
          let l = t[o];
          return l ?? -1;
        },
      }),
      s = Wl(r, (o, l, a) => {
        let c = nf(n, o.from);
        if (c == null) return;
        /\S/.test(o.text) || (c = 0);
        let h = /^\s*/.exec(o.text)[0],
          u = Xr(r, c);
        (h != u || a.from < o.from + h.length) &&
          ((t[o.from] = c),
          l.push({ from: o.from, to: o.from + h.length, insert: u }));
      });
    return s.changes.empty || e(r.update(s, { userEvent: 'indent' })), !0;
  },
  Zf = ({ state: r, dispatch: e }) =>
    r.readOnly
      ? !1
      : (e(
          r.update(
            Wl(r, (t, n) => {
              n.push({ from: t.from, insert: r.facet(es) });
            }),
            { userEvent: 'input.indent' },
          ),
        ),
        !0),
  Df = ({ state: r, dispatch: e }) =>
    r.readOnly
      ? !1
      : (e(
          r.update(
            Wl(r, (t, n) => {
              let s = /^\s*/.exec(t.text)[0];
              if (!s) return;
              let o = qr(s, r.tabSize),
                l = 0,
                a = Xr(r, Math.max(0, o - _r(r)));
              for (
                ;
                l < s.length &&
                l < a.length &&
                s.charCodeAt(l) == a.charCodeAt(l);

              )
                l++;
              n.push({
                from: t.from + l,
                to: t.from + s.length,
                insert: a.slice(l),
              });
            }),
            { userEvent: 'delete.dedent' },
          ),
        ),
        !0),
  E1 = [
    { key: 'Ctrl-b', run: Of, shift: Sf, preventDefault: !0 },
    { key: 'Ctrl-f', run: mf, shift: $f },
    { key: 'Ctrl-p', run: yf, shift: Tf },
    { key: 'Ctrl-n', run: Qf, shift: Pf },
    { key: 'Ctrl-a', run: o1, shift: p1 },
    { key: 'Ctrl-e', run: l1, shift: O1 },
    { key: 'Ctrl-d', run: Wf },
    { key: 'Ctrl-h', run: Go },
    { key: 'Ctrl-k', run: Ef },
    { key: 'Ctrl-Alt-h', run: Cl },
    { key: 'Ctrl-o', run: v1 },
    { key: 'Ctrl-t', run: S1 },
    { key: 'Ctrl-v', run: qo },
  ],
  L1 = [
    { key: 'ArrowLeft', run: Of, shift: Sf, preventDefault: !0 },
    { key: 'Mod-ArrowLeft', mac: 'Alt-ArrowLeft', run: t1, shift: h1 },
    { mac: 'Cmd-ArrowLeft', run: Lc, shift: Dc },
    { key: 'ArrowRight', run: mf, shift: $f, preventDefault: !0 },
    { key: 'Mod-ArrowRight', mac: 'Alt-ArrowRight', run: i1, shift: u1 },
    { mac: 'Cmd-ArrowRight', run: Ec, shift: Zc },
    { key: 'ArrowUp', run: yf, shift: Tf, preventDefault: !0 },
    { mac: 'Cmd-ArrowUp', run: Ic, shift: jc },
    { mac: 'Ctrl-ArrowUp', run: Ac, shift: _c },
    { key: 'ArrowDown', run: Qf, shift: Pf, preventDefault: !0 },
    { mac: 'Cmd-ArrowDown', run: Mc, shift: zc },
    { mac: 'Ctrl-ArrowDown', run: qo, shift: Xc },
    { key: 'PageUp', run: Ac, shift: _c },
    { key: 'PageDown', run: qo, shift: Xc },
    { key: 'Home', run: Lc, shift: Dc },
    { key: 'Mod-Home', run: Ic, shift: jc },
    { key: 'End', run: Ec, shift: Zc },
    { key: 'Mod-End', run: Mc, shift: zc },
    { key: 'Enter', run: C1 },
    { key: 'Mod-a', run: m1 },
    { key: 'Backspace', run: Go, shift: Go },
    { key: 'Delete', run: Wf },
    { key: 'Mod-Backspace', mac: 'Alt-Backspace', run: Cl },
    { key: 'Mod-Delete', mac: 'Alt-Delete', run: Q1 },
    { mac: 'Mod-Backspace', run: x1 },
    { mac: 'Mod-Delete', run: Ef },
  ].concat(E1.map((r) => ({ mac: r.key, run: r.run, shift: r.shift }))),
  _1 = [
    { key: 'Alt-ArrowLeft', mac: 'Ctrl-ArrowLeft', run: r1, shift: f1 },
    { key: 'Alt-ArrowRight', mac: 'Ctrl-ArrowRight', run: s1, shift: d1 },
    { key: 'Alt-ArrowUp', run: $1 },
    { key: 'Shift-Alt-ArrowUp', run: w1 },
    { key: 'Alt-ArrowDown', run: k1 },
    { key: 'Shift-Alt-ArrowDown', run: T1 },
    { key: 'Escape', run: y1 },
    { key: 'Mod-Enter', run: W1 },
    { key: 'Alt-l', mac: 'Ctrl-l', run: g1 },
    { key: 'Mod-i', run: b1, preventDefault: !0 },
    { key: 'Mod-[', run: Df },
    { key: 'Mod-]', run: Zf },
    { key: 'Mod-Alt-\\', run: A1 },
    { key: 'Shift-Mod-k', run: P1 },
    { key: 'Shift-Mod-\\', run: c1 },
  ].concat(L1),
  X1 = (r) => {
    let e = El(r.state);
    return e.line ? Z1(r) : e.block ? I1(r) : !1;
  };
function Al(r, e) {
  return ({ state: t, dispatch: n }) => {
    if (t.readOnly) return !1;
    let s = r(e, t);
    return s ? (n(t.update(s)), !0) : !1;
  };
}
const Z1 = Al(N1, 0),
  D1 = Al(If, 0),
  I1 = Al((r, e) => If(r, e, z1(e)), 0),
  M1 = [
    { key: 'Mod-/', run: X1 },
    { key: 'Alt-A', run: D1 },
  ];
function El(r, e = r.selection.main.head) {
  let t = r.languageDataAt('commentTokens', e);
  return t.length ? t[0] : {};
}
const hn = 50;
function j1(r, { open: e, close: t }, n, s) {
  let o = r.sliceDoc(n - hn, n),
    l = r.sliceDoc(s, s + hn),
    a = /\s*$/.exec(o)[0].length,
    c = /^\s*/.exec(l)[0].length,
    h = o.length - a;
  if (o.slice(h - e.length, h) == e && l.slice(c, c + t.length) == t)
    return {
      open: { pos: n - a, margin: a && 1 },
      close: { pos: s + c, margin: c && 1 },
    };
  let u, f;
  s - n <= 2 * hn
    ? (u = f = r.sliceDoc(n, s))
    : ((u = r.sliceDoc(n, n + hn)), (f = r.sliceDoc(s - hn, s)));
  let d = /^\s*/.exec(u)[0].length,
    p = /\s*$/.exec(f)[0].length,
    m = f.length - p - t.length;
  return u.slice(d, d + e.length) == e && f.slice(m, m + t.length) == t
    ? {
        open: {
          pos: n + d + e.length,
          margin: /\s/.test(u.charAt(d + e.length)) ? 1 : 0,
        },
        close: {
          pos: s - p - t.length,
          margin: /\s/.test(f.charAt(m - 1)) ? 1 : 0,
        },
      }
    : null;
}
function z1(r) {
  let e = [];
  for (let t of r.selection.ranges) {
    let n = r.doc.lineAt(t.from),
      s = t.to <= n.to ? n : r.doc.lineAt(t.to),
      o = e.length - 1;
    o >= 0 && e[o].to > n.from
      ? (e[o].to = s.to)
      : e.push({ from: n.from, to: s.to });
  }
  return e;
}
function If(r, e, t = e.selection.ranges) {
  let n = t.map((o) => El(e, o.from).block);
  if (!n.every((o) => o)) return null;
  let s = t.map((o, l) => j1(e, n[l], o.from, o.to));
  if (r != 2 && !s.every((o) => o))
    return {
      changes: e.changes(
        t.map((o, l) =>
          s[l]
            ? []
            : [
                { from: o.from, insert: n[l].open + ' ' },
                { from: o.to, insert: ' ' + n[l].close },
              ],
        ),
      ),
    };
  if (r != 1 && s.some((o) => o)) {
    let o = [];
    for (let l = 0, a; l < s.length; l++)
      if ((a = s[l])) {
        let c = n[l],
          { open: h, close: u } = a;
        o.push(
          { from: h.pos - c.open.length, to: h.pos + h.margin },
          { from: u.pos - u.margin, to: u.pos + c.close.length },
        );
      }
    return { changes: o };
  }
  return null;
}
function N1(r, e, t = e.selection.ranges) {
  let n = [],
    s = -1;
  for (let { from: o, to: l } of t) {
    let a = n.length,
      c = 1e9;
    for (let h = o; h <= l; ) {
      let u = e.doc.lineAt(h);
      if (u.from > s && (o == l || l > u.from)) {
        s = u.from;
        let f = El(e, h).line;
        if (!f) continue;
        let d = /^\s*/.exec(u.text)[0].length,
          p = d == u.length,
          m = u.text.slice(d, d + f.length) == f ? d : -1;
        d < u.text.length && d < c && (c = d),
          n.push({
            line: u,
            comment: m,
            token: f,
            indent: d,
            empty: p,
            single: !1,
          });
      }
      h = u.to + 1;
    }
    if (c < 1e9)
      for (let h = a; h < n.length; h++)
        n[h].indent < n[h].line.text.length && (n[h].indent = c);
    n.length == a + 1 && (n[a].single = !0);
  }
  if (r != 2 && n.some((o) => o.comment < 0 && (!o.empty || o.single))) {
    let o = [];
    for (let { line: a, token: c, indent: h, empty: u, single: f } of n)
      (f || !u) && o.push({ from: a.from + h, insert: c + ' ' });
    let l = e.changes(o);
    return { changes: l, selection: e.selection.map(l, 1) };
  } else if (r != 1 && n.some((o) => o.comment >= 0)) {
    let o = [];
    for (let { line: l, comment: a, token: c } of n)
      if (a >= 0) {
        let h = l.from + a,
          u = h + c.length;
        l.text[u - l.from] == ' ' && u++, o.push({ from: h, to: u });
      }
    return { changes: o };
  }
  return null;
}
class wi extends $i {
  compare(e) {
    return this == e || (this.constructor == e.constructor && this.eq(e));
  }
  eq(e) {
    return !1;
  }
  destroy(e) {}
}
wi.prototype.elementClass = '';
wi.prototype.toDOM = void 0;
wi.prototype.mapMode = Le.TrackBefore;
wi.prototype.startSide = wi.prototype.endSide = -1;
wi.prototype.point = !0;
const Us = U.define(),
  yr = U.define(),
  B1 = G.baseTheme({
    '.cm-gutters': {
      display: 'flex',
      height: '100%',
      boxSizing: 'border-box',
      left: 0,
      zIndex: 200,
    },
    '&light .cm-gutters': {
      backgroundColor: '#f5f5f5',
      color: '#999',
      borderRight: '1px solid #ddd',
    },
    '&dark .cm-gutters': { backgroundColor: '#333338', color: '#ccc' },
    '.cm-gutter': {
      display: 'flex !important',
      flexDirection: 'column',
      flexShrink: 0,
      boxSizing: 'border-box',
      minHeight: '100%',
      overflow: 'hidden',
    },
    '.cm-gutterElement': { boxSizing: 'border-box' },
    '.cm-lineNumbers .cm-gutterElement': {
      padding: '0 3px 0 5px',
      minWidth: '20px',
      textAlign: 'right',
      whiteSpace: 'nowrap',
    },
    '&light .cm-activeLineGutter': { backgroundColor: '#e2f2ff' },
    '&dark .cm-activeLineGutter': { backgroundColor: '#222227' },
  }),
  Fo = U.define({ combine: (r) => r.some((e) => e) });
function U1(r) {
  let e = [V1, B1];
  return r && r.fixed === !1 && e.push(Fo.of(!0)), e;
}
const V1 = ht.fromClass(
  class {
    constructor(r) {
      (this.view = r),
        (this.prevViewport = r.viewport),
        (this.dom = document.createElement('div')),
        (this.dom.className = 'cm-gutters'),
        this.dom.setAttribute('aria-hidden', 'true'),
        (this.dom.style.minHeight = this.view.contentHeight + 'px'),
        (this.gutters = r.state.facet(yr).map((e) => new Bc(r, e)));
      for (let e of this.gutters) this.dom.appendChild(e.dom);
      (this.fixed = !r.state.facet(Fo)),
        this.fixed && (this.dom.style.position = 'sticky'),
        this.syncGutters(!1),
        r.scrollDOM.insertBefore(this.dom, r.contentDOM);
    }
    update(r) {
      if (this.updateGutters(r)) {
        let e = this.prevViewport,
          t = r.view.viewport,
          n = Math.min(e.to, t.to) - Math.max(e.from, t.from);
        this.syncGutters(n < (t.to - t.from) * 0.8);
      }
      r.geometryChanged &&
        (this.dom.style.minHeight = this.view.contentHeight + 'px'),
        this.view.state.facet(Fo) != !this.fixed &&
          ((this.fixed = !this.fixed),
          (this.dom.style.position = this.fixed ? 'sticky' : '')),
        (this.prevViewport = r.view.viewport);
    }
    syncGutters(r) {
      let e = this.dom.nextSibling;
      r && this.dom.remove();
      let t = le.iter(this.view.state.facet(Us), this.view.viewport.from),
        n = [],
        s = this.gutters.map(
          (o) => new Y1(o, this.view.viewport, -this.view.documentPadding.top),
        );
      for (let o of this.view.viewportLineBlocks) {
        let l;
        if (Array.isArray(o.type)) {
          for (let a of o.type)
            if (a.type == Oe.Text) {
              l = a;
              break;
            }
        } else l = o.type == Oe.Text ? o : void 0;
        if (!!l) {
          n.length && (n = []), Mf(t, n, o.from);
          for (let a of s) a.line(this.view, l, n);
        }
      }
      for (let o of s) o.finish();
      r && this.view.scrollDOM.insertBefore(this.dom, e);
    }
    updateGutters(r) {
      let e = r.startState.facet(yr),
        t = r.state.facet(yr),
        n =
          r.docChanged ||
          r.heightChanged ||
          r.viewportChanged ||
          !le.eq(
            r.startState.facet(Us),
            r.state.facet(Us),
            r.view.viewport.from,
            r.view.viewport.to,
          );
      if (e == t) for (let s of this.gutters) s.update(r) && (n = !0);
      else {
        n = !0;
        let s = [];
        for (let o of t) {
          let l = e.indexOf(o);
          l < 0
            ? s.push(new Bc(this.view, o))
            : (this.gutters[l].update(r), s.push(this.gutters[l]));
        }
        for (let o of this.gutters)
          o.dom.remove(), s.indexOf(o) < 0 && o.destroy();
        for (let o of s) this.dom.appendChild(o.dom);
        this.gutters = s;
      }
      return n;
    }
    destroy() {
      for (let r of this.gutters) r.destroy();
      this.dom.remove();
    }
  },
  {
    provide: Me.scrollMargins.from((r) =>
      r.gutters.length == 0 || !r.fixed
        ? null
        : r.view.textDirection == ne.LTR
        ? { left: r.dom.offsetWidth }
        : { right: r.dom.offsetWidth },
    ),
  },
);
function Nc(r) {
  return Array.isArray(r) ? r : [r];
}
function Mf(r, e, t) {
  for (; r.value && r.from <= t; ) r.from == t && e.push(r.value), r.next();
}
class Y1 {
  constructor(e, t, n) {
    (this.gutter = e),
      (this.height = n),
      (this.localMarkers = []),
      (this.i = 0),
      (this.cursor = le.iter(e.markers, t.from));
  }
  line(e, t, n) {
    this.localMarkers.length && (this.localMarkers = []),
      Mf(this.cursor, this.localMarkers, t.from);
    let s = n.length ? this.localMarkers.concat(n) : this.localMarkers,
      o = this.gutter.config.lineMarker(e, t, s);
    o && s.unshift(o);
    let l = this.gutter;
    if (s.length == 0 && !l.config.renderEmptyElements) return;
    let a = t.top - this.height;
    if (this.i == l.elements.length) {
      let c = new jf(e, t.height, a, s);
      l.elements.push(c), l.dom.appendChild(c.dom);
    } else l.elements[this.i].update(e, t.height, a, s);
    (this.height = t.bottom), this.i++;
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class Bc {
  constructor(e, t) {
    (this.view = e),
      (this.config = t),
      (this.elements = []),
      (this.spacer = null),
      (this.dom = document.createElement('div')),
      (this.dom.className =
        'cm-gutter' + (this.config.class ? ' ' + this.config.class : ''));
    for (let n in t.domEventHandlers)
      this.dom.addEventListener(n, (s) => {
        let o = e.lineBlockAtHeight(s.clientY - e.documentTop);
        t.domEventHandlers[n](e, o, s) && s.preventDefault();
      });
    (this.markers = Nc(t.markers(e))),
      t.initialSpacer &&
        ((this.spacer = new jf(e, 0, 0, [t.initialSpacer(e)])),
        this.dom.appendChild(this.spacer.dom),
        (this.spacer.dom.style.cssText +=
          'visibility: hidden; pointer-events: none'));
  }
  update(e) {
    let t = this.markers;
    if (
      ((this.markers = Nc(this.config.markers(e.view))),
      this.spacer && this.config.updateSpacer)
    ) {
      let s = this.config.updateSpacer(this.spacer.markers[0], e);
      s != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [s]);
    }
    let n = e.view.viewport;
    return (
      !le.eq(this.markers, t, n.from, n.to) ||
      (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1)
    );
  }
  destroy() {
    for (let e of this.elements) e.destroy();
  }
}
class jf {
  constructor(e, t, n, s) {
    (this.height = -1),
      (this.above = 0),
      (this.markers = []),
      (this.dom = document.createElement('div')),
      this.update(e, t, n, s);
  }
  update(e, t, n, s) {
    this.height != t && (this.dom.style.height = (this.height = t) + 'px'),
      this.above != n &&
        (this.dom.style.marginTop = (this.above = n) ? n + 'px' : ''),
      q1(this.markers, s) || this.setMarkers(e, s);
  }
  setMarkers(e, t) {
    let n = 'cm-gutterElement',
      s = this.dom.firstChild;
    for (let o = 0, l = 0; ; ) {
      let a = l,
        c = o < t.length ? t[o++] : null,
        h = !1;
      if (c) {
        let u = c.elementClass;
        u && (n += ' ' + u);
        for (let f = l; f < this.markers.length; f++)
          if (this.markers[f].compare(c)) {
            (a = f), (h = !0);
            break;
          }
      } else a = this.markers.length;
      for (; l < a; ) {
        let u = this.markers[l++];
        if (u.toDOM) {
          u.destroy(s);
          let f = s.nextSibling;
          s.remove(), (s = f);
        }
      }
      if (!c) break;
      c.toDOM &&
        (h ? (s = s.nextSibling) : this.dom.insertBefore(c.toDOM(e), s)),
        h && l++;
    }
    (this.dom.className = n), (this.markers = t);
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function q1(r, e) {
  if (r.length != e.length) return !1;
  for (let t = 0; t < r.length; t++) if (!r[t].compare(e[t])) return !1;
  return !0;
}
const G1 = U.define(),
  Di = U.define({
    combine(r) {
      return Fr(
        r,
        { formatNumber: String, domEventHandlers: {} },
        {
          domEventHandlers(e, t) {
            let n = Object.assign({}, e);
            for (let s in t) {
              let o = n[s],
                l = t[s];
              n[s] = o ? (a, c, h) => o(a, c, h) || l(a, c, h) : l;
            }
            return n;
          },
        },
      );
    },
  });
class Vs extends wi {
  constructor(e) {
    super(), (this.number = e);
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function Ys(r, e) {
  return r.state.facet(Di).formatNumber(e, r.state);
}
const F1 = yr.compute([Di], (r) => ({
  class: 'cm-lineNumbers',
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(G1);
  },
  lineMarker(e, t, n) {
    return n.some((s) => s.toDOM)
      ? null
      : new Vs(Ys(e, e.state.doc.lineAt(t.from).number));
  },
  lineMarkerChange: (e) => e.startState.facet(Di) != e.state.facet(Di),
  initialSpacer(e) {
    return new Vs(Ys(e, Uc(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let n = Ys(t.view, Uc(t.view.state.doc.lines));
    return n == e.number ? e : new Vs(n);
  },
  domEventHandlers: r.facet(Di).domEventHandlers,
}));
function H1(r = {}) {
  return [Di.of(r), U1(), F1];
}
function Uc(r) {
  let e = 9;
  for (; e < r; ) e = e * 10 + 9;
  return e;
}
let J1 = 0;
class yt {
  constructor(e, t, n) {
    (this.set = e), (this.base = t), (this.modified = n), (this.id = J1++);
  }
  static define(e) {
    if (e?.base) throw new Error('Can not derive from a modified tag');
    let t = new yt([], null, []);
    if ((t.set.push(t), e)) for (let n of e.set) t.set.push(n);
    return t;
  }
  static defineModifier() {
    let e = new Dr();
    return (t) =>
      t.modified.indexOf(e) > -1
        ? t
        : Dr.get(
            t.base || t,
            t.modified.concat(e).sort((n, s) => n.id - s.id),
          );
  }
}
let K1 = 0;
class Dr {
  constructor() {
    (this.instances = []), (this.id = K1++);
  }
  static get(e, t) {
    if (!t.length) return e;
    let n = t[0].instances.find((a) => a.base == e && eb(t, a.modified));
    if (n) return n;
    let s = [],
      o = new yt(s, e, t);
    for (let a of t) a.instances.push(o);
    let l = zf(t);
    for (let a of e.set) for (let c of l) s.push(Dr.get(a, c));
    return o;
  }
}
function eb(r, e) {
  return r.length == e.length && r.every((t, n) => t == e[n]);
}
function zf(r) {
  let e = [r];
  for (let t = 0; t < r.length; t++)
    for (let n of zf(r.slice(0, t).concat(r.slice(t + 1)))) e.push(n);
  return e;
}
function Ll(r) {
  let e = Object.create(null);
  for (let t in r) {
    let n = r[t];
    Array.isArray(n) || (n = [n]);
    for (let s of t.split(' '))
      if (s) {
        let o = [],
          l = 2,
          a = s;
        for (let f = 0; ; ) {
          if (a == '...' && f > 0 && f + 3 == s.length) {
            l = 1;
            break;
          }
          let d = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(a);
          if (!d) throw new RangeError('Invalid path: ' + s);
          if (
            (o.push(
              d[0] == '*' ? null : d[0][0] == '"' ? JSON.parse(d[0]) : d[0],
            ),
            (f += d[0].length),
            f == s.length)
          )
            break;
          let p = s[f++];
          if (f == s.length && p == '!') {
            l = 0;
            break;
          }
          if (p != '/') throw new RangeError('Invalid path: ' + s);
          a = s.slice(f);
        }
        let c = o.length - 1,
          h = o[c];
        if (!h) throw new RangeError('Invalid path: ' + s);
        let u = new tb(n, l, c > 0 ? o.slice(0, c) : null);
        e[h] = u.sort(e[h]);
      }
  }
  return Nf.add(e);
}
const Nf = new B(),
  Ir = U.define({
    combine(r) {
      return r.length ? An.combinedMatch(r) : null;
    },
  }),
  Bf = U.define({
    combine(r) {
      return r.length ? r[0].match : null;
    },
  });
function Ho(r) {
  return r.facet(Ir) || r.facet(Bf);
}
class tb {
  constructor(e, t, n, s) {
    (this.tags = e), (this.mode = t), (this.context = n), (this.next = s);
  }
  sort(e) {
    return !e || e.depth < this.depth
      ? ((this.next = e), this)
      : ((e.next = this.sort(e.next)), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
class An {
  constructor(e, t) {
    this.map = Object.create(null);
    let n;
    function s(l) {
      let a = ni.newName();
      return ((n || (n = Object.create(null)))['.' + a] = l), a;
    }
    this.all = typeof t.all == 'string' ? t.all : t.all ? s(t.all) : null;
    for (let l of e) {
      let a =
          (l.class || s(Object.assign({}, l, { tag: null }))) +
          (this.all ? ' ' + this.all : ''),
        c = l.tag;
      if (!Array.isArray(c)) this.map[c.id] = a;
      else for (let h of c) this.map[h.id] = a;
    }
    (this.module = n ? new ni(n) : null),
      (this.scope = t.scope || null),
      (this.match = this.match.bind(this));
    let o = [rb];
    this.module && o.push(G.styleModule.of(this.module)),
      (this.extension = o.concat(
        t.themeType == null
          ? Ir.of(this)
          : Ir.computeN([G.darkTheme], (l) =>
              l.facet(G.darkTheme) == (t.themeType == 'dark') ? [this] : [],
            ),
      )),
      (this.fallback = o.concat(Bf.of(this)));
  }
  match(e, t) {
    if (this.scope && t != this.scope) return null;
    for (let n of e.set) {
      let s = this.map[n.id];
      if (s !== void 0) return n != e && (this.map[e.id] = s), s;
    }
    return (this.map[e.id] = this.all);
  }
  static combinedMatch(e) {
    if (e.length == 1) return e[0].match;
    let t = e.some((n) => n.scope) ? void 0 : Object.create(null);
    return (n, s) => {
      let o = t && t[n.id];
      if (o !== void 0) return o;
      let l = null;
      for (let a of e) {
        let c = a.match(n, s);
        c && (l = l ? l + ' ' + c : c);
      }
      return t && (t[n.id] = l), l;
    };
  }
  static define(e, t) {
    return new An(e, t || {});
  }
  static get(e, t, n) {
    let s = Ho(e);
    return s && s(t, n || Ue.none);
  }
}
function ib(r, e, t, n = 0, s = r.length) {
  Uf(r, n, s, e, t);
}
class nb {
  constructor(e) {
    (this.markCache = Object.create(null)),
      (this.tree = _e(e.state)),
      (this.decorations = this.buildDeco(e, Ho(e.state)));
  }
  update(e) {
    let t = _e(e.state),
      n = Ho(e.state),
      s = n != e.startState.facet(Ir);
    t.length < e.view.viewport.to && !s && t.type == this.tree.type
      ? (this.decorations = this.decorations.map(e.changes))
      : (t != this.tree || e.viewportChanged || s) &&
        ((this.tree = t), (this.decorations = this.buildDeco(e.view, n)));
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length) return q.none;
    let n = new zi();
    for (let { from: s, to: o } of e.visibleRanges)
      Uf(this.tree, s, o, t, (l, a, c) => {
        n.add(
          l,
          a,
          this.markCache[c] || (this.markCache[c] = q.mark({ class: c })),
        );
      });
    return n.finish();
  }
}
const rb = pl.high(ht.fromClass(nb, { decorations: (r) => r.decorations })),
  Vc = [''];
class sb {
  constructor(e, t, n) {
    (this.at = e), (this.style = t), (this.span = n), (this.class = '');
  }
  startSpan(e, t) {
    t != this.class &&
      (this.flush(e), e > this.at && (this.at = e), (this.class = t));
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, n, s, o, l) {
    let { type: a, from: c, to: h } = e;
    if (c >= n || h <= t) return;
    (Vc[o] = a.name), a.isTop && (l = a);
    let u = s,
      f = a.prop(Nf),
      d = !1;
    for (; f; ) {
      if (!f.context || ob(f.context, Vc, o)) {
        for (let m of f.tags) {
          let S = this.style(m, l);
          S &&
            (u && (u += ' '),
            (u += S),
            f.mode == 1 ? (s += (s ? ' ' : '') + S) : f.mode == 0 && (d = !0));
        }
        break;
      }
      f = f.next;
    }
    if ((this.startSpan(e.from, u), d)) return;
    let p = e.tree && e.tree.prop(B.mounted);
    if (p && p.overlay) {
      let m = e.node.enter(p.overlay[0].from + c, 1),
        S = e.firstChild();
      for (let T = 0, k = c; ; T++) {
        let b = T < p.overlay.length ? p.overlay[T] : null,
          Q = b ? b.from + c : h,
          v = Math.max(t, k),
          P = Math.min(n, Q);
        if (v < P && S)
          for (
            ;
            e.from < P &&
            (this.highlightRange(e, v, P, s, o + 1, l),
            this.startSpan(Math.min(n, e.to), u),
            !(e.to >= Q || !e.nextSibling()));

          );
        if (!b || Q > n) break;
        (k = b.to + c),
          k > t &&
            (this.highlightRange(
              m.cursor,
              Math.max(t, b.from + c),
              Math.min(n, k),
              s,
              o,
              p.tree.type,
            ),
            this.startSpan(k, u));
      }
      S && e.parent();
    } else if (e.firstChild()) {
      do
        if (!(e.to <= t)) {
          if (e.from >= n) break;
          this.highlightRange(e, t, n, s, o + 1, l),
            this.startSpan(Math.min(n, e.to), u);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function Uf(r, e, t, n, s) {
  let o = new sb(e, n, s);
  o.highlightRange(r.cursor(), e, t, '', 0, r.type), o.flush(t);
}
function ob(r, e, t) {
  if (r.length > t - 1) return !1;
  for (let n = t - 1, s = r.length - 1; s >= 0; s--, n--) {
    let o = r[s];
    if (o && o != e[n]) return !1;
  }
  return !0;
}
const _ = yt.define,
  ir = _(),
  Ft = _(),
  Yc = _(Ft),
  qc = _(Ft),
  Ht = _(),
  nr = _(Ht),
  qs = _(Ht),
  bt = _(),
  di = _(bt),
  mt = _(),
  gt = _(),
  Jo = _(),
  un = _(Jo),
  rr = _(),
  $ = {
    comment: ir,
    lineComment: _(ir),
    blockComment: _(ir),
    docComment: _(ir),
    name: Ft,
    variableName: _(Ft),
    typeName: Yc,
    tagName: _(Yc),
    propertyName: qc,
    attributeName: _(qc),
    className: _(Ft),
    labelName: _(Ft),
    namespace: _(Ft),
    macroName: _(Ft),
    literal: Ht,
    string: nr,
    docString: _(nr),
    character: _(nr),
    attributeValue: _(nr),
    number: qs,
    integer: _(qs),
    float: _(qs),
    bool: _(Ht),
    regexp: _(Ht),
    escape: _(Ht),
    color: _(Ht),
    url: _(Ht),
    keyword: mt,
    self: _(mt),
    null: _(mt),
    atom: _(mt),
    unit: _(mt),
    modifier: _(mt),
    operatorKeyword: _(mt),
    controlKeyword: _(mt),
    definitionKeyword: _(mt),
    moduleKeyword: _(mt),
    operator: gt,
    derefOperator: _(gt),
    arithmeticOperator: _(gt),
    logicOperator: _(gt),
    bitwiseOperator: _(gt),
    compareOperator: _(gt),
    updateOperator: _(gt),
    definitionOperator: _(gt),
    typeOperator: _(gt),
    controlOperator: _(gt),
    punctuation: Jo,
    separator: _(Jo),
    bracket: un,
    angleBracket: _(un),
    squareBracket: _(un),
    paren: _(un),
    brace: _(un),
    content: bt,
    heading: di,
    heading1: _(di),
    heading2: _(di),
    heading3: _(di),
    heading4: _(di),
    heading5: _(di),
    heading6: _(di),
    contentSeparator: _(bt),
    list: _(bt),
    quote: _(bt),
    emphasis: _(bt),
    strong: _(bt),
    link: _(bt),
    monospace: _(bt),
    strikethrough: _(bt),
    inserted: _(),
    deleted: _(),
    changed: _(),
    invalid: _(),
    meta: rr,
    documentMeta: _(rr),
    annotation: _(rr),
    processingInstruction: _(rr),
    definition: yt.defineModifier(),
    constant: yt.defineModifier(),
    function: yt.defineModifier(),
    standard: yt.defineModifier(),
    local: yt.defineModifier(),
    special: yt.defineModifier(),
  },
  lb = An.define([
    { tag: $.link, textDecoration: 'underline' },
    { tag: $.heading, textDecoration: 'underline', fontWeight: 'bold' },
    { tag: $.emphasis, fontStyle: 'italic' },
    { tag: $.strong, fontWeight: 'bold' },
    { tag: $.strikethrough, textDecoration: 'line-through' },
    { tag: $.keyword, color: '#708' },
    {
      tag: [$.atom, $.bool, $.url, $.contentSeparator, $.labelName],
      color: '#219',
    },
    { tag: [$.literal, $.inserted], color: '#164' },
    { tag: [$.string, $.deleted], color: '#a11' },
    { tag: [$.regexp, $.escape, $.special($.string)], color: '#e40' },
    { tag: $.definition($.variableName), color: '#00f' },
    { tag: $.local($.variableName), color: '#30a' },
    { tag: [$.typeName, $.namespace], color: '#085' },
    { tag: $.className, color: '#167' },
    { tag: [$.special($.variableName), $.macroName], color: '#256' },
    { tag: $.definition($.propertyName), color: '#00c' },
    { tag: $.comment, color: '#940' },
    { tag: $.meta, color: '#7a757a' },
    { tag: $.invalid, color: '#f00' },
  ]),
  Ko = jt.define(),
  ab = jt.define(),
  cb = U.define(),
  Vf = U.define({
    combine(r) {
      return Fr(
        r,
        { minDepth: 100, newGroupDelay: 500 },
        { minDepth: Math.max, newGroupDelay: Math.min },
      );
    },
  });
function hb(r) {
  let e = 0;
  return r.iterChangedRanges((t, n) => (e = n)), e;
}
const Yf = wt.define({
  create() {
    return St.empty;
  },
  update(r, e) {
    let t = e.state.facet(Vf),
      n = e.annotation(Ko);
    if (n) {
      let c = e.docChanged ? E.single(hb(e.changes)) : void 0,
        h = Ne.fromTransaction(e, c),
        u = n.side,
        f = u == 0 ? r.undone : r.done;
      return (
        h
          ? (f = Mr(f, f.length, t.minDepth, h))
          : (f = Hf(f, e.startState.selection)),
        new St(u == 0 ? n.rest : f, u == 0 ? f : n.rest)
      );
    }
    let s = e.annotation(ab);
    if (
      ((s == 'full' || s == 'before') && (r = r.isolate()),
      e.annotation(ke.addToHistory) === !1)
    )
      return e.changes.empty ? r : r.addMapping(e.changes.desc);
    let o = Ne.fromTransaction(e),
      l = e.annotation(ke.time),
      a = e.annotation(ke.userEvent);
    return (
      o
        ? (r = r.addChanges(o, l, a, t.newGroupDelay, t.minDepth))
        : e.selection &&
          (r = r.addSelection(e.startState.selection, l, a, t.newGroupDelay)),
      (s == 'full' || s == 'after') && (r = r.isolate()),
      r
    );
  },
  toJSON(r) {
    return {
      done: r.done.map((e) => e.toJSON()),
      undone: r.undone.map((e) => e.toJSON()),
    };
  },
  fromJSON(r) {
    return new St(r.done.map(Ne.fromJSON), r.undone.map(Ne.fromJSON));
  },
});
function ub(r = {}) {
  return [
    Yf,
    Vf.of(r),
    G.domEventHandlers({
      beforeinput(e, t) {
        let n =
          e.inputType == 'historyUndo'
            ? qf
            : e.inputType == 'historyRedo'
            ? Gf
            : null;
        return n ? (e.preventDefault(), n(t)) : !1;
      },
    }),
  ];
}
function hs(r, e) {
  return function ({ state: t, dispatch: n }) {
    if (!e && t.readOnly) return !1;
    let s = t.field(Yf, !1);
    if (!s) return !1;
    let o = s.pop(r, t, e);
    return o ? (n(o), !0) : !1;
  };
}
const qf = hs(0, !1),
  Gf = hs(1, !1),
  fb = hs(0, !0),
  db = hs(1, !0);
class Ne {
  constructor(e, t, n, s, o) {
    (this.changes = e),
      (this.effects = t),
      (this.mapped = n),
      (this.startSelection = s),
      (this.selectionsAfter = o);
  }
  setSelAfter(e) {
    return new Ne(
      this.changes,
      this.effects,
      this.mapped,
      this.startSelection,
      e,
    );
  }
  toJSON() {
    var e, t, n;
    return {
      changes:
        (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
      startSelection:
        (n = this.startSelection) === null || n === void 0
          ? void 0
          : n.toJSON(),
      selectionsAfter: this.selectionsAfter.map((s) => s.toJSON()),
    };
  }
  static fromJSON(e) {
    return new Ne(
      e.changes && $e.fromJSON(e.changes),
      [],
      e.mapped && Zt.fromJSON(e.mapped),
      e.startSelection && E.fromJSON(e.startSelection),
      e.selectionsAfter.map(E.fromJSON),
    );
  }
  static fromTransaction(e, t) {
    let n = it;
    for (let s of e.startState.facet(cb)) {
      let o = s(e);
      o.length && (n = n.concat(o));
    }
    return !n.length && e.changes.empty
      ? null
      : new Ne(
          e.changes.invert(e.startState.doc),
          n,
          void 0,
          t || e.startState.selection,
          it,
        );
  }
  static selection(e) {
    return new Ne(void 0, it, void 0, void 0, e);
  }
}
function Mr(r, e, t, n) {
  let s = e + 1 > t + 20 ? e - t - 1 : 0,
    o = r.slice(s, e);
  return o.push(n), o;
}
function pb(r, e) {
  let t = [],
    n = !1;
  return (
    r.iterChangedRanges((s, o) => t.push(s, o)),
    e.iterChangedRanges((s, o, l, a) => {
      for (let c = 0; c < t.length; ) {
        let h = t[c++],
          u = t[c++];
        a >= h && l <= u && (n = !0);
      }
    }),
    n
  );
}
function Ob(r, e) {
  return (
    r.ranges.length == e.ranges.length &&
    r.ranges.filter((t, n) => t.empty != e.ranges[n].empty).length === 0
  );
}
function Ff(r, e) {
  return r.length ? (e.length ? r.concat(e) : r) : e;
}
const it = [],
  mb = 200;
function Hf(r, e) {
  if (r.length) {
    let t = r[r.length - 1],
      n = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - mb));
    return n.length && n[n.length - 1].eq(e)
      ? r
      : (n.push(e), Mr(r, r.length - 1, 1e9, t.setSelAfter(n)));
  } else return [Ne.selection([e])];
}
function gb(r) {
  let e = r[r.length - 1],
    t = r.slice();
  return (
    (t[r.length - 1] = e.setSelAfter(
      e.selectionsAfter.slice(0, e.selectionsAfter.length - 1),
    )),
    t
  );
}
function Gs(r, e) {
  if (!r.length) return r;
  let t = r.length,
    n = it;
  for (; t; ) {
    let s = bb(r[t - 1], e, n);
    if ((s.changes && !s.changes.empty) || s.effects.length) {
      let o = r.slice(0, t);
      return (o[t - 1] = s), o;
    } else (e = s.mapped), t--, (n = s.selectionsAfter);
  }
  return n.length ? [Ne.selection(n)] : it;
}
function bb(r, e, t) {
  let n = Ff(
    r.selectionsAfter.length ? r.selectionsAfter.map((a) => a.map(e)) : it,
    t,
  );
  if (!r.changes) return Ne.selection(n);
  let s = r.changes.map(e),
    o = e.mapDesc(r.changes, !0),
    l = r.mapped ? r.mapped.composeDesc(o) : o;
  return new Ne(s, te.mapEffects(r.effects, e), l, r.startSelection.map(o), n);
}
const yb = /^(input\.type|delete)($|\.)/;
class St {
  constructor(e, t, n = 0, s = void 0) {
    (this.done = e),
      (this.undone = t),
      (this.prevTime = n),
      (this.prevUserEvent = s);
  }
  isolate() {
    return this.prevTime ? new St(this.done, this.undone) : this;
  }
  addChanges(e, t, n, s, o) {
    let l = this.done,
      a = l[l.length - 1];
    return (
      a &&
      a.changes &&
      !a.changes.empty &&
      e.changes &&
      (!n || yb.test(n)) &&
      ((!a.selectionsAfter.length &&
        t - this.prevTime < s &&
        pb(a.changes, e.changes)) ||
        n == 'input.type.compose')
        ? (l = Mr(
            l,
            l.length - 1,
            o,
            new Ne(
              e.changes.compose(a.changes),
              Ff(e.effects, a.effects),
              a.mapped,
              a.startSelection,
              it,
            ),
          ))
        : (l = Mr(l, l.length, o, e)),
      new St(l, it, t, n)
    );
  }
  addSelection(e, t, n, s) {
    let o = this.done.length
      ? this.done[this.done.length - 1].selectionsAfter
      : it;
    return o.length > 0 &&
      t - this.prevTime < s &&
      n == this.prevUserEvent &&
      n &&
      /^select($|\.)/.test(n) &&
      Ob(o[o.length - 1], e)
      ? this
      : new St(Hf(this.done, e), this.undone, t, n);
  }
  addMapping(e) {
    return new St(
      Gs(this.done, e),
      Gs(this.undone, e),
      this.prevTime,
      this.prevUserEvent,
    );
  }
  pop(e, t, n) {
    let s = e == 0 ? this.done : this.undone;
    if (s.length == 0) return null;
    let o = s[s.length - 1];
    if (n && o.selectionsAfter.length)
      return t.update({
        selection: o.selectionsAfter[o.selectionsAfter.length - 1],
        annotations: Ko.of({ side: e, rest: gb(s) }),
        userEvent: e == 0 ? 'select.undo' : 'select.redo',
        scrollIntoView: !0,
      });
    if (o.changes) {
      let l = s.length == 1 ? it : s.slice(0, s.length - 1);
      return (
        o.mapped && (l = Gs(l, o.mapped)),
        t.update({
          changes: o.changes,
          selection: o.startSelection,
          effects: o.effects,
          annotations: Ko.of({ side: e, rest: l }),
          filter: !1,
          userEvent: e == 0 ? 'undo' : 'redo',
          scrollIntoView: !0,
        })
      );
    } else return null;
  }
}
St.empty = new St(it, it);
const Qb = [
  { key: 'Mod-z', run: qf, preventDefault: !0 },
  { key: 'Mod-y', mac: 'Mod-Shift-z', run: Gf, preventDefault: !0 },
  { key: 'Mod-u', run: fb, preventDefault: !0 },
  { key: 'Alt-u', mac: 'Mod-Shift-u', run: db, preventDefault: !0 },
];
(function () {
  if (typeof window != 'object') return;
  if (
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype
  ) {
    'isIntersecting' in window.IntersectionObserverEntry.prototype ||
      Object.defineProperty(
        window.IntersectionObserverEntry.prototype,
        'isIntersecting',
        {
          get: function () {
            return this.intersectionRatio > 0;
          },
        },
      );
    return;
  }
  var r = window.document,
    e = [],
    t = null,
    n = null;
  function s(b) {
    (this.time = b.time),
      (this.target = b.target),
      (this.rootBounds = p(b.rootBounds)),
      (this.boundingClientRect = p(b.boundingClientRect)),
      (this.intersectionRect = p(b.intersectionRect || d())),
      (this.isIntersecting = !!b.intersectionRect);
    var Q = this.boundingClientRect,
      v = Q.width * Q.height,
      P = this.intersectionRect,
      y = P.width * P.height;
    v
      ? (this.intersectionRatio = Number((y / v).toFixed(4)))
      : (this.intersectionRatio = this.isIntersecting ? 1 : 0);
  }
  function o(b, Q) {
    var v = Q || {};
    if (typeof b != 'function') throw new Error('callback must be a function');
    if (v.root && v.root.nodeType != 1)
      throw new Error('root must be an Element');
    (this._checkForIntersections = a(
      this._checkForIntersections.bind(this),
      this.THROTTLE_TIMEOUT,
    )),
      (this._callback = b),
      (this._observationTargets = []),
      (this._queuedEntries = []),
      (this._rootMarginValues = this._parseRootMargin(v.rootMargin)),
      (this.thresholds = this._initThresholds(v.threshold)),
      (this.root = v.root || null),
      (this.rootMargin = this._rootMarginValues
        .map(function (P) {
          return P.value + P.unit;
        })
        .join(' ')),
      (this._monitoringDocuments = []),
      (this._monitoringUnsubscribes = []);
  }
  (o.prototype.THROTTLE_TIMEOUT = 100),
    (o.prototype.POLL_INTERVAL = null),
    (o.prototype.USE_MUTATION_OBSERVER = !0),
    (o._setupCrossOriginUpdater = function () {
      return (
        t ||
          (t = function (b, Q) {
            !b || !Q ? (n = d()) : (n = m(b, Q)),
              e.forEach(function (v) {
                v._checkForIntersections();
              });
          }),
        t
      );
    }),
    (o._resetCrossOriginUpdater = function () {
      (t = null), (n = null);
    }),
    (o.prototype.observe = function (b) {
      var Q = this._observationTargets.some(function (v) {
        return v.element == b;
      });
      if (!Q) {
        if (!(b && b.nodeType == 1))
          throw new Error('target must be an Element');
        this._registerInstance(),
          this._observationTargets.push({ element: b, entry: null }),
          this._monitorIntersections(b.ownerDocument),
          this._checkForIntersections();
      }
    }),
    (o.prototype.unobserve = function (b) {
      (this._observationTargets = this._observationTargets.filter(function (Q) {
        return Q.element != b;
      })),
        this._unmonitorIntersections(b.ownerDocument),
        this._observationTargets.length == 0 && this._unregisterInstance();
    }),
    (o.prototype.disconnect = function () {
      (this._observationTargets = []),
        this._unmonitorAllIntersections(),
        this._unregisterInstance();
    }),
    (o.prototype.takeRecords = function () {
      var b = this._queuedEntries.slice();
      return (this._queuedEntries = []), b;
    }),
    (o.prototype._initThresholds = function (b) {
      var Q = b || [0];
      return (
        Array.isArray(Q) || (Q = [Q]),
        Q.sort().filter(function (v, P, y) {
          if (typeof v != 'number' || isNaN(v) || v < 0 || v > 1)
            throw new Error(
              'threshold must be a number between 0 and 1 inclusively',
            );
          return v !== y[P - 1];
        })
      );
    }),
    (o.prototype._parseRootMargin = function (b) {
      var Q = b || '0px',
        v = Q.split(/\s+/).map(function (P) {
          var y = /^(-?\d*\.?\d+)(px|%)$/.exec(P);
          if (!y)
            throw new Error(
              'rootMargin must be specified in pixels or percent',
            );
          return { value: parseFloat(y[1]), unit: y[2] };
        });
      return (
        (v[1] = v[1] || v[0]), (v[2] = v[2] || v[0]), (v[3] = v[3] || v[1]), v
      );
    }),
    (o.prototype._monitorIntersections = function (b) {
      var Q = b.defaultView;
      if (!!Q && this._monitoringDocuments.indexOf(b) == -1) {
        var v = this._checkForIntersections,
          P = null,
          y = null;
        if (
          (this.POLL_INTERVAL
            ? (P = Q.setInterval(v, this.POLL_INTERVAL))
            : (c(Q, 'resize', v, !0),
              c(b, 'scroll', v, !0),
              this.USE_MUTATION_OBSERVER &&
                'MutationObserver' in Q &&
                ((y = new Q.MutationObserver(v)),
                y.observe(b, {
                  attributes: !0,
                  childList: !0,
                  characterData: !0,
                  subtree: !0,
                }))),
          this._monitoringDocuments.push(b),
          this._monitoringUnsubscribes.push(function () {
            var R = b.defaultView;
            R && (P && R.clearInterval(P), h(R, 'resize', v, !0)),
              h(b, 'scroll', v, !0),
              y && y.disconnect();
          }),
          b != ((this.root && this.root.ownerDocument) || r))
        ) {
          var w = k(b);
          w && this._monitorIntersections(w.ownerDocument);
        }
      }
    }),
    (o.prototype._unmonitorIntersections = function (b) {
      var Q = this._monitoringDocuments.indexOf(b);
      if (Q != -1) {
        var v = (this.root && this.root.ownerDocument) || r,
          P = this._observationTargets.some(function (R) {
            var A = R.element.ownerDocument;
            if (A == b) return !0;
            for (; A && A != v; ) {
              var C = k(A);
              if (((A = C && C.ownerDocument), A == b)) return !0;
            }
            return !1;
          });
        if (!P) {
          var y = this._monitoringUnsubscribes[Q];
          if (
            (this._monitoringDocuments.splice(Q, 1),
            this._monitoringUnsubscribes.splice(Q, 1),
            y(),
            b != v)
          ) {
            var w = k(b);
            w && this._unmonitorIntersections(w.ownerDocument);
          }
        }
      }
    }),
    (o.prototype._unmonitorAllIntersections = function () {
      var b = this._monitoringUnsubscribes.slice(0);
      (this._monitoringDocuments.length = 0),
        (this._monitoringUnsubscribes.length = 0);
      for (var Q = 0; Q < b.length; Q++) b[Q]();
    }),
    (o.prototype._checkForIntersections = function () {
      if (!(!this.root && t && !n)) {
        var b = this._rootIsInDom(),
          Q = b ? this._getRootRect() : d();
        this._observationTargets.forEach(function (v) {
          var P = v.element,
            y = f(P),
            w = this._rootContainsTarget(P),
            R = v.entry,
            A = b && w && this._computeTargetAndRootIntersection(P, y, Q),
            C = (v.entry = new s({
              time: l(),
              target: P,
              boundingClientRect: y,
              rootBounds: t && !this.root ? null : Q,
              intersectionRect: A,
            }));
          R
            ? b && w
              ? this._hasCrossedThreshold(R, C) && this._queuedEntries.push(C)
              : R && R.isIntersecting && this._queuedEntries.push(C)
            : this._queuedEntries.push(C);
        }, this),
          this._queuedEntries.length &&
            this._callback(this.takeRecords(), this);
      }
    }),
    (o.prototype._computeTargetAndRootIntersection = function (b, Q, v) {
      if (window.getComputedStyle(b).display != 'none') {
        for (var P = Q, y = T(b), w = !1; !w && y; ) {
          var R = null,
            A = y.nodeType == 1 ? window.getComputedStyle(y) : {};
          if (A.display == 'none') return null;
          if (y == this.root || y.nodeType == 9)
            if (((w = !0), y == this.root || y == r))
              t && !this.root
                ? !n || (n.width == 0 && n.height == 0)
                  ? ((y = null), (R = null), (P = null))
                  : (R = n)
                : (R = v);
            else {
              var C = T(y),
                M = C && f(C),
                z = C && this._computeTargetAndRootIntersection(C, M, v);
              M && z ? ((y = C), (R = m(M, z))) : ((y = null), (P = null));
            }
          else {
            var V = y.ownerDocument;
            y != V.body &&
              y != V.documentElement &&
              A.overflow != 'visible' &&
              (R = f(y));
          }
          if ((R && (P = u(R, P)), !P)) break;
          y = y && T(y);
        }
        return P;
      }
    }),
    (o.prototype._getRootRect = function () {
      var b;
      if (this.root) b = f(this.root);
      else {
        var Q = r.documentElement,
          v = r.body;
        b = {
          top: 0,
          left: 0,
          right: Q.clientWidth || v.clientWidth,
          width: Q.clientWidth || v.clientWidth,
          bottom: Q.clientHeight || v.clientHeight,
          height: Q.clientHeight || v.clientHeight,
        };
      }
      return this._expandRectByRootMargin(b);
    }),
    (o.prototype._expandRectByRootMargin = function (b) {
      var Q = this._rootMarginValues.map(function (P, y) {
          return P.unit == 'px'
            ? P.value
            : (P.value * (y % 2 ? b.width : b.height)) / 100;
        }),
        v = {
          top: b.top - Q[0],
          right: b.right + Q[1],
          bottom: b.bottom + Q[2],
          left: b.left - Q[3],
        };
      return (v.width = v.right - v.left), (v.height = v.bottom - v.top), v;
    }),
    (o.prototype._hasCrossedThreshold = function (b, Q) {
      var v = b && b.isIntersecting ? b.intersectionRatio || 0 : -1,
        P = Q.isIntersecting ? Q.intersectionRatio || 0 : -1;
      if (v !== P)
        for (var y = 0; y < this.thresholds.length; y++) {
          var w = this.thresholds[y];
          if (w == v || w == P || w < v != w < P) return !0;
        }
    }),
    (o.prototype._rootIsInDom = function () {
      return !this.root || S(r, this.root);
    }),
    (o.prototype._rootContainsTarget = function (b) {
      return (
        S(this.root || r, b) &&
        (!this.root || this.root.ownerDocument == b.ownerDocument)
      );
    }),
    (o.prototype._registerInstance = function () {
      e.indexOf(this) < 0 && e.push(this);
    }),
    (o.prototype._unregisterInstance = function () {
      var b = e.indexOf(this);
      b != -1 && e.splice(b, 1);
    });
  function l() {
    return window.performance && performance.now && performance.now();
  }
  function a(b, Q) {
    var v = null;
    return function () {
      v ||
        (v = setTimeout(function () {
          b(), (v = null);
        }, Q));
    };
  }
  function c(b, Q, v, P) {
    typeof b.addEventListener == 'function'
      ? b.addEventListener(Q, v, P || !1)
      : typeof b.attachEvent == 'function' && b.attachEvent('on' + Q, v);
  }
  function h(b, Q, v, P) {
    typeof b.removeEventListener == 'function'
      ? b.removeEventListener(Q, v, P || !1)
      : typeof b.detatchEvent == 'function' && b.detatchEvent('on' + Q, v);
  }
  function u(b, Q) {
    var v = Math.max(b.top, Q.top),
      P = Math.min(b.bottom, Q.bottom),
      y = Math.max(b.left, Q.left),
      w = Math.min(b.right, Q.right),
      R = w - y,
      A = P - v;
    return (
      (R >= 0 &&
        A >= 0 && {
          top: v,
          bottom: P,
          left: y,
          right: w,
          width: R,
          height: A,
        }) ||
      null
    );
  }
  function f(b) {
    var Q;
    try {
      Q = b.getBoundingClientRect();
    } catch {}
    return Q
      ? ((Q.width && Q.height) ||
          (Q = {
            top: Q.top,
            right: Q.right,
            bottom: Q.bottom,
            left: Q.left,
            width: Q.right - Q.left,
            height: Q.bottom - Q.top,
          }),
        Q)
      : d();
  }
  function d() {
    return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
  }
  function p(b) {
    return !b || 'x' in b
      ? b
      : {
          top: b.top,
          y: b.top,
          bottom: b.bottom,
          left: b.left,
          x: b.left,
          right: b.right,
          width: b.width,
          height: b.height,
        };
  }
  function m(b, Q) {
    var v = Q.top - b.top,
      P = Q.left - b.left;
    return {
      top: v,
      left: P,
      height: Q.height,
      width: Q.width,
      bottom: v + Q.height,
      right: P + Q.width,
    };
  }
  function S(b, Q) {
    for (var v = Q; v; ) {
      if (v == b) return !0;
      v = T(v);
    }
    return !1;
  }
  function T(b) {
    var Q = b.parentNode;
    return b.nodeType == 9 && b != r
      ? k(b)
      : Q && Q.nodeType == 11 && Q.host
      ? Q.host
      : Q && Q.assignedSlot
      ? Q.assignedSlot.parentNode
      : Q;
  }
  function k(b) {
    try {
      return (b.defaultView && b.defaultView.frameElement) || null;
    } catch {
      return null;
    }
  }
  (window.IntersectionObserver = o), (window.IntersectionObserverEntry = s);
})();
const xb =
    ze[
      typeof document < 'u' && document.createElement !== void 0
        ? 'useLayoutEffect'
        : 'useEffect'
    ],
  vb = xb;
function Sb(r, e = {}) {
  const {
      root: t = null,
      pollInterval: n = null,
      useMutationObserver: s = !1,
      rootMargin: o = '0px 0px 0px 0px',
      threshold: l = 0,
      initialIsIntersecting: a = !1,
    } = e,
    [c, h] = O.exports.useState(() => ({
      boundingClientRect: null,
      intersectionRatio: 0,
      intersectionRect: null,
      isIntersecting: a,
      rootBounds: null,
      target: null,
      time: 0,
    })),
    [u, f] = O.exports.useState(() =>
      Fc({
        root: t,
        pollInterval: n,
        useMutationObserver: s,
        rootMargin: o,
        threshold: l,
      }),
    );
  return (
    O.exports.useEffect(() => {
      const d = Fc({
        root: t,
        pollInterval: n,
        useMutationObserver: s,
        rootMargin: o,
        threshold: l,
      });
      f(d);
    }, [t, o, n, s, JSON.stringify(l)]),
    vb(() => {
      const d = r && 'current' in r ? r.current : r;
      if (!u || !d) return;
      let p = !1;
      u.observer.observe(d);
      const m = (S) => {
        if (!p)
          for (let T = 0; T < S.length; T++) {
            const k = S[T];
            k.target === d && h(k);
          }
      };
      return (
        u.subscribe(m),
        () => {
          (p = !0), u.observer.unobserve(d), u.unsubscribe(m);
        }
      );
    }, [r, u]),
    c
  );
}
function $b({
  root: r = null,
  pollInterval: e = null,
  useMutationObserver: t = !1,
  rootMargin: n = '0px 0px 0px 0px',
  threshold: s = 0,
}) {
  const o = new Set();
  if (typeof IntersectionObserver > 'u') return null;
  const l = new IntersectionObserver(
    (a) => {
      for (const c of o) c(a, l);
    },
    { root: r, rootMargin: n, threshold: s },
  );
  return (
    (l.POLL_INTERVAL = e),
    (l.USE_MUTATION_OBSERVER = t),
    {
      observer: l,
      getListeners() {
        return o;
      },
      subscribe: (a) => o.add(a),
      unsubscribe: (a) => o.delete(a),
    }
  );
}
const Gc = new Map();
function Fc(r) {
  const { root: e, ...t } = r,
    n = JSON.stringify(t);
  let s = Gc.get(e);
  return s || ((s = {}), Gc.set(e, s)), s[n] ? s[n] : (s[n] = $b(r));
}
class jr {
  constructor(e, t, n, s, o, l, a, c, h, u = 0, f) {
    (this.p = e),
      (this.stack = t),
      (this.state = n),
      (this.reducePos = s),
      (this.pos = o),
      (this.score = l),
      (this.buffer = a),
      (this.bufferBase = c),
      (this.curContext = h),
      (this.lookAhead = u),
      (this.parent = f);
  }
  toString() {
    return `[${this.stack.filter((e, t) => t % 3 == 0).concat(this.state)}]@${
      this.pos
    }${this.score ? '!' + this.score : ''}`;
  }
  static start(e, t, n = 0) {
    let s = e.parser.context;
    return new jr(
      e,
      [],
      t,
      n,
      n,
      0,
      [],
      0,
      s ? new Hc(s, s.start) : null,
      0,
      null,
    );
  }
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  pushState(e, t) {
    this.stack.push(this.state, t, this.bufferBase + this.buffer.length),
      (this.state = e);
  }
  reduce(e) {
    let t = e >> 19,
      n = e & 65535,
      { parser: s } = this.p,
      o = s.dynamicPrecedence(n);
    if ((o && (this.score += o), t == 0)) {
      this.pushState(s.getGoto(this.state, n, !0), this.reducePos),
        n < s.minRepeatTerm &&
          this.storeNode(n, this.reducePos, this.reducePos, 4, !0),
        this.reduceContext(n, this.reducePos);
      return;
    }
    let l = this.stack.length - (t - 1) * 3 - (e & 262144 ? 6 : 0),
      a = this.stack[l - 2],
      c = this.stack[l - 1],
      h = this.bufferBase + this.buffer.length - c;
    if (n < s.minRepeatTerm || e & 131072) {
      let u = s.stateFlag(this.state, 1) ? this.pos : this.reducePos;
      this.storeNode(n, a, u, h + 4, !0);
    }
    if (e & 262144) this.state = this.stack[l];
    else {
      let u = this.stack[l - 3];
      this.state = s.getGoto(u, n, !0);
    }
    for (; this.stack.length > l; ) this.stack.pop();
    this.reduceContext(n, a);
  }
  storeNode(e, t, n, s = 4, o = !1) {
    if (e == 0) {
      let l = this,
        a = this.buffer.length;
      if (
        (a == 0 &&
          l.parent &&
          ((a = l.bufferBase - l.parent.bufferBase), (l = l.parent)),
        a > 0 && l.buffer[a - 4] == 0 && l.buffer[a - 1] > -1)
      ) {
        if (t == n) return;
        if (l.buffer[a - 2] >= t) {
          l.buffer[a - 2] = n;
          return;
        }
      }
    }
    if (!o || this.pos == n) this.buffer.push(e, t, n, s);
    else {
      let l = this.buffer.length;
      if (l > 0 && this.buffer[l - 4] != 0)
        for (; l > 0 && this.buffer[l - 2] > n; )
          (this.buffer[l] = this.buffer[l - 4]),
            (this.buffer[l + 1] = this.buffer[l - 3]),
            (this.buffer[l + 2] = this.buffer[l - 2]),
            (this.buffer[l + 3] = this.buffer[l - 1]),
            (l -= 4),
            s > 4 && (s -= 4);
      (this.buffer[l] = e),
        (this.buffer[l + 1] = t),
        (this.buffer[l + 2] = n),
        (this.buffer[l + 3] = s);
    }
  }
  shift(e, t, n) {
    let s = this.pos;
    if (e & 131072) this.pushState(e & 65535, this.pos);
    else if ((e & 262144) == 0) {
      let o = e,
        { parser: l } = this.p;
      (n > this.pos || t <= l.maxNode) &&
        ((this.pos = n), l.stateFlag(o, 1) || (this.reducePos = n)),
        this.pushState(o, s),
        this.shiftContext(t, s),
        t <= l.maxNode && this.buffer.push(t, s, n, 4);
    } else
      (this.pos = n),
        this.shiftContext(t, s),
        t <= this.p.parser.maxNode && this.buffer.push(t, s, n, 4);
  }
  apply(e, t, n) {
    e & 65536 ? this.reduce(e) : this.shift(e, t, n);
  }
  useNode(e, t) {
    let n = this.p.reused.length - 1;
    (n < 0 || this.p.reused[n] != e) && (this.p.reused.push(e), n++);
    let s = this.pos;
    (this.reducePos = this.pos = s + e.length),
      this.pushState(t, s),
      this.buffer.push(n, s, this.reducePos, -1),
      this.curContext &&
        this.updateContext(
          this.curContext.tracker.reuse(
            this.curContext.context,
            e,
            this,
            this.p.stream.reset(this.pos - e.length),
          ),
        );
  }
  split() {
    let e = this,
      t = e.buffer.length;
    for (; t > 0 && e.buffer[t - 2] > e.reducePos; ) t -= 4;
    let n = e.buffer.slice(t),
      s = e.bufferBase + t;
    for (; e && s == e.bufferBase; ) e = e.parent;
    return new jr(
      this.p,
      this.stack.slice(),
      this.state,
      this.reducePos,
      this.pos,
      this.score,
      n,
      s,
      this.curContext,
      this.lookAhead,
      e,
    );
  }
  recoverByDelete(e, t) {
    let n = e <= this.p.parser.maxNode;
    n && this.storeNode(e, this.pos, t, 4),
      this.storeNode(0, this.pos, t, n ? 8 : 4),
      (this.pos = this.reducePos = t),
      (this.score -= 190);
  }
  canShift(e) {
    for (let t = new kb(this); ; ) {
      let n =
        this.p.parser.stateSlot(t.state, 4) ||
        this.p.parser.hasAction(t.state, e);
      if ((n & 65536) == 0) return !0;
      if (n == 0) return !1;
      t.reduce(n);
    }
  }
  recoverByInsert(e) {
    if (this.stack.length >= 300) return [];
    let t = this.p.parser.nextStates(this.state);
    if (t.length > 4 << 1 || this.stack.length >= 120) {
      let s = [];
      for (let o = 0, l; o < t.length; o += 2)
        (l = t[o + 1]) != this.state &&
          this.p.parser.hasAction(l, e) &&
          s.push(t[o], l);
      if (this.stack.length < 120)
        for (let o = 0; s.length < 4 << 1 && o < t.length; o += 2) {
          let l = t[o + 1];
          s.some((a, c) => c & 1 && a == l) || s.push(t[o], l);
        }
      t = s;
    }
    let n = [];
    for (let s = 0; s < t.length && n.length < 4; s += 2) {
      let o = t[s + 1];
      if (o == this.state) continue;
      let l = this.split();
      l.storeNode(0, l.pos, l.pos, 4, !0),
        l.pushState(o, this.pos),
        l.shiftContext(t[s], this.pos),
        (l.score -= 200),
        n.push(l);
    }
    return n;
  }
  forceReduce() {
    let e = this.p.parser.stateSlot(this.state, 5);
    if ((e & 65536) == 0) return !1;
    let { parser: t } = this.p;
    if (!t.validAction(this.state, e)) {
      let n = e >> 19,
        s = e & 65535,
        o = this.stack.length - n * 3;
      if (o < 0 || t.getGoto(this.stack[o], s, !1) < 0) return !1;
      this.storeNode(0, this.reducePos, this.reducePos, 4, !0),
        (this.score -= 100);
    }
    return this.reduce(e), !0;
  }
  forceAll() {
    for (; !this.p.parser.stateFlag(this.state, 2); )
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, !0);
        break;
      }
    return this;
  }
  get deadEnd() {
    if (this.stack.length != 3) return !1;
    let { parser: e } = this.p;
    return (
      e.data[e.stateSlot(this.state, 1)] == 65535 && !e.stateSlot(this.state, 4)
    );
  }
  restart() {
    (this.state = this.stack[0]), (this.stack.length = 0);
  }
  sameState(e) {
    if (this.state != e.state || this.stack.length != e.stack.length) return !1;
    for (let t = 0; t < this.stack.length; t += 3)
      if (this.stack[t] != e.stack[t]) return !1;
    return !0;
  }
  get parser() {
    return this.p.parser;
  }
  dialectEnabled(e) {
    return this.p.parser.dialect.flags[e];
  }
  shiftContext(e, t) {
    this.curContext &&
      this.updateContext(
        this.curContext.tracker.shift(
          this.curContext.context,
          e,
          this,
          this.p.stream.reset(t),
        ),
      );
  }
  reduceContext(e, t) {
    this.curContext &&
      this.updateContext(
        this.curContext.tracker.reduce(
          this.curContext.context,
          e,
          this,
          this.p.stream.reset(t),
        ),
      );
  }
  emitContext() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -3) &&
      this.buffer.push(
        this.curContext.hash,
        this.reducePos,
        this.reducePos,
        -3,
      );
  }
  emitLookAhead() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -4) &&
      this.buffer.push(this.lookAhead, this.reducePos, this.reducePos, -4);
  }
  updateContext(e) {
    if (e != this.curContext.context) {
      let t = new Hc(this.curContext.tracker, e);
      t.hash != this.curContext.hash && this.emitContext(),
        (this.curContext = t);
    }
  }
  setLookAhead(e) {
    e > this.lookAhead && (this.emitLookAhead(), (this.lookAhead = e));
  }
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(),
      this.lookAhead > 0 && this.emitLookAhead();
  }
}
class Hc {
  constructor(e, t) {
    (this.tracker = e),
      (this.context = t),
      (this.hash = e.strict ? e.hash(t) : 0);
  }
}
var Jc;
(function (r) {
  (r[(r.Insert = 200)] = 'Insert'),
    (r[(r.Delete = 190)] = 'Delete'),
    (r[(r.Reduce = 100)] = 'Reduce'),
    (r[(r.MaxNext = 4)] = 'MaxNext'),
    (r[(r.MaxInsertStackDepth = 300)] = 'MaxInsertStackDepth'),
    (r[(r.DampenInsertStackDepth = 120)] = 'DampenInsertStackDepth');
})(Jc || (Jc = {}));
class kb {
  constructor(e) {
    (this.start = e),
      (this.state = e.state),
      (this.stack = e.stack),
      (this.base = this.stack.length);
  }
  reduce(e) {
    let t = e & 65535,
      n = e >> 19;
    n == 0
      ? (this.stack == this.start.stack && (this.stack = this.stack.slice()),
        this.stack.push(this.state, 0, 0),
        (this.base += 3))
      : (this.base -= (n - 1) * 3);
    let s = this.start.p.parser.getGoto(this.stack[this.base - 3], t, !0);
    this.state = s;
  }
}
class zr {
  constructor(e, t, n) {
    (this.stack = e),
      (this.pos = t),
      (this.index = n),
      (this.buffer = e.buffer),
      this.index == 0 && this.maybeNext();
  }
  static create(e, t = e.bufferBase + e.buffer.length) {
    return new zr(e, t, t - e.bufferBase);
  }
  maybeNext() {
    let e = this.stack.parent;
    e != null &&
      ((this.index = this.stack.bufferBase - e.bufferBase),
      (this.stack = e),
      (this.buffer = e.buffer));
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    (this.index -= 4), (this.pos -= 4), this.index == 0 && this.maybeNext();
  }
  fork() {
    return new zr(this.stack, this.pos, this.index);
  }
}
class Qr {
  constructor() {
    (this.start = -1),
      (this.value = -1),
      (this.end = -1),
      (this.extended = -1),
      (this.lookAhead = 0),
      (this.mask = 0),
      (this.context = 0);
  }
}
const Kc = new Qr();
class wb {
  constructor(e, t) {
    (this.input = e),
      (this.ranges = t),
      (this.chunk = ''),
      (this.chunkOff = 0),
      (this.chunk2 = ''),
      (this.chunk2Pos = 0),
      (this.next = -1),
      (this.token = Kc),
      (this.rangeIndex = 0),
      (this.pos = this.chunkPos = t[0].from),
      (this.range = t[0]),
      (this.end = t[t.length - 1].to),
      this.readNext();
  }
  resolveOffset(e, t) {
    let n = this.range,
      s = this.rangeIndex,
      o = this.pos + e;
    for (; o < n.from; ) {
      if (!s) return null;
      let l = this.ranges[--s];
      (o -= n.from - l.to), (n = l);
    }
    for (; t < 0 ? o > n.to : o >= n.to; ) {
      if (s == this.ranges.length - 1) return null;
      let l = this.ranges[++s];
      (o += l.from - n.to), (n = l);
    }
    return o;
  }
  peek(e) {
    let t = this.chunkOff + e,
      n,
      s;
    if (t >= 0 && t < this.chunk.length)
      (n = this.pos + e), (s = this.chunk.charCodeAt(t));
    else {
      let o = this.resolveOffset(e, 1);
      if (o == null) return -1;
      if (
        ((n = o),
        n >= this.chunk2Pos && n < this.chunk2Pos + this.chunk2.length)
      )
        s = this.chunk2.charCodeAt(n - this.chunk2Pos);
      else {
        let l = this.rangeIndex,
          a = this.range;
        for (; a.to <= n; ) a = this.ranges[++l];
        (this.chunk2 = this.input.chunk((this.chunk2Pos = n))),
          n + this.chunk2.length > a.to &&
            (this.chunk2 = this.chunk2.slice(0, a.to - n)),
          (s = this.chunk2.charCodeAt(0));
      }
    }
    return n >= this.token.lookAhead && (this.token.lookAhead = n + 1), s;
  }
  acceptToken(e, t = 0) {
    let n = t ? this.resolveOffset(t, -1) : this.pos;
    if (n == null || n < this.token.start)
      throw new RangeError('Token end out of bounds');
    (this.token.value = e), (this.token.end = n);
  }
  getChunk() {
    if (
      this.pos >= this.chunk2Pos &&
      this.pos < this.chunk2Pos + this.chunk2.length
    ) {
      let { chunk: e, chunkPos: t } = this;
      (this.chunk = this.chunk2),
        (this.chunkPos = this.chunk2Pos),
        (this.chunk2 = e),
        (this.chunk2Pos = t),
        (this.chunkOff = this.pos - this.chunkPos);
    } else {
      (this.chunk2 = this.chunk), (this.chunk2Pos = this.chunkPos);
      let e = this.input.chunk(this.pos),
        t = this.pos + e.length;
      (this.chunk =
        t > this.range.to ? e.slice(0, this.range.to - this.pos) : e),
        (this.chunkPos = this.pos),
        (this.chunkOff = 0);
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length &&
      (this.getChunk(), this.chunkOff == this.chunk.length)
      ? (this.next = -1)
      : (this.next = this.chunk.charCodeAt(this.chunkOff));
  }
  advance(e = 1) {
    for (this.chunkOff += e; this.pos + e >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
      (e -= this.range.to - this.pos),
        (this.range = this.ranges[++this.rangeIndex]),
        (this.pos = this.range.from);
    }
    return (
      (this.pos += e),
      this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1),
      this.readNext()
    );
  }
  setDone() {
    return (
      (this.pos = this.chunkPos = this.end),
      (this.range = this.ranges[(this.rangeIndex = this.ranges.length - 1)]),
      (this.chunk = ''),
      (this.next = -1)
    );
  }
  reset(e, t) {
    if (
      (t
        ? ((this.token = t),
          (t.start = e),
          (t.lookAhead = e + 1),
          (t.value = t.extended = -1))
        : (this.token = Kc),
      this.pos != e)
    ) {
      if (((this.pos = e), e == this.end)) return this.setDone(), this;
      for (; e < this.range.from; ) this.range = this.ranges[--this.rangeIndex];
      for (; e >= this.range.to; ) this.range = this.ranges[++this.rangeIndex];
      e >= this.chunkPos && e < this.chunkPos + this.chunk.length
        ? (this.chunkOff = e - this.chunkPos)
        : ((this.chunk = ''), (this.chunkOff = 0)),
        this.readNext();
    }
    return this;
  }
  read(e, t) {
    if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length)
      return this.chunk.slice(e - this.chunkPos, t - this.chunkPos);
    if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length)
      return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos);
    if (e >= this.range.from && t <= this.range.to)
      return this.input.read(e, t);
    let n = '';
    for (let s of this.ranges) {
      if (s.from >= t) break;
      s.to > e &&
        (n += this.input.read(Math.max(s.from, e), Math.min(s.to, t)));
    }
    return n;
  }
}
class xr {
  constructor(e, t) {
    (this.data = e), (this.id = t);
  }
  token(e, t) {
    Tb(this.data, e, t, this.id);
  }
}
xr.prototype.contextual = xr.prototype.fallback = xr.prototype.extend = !1;
class Rt {
  constructor(e, t = {}) {
    (this.token = e),
      (this.contextual = !!t.contextual),
      (this.fallback = !!t.fallback),
      (this.extend = !!t.extend);
  }
}
function Tb(r, e, t, n) {
  let s = 0,
    o = 1 << n,
    { parser: l } = t.p,
    { dialect: a } = l;
  e: for (; (o & r[s]) != 0; ) {
    let c = r[s + 1];
    for (let h = s + 3; h < c; h += 2)
      if ((r[h + 1] & o) > 0) {
        let u = r[h];
        if (
          a.allows(u) &&
          (e.token.value == -1 ||
            e.token.value == u ||
            l.overrides(u, e.token.value))
        ) {
          e.acceptToken(u);
          break;
        }
      }
    for (let h = e.next, u = 0, f = r[s + 2]; u < f; ) {
      let d = (u + f) >> 1,
        p = c + d + (d << 1),
        m = r[p],
        S = r[p + 1];
      if (h < m) f = d;
      else if (h >= S) u = d + 1;
      else {
        (s = r[p + 2]), e.advance();
        continue e;
      }
    }
    break;
  }
}
function sr(r, e = Uint16Array) {
  if (typeof r != 'string') return r;
  let t = null;
  for (let n = 0, s = 0; n < r.length; ) {
    let o = 0;
    for (;;) {
      let l = r.charCodeAt(n++),
        a = !1;
      if (l == 126) {
        o = 65535;
        break;
      }
      l >= 92 && l--, l >= 34 && l--;
      let c = l - 32;
      if ((c >= 46 && ((c -= 46), (a = !0)), (o += c), a)) break;
      o *= 46;
    }
    t ? (t[s++] = o) : (t = new e(o));
  }
  return t;
}
const ot = typeof process < 'u' && /\bparse\b/.test(process.env.LOG);
let Fs = null;
var eh;
(function (r) {
  r[(r.Margin = 25)] = 'Margin';
})(eh || (eh = {}));
function th(r, e, t) {
  let n = r.fullCursor();
  for (n.moveTo(e); ; )
    if (!(t < 0 ? n.childBefore(e) : n.childAfter(e)))
      for (;;) {
        if ((t < 0 ? n.to < e : n.from > e) && !n.type.isError)
          return t < 0
            ? Math.max(0, Math.min(n.to - 1, e - 25))
            : Math.min(r.length, Math.max(n.from + 1, e + 25));
        if (t < 0 ? n.prevSibling() : n.nextSibling()) break;
        if (!n.parent()) return t < 0 ? 0 : r.length;
      }
}
class Pb {
  constructor(e, t) {
    (this.fragments = e),
      (this.nodeSet = t),
      (this.i = 0),
      (this.fragment = null),
      (this.safeFrom = -1),
      (this.safeTo = -1),
      (this.trees = []),
      (this.start = []),
      (this.index = []),
      this.nextFragment();
  }
  nextFragment() {
    let e = (this.fragment =
      this.i == this.fragments.length ? null : this.fragments[this.i++]);
    if (e) {
      for (
        this.safeFrom = e.openStart
          ? th(e.tree, e.from + e.offset, 1) - e.offset
          : e.from,
          this.safeTo = e.openEnd
            ? th(e.tree, e.to + e.offset, -1) - e.offset
            : e.to;
        this.trees.length;

      )
        this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(e.tree),
        this.start.push(-e.offset),
        this.index.push(0),
        (this.nextStart = this.safeFrom);
    } else this.nextStart = 1e9;
  }
  nodeAt(e) {
    if (e < this.nextStart) return null;
    for (; this.fragment && this.safeTo <= e; ) this.nextFragment();
    if (!this.fragment) return null;
    for (;;) {
      let t = this.trees.length - 1;
      if (t < 0) return this.nextFragment(), null;
      let n = this.trees[t],
        s = this.index[t];
      if (s == n.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let o = n.children[s],
        l = this.start[t] + n.positions[s];
      if (l > e) return (this.nextStart = l), null;
      if (o instanceof ue) {
        if (l == e) {
          if (l < this.safeFrom) return null;
          let a = l + o.length;
          if (a <= this.safeTo) {
            let c = o.prop(B.lookAhead);
            if (!c || a + c < this.fragment.to) return o;
          }
        }
        this.index[t]++,
          l + o.length >= Math.max(this.safeFrom, e) &&
            (this.trees.push(o), this.start.push(l), this.index.push(0));
      } else this.index[t]++, (this.nextStart = l + o.length);
    }
  }
}
class Rb {
  constructor(e, t) {
    (this.stream = t),
      (this.tokens = []),
      (this.mainToken = null),
      (this.actions = []),
      (this.tokens = e.tokenizers.map((n) => new Qr()));
  }
  getActions(e) {
    let t = 0,
      n = null,
      { parser: s } = e.p,
      { tokenizers: o } = s,
      l = s.stateSlot(e.state, 3),
      a = e.curContext ? e.curContext.hash : 0,
      c = 0;
    for (let h = 0; h < o.length; h++) {
      if (((1 << h) & l) == 0) continue;
      let u = o[h],
        f = this.tokens[h];
      if (
        !(n && !u.fallback) &&
        ((u.contextual || f.start != e.pos || f.mask != l || f.context != a) &&
          (this.updateCachedToken(f, u, e), (f.mask = l), (f.context = a)),
        f.lookAhead > f.end + 25 && (c = Math.max(f.lookAhead, c)),
        f.value != 0)
      ) {
        let d = t;
        if (
          (f.extended > -1 && (t = this.addActions(e, f.extended, f.end, t)),
          (t = this.addActions(e, f.value, f.end, t)),
          !u.extend && ((n = f), t > d))
        )
          break;
      }
    }
    for (; this.actions.length > t; ) this.actions.pop();
    return (
      c && e.setLookAhead(c),
      !n &&
        e.pos == this.stream.end &&
        ((n = new Qr()),
        (n.value = e.p.parser.eofTerm),
        (n.start = n.end = e.pos),
        (t = this.addActions(e, n.value, n.end, t))),
      (this.mainToken = n),
      this.actions
    );
  }
  getMainToken(e) {
    if (this.mainToken) return this.mainToken;
    let t = new Qr(),
      { pos: n, p: s } = e;
    return (
      (t.start = n),
      (t.end = Math.min(n + 1, s.stream.end)),
      (t.value = n == s.stream.end ? s.parser.eofTerm : 0),
      t
    );
  }
  updateCachedToken(e, t, n) {
    if ((t.token(this.stream.reset(n.pos, e), n), e.value > -1)) {
      let { parser: s } = n.p;
      for (let o = 0; o < s.specialized.length; o++)
        if (s.specialized[o] == e.value) {
          let l = s.specializers[o](this.stream.read(e.start, e.end), n);
          if (l >= 0 && n.p.parser.dialect.allows(l >> 1)) {
            (l & 1) == 0 ? (e.value = l >> 1) : (e.extended = l >> 1);
            break;
          }
        }
    } else (e.value = 0), (e.end = Math.min(n.p.stream.end, n.pos + 1));
  }
  putAction(e, t, n, s) {
    for (let o = 0; o < s; o += 3) if (this.actions[o] == e) return s;
    return (
      (this.actions[s++] = e),
      (this.actions[s++] = t),
      (this.actions[s++] = n),
      s
    );
  }
  addActions(e, t, n, s) {
    let { state: o } = e,
      { parser: l } = e.p,
      { data: a } = l;
    for (let c = 0; c < 2; c++)
      for (let h = l.stateSlot(o, c ? 2 : 1); ; h += 3) {
        if (a[h] == 65535)
          if (a[h + 1] == 1) h = Lt(a, h + 2);
          else {
            s == 0 &&
              a[h + 1] == 2 &&
              (s = this.putAction(Lt(a, h + 2), t, n, s));
            break;
          }
        a[h] == t && (s = this.putAction(Lt(a, h + 1), t, n, s));
      }
    return s;
  }
}
var ih;
(function (r) {
  (r[(r.Distance = 5)] = 'Distance'),
    (r[(r.MaxRemainingPerStep = 3)] = 'MaxRemainingPerStep'),
    (r[(r.MinBufferLengthPrune = 500)] = 'MinBufferLengthPrune'),
    (r[(r.ForceReduceLimit = 10)] = 'ForceReduceLimit'),
    (r[(r.CutDepth = 15e3)] = 'CutDepth'),
    (r[(r.CutTo = 9e3)] = 'CutTo');
})(ih || (ih = {}));
class Cb {
  constructor(e, t, n, s) {
    (this.parser = e),
      (this.input = t),
      (this.ranges = s),
      (this.recovering = 0),
      (this.nextStackID = 9812),
      (this.minStackPos = 0),
      (this.reused = []),
      (this.stoppedAt = null),
      (this.stream = new wb(t, s)),
      (this.tokens = new Rb(e, this.stream)),
      (this.topTerm = e.top[1]);
    let { from: o } = s[0];
    (this.stacks = [jr.start(this, e.top[0], o)]),
      (this.fragments =
        n.length && this.stream.end - o > e.bufferLength * 4
          ? new Pb(n, e.nodeSet)
          : null);
  }
  get parsedPos() {
    return this.minStackPos;
  }
  advance() {
    let e = this.stacks,
      t = this.minStackPos,
      n = (this.stacks = []),
      s,
      o;
    for (let l = 0; l < e.length; l++) {
      let a = e[l];
      for (;;) {
        if (((this.tokens.mainToken = null), a.pos > t)) n.push(a);
        else {
          if (this.advanceStack(a, n, e)) continue;
          {
            s || ((s = []), (o = [])), s.push(a);
            let c = this.tokens.getMainToken(a);
            o.push(c.value, c.end);
          }
        }
        break;
      }
    }
    if (!n.length) {
      let l = s && Ab(s);
      if (l) return this.stackToTree(l);
      if (this.parser.strict)
        throw (
          (ot &&
            s &&
            console.log(
              'Stuck with token ' +
                (this.tokens.mainToken
                  ? this.parser.getName(this.tokens.mainToken.value)
                  : 'none'),
            ),
          new SyntaxError('No parse at ' + t))
        );
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && s) {
      let l =
        this.stoppedAt != null && s[0].pos > this.stoppedAt
          ? s[0]
          : this.runRecovery(s, o, n);
      if (l) return this.stackToTree(l.forceAll());
    }
    if (this.recovering) {
      let l = this.recovering == 1 ? 1 : this.recovering * 3;
      if (n.length > l)
        for (n.sort((a, c) => c.score - a.score); n.length > l; ) n.pop();
      n.some((a) => a.reducePos > t) && this.recovering--;
    } else if (n.length > 1) {
      e: for (let l = 0; l < n.length - 1; l++) {
        let a = n[l];
        for (let c = l + 1; c < n.length; c++) {
          let h = n[c];
          if (
            a.sameState(h) ||
            (a.buffer.length > 500 && h.buffer.length > 500)
          )
            if ((a.score - h.score || a.buffer.length - h.buffer.length) > 0)
              n.splice(c--, 1);
            else {
              n.splice(l--, 1);
              continue e;
            }
        }
      }
    }
    this.minStackPos = n[0].pos;
    for (let l = 1; l < n.length; l++)
      n[l].pos < this.minStackPos && (this.minStackPos = n[l].pos);
    return null;
  }
  stopAt(e) {
    if (this.stoppedAt != null && this.stoppedAt < e)
      throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = e;
  }
  advanceStack(e, t, n) {
    let s = e.pos,
      { parser: o } = this,
      l = ot ? this.stackID(e) + ' -> ' : '';
    if (this.stoppedAt != null && s > this.stoppedAt)
      return e.forceReduce() ? e : null;
    if (this.fragments) {
      let h = e.curContext && e.curContext.tracker.strict,
        u = h ? e.curContext.hash : 0;
      for (let f = this.fragments.nodeAt(s); f; ) {
        let d =
          this.parser.nodeSet.types[f.type.id] == f.type
            ? o.getGoto(e.state, f.type.id)
            : -1;
        if (d > -1 && f.length && (!h || (f.prop(B.contextHash) || 0) == u))
          return (
            e.useNode(f, d),
            ot &&
              console.log(
                l + this.stackID(e) + ` (via reuse of ${o.getName(f.type.id)})`,
              ),
            !0
          );
        if (!(f instanceof ue) || f.children.length == 0 || f.positions[0] > 0)
          break;
        let p = f.children[0];
        if (p instanceof ue && f.positions[0] == 0) f = p;
        else break;
      }
    }
    let a = o.stateSlot(e.state, 4);
    if (a > 0)
      return (
        e.reduce(a),
        ot &&
          console.log(
            l +
              this.stackID(e) +
              ` (via always-reduce ${o.getName(a & 65535)})`,
          ),
        !0
      );
    if (e.stack.length >= 15e3)
      for (; e.stack.length > 9e3 && e.forceReduce(); );
    let c = this.tokens.getActions(e);
    for (let h = 0; h < c.length; ) {
      let u = c[h++],
        f = c[h++],
        d = c[h++],
        p = h == c.length || !n,
        m = p ? e : e.split();
      if (
        (m.apply(u, f, d),
        ot &&
          console.log(
            l +
              this.stackID(m) +
              ` (via ${
                (u & 65536) == 0 ? 'shift' : `reduce of ${o.getName(u & 65535)}`
              } for ${o.getName(f)} @ ${s}${m == e ? '' : ', split'})`,
          ),
        p)
      )
        return !0;
      m.pos > s ? t.push(m) : n.push(m);
    }
    return !1;
  }
  advanceFully(e, t) {
    let n = e.pos;
    for (;;) {
      if (!this.advanceStack(e, null, null)) return !1;
      if (e.pos > n) return nh(e, t), !0;
    }
  }
  runRecovery(e, t, n) {
    let s = null,
      o = !1;
    for (let l = 0; l < e.length; l++) {
      let a = e[l],
        c = t[l << 1],
        h = t[(l << 1) + 1],
        u = ot ? this.stackID(a) + ' -> ' : '';
      if (
        a.deadEnd &&
        (o ||
          ((o = !0),
          a.restart(),
          ot && console.log(u + this.stackID(a) + ' (restarted)'),
          this.advanceFully(a, n)))
      )
        continue;
      let f = a.split(),
        d = u;
      for (
        let p = 0;
        f.forceReduce() &&
        p < 10 &&
        (ot && console.log(d + this.stackID(f) + ' (via force-reduce)'),
        !this.advanceFully(f, n));
        p++
      )
        ot && (d = this.stackID(f) + ' -> ');
      for (let p of a.recoverByInsert(c))
        ot && console.log(u + this.stackID(p) + ' (via recover-insert)'),
          this.advanceFully(p, n);
      this.stream.end > a.pos
        ? (h == a.pos && (h++, (c = 0)),
          a.recoverByDelete(c, h),
          ot &&
            console.log(
              u +
                this.stackID(a) +
                ` (via recover-delete ${this.parser.getName(c)})`,
            ),
          nh(a, n))
        : (!s || s.score < a.score) && (s = a);
    }
    return s;
  }
  stackToTree(e) {
    return (
      e.close(),
      ue.build({
        buffer: zr.create(e),
        nodeSet: this.parser.nodeSet,
        topID: this.topTerm,
        maxBufferLength: this.parser.bufferLength,
        reused: this.reused,
        start: this.ranges[0].from,
        length: e.pos - this.ranges[0].from,
        minRepeatType: this.parser.minRepeatTerm,
      })
    );
  }
  stackID(e) {
    let t = (Fs || (Fs = new WeakMap())).get(e);
    return (
      t || Fs.set(e, (t = String.fromCodePoint(this.nextStackID++))), t + e
    );
  }
}
function nh(r, e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (n.pos == r.pos && n.sameState(r)) {
      e[t].score < r.score && (e[t] = r);
      return;
    }
  }
  e.push(r);
}
class Wb {
  constructor(e, t, n) {
    (this.source = e), (this.flags = t), (this.disabled = n);
  }
  allows(e) {
    return !this.disabled || this.disabled[e] == 0;
  }
}
const Hs = (r) => r;
class Jf {
  constructor(e) {
    (this.start = e.start),
      (this.shift = e.shift || Hs),
      (this.reduce = e.reduce || Hs),
      (this.reuse = e.reuse || Hs),
      (this.hash = e.hash || (() => 0)),
      (this.strict = e.strict !== !1);
  }
}
class Gi extends ef {
  constructor(e) {
    if ((super(), (this.wrappers = []), e.version != 13))
      throw new RangeError(
        `Parser version (${e.version}) doesn't match runtime version (${13})`,
      );
    let t = e.nodeNames.split(' ');
    this.minRepeatTerm = t.length;
    for (let a = 0; a < e.repeatNodeCount; a++) t.push('');
    let n = Object.keys(e.topRules).map((a) => e.topRules[a][1]),
      s = [];
    for (let a = 0; a < t.length; a++) s.push([]);
    function o(a, c, h) {
      s[a].push([c, c.deserialize(String(h))]);
    }
    if (e.nodeProps)
      for (let a of e.nodeProps) {
        let c = a[0];
        for (let h = 1; h < a.length; ) {
          let u = a[h++];
          if (u >= 0) o(u, c, a[h++]);
          else {
            let f = a[h + -u];
            for (let d = -u; d > 0; d--) o(a[h++], c, f);
            h++;
          }
        }
      }
    (this.nodeSet = new xl(
      t.map((a, c) =>
        Ue.define({
          name: c >= this.minRepeatTerm ? void 0 : a,
          id: c,
          props: s[c],
          top: n.indexOf(c) > -1,
          error: c == 0,
          skipped: e.skippedNodes && e.skippedNodes.indexOf(c) > -1,
        }),
      ),
    )),
      (this.strict = !1),
      (this.bufferLength = Hu);
    let l = sr(e.tokenData);
    if (
      ((this.context = e.context),
      (this.specialized = new Uint16Array(
        e.specialized ? e.specialized.length : 0,
      )),
      (this.specializers = []),
      e.specialized)
    )
      for (let a = 0; a < e.specialized.length; a++)
        (this.specialized[a] = e.specialized[a].term),
          (this.specializers[a] = e.specialized[a].get);
    (this.states = sr(e.states, Uint32Array)),
      (this.data = sr(e.stateData)),
      (this.goto = sr(e.goto)),
      (this.maxTerm = e.maxTerm),
      (this.tokenizers = e.tokenizers.map((a) =>
        typeof a == 'number' ? new xr(l, a) : a,
      )),
      (this.topRules = e.topRules),
      (this.dialects = e.dialects || {}),
      (this.dynamicPrecedences = e.dynamicPrecedences || null),
      (this.tokenPrecTable = e.tokenPrec),
      (this.termNames = e.termNames || null),
      (this.maxNode = this.nodeSet.types.length - 1),
      (this.dialect = this.parseDialect()),
      (this.top = this.topRules[Object.keys(this.topRules)[0]]);
  }
  createParse(e, t, n) {
    let s = new Cb(this, e, t, n);
    for (let o of this.wrappers) s = o(s, e, t, n);
    return s;
  }
  getGoto(e, t, n = !1) {
    let s = this.goto;
    if (t >= s[0]) return -1;
    for (let o = s[t + 1]; ; ) {
      let l = s[o++],
        a = l & 1,
        c = s[o++];
      if (a && n) return c;
      for (let h = o + (l >> 1); o < h; o++) if (s[o] == e) return c;
      if (a) return -1;
    }
  }
  hasAction(e, t) {
    let n = this.data;
    for (let s = 0; s < 2; s++)
      for (let o = this.stateSlot(e, s ? 2 : 1), l; ; o += 3) {
        if ((l = n[o]) == 65535)
          if (n[o + 1] == 1) l = n[(o = Lt(n, o + 2))];
          else {
            if (n[o + 1] == 2) return Lt(n, o + 2);
            break;
          }
        if (l == t || l == 0) return Lt(n, o + 1);
      }
    return 0;
  }
  stateSlot(e, t) {
    return this.states[e * 6 + t];
  }
  stateFlag(e, t) {
    return (this.stateSlot(e, 0) & t) > 0;
  }
  validAction(e, t) {
    if (t == this.stateSlot(e, 4)) return !0;
    for (let n = this.stateSlot(e, 1); ; n += 3) {
      if (this.data[n] == 65535)
        if (this.data[n + 1] == 1) n = Lt(this.data, n + 2);
        else return !1;
      if (t == Lt(this.data, n + 1)) return !0;
    }
  }
  nextStates(e) {
    let t = [];
    for (let n = this.stateSlot(e, 1); ; n += 3) {
      if (this.data[n] == 65535)
        if (this.data[n + 1] == 1) n = Lt(this.data, n + 2);
        else break;
      if ((this.data[n + 2] & 1) == 0) {
        let s = this.data[n + 1];
        t.some((o, l) => l & 1 && o == s) || t.push(this.data[n], s);
      }
    }
    return t;
  }
  overrides(e, t) {
    let n = rh(this.data, this.tokenPrecTable, t);
    return n < 0 || rh(this.data, this.tokenPrecTable, e) < n;
  }
  configure(e) {
    let t = Object.assign(Object.create(Gi.prototype), this);
    if ((e.props && (t.nodeSet = this.nodeSet.extend(...e.props)), e.top)) {
      let n = this.topRules[e.top];
      if (!n) throw new RangeError(`Invalid top rule name ${e.top}`);
      t.top = n;
    }
    return (
      e.tokenizers &&
        (t.tokenizers = this.tokenizers.map((n) => {
          let s = e.tokenizers.find((o) => o.from == n);
          return s ? s.to : n;
        })),
      e.contextTracker && (t.context = e.contextTracker),
      e.dialect && (t.dialect = this.parseDialect(e.dialect)),
      e.strict != null && (t.strict = e.strict),
      e.wrap && (t.wrappers = t.wrappers.concat(e.wrap)),
      e.bufferLength != null && (t.bufferLength = e.bufferLength),
      t
    );
  }
  getName(e) {
    return this.termNames
      ? this.termNames[e]
      : String((e <= this.maxNode && this.nodeSet.types[e].name) || e);
  }
  get eofTerm() {
    return this.maxNode + 1;
  }
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  dynamicPrecedence(e) {
    let t = this.dynamicPrecedences;
    return t == null ? 0 : t[e] || 0;
  }
  parseDialect(e) {
    let t = Object.keys(this.dialects),
      n = t.map(() => !1);
    if (e)
      for (let o of e.split(' ')) {
        let l = t.indexOf(o);
        l >= 0 && (n[l] = !0);
      }
    let s = null;
    for (let o = 0; o < t.length; o++)
      if (!n[o])
        for (let l = this.dialects[t[o]], a; (a = this.data[l++]) != 65535; )
          (s || (s = new Uint8Array(this.maxTerm + 1)))[a] = 1;
    return new Wb(e, n, s);
  }
  static deserialize(e) {
    return new Gi(e);
  }
}
function Lt(r, e) {
  return r[e] | (r[e + 1] << 16);
}
function rh(r, e, t) {
  for (let n = e, s; (s = r[n]) != 65535; n++) if (s == t) return n - e;
  return -1;
}
function Ab(r) {
  let e = null;
  for (let t of r) {
    let n = t.p.stoppedAt;
    (t.pos == t.p.stream.end || (n != null && t.pos > n)) &&
      t.p.parser.stateFlag(t.state, 2) &&
      (!e || e.score < t.score) &&
      (e = t);
  }
  return e;
}
const Eb = 93,
  sh = 1,
  Lb = 94,
  _b = 95,
  oh = 2,
  Kf = [
    9,
    10,
    11,
    12,
    13,
    32,
    133,
    160,
    5760,
    8192,
    8193,
    8194,
    8195,
    8196,
    8197,
    8198,
    8199,
    8200,
    8201,
    8202,
    8232,
    8233,
    8239,
    8287,
    12288,
  ],
  Xb = 58,
  Zb = 40,
  ed = 95,
  Db = 91,
  vr = 45,
  Ib = 46,
  Mb = 35,
  jb = 37;
function Nr(r) {
  return (r >= 65 && r <= 90) || (r >= 97 && r <= 122) || r >= 161;
}
function zb(r) {
  return r >= 48 && r <= 57;
}
const Nb = new Rt((r, e) => {
    for (let t = !1, n = 0, s = 0; ; s++) {
      let { next: o } = r;
      if (Nr(o) || o == vr || o == ed || (t && zb(o)))
        !t && (o != vr || s > 0) && (t = !0),
          n === s && o == vr && n++,
          r.advance();
      else {
        t && r.acceptToken(o == Zb ? Lb : n == 2 && e.canShift(oh) ? oh : _b);
        break;
      }
    }
  }),
  Bb = new Rt((r) => {
    if (Kf.includes(r.peek(-1))) {
      let { next: e } = r;
      (Nr(e) ||
        e == ed ||
        e == Mb ||
        e == Ib ||
        e == Db ||
        e == Xb ||
        e == vr) &&
        r.acceptToken(Eb);
    }
  }),
  Ub = new Rt((r) => {
    if (!Kf.includes(r.peek(-1))) {
      let { next: e } = r;
      if ((e == jb && (r.advance(), r.acceptToken(sh)), Nr(e))) {
        do r.advance();
        while (Nr(r.next));
        r.acceptToken(sh);
      }
    }
  }),
  Vb = {
    __proto__: null,
    lang: 32,
    'nth-child': 32,
    'nth-last-child': 32,
    'nth-of-type': 32,
    dir: 32,
    url: 60,
    'url-prefix': 60,
    domain: 60,
    regexp: 60,
    selector: 134,
  },
  Yb = {
    __proto__: null,
    '@import': 114,
    '@media': 138,
    '@charset': 142,
    '@namespace': 146,
    '@keyframes': 152,
    '@supports': 164,
  },
  qb = { __proto__: null, not: 128, only: 128, from: 158, to: 160 },
  Gb = Gi.deserialize({
    version: 13,
    states:
      "7WOYQ[OOOOQP'#Cd'#CdOOQP'#Cc'#CcO!ZQ[O'#CfO!}QXO'#CaO#UQ[O'#ChO#aQ[O'#DPO#fQ[O'#DTOOQP'#Ec'#EcO#kQdO'#DeO$VQ[O'#DrO#kQdO'#DtO$hQ[O'#DvO$sQ[O'#DyO$xQ[O'#EPO%WQ[O'#EROOQS'#Eb'#EbOOQS'#ES'#ESQYQ[OOOOQP'#Cg'#CgOOQP,59Q,59QO!ZQ[O,59QO%_Q[O'#EVO%yQWO,58{O&RQ[O,59SO#aQ[O,59kO#fQ[O,59oO%_Q[O,59sO%_Q[O,59uO%_Q[O,59vO'bQ[O'#D`OOQS,58{,58{OOQP'#Ck'#CkOOQO'#C}'#C}OOQP,59S,59SO'iQWO,59SO'nQWO,59SOOQP'#DR'#DROOQP,59k,59kOOQO'#DV'#DVO'sQ`O,59oOOQS'#Cp'#CpO#kQdO'#CqO'{QvO'#CsO)VQtO,5:POOQO'#Cx'#CxO'iQWO'#CwO)kQWO'#CyOOQS'#Ef'#EfOOQO'#Dh'#DhO)pQ[O'#DoO*OQWO'#EiO$xQ[O'#DmO*^QWO'#DpOOQO'#Ej'#EjO%|QWO,5:^O*cQpO,5:`OOQS'#Dx'#DxO*kQWO,5:bO*pQ[O,5:bOOQO'#D{'#D{O*xQWO,5:eO*}QWO,5:kO+VQWO,5:mOOQS-E8Q-E8QOOQP1G.l1G.lO+yQXO,5:qOOQO-E8T-E8TOOQS1G.g1G.gOOQP1G.n1G.nO'iQWO1G.nO'nQWO1G.nOOQP1G/V1G/VO,WQ`O1G/ZO,qQXO1G/_O-XQXO1G/aO-oQXO1G/bO.VQXO'#CdO.zQWO'#DaOOQS,59z,59zO/PQWO,59zO/XQ[O,59zO/`QdO'#CoO/gQ[O'#DOOOQP1G/Z1G/ZO#kQdO1G/ZO/nQpO,59]OOQS,59_,59_O#kQdO,59aO/vQWO1G/kOOQS,59c,59cO/{Q!bO,59eO0TQWO'#DhO0`QWO,5:TO0eQWO,5:ZO$xQ[O,5:VO$xQ[O'#EYO0mQWO,5;TO0xQWO,5:XO%_Q[O,5:[OOQS1G/x1G/xOOQS1G/z1G/zOOQS1G/|1G/|O1ZQWO1G/|O1`QdO'#D|OOQS1G0P1G0POOQS1G0V1G0VOOQS1G0X1G0XOOQP7+$Y7+$YOOQP7+$u7+$uO#kQdO7+$uO#kQdO,59{O1nQ[O'#EXO1xQWO1G/fOOQS1G/f1G/fO1xQWO1G/fO2QQtO'#ETO2uQdO'#EeO3PQWO,59ZO3UQXO'#EhO3]QWO,59jO3bQpO7+$uOOQS1G.w1G.wOOQS1G.{1G.{OOQS7+%V7+%VO3jQWO1G/PO#kQdO1G/oOOQO1G/u1G/uOOQO1G/q1G/qO3oQWO,5:tOOQO-E8W-E8WO3}QXO1G/vOOQS7+%h7+%hO4UQYO'#CsO%|QWO'#EZO4^QdO,5:hOOQS,5:h,5:hO4lQpO<<HaO4tQtO1G/gOOQO,5:s,5:sO5XQ[O,5:sOOQO-E8V-E8VOOQS7+%Q7+%QO5cQWO7+%QOOQS-E8R-E8RO#kQdO'#EUO5kQWO,5;POOQT1G.u1G.uO5sQWO,5;SOOQP1G/U1G/UOOQP<<Ha<<HaOOQS7+$k7+$kO5{QdO7+%ZOOQO7+%b7+%bOOQS,5:u,5:uOOQS-E8X-E8XOOQS1G0S1G0SOOQPAN={AN={O6SQtO'#EWO#kQdO'#EWO6}QdO7+%ROOQO7+%R7+%ROOQO1G0_1G0_OOQS<<Hl<<HlO7_QdO,5:pOOQO-E8S-E8SOOQO<<Hu<<HuO7iQtO,5:rOOQS-E8U-E8UOOQO<<Hm<<Hm",
    stateData:
      '8j~O#TOSROS~OUWOXWO]TO^TOtUOxVO!Y_O!ZXO!gYO!iZO!k[O!n]O!t^O#RPO#WRO~O#RcO~O]hO^hOpfOtiOxjO|kO!PmO#PlO#WeO~O!RnO~P!`O`sO#QqO#RpO~O#RuO~O#RwO~OQ!QObzOf!QOh!QOn!PO#Q}O#RyO#Z{O~Ob!SO!b!UO!e!VO#R!RO!R#]P~Oh![On!PO#R!ZO~O#R!^O~Ob!SO!b!UO!e!VO#R!RO~O!W#]P~P$VOUWOXWO]TO^TOtUOxVO#RPO#WRO~OpfO!RnO~O`!hO#QqO#RpO~OQ!pOUWOXWO]TO^TOtUOxVO!Y_O!ZXO!gYO!iZO!k[O!n]O!t^O#R!oO#WRO~O!Q!qO~P&^Ob!tO~Ob!uO~Ov!vOz!wO~OP!yObgXjgX!WgX!bgX!egX#RgXagXQgXfgXhgXngXpgX#QgX#ZgXvgX!QgX!VgX~Ob!SOj!zO!b!UO!e!VO#R!RO!W#]P~Ob!}O~Ob!SO!b!UO!e!VO#R#OO~Op#SO!`#RO!R#]X!W#]X~Ob#VO~Oj!zO!W#XO~O!W#YO~Oh#ZOn!PO~O!R#[O~O!RnO!`#RO~O!RnO!W#_O~O]hO^hOtiOxjO|kO!PmO#PlO#WeO~Op!ya!R!yaa!ya~P+_Ov#aOz#bO~O]hO^hOtiOxjO#WeO~Op{i|{i!P{i!R{i#P{ia{i~P,`Op}i|}i!P}i!R}i#P}ia}i~P,`Op!Oi|!Oi!P!Oi!R!Oi#P!Oia!Oi~P,`O]WX]!UX^WXpWXtWXxWX|WX!PWX!RWX#PWX#WWX~O]#cO~O!Q#fO!W#dO~O!Q#fO~P&^Oa#XP~P#kOa#[P~P%_Oa#nOj!zO~O!W#pO~Oh#qOo#qO~O]!^Xa![X!`![X~O]#rO~Oa#sO!`#RO~Op#SO!R#]a!W#]a~O!`#ROp!aa!R!aa!W!aaa!aa~O!W#xO~O!Q#|O!q#zO!r#zO#Z#yO~O!Q!{X!W!{X~P&^O!Q$SO!W#dO~Oj!zOQ!wXa!wXb!wXf!wXh!wXn!wXp!wX#Q!wX#R!wX#Z!wX~Op$VOa#XX~P#kOa$XO~Oa#[X~P!`Oa$ZO~Oj!zOv$[O~Oa$]O~O!`#ROp!|a!R!|a!W!|a~Oa$_O~P+_OP!yO!RgX~O!Q$bO!q#zO!r#zO#Z#yO~Oj!zOv$cO~Oj!zOp$eO!V$gO!Q!Ti!W!Ti~P#kO!Q!{a!W!{a~P&^O!Q$iO!W#dO~Op$VOa#Xa~OpfOa#[a~Oa$lO~P#kOj!zOQ!zXb!zXf!zXh!zXn!zXp!zX!Q!zX!V!zX!W!zX#Q!zX#R!zX#Z!zX~Op$eO!V$oO!Q!Tq!W!Tq~P#kOa!xap!xa~P#kOj!zOQ!zab!zaf!zah!zan!zap!za!Q!za!V!za!W!za#Q!za#R!za#Z!za~Oo#Zj!Pj~',
    goto:
      ",O#_PPPPP#`P#h#vP#h$U#hPP$[PPP$b$k$kP$}P$kP$k%e%wPPP&a&g#hP&mP#hP&sP#hP#h#hPPP&y']'iPP#`PP'o'o'y'oP'oP'o'oP#`P#`P#`P'|#`P(P(SPP#`P#`(V(e(s(y)T)Z)e)kPPPPPP)q)yP*e*hP+^+a+j]`Obn!s#d$QiWObfklmn!s!u#V#d$QiQObfklmn!s!u#V#d$QQdRR!ceQrTR!ghQ!gsQ!|!OR#`!hq!QXZz!t!w!z#b#c#i#r$O$V$^$e$f$jp!QXZz!t!w!z#b#c#i#r$O$V$^$e$f$jT#z#[#{q!OXZz!t!w!z#b#c#i#r$O$V$^$e$f$jp!QXZz!t!w!z#b#c#i#r$O$V$^$e$f$jQ![[R#Z!]QtTR!ihQ!gtR#`!iQvUR!jiQxVR!kjQoSQ!fgQ#W!XQ#^!`Q#_!aR$`#zQ!rnQ#g!sQ$P#dR$h$QX!pn!s#d$Qa!WY^_|!S!U#R#SR#P!SR!][R!_]R#]!_QbOU!bb!s$QQ!snR$Q#dQ#i!tU$U#i$^$jQ$^#rR$j$VQ$W#iR$k$WQgSS!eg$YR$Y#kQ$f$OR$n$fQ#e!rS$R#e$TR$T#gQ#T!TR#v#TQ#{#[R$a#{]aObn!s#d$Q[SObn!s#d$QQ!dfQ!lkQ!mlQ!nmQ#k!uR#w#VR#j!tQ|XQ!YZQ!xz[#h!t#i#r$V$^$jQ#m!wQ#o!zQ#}#bQ$O#cS$d$O$fR$m$eR#l!uQ!XYQ!a_R!{|U!TY_|Q!`^Q#Q!SQ#U!UQ#t#RR#u#S",
    nodeNames:
      '\u26A0 Unit VariableName Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee CallLiteral CallTag ParenthesizedContent , PseudoClassName ArgList IdSelector # IdName ] AttributeSelector [ AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp } { Block Declaration PropertyName Important ; ImportStatement AtKeyword import KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList from to SupportsStatement supports AtRule',
    maxTerm: 106,
    nodeProps: [
      [B.openedBy, 17, '(', 48, '{'],
      [B.closedBy, 18, ')', 49, '}'],
    ],
    skippedNodes: [0, 3],
    repeatNodeCount: 8,
    tokenData:
      'Ay~R![OX$wX^%]^p$wpq%]qr(crs+}st,otu2Uuv$wvw2rwx2}xy3jyz3uz{3z{|4_|}8U}!O8a!O!P8x!P!Q9Z!Q![;e![!]<Y!]!^<x!^!_$w!_!`=T!`!a=`!a!b$w!b!c>O!c!}$w!}#O?[#O#P$w#P#Q?g#Q#R2U#R#T$w#T#U?r#U#c$w#c#d@q#d#o$w#o#pAQ#p#q2U#q#rA]#r#sAh#s#y$w#y#z%]#z$f$w$f$g%]$g#BY$w#BY#BZ%]#BZ$IS$w$IS$I_%]$I_$I|$w$I|$JO%]$JO$JT$w$JT$JU%]$JU$KV$w$KV$KW%]$KW&FU$w&FU&FV%]&FV~$wW$zQOy%Qz~%QW%VQoWOy%Qz~%Q~%bf#T~OX%QX^&v^p%Qpq&vqy%Qz#y%Q#y#z&v#z$f%Q$f$g&v$g#BY%Q#BY#BZ&v#BZ$IS%Q$IS$I_&v$I_$I|%Q$I|$JO&v$JO$JT%Q$JT$JU&v$JU$KV%Q$KV$KW&v$KW&FU%Q&FU&FV&v&FV~%Q~&}f#T~oWOX%QX^&v^p%Qpq&vqy%Qz#y%Q#y#z&v#z$f%Q$f$g&v$g#BY%Q#BY#BZ&v#BZ$IS%Q$IS$I_&v$I_$I|%Q$I|$JO&v$JO$JT%Q$JT$JU&v$JU$KV%Q$KV$KW&v$KW&FU%Q&FU&FV&v&FV~%Q^(fSOy%Qz#]%Q#]#^(r#^~%Q^(wSoWOy%Qz#a%Q#a#b)T#b~%Q^)YSoWOy%Qz#d%Q#d#e)f#e~%Q^)kSoWOy%Qz#c%Q#c#d)w#d~%Q^)|SoWOy%Qz#f%Q#f#g*Y#g~%Q^*_SoWOy%Qz#h%Q#h#i*k#i~%Q^*pSoWOy%Qz#T%Q#T#U*|#U~%Q^+RSoWOy%Qz#b%Q#b#c+_#c~%Q^+dSoWOy%Qz#h%Q#h#i+p#i~%Q^+wQ!VUoWOy%Qz~%Q~,QUOY+}Zr+}rs,ds#O+}#O#P,i#P~+}~,iOh~~,lPO~+}_,tWtPOy%Qz!Q%Q!Q![-^![!c%Q!c!i-^!i#T%Q#T#Z-^#Z~%Q^-cWoWOy%Qz!Q%Q!Q![-{![!c%Q!c!i-{!i#T%Q#T#Z-{#Z~%Q^.QWoWOy%Qz!Q%Q!Q![.j![!c%Q!c!i.j!i#T%Q#T#Z.j#Z~%Q^.qWfUoWOy%Qz!Q%Q!Q![/Z![!c%Q!c!i/Z!i#T%Q#T#Z/Z#Z~%Q^/bWfUoWOy%Qz!Q%Q!Q![/z![!c%Q!c!i/z!i#T%Q#T#Z/z#Z~%Q^0PWoWOy%Qz!Q%Q!Q![0i![!c%Q!c!i0i!i#T%Q#T#Z0i#Z~%Q^0pWfUoWOy%Qz!Q%Q!Q![1Y![!c%Q!c!i1Y!i#T%Q#T#Z1Y#Z~%Q^1_WoWOy%Qz!Q%Q!Q![1w![!c%Q!c!i1w!i#T%Q#T#Z1w#Z~%Q^2OQfUoWOy%Qz~%QY2XSOy%Qz!_%Q!_!`2e!`~%QY2lQzQoWOy%Qz~%QX2wQXPOy%Qz~%Q~3QUOY2}Zw2}wx,dx#O2}#O#P3d#P~2}~3gPO~2}_3oQbVOy%Qz~%Q~3zOa~_4RSUPjSOy%Qz!_%Q!_!`2e!`~%Q_4fUjS!PPOy%Qz!O%Q!O!P4x!P!Q%Q!Q![7_![~%Q^4}SoWOy%Qz!Q%Q!Q![5Z![~%Q^5bWoW#ZUOy%Qz!Q%Q!Q![5Z![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%Q^6PWoWOy%Qz{%Q{|6i|}%Q}!O6i!O!Q%Q!Q![6z![~%Q^6nSoWOy%Qz!Q%Q!Q![6z![~%Q^7RSoW#ZUOy%Qz!Q%Q!Q![6z![~%Q^7fYoW#ZUOy%Qz!O%Q!O!P5Z!P!Q%Q!Q![7_![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%Q_8ZQpVOy%Qz~%Q^8fUjSOy%Qz!O%Q!O!P4x!P!Q%Q!Q![7_![~%Q_8}S#WPOy%Qz!Q%Q!Q![5Z![~%Q~9`RjSOy%Qz{9i{~%Q~9nSoWOy9iyz9zz{:o{~9i~9}ROz9zz{:W{~9z~:ZTOz9zz{:W{!P9z!P!Q:j!Q~9z~:oOR~~:tUoWOy9iyz9zz{:o{!P9i!P!Q;W!Q~9i~;_QR~oWOy%Qz~%Q^;jY#ZUOy%Qz!O%Q!O!P5Z!P!Q%Q!Q![7_![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%QX<_S]POy%Qz![%Q![!]<k!]~%QX<rQ^PoWOy%Qz~%Q_<}Q!WVOy%Qz~%QY=YQzQOy%Qz~%QX=eS|POy%Qz!`%Q!`!a=q!a~%QX=xQ|PoWOy%Qz~%QX>RUOy%Qz!c%Q!c!}>e!}#T%Q#T#o>e#o~%QX>lY!YPoWOy%Qz}%Q}!O>e!O!Q%Q!Q![>e![!c%Q!c!}>e!}#T%Q#T#o>e#o~%QX?aQxPOy%Qz~%Q^?lQvUOy%Qz~%QX?uSOy%Qz#b%Q#b#c@R#c~%QX@WSoWOy%Qz#W%Q#W#X@d#X~%QX@kQ!`PoWOy%Qz~%QX@tSOy%Qz#f%Q#f#g@d#g~%QXAVQ!RPOy%Qz~%Q_AbQ!QVOy%Qz~%QZAmS!PPOy%Qz!_%Q!_!`2e!`~%Q',
    tokenizers: [Bb, Ub, Nb, 0, 1, 2, 3],
    topRules: { StyleSheet: [0, 4] },
    specialized: [
      { term: 94, get: (r) => Vb[r] || -1 },
      { term: 56, get: (r) => Yb[r] || -1 },
      { term: 95, get: (r) => qb[r] || -1 },
    ],
    tokenPrec: 1078,
  });
let Js = null;
function Ks() {
  if (!Js && typeof document == 'object' && document.body) {
    let r = [];
    for (let e in document.body.style)
      /[A-Z]|^-|^(item|length)$/.test(e) || r.push(e);
    Js = r.sort().map((e) => ({ type: 'property', label: e }));
  }
  return Js || [];
}
const lh = [
    'active',
    'after',
    'before',
    'checked',
    'default',
    'disabled',
    'empty',
    'enabled',
    'first-child',
    'first-letter',
    'first-line',
    'first-of-type',
    'focus',
    'hover',
    'in-range',
    'indeterminate',
    'invalid',
    'lang',
    'last-child',
    'last-of-type',
    'link',
    'not',
    'nth-child',
    'nth-last-child',
    'nth-last-of-type',
    'nth-of-type',
    'only-of-type',
    'only-child',
    'optional',
    'out-of-range',
    'placeholder',
    'read-only',
    'read-write',
    'required',
    'root',
    'selection',
    'target',
    'valid',
    'visited',
  ].map((r) => ({ type: 'class', label: r })),
  ah = [
    'above',
    'absolute',
    'activeborder',
    'additive',
    'activecaption',
    'after-white-space',
    'ahead',
    'alias',
    'all',
    'all-scroll',
    'alphabetic',
    'alternate',
    'always',
    'antialiased',
    'appworkspace',
    'asterisks',
    'attr',
    'auto',
    'auto-flow',
    'avoid',
    'avoid-column',
    'avoid-page',
    'avoid-region',
    'axis-pan',
    'background',
    'backwards',
    'baseline',
    'below',
    'bidi-override',
    'blink',
    'block',
    'block-axis',
    'bold',
    'bolder',
    'border',
    'border-box',
    'both',
    'bottom',
    'break',
    'break-all',
    'break-word',
    'bullets',
    'button',
    'button-bevel',
    'buttonface',
    'buttonhighlight',
    'buttonshadow',
    'buttontext',
    'calc',
    'capitalize',
    'caps-lock-indicator',
    'caption',
    'captiontext',
    'caret',
    'cell',
    'center',
    'checkbox',
    'circle',
    'cjk-decimal',
    'clear',
    'clip',
    'close-quote',
    'col-resize',
    'collapse',
    'color',
    'color-burn',
    'color-dodge',
    'column',
    'column-reverse',
    'compact',
    'condensed',
    'contain',
    'content',
    'contents',
    'content-box',
    'context-menu',
    'continuous',
    'copy',
    'counter',
    'counters',
    'cover',
    'crop',
    'cross',
    'crosshair',
    'currentcolor',
    'cursive',
    'cyclic',
    'darken',
    'dashed',
    'decimal',
    'decimal-leading-zero',
    'default',
    'default-button',
    'dense',
    'destination-atop',
    'destination-in',
    'destination-out',
    'destination-over',
    'difference',
    'disc',
    'discard',
    'disclosure-closed',
    'disclosure-open',
    'document',
    'dot-dash',
    'dot-dot-dash',
    'dotted',
    'double',
    'down',
    'e-resize',
    'ease',
    'ease-in',
    'ease-in-out',
    'ease-out',
    'element',
    'ellipse',
    'ellipsis',
    'embed',
    'end',
    'ethiopic-abegede-gez',
    'ethiopic-halehame-aa-er',
    'ethiopic-halehame-gez',
    'ew-resize',
    'exclusion',
    'expanded',
    'extends',
    'extra-condensed',
    'extra-expanded',
    'fantasy',
    'fast',
    'fill',
    'fill-box',
    'fixed',
    'flat',
    'flex',
    'flex-end',
    'flex-start',
    'footnotes',
    'forwards',
    'from',
    'geometricPrecision',
    'graytext',
    'grid',
    'groove',
    'hand',
    'hard-light',
    'help',
    'hidden',
    'hide',
    'higher',
    'highlight',
    'highlighttext',
    'horizontal',
    'hsl',
    'hsla',
    'hue',
    'icon',
    'ignore',
    'inactiveborder',
    'inactivecaption',
    'inactivecaptiontext',
    'infinite',
    'infobackground',
    'infotext',
    'inherit',
    'initial',
    'inline',
    'inline-axis',
    'inline-block',
    'inline-flex',
    'inline-grid',
    'inline-table',
    'inset',
    'inside',
    'intrinsic',
    'invert',
    'italic',
    'justify',
    'keep-all',
    'landscape',
    'large',
    'larger',
    'left',
    'level',
    'lighter',
    'lighten',
    'line-through',
    'linear',
    'linear-gradient',
    'lines',
    'list-item',
    'listbox',
    'listitem',
    'local',
    'logical',
    'loud',
    'lower',
    'lower-hexadecimal',
    'lower-latin',
    'lower-norwegian',
    'lowercase',
    'ltr',
    'luminosity',
    'manipulation',
    'match',
    'matrix',
    'matrix3d',
    'medium',
    'menu',
    'menutext',
    'message-box',
    'middle',
    'min-intrinsic',
    'mix',
    'monospace',
    'move',
    'multiple',
    'multiple_mask_images',
    'multiply',
    'n-resize',
    'narrower',
    'ne-resize',
    'nesw-resize',
    'no-close-quote',
    'no-drop',
    'no-open-quote',
    'no-repeat',
    'none',
    'normal',
    'not-allowed',
    'nowrap',
    'ns-resize',
    'numbers',
    'numeric',
    'nw-resize',
    'nwse-resize',
    'oblique',
    'opacity',
    'open-quote',
    'optimizeLegibility',
    'optimizeSpeed',
    'outset',
    'outside',
    'outside-shape',
    'overlay',
    'overline',
    'padding',
    'padding-box',
    'painted',
    'page',
    'paused',
    'perspective',
    'pinch-zoom',
    'plus-darker',
    'plus-lighter',
    'pointer',
    'polygon',
    'portrait',
    'pre',
    'pre-line',
    'pre-wrap',
    'preserve-3d',
    'progress',
    'push-button',
    'radial-gradient',
    'radio',
    'read-only',
    'read-write',
    'read-write-plaintext-only',
    'rectangle',
    'region',
    'relative',
    'repeat',
    'repeating-linear-gradient',
    'repeating-radial-gradient',
    'repeat-x',
    'repeat-y',
    'reset',
    'reverse',
    'rgb',
    'rgba',
    'ridge',
    'right',
    'rotate',
    'rotate3d',
    'rotateX',
    'rotateY',
    'rotateZ',
    'round',
    'row',
    'row-resize',
    'row-reverse',
    'rtl',
    'run-in',
    'running',
    's-resize',
    'sans-serif',
    'saturation',
    'scale',
    'scale3d',
    'scaleX',
    'scaleY',
    'scaleZ',
    'screen',
    'scroll',
    'scrollbar',
    'scroll-position',
    'se-resize',
    'self-start',
    'self-end',
    'semi-condensed',
    'semi-expanded',
    'separate',
    'serif',
    'show',
    'single',
    'skew',
    'skewX',
    'skewY',
    'skip-white-space',
    'slide',
    'slider-horizontal',
    'slider-vertical',
    'sliderthumb-horizontal',
    'sliderthumb-vertical',
    'slow',
    'small',
    'small-caps',
    'small-caption',
    'smaller',
    'soft-light',
    'solid',
    'source-atop',
    'source-in',
    'source-out',
    'source-over',
    'space',
    'space-around',
    'space-between',
    'space-evenly',
    'spell-out',
    'square',
    'start',
    'static',
    'status-bar',
    'stretch',
    'stroke',
    'stroke-box',
    'sub',
    'subpixel-antialiased',
    'svg_masks',
    'super',
    'sw-resize',
    'symbolic',
    'symbols',
    'system-ui',
    'table',
    'table-caption',
    'table-cell',
    'table-column',
    'table-column-group',
    'table-footer-group',
    'table-header-group',
    'table-row',
    'table-row-group',
    'text',
    'text-bottom',
    'text-top',
    'textarea',
    'textfield',
    'thick',
    'thin',
    'threeddarkshadow',
    'threedface',
    'threedhighlight',
    'threedlightshadow',
    'threedshadow',
    'to',
    'top',
    'transform',
    'translate',
    'translate3d',
    'translateX',
    'translateY',
    'translateZ',
    'transparent',
    'ultra-condensed',
    'ultra-expanded',
    'underline',
    'unidirectional-pan',
    'unset',
    'up',
    'upper-latin',
    'uppercase',
    'url',
    'var',
    'vertical',
    'vertical-text',
    'view-box',
    'visible',
    'visibleFill',
    'visiblePainted',
    'visibleStroke',
    'visual',
    'w-resize',
    'wait',
    'wave',
    'wider',
    'window',
    'windowframe',
    'windowtext',
    'words',
    'wrap',
    'wrap-reverse',
    'x-large',
    'x-small',
    'xor',
    'xx-large',
    'xx-small',
  ]
    .map((r) => ({ type: 'keyword', label: r }))
    .concat(
      [
        'aliceblue',
        'antiquewhite',
        'aqua',
        'aquamarine',
        'azure',
        'beige',
        'bisque',
        'black',
        'blanchedalmond',
        'blue',
        'blueviolet',
        'brown',
        'burlywood',
        'cadetblue',
        'chartreuse',
        'chocolate',
        'coral',
        'cornflowerblue',
        'cornsilk',
        'crimson',
        'cyan',
        'darkblue',
        'darkcyan',
        'darkgoldenrod',
        'darkgray',
        'darkgreen',
        'darkkhaki',
        'darkmagenta',
        'darkolivegreen',
        'darkorange',
        'darkorchid',
        'darkred',
        'darksalmon',
        'darkseagreen',
        'darkslateblue',
        'darkslategray',
        'darkturquoise',
        'darkviolet',
        'deeppink',
        'deepskyblue',
        'dimgray',
        'dodgerblue',
        'firebrick',
        'floralwhite',
        'forestgreen',
        'fuchsia',
        'gainsboro',
        'ghostwhite',
        'gold',
        'goldenrod',
        'gray',
        'grey',
        'green',
        'greenyellow',
        'honeydew',
        'hotpink',
        'indianred',
        'indigo',
        'ivory',
        'khaki',
        'lavender',
        'lavenderblush',
        'lawngreen',
        'lemonchiffon',
        'lightblue',
        'lightcoral',
        'lightcyan',
        'lightgoldenrodyellow',
        'lightgray',
        'lightgreen',
        'lightpink',
        'lightsalmon',
        'lightseagreen',
        'lightskyblue',
        'lightslategray',
        'lightsteelblue',
        'lightyellow',
        'lime',
        'limegreen',
        'linen',
        'magenta',
        'maroon',
        'mediumaquamarine',
        'mediumblue',
        'mediumorchid',
        'mediumpurple',
        'mediumseagreen',
        'mediumslateblue',
        'mediumspringgreen',
        'mediumturquoise',
        'mediumvioletred',
        'midnightblue',
        'mintcream',
        'mistyrose',
        'moccasin',
        'navajowhite',
        'navy',
        'oldlace',
        'olive',
        'olivedrab',
        'orange',
        'orangered',
        'orchid',
        'palegoldenrod',
        'palegreen',
        'paleturquoise',
        'palevioletred',
        'papayawhip',
        'peachpuff',
        'peru',
        'pink',
        'plum',
        'powderblue',
        'purple',
        'rebeccapurple',
        'red',
        'rosybrown',
        'royalblue',
        'saddlebrown',
        'salmon',
        'sandybrown',
        'seagreen',
        'seashell',
        'sienna',
        'silver',
        'skyblue',
        'slateblue',
        'slategray',
        'snow',
        'springgreen',
        'steelblue',
        'tan',
        'teal',
        'thistle',
        'tomato',
        'turquoise',
        'violet',
        'wheat',
        'white',
        'whitesmoke',
        'yellow',
        'yellowgreen',
      ].map((r) => ({ type: 'constant', label: r })),
    ),
  Fb = [
    'a',
    'abbr',
    'address',
    'article',
    'aside',
    'b',
    'bdi',
    'bdo',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'figcaption',
    'figure',
    'footer',
    'form',
    'header',
    'hgroup',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'main',
    'meter',
    'nav',
    'ol',
    'output',
    'p',
    'pre',
    'ruby',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'tr',
    'u',
    'ul',
  ].map((r) => ({ type: 'type', label: r })),
  Gt = /^[\w-]*/,
  Hb = (r) => {
    let { state: e, pos: t } = r,
      n = _e(e).resolveInner(t, -1);
    if (n.name == 'PropertyName')
      return { from: n.from, options: Ks(), span: Gt };
    if (n.name == 'ValueName') return { from: n.from, options: ah, span: Gt };
    if (n.name == 'PseudoClassName')
      return { from: n.from, options: lh, span: Gt };
    if (n.name == 'TagName') {
      for (let { parent: l } = n; l; l = l.parent)
        if (l.name == 'Block') return { from: n.from, options: Ks(), span: Gt };
      return { from: n.from, options: Fb, span: Gt };
    }
    if (!r.explicit) return null;
    let s = n.resolve(t),
      o = s.childBefore(t);
    return o && o.name == ':' && s.name == 'PseudoClassSelector'
      ? { from: t, options: lh, span: Gt }
      : (o && o.name == ':' && s.name == 'Declaration') || s.name == 'ArgList'
      ? { from: t, options: ah, span: Gt }
      : s.name == 'Block'
      ? { from: t, options: Ks(), span: Gt }
      : null;
  },
  _l = Vi.define({
    parser: Gb.configure({
      props: [
        is.add({ Declaration: br() }),
        Tl.add({ Block: of }),
        Ll({
          'import charset namespace keyframes': $.definitionKeyword,
          'media supports': $.controlKeyword,
          'from to selector': $.keyword,
          NamespaceName: $.namespace,
          KeyframeName: $.labelName,
          TagName: $.tagName,
          ClassName: $.className,
          PseudoClassName: $.constant($.className),
          IdName: $.labelName,
          'FeatureName PropertyName': $.propertyName,
          AttributeName: $.attributeName,
          NumberLiteral: $.number,
          KeywordQuery: $.keyword,
          UnaryQueryOp: $.operatorKeyword,
          'CallTag ValueName': $.atom,
          VariableName: $.variableName,
          Callee: $.operatorKeyword,
          Unit: $.unit,
          'UniversalSelector NestingSelector': $.definitionOperator,
          AtKeyword: $.keyword,
          MatchOp: $.compareOperator,
          'ChildOp SiblingOp, LogicOp': $.logicOperator,
          BinOp: $.arithmeticOperator,
          Important: $.modifier,
          Comment: $.blockComment,
          ParenthesizedContent: $.special($.name),
          ColorLiteral: $.color,
          StringLiteral: $.string,
          ':': $.punctuation,
          'PseudoOp #': $.derefOperator,
          '; ,': $.separator,
          '( )': $.paren,
          '[ ]': $.squareBracket,
          '{ }': $.brace,
        }),
      ],
    }),
    languageData: {
      commentTokens: { block: { open: '/*', close: '*/' } },
      indentOnInput: /^\s*\}$/,
      wordChars: '-',
    },
  }),
  Jb = _l.data.of({ autocomplete: Hb });
function td() {
  return new wl(_l, Jb);
}
const Kb = 53,
  ey = 1,
  ty = 54,
  iy = 2,
  ny = 55,
  ry = 3,
  Br = 4,
  id = 5,
  nd = 6,
  rd = 7,
  sd = 8,
  sy = 9,
  oy = 10,
  ly = 11,
  eo = 56,
  ay = 12,
  ch = 57,
  cy = 18,
  hy = 27,
  uy = 30,
  fy = 33,
  dy = 35,
  py = 0,
  Oy = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    frame: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
    menuitem: !0,
  },
  my = {
    dd: !0,
    li: !0,
    optgroup: !0,
    option: !0,
    p: !0,
    rp: !0,
    rt: !0,
    tbody: !0,
    td: !0,
    tfoot: !0,
    th: !0,
    tr: !0,
  },
  hh = {
    dd: { dd: !0, dt: !0 },
    dt: { dd: !0, dt: !0 },
    li: { li: !0 },
    option: { option: !0, optgroup: !0 },
    optgroup: { optgroup: !0 },
    p: {
      address: !0,
      article: !0,
      aside: !0,
      blockquote: !0,
      dir: !0,
      div: !0,
      dl: !0,
      fieldset: !0,
      footer: !0,
      form: !0,
      h1: !0,
      h2: !0,
      h3: !0,
      h4: !0,
      h5: !0,
      h6: !0,
      header: !0,
      hgroup: !0,
      hr: !0,
      menu: !0,
      nav: !0,
      ol: !0,
      p: !0,
      pre: !0,
      section: !0,
      table: !0,
      ul: !0,
    },
    rp: { rp: !0, rt: !0 },
    rt: { rp: !0, rt: !0 },
    tbody: { tbody: !0, tfoot: !0 },
    td: { td: !0, th: !0 },
    tfoot: { tbody: !0 },
    th: { td: !0, th: !0 },
    thead: { tbody: !0, tfoot: !0 },
    tr: { tr: !0 },
  };
function gy(r) {
  return (
    r == 45 ||
    r == 46 ||
    r == 58 ||
    (r >= 65 && r <= 90) ||
    r == 95 ||
    (r >= 97 && r <= 122) ||
    r >= 161
  );
}
function od(r) {
  return r == 9 || r == 10 || r == 13 || r == 32;
}
let uh = null,
  fh = null,
  dh = 0;
function el(r, e) {
  let t = r.pos + e;
  if (dh == t && fh == r) return uh;
  let n = r.peek(e);
  for (; od(n); ) n = r.peek(++e);
  let s = '';
  for (; gy(n); ) (s += String.fromCharCode(n)), (n = r.peek(++e));
  return (
    (fh = r),
    (dh = t),
    (uh = s ? s.toLowerCase() : n == yy || n == Qy ? void 0 : null)
  );
}
const ld = 60,
  by = 62,
  ad = 47,
  yy = 63,
  Qy = 33;
function ph(r, e) {
  (this.name = r), (this.parent = e), (this.hash = e ? e.hash : 0);
  for (let t = 0; t < r.length; t++)
    this.hash += (this.hash << 4) + r.charCodeAt(t) + (r.charCodeAt(t) << 8);
}
const xy = [Br, sd, id, nd, rd],
  vy = new Jf({
    start: null,
    shift(r, e, t, n) {
      return xy.indexOf(e) > -1 ? new ph(el(n, 1) || '', r) : r;
    },
    reduce(r, e) {
      return e == cy && r ? r.parent : r;
    },
    reuse(r, e, t, n) {
      let s = e.type.id;
      return s == Br || s == dy ? new ph(el(n, 1) || '', r) : r;
    },
    hash(r) {
      return r ? r.hash : 0;
    },
    strict: !1,
  }),
  Sy = new Rt(
    (r, e) => {
      if (r.next != ld) {
        r.next < 0 && e.context && r.acceptToken(eo);
        return;
      }
      r.advance();
      let t = r.next == ad;
      t && r.advance();
      let n = el(r, 0);
      if (n === void 0) return;
      if (!n) return r.acceptToken(t ? ay : Br);
      let s = e.context ? e.context.name : null;
      if (t) {
        if (n == s) return r.acceptToken(sy);
        if (s && my[s]) return r.acceptToken(eo, -2);
        if (e.dialectEnabled(py)) return r.acceptToken(oy);
        for (let o = e.context; o; o = o.parent) if (o.name == n) return;
        r.acceptToken(ly);
      } else {
        if (n == 'script') return r.acceptToken(id);
        if (n == 'style') return r.acceptToken(nd);
        if (n == 'textarea') return r.acceptToken(rd);
        if (Oy.hasOwnProperty(n)) return r.acceptToken(sd);
        s && hh[s] && hh[s][n] ? r.acceptToken(eo, -1) : r.acceptToken(Br);
      }
    },
    { contextual: !0 },
  ),
  $y = new Rt((r) => {
    for (let e = 0, t = 0; ; t++) {
      if (r.next < 0) {
        t && r.acceptToken(ch);
        break;
      }
      if (r.next == '-->'.charCodeAt(e)) {
        if ((e++, e == 3)) {
          t > 3 && r.acceptToken(ch, -2);
          break;
        }
      } else e = 0;
      r.advance();
    }
  });
function Xl(r, e, t) {
  let n = 2 + r.length;
  return new Rt((s) => {
    for (let o = 0, l = 0, a = 0; ; a++) {
      if (s.next < 0) {
        a && s.acceptToken(e);
        break;
      }
      if (
        (o == 0 && s.next == ld) ||
        (o == 1 && s.next == ad) ||
        (o >= 2 && o < n && s.next == r.charCodeAt(o - 2))
      )
        o++, l++;
      else if ((o == 2 || o == n) && od(s.next)) l++;
      else if (o == n && s.next == by) {
        a > l ? s.acceptToken(e, -l) : s.acceptToken(t, -(l - 2));
        break;
      } else if ((s.next == 10 || s.next == 13) && a) {
        s.acceptToken(e, 1);
        break;
      } else o = l = 0;
      s.advance();
    }
  });
}
const ky = Xl('script', Kb, ey),
  wy = Xl('style', ty, iy),
  Ty = Xl('textarea', ny, ry),
  Py = Gi.deserialize({
    version: 13,
    states:
      ",xOVOxOOO!WQ!bO'#CoO!]Q!bO'#CyO!bQ!bO'#C|O!gQ!bO'#DPO!lQ!bO'#DRO!qOXO'#CnO!|OYO'#CnO#XO[O'#CnO$eOxO'#CnOOOW'#Cn'#CnO$lO!rO'#DSO$tQ!bO'#DUO$yQ!bO'#DVOOOW'#Dj'#DjOOOW'#DX'#DXQVOxOOO%OQ#tO,59ZO%WQ#tO,59eO%`Q#tO,59hO%hQ#tO,59kO%pQ#tO,59mOOOX'#D]'#D]O%xOXO'#CwO&TOXO,59YOOOY'#D^'#D^O&]OYO'#CzO&hOYO,59YOOO['#D_'#D_O&pO[O'#C}O&{O[O,59YOOOW'#D`'#D`O'TOxO,59YO'[Q!bO'#DQOOOW,59Y,59YOOO`'#Da'#DaO'aO!rO,59nOOOW,59n,59nO'iQ!bO,59pO'nQ!bO,59qOOOW-E7V-E7VO'sQ#tO'#CqOOQO'#DY'#DYO(OQ#tO1G.uOOOX1G.u1G.uO(WQ#tO1G/POOOY1G/P1G/PO(`Q#tO1G/SOOO[1G/S1G/SO(hQ#tO1G/VOOOW1G/V1G/VO(pQ#tO1G/XOOOW1G/X1G/XOOOX-E7Z-E7ZO(xQ!bO'#CxOOOW1G.t1G.tOOOY-E7[-E7[O(}Q!bO'#C{OOO[-E7]-E7]O)SQ!bO'#DOOOOW-E7^-E7^O)XQ!bO,59lOOO`-E7_-E7_OOOW1G/Y1G/YOOOW1G/[1G/[OOOW1G/]1G/]O)^Q&jO,59]OOQO-E7W-E7WOOOX7+$a7+$aOOOY7+$k7+$kOOO[7+$n7+$nOOOW7+$q7+$qOOOW7+$s7+$sO)iQ!bO,59dO)nQ!bO,59gO)sQ!bO,59jOOOW1G/W1G/WO)xO,UO'#CtO*WO7[O'#CtOOQO1G.w1G.wOOOW1G/O1G/OOOOW1G/R1G/ROOOW1G/U1G/UOOOO'#DZ'#DZO*fO,UO,59`OOQO,59`,59`OOOO'#D['#D[O*tO7[O,59`OOOO-E7X-E7XOOQO1G.z1G.zOOOO-E7Y-E7Y",
    stateData:
      '+[~O!]OS~OSSOTPOUQOVROWTOY]OZ[O[^O^^O_^O`^Oa^Ow^Oz_O!cZO~OdaO~OdbO~OdcO~OddO~OdeO~O!VfOPkP!YkP~O!WiOQnP!YnP~O!XlORqP!YqP~OSSOTPOUQOVROWTOXqOY]OZ[O[^O^^O_^O`^Oa^Ow^O!cZO~O!YrO~P#dO!ZsO!duO~OdvO~OdwO~OfyOj|O~OfyOj!OO~OfyOj!QO~OfyOj!SO~OfyOj!UO~O!VfOPkX!YkX~OP!WO!Y!XO~O!WiOQnX!YnX~OQ!ZO!Y!XO~O!XlORqX!YqX~OR!]O!Y!XO~O!Y!XO~P#dOd!_O~O!ZsO!d!aO~Oj!bO~Oj!cO~Og!dOfeXjeX~OfyOj!fO~OfyOj!gO~OfyOj!hO~OfyOj!iO~OfyOj!jO~Od!kO~Od!lO~Od!mO~Oj!nO~Oi!qO!_!oO!a!pO~Oj!rO~Oj!sO~Oj!tO~O_!uO`!uO!_!wO!`!uO~O_!xO`!xO!a!wO!b!xO~O_!uO`!uO!_!{O!`!uO~O_!xO`!xO!a!{O!b!xO~O`_a!cwz!c~',
    goto:
      '%o!_PPPPPPPPPPPPPPPPPP!`!fP!lPP!xPP!{#O#R#X#[#_#e#h#k#q#w!`P!`!`P#}$T$k$q$w$}%T%Z%aPPPPPPPP%gX^OX`pXUOX`pezabcde{}!P!R!TR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ}bQ!PcQ!RdQ!TeZ!e{}!P!R!TQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp',
    nodeNames:
      '\u26A0 StartCloseTag StartCloseTag StartCloseTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue EndTag ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl',
    maxTerm: 66,
    context: vy,
    nodeProps: [
      [
        B.closedBy,
        -11,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        'EndTag',
        -4,
        19,
        29,
        32,
        35,
        'CloseTag',
      ],
      [
        B.group,
        -9,
        12,
        15,
        16,
        17,
        18,
        38,
        39,
        40,
        41,
        'Entity',
        14,
        'Entity TextContent',
        -3,
        27,
        30,
        33,
        'TextContent Entity',
      ],
      [B.openedBy, 26, 'StartTag StartCloseTag', -4, 28, 31, 34, 36, 'OpenTag'],
    ],
    skippedNodes: [0],
    repeatNodeCount: 9,
    tokenData:
      "!#b!aR!WOX$kXY)sYZ)sZ]$k]^)s^p$kpq)sqr$krs*zsv$kvw+dwx2yx}$k}!O3f!O!P$k!P!Q7_!Q![$k![!]8u!]!^$k!^!_>b!_!`!!p!`!a8T!a!c$k!c!}8u!}#R$k#R#S8u#S#T$k#T#o8u#o$f$k$f$g&R$g%W$k%W%o8u%o%p$k%p&a8u&a&b$k&b1p8u1p4U$k4U4d8u4d4e$k4e$IS8u$IS$I`$k$I`$Ib8u$Ib$Kh$k$Kh%#t8u%#t&/x$k&/x&Et8u&Et&FV$k&FV;'S8u;'S;:j<t;:j?&r$k?&r?Ah8u?Ah?BY$k?BY?Mn8u?Mn~$k!Z$vc^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!R&[V^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&Rq&xT^P!bpOv&qwx'Xx!^&q!^!_'g!_~&qP'^R^POv'Xw!^'X!_~'Xp'lQ!bpOv'gx~'ga'yU^P!``Or'rrs'Xsv'rw!^'r!^!_(]!_~'r`(bR!``Or(]sv(]w~(]!Q(rT!``!bpOr(krs'gsv(kwx(]x~(kW)WXiWOX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!a*O^^P!``!bp!]^OX&RXY)sYZ)sZ]&R]^)s^p&Rpq)sqr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!Z+TT!_h^P!bpOv&qwx'Xx!^&q!^!_'g!_~&q!Z+kbiWaPOX,sXZ.QZ],s]^.Q^p,sqr,srs.Qst/]tw,swx.Qx!P,s!P!Q.Q!Q!],s!]!^)R!^!a.Q!a$f,s$f$g.Q$g~,s!Z,xbiWOX,sXZ.QZ],s]^.Q^p,sqr,srs.Qst)Rtw,swx.Qx!P,s!P!Q.Q!Q!],s!]!^.i!^!a.Q!a$f,s$f$g.Q$g~,s!R.TTOp.Qqs.Qt!].Q!]!^.d!^~.Q!R.iO_!R!Z.pXiW_!ROX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z/baiWOX0gXZ1qZ]0g]^1q^p0gqr0grs1qsw0gwx1qx!P0g!P!Q1q!Q!]0g!]!^)R!^!a1q!a$f0g$f$g1q$g~0g!Z0laiWOX0gXZ1qZ]0g]^1q^p0gqr0grs1qsw0gwx1qx!P0g!P!Q1q!Q!]0g!]!^2V!^!a1q!a$f0g$f$g1q$g~0g!R1tSOp1qq!]1q!]!^2Q!^~1q!R2VO`!R!Z2^XiW`!ROX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z3SU!ax^P!``Or'rrs'Xsv'rw!^'r!^!_(]!_~'r!]3qe^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O5S!O!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!]5_d^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!`&R!`!a6m!a$f$k$f$g&R$g~$k!T6xV^P!``!bp!dQOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!X7hX^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_!`&R!`!a8T!a~&R!X8`VjU^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!a9U!YfSdQ^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O8u!O!P8u!P!Q&R!Q![8u![!]8u!]!^$k!^!_(k!_!a&R!a!c$k!c!}8u!}#R$k#R#S8u#S#T$k#T#o8u#o$f$k$f$g&R$g$}$k$}%O8u%O%W$k%W%o8u%o%p$k%p&a8u&a&b$k&b1p8u1p4U8u4U4d8u4d4e$k4e$IS8u$IS$I`$k$I`$Ib8u$Ib$Je$k$Je$Jg8u$Jg$Kh$k$Kh%#t8u%#t&/x$k&/x&Et8u&Et&FV$k&FV;'S8u;'S;:j<t;:j?&r$k?&r?Ah8u?Ah?BY$k?BY?Mn8u?Mn~$k!a=Pe^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g;=`$k;=`<%l8u<%l~$k!R>iW!``!bpOq(kqr?Rrs'gsv(kwx(]x!a(k!a!bKj!b~(k!R?YZ!``!bpOr(krs'gsv(kwx(]x}(k}!O?{!O!f(k!f!gAR!g#W(k#W#XGz#X~(k!R@SV!``!bpOr(krs'gsv(kwx(]x}(k}!O@i!O~(k!R@rT!``!bp!cPOr(krs'gsv(kwx(]x~(k!RAYV!``!bpOr(krs'gsv(kwx(]x!q(k!q!rAo!r~(k!RAvV!``!bpOr(krs'gsv(kwx(]x!e(k!e!fB]!f~(k!RBdV!``!bpOr(krs'gsv(kwx(]x!v(k!v!wBy!w~(k!RCQV!``!bpOr(krs'gsv(kwx(]x!{(k!{!|Cg!|~(k!RCnV!``!bpOr(krs'gsv(kwx(]x!r(k!r!sDT!s~(k!RD[V!``!bpOr(krs'gsv(kwx(]x!g(k!g!hDq!h~(k!RDxW!``!bpOrDqrsEbsvDqvwEvwxFfx!`Dq!`!aGb!a~DqqEgT!bpOvEbvxEvx!`Eb!`!aFX!a~EbPEyRO!`Ev!`!aFS!a~EvPFXOzPqF`Q!bpzPOv'gx~'gaFkV!``OrFfrsEvsvFfvwEvw!`Ff!`!aGQ!a~FfaGXR!``zPOr(]sv(]w~(]!RGkT!``!bpzPOr(krs'gsv(kwx(]x~(k!RHRV!``!bpOr(krs'gsv(kwx(]x#c(k#c#dHh#d~(k!RHoV!``!bpOr(krs'gsv(kwx(]x#V(k#V#WIU#W~(k!RI]V!``!bpOr(krs'gsv(kwx(]x#h(k#h#iIr#i~(k!RIyV!``!bpOr(krs'gsv(kwx(]x#m(k#m#nJ`#n~(k!RJgV!``!bpOr(krs'gsv(kwx(]x#d(k#d#eJ|#e~(k!RKTV!``!bpOr(krs'gsv(kwx(]x#X(k#X#YDq#Y~(k!RKqW!``!bpOrKjrsLZsvKjvwLowxNPx!aKj!a!b! g!b~KjqL`T!bpOvLZvxLox!aLZ!a!bM^!b~LZPLrRO!aLo!a!bL{!b~LoPMORO!`Lo!`!aMX!a~LoPM^OwPqMcT!bpOvLZvxLox!`LZ!`!aMr!a~LZqMyQ!bpwPOv'gx~'gaNUV!``OrNPrsLosvNPvwLow!aNP!a!bNk!b~NPaNpV!``OrNPrsLosvNPvwLow!`NP!`!a! V!a~NPa! ^R!``wPOr(]sv(]w~(]!R! nW!``!bpOrKjrsLZsvKjvwLowxNPx!`Kj!`!a!!W!a~Kj!R!!aT!``!bpwPOr(krs'gsv(kwx(]x~(k!V!!{VgS^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R",
    tokenizers: [ky, wy, Ty, Sy, $y, 0, 1, 2, 3, 4, 5],
    topRules: { Document: [0, 13] },
    dialects: { noMatch: 0 },
    tokenPrec: 464,
  });
function Ry(r, e) {
  let t = Object.create(null);
  for (let n of r.firstChild.getChildren('Attribute')) {
    let s = n.getChild('AttributeName'),
      o = n.getChild('AttributeValue') || n.getChild('UnquotedAttributeValue');
    s &&
      (t[e.read(s.from, s.to)] = o
        ? o.name == 'AttributeValue'
          ? e.read(o.from + 1, o.to - 1)
          : e.read(o.from, o.to)
        : '');
  }
  return t;
}
function to(r, e, t) {
  let n;
  for (let s of t)
    if (!s.attrs || s.attrs(n || (n = Ry(r.node.parent, e))))
      return { parser: s.parser };
  return null;
}
function Cy(r) {
  let e = [],
    t = [],
    n = [];
  for (let s of r) {
    let o =
      s.tag == 'script'
        ? e
        : s.tag == 'style'
        ? t
        : s.tag == 'textarea'
        ? n
        : null;
    if (!o)
      throw new RangeError(
        'Only script, style, and textarea tags can host nested parsers',
      );
    o.push(s);
  }
  return m0((s, o) => {
    let l = s.type.id;
    return l == hy
      ? to(s, o, e)
      : l == uy
      ? to(s, o, t)
      : l == fy
      ? to(s, o, n)
      : null;
  });
}
const Oh = 279,
  mh = 1,
  Wy = 2,
  or = 280,
  Ay = 3,
  Ey = 281,
  gh = 282,
  Ly = 4,
  _y = 284,
  Xy = 285,
  Zy = 5,
  Dy = 6,
  Iy = 1,
  My = [
    9,
    10,
    11,
    12,
    13,
    32,
    133,
    160,
    5760,
    8192,
    8193,
    8194,
    8195,
    8196,
    8197,
    8198,
    8199,
    8200,
    8201,
    8202,
    8232,
    8233,
    8239,
    8287,
    12288,
  ],
  cd = 125,
  jy = 123,
  zy = 59,
  bh = 47,
  Ny = 42,
  By = 43,
  Uy = 45,
  Vy = 36,
  Yy = 96,
  qy = 92,
  Gy = new Jf({
    start: !1,
    shift(r, e) {
      return e == Zy || e == Dy || e == _y ? r : e == Xy;
    },
    strict: !1,
  }),
  Fy = new Rt(
    (r, e) => {
      let { next: t } = r;
      (t == cd || t == -1 || e.context) && e.canShift(gh) && r.acceptToken(gh);
    },
    { contextual: !0, fallback: !0 },
  ),
  Hy = new Rt(
    (r, e) => {
      let { next: t } = r,
        n;
      My.indexOf(t) > -1 ||
        (t == bh && ((n = r.peek(1)) == bh || n == Ny)) ||
        (t != cd &&
          t != zy &&
          t != -1 &&
          !e.context &&
          e.canShift(Oh) &&
          r.acceptToken(Oh));
    },
    { contextual: !0 },
  ),
  Jy = new Rt(
    (r, e) => {
      let { next: t } = r;
      if ((t == By || t == Uy) && (r.advance(), t == r.next)) {
        r.advance();
        let n = !e.context && e.canShift(mh);
        r.acceptToken(n ? mh : Wy);
      }
    },
    { contextual: !0 },
  ),
  Ky = new Rt((r) => {
    for (let e = !1, t = 0; ; t++) {
      let { next: n } = r;
      if (n < 0) {
        t && r.acceptToken(or);
        break;
      } else if (n == Yy) {
        t ? r.acceptToken(or) : r.acceptToken(Ey, 1);
        break;
      } else if (n == jy && e) {
        t == 1 ? r.acceptToken(Ay, 1) : r.acceptToken(or, -1);
        break;
      } else if (n == 10 && t) {
        r.advance(), r.acceptToken(or);
        break;
      } else n == qy && r.advance();
      (e = n == Vy), r.advance();
    }
  });
function eQ(r, e) {
  return r == 'extends' && e.dialectEnabled(Iy) ? Ly : -1;
}
const tQ = {
    __proto__: null,
    export: 18,
    as: 23,
    from: 29,
    default: 32,
    async: 37,
    function: 38,
    this: 48,
    true: 56,
    false: 56,
    void: 66,
    typeof: 70,
    null: 86,
    super: 88,
    new: 122,
    await: 139,
    yield: 141,
    delete: 142,
    class: 152,
    extends: 154,
    public: 197,
    private: 197,
    protected: 197,
    readonly: 199,
    instanceof: 220,
    in: 222,
    const: 224,
    import: 256,
    keyof: 307,
    unique: 311,
    infer: 317,
    is: 351,
    abstract: 371,
    implements: 373,
    type: 375,
    let: 378,
    var: 380,
    interface: 387,
    enum: 391,
    namespace: 397,
    module: 399,
    declare: 403,
    global: 407,
    for: 428,
    of: 437,
    while: 440,
    with: 444,
    do: 448,
    if: 452,
    else: 454,
    switch: 458,
    case: 464,
    try: 470,
    catch: 472,
    finally: 474,
    return: 478,
    throw: 482,
    break: 486,
    continue: 490,
    debugger: 494,
  },
  iQ = {
    __proto__: null,
    async: 109,
    get: 111,
    set: 113,
    public: 161,
    private: 161,
    protected: 161,
    static: 163,
    abstract: 165,
    override: 167,
    readonly: 173,
    new: 355,
  },
  nQ = { __proto__: null, '<': 129 },
  rQ = Gi.deserialize({
    version: 13,
    states:
      "$1jO`QYOOO'QQ!LdO'#ChO'XOSO'#DVO)dQYO'#D]O)tQYO'#DhO){QYO'#DrO-xQYO'#DxOOQO'#E]'#E]O.]QWO'#E[O.bQWO'#E[OOQ!LS'#Ef'#EfO0aQ!LdO'#IrO2wQ!LdO'#IsO3eQWO'#EzO3jQpO'#FaOOQ!LS'#FS'#FSO3rO!bO'#FSO4QQWO'#FhO5_QWO'#FgOOQ!LS'#Is'#IsOOQ!LQ'#Ir'#IrOOQQ'#J['#J[O5dQWO'#HnO5iQ!LYO'#HoOOQQ'#If'#IfOOQQ'#Hp'#HpQ`QYOOO){QYO'#DjO5qQWO'#G[O5vQ#tO'#CmO6UQWO'#EZO6aQWO'#EgO6fQ#tO'#FRO7QQWO'#G[O7VQWO'#G`O7bQWO'#G`O7pQWO'#GcO7pQWO'#GdO7pQWO'#GfO5qQWO'#GiO8aQWO'#GlO9oQWO'#CdO:PQWO'#GyO:XQWO'#HPO:XQWO'#HRO`QYO'#HTO:XQWO'#HVO:XQWO'#HYO:^QWO'#H`O:cQ!LZO'#HdO){QYO'#HfO:nQ!LZO'#HhO:yQ!LZO'#HjO5iQ!LYO'#HlO){QYO'#DWOOOS'#Hr'#HrO;UOSO,59qOOQ!LS,59q,59qO=gQbO'#ChO=qQYO'#HsO>UQWO'#ItO@TQbO'#ItO'dQYO'#ItO@[QWO,59wO@rQ&jO'#DbOAkQWO'#E]OAxQWO'#JPOBTQWO'#JOOBTQWO'#JOOB]QWO,5:yOBbQWO'#I}OBiQWO'#DyO5vQ#tO'#EZOBwQWO'#EZOCSQ`O'#FROOQ!LS,5:S,5:SOC[QYO,5:SOEYQ!LdO,5:^OEvQWO,5:dOFaQ!LYO'#I|O7VQWO'#I{OFhQWO'#I{OFpQWO,5:xOFuQWO'#I{OGTQYO,5:vOITQWO'#EWOJ_QWO,5:vOKnQWO'#DlOKuQYO'#DqOLPQ&jO,5;PO){QYO,5;POOQQ'#Er'#ErOOQQ'#Et'#EtO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;RO){QYO,5;ROOQQ'#Ex'#ExOLXQYO,5;cOOQ!LS,5;h,5;hOOQ!LS,5;i,5;iONXQWO,5;iOOQ!LS,5;j,5;jO){QYO'#H}ON^Q!LYO,5<TONxQWO,5;RO){QYO,5;fO! bQpO'#JTO! PQpO'#JTO! iQpO'#JTO! zQpO,5;qOOOO,5;{,5;{O!!YQYO'#FcOOOO'#H|'#H|O3rO!bO,5;nO!!aQpO'#FeOOQ!LS,5;n,5;nO!!}Q,UO'#CrOOQ!LS'#Cu'#CuO!#bQWO'#CuO!#gOSO'#CyO!$TQ#tO,5<QO!$[QWO,5<SO!%hQWO'#FrO!%uQWO'#FsO!%zQWO'#FwO!&|Q&jO'#F{O!'oQ,UO'#IoOOQ!LS'#Io'#IoO!'yQWO'#InO!(XQWO'#ImOOQ!LS'#Cs'#CsOOQ!LS'#C|'#C|O!(aQWO'#DOOJdQWO'#FjOJdQWO'#FlO!(fQWO'#FnO!(kQWO'#FoO!(pQWO'#FuOJdQWO'#FzO!(uQWO'#E^O!)^QWO,5<RO`QYO,5>YOOQQ'#Ii'#IiOOQQ,5>Z,5>ZOOQQ-E;n-E;nO!+YQ!LdO,5:UOOQ!LQ'#Cp'#CpO!+yQ#tO,5<vOOQO'#Cf'#CfO!,[QWO'#CqO!,dQ!LYO'#IjO5_QWO'#IjO:^QWO,59XO!,rQpO,59XO!,zQ#tO,59XO5vQ#tO,59XO!-VQWO,5:vO!-_QWO'#GxO!-mQWO'#J`O){QYO,5;kO!-uQ&jO,5;mO!-zQWO,5=cO!.PQWO,5=cO!.UQWO,5=cO5iQ!LYO,5=cO5qQWO,5<vO!.dQWO'#E_O!.xQ&jO'#E`OOQ!LQ'#I}'#I}O!/ZQ!LYO'#J]O5iQ!LYO,5<zO7pQWO,5=QOOQO'#Cr'#CrO!/fQpO,5<}O!/nQ#tO,5=OO!/yQWO,5=QO!0OQ`O,5=TO:^QWO'#GnO5qQWO'#GpO!0WQWO'#GpO5vQ#tO'#GsO!0]QWO'#GsOOQQ,5=W,5=WO!0bQWO'#GtO!0jQWO'#CmO!0oQWO,59OO!0yQWO,59OO!2{QYO,59OOOQQ,59O,59OO!3YQ!LYO,59OO){QYO,59OO!3eQYO'#G{OOQQ'#G|'#G|OOQQ'#G}'#G}O`QYO,5=eO!3uQWO,5=eO){QYO'#DxO`QYO,5=kO`QYO,5=mO!3zQWO,5=oO`QYO,5=qO!4PQWO,5=tO!4UQYO,5=zOOQQ,5>O,5>OO){QYO,5>OO5iQ!LYO,5>QOOQQ,5>S,5>SO!8VQWO,5>SOOQQ,5>U,5>UO!8VQWO,5>UOOQQ,5>W,5>WO!8[Q`O,59rOOOS-E;p-E;pOOQ!LS1G/]1G/]O!8aQbO,5>_O'dQYO,5>_OOQO,5>d,5>dO!8kQYO'#HsOOQO-E;q-E;qO!8xQWO,5?`O!9QQbO,5?`O!9XQWO,5?jOOQ!LS1G/c1G/cO!9aQpO'#DTOOQO'#Iv'#IvO){QYO'#IvO!:OQpO'#IvO!:mQpO'#DcO!;OQ&jO'#DcO!=ZQYO'#DcO!=bQWO'#IuO!=jQWO,59|O!=oQWO'#EaO!=}QWO'#JQO!>VQWO,5:zO!>mQ&jO'#DcO){QYO,5?kO!>wQWO'#HxOOQO-E;v-E;vO!9XQWO,5?jOOQ!LQ1G0e1G0eO!@TQ&jO'#D|OOQ!LS,5:e,5:eO){QYO,5:eOITQWO,5:eO!@[QWO,5:eO:^QWO,5:uO!,rQpO,5:uO!,zQ#tO,5:uO5vQ#tO,5:uOOQ!LS1G/n1G/nOOQ!LS1G0O1G0OOOQ!LQ'#EV'#EVO){QYO,5?hO!@gQ!LYO,5?hO!@xQ!LYO,5?hO!APQWO,5?gO!AXQWO'#HzO!APQWO,5?gOOQ!LQ1G0d1G0dO7VQWO,5?gOOQ!LS1G0b1G0bO!AsQ!LdO1G0bO!BdQ!LbO,5:rOOQ!LS'#Fq'#FqO!CQQ!LdO'#IoOGTQYO1G0bO!EPQ#tO'#IwO!EZQWO,5:WO!E`QbO'#IxO){QYO'#IxO!EjQWO,5:]OOQ!LS'#DT'#DTOOQ!LS1G0k1G0kO!EoQWO1G0kO!HQQ!LdO1G0mO!HXQ!LdO1G0mO!JlQ!LdO1G0mO!JsQ!LdO1G0mO!LzQ!LdO1G0mO!M_Q!LdO1G0mO#!OQ!LdO1G0mO#!VQ!LdO1G0mO#$jQ!LdO1G0mO#$qQ!LdO1G0mO#&fQ!LdO1G0mO#)`Q7^O'#ChO#+ZQ7^O1G0}O#-UQ7^O'#IsOOQ!LS1G1T1G1TO#-iQ!LdO,5>iOOQ!LQ-E;{-E;{O#.YQ!LdO1G0mOOQ!LS1G0m1G0mO#0[Q!LdO1G1QO#0{QpO,5;sO#1QQpO,5;tO#1VQpO'#F[O#1kQWO'#FZOOQO'#JU'#JUOOQO'#H{'#H{O#1pQpO1G1]OOQ!LS1G1]1G1]OOOO1G1f1G1fO#2OQ7^O'#IrO#2YQWO,5;}OLXQYO,5;}OOOO-E;z-E;zOOQ!LS1G1Y1G1YOOQ!LS,5<P,5<PO#2_QpO,5<POOQ!LS,59a,59aOITQWO'#C{OOOS'#Hq'#HqO#2dOSO,59eOOQ!LS,59e,59eO){QYO1G1lO!(kQWO'#IPO#2oQWO,5<eOOQ!LS,5<b,5<bOOQO'#GV'#GVOJdQWO,5<pOOQO'#GX'#GXOJdQWO,5<rOJdQWO,5<tOOQO1G1n1G1nO#2zQ`O'#CpO#3_Q`O,5<^O#3fQWO'#JXO5qQWO'#JXO#3tQWO,5<`OJdQWO,5<_O#3yQ`O'#FqO#4WQ`O'#JYO#4bQWO'#JYOITQWO'#JYO#4gQWO,5<cOOQ!LQ'#Dg'#DgO#4lQWO'#FtO#4wQpO'#F|O!&wQ&jO'#F|O!&wQ&jO'#GOO#5YQWO'#GPO!(pQWO'#GSOOQO'#IR'#IRO#5_Q&jO,5<gOOQ!LS,5<g,5<gO#5fQ&jO'#F|O#5tQ&jO'#F}O#5|Q&jO'#F}OOQ!LS,5<u,5<uOJdQWO,5?YOJdQWO,5?YO#6RQWO'#ISO#6^QWO,5?XOOQ!LS'#Ch'#ChO#7QQ#tO,59jOOQ!LS,59j,59jO#7sQ#tO,5<UO#8fQ#tO,5<WO#8pQWO,5<YOOQ!LS,5<Z,5<ZO#8uQWO,5<aO#8zQ#tO,5<fOGTQYO1G1mO#9[QWO1G1mOOQQ1G3t1G3tOOQ!LS1G/p1G/pONXQWO1G/pOOQQ1G2b1G2bOITQWO1G2bO){QYO1G2bOITQWO1G2bO#9aQWO1G2bO#9oQWO,59]O#:xQWO'#EWOOQ!LQ,5?U,5?UO#;SQ!LYO,5?UOOQQ1G.s1G.sO:^QWO1G.sO!,rQpO1G.sO!,zQ#tO1G.sO#;bQWO1G0bO#;gQWO'#ChO#;rQWO'#JaO#;zQWO,5=dO#<PQWO'#JaO#<UQWO'#JaO#<^QWO'#I[O#<lQWO,5?zO#<tQbO1G1VOOQ!LS1G1X1G1XO5qQWO1G2}O#<{QWO1G2}O#=QQWO1G2}O#=VQWO1G2}OOQQ1G2}1G2}O#=[Q#tO1G2bO7VQWO'#JOO7VQWO'#EaO7VQWO'#IUO#=mQ!LYO,5?wOOQQ1G2f1G2fO!/yQWO1G2lOITQWO1G2iO#=xQWO1G2iOOQQ1G2j1G2jOITQWO1G2jO#=}QWO1G2jO#>VQ&jO'#GhOOQQ1G2l1G2lO!&wQ&jO'#IWO!0OQ`O1G2oOOQQ1G2o1G2oOOQQ,5=Y,5=YO#>_Q#tO,5=[O5qQWO,5=[O#5YQWO,5=_O5_QWO,5=_O!,rQpO,5=_O!,zQ#tO,5=_O5vQ#tO,5=_O#>pQWO'#J_O#>{QWO,5=`OOQQ1G.j1G.jO#?QQ!LYO1G.jO#?]QWO1G.jO#?bQWO1G.jO5iQ!LYO1G.jO#?jQbO,5?|O#?tQWO,5?|O#@PQYO,5=gO#@WQWO,5=gO7VQWO,5?|OOQQ1G3P1G3PO`QYO1G3POOQQ1G3V1G3VOOQQ1G3X1G3XO:XQWO1G3ZO#@]QYO1G3]O#DWQYO'#H[OOQQ1G3`1G3`O:^QWO1G3fO#DeQWO1G3fO5iQ!LYO1G3jOOQQ1G3l1G3lOOQ!LQ'#Fx'#FxO5iQ!LYO1G3nO5iQ!LYO1G3pOOOS1G/^1G/^O#DmQ`O,5<TO#DuQbO1G3yOOQO1G4O1G4OO){QYO,5>_O#EPQWO1G4zO#EXQWO1G5UO#EaQWO,5?bOLXQYO,5:{O7VQWO,5:{O:^QWO,59}OLXQYO,59}O!,rQpO,59}O#EfQ7^O,59}OOQO,5:{,5:{O#EpQ&jO'#HtO#FWQWO,5?aOOQ!LS1G/h1G/hO#F`Q&jO'#HyO#FtQWO,5?lOOQ!LQ1G0f1G0fO!;OQ&jO,59}O#F|QbO1G5VO7VQWO,5>dOOQ!LQ'#ES'#ESO#GWQ!LrO'#ETO!?{Q&jO'#D}OOQO'#Hw'#HwO#GrQ&jO,5:hOOQ!LS,5:h,5:hO#GyQ&jO'#D}O#H[Q&jO'#D}O#HcQ&jO'#EYO#HfQ&jO'#ETO#HsQ&jO'#ETO!?{Q&jO'#ETO#IWQWO1G0PO#I]Q`O1G0POOQ!LS1G0P1G0PO){QYO1G0POITQWO1G0POOQ!LS1G0a1G0aO:^QWO1G0aO!,rQpO1G0aO!,zQ#tO1G0aO#IdQ!LdO1G5SO){QYO1G5SO#ItQ!LYO1G5SO#JVQWO1G5RO7VQWO,5>fOOQO,5>f,5>fO#J_QWO,5>fOOQO-E;x-E;xO#JVQWO1G5RO#JmQ!LdO,59jO#LlQ!LdO,5<UO#NnQ!LdO,5<WO$!pQ!LdO,5<fOOQ!LS7+%|7+%|O$$xQ!LdO7+%|O$%iQWO'#HuO$%sQWO,5?cOOQ!LS1G/r1G/rO$%{QYO'#HvO$&YQWO,5?dO$&bQbO,5?dOOQ!LS1G/w1G/wOOQ!LS7+&V7+&VO$&lQ7^O,5:^O){QYO7+&iO$&vQ7^O,5:UOOQO1G1_1G1_OOQO1G1`1G1`O$'TQMhO,5;vOLXQYO,5;uOOQO-E;y-E;yOOQ!LS7+&w7+&wOOOO7+'Q7+'QOOOO1G1i1G1iO$'`QWO1G1iOOQ!LS1G1k1G1kO$'eQ`O,59gOOOS-E;o-E;oOOQ!LS1G/P1G/PO$'lQ!LdO7+'WOOQ!LS,5>k,5>kO$(]QWO,5>kOOQ!LS1G2P1G2PP$(bQWO'#IPPOQ!LS-E;}-E;}O$)RQ#tO1G2[O$)tQ#tO1G2^O$*OQ#tO1G2`OOQ!LS1G1x1G1xO$*VQWO'#IOO$*eQWO,5?sO$*eQWO,5?sO$*mQWO,5?sO$*xQWO,5?sOOQO1G1z1G1zO$+WQ#tO1G1yO$+hQWO'#IQO$+xQWO,5?tOITQWO,5?tO$,QQ`O,5?tOOQ!LS1G1}1G1}O5iQ!LYO,5<hO5iQ!LYO,5<iO$,[QWO,5<iO#5TQWO,5<iO!,rQpO,5<hO$,aQWO,5<jO5iQ!LYO,5<kO$,[QWO,5<nOOQO-E<P-E<POOQ!LS1G2R1G2RO!&wQ&jO,5<hO$,iQWO,5<iO!&wQ&jO,5<jO!&wQ&jO,5<iO$,tQ#tO1G4tO$-OQ#tO1G4tOOQO,5>n,5>nOOQO-E<Q-E<QO!-uQ&jO,59lO){QYO,59lO$-]QWO1G1tOJdQWO1G1{O$-bQ!LdO7+'XOOQ!LS7+'X7+'XOGTQYO7+'XOOQ!LS7+%[7+%[O$.RQ`O'#JZO#IWQWO7+'|O$.]QWO7+'|O$.eQ`O7+'|OOQQ7+'|7+'|OITQWO7+'|O){QYO7+'|OITQWO7+'|OOQO1G.w1G.wO$.oQ!LbO'#ChO$/PQ!LbO,5<lO$/nQWO,5<lOOQ!LQ1G4p1G4pOOQQ7+$_7+$_O:^QWO7+$_O!,rQpO7+$_OGTQYO7+%|O$/sQWO'#IZO$0UQWO,5?{OOQO1G3O1G3OO5qQWO,5?{O$0UQWO,5?{O$0^QWO,5?{OOQO,5>v,5>vOOQO-E<Y-E<YOOQ!LS7+&q7+&qO$0cQWO7+(iO5iQ!LYO7+(iO5qQWO7+(iO$0hQWO7+(iO$0mQWO7+'|OOQ!LQ,5>p,5>pOOQ!LQ-E<S-E<SOOQQ7+(W7+(WO$0{Q!LbO7+(TOITQWO7+(TO$1VQ`O7+(UOOQQ7+(U7+(UOITQWO7+(UO$1^QWO'#J^O$1iQWO,5=SOOQO,5>r,5>rOOQO-E<U-E<UOOQQ7+(Z7+(ZO$2cQ&jO'#GqOOQQ1G2v1G2vOITQWO1G2vO){QYO1G2vOITQWO1G2vO$2jQWO1G2vO$2xQ#tO1G2vO5iQ!LYO1G2yO#5YQWO1G2yO5_QWO1G2yO!,rQpO1G2yO!,zQ#tO1G2yO$3ZQWO'#IYO$3fQWO,5?yO$3nQ&jO,5?yOOQ!LQ1G2z1G2zOOQQ7+$U7+$UO$3vQWO7+$UO5iQ!LYO7+$UO$3{QWO7+$UO){QYO1G5hO){QYO1G5iO$4QQYO1G3RO$4XQWO1G3RO$4^QYO1G3RO$4eQ!LYO1G5hOOQQ7+(k7+(kO5iQ!LYO7+(uO`QYO7+(wOOQQ'#Jd'#JdOOQQ'#I]'#I]O$4oQYO,5=vOOQQ,5=v,5=vO){QYO'#H]O$4|QWO'#H_OOQQ7+)Q7+)QO$5RQYO7+)QO7VQWO7+)QOOQQ7+)U7+)UOOQQ7+)Y7+)YOOQQ7+)[7+)[OOQO1G4|1G4|O$9PQ7^O1G0gO$9ZQWO1G0gOOQO1G/i1G/iO$9fQ7^O1G/iO:^QWO1G/iOLXQYO'#DcOOQO,5>`,5>`OOQO-E;r-E;rOOQO,5>e,5>eOOQO-E;w-E;wO!,rQpO1G/iO:^QWO,5:iOOQO,5:o,5:oO){QYO,5:oO$9pQ!LYO,5:oO$9{Q!LYO,5:oO!,rQpO,5:iOOQO-E;u-E;uOOQ!LS1G0S1G0SO!?{Q&jO,5:iO$:ZQ&jO,5:iO$:lQ!LrO,5:oO$;WQ&jO,5:iO!?{Q&jO,5:oOOQO,5:t,5:tO$;_Q&jO,5:oO$;lQ!LYO,5:oOOQ!LS7+%k7+%kO#IWQWO7+%kO#I]Q`O7+%kOOQ!LS7+%{7+%{O:^QWO7+%{O!,rQpO7+%{O$<QQ!LdO7+*nO){QYO7+*nOOQO1G4Q1G4QO7VQWO1G4QO$<bQWO7+*mO$<jQ!LdO1G2[O$>lQ!LdO1G2^O$@nQ!LdO1G1yO$BvQ#tO,5>aOOQO-E;s-E;sO$CQQbO,5>bO){QYO,5>bOOQO-E;t-E;tO$C[QWO1G5OO$CdQ7^O1G0bO$EkQ7^O1G0mO$ErQ7^O1G0mO$GsQ7^O1G0mO$GzQ7^O1G0mO$IoQ7^O1G0mO$JSQ7^O1G0mO$LaQ7^O1G0mO$LhQ7^O1G0mO$NiQ7^O1G0mO$NpQ7^O1G0mO%!eQ7^O1G0mO%!xQ!LdO<<JTO%#iQ7^O1G0mO%%XQ7^O'#IoO%'UQ7^O1G1QOLXQYO'#F^OOQO'#JV'#JVOOQO1G1b1G1bO%'cQWO1G1aO%'hQ7^O,5>iOOOO7+'T7+'TOOOS1G/R1G/ROOQ!LS1G4V1G4VOJdQWO7+'zO%'rQWO,5>jO5qQWO,5>jOOQO-E;|-E;|O%(QQWO1G5_O%(QQWO1G5_O%(YQWO1G5_O%(eQ`O,5>lO%(oQWO,5>lOITQWO,5>lOOQO-E<O-E<OO%(tQ`O1G5`O%)OQWO1G5`OOQO1G2S1G2SOOQO1G2T1G2TO5iQ!LYO1G2TO$,[QWO1G2TO5iQ!LYO1G2SO%)WQWO1G2UOITQWO1G2UOOQO1G2V1G2VO5iQ!LYO1G2YO!,rQpO1G2SO#5TQWO1G2TO%)]QWO1G2UO%)eQWO1G2TOJdQWO7+*`OOQ!LS1G/W1G/WO%)pQWO1G/WOOQ!LS7+'`7+'`O%)uQ#tO7+'gO%*VQ!LdO<<JsOOQ!LS<<Js<<JsOITQWO'#ITO%*vQWO,5?uOOQQ<<Kh<<KhOITQWO<<KhO#IWQWO<<KhO%+OQWO<<KhO%+WQ`O<<KhOITQWO1G2WOOQQ<<Gy<<GyO:^QWO<<GyO%+bQ!LdO<<IhOOQ!LS<<Ih<<IhOOQO,5>u,5>uO%,RQWO,5>uO%,WQWO,5>uOOQO-E<X-E<XO%,`QWO1G5gO%,`QWO1G5gO5qQWO1G5gO%,hQWO<<LTOOQQ<<LT<<LTO%,mQWO<<LTO5iQ!LYO<<LTO){QYO<<KhOITQWO<<KhOOQQ<<Ko<<KoO$0{Q!LbO<<KoOOQQ<<Kp<<KpO$1VQ`O<<KpO%,rQ&jO'#IVO%,}QWO,5?xOLXQYO,5?xOOQQ1G2n1G2nO#GWQ!LrO'#ETO!?{Q&jO'#GrOOQO'#IX'#IXO%-VQ&jO,5=]OOQQ,5=],5=]O%-^Q&jO'#ETO%-iQ&jO'#ETO%.QQ&jO'#ETO%.[Q&jO'#GrO%.mQWO7+(bO%.rQWO7+(bO%.zQ`O7+(bOOQQ7+(b7+(bOITQWO7+(bO){QYO7+(bOITQWO7+(bO%/UQWO7+(bOOQQ7+(e7+(eO5iQ!LYO7+(eO#5YQWO7+(eO5_QWO7+(eO!,rQpO7+(eO%/dQWO,5>tOOQO-E<W-E<WOOQO'#Gu'#GuO%/oQWO1G5eO5iQ!LYO<<GpOOQQ<<Gp<<GpO%/wQWO<<GpO%/|QWO7++SO%0RQWO7++TOOQQ7+(m7+(mO%0WQWO7+(mO%0]QYO7+(mO%0dQWO7+(mO){QYO7++SO){QYO7++TOOQQ<<La<<LaOOQQ<<Lc<<LcOOQQ-E<Z-E<ZOOQQ1G3b1G3bO%0iQWO,5=wOOQQ,5=y,5=yO:^QWO<<LlO%0nQWO<<LlOLXQYO7+&ROOQO7+%T7+%TO%0sQ7^O1G5VO:^QWO7+%TOOQO1G0T1G0TO%0}Q!LdO1G0ZOOQO1G0Z1G0ZO){QYO1G0ZO%1XQ!LYO1G0ZO:^QWO1G0TO!,rQpO1G0TO!?{Q&jO1G0TO%1dQ!LYO1G0ZO%1rQ&jO1G0TO%2TQ!LYO1G0ZO%2iQ!LrO1G0ZO%2sQ&jO1G0TO!?{Q&jO1G0ZOOQ!LS<<IV<<IVOOQ!LS<<Ig<<IgO:^QWO<<IgO%2zQ!LdO<<NYOOQO7+)l7+)lO%3[Q!LdO7+'gO%5dQbO1G3|O%5nQ7^O7+%|O%5{Q7^O,59jO%7xQ7^O,5<UO%9uQ7^O,5<WO%;rQ7^O,5<fO%=bQ7^O7+'WO%=oQ7^O7+'XO%=|QWO,5;xOOQO7+&{7+&{O%>RQ#tO<<KfOOQO1G4U1G4UO%>cQWO1G4UO%>nQWO1G4UO%>|QWO7+*yO%>|QWO7+*yOITQWO1G4WO%?UQ`O1G4WO%?`QWO7+*zOOQO7+'o7+'oO5iQ!LYO7+'oOOQO7+'n7+'nO$,[QWO7+'pO%?hQ`O7+'pOOQO7+'t7+'tO5iQ!LYO7+'nO$,[QWO7+'oO%?oQWO7+'pOITQWO7+'pO#5TQWO7+'oO%?tQ#tO<<MzOOQ!LS7+$r7+$rO%@OQ`O,5>oOOQO-E<R-E<RO#IWQWOANASOOQQANASANASOITQWOANASO%@YQ!LbO7+'rOOQQAN=eAN=eO5qQWO1G4aOOQO1G4a1G4aO%@gQWO1G4aO%@lQWO7++RO%@lQWO7++RO5iQ!LYOANAoO%@tQWOANAoOOQQANAoANAoO%@yQWOANASO%ARQ`OANASOOQQANAZANAZOOQQANA[ANA[O%A]QWO,5>qOOQO-E<T-E<TO%AhQ7^O1G5dO#5YQWO,5=^O5_QWO,5=^O!,rQpO,5=^OOQO-E<V-E<VOOQQ1G2w1G2wO$:lQ!LrO,5:oO!?{Q&jO,5=^O%ArQ&jO,5=^O%BTQ&jO,5:oOOQQ<<K|<<K|OITQWO<<K|O%.mQWO<<K|O%B_QWO<<K|O%BgQ`O<<K|O){QYO<<K|OITQWO<<K|OOQQ<<LP<<LPO5iQ!LYO<<LPO#5YQWO<<LPO5_QWO<<LPO%BqQ&jO1G4`O%ByQWO7++POOQQAN=[AN=[O5iQ!LYOAN=[OOQQ<<Nn<<NnOOQQ<<No<<NoOOQQ<<LX<<LXO%CRQWO<<LXO%CWQYO<<LXO%C_QWO<<NnO%CdQWO<<NoOOQQ1G3c1G3cOOQQANBWANBWO:^QWOANBWO%CiQ7^O<<ImOOQO<<Ho<<HoOOQO7+%u7+%uO%0}Q!LdO7+%uO){QYO7+%uOOQO7+%o7+%oO:^QWO7+%oO!,rQpO7+%oO%CsQ!LYO7+%uO!?{Q&jO7+%oO%DOQ!LYO7+%uO%D^Q&jO7+%oO%DoQ!LYO7+%uOOQ!LSAN?RAN?RO%ETQ!LdO<<KfO%G]Q7^O<<JTO%GjQ7^O1G1yO%IYQ7^O1G2[O%KVQ7^O1G2^O%MSQ7^O<<JsO%MaQ7^O<<IhOOQO1G1d1G1dOOQO7+)p7+)pO%MnQWO7+)pO%MyQWO<<NeO%NRQ`O7+)rOOQO<<KZ<<KZO5iQ!LYO<<K[O$,[QWO<<K[OOQO<<KY<<KYO5iQ!LYO<<KZO%N]Q`O<<K[O$,[QWO<<KZOOQQG26nG26nO#IWQWOG26nOOQO7+){7+){O5qQWO7+){O%NdQWO<<NmOOQQG27ZG27ZO5iQ!LYOG27ZOITQWOG26nOLXQYO1G4]O%NlQWO7++OO5iQ!LYO1G2xO#5YQWO1G2xO5_QWO1G2xO!,rQpO1G2xO!?{Q&jO1G2xO%2iQ!LrO1G0ZO%NtQ&jO1G2xO%.mQWOANAhOOQQANAhANAhOITQWOANAhO& VQWOANAhO& _Q`OANAhOOQQANAkANAkO5iQ!LYOANAkO#5YQWOANAkOOQO'#Gv'#GvOOQO7+)z7+)zOOQQG22vG22vOOQQANAsANAsO& iQWOANAsOOQQANDYANDYOOQQANDZANDZO& nQYOG27rOOQO<<Ia<<IaO%0}Q!LdO<<IaOOQO<<IZ<<IZO:^QWO<<IZO){QYO<<IaO!,rQpO<<IZO&%lQ!LYO<<IaO!?{Q&jO<<IZO&%wQ!LYO<<IaO&&VQ7^O7+'gOOQO<<M[<<M[OOQOAN@vAN@vO5iQ!LYOAN@vOOQOAN@uAN@uO$,[QWOAN@vO5iQ!LYOAN@uOOQQLD,YLD,YOOQO<<Mg<<MgOOQQLD,uLD,uO#IWQWOLD,YO&'uQ7^O7+)wOOQO7+(d7+(dO5iQ!LYO7+(dO#5YQWO7+(dO5_QWO7+(dO!,rQpO7+(dO!?{Q&jO7+(dOOQQG27SG27SO%.mQWOG27SOITQWOG27SOOQQG27VG27VO5iQ!LYOG27VOOQQG27_G27_O:^QWOLD-^OOQOAN>{AN>{OOQOAN>uAN>uO%0}Q!LdOAN>{O:^QWOAN>uO){QYOAN>{O!,rQpOAN>uO&(PQ!LYOAN>{O&([Q7^O<<KfOOQOG26bG26bO5iQ!LYOG26bOOQOG26aG26aOOQQ!$( t!$( tOOQO<<LO<<LOO5iQ!LYO<<LOO#5YQWO<<LOO5_QWO<<LOO!,rQpO<<LOOOQQLD,nLD,nO%.mQWOLD,nOOQQLD,qLD,qOOQQ!$(!x!$(!xOOQOG24gG24gOOQOG24aG24aO%0}Q!LdOG24gO:^QWOG24aO){QYOG24gOOQOLD+|LD+|OOQOANAjANAjO5iQ!LYOANAjO#5YQWOANAjO5_QWOANAjOOQQ!$(!Y!$(!YOOQOLD*RLD*ROOQOLD){LD){O%0}Q!LdOLD*ROOQOG27UG27UO5iQ!LYOG27UO#5YQWOG27UOOQO!$'Mm!$'MmOOQOLD,pLD,pO5iQ!LYOLD,pOOQO!$(![!$(![OLXQYO'#DrO&)zQbO'#IrOLXQYO'#DjO&*RQ!LdO'#ChO&*lQbO'#ChO&*|QYO,5:vOLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO,5;ROLXQYO'#H}O&,|QWO,5<TO&.`QWO,5;ROLXQYO,5;fO!(aQWO'#DOO!(aQWO'#DOOITQWO'#FjO&-UQWO'#FjOITQWO'#FlO&-UQWO'#FlOITQWO'#FzO&-UQWO'#FzOLXQYO,5?kO&*|QYO1G0bO&.gQ7^O'#ChOLXQYO1G1lOITQWO,5<pO&-UQWO,5<pOITQWO,5<rO&-UQWO,5<rOITQWO,5<_O&-UQWO,5<_O&*|QYO1G1mOLXQYO7+&iOITQWO1G1{O&-UQWO1G1{O&*|QYO7+'XO&*|QYO7+%|OITQWO7+'zO&-UQWO7+'zO&.qQWO'#E[O&.vQWO'#E[O&/OQWO'#EzO&/TQWO'#EgO&/YQWO'#JPO&/eQWO'#I}O&/pQWO,5:vO&/uQ#tO,5<QO&/|QWO'#FsO&0RQWO'#FsO&0WQWO,5<RO&0`QWO,5:vO&0hQ7^O1G0}O&0oQWO,5<aO&0tQWO,5<aO&0yQWO1G1mO&1OQWO1G0bO&1TQ#tO1G2`O&1[Q#tO1G2`O4QQWO'#FhO5_QWO'#FgOBwQWO'#EZOLXQYO,5;cO!(pQWO'#FuO!(pQWO'#FuOJdQWO,5<tOJdQWO,5<t",
    stateData:
      "&2X~O'WOS'XOSTOSUOS~OPTOQTOXyO]cO_hObnOcmOhcOjTOkcOlcOqTOsTOxRO{cO|cO}cO!TSO!_kO!dUO!gTO!hTO!iTO!jTO!kTO!nlO#dsO#tpO#x^O%PqO%RtO%TrO%UrO%XuO%ZvO%^wO%_wO%axO%nzO%t{O%v|O%x}O%z!OO%}!PO&T!QO&X!RO&Z!SO&]!TO&_!UO&a!VO'ZPO'dQO'mYO'zaO~OP[XZ[X_[Xj[Xu[Xv[Xx[X!R[X!a[X!b[X!d[X!j[X!{[X#WdX#[[X#][X#^[X#_[X#`[X#a[X#b[X#c[X#e[X#g[X#i[X#j[X#o[X'U[X'd[X'n[X'u[X'v[X~O!]$lX~P$zOR!WO'S!XO'T!ZO~OPTOQTO]cOb!kOc!jOhcOjTOkcOlcOqTOsTOxRO{cO|cO}cO!T!bO!_kO!dUO!gTO!hTO!iTO!jTO!kTO!n!iO#t!lO#x^O'Z![O'dQO'mYO'zaO~O!Q!`O!R!]O!O'hP!O'rP~P'dO!S!mO~P`OPTOQTO]cOb!kOc!jOhcOjTOkcOlcOqTOsTOxRO{cO|cO}cO!T!bO!_kO!dUO!gTO!hTO!iTO!jTO!kTO!n!iO#t!lO#x^O'Z9YO'dQO'mYO'zaO~OPTOQTO]cOb!kOc!jOhcOjTOkcOlcOqTOsTOxRO{cO|cO}cO!T!bO!_kO!dUO!gTO!hTO!iTO!jTO!kTO!n!iO#t!lO#x^O'dQO'mYO'zaO~O!Q!rO#U!uO#V!rO'Z9ZO!c'oP~P+{O#W!vO~O!]!wO#W!vO~OP#^OZ#dOj#ROu!{Ov!{Ox!|O!R#bO!a#TO!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO#a#TO#b#TO#c#TO#e#UO#g#WO#i#YO#j#ZO'dQO'n#[O'u!}O'v#OO~O_'fX'U'fX!c'fX!O'fX!T'fX%Q'fX!]'fX~P.jO!{#eO#o#eOP'gXZ'gX_'gXj'gXu'gXv'gXx'gX!R'gX!a'gX!b'gX!d'gX!j'gX#['gX#]'gX#^'gX#_'gX#`'gX#a'gX#b'gX#e'gX#g'gX#i'gX#j'gX'd'gX'n'gX'u'gX'v'gX~O#c'gX'U'gX!O'gX!c'gXn'gX!T'gX%Q'gX!]'gX~P0zO!{#eO~O#z#fO$R#jO~O!T#kO#x^O$U#lO$W#nO~O]#qOh$OOj#rOk#qOl#qOq$POs$QOx#xO!T#yO!_$VO!d#vO#V$WO#t$TO$_$RO$a$SO$d$UO'Z#pO'd#sO'_'aP~O!d$XO~O!]$ZO~O_$[O'U$[O~O'Z$`O~O!d$XO'Z$`O'[$bO'`$cO~Oc$iO!d$XO'Z$`O~O#c#TO~O]$rOu$nO!T$kO!d$mO%R$qO'Z$`O'[$bO^(SP~O!n$sO~Ox$tO!T$uO'Z$`O~Ox$tO!T$uO%Z$yO'Z$`O~O'Z$zO~O#dsO%RtO%TrO%UrO%XuO%ZvO%^wO%_wO~Ob%TOc%SO!n%QO%P%RO%c%PO~P7uOb%WOcmO!T%VO!nlO#dsO%PqO%TrO%UrO%XuO%ZvO%^wO%_wO%axO~O`%ZO!{%^O%R%XO'[$bO~P8tO!d%_O!g%cO~O!d%dO~O!TSO~O_$[O'R%lO'U$[O~O_$[O'R%oO'U$[O~O_$[O'R%qO'U$[O~OR!WO'S!XO'T%uO~OP[XZ[Xj[Xu[Xv[Xx[X!R[X!RdX!a[X!b[X!d[X!j[X!{[X!{dX#WdX#[[X#][X#^[X#_[X#`[X#a[X#b[X#c[X#e[X#g[X#i[X#j[X#o[X'd[X'n[X'u[X'v[X~O!O[X!OdX~P;aO!Q%wO!O&gX!O&lX!R&gX!R&lX~P'dO!R%yO!O'hX~OP#^OZ#dOj#ROu!{Ov!{Ox!|O!R%yO!a#TO!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO#a#TO#b#TO#c#TO#e#UO#g#WO#i#YO#j#ZO'dQO'n#[O'u!}O'v#OO~O!O'hX~P>^O!O&OO~Ox&RO!W&]O!X&UO!Y&UO'[$bO~O]&SOk&SO!Q&VO'e&PO!S'iP!S'tP~P@aO!O'qX!R'qX!]'qX!c'qX'n'qX~O!{'qX#W#PX!S'qX~PAYO!{&^O!O'sX!R'sX~O!R&_O!O'rX~O!O&bO~O!{#eO~PAYOS&fO!T&cO!o&eO'Z$`O~Oc&kO!d$XO'Z$`O~Ou$nO!d$mO~O!S&lO~P`Ou!{Ov!{Ox!|O!b!yO!d!zO'dQOP!faZ!faj!fa!R!fa!a!fa!j!fa#[!fa#]!fa#^!fa#_!fa#`!fa#a!fa#b!fa#c!fa#e!fa#g!fa#i!fa#j!fa'n!fa'u!fa'v!fa~O_!fa'U!fa!O!fa!c!fan!fa!T!fa%Q!fa!]!fa~PCcO!c&mO~O!]!wO!{&oO'n&nO!R'pX_'pX'U'pX~O!c'pX~PE{O!R&sO!c'oX~O!c&uO~Ox$tO!T$uO#V&vO'Z$`O~OPTOQTO]cOb!kOc!jOhcOjTOkcOlcOqTOsTOxRO{cO|cO}cO!TSO!_kO!dUO!gTO!hTO!iTO!jTO!kTO!n!iO#t!lO#x^O'Z9YO'dQO'mYO'zaO~O]#qOh$OOj#rOk#qOl#qOq$POs9lOx#xO!T#yO!_:oO!d#vO#V9rO#t$TO$_9nO$a9pO$d$UO'Z&zO'd#sO~O#W&|O~O]#qOh$OOj#rOk#qOl#qOq$POs$QOx#xO!T#yO!_$VO!d#vO#V$WO#t$TO$_$RO$a$SO$d$UO'Z&zO'd#sO~O'_'kP~PJdO!Q'QO!c'lP~P){O'e'SO'mYO~OP9VOQ9VO]cOb:mOc!jOhcOj9VOkcOlcOq9VOs9VOxRO{cO|cO}cO!T!bO!_9XO!dUO!g9VO!h9VO!i9VO!j9VO!k9VO!n!iO#t!lO#x^O'Z'bO'dQO'mYO'z:kO~O!d!zO~O!R#bO_$]a'U$]a!c$]a!O$]a!T$]a%Q$]a!]$]a~O#d'iO~PITO!]'kO!T'wX#w'wX#z'wX$R'wX~Ou'lO~P! POu'lO!T'wX#w'wX#z'wX$R'wX~O!T'nO#w'rO#z'mO$R'sO~O!Q'vO~PLXO#z#fO$R'yO~Ou$eXx$eX!b$eX'n$eX'u$eX'v$eX~OSfX!RfX!{fX'_fX'_$eX~P!!iOk'{O~OR'|O'S'}O'T(PO~Ou(ROx(SO'n#[O'u(UO'v(WO~O'_(QO~P!#rO'_(ZO~O]#qOh$OOj#rOk#qOl#qOq$POs9lOx#xO!T#yO!_:oO!d#vO#V9rO#t$TO$_9nO$a9pO$d$UO'd#sO~O!Q(_O'Z([O!c'{P~P!$aO#W(aO~O!Q(eO'Z(bO!O'|P~P!$aO_(nOj(sOx(kO!W(qO!X(jO!Y(jO!d(hO!x(rO$w(mO'[$bO'e(gO~O!S(pO~P!&XO!b!yOu'cXx'cX'n'cX'u'cX'v'cX!R'cX!{'cX~O'_'cX#m'cX~P!'TOS(vO!{(uO!R'bX'_'bX~O!R(wO'_'aX~O'Z(yO~O!d)OO~O'Z&zO~O!d(hO~Ox$tO!Q!rO!T$uO#U!uO#V!rO'Z$`O!c'oP~O!]!wO#W)SO~OP#^OZ#dOj#ROu!{Ov!{Ox!|O!a#TO!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO#a#TO#b#TO#c#TO#e#UO#g#WO#i#YO#j#ZO'dQO'n#[O'u!}O'v#OO~O_!^a!R!^a'U!^a!O!^a!c!^an!^a!T!^a%Q!^a!]!^a~P!)fOS)[O!T&cO!o)ZO%Q)YO'`$cO~O'Z$zO'_'aP~O!])_O!T'^X_'^X'U'^X~O!d$XO'`$cO~O!d$XO'Z$`O'`$cO~O!]!wO#W&|O~O])jO%R)kO'Z)gO!S(TP~O!R)lO^(SX~O'e'SO~OZ)pO~O^)qO~O!T$kO'Z$`O'[$bO^(SP~Ox$tO!Q)vO!R&_O!T$uO'Z$`O!O'rP~O]&YOk&YO!Q)wO'e'SO!S'tP~O!R)xO_(PX'U(PX~O!{)|O'`$cO~OS*PO!T#yO'`$cO~O!T*RO~Ou*TO!TSO~O!n*YO~Oc*_O~O'Z(yO!S(RP~Oc$iO~O%RtO'Z$zO~P8tOZ*eO^*dO~OPTOQTO]cObnOcmOhcOjTOkcOlcOqTOsTOxRO{cO|cO}cO!_kO!dUO!gTO!hTO!iTO!jTO!kTO!nlO#x^O%PqO'dQO'mYO'zaO~O!T!bO#t!lO'Z9YO~P!1RO^*dO_$[O'U$[O~O_*iO#d*kO%T*kO%U*kO~P){O!d%_O~O%t*pO~O!T*rO~O&U*uO&V*tOP&SaQ&SaX&Sa]&Sa_&Sab&Sac&Sah&Saj&Sak&Sal&Saq&Sas&Sax&Sa{&Sa|&Sa}&Sa!T&Sa!_&Sa!d&Sa!g&Sa!h&Sa!i&Sa!j&Sa!k&Sa!n&Sa#d&Sa#t&Sa#x&Sa%P&Sa%R&Sa%T&Sa%U&Sa%X&Sa%Z&Sa%^&Sa%_&Sa%a&Sa%n&Sa%t&Sa%v&Sa%x&Sa%z&Sa%}&Sa&T&Sa&X&Sa&Z&Sa&]&Sa&_&Sa&a&Sa'Q&Sa'Z&Sa'd&Sa'm&Sa'z&Sa!S&Sa%{&Sa`&Sa&Q&Sa~O'Z*xO~On*{O~O!O&ga!R&ga~P!)fO!Q+PO!O&gX!R&gX~P){O!R%yO!O'ha~O!O'ha~P>^O!R&_O!O'ra~O!RwX!R!ZX!SwX!S!ZX!]wX!]!ZX!d!ZX!{wX'`!ZX~O!]+UO!{+TO!R#TX!R'jX!S#TX!S'jX!]'jX!d'jX'`'jX~O!]+WO!d$XO'`$cO!R!VX!S!VX~O]&QOk&QOx&RO'e(gO~OP9VOQ9VO]cOb:mOc!jOhcOj9VOkcOlcOq9VOs9VOxRO{cO|cO}cO!T!bO!_9XO!dUO!g9VO!h9VO!i9VO!j9VO!k9VO!n!iO#t!lO#x^O'dQO'mYO'z:kO~O'Z9vO~P!;^O!R+[O!S'iX~O!S+^O~O!]+UO!{+TO!R#TX!S#TX~O!R+_O!S'tX~O!S+aO~O]&QOk&QOx&RO'[$bO'e(gO~O!X+bO!Y+bO~P!>[Ox$tO!Q+dO!T$uO'Z$`O!O&lX!R&lX~O_+hO!W+kO!X+gO!Y+gO!r+oO!s+mO!t+nO!u+lO!x+pO'[$bO'e(gO'm+eO~O!S+jO~P!?]OS+uO!T&cO!o+tO~O!{+{O!R'pa!c'pa_'pa'U'pa~O!]!wO~P!@gO!R&sO!c'oa~Ox$tO!Q,OO!T$uO#U,QO#V,OO'Z$`O!R&nX!c&nX~O_#Oi!R#Oi'U#Oi!O#Oi!c#Oin#Oi!T#Oi%Q#Oi!]#Oi~P!)fO#W!za!R!za!c!za!{!za!T!za_!za'U!za!O!za~P!#rO#W'cXP'cXZ'cX_'cXj'cXv'cX!a'cX!d'cX!j'cX#['cX#]'cX#^'cX#_'cX#`'cX#a'cX#b'cX#c'cX#e'cX#g'cX#i'cX#j'cX'U'cX'd'cX!c'cX!O'cX!T'cXn'cX%Q'cX!]'cX~P!'TO!R,ZO'_'kX~P!#rO'_,]O~O!R,^O!c'lX~P!)fO!c,aO~O!O,bO~OP#^Ou!{Ov!{Ox!|O!b!yO!d!zO!j#^O'dQOZ#Zi_#Zij#Zi!R#Zi!a#Zi#]#Zi#^#Zi#_#Zi#`#Zi#a#Zi#b#Zi#c#Zi#e#Zi#g#Zi#i#Zi#j#Zi'U#Zi'n#Zi'u#Zi'v#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~O#[#Zi~P!EtO#[#PO~P!EtOP#^Ou!{Ov!{Ox!|O!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO'dQOZ#Zi_#Zi!R#Zi!a#Zi#`#Zi#a#Zi#b#Zi#c#Zi#e#Zi#g#Zi#i#Zi#j#Zi'U#Zi'n#Zi'u#Zi'v#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~Oj#Zi~P!H`Oj#RO~P!H`OP#^Oj#ROu!{Ov!{Ox!|O!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO'dQO_#Zi!R#Zi#e#Zi#g#Zi#i#Zi#j#Zi'U#Zi'n#Zi'u#Zi'v#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~OZ#Zi!a#Zi#a#Zi#b#Zi#c#Zi~P!JzOZ#dO!a#TO#a#TO#b#TO#c#TO~P!JzOP#^OZ#dOj#ROu!{Ov!{Ox!|O!a#TO!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO#a#TO#b#TO#c#TO#e#UO'dQO_#Zi!R#Zi#g#Zi#i#Zi#j#Zi'U#Zi'n#Zi'v#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~O'u#Zi~P!MrO'u!}O~P!MrOP#^OZ#dOj#ROu!{Ov!{Ox!|O!a#TO!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO#a#TO#b#TO#c#TO#e#UO#g#WO'dQO'u!}O_#Zi!R#Zi#i#Zi#j#Zi'U#Zi'n#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~O'v#Zi~P#!^O'v#OO~P#!^OP#^OZ#dOj#ROu!{Ov!{Ox!|O!a#TO!b!yO!d!zO!j#^O#[#PO#]#QO#^#QO#_#QO#`#SO#a#TO#b#TO#c#TO#e#UO#g#WO#i#YO'dQO'u!}O'v#OO~O_#Zi!R#Zi#j#Zi'U#Zi'n#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~P#$xOP[XZ[Xj[Xu[Xv[Xx[X!a[X!b[X!d[X!j[X!{[X#WdX#[[X#][X#^[X#_[X#`[X#a[X#b[X#c[X#e[X#g[X#i[X#j[X#o[X'd[X'n[X'u[X'v[X!R[X!S[X~O#m[X~P#']OP#^OZ9jOj9_Ou!{Ov!{Ox!|O!a9aO!b!yO!d!zO!j#^O#[9]O#]9^O#^9^O#_9^O#`9`O#a9aO#b9aO#c9aO#e9bO#g9dO#i9fO#j9gO'dQO'n#[O'u!}O'v#OO~O#m,dO~P#)gOP'gXZ'gXj'gXu'gXv'gXx'gX!a'gX!b'gX!d'gX!j'gX#['gX#]'gX#^'gX#_'gX#`'gX#a'gX#b'gX#e'gX#g'gX#i'gX#j'gX'd'gX'n'gX'u'gX'v'gX!R'gX~O!{9kO#o9kO#c'gX#m'gX!S'gX~P#+bO_&qa!R&qa'U&qa!c&qan&qa!O&qa!T&qa%Q&qa!]&qa~P!)fOP#ZiZ#Zi_#Zij#Ziv#Zi!R#Zi!a#Zi!b#Zi!d#Zi!j#Zi#[#Zi#]#Zi#^#Zi#_#Zi#`#Zi#a#Zi#b#Zi#c#Zi#e#Zi#g#Zi#i#Zi#j#Zi'U#Zi'd#Zi!O#Zi!c#Zin#Zi!T#Zi%Q#Zi!]#Zi~P!#rO_#ni!R#ni'U#ni!O#ni!c#nin#ni!T#ni%Q#ni!]#ni~P!)fO#z,fO~O#z,gO~O!]'kO!{,hO!T$OX#w$OX#z$OX$R$OX~O!Q,iO~O!T'nO#w,kO#z'mO$R,lO~O!R9hO!S'fX~P#)gO!S,mO~O$R,oO~OR'|O'S'}O'T,rO~O],uOk,uO!O,vO~O!RdX!]dX!cdX!c$eX'ndX~P!!iO!c,|O~P!#rO!R,}O!]!wO'n&nO!c'{X~O!c-SO~O!O$eX!R$eX!]$lX~P!!iO!R-UO!O'|X~P!#rO!]-WO~O!O-YO~O!Q(_O'Z$`O!c'{P~Oj-^O!]!wO!d$XO'`$cO'n&nO~O!])_O~O!S-dO~P!&XO!X-eO!Y-eO'[$bO'e(gO~Ox-gO'e(gO~O!x-hO~O'Z$zO!R&vX'_&vX~O!R(wO'_'aa~Ou-mOv-mOx-nO'nra'ura'vra!Rra!{ra~O'_ra#mra~P#6fOu(ROx(SO'n$^a'u$^a'v$^a!R$^a!{$^a~O'_$^a#m$^a~P#7[Ou(ROx(SO'n$`a'u$`a'v$`a!R$`a!{$`a~O'_$`a#m$`a~P#7}O]-oO~O#W-pO~O'_$na!R$na#m$na!{$na~P!#rO#W-sO~OS-|O!T&cO!o-{O%Q-zO~O'_-}O~O]#qOj#rOk#qOl#qOq$POs9lOx#xO!T#yO!_:oO!d#vO#V9rO#t$TO$_9nO$a9pO$d$UO'd#sO~Oh.PO'Z.OO~P#9tO!])_O!T'^a_'^a'U'^a~O#W.VO~OZ[X!RdX!SdX~O!R.WO!S(TX~O!S.YO~OZ.ZO~O].]O'Z)gO~O!T$kO'Z$`O^'OX!R'OX~O!R)lO^(Sa~O!c.`O~P!)fO].bO~OZ.cO~O^.dO~OS-|O!T&cO!o-{O%Q-zO'`$cO~O!R)xO_(Pa'U(Pa~O!{.jO~OS.mO!T#yO~O'e'SO!S(QP~OS.wO!T.sO!o.vO%Q.uO'`$cO~OZ/RO!R/PO!S(RX~O!S/SO~O^/UO_$[O'U$[O~O]/VO~O]/WO'Z(yO~O#c/XO%r/YO~P0zO!{#eO#c/XO%r/YO~O_/ZO~P){O_/]O~O%{/aOP%yiQ%yiX%yi]%yi_%yib%yic%yih%yij%yik%yil%yiq%yis%yix%yi{%yi|%yi}%yi!T%yi!_%yi!d%yi!g%yi!h%yi!i%yi!j%yi!k%yi!n%yi#d%yi#t%yi#x%yi%P%yi%R%yi%T%yi%U%yi%X%yi%Z%yi%^%yi%_%yi%a%yi%n%yi%t%yi%v%yi%x%yi%z%yi%}%yi&T%yi&X%yi&Z%yi&]%yi&_%yi&a%yi'Q%yi'Z%yi'd%yi'm%yi'z%yi!S%yi`%yi&Q%yi~O`/gO!S/eO&Q/fO~P`O!TSO!d/jO~O!R#bOn$]a~O!O&gi!R&gi~P!)fO!R%yO!O'hi~O!R&_O!O'ri~O!O/nO~O!R!Va!S!Va~P#)gO]&QOk&QO!Q/tO'e(gO!R&hX!S&hX~P@aO!R+[O!S'ia~O]&YOk&YO!Q)wO'e'SO!R&mX!S&mX~O!R+_O!S'ta~O!O'si!R'si~P!)fO_$[O!]!wO!d$XO!j0OO!{/|O'U$[O'`$cO'n&nO~O!S0RO~P!?]O!X0SO!Y0SO'[$bO'e(gO'm+eO~O!W0TO~P#GyO!TSO!W0TO!u0VO!x0WO~P#GyO!W0TO!s0YO!t0YO!u0VO!x0WO~P#GyO!T&cO~O!T&cO~P!#rO!R'pi!c'pi_'pi'U'pi~P!)fO!{0cO!R'pi!c'pi_'pi'U'pi~O!R&sO!c'oi~Ox$tO!T$uO#V0eO'Z$`O~O#WraPraZra_rajra!ara!bra!dra!jra#[ra#]ra#^ra#_ra#`ra#ara#bra#cra#era#gra#ira#jra'Ura'dra!cra!Ora!Tranra%Qra!]ra~P#6fO#W$^aP$^aZ$^a_$^aj$^av$^a!a$^a!b$^a!d$^a!j$^a#[$^a#]$^a#^$^a#_$^a#`$^a#a$^a#b$^a#c$^a#e$^a#g$^a#i$^a#j$^a'U$^a'd$^a!c$^a!O$^a!T$^an$^a%Q$^a!]$^a~P#7[O#W$`aP$`aZ$`a_$`aj$`av$`a!a$`a!b$`a!d$`a!j$`a#[$`a#]$`a#^$`a#_$`a#`$`a#a$`a#b$`a#c$`a#e$`a#g$`a#i$`a#j$`a'U$`a'd$`a!c$`a!O$`a!T$`an$`a%Q$`a!]$`a~P#7}O#W$naP$naZ$na_$naj$nav$na!R$na!a$na!b$na!d$na!j$na#[$na#]$na#^$na#_$na#`$na#a$na#b$na#c$na#e$na#g$na#i$na#j$na'U$na'd$na!c$na!O$na!T$na!{$nan$na%Q$na!]$na~P!#rO_#Oq!R#Oq'U#Oq!O#Oq!c#Oqn#Oq!T#Oq%Q#Oq!]#Oq~P!)fO!R&iX'_&iX~PJdO!R,ZO'_'ka~O!Q0mO!R&jX!c&jX~P){O!R,^O!c'la~O!R,^O!c'la~P!)fO#m!fa!S!fa~PCcO#m!^a!R!^a!S!^a~P#)gO!T1QO#x^O$P1RO~O!S1VO~On1WO~P!#rO_$Yq!R$Yq'U$Yq!O$Yq!c$Yqn$Yq!T$Yq%Q$Yq!]$Yq~P!)fO!O1XO~O],uOk,uO~Ou(ROx(SO'v(WO'n$xi'u$xi!R$xi!{$xi~O'_$xi#m$xi~P$(jOu(ROx(SO'n$zi'u$zi'v$zi!R$zi!{$zi~O'_$zi#m$zi~P$)]O#m1YO~P!#rO!Q1[O'Z$`O!R&rX!c&rX~O!R,}O!c'{a~O!R,}O!]!wO!c'{a~O!R,}O!]!wO'n&nO!c'{a~O'_$gi!R$gi#m$gi!{$gi~P!#rO!Q1cO'Z(bO!O&tX!R&tX~P!$aO!R-UO!O'|a~O!R-UO!O'|a~P!#rO!]!wO~O!]!wO#c1mO~Oj1qO!]!wO'n&nO~O!R'bi'_'bi~P!#rO!{1tO!R'bi'_'bi~P!#rO!c1wO~O_$Zq!R$Zq'U$Zq!O$Zq!c$Zqn$Zq!T$Zq%Q$Zq!]$Zq~P!)fO!R1{O!T'}X~P!#rO!T&cO%Q2OO~O!T&cO%Q2OO~P!#rO!T$eX$u[X_$eX'U$eX~P!!iO$u2SOugXxgX!TgX'ngX'ugX'vgX_gX'UgX~O$u2SO~O]2YO%R2ZO'Z)gO!R&}X!S&}X~O!R.WO!S(Ta~OZ2_O~O^2`O~O]2cO~OS2eO!T&cO!o2dO%Q2OO~O_$[O'U$[O~P!#rO!T#yO~P!#rO!R2jO!{2lO!S(QX~O!S2mO~Ox(kO!W2vO!X2oO!Y2oO!r2uO!s2tO!t2tO!x2sO'[$bO'e(gO'm+eO~O!S2rO~P$1nOS2}O!T.sO!o2|O%Q2{O~OS2}O!T.sO!o2|O%Q2{O'`$cO~O'Z(yO!R&|X!S&|X~O!R/PO!S(Ra~O]3XO'e3WO~O]3YO~O^3[O~O!c3_O~P){O_3aO~O_3aO~P){O#c3cO%r3dO~PE{O`/gO!S3hO&Q/fO~P`O!]3jO~O&V3kOP&SqQ&SqX&Sq]&Sq_&Sqb&Sqc&Sqh&Sqj&Sqk&Sql&Sqq&Sqs&Sqx&Sq{&Sq|&Sq}&Sq!T&Sq!_&Sq!d&Sq!g&Sq!h&Sq!i&Sq!j&Sq!k&Sq!n&Sq#d&Sq#t&Sq#x&Sq%P&Sq%R&Sq%T&Sq%U&Sq%X&Sq%Z&Sq%^&Sq%_&Sq%a&Sq%n&Sq%t&Sq%v&Sq%x&Sq%z&Sq%}&Sq&T&Sq&X&Sq&Z&Sq&]&Sq&_&Sq&a&Sq'Q&Sq'Z&Sq'd&Sq'm&Sq'z&Sq!S&Sq%{&Sq`&Sq&Q&Sq~O!R#Ti!S#Ti~P#)gO!{3mO!R#Ti!S#Ti~O!R!Vi!S!Vi~P#)gO_$[O!{3tO'U$[O~O_$[O!]!wO!{3tO'U$[O~O!X3xO!Y3xO'[$bO'e(gO'm+eO~O_$[O!]!wO!d$XO!j3yO!{3tO'U$[O'`$cO'n&nO~O!W3zO~P$:ZO!W3zO!u3}O!x4OO~P$:ZO_$[O!]!wO!j3yO!{3tO'U$[O'n&nO~O!R'pq!c'pq_'pq'U'pq~P!)fO!R&sO!c'oq~O#W$xiP$xiZ$xi_$xij$xiv$xi!a$xi!b$xi!d$xi!j$xi#[$xi#]$xi#^$xi#_$xi#`$xi#a$xi#b$xi#c$xi#e$xi#g$xi#i$xi#j$xi'U$xi'd$xi!c$xi!O$xi!T$xin$xi%Q$xi!]$xi~P$(jO#W$ziP$ziZ$zi_$zij$ziv$zi!a$zi!b$zi!d$zi!j$zi#[$zi#]$zi#^$zi#_$zi#`$zi#a$zi#b$zi#c$zi#e$zi#g$zi#i$zi#j$zi'U$zi'd$zi!c$zi!O$zi!T$zin$zi%Q$zi!]$zi~P$)]O#W$giP$giZ$gi_$gij$giv$gi!R$gi!a$gi!b$gi!d$gi!j$gi#[$gi#]$gi#^$gi#_$gi#`$gi#a$gi#b$gi#c$gi#e$gi#g$gi#i$gi#j$gi'U$gi'd$gi!c$gi!O$gi!T$gi!{$gin$gi%Q$gi!]$gi~P!#rO!R&ia'_&ia~P!#rO!R&ja!c&ja~P!)fO!R,^O!c'li~O#m#Oi!R#Oi!S#Oi~P#)gOP#^Ou!{Ov!{Ox!|O!b!yO!d!zO!j#^O'dQOZ#Zij#Zi!a#Zi#]#Zi#^#Zi#_#Zi#`#Zi#a#Zi#b#Zi#c#Zi#e#Zi#g#Zi#i#Zi#j#Zi#m#Zi'n#Zi'u#Zi'v#Zi!R#Zi!S#Zi~O#[#Zi~P$CqO#[9]O~P$CqOP#^Ou!{Ov!{Ox!|O!b!yO!d!zO!j#^O#[9]O#]9^O#^9^O#_9^O'dQOZ#Zi!a#Zi#`#Zi#a#Zi#b#Zi#c#Zi#e#Zi#g#Zi#i#Zi#j#Zi#m#Zi'n#Zi'u#Zi'v#Zi!R#Zi!S#Zi~Oj#Zi~P$EyOj9_O~P$EyOP#^Oj9_Ou!{Ov!{Ox!|O!b!yO!d!zO!j#^O#[9]O#]9^O#^9^O#_9^O#`9`O'dQO#e#Zi#g#Zi#i#Zi#j#Zi#m#Zi'n#Zi'u#Zi'v#Zi!R#Zi!S#Zi~OZ#Zi!a#Zi#a#Zi#b#Zi#c#Zi~P$HROZ9jO!a9aO#a9aO#b9aO#c9aO~P$HROP#^OZ9jOj9_Ou!{Ov!{Ox!|O!a9aO!b!yO!d!zO!j#^O#[9]O#]9^O#^9^O#_9^O#`9`O#a9aO#b9aO#c9aO#e9bO'dQO#g#Zi#i#Zi#j#Zi#m#Zi'n#Zi'v#Zi!R#Zi!S#Zi~O'u#Zi~P$JgO'u!}O~P$JgOP#^OZ9jOj9_Ou!{Ov!{Ox!|O!a9aO!b!yO!d!zO!j#^O#[9]O#]9^O#^9^O#_9^O#`9`O#a9aO#b9aO#c9aO#e9bO#g9dO'dQO'u!}O#i#Zi#j#Zi#m#Zi'n#Zi!R#Zi!S#Zi~O'v#Zi~P$LoO'v#OO~P$LoOP#^OZ9jOj9_Ou!{Ov!{Ox!|O!a9aO!b!yO!d!zO!j#^O#[9]O#]9^O#^9^O#_9^O#`9`O#a9aO#b9aO#c9aO#e9bO#g9dO#i9fO'dQO'u!}O'v#OO~O#j#Zi#m#Zi'n#Zi!R#Zi!S#Zi~P$NwO_#ky!R#ky'U#ky!O#ky!c#kyn#ky!T#ky%Q#ky!]#ky~P!)fOP#ZiZ#Zij#Ziv#Zi!a#Zi!b#Zi!d#Zi!j#Zi#[#Zi#]#Zi#^#Zi#_#Zi#`#Zi#a#Zi#b#Zi#c#Zi#e#Zi#g#Zi#i#Zi#j#Zi#m#Zi'd#Zi!R#Zi!S#Zi~P!#rO!b!yOP'cXZ'cXj'cXu'cXv'cXx'cX!a'cX!d'cX!j'cX#['cX#]'cX#^'cX#_'cX#`'cX#a'cX#b'cX#c'cX#e'cX#g'cX#i'cX#j'cX#m'cX'd'cX'n'cX'u'cX'v'cX!R'cX!S'cX~O#m#ni!R#ni!S#ni~P#)gO!S4`O~O!R&qa!S&qa~P#)gO!]!wO'n&nO!R&ra!c&ra~O!R,}O!c'{i~O!R,}O!]!wO!c'{i~O!O&ta!R&ta~P!#rO!]4gO~O!R-UO!O'|i~P!#rO!R-UO!O'|i~O!O4mO~O!]!wO#c4sO~Oj4tO!]!wO'n&nO~O!O4vO~O'_$iq!R$iq#m$iq!{$iq~P!#rO_$Zy!R$Zy'U$Zy!O$Zy!c$Zyn$Zy!T$Zy%Q$Zy!]$Zy~P!)fO!R1{O!T'}a~O!T&cO%Q4{O~O!T&cO%Q4{O~P!#rO_#Oy!R#Oy'U#Oy!O#Oy!c#Oyn#Oy!T#Oy%Q#Oy!]#Oy~P!)fOZ5OO~O]5QO'Z)gO~O!R.WO!S(Ti~O]5TO~O^5UO~O'e'SO!R&yX!S&yX~O!R2jO!S(Qa~O!S5cO~P$1nOx-gO'e(gO'm+eO~O!W5fO!X5eO!Y5eO!x0WO'[$bO'e(gO'm+eO~O!s5gO!t5gO~P%-iO!X5eO!Y5eO'[$bO'e(gO'm+eO~O!T.sO~O!T.sO%Q5iO~O!T.sO%Q5iO~P!#rOS5nO!T.sO!o5mO%Q5iO~OZ5sO!R&|a!S&|a~O!R/PO!S(Ri~O]5vO~O!c5wO~O!c5xO~O!c5yO~O!c5yO~P){O_5{O~O!]6OO~O!c6QO~O!R'si!S'si~P#)gO_$[O'U$[O~P!)fO_$[O!{6VO'U$[O~O_$[O!]!wO!{6VO'U$[O~O!X6[O!Y6[O'[$bO'e(gO'm+eO~O_$[O!]!wO!j6]O!{6VO'U$[O'n&nO~O!d$XO'`$cO~P%2TO!W6^O~P%1rO!R'py!c'py_'py'U'py~P!)fO#W$iqP$iqZ$iq_$iqj$iqv$iq!R$iq!a$iq!b$iq!d$iq!j$iq#[$iq#]$iq#^$iq#_$iq#`$iq#a$iq#b$iq#c$iq#e$iq#g$iq#i$iq#j$iq'U$iq'd$iq!c$iq!O$iq!T$iq!{$iqn$iq%Q$iq!]$iq~P!#rO!R&ji!c&ji~P!)fO#m#Oq!R#Oq!S#Oq~P#)gOu-mOv-mOx-nOPraZrajra!ara!bra!dra!jra#[ra#]ra#^ra#_ra#`ra#ara#bra#cra#era#gra#ira#jra#mra'dra'nra'ura'vra!Rra!Sra~Ou(ROx(SOP$^aZ$^aj$^av$^a!a$^a!b$^a!d$^a!j$^a#[$^a#]$^a#^$^a#_$^a#`$^a#a$^a#b$^a#c$^a#e$^a#g$^a#i$^a#j$^a#m$^a'd$^a'n$^a'u$^a'v$^a!R$^a!S$^a~Ou(ROx(SOP$`aZ$`aj$`av$`a!a$`a!b$`a!d$`a!j$`a#[$`a#]$`a#^$`a#_$`a#`$`a#a$`a#b$`a#c$`a#e$`a#g$`a#i$`a#j$`a#m$`a'd$`a'n$`a'u$`a'v$`a!R$`a!S$`a~OP$naZ$naj$nav$na!a$na!b$na!d$na!j$na#[$na#]$na#^$na#_$na#`$na#a$na#b$na#c$na#e$na#g$na#i$na#j$na#m$na'd$na!R$na!S$na~P!#rO#m$Yq!R$Yq!S$Yq~P#)gO#m$Zq!R$Zq!S$Zq~P#)gO!S6hO~O'_$|y!R$|y#m$|y!{$|y~P!#rO!]!wO!R&ri!c&ri~O!]!wO'n&nO!R&ri!c&ri~O!R,}O!c'{q~O!O&ti!R&ti~P!#rO!R-UO!O'|q~O!O6oO~P!#rO!O6oO~O!R'by'_'by~P!#rO!R&wa!T&wa~P!#rO!T$tq_$tq'U$tq~P!#rOZ6wO~O!R.WO!S(Tq~O]6zO~O!T&cO%Q6{O~O!T&cO%Q6{O~P!#rO!{6|O!R&ya!S&ya~O!R2jO!S(Qi~P#)gO!X7SO!Y7SO'[$bO'e(gO'm+eO~O!W7UO!x4OO~P%ArO!T.sO%Q7XO~O!T.sO%Q7XO~P!#rO]7`O'e7_O~O!R/PO!S(Rq~O!c7bO~O!c7bO~P){O!c7dO~O!c7eO~O!R#Ty!S#Ty~P#)gO_$[O!{7kO'U$[O~O_$[O!]!wO!{7kO'U$[O~O!X7nO!Y7nO'[$bO'e(gO'm+eO~O_$[O!]!wO!j7oO!{7kO'U$[O'n&nO~O#W$|yP$|yZ$|y_$|yj$|yv$|y!R$|y!a$|y!b$|y!d$|y!j$|y#[$|y#]$|y#^$|y#_$|y#`$|y#a$|y#b$|y#c$|y#e$|y#g$|y#i$|y#j$|y'U$|y'd$|y!c$|y!O$|y!T$|y!{$|yn$|y%Q$|y!]$|y~P!#rO#m#ky!R#ky!S#ky~P#)gOP$giZ$gij$giv$gi!a$gi!b$gi!d$gi!j$gi#[$gi#]$gi#^$gi#_$gi#`$gi#a$gi#b$gi#c$gi#e$gi#g$gi#i$gi#j$gi#m$gi'd$gi!R$gi!S$gi~P!#rOu(ROx(SO'v(WOP$xiZ$xij$xiv$xi!a$xi!b$xi!d$xi!j$xi#[$xi#]$xi#^$xi#_$xi#`$xi#a$xi#b$xi#c$xi#e$xi#g$xi#i$xi#j$xi#m$xi'd$xi'n$xi'u$xi!R$xi!S$xi~Ou(ROx(SOP$ziZ$zij$ziv$zi!a$zi!b$zi!d$zi!j$zi#[$zi#]$zi#^$zi#_$zi#`$zi#a$zi#b$zi#c$zi#e$zi#g$zi#i$zi#j$zi#m$zi'd$zi'n$zi'u$zi'v$zi!R$zi!S$zi~O#m$Zy!R$Zy!S$Zy~P#)gO#m#Oy!R#Oy!S#Oy~P#)gO!]!wO!R&rq!c&rq~O!R,}O!c'{y~O!O&tq!R&tq~P!#rO!O7uO~P!#rO!R.WO!S(Ty~O!R2jO!S(Qq~O!X8RO!Y8RO'[$bO'e(gO'm+eO~O!T.sO%Q8UO~O!T.sO%Q8UO~P!#rO!c8XO~O&V8YOP&S!ZQ&S!ZX&S!Z]&S!Z_&S!Zb&S!Zc&S!Zh&S!Zj&S!Zk&S!Zl&S!Zq&S!Zs&S!Zx&S!Z{&S!Z|&S!Z}&S!Z!T&S!Z!_&S!Z!d&S!Z!g&S!Z!h&S!Z!i&S!Z!j&S!Z!k&S!Z!n&S!Z#d&S!Z#t&S!Z#x&S!Z%P&S!Z%R&S!Z%T&S!Z%U&S!Z%X&S!Z%Z&S!Z%^&S!Z%_&S!Z%a&S!Z%n&S!Z%t&S!Z%v&S!Z%x&S!Z%z&S!Z%}&S!Z&T&S!Z&X&S!Z&Z&S!Z&]&S!Z&_&S!Z&a&S!Z'Q&S!Z'Z&S!Z'd&S!Z'm&S!Z'z&S!Z!S&S!Z%{&S!Z`&S!Z&Q&S!Z~O_$[O!{8_O'U$[O~O_$[O!]!wO!{8_O'U$[O~OP$iqZ$iqj$iqv$iq!a$iq!b$iq!d$iq!j$iq#[$iq#]$iq#^$iq#_$iq#`$iq#a$iq#b$iq#c$iq#e$iq#g$iq#i$iq#j$iq#m$iq'd$iq!R$iq!S$iq~P!#rO!R&yq!S&yq~P#)gO_$[O!{8tO'U$[O~OP$|yZ$|yj$|yv$|y!a$|y!b$|y!d$|y!j$|y#[$|y#]$|y#^$|y#_$|y#`$|y#a$|y#b$|y#c$|y#e$|y#g$|y#i$|y#j$|y#m$|y'd$|y!R$|y!S$|y~P!#rOn'fX~P.jOn[X!O[X!c[X%r[X!T[X%Q[X!][X~P$zO!]dX!c[X!cdX'ndX~P;aOP9VOQ9VO]cOb:mOc!jOhcOj9VOkcOlcOq9VOs9VOxRO{cO|cO}cO!TSO!_9XO!dUO!g9VO!h9VO!i9VO!j9VO!k9VO!n!iO#t!lO#x^O'Z'bO'dQO'mYO'z:kO~O!R9hO!S$]a~O]#qOh$OOj#rOk#qOl#qOq$POs9mOx#xO!T#yO!_:pO!d#vO#V9sO#t$TO$_9oO$a9qO$d$UO'Z&zO'd#sO~O#d'iO~P&-UO!S[X!SdX~P;aO#W9[O~O!]!wO#W9[O~O!{9kO~O#c9aO~O!{9tO!R'sX!S'sX~O!{9kO!R'qX!S'qX~O#W9uO~O'_9wO~P!#rO#W9|O~O#W9}O~O!]!wO#W:OO~O!]!wO#W9uO~O#m:PO~P#)gO#W:QO~O#W:RO~O#W:SO~O#W:TO~O#m:UO~P!#rO#m:VO~P!#rO#x~!b!r!t!u#U#V'z$_$a$d$u%P%Q%R%X%Z%^%_%a%c~UT#x'z#]}'W'X#z'W'Z'e~",
    goto:
      "#Ed(XPPPPPPPP(YP(jP*^PPPP-uPP.[3n5b5uP5uPPP5uP7c5uP5uP7gPP7lP8Q<cPPPP<gPPPP<g?XPPP?_AjP<gPDTPPPPE{<gPPPPPGt<gPPJuKrPPPPKvM`PMhNiPKr<g<g!#p!&k!+^!+^!.mPPP!.t!1j<gPPPPPPPPPP!4aP!5rPP<g!7PP<gP<g<g<g<gP<g!9dPP!<]P!?Q!?Y!?^!?^P!<YP!?b!?bP!BVP!BZ<g<g!Ba!ET5uP5uP5u5uP!FW5u5u!HO5u!JQ5u!Kr5u5u!L`!NY!NY!N^!NY!NfP!NYP5u# b5u#!l5u5u-uPPP##yPP#$c#$cP#$cP#$x#$cPP#%OP#$uP#$u#%bMd#$u#&P#&V#&Y(Y#&](YP#&d#&d#&dP(YP(YP(YP(YPP(YP#&j#&mP#&m(YPPP(YP(YP(YP(YP(YP(Y(Y#&q#&{#'R#'X#'g#'m#'s#'}#(T#(d#(j#(x#)O#)U#)d#)y#+]#+k#+q#+w#+}#,T#,_#,e#,k#,u#-X#-_PPPPPPPP#-ePP#.X#2VPP#3m#3t#3|PP#8Y#:m#@i#@l#@o#@z#@}PP#AQ#AU#As#Bj#Bn#CSPP#CW#C^#CbP#Ce#Ci#Cl#D[#Dr#Dw#Dz#D}#ET#EW#E[#E`mhOSj}!n$Z%b%e%f%h*m*r/a/dQ$hmQ$opQ%YyS&U!b+[Q&j!jS(j#y(oQ)e$iQ)r$qQ*^%SQ+b&]S+g&c+iQ+y&kQ-e(qQ/O*_Y0S+k+l+m+n+oS2o.s2qU3x0T0V0YU5e2t2u2vS6[3z3}S7S5f5gQ7n6^R8R7U$p[ORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%b%d%e%f%h%l%w%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+P+t+{,^,d-n-s-{.V.v/X/Y/Z/]/a/d/f/|0c0m2d2|3a3c3d3t5m5{6V7k8_8t!j'd#]#k&V'v+T+W,i/t1Q2l3m6|9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nQ(z$QQ)j$kQ*`%VQ*g%_Q,T9lQ.Q)_Q.])kQ/W*eQ2Y.WQ3U/PQ4X9mR5Q2ZpeOSjy}!n$Z%X%b%e%f%h*m*r/a/dR*b%Z&WVOSTjkn}!S!W!k!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k$Z$m%Z%^%_%b%d%e%f%h%l%y&R&^&e&o&|'Q'v(Q)S)Z*i*m*r+P+T+W+t+{,^,d,i-n-s-{.V.v/X/Y/Z/]/a/d/f/t/|0c0m1Q2d2l2|3a3c3d3m3t5m5{6V6|7k8_8t9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:m:n[!cRU!]!`%w&VQ$alQ$gmS$lp$qv$vrs!r!u$X$t&_&s&v)v)w)x*k+U+d,O,Q/j0eQ%OwQ&g!iQ&i!jS(^#v(hS)d$h$iQ)h$kQ)u$sQ*X%QQ*]%SS+x&j&kQ-R(_Q.U)eQ.[)kQ.^)lQ.a)pQ.y*YS.}*^*_Q0a+yQ1Z,}Q2X.WQ2].ZQ2b.cQ3T/OQ4d1[Q5P2ZQ5S2_Q6v5OR7x6w!Y$em!j$g$h$i&T&i&j&k(i)d)e+X+f+x+y-_.U/y0P0U0a1p3w3|6Y7l8`Q)]$aQ)}${Q*Q$|Q*[%SQ.e)uQ.x*XU.|*]*^*_Q3O.yS3S.}/OQ5`2nQ5r3TS7Q5a5dS8P7R7TQ8j8QR8y8kW#|a$c(w:kS${t%XQ$|uQ$}vR){$y$V#{a!w!y#d#v#x$R$S$W&f'|(V(X(Y(a(e(u(v)Y)[)_)|*P+u,Z-U-W-p-z-|.j.m.u.w1Y1c1m1t1{2O2S2e2{2}4g4s4{5i5n6{7X8U9j9n9o9p9q9r9s9x9y9z9{9|9}:Q:R:U:V:k:q:rT'}#s(OV({$Q9l9mU&Y!b$u+_Q'T!{Q)o$nQ.n*RQ1u-mR5[2j&^cORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&V&^&e&o&|'Q'v(Q)S)Z*i*m*r+P+T+W+t+{,^,d,i-n-s-{.V.v/X/Y/Z/]/a/d/f/t/|0c0m1Q2d2l2|3a3c3d3m3t5m5{6V6|7k8_8t9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:n$]#aZ!_!o$_%v%|&x'P'V'W'X'Y'Z'[']'^'_'`'a'c'f'j't)n*}+Y+c+z,Y,`,c,e,s-q/o/r0b0l0p0q0r0s0t0u0v0w0x0y0z0{0|1P1U1y2V3o3r4S4V4W4]4^5^6R6U6b6f6g7h7{8]8r8}9W:dT!XQ!Y&_cORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&V&^&e&o&|'Q'v(Q)S)Z*i*m*r+P+T+W+t+{,^,d,i-n-s-{.V.v/X/Y/Z/]/a/d/f/t/|0c0m1Q2d2l2|3a3c3d3m3t5m5{6V6|7k8_8t9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nQ&W!bR/u+[Y&Q!b&U&]+[+bS(i#y(oS+f&c+iS-_(j(qQ-`(kQ-f(rQ.p*TU0P+g+k+lU0U+m+n+oS0Z+p2sQ1p-eQ1r-gQ1s-hS2n.s2qU3w0S0T0VQ3{0WQ3|0YS5a2o2vS5d2t2uU6Y3x3z3}Q6_4OS7R5e5fQ7T5gS7l6[6^S8Q7S7UQ8`7nR8k8RlhOSj}!n$Z%b%e%f%h*m*r/a/dQ%j!QS&w!v9[Q)b$fQ*V%OQ*W%PQ+v&hS,X&|9uS-r)S:OQ.S)cQ.r*UQ/h*tQ/i*uQ/q+VQ0X+mQ0_+wS1z-s:SQ2T.TS2W.V:TQ3n/sQ3q/zQ4Q0`Q4}2UQ6P3kQ6S3pQ6W3vQ6`4RQ7f6QQ7i6XQ8[7jQ8o8YQ8q8^R8|8s$W#`Z!_!o%v%|&x'P'V'W'X'Y'Z'[']'^'_'`'a'c'f'j't)n*}+Y+c+z,Y,`,c,s-q/o/r0b0l0p0q0r0s0t0u0v0w0x0y0z0{0|1P1U1y2V3o3r4S4V4W4]4^5^6R6U6b6f6g7h7{8]8r8}9W:dU(t#z&{1OT)W$_,e$W#_Z!_!o%v%|&x'P'V'W'X'Y'Z'[']'^'_'`'a'c'f'j't)n*}+Y+c+z,Y,`,c,s-q/o/r0b0l0p0q0r0s0t0u0v0w0x0y0z0{0|1P1U1y2V3o3r4S4V4W4]4^5^6R6U6b6f6g7h7{8]8r8}9W:dQ'e#`S)V$_,eR-t)W&^cORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&V&^&e&o&|'Q'v(Q)S)Z*i*m*r+P+T+W+t+{,^,d,i-n-s-{.V.v/X/Y/Z/]/a/d/f/t/|0c0m1Q2d2l2|3a3c3d3m3t5m5{6V6|7k8_8t9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nQ%e{Q%f|Q%h!OQ%i!PR/`*pQ&d!iQ)X$aQ+s&gS-y)])uS0[+q+rW1}-v-w-x.eS4P0]0^U4z2P2Q2RU6t4y5W5XQ7w6uR8f7zT+h&c+iS+f&c+iU0P+g+k+lU0U+m+n+oS0Z+p2sS2n.s2qU3w0S0T0VQ3{0WQ3|0YS5a2o2vS5d2t2uU6Y3x3z3}Q6_4OS7R5e5fQ7T5gS7l6[6^S8Q7S7UQ8`7nR8k8RS+h&c+iT2p.s2qS&q!q/^Q-Q(^Q-](iS0O+f2nQ1`-RS1j-^-fU3y0U0Z5dQ4c1ZS4q1q1sU6]3{3|7TQ6j4dQ6s4tR7o6_Q!xXS&p!q/^Q)T$YQ)`$dQ)f$jQ+|&qQ-P(^Q-[(iQ-a(lQ.R)aQ.z*ZS/}+f2nS1_-Q-RS1i-]-fQ1l-`Q1o-bQ3Q.{W3u0O0U0Z5dQ4b1ZQ4f1`S4k1j1sQ4r1rQ5p3RW6Z3y3{3|7TS6i4c4dQ6n4mQ6q4qQ7O5_Q7]5qS7m6]6_Q7q6jQ7s6oQ7v6sQ7}7PQ8W7^Q8a7oQ8d7uQ8h8OQ8w8iQ9P8xQ9T9QQ:^:XQ:g:bR:h:c$rWORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+P+t+{,^,d-n-s-{.V.v/X/Y/Z/]/a/d/f/|0c0m2d2|3a3c3d3t5m5{6V7k8_8tS!xn!k!j:W#]#k&V'v+T+W,i/t1Q2l3m6|9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nR:^:m$rXORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+P+t+{,^,d-n-s-{.V.v/X/Y/Z/]/a/d/f/|0c0m2d2|3a3c3d3t5m5{6V7k8_8tQ$Yb!Y$dm!j$g$h$i&T&i&j&k(i)d)e+X+f+x+y-_.U/y0P0U0a1p3w3|6Y7l8`S$jn!kQ)a$eQ*Z%SW.{*[*]*^*_U3R.|.}/OQ5_2nS5q3S3TU7P5`5a5dQ7^5rU8O7Q7R7TS8i8P8QS8x8j8kQ9Q8y!j:X#]#k&V'v+T+W,i/t1Q2l3m6|9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nQ:b:lR:c:m$f]OSTjk}!S!W!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%b%d%e%f%h%l%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+P+t+{,^,d-n-s-{.V.v/X/Y/Z/]/a/d/f/|0c0m2d2|3a3c3d3t5m5{6V7k8_8tY!hRU!]!`%wv$vrs!r!u$X$t&_&s&v)v)w)x*k+U+d,O,Q/j0eQ*h%_!h:Y#]#k'v+T+W,i/t1Q2l3m6|9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nR:]&VS&Z!b$uR/w+_$p[ORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%b%d%e%f%h%l%w%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+P+t+{,^,d-n-s-{.V.v/X/Y/Z/]/a/d/f/|0c0m2d2|3a3c3d3t5m5{6V7k8_8t!j'd#]#k&V'v+T+W,i/t1Q2l3m6|9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nR*g%_$roORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+P+t+{,^,d-n-s-{.V.v/X/Y/Z/]/a/d/f/|0c0m2d2|3a3c3d3t5m5{6V7k8_8tQ'T!{!k:Z#]#k&V'v+T+W,i/t1Q2l3m6|9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:n!h#VZ!_$_%v%|&x'P'^'_'`'a'f'j)n*}+c+z,Y,`,s-q0b0l0|1y2V3r4S4V6U7h8]8r8}9W!R9c'c't+Y,e/o/r0p0x0y0z0{1P1U3o4W4]4^5^6R6b6f6g7{:d!d#XZ!_$_%v%|&x'P'`'a'f'j)n*}+c+z,Y,`,s-q0b0l0|1y2V3r4S4V6U7h8]8r8}9W}9e'c't+Y,e/o/r0p0z0{1P1U3o4W4]4^5^6R6b6f6g7{:d!`#]Z!_$_%v%|&x'P'f'j)n*}+c+z,Y,`,s-q0b0l0|1y2V3r4S4V6U7h8]8r8}9Wl(Y#t&})R,{-T-i-j0j1x4a4u:_:i:jx:n'c't+Y,e/o/r0p1P1U3o4W4]4^5^6R6b6f6g7{:d!`:q&y'h(](c+r,W,p-X-u-x.i.k0^0i1a1e2R2g2i2y4U4h4n4w4|5X5l6a6l6r7ZZ:r0}4[6c7p8b&^cORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&V&^&e&o&|'Q'v(Q)S)Z*i*m*r+P+T+W+t+{,^,d,i-n-s-{.V.v/X/Y/Z/]/a/d/f/t/|0c0m1Q2d2l2|3a3c3d3m3t5m5{6V6|7k8_8t9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nS#l`#mR1R,h&e_ORSTU`jk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k#m$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&V&^&e&o&|'Q'v(Q)S)Z*i*m*r+P+T+W+t+{,^,d,h,i-n-s-{.V.v/X/Y/Z/]/a/d/f/t/|0c0m1Q2d2l2|3a3c3d3m3t5m5{6V6|7k8_8t9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nS#g^#nT'm#i'qT#h^#nT'o#i'q&e`ORSTU`jk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#]#b#e#k#m$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&V&^&e&o&|'Q'v(Q)S)Z*i*m*r+P+T+W+t+{,^,d,h,i-n-s-{.V.v/X/Y/Z/]/a/d/f/t/|0c0m1Q2d2l2|3a3c3d3m3t5m5{6V6|7k8_8t9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:nT#l`#mQ#o`R'x#m$rbORSTUjk}!S!W!]!`!n!v!z!|#P#Q#R#S#T#U#V#W#X#Y#Z#b#e$Z$m%Z%^%_%b%d%e%f%h%l%w%y&R&^&e&o&|'Q(Q)S)Z*i*m*r+P+t+{,^,d-n-s-{.V.v/X/Y/Z/]/a/d/f/|0c0m2d2|3a3c3d3t5m5{6V7k8_8t!k:l#]#k&V'v+T+W,i/t1Q2l3m6|9V9X9[9]9^9_9`9a9b9c9d9e9f9g9h9k9t9u9w:O:P:S:T:n#RdOSUj}!S!W!n!|#k$Z%Z%^%_%b%d%e%f%h%l&R&e'v)Z*i*m*r+t,i-n-{.v/X/Y/Z/]/a/d/f1Q2d2|3a3c3d5m5{t#za!y$R$S$W(V(X(Y(a(u(v,Z-p1Y1t:k:q:r!|&{!w#d#v#x&f'|(e)Y)[)_)|*P+u-U-W-z-|.j.m.u.w1c1m1{2O2S2e2{2}4g4s4{5i5n6{7X8U9n9p9r9x9z9|:Q:UQ)P$UQ,t(Rc1O9j9o9q9s9y9{9}:R:Vt#wa!y$R$S$W(V(X(Y(a(u(v,Z-p1Y1t:k:q:rS(l#y(oQ)Q$VQ-b(m!|:`!w#d#v#x&f'|(e)Y)[)_)|*P+u-U-W-z-|.j.m.u.w1c1m1{2O2S2e2{2}4g4s4{5i5n6{7X8U9n9p9r9x9z9|:Q:Ub:a9j9o9q9s9y9{9}:R:VQ:e:oR:f:pt#za!y$R$S$W(V(X(Y(a(u(v,Z-p1Y1t:k:q:r!|&{!w#d#v#x&f'|(e)Y)[)_)|*P+u-U-W-z-|.j.m.u.w1c1m1{2O2S2e2{2}4g4s4{5i5n6{7X8U9n9p9r9x9z9|:Q:Uc1O9j9o9q9s9y9{9}:R:VlfOSj}!n$Z%b%e%f%h*m*r/a/dQ(d#xQ*y%oQ*z%qR1b-U$U#{a!w!y#d#v#x$R$S$W&f'|(V(X(Y(a(e(u(v)Y)[)_)|*P+u,Z-U-W-p-z-|.j.m.u.w1Y1c1m1t1{2O2S2e2{2}4g4s4{5i5n6{7X8U9j9n9o9p9q9r9s9x9y9z9{9|9}:Q:R:U:V:k:q:rQ*O$|Q.l*QQ2h.kR5Z2iT(n#y(oS(n#y(oT2p.s2qQ)`$dQ-a(lQ.R)aQ.z*ZQ3Q.{Q5p3RQ7O5_Q7]5qQ7}7PQ8W7^Q8h8OQ8w8iQ9P8xR9T9Ql(V#t&})R,{-T-i-j0j1x4a4u:_:i:j!`9x&y'h(](c+r,W,p-X-u-x.i.k0^0i1a1e2R2g2i2y4U4h4n4w4|5X5l6a6l6r7ZZ9y0}4[6c7p8bn(X#t&})R,y,{-T-i-j0j1x4a4u:_:i:j!b9z&y'h(](c+r,W,p-X-u-x.i.k0^0g0i1a1e2R2g2i2y4U4h4n4w4|5X5l6a6l6r7Z]9{0}4[6c6d7p8bpeOSjy}!n$Z%X%b%e%f%h*m*r/a/dQ%UxR*i%_peOSjy}!n$Z%X%b%e%f%h*m*r/a/dR%UxQ*S$}R.h){qeOSjy}!n$Z%X%b%e%f%h*m*r/a/dQ.t*XS2z.x.yW5h2w2x2y3OU7W5j5k5lU8S7V7Y7ZQ8l8TR8z8mQ%]yR*c%XR3X/RR7`5sS$lp$qR.^)lQ%bzR*m%cR*s%iT/b*r/dQjOQ!nST$^j!nQ(O#sR,q(OQ!YQR%t!YQ!^RU%z!^%{+QQ%{!_R+Q%|Q+]&WR/v+]Q,[&}R0k,[Q,_'PS0n,_0oR0o,`Q+i&cR0Q+iS!eR$tU&`!e&a+RQ&a!fR+R%}Q+`&ZR/x+`Q&t!sQ+}&rU,R&t+}0fR0f,SQ'q#iR,j'qQ#m`R'w#mQ#cZU'g#c*|9iQ*|9WR9i'tQ-O(^W1]-O1^4e6kU1^-P-Q-RS4e1_1`R6k4f#q(T#t&y&}'h(](c(|(})R+r,U,V,W,p,y,z,{-T-X-i-j-u-x.i.k0^0g0h0i0j0}1a1e1x2R2g2i2y4U4Y4Z4[4a4h4n4u4w4|5X5l6a6c6d6e6l6r7Z7p8b:_:i:jQ-V(cU1d-V1f4iQ1f-XR4i1eQ(o#yR-c(oQ(x#}R-l(xQ1|-uR4x1|Q)y$wR.g)yQ2k.nS5]2k6}R6}5^Q*U%OR.q*UQ2q.sR5b2qQ/Q*`S3V/Q5tR5t3XQ.X)hW2[.X2^5R6xQ2^.[Q5R2]R6x5SQ)m$lR._)mQ/d*rR3g/dWiOSj!nQ%g}Q)U$ZQ*l%bQ*n%eQ*o%fQ*q%hQ/_*mS/b*r/dR3f/aQ$]gQ%k!RQ%n!TQ%p!UQ%r!VQ)t$rQ)z$xQ*b%]Q*w%mS/T*c*fQ/k*vQ/l*yQ/m*zS/{+f2nQ1g-ZQ1h-[Q1n-aQ2a.bQ2f.iQ3P.zQ3Z/VQ3e/`Y3s/}0O0U0Z5dQ4j1iQ4l1kQ4o1oQ5V2cQ5Y2gQ5o3QQ5u3Y[6T3r3u3y3{3|7TQ6m4kQ6p4pQ6y5TQ7[5pQ7a5vW7g6U6Z6]6_Q7r6nQ7t6qQ7y6zQ7|7OQ8V7]U8Z7h7m7oQ8c7sQ8e7vQ8g7}Q8n8WS8p8]8aQ8u8dQ8v8hQ8{8rQ9O8wQ9R8}Q9S9PR9U9TQ$fmQ&h!jU)c$g$h$iQ+V&TU+w&i&j&kQ-Z(iS.T)d)eQ/s+XQ/z+fS0`+x+yQ1k-_Q2U.UQ3p/yS3v0P0UQ4R0aQ4p1pS6X3w3|Q7j6YQ8^7lR8s8`S#ua:kR)^$cU#}a$c:kR-k(wQ#taS&y!w)_Q&}!yQ'h#dQ(]#vQ(c#xQ(|$RQ(}$SQ)R$WQ+r&fQ,U9nQ,V9pQ,W9rQ,p'|Q,y(VQ,z(XQ,{(YQ-T(aQ-X(eQ-i(uQ-j(vd-u)Y-z.u2O2{4{5i6{7X8UQ-x)[Q.i)|Q.k*PQ0^+uQ0g9xQ0h9zQ0i9|Q0j,ZQ0}9jQ1a-UQ1e-WQ1x-pQ2R-|Q2g.jQ2i.mQ2y.wQ4U:QQ4Y9oQ4Z9qQ4[9sQ4a1YQ4h1cQ4n1mQ4u1tQ4w1{Q4|2SQ5X2eQ5l2}Q6a:UQ6c9}Q6d9yQ6e9{Q6l4gQ6r4sQ7Z5nQ7p:RQ8b:VQ:_:kQ:i:qR:j:rlgOSj}!n$Z%b%e%f%h*m*r/a/dS!pU%dQ%m!SQ%s!WQ'U!|Q'u#kS*f%Z%^Q*j%_Q*v%lQ+S&RQ+q&eQ,n'vQ-w)ZQ/[*iQ0]+tQ1T,iQ1v-nQ2Q-{Q2x.vQ3]/XQ3^/YQ3`/ZQ3b/]Q3i/fQ4_1QQ5W2dQ5k2|Q5z3aQ5|3cQ5}3dQ7Y5mR7c5{!vZOSUj}!S!n!|$Z%Z%^%_%b%d%e%f%h%l&R&e)Z*i*m*r+t-n-{.v/X/Y/Z/]/a/d/f2d2|3a3c3d5m5{Q!_RQ!oTQ$_kS%v!]%yQ%|!`Q&x!vQ'P!zQ'V#PQ'W#QQ'X#RQ'Y#SQ'Z#TQ'[#UQ']#VQ'^#WQ'_#XQ'`#YQ'a#ZQ'c#]Q'f#bQ'j#eW't#k'v,i1QQ)n$mS*}%w+PS+Y&V/tQ+c&^Q+z&oQ,Y&|Q,`'QQ,c9VQ,e9XQ,s(QQ-q)SQ/o+TQ/r+WQ0b+{Q0l,^Q0p9[Q0q9]Q0r9^Q0s9_Q0t9`Q0u9aQ0v9bQ0w9cQ0x9dQ0y9eQ0z9fQ0{9gQ0|,dQ1P9kQ1U9hQ1y-sQ2V.VQ3o9tQ3r/|Q4S0cQ4V0mQ4W9uQ4]9wQ4^:OQ5^2lQ6R3mQ6U3tQ6b:PQ6f:SQ6g:TQ7h6VQ7{6|Q8]7kQ8r8_Q8}8tQ9W!WR:d:nR!aRR&X!bS&T!b+[S+X&U&]R/y+bR'O!yR'R!zT!tU$XS!sU$XU$wrs*kS&r!r!uQ,P&sQ,S&vQ.f)xS0d,O,QR4T0e`!dR!]!`$t%w&_)v+dh!qUrs!r!u$X&s&v)x,O,Q0eQ/^*kQ/p+UQ3l/jT:[&V)wT!gR$tS!fR$tS%x!]&_S%}!`)vS+O%w+dT+Z&V)wT&[!b$uQ#i^R'z#nT'p#i'qR1S,hT(`#v(hR(f#xQ-v)YQ2P-zQ2w.uQ4y2OQ5j2{Q6u4{Q7V5iQ7z6{Q8T7XR8m8UlhOSj}!n$Z%b%e%f%h*m*r/a/dQ%[yR*b%XV$xrs*kR.o*RR*a%VQ$ppR)s$qR)i$kT%`z%cT%az%cT/c*r/d",
    nodeNames:
      '\u26A0 ArithOp ArithOp InterpolationStart extends LineComment BlockComment Script ExportDeclaration export Star as VariableName String from ; default FunctionDeclaration async function VariableDefinition TypeParamList TypeDefinition ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation VoidType void TypeofType typeof MemberExpression . ?. PropertyName [ TemplateString Interpolation null super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewExpression new TypeArgList CompareOp < ) ( ArgList UnaryExpression await yield delete LogicOp BitOp ParenthesizedExpression ClassExpression class extends ClassBody MethodDeclaration Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression PrivatePropertyName BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof in const CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXStartTag JSXSelfClosingTag JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast ArrowFunction TypeParamList SequenceExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature CallSignature TypePredicate is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody MethodDeclaration AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try catch finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement',
    maxTerm: 330,
    context: Gy,
    nodeProps: [
      [
        B.closedBy,
        3,
        'InterpolationEnd',
        40,
        ']',
        51,
        '}',
        66,
        ')',
        132,
        'JSXSelfCloseEndTag JSXEndTag',
        146,
        'JSXEndTag',
      ],
      [
        B.group,
        -26,
        8,
        15,
        17,
        58,
        184,
        188,
        191,
        192,
        194,
        197,
        200,
        211,
        213,
        219,
        221,
        223,
        225,
        228,
        234,
        238,
        240,
        242,
        244,
        246,
        248,
        249,
        'Statement',
        -30,
        12,
        13,
        24,
        27,
        28,
        41,
        43,
        44,
        45,
        47,
        52,
        60,
        68,
        74,
        75,
        91,
        92,
        101,
        103,
        119,
        122,
        124,
        125,
        126,
        127,
        129,
        130,
        148,
        149,
        151,
        'Expression',
        -22,
        23,
        25,
        29,
        32,
        34,
        152,
        154,
        156,
        157,
        159,
        160,
        161,
        163,
        164,
        165,
        167,
        168,
        169,
        178,
        180,
        182,
        183,
        'Type',
        -3,
        79,
        85,
        90,
        'ClassItem',
      ],
      [
        B.openedBy,
        30,
        'InterpolationStart',
        46,
        '[',
        50,
        '{',
        65,
        '(',
        131,
        'JSXStartTag',
        141,
        'JSXStartTag JSXStartCloseTag',
      ],
    ],
    skippedNodes: [0, 5, 6],
    repeatNodeCount: 28,
    tokenData:
      "!C}~R!`OX%TXY%cYZ'RZ[%c[]%T]^'R^p%Tpq%cqr'crs(kst0htu2`uv4pvw5ewx6cxy<yyz=Zz{=k{|>k|}?O}!O>k!O!P?`!P!QCl!Q!R!0[!R![!1q![!]!7s!]!^!8V!^!_!8g!_!`!9d!`!a!:[!a!b!<R!b!c%T!c!}2`!}#O!=d#O#P%T#P#Q!=t#Q#R!>U#R#S2`#S#T!>i#T#o2`#o#p!>y#p#q!?O#q#r!?f#r#s!?x#s$f%T$f$g%c$g#BY2`#BY#BZ!@Y#BZ$IS2`$IS$I_!@Y$I_$I|2`$I|$I}!Bq$I}$JO!Bq$JO$JT2`$JT$JU!@Y$JU$KV2`$KV$KW!@Y$KW&FU2`&FU&FV!@Y&FV?HT2`?HT?HU!@Y?HU~2`W%YR$UWO!^%T!_#o%T#p~%T,T%jg$UW'W+{OX%TXY%cYZ%TZ[%c[p%Tpq%cq!^%T!_#o%T#p$f%T$f$g%c$g#BY%T#BY#BZ%c#BZ$IS%T$IS$I_%c$I_$JT%T$JT$JU%c$JU$KV%T$KV$KW%c$KW&FU%T&FU&FV%c&FV?HT%T?HT?HU%c?HU~%T,T'YR$UW'X+{O!^%T!_#o%T#p~%T$T'jS$UW!j#{O!^%T!_!`'v!`#o%T#p~%T$O'}S#e#v$UWO!^%T!_!`(Z!`#o%T#p~%T$O(bR#e#v$UWO!^%T!_#o%T#p~%T'u(rZ$UW]!ROY(kYZ)eZr(krs*rs!^(k!^!_+U!_#O(k#O#P-b#P#o(k#o#p+U#p~(k&r)jV$UWOr)ers*Ps!^)e!^!_*a!_#o)e#o#p*a#p~)e&r*WR$P&j$UWO!^%T!_#o%T#p~%T&j*dROr*ars*ms~*a&j*rO$P&j'u*{R$P&j$UW]!RO!^%T!_#o%T#p~%T'm+ZV]!ROY+UYZ*aZr+Urs+ps#O+U#O#P+w#P~+U'm+wO$P&j]!R'm+zROr+Urs,Ts~+U'm,[U$P&j]!ROY,nZr,nrs-Vs#O,n#O#P-[#P~,n!R,sU]!ROY,nZr,nrs-Vs#O,n#O#P-[#P~,n!R-[O]!R!R-_PO~,n'u-gV$UWOr(krs-|s!^(k!^!_+U!_#o(k#o#p+U#p~(k'u.VZ$P&j$UW]!ROY.xYZ%TZr.xrs/rs!^.x!^!_,n!_#O.x#O#P0S#P#o.x#o#p,n#p~.x!Z/PZ$UW]!ROY.xYZ%TZr.xrs/rs!^.x!^!_,n!_#O.x#O#P0S#P#o.x#o#p,n#p~.x!Z/yR$UW]!RO!^%T!_#o%T#p~%T!Z0XT$UWO!^.x!^!_,n!_#o.x#o#p,n#p~.xy0mZ$UWOt%Ttu1`u!^%T!_!c%T!c!}1`!}#R%T#R#S1`#S#T%T#T#o1`#p$g%T$g~1`y1g]$UW'mqOt%Ttu1`u!Q%T!Q![1`![!^%T!_!c%T!c!}1`!}#R%T#R#S1`#S#T%T#T#o1`#p$g%T$g~1`&i2k_$UW#zS'Z%k'epOt%Ttu2`u}%T}!O3j!O!Q%T!Q![2`![!^%T!_!c%T!c!}2`!}#R%T#R#S2`#S#T%T#T#o2`#p$g%T$g~2`[3q_$UW#zSOt%Ttu3ju}%T}!O3j!O!Q%T!Q![3j![!^%T!_!c%T!c!}3j!}#R%T#R#S3j#S#T%T#T#o3j#p$g%T$g~3j$O4wS#^#v$UWO!^%T!_!`5T!`#o%T#p~%T$O5[R$UW#o#vO!^%T!_#o%T#p~%T%r5lU'v%j$UWOv%Tvw6Ow!^%T!_!`5T!`#o%T#p~%T$O6VS$UW#i#vO!^%T!_!`5T!`#o%T#p~%T'u6jZ$UW]!ROY6cYZ7]Zw6cwx*rx!^6c!^!_8T!_#O6c#O#P:T#P#o6c#o#p8T#p~6c&r7bV$UWOw7]wx*Px!^7]!^!_7w!_#o7]#o#p7w#p~7]&j7zROw7wwx*mx~7w'm8YV]!ROY8TYZ7wZw8Twx+px#O8T#O#P8o#P~8T'm8rROw8Twx8{x~8T'm9SU$P&j]!ROY9fZw9fwx-Vx#O9f#O#P9}#P~9f!R9kU]!ROY9fZw9fwx-Vx#O9f#O#P9}#P~9f!R:QPO~9f'u:YV$UWOw6cwx:ox!^6c!^!_8T!_#o6c#o#p8T#p~6c'u:xZ$P&j$UW]!ROY;kYZ%TZw;kwx/rx!^;k!^!_9f!_#O;k#O#P<e#P#o;k#o#p9f#p~;k!Z;rZ$UW]!ROY;kYZ%TZw;kwx/rx!^;k!^!_9f!_#O;k#O#P<e#P#o;k#o#p9f#p~;k!Z<jT$UWO!^;k!^!_9f!_#o;k#o#p9f#p~;k%V=QR!d$}$UWO!^%T!_#o%T#p~%TZ=bR!cR$UWO!^%T!_#o%T#p~%T%R=tU'[!R#_#v$UWOz%Tz{>W{!^%T!_!`5T!`#o%T#p~%T$O>_S#[#v$UWO!^%T!_!`5T!`#o%T#p~%T$u>rSj$m$UWO!^%T!_!`5T!`#o%T#p~%T&i?VR!R&a$UWO!^%T!_#o%T#p~%T&i?gVu%n$UWO!O%T!O!P?|!P!Q%T!Q![@r![!^%T!_#o%T#p~%Ty@RT$UWO!O%T!O!P@b!P!^%T!_#o%T#p~%Ty@iR!Qq$UWO!^%T!_#o%T#p~%Ty@yZ$UWkqO!Q%T!Q![@r![!^%T!_!g%T!g!hAl!h#R%T#R#S@r#S#X%T#X#YAl#Y#o%T#p~%TyAqZ$UWO{%T{|Bd|}%T}!OBd!O!Q%T!Q![CO![!^%T!_#R%T#R#SCO#S#o%T#p~%TyBiV$UWO!Q%T!Q![CO![!^%T!_#R%T#R#SCO#S#o%T#p~%TyCVV$UWkqO!Q%T!Q![CO![!^%T!_#R%T#R#SCO#S#o%T#p~%T,TCs`$UW#]#vOYDuYZ%TZzDuz{Jl{!PDu!P!Q!-e!Q!^Du!^!_Fx!_!`!.^!`!a!/]!a!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~DuXD|[$UW}POYDuYZ%TZ!PDu!P!QEr!Q!^Du!^!_Fx!_!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~DuXEy_$UW}PO!^%T!_#Z%T#Z#[Er#[#]%T#]#^Er#^#a%T#a#bEr#b#g%T#g#hEr#h#i%T#i#jEr#j#m%T#m#nEr#n#o%T#p~%TPF}V}POYFxZ!PFx!P!QGd!Q!}Fx!}#OG{#O#PHh#P~FxPGiU}P#Z#[Gd#]#^Gd#a#bGd#g#hGd#i#jGd#m#nGdPHOTOYG{Z#OG{#O#PH_#P#QFx#Q~G{PHbQOYG{Z~G{PHkQOYFxZ~FxXHvY$UWOYHqYZ%TZ!^Hq!^!_G{!_#OHq#O#PIf#P#QDu#Q#oHq#o#pG{#p~HqXIkV$UWOYHqYZ%TZ!^Hq!^!_G{!_#oHq#o#pG{#p~HqXJVV$UWOYDuYZ%TZ!^Du!^!_Fx!_#oDu#o#pFx#p~Du,TJs^$UW}POYJlYZKoZzJlz{NQ{!PJl!P!Q!,R!Q!^Jl!^!_!!]!_!}Jl!}#O!'|#O#P!+a#P#oJl#o#p!!]#p~Jl,TKtV$UWOzKoz{LZ{!^Ko!^!_M]!_#oKo#o#pM]#p~Ko,TL`X$UWOzKoz{LZ{!PKo!P!QL{!Q!^Ko!^!_M]!_#oKo#o#pM]#p~Ko,TMSR$UWU+{O!^%T!_#o%T#p~%T+{M`ROzM]z{Mi{~M]+{MlTOzM]z{Mi{!PM]!P!QM{!Q~M]+{NQOU+{,TNX^$UW}POYJlYZKoZzJlz{NQ{!PJl!P!Q! T!Q!^Jl!^!_!!]!_!}Jl!}#O!'|#O#P!+a#P#oJl#o#p!!]#p~Jl,T! ^_$UWU+{}PO!^%T!_#Z%T#Z#[Er#[#]%T#]#^Er#^#a%T#a#bEr#b#g%T#g#hEr#h#i%T#i#jEr#j#m%T#m#nEr#n#o%T#p~%T+{!!bY}POY!!]YZM]Zz!!]z{!#Q{!P!!]!P!Q!&x!Q!}!!]!}#O!$`#O#P!&f#P~!!]+{!#VY}POY!!]YZM]Zz!!]z{!#Q{!P!!]!P!Q!#u!Q!}!!]!}#O!$`#O#P!&f#P~!!]+{!#|UU+{}P#Z#[Gd#]#^Gd#a#bGd#g#hGd#i#jGd#m#nGd+{!$cWOY!$`YZM]Zz!$`z{!${{#O!$`#O#P!&S#P#Q!!]#Q~!$`+{!%OYOY!$`YZM]Zz!$`z{!${{!P!$`!P!Q!%n!Q#O!$`#O#P!&S#P#Q!!]#Q~!$`+{!%sTU+{OYG{Z#OG{#O#PH_#P#QFx#Q~G{+{!&VTOY!$`YZM]Zz!$`z{!${{~!$`+{!&iTOY!!]YZM]Zz!!]z{!#Q{~!!]+{!&}_}POzM]z{Mi{#ZM]#Z#[!&x#[#]M]#]#^!&x#^#aM]#a#b!&x#b#gM]#g#h!&x#h#iM]#i#j!&x#j#mM]#m#n!&x#n~M],T!(R[$UWOY!'|YZKoZz!'|z{!(w{!^!'|!^!_!$`!_#O!'|#O#P!*o#P#QJl#Q#o!'|#o#p!$`#p~!'|,T!(|^$UWOY!'|YZKoZz!'|z{!(w{!P!'|!P!Q!)x!Q!^!'|!^!_!$`!_#O!'|#O#P!*o#P#QJl#Q#o!'|#o#p!$`#p~!'|,T!*PY$UWU+{OYHqYZ%TZ!^Hq!^!_G{!_#OHq#O#PIf#P#QDu#Q#oHq#o#pG{#p~Hq,T!*tX$UWOY!'|YZKoZz!'|z{!(w{!^!'|!^!_!$`!_#o!'|#o#p!$`#p~!'|,T!+fX$UWOYJlYZKoZzJlz{NQ{!^Jl!^!_!!]!_#oJl#o#p!!]#p~Jl,T!,Yc$UW}POzKoz{LZ{!^Ko!^!_M]!_#ZKo#Z#[!,R#[#]Ko#]#^!,R#^#aKo#a#b!,R#b#gKo#g#h!,R#h#iKo#i#j!,R#j#mKo#m#n!,R#n#oKo#o#pM]#p~Ko,T!-lV$UWT+{OY!-eYZ%TZ!^!-e!^!_!.R!_#o!-e#o#p!.R#p~!-e+{!.WQT+{OY!.RZ~!.R$P!.g[$UW#o#v}POYDuYZ%TZ!PDu!P!QEr!Q!^Du!^!_Fx!_!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~Du]!/f[#wS$UW}POYDuYZ%TZ!PDu!P!QEr!Q!^Du!^!_Fx!_!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~Duy!0cd$UWkqO!O%T!O!P@r!P!Q%T!Q![!1q![!^%T!_!g%T!g!hAl!h#R%T#R#S!1q#S#U%T#U#V!3X#V#X%T#X#YAl#Y#b%T#b#c!2w#c#d!4m#d#l%T#l#m!5{#m#o%T#p~%Ty!1x_$UWkqO!O%T!O!P@r!P!Q%T!Q![!1q![!^%T!_!g%T!g!hAl!h#R%T#R#S!1q#S#X%T#X#YAl#Y#b%T#b#c!2w#c#o%T#p~%Ty!3OR$UWkqO!^%T!_#o%T#p~%Ty!3^W$UWO!Q%T!Q!R!3v!R!S!3v!S!^%T!_#R%T#R#S!3v#S#o%T#p~%Ty!3}Y$UWkqO!Q%T!Q!R!3v!R!S!3v!S!^%T!_#R%T#R#S!3v#S#b%T#b#c!2w#c#o%T#p~%Ty!4rV$UWO!Q%T!Q!Y!5X!Y!^%T!_#R%T#R#S!5X#S#o%T#p~%Ty!5`X$UWkqO!Q%T!Q!Y!5X!Y!^%T!_#R%T#R#S!5X#S#b%T#b#c!2w#c#o%T#p~%Ty!6QZ$UWO!Q%T!Q![!6s![!^%T!_!c%T!c!i!6s!i#R%T#R#S!6s#S#T%T#T#Z!6s#Z#o%T#p~%Ty!6z]$UWkqO!Q%T!Q![!6s![!^%T!_!c%T!c!i!6s!i#R%T#R#S!6s#S#T%T#T#Z!6s#Z#b%T#b#c!2w#c#o%T#p~%T%w!7|R!]V$UW#m%hO!^%T!_#o%T#p~%T!P!8^R_w$UWO!^%T!_#o%T#p~%T+c!8rR'`d!a%Y#x&s'zP!P!Q!8{!^!_!9Q!_!`!9_W!9QO$WW#v!9VP#`#v!_!`!9Y#v!9_O#o#v#v!9dO#a#v%w!9kT!{%o$UWO!^%T!_!`'v!`!a!9z!a#o%T#p~%T$P!:RR#W#w$UWO!^%T!_#o%T#p~%T%w!:gT'_!s#a#v$RS$UWO!^%T!_!`!:v!`!a!;W!a#o%T#p~%T$O!:}R#a#v$UWO!^%T!_#o%T#p~%T$O!;_T#`#v$UWO!^%T!_!`5T!`!a!;n!a#o%T#p~%T$O!;uS#`#v$UWO!^%T!_!`5T!`#o%T#p~%T%w!<YV'n%o$UWO!O%T!O!P!<o!P!^%T!_!a%T!a!b!=P!b#o%T#p~%T$`!<vRv$W$UWO!^%T!_#o%T#p~%T$O!=WS$UW#j#vO!^%T!_!`5T!`#o%T#p~%T&e!=kRx&]$UWO!^%T!_#o%T#p~%TZ!={R!OR$UWO!^%T!_#o%T#p~%T$O!>]S#g#v$UWO!^%T!_!`5T!`#o%T#p~%T$P!>pR$UW'd#wO!^%T!_#o%T#p~%T~!?OO!T~%r!?VT'u%j$UWO!^%T!_!`5T!`#o%T#p#q!=P#q~%T$u!?oR!S$knQ$UWO!^%T!_#o%T#p~%TX!@PR!kP$UWO!^%T!_#o%T#p~%T,T!@gr$UW'W+{#zS'Z%k'epOX%TXY%cYZ%TZ[%c[p%Tpq%cqt%Ttu2`u}%T}!O3j!O!Q%T!Q![2`![!^%T!_!c%T!c!}2`!}#R%T#R#S2`#S#T%T#T#o2`#p$f%T$f$g%c$g#BY2`#BY#BZ!@Y#BZ$IS2`$IS$I_!@Y$I_$JT2`$JT$JU!@Y$JU$KV2`$KV$KW!@Y$KW&FU2`&FU&FV!@Y&FV?HT2`?HT?HU!@Y?HU~2`,T!CO_$UW'X+{#zS'Z%k'epOt%Ttu2`u}%T}!O3j!O!Q%T!Q![2`![!^%T!_!c%T!c!}2`!}#R%T#R#S2`#S#T%T#T#o2`#p$g%T$g~2`",
    tokenizers: [Hy, Jy, Ky, 0, 1, 2, 3, 4, 5, 6, 7, 8, Fy],
    topRules: { Script: [0, 7] },
    dialects: { jsx: 11335, ts: 11337 },
    dynamicPrecedences: { 149: 1, 176: 1 },
    specialized: [
      { term: 287, get: (r, e) => eQ(r, e) << 1 },
      { term: 287, get: (r) => tQ[r] || -1 },
      { term: 297, get: (r) => iQ[r] || -1 },
      { term: 63, get: (r) => nQ[r] || -1 },
    ],
    tokenPrec: 11358,
  });
function yh(r) {
  let e = Object.keys(r).join(''),
    t = /\w/.test(e);
  return (
    t && (e = e.replace(/\w/g, '')),
    `[${t ? '\\w' : ''}${e.replace(/[^\w\s]/g, '\\$&')}]`
  );
}
function sQ(r) {
  let e = Object.create(null),
    t = Object.create(null);
  for (let { label: s } of r) {
    e[s[0]] = !0;
    for (let o = 1; o < s.length; o++) t[s[o]] = !0;
  }
  let n = yh(e) + yh(t) + '*$';
  return [new RegExp('^' + n), new RegExp(n)];
}
function oQ(r) {
  let e = r.map((s) => (typeof s == 'string' ? { label: s } : s)),
    [t, n] = e.every((s) => /^\w+$/.test(s.label)) ? [/\w*$/, /\w+$/] : sQ(e);
  return (s) => {
    let o = s.matchBefore(n);
    return o || s.explicit
      ? { from: o ? o.from : s.pos, options: e, span: t }
      : null;
  };
}
function lQ(r, e) {
  return (t) => {
    for (let n = _e(t.state).resolveInner(t.pos, -1); n; n = n.parent)
      if (r.indexOf(n.name) > -1) return null;
    return e(t);
  };
}
const aQ = G.baseTheme({
  '.cm-tooltip.cm-tooltip-autocomplete': {
    '& > ul': {
      fontFamily: 'monospace',
      whiteSpace: 'nowrap',
      overflow: 'hidden auto',
      maxWidth_fallback: '700px',
      maxWidth: 'min(700px, 95vw)',
      minWidth: '250px',
      maxHeight: '10em',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      '& > li': {
        overflowX: 'hidden',
        textOverflow: 'ellipsis',
        cursor: 'pointer',
        padding: '1px 3px',
        lineHeight: 1.2,
      },
    },
  },
  '&light .cm-tooltip-autocomplete ul li[aria-selected]': {
    background: '#17c',
    color: 'white',
  },
  '&dark .cm-tooltip-autocomplete ul li[aria-selected]': {
    background: '#347',
    color: 'white',
  },
  '.cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after': {
    content: '"\xB7\xB7\xB7"',
    opacity: 0.5,
    display: 'block',
    textAlign: 'center',
  },
  '.cm-tooltip.cm-completionInfo': {
    position: 'absolute',
    padding: '3px 9px',
    width: 'max-content',
    maxWidth: '300px',
  },
  '.cm-completionInfo.cm-completionInfo-left': { right: '100%' },
  '.cm-completionInfo.cm-completionInfo-right': { left: '100%' },
  '&light .cm-snippetField': { backgroundColor: '#00000022' },
  '&dark .cm-snippetField': { backgroundColor: '#ffffff22' },
  '.cm-snippetFieldPosition': {
    verticalAlign: 'text-top',
    width: 0,
    height: '1.15em',
    margin: '0 -0.7px -.7em',
    borderLeft: '1.4px dotted #888',
  },
  '.cm-completionMatchedText': { textDecoration: 'underline' },
  '.cm-completionDetail': { marginLeft: '0.5em', fontStyle: 'italic' },
  '.cm-completionIcon': {
    fontSize: '90%',
    width: '.8em',
    display: 'inline-block',
    textAlign: 'center',
    paddingRight: '.6em',
    opacity: '0.6',
  },
  '.cm-completionIcon-function, .cm-completionIcon-method': {
    '&:after': { content: "'\u0192'" },
  },
  '.cm-completionIcon-class': { '&:after': { content: "'\u25CB'" } },
  '.cm-completionIcon-interface': { '&:after': { content: "'\u25CC'" } },
  '.cm-completionIcon-variable': { '&:after': { content: "'\u{1D465}'" } },
  '.cm-completionIcon-constant': { '&:after': { content: "'\u{1D436}'" } },
  '.cm-completionIcon-type': { '&:after': { content: "'\u{1D461}'" } },
  '.cm-completionIcon-enum': { '&:after': { content: "'\u222A'" } },
  '.cm-completionIcon-property': { '&:after': { content: "'\u25A1'" } },
  '.cm-completionIcon-keyword': { '&:after': { content: "'\u{1F511}\uFE0E'" } },
  '.cm-completionIcon-namespace': { '&:after': { content: "'\u25A2'" } },
  '.cm-completionIcon-text': {
    '&:after': { content: "'abc'", fontSize: '50%', verticalAlign: 'middle' },
  },
});
class cQ {
  constructor(e, t, n, s) {
    (this.field = e), (this.line = t), (this.from = n), (this.to = s);
  }
}
class Zl {
  constructor(e, t, n) {
    (this.field = e), (this.from = t), (this.to = n);
  }
  map(e) {
    let t = e.mapPos(this.from, -1, Le.TrackDel),
      n = e.mapPos(this.to, 1, Le.TrackDel);
    return t == null || n == null ? null : new Zl(this.field, t, n);
  }
}
class Dl {
  constructor(e, t) {
    (this.lines = e), (this.fieldPositions = t);
  }
  instantiate(e, t) {
    let n = [],
      s = [t],
      o = e.doc.lineAt(t),
      l = /^\s*/.exec(o.text)[0];
    for (let c of this.lines) {
      if (n.length) {
        let h = l,
          u = /^\t*/.exec(c)[0].length;
        for (let f = 0; f < u; f++) h += e.facet(es);
        s.push(t + h.length - u), (c = h + c.slice(u));
      }
      n.push(c), (t += c.length + 1);
    }
    let a = this.fieldPositions.map(
      (c) => new Zl(c.field, s[c.line] + c.from, s[c.line] + c.to),
    );
    return { text: n, ranges: a };
  }
  static parse(e) {
    let t = [],
      n = [],
      s = [],
      o;
    for (let l of e.split(/\r\n?|\n/)) {
      for (; (o = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(l)); ) {
        let a = o[1] ? +o[1] : null,
          c = o[2] || o[3] || '',
          h = -1;
        for (let u = 0; u < t.length; u++)
          (a != null ? t[u].seq == a : c ? t[u].name == c : !1) && (h = u);
        if (h < 0) {
          let u = 0;
          for (
            ;
            u < t.length && (a == null || (t[u].seq != null && t[u].seq < a));

          )
            u++;
          t.splice(u, 0, { seq: a, name: c }), (h = u);
          for (let f of s) f.field >= h && f.field++;
        }
        s.push(new cQ(h, n.length, o.index, o.index + c.length)),
          (l = l.slice(0, o.index) + c + l.slice(o.index + o[0].length));
      }
      n.push(l);
    }
    return new Dl(n, s);
  }
}
let hQ = q.widget({
    widget: new (class extends Ti {
      toDOM() {
        let r = document.createElement('span');
        return (r.className = 'cm-snippetFieldPosition'), r;
      }
      ignoreEvent() {
        return !1;
      }
    })(),
  }),
  uQ = q.mark({ class: 'cm-snippetField' });
class en {
  constructor(e, t) {
    (this.ranges = e),
      (this.active = t),
      (this.deco = q.set(
        e.map((n) => (n.from == n.to ? hQ : uQ).range(n.from, n.to)),
      ));
  }
  map(e) {
    let t = [];
    for (let n of this.ranges) {
      let s = n.map(e);
      if (!s) return null;
      t.push(s);
    }
    return new en(t, this.active);
  }
  selectionInsideField(e) {
    return e.ranges.every((t) =>
      this.ranges.some(
        (n) => n.field == this.active && n.from <= t.from && n.to >= t.to,
      ),
    );
  }
}
const En = te.define({
    map(r, e) {
      return r && r.map(e);
    },
  }),
  fQ = te.define(),
  Tn = wt.define({
    create() {
      return null;
    },
    update(r, e) {
      for (let t of e.effects) {
        if (t.is(En)) return t.value;
        if (t.is(fQ) && r) return new en(r.ranges, t.value);
      }
      return (
        r && e.docChanged && (r = r.map(e.changes)),
        r && e.selection && !r.selectionInsideField(e.selection) && (r = null),
        r
      );
    },
    provide: (r) => G.decorations.from(r, (e) => (e ? e.deco : q.none)),
  });
function Il(r, e) {
  return E.create(
    r.filter((t) => t.field == e).map((t) => E.range(t.from, t.to)),
  );
}
function dQ(r) {
  let e = Dl.parse(r);
  return (t, n, s, o) => {
    let { text: l, ranges: a } = e.instantiate(t.state, s),
      c = { changes: { from: s, to: o, insert: K.of(l) } };
    if ((a.length && (c.selection = Il(a, 0)), a.length > 1)) {
      let h = new en(a, 0),
        u = (c.effects = [En.of(h)]);
      t.state.field(Tn, !1) === void 0 &&
        u.push(te.appendConfig.of([Tn, bQ, yQ, aQ]));
    }
    t.dispatch(t.state.update(c));
  };
}
function hd(r) {
  return ({ state: e, dispatch: t }) => {
    let n = e.field(Tn, !1);
    if (!n || (r < 0 && n.active == 0)) return !1;
    let s = n.active + r,
      o = r > 0 && !n.ranges.some((l) => l.field == s + r);
    return (
      t(
        e.update({
          selection: Il(n.ranges, s),
          effects: En.of(o ? null : new en(n.ranges, s)),
        }),
      ),
      !0
    );
  };
}
const pQ = ({ state: r, dispatch: e }) =>
    r.field(Tn, !1) ? (e(r.update({ effects: En.of(null) })), !0) : !1,
  OQ = hd(1),
  mQ = hd(-1),
  gQ = [
    { key: 'Tab', run: OQ, shift: mQ },
    { key: 'Escape', run: pQ },
  ],
  Qh = U.define({
    combine(r) {
      return r.length ? r[0] : gQ;
    },
  }),
  bQ = pl.highest(Ar.compute([Qh], (r) => r.facet(Qh)));
function pi(r, e) {
  return Object.assign(Object.assign({}, e), { apply: dQ(r) });
}
const yQ = G.domEventHandlers({
    mousedown(r, e) {
      let t = e.state.field(Tn, !1),
        n;
      if (!t || (n = e.posAtCoords({ x: r.clientX, y: r.clientY })) == null)
        return !1;
      let s = t.ranges.find((o) => o.from <= n && o.to >= n);
      return !s || s.field == t.active
        ? !1
        : (e.dispatch({
            selection: Il(t.ranges, s.field),
            effects: En.of(
              t.ranges.some((o) => o.field > s.field)
                ? new en(t.ranges, s.field)
                : null,
            ),
          }),
          !0);
    },
  }),
  QQ = [
    pi('function ${name}(${params}) {\n	${}\n}', {
      label: 'function',
      detail: 'definition',
      type: 'keyword',
    }),
    pi('for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}', {
      label: 'for',
      detail: 'loop',
      type: 'keyword',
    }),
    pi('for (let ${name} of ${collection}) {\n	${}\n}', {
      label: 'for',
      detail: 'of loop',
      type: 'keyword',
    }),
    pi(
      `try {
	\${}
} catch (\${error}) {
	\${}
}`,
      { label: 'try', detail: 'block', type: 'keyword' },
    ),
    pi(
      `class \${name} {
	constructor(\${params}) {
		\${}
	}
}`,
      { label: 'class', detail: 'definition', type: 'keyword' },
    ),
    pi('import {${names}} from "${module}"\n${}', {
      label: 'import',
      detail: 'named',
      type: 'keyword',
    }),
    pi('import ${name} from "${module}"\n${}', {
      label: 'import',
      detail: 'default',
      type: 'keyword',
    }),
  ],
  Fi = Vi.define({
    parser: rQ.configure({
      props: [
        is.add({
          IfStatement: br({ except: /^\s*({|else\b)/ }),
          TryStatement: br({ except: /^\s*({|catch\b|finally\b)/ }),
          LabeledStatement: _0,
          SwitchBody: (r) => {
            let e = r.textAfter,
              t = /^\s*\}/.test(e),
              n = /^\s*(case|default)\b/.test(e);
            return r.baseIndent + (t ? 0 : n ? 1 : 2) * r.unit;
          },
          Block: L0({ closing: '}' }),
          ArrowFunction: (r) => r.baseIndent + r.unit,
          'TemplateString BlockComment': () => -1,
          'Statement Property': br({ except: /^{/ }),
          JSXElement(r) {
            let e = /^\s*<\//.test(r.textAfter);
            return r.lineIndent(r.node.from) + (e ? 0 : r.unit);
          },
          JSXEscape(r) {
            let e = /\s*\}/.test(r.textAfter);
            return r.lineIndent(r.node.from) + (e ? 0 : r.unit);
          },
          'JSXOpenTag JSXSelfClosingTag'(r) {
            return r.column(r.node.from) + r.unit;
          },
        }),
        Tl.add({
          'Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression': of,
          BlockComment(r) {
            return { from: r.from + 2, to: r.to - 2 };
          },
        }),
        Ll({
          'get set async static': $.modifier,
          'for while do if else switch try catch finally return throw break continue default case':
            $.controlKeyword,
          'in of await yield void typeof delete instanceof': $.operatorKeyword,
          'let var const function class extends': $.definitionKeyword,
          'import export from': $.moduleKeyword,
          'with debugger as new': $.keyword,
          TemplateString: $.special($.string),
          Super: $.atom,
          BooleanLiteral: $.bool,
          this: $.self,
          null: $.null,
          Star: $.modifier,
          VariableName: $.variableName,
          'CallExpression/VariableName TaggedTemplateExpression/VariableName': $.function(
            $.variableName,
          ),
          VariableDefinition: $.definition($.variableName),
          Label: $.labelName,
          PropertyName: $.propertyName,
          PrivatePropertyName: $.special($.propertyName),
          'CallExpression/MemberExpression/PropertyName': $.function(
            $.propertyName,
          ),
          'FunctionDeclaration/VariableDefinition': $.function(
            $.definition($.variableName),
          ),
          'ClassDeclaration/VariableDefinition': $.definition($.className),
          PropertyDefinition: $.definition($.propertyName),
          PrivatePropertyDefinition: $.definition($.special($.propertyName)),
          UpdateOp: $.updateOperator,
          LineComment: $.lineComment,
          BlockComment: $.blockComment,
          Number: $.number,
          String: $.string,
          ArithOp: $.arithmeticOperator,
          LogicOp: $.logicOperator,
          BitOp: $.bitwiseOperator,
          CompareOp: $.compareOperator,
          RegExp: $.regexp,
          Equals: $.definitionOperator,
          'Arrow : Spread': $.punctuation,
          '( )': $.paren,
          '[ ]': $.squareBracket,
          '{ }': $.brace,
          'InterpolationStart InterpolationEnd': $.special($.brace),
          '.': $.derefOperator,
          ', ;': $.separator,
          TypeName: $.typeName,
          TypeDefinition: $.definition($.typeName),
          'type enum interface implements namespace module declare':
            $.definitionKeyword,
          'abstract global Privacy readonly override': $.modifier,
          'is keyof unique infer': $.operatorKeyword,
          JSXAttributeValue: $.attributeValue,
          JSXText: $.content,
          'JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag':
            $.angleBracket,
          'JSXIdentifier JSXNameSpacedName': $.tagName,
          'JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName':
            $.attributeName,
        }),
      ],
    }),
    languageData: {
      closeBrackets: { brackets: ['(', '[', '{', "'", '"', '`'] },
      commentTokens: { line: '//', block: { open: '/*', close: '*/' } },
      indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
      wordChars: '$',
    },
  }),
  xQ = Fi.configure({ dialect: 'ts' }),
  vQ = Fi.configure({ dialect: 'jsx' }),
  SQ = Fi.configure({ dialect: 'jsx ts' });
function tl(r = {}) {
  let e = r.jsx ? (r.typescript ? SQ : vQ) : r.typescript ? xQ : Fi;
  return new wl(
    e,
    Fi.data.of({
      autocomplete: lQ(['LineComment', 'BlockComment', 'String'], oQ(QQ)),
    }),
  );
}
const fn = ['_blank', '_self', '_top', '_parent'],
  io = ['ascii', 'utf-8', 'utf-16', 'latin1', 'latin1'],
  no = ['get', 'post', 'put', 'delete'],
  ro = [
    'application/x-www-form-urlencoded',
    'multipart/form-data',
    'text/plain',
  ],
  Ge = ['true', 'false'],
  X = {},
  us = {
    a: {
      attrs: {
        href: null,
        ping: null,
        type: null,
        media: null,
        target: fn,
        hreflang: null,
      },
    },
    abbr: X,
    acronym: X,
    address: X,
    applet: X,
    area: {
      attrs: {
        alt: null,
        coords: null,
        href: null,
        target: null,
        ping: null,
        media: null,
        hreflang: null,
        type: null,
        shape: ['default', 'rect', 'circle', 'poly'],
      },
    },
    article: X,
    aside: X,
    audio: {
      attrs: {
        src: null,
        mediagroup: null,
        crossorigin: ['anonymous', 'use-credentials'],
        preload: ['none', 'metadata', 'auto'],
        autoplay: ['autoplay'],
        loop: ['loop'],
        controls: ['controls'],
      },
    },
    b: X,
    base: { attrs: { href: null, target: fn } },
    basefont: X,
    bdi: X,
    bdo: X,
    big: X,
    blockquote: { attrs: { cite: null } },
    body: X,
    br: X,
    button: {
      attrs: {
        form: null,
        formaction: null,
        name: null,
        value: null,
        autofocus: ['autofocus'],
        disabled: ['autofocus'],
        formenctype: ro,
        formmethod: no,
        formnovalidate: ['novalidate'],
        formtarget: fn,
        type: ['submit', 'reset', 'button'],
      },
    },
    canvas: { attrs: { width: null, height: null } },
    caption: X,
    center: X,
    cite: X,
    code: X,
    col: { attrs: { span: null } },
    colgroup: { attrs: { span: null } },
    command: {
      attrs: {
        type: ['command', 'checkbox', 'radio'],
        label: null,
        icon: null,
        radiogroup: null,
        command: null,
        title: null,
        disabled: ['disabled'],
        checked: ['checked'],
      },
    },
    data: { attrs: { value: null } },
    datagrid: { attrs: { disabled: ['disabled'], multiple: ['multiple'] } },
    datalist: { attrs: { data: null } },
    dd: X,
    del: { attrs: { cite: null, datetime: null } },
    details: { attrs: { open: ['open'] } },
    dfn: X,
    dir: X,
    div: X,
    dl: X,
    dt: X,
    em: X,
    embed: { attrs: { src: null, type: null, width: null, height: null } },
    eventsource: { attrs: { src: null } },
    fieldset: { attrs: { disabled: ['disabled'], form: null, name: null } },
    figcaption: X,
    figure: X,
    font: X,
    footer: X,
    form: {
      attrs: {
        action: null,
        name: null,
        'accept-charset': io,
        autocomplete: ['on', 'off'],
        enctype: ro,
        method: no,
        novalidate: ['novalidate'],
        target: fn,
      },
    },
    frame: X,
    frameset: X,
    h1: X,
    h2: X,
    h3: X,
    h4: X,
    h5: X,
    h6: X,
    head: {
      children: [
        'title',
        'base',
        'link',
        'style',
        'meta',
        'script',
        'noscript',
        'command',
      ],
    },
    header: X,
    hgroup: X,
    hr: X,
    html: { attrs: { manifest: null } },
    i: X,
    iframe: {
      attrs: {
        src: null,
        srcdoc: null,
        name: null,
        width: null,
        height: null,
        sandbox: [
          'allow-top-navigation',
          'allow-same-origin',
          'allow-forms',
          'allow-scripts',
        ],
        seamless: ['seamless'],
      },
    },
    img: {
      attrs: {
        alt: null,
        src: null,
        ismap: null,
        usemap: null,
        width: null,
        height: null,
        crossorigin: ['anonymous', 'use-credentials'],
      },
    },
    input: {
      attrs: {
        alt: null,
        dirname: null,
        form: null,
        formaction: null,
        height: null,
        list: null,
        max: null,
        maxlength: null,
        min: null,
        name: null,
        pattern: null,
        placeholder: null,
        size: null,
        src: null,
        step: null,
        value: null,
        width: null,
        accept: ['audio/*', 'video/*', 'image/*'],
        autocomplete: ['on', 'off'],
        autofocus: ['autofocus'],
        checked: ['checked'],
        disabled: ['disabled'],
        formenctype: ro,
        formmethod: no,
        formnovalidate: ['novalidate'],
        formtarget: fn,
        multiple: ['multiple'],
        readonly: ['readonly'],
        required: ['required'],
        type: [
          'hidden',
          'text',
          'search',
          'tel',
          'url',
          'email',
          'password',
          'datetime',
          'date',
          'month',
          'week',
          'time',
          'datetime-local',
          'number',
          'range',
          'color',
          'checkbox',
          'radio',
          'file',
          'submit',
          'image',
          'reset',
          'button',
        ],
      },
    },
    ins: { attrs: { cite: null, datetime: null } },
    kbd: X,
    keygen: {
      attrs: {
        challenge: null,
        form: null,
        name: null,
        autofocus: ['autofocus'],
        disabled: ['disabled'],
        keytype: ['RSA'],
      },
    },
    label: { attrs: { for: null, form: null } },
    legend: X,
    li: { attrs: { value: null } },
    link: {
      attrs: {
        href: null,
        type: null,
        hreflang: null,
        media: null,
        sizes: ['all', '16x16', '16x16 32x32', '16x16 32x32 64x64'],
      },
    },
    map: { attrs: { name: null } },
    mark: X,
    menu: { attrs: { label: null, type: ['list', 'context', 'toolbar'] } },
    meta: {
      attrs: {
        content: null,
        charset: io,
        name: [
          'viewport',
          'application-name',
          'author',
          'description',
          'generator',
          'keywords',
        ],
        'http-equiv': [
          'content-language',
          'content-type',
          'default-style',
          'refresh',
        ],
      },
    },
    meter: {
      attrs: {
        value: null,
        min: null,
        low: null,
        high: null,
        max: null,
        optimum: null,
      },
    },
    nav: X,
    noframes: X,
    noscript: X,
    object: {
      attrs: {
        data: null,
        type: null,
        name: null,
        usemap: null,
        form: null,
        width: null,
        height: null,
        typemustmatch: ['typemustmatch'],
      },
    },
    ol: {
      attrs: {
        reversed: ['reversed'],
        start: null,
        type: ['1', 'a', 'A', 'i', 'I'],
      },
      children: ['li', 'script', 'template', 'ul', 'ol'],
    },
    optgroup: { attrs: { disabled: ['disabled'], label: null } },
    option: {
      attrs: {
        disabled: ['disabled'],
        label: null,
        selected: ['selected'],
        value: null,
      },
    },
    output: { attrs: { for: null, form: null, name: null } },
    p: X,
    param: { attrs: { name: null, value: null } },
    pre: X,
    progress: { attrs: { value: null, max: null } },
    q: { attrs: { cite: null } },
    rp: X,
    rt: X,
    ruby: X,
    s: X,
    samp: X,
    script: {
      attrs: {
        type: ['text/javascript'],
        src: null,
        async: ['async'],
        defer: ['defer'],
        charset: io,
      },
    },
    section: X,
    select: {
      attrs: {
        form: null,
        name: null,
        size: null,
        autofocus: ['autofocus'],
        disabled: ['disabled'],
        multiple: ['multiple'],
      },
    },
    small: X,
    source: { attrs: { src: null, type: null, media: null } },
    span: X,
    strike: X,
    strong: X,
    style: { attrs: { type: ['text/css'], media: null, scoped: null } },
    sub: X,
    summary: X,
    sup: X,
    table: X,
    tbody: X,
    td: { attrs: { colspan: null, rowspan: null, headers: null } },
    textarea: {
      attrs: {
        dirname: null,
        form: null,
        maxlength: null,
        name: null,
        placeholder: null,
        rows: null,
        cols: null,
        autofocus: ['autofocus'],
        disabled: ['disabled'],
        readonly: ['readonly'],
        required: ['required'],
        wrap: ['soft', 'hard'],
      },
    },
    tfoot: X,
    th: {
      attrs: {
        colspan: null,
        rowspan: null,
        headers: null,
        scope: ['row', 'col', 'rowgroup', 'colgroup'],
      },
    },
    thead: X,
    time: { attrs: { datetime: null } },
    title: X,
    tr: X,
    track: {
      attrs: {
        src: null,
        label: null,
        default: null,
        kind: ['subtitles', 'captions', 'descriptions', 'chapters', 'metadata'],
        srclang: null,
      },
    },
    tt: X,
    u: X,
    ul: { children: ['li', 'script', 'template', 'ul', 'ol'] },
    var: X,
    video: {
      attrs: {
        src: null,
        poster: null,
        width: null,
        height: null,
        crossorigin: ['anonymous', 'use-credentials'],
        preload: ['auto', 'metadata', 'none'],
        autoplay: ['autoplay'],
        mediagroup: ['movie'],
        muted: ['muted'],
        controls: ['controls'],
      },
    },
    wbr: X,
  },
  ud = {
    accesskey: null,
    class: null,
    contenteditable: Ge,
    contextmenu: null,
    dir: ['ltr', 'rtl', 'auto'],
    draggable: ['true', 'false', 'auto'],
    dropzone: ['copy', 'move', 'link', 'string:', 'file:'],
    hidden: ['hidden'],
    id: null,
    inert: ['inert'],
    itemid: null,
    itemprop: null,
    itemref: null,
    itemscope: ['itemscope'],
    itemtype: null,
    lang: [
      'ar',
      'bn',
      'de',
      'en-GB',
      'en-US',
      'es',
      'fr',
      'hi',
      'id',
      'ja',
      'pa',
      'pt',
      'ru',
      'tr',
      'zh',
    ],
    spellcheck: Ge,
    autocorrect: Ge,
    autocapitalize: Ge,
    style: null,
    tabindex: null,
    title: null,
    translate: ['yes', 'no'],
    onclick: null,
    rel: [
      'stylesheet',
      'alternate',
      'author',
      'bookmark',
      'help',
      'license',
      'next',
      'nofollow',
      'noreferrer',
      'prefetch',
      'prev',
      'search',
      'tag',
    ],
    role: 'alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer'.split(
      ' ',
    ),
    'aria-activedescendant': null,
    'aria-atomic': Ge,
    'aria-autocomplete': ['inline', 'list', 'both', 'none'],
    'aria-busy': Ge,
    'aria-checked': ['true', 'false', 'mixed', 'undefined'],
    'aria-controls': null,
    'aria-describedby': null,
    'aria-disabled': Ge,
    'aria-dropeffect': null,
    'aria-expanded': ['true', 'false', 'undefined'],
    'aria-flowto': null,
    'aria-grabbed': ['true', 'false', 'undefined'],
    'aria-haspopup': Ge,
    'aria-hidden': Ge,
    'aria-invalid': ['true', 'false', 'grammar', 'spelling'],
    'aria-label': null,
    'aria-labelledby': null,
    'aria-level': null,
    'aria-live': ['off', 'polite', 'assertive'],
    'aria-multiline': Ge,
    'aria-multiselectable': Ge,
    'aria-owns': null,
    'aria-posinset': null,
    'aria-pressed': ['true', 'false', 'mixed', 'undefined'],
    'aria-readonly': Ge,
    'aria-relevant': null,
    'aria-required': Ge,
    'aria-selected': ['true', 'false', 'undefined'],
    'aria-setsize': null,
    'aria-sort': ['ascending', 'descending', 'none', 'other'],
    'aria-valuemax': null,
    'aria-valuemin': null,
    'aria-valuenow': null,
    'aria-valuetext': null,
  },
  $Q = Object.keys(us),
  xh = Object.keys(ud);
function Hi(r, e, t = r.length) {
  if (!e) return '';
  let n = e.firstChild,
    s = n && n.getChild('TagName');
  return s ? r.sliceString(s.from, Math.min(s.to, t)) : '';
}
function fs(r, e = !1) {
  for (let t = r.parent; t; t = t.parent)
    if (t.name == 'Element')
      if (e) e = !1;
      else return t;
  return null;
}
function fd(r, e) {
  let t = us[Hi(r, fs(e, !0))];
  return t?.children || $Q;
}
function Ml(r, e) {
  let t = [];
  for (let n = e; (n = fs(n)); ) {
    let s = Hi(r, n);
    if (s && n.lastChild.name == 'CloseTag') break;
    s &&
      t.indexOf(s) < 0 &&
      (e.name == 'EndTag' || e.from >= n.firstChild.to) &&
      t.push(s);
  }
  return t;
}
const dd = /^[:\-\.\w\u00b7-\uffff]+$/;
function vh(r, e, t, n) {
  let s = /\s*>/.test(r.sliceDoc(n, n + 5)) ? '' : '>';
  return {
    from: t,
    to: n,
    options: fd(r.doc, e)
      .map((o) => ({ label: o, type: 'type' }))
      .concat(
        Ml(r.doc, e).map((o, l) => ({
          label: '/' + o,
          apply: '/' + o + s,
          type: 'type',
          boost: 99 - l,
        })),
      ),
    span: /^\/?[:\-\.\w\u00b7-\uffff]*$/,
  };
}
function Sh(r, e, t, n) {
  let s = /\s*>/.test(r.sliceDoc(n, n + 5)) ? '' : '>';
  return {
    from: t,
    to: n,
    options: Ml(r.doc, e).map((o, l) => ({
      label: o,
      apply: o + s,
      type: 'type',
      boost: 99 - l,
    })),
    span: dd,
  };
}
function kQ(r, e, t) {
  let n = [],
    s = 0;
  for (let o of fd(r.doc, e)) n.push({ label: '<' + o, type: 'type' });
  for (let o of Ml(r.doc, e))
    n.push({ label: '</' + o + '>', type: 'type', boost: 99 - s++ });
  return { from: t, to: t, options: n, span: /^<\/?[:\-\.\w\u00b7-\uffff]*$/ };
}
function wQ(r, e, t, n) {
  let s = fs(e),
    o = s ? us[Hi(r.doc, s)] : null,
    l = o && o.attrs ? Object.keys(o.attrs).concat(xh) : xh;
  return {
    from: t,
    to: n,
    options: l.map((a) => ({ label: a, type: 'property' })),
    span: dd,
  };
}
function TQ(r, e, t, n) {
  var s;
  let o =
      (s = e.parent) === null || s === void 0
        ? void 0
        : s.getChild('AttributeName'),
    l = [],
    a;
  if (o) {
    let c = r.sliceDoc(o.from, o.to),
      h = ud[c];
    if (!h) {
      let u = fs(e),
        f = u ? us[Hi(r.doc, u)] : null;
      h = f?.attrs && f.attrs[c];
    }
    if (h) {
      let u = r.sliceDoc(t, n).toLowerCase(),
        f = '"',
        d = '"';
      /^['"]/.test(u)
        ? ((a = u[0] == '"' ? /^[^"]*$/ : /^[^']*$/),
          (f = ''),
          (d = r.sliceDoc(n, n + 1) == u[0] ? '' : u[0]),
          (u = u.slice(1)),
          t++)
        : (a = /^[^\s<>='"]*$/);
      for (let p of h) l.push({ label: p, apply: f + p + d, type: 'constant' });
    }
  }
  return { from: t, to: n, options: l, span: a };
}
function PQ(r) {
  let { state: e, pos: t } = r,
    n = _e(e).resolveInner(t),
    s = n.resolve(t, -1);
  for (let o = t, l; n == s && (l = s.childBefore(o)); ) {
    let a = l.lastChild;
    if (!a || !a.type.isError || a.from < a.to) break;
    (n = s = l), (o = a.from);
  }
  return s.name == 'TagName'
    ? s.parent && /CloseTag$/.test(s.parent.name)
      ? Sh(e, s, s.from, t)
      : vh(e, s, s.from, t)
    : s.name == 'StartTag'
    ? vh(e, s, t, t)
    : s.name == 'StartCloseTag' || s.name == 'IncompleteCloseTag'
    ? Sh(e, s, t, t)
    : (r.explicit && (s.name == 'OpenTag' || s.name == 'SelfClosingTag')) ||
      s.name == 'AttributeName'
    ? wQ(e, s, s.name == 'AttributeName' ? s.from : t, t)
    : s.name == 'Is' ||
      s.name == 'AttributeValue' ||
      s.name == 'UnquotedAttributeValue'
    ? TQ(e, s, s.name == 'Is' ? t : s.from, t)
    : r.explicit &&
      (n.name == 'Element' || n.name == 'Text' || n.name == 'Document')
    ? kQ(e, s, t)
    : null;
}
const jl = Vi.define({
    parser: Py.configure({
      props: [
        is.add({
          Element(r) {
            let e = /^(\s*)(<\/)?/.exec(r.textAfter);
            return r.node.to <= r.pos + e[0].length
              ? r.continue()
              : r.lineIndent(r.node.from) + (e[2] ? 0 : r.unit);
          },
          'OpenTag CloseTag SelfClosingTag'(r) {
            return r.column(r.node.from) + r.unit;
          },
          Document(r) {
            if (r.pos + /\s*/.exec(r.textAfter)[0].length < r.node.to)
              return r.continue();
            let e = null,
              t;
            for (let n = r.node; ; ) {
              let s = n.lastChild;
              if (!s || s.name != 'Element' || s.to != n.to) break;
              e = n = s;
            }
            return e &&
              !(
                (t = e.lastChild) &&
                (t.name == 'CloseTag' || t.name == 'SelfClosingTag')
              )
              ? r.lineIndent(e.from) + r.unit
              : null;
          },
        }),
        Tl.add({
          Element(r) {
            let e = r.firstChild,
              t = r.lastChild;
            return !e || e.name != 'OpenTag'
              ? null
              : { from: e.to, to: t.name == 'CloseTag' ? t.from : r.to };
          },
        }),
        Ll({
          'Text RawText': $.content,
          'StartTag StartCloseTag SelfCloserEndTag EndTag SelfCloseEndTag':
            $.angleBracket,
          TagName: $.tagName,
          'MismatchedCloseTag/TagName': [$.tagName, $.invalid],
          AttributeName: $.attributeName,
          'AttributeValue UnquotedAttributeValue': $.attributeValue,
          Is: $.definitionOperator,
          'EntityReference CharacterReference': $.character,
          Comment: $.blockComment,
          ProcessingInst: $.processingInstruction,
          DoctypeDecl: $.documentMeta,
        }),
      ],
      wrap: Cy([
        {
          tag: 'script',
          attrs(r) {
            return (
              !r.type ||
              /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(
                r.type,
              )
            );
          },
          parser: Fi.parser,
        },
        {
          tag: 'style',
          attrs(r) {
            return (
              (!r.lang || r.lang == 'css') &&
              (!r.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(r.type))
            );
          },
          parser: _l.parser,
        },
      ]),
    }),
    languageData: {
      commentTokens: { block: { open: '<!--', close: '-->' } },
      indentOnInput: /^\s*<\/\w+\W$/,
      wordChars: '-._',
    },
  }),
  RQ = jl.data.of({ autocomplete: PQ });
function CQ(r = {}) {
  let e = jl;
  return (
    r.matchClosingTags === !1 && (e = e.configure({ dialect: 'noMatch' })),
    new wl(e, [
      RQ,
      r.autoCloseTags !== !1 ? WQ : [],
      tl().support,
      td().support,
    ])
  );
}
const WQ = G.inputHandler.of((r, e, t, n) => {
  if (
    r.composing ||
    r.state.readOnly ||
    e != t ||
    (n != '>' && n != '/') ||
    !jl.isActiveAt(r.state, e, -1)
  )
    return !1;
  let { state: s } = r,
    o = s.changeByRange((l) => {
      var a, c, h;
      let { head: u } = l,
        f = _e(s).resolveInner(u, -1),
        d;
      if (
        ((f.name == 'TagName' || f.name == 'StartTag') && (f = f.parent),
        n == '>' && f.name == 'OpenTag')
      ) {
        if (
          ((c =
            (a = f.parent) === null || a === void 0 ? void 0 : a.lastChild) ===
            null || c === void 0
            ? void 0
            : c.name) != 'CloseTag' &&
          (d = Hi(s.doc, f.parent, u))
        )
          return {
            range: E.cursor(u + 1),
            changes: { from: u, insert: `></${d}>` },
          };
      } else if (n == '/' && f.name == 'OpenTag') {
        let p = f.parent,
          m = p?.parent;
        if (
          p.from == u - 1 &&
          ((h = m.lastChild) === null || h === void 0 ? void 0 : h.name) !=
            'CloseTag' &&
          (d = Hi(s.doc, m, u))
        ) {
          let S = `/${d}>`;
          return {
            range: E.cursor(u + S.length),
            changes: { from: u, insert: S },
          };
        }
      }
      return { range: l };
    });
  return o.changes.empty
    ? !1
    : (r.dispatch(o, { userEvent: 'input.type', scrollIntoView: !0 }), !0);
});
var pd = { exports: {} };
(function (r) {
  var e = (function () {
    var t = String.fromCharCode,
      n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
      o = {};
    function l(c, h) {
      if (!o[c]) {
        o[c] = {};
        for (var u = 0; u < c.length; u++) o[c][c.charAt(u)] = u;
      }
      return o[c][h];
    }
    var a = {
      compressToBase64: function (c) {
        if (c == null) return '';
        var h = a._compress(c, 6, function (u) {
          return n.charAt(u);
        });
        switch (h.length % 4) {
          default:
          case 0:
            return h;
          case 1:
            return h + '===';
          case 2:
            return h + '==';
          case 3:
            return h + '=';
        }
      },
      decompressFromBase64: function (c) {
        return c == null
          ? ''
          : c == ''
          ? null
          : a._decompress(c.length, 32, function (h) {
              return l(n, c.charAt(h));
            });
      },
      compressToUTF16: function (c) {
        return c == null
          ? ''
          : a._compress(c, 15, function (h) {
              return t(h + 32);
            }) + ' ';
      },
      decompressFromUTF16: function (c) {
        return c == null
          ? ''
          : c == ''
          ? null
          : a._decompress(c.length, 16384, function (h) {
              return c.charCodeAt(h) - 32;
            });
      },
      compressToUint8Array: function (c) {
        for (
          var h = a.compress(c),
            u = new Uint8Array(h.length * 2),
            f = 0,
            d = h.length;
          f < d;
          f++
        ) {
          var p = h.charCodeAt(f);
          (u[f * 2] = p >>> 8), (u[f * 2 + 1] = p % 256);
        }
        return u;
      },
      decompressFromUint8Array: function (c) {
        if (c == null) return a.decompress(c);
        for (var h = new Array(c.length / 2), u = 0, f = h.length; u < f; u++)
          h[u] = c[u * 2] * 256 + c[u * 2 + 1];
        var d = [];
        return (
          h.forEach(function (p) {
            d.push(t(p));
          }),
          a.decompress(d.join(''))
        );
      },
      compressToEncodedURIComponent: function (c) {
        return c == null
          ? ''
          : a._compress(c, 6, function (h) {
              return s.charAt(h);
            });
      },
      decompressFromEncodedURIComponent: function (c) {
        return c == null
          ? ''
          : c == ''
          ? null
          : ((c = c.replace(/ /g, '+')),
            a._decompress(c.length, 32, function (h) {
              return l(s, c.charAt(h));
            }));
      },
      compress: function (c) {
        return a._compress(c, 16, function (h) {
          return t(h);
        });
      },
      _compress: function (c, h, u) {
        if (c == null) return '';
        var f,
          d,
          p = {},
          m = {},
          S = '',
          T = '',
          k = '',
          b = 2,
          Q = 3,
          v = 2,
          P = [],
          y = 0,
          w = 0,
          R;
        for (R = 0; R < c.length; R += 1)
          if (
            ((S = c.charAt(R)),
            Object.prototype.hasOwnProperty.call(p, S) ||
              ((p[S] = Q++), (m[S] = !0)),
            (T = k + S),
            Object.prototype.hasOwnProperty.call(p, T))
          )
            k = T;
          else {
            if (Object.prototype.hasOwnProperty.call(m, k)) {
              if (k.charCodeAt(0) < 256) {
                for (f = 0; f < v; f++)
                  (y = y << 1),
                    w == h - 1 ? ((w = 0), P.push(u(y)), (y = 0)) : w++;
                for (d = k.charCodeAt(0), f = 0; f < 8; f++)
                  (y = (y << 1) | (d & 1)),
                    w == h - 1 ? ((w = 0), P.push(u(y)), (y = 0)) : w++,
                    (d = d >> 1);
              } else {
                for (d = 1, f = 0; f < v; f++)
                  (y = (y << 1) | d),
                    w == h - 1 ? ((w = 0), P.push(u(y)), (y = 0)) : w++,
                    (d = 0);
                for (d = k.charCodeAt(0), f = 0; f < 16; f++)
                  (y = (y << 1) | (d & 1)),
                    w == h - 1 ? ((w = 0), P.push(u(y)), (y = 0)) : w++,
                    (d = d >> 1);
              }
              b--, b == 0 && ((b = Math.pow(2, v)), v++), delete m[k];
            } else
              for (d = p[k], f = 0; f < v; f++)
                (y = (y << 1) | (d & 1)),
                  w == h - 1 ? ((w = 0), P.push(u(y)), (y = 0)) : w++,
                  (d = d >> 1);
            b--,
              b == 0 && ((b = Math.pow(2, v)), v++),
              (p[T] = Q++),
              (k = String(S));
          }
        if (k !== '') {
          if (Object.prototype.hasOwnProperty.call(m, k)) {
            if (k.charCodeAt(0) < 256) {
              for (f = 0; f < v; f++)
                (y = y << 1),
                  w == h - 1 ? ((w = 0), P.push(u(y)), (y = 0)) : w++;
              for (d = k.charCodeAt(0), f = 0; f < 8; f++)
                (y = (y << 1) | (d & 1)),
                  w == h - 1 ? ((w = 0), P.push(u(y)), (y = 0)) : w++,
                  (d = d >> 1);
            } else {
              for (d = 1, f = 0; f < v; f++)
                (y = (y << 1) | d),
                  w == h - 1 ? ((w = 0), P.push(u(y)), (y = 0)) : w++,
                  (d = 0);
              for (d = k.charCodeAt(0), f = 0; f < 16; f++)
                (y = (y << 1) | (d & 1)),
                  w == h - 1 ? ((w = 0), P.push(u(y)), (y = 0)) : w++,
                  (d = d >> 1);
            }
            b--, b == 0 && ((b = Math.pow(2, v)), v++), delete m[k];
          } else
            for (d = p[k], f = 0; f < v; f++)
              (y = (y << 1) | (d & 1)),
                w == h - 1 ? ((w = 0), P.push(u(y)), (y = 0)) : w++,
                (d = d >> 1);
          b--, b == 0 && ((b = Math.pow(2, v)), v++);
        }
        for (d = 2, f = 0; f < v; f++)
          (y = (y << 1) | (d & 1)),
            w == h - 1 ? ((w = 0), P.push(u(y)), (y = 0)) : w++,
            (d = d >> 1);
        for (;;)
          if (((y = y << 1), w == h - 1)) {
            P.push(u(y));
            break;
          } else w++;
        return P.join('');
      },
      decompress: function (c) {
        return c == null
          ? ''
          : c == ''
          ? null
          : a._decompress(c.length, 32768, function (h) {
              return c.charCodeAt(h);
            });
      },
      _decompress: function (c, h, u) {
        var f = [],
          d = 4,
          p = 4,
          m = 3,
          S = '',
          T = [],
          k,
          b,
          Q,
          v,
          P,
          y,
          w,
          R = { val: u(0), position: h, index: 1 };
        for (k = 0; k < 3; k += 1) f[k] = k;
        for (Q = 0, P = Math.pow(2, 2), y = 1; y != P; )
          (v = R.val & R.position),
            (R.position >>= 1),
            R.position == 0 && ((R.position = h), (R.val = u(R.index++))),
            (Q |= (v > 0 ? 1 : 0) * y),
            (y <<= 1);
        switch (Q) {
          case 0:
            for (Q = 0, P = Math.pow(2, 8), y = 1; y != P; )
              (v = R.val & R.position),
                (R.position >>= 1),
                R.position == 0 && ((R.position = h), (R.val = u(R.index++))),
                (Q |= (v > 0 ? 1 : 0) * y),
                (y <<= 1);
            w = t(Q);
            break;
          case 1:
            for (Q = 0, P = Math.pow(2, 16), y = 1; y != P; )
              (v = R.val & R.position),
                (R.position >>= 1),
                R.position == 0 && ((R.position = h), (R.val = u(R.index++))),
                (Q |= (v > 0 ? 1 : 0) * y),
                (y <<= 1);
            w = t(Q);
            break;
          case 2:
            return '';
        }
        for (f[3] = w, b = w, T.push(w); ; ) {
          if (R.index > c) return '';
          for (Q = 0, P = Math.pow(2, m), y = 1; y != P; )
            (v = R.val & R.position),
              (R.position >>= 1),
              R.position == 0 && ((R.position = h), (R.val = u(R.index++))),
              (Q |= (v > 0 ? 1 : 0) * y),
              (y <<= 1);
          switch ((w = Q)) {
            case 0:
              for (Q = 0, P = Math.pow(2, 8), y = 1; y != P; )
                (v = R.val & R.position),
                  (R.position >>= 1),
                  R.position == 0 && ((R.position = h), (R.val = u(R.index++))),
                  (Q |= (v > 0 ? 1 : 0) * y),
                  (y <<= 1);
              (f[p++] = t(Q)), (w = p - 1), d--;
              break;
            case 1:
              for (Q = 0, P = Math.pow(2, 16), y = 1; y != P; )
                (v = R.val & R.position),
                  (R.position >>= 1),
                  R.position == 0 && ((R.position = h), (R.val = u(R.index++))),
                  (Q |= (v > 0 ? 1 : 0) * y),
                  (y <<= 1);
              (f[p++] = t(Q)), (w = p - 1), d--;
              break;
            case 2:
              return T.join('');
          }
          if ((d == 0 && ((d = Math.pow(2, m)), m++), f[w])) S = f[w];
          else if (w === p) S = b + b.charAt(0);
          else return null;
          T.push(S),
            (f[p++] = b + S.charAt(0)),
            d--,
            (b = S),
            d == 0 && ((d = Math.pow(2, m)), m++);
        }
      },
    };
    return a;
  })();
  r != null && (r.exports = e);
})(pd);
const AQ = pd.exports;
function $h(r) {
  var e = r && r.pop ? [] : {};
  for (var t in r) e[t] = r[t];
  return e;
}
function EQ(r, e, t) {
  e.split && (e = e.split('.'));
  for (var n = $h(r), s = n, o = 0, l = e.length; o < l; o++)
    s = s[e[o]] = o === l - 1 ? (t && t.call ? t(s[e[o]]) : t) : $h(s[e[o]]);
  return n;
}
var ut = (r) =>
    O.exports.createElement('svg', {
      fill: 'currentColor',
      height: '16',
      viewBox: '0 0 16 16',
      width: '16',
      xmlns: 'http://www.w3.org/2000/svg',
      ...r,
    }),
  zl = () =>
    O.exports.createElement(
      ut,
      null,
      O.exports.createElement('title', null, 'Run sandbox'),
      O.exports.createElement('path', {
        d:
          'M11.0792 8.1078C11.2793 8.25007 11.27 8.55012 11.0616 8.67981L6.02535 11.8135C5.79638 11.956 5.5 11.7913 5.5 11.5216L5.5 8.40703L5.5 4.80661C5.5 4.52735 5.81537 4.36463 6.04296 4.52647L11.0792 8.1078Z',
      }),
    ),
  Od = () =>
    O.exports.createElement(
      ut,
      null,
      O.exports.createElement('title', null, 'Click to go back'),
      O.exports.createElement('path', {
        d:
          'M9.64645 12.3536C9.84171 12.5488 10.1583 12.5488 10.3536 12.3536C10.5488 12.1583 10.5488 11.8417 10.3536 11.6464L9.64645 12.3536ZM10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64644C10.1583 3.45118 9.84171 3.45118 9.64645 3.64644L10.3536 4.35355ZM6.07072 7.92929L5.71716 7.57573L6.07072 7.92929ZM10.3536 11.6464L6.42427 7.71716L5.71716 8.42426L9.64645 12.3536L10.3536 11.6464ZM6.42427 8.28284L10.3536 4.35355L9.64645 3.64644L5.71716 7.57573L6.42427 8.28284ZM6.42427 7.71716C6.58048 7.87337 6.58048 8.12663 6.42427 8.28284L5.71716 7.57573C5.48285 7.81005 5.48285 8.18995 5.71716 8.42426L6.42427 7.71716Z',
      }),
    ),
  md = () =>
    O.exports.createElement(
      ut,
      null,
      O.exports.createElement('title', null, 'Click to go forward'),
      O.exports.createElement('path', {
        d:
          'M6.35355 3.64645C6.15829 3.45118 5.84171 3.45118 5.64645 3.64645C5.45118 3.84171 5.45118 4.15829 5.64645 4.35355L6.35355 3.64645ZM5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536C5.84171 12.5488 6.15829 12.5488 6.35355 12.3536L5.64645 11.6464ZM9.92929 8.07071L10.2828 8.42426L9.92929 8.07071ZM5.64645 4.35355L9.57574 8.28284L10.2828 7.57574L6.35355 3.64645L5.64645 4.35355ZM9.57574 7.71716L5.64645 11.6464L6.35355 12.3536L10.2828 8.42426L9.57574 7.71716ZM9.57574 8.28284C9.41952 8.12663 9.41953 7.87337 9.57574 7.71716L10.2828 8.42426C10.5172 8.18995 10.5172 7.81005 10.2828 7.57574L9.57574 8.28284Z',
      }),
    ),
  Nl = () =>
    O.exports.createElement(
      ut,
      null,
      O.exports.createElement('title', null, 'Refresh preview'),
      O.exports.createElement('path', {
        clipRule: 'evenodd',
        d:
          'M3.83325 7.99992C3.83325 5.69867 5.69853 3.83325 7.99934 3.83325C9.81246 3.83325 11.3563 4.99195 11.9285 6.61097C11.9396 6.6425 11.9536 6.67221 11.97 6.69992H8.80005C8.52391 6.69992 8.30005 6.92378 8.30005 7.19992C8.30005 7.47606 8.52391 7.69992 8.80005 7.69992H12.5667C12.8981 7.69992 13.1667 7.43129 13.1667 7.09992V3.33325C13.1667 3.05711 12.9429 2.83325 12.6667 2.83325C12.3906 2.83325 12.1667 3.05711 12.1667 3.33325V4.94608C11.2268 3.66522 9.7106 2.83325 7.99934 2.83325C5.14613 2.83325 2.83325 5.14651 2.83325 7.99992C2.83325 10.8533 5.14613 13.1666 7.99934 13.1666C9.91218 13.1666 11.5815 12.1266 12.474 10.5836C12.6123 10.3446 12.5306 10.0387 12.2915 9.90044C12.0525 9.76218 11.7466 9.84387 11.6084 10.0829C10.8873 11.3296 9.54072 12.1666 7.99934 12.1666C5.69853 12.1666 3.83325 10.3012 3.83325 7.99992Z',
        fillRule: 'evenodd',
      }),
    ),
  gd = () =>
    O.exports.createElement(
      ut,
      { fill: 'none', stroke: 'currentColor' },
      O.exports.createElement('title', null, 'Clean'),
      O.exports.createElement('circle', {
        cx: '7.99998',
        cy: '8.00004',
        r: '4.66667',
        strokeLinecap: 'round',
      }),
      O.exports.createElement('path', {
        d: 'M4.66669 4.66663L11.3334 11.3333',
      }),
    ),
  bd = () =>
    O.exports.createElement(
      ut,
      { fill: 'none', stroke: 'currentColor' },
      O.exports.createElement('title', null, 'Open on CodeSandbox'),
      O.exports.createElement('path', {
        d:
          'M6.66665 3.33337H4.33331C3.78103 3.33337 3.33331 3.78109 3.33331 4.33337V11.6667C3.33331 12.219 3.78103 12.6667 4.33331 12.6667H11.6666C12.2189 12.6667 12.6666 12.219 12.6666 11.6667V9.33337',
        strokeLinecap: 'round',
      }),
      O.exports.createElement('path', {
        d:
          'M10 3.33337H12.5667C12.6219 3.33337 12.6667 3.37815 12.6667 3.43337V6.00004',
        strokeLinecap: 'round',
      }),
      O.exports.createElement('path', {
        d: 'M7.33331 8.66668L12.5333 3.46667',
        strokeLinecap: 'round',
      }),
    ),
  yd = () =>
    O.exports.createElement(
      ut,
      null,
      O.exports.createElement('title', null, 'Directory'),
      O.exports.createElement('path', {
        d:
          'M12.5526 12.6667H3.66675C3.2922 12.6667 2.96575 12.4608 2.79442 12.156L3.81072 8.0908C3.92201 7.64563 4.32199 7.33333 4.78086 7.33333H13.386C14.0365 7.33333 14.5139 7.94472 14.3561 8.57587L13.5228 11.9092C13.4115 12.3544 13.0115 12.6667 12.5526 12.6667Z',
        fill: 'currentColor',
      }),
      O.exports.createElement('path', {
        d:
          'M13.3334 6.63333V6.33333C13.3334 5.78105 12.8857 5.33333 12.3334 5.33333H8.30286C8.10543 5.33333 7.91242 5.2749 7.74816 5.16538L6.25201 4.16795C6.08774 4.05844 5.89473 4 5.69731 4H3.66675C3.11446 4 2.66675 4.44772 2.66675 5L2.66675 11.6667C2.66675 12.219 3.11446 12.6667 3.66675 12.6667H12.5526C13.0115 12.6667 13.4115 12.3544 13.5228 11.9092L14.3561 8.57587C14.5139 7.94472 14.0365 7.33333 13.386 7.33333H4.78086C4.32199 7.33333 3.92201 7.64563 3.81072 8.0908L2.75008 12.3333',
        fill: 'none',
        stroke: 'currentColor',
        strokeLinecap: 'round',
      }),
    ),
  Qd = () =>
    O.exports.createElement(
      ut,
      null,
      O.exports.createElement('title', null, 'Directory'),
      O.exports.createElement('path', {
        d:
          'M12.3334 12.6667H3.66675C3.11446 12.6667 2.66675 12.219 2.66675 11.6667V5C2.66675 4.44772 3.11446 4 3.66675 4H5.69731C5.89473 4 6.08774 4.05844 6.25201 4.16795L7.74816 5.16538C7.91242 5.2749 8.10543 5.33333 8.30286 5.33333H12.3334C12.8857 5.33333 13.3334 5.78105 13.3334 6.33333V11.6667C13.3334 12.219 12.8857 12.6667 12.3334 12.6667Z',
        fill: 'currentColor',
        stroke: 'currentColor',
        strokeLinecap: 'round',
      }),
    ),
  xd = () =>
    O.exports.createElement(
      ut,
      { fill: 'currentColor' },
      O.exports.createElement('title', null, 'File'),
      O.exports.createElement('path', {
        clipRule: 'evenodd',
        d:
          'M4.5 4.33325C4.5 4.05711 4.72386 3.83325 5 3.83325H8.16675V6.56659C8.16675 6.89795 8.43538 7.16658 8.76675 7.16658H11.5V12.3333C11.5 12.6094 11.2761 12.8333 11 12.8333H5C4.72386 12.8333 4.5 12.6094 4.5 12.3333V4.33325ZM12.5 6.67568C12.5001 6.67265 12.5001 6.66962 12.5001 6.66658C12.5001 6.66355 12.5001 6.66052 12.5 6.65749V6.41413C12.5 6.01631 12.342 5.63478 12.0607 5.35347L9.97978 3.27259C9.69848 2.99129 9.31694 2.83325 8.91912 2.83325H8.66675H5C4.17157 2.83325 3.5 3.50483 3.5 4.33325V12.3333C3.5 13.1617 4.17157 13.8333 5 13.8333H11C11.8284 13.8333 12.5 13.1617 12.5 12.3333V6.67568ZM9.16675 3.89888C9.20518 3.92078 9.24085 3.94787 9.27267 3.9797L11.3536 6.06058C11.3854 6.09243 11.4125 6.12813 11.4344 6.16658H9.16675V3.89888Z',
        fillRule: 'evenodd',
      }),
    ),
  vd = () =>
    O.exports.createElement(
      ut,
      { stroke: 'currentColor' },
      O.exports.createElement('title', null, 'Close file'),
      O.exports.createElement('path', {
        d: 'M12 4L4 12',
        strokeLinecap: 'round',
      }),
      O.exports.createElement('path', {
        d: 'M4 4L12 12',
        strokeLinecap: 'round',
      }),
    ),
  ds = () =>
    O.exports.createElement(
      ut,
      null,
      O.exports.createElement('title', null, 'Open browser console'),
      O.exports.createElement('path', {
        d:
          'M5.65871 3.62037C5.44905 3.44066 5.1334 3.46494 4.95368 3.6746C4.77397 3.88427 4.79825 4.19992 5.00792 4.37963L5.65871 3.62037ZM5.00792 11.6204C4.79825 11.8001 4.77397 12.1157 4.95368 12.3254C5.1334 12.5351 5.44905 12.5593 5.65871 12.3796L5.00792 11.6204ZM9.9114 7.92407L10.2368 7.54445L9.9114 7.92407ZM5.00792 4.37963L9.586 8.3037L10.2368 7.54445L5.65871 3.62037L5.00792 4.37963ZM9.586 7.6963L5.00792 11.6204L5.65871 12.3796L10.2368 8.45555L9.586 7.6963ZM9.586 8.3037C9.39976 8.14407 9.39976 7.85594 9.586 7.6963L10.2368 8.45555C10.5162 8.2161 10.5162 7.7839 10.2368 7.54445L9.586 8.3037Z',
      }),
      O.exports.createElement('path', {
        d:
          'M10 11.5C9.72386 11.5 9.5 11.7239 9.5 12C9.5 12.2761 9.72386 12.5 10 12.5V11.5ZM14.6667 12.5C14.9428 12.5 15.1667 12.2761 15.1667 12C15.1667 11.7239 14.9428 11.5 14.6667 11.5V12.5ZM10 12.5H14.6667V11.5H10V12.5Z',
      }),
    ),
  Ji = {
    colors: {
      surface1: '#ffffff',
      surface2: '#EFEFEF',
      surface3: '#F3F3F3',
      disabled: '#C5C5C5',
      base: '#323232',
      clickable: '#808080',
      hover: '#4D4D4D',
      accent: '#3973E0',
      error: '#EA3323',
      errorSurface: '#FCF1F0',
      warning: '#6A4516',
      warningSurface: '#FEF2C0',
    },
    syntax: {
      plain: '#151515',
      comment: { color: '#999', fontStyle: 'italic' },
      keyword: '#7C5AE3',
      tag: '#0971F1',
      punctuation: '#3B3B3B',
      definition: '#85A600',
      property: '#3B3B3B',
      static: '#3B3B3B',
      string: '#2E6BD0',
    },
    font: {
      body:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono:
        '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
      size: '13px',
      lineHeight: '20px',
    },
  },
  Ur = {
    colors: {
      surface1: '#151515',
      surface2: '#252525',
      surface3: '#2F2F2F',
      disabled: '#4D4D4D',
      base: '#808080',
      clickable: '#999999',
      hover: '#C5C5C5',
      accent: '#E5E5E5',
      error: '#FFB4A6',
      errorSurface: '#690000',
      warning: '#E7C400',
      warningSurface: '#3A3000',
    },
    syntax: {
      plain: '#FFFFFF',
      comment: { color: '#757575', fontStyle: 'italic' },
      keyword: '#77B7D7',
      tag: '#DFAB5C',
      punctuation: '#ffffff',
      definition: '#86D9CA',
      property: '#77B7D7',
      static: '#C64640',
      string: '#977CDC',
    },
    font: {
      body:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono:
        '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
      size: '13px',
      lineHeight: '20px',
    },
  },
  kh,
  Sd = {
    light: Ji,
    dark: Ur,
    auto:
      typeof window < 'u' &&
      ((kh = window?.matchMedia) == null
        ? void 0
        : kh.call(window, '(prefers-color-scheme: dark)').matches)
        ? Ur
        : Ji,
  },
  L = (...r) => r.filter(Boolean).join(' '),
  Vr = (r) => {
    let e = r.lastIndexOf('/');
    return r.slice(e + 1);
  },
  LQ = (r, e) => {
    let t = (r[0] === '/' ? r.slice(1) : r).split('/'),
      n = [];
    if (t.length === 1) n.unshift(t[0]);
    else
      for (let s = 0; s < e.length; s++) {
        let o = e[s].split('/');
        for (let l = 1; l <= t.length; l++) {
          let a = t[t.length - l],
            c = o[o.length - l];
          if ((n.length < l && n.unshift(a), a !== c)) break;
        }
      }
    return n.length < t.length && n.unshift('..'), n.join('/');
  },
  _Q = (r) => {
    let e = 0,
      t = 0,
      n = 0;
    if (r.startsWith('#')) {
      if (r.length < 7) return !0;
      (e = parseInt(r.substr(1, 2), 16)),
        (t = parseInt(r.substr(3, 2), 16)),
        (n = parseInt(r.substr(5, 2), 16));
    } else {
      let s = r
        .replace('rgb(', '')
        .replace('rgba(', '')
        .replace(')', '')
        .split(',');
      if (s.length < 3) return !0;
      (e = parseInt(s[0], 10)),
        (t = parseInt(s[1], 10)),
        (n = parseInt(s[2], 10));
    }
    return (e * 299 + t * 587 + n * 114) / 1e3 < 128;
  },
  il = () => Math.floor(Math.random() * 1e4).toString(),
  Pn = () => '',
  nl = () => Pn,
  $d = Object.getOwnPropertyDescriptors({ toString: Pn });
Object.defineProperties(Pn, $d);
Object.defineProperties(nl, $d);
var XQ = { createTheme: Pn, css: nl, getCssText: Pn, keyframes: nl },
  N = 'sp',
  ZQ = () => (typeof process < 'u' ? process.env.SANDPACK_BARE_COMPONENTS : !1),
  { createTheme: DQ, css: Z, getCssText: IQ, keyframes: kd } = ZQ()
    ? XQ
    : sm({ prefix: N }),
  MQ = {
    space: new Array(11)
      .fill(' ')
      .reduce((r, e, t) => ({ ...r, [t + 1]: `${(t + 1) * 4}px` }), {}),
    border: { radius: '4px' },
    layout: { height: '300px', headerHeight: '40px' },
    transitions: { default: '150ms ease' },
    zIndices: { base: '1', overlay: '2', top: '3' },
  },
  jQ = (r) => {
    let e = Object.entries(r.syntax).reduce((t, [n, s]) => {
      let o = { [`color-${n}`]: s };
      return (
        typeof s == 'object' &&
          (o = Object.entries(s).reduce(
            (l, [a, c]) => ({ ...l, [`${a}-${n}`]: c }),
            {},
          )),
        { ...t, ...o }
      );
    }, {});
    return { ...MQ, colors: r.colors, font: r.font, syntax: e };
  },
  zQ = (r = 'light') => {
    var e, t, n, s, o;
    let l = 'default';
    if (typeof r == 'string') {
      let m = Sd[r];
      if (!m)
        throw new Error(`[sandpack-react]: invalid theme '${r}' provided.`);
      return { theme: m, id: r, mode: 'light' };
    }
    let a = _Q(
        (t = (e = r?.colors) == null ? void 0 : e.surface1) != null
          ? t
          : Ji.colors.surface1,
      )
        ? 'dark'
        : 'light',
      c = a === 'dark' ? Ur : Ji,
      h = { ...c.colors, ...((n = r?.colors) != null ? n : {}) },
      u = { ...c.syntax, ...((s = r?.syntax) != null ? s : {}) },
      f = { ...c.font, ...((o = r?.font) != null ? o : {}) },
      d = { colors: h, syntax: u, font: f },
      p = r ? NQ(JSON.stringify(d)) : l;
    return { theme: d, id: `sp-${p}`, mode: a };
  },
  NQ = (r) => {
    let e = 0;
    for (let t = 0; t < r.length; e &= e) e = 31 * e + r.charCodeAt(t++);
    return Math.abs(e);
  },
  BQ = Z({
    all: 'initial',
    fontSize: '$font$size',
    fontFamily: '$font$body',
    display: 'block',
    boxSizing: 'border-box',
    textRendering: 'optimizeLegibility',
    WebkitTapHighlightColor: 'transparent',
    WebkitFontSmoothing: 'subpixel-antialiased',
    variants: {
      variant: {
        dark: { colorScheme: 'dark' },
        light: { colorScheme: 'light' },
      },
    },
    '@media screen and (min-resolution: 2dppx)': {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    '*': { boxSizing: 'border-box' },
    '.sp-wrapper:focus': { outline: '0' },
  }),
  ps = O.exports.createContext({ theme: Ji, id: 'light', mode: 'light' }),
  wd = ({ theme: r, children: e, className: t, ...n }) => {
    let { theme: s, id: o, mode: l } = zQ(r),
      a = me(N),
      c = O.exports.useMemo(() => DQ(o, jQ(s)), [s, o]);
    return O.exports.createElement(
      ps.Provider,
      { value: { theme: s, id: o, mode: l } },
      O.exports.createElement(
        'div',
        {
          className: L(a('wrapper'), c.toString(), BQ({ variant: l }), t),
          ...n,
        },
        e,
      ),
    );
  },
  UQ = ps.Consumer,
  Td = {
    files: {
      '/src/app/app.component.css': {
        code: `div {
  text-align: center;
}        
`,
      },
      '/src/app/app.component.html': {
        code: `<div>
<h1>{{ helloWorld }}</h1>
</div>     
`,
      },
      '/src/app/app.component.ts': {
        code: `import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  helloWorld = "Hello World";
}           
`,
      },
      '/src/app/app.module.ts': {
        code: `import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
      
import { AppComponent } from "./app.component";
      
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}       
`,
      },
      '/src/index.html': {
        code: `<!doctype html>
<html lang="en">
      
<head>
  <meta charset="utf-8">
  <title>Angular</title>
  <base href="/">
      
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
      
<body>
   <app-root></app-root>
</body>
      
</html>
`,
      },
      '/src/main.ts': {
        code: `import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
      
import { AppModule } from "./app/app.module";      

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
      
`,
      },
      '/src/polyfills.ts': {
        code: `import "core-js/proposals/reflect-metadata";   
      import "zone.js/dist/zone";
`,
      },
      '/package.json': {
        code: JSON.stringify({
          dependencies: {
            '@angular/core': '^11.2.0',
            '@angular/platform-browser': '^11.2.0',
            '@angular/platform-browser-dynamic': '^11.2.0',
            '@angular/common': '^11.2.0',
            '@angular/compiler': '^11.2.0',
            'zone.js': '0.11.3',
            'core-js': '3.8.3',
            rxjs: '6.6.3',
          },
          main: '/src/main.ts',
        }),
      },
    },
    main: '/src/app/app.component.ts',
    environment: 'angular-cli',
  },
  Pd = {
    files: {
      '/App.js': {
        code: `export default function App() {
  return <h1>Hello World</h1>
}
`,
      },
      '/index.js': {
        code: `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
      },
      '/styles.css': {
        code: `body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}`,
      },
      '/public/index.html': {
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`,
      },
      '/package.json': {
        code: JSON.stringify({
          dependencies: {
            react: '^18.0.0',
            'react-dom': '^18.0.0',
            'react-scripts': '^4.0.0',
          },
          main: '/index.js',
        }),
      },
    },
    main: '/App.js',
    environment: 'create-react-app',
  },
  Rd = {
    files: {
      'tsconfig.json': {
        code: `{
  "include": [
    "./**/*"
  ],
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": [ "dom", "es2015" ],
    "jsx": "react-jsx"
  }
}`,
      },
      '/App.tsx': {
        code: `export default function App(): JSX.Element {
  return <h1>Hello World</h1>
}
`,
      },
      '/index.tsx': {
        code: `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
      },
      '/styles.css': {
        code: `body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}`,
      },
      '/public/index.html': {
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`,
      },
      '/package.json': {
        code: JSON.stringify({
          dependencies: {
            react: '^18.0.0',
            'react-dom': '^18.0.0',
            'react-scripts': '^4.0.0',
          },
          devDependencies: {
            '@types/react': '^18.0.0',
            '@types/react-dom': '^18.0.0',
            typescript: '^4.0.0',
          },
          main: '/index.tsx',
        }),
      },
    },
    main: '/App.tsx',
    environment: 'create-react-app',
  },
  Cd = {
    files: {
      '/App.tsx': {
        code: `import { Component } from "solid-js";

const App: Component = () => {
  return <h1>Hello World</h1>;
};

export default App;`,
      },
      '/index.tsx': {
        code: `import { render } from "solid-js/web";
import App from "./App";

import "./styles.css";

render(() => <App />, document.getElementById("app"));`,
      },
      '/styles.css': {
        code: `body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}`,
      },
      '/index.html': {
        code: `<html>
<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
</head>
<body>
  <div id="app"></div>
  <script src="src/index.tsx"><\/script>
</body>
</html>`,
      },
      '/package.json': {
        code: JSON.stringify({
          dependencies: { 'solid-js': '1.3.15' },
          main: '/index.tsx',
        }),
      },
    },
    main: '/App.tsx',
    environment: 'solid',
  },
  Wd = {
    files: {
      '/App.svelte': {
        code: `<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<script>
  let name = 'World';
<\/script>

<main>
  <h1>Hello {name}</h1>
</main>`,
      },
      '/index.js': {
        code: `import App from "./App.svelte";

const app = new App({
  target: document.body
});

export default app;
      `,
      },
      '/public/index.html': {
        code: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf8" />
    <meta name="viewport" content="width=device-width" />

    <title>Svelte app</title>

    <link rel="stylesheet" href="public/bundle.css" />
  </head>

  <body>
    <script src="bundle.js"><\/script>
  </body>
</html>`,
      },
      '/package.json': {
        code: JSON.stringify({
          dependencies: { svelte: '^3.0.0' },
          main: '/index.js',
        }),
      },
    },
    main: '/index.js',
    environment: 'svelte',
  },
  Ad = {
    files: {
      'tsconfig.json': {
        code: `{
  "include": [
    "./**/*"
  ],
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": [ "dom", "es2015" ],
    "jsx": "react-jsx"
  }
}`,
      },
      '/add.ts': {
        code: 'export const add = (a: number, b: number): number => a + b;',
      },
      '/add.test.ts': {
        code: `import { add } from './add';

describe('add', () => {
  test('Commutative Law of Addition', () => {
    expect(add(1, 2)).toBe(add(2, 1));
  });
});`,
      },
      'package.json': {
        code: JSON.stringify({
          dependencies: {},
          devDependencies: { typescript: '^4.0.0' },
          main: '/add.ts',
        }),
      },
    },
    main: '/add.test.ts',
    environment: 'parcel',
    mode: 'tests',
  },
  Ed = {
    files: {
      '/src/index.js': {
        code: `import "./styles.css";

document.getElementById("app").innerHTML = \`
<h1>Hello World</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
\`;
`,
      },
      '/src/styles.css': {
        code: `body {
  font-family: sans-serif;
}
      `,
      },
      '/index.html': {
        code: `<!DOCTYPE html>
<html>

<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
</head>

<body>
  <div id="app"></div>

  <script src="src/index.js">
  <\/script>
</body>

</html>`,
      },
      '/package.json': {
        code: JSON.stringify({ dependencies: {}, main: '/src/index.js' }),
      },
    },
    main: '/src/index.js',
    environment: 'parcel',
  },
  Ld = {
    files: {
      'tsconfig.json': {
        code: `{
  "compilerOptions": {
    "strict": true,
    "module": "commonjs",
    "jsx": "preserve",
    "esModuleInterop": true,
    "sourceMap": true,
    "allowJs": true,
    "lib": [
      "es6",
      "dom"
    ],
    "rootDir": "src",
    "moduleResolution": "node"
  }
}`,
      },
      '/src/index.ts': {
        code: `import "./styles.css";

document.getElementById("app").innerHTML = \`
<h1>Hello World</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
\`;
`,
      },
      '/src/styles.css': {
        code: `body {
  font-family: sans-serif;
}
      `,
      },
      '/index.html': {
        code: `<!DOCTYPE html>
<html>

<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
</head>

<body>
  <div id="app"></div>

  <script src="src/index.ts">
  <\/script>
</body>

</html>`,
      },
      '/package.json': {
        code: JSON.stringify({
          dependencies: {},
          devDependencies: { typescript: '^4.0.0' },
          main: '/src/index.ts',
        }),
      },
    },
    main: '/src/index.ts',
    environment: 'parcel',
  },
  _d = {
    files: {
      '/src/App.vue': {
        code: `<template>
  <main id="app">
    <h1>Hello World</h1>
  </main>
</template>

<script>
export default {
  name: "App",
};
<\/script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
`,
      },
      '/src/main.js': {
        code: `import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
`,
      },
      '/public/index.html': {
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <title>codesandbox</title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but codesandbox doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
`,
      },
      '/package.json': {
        code: JSON.stringify({
          dependencies: { vue: '^2.6.11', '@vue/cli-plugin-babel': '4.1.1' },
          main: '/src/main.js',
        }),
      },
    },
    main: '/src/App.vue',
    environment: 'vue-cli',
  },
  Xd = {
    files: {
      '/src/App.vue': {
        code: `<template>
  <main id="app">
    <h1>{{ helloWorld }}</h1>
  </main>
</template>
                             
<script>
import { ref } from "vue";
export default {
   name: "App",
   setup() {
      const helloWorld = ref("Hello World");
      return { helloWorld };
   }
};
<\/script>
                             
<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>   
`,
      },
      '/src/main.js': {
        code: `import { createApp } from 'vue'
import App from './App.vue'
            
createApp(App).mount('#app')            
`,
      },
      '/public/index.html': {
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>codesandbox</title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but codesandbox doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
`,
      },
      '/package.json': {
        code: JSON.stringify({
          dependencies: {
            'core-js': '^3.6.5',
            vue: '^3.0.0-0',
            '@vue/cli-plugin-babel': '4.5.0',
          },
          main: '/src/main.js',
        }),
      },
    },
    main: '/src/App.vue',
    environment: 'vue-cli',
  },
  Yr = {
    react: Pd,
    'react-ts': Rd,
    vue: _d,
    vanilla: Ed,
    'vanilla-ts': Ld,
    vue3: Xd,
    angular: Td,
    svelte: Wd,
    solid: Cd,
    'test-ts': Ad,
  },
  lr = (r) => {
    var e, t, n, s, o, l;
    let a = Si(r.files),
      c = VQ({ template: r.template, customSetup: r.customSetup, files: a }),
      h = Si(
        (t = (e = r.options) == null ? void 0 : e.visibleFiles) != null
          ? t
          : [],
      ),
      u =
        (n = r.options) != null && n.activeFile
          ? wh((s = r.options) == null ? void 0 : s.activeFile, a || {})
          : void 0;
    h.length === 0 &&
      a &&
      Object.keys(a).forEach((d) => {
        let p = a[d];
        if (typeof p == 'string') {
          h.push(d);
          return;
        }
        !u && p.active && ((u = d), p.hidden === !0 && h.push(d)),
          p.hidden || h.push(d);
      }),
      h.length === 0 && (h = [c.main]),
      c.files[c.entry] || (c.entry = wh(c.entry, c.files)),
      !u && c.main && (u = c.main),
      (!u || !c.files[u]) && (u = h[0]),
      h.includes(u) || h.push(u);
    let f = Nh(
      c.files,
      (o = c.dependencies) != null ? o : {},
      (l = c.devDependencies) != null ? l : {},
      c.entry,
    );
    return {
      visibleFiles: h.filter((d) => f[d]),
      activeFile: u,
      files: f,
      environment: c.environment,
    };
  },
  wh = (r, e) => {
    let t = Si(e),
      n = Si(r);
    if (n in t) return n;
    if (!r) return null;
    let s = null,
      o = 0,
      l = ['.js', '.jsx', '.ts', '.tsx'];
    for (; !s && o < l.length; ) {
      let a = `${n.split('.')[0]}${l[o]}`;
      t[a] !== void 0 && (s = a), o++;
    }
    return s;
  },
  VQ = ({ files: r, template: e, customSetup: t }) => {
    if (!e) {
      if (!t) return Yr.vanilla;
      if (!r || Object.keys(r).length === 0)
        throw new Error(
          '[sandpack-react]: without a template, you must pass at least one file',
        );
      return { ...t, files: rl(r) };
    }
    let n = Yr[e];
    if (!n)
      throw new Error(`[sandpack-react]: invalid template "${e}" provided`);
    return !t && !r
      ? n
      : {
          files: rl({ ...n.files, ...r }),
          dependencies: { ...n.dependencies, ...t?.dependencies },
          devDependencies: { ...n.devDependencies, ...t?.devDependencies },
          entry: Si(t?.entry || n.entry),
          main: n.main,
          environment: t?.environment || n.environment,
        };
  },
  rl = (r) =>
    r
      ? Object.keys(r).reduce(
          (e, t) => (
            typeof r[t] == 'string' ? (e[t] = { code: r[t] }) : (e[t] = r[t]), e
          ),
          {},
        )
      : {},
  Os = O.exports.createContext(null),
  YQ = 3e4,
  Zd = class extends O.exports.PureComponent {
    constructor(r) {
      super(r),
        (this.timeoutHook = null),
        (this.initializeSandpackIframeHook = null),
        (this.handleMessage = (h) => {
          this.timeoutHook && clearTimeout(this.timeoutHook),
            h.type === 'state'
              ? this.setState({ bundlerState: h.state })
              : h.type === 'done' && !h.compilatonError
              ? this.setState({ error: null })
              : h.type === 'action' && h.action === 'show-error'
              ? this.setState({ error: Bh(h) })
              : h.type === 'action' &&
                h.action === 'notification' &&
                h.notificationType === 'error' &&
                this.setState({ error: { message: h.title } });
        }),
        (this.registerReactDevTools = (h) => {
          this.setState({ reactDevTools: h });
        }),
        (this.updateCurrentFile = (h) => {
          this.updateFile(this.state.activeFile, h);
        }),
        (this.updateFile = (h, u) => {
          var f;
          let d = this.state.files;
          if (typeof h == 'string' && u) {
            if (u === ((f = this.state.files[h]) == null ? void 0 : f.code))
              return;
            d = { ...d, [h]: { code: u } };
          } else typeof h == 'object' && (d = { ...d, ...rl(h) });
          this.setState({ files: Si(d) }, this.updateClients);
        }),
        (this.updateClients = () => {
          var h, u, f, d;
          let { files: p, sandpackStatus: m } = this.state,
            S =
              (u =
                (h = this.props.options) == null ? void 0 : h.recompileMode) !=
              null
                ? u
                : 'delayed',
            T =
              (d =
                (f = this.props.options) == null ? void 0 : f.recompileDelay) !=
              null
                ? d
                : 500;
          m === 'running' &&
            (S === 'immediate' &&
              Object.values(this.clients).forEach((k) => {
                k.updatePreview({ files: p });
              }),
            S === 'delayed' &&
              (window.clearTimeout(this.debounceHook),
              (this.debounceHook = window.setTimeout(() => {
                Object.values(this.clients).forEach((k) => {
                  k.updatePreview({ files: this.state.files });
                });
              }, T))));
        }),
        (this.createClient = (h, u) => {
          var f, d, p, m, S, T, k, b, Q;
          let v = new WO(
            h,
            { files: this.state.files, template: this.state.environment },
            {
              externalResources:
                (f = this.props.options) == null ? void 0 : f.externalResources,
              bundlerURL:
                (d = this.props.options) == null ? void 0 : d.bundlerURL,
              startRoute:
                (p = this.props.options) == null ? void 0 : p.startRoute,
              fileResolver:
                (m = this.props.options) == null ? void 0 : m.fileResolver,
              skipEval:
                (T = (S = this.props.options) == null ? void 0 : S.skipEval) !=
                null
                  ? T
                  : !1,
              logLevel: (k = this.props.options) == null ? void 0 : k.logLevel,
              showOpenInCodeSandbox: !this.openInCSBRegistered.current,
              showErrorScreen: !this.errorScreenRegistered.current,
              showLoadingScreen: !this.loadingScreenRegistered.current,
              reactDevTools: this.state.reactDevTools,
              customNpmRegistries:
                (Q =
                  (b = this.props.customSetup) == null
                    ? void 0
                    : b.npmRegistries) == null
                  ? void 0
                  : Q.map((P) => ({ ...P, proxyEnabled: !1 })),
            },
          );
          return (
            typeof this.unsubscribe != 'function' &&
              ((this.unsubscribe = v.listen(this.handleMessage)),
              (this.timeoutHook = setTimeout(() => {
                this.setState({ sandpackStatus: 'timeout' });
              }, YQ))),
            (this.unsubscribeClientListeners[u] =
              this.unsubscribeClientListeners[u] || {}),
            this.queuedListeners[u] &&
              (Object.keys(this.queuedListeners[u]).forEach((P) => {
                let y = this.queuedListeners[u][P],
                  w = v.listen(y);
                this.unsubscribeClientListeners[u][P] = w;
              }),
              (this.queuedListeners[u] = {})),
            Object.entries(this.queuedListeners.global).forEach(([P, y]) => {
              let w = v.listen(y);
              this.unsubscribeClientListeners[u][P] = w;
            }),
            v
          );
        }),
        (this.runSandpack = () => {
          Object.keys(this.preregisteredIframes).forEach((h) => {
            let u = this.preregisteredIframes[h];
            this.clients[h] = this.createClient(u, h);
          }),
            this.setState({ sandpackStatus: 'running' });
        }),
        (this.registerBundler = (h, u) => {
          this.state.sandpackStatus === 'running'
            ? (this.clients[u] = this.createClient(h, u))
            : (this.preregisteredIframes[u] = h);
        }),
        (this.unregisterBundler = (h) => {
          var u;
          let f = this.clients[h];
          f
            ? (f.cleanup(),
              (u = f.iframe.contentWindow) == null ||
                u.location.replace('about:blank'),
              delete this.clients[h])
            : delete this.preregisteredIframes[h],
            this.timeoutHook && clearTimeout(this.timeoutHook),
            Object.values(this.unsubscribeClientListeners).forEach((d) => {
              Object.values(d).forEach((p) => p());
            }),
            this.setState({ sandpackStatus: 'idle' });
        }),
        (this.unregisterAllClients = () => {
          Object.keys(this.clients).map(this.unregisterBundler),
            typeof this.unsubscribe == 'function' &&
              (this.unsubscribe(), (this.unsubscribe = void 0));
        }),
        (this.setActiveFile = (h) => {
          this.setState({ activeFile: h });
        }),
        (this.openFile = (h) => {
          this.setState(({ visibleFiles: u }) => {
            let f = u.includes(h) ? u : [...u, h];
            return { activeFile: h, visibleFiles: f };
          });
        }),
        (this.closeFile = (h) => {
          this.state.visibleFiles.length !== 1 &&
            this.setState(({ visibleFiles: u, activeFile: f }) => {
              let d = u.indexOf(h),
                p = u.filter((m) => m !== h);
              return {
                activeFile: h === f ? (d === 0 ? u[1] : u[d - 1]) : f,
                visibleFiles: p,
              };
            });
        }),
        (this.deleteFile = (h) => {
          this.setState(({ visibleFiles: u, files: f }) => {
            let d = { ...f };
            return (
              delete d[h], { visibleFiles: u.filter((p) => p !== h), files: d }
            );
          }, this.updateClients);
        }),
        (this.addFile = this.updateFile),
        (this.dispatchMessage = (h, u) => {
          if (this.state.sandpackStatus !== 'running') {
            console.warn(
              '[sandpack-react]: dispatch cannot be called while in idle mode',
            );
            return;
          }
          u
            ? this.clients[u].dispatch(h)
            : Object.values(this.clients).forEach((f) => {
                f.dispatch(h);
              });
        }),
        (this.addListener = (h, u) => {
          if (u) {
            if (this.clients[u]) return this.clients[u].listen(h);
            {
              let f = il();
              return (
                (this.queuedListeners[u] = this.queuedListeners[u] || {}),
                (this.unsubscribeClientListeners[u] =
                  this.unsubscribeClientListeners[u] || {}),
                (this.queuedListeners[u][f] = h),
                () => {
                  this.queuedListeners[u][f]
                    ? delete this.queuedListeners[u][f]
                    : this.unsubscribeClientListeners[u][f] &&
                      (this.unsubscribeClientListeners[u][f](),
                      delete this.unsubscribeClientListeners[u][f]);
                }
              );
            }
          } else {
            let f = il();
            this.queuedListeners.global[f] = h;
            let d = Object.values(this.clients).map((p) => p.listen(h));
            return () => {
              d.forEach((p) => p());
            };
          }
        }),
        (this.resetFile = (h) => {
          let { files: u } = lr({
            template: this.props.template,
            files: this.props.files,
            customSetup: this.props.customSetup,
            options: this.props.options,
          });
          this.setState(
            (f) => ({ files: { ...f.files, [h]: u[h] } }),
            this.updateClients,
          );
        }),
        (this.resetAllFiles = () => {
          let { files: h } = lr({
            template: this.props.template,
            files: this.props.files,
            customSetup: this.props.customSetup,
            options: this.props.options,
          });
          this.setState({ files: h }, this.updateClients);
        }),
        (this._getSandpackState = () => {
          let {
            files: h,
            activeFile: u,
            visibleFiles: f,
            visibleFilesFromProps: d,
            startRoute: p,
            bundlerState: m,
            editorState: S,
            error: T,
            sandpackStatus: k,
            environment: b,
            initMode: Q,
          } = this.state;
          return {
            files: h,
            environment: b,
            visibleFiles: f,
            visibleFilesFromProps: d,
            activeFile: u,
            startRoute: p,
            error: T,
            bundlerState: m,
            status: k,
            editorState: S,
            initMode: Q,
            clients: this.clients,
            dispatch: this.dispatchMessage,
            errorScreenRegisteredRef: this.errorScreenRegistered,
            lazyAnchorRef: this.lazyAnchorRef,
            listen: this.addListener,
            loadingScreenRegisteredRef: this.loadingScreenRegistered,
            openInCSBRegisteredRef: this.openInCSBRegistered,
            registerBundler: this.registerBundler,
            runSandpack: this.runSandpack,
            unregisterBundler: this.unregisterBundler,
            registerReactDevTools: this.registerReactDevTools,
            openFile: this.openFile,
            resetFile: this.resetFile,
            resetAllFiles: this.resetAllFiles,
            setActiveFile: this.setActiveFile,
            updateCurrentFile: this.updateCurrentFile,
            updateFile: this.updateFile,
            addFile: this.addFile,
            closeFile: this.closeFile,
            deleteFile: this.deleteFile,
          };
        });
      var e, t, n, s;
      let { activeFile: o, visibleFiles: l, files: a, environment: c } = lr({
        template: r.template,
        files: r.files,
        customSetup: r.customSetup,
        options: r.options,
      });
      (this.state = {
        files: a,
        environment: c,
        visibleFiles: l,
        visibleFilesFromProps: l,
        activeFile: o,
        startRoute: (e = this.props.options) == null ? void 0 : e.startRoute,
        bundlerState: void 0,
        error: null,
        sandpackStatus:
          (n = (t = this.props.options) == null ? void 0 : t.autorun) == null ||
          n
            ? 'initial'
            : 'idle',
        editorState: 'pristine',
        initMode:
          ((s = this.props.options) == null ? void 0 : s.initMode) || 'lazy',
        reactDevTools: void 0,
      }),
        (this.queuedListeners = { global: {} }),
        (this.unsubscribeClientListeners = {}),
        (this.preregisteredIframes = {}),
        (this.clients = {}),
        (this.lazyAnchorRef = O.exports.createRef()),
        (this.errorScreenRegistered = O.exports.createRef()),
        (this.openInCSBRegistered = O.exports.createRef()),
        (this.loadingScreenRegistered = O.exports.createRef());
    }
    initializeSandpackIframe() {
      var r, e, t, n, s;
      if (
        !(
          (e = (r = this.props.options) == null ? void 0 : r.autorun) == null ||
          e
        )
      )
        return;
      let o =
        (n =
          (t = this.props.options) == null
            ? void 0
            : t.initModeObserverOptions) != null
          ? n
          : { rootMargin: '1000px 0px' };
      this.intersectionObserver &&
        this.lazyAnchorRef.current &&
        ((s = this.intersectionObserver) == null ||
          s.unobserve(this.lazyAnchorRef.current)),
        this.lazyAnchorRef.current && this.state.initMode === 'lazy'
          ? ((this.intersectionObserver = new IntersectionObserver((l) => {
              var a;
              l.some((c) => c.isIntersecting) &&
                ((this.initializeSandpackIframeHook = setTimeout(() => {
                  this.runSandpack();
                }, 50)),
                this.lazyAnchorRef.current &&
                  ((a = this.intersectionObserver) == null ||
                    a.unobserve(this.lazyAnchorRef.current)));
            }, o)),
            this.intersectionObserver.observe(this.lazyAnchorRef.current))
          : this.lazyAnchorRef.current && this.state.initMode === 'user-visible'
          ? ((this.intersectionObserver = new IntersectionObserver((l) => {
              l.some((a) => a.isIntersecting)
                ? (this.initializeSandpackIframeHook = setTimeout(() => {
                    this.runSandpack();
                  }, 50))
                : (this.initializeSandpackIframeHook &&
                    clearTimeout(this.initializeSandpackIframeHook),
                  Object.keys(this.clients).map(this.unregisterBundler),
                  this.unregisterAllClients());
            }, o)),
            this.intersectionObserver.observe(this.lazyAnchorRef.current))
          : (this.initializeSandpackIframeHook = setTimeout(
              () => this.runSandpack(),
              50,
            ));
    }
    componentDidMount() {
      this.initializeSandpackIframe();
    }
    componentDidUpdate(r) {
      var e, t, n, s;
      ((e = r.options) == null ? void 0 : e.initMode) !==
        ((t = this.props.options) == null ? void 0 : t.initMode) &&
        ((n = this.props.options) == null ? void 0 : n.initMode) &&
        this.setState(
          { initMode: (s = this.props.options) == null ? void 0 : s.initMode },
          this.initializeSandpackIframe,
        );
      let { activeFile: o, visibleFiles: l, files: a, environment: c } = lr({
        template: this.props.template,
        files: this.props.files,
        customSetup: this.props.customSetup,
        options: this.props.options,
      });
      if (
        r.template !== this.props.template ||
        !dn(r.options, this.props.options) ||
        !dn(r.customSetup, this.props.customSetup) ||
        !dn(r.files, this.props.files)
      ) {
        if (
          (this.setState({
            activeFile: o,
            visibleFiles: l,
            visibleFilesFromProps: l,
            files: a,
            environment: c,
          }),
          this.state.sandpackStatus !== 'running')
        )
          return;
        Object.values(this.clients).forEach((u) =>
          u.updatePreview({ files: a, template: c }),
        );
      }
      let h = dn(a, this.state.files) ? 'pristine' : 'dirty';
      h !== this.state.editorState && this.setState({ editorState: h });
    }
    componentWillUnmount() {
      typeof this.unsubscribe == 'function' && this.unsubscribe(),
        this.timeoutHook && clearTimeout(this.timeoutHook),
        this.debounceHook && clearTimeout(this.debounceHook),
        this.initializeSandpackIframeHook &&
          clearTimeout(this.initializeSandpackIframeHook),
        this.intersectionObserver && this.intersectionObserver.disconnect();
    }
    render() {
      var r;
      let { children: e, theme: t, className: n, style: s } = this.props;
      return O.exports.createElement(
        Os.Provider,
        { value: this._getSandpackState() },
        O.exports.createElement(
          Mh,
          { classes: (r = this.props.options) == null ? void 0 : r.classes },
          O.exports.createElement(wd, { className: n, style: s, theme: t }, e),
        ),
      );
    }
  },
  Dd = Zd,
  qQ = Os.Consumer;
function ve() {
  let r = O.exports.useContext(Os);
  if (r === null)
    throw new Error(
      '[sandpack-react]: "useSandpack" must be wrapped by a "SandpackProvider"',
    );
  let { dispatch: e, listen: t, ...n } = r;
  return { sandpack: { ...n }, dispatch: e, listen: t };
}
var Bl = () => {
    var r, e, t;
    let { sandpack: n } = ve();
    return {
      code: (r = n.files[n.activeFile]) == null ? void 0 : r.code,
      readOnly:
        (t = (e = n.files[n.activeFile]) == null ? void 0 : e.readOnly) != null
          ? t
          : !1,
      updateCode: n.updateCurrentFile,
    };
  },
  tn = Z({ svg: { margin: 'auto' } }),
  Ve = Z({
    appearance: 'none',
    border: '0',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    backgroundColor: 'transparent',
    transition: 'color $default, background $default',
    cursor: 'pointer',
    color: '$colors$clickable',
    '&:disabled': { color: '$colors$disabled' },
    "&:hover:not(:disabled,[data-active='true'])": { color: '$colors$hover' },
    '&[data-active="true"]': { color: '$colors$accent' },
    svg: { minWidth: '$space$4', width: '$space$4', height: '$space$4' },
    [`&.${tn}`]: {
      padding: '$space$1',
      width: '$space$7',
      height: '$space$7',
      display: 'flex',
    },
  }),
  Ri = Z({
    backgroundColor: '$colors$surface2',
    borderRadius: '99999px',
    '&[data-active="true"]': {
      color: '$colors$surface1',
      background: '$colors$accent',
    },
    "&:hover:not(:disabled,[data-active='true'])": {
      backgroundColor: '$colors$surface3',
    },
  }),
  GQ = Z({ padding: 0 }),
  FQ = kd({
    '0%': { opacity: 0, transform: 'translateY(4px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  }),
  sl = Z({
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    top: '0',
    margin: '0',
    overflow: 'auto',
    height: '100%',
    zIndex: '$top',
  }),
  Id = Z({
    padding: '$space$4',
    whiteSpace: 'pre-wrap',
    fontFamily: '$font$mono',
    backgroundColor: '$colors$errorSurface',
  }),
  Sr = Z({ animation: `${FQ} 150ms ease`, color: '$colors$error' }),
  HQ = Z({
    borderBottom: '1px solid $colors$surface2',
    background: '$colors$surface1',
  }),
  JQ = Z({
    padding: '0 $space$2',
    overflow: 'auto',
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'stretch',
    minHeight: '40px',
    marginBottom: '-1px',
  }),
  Md = Z({
    padding: '0 $space$1 0 $space$1',
    borderRadius: '$border$radius',
    marginLeft: '$space$1',
    width: '$space$5',
    visibility: 'hidden',
    svg: {
      width: '$space$3',
      height: '$space$3',
      display: 'block',
      position: 'relative',
      top: 1,
    },
  }),
  jd = Z({
    padding: '0 $space$2',
    height: '$layout$headerHeight',
    whiteSpace: 'nowrap',
    '&:focus': { outline: 'none' },
    [`&:hover > .${Md}`]: { visibility: 'unset' },
  }),
  Ul = ({ closableTabs: r, className: e, ...t }) => {
    let { sandpack: n } = ve(),
      s = me(N),
      { activeFile: o, visibleFiles: l, setActiveFile: a } = n,
      c = (u) => {
        u.stopPropagation();
        let f = u.target.closest('[data-active]'),
          d = f?.getAttribute('title');
        !d || n.closeFile(d);
      },
      h = (u) => {
        let f = Vr(u),
          d = l.reduce(
            (p, m) => (m === u || (Vr(m) === f && p.push(m)), p),
            [],
          );
        return d.length === 0 ? f : LQ(u, d);
      };
    return O.exports.createElement(
      'div',
      { className: L(s('tabs'), HQ, e), translate: 'no', ...t },
      O.exports.createElement(
        'div',
        {
          'aria-label': 'Select active file',
          className: L(s('tabs-scrollable-container'), JQ),
          role: 'tablist',
        },
        l.map((u) =>
          O.exports.createElement(
            'button',
            {
              key: u,
              'aria-selected': u === o,
              className: L(s('tab-button'), Ve, jd),
              'data-active': u === o,
              onClick: () => a(u),
              role: 'tab',
              title: u,
              type: 'button',
            },
            h(u),
            r &&
              l.length > 1 &&
              O.exports.createElement(
                'span',
                { className: L(s('close-button'), Md), onClick: c },
                O.exports.createElement(vd, null),
              ),
          ),
        ),
      ),
    );
  },
  KQ = Z({
    position: 'absolute',
    bottom: '$space$2',
    right: '$space$2',
    paddingRight: '$space$3',
  }),
  Vl = ({ className: r, onClick: e, ...t }) => {
    let n = me(N),
      { sandpack: s } = ve();
    return O.exports.createElement(
      'button',
      {
        className: L(n('button'), Ve, Ri, KQ, r),
        onClick: (o) => {
          s.runSandpack(), e?.(o);
        },
        type: 'button',
        ...t,
      },
      O.exports.createElement(zl, null),
      'Run',
    );
  },
  Ln = Z({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    backgroundColor: '$colors$surface1',
    transition: 'flex $transitions$default',
    gap: 1,
    [`&:has(.${N}-stack)`]: { backgroundColor: '$colors$surface2' },
  }),
  Ci = ({ className: r, ...e }) => {
    let t = me(N);
    return O.exports.createElement('div', {
      className: L(t('stack'), Ln, r),
      ...e,
    });
  },
  ms = () => {
    let { theme: r, id: e, mode: t } = O.exports.useContext(ps);
    return { theme: r, themeId: e, themeMode: t };
  },
  Th = (r, e) => {
    if (r.length !== e.length) return !1;
    let t = !0;
    for (let n = 0; n < r.length; n++)
      if (r[n] !== e[n]) {
        t = !1;
        break;
      }
    return t;
  },
  ol = (r, { line: e, column: t }) => r.line(e).from + (t ?? 0) - 1,
  ex = () =>
    G.theme({
      '&': {
        backgroundColor: `var(--${N}-colors-surface1)`,
        color: `var(--${N}-syntax-color-plain)`,
        height: '100%',
      },
      '.cm-matchingBracket, .cm-nonmatchingBracket, &.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
        color: 'inherit',
        backgroundColor: 'rgba(128,128,128,.25)',
        backgroundBlendMode: 'difference',
      },
      '&.cm-editor.cm-focused': { outline: 'none' },
      '.cm-activeLine': {
        backgroundColor: `var(--${N}-colors-surface3)`,
        borderRadius: `var(--${N}-border-radius)`,
      },
      '.cm-errorLine': {
        backgroundColor: `var(--${N}-colors-errorSurface)`,
        borderRadius: `var(--${N}-border-radius)`,
      },
      '.cm-content': {
        caretColor: `var(--${N}-colors-accent)`,
        padding: `0 var(--${N}-space-4)`,
      },
      '.cm-scroller': {
        fontFamily: `var(--${N}-font-mono)`,
        lineHeight: `var(--${N}-font-lineHeight)`,
      },
      '.cm-gutters': {
        backgroundColor: `var(--${N}-colors-surface1)`,
        color: `var(--${N}-colors-disabled)`,
        border: 'none',
        paddingLeft: `var(--${N}-space-1)`,
      },
      '.cm-gutter.cm-lineNumbers': { fontSize: '.6em' },
      '.cm-lineNumbers .cm-gutterElement': {
        lineHeight: `var(--${N}-font-lineHeight)`,
        minWidth: `var(--${N}-space-5)`,
      },
      '.cm-content .cm-line': { paddingLeft: `var(--${N}-space-1)` },
      '.cm-content.cm-readonly .cm-line': { paddingLeft: 0 },
    }),
  lt = (r) => `${N}-syntax-${r}`,
  tx = () =>
    [
      'string',
      'plain',
      'comment',
      'keyword',
      'definition',
      'punctuation',
      'property',
      'tag',
      'static',
    ].reduce(
      (r, e) => ({
        ...r,
        [`.${lt(e)}`]: {
          color: `$syntax$color$${e}`,
          fontStyle: `$syntax$fontStyle$${e}`,
        },
      }),
      {},
    ),
  ix = (r) =>
    An.define([
      { tag: $.link, textDecoration: 'underline' },
      { tag: $.emphasis, fontStyle: 'italic' },
      { tag: $.strong, fontWeight: 'bold' },
      { tag: $.keyword, class: lt('keyword') },
      { tag: [$.atom, $.number, $.bool], class: lt('static') },
      { tag: $.tagName, class: lt('tag') },
      { tag: $.variableName, class: lt('plain') },
      { tag: $.function($.variableName), class: lt('definition') },
      {
        tag: $.definition($.function($.variableName)),
        class: lt('definition'),
      },
      { tag: $.propertyName, class: lt('property') },
      {
        tag: [$.literal, $.inserted],
        class: lt(r.syntax.string ? 'string' : 'static'),
      },
      { tag: $.punctuation, class: lt('punctuation') },
      { tag: [$.comment, $.quote], class: lt('comment') },
    ]),
  nx = (r, e, t) => {
    if (!r && !e) return 'javascript';
    let n = e;
    if (!n && r) {
      let s = r.lastIndexOf('.');
      n = r.slice(s + 1);
    }
    for (let s of t)
      if (n === s.name || s.extensions.includes(n || '')) return s.name;
    switch (n) {
      case 'ts':
      case 'tsx':
        return 'typescript';
      case 'html':
      case 'svelte':
      case 'vue':
        return 'html';
      case 'css':
      case 'less':
      case 'scss':
        return 'css';
      case 'js':
      case 'jsx':
      case 'json':
      default:
        return 'javascript';
    }
  },
  rx = (r, e) => {
    let t = {
      javascript: tl({ jsx: !0, typescript: !1 }),
      typescript: tl({ jsx: !0, typescript: !0 }),
      html: CQ(),
      css: td(),
    };
    for (let n of e) if (r === n.name) return n.language;
    return t[r];
  },
  zd = (...r) =>
    O.exports.useCallback(
      (e) =>
        r.forEach((t) => {
          if (t) {
            if (typeof t == 'function') return t(e);
            t.current = e;
          }
        }),
      r,
    );
function sx(r) {
  return ht.fromClass(
    class {
      constructor(e) {
        this.decorations = this.getDecoration(e);
      }
      update(e) {}
      getDecoration(e) {
        if (!r) return q.none;
        let t = r.map((n) => {
          var s, o, l;
          let a = q.line({
              attributes: { class: (s = n.className) != null ? s : '' },
            }),
            c = q.mark({
              class: (o = n.className) != null ? o : '',
              attributes: (l = n.elementAttributes) != null ? l : void 0,
            }),
            h = ol(e.state.doc, { line: n.line, column: n.startColumn }) + 1;
          if (n.startColumn && n.endColumn) {
            let u = ol(e.state.doc, { line: n.line, column: n.endColumn }) + 1;
            return c.range(h, u);
          }
          return a.range(h);
        });
        return q.set(t);
      }
    },
    { decorations: (e) => e.decorations },
  );
}
function ox() {
  return ax;
}
var lx = q.line({ attributes: { class: 'cm-errorLine' } }),
  ax = ht.fromClass(
    class {
      constructor() {
        this.decorations = q.none;
      }
      update(r) {
        r.transactions.forEach((e) => {
          let t = e.annotation('show-error');
          if (t !== void 0) {
            let n = ol(r.view.state.doc, { line: t }) + 1;
            this.decorations = q.set([lx.range(n)]);
          } else e.annotation('remove-errors') && (this.decorations = q.none);
        });
      }
    },
    { decorations: (r) => r.decorations },
  ),
  ll = Z({
    margin: '0',
    display: 'block',
    fontFamily: '$font$mono',
    fontSize: '$font$size',
    color: '$syntax$color$plain',
    lineHeight: '$font$lineHeight',
  }),
  Ph = Z(tx()),
  Nd = Z({
    flex: 1,
    position: 'relative',
    overflow: 'auto',
    background: '$colors$surface1',
    '.cm-scroller': { padding: '$space$4 0' },
    [`.${ll}`]: { padding: '$space$4 0' },
  }),
  Rh = Z({ margin: '0', outline: 'none', height: '100%' }),
  cx = Z({
    fontFamily: '$font$mono',
    fontSize: '0.8em',
    position: 'absolute',
    right: '$space$2',
    bottom: '$space$2',
    zIndex: '$top',
    color: '$colors$clickable',
    backgroundColor: '$colors$surface2',
    borderRadius: '99999px',
    padding: 'calc($space$1 / 2) $space$2',
    [`& + .${Ve}`]: { right: 'calc($space$11 * 2)' },
  }),
  hx = ({ langSupport: r, highlightTheme: e, code: t = '' }) => {
    let n = r.language.parser.parse(t),
      s = 0,
      o = [],
      l = (a, c) => {
        if (a > s) {
          let h = t.slice(s, a);
          o.push(
            c
              ? O.exports.createElement('span', {
                  children: h,
                  className: c,
                  key: `${a}${s}`,
                })
              : h,
          ),
            (s = a);
        }
      };
    return (
      ib(n, e.match, (a, c, h) => {
        l(a, ''), l(c, h);
      }),
      s < t.length &&
        o.push(`

`),
      o
    );
  },
  gs = O.exports.forwardRef(
    (
      {
        code: r,
        filePath: e,
        fileType: t,
        onCodeUpdate: n,
        showLineNumbers: s = !1,
        showInlineErrors: o = !1,
        wrapContent: l = !1,
        editorState: a = 'pristine',
        readOnly: c = !1,
        showReadOnly: h = !0,
        decorators: u,
        initMode: f = 'lazy',
        id: d,
        extensions: p = [],
        extensionsKeymap: m = [],
        additionalLanguages: S = [],
      },
      T,
    ) => {
      let k = O.exports.useRef(null),
        b = zd(k, T),
        Q = O.exports.useRef(),
        { theme: v, themeId: P } = ms(),
        [y, w] = O.exports.useState(r),
        [R, A] = O.exports.useState(f === 'immediate'),
        C = me(N),
        { listen: M } = ve(),
        z = O.exports.useRef([]),
        V = O.exports.useRef([]),
        { isIntersecting: re } = Sb(k, {
          rootMargin: '600px 0px',
          threshold: 0.2,
        });
      O.exports.useImperativeHandle(T, () => ({
        getCodemirror: () => Q.current,
      })),
        O.exports.useEffect(() => {
          (f === 'lazy' || f === 'user-visible') && re && A(!0);
        }, [f, re]);
      let ge = nx(e, t, S),
        Qe = rx(ge, S),
        je = ix(v),
        be = hx({ langSupport: Qe, highlightTheme: je, code: r }),
        ye = O.exports.useMemo(() => u && u.sort((F, ie) => F.line - ie.line), [
          u,
        ]);
      O.exports.useEffect(() => {
        if (!k.current || !R) return;
        let F = setTimeout(function () {
          let ie = [
              {
                key: 'Tab',
                run: (Ae) => {
                  var Ye;
                  Zf(Ae);
                  let ft = m.find(({ key: dt }) => dt === 'Tab');
                  return (Ye = ft?.run(Ae)) != null ? Ye : !0;
                },
              },
              {
                key: 'Shift-Tab',
                run: ({ state: Ae, dispatch: Ye }) => {
                  var ft;
                  Df({ state: Ae, dispatch: Ye });
                  let dt = m.find(({ key: rt }) => rt === 'Shift-Tab');
                  return (ft = dt?.run(xe)) != null ? ft : !0;
                },
              },
              {
                key: 'Escape',
                run: () => (c || (k.current && k.current.focus()), !0),
              },
              { key: 'mod-Backspace', run: Cl },
            ],
            ae = [
              t0(),
              ub(),
              X0(),
              ...p,
              Ar.of([...M0, ..._1, ...Qb, ...M1, ...ie, ...m]),
              Qe,
              lb.fallback,
              ex(),
              je,
            ];
          c
            ? (ae.push(J.readOnly.of(!0)), ae.push(G.editable.of(!1)))
            : (ae.push(J0()), ae.push(l0())),
            ye && ae.push(sx(ye)),
            l && ae.push(G.lineWrapping),
            s && ae.push(H1()),
            o && ae.push(ox());
          let H = J.create({ doc: r, extensions: ae }),
            nt = k.current,
            Wi = nt.querySelector('.sp-pre-placeholder');
          Wi && nt.removeChild(Wi);
          let xe = new G({
            state: H,
            parent: nt,
            dispatch: (Ae) => {
              if ((xe.update([Ae]), Ae.docChanged)) {
                let Ye = Ae.newDoc.sliceString(0, Ae.newDoc.length);
                w(Ye), n?.(Ye);
              }
            },
          });
          xe.contentDOM.setAttribute('data-gramm', 'false'),
            xe.contentDOM.setAttribute(
              'aria-label',
              e ? `Code Editor for ${Vr(e)}` : 'Code Editor',
            ),
            c
              ? xe.contentDOM.classList.add('cm-readonly')
              : xe.contentDOM.setAttribute('tabIndex', '-1'),
            (Q.current = xe);
        }, 0);
        return () => {
          var ie;
          (ie = Q.current) == null || ie.destroy(), clearTimeout(F);
        };
      }, [R, s, l, P, ye, c]),
        O.exports.useEffect(
          function () {
            let F = Q.current,
              ie = !Th(p, z.current) || !Th(m, V.current);
            F &&
              ie &&
              (F.dispatch({ effects: te.appendConfig.of(p) }),
              F.dispatch({ effects: te.appendConfig.of(Ar.of([...m])) }),
              (z.current = p),
              (V.current = m));
          },
          [p, m],
        ),
        O.exports.useEffect(() => {
          Q.current &&
            a === 'dirty' &&
            window.matchMedia('(min-width: 768px)').matches &&
            Q.current.contentDOM.focus();
        }, []),
        O.exports.useEffect(() => {
          if (Q.current && r !== y) {
            let F = Q.current,
              ie = F.state.selection.ranges.some(
                ({ to: H, from: nt }) => H > r.length || nt > r.length,
              )
                ? E.cursor(r.length)
                : F.state.selection,
              ae = { from: 0, to: F.state.doc.length, insert: r };
            F.dispatch({ changes: ae, selection: ie });
          }
        }, [r]),
        O.exports.useEffect(
          function () {
            if (!o) return;
            let F = M((ie) => {
              let ae = Q.current;
              ie.type === 'success'
                ? ae?.dispatch({ annotations: [new jt('remove-errors', !0)] })
                : ie.type === 'action' &&
                  ie.action === 'show-error' &&
                  ie.line &&
                  ae?.dispatch({
                    annotations: [new jt('show-error', ie.line)],
                  });
            });
            return () => F();
          },
          [M, o],
        );
      let We = (F) => {
          F.key === 'Enter' &&
            Q.current &&
            (F.preventDefault(), Q.current.contentDOM.focus());
        },
        Xe = () => {
          let F = 4;
          return s && (F += 6), c || (F += 1), `var(--${N}-space-${F})`;
        };
      return c
        ? O.exports.createElement(
            O.exports.Fragment,
            null,
            O.exports.createElement(
              'pre',
              { ref: b, className: L(C('cm', a, ge), Rh, Ph), translate: 'no' },
              O.exports.createElement(
                'code',
                {
                  className: L(C('pre-placeholder'), ll),
                  style: { marginLeft: Xe() },
                },
                be,
              ),
            ),
            c &&
              h &&
              O.exports.createElement(
                'span',
                { className: L(C('read-only'), cx) },
                'Read-only',
              ),
          )
        : O.exports.createElement(
            'div',
            {
              ref: b,
              'aria-autocomplete': 'list',
              'aria-label': e ? `Code Editor for ${Vr(e)}` : 'Code Editor',
              'aria-multiline': 'true',
              className: L(C('cm', a, ge), Rh, Ph),
              onKeyDown: We,
              role: 'textbox',
              tabIndex: 0,
              translate: 'no',
              suppressHydrationWarning: !0,
            },
            O.exports.createElement(
              'pre',
              {
                className: L(C('pre-placeholder'), ll),
                style: { marginLeft: Xe() },
              },
              be,
            ),
          );
    },
  ),
  Bd = O.exports.forwardRef(
    (
      {
        style: r,
        showTabs: e,
        showLineNumbers: t = !1,
        showInlineErrors: n = !1,
        showRunButton: s = !0,
        wrapContent: o = !1,
        closableTabs: l = !1,
        initMode: a,
        extensions: c,
        extensionsKeymap: h,
        id: u,
        readOnly: f,
        showReadOnly: d,
        additionalLanguages: p,
      },
      m,
    ) => {
      let { sandpack: S } = ve(),
        { code: T, updateCode: k, readOnly: b } = Bl(),
        { activeFile: Q, status: v, editorState: P } = S,
        y = e ?? S.visibleFiles.length > 1,
        w = me(N),
        R = (A) => {
          k(A);
        };
      return O.exports.createElement(
        Ci,
        { className: w('editor'), style: r },
        y && O.exports.createElement(Ul, { closableTabs: l }),
        O.exports.createElement(
          'div',
          { className: L(w('code-editor'), Nd) },
          O.exports.createElement(gs, {
            key: Q,
            ref: m,
            additionalLanguages: p,
            code: T,
            editorState: P,
            extensions: c,
            extensionsKeymap: h,
            filePath: Q,
            id: u,
            initMode: a || S.initMode,
            onCodeUpdate: R,
            readOnly: f || b,
            showInlineErrors: n,
            showLineNumbers: t,
            showReadOnly: d,
            wrapContent: o,
          }),
          s && v === 'idle' ? O.exports.createElement(Vl, null) : null,
        ),
      );
    },
  ),
  Ud = O.exports.forwardRef(
    (
      {
        showTabs: r,
        showLineNumbers: e,
        decorators: t,
        code: n,
        initMode: s,
        wrapContent: o,
        ...l
      },
      a,
    ) => {
      let { sandpack: c } = ve(),
        { code: h } = Bl(),
        u = me(N),
        f = r ?? c.visibleFiles.length > 1;
      return O.exports.createElement(
        Ci,
        { ...l },
        f ? O.exports.createElement(Ul, null) : null,
        O.exports.createElement(
          'div',
          { className: L(u('code-editor'), Nd) },
          O.exports.createElement(gs, {
            ref: a,
            code: n ?? h,
            decorators: t,
            filePath: c.activeFile,
            initMode: s || c.initMode,
            showLineNumbers: e,
            showReadOnly: !1,
            wrapContent: o,
            readOnly: !0,
          }),
        ),
        c.status === 'idle' ? O.exports.createElement(Vl, null) : null,
      );
    },
  ),
  ux = Z({
    borderRadius: '0',
    width: '100%',
    padding: 0,
    marginBottom: '$space$2',
    span: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    svg: { marginRight: '$space$1' },
  }),
  Vd = ({
    selectFile: r,
    path: e,
    active: t,
    onClick: n,
    depth: s,
    isDirOpen: o,
  }) => {
    let l = me(N),
      a = (u) => {
        r && r(e), n?.(u);
      },
      c = e.split('/').filter(Boolean).pop(),
      h = () =>
        r
          ? O.exports.createElement(xd, null)
          : o
          ? O.exports.createElement(yd, null)
          : O.exports.createElement(Qd, null);
    return O.exports.createElement(
      'button',
      {
        className: L(l('button', 'explorer'), Ve, ux),
        'data-active': t,
        onClick: a,
        style: { paddingLeft: 18 * s + 'px' },
        title: c,
        type: 'button',
      },
      h(),
      O.exports.createElement('span', null, c),
    );
  },
  fx = ({
    prefixedPath: r,
    files: e,
    selectFile: t,
    activeFile: n,
    depth: s,
    autoHiddenFiles: o,
    visibleFiles: l,
  }) => {
    let [a, c] = O.exports.useState(!0);
    return O.exports.createElement(
      'div',
      { key: r },
      O.exports.createElement(Vd, {
        depth: s,
        isDirOpen: a,
        onClick: () => c((h) => !h),
        path: r + '/',
      }),
      a &&
        O.exports.createElement(Yd, {
          activeFile: n,
          autoHiddenFiles: o,
          depth: s + 1,
          files: e,
          prefixedPath: r,
          selectFile: t,
          visibleFiles: l,
        }),
    );
  },
  dx = ({ autoHiddenFiles: r, visibleFiles: e, files: t, prefixedPath: n }) => {
    let s = e.length > 0,
      o = r && !s,
      l = r && !!s,
      a = Object.keys(t)
        .filter((u) => {
          var f;
          let d = u.startsWith(n);
          return l
            ? d && e.includes(u)
            : o
            ? d && !((f = t[u]) != null && f.hidden)
            : d;
        })
        .map((u) => u.substring(n.length)),
      c = new Set(
        a.filter((u) => u.includes('/')).map((u) => `${n}${u.split('/')[0]}/`),
      ),
      h = a.filter((u) => !u.includes('/')).map((u) => `${n}${u}`);
    return { directories: Array.from(c), modules: h };
  },
  Yd = ({
    depth: r = 0,
    activeFile: e,
    selectFile: t,
    prefixedPath: n,
    files: s,
    autoHiddenFiles: o,
    visibleFiles: l,
  }) => {
    let { directories: a, modules: c } = dx({
      visibleFiles: l,
      autoHiddenFiles: o,
      prefixedPath: n,
      files: s,
    });
    return O.exports.createElement(
      'div',
      null,
      a.map((h) =>
        O.exports.createElement(fx, {
          key: h,
          activeFile: e,
          autoHiddenFiles: o,
          depth: r,
          files: s,
          prefixedPath: h,
          selectFile: t,
          visibleFiles: l,
        }),
      ),
      c.map((h) =>
        O.exports.createElement(Vd, {
          key: h,
          active: e === h,
          depth: r,
          path: h,
          selectFile: t,
        }),
      ),
    );
  },
  px = Z({ padding: '$space$3', overflow: 'auto', height: '100%' }),
  Ox = ({ className: r, autoHiddenFiles: e = !1, ...t }) => {
    let { sandpack: n } = ve();
    return O.exports.createElement(
      'div',
      { className: L(Ln, px, `${N}-file-explorer`, r), ...t },
      O.exports.createElement(Yd, {
        activeFile: n.activeFile,
        autoHiddenFiles: e,
        files: n.files,
        prefixedPath: '/',
        selectFile: n.openFile,
        visibleFiles: n.visibleFilesFromProps,
      }),
    );
  },
  mx = (r) => {
    let e = r.match(/(https?:\/\/.*?)\//);
    return e && e[1] ? [e[1], r.replace(e[1], '')] : [r, '/'];
  },
  gx = Z({
    display: 'flex',
    alignItems: 'center',
    height: '$layout$headerHeight',
    borderBottom: '1px solid $colors$surface2',
    padding: '$space$3 $space$2',
    background: '$colors$surface1',
  }),
  bx = Z({
    backgroundColor: '$colors$surface2',
    color: '$colors$clickable',
    padding: '$space$1 $space$3',
    borderRadius: '99999px',
    border: '1px solid $colors$surface2',
    height: '24px',
    lineHeight: '24px',
    fontSize: 'inherit',
    outline: 'none',
    flex: 1,
    marginLeft: '$space$4',
    width: '0',
    transition: 'background $transitions$default',
    '&:hover': { backgroundColor: '$colors$surface3' },
    '&:focus': {
      backgroundColor: '$surface1',
      border: '1px solid $colors$accent',
      color: '$colors$base',
    },
  }),
  qd = ({ clientId: r, onURLChange: e, className: t, ...n }) => {
    var s;
    let [o, l] = O.exports.useState(''),
      { sandpack: a, dispatch: c, listen: h } = ve(),
      [u, f] = O.exports.useState((s = a.startRoute) != null ? s : '/'),
      [d, p] = O.exports.useState(!1),
      [m, S] = O.exports.useState(!1),
      T = me(N);
    O.exports.useEffect(() => {
      let w = h((R) => {
        if (R.type === 'urlchange') {
          let { url: A, back: C, forward: M } = R,
            [z, V] = mx(A);
          l(z), f(V), p(C), S(M);
        }
      }, r);
      return () => w();
    }, []);
    let k = (w) => {
        let R = w.target.value.startsWith('/')
          ? w.target.value
          : `/${w.target.value}`;
        f(R);
      },
      b = (w) => {
        w.code === 'Enter' &&
          (w.preventDefault(),
          w.stopPropagation(),
          typeof e == 'function' && e(o + w.currentTarget.value));
      },
      Q = () => {
        c({ type: 'refresh' });
      },
      v = () => {
        c({ type: 'urlback' });
      },
      P = () => {
        c({ type: 'urlforward' });
      },
      y = L(
        T('button', 'icon'),
        Ve,
        GQ,
        Z({ minWidth: '$space$6', justifyContent: 'center' }),
      );
    return O.exports.createElement(
      'div',
      { className: L(T('navigator'), gx, t), ...n },
      O.exports.createElement(
        'button',
        {
          'aria-label': 'Go back one page',
          className: y,
          disabled: !d,
          onClick: v,
          type: 'button',
        },
        O.exports.createElement(Od, null),
      ),
      O.exports.createElement(
        'button',
        {
          'aria-label': 'Go forward one page',
          className: y,
          disabled: !m,
          onClick: P,
          type: 'button',
        },
        O.exports.createElement(md, null),
      ),
      O.exports.createElement(
        'button',
        {
          'aria-label': 'Refresh page',
          className: y,
          onClick: Q,
          type: 'button',
        },
        O.exports.createElement(Nl, null),
      ),
      O.exports.createElement('input', {
        'aria-label': 'Current Sandpack URL',
        className: L(T('input'), bx),
        name: 'Current Sandpack URL',
        onChange: k,
        onKeyDown: b,
        type: 'text',
        value: u,
      }),
    );
  },
  Gd = () => {
    var r;
    let { sandpack: e } = ve(),
      { error: t } = e;
    return (
      O.exports.useEffect(() => {
        e.errorScreenRegisteredRef.current = !0;
      }, []),
      (r = t?.message) != null ? r : null
    );
  },
  Yl = 200,
  Fd = (r, e) => {
    let { sandpack: t, listen: n } = ve(),
      [s, o] = O.exports.useState('LOADING');
    return (
      O.exports.useEffect(() => {
        t.loadingScreenRegisteredRef.current = !0;
        let l = n((a) => {
          a.type === 'start' && a.firstLoad === !0 && o('LOADING'),
            a.type === 'done' &&
              o((c) => (c === 'LOADING' ? 'PRE_FADING' : 'HIDDEN'));
        }, r);
        return () => {
          l();
        };
      }, [r, t.status === 'idle']),
      O.exports.useEffect(() => {
        let l;
        return (
          s === 'PRE_FADING' && !e
            ? o('FADING')
            : s === 'FADING' && (l = setTimeout(() => o('HIDDEN'), Yl)),
          () => {
            clearTimeout(l);
          }
        );
      }, [s, e]),
      t.status === 'timeout' ? 'TIMEOUT' : t.status !== 'running' ? 'HIDDEN' : s
    );
  },
  Hd = (r) => {
    let { dispatch: e } = ve();
    return {
      refresh: () => e({ type: 'refresh' }, r),
      back: () => e({ type: 'urlback' }, r),
      forward: () => e({ type: 'urlforward' }, r),
    };
  };
function yx(r) {
  var e, t;
  let { activeFile: n, bundlerState: s } = r;
  if (s == null) return null;
  let o = s.transpiledModules[n + ':'];
  return (t = (e = o?.source) == null ? void 0 : e.compiledCode) != null
    ? t
    : null;
}
var Jd = () => {
    let { sandpack: r } = ve();
    return r.status !== 'running' ? null : yx(r);
  },
  ql = () => {
    let { sandpack: r, listen: e, dispatch: t } = ve(),
      n = O.exports.useRef(null),
      s = O.exports.useRef(il());
    return (
      O.exports.useEffect(() => {
        let o = n.current,
          l = s.current;
        return (
          o !== null && r.registerBundler(o, l), () => r.unregisterBundler(l)
        );
      }, []),
      {
        sandpack: r,
        getClient: () => r.clients[s.current] || null,
        clientId: s.current,
        iframe: n,
        listen: (o) => e(o, s.current),
        dispatch: (o) => t(o, s.current),
      }
    );
  },
  Gl = ({ children: r, className: e, ...t }) => {
    let n = Gd(),
      s = me(N);
    return !n && !r
      ? null
      : O.exports.createElement(
          'div',
          {
            className: L(s('overlay', 'error'), sl, Id, e),
            translate: 'no',
            ...t,
          },
          O.exports.createElement(
            'div',
            { className: L(s('error-message'), Sr) },
            n || r,
          ),
        );
  },
  Qx = (r) =>
    AQ.compressToBase64(JSON.stringify(r))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, ''),
  Ch = 'https://codesandbox.io/api/v1/sandboxes/define',
  xx = (r, e) => {
    let t = Object.keys(r).reduce((n, s) => {
      let o = s.replace('/', ''),
        l = { content: r[s].code, isBinary: !1 };
      return { ...n, [o]: l };
    }, {});
    return Qx({ files: t, ...(e ? { template: e } : null) });
  },
  Kd = ({ children: r, ...e }) => {
    var t, n, s;
    let { sandpack: o } = ve(),
      l = O.exports.useRef(null),
      [a, c] = O.exports.useState();
    return (
      O.exports.useEffect(
        function () {
          let h = setTimeout(() => {
            let u = xx(o.files, o.environment),
              f = new URLSearchParams({
                parameters: u,
                query: new URLSearchParams({
                  file: o.activeFile,
                  utm_medium: 'sandpack',
                }).toString(),
              });
            c(f);
          }, 600);
          return () => {
            clearTimeout(h);
          };
        },
        [o.activeFile, o.environment, o.files],
      ),
      O.exports.useEffect(function () {
        o.openInCSBRegisteredRef.current = !0;
      }, []),
      ((s =
        (n = (t = a?.get) == null ? void 0 : t.call(a, 'parameters')) == null
          ? void 0
          : n.length) != null
        ? s
        : 0) > 1500
        ? O.exports.createElement(
            'button',
            {
              onClick: () => {
                var h;
                return (h = l.current) == null ? void 0 : h.submit();
              },
              title: 'Open in CodeSandbox',
              ...e,
            },
            O.exports.createElement(
              'form',
              {
                ref: l,
                action: Ch,
                method: 'POST',
                style: { visibility: 'hidden' },
                target: '_blank',
              },
              Array.from(a, ([h, u]) =>
                O.exports.createElement('input', {
                  key: h,
                  name: h,
                  type: 'hidden',
                  value: u,
                }),
              ),
            ),
            r,
          )
        : O.exports.createElement(
            'a',
            {
              href: `${Ch}?${a?.toString()}`,
              rel: 'noreferrer noopener',
              target: '_blank',
              title: 'Open in CodeSandbox',
              ...e,
            },
            r,
          )
    );
  },
  Fl = () => {
    let r = me(N);
    return O.exports.createElement(
      Kd,
      { className: L(r('button', 'icon-standalone'), Ve, tn, Ri) },
      O.exports.createElement(bd, null),
    );
  },
  al = Z({
    transform: 'translate(-4px, 9px) scale(0.13, 0.13)',
    '*': { position: 'absolute', width: '96px', height: '96px' },
  }),
  vx = Z({
    position: 'absolute',
    right: '$space$2',
    bottom: '$space$2',
    zIndex: '$top',
    width: '32px',
    height: '32px',
    borderRadius: '$border$radius',
    [`.${al}`]: { display: 'flex' },
    [`.${Ve}`]: { display: 'none' },
    [`&:hover .${Ve}`]: { display: 'flex' },
    [`&:hover .${al}`]: { display: 'none' },
  }),
  Sx = kd({
    '0%': { transform: 'rotateX(-25.5deg) rotateY(45deg)' },
    '100%': { transform: 'rotateX(-25.5deg) rotateY(405deg)' },
  }),
  $x = Z({
    animation: `${Sx} 1s linear infinite`,
    animationFillMode: 'forwards',
    transformStyle: 'preserve-3d',
    transform: 'rotateX(-25.5deg) rotateY(45deg)',
    '*': {
      border: '10px solid $colors$clickable',
      borderRadius: '8px',
      background: '$colors$surface1',
    },
    '.top': {
      transform: 'rotateX(90deg) translateZ(44px)',
      transformOrigin: '50% 50%',
    },
    '.bottom': {
      transform: 'rotateX(-90deg) translateZ(44px)',
      transformOrigin: '50% 50%',
    },
    '.front': {
      transform: 'rotateY(0deg) translateZ(44px)',
      transformOrigin: '50% 50%',
    },
    '.back': {
      transform: 'rotateY(-180deg) translateZ(44px)',
      transformOrigin: '50% 50%',
    },
    '.left': {
      transform: 'rotateY(-90deg) translateZ(44px)',
      transformOrigin: '50% 50%',
    },
    '.right': {
      transform: 'rotateY(90deg) translateZ(44px)',
      transformOrigin: '50% 50%',
    },
  }),
  ep = ({ className: r, showOpenInCodeSandbox: e, ...t }) => {
    let n = me(N);
    return O.exports.createElement(
      'div',
      {
        className: L(n('cube-wrapper'), vx, r),
        title: 'Open in CodeSandbox',
        ...t,
      },
      e && O.exports.createElement(Fl, null),
      O.exports.createElement(
        'div',
        { className: L(n('cube'), al) },
        O.exports.createElement(
          'div',
          { className: L(n('sides'), $x) },
          O.exports.createElement('div', { className: 'top' }),
          O.exports.createElement('div', { className: 'right' }),
          O.exports.createElement('div', { className: 'bottom' }),
          O.exports.createElement('div', { className: 'left' }),
          O.exports.createElement('div', { className: 'front' }),
          O.exports.createElement('div', { className: 'back' }),
        ),
      ),
    );
  },
  kx = Z({ backgroundColor: '$colors$surface1' }),
  Hl = ({
    clientId: r,
    loading: e,
    className: t,
    style: n,
    showOpenInCodeSandbox: s,
    ...o
  }) => {
    let l = Fd(r, e),
      a = me(N);
    if (l === 'HIDDEN') return null;
    if (l === 'TIMEOUT')
      return O.exports.createElement(
        'div',
        { className: L(a('overlay', 'error'), sl, Id, t), ...o },
        O.exports.createElement(
          'div',
          { className: L(a('error-message'), Sr) },
          'Unable to establish connection with the sandpack bundler. Make sure you are online or try again later. If the problem persists, please report it via',
          ' ',
          O.exports.createElement(
            'a',
            {
              className: L(a('error-message'), Sr),
              href:
                'mailto:hello@codesandbox.io?subject=Sandpack Timeout Error',
            },
            'email',
          ),
          ' ',
          'or submit an issue on',
          ' ',
          O.exports.createElement(
            'a',
            {
              className: L(a('error-message'), Sr),
              href: 'https://github.com/codesandbox/sandpack/issues',
              rel: 'noreferrer noopener',
              target: '_blank',
            },
            'GitHub.',
          ),
        ),
      );
    let c = l === 'LOADING' || l === 'PRE_FADING';
    return O.exports.createElement(
      'div',
      {
        className: L(a('overlay', 'loading'), sl, kx, t),
        style: {
          ...n,
          opacity: c ? 1 : 0,
          transition: `opacity ${Yl}ms ease-out`,
        },
        ...o,
      },
      O.exports.createElement(ep, { showOpenInCodeSandbox: s }),
    );
  },
  tp = ({ clientId: r }) => {
    let { refresh: e } = Hd(r),
      t = me(N);
    return O.exports.createElement(
      'button',
      {
        className: L(t('button', 'icon-standalone'), Ve, tn, Ri),
        onClick: e,
        title: 'Refresh Sandpack',
        type: 'button',
      },
      O.exports.createElement(Nl, null),
    );
  },
  wx = Z({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    overflow: 'auto',
    position: 'relative',
  }),
  Tx = Z({
    border: '0',
    outline: '0',
    width: '100%',
    height: '100%',
    minHeight: '160px',
    maxHeight: '2000px',
    flex: 1,
  }),
  Px = Z({
    display: 'flex',
    position: 'absolute',
    bottom: '$space$2',
    right: '$space$2',
    zIndex: '$overlay',
    '> *': { marginLeft: '$space$2' },
  }),
  ip = O.exports.forwardRef(
    (
      {
        showNavigator: r = !1,
        showRefreshButton: e = !0,
        showOpenInCodeSandbox: t = !0,
        showSandpackErrorOverlay: n = !0,
        actionsChildren: s = O.exports.createElement(O.exports.Fragment, null),
        children: o,
        className: l,
        ...a
      },
      c,
    ) => {
      let {
          sandpack: h,
          listen: u,
          iframe: f,
          getClient: d,
          clientId: p,
        } = ql(),
        [m, S] = O.exports.useState(null),
        {
          status: T,
          errorScreenRegisteredRef: k,
          openInCSBRegisteredRef: b,
          loadingScreenRegisteredRef: Q,
        } = h,
        v = me(N);
      (b.current = !0),
        (k.current = !0),
        (Q.current = !0),
        O.exports.useEffect(
          () =>
            u((y) => {
              y.type === 'resize' && S(y.height);
            }),
          [],
        ),
        O.exports.useImperativeHandle(
          c,
          () => ({ clientId: p, getClient: d }),
          [d, p],
        );
      let P = (y) => {
        !f.current || (f.current.src = y);
      };
      return O.exports.createElement(
        Ci,
        { className: L(`${N}-preview`, l), ...a },
        r && O.exports.createElement(qd, { clientId: p, onURLChange: P }),
        O.exports.createElement(
          'div',
          { className: L(v('preview-container'), wx) },
          O.exports.createElement('iframe', {
            ref: f,
            className: L(v('preview-iframe'), Tx),
            style: { height: m || void 0 },
            title: 'Sandpack Preview',
          }),
          n && O.exports.createElement(Gl, null),
          O.exports.createElement(
            'div',
            { className: L(v('preview-actions'), Px) },
            s,
            !r &&
              e &&
              T === 'running' &&
              O.exports.createElement(tp, { clientId: p }),
            t && O.exports.createElement(Fl, null),
          ),
          O.exports.createElement(Hl, {
            clientId: p,
            showOpenInCodeSandbox: t,
          }),
          o,
        ),
      );
    },
  ),
  Rx = Z({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    overflow: 'auto',
    minHeight: '160px',
    flex: 1,
  }),
  Cx = ({ className: r, ...e }) => {
    let { sandpack: t } = ve(),
      n = Jd(),
      s = me(N),
      o = O.exports.useRef(null);
    return (
      O.exports.useEffect(() => {
        let l = o.current;
        return (
          l && t.registerBundler(l, 'hidden'),
          () => {
            t.unregisterBundler('hidden');
          }
        );
      }, []),
      O.exports.createElement(
        'div',
        { className: L(s('transpiled-code'), Ln, Rx, r), ...e },
        O.exports.createElement(Ud, {
          code: n ?? '',
          initMode: t.initMode,
          ...e,
        }),
        O.exports.createElement('iframe', {
          ref: o,
          style: { display: 'none' },
          title: 'transpiled sandpack code',
        }),
        O.exports.createElement(Gl, null),
        O.exports.createElement(Hl, {
          clientId: 'hidden',
          showOpenInCodeSandbox: !1,
        }),
      )
    );
  },
  Wx = Z({ height: '$layout$height', width: '100%' }),
  Ax = ({ clientId: r, theme: e, className: t, ...n }) => {
    let { listen: s, sandpack: o } = ve(),
      { themeMode: l } = ms(),
      a = me(N),
      c = O.exports.useRef(),
      [h, u] = O.exports.useState(null);
    return (
      O.exports.useEffect(() => {
        bO(() => import('./chunks/frontend.e124ef2a.js').then((f) => f.f), [
          'chunks/frontend.e124ef2a.js',
          'chunks/index.e8aae4d9.js',
          'chunks/index.b16088e3.js',
        ]).then((f) => {
          c.current = f;
        });
      }, []),
      O.exports.useEffect(
        () =>
          s((f) => {
            var d;
            if (f.type === 'activate-react-devtools') {
              let p = r ? o.clients[r] : Object.values(o.clients)[0],
                m = (d = p?.iframe) == null ? void 0 : d.contentWindow;
              c.current && m && u(c.current.initialize(m));
            }
          }),
        [c, r, s, o.clients],
      ),
      O.exports.useEffect(() => {
        o.registerReactDevTools('legacy');
      }, []),
      h
        ? O.exports.createElement(
            'div',
            { className: L(a('devtools'), Wx, t), ...n },
            O.exports.createElement(h, { browserTheme: e ?? l }),
          )
        : null
    );
  },
  np = Z({
    border: '1px solid $colors$surface2',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    borderRadius: '$border$radius',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '$colors$surface2',
    gap: 1,
    [`> .${Ln}`]: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: '0',
      minWidth: '350px',
      height: '$layout$height',
      '@media print': { height: 'auto', display: 'block' },
      '@media screen and (max-width: 768px)': {
        height: 'auto',
        minWidth: '100% !important;',
      },
    },
    [`> .${N}-file-explorer`]: { flex: 0.2, minWidth: 200 },
  }),
  rp = O.exports.forwardRef(({ children: r, className: e, ...t }, n) => {
    let { sandpack: s } = ve(),
      o = me(N),
      l = zd(s.lazyAnchorRef, n);
    return O.exports.createElement(
      'div',
      { ref: l, className: L(o('layout'), np, e), ...t },
      r,
    );
  }),
  Ex = Z({
    justifyContent: 'space-between',
    borderBottom: '1px solid $colors$surface2',
    padding: '$space$3 $space$2',
    fontFamily: '$font$mono',
    maxHeight: '$layout$headerHeight',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
  }),
  so = Z({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '$space$2',
  }),
  Lx = ({
    status: r,
    suiteOnly: e,
    setSuiteOnly: t,
    setVerbose: n,
    verbose: s,
    watchMode: o,
    setWatchMode: l,
    showSuitesOnly: a,
  }) => {
    let c = L(Ve, Ri, Z({ padding: '$space$1 $space$3' }));
    return O.exports.createElement(
      'div',
      { className: L(Ex, so) },
      O.exports.createElement(
        'div',
        { className: L(so) },
        O.exports.createElement(
          'p',
          {
            className: L(
              Z({
                lineHeight: 1,
                margin: 0,
                color: '$colors$base',
                fontSize: '$font$size',
                display: 'flex',
                alignItems: 'center',
                gap: '$space$2',
              }),
            ),
          },
          O.exports.createElement(ds, null),
          'Tests',
        ),
      ),
      O.exports.createElement(
        'div',
        { className: L(so) },
        a &&
          O.exports.createElement(
            'button',
            {
              className: c,
              'data-active': e,
              disabled: r === 'initialising',
              onClick: t,
            },
            'Suite only',
          ),
        O.exports.createElement(
          'button',
          {
            className: c,
            'data-active': s,
            disabled: r === 'initialising',
            onClick: n,
          },
          'Verbose',
        ),
        O.exports.createElement(
          'button',
          {
            className: c,
            'data-active': o,
            disabled: r === 'initialising',
            onClick: l,
          },
          'Watch',
        ),
      ),
    );
  },
  _x = ({ onClick: r }) => {
    let e = me(N);
    return O.exports.createElement(
      'button',
      {
        className: L(e('button', 'icon-standalone'), Ve, tn, Ri),
        onClick: r,
        title: 'Run tests',
        type: 'button',
      },
      O.exports.createElement(zl, null),
    );
  },
  Xx = (r) => ({
    '--test-pass': r ? '#18df16' : '#15c213',
    '--test-fail': r ? '#df162b' : '#c21325',
    '--test-skip': r ? '#eace2b' : '#c2a813',
    '--test-run': r ? '#eace2b' : '#c2a813',
    '--test-title': r ? '#3fbabe' : '#256c6f',
  }),
  bs = Z({
    variants: {
      status: {
        pass: { color: 'var(--test-pass)' },
        fail: { color: 'var(--test-fail)' },
        skip: { color: 'var(--test-skip)' },
        title: { color: 'var(--test-title)' },
      },
    },
  }),
  yi = bs({ status: 'pass' }),
  at = bs({ status: 'fail' }),
  sp = bs({ status: 'skip' }),
  Zx = bs({ status: 'title' }),
  Jl = Z({
    variants: {
      status: {
        pass: { background: 'var(--test-pass)', color: '$colors$surface1' },
        fail: { background: 'var(--test-fail)', color: '$colors$surface1' },
        run: { background: 'var(--test-run)', color: '$colors$surface1' },
      },
    },
  }),
  Dx = Jl({ status: 'run' }),
  Ix = Jl({ status: 'pass' }),
  Wh = Jl({ status: 'fail' }),
  Mx = Z({ marginLeft: '$space$4' }),
  jx = Z({ marginBottom: '$space$2', color: '$colors$clickable' }),
  zx = Z({ marginBottom: '$space$2', color: '$colors$hover' }),
  Nx = Z({ marginLeft: '$space$2' }),
  oo = Z({ marginRight: '$space$2' }),
  op = ({ tests: r, style: e }) =>
    ze.createElement(
      'div',
      { className: L(Mx) },
      r.map((t) =>
        ze.createElement(
          'div',
          { key: t.name, className: L(jx) },
          t.status === 'pass' &&
            ze.createElement('span', { className: L(yi, oo) }, '\u2713'),
          t.status === 'fail' &&
            ze.createElement('span', { className: L(at, oo) }, '\u2715'),
          t.status === 'idle' &&
            ze.createElement('span', { className: L(sp, oo) }, '\u25CB'),
          ze.createElement('span', { className: L(zx) }, t.name),
          t.duration !== void 0 &&
            ze.createElement(
              'span',
              { className: L(Nx) },
              '(',
              t.duration,
              ' ms)',
            ),
        ),
      ),
    ),
  Bx = (r) => ys(r).filter((e) => e.status === 'fail'),
  ys = (r) =>
    Object.values(r.tests).concat(...Object.values(r.describes).map(ys)),
  Ux = (r) =>
    r
      .map(Kl)
      .reduce(
        (e, t) => ({
          pass: e.pass + t.pass,
          fail: e.fail + t.fail,
          skip: e.skip + t.skip,
          total: e.total + t.total,
        }),
        { pass: 0, skip: 0, fail: 0, total: 0 },
      ),
  Kl = (r) =>
    ys(r).reduce(
      (e, t) => ({
        pass: t.status === 'pass' ? e.pass + 1 : e.pass,
        fail: t.status === 'fail' ? e.fail + 1 : e.fail,
        skip:
          t.status === 'idle' || t.status === 'running' ? e.skip + 1 : e.skip,
        total: e.total + 1,
      }),
      { pass: 0, fail: 0, skip: 0, total: 0 },
    ),
  Vx = (r) =>
    r
      .filter(
        (e) =>
          Object.values(e.describes).length > 0 ||
          Object.values(e.tests).length > 0,
      )
      .map(Kl)
      .reduce(
        (e, t) => ({
          pass: e.pass + (t.fail === 0 ? 1 : 0),
          fail: e.fail + (t.fail > 0 ? 1 : 0),
          total: e.total + 1,
        }),
        { pass: 0, fail: 0, total: 0 },
      ),
  Yx = (r) => bn(r, ys).reduce((e, t) => e + (t.duration || 0), 0),
  lp = (r) =>
    Object.values(r.describes).length === 0 &&
    Object.values(r.tests).length === 0,
  ar = (r) => {
    let e = r.length - 1,
      t = r.slice(0, e),
      n = r[e];
    return [t, n];
  },
  bn = (r, e) => r.map(e).reduce((t, n) => t.concat(n), []),
  At = (r, e) => (t) => EQ(t, r, e),
  qx = Z({ color: '$colors$hover', marginBottom: '$space$2' }),
  Gx = Z({ marginLeft: '$space$4' }),
  ap = ({ describes: r }) =>
    O.exports.createElement(
      O.exports.Fragment,
      null,
      r.map((e) => {
        if (lp(e)) return null;
        let t = Object.values(e.tests),
          n = Object.values(e.describes);
        return O.exports.createElement(
          'div',
          { key: e.name, className: L(Gx) },
          O.exports.createElement('div', { className: L(qx) }, e.name),
          O.exports.createElement(op, { tests: t }),
          O.exports.createElement(ap, { describes: n }),
        );
      }),
    ),
  Fx = Z({
    color: '$colors$hover',
    fontSize: '$font$size',
    padding: '$space$2',
    whiteSpace: 'pre-wrap',
  }),
  Ah = ({ error: r, path: e }) =>
    O.exports.createElement('div', {
      className: L(Fx),
      dangerouslySetInnerHTML: { __html: Hx(r, e) },
    }),
  cr = (r) =>
    r
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;'),
  Hx = (r, e) => {
    let t = '';
    if (
      (r.matcherResult
        ? (t = `<span>${cr(r.message)
            .replace(/(expected)/m, `<span class="${yi}">$1</span>`)
            .replace(/(received)/m, `<span class="${at}">$1</span>`)
            .replace(/(Difference:)/m, '<span>$1</span>')
            .replace(
              /(Expected:)(.*)/m,
              `<span>$1</span><span class="${yi}">$2</span>`,
            )
            .replace(
              /(Received:)(.*)/m,
              `<span>$1</span><span class="${at}">$2</span>`,
            )
            .replace(/^(-.*)/gm, `<span class="${at}">$1</span>`)
            .replace(/^(\+.*)/gm, `<span class="${yi}">$1</span>`)}</span>`)
        : (t = cr(r.message)),
      r.mappedErrors &&
        r.mappedErrors[0] &&
        r.mappedErrors[0].fileName.endsWith(e) &&
        r.mappedErrors[0]._originalScriptCode)
    ) {
      let n = r.mappedErrors[0]._originalScriptCode || [],
        s = Math.max(...n.map((l) => (l.lineNumber + '').length)) + 2,
        o = Array.from({ length: s }).map(() => ' ');
      (t += '<br />'),
        (t += '<br />'),
        (t += '<div>'),
        n
          .filter((l) => l.content.trim())
          .forEach((l) => {
            let a = (l.lineNumber + '').length,
              c = [...o];
            (c.length -= a), l.highlight && (c.length -= 2);
            let h = l.content.indexOf('.to'),
              u = Array.from({ length: o.length + h - (s - 1) }, () => ' '),
              f = cr(l.content)
                .replace(
                  /(describe|test|it)(\()(&#039;|&quot;|`)(.*)(&#039;|&quot;|`)/m,
                  `<span>$1$2$3</span><span class="${Zx}">$4</span><span>$5</span>`,
                )
                .replace(
                  /(expect\()(.*)(\)\..*)(to[\w\d]*)(\()(.*)(\))/m,
                  `<span>$1</span><span class="${at}">$2</span><span>$3</span><span style="text-decoration: underline; font-weight: 900">$4</span><span>$5</span><span class="${yi}">$6</span><span>$7</span>`,
                );
            t +=
              `<div ${l.highlight ? 'style="font-weight:200;"' : ''}>` +
              (l.highlight ? `<span class="${at}">></span> ` : '') +
              c.join('') +
              cr('' + l.lineNumber) +
              ' | ' +
              f +
              '</div>' +
              (l.highlight
                ? '<div>' +
                  o.join('') +
                  ' | ' +
                  u.join('') +
                  `<span class="${at}">^</span></div>`
                : '');
          }),
        (t += '</div>');
    }
    return t.replace(/(?:\r\n|\r|\n)/g, '<br />');
  },
  Jx = Z({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '$space$2',
  }),
  lo = Z({ marginBottom: '$space$2' }),
  Kx = Z({ fontWeight: 'bold' }),
  hr = Z({ borderRadius: 'calc($border$radius / 2)' }),
  ev = Z({
    padding: '$space$1 $space$2',
    fontFamily: '$font$mono',
    textTransform: 'uppercase',
    marginRight: '$space$2',
  }),
  tv = Z({
    fontFamily: '$font$mono',
    cursor: 'pointer',
    display: 'inline-block',
  }),
  iv = Z({
    color: '$colors$clickable',
    textDecorationStyle: 'dotted',
    textDecorationLine: 'underline',
  }),
  nv = Z({
    color: '$colors$hover',
    fontWeight: 'bold',
    textDecorationStyle: 'dotted',
    textDecorationLine: 'underline',
  }),
  rv = ({ specs: r, openSpec: e, status: t, verbose: n }) =>
    O.exports.createElement(
      O.exports.Fragment,
      null,
      r.map((s) => {
        if (s.error)
          return O.exports.createElement(
            'div',
            { key: s.name, className: L(lo) },
            O.exports.createElement(ur, { className: L(hr, Wh) }, 'Error'),
            O.exports.createElement(Eh, {
              onClick: () => e(s.name),
              path: s.name,
            }),
            O.exports.createElement(Ah, { error: s.error, path: s.name }),
          );
        if (lp(s)) return null;
        let o = Object.values(s.tests),
          l = Object.values(s.describes),
          a = Kl(s);
        return O.exports.createElement(
          'div',
          { key: s.name, className: L(lo) },
          O.exports.createElement(
            'div',
            { className: L(Jx) },
            t === 'complete'
              ? a.fail > 0
                ? O.exports.createElement(ur, { className: L(hr, Wh) }, 'Fail')
                : O.exports.createElement(ur, { className: L(hr, Ix) }, 'Pass')
              : O.exports.createElement(ur, { className: L(hr, Dx) }, 'Run'),
            O.exports.createElement(Eh, {
              onClick: () => e(s.name),
              path: s.name,
            }),
          ),
          n && O.exports.createElement(op, { tests: o }),
          n && O.exports.createElement(ap, { describes: l }),
          Bx(s).map((c) =>
            O.exports.createElement(
              'div',
              { key: `failing-${c.name}`, className: L(lo) },
              O.exports.createElement(
                'div',
                { className: L(Kx, at) },
                '\u25CF ',
                c.blocks.join(' \u203A '),
                ' \u203A ',
                c.name,
              ),
              c.errors.map((h) =>
                O.exports.createElement(Ah, {
                  key: `failing-${c.name}-error`,
                  error: h,
                  path: c.path,
                }),
              ),
            ),
          ),
        );
      }),
    ),
  ur = ({ children: r, className: e }) =>
    O.exports.createElement('span', { className: L(ev, e) }, r),
  Eh = ({ onClick: r, path: e }) => {
    let t = e.split('/'),
      n = t.slice(0, t.length - 1).join('/') + '/',
      s = t[t.length - 1];
    return O.exports.createElement(
      'button',
      { className: L(Ve, tv), onClick: r },
      O.exports.createElement('span', { className: L(iv) }, n),
      O.exports.createElement('span', { className: L(nv) }, s),
    );
  },
  Lh = Z({ marginBottom: '$space$2' }),
  ao = Z({
    fontWeight: 'bold',
    color: '$colors$hover',
    whiteSpace: 'pre-wrap',
  }),
  sv = Z({ fontWeight: 'bold', color: '$colors$clickable' }),
  ov = ({ suites: r, tests: e, duration: t }) => {
    let n = 'Test suites: ',
      s = (o) => {
        let l = n.length - o.length,
          a = Array.from({ length: l }, () => ' ').join('');
        return o + a;
      };
    return O.exports.createElement(
      'div',
      { className: L(sv) },
      O.exports.createElement(
        'div',
        { className: L(Lh) },
        O.exports.createElement('span', { className: L(ao) }, n),
        r.fail > 0 &&
          O.exports.createElement(
            'span',
            { className: L(at) },
            r.fail,
            ' failed,',
            ' ',
          ),
        r.pass > 0 &&
          O.exports.createElement(
            'span',
            { className: L(yi) },
            r.pass,
            ' passed,',
            ' ',
          ),
        O.exports.createElement('span', null, r.total, ' total'),
      ),
      O.exports.createElement(
        'div',
        { className: L(Lh) },
        O.exports.createElement('span', { className: L(ao) }, s('Tests:')),
        e.fail > 0 &&
          O.exports.createElement(
            'span',
            { className: L(at) },
            e.fail,
            ' failed,',
            ' ',
          ),
        e.skip > 0 &&
          O.exports.createElement(
            'span',
            { className: L(sp) },
            e.skip,
            ' skipped,',
            ' ',
          ),
        e.pass > 0 &&
          O.exports.createElement(
            'span',
            { className: L(yi) },
            e.pass,
            ' passed,',
            ' ',
          ),
        O.exports.createElement('span', null, e.total, ' total'),
      ),
      O.exports.createElement(
        'div',
        { className: L(ao) },
        s('Time:'),
        t / 1e3,
        's',
      ),
    );
  },
  lv = Z({
    display: 'flex',
    position: 'absolute',
    bottom: '$space$2',
    right: '$space$2',
    zIndex: '$overlay',
    '> *': { marginLeft: '$space$2' },
  }),
  av = {
    specs: {},
    status: 'initialising',
    verbose: !1,
    watchMode: !0,
    suiteOnly: !1,
    specsCount: 0,
  },
  cp = ({
    verbose: r = !1,
    watchMode: e = !0,
    style: t,
    className: n,
    onComplete: s,
    actionsChildren: o,
    ...l
  }) => {
    let a = ms(),
      { getClient: c, iframe: h, listen: u, sandpack: f } = ql(),
      [d, p] = O.exports.useState({ ...av, verbose: r, watchMode: e });
    O.exports.useEffect(() => {
      let w = [],
        R = '';
      return u((A) => {
        if (
          !(
            d.suiteOnly &&
            (('path' in A && A.path !== f.activeFile) ||
              ('test' in A && 'path' in A.test && A.test.path !== f.activeFile))
          )
        ) {
          if (
            A.type === 'action' &&
            A.action === 'clear-errors' &&
            A.source === 'jest'
          ) {
            R = A.path;
            return;
          }
          if (A.type === 'test') {
            if (A.event === 'initialize_tests')
              return (
                (w = []),
                (R = ''),
                d.watchMode
                  ? m()
                  : p((C) => ({ ...C, status: 'idle', specs: {} }))
              );
            if (A.event === 'test_count')
              return p((C) => ({ ...C, specsCount: A.count }));
            if (A.event === 'total_test_start')
              return (w = []), p((C) => ({ ...C, status: 'running' }));
            if (A.event === 'total_test_end')
              return p(
                (C) => (
                  s !== void 0 && s(C.specs), { ...C, status: 'complete' }
                ),
              );
            if (A.event === 'add_file')
              return p(
                At(['specs', A.path], {
                  describes: {},
                  tests: {},
                  name: A.path,
                }),
              );
            if (A.event === 'remove_file')
              return p((C) => {
                let M = Object.entries(C.specs).reduce(
                  (z, [V, re]) => (V === A.path ? z : { ...z, [V]: re }),
                  {},
                );
                return { ...C, specs: M };
              });
            if (A.event === 'file_error')
              return p(At(['specs', A.path, 'error'], A.error));
            if (A.event === 'describe_start') {
              w.push(A.blockName);
              let [C, M] = ar(w);
              return M === void 0
                ? void 0
                : p(
                    At(
                      [
                        'specs',
                        R,
                        'describes',
                        ...bn(C, (V) => [V, 'describes']),
                        M,
                      ],
                      { name: A.blockName, tests: {}, describes: {} },
                    ),
                  );
            }
            if (A.event === 'describe_end') {
              w.pop();
              return;
            }
            if (A.event === 'add_test') {
              let [C, M] = ar(w),
                z = {
                  status: 'idle',
                  errors: [],
                  name: A.testName,
                  blocks: [...w],
                  path: A.path,
                };
              return p(
                At(
                  M === void 0
                    ? ['specs', A.path, 'tests', A.testName]
                    : [
                        'specs',
                        A.path,
                        'describes',
                        ...bn(C, (V) => [V, 'describes']),
                        M,
                        'tests',
                        A.testName,
                      ],
                  z,
                ),
              );
            }
            if (A.event === 'test_start') {
              let { test: C } = A,
                [M, z] = ar(C.blocks),
                V = {
                  status: 'running',
                  name: C.name,
                  blocks: C.blocks,
                  path: C.path,
                  errors: [],
                };
              return p(
                At(
                  z === void 0
                    ? ['specs', C.path, 'tests', C.name]
                    : [
                        'specs',
                        C.path,
                        'describes',
                        ...bn(M, (re) => [re, 'describes']),
                        z,
                        'tests',
                        C.name,
                      ],
                  V,
                ),
              );
            }
            if (A.event === 'test_end') {
              let { test: C } = A,
                [M, z] = ar(C.blocks),
                V = {
                  status: C.status,
                  errors: C.errors,
                  duration: C.duration,
                  name: C.name,
                  blocks: C.blocks,
                  path: C.path,
                };
              return p(
                At(
                  z === void 0
                    ? ['specs', C.path, 'tests', C.name]
                    : [
                        'specs',
                        C.path,
                        'describes',
                        ...bn(M, (re) => [re, 'describes']),
                        z,
                        'tests',
                        C.name,
                      ],
                  V,
                ),
              );
            }
          }
        }
      });
    }, [d.suiteOnly, d.watchMode, f.activeFile]);
    let m = () => {
        p((R) => ({ ...R, status: 'running', specs: {} }));
        let w = c();
        w && w.dispatch({ type: 'run-all-tests' });
      },
      S = () => {
        p((R) => ({ ...R, status: 'running', specs: {} }));
        let w = c();
        w && w.dispatch({ type: 'run-tests', path: f.activeFile });
      },
      T = /.*\.(test|spec)\.[tj]sx?$/,
      k = f.activeFile.match(T) !== null;
    O.exports.useEffect(
      function () {
        return u(({ type: w }) => {
          w === 'done' && d.watchMode && (k ? S() : m());
        });
      },
      [S, m, d.watchMode, k],
    );
    let b = (w) => {
        f.setActiveFile(w);
      },
      Q = Object.values(d.specs),
      v = Yx(Q),
      P = Ux(Q),
      y = Vx(Q);
    return O.exports.createElement(
      Ci,
      {
        className: L(`${N}-tests`, n),
        style: { ...Xx(a.themeMode === 'dark'), ...t },
        ...l,
      },
      O.exports.createElement('iframe', {
        ref: h,
        style: { display: 'none' },
        title: 'Sandpack Tests',
      }),
      O.exports.createElement(Lx, {
        setSuiteOnly: () => p((w) => ({ ...w, suiteOnly: !w.suiteOnly })),
        setVerbose: () => p((w) => ({ ...w, verbose: !w.verbose })),
        setWatchMode: () => {
          p((w) => ({ ...w, watchMode: !w.watchMode }));
        },
        showSuitesOnly: d.specsCount > 1,
        status: d.status,
        suiteOnly: d.suiteOnly,
        verbose: d.verbose,
        watchMode: d.watchMode,
      }),
      d.status === 'running' || d.status === 'initialising'
        ? O.exports.createElement(ep, { showOpenInCodeSandbox: !1 })
        : O.exports.createElement(
            'div',
            { className: lv.toString() },
            o,
            O.exports.createElement(_x, { onClick: d.suiteOnly ? S : m }),
          ),
      O.exports.createElement(
        'div',
        { className: L(cv) },
        Q.length === 0 && d.status === 'complete'
          ? O.exports.createElement(
              'div',
              { className: L(hv) },
              O.exports.createElement('p', null, 'No test files found.'),
              O.exports.createElement(
                'p',
                null,
                'Test match:',
                ' ',
                O.exports.createElement(
                  'span',
                  { className: L(at) },
                  T.toString(),
                ),
              ),
            )
          : O.exports.createElement(
              O.exports.Fragment,
              null,
              O.exports.createElement(rv, {
                openSpec: b,
                specs: Q,
                status: d.status,
                verbose: d.verbose,
              }),
              d.status === 'complete' &&
                P.total > 0 &&
                O.exports.createElement(ov, {
                  duration: v,
                  suites: y,
                  tests: P,
                }),
            ),
      ),
    );
  },
  cv = Z({
    padding: '$space$4',
    height: '100%',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    fontFamily: '$font$mono',
  }),
  hv = Z({ fontWeight: 'bold', color: '$colors$base' }),
  uv = ({ onClick: r }) => {
    let e = me('sp');
    return ze.createElement(
      'button',
      {
        className: L(
          e('button', 'icon-standalone'),
          Ve,
          tn,
          Ri,
          Z({ position: 'absolute', bottom: '$space$2', right: '$space$2' }),
        ),
        onClick: r,
      },
      ze.createElement(gd, null),
    );
  },
  fv = () =>
    ze.createElement(
      'div',
      {
        className: L(
          Z({
            borderBottom: '1px solid $colors$surface2',
            padding: '$space$3 $space$2',
            height: '$layout$headerHeight',
          }),
        ),
      },
      ze.createElement(
        'p',
        {
          className: L(
            Z({
              lineHeight: 1,
              margin: 0,
              color: '$colors$base',
              fontSize: '$font$size',
              display: 'flex',
              alignItems: 'center',
              gap: '$space$2',
            }),
          ),
        },
        ze.createElement(ds, null),
        'Console',
      ),
    ),
  dv = ['SyntaxError: ', 'Error in sandbox:'],
  pv = { id: 'random', method: 'clear', data: ['Console was cleared'] },
  _h = '@t',
  Xh = '@r',
  Zh = 1e4,
  hp = 2,
  cl = 400,
  Dh = cl * 2,
  up = (r) => {
    var e, t;
    let [n, s] = O.exports.useState([]),
      { listen: o } = ve(),
      l = (e = r?.showSyntaxError) != null ? e : !1,
      a = (t = r?.maxMessageCount) != null ? t : Dh;
    return (
      O.exports.useEffect(
        () =>
          o((c) => {
            if (c.type === 'console' && c.codesandbox) {
              if (c.log.find(({ method: u }) => u === 'clear')) return s([pv]);
              let h = l
                ? c.log
                : c.log.filter(
                    (u) =>
                      u.data.filter((f) =>
                        typeof f != 'string'
                          ? !0
                          : dv.filter((d) => f.startsWith(d)).length === 0,
                      ).length > 0,
                  );
              if (!h) return;
              s((u) => {
                let f = [...u, ...h].filter(
                  (d, p, m) => p === m.findIndex((S) => S.id === d.id),
                );
                for (; f.length > Dh; ) f.shift();
                return f;
              });
            }
          }, r?.clientId),
        [o, a, r, l],
      ),
      { logs: n, reset: () => s([]) }
    );
  },
  co = (function () {
    return (0, eval)('this');
  })(),
  Ov = typeof ArrayBuffer == 'function',
  mv = typeof Map == 'function',
  gv = typeof Set == 'function',
  Ih;
(function (r) {
  (r[(r.infinity = 0)] = 'infinity'),
    (r[(r.minusInfinity = 1)] = 'minusInfinity'),
    (r[(r.minusZero = 2)] = 'minusZero');
})(Ih || (Ih = {}));
var bv = {
    Arithmetic: (r) => (r === 0 ? 1 / 0 : r === 1 ? -1 / 0 : r === 2 ? -0 : r),
    HTMLElement: (r) => {
      let e = document.implementation.createHTMLDocument('sandbox');
      try {
        let t = e.createElement(r.tagName);
        t.innerHTML = r.innerHTML;
        for (let n of Object.keys(r.attributes))
          try {
            t.setAttribute(n, r.attributes[n]);
          } catch {}
        return t;
      } catch {
        return r;
      }
    },
    Function: (r) => {
      let e = () => {};
      return (
        Object.defineProperty(e, 'toString', {
          value: () => `function ${r.name}() {${r.body}}`,
        }),
        e
      );
    },
    '[[NaN]]': () => NaN,
    '[[undefined]]': () => {},
    '[[Date]]': (r) => {
      let e = new Date();
      return e.setTime(r), e;
    },
    '[[RegExp]]': (r) => new RegExp(r.src, r.flags),
    '[[Error]]': (r) => {
      let e = co[r.name] || Error,
        t = new e(r.message);
      return (t.stack = r.stack), t;
    },
    '[[ArrayBuffer]]': (r) => {
      if (Ov) {
        let e = new ArrayBuffer(r.length);
        return new Int8Array(e).set(r), e;
      }
      return r;
    },
    '[[TypedArray]]': (r) =>
      typeof co[r.ctorName] == 'function' ? new co[r.ctorName](r.arr) : r.arr,
    '[[Map]]': (r) => {
      if (mv) {
        let t = new Map();
        for (let n = 0; n < r.length; n += 2) t.set(r[n], r[n + 1]);
        return t;
      }
      let e = [];
      for (let t = 0; t < r.length; t += 2) e.push([r[i], r[i + 1]]);
      return e;
    },
    '[[Set]]': (r) => {
      if (gv) {
        let e = new Set();
        for (let t = 0; t < r.length; t++) e.add(r[t]);
        return e;
      }
      return r;
    },
  },
  fp = (r) => {
    if (typeof r == 'string' || typeof r == 'number' || r === null) return r;
    if (Array.isArray(r)) return r.map(fp);
    if (typeof r == 'object' && _h in r) {
      let e = r[_h];
      return bv[e](r.data);
    }
    return r;
  },
  yv = (r, e, t) =>
    `[${r.reduce((n, s, o) => `${n}${o ? ', ' : ''}${Qs(s, e, t)}`, '')}]`,
  Qv = (r, e, t) => {
    let n = r.constructor.name !== 'Object' ? `${r.constructor.name} ` : '';
    if (t > hp) return n;
    let s = Object.entries(r),
      o = Object.entries(r).reduce((l, [a, c], h) => {
        let u = h === 0 ? '' : ', ',
          f =
            s.length > 10
              ? `
  `
              : '',
          d = Qs(c, e, t);
        return h === cl ? l + f + '...' : h > cl ? l : l + `${u}${f}${a}: ` + d;
      }, '');
    return `${n}{ ${o}${
      s.length > 10
        ? `
`
        : ' '
    }}`;
  },
  Qs = (r, e, t = 0) => {
    try {
      let n = fp(r);
      if (Array.isArray(n)) return yv(n, e, t + 1);
      switch (typeof n) {
        case 'string':
          return `"${n}"`.slice(0, Zh);
        case 'number':
        case 'function':
        case 'symbol':
          return n.toString();
        case 'boolean':
          return String(n);
        case 'undefined':
          return 'undefined';
        case 'object':
        default:
          if (n instanceof RegExp || n instanceof Error || n instanceof Date)
            return n.toString();
          if (n === null) return String(null);
          if (n instanceof HTMLElement) return n.outerHTML.slice(0, Zh);
          if (Object.entries(n).length === 0) return '{}';
          if (Xh in n) {
            if (t > hp) return 'Unable to print information';
            let s = e[n[Xh]];
            return Qs(s, e, t + 1);
          }
          return Qv(n, e, t + 1);
      }
    } catch {
      return 'Unable to print information';
    }
  },
  xv = (r) => {
    switch (r) {
      case 'warn':
        return 'warning';
      case 'clear':
        return 'clear';
      case 'error':
        return 'error';
      case 'log':
      case 'info':
      default:
        return 'info';
    }
  },
  dp = ({
    clientId: r,
    showHeader: e = !0,
    showSyntaxError: t = !1,
    maxMessageCount: n,
    onLogsChange: s,
    className: o,
    ...l
  }) => {
    let { logs: a, reset: c } = up({
        clientId: r,
        maxMessageCount: n,
        showSyntaxError: t,
      }),
      h = O.exports.useRef(null);
    return (
      O.exports.useEffect(() => {
        s?.(a), h.current && (h.current.scrollTop = h.current.scrollHeight);
      }, [s, a]),
      O.exports.createElement(
        Ci,
        {
          className: L(
            Z({ height: '100%', background: '$surface1' }),
            `${N}-console`,
            o,
          ),
          ...l,
        },
        e && O.exports.createElement(fv, null),
        O.exports.createElement(
          'div',
          {
            ref: h,
            className: L(Z({ overflow: 'auto', scrollBehavior: 'smooth' })),
          },
          a.map(({ data: u, id: f, method: d }, p, m) =>
            u && Array.isArray(u)
              ? O.exports.createElement(
                  O.exports.Fragment,
                  { key: f },
                  u.map((S, T) => {
                    let k = m.slice(p, m.length);
                    return O.exports.createElement(
                      'div',
                      {
                        key: `${f}-${T}`,
                        className: L(vv({ variant: xv(d) })),
                      },
                      O.exports.createElement(gs, {
                        code: d === 'clear' ? S : Qs(S, k),
                        fileType: 'js',
                        initMode: 'user-visible',
                        showReadOnly: !1,
                        readOnly: !0,
                        wrapContent: !0,
                      }),
                    );
                  }),
                )
              : null,
          ),
        ),
        O.exports.createElement(uv, { onClick: c }),
      )
    );
  },
  vv = Z({
    width: '100%',
    padding: '$space$3 $space$2',
    fontSize: '.85em',
    position: 'relative',
    '&:not(:first-child):after': {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 1,
      background: '$colors$surface3',
    },
    '.sp-cm': { padding: 0 },
    '.cm-editor': { background: 'none' },
    '.cm-content': { padding: 0 },
    [`.${N}-pre-placeholder`]: { margin: '0 !important', fontSize: '1em' },
    variants: {
      variant: {
        error: {
          color: '$colors$error',
          background: '$colors$errorSurface',
          '&:not(:first-child):after': {
            background: '$colors$error',
            opacity: 0.07,
          },
        },
        warning: {
          color: '$colors$warning',
          background: '$colors$warningSurface',
          '&:not(:first-child):after': {
            background: '$colors$warning',
            opacity: 0.07,
          },
        },
        clear: { fontStyle: 'italic' },
        info: {},
      },
    },
  }),
  Sv = (r) => {
    var e,
      t,
      n,
      s,
      o,
      l,
      a,
      c,
      h,
      u,
      f,
      d,
      p,
      m,
      S,
      T,
      k,
      b,
      Q,
      v,
      P,
      y,
      w,
      R,
      A,
      C,
      M,
      z,
      V,
      re,
      ge,
      Qe,
      je,
      be,
      ye,
      We,
      Xe,
      F,
      ie,
      ae,
      H,
      nt;
    let Wi = {
        showTabs: (e = r.options) == null ? void 0 : e.showTabs,
        showLineNumbers: (t = r.options) == null ? void 0 : t.showLineNumbers,
        showInlineErrors: (n = r.options) == null ? void 0 : n.showInlineErrors,
        wrapContent: (s = r.options) == null ? void 0 : s.wrapContent,
        closableTabs: (o = r.options) == null ? void 0 : o.closableTabs,
        initMode: (l = r.options) == null ? void 0 : l.initMode,
        extensions:
          (c = (a = r.options) == null ? void 0 : a.codeEditor) == null
            ? void 0
            : c.extensions,
        extensionsKeymap:
          (u = (h = r.options) == null ? void 0 : h.codeEditor) == null
            ? void 0
            : u.extensionsKeymap,
        readOnly: (f = r.options) == null ? void 0 : f.readOnly,
        showReadOnly: (d = r.options) == null ? void 0 : d.showReadOnly,
        id: (p = r.options) == null ? void 0 : p.id,
        additionalLanguages:
          (S = (m = r.options) == null ? void 0 : m.codeEditor) == null
            ? void 0
            : S.additionalLanguages,
      },
      xe = {
        activeFile: (T = r.options) == null ? void 0 : T.activeFile,
        visibleFiles: (k = r.options) == null ? void 0 : k.visibleFiles,
        recompileMode: (b = r.options) == null ? void 0 : b.recompileMode,
        recompileDelay: (Q = r.options) == null ? void 0 : Q.recompileDelay,
        autorun: (v = r.options) == null ? void 0 : v.autorun,
        bundlerURL: (P = r.options) == null ? void 0 : P.bundlerURL,
        startRoute: (y = r.options) == null ? void 0 : y.startRoute,
        skipEval: (w = r.options) == null ? void 0 : w.skipEval,
        fileResolver: (R = r.options) == null ? void 0 : R.fileResolver,
        initMode: (A = r.options) == null ? void 0 : A.initMode,
        initModeObserverOptions:
          (C = r.options) == null ? void 0 : C.initModeObserverOptions,
        externalResources:
          (M = r.options) == null ? void 0 : M.externalResources,
        logLevel: (z = r.options) == null ? void 0 : z.logLevel,
        classes: (V = r.options) == null ? void 0 : V.classes,
      },
      [Ae, Ye] = O.exports.useState(
        (ge = (re = r.options) == null ? void 0 : re.showConsole) != null
          ? ge
          : !1,
      ),
      [ft, dt] = O.exports.useState(0),
      rt = ((Qe = r.options) == null ? void 0 : Qe.editorWidthPercentage) || 50,
      Nt = 100 - rt,
      oi =
        ((je = r.options) == null ? void 0 : je.showConsole) ||
        ((be = r.options) == null ? void 0 : be.showConsoleButton),
      xs = oi ? Ci : O.exports.Fragment,
      li = {
        flexGrow: Nt,
        flexShrink: Nt,
        flexBasis: 0,
        minWidth: 700 * (Nt / (Nt + rt)),
        gap: Ae ? 1 : 0,
        height: (ye = r.options) == null ? void 0 : ye.editorHeight,
      },
      vs = O.exports.useMemo(() => (oi ? { style: li } : {}), [oi]),
      _n = (We = Yr[r.template]) != null ? We : {},
      Xn = 'mode' in _n ? _n.mode : 'preview',
      Zn =
        (Xe = r.options) != null && Xe.showConsoleButton
          ? O.exports.createElement($v, {
              counter: ft,
              onClick: () => Ye((Bt) => !Bt),
            })
          : void 0;
    return (
      O.exports.useEffect(() => {
        var Bt, Dn;
        Ye(
          (Dn = (Bt = r.options) == null ? void 0 : Bt.showConsole) != null
            ? Dn
            : !1,
        );
      }, [(F = r.options) == null ? void 0 : F.showConsole]),
      O.exports.createElement(
        Dd,
        {
          customSetup: r.customSetup,
          files: r.files,
          options: xe,
          template: r.template,
          theme: r.theme,
        },
        O.exports.createElement(
          rp,
          null,
          O.exports.createElement(Bd, {
            ...Wi,
            style: {
              height: (ie = r.options) == null ? void 0 : ie.editorHeight,
              flexGrow: rt,
              flexShrink: rt,
              minWidth: 700 * (rt / (Nt + rt)),
            },
          }),
          O.exports.createElement(
            xs,
            { ...vs },
            Xn === 'preview' &&
              O.exports.createElement(ip, {
                actionsChildren: Zn,
                showNavigator:
                  (ae = r.options) == null ? void 0 : ae.showNavigator,
                showRefreshButton:
                  (H = r.options) == null ? void 0 : H.showRefreshButton,
                style: { ...li, flex: oi ? 1 : li.flexGrow },
              }),
            Xn === 'tests' &&
              O.exports.createElement(cp, {
                actionsChildren: Zn,
                style: { ...li, flex: oi ? 1 : li.flexGrow },
              }),
            (((nt = r.options) == null ? void 0 : nt.showConsoleButton) ||
              Ae) &&
              O.exports.createElement(
                'div',
                { className: wv.toString(), style: { flex: Ae ? 0.5 : 0 } },
                O.exports.createElement(dp, {
                  onLogsChange: (Bt) => dt(Bt.length),
                  showHeader: !1,
                }),
              ),
          ),
        ),
      )
    );
  },
  $v = ({ onClick: r, counter: e }) =>
    O.exports.createElement(
      'button',
      { className: L(Ve, tn, Ri, kv), onClick: r },
      O.exports.createElement(ds, null),
      e > 0 && O.exports.createElement('span', null, e),
    ),
  kv = Z({
    position: 'relative',
    span: {
      background: '$colors$clickable',
      color: '$colors$surface1',
      minWidth: 12,
      height: 12,
      padding: '0 2px',
      borderRadius: 12,
      fontSize: 8,
      lineHeight: '12px',
      position: 'absolute',
      top: 0,
      right: 0,
    },
  }),
  wv = Z({
    transition: 'flex $transitions$default',
    width: '100%',
    overflow: 'hidden',
  });
const Tv = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      ANGULAR_TEMPLATE: Td,
      BackwardIcon: Od,
      CleanIcon: gd,
      CloseIcon: vd,
      CodeEditor: gs,
      ConsoleIcon: ds,
      DirectoryIconClosed: Qd,
      DirectoryIconOpen: yd,
      ErrorOverlay: Gl,
      ExportIcon: bd,
      FADE_ANIMATION_DURATION: Yl,
      FileIcon: xd,
      FileTabs: Ul,
      ForwardIcon: md,
      LoadingOverlay: Hl,
      Navigator: qd,
      OpenInCodeSandboxButton: Fl,
      REACT_TEMPLATE: Pd,
      REACT_TYPESCRIPT_TEMPLATE: Rd,
      RefreshButton: tp,
      RefreshIcon: Nl,
      RunButton: Vl,
      RunIcon: zl,
      SANDBOX_TEMPLATES: Yr,
      SANDPACK_THEMES: Sd,
      SOLID_TEMPLATE: Cd,
      SVELTE_TEMPLATE: Wd,
      Sandpack: Sv,
      SandpackCodeEditor: Bd,
      SandpackCodeViewer: Ud,
      SandpackConsole: dp,
      SandpackConsumer: qQ,
      SandpackFileExplorer: Ox,
      SandpackLayout: rp,
      SandpackPreview: ip,
      SandpackProvider: Dd,
      SandpackProviderClass: Zd,
      SandpackReactContext: Os,
      SandpackReactDevTools: Ax,
      SandpackStack: Ci,
      SandpackTests: cp,
      SandpackThemeConsumer: UQ,
      SandpackThemeContext: ps,
      SandpackThemeProvider: wd,
      SandpackTranspiledCode: Cx,
      TEST_TYPESCRIPT_TEMPLATE: Ad,
      UnstyledOpenInCodeSandboxButton: Kd,
      VANILLA_TEMPLATE: Ed,
      VANILLA_TYPESCRIPT_TEMPLATE: Ld,
      VUE_TEMPLATE: _d,
      VUE_TEMPLATE_3: Xd,
      defaultDark: Ur,
      defaultLight: Ji,
      getSandpackCssText: IQ,
      layoutClassName: np,
      stackClassName: Ln,
      tabButton: jd,
      useActiveCode: Bl,
      useErrorMessage: Gd,
      useLoadingOverlayState: Fd,
      useSandpack: ve,
      useSandpackClient: ql,
      useSandpackConsole: up,
      useSandpackNavigation: Hd,
      useSandpackTheme: ms,
      useTranspiledCode: Jd,
      ClasserProvider: Mh,
      useClasser: me,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
var Pv = {
  colors: {
    surface1: '#011627',
    surface2: '#243b4c',
    surface3: '#112331',
    clickable: '#6988a1',
    base: '#808080',
    disabled: '#4D4D4D',
    hover: '#c5e4fd',
    accent: '#c5e4fd',
    error: '#ffcdca',
    errorSurface: '#811e18',
  },
  syntax: {
    plain: '#d6deeb',
    comment: { color: '#999999', fontStyle: 'italic' },
    keyword: { color: '#c792ea', fontStyle: 'italic' },
    tag: '#7fdbca',
    punctuation: '#7fdbca',
    definition: '#82aaff',
    property: { color: '#addb67', fontStyle: 'italic' },
    static: '#f78c6c',
    string: '#ecc48d',
  },
  font: {
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono:
      '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    size: '13px',
    lineHeight: '20px',
  },
};
const {
    SandpackProvider: Rv,
    SandpackThemeProvider: Cv,
    SandpackCodeEditor: Wv,
    SandpackPreview: Av,
  } = Tv,
  Ev = `
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@itwin/itwinui-react';
import App from './App';
import './styles.css';
createRoot(document.getElementById('root')).render(<ThemeProvider theme='dark'><App /></ThemeProvider>);
`,
  Lv = `
* {
  margin: 0;
  box-sizing: border-box;
}
html { color-scheme: dark; }
#root {
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, hsl(221deg 12% 40%), hsl(221deg 22% 25%));
}
`,
  Iv = ({ code: r = '', staticComponent: e, ...t }) => {
    const n = O.exports.useId(),
      [s, o] = O.exports.useState(),
      [l, a] = O.exports.useState(!1),
      [c, h] = O.exports.useState(void 0),
      u = !1;
    return (
      O.exports.useEffect(() => {
        if (!(l || !s))
          return s.listen((f) => {
            f.type === 'done' && a(!0);
          });
      }, [l, s]),
      Oi.exports.jsxs(pp.Provider, {
        value: { isExpanded: c, setIsExpanded: h },
        children: [
          u,
          Oi.exports.jsx(Rv, {
            template: 'react-ts',
            files: {
              '/App.tsx': r.trim(),
              '/index.tsx': { code: Ev.trim(), hidden: !0 },
              '/styles.css': { code: Lv.trim(), hidden: !0 },
            },
            customSetup: { dependencies: { '@itwin/itwinui-react': 'dev' } },
            id: n,
            ...t,
            children: Oi.exports.jsxs(Cv, {
              theme: Pv,
              children: [
                Oi.exports.jsx(Av, {
                  ref: (f) => {
                    o(f?.getClient());
                  },
                  style: {
                    visibility: 'visible',
                    position: 'relative',
                    left: void 0,
                  },
                  actionsChildren: Oi.exports.jsx(_v, {}),
                }),
                c && Oi.exports.jsx(Wv, { showTabs: !1 }),
              ],
            }),
          }),
        ],
      })
    );
  },
  pp = O.exports.createContext({ isExpanded: void 0, setIsExpanded: () => {} }),
  _v = () => {
    const { isExpanded: r, setIsExpanded: e } = O.exports.useContext(pp);
    return Oi.exports.jsx('button', {
      onClick: () => e((t) => !t),
      className: 'show-code-button',
      children: r ? 'Hide code' : 'Show code',
    });
  };
export { Iv as default };
