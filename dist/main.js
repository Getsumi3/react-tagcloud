import { jsx as Ae } from "react/jsx-runtime";
import De, { useState as ze, useEffect as Ye } from "react";
var Z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function te(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Fe(n) {
  if (n.__esModule)
    return n;
  var m = n.default;
  if (typeof m == "function") {
    var f = function o() {
      return this instanceof o ? Reflect.construct(m, arguments, this.constructor) : m.apply(this, arguments);
    };
    f.prototype = m.prototype;
  } else
    f = {};
  return Object.defineProperty(f, "__esModule", { value: !0 }), Object.keys(n).forEach(function(o) {
    var h = Object.getOwnPropertyDescriptor(n, o);
    Object.defineProperty(f, o, h.get ? h : {
      enumerable: !0,
      get: function() {
        return n[o];
      }
    });
  }), f;
}
var se = { exports: {} }, ne = { exports: {} }, D = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function We() {
  if (Ee)
    return D;
  Ee = 1;
  var n = typeof Symbol == "function" && Symbol.for, m = n ? Symbol.for("react.element") : 60103, f = n ? Symbol.for("react.portal") : 60106, o = n ? Symbol.for("react.fragment") : 60107, h = n ? Symbol.for("react.strict_mode") : 60108, x = n ? Symbol.for("react.profiler") : 60114, y = n ? Symbol.for("react.provider") : 60109, i = n ? Symbol.for("react.context") : 60110, e = n ? Symbol.for("react.async_mode") : 60111, t = n ? Symbol.for("react.concurrent_mode") : 60111, c = n ? Symbol.for("react.forward_ref") : 60112, r = n ? Symbol.for("react.suspense") : 60113, u = n ? Symbol.for("react.suspense_list") : 60120, p = n ? Symbol.for("react.memo") : 60115, w = n ? Symbol.for("react.lazy") : 60116, _ = n ? Symbol.for("react.block") : 60121, $ = n ? Symbol.for("react.fundamental") : 60117, L = n ? Symbol.for("react.responder") : 60118, U = n ? Symbol.for("react.scope") : 60119;
  function F(s) {
    if (typeof s == "object" && s !== null) {
      var X = s.$$typeof;
      switch (X) {
        case m:
          switch (s = s.type, s) {
            case e:
            case t:
            case o:
            case x:
            case h:
            case r:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case i:
                case c:
                case w:
                case p:
                case y:
                  return s;
                default:
                  return X;
              }
          }
        case f:
          return X;
      }
    }
  }
  function S(s) {
    return F(s) === t;
  }
  return D.AsyncMode = e, D.ConcurrentMode = t, D.ContextConsumer = i, D.ContextProvider = y, D.Element = m, D.ForwardRef = c, D.Fragment = o, D.Lazy = w, D.Memo = p, D.Portal = f, D.Profiler = x, D.StrictMode = h, D.Suspense = r, D.isAsyncMode = function(s) {
    return S(s) || F(s) === e;
  }, D.isConcurrentMode = S, D.isContextConsumer = function(s) {
    return F(s) === i;
  }, D.isContextProvider = function(s) {
    return F(s) === y;
  }, D.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === m;
  }, D.isForwardRef = function(s) {
    return F(s) === c;
  }, D.isFragment = function(s) {
    return F(s) === o;
  }, D.isLazy = function(s) {
    return F(s) === w;
  }, D.isMemo = function(s) {
    return F(s) === p;
  }, D.isPortal = function(s) {
    return F(s) === f;
  }, D.isProfiler = function(s) {
    return F(s) === x;
  }, D.isStrictMode = function(s) {
    return F(s) === h;
  }, D.isSuspense = function(s) {
    return F(s) === r;
  }, D.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === o || s === t || s === x || s === h || s === r || s === u || typeof s == "object" && s !== null && (s.$$typeof === w || s.$$typeof === p || s.$$typeof === y || s.$$typeof === i || s.$$typeof === c || s.$$typeof === $ || s.$$typeof === L || s.$$typeof === U || s.$$typeof === _);
  }, D.typeOf = F, D;
}
var z = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function Le() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, m = n ? Symbol.for("react.element") : 60103, f = n ? Symbol.for("react.portal") : 60106, o = n ? Symbol.for("react.fragment") : 60107, h = n ? Symbol.for("react.strict_mode") : 60108, x = n ? Symbol.for("react.profiler") : 60114, y = n ? Symbol.for("react.provider") : 60109, i = n ? Symbol.for("react.context") : 60110, e = n ? Symbol.for("react.async_mode") : 60111, t = n ? Symbol.for("react.concurrent_mode") : 60111, c = n ? Symbol.for("react.forward_ref") : 60112, r = n ? Symbol.for("react.suspense") : 60113, u = n ? Symbol.for("react.suspense_list") : 60120, p = n ? Symbol.for("react.memo") : 60115, w = n ? Symbol.for("react.lazy") : 60116, _ = n ? Symbol.for("react.block") : 60121, $ = n ? Symbol.for("react.fundamental") : 60117, L = n ? Symbol.for("react.responder") : 60118, U = n ? Symbol.for("react.scope") : 60119;
    function F(b) {
      return typeof b == "string" || typeof b == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      b === o || b === t || b === x || b === h || b === r || b === u || typeof b == "object" && b !== null && (b.$$typeof === w || b.$$typeof === p || b.$$typeof === y || b.$$typeof === i || b.$$typeof === c || b.$$typeof === $ || b.$$typeof === L || b.$$typeof === U || b.$$typeof === _);
    }
    function S(b) {
      if (typeof b == "object" && b !== null) {
        var K = b.$$typeof;
        switch (K) {
          case m:
            var re = b.type;
            switch (re) {
              case e:
              case t:
              case o:
              case x:
              case h:
              case r:
                return re;
              default:
                var me = re && re.$$typeof;
                switch (me) {
                  case i:
                  case c:
                  case w:
                  case p:
                  case y:
                    return me;
                  default:
                    return K;
                }
            }
          case f:
            return K;
        }
      }
    }
    var s = e, X = t, a = i, l = y, v = m, g = c, E = o, R = w, O = p, N = f, G = x, W = h, B = r, V = !1;
    function ee(b) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(b) || S(b) === e;
    }
    function d(b) {
      return S(b) === t;
    }
    function T(b) {
      return S(b) === i;
    }
    function j(b) {
      return S(b) === y;
    }
    function A(b) {
      return typeof b == "object" && b !== null && b.$$typeof === m;
    }
    function C(b) {
      return S(b) === c;
    }
    function k(b) {
      return S(b) === o;
    }
    function P(b) {
      return S(b) === w;
    }
    function M(b) {
      return S(b) === p;
    }
    function I(b) {
      return S(b) === f;
    }
    function Y(b) {
      return S(b) === x;
    }
    function q(b) {
      return S(b) === h;
    }
    function H(b) {
      return S(b) === r;
    }
    z.AsyncMode = s, z.ConcurrentMode = X, z.ContextConsumer = a, z.ContextProvider = l, z.Element = v, z.ForwardRef = g, z.Fragment = E, z.Lazy = R, z.Memo = O, z.Portal = N, z.Profiler = G, z.StrictMode = W, z.Suspense = B, z.isAsyncMode = ee, z.isConcurrentMode = d, z.isContextConsumer = T, z.isContextProvider = j, z.isElement = A, z.isForwardRef = C, z.isFragment = k, z.isLazy = P, z.isMemo = M, z.isPortal = I, z.isProfiler = Y, z.isStrictMode = q, z.isSuspense = H, z.isValidElementType = F, z.typeOf = S;
  }()), z;
}
var Te;
function Me() {
  return Te || (Te = 1, process.env.NODE_ENV === "production" ? ne.exports = We() : ne.exports = Le()), ne.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var oe, Se;
function Xe() {
  if (Se)
    return oe;
  Se = 1;
  var n = Object.getOwnPropertySymbols, m = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
  function o(x) {
    if (x == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(x);
  }
  function h() {
    try {
      if (!Object.assign)
        return !1;
      var x = new String("abc");
      if (x[5] = "de", Object.getOwnPropertyNames(x)[0] === "5")
        return !1;
      for (var y = {}, i = 0; i < 10; i++)
        y["_" + String.fromCharCode(i)] = i;
      var e = Object.getOwnPropertyNames(y).map(function(c) {
        return y[c];
      });
      if (e.join("") !== "0123456789")
        return !1;
      var t = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        t[c] = c;
      }), Object.keys(Object.assign({}, t)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return oe = h() ? Object.assign : function(x, y) {
    for (var i, e = o(x), t, c = 1; c < arguments.length; c++) {
      i = Object(arguments[c]);
      for (var r in i)
        m.call(i, r) && (e[r] = i[r]);
      if (n) {
        t = n(i);
        for (var u = 0; u < t.length; u++)
          f.call(i, t[u]) && (e[t[u]] = i[t[u]]);
      }
    }
    return e;
  }, oe;
}
var ae, Re;
function ve() {
  if (Re)
    return ae;
  Re = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ae = n, ae;
}
var ie, Ce;
function je() {
  return Ce || (Ce = 1, ie = Function.call.bind(Object.prototype.hasOwnProperty)), ie;
}
var ue, Oe;
function Ne() {
  if (Oe)
    return ue;
  Oe = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var m = ve(), f = {}, o = je();
    n = function(x) {
      var y = "Warning: " + x;
      typeof console < "u" && console.error(y);
      try {
        throw new Error(y);
      } catch {
      }
    };
  }
  function h(x, y, i, e, t) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in x)
        if (o(x, c)) {
          var r;
          try {
            if (typeof x[c] != "function") {
              var u = Error(
                (e || "React class") + ": " + i + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw u.name = "Invariant Violation", u;
            }
            r = x[c](y, c, e, i, null, m);
          } catch (w) {
            r = w;
          }
          if (r && !(r instanceof Error) && n(
            (e || "React class") + ": type specification of " + i + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof r + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), r instanceof Error && !(r.message in f)) {
            f[r.message] = !0;
            var p = t ? t() : "";
            n(
              "Failed " + i + " type: " + r.message + (p ?? "")
            );
          }
        }
    }
  }
  return h.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (f = {});
  }, ue = h, ue;
}
var ce, _e;
function Ue() {
  if (_e)
    return ce;
  _e = 1;
  var n = Me(), m = Xe(), f = ve(), o = je(), h = Ne(), x = function() {
  };
  process.env.NODE_ENV !== "production" && (x = function(i) {
    var e = "Warning: " + i;
    typeof console < "u" && console.error(e);
    try {
      throw new Error(e);
    } catch {
    }
  });
  function y() {
    return null;
  }
  return ce = function(i, e) {
    var t = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function r(d) {
      var T = d && (t && d[t] || d[c]);
      if (typeof T == "function")
        return T;
    }
    var u = "<<anonymous>>", p = {
      array: L("array"),
      bigint: L("bigint"),
      bool: L("boolean"),
      func: L("function"),
      number: L("number"),
      object: L("object"),
      string: L("string"),
      symbol: L("symbol"),
      any: U(),
      arrayOf: F,
      element: S(),
      elementType: s(),
      instanceOf: X,
      node: g(),
      objectOf: l,
      oneOf: a,
      oneOfType: v,
      shape: R,
      exact: O
    };
    function w(d, T) {
      return d === T ? d !== 0 || 1 / d === 1 / T : d !== d && T !== T;
    }
    function _(d, T) {
      this.message = d, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    _.prototype = Error.prototype;
    function $(d) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, j = 0;
      function A(k, P, M, I, Y, q, H) {
        if (I = I || u, q = q || M, H !== f) {
          if (e) {
            var b = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw b.name = "Invariant Violation", b;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var K = I + ":" + M;
            !T[K] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (x(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[K] = !0, j++);
          }
        }
        return P[M] == null ? k ? P[M] === null ? new _("The " + Y + " `" + q + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new _("The " + Y + " `" + q + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : d(P, M, I, Y, q);
      }
      var C = A.bind(null, !1);
      return C.isRequired = A.bind(null, !0), C;
    }
    function L(d) {
      function T(j, A, C, k, P, M) {
        var I = j[A], Y = W(I);
        if (Y !== d) {
          var q = B(I);
          return new _(
            "Invalid " + k + " `" + P + "` of type " + ("`" + q + "` supplied to `" + C + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return $(T);
    }
    function U() {
      return $(y);
    }
    function F(d) {
      function T(j, A, C, k, P) {
        if (typeof d != "function")
          return new _("Property `" + P + "` of component `" + C + "` has invalid PropType notation inside arrayOf.");
        var M = j[A];
        if (!Array.isArray(M)) {
          var I = W(M);
          return new _("Invalid " + k + " `" + P + "` of type " + ("`" + I + "` supplied to `" + C + "`, expected an array."));
        }
        for (var Y = 0; Y < M.length; Y++) {
          var q = d(M, Y, C, k, P + "[" + Y + "]", f);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return $(T);
    }
    function S() {
      function d(T, j, A, C, k) {
        var P = T[j];
        if (!i(P)) {
          var M = W(P);
          return new _("Invalid " + C + " `" + k + "` of type " + ("`" + M + "` supplied to `" + A + "`, expected a single ReactElement."));
        }
        return null;
      }
      return $(d);
    }
    function s() {
      function d(T, j, A, C, k) {
        var P = T[j];
        if (!n.isValidElementType(P)) {
          var M = W(P);
          return new _("Invalid " + C + " `" + k + "` of type " + ("`" + M + "` supplied to `" + A + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return $(d);
    }
    function X(d) {
      function T(j, A, C, k, P) {
        if (!(j[A] instanceof d)) {
          var M = d.name || u, I = ee(j[A]);
          return new _("Invalid " + k + " `" + P + "` of type " + ("`" + I + "` supplied to `" + C + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return $(T);
    }
    function a(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? x(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : x("Invalid argument supplied to oneOf, expected an array.")), y;
      function T(j, A, C, k, P) {
        for (var M = j[A], I = 0; I < d.length; I++)
          if (w(M, d[I]))
            return null;
        var Y = JSON.stringify(d, function(H, b) {
          var K = B(b);
          return K === "symbol" ? String(b) : b;
        });
        return new _("Invalid " + k + " `" + P + "` of value `" + String(M) + "` " + ("supplied to `" + C + "`, expected one of " + Y + "."));
      }
      return $(T);
    }
    function l(d) {
      function T(j, A, C, k, P) {
        if (typeof d != "function")
          return new _("Property `" + P + "` of component `" + C + "` has invalid PropType notation inside objectOf.");
        var M = j[A], I = W(M);
        if (I !== "object")
          return new _("Invalid " + k + " `" + P + "` of type " + ("`" + I + "` supplied to `" + C + "`, expected an object."));
        for (var Y in M)
          if (o(M, Y)) {
            var q = d(M, Y, C, k, P + "." + Y, f);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return $(T);
    }
    function v(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && x("Invalid argument supplied to oneOfType, expected an instance of array."), y;
      for (var T = 0; T < d.length; T++) {
        var j = d[T];
        if (typeof j != "function")
          return x(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + V(j) + " at index " + T + "."
          ), y;
      }
      function A(C, k, P, M, I) {
        for (var Y = [], q = 0; q < d.length; q++) {
          var H = d[q], b = H(C, k, P, M, I, f);
          if (b == null)
            return null;
          b.data && o(b.data, "expectedType") && Y.push(b.data.expectedType);
        }
        var K = Y.length > 0 ? ", expected one of type [" + Y.join(", ") + "]" : "";
        return new _("Invalid " + M + " `" + I + "` supplied to " + ("`" + P + "`" + K + "."));
      }
      return $(A);
    }
    function g() {
      function d(T, j, A, C, k) {
        return N(T[j]) ? null : new _("Invalid " + C + " `" + k + "` supplied to " + ("`" + A + "`, expected a ReactNode."));
      }
      return $(d);
    }
    function E(d, T, j, A, C) {
      return new _(
        (d || "React class") + ": " + T + " type `" + j + "." + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + C + "`."
      );
    }
    function R(d) {
      function T(j, A, C, k, P) {
        var M = j[A], I = W(M);
        if (I !== "object")
          return new _("Invalid " + k + " `" + P + "` of type `" + I + "` " + ("supplied to `" + C + "`, expected `object`."));
        for (var Y in d) {
          var q = d[Y];
          if (typeof q != "function")
            return E(C, k, P, Y, B(q));
          var H = q(M, Y, C, k, P + "." + Y, f);
          if (H)
            return H;
        }
        return null;
      }
      return $(T);
    }
    function O(d) {
      function T(j, A, C, k, P) {
        var M = j[A], I = W(M);
        if (I !== "object")
          return new _("Invalid " + k + " `" + P + "` of type `" + I + "` " + ("supplied to `" + C + "`, expected `object`."));
        var Y = m({}, j[A], d);
        for (var q in Y) {
          var H = d[q];
          if (o(d, q) && typeof H != "function")
            return E(C, k, P, q, B(H));
          if (!H)
            return new _(
              "Invalid " + k + " `" + P + "` key `" + q + "` supplied to `" + C + "`.\nBad object: " + JSON.stringify(j[A], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var b = H(M, q, C, k, P + "." + q, f);
          if (b)
            return b;
        }
        return null;
      }
      return $(T);
    }
    function N(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(N);
          if (d === null || i(d))
            return !0;
          var T = r(d);
          if (T) {
            var j = T.call(d), A;
            if (T !== d.entries) {
              for (; !(A = j.next()).done; )
                if (!N(A.value))
                  return !1;
            } else
              for (; !(A = j.next()).done; ) {
                var C = A.value;
                if (C && !N(C[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function G(d, T) {
      return d === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function W(d) {
      var T = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : G(T, d) ? "symbol" : T;
    }
    function B(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var T = W(d);
      if (T === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function V(d) {
      var T = B(d);
      switch (T) {
        case "array":
        case "object":
          return "an " + T;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + T;
        default:
          return T;
      }
    }
    function ee(d) {
      return !d.constructor || !d.constructor.name ? u : d.constructor.name;
    }
    return p.checkPropTypes = h, p.resetWarningCache = h.resetWarningCache, p.PropTypes = p, p;
  }, ce;
}
var fe, Pe;
function Ge() {
  if (Pe)
    return fe;
  Pe = 1;
  var n = ve();
  function m() {
  }
  function f() {
  }
  return f.resetWarningCache = m, fe = function() {
    function o(y, i, e, t, c, r) {
      if (r !== n) {
        var u = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw u.name = "Invariant Violation", u;
      }
    }
    o.isRequired = o;
    function h() {
      return o;
    }
    var x = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: h,
      element: o,
      elementType: o,
      instanceOf: h,
      node: o,
      objectOf: h,
      oneOf: h,
      oneOfType: h,
      shape: h,
      exact: h,
      checkPropTypes: f,
      resetWarningCache: m
    };
    return x.PropTypes = x, x;
  }, fe;
}
if (process.env.NODE_ENV !== "production") {
  var Be = Me(), He = !0;
  se.exports = Ue()(Be.isElement, He);
} else
  se.exports = Ge()();
var Ve = se.exports;
const J = /* @__PURE__ */ te(Ve);
var le = { exports: {} };
(function(n, m) {
  (function(f, o) {
    {
      var h = o();
      n && n.exports && (m = n.exports = h), m.randomColor = h;
    }
  })(Z, function() {
    var f = null, o = {};
    L();
    var h = [], x = function(a) {
      if (a = a || {}, a.seed !== void 0 && a.seed !== null && a.seed === parseInt(a.seed, 10))
        f = a.seed;
      else if (typeof a.seed == "string")
        f = s(a.seed);
      else {
        if (a.seed !== void 0 && a.seed !== null)
          throw new TypeError("The seed value must be an integer or string");
        f = null;
      }
      var l, v, g;
      if (a.count !== null && a.count !== void 0) {
        for (var E = a.count, R = [], O = 0; O < a.count; O++)
          h.push(!1);
        for (a.count = null; E > R.length; ) {
          var N = x(a);
          f !== null && (a.seed = f), R.push(N);
        }
        return a.count = E, R;
      }
      return l = y(a), v = i(l, a), g = e(l, v, a), t([l, v, g], a);
    };
    function y(a) {
      if (h.length > 0) {
        var l = X(a.hue), v = w(l), g = (l[1] - l[0]) / h.length, E = parseInt((v - l[0]) / g);
        h[E] === !0 ? E = (E + 2) % h.length : h[E] = !0;
        var R = (l[0] + E * g) % 359, O = (l[0] + (E + 1) * g) % 359;
        return l = [R, O], v = w(l), v < 0 && (v = 360 + v), v;
      } else {
        var l = r(a.hue);
        return v = w(l), v < 0 && (v = 360 + v), v;
      }
    }
    function i(a, l) {
      if (l.hue === "monochrome")
        return 0;
      if (l.luminosity === "random")
        return w([0, 100]);
      var v = u(a), g = v[0], E = v[1];
      switch (l.luminosity) {
        case "bright":
          g = 55;
          break;
        case "dark":
          g = E - 10;
          break;
        case "light":
          E = 55;
          break;
      }
      return w([g, E]);
    }
    function e(a, l, v) {
      var g = c(a, l), E = 100;
      switch (v.luminosity) {
        case "dark":
          E = g + 20;
          break;
        case "light":
          g = (E + g) / 2;
          break;
        case "random":
          g = 0, E = 100;
          break;
      }
      return w([g, E]);
    }
    function t(a, l) {
      switch (l.format) {
        case "hsvArray":
          return a;
        case "hslArray":
          return S(a);
        case "hsl":
          var v = S(a);
          return "hsl(" + v[0] + ", " + v[1] + "%, " + v[2] + "%)";
        case "hsla":
          var g = S(a), O = l.alpha || Math.random();
          return "hsla(" + g[0] + ", " + g[1] + "%, " + g[2] + "%, " + O + ")";
        case "rgbArray":
          return U(a);
        case "rgb":
          var E = U(a);
          return "rgb(" + E.join(", ") + ")";
        case "rgba":
          var R = U(a), O = l.alpha || Math.random();
          return "rgba(" + R.join(", ") + ", " + O + ")";
        default:
          return _(a);
      }
    }
    function c(a, l) {
      for (var v = p(a).lowerBounds, g = 0; g < v.length - 1; g++) {
        var E = v[g][0], R = v[g][1], O = v[g + 1][0], N = v[g + 1][1];
        if (l >= E && l <= O) {
          var G = (N - R) / (O - E), W = R - G * E;
          return G * l + W;
        }
      }
      return 0;
    }
    function r(a) {
      if (typeof parseInt(a) == "number") {
        var l = parseInt(a);
        if (l < 360 && l > 0)
          return [l, l];
      }
      if (typeof a == "string") {
        if (o[a]) {
          var v = o[a];
          if (v.hueRange)
            return v.hueRange;
        } else if (a.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
          var g = F(a)[0];
          return [g, g];
        }
      }
      return [0, 360];
    }
    function u(a) {
      return p(a).saturationRange;
    }
    function p(a) {
      a >= 334 && a <= 360 && (a -= 360);
      for (var l in o) {
        var v = o[l];
        if (v.hueRange && a >= v.hueRange[0] && a <= v.hueRange[1])
          return o[l];
      }
      return "Color not found";
    }
    function w(a) {
      if (f === null) {
        var l = 0.618033988749895, v = Math.random();
        return v += l, v %= 1, Math.floor(a[0] + v * (a[1] + 1 - a[0]));
      } else {
        var g = a[1] || 1, E = a[0] || 0;
        f = (f * 9301 + 49297) % 233280;
        var R = f / 233280;
        return Math.floor(E + R * (g - E));
      }
    }
    function _(a) {
      var l = U(a);
      function v(E) {
        var R = E.toString(16);
        return R.length == 1 ? "0" + R : R;
      }
      var g = "#" + v(l[0]) + v(l[1]) + v(l[2]);
      return g;
    }
    function $(a, l, v) {
      var g = v[0][0], E = v[v.length - 1][0], R = v[v.length - 1][1], O = v[0][1];
      o[a] = {
        hueRange: l,
        lowerBounds: v,
        saturationRange: [g, E],
        brightnessRange: [R, O]
      };
    }
    function L() {
      $(
        "monochrome",
        null,
        [[0, 0], [100, 0]]
      ), $(
        "red",
        [-26, 18],
        [[20, 100], [30, 92], [40, 89], [50, 85], [60, 78], [70, 70], [80, 60], [90, 55], [100, 50]]
      ), $(
        "orange",
        [18, 46],
        [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]]
      ), $(
        "yellow",
        [46, 62],
        [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]]
      ), $(
        "green",
        [62, 178],
        [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]]
      ), $(
        "blue",
        [178, 257],
        [[20, 100], [30, 86], [40, 80], [50, 74], [60, 60], [70, 52], [80, 44], [90, 39], [100, 35]]
      ), $(
        "purple",
        [257, 282],
        [[20, 100], [30, 87], [40, 79], [50, 70], [60, 65], [70, 59], [80, 52], [90, 45], [100, 42]]
      ), $(
        "pink",
        [282, 334],
        [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]]
      );
    }
    function U(a) {
      var l = a[0];
      l === 0 && (l = 1), l === 360 && (l = 359), l = l / 360;
      var v = a[1] / 100, g = a[2] / 100, E = Math.floor(l * 6), R = l * 6 - E, O = g * (1 - v), N = g * (1 - R * v), G = g * (1 - (1 - R) * v), W = 256, B = 256, V = 256;
      switch (E) {
        case 0:
          W = g, B = G, V = O;
          break;
        case 1:
          W = N, B = g, V = O;
          break;
        case 2:
          W = O, B = g, V = G;
          break;
        case 3:
          W = O, B = N, V = g;
          break;
        case 4:
          W = G, B = O, V = g;
          break;
        case 5:
          W = g, B = O, V = N;
          break;
      }
      var ee = [Math.floor(W * 255), Math.floor(B * 255), Math.floor(V * 255)];
      return ee;
    }
    function F(a) {
      a = a.replace(/^#/, ""), a = a.length === 3 ? a.replace(/(.)/g, "$1$1") : a;
      var l = parseInt(a.substr(0, 2), 16) / 255, v = parseInt(a.substr(2, 2), 16) / 255, g = parseInt(a.substr(4, 2), 16) / 255, E = Math.max(l, v, g), R = E - Math.min(l, v, g), O = E ? R / E : 0;
      switch (E) {
        case l:
          return [60 * ((v - g) / R % 6) || 0, O, E];
        case v:
          return [60 * ((g - l) / R + 2) || 0, O, E];
        case g:
          return [60 * ((l - v) / R + 4) || 0, O, E];
      }
    }
    function S(a) {
      var l = a[0], v = a[1] / 100, g = a[2] / 100, E = (2 - v) * g;
      return [
        l,
        Math.round(v * g / (E < 1 ? E : 2 - E) * 1e4) / 100,
        E / 2 * 100
      ];
    }
    function s(a) {
      for (var l = 0, v = 0; v !== a.length && !(l >= Number.MAX_SAFE_INTEGER); v++)
        l += a.charCodeAt(v);
      return l;
    }
    function X(a) {
      if (isNaN(a)) {
        if (typeof a == "string") {
          if (o[a]) {
            var v = o[a];
            if (v.hueRange)
              return v.hueRange;
          } else if (a.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
            var g = F(a)[0];
            return p(g).hueRange;
          }
        }
      } else {
        var l = parseInt(a);
        if (l < 360 && l > 0)
          return p(a).hueRange;
      }
      return [0, 360];
    }
    return x;
  });
})(le, le.exports);
var Je = le.exports;
const Ke = /* @__PURE__ */ te(Je);
var pe = { exports: {} };
pe.exports;
(function(n) {
  (function(m, f, o) {
    function h(e) {
      var t = this, c = i();
      t.next = function() {
        var r = 2091639 * t.s0 + t.c * 23283064365386963e-26;
        return t.s0 = t.s1, t.s1 = t.s2, t.s2 = r - (t.c = r | 0);
      }, t.c = 1, t.s0 = c(" "), t.s1 = c(" "), t.s2 = c(" "), t.s0 -= c(e), t.s0 < 0 && (t.s0 += 1), t.s1 -= c(e), t.s1 < 0 && (t.s1 += 1), t.s2 -= c(e), t.s2 < 0 && (t.s2 += 1), c = null;
    }
    function x(e, t) {
      return t.c = e.c, t.s0 = e.s0, t.s1 = e.s1, t.s2 = e.s2, t;
    }
    function y(e, t) {
      var c = new h(e), r = t && t.state, u = c.next;
      return u.int32 = function() {
        return c.next() * 4294967296 | 0;
      }, u.double = function() {
        return u() + (u() * 2097152 | 0) * 11102230246251565e-32;
      }, u.quick = u, r && (typeof r == "object" && x(r, c), u.state = function() {
        return x(c, {});
      }), u;
    }
    function i() {
      var e = 4022871197, t = function(c) {
        c = String(c);
        for (var r = 0; r < c.length; r++) {
          e += c.charCodeAt(r);
          var u = 0.02519603282416938 * e;
          e = u >>> 0, u -= e, u *= e, e = u >>> 0, u -= e, e += u * 4294967296;
        }
        return (e >>> 0) * 23283064365386963e-26;
      };
      return t;
    }
    f && f.exports ? f.exports = y : o && o.amd ? o(function() {
      return y;
    }) : this.alea = y;
  })(
    Z,
    n,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(pe);
var Ze = pe.exports, de = { exports: {} };
de.exports;
(function(n) {
  (function(m, f, o) {
    function h(i) {
      var e = this, t = "";
      e.x = 0, e.y = 0, e.z = 0, e.w = 0, e.next = function() {
        var r = e.x ^ e.x << 11;
        return e.x = e.y, e.y = e.z, e.z = e.w, e.w ^= e.w >>> 19 ^ r ^ r >>> 8;
      }, i === (i | 0) ? e.x = i : t += i;
      for (var c = 0; c < t.length + 64; c++)
        e.x ^= t.charCodeAt(c) | 0, e.next();
    }
    function x(i, e) {
      return e.x = i.x, e.y = i.y, e.z = i.z, e.w = i.w, e;
    }
    function y(i, e) {
      var t = new h(i), c = e && e.state, r = function() {
        return (t.next() >>> 0) / 4294967296;
      };
      return r.double = function() {
        do
          var u = t.next() >>> 11, p = (t.next() >>> 0) / 4294967296, w = (u + p) / (1 << 21);
        while (w === 0);
        return w;
      }, r.int32 = t.next, r.quick = r, c && (typeof c == "object" && x(c, t), r.state = function() {
        return x(t, {});
      }), r;
    }
    f && f.exports ? f.exports = y : o && o.amd ? o(function() {
      return y;
    }) : this.xor128 = y;
  })(
    Z,
    n,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(de);
var Qe = de.exports, ye = { exports: {} };
ye.exports;
(function(n) {
  (function(m, f, o) {
    function h(i) {
      var e = this, t = "";
      e.next = function() {
        var r = e.x ^ e.x >>> 2;
        return e.x = e.y, e.y = e.z, e.z = e.w, e.w = e.v, (e.d = e.d + 362437 | 0) + (e.v = e.v ^ e.v << 4 ^ (r ^ r << 1)) | 0;
      }, e.x = 0, e.y = 0, e.z = 0, e.w = 0, e.v = 0, i === (i | 0) ? e.x = i : t += i;
      for (var c = 0; c < t.length + 64; c++)
        e.x ^= t.charCodeAt(c) | 0, c == t.length && (e.d = e.x << 10 ^ e.x >>> 4), e.next();
    }
    function x(i, e) {
      return e.x = i.x, e.y = i.y, e.z = i.z, e.w = i.w, e.v = i.v, e.d = i.d, e;
    }
    function y(i, e) {
      var t = new h(i), c = e && e.state, r = function() {
        return (t.next() >>> 0) / 4294967296;
      };
      return r.double = function() {
        do
          var u = t.next() >>> 11, p = (t.next() >>> 0) / 4294967296, w = (u + p) / (1 << 21);
        while (w === 0);
        return w;
      }, r.int32 = t.next, r.quick = r, c && (typeof c == "object" && x(c, t), r.state = function() {
        return x(t, {});
      }), r;
    }
    f && f.exports ? f.exports = y : o && o.amd ? o(function() {
      return y;
    }) : this.xorwow = y;
  })(
    Z,
    n,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(ye);
var er = ye.exports, he = { exports: {} };
he.exports;
(function(n) {
  (function(m, f, o) {
    function h(i) {
      var e = this;
      e.next = function() {
        var c = e.x, r = e.i, u, p;
        return u = c[r], u ^= u >>> 7, p = u ^ u << 24, u = c[r + 1 & 7], p ^= u ^ u >>> 10, u = c[r + 3 & 7], p ^= u ^ u >>> 3, u = c[r + 4 & 7], p ^= u ^ u << 7, u = c[r + 7 & 7], u = u ^ u << 13, p ^= u ^ u << 9, c[r] = p, e.i = r + 1 & 7, p;
      };
      function t(c, r) {
        var u, p = [];
        if (r === (r | 0))
          p[0] = r;
        else
          for (r = "" + r, u = 0; u < r.length; ++u)
            p[u & 7] = p[u & 7] << 15 ^ r.charCodeAt(u) + p[u + 1 & 7] << 13;
        for (; p.length < 8; )
          p.push(0);
        for (u = 0; u < 8 && p[u] === 0; ++u)
          ;
        for (u == 8 ? p[7] = -1 : p[u], c.x = p, c.i = 0, u = 256; u > 0; --u)
          c.next();
      }
      t(e, i);
    }
    function x(i, e) {
      return e.x = i.x.slice(), e.i = i.i, e;
    }
    function y(i, e) {
      i == null && (i = +/* @__PURE__ */ new Date());
      var t = new h(i), c = e && e.state, r = function() {
        return (t.next() >>> 0) / 4294967296;
      };
      return r.double = function() {
        do
          var u = t.next() >>> 11, p = (t.next() >>> 0) / 4294967296, w = (u + p) / (1 << 21);
        while (w === 0);
        return w;
      }, r.int32 = t.next, r.quick = r, c && (c.x && x(c, t), r.state = function() {
        return x(t, {});
      }), r;
    }
    f && f.exports ? f.exports = y : o && o.amd ? o(function() {
      return y;
    }) : this.xorshift7 = y;
  })(
    Z,
    n,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(he);
var rr = he.exports, xe = { exports: {} };
xe.exports;
(function(n) {
  (function(m, f, o) {
    function h(i) {
      var e = this;
      e.next = function() {
        var c = e.w, r = e.X, u = e.i, p, w;
        return e.w = c = c + 1640531527 | 0, w = r[u + 34 & 127], p = r[u = u + 1 & 127], w ^= w << 13, p ^= p << 17, w ^= w >>> 15, p ^= p >>> 12, w = r[u] = w ^ p, e.i = u, w + (c ^ c >>> 16) | 0;
      };
      function t(c, r) {
        var u, p, w, _, $, L = [], U = 128;
        for (r === (r | 0) ? (p = r, r = null) : (r = r + "\0", p = 0, U = Math.max(U, r.length)), w = 0, _ = -32; _ < U; ++_)
          r && (p ^= r.charCodeAt((_ + 32) % r.length)), _ === 0 && ($ = p), p ^= p << 10, p ^= p >>> 15, p ^= p << 4, p ^= p >>> 13, _ >= 0 && ($ = $ + 1640531527 | 0, u = L[_ & 127] ^= p + $, w = u == 0 ? w + 1 : 0);
        for (w >= 128 && (L[(r && r.length || 0) & 127] = -1), w = 127, _ = 4 * 128; _ > 0; --_)
          p = L[w + 34 & 127], u = L[w = w + 1 & 127], p ^= p << 13, u ^= u << 17, p ^= p >>> 15, u ^= u >>> 12, L[w] = p ^ u;
        c.w = $, c.X = L, c.i = w;
      }
      t(e, i);
    }
    function x(i, e) {
      return e.i = i.i, e.w = i.w, e.X = i.X.slice(), e;
    }
    function y(i, e) {
      i == null && (i = +/* @__PURE__ */ new Date());
      var t = new h(i), c = e && e.state, r = function() {
        return (t.next() >>> 0) / 4294967296;
      };
      return r.double = function() {
        do
          var u = t.next() >>> 11, p = (t.next() >>> 0) / 4294967296, w = (u + p) / (1 << 21);
        while (w === 0);
        return w;
      }, r.int32 = t.next, r.quick = r, c && (c.X && x(c, t), r.state = function() {
        return x(t, {});
      }), r;
    }
    f && f.exports ? f.exports = y : o && o.amd ? o(function() {
      return y;
    }) : this.xor4096 = y;
  })(
    Z,
    // window object or global
    n,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(xe);
var nr = xe.exports, ge = { exports: {} };
ge.exports;
(function(n) {
  (function(m, f, o) {
    function h(i) {
      var e = this, t = "";
      e.next = function() {
        var r = e.b, u = e.c, p = e.d, w = e.a;
        return r = r << 25 ^ r >>> 7 ^ u, u = u - p | 0, p = p << 24 ^ p >>> 8 ^ w, w = w - r | 0, e.b = r = r << 20 ^ r >>> 12 ^ u, e.c = u = u - p | 0, e.d = p << 16 ^ u >>> 16 ^ w, e.a = w - r | 0;
      }, e.a = 0, e.b = 0, e.c = -1640531527, e.d = 1367130551, i === Math.floor(i) ? (e.a = i / 4294967296 | 0, e.b = i | 0) : t += i;
      for (var c = 0; c < t.length + 20; c++)
        e.b ^= t.charCodeAt(c) | 0, e.next();
    }
    function x(i, e) {
      return e.a = i.a, e.b = i.b, e.c = i.c, e.d = i.d, e;
    }
    function y(i, e) {
      var t = new h(i), c = e && e.state, r = function() {
        return (t.next() >>> 0) / 4294967296;
      };
      return r.double = function() {
        do
          var u = t.next() >>> 11, p = (t.next() >>> 0) / 4294967296, w = (u + p) / (1 << 21);
        while (w === 0);
        return w;
      }, r.int32 = t.next, r.quick = r, c && (typeof c == "object" && x(c, t), r.state = function() {
        return x(t, {});
      }), r;
    }
    f && f.exports ? f.exports = y : o && o.amd ? o(function() {
      return y;
    }) : this.tychei = y;
  })(
    Z,
    n,
    // present in node.js
    !1
    // present with an AMD loader
  );
})(ge);
var tr = ge.exports, $e = { exports: {} };
const or = {}, ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: or
}, Symbol.toStringTag, { value: "Module" })), ir = /* @__PURE__ */ Fe(ar);
(function(n) {
  (function(m, f, o) {
    var h = 256, x = 6, y = 52, i = "random", e = o.pow(h, x), t = o.pow(2, y), c = t * 2, r = h - 1, u;
    function p(S, s, X) {
      var a = [];
      s = s == !0 ? { entropy: !0 } : s || {};
      var l = L($(
        s.entropy ? [S, F(f)] : S ?? U(),
        3
      ), a), v = new w(a), g = function() {
        for (var E = v.g(x), R = e, O = 0; E < t; )
          E = (E + O) * h, R *= h, O = v.g(1);
        for (; E >= c; )
          E /= 2, R /= 2, O >>>= 1;
        return (E + O) / R;
      };
      return g.int32 = function() {
        return v.g(4) | 0;
      }, g.quick = function() {
        return v.g(4) / 4294967296;
      }, g.double = g, L(F(v.S), f), (s.pass || X || function(E, R, O, N) {
        return N && (N.S && _(N, v), E.state = function() {
          return _(v, {});
        }), O ? (o[i] = E, R) : E;
      })(
        g,
        l,
        "global" in s ? s.global : this == o,
        s.state
      );
    }
    function w(S) {
      var s, X = S.length, a = this, l = 0, v = a.i = a.j = 0, g = a.S = [];
      for (X || (S = [X++]); l < h; )
        g[l] = l++;
      for (l = 0; l < h; l++)
        g[l] = g[v = r & v + S[l % X] + (s = g[l])], g[v] = s;
      (a.g = function(E) {
        for (var R, O = 0, N = a.i, G = a.j, W = a.S; E--; )
          R = W[N = r & N + 1], O = O * h + W[r & (W[N] = W[G = r & G + R]) + (W[G] = R)];
        return a.i = N, a.j = G, O;
      })(h);
    }
    function _(S, s) {
      return s.i = S.i, s.j = S.j, s.S = S.S.slice(), s;
    }
    function $(S, s) {
      var X = [], a = typeof S, l;
      if (s && a == "object")
        for (l in S)
          try {
            X.push($(S[l], s - 1));
          } catch {
          }
      return X.length ? X : a == "string" ? S : S + "\0";
    }
    function L(S, s) {
      for (var X = S + "", a, l = 0; l < X.length; )
        s[r & l] = r & (a ^= s[r & l] * 19) + X.charCodeAt(l++);
      return F(s);
    }
    function U() {
      try {
        var S;
        return u && (S = u.randomBytes) ? S = S(h) : (S = new Uint8Array(h), (m.crypto || m.msCrypto).getRandomValues(S)), F(S);
      } catch {
        var s = m.navigator, X = s && s.plugins;
        return [+/* @__PURE__ */ new Date(), m, X, m.screen, F(f)];
      }
    }
    function F(S) {
      return String.fromCharCode.apply(0, S);
    }
    if (L(o.random(), f), n.exports) {
      n.exports = p;
      try {
        u = ir;
      } catch {
      }
    } else
      o["seed" + i] = p;
  })(
    // global: `self` in browsers (including strict mode and web workers),
    // otherwise `this` in Node and other environments
    typeof self < "u" ? self : Z,
    [],
    // pool: entropy pool starts empty
    Math
    // math: package containing random, pow, and seedrandom
  );
})($e);
var ur = $e.exports, cr = Ze, fr = Qe, sr = er, lr = rr, vr = nr, pr = tr, Q = ur;
Q.alea = cr;
Q.xor128 = fr;
Q.xorwow = sr;
Q.xorshift7 = lr;
Q.xor4096 = vr;
Q.tychei = pr;
var dr = Q;
const yr = /* @__PURE__ */ te(dr);
function ke(n, m) {
  if (!Array.isArray(n))
    throw new Error("shuffle expect an array as parameter.");
  m = m || {};
  var f = n, o = n.length, h = m.rng || Math.random, x, y;
  for (m.copy === !0 && (f = n.slice()); o; )
    x = Math.floor(h() * o), o -= 1, y = f[o], f[o] = f[x], f[x] = y;
  return f;
}
ke.pick = function(n, m) {
  if (!Array.isArray(n))
    throw new Error("shuffle.pick() expect an array as parameter.");
  m = m || {};
  var f = m.rng || Math.random, o = m.picks || 1;
  if (typeof o == "number" && o !== 1) {
    for (var h = n.length, x = n.slice(), y = [], i; o && h; )
      i = Math.floor(f() * h), y.push(x[i]), x.splice(i, 1), h -= 1, o -= 1;
    return y;
  }
  return n[Math.floor(f() * n.length)];
};
var hr = ke;
const xr = /* @__PURE__ */ te(hr), gr = (n, m, f) => {
  const { className: o, style: h, ...x } = n.props || {}, y = m + "px", i = n.key || n.value, e = { ...br, color: f, fontSize: y, ...h };
  let t = "tag-cloud-tag";
  return o && (t += " " + o), /* @__PURE__ */ Ae("span", { className: t, style: e, ...x, children: n.value }, i);
}, br = {
  margin: "0px 3px",
  verticalAlign: "middle",
  display: "inline-block"
}, mr = (n, m, f, o, h) => f - m === 0 ? Math.round((o + h) / 2) : Math.round((n - m) * (h - o) / (f - m) + o), Er = (n, m) => Object.keys(n).reduce((f, o) => (~m.indexOf(o) || (f[o] = n[o]), f), {});
function Ie(n, m) {
  return m.reduce((f, o) => (f[o] = n[o], f), {});
}
function wr(n) {
  return Object.keys(n);
}
const be = [
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
], Tr = [
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
function qe(n) {
  return n.key + n.value + n.count;
}
function Sr(n, {
  disableRandomColor: m,
  colorOptions: f,
  randomSeed: o
}) {
  if (n.color)
    return n.color;
  if (!m)
    return Ke({
      seed: o && `${o}:${qe(n)}`,
      ...f
    });
}
function Rr(n, m, f) {
  const o = Ie(n.props, be), h = wr(f).reduce(
    (x, y) => ((f[y] || o[y]) && (x[y] = (i) => {
      f[y] && f[y](m, i), o[y] && o(i);
    }), x),
    {}
  );
  return De.cloneElement(n, h);
}
function Cr(n, m) {
  const { minSize: f, maxSize: o } = n, h = m.map(({ tag: e }) => e.count), x = Math.min(...h), y = Math.max(...h), i = Ie(n, be);
  return m.map(({ tag: e, color: t }) => {
    const c = mr(e.count, x, y, f, o), r = n.renderer(e, c, t);
    return Rr(r, e, i);
  });
}
function Or(n) {
  const { tags: m, shuffle: f, randomSeed: o, randomNumberGenerator: h } = n, x = o ? yr(o.toString()) : h, y = m.slice();
  return (f ? xr(y, { rng: x }) : y).map((e) => ({
    tag: e,
    color: Sr(e, n)
  }));
}
function _r({
  renderer: n = gr,
  shuffle: m = !0,
  className: f = "tag-cloud",
  colorOptions: o = {},
  containerComponent: h = "div",
  ...x
}) {
  const y = {
    renderer: n,
    shuffle: m,
    className: f,
    colorOptions: o,
    containerComponent: h,
    ...x
  }, [i, e] = ze([]), t = y.tags.map(qe).join(":");
  Ye(() => {
    e(Or(y));
  }, [
    JSON.stringify(y.colorOptions),
    y.randomSeed,
    y.shuffle,
    y.disableRandomColor,
    t
  ]);
  const c = Er(y, [...Tr, ...be]), r = y.containerComponent;
  return /* @__PURE__ */ Ae(r, { ...c, children: Cr(y, i) });
}
_r.propTypes = {
  tags: J.array.isRequired,
  maxSize: J.number.isRequired,
  minSize: J.number.isRequired,
  shuffle: J.bool,
  colorOptions: J.object,
  disableRandomColor: J.bool,
  renderer: J.func,
  className: J.string,
  randomSeed: J.any,
  randomNumberGenerator: J.func,
  containerComponent: J.elementType
};
export {
  _r as TagCloud
};
