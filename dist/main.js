import { jsx as J } from "react/jsx-runtime";
import Y, { useState as Z, useEffect as rr } from "react";
var z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function q(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
function nr(l) {
  if (l.__esModule)
    return l;
  var d = l.default;
  if (typeof d == "function") {
    var f = function i() {
      return this instanceof i ? Reflect.construct(d, arguments, this.constructor) : d.apply(this, arguments);
    };
    f.prototype = d.prototype;
  } else
    f = {};
  return Object.defineProperty(f, "__esModule", { value: !0 }), Object.keys(l).forEach(function(i) {
    var h = Object.getOwnPropertyDescriptor(l, i);
    Object.defineProperty(f, i, h.get ? h : {
      enumerable: !0,
      get: function() {
        return l[i];
      }
    });
  }), f;
}
var P = { exports: {} };
(function(l, d) {
  (function(f, i) {
    {
      var h = i();
      l && l.exports && (d = l.exports = h), d.randomColor = h;
    }
  })(z, function() {
    var f = null, i = {};
    E();
    var h = [], m = function(n) {
      if (n = n || {}, n.seed !== void 0 && n.seed !== null && n.seed === parseInt(n.seed, 10))
        f = n.seed;
      else if (typeof n.seed == "string")
        f = C(n.seed);
      else {
        if (n.seed !== void 0 && n.seed !== null)
          throw new TypeError("The seed value must be an integer or string");
        f = null;
      }
      var o, u, v;
      if (n.count !== null && n.count !== void 0) {
        for (var g = n.count, w = [], b = 0; b < n.count; b++)
          h.push(!1);
        for (n.count = null; g > w.length; ) {
          var A = m(n);
          f !== null && (n.seed = f), w.push(A);
        }
        return n.count = g, w;
      }
      return o = p(n), u = c(o, n), v = r(o, u, n), e([o, u, v], n);
    };
    function p(n) {
      if (h.length > 0) {
        var o = S(n.hue), u = y(o), v = (o[1] - o[0]) / h.length, g = parseInt((u - o[0]) / v);
        h[g] === !0 ? g = (g + 2) % h.length : h[g] = !0;
        var w = (o[0] + g * v) % 359, b = (o[0] + (g + 1) * v) % 359;
        return o = [w, b], u = y(o), u < 0 && (u = 360 + u), u;
      } else {
        var o = t(n.hue);
        return u = y(o), u < 0 && (u = 360 + u), u;
      }
    }
    function c(n, o) {
      if (o.hue === "monochrome")
        return 0;
      if (o.luminosity === "random")
        return y([0, 100]);
      var u = a(n), v = u[0], g = u[1];
      switch (o.luminosity) {
        case "bright":
          v = 55;
          break;
        case "dark":
          v = g - 10;
          break;
        case "light":
          g = 55;
          break;
      }
      return y([v, g]);
    }
    function r(n, o, u) {
      var v = s(n, o), g = 100;
      switch (u.luminosity) {
        case "dark":
          g = v + 20;
          break;
        case "light":
          v = (g + v) / 2;
          break;
        case "random":
          v = 0, g = 100;
          break;
      }
      return y([v, g]);
    }
    function e(n, o) {
      switch (o.format) {
        case "hsvArray":
          return n;
        case "hslArray":
          return M(n);
        case "hsl":
          var u = M(n);
          return "hsl(" + u[0] + ", " + u[1] + "%, " + u[2] + "%)";
        case "hsla":
          var v = M(n), b = o.alpha || Math.random();
          return "hsla(" + v[0] + ", " + v[1] + "%, " + v[2] + "%, " + b + ")";
        case "rgbArray":
          return $(n);
        case "rgb":
          var g = $(n);
          return "rgb(" + g.join(", ") + ")";
        case "rgba":
          var w = $(n), b = o.alpha || Math.random();
          return "rgba(" + w.join(", ") + ", " + b + ")";
        default:
          return R(n);
      }
    }
    function s(n, o) {
      for (var u = x(n).lowerBounds, v = 0; v < u.length - 1; v++) {
        var g = u[v][0], w = u[v][1], b = u[v + 1][0], A = u[v + 1][1];
        if (o >= g && o <= b) {
          var O = (A - w) / (b - g), j = w - O * g;
          return O * o + j;
        }
      }
      return 0;
    }
    function t(n) {
      if (typeof parseInt(n) == "number") {
        var o = parseInt(n);
        if (o < 360 && o > 0)
          return [o, o];
      }
      if (typeof n == "string") {
        if (i[n]) {
          var u = i[n];
          if (u.hueRange)
            return u.hueRange;
        } else if (n.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
          var v = _(n)[0];
          return [v, v];
        }
      }
      return [0, 360];
    }
    function a(n) {
      return x(n).saturationRange;
    }
    function x(n) {
      n >= 334 && n <= 360 && (n -= 360);
      for (var o in i) {
        var u = i[o];
        if (u.hueRange && n >= u.hueRange[0] && n <= u.hueRange[1])
          return i[o];
      }
      return "Color not found";
    }
    function y(n) {
      if (f === null) {
        var o = 0.618033988749895, u = Math.random();
        return u += o, u %= 1, Math.floor(n[0] + u * (n[1] + 1 - n[0]));
      } else {
        var v = n[1] || 1, g = n[0] || 0;
        f = (f * 9301 + 49297) % 233280;
        var w = f / 233280;
        return Math.floor(g + w * (v - g));
      }
    }
    function R(n) {
      var o = $(n);
      function u(g) {
        var w = g.toString(16);
        return w.length == 1 ? "0" + w : w;
      }
      var v = "#" + u(o[0]) + u(o[1]) + u(o[2]);
      return v;
    }
    function k(n, o, u) {
      var v = u[0][0], g = u[u.length - 1][0], w = u[u.length - 1][1], b = u[0][1];
      i[n] = {
        hueRange: o,
        lowerBounds: u,
        saturationRange: [v, g],
        brightnessRange: [w, b]
      };
    }
    function E() {
      k(
        "monochrome",
        null,
        [[0, 0], [100, 0]]
      ), k(
        "red",
        [-26, 18],
        [[20, 100], [30, 92], [40, 89], [50, 85], [60, 78], [70, 70], [80, 60], [90, 55], [100, 50]]
      ), k(
        "orange",
        [18, 46],
        [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]]
      ), k(
        "yellow",
        [46, 62],
        [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]]
      ), k(
        "green",
        [62, 178],
        [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]]
      ), k(
        "blue",
        [178, 257],
        [[20, 100], [30, 86], [40, 80], [50, 74], [60, 60], [70, 52], [80, 44], [90, 39], [100, 35]]
      ), k(
        "purple",
        [257, 282],
        [[20, 100], [30, 87], [40, 79], [50, 70], [60, 65], [70, 59], [80, 52], [90, 45], [100, 42]]
      ), k(
        "pink",
        [282, 334],
        [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]]
      );
    }
    function $(n) {
      var o = n[0];
      o === 0 && (o = 1), o === 360 && (o = 359), o = o / 360;
      var u = n[1] / 100, v = n[2] / 100, g = Math.floor(o * 6), w = o * 6 - g, b = v * (1 - u), A = v * (1 - w * u), O = v * (1 - (1 - w) * u), j = 256, X = 256, T = 256;
      switch (g) {
        case 0:
          j = v, X = O, T = b;
          break;
        case 1:
          j = A, X = v, T = b;
          break;
        case 2:
          j = b, X = v, T = O;
          break;
        case 3:
          j = b, X = A, T = v;
          break;
        case 4:
          j = O, X = b, T = v;
          break;
        case 5:
          j = v, X = b, T = A;
          break;
      }
      var Q = [Math.floor(j * 255), Math.floor(X * 255), Math.floor(T * 255)];
      return Q;
    }
    function _(n) {
      n = n.replace(/^#/, ""), n = n.length === 3 ? n.replace(/(.)/g, "$1$1") : n;
      var o = parseInt(n.substr(0, 2), 16) / 255, u = parseInt(n.substr(2, 2), 16) / 255, v = parseInt(n.substr(4, 2), 16) / 255, g = Math.max(o, u, v), w = g - Math.min(o, u, v), b = g ? w / g : 0;
      switch (g) {
        case o:
          return [60 * ((u - v) / w % 6) || 0, b, g];
        case u:
          return [60 * ((v - o) / w + 2) || 0, b, g];
        case v:
          return [60 * ((o - u) / w + 4) || 0, b, g];
      }
    }
    function M(n) {
      var o = n[0], u = n[1] / 100, v = n[2] / 100, g = (2 - u) * v;
      return [
        o,
        Math.round(u * v / (g < 1 ? g : 2 - g) * 1e4) / 100,
        g / 2 * 100
      ];
    }
    function C(n) {
      for (var o = 0, u = 0; u !== n.length && !(o >= Number.MAX_SAFE_INTEGER); u++)
        o += n.charCodeAt(u);
      return o;
    }
    function S(n) {
      if (isNaN(n)) {
        if (typeof n == "string") {
          if (i[n]) {
            var u = i[n];
            if (u.hueRange)
              return u.hueRange;
          } else if (n.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
            var v = _(n)[0];
            return x(v).hueRange;
          }
        }
      } else {
        var o = parseInt(n);
        if (o < 360 && o > 0)
          return x(n).hueRange;
      }
      return [0, 360];
    }
    return m;
  });
})(P, P.exports);
var tr = P.exports;
const er = /* @__PURE__ */ q(tr);
var D = { exports: {} };
D.exports;
(function(l) {
  (function(d, f, i) {
    function h(r) {
      var e = this, s = c();
      e.next = function() {
        var t = 2091639 * e.s0 + e.c * 23283064365386963e-26;
        return e.s0 = e.s1, e.s1 = e.s2, e.s2 = t - (e.c = t | 0);
      }, e.c = 1, e.s0 = s(" "), e.s1 = s(" "), e.s2 = s(" "), e.s0 -= s(r), e.s0 < 0 && (e.s0 += 1), e.s1 -= s(r), e.s1 < 0 && (e.s1 += 1), e.s2 -= s(r), e.s2 < 0 && (e.s2 += 1), s = null;
    }
    function m(r, e) {
      return e.c = r.c, e.s0 = r.s0, e.s1 = r.s1, e.s2 = r.s2, e;
    }
    function p(r, e) {
      var s = new h(r), t = e && e.state, a = s.next;
      return a.int32 = function() {
        return s.next() * 4294967296 | 0;
      }, a.double = function() {
        return a() + (a() * 2097152 | 0) * 11102230246251565e-32;
      }, a.quick = a, t && (typeof t == "object" && m(t, s), a.state = function() {
        return m(s, {});
      }), a;
    }
    function c() {
      var r = 4022871197, e = function(s) {
        s = String(s);
        for (var t = 0; t < s.length; t++) {
          r += s.charCodeAt(t);
          var a = 0.02519603282416938 * r;
          r = a >>> 0, a -= r, a *= r, r = a >>> 0, a -= r, r += a * 4294967296;
        }
        return (r >>> 0) * 23283064365386963e-26;
      };
      return e;
    }
    f && f.exports ? f.exports = p : i && i.amd ? i(function() {
      return p;
    }) : this.alea = p;
  })(
    z,
    l,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(D);
var ar = D.exports, F = { exports: {} };
F.exports;
(function(l) {
  (function(d, f, i) {
    function h(c) {
      var r = this, e = "";
      r.x = 0, r.y = 0, r.z = 0, r.w = 0, r.next = function() {
        var t = r.x ^ r.x << 11;
        return r.x = r.y, r.y = r.z, r.z = r.w, r.w ^= r.w >>> 19 ^ t ^ t >>> 8;
      }, c === (c | 0) ? r.x = c : e += c;
      for (var s = 0; s < e.length + 64; s++)
        r.x ^= e.charCodeAt(s) | 0, r.next();
    }
    function m(c, r) {
      return r.x = c.x, r.y = c.y, r.z = c.z, r.w = c.w, r;
    }
    function p(c, r) {
      var e = new h(c), s = r && r.state, t = function() {
        return (e.next() >>> 0) / 4294967296;
      };
      return t.double = function() {
        do
          var a = e.next() >>> 11, x = (e.next() >>> 0) / 4294967296, y = (a + x) / (1 << 21);
        while (y === 0);
        return y;
      }, t.int32 = e.next, t.quick = t, s && (typeof s == "object" && m(s, e), t.state = function() {
        return m(e, {});
      }), t;
    }
    f && f.exports ? f.exports = p : i && i.amd ? i(function() {
      return p;
    }) : this.xor128 = p;
  })(
    z,
    l,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(F);
var or = F.exports, N = { exports: {} };
N.exports;
(function(l) {
  (function(d, f, i) {
    function h(c) {
      var r = this, e = "";
      r.next = function() {
        var t = r.x ^ r.x >>> 2;
        return r.x = r.y, r.y = r.z, r.z = r.w, r.w = r.v, (r.d = r.d + 362437 | 0) + (r.v = r.v ^ r.v << 4 ^ (t ^ t << 1)) | 0;
      }, r.x = 0, r.y = 0, r.z = 0, r.w = 0, r.v = 0, c === (c | 0) ? r.x = c : e += c;
      for (var s = 0; s < e.length + 64; s++)
        r.x ^= e.charCodeAt(s) | 0, s == e.length && (r.d = r.x << 10 ^ r.x >>> 4), r.next();
    }
    function m(c, r) {
      return r.x = c.x, r.y = c.y, r.z = c.z, r.w = c.w, r.v = c.v, r.d = c.d, r;
    }
    function p(c, r) {
      var e = new h(c), s = r && r.state, t = function() {
        return (e.next() >>> 0) / 4294967296;
      };
      return t.double = function() {
        do
          var a = e.next() >>> 11, x = (e.next() >>> 0) / 4294967296, y = (a + x) / (1 << 21);
        while (y === 0);
        return y;
      }, t.int32 = e.next, t.quick = t, s && (typeof s == "object" && m(s, e), t.state = function() {
        return m(e, {});
      }), t;
    }
    f && f.exports ? f.exports = p : i && i.amd ? i(function() {
      return p;
    }) : this.xorwow = p;
  })(
    z,
    l,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(N);
var ir = N.exports, B = { exports: {} };
B.exports;
(function(l) {
  (function(d, f, i) {
    function h(c) {
      var r = this;
      r.next = function() {
        var s = r.x, t = r.i, a, x;
        return a = s[t], a ^= a >>> 7, x = a ^ a << 24, a = s[t + 1 & 7], x ^= a ^ a >>> 10, a = s[t + 3 & 7], x ^= a ^ a >>> 3, a = s[t + 4 & 7], x ^= a ^ a << 7, a = s[t + 7 & 7], a = a ^ a << 13, x ^= a ^ a << 9, s[t] = x, r.i = t + 1 & 7, x;
      };
      function e(s, t) {
        var a, x = [];
        if (t === (t | 0))
          x[0] = t;
        else
          for (t = "" + t, a = 0; a < t.length; ++a)
            x[a & 7] = x[a & 7] << 15 ^ t.charCodeAt(a) + x[a + 1 & 7] << 13;
        for (; x.length < 8; )
          x.push(0);
        for (a = 0; a < 8 && x[a] === 0; ++a)
          ;
        for (a == 8 ? x[7] = -1 : x[a], s.x = x, s.i = 0, a = 256; a > 0; --a)
          s.next();
      }
      e(r, c);
    }
    function m(c, r) {
      return r.x = c.x.slice(), r.i = c.i, r;
    }
    function p(c, r) {
      c == null && (c = +/* @__PURE__ */ new Date());
      var e = new h(c), s = r && r.state, t = function() {
        return (e.next() >>> 0) / 4294967296;
      };
      return t.double = function() {
        do
          var a = e.next() >>> 11, x = (e.next() >>> 0) / 4294967296, y = (a + x) / (1 << 21);
        while (y === 0);
        return y;
      }, t.int32 = e.next, t.quick = t, s && (s.x && m(s, e), t.state = function() {
        return m(e, {});
      }), t;
    }
    f && f.exports ? f.exports = p : i && i.amd ? i(function() {
      return p;
    }) : this.xorshift7 = p;
  })(
    z,
    l,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(B);
var ur = B.exports, H = { exports: {} };
H.exports;
(function(l) {
  (function(d, f, i) {
    function h(c) {
      var r = this;
      r.next = function() {
        var s = r.w, t = r.X, a = r.i, x, y;
        return r.w = s = s + 1640531527 | 0, y = t[a + 34 & 127], x = t[a = a + 1 & 127], y ^= y << 13, x ^= x << 17, y ^= y >>> 15, x ^= x >>> 12, y = t[a] = y ^ x, r.i = a, y + (s ^ s >>> 16) | 0;
      };
      function e(s, t) {
        var a, x, y, R, k, E = [], $ = 128;
        for (t === (t | 0) ? (x = t, t = null) : (t = t + "\0", x = 0, $ = Math.max($, t.length)), y = 0, R = -32; R < $; ++R)
          t && (x ^= t.charCodeAt((R + 32) % t.length)), R === 0 && (k = x), x ^= x << 10, x ^= x >>> 15, x ^= x << 4, x ^= x >>> 13, R >= 0 && (k = k + 1640531527 | 0, a = E[R & 127] ^= x + k, y = a == 0 ? y + 1 : 0);
        for (y >= 128 && (E[(t && t.length || 0) & 127] = -1), y = 127, R = 4 * 128; R > 0; --R)
          x = E[y + 34 & 127], a = E[y = y + 1 & 127], x ^= x << 13, a ^= a << 17, x ^= x >>> 15, a ^= a >>> 12, E[y] = x ^ a;
        s.w = k, s.X = E, s.i = y;
      }
      e(r, c);
    }
    function m(c, r) {
      return r.i = c.i, r.w = c.w, r.X = c.X.slice(), r;
    }
    function p(c, r) {
      c == null && (c = +/* @__PURE__ */ new Date());
      var e = new h(c), s = r && r.state, t = function() {
        return (e.next() >>> 0) / 4294967296;
      };
      return t.double = function() {
        do
          var a = e.next() >>> 11, x = (e.next() >>> 0) / 4294967296, y = (a + x) / (1 << 21);
        while (y === 0);
        return y;
      }, t.int32 = e.next, t.quick = t, s && (s.X && m(s, e), t.state = function() {
        return m(e, {});
      }), t;
    }
    f && f.exports ? f.exports = p : i && i.amd ? i(function() {
      return p;
    }) : this.xor4096 = p;
  })(
    z,
    // window object or global
    l,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(H);
var fr = H.exports, I = { exports: {} };
I.exports;
(function(l) {
  (function(d, f, i) {
    function h(c) {
      var r = this, e = "";
      r.next = function() {
        var t = r.b, a = r.c, x = r.d, y = r.a;
        return t = t << 25 ^ t >>> 7 ^ a, a = a - x | 0, x = x << 24 ^ x >>> 8 ^ y, y = y - t | 0, r.b = t = t << 20 ^ t >>> 12 ^ a, r.c = a = a - x | 0, r.d = x << 16 ^ a >>> 16 ^ y, r.a = y - t | 0;
      }, r.a = 0, r.b = 0, r.c = -1640531527, r.d = 1367130551, c === Math.floor(c) ? (r.a = c / 4294967296 | 0, r.b = c | 0) : e += c;
      for (var s = 0; s < e.length + 20; s++)
        r.b ^= e.charCodeAt(s) | 0, r.next();
    }
    function m(c, r) {
      return r.a = c.a, r.b = c.b, r.c = c.c, r.d = c.d, r;
    }
    function p(c, r) {
      var e = new h(c), s = r && r.state, t = function() {
        return (e.next() >>> 0) / 4294967296;
      };
      return t.double = function() {
        do
          var a = e.next() >>> 11, x = (e.next() >>> 0) / 4294967296, y = (a + x) / (1 << 21);
        while (y === 0);
        return y;
      }, t.int32 = e.next, t.quick = t, s && (typeof s == "object" && m(s, e), t.state = function() {
        return m(e, {});
      }), t;
    }
    f && f.exports ? f.exports = p : i && i.amd ? i(function() {
      return p;
    }) : this.tychei = p;
  })(
    z,
    l,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(I);
var cr = I.exports, L = { exports: {} };
const sr = {}, lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sr
}, Symbol.toStringTag, { value: "Module" })), xr = /* @__PURE__ */ nr(lr);
(function(l) {
  (function(d, f, i) {
    var h = 256, m = 6, p = 52, c = "random", r = i.pow(h, m), e = i.pow(2, p), s = e * 2, t = h - 1, a;
    function x(M, C, S) {
      var n = [];
      C = C == !0 ? { entropy: !0 } : C || {};
      var o = E(k(
        C.entropy ? [M, _(f)] : M ?? $(),
        3
      ), n), u = new y(n), v = function() {
        for (var g = u.g(m), w = r, b = 0; g < e; )
          g = (g + b) * h, w *= h, b = u.g(1);
        for (; g >= s; )
          g /= 2, w /= 2, b >>>= 1;
        return (g + b) / w;
      };
      return v.int32 = function() {
        return u.g(4) | 0;
      }, v.quick = function() {
        return u.g(4) / 4294967296;
      }, v.double = v, E(_(u.S), f), (C.pass || S || function(g, w, b, A) {
        return A && (A.S && R(A, u), g.state = function() {
          return R(u, {});
        }), b ? (i[c] = g, w) : g;
      })(
        v,
        o,
        "global" in C ? C.global : this == i,
        C.state
      );
    }
    function y(M) {
      var C, S = M.length, n = this, o = 0, u = n.i = n.j = 0, v = n.S = [];
      for (S || (M = [S++]); o < h; )
        v[o] = o++;
      for (o = 0; o < h; o++)
        v[o] = v[u = t & u + M[o % S] + (C = v[o])], v[u] = C;
      (n.g = function(g) {
        for (var w, b = 0, A = n.i, O = n.j, j = n.S; g--; )
          w = j[A = t & A + 1], b = b * h + j[t & (j[A] = j[O = t & O + w]) + (j[O] = w)];
        return n.i = A, n.j = O, b;
      })(h);
    }
    function R(M, C) {
      return C.i = M.i, C.j = M.j, C.S = M.S.slice(), C;
    }
    function k(M, C) {
      var S = [], n = typeof M, o;
      if (C && n == "object")
        for (o in M)
          try {
            S.push(k(M[o], C - 1));
          } catch {
          }
      return S.length ? S : n == "string" ? M : M + "\0";
    }
    function E(M, C) {
      for (var S = M + "", n, o = 0; o < S.length; )
        C[t & o] = t & (n ^= C[t & o] * 19) + S.charCodeAt(o++);
      return _(C);
    }
    function $() {
      try {
        var M;
        return a && (M = a.randomBytes) ? M = M(h) : (M = new Uint8Array(h), (d.crypto || d.msCrypto).getRandomValues(M)), _(M);
      } catch {
        var C = d.navigator, S = C && C.plugins;
        return [+/* @__PURE__ */ new Date(), d, S, d.screen, _(f)];
      }
    }
    function _(M) {
      return String.fromCharCode.apply(0, M);
    }
    if (E(i.random(), f), l.exports) {
      l.exports = x;
      try {
        a = xr;
      } catch {
      }
    } else
      i["seed" + c] = x;
  })(
    // global: `self` in browsers (including strict mode and web workers),
    // otherwise `this` in Node and other environments
    typeof self < "u" ? self : z,
    [],
    // pool: entropy pool starts empty
    Math
    // math: package containing random, pow, and seedrandom
  );
})(L);
var vr = L.exports, gr = ar, pr = or, hr = ir, dr = ur, yr = fr, mr = cr, G = vr;
G.alea = gr;
G.xor128 = pr;
G.xorwow = hr;
G.xorshift7 = dr;
G.xor4096 = yr;
G.tychei = mr;
var wr = G;
const br = /* @__PURE__ */ q(wr);
function U(l, d) {
  if (!Array.isArray(l))
    throw new Error("shuffle expect an array as parameter.");
  d = d || {};
  var f = l, i = l.length, h = d.rng || Math.random, m, p;
  for (d.copy === !0 && (f = l.slice()); i; )
    m = Math.floor(h() * i), i -= 1, p = f[i], f[i] = f[m], f[m] = p;
  return f;
}
U.pick = function(l, d) {
  if (!Array.isArray(l))
    throw new Error("shuffle.pick() expect an array as parameter.");
  d = d || {};
  var f = d.rng || Math.random, i = d.picks || 1;
  if (typeof i == "number" && i !== 1) {
    for (var h = l.length, m = l.slice(), p = [], c; i && h; )
      c = Math.floor(f() * h), p.push(m[c]), m.splice(c, 1), h -= 1, i -= 1;
    return p;
  }
  return l[Math.floor(f() * l.length)];
};
var Mr = U;
const Cr = /* @__PURE__ */ q(Mr), kr = (l, d, f) => {
  const { className: i, style: h, ...m } = l.props || {}, p = d + "px", c = l.key || l.value, r = { ...Sr, color: f, fontSize: p, ...h };
  let e = "tag-cloud-tag";
  return i && (e += " " + i), /* @__PURE__ */ J("span", { className: e, style: r, ...m, children: l.value }, c);
}, Sr = {
  margin: "0px 3px",
  verticalAlign: "middle",
  display: "inline-block"
}, Ar = (l, d, f, i, h) => f - d === 0 ? Math.round((i + h) / 2) : Math.round((l - d) * (h - i) / (f - d) + i), Rr = (l, d) => Object.keys(l).reduce((f, i) => (~d.indexOf(i) || (f[i] = l[i]), f), {});
function W(l, d) {
  return d.reduce((f, i) => (f[i] = l[i], f), {});
}
function jr(l) {
  return Object.keys(l);
}
const V = [
  "onClick",
  "onDoubleClick",
  "onMouseMove",
  "onMouseOver",
  "onMouseOut",
  "onContextMenu",
  // rn handlers
  "onPress",
  "onPressIn",
  "onPressOut"
], Er = [
  "tags",
  "shuffle",
  "renderer",
  "maxSize",
  "minSize",
  "colorOptions",
  "disableRandomColor",
  "randomSeed",
  "randomNumberGenerator",
  "containerComponent"
];
function K(l) {
  return l.key + l.value + l.count;
}
function Or(l, {
  disableRandomColor: d,
  colorOptions: f,
  randomSeed: i
}) {
  if (l.color)
    return l.color;
  if (!d)
    return er({
      seed: i && `${i}:${K(l)}`,
      ...f
    });
}
function $r(l, d, f) {
  const i = W(l.props, V), h = jr(f).reduce(
    (m, p) => ((f[p] || i[p]) && (m[p] = (c) => {
      f[p] && f[p](d, c), i[p] && i(c);
    }), m),
    {}
  );
  return Y.cloneElement(l, h);
}
function _r(l, d) {
  const { minSize: f, maxSize: i } = l, h = d.map(({ tag: r }) => r.count), m = Math.min(...h), p = Math.max(...h), c = W(l, V);
  return d.map(({ tag: r, color: e }) => {
    const s = Ar(r.count, m, p, f, i), t = l.renderer(r, s, e);
    return $r(t, r, c);
  });
}
function zr(l) {
  const { tags: d, shuffle: f, randomSeed: i, randomNumberGenerator: h } = l, m = i ? br(i.toString()) : h, p = d.slice();
  return (f ? Cr(p, { rng: m }) : p).map((r) => ({
    tag: r,
    color: Or(r, l)
  }));
}
function Gr({
  renderer: l = kr,
  shuffle: d = !0,
  className: f = "tag-cloud",
  colorOptions: i = {},
  containerComponent: h = "div",
  ...m
}) {
  const p = {
    renderer: l,
    shuffle: d,
    className: f,
    colorOptions: i,
    containerComponent: h,
    ...m
  }, [c, r] = Z([]), e = p.tags.map(K).join(":");
  rr(() => {
    r(zr(p));
  }, [
    JSON.stringify(p.colorOptions),
    p.randomSeed,
    p.shuffle,
    p.disableRandomColor,
    e
  ]);
  const s = Rr(p, [...Er, ...V]), t = p.containerComponent;
  return /* @__PURE__ */ J(t, { ...s, children: _r(p, c) });
}
export {
  Gr as TagCloud
};
