var Y0 = Object.defineProperty;
var X0 = (e, r, o) =>
  r in e
    ? Y0(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (e[r] = o);
var Kr = (e, r, o) => X0(e, typeof r != "symbol" ? r + "" : r, o);
function J0(e, r) {
  for (var o = 0; o < r.length; o++) {
    const s = r[o];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const l in s)
        if (l !== "default" && !(l in e)) {
          const u = Object.getOwnPropertyDescriptor(s, l);
          u &&
            Object.defineProperty(
              e,
              l,
              u.get ? u : { enumerable: !0, get: () => s[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) s(l);
  new MutationObserver((l) => {
    for (const u of l)
      if (u.type === "childList")
        for (const f of u.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && s(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(l) {
    const u = {};
    return (
      l.integrity && (u.integrity = l.integrity),
      l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (u.credentials = "omit")
          : (u.credentials = "same-origin"),
      u
    );
  }
  function s(l) {
    if (l.ep) return;
    l.ep = !0;
    const u = o(l);
    fetch(l.href, u);
  }
})();
var Il =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function la(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var pc = { exports: {} },
  zi = {},
  mc = { exports: {} },
  Pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vm;
function Z0() {
  if (Vm) return Pe;
  Vm = 1;
  var e = Symbol.for("react.element"),
    r = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    u = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    k = Symbol.for("react.lazy"),
    C = Symbol.iterator;
  function S(L) {
    return L === null || typeof L != "object"
      ? null
      : ((L = (C && L[C]) || L["@@iterator"]),
        typeof L == "function" ? L : null);
  }
  var b = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    w = Object.assign,
    h = {};
  function P(L, G, ie) {
    (this.props = L),
      (this.context = G),
      (this.refs = h),
      (this.updater = ie || b);
  }
  (P.prototype.isReactComponent = {}),
    (P.prototype.setState = function (L, G) {
      if (typeof L != "object" && typeof L != "function" && L != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, L, G, "setState");
    }),
    (P.prototype.forceUpdate = function (L) {
      this.updater.enqueueForceUpdate(this, L, "forceUpdate");
    });
  function I() {}
  I.prototype = P.prototype;
  function T(L, G, ie) {
    (this.props = L),
      (this.context = G),
      (this.refs = h),
      (this.updater = ie || b);
  }
  var v = (T.prototype = new I());
  (v.constructor = T), w(v, P.prototype), (v.isPureReactComponent = !0);
  var x = Array.isArray,
    R = Object.prototype.hasOwnProperty,
    M = { current: null },
    O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function N(L, G, ie) {
    var se,
      le = {},
      Se = null,
      ce = null;
    if (G != null)
      for (se in (G.ref !== void 0 && (ce = G.ref),
      G.key !== void 0 && (Se = "" + G.key),
      G))
        R.call(G, se) && !O.hasOwnProperty(se) && (le[se] = G[se]);
    var we = arguments.length - 2;
    if (we === 1) le.children = ie;
    else if (1 < we) {
      for (var ye = Array(we), ve = 0; ve < we; ve++)
        ye[ve] = arguments[ve + 2];
      le.children = ye;
    }
    if (L && L.defaultProps)
      for (se in ((we = L.defaultProps), we))
        le[se] === void 0 && (le[se] = we[se]);
    return {
      $$typeof: e,
      type: L,
      key: Se,
      ref: ce,
      props: le,
      _owner: M.current,
    };
  }
  function z(L, G) {
    return {
      $$typeof: e,
      type: L.type,
      key: G,
      ref: L.ref,
      props: L.props,
      _owner: L._owner,
    };
  }
  function g(L) {
    return typeof L == "object" && L !== null && L.$$typeof === e;
  }
  function A(L) {
    var G = { "=": "=0", ":": "=2" };
    return (
      "$" +
      L.replace(/[=:]/g, function (ie) {
        return G[ie];
      })
    );
  }
  var j = /\/+/g;
  function B(L, G) {
    return typeof L == "object" && L !== null && L.key != null
      ? A("" + L.key)
      : G.toString(36);
  }
  function q(L, G, ie, se, le) {
    var Se = typeof L;
    (Se === "undefined" || Se === "boolean") && (L = null);
    var ce = !1;
    if (L === null) ce = !0;
    else
      switch (Se) {
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (L.$$typeof) {
            case e:
            case r:
              ce = !0;
          }
      }
    if (ce)
      return (
        (ce = L),
        (le = le(ce)),
        (L = se === "" ? "." + B(ce, 0) : se),
        x(le)
          ? ((ie = ""),
            L != null && (ie = L.replace(j, "$&/") + "/"),
            q(le, G, ie, "", function (ve) {
              return ve;
            }))
          : le != null &&
            (g(le) &&
              (le = z(
                le,
                ie +
                  (!le.key || (ce && ce.key === le.key)
                    ? ""
                    : ("" + le.key).replace(j, "$&/") + "/") +
                  L,
              )),
            G.push(le)),
        1
      );
    if (((ce = 0), (se = se === "" ? "." : se + ":"), x(L)))
      for (var we = 0; we < L.length; we++) {
        Se = L[we];
        var ye = se + B(Se, we);
        ce += q(Se, G, ie, ye, le);
      }
    else if (((ye = S(L)), typeof ye == "function"))
      for (L = ye.call(L), we = 0; !(Se = L.next()).done; )
        (Se = Se.value), (ye = se + B(Se, we++)), (ce += q(Se, G, ie, ye, le));
    else if (Se === "object")
      throw (
        ((G = String(L)),
        Error(
          "Objects are not valid as a React child (found: " +
            (G === "[object Object]"
              ? "object with keys {" + Object.keys(L).join(", ") + "}"
              : G) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return ce;
  }
  function V(L, G, ie) {
    if (L == null) return L;
    var se = [],
      le = 0;
    return (
      q(L, se, "", "", function (Se) {
        return G.call(ie, Se, le++);
      }),
      se
    );
  }
  function Y(L) {
    if (L._status === -1) {
      var G = L._result;
      (G = G()),
        G.then(
          function (ie) {
            (L._status === 0 || L._status === -1) &&
              ((L._status = 1), (L._result = ie));
          },
          function (ie) {
            (L._status === 0 || L._status === -1) &&
              ((L._status = 2), (L._result = ie));
          },
        ),
        L._status === -1 && ((L._status = 0), (L._result = G));
    }
    if (L._status === 1) return L._result.default;
    throw L._result;
  }
  var te = { current: null },
    H = { transition: null },
    K = {
      ReactCurrentDispatcher: te,
      ReactCurrentBatchConfig: H,
      ReactCurrentOwner: M,
    };
  function Z() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Pe.Children = {
      map: V,
      forEach: function (L, G, ie) {
        V(
          L,
          function () {
            G.apply(this, arguments);
          },
          ie,
        );
      },
      count: function (L) {
        var G = 0;
        return (
          V(L, function () {
            G++;
          }),
          G
        );
      },
      toArray: function (L) {
        return (
          V(L, function (G) {
            return G;
          }) || []
        );
      },
      only: function (L) {
        if (!g(L))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return L;
      },
    }),
    (Pe.Component = P),
    (Pe.Fragment = o),
    (Pe.Profiler = l),
    (Pe.PureComponent = T),
    (Pe.StrictMode = s),
    (Pe.Suspense = m),
    (Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K),
    (Pe.act = Z),
    (Pe.cloneElement = function (L, G, ie) {
      if (L == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            L +
            ".",
        );
      var se = w({}, L.props),
        le = L.key,
        Se = L.ref,
        ce = L._owner;
      if (G != null) {
        if (
          (G.ref !== void 0 && ((Se = G.ref), (ce = M.current)),
          G.key !== void 0 && (le = "" + G.key),
          L.type && L.type.defaultProps)
        )
          var we = L.type.defaultProps;
        for (ye in G)
          R.call(G, ye) &&
            !O.hasOwnProperty(ye) &&
            (se[ye] = G[ye] === void 0 && we !== void 0 ? we[ye] : G[ye]);
      }
      var ye = arguments.length - 2;
      if (ye === 1) se.children = ie;
      else if (1 < ye) {
        we = Array(ye);
        for (var ve = 0; ve < ye; ve++) we[ve] = arguments[ve + 2];
        se.children = we;
      }
      return {
        $$typeof: e,
        type: L.type,
        key: le,
        ref: Se,
        props: se,
        _owner: ce,
      };
    }),
    (Pe.createContext = function (L) {
      return (
        (L = {
          $$typeof: f,
          _currentValue: L,
          _currentValue2: L,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (L.Provider = { $$typeof: u, _context: L }),
        (L.Consumer = L)
      );
    }),
    (Pe.createElement = N),
    (Pe.createFactory = function (L) {
      var G = N.bind(null, L);
      return (G.type = L), G;
    }),
    (Pe.createRef = function () {
      return { current: null };
    }),
    (Pe.forwardRef = function (L) {
      return { $$typeof: p, render: L };
    }),
    (Pe.isValidElement = g),
    (Pe.lazy = function (L) {
      return { $$typeof: k, _payload: { _status: -1, _result: L }, _init: Y };
    }),
    (Pe.memo = function (L, G) {
      return { $$typeof: y, type: L, compare: G === void 0 ? null : G };
    }),
    (Pe.startTransition = function (L) {
      var G = H.transition;
      H.transition = {};
      try {
        L();
      } finally {
        H.transition = G;
      }
    }),
    (Pe.unstable_act = Z),
    (Pe.useCallback = function (L, G) {
      return te.current.useCallback(L, G);
    }),
    (Pe.useContext = function (L) {
      return te.current.useContext(L);
    }),
    (Pe.useDebugValue = function () {}),
    (Pe.useDeferredValue = function (L) {
      return te.current.useDeferredValue(L);
    }),
    (Pe.useEffect = function (L, G) {
      return te.current.useEffect(L, G);
    }),
    (Pe.useId = function () {
      return te.current.useId();
    }),
    (Pe.useImperativeHandle = function (L, G, ie) {
      return te.current.useImperativeHandle(L, G, ie);
    }),
    (Pe.useInsertionEffect = function (L, G) {
      return te.current.useInsertionEffect(L, G);
    }),
    (Pe.useLayoutEffect = function (L, G) {
      return te.current.useLayoutEffect(L, G);
    }),
    (Pe.useMemo = function (L, G) {
      return te.current.useMemo(L, G);
    }),
    (Pe.useReducer = function (L, G, ie) {
      return te.current.useReducer(L, G, ie);
    }),
    (Pe.useRef = function (L) {
      return te.current.useRef(L);
    }),
    (Pe.useState = function (L) {
      return te.current.useState(L);
    }),
    (Pe.useSyncExternalStore = function (L, G, ie) {
      return te.current.useSyncExternalStore(L, G, ie);
    }),
    (Pe.useTransition = function () {
      return te.current.useTransition();
    }),
    (Pe.version = "18.3.1"),
    Pe
  );
}
var Hm;
function aa() {
  return Hm || ((Hm = 1), (mc.exports = Z0())), mc.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qm;
function e1() {
  if (qm) return zi;
  qm = 1;
  var e = aa(),
    r = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    l = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, m, y) {
    var k,
      C = {},
      S = null,
      b = null;
    y !== void 0 && (S = "" + y),
      m.key !== void 0 && (S = "" + m.key),
      m.ref !== void 0 && (b = m.ref);
    for (k in m) s.call(m, k) && !u.hasOwnProperty(k) && (C[k] = m[k]);
    if (p && p.defaultProps)
      for (k in ((m = p.defaultProps), m)) C[k] === void 0 && (C[k] = m[k]);
    return {
      $$typeof: r,
      type: p,
      key: S,
      ref: b,
      props: C,
      _owner: l.current,
    };
  }
  return (zi.Fragment = o), (zi.jsx = f), (zi.jsxs = f), zi;
}
var Qm;
function t1() {
  return Qm || ((Qm = 1), (pc.exports = e1())), pc.exports;
}
var X = t1(),
  _ = aa();
const Cn = la(_),
  Wc = J0({ __proto__: null, default: Cn }, [_]);
var Ol = {},
  hc = { exports: {} },
  Ht = {},
  gc = { exports: {} },
  yc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Km;
function n1() {
  return (
    Km ||
      ((Km = 1),
      (function (e) {
        function r(H, K) {
          var Z = H.length;
          H.push(K);
          e: for (; 0 < Z; ) {
            var L = (Z - 1) >>> 1,
              G = H[L];
            if (0 < l(G, K)) (H[L] = K), (H[Z] = G), (Z = L);
            else break e;
          }
        }
        function o(H) {
          return H.length === 0 ? null : H[0];
        }
        function s(H) {
          if (H.length === 0) return null;
          var K = H[0],
            Z = H.pop();
          if (Z !== K) {
            H[0] = Z;
            e: for (var L = 0, G = H.length, ie = G >>> 1; L < ie; ) {
              var se = 2 * (L + 1) - 1,
                le = H[se],
                Se = se + 1,
                ce = H[Se];
              if (0 > l(le, Z))
                Se < G && 0 > l(ce, le)
                  ? ((H[L] = ce), (H[Se] = Z), (L = Se))
                  : ((H[L] = le), (H[se] = Z), (L = se));
              else if (Se < G && 0 > l(ce, Z))
                (H[L] = ce), (H[Se] = Z), (L = Se);
              else break e;
            }
          }
          return K;
        }
        function l(H, K) {
          var Z = H.sortIndex - K.sortIndex;
          return Z !== 0 ? Z : H.id - K.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var u = performance;
          e.unstable_now = function () {
            return u.now();
          };
        } else {
          var f = Date,
            p = f.now();
          e.unstable_now = function () {
            return f.now() - p;
          };
        }
        var m = [],
          y = [],
          k = 1,
          C = null,
          S = 3,
          b = !1,
          w = !1,
          h = !1,
          P = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          T = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function v(H) {
          for (var K = o(y); K !== null; ) {
            if (K.callback === null) s(y);
            else if (K.startTime <= H)
              s(y), (K.sortIndex = K.expirationTime), r(m, K);
            else break;
            K = o(y);
          }
        }
        function x(H) {
          if (((h = !1), v(H), !w))
            if (o(m) !== null) (w = !0), Y(R);
            else {
              var K = o(y);
              K !== null && te(x, K.startTime - H);
            }
        }
        function R(H, K) {
          (w = !1), h && ((h = !1), I(N), (N = -1)), (b = !0);
          var Z = S;
          try {
            for (
              v(K), C = o(m);
              C !== null && (!(C.expirationTime > K) || (H && !A()));

            ) {
              var L = C.callback;
              if (typeof L == "function") {
                (C.callback = null), (S = C.priorityLevel);
                var G = L(C.expirationTime <= K);
                (K = e.unstable_now()),
                  typeof G == "function"
                    ? (C.callback = G)
                    : C === o(m) && s(m),
                  v(K);
              } else s(m);
              C = o(m);
            }
            if (C !== null) var ie = !0;
            else {
              var se = o(y);
              se !== null && te(x, se.startTime - K), (ie = !1);
            }
            return ie;
          } finally {
            (C = null), (S = Z), (b = !1);
          }
        }
        var M = !1,
          O = null,
          N = -1,
          z = 5,
          g = -1;
        function A() {
          return !(e.unstable_now() - g < z);
        }
        function j() {
          if (O !== null) {
            var H = e.unstable_now();
            g = H;
            var K = !0;
            try {
              K = O(!0, H);
            } finally {
              K ? B() : ((M = !1), (O = null));
            }
          } else M = !1;
        }
        var B;
        if (typeof T == "function")
          B = function () {
            T(j);
          };
        else if (typeof MessageChannel < "u") {
          var q = new MessageChannel(),
            V = q.port2;
          (q.port1.onmessage = j),
            (B = function () {
              V.postMessage(null);
            });
        } else
          B = function () {
            P(j, 0);
          };
        function Y(H) {
          (O = H), M || ((M = !0), B());
        }
        function te(H, K) {
          N = P(function () {
            H(e.unstable_now());
          }, K);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (H) {
            H.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            w || b || ((w = !0), Y(R));
          }),
          (e.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (z = 0 < H ? Math.floor(1e3 / H) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return o(m);
          }),
          (e.unstable_next = function (H) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = S;
            }
            var Z = S;
            S = K;
            try {
              return H();
            } finally {
              S = Z;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (H, K) {
            switch (H) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                H = 3;
            }
            var Z = S;
            S = H;
            try {
              return K();
            } finally {
              S = Z;
            }
          }),
          (e.unstable_scheduleCallback = function (H, K, Z) {
            var L = e.unstable_now();
            switch (
              (typeof Z == "object" && Z !== null
                ? ((Z = Z.delay),
                  (Z = typeof Z == "number" && 0 < Z ? L + Z : L))
                : (Z = L),
              H)
            ) {
              case 1:
                var G = -1;
                break;
              case 2:
                G = 250;
                break;
              case 5:
                G = 1073741823;
                break;
              case 4:
                G = 1e4;
                break;
              default:
                G = 5e3;
            }
            return (
              (G = Z + G),
              (H = {
                id: k++,
                callback: K,
                priorityLevel: H,
                startTime: Z,
                expirationTime: G,
                sortIndex: -1,
              }),
              Z > L
                ? ((H.sortIndex = Z),
                  r(y, H),
                  o(m) === null &&
                    H === o(y) &&
                    (h ? (I(N), (N = -1)) : (h = !0), te(x, Z - L)))
                : ((H.sortIndex = G), r(m, H), w || b || ((w = !0), Y(R))),
              H
            );
          }),
          (e.unstable_shouldYield = A),
          (e.unstable_wrapCallback = function (H) {
            var K = S;
            return function () {
              var Z = S;
              S = K;
              try {
                return H.apply(this, arguments);
              } finally {
                S = Z;
              }
            };
          });
      })(yc)),
    yc
  );
}
var Gm;
function r1() {
  return Gm || ((Gm = 1), (gc.exports = n1())), gc.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ym;
function o1() {
  if (Ym) return Ht;
  Ym = 1;
  var e = aa(),
    r = r1();
  function o(t) {
    for (
      var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t,
        i = 1;
      i < arguments.length;
      i++
    )
      n += "&args[]=" + encodeURIComponent(arguments[i]);
    return (
      "Minified React error #" +
      t +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var s = new Set(),
    l = {};
  function u(t, n) {
    f(t, n), f(t + "Capture", n);
  }
  function f(t, n) {
    for (l[t] = n, t = 0; t < n.length; t++) s.add(n[t]);
  }
  var p = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    y =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    k = {},
    C = {};
  function S(t) {
    return m.call(C, t)
      ? !0
      : m.call(k, t)
        ? !1
        : y.test(t)
          ? (C[t] = !0)
          : ((k[t] = !0), !1);
  }
  function b(t, n, i, a) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return a
          ? !1
          : i !== null
            ? !i.acceptsBooleans
            : ((t = t.toLowerCase().slice(0, 5)),
              t !== "data-" && t !== "aria-");
      default:
        return !1;
    }
  }
  function w(t, n, i, a) {
    if (n === null || typeof n > "u" || b(t, n, i, a)) return !0;
    if (a) return !1;
    if (i !== null)
      switch (i.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function h(t, n, i, a, c, d, E) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = a),
      (this.attributeNamespace = c),
      (this.mustUseProperty = i),
      (this.propertyName = t),
      (this.type = n),
      (this.sanitizeURL = d),
      (this.removeEmptyString = E);
  }
  var P = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (t) {
      P[t] = new h(t, 0, !1, t, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (t) {
      var n = t[0];
      P[n] = new h(n, 1, !1, t[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (t) {
        P[t] = new h(t, 2, !1, t.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (t) {
      P[t] = new h(t, 2, !1, t, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (t) {
        P[t] = new h(t, 3, !1, t.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (t) {
      P[t] = new h(t, 3, !0, t, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (t) {
      P[t] = new h(t, 4, !1, t, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (t) {
      P[t] = new h(t, 6, !1, t, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (t) {
      P[t] = new h(t, 5, !1, t.toLowerCase(), null, !1, !1);
    });
  var I = /[\-:]([a-z])/g;
  function T(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (t) {
      var n = t.replace(I, T);
      P[n] = new h(n, 1, !1, t, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (t) {
        var n = t.replace(I, T);
        P[n] = new h(n, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
      var n = t.replace(I, T);
      P[n] = new h(n, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (t) {
      P[t] = new h(t, 1, !1, t.toLowerCase(), null, !1, !1);
    }),
    (P.xlinkHref = new h(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (t) {
      P[t] = new h(t, 1, !1, t.toLowerCase(), null, !0, !0);
    });
  function v(t, n, i, a) {
    var c = P.hasOwnProperty(n) ? P[n] : null;
    (c !== null
      ? c.type !== 0
      : a ||
        !(2 < n.length) ||
        (n[0] !== "o" && n[0] !== "O") ||
        (n[1] !== "n" && n[1] !== "N")) &&
      (w(n, i, c, a) && (i = null),
      a || c === null
        ? S(n) &&
          (i === null ? t.removeAttribute(n) : t.setAttribute(n, "" + i))
        : c.mustUseProperty
          ? (t[c.propertyName] = i === null ? (c.type === 3 ? !1 : "") : i)
          : ((n = c.attributeName),
            (a = c.attributeNamespace),
            i === null
              ? t.removeAttribute(n)
              : ((c = c.type),
                (i = c === 3 || (c === 4 && i === !0) ? "" : "" + i),
                a ? t.setAttributeNS(a, n, i) : t.setAttribute(n, i))));
  }
  var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    R = Symbol.for("react.element"),
    M = Symbol.for("react.portal"),
    O = Symbol.for("react.fragment"),
    N = Symbol.for("react.strict_mode"),
    z = Symbol.for("react.profiler"),
    g = Symbol.for("react.provider"),
    A = Symbol.for("react.context"),
    j = Symbol.for("react.forward_ref"),
    B = Symbol.for("react.suspense"),
    q = Symbol.for("react.suspense_list"),
    V = Symbol.for("react.memo"),
    Y = Symbol.for("react.lazy"),
    te = Symbol.for("react.offscreen"),
    H = Symbol.iterator;
  function K(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (H && t[H]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Z = Object.assign,
    L;
  function G(t) {
    if (L === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        L = (n && n[1]) || "";
      }
    return (
      `
` +
      L +
      t
    );
  }
  var ie = !1;
  function se(t, n) {
    if (!t || ie) return "";
    ie = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (
          ((n = function () {
            throw Error();
          }),
          Object.defineProperty(n.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(n, []);
          } catch (Q) {
            var a = Q;
          }
          Reflect.construct(t, [], n);
        } else {
          try {
            n.call();
          } catch (Q) {
            a = Q;
          }
          t.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (Q) {
          a = Q;
        }
        t();
      }
    } catch (Q) {
      if (Q && a && typeof Q.stack == "string") {
        for (
          var c = Q.stack.split(`
`),
            d = a.stack.split(`
`),
            E = c.length - 1,
            $ = d.length - 1;
          1 <= E && 0 <= $ && c[E] !== d[$];

        )
          $--;
        for (; 1 <= E && 0 <= $; E--, $--)
          if (c[E] !== d[$]) {
            if (E !== 1 || $ !== 1)
              do
                if ((E--, $--, 0 > $ || c[E] !== d[$])) {
                  var F =
                    `
` + c[E].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      F.includes("<anonymous>") &&
                      (F = F.replace("<anonymous>", t.displayName)),
                    F
                  );
                }
              while (1 <= E && 0 <= $);
            break;
          }
      }
    } finally {
      (ie = !1), (Error.prepareStackTrace = i);
    }
    return (t = t ? t.displayName || t.name : "") ? G(t) : "";
  }
  function le(t) {
    switch (t.tag) {
      case 5:
        return G(t.type);
      case 16:
        return G("Lazy");
      case 13:
        return G("Suspense");
      case 19:
        return G("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (t = se(t.type, !1)), t;
      case 11:
        return (t = se(t.type.render, !1)), t;
      case 1:
        return (t = se(t.type, !0)), t;
      default:
        return "";
    }
  }
  function Se(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case O:
        return "Fragment";
      case M:
        return "Portal";
      case z:
        return "Profiler";
      case N:
        return "StrictMode";
      case B:
        return "Suspense";
      case q:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case A:
          return (t.displayName || "Context") + ".Consumer";
        case g:
          return (t._context.displayName || "Context") + ".Provider";
        case j:
          var n = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = n.displayName || n.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case V:
          return (
            (n = t.displayName || null), n !== null ? n : Se(t.type) || "Memo"
          );
        case Y:
          (n = t._payload), (t = t._init);
          try {
            return Se(t(n));
          } catch {}
      }
    return null;
  }
  function ce(t) {
    var n = t.type;
    switch (t.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (t = n.render),
          (t = t.displayName || t.name || ""),
          n.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Se(n);
      case 8:
        return n === N ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function we(t) {
    switch (typeof t) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function ye(t) {
    var n = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function ve(t) {
    var n = ye(t) ? "checked" : "value",
      i = Object.getOwnPropertyDescriptor(t.constructor.prototype, n),
      a = "" + t[n];
    if (
      !t.hasOwnProperty(n) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var c = i.get,
        d = i.set;
      return (
        Object.defineProperty(t, n, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (E) {
            (a = "" + E), d.call(this, E);
          },
        }),
        Object.defineProperty(t, n, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (E) {
            a = "" + E;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[n];
          },
        }
      );
    }
  }
  function _e(t) {
    t._valueTracker || (t._valueTracker = ve(t));
  }
  function Te(t) {
    if (!t) return !1;
    var n = t._valueTracker;
    if (!n) return !0;
    var i = n.getValue(),
      a = "";
    return (
      t && (a = ye(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== i ? (n.setValue(t), !0) : !1
    );
  }
  function Ge(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Re(t, n) {
    var i = n.checked;
    return Z({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? t._wrapperState.initialChecked,
    });
  }
  function Ve(t, n) {
    var i = n.defaultValue == null ? "" : n.defaultValue,
      a = n.checked != null ? n.checked : n.defaultChecked;
    (i = we(n.value != null ? n.value : i)),
      (t._wrapperState = {
        initialChecked: a,
        initialValue: i,
        controlled:
          n.type === "checkbox" || n.type === "radio"
            ? n.checked != null
            : n.value != null,
      });
  }
  function Tt(t, n) {
    (n = n.checked), n != null && v(t, "checked", n, !1);
  }
  function ht(t, n) {
    Tt(t, n);
    var i = we(n.value),
      a = n.type;
    if (i != null)
      a === "number"
        ? ((i === 0 && t.value === "") || t.value != i) && (t.value = "" + i)
        : t.value !== "" + i && (t.value = "" + i);
    else if (a === "submit" || a === "reset") {
      t.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value")
      ? Dt(t, n.type, i)
      : n.hasOwnProperty("defaultValue") && Dt(t, n.type, we(n.defaultValue)),
      n.checked == null &&
        n.defaultChecked != null &&
        (t.defaultChecked = !!n.defaultChecked);
  }
  function lt(t, n, i) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var a = n.type;
      if (
        !(
          (a !== "submit" && a !== "reset") ||
          (n.value !== void 0 && n.value !== null)
        )
      )
        return;
      (n = "" + t._wrapperState.initialValue),
        i || n === t.value || (t.value = n),
        (t.defaultValue = n);
    }
    (i = t.name),
      i !== "" && (t.name = ""),
      (t.defaultChecked = !!t._wrapperState.initialChecked),
      i !== "" && (t.name = i);
  }
  function Dt(t, n, i) {
    (n !== "number" || Ge(t.ownerDocument) !== t) &&
      (i == null
        ? (t.defaultValue = "" + t._wrapperState.initialValue)
        : t.defaultValue !== "" + i && (t.defaultValue = "" + i));
  }
  var at = Array.isArray;
  function Qe(t, n, i, a) {
    if (((t = t.options), n)) {
      n = {};
      for (var c = 0; c < i.length; c++) n["$" + i[c]] = !0;
      for (i = 0; i < t.length; i++)
        (c = n.hasOwnProperty("$" + t[i].value)),
          t[i].selected !== c && (t[i].selected = c),
          c && a && (t[i].defaultSelected = !0);
    } else {
      for (i = "" + we(i), n = null, c = 0; c < t.length; c++) {
        if (t[c].value === i) {
          (t[c].selected = !0), a && (t[c].defaultSelected = !0);
          return;
        }
        n !== null || t[c].disabled || (n = t[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function ge(t, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(o(91));
    return Z({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: "" + t._wrapperState.initialValue,
    });
  }
  function Un(t, n) {
    var i = n.value;
    if (i == null) {
      if (((i = n.children), (n = n.defaultValue), i != null)) {
        if (n != null) throw Error(o(92));
        if (at(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), (i = n);
    }
    t._wrapperState = { initialValue: we(i) };
  }
  function xt(t, n) {
    var i = we(n.value),
      a = we(n.defaultValue);
    i != null &&
      ((i = "" + i),
      i !== t.value && (t.value = i),
      n.defaultValue == null && t.defaultValue !== i && (t.defaultValue = i)),
      a != null && (t.defaultValue = "" + a);
  }
  function Wn(t) {
    var n = t.textContent;
    n === t._wrapperState.initialValue &&
      n !== "" &&
      n !== null &&
      (t.value = n);
  }
  function sr(t) {
    switch (t) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Vn(t, n) {
    return t == null || t === "http://www.w3.org/1999/xhtml"
      ? sr(n)
      : t === "http://www.w3.org/2000/svg" && n === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : t;
  }
  var pn,
    Hn = (function (t) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (n, i, a, c) {
            MSApp.execUnsafeLocalFunction(function () {
              return t(n, i, a, c);
            });
          }
        : t;
    })(function (t, n) {
      if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
        t.innerHTML = n;
      else {
        for (
          pn = pn || document.createElement("div"),
            pn.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
            n = pn.firstChild;
          t.firstChild;

        )
          t.removeChild(t.firstChild);
        for (; n.firstChild; ) t.appendChild(n.firstChild);
      }
    });
  function Kt(t, n) {
    if (n) {
      var i = t.firstChild;
      if (i && i === t.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var ze = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    lr = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ze).forEach(function (t) {
    lr.forEach(function (n) {
      (n = n + t.charAt(0).toUpperCase() + t.substring(1)), (ze[n] = ze[t]);
    });
  });
  function ar(t, n, i) {
    return n == null || typeof n == "boolean" || n === ""
      ? ""
      : i || typeof n != "number" || n === 0 || (ze.hasOwnProperty(t) && ze[t])
        ? ("" + n).trim()
        : n + "px";
  }
  function Zo(t, n) {
    t = t.style;
    for (var i in n)
      if (n.hasOwnProperty(i)) {
        var a = i.indexOf("--") === 0,
          c = ar(i, n[i], a);
        i === "float" && (i = "cssFloat"), a ? t.setProperty(i, c) : (t[i] = c);
      }
  }
  var be = Z(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
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
    },
  );
  function Fe(t, n) {
    if (n) {
      if (be[t] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(o(137, t));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(o(60));
        if (
          typeof n.dangerouslySetInnerHTML != "object" ||
          !("__html" in n.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(o(62));
    }
  }
  function ut(t, n) {
    if (t.indexOf("-") === -1) return typeof n.is == "string";
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Pn = null;
  function so(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ia = null,
    lo = null,
    ao = null;
  function ld(t) {
    if ((t = Ci(t))) {
      if (typeof Ia != "function") throw Error(o(280));
      var n = t.stateNode;
      n && ((n = Vs(n)), Ia(t.stateNode, t.type, n));
    }
  }
  function ad(t) {
    lo ? (ao ? ao.push(t) : (ao = [t])) : (lo = t);
  }
  function ud() {
    if (lo) {
      var t = lo,
        n = ao;
      if (((ao = lo = null), ld(t), n)) for (t = 0; t < n.length; t++) ld(n[t]);
    }
  }
  function cd(t, n) {
    return t(n);
  }
  function fd() {}
  var Oa = !1;
  function dd(t, n, i) {
    if (Oa) return t(n, i);
    Oa = !0;
    try {
      return cd(t, n, i);
    } finally {
      (Oa = !1), (lo !== null || ao !== null) && (fd(), ud());
    }
  }
  function ei(t, n) {
    var i = t.stateNode;
    if (i === null) return null;
    var a = Vs(i);
    if (a === null) return null;
    i = a[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (i && typeof i != "function") throw Error(o(231, n, typeof i));
    return i;
  }
  var Ma = !1;
  if (p)
    try {
      var ti = {};
      Object.defineProperty(ti, "passive", {
        get: function () {
          Ma = !0;
        },
      }),
        window.addEventListener("test", ti, ti),
        window.removeEventListener("test", ti, ti);
    } catch {
      Ma = !1;
    }
  function rv(t, n, i, a, c, d, E, $, F) {
    var Q = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(i, Q);
    } catch (ne) {
      this.onError(ne);
    }
  }
  var ni = !1,
    xs = null,
    bs = !1,
    _a = null,
    ov = {
      onError: function (t) {
        (ni = !0), (xs = t);
      },
    };
  function iv(t, n, i, a, c, d, E, $, F) {
    (ni = !1), (xs = null), rv.apply(ov, arguments);
  }
  function sv(t, n, i, a, c, d, E, $, F) {
    if ((iv.apply(this, arguments), ni)) {
      if (ni) {
        var Q = xs;
        (ni = !1), (xs = null);
      } else throw Error(o(198));
      bs || ((bs = !0), (_a = Q));
    }
  }
  function Ar(t) {
    var n = t,
      i = t;
    if (t.alternate) for (; n.return; ) n = n.return;
    else {
      t = n;
      do (n = t), n.flags & 4098 && (i = n.return), (t = n.return);
      while (t);
    }
    return n.tag === 3 ? i : null;
  }
  function pd(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function md(t) {
    if (Ar(t) !== t) throw Error(o(188));
  }
  function lv(t) {
    var n = t.alternate;
    if (!n) {
      if (((n = Ar(t)), n === null)) throw Error(o(188));
      return n !== t ? null : t;
    }
    for (var i = t, a = n; ; ) {
      var c = i.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (((a = c.return), a !== null)) {
          i = a;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === i) return md(c), t;
          if (d === a) return md(c), n;
          d = d.sibling;
        }
        throw Error(o(188));
      }
      if (i.return !== a.return) (i = c), (a = d);
      else {
        for (var E = !1, $ = c.child; $; ) {
          if ($ === i) {
            (E = !0), (i = c), (a = d);
            break;
          }
          if ($ === a) {
            (E = !0), (a = c), (i = d);
            break;
          }
          $ = $.sibling;
        }
        if (!E) {
          for ($ = d.child; $; ) {
            if ($ === i) {
              (E = !0), (i = d), (a = c);
              break;
            }
            if ($ === a) {
              (E = !0), (a = d), (i = c);
              break;
            }
            $ = $.sibling;
          }
          if (!E) throw Error(o(189));
        }
      }
      if (i.alternate !== a) throw Error(o(190));
    }
    if (i.tag !== 3) throw Error(o(188));
    return i.stateNode.current === i ? t : n;
  }
  function hd(t) {
    return (t = lv(t)), t !== null ? gd(t) : null;
  }
  function gd(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null; ) {
      var n = gd(t);
      if (n !== null) return n;
      t = t.sibling;
    }
    return null;
  }
  var yd = r.unstable_scheduleCallback,
    vd = r.unstable_cancelCallback,
    av = r.unstable_shouldYield,
    uv = r.unstable_requestPaint,
    ct = r.unstable_now,
    cv = r.unstable_getCurrentPriorityLevel,
    $a = r.unstable_ImmediatePriority,
    Sd = r.unstable_UserBlockingPriority,
    ks = r.unstable_NormalPriority,
    fv = r.unstable_LowPriority,
    wd = r.unstable_IdlePriority,
    Es = null,
    Tn = null;
  function dv(t) {
    if (Tn && typeof Tn.onCommitFiberRoot == "function")
      try {
        Tn.onCommitFiberRoot(Es, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  var mn = Math.clz32 ? Math.clz32 : hv,
    pv = Math.log,
    mv = Math.LN2;
  function hv(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((pv(t) / mv) | 0)) | 0;
  }
  var Rs = 64,
    Ps = 4194304;
  function ri(t) {
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return t & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return t;
    }
  }
  function Ts(t, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var a = 0,
      c = t.suspendedLanes,
      d = t.pingedLanes,
      E = i & 268435455;
    if (E !== 0) {
      var $ = E & ~c;
      $ !== 0 ? (a = ri($)) : ((d &= E), d !== 0 && (a = ri(d)));
    } else (E = i & ~c), E !== 0 ? (a = ri(E)) : d !== 0 && (a = ri(d));
    if (a === 0) return 0;
    if (
      n !== 0 &&
      n !== a &&
      !(n & c) &&
      ((c = a & -a), (d = n & -n), c >= d || (c === 16 && (d & 4194240) !== 0))
    )
      return n;
    if ((a & 4 && (a |= i & 16), (n = t.entangledLanes), n !== 0))
      for (t = t.entanglements, n &= a; 0 < n; )
        (i = 31 - mn(n)), (c = 1 << i), (a |= t[i]), (n &= ~c);
    return a;
  }
  function gv(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function yv(t, n) {
    for (
      var i = t.suspendedLanes,
        a = t.pingedLanes,
        c = t.expirationTimes,
        d = t.pendingLanes;
      0 < d;

    ) {
      var E = 31 - mn(d),
        $ = 1 << E,
        F = c[E];
      F === -1
        ? (!($ & i) || $ & a) && (c[E] = gv($, n))
        : F <= n && (t.expiredLanes |= $),
        (d &= ~$);
    }
  }
  function Na(t) {
    return (
      (t = t.pendingLanes & -1073741825),
      t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
    );
  }
  function Cd() {
    var t = Rs;
    return (Rs <<= 1), !(Rs & 4194240) && (Rs = 64), t;
  }
  function Aa(t) {
    for (var n = [], i = 0; 31 > i; i++) n.push(t);
    return n;
  }
  function oi(t, n, i) {
    (t.pendingLanes |= n),
      n !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
      (t = t.eventTimes),
      (n = 31 - mn(n)),
      (t[n] = i);
  }
  function vv(t, n) {
    var i = t.pendingLanes & ~n;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.expiredLanes &= n),
      (t.mutableReadLanes &= n),
      (t.entangledLanes &= n),
      (n = t.entanglements);
    var a = t.eventTimes;
    for (t = t.expirationTimes; 0 < i; ) {
      var c = 31 - mn(i),
        d = 1 << c;
      (n[c] = 0), (a[c] = -1), (t[c] = -1), (i &= ~d);
    }
  }
  function za(t, n) {
    var i = (t.entangledLanes |= n);
    for (t = t.entanglements; i; ) {
      var a = 31 - mn(i),
        c = 1 << a;
      (c & n) | (t[a] & n) && (t[a] |= n), (i &= ~c);
    }
  }
  var De = 0;
  function xd(t) {
    return (
      (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var bd,
    La,
    kd,
    Ed,
    Rd,
    Fa = !1,
    Is = [],
    ur = null,
    cr = null,
    fr = null,
    ii = new Map(),
    si = new Map(),
    dr = [],
    Sv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Pd(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        ur = null;
        break;
      case "dragenter":
      case "dragleave":
        cr = null;
        break;
      case "mouseover":
      case "mouseout":
        fr = null;
        break;
      case "pointerover":
      case "pointerout":
        ii.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        si.delete(n.pointerId);
    }
  }
  function li(t, n, i, a, c, d) {
    return t === null || t.nativeEvent !== d
      ? ((t = {
          blockedOn: n,
          domEventName: i,
          eventSystemFlags: a,
          nativeEvent: d,
          targetContainers: [c],
        }),
        n !== null && ((n = Ci(n)), n !== null && La(n)),
        t)
      : ((t.eventSystemFlags |= a),
        (n = t.targetContainers),
        c !== null && n.indexOf(c) === -1 && n.push(c),
        t);
  }
  function wv(t, n, i, a, c) {
    switch (n) {
      case "focusin":
        return (ur = li(ur, t, n, i, a, c)), !0;
      case "dragenter":
        return (cr = li(cr, t, n, i, a, c)), !0;
      case "mouseover":
        return (fr = li(fr, t, n, i, a, c)), !0;
      case "pointerover":
        var d = c.pointerId;
        return ii.set(d, li(ii.get(d) || null, t, n, i, a, c)), !0;
      case "gotpointercapture":
        return (
          (d = c.pointerId), si.set(d, li(si.get(d) || null, t, n, i, a, c)), !0
        );
    }
    return !1;
  }
  function Td(t) {
    var n = zr(t.target);
    if (n !== null) {
      var i = Ar(n);
      if (i !== null) {
        if (((n = i.tag), n === 13)) {
          if (((n = pd(i)), n !== null)) {
            (t.blockedOn = n),
              Rd(t.priority, function () {
                kd(i);
              });
            return;
          }
        } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Os(t) {
    if (t.blockedOn !== null) return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var i = ja(t.domEventName, t.eventSystemFlags, n[0], t.nativeEvent);
      if (i === null) {
        i = t.nativeEvent;
        var a = new i.constructor(i.type, i);
        (Pn = a), i.target.dispatchEvent(a), (Pn = null);
      } else return (n = Ci(i)), n !== null && La(n), (t.blockedOn = i), !1;
      n.shift();
    }
    return !0;
  }
  function Id(t, n, i) {
    Os(t) && i.delete(n);
  }
  function Cv() {
    (Fa = !1),
      ur !== null && Os(ur) && (ur = null),
      cr !== null && Os(cr) && (cr = null),
      fr !== null && Os(fr) && (fr = null),
      ii.forEach(Id),
      si.forEach(Id);
  }
  function ai(t, n) {
    t.blockedOn === n &&
      ((t.blockedOn = null),
      Fa ||
        ((Fa = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, Cv)));
  }
  function ui(t) {
    function n(c) {
      return ai(c, t);
    }
    if (0 < Is.length) {
      ai(Is[0], t);
      for (var i = 1; i < Is.length; i++) {
        var a = Is[i];
        a.blockedOn === t && (a.blockedOn = null);
      }
    }
    for (
      ur !== null && ai(ur, t),
        cr !== null && ai(cr, t),
        fr !== null && ai(fr, t),
        ii.forEach(n),
        si.forEach(n),
        i = 0;
      i < dr.length;
      i++
    )
      (a = dr[i]), a.blockedOn === t && (a.blockedOn = null);
    for (; 0 < dr.length && ((i = dr[0]), i.blockedOn === null); )
      Td(i), i.blockedOn === null && dr.shift();
  }
  var uo = x.ReactCurrentBatchConfig,
    Ms = !0;
  function xv(t, n, i, a) {
    var c = De,
      d = uo.transition;
    uo.transition = null;
    try {
      (De = 1), Da(t, n, i, a);
    } finally {
      (De = c), (uo.transition = d);
    }
  }
  function bv(t, n, i, a) {
    var c = De,
      d = uo.transition;
    uo.transition = null;
    try {
      (De = 4), Da(t, n, i, a);
    } finally {
      (De = c), (uo.transition = d);
    }
  }
  function Da(t, n, i, a) {
    if (Ms) {
      var c = ja(t, n, i, a);
      if (c === null) ru(t, n, a, _s, i), Pd(t, a);
      else if (wv(c, t, n, i, a)) a.stopPropagation();
      else if ((Pd(t, a), n & 4 && -1 < Sv.indexOf(t))) {
        for (; c !== null; ) {
          var d = Ci(c);
          if (
            (d !== null && bd(d),
            (d = ja(t, n, i, a)),
            d === null && ru(t, n, a, _s, i),
            d === c)
          )
            break;
          c = d;
        }
        c !== null && a.stopPropagation();
      } else ru(t, n, a, null, i);
    }
  }
  var _s = null;
  function ja(t, n, i, a) {
    if (((_s = null), (t = so(a)), (t = zr(t)), t !== null))
      if (((n = Ar(t)), n === null)) t = null;
      else if (((i = n.tag), i === 13)) {
        if (((t = pd(n)), t !== null)) return t;
        t = null;
      } else if (i === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        t = null;
      } else n !== t && (t = null);
    return (_s = t), null;
  }
  function Od(t) {
    switch (t) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (cv()) {
          case $a:
            return 1;
          case Sd:
            return 4;
          case ks:
          case fv:
            return 16;
          case wd:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var pr = null,
    Ba = null,
    $s = null;
  function Md() {
    if ($s) return $s;
    var t,
      n = Ba,
      i = n.length,
      a,
      c = "value" in pr ? pr.value : pr.textContent,
      d = c.length;
    for (t = 0; t < i && n[t] === c[t]; t++);
    var E = i - t;
    for (a = 1; a <= E && n[i - a] === c[d - a]; a++);
    return ($s = c.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Ns(t) {
    var n = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && n === 13 && (t = 13))
        : (t = n),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function As() {
    return !0;
  }
  function _d() {
    return !1;
  }
  function Gt(t) {
    function n(i, a, c, d, E) {
      (this._reactName = i),
        (this._targetInst = c),
        (this.type = a),
        (this.nativeEvent = d),
        (this.target = E),
        (this.currentTarget = null);
      for (var $ in t)
        t.hasOwnProperty($) && ((i = t[$]), (this[$] = i ? i(d) : d[$]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? As
          : _d),
        (this.isPropagationStopped = _d),
        this
      );
    }
    return (
      Z(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = As));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = As));
        },
        persist: function () {},
        isPersistent: As,
      }),
      n
    );
  }
  var co = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ua = Gt(co),
    ci = Z({}, co, { view: 0, detail: 0 }),
    kv = Gt(ci),
    Wa,
    Va,
    fi,
    zs = Z({}, ci, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: qa,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== fi &&
              (fi && t.type === "mousemove"
                ? ((Wa = t.screenX - fi.screenX), (Va = t.screenY - fi.screenY))
                : (Va = Wa = 0),
              (fi = t)),
            Wa);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Va;
      },
    }),
    $d = Gt(zs),
    Ev = Z({}, zs, { dataTransfer: 0 }),
    Rv = Gt(Ev),
    Pv = Z({}, ci, { relatedTarget: 0 }),
    Ha = Gt(Pv),
    Tv = Z({}, co, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Iv = Gt(Tv),
    Ov = Z({}, co, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Mv = Gt(Ov),
    _v = Z({}, co, { data: 0 }),
    Nd = Gt(_v),
    $v = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Nv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Av = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function zv(t) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(t)
      : (t = Av[t])
        ? !!n[t]
        : !1;
  }
  function qa() {
    return zv;
  }
  var Lv = Z({}, ci, {
      key: function (t) {
        if (t.key) {
          var n = $v[t.key] || t.key;
          if (n !== "Unidentified") return n;
        }
        return t.type === "keypress"
          ? ((t = Ns(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? Nv[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: qa,
      charCode: function (t) {
        return t.type === "keypress" ? Ns(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Ns(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    Fv = Gt(Lv),
    Dv = Z({}, zs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ad = Gt(Dv),
    jv = Z({}, ci, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: qa,
    }),
    Bv = Gt(jv),
    Uv = Z({}, co, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wv = Gt(Uv),
    Vv = Z({}, zs, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Hv = Gt(Vv),
    qv = [9, 13, 27, 32],
    Qa = p && "CompositionEvent" in window,
    di = null;
  p && "documentMode" in document && (di = document.documentMode);
  var Qv = p && "TextEvent" in window && !di,
    zd = p && (!Qa || (di && 8 < di && 11 >= di)),
    Ld = " ",
    Fd = !1;
  function Dd(t, n) {
    switch (t) {
      case "keyup":
        return qv.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function jd(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var fo = !1;
  function Kv(t, n) {
    switch (t) {
      case "compositionend":
        return jd(n);
      case "keypress":
        return n.which !== 32 ? null : ((Fd = !0), Ld);
      case "textInput":
        return (t = n.data), t === Ld && Fd ? null : t;
      default:
        return null;
    }
  }
  function Gv(t, n) {
    if (fo)
      return t === "compositionend" || (!Qa && Dd(t, n))
        ? ((t = Md()), ($s = Ba = pr = null), (fo = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return zd && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Yv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Bd(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!Yv[t.type] : n === "textarea";
  }
  function Ud(t, n, i, a) {
    ad(a),
      (n = Bs(n, "onChange")),
      0 < n.length &&
        ((i = new Ua("onChange", "change", null, i, a)),
        t.push({ event: i, listeners: n }));
  }
  var pi = null,
    mi = null;
  function Xv(t) {
    sp(t, 0);
  }
  function Ls(t) {
    var n = yo(t);
    if (Te(n)) return t;
  }
  function Jv(t, n) {
    if (t === "change") return n;
  }
  var Wd = !1;
  if (p) {
    var Ka;
    if (p) {
      var Ga = "oninput" in document;
      if (!Ga) {
        var Vd = document.createElement("div");
        Vd.setAttribute("oninput", "return;"),
          (Ga = typeof Vd.oninput == "function");
      }
      Ka = Ga;
    } else Ka = !1;
    Wd = Ka && (!document.documentMode || 9 < document.documentMode);
  }
  function Hd() {
    pi && (pi.detachEvent("onpropertychange", qd), (mi = pi = null));
  }
  function qd(t) {
    if (t.propertyName === "value" && Ls(mi)) {
      var n = [];
      Ud(n, mi, t, so(t)), dd(Xv, n);
    }
  }
  function Zv(t, n, i) {
    t === "focusin"
      ? (Hd(), (pi = n), (mi = i), pi.attachEvent("onpropertychange", qd))
      : t === "focusout" && Hd();
  }
  function e0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ls(mi);
  }
  function t0(t, n) {
    if (t === "click") return Ls(n);
  }
  function n0(t, n) {
    if (t === "input" || t === "change") return Ls(n);
  }
  function r0(t, n) {
    return (t === n && (t !== 0 || 1 / t === 1 / n)) || (t !== t && n !== n);
  }
  var hn = typeof Object.is == "function" ? Object.is : r0;
  function hi(t, n) {
    if (hn(t, n)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var i = Object.keys(t),
      a = Object.keys(n);
    if (i.length !== a.length) return !1;
    for (a = 0; a < i.length; a++) {
      var c = i[a];
      if (!m.call(n, c) || !hn(t[c], n[c])) return !1;
    }
    return !0;
  }
  function Qd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Kd(t, n) {
    var i = Qd(t);
    t = 0;
    for (var a; i; ) {
      if (i.nodeType === 3) {
        if (((a = t + i.textContent.length), t <= n && a >= n))
          return { node: i, offset: n - t };
        t = a;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Qd(i);
    }
  }
  function Gd(t, n) {
    return t && n
      ? t === n
        ? !0
        : t && t.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? Gd(t, n.parentNode)
            : "contains" in t
              ? t.contains(n)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function Yd() {
    for (var t = window, n = Ge(); n instanceof t.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) t = n.contentWindow;
      else break;
      n = Ge(t.document);
    }
    return n;
  }
  function Ya(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        n === "textarea" ||
        t.contentEditable === "true")
    );
  }
  function o0(t) {
    var n = Yd(),
      i = t.focusedElem,
      a = t.selectionRange;
    if (
      n !== i &&
      i &&
      i.ownerDocument &&
      Gd(i.ownerDocument.documentElement, i)
    ) {
      if (a !== null && Ya(i)) {
        if (
          ((n = a.start),
          (t = a.end),
          t === void 0 && (t = n),
          "selectionStart" in i)
        )
          (i.selectionStart = n),
            (i.selectionEnd = Math.min(t, i.value.length));
        else if (
          ((t = ((n = i.ownerDocument || document) && n.defaultView) || window),
          t.getSelection)
        ) {
          t = t.getSelection();
          var c = i.textContent.length,
            d = Math.min(a.start, c);
          (a = a.end === void 0 ? d : Math.min(a.end, c)),
            !t.extend && d > a && ((c = a), (a = d), (d = c)),
            (c = Kd(i, d));
          var E = Kd(i, a);
          c &&
            E &&
            (t.rangeCount !== 1 ||
              t.anchorNode !== c.node ||
              t.anchorOffset !== c.offset ||
              t.focusNode !== E.node ||
              t.focusOffset !== E.offset) &&
            ((n = n.createRange()),
            n.setStart(c.node, c.offset),
            t.removeAllRanges(),
            d > a
              ? (t.addRange(n), t.extend(E.node, E.offset))
              : (n.setEnd(E.node, E.offset), t.addRange(n)));
        }
      }
      for (n = [], t = i; (t = t.parentNode); )
        t.nodeType === 1 &&
          n.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < n.length; i++)
        (t = n[i]),
          (t.element.scrollLeft = t.left),
          (t.element.scrollTop = t.top);
    }
  }
  var i0 = p && "documentMode" in document && 11 >= document.documentMode,
    po = null,
    Xa = null,
    gi = null,
    Ja = !1;
  function Xd(t, n, i) {
    var a =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Ja ||
      po == null ||
      po !== Ge(a) ||
      ((a = po),
      "selectionStart" in a && Ya(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (gi && hi(gi, a)) ||
        ((gi = a),
        (a = Bs(Xa, "onSelect")),
        0 < a.length &&
          ((n = new Ua("onSelect", "select", null, n, i)),
          t.push({ event: n, listeners: a }),
          (n.target = po))));
  }
  function Fs(t, n) {
    var i = {};
    return (
      (i[t.toLowerCase()] = n.toLowerCase()),
      (i["Webkit" + t] = "webkit" + n),
      (i["Moz" + t] = "moz" + n),
      i
    );
  }
  var mo = {
      animationend: Fs("Animation", "AnimationEnd"),
      animationiteration: Fs("Animation", "AnimationIteration"),
      animationstart: Fs("Animation", "AnimationStart"),
      transitionend: Fs("Transition", "TransitionEnd"),
    },
    Za = {},
    Jd = {};
  p &&
    ((Jd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete mo.animationend.animation,
      delete mo.animationiteration.animation,
      delete mo.animationstart.animation),
    "TransitionEvent" in window || delete mo.transitionend.transition);
  function Ds(t) {
    if (Za[t]) return Za[t];
    if (!mo[t]) return t;
    var n = mo[t],
      i;
    for (i in n) if (n.hasOwnProperty(i) && i in Jd) return (Za[t] = n[i]);
    return t;
  }
  var Zd = Ds("animationend"),
    ep = Ds("animationiteration"),
    tp = Ds("animationstart"),
    np = Ds("transitionend"),
    rp = new Map(),
    op =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function mr(t, n) {
    rp.set(t, n), u(n, [t]);
  }
  for (var eu = 0; eu < op.length; eu++) {
    var tu = op[eu],
      s0 = tu.toLowerCase(),
      l0 = tu[0].toUpperCase() + tu.slice(1);
    mr(s0, "on" + l0);
  }
  mr(Zd, "onAnimationEnd"),
    mr(ep, "onAnimationIteration"),
    mr(tp, "onAnimationStart"),
    mr("dblclick", "onDoubleClick"),
    mr("focusin", "onFocus"),
    mr("focusout", "onBlur"),
    mr(np, "onTransitionEnd"),
    f("onMouseEnter", ["mouseout", "mouseover"]),
    f("onMouseLeave", ["mouseout", "mouseover"]),
    f("onPointerEnter", ["pointerout", "pointerover"]),
    f("onPointerLeave", ["pointerout", "pointerover"]),
    u(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    u(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    u(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    u(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var yi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    a0 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(yi),
    );
  function ip(t, n, i) {
    var a = t.type || "unknown-event";
    (t.currentTarget = i), sv(a, n, void 0, t), (t.currentTarget = null);
  }
  function sp(t, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < t.length; i++) {
      var a = t[i],
        c = a.event;
      a = a.listeners;
      e: {
        var d = void 0;
        if (n)
          for (var E = a.length - 1; 0 <= E; E--) {
            var $ = a[E],
              F = $.instance,
              Q = $.currentTarget;
            if ((($ = $.listener), F !== d && c.isPropagationStopped()))
              break e;
            ip(c, $, Q), (d = F);
          }
        else
          for (E = 0; E < a.length; E++) {
            if (
              (($ = a[E]),
              (F = $.instance),
              (Q = $.currentTarget),
              ($ = $.listener),
              F !== d && c.isPropagationStopped())
            )
              break e;
            ip(c, $, Q), (d = F);
          }
      }
    }
    if (bs) throw ((t = _a), (bs = !1), (_a = null), t);
  }
  function Ye(t, n) {
    var i = n[uu];
    i === void 0 && (i = n[uu] = new Set());
    var a = t + "__bubble";
    i.has(a) || (lp(n, t, 2, !1), i.add(a));
  }
  function nu(t, n, i) {
    var a = 0;
    n && (a |= 4), lp(i, t, a, n);
  }
  var js = "_reactListening" + Math.random().toString(36).slice(2);
  function vi(t) {
    if (!t[js]) {
      (t[js] = !0),
        s.forEach(function (i) {
          i !== "selectionchange" && (a0.has(i) || nu(i, !1, t), nu(i, !0, t));
        });
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[js] || ((n[js] = !0), nu("selectionchange", !1, n));
    }
  }
  function lp(t, n, i, a) {
    switch (Od(n)) {
      case 1:
        var c = xv;
        break;
      case 4:
        c = bv;
        break;
      default:
        c = Da;
    }
    (i = c.bind(null, n, i, t)),
      (c = void 0),
      !Ma ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (c = !0),
      a
        ? c !== void 0
          ? t.addEventListener(n, i, { capture: !0, passive: c })
          : t.addEventListener(n, i, !0)
        : c !== void 0
          ? t.addEventListener(n, i, { passive: c })
          : t.addEventListener(n, i, !1);
  }
  function ru(t, n, i, a, c) {
    var d = a;
    if (!(n & 1) && !(n & 2) && a !== null)
      e: for (;;) {
        if (a === null) return;
        var E = a.tag;
        if (E === 3 || E === 4) {
          var $ = a.stateNode.containerInfo;
          if ($ === c || ($.nodeType === 8 && $.parentNode === c)) break;
          if (E === 4)
            for (E = a.return; E !== null; ) {
              var F = E.tag;
              if (
                (F === 3 || F === 4) &&
                ((F = E.stateNode.containerInfo),
                F === c || (F.nodeType === 8 && F.parentNode === c))
              )
                return;
              E = E.return;
            }
          for (; $ !== null; ) {
            if (((E = zr($)), E === null)) return;
            if (((F = E.tag), F === 5 || F === 6)) {
              a = d = E;
              continue e;
            }
            $ = $.parentNode;
          }
        }
        a = a.return;
      }
    dd(function () {
      var Q = d,
        ne = so(i),
        re = [];
      e: {
        var ee = rp.get(t);
        if (ee !== void 0) {
          var ae = Ua,
            fe = t;
          switch (t) {
            case "keypress":
              if (Ns(i) === 0) break e;
            case "keydown":
            case "keyup":
              ae = Fv;
              break;
            case "focusin":
              (fe = "focus"), (ae = Ha);
              break;
            case "focusout":
              (fe = "blur"), (ae = Ha);
              break;
            case "beforeblur":
            case "afterblur":
              ae = Ha;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ae = $d;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ae = Rv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ae = Bv;
              break;
            case Zd:
            case ep:
            case tp:
              ae = Iv;
              break;
            case np:
              ae = Wv;
              break;
            case "scroll":
              ae = kv;
              break;
            case "wheel":
              ae = Hv;
              break;
            case "copy":
            case "cut":
            case "paste":
              ae = Mv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ae = Ad;
          }
          var de = (n & 4) !== 0,
            ft = !de && t === "scroll",
            U = de ? (ee !== null ? ee + "Capture" : null) : ee;
          de = [];
          for (var D = Q, W; D !== null; ) {
            W = D;
            var oe = W.stateNode;
            if (
              (W.tag === 5 &&
                oe !== null &&
                ((W = oe),
                U !== null &&
                  ((oe = ei(D, U)), oe != null && de.push(Si(D, oe, W)))),
              ft)
            )
              break;
            D = D.return;
          }
          0 < de.length &&
            ((ee = new ae(ee, fe, null, i, ne)),
            re.push({ event: ee, listeners: de }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (
            ((ee = t === "mouseover" || t === "pointerover"),
            (ae = t === "mouseout" || t === "pointerout"),
            ee &&
              i !== Pn &&
              (fe = i.relatedTarget || i.fromElement) &&
              (zr(fe) || fe[qn]))
          )
            break e;
          if (
            (ae || ee) &&
            ((ee =
              ne.window === ne
                ? ne
                : (ee = ne.ownerDocument)
                  ? ee.defaultView || ee.parentWindow
                  : window),
            ae
              ? ((fe = i.relatedTarget || i.toElement),
                (ae = Q),
                (fe = fe ? zr(fe) : null),
                fe !== null &&
                  ((ft = Ar(fe)),
                  fe !== ft || (fe.tag !== 5 && fe.tag !== 6)) &&
                  (fe = null))
              : ((ae = null), (fe = Q)),
            ae !== fe)
          ) {
            if (
              ((de = $d),
              (oe = "onMouseLeave"),
              (U = "onMouseEnter"),
              (D = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((de = Ad),
                (oe = "onPointerLeave"),
                (U = "onPointerEnter"),
                (D = "pointer")),
              (ft = ae == null ? ee : yo(ae)),
              (W = fe == null ? ee : yo(fe)),
              (ee = new de(oe, D + "leave", ae, i, ne)),
              (ee.target = ft),
              (ee.relatedTarget = W),
              (oe = null),
              zr(ne) === Q &&
                ((de = new de(U, D + "enter", fe, i, ne)),
                (de.target = W),
                (de.relatedTarget = ft),
                (oe = de)),
              (ft = oe),
              ae && fe)
            )
              t: {
                for (de = ae, U = fe, D = 0, W = de; W; W = ho(W)) D++;
                for (W = 0, oe = U; oe; oe = ho(oe)) W++;
                for (; 0 < D - W; ) (de = ho(de)), D--;
                for (; 0 < W - D; ) (U = ho(U)), W--;
                for (; D--; ) {
                  if (de === U || (U !== null && de === U.alternate)) break t;
                  (de = ho(de)), (U = ho(U));
                }
                de = null;
              }
            else de = null;
            ae !== null && ap(re, ee, ae, de, !1),
              fe !== null && ft !== null && ap(re, ft, fe, de, !0);
          }
        }
        e: {
          if (
            ((ee = Q ? yo(Q) : window),
            (ae = ee.nodeName && ee.nodeName.toLowerCase()),
            ae === "select" || (ae === "input" && ee.type === "file"))
          )
            var me = Jv;
          else if (Bd(ee))
            if (Wd) me = n0;
            else {
              me = e0;
              var Ce = Zv;
            }
          else
            (ae = ee.nodeName) &&
              ae.toLowerCase() === "input" &&
              (ee.type === "checkbox" || ee.type === "radio") &&
              (me = t0);
          if (me && (me = me(t, Q))) {
            Ud(re, me, i, ne);
            break e;
          }
          Ce && Ce(t, ee, Q),
            t === "focusout" &&
              (Ce = ee._wrapperState) &&
              Ce.controlled &&
              ee.type === "number" &&
              Dt(ee, "number", ee.value);
        }
        switch (((Ce = Q ? yo(Q) : window), t)) {
          case "focusin":
            (Bd(Ce) || Ce.contentEditable === "true") &&
              ((po = Ce), (Xa = Q), (gi = null));
            break;
          case "focusout":
            gi = Xa = po = null;
            break;
          case "mousedown":
            Ja = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ja = !1), Xd(re, i, ne);
            break;
          case "selectionchange":
            if (i0) break;
          case "keydown":
          case "keyup":
            Xd(re, i, ne);
        }
        var xe;
        if (Qa)
          e: {
            switch (t) {
              case "compositionstart":
                var Ee = "onCompositionStart";
                break e;
              case "compositionend":
                Ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ee = "onCompositionUpdate";
                break e;
            }
            Ee = void 0;
          }
        else
          fo
            ? Dd(t, i) && (Ee = "onCompositionEnd")
            : t === "keydown" &&
              i.keyCode === 229 &&
              (Ee = "onCompositionStart");
        Ee &&
          (zd &&
            i.locale !== "ko" &&
            (fo || Ee !== "onCompositionStart"
              ? Ee === "onCompositionEnd" && fo && (xe = Md())
              : ((pr = ne),
                (Ba = "value" in pr ? pr.value : pr.textContent),
                (fo = !0))),
          (Ce = Bs(Q, Ee)),
          0 < Ce.length &&
            ((Ee = new Nd(Ee, t, null, i, ne)),
            re.push({ event: Ee, listeners: Ce }),
            xe
              ? (Ee.data = xe)
              : ((xe = jd(i)), xe !== null && (Ee.data = xe)))),
          (xe = Qv ? Kv(t, i) : Gv(t, i)) &&
            ((Q = Bs(Q, "onBeforeInput")),
            0 < Q.length &&
              ((ne = new Nd("onBeforeInput", "beforeinput", null, i, ne)),
              re.push({ event: ne, listeners: Q }),
              (ne.data = xe)));
      }
      sp(re, n);
    });
  }
  function Si(t, n, i) {
    return { instance: t, listener: n, currentTarget: i };
  }
  function Bs(t, n) {
    for (var i = n + "Capture", a = []; t !== null; ) {
      var c = t,
        d = c.stateNode;
      c.tag === 5 &&
        d !== null &&
        ((c = d),
        (d = ei(t, i)),
        d != null && a.unshift(Si(t, d, c)),
        (d = ei(t, n)),
        d != null && a.push(Si(t, d, c))),
        (t = t.return);
    }
    return a;
  }
  function ho(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5);
    return t || null;
  }
  function ap(t, n, i, a, c) {
    for (var d = n._reactName, E = []; i !== null && i !== a; ) {
      var $ = i,
        F = $.alternate,
        Q = $.stateNode;
      if (F !== null && F === a) break;
      $.tag === 5 &&
        Q !== null &&
        (($ = Q),
        c
          ? ((F = ei(i, d)), F != null && E.unshift(Si(i, F, $)))
          : c || ((F = ei(i, d)), F != null && E.push(Si(i, F, $)))),
        (i = i.return);
    }
    E.length !== 0 && t.push({ event: n, listeners: E });
  }
  var u0 = /\r\n?/g,
    c0 = /\u0000|\uFFFD/g;
  function up(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        u0,
        `
`,
      )
      .replace(c0, "");
  }
  function Us(t, n, i) {
    if (((n = up(n)), up(t) !== n && i)) throw Error(o(425));
  }
  function Ws() {}
  var ou = null,
    iu = null;
  function su(t, n) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var lu = typeof setTimeout == "function" ? setTimeout : void 0,
    f0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    cp = typeof Promise == "function" ? Promise : void 0,
    d0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof cp < "u"
          ? function (t) {
              return cp.resolve(null).then(t).catch(p0);
            }
          : lu;
  function p0(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function au(t, n) {
    var i = n,
      a = 0;
    do {
      var c = i.nextSibling;
      if ((t.removeChild(i), c && c.nodeType === 8))
        if (((i = c.data), i === "/$")) {
          if (a === 0) {
            t.removeChild(c), ui(n);
            return;
          }
          a--;
        } else (i !== "$" && i !== "$?" && i !== "$!") || a++;
      i = c;
    } while (i);
    ui(n);
  }
  function hr(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = t.data), n === "$" || n === "$!" || n === "$?")) break;
        if (n === "/$") return null;
      }
    }
    return t;
  }
  function fp(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var i = t.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (n === 0) return t;
          n--;
        } else i === "/$" && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  var go = Math.random().toString(36).slice(2),
    In = "__reactFiber$" + go,
    wi = "__reactProps$" + go,
    qn = "__reactContainer$" + go,
    uu = "__reactEvents$" + go,
    m0 = "__reactListeners$" + go,
    h0 = "__reactHandles$" + go;
  function zr(t) {
    var n = t[In];
    if (n) return n;
    for (var i = t.parentNode; i; ) {
      if ((n = i[qn] || i[In])) {
        if (
          ((i = n.alternate),
          n.child !== null || (i !== null && i.child !== null))
        )
          for (t = fp(t); t !== null; ) {
            if ((i = t[In])) return i;
            t = fp(t);
          }
        return n;
      }
      (t = i), (i = t.parentNode);
    }
    return null;
  }
  function Ci(t) {
    return (
      (t = t[In] || t[qn]),
      !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3)
        ? null
        : t
    );
  }
  function yo(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Vs(t) {
    return t[wi] || null;
  }
  var cu = [],
    vo = -1;
  function gr(t) {
    return { current: t };
  }
  function Xe(t) {
    0 > vo || ((t.current = cu[vo]), (cu[vo] = null), vo--);
  }
  function Ke(t, n) {
    vo++, (cu[vo] = t.current), (t.current = n);
  }
  var yr = {},
    It = gr(yr),
    jt = gr(!1),
    Lr = yr;
  function So(t, n) {
    var i = t.type.contextTypes;
    if (!i) return yr;
    var a = t.stateNode;
    if (a && a.__reactInternalMemoizedUnmaskedChildContext === n)
      return a.__reactInternalMemoizedMaskedChildContext;
    var c = {},
      d;
    for (d in i) c[d] = n[d];
    return (
      a &&
        ((t = t.stateNode),
        (t.__reactInternalMemoizedUnmaskedChildContext = n),
        (t.__reactInternalMemoizedMaskedChildContext = c)),
      c
    );
  }
  function Bt(t) {
    return (t = t.childContextTypes), t != null;
  }
  function Hs() {
    Xe(jt), Xe(It);
  }
  function dp(t, n, i) {
    if (It.current !== yr) throw Error(o(168));
    Ke(It, n), Ke(jt, i);
  }
  function pp(t, n, i) {
    var a = t.stateNode;
    if (((n = n.childContextTypes), typeof a.getChildContext != "function"))
      return i;
    a = a.getChildContext();
    for (var c in a) if (!(c in n)) throw Error(o(108, ce(t) || "Unknown", c));
    return Z({}, i, a);
  }
  function qs(t) {
    return (
      (t =
        ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) ||
        yr),
      (Lr = It.current),
      Ke(It, t),
      Ke(jt, jt.current),
      !0
    );
  }
  function mp(t, n, i) {
    var a = t.stateNode;
    if (!a) throw Error(o(169));
    i
      ? ((t = pp(t, n, Lr)),
        (a.__reactInternalMemoizedMergedChildContext = t),
        Xe(jt),
        Xe(It),
        Ke(It, t))
      : Xe(jt),
      Ke(jt, i);
  }
  var Qn = null,
    Qs = !1,
    fu = !1;
  function hp(t) {
    Qn === null ? (Qn = [t]) : Qn.push(t);
  }
  function g0(t) {
    (Qs = !0), hp(t);
  }
  function vr() {
    if (!fu && Qn !== null) {
      fu = !0;
      var t = 0,
        n = De;
      try {
        var i = Qn;
        for (De = 1; t < i.length; t++) {
          var a = i[t];
          do a = a(!0);
          while (a !== null);
        }
        (Qn = null), (Qs = !1);
      } catch (c) {
        throw (Qn !== null && (Qn = Qn.slice(t + 1)), yd($a, vr), c);
      } finally {
        (De = n), (fu = !1);
      }
    }
    return null;
  }
  var wo = [],
    Co = 0,
    Ks = null,
    Gs = 0,
    nn = [],
    rn = 0,
    Fr = null,
    Kn = 1,
    Gn = "";
  function Dr(t, n) {
    (wo[Co++] = Gs), (wo[Co++] = Ks), (Ks = t), (Gs = n);
  }
  function gp(t, n, i) {
    (nn[rn++] = Kn), (nn[rn++] = Gn), (nn[rn++] = Fr), (Fr = t);
    var a = Kn;
    t = Gn;
    var c = 32 - mn(a) - 1;
    (a &= ~(1 << c)), (i += 1);
    var d = 32 - mn(n) + c;
    if (30 < d) {
      var E = c - (c % 5);
      (d = (a & ((1 << E) - 1)).toString(32)),
        (a >>= E),
        (c -= E),
        (Kn = (1 << (32 - mn(n) + c)) | (i << c) | a),
        (Gn = d + t);
    } else (Kn = (1 << d) | (i << c) | a), (Gn = t);
  }
  function du(t) {
    t.return !== null && (Dr(t, 1), gp(t, 1, 0));
  }
  function pu(t) {
    for (; t === Ks; )
      (Ks = wo[--Co]), (wo[Co] = null), (Gs = wo[--Co]), (wo[Co] = null);
    for (; t === Fr; )
      (Fr = nn[--rn]),
        (nn[rn] = null),
        (Gn = nn[--rn]),
        (nn[rn] = null),
        (Kn = nn[--rn]),
        (nn[rn] = null);
  }
  var Yt = null,
    Xt = null,
    Je = !1,
    gn = null;
  function yp(t, n) {
    var i = an(5, null, null, 0);
    (i.elementType = "DELETED"),
      (i.stateNode = n),
      (i.return = t),
      (n = t.deletions),
      n === null ? ((t.deletions = [i]), (t.flags |= 16)) : n.push(i);
  }
  function vp(t, n) {
    switch (t.tag) {
      case 5:
        var i = t.type;
        return (
          (n =
            n.nodeType !== 1 || i.toLowerCase() !== n.nodeName.toLowerCase()
              ? null
              : n),
          n !== null
            ? ((t.stateNode = n), (Yt = t), (Xt = hr(n.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (n = t.pendingProps === "" || n.nodeType !== 3 ? null : n),
          n !== null ? ((t.stateNode = n), (Yt = t), (Xt = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((i = Fr !== null ? { id: Kn, overflow: Gn } : null),
              (t.memoizedState = {
                dehydrated: n,
                treeContext: i,
                retryLane: 1073741824,
              }),
              (i = an(18, null, null, 0)),
              (i.stateNode = n),
              (i.return = t),
              (t.child = i),
              (Yt = t),
              (Xt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function mu(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function hu(t) {
    if (Je) {
      var n = Xt;
      if (n) {
        var i = n;
        if (!vp(t, n)) {
          if (mu(t)) throw Error(o(418));
          n = hr(i.nextSibling);
          var a = Yt;
          n && vp(t, n)
            ? yp(a, i)
            : ((t.flags = (t.flags & -4097) | 2), (Je = !1), (Yt = t));
        }
      } else {
        if (mu(t)) throw Error(o(418));
        (t.flags = (t.flags & -4097) | 2), (Je = !1), (Yt = t);
      }
    }
  }
  function Sp(t) {
    for (
      t = t.return;
      t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;

    )
      t = t.return;
    Yt = t;
  }
  function Ys(t) {
    if (t !== Yt) return !1;
    if (!Je) return Sp(t), (Je = !0), !1;
    var n;
    if (
      ((n = t.tag !== 3) &&
        !(n = t.tag !== 5) &&
        ((n = t.type),
        (n = n !== "head" && n !== "body" && !su(t.type, t.memoizedProps))),
      n && (n = Xt))
    ) {
      if (mu(t)) throw (wp(), Error(o(418)));
      for (; n; ) yp(t, n), (n = hr(n.nextSibling));
    }
    if ((Sp(t), t.tag === 13)) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      e: {
        for (t = t.nextSibling, n = 0; t; ) {
          if (t.nodeType === 8) {
            var i = t.data;
            if (i === "/$") {
              if (n === 0) {
                Xt = hr(t.nextSibling);
                break e;
              }
              n--;
            } else (i !== "$" && i !== "$!" && i !== "$?") || n++;
          }
          t = t.nextSibling;
        }
        Xt = null;
      }
    } else Xt = Yt ? hr(t.stateNode.nextSibling) : null;
    return !0;
  }
  function wp() {
    for (var t = Xt; t; ) t = hr(t.nextSibling);
  }
  function xo() {
    (Xt = Yt = null), (Je = !1);
  }
  function gu(t) {
    gn === null ? (gn = [t]) : gn.push(t);
  }
  var y0 = x.ReactCurrentBatchConfig;
  function xi(t, n, i) {
    if (
      ((t = i.ref),
      t !== null && typeof t != "function" && typeof t != "object")
    ) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(o(309));
          var a = i.stateNode;
        }
        if (!a) throw Error(o(147, t));
        var c = a,
          d = "" + t;
        return n !== null &&
          n.ref !== null &&
          typeof n.ref == "function" &&
          n.ref._stringRef === d
          ? n.ref
          : ((n = function (E) {
              var $ = c.refs;
              E === null ? delete $[d] : ($[d] = E);
            }),
            (n._stringRef = d),
            n);
      }
      if (typeof t != "string") throw Error(o(284));
      if (!i._owner) throw Error(o(290, t));
    }
    return t;
  }
  function Xs(t, n) {
    throw (
      ((t = Object.prototype.toString.call(n)),
      Error(
        o(
          31,
          t === "[object Object]"
            ? "object with keys {" + Object.keys(n).join(", ") + "}"
            : t,
        ),
      ))
    );
  }
  function Cp(t) {
    var n = t._init;
    return n(t._payload);
  }
  function xp(t) {
    function n(U, D) {
      if (t) {
        var W = U.deletions;
        W === null ? ((U.deletions = [D]), (U.flags |= 16)) : W.push(D);
      }
    }
    function i(U, D) {
      if (!t) return null;
      for (; D !== null; ) n(U, D), (D = D.sibling);
      return null;
    }
    function a(U, D) {
      for (U = new Map(); D !== null; )
        D.key !== null ? U.set(D.key, D) : U.set(D.index, D), (D = D.sibling);
      return U;
    }
    function c(U, D) {
      return (U = Rr(U, D)), (U.index = 0), (U.sibling = null), U;
    }
    function d(U, D, W) {
      return (
        (U.index = W),
        t
          ? ((W = U.alternate),
            W !== null
              ? ((W = W.index), W < D ? ((U.flags |= 2), D) : W)
              : ((U.flags |= 2), D))
          : ((U.flags |= 1048576), D)
      );
    }
    function E(U) {
      return t && U.alternate === null && (U.flags |= 2), U;
    }
    function $(U, D, W, oe) {
      return D === null || D.tag !== 6
        ? ((D = lc(W, U.mode, oe)), (D.return = U), D)
        : ((D = c(D, W)), (D.return = U), D);
    }
    function F(U, D, W, oe) {
      var me = W.type;
      return me === O
        ? ne(U, D, W.props.children, oe, W.key)
        : D !== null &&
            (D.elementType === me ||
              (typeof me == "object" &&
                me !== null &&
                me.$$typeof === Y &&
                Cp(me) === D.type))
          ? ((oe = c(D, W.props)), (oe.ref = xi(U, D, W)), (oe.return = U), oe)
          : ((oe = Cl(W.type, W.key, W.props, null, U.mode, oe)),
            (oe.ref = xi(U, D, W)),
            (oe.return = U),
            oe);
    }
    function Q(U, D, W, oe) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== W.containerInfo ||
        D.stateNode.implementation !== W.implementation
        ? ((D = ac(W, U.mode, oe)), (D.return = U), D)
        : ((D = c(D, W.children || [])), (D.return = U), D);
    }
    function ne(U, D, W, oe, me) {
      return D === null || D.tag !== 7
        ? ((D = Qr(W, U.mode, oe, me)), (D.return = U), D)
        : ((D = c(D, W)), (D.return = U), D);
    }
    function re(U, D, W) {
      if ((typeof D == "string" && D !== "") || typeof D == "number")
        return (D = lc("" + D, U.mode, W)), (D.return = U), D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case R:
            return (
              (W = Cl(D.type, D.key, D.props, null, U.mode, W)),
              (W.ref = xi(U, null, D)),
              (W.return = U),
              W
            );
          case M:
            return (D = ac(D, U.mode, W)), (D.return = U), D;
          case Y:
            var oe = D._init;
            return re(U, oe(D._payload), W);
        }
        if (at(D) || K(D))
          return (D = Qr(D, U.mode, W, null)), (D.return = U), D;
        Xs(U, D);
      }
      return null;
    }
    function ee(U, D, W, oe) {
      var me = D !== null ? D.key : null;
      if ((typeof W == "string" && W !== "") || typeof W == "number")
        return me !== null ? null : $(U, D, "" + W, oe);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case R:
            return W.key === me ? F(U, D, W, oe) : null;
          case M:
            return W.key === me ? Q(U, D, W, oe) : null;
          case Y:
            return (me = W._init), ee(U, D, me(W._payload), oe);
        }
        if (at(W) || K(W)) return me !== null ? null : ne(U, D, W, oe, null);
        Xs(U, W);
      }
      return null;
    }
    function ae(U, D, W, oe, me) {
      if ((typeof oe == "string" && oe !== "") || typeof oe == "number")
        return (U = U.get(W) || null), $(D, U, "" + oe, me);
      if (typeof oe == "object" && oe !== null) {
        switch (oe.$$typeof) {
          case R:
            return (
              (U = U.get(oe.key === null ? W : oe.key) || null), F(D, U, oe, me)
            );
          case M:
            return (
              (U = U.get(oe.key === null ? W : oe.key) || null), Q(D, U, oe, me)
            );
          case Y:
            var Ce = oe._init;
            return ae(U, D, W, Ce(oe._payload), me);
        }
        if (at(oe) || K(oe))
          return (U = U.get(W) || null), ne(D, U, oe, me, null);
        Xs(D, oe);
      }
      return null;
    }
    function fe(U, D, W, oe) {
      for (
        var me = null, Ce = null, xe = D, Ee = (D = 0), wt = null;
        xe !== null && Ee < W.length;
        Ee++
      ) {
        xe.index > Ee ? ((wt = xe), (xe = null)) : (wt = xe.sibling);
        var $e = ee(U, xe, W[Ee], oe);
        if ($e === null) {
          xe === null && (xe = wt);
          break;
        }
        t && xe && $e.alternate === null && n(U, xe),
          (D = d($e, D, Ee)),
          Ce === null ? (me = $e) : (Ce.sibling = $e),
          (Ce = $e),
          (xe = wt);
      }
      if (Ee === W.length) return i(U, xe), Je && Dr(U, Ee), me;
      if (xe === null) {
        for (; Ee < W.length; Ee++)
          (xe = re(U, W[Ee], oe)),
            xe !== null &&
              ((D = d(xe, D, Ee)),
              Ce === null ? (me = xe) : (Ce.sibling = xe),
              (Ce = xe));
        return Je && Dr(U, Ee), me;
      }
      for (xe = a(U, xe); Ee < W.length; Ee++)
        (wt = ae(xe, U, Ee, W[Ee], oe)),
          wt !== null &&
            (t &&
              wt.alternate !== null &&
              xe.delete(wt.key === null ? Ee : wt.key),
            (D = d(wt, D, Ee)),
            Ce === null ? (me = wt) : (Ce.sibling = wt),
            (Ce = wt));
      return (
        t &&
          xe.forEach(function (Pr) {
            return n(U, Pr);
          }),
        Je && Dr(U, Ee),
        me
      );
    }
    function de(U, D, W, oe) {
      var me = K(W);
      if (typeof me != "function") throw Error(o(150));
      if (((W = me.call(W)), W == null)) throw Error(o(151));
      for (
        var Ce = (me = null), xe = D, Ee = (D = 0), wt = null, $e = W.next();
        xe !== null && !$e.done;
        Ee++, $e = W.next()
      ) {
        xe.index > Ee ? ((wt = xe), (xe = null)) : (wt = xe.sibling);
        var Pr = ee(U, xe, $e.value, oe);
        if (Pr === null) {
          xe === null && (xe = wt);
          break;
        }
        t && xe && Pr.alternate === null && n(U, xe),
          (D = d(Pr, D, Ee)),
          Ce === null ? (me = Pr) : (Ce.sibling = Pr),
          (Ce = Pr),
          (xe = wt);
      }
      if ($e.done) return i(U, xe), Je && Dr(U, Ee), me;
      if (xe === null) {
        for (; !$e.done; Ee++, $e = W.next())
          ($e = re(U, $e.value, oe)),
            $e !== null &&
              ((D = d($e, D, Ee)),
              Ce === null ? (me = $e) : (Ce.sibling = $e),
              (Ce = $e));
        return Je && Dr(U, Ee), me;
      }
      for (xe = a(U, xe); !$e.done; Ee++, $e = W.next())
        ($e = ae(xe, U, Ee, $e.value, oe)),
          $e !== null &&
            (t &&
              $e.alternate !== null &&
              xe.delete($e.key === null ? Ee : $e.key),
            (D = d($e, D, Ee)),
            Ce === null ? (me = $e) : (Ce.sibling = $e),
            (Ce = $e));
      return (
        t &&
          xe.forEach(function (G0) {
            return n(U, G0);
          }),
        Je && Dr(U, Ee),
        me
      );
    }
    function ft(U, D, W, oe) {
      if (
        (typeof W == "object" &&
          W !== null &&
          W.type === O &&
          W.key === null &&
          (W = W.props.children),
        typeof W == "object" && W !== null)
      ) {
        switch (W.$$typeof) {
          case R:
            e: {
              for (var me = W.key, Ce = D; Ce !== null; ) {
                if (Ce.key === me) {
                  if (((me = W.type), me === O)) {
                    if (Ce.tag === 7) {
                      i(U, Ce.sibling),
                        (D = c(Ce, W.props.children)),
                        (D.return = U),
                        (U = D);
                      break e;
                    }
                  } else if (
                    Ce.elementType === me ||
                    (typeof me == "object" &&
                      me !== null &&
                      me.$$typeof === Y &&
                      Cp(me) === Ce.type)
                  ) {
                    i(U, Ce.sibling),
                      (D = c(Ce, W.props)),
                      (D.ref = xi(U, Ce, W)),
                      (D.return = U),
                      (U = D);
                    break e;
                  }
                  i(U, Ce);
                  break;
                } else n(U, Ce);
                Ce = Ce.sibling;
              }
              W.type === O
                ? ((D = Qr(W.props.children, U.mode, oe, W.key)),
                  (D.return = U),
                  (U = D))
                : ((oe = Cl(W.type, W.key, W.props, null, U.mode, oe)),
                  (oe.ref = xi(U, D, W)),
                  (oe.return = U),
                  (U = oe));
            }
            return E(U);
          case M:
            e: {
              for (Ce = W.key; D !== null; ) {
                if (D.key === Ce)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === W.containerInfo &&
                    D.stateNode.implementation === W.implementation
                  ) {
                    i(U, D.sibling),
                      (D = c(D, W.children || [])),
                      (D.return = U),
                      (U = D);
                    break e;
                  } else {
                    i(U, D);
                    break;
                  }
                else n(U, D);
                D = D.sibling;
              }
              (D = ac(W, U.mode, oe)), (D.return = U), (U = D);
            }
            return E(U);
          case Y:
            return (Ce = W._init), ft(U, D, Ce(W._payload), oe);
        }
        if (at(W)) return fe(U, D, W, oe);
        if (K(W)) return de(U, D, W, oe);
        Xs(U, W);
      }
      return (typeof W == "string" && W !== "") || typeof W == "number"
        ? ((W = "" + W),
          D !== null && D.tag === 6
            ? (i(U, D.sibling), (D = c(D, W)), (D.return = U), (U = D))
            : (i(U, D), (D = lc(W, U.mode, oe)), (D.return = U), (U = D)),
          E(U))
        : i(U, D);
    }
    return ft;
  }
  var bo = xp(!0),
    bp = xp(!1),
    Js = gr(null),
    Zs = null,
    ko = null,
    yu = null;
  function vu() {
    yu = ko = Zs = null;
  }
  function Su(t) {
    var n = Js.current;
    Xe(Js), (t._currentValue = n);
  }
  function wu(t, n, i) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & n) !== n
          ? ((t.childLanes |= n), a !== null && (a.childLanes |= n))
          : a !== null && (a.childLanes & n) !== n && (a.childLanes |= n),
        t === i)
      )
        break;
      t = t.return;
    }
  }
  function Eo(t, n) {
    (Zs = t),
      (yu = ko = null),
      (t = t.dependencies),
      t !== null &&
        t.firstContext !== null &&
        (t.lanes & n && (Ut = !0), (t.firstContext = null));
  }
  function on(t) {
    var n = t._currentValue;
    if (yu !== t)
      if (((t = { context: t, memoizedValue: n, next: null }), ko === null)) {
        if (Zs === null) throw Error(o(308));
        (ko = t), (Zs.dependencies = { lanes: 0, firstContext: t });
      } else ko = ko.next = t;
    return n;
  }
  var jr = null;
  function Cu(t) {
    jr === null ? (jr = [t]) : jr.push(t);
  }
  function kp(t, n, i, a) {
    var c = n.interleaved;
    return (
      c === null ? ((i.next = i), Cu(n)) : ((i.next = c.next), (c.next = i)),
      (n.interleaved = i),
      Yn(t, a)
    );
  }
  function Yn(t, n) {
    t.lanes |= n;
    var i = t.alternate;
    for (i !== null && (i.lanes |= n), i = t, t = t.return; t !== null; )
      (t.childLanes |= n),
        (i = t.alternate),
        i !== null && (i.childLanes |= n),
        (i = t),
        (t = t.return);
    return i.tag === 3 ? i.stateNode : null;
  }
  var Sr = !1;
  function xu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ep(t, n) {
    (t = t.updateQueue),
      n.updateQueue === t &&
        (n.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          effects: t.effects,
        });
  }
  function Xn(t, n) {
    return {
      eventTime: t,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function wr(t, n, i) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), Oe & 2)) {
      var c = a.pending;
      return (
        c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
        (a.pending = n),
        Yn(t, i)
      );
    }
    return (
      (c = a.interleaved),
      c === null ? ((n.next = n), Cu(a)) : ((n.next = c.next), (c.next = n)),
      (a.interleaved = n),
      Yn(t, i)
    );
  }
  function el(t, n, i) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (i & 4194240) !== 0))
    ) {
      var a = n.lanes;
      (a &= t.pendingLanes), (i |= a), (n.lanes = i), za(t, i);
    }
  }
  function Rp(t, n) {
    var i = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), i === a)) {
      var c = null,
        d = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var E = {
            eventTime: i.eventTime,
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          };
          d === null ? (c = d = E) : (d = d.next = E), (i = i.next);
        } while (i !== null);
        d === null ? (c = d = n) : (d = d.next = n);
      } else c = d = n;
      (i = {
        baseState: a.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: d,
        shared: a.shared,
        effects: a.effects,
      }),
        (t.updateQueue = i);
      return;
    }
    (t = i.lastBaseUpdate),
      t === null ? (i.firstBaseUpdate = n) : (t.next = n),
      (i.lastBaseUpdate = n);
  }
  function tl(t, n, i, a) {
    var c = t.updateQueue;
    Sr = !1;
    var d = c.firstBaseUpdate,
      E = c.lastBaseUpdate,
      $ = c.shared.pending;
    if ($ !== null) {
      c.shared.pending = null;
      var F = $,
        Q = F.next;
      (F.next = null), E === null ? (d = Q) : (E.next = Q), (E = F);
      var ne = t.alternate;
      ne !== null &&
        ((ne = ne.updateQueue),
        ($ = ne.lastBaseUpdate),
        $ !== E &&
          ($ === null ? (ne.firstBaseUpdate = Q) : ($.next = Q),
          (ne.lastBaseUpdate = F)));
    }
    if (d !== null) {
      var re = c.baseState;
      (E = 0), (ne = Q = F = null), ($ = d);
      do {
        var ee = $.lane,
          ae = $.eventTime;
        if ((a & ee) === ee) {
          ne !== null &&
            (ne = ne.next =
              {
                eventTime: ae,
                lane: 0,
                tag: $.tag,
                payload: $.payload,
                callback: $.callback,
                next: null,
              });
          e: {
            var fe = t,
              de = $;
            switch (((ee = n), (ae = i), de.tag)) {
              case 1:
                if (((fe = de.payload), typeof fe == "function")) {
                  re = fe.call(ae, re, ee);
                  break e;
                }
                re = fe;
                break e;
              case 3:
                fe.flags = (fe.flags & -65537) | 128;
              case 0:
                if (
                  ((fe = de.payload),
                  (ee = typeof fe == "function" ? fe.call(ae, re, ee) : fe),
                  ee == null)
                )
                  break e;
                re = Z({}, re, ee);
                break e;
              case 2:
                Sr = !0;
            }
          }
          $.callback !== null &&
            $.lane !== 0 &&
            ((t.flags |= 64),
            (ee = c.effects),
            ee === null ? (c.effects = [$]) : ee.push($));
        } else
          (ae = {
            eventTime: ae,
            lane: ee,
            tag: $.tag,
            payload: $.payload,
            callback: $.callback,
            next: null,
          }),
            ne === null ? ((Q = ne = ae), (F = re)) : (ne = ne.next = ae),
            (E |= ee);
        if ((($ = $.next), $ === null)) {
          if ((($ = c.shared.pending), $ === null)) break;
          (ee = $),
            ($ = ee.next),
            (ee.next = null),
            (c.lastBaseUpdate = ee),
            (c.shared.pending = null);
        }
      } while (!0);
      if (
        (ne === null && (F = re),
        (c.baseState = F),
        (c.firstBaseUpdate = Q),
        (c.lastBaseUpdate = ne),
        (n = c.shared.interleaved),
        n !== null)
      ) {
        c = n;
        do (E |= c.lane), (c = c.next);
        while (c !== n);
      } else d === null && (c.shared.lanes = 0);
      (Wr |= E), (t.lanes = E), (t.memoizedState = re);
    }
  }
  function Pp(t, n, i) {
    if (((t = n.effects), (n.effects = null), t !== null))
      for (n = 0; n < t.length; n++) {
        var a = t[n],
          c = a.callback;
        if (c !== null) {
          if (((a.callback = null), (a = i), typeof c != "function"))
            throw Error(o(191, c));
          c.call(a);
        }
      }
  }
  var bi = {},
    On = gr(bi),
    ki = gr(bi),
    Ei = gr(bi);
  function Br(t) {
    if (t === bi) throw Error(o(174));
    return t;
  }
  function bu(t, n) {
    switch ((Ke(Ei, n), Ke(ki, t), Ke(On, bi), (t = n.nodeType), t)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Vn(null, "");
        break;
      default:
        (t = t === 8 ? n.parentNode : n),
          (n = t.namespaceURI || null),
          (t = t.tagName),
          (n = Vn(n, t));
    }
    Xe(On), Ke(On, n);
  }
  function Ro() {
    Xe(On), Xe(ki), Xe(Ei);
  }
  function Tp(t) {
    Br(Ei.current);
    var n = Br(On.current),
      i = Vn(n, t.type);
    n !== i && (Ke(ki, t), Ke(On, i));
  }
  function ku(t) {
    ki.current === t && (Xe(On), Xe(ki));
  }
  var tt = gr(0);
  function nl(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (
          i !== null &&
          ((i = i.dehydrated), i === null || i.data === "$?" || i.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var Eu = [];
  function Ru() {
    for (var t = 0; t < Eu.length; t++)
      Eu[t]._workInProgressVersionPrimary = null;
    Eu.length = 0;
  }
  var rl = x.ReactCurrentDispatcher,
    Pu = x.ReactCurrentBatchConfig,
    Ur = 0,
    nt = null,
    gt = null,
    vt = null,
    ol = !1,
    Ri = !1,
    Pi = 0,
    v0 = 0;
  function Ot() {
    throw Error(o(321));
  }
  function Tu(t, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < t.length; i++)
      if (!hn(t[i], n[i])) return !1;
    return !0;
  }
  function Iu(t, n, i, a, c, d) {
    if (
      ((Ur = d),
      (nt = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (rl.current = t === null || t.memoizedState === null ? x0 : b0),
      (t = i(a, c)),
      Ri)
    ) {
      d = 0;
      do {
        if (((Ri = !1), (Pi = 0), 25 <= d)) throw Error(o(301));
        (d += 1),
          (vt = gt = null),
          (n.updateQueue = null),
          (rl.current = k0),
          (t = i(a, c));
      } while (Ri);
    }
    if (
      ((rl.current = ll),
      (n = gt !== null && gt.next !== null),
      (Ur = 0),
      (vt = gt = nt = null),
      (ol = !1),
      n)
    )
      throw Error(o(300));
    return t;
  }
  function Ou() {
    var t = Pi !== 0;
    return (Pi = 0), t;
  }
  function Mn() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return vt === null ? (nt.memoizedState = vt = t) : (vt = vt.next = t), vt;
  }
  function sn() {
    if (gt === null) {
      var t = nt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = gt.next;
    var n = vt === null ? nt.memoizedState : vt.next;
    if (n !== null) (vt = n), (gt = t);
    else {
      if (t === null) throw Error(o(310));
      (gt = t),
        (t = {
          memoizedState: gt.memoizedState,
          baseState: gt.baseState,
          baseQueue: gt.baseQueue,
          queue: gt.queue,
          next: null,
        }),
        vt === null ? (nt.memoizedState = vt = t) : (vt = vt.next = t);
    }
    return vt;
  }
  function Ti(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function Mu(t) {
    var n = sn(),
      i = n.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = t;
    var a = gt,
      c = a.baseQueue,
      d = i.pending;
    if (d !== null) {
      if (c !== null) {
        var E = c.next;
        (c.next = d.next), (d.next = E);
      }
      (a.baseQueue = c = d), (i.pending = null);
    }
    if (c !== null) {
      (d = c.next), (a = a.baseState);
      var $ = (E = null),
        F = null,
        Q = d;
      do {
        var ne = Q.lane;
        if ((Ur & ne) === ne)
          F !== null &&
            (F = F.next =
              {
                lane: 0,
                action: Q.action,
                hasEagerState: Q.hasEagerState,
                eagerState: Q.eagerState,
                next: null,
              }),
            (a = Q.hasEagerState ? Q.eagerState : t(a, Q.action));
        else {
          var re = {
            lane: ne,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null,
          };
          F === null ? (($ = F = re), (E = a)) : (F = F.next = re),
            (nt.lanes |= ne),
            (Wr |= ne);
        }
        Q = Q.next;
      } while (Q !== null && Q !== d);
      F === null ? (E = a) : (F.next = $),
        hn(a, n.memoizedState) || (Ut = !0),
        (n.memoizedState = a),
        (n.baseState = E),
        (n.baseQueue = F),
        (i.lastRenderedState = a);
    }
    if (((t = i.interleaved), t !== null)) {
      c = t;
      do (d = c.lane), (nt.lanes |= d), (Wr |= d), (c = c.next);
      while (c !== t);
    } else c === null && (i.lanes = 0);
    return [n.memoizedState, i.dispatch];
  }
  function _u(t) {
    var n = sn(),
      i = n.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = t;
    var a = i.dispatch,
      c = i.pending,
      d = n.memoizedState;
    if (c !== null) {
      i.pending = null;
      var E = (c = c.next);
      do (d = t(d, E.action)), (E = E.next);
      while (E !== c);
      hn(d, n.memoizedState) || (Ut = !0),
        (n.memoizedState = d),
        n.baseQueue === null && (n.baseState = d),
        (i.lastRenderedState = d);
    }
    return [d, a];
  }
  function Ip() {}
  function Op(t, n) {
    var i = nt,
      a = sn(),
      c = n(),
      d = !hn(a.memoizedState, c);
    if (
      (d && ((a.memoizedState = c), (Ut = !0)),
      (a = a.queue),
      $u($p.bind(null, i, a, t), [t]),
      a.getSnapshot !== n || d || (vt !== null && vt.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        Ii(9, _p.bind(null, i, a, c, n), void 0, null),
        St === null)
      )
        throw Error(o(349));
      Ur & 30 || Mp(i, n, c);
    }
    return c;
  }
  function Mp(t, n, i) {
    (t.flags |= 16384),
      (t = { getSnapshot: n, value: i }),
      (n = nt.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (nt.updateQueue = n),
          (n.stores = [t]))
        : ((i = n.stores), i === null ? (n.stores = [t]) : i.push(t));
  }
  function _p(t, n, i, a) {
    (n.value = i), (n.getSnapshot = a), Np(n) && Ap(t);
  }
  function $p(t, n, i) {
    return i(function () {
      Np(n) && Ap(t);
    });
  }
  function Np(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var i = n();
      return !hn(t, i);
    } catch {
      return !0;
    }
  }
  function Ap(t) {
    var n = Yn(t, 1);
    n !== null && wn(n, t, 1, -1);
  }
  function zp(t) {
    var n = Mn();
    return (
      typeof t == "function" && (t = t()),
      (n.memoizedState = n.baseState = t),
      (t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ti,
        lastRenderedState: t,
      }),
      (n.queue = t),
      (t = t.dispatch = C0.bind(null, nt, t)),
      [n.memoizedState, t]
    );
  }
  function Ii(t, n, i, a) {
    return (
      (t = { tag: t, create: n, destroy: i, deps: a, next: null }),
      (n = nt.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (nt.updateQueue = n),
          (n.lastEffect = t.next = t))
        : ((i = n.lastEffect),
          i === null
            ? (n.lastEffect = t.next = t)
            : ((a = i.next), (i.next = t), (t.next = a), (n.lastEffect = t))),
      t
    );
  }
  function Lp() {
    return sn().memoizedState;
  }
  function il(t, n, i, a) {
    var c = Mn();
    (nt.flags |= t),
      (c.memoizedState = Ii(1 | n, i, void 0, a === void 0 ? null : a));
  }
  function sl(t, n, i, a) {
    var c = sn();
    a = a === void 0 ? null : a;
    var d = void 0;
    if (gt !== null) {
      var E = gt.memoizedState;
      if (((d = E.destroy), a !== null && Tu(a, E.deps))) {
        c.memoizedState = Ii(n, i, d, a);
        return;
      }
    }
    (nt.flags |= t), (c.memoizedState = Ii(1 | n, i, d, a));
  }
  function Fp(t, n) {
    return il(8390656, 8, t, n);
  }
  function $u(t, n) {
    return sl(2048, 8, t, n);
  }
  function Dp(t, n) {
    return sl(4, 2, t, n);
  }
  function jp(t, n) {
    return sl(4, 4, t, n);
  }
  function Bp(t, n) {
    if (typeof n == "function")
      return (
        (t = t()),
        n(t),
        function () {
          n(null);
        }
      );
    if (n != null)
      return (
        (t = t()),
        (n.current = t),
        function () {
          n.current = null;
        }
      );
  }
  function Up(t, n, i) {
    return (
      (i = i != null ? i.concat([t]) : null), sl(4, 4, Bp.bind(null, n, t), i)
    );
  }
  function Nu() {}
  function Wp(t, n) {
    var i = sn();
    n = n === void 0 ? null : n;
    var a = i.memoizedState;
    return a !== null && n !== null && Tu(n, a[1])
      ? a[0]
      : ((i.memoizedState = [t, n]), t);
  }
  function Vp(t, n) {
    var i = sn();
    n = n === void 0 ? null : n;
    var a = i.memoizedState;
    return a !== null && n !== null && Tu(n, a[1])
      ? a[0]
      : ((t = t()), (i.memoizedState = [t, n]), t);
  }
  function Hp(t, n, i) {
    return Ur & 21
      ? (hn(i, n) ||
          ((i = Cd()), (nt.lanes |= i), (Wr |= i), (t.baseState = !0)),
        n)
      : (t.baseState && ((t.baseState = !1), (Ut = !0)), (t.memoizedState = i));
  }
  function S0(t, n) {
    var i = De;
    (De = i !== 0 && 4 > i ? i : 4), t(!0);
    var a = Pu.transition;
    Pu.transition = {};
    try {
      t(!1), n();
    } finally {
      (De = i), (Pu.transition = a);
    }
  }
  function qp() {
    return sn().memoizedState;
  }
  function w0(t, n, i) {
    var a = kr(t);
    if (
      ((i = {
        lane: a,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Qp(t))
    )
      Kp(n, i);
    else if (((i = kp(t, n, i, a)), i !== null)) {
      var c = zt();
      wn(i, t, a, c), Gp(i, n, a);
    }
  }
  function C0(t, n, i) {
    var a = kr(t),
      c = {
        lane: a,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Qp(t)) Kp(n, c);
    else {
      var d = t.alternate;
      if (
        t.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = n.lastRenderedReducer), d !== null)
      )
        try {
          var E = n.lastRenderedState,
            $ = d(E, i);
          if (((c.hasEagerState = !0), (c.eagerState = $), hn($, E))) {
            var F = n.interleaved;
            F === null
              ? ((c.next = c), Cu(n))
              : ((c.next = F.next), (F.next = c)),
              (n.interleaved = c);
            return;
          }
        } catch {
        } finally {
        }
      (i = kp(t, n, c, a)),
        i !== null && ((c = zt()), wn(i, t, a, c), Gp(i, n, a));
    }
  }
  function Qp(t) {
    var n = t.alternate;
    return t === nt || (n !== null && n === nt);
  }
  function Kp(t, n) {
    Ri = ol = !0;
    var i = t.pending;
    i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
      (t.pending = n);
  }
  function Gp(t, n, i) {
    if (i & 4194240) {
      var a = n.lanes;
      (a &= t.pendingLanes), (i |= a), (n.lanes = i), za(t, i);
    }
  }
  var ll = {
      readContext: on,
      useCallback: Ot,
      useContext: Ot,
      useEffect: Ot,
      useImperativeHandle: Ot,
      useInsertionEffect: Ot,
      useLayoutEffect: Ot,
      useMemo: Ot,
      useReducer: Ot,
      useRef: Ot,
      useState: Ot,
      useDebugValue: Ot,
      useDeferredValue: Ot,
      useTransition: Ot,
      useMutableSource: Ot,
      useSyncExternalStore: Ot,
      useId: Ot,
      unstable_isNewReconciler: !1,
    },
    x0 = {
      readContext: on,
      useCallback: function (t, n) {
        return (Mn().memoizedState = [t, n === void 0 ? null : n]), t;
      },
      useContext: on,
      useEffect: Fp,
      useImperativeHandle: function (t, n, i) {
        return (
          (i = i != null ? i.concat([t]) : null),
          il(4194308, 4, Bp.bind(null, n, t), i)
        );
      },
      useLayoutEffect: function (t, n) {
        return il(4194308, 4, t, n);
      },
      useInsertionEffect: function (t, n) {
        return il(4, 2, t, n);
      },
      useMemo: function (t, n) {
        var i = Mn();
        return (
          (n = n === void 0 ? null : n),
          (t = t()),
          (i.memoizedState = [t, n]),
          t
        );
      },
      useReducer: function (t, n, i) {
        var a = Mn();
        return (
          (n = i !== void 0 ? i(n) : n),
          (a.memoizedState = a.baseState = n),
          (t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (a.queue = t),
          (t = t.dispatch = w0.bind(null, nt, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var n = Mn();
        return (t = { current: t }), (n.memoizedState = t);
      },
      useState: zp,
      useDebugValue: Nu,
      useDeferredValue: function (t) {
        return (Mn().memoizedState = t);
      },
      useTransition: function () {
        var t = zp(!1),
          n = t[0];
        return (t = S0.bind(null, t[1])), (Mn().memoizedState = t), [n, t];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (t, n, i) {
        var a = nt,
          c = Mn();
        if (Je) {
          if (i === void 0) throw Error(o(407));
          i = i();
        } else {
          if (((i = n()), St === null)) throw Error(o(349));
          Ur & 30 || Mp(a, n, i);
        }
        c.memoizedState = i;
        var d = { value: i, getSnapshot: n };
        return (
          (c.queue = d),
          Fp($p.bind(null, a, d, t), [t]),
          (a.flags |= 2048),
          Ii(9, _p.bind(null, a, d, i, n), void 0, null),
          i
        );
      },
      useId: function () {
        var t = Mn(),
          n = St.identifierPrefix;
        if (Je) {
          var i = Gn,
            a = Kn;
          (i = (a & ~(1 << (32 - mn(a) - 1))).toString(32) + i),
            (n = ":" + n + "R" + i),
            (i = Pi++),
            0 < i && (n += "H" + i.toString(32)),
            (n += ":");
        } else (i = v0++), (n = ":" + n + "r" + i.toString(32) + ":");
        return (t.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    b0 = {
      readContext: on,
      useCallback: Wp,
      useContext: on,
      useEffect: $u,
      useImperativeHandle: Up,
      useInsertionEffect: Dp,
      useLayoutEffect: jp,
      useMemo: Vp,
      useReducer: Mu,
      useRef: Lp,
      useState: function () {
        return Mu(Ti);
      },
      useDebugValue: Nu,
      useDeferredValue: function (t) {
        var n = sn();
        return Hp(n, gt.memoizedState, t);
      },
      useTransition: function () {
        var t = Mu(Ti)[0],
          n = sn().memoizedState;
        return [t, n];
      },
      useMutableSource: Ip,
      useSyncExternalStore: Op,
      useId: qp,
      unstable_isNewReconciler: !1,
    },
    k0 = {
      readContext: on,
      useCallback: Wp,
      useContext: on,
      useEffect: $u,
      useImperativeHandle: Up,
      useInsertionEffect: Dp,
      useLayoutEffect: jp,
      useMemo: Vp,
      useReducer: _u,
      useRef: Lp,
      useState: function () {
        return _u(Ti);
      },
      useDebugValue: Nu,
      useDeferredValue: function (t) {
        var n = sn();
        return gt === null ? (n.memoizedState = t) : Hp(n, gt.memoizedState, t);
      },
      useTransition: function () {
        var t = _u(Ti)[0],
          n = sn().memoizedState;
        return [t, n];
      },
      useMutableSource: Ip,
      useSyncExternalStore: Op,
      useId: qp,
      unstable_isNewReconciler: !1,
    };
  function yn(t, n) {
    if (t && t.defaultProps) {
      (n = Z({}, n)), (t = t.defaultProps);
      for (var i in t) n[i] === void 0 && (n[i] = t[i]);
      return n;
    }
    return n;
  }
  function Au(t, n, i, a) {
    (n = t.memoizedState),
      (i = i(a, n)),
      (i = i == null ? n : Z({}, n, i)),
      (t.memoizedState = i),
      t.lanes === 0 && (t.updateQueue.baseState = i);
  }
  var al = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? Ar(t) === t : !1;
    },
    enqueueSetState: function (t, n, i) {
      t = t._reactInternals;
      var a = zt(),
        c = kr(t),
        d = Xn(a, c);
      (d.payload = n),
        i != null && (d.callback = i),
        (n = wr(t, d, c)),
        n !== null && (wn(n, t, c, a), el(n, t, c));
    },
    enqueueReplaceState: function (t, n, i) {
      t = t._reactInternals;
      var a = zt(),
        c = kr(t),
        d = Xn(a, c);
      (d.tag = 1),
        (d.payload = n),
        i != null && (d.callback = i),
        (n = wr(t, d, c)),
        n !== null && (wn(n, t, c, a), el(n, t, c));
    },
    enqueueForceUpdate: function (t, n) {
      t = t._reactInternals;
      var i = zt(),
        a = kr(t),
        c = Xn(i, a);
      (c.tag = 2),
        n != null && (c.callback = n),
        (n = wr(t, c, a)),
        n !== null && (wn(n, t, a, i), el(n, t, a));
    },
  };
  function Yp(t, n, i, a, c, d, E) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, d, E)
        : n.prototype && n.prototype.isPureReactComponent
          ? !hi(i, a) || !hi(c, d)
          : !0
    );
  }
  function Xp(t, n, i) {
    var a = !1,
      c = yr,
      d = n.contextType;
    return (
      typeof d == "object" && d !== null
        ? (d = on(d))
        : ((c = Bt(n) ? Lr : It.current),
          (a = n.contextTypes),
          (d = (a = a != null) ? So(t, c) : yr)),
      (n = new n(i, d)),
      (t.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = al),
      (t.stateNode = n),
      (n._reactInternals = t),
      a &&
        ((t = t.stateNode),
        (t.__reactInternalMemoizedUnmaskedChildContext = c),
        (t.__reactInternalMemoizedMaskedChildContext = d)),
      n
    );
  }
  function Jp(t, n, i, a) {
    (t = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(i, a),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(i, a),
      n.state !== t && al.enqueueReplaceState(n, n.state, null);
  }
  function zu(t, n, i, a) {
    var c = t.stateNode;
    (c.props = i), (c.state = t.memoizedState), (c.refs = {}), xu(t);
    var d = n.contextType;
    typeof d == "object" && d !== null
      ? (c.context = on(d))
      : ((d = Bt(n) ? Lr : It.current), (c.context = So(t, d))),
      (c.state = t.memoizedState),
      (d = n.getDerivedStateFromProps),
      typeof d == "function" && (Au(t, n, d, i), (c.state = t.memoizedState)),
      typeof n.getDerivedStateFromProps == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function" ||
        (typeof c.UNSAFE_componentWillMount != "function" &&
          typeof c.componentWillMount != "function") ||
        ((n = c.state),
        typeof c.componentWillMount == "function" && c.componentWillMount(),
        typeof c.UNSAFE_componentWillMount == "function" &&
          c.UNSAFE_componentWillMount(),
        n !== c.state && al.enqueueReplaceState(c, c.state, null),
        tl(t, i, c, a),
        (c.state = t.memoizedState)),
      typeof c.componentDidMount == "function" && (t.flags |= 4194308);
  }
  function Po(t, n) {
    try {
      var i = "",
        a = n;
      do (i += le(a)), (a = a.return);
      while (a);
      var c = i;
    } catch (d) {
      c =
        `
Error generating stack: ` +
        d.message +
        `
` +
        d.stack;
    }
    return { value: t, source: n, stack: c, digest: null };
  }
  function Lu(t, n, i) {
    return { value: t, source: null, stack: i ?? null, digest: n ?? null };
  }
  function Fu(t, n) {
    try {
      console.error(n.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var E0 = typeof WeakMap == "function" ? WeakMap : Map;
  function Zp(t, n, i) {
    (i = Xn(-1, i)), (i.tag = 3), (i.payload = { element: null });
    var a = n.value;
    return (
      (i.callback = function () {
        hl || ((hl = !0), (Zu = a)), Fu(t, n);
      }),
      i
    );
  }
  function em(t, n, i) {
    (i = Xn(-1, i)), (i.tag = 3);
    var a = t.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var c = n.value;
      (i.payload = function () {
        return a(c);
      }),
        (i.callback = function () {
          Fu(t, n);
        });
    }
    var d = t.stateNode;
    return (
      d !== null &&
        typeof d.componentDidCatch == "function" &&
        (i.callback = function () {
          Fu(t, n),
            typeof a != "function" &&
              (xr === null ? (xr = new Set([this])) : xr.add(this));
          var E = n.stack;
          this.componentDidCatch(n.value, {
            componentStack: E !== null ? E : "",
          });
        }),
      i
    );
  }
  function tm(t, n, i) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new E0();
      var c = new Set();
      a.set(n, c);
    } else (c = a.get(n)), c === void 0 && ((c = new Set()), a.set(n, c));
    c.has(i) || (c.add(i), (t = D0.bind(null, t, n, i)), n.then(t, t));
  }
  function nm(t) {
    do {
      var n;
      if (
        ((n = t.tag === 13) &&
          ((n = t.memoizedState),
          (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function rm(t, n, i, a, c) {
    return t.mode & 1
      ? ((t.flags |= 65536), (t.lanes = c), t)
      : (t === n
          ? (t.flags |= 65536)
          : ((t.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 &&
              (i.alternate === null
                ? (i.tag = 17)
                : ((n = Xn(-1, 1)), (n.tag = 2), wr(i, n, 1))),
            (i.lanes |= 1)),
        t);
  }
  var R0 = x.ReactCurrentOwner,
    Ut = !1;
  function At(t, n, i, a) {
    n.child = t === null ? bp(n, null, i, a) : bo(n, t.child, i, a);
  }
  function om(t, n, i, a, c) {
    i = i.render;
    var d = n.ref;
    return (
      Eo(n, c),
      (a = Iu(t, n, i, a, d, c)),
      (i = Ou()),
      t !== null && !Ut
        ? ((n.updateQueue = t.updateQueue),
          (n.flags &= -2053),
          (t.lanes &= ~c),
          Jn(t, n, c))
        : (Je && i && du(n), (n.flags |= 1), At(t, n, a, c), n.child)
    );
  }
  function im(t, n, i, a, c) {
    if (t === null) {
      var d = i.type;
      return typeof d == "function" &&
        !sc(d) &&
        d.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((n.tag = 15), (n.type = d), sm(t, n, d, a, c))
        : ((t = Cl(i.type, null, a, n, n.mode, c)),
          (t.ref = n.ref),
          (t.return = n),
          (n.child = t));
    }
    if (((d = t.child), !(t.lanes & c))) {
      var E = d.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : hi), i(E, a) && t.ref === n.ref)
      )
        return Jn(t, n, c);
    }
    return (
      (n.flags |= 1),
      (t = Rr(d, a)),
      (t.ref = n.ref),
      (t.return = n),
      (n.child = t)
    );
  }
  function sm(t, n, i, a, c) {
    if (t !== null) {
      var d = t.memoizedProps;
      if (hi(d, a) && t.ref === n.ref)
        if (((Ut = !1), (n.pendingProps = a = d), (t.lanes & c) !== 0))
          t.flags & 131072 && (Ut = !0);
        else return (n.lanes = t.lanes), Jn(t, n, c);
    }
    return Du(t, n, i, a, c);
  }
  function lm(t, n, i) {
    var a = n.pendingProps,
      c = a.children,
      d = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden")
      if (!(n.mode & 1))
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ke(Io, Jt),
          (Jt |= i);
      else {
        if (!(i & 1073741824))
          return (
            (t = d !== null ? d.baseLanes | i : i),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = {
              baseLanes: t,
              cachePool: null,
              transitions: null,
            }),
            (n.updateQueue = null),
            Ke(Io, Jt),
            (Jt |= t),
            null
          );
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (a = d !== null ? d.baseLanes : i),
          Ke(Io, Jt),
          (Jt |= a);
      }
    else
      d !== null ? ((a = d.baseLanes | i), (n.memoizedState = null)) : (a = i),
        Ke(Io, Jt),
        (Jt |= a);
    return At(t, n, c, i), n.child;
  }
  function am(t, n) {
    var i = n.ref;
    ((t === null && i !== null) || (t !== null && t.ref !== i)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function Du(t, n, i, a, c) {
    var d = Bt(i) ? Lr : It.current;
    return (
      (d = So(n, d)),
      Eo(n, c),
      (i = Iu(t, n, i, a, d, c)),
      (a = Ou()),
      t !== null && !Ut
        ? ((n.updateQueue = t.updateQueue),
          (n.flags &= -2053),
          (t.lanes &= ~c),
          Jn(t, n, c))
        : (Je && a && du(n), (n.flags |= 1), At(t, n, i, c), n.child)
    );
  }
  function um(t, n, i, a, c) {
    if (Bt(i)) {
      var d = !0;
      qs(n);
    } else d = !1;
    if ((Eo(n, c), n.stateNode === null))
      cl(t, n), Xp(n, i, a), zu(n, i, a, c), (a = !0);
    else if (t === null) {
      var E = n.stateNode,
        $ = n.memoizedProps;
      E.props = $;
      var F = E.context,
        Q = i.contextType;
      typeof Q == "object" && Q !== null
        ? (Q = on(Q))
        : ((Q = Bt(i) ? Lr : It.current), (Q = So(n, Q)));
      var ne = i.getDerivedStateFromProps,
        re =
          typeof ne == "function" ||
          typeof E.getSnapshotBeforeUpdate == "function";
      re ||
        (typeof E.UNSAFE_componentWillReceiveProps != "function" &&
          typeof E.componentWillReceiveProps != "function") ||
        (($ !== a || F !== Q) && Jp(n, E, a, Q)),
        (Sr = !1);
      var ee = n.memoizedState;
      (E.state = ee),
        tl(n, a, E, c),
        (F = n.memoizedState),
        $ !== a || ee !== F || jt.current || Sr
          ? (typeof ne == "function" &&
              (Au(n, i, ne, a), (F = n.memoizedState)),
            ($ = Sr || Yp(n, i, $, a, ee, F, Q))
              ? (re ||
                  (typeof E.UNSAFE_componentWillMount != "function" &&
                    typeof E.componentWillMount != "function") ||
                  (typeof E.componentWillMount == "function" &&
                    E.componentWillMount(),
                  typeof E.UNSAFE_componentWillMount == "function" &&
                    E.UNSAFE_componentWillMount()),
                typeof E.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof E.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = a),
                (n.memoizedState = F)),
            (E.props = a),
            (E.state = F),
            (E.context = Q),
            (a = $))
          : (typeof E.componentDidMount == "function" && (n.flags |= 4194308),
            (a = !1));
    } else {
      (E = n.stateNode),
        Ep(t, n),
        ($ = n.memoizedProps),
        (Q = n.type === n.elementType ? $ : yn(n.type, $)),
        (E.props = Q),
        (re = n.pendingProps),
        (ee = E.context),
        (F = i.contextType),
        typeof F == "object" && F !== null
          ? (F = on(F))
          : ((F = Bt(i) ? Lr : It.current), (F = So(n, F)));
      var ae = i.getDerivedStateFromProps;
      (ne =
        typeof ae == "function" ||
        typeof E.getSnapshotBeforeUpdate == "function") ||
        (typeof E.UNSAFE_componentWillReceiveProps != "function" &&
          typeof E.componentWillReceiveProps != "function") ||
        (($ !== re || ee !== F) && Jp(n, E, a, F)),
        (Sr = !1),
        (ee = n.memoizedState),
        (E.state = ee),
        tl(n, a, E, c);
      var fe = n.memoizedState;
      $ !== re || ee !== fe || jt.current || Sr
        ? (typeof ae == "function" && (Au(n, i, ae, a), (fe = n.memoizedState)),
          (Q = Sr || Yp(n, i, Q, a, ee, fe, F) || !1)
            ? (ne ||
                (typeof E.UNSAFE_componentWillUpdate != "function" &&
                  typeof E.componentWillUpdate != "function") ||
                (typeof E.componentWillUpdate == "function" &&
                  E.componentWillUpdate(a, fe, F),
                typeof E.UNSAFE_componentWillUpdate == "function" &&
                  E.UNSAFE_componentWillUpdate(a, fe, F)),
              typeof E.componentDidUpdate == "function" && (n.flags |= 4),
              typeof E.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof E.componentDidUpdate != "function" ||
                ($ === t.memoizedProps && ee === t.memoizedState) ||
                (n.flags |= 4),
              typeof E.getSnapshotBeforeUpdate != "function" ||
                ($ === t.memoizedProps && ee === t.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = a),
              (n.memoizedState = fe)),
          (E.props = a),
          (E.state = fe),
          (E.context = F),
          (a = Q))
        : (typeof E.componentDidUpdate != "function" ||
            ($ === t.memoizedProps && ee === t.memoizedState) ||
            (n.flags |= 4),
          typeof E.getSnapshotBeforeUpdate != "function" ||
            ($ === t.memoizedProps && ee === t.memoizedState) ||
            (n.flags |= 1024),
          (a = !1));
    }
    return ju(t, n, i, a, d, c);
  }
  function ju(t, n, i, a, c, d) {
    am(t, n);
    var E = (n.flags & 128) !== 0;
    if (!a && !E) return c && mp(n, i, !1), Jn(t, n, d);
    (a = n.stateNode), (R0.current = n);
    var $ =
      E && typeof i.getDerivedStateFromError != "function" ? null : a.render();
    return (
      (n.flags |= 1),
      t !== null && E
        ? ((n.child = bo(n, t.child, null, d)), (n.child = bo(n, null, $, d)))
        : At(t, n, $, d),
      (n.memoizedState = a.state),
      c && mp(n, i, !0),
      n.child
    );
  }
  function cm(t) {
    var n = t.stateNode;
    n.pendingContext
      ? dp(t, n.pendingContext, n.pendingContext !== n.context)
      : n.context && dp(t, n.context, !1),
      bu(t, n.containerInfo);
  }
  function fm(t, n, i, a, c) {
    return xo(), gu(c), (n.flags |= 256), At(t, n, i, a), n.child;
  }
  var Bu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Uu(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function dm(t, n, i) {
    var a = n.pendingProps,
      c = tt.current,
      d = !1,
      E = (n.flags & 128) !== 0,
      $;
    if (
      (($ = E) ||
        ($ = t !== null && t.memoizedState === null ? !1 : (c & 2) !== 0),
      $
        ? ((d = !0), (n.flags &= -129))
        : (t === null || t.memoizedState !== null) && (c |= 1),
      Ke(tt, c & 1),
      t === null)
    )
      return (
        hu(n),
        (t = n.memoizedState),
        t !== null && ((t = t.dehydrated), t !== null)
          ? (n.mode & 1
              ? t.data === "$!"
                ? (n.lanes = 8)
                : (n.lanes = 1073741824)
              : (n.lanes = 1),
            null)
          : ((E = a.children),
            (t = a.fallback),
            d
              ? ((a = n.mode),
                (d = n.child),
                (E = { mode: "hidden", children: E }),
                !(a & 1) && d !== null
                  ? ((d.childLanes = 0), (d.pendingProps = E))
                  : (d = xl(E, a, 0, null)),
                (t = Qr(t, a, i, null)),
                (d.return = n),
                (t.return = n),
                (d.sibling = t),
                (n.child = d),
                (n.child.memoizedState = Uu(i)),
                (n.memoizedState = Bu),
                t)
              : Wu(n, E))
      );
    if (((c = t.memoizedState), c !== null && (($ = c.dehydrated), $ !== null)))
      return P0(t, n, E, a, $, c, i);
    if (d) {
      (d = a.fallback), (E = n.mode), (c = t.child), ($ = c.sibling);
      var F = { mode: "hidden", children: a.children };
      return (
        !(E & 1) && n.child !== c
          ? ((a = n.child),
            (a.childLanes = 0),
            (a.pendingProps = F),
            (n.deletions = null))
          : ((a = Rr(c, F)), (a.subtreeFlags = c.subtreeFlags & 14680064)),
        $ !== null ? (d = Rr($, d)) : ((d = Qr(d, E, i, null)), (d.flags |= 2)),
        (d.return = n),
        (a.return = n),
        (a.sibling = d),
        (n.child = a),
        (a = d),
        (d = n.child),
        (E = t.child.memoizedState),
        (E =
          E === null
            ? Uu(i)
            : {
                baseLanes: E.baseLanes | i,
                cachePool: null,
                transitions: E.transitions,
              }),
        (d.memoizedState = E),
        (d.childLanes = t.childLanes & ~i),
        (n.memoizedState = Bu),
        a
      );
    }
    return (
      (d = t.child),
      (t = d.sibling),
      (a = Rr(d, { mode: "visible", children: a.children })),
      !(n.mode & 1) && (a.lanes = i),
      (a.return = n),
      (a.sibling = null),
      t !== null &&
        ((i = n.deletions),
        i === null ? ((n.deletions = [t]), (n.flags |= 16)) : i.push(t)),
      (n.child = a),
      (n.memoizedState = null),
      a
    );
  }
  function Wu(t, n) {
    return (
      (n = xl({ mode: "visible", children: n }, t.mode, 0, null)),
      (n.return = t),
      (t.child = n)
    );
  }
  function ul(t, n, i, a) {
    return (
      a !== null && gu(a),
      bo(n, t.child, null, i),
      (t = Wu(n, n.pendingProps.children)),
      (t.flags |= 2),
      (n.memoizedState = null),
      t
    );
  }
  function P0(t, n, i, a, c, d, E) {
    if (i)
      return n.flags & 256
        ? ((n.flags &= -257), (a = Lu(Error(o(422)))), ul(t, n, E, a))
        : n.memoizedState !== null
          ? ((n.child = t.child), (n.flags |= 128), null)
          : ((d = a.fallback),
            (c = n.mode),
            (a = xl({ mode: "visible", children: a.children }, c, 0, null)),
            (d = Qr(d, c, E, null)),
            (d.flags |= 2),
            (a.return = n),
            (d.return = n),
            (a.sibling = d),
            (n.child = a),
            n.mode & 1 && bo(n, t.child, null, E),
            (n.child.memoizedState = Uu(E)),
            (n.memoizedState = Bu),
            d);
    if (!(n.mode & 1)) return ul(t, n, E, null);
    if (c.data === "$!") {
      if (((a = c.nextSibling && c.nextSibling.dataset), a)) var $ = a.dgst;
      return (
        (a = $), (d = Error(o(419))), (a = Lu(d, a, void 0)), ul(t, n, E, a)
      );
    }
    if ((($ = (E & t.childLanes) !== 0), Ut || $)) {
      if (((a = St), a !== null)) {
        switch (E & -E) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        (c = c & (a.suspendedLanes | E) ? 0 : c),
          c !== 0 &&
            c !== d.retryLane &&
            ((d.retryLane = c), Yn(t, c), wn(a, t, c, -1));
      }
      return ic(), (a = Lu(Error(o(421)))), ul(t, n, E, a);
    }
    return c.data === "$?"
      ? ((n.flags |= 128),
        (n.child = t.child),
        (n = j0.bind(null, t)),
        (c._reactRetry = n),
        null)
      : ((t = d.treeContext),
        (Xt = hr(c.nextSibling)),
        (Yt = n),
        (Je = !0),
        (gn = null),
        t !== null &&
          ((nn[rn++] = Kn),
          (nn[rn++] = Gn),
          (nn[rn++] = Fr),
          (Kn = t.id),
          (Gn = t.overflow),
          (Fr = n)),
        (n = Wu(n, a.children)),
        (n.flags |= 4096),
        n);
  }
  function pm(t, n, i) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n), wu(t.return, n, i);
  }
  function Vu(t, n, i, a, c) {
    var d = t.memoizedState;
    d === null
      ? (t.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: i,
          tailMode: c,
        })
      : ((d.isBackwards = n),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = a),
        (d.tail = i),
        (d.tailMode = c));
  }
  function mm(t, n, i) {
    var a = n.pendingProps,
      c = a.revealOrder,
      d = a.tail;
    if ((At(t, n, a.children, i), (a = tt.current), a & 2))
      (a = (a & 1) | 2), (n.flags |= 128);
    else {
      if (t !== null && t.flags & 128)
        e: for (t = n.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && pm(t, i, n);
          else if (t.tag === 19) pm(t, i, n);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === n) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === n) break e;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      a &= 1;
    }
    if ((Ke(tt, a), !(n.mode & 1))) n.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (i = n.child, c = null; i !== null; )
            (t = i.alternate),
              t !== null && nl(t) === null && (c = i),
              (i = i.sibling);
          (i = c),
            i === null
              ? ((c = n.child), (n.child = null))
              : ((c = i.sibling), (i.sibling = null)),
            Vu(n, !1, c, i, d);
          break;
        case "backwards":
          for (i = null, c = n.child, n.child = null; c !== null; ) {
            if (((t = c.alternate), t !== null && nl(t) === null)) {
              n.child = c;
              break;
            }
            (t = c.sibling), (c.sibling = i), (i = c), (c = t);
          }
          Vu(n, !0, i, null, d);
          break;
        case "together":
          Vu(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function cl(t, n) {
    !(n.mode & 1) &&
      t !== null &&
      ((t.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function Jn(t, n, i) {
    if (
      (t !== null && (n.dependencies = t.dependencies),
      (Wr |= n.lanes),
      !(i & n.childLanes))
    )
      return null;
    if (t !== null && n.child !== t.child) throw Error(o(153));
    if (n.child !== null) {
      for (
        t = n.child, i = Rr(t, t.pendingProps), n.child = i, i.return = n;
        t.sibling !== null;

      )
        (t = t.sibling),
          (i = i.sibling = Rr(t, t.pendingProps)),
          (i.return = n);
      i.sibling = null;
    }
    return n.child;
  }
  function T0(t, n, i) {
    switch (n.tag) {
      case 3:
        cm(n), xo();
        break;
      case 5:
        Tp(n);
        break;
      case 1:
        Bt(n.type) && qs(n);
        break;
      case 4:
        bu(n, n.stateNode.containerInfo);
        break;
      case 10:
        var a = n.type._context,
          c = n.memoizedProps.value;
        Ke(Js, a._currentValue), (a._currentValue = c);
        break;
      case 13:
        if (((a = n.memoizedState), a !== null))
          return a.dehydrated !== null
            ? (Ke(tt, tt.current & 1), (n.flags |= 128), null)
            : i & n.child.childLanes
              ? dm(t, n, i)
              : (Ke(tt, tt.current & 1),
                (t = Jn(t, n, i)),
                t !== null ? t.sibling : null);
        Ke(tt, tt.current & 1);
        break;
      case 19:
        if (((a = (i & n.childLanes) !== 0), t.flags & 128)) {
          if (a) return mm(t, n, i);
          n.flags |= 128;
        }
        if (
          ((c = n.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          Ke(tt, tt.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), lm(t, n, i);
    }
    return Jn(t, n, i);
  }
  var hm, Hu, gm, ym;
  (hm = function (t, n) {
    for (var i = n.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) t.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        (i.child.return = i), (i = i.child);
        continue;
      }
      if (i === n) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === n) return;
        i = i.return;
      }
      (i.sibling.return = i.return), (i = i.sibling);
    }
  }),
    (Hu = function () {}),
    (gm = function (t, n, i, a) {
      var c = t.memoizedProps;
      if (c !== a) {
        (t = n.stateNode), Br(On.current);
        var d = null;
        switch (i) {
          case "input":
            (c = Re(t, c)), (a = Re(t, a)), (d = []);
            break;
          case "select":
            (c = Z({}, c, { value: void 0 })),
              (a = Z({}, a, { value: void 0 })),
              (d = []);
            break;
          case "textarea":
            (c = ge(t, c)), (a = ge(t, a)), (d = []);
            break;
          default:
            typeof c.onClick != "function" &&
              typeof a.onClick == "function" &&
              (t.onclick = Ws);
        }
        Fe(i, a);
        var E;
        i = null;
        for (Q in c)
          if (!a.hasOwnProperty(Q) && c.hasOwnProperty(Q) && c[Q] != null)
            if (Q === "style") {
              var $ = c[Q];
              for (E in $) $.hasOwnProperty(E) && (i || (i = {}), (i[E] = ""));
            } else
              Q !== "dangerouslySetInnerHTML" &&
                Q !== "children" &&
                Q !== "suppressContentEditableWarning" &&
                Q !== "suppressHydrationWarning" &&
                Q !== "autoFocus" &&
                (l.hasOwnProperty(Q)
                  ? d || (d = [])
                  : (d = d || []).push(Q, null));
        for (Q in a) {
          var F = a[Q];
          if (
            (($ = c != null ? c[Q] : void 0),
            a.hasOwnProperty(Q) && F !== $ && (F != null || $ != null))
          )
            if (Q === "style")
              if ($) {
                for (E in $)
                  !$.hasOwnProperty(E) ||
                    (F && F.hasOwnProperty(E)) ||
                    (i || (i = {}), (i[E] = ""));
                for (E in F)
                  F.hasOwnProperty(E) &&
                    $[E] !== F[E] &&
                    (i || (i = {}), (i[E] = F[E]));
              } else i || (d || (d = []), d.push(Q, i)), (i = F);
            else
              Q === "dangerouslySetInnerHTML"
                ? ((F = F ? F.__html : void 0),
                  ($ = $ ? $.__html : void 0),
                  F != null && $ !== F && (d = d || []).push(Q, F))
                : Q === "children"
                  ? (typeof F != "string" && typeof F != "number") ||
                    (d = d || []).push(Q, "" + F)
                  : Q !== "suppressContentEditableWarning" &&
                    Q !== "suppressHydrationWarning" &&
                    (l.hasOwnProperty(Q)
                      ? (F != null && Q === "onScroll" && Ye("scroll", t),
                        d || $ === F || (d = []))
                      : (d = d || []).push(Q, F));
        }
        i && (d = d || []).push("style", i);
        var Q = d;
        (n.updateQueue = Q) && (n.flags |= 4);
      }
    }),
    (ym = function (t, n, i, a) {
      i !== a && (n.flags |= 4);
    });
  function Oi(t, n) {
    if (!Je)
      switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), (n = n.sibling);
          i === null ? (t.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = t.tail;
          for (var a = null; i !== null; )
            i.alternate !== null && (a = i), (i = i.sibling);
          a === null
            ? n || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Mt(t) {
    var n = t.alternate !== null && t.alternate.child === t.child,
      i = 0,
      a = 0;
    if (n)
      for (var c = t.child; c !== null; )
        (i |= c.lanes | c.childLanes),
          (a |= c.subtreeFlags & 14680064),
          (a |= c.flags & 14680064),
          (c.return = t),
          (c = c.sibling);
    else
      for (c = t.child; c !== null; )
        (i |= c.lanes | c.childLanes),
          (a |= c.subtreeFlags),
          (a |= c.flags),
          (c.return = t),
          (c = c.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = i), n;
  }
  function I0(t, n, i) {
    var a = n.pendingProps;
    switch ((pu(n), n.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Mt(n), null;
      case 1:
        return Bt(n.type) && Hs(), Mt(n), null;
      case 3:
        return (
          (a = n.stateNode),
          Ro(),
          Xe(jt),
          Xe(It),
          Ru(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ys(n)
              ? (n.flags |= 4)
              : t === null ||
                (t.memoizedState.isDehydrated && !(n.flags & 256)) ||
                ((n.flags |= 1024), gn !== null && (nc(gn), (gn = null)))),
          Hu(t, n),
          Mt(n),
          null
        );
      case 5:
        ku(n);
        var c = Br(Ei.current);
        if (((i = n.type), t !== null && n.stateNode != null))
          gm(t, n, i, a, c),
            t.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
        else {
          if (!a) {
            if (n.stateNode === null) throw Error(o(166));
            return Mt(n), null;
          }
          if (((t = Br(On.current)), Ys(n))) {
            (a = n.stateNode), (i = n.type);
            var d = n.memoizedProps;
            switch (((a[In] = n), (a[wi] = d), (t = (n.mode & 1) !== 0), i)) {
              case "dialog":
                Ye("cancel", a), Ye("close", a);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ye("load", a);
                break;
              case "video":
              case "audio":
                for (c = 0; c < yi.length; c++) Ye(yi[c], a);
                break;
              case "source":
                Ye("error", a);
                break;
              case "img":
              case "image":
              case "link":
                Ye("error", a), Ye("load", a);
                break;
              case "details":
                Ye("toggle", a);
                break;
              case "input":
                Ve(a, d), Ye("invalid", a);
                break;
              case "select":
                (a._wrapperState = { wasMultiple: !!d.multiple }),
                  Ye("invalid", a);
                break;
              case "textarea":
                Un(a, d), Ye("invalid", a);
            }
            Fe(i, d), (c = null);
            for (var E in d)
              if (d.hasOwnProperty(E)) {
                var $ = d[E];
                E === "children"
                  ? typeof $ == "string"
                    ? a.textContent !== $ &&
                      (d.suppressHydrationWarning !== !0 &&
                        Us(a.textContent, $, t),
                      (c = ["children", $]))
                    : typeof $ == "number" &&
                      a.textContent !== "" + $ &&
                      (d.suppressHydrationWarning !== !0 &&
                        Us(a.textContent, $, t),
                      (c = ["children", "" + $]))
                  : l.hasOwnProperty(E) &&
                    $ != null &&
                    E === "onScroll" &&
                    Ye("scroll", a);
              }
            switch (i) {
              case "input":
                _e(a), lt(a, d, !0);
                break;
              case "textarea":
                _e(a), Wn(a);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (a.onclick = Ws);
            }
            (a = c), (n.updateQueue = a), a !== null && (n.flags |= 4);
          } else {
            (E = c.nodeType === 9 ? c : c.ownerDocument),
              t === "http://www.w3.org/1999/xhtml" && (t = sr(i)),
              t === "http://www.w3.org/1999/xhtml"
                ? i === "script"
                  ? ((t = E.createElement("div")),
                    (t.innerHTML = "<script><\/script>"),
                    (t = t.removeChild(t.firstChild)))
                  : typeof a.is == "string"
                    ? (t = E.createElement(i, { is: a.is }))
                    : ((t = E.createElement(i)),
                      i === "select" &&
                        ((E = t),
                        a.multiple
                          ? (E.multiple = !0)
                          : a.size && (E.size = a.size)))
                : (t = E.createElementNS(t, i)),
              (t[In] = n),
              (t[wi] = a),
              hm(t, n, !1, !1),
              (n.stateNode = t);
            e: {
              switch (((E = ut(i, a)), i)) {
                case "dialog":
                  Ye("cancel", t), Ye("close", t), (c = a);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ye("load", t), (c = a);
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < yi.length; c++) Ye(yi[c], t);
                  c = a;
                  break;
                case "source":
                  Ye("error", t), (c = a);
                  break;
                case "img":
                case "image":
                case "link":
                  Ye("error", t), Ye("load", t), (c = a);
                  break;
                case "details":
                  Ye("toggle", t), (c = a);
                  break;
                case "input":
                  Ve(t, a), (c = Re(t, a)), Ye("invalid", t);
                  break;
                case "option":
                  c = a;
                  break;
                case "select":
                  (t._wrapperState = { wasMultiple: !!a.multiple }),
                    (c = Z({}, a, { value: void 0 })),
                    Ye("invalid", t);
                  break;
                case "textarea":
                  Un(t, a), (c = ge(t, a)), Ye("invalid", t);
                  break;
                default:
                  c = a;
              }
              Fe(i, c), ($ = c);
              for (d in $)
                if ($.hasOwnProperty(d)) {
                  var F = $[d];
                  d === "style"
                    ? Zo(t, F)
                    : d === "dangerouslySetInnerHTML"
                      ? ((F = F ? F.__html : void 0), F != null && Hn(t, F))
                      : d === "children"
                        ? typeof F == "string"
                          ? (i !== "textarea" || F !== "") && Kt(t, F)
                          : typeof F == "number" && Kt(t, "" + F)
                        : d !== "suppressContentEditableWarning" &&
                          d !== "suppressHydrationWarning" &&
                          d !== "autoFocus" &&
                          (l.hasOwnProperty(d)
                            ? F != null && d === "onScroll" && Ye("scroll", t)
                            : F != null && v(t, d, F, E));
                }
              switch (i) {
                case "input":
                  _e(t), lt(t, a, !1);
                  break;
                case "textarea":
                  _e(t), Wn(t);
                  break;
                case "option":
                  a.value != null && t.setAttribute("value", "" + we(a.value));
                  break;
                case "select":
                  (t.multiple = !!a.multiple),
                    (d = a.value),
                    d != null
                      ? Qe(t, !!a.multiple, d, !1)
                      : a.defaultValue != null &&
                        Qe(t, !!a.multiple, a.defaultValue, !0);
                  break;
                default:
                  typeof c.onClick == "function" && (t.onclick = Ws);
              }
              switch (i) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break e;
                case "img":
                  a = !0;
                  break e;
                default:
                  a = !1;
              }
            }
            a && (n.flags |= 4);
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
        }
        return Mt(n), null;
      case 6:
        if (t && n.stateNode != null) ym(t, n, t.memoizedProps, a);
        else {
          if (typeof a != "string" && n.stateNode === null) throw Error(o(166));
          if (((i = Br(Ei.current)), Br(On.current), Ys(n))) {
            if (
              ((a = n.stateNode),
              (i = n.memoizedProps),
              (a[In] = n),
              (d = a.nodeValue !== i) && ((t = Yt), t !== null))
            )
              switch (t.tag) {
                case 3:
                  Us(a.nodeValue, i, (t.mode & 1) !== 0);
                  break;
                case 5:
                  t.memoizedProps.suppressHydrationWarning !== !0 &&
                    Us(a.nodeValue, i, (t.mode & 1) !== 0);
              }
            d && (n.flags |= 4);
          } else
            (a = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(a)),
              (a[In] = n),
              (n.stateNode = a);
        }
        return Mt(n), null;
      case 13:
        if (
          (Xe(tt),
          (a = n.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (Je && Xt !== null && n.mode & 1 && !(n.flags & 128))
            wp(), xo(), (n.flags |= 98560), (d = !1);
          else if (((d = Ys(n)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!d) throw Error(o(318));
              if (
                ((d = n.memoizedState),
                (d = d !== null ? d.dehydrated : null),
                !d)
              )
                throw Error(o(317));
              d[In] = n;
            } else
              xo(),
                !(n.flags & 128) && (n.memoizedState = null),
                (n.flags |= 4);
            Mt(n), (d = !1);
          } else gn !== null && (nc(gn), (gn = null)), (d = !0);
          if (!d) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128
          ? ((n.lanes = i), n)
          : ((a = a !== null),
            a !== (t !== null && t.memoizedState !== null) &&
              a &&
              ((n.child.flags |= 8192),
              n.mode & 1 &&
                (t === null || tt.current & 1 ? yt === 0 && (yt = 3) : ic())),
            n.updateQueue !== null && (n.flags |= 4),
            Mt(n),
            null);
      case 4:
        return (
          Ro(),
          Hu(t, n),
          t === null && vi(n.stateNode.containerInfo),
          Mt(n),
          null
        );
      case 10:
        return Su(n.type._context), Mt(n), null;
      case 17:
        return Bt(n.type) && Hs(), Mt(n), null;
      case 19:
        if ((Xe(tt), (d = n.memoizedState), d === null)) return Mt(n), null;
        if (((a = (n.flags & 128) !== 0), (E = d.rendering), E === null))
          if (a) Oi(d, !1);
          else {
            if (yt !== 0 || (t !== null && t.flags & 128))
              for (t = n.child; t !== null; ) {
                if (((E = nl(t)), E !== null)) {
                  for (
                    n.flags |= 128,
                      Oi(d, !1),
                      a = E.updateQueue,
                      a !== null && ((n.updateQueue = a), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      a = i,
                      i = n.child;
                    i !== null;

                  )
                    (d = i),
                      (t = a),
                      (d.flags &= 14680066),
                      (E = d.alternate),
                      E === null
                        ? ((d.childLanes = 0),
                          (d.lanes = t),
                          (d.child = null),
                          (d.subtreeFlags = 0),
                          (d.memoizedProps = null),
                          (d.memoizedState = null),
                          (d.updateQueue = null),
                          (d.dependencies = null),
                          (d.stateNode = null))
                        : ((d.childLanes = E.childLanes),
                          (d.lanes = E.lanes),
                          (d.child = E.child),
                          (d.subtreeFlags = 0),
                          (d.deletions = null),
                          (d.memoizedProps = E.memoizedProps),
                          (d.memoizedState = E.memoizedState),
                          (d.updateQueue = E.updateQueue),
                          (d.type = E.type),
                          (t = E.dependencies),
                          (d.dependencies =
                            t === null
                              ? null
                              : {
                                  lanes: t.lanes,
                                  firstContext: t.firstContext,
                                })),
                      (i = i.sibling);
                  return Ke(tt, (tt.current & 1) | 2), n.child;
                }
                t = t.sibling;
              }
            d.tail !== null &&
              ct() > Oo &&
              ((n.flags |= 128), (a = !0), Oi(d, !1), (n.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = nl(E)), t !== null)) {
              if (
                ((n.flags |= 128),
                (a = !0),
                (i = t.updateQueue),
                i !== null && ((n.updateQueue = i), (n.flags |= 4)),
                Oi(d, !0),
                d.tail === null &&
                  d.tailMode === "hidden" &&
                  !E.alternate &&
                  !Je)
              )
                return Mt(n), null;
            } else
              2 * ct() - d.renderingStartTime > Oo &&
                i !== 1073741824 &&
                ((n.flags |= 128), (a = !0), Oi(d, !1), (n.lanes = 4194304));
          d.isBackwards
            ? ((E.sibling = n.child), (n.child = E))
            : ((i = d.last),
              i !== null ? (i.sibling = E) : (n.child = E),
              (d.last = E));
        }
        return d.tail !== null
          ? ((n = d.tail),
            (d.rendering = n),
            (d.tail = n.sibling),
            (d.renderingStartTime = ct()),
            (n.sibling = null),
            (i = tt.current),
            Ke(tt, a ? (i & 1) | 2 : i & 1),
            n)
          : (Mt(n), null);
      case 22:
      case 23:
        return (
          oc(),
          (a = n.memoizedState !== null),
          t !== null && (t.memoizedState !== null) !== a && (n.flags |= 8192),
          a && n.mode & 1
            ? Jt & 1073741824 &&
              (Mt(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Mt(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, n.tag));
  }
  function O0(t, n) {
    switch ((pu(n), n.tag)) {
      case 1:
        return (
          Bt(n.type) && Hs(),
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 3:
        return (
          Ro(),
          Xe(jt),
          Xe(It),
          Ru(),
          (t = n.flags),
          t & 65536 && !(t & 128) ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 5:
        return ku(n), null;
      case 13:
        if (
          (Xe(tt), (t = n.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(o(340));
          xo();
        }
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 19:
        return Xe(tt), null;
      case 4:
        return Ro(), null;
      case 10:
        return Su(n.type._context), null;
      case 22:
      case 23:
        return oc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1,
    _t = !1,
    M0 = typeof WeakSet == "function" ? WeakSet : Set,
    ue = null;
  function To(t, n) {
    var i = t.ref;
    if (i !== null)
      if (typeof i == "function")
        try {
          i(null);
        } catch (a) {
          ot(t, n, a);
        }
      else i.current = null;
  }
  function qu(t, n, i) {
    try {
      i();
    } catch (a) {
      ot(t, n, a);
    }
  }
  var vm = !1;
  function _0(t, n) {
    if (((ou = Ms), (t = Yd()), Ya(t))) {
      if ("selectionStart" in t)
        var i = { start: t.selectionStart, end: t.selectionEnd };
      else
        e: {
          i = ((i = t.ownerDocument) && i.defaultView) || window;
          var a = i.getSelection && i.getSelection();
          if (a && a.rangeCount !== 0) {
            i = a.anchorNode;
            var c = a.anchorOffset,
              d = a.focusNode;
            a = a.focusOffset;
            try {
              i.nodeType, d.nodeType;
            } catch {
              i = null;
              break e;
            }
            var E = 0,
              $ = -1,
              F = -1,
              Q = 0,
              ne = 0,
              re = t,
              ee = null;
            t: for (;;) {
              for (
                var ae;
                re !== i || (c !== 0 && re.nodeType !== 3) || ($ = E + c),
                  re !== d || (a !== 0 && re.nodeType !== 3) || (F = E + a),
                  re.nodeType === 3 && (E += re.nodeValue.length),
                  (ae = re.firstChild) !== null;

              )
                (ee = re), (re = ae);
              for (;;) {
                if (re === t) break t;
                if (
                  (ee === i && ++Q === c && ($ = E),
                  ee === d && ++ne === a && (F = E),
                  (ae = re.nextSibling) !== null)
                )
                  break;
                (re = ee), (ee = re.parentNode);
              }
              re = ae;
            }
            i = $ === -1 || F === -1 ? null : { start: $, end: F };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      iu = { focusedElem: t, selectionRange: i }, Ms = !1, ue = n;
      ue !== null;

    )
      if (
        ((n = ue), (t = n.child), (n.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = n), (ue = t);
      else
        for (; ue !== null; ) {
          n = ue;
          try {
            var fe = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (fe !== null) {
                    var de = fe.memoizedProps,
                      ft = fe.memoizedState,
                      U = n.stateNode,
                      D = U.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? de : yn(n.type, de),
                        ft,
                      );
                    U.__reactInternalSnapshotBeforeUpdate = D;
                  }
                  break;
                case 3:
                  var W = n.stateNode.containerInfo;
                  W.nodeType === 1
                    ? (W.textContent = "")
                    : W.nodeType === 9 &&
                      W.documentElement &&
                      W.removeChild(W.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (oe) {
            ot(n, n.return, oe);
          }
          if (((t = n.sibling), t !== null)) {
            (t.return = n.return), (ue = t);
            break;
          }
          ue = n.return;
        }
    return (fe = vm), (vm = !1), fe;
  }
  function Mi(t, n, i) {
    var a = n.updateQueue;
    if (((a = a !== null ? a.lastEffect : null), a !== null)) {
      var c = (a = a.next);
      do {
        if ((c.tag & t) === t) {
          var d = c.destroy;
          (c.destroy = void 0), d !== void 0 && qu(n, i, d);
        }
        c = c.next;
      } while (c !== a);
    }
  }
  function dl(t, n) {
    if (
      ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
    ) {
      var i = (n = n.next);
      do {
        if ((i.tag & t) === t) {
          var a = i.create;
          i.destroy = a();
        }
        i = i.next;
      } while (i !== n);
    }
  }
  function Qu(t) {
    var n = t.ref;
    if (n !== null) {
      var i = t.stateNode;
      switch (t.tag) {
        case 5:
          t = i;
          break;
        default:
          t = i;
      }
      typeof n == "function" ? n(t) : (n.current = t);
    }
  }
  function Sm(t) {
    var n = t.alternate;
    n !== null && ((t.alternate = null), Sm(n)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 &&
        ((n = t.stateNode),
        n !== null &&
          (delete n[In],
          delete n[wi],
          delete n[uu],
          delete n[m0],
          delete n[h0])),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  function wm(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function Cm(t) {
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || wm(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Ku(t, n, i) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        n
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(t, n)
            : i.insertBefore(t, n)
          : (i.nodeType === 8
              ? ((n = i.parentNode), n.insertBefore(t, i))
              : ((n = i), n.appendChild(t)),
            (i = i._reactRootContainer),
            i != null || n.onclick !== null || (n.onclick = Ws));
    else if (a !== 4 && ((t = t.child), t !== null))
      for (Ku(t, n, i), t = t.sibling; t !== null; )
        Ku(t, n, i), (t = t.sibling);
  }
  function Gu(t, n, i) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), n ? i.insertBefore(t, n) : i.appendChild(t);
    else if (a !== 4 && ((t = t.child), t !== null))
      for (Gu(t, n, i), t = t.sibling; t !== null; )
        Gu(t, n, i), (t = t.sibling);
  }
  var bt = null,
    vn = !1;
  function Cr(t, n, i) {
    for (i = i.child; i !== null; ) xm(t, n, i), (i = i.sibling);
  }
  function xm(t, n, i) {
    if (Tn && typeof Tn.onCommitFiberUnmount == "function")
      try {
        Tn.onCommitFiberUnmount(Es, i);
      } catch {}
    switch (i.tag) {
      case 5:
        _t || To(i, n);
      case 6:
        var a = bt,
          c = vn;
        (bt = null),
          Cr(t, n, i),
          (bt = a),
          (vn = c),
          bt !== null &&
            (vn
              ? ((t = bt),
                (i = i.stateNode),
                t.nodeType === 8
                  ? t.parentNode.removeChild(i)
                  : t.removeChild(i))
              : bt.removeChild(i.stateNode));
        break;
      case 18:
        bt !== null &&
          (vn
            ? ((t = bt),
              (i = i.stateNode),
              t.nodeType === 8
                ? au(t.parentNode, i)
                : t.nodeType === 1 && au(t, i),
              ui(t))
            : au(bt, i.stateNode));
        break;
      case 4:
        (a = bt),
          (c = vn),
          (bt = i.stateNode.containerInfo),
          (vn = !0),
          Cr(t, n, i),
          (bt = a),
          (vn = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !_t &&
          ((a = i.updateQueue), a !== null && ((a = a.lastEffect), a !== null))
        ) {
          c = a = a.next;
          do {
            var d = c,
              E = d.destroy;
            (d = d.tag),
              E !== void 0 && (d & 2 || d & 4) && qu(i, n, E),
              (c = c.next);
          } while (c !== a);
        }
        Cr(t, n, i);
        break;
      case 1:
        if (
          !_t &&
          (To(i, n),
          (a = i.stateNode),
          typeof a.componentWillUnmount == "function")
        )
          try {
            (a.props = i.memoizedProps),
              (a.state = i.memoizedState),
              a.componentWillUnmount();
          } catch ($) {
            ot(i, n, $);
          }
        Cr(t, n, i);
        break;
      case 21:
        Cr(t, n, i);
        break;
      case 22:
        i.mode & 1
          ? ((_t = (a = _t) || i.memoizedState !== null), Cr(t, n, i), (_t = a))
          : Cr(t, n, i);
        break;
      default:
        Cr(t, n, i);
    }
  }
  function bm(t) {
    var n = t.updateQueue;
    if (n !== null) {
      t.updateQueue = null;
      var i = t.stateNode;
      i === null && (i = t.stateNode = new M0()),
        n.forEach(function (a) {
          var c = B0.bind(null, t, a);
          i.has(a) || (i.add(a), a.then(c, c));
        });
    }
  }
  function Sn(t, n) {
    var i = n.deletions;
    if (i !== null)
      for (var a = 0; a < i.length; a++) {
        var c = i[a];
        try {
          var d = t,
            E = n,
            $ = E;
          e: for (; $ !== null; ) {
            switch ($.tag) {
              case 5:
                (bt = $.stateNode), (vn = !1);
                break e;
              case 3:
                (bt = $.stateNode.containerInfo), (vn = !0);
                break e;
              case 4:
                (bt = $.stateNode.containerInfo), (vn = !0);
                break e;
            }
            $ = $.return;
          }
          if (bt === null) throw Error(o(160));
          xm(d, E, c), (bt = null), (vn = !1);
          var F = c.alternate;
          F !== null && (F.return = null), (c.return = null);
        } catch (Q) {
          ot(c, n, Q);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; ) km(n, t), (n = n.sibling);
  }
  function km(t, n) {
    var i = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Sn(n, t), _n(t), a & 4)) {
          try {
            Mi(3, t, t.return), dl(3, t);
          } catch (de) {
            ot(t, t.return, de);
          }
          try {
            Mi(5, t, t.return);
          } catch (de) {
            ot(t, t.return, de);
          }
        }
        break;
      case 1:
        Sn(n, t), _n(t), a & 512 && i !== null && To(i, i.return);
        break;
      case 5:
        if (
          (Sn(n, t),
          _n(t),
          a & 512 && i !== null && To(i, i.return),
          t.flags & 32)
        ) {
          var c = t.stateNode;
          try {
            Kt(c, "");
          } catch (de) {
            ot(t, t.return, de);
          }
        }
        if (a & 4 && ((c = t.stateNode), c != null)) {
          var d = t.memoizedProps,
            E = i !== null ? i.memoizedProps : d,
            $ = t.type,
            F = t.updateQueue;
          if (((t.updateQueue = null), F !== null))
            try {
              $ === "input" && d.type === "radio" && d.name != null && Tt(c, d),
                ut($, E);
              var Q = ut($, d);
              for (E = 0; E < F.length; E += 2) {
                var ne = F[E],
                  re = F[E + 1];
                ne === "style"
                  ? Zo(c, re)
                  : ne === "dangerouslySetInnerHTML"
                    ? Hn(c, re)
                    : ne === "children"
                      ? Kt(c, re)
                      : v(c, ne, re, Q);
              }
              switch ($) {
                case "input":
                  ht(c, d);
                  break;
                case "textarea":
                  xt(c, d);
                  break;
                case "select":
                  var ee = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var ae = d.value;
                  ae != null
                    ? Qe(c, !!d.multiple, ae, !1)
                    : ee !== !!d.multiple &&
                      (d.defaultValue != null
                        ? Qe(c, !!d.multiple, d.defaultValue, !0)
                        : Qe(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[wi] = d;
            } catch (de) {
              ot(t, t.return, de);
            }
        }
        break;
      case 6:
        if ((Sn(n, t), _n(t), a & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          (c = t.stateNode), (d = t.memoizedProps);
          try {
            c.nodeValue = d;
          } catch (de) {
            ot(t, t.return, de);
          }
        }
        break;
      case 3:
        if (
          (Sn(n, t), _n(t), a & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            ui(n.containerInfo);
          } catch (de) {
            ot(t, t.return, de);
          }
        break;
      case 4:
        Sn(n, t), _n(t);
        break;
      case 13:
        Sn(n, t),
          _n(t),
          (c = t.child),
          c.flags & 8192 &&
            ((d = c.memoizedState !== null),
            (c.stateNode.isHidden = d),
            !d ||
              (c.alternate !== null && c.alternate.memoizedState !== null) ||
              (Ju = ct())),
          a & 4 && bm(t);
        break;
      case 22:
        if (
          ((ne = i !== null && i.memoizedState !== null),
          t.mode & 1 ? ((_t = (Q = _t) || ne), Sn(n, t), (_t = Q)) : Sn(n, t),
          _n(t),
          a & 8192)
        ) {
          if (
            ((Q = t.memoizedState !== null),
            (t.stateNode.isHidden = Q) && !ne && t.mode & 1)
          )
            for (ue = t, ne = t.child; ne !== null; ) {
              for (re = ue = ne; ue !== null; ) {
                switch (((ee = ue), (ae = ee.child), ee.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Mi(4, ee, ee.return);
                    break;
                  case 1:
                    To(ee, ee.return);
                    var fe = ee.stateNode;
                    if (typeof fe.componentWillUnmount == "function") {
                      (a = ee), (i = ee.return);
                      try {
                        (n = a),
                          (fe.props = n.memoizedProps),
                          (fe.state = n.memoizedState),
                          fe.componentWillUnmount();
                      } catch (de) {
                        ot(a, i, de);
                      }
                    }
                    break;
                  case 5:
                    To(ee, ee.return);
                    break;
                  case 22:
                    if (ee.memoizedState !== null) {
                      Pm(re);
                      continue;
                    }
                }
                ae !== null ? ((ae.return = ee), (ue = ae)) : Pm(re);
              }
              ne = ne.sibling;
            }
          e: for (ne = null, re = t; ; ) {
            if (re.tag === 5) {
              if (ne === null) {
                ne = re;
                try {
                  (c = re.stateNode),
                    Q
                      ? ((d = c.style),
                        typeof d.setProperty == "function"
                          ? d.setProperty("display", "none", "important")
                          : (d.display = "none"))
                      : (($ = re.stateNode),
                        (F = re.memoizedProps.style),
                        (E =
                          F != null && F.hasOwnProperty("display")
                            ? F.display
                            : null),
                        ($.style.display = ar("display", E)));
                } catch (de) {
                  ot(t, t.return, de);
                }
              }
            } else if (re.tag === 6) {
              if (ne === null)
                try {
                  re.stateNode.nodeValue = Q ? "" : re.memoizedProps;
                } catch (de) {
                  ot(t, t.return, de);
                }
            } else if (
              ((re.tag !== 22 && re.tag !== 23) ||
                re.memoizedState === null ||
                re === t) &&
              re.child !== null
            ) {
              (re.child.return = re), (re = re.child);
              continue;
            }
            if (re === t) break e;
            for (; re.sibling === null; ) {
              if (re.return === null || re.return === t) break e;
              ne === re && (ne = null), (re = re.return);
            }
            ne === re && (ne = null),
              (re.sibling.return = re.return),
              (re = re.sibling);
          }
        }
        break;
      case 19:
        Sn(n, t), _n(t), a & 4 && bm(t);
        break;
      case 21:
        break;
      default:
        Sn(n, t), _n(t);
    }
  }
  function _n(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        e: {
          for (var i = t.return; i !== null; ) {
            if (wm(i)) {
              var a = i;
              break e;
            }
            i = i.return;
          }
          throw Error(o(160));
        }
        switch (a.tag) {
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (Kt(c, ""), (a.flags &= -33));
            var d = Cm(t);
            Gu(t, d, c);
            break;
          case 3:
          case 4:
            var E = a.stateNode.containerInfo,
              $ = Cm(t);
            Ku(t, $, E);
            break;
          default:
            throw Error(o(161));
        }
      } catch (F) {
        ot(t, t.return, F);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function $0(t, n, i) {
    (ue = t), Em(t);
  }
  function Em(t, n, i) {
    for (var a = (t.mode & 1) !== 0; ue !== null; ) {
      var c = ue,
        d = c.child;
      if (c.tag === 22 && a) {
        var E = c.memoizedState !== null || fl;
        if (!E) {
          var $ = c.alternate,
            F = ($ !== null && $.memoizedState !== null) || _t;
          $ = fl;
          var Q = _t;
          if (((fl = E), (_t = F) && !Q))
            for (ue = c; ue !== null; )
              (E = ue),
                (F = E.child),
                E.tag === 22 && E.memoizedState !== null
                  ? Tm(c)
                  : F !== null
                    ? ((F.return = E), (ue = F))
                    : Tm(c);
          for (; d !== null; ) (ue = d), Em(d), (d = d.sibling);
          (ue = c), (fl = $), (_t = Q);
        }
        Rm(t);
      } else
        c.subtreeFlags & 8772 && d !== null
          ? ((d.return = c), (ue = d))
          : Rm(t);
    }
  }
  function Rm(t) {
    for (; ue !== null; ) {
      var n = ue;
      if (n.flags & 8772) {
        var i = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                _t || dl(5, n);
                break;
              case 1:
                var a = n.stateNode;
                if (n.flags & 4 && !_t)
                  if (i === null) a.componentDidMount();
                  else {
                    var c =
                      n.elementType === n.type
                        ? i.memoizedProps
                        : yn(n.type, i.memoizedProps);
                    a.componentDidUpdate(
                      c,
                      i.memoizedState,
                      a.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var d = n.updateQueue;
                d !== null && Pp(n, d, a);
                break;
              case 3:
                var E = n.updateQueue;
                if (E !== null) {
                  if (((i = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        i = n.child.stateNode;
                        break;
                      case 1:
                        i = n.child.stateNode;
                    }
                  Pp(n, E, i);
                }
                break;
              case 5:
                var $ = n.stateNode;
                if (i === null && n.flags & 4) {
                  i = $;
                  var F = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      F.autoFocus && i.focus();
                      break;
                    case "img":
                      F.src && (i.src = F.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var Q = n.alternate;
                  if (Q !== null) {
                    var ne = Q.memoizedState;
                    if (ne !== null) {
                      var re = ne.dehydrated;
                      re !== null && ui(re);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          _t || (n.flags & 512 && Qu(n));
        } catch (ee) {
          ot(n, n.return, ee);
        }
      }
      if (n === t) {
        ue = null;
        break;
      }
      if (((i = n.sibling), i !== null)) {
        (i.return = n.return), (ue = i);
        break;
      }
      ue = n.return;
    }
  }
  function Pm(t) {
    for (; ue !== null; ) {
      var n = ue;
      if (n === t) {
        ue = null;
        break;
      }
      var i = n.sibling;
      if (i !== null) {
        (i.return = n.return), (ue = i);
        break;
      }
      ue = n.return;
    }
  }
  function Tm(t) {
    for (; ue !== null; ) {
      var n = ue;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var i = n.return;
            try {
              dl(4, n);
            } catch (F) {
              ot(n, i, F);
            }
            break;
          case 1:
            var a = n.stateNode;
            if (typeof a.componentDidMount == "function") {
              var c = n.return;
              try {
                a.componentDidMount();
              } catch (F) {
                ot(n, c, F);
              }
            }
            var d = n.return;
            try {
              Qu(n);
            } catch (F) {
              ot(n, d, F);
            }
            break;
          case 5:
            var E = n.return;
            try {
              Qu(n);
            } catch (F) {
              ot(n, E, F);
            }
        }
      } catch (F) {
        ot(n, n.return, F);
      }
      if (n === t) {
        ue = null;
        break;
      }
      var $ = n.sibling;
      if ($ !== null) {
        ($.return = n.return), (ue = $);
        break;
      }
      ue = n.return;
    }
  }
  var N0 = Math.ceil,
    pl = x.ReactCurrentDispatcher,
    Yu = x.ReactCurrentOwner,
    ln = x.ReactCurrentBatchConfig,
    Oe = 0,
    St = null,
    pt = null,
    kt = 0,
    Jt = 0,
    Io = gr(0),
    yt = 0,
    _i = null,
    Wr = 0,
    ml = 0,
    Xu = 0,
    $i = null,
    Wt = null,
    Ju = 0,
    Oo = 1 / 0,
    Zn = null,
    hl = !1,
    Zu = null,
    xr = null,
    gl = !1,
    br = null,
    yl = 0,
    Ni = 0,
    ec = null,
    vl = -1,
    Sl = 0;
  function zt() {
    return Oe & 6 ? ct() : vl !== -1 ? vl : (vl = ct());
  }
  function kr(t) {
    return t.mode & 1
      ? Oe & 2 && kt !== 0
        ? kt & -kt
        : y0.transition !== null
          ? (Sl === 0 && (Sl = Cd()), Sl)
          : ((t = De),
            t !== 0 ||
              ((t = window.event), (t = t === void 0 ? 16 : Od(t.type))),
            t)
      : 1;
  }
  function wn(t, n, i, a) {
    if (50 < Ni) throw ((Ni = 0), (ec = null), Error(o(185)));
    oi(t, i, a),
      (!(Oe & 2) || t !== St) &&
        (t === St && (!(Oe & 2) && (ml |= i), yt === 4 && Er(t, kt)),
        Vt(t, a),
        i === 1 &&
          Oe === 0 &&
          !(n.mode & 1) &&
          ((Oo = ct() + 500), Qs && vr()));
  }
  function Vt(t, n) {
    var i = t.callbackNode;
    yv(t, n);
    var a = Ts(t, t === St ? kt : 0);
    if (a === 0)
      i !== null && vd(i), (t.callbackNode = null), (t.callbackPriority = 0);
    else if (((n = a & -a), t.callbackPriority !== n)) {
      if ((i != null && vd(i), n === 1))
        t.tag === 0 ? g0(Om.bind(null, t)) : hp(Om.bind(null, t)),
          d0(function () {
            !(Oe & 6) && vr();
          }),
          (i = null);
      else {
        switch (xd(a)) {
          case 1:
            i = $a;
            break;
          case 4:
            i = Sd;
            break;
          case 16:
            i = ks;
            break;
          case 536870912:
            i = wd;
            break;
          default:
            i = ks;
        }
        i = Fm(i, Im.bind(null, t));
      }
      (t.callbackPriority = n), (t.callbackNode = i);
    }
  }
  function Im(t, n) {
    if (((vl = -1), (Sl = 0), Oe & 6)) throw Error(o(327));
    var i = t.callbackNode;
    if (Mo() && t.callbackNode !== i) return null;
    var a = Ts(t, t === St ? kt : 0);
    if (a === 0) return null;
    if (a & 30 || a & t.expiredLanes || n) n = wl(t, a);
    else {
      n = a;
      var c = Oe;
      Oe |= 2;
      var d = _m();
      (St !== t || kt !== n) && ((Zn = null), (Oo = ct() + 500), Hr(t, n));
      do
        try {
          L0();
          break;
        } catch ($) {
          Mm(t, $);
        }
      while (!0);
      vu(),
        (pl.current = d),
        (Oe = c),
        pt !== null ? (n = 0) : ((St = null), (kt = 0), (n = yt));
    }
    if (n !== 0) {
      if (
        (n === 2 && ((c = Na(t)), c !== 0 && ((a = c), (n = tc(t, c)))),
        n === 1)
      )
        throw ((i = _i), Hr(t, 0), Er(t, a), Vt(t, ct()), i);
      if (n === 6) Er(t, a);
      else {
        if (
          ((c = t.current.alternate),
          !(a & 30) &&
            !A0(c) &&
            ((n = wl(t, a)),
            n === 2 && ((d = Na(t)), d !== 0 && ((a = d), (n = tc(t, d)))),
            n === 1))
        )
          throw ((i = _i), Hr(t, 0), Er(t, a), Vt(t, ct()), i);
        switch (((t.finishedWork = c), (t.finishedLanes = a), n)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            qr(t, Wt, Zn);
            break;
          case 3:
            if (
              (Er(t, a),
              (a & 130023424) === a && ((n = Ju + 500 - ct()), 10 < n))
            ) {
              if (Ts(t, 0) !== 0) break;
              if (((c = t.suspendedLanes), (c & a) !== a)) {
                zt(), (t.pingedLanes |= t.suspendedLanes & c);
                break;
              }
              t.timeoutHandle = lu(qr.bind(null, t, Wt, Zn), n);
              break;
            }
            qr(t, Wt, Zn);
            break;
          case 4:
            if ((Er(t, a), (a & 4194240) === a)) break;
            for (n = t.eventTimes, c = -1; 0 < a; ) {
              var E = 31 - mn(a);
              (d = 1 << E), (E = n[E]), E > c && (c = E), (a &= ~d);
            }
            if (
              ((a = c),
              (a = ct() - a),
              (a =
                (120 > a
                  ? 120
                  : 480 > a
                    ? 480
                    : 1080 > a
                      ? 1080
                      : 1920 > a
                        ? 1920
                        : 3e3 > a
                          ? 3e3
                          : 4320 > a
                            ? 4320
                            : 1960 * N0(a / 1960)) - a),
              10 < a)
            ) {
              t.timeoutHandle = lu(qr.bind(null, t, Wt, Zn), a);
              break;
            }
            qr(t, Wt, Zn);
            break;
          case 5:
            qr(t, Wt, Zn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Vt(t, ct()), t.callbackNode === i ? Im.bind(null, t) : null;
  }
  function tc(t, n) {
    var i = $i;
    return (
      t.current.memoizedState.isDehydrated && (Hr(t, n).flags |= 256),
      (t = wl(t, n)),
      t !== 2 && ((n = Wt), (Wt = i), n !== null && nc(n)),
      t
    );
  }
  function nc(t) {
    Wt === null ? (Wt = t) : Wt.push.apply(Wt, t);
  }
  function A0(t) {
    for (var n = t; ; ) {
      if (n.flags & 16384) {
        var i = n.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var a = 0; a < i.length; a++) {
            var c = i[a],
              d = c.getSnapshot;
            c = c.value;
            try {
              if (!hn(d(), c)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((i = n.child), n.subtreeFlags & 16384 && i !== null))
        (i.return = n), (n = i);
      else {
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Er(t, n) {
    for (
      n &= ~Xu,
        n &= ~ml,
        t.suspendedLanes |= n,
        t.pingedLanes &= ~n,
        t = t.expirationTimes;
      0 < n;

    ) {
      var i = 31 - mn(n),
        a = 1 << i;
      (t[i] = -1), (n &= ~a);
    }
  }
  function Om(t) {
    if (Oe & 6) throw Error(o(327));
    Mo();
    var n = Ts(t, 0);
    if (!(n & 1)) return Vt(t, ct()), null;
    var i = wl(t, n);
    if (t.tag !== 0 && i === 2) {
      var a = Na(t);
      a !== 0 && ((n = a), (i = tc(t, a)));
    }
    if (i === 1) throw ((i = _i), Hr(t, 0), Er(t, n), Vt(t, ct()), i);
    if (i === 6) throw Error(o(345));
    return (
      (t.finishedWork = t.current.alternate),
      (t.finishedLanes = n),
      qr(t, Wt, Zn),
      Vt(t, ct()),
      null
    );
  }
  function rc(t, n) {
    var i = Oe;
    Oe |= 1;
    try {
      return t(n);
    } finally {
      (Oe = i), Oe === 0 && ((Oo = ct() + 500), Qs && vr());
    }
  }
  function Vr(t) {
    br !== null && br.tag === 0 && !(Oe & 6) && Mo();
    var n = Oe;
    Oe |= 1;
    var i = ln.transition,
      a = De;
    try {
      if (((ln.transition = null), (De = 1), t)) return t();
    } finally {
      (De = a), (ln.transition = i), (Oe = n), !(Oe & 6) && vr();
    }
  }
  function oc() {
    (Jt = Io.current), Xe(Io);
  }
  function Hr(t, n) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var i = t.timeoutHandle;
    if ((i !== -1 && ((t.timeoutHandle = -1), f0(i)), pt !== null))
      for (i = pt.return; i !== null; ) {
        var a = i;
        switch ((pu(a), a.tag)) {
          case 1:
            (a = a.type.childContextTypes), a != null && Hs();
            break;
          case 3:
            Ro(), Xe(jt), Xe(It), Ru();
            break;
          case 5:
            ku(a);
            break;
          case 4:
            Ro();
            break;
          case 13:
            Xe(tt);
            break;
          case 19:
            Xe(tt);
            break;
          case 10:
            Su(a.type._context);
            break;
          case 22:
          case 23:
            oc();
        }
        i = i.return;
      }
    if (
      ((St = t),
      (pt = t = Rr(t.current, null)),
      (kt = Jt = n),
      (yt = 0),
      (_i = null),
      (Xu = ml = Wr = 0),
      (Wt = $i = null),
      jr !== null)
    ) {
      for (n = 0; n < jr.length; n++)
        if (((i = jr[n]), (a = i.interleaved), a !== null)) {
          i.interleaved = null;
          var c = a.next,
            d = i.pending;
          if (d !== null) {
            var E = d.next;
            (d.next = c), (a.next = E);
          }
          i.pending = a;
        }
      jr = null;
    }
    return t;
  }
  function Mm(t, n) {
    do {
      var i = pt;
      try {
        if ((vu(), (rl.current = ll), ol)) {
          for (var a = nt.memoizedState; a !== null; ) {
            var c = a.queue;
            c !== null && (c.pending = null), (a = a.next);
          }
          ol = !1;
        }
        if (
          ((Ur = 0),
          (vt = gt = nt = null),
          (Ri = !1),
          (Pi = 0),
          (Yu.current = null),
          i === null || i.return === null)
        ) {
          (yt = 1), (_i = n), (pt = null);
          break;
        }
        e: {
          var d = t,
            E = i.return,
            $ = i,
            F = n;
          if (
            ((n = kt),
            ($.flags |= 32768),
            F !== null && typeof F == "object" && typeof F.then == "function")
          ) {
            var Q = F,
              ne = $,
              re = ne.tag;
            if (!(ne.mode & 1) && (re === 0 || re === 11 || re === 15)) {
              var ee = ne.alternate;
              ee
                ? ((ne.updateQueue = ee.updateQueue),
                  (ne.memoizedState = ee.memoizedState),
                  (ne.lanes = ee.lanes))
                : ((ne.updateQueue = null), (ne.memoizedState = null));
            }
            var ae = nm(E);
            if (ae !== null) {
              (ae.flags &= -257),
                rm(ae, E, $, d, n),
                ae.mode & 1 && tm(d, Q, n),
                (n = ae),
                (F = Q);
              var fe = n.updateQueue;
              if (fe === null) {
                var de = new Set();
                de.add(F), (n.updateQueue = de);
              } else fe.add(F);
              break e;
            } else {
              if (!(n & 1)) {
                tm(d, Q, n), ic();
                break e;
              }
              F = Error(o(426));
            }
          } else if (Je && $.mode & 1) {
            var ft = nm(E);
            if (ft !== null) {
              !(ft.flags & 65536) && (ft.flags |= 256),
                rm(ft, E, $, d, n),
                gu(Po(F, $));
              break e;
            }
          }
          (d = F = Po(F, $)),
            yt !== 4 && (yt = 2),
            $i === null ? ($i = [d]) : $i.push(d),
            (d = E);
          do {
            switch (d.tag) {
              case 3:
                (d.flags |= 65536), (n &= -n), (d.lanes |= n);
                var U = Zp(d, F, n);
                Rp(d, U);
                break e;
              case 1:
                $ = F;
                var D = d.type,
                  W = d.stateNode;
                if (
                  !(d.flags & 128) &&
                  (typeof D.getDerivedStateFromError == "function" ||
                    (W !== null &&
                      typeof W.componentDidCatch == "function" &&
                      (xr === null || !xr.has(W))))
                ) {
                  (d.flags |= 65536), (n &= -n), (d.lanes |= n);
                  var oe = em(d, $, n);
                  Rp(d, oe);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Nm(i);
      } catch (me) {
        (n = me), pt === i && i !== null && (pt = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function _m() {
    var t = pl.current;
    return (pl.current = ll), t === null ? ll : t;
  }
  function ic() {
    (yt === 0 || yt === 3 || yt === 2) && (yt = 4),
      St === null || (!(Wr & 268435455) && !(ml & 268435455)) || Er(St, kt);
  }
  function wl(t, n) {
    var i = Oe;
    Oe |= 2;
    var a = _m();
    (St !== t || kt !== n) && ((Zn = null), Hr(t, n));
    do
      try {
        z0();
        break;
      } catch (c) {
        Mm(t, c);
      }
    while (!0);
    if ((vu(), (Oe = i), (pl.current = a), pt !== null)) throw Error(o(261));
    return (St = null), (kt = 0), yt;
  }
  function z0() {
    for (; pt !== null; ) $m(pt);
  }
  function L0() {
    for (; pt !== null && !av(); ) $m(pt);
  }
  function $m(t) {
    var n = Lm(t.alternate, t, Jt);
    (t.memoizedProps = t.pendingProps),
      n === null ? Nm(t) : (pt = n),
      (Yu.current = null);
  }
  function Nm(t) {
    var n = t;
    do {
      var i = n.alternate;
      if (((t = n.return), n.flags & 32768)) {
        if (((i = O0(i, n)), i !== null)) {
          (i.flags &= 32767), (pt = i);
          return;
        }
        if (t !== null)
          (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
        else {
          (yt = 6), (pt = null);
          return;
        }
      } else if (((i = I0(i, n, Jt)), i !== null)) {
        pt = i;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        pt = n;
        return;
      }
      pt = n = t;
    } while (n !== null);
    yt === 0 && (yt = 5);
  }
  function qr(t, n, i) {
    var a = De,
      c = ln.transition;
    try {
      (ln.transition = null), (De = 1), F0(t, n, i, a);
    } finally {
      (ln.transition = c), (De = a);
    }
    return null;
  }
  function F0(t, n, i, a) {
    do Mo();
    while (br !== null);
    if (Oe & 6) throw Error(o(327));
    i = t.finishedWork;
    var c = t.finishedLanes;
    if (i === null) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), i === t.current))
      throw Error(o(177));
    (t.callbackNode = null), (t.callbackPriority = 0);
    var d = i.lanes | i.childLanes;
    if (
      (vv(t, d),
      t === St && ((pt = St = null), (kt = 0)),
      (!(i.subtreeFlags & 2064) && !(i.flags & 2064)) ||
        gl ||
        ((gl = !0),
        Fm(ks, function () {
          return Mo(), null;
        })),
      (d = (i.flags & 15990) !== 0),
      i.subtreeFlags & 15990 || d)
    ) {
      (d = ln.transition), (ln.transition = null);
      var E = De;
      De = 1;
      var $ = Oe;
      (Oe |= 4),
        (Yu.current = null),
        _0(t, i),
        km(i, t),
        o0(iu),
        (Ms = !!ou),
        (iu = ou = null),
        (t.current = i),
        $0(i),
        uv(),
        (Oe = $),
        (De = E),
        (ln.transition = d);
    } else t.current = i;
    if (
      (gl && ((gl = !1), (br = t), (yl = c)),
      (d = t.pendingLanes),
      d === 0 && (xr = null),
      dv(i.stateNode),
      Vt(t, ct()),
      n !== null)
    )
      for (a = t.onRecoverableError, i = 0; i < n.length; i++)
        (c = n[i]), a(c.value, { componentStack: c.stack, digest: c.digest });
    if (hl) throw ((hl = !1), (t = Zu), (Zu = null), t);
    return (
      yl & 1 && t.tag !== 0 && Mo(),
      (d = t.pendingLanes),
      d & 1 ? (t === ec ? Ni++ : ((Ni = 0), (ec = t))) : (Ni = 0),
      vr(),
      null
    );
  }
  function Mo() {
    if (br !== null) {
      var t = xd(yl),
        n = ln.transition,
        i = De;
      try {
        if (((ln.transition = null), (De = 16 > t ? 16 : t), br === null))
          var a = !1;
        else {
          if (((t = br), (br = null), (yl = 0), Oe & 6)) throw Error(o(331));
          var c = Oe;
          for (Oe |= 4, ue = t.current; ue !== null; ) {
            var d = ue,
              E = d.child;
            if (ue.flags & 16) {
              var $ = d.deletions;
              if ($ !== null) {
                for (var F = 0; F < $.length; F++) {
                  var Q = $[F];
                  for (ue = Q; ue !== null; ) {
                    var ne = ue;
                    switch (ne.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mi(8, ne, d);
                    }
                    var re = ne.child;
                    if (re !== null) (re.return = ne), (ue = re);
                    else
                      for (; ue !== null; ) {
                        ne = ue;
                        var ee = ne.sibling,
                          ae = ne.return;
                        if ((Sm(ne), ne === Q)) {
                          ue = null;
                          break;
                        }
                        if (ee !== null) {
                          (ee.return = ae), (ue = ee);
                          break;
                        }
                        ue = ae;
                      }
                  }
                }
                var fe = d.alternate;
                if (fe !== null) {
                  var de = fe.child;
                  if (de !== null) {
                    fe.child = null;
                    do {
                      var ft = de.sibling;
                      (de.sibling = null), (de = ft);
                    } while (de !== null);
                  }
                }
                ue = d;
              }
            }
            if (d.subtreeFlags & 2064 && E !== null) (E.return = d), (ue = E);
            else
              e: for (; ue !== null; ) {
                if (((d = ue), d.flags & 2048))
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mi(9, d, d.return);
                  }
                var U = d.sibling;
                if (U !== null) {
                  (U.return = d.return), (ue = U);
                  break e;
                }
                ue = d.return;
              }
          }
          var D = t.current;
          for (ue = D; ue !== null; ) {
            E = ue;
            var W = E.child;
            if (E.subtreeFlags & 2064 && W !== null) (W.return = E), (ue = W);
            else
              e: for (E = D; ue !== null; ) {
                if ((($ = ue), $.flags & 2048))
                  try {
                    switch ($.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dl(9, $);
                    }
                  } catch (me) {
                    ot($, $.return, me);
                  }
                if ($ === E) {
                  ue = null;
                  break e;
                }
                var oe = $.sibling;
                if (oe !== null) {
                  (oe.return = $.return), (ue = oe);
                  break e;
                }
                ue = $.return;
              }
          }
          if (
            ((Oe = c),
            vr(),
            Tn && typeof Tn.onPostCommitFiberRoot == "function")
          )
            try {
              Tn.onPostCommitFiberRoot(Es, t);
            } catch {}
          a = !0;
        }
        return a;
      } finally {
        (De = i), (ln.transition = n);
      }
    }
    return !1;
  }
  function Am(t, n, i) {
    (n = Po(i, n)),
      (n = Zp(t, n, 1)),
      (t = wr(t, n, 1)),
      (n = zt()),
      t !== null && (oi(t, 1, n), Vt(t, n));
  }
  function ot(t, n, i) {
    if (t.tag === 3) Am(t, t, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Am(n, t, i);
          break;
        } else if (n.tag === 1) {
          var a = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (xr === null || !xr.has(a)))
          ) {
            (t = Po(i, t)),
              (t = em(n, t, 1)),
              (n = wr(n, t, 1)),
              (t = zt()),
              n !== null && (oi(n, 1, t), Vt(n, t));
            break;
          }
        }
        n = n.return;
      }
  }
  function D0(t, n, i) {
    var a = t.pingCache;
    a !== null && a.delete(n),
      (n = zt()),
      (t.pingedLanes |= t.suspendedLanes & i),
      St === t &&
        (kt & i) === i &&
        (yt === 4 || (yt === 3 && (kt & 130023424) === kt && 500 > ct() - Ju)
          ? Hr(t, 0)
          : (Xu |= i)),
      Vt(t, n);
  }
  function zm(t, n) {
    n === 0 &&
      (t.mode & 1
        ? ((n = Ps), (Ps <<= 1), !(Ps & 130023424) && (Ps = 4194304))
        : (n = 1));
    var i = zt();
    (t = Yn(t, n)), t !== null && (oi(t, n, i), Vt(t, i));
  }
  function j0(t) {
    var n = t.memoizedState,
      i = 0;
    n !== null && (i = n.retryLane), zm(t, i);
  }
  function B0(t, n) {
    var i = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          c = t.memoizedState;
        c !== null && (i = c.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(n), zm(t, i);
  }
  var Lm;
  Lm = function (t, n, i) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps || jt.current) Ut = !0;
      else {
        if (!(t.lanes & i) && !(n.flags & 128)) return (Ut = !1), T0(t, n, i);
        Ut = !!(t.flags & 131072);
      }
    else (Ut = !1), Je && n.flags & 1048576 && gp(n, Gs, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var a = n.type;
        cl(t, n), (t = n.pendingProps);
        var c = So(n, It.current);
        Eo(n, i), (c = Iu(null, n, a, t, c, i));
        var d = Ou();
        return (
          (n.flags |= 1),
          typeof c == "object" &&
          c !== null &&
          typeof c.render == "function" &&
          c.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              Bt(a) ? ((d = !0), qs(n)) : (d = !1),
              (n.memoizedState =
                c.state !== null && c.state !== void 0 ? c.state : null),
              xu(n),
              (c.updater = al),
              (n.stateNode = c),
              (c._reactInternals = n),
              zu(n, a, t, i),
              (n = ju(null, n, a, !0, d, i)))
            : ((n.tag = 0), Je && d && du(n), At(null, n, c, i), (n = n.child)),
          n
        );
      case 16:
        a = n.elementType;
        e: {
          switch (
            (cl(t, n),
            (t = n.pendingProps),
            (c = a._init),
            (a = c(a._payload)),
            (n.type = a),
            (c = n.tag = W0(a)),
            (t = yn(a, t)),
            c)
          ) {
            case 0:
              n = Du(null, n, a, t, i);
              break e;
            case 1:
              n = um(null, n, a, t, i);
              break e;
            case 11:
              n = om(null, n, a, t, i);
              break e;
            case 14:
              n = im(null, n, a, yn(a.type, t), i);
              break e;
          }
          throw Error(o(306, a, ""));
        }
        return n;
      case 0:
        return (
          (a = n.type),
          (c = n.pendingProps),
          (c = n.elementType === a ? c : yn(a, c)),
          Du(t, n, a, c, i)
        );
      case 1:
        return (
          (a = n.type),
          (c = n.pendingProps),
          (c = n.elementType === a ? c : yn(a, c)),
          um(t, n, a, c, i)
        );
      case 3:
        e: {
          if ((cm(n), t === null)) throw Error(o(387));
          (a = n.pendingProps),
            (d = n.memoizedState),
            (c = d.element),
            Ep(t, n),
            tl(n, a, null, i);
          var E = n.memoizedState;
          if (((a = E.element), d.isDehydrated))
            if (
              ((d = {
                element: a,
                isDehydrated: !1,
                cache: E.cache,
                pendingSuspenseBoundaries: E.pendingSuspenseBoundaries,
                transitions: E.transitions,
              }),
              (n.updateQueue.baseState = d),
              (n.memoizedState = d),
              n.flags & 256)
            ) {
              (c = Po(Error(o(423)), n)), (n = fm(t, n, a, i, c));
              break e;
            } else if (a !== c) {
              (c = Po(Error(o(424)), n)), (n = fm(t, n, a, i, c));
              break e;
            } else
              for (
                Xt = hr(n.stateNode.containerInfo.firstChild),
                  Yt = n,
                  Je = !0,
                  gn = null,
                  i = bp(n, null, a, i),
                  n.child = i;
                i;

              )
                (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
          else {
            if ((xo(), a === c)) {
              n = Jn(t, n, i);
              break e;
            }
            At(t, n, a, i);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          Tp(n),
          t === null && hu(n),
          (a = n.type),
          (c = n.pendingProps),
          (d = t !== null ? t.memoizedProps : null),
          (E = c.children),
          su(a, c) ? (E = null) : d !== null && su(a, d) && (n.flags |= 32),
          am(t, n),
          At(t, n, E, i),
          n.child
        );
      case 6:
        return t === null && hu(n), null;
      case 13:
        return dm(t, n, i);
      case 4:
        return (
          bu(n, n.stateNode.containerInfo),
          (a = n.pendingProps),
          t === null ? (n.child = bo(n, null, a, i)) : At(t, n, a, i),
          n.child
        );
      case 11:
        return (
          (a = n.type),
          (c = n.pendingProps),
          (c = n.elementType === a ? c : yn(a, c)),
          om(t, n, a, c, i)
        );
      case 7:
        return At(t, n, n.pendingProps, i), n.child;
      case 8:
        return At(t, n, n.pendingProps.children, i), n.child;
      case 12:
        return At(t, n, n.pendingProps.children, i), n.child;
      case 10:
        e: {
          if (
            ((a = n.type._context),
            (c = n.pendingProps),
            (d = n.memoizedProps),
            (E = c.value),
            Ke(Js, a._currentValue),
            (a._currentValue = E),
            d !== null)
          )
            if (hn(d.value, E)) {
              if (d.children === c.children && !jt.current) {
                n = Jn(t, n, i);
                break e;
              }
            } else
              for (d = n.child, d !== null && (d.return = n); d !== null; ) {
                var $ = d.dependencies;
                if ($ !== null) {
                  E = d.child;
                  for (var F = $.firstContext; F !== null; ) {
                    if (F.context === a) {
                      if (d.tag === 1) {
                        (F = Xn(-1, i & -i)), (F.tag = 2);
                        var Q = d.updateQueue;
                        if (Q !== null) {
                          Q = Q.shared;
                          var ne = Q.pending;
                          ne === null
                            ? (F.next = F)
                            : ((F.next = ne.next), (ne.next = F)),
                            (Q.pending = F);
                        }
                      }
                      (d.lanes |= i),
                        (F = d.alternate),
                        F !== null && (F.lanes |= i),
                        wu(d.return, i, n),
                        ($.lanes |= i);
                      break;
                    }
                    F = F.next;
                  }
                } else if (d.tag === 10) E = d.type === n.type ? null : d.child;
                else if (d.tag === 18) {
                  if (((E = d.return), E === null)) throw Error(o(341));
                  (E.lanes |= i),
                    ($ = E.alternate),
                    $ !== null && ($.lanes |= i),
                    wu(E, i, n),
                    (E = d.sibling);
                } else E = d.child;
                if (E !== null) E.return = d;
                else
                  for (E = d; E !== null; ) {
                    if (E === n) {
                      E = null;
                      break;
                    }
                    if (((d = E.sibling), d !== null)) {
                      (d.return = E.return), (E = d);
                      break;
                    }
                    E = E.return;
                  }
                d = E;
              }
          At(t, n, c.children, i), (n = n.child);
        }
        return n;
      case 9:
        return (
          (c = n.type),
          (a = n.pendingProps.children),
          Eo(n, i),
          (c = on(c)),
          (a = a(c)),
          (n.flags |= 1),
          At(t, n, a, i),
          n.child
        );
      case 14:
        return (
          (a = n.type),
          (c = yn(a, n.pendingProps)),
          (c = yn(a.type, c)),
          im(t, n, a, c, i)
        );
      case 15:
        return sm(t, n, n.type, n.pendingProps, i);
      case 17:
        return (
          (a = n.type),
          (c = n.pendingProps),
          (c = n.elementType === a ? c : yn(a, c)),
          cl(t, n),
          (n.tag = 1),
          Bt(a) ? ((t = !0), qs(n)) : (t = !1),
          Eo(n, i),
          Xp(n, a, c),
          zu(n, a, c, i),
          ju(null, n, a, !0, t, i)
        );
      case 19:
        return mm(t, n, i);
      case 22:
        return lm(t, n, i);
    }
    throw Error(o(156, n.tag));
  };
  function Fm(t, n) {
    return yd(t, n);
  }
  function U0(t, n, i, a) {
    (this.tag = t),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function an(t, n, i, a) {
    return new U0(t, n, i, a);
  }
  function sc(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function W0(t) {
    if (typeof t == "function") return sc(t) ? 1 : 0;
    if (t != null) {
      if (((t = t.$$typeof), t === j)) return 11;
      if (t === V) return 14;
    }
    return 2;
  }
  function Rr(t, n) {
    var i = t.alternate;
    return (
      i === null
        ? ((i = an(t.tag, n, t.key, t.mode)),
          (i.elementType = t.elementType),
          (i.type = t.type),
          (i.stateNode = t.stateNode),
          (i.alternate = t),
          (t.alternate = i))
        : ((i.pendingProps = n),
          (i.type = t.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = t.flags & 14680064),
      (i.childLanes = t.childLanes),
      (i.lanes = t.lanes),
      (i.child = t.child),
      (i.memoizedProps = t.memoizedProps),
      (i.memoizedState = t.memoizedState),
      (i.updateQueue = t.updateQueue),
      (n = t.dependencies),
      (i.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (i.sibling = t.sibling),
      (i.index = t.index),
      (i.ref = t.ref),
      i
    );
  }
  function Cl(t, n, i, a, c, d) {
    var E = 2;
    if (((a = t), typeof t == "function")) sc(t) && (E = 1);
    else if (typeof t == "string") E = 5;
    else
      e: switch (t) {
        case O:
          return Qr(i.children, c, d, n);
        case N:
          (E = 8), (c |= 8);
          break;
        case z:
          return (
            (t = an(12, i, n, c | 2)), (t.elementType = z), (t.lanes = d), t
          );
        case B:
          return (t = an(13, i, n, c)), (t.elementType = B), (t.lanes = d), t;
        case q:
          return (t = an(19, i, n, c)), (t.elementType = q), (t.lanes = d), t;
        case te:
          return xl(i, c, d, n);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case g:
                E = 10;
                break e;
              case A:
                E = 9;
                break e;
              case j:
                E = 11;
                break e;
              case V:
                E = 14;
                break e;
              case Y:
                (E = 16), (a = null);
                break e;
            }
          throw Error(o(130, t == null ? t : typeof t, ""));
      }
    return (
      (n = an(E, i, n, c)), (n.elementType = t), (n.type = a), (n.lanes = d), n
    );
  }
  function Qr(t, n, i, a) {
    return (t = an(7, t, a, n)), (t.lanes = i), t;
  }
  function xl(t, n, i, a) {
    return (
      (t = an(22, t, a, n)),
      (t.elementType = te),
      (t.lanes = i),
      (t.stateNode = { isHidden: !1 }),
      t
    );
  }
  function lc(t, n, i) {
    return (t = an(6, t, null, n)), (t.lanes = i), t;
  }
  function ac(t, n, i) {
    return (
      (n = an(4, t.children !== null ? t.children : [], t.key, n)),
      (n.lanes = i),
      (n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      n
    );
  }
  function V0(t, n, i, a, c) {
    (this.tag = n),
      (this.containerInfo = t),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Aa(0)),
      (this.expirationTimes = Aa(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Aa(0)),
      (this.identifierPrefix = a),
      (this.onRecoverableError = c),
      (this.mutableSourceEagerHydrationData = null);
  }
  function uc(t, n, i, a, c, d, E, $, F) {
    return (
      (t = new V0(t, n, i, $, F)),
      n === 1 ? ((n = 1), d === !0 && (n |= 8)) : (n = 0),
      (d = an(3, null, null, n)),
      (t.current = d),
      (d.stateNode = t),
      (d.memoizedState = {
        element: a,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      xu(d),
      t
    );
  }
  function H0(t, n, i) {
    var a =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: M,
      key: a == null ? null : "" + a,
      children: t,
      containerInfo: n,
      implementation: i,
    };
  }
  function Dm(t) {
    if (!t) return yr;
    t = t._reactInternals;
    e: {
      if (Ar(t) !== t || t.tag !== 1) throw Error(o(170));
      var n = t;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Bt(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(o(171));
    }
    if (t.tag === 1) {
      var i = t.type;
      if (Bt(i)) return pp(t, i, n);
    }
    return n;
  }
  function jm(t, n, i, a, c, d, E, $, F) {
    return (
      (t = uc(i, a, !0, t, c, d, E, $, F)),
      (t.context = Dm(null)),
      (i = t.current),
      (a = zt()),
      (c = kr(i)),
      (d = Xn(a, c)),
      (d.callback = n ?? null),
      wr(i, d, c),
      (t.current.lanes = c),
      oi(t, c, a),
      Vt(t, a),
      t
    );
  }
  function bl(t, n, i, a) {
    var c = n.current,
      d = zt(),
      E = kr(c);
    return (
      (i = Dm(i)),
      n.context === null ? (n.context = i) : (n.pendingContext = i),
      (n = Xn(d, E)),
      (n.payload = { element: t }),
      (a = a === void 0 ? null : a),
      a !== null && (n.callback = a),
      (t = wr(c, n, E)),
      t !== null && (wn(t, c, E, d), el(t, c, E)),
      E
    );
  }
  function kl(t) {
    if (((t = t.current), !t.child)) return null;
    switch (t.child.tag) {
      case 5:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function Bm(t, n) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var i = t.retryLane;
      t.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function cc(t, n) {
    Bm(t, n), (t = t.alternate) && Bm(t, n);
  }
  var Um =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          console.error(t);
        };
  function fc(t) {
    this._internalRoot = t;
  }
  (El.prototype.render = fc.prototype.render =
    function (t) {
      var n = this._internalRoot;
      if (n === null) throw Error(o(409));
      bl(t, n, null, null);
    }),
    (El.prototype.unmount = fc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var n = t.containerInfo;
          Vr(function () {
            bl(null, t, null, null);
          }),
            (n[qn] = null);
        }
      });
  function El(t) {
    this._internalRoot = t;
  }
  El.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var n = Ed();
      t = { blockedOn: null, target: t, priority: n };
      for (var i = 0; i < dr.length && n !== 0 && n < dr[i].priority; i++);
      dr.splice(i, 0, t), i === 0 && Td(t);
    }
  };
  function dc(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function Rl(t) {
    return !(
      !t ||
      (t.nodeType !== 1 &&
        t.nodeType !== 9 &&
        t.nodeType !== 11 &&
        (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Wm() {}
  function q0(t, n, i, a, c) {
    if (c) {
      if (typeof a == "function") {
        var d = a;
        a = function () {
          var Q = kl(E);
          d.call(Q);
        };
      }
      var E = jm(n, a, t, 0, null, !1, !1, "", Wm);
      return (
        (t._reactRootContainer = E),
        (t[qn] = E.current),
        vi(t.nodeType === 8 ? t.parentNode : t),
        Vr(),
        E
      );
    }
    for (; (c = t.lastChild); ) t.removeChild(c);
    if (typeof a == "function") {
      var $ = a;
      a = function () {
        var Q = kl(F);
        $.call(Q);
      };
    }
    var F = uc(t, 0, !1, null, null, !1, !1, "", Wm);
    return (
      (t._reactRootContainer = F),
      (t[qn] = F.current),
      vi(t.nodeType === 8 ? t.parentNode : t),
      Vr(function () {
        bl(n, F, i, a);
      }),
      F
    );
  }
  function Pl(t, n, i, a, c) {
    var d = i._reactRootContainer;
    if (d) {
      var E = d;
      if (typeof c == "function") {
        var $ = c;
        c = function () {
          var F = kl(E);
          $.call(F);
        };
      }
      bl(n, E, t, c);
    } else E = q0(i, n, t, c, a);
    return kl(E);
  }
  (bd = function (t) {
    switch (t.tag) {
      case 3:
        var n = t.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var i = ri(n.pendingLanes);
          i !== 0 &&
            (za(n, i | 1), Vt(n, ct()), !(Oe & 6) && ((Oo = ct() + 500), vr()));
        }
        break;
      case 13:
        Vr(function () {
          var a = Yn(t, 1);
          if (a !== null) {
            var c = zt();
            wn(a, t, 1, c);
          }
        }),
          cc(t, 1);
    }
  }),
    (La = function (t) {
      if (t.tag === 13) {
        var n = Yn(t, 134217728);
        if (n !== null) {
          var i = zt();
          wn(n, t, 134217728, i);
        }
        cc(t, 134217728);
      }
    }),
    (kd = function (t) {
      if (t.tag === 13) {
        var n = kr(t),
          i = Yn(t, n);
        if (i !== null) {
          var a = zt();
          wn(i, t, n, a);
        }
        cc(t, n);
      }
    }),
    (Ed = function () {
      return De;
    }),
    (Rd = function (t, n) {
      var i = De;
      try {
        return (De = t), n();
      } finally {
        De = i;
      }
    }),
    (Ia = function (t, n, i) {
      switch (n) {
        case "input":
          if ((ht(t, i), (n = i.name), i.type === "radio" && n != null)) {
            for (i = t; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                "input[name=" + JSON.stringify("" + n) + '][type="radio"]',
              ),
                n = 0;
              n < i.length;
              n++
            ) {
              var a = i[n];
              if (a !== t && a.form === t.form) {
                var c = Vs(a);
                if (!c) throw Error(o(90));
                Te(a), ht(a, c);
              }
            }
          }
          break;
        case "textarea":
          xt(t, i);
          break;
        case "select":
          (n = i.value), n != null && Qe(t, !!i.multiple, n, !1);
      }
    }),
    (cd = rc),
    (fd = Vr);
  var Q0 = { usingClientEntryPoint: !1, Events: [Ci, yo, Vs, ad, ud, rc] },
    Ai = {
      findFiberByHostInstance: zr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    K0 = {
      bundleType: Ai.bundleType,
      version: Ai.version,
      rendererPackageName: Ai.rendererPackageName,
      rendererConfig: Ai.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: x.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (t) {
        return (t = hd(t)), t === null ? null : t.stateNode;
      },
      findFiberByHostInstance: Ai.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tl.isDisabled && Tl.supportsFiber)
      try {
        (Es = Tl.inject(K0)), (Tn = Tl);
      } catch {}
  }
  return (
    (Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q0),
    (Ht.createPortal = function (t, n) {
      var i =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!dc(n)) throw Error(o(200));
      return H0(t, n, null, i);
    }),
    (Ht.createRoot = function (t, n) {
      if (!dc(t)) throw Error(o(299));
      var i = !1,
        a = "",
        c = Um;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (c = n.onRecoverableError)),
        (n = uc(t, 1, !1, null, null, i, !1, a, c)),
        (t[qn] = n.current),
        vi(t.nodeType === 8 ? t.parentNode : t),
        new fc(n)
      );
    }),
    (Ht.findDOMNode = function (t) {
      if (t == null) return null;
      if (t.nodeType === 1) return t;
      var n = t._reactInternals;
      if (n === void 0)
        throw typeof t.render == "function"
          ? Error(o(188))
          : ((t = Object.keys(t).join(",")), Error(o(268, t)));
      return (t = hd(n)), (t = t === null ? null : t.stateNode), t;
    }),
    (Ht.flushSync = function (t) {
      return Vr(t);
    }),
    (Ht.hydrate = function (t, n, i) {
      if (!Rl(n)) throw Error(o(200));
      return Pl(null, t, n, !0, i);
    }),
    (Ht.hydrateRoot = function (t, n, i) {
      if (!dc(t)) throw Error(o(405));
      var a = (i != null && i.hydratedSources) || null,
        c = !1,
        d = "",
        E = Um;
      if (
        (i != null &&
          (i.unstable_strictMode === !0 && (c = !0),
          i.identifierPrefix !== void 0 && (d = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (E = i.onRecoverableError)),
        (n = jm(n, null, t, 1, i ?? null, c, !1, d, E)),
        (t[qn] = n.current),
        vi(t),
        a)
      )
        for (t = 0; t < a.length; t++)
          (i = a[t]),
            (c = i._getVersion),
            (c = c(i._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [i, c])
              : n.mutableSourceEagerHydrationData.push(i, c);
      return new El(n);
    }),
    (Ht.render = function (t, n, i) {
      if (!Rl(n)) throw Error(o(200));
      return Pl(null, t, n, !1, i);
    }),
    (Ht.unmountComponentAtNode = function (t) {
      if (!Rl(t)) throw Error(o(40));
      return t._reactRootContainer
        ? (Vr(function () {
            Pl(null, null, t, !1, function () {
              (t._reactRootContainer = null), (t[qn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ht.unstable_batchedUpdates = rc),
    (Ht.unstable_renderSubtreeIntoContainer = function (t, n, i, a) {
      if (!Rl(i)) throw Error(o(200));
      if (t == null || t._reactInternals === void 0) throw Error(o(38));
      return Pl(t, n, i, !1, a);
    }),
    (Ht.version = "18.3.1-next-f1338f8080-20240426"),
    Ht
  );
}
var Xm;
function Mg() {
  if (Xm) return hc.exports;
  Xm = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (r) {
        console.error(r);
      }
  }
  return e(), (hc.exports = o1()), hc.exports;
}
var Jm;
function i1() {
  if (Jm) return Ol;
  Jm = 1;
  var e = Mg();
  return (Ol.createRoot = e.createRoot), (Ol.hydrateRoot = e.hydrateRoot), Ol;
}
var s1 = i1();
const l1 = la(s1);
var vc = { exports: {} },
  Sc = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zm;
function a1() {
  if (Zm) return Sc;
  Zm = 1;
  var e = aa();
  function r(m, y) {
    return (m === y && (m !== 0 || 1 / m === 1 / y)) || (m !== m && y !== y);
  }
  var o = typeof Object.is == "function" ? Object.is : r,
    s = e.useSyncExternalStore,
    l = e.useRef,
    u = e.useEffect,
    f = e.useMemo,
    p = e.useDebugValue;
  return (
    (Sc.useSyncExternalStoreWithSelector = function (m, y, k, C, S) {
      var b = l(null);
      if (b.current === null) {
        var w = { hasValue: !1, value: null };
        b.current = w;
      } else w = b.current;
      b = f(
        function () {
          function P(R) {
            if (!I) {
              if (((I = !0), (T = R), (R = C(R)), S !== void 0 && w.hasValue)) {
                var M = w.value;
                if (S(M, R)) return (v = M);
              }
              return (v = R);
            }
            if (((M = v), o(T, R))) return M;
            var O = C(R);
            return S !== void 0 && S(M, O) ? ((T = R), M) : ((T = R), (v = O));
          }
          var I = !1,
            T,
            v,
            x = k === void 0 ? null : k;
          return [
            function () {
              return P(y());
            },
            x === null
              ? void 0
              : function () {
                  return P(x());
                },
          ];
        },
        [y, k, C, S],
      );
      var h = s(m, b[0], b[1]);
      return (
        u(
          function () {
            (w.hasValue = !0), (w.value = h);
          },
          [h],
        ),
        p(h),
        h
      );
    }),
    Sc
  );
}
var eh;
function u1() {
  return eh || ((eh = 1), (vc.exports = a1())), vc.exports;
}
var c1 = u1();
function _g(e) {
  e();
}
function f1() {
  let e = null,
    r = null;
  return {
    clear() {
      (e = null), (r = null);
    },
    notify() {
      _g(() => {
        let o = e;
        for (; o; ) o.callback(), (o = o.next);
      });
    },
    get() {
      const o = [];
      let s = e;
      for (; s; ) o.push(s), (s = s.next);
      return o;
    },
    subscribe(o) {
      let s = !0;
      const l = (r = { callback: o, next: null, prev: r });
      return (
        l.prev ? (l.prev.next = l) : (e = l),
        function () {
          !s ||
            e === null ||
            ((s = !1),
            l.next ? (l.next.prev = l.prev) : (r = l.prev),
            l.prev ? (l.prev.next = l.next) : (e = l.next));
        }
      );
    },
  };
}
var th = { notify() {}, get: () => [] };
function d1(e, r) {
  let o,
    s = th,
    l = 0,
    u = !1;
  function f(h) {
    k();
    const P = s.subscribe(h);
    let I = !1;
    return () => {
      I || ((I = !0), P(), C());
    };
  }
  function p() {
    s.notify();
  }
  function m() {
    w.onStateChange && w.onStateChange();
  }
  function y() {
    return u;
  }
  function k() {
    l++, o || ((o = e.subscribe(m)), (s = f1()));
  }
  function C() {
    l--, o && l === 0 && (o(), (o = void 0), s.clear(), (s = th));
  }
  function S() {
    u || ((u = !0), k());
  }
  function b() {
    u && ((u = !1), C());
  }
  const w = {
    addNestedSub: f,
    notifyNestedSubs: p,
    handleChangeWrapper: m,
    isSubscribed: y,
    trySubscribe: S,
    tryUnsubscribe: b,
    getListeners: () => s,
  };
  return w;
}
var p1 = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  m1 = p1(),
  h1 = () => typeof navigator < "u" && navigator.product === "ReactNative",
  g1 = h1(),
  y1 = () => (m1 || g1 ? _.useLayoutEffect : _.useEffect),
  v1 = y1();
function nh(e, r) {
  return e === r ? e !== 0 || r !== 0 || 1 / e === 1 / r : e !== e && r !== r;
}
function Gi(e, r) {
  if (nh(e, r)) return !0;
  if (typeof e != "object" || e === null || typeof r != "object" || r === null)
    return !1;
  const o = Object.keys(e),
    s = Object.keys(r);
  if (o.length !== s.length) return !1;
  for (let l = 0; l < o.length; l++)
    if (!Object.prototype.hasOwnProperty.call(r, o[l]) || !nh(e[o[l]], r[o[l]]))
      return !1;
  return !0;
}
var wc = Symbol.for("react-redux-context"),
  Cc = typeof globalThis < "u" ? globalThis : {};
function S1() {
  if (!_.createContext) return {};
  const e = Cc[wc] ?? (Cc[wc] = new Map());
  let r = e.get(_.createContext);
  return r || ((r = _.createContext(null)), e.set(_.createContext, r)), r;
}
var Mr = S1();
function w1(e) {
  const { children: r, context: o, serverState: s, store: l } = e,
    u = _.useMemo(() => {
      const m = d1(l);
      return {
        store: l,
        subscription: m,
        getServerState: s ? () => s : void 0,
      };
    }, [l, s]),
    f = _.useMemo(() => l.getState(), [l]);
  v1(() => {
    const { subscription: m } = u;
    return (
      (m.onStateChange = m.notifyNestedSubs),
      m.trySubscribe(),
      f !== l.getState() && m.notifyNestedSubs(),
      () => {
        m.tryUnsubscribe(), (m.onStateChange = void 0);
      }
    );
  }, [u, f]);
  const p = o || Mr;
  return _.createElement(p.Provider, { value: u }, r);
}
var C1 = w1;
function wf(e = Mr) {
  return function () {
    return _.useContext(e);
  };
}
var $g = wf();
function Ng(e = Mr) {
  const r = e === Mr ? $g : wf(e),
    o = () => {
      const { store: s } = r();
      return s;
    };
  return Object.assign(o, { withTypes: () => o }), o;
}
var Ag = Ng();
function x1(e = Mr) {
  const r = e === Mr ? Ag : Ng(e),
    o = () => r().dispatch;
  return Object.assign(o, { withTypes: () => o }), o;
}
var b1 = x1(),
  k1 = (e, r) => e === r;
function E1(e = Mr) {
  const r = e === Mr ? $g : wf(e),
    o = (s, l = {}) => {
      const { equalityFn: u = k1 } =
          typeof l == "function" ? { equalityFn: l } : l,
        f = r(),
        { store: p, subscription: m, getServerState: y } = f;
      _.useRef(!0);
      const k = _.useCallback(
          {
            [s.name](S) {
              return s(S);
            },
          }[s.name],
          [s],
        ),
        C = c1.useSyncExternalStoreWithSelector(
          m.addNestedSub,
          p.getState,
          y || p.getState,
          k,
          u,
        );
      return _.useDebugValue(C), C;
    };
  return Object.assign(o, { withTypes: () => o }), o;
}
var R1 = E1(),
  P1 = _g;
function Et(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var T1 = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  rh = T1,
  xc = () => Math.random().toString(36).substring(7).split("").join("."),
  I1 = {
    INIT: `@@redux/INIT${xc()}`,
    REPLACE: `@@redux/REPLACE${xc()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${xc()}`,
  },
  ql = I1;
function Dn(e) {
  if (typeof e != "object" || e === null) return !1;
  let r = e;
  for (; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(e) === r || Object.getPrototypeOf(e) === null;
}
function zg(e, r, o) {
  if (typeof e != "function") throw new Error(Et(2));
  if (
    (typeof r == "function" && typeof o == "function") ||
    (typeof o == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Et(0));
  if (
    (typeof r == "function" && typeof o > "u" && ((o = r), (r = void 0)),
    typeof o < "u")
  ) {
    if (typeof o != "function") throw new Error(Et(1));
    return o(zg)(e, r);
  }
  let s = e,
    l = r,
    u = new Map(),
    f = u,
    p = 0,
    m = !1;
  function y() {
    f === u &&
      ((f = new Map()),
      u.forEach((P, I) => {
        f.set(I, P);
      }));
  }
  function k() {
    if (m) throw new Error(Et(3));
    return l;
  }
  function C(P) {
    if (typeof P != "function") throw new Error(Et(4));
    if (m) throw new Error(Et(5));
    let I = !0;
    y();
    const T = p++;
    return (
      f.set(T, P),
      function () {
        if (I) {
          if (m) throw new Error(Et(6));
          (I = !1), y(), f.delete(T), (u = null);
        }
      }
    );
  }
  function S(P) {
    if (!Dn(P)) throw new Error(Et(7));
    if (typeof P.type > "u") throw new Error(Et(8));
    if (typeof P.type != "string") throw new Error(Et(17));
    if (m) throw new Error(Et(9));
    try {
      (m = !0), (l = s(l, P));
    } finally {
      m = !1;
    }
    return (
      (u = f).forEach((T) => {
        T();
      }),
      P
    );
  }
  function b(P) {
    if (typeof P != "function") throw new Error(Et(10));
    (s = P), S({ type: ql.REPLACE });
  }
  function w() {
    const P = C;
    return {
      subscribe(I) {
        if (typeof I != "object" || I === null) throw new Error(Et(11));
        function T() {
          const x = I;
          x.next && x.next(k());
        }
        return T(), { unsubscribe: P(T) };
      },
      [rh]() {
        return this;
      },
    };
  }
  return (
    S({ type: ql.INIT }),
    { dispatch: S, subscribe: C, getState: k, replaceReducer: b, [rh]: w }
  );
}
function O1(e) {
  Object.keys(e).forEach((r) => {
    const o = e[r];
    if (typeof o(void 0, { type: ql.INIT }) > "u") throw new Error(Et(12));
    if (typeof o(void 0, { type: ql.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Et(13));
  });
}
function Lg(e) {
  const r = Object.keys(e),
    o = {};
  for (let u = 0; u < r.length; u++) {
    const f = r[u];
    typeof e[f] == "function" && (o[f] = e[f]);
  }
  const s = Object.keys(o);
  let l;
  try {
    O1(o);
  } catch (u) {
    l = u;
  }
  return function (f = {}, p) {
    if (l) throw l;
    let m = !1;
    const y = {};
    for (let k = 0; k < s.length; k++) {
      const C = s[k],
        S = o[C],
        b = f[C],
        w = S(b, p);
      if (typeof w > "u") throw (p && p.type, new Error(Et(14)));
      (y[C] = w), (m = m || w !== b);
    }
    return (m = m || s.length !== Object.keys(f).length), m ? y : f;
  };
}
function Ql(...e) {
  return e.length === 0
    ? (r) => r
    : e.length === 1
      ? e[0]
      : e.reduce(
          (r, o) =>
            (...s) =>
              r(o(...s)),
        );
}
function M1(...e) {
  return (r) => (o, s) => {
    const l = r(o, s);
    let u = () => {
      throw new Error(Et(15));
    };
    const f = { getState: l.getState, dispatch: (m, ...y) => u(m, ...y) },
      p = e.map((m) => m(f));
    return (u = Ql(...p)(l.dispatch)), { ...l, dispatch: u };
  };
}
function Fg(e) {
  return Dn(e) && "type" in e && typeof e.type == "string";
}
var Cf = Symbol.for("immer-nothing"),
  Yi = Symbol.for("immer-draftable"),
  qt = Symbol.for("immer-state");
function Pt(e, ...r) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var to = Object.getPrototypeOf;
function jn(e) {
  return !!e && !!e[qt];
}
function kn(e) {
  var r;
  return e
    ? Dg(e) ||
        Array.isArray(e) ||
        !!e[Yi] ||
        !!((r = e.constructor) != null && r[Yi]) ||
        fs(e) ||
        ds(e)
    : !1;
}
var _1 = Object.prototype.constructor.toString();
function Dg(e) {
  if (!e || typeof e != "object") return !1;
  const r = to(e);
  if (r === null) return !0;
  const o = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
  return o === Object
    ? !0
    : typeof o == "function" && Function.toString.call(o) === _1;
}
function $1(e) {
  return jn(e) || Pt(15, e), e[qt].base_;
}
function ts(e, r) {
  no(e) === 0
    ? Reflect.ownKeys(e).forEach((o) => {
        r(o, e[o], e);
      })
    : e.forEach((o, s) => r(s, o, e));
}
function no(e) {
  const r = e[qt];
  return r ? r.type_ : Array.isArray(e) ? 1 : fs(e) ? 2 : ds(e) ? 3 : 0;
}
function ns(e, r) {
  return no(e) === 2 ? e.has(r) : Object.prototype.hasOwnProperty.call(e, r);
}
function bc(e, r) {
  return no(e) === 2 ? e.get(r) : e[r];
}
function jg(e, r, o) {
  const s = no(e);
  s === 2 ? e.set(r, o) : s === 3 ? e.add(o) : (e[r] = o);
}
function N1(e, r) {
  return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
}
function fs(e) {
  return e instanceof Map;
}
function ds(e) {
  return e instanceof Set;
}
function Yr(e) {
  return e.copy_ || e.base_;
}
function Vc(e, r) {
  if (fs(e)) return new Map(e);
  if (ds(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const o = Dg(e);
  if (r === !0 || (r === "class_only" && !o)) {
    const s = Object.getOwnPropertyDescriptors(e);
    delete s[qt];
    let l = Reflect.ownKeys(s);
    for (let u = 0; u < l.length; u++) {
      const f = l[u],
        p = s[f];
      p.writable === !1 && ((p.writable = !0), (p.configurable = !0)),
        (p.get || p.set) &&
          (s[f] = {
            configurable: !0,
            writable: !0,
            enumerable: p.enumerable,
            value: e[f],
          });
    }
    return Object.create(to(e), s);
  } else {
    const s = to(e);
    if (s !== null && o) return { ...e };
    const l = Object.create(s);
    return Object.assign(l, e);
  }
}
function xf(e, r = !1) {
  return (
    ua(e) ||
      jn(e) ||
      !kn(e) ||
      (no(e) > 1 && (e.set = e.add = e.clear = e.delete = A1),
      Object.freeze(e),
      r && Object.entries(e).forEach(([o, s]) => xf(s, !0))),
    e
  );
}
function A1() {
  Pt(2);
}
function ua(e) {
  return Object.isFrozen(e);
}
var Hc = {};
function ro(e) {
  const r = Hc[e];
  return r || Pt(0, e), r;
}
function z1(e, r) {
  Hc[e] || (Hc[e] = r);
}
var rs;
function Bg() {
  return rs;
}
function L1(e, r) {
  return {
    drafts_: [],
    parent_: e,
    immer_: r,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function oh(e, r) {
  r &&
    (ro("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = r));
}
function qc(e) {
  Qc(e), e.drafts_.forEach(F1), (e.drafts_ = null);
}
function Qc(e) {
  e === rs && (rs = e.parent_);
}
function ih(e) {
  return (rs = L1(rs, e));
}
function F1(e) {
  const r = e[qt];
  r.type_ === 0 || r.type_ === 1 ? r.revoke_() : (r.revoked_ = !0);
}
function sh(e, r) {
  r.unfinalizedDrafts_ = r.drafts_.length;
  const o = r.drafts_[0];
  return (
    e !== void 0 && e !== o
      ? (o[qt].modified_ && (qc(r), Pt(4)),
        kn(e) && ((e = Kl(r, e)), r.parent_ || Gl(r, e)),
        r.patches_ &&
          ro("Patches").generateReplacementPatches_(
            o[qt].base_,
            e,
            r.patches_,
            r.inversePatches_,
          ))
      : (e = Kl(r, o, [])),
    qc(r),
    r.patches_ && r.patchListener_(r.patches_, r.inversePatches_),
    e !== Cf ? e : void 0
  );
}
function Kl(e, r, o) {
  if (ua(r)) return r;
  const s = r[qt];
  if (!s) return ts(r, (l, u) => lh(e, s, r, l, u, o)), r;
  if (s.scope_ !== e) return r;
  if (!s.modified_) return Gl(e, s.base_, !0), s.base_;
  if (!s.finalized_) {
    (s.finalized_ = !0), s.scope_.unfinalizedDrafts_--;
    const l = s.copy_;
    let u = l,
      f = !1;
    s.type_ === 3 && ((u = new Set(l)), l.clear(), (f = !0)),
      ts(u, (p, m) => lh(e, s, l, p, m, o, f)),
      Gl(e, l, !1),
      o &&
        e.patches_ &&
        ro("Patches").generatePatches_(s, o, e.patches_, e.inversePatches_);
  }
  return s.copy_;
}
function lh(e, r, o, s, l, u, f) {
  if (jn(l)) {
    const p =
        u && r && r.type_ !== 3 && !ns(r.assigned_, s) ? u.concat(s) : void 0,
      m = Kl(e, l, p);
    if ((jg(o, s, m), jn(m))) e.canAutoFreeze_ = !1;
    else return;
  } else f && o.add(l);
  if (kn(l) && !ua(l)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    Kl(e, l),
      (!r || !r.scope_.parent_) &&
        typeof s != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(o, s) &&
        Gl(e, l);
  }
}
function Gl(e, r, o = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && xf(r, o);
}
function D1(e, r) {
  const o = Array.isArray(e),
    s = {
      type_: o ? 1 : 0,
      scope_: r ? r.scope_ : Bg(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: r,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let l = s,
    u = bf;
  o && ((l = [s]), (u = os));
  const { revoke: f, proxy: p } = Proxy.revocable(l, u);
  return (s.draft_ = p), (s.revoke_ = f), p;
}
var bf = {
    get(e, r) {
      if (r === qt) return e;
      const o = Yr(e);
      if (!ns(o, r)) return j1(e, o, r);
      const s = o[r];
      return e.finalized_ || !kn(s)
        ? s
        : s === kc(e.base_, r)
          ? (Ec(e), (e.copy_[r] = Gc(s, e)))
          : s;
    },
    has(e, r) {
      return r in Yr(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Yr(e));
    },
    set(e, r, o) {
      const s = Ug(Yr(e), r);
      if (s != null && s.set) return s.set.call(e.draft_, o), !0;
      if (!e.modified_) {
        const l = kc(Yr(e), r),
          u = l == null ? void 0 : l[qt];
        if (u && u.base_ === o)
          return (e.copy_[r] = o), (e.assigned_[r] = !1), !0;
        if (N1(o, l) && (o !== void 0 || ns(e.base_, r))) return !0;
        Ec(e), Kc(e);
      }
      return (
        (e.copy_[r] === o && (o !== void 0 || r in e.copy_)) ||
          (Number.isNaN(o) && Number.isNaN(e.copy_[r])) ||
          ((e.copy_[r] = o), (e.assigned_[r] = !0)),
        !0
      );
    },
    deleteProperty(e, r) {
      return (
        kc(e.base_, r) !== void 0 || r in e.base_
          ? ((e.assigned_[r] = !1), Ec(e), Kc(e))
          : delete e.assigned_[r],
        e.copy_ && delete e.copy_[r],
        !0
      );
    },
    getOwnPropertyDescriptor(e, r) {
      const o = Yr(e),
        s = Reflect.getOwnPropertyDescriptor(o, r);
      return (
        s && {
          writable: !0,
          configurable: e.type_ !== 1 || r !== "length",
          enumerable: s.enumerable,
          value: o[r],
        }
      );
    },
    defineProperty() {
      Pt(11);
    },
    getPrototypeOf(e) {
      return to(e.base_);
    },
    setPrototypeOf() {
      Pt(12);
    },
  },
  os = {};
ts(bf, (e, r) => {
  os[e] = function () {
    return (arguments[0] = arguments[0][0]), r.apply(this, arguments);
  };
});
os.deleteProperty = function (e, r) {
  return os.set.call(this, e, r, void 0);
};
os.set = function (e, r, o) {
  return bf.set.call(this, e[0], r, o, e[0]);
};
function kc(e, r) {
  const o = e[qt];
  return (o ? Yr(o) : e)[r];
}
function j1(e, r, o) {
  var l;
  const s = Ug(r, o);
  return s
    ? "value" in s
      ? s.value
      : (l = s.get) == null
        ? void 0
        : l.call(e.draft_)
    : void 0;
}
function Ug(e, r) {
  if (!(r in e)) return;
  let o = to(e);
  for (; o; ) {
    const s = Object.getOwnPropertyDescriptor(o, r);
    if (s) return s;
    o = to(o);
  }
}
function Kc(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Kc(e.parent_));
}
function Ec(e) {
  e.copy_ || (e.copy_ = Vc(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var B1 = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (r, o, s) => {
        if (typeof r == "function" && typeof o != "function") {
          const u = o;
          o = r;
          const f = this;
          return function (m = u, ...y) {
            return f.produce(m, (k) => o.call(this, k, ...y));
          };
        }
        typeof o != "function" && Pt(6),
          s !== void 0 && typeof s != "function" && Pt(7);
        let l;
        if (kn(r)) {
          const u = ih(this),
            f = Gc(r, void 0);
          let p = !0;
          try {
            (l = o(f)), (p = !1);
          } finally {
            p ? qc(u) : Qc(u);
          }
          return oh(u, s), sh(l, u);
        } else if (!r || typeof r != "object") {
          if (
            ((l = o(r)),
            l === void 0 && (l = r),
            l === Cf && (l = void 0),
            this.autoFreeze_ && xf(l, !0),
            s)
          ) {
            const u = [],
              f = [];
            ro("Patches").generateReplacementPatches_(r, l, u, f), s(u, f);
          }
          return l;
        } else Pt(1, r);
      }),
      (this.produceWithPatches = (r, o) => {
        if (typeof r == "function")
          return (f, ...p) => this.produceWithPatches(f, (m) => r(m, ...p));
        let s, l;
        return [
          this.produce(r, o, (f, p) => {
            (s = f), (l = p);
          }),
          s,
          l,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    kn(e) || Pt(8), jn(e) && (e = U1(e));
    const r = ih(this),
      o = Gc(e, void 0);
    return (o[qt].isManual_ = !0), Qc(r), o;
  }
  finishDraft(e, r) {
    const o = e && e[qt];
    (!o || !o.isManual_) && Pt(9);
    const { scope_: s } = o;
    return oh(s, r), sh(void 0, s);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, r) {
    let o;
    for (o = r.length - 1; o >= 0; o--) {
      const l = r[o];
      if (l.path.length === 0 && l.op === "replace") {
        e = l.value;
        break;
      }
    }
    o > -1 && (r = r.slice(o + 1));
    const s = ro("Patches").applyPatches_;
    return jn(e) ? s(e, r) : this.produce(e, (l) => s(l, r));
  }
};
function Gc(e, r) {
  const o = fs(e)
    ? ro("MapSet").proxyMap_(e, r)
    : ds(e)
      ? ro("MapSet").proxySet_(e, r)
      : D1(e, r);
  return (r ? r.scope_ : Bg()).drafts_.push(o), o;
}
function U1(e) {
  return jn(e) || Pt(10, e), Wg(e);
}
function Wg(e) {
  if (!kn(e) || ua(e)) return e;
  const r = e[qt];
  let o;
  if (r) {
    if (!r.modified_) return r.base_;
    (r.finalized_ = !0), (o = Vc(e, r.scope_.immer_.useStrictShallowCopy_));
  } else o = Vc(e, !0);
  return (
    ts(o, (s, l) => {
      jg(o, s, Wg(l));
    }),
    r && (r.finalized_ = !1),
    o
  );
}
function W1() {
  const r = "replace",
    o = "add",
    s = "remove";
  function l(S, b, w, h) {
    switch (S.type_) {
      case 0:
      case 2:
        return f(S, b, w, h);
      case 1:
        return u(S, b, w, h);
      case 3:
        return p(S, b, w, h);
    }
  }
  function u(S, b, w, h) {
    let { base_: P, assigned_: I } = S,
      T = S.copy_;
    T.length < P.length && (([P, T] = [T, P]), ([w, h] = [h, w]));
    for (let v = 0; v < P.length; v++)
      if (I[v] && T[v] !== P[v]) {
        const x = b.concat([v]);
        w.push({ op: r, path: x, value: C(T[v]) }),
          h.push({ op: r, path: x, value: C(P[v]) });
      }
    for (let v = P.length; v < T.length; v++) {
      const x = b.concat([v]);
      w.push({ op: o, path: x, value: C(T[v]) });
    }
    for (let v = T.length - 1; P.length <= v; --v) {
      const x = b.concat([v]);
      h.push({ op: s, path: x });
    }
  }
  function f(S, b, w, h) {
    const { base_: P, copy_: I } = S;
    ts(S.assigned_, (T, v) => {
      const x = bc(P, T),
        R = bc(I, T),
        M = v ? (ns(P, T) ? r : o) : s;
      if (x === R && M === r) return;
      const O = b.concat(T);
      w.push(M === s ? { op: M, path: O } : { op: M, path: O, value: R }),
        h.push(
          M === o
            ? { op: s, path: O }
            : M === s
              ? { op: o, path: O, value: C(x) }
              : { op: r, path: O, value: C(x) },
        );
    });
  }
  function p(S, b, w, h) {
    let { base_: P, copy_: I } = S,
      T = 0;
    P.forEach((v) => {
      if (!I.has(v)) {
        const x = b.concat([T]);
        w.push({ op: s, path: x, value: v }),
          h.unshift({ op: o, path: x, value: v });
      }
      T++;
    }),
      (T = 0),
      I.forEach((v) => {
        if (!P.has(v)) {
          const x = b.concat([T]);
          w.push({ op: o, path: x, value: v }),
            h.unshift({ op: s, path: x, value: v });
        }
        T++;
      });
  }
  function m(S, b, w, h) {
    w.push({ op: r, path: [], value: b === Cf ? void 0 : b }),
      h.push({ op: r, path: [], value: S });
  }
  function y(S, b) {
    return (
      b.forEach((w) => {
        const { path: h, op: P } = w;
        let I = S;
        for (let R = 0; R < h.length - 1; R++) {
          const M = no(I);
          let O = h[R];
          typeof O != "string" && typeof O != "number" && (O = "" + O),
            (M === 0 || M === 1) &&
              (O === "__proto__" || O === "constructor") &&
              Pt(19),
            typeof I == "function" && O === "prototype" && Pt(19),
            (I = bc(I, O)),
            typeof I != "object" && Pt(18, h.join("/"));
        }
        const T = no(I),
          v = k(w.value),
          x = h[h.length - 1];
        switch (P) {
          case r:
            switch (T) {
              case 2:
                return I.set(x, v);
              case 3:
                Pt(16);
              default:
                return (I[x] = v);
            }
          case o:
            switch (T) {
              case 1:
                return x === "-" ? I.push(v) : I.splice(x, 0, v);
              case 2:
                return I.set(x, v);
              case 3:
                return I.add(v);
              default:
                return (I[x] = v);
            }
          case s:
            switch (T) {
              case 1:
                return I.splice(x, 1);
              case 2:
                return I.delete(x);
              case 3:
                return I.delete(w.value);
              default:
                return delete I[x];
            }
          default:
            Pt(17, P);
        }
      }),
      S
    );
  }
  function k(S) {
    if (!kn(S)) return S;
    if (Array.isArray(S)) return S.map(k);
    if (fs(S))
      return new Map(Array.from(S.entries()).map(([w, h]) => [w, k(h)]));
    if (ds(S)) return new Set(Array.from(S).map(k));
    const b = Object.create(to(S));
    for (const w in S) b[w] = k(S[w]);
    return ns(S, Yi) && (b[Yi] = S[Yi]), b;
  }
  function C(S) {
    return jn(S) ? k(S) : S;
  }
  z1("Patches", {
    applyPatches_: y,
    generatePatches_: l,
    generateReplacementPatches_: m,
  });
}
var tn = new B1(),
  ps = tn.produce,
  Vg = tn.produceWithPatches.bind(tn);
tn.setAutoFreeze.bind(tn);
tn.setUseStrictShallowCopy.bind(tn);
var ah = tn.applyPatches.bind(tn);
tn.createDraft.bind(tn);
tn.finishDraft.bind(tn);
function V1(e, r = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(r);
}
function H1(e, r = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(r);
}
function q1(
  e,
  r = "expected all items to be functions, instead received the following types: ",
) {
  if (!e.every((o) => typeof o == "function")) {
    const o = e
      .map((s) =>
        typeof s == "function" ? `function ${s.name || "unnamed"}()` : typeof s,
      )
      .join(", ");
    throw new TypeError(`${r}[${o}]`);
  }
}
var uh = (e) => (Array.isArray(e) ? e : [e]);
function Q1(e) {
  const r = Array.isArray(e[0]) ? e[0] : e;
  return (
    q1(
      r,
      "createSelector expects all input-selectors to be functions, but received the following types: ",
    ),
    r
  );
}
function K1(e, r) {
  const o = [],
    { length: s } = e;
  for (let l = 0; l < s; l++) o.push(e[l].apply(null, r));
  return o;
}
var G1 = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  Y1 = typeof WeakRef < "u" ? WeakRef : G1,
  X1 = 0,
  ch = 1;
function Ml() {
  return { s: X1, v: void 0, o: null, p: null };
}
function Yl(e, r = {}) {
  let o = Ml();
  const { resultEqualityCheck: s } = r;
  let l,
    u = 0;
  function f() {
    var C;
    let p = o;
    const { length: m } = arguments;
    for (let S = 0, b = m; S < b; S++) {
      const w = arguments[S];
      if (typeof w == "function" || (typeof w == "object" && w !== null)) {
        let h = p.o;
        h === null && (p.o = h = new WeakMap());
        const P = h.get(w);
        P === void 0 ? ((p = Ml()), h.set(w, p)) : (p = P);
      } else {
        let h = p.p;
        h === null && (p.p = h = new Map());
        const P = h.get(w);
        P === void 0 ? ((p = Ml()), h.set(w, p)) : (p = P);
      }
    }
    const y = p;
    let k;
    if (p.s === ch) k = p.v;
    else if (((k = e.apply(null, arguments)), u++, s)) {
      const S =
        ((C = l == null ? void 0 : l.deref) == null ? void 0 : C.call(l)) ?? l;
      S != null && s(S, k) && ((k = S), u !== 0 && u--),
        (l =
          (typeof k == "object" && k !== null) || typeof k == "function"
            ? new Y1(k)
            : k);
    }
    return (y.s = ch), (y.v = k), k;
  }
  return (
    (f.clearCache = () => {
      (o = Ml()), f.resetResultsCount();
    }),
    (f.resultsCount = () => u),
    (f.resetResultsCount = () => {
      u = 0;
    }),
    f
  );
}
function J1(e, ...r) {
  const o = typeof e == "function" ? { memoize: e, memoizeOptions: r } : e,
    s = (...l) => {
      let u = 0,
        f = 0,
        p,
        m = {},
        y = l.pop();
      typeof y == "object" && ((m = y), (y = l.pop())),
        V1(
          y,
          `createSelector expects an output function after the inputs, but received: [${typeof y}]`,
        );
      const k = { ...o, ...m },
        {
          memoize: C,
          memoizeOptions: S = [],
          argsMemoize: b = Yl,
          argsMemoizeOptions: w = [],
          devModeChecks: h = {},
        } = k,
        P = uh(S),
        I = uh(w),
        T = Q1(l),
        v = C(
          function () {
            return u++, y.apply(null, arguments);
          },
          ...P,
        ),
        x = b(
          function () {
            f++;
            const M = K1(T, arguments);
            return (p = v.apply(null, M)), p;
          },
          ...I,
        );
      return Object.assign(x, {
        resultFunc: y,
        memoizedResultFunc: v,
        dependencies: T,
        dependencyRecomputations: () => f,
        resetDependencyRecomputations: () => {
          f = 0;
        },
        lastResult: () => p,
        recomputations: () => u,
        resetRecomputations: () => {
          u = 0;
        },
        memoize: C,
        argsMemoize: b,
      });
    };
  return Object.assign(s, { withTypes: () => s }), s;
}
var kf = J1(Yl),
  Z1 = Object.assign(
    (e, r = kf) => {
      H1(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      const o = Object.keys(e),
        s = o.map((u) => e[u]);
      return r(s, (...u) => u.reduce((f, p, m) => ((f[o[m]] = p), f), {}));
    },
    { withTypes: () => Z1 },
  );
function Hg(e) {
  return ({ dispatch: o, getState: s }) =>
    (l) =>
    (u) =>
      typeof u == "function" ? u(o, s, e) : l(u);
}
var eS = Hg(),
  tS = Hg,
  nS =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Ql
              : Ql.apply(null, arguments);
        },
  rS = (e) => e && typeof e.match == "function";
function xn(e, r) {
  function o(...s) {
    if (r) {
      let l = r(...s);
      if (!l) throw new Error(bn(0));
      return {
        type: e,
        payload: l.payload,
        ...("meta" in l && { meta: l.meta }),
        ...("error" in l && { error: l.error }),
      };
    }
    return { type: e, payload: s[0] };
  }
  return (
    (o.toString = () => `${e}`),
    (o.type = e),
    (o.match = (s) => Fg(s) && s.type === e),
    o
  );
}
var qg = class Hi extends Array {
  constructor(...r) {
    super(...r), Object.setPrototypeOf(this, Hi.prototype);
  }
  static get [Symbol.species]() {
    return Hi;
  }
  concat(...r) {
    return super.concat.apply(this, r);
  }
  prepend(...r) {
    return r.length === 1 && Array.isArray(r[0])
      ? new Hi(...r[0].concat(this))
      : new Hi(...r.concat(this));
  }
};
function fh(e) {
  return kn(e) ? ps(e, () => {}) : e;
}
function dh(e, r, o) {
  return e.has(r) ? e.get(r) : e.set(r, o(r)).get(r);
}
function oS(e) {
  return typeof e == "boolean";
}
var iS = () =>
    function (r) {
      const {
        thunk: o = !0,
        immutableCheck: s = !0,
        serializableCheck: l = !0,
        actionCreatorCheck: u = !0,
      } = r ?? {};
      let f = new qg();
      return o && (oS(o) ? f.push(eS) : f.push(tS(o.extraArgument))), f;
    },
  Zr = "RTK_autoBatch",
  Li = () => (e) => ({ payload: e, meta: { [Zr]: !0 } }),
  ph = (e) => (r) => {
    setTimeout(r, e);
  },
  sS =
    (e = { type: "raf" }) =>
    (r) =>
    (...o) => {
      const s = r(...o);
      let l = !0,
        u = !1,
        f = !1;
      const p = new Set(),
        m =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
              ? typeof window < "u" && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : ph(10)
              : e.type === "callback"
                ? e.queueNotification
                : ph(e.timeout),
        y = () => {
          (f = !1), u && ((u = !1), p.forEach((k) => k()));
        };
      return Object.assign({}, s, {
        subscribe(k) {
          const C = () => l && k(),
            S = s.subscribe(C);
          return (
            p.add(k),
            () => {
              S(), p.delete(k);
            }
          );
        },
        dispatch(k) {
          var C;
          try {
            return (
              (l = !((C = k == null ? void 0 : k.meta) != null && C[Zr])),
              (u = !l),
              u && (f || ((f = !0), m(y))),
              s.dispatch(k)
            );
          } finally {
            l = !0;
          }
        },
      });
    },
  lS = (e) =>
    function (o) {
      const { autoBatch: s = !0 } = o ?? {};
      let l = new qg(e);
      return s && l.push(sS(typeof s == "object" ? s : void 0)), l;
    };
function aS(e) {
  const r = iS(),
    {
      reducer: o = void 0,
      middleware: s,
      devTools: l = !0,
      preloadedState: u = void 0,
      enhancers: f = void 0,
    } = e;
  let p;
  if (typeof o == "function") p = o;
  else if (Dn(o)) p = Lg(o);
  else throw new Error(bn(1));
  let m;
  typeof s == "function" ? (m = s(r)) : (m = r());
  let y = Ql;
  l && (y = nS({ trace: !1, ...(typeof l == "object" && l) }));
  const k = M1(...m),
    C = lS(k);
  let S = typeof f == "function" ? f(C) : C();
  const b = y(...S);
  return zg(p, u, b);
}
function Qg(e) {
  const r = {},
    o = [];
  let s;
  const l = {
    addCase(u, f) {
      const p = typeof u == "string" ? u : u.type;
      if (!p) throw new Error(bn(28));
      if (p in r) throw new Error(bn(29));
      return (r[p] = f), l;
    },
    addMatcher(u, f) {
      return o.push({ matcher: u, reducer: f }), l;
    },
    addDefaultCase(u) {
      return (s = u), l;
    },
  };
  return e(l), [r, o, s];
}
function uS(e) {
  return typeof e == "function";
}
function cS(e, r) {
  let [o, s, l] = Qg(r),
    u;
  if (uS(e)) u = () => fh(e());
  else {
    const p = fh(e);
    u = () => p;
  }
  function f(p = u(), m) {
    let y = [
      o[m.type],
      ...s.filter(({ matcher: k }) => k(m)).map(({ reducer: k }) => k),
    ];
    return (
      y.filter((k) => !!k).length === 0 && (y = [l]),
      y.reduce((k, C) => {
        if (C)
          if (jn(k)) {
            const b = C(k, m);
            return b === void 0 ? k : b;
          } else {
            if (kn(k)) return ps(k, (S) => C(S, m));
            {
              const S = C(k, m);
              if (S === void 0) {
                if (k === null) return k;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined",
                );
              }
              return S;
            }
          }
        return k;
      }, p)
    );
  }
  return (f.getInitialState = u), f;
}
var Kg = (e, r) => (rS(e) ? e.match(r) : e(r));
function nr(...e) {
  return (r) => e.some((o) => Kg(o, r));
}
function Xi(...e) {
  return (r) => e.every((o) => Kg(o, r));
}
function ca(e, r) {
  if (!e || !e.meta) return !1;
  const o = typeof e.meta.requestId == "string",
    s = r.indexOf(e.meta.requestStatus) > -1;
  return o && s;
}
function ms(e) {
  return (
    typeof e[0] == "function" &&
    "pending" in e[0] &&
    "fulfilled" in e[0] &&
    "rejected" in e[0]
  );
}
function Ef(...e) {
  return e.length === 0
    ? (r) => ca(r, ["pending"])
    : ms(e)
      ? nr(...e.map((r) => r.pending))
      : Ef()(e[0]);
}
function qo(...e) {
  return e.length === 0
    ? (r) => ca(r, ["rejected"])
    : ms(e)
      ? nr(...e.map((r) => r.rejected))
      : qo()(e[0]);
}
function fa(...e) {
  const r = (o) => o && o.meta && o.meta.rejectedWithValue;
  return e.length === 0
    ? Xi(qo(...e), r)
    : ms(e)
      ? Xi(qo(...e), r)
      : fa()(e[0]);
}
function _r(...e) {
  return e.length === 0
    ? (r) => ca(r, ["fulfilled"])
    : ms(e)
      ? nr(...e.map((r) => r.fulfilled))
      : _r()(e[0]);
}
function Yc(...e) {
  return e.length === 0
    ? (r) => ca(r, ["pending", "fulfilled", "rejected"])
    : ms(e)
      ? nr(...e.flatMap((r) => [r.pending, r.rejected, r.fulfilled]))
      : Yc()(e[0]);
}
var fS = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  Rf = (e = 21) => {
    let r = "",
      o = e;
    for (; o--; ) r += fS[(Math.random() * 64) | 0];
    return r;
  },
  dS = ["name", "message", "stack", "code"],
  Rc = class {
    constructor(e, r) {
      Kr(this, "_type");
      (this.payload = e), (this.meta = r);
    }
  },
  mh = class {
    constructor(e, r) {
      Kr(this, "_type");
      (this.payload = e), (this.meta = r);
    }
  },
  pS = (e) => {
    if (typeof e == "object" && e !== null) {
      const r = {};
      for (const o of dS) typeof e[o] == "string" && (r[o] = e[o]);
      return r;
    }
    return { message: String(e) };
  },
  hh = (() => {
    function e(r, o, s) {
      const l = xn(r + "/fulfilled", (m, y, k, C) => ({
          payload: m,
          meta: {
            ...(C || {}),
            arg: k,
            requestId: y,
            requestStatus: "fulfilled",
          },
        })),
        u = xn(r + "/pending", (m, y, k) => ({
          payload: void 0,
          meta: {
            ...(k || {}),
            arg: y,
            requestId: m,
            requestStatus: "pending",
          },
        })),
        f = xn(r + "/rejected", (m, y, k, C, S) => ({
          payload: C,
          error: ((s && s.serializeError) || pS)(m || "Rejected"),
          meta: {
            ...(S || {}),
            arg: k,
            requestId: y,
            rejectedWithValue: !!C,
            requestStatus: "rejected",
            aborted: (m == null ? void 0 : m.name) === "AbortError",
            condition: (m == null ? void 0 : m.name) === "ConditionError",
          },
        }));
      function p(m) {
        return (y, k, C) => {
          const S = s != null && s.idGenerator ? s.idGenerator(m) : Rf(),
            b = new AbortController();
          let w, h;
          function P(T) {
            (h = T), b.abort();
          }
          const I = (async function () {
            var x, R;
            let T;
            try {
              let M =
                (x = s == null ? void 0 : s.condition) == null
                  ? void 0
                  : x.call(s, m, { getState: k, extra: C });
              if ((hS(M) && (M = await M), M === !1 || b.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const O = new Promise((N, z) => {
                (w = () => {
                  z({ name: "AbortError", message: h || "Aborted" });
                }),
                  b.signal.addEventListener("abort", w);
              });
              y(
                u(
                  S,
                  m,
                  (R = s == null ? void 0 : s.getPendingMeta) == null
                    ? void 0
                    : R.call(
                        s,
                        { requestId: S, arg: m },
                        { getState: k, extra: C },
                      ),
                ),
              ),
                (T = await Promise.race([
                  O,
                  Promise.resolve(
                    o(m, {
                      dispatch: y,
                      getState: k,
                      extra: C,
                      requestId: S,
                      signal: b.signal,
                      abort: P,
                      rejectWithValue: (N, z) => new Rc(N, z),
                      fulfillWithValue: (N, z) => new mh(N, z),
                    }),
                  ).then((N) => {
                    if (N instanceof Rc) throw N;
                    return N instanceof mh
                      ? l(N.payload, S, m, N.meta)
                      : l(N, S, m);
                  }),
                ]));
            } catch (M) {
              T =
                M instanceof Rc ? f(null, S, m, M.payload, M.meta) : f(M, S, m);
            } finally {
              w && b.signal.removeEventListener("abort", w);
            }
            return (
              (s &&
                !s.dispatchConditionRejection &&
                f.match(T) &&
                T.meta.condition) ||
                y(T),
              T
            );
          })();
          return Object.assign(I, {
            abort: P,
            requestId: S,
            arg: m,
            unwrap() {
              return I.then(mS);
            },
          });
        };
      }
      return Object.assign(p, {
        pending: u,
        rejected: f,
        fulfilled: l,
        settled: nr(f, l),
        typePrefix: r,
      });
    }
    return (e.withTypes = () => e), e;
  })();
function mS(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function hS(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var gS = Symbol.for("rtk-slice-createasyncthunk");
function yS(e, r) {
  return `${e}/${r}`;
}
function vS({ creators: e } = {}) {
  var o;
  const r = (o = e == null ? void 0 : e.asyncThunk) == null ? void 0 : o[gS];
  return function (l) {
    const { name: u, reducerPath: f = u } = l;
    if (!u) throw new Error(bn(11));
    const p =
        (typeof l.reducers == "function" ? l.reducers(wS()) : l.reducers) || {},
      m = Object.keys(p),
      y = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      k = {
        addCase(v, x) {
          const R = typeof v == "string" ? v : v.type;
          if (!R) throw new Error(bn(12));
          if (R in y.sliceCaseReducersByType) throw new Error(bn(13));
          return (y.sliceCaseReducersByType[R] = x), k;
        },
        addMatcher(v, x) {
          return y.sliceMatchers.push({ matcher: v, reducer: x }), k;
        },
        exposeAction(v, x) {
          return (y.actionCreators[v] = x), k;
        },
        exposeCaseReducer(v, x) {
          return (y.sliceCaseReducersByName[v] = x), k;
        },
      };
    m.forEach((v) => {
      const x = p[v],
        R = {
          reducerName: v,
          type: yS(u, v),
          createNotation: typeof l.reducers == "function",
        };
      xS(x) ? kS(R, x, k, r) : CS(R, x, k);
    });
    function C() {
      const [v = {}, x = [], R = void 0] =
          typeof l.extraReducers == "function"
            ? Qg(l.extraReducers)
            : [l.extraReducers],
        M = { ...v, ...y.sliceCaseReducersByType };
      return cS(l.initialState, (O) => {
        for (let N in M) O.addCase(N, M[N]);
        for (let N of y.sliceMatchers) O.addMatcher(N.matcher, N.reducer);
        for (let N of x) O.addMatcher(N.matcher, N.reducer);
        R && O.addDefaultCase(R);
      });
    }
    const S = (v) => v,
      b = new Map();
    let w;
    function h(v, x) {
      return w || (w = C()), w(v, x);
    }
    function P() {
      return w || (w = C()), w.getInitialState();
    }
    function I(v, x = !1) {
      function R(O) {
        let N = O[v];
        return typeof N > "u" && x && (N = P()), N;
      }
      function M(O = S) {
        const N = dh(b, x, () => new WeakMap());
        return dh(N, O, () => {
          const z = {};
          for (const [g, A] of Object.entries(l.selectors ?? {}))
            z[g] = SS(A, O, P, x);
          return z;
        });
      }
      return {
        reducerPath: v,
        getSelectors: M,
        get selectors() {
          return M(R);
        },
        selectSlice: R,
      };
    }
    const T = {
      name: u,
      reducer: h,
      actions: y.actionCreators,
      caseReducers: y.sliceCaseReducersByName,
      getInitialState: P,
      ...I(f),
      injectInto(v, { reducerPath: x, ...R } = {}) {
        const M = x ?? f;
        return (
          v.inject({ reducerPath: M, reducer: h }, R), { ...T, ...I(M, !0) }
        );
      },
    };
    return T;
  };
}
function SS(e, r, o, s) {
  function l(u, ...f) {
    let p = r(u);
    return typeof p > "u" && s && (p = o()), e(p, ...f);
  }
  return (l.unwrapped = e), l;
}
var _o = vS();
function wS() {
  function e(r, o) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: r, ...o };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(r) {
        return Object.assign(
          {
            [r.name](...o) {
              return r(...o);
            },
          }[r.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(r, o) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: r,
          reducer: o,
        };
      },
      asyncThunk: e,
    }
  );
}
function CS({ type: e, reducerName: r, createNotation: o }, s, l) {
  let u, f;
  if ("reducer" in s) {
    if (o && !bS(s)) throw new Error(bn(17));
    (u = s.reducer), (f = s.prepare);
  } else u = s;
  l.addCase(e, u)
    .exposeCaseReducer(r, u)
    .exposeAction(r, f ? xn(e, f) : xn(e));
}
function xS(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function bS(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function kS({ type: e, reducerName: r }, o, s, l) {
  if (!l) throw new Error(bn(18));
  const {
      payloadCreator: u,
      fulfilled: f,
      pending: p,
      rejected: m,
      settled: y,
      options: k,
    } = o,
    C = l(e, u, k);
  s.exposeAction(r, C),
    f && s.addCase(C.fulfilled, f),
    p && s.addCase(C.pending, p),
    m && s.addCase(C.rejected, m),
    y && s.addMatcher(C.settled, y),
    s.exposeCaseReducer(r, {
      fulfilled: f || _l,
      pending: p || _l,
      rejected: m || _l,
      settled: y || _l,
    });
}
function _l() {}
function bn(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Gg = ((e) => (
  (e.uninitialized = "uninitialized"),
  (e.pending = "pending"),
  (e.fulfilled = "fulfilled"),
  (e.rejected = "rejected"),
  e
))(Gg || {});
function ES(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected",
  };
}
var gh = Dn;
function Yg(e, r) {
  if (e === r || !((gh(e) && gh(r)) || (Array.isArray(e) && Array.isArray(r))))
    return r;
  const o = Object.keys(r),
    s = Object.keys(e);
  let l = o.length === s.length;
  const u = Array.isArray(r) ? [] : {};
  for (const f of o) (u[f] = Yg(e[f], r[f])), l && (l = e[f] === u[f]);
  return l ? e : u;
}
function Uo(e) {
  let r = 0;
  for (const o in e) r++;
  return r;
}
var yh = (e) => [].concat(...e);
function RS(e) {
  return new RegExp("(^|:)//").test(e);
}
function PS() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function Xl(e) {
  return e != null;
}
function TS() {
  return typeof navigator > "u" || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
var IS = (e) => e.replace(/\/$/, ""),
  OS = (e) => e.replace(/^\//, "");
function MS(e, r) {
  if (!e) return r;
  if (!r) return e;
  if (RS(r)) return r;
  const o = e.endsWith("/") || !r.startsWith("?") ? "/" : "";
  return (e = IS(e)), (r = OS(r)), `${e}${o}${r}`;
}
function _S(e, r, o) {
  return e.has(r) ? e.get(r) : e.set(r, o).get(r);
}
var vh = (...e) => fetch(...e),
  $S = (e) => e.status >= 200 && e.status <= 299,
  NS = (e) => /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "");
function Sh(e) {
  if (!Dn(e)) return e;
  const r = { ...e };
  for (const [o, s] of Object.entries(r)) s === void 0 && delete r[o];
  return r;
}
function AS({
  baseUrl: e,
  prepareHeaders: r = (C) => C,
  fetchFn: o = vh,
  paramsSerializer: s,
  isJsonContentType: l = NS,
  jsonContentType: u = "application/json",
  jsonReplacer: f,
  timeout: p,
  responseHandler: m,
  validateStatus: y,
  ...k
} = {}) {
  return (
    typeof fetch > "u" &&
      o === vh &&
      console.warn(
        "Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.",
      ),
    async (S, b, w) => {
      const { getState: h, extra: P, endpoint: I, forced: T, type: v } = b;
      let x,
        {
          url: R,
          headers: M = new Headers(k.headers),
          params: O = void 0,
          responseHandler: N = m ?? "json",
          validateStatus: z = y ?? $S,
          timeout: g = p,
          ...A
        } = typeof S == "string" ? { url: S } : S,
        j,
        B = b.signal;
      g &&
        ((j = new AbortController()),
        b.signal.addEventListener("abort", j.abort),
        (B = j.signal));
      let q = { ...k, signal: B, ...A };
      (M = new Headers(Sh(M))),
        (q.headers =
          (await r(M, {
            getState: h,
            arg: S,
            extra: P,
            endpoint: I,
            forced: T,
            type: v,
            extraOptions: w,
          })) || M);
      const V = (se) =>
        typeof se == "object" &&
        (Dn(se) || Array.isArray(se) || typeof se.toJSON == "function");
      if (
        (!q.headers.has("content-type") &&
          V(q.body) &&
          q.headers.set("content-type", u),
        V(q.body) && l(q.headers) && (q.body = JSON.stringify(q.body, f)),
        O)
      ) {
        const se = ~R.indexOf("?") ? "&" : "?",
          le = s ? s(O) : new URLSearchParams(Sh(O));
        R += se + le;
      }
      R = MS(e, R);
      const Y = new Request(R, q);
      x = { request: new Request(R, q) };
      let H,
        K = !1,
        Z =
          j &&
          setTimeout(() => {
            (K = !0), j.abort();
          }, g);
      try {
        H = await o(Y);
      } catch (se) {
        return {
          error: {
            status: K ? "TIMEOUT_ERROR" : "FETCH_ERROR",
            error: String(se),
          },
          meta: x,
        };
      } finally {
        Z && clearTimeout(Z),
          j == null || j.signal.removeEventListener("abort", j.abort);
      }
      const L = H.clone();
      x.response = L;
      let G,
        ie = "";
      try {
        let se;
        if (
          (await Promise.all([
            C(H, N).then(
              (le) => (G = le),
              (le) => (se = le),
            ),
            L.text().then(
              (le) => (ie = le),
              () => {},
            ),
          ]),
          se)
        )
          throw se;
      } catch (se) {
        return {
          error: {
            status: "PARSING_ERROR",
            originalStatus: H.status,
            data: ie,
            error: String(se),
          },
          meta: x,
        };
      }
      return z(H, G)
        ? { data: G, meta: x }
        : { error: { status: H.status, data: G }, meta: x };
    }
  );
  async function C(S, b) {
    if (typeof b == "function") return b(S);
    if (
      (b === "content-type" && (b = l(S.headers) ? "json" : "text"),
      b === "json")
    ) {
      const w = await S.text();
      return w.length ? JSON.parse(w) : null;
    }
    return S.text();
  }
}
var wh = class {
    constructor(e, r = void 0) {
      (this.value = e), (this.meta = r);
    }
  },
  Pf = xn("__rtkq/focused"),
  Xg = xn("__rtkq/unfocused"),
  Tf = xn("__rtkq/online"),
  Jg = xn("__rtkq/offline");
function Zg(e) {
  return e.type === "query";
}
function zS(e) {
  return e.type === "mutation";
}
function If(e, r, o, s, l, u) {
  return LS(e)
    ? e(r, o, s, l).filter(Xl).map(Xc).map(u)
    : Array.isArray(e)
      ? e.map(Xc).map(u)
      : [];
}
function LS(e) {
  return typeof e == "function";
}
function Xc(e) {
  return typeof e == "string" ? { type: e } : e;
}
function FS(e, r) {
  return e.catch(r);
}
var is = Symbol("forceQueryFn"),
  Jc = (e) => typeof e[is] == "function";
function DS({
  serializeQueryArgs: e,
  queryThunk: r,
  mutationThunk: o,
  api: s,
  context: l,
}) {
  const u = new Map(),
    f = new Map(),
    {
      unsubscribeQueryResult: p,
      removeMutationResult: m,
      updateSubscriptionOptions: y,
    } = s.internalActions;
  return {
    buildInitiateQuery: w,
    buildInitiateMutation: h,
    getRunningQueryThunk: k,
    getRunningMutationThunk: C,
    getRunningQueriesThunk: S,
    getRunningMutationsThunk: b,
  };
  function k(P, I) {
    return (T) => {
      var R;
      const v = l.endpointDefinitions[P],
        x = e({ queryArgs: I, endpointDefinition: v, endpointName: P });
      return (R = u.get(T)) == null ? void 0 : R[x];
    };
  }
  function C(P, I) {
    return (T) => {
      var v;
      return (v = f.get(T)) == null ? void 0 : v[I];
    };
  }
  function S() {
    return (P) => Object.values(u.get(P) || {}).filter(Xl);
  }
  function b() {
    return (P) => Object.values(f.get(P) || {}).filter(Xl);
  }
  function w(P, I) {
    const T =
      (
        v,
        {
          subscribe: x = !0,
          forceRefetch: R,
          subscriptionOptions: M,
          [is]: O,
          ...N
        } = {},
      ) =>
      (z, g) => {
        var G;
        const A = e({ queryArgs: v, endpointDefinition: I, endpointName: P }),
          j = r({
            ...N,
            type: "query",
            subscribe: x,
            forceRefetch: R,
            subscriptionOptions: M,
            endpointName: P,
            originalArgs: v,
            queryCacheKey: A,
            [is]: O,
          }),
          B = s.endpoints[P].select(v),
          q = z(j),
          V = B(g()),
          { requestId: Y, abort: te } = q,
          H = V.requestId !== Y,
          K = (G = u.get(z)) == null ? void 0 : G[A],
          Z = () => B(g()),
          L = Object.assign(
            O
              ? q.then(Z)
              : H && !K
                ? Promise.resolve(V)
                : Promise.all([K, q]).then(Z),
            {
              arg: v,
              requestId: Y,
              subscriptionOptions: M,
              queryCacheKey: A,
              abort: te,
              async unwrap() {
                const ie = await L;
                if (ie.isError) throw ie.error;
                return ie.data;
              },
              refetch: () => z(T(v, { subscribe: !1, forceRefetch: !0 })),
              unsubscribe() {
                x && z(p({ queryCacheKey: A, requestId: Y }));
              },
              updateSubscriptionOptions(ie) {
                (L.subscriptionOptions = ie),
                  z(
                    y({
                      endpointName: P,
                      requestId: Y,
                      queryCacheKey: A,
                      options: ie,
                    }),
                  );
              },
            },
          );
        if (!K && !H && !O) {
          const ie = _S(u, z, {});
          (ie[A] = L),
            L.then(() => {
              delete ie[A], Uo(ie) || u.delete(z);
            });
        }
        return L;
      };
    return T;
  }
  function h(P) {
    return (I, { track: T = !0, fixedCacheKey: v } = {}) =>
      (x, R) => {
        const M = o({
            type: "mutation",
            endpointName: P,
            originalArgs: I,
            track: T,
            fixedCacheKey: v,
          }),
          O = x(M),
          { requestId: N, abort: z, unwrap: g } = O,
          A = FS(
            O.unwrap().then((V) => ({ data: V })),
            (V) => ({ error: V }),
          ),
          j = () => {
            x(m({ requestId: N, fixedCacheKey: v }));
          },
          B = Object.assign(A, {
            arg: O.arg,
            requestId: N,
            abort: z,
            unwrap: g,
            reset: j,
          }),
          q = f.get(x) || {};
        return (
          f.set(x, q),
          (q[N] = B),
          B.then(() => {
            delete q[N], Uo(q) || f.delete(x);
          }),
          v &&
            ((q[v] = B),
            B.then(() => {
              q[v] === B && (delete q[v], Uo(q) || f.delete(x));
            })),
          B
        );
      };
  }
}
function Ch(e) {
  return e;
}
function jS({
  reducerPath: e,
  baseQuery: r,
  context: { endpointDefinitions: o },
  serializeQueryArgs: s,
  api: l,
  assertTagType: u,
}) {
  const f = (T, v, x, R) => (M, O) => {
      const N = o[T],
        z = s({ queryArgs: v, endpointDefinition: N, endpointName: T });
      if (
        (M(
          l.internalActions.queryResultPatched({
            queryCacheKey: z,
            patches: x,
          }),
        ),
        !R)
      )
        return;
      const g = l.endpoints[T].select(v)(O()),
        A = If(N.providesTags, g.data, void 0, v, {}, u);
      M(
        l.internalActions.updateProvidedBy({
          queryCacheKey: z,
          providedTags: A,
        }),
      );
    },
    p =
      (T, v, x, R = !0) =>
      (M, O) => {
        const z = l.endpoints[T].select(v)(O()),
          g = {
            patches: [],
            inversePatches: [],
            undo: () => M(l.util.patchQueryData(T, v, g.inversePatches, R)),
          };
        if (z.status === "uninitialized") return g;
        let A;
        if ("data" in z)
          if (kn(z.data)) {
            const [j, B, q] = Vg(z.data, x);
            g.patches.push(...B), g.inversePatches.push(...q), (A = j);
          } else
            (A = x(z.data)),
              g.patches.push({ op: "replace", path: [], value: A }),
              g.inversePatches.push({ op: "replace", path: [], value: z.data });
        return (
          g.patches.length === 0 ||
            M(l.util.patchQueryData(T, v, g.patches, R)),
          g
        );
      },
    m = (T, v, x) => (R) =>
      R(
        l.endpoints[T].initiate(v, {
          subscribe: !1,
          forceRefetch: !0,
          [is]: () => ({ data: x }),
        }),
      ),
    y = async (
      T,
      {
        signal: v,
        abort: x,
        rejectWithValue: R,
        fulfillWithValue: M,
        dispatch: O,
        getState: N,
        extra: z,
      },
    ) => {
      const g = o[T.endpointName];
      try {
        let A = Ch,
          j;
        const B = {
            signal: v,
            abort: x,
            dispatch: O,
            getState: N,
            extra: z,
            endpoint: T.endpointName,
            type: T.type,
            forced: T.type === "query" ? k(T, N()) : void 0,
            queryCacheKey: T.type === "query" ? T.queryCacheKey : void 0,
          },
          q = T.type === "query" ? T[is] : void 0;
        if (
          (q
            ? (j = q())
            : g.query
              ? ((j = await r(g.query(T.originalArgs), B, g.extraOptions)),
                g.transformResponse && (A = g.transformResponse))
              : (j = await g.queryFn(T.originalArgs, B, g.extraOptions, (V) =>
                  r(V, B, g.extraOptions),
                )),
          typeof process < "u",
          j.error)
        )
          throw new wh(j.error, j.meta);
        return M(await A(j.data, j.meta, T.originalArgs), {
          fulfilledTimeStamp: Date.now(),
          baseQueryMeta: j.meta,
          [Zr]: !0,
        });
      } catch (A) {
        let j = A;
        if (j instanceof wh) {
          let B = Ch;
          g.query && g.transformErrorResponse && (B = g.transformErrorResponse);
          try {
            return R(await B(j.value, j.meta, T.originalArgs), {
              baseQueryMeta: j.meta,
              [Zr]: !0,
            });
          } catch (q) {
            j = q;
          }
        }
        throw (console.error(j), j);
      }
    };
  function k(T, v) {
    var N, z, g;
    const x =
        (z = (N = v[e]) == null ? void 0 : N.queries) == null
          ? void 0
          : z[T.queryCacheKey],
      R = (g = v[e]) == null ? void 0 : g.config.refetchOnMountOrArgChange,
      M = x == null ? void 0 : x.fulfilledTimeStamp,
      O = T.forceRefetch ?? (T.subscribe && R);
    return O ? O === !0 || (Number(new Date()) - Number(M)) / 1e3 >= O : !1;
  }
  const C = hh(`${e}/executeQuery`, y, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [Zr]: !0 };
      },
      condition(T, { getState: v }) {
        var g, A, j;
        const x = v(),
          R =
            (A = (g = x[e]) == null ? void 0 : g.queries) == null
              ? void 0
              : A[T.queryCacheKey],
          M = R == null ? void 0 : R.fulfilledTimeStamp,
          O = T.originalArgs,
          N = R == null ? void 0 : R.originalArgs,
          z = o[T.endpointName];
        return Jc(T)
          ? !0
          : (R == null ? void 0 : R.status) === "pending"
            ? !1
            : k(T, x) ||
                (Zg(z) &&
                  (j = z == null ? void 0 : z.forceRefetch) != null &&
                  j.call(z, {
                    currentArg: O,
                    previousArg: N,
                    endpointState: R,
                    state: x,
                  }))
              ? !0
              : !M;
      },
      dispatchConditionRejection: !0,
    }),
    S = hh(`${e}/executeMutation`, y, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [Zr]: !0 };
      },
    }),
    b = (T) => "force" in T,
    w = (T) => "ifOlderThan" in T,
    h = (T, v, x) => (R, M) => {
      const O = b(x) && x.force,
        N = w(x) && x.ifOlderThan,
        z = (A = !0) => {
          const j = { forceRefetch: A, isPrefetch: !0 };
          return l.endpoints[T].initiate(v, j);
        },
        g = l.endpoints[T].select(v)(M());
      if (O) R(z());
      else if (N) {
        const A = g == null ? void 0 : g.fulfilledTimeStamp;
        if (!A) {
          R(z());
          return;
        }
        (Number(new Date()) - Number(new Date(A))) / 1e3 >= N && R(z());
      } else R(z(!1));
    };
  function P(T) {
    return (v) => {
      var x, R;
      return (
        ((R = (x = v == null ? void 0 : v.meta) == null ? void 0 : x.arg) ==
        null
          ? void 0
          : R.endpointName) === T
      );
    };
  }
  function I(T, v) {
    return {
      matchPending: Xi(Ef(T), P(v)),
      matchFulfilled: Xi(_r(T), P(v)),
      matchRejected: Xi(qo(T), P(v)),
    };
  }
  return {
    queryThunk: C,
    mutationThunk: S,
    prefetch: h,
    updateQueryData: p,
    upsertQueryData: m,
    patchQueryData: f,
    buildMatchThunkActions: I,
  };
}
function ey(e, r, o, s) {
  return If(
    o[e.meta.arg.endpointName][r],
    _r(e) ? e.payload : void 0,
    fa(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0,
    s,
  );
}
function $l(e, r, o) {
  const s = e[r];
  s && o(s);
}
function ss(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function xh(e, r, o) {
  const s = e[ss(r)];
  s && o(s);
}
var Fi = {};
function BS({
  reducerPath: e,
  queryThunk: r,
  mutationThunk: o,
  serializeQueryArgs: s,
  context: {
    endpointDefinitions: l,
    apiUid: u,
    extractRehydrationInfo: f,
    hasRehydrationInfo: p,
  },
  assertTagType: m,
  config: y,
}) {
  const k = xn(`${e}/resetApiState`);
  function C(M, O, N, z) {
    var g;
    M[(g = O.queryCacheKey)] ??
      (M[g] = { status: "uninitialized", endpointName: O.endpointName }),
      $l(M, O.queryCacheKey, (A) => {
        (A.status = "pending"),
          (A.requestId = N && A.requestId ? A.requestId : z.requestId),
          O.originalArgs !== void 0 && (A.originalArgs = O.originalArgs),
          (A.startedTimeStamp = z.startedTimeStamp);
      });
  }
  function S(M, O, N) {
    $l(M, O.arg.queryCacheKey, (z) => {
      if (z.requestId !== O.requestId && !Jc(O.arg)) return;
      const { merge: g } = l[O.arg.endpointName];
      if (((z.status = "fulfilled"), g))
        if (z.data !== void 0) {
          const {
            fulfilledTimeStamp: A,
            arg: j,
            baseQueryMeta: B,
            requestId: q,
          } = O;
          let V = ps(z.data, (Y) =>
            g(Y, N, {
              arg: j.originalArgs,
              baseQueryMeta: B,
              fulfilledTimeStamp: A,
              requestId: q,
            }),
          );
          z.data = V;
        } else z.data = N;
      else
        z.data =
          (l[O.arg.endpointName].structuralSharing ?? !0)
            ? Yg(jn(z.data) ? $1(z.data) : z.data, N)
            : N;
      delete z.error, (z.fulfilledTimeStamp = O.fulfilledTimeStamp);
    });
  }
  const b = _o({
      name: `${e}/queries`,
      initialState: Fi,
      reducers: {
        removeQueryResult: {
          reducer(M, { payload: { queryCacheKey: O } }) {
            delete M[O];
          },
          prepare: Li(),
        },
        cacheEntriesUpserted: {
          reducer(M, O) {
            for (const N of O.payload) {
              const { queryDescription: z, value: g } = N;
              C(M, z, !0, {
                arg: z,
                requestId: O.meta.requestId,
                startedTimeStamp: O.meta.timestamp,
              }),
                S(
                  M,
                  {
                    arg: z,
                    requestId: O.meta.requestId,
                    fulfilledTimeStamp: O.meta.timestamp,
                    baseQueryMeta: {},
                  },
                  g,
                );
            }
          },
          prepare: (M) => ({
            payload: M.map((z) => {
              const { endpointName: g, arg: A, value: j } = z,
                B = l[g];
              return {
                queryDescription: {
                  type: "query",
                  endpointName: g,
                  originalArgs: z.arg,
                  queryCacheKey: s({
                    queryArgs: A,
                    endpointDefinition: B,
                    endpointName: g,
                  }),
                },
                value: j,
              };
            }),
            meta: { [Zr]: !0, requestId: Rf(), timestamp: Date.now() },
          }),
        },
        queryResultPatched: {
          reducer(M, { payload: { queryCacheKey: O, patches: N } }) {
            $l(M, O, (z) => {
              z.data = ah(z.data, N.concat());
            });
          },
          prepare: Li(),
        },
      },
      extraReducers(M) {
        M.addCase(r.pending, (O, { meta: N, meta: { arg: z } }) => {
          const g = Jc(z);
          C(O, z, g, N);
        })
          .addCase(r.fulfilled, (O, { meta: N, payload: z }) => {
            S(O, N, z);
          })
          .addCase(
            r.rejected,
            (
              O,
              {
                meta: { condition: N, arg: z, requestId: g },
                error: A,
                payload: j,
              },
            ) => {
              $l(O, z.queryCacheKey, (B) => {
                if (!N) {
                  if (B.requestId !== g) return;
                  (B.status = "rejected"), (B.error = j ?? A);
                }
              });
            },
          )
          .addMatcher(p, (O, N) => {
            const { queries: z } = f(N);
            for (const [g, A] of Object.entries(z))
              ((A == null ? void 0 : A.status) === "fulfilled" ||
                (A == null ? void 0 : A.status) === "rejected") &&
                (O[g] = A);
          });
      },
    }),
    w = _o({
      name: `${e}/mutations`,
      initialState: Fi,
      reducers: {
        removeMutationResult: {
          reducer(M, { payload: O }) {
            const N = ss(O);
            N in M && delete M[N];
          },
          prepare: Li(),
        },
      },
      extraReducers(M) {
        M.addCase(
          o.pending,
          (
            O,
            { meta: N, meta: { requestId: z, arg: g, startedTimeStamp: A } },
          ) => {
            g.track &&
              (O[ss(N)] = {
                requestId: z,
                status: "pending",
                endpointName: g.endpointName,
                startedTimeStamp: A,
              });
          },
        )
          .addCase(o.fulfilled, (O, { payload: N, meta: z }) => {
            z.arg.track &&
              xh(O, z, (g) => {
                g.requestId === z.requestId &&
                  ((g.status = "fulfilled"),
                  (g.data = N),
                  (g.fulfilledTimeStamp = z.fulfilledTimeStamp));
              });
          })
          .addCase(o.rejected, (O, { payload: N, error: z, meta: g }) => {
            g.arg.track &&
              xh(O, g, (A) => {
                A.requestId === g.requestId &&
                  ((A.status = "rejected"), (A.error = N ?? z));
              });
          })
          .addMatcher(p, (O, N) => {
            const { mutations: z } = f(N);
            for (const [g, A] of Object.entries(z))
              ((A == null ? void 0 : A.status) === "fulfilled" ||
                (A == null ? void 0 : A.status) === "rejected") &&
                g !== (A == null ? void 0 : A.requestId) &&
                (O[g] = A);
          });
      },
    }),
    h = _o({
      name: `${e}/invalidation`,
      initialState: Fi,
      reducers: {
        updateProvidedBy: {
          reducer(M, O) {
            var g, A;
            const { queryCacheKey: N, providedTags: z } = O.payload;
            for (const j of Object.values(M))
              for (const B of Object.values(j)) {
                const q = B.indexOf(N);
                q !== -1 && B.splice(q, 1);
              }
            for (const { type: j, id: B } of z) {
              const q =
                (g = M[j] ?? (M[j] = {}))[(A = B || "__internal_without_id")] ??
                (g[A] = []);
              q.includes(N) || q.push(N);
            }
          },
          prepare: Li(),
        },
      },
      extraReducers(M) {
        M.addCase(
          b.actions.removeQueryResult,
          (O, { payload: { queryCacheKey: N } }) => {
            for (const z of Object.values(O))
              for (const g of Object.values(z)) {
                const A = g.indexOf(N);
                A !== -1 && g.splice(A, 1);
              }
          },
        )
          .addMatcher(p, (O, N) => {
            var g, A;
            const { provided: z } = f(N);
            for (const [j, B] of Object.entries(z))
              for (const [q, V] of Object.entries(B)) {
                const Y =
                  (g = O[j] ?? (O[j] = {}))[
                    (A = q || "__internal_without_id")
                  ] ?? (g[A] = []);
                for (const te of V) Y.includes(te) || Y.push(te);
              }
          })
          .addMatcher(nr(_r(r), fa(r)), (O, N) => {
            const z = ey(N, "providesTags", l, m),
              { queryCacheKey: g } = N.meta.arg;
            h.caseReducers.updateProvidedBy(
              O,
              h.actions.updateProvidedBy({ queryCacheKey: g, providedTags: z }),
            );
          });
      },
    }),
    P = _o({
      name: `${e}/subscriptions`,
      initialState: Fi,
      reducers: {
        updateSubscriptionOptions(M, O) {},
        unsubscribeQueryResult(M, O) {},
        internal_getRTKQSubscriptions() {},
      },
    }),
    I = _o({
      name: `${e}/internalSubscriptions`,
      initialState: Fi,
      reducers: {
        subscriptionsUpdated: {
          reducer(M, O) {
            return ah(M, O.payload);
          },
          prepare: Li(),
        },
      },
    }),
    T = _o({
      name: `${e}/config`,
      initialState: {
        online: TS(),
        focused: PS(),
        middlewareRegistered: !1,
        ...y,
      },
      reducers: {
        middlewareRegistered(M, { payload: O }) {
          M.middlewareRegistered =
            M.middlewareRegistered === "conflict" || u !== O ? "conflict" : !0;
        },
      },
      extraReducers: (M) => {
        M.addCase(Tf, (O) => {
          O.online = !0;
        })
          .addCase(Jg, (O) => {
            O.online = !1;
          })
          .addCase(Pf, (O) => {
            O.focused = !0;
          })
          .addCase(Xg, (O) => {
            O.focused = !1;
          })
          .addMatcher(p, (O) => ({ ...O }));
      },
    }),
    v = Lg({
      queries: b.reducer,
      mutations: w.reducer,
      provided: h.reducer,
      subscriptions: I.reducer,
      config: T.reducer,
    }),
    x = (M, O) => v(k.match(O) ? void 0 : M, O),
    R = {
      ...T.actions,
      ...b.actions,
      ...P.actions,
      ...I.actions,
      ...w.actions,
      ...h.actions,
      resetApiState: k,
    };
  return { reducer: x, actions: R };
}
var Or = Symbol.for("RTKQ/skipToken"),
  ty = { status: "uninitialized" },
  bh = ps(ty, () => {}),
  kh = ps(ty, () => {});
function US({ serializeQueryArgs: e, reducerPath: r, createSelector: o }) {
  const s = (C) => bh,
    l = (C) => kh;
  return {
    buildQuerySelector: p,
    buildMutationSelector: m,
    selectInvalidatedBy: y,
    selectCachedArgsForQuery: k,
  };
  function u(C) {
    return { ...C, ...ES(C.status) };
  }
  function f(C) {
    return C[r];
  }
  function p(C, S) {
    return (b) => {
      if (b === Or) return o(s, u);
      const w = e({ queryArgs: b, endpointDefinition: S, endpointName: C });
      return o((P) => {
        var I, T;
        return (
          ((T = (I = f(P)) == null ? void 0 : I.queries) == null
            ? void 0
            : T[w]) ?? bh
        );
      }, u);
    };
  }
  function m() {
    return (C) => {
      let S;
      return (
        typeof C == "object" ? (S = ss(C) ?? Or) : (S = C),
        o(
          S === Or
            ? l
            : (h) => {
                var P, I;
                return (
                  ((I = (P = f(h)) == null ? void 0 : P.mutations) == null
                    ? void 0
                    : I[S]) ?? kh
                );
              },
          u,
        )
      );
    };
  }
  function y(C, S) {
    const b = C[r],
      w = new Set();
    for (const h of S.filter(Xl).map(Xc)) {
      const P = b.provided[h.type];
      if (!P) continue;
      let I = (h.id !== void 0 ? P[h.id] : yh(Object.values(P))) ?? [];
      for (const T of I) w.add(T);
    }
    return yh(
      Array.from(w.values()).map((h) => {
        const P = b.queries[h];
        return P
          ? [
              {
                queryCacheKey: h,
                endpointName: P.endpointName,
                originalArgs: P.originalArgs,
              },
            ]
          : [];
      }),
    );
  }
  function k(C, S) {
    return Object.values(C[r].queries)
      .filter(
        (b) =>
          (b == null ? void 0 : b.endpointName) === S &&
          b.status !== "uninitialized",
      )
      .map((b) => b.originalArgs);
  }
}
var $o = WeakMap ? new WeakMap() : void 0,
  Eh = ({ endpointName: e, queryArgs: r }) => {
    let o = "";
    const s = $o == null ? void 0 : $o.get(r);
    if (typeof s == "string") o = s;
    else {
      const l = JSON.stringify(
        r,
        (u, f) => (
          (f = typeof f == "bigint" ? { $bigint: f.toString() } : f),
          (f = Dn(f)
            ? Object.keys(f)
                .sort()
                .reduce((p, m) => ((p[m] = f[m]), p), {})
            : f),
          f
        ),
      );
      Dn(r) && ($o == null || $o.set(r, l)), (o = l);
    }
    return `${e}(${o})`;
  };
function WS(...e) {
  return function (o) {
    const s = Yl((y) => {
        var k;
        return (k = o.extractRehydrationInfo) == null
          ? void 0
          : k.call(o, y, { reducerPath: o.reducerPath ?? "api" });
      }),
      l = {
        reducerPath: "api",
        keepUnusedDataFor: 60,
        refetchOnMountOrArgChange: !1,
        refetchOnFocus: !1,
        refetchOnReconnect: !1,
        invalidationBehavior: "delayed",
        ...o,
        extractRehydrationInfo: s,
        serializeQueryArgs(y) {
          let k = Eh;
          if ("serializeQueryArgs" in y.endpointDefinition) {
            const C = y.endpointDefinition.serializeQueryArgs;
            k = (S) => {
              const b = C(S);
              return typeof b == "string" ? b : Eh({ ...S, queryArgs: b });
            };
          } else o.serializeQueryArgs && (k = o.serializeQueryArgs);
          return k(y);
        },
        tagTypes: [...(o.tagTypes || [])],
      },
      u = {
        endpointDefinitions: {},
        batch(y) {
          y();
        },
        apiUid: Rf(),
        extractRehydrationInfo: s,
        hasRehydrationInfo: Yl((y) => s(y) != null),
      },
      f = {
        injectEndpoints: m,
        enhanceEndpoints({ addTagTypes: y, endpoints: k }) {
          if (y)
            for (const C of y) l.tagTypes.includes(C) || l.tagTypes.push(C);
          if (k)
            for (const [C, S] of Object.entries(k))
              typeof S == "function"
                ? S(u.endpointDefinitions[C])
                : Object.assign(u.endpointDefinitions[C] || {}, S);
          return f;
        },
      },
      p = e.map((y) => y.init(f, l, u));
    function m(y) {
      const k = y.endpoints({
        query: (C) => ({ ...C, type: "query" }),
        mutation: (C) => ({ ...C, type: "mutation" }),
      });
      for (const [C, S] of Object.entries(k)) {
        if (y.overrideExisting !== !0 && C in u.endpointDefinitions) {
          if (y.overrideExisting === "throw") throw new Error(bn(39));
          continue;
        }
        u.endpointDefinitions[C] = S;
        for (const b of p) b.injectEndpoint(C, S);
      }
      return f;
    }
    return f.injectEndpoints({ endpoints: o.endpoints });
  };
}
function Tr(e, ...r) {
  return Object.assign(e, ...r);
}
var VS = ({ api: e, queryThunk: r, internalState: o }) => {
  const s = `${e.reducerPath}/subscriptions`;
  let l = null,
    u = null;
  const { updateSubscriptionOptions: f, unsubscribeQueryResult: p } =
      e.internalActions,
    m = (b, w) => {
      var P, I, T;
      if (f.match(w)) {
        const { queryCacheKey: v, requestId: x, options: R } = w.payload;
        return (
          (P = b == null ? void 0 : b[v]) != null && P[x] && (b[v][x] = R), !0
        );
      }
      if (p.match(w)) {
        const { queryCacheKey: v, requestId: x } = w.payload;
        return b[v] && delete b[v][x], !0;
      }
      if (e.internalActions.removeQueryResult.match(w))
        return delete b[w.payload.queryCacheKey], !0;
      if (r.pending.match(w)) {
        const {
            meta: { arg: v, requestId: x },
          } = w,
          R = b[(I = v.queryCacheKey)] ?? (b[I] = {});
        return (
          (R[`${x}_running`] = {}),
          v.subscribe && (R[x] = v.subscriptionOptions ?? R[x] ?? {}),
          !0
        );
      }
      let h = !1;
      if (r.fulfilled.match(w) || r.rejected.match(w)) {
        const v = b[w.meta.arg.queryCacheKey] || {},
          x = `${w.meta.requestId}_running`;
        h || (h = !!v[x]), delete v[x];
      }
      if (r.rejected.match(w)) {
        const {
          meta: { condition: v, arg: x, requestId: R },
        } = w;
        if (v && x.subscribe) {
          const M = b[(T = x.queryCacheKey)] ?? (b[T] = {});
          (M[R] = x.subscriptionOptions ?? M[R] ?? {}), (h = !0);
        }
      }
      return h;
    },
    y = () => o.currentSubscriptions,
    S = {
      getSubscriptions: y,
      getSubscriptionCount: (b) => {
        const h = y()[b] ?? {};
        return Uo(h);
      },
      isRequestSubscribed: (b, w) => {
        var P;
        const h = y();
        return !!((P = h == null ? void 0 : h[b]) != null && P[w]);
      },
    };
  return (b, w) => {
    if (
      (l || (l = JSON.parse(JSON.stringify(o.currentSubscriptions))),
      e.util.resetApiState.match(b))
    )
      return (l = o.currentSubscriptions = {}), (u = null), [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(b))
      return [!1, S];
    const h = m(o.currentSubscriptions, b);
    let P = !0;
    if (h) {
      u ||
        (u = setTimeout(() => {
          const v = JSON.parse(JSON.stringify(o.currentSubscriptions)),
            [, x] = Vg(l, () => v);
          w.next(e.internalActions.subscriptionsUpdated(x)),
            (l = v),
            (u = null);
        }, 500));
      const I = typeof b.type == "string" && !!b.type.startsWith(s),
        T = r.rejected.match(b) && b.meta.condition && !!b.meta.arg.subscribe;
      P = !I && !T;
    }
    return [P, !1];
  };
};
function HS(e) {
  for (const r in e) return !1;
  return !0;
}
var qS = 2147483647 / 1e3 - 1,
  QS = ({
    reducerPath: e,
    api: r,
    queryThunk: o,
    context: s,
    internalState: l,
  }) => {
    const {
        removeQueryResult: u,
        unsubscribeQueryResult: f,
        cacheEntriesUpserted: p,
      } = r.internalActions,
      m = nr(f.match, o.fulfilled, o.rejected, p.match);
    function y(b) {
      const w = l.currentSubscriptions[b];
      return !!w && !HS(w);
    }
    const k = {},
      C = (b, w, h) => {
        var P;
        if (m(b)) {
          const I = w.getState()[e];
          let T;
          if (p.match(b))
            T = b.payload.map((v) => v.queryDescription.queryCacheKey);
          else {
            const { queryCacheKey: v } = f.match(b) ? b.payload : b.meta.arg;
            T = [v];
          }
          for (const v of T)
            S(
              v,
              (P = I.queries[v]) == null ? void 0 : P.endpointName,
              w,
              I.config,
            );
        }
        if (r.util.resetApiState.match(b))
          for (const [I, T] of Object.entries(k))
            T && clearTimeout(T), delete k[I];
        if (s.hasRehydrationInfo(b)) {
          const I = w.getState()[e],
            { queries: T } = s.extractRehydrationInfo(b);
          for (const [v, x] of Object.entries(T))
            S(v, x == null ? void 0 : x.endpointName, w, I.config);
        }
      };
    function S(b, w, h, P) {
      const I = s.endpointDefinitions[w],
        T = (I == null ? void 0 : I.keepUnusedDataFor) ?? P.keepUnusedDataFor;
      if (T === 1 / 0) return;
      const v = Math.max(0, Math.min(T, qS));
      if (!y(b)) {
        const x = k[b];
        x && clearTimeout(x),
          (k[b] = setTimeout(() => {
            y(b) || h.dispatch(u({ queryCacheKey: b })), delete k[b];
          }, v * 1e3));
      }
    }
    return C;
  },
  Rh = new Error("Promise never resolved before cacheEntryRemoved."),
  KS = ({
    api: e,
    reducerPath: r,
    context: o,
    queryThunk: s,
    mutationThunk: l,
    internalState: u,
  }) => {
    const f = Yc(s),
      p = Yc(l),
      m = _r(s, l),
      y = {};
    function k(h, P, I) {
      const T = y[h];
      T != null &&
        T.valueResolved &&
        (T.valueResolved({ data: P, meta: I }), delete T.valueResolved);
    }
    function C(h) {
      const P = y[h];
      P && (delete y[h], P.cacheEntryRemoved());
    }
    const S = (h, P, I) => {
      const T = b(h);
      function v(x, R, M, O) {
        const N = I[r].queries[R],
          z = P.getState()[r].queries[R];
        !N && z && w(x, O, R, P, M);
      }
      if (s.pending.match(h))
        v(
          h.meta.arg.endpointName,
          T,
          h.meta.requestId,
          h.meta.arg.originalArgs,
        );
      else if (e.internalActions.cacheEntriesUpserted.match(h))
        for (const { queryDescription: x, value: R } of h.payload) {
          const { endpointName: M, originalArgs: O, queryCacheKey: N } = x;
          v(M, N, h.meta.requestId, O), k(N, R, {});
        }
      else if (l.pending.match(h))
        P.getState()[r].mutations[T] &&
          w(
            h.meta.arg.endpointName,
            h.meta.arg.originalArgs,
            T,
            P,
            h.meta.requestId,
          );
      else if (m(h)) k(T, h.payload, h.meta.baseQueryMeta);
      else if (
        e.internalActions.removeQueryResult.match(h) ||
        e.internalActions.removeMutationResult.match(h)
      )
        C(T);
      else if (e.util.resetApiState.match(h))
        for (const x of Object.keys(y)) C(x);
    };
    function b(h) {
      return f(h)
        ? h.meta.arg.queryCacheKey
        : p(h)
          ? (h.meta.arg.fixedCacheKey ?? h.meta.requestId)
          : e.internalActions.removeQueryResult.match(h)
            ? h.payload.queryCacheKey
            : e.internalActions.removeMutationResult.match(h)
              ? ss(h.payload)
              : "";
    }
    function w(h, P, I, T, v) {
      const x = o.endpointDefinitions[h],
        R = x == null ? void 0 : x.onCacheEntryAdded;
      if (!R) return;
      const M = {},
        O = new Promise((B) => {
          M.cacheEntryRemoved = B;
        }),
        N = Promise.race([
          new Promise((B) => {
            M.valueResolved = B;
          }),
          O.then(() => {
            throw Rh;
          }),
        ]);
      N.catch(() => {}), (y[I] = M);
      const z = e.endpoints[h].select(x.type === "query" ? P : I),
        g = T.dispatch((B, q, V) => V),
        A = {
          ...T,
          getCacheEntry: () => z(T.getState()),
          requestId: v,
          extra: g,
          updateCachedData:
            x.type === "query"
              ? (B) => T.dispatch(e.util.updateQueryData(h, P, B))
              : void 0,
          cacheDataLoaded: N,
          cacheEntryRemoved: O,
        },
        j = R(P, A);
      Promise.resolve(j).catch((B) => {
        if (B !== Rh) throw B;
      });
    }
    return S;
  },
  GS =
    ({ api: e, context: { apiUid: r }, reducerPath: o }) =>
    (s, l) => {
      e.util.resetApiState.match(s) &&
        l.dispatch(e.internalActions.middlewareRegistered(r));
    },
  YS = ({
    reducerPath: e,
    context: r,
    context: { endpointDefinitions: o },
    mutationThunk: s,
    queryThunk: l,
    api: u,
    assertTagType: f,
    refetchQuery: p,
    internalState: m,
  }) => {
    const { removeQueryResult: y } = u.internalActions,
      k = nr(_r(s), fa(s)),
      C = nr(_r(s, l), qo(s, l));
    let S = [];
    const b = (P, I) => {
      k(P)
        ? h(ey(P, "invalidatesTags", o, f), I)
        : C(P)
          ? h([], I)
          : u.util.invalidateTags.match(P) &&
            h(If(P.payload, void 0, void 0, void 0, void 0, f), I);
    };
    function w(P) {
      var I, T;
      for (const v in P.queries)
        if (((I = P.queries[v]) == null ? void 0 : I.status) === "pending")
          return !0;
      for (const v in P.mutations)
        if (((T = P.mutations[v]) == null ? void 0 : T.status) === "pending")
          return !0;
      return !1;
    }
    function h(P, I) {
      const T = I.getState(),
        v = T[e];
      if ((S.push(...P), v.config.invalidationBehavior === "delayed" && w(v)))
        return;
      const x = S;
      if (((S = []), x.length === 0)) return;
      const R = u.util.selectInvalidatedBy(T, x);
      r.batch(() => {
        const M = Array.from(R.values());
        for (const { queryCacheKey: O } of M) {
          const N = v.queries[O],
            z = m.currentSubscriptions[O] ?? {};
          N &&
            (Uo(z) === 0
              ? I.dispatch(y({ queryCacheKey: O }))
              : N.status !== "uninitialized" && I.dispatch(p(N)));
        }
      });
    }
    return b;
  },
  XS = ({
    reducerPath: e,
    queryThunk: r,
    api: o,
    refetchQuery: s,
    internalState: l,
  }) => {
    const u = {},
      f = (S, b) => {
        (o.internalActions.updateSubscriptionOptions.match(S) ||
          o.internalActions.unsubscribeQueryResult.match(S)) &&
          m(S.payload, b),
          (r.pending.match(S) || (r.rejected.match(S) && S.meta.condition)) &&
            m(S.meta.arg, b),
          (r.fulfilled.match(S) ||
            (r.rejected.match(S) && !S.meta.condition)) &&
            p(S.meta.arg, b),
          o.util.resetApiState.match(S) && k();
      };
    function p({ queryCacheKey: S }, b) {
      const w = b.getState()[e],
        h = w.queries[S],
        P = l.currentSubscriptions[S];
      if (!h || h.status === "uninitialized") return;
      const { lowestPollingInterval: I, skipPollingIfUnfocused: T } = C(P);
      if (!Number.isFinite(I)) return;
      const v = u[S];
      v != null && v.timeout && (clearTimeout(v.timeout), (v.timeout = void 0));
      const x = Date.now() + I;
      u[S] = {
        nextPollTimestamp: x,
        pollingInterval: I,
        timeout: setTimeout(() => {
          (w.config.focused || !T) && b.dispatch(s(h)),
            p({ queryCacheKey: S }, b);
        }, I),
      };
    }
    function m({ queryCacheKey: S }, b) {
      const h = b.getState()[e].queries[S],
        P = l.currentSubscriptions[S];
      if (!h || h.status === "uninitialized") return;
      const { lowestPollingInterval: I } = C(P);
      if (!Number.isFinite(I)) {
        y(S);
        return;
      }
      const T = u[S],
        v = Date.now() + I;
      (!T || v < T.nextPollTimestamp) && p({ queryCacheKey: S }, b);
    }
    function y(S) {
      const b = u[S];
      b != null && b.timeout && clearTimeout(b.timeout), delete u[S];
    }
    function k() {
      for (const S of Object.keys(u)) y(S);
    }
    function C(S = {}) {
      let b = !1,
        w = Number.POSITIVE_INFINITY;
      for (let h in S)
        S[h].pollingInterval &&
          ((w = Math.min(S[h].pollingInterval, w)),
          (b = S[h].skipPollingIfUnfocused || b));
      return { lowestPollingInterval: w, skipPollingIfUnfocused: b };
    }
    return f;
  },
  JS = ({ api: e, context: r, queryThunk: o, mutationThunk: s }) => {
    const l = Ef(o, s),
      u = qo(o, s),
      f = _r(o, s),
      p = {};
    return (y, k) => {
      var C, S;
      if (l(y)) {
        const {
            requestId: b,
            arg: { endpointName: w, originalArgs: h },
          } = y.meta,
          P = r.endpointDefinitions[w],
          I = P == null ? void 0 : P.onQueryStarted;
        if (I) {
          const T = {},
            v = new Promise((O, N) => {
              (T.resolve = O), (T.reject = N);
            });
          v.catch(() => {}), (p[b] = T);
          const x = e.endpoints[w].select(P.type === "query" ? h : b),
            R = k.dispatch((O, N, z) => z),
            M = {
              ...k,
              getCacheEntry: () => x(k.getState()),
              requestId: b,
              extra: R,
              updateCachedData:
                P.type === "query"
                  ? (O) => k.dispatch(e.util.updateQueryData(w, h, O))
                  : void 0,
              queryFulfilled: v,
            };
          I(h, M);
        }
      } else if (f(y)) {
        const { requestId: b, baseQueryMeta: w } = y.meta;
        (C = p[b]) == null || C.resolve({ data: y.payload, meta: w }),
          delete p[b];
      } else if (u(y)) {
        const { requestId: b, rejectedWithValue: w, baseQueryMeta: h } = y.meta;
        (S = p[b]) == null ||
          S.reject({
            error: y.payload ?? y.error,
            isUnhandledError: !w,
            meta: h,
          }),
          delete p[b];
      }
    };
  },
  ZS = ({
    reducerPath: e,
    context: r,
    api: o,
    refetchQuery: s,
    internalState: l,
  }) => {
    const { removeQueryResult: u } = o.internalActions,
      f = (m, y) => {
        Pf.match(m) && p(y, "refetchOnFocus"),
          Tf.match(m) && p(y, "refetchOnReconnect");
      };
    function p(m, y) {
      const k = m.getState()[e],
        C = k.queries,
        S = l.currentSubscriptions;
      r.batch(() => {
        for (const b of Object.keys(S)) {
          const w = C[b],
            h = S[b];
          if (!h || !w) continue;
          (Object.values(h).some((I) => I[y] === !0) ||
            (Object.values(h).every((I) => I[y] === void 0) && k.config[y])) &&
            (Uo(h) === 0
              ? m.dispatch(u({ queryCacheKey: b }))
              : w.status !== "uninitialized" && m.dispatch(s(w)));
        }
      });
    }
    return f;
  };
function ew(e) {
  const { reducerPath: r, queryThunk: o, api: s, context: l } = e,
    { apiUid: u } = l,
    f = { invalidateTags: xn(`${r}/invalidateTags`) },
    p = (C) => C.type.startsWith(`${r}/`),
    m = [GS, QS, YS, XS, KS, JS];
  return {
    middleware: (C) => {
      let S = !1;
      const w = {
          ...e,
          internalState: { currentSubscriptions: {} },
          refetchQuery: k,
          isThisApiSliceAction: p,
        },
        h = m.map((T) => T(w)),
        P = VS(w),
        I = ZS(w);
      return (T) => (v) => {
        if (!Fg(v)) return T(v);
        S || ((S = !0), C.dispatch(s.internalActions.middlewareRegistered(u)));
        const x = { ...C, next: T },
          R = C.getState(),
          [M, O] = P(v, x, R);
        let N;
        if (
          (M ? (N = T(v)) : (N = O),
          C.getState()[r] && (I(v, x, R), p(v) || l.hasRehydrationInfo(v)))
        )
          for (const z of h) z(v, x, R);
        return N;
      };
    },
    actions: f,
  };
  function k(C) {
    return e.api.endpoints[C.endpointName].initiate(C.originalArgs, {
      subscribe: !1,
      forceRefetch: !0,
    });
  }
}
var Ph = Symbol(),
  tw = ({ createSelector: e = kf } = {}) => ({
    name: Ph,
    init(
      r,
      {
        baseQuery: o,
        tagTypes: s,
        reducerPath: l,
        serializeQueryArgs: u,
        keepUnusedDataFor: f,
        refetchOnMountOrArgChange: p,
        refetchOnFocus: m,
        refetchOnReconnect: y,
        invalidationBehavior: k,
      },
      C,
    ) {
      W1();
      const S = (H) => H;
      Object.assign(r, {
        reducerPath: l,
        endpoints: {},
        internalActions: {
          onOnline: Tf,
          onOffline: Jg,
          onFocus: Pf,
          onFocusLost: Xg,
        },
        util: {},
      });
      const {
          queryThunk: b,
          mutationThunk: w,
          patchQueryData: h,
          updateQueryData: P,
          upsertQueryData: I,
          prefetch: T,
          buildMatchThunkActions: v,
        } = jS({
          baseQuery: o,
          reducerPath: l,
          context: C,
          api: r,
          serializeQueryArgs: u,
          assertTagType: S,
        }),
        { reducer: x, actions: R } = BS({
          context: C,
          queryThunk: b,
          mutationThunk: w,
          serializeQueryArgs: u,
          reducerPath: l,
          assertTagType: S,
          config: {
            refetchOnFocus: m,
            refetchOnReconnect: y,
            refetchOnMountOrArgChange: p,
            keepUnusedDataFor: f,
            reducerPath: l,
            invalidationBehavior: k,
          },
        });
      Tr(r.util, {
        patchQueryData: h,
        updateQueryData: P,
        upsertQueryData: I,
        prefetch: T,
        resetApiState: R.resetApiState,
        upsertQueryEntries: R.cacheEntriesUpserted,
      }),
        Tr(r.internalActions, R);
      const { middleware: M, actions: O } = ew({
        reducerPath: l,
        context: C,
        queryThunk: b,
        mutationThunk: w,
        api: r,
        assertTagType: S,
      });
      Tr(r.util, O), Tr(r, { reducer: x, middleware: M });
      const {
        buildQuerySelector: N,
        buildMutationSelector: z,
        selectInvalidatedBy: g,
        selectCachedArgsForQuery: A,
      } = US({ serializeQueryArgs: u, reducerPath: l, createSelector: e });
      Tr(r.util, { selectInvalidatedBy: g, selectCachedArgsForQuery: A });
      const {
        buildInitiateQuery: j,
        buildInitiateMutation: B,
        getRunningMutationThunk: q,
        getRunningMutationsThunk: V,
        getRunningQueriesThunk: Y,
        getRunningQueryThunk: te,
      } = DS({
        queryThunk: b,
        mutationThunk: w,
        api: r,
        serializeQueryArgs: u,
        context: C,
      });
      return (
        Tr(r.util, {
          getRunningMutationThunk: q,
          getRunningMutationsThunk: V,
          getRunningQueryThunk: te,
          getRunningQueriesThunk: Y,
        }),
        {
          name: Ph,
          injectEndpoint(H, K) {
            var L;
            const Z = r;
            (L = Z.endpoints)[H] ?? (L[H] = {}),
              Zg(K)
                ? Tr(
                    Z.endpoints[H],
                    { name: H, select: N(H, K), initiate: j(H, K) },
                    v(b, H),
                  )
                : zS(K) &&
                  Tr(
                    Z.endpoints[H],
                    { name: H, select: z(), initiate: B(H) },
                    v(w, H),
                  );
          },
        }
      );
    },
  });
function Pc(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function nw(e) {
  return e.type === "query";
}
function rw(e) {
  return e.type === "mutation";
}
function Nl(e, ...r) {
  return Object.assign(e, ...r);
}
var No = WeakMap ? new WeakMap() : void 0,
  ow = ({ endpointName: e, queryArgs: r }) => {
    let o = "";
    const s = No == null ? void 0 : No.get(r);
    if (typeof s == "string") o = s;
    else {
      const l = JSON.stringify(
        r,
        (u, f) => (
          (f = typeof f == "bigint" ? { $bigint: f.toString() } : f),
          (f = Dn(f)
            ? Object.keys(f)
                .sort()
                .reduce((p, m) => ((p[m] = f[m]), p), {})
            : f),
          f
        ),
      );
      Dn(r) && (No == null || No.set(r, l)), (o = l);
    }
    return `${e}(${o})`;
  },
  Tc = Symbol();
function Th(e, r, o, s) {
  const l = _.useMemo(
      () => ({
        queryArgs: e,
        serialized:
          typeof e == "object"
            ? r({ queryArgs: e, endpointDefinition: o, endpointName: s })
            : e,
      }),
      [e, r, o, s],
    ),
    u = _.useRef(l);
  return (
    _.useEffect(() => {
      u.current.serialized !== l.serialized && (u.current = l);
    }, [l]),
    u.current.serialized === l.serialized ? u.current.queryArgs : e
  );
}
function Ic(e) {
  const r = _.useRef(e);
  return (
    _.useEffect(() => {
      Gi(r.current, e) || (r.current = e);
    }, [e]),
    Gi(r.current, e) ? r.current : e
  );
}
var iw = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  sw = iw(),
  lw = () => typeof navigator < "u" && navigator.product === "ReactNative",
  aw = lw(),
  uw = () => (sw || aw ? _.useLayoutEffect : _.useEffect),
  cw = uw(),
  fw = (e) =>
    e.isUninitialized
      ? {
          ...e,
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: Gg.pending,
        }
      : e;
function dw({
  api: e,
  moduleOptions: {
    batch: r,
    hooks: { useDispatch: o, useSelector: s, useStore: l },
    unstable__sideEffectsInRender: u,
    createSelector: f,
  },
  serializeQueryArgs: p,
  context: m,
}) {
  const y = u ? (w) => w() : _.useEffect;
  return { buildQueryHooks: S, buildMutationHook: b, usePrefetch: C };
  function k(w, h, P) {
    if (h != null && h.endpointName && w.isUninitialized) {
      const { endpointName: M } = h,
        O = m.endpointDefinitions[M];
      P !== Or &&
        p({
          queryArgs: h.originalArgs,
          endpointDefinition: O,
          endpointName: M,
        }) === p({ queryArgs: P, endpointDefinition: O, endpointName: M }) &&
        (h = void 0);
    }
    let I = w.isSuccess ? w.data : h == null ? void 0 : h.data;
    I === void 0 && (I = w.data);
    const T = I !== void 0,
      v = w.isLoading,
      x = (!h || h.isLoading || h.isUninitialized) && !T && v,
      R =
        w.isSuccess ||
        (T && ((v && !(h != null && h.isError)) || w.isUninitialized));
    return {
      ...w,
      data: I,
      currentData: w.data,
      isFetching: v,
      isLoading: x,
      isSuccess: R,
    };
  }
  function C(w, h) {
    const P = o(),
      I = Ic(h);
    return _.useCallback(
      (T, v) => P(e.util.prefetch(w, T, { ...I, ...v })),
      [w, P, I],
    );
  }
  function S(w) {
    const h = (
        T,
        {
          refetchOnReconnect: v,
          refetchOnFocus: x,
          refetchOnMountOrArgChange: R,
          skip: M = !1,
          pollingInterval: O = 0,
          skipPollingIfUnfocused: N = !1,
        } = {},
      ) => {
        const { initiate: z } = e.endpoints[w],
          g = o(),
          A = _.useRef(void 0);
        if (!A.current) {
          const Z = g(e.internalActions.internal_getRTKQSubscriptions());
          A.current = Z;
        }
        const j = Th(M ? Or : T, ow, m.endpointDefinitions[w], w),
          B = Ic({
            refetchOnReconnect: v,
            refetchOnFocus: x,
            pollingInterval: O,
            skipPollingIfUnfocused: N,
          }),
          q = _.useRef(!1),
          V = _.useRef(void 0);
        let { queryCacheKey: Y, requestId: te } = V.current || {},
          H = !1;
        Y && te && (H = A.current.isRequestSubscribed(Y, te));
        const K = !H && q.current;
        return (
          y(() => {
            q.current = H;
          }),
          y(() => {
            K && (V.current = void 0);
          }, [K]),
          y(() => {
            var G;
            const Z = V.current;
            if (j === Or) {
              Z == null || Z.unsubscribe(), (V.current = void 0);
              return;
            }
            const L = (G = V.current) == null ? void 0 : G.subscriptionOptions;
            if (!Z || Z.arg !== j) {
              Z == null || Z.unsubscribe();
              const ie = g(z(j, { subscriptionOptions: B, forceRefetch: R }));
              V.current = ie;
            } else B !== L && Z.updateSubscriptionOptions(B);
          }, [g, z, R, j, B, K]),
          _.useEffect(
            () => () => {
              var Z;
              (Z = V.current) == null || Z.unsubscribe(), (V.current = void 0);
            },
            [],
          ),
          _.useMemo(
            () => ({
              refetch: () => {
                var Z;
                if (!V.current) throw new Error(bn(38));
                return (Z = V.current) == null ? void 0 : Z.refetch();
              },
            }),
            [],
          )
        );
      },
      P = ({
        refetchOnReconnect: T,
        refetchOnFocus: v,
        pollingInterval: x = 0,
        skipPollingIfUnfocused: R = !1,
      } = {}) => {
        const { initiate: M } = e.endpoints[w],
          O = o(),
          [N, z] = _.useState(Tc),
          g = _.useRef(void 0),
          A = Ic({
            refetchOnReconnect: T,
            refetchOnFocus: v,
            pollingInterval: x,
            skipPollingIfUnfocused: R,
          });
        y(() => {
          var Y, te;
          const V = (Y = g.current) == null ? void 0 : Y.subscriptionOptions;
          A !== V &&
            ((te = g.current) == null || te.updateSubscriptionOptions(A));
        }, [A]);
        const j = _.useRef(A);
        y(() => {
          j.current = A;
        }, [A]);
        const B = _.useCallback(
            function (V, Y = !1) {
              let te;
              return (
                r(() => {
                  var H;
                  (H = g.current) == null || H.unsubscribe(),
                    (g.current = te =
                      O(
                        M(V, {
                          subscriptionOptions: j.current,
                          forceRefetch: !Y,
                        }),
                      )),
                    z(V);
                }),
                te
              );
            },
            [O, M],
          ),
          q = _.useCallback(() => {
            var V, Y;
            (V = g.current) != null &&
              V.queryCacheKey &&
              O(
                e.internalActions.removeQueryResult({
                  queryCacheKey:
                    (Y = g.current) == null ? void 0 : Y.queryCacheKey,
                }),
              );
          }, [O]);
        return (
          _.useEffect(
            () => () => {
              var V;
              (V = g == null ? void 0 : g.current) == null || V.unsubscribe();
            },
            [],
          ),
          _.useEffect(() => {
            N !== Tc && !g.current && B(N, !0);
          }, [N, B]),
          _.useMemo(() => [B, N, { reset: q }], [B, N, q])
        );
      },
      I = (T, { skip: v = !1, selectFromResult: x } = {}) => {
        const { select: R } = e.endpoints[w],
          M = Th(v ? Or : T, p, m.endpointDefinitions[w], w),
          O = _.useRef(void 0),
          N = _.useMemo(
            () =>
              f([R(M), (B, q) => q, (B) => M], k, {
                memoizeOptions: { resultEqualityCheck: Gi },
              }),
            [R, M],
          ),
          z = _.useMemo(
            () =>
              x
                ? f([N], x, {
                    devModeChecks: { identityFunctionCheck: "never" },
                  })
                : N,
            [N, x],
          ),
          g = s((B) => z(B, O.current), Gi),
          A = l(),
          j = N(A.getState(), O.current);
        return (
          cw(() => {
            O.current = j;
          }, [j]),
          g
        );
      };
    return {
      useQueryState: I,
      useQuerySubscription: h,
      useLazyQuerySubscription: P,
      useLazyQuery(T) {
        const [v, x, { reset: R }] = P(T),
          M = I(x, { ...T, skip: x === Tc }),
          O = _.useMemo(() => ({ lastArg: x }), [x]);
        return _.useMemo(() => [v, { ...M, reset: R }, O], [v, M, R, O]);
      },
      useQuery(T, v) {
        const x = h(T, v),
          R = I(T, {
            selectFromResult: T === Or || (v != null && v.skip) ? void 0 : fw,
            ...v,
          }),
          {
            data: M,
            status: O,
            isLoading: N,
            isSuccess: z,
            isError: g,
            error: A,
          } = R;
        return (
          _.useDebugValue({
            data: M,
            status: O,
            isLoading: N,
            isSuccess: z,
            isError: g,
            error: A,
          }),
          _.useMemo(() => ({ ...R, ...x }), [R, x])
        );
      },
    };
  }
  function b(w) {
    return ({ selectFromResult: h, fixedCacheKey: P } = {}) => {
      const { select: I, initiate: T } = e.endpoints[w],
        v = o(),
        [x, R] = _.useState();
      _.useEffect(
        () => () => {
          (x != null && x.arg.fixedCacheKey) || x == null || x.reset();
        },
        [x],
      );
      const M = _.useCallback(
          function (L) {
            const G = v(T(L, { fixedCacheKey: P }));
            return R(G), G;
          },
          [v, T, P],
        ),
        { requestId: O } = x || {},
        N = _.useMemo(
          () =>
            I({
              fixedCacheKey: P,
              requestId: x == null ? void 0 : x.requestId,
            }),
          [P, x, I],
        ),
        z = _.useMemo(() => (h ? f([N], h) : N), [h, N]),
        g = s(z, Gi),
        A = P == null ? (x == null ? void 0 : x.arg.originalArgs) : void 0,
        j = _.useCallback(() => {
          r(() => {
            x && R(void 0),
              P &&
                v(
                  e.internalActions.removeMutationResult({
                    requestId: O,
                    fixedCacheKey: P,
                  }),
                );
          });
        }, [v, P, x, O]),
        {
          endpointName: B,
          data: q,
          status: V,
          isLoading: Y,
          isSuccess: te,
          isError: H,
          error: K,
        } = g;
      _.useDebugValue({
        endpointName: B,
        data: q,
        status: V,
        isLoading: Y,
        isSuccess: te,
        isError: H,
        error: K,
      });
      const Z = _.useMemo(
        () => ({ ...g, originalArgs: A, reset: j }),
        [g, A, j],
      );
      return _.useMemo(() => [M, Z], [M, Z]);
    };
  }
}
var pw = Symbol(),
  mw = ({
    batch: e = P1,
    hooks: r = { useDispatch: b1, useSelector: R1, useStore: Ag },
    createSelector: o = kf,
    unstable__sideEffectsInRender: s = !1,
    ...l
  } = {}) => ({
    name: pw,
    init(u, { serializeQueryArgs: f }, p) {
      const m = u,
        {
          buildQueryHooks: y,
          buildMutationHook: k,
          usePrefetch: C,
        } = dw({
          api: u,
          moduleOptions: {
            batch: e,
            hooks: r,
            unstable__sideEffectsInRender: s,
            createSelector: o,
          },
          serializeQueryArgs: f,
          context: p,
        });
      return (
        Nl(m, { usePrefetch: C }),
        Nl(p, { batch: e }),
        {
          injectEndpoint(S, b) {
            if (nw(b)) {
              const {
                useQuery: w,
                useLazyQuery: h,
                useLazyQuerySubscription: P,
                useQueryState: I,
                useQuerySubscription: T,
              } = y(S);
              Nl(m.endpoints[S], {
                useQuery: w,
                useLazyQuery: h,
                useLazyQuerySubscription: P,
                useQueryState: I,
                useQuerySubscription: T,
              }),
                (u[`use${Pc(S)}Query`] = w),
                (u[`useLazy${Pc(S)}Query`] = h);
            } else if (rw(b)) {
              const w = k(S);
              Nl(m.endpoints[S], { useMutation: w }),
                (u[`use${Pc(S)}Mutation`] = w);
            }
          },
        }
      );
    },
  }),
  hw = WS(tw(), mw());
const Bl = hw({
    reducerPath: "blogsApi",
    baseQuery: AS({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    endpoints: (e) => ({
      getPosts: e.query({ query: () => "posts" }),
      getPhotos: e.query({ query: () => "photos" }),
    }),
  }),
  { useGetPostsQuery: gw, useGetPhotosQuery: SR } = Bl,
  yw = aS({
    reducer: { [Bl.reducerPath]: Bl.reducer },
    middleware: (e) => e().concat(Bl.middleware),
  }),
  ls = { black: "#000", white: "#fff" },
  Ao = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  zo = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  Lo = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  Fo = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Do = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  Di = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  vw = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  };
function rr(e, ...r) {
  const o = new URL(`https://mui.com/production-error/?code=${e}`);
  return (
    r.forEach((s) => o.searchParams.append("args[]", s)),
    `Minified MUI error #${e}; visit ${o} for the full message.`
  );
}
const da = "$$material";
function Jl() {
  return (
    (Jl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var s in o) ({}).hasOwnProperty.call(o, s) && (e[s] = o[s]);
          }
          return e;
        }),
    Jl.apply(null, arguments)
  );
}
function Sw(e) {
  if (e.sheet) return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e) return document.styleSheets[r];
}
function ww(e) {
  var r = document.createElement("style");
  return (
    r.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && r.setAttribute("nonce", e.nonce),
    r.appendChild(document.createTextNode("")),
    r.setAttribute("data-s", ""),
    r
  );
}
var Cw = (function () {
    function e(o) {
      var s = this;
      (this._insertTag = function (l) {
        var u;
        s.tags.length === 0
          ? s.insertionPoint
            ? (u = s.insertionPoint.nextSibling)
            : s.prepend
              ? (u = s.container.firstChild)
              : (u = s.before)
          : (u = s.tags[s.tags.length - 1].nextSibling),
          s.container.insertBefore(l, u),
          s.tags.push(l);
      }),
        (this.isSpeedy = o.speedy === void 0 ? !0 : o.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = o.nonce),
        (this.key = o.key),
        (this.container = o.container),
        (this.prepend = o.prepend),
        (this.insertionPoint = o.insertionPoint),
        (this.before = null);
    }
    var r = e.prototype;
    return (
      (r.hydrate = function (s) {
        s.forEach(this._insertTag);
      }),
      (r.insert = function (s) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(ww(this));
        var l = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var u = Sw(l);
          try {
            u.insertRule(s, u.cssRules.length);
          } catch {}
        } else l.appendChild(document.createTextNode(s));
        this.ctr++;
      }),
      (r.flush = function () {
        this.tags.forEach(function (s) {
          var l;
          return (l = s.parentNode) == null ? void 0 : l.removeChild(s);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  $t = "-ms-",
  Zl = "-moz-",
  Ne = "-webkit-",
  ny = "comm",
  Of = "rule",
  Mf = "decl",
  xw = "@import",
  ry = "@keyframes",
  bw = "@layer",
  kw = Math.abs,
  pa = String.fromCharCode,
  Ew = Object.assign;
function Rw(e, r) {
  return Rt(e, 0) ^ 45
    ? (((((((r << 2) ^ Rt(e, 0)) << 2) ^ Rt(e, 1)) << 2) ^ Rt(e, 2)) << 2) ^
        Rt(e, 3)
    : 0;
}
function oy(e) {
  return e.trim();
}
function Pw(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function Ae(e, r, o) {
  return e.replace(r, o);
}
function Zc(e, r) {
  return e.indexOf(r);
}
function Rt(e, r) {
  return e.charCodeAt(r) | 0;
}
function as(e, r, o) {
  return e.slice(r, o);
}
function An(e) {
  return e.length;
}
function _f(e) {
  return e.length;
}
function Al(e, r) {
  return r.push(e), e;
}
function Tw(e, r) {
  return e.map(r).join("");
}
var ma = 1,
  Qo = 1,
  iy = 0,
  Qt = 0,
  mt = 0,
  Go = "";
function ha(e, r, o, s, l, u, f) {
  return {
    value: e,
    root: r,
    parent: o,
    type: s,
    props: l,
    children: u,
    line: ma,
    column: Qo,
    length: f,
    return: "",
  };
}
function ji(e, r) {
  return Ew(ha("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Iw() {
  return mt;
}
function Ow() {
  return (
    (mt = Qt > 0 ? Rt(Go, --Qt) : 0), Qo--, mt === 10 && ((Qo = 1), ma--), mt
  );
}
function en() {
  return (
    (mt = Qt < iy ? Rt(Go, Qt++) : 0), Qo++, mt === 10 && ((Qo = 1), ma++), mt
  );
}
function Fn() {
  return Rt(Go, Qt);
}
function Ul() {
  return Qt;
}
function hs(e, r) {
  return as(Go, e, r);
}
function us(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function sy(e) {
  return (ma = Qo = 1), (iy = An((Go = e))), (Qt = 0), [];
}
function ly(e) {
  return (Go = ""), e;
}
function Wl(e) {
  return oy(hs(Qt - 1, ef(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Mw(e) {
  for (; (mt = Fn()) && mt < 33; ) en();
  return us(e) > 2 || us(mt) > 3 ? "" : " ";
}
function _w(e, r) {
  for (
    ;
    --r &&
    en() &&
    !(mt < 48 || mt > 102 || (mt > 57 && mt < 65) || (mt > 70 && mt < 97));

  );
  return hs(e, Ul() + (r < 6 && Fn() == 32 && en() == 32));
}
function ef(e) {
  for (; en(); )
    switch (mt) {
      case e:
        return Qt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ef(mt);
        break;
      case 40:
        e === 41 && ef(e);
        break;
      case 92:
        en();
        break;
    }
  return Qt;
}
function $w(e, r) {
  for (; en() && e + mt !== 57; ) if (e + mt === 84 && Fn() === 47) break;
  return "/*" + hs(r, Qt - 1) + "*" + pa(e === 47 ? e : en());
}
function Nw(e) {
  for (; !us(Fn()); ) en();
  return hs(e, Qt);
}
function Aw(e) {
  return ly(Vl("", null, null, null, [""], (e = sy(e)), 0, [0], e));
}
function Vl(e, r, o, s, l, u, f, p, m) {
  for (
    var y = 0,
      k = 0,
      C = f,
      S = 0,
      b = 0,
      w = 0,
      h = 1,
      P = 1,
      I = 1,
      T = 0,
      v = "",
      x = l,
      R = u,
      M = s,
      O = v;
    P;

  )
    switch (((w = T), (T = en()))) {
      case 40:
        if (w != 108 && Rt(O, C - 1) == 58) {
          Zc((O += Ae(Wl(T), "&", "&\f")), "&\f") != -1 && (I = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += Wl(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += Mw(w);
        break;
      case 92:
        O += _w(Ul() - 1, 7);
        continue;
      case 47:
        switch (Fn()) {
          case 42:
          case 47:
            Al(zw($w(en(), Ul()), r, o), m);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * h:
        p[y++] = An(O) * I;
      case 125 * h:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            P = 0;
          case 59 + k:
            I == -1 && (O = Ae(O, /\f/g, "")),
              b > 0 &&
                An(O) - C &&
                Al(
                  b > 32
                    ? Oh(O + ";", s, o, C - 1)
                    : Oh(Ae(O, " ", "") + ";", s, o, C - 2),
                  m,
                );
            break;
          case 59:
            O += ";";
          default:
            if (
              (Al((M = Ih(O, r, o, y, k, l, p, v, (x = []), (R = []), C)), u),
              T === 123)
            )
              if (k === 0) Vl(O, r, M, M, x, u, C, p, R);
              else
                switch (S === 99 && Rt(O, 3) === 110 ? 100 : S) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Vl(
                      e,
                      M,
                      M,
                      s && Al(Ih(e, M, M, 0, 0, l, p, v, l, (x = []), C), R),
                      l,
                      R,
                      C,
                      p,
                      s ? x : R,
                    );
                    break;
                  default:
                    Vl(O, M, M, M, [""], R, 0, p, R);
                }
        }
        (y = k = b = 0), (h = I = 1), (v = O = ""), (C = f);
        break;
      case 58:
        (C = 1 + An(O)), (b = w);
      default:
        if (h < 1) {
          if (T == 123) --h;
          else if (T == 125 && h++ == 0 && Ow() == 125) continue;
        }
        switch (((O += pa(T)), T * h)) {
          case 38:
            I = k > 0 ? 1 : ((O += "\f"), -1);
            break;
          case 44:
            (p[y++] = (An(O) - 1) * I), (I = 1);
            break;
          case 64:
            Fn() === 45 && (O += Wl(en())),
              (S = Fn()),
              (k = C = An((v = O += Nw(Ul())))),
              T++;
            break;
          case 45:
            w === 45 && An(O) == 2 && (h = 0);
        }
    }
  return u;
}
function Ih(e, r, o, s, l, u, f, p, m, y, k) {
  for (
    var C = l - 1, S = l === 0 ? u : [""], b = _f(S), w = 0, h = 0, P = 0;
    w < s;
    ++w
  )
    for (var I = 0, T = as(e, C + 1, (C = kw((h = f[w])))), v = e; I < b; ++I)
      (v = oy(h > 0 ? S[I] + " " + T : Ae(T, /&\f/g, S[I]))) && (m[P++] = v);
  return ha(e, r, o, l === 0 ? Of : p, m, y, k);
}
function zw(e, r, o) {
  return ha(e, r, o, ny, pa(Iw()), as(e, 2, -2), 0);
}
function Oh(e, r, o, s) {
  return ha(e, r, o, Mf, as(e, 0, s), as(e, s + 1, -1), s);
}
function Wo(e, r) {
  for (var o = "", s = _f(e), l = 0; l < s; l++) o += r(e[l], l, e, r) || "";
  return o;
}
function Lw(e, r, o, s) {
  switch (e.type) {
    case bw:
      if (e.children.length) break;
    case xw:
    case Mf:
      return (e.return = e.return || e.value);
    case ny:
      return "";
    case ry:
      return (e.return = e.value + "{" + Wo(e.children, s) + "}");
    case Of:
      e.value = e.props.join(",");
  }
  return An((o = Wo(e.children, s)))
    ? (e.return = e.value + "{" + o + "}")
    : "";
}
function Fw(e) {
  var r = _f(e);
  return function (o, s, l, u) {
    for (var f = "", p = 0; p < r; p++) f += e[p](o, s, l, u) || "";
    return f;
  };
}
function Dw(e) {
  return function (r) {
    r.root || ((r = r.return) && e(r));
  };
}
function ay(e) {
  var r = Object.create(null);
  return function (o) {
    return r[o] === void 0 && (r[o] = e(o)), r[o];
  };
}
var jw = function (r, o, s) {
    for (
      var l = 0, u = 0;
      (l = u), (u = Fn()), l === 38 && u === 12 && (o[s] = 1), !us(u);

    )
      en();
    return hs(r, Qt);
  },
  Bw = function (r, o) {
    var s = -1,
      l = 44;
    do
      switch (us(l)) {
        case 0:
          l === 38 && Fn() === 12 && (o[s] = 1), (r[s] += jw(Qt - 1, o, s));
          break;
        case 2:
          r[s] += Wl(l);
          break;
        case 4:
          if (l === 44) {
            (r[++s] = Fn() === 58 ? "&\f" : ""), (o[s] = r[s].length);
            break;
          }
        default:
          r[s] += pa(l);
      }
    while ((l = en()));
    return r;
  },
  Uw = function (r, o) {
    return ly(Bw(sy(r), o));
  },
  Mh = new WeakMap(),
  Ww = function (r) {
    if (!(r.type !== "rule" || !r.parent || r.length < 1)) {
      for (
        var o = r.value,
          s = r.parent,
          l = r.column === s.column && r.line === s.line;
        s.type !== "rule";

      )
        if (((s = s.parent), !s)) return;
      if (
        !(r.props.length === 1 && o.charCodeAt(0) !== 58 && !Mh.get(s)) &&
        !l
      ) {
        Mh.set(r, !0);
        for (
          var u = [], f = Uw(o, u), p = s.props, m = 0, y = 0;
          m < f.length;
          m++
        )
          for (var k = 0; k < p.length; k++, y++)
            r.props[y] = u[m] ? f[m].replace(/&\f/g, p[k]) : p[k] + " " + f[m];
      }
    }
  },
  Vw = function (r) {
    if (r.type === "decl") {
      var o = r.value;
      o.charCodeAt(0) === 108 &&
        o.charCodeAt(2) === 98 &&
        ((r.return = ""), (r.value = ""));
    }
  };
function uy(e, r) {
  switch (Rw(e, r)) {
    case 5103:
      return Ne + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Ne + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ne + e + Zl + e + $t + e + e;
    case 6828:
    case 4268:
      return Ne + e + $t + e + e;
    case 6165:
      return Ne + e + $t + "flex-" + e + e;
    case 5187:
      return (
        Ne + e + Ae(e, /(\w+).+(:[^]+)/, Ne + "box-$1$2" + $t + "flex-$1$2") + e
      );
    case 5443:
      return Ne + e + $t + "flex-item-" + Ae(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Ne +
        e +
        $t +
        "flex-line-pack" +
        Ae(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Ne + e + $t + Ae(e, "shrink", "negative") + e;
    case 5292:
      return Ne + e + $t + Ae(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Ne +
        "box-" +
        Ae(e, "-grow", "") +
        Ne +
        e +
        $t +
        Ae(e, "grow", "positive") +
        e
      );
    case 4554:
      return Ne + Ae(e, /([^-])(transform)/g, "$1" + Ne + "$2") + e;
    case 6187:
      return (
        Ae(
          Ae(Ae(e, /(zoom-|grab)/, Ne + "$1"), /(image-set)/, Ne + "$1"),
          e,
          "",
        ) + e
      );
    case 5495:
    case 3959:
      return Ae(e, /(image-set\([^]*)/, Ne + "$1$`$1");
    case 4968:
      return (
        Ae(
          Ae(e, /(.+:)(flex-)?(.*)/, Ne + "box-pack:$3" + $t + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        Ne +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ae(e, /(.+)-inline(.+)/, Ne + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (An(e) - 1 - r > 6)
        switch (Rt(e, r + 1)) {
          case 109:
            if (Rt(e, r + 4) !== 45) break;
          case 102:
            return (
              Ae(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Ne +
                  "$2-$3$1" +
                  Zl +
                  (Rt(e, r + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Zc(e, "stretch")
              ? uy(Ae(e, "stretch", "fill-available"), r) + e
              : e;
        }
      break;
    case 4949:
      if (Rt(e, r + 1) !== 115) break;
    case 6444:
      switch (Rt(e, An(e) - 3 - (~Zc(e, "!important") && 10))) {
        case 107:
          return Ae(e, ":", ":" + Ne) + e;
        case 101:
          return (
            Ae(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Ne +
                (Rt(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Ne +
                "$2$3$1" +
                $t +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (Rt(e, r + 11)) {
        case 114:
          return Ne + e + $t + Ae(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ne + e + $t + Ae(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ne + e + $t + Ae(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ne + e + $t + e + e;
  }
  return e;
}
var Hw = function (r, o, s, l) {
    if (r.length > -1 && !r.return)
      switch (r.type) {
        case Mf:
          r.return = uy(r.value, r.length);
          break;
        case ry:
          return Wo([ji(r, { value: Ae(r.value, "@", "@" + Ne) })], l);
        case Of:
          if (r.length)
            return Tw(r.props, function (u) {
              switch (Pw(u, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Wo(
                    [ji(r, { props: [Ae(u, /:(read-\w+)/, ":" + Zl + "$1")] })],
                    l,
                  );
                case "::placeholder":
                  return Wo(
                    [
                      ji(r, {
                        props: [Ae(u, /:(plac\w+)/, ":" + Ne + "input-$1")],
                      }),
                      ji(r, { props: [Ae(u, /:(plac\w+)/, ":" + Zl + "$1")] }),
                      ji(r, { props: [Ae(u, /:(plac\w+)/, $t + "input-$1")] }),
                    ],
                    l,
                  );
              }
              return "";
            });
      }
  },
  qw = [Hw],
  Qw = function (r) {
    var o = r.key;
    if (o === "css") {
      var s = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(s, function (h) {
        var P = h.getAttribute("data-emotion");
        P.indexOf(" ") !== -1 &&
          (document.head.appendChild(h), h.setAttribute("data-s", ""));
      });
    }
    var l = r.stylisPlugins || qw,
      u = {},
      f,
      p = [];
    (f = r.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
        function (h) {
          for (
            var P = h.getAttribute("data-emotion").split(" "), I = 1;
            I < P.length;
            I++
          )
            u[P[I]] = !0;
          p.push(h);
        },
      );
    var m,
      y = [Ww, Vw];
    {
      var k,
        C = [
          Lw,
          Dw(function (h) {
            k.insert(h);
          }),
        ],
        S = Fw(y.concat(l, C)),
        b = function (P) {
          return Wo(Aw(P), S);
        };
      m = function (P, I, T, v) {
        (k = T),
          b(P ? P + "{" + I.styles + "}" : I.styles),
          v && (w.inserted[I.name] = !0);
      };
    }
    var w = {
      key: o,
      sheet: new Cw({
        key: o,
        container: f,
        nonce: r.nonce,
        speedy: r.speedy,
        prepend: r.prepend,
        insertionPoint: r.insertionPoint,
      }),
      nonce: r.nonce,
      inserted: u,
      registered: {},
      insert: m,
    };
    return w.sheet.hydrate(p), w;
  },
  Oc = { exports: {} },
  Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _h;
function Kw() {
  if (_h) return Le;
  _h = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    r = e ? Symbol.for("react.element") : 60103,
    o = e ? Symbol.for("react.portal") : 60106,
    s = e ? Symbol.for("react.fragment") : 60107,
    l = e ? Symbol.for("react.strict_mode") : 60108,
    u = e ? Symbol.for("react.profiler") : 60114,
    f = e ? Symbol.for("react.provider") : 60109,
    p = e ? Symbol.for("react.context") : 60110,
    m = e ? Symbol.for("react.async_mode") : 60111,
    y = e ? Symbol.for("react.concurrent_mode") : 60111,
    k = e ? Symbol.for("react.forward_ref") : 60112,
    C = e ? Symbol.for("react.suspense") : 60113,
    S = e ? Symbol.for("react.suspense_list") : 60120,
    b = e ? Symbol.for("react.memo") : 60115,
    w = e ? Symbol.for("react.lazy") : 60116,
    h = e ? Symbol.for("react.block") : 60121,
    P = e ? Symbol.for("react.fundamental") : 60117,
    I = e ? Symbol.for("react.responder") : 60118,
    T = e ? Symbol.for("react.scope") : 60119;
  function v(R) {
    if (typeof R == "object" && R !== null) {
      var M = R.$$typeof;
      switch (M) {
        case r:
          switch (((R = R.type), R)) {
            case m:
            case y:
            case s:
            case u:
            case l:
            case C:
              return R;
            default:
              switch (((R = R && R.$$typeof), R)) {
                case p:
                case k:
                case w:
                case b:
                case f:
                  return R;
                default:
                  return M;
              }
          }
        case o:
          return M;
      }
    }
  }
  function x(R) {
    return v(R) === y;
  }
  return (
    (Le.AsyncMode = m),
    (Le.ConcurrentMode = y),
    (Le.ContextConsumer = p),
    (Le.ContextProvider = f),
    (Le.Element = r),
    (Le.ForwardRef = k),
    (Le.Fragment = s),
    (Le.Lazy = w),
    (Le.Memo = b),
    (Le.Portal = o),
    (Le.Profiler = u),
    (Le.StrictMode = l),
    (Le.Suspense = C),
    (Le.isAsyncMode = function (R) {
      return x(R) || v(R) === m;
    }),
    (Le.isConcurrentMode = x),
    (Le.isContextConsumer = function (R) {
      return v(R) === p;
    }),
    (Le.isContextProvider = function (R) {
      return v(R) === f;
    }),
    (Le.isElement = function (R) {
      return typeof R == "object" && R !== null && R.$$typeof === r;
    }),
    (Le.isForwardRef = function (R) {
      return v(R) === k;
    }),
    (Le.isFragment = function (R) {
      return v(R) === s;
    }),
    (Le.isLazy = function (R) {
      return v(R) === w;
    }),
    (Le.isMemo = function (R) {
      return v(R) === b;
    }),
    (Le.isPortal = function (R) {
      return v(R) === o;
    }),
    (Le.isProfiler = function (R) {
      return v(R) === u;
    }),
    (Le.isStrictMode = function (R) {
      return v(R) === l;
    }),
    (Le.isSuspense = function (R) {
      return v(R) === C;
    }),
    (Le.isValidElementType = function (R) {
      return (
        typeof R == "string" ||
        typeof R == "function" ||
        R === s ||
        R === y ||
        R === u ||
        R === l ||
        R === C ||
        R === S ||
        (typeof R == "object" &&
          R !== null &&
          (R.$$typeof === w ||
            R.$$typeof === b ||
            R.$$typeof === f ||
            R.$$typeof === p ||
            R.$$typeof === k ||
            R.$$typeof === P ||
            R.$$typeof === I ||
            R.$$typeof === T ||
            R.$$typeof === h))
      );
    }),
    (Le.typeOf = v),
    Le
  );
}
var $h;
function Gw() {
  return $h || (($h = 1), (Oc.exports = Kw())), Oc.exports;
}
var Mc, Nh;
function Yw() {
  if (Nh) return Mc;
  Nh = 1;
  var e = Gw(),
    r = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    o = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    s = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    l = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    u = {};
  (u[e.ForwardRef] = s), (u[e.Memo] = l);
  function f(w) {
    return e.isMemo(w) ? l : u[w.$$typeof] || r;
  }
  var p = Object.defineProperty,
    m = Object.getOwnPropertyNames,
    y = Object.getOwnPropertySymbols,
    k = Object.getOwnPropertyDescriptor,
    C = Object.getPrototypeOf,
    S = Object.prototype;
  function b(w, h, P) {
    if (typeof h != "string") {
      if (S) {
        var I = C(h);
        I && I !== S && b(w, I, P);
      }
      var T = m(h);
      y && (T = T.concat(y(h)));
      for (var v = f(w), x = f(h), R = 0; R < T.length; ++R) {
        var M = T[R];
        if (!o[M] && !(P && P[M]) && !(x && x[M]) && !(v && v[M])) {
          var O = k(h, M);
          try {
            p(w, M, O);
          } catch {}
        }
      }
    }
    return w;
  }
  return (Mc = b), Mc;
}
Yw();
var Xw = !0;
function cy(e, r, o) {
  var s = "";
  return (
    o.split(" ").forEach(function (l) {
      e[l] !== void 0 ? r.push(e[l] + ";") : l && (s += l + " ");
    }),
    s
  );
}
var $f = function (r, o, s) {
    var l = r.key + "-" + o.name;
    (s === !1 || Xw === !1) &&
      r.registered[l] === void 0 &&
      (r.registered[l] = o.styles);
  },
  Nf = function (r, o, s) {
    $f(r, o, s);
    var l = r.key + "-" + o.name;
    if (r.inserted[o.name] === void 0) {
      var u = o;
      do r.insert(o === u ? "." + l : "", u, r.sheet, !0), (u = u.next);
      while (u !== void 0);
    }
  };
function Jw(e) {
  for (var r = 0, o, s = 0, l = e.length; l >= 4; ++s, l -= 4)
    (o =
      (e.charCodeAt(s) & 255) |
      ((e.charCodeAt(++s) & 255) << 8) |
      ((e.charCodeAt(++s) & 255) << 16) |
      ((e.charCodeAt(++s) & 255) << 24)),
      (o = (o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)),
      (o ^= o >>> 24),
      (r =
        ((o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)) ^
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)));
  switch (l) {
    case 3:
      r ^= (e.charCodeAt(s + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(s + 1) & 255) << 8;
    case 1:
      (r ^= e.charCodeAt(s) & 255),
        (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16));
  }
  return (
    (r ^= r >>> 13),
    (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
    ((r ^ (r >>> 15)) >>> 0).toString(36)
  );
}
var Zw = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  eC = /[A-Z]|^ms/g,
  tC = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  fy = function (r) {
    return r.charCodeAt(1) === 45;
  },
  Ah = function (r) {
    return r != null && typeof r != "boolean";
  },
  _c = ay(function (e) {
    return fy(e) ? e : e.replace(eC, "-$&").toLowerCase();
  }),
  zh = function (r, o) {
    switch (r) {
      case "animation":
      case "animationName":
        if (typeof o == "string")
          return o.replace(tC, function (s, l, u) {
            return (zn = { name: l, styles: u, next: zn }), l;
          });
    }
    return Zw[r] !== 1 && !fy(r) && typeof o == "number" && o !== 0
      ? o + "px"
      : o;
  };
function cs(e, r, o) {
  if (o == null) return "";
  var s = o;
  if (s.__emotion_styles !== void 0) return s;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var l = o;
      if (l.anim === 1)
        return (zn = { name: l.name, styles: l.styles, next: zn }), l.name;
      var u = o;
      if (u.styles !== void 0) {
        var f = u.next;
        if (f !== void 0)
          for (; f !== void 0; )
            (zn = { name: f.name, styles: f.styles, next: zn }), (f = f.next);
        var p = u.styles + ";";
        return p;
      }
      return nC(e, r, o);
    }
    case "function": {
      if (e !== void 0) {
        var m = zn,
          y = o(e);
        return (zn = m), cs(e, r, y);
      }
      break;
    }
  }
  var k = o;
  if (r == null) return k;
  var C = r[k];
  return C !== void 0 ? C : k;
}
function nC(e, r, o) {
  var s = "";
  if (Array.isArray(o))
    for (var l = 0; l < o.length; l++) s += cs(e, r, o[l]) + ";";
  else
    for (var u in o) {
      var f = o[u];
      if (typeof f != "object") {
        var p = f;
        r != null && r[p] !== void 0
          ? (s += u + "{" + r[p] + "}")
          : Ah(p) && (s += _c(u) + ":" + zh(u, p) + ";");
      } else if (
        Array.isArray(f) &&
        typeof f[0] == "string" &&
        (r == null || r[f[0]] === void 0)
      )
        for (var m = 0; m < f.length; m++)
          Ah(f[m]) && (s += _c(u) + ":" + zh(u, f[m]) + ";");
      else {
        var y = cs(e, r, f);
        switch (u) {
          case "animation":
          case "animationName": {
            s += _c(u) + ":" + y + ";";
            break;
          }
          default:
            s += u + "{" + y + "}";
        }
      }
    }
  return s;
}
var Lh = /label:\s*([^\s;{]+)\s*(;|$)/g,
  zn;
function gs(e, r, o) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var s = !0,
    l = "";
  zn = void 0;
  var u = e[0];
  if (u == null || u.raw === void 0) (s = !1), (l += cs(o, r, u));
  else {
    var f = u;
    l += f[0];
  }
  for (var p = 1; p < e.length; p++)
    if (((l += cs(o, r, e[p])), s)) {
      var m = u;
      l += m[p];
    }
  Lh.lastIndex = 0;
  for (var y = "", k; (k = Lh.exec(l)) !== null; ) y += "-" + k[1];
  var C = Jw(l) + y;
  return { name: C, styles: l, next: zn };
}
var rC = function (r) {
    return r();
  },
  dy = Wc.useInsertionEffect ? Wc.useInsertionEffect : !1,
  py = dy || rC,
  Fh = dy || _.useLayoutEffect,
  my = _.createContext(typeof HTMLElement < "u" ? Qw({ key: "css" }) : null);
my.Provider;
var Af = function (r) {
    return _.forwardRef(function (o, s) {
      var l = _.useContext(my);
      return r(o, l, s);
    });
  },
  ga = _.createContext({}),
  zf = {}.hasOwnProperty,
  tf = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  oC = function (r, o) {
    var s = {};
    for (var l in o) zf.call(o, l) && (s[l] = o[l]);
    return (s[tf] = r), s;
  },
  iC = function (r) {
    var o = r.cache,
      s = r.serialized,
      l = r.isStringTag;
    return (
      $f(o, s, l),
      py(function () {
        return Nf(o, s, l);
      }),
      null
    );
  },
  sC = Af(function (e, r, o) {
    var s = e.css;
    typeof s == "string" && r.registered[s] !== void 0 && (s = r.registered[s]);
    var l = e[tf],
      u = [s],
      f = "";
    typeof e.className == "string"
      ? (f = cy(r.registered, u, e.className))
      : e.className != null && (f = e.className + " ");
    var p = gs(u, void 0, _.useContext(ga));
    f += r.key + "-" + p.name;
    var m = {};
    for (var y in e) zf.call(e, y) && y !== "css" && y !== tf && (m[y] = e[y]);
    return (
      (m.className = f),
      o && (m.ref = o),
      _.createElement(
        _.Fragment,
        null,
        _.createElement(iC, {
          cache: r,
          serialized: p,
          isStringTag: typeof l == "string",
        }),
        _.createElement(l, m),
      )
    );
  }),
  lC = sC,
  aC = function (r, o) {
    var s = arguments;
    if (o == null || !zf.call(o, "css"))
      return _.createElement.apply(void 0, s);
    var l = s.length,
      u = new Array(l);
    (u[0] = lC), (u[1] = oC(r, o));
    for (var f = 2; f < l; f++) u[f] = s[f];
    return _.createElement.apply(null, u);
  };
(function (e) {
  var r;
  r || (r = e.JSX || (e.JSX = {}));
})(aC);
var uC = Af(function (e, r) {
  var o = e.styles,
    s = gs([o], void 0, _.useContext(ga)),
    l = _.useRef();
  return (
    Fh(
      function () {
        var u = r.key + "-global",
          f = new r.sheet.constructor({
            key: u,
            nonce: r.sheet.nonce,
            container: r.sheet.container,
            speedy: r.sheet.isSpeedy,
          }),
          p = !1,
          m = document.querySelector(
            'style[data-emotion="' + u + " " + s.name + '"]',
          );
        return (
          r.sheet.tags.length && (f.before = r.sheet.tags[0]),
          m !== null &&
            ((p = !0), m.setAttribute("data-emotion", u), f.hydrate([m])),
          (l.current = [f, p]),
          function () {
            f.flush();
          }
        );
      },
      [r],
    ),
    Fh(
      function () {
        var u = l.current,
          f = u[0],
          p = u[1];
        if (p) {
          u[1] = !1;
          return;
        }
        if ((s.next !== void 0 && Nf(r, s.next, !0), f.tags.length)) {
          var m = f.tags[f.tags.length - 1].nextElementSibling;
          (f.before = m), f.flush();
        }
        r.insert("", s, f, !1);
      },
      [r, s.name],
    ),
    null
  );
});
function Lf() {
  for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
    r[o] = arguments[o];
  return gs(r);
}
function ys() {
  var e = Lf.apply(void 0, arguments),
    r = "animation-" + e.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + e.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
}
var cC =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  fC = ay(function (e) {
    return (
      cC.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  dC = fC,
  pC = function (r) {
    return r !== "theme";
  },
  Dh = function (r) {
    return typeof r == "string" && r.charCodeAt(0) > 96 ? dC : pC;
  },
  jh = function (r, o, s) {
    var l;
    if (o) {
      var u = o.shouldForwardProp;
      l =
        r.__emotion_forwardProp && u
          ? function (f) {
              return r.__emotion_forwardProp(f) && u(f);
            }
          : u;
    }
    return typeof l != "function" && s && (l = r.__emotion_forwardProp), l;
  },
  mC = function (r) {
    var o = r.cache,
      s = r.serialized,
      l = r.isStringTag;
    return (
      $f(o, s, l),
      py(function () {
        return Nf(o, s, l);
      }),
      null
    );
  },
  hC = function e(r, o) {
    var s = r.__emotion_real === r,
      l = (s && r.__emotion_base) || r,
      u,
      f;
    o !== void 0 && ((u = o.label), (f = o.target));
    var p = jh(r, o, s),
      m = p || Dh(l),
      y = !m("as");
    return function () {
      var k = arguments,
        C =
          s && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
      if (
        (u !== void 0 && C.push("label:" + u + ";"),
        k[0] == null || k[0].raw === void 0)
      )
        C.push.apply(C, k);
      else {
        var S = k[0];
        C.push(S[0]);
        for (var b = k.length, w = 1; w < b; w++) C.push(k[w], S[w]);
      }
      var h = Af(function (P, I, T) {
        var v = (y && P.as) || l,
          x = "",
          R = [],
          M = P;
        if (P.theme == null) {
          M = {};
          for (var O in P) M[O] = P[O];
          M.theme = _.useContext(ga);
        }
        typeof P.className == "string"
          ? (x = cy(I.registered, R, P.className))
          : P.className != null && (x = P.className + " ");
        var N = gs(C.concat(R), I.registered, M);
        (x += I.key + "-" + N.name), f !== void 0 && (x += " " + f);
        var z = y && p === void 0 ? Dh(v) : m,
          g = {};
        for (var A in P) (y && A === "as") || (z(A) && (g[A] = P[A]));
        return (
          (g.className = x),
          T && (g.ref = T),
          _.createElement(
            _.Fragment,
            null,
            _.createElement(mC, {
              cache: I,
              serialized: N,
              isStringTag: typeof v == "string",
            }),
            _.createElement(v, g),
          )
        );
      });
      return (
        (h.displayName =
          u !== void 0
            ? u
            : "Styled(" +
              (typeof l == "string"
                ? l
                : l.displayName || l.name || "Component") +
              ")"),
        (h.defaultProps = r.defaultProps),
        (h.__emotion_real = h),
        (h.__emotion_base = l),
        (h.__emotion_styles = C),
        (h.__emotion_forwardProp = p),
        Object.defineProperty(h, "toString", {
          value: function () {
            return "." + f;
          },
        }),
        (h.withComponent = function (P, I) {
          var T = e(P, Jl({}, o, I, { shouldForwardProp: jh(h, I, !0) }));
          return T.apply(void 0, C);
        }),
        h
      );
    };
  },
  gC = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  nf = hC.bind(null);
gC.forEach(function (e) {
  nf[e] = nf(e);
});
function yC(e) {
  return e == null || Object.keys(e).length === 0;
}
function vC(e) {
  const { styles: r, defaultTheme: o = {} } = e,
    s = typeof r == "function" ? (l) => r(yC(l) ? o : l) : r;
  return X.jsx(uC, { styles: s });
}
/**
 * @mui/styled-engine v6.4.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function hy(e, r) {
  return nf(e, r);
}
function SC(e, r) {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = r(e.__emotion_styles));
}
const Bh = [];
function Uh(e) {
  return (Bh[0] = e), gs(Bh);
}
var $c = { exports: {} },
  Ue = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wh;
function wC() {
  if (Wh) return Ue;
  Wh = 1;
  var e = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    y = Symbol.for("react.suspense_list"),
    k = Symbol.for("react.memo"),
    C = Symbol.for("react.lazy"),
    S = Symbol.for("react.offscreen"),
    b = Symbol.for("react.client.reference");
  function w(h) {
    if (typeof h == "object" && h !== null) {
      var P = h.$$typeof;
      switch (P) {
        case e:
          switch (((h = h.type), h)) {
            case o:
            case l:
            case s:
            case m:
            case y:
              return h;
            default:
              switch (((h = h && h.$$typeof), h)) {
                case f:
                case p:
                case C:
                case k:
                  return h;
                case u:
                  return h;
                default:
                  return P;
              }
          }
        case r:
          return P;
      }
    }
  }
  return (
    (Ue.ContextConsumer = u),
    (Ue.ContextProvider = f),
    (Ue.Element = e),
    (Ue.ForwardRef = p),
    (Ue.Fragment = o),
    (Ue.Lazy = C),
    (Ue.Memo = k),
    (Ue.Portal = r),
    (Ue.Profiler = l),
    (Ue.StrictMode = s),
    (Ue.Suspense = m),
    (Ue.SuspenseList = y),
    (Ue.isContextConsumer = function (h) {
      return w(h) === u;
    }),
    (Ue.isContextProvider = function (h) {
      return w(h) === f;
    }),
    (Ue.isElement = function (h) {
      return typeof h == "object" && h !== null && h.$$typeof === e;
    }),
    (Ue.isForwardRef = function (h) {
      return w(h) === p;
    }),
    (Ue.isFragment = function (h) {
      return w(h) === o;
    }),
    (Ue.isLazy = function (h) {
      return w(h) === C;
    }),
    (Ue.isMemo = function (h) {
      return w(h) === k;
    }),
    (Ue.isPortal = function (h) {
      return w(h) === r;
    }),
    (Ue.isProfiler = function (h) {
      return w(h) === l;
    }),
    (Ue.isStrictMode = function (h) {
      return w(h) === s;
    }),
    (Ue.isSuspense = function (h) {
      return w(h) === m;
    }),
    (Ue.isSuspenseList = function (h) {
      return w(h) === y;
    }),
    (Ue.isValidElementType = function (h) {
      return (
        typeof h == "string" ||
        typeof h == "function" ||
        h === o ||
        h === l ||
        h === s ||
        h === m ||
        h === y ||
        h === S ||
        (typeof h == "object" &&
          h !== null &&
          (h.$$typeof === C ||
            h.$$typeof === k ||
            h.$$typeof === f ||
            h.$$typeof === u ||
            h.$$typeof === p ||
            h.$$typeof === b ||
            h.getModuleId !== void 0))
      );
    }),
    (Ue.typeOf = w),
    Ue
  );
}
var Vh;
function CC() {
  return Vh || ((Vh = 1), ($c.exports = wC())), $c.exports;
}
var gy = CC();
function Ln(e) {
  if (typeof e != "object" || e === null) return !1;
  const r = Object.getPrototypeOf(e);
  return (
    (r === null ||
      r === Object.prototype ||
      Object.getPrototypeOf(r) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function yy(e) {
  if (_.isValidElement(e) || gy.isValidElementType(e) || !Ln(e)) return e;
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = yy(e[o]);
    }),
    r
  );
}
function Nt(e, r, o = { clone: !0 }) {
  const s = o.clone ? { ...e } : e;
  return (
    Ln(e) &&
      Ln(r) &&
      Object.keys(r).forEach((l) => {
        _.isValidElement(r[l]) || gy.isValidElementType(r[l])
          ? (s[l] = r[l])
          : Ln(r[l]) && Object.prototype.hasOwnProperty.call(e, l) && Ln(e[l])
            ? (s[l] = Nt(e[l], r[l], o))
            : o.clone
              ? (s[l] = Ln(r[l]) ? yy(r[l]) : r[l])
              : (s[l] = r[l]);
      }),
    s
  );
}
const xC = (e) => {
  const r = Object.keys(e).map((o) => ({ key: o, val: e[o] })) || [];
  return (
    r.sort((o, s) => o.val - s.val),
    r.reduce((o, s) => ({ ...o, [s.key]: s.val }), {})
  );
};
function bC(e) {
  const {
      values: r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: o = "px",
      step: s = 5,
      ...l
    } = e,
    u = xC(r),
    f = Object.keys(u);
  function p(S) {
    return `@media (min-width:${typeof r[S] == "number" ? r[S] : S}${o})`;
  }
  function m(S) {
    return `@media (max-width:${(typeof r[S] == "number" ? r[S] : S) - s / 100}${o})`;
  }
  function y(S, b) {
    const w = f.indexOf(b);
    return `@media (min-width:${typeof r[S] == "number" ? r[S] : S}${o}) and (max-width:${(w !== -1 && typeof r[f[w]] == "number" ? r[f[w]] : b) - s / 100}${o})`;
  }
  function k(S) {
    return f.indexOf(S) + 1 < f.length ? y(S, f[f.indexOf(S) + 1]) : p(S);
  }
  function C(S) {
    const b = f.indexOf(S);
    return b === 0
      ? p(f[1])
      : b === f.length - 1
        ? m(f[b])
        : y(S, f[f.indexOf(S) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: f,
    values: u,
    up: p,
    down: m,
    between: y,
    only: k,
    not: C,
    unit: o,
    ...l,
  };
}
function kC(e, r) {
  if (!e.containerQueries) return r;
  const o = Object.keys(r)
    .filter((s) => s.startsWith("@container"))
    .sort((s, l) => {
      var f, p;
      const u = /min-width:\s*([0-9.]+)/;
      return (
        +(((f = s.match(u)) == null ? void 0 : f[1]) || 0) -
        +(((p = l.match(u)) == null ? void 0 : p[1]) || 0)
      );
    });
  return o.length
    ? o.reduce(
        (s, l) => {
          const u = r[l];
          return delete s[l], (s[l] = u), s;
        },
        { ...r },
      )
    : r;
}
function EC(e, r) {
  return (
    r === "@" ||
    (r.startsWith("@") &&
      (e.some((o) => r.startsWith(`@${o}`)) || !!r.match(/^@\d/)))
  );
}
function RC(e, r) {
  const o = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o) return null;
  const [, s, l] = o,
    u = Number.isNaN(+s) ? s || 0 : +s;
  return e.containerQueries(l).up(u);
}
function PC(e) {
  const r = (u, f) => u.replace("@media", f ? `@container ${f}` : "@container");
  function o(u, f) {
    (u.up = (...p) => r(e.breakpoints.up(...p), f)),
      (u.down = (...p) => r(e.breakpoints.down(...p), f)),
      (u.between = (...p) => r(e.breakpoints.between(...p), f)),
      (u.only = (...p) => r(e.breakpoints.only(...p), f)),
      (u.not = (...p) => {
        const m = r(e.breakpoints.not(...p), f);
        return m.includes("not all and")
          ? m
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : m;
      });
  }
  const s = {},
    l = (u) => (o(s, u), s);
  return o(l), { ...e, containerQueries: l };
}
const TC = { borderRadius: 4 };
function Ji(e, r) {
  return r ? Nt(e, r, { clone: !1 }) : e;
}
const ya = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Hh = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${ya[e]}px)`,
  },
  IC = {
    containerQueries: (e) => ({
      up: (r) => {
        let o = typeof r == "number" ? r : ya[r] || r;
        return (
          typeof o == "number" && (o = `${o}px`),
          e ? `@container ${e} (min-width:${o})` : `@container (min-width:${o})`
        );
      },
    }),
  };
function or(e, r, o) {
  const s = e.theme || {};
  if (Array.isArray(r)) {
    const u = s.breakpoints || Hh;
    return r.reduce((f, p, m) => ((f[u.up(u.keys[m])] = o(r[m])), f), {});
  }
  if (typeof r == "object") {
    const u = s.breakpoints || Hh;
    return Object.keys(r).reduce((f, p) => {
      if (EC(u.keys, p)) {
        const m = RC(s.containerQueries ? s : IC, p);
        m && (f[m] = o(r[p], p));
      } else if (Object.keys(u.values || ya).includes(p)) {
        const m = u.up(p);
        f[m] = o(r[p], p);
      } else {
        const m = p;
        f[m] = r[m];
      }
      return f;
    }, {});
  }
  return o(r);
}
function OC(e = {}) {
  var o;
  return (
    ((o = e.keys) == null
      ? void 0
      : o.reduce((s, l) => {
          const u = e.up(l);
          return (s[u] = {}), s;
        }, {})) || {}
  );
}
function MC(e, r) {
  return e.reduce((o, s) => {
    const l = o[s];
    return (!l || Object.keys(l).length === 0) && delete o[s], o;
  }, r);
}
function pe(e) {
  if (typeof e != "string") throw new Error(rr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function va(e, r, o = !0) {
  if (!r || typeof r != "string") return null;
  if (e && e.vars && o) {
    const s = `vars.${r}`
      .split(".")
      .reduce((l, u) => (l && l[u] ? l[u] : null), e);
    if (s != null) return s;
  }
  return r.split(".").reduce((s, l) => (s && s[l] != null ? s[l] : null), e);
}
function ea(e, r, o, s = o) {
  let l;
  return (
    typeof e == "function"
      ? (l = e(o))
      : Array.isArray(e)
        ? (l = e[o] || s)
        : (l = va(e, o) || s),
    r && (l = r(l, s, e)),
    l
  );
}
function dt(e) {
  const { prop: r, cssProperty: o = e.prop, themeKey: s, transform: l } = e,
    u = (f) => {
      if (f[r] == null) return null;
      const p = f[r],
        m = f.theme,
        y = va(m, s) || {};
      return or(f, p, (C) => {
        let S = ea(y, l, C);
        return (
          C === S &&
            typeof C == "string" &&
            (S = ea(y, l, `${r}${C === "default" ? "" : pe(C)}`, C)),
          o === !1 ? S : { [o]: S }
        );
      });
    };
  return (u.propTypes = {}), (u.filterProps = [r]), u;
}
function _C(e) {
  const r = {};
  return (o) => (r[o] === void 0 && (r[o] = e(o)), r[o]);
}
const $C = { m: "margin", p: "padding" },
  NC = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  qh = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  AC = _C((e) => {
    if (e.length > 2)
      if (qh[e]) e = qh[e];
      else return [e];
    const [r, o] = e.split(""),
      s = $C[r],
      l = NC[o] || "";
    return Array.isArray(l) ? l.map((u) => s + u) : [s + l];
  }),
  Ff = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Df = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Ff, ...Df];
function vs(e, r, o, s) {
  const l = va(e, r, !0) ?? o;
  return typeof l == "number" || typeof l == "string"
    ? (u) =>
        typeof u == "string"
          ? u
          : typeof l == "string"
            ? `calc(${u} * ${l})`
            : l * u
    : Array.isArray(l)
      ? (u) => {
          if (typeof u == "string") return u;
          const f = Math.abs(u),
            p = l[f];
          return u >= 0 ? p : typeof p == "number" ? -p : `-${p}`;
        }
      : typeof l == "function"
        ? l
        : () => {};
}
function jf(e) {
  return vs(e, "spacing", 8);
}
function Ss(e, r) {
  return typeof r == "string" || r == null ? r : e(r);
}
function zC(e, r) {
  return (o) => e.reduce((s, l) => ((s[l] = Ss(r, o)), s), {});
}
function LC(e, r, o, s) {
  if (!r.includes(o)) return null;
  const l = AC(o),
    u = zC(l, s),
    f = e[o];
  return or(e, f, u);
}
function vy(e, r) {
  const o = jf(e.theme);
  return Object.keys(e)
    .map((s) => LC(e, r, s, o))
    .reduce(Ji, {});
}
function it(e) {
  return vy(e, Ff);
}
it.propTypes = {};
it.filterProps = Ff;
function st(e) {
  return vy(e, Df);
}
st.propTypes = {};
st.filterProps = Df;
function Sy(e = 8, r = jf({ spacing: e })) {
  if (e.mui) return e;
  const o = (...s) =>
    (s.length === 0 ? [1] : s)
      .map((u) => {
        const f = r(u);
        return typeof f == "number" ? `${f}px` : f;
      })
      .join(" ");
  return (o.mui = !0), o;
}
function Sa(...e) {
  const r = e.reduce(
      (s, l) => (
        l.filterProps.forEach((u) => {
          s[u] = l;
        }),
        s
      ),
      {},
    ),
    o = (s) => Object.keys(s).reduce((l, u) => (r[u] ? Ji(l, r[u](s)) : l), {});
  return (
    (o.propTypes = {}),
    (o.filterProps = e.reduce((s, l) => s.concat(l.filterProps), [])),
    o
  );
}
function cn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function dn(e, r) {
  return dt({ prop: e, themeKey: "borders", transform: r });
}
const FC = dn("border", cn),
  DC = dn("borderTop", cn),
  jC = dn("borderRight", cn),
  BC = dn("borderBottom", cn),
  UC = dn("borderLeft", cn),
  WC = dn("borderColor"),
  VC = dn("borderTopColor"),
  HC = dn("borderRightColor"),
  qC = dn("borderBottomColor"),
  QC = dn("borderLeftColor"),
  KC = dn("outline", cn),
  GC = dn("outlineColor"),
  wa = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const r = vs(e.theme, "shape.borderRadius", 4),
        o = (s) => ({ borderRadius: Ss(r, s) });
      return or(e, e.borderRadius, o);
    }
    return null;
  };
wa.propTypes = {};
wa.filterProps = ["borderRadius"];
Sa(FC, DC, jC, BC, UC, WC, VC, HC, qC, QC, wa, KC, GC);
const Ca = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = vs(e.theme, "spacing", 8),
      o = (s) => ({ gap: Ss(r, s) });
    return or(e, e.gap, o);
  }
  return null;
};
Ca.propTypes = {};
Ca.filterProps = ["gap"];
const xa = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = vs(e.theme, "spacing", 8),
      o = (s) => ({ columnGap: Ss(r, s) });
    return or(e, e.columnGap, o);
  }
  return null;
};
xa.propTypes = {};
xa.filterProps = ["columnGap"];
const ba = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = vs(e.theme, "spacing", 8),
      o = (s) => ({ rowGap: Ss(r, s) });
    return or(e, e.rowGap, o);
  }
  return null;
};
ba.propTypes = {};
ba.filterProps = ["rowGap"];
const YC = dt({ prop: "gridColumn" }),
  XC = dt({ prop: "gridRow" }),
  JC = dt({ prop: "gridAutoFlow" }),
  ZC = dt({ prop: "gridAutoColumns" }),
  ex = dt({ prop: "gridAutoRows" }),
  tx = dt({ prop: "gridTemplateColumns" }),
  nx = dt({ prop: "gridTemplateRows" }),
  rx = dt({ prop: "gridTemplateAreas" }),
  ox = dt({ prop: "gridArea" });
Sa(Ca, xa, ba, YC, XC, JC, ZC, ex, tx, nx, rx, ox);
function Vo(e, r) {
  return r === "grey" ? r : e;
}
const ix = dt({ prop: "color", themeKey: "palette", transform: Vo }),
  sx = dt({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Vo,
  }),
  lx = dt({ prop: "backgroundColor", themeKey: "palette", transform: Vo });
Sa(ix, sx, lx);
function Zt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ax = dt({ prop: "width", transform: Zt }),
  Bf = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const r = (o) => {
        var l, u, f, p, m;
        const s =
          ((f =
            (u = (l = e.theme) == null ? void 0 : l.breakpoints) == null
              ? void 0
              : u.values) == null
            ? void 0
            : f[o]) || ya[o];
        return s
          ? ((m = (p = e.theme) == null ? void 0 : p.breakpoints) == null
              ? void 0
              : m.unit) !== "px"
            ? { maxWidth: `${s}${e.theme.breakpoints.unit}` }
            : { maxWidth: s }
          : { maxWidth: Zt(o) };
      };
      return or(e, e.maxWidth, r);
    }
    return null;
  };
Bf.filterProps = ["maxWidth"];
const ux = dt({ prop: "minWidth", transform: Zt }),
  cx = dt({ prop: "height", transform: Zt }),
  fx = dt({ prop: "maxHeight", transform: Zt }),
  dx = dt({ prop: "minHeight", transform: Zt });
dt({ prop: "size", cssProperty: "width", transform: Zt });
dt({ prop: "size", cssProperty: "height", transform: Zt });
const px = dt({ prop: "boxSizing" });
Sa(ax, Bf, ux, cx, fx, dx, px);
const ws = {
  border: { themeKey: "borders", transform: cn },
  borderTop: { themeKey: "borders", transform: cn },
  borderRight: { themeKey: "borders", transform: cn },
  borderBottom: { themeKey: "borders", transform: cn },
  borderLeft: { themeKey: "borders", transform: cn },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: cn },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: wa },
  color: { themeKey: "palette", transform: Vo },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Vo,
  },
  backgroundColor: { themeKey: "palette", transform: Vo },
  p: { style: st },
  pt: { style: st },
  pr: { style: st },
  pb: { style: st },
  pl: { style: st },
  px: { style: st },
  py: { style: st },
  padding: { style: st },
  paddingTop: { style: st },
  paddingRight: { style: st },
  paddingBottom: { style: st },
  paddingLeft: { style: st },
  paddingX: { style: st },
  paddingY: { style: st },
  paddingInline: { style: st },
  paddingInlineStart: { style: st },
  paddingInlineEnd: { style: st },
  paddingBlock: { style: st },
  paddingBlockStart: { style: st },
  paddingBlockEnd: { style: st },
  m: { style: it },
  mt: { style: it },
  mr: { style: it },
  mb: { style: it },
  ml: { style: it },
  mx: { style: it },
  my: { style: it },
  margin: { style: it },
  marginTop: { style: it },
  marginRight: { style: it },
  marginBottom: { style: it },
  marginLeft: { style: it },
  marginX: { style: it },
  marginY: { style: it },
  marginInline: { style: it },
  marginInlineStart: { style: it },
  marginInlineEnd: { style: it },
  marginBlock: { style: it },
  marginBlockStart: { style: it },
  marginBlockEnd: { style: it },
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({ "@media print": { display: e } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: Ca },
  rowGap: { style: ba },
  columnGap: { style: xa },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: Zt },
  maxWidth: { style: Bf },
  minWidth: { transform: Zt },
  height: { transform: Zt },
  maxHeight: { transform: Zt },
  minHeight: { transform: Zt },
  boxSizing: {},
  font: { themeKey: "font" },
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function mx(...e) {
  const r = e.reduce((s, l) => s.concat(Object.keys(l)), []),
    o = new Set(r);
  return e.every((s) => o.size === Object.keys(s).length);
}
function hx(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function gx() {
  function e(o, s, l, u) {
    const f = { [o]: s, theme: l },
      p = u[o];
    if (!p) return { [o]: s };
    const { cssProperty: m = o, themeKey: y, transform: k, style: C } = p;
    if (s == null) return null;
    if (y === "typography" && s === "inherit") return { [o]: s };
    const S = va(l, y) || {};
    return C
      ? C(f)
      : or(f, s, (w) => {
          let h = ea(S, k, w);
          return (
            w === h &&
              typeof w == "string" &&
              (h = ea(S, k, `${o}${w === "default" ? "" : pe(w)}`, w)),
            m === !1 ? h : { [m]: h }
          );
        });
  }
  function r(o) {
    const { sx: s, theme: l = {} } = o || {};
    if (!s) return null;
    const u = l.unstable_sxConfig ?? ws;
    function f(p) {
      let m = p;
      if (typeof p == "function") m = p(l);
      else if (typeof p != "object") return p;
      if (!m) return null;
      const y = OC(l.breakpoints),
        k = Object.keys(y);
      let C = y;
      return (
        Object.keys(m).forEach((S) => {
          const b = hx(m[S], l);
          if (b != null)
            if (typeof b == "object")
              if (u[S]) C = Ji(C, e(S, b, l, u));
              else {
                const w = or({ theme: l }, b, (h) => ({ [S]: h }));
                mx(w, b) ? (C[S] = r({ sx: b, theme: l })) : (C = Ji(C, w));
              }
            else C = Ji(C, e(S, b, l, u));
        }),
        kC(l, MC(k, C))
      );
    }
    return Array.isArray(s) ? s.map(f) : f(s);
  }
  return r;
}
const oo = gx();
oo.filterProps = ["sx"];
function yx(e, r) {
  var s;
  const o = this;
  if (o.vars) {
    if (
      !((s = o.colorSchemes) != null && s[e]) ||
      typeof o.getColorSchemeSelector != "function"
    )
      return {};
    let l = o.getColorSchemeSelector(e);
    return l === "&"
      ? r
      : ((l.includes("data-") || l.includes(".")) &&
          (l = `*:where(${l.replace(/\s*&$/, "")}) &`),
        { [l]: r });
  }
  return o.palette.mode === e ? r : {};
}
function Uf(e = {}, ...r) {
  const {
      breakpoints: o = {},
      palette: s = {},
      spacing: l,
      shape: u = {},
      ...f
    } = e,
    p = bC(o),
    m = Sy(l);
  let y = Nt(
    {
      breakpoints: p,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...s },
      spacing: m,
      shape: { ...TC, ...u },
    },
    f,
  );
  return (
    (y = PC(y)),
    (y.applyStyles = yx),
    (y = r.reduce((k, C) => Nt(k, C), y)),
    (y.unstable_sxConfig = {
      ...ws,
      ...(f == null ? void 0 : f.unstable_sxConfig),
    }),
    (y.unstable_sx = function (C) {
      return oo({ sx: C, theme: this });
    }),
    y
  );
}
function vx(e) {
  return Object.keys(e).length === 0;
}
function Sx(e = null) {
  const r = _.useContext(ga);
  return !r || vx(r) ? e : r;
}
const wx = Uf();
function Wf(e = wx) {
  return Sx(e);
}
function Cx({ styles: e, themeId: r, defaultTheme: o = {} }) {
  const s = Wf(o),
    l = typeof e == "function" ? e((r && s[r]) || s) : e;
  return X.jsx(vC, { styles: l });
}
const xx = (e) => {
  var s;
  const r = { systemProps: {}, otherProps: {} },
    o =
      ((s = e == null ? void 0 : e.theme) == null
        ? void 0
        : s.unstable_sxConfig) ?? ws;
  return (
    Object.keys(e).forEach((l) => {
      o[l] ? (r.systemProps[l] = e[l]) : (r.otherProps[l] = e[l]);
    }),
    r
  );
};
function wy(e) {
  const { sx: r, ...o } = e,
    { systemProps: s, otherProps: l } = xx(o);
  let u;
  return (
    Array.isArray(r)
      ? (u = [s, ...r])
      : typeof r == "function"
        ? (u = (...f) => {
            const p = r(...f);
            return Ln(p) ? { ...s, ...p } : s;
          })
        : (u = { ...s, ...r }),
    { ...l, sx: u }
  );
}
const Qh = (e) => e,
  bx = () => {
    let e = Qh;
    return {
      configure(r) {
        e = r;
      },
      generate(r) {
        return e(r);
      },
      reset() {
        e = Qh;
      },
    };
  },
  Cy = bx();
function xy(e) {
  var r,
    o,
    s = "";
  if (typeof e == "string" || typeof e == "number") s += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var l = e.length;
      for (r = 0; r < l; r++)
        e[r] && (o = xy(e[r])) && (s && (s += " "), (s += o));
    } else for (o in e) e[o] && (s && (s += " "), (s += o));
  return s;
}
function ke() {
  for (var e, r, o = 0, s = "", l = arguments.length; o < l; o++)
    (e = arguments[o]) && (r = xy(e)) && (s && (s += " "), (s += r));
  return s;
}
function kx(e = {}) {
  const {
      themeId: r,
      defaultTheme: o,
      defaultClassName: s = "MuiBox-root",
      generateClassName: l,
    } = e,
    u = hy("div", {
      shouldForwardProp: (p) => p !== "theme" && p !== "sx" && p !== "as",
    })(oo);
  return _.forwardRef(function (m, y) {
    const k = Wf(o),
      { className: C, component: S = "div", ...b } = wy(m);
    return X.jsx(u, {
      as: S,
      ref: y,
      className: ke(C, l ? l(s) : s),
      theme: (r && k[r]) || k,
      ...b,
    });
  });
}
const Ex = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function je(e, r, o = "Mui") {
  const s = Ex[r];
  return s ? `${o}-${s}` : `${Cy.generate(e)}-${r}`;
}
function Me(e, r, o = "Mui") {
  const s = {};
  return (
    r.forEach((l) => {
      s[l] = je(e, l, o);
    }),
    s
  );
}
function by(e) {
  const { variants: r, ...o } = e,
    s = { variants: r, style: Uh(o), isProcessed: !0 };
  return (
    s.style === o ||
      (r &&
        r.forEach((l) => {
          typeof l.style != "function" && (l.style = Uh(l.style));
        })),
    s
  );
}
const Rx = Uf();
function Nc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Px(e) {
  return e ? (r, o) => o[e] : null;
}
function Tx(e, r, o) {
  e.theme = Mx(e.theme) ? o : e.theme[r] || e.theme;
}
function Hl(e, r) {
  const o = typeof r == "function" ? r(e) : r;
  if (Array.isArray(o)) return o.flatMap((s) => Hl(e, s));
  if (Array.isArray(o == null ? void 0 : o.variants)) {
    let s;
    if (o.isProcessed) s = o.style;
    else {
      const { variants: l, ...u } = o;
      s = u;
    }
    return ky(e, o.variants, [s]);
  }
  return o != null && o.isProcessed ? o.style : o;
}
function ky(e, r, o = []) {
  var l;
  let s;
  e: for (let u = 0; u < r.length; u += 1) {
    const f = r[u];
    if (typeof f.props == "function") {
      if (
        (s ?? (s = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        !f.props(s))
      )
        continue;
    } else
      for (const p in f.props)
        if (
          e[p] !== f.props[p] &&
          ((l = e.ownerState) == null ? void 0 : l[p]) !== f.props[p]
        )
          continue e;
    typeof f.style == "function"
      ? (s ?? (s = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        o.push(f.style(s)))
      : o.push(f.style);
  }
  return o;
}
function Ix(e = {}) {
  const {
    themeId: r,
    defaultTheme: o = Rx,
    rootShouldForwardProp: s = Nc,
    slotShouldForwardProp: l = Nc,
  } = e;
  function u(p) {
    Tx(p, r, o);
  }
  return (p, m = {}) => {
    SC(p, (R) => R.filter((M) => M !== oo));
    const {
        name: y,
        slot: k,
        skipVariantsResolver: C,
        skipSx: S,
        overridesResolver: b = Px($x(k)),
        ...w
      } = m,
      h = C !== void 0 ? C : (k && k !== "Root" && k !== "root") || !1,
      P = S || !1;
    let I = Nc;
    k === "Root" || k === "root"
      ? (I = s)
      : k
        ? (I = l)
        : _x(p) && (I = void 0);
    const T = hy(p, { shouldForwardProp: I, label: Ox(), ...w }),
      v = (R) => {
        if (typeof R == "function" && R.__emotion_real !== R)
          return function (O) {
            return Hl(O, R);
          };
        if (Ln(R)) {
          const M = by(R);
          return M.variants
            ? function (N) {
                return Hl(N, M);
              }
            : M.style;
        }
        return R;
      },
      x = (...R) => {
        const M = [],
          O = R.map(v),
          N = [];
        if (
          (M.push(u),
          y &&
            b &&
            N.push(function (j) {
              var Y, te;
              const q =
                (te = (Y = j.theme.components) == null ? void 0 : Y[y]) == null
                  ? void 0
                  : te.styleOverrides;
              if (!q) return null;
              const V = {};
              for (const H in q) V[H] = Hl(j, q[H]);
              return b(j, V);
            }),
          y &&
            !h &&
            N.push(function (j) {
              var V, Y;
              const B = j.theme,
                q =
                  (Y =
                    (V = B == null ? void 0 : B.components) == null
                      ? void 0
                      : V[y]) == null
                    ? void 0
                    : Y.variants;
              return q ? ky(j, q) : null;
            }),
          P || N.push(oo),
          Array.isArray(O[0]))
        ) {
          const A = O.shift(),
            j = new Array(M.length).fill(""),
            B = new Array(N.length).fill("");
          let q;
          (q = [...j, ...A, ...B]),
            (q.raw = [...j, ...A.raw, ...B]),
            M.unshift(q);
        }
        const z = [...M, ...O, ...N],
          g = T(...z);
        return p.muiName && (g.muiName = p.muiName), g;
      };
    return T.withConfig && (x.withConfig = T.withConfig), x;
  };
}
function Ox(e, r) {
  return void 0;
}
function Mx(e) {
  for (const r in e) return !1;
  return !0;
}
function _x(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function $x(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function rf(e, r) {
  const o = { ...r };
  for (const s in e)
    if (Object.prototype.hasOwnProperty.call(e, s)) {
      const l = s;
      if (l === "components" || l === "slots") o[l] = { ...e[l], ...o[l] };
      else if (l === "componentsProps" || l === "slotProps") {
        const u = e[l],
          f = r[l];
        if (!f) o[l] = u || {};
        else if (!u) o[l] = f;
        else {
          o[l] = { ...f };
          for (const p in u)
            if (Object.prototype.hasOwnProperty.call(u, p)) {
              const m = p;
              o[l][m] = rf(u[m], f[m]);
            }
        }
      } else o[l] === void 0 && (o[l] = e[l]);
    }
  return o;
}
const $r = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
function Nx(e, r = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, o));
}
function Vf(e, r = 0, o = 1) {
  return Nx(e, r, o);
}
function Ax(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(r);
  return (
    o && o[0].length === 1 && (o = o.map((s) => s + s)),
    o
      ? `rgb${o.length === 4 ? "a" : ""}(${o.map((s, l) => (l < 3 ? parseInt(s, 16) : Math.round((parseInt(s, 16) / 255) * 1e3) / 1e3)).join(", ")})`
      : ""
  );
}
function Nr(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Nr(Ax(e));
  const r = e.indexOf("("),
    o = e.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o))
    throw new Error(rr(9, e));
  let s = e.substring(r + 1, e.length - 1),
    l;
  if (o === "color") {
    if (
      ((s = s.split(" ")),
      (l = s.shift()),
      s.length === 4 && s[3].charAt(0) === "/" && (s[3] = s[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
        l,
      ))
    )
      throw new Error(rr(10, l));
  } else s = s.split(",");
  return (
    (s = s.map((u) => parseFloat(u))), { type: o, values: s, colorSpace: l }
  );
}
const zx = (e) => {
    const r = Nr(e);
    return r.values
      .slice(0, 3)
      .map((o, s) => (r.type.includes("hsl") && s !== 0 ? `${o}%` : o))
      .join(" ");
  },
  qi = (e, r) => {
    try {
      return zx(e);
    } catch {
      return e;
    }
  };
function ka(e) {
  const { type: r, colorSpace: o } = e;
  let { values: s } = e;
  return (
    r.includes("rgb")
      ? (s = s.map((l, u) => (u < 3 ? parseInt(l, 10) : l)))
      : r.includes("hsl") && ((s[1] = `${s[1]}%`), (s[2] = `${s[2]}%`)),
    r.includes("color") ? (s = `${o} ${s.join(" ")}`) : (s = `${s.join(", ")}`),
    `${r}(${s})`
  );
}
function Ey(e) {
  e = Nr(e);
  const { values: r } = e,
    o = r[0],
    s = r[1] / 100,
    l = r[2] / 100,
    u = s * Math.min(l, 1 - l),
    f = (y, k = (y + o / 30) % 12) =>
      l - u * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  let p = "rgb";
  const m = [
    Math.round(f(0) * 255),
    Math.round(f(8) * 255),
    Math.round(f(4) * 255),
  ];
  return (
    e.type === "hsla" && ((p += "a"), m.push(r[3])), ka({ type: p, values: m })
  );
}
function of(e) {
  e = Nr(e);
  let r = e.type === "hsl" || e.type === "hsla" ? Nr(Ey(e)).values : e.values;
  return (
    (r = r.map(
      (o) => (
        e.type !== "color" && (o /= 255),
        o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4
      ),
    )),
    Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3))
  );
}
function Lx(e, r) {
  const o = of(e),
    s = of(r);
  return (Math.max(o, s) + 0.05) / (Math.min(o, s) + 0.05);
}
function rt(e, r) {
  return (
    (e = Nr(e)),
    (r = Vf(r)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${r}`) : (e.values[3] = r),
    ka(e)
  );
}
function zl(e, r, o) {
  try {
    return rt(e, r);
  } catch {
    return e;
  }
}
function Hf(e, r) {
  if (((e = Nr(e)), (r = Vf(r)), e.type.includes("hsl"))) e.values[2] *= 1 - r;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let o = 0; o < 3; o += 1) e.values[o] *= 1 - r;
  return ka(e);
}
function He(e, r, o) {
  try {
    return Hf(e, r);
  } catch {
    return e;
  }
}
function qf(e, r) {
  if (((e = Nr(e)), (r = Vf(r)), e.type.includes("hsl")))
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.includes("rgb"))
    for (let o = 0; o < 3; o += 1) e.values[o] += (255 - e.values[o]) * r;
  else if (e.type.includes("color"))
    for (let o = 0; o < 3; o += 1) e.values[o] += (1 - e.values[o]) * r;
  return ka(e);
}
function qe(e, r, o) {
  try {
    return qf(e, r);
  } catch {
    return e;
  }
}
function Fx(e, r = 0.15) {
  return of(e) > 0.5 ? Hf(e, r) : qf(e, r);
}
function Ll(e, r, o) {
  try {
    return Fx(e, r);
  } catch {
    return e;
  }
}
function Kh(...e) {
  return e.reduce(
    (r, o) =>
      o == null
        ? r
        : function (...l) {
            r.apply(this, l), o.apply(this, l);
          },
    () => {},
  );
}
function Ry(e, r = 166) {
  let o;
  function s(...l) {
    const u = () => {
      e.apply(this, l);
    };
    clearTimeout(o), (o = setTimeout(u, r));
  }
  return (
    (s.clear = () => {
      clearTimeout(o);
    }),
    s
  );
}
function Ac(e, r) {
  var o, s, l;
  return (
    _.isValidElement(e) &&
    r.indexOf(
      e.type.muiName ??
        ((l =
          (s = (o = e.type) == null ? void 0 : o._payload) == null
            ? void 0
            : s.value) == null
          ? void 0
          : l.muiName),
    ) !== -1
  );
}
function En(e) {
  return (e && e.ownerDocument) || document;
}
function ir(e) {
  return En(e).defaultView || window;
}
function sf(e, r) {
  typeof e == "function" ? e(r) : e && (e.current = r);
}
let Gh = 0;
function Dx(e) {
  const [r, o] = _.useState(e),
    s = e || r;
  return (
    _.useEffect(() => {
      r == null && ((Gh += 1), o(`mui-${Gh}`));
    }, [r]),
    s
  );
}
const jx = { ...Wc },
  Yh = jx.useId;
function Py(e) {
  if (Yh !== void 0) {
    const r = Yh();
    return e ?? r;
  }
  return Dx(e);
}
function lf({ controlled: e, default: r, name: o, state: s = "value" }) {
  const { current: l } = _.useRef(e !== void 0),
    [u, f] = _.useState(r),
    p = l ? e : u,
    m = _.useCallback((y) => {
      l || f(y);
    }, []);
  return [p, m];
}
function Ho(e) {
  const r = _.useRef(e);
  return (
    $r(() => {
      r.current = e;
    }),
    _.useRef((...o) => (0, r.current)(...o)).current
  );
}
function Ct(...e) {
  return _.useMemo(
    () =>
      e.every((r) => r == null)
        ? null
        : (r) => {
            e.forEach((o) => {
              sf(o, r);
            });
          },
    e,
  );
}
const Xh = {};
function Ty(e, r) {
  const o = _.useRef(Xh);
  return o.current === Xh && (o.current = e(r)), o;
}
const Bx = [];
function Ux(e) {
  _.useEffect(e, Bx);
}
class Qf {
  constructor() {
    Kr(this, "currentId", null);
    Kr(this, "clear", () => {
      this.currentId !== null &&
        (clearTimeout(this.currentId), (this.currentId = null));
    });
    Kr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Qf();
  }
  start(r, o) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), o();
      }, r));
  }
}
function Iy() {
  const e = Ty(Qf.create).current;
  return Ux(e.disposeEffect), e;
}
function Jh(e) {
  try {
    return e.matches(":focus-visible");
  } catch {}
  return !1;
}
function Oy(e = window) {
  const r = e.document.documentElement.clientWidth;
  return e.innerWidth - r;
}
function Be(e, r, o = void 0) {
  const s = {};
  for (const l in e) {
    const u = e[l];
    let f = "",
      p = !0;
    for (let m = 0; m < u.length; m += 1) {
      const y = u[m];
      y &&
        ((f += (p === !0 ? "" : " ") + r(y)),
        (p = !1),
        o && o[y] && (f += " " + o[y]));
    }
    s[l] = f;
  }
  return s;
}
function Wx(e) {
  return typeof e == "string";
}
function My(e, r, o) {
  return e === void 0 || Wx(e)
    ? r
    : { ...r, ownerState: { ...r.ownerState, ...o } };
}
function _y(e, r = []) {
  if (e === void 0) return {};
  const o = {};
  return (
    Object.keys(e)
      .filter(
        (s) =>
          s.match(/^on[A-Z]/) && typeof e[s] == "function" && !r.includes(s),
      )
      .forEach((s) => {
        o[s] = e[s];
      }),
    o
  );
}
function Zh(e) {
  if (e === void 0) return {};
  const r = {};
  return (
    Object.keys(e)
      .filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function"))
      .forEach((o) => {
        r[o] = e[o];
      }),
    r
  );
}
function $y(e) {
  const {
    getSlotProps: r,
    additionalProps: o,
    externalSlotProps: s,
    externalForwardedProps: l,
    className: u,
  } = e;
  if (!r) {
    const b = ke(
        o == null ? void 0 : o.className,
        u,
        l == null ? void 0 : l.className,
        s == null ? void 0 : s.className,
      ),
      w = {
        ...(o == null ? void 0 : o.style),
        ...(l == null ? void 0 : l.style),
        ...(s == null ? void 0 : s.style),
      },
      h = { ...o, ...l, ...s };
    return (
      b.length > 0 && (h.className = b),
      Object.keys(w).length > 0 && (h.style = w),
      { props: h, internalRef: void 0 }
    );
  }
  const f = _y({ ...l, ...s }),
    p = Zh(s),
    m = Zh(l),
    y = r(f),
    k = ke(
      y == null ? void 0 : y.className,
      o == null ? void 0 : o.className,
      u,
      l == null ? void 0 : l.className,
      s == null ? void 0 : s.className,
    ),
    C = {
      ...(y == null ? void 0 : y.style),
      ...(o == null ? void 0 : o.style),
      ...(l == null ? void 0 : l.style),
      ...(s == null ? void 0 : s.style),
    },
    S = { ...y, ...o, ...m, ...p };
  return (
    k.length > 0 && (S.className = k),
    Object.keys(C).length > 0 && (S.style = C),
    { props: S, internalRef: y.ref }
  );
}
function Ny(e, r, o) {
  return typeof e == "function" ? e(r, o) : e;
}
function eg(e) {
  var C;
  const {
      elementType: r,
      externalSlotProps: o,
      ownerState: s,
      skipResolvingSlotProps: l = !1,
      ...u
    } = e,
    f = l ? {} : Ny(o, s),
    { props: p, internalRef: m } = $y({ ...u, externalSlotProps: f }),
    y = Ct(
      m,
      f == null ? void 0 : f.ref,
      (C = e.additionalProps) == null ? void 0 : C.ref,
    );
  return My(r, { ...p, ref: y }, s);
}
function Cs(e) {
  var r;
  return parseInt(_.version, 10) >= 19
    ? ((r = e == null ? void 0 : e.props) == null ? void 0 : r.ref) || null
    : (e == null ? void 0 : e.ref) || null;
}
const Vx = _.createContext(),
  Ay = () => _.useContext(Vx) ?? !1,
  Hx = _.createContext(void 0);
function qx(e) {
  const { theme: r, name: o, props: s } = e;
  if (!r || !r.components || !r.components[o]) return s;
  const l = r.components[o];
  return l.defaultProps
    ? rf(l.defaultProps, s)
    : !l.styleOverrides && !l.variants
      ? rf(l, s)
      : s;
}
function Qx({ props: e, name: r }) {
  const o = _.useContext(Hx);
  return qx({ props: e, name: r, theme: { components: o } });
}
const tg = { theme: void 0 };
function Kx(e) {
  let r, o;
  return function (l) {
    let u = r;
    return (
      (u === void 0 || l.theme !== o) &&
        ((tg.theme = l.theme), (u = by(e(tg))), (r = u), (o = l.theme)),
      u
    );
  };
}
function Gx(e = "") {
  function r(...s) {
    if (!s.length) return "";
    const l = s[0];
    return typeof l == "string" &&
      !l.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/,
      )
      ? `, var(--${e ? `${e}-` : ""}${l}${r(...s.slice(1))})`
      : `, ${l}`;
  }
  return (s, ...l) => `var(--${e ? `${e}-` : ""}${s}${r(...l)})`;
}
const ng = (e, r, o, s = []) => {
    let l = e;
    r.forEach((u, f) => {
      f === r.length - 1
        ? Array.isArray(l)
          ? (l[Number(u)] = o)
          : l && typeof l == "object" && (l[u] = o)
        : l &&
          typeof l == "object" &&
          (l[u] || (l[u] = s.includes(u) ? [] : {}), (l = l[u]));
    });
  },
  Yx = (e, r, o) => {
    function s(l, u = [], f = []) {
      Object.entries(l).forEach(([p, m]) => {
        (!o || !o([...u, p])) &&
          m != null &&
          (typeof m == "object" && Object.keys(m).length > 0
            ? s(m, [...u, p], Array.isArray(m) ? [...f, p] : f)
            : r([...u, p], m, f));
      });
    }
    s(e);
  },
  Xx = (e, r) =>
    typeof r == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((s) =>
          e.includes(s),
        ) || e[e.length - 1].toLowerCase().includes("opacity")
        ? r
        : `${r}px`
      : r;
function zc(e, r) {
  const { prefix: o, shouldSkipGeneratingVar: s } = r || {},
    l = {},
    u = {},
    f = {};
  return (
    Yx(
      e,
      (p, m, y) => {
        if (
          (typeof m == "string" || typeof m == "number") &&
          (!s || !s(p, m))
        ) {
          const k = `--${o ? `${o}-` : ""}${p.join("-")}`,
            C = Xx(p, m);
          Object.assign(l, { [k]: C }),
            ng(u, p, `var(${k})`, y),
            ng(f, p, `var(${k}, ${C})`, y);
        }
      },
      (p) => p[0] === "vars",
    ),
    { css: l, vars: u, varsWithDefaults: f }
  );
}
function Jx(e, r = {}) {
  const {
      getSelector: o = P,
      disableCssColorScheme: s,
      colorSchemeSelector: l,
    } = r,
    {
      colorSchemes: u = {},
      components: f,
      defaultColorScheme: p = "light",
      ...m
    } = e,
    { vars: y, css: k, varsWithDefaults: C } = zc(m, r);
  let S = C;
  const b = {},
    { [p]: w, ...h } = u;
  if (
    (Object.entries(h || {}).forEach(([v, x]) => {
      const { vars: R, css: M, varsWithDefaults: O } = zc(x, r);
      (S = Nt(S, O)), (b[v] = { css: M, vars: R });
    }),
    w)
  ) {
    const { css: v, vars: x, varsWithDefaults: R } = zc(w, r);
    (S = Nt(S, R)), (b[p] = { css: v, vars: x });
  }
  function P(v, x) {
    var M, O;
    let R = l;
    if (
      (l === "class" && (R = ".%s"),
      l === "data" && (R = "[data-%s]"),
      l != null &&
        l.startsWith("data-") &&
        !l.includes("%s") &&
        (R = `[${l}="%s"]`),
      v)
    ) {
      if (R === "media")
        return e.defaultColorScheme === v
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${((O = (M = u[v]) == null ? void 0 : M.palette) == null ? void 0 : O.mode) || v})`]:
                { ":root": x },
            };
      if (R)
        return e.defaultColorScheme === v
          ? `:root, ${R.replace("%s", String(v))}`
          : R.replace("%s", String(v));
    }
    return ":root";
  }
  return {
    vars: S,
    generateThemeVars: () => {
      let v = { ...y };
      return (
        Object.entries(b).forEach(([, { vars: x }]) => {
          v = Nt(v, x);
        }),
        v
      );
    },
    generateStyleSheets: () => {
      var N, z;
      const v = [],
        x = e.defaultColorScheme || "light";
      function R(g, A) {
        Object.keys(A).length &&
          v.push(typeof g == "string" ? { [g]: { ...A } } : g);
      }
      R(o(void 0, { ...k }), k);
      const { [x]: M, ...O } = b;
      if (M) {
        const { css: g } = M,
          A =
            (z = (N = u[x]) == null ? void 0 : N.palette) == null
              ? void 0
              : z.mode,
          j = !s && A ? { colorScheme: A, ...g } : { ...g };
        R(o(x, { ...j }), j);
      }
      return (
        Object.entries(O).forEach(([g, { css: A }]) => {
          var q, V;
          const j =
              (V = (q = u[g]) == null ? void 0 : q.palette) == null
                ? void 0
                : V.mode,
            B = !s && j ? { colorScheme: j, ...A } : { ...A };
          R(o(g, { ...B }), B);
        }),
        v
      );
    },
  };
}
function Zx(e) {
  return function (o) {
    return e === "media"
      ? `@media (prefers-color-scheme: ${o})`
      : e
        ? e.startsWith("data-") && !e.includes("%s")
          ? `[${e}="${o}"] &`
          : e === "class"
            ? `.${o} &`
            : e === "data"
              ? `[data-${o}] &`
              : `${e.replace("%s", o)} &`
        : "&";
  };
}
function zy() {
  return {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: ls.white, default: ls.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const eb = zy();
function Ly() {
  return {
    text: {
      primary: ls.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: ls.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const rg = Ly();
function og(e, r, o, s) {
  const l = s.light || s,
    u = s.dark || s * 1.5;
  e[r] ||
    (e.hasOwnProperty(o)
      ? (e[r] = e[o])
      : r === "light"
        ? (e.light = qf(e.main, l))
        : r === "dark" && (e.dark = Hf(e.main, u)));
}
function tb(e = "light") {
  return e === "dark"
    ? { main: Lo[200], light: Lo[50], dark: Lo[400] }
    : { main: Lo[700], light: Lo[400], dark: Lo[800] };
}
function nb(e = "light") {
  return e === "dark"
    ? { main: zo[200], light: zo[50], dark: zo[400] }
    : { main: zo[500], light: zo[300], dark: zo[700] };
}
function rb(e = "light") {
  return e === "dark"
    ? { main: Ao[500], light: Ao[300], dark: Ao[700] }
    : { main: Ao[700], light: Ao[400], dark: Ao[800] };
}
function ob(e = "light") {
  return e === "dark"
    ? { main: Fo[400], light: Fo[300], dark: Fo[700] }
    : { main: Fo[700], light: Fo[500], dark: Fo[900] };
}
function ib(e = "light") {
  return e === "dark"
    ? { main: Do[400], light: Do[300], dark: Do[700] }
    : { main: Do[800], light: Do[500], dark: Do[900] };
}
function sb(e = "light") {
  return e === "dark"
    ? { main: Di[400], light: Di[300], dark: Di[700] }
    : { main: "#ed6c02", light: Di[500], dark: Di[900] };
}
function Kf(e) {
  const {
      mode: r = "light",
      contrastThreshold: o = 3,
      tonalOffset: s = 0.2,
      ...l
    } = e,
    u = e.primary || tb(r),
    f = e.secondary || nb(r),
    p = e.error || rb(r),
    m = e.info || ob(r),
    y = e.success || ib(r),
    k = e.warning || sb(r);
  function C(h) {
    return Lx(h, rg.text.primary) >= o ? rg.text.primary : eb.text.primary;
  }
  const S = ({
    color: h,
    name: P,
    mainShade: I = 500,
    lightShade: T = 300,
    darkShade: v = 700,
  }) => {
    if (
      ((h = { ...h }),
      !h.main && h[I] && (h.main = h[I]),
      !h.hasOwnProperty("main"))
    )
      throw new Error(rr(11, P ? ` (${P})` : "", I));
    if (typeof h.main != "string")
      throw new Error(rr(12, P ? ` (${P})` : "", JSON.stringify(h.main)));
    return (
      og(h, "light", T, s),
      og(h, "dark", v, s),
      h.contrastText || (h.contrastText = C(h.main)),
      h
    );
  };
  let b;
  return (
    r === "light" ? (b = zy()) : r === "dark" && (b = Ly()),
    Nt(
      {
        common: { ...ls },
        mode: r,
        primary: S({ color: u, name: "primary" }),
        secondary: S({
          color: f,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: S({ color: p, name: "error" }),
        warning: S({ color: k, name: "warning" }),
        info: S({ color: m, name: "info" }),
        success: S({ color: y, name: "success" }),
        grey: vw,
        contrastThreshold: o,
        getContrastText: C,
        augmentColor: S,
        tonalOffset: s,
        ...b,
      },
      l,
    )
  );
}
function lb(e) {
  const r = {};
  return (
    Object.entries(e).forEach((s) => {
      const [l, u] = s;
      typeof u == "object" &&
        (r[l] =
          `${u.fontStyle ? `${u.fontStyle} ` : ""}${u.fontVariant ? `${u.fontVariant} ` : ""}${u.fontWeight ? `${u.fontWeight} ` : ""}${u.fontStretch ? `${u.fontStretch} ` : ""}${u.fontSize || ""}${u.lineHeight ? `/${u.lineHeight} ` : ""}${u.fontFamily || ""}`);
    }),
    r
  );
}
function ab(e, r) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [e.up("sm")]: { minHeight: 64 },
    },
    ...r,
  };
}
function ub(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ig = { textTransform: "uppercase" },
  sg = '"Roboto", "Helvetica", "Arial", sans-serif';
function cb(e, r) {
  const {
      fontFamily: o = sg,
      fontSize: s = 14,
      fontWeightLight: l = 300,
      fontWeightRegular: u = 400,
      fontWeightMedium: f = 500,
      fontWeightBold: p = 700,
      htmlFontSize: m = 16,
      allVariants: y,
      pxToRem: k,
      ...C
    } = typeof r == "function" ? r(e) : r,
    S = s / 14,
    b = k || ((P) => `${(P / m) * S}rem`),
    w = (P, I, T, v, x) => ({
      fontFamily: o,
      fontWeight: P,
      fontSize: b(I),
      lineHeight: T,
      ...(o === sg ? { letterSpacing: `${ub(v / I)}em` } : {}),
      ...x,
      ...y,
    }),
    h = {
      h1: w(l, 96, 1.167, -1.5),
      h2: w(l, 60, 1.2, -0.5),
      h3: w(u, 48, 1.167, 0),
      h4: w(u, 34, 1.235, 0.25),
      h5: w(u, 24, 1.334, 0),
      h6: w(f, 20, 1.6, 0.15),
      subtitle1: w(u, 16, 1.75, 0.15),
      subtitle2: w(f, 14, 1.57, 0.1),
      body1: w(u, 16, 1.5, 0.15),
      body2: w(u, 14, 1.43, 0.15),
      button: w(f, 14, 1.75, 0.4, ig),
      caption: w(u, 12, 1.66, 0.4),
      overline: w(u, 12, 2.66, 1, ig),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Nt(
    {
      htmlFontSize: m,
      pxToRem: b,
      fontFamily: o,
      fontSize: s,
      fontWeightLight: l,
      fontWeightRegular: u,
      fontWeightMedium: f,
      fontWeightBold: p,
      ...h,
    },
    C,
    { clone: !1 },
  );
}
const fb = 0.2,
  db = 0.14,
  pb = 0.12;
function Ze(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${fb})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${db})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${pb})`,
  ].join(",");
}
const mb = [
    "none",
    Ze(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Ze(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Ze(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Ze(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Ze(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Ze(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Ze(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Ze(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Ze(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Ze(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Ze(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Ze(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Ze(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Ze(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Ze(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Ze(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Ze(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Ze(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Ze(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Ze(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Ze(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Ze(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Ze(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Ze(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  hb = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  gb = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function lg(e) {
  return `${Math.round(e)}ms`;
}
function yb(e) {
  if (!e) return 0;
  const r = e / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function vb(e) {
  const r = { ...hb, ...e.easing },
    o = { ...gb, ...e.duration };
  return {
    getAutoHeightDuration: yb,
    create: (l = ["all"], u = {}) => {
      const {
        duration: f = o.standard,
        easing: p = r.easeInOut,
        delay: m = 0,
        ...y
      } = u;
      return (Array.isArray(l) ? l : [l])
        .map(
          (k) =>
            `${k} ${typeof f == "string" ? f : lg(f)} ${p} ${typeof m == "string" ? m : lg(m)}`,
        )
        .join(",");
    },
    ...e,
    easing: r,
    duration: o,
  };
}
const Sb = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function wb(e) {
  return (
    Ln(e) ||
    typeof e > "u" ||
    typeof e == "string" ||
    typeof e == "boolean" ||
    typeof e == "number" ||
    Array.isArray(e)
  );
}
function Fy(e = {}) {
  const r = { ...e };
  function o(s) {
    const l = Object.entries(s);
    for (let u = 0; u < l.length; u++) {
      const [f, p] = l[u];
      !wb(p) || f.startsWith("unstable_")
        ? delete s[f]
        : Ln(p) && ((s[f] = { ...p }), o(s[f]));
    }
  }
  return (
    o(r),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function af(e = {}, ...r) {
  const {
    breakpoints: o,
    mixins: s = {},
    spacing: l,
    palette: u = {},
    transitions: f = {},
    typography: p = {},
    shape: m,
    ...y
  } = e;
  if (e.vars) throw new Error(rr(20));
  const k = Kf(u),
    C = Uf(e);
  let S = Nt(C, {
    mixins: ab(C.breakpoints, s),
    palette: k,
    shadows: mb.slice(),
    typography: cb(k, p),
    transitions: vb(f),
    zIndex: { ...Sb },
  });
  return (
    (S = Nt(S, y)),
    (S = r.reduce((b, w) => Nt(b, w), S)),
    (S.unstable_sxConfig = {
      ...ws,
      ...(y == null ? void 0 : y.unstable_sxConfig),
    }),
    (S.unstable_sx = function (w) {
      return oo({ sx: w, theme: this });
    }),
    (S.toRuntimeSource = Fy),
    S
  );
}
function uf(e) {
  let r;
  return (
    e < 1 ? (r = 5.11916 * e ** 2) : (r = 4.5 * Math.log(e + 1) + 2),
    Math.round(r * 10) / 1e3
  );
}
const Cb = [...Array(25)].map((e, r) => {
  if (r === 0) return "none";
  const o = uf(r);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function Dy(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38,
  };
}
function jy(e) {
  return e === "dark" ? Cb : [];
}
function xb(e) {
  const { palette: r = { mode: "light" }, opacity: o, overlays: s, ...l } = e,
    u = Kf(r);
  return {
    palette: u,
    opacity: { ...Dy(u.mode), ...o },
    overlays: s || jy(u.mode),
    ...l,
  };
}
function bb(e) {
  var r;
  return (
    !!e[0].match(
      /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/,
    ) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === "palette" &&
      !!((r = e[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const kb = (e) => [
    ...[...Array(25)].map((r, o) => `--${e ? `${e}-` : ""}overlays-${o}`),
    `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ""}palette-AppBar-darkColor`,
  ],
  Eb = (e) => (r, o) => {
    const s = e.rootSelector || ":root",
      l = e.colorSchemeSelector;
    let u = l;
    if (
      (l === "class" && (u = ".%s"),
      l === "data" && (u = "[data-%s]"),
      l != null &&
        l.startsWith("data-") &&
        !l.includes("%s") &&
        (u = `[${l}="%s"]`),
      e.defaultColorScheme === r)
    ) {
      if (r === "dark") {
        const f = {};
        return (
          kb(e.cssVarPrefix).forEach((p) => {
            (f[p] = o[p]), delete o[p];
          }),
          u === "media"
            ? { [s]: o, "@media (prefers-color-scheme: dark)": { [s]: f } }
            : u
              ? { [u.replace("%s", r)]: f, [`${s}, ${u.replace("%s", r)}`]: o }
              : { [s]: { ...o, ...f } }
        );
      }
      if (u && u !== "media") return `${s}, ${u.replace("%s", String(r))}`;
    } else if (r) {
      if (u === "media")
        return { [`@media (prefers-color-scheme: ${String(r)})`]: { [s]: o } };
      if (u) return u.replace("%s", String(r));
    }
    return s;
  };
function Rb(e, r) {
  r.forEach((o) => {
    e[o] || (e[o] = {});
  });
}
function J(e, r, o) {
  !e[r] && o && (e[r] = o);
}
function Qi(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Ey(e);
}
function er(e, r) {
  `${r}Channel` in e || (e[`${r}Channel`] = qi(Qi(e[r])));
}
function Pb(e) {
  return typeof e == "number"
    ? `${e}px`
    : typeof e == "string" || typeof e == "function" || Array.isArray(e)
      ? e
      : "8px";
}
const $n = (e) => {
    try {
      return e();
    } catch {}
  },
  Tb = (e = "mui") => Gx(e);
function Lc(e, r, o, s) {
  if (!r) return;
  r = r === !0 ? {} : r;
  const l = s === "dark" ? "dark" : "light";
  if (!o) {
    e[s] = xb({
      ...r,
      palette: { mode: l, ...(r == null ? void 0 : r.palette) },
    });
    return;
  }
  const { palette: u, ...f } = af({
    ...o,
    palette: { mode: l, ...(r == null ? void 0 : r.palette) },
  });
  return (
    (e[s] = {
      ...r,
      palette: u,
      opacity: { ...Dy(l), ...(r == null ? void 0 : r.opacity) },
      overlays: (r == null ? void 0 : r.overlays) || jy(l),
    }),
    f
  );
}
function Ib(e = {}, ...r) {
  const {
      colorSchemes: o = { light: !0 },
      defaultColorScheme: s,
      disableCssColorScheme: l = !1,
      cssVarPrefix: u = "mui",
      shouldSkipGeneratingVar: f = bb,
      colorSchemeSelector: p = o.light && o.dark ? "media" : void 0,
      rootSelector: m = ":root",
      ...y
    } = e,
    k = Object.keys(o)[0],
    C = s || (o.light && k !== "light" ? "light" : k),
    S = Tb(u),
    { [C]: b, light: w, dark: h, ...P } = o,
    I = { ...P };
  let T = b;
  if (
    (((C === "dark" && !("dark" in o)) || (C === "light" && !("light" in o))) &&
      (T = !0),
    !T)
  )
    throw new Error(rr(21, C));
  const v = Lc(I, T, y, C);
  w && !I.light && Lc(I, w, void 0, "light"),
    h && !I.dark && Lc(I, h, void 0, "dark");
  let x = {
    defaultColorScheme: C,
    ...v,
    cssVarPrefix: u,
    colorSchemeSelector: p,
    rootSelector: m,
    getCssVar: S,
    colorSchemes: I,
    font: { ...lb(v.typography), ...v.font },
    spacing: Pb(y.spacing),
  };
  Object.keys(x.colorSchemes).forEach((z) => {
    const g = x.colorSchemes[z].palette,
      A = (j) => {
        const B = j.split("-"),
          q = B[1],
          V = B[2];
        return S(j, g[q][V]);
      };
    if (
      (g.mode === "light" &&
        (J(g.common, "background", "#fff"),
        J(g.common, "onBackground", "#000")),
      g.mode === "dark" &&
        (J(g.common, "background", "#000"),
        J(g.common, "onBackground", "#fff")),
      Rb(g, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip",
      ]),
      g.mode === "light")
    ) {
      J(g.Alert, "errorColor", He(g.error.light, 0.6)),
        J(g.Alert, "infoColor", He(g.info.light, 0.6)),
        J(g.Alert, "successColor", He(g.success.light, 0.6)),
        J(g.Alert, "warningColor", He(g.warning.light, 0.6)),
        J(g.Alert, "errorFilledBg", A("palette-error-main")),
        J(g.Alert, "infoFilledBg", A("palette-info-main")),
        J(g.Alert, "successFilledBg", A("palette-success-main")),
        J(g.Alert, "warningFilledBg", A("palette-warning-main")),
        J(
          g.Alert,
          "errorFilledColor",
          $n(() => g.getContrastText(g.error.main)),
        ),
        J(
          g.Alert,
          "infoFilledColor",
          $n(() => g.getContrastText(g.info.main)),
        ),
        J(
          g.Alert,
          "successFilledColor",
          $n(() => g.getContrastText(g.success.main)),
        ),
        J(
          g.Alert,
          "warningFilledColor",
          $n(() => g.getContrastText(g.warning.main)),
        ),
        J(g.Alert, "errorStandardBg", qe(g.error.light, 0.9)),
        J(g.Alert, "infoStandardBg", qe(g.info.light, 0.9)),
        J(g.Alert, "successStandardBg", qe(g.success.light, 0.9)),
        J(g.Alert, "warningStandardBg", qe(g.warning.light, 0.9)),
        J(g.Alert, "errorIconColor", A("palette-error-main")),
        J(g.Alert, "infoIconColor", A("palette-info-main")),
        J(g.Alert, "successIconColor", A("palette-success-main")),
        J(g.Alert, "warningIconColor", A("palette-warning-main")),
        J(g.AppBar, "defaultBg", A("palette-grey-100")),
        J(g.Avatar, "defaultBg", A("palette-grey-400")),
        J(g.Button, "inheritContainedBg", A("palette-grey-300")),
        J(g.Button, "inheritContainedHoverBg", A("palette-grey-A100")),
        J(g.Chip, "defaultBorder", A("palette-grey-400")),
        J(g.Chip, "defaultAvatarColor", A("palette-grey-700")),
        J(g.Chip, "defaultIconColor", A("palette-grey-700")),
        J(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        J(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        J(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        J(g.LinearProgress, "primaryBg", qe(g.primary.main, 0.62)),
        J(g.LinearProgress, "secondaryBg", qe(g.secondary.main, 0.62)),
        J(g.LinearProgress, "errorBg", qe(g.error.main, 0.62)),
        J(g.LinearProgress, "infoBg", qe(g.info.main, 0.62)),
        J(g.LinearProgress, "successBg", qe(g.success.main, 0.62)),
        J(g.LinearProgress, "warningBg", qe(g.warning.main, 0.62)),
        J(g.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.11)`),
        J(g.Slider, "primaryTrack", qe(g.primary.main, 0.62)),
        J(g.Slider, "secondaryTrack", qe(g.secondary.main, 0.62)),
        J(g.Slider, "errorTrack", qe(g.error.main, 0.62)),
        J(g.Slider, "infoTrack", qe(g.info.main, 0.62)),
        J(g.Slider, "successTrack", qe(g.success.main, 0.62)),
        J(g.Slider, "warningTrack", qe(g.warning.main, 0.62));
      const j = Ll(g.background.default, 0.8);
      J(g.SnackbarContent, "bg", j),
        J(
          g.SnackbarContent,
          "color",
          $n(() => g.getContrastText(j)),
        ),
        J(g.SpeedDialAction, "fabHoverBg", Ll(g.background.paper, 0.15)),
        J(g.StepConnector, "border", A("palette-grey-400")),
        J(g.StepContent, "border", A("palette-grey-400")),
        J(g.Switch, "defaultColor", A("palette-common-white")),
        J(g.Switch, "defaultDisabledColor", A("palette-grey-100")),
        J(g.Switch, "primaryDisabledColor", qe(g.primary.main, 0.62)),
        J(g.Switch, "secondaryDisabledColor", qe(g.secondary.main, 0.62)),
        J(g.Switch, "errorDisabledColor", qe(g.error.main, 0.62)),
        J(g.Switch, "infoDisabledColor", qe(g.info.main, 0.62)),
        J(g.Switch, "successDisabledColor", qe(g.success.main, 0.62)),
        J(g.Switch, "warningDisabledColor", qe(g.warning.main, 0.62)),
        J(g.TableCell, "border", qe(zl(g.divider, 1), 0.88)),
        J(g.Tooltip, "bg", zl(g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      J(g.Alert, "errorColor", qe(g.error.light, 0.6)),
        J(g.Alert, "infoColor", qe(g.info.light, 0.6)),
        J(g.Alert, "successColor", qe(g.success.light, 0.6)),
        J(g.Alert, "warningColor", qe(g.warning.light, 0.6)),
        J(g.Alert, "errorFilledBg", A("palette-error-dark")),
        J(g.Alert, "infoFilledBg", A("palette-info-dark")),
        J(g.Alert, "successFilledBg", A("palette-success-dark")),
        J(g.Alert, "warningFilledBg", A("palette-warning-dark")),
        J(
          g.Alert,
          "errorFilledColor",
          $n(() => g.getContrastText(g.error.dark)),
        ),
        J(
          g.Alert,
          "infoFilledColor",
          $n(() => g.getContrastText(g.info.dark)),
        ),
        J(
          g.Alert,
          "successFilledColor",
          $n(() => g.getContrastText(g.success.dark)),
        ),
        J(
          g.Alert,
          "warningFilledColor",
          $n(() => g.getContrastText(g.warning.dark)),
        ),
        J(g.Alert, "errorStandardBg", He(g.error.light, 0.9)),
        J(g.Alert, "infoStandardBg", He(g.info.light, 0.9)),
        J(g.Alert, "successStandardBg", He(g.success.light, 0.9)),
        J(g.Alert, "warningStandardBg", He(g.warning.light, 0.9)),
        J(g.Alert, "errorIconColor", A("palette-error-main")),
        J(g.Alert, "infoIconColor", A("palette-info-main")),
        J(g.Alert, "successIconColor", A("palette-success-main")),
        J(g.Alert, "warningIconColor", A("palette-warning-main")),
        J(g.AppBar, "defaultBg", A("palette-grey-900")),
        J(g.AppBar, "darkBg", A("palette-background-paper")),
        J(g.AppBar, "darkColor", A("palette-text-primary")),
        J(g.Avatar, "defaultBg", A("palette-grey-600")),
        J(g.Button, "inheritContainedBg", A("palette-grey-800")),
        J(g.Button, "inheritContainedHoverBg", A("palette-grey-700")),
        J(g.Chip, "defaultBorder", A("palette-grey-700")),
        J(g.Chip, "defaultAvatarColor", A("palette-grey-300")),
        J(g.Chip, "defaultIconColor", A("palette-grey-300")),
        J(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        J(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        J(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        J(g.LinearProgress, "primaryBg", He(g.primary.main, 0.5)),
        J(g.LinearProgress, "secondaryBg", He(g.secondary.main, 0.5)),
        J(g.LinearProgress, "errorBg", He(g.error.main, 0.5)),
        J(g.LinearProgress, "infoBg", He(g.info.main, 0.5)),
        J(g.LinearProgress, "successBg", He(g.success.main, 0.5)),
        J(g.LinearProgress, "warningBg", He(g.warning.main, 0.5)),
        J(g.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.13)`),
        J(g.Slider, "primaryTrack", He(g.primary.main, 0.5)),
        J(g.Slider, "secondaryTrack", He(g.secondary.main, 0.5)),
        J(g.Slider, "errorTrack", He(g.error.main, 0.5)),
        J(g.Slider, "infoTrack", He(g.info.main, 0.5)),
        J(g.Slider, "successTrack", He(g.success.main, 0.5)),
        J(g.Slider, "warningTrack", He(g.warning.main, 0.5));
      const j = Ll(g.background.default, 0.98);
      J(g.SnackbarContent, "bg", j),
        J(
          g.SnackbarContent,
          "color",
          $n(() => g.getContrastText(j)),
        ),
        J(g.SpeedDialAction, "fabHoverBg", Ll(g.background.paper, 0.15)),
        J(g.StepConnector, "border", A("palette-grey-600")),
        J(g.StepContent, "border", A("palette-grey-600")),
        J(g.Switch, "defaultColor", A("palette-grey-300")),
        J(g.Switch, "defaultDisabledColor", A("palette-grey-600")),
        J(g.Switch, "primaryDisabledColor", He(g.primary.main, 0.55)),
        J(g.Switch, "secondaryDisabledColor", He(g.secondary.main, 0.55)),
        J(g.Switch, "errorDisabledColor", He(g.error.main, 0.55)),
        J(g.Switch, "infoDisabledColor", He(g.info.main, 0.55)),
        J(g.Switch, "successDisabledColor", He(g.success.main, 0.55)),
        J(g.Switch, "warningDisabledColor", He(g.warning.main, 0.55)),
        J(g.TableCell, "border", He(zl(g.divider, 1), 0.68)),
        J(g.Tooltip, "bg", zl(g.grey[700], 0.92));
    }
    er(g.background, "default"),
      er(g.background, "paper"),
      er(g.common, "background"),
      er(g.common, "onBackground"),
      er(g, "divider"),
      Object.keys(g).forEach((j) => {
        const B = g[j];
        j !== "tonalOffset" &&
          B &&
          typeof B == "object" &&
          (B.main && J(g[j], "mainChannel", qi(Qi(B.main))),
          B.light && J(g[j], "lightChannel", qi(Qi(B.light))),
          B.dark && J(g[j], "darkChannel", qi(Qi(B.dark))),
          B.contrastText &&
            J(g[j], "contrastTextChannel", qi(Qi(B.contrastText))),
          j === "text" && (er(g[j], "primary"), er(g[j], "secondary")),
          j === "action" &&
            (B.active && er(g[j], "active"),
            B.selected && er(g[j], "selected")));
      });
  }),
    (x = r.reduce((z, g) => Nt(z, g), x));
  const R = {
      prefix: u,
      disableCssColorScheme: l,
      shouldSkipGeneratingVar: f,
      getSelector: Eb(x),
    },
    { vars: M, generateThemeVars: O, generateStyleSheets: N } = Jx(x, R);
  return (
    (x.vars = M),
    Object.entries(x.colorSchemes[x.defaultColorScheme]).forEach(([z, g]) => {
      x[z] = g;
    }),
    (x.generateThemeVars = O),
    (x.generateStyleSheets = N),
    (x.generateSpacing = function () {
      return Sy(y.spacing, jf(this));
    }),
    (x.getColorSchemeSelector = Zx(p)),
    (x.spacing = x.generateSpacing()),
    (x.shouldSkipGeneratingVar = f),
    (x.unstable_sxConfig = {
      ...ws,
      ...(y == null ? void 0 : y.unstable_sxConfig),
    }),
    (x.unstable_sx = function (g) {
      return oo({ sx: g, theme: this });
    }),
    (x.toRuntimeSource = Fy),
    x
  );
}
function ag(e, r, o) {
  e.colorSchemes &&
    o &&
    (e.colorSchemes[r] = {
      ...(o !== !0 && o),
      palette: Kf({ ...(o === !0 ? {} : o.palette), mode: r }),
    });
}
function By(e = {}, ...r) {
  const {
      palette: o,
      cssVariables: s = !1,
      colorSchemes: l = o ? void 0 : { light: !0 },
      defaultColorScheme: u = o == null ? void 0 : o.mode,
      ...f
    } = e,
    p = u || "light",
    m = l == null ? void 0 : l[p],
    y = {
      ...l,
      ...(o
        ? { [p]: { ...(typeof m != "boolean" && m), palette: o } }
        : void 0),
    };
  if (s === !1) {
    if (!("colorSchemes" in e)) return af(e, ...r);
    let k = o;
    "palette" in e ||
      (y[p] &&
        (y[p] !== !0
          ? (k = y[p].palette)
          : p === "dark" && (k = { mode: "dark" })));
    const C = af({ ...e, palette: k }, ...r);
    return (
      (C.defaultColorScheme = p),
      (C.colorSchemes = y),
      C.palette.mode === "light" &&
        ((C.colorSchemes.light = {
          ...(y.light !== !0 && y.light),
          palette: C.palette,
        }),
        ag(C, "dark", y.dark)),
      C.palette.mode === "dark" &&
        ((C.colorSchemes.dark = {
          ...(y.dark !== !0 && y.dark),
          palette: C.palette,
        }),
        ag(C, "light", y.light)),
      C
    );
  }
  return (
    !o && !("light" in y) && p === "light" && (y.light = !0),
    Ib(
      {
        ...f,
        colorSchemes: y,
        defaultColorScheme: p,
        ...(typeof s != "boolean" && s),
      },
      ...r,
    )
  );
}
const Gf = By();
function Yf() {
  const e = Wf(Gf);
  return e[da] || e;
}
function Uy(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Rn = (e) => Uy(e) && e !== "classes",
  he = Ix({ themeId: da, defaultTheme: Gf, rootShouldForwardProp: Rn });
function Ob(e) {
  return X.jsx(Cx, { ...e, defaultTheme: Gf, themeId: da });
}
function Mb(e) {
  return function (o) {
    return X.jsx(Ob, {
      styles: typeof e == "function" ? (s) => e({ theme: s, ...o }) : e,
    });
  };
}
function _b() {
  return wy;
}
const et = Kx;
function We(e) {
  return Qx(e);
}
function $b(e) {
  return je("MuiSvgIcon", e);
}
Me("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const Nb = (e) => {
    const { color: r, fontSize: o, classes: s } = e,
      l = {
        root: ["root", r !== "inherit" && `color${pe(r)}`, `fontSize${pe(o)}`],
      };
    return Be(l, $b, s);
  },
  Ab = he("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.root,
        o.color !== "inherit" && r[`color${pe(o.color)}`],
        r[`fontSize${pe(o.fontSize)}`],
      ];
    },
  })(
    et(({ theme: e }) => {
      var r, o, s, l, u, f, p, m, y, k, C, S, b, w;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition:
          (l = (r = e.transitions) == null ? void 0 : r.create) == null
            ? void 0
            : l.call(r, "fill", {
                duration:
                  (s =
                    (o = (e.vars ?? e).transitions) == null
                      ? void 0
                      : o.duration) == null
                    ? void 0
                    : s.shorter,
              }),
        variants: [
          { props: (h) => !h.hasSvgAsChild, style: { fill: "currentColor" } },
          { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
          {
            props: { fontSize: "small" },
            style: {
              fontSize:
                ((f = (u = e.typography) == null ? void 0 : u.pxToRem) == null
                  ? void 0
                  : f.call(u, 20)) || "1.25rem",
            },
          },
          {
            props: { fontSize: "medium" },
            style: {
              fontSize:
                ((m = (p = e.typography) == null ? void 0 : p.pxToRem) == null
                  ? void 0
                  : m.call(p, 24)) || "1.5rem",
            },
          },
          {
            props: { fontSize: "large" },
            style: {
              fontSize:
                ((k = (y = e.typography) == null ? void 0 : y.pxToRem) == null
                  ? void 0
                  : k.call(y, 35)) || "2.1875rem",
            },
          },
          ...Object.entries((e.vars ?? e).palette)
            .filter(([, h]) => h && h.main)
            .map(([h]) => {
              var P, I;
              return {
                props: { color: h },
                style: {
                  color:
                    (I = (P = (e.vars ?? e).palette) == null ? void 0 : P[h]) ==
                    null
                      ? void 0
                      : I.main,
                },
              };
            }),
          {
            props: { color: "action" },
            style: {
              color:
                (S = (C = (e.vars ?? e).palette) == null ? void 0 : C.action) ==
                null
                  ? void 0
                  : S.active,
            },
          },
          {
            props: { color: "disabled" },
            style: {
              color:
                (w = (b = (e.vars ?? e).palette) == null ? void 0 : b.action) ==
                null
                  ? void 0
                  : w.disabled,
            },
          },
          { props: { color: "inherit" }, style: { color: void 0 } },
        ],
      };
    }),
  ),
  cf = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiSvgIcon" }),
      {
        children: l,
        className: u,
        color: f = "inherit",
        component: p = "svg",
        fontSize: m = "medium",
        htmlColor: y,
        inheritViewBox: k = !1,
        titleAccess: C,
        viewBox: S = "0 0 24 24",
        ...b
      } = s,
      w = _.isValidElement(l) && l.type === "svg",
      h = {
        ...s,
        color: f,
        component: p,
        fontSize: m,
        instanceFontSize: r.fontSize,
        inheritViewBox: k,
        viewBox: S,
        hasSvgAsChild: w,
      },
      P = {};
    k || (P.viewBox = S);
    const I = Nb(h);
    return X.jsxs(Ab, {
      as: p,
      className: ke(I.root, u),
      focusable: "false",
      color: y,
      "aria-hidden": C ? void 0 : !0,
      role: C ? "img" : void 0,
      ref: o,
      ...P,
      ...b,
      ...(w && l.props),
      ownerState: h,
      children: [
        w ? l.props.children : l,
        C ? X.jsx("title", { children: C }) : null,
      ],
    });
  });
cf.muiName = "SvgIcon";
function Yo(e, r) {
  function o(s, l) {
    return X.jsx(cf, { "data-testid": `${r}Icon`, ref: l, ...s, children: e });
  }
  return (o.muiName = cf.muiName), _.memo(_.forwardRef(o));
}
function Wy(e, r) {
  if (e == null) return {};
  var o = {};
  for (var s in e)
    if ({}.hasOwnProperty.call(e, s)) {
      if (r.includes(s)) continue;
      o[s] = e[s];
    }
  return o;
}
function ff(e, r) {
  return (
    (ff = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (o, s) {
          return (o.__proto__ = s), o;
        }),
    ff(e, r)
  );
}
function Vy(e, r) {
  (e.prototype = Object.create(r.prototype)),
    (e.prototype.constructor = e),
    ff(e, r);
}
var Hy = Mg();
const Fl = la(Hy),
  ug = { disabled: !1 },
  ta = Cn.createContext(null);
var zb = function (r) {
    return r.scrollTop;
  },
  Ki = "unmounted",
  Xr = "exited",
  Jr = "entering",
  Bo = "entered",
  df = "exiting",
  Bn = (function (e) {
    Vy(r, e);
    function r(s, l) {
      var u;
      u = e.call(this, s, l) || this;
      var f = l,
        p = f && !f.isMounting ? s.enter : s.appear,
        m;
      return (
        (u.appearStatus = null),
        s.in
          ? p
            ? ((m = Xr), (u.appearStatus = Jr))
            : (m = Bo)
          : s.unmountOnExit || s.mountOnEnter
            ? (m = Ki)
            : (m = Xr),
        (u.state = { status: m }),
        (u.nextCallback = null),
        u
      );
    }
    r.getDerivedStateFromProps = function (l, u) {
      var f = l.in;
      return f && u.status === Ki ? { status: Xr } : null;
    };
    var o = r.prototype;
    return (
      (o.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (o.componentDidUpdate = function (l) {
        var u = null;
        if (l !== this.props) {
          var f = this.state.status;
          this.props.in
            ? f !== Jr && f !== Bo && (u = Jr)
            : (f === Jr || f === Bo) && (u = df);
        }
        this.updateStatus(!1, u);
      }),
      (o.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (o.getTimeouts = function () {
        var l = this.props.timeout,
          u,
          f,
          p;
        return (
          (u = f = p = l),
          l != null &&
            typeof l != "number" &&
            ((u = l.exit),
            (f = l.enter),
            (p = l.appear !== void 0 ? l.appear : f)),
          { exit: u, enter: f, appear: p }
        );
      }),
      (o.updateStatus = function (l, u) {
        if ((l === void 0 && (l = !1), u !== null))
          if ((this.cancelNextCallback(), u === Jr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var f = this.props.nodeRef
                ? this.props.nodeRef.current
                : Fl.findDOMNode(this);
              f && zb(f);
            }
            this.performEnter(l);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Xr &&
            this.setState({ status: Ki });
      }),
      (o.performEnter = function (l) {
        var u = this,
          f = this.props.enter,
          p = this.context ? this.context.isMounting : l,
          m = this.props.nodeRef ? [p] : [Fl.findDOMNode(this), p],
          y = m[0],
          k = m[1],
          C = this.getTimeouts(),
          S = p ? C.appear : C.enter;
        if ((!l && !f) || ug.disabled) {
          this.safeSetState({ status: Bo }, function () {
            u.props.onEntered(y);
          });
          return;
        }
        this.props.onEnter(y, k),
          this.safeSetState({ status: Jr }, function () {
            u.props.onEntering(y, k),
              u.onTransitionEnd(S, function () {
                u.safeSetState({ status: Bo }, function () {
                  u.props.onEntered(y, k);
                });
              });
          });
      }),
      (o.performExit = function () {
        var l = this,
          u = this.props.exit,
          f = this.getTimeouts(),
          p = this.props.nodeRef ? void 0 : Fl.findDOMNode(this);
        if (!u || ug.disabled) {
          this.safeSetState({ status: Xr }, function () {
            l.props.onExited(p);
          });
          return;
        }
        this.props.onExit(p),
          this.safeSetState({ status: df }, function () {
            l.props.onExiting(p),
              l.onTransitionEnd(f.exit, function () {
                l.safeSetState({ status: Xr }, function () {
                  l.props.onExited(p);
                });
              });
          });
      }),
      (o.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (o.safeSetState = function (l, u) {
        (u = this.setNextCallback(u)), this.setState(l, u);
      }),
      (o.setNextCallback = function (l) {
        var u = this,
          f = !0;
        return (
          (this.nextCallback = function (p) {
            f && ((f = !1), (u.nextCallback = null), l(p));
          }),
          (this.nextCallback.cancel = function () {
            f = !1;
          }),
          this.nextCallback
        );
      }),
      (o.onTransitionEnd = function (l, u) {
        this.setNextCallback(u);
        var f = this.props.nodeRef
            ? this.props.nodeRef.current
            : Fl.findDOMNode(this),
          p = l == null && !this.props.addEndListener;
        if (!f || p) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var m = this.props.nodeRef
              ? [this.nextCallback]
              : [f, this.nextCallback],
            y = m[0],
            k = m[1];
          this.props.addEndListener(y, k);
        }
        l != null && setTimeout(this.nextCallback, l);
      }),
      (o.render = function () {
        var l = this.state.status;
        if (l === Ki) return null;
        var u = this.props,
          f = u.children;
        u.in,
          u.mountOnEnter,
          u.unmountOnExit,
          u.appear,
          u.enter,
          u.exit,
          u.timeout,
          u.addEndListener,
          u.onEnter,
          u.onEntering,
          u.onEntered,
          u.onExit,
          u.onExiting,
          u.onExited,
          u.nodeRef;
        var p = Wy(u, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return Cn.createElement(
          ta.Provider,
          { value: null },
          typeof f == "function"
            ? f(l, p)
            : Cn.cloneElement(Cn.Children.only(f), p),
        );
      }),
      r
    );
  })(Cn.Component);
Bn.contextType = ta;
Bn.propTypes = {};
function jo() {}
Bn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: jo,
  onEntering: jo,
  onEntered: jo,
  onExit: jo,
  onExiting: jo,
  onExited: jo,
};
Bn.UNMOUNTED = Ki;
Bn.EXITED = Xr;
Bn.ENTERING = Jr;
Bn.ENTERED = Bo;
Bn.EXITING = df;
function Lb(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Xf(e, r) {
  var o = function (u) {
      return r && _.isValidElement(u) ? r(u) : u;
    },
    s = Object.create(null);
  return (
    e &&
      _.Children.map(e, function (l) {
        return l;
      }).forEach(function (l) {
        s[l.key] = o(l);
      }),
    s
  );
}
function Fb(e, r) {
  (e = e || {}), (r = r || {});
  function o(k) {
    return k in r ? r[k] : e[k];
  }
  var s = Object.create(null),
    l = [];
  for (var u in e) u in r ? l.length && ((s[u] = l), (l = [])) : l.push(u);
  var f,
    p = {};
  for (var m in r) {
    if (s[m])
      for (f = 0; f < s[m].length; f++) {
        var y = s[m][f];
        p[s[m][f]] = o(y);
      }
    p[m] = o(m);
  }
  for (f = 0; f < l.length; f++) p[l[f]] = o(l[f]);
  return p;
}
function eo(e, r, o) {
  return o[r] != null ? o[r] : e.props[r];
}
function Db(e, r) {
  return Xf(e.children, function (o) {
    return _.cloneElement(o, {
      onExited: r.bind(null, o),
      in: !0,
      appear: eo(o, "appear", e),
      enter: eo(o, "enter", e),
      exit: eo(o, "exit", e),
    });
  });
}
function jb(e, r, o) {
  var s = Xf(e.children),
    l = Fb(r, s);
  return (
    Object.keys(l).forEach(function (u) {
      var f = l[u];
      if (_.isValidElement(f)) {
        var p = u in r,
          m = u in s,
          y = r[u],
          k = _.isValidElement(y) && !y.props.in;
        m && (!p || k)
          ? (l[u] = _.cloneElement(f, {
              onExited: o.bind(null, f),
              in: !0,
              exit: eo(f, "exit", e),
              enter: eo(f, "enter", e),
            }))
          : !m && p && !k
            ? (l[u] = _.cloneElement(f, { in: !1 }))
            : m &&
              p &&
              _.isValidElement(y) &&
              (l[u] = _.cloneElement(f, {
                onExited: o.bind(null, f),
                in: y.props.in,
                exit: eo(f, "exit", e),
                enter: eo(f, "enter", e),
              }));
      }
    }),
    l
  );
}
var Bb =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (r) {
        return e[r];
      });
    },
  Ub = {
    component: "div",
    childFactory: function (r) {
      return r;
    },
  },
  Jf = (function (e) {
    Vy(r, e);
    function r(s, l) {
      var u;
      u = e.call(this, s, l) || this;
      var f = u.handleExited.bind(Lb(u));
      return (
        (u.state = {
          contextValue: { isMounting: !0 },
          handleExited: f,
          firstRender: !0,
        }),
        u
      );
    }
    var o = r.prototype;
    return (
      (o.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (o.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (r.getDerivedStateFromProps = function (l, u) {
        var f = u.children,
          p = u.handleExited,
          m = u.firstRender;
        return { children: m ? Db(l, p) : jb(l, f, p), firstRender: !1 };
      }),
      (o.handleExited = function (l, u) {
        var f = Xf(this.props.children);
        l.key in f ||
          (l.props.onExited && l.props.onExited(u),
          this.mounted &&
            this.setState(function (p) {
              var m = Jl({}, p.children);
              return delete m[l.key], { children: m };
            }));
      }),
      (o.render = function () {
        var l = this.props,
          u = l.component,
          f = l.childFactory,
          p = Wy(l, ["component", "childFactory"]),
          m = this.state.contextValue,
          y = Bb(this.state.children).map(f);
        return (
          delete p.appear,
          delete p.enter,
          delete p.exit,
          u === null
            ? Cn.createElement(ta.Provider, { value: m }, y)
            : Cn.createElement(
                ta.Provider,
                { value: m },
                Cn.createElement(u, p, y),
              )
        );
      }),
      r
    );
  })(Cn.Component);
Jf.propTypes = {};
Jf.defaultProps = Ub;
const qy = (e) => e.scrollTop;
function na(e, r) {
  const { timeout: o, easing: s, style: l = {} } = e;
  return {
    duration:
      l.transitionDuration ?? (typeof o == "number" ? o : o[r.mode] || 0),
    easing:
      l.transitionTimingFunction ?? (typeof s == "object" ? s[r.mode] : s),
    delay: l.transitionDelay,
  };
}
function Wb(e) {
  return je("MuiPaper", e);
}
Me("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const Vb = (e) => {
    const { square: r, elevation: o, variant: s, classes: l } = e,
      u = {
        root: [
          "root",
          s,
          !r && "rounded",
          s === "elevation" && `elevation${o}`,
        ],
      };
    return Be(u, Wb, l);
  },
  Hb = he("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.root,
        r[o.variant],
        !o.square && r.rounded,
        o.variant === "elevation" && r[`elevation${o.elevation}`],
      ];
    },
  })(
    et(({ theme: e }) => ({
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create("box-shadow"),
      variants: [
        {
          props: ({ ownerState: r }) => !r.square,
          style: { borderRadius: e.shape.borderRadius },
        },
        {
          props: { variant: "outlined" },
          style: { border: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: { variant: "elevation" },
          style: {
            boxShadow: "var(--Paper-shadow)",
            backgroundImage: "var(--Paper-overlay)",
          },
        },
      ],
    })),
  ),
  Qy = _.forwardRef(function (r, o) {
    var b;
    const s = We({ props: r, name: "MuiPaper" }),
      l = Yf(),
      {
        className: u,
        component: f = "div",
        elevation: p = 1,
        square: m = !1,
        variant: y = "elevation",
        ...k
      } = s,
      C = { ...s, component: f, elevation: p, square: m, variant: y },
      S = Vb(C);
    return X.jsx(Hb, {
      as: f,
      ownerState: C,
      className: ke(S.root, u),
      ref: o,
      ...k,
      style: {
        ...(y === "elevation" && {
          "--Paper-shadow": (l.vars || l).shadows[p],
          ...(l.vars && {
            "--Paper-overlay": (b = l.vars.overlays) == null ? void 0 : b[p],
          }),
          ...(!l.vars &&
            l.palette.mode === "dark" && {
              "--Paper-overlay": `linear-gradient(${rt("#fff", uf(p))}, ${rt("#fff", uf(p))})`,
            }),
        }),
        ...k.style,
      },
    });
  });
function Ft(e, r) {
  const {
      className: o,
      elementType: s,
      ownerState: l,
      externalForwardedProps: u,
      internalForwardedProps: f,
      shouldForwardComponentProp: p = !1,
      ...m
    } = r,
    {
      component: y,
      slots: k = { [e]: void 0 },
      slotProps: C = { [e]: void 0 },
      ...S
    } = u,
    b = k[e] || s,
    w = Ny(C[e], l),
    {
      props: { component: h, ...P },
      internalRef: I,
    } = $y({
      className: o,
      ...m,
      externalForwardedProps: e === "root" ? S : void 0,
      externalSlotProps: w,
    }),
    T = Ct(I, w == null ? void 0 : w.ref, r.ref),
    v = e === "root" ? h || y : h,
    x = My(
      b,
      {
        ...(e === "root" && !y && !k[e] && f),
        ...(e !== "root" && !k[e] && f),
        ...P,
        ...(v && !p && { as: v }),
        ...(v && p && { component: v }),
        ref: T,
      },
      l,
    );
  return [b, x];
}
class ra {
  constructor() {
    Kr(this, "mountEffect", () => {
      this.shouldMount &&
        !this.didMount &&
        this.ref.current !== null &&
        ((this.didMount = !0), this.mounted.resolve());
    });
    (this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null);
  }
  static create() {
    return new ra();
  }
  static use() {
    const r = Ty(ra.create).current,
      [o, s] = _.useState(!1);
    return (
      (r.shouldMount = o),
      (r.setShouldMount = s),
      _.useEffect(r.mountEffect, [o]),
      r
    );
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = Qb()),
        (this.shouldMount = !0),
        this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  start(...r) {
    this.mount().then(() => {
      var o;
      return (o = this.ref.current) == null ? void 0 : o.start(...r);
    });
  }
  stop(...r) {
    this.mount().then(() => {
      var o;
      return (o = this.ref.current) == null ? void 0 : o.stop(...r);
    });
  }
  pulsate(...r) {
    this.mount().then(() => {
      var o;
      return (o = this.ref.current) == null ? void 0 : o.pulsate(...r);
    });
  }
}
function qb() {
  return ra.use();
}
function Qb() {
  let e, r;
  const o = new Promise((s, l) => {
    (e = s), (r = l);
  });
  return (o.resolve = e), (o.reject = r), o;
}
function Kb(e) {
  const {
      className: r,
      classes: o,
      pulsate: s = !1,
      rippleX: l,
      rippleY: u,
      rippleSize: f,
      in: p,
      onExited: m,
      timeout: y,
    } = e,
    [k, C] = _.useState(!1),
    S = ke(r, o.ripple, o.rippleVisible, s && o.ripplePulsate),
    b = { width: f, height: f, top: -(f / 2) + u, left: -(f / 2) + l },
    w = ke(o.child, k && o.childLeaving, s && o.childPulsate);
  return (
    !p && !k && C(!0),
    _.useEffect(() => {
      if (!p && m != null) {
        const h = setTimeout(m, y);
        return () => {
          clearTimeout(h);
        };
      }
    }, [m, p, y]),
    X.jsx("span", {
      className: S,
      style: b,
      children: X.jsx("span", { className: w }),
    })
  );
}
const un = Me("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  pf = 550,
  Gb = 80,
  Yb = ys`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  Xb = ys`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  Jb = ys`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  Zb = he("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  ek = he(Kb, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${un.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Yb};
    animation-duration: ${pf}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  &.${un.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${un.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${un.childLeaving} {
    opacity: 0;
    animation-name: ${Xb};
    animation-duration: ${pf}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  & .${un.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Jb};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  tk = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiTouchRipple" }),
      { center: l = !1, classes: u = {}, className: f, ...p } = s,
      [m, y] = _.useState([]),
      k = _.useRef(0),
      C = _.useRef(null);
    _.useEffect(() => {
      C.current && (C.current(), (C.current = null));
    }, [m]);
    const S = _.useRef(!1),
      b = Iy(),
      w = _.useRef(null),
      h = _.useRef(null),
      P = _.useCallback(
        (x) => {
          const {
            pulsate: R,
            rippleX: M,
            rippleY: O,
            rippleSize: N,
            cb: z,
          } = x;
          y((g) => [
            ...g,
            X.jsx(
              ek,
              {
                classes: {
                  ripple: ke(u.ripple, un.ripple),
                  rippleVisible: ke(u.rippleVisible, un.rippleVisible),
                  ripplePulsate: ke(u.ripplePulsate, un.ripplePulsate),
                  child: ke(u.child, un.child),
                  childLeaving: ke(u.childLeaving, un.childLeaving),
                  childPulsate: ke(u.childPulsate, un.childPulsate),
                },
                timeout: pf,
                pulsate: R,
                rippleX: M,
                rippleY: O,
                rippleSize: N,
              },
              k.current,
            ),
          ]),
            (k.current += 1),
            (C.current = z);
        },
        [u],
      ),
      I = _.useCallback(
        (x = {}, R = {}, M = () => {}) => {
          const {
            pulsate: O = !1,
            center: N = l || R.pulsate,
            fakeElement: z = !1,
          } = R;
          if ((x == null ? void 0 : x.type) === "mousedown" && S.current) {
            S.current = !1;
            return;
          }
          (x == null ? void 0 : x.type) === "touchstart" && (S.current = !0);
          const g = z ? null : h.current,
            A = g
              ? g.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let j, B, q;
          if (
            N ||
            x === void 0 ||
            (x.clientX === 0 && x.clientY === 0) ||
            (!x.clientX && !x.touches)
          )
            (j = Math.round(A.width / 2)), (B = Math.round(A.height / 2));
          else {
            const { clientX: V, clientY: Y } =
              x.touches && x.touches.length > 0 ? x.touches[0] : x;
            (j = Math.round(V - A.left)), (B = Math.round(Y - A.top));
          }
          if (N)
            (q = Math.sqrt((2 * A.width ** 2 + A.height ** 2) / 3)),
              q % 2 === 0 && (q += 1);
          else {
            const V =
                Math.max(Math.abs((g ? g.clientWidth : 0) - j), j) * 2 + 2,
              Y = Math.max(Math.abs((g ? g.clientHeight : 0) - B), B) * 2 + 2;
            q = Math.sqrt(V ** 2 + Y ** 2);
          }
          x != null && x.touches
            ? w.current === null &&
              ((w.current = () => {
                P({ pulsate: O, rippleX: j, rippleY: B, rippleSize: q, cb: M });
              }),
              b.start(Gb, () => {
                w.current && (w.current(), (w.current = null));
              }))
            : P({ pulsate: O, rippleX: j, rippleY: B, rippleSize: q, cb: M });
        },
        [l, P, b],
      ),
      T = _.useCallback(() => {
        I({}, { pulsate: !0 });
      }, [I]),
      v = _.useCallback(
        (x, R) => {
          if (
            (b.clear(),
            (x == null ? void 0 : x.type) === "touchend" && w.current)
          ) {
            w.current(),
              (w.current = null),
              b.start(0, () => {
                v(x, R);
              });
            return;
          }
          (w.current = null),
            y((M) => (M.length > 0 ? M.slice(1) : M)),
            (C.current = R);
        },
        [b],
      );
    return (
      _.useImperativeHandle(o, () => ({ pulsate: T, start: I, stop: v }), [
        T,
        I,
        v,
      ]),
      X.jsx(Zb, {
        className: ke(un.root, u.root, f),
        ref: h,
        ...p,
        children: X.jsx(Jf, { component: null, exit: !0, children: m }),
      })
    );
  });
function nk(e) {
  return je("MuiButtonBase", e);
}
const rk = Me("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  ok = (e) => {
    const {
        disabled: r,
        focusVisible: o,
        focusVisibleClassName: s,
        classes: l,
      } = e,
      f = Be({ root: ["root", r && "disabled", o && "focusVisible"] }, nk, l);
    return o && s && (f.root += ` ${s}`), f;
  },
  ik = he("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, r) => r.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${rk.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  oa = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiButtonBase" }),
      {
        action: l,
        centerRipple: u = !1,
        children: f,
        className: p,
        component: m = "button",
        disabled: y = !1,
        disableRipple: k = !1,
        disableTouchRipple: C = !1,
        focusRipple: S = !1,
        focusVisibleClassName: b,
        LinkComponent: w = "a",
        onBlur: h,
        onClick: P,
        onContextMenu: I,
        onDragLeave: T,
        onFocus: v,
        onFocusVisible: x,
        onKeyDown: R,
        onKeyUp: M,
        onMouseDown: O,
        onMouseLeave: N,
        onMouseUp: z,
        onTouchEnd: g,
        onTouchMove: A,
        onTouchStart: j,
        tabIndex: B = 0,
        TouchRippleProps: q,
        touchRippleRef: V,
        type: Y,
        ...te
      } = s,
      H = _.useRef(null),
      K = qb(),
      Z = Ct(K.ref, V),
      [L, G] = _.useState(!1);
    y && L && G(!1),
      _.useImperativeHandle(
        l,
        () => ({
          focusVisible: () => {
            G(!0), H.current.focus();
          },
        }),
        [],
      );
    const ie = K.shouldMount && !k && !y;
    _.useEffect(() => {
      L && S && !k && K.pulsate();
    }, [k, S, L, K]);
    const se = tr(K, "start", O, C),
      le = tr(K, "stop", I, C),
      Se = tr(K, "stop", T, C),
      ce = tr(K, "stop", z, C),
      we = tr(
        K,
        "stop",
        (ge) => {
          L && ge.preventDefault(), N && N(ge);
        },
        C,
      ),
      ye = tr(K, "start", j, C),
      ve = tr(K, "stop", g, C),
      _e = tr(K, "stop", A, C),
      Te = tr(
        K,
        "stop",
        (ge) => {
          Jh(ge.target) || G(!1), h && h(ge);
        },
        !1,
      ),
      Ge = Ho((ge) => {
        H.current || (H.current = ge.currentTarget),
          Jh(ge.target) && (G(!0), x && x(ge)),
          v && v(ge);
      }),
      Re = () => {
        const ge = H.current;
        return m && m !== "button" && !(ge.tagName === "A" && ge.href);
      },
      Ve = Ho((ge) => {
        S &&
          !ge.repeat &&
          L &&
          ge.key === " " &&
          K.stop(ge, () => {
            K.start(ge);
          }),
          ge.target === ge.currentTarget &&
            Re() &&
            ge.key === " " &&
            ge.preventDefault(),
          R && R(ge),
          ge.target === ge.currentTarget &&
            Re() &&
            ge.key === "Enter" &&
            !y &&
            (ge.preventDefault(), P && P(ge));
      }),
      Tt = Ho((ge) => {
        S &&
          ge.key === " " &&
          L &&
          !ge.defaultPrevented &&
          K.stop(ge, () => {
            K.pulsate(ge);
          }),
          M && M(ge),
          P &&
            ge.target === ge.currentTarget &&
            Re() &&
            ge.key === " " &&
            !ge.defaultPrevented &&
            P(ge);
      });
    let ht = m;
    ht === "button" && (te.href || te.to) && (ht = w);
    const lt = {};
    ht === "button"
      ? ((lt.type = Y === void 0 ? "button" : Y), (lt.disabled = y))
      : (!te.href && !te.to && (lt.role = "button"),
        y && (lt["aria-disabled"] = y));
    const Dt = Ct(o, H),
      at = {
        ...s,
        centerRipple: u,
        component: m,
        disabled: y,
        disableRipple: k,
        disableTouchRipple: C,
        focusRipple: S,
        tabIndex: B,
        focusVisible: L,
      },
      Qe = ok(at);
    return X.jsxs(ik, {
      as: ht,
      className: ke(Qe.root, p),
      ownerState: at,
      onBlur: Te,
      onClick: P,
      onContextMenu: le,
      onFocus: Ge,
      onKeyDown: Ve,
      onKeyUp: Tt,
      onMouseDown: se,
      onMouseLeave: we,
      onMouseUp: ce,
      onDragLeave: Se,
      onTouchEnd: ve,
      onTouchMove: _e,
      onTouchStart: ye,
      ref: Dt,
      tabIndex: y ? -1 : B,
      type: Y,
      ...lt,
      ...te,
      children: [f, ie ? X.jsx(tk, { ref: Z, center: u, ...q }) : null],
    });
  });
function tr(e, r, o, s = !1) {
  return Ho((l) => (o && o(l), s || e[r](l), !0));
}
function sk(e) {
  return typeof e.main == "string";
}
function lk(e, r = []) {
  if (!sk(e)) return !1;
  for (const o of r)
    if (!e.hasOwnProperty(o) || typeof e[o] != "string") return !1;
  return !0;
}
function fn(e = []) {
  return ([, r]) => r && lk(r, e);
}
function ak(e) {
  return je("MuiCircularProgress", e);
}
Me("MuiCircularProgress", [
  "root",
  "determinate",
  "indeterminate",
  "colorPrimary",
  "colorSecondary",
  "svg",
  "circle",
  "circleDeterminate",
  "circleIndeterminate",
  "circleDisableShrink",
]);
const Ir = 44,
  mf = ys`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  hf = ys`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,
  uk =
    typeof mf != "string"
      ? Lf`
        animation: ${mf} 1.4s linear infinite;
      `
      : null,
  ck =
    typeof hf != "string"
      ? Lf`
        animation: ${hf} 1.4s ease-in-out infinite;
      `
      : null,
  fk = (e) => {
    const { classes: r, variant: o, color: s, disableShrink: l } = e,
      u = {
        root: ["root", o, `color${pe(s)}`],
        svg: ["svg"],
        circle: ["circle", `circle${pe(o)}`, l && "circleDisableShrink"],
      };
    return Be(u, ak, r);
  },
  dk = he("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [r.root, r[o.variant], r[`color${pe(o.color)}`]];
    },
  })(
    et(({ theme: e }) => ({
      display: "inline-block",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: e.transitions.create("transform") },
        },
        {
          props: { variant: "indeterminate" },
          style: uk || { animation: `${mf} 1.4s linear infinite` },
        },
        ...Object.entries(e.palette)
          .filter(fn())
          .map(([r]) => ({
            props: { color: r },
            style: { color: (e.vars || e).palette[r].main },
          })),
      ],
    })),
  ),
  pk = he("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (e, r) => r.svg,
  })({ display: "block" }),
  mk = he("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.circle,
        r[`circle${pe(o.variant)}`],
        o.disableShrink && r.circleDisableShrink,
      ];
    },
  })(
    et(({ theme: e }) => ({
      stroke: "currentColor",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: e.transitions.create("stroke-dashoffset") },
        },
        {
          props: { variant: "indeterminate" },
          style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 },
        },
        {
          props: ({ ownerState: r }) =>
            r.variant === "indeterminate" && !r.disableShrink,
          style: ck || { animation: `${hf} 1.4s ease-in-out infinite` },
        },
      ],
    })),
  ),
  hk = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiCircularProgress" }),
      {
        className: l,
        color: u = "primary",
        disableShrink: f = !1,
        size: p = 40,
        style: m,
        thickness: y = 3.6,
        value: k = 0,
        variant: C = "indeterminate",
        ...S
      } = s,
      b = {
        ...s,
        color: u,
        disableShrink: f,
        size: p,
        thickness: y,
        value: k,
        variant: C,
      },
      w = fk(b),
      h = {},
      P = {},
      I = {};
    if (C === "determinate") {
      const T = 2 * Math.PI * ((Ir - y) / 2);
      (h.strokeDasharray = T.toFixed(3)),
        (I["aria-valuenow"] = Math.round(k)),
        (h.strokeDashoffset = `${(((100 - k) / 100) * T).toFixed(3)}px`),
        (P.transform = "rotate(-90deg)");
    }
    return X.jsx(dk, {
      className: ke(w.root, l),
      style: { width: p, height: p, ...P, ...m },
      ownerState: b,
      ref: o,
      role: "progressbar",
      ...I,
      ...S,
      children: X.jsx(pk, {
        className: w.svg,
        ownerState: b,
        viewBox: `${Ir / 2} ${Ir / 2} ${Ir} ${Ir}`,
        children: X.jsx(mk, {
          className: w.circle,
          style: h,
          ownerState: b,
          cx: Ir,
          cy: Ir,
          r: (Ir - y) / 2,
          fill: "none",
          strokeWidth: y,
        }),
      }),
    });
  });
function gk(e) {
  return je("MuiTypography", e);
}
Me("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const yk = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  vk = _b(),
  Sk = (e) => {
    const {
        align: r,
        gutterBottom: o,
        noWrap: s,
        paragraph: l,
        variant: u,
        classes: f,
      } = e,
      p = {
        root: [
          "root",
          u,
          e.align !== "inherit" && `align${pe(r)}`,
          o && "gutterBottom",
          s && "noWrap",
          l && "paragraph",
        ],
      };
    return Be(p, gk, f);
  },
  wk = he("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.root,
        o.variant && r[o.variant],
        o.align !== "inherit" && r[`align${pe(o.align)}`],
        o.noWrap && r.noWrap,
        o.gutterBottom && r.gutterBottom,
        o.paragraph && r.paragraph,
      ];
    },
  })(
    et(({ theme: e }) => {
      var r;
      return {
        margin: 0,
        variants: [
          {
            props: { variant: "inherit" },
            style: {
              font: "inherit",
              lineHeight: "inherit",
              letterSpacing: "inherit",
            },
          },
          ...Object.entries(e.typography)
            .filter(([o, s]) => o !== "inherit" && s && typeof s == "object")
            .map(([o, s]) => ({ props: { variant: o }, style: s })),
          ...Object.entries(e.palette)
            .filter(fn())
            .map(([o]) => ({
              props: { color: o },
              style: { color: (e.vars || e).palette[o].main },
            })),
          ...Object.entries(((r = e.palette) == null ? void 0 : r.text) || {})
            .filter(([, o]) => typeof o == "string")
            .map(([o]) => ({
              props: { color: `text${pe(o)}` },
              style: { color: (e.vars || e).palette.text[o] },
            })),
          {
            props: ({ ownerState: o }) => o.align !== "inherit",
            style: { textAlign: "var(--Typography-textAlign)" },
          },
          {
            props: ({ ownerState: o }) => o.noWrap,
            style: {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          },
          {
            props: ({ ownerState: o }) => o.gutterBottom,
            style: { marginBottom: "0.35em" },
          },
          {
            props: ({ ownerState: o }) => o.paragraph,
            style: { marginBottom: 16 },
          },
        ],
      };
    }),
  ),
  cg = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  ia = _.forwardRef(function (r, o) {
    const { color: s, ...l } = We({ props: r, name: "MuiTypography" }),
      u = !yk[s],
      f = vk({ ...l, ...(u && { color: s }) }),
      {
        align: p = "inherit",
        className: m,
        component: y,
        gutterBottom: k = !1,
        noWrap: C = !1,
        paragraph: S = !1,
        variant: b = "body1",
        variantMapping: w = cg,
        ...h
      } = f,
      P = {
        ...f,
        align: p,
        color: s,
        className: m,
        component: y,
        gutterBottom: k,
        noWrap: C,
        paragraph: S,
        variant: b,
        variantMapping: w,
      },
      I = y || (S ? "p" : w[b] || cg[b]) || "span",
      T = Sk(P);
    return X.jsx(wk, {
      as: I,
      ref: o,
      className: ke(T.root, m),
      ...h,
      ownerState: P,
      style: {
        ...(p !== "inherit" && { "--Typography-textAlign": p }),
        ...h.style,
      },
    });
  });
function Ck(e) {
  return typeof e == "function" ? e() : e;
}
const xk = _.forwardRef(function (r, o) {
    const { children: s, container: l, disablePortal: u = !1 } = r,
      [f, p] = _.useState(null),
      m = Ct(_.isValidElement(s) ? Cs(s) : null, o);
    if (
      ($r(() => {
        u || p(Ck(l) || document.body);
      }, [l, u]),
      $r(() => {
        if (f && !u)
          return (
            sf(o, f),
            () => {
              sf(o, null);
            }
          );
      }, [o, f, u]),
      u)
    ) {
      if (_.isValidElement(s)) {
        const y = { ref: m };
        return _.cloneElement(s, y);
      }
      return s;
    }
    return f && Hy.createPortal(s, f);
  }),
  bk = Yo(
    X.jsx("path", {
      d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
    }),
    "Cancel",
  );
function kk(e) {
  return je("MuiChip", e);
}
const Ie = Me("MuiChip", [
    "root",
    "sizeSmall",
    "sizeMedium",
    "colorDefault",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "clickable",
    "clickableColorPrimary",
    "clickableColorSecondary",
    "deletable",
    "deletableColorPrimary",
    "deletableColorSecondary",
    "outlined",
    "filled",
    "outlinedPrimary",
    "outlinedSecondary",
    "filledPrimary",
    "filledSecondary",
    "avatar",
    "avatarSmall",
    "avatarMedium",
    "avatarColorPrimary",
    "avatarColorSecondary",
    "icon",
    "iconSmall",
    "iconMedium",
    "iconColorPrimary",
    "iconColorSecondary",
    "label",
    "labelSmall",
    "labelMedium",
    "deleteIcon",
    "deleteIconSmall",
    "deleteIconMedium",
    "deleteIconColorPrimary",
    "deleteIconColorSecondary",
    "deleteIconOutlinedColorPrimary",
    "deleteIconOutlinedColorSecondary",
    "deleteIconFilledColorPrimary",
    "deleteIconFilledColorSecondary",
    "focusVisible",
  ]),
  Ek = (e) => {
    const {
        classes: r,
        disabled: o,
        size: s,
        color: l,
        iconColor: u,
        onDelete: f,
        clickable: p,
        variant: m,
      } = e,
      y = {
        root: [
          "root",
          m,
          o && "disabled",
          `size${pe(s)}`,
          `color${pe(l)}`,
          p && "clickable",
          p && `clickableColor${pe(l)}`,
          f && "deletable",
          f && `deletableColor${pe(l)}`,
          `${m}${pe(l)}`,
        ],
        label: ["label", `label${pe(s)}`],
        avatar: ["avatar", `avatar${pe(s)}`, `avatarColor${pe(l)}`],
        icon: ["icon", `icon${pe(s)}`, `iconColor${pe(u)}`],
        deleteIcon: [
          "deleteIcon",
          `deleteIcon${pe(s)}`,
          `deleteIconColor${pe(l)}`,
          `deleteIcon${pe(m)}Color${pe(l)}`,
        ],
      };
    return Be(y, kk, r);
  },
  Rk = he("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e,
        {
          color: s,
          iconColor: l,
          clickable: u,
          onDelete: f,
          size: p,
          variant: m,
        } = o;
      return [
        { [`& .${Ie.avatar}`]: r.avatar },
        { [`& .${Ie.avatar}`]: r[`avatar${pe(p)}`] },
        { [`& .${Ie.avatar}`]: r[`avatarColor${pe(s)}`] },
        { [`& .${Ie.icon}`]: r.icon },
        { [`& .${Ie.icon}`]: r[`icon${pe(p)}`] },
        { [`& .${Ie.icon}`]: r[`iconColor${pe(l)}`] },
        { [`& .${Ie.deleteIcon}`]: r.deleteIcon },
        { [`& .${Ie.deleteIcon}`]: r[`deleteIcon${pe(p)}`] },
        { [`& .${Ie.deleteIcon}`]: r[`deleteIconColor${pe(s)}`] },
        { [`& .${Ie.deleteIcon}`]: r[`deleteIcon${pe(m)}Color${pe(s)}`] },
        r.root,
        r[`size${pe(p)}`],
        r[`color${pe(s)}`],
        u && r.clickable,
        u && s !== "default" && r[`clickableColor${pe(s)})`],
        f && r.deletable,
        f && s !== "default" && r[`deletableColor${pe(s)}`],
        r[m],
        r[`${m}${pe(s)}`],
      ];
    },
  })(
    et(({ theme: e }) => {
      const r =
        e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
      return {
        maxWidth: "100%",
        fontFamily: e.typography.fontFamily,
        fontSize: e.typography.pxToRem(13),
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 32,
        color: (e.vars || e).palette.text.primary,
        backgroundColor: (e.vars || e).palette.action.selected,
        borderRadius: 32 / 2,
        whiteSpace: "nowrap",
        transition: e.transitions.create(["background-color", "box-shadow"]),
        cursor: "unset",
        outline: 0,
        textDecoration: "none",
        border: 0,
        padding: 0,
        verticalAlign: "middle",
        boxSizing: "border-box",
        [`&.${Ie.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
          pointerEvents: "none",
        },
        [`& .${Ie.avatar}`]: {
          marginLeft: 5,
          marginRight: -6,
          width: 24,
          height: 24,
          color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : r,
          fontSize: e.typography.pxToRem(12),
        },
        [`& .${Ie.avatarColorPrimary}`]: {
          color: (e.vars || e).palette.primary.contrastText,
          backgroundColor: (e.vars || e).palette.primary.dark,
        },
        [`& .${Ie.avatarColorSecondary}`]: {
          color: (e.vars || e).palette.secondary.contrastText,
          backgroundColor: (e.vars || e).palette.secondary.dark,
        },
        [`& .${Ie.avatarSmall}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: e.typography.pxToRem(10),
        },
        [`& .${Ie.icon}`]: { marginLeft: 5, marginRight: -6 },
        [`& .${Ie.deleteIcon}`]: {
          WebkitTapHighlightColor: "transparent",
          color: e.vars
            ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)`
            : rt(e.palette.text.primary, 0.26),
          fontSize: 22,
          cursor: "pointer",
          margin: "0 5px 0 -6px",
          "&:hover": {
            color: e.vars
              ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)`
              : rt(e.palette.text.primary, 0.4),
          },
        },
        variants: [
          {
            props: { size: "small" },
            style: {
              height: 24,
              [`& .${Ie.icon}`]: {
                fontSize: 18,
                marginLeft: 4,
                marginRight: -4,
              },
              [`& .${Ie.deleteIcon}`]: {
                fontSize: 16,
                marginRight: 4,
                marginLeft: -4,
              },
            },
          },
          ...Object.entries(e.palette)
            .filter(fn(["contrastText"]))
            .map(([o]) => ({
              props: { color: o },
              style: {
                backgroundColor: (e.vars || e).palette[o].main,
                color: (e.vars || e).palette[o].contrastText,
                [`& .${Ie.deleteIcon}`]: {
                  color: e.vars
                    ? `rgba(${e.vars.palette[o].contrastTextChannel} / 0.7)`
                    : rt(e.palette[o].contrastText, 0.7),
                  "&:hover, &:active": {
                    color: (e.vars || e).palette[o].contrastText,
                  },
                },
              },
            })),
          {
            props: (o) => o.iconColor === o.color,
            style: {
              [`& .${Ie.icon}`]: {
                color: e.vars ? e.vars.palette.Chip.defaultIconColor : r,
              },
            },
          },
          {
            props: (o) => o.iconColor === o.color && o.color !== "default",
            style: { [`& .${Ie.icon}`]: { color: "inherit" } },
          },
          {
            props: { onDelete: !0 },
            style: {
              [`&.${Ie.focusVisible}`]: {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                  : rt(
                      e.palette.action.selected,
                      e.palette.action.selectedOpacity +
                        e.palette.action.focusOpacity,
                    ),
              },
            },
          },
          ...Object.entries(e.palette)
            .filter(fn(["dark"]))
            .map(([o]) => ({
              props: { color: o, onDelete: !0 },
              style: {
                [`&.${Ie.focusVisible}`]: {
                  background: (e.vars || e).palette[o].dark,
                },
              },
            })),
          {
            props: { clickable: !0 },
            style: {
              userSelect: "none",
              WebkitTapHighlightColor: "transparent",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
                  : rt(
                      e.palette.action.selected,
                      e.palette.action.selectedOpacity +
                        e.palette.action.hoverOpacity,
                    ),
              },
              [`&.${Ie.focusVisible}`]: {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                  : rt(
                      e.palette.action.selected,
                      e.palette.action.selectedOpacity +
                        e.palette.action.focusOpacity,
                    ),
              },
              "&:active": { boxShadow: (e.vars || e).shadows[1] },
            },
          },
          ...Object.entries(e.palette)
            .filter(fn(["dark"]))
            .map(([o]) => ({
              props: { color: o, clickable: !0 },
              style: {
                [`&:hover, &.${Ie.focusVisible}`]: {
                  backgroundColor: (e.vars || e).palette[o].dark,
                },
              },
            })),
          {
            props: { variant: "outlined" },
            style: {
              backgroundColor: "transparent",
              border: e.vars
                ? `1px solid ${e.vars.palette.Chip.defaultBorder}`
                : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
              [`&.${Ie.clickable}:hover`]: {
                backgroundColor: (e.vars || e).palette.action.hover,
              },
              [`&.${Ie.focusVisible}`]: {
                backgroundColor: (e.vars || e).palette.action.focus,
              },
              [`& .${Ie.avatar}`]: { marginLeft: 4 },
              [`& .${Ie.avatarSmall}`]: { marginLeft: 2 },
              [`& .${Ie.icon}`]: { marginLeft: 4 },
              [`& .${Ie.iconSmall}`]: { marginLeft: 2 },
              [`& .${Ie.deleteIcon}`]: { marginRight: 5 },
              [`& .${Ie.deleteIconSmall}`]: { marginRight: 3 },
            },
          },
          ...Object.entries(e.palette)
            .filter(fn())
            .map(([o]) => ({
              props: { variant: "outlined", color: o },
              style: {
                color: (e.vars || e).palette[o].main,
                border: `1px solid ${e.vars ? `rgba(${e.vars.palette[o].mainChannel} / 0.7)` : rt(e.palette[o].main, 0.7)}`,
                [`&.${Ie.clickable}:hover`]: {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : rt(e.palette[o].main, e.palette.action.hoverOpacity),
                },
                [`&.${Ie.focusVisible}`]: {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.focusOpacity})`
                    : rt(e.palette[o].main, e.palette.action.focusOpacity),
                },
                [`& .${Ie.deleteIcon}`]: {
                  color: e.vars
                    ? `rgba(${e.vars.palette[o].mainChannel} / 0.7)`
                    : rt(e.palette[o].main, 0.7),
                  "&:hover, &:active": { color: (e.vars || e).palette[o].main },
                },
              },
            })),
        ],
      };
    }),
  ),
  Pk = he("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e,
        { size: s } = o;
      return [r.label, r[`label${pe(s)}`]];
    },
  })({
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: "nowrap",
    variants: [
      {
        props: { variant: "outlined" },
        style: { paddingLeft: 11, paddingRight: 11 },
      },
      { props: { size: "small" }, style: { paddingLeft: 8, paddingRight: 8 } },
      {
        props: { size: "small", variant: "outlined" },
        style: { paddingLeft: 7, paddingRight: 7 },
      },
    ],
  });
function fg(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Tk = _.forwardRef(function (r, o) {
  const s = We({ props: r, name: "MuiChip" }),
    {
      avatar: l,
      className: u,
      clickable: f,
      color: p = "default",
      component: m,
      deleteIcon: y,
      disabled: k = !1,
      icon: C,
      label: S,
      onClick: b,
      onDelete: w,
      onKeyDown: h,
      onKeyUp: P,
      size: I = "medium",
      variant: T = "filled",
      tabIndex: v,
      skipFocusWhenDisabled: x = !1,
      ...R
    } = s,
    M = _.useRef(null),
    O = Ct(M, o),
    N = (K) => {
      K.stopPropagation(), w && w(K);
    },
    z = (K) => {
      K.currentTarget === K.target && fg(K) && K.preventDefault(), h && h(K);
    },
    g = (K) => {
      K.currentTarget === K.target && w && fg(K) && w(K), P && P(K);
    },
    A = f !== !1 && b ? !0 : f,
    j = A || w ? oa : m || "div",
    B = {
      ...s,
      component: j,
      disabled: k,
      size: I,
      color: p,
      iconColor: (_.isValidElement(C) && C.props.color) || p,
      onDelete: !!w,
      clickable: A,
      variant: T,
    },
    q = Ek(B),
    V =
      j === oa
        ? {
            component: m || "div",
            focusVisibleClassName: q.focusVisible,
            ...(w && { disableRipple: !0 }),
          }
        : {};
  let Y = null;
  w &&
    (Y =
      y && _.isValidElement(y)
        ? _.cloneElement(y, {
            className: ke(y.props.className, q.deleteIcon),
            onClick: N,
          })
        : X.jsx(bk, { className: ke(q.deleteIcon), onClick: N }));
  let te = null;
  l &&
    _.isValidElement(l) &&
    (te = _.cloneElement(l, { className: ke(q.avatar, l.props.className) }));
  let H = null;
  return (
    C &&
      _.isValidElement(C) &&
      (H = _.cloneElement(C, { className: ke(q.icon, C.props.className) })),
    X.jsxs(Rk, {
      as: j,
      className: ke(q.root, u),
      disabled: A && k ? !0 : void 0,
      onClick: b,
      onKeyDown: z,
      onKeyUp: g,
      ref: O,
      tabIndex: x && k ? -1 : v,
      ownerState: B,
      ...V,
      ...R,
      children: [
        te || H,
        X.jsx(Pk, { className: ke(q.label), ownerState: B, children: S }),
        Y,
      ],
    })
  );
});
function Dl(e) {
  return parseInt(e, 10) || 0;
}
const Ik = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function Ok(e) {
  return (
    e == null ||
    Object.keys(e).length === 0 ||
    (e.outerHeightStyle === 0 && !e.overflowing)
  );
}
const Mk = _.forwardRef(function (r, o) {
  const {
      onChange: s,
      maxRows: l,
      minRows: u = 1,
      style: f,
      value: p,
      ...m
    } = r,
    { current: y } = _.useRef(p != null),
    k = _.useRef(null),
    C = Ct(o, k),
    S = _.useRef(null),
    b = _.useRef(null),
    w = _.useCallback(() => {
      const I = k.current,
        v = ir(I).getComputedStyle(I);
      if (v.width === "0px") return { outerHeightStyle: 0, overflowing: !1 };
      const x = b.current;
      (x.style.width = v.width),
        (x.value = I.value || r.placeholder || "x"),
        x.value.slice(-1) ===
          `
` && (x.value += " ");
      const R = v.boxSizing,
        M = Dl(v.paddingBottom) + Dl(v.paddingTop),
        O = Dl(v.borderBottomWidth) + Dl(v.borderTopWidth),
        N = x.scrollHeight;
      x.value = "x";
      const z = x.scrollHeight;
      let g = N;
      u && (g = Math.max(Number(u) * z, g)),
        l && (g = Math.min(Number(l) * z, g)),
        (g = Math.max(g, z));
      const A = g + (R === "border-box" ? M + O : 0),
        j = Math.abs(g - N) <= 1;
      return { outerHeightStyle: A, overflowing: j };
    }, [l, u, r.placeholder]),
    h = _.useCallback(() => {
      const I = w();
      if (Ok(I)) return;
      const T = I.outerHeightStyle,
        v = k.current;
      S.current !== T && ((S.current = T), (v.style.height = `${T}px`)),
        (v.style.overflow = I.overflowing ? "hidden" : "");
    }, [w]);
  $r(() => {
    const I = () => {
      h();
    };
    let T;
    const v = Ry(I),
      x = k.current,
      R = ir(x);
    R.addEventListener("resize", v);
    let M;
    return (
      typeof ResizeObserver < "u" &&
        ((M = new ResizeObserver(I)), M.observe(x)),
      () => {
        v.clear(),
          cancelAnimationFrame(T),
          R.removeEventListener("resize", v),
          M && M.disconnect();
      }
    );
  }, [w, h]),
    $r(() => {
      h();
    });
  const P = (I) => {
    y || h(), s && s(I);
  };
  return X.jsxs(_.Fragment, {
    children: [
      X.jsx("textarea", {
        value: p,
        onChange: P,
        ref: C,
        rows: u,
        style: f,
        ...m,
      }),
      X.jsx("textarea", {
        "aria-hidden": !0,
        className: r.className,
        readOnly: !0,
        ref: b,
        tabIndex: -1,
        style: { ...Ik.shadow, ...f, paddingTop: 0, paddingBottom: 0 },
      }),
    ],
  });
});
function gf(e) {
  return typeof e == "string";
}
function Xo({ props: e, states: r, muiFormControl: o }) {
  return r.reduce(
    (s, l) => ((s[l] = e[l]), o && typeof e[l] > "u" && (s[l] = o[l]), s),
    {},
  );
}
const Zf = _.createContext(void 0);
function Jo() {
  return _.useContext(Zf);
}
function dg(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function sa(e, r = !1) {
  return (
    e &&
    ((dg(e.value) && e.value !== "") ||
      (r && dg(e.defaultValue) && e.defaultValue !== ""))
  );
}
function _k(e) {
  return e.startAdornment;
}
function $k(e) {
  return je("MuiInputBase", e);
}
const Ko = Me("MuiInputBase", [
  "root",
  "formControl",
  "focused",
  "disabled",
  "adornedStart",
  "adornedEnd",
  "error",
  "sizeSmall",
  "multiline",
  "colorSecondary",
  "fullWidth",
  "hiddenLabel",
  "readOnly",
  "input",
  "inputSizeSmall",
  "inputMultiline",
  "inputTypeSearch",
  "inputAdornedStart",
  "inputAdornedEnd",
  "inputHiddenLabel",
]);
var pg;
const Ea = (e, r) => {
    const { ownerState: o } = e;
    return [
      r.root,
      o.formControl && r.formControl,
      o.startAdornment && r.adornedStart,
      o.endAdornment && r.adornedEnd,
      o.error && r.error,
      o.size === "small" && r.sizeSmall,
      o.multiline && r.multiline,
      o.color && r[`color${pe(o.color)}`],
      o.fullWidth && r.fullWidth,
      o.hiddenLabel && r.hiddenLabel,
    ];
  },
  Ra = (e, r) => {
    const { ownerState: o } = e;
    return [
      r.input,
      o.size === "small" && r.inputSizeSmall,
      o.multiline && r.inputMultiline,
      o.type === "search" && r.inputTypeSearch,
      o.startAdornment && r.inputAdornedStart,
      o.endAdornment && r.inputAdornedEnd,
      o.hiddenLabel && r.inputHiddenLabel,
    ];
  },
  Nk = (e) => {
    const {
        classes: r,
        color: o,
        disabled: s,
        error: l,
        endAdornment: u,
        focused: f,
        formControl: p,
        fullWidth: m,
        hiddenLabel: y,
        multiline: k,
        readOnly: C,
        size: S,
        startAdornment: b,
        type: w,
      } = e,
      h = {
        root: [
          "root",
          `color${pe(o)}`,
          s && "disabled",
          l && "error",
          m && "fullWidth",
          f && "focused",
          p && "formControl",
          S && S !== "medium" && `size${pe(S)}`,
          k && "multiline",
          b && "adornedStart",
          u && "adornedEnd",
          y && "hiddenLabel",
          C && "readOnly",
        ],
        input: [
          "input",
          s && "disabled",
          w === "search" && "inputTypeSearch",
          k && "inputMultiline",
          S === "small" && "inputSizeSmall",
          y && "inputHiddenLabel",
          b && "inputAdornedStart",
          u && "inputAdornedEnd",
          C && "readOnly",
        ],
      };
    return Be(h, $k, r);
  },
  Pa = he("div", { name: "MuiInputBase", slot: "Root", overridesResolver: Ea })(
    et(({ theme: e }) => ({
      ...e.typography.body1,
      color: (e.vars || e).palette.text.primary,
      lineHeight: "1.4375em",
      boxSizing: "border-box",
      position: "relative",
      cursor: "text",
      display: "inline-flex",
      alignItems: "center",
      [`&.${Ko.disabled}`]: {
        color: (e.vars || e).palette.text.disabled,
        cursor: "default",
      },
      variants: [
        {
          props: ({ ownerState: r }) => r.multiline,
          style: { padding: "4px 0 5px" },
        },
        {
          props: ({ ownerState: r, size: o }) => r.multiline && o === "small",
          style: { paddingTop: 1 },
        },
        { props: ({ ownerState: r }) => r.fullWidth, style: { width: "100%" } },
      ],
    })),
  ),
  Ta = he("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: Ra,
  })(
    et(({ theme: e }) => {
      const r = e.palette.mode === "light",
        o = {
          color: "currentColor",
          ...(e.vars
            ? { opacity: e.vars.opacity.inputPlaceholder }
            : { opacity: r ? 0.42 : 0.5 }),
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        },
        s = { opacity: "0 !important" },
        l = e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: r ? 0.42 : 0.5 };
      return {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        "&::-webkit-input-placeholder": o,
        "&::-moz-placeholder": o,
        "&::-ms-input-placeholder": o,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${Ko.formControl} &`]: {
          "&::-webkit-input-placeholder": s,
          "&::-moz-placeholder": s,
          "&::-ms-input-placeholder": s,
          "&:focus::-webkit-input-placeholder": l,
          "&:focus::-moz-placeholder": l,
          "&:focus::-ms-input-placeholder": l,
        },
        [`&.${Ko.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        variants: [
          {
            props: ({ ownerState: u }) => !u.disableInjectingGlobalStyles,
            style: {
              animationName: "mui-auto-fill-cancel",
              animationDuration: "10ms",
              "&:-webkit-autofill": {
                animationDuration: "5000s",
                animationName: "mui-auto-fill",
              },
            },
          },
          { props: { size: "small" }, style: { paddingTop: 1 } },
          {
            props: ({ ownerState: u }) => u.multiline,
            style: {
              height: "auto",
              resize: "none",
              padding: 0,
              paddingTop: 0,
            },
          },
          { props: { type: "search" }, style: { MozAppearance: "textfield" } },
        ],
      };
    }),
  ),
  mg = Mb({
    "@keyframes mui-auto-fill": { from: { display: "block" } },
    "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
  }),
  ed = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiInputBase" }),
      {
        "aria-describedby": l,
        autoComplete: u,
        autoFocus: f,
        className: p,
        color: m,
        components: y = {},
        componentsProps: k = {},
        defaultValue: C,
        disabled: S,
        disableInjectingGlobalStyles: b,
        endAdornment: w,
        error: h,
        fullWidth: P = !1,
        id: I,
        inputComponent: T = "input",
        inputProps: v = {},
        inputRef: x,
        margin: R,
        maxRows: M,
        minRows: O,
        multiline: N = !1,
        name: z,
        onBlur: g,
        onChange: A,
        onClick: j,
        onFocus: B,
        onKeyDown: q,
        onKeyUp: V,
        placeholder: Y,
        readOnly: te,
        renderSuffix: H,
        rows: K,
        size: Z,
        slotProps: L = {},
        slots: G = {},
        startAdornment: ie,
        type: se = "text",
        value: le,
        ...Se
      } = s,
      ce = v.value != null ? v.value : le,
      { current: we } = _.useRef(ce != null),
      ye = _.useRef(),
      ve = _.useCallback((ze) => {}, []),
      _e = Ct(ye, x, v.ref, ve),
      [Te, Ge] = _.useState(!1),
      Re = Jo(),
      Ve = Xo({
        props: s,
        muiFormControl: Re,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
    (Ve.focused = Re ? Re.focused : Te),
      _.useEffect(() => {
        !Re && S && Te && (Ge(!1), g && g());
      }, [Re, S, Te, g]);
    const Tt = Re && Re.onFilled,
      ht = Re && Re.onEmpty,
      lt = _.useCallback(
        (ze) => {
          sa(ze) ? Tt && Tt() : ht && ht();
        },
        [Tt, ht],
      );
    $r(() => {
      we && lt({ value: ce });
    }, [ce, lt, we]);
    const Dt = (ze) => {
        B && B(ze),
          v.onFocus && v.onFocus(ze),
          Re && Re.onFocus ? Re.onFocus(ze) : Ge(!0);
      },
      at = (ze) => {
        g && g(ze),
          v.onBlur && v.onBlur(ze),
          Re && Re.onBlur ? Re.onBlur(ze) : Ge(!1);
      },
      Qe = (ze, ...lr) => {
        if (!we) {
          const ar = ze.target || ye.current;
          if (ar == null) throw new Error(rr(1));
          lt({ value: ar.value });
        }
        v.onChange && v.onChange(ze, ...lr), A && A(ze, ...lr);
      };
    _.useEffect(() => {
      lt(ye.current);
    }, []);
    const ge = (ze) => {
      ye.current && ze.currentTarget === ze.target && ye.current.focus(),
        j && j(ze);
    };
    let Un = T,
      xt = v;
    N &&
      Un === "input" &&
      (K
        ? (xt = { type: void 0, minRows: K, maxRows: K, ...xt })
        : (xt = { type: void 0, maxRows: M, minRows: O, ...xt }),
      (Un = Mk));
    const Wn = (ze) => {
      lt(
        ze.animationName === "mui-auto-fill-cancel"
          ? ye.current
          : { value: "x" },
      );
    };
    _.useEffect(() => {
      Re && Re.setAdornedStart(!!ie);
    }, [Re, ie]);
    const sr = {
        ...s,
        color: Ve.color || "primary",
        disabled: Ve.disabled,
        endAdornment: w,
        error: Ve.error,
        focused: Ve.focused,
        formControl: Re,
        fullWidth: P,
        hiddenLabel: Ve.hiddenLabel,
        multiline: N,
        size: Ve.size,
        startAdornment: ie,
        type: se,
      },
      Vn = Nk(sr),
      pn = G.root || y.Root || Pa,
      Hn = L.root || k.root || {},
      Kt = G.input || y.Input || Ta;
    return (
      (xt = { ...xt, ...(L.input ?? k.input) }),
      X.jsxs(_.Fragment, {
        children: [
          !b && typeof mg == "function" && (pg || (pg = X.jsx(mg, {}))),
          X.jsxs(pn, {
            ...Hn,
            ref: o,
            onClick: ge,
            ...Se,
            ...(!gf(pn) && { ownerState: { ...sr, ...Hn.ownerState } }),
            className: ke(
              Vn.root,
              Hn.className,
              p,
              te && "MuiInputBase-readOnly",
            ),
            children: [
              ie,
              X.jsx(Zf.Provider, {
                value: null,
                children: X.jsx(Kt, {
                  "aria-invalid": Ve.error,
                  "aria-describedby": l,
                  autoComplete: u,
                  autoFocus: f,
                  defaultValue: C,
                  disabled: Ve.disabled,
                  id: I,
                  onAnimationStart: Wn,
                  name: z,
                  placeholder: Y,
                  readOnly: te,
                  required: Ve.required,
                  rows: K,
                  value: ce,
                  onKeyDown: q,
                  onKeyUp: V,
                  type: se,
                  ...xt,
                  ...(!gf(Kt) && {
                    as: Un,
                    ownerState: { ...sr, ...xt.ownerState },
                  }),
                  ref: _e,
                  className: ke(
                    Vn.input,
                    xt.className,
                    te && "MuiInputBase-readOnly",
                  ),
                  onBlur: at,
                  onChange: Qe,
                  onFocus: Dt,
                }),
              }),
              w,
              H ? H({ ...Ve, startAdornment: ie }) : null,
            ],
          }),
        ],
      })
    );
  });
function Ak(e) {
  return je("MuiInput", e);
}
const Bi = { ...Ko, ...Me("MuiInput", ["root", "underline", "input"]) };
function zk(e) {
  return je("MuiOutlinedInput", e);
}
const Nn = {
  ...Ko,
  ...Me("MuiOutlinedInput", ["root", "notchedOutline", "input"]),
};
function Lk(e) {
  return je("MuiFilledInput", e);
}
const Gr = {
    ...Ko,
    ...Me("MuiFilledInput", [
      "root",
      "underline",
      "input",
      "adornedStart",
      "adornedEnd",
      "sizeSmall",
      "multiline",
      "hiddenLabel",
    ]),
  },
  Fk = Yo(X.jsx("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
  Dk = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  jk = _.forwardRef(function (r, o) {
    const s = Yf(),
      l = {
        enter: s.transitions.duration.enteringScreen,
        exit: s.transitions.duration.leavingScreen,
      },
      {
        addEndListener: u,
        appear: f = !0,
        children: p,
        easing: m,
        in: y,
        onEnter: k,
        onEntered: C,
        onEntering: S,
        onExit: b,
        onExited: w,
        onExiting: h,
        style: P,
        timeout: I = l,
        TransitionComponent: T = Bn,
        ...v
      } = r,
      x = _.useRef(null),
      R = Ct(x, Cs(p), o),
      M = (q) => (V) => {
        if (q) {
          const Y = x.current;
          V === void 0 ? q(Y) : q(Y, V);
        }
      },
      O = M(S),
      N = M((q, V) => {
        qy(q);
        const Y = na({ style: P, timeout: I, easing: m }, { mode: "enter" });
        (q.style.webkitTransition = s.transitions.create("opacity", Y)),
          (q.style.transition = s.transitions.create("opacity", Y)),
          k && k(q, V);
      }),
      z = M(C),
      g = M(h),
      A = M((q) => {
        const V = na({ style: P, timeout: I, easing: m }, { mode: "exit" });
        (q.style.webkitTransition = s.transitions.create("opacity", V)),
          (q.style.transition = s.transitions.create("opacity", V)),
          b && b(q);
      }),
      j = M(w),
      B = (q) => {
        u && u(x.current, q);
      };
    return X.jsx(T, {
      appear: f,
      in: y,
      nodeRef: x,
      onEnter: N,
      onEntered: z,
      onEntering: O,
      onExit: A,
      onExited: j,
      onExiting: g,
      addEndListener: B,
      timeout: I,
      ...v,
      children: (q, { ownerState: V, ...Y }) =>
        _.cloneElement(p, {
          style: {
            opacity: 0,
            visibility: q === "exited" && !y ? "hidden" : void 0,
            ...Dk[q],
            ...P,
            ...p.props.style,
          },
          ref: R,
          ...Y,
        }),
    });
  });
function Bk(e) {
  return je("MuiBackdrop", e);
}
Me("MuiBackdrop", ["root", "invisible"]);
const Uk = (e) => {
    const { classes: r, invisible: o } = e;
    return Be({ root: ["root", o && "invisible"] }, Bk, r);
  },
  Wk = he("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [r.root, o.invisible && r.invisible];
    },
  })({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent",
    variants: [
      { props: { invisible: !0 }, style: { backgroundColor: "transparent" } },
    ],
  }),
  Vk = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiBackdrop" }),
      {
        children: l,
        className: u,
        component: f = "div",
        invisible: p = !1,
        open: m,
        components: y = {},
        componentsProps: k = {},
        slotProps: C = {},
        slots: S = {},
        TransitionComponent: b,
        transitionDuration: w,
        ...h
      } = s,
      P = { ...s, component: f, invisible: p },
      I = Uk(P),
      T = { transition: b, root: y.Root, ...S },
      v = { ...k, ...C },
      x = { slots: T, slotProps: v },
      [R, M] = Ft("root", {
        elementType: Wk,
        externalForwardedProps: x,
        className: ke(I.root, u),
        ownerState: P,
      }),
      [O, N] = Ft("transition", {
        elementType: jk,
        externalForwardedProps: x,
        ownerState: P,
      });
    return X.jsx(O, {
      in: m,
      timeout: w,
      ...h,
      ...N,
      children: X.jsx(R, {
        "aria-hidden": !0,
        ...M,
        classes: I,
        ref: o,
        children: l,
      }),
    });
  }),
  Hk = Me("MuiBox", ["root"]),
  qk = By(),
  io = kx({
    themeId: da,
    defaultTheme: qk,
    defaultClassName: Hk.root,
    generateClassName: Cy.generate,
  });
function Qk(e) {
  return je("MuiCard", e);
}
Me("MuiCard", ["root"]);
const Kk = (e) => {
    const { classes: r } = e;
    return Be({ root: ["root"] }, Qk, r);
  },
  Gk = he(Qy, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, r) => r.root,
  })({ overflow: "hidden" }),
  Yk = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiCard" }),
      { className: l, raised: u = !1, ...f } = s,
      p = { ...s, raised: u },
      m = Kk(p);
    return X.jsx(Gk, {
      className: ke(m.root, l),
      elevation: u ? 8 : void 0,
      ref: o,
      ownerState: p,
      ...f,
    });
  });
function Xk(e) {
  return je("MuiCardContent", e);
}
Me("MuiCardContent", ["root"]);
const Jk = (e) => {
    const { classes: r } = e;
    return Be({ root: ["root"] }, Xk, r);
  },
  Zk = he("div", {
    name: "MuiCardContent",
    slot: "Root",
    overridesResolver: (e, r) => r.root,
  })({ padding: 16, "&:last-child": { paddingBottom: 24 } }),
  eE = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiCardContent" }),
      { className: l, component: u = "div", ...f } = s,
      p = { ...s, component: u },
      m = Jk(p);
    return X.jsx(Zk, {
      as: u,
      className: ke(m.root, l),
      ownerState: p,
      ref: o,
      ...f,
    });
  });
function tE(e) {
  return je("MuiCardMedia", e);
}
Me("MuiCardMedia", ["root", "media", "img"]);
const nE = (e) => {
    const { classes: r, isMediaComponent: o, isImageComponent: s } = e;
    return Be({ root: ["root", o && "media", s && "img"] }, tE, r);
  },
  rE = he("div", {
    name: "MuiCardMedia",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e,
        { isMediaComponent: s, isImageComponent: l } = o;
      return [r.root, s && r.media, l && r.img];
    },
  })({
    display: "block",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    variants: [
      { props: { isMediaComponent: !0 }, style: { width: "100%" } },
      { props: { isImageComponent: !0 }, style: { objectFit: "cover" } },
    ],
  }),
  oE = ["video", "audio", "picture", "iframe", "img"],
  iE = ["picture", "img"],
  Ky = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiCardMedia" }),
      {
        children: l,
        className: u,
        component: f = "div",
        image: p,
        src: m,
        style: y,
        ...k
      } = s,
      C = oE.includes(f),
      S = !C && p ? { backgroundImage: `url("${p}")`, ...y } : y,
      b = {
        ...s,
        component: f,
        isMediaComponent: C,
        isImageComponent: iE.includes(f),
      },
      w = nE(b);
    return X.jsx(rE, {
      className: ke(w.root, u),
      as: f,
      role: !C && p ? "img" : void 0,
      ref: o,
      style: S,
      ownerState: b,
      src: C ? p || m : void 0,
      ...k,
      children: l,
    });
  });
function sE(e) {
  const r = En(e);
  return r.body === e
    ? ir(e).innerWidth > r.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function Zi(e, r) {
  r ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function hg(e) {
  return parseInt(ir(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function lE(e) {
  const o = [
      "TEMPLATE",
      "SCRIPT",
      "STYLE",
      "LINK",
      "MAP",
      "META",
      "NOSCRIPT",
      "PICTURE",
      "COL",
      "COLGROUP",
      "PARAM",
      "SLOT",
      "SOURCE",
      "TRACK",
    ].includes(e.tagName),
    s = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || s;
}
function gg(e, r, o, s, l) {
  const u = [r, o, ...s];
  [].forEach.call(e.children, (f) => {
    const p = !u.includes(f),
      m = !lE(f);
    p && m && Zi(f, l);
  });
}
function Fc(e, r) {
  let o = -1;
  return e.some((s, l) => (r(s) ? ((o = l), !0) : !1)), o;
}
function aE(e, r) {
  const o = [],
    s = e.container;
  if (!r.disableScrollLock) {
    if (sE(s)) {
      const f = Oy(ir(s));
      o.push({ value: s.style.paddingRight, property: "padding-right", el: s }),
        (s.style.paddingRight = `${hg(s) + f}px`);
      const p = En(s).querySelectorAll(".mui-fixed");
      [].forEach.call(p, (m) => {
        o.push({
          value: m.style.paddingRight,
          property: "padding-right",
          el: m,
        }),
          (m.style.paddingRight = `${hg(m) + f}px`);
      });
    }
    let u;
    if (s.parentNode instanceof DocumentFragment) u = En(s).body;
    else {
      const f = s.parentElement,
        p = ir(s);
      u =
        (f == null ? void 0 : f.nodeName) === "HTML" &&
        p.getComputedStyle(f).overflowY === "scroll"
          ? f
          : s;
    }
    o.push(
      { value: u.style.overflow, property: "overflow", el: u },
      { value: u.style.overflowX, property: "overflow-x", el: u },
      { value: u.style.overflowY, property: "overflow-y", el: u },
    ),
      (u.style.overflow = "hidden");
  }
  return () => {
    o.forEach(({ value: u, el: f, property: p }) => {
      u ? f.style.setProperty(p, u) : f.style.removeProperty(p);
    });
  };
}
function uE(e) {
  const r = [];
  return (
    [].forEach.call(e.children, (o) => {
      o.getAttribute("aria-hidden") === "true" && r.push(o);
    }),
    r
  );
}
class cE {
  constructor() {
    (this.modals = []), (this.containers = []);
  }
  add(r, o) {
    let s = this.modals.indexOf(r);
    if (s !== -1) return s;
    (s = this.modals.length),
      this.modals.push(r),
      r.modalRef && Zi(r.modalRef, !1);
    const l = uE(o);
    gg(o, r.mount, r.modalRef, l, !0);
    const u = Fc(this.containers, (f) => f.container === o);
    return u !== -1
      ? (this.containers[u].modals.push(r), s)
      : (this.containers.push({
          modals: [r],
          container: o,
          restore: null,
          hiddenSiblings: l,
        }),
        s);
  }
  mount(r, o) {
    const s = Fc(this.containers, (u) => u.modals.includes(r)),
      l = this.containers[s];
    l.restore || (l.restore = aE(l, o));
  }
  remove(r, o = !0) {
    const s = this.modals.indexOf(r);
    if (s === -1) return s;
    const l = Fc(this.containers, (f) => f.modals.includes(r)),
      u = this.containers[l];
    if (
      (u.modals.splice(u.modals.indexOf(r), 1),
      this.modals.splice(s, 1),
      u.modals.length === 0)
    )
      u.restore && u.restore(),
        r.modalRef && Zi(r.modalRef, o),
        gg(u.container, r.mount, r.modalRef, u.hiddenSiblings, !1),
        this.containers.splice(l, 1);
    else {
      const f = u.modals[u.modals.length - 1];
      f.modalRef && Zi(f.modalRef, !1);
    }
    return s;
  }
  isTopModal(r) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === r;
  }
}
const fE = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function dE(e) {
  const r = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(r)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : r;
}
function pE(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const r = (s) => e.ownerDocument.querySelector(`input[type="radio"]${s}`);
  let o = r(`[name="${e.name}"]:checked`);
  return o || (o = r(`[name="${e.name}"]`)), o !== e;
}
function mE(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    pE(e)
  );
}
function hE(e) {
  const r = [],
    o = [];
  return (
    Array.from(e.querySelectorAll(fE)).forEach((s, l) => {
      const u = dE(s);
      u === -1 ||
        !mE(s) ||
        (u === 0
          ? r.push(s)
          : o.push({ documentOrder: l, tabIndex: u, node: s }));
    }),
    o
      .sort((s, l) =>
        s.tabIndex === l.tabIndex
          ? s.documentOrder - l.documentOrder
          : s.tabIndex - l.tabIndex,
      )
      .map((s) => s.node)
      .concat(r)
  );
}
function gE() {
  return !0;
}
function yE(e) {
  const {
      children: r,
      disableAutoFocus: o = !1,
      disableEnforceFocus: s = !1,
      disableRestoreFocus: l = !1,
      getTabbable: u = hE,
      isEnabled: f = gE,
      open: p,
    } = e,
    m = _.useRef(!1),
    y = _.useRef(null),
    k = _.useRef(null),
    C = _.useRef(null),
    S = _.useRef(null),
    b = _.useRef(!1),
    w = _.useRef(null),
    h = Ct(Cs(r), w),
    P = _.useRef(null);
  _.useEffect(() => {
    !p || !w.current || (b.current = !o);
  }, [o, p]),
    _.useEffect(() => {
      if (!p || !w.current) return;
      const v = En(w.current);
      return (
        w.current.contains(v.activeElement) ||
          (w.current.hasAttribute("tabIndex") ||
            w.current.setAttribute("tabIndex", "-1"),
          b.current && w.current.focus()),
        () => {
          l ||
            (C.current &&
              C.current.focus &&
              ((m.current = !0), C.current.focus()),
            (C.current = null));
        }
      );
    }, [p]),
    _.useEffect(() => {
      if (!p || !w.current) return;
      const v = En(w.current),
        x = (O) => {
          (P.current = O),
            !(s || !f() || O.key !== "Tab") &&
              v.activeElement === w.current &&
              O.shiftKey &&
              ((m.current = !0), k.current && k.current.focus());
        },
        R = () => {
          var z, g;
          const O = w.current;
          if (O === null) return;
          if (!v.hasFocus() || !f() || m.current) {
            m.current = !1;
            return;
          }
          if (
            O.contains(v.activeElement) ||
            (s &&
              v.activeElement !== y.current &&
              v.activeElement !== k.current)
          )
            return;
          if (v.activeElement !== S.current) S.current = null;
          else if (S.current !== null) return;
          if (!b.current) return;
          let N = [];
          if (
            ((v.activeElement === y.current || v.activeElement === k.current) &&
              (N = u(w.current)),
            N.length > 0)
          ) {
            const A = !!(
                (z = P.current) != null &&
                z.shiftKey &&
                ((g = P.current) == null ? void 0 : g.key) === "Tab"
              ),
              j = N[0],
              B = N[N.length - 1];
            typeof j != "string" &&
              typeof B != "string" &&
              (A ? B.focus() : j.focus());
          } else O.focus();
        };
      v.addEventListener("focusin", R), v.addEventListener("keydown", x, !0);
      const M = setInterval(() => {
        v.activeElement && v.activeElement.tagName === "BODY" && R();
      }, 50);
      return () => {
        clearInterval(M),
          v.removeEventListener("focusin", R),
          v.removeEventListener("keydown", x, !0);
      };
    }, [o, s, l, f, p, u]);
  const I = (v) => {
      C.current === null && (C.current = v.relatedTarget),
        (b.current = !0),
        (S.current = v.target);
      const x = r.props.onFocus;
      x && x(v);
    },
    T = (v) => {
      C.current === null && (C.current = v.relatedTarget), (b.current = !0);
    };
  return X.jsxs(_.Fragment, {
    children: [
      X.jsx("div", {
        tabIndex: p ? 0 : -1,
        onFocus: T,
        ref: y,
        "data-testid": "sentinelStart",
      }),
      _.cloneElement(r, { ref: h, onFocus: I }),
      X.jsx("div", {
        tabIndex: p ? 0 : -1,
        onFocus: T,
        ref: k,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function vE(e) {
  return typeof e == "function" ? e() : e;
}
function SE(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const yg = () => {},
  jl = new cE();
function wE(e) {
  const {
      container: r,
      disableEscapeKeyDown: o = !1,
      disableScrollLock: s = !1,
      closeAfterTransition: l = !1,
      onTransitionEnter: u,
      onTransitionExited: f,
      children: p,
      onClose: m,
      open: y,
      rootRef: k,
    } = e,
    C = _.useRef({}),
    S = _.useRef(null),
    b = _.useRef(null),
    w = Ct(b, k),
    [h, P] = _.useState(!y),
    I = SE(p);
  let T = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (T = !1);
  const v = () => En(S.current),
    x = () => (
      (C.current.modalRef = b.current), (C.current.mount = S.current), C.current
    ),
    R = () => {
      jl.mount(x(), { disableScrollLock: s }),
        b.current && (b.current.scrollTop = 0);
    },
    M = Ho(() => {
      const V = vE(r) || v().body;
      jl.add(x(), V), b.current && R();
    }),
    O = () => jl.isTopModal(x()),
    N = Ho((V) => {
      (S.current = V), V && (y && O() ? R() : b.current && Zi(b.current, T));
    }),
    z = _.useCallback(() => {
      jl.remove(x(), T);
    }, [T]);
  _.useEffect(
    () => () => {
      z();
    },
    [z],
  ),
    _.useEffect(() => {
      y ? M() : (!I || !l) && z();
    }, [y, z, I, l, M]);
  const g = (V) => (Y) => {
      var te;
      (te = V.onKeyDown) == null || te.call(V, Y),
        !(Y.key !== "Escape" || Y.which === 229 || !O()) &&
          (o || (Y.stopPropagation(), m && m(Y, "escapeKeyDown")));
    },
    A = (V) => (Y) => {
      var te;
      (te = V.onClick) == null || te.call(V, Y),
        Y.target === Y.currentTarget && m && m(Y, "backdropClick");
    };
  return {
    getRootProps: (V = {}) => {
      const Y = _y(e);
      delete Y.onTransitionEnter, delete Y.onTransitionExited;
      const te = { ...Y, ...V };
      return { role: "presentation", ...te, onKeyDown: g(te), ref: w };
    },
    getBackdropProps: (V = {}) => {
      const Y = V;
      return { "aria-hidden": !0, ...Y, onClick: A(Y), open: y };
    },
    getTransitionProps: () => {
      const V = () => {
          P(!1), u && u();
        },
        Y = () => {
          P(!0), f && f(), l && z();
        };
      return {
        onEnter: Kh(V, (p == null ? void 0 : p.props.onEnter) ?? yg),
        onExited: Kh(Y, (p == null ? void 0 : p.props.onExited) ?? yg),
      };
    },
    rootRef: w,
    portalRef: N,
    isTopModal: O,
    exited: h,
    hasTransition: I,
  };
}
function CE(e) {
  return je("MuiModal", e);
}
Me("MuiModal", ["root", "hidden", "backdrop"]);
const xE = (e) => {
    const { open: r, exited: o, classes: s } = e;
    return Be(
      { root: ["root", !r && o && "hidden"], backdrop: ["backdrop"] },
      CE,
      s,
    );
  },
  bE = he("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [r.root, !o.open && o.exited && r.hidden];
    },
  })(
    et(({ theme: e }) => ({
      position: "fixed",
      zIndex: (e.vars || e).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [
        {
          props: ({ ownerState: r }) => !r.open && r.exited,
          style: { visibility: "hidden" },
        },
      ],
    })),
  ),
  kE = he(Vk, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, r) => r.backdrop,
  })({ zIndex: -1 }),
  Gy = _.forwardRef(function (r, o) {
    const s = We({ name: "MuiModal", props: r }),
      {
        BackdropComponent: l = kE,
        BackdropProps: u,
        classes: f,
        className: p,
        closeAfterTransition: m = !1,
        children: y,
        container: k,
        component: C,
        components: S = {},
        componentsProps: b = {},
        disableAutoFocus: w = !1,
        disableEnforceFocus: h = !1,
        disableEscapeKeyDown: P = !1,
        disablePortal: I = !1,
        disableRestoreFocus: T = !1,
        disableScrollLock: v = !1,
        hideBackdrop: x = !1,
        keepMounted: R = !1,
        onBackdropClick: M,
        onClose: O,
        onTransitionEnter: N,
        onTransitionExited: z,
        open: g,
        slotProps: A = {},
        slots: j = {},
        theme: B,
        ...q
      } = s,
      V = {
        ...s,
        closeAfterTransition: m,
        disableAutoFocus: w,
        disableEnforceFocus: h,
        disableEscapeKeyDown: P,
        disablePortal: I,
        disableRestoreFocus: T,
        disableScrollLock: v,
        hideBackdrop: x,
        keepMounted: R,
      },
      {
        getRootProps: Y,
        getBackdropProps: te,
        getTransitionProps: H,
        portalRef: K,
        isTopModal: Z,
        exited: L,
        hasTransition: G,
      } = wE({ ...V, rootRef: o }),
      ie = { ...V, exited: L },
      se = xE(ie),
      le = {};
    if ((y.props.tabIndex === void 0 && (le.tabIndex = "-1"), G)) {
      const { onEnter: Te, onExited: Ge } = H();
      (le.onEnter = Te), (le.onExited = Ge);
    }
    const Se = {
        ...q,
        slots: { root: S.Root, backdrop: S.Backdrop, ...j },
        slotProps: { ...b, ...A },
      },
      [ce, we] = Ft("root", {
        elementType: bE,
        externalForwardedProps: Se,
        getSlotProps: Y,
        additionalProps: { ref: o, as: C },
        ownerState: ie,
        className: ke(
          p,
          se == null ? void 0 : se.root,
          !ie.open && ie.exited && (se == null ? void 0 : se.hidden),
        ),
      }),
      [ye, ve] = Ft("backdrop", {
        elementType: l,
        externalForwardedProps: Se,
        additionalProps: u,
        getSlotProps: (Te) =>
          te({
            ...Te,
            onClick: (Ge) => {
              M && M(Ge), Te != null && Te.onClick && Te.onClick(Ge);
            },
          }),
        className: ke(
          u == null ? void 0 : u.className,
          se == null ? void 0 : se.backdrop,
        ),
        ownerState: ie,
      }),
      _e = Ct(u == null ? void 0 : u.ref, ve.ref);
    return !R && !g && (!G || L)
      ? null
      : X.jsx(xk, {
          ref: K,
          container: k,
          disablePortal: I,
          children: X.jsxs(ce, {
            ...we,
            children: [
              !x && l ? X.jsx(ye, { ...ve, ref: _e }) : null,
              X.jsx(yE, {
                disableEnforceFocus: h,
                disableAutoFocus: w,
                disableRestoreFocus: T,
                isEnabled: Z,
                open: g,
                children: _.cloneElement(y, le),
              }),
            ],
          }),
        });
  }),
  vg = Me("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical",
  ]),
  EE = (e) => {
    const {
        classes: r,
        disableUnderline: o,
        startAdornment: s,
        endAdornment: l,
        size: u,
        hiddenLabel: f,
        multiline: p,
      } = e,
      m = {
        root: [
          "root",
          !o && "underline",
          s && "adornedStart",
          l && "adornedEnd",
          u === "small" && `size${pe(u)}`,
          f && "hiddenLabel",
          p && "multiline",
        ],
        input: ["input"],
      },
      y = Be(m, Lk, r);
    return { ...r, ...y };
  },
  RE = he(Pa, {
    shouldForwardProp: (e) => Rn(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [...Ea(e, r), !o.disableUnderline && r.underline];
    },
  })(
    et(({ theme: e }) => {
      const r = e.palette.mode === "light",
        o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
        s = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
        l = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
        u = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
      return {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : l,
          "@media (hover: none)": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s,
          },
        },
        [`&.${Gr.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s,
        },
        [`&.${Gr.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : u,
        },
        variants: [
          {
            props: ({ ownerState: f }) => !f.disableUnderline,
            style: {
              "&::after": {
                left: 0,
                bottom: 0,
                content: '""',
                position: "absolute",
                right: 0,
                transform: "scaleX(0)",
                transition: e.transitions.create("transform", {
                  duration: e.transitions.duration.shorter,
                  easing: e.transitions.easing.easeOut,
                }),
                pointerEvents: "none",
              },
              [`&.${Gr.focused}:after`]: {
                transform: "scaleX(1) translateX(0)",
              },
              [`&.${Gr.error}`]: {
                "&::before, &::after": {
                  borderBottomColor: (e.vars || e).palette.error.main,
                },
              },
              "&::before": {
                borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : o}`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: "absolute",
                right: 0,
                transition: e.transitions.create("border-bottom-color", {
                  duration: e.transitions.duration.shorter,
                }),
                pointerEvents: "none",
              },
              [`&:hover:not(.${Gr.disabled}, .${Gr.error}):before`]: {
                borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
              },
              [`&.${Gr.disabled}:before`]: { borderBottomStyle: "dotted" },
            },
          },
          ...Object.entries(e.palette)
            .filter(fn())
            .map(([f]) => {
              var p;
              return {
                props: { disableUnderline: !1, color: f },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${(p = (e.vars || e).palette[f]) == null ? void 0 : p.main}`,
                  },
                },
              };
            }),
          {
            props: ({ ownerState: f }) => f.startAdornment,
            style: { paddingLeft: 12 },
          },
          {
            props: ({ ownerState: f }) => f.endAdornment,
            style: { paddingRight: 12 },
          },
          {
            props: ({ ownerState: f }) => f.multiline,
            style: { padding: "25px 12px 8px" },
          },
          {
            props: ({ ownerState: f, size: p }) => f.multiline && p === "small",
            style: { paddingTop: 21, paddingBottom: 4 },
          },
          {
            props: ({ ownerState: f }) => f.multiline && f.hiddenLabel,
            style: { paddingTop: 16, paddingBottom: 17 },
          },
          {
            props: ({ ownerState: f }) =>
              f.multiline && f.hiddenLabel && f.size === "small",
            style: { paddingTop: 8, paddingBottom: 9 },
          },
        ],
      };
    }),
  ),
  PE = he(Ta, { name: "MuiFilledInput", slot: "Input", overridesResolver: Ra })(
    et(({ theme: e }) => ({
      paddingTop: 25,
      paddingRight: 12,
      paddingBottom: 8,
      paddingLeft: 12,
      ...(!e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
      }),
      ...(e.vars && {
        "&:-webkit-autofill": {
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      }),
      variants: [
        {
          props: { size: "small" },
          style: { paddingTop: 21, paddingBottom: 4 },
        },
        {
          props: ({ ownerState: r }) => r.hiddenLabel,
          style: { paddingTop: 16, paddingBottom: 17 },
        },
        {
          props: ({ ownerState: r }) => r.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: r }) => r.endAdornment,
          style: { paddingRight: 0 },
        },
        {
          props: ({ ownerState: r }) => r.hiddenLabel && r.size === "small",
          style: { paddingTop: 8, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: r }) => r.multiline,
          style: {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      ],
    })),
  ),
  td = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiFilledInput" }),
      {
        disableUnderline: l = !1,
        components: u = {},
        componentsProps: f,
        fullWidth: p = !1,
        hiddenLabel: m,
        inputComponent: y = "input",
        multiline: k = !1,
        slotProps: C,
        slots: S = {},
        type: b = "text",
        ...w
      } = s,
      h = {
        ...s,
        disableUnderline: l,
        fullWidth: p,
        inputComponent: y,
        multiline: k,
        type: b,
      },
      P = EE(s),
      I = { root: { ownerState: h }, input: { ownerState: h } },
      T = (C ?? f) ? Nt(I, C ?? f) : I,
      v = S.root ?? u.Root ?? RE,
      x = S.input ?? u.Input ?? PE;
    return X.jsx(ed, {
      slots: { root: v, input: x },
      slotProps: T,
      fullWidth: p,
      inputComponent: y,
      multiline: k,
      ref: o,
      type: b,
      ...w,
      classes: P,
    });
  });
td.muiName = "Input";
function TE(e) {
  return je("MuiFormControl", e);
}
Me("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const IE = (e) => {
    const { classes: r, margin: o, fullWidth: s } = e,
      l = {
        root: ["root", o !== "none" && `margin${pe(o)}`, s && "fullWidth"],
      };
    return Be(l, TE, r);
  },
  OE = he("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [r.root, r[`margin${pe(o.margin)}`], o.fullWidth && r.fullWidth];
    },
  })({
    display: "inline-flex",
    flexDirection: "column",
    position: "relative",
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: "top",
    variants: [
      {
        props: { margin: "normal" },
        style: { marginTop: 16, marginBottom: 8 },
      },
      { props: { margin: "dense" }, style: { marginTop: 8, marginBottom: 4 } },
      { props: { fullWidth: !0 }, style: { width: "100%" } },
    ],
  }),
  ME = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiFormControl" }),
      {
        children: l,
        className: u,
        color: f = "primary",
        component: p = "div",
        disabled: m = !1,
        error: y = !1,
        focused: k,
        fullWidth: C = !1,
        hiddenLabel: S = !1,
        margin: b = "none",
        required: w = !1,
        size: h = "medium",
        variant: P = "outlined",
        ...I
      } = s,
      T = {
        ...s,
        color: f,
        component: p,
        disabled: m,
        error: y,
        fullWidth: C,
        hiddenLabel: S,
        margin: b,
        required: w,
        size: h,
        variant: P,
      },
      v = IE(T),
      [x, R] = _.useState(() => {
        let V = !1;
        return (
          l &&
            _.Children.forEach(l, (Y) => {
              if (!Ac(Y, ["Input", "Select"])) return;
              const te = Ac(Y, ["Select"]) ? Y.props.input : Y;
              te && _k(te.props) && (V = !0);
            }),
          V
        );
      }),
      [M, O] = _.useState(() => {
        let V = !1;
        return (
          l &&
            _.Children.forEach(l, (Y) => {
              Ac(Y, ["Input", "Select"]) &&
                (sa(Y.props, !0) || sa(Y.props.inputProps, !0)) &&
                (V = !0);
            }),
          V
        );
      }),
      [N, z] = _.useState(!1);
    m && N && z(!1);
    const g = k !== void 0 && !m ? k : N;
    let A;
    _.useRef(!1);
    const j = _.useCallback(() => {
        O(!0);
      }, []),
      B = _.useCallback(() => {
        O(!1);
      }, []),
      q = _.useMemo(
        () => ({
          adornedStart: x,
          setAdornedStart: R,
          color: f,
          disabled: m,
          error: y,
          filled: M,
          focused: g,
          fullWidth: C,
          hiddenLabel: S,
          size: h,
          onBlur: () => {
            z(!1);
          },
          onFocus: () => {
            z(!0);
          },
          onEmpty: B,
          onFilled: j,
          registerEffect: A,
          required: w,
          variant: P,
        }),
        [x, f, m, y, M, g, C, S, A, B, j, w, h, P],
      );
    return X.jsx(Zf.Provider, {
      value: q,
      children: X.jsx(OE, {
        as: p,
        ownerState: T,
        className: ke(v.root, u),
        ref: o,
        ...I,
        children: l,
      }),
    });
  });
function _E(e) {
  return je("MuiFormHelperText", e);
}
const Sg = Me("MuiFormHelperText", [
  "root",
  "error",
  "disabled",
  "sizeSmall",
  "sizeMedium",
  "contained",
  "focused",
  "filled",
  "required",
]);
var wg;
const $E = (e) => {
    const {
        classes: r,
        contained: o,
        size: s,
        disabled: l,
        error: u,
        filled: f,
        focused: p,
        required: m,
      } = e,
      y = {
        root: [
          "root",
          l && "disabled",
          u && "error",
          s && `size${pe(s)}`,
          o && "contained",
          p && "focused",
          f && "filled",
          m && "required",
        ],
      };
    return Be(y, _E, r);
  },
  NE = he("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.root,
        o.size && r[`size${pe(o.size)}`],
        o.contained && r.contained,
        o.filled && r.filled,
      ];
    },
  })(
    et(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.caption,
      textAlign: "left",
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${Sg.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${Sg.error}`]: { color: (e.vars || e).palette.error.main },
      variants: [
        { props: { size: "small" }, style: { marginTop: 4 } },
        {
          props: ({ ownerState: r }) => r.contained,
          style: { marginLeft: 14, marginRight: 14 },
        },
      ],
    })),
  ),
  AE = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiFormHelperText" }),
      {
        children: l,
        className: u,
        component: f = "p",
        disabled: p,
        error: m,
        filled: y,
        focused: k,
        margin: C,
        required: S,
        variant: b,
        ...w
      } = s,
      h = Jo(),
      P = Xo({
        props: s,
        muiFormControl: h,
        states: [
          "variant",
          "size",
          "disabled",
          "error",
          "filled",
          "focused",
          "required",
        ],
      }),
      I = {
        ...s,
        component: f,
        contained: P.variant === "filled" || P.variant === "outlined",
        variant: P.variant,
        size: P.size,
        disabled: P.disabled,
        error: P.error,
        filled: P.filled,
        focused: P.focused,
        required: P.required,
      };
    delete I.ownerState;
    const T = $E(I);
    return X.jsx(NE, {
      as: f,
      className: ke(T.root, u),
      ref: o,
      ...w,
      ownerState: I,
      children:
        l === " "
          ? wg ||
            (wg = X.jsx("span", {
              className: "notranslate",
              "aria-hidden": !0,
              children: "​",
            }))
          : l,
    });
  });
function zE(e) {
  return je("MuiFormLabel", e);
}
const es = Me("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  LE = (e) => {
    const {
        classes: r,
        color: o,
        focused: s,
        disabled: l,
        error: u,
        filled: f,
        required: p,
      } = e,
      m = {
        root: [
          "root",
          `color${pe(o)}`,
          l && "disabled",
          u && "error",
          f && "filled",
          s && "focused",
          p && "required",
        ],
        asterisk: ["asterisk", u && "error"],
      };
    return Be(m, zE, r);
  },
  FE = he("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.root,
        o.color === "secondary" && r.colorSecondary,
        o.filled && r.filled,
      ];
    },
  })(
    et(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.body1,
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      variants: [
        ...Object.entries(e.palette)
          .filter(fn())
          .map(([r]) => ({
            props: { color: r },
            style: {
              [`&.${es.focused}`]: { color: (e.vars || e).palette[r].main },
            },
          })),
        {
          props: {},
          style: {
            [`&.${es.disabled}`]: {
              color: (e.vars || e).palette.text.disabled,
            },
            [`&.${es.error}`]: { color: (e.vars || e).palette.error.main },
          },
        },
      ],
    })),
  ),
  DE = he("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, r) => r.asterisk,
  })(
    et(({ theme: e }) => ({
      [`&.${es.error}`]: { color: (e.vars || e).palette.error.main },
    })),
  ),
  jE = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiFormLabel" }),
      {
        children: l,
        className: u,
        color: f,
        component: p = "label",
        disabled: m,
        error: y,
        filled: k,
        focused: C,
        required: S,
        ...b
      } = s,
      w = Jo(),
      h = Xo({
        props: s,
        muiFormControl: w,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      P = {
        ...s,
        color: h.color || "primary",
        component: p,
        disabled: h.disabled,
        error: h.error,
        filled: h.filled,
        focused: h.focused,
        required: h.required,
      },
      I = LE(P);
    return X.jsxs(FE, {
      as: p,
      ownerState: P,
      className: ke(I.root, u),
      ref: o,
      ...b,
      children: [
        l,
        h.required &&
          X.jsxs(DE, {
            ownerState: P,
            "aria-hidden": !0,
            className: I.asterisk,
            children: [" ", "*"],
          }),
      ],
    });
  });
function yf(e) {
  return `scale(${e}, ${e ** 2})`;
}
const BE = {
    entering: { opacity: 1, transform: yf(1) },
    entered: { opacity: 1, transform: "none" },
  },
  Dc =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  vf = _.forwardRef(function (r, o) {
    const {
        addEndListener: s,
        appear: l = !0,
        children: u,
        easing: f,
        in: p,
        onEnter: m,
        onEntered: y,
        onEntering: k,
        onExit: C,
        onExited: S,
        onExiting: b,
        style: w,
        timeout: h = "auto",
        TransitionComponent: P = Bn,
        ...I
      } = r,
      T = Iy(),
      v = _.useRef(),
      x = Yf(),
      R = _.useRef(null),
      M = Ct(R, Cs(u), o),
      O = (V) => (Y) => {
        if (V) {
          const te = R.current;
          Y === void 0 ? V(te) : V(te, Y);
        }
      },
      N = O(k),
      z = O((V, Y) => {
        qy(V);
        const {
          duration: te,
          delay: H,
          easing: K,
        } = na({ style: w, timeout: h, easing: f }, { mode: "enter" });
        let Z;
        h === "auto"
          ? ((Z = x.transitions.getAutoHeightDuration(V.clientHeight)),
            (v.current = Z))
          : (Z = te),
          (V.style.transition = [
            x.transitions.create("opacity", { duration: Z, delay: H }),
            x.transitions.create("transform", {
              duration: Dc ? Z : Z * 0.666,
              delay: H,
              easing: K,
            }),
          ].join(",")),
          m && m(V, Y);
      }),
      g = O(y),
      A = O(b),
      j = O((V) => {
        const {
          duration: Y,
          delay: te,
          easing: H,
        } = na({ style: w, timeout: h, easing: f }, { mode: "exit" });
        let K;
        h === "auto"
          ? ((K = x.transitions.getAutoHeightDuration(V.clientHeight)),
            (v.current = K))
          : (K = Y),
          (V.style.transition = [
            x.transitions.create("opacity", { duration: K, delay: te }),
            x.transitions.create("transform", {
              duration: Dc ? K : K * 0.666,
              delay: Dc ? te : te || K * 0.333,
              easing: H,
            }),
          ].join(",")),
          (V.style.opacity = 0),
          (V.style.transform = yf(0.75)),
          C && C(V);
      }),
      B = O(S),
      q = (V) => {
        h === "auto" && T.start(v.current || 0, V), s && s(R.current, V);
      };
    return X.jsx(P, {
      appear: l,
      in: p,
      nodeRef: R,
      onEnter: z,
      onEntered: g,
      onEntering: N,
      onExit: j,
      onExited: B,
      onExiting: A,
      addEndListener: q,
      timeout: h === "auto" ? null : h,
      ...I,
      children: (V, { ownerState: Y, ...te }) =>
        _.cloneElement(u, {
          style: {
            opacity: 0,
            transform: yf(0.75),
            visibility: V === "exited" && !p ? "hidden" : void 0,
            ...BE[V],
            ...w,
            ...u.props.style,
          },
          ref: M,
          ...te,
        }),
    });
  });
vf && (vf.muiSupportAuto = !0);
const UE = (e) => {
    const { classes: r, disableUnderline: o } = e,
      l = Be({ root: ["root", !o && "underline"], input: ["input"] }, Ak, r);
    return { ...r, ...l };
  },
  WE = he(Pa, {
    shouldForwardProp: (e) => Rn(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [...Ea(e, r), !o.disableUnderline && r.underline];
    },
  })(
    et(({ theme: e }) => {
      let o =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.42)"
          : "rgba(255, 255, 255, 0.7)";
      return (
        e.vars &&
          (o = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
        {
          position: "relative",
          variants: [
            {
              props: ({ ownerState: s }) => s.formControl,
              style: { "label + &": { marginTop: 16 } },
            },
            {
              props: ({ ownerState: s }) => !s.disableUnderline,
              style: {
                "&::after": {
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: "absolute",
                  right: 0,
                  transform: "scaleX(0)",
                  transition: e.transitions.create("transform", {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut,
                  }),
                  pointerEvents: "none",
                },
                [`&.${Bi.focused}:after`]: {
                  transform: "scaleX(1) translateX(0)",
                },
                [`&.${Bi.error}`]: {
                  "&::before, &::after": {
                    borderBottomColor: (e.vars || e).palette.error.main,
                  },
                },
                "&::before": {
                  borderBottom: `1px solid ${o}`,
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: "absolute",
                  right: 0,
                  transition: e.transitions.create("border-bottom-color", {
                    duration: e.transitions.duration.shorter,
                  }),
                  pointerEvents: "none",
                },
                [`&:hover:not(.${Bi.disabled}, .${Bi.error}):before`]: {
                  borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
                  "@media (hover: none)": { borderBottom: `1px solid ${o}` },
                },
                [`&.${Bi.disabled}:before`]: { borderBottomStyle: "dotted" },
              },
            },
            ...Object.entries(e.palette)
              .filter(fn())
              .map(([s]) => ({
                props: { color: s, disableUnderline: !1 },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${(e.vars || e).palette[s].main}`,
                  },
                },
              })),
          ],
        }
      );
    }),
  ),
  VE = he(Ta, { name: "MuiInput", slot: "Input", overridesResolver: Ra })({}),
  nd = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiInput" }),
      {
        disableUnderline: l = !1,
        components: u = {},
        componentsProps: f,
        fullWidth: p = !1,
        inputComponent: m = "input",
        multiline: y = !1,
        slotProps: k,
        slots: C = {},
        type: S = "text",
        ...b
      } = s,
      w = UE(s),
      P = { root: { ownerState: { disableUnderline: l } } },
      I = (k ?? f) ? Nt(k ?? f, P) : P,
      T = C.root ?? u.Root ?? WE,
      v = C.input ?? u.Input ?? VE;
    return X.jsx(ed, {
      slots: { root: T, input: v },
      slotProps: I,
      fullWidth: p,
      inputComponent: m,
      multiline: y,
      ref: o,
      type: S,
      ...b,
      classes: w,
    });
  });
nd.muiName = "Input";
function HE(e) {
  return je("MuiInputLabel", e);
}
Me("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
]);
const qE = (e) => {
    const {
        classes: r,
        formControl: o,
        size: s,
        shrink: l,
        disableAnimation: u,
        variant: f,
        required: p,
      } = e,
      m = {
        root: [
          "root",
          o && "formControl",
          !u && "animated",
          l && "shrink",
          s && s !== "normal" && `size${pe(s)}`,
          f,
        ],
        asterisk: [p && "asterisk"],
      },
      y = Be(m, HE, r);
    return { ...r, ...y };
  },
  QE = he(jE, {
    shouldForwardProp: (e) => Rn(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        { [`& .${es.asterisk}`]: r.asterisk },
        r.root,
        o.formControl && r.formControl,
        o.size === "small" && r.sizeSmall,
        o.shrink && r.shrink,
        !o.disableAnimation && r.animated,
        o.focused && r.focused,
        r[o.variant],
      ];
    },
  })(
    et(({ theme: e }) => ({
      display: "block",
      transformOrigin: "top left",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "100%",
      variants: [
        {
          props: ({ ownerState: r }) => r.formControl,
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            transform: "translate(0, 20px) scale(1)",
          },
        },
        {
          props: { size: "small" },
          style: { transform: "translate(0, 17px) scale(1)" },
        },
        {
          props: ({ ownerState: r }) => r.shrink,
          style: {
            transform: "translate(0, -1.5px) scale(0.75)",
            transformOrigin: "top left",
            maxWidth: "133%",
          },
        },
        {
          props: ({ ownerState: r }) => !r.disableAnimation,
          style: {
            transition: e.transitions.create(
              ["color", "transform", "max-width"],
              {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut,
              },
            ),
          },
        },
        {
          props: { variant: "filled" },
          style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
        },
        {
          props: { variant: "filled", size: "small" },
          style: { transform: "translate(12px, 13px) scale(1)" },
        },
        {
          props: ({ variant: r, ownerState: o }) => r === "filled" && o.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            transform: "translate(12px, 7px) scale(0.75)",
            maxWidth: "calc(133% - 24px)",
          },
        },
        {
          props: ({ variant: r, ownerState: o, size: s }) =>
            r === "filled" && o.shrink && s === "small",
          style: { transform: "translate(12px, 4px) scale(0.75)" },
        },
        {
          props: { variant: "outlined" },
          style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
        },
        {
          props: { variant: "outlined", size: "small" },
          style: { transform: "translate(14px, 9px) scale(1)" },
        },
        {
          props: ({ variant: r, ownerState: o }) =>
            r === "outlined" && o.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          },
        },
      ],
    })),
  ),
  KE = _.forwardRef(function (r, o) {
    const s = We({ name: "MuiInputLabel", props: r }),
      {
        disableAnimation: l = !1,
        margin: u,
        shrink: f,
        variant: p,
        className: m,
        ...y
      } = s,
      k = Jo();
    let C = f;
    typeof C > "u" && k && (C = k.filled || k.focused || k.adornedStart);
    const S = Xo({
        props: s,
        muiFormControl: k,
        states: ["size", "variant", "required", "focused"],
      }),
      b = {
        ...s,
        disableAnimation: l,
        formControl: k,
        shrink: C,
        size: S.size,
        variant: S.variant,
        required: S.required,
        focused: S.focused,
      },
      w = qE(b);
    return X.jsx(QE, {
      "data-shrink": C,
      ref: o,
      className: ke(w.root, m),
      ...y,
      ownerState: b,
      classes: w,
    });
  }),
  Sf = _.createContext({});
function GE(e) {
  return je("MuiList", e);
}
Me("MuiList", ["root", "padding", "dense", "subheader"]);
const YE = (e) => {
    const { classes: r, disablePadding: o, dense: s, subheader: l } = e;
    return Be(
      { root: ["root", !o && "padding", s && "dense", l && "subheader"] },
      GE,
      r,
    );
  },
  XE = he("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.root,
        !o.disablePadding && r.padding,
        o.dense && r.dense,
        o.subheader && r.subheader,
      ];
    },
  })({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    variants: [
      {
        props: ({ ownerState: e }) => !e.disablePadding,
        style: { paddingTop: 8, paddingBottom: 8 },
      },
      { props: ({ ownerState: e }) => e.subheader, style: { paddingTop: 0 } },
    ],
  }),
  JE = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiList" }),
      {
        children: l,
        className: u,
        component: f = "ul",
        dense: p = !1,
        disablePadding: m = !1,
        subheader: y,
        ...k
      } = s,
      C = _.useMemo(() => ({ dense: p }), [p]),
      S = { ...s, component: f, dense: p, disablePadding: m },
      b = YE(S);
    return X.jsx(Sf.Provider, {
      value: C,
      children: X.jsxs(XE, {
        as: f,
        className: ke(b.root, u),
        ref: o,
        ownerState: S,
        ...k,
        children: [y, l],
      }),
    });
  }),
  Cg = Me("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
  xg = Me("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary",
  ]);
function jc(e, r, o) {
  return e === r
    ? e.firstChild
    : r && r.nextElementSibling
      ? r.nextElementSibling
      : o
        ? null
        : e.firstChild;
}
function bg(e, r, o) {
  return e === r
    ? o
      ? e.firstChild
      : e.lastChild
    : r && r.previousElementSibling
      ? r.previousElementSibling
      : o
        ? null
        : e.lastChild;
}
function Yy(e, r) {
  if (r === void 0) return !0;
  let o = e.innerText;
  return (
    o === void 0 && (o = e.textContent),
    (o = o.trim().toLowerCase()),
    o.length === 0
      ? !1
      : r.repeating
        ? o[0] === r.keys[0]
        : o.startsWith(r.keys.join(""))
  );
}
function Ui(e, r, o, s, l, u) {
  let f = !1,
    p = l(e, r, r ? o : !1);
  for (; p; ) {
    if (p === e.firstChild) {
      if (f) return !1;
      f = !0;
    }
    const m = s ? !1 : p.disabled || p.getAttribute("aria-disabled") === "true";
    if (!p.hasAttribute("tabindex") || !Yy(p, u) || m) p = l(e, p, o);
    else return p.focus(), !0;
  }
  return !1;
}
const ZE = _.forwardRef(function (r, o) {
  const {
      actions: s,
      autoFocus: l = !1,
      autoFocusItem: u = !1,
      children: f,
      className: p,
      disabledItemsFocusable: m = !1,
      disableListWrap: y = !1,
      onKeyDown: k,
      variant: C = "selectedMenu",
      ...S
    } = r,
    b = _.useRef(null),
    w = _.useRef({
      keys: [],
      repeating: !0,
      previousKeyMatched: !0,
      lastTime: null,
    });
  $r(() => {
    l && b.current.focus();
  }, [l]),
    _.useImperativeHandle(
      s,
      () => ({
        adjustStyleForScrollbar: (v, { direction: x }) => {
          const R = !b.current.style.width;
          if (v.clientHeight < b.current.clientHeight && R) {
            const M = `${Oy(ir(v))}px`;
            (b.current.style[x === "rtl" ? "paddingLeft" : "paddingRight"] = M),
              (b.current.style.width = `calc(100% + ${M})`);
          }
          return b.current;
        },
      }),
      [],
    );
  const h = (v) => {
      const x = b.current,
        R = v.key;
      if (v.ctrlKey || v.metaKey || v.altKey) {
        k && k(v);
        return;
      }
      const O = En(x).activeElement;
      if (R === "ArrowDown") v.preventDefault(), Ui(x, O, y, m, jc);
      else if (R === "ArrowUp") v.preventDefault(), Ui(x, O, y, m, bg);
      else if (R === "Home") v.preventDefault(), Ui(x, null, y, m, jc);
      else if (R === "End") v.preventDefault(), Ui(x, null, y, m, bg);
      else if (R.length === 1) {
        const N = w.current,
          z = R.toLowerCase(),
          g = performance.now();
        N.keys.length > 0 &&
          (g - N.lastTime > 500
            ? ((N.keys = []), (N.repeating = !0), (N.previousKeyMatched = !0))
            : N.repeating && z !== N.keys[0] && (N.repeating = !1)),
          (N.lastTime = g),
          N.keys.push(z);
        const A = O && !N.repeating && Yy(O, N);
        N.previousKeyMatched && (A || Ui(x, O, !1, m, jc, N))
          ? v.preventDefault()
          : (N.previousKeyMatched = !1);
      }
      k && k(v);
    },
    P = Ct(b, o);
  let I = -1;
  _.Children.forEach(f, (v, x) => {
    if (!_.isValidElement(v)) {
      I === x && ((I += 1), I >= f.length && (I = -1));
      return;
    }
    v.props.disabled ||
      (((C === "selectedMenu" && v.props.selected) || I === -1) && (I = x)),
      I === x &&
        (v.props.disabled ||
          v.props.muiSkipListHighlight ||
          v.type.muiSkipListHighlight) &&
        ((I += 1), I >= f.length && (I = -1));
  });
  const T = _.Children.map(f, (v, x) => {
    if (x === I) {
      const R = {};
      return (
        u && (R.autoFocus = !0),
        v.props.tabIndex === void 0 && C === "selectedMenu" && (R.tabIndex = 0),
        _.cloneElement(v, R)
      );
    }
    return v;
  });
  return X.jsx(JE, {
    role: "menu",
    ref: P,
    className: p,
    onKeyDown: h,
    tabIndex: l ? 0 : -1,
    ...S,
    children: T,
  });
});
function e2(e) {
  return je("MuiPopover", e);
}
Me("MuiPopover", ["root", "paper"]);
function kg(e, r) {
  let o = 0;
  return (
    typeof r == "number"
      ? (o = r)
      : r === "center"
        ? (o = e.height / 2)
        : r === "bottom" && (o = e.height),
    o
  );
}
function Eg(e, r) {
  let o = 0;
  return (
    typeof r == "number"
      ? (o = r)
      : r === "center"
        ? (o = e.width / 2)
        : r === "right" && (o = e.width),
    o
  );
}
function Rg(e) {
  return [e.horizontal, e.vertical]
    .map((r) => (typeof r == "number" ? `${r}px` : r))
    .join(" ");
}
function Bc(e) {
  return typeof e == "function" ? e() : e;
}
const t2 = (e) => {
    const { classes: r } = e;
    return Be({ root: ["root"], paper: ["paper"] }, e2, r);
  },
  n2 = he(Gy, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, r) => r.root,
  })({}),
  Xy = he(Qy, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, r) => r.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  r2 = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiPopover" }),
      {
        action: l,
        anchorEl: u,
        anchorOrigin: f = { vertical: "top", horizontal: "left" },
        anchorPosition: p,
        anchorReference: m = "anchorEl",
        children: y,
        className: k,
        container: C,
        elevation: S = 8,
        marginThreshold: b = 16,
        open: w,
        PaperProps: h = {},
        slots: P = {},
        slotProps: I = {},
        transformOrigin: T = { vertical: "top", horizontal: "left" },
        TransitionComponent: v = vf,
        transitionDuration: x = "auto",
        TransitionProps: { onEntering: R, ...M } = {},
        disableScrollLock: O = !1,
        ...N
      } = s,
      z = (I == null ? void 0 : I.paper) ?? h,
      g = _.useRef(),
      A = {
        ...s,
        anchorOrigin: f,
        anchorReference: m,
        elevation: S,
        marginThreshold: b,
        externalPaperSlotProps: z,
        transformOrigin: T,
        TransitionComponent: v,
        transitionDuration: x,
        TransitionProps: M,
      },
      j = t2(A),
      B = _.useCallback(() => {
        if (m === "anchorPosition") return p;
        const ve = Bc(u),
          Te = (
            ve && ve.nodeType === 1 ? ve : En(g.current).body
          ).getBoundingClientRect();
        return {
          top: Te.top + kg(Te, f.vertical),
          left: Te.left + Eg(Te, f.horizontal),
        };
      }, [u, f.horizontal, f.vertical, p, m]),
      q = _.useCallback(
        (ve) => ({
          vertical: kg(ve, T.vertical),
          horizontal: Eg(ve, T.horizontal),
        }),
        [T.horizontal, T.vertical],
      ),
      V = _.useCallback(
        (ve) => {
          const _e = { width: ve.offsetWidth, height: ve.offsetHeight },
            Te = q(_e);
          if (m === "none")
            return { top: null, left: null, transformOrigin: Rg(Te) };
          const Ge = B();
          let Re = Ge.top - Te.vertical,
            Ve = Ge.left - Te.horizontal;
          const Tt = Re + _e.height,
            ht = Ve + _e.width,
            lt = ir(Bc(u)),
            Dt = lt.innerHeight - b,
            at = lt.innerWidth - b;
          if (b !== null && Re < b) {
            const Qe = Re - b;
            (Re -= Qe), (Te.vertical += Qe);
          } else if (b !== null && Tt > Dt) {
            const Qe = Tt - Dt;
            (Re -= Qe), (Te.vertical += Qe);
          }
          if (b !== null && Ve < b) {
            const Qe = Ve - b;
            (Ve -= Qe), (Te.horizontal += Qe);
          } else if (ht > at) {
            const Qe = ht - at;
            (Ve -= Qe), (Te.horizontal += Qe);
          }
          return {
            top: `${Math.round(Re)}px`,
            left: `${Math.round(Ve)}px`,
            transformOrigin: Rg(Te),
          };
        },
        [u, m, B, q, b],
      ),
      [Y, te] = _.useState(w),
      H = _.useCallback(() => {
        const ve = g.current;
        if (!ve) return;
        const _e = V(ve);
        _e.top !== null && ve.style.setProperty("top", _e.top),
          _e.left !== null && (ve.style.left = _e.left),
          (ve.style.transformOrigin = _e.transformOrigin),
          te(!0);
      }, [V]);
    _.useEffect(
      () => (
        O && window.addEventListener("scroll", H),
        () => window.removeEventListener("scroll", H)
      ),
      [u, O, H],
    );
    const K = (ve, _e) => {
        R && R(ve, _e), H();
      },
      Z = () => {
        te(!1);
      };
    _.useEffect(() => {
      w && H();
    }),
      _.useImperativeHandle(
        l,
        () =>
          w
            ? {
                updatePosition: () => {
                  H();
                },
              }
            : null,
        [w, H],
      ),
      _.useEffect(() => {
        if (!w) return;
        const ve = Ry(() => {
            H();
          }),
          _e = ir(u);
        return (
          _e.addEventListener("resize", ve),
          () => {
            ve.clear(), _e.removeEventListener("resize", ve);
          }
        );
      }, [u, w, H]);
    let L = x;
    x === "auto" && !v.muiSupportAuto && (L = void 0);
    const G = C || (u ? En(Bc(u)).body : void 0),
      ie = { slots: P, slotProps: { ...I, paper: z } },
      [se, le] = Ft("paper", {
        elementType: Xy,
        externalForwardedProps: ie,
        additionalProps: {
          elevation: S,
          className: ke(j.paper, z == null ? void 0 : z.className),
          style: Y ? z.style : { ...z.style, opacity: 0 },
        },
        ownerState: A,
      }),
      [Se, { slotProps: ce, ...we }] = Ft("root", {
        elementType: n2,
        externalForwardedProps: ie,
        additionalProps: {
          slotProps: { backdrop: { invisible: !0 } },
          container: G,
          open: w,
        },
        ownerState: A,
        className: ke(j.root, k),
      }),
      ye = Ct(g, le.ref);
    return X.jsx(Se, {
      ...we,
      ...(!gf(Se) && { slotProps: ce, disableScrollLock: O }),
      ...N,
      ref: o,
      children: X.jsx(v, {
        appear: !0,
        in: w,
        onEntering: K,
        onExited: Z,
        timeout: L,
        ...M,
        children: X.jsx(se, { ...le, ref: ye, children: y }),
      }),
    });
  });
function o2(e) {
  return je("MuiMenu", e);
}
Me("MuiMenu", ["root", "paper", "list"]);
const i2 = { vertical: "top", horizontal: "right" },
  s2 = { vertical: "top", horizontal: "left" },
  l2 = (e) => {
    const { classes: r } = e;
    return Be({ root: ["root"], paper: ["paper"], list: ["list"] }, o2, r);
  },
  a2 = he(r2, {
    shouldForwardProp: (e) => Rn(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, r) => r.root,
  })({}),
  u2 = he(Xy, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, r) => r.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  c2 = he(ZE, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, r) => r.list,
  })({ outline: 0 }),
  f2 = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiMenu" }),
      {
        autoFocus: l = !0,
        children: u,
        className: f,
        disableAutoFocusItem: p = !1,
        MenuListProps: m = {},
        onClose: y,
        open: k,
        PaperProps: C = {},
        PopoverClasses: S,
        transitionDuration: b = "auto",
        TransitionProps: { onEntering: w, ...h } = {},
        variant: P = "selectedMenu",
        slots: I = {},
        slotProps: T = {},
        ...v
      } = s,
      x = Ay(),
      R = {
        ...s,
        autoFocus: l,
        disableAutoFocusItem: p,
        MenuListProps: m,
        onEntering: w,
        PaperProps: C,
        transitionDuration: b,
        TransitionProps: h,
        variant: P,
      },
      M = l2(R),
      O = l && !p && k,
      N = _.useRef(null),
      z = (Y, te) => {
        N.current &&
          N.current.adjustStyleForScrollbar(Y, {
            direction: x ? "rtl" : "ltr",
          }),
          w && w(Y, te);
      },
      g = (Y) => {
        Y.key === "Tab" && (Y.preventDefault(), y && y(Y, "tabKeyDown"));
      };
    let A = -1;
    _.Children.map(u, (Y, te) => {
      _.isValidElement(Y) &&
        (Y.props.disabled ||
          (((P === "selectedMenu" && Y.props.selected) || A === -1) &&
            (A = te)));
    });
    const j = I.paper ?? u2,
      B = T.paper ?? C,
      q = eg({
        elementType: I.root,
        externalSlotProps: T.root,
        ownerState: R,
        className: [M.root, f],
      }),
      V = eg({
        elementType: j,
        externalSlotProps: B,
        ownerState: R,
        className: M.paper,
      });
    return X.jsx(a2, {
      onClose: y,
      anchorOrigin: { vertical: "bottom", horizontal: x ? "right" : "left" },
      transformOrigin: x ? i2 : s2,
      slots: { paper: j, root: I.root },
      slotProps: { root: q, paper: V },
      open: k,
      ref: o,
      transitionDuration: b,
      TransitionProps: { onEntering: z, ...h },
      ownerState: R,
      ...v,
      classes: S,
      children: X.jsx(c2, {
        onKeyDown: g,
        actions: N,
        autoFocus: l && (A === -1 || p),
        autoFocusItem: O,
        variant: P,
        ...m,
        className: ke(M.list, m.className),
        children: u,
      }),
    });
  });
function d2(e) {
  return je("MuiMenuItem", e);
}
const Wi = Me("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  p2 = (e, r) => {
    const { ownerState: o } = e;
    return [
      r.root,
      o.dense && r.dense,
      o.divider && r.divider,
      !o.disableGutters && r.gutters,
    ];
  },
  m2 = (e) => {
    const {
        disabled: r,
        dense: o,
        divider: s,
        disableGutters: l,
        selected: u,
        classes: f,
      } = e,
      m = Be(
        {
          root: [
            "root",
            o && "dense",
            r && "disabled",
            !l && "gutters",
            s && "divider",
            u && "selected",
          ],
        },
        d2,
        f,
      );
    return { ...f, ...m };
  },
  h2 = he(oa, {
    shouldForwardProp: (e) => Rn(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: p2,
  })(
    et(({ theme: e }) => ({
      ...e.typography.body1,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: "border-box",
      whiteSpace: "nowrap",
      "&:hover": {
        textDecoration: "none",
        backgroundColor: (e.vars || e).palette.action.hover,
        "@media (hover: none)": { backgroundColor: "transparent" },
      },
      [`&.${Wi.selected}`]: {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
          : rt(e.palette.primary.main, e.palette.action.selectedOpacity),
        [`&.${Wi.focusVisible}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
            : rt(
                e.palette.primary.main,
                e.palette.action.selectedOpacity +
                  e.palette.action.focusOpacity,
              ),
        },
      },
      [`&.${Wi.selected}:hover`]: {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
          : rt(
              e.palette.primary.main,
              e.palette.action.selectedOpacity + e.palette.action.hoverOpacity,
            ),
        "@media (hover: none)": {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : rt(e.palette.primary.main, e.palette.action.selectedOpacity),
        },
      },
      [`&.${Wi.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus,
      },
      [`&.${Wi.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
      },
      [`& + .${vg.root}`]: {
        marginTop: e.spacing(1),
        marginBottom: e.spacing(1),
      },
      [`& + .${vg.inset}`]: { marginLeft: 52 },
      [`& .${xg.root}`]: { marginTop: 0, marginBottom: 0 },
      [`& .${xg.inset}`]: { paddingLeft: 36 },
      [`& .${Cg.root}`]: { minWidth: 36 },
      variants: [
        {
          props: ({ ownerState: r }) => !r.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        {
          props: ({ ownerState: r }) => r.divider,
          style: {
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
            backgroundClip: "padding-box",
          },
        },
        {
          props: ({ ownerState: r }) => !r.dense,
          style: { [e.breakpoints.up("sm")]: { minHeight: "auto" } },
        },
        {
          props: ({ ownerState: r }) => r.dense,
          style: {
            minHeight: 32,
            paddingTop: 4,
            paddingBottom: 4,
            ...e.typography.body2,
            [`& .${Cg.root} svg`]: { fontSize: "1.25rem" },
          },
        },
      ],
    })),
  ),
  g2 = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiMenuItem" }),
      {
        autoFocus: l = !1,
        component: u = "li",
        dense: f = !1,
        divider: p = !1,
        disableGutters: m = !1,
        focusVisibleClassName: y,
        role: k = "menuitem",
        tabIndex: C,
        className: S,
        ...b
      } = s,
      w = _.useContext(Sf),
      h = _.useMemo(
        () => ({ dense: f || w.dense || !1, disableGutters: m }),
        [w.dense, f, m],
      ),
      P = _.useRef(null);
    $r(() => {
      l && P.current && P.current.focus();
    }, [l]);
    const I = { ...s, dense: h.dense, divider: p, disableGutters: m },
      T = m2(s),
      v = Ct(P, o);
    let x;
    return (
      s.disabled || (x = C !== void 0 ? C : -1),
      X.jsx(Sf.Provider, {
        value: h,
        children: X.jsx(h2, {
          ref: v,
          role: k,
          tabIndex: x,
          component: u,
          focusVisibleClassName: ke(T.focusVisible, y),
          className: ke(T.root, S),
          ...b,
          ownerState: I,
          classes: T,
        }),
      })
    );
  });
function y2(e) {
  return je("MuiNativeSelect", e);
}
const rd = Me("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  v2 = (e) => {
    const {
        classes: r,
        variant: o,
        disabled: s,
        multiple: l,
        open: u,
        error: f,
      } = e,
      p = {
        select: ["select", o, s && "disabled", l && "multiple", f && "error"],
        icon: ["icon", `icon${pe(o)}`, u && "iconOpen", s && "disabled"],
      };
    return Be(p, y2, r);
  },
  Jy = he("select")(({ theme: e }) => ({
    MozAppearance: "none",
    WebkitAppearance: "none",
    userSelect: "none",
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": { borderRadius: 0 },
    [`&.${rd.disabled}`]: { cursor: "default" },
    "&[multiple]": { height: "auto" },
    "&:not([multiple]) option, &:not([multiple]) optgroup": {
      backgroundColor: (e.vars || e).palette.background.paper,
    },
    variants: [
      {
        props: ({ ownerState: r }) =>
          r.variant !== "filled" && r.variant !== "outlined",
        style: { "&&&": { paddingRight: 24, minWidth: 16 } },
      },
      { props: { variant: "filled" }, style: { "&&&": { paddingRight: 32 } } },
      {
        props: { variant: "outlined" },
        style: {
          borderRadius: (e.vars || e).shape.borderRadius,
          "&:focus": { borderRadius: (e.vars || e).shape.borderRadius },
          "&&&": { paddingRight: 32 },
        },
      },
    ],
  })),
  S2 = he(Jy, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: Rn,
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.select,
        r[o.variant],
        o.error && r.error,
        { [`&.${rd.multiple}`]: r.multiple },
      ];
    },
  })({}),
  Zy = he("svg")(({ theme: e }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (e.vars || e).palette.action.active,
    [`&.${rd.disabled}`]: { color: (e.vars || e).palette.action.disabled },
    variants: [
      {
        props: ({ ownerState: r }) => r.open,
        style: { transform: "rotate(180deg)" },
      },
      { props: { variant: "filled" }, style: { right: 7 } },
      { props: { variant: "outlined" }, style: { right: 7 } },
    ],
  })),
  w2 = he(Zy, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.icon,
        o.variant && r[`icon${pe(o.variant)}`],
        o.open && r.iconOpen,
      ];
    },
  })({}),
  C2 = _.forwardRef(function (r, o) {
    const {
        className: s,
        disabled: l,
        error: u,
        IconComponent: f,
        inputRef: p,
        variant: m = "standard",
        ...y
      } = r,
      k = { ...r, disabled: l, variant: m, error: u },
      C = v2(k);
    return X.jsxs(_.Fragment, {
      children: [
        X.jsx(S2, {
          ownerState: k,
          className: ke(C.select, s),
          disabled: l,
          ref: p || o,
          ...y,
        }),
        r.multiple
          ? null
          : X.jsx(w2, { as: f, ownerState: k, className: C.icon }),
      ],
    });
  });
var Pg;
const x2 = he("fieldset", { shouldForwardProp: Rn })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  b2 = he("legend", { shouldForwardProp: Rn })(
    et(({ theme: e }) => ({
      float: "unset",
      width: "auto",
      overflow: "hidden",
      variants: [
        {
          props: ({ ownerState: r }) => !r.withLabel,
          style: {
            padding: 0,
            lineHeight: "11px",
            transition: e.transitions.create("width", {
              duration: 150,
              easing: e.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: ({ ownerState: r }) => r.withLabel,
          style: {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: e.transitions.create("max-width", {
              duration: 50,
              easing: e.transitions.easing.easeOut,
            }),
            whiteSpace: "nowrap",
            "& > span": {
              paddingLeft: 5,
              paddingRight: 5,
              display: "inline-block",
              opacity: 0,
              visibility: "visible",
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.withLabel && r.notched,
          style: {
            maxWidth: "100%",
            transition: e.transitions.create("max-width", {
              duration: 100,
              easing: e.transitions.easing.easeOut,
              delay: 50,
            }),
          },
        },
      ],
    })),
  );
function k2(e) {
  const {
      children: r,
      classes: o,
      className: s,
      label: l,
      notched: u,
      ...f
    } = e,
    p = l != null && l !== "",
    m = { ...e, notched: u, withLabel: p };
  return X.jsx(x2, {
    "aria-hidden": !0,
    className: s,
    ownerState: m,
    ...f,
    children: X.jsx(b2, {
      ownerState: m,
      children: p
        ? X.jsx("span", { children: l })
        : Pg ||
          (Pg = X.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​",
          })),
    }),
  });
}
const E2 = (e) => {
    const { classes: r } = e,
      s = Be(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        zk,
        r,
      );
    return { ...r, ...s };
  },
  R2 = he(Pa, {
    shouldForwardProp: (e) => Rn(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: Ea,
  })(
    et(({ theme: e }) => {
      const r =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${Nn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        "@media (hover: none)": {
          [`&:hover .${Nn.notchedOutline}`]: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : r,
          },
        },
        [`&.${Nn.focused} .${Nn.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(e.palette)
            .filter(fn())
            .map(([o]) => ({
              props: { color: o },
              style: {
                [`&.${Nn.focused} .${Nn.notchedOutline}`]: {
                  borderColor: (e.vars || e).palette[o].main,
                },
              },
            })),
          {
            props: {},
            style: {
              [`&.${Nn.error} .${Nn.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.error.main,
              },
              [`&.${Nn.disabled} .${Nn.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.action.disabled,
              },
            },
          },
          {
            props: ({ ownerState: o }) => o.startAdornment,
            style: { paddingLeft: 14 },
          },
          {
            props: ({ ownerState: o }) => o.endAdornment,
            style: { paddingRight: 14 },
          },
          {
            props: ({ ownerState: o }) => o.multiline,
            style: { padding: "16.5px 14px" },
          },
          {
            props: ({ ownerState: o, size: s }) => o.multiline && s === "small",
            style: { padding: "8.5px 14px" },
          },
        ],
      };
    }),
  ),
  P2 = he(k2, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, r) => r.notchedOutline,
  })(
    et(({ theme: e }) => {
      const r =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        borderColor: e.vars
          ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
          : r,
      };
    }),
  ),
  T2 = he(Ta, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: Ra,
  })(
    et(({ theme: e }) => ({
      padding: "16.5px 14px",
      ...(!e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      }),
      ...(e.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      }),
      variants: [
        { props: { size: "small" }, style: { padding: "8.5px 14px" } },
        { props: ({ ownerState: r }) => r.multiline, style: { padding: 0 } },
        {
          props: ({ ownerState: r }) => r.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: r }) => r.endAdornment,
          style: { paddingRight: 0 },
        },
      ],
    })),
  ),
  od = _.forwardRef(function (r, o) {
    var s;
    const l = We({ props: r, name: "MuiOutlinedInput" }),
      {
        components: u = {},
        fullWidth: f = !1,
        inputComponent: p = "input",
        label: m,
        multiline: y = !1,
        notched: k,
        slots: C = {},
        type: S = "text",
        ...b
      } = l,
      w = E2(l),
      h = Jo(),
      P = Xo({
        props: l,
        muiFormControl: h,
        states: [
          "color",
          "disabled",
          "error",
          "focused",
          "hiddenLabel",
          "size",
          "required",
        ],
      }),
      I = {
        ...l,
        color: P.color || "primary",
        disabled: P.disabled,
        error: P.error,
        focused: P.focused,
        formControl: h,
        fullWidth: f,
        hiddenLabel: P.hiddenLabel,
        multiline: y,
        size: P.size,
        type: S,
      },
      T = C.root ?? u.Root ?? R2,
      v = C.input ?? u.Input ?? T2;
    return X.jsx(ed, {
      slots: { root: T, input: v },
      renderSuffix: (x) =>
        X.jsx(P2, {
          ownerState: I,
          className: w.notchedOutline,
          label:
            m != null && m !== "" && P.required
              ? s || (s = X.jsxs(_.Fragment, { children: [m, " ", "*"] }))
              : m,
          notched:
            typeof k < "u" ? k : !!(x.startAdornment || x.filled || x.focused),
        }),
      fullWidth: f,
      inputComponent: p,
      multiline: y,
      ref: o,
      type: S,
      ...b,
      classes: { ...w, notchedOutline: null },
    });
  });
od.muiName = "Input";
function I2(e) {
  return je("MuiPagination", e);
}
Me("MuiPagination", ["root", "ul", "outlined", "text"]);
function O2(e = {}) {
  const {
      boundaryCount: r = 1,
      componentName: o = "usePagination",
      count: s = 1,
      defaultPage: l = 1,
      disabled: u = !1,
      hideNextButton: f = !1,
      hidePrevButton: p = !1,
      onChange: m,
      page: y,
      showFirstButton: k = !1,
      showLastButton: C = !1,
      siblingCount: S = 1,
      ...b
    } = e,
    [w, h] = lf({ controlled: y, default: l, name: o, state: "page" }),
    P = (z, g) => {
      y || h(g), m && m(z, g);
    },
    I = (z, g) => {
      const A = g - z + 1;
      return Array.from({ length: A }, (j, B) => z + B);
    },
    T = I(1, Math.min(r, s)),
    v = I(Math.max(s - r + 1, r + 1), s),
    x = Math.max(Math.min(w - S, s - r - S * 2 - 1), r + 2),
    R = Math.min(Math.max(w + S, r + S * 2 + 2), s - r - 1),
    M = [
      ...(k ? ["first"] : []),
      ...(p ? [] : ["previous"]),
      ...T,
      ...(x > r + 2 ? ["start-ellipsis"] : r + 1 < s - r ? [r + 1] : []),
      ...I(x, R),
      ...(R < s - r - 1 ? ["end-ellipsis"] : s - r > r ? [s - r] : []),
      ...v,
      ...(f ? [] : ["next"]),
      ...(C ? ["last"] : []),
    ],
    O = (z) => {
      switch (z) {
        case "first":
          return 1;
        case "previous":
          return w - 1;
        case "next":
          return w + 1;
        case "last":
          return s;
        default:
          return null;
      }
    };
  return {
    items: M.map((z) =>
      typeof z == "number"
        ? {
            onClick: (g) => {
              P(g, z);
            },
            type: "page",
            page: z,
            selected: z === w,
            disabled: u,
            "aria-current": z === w ? "page" : void 0,
          }
        : {
            onClick: (g) => {
              P(g, O(z));
            },
            type: z,
            page: O(z),
            selected: !1,
            disabled:
              u ||
              (!z.includes("ellipsis") &&
                (z === "next" || z === "last" ? w >= s : w <= 1)),
          },
    ),
    ...b,
  };
}
function M2(e) {
  return je("MuiPaginationItem", e);
}
const Lt = Me("MuiPaginationItem", [
    "root",
    "page",
    "sizeSmall",
    "sizeLarge",
    "text",
    "textPrimary",
    "textSecondary",
    "outlined",
    "outlinedPrimary",
    "outlinedSecondary",
    "rounded",
    "ellipsis",
    "firstLast",
    "previousNext",
    "focusVisible",
    "disabled",
    "selected",
    "icon",
    "colorPrimary",
    "colorSecondary",
  ]),
  _2 = Yo(
    X.jsx("path", {
      d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z",
    }),
    "FirstPage",
  ),
  $2 = Yo(
    X.jsx("path", {
      d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z",
    }),
    "LastPage",
  ),
  N2 = Yo(
    X.jsx("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }),
    "NavigateBefore",
  ),
  A2 = Yo(
    X.jsx("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }),
    "NavigateNext",
  ),
  ev = (e, r) => {
    const { ownerState: o } = e;
    return [
      r.root,
      r[o.variant],
      r[`size${pe(o.size)}`],
      o.variant === "text" && r[`text${pe(o.color)}`],
      o.variant === "outlined" && r[`outlined${pe(o.color)}`],
      o.shape === "rounded" && r.rounded,
      o.type === "page" && r.page,
      (o.type === "start-ellipsis" || o.type === "end-ellipsis") && r.ellipsis,
      (o.type === "previous" || o.type === "next") && r.previousNext,
      (o.type === "first" || o.type === "last") && r.firstLast,
    ];
  },
  z2 = (e) => {
    const {
        classes: r,
        color: o,
        disabled: s,
        selected: l,
        size: u,
        shape: f,
        type: p,
        variant: m,
      } = e,
      y = {
        root: [
          "root",
          `size${pe(u)}`,
          m,
          f,
          o !== "standard" && `color${pe(o)}`,
          o !== "standard" && `${m}${pe(o)}`,
          s && "disabled",
          l && "selected",
          {
            page: "page",
            first: "firstLast",
            last: "firstLast",
            "start-ellipsis": "ellipsis",
            "end-ellipsis": "ellipsis",
            previous: "previousNext",
            next: "previousNext",
          }[p],
        ],
        icon: ["icon"],
      };
    return Be(y, M2, r);
  },
  L2 = he("div", {
    name: "MuiPaginationItem",
    slot: "Root",
    overridesResolver: ev,
  })(
    et(({ theme: e }) => ({
      ...e.typography.body2,
      borderRadius: 32 / 2,
      textAlign: "center",
      boxSizing: "border-box",
      minWidth: 32,
      padding: "0 6px",
      margin: "0 3px",
      color: (e.vars || e).palette.text.primary,
      height: "auto",
      [`&.${Lt.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
      },
      variants: [
        {
          props: { size: "small" },
          style: {
            minWidth: 26,
            borderRadius: 26 / 2,
            margin: "0 1px",
            padding: "0 4px",
          },
        },
        {
          props: { size: "large" },
          style: {
            minWidth: 40,
            borderRadius: 40 / 2,
            padding: "0 10px",
            fontSize: e.typography.pxToRem(15),
          },
        },
      ],
    })),
  ),
  F2 = he(oa, {
    name: "MuiPaginationItem",
    slot: "Root",
    overridesResolver: ev,
  })(
    et(({ theme: e }) => ({
      ...e.typography.body2,
      borderRadius: 32 / 2,
      textAlign: "center",
      boxSizing: "border-box",
      minWidth: 32,
      height: 32,
      padding: "0 6px",
      margin: "0 3px",
      color: (e.vars || e).palette.text.primary,
      [`&.${Lt.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus,
      },
      [`&.${Lt.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
      },
      transition: e.transitions.create(["color", "background-color"], {
        duration: e.transitions.duration.short,
      }),
      "&:hover": {
        backgroundColor: (e.vars || e).palette.action.hover,
        "@media (hover: none)": { backgroundColor: "transparent" },
      },
      [`&.${Lt.selected}`]: {
        backgroundColor: (e.vars || e).palette.action.selected,
        "&:hover": {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : rt(
                e.palette.action.selected,
                e.palette.action.selectedOpacity +
                  e.palette.action.hoverOpacity,
              ),
          "@media (hover: none)": {
            backgroundColor: (e.vars || e).palette.action.selected,
          },
        },
        [`&.${Lt.focusVisible}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
            : rt(
                e.palette.action.selected,
                e.palette.action.selectedOpacity +
                  e.palette.action.focusOpacity,
              ),
        },
        [`&.${Lt.disabled}`]: {
          opacity: 1,
          color: (e.vars || e).palette.action.disabled,
          backgroundColor: (e.vars || e).palette.action.selected,
        },
      },
      variants: [
        {
          props: { size: "small" },
          style: {
            minWidth: 26,
            height: 26,
            borderRadius: 26 / 2,
            margin: "0 1px",
            padding: "0 4px",
          },
        },
        {
          props: { size: "large" },
          style: {
            minWidth: 40,
            height: 40,
            borderRadius: 40 / 2,
            padding: "0 10px",
            fontSize: e.typography.pxToRem(15),
          },
        },
        {
          props: { shape: "rounded" },
          style: { borderRadius: (e.vars || e).shape.borderRadius },
        },
        {
          props: { variant: "outlined" },
          style: {
            border: e.vars
              ? `1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : `1px solid ${e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
            [`&.${Lt.selected}`]: {
              [`&.${Lt.disabled}`]: {
                borderColor: (e.vars || e).palette.action.disabledBackground,
                color: (e.vars || e).palette.action.disabled,
              },
            },
          },
        },
        {
          props: { variant: "text" },
          style: {
            [`&.${Lt.selected}`]: {
              [`&.${Lt.disabled}`]: {
                color: (e.vars || e).palette.action.disabled,
              },
            },
          },
        },
        ...Object.entries(e.palette)
          .filter(fn(["dark", "contrastText"]))
          .map(([r]) => ({
            props: { variant: "text", color: r },
            style: {
              [`&.${Lt.selected}`]: {
                color: (e.vars || e).palette[r].contrastText,
                backgroundColor: (e.vars || e).palette[r].main,
                "&:hover": {
                  backgroundColor: (e.vars || e).palette[r].dark,
                  "@media (hover: none)": {
                    backgroundColor: (e.vars || e).palette[r].main,
                  },
                },
                [`&.${Lt.focusVisible}`]: {
                  backgroundColor: (e.vars || e).palette[r].dark,
                },
                [`&.${Lt.disabled}`]: {
                  color: (e.vars || e).palette.action.disabled,
                },
              },
            },
          })),
        ...Object.entries(e.palette)
          .filter(fn(["light"]))
          .map(([r]) => ({
            props: { variant: "outlined", color: r },
            style: {
              [`&.${Lt.selected}`]: {
                color: (e.vars || e).palette[r].main,
                border: `1px solid ${e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.5)` : rt(e.palette[r].main, 0.5)}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.activatedOpacity})`
                  : rt(e.palette[r].main, e.palette.action.activatedOpacity),
                "&:hover": {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette[r].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                    : rt(
                        e.palette[r].main,
                        e.palette.action.activatedOpacity +
                          e.palette.action.focusOpacity,
                      ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
                [`&.${Lt.focusVisible}`]: {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette[r].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                    : rt(
                        e.palette[r].main,
                        e.palette.action.activatedOpacity +
                          e.palette.action.focusOpacity,
                      ),
                },
              },
            },
          })),
      ],
    })),
  ),
  D2 = he("div", {
    name: "MuiPaginationItem",
    slot: "Icon",
    overridesResolver: (e, r) => r.icon,
  })(
    et(({ theme: e }) => ({
      fontSize: e.typography.pxToRem(20),
      margin: "0 -8px",
      variants: [
        {
          props: { size: "small" },
          style: { fontSize: e.typography.pxToRem(18) },
        },
        {
          props: { size: "large" },
          style: { fontSize: e.typography.pxToRem(22) },
        },
      ],
    })),
  ),
  j2 = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiPaginationItem" }),
      {
        className: l,
        color: u = "standard",
        component: f,
        components: p = {},
        disabled: m = !1,
        page: y,
        selected: k = !1,
        shape: C = "circular",
        size: S = "medium",
        slots: b = {},
        slotProps: w = {},
        type: h = "page",
        variant: P = "text",
        ...I
      } = s,
      T = {
        ...s,
        color: u,
        disabled: m,
        selected: k,
        shape: C,
        size: S,
        type: h,
        variant: P,
      },
      v = Ay(),
      x = z2(T),
      R = {
        slots: {
          previous: b.previous ?? p.previous,
          next: b.next ?? p.next,
          first: b.first ?? p.first,
          last: b.last ?? p.last,
        },
        slotProps: w,
      },
      [M, O] = Ft("previous", {
        elementType: N2,
        externalForwardedProps: R,
        ownerState: T,
      }),
      [N, z] = Ft("next", {
        elementType: A2,
        externalForwardedProps: R,
        ownerState: T,
      }),
      [g, A] = Ft("first", {
        elementType: _2,
        externalForwardedProps: R,
        ownerState: T,
      }),
      [j, B] = Ft("last", {
        elementType: $2,
        externalForwardedProps: R,
        ownerState: T,
      }),
      q = v
        ? { previous: "next", next: "previous", first: "last", last: "first" }[
            h
          ]
        : h,
      V = { previous: M, next: N, first: g, last: j }[q],
      Y = { previous: O, next: z, first: A, last: B }[q];
    return h === "start-ellipsis" || h === "end-ellipsis"
      ? X.jsx(L2, {
          ref: o,
          ownerState: T,
          className: ke(x.root, l),
          children: "…",
        })
      : X.jsxs(F2, {
          ref: o,
          ownerState: T,
          component: f,
          disabled: m,
          className: ke(x.root, l),
          ...I,
          children: [
            h === "page" && y,
            V ? X.jsx(D2, { ...Y, className: x.icon, as: V }) : null,
          ],
        });
  }),
  B2 = (e) => {
    const { classes: r, variant: o } = e;
    return Be({ root: ["root", o], ul: ["ul"] }, I2, r);
  },
  U2 = he("nav", {
    name: "MuiPagination",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [r.root, r[o.variant]];
    },
  })({}),
  W2 = he("ul", {
    name: "MuiPagination",
    slot: "Ul",
    overridesResolver: (e, r) => r.ul,
  })({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    padding: 0,
    margin: 0,
    listStyle: "none",
  });
function V2(e, r, o) {
  return e === "page" ? `${o ? "" : "Go to "}page ${r}` : `Go to ${e} page`;
}
const H2 = _.forwardRef(function (r, o) {
  const s = We({ props: r, name: "MuiPagination" }),
    {
      boundaryCount: l = 1,
      className: u,
      color: f = "standard",
      count: p = 1,
      defaultPage: m = 1,
      disabled: y = !1,
      getItemAriaLabel: k = V2,
      hideNextButton: C = !1,
      hidePrevButton: S = !1,
      onChange: b,
      page: w,
      renderItem: h = (g) => X.jsx(j2, { ...g }),
      shape: P = "circular",
      showFirstButton: I = !1,
      showLastButton: T = !1,
      siblingCount: v = 1,
      size: x = "medium",
      variant: R = "text",
      ...M
    } = s,
    { items: O } = O2({ ...s, componentName: "Pagination" }),
    N = {
      ...s,
      boundaryCount: l,
      color: f,
      count: p,
      defaultPage: m,
      disabled: y,
      getItemAriaLabel: k,
      hideNextButton: C,
      hidePrevButton: S,
      renderItem: h,
      shape: P,
      showFirstButton: I,
      showLastButton: T,
      siblingCount: v,
      size: x,
      variant: R,
    },
    z = B2(N);
  return X.jsx(U2, {
    "aria-label": "pagination navigation",
    className: ke(z.root, u),
    ownerState: N,
    ref: o,
    ...M,
    children: X.jsx(W2, {
      className: z.ul,
      ownerState: N,
      children: O.map((g, A) =>
        X.jsx(
          "li",
          {
            children: h({
              ...g,
              color: f,
              "aria-label": k(g.type, g.page, g.selected),
              shape: P,
              size: x,
              variant: R,
            }),
          },
          A,
        ),
      ),
    }),
  });
});
function tv(e) {
  return je("MuiSelect", e);
}
const Vi = Me("MuiSelect", [
  "root",
  "select",
  "multiple",
  "filled",
  "outlined",
  "standard",
  "disabled",
  "focused",
  "icon",
  "iconOpen",
  "iconFilled",
  "iconOutlined",
  "iconStandard",
  "nativeInput",
  "error",
]);
var Tg;
const q2 = he(Jy, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        { [`&.${Vi.select}`]: r.select },
        { [`&.${Vi.select}`]: r[o.variant] },
        { [`&.${Vi.error}`]: r.error },
        { [`&.${Vi.multiple}`]: r.multiple },
      ];
    },
  })({
    [`&.${Vi.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  Q2 = he(Zy, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, r) => {
      const { ownerState: o } = e;
      return [
        r.icon,
        o.variant && r[`icon${pe(o.variant)}`],
        o.open && r.iconOpen,
      ];
    },
  })({}),
  K2 = he("input", {
    shouldForwardProp: (e) => Uy(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, r) => r.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function Ig(e, r) {
  return typeof r == "object" && r !== null ? e === r : String(e) === String(r);
}
function G2(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const Y2 = (e) => {
    const {
        classes: r,
        variant: o,
        disabled: s,
        multiple: l,
        open: u,
        error: f,
      } = e,
      p = {
        select: ["select", o, s && "disabled", l && "multiple", f && "error"],
        icon: ["icon", `icon${pe(o)}`, u && "iconOpen", s && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return Be(p, tv, r);
  },
  X2 = _.forwardRef(function (r, o) {
    var Zo;
    const {
        "aria-describedby": s,
        "aria-label": l,
        autoFocus: u,
        autoWidth: f,
        children: p,
        className: m,
        defaultOpen: y,
        defaultValue: k,
        disabled: C,
        displayEmpty: S,
        error: b = !1,
        IconComponent: w,
        inputRef: h,
        labelId: P,
        MenuProps: I = {},
        multiple: T,
        name: v,
        onBlur: x,
        onChange: R,
        onClose: M,
        onFocus: O,
        onOpen: N,
        open: z,
        readOnly: g,
        renderValue: A,
        required: j,
        SelectDisplayProps: B = {},
        tabIndex: q,
        type: V,
        value: Y,
        variant: te = "standard",
        ...H
      } = r,
      [K, Z] = lf({ controlled: Y, default: k, name: "Select" }),
      [L, G] = lf({ controlled: z, default: y, name: "Select" }),
      ie = _.useRef(null),
      se = _.useRef(null),
      [le, Se] = _.useState(null),
      { current: ce } = _.useRef(z != null),
      [we, ye] = _.useState(),
      ve = Ct(o, h),
      _e = _.useCallback((be) => {
        (se.current = be), be && Se(be);
      }, []),
      Te = le == null ? void 0 : le.parentNode;
    _.useImperativeHandle(
      ve,
      () => ({
        focus: () => {
          se.current.focus();
        },
        node: ie.current,
        value: K,
      }),
      [K],
    ),
      _.useEffect(() => {
        y &&
          L &&
          le &&
          !ce &&
          (ye(f ? null : Te.clientWidth), se.current.focus());
      }, [le, f]),
      _.useEffect(() => {
        u && se.current.focus();
      }, [u]),
      _.useEffect(() => {
        if (!P) return;
        const be = En(se.current).getElementById(P);
        if (be) {
          const Fe = () => {
            getSelection().isCollapsed && se.current.focus();
          };
          return (
            be.addEventListener("click", Fe),
            () => {
              be.removeEventListener("click", Fe);
            }
          );
        }
      }, [P]);
    const Ge = (be, Fe) => {
        be ? N && N(Fe) : M && M(Fe),
          ce || (ye(f ? null : Te.clientWidth), G(be));
      },
      Re = (be) => {
        be.button === 0 &&
          (be.preventDefault(), se.current.focus(), Ge(!0, be));
      },
      Ve = (be) => {
        Ge(!1, be);
      },
      Tt = _.Children.toArray(p),
      ht = (be) => {
        const Fe = Tt.find((ut) => ut.props.value === be.target.value);
        Fe !== void 0 && (Z(Fe.props.value), R && R(be, Fe));
      },
      lt = (be) => (Fe) => {
        let ut;
        if (Fe.currentTarget.hasAttribute("tabindex")) {
          if (T) {
            ut = Array.isArray(K) ? K.slice() : [];
            const Pn = K.indexOf(be.props.value);
            Pn === -1 ? ut.push(be.props.value) : ut.splice(Pn, 1);
          } else ut = be.props.value;
          if (
            (be.props.onClick && be.props.onClick(Fe), K !== ut && (Z(ut), R))
          ) {
            const Pn = Fe.nativeEvent || Fe,
              so = new Pn.constructor(Pn.type, Pn);
            Object.defineProperty(so, "target", {
              writable: !0,
              value: { value: ut, name: v },
            }),
              R(so, be);
          }
          T || Ge(!1, Fe);
        }
      },
      Dt = (be) => {
        g ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].includes(be.key) &&
            (be.preventDefault(), Ge(!0, be)));
      },
      at = le !== null && L,
      Qe = (be) => {
        !at &&
          x &&
          (Object.defineProperty(be, "target", {
            writable: !0,
            value: { value: K, name: v },
          }),
          x(be));
      };
    delete H["aria-invalid"];
    let ge, Un;
    const xt = [];
    let Wn = !1;
    (sa({ value: K }) || S) && (A ? (ge = A(K)) : (Wn = !0));
    const sr = Tt.map((be) => {
      if (!_.isValidElement(be)) return null;
      let Fe;
      if (T) {
        if (!Array.isArray(K)) throw new Error(rr(2));
        (Fe = K.some((ut) => Ig(ut, be.props.value))),
          Fe && Wn && xt.push(be.props.children);
      } else (Fe = Ig(K, be.props.value)), Fe && Wn && (Un = be.props.children);
      return _.cloneElement(be, {
        "aria-selected": Fe ? "true" : "false",
        onClick: lt(be),
        onKeyUp: (ut) => {
          ut.key === " " && ut.preventDefault(),
            be.props.onKeyUp && be.props.onKeyUp(ut);
        },
        role: "option",
        selected: Fe,
        value: void 0,
        "data-value": be.props.value,
      });
    });
    Wn &&
      (T
        ? xt.length === 0
          ? (ge = null)
          : (ge = xt.reduce(
              (be, Fe, ut) => (
                be.push(Fe), ut < xt.length - 1 && be.push(", "), be
              ),
              [],
            ))
        : (ge = Un));
    let Vn = we;
    !f && ce && le && (Vn = Te.clientWidth);
    let pn;
    typeof q < "u" ? (pn = q) : (pn = C ? null : 0);
    const Hn = B.id || (v ? `mui-component-select-${v}` : void 0),
      Kt = { ...r, variant: te, value: K, open: at, error: b },
      ze = Y2(Kt),
      lr = {
        ...I.PaperProps,
        ...((Zo = I.slotProps) == null ? void 0 : Zo.paper),
      },
      ar = Py();
    return X.jsxs(_.Fragment, {
      children: [
        X.jsx(q2, {
          as: "div",
          ref: _e,
          tabIndex: pn,
          role: "combobox",
          "aria-controls": at ? ar : void 0,
          "aria-disabled": C ? "true" : void 0,
          "aria-expanded": at ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": l,
          "aria-labelledby": [P, Hn].filter(Boolean).join(" ") || void 0,
          "aria-describedby": s,
          "aria-required": j ? "true" : void 0,
          "aria-invalid": b ? "true" : void 0,
          onKeyDown: Dt,
          onMouseDown: C || g ? null : Re,
          onBlur: Qe,
          onFocus: O,
          ...B,
          ownerState: Kt,
          className: ke(B.className, ze.select, m),
          id: Hn,
          children: G2(ge)
            ? Tg ||
              (Tg = X.jsx("span", {
                className: "notranslate",
                "aria-hidden": !0,
                children: "​",
              }))
            : ge,
        }),
        X.jsx(K2, {
          "aria-invalid": b,
          value: Array.isArray(K) ? K.join(",") : K,
          name: v,
          ref: ie,
          "aria-hidden": !0,
          onChange: ht,
          tabIndex: -1,
          disabled: C,
          className: ze.nativeInput,
          autoFocus: u,
          required: j,
          ...H,
          ownerState: Kt,
        }),
        X.jsx(Q2, { as: w, className: ze.icon, ownerState: Kt }),
        X.jsx(f2, {
          id: `menu-${v || ""}`,
          anchorEl: Te,
          open: at,
          onClose: Ve,
          anchorOrigin: { vertical: "bottom", horizontal: "center" },
          transformOrigin: { vertical: "top", horizontal: "center" },
          ...I,
          MenuListProps: {
            "aria-labelledby": P,
            role: "listbox",
            "aria-multiselectable": T ? "true" : void 0,
            disableListWrap: !0,
            id: ar,
            ...I.MenuListProps,
          },
          slotProps: {
            ...I.slotProps,
            paper: {
              ...lr,
              style: { minWidth: Vn, ...(lr != null ? lr.style : null) },
            },
          },
          children: sr,
        }),
      ],
    });
  }),
  J2 = (e) => {
    const { classes: r } = e,
      s = Be({ root: ["root"] }, tv, r);
    return { ...r, ...s };
  },
  id = {
    name: "MuiSelect",
    overridesResolver: (e, r) => r.root,
    shouldForwardProp: (e) => Rn(e) && e !== "variant",
    slot: "Root",
  },
  Z2 = he(nd, id)(""),
  eR = he(od, id)(""),
  tR = he(td, id)(""),
  sd = _.forwardRef(function (r, o) {
    const s = We({ name: "MuiSelect", props: r }),
      {
        autoWidth: l = !1,
        children: u,
        classes: f = {},
        className: p,
        defaultOpen: m = !1,
        displayEmpty: y = !1,
        IconComponent: k = Fk,
        id: C,
        input: S,
        inputProps: b,
        label: w,
        labelId: h,
        MenuProps: P,
        multiple: I = !1,
        native: T = !1,
        onClose: v,
        onOpen: x,
        open: R,
        renderValue: M,
        SelectDisplayProps: O,
        variant: N = "outlined",
        ...z
      } = s,
      g = T ? C2 : X2,
      A = Jo(),
      j = Xo({ props: s, muiFormControl: A, states: ["variant", "error"] }),
      B = j.variant || N,
      q = { ...s, variant: B, classes: f },
      V = J2(q),
      { root: Y, ...te } = V,
      H =
        S ||
        {
          standard: X.jsx(Z2, { ownerState: q }),
          outlined: X.jsx(eR, { label: w, ownerState: q }),
          filled: X.jsx(tR, { ownerState: q }),
        }[B],
      K = Ct(o, Cs(H));
    return X.jsx(_.Fragment, {
      children: _.cloneElement(H, {
        inputComponent: g,
        inputProps: {
          children: u,
          error: j.error,
          IconComponent: k,
          variant: B,
          type: void 0,
          multiple: I,
          ...(T
            ? { id: C }
            : {
                autoWidth: l,
                defaultOpen: m,
                displayEmpty: y,
                labelId: h,
                MenuProps: P,
                onClose: v,
                onOpen: x,
                open: R,
                renderValue: M,
                SelectDisplayProps: { id: C, ...O },
              }),
          ...b,
          classes: b ? Nt(te, b.classes) : te,
          ...(S ? S.props.inputProps : {}),
        },
        ...(((I && T) || y) && B === "outlined" ? { notched: !0 } : {}),
        ref: K,
        className: ke(H.props.className, p, V.root),
        ...(!S && { variant: B }),
        ...z,
      }),
    });
  });
sd.muiName = "Select";
function nR(e) {
  return je("MuiTextField", e);
}
Me("MuiTextField", ["root"]);
const rR = { standard: nd, filled: td, outlined: od },
  oR = (e) => {
    const { classes: r } = e;
    return Be({ root: ["root"] }, nR, r);
  },
  iR = he(ME, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (e, r) => r.root,
  })({}),
  sR = _.forwardRef(function (r, o) {
    const s = We({ props: r, name: "MuiTextField" }),
      {
        autoComplete: l,
        autoFocus: u = !1,
        children: f,
        className: p,
        color: m = "primary",
        defaultValue: y,
        disabled: k = !1,
        error: C = !1,
        FormHelperTextProps: S,
        fullWidth: b = !1,
        helperText: w,
        id: h,
        InputLabelProps: P,
        inputProps: I,
        InputProps: T,
        inputRef: v,
        label: x,
        maxRows: R,
        minRows: M,
        multiline: O = !1,
        name: N,
        onBlur: z,
        onChange: g,
        onFocus: A,
        placeholder: j,
        required: B = !1,
        rows: q,
        select: V = !1,
        SelectProps: Y,
        slots: te = {},
        slotProps: H = {},
        type: K,
        value: Z,
        variant: L = "outlined",
        ...G
      } = s,
      ie = {
        ...s,
        autoFocus: u,
        color: m,
        disabled: k,
        error: C,
        fullWidth: b,
        multiline: O,
        required: B,
        select: V,
        variant: L,
      },
      se = oR(ie),
      le = Py(h),
      Se = w && le ? `${le}-helper-text` : void 0,
      ce = x && le ? `${le}-label` : void 0,
      we = rR[L],
      ye = {
        slots: te,
        slotProps: {
          input: T,
          inputLabel: P,
          htmlInput: I,
          formHelperText: S,
          select: Y,
          ...H,
        },
      },
      ve = {},
      _e = ye.slotProps.inputLabel;
    L === "outlined" &&
      (_e && typeof _e.shrink < "u" && (ve.notched = _e.shrink),
      (ve.label = x)),
      V &&
        ((!Y || !Y.native) && (ve.id = void 0),
        (ve["aria-describedby"] = void 0));
    const [Te, Ge] = Ft("input", {
        elementType: we,
        externalForwardedProps: ye,
        additionalProps: ve,
        ownerState: ie,
      }),
      [Re, Ve] = Ft("inputLabel", {
        elementType: KE,
        externalForwardedProps: ye,
        ownerState: ie,
      }),
      [Tt, ht] = Ft("htmlInput", {
        elementType: "input",
        externalForwardedProps: ye,
        ownerState: ie,
      }),
      [lt, Dt] = Ft("formHelperText", {
        elementType: AE,
        externalForwardedProps: ye,
        ownerState: ie,
      }),
      [at, Qe] = Ft("select", {
        elementType: sd,
        externalForwardedProps: ye,
        ownerState: ie,
      }),
      ge = X.jsx(Te, {
        "aria-describedby": Se,
        autoComplete: l,
        autoFocus: u,
        defaultValue: y,
        fullWidth: b,
        multiline: O,
        name: N,
        rows: q,
        maxRows: R,
        minRows: M,
        type: K,
        value: Z,
        id: le,
        inputRef: v,
        onBlur: z,
        onChange: g,
        onFocus: A,
        placeholder: j,
        inputProps: ht,
        slots: { input: te.htmlInput ? Tt : void 0 },
        ...Ge,
      });
    return X.jsxs(iR, {
      className: ke(se.root, p),
      disabled: k,
      error: C,
      fullWidth: b,
      ref: o,
      required: B,
      color: m,
      variant: L,
      ownerState: ie,
      ...G,
      children: [
        x != null &&
          x !== "" &&
          X.jsx(Re, { htmlFor: le, id: ce, ...Ve, children: x }),
        V
          ? X.jsx(at, {
              "aria-describedby": Se,
              id: le,
              labelId: ce,
              value: Z,
              input: ge,
              ...Qe,
              children: f,
            })
          : ge,
        w && X.jsx(lt, { id: Se, ...Dt, children: w }),
      ],
    });
  }),
  nv = "/my-blog/assets/f034d712e5d8683587dabe2d01c212cb-zKJzPyK-.jpg",
  lR = ({ post: e, onClick: r }) =>
    X.jsxs(Yk, {
      onClick: r,
      sx: {
        borderRadius: "1rem",
        maxWidth: "400px",
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.05)" },
      },
      children: [
        X.jsx(Ky, {
          component: "img",
          height: "150",
          image: e.thumbnail || nv,
          alt: e.title,
        }),
        X.jsxs(eE, {
          children: [
            X.jsx(ia, { gutterBottom: !0, variant: "h5", children: e.title }),
            X.jsxs(ia, {
              variant: "body2",
              color: "text.secondary",
              children: [e.body.slice(0, 50), "..."],
            }),
          ],
        }),
      ],
    }),
  aR = ({ posts: e, onPostClick: r }) =>
    X.jsx(io, {
      sx: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: 4,
      },
      children: e.map((o) =>
        X.jsx(
          io,
          { children: X.jsx(lR, { post: o, onClick: () => r(o) }) },
          o.id,
        ),
      ),
    });
var Uc, Og;
function uR() {
  if (Og) return Uc;
  Og = 1;
  var e = "Expected a function",
    r = NaN,
    o = "[object Symbol]",
    s = /^\s+|\s+$/g,
    l = /^[-+]0x[0-9a-f]+$/i,
    u = /^0b[01]+$/i,
    f = /^0o[0-7]+$/i,
    p = parseInt,
    m = typeof Il == "object" && Il && Il.Object === Object && Il,
    y = typeof self == "object" && self && self.Object === Object && self,
    k = m || y || Function("return this")(),
    C = Object.prototype,
    S = C.toString,
    b = Math.max,
    w = Math.min,
    h = function () {
      return k.Date.now();
    };
  function P(R, M, O) {
    var N,
      z,
      g,
      A,
      j,
      B,
      q = 0,
      V = !1,
      Y = !1,
      te = !0;
    if (typeof R != "function") throw new TypeError(e);
    (M = x(M) || 0),
      I(O) &&
        ((V = !!O.leading),
        (Y = "maxWait" in O),
        (g = Y ? b(x(O.maxWait) || 0, M) : g),
        (te = "trailing" in O ? !!O.trailing : te));
    function H(ce) {
      var we = N,
        ye = z;
      return (N = z = void 0), (q = ce), (A = R.apply(ye, we)), A;
    }
    function K(ce) {
      return (q = ce), (j = setTimeout(G, M)), V ? H(ce) : A;
    }
    function Z(ce) {
      var we = ce - B,
        ye = ce - q,
        ve = M - we;
      return Y ? w(ve, g - ye) : ve;
    }
    function L(ce) {
      var we = ce - B,
        ye = ce - q;
      return B === void 0 || we >= M || we < 0 || (Y && ye >= g);
    }
    function G() {
      var ce = h();
      if (L(ce)) return ie(ce);
      j = setTimeout(G, Z(ce));
    }
    function ie(ce) {
      return (j = void 0), te && N ? H(ce) : ((N = z = void 0), A);
    }
    function se() {
      j !== void 0 && clearTimeout(j), (q = 0), (N = B = z = j = void 0);
    }
    function le() {
      return j === void 0 ? A : ie(h());
    }
    function Se() {
      var ce = h(),
        we = L(ce);
      if (((N = arguments), (z = this), (B = ce), we)) {
        if (j === void 0) return K(B);
        if (Y) return (j = setTimeout(G, M)), H(B);
      }
      return j === void 0 && (j = setTimeout(G, M)), A;
    }
    return (Se.cancel = se), (Se.flush = le), Se;
  }
  function I(R) {
    var M = typeof R;
    return !!R && (M == "object" || M == "function");
  }
  function T(R) {
    return !!R && typeof R == "object";
  }
  function v(R) {
    return typeof R == "symbol" || (T(R) && S.call(R) == o);
  }
  function x(R) {
    if (typeof R == "number") return R;
    if (v(R)) return r;
    if (I(R)) {
      var M = typeof R.valueOf == "function" ? R.valueOf() : R;
      R = I(M) ? M + "" : M;
    }
    if (typeof R != "string") return R === 0 ? R : +R;
    R = R.replace(s, "");
    var O = u.test(R);
    return O || f.test(R) ? p(R.slice(2), O ? 2 : 8) : l.test(R) ? r : +R;
  }
  return (Uc = P), Uc;
}
var cR = uR();
const fR = la(cR),
  dR = ({ onSearch: e, onTagFilter: r }) => {
    const [o, s] = _.useState([]),
      l = fR((p) => {
        e(p);
      }, 500),
      u = (p) => {
        l(p.target.value);
      },
      f = (p) => {
        const m = o.includes(p) ? o.filter((y) => y !== p) : [...o, p];
        s(m), r(m);
      };
    return X.jsxs(io, {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      p: 2,
      children: [
        X.jsx(sR, {
          sx: {
            borderRadius: "20px",
            backgroundColor: "#FCFDFE",
            "& .MuiOutlinedInput-root": { borderRadius: "20px" },
          },
          label: "Search...",
          placeholder: "Search by name",
          variant: "outlined",
          onChange: u,
        }),
        X.jsx(io, {
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          children: [
            "tech",
            "health",
            "food",
            "sport",
            "politics",
            "business",
          ].map((p) =>
            X.jsx(
              Tk,
              {
                label: p,
                color: o.includes(p) ? "primary" : "default",
                onClick: () => f(p),
                sx: {
                  backgroundColor: o.includes(p) ? "#11a850" : "#d3d3d3",
                  "&:hover": {
                    backgroundColor: "#11a850",
                    color: "white",
                    transition: "background-color 0.3s, transform 0.3s",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#11a850",
                    borderColor: "#06381BFF",
                  },
                },
              },
              p,
            ),
          ),
        }),
      ],
    });
  },
  pR = ({
    count: e,
    page: r,
    itemsPerPage: o,
    onChangePage: s,
    onChangeItemsPerPage: l,
  }) =>
    X.jsxs(io, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      p: 2,
      children: [
        X.jsx(H2, { count: e, page: r, onChange: (u, f) => s(f) }),
        X.jsx(sd, {
          value: o,
          onChange: (u) => l(Number(u.target.value)),
          children: [10, 20, 50].map((u) =>
            X.jsx(g2, { value: u, children: u }, u),
          ),
        }),
      ],
    }),
  mR = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    minWidth: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  },
  hR = ({ open: e, onClose: r, post: o }) =>
    o
      ? X.jsx(Gy, {
          open: e,
          onClose: r,
          children: X.jsxs(io, {
            sx: mR,
            children: [
              X.jsx(Ky, {
                component: "img",
                height: "200",
                image: o.thumbnail || nv,
                alt: o.title,
                sx: { mb: 2, borderRadius: "8px" },
              }),
              X.jsx(ia, {
                variant: "h6",
                component: "h2",
                sx: { mb: 2 },
                children: o.title,
              }),
              X.jsx(ia, { variant: "body1", sx: { mb: 2 }, children: o.body }),
            ],
          }),
        })
      : null,
  gR = () => {
    const { data: e = [], isLoading: r } = gw(),
      [o, s] = _.useState([]),
      [l, u] = _.useState(1),
      [f, p] = _.useState(10),
      [m, y] = _.useState(null),
      [k, C] = _.useState([]),
      S = {
        tech: ["maxime ", "dolorem ", "autem"],
        health: ["laborum ", "doloribus ", "alias "],
        food: ["magnam", "adipisci ", "provident "],
        sport: ["sint ", "repudiandae ", "voluptas "],
        politics: ["dolorum ", "dignissimos ", "ratione "],
        business: ["magnam", "adipisci ", "provident "],
      };
    _.useEffect(() => {
      if (k.length === 0) s(e), u(1);
      else {
        const T = b(e, k);
        s(T);
      }
    }, [e, k]);
    const b = (T, v) =>
        T.filter((x) =>
          v.some((R) => {
            var M;
            return (M = S[R]) == null
              ? void 0
              : M.some((O) => x.body.toLowerCase().includes(O.toLowerCase()));
          }),
        ),
      w = (T) => {
        C(T);
        const v = b(e, T);
        s(v), T.length === 0 && u(1);
      },
      h = (T) => {
        s(e.filter((v) => v.title.toLowerCase().includes(T.toLowerCase())));
      },
      P = (T) => u(T),
      I = (T) => p(T);
    return X.jsxs(io, {
      sx: { padding: "0 20px" },
      children: [
        X.jsx(dR, { onSearch: h, onTagFilter: w }),
        r
          ? X.jsx(hk, {})
          : X.jsxs(X.Fragment, {
              children: [
                X.jsx(aR, {
                  posts: o.slice((l - 1) * f, l * f),
                  onPostClick: (T) => y(T),
                }),
                X.jsx(pR, {
                  count: Math.ceil(o.length / f),
                  page: l,
                  itemsPerPage: f,
                  onChangePage: P,
                  onChangeItemsPerPage: I,
                }),
              ],
            }),
        X.jsx(hR, { open: !!m, onClose: () => y(null), post: m }),
      ],
    });
  },
  yR = () => X.jsx(gR, {});
l1.createRoot(document.getElementById("root")).render(
  X.jsx(Cn.StrictMode, {
    children: X.jsx(C1, { store: yw, children: X.jsx(yR, {}) }),
  }),
);
