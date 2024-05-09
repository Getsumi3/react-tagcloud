import { jsx as Q } from "react/jsx-runtime";
import Y, { useState as Z, useEffect as rr } from "react";
import { defaultRenderer as nr } from "./defaultRenderer.js";
import { omit as tr, pick as J, fontSizeConverter as er, keys as ar } from "./helpers.js";
var O = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function q(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
function ir(v) {
  if (v.__esModule)
    return v;
  var y = v.default;
  if (typeof y == "function") {
    var x = function c() {
      return this instanceof c ? Reflect.construct(y, arguments, this.constructor) : y.apply(this, arguments);
    };
    x.prototype = y.prototype;
  } else
    x = {};
  return Object.defineProperty(x, "__esModule", { value: !0 }), Object.keys(v).forEach(function(c) {
    var p = Object.getOwnPropertyDescriptor(v, c);
    Object.defineProperty(x, c, p.get ? p : {
      enumerable: !0,
      get: function() {
        return v[c];
      }
    });
  }), x;
}
var P = { exports: {} };
(function(v, y) {
  (function(x, c) {
    {
      var p = c();
      v && v.exports && (y = v.exports = p), y.randomColor = p;
    }
  })(O, function() {
    var x = null, c = {};
    j();
    var p = [], m = function(n) {
      if (n = n || {}, n.seed !== void 0 && n.seed !== null && n.seed === parseInt(n.seed, 10))
        x = n.seed;
      else if (typeof n.seed == "string")
        x = C(n.seed);
      else {
        if (n.seed !== void 0 && n.seed !== null)
          throw new TypeError("The seed value must be an integer or string");
        x = null;
      }
      var i, o, l;
      if (n.count !== null && n.count !== void 0) {
        for (var g = n.count, w = [], b = 0; b < n.count; b++)
          p.push(!1);
        for (n.count = null; g > w.length; ) {
          var A = m(n);
          x !== null && (n.seed = x), w.push(A);
        }
        return n.count = g, w;
      }
      return i = h(n), o = f(i, n), l = r(i, o, n), e([i, o, l], n);
    };
    function h(n) {
      if (p.length > 0) {
        var i = k(n.hue), o = d(i), l = (i[1] - i[0]) / p.length, g = parseInt((o - i[0]) / l);
        p[g] === !0 ? g = (g + 2) % p.length : p[g] = !0;
        var w = (i[0] + g * l) % 359, b = (i[0] + (g + 1) * l) % 359;
        return i = [w, b], o = d(i), o < 0 && (o = 360 + o), o;
      } else {
        var i = t(n.hue);
        return o = d(i), o < 0 && (o = 360 + o), o;
      }
    }
    function f(n, i) {
      if (i.hue === "monochrome")
        return 0;
      if (i.luminosity === "random")
        return d([0, 100]);
      var o = a(n), l = o[0], g = o[1];
      switch (i.luminosity) {
        case "bright":
          l = 55;
          break;
        case "dark":
          l = g - 10;
          break;
        case "light":
          g = 55;
          break;
      }
      return d([l, g]);
    }
    function r(n, i, o) {
      var l = u(n, i), g = 100;
      switch (o.luminosity) {
        case "dark":
          g = l + 20;
          break;
        case "light":
          l = (g + l) / 2;
          break;
        case "random":
          l = 0, g = 100;
          break;
      }
      return d([l, g]);
    }
    function e(n, i) {
      switch (i.format) {
        case "hsvArray":
          return n;
        case "hslArray":
          return M(n);
        case "hsl":
          var o = M(n);
          return "hsl(" + o[0] + ", " + o[1] + "%, " + o[2] + "%)";
        case "hsla":
          var l = M(n), b = i.alpha || Math.random();
          return "hsla(" + l[0] + ", " + l[1] + "%, " + l[2] + "%, " + b + ")";
        case "rgbArray":
          return $(n);
        case "rgb":
          var g = $(n);
          return "rgb(" + g.join(", ") + ")";
        case "rgba":
          var w = $(n), b = i.alpha || Math.random();
          return "rgba(" + w.join(", ") + ", " + b + ")";
        default:
          return R(n);
      }
    }
    function u(n, i) {
      for (var o = s(n).lowerBounds, l = 0; l < o.length - 1; l++) {
        var g = o[l][0], w = o[l][1], b = o[l + 1][0], A = o[l + 1][1];
        if (i >= g && i <= b) {
          var z = (A - w) / (b - g), E = w - z * g;
          return z * i + E;
        }
      }
      return 0;
    }
    function t(n) {
      if (typeof parseInt(n) == "number") {
        var i = parseInt(n);
        if (i < 360 && i > 0)
          return [i, i];
      }
      if (typeof n == "string") {
        if (c[n]) {
          var o = c[n];
          if (o.hueRange)
            return o.hueRange;
        } else if (n.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
          var l = _(n)[0];
          return [l, l];
        }
      }
      return [0, 360];
    }
    function a(n) {
      return s(n).saturationRange;
    }
    function s(n) {
      n >= 334 && n <= 360 && (n -= 360);
      for (var i in c) {
        var o = c[i];
        if (o.hueRange && n >= o.hueRange[0] && n <= o.hueRange[1])
          return c[i];
      }
      return "Color not found";
    }
    function d(n) {
      if (x === null) {
        var i = 0.618033988749895, o = Math.random();
        return o += i, o %= 1, Math.floor(n[0] + o * (n[1] + 1 - n[0]));
      } else {
        var l = n[1] || 1, g = n[0] || 0;
        x = (x * 9301 + 49297) % 233280;
        var w = x / 233280;
        return Math.floor(g + w * (l - g));
      }
    }
    function R(n) {
      var i = $(n);
      function o(g) {
        var w = g.toString(16);
        return w.length == 1 ? "0" + w : w;
      }
      var l = "#" + o(i[0]) + o(i[1]) + o(i[2]);
      return l;
    }
    function S(n, i, o) {
      var l = o[0][0], g = o[o.length - 1][0], w = o[o.length - 1][1], b = o[0][1];
      c[n] = {
        hueRange: i,
        lowerBounds: o,
        saturationRange: [l, g],
        brightnessRange: [w, b]
      };
    }
    function j() {
      S(
        "monochrome",
        null,
        [[0, 0], [100, 0]]
      ), S(
        "red",
        [-26, 18],
        [[20, 100], [30, 92], [40, 89], [50, 85], [60, 78], [70, 70], [80, 60], [90, 55], [100, 50]]
      ), S(
        "orange",
        [18, 46],
        [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]]
      ), S(
        "yellow",
        [46, 62],
        [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]]
      ), S(
        "green",
        [62, 178],
        [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]]
      ), S(
        "blue",
        [178, 257],
        [[20, 100], [30, 86], [40, 80], [50, 74], [60, 60], [70, 52], [80, 44], [90, 39], [100, 35]]
      ), S(
        "purple",
        [257, 282],
        [[20, 100], [30, 87], [40, 79], [50, 70], [60, 65], [70, 59], [80, 52], [90, 45], [100, 42]]
      ), S(
        "pink",
        [282, 334],
        [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]]
      );
    }
    function $(n) {
      var i = n[0];
      i === 0 && (i = 1), i === 360 && (i = 359), i = i / 360;
      var o = n[1] / 100, l = n[2] / 100, g = Math.floor(i * 6), w = i * 6 - g, b = l * (1 - o), A = l * (1 - w * o), z = l * (1 - (1 - w) * o), E = 256, X = 256, T = 256;
      switch (g) {
        case 0:
          E = l, X = z, T = b;
          break;
        case 1:
          E = A, X = l, T = b;
          break;
        case 2:
          E = b, X = l, T = z;
          break;
        case 3:
          E = b, X = A, T = l;
          break;
        case 4:
          E = z, X = b, T = l;
          break;
        case 5:
          E = l, X = b, T = A;
          break;
      }
      var K = [Math.floor(E * 255), Math.floor(X * 255), Math.floor(T * 255)];
      return K;
    }
    function _(n) {
      n = n.replace(/^#/, ""), n = n.length === 3 ? n.replace(/(.)/g, "$1$1") : n;
      var i = parseInt(n.substr(0, 2), 16) / 255, o = parseInt(n.substr(2, 2), 16) / 255, l = parseInt(n.substr(4, 2), 16) / 255, g = Math.max(i, o, l), w = g - Math.min(i, o, l), b = g ? w / g : 0;
      switch (g) {
        case i:
          return [60 * ((o - l) / w % 6) || 0, b, g];
        case o:
          return [60 * ((l - i) / w + 2) || 0, b, g];
        case l:
          return [60 * ((i - o) / w + 4) || 0, b, g];
      }
    }
    function M(n) {
      var i = n[0], o = n[1] / 100, l = n[2] / 100, g = (2 - o) * l;
      return [
        i,
        Math.round(o * l / (g < 1 ? g : 2 - g) * 1e4) / 100,
        g / 2 * 100
      ];
    }
    function C(n) {
      for (var i = 0, o = 0; o !== n.length && !(i >= Number.MAX_SAFE_INTEGER); o++)
        i += n.charCodeAt(o);
      return i;
    }
    function k(n) {
      if (isNaN(n)) {
        if (typeof n == "string") {
          if (c[n]) {
            var o = c[n];
            if (o.hueRange)
              return o.hueRange;
          } else if (n.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
            var l = _(n)[0];
            return s(l).hueRange;
          }
        }
      } else {
        var i = parseInt(n);
        if (i < 360 && i > 0)
          return s(n).hueRange;
      }
      return [0, 360];
    }
    return m;
  });
})(P, P.exports);
var or = P.exports;
const ur = /* @__PURE__ */ q(or);
var D = { exports: {} };
D.exports;
(function(v) {
  (function(y, x, c) {
    function p(r) {
      var e = this, u = f();
      e.next = function() {
        var t = 2091639 * e.s0 + e.c * 23283064365386963e-26;
        return e.s0 = e.s1, e.s1 = e.s2, e.s2 = t - (e.c = t | 0);
      }, e.c = 1, e.s0 = u(" "), e.s1 = u(" "), e.s2 = u(" "), e.s0 -= u(r), e.s0 < 0 && (e.s0 += 1), e.s1 -= u(r), e.s1 < 0 && (e.s1 += 1), e.s2 -= u(r), e.s2 < 0 && (e.s2 += 1), u = null;
    }
    function m(r, e) {
      return e.c = r.c, e.s0 = r.s0, e.s1 = r.s1, e.s2 = r.s2, e;
    }
    function h(r, e) {
      var u = new p(r), t = e && e.state, a = u.next;
      return a.int32 = function() {
        return u.next() * 4294967296 | 0;
      }, a.double = function() {
        return a() + (a() * 2097152 | 0) * 11102230246251565e-32;
      }, a.quick = a, t && (typeof t == "object" && m(t, u), a.state = function() {
        return m(u, {});
      }), a;
    }
    function f() {
      var r = 4022871197, e = function(u) {
        u = String(u);
        for (var t = 0; t < u.length; t++) {
          r += u.charCodeAt(t);
          var a = 0.02519603282416938 * r;
          r = a >>> 0, a -= r, a *= r, r = a >>> 0, a -= r, r += a * 4294967296;
        }
        return (r >>> 0) * 23283064365386963e-26;
      };
      return e;
    }
    x && x.exports ? x.exports = h : c && c.amd ? c(function() {
      return h;
    }) : this.alea = h;
  })(
    O,
    v,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(D);
var fr = D.exports, F = { exports: {} };
F.exports;
(function(v) {
  (function(y, x, c) {
    function p(f) {
      var r = this, e = "";
      r.x = 0, r.y = 0, r.z = 0, r.w = 0, r.next = function() {
        var t = r.x ^ r.x << 11;
        return r.x = r.y, r.y = r.z, r.z = r.w, r.w ^= r.w >>> 19 ^ t ^ t >>> 8;
      }, f === (f | 0) ? r.x = f : e += f;
      for (var u = 0; u < e.length + 64; u++)
        r.x ^= e.charCodeAt(u) | 0, r.next();
    }
    function m(f, r) {
      return r.x = f.x, r.y = f.y, r.z = f.z, r.w = f.w, r;
    }
    function h(f, r) {
      var e = new p(f), u = r && r.state, t = function() {
        return (e.next() >>> 0) / 4294967296;
      };
      return t.double = function() {
        do
          var a = e.next() >>> 11, s = (e.next() >>> 0) / 4294967296, d = (a + s) / (1 << 21);
        while (d === 0);
        return d;
      }, t.int32 = e.next, t.quick = t, u && (typeof u == "object" && m(u, e), t.state = function() {
        return m(e, {});
      }), t;
    }
    x && x.exports ? x.exports = h : c && c.amd ? c(function() {
      return h;
    }) : this.xor128 = h;
  })(
    O,
    v,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(F);
var cr = F.exports, B = { exports: {} };
B.exports;
(function(v) {
  (function(y, x, c) {
    function p(f) {
      var r = this, e = "";
      r.next = function() {
        var t = r.x ^ r.x >>> 2;
        return r.x = r.y, r.y = r.z, r.z = r.w, r.w = r.v, (r.d = r.d + 362437 | 0) + (r.v = r.v ^ r.v << 4 ^ (t ^ t << 1)) | 0;
      }, r.x = 0, r.y = 0, r.z = 0, r.w = 0, r.v = 0, f === (f | 0) ? r.x = f : e += f;
      for (var u = 0; u < e.length + 64; u++)
        r.x ^= e.charCodeAt(u) | 0, u == e.length && (r.d = r.x << 10 ^ r.x >>> 4), r.next();
    }
    function m(f, r) {
      return r.x = f.x, r.y = f.y, r.z = f.z, r.w = f.w, r.v = f.v, r.d = f.d, r;
    }
    function h(f, r) {
      var e = new p(f), u = r && r.state, t = function() {
        return (e.next() >>> 0) / 4294967296;
      };
      return t.double = function() {
        do
          var a = e.next() >>> 11, s = (e.next() >>> 0) / 4294967296, d = (a + s) / (1 << 21);
        while (d === 0);
        return d;
      }, t.int32 = e.next, t.quick = t, u && (typeof u == "object" && m(u, e), t.state = function() {
        return m(e, {});
      }), t;
    }
    x && x.exports ? x.exports = h : c && c.amd ? c(function() {
      return h;
    }) : this.xorwow = h;
  })(
    O,
    v,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(B);
var sr = B.exports, H = { exports: {} };
H.exports;
(function(v) {
  (function(y, x, c) {
    function p(f) {
      var r = this;
      r.next = function() {
        var u = r.x, t = r.i, a, s;
        return a = u[t], a ^= a >>> 7, s = a ^ a << 24, a = u[t + 1 & 7], s ^= a ^ a >>> 10, a = u[t + 3 & 7], s ^= a ^ a >>> 3, a = u[t + 4 & 7], s ^= a ^ a << 7, a = u[t + 7 & 7], a = a ^ a << 13, s ^= a ^ a << 9, u[t] = s, r.i = t + 1 & 7, s;
      };
      function e(u, t) {
        var a, s = [];
        if (t === (t | 0))
          s[0] = t;
        else
          for (t = "" + t, a = 0; a < t.length; ++a)
            s[a & 7] = s[a & 7] << 15 ^ t.charCodeAt(a) + s[a + 1 & 7] << 13;
        for (; s.length < 8; )
          s.push(0);
        for (a = 0; a < 8 && s[a] === 0; ++a)
          ;
        for (a == 8 ? s[7] = -1 : s[a], u.x = s, u.i = 0, a = 256; a > 0; --a)
          u.next();
      }
      e(r, f);
    }
    function m(f, r) {
      return r.x = f.x.slice(), r.i = f.i, r;
    }
    function h(f, r) {
      f == null && (f = +/* @__PURE__ */ new Date());
      var e = new p(f), u = r && r.state, t = function() {
        return (e.next() >>> 0) / 4294967296;
      };
      return t.double = function() {
        do
          var a = e.next() >>> 11, s = (e.next() >>> 0) / 4294967296, d = (a + s) / (1 << 21);
        while (d === 0);
        return d;
      }, t.int32 = e.next, t.quick = t, u && (u.x && m(u, e), t.state = function() {
        return m(e, {});
      }), t;
    }
    x && x.exports ? x.exports = h : c && c.amd ? c(function() {
      return h;
    }) : this.xorshift7 = h;
  })(
    O,
    v,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(H);
var lr = H.exports, I = { exports: {} };
I.exports;
(function(v) {
  (function(y, x, c) {
    function p(f) {
      var r = this;
      r.next = function() {
        var u = r.w, t = r.X, a = r.i, s, d;
        return r.w = u = u + 1640531527 | 0, d = t[a + 34 & 127], s = t[a = a + 1 & 127], d ^= d << 13, s ^= s << 17, d ^= d >>> 15, s ^= s >>> 12, d = t[a] = d ^ s, r.i = a, d + (u ^ u >>> 16) | 0;
      };
      function e(u, t) {
        var a, s, d, R, S, j = [], $ = 128;
        for (t === (t | 0) ? (s = t, t = null) : (t = t + "\0", s = 0, $ = Math.max($, t.length)), d = 0, R = -32; R < $; ++R)
          t && (s ^= t.charCodeAt((R + 32) % t.length)), R === 0 && (S = s), s ^= s << 10, s ^= s >>> 15, s ^= s << 4, s ^= s >>> 13, R >= 0 && (S = S + 1640531527 | 0, a = j[R & 127] ^= s + S, d = a == 0 ? d + 1 : 0);
        for (d >= 128 && (j[(t && t.length || 0) & 127] = -1), d = 127, R = 4 * 128; R > 0; --R)
          s = j[d + 34 & 127], a = j[d = d + 1 & 127], s ^= s << 13, a ^= a << 17, s ^= s >>> 15, a ^= a >>> 12, j[d] = s ^ a;
        u.w = S, u.X = j, u.i = d;
      }
      e(r, f);
    }
    function m(f, r) {
      return r.i = f.i, r.w = f.w, r.X = f.X.slice(), r;
    }
    function h(f, r) {
      f == null && (f = +/* @__PURE__ */ new Date());
      var e = new p(f), u = r && r.state, t = function() {
        return (e.next() >>> 0) / 4294967296;
      };
      return t.double = function() {
        do
          var a = e.next() >>> 11, s = (e.next() >>> 0) / 4294967296, d = (a + s) / (1 << 21);
        while (d === 0);
        return d;
      }, t.int32 = e.next, t.quick = t, u && (u.X && m(u, e), t.state = function() {
        return m(e, {});
      }), t;
    }
    x && x.exports ? x.exports = h : c && c.amd ? c(function() {
      return h;
    }) : this.xor4096 = h;
  })(
    O,
    // window object or global
    v,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(I);
var xr = I.exports, N = { exports: {} };
N.exports;
(function(v) {
  (function(y, x, c) {
    function p(f) {
      var r = this, e = "";
      r.next = function() {
        var t = r.b, a = r.c, s = r.d, d = r.a;
        return t = t << 25 ^ t >>> 7 ^ a, a = a - s | 0, s = s << 24 ^ s >>> 8 ^ d, d = d - t | 0, r.b = t = t << 20 ^ t >>> 12 ^ a, r.c = a = a - s | 0, r.d = s << 16 ^ a >>> 16 ^ d, r.a = d - t | 0;
      }, r.a = 0, r.b = 0, r.c = -1640531527, r.d = 1367130551, f === Math.floor(f) ? (r.a = f / 4294967296 | 0, r.b = f | 0) : e += f;
      for (var u = 0; u < e.length + 20; u++)
        r.b ^= e.charCodeAt(u) | 0, r.next();
    }
    function m(f, r) {
      return r.a = f.a, r.b = f.b, r.c = f.c, r.d = f.d, r;
    }
    function h(f, r) {
      var e = new p(f), u = r && r.state, t = function() {
        return (e.next() >>> 0) / 4294967296;
      };
      return t.double = function() {
        do
          var a = e.next() >>> 11, s = (e.next() >>> 0) / 4294967296, d = (a + s) / (1 << 21);
        while (d === 0);
        return d;
      }, t.int32 = e.next, t.quick = t, u && (typeof u == "object" && m(u, e), t.state = function() {
        return m(e, {});
      }), t;
    }
    x && x.exports ? x.exports = h : c && c.amd ? c(function() {
      return h;
    }) : this.tychei = h;
  })(
    O,
    v,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(N);
var vr = N.exports, L = { exports: {} };
const gr = {}, hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gr
}, Symbol.toStringTag, { value: "Module" })), pr = /* @__PURE__ */ ir(hr);
(function(v) {
  (function(y, x, c) {
    var p = 256, m = 6, h = 52, f = "random", r = c.pow(p, m), e = c.pow(2, h), u = e * 2, t = p - 1, a;
    function s(M, C, k) {
      var n = [];
      C = C == !0 ? { entropy: !0 } : C || {};
      var i = j(S(
        C.entropy ? [M, _(x)] : M ?? $(),
        3
      ), n), o = new d(n), l = function() {
        for (var g = o.g(m), w = r, b = 0; g < e; )
          g = (g + b) * p, w *= p, b = o.g(1);
        for (; g >= u; )
          g /= 2, w /= 2, b >>>= 1;
        return (g + b) / w;
      };
      return l.int32 = function() {
        return o.g(4) | 0;
      }, l.quick = function() {
        return o.g(4) / 4294967296;
      }, l.double = l, j(_(o.S), x), (C.pass || k || function(g, w, b, A) {
        return A && (A.S && R(A, o), g.state = function() {
          return R(o, {});
        }), b ? (c[f] = g, w) : g;
      })(
        l,
        i,
        "global" in C ? C.global : this == c,
        C.state
      );
    }
    function d(M) {
      var C, k = M.length, n = this, i = 0, o = n.i = n.j = 0, l = n.S = [];
      for (k || (M = [k++]); i < p; )
        l[i] = i++;
      for (i = 0; i < p; i++)
        l[i] = l[o = t & o + M[i % k] + (C = l[i])], l[o] = C;
      (n.g = function(g) {
        for (var w, b = 0, A = n.i, z = n.j, E = n.S; g--; )
          w = E[A = t & A + 1], b = b * p + E[t & (E[A] = E[z = t & z + w]) + (E[z] = w)];
        return n.i = A, n.j = z, b;
      })(p);
    }
    function R(M, C) {
      return C.i = M.i, C.j = M.j, C.S = M.S.slice(), C;
    }
    function S(M, C) {
      var k = [], n = typeof M, i;
      if (C && n == "object")
        for (i in M)
          try {
            k.push(S(M[i], C - 1));
          } catch {
          }
      return k.length ? k : n == "string" ? M : M + "\0";
    }
    function j(M, C) {
      for (var k = M + "", n, i = 0; i < k.length; )
        C[t & i] = t & (n ^= C[t & i] * 19) + k.charCodeAt(i++);
      return _(C);
    }
    function $() {
      try {
        var M;
        return a && (M = a.randomBytes) ? M = M(p) : (M = new Uint8Array(p), (y.crypto || y.msCrypto).getRandomValues(M)), _(M);
      } catch {
        var C = y.navigator, k = C && C.plugins;
        return [+/* @__PURE__ */ new Date(), y, k, y.screen, _(x)];
      }
    }
    function _(M) {
      return String.fromCharCode.apply(0, M);
    }
    if (j(c.random(), x), v.exports) {
      v.exports = s;
      try {
        a = pr;
      } catch {
      }
    } else
      c["seed" + f] = s;
  })(
    // global: `self` in browsers (including strict mode and web workers),
    // otherwise `this` in Node and other environments
    typeof self < "u" ? self : O,
    [],
    // pool: entropy pool starts empty
    Math
    // math: package containing random, pow, and seedrandom
  );
})(L);
var dr = L.exports, yr = fr, mr = cr, wr = sr, br = lr, Mr = xr, Cr = vr, G = dr;
G.alea = yr;
G.xor128 = mr;
G.xorwow = wr;
G.xorshift7 = br;
G.xor4096 = Mr;
G.tychei = Cr;
var Sr = G;
const kr = /* @__PURE__ */ q(Sr);
function U(v, y) {
  if (!Array.isArray(v))
    throw new Error("shuffle expect an array as parameter.");
  y = y || {};
  var x = v, c = v.length, p = y.rng || Math.random, m, h;
  for (y.copy === !0 && (x = v.slice()); c; )
    m = Math.floor(p() * c), c -= 1, h = x[c], x[c] = x[m], x[m] = h;
  return x;
}
U.pick = function(v, y) {
  if (!Array.isArray(v))
    throw new Error("shuffle.pick() expect an array as parameter.");
  y = y || {};
  var x = y.rng || Math.random, c = y.picks || 1;
  if (typeof c == "number" && c !== 1) {
    for (var p = v.length, m = v.slice(), h = [], f; c && p; )
      f = Math.floor(x() * p), h.push(m[f]), m.splice(f, 1), p -= 1, c -= 1;
    return h;
  }
  return v[Math.floor(x() * v.length)];
};
var Ar = U;
const Rr = /* @__PURE__ */ q(Ar), V = [
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
function W(v) {
  return v.key + v.value + v.count;
}
function jr(v, {
  disableRandomColor: y,
  colorOptions: x,
  randomSeed: c
}) {
  if (v.color)
    return v.color;
  if (!y)
    return ur({
      seed: c && `${c}:${W(v)}`,
      ...x
    });
}
function zr(v, y, x) {
  const c = J(v.props, V), p = ar(x).reduce(
    (m, h) => ((x[h] || c[h]) && (m[h] = (f) => {
      x[h] && x[h](y, f), c[h] && c(f);
    }), m),
    {}
  );
  return Y.cloneElement(v, p);
}
function $r(v, y) {
  const { minSize: x, maxSize: c } = v, p = y.map(({ tag: r }) => r.count), m = Math.min(...p), h = Math.max(...p), f = J(v, V);
  return y.map(({ tag: r, color: e }) => {
    const u = er(r.count, m, h, x, c), t = v.renderer(r, u, e);
    return zr(t, r, f);
  });
}
function _r(v) {
  const { tags: y, shuffle: x, randomSeed: c, randomNumberGenerator: p } = v, m = c ? kr(c.toString()) : p, h = y.slice();
  return (x ? Rr(h, { rng: m }) : h).map((r) => ({
    tag: r,
    color: jr(r, v)
  }));
}
function Pr({
  renderer: v = nr,
  shuffle: y = !0,
  className: x = "tag-cloud",
  colorOptions: c = {},
  containerComponent: p = "div",
  ...m
}) {
  const h = {
    renderer: v,
    shuffle: y,
    className: x,
    colorOptions: c,
    containerComponent: p,
    ...m
  }, [f, r] = Z([]), e = h.tags.map(W).join(":");
  rr(() => {
    r(_r(h));
  }, [
    JSON.stringify(h.colorOptions),
    h.randomSeed,
    h.shuffle,
    h.disableRandomColor,
    e
  ]);
  const u = tr(h, [...Er, ...V]), t = h.containerComponent;
  return /* @__PURE__ */ Q(t, { ...u, children: $r(h, f) });
}
export {
  Pr as default
};
