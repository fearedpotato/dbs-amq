var ko = { exports: {} }, as = {};
var gm;
function mg() {
  if (gm) return as;
  gm = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(r, S, R) {
    var w = null;
    if (R !== void 0 && (w = "" + R), S.key !== void 0 && (w = "" + S.key), "key" in S) {
      R = {};
      for (var Y in S)
        Y !== "key" && (R[Y] = S[Y]);
    } else R = S;
    return S = R.ref, {
      $$typeof: o,
      type: r,
      key: w,
      ref: S !== void 0 ? S : null,
      props: R
    };
  }
  return as.Fragment = i, as.jsx = s, as.jsxs = s, as;
}
var pm;
function yg() {
  return pm || (pm = 1, ko.exports = mg()), ko.exports;
}
var m = yg(), Xo = { exports: {} }, ee = {};
var vm;
function gg() {
  if (vm) return ee;
  vm = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), S = /* @__PURE__ */ Symbol.for("react.profiler"), R = /* @__PURE__ */ Symbol.for("react.consumer"), w = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), U = /* @__PURE__ */ Symbol.for("react.suspense"), O = /* @__PURE__ */ Symbol.for("react.memo"), I = /* @__PURE__ */ Symbol.for("react.lazy"), X = /* @__PURE__ */ Symbol.for("react.activity"), fe = Symbol.iterator;
  function $e(v) {
    return v === null || typeof v != "object" ? null : (v = fe && v[fe] || v["@@iterator"], typeof v == "function" ? v : null);
  }
  var it = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, rt = Object.assign, Et = {};
  function ot(v, q, L) {
    this.props = v, this.context = q, this.refs = Et, this.updater = L || it;
  }
  ot.prototype.isReactComponent = {}, ot.prototype.setState = function(v, q) {
    if (typeof v != "object" && typeof v != "function" && v != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, v, q, "setState");
  }, ot.prototype.forceUpdate = function(v) {
    this.updater.enqueueForceUpdate(this, v, "forceUpdate");
  };
  function cn() {
  }
  cn.prototype = ot.prototype;
  function Be(v, q, L) {
    this.props = v, this.context = q, this.refs = Et, this.updater = L || it;
  }
  var mt = Be.prototype = new cn();
  mt.constructor = Be, rt(mt, ot.prototype), mt.isPureReactComponent = !0;
  var Le = Array.isArray;
  function Fe() {
  }
  var ue = { H: null, A: null, T: null, S: null }, ke = Object.prototype.hasOwnProperty;
  function qt(v, q, L) {
    var H = L.ref;
    return {
      $$typeof: o,
      type: v,
      key: q,
      ref: H !== void 0 ? H : null,
      props: L
    };
  }
  function Ot(v, q) {
    return qt(v.type, q, v.props);
  }
  function ft(v) {
    return typeof v == "object" && v !== null && v.$$typeof === o;
  }
  function Pe(v) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + v.replace(/[=:]/g, function(L) {
      return q[L];
    });
  }
  var rn = /\/+/g;
  function Vt(v, q) {
    return typeof v == "object" && v !== null && v.key != null ? Pe("" + v.key) : q.toString(36);
  }
  function Ze(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (typeof v.status == "string" ? v.then(Fe, Fe) : (v.status = "pending", v.then(
          function(q) {
            v.status === "pending" && (v.status = "fulfilled", v.value = q);
          },
          function(q) {
            v.status === "pending" && (v.status = "rejected", v.reason = q);
          }
        )), v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function M(v, q, L, H, $) {
    var re = typeof v;
    (re === "undefined" || re === "boolean") && (v = null);
    var J = !1;
    if (v === null) J = !0;
    else
      switch (re) {
        case "bigint":
        case "string":
        case "number":
          J = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case o:
            case i:
              J = !0;
              break;
            case I:
              return J = v._init, M(
                J(v._payload),
                q,
                L,
                H,
                $
              );
          }
      }
    if (J)
      return $ = $(v), J = H === "" ? "." + Vt(v, 0) : H, Le($) ? (L = "", J != null && (L = J.replace(rn, "$&/") + "/"), M($, q, L, "", function(de) {
        return de;
      })) : $ != null && (ft($) && ($ = Ot(
        $,
        L + ($.key == null || v && v.key === $.key ? "" : ("" + $.key).replace(
          rn,
          "$&/"
        ) + "/") + J
      )), q.push($)), 1;
    J = 0;
    var ye = H === "" ? "." : H + ":";
    if (Le(v))
      for (var ze = 0; ze < v.length; ze++)
        H = v[ze], re = ye + Vt(H, ze), J += M(
          H,
          q,
          L,
          re,
          $
        );
    else if (ze = $e(v), typeof ze == "function")
      for (v = ze.call(v), ze = 0; !(H = v.next()).done; )
        H = H.value, re = ye + Vt(H, ze++), J += M(
          H,
          q,
          L,
          re,
          $
        );
    else if (re === "object") {
      if (typeof v.then == "function")
        return M(
          Ze(v),
          q,
          L,
          H,
          $
        );
      throw q = String(v), Error(
        "Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return J;
  }
  function B(v, q, L) {
    if (v == null) return v;
    var H = [], $ = 0;
    return M(v, H, "", "", function(re) {
      return q.call(L, re, $++);
    }), H;
  }
  function K(v) {
    if (v._status === -1) {
      var q = v._result;
      q = q(), q.then(
        function(L) {
          (v._status === 0 || v._status === -1) && (v._status = 1, v._result = L);
        },
        function(L) {
          (v._status === 0 || v._status === -1) && (v._status = 2, v._result = L);
        }
      ), v._status === -1 && (v._status = 0, v._result = q);
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var te = typeof reportError == "function" ? reportError : function(v) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var q = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
        error: v
      });
      if (!window.dispatchEvent(q)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", v);
      return;
    }
    console.error(v);
  }, ne = {
    map: B,
    forEach: function(v, q, L) {
      B(
        v,
        function() {
          q.apply(this, arguments);
        },
        L
      );
    },
    count: function(v) {
      var q = 0;
      return B(v, function() {
        q++;
      }), q;
    },
    toArray: function(v) {
      return B(v, function(q) {
        return q;
      }) || [];
    },
    only: function(v) {
      if (!ft(v))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return v;
    }
  };
  return ee.Activity = X, ee.Children = ne, ee.Component = ot, ee.Fragment = s, ee.Profiler = S, ee.PureComponent = Be, ee.StrictMode = r, ee.Suspense = U, ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ue, ee.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(v) {
      return ue.H.useMemoCache(v);
    }
  }, ee.cache = function(v) {
    return function() {
      return v.apply(null, arguments);
    };
  }, ee.cacheSignal = function() {
    return null;
  }, ee.cloneElement = function(v, q, L) {
    if (v == null)
      throw Error(
        "The argument must be a React element, but you passed " + v + "."
      );
    var H = rt({}, v.props), $ = v.key;
    if (q != null)
      for (re in q.key !== void 0 && ($ = "" + q.key), q)
        !ke.call(q, re) || re === "key" || re === "__self" || re === "__source" || re === "ref" && q.ref === void 0 || (H[re] = q[re]);
    var re = arguments.length - 2;
    if (re === 1) H.children = L;
    else if (1 < re) {
      for (var J = Array(re), ye = 0; ye < re; ye++)
        J[ye] = arguments[ye + 2];
      H.children = J;
    }
    return qt(v.type, $, H);
  }, ee.createContext = function(v) {
    return v = {
      $$typeof: w,
      _currentValue: v,
      _currentValue2: v,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, v.Provider = v, v.Consumer = {
      $$typeof: R,
      _context: v
    }, v;
  }, ee.createElement = function(v, q, L) {
    var H, $ = {}, re = null;
    if (q != null)
      for (H in q.key !== void 0 && (re = "" + q.key), q)
        ke.call(q, H) && H !== "key" && H !== "__self" && H !== "__source" && ($[H] = q[H]);
    var J = arguments.length - 2;
    if (J === 1) $.children = L;
    else if (1 < J) {
      for (var ye = Array(J), ze = 0; ze < J; ze++)
        ye[ze] = arguments[ze + 2];
      $.children = ye;
    }
    if (v && v.defaultProps)
      for (H in J = v.defaultProps, J)
        $[H] === void 0 && ($[H] = J[H]);
    return qt(v, re, $);
  }, ee.createRef = function() {
    return { current: null };
  }, ee.forwardRef = function(v) {
    return { $$typeof: Y, render: v };
  }, ee.isValidElement = ft, ee.lazy = function(v) {
    return {
      $$typeof: I,
      _payload: { _status: -1, _result: v },
      _init: K
    };
  }, ee.memo = function(v, q) {
    return {
      $$typeof: O,
      type: v,
      compare: q === void 0 ? null : q
    };
  }, ee.startTransition = function(v) {
    var q = ue.T, L = {};
    ue.T = L;
    try {
      var H = v(), $ = ue.S;
      $ !== null && $(L, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(Fe, te);
    } catch (re) {
      te(re);
    } finally {
      q !== null && L.types !== null && (q.types = L.types), ue.T = q;
    }
  }, ee.unstable_useCacheRefresh = function() {
    return ue.H.useCacheRefresh();
  }, ee.use = function(v) {
    return ue.H.use(v);
  }, ee.useActionState = function(v, q, L) {
    return ue.H.useActionState(v, q, L);
  }, ee.useCallback = function(v, q) {
    return ue.H.useCallback(v, q);
  }, ee.useContext = function(v) {
    return ue.H.useContext(v);
  }, ee.useDebugValue = function() {
  }, ee.useDeferredValue = function(v, q) {
    return ue.H.useDeferredValue(v, q);
  }, ee.useEffect = function(v, q) {
    return ue.H.useEffect(v, q);
  }, ee.useEffectEvent = function(v) {
    return ue.H.useEffectEvent(v);
  }, ee.useId = function() {
    return ue.H.useId();
  }, ee.useImperativeHandle = function(v, q, L) {
    return ue.H.useImperativeHandle(v, q, L);
  }, ee.useInsertionEffect = function(v, q) {
    return ue.H.useInsertionEffect(v, q);
  }, ee.useLayoutEffect = function(v, q) {
    return ue.H.useLayoutEffect(v, q);
  }, ee.useMemo = function(v, q) {
    return ue.H.useMemo(v, q);
  }, ee.useOptimistic = function(v, q) {
    return ue.H.useOptimistic(v, q);
  }, ee.useReducer = function(v, q, L) {
    return ue.H.useReducer(v, q, L);
  }, ee.useRef = function(v) {
    return ue.H.useRef(v);
  }, ee.useState = function(v) {
    return ue.H.useState(v);
  }, ee.useSyncExternalStore = function(v, q, L) {
    return ue.H.useSyncExternalStore(
      v,
      q,
      L
    );
  }, ee.useTransition = function() {
    return ue.H.useTransition();
  }, ee.version = "19.2.4", ee;
}
var bm;
function sf() {
  return bm || (bm = 1, Xo.exports = gg()), Xo.exports;
}
var g = sf(), Vo = { exports: {} }, us = {}, Qo = { exports: {} }, Zo = {};
var Sm;
function pg() {
  return Sm || (Sm = 1, (function(o) {
    function i(M, B) {
      var K = M.length;
      M.push(B);
      e: for (; 0 < K; ) {
        var te = K - 1 >>> 1, ne = M[te];
        if (0 < S(ne, B))
          M[te] = B, M[K] = ne, K = te;
        else break e;
      }
    }
    function s(M) {
      return M.length === 0 ? null : M[0];
    }
    function r(M) {
      if (M.length === 0) return null;
      var B = M[0], K = M.pop();
      if (K !== B) {
        M[0] = K;
        e: for (var te = 0, ne = M.length, v = ne >>> 1; te < v; ) {
          var q = 2 * (te + 1) - 1, L = M[q], H = q + 1, $ = M[H];
          if (0 > S(L, K))
            H < ne && 0 > S($, L) ? (M[te] = $, M[H] = K, te = H) : (M[te] = L, M[q] = K, te = q);
          else if (H < ne && 0 > S($, K))
            M[te] = $, M[H] = K, te = H;
          else break e;
        }
      }
      return B;
    }
    function S(M, B) {
      var K = M.sortIndex - B.sortIndex;
      return K !== 0 ? K : M.id - B.id;
    }
    if (o.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var R = performance;
      o.unstable_now = function() {
        return R.now();
      };
    } else {
      var w = Date, Y = w.now();
      o.unstable_now = function() {
        return w.now() - Y;
      };
    }
    var U = [], O = [], I = 1, X = null, fe = 3, $e = !1, it = !1, rt = !1, Et = !1, ot = typeof setTimeout == "function" ? setTimeout : null, cn = typeof clearTimeout == "function" ? clearTimeout : null, Be = typeof setImmediate < "u" ? setImmediate : null;
    function mt(M) {
      for (var B = s(O); B !== null; ) {
        if (B.callback === null) r(O);
        else if (B.startTime <= M)
          r(O), B.sortIndex = B.expirationTime, i(U, B);
        else break;
        B = s(O);
      }
    }
    function Le(M) {
      if (rt = !1, mt(M), !it)
        if (s(U) !== null)
          it = !0, Fe || (Fe = !0, Pe());
        else {
          var B = s(O);
          B !== null && Ze(Le, B.startTime - M);
        }
    }
    var Fe = !1, ue = -1, ke = 5, qt = -1;
    function Ot() {
      return Et ? !0 : !(o.unstable_now() - qt < ke);
    }
    function ft() {
      if (Et = !1, Fe) {
        var M = o.unstable_now();
        qt = M;
        var B = !0;
        try {
          e: {
            it = !1, rt && (rt = !1, cn(ue), ue = -1), $e = !0;
            var K = fe;
            try {
              t: {
                for (mt(M), X = s(U); X !== null && !(X.expirationTime > M && Ot()); ) {
                  var te = X.callback;
                  if (typeof te == "function") {
                    X.callback = null, fe = X.priorityLevel;
                    var ne = te(
                      X.expirationTime <= M
                    );
                    if (M = o.unstable_now(), typeof ne == "function") {
                      X.callback = ne, mt(M), B = !0;
                      break t;
                    }
                    X === s(U) && r(U), mt(M);
                  } else r(U);
                  X = s(U);
                }
                if (X !== null) B = !0;
                else {
                  var v = s(O);
                  v !== null && Ze(
                    Le,
                    v.startTime - M
                  ), B = !1;
                }
              }
              break e;
            } finally {
              X = null, fe = K, $e = !1;
            }
            B = void 0;
          }
        } finally {
          B ? Pe() : Fe = !1;
        }
      }
    }
    var Pe;
    if (typeof Be == "function")
      Pe = function() {
        Be(ft);
      };
    else if (typeof MessageChannel < "u") {
      var rn = new MessageChannel(), Vt = rn.port2;
      rn.port1.onmessage = ft, Pe = function() {
        Vt.postMessage(null);
      };
    } else
      Pe = function() {
        ot(ft, 0);
      };
    function Ze(M, B) {
      ue = ot(function() {
        M(o.unstable_now());
      }, B);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, o.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ke = 0 < M ? Math.floor(1e3 / M) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return fe;
    }, o.unstable_next = function(M) {
      switch (fe) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = fe;
      }
      var K = fe;
      fe = B;
      try {
        return M();
      } finally {
        fe = K;
      }
    }, o.unstable_requestPaint = function() {
      Et = !0;
    }, o.unstable_runWithPriority = function(M, B) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var K = fe;
      fe = M;
      try {
        return B();
      } finally {
        fe = K;
      }
    }, o.unstable_scheduleCallback = function(M, B, K) {
      var te = o.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? te + K : te) : K = te, M) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return ne = K + ne, M = {
        id: I++,
        callback: B,
        priorityLevel: M,
        startTime: K,
        expirationTime: ne,
        sortIndex: -1
      }, K > te ? (M.sortIndex = K, i(O, M), s(U) === null && M === s(O) && (rt ? (cn(ue), ue = -1) : rt = !0, Ze(Le, K - te))) : (M.sortIndex = ne, i(U, M), it || $e || (it = !0, Fe || (Fe = !0, Pe()))), M;
    }, o.unstable_shouldYield = Ot, o.unstable_wrapCallback = function(M) {
      var B = fe;
      return function() {
        var K = fe;
        fe = B;
        try {
          return M.apply(this, arguments);
        } finally {
          fe = K;
        }
      };
    };
  })(Zo)), Zo;
}
var Em;
function vg() {
  return Em || (Em = 1, Qo.exports = pg()), Qo.exports;
}
var Ko = { exports: {} }, Rt = {};
var _m;
function bg() {
  if (_m) return Rt;
  _m = 1;
  var o = sf();
  function i(U) {
    var O = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      O += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var I = 2; I < arguments.length; I++)
        O += "&args[]=" + encodeURIComponent(arguments[I]);
    }
    return "Minified React error #" + U + "; visit " + O + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var r = {
    d: {
      f: s,
      r: function() {
        throw Error(i(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, S = /* @__PURE__ */ Symbol.for("react.portal");
  function R(U, O, I) {
    var X = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: S,
      key: X == null ? null : "" + X,
      children: U,
      containerInfo: O,
      implementation: I
    };
  }
  var w = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Y(U, O) {
    if (U === "font") return "";
    if (typeof O == "string")
      return O === "use-credentials" ? O : "";
  }
  return Rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Rt.createPortal = function(U, O) {
    var I = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!O || O.nodeType !== 1 && O.nodeType !== 9 && O.nodeType !== 11)
      throw Error(i(299));
    return R(U, O, null, I);
  }, Rt.flushSync = function(U) {
    var O = w.T, I = r.p;
    try {
      if (w.T = null, r.p = 2, U) return U();
    } finally {
      w.T = O, r.p = I, r.d.f();
    }
  }, Rt.preconnect = function(U, O) {
    typeof U == "string" && (O ? (O = O.crossOrigin, O = typeof O == "string" ? O === "use-credentials" ? O : "" : void 0) : O = null, r.d.C(U, O));
  }, Rt.prefetchDNS = function(U) {
    typeof U == "string" && r.d.D(U);
  }, Rt.preinit = function(U, O) {
    if (typeof U == "string" && O && typeof O.as == "string") {
      var I = O.as, X = Y(I, O.crossOrigin), fe = typeof O.integrity == "string" ? O.integrity : void 0, $e = typeof O.fetchPriority == "string" ? O.fetchPriority : void 0;
      I === "style" ? r.d.S(
        U,
        typeof O.precedence == "string" ? O.precedence : void 0,
        {
          crossOrigin: X,
          integrity: fe,
          fetchPriority: $e
        }
      ) : I === "script" && r.d.X(U, {
        crossOrigin: X,
        integrity: fe,
        fetchPriority: $e,
        nonce: typeof O.nonce == "string" ? O.nonce : void 0
      });
    }
  }, Rt.preinitModule = function(U, O) {
    if (typeof U == "string")
      if (typeof O == "object" && O !== null) {
        if (O.as == null || O.as === "script") {
          var I = Y(
            O.as,
            O.crossOrigin
          );
          r.d.M(U, {
            crossOrigin: I,
            integrity: typeof O.integrity == "string" ? O.integrity : void 0,
            nonce: typeof O.nonce == "string" ? O.nonce : void 0
          });
        }
      } else O == null && r.d.M(U);
  }, Rt.preload = function(U, O) {
    if (typeof U == "string" && typeof O == "object" && O !== null && typeof O.as == "string") {
      var I = O.as, X = Y(I, O.crossOrigin);
      r.d.L(U, I, {
        crossOrigin: X,
        integrity: typeof O.integrity == "string" ? O.integrity : void 0,
        nonce: typeof O.nonce == "string" ? O.nonce : void 0,
        type: typeof O.type == "string" ? O.type : void 0,
        fetchPriority: typeof O.fetchPriority == "string" ? O.fetchPriority : void 0,
        referrerPolicy: typeof O.referrerPolicy == "string" ? O.referrerPolicy : void 0,
        imageSrcSet: typeof O.imageSrcSet == "string" ? O.imageSrcSet : void 0,
        imageSizes: typeof O.imageSizes == "string" ? O.imageSizes : void 0,
        media: typeof O.media == "string" ? O.media : void 0
      });
    }
  }, Rt.preloadModule = function(U, O) {
    if (typeof U == "string")
      if (O) {
        var I = Y(O.as, O.crossOrigin);
        r.d.m(U, {
          as: typeof O.as == "string" && O.as !== "script" ? O.as : void 0,
          crossOrigin: I,
          integrity: typeof O.integrity == "string" ? O.integrity : void 0
        });
      } else r.d.m(U);
  }, Rt.requestFormReset = function(U) {
    r.d.r(U);
  }, Rt.unstable_batchedUpdates = function(U, O) {
    return U(O);
  }, Rt.useFormState = function(U, O, I) {
    return w.H.useFormState(U, O, I);
  }, Rt.useFormStatus = function() {
    return w.H.useHostTransitionStatus();
  }, Rt.version = "19.2.4", Rt;
}
var Am;
function Sg() {
  if (Am) return Ko.exports;
  Am = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (i) {
        console.error(i);
      }
  }
  return o(), Ko.exports = bg(), Ko.exports;
}
var Tm;
function Eg() {
  if (Tm) return us;
  Tm = 1;
  var o = vg(), i = sf(), s = Sg();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function S(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function R(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function w(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Y(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function U(e) {
    if (R(e) !== e)
      throw Error(r(188));
  }
  function O(e) {
    var t = e.alternate;
    if (!t) {
      if (t = R(e), t === null) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var a = n.return;
      if (a === null) break;
      var u = a.alternate;
      if (u === null) {
        if (l = a.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (a.child === u.child) {
        for (u = a.child; u; ) {
          if (u === n) return U(a), e;
          if (u === l) return U(a), t;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== l.return) n = a, l = u;
      else {
        for (var c = !1, d = a.child; d; ) {
          if (d === n) {
            c = !0, n = a, l = u;
            break;
          }
          if (d === l) {
            c = !0, l = a, n = u;
            break;
          }
          d = d.sibling;
        }
        if (!c) {
          for (d = u.child; d; ) {
            if (d === n) {
              c = !0, n = u, l = a;
              break;
            }
            if (d === l) {
              c = !0, l = u, n = a;
              break;
            }
            d = d.sibling;
          }
          if (!c) throw Error(r(189));
        }
      }
      if (n.alternate !== l) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? e : t;
  }
  function I(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = I(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var X = Object.assign, fe = /* @__PURE__ */ Symbol.for("react.element"), $e = /* @__PURE__ */ Symbol.for("react.transitional.element"), it = /* @__PURE__ */ Symbol.for("react.portal"), rt = /* @__PURE__ */ Symbol.for("react.fragment"), Et = /* @__PURE__ */ Symbol.for("react.strict_mode"), ot = /* @__PURE__ */ Symbol.for("react.profiler"), cn = /* @__PURE__ */ Symbol.for("react.consumer"), Be = /* @__PURE__ */ Symbol.for("react.context"), mt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Le = /* @__PURE__ */ Symbol.for("react.suspense"), Fe = /* @__PURE__ */ Symbol.for("react.suspense_list"), ue = /* @__PURE__ */ Symbol.for("react.memo"), ke = /* @__PURE__ */ Symbol.for("react.lazy"), qt = /* @__PURE__ */ Symbol.for("react.activity"), Ot = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ft = Symbol.iterator;
  function Pe(e) {
    return e === null || typeof e != "object" ? null : (e = ft && e[ft] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var rn = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Vt(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === rn ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case rt:
        return "Fragment";
      case ot:
        return "Profiler";
      case Et:
        return "StrictMode";
      case Le:
        return "Suspense";
      case Fe:
        return "SuspenseList";
      case qt:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case it:
          return "Portal";
        case Be:
          return e.displayName || "Context";
        case cn:
          return (e._context.displayName || "Context") + ".Consumer";
        case mt:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ue:
          return t = e.displayName || null, t !== null ? t : Vt(e.type) || "Memo";
        case ke:
          t = e._payload, e = e._init;
          try {
            return Vt(e(t));
          } catch {
          }
      }
    return null;
  }
  var Ze = Array.isArray, M = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, te = [], ne = -1;
  function v(e) {
    return { current: e };
  }
  function q(e) {
    0 > ne || (e.current = te[ne], te[ne] = null, ne--);
  }
  function L(e, t) {
    ne++, te[ne] = e.current, e.current = t;
  }
  var H = v(null), $ = v(null), re = v(null), J = v(null);
  function ye(e, t) {
    switch (L(re, t), L($, e), L(H, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Hh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Hh(t), e = Gh(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    q(H), L(H, e);
  }
  function ze() {
    q(H), q($), q(re);
  }
  function de(e) {
    e.memoizedState !== null && L(J, e);
    var t = H.current, n = Gh(t, e.type);
    t !== n && (L($, e), L(H, n));
  }
  function dl(e) {
    $.current === e && (q(H), q($)), J.current === e && (q(J), es._currentValue = K);
  }
  var dt, Qn;
  function Zn(e) {
    if (dt === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        dt = t && t[1] || "", Qn = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + dt + e + Qn;
  }
  var se = !1;
  function ti(e, t) {
    if (!e || se) return "";
    se = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var z = function() {
                throw Error();
              };
              if (Object.defineProperty(z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z, []);
                } catch (T) {
                  var A = T;
                }
                Reflect.construct(e, [], z);
              } else {
                try {
                  z.call();
                } catch (T) {
                  A = T;
                }
                e.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (T) {
                A = T;
              }
              (z = e()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (T) {
            if (T && A && typeof T.stack == "string")
              return [T.stack, A.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = l.DetermineComponentFrameRoot(), c = u[0], d = u[1];
      if (c && d) {
        var y = c.split(`
`), _ = d.split(`
`);
        for (a = l = 0; l < y.length && !y[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; a < _.length && !_[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (l === y.length || a === _.length)
          for (l = y.length - 1, a = _.length - 1; 1 <= l && 0 <= a && y[l] !== _[a]; )
            a--;
        for (; 1 <= l && 0 <= a; l--, a--)
          if (y[l] !== _[a]) {
            if (l !== 1 || a !== 1)
              do
                if (l--, a--, 0 > a || y[l] !== _[a]) {
                  var x = `
` + y[l].replace(" at new ", " at ");
                  return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), x;
                }
              while (1 <= l && 0 <= a);
            break;
          }
      }
    } finally {
      se = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Zn(n) : "";
  }
  function ni(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Zn(e.type);
      case 16:
        return Zn("Lazy");
      case 13:
        return e.child !== t && t !== null ? Zn("Suspense Fallback") : Zn("Suspense");
      case 19:
        return Zn("SuspenseList");
      case 0:
      case 15:
        return ti(e.type, !1);
      case 11:
        return ti(e.type.render, !1);
      case 1:
        return ti(e.type, !0);
      case 31:
        return Zn("Activity");
      default:
        return "";
    }
  }
  function li(e) {
    try {
      var t = "", n = null;
      do
        t += ni(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Aa = Object.prototype.hasOwnProperty, ai = o.unstable_scheduleCallback, Ta = o.unstable_cancelCallback, Na = o.unstable_shouldYield, Gl = o.unstable_requestPaint, Ge = o.unstable_now, Qt = o.unstable_getCurrentPriorityLevel, Zt = o.unstable_ImmediatePriority, zt = o.unstable_UserBlockingPriority, _t = o.unstable_NormalPriority, Yc = o.unstable_LowPriority, ui = o.unstable_IdlePriority, yt = o.log, Dt = o.unstable_setDisableYieldValue, Ke = null, Te = null;
  function on(e) {
    if (typeof yt == "function" && Dt(e), Te && typeof Te.setStrictMode == "function")
      try {
        Te.setStrictMode(Ke, e);
      } catch {
      }
  }
  var At = Math.clz32 ? Math.clz32 : rs, cu = Math.log, ru = Math.LN2;
  function rs(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (cu(e) / ru | 0) | 0;
  }
  var Ma = 256, xa = 262144, bn = 4194304;
  function D(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
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
        return 64;
      case 128:
        return 128;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Kt(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var a = 0, u = e.suspendedLanes, c = e.pingedLanes;
    e = e.warmLanes;
    var d = l & 134217727;
    return d !== 0 ? (l = d & ~u, l !== 0 ? a = D(l) : (c &= d, c !== 0 ? a = D(c) : n || (n = d & ~e, n !== 0 && (a = D(n))))) : (d = l & ~u, d !== 0 ? a = D(d) : c !== 0 ? a = D(c) : n || (n = l & ~e, n !== 0 && (a = D(n)))), a === 0 ? 0 : t !== 0 && t !== a && (t & u) === 0 && (u = a & -a, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : a;
  }
  function Yl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function os(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function F() {
    var e = bn;
    return bn <<= 1, (bn & 62914560) === 0 && (bn = 4194304), e;
  }
  function Dn(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Sn(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function kl(e, t, n, l, a, u) {
    var c = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var d = e.entanglements, y = e.expirationTimes, _ = e.hiddenUpdates;
    for (n = c & ~n; 0 < n; ) {
      var x = 31 - At(n), z = 1 << x;
      d[x] = 0, y[x] = -1;
      var A = _[x];
      if (A !== null)
        for (_[x] = null, x = 0; x < A.length; x++) {
          var T = A[x];
          T !== null && (T.lane &= -536870913);
        }
      n &= ~z;
    }
    l !== 0 && fs(e, l, 0), u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t));
  }
  function fs(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - At(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function ii(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - At(n), a = 1 << l;
      a & t | e[l] & t && (e[l] |= t), n &= ~a;
    }
  }
  function oe(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Ca(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Ca(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function ou(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function hl() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : rm(e.type));
  }
  function Jt(e, t) {
    var n = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = n;
    }
  }
  var Ut = Math.random().toString(36).slice(2), De = "__reactFiber$" + Ut, st = "__reactProps$" + Ut, Un = "__reactContainer$" + Ut, ml = "__reactEvents$" + Ut, Xl = "__reactListeners$" + Ut, Vl = "__reactHandles$" + Ut, jt = "__reactResources$" + Ut, Kn = "__reactMarker$" + Ut;
  function yl(e) {
    delete e[De], delete e[st], delete e[ml], delete e[Xl], delete e[Vl];
  }
  function En(e) {
    var t = e[De];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Un] || n[De]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Kh(e); e !== null; ) {
            if (n = e[De]) return n;
            e = Kh(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Jn(e) {
    if (e = e[De] || e[Un]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function jn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function fn(e) {
    var t = e[jt];
    return t || (t = e[jt] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ye(e) {
    e[Kn] = !0;
  }
  var Ra = /* @__PURE__ */ new Set(), qa = {};
  function In(e, t) {
    It(e, t), It(e + "Capture", t);
  }
  function It(e, t) {
    for (qa[e] = t, e = 0; e < t.length; e++)
      Ra.add(t[e]);
  }
  var si = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), gl = {}, fu = {};
  function pl(e) {
    return Aa.call(fu, e) ? !0 : Aa.call(gl, e) ? !1 : si.test(e) ? fu[e] = !0 : (gl[e] = !0, !1);
  }
  function ci(e, t, n) {
    if (pl(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Wt(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function Wn(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  function Tt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function du(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function vl(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var a = l.get, u = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(c) {
          n = "" + c, u.call(this, c);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(c) {
          n = "" + c;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function wn(e) {
    if (!e._valueTracker) {
      var t = du(e) ? "checked" : "value";
      e._valueTracker = vl(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function ds(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = du(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Oa(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ql = /[\n"\\]/g;
  function wt(e) {
    return e.replace(
      Ql,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Bt(e, t, n, l, a, u, c, d) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Tt(t)) : e.value !== "" + Tt(t) && (e.value = "" + Tt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? _n(e, c, Tt(t)) : n != null ? _n(e, c, Tt(n)) : l != null && e.removeAttribute("value"), a == null && u != null && (e.defaultChecked = !!u), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + Tt(d) : e.removeAttribute("name");
  }
  function ri(e, t, n, l, a, u, c, d) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        wn(e);
        return;
      }
      n = n != null ? "" + Tt(n) : "", t = t != null ? "" + Tt(t) : n, d || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? a, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = d ? e.checked : !!l, e.defaultChecked = !!l, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), wn(e);
  }
  function _n(e, t, n) {
    t === "number" && Oa(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Zl(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++)
        t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Tt(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, l && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function $n(e, t, n) {
    if (t != null && (t = "" + Tt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Tt(n) : "";
  }
  function za(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(r(92));
        if (Ze(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = Tt(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), wn(e);
  }
  function Fn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var oi = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function bl(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || oi.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function fi(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var a in t)
        l = t[a], t.hasOwnProperty(a) && n[a] !== l && bl(e, a, l);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && bl(e, u, t[u]);
  }
  function Pn(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
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
  var hf = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), el = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function et(e) {
    return el.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Bn() {
  }
  var Da = null;
  function di(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ln = null, Lt = null;
  function hs(e) {
    var t = Jn(e);
    if (t && (e = t.stateNode)) {
      var n = e[st] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Bt(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + wt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var a = l[st] || null;
                if (!a) throw Error(r(90));
                Bt(
                  l,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              l = n[t], l.form === e.form && ds(l);
          }
          break e;
        case "textarea":
          $n(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Zl(e, !!n.multiple, t, !1);
      }
    }
  }
  var hi = !1;
  function ms(e, t, n) {
    if (hi) return e(t, n);
    hi = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (hi = !1, (Ln !== null || Lt !== null) && (sc(), Ln && (t = Ln, e = Lt, Lt = Ln = null, hs(t), e)))
        for (t = 0; t < e.length; t++) hs(e[t]);
    }
  }
  function Ua(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[st] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
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
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        r(231, t, typeof n)
      );
    return n;
  }
  var Hn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), mi = !1;
  if (Hn)
    try {
      var ja = {};
      Object.defineProperty(ja, "passive", {
        get: function() {
          mi = !0;
        }
      }), window.addEventListener("test", ja, ja), window.removeEventListener("test", ja, ja);
    } catch {
      mi = !1;
    }
  var tl = null, yi = null, hu = null;
  function mu() {
    if (hu) return hu;
    var e, t = yi, n = t.length, l, a = "value" in tl ? tl.value : tl.textContent, u = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var c = n - e;
    for (l = 1; l <= c && t[n - l] === a[u - l]; l++) ;
    return hu = a.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Kl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function $t() {
    return !0;
  }
  function gi() {
    return !1;
  }
  function gt(e) {
    function t(n, l, a, u, c) {
      this._reactName = n, this._targetInst = a, this.type = l, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var d in e)
        e.hasOwnProperty(d) && (n = e[d], this[d] = n ? n(u) : u[d]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? $t : gi, this.isPropagationStopped = gi, this;
    }
    return X(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = $t);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = $t);
      },
      persist: function() {
      },
      isPersistent: $t
    }), t;
  }
  var An = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Nt = gt(An), Ft = X({}, An, { view: 0, detail: 0 }), nl = gt(Ft), Jl, ll, Il, wa = X({}, Ft, {
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
    getModifierState: bu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Il && (Il && e.type === "mousemove" ? (Jl = e.screenX - Il.screenX, ll = e.screenY - Il.screenY) : ll = Jl = 0, Il = e), Jl);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ll;
    }
  }), yu = gt(wa), Wl = X({}, wa, { dataTransfer: 0 }), gu = gt(Wl), pu = X({}, Ft, { relatedTarget: 0 }), vu = gt(pu), Ba = X({}, An, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ys = gt(Ba), kc = X({}, An, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), gs = gt(kc), ps = X({}, An, { data: 0 }), pi = gt(ps), vs = {
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
    MozPrintableKey: "Unidentified"
  }, La = {
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
    224: "Meta"
  }, Ha = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Tn(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ha[e]) ? !!t[e] : !1;
  }
  function bu() {
    return Tn;
  }
  var Ga = X({}, Ft, {
    key: function(e) {
      if (e.key) {
        var t = vs[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Kl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? La[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: bu,
    charCode: function(e) {
      return e.type === "keypress" ? Kl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Kl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Pt = gt(Ga), Su = X({}, wa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Ya = gt(Su), Xc = X({}, Ft, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bu
  }), Vc = gt(Xc), Qc = X({}, An, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Zc = gt(Qc), Kc = X({}, wa, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), al = gt(Kc), Jc = X({}, An, {
    newState: 0,
    oldState: 0
  }), Ic = gt(Jc), Wc = [9, 13, 27, 32], vi = Hn && "CompositionEvent" in window, ka = null;
  Hn && "documentMode" in document && (ka = document.documentMode);
  var $c = Hn && "TextEvent" in window && !ka, bs = Hn && (!vi || ka && 8 < ka && 11 >= ka), Eu = " ", Ss = !1;
  function Sl(e, t) {
    switch (e) {
      case "keyup":
        return Wc.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function El(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var $l = !1;
  function Es(e, t) {
    switch (e) {
      case "compositionend":
        return El(t);
      case "keypress":
        return t.which !== 32 ? null : (Ss = !0, Eu);
      case "textInput":
        return e = t.data, e === Eu && Ss ? null : e;
      default:
        return null;
    }
  }
  function Fc(e, t) {
    if ($l)
      return e === "compositionend" || !vi && Sl(e, t) ? (e = mu(), hu = yi = tl = null, $l = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return bs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var _l = {
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
    week: !0
  };
  function bi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!_l[e.type] : t === "textarea";
  }
  function Xa(e, t, n, l) {
    Ln ? Lt ? Lt.push(l) : Lt = [l] : Ln = l, t = mc(t, "onChange"), 0 < t.length && (n = new Nt(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var ul = null, Va = null;
  function Pc(e) {
    Dh(e, 0);
  }
  function _u(e) {
    var t = jn(e);
    if (ds(t)) return e;
  }
  function Qa(e, t) {
    if (e === "change") return t;
  }
  var Si = !1;
  if (Hn) {
    var Au;
    if (Hn) {
      var Ei = "oninput" in document;
      if (!Ei) {
        var Tu = document.createElement("div");
        Tu.setAttribute("oninput", "return;"), Ei = typeof Tu.oninput == "function";
      }
      Au = Ei;
    } else Au = !1;
    Si = Au && (!document.documentMode || 9 < document.documentMode);
  }
  function _i() {
    ul && (ul.detachEvent("onpropertychange", _s), Va = ul = null);
  }
  function _s(e) {
    if (e.propertyName === "value" && _u(Va)) {
      var t = [];
      Xa(
        t,
        Va,
        e,
        di(e)
      ), ms(Pc, t);
    }
  }
  function Nu(e, t, n) {
    e === "focusin" ? (_i(), ul = t, Va = n, ul.attachEvent("onpropertychange", _s)) : e === "focusout" && _i();
  }
  function As(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return _u(Va);
  }
  function er(e, t) {
    if (e === "click") return _u(t);
  }
  function Ai(e, t) {
    if (e === "input" || e === "change")
      return _u(t);
  }
  function Ts(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ht = typeof Object.is == "function" ? Object.is : Ts;
  function Za(e, t) {
    if (Ht(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!Aa.call(t, a) || !Ht(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function Ti(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ns(e, t) {
    var n = Ti(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = e + n.textContent.length, e <= t && l >= t)
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Ti(n);
    }
  }
  function f(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? f(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function h(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Oa(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Oa(e.document);
    }
    return t;
  }
  function N(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var j = Hn && "documentMode" in document && 11 >= document.documentMode, G = null, P = null, ce = null, Ue = !1;
  function le(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ue || G == null || G !== Oa(l) || (l = G, "selectionStart" in l && N(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), ce && Za(ce, l) || (ce = l, l = mc(P, "onSelect"), 0 < l.length && (t = new Nt(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = G)));
  }
  function xe(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Mt = {
    animationend: xe("Animation", "AnimationEnd"),
    animationiteration: xe("Animation", "AnimationIteration"),
    animationstart: xe("Animation", "AnimationStart"),
    transitionrun: xe("Transition", "TransitionRun"),
    transitionstart: xe("Transition", "TransitionStart"),
    transitioncancel: xe("Transition", "TransitionCancel"),
    transitionend: xe("Transition", "TransitionEnd")
  }, Gt = {}, xt = {};
  Hn && (xt = document.createElement("div").style, "AnimationEvent" in window || (delete Mt.animationend.animation, delete Mt.animationiteration.animation, delete Mt.animationstart.animation), "TransitionEvent" in window || delete Mt.transitionend.transition);
  function en(e) {
    if (Gt[e]) return Gt[e];
    if (!Mt[e]) return e;
    var t = Mt[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in xt)
        return Gt[e] = t[n];
    return e;
  }
  var Al = en("animationend"), Gn = en("animationiteration"), Ni = en("animationstart"), Ms = en("transitionrun"), xs = en("transitionstart"), Q = en("transitioncancel"), Se = en("transitionend"), Xe = /* @__PURE__ */ new Map(), Ct = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ct.push("scrollEnd");
  function Je(e, t) {
    Xe.set(e, t), In(t, [e]);
  }
  var Fl = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Yt = [], Mu = 0, tr = 0;
  function Cs() {
    for (var e = Mu, t = tr = Mu = 0; t < e; ) {
      var n = Yt[t];
      Yt[t++] = null;
      var l = Yt[t];
      Yt[t++] = null;
      var a = Yt[t];
      Yt[t++] = null;
      var u = Yt[t];
      if (Yt[t++] = null, l !== null && a !== null) {
        var c = l.pending;
        c === null ? a.next = a : (a.next = c.next, c.next = a), l.pending = a;
      }
      u !== 0 && mf(n, a, u);
    }
  }
  function Rs(e, t, n, l) {
    Yt[Mu++] = e, Yt[Mu++] = t, Yt[Mu++] = n, Yt[Mu++] = l, tr |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function nr(e, t, n, l) {
    return Rs(e, t, n, l), qs(e);
  }
  function Ka(e, t) {
    return Rs(e, null, null, t), qs(e);
  }
  function mf(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var a = !1, u = e.return; u !== null; )
      u.childLanes |= n, l = u.alternate, l !== null && (l.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (a = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, a && t !== null && (a = 31 - At(n), e = u.hiddenUpdates, l = e[a], l === null ? e[a] = [t] : l.push(t), t.lane = n | 536870912), u) : null;
  }
  function qs(e) {
    if (50 < Ki)
      throw Ki = 0, fo = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var xu = {};
  function $m(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function dn(e, t, n, l) {
    return new $m(e, t, n, l);
  }
  function lr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Tl(e, t) {
    var n = e.alternate;
    return n === null ? (n = dn(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function yf(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Os(e, t, n, l, a, u) {
    var c = 0;
    if (l = e, typeof e == "function") lr(e) && (c = 1);
    else if (typeof e == "string")
      c = ng(
        e,
        n,
        H.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case qt:
          return e = dn(31, n, t, a), e.elementType = qt, e.lanes = u, e;
        case rt:
          return Ja(n.children, a, u, t);
        case Et:
          c = 8, a |= 24;
          break;
        case ot:
          return e = dn(12, n, t, a | 2), e.elementType = ot, e.lanes = u, e;
        case Le:
          return e = dn(13, n, t, a), e.elementType = Le, e.lanes = u, e;
        case Fe:
          return e = dn(19, n, t, a), e.elementType = Fe, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Be:
                c = 10;
                break e;
              case cn:
                c = 9;
                break e;
              case mt:
                c = 11;
                break e;
              case ue:
                c = 14;
                break e;
              case ke:
                c = 16, l = null;
                break e;
            }
          c = 29, n = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = dn(c, n, t, a), t.elementType = e, t.type = l, t.lanes = u, t;
  }
  function Ja(e, t, n, l) {
    return e = dn(7, e, l, t), e.lanes = n, e;
  }
  function ar(e, t, n) {
    return e = dn(6, e, null, t), e.lanes = n, e;
  }
  function gf(e) {
    var t = dn(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function ur(e, t, n) {
    return t = dn(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var pf = /* @__PURE__ */ new WeakMap();
  function Nn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = pf.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: li(t)
      }, pf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: li(t)
    };
  }
  var Cu = [], Ru = 0, zs = null, Mi = 0, Mn = [], xn = 0, Pl = null, il = 1, sl = "";
  function Nl(e, t) {
    Cu[Ru++] = Mi, Cu[Ru++] = zs, zs = e, Mi = t;
  }
  function vf(e, t, n) {
    Mn[xn++] = il, Mn[xn++] = sl, Mn[xn++] = Pl, Pl = e;
    var l = il;
    e = sl;
    var a = 32 - At(l) - 1;
    l &= ~(1 << a), n += 1;
    var u = 32 - At(t) + a;
    if (30 < u) {
      var c = a - a % 5;
      u = (l & (1 << c) - 1).toString(32), l >>= c, a -= c, il = 1 << 32 - At(t) + a | n << a | l, sl = u + e;
    } else
      il = 1 << u | n << a | l, sl = e;
  }
  function ir(e) {
    e.return !== null && (Nl(e, 1), vf(e, 1, 0));
  }
  function sr(e) {
    for (; e === zs; )
      zs = Cu[--Ru], Cu[Ru] = null, Mi = Cu[--Ru], Cu[Ru] = null;
    for (; e === Pl; )
      Pl = Mn[--xn], Mn[xn] = null, sl = Mn[--xn], Mn[xn] = null, il = Mn[--xn], Mn[xn] = null;
  }
  function bf(e, t) {
    Mn[xn++] = il, Mn[xn++] = sl, Mn[xn++] = Pl, il = t.id, sl = t.overflow, Pl = e;
  }
  var pt = null, je = null, ve = !1, ea = null, Cn = !1, cr = Error(r(519));
  function ta(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw xi(Nn(t, e)), cr;
  }
  function Sf(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[De] = e, t[st] = l, n) {
      case "dialog":
        me("cancel", t), me("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        me("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ii.length; n++)
          me(Ii[n], t);
        break;
      case "source":
        me("error", t);
        break;
      case "img":
      case "image":
      case "link":
        me("error", t), me("load", t);
        break;
      case "details":
        me("toggle", t);
        break;
      case "input":
        me("invalid", t), ri(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        me("invalid", t);
        break;
      case "textarea":
        me("invalid", t), za(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || Bh(t.textContent, n) ? (l.popover != null && (me("beforetoggle", t), me("toggle", t)), l.onScroll != null && me("scroll", t), l.onScrollEnd != null && me("scrollend", t), l.onClick != null && (t.onclick = Bn), t = !0) : t = !1, t || ta(e, !0);
  }
  function Ef(e) {
    for (pt = e.return; pt; )
      switch (pt.tag) {
        case 5:
        case 31:
        case 13:
          Cn = !1;
          return;
        case 27:
        case 3:
          Cn = !0;
          return;
        default:
          pt = pt.return;
      }
  }
  function qu(e) {
    if (e !== pt) return !1;
    if (!ve) return Ef(e), ve = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || xo(e.type, e.memoizedProps)), n = !n), n && je && ta(e), Ef(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      je = Zh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      je = Zh(e);
    } else
      t === 27 ? (t = je, ya(e.type) ? (e = zo, zo = null, je = e) : je = t) : je = pt ? qn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ia() {
    je = pt = null, ve = !1;
  }
  function rr() {
    var e = ea;
    return e !== null && (an === null ? an = e : an.push.apply(
      an,
      e
    ), ea = null), e;
  }
  function xi(e) {
    ea === null ? ea = [e] : ea.push(e);
  }
  var or = v(null), Wa = null, Ml = null;
  function na(e, t, n) {
    L(or, t._currentValue), t._currentValue = n;
  }
  function xl(e) {
    e._currentValue = or.current, q(or);
  }
  function fr(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function dr(e, t, n, l) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var u = a.dependencies;
      if (u !== null) {
        var c = a.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var d = u;
          u = a;
          for (var y = 0; y < t.length; y++)
            if (d.context === t[y]) {
              u.lanes |= n, d = u.alternate, d !== null && (d.lanes |= n), fr(
                u.return,
                n,
                e
              ), l || (c = null);
              break e;
            }
          u = d.next;
        }
      } else if (a.tag === 18) {
        if (c = a.return, c === null) throw Error(r(341));
        c.lanes |= n, u = c.alternate, u !== null && (u.lanes |= n), fr(c, n, e), c = null;
      } else c = a.child;
      if (c !== null) c.return = a;
      else
        for (c = a; c !== null; ) {
          if (c === e) {
            c = null;
            break;
          }
          if (a = c.sibling, a !== null) {
            a.return = c.return, c = a;
            break;
          }
          c = c.return;
        }
      a = c;
    }
  }
  function Ou(e, t, n, l) {
    e = null;
    for (var a = t, u = !1; a !== null; ) {
      if (!u) {
        if ((a.flags & 524288) !== 0) u = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var c = a.alternate;
        if (c === null) throw Error(r(387));
        if (c = c.memoizedProps, c !== null) {
          var d = a.type;
          Ht(a.pendingProps.value, c.value) || (e !== null ? e.push(d) : e = [d]);
        }
      } else if (a === J.current) {
        if (c = a.alternate, c === null) throw Error(r(387));
        c.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(es) : e = [es]);
      }
      a = a.return;
    }
    e !== null && dr(
      t,
      e,
      n,
      l
    ), t.flags |= 262144;
  }
  function Ds(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ht(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function $a(e) {
    Wa = e, Ml = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function vt(e) {
    return _f(Wa, e);
  }
  function Us(e, t) {
    return Wa === null && $a(e), _f(e, t);
  }
  function _f(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Ml === null) {
      if (e === null) throw Error(r(308));
      Ml = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Ml = Ml.next = t;
    return n;
  }
  var Fm = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, Pm = o.unstable_scheduleCallback, ey = o.unstable_NormalPriority, tt = {
    $$typeof: Be,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function hr() {
    return {
      controller: new Fm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ci(e) {
    e.refCount--, e.refCount === 0 && Pm(ey, function() {
      e.controller.abort();
    });
  }
  var Ri = null, mr = 0, zu = 0, Du = null;
  function ty(e, t) {
    if (Ri === null) {
      var n = Ri = [];
      mr = 0, zu = vo(), Du = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return mr++, t.then(Af, Af), t;
  }
  function Af() {
    if (--mr === 0 && Ri !== null) {
      Du !== null && (Du.status = "fulfilled");
      var e = Ri;
      Ri = null, zu = 0, Du = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function ny(e, t) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        n.push(a);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var a = 0; a < n.length; a++) (0, n[a])(t);
      },
      function(a) {
        for (l.status = "rejected", l.reason = a, a = 0; a < n.length; a++)
          (0, n[a])(void 0);
      }
    ), l;
  }
  var Tf = M.S;
  M.S = function(e, t) {
    sh = Ge(), typeof t == "object" && t !== null && typeof t.then == "function" && ty(e, t), Tf !== null && Tf(e, t);
  };
  var Fa = v(null);
  function yr() {
    var e = Fa.current;
    return e !== null ? e : Oe.pooledCache;
  }
  function js(e, t) {
    t === null ? L(Fa, Fa.current) : L(Fa, t.pool);
  }
  function Nf() {
    var e = yr();
    return e === null ? null : { parent: tt._currentValue, pool: e };
  }
  var Uu = Error(r(460)), gr = Error(r(474)), ws = Error(r(542)), Bs = { then: function() {
  } };
  function Mf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function xf(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Bn, Bn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Rf(e), e;
      default:
        if (typeof t.status == "string") t.then(Bn, Bn);
        else {
          if (e = Oe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var a = t;
                a.status = "fulfilled", a.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var a = t;
                a.status = "rejected", a.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Rf(e), e;
        }
        throw eu = t, Uu;
    }
  }
  function Pa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (eu = n, Uu) : n;
    }
  }
  var eu = null;
  function Cf() {
    if (eu === null) throw Error(r(459));
    var e = eu;
    return eu = null, e;
  }
  function Rf(e) {
    if (e === Uu || e === ws)
      throw Error(r(483));
  }
  var ju = null, qi = 0;
  function Ls(e) {
    var t = qi;
    return qi += 1, ju === null && (ju = []), xf(ju, e, t);
  }
  function Oi(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Hs(e, t) {
    throw t.$$typeof === fe ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function qf(e) {
    function t(b, p) {
      if (e) {
        var E = b.deletions;
        E === null ? (b.deletions = [p], b.flags |= 16) : E.push(p);
      }
    }
    function n(b, p) {
      if (!e) return null;
      for (; p !== null; )
        t(b, p), p = p.sibling;
      return null;
    }
    function l(b) {
      for (var p = /* @__PURE__ */ new Map(); b !== null; )
        b.key !== null ? p.set(b.key, b) : p.set(b.index, b), b = b.sibling;
      return p;
    }
    function a(b, p) {
      return b = Tl(b, p), b.index = 0, b.sibling = null, b;
    }
    function u(b, p, E) {
      return b.index = E, e ? (E = b.alternate, E !== null ? (E = E.index, E < p ? (b.flags |= 67108866, p) : E) : (b.flags |= 67108866, p)) : (b.flags |= 1048576, p);
    }
    function c(b) {
      return e && b.alternate === null && (b.flags |= 67108866), b;
    }
    function d(b, p, E, C) {
      return p === null || p.tag !== 6 ? (p = ar(E, b.mode, C), p.return = b, p) : (p = a(p, E), p.return = b, p);
    }
    function y(b, p, E, C) {
      var Z = E.type;
      return Z === rt ? x(
        b,
        p,
        E.props.children,
        C,
        E.key
      ) : p !== null && (p.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === ke && Pa(Z) === p.type) ? (p = a(p, E.props), Oi(p, E), p.return = b, p) : (p = Os(
        E.type,
        E.key,
        E.props,
        null,
        b.mode,
        C
      ), Oi(p, E), p.return = b, p);
    }
    function _(b, p, E, C) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== E.containerInfo || p.stateNode.implementation !== E.implementation ? (p = ur(E, b.mode, C), p.return = b, p) : (p = a(p, E.children || []), p.return = b, p);
    }
    function x(b, p, E, C, Z) {
      return p === null || p.tag !== 7 ? (p = Ja(
        E,
        b.mode,
        C,
        Z
      ), p.return = b, p) : (p = a(p, E), p.return = b, p);
    }
    function z(b, p, E) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return p = ar(
          "" + p,
          b.mode,
          E
        ), p.return = b, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case $e:
            return E = Os(
              p.type,
              p.key,
              p.props,
              null,
              b.mode,
              E
            ), Oi(E, p), E.return = b, E;
          case it:
            return p = ur(
              p,
              b.mode,
              E
            ), p.return = b, p;
          case ke:
            return p = Pa(p), z(b, p, E);
        }
        if (Ze(p) || Pe(p))
          return p = Ja(
            p,
            b.mode,
            E,
            null
          ), p.return = b, p;
        if (typeof p.then == "function")
          return z(b, Ls(p), E);
        if (p.$$typeof === Be)
          return z(
            b,
            Us(b, p),
            E
          );
        Hs(b, p);
      }
      return null;
    }
    function A(b, p, E, C) {
      var Z = p !== null ? p.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return Z !== null ? null : d(b, p, "" + E, C);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case $e:
            return E.key === Z ? y(b, p, E, C) : null;
          case it:
            return E.key === Z ? _(b, p, E, C) : null;
          case ke:
            return E = Pa(E), A(b, p, E, C);
        }
        if (Ze(E) || Pe(E))
          return Z !== null ? null : x(b, p, E, C, null);
        if (typeof E.then == "function")
          return A(
            b,
            p,
            Ls(E),
            C
          );
        if (E.$$typeof === Be)
          return A(
            b,
            p,
            Us(b, E),
            C
          );
        Hs(b, E);
      }
      return null;
    }
    function T(b, p, E, C, Z) {
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return b = b.get(E) || null, d(p, b, "" + C, Z);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case $e:
            return b = b.get(
              C.key === null ? E : C.key
            ) || null, y(p, b, C, Z);
          case it:
            return b = b.get(
              C.key === null ? E : C.key
            ) || null, _(p, b, C, Z);
          case ke:
            return C = Pa(C), T(
              b,
              p,
              E,
              C,
              Z
            );
        }
        if (Ze(C) || Pe(C))
          return b = b.get(E) || null, x(p, b, C, Z, null);
        if (typeof C.then == "function")
          return T(
            b,
            p,
            E,
            Ls(C),
            Z
          );
        if (C.$$typeof === Be)
          return T(
            b,
            p,
            E,
            Us(p, C),
            Z
          );
        Hs(p, C);
      }
      return null;
    }
    function k(b, p, E, C) {
      for (var Z = null, Ee = null, V = p, ie = p = 0, pe = null; V !== null && ie < E.length; ie++) {
        V.index > ie ? (pe = V, V = null) : pe = V.sibling;
        var _e = A(
          b,
          V,
          E[ie],
          C
        );
        if (_e === null) {
          V === null && (V = pe);
          break;
        }
        e && V && _e.alternate === null && t(b, V), p = u(_e, p, ie), Ee === null ? Z = _e : Ee.sibling = _e, Ee = _e, V = pe;
      }
      if (ie === E.length)
        return n(b, V), ve && Nl(b, ie), Z;
      if (V === null) {
        for (; ie < E.length; ie++)
          V = z(b, E[ie], C), V !== null && (p = u(
            V,
            p,
            ie
          ), Ee === null ? Z = V : Ee.sibling = V, Ee = V);
        return ve && Nl(b, ie), Z;
      }
      for (V = l(V); ie < E.length; ie++)
        pe = T(
          V,
          b,
          ie,
          E[ie],
          C
        ), pe !== null && (e && pe.alternate !== null && V.delete(
          pe.key === null ? ie : pe.key
        ), p = u(
          pe,
          p,
          ie
        ), Ee === null ? Z = pe : Ee.sibling = pe, Ee = pe);
      return e && V.forEach(function(Sa) {
        return t(b, Sa);
      }), ve && Nl(b, ie), Z;
    }
    function W(b, p, E, C) {
      if (E == null) throw Error(r(151));
      for (var Z = null, Ee = null, V = p, ie = p = 0, pe = null, _e = E.next(); V !== null && !_e.done; ie++, _e = E.next()) {
        V.index > ie ? (pe = V, V = null) : pe = V.sibling;
        var Sa = A(b, V, _e.value, C);
        if (Sa === null) {
          V === null && (V = pe);
          break;
        }
        e && V && Sa.alternate === null && t(b, V), p = u(Sa, p, ie), Ee === null ? Z = Sa : Ee.sibling = Sa, Ee = Sa, V = pe;
      }
      if (_e.done)
        return n(b, V), ve && Nl(b, ie), Z;
      if (V === null) {
        for (; !_e.done; ie++, _e = E.next())
          _e = z(b, _e.value, C), _e !== null && (p = u(_e, p, ie), Ee === null ? Z = _e : Ee.sibling = _e, Ee = _e);
        return ve && Nl(b, ie), Z;
      }
      for (V = l(V); !_e.done; ie++, _e = E.next())
        _e = T(V, b, ie, _e.value, C), _e !== null && (e && _e.alternate !== null && V.delete(_e.key === null ? ie : _e.key), p = u(_e, p, ie), Ee === null ? Z = _e : Ee.sibling = _e, Ee = _e);
      return e && V.forEach(function(hg) {
        return t(b, hg);
      }), ve && Nl(b, ie), Z;
    }
    function qe(b, p, E, C) {
      if (typeof E == "object" && E !== null && E.type === rt && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case $e:
            e: {
              for (var Z = E.key; p !== null; ) {
                if (p.key === Z) {
                  if (Z = E.type, Z === rt) {
                    if (p.tag === 7) {
                      n(
                        b,
                        p.sibling
                      ), C = a(
                        p,
                        E.props.children
                      ), C.return = b, b = C;
                      break e;
                    }
                  } else if (p.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === ke && Pa(Z) === p.type) {
                    n(
                      b,
                      p.sibling
                    ), C = a(p, E.props), Oi(C, E), C.return = b, b = C;
                    break e;
                  }
                  n(b, p);
                  break;
                } else t(b, p);
                p = p.sibling;
              }
              E.type === rt ? (C = Ja(
                E.props.children,
                b.mode,
                C,
                E.key
              ), C.return = b, b = C) : (C = Os(
                E.type,
                E.key,
                E.props,
                null,
                b.mode,
                C
              ), Oi(C, E), C.return = b, b = C);
            }
            return c(b);
          case it:
            e: {
              for (Z = E.key; p !== null; ) {
                if (p.key === Z)
                  if (p.tag === 4 && p.stateNode.containerInfo === E.containerInfo && p.stateNode.implementation === E.implementation) {
                    n(
                      b,
                      p.sibling
                    ), C = a(p, E.children || []), C.return = b, b = C;
                    break e;
                  } else {
                    n(b, p);
                    break;
                  }
                else t(b, p);
                p = p.sibling;
              }
              C = ur(E, b.mode, C), C.return = b, b = C;
            }
            return c(b);
          case ke:
            return E = Pa(E), qe(
              b,
              p,
              E,
              C
            );
        }
        if (Ze(E))
          return k(
            b,
            p,
            E,
            C
          );
        if (Pe(E)) {
          if (Z = Pe(E), typeof Z != "function") throw Error(r(150));
          return E = Z.call(E), W(
            b,
            p,
            E,
            C
          );
        }
        if (typeof E.then == "function")
          return qe(
            b,
            p,
            Ls(E),
            C
          );
        if (E.$$typeof === Be)
          return qe(
            b,
            p,
            Us(b, E),
            C
          );
        Hs(b, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, p !== null && p.tag === 6 ? (n(b, p.sibling), C = a(p, E), C.return = b, b = C) : (n(b, p), C = ar(E, b.mode, C), C.return = b, b = C), c(b)) : n(b, p);
    }
    return function(b, p, E, C) {
      try {
        qi = 0;
        var Z = qe(
          b,
          p,
          E,
          C
        );
        return ju = null, Z;
      } catch (V) {
        if (V === Uu || V === ws) throw V;
        var Ee = dn(29, V, null, b.mode);
        return Ee.lanes = C, Ee.return = b, Ee;
      }
    };
  }
  var tu = qf(!0), Of = qf(!1), la = !1;
  function pr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function vr(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function aa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ua(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Ae & 2) !== 0) {
      var a = l.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t, t = qs(e), mf(e, null, n), t;
    }
    return Rs(e, l, t, n), qs(e);
  }
  function zi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, ii(e, n);
    }
  }
  function br(e, t) {
    var n = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var a = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var c = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? a = u = c : u = u.next = c, n = n.next;
        } while (n !== null);
        u === null ? a = u = t : u = u.next = t;
      } else a = u = t;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Sr = !1;
  function Di() {
    if (Sr) {
      var e = Du;
      if (e !== null) throw e;
    }
  }
  function Ui(e, t, n, l) {
    Sr = !1;
    var a = e.updateQueue;
    la = !1;
    var u = a.firstBaseUpdate, c = a.lastBaseUpdate, d = a.shared.pending;
    if (d !== null) {
      a.shared.pending = null;
      var y = d, _ = y.next;
      y.next = null, c === null ? u = _ : c.next = _, c = y;
      var x = e.alternate;
      x !== null && (x = x.updateQueue, d = x.lastBaseUpdate, d !== c && (d === null ? x.firstBaseUpdate = _ : d.next = _, x.lastBaseUpdate = y));
    }
    if (u !== null) {
      var z = a.baseState;
      c = 0, x = _ = y = null, d = u;
      do {
        var A = d.lane & -536870913, T = A !== d.lane;
        if (T ? (ge & A) === A : (l & A) === A) {
          A !== 0 && A === zu && (Sr = !0), x !== null && (x = x.next = {
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: null,
            next: null
          });
          e: {
            var k = e, W = d;
            A = t;
            var qe = n;
            switch (W.tag) {
              case 1:
                if (k = W.payload, typeof k == "function") {
                  z = k.call(qe, z, A);
                  break e;
                }
                z = k;
                break e;
              case 3:
                k.flags = k.flags & -65537 | 128;
              case 0:
                if (k = W.payload, A = typeof k == "function" ? k.call(qe, z, A) : k, A == null) break e;
                z = X({}, z, A);
                break e;
              case 2:
                la = !0;
            }
          }
          A = d.callback, A !== null && (e.flags |= 64, T && (e.flags |= 8192), T = a.callbacks, T === null ? a.callbacks = [A] : T.push(A));
        } else
          T = {
            lane: A,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          }, x === null ? (_ = x = T, y = z) : x = x.next = T, c |= A;
        if (d = d.next, d === null) {
          if (d = a.shared.pending, d === null)
            break;
          T = d, d = T.next, T.next = null, a.lastBaseUpdate = T, a.shared.pending = null;
        }
      } while (!0);
      x === null && (y = z), a.baseState = y, a.firstBaseUpdate = _, a.lastBaseUpdate = x, u === null && (a.shared.lanes = 0), oa |= c, e.lanes = c, e.memoizedState = z;
    }
  }
  function zf(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function Df(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        zf(n[e], t);
  }
  var wu = v(null), Gs = v(0);
  function Uf(e, t) {
    e = wl, L(Gs, e), L(wu, t), wl = e | t.baseLanes;
  }
  function Er() {
    L(Gs, wl), L(wu, wu.current);
  }
  function _r() {
    wl = Gs.current, q(wu), q(Gs);
  }
  var hn = v(null), Rn = null;
  function ia(e) {
    var t = e.alternate;
    L(Ie, Ie.current & 1), L(hn, e), Rn === null && (t === null || wu.current !== null || t.memoizedState !== null) && (Rn = e);
  }
  function Ar(e) {
    L(Ie, Ie.current), L(hn, e), Rn === null && (Rn = e);
  }
  function jf(e) {
    e.tag === 22 ? (L(Ie, Ie.current), L(hn, e), Rn === null && (Rn = e)) : sa();
  }
  function sa() {
    L(Ie, Ie.current), L(hn, hn.current);
  }
  function mn(e) {
    q(hn), Rn === e && (Rn = null), q(Ie);
  }
  var Ie = v(0);
  function Ys(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || qo(n) || Oo(n)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Cl = 0, ae = null, Ce = null, nt = null, ks = !1, Bu = !1, nu = !1, Xs = 0, ji = 0, Lu = null, ly = 0;
  function Ve() {
    throw Error(r(321));
  }
  function Tr(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ht(e[n], t[n])) return !1;
    return !0;
  }
  function Nr(e, t, n, l, a, u) {
    return Cl = u, ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? vd : Gr, nu = !1, u = n(l, a), nu = !1, Bu && (u = Bf(
      t,
      n,
      l,
      a
    )), wf(e), u;
  }
  function wf(e) {
    M.H = Li;
    var t = Ce !== null && Ce.next !== null;
    if (Cl = 0, nt = Ce = ae = null, ks = !1, ji = 0, Lu = null, t) throw Error(r(300));
    e === null || lt || (e = e.dependencies, e !== null && Ds(e) && (lt = !0));
  }
  function Bf(e, t, n, l) {
    ae = e;
    var a = 0;
    do {
      if (Bu && (Lu = null), ji = 0, Bu = !1, 25 <= a) throw Error(r(301));
      if (a += 1, nt = Ce = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      M.H = bd, u = t(n, l);
    } while (Bu);
    return u;
  }
  function ay() {
    var e = M.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? wi(t) : t, e = e.useState()[0], (Ce !== null ? Ce.memoizedState : null) !== e && (ae.flags |= 1024), t;
  }
  function Mr() {
    var e = Xs !== 0;
    return Xs = 0, e;
  }
  function xr(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Cr(e) {
    if (ks) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ks = !1;
    }
    Cl = 0, nt = Ce = ae = null, Bu = !1, ji = Xs = 0, Lu = null;
  }
  function kt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return nt === null ? ae.memoizedState = nt = e : nt = nt.next = e, nt;
  }
  function We() {
    if (Ce === null) {
      var e = ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ce.next;
    var t = nt === null ? ae.memoizedState : nt.next;
    if (t !== null)
      nt = t, Ce = e;
    else {
      if (e === null)
        throw ae.alternate === null ? Error(r(467)) : Error(r(310));
      Ce = e, e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null
      }, nt === null ? ae.memoizedState = nt = e : nt = nt.next = e;
    }
    return nt;
  }
  function Vs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function wi(e) {
    var t = ji;
    return ji += 1, Lu === null && (Lu = []), e = xf(Lu, e, t), t = ae, (nt === null ? t.memoizedState : nt.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? vd : Gr), e;
  }
  function Qs(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return wi(e);
      if (e.$$typeof === Be) return vt(e);
    }
    throw Error(r(438, String(e)));
  }
  function Rr(e) {
    var t = null, n = ae.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = ae.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Vs(), ae.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = Ot;
    return t.index++, n;
  }
  function Rl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Zs(e) {
    var t = We();
    return qr(t, Ce, e);
  }
  function qr(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = n;
    var a = e.baseQueue, u = l.pending;
    if (u !== null) {
      if (a !== null) {
        var c = a.next;
        a.next = u.next, u.next = c;
      }
      t.baseQueue = a = u, l.pending = null;
    }
    if (u = e.baseState, a === null) e.memoizedState = u;
    else {
      t = a.next;
      var d = c = null, y = null, _ = t, x = !1;
      do {
        var z = _.lane & -536870913;
        if (z !== _.lane ? (ge & z) === z : (Cl & z) === z) {
          var A = _.revertLane;
          if (A === 0)
            y !== null && (y = y.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), z === zu && (x = !0);
          else if ((Cl & A) === A) {
            _ = _.next, A === zu && (x = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, y === null ? (d = y = z, c = u) : y = y.next = z, ae.lanes |= A, oa |= A;
          z = _.action, nu && n(u, z), u = _.hasEagerState ? _.eagerState : n(u, z);
        } else
          A = {
            lane: z,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, y === null ? (d = y = A, c = u) : y = y.next = A, ae.lanes |= z, oa |= z;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (y === null ? c = u : y.next = d, !Ht(u, e.memoizedState) && (lt = !0, x && (n = Du, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = c, e.baseQueue = y, l.lastRenderedState = u;
    }
    return a === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Or(e) {
    var t = We(), n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, a = n.pending, u = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var c = a = a.next;
      do
        u = e(u, c.action), c = c.next;
      while (c !== a);
      Ht(u, t.memoizedState) || (lt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, l];
  }
  function Lf(e, t, n) {
    var l = ae, a = We(), u = ve;
    if (u) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = t();
    var c = !Ht(
      (Ce || a).memoizedState,
      n
    );
    if (c && (a.memoizedState = n, lt = !0), a = a.queue, Ur(Yf.bind(null, l, a, e), [
      e
    ]), a.getSnapshot !== t || c || nt !== null && nt.memoizedState.tag & 1) {
      if (l.flags |= 2048, Hu(
        9,
        { destroy: void 0 },
        Gf.bind(
          null,
          l,
          a,
          n,
          t
        ),
        null
      ), Oe === null) throw Error(r(349));
      u || (Cl & 127) !== 0 || Hf(l, t, n);
    }
    return n;
  }
  function Hf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ae.updateQueue, t === null ? (t = Vs(), ae.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Gf(e, t, n, l) {
    t.value = n, t.getSnapshot = l, kf(t) && Xf(e);
  }
  function Yf(e, t, n) {
    return n(function() {
      kf(t) && Xf(e);
    });
  }
  function kf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ht(e, n);
    } catch {
      return !0;
    }
  }
  function Xf(e) {
    var t = Ka(e, 2);
    t !== null && un(t, e, 2);
  }
  function zr(e) {
    var t = kt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), nu) {
        on(!0);
        try {
          n();
        } finally {
          on(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Rl,
      lastRenderedState: e
    }, t;
  }
  function Vf(e, t, n, l) {
    return e.baseState = n, qr(
      e,
      Ce,
      typeof l == "function" ? l : Rl
    );
  }
  function uy(e, t, n, l, a) {
    if (Is(e)) throw Error(r(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: a,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          u.listeners.push(c);
        }
      };
      M.T !== null ? n(!0) : u.isTransition = !1, l(u), n = t.pending, n === null ? (u.next = t.pending = u, Qf(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function Qf(e, t) {
    var n = t.action, l = t.payload, a = e.state;
    if (t.isTransition) {
      var u = M.T, c = {};
      M.T = c;
      try {
        var d = n(a, l), y = M.S;
        y !== null && y(c, d), Zf(e, t, d);
      } catch (_) {
        Dr(e, t, _);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), M.T = u;
      }
    } else
      try {
        u = n(a, l), Zf(e, t, u);
      } catch (_) {
        Dr(e, t, _);
      }
  }
  function Zf(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        Kf(e, t, l);
      },
      function(l) {
        return Dr(e, t, l);
      }
    ) : Kf(e, t, n);
  }
  function Kf(e, t, n) {
    t.status = "fulfilled", t.value = n, Jf(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Qf(e, n)));
  }
  function Dr(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, Jf(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Jf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function If(e, t) {
    return t;
  }
  function Wf(e, t) {
    if (ve) {
      var n = Oe.formState;
      if (n !== null) {
        e: {
          var l = ae;
          if (ve) {
            if (je) {
              t: {
                for (var a = je, u = Cn; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break t;
                  }
                  if (a = qn(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                je = qn(
                  a.nextSibling
                ), l = a.data === "F!";
                break e;
              }
            }
            ta(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = kt(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: If,
      lastRenderedState: t
    }, n.queue = l, n = yd.bind(
      null,
      ae,
      l
    ), l.dispatch = n, l = zr(!1), u = Hr.bind(
      null,
      ae,
      !1,
      l.queue
    ), l = kt(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = a, n = uy.bind(
      null,
      ae,
      a,
      u,
      n
    ), a.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function $f(e) {
    var t = We();
    return Ff(t, Ce, e);
  }
  function Ff(e, t, n) {
    if (t = qr(
      e,
      t,
      If
    )[0], e = Zs(Rl)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = wi(t);
      } catch (c) {
        throw c === Uu ? ws : c;
      }
    else l = t;
    t = We();
    var a = t.queue, u = a.dispatch;
    return n !== t.memoizedState && (ae.flags |= 2048, Hu(
      9,
      { destroy: void 0 },
      iy.bind(null, a, n),
      null
    )), [l, u, e];
  }
  function iy(e, t) {
    e.action = t;
  }
  function Pf(e) {
    var t = We(), n = Ce;
    if (n !== null)
      return Ff(t, n, e);
    We(), t = t.memoizedState, n = We();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function Hu(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = ae.updateQueue, t === null && (t = Vs(), ae.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function ed() {
    return We().memoizedState;
  }
  function Ks(e, t, n, l) {
    var a = kt();
    ae.flags |= e, a.memoizedState = Hu(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function Js(e, t, n, l) {
    var a = We();
    l = l === void 0 ? null : l;
    var u = a.memoizedState.inst;
    Ce !== null && l !== null && Tr(l, Ce.memoizedState.deps) ? a.memoizedState = Hu(t, u, n, l) : (ae.flags |= e, a.memoizedState = Hu(
      1 | t,
      u,
      n,
      l
    ));
  }
  function td(e, t) {
    Ks(8390656, 8, e, t);
  }
  function Ur(e, t) {
    Js(2048, 8, e, t);
  }
  function sy(e) {
    ae.flags |= 4;
    var t = ae.updateQueue;
    if (t === null)
      t = Vs(), ae.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function nd(e) {
    var t = We().memoizedState;
    return sy({ ref: t, nextImpl: e }), function() {
      if ((Ae & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function ld(e, t) {
    return Js(4, 2, e, t);
  }
  function ad(e, t) {
    return Js(4, 4, e, t);
  }
  function ud(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function id(e, t, n) {
    n = n != null ? n.concat([e]) : null, Js(4, 4, ud.bind(null, t, e), n);
  }
  function jr() {
  }
  function sd(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Tr(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function cd(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Tr(t, l[1]))
      return l[0];
    if (l = e(), nu) {
      on(!0);
      try {
        e();
      } finally {
        on(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function wr(e, t, n) {
    return n === void 0 || (Cl & 1073741824) !== 0 && (ge & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = rh(), ae.lanes |= e, oa |= e, n);
  }
  function rd(e, t, n, l) {
    return Ht(n, t) ? n : wu.current !== null ? (e = wr(e, n, l), Ht(e, t) || (lt = !0), e) : (Cl & 42) === 0 || (Cl & 1073741824) !== 0 && (ge & 261930) === 0 ? (lt = !0, e.memoizedState = n) : (e = rh(), ae.lanes |= e, oa |= e, t);
  }
  function od(e, t, n, l, a) {
    var u = B.p;
    B.p = u !== 0 && 8 > u ? u : 8;
    var c = M.T, d = {};
    M.T = d, Hr(e, !1, t, n);
    try {
      var y = a(), _ = M.S;
      if (_ !== null && _(d, y), y !== null && typeof y == "object" && typeof y.then == "function") {
        var x = ny(
          y,
          l
        );
        Bi(
          e,
          t,
          x,
          pn(e)
        );
      } else
        Bi(
          e,
          t,
          l,
          pn(e)
        );
    } catch (z) {
      Bi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: z },
        pn()
      );
    } finally {
      B.p = u, c !== null && d.types !== null && (c.types = d.types), M.T = c;
    }
  }
  function cy() {
  }
  function Br(e, t, n, l) {
    if (e.tag !== 5) throw Error(r(476));
    var a = fd(e).queue;
    od(
      e,
      a,
      t,
      K,
      n === null ? cy : function() {
        return dd(e), n(l);
      }
    );
  }
  function fd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rl,
        lastRenderedState: K
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rl,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function dd(e) {
    var t = fd(e);
    t.next === null && (t = e.alternate.memoizedState), Bi(
      e,
      t.next.queue,
      {},
      pn()
    );
  }
  function Lr() {
    return vt(es);
  }
  function hd() {
    return We().memoizedState;
  }
  function md() {
    return We().memoizedState;
  }
  function ry(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = pn();
          e = aa(n);
          var l = ua(t, e, n);
          l !== null && (un(l, t, n), zi(l, t, n)), t = { cache: hr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function oy(e, t, n) {
    var l = pn();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Is(e) ? gd(t, n) : (n = nr(e, t, n, l), n !== null && (un(n, e, l), pd(n, t, l)));
  }
  function yd(e, t, n) {
    var l = pn();
    Bi(e, t, n, l);
  }
  function Bi(e, t, n, l) {
    var a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Is(e)) gd(t, a);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var c = t.lastRenderedState, d = u(c, n);
          if (a.hasEagerState = !0, a.eagerState = d, Ht(d, c))
            return Rs(e, t, a, 0), Oe === null && Cs(), !1;
        } catch {
        }
      if (n = nr(e, t, a, l), n !== null)
        return un(n, e, l), pd(n, t, l), !0;
    }
    return !1;
  }
  function Hr(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: vo(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Is(e)) {
      if (t) throw Error(r(479));
    } else
      t = nr(
        e,
        n,
        l,
        2
      ), t !== null && un(t, e, 2);
  }
  function Is(e) {
    var t = e.alternate;
    return e === ae || t !== null && t === ae;
  }
  function gd(e, t) {
    Bu = ks = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function pd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, ii(e, n);
    }
  }
  var Li = {
    readContext: vt,
    use: Qs,
    useCallback: Ve,
    useContext: Ve,
    useEffect: Ve,
    useImperativeHandle: Ve,
    useLayoutEffect: Ve,
    useInsertionEffect: Ve,
    useMemo: Ve,
    useReducer: Ve,
    useRef: Ve,
    useState: Ve,
    useDebugValue: Ve,
    useDeferredValue: Ve,
    useTransition: Ve,
    useSyncExternalStore: Ve,
    useId: Ve,
    useHostTransitionStatus: Ve,
    useFormState: Ve,
    useActionState: Ve,
    useOptimistic: Ve,
    useMemoCache: Ve,
    useCacheRefresh: Ve
  };
  Li.useEffectEvent = Ve;
  var vd = {
    readContext: vt,
    use: Qs,
    useCallback: function(e, t) {
      return kt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: vt,
    useEffect: td,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Ks(
        4194308,
        4,
        ud.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Ks(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Ks(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = kt();
      t = t === void 0 ? null : t;
      var l = e();
      if (nu) {
        on(!0);
        try {
          e();
        } finally {
          on(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = kt();
      if (n !== void 0) {
        var a = n(t);
        if (nu) {
          on(!0);
          try {
            n(t);
          } finally {
            on(!1);
          }
        }
      } else a = t;
      return l.memoizedState = l.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, l.queue = e, e = e.dispatch = oy.bind(
        null,
        ae,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = kt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = zr(e);
      var t = e.queue, n = yd.bind(null, ae, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: jr,
    useDeferredValue: function(e, t) {
      var n = kt();
      return wr(n, e, t);
    },
    useTransition: function() {
      var e = zr(!1);
      return e = od.bind(
        null,
        ae,
        e.queue,
        !0,
        !1
      ), kt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = ae, a = kt();
      if (ve) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = t(), Oe === null)
          throw Error(r(349));
        (ge & 127) !== 0 || Hf(l, t, n);
      }
      a.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return a.queue = u, td(Yf.bind(null, l, u, e), [
        e
      ]), l.flags |= 2048, Hu(
        9,
        { destroy: void 0 },
        Gf.bind(
          null,
          l,
          u,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = kt(), t = Oe.identifierPrefix;
      if (ve) {
        var n = sl, l = il;
        n = (l & ~(1 << 32 - At(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Xs++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = ly++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Lr,
    useFormState: Wf,
    useActionState: Wf,
    useOptimistic: function(e) {
      var t = kt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Hr.bind(
        null,
        ae,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Rr,
    useCacheRefresh: function() {
      return kt().memoizedState = ry.bind(
        null,
        ae
      );
    },
    useEffectEvent: function(e) {
      var t = kt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Ae & 2) !== 0)
          throw Error(r(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Gr = {
    readContext: vt,
    use: Qs,
    useCallback: sd,
    useContext: vt,
    useEffect: Ur,
    useImperativeHandle: id,
    useInsertionEffect: ld,
    useLayoutEffect: ad,
    useMemo: cd,
    useReducer: Zs,
    useRef: ed,
    useState: function() {
      return Zs(Rl);
    },
    useDebugValue: jr,
    useDeferredValue: function(e, t) {
      var n = We();
      return rd(
        n,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Zs(Rl)[0], t = We().memoizedState;
      return [
        typeof e == "boolean" ? e : wi(e),
        t
      ];
    },
    useSyncExternalStore: Lf,
    useId: hd,
    useHostTransitionStatus: Lr,
    useFormState: $f,
    useActionState: $f,
    useOptimistic: function(e, t) {
      var n = We();
      return Vf(n, Ce, e, t);
    },
    useMemoCache: Rr,
    useCacheRefresh: md
  };
  Gr.useEffectEvent = nd;
  var bd = {
    readContext: vt,
    use: Qs,
    useCallback: sd,
    useContext: vt,
    useEffect: Ur,
    useImperativeHandle: id,
    useInsertionEffect: ld,
    useLayoutEffect: ad,
    useMemo: cd,
    useReducer: Or,
    useRef: ed,
    useState: function() {
      return Or(Rl);
    },
    useDebugValue: jr,
    useDeferredValue: function(e, t) {
      var n = We();
      return Ce === null ? wr(n, e, t) : rd(
        n,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Or(Rl)[0], t = We().memoizedState;
      return [
        typeof e == "boolean" ? e : wi(e),
        t
      ];
    },
    useSyncExternalStore: Lf,
    useId: hd,
    useHostTransitionStatus: Lr,
    useFormState: Pf,
    useActionState: Pf,
    useOptimistic: function(e, t) {
      var n = We();
      return Ce !== null ? Vf(n, Ce, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Rr,
    useCacheRefresh: md
  };
  bd.useEffectEvent = nd;
  function Yr(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : X({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var kr = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = pn(), a = aa(l);
      a.payload = t, n != null && (a.callback = n), t = ua(e, a, l), t !== null && (un(t, e, l), zi(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = pn(), a = aa(l);
      a.tag = 1, a.payload = t, n != null && (a.callback = n), t = ua(e, a, l), t !== null && (un(t, e, l), zi(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = pn(), l = aa(n);
      l.tag = 2, t != null && (l.callback = t), t = ua(e, l, n), t !== null && (un(t, e, n), zi(t, e, n));
    }
  };
  function Sd(e, t, n, l, a, u, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, c) : t.prototype && t.prototype.isPureReactComponent ? !Za(n, l) || !Za(a, u) : !0;
  }
  function Ed(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && kr.enqueueReplaceState(t, t.state, null);
  }
  function lu(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = X({}, n));
      for (var a in e)
        n[a] === void 0 && (n[a] = e[a]);
    }
    return n;
  }
  function _d(e) {
    Fl(e);
  }
  function Ad(e) {
    console.error(e);
  }
  function Td(e) {
    Fl(e);
  }
  function Ws(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Nd(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Xr(e, t, n) {
    return n = aa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Ws(e, t);
    }, n;
  }
  function Md(e) {
    return e = aa(e), e.tag = 3, e;
  }
  function xd(e, t, n, l) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = l.value;
      e.payload = function() {
        return a(u);
      }, e.callback = function() {
        Nd(t, n, l);
      };
    }
    var c = n.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
      Nd(t, n, l), typeof a != "function" && (fa === null ? fa = /* @__PURE__ */ new Set([this]) : fa.add(this));
      var d = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: d !== null ? d : ""
      });
    });
  }
  function fy(e, t, n, l, a) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && Ou(
        t,
        n,
        a,
        !0
      ), n = hn.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Rn === null ? cc() : n.alternate === null && Qe === 0 && (Qe = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, l === Bs ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), yo(e, l, a)), !1;
          case 22:
            return n.flags |= 65536, l === Bs ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), yo(e, l, a)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return yo(e, l, a), cc(), !1;
    }
    if (ve)
      return t = hn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, l !== cr && (e = Error(r(422), { cause: l }), xi(Nn(e, n)))) : (l !== cr && (t = Error(r(423), {
        cause: l
      }), xi(
        Nn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, l = Nn(l, n), a = Xr(
        e.stateNode,
        l,
        a
      ), br(e, a), Qe !== 4 && (Qe = 2)), !1;
    var u = Error(r(520), { cause: l });
    if (u = Nn(u, n), Zi === null ? Zi = [u] : Zi.push(u), Qe !== 4 && (Qe = 2), t === null) return !0;
    l = Nn(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Xr(n.stateNode, l, e), br(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (fa === null || !fa.has(u))))
            return n.flags |= 65536, a &= -a, n.lanes |= a, a = Md(a), xd(
              a,
              e,
              n,
              l
            ), br(n, a), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Vr = Error(r(461)), lt = !1;
  function bt(e, t, n, l) {
    t.child = e === null ? Of(t, null, n, l) : tu(
      t,
      e.child,
      n,
      l
    );
  }
  function Cd(e, t, n, l, a) {
    n = n.render;
    var u = t.ref;
    if ("ref" in l) {
      var c = {};
      for (var d in l)
        d !== "ref" && (c[d] = l[d]);
    } else c = l;
    return $a(t), l = Nr(
      e,
      t,
      n,
      c,
      u,
      a
    ), d = Mr(), e !== null && !lt ? (xr(e, t, a), ql(e, t, a)) : (ve && d && ir(t), t.flags |= 1, bt(e, t, l, a), t.child);
  }
  function Rd(e, t, n, l, a) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !lr(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, qd(
        e,
        t,
        u,
        l,
        a
      )) : (e = Os(
        n.type,
        null,
        l,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Fr(e, a)) {
      var c = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Za, n(c, l) && e.ref === t.ref)
        return ql(e, t, a);
    }
    return t.flags |= 1, e = Tl(u, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function qd(e, t, n, l, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Za(u, l) && e.ref === t.ref)
        if (lt = !1, t.pendingProps = l = u, Fr(e, a))
          (e.flags & 131072) !== 0 && (lt = !0);
        else
          return t.lanes = e.lanes, ql(e, t, a);
    }
    return Qr(
      e,
      t,
      n,
      l,
      a
    );
  }
  function Od(e, t, n, l) {
    var a = l.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, e !== null) {
          for (l = t.child = e.child, a = 0; l !== null; )
            a = a | l.lanes | l.childLanes, l = l.sibling;
          l = a & ~u;
        } else l = 0, t.child = null;
        return zd(
          e,
          t,
          u,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && js(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Uf(t, u) : Er(), jf(t);
      else
        return l = t.lanes = 536870912, zd(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          l
        );
    } else
      u !== null ? (js(t, u.cachePool), Uf(t, u), sa(), t.memoizedState = null) : (e !== null && js(t, null), Er(), sa());
    return bt(e, t, a, n), t.child;
  }
  function Hi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function zd(e, t, n, l, a) {
    var u = yr();
    return u = u === null ? null : { parent: tt._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && js(t, null), Er(), jf(t), e !== null && Ou(e, t, l, !0), t.childLanes = a, null;
  }
  function $s(e, t) {
    return t = Ps(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Dd(e, t, n) {
    return tu(t, e.child, null, n), e = $s(t, t.pendingProps), e.flags |= 2, mn(t), t.memoizedState = null, e;
  }
  function dy(e, t, n) {
    var l = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ve) {
        if (l.mode === "hidden")
          return e = $s(t, l), t.lanes = 536870912, Hi(null, e);
        if (Ar(t), (e = je) ? (e = Qh(
          e,
          Cn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Pl !== null ? { id: il, overflow: sl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = gf(e), n.return = t, t.child = n, pt = t, je = null)) : e = null, e === null) throw ta(t);
        return t.lanes = 536870912, null;
      }
      return $s(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (Ar(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = Dd(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (lt || Ou(e, t, n, !1), a = (n & e.childLanes) !== 0, lt || a) {
        if (l = Oe, l !== null && (c = oe(l, n), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, Ka(e, c), un(l, e, c), Vr;
        cc(), t = Dd(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, je = qn(c.nextSibling), pt = t, ve = !0, ea = null, Cn = !1, e !== null && bf(t, e), t = $s(t, l), t.flags |= 4096;
      return t;
    }
    return e = Tl(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Fs(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Qr(e, t, n, l, a) {
    return $a(t), n = Nr(
      e,
      t,
      n,
      l,
      void 0,
      a
    ), l = Mr(), e !== null && !lt ? (xr(e, t, a), ql(e, t, a)) : (ve && l && ir(t), t.flags |= 1, bt(e, t, n, a), t.child);
  }
  function Ud(e, t, n, l, a, u) {
    return $a(t), t.updateQueue = null, n = Bf(
      t,
      l,
      n,
      a
    ), wf(e), l = Mr(), e !== null && !lt ? (xr(e, t, u), ql(e, t, u)) : (ve && l && ir(t), t.flags |= 1, bt(e, t, n, u), t.child);
  }
  function jd(e, t, n, l, a) {
    if ($a(t), t.stateNode === null) {
      var u = xu, c = n.contextType;
      typeof c == "object" && c !== null && (u = vt(c)), u = new n(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = kr, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, pr(t), c = n.contextType, u.context = typeof c == "object" && c !== null ? vt(c) : xu, u.state = t.memoizedState, c = n.getDerivedStateFromProps, typeof c == "function" && (Yr(
        t,
        n,
        c,
        l
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && kr.enqueueReplaceState(u, u.state, null), Ui(t, l, u, a), Di(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      u = t.stateNode;
      var d = t.memoizedProps, y = lu(n, d);
      u.props = y;
      var _ = u.context, x = n.contextType;
      c = xu, typeof x == "object" && x !== null && (c = vt(x));
      var z = n.getDerivedStateFromProps;
      x = typeof z == "function" || typeof u.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, x || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d || _ !== c) && Ed(
        t,
        u,
        l,
        c
      ), la = !1;
      var A = t.memoizedState;
      u.state = A, Ui(t, l, u, a), Di(), _ = t.memoizedState, d || A !== _ || la ? (typeof z == "function" && (Yr(
        t,
        n,
        z,
        l
      ), _ = t.memoizedState), (y = la || Sd(
        t,
        n,
        y,
        l,
        A,
        _,
        c
      )) ? (x || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = _), u.props = l, u.state = _, u.context = c, l = y) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      u = t.stateNode, vr(e, t), c = t.memoizedProps, x = lu(n, c), u.props = x, z = t.pendingProps, A = u.context, _ = n.contextType, y = xu, typeof _ == "object" && _ !== null && (y = vt(_)), d = n.getDerivedStateFromProps, (_ = typeof d == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== z || A !== y) && Ed(
        t,
        u,
        l,
        y
      ), la = !1, A = t.memoizedState, u.state = A, Ui(t, l, u, a), Di();
      var T = t.memoizedState;
      c !== z || A !== T || la || e !== null && e.dependencies !== null && Ds(e.dependencies) ? (typeof d == "function" && (Yr(
        t,
        n,
        d,
        l
      ), T = t.memoizedState), (x = la || Sd(
        t,
        n,
        x,
        l,
        A,
        T,
        y
      ) || e !== null && e.dependencies !== null && Ds(e.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, T, y), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        T,
        y
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = T), u.props = l, u.state = T, u.context = y, l = x) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return u = l, Fs(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = tu(
      t,
      e.child,
      null,
      a
    ), t.child = tu(
      t,
      null,
      n,
      a
    )) : bt(e, t, n, a), t.memoizedState = u.state, e = t.child) : e = ql(
      e,
      t,
      a
    ), e;
  }
  function wd(e, t, n, l) {
    return Ia(), t.flags |= 256, bt(e, t, n, l), t.child;
  }
  var Zr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Kr(e) {
    return { baseLanes: e, cachePool: Nf() };
  }
  function Jr(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= gn), e;
  }
  function Bd(e, t, n) {
    var l = t.pendingProps, a = !1, u = (t.flags & 128) !== 0, c;
    if ((c = u) || (c = e !== null && e.memoizedState === null ? !1 : (Ie.current & 2) !== 0), c && (a = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ve) {
        if (a ? ia(t) : sa(), (e = je) ? (e = Qh(
          e,
          Cn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Pl !== null ? { id: il, overflow: sl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = gf(e), n.return = t, t.child = n, pt = t, je = null)) : e = null, e === null) throw ta(t);
        return Oo(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var d = l.children;
      return l = l.fallback, a ? (sa(), a = t.mode, d = Ps(
        { mode: "hidden", children: d },
        a
      ), l = Ja(
        l,
        a,
        n,
        null
      ), d.return = t, l.return = t, d.sibling = l, t.child = d, l = t.child, l.memoizedState = Kr(n), l.childLanes = Jr(
        e,
        c,
        n
      ), t.memoizedState = Zr, Hi(null, l)) : (ia(t), Ir(t, d));
    }
    var y = e.memoizedState;
    if (y !== null && (d = y.dehydrated, d !== null)) {
      if (u)
        t.flags & 256 ? (ia(t), t.flags &= -257, t = Wr(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (sa(), t.child = e.child, t.flags |= 128, t = null) : (sa(), d = l.fallback, a = t.mode, l = Ps(
          { mode: "visible", children: l.children },
          a
        ), d = Ja(
          d,
          a,
          n,
          null
        ), d.flags |= 2, l.return = t, d.return = t, l.sibling = d, t.child = l, tu(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = Kr(n), l.childLanes = Jr(
          e,
          c,
          n
        ), t.memoizedState = Zr, t = Hi(null, l));
      else if (ia(t), Oo(d)) {
        if (c = d.nextSibling && d.nextSibling.dataset, c) var _ = c.dgst;
        c = _, l = Error(r(419)), l.stack = "", l.digest = c, xi({ value: l, source: null, stack: null }), t = Wr(
          e,
          t,
          n
        );
      } else if (lt || Ou(e, t, n, !1), c = (n & e.childLanes) !== 0, lt || c) {
        if (c = Oe, c !== null && (l = oe(c, n), l !== 0 && l !== y.retryLane))
          throw y.retryLane = l, Ka(e, l), un(c, e, l), Vr;
        qo(d) || cc(), t = Wr(
          e,
          t,
          n
        );
      } else
        qo(d) ? (t.flags |= 192, t.child = e.child, t = null) : (e = y.treeContext, je = qn(
          d.nextSibling
        ), pt = t, ve = !0, ea = null, Cn = !1, e !== null && bf(t, e), t = Ir(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (sa(), d = l.fallback, a = t.mode, y = e.child, _ = y.sibling, l = Tl(y, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = y.subtreeFlags & 65011712, _ !== null ? d = Tl(
      _,
      d
    ) : (d = Ja(
      d,
      a,
      n,
      null
    ), d.flags |= 2), d.return = t, l.return = t, l.sibling = d, t.child = l, Hi(null, l), l = t.child, d = e.child.memoizedState, d === null ? d = Kr(n) : (a = d.cachePool, a !== null ? (y = tt._currentValue, a = a.parent !== y ? { parent: y, pool: y } : a) : a = Nf(), d = {
      baseLanes: d.baseLanes | n,
      cachePool: a
    }), l.memoizedState = d, l.childLanes = Jr(
      e,
      c,
      n
    ), t.memoizedState = Zr, Hi(e.child, l)) : (ia(t), n = e.child, e = n.sibling, n = Tl(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Ir(e, t) {
    return t = Ps(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Ps(e, t) {
    return e = dn(22, e, null, t), e.lanes = 0, e;
  }
  function Wr(e, t, n) {
    return tu(t, e.child, null, n), e = Ir(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ld(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), fr(e.return, t, n);
  }
  function $r(e, t, n, l, a, u) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: a,
      treeForkCount: u
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = l, c.tail = n, c.tailMode = a, c.treeForkCount = u);
  }
  function Hd(e, t, n) {
    var l = t.pendingProps, a = l.revealOrder, u = l.tail;
    l = l.children;
    var c = Ie.current, d = (c & 2) !== 0;
    if (d ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, L(Ie, c), bt(e, t, l, n), l = ve ? Mi : 0, !d && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Ld(e, n, t);
        else if (e.tag === 19)
          Ld(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; )
          e = n.alternate, e !== null && Ys(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), $r(
          t,
          !1,
          a,
          n,
          u,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Ys(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        $r(
          t,
          !0,
          n,
          null,
          u,
          l
        );
        break;
      case "together":
        $r(
          t,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ql(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), oa |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Ou(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, n = Tl(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Tl(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Fr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ds(e)));
  }
  function hy(e, t, n) {
    switch (t.tag) {
      case 3:
        ye(t, t.stateNode.containerInfo), na(t, tt, e.memoizedState.cache), Ia();
        break;
      case 27:
      case 5:
        de(t);
        break;
      case 4:
        ye(t, t.stateNode.containerInfo);
        break;
      case 10:
        na(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Ar(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (ia(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Bd(e, t, n) : (ia(t), e = ql(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        ia(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (Ou(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), a) {
          if (l)
            return Hd(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), L(Ie, Ie.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Od(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        na(t, tt, e.memoizedState.cache);
    }
    return ql(e, t, n);
  }
  function Gd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        lt = !0;
      else {
        if (!Fr(e, n) && (t.flags & 128) === 0)
          return lt = !1, hy(
            e,
            t,
            n
          );
        lt = (e.flags & 131072) !== 0;
      }
    else
      lt = !1, ve && (t.flags & 1048576) !== 0 && vf(t, Mi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = Pa(t.elementType), t.type = e, typeof e == "function")
            lr(e) ? (l = lu(e, l), t.tag = 1, t = jd(
              null,
              t,
              e,
              l,
              n
            )) : (t.tag = 0, t = Qr(
              null,
              t,
              e,
              l,
              n
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === mt) {
                t.tag = 11, t = Cd(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (a === ue) {
                t.tag = 14, t = Rd(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              }
            }
            throw t = Vt(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return Qr(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return l = t.type, a = lu(
          l,
          t.pendingProps
        ), jd(
          e,
          t,
          l,
          a,
          n
        );
      case 3:
        e: {
          if (ye(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          a = u.element, vr(e, t), Ui(t, l, null, n);
          var c = t.memoizedState;
          if (l = c.cache, na(t, tt, l), l !== u.cache && dr(
            t,
            [tt],
            n,
            !0
          ), Di(), l = c.element, u.isDehydrated)
            if (u = {
              element: l,
              isDehydrated: !1,
              cache: c.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = wd(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== a) {
              a = Nn(
                Error(r(424)),
                t
              ), xi(a), t = wd(
                e,
                t,
                l,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, je = qn(e.firstChild), pt = t, ve = !0, ea = null, Cn = !0, n = Of(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Ia(), l === a) {
              t = ql(
                e,
                t,
                n
              );
              break e;
            }
            bt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Fs(e, t), e === null ? (n = $h(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : ve || (n = t.type, e = t.pendingProps, l = yc(
          re.current
        ).createElement(n), l[De] = t, l[st] = e, St(l, n, e), Ye(l), t.stateNode = l) : t.memoizedState = $h(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return de(t), e === null && ve && (l = t.stateNode = Jh(
          t.type,
          t.pendingProps,
          re.current
        ), pt = t, Cn = !0, a = je, ya(t.type) ? (zo = a, je = qn(l.firstChild)) : je = a), bt(
          e,
          t,
          t.pendingProps.children,
          n
        ), Fs(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ve && ((a = l = je) && (l = Xy(
          l,
          t.type,
          t.pendingProps,
          Cn
        ), l !== null ? (t.stateNode = l, pt = t, je = qn(l.firstChild), Cn = !1, a = !0) : a = !1), a || ta(t)), de(t), a = t.type, u = t.pendingProps, c = e !== null ? e.memoizedProps : null, l = u.children, xo(a, u) ? l = null : c !== null && xo(a, c) && (t.flags |= 32), t.memoizedState !== null && (a = Nr(
          e,
          t,
          ay,
          null,
          null,
          n
        ), es._currentValue = a), Fs(e, t), bt(e, t, l, n), t.child;
      case 6:
        return e === null && ve && ((e = n = je) && (n = Vy(
          n,
          t.pendingProps,
          Cn
        ), n !== null ? (t.stateNode = n, pt = t, je = null, e = !0) : e = !1), e || ta(t)), null;
      case 13:
        return Bd(e, t, n);
      case 4:
        return ye(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = tu(
          t,
          null,
          l,
          n
        ) : bt(e, t, l, n), t.child;
      case 11:
        return Cd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return bt(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return bt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return bt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return l = t.pendingProps, na(t, t.type, l.value), bt(e, t, l.children, n), t.child;
      case 9:
        return a = t.type._context, l = t.pendingProps.children, $a(t), a = vt(a), l = l(a), t.flags |= 1, bt(e, t, l, n), t.child;
      case 14:
        return Rd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return qd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Hd(e, t, n);
      case 31:
        return dy(e, t, n);
      case 22:
        return Od(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return $a(t), l = vt(tt), e === null ? (a = yr(), a === null && (a = Oe, u = hr(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= n), a = u), t.memoizedState = { parent: l, cache: a }, pr(t), na(t, tt, a)) : ((e.lanes & n) !== 0 && (vr(e, t), Ui(t, null, null, n), Di()), a = e.memoizedState, u = t.memoizedState, a.parent !== l ? (a = { parent: l, cache: l }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), na(t, tt, l)) : (l = u.cache, na(t, tt, l), l !== a.cache && dr(
          t,
          [tt],
          n,
          !0
        ))), bt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function Ol(e) {
    e.flags |= 4;
  }
  function Pr(e, t, n, l, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (hh()) e.flags |= 8192;
        else
          throw eu = Bs, gr;
    } else e.flags &= -16777217;
  }
  function Yd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !nm(t))
      if (hh()) e.flags |= 8192;
      else
        throw eu = Bs, gr;
  }
  function ec(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? F() : 536870912, e.lanes |= t, Xu |= t);
  }
  function Gi(e, t) {
    if (!ve)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function we(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, l = 0;
    if (t)
      for (var a = e.child; a !== null; )
        n |= a.lanes | a.childLanes, l |= a.subtreeFlags & 65011712, l |= a.flags & 65011712, a.return = e, a = a.sibling;
    else
      for (a = e.child; a !== null; )
        n |= a.lanes | a.childLanes, l |= a.subtreeFlags, l |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= l, e.childLanes = n, t;
  }
  function my(e, t, n) {
    var l = t.pendingProps;
    switch (sr(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return we(t), null;
      case 1:
        return we(t), null;
      case 3:
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), xl(tt), ze(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (qu(t) ? Ol(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, rr())), we(t), null;
      case 26:
        var a = t.type, u = t.memoizedState;
        return e === null ? (Ol(t), u !== null ? (we(t), Yd(t, u)) : (we(t), Pr(
          t,
          a,
          null,
          l,
          n
        ))) : u ? u !== e.memoizedState ? (Ol(t), we(t), Yd(t, u)) : (we(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Ol(t), we(t), Pr(
          t,
          a,
          e,
          l,
          n
        )), null;
      case 27:
        if (dl(t), n = re.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Ol(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return we(t), null;
          }
          e = H.current, qu(t) ? Sf(t) : (e = Jh(a, l, n), t.stateNode = e, Ol(t));
        }
        return we(t), null;
      case 5:
        if (dl(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Ol(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return we(t), null;
          }
          if (u = H.current, qu(t))
            Sf(t);
          else {
            var c = yc(
              re.current
            );
            switch (u) {
              case 1:
                u = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                u = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    u = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    u = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    u = c.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof l.is == "string" ? c.createElement("select", {
                      is: l.is
                    }) : c.createElement("select"), l.multiple ? u.multiple = !0 : l.size && (u.size = l.size);
                    break;
                  default:
                    u = typeof l.is == "string" ? c.createElement(a, { is: l.is }) : c.createElement(a);
                }
            }
            u[De] = t, u[st] = l;
            e: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                u.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === t) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t)
                  break e;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            t.stateNode = u;
            e: switch (St(u, a, l), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Ol(t);
          }
        }
        return we(t), Pr(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Ol(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = re.current, qu(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, a = pt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
            e[De] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Bh(e.nodeValue, n)), e || ta(t, !0);
          } else
            e = yc(e).createTextNode(
              l
            ), e[De] = t, t.stateNode = e;
        }
        return we(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = qu(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[De] = t;
            } else
              Ia(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            we(t), e = !1;
          } else
            n = rr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (mn(t), t) : (mn(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return we(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = qu(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[De] = t;
            } else
              Ia(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            we(t), a = !1;
          } else
            a = rr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (mn(t), t) : (mn(t), null);
        }
        return mn(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, a = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (a = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== a && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), ec(t, t.updateQueue), we(t), null);
      case 4:
        return ze(), e === null && _o(t.stateNode.containerInfo), we(t), null;
      case 10:
        return xl(t.type), we(t), null;
      case 19:
        if (q(Ie), l = t.memoizedState, l === null) return we(t), null;
        if (a = (t.flags & 128) !== 0, u = l.rendering, u === null)
          if (a) Gi(l, !1);
          else {
            if (Qe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Ys(e), u !== null) {
                  for (t.flags |= 128, Gi(l, !1), e = u.updateQueue, t.updateQueue = e, ec(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    yf(n, e), n = n.sibling;
                  return L(
                    Ie,
                    Ie.current & 1 | 2
                  ), ve && Nl(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Ge() > uc && (t.flags |= 128, a = !0, Gi(l, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Ys(u), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, ec(t, e), Gi(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !ve)
                return we(t), null;
            } else
              2 * Ge() - l.renderingStartTime > uc && n !== 536870912 && (t.flags |= 128, a = !0, Gi(l, !1), t.lanes = 4194304);
          l.isBackwards ? (u.sibling = t.child, t.child = u) : (e = l.last, e !== null ? e.sibling = u : t.child = u, l.last = u);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Ge(), e.sibling = null, n = Ie.current, L(
          Ie,
          a ? n & 1 | 2 : n & 1
        ), ve && Nl(t, l.treeForkCount), e) : (we(t), null);
      case 22:
      case 23:
        return mn(t), _r(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : we(t), n = t.updateQueue, n !== null && ec(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && q(Fa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), xl(tt), we(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function yy(e, t) {
    switch (sr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return xl(tt), ze(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return dl(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (mn(t), t.alternate === null)
            throw Error(r(340));
          Ia();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (mn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          Ia();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return q(Ie), null;
      case 4:
        return ze(), null;
      case 10:
        return xl(t.type), null;
      case 22:
      case 23:
        return mn(t), _r(), e !== null && q(Fa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return xl(tt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function kd(e, t) {
    switch (sr(t), t.tag) {
      case 3:
        xl(tt), ze();
        break;
      case 26:
      case 27:
      case 5:
        dl(t);
        break;
      case 4:
        ze();
        break;
      case 31:
        t.memoizedState !== null && mn(t);
        break;
      case 13:
        mn(t);
        break;
      case 19:
        q(Ie);
        break;
      case 10:
        xl(t.type);
        break;
      case 22:
      case 23:
        mn(t), _r(), e !== null && q(Fa);
        break;
      case 24:
        xl(tt);
    }
  }
  function Yi(e, t) {
    try {
      var n = t.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var a = l.next;
        n = a;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var u = n.create, c = n.inst;
            l = u(), c.destroy = l;
          }
          n = n.next;
        } while (n !== a);
      }
    } catch (d) {
      Me(t, t.return, d);
    }
  }
  function ca(e, t, n) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            var c = l.inst, d = c.destroy;
            if (d !== void 0) {
              c.destroy = void 0, a = t;
              var y = n, _ = d;
              try {
                _();
              } catch (x) {
                Me(
                  a,
                  y,
                  x
                );
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (x) {
      Me(t, t.return, x);
    }
  }
  function Xd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Df(t, n);
      } catch (l) {
        Me(e, e.return, l);
      }
    }
  }
  function Vd(e, t, n) {
    n.props = lu(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      Me(e, t, l);
    }
  }
  function ki(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(l) : n.current = l;
      }
    } catch (a) {
      Me(e, t, a);
    }
  }
  function cl(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (a) {
          Me(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (a) {
          Me(e, t, a);
        }
      else n.current = null;
  }
  function Qd(e) {
    var t = e.type, n = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (a) {
      Me(e, e.return, a);
    }
  }
  function eo(e, t, n) {
    try {
      var l = e.stateNode;
      By(l, e.type, n, t), l[st] = t;
    } catch (a) {
      Me(e, e.return, a);
    }
  }
  function Zd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ya(e.type) || e.tag === 4;
  }
  function to(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Zd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ya(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function no(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Bn));
    else if (l !== 4 && (l === 27 && ya(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (no(e, t, n), e = e.sibling; e !== null; )
        no(e, t, n), e = e.sibling;
  }
  function tc(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && ya(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (tc(e, t, n), e = e.sibling; e !== null; )
        tc(e, t, n), e = e.sibling;
  }
  function Kd(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      St(t, l, n), t[De] = e, t[st] = n;
    } catch (u) {
      Me(e, e.return, u);
    }
  }
  var zl = !1, at = !1, lo = !1, Jd = typeof WeakSet == "function" ? WeakSet : Set, ht = null;
  function gy(e, t) {
    if (e = e.containerInfo, No = _c, e = h(e), N(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var a = l.anchorOffset, u = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var c = 0, d = -1, y = -1, _ = 0, x = 0, z = e, A = null;
            t: for (; ; ) {
              for (var T; z !== n || a !== 0 && z.nodeType !== 3 || (d = c + a), z !== u || l !== 0 && z.nodeType !== 3 || (y = c + l), z.nodeType === 3 && (c += z.nodeValue.length), (T = z.firstChild) !== null; )
                A = z, z = T;
              for (; ; ) {
                if (z === e) break t;
                if (A === n && ++_ === a && (d = c), A === u && ++x === l && (y = c), (T = z.nextSibling) !== null) break;
                z = A, A = z.parentNode;
              }
              z = T;
            }
            n = d === -1 || y === -1 ? null : { start: d, end: y };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Mo = { focusedElem: e, selectionRange: n }, _c = !1, ht = t; ht !== null; )
      if (t = ht, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ht = e;
      else
        for (; ht !== null; ) {
          switch (t = ht, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  a = e[n], a.ref.impl = a.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, n = t, a = u.memoizedProps, u = u.memoizedState, l = n.stateNode;
                try {
                  var k = lu(
                    n.type,
                    a
                  );
                  e = l.getSnapshotBeforeUpdate(
                    k,
                    u
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (W) {
                  Me(
                    n,
                    n.return,
                    W
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  Ro(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ro(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, ht = e;
            break;
          }
          ht = t.return;
        }
  }
  function Id(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Ul(e, n), l & 4 && Yi(5, n);
        break;
      case 1:
        if (Ul(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (c) {
              Me(n, n.return, c);
            }
          else {
            var a = lu(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                a,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              Me(
                n,
                n.return,
                c
              );
            }
          }
        l & 64 && Xd(n), l & 512 && ki(n, n.return);
        break;
      case 3:
        if (Ul(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Df(e, t);
          } catch (c) {
            Me(n, n.return, c);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Kd(n);
      case 26:
      case 5:
        Ul(e, n), t === null && l & 4 && Qd(n), l & 512 && ki(n, n.return);
        break;
      case 12:
        Ul(e, n);
        break;
      case 31:
        Ul(e, n), l & 4 && Fd(e, n);
        break;
      case 13:
        Ul(e, n), l & 4 && Pd(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Ny.bind(
          null,
          n
        ), Qy(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || zl, !l) {
          t = t !== null && t.memoizedState !== null || at, a = zl;
          var u = at;
          zl = l, (at = t) && !u ? jl(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Ul(e, n), zl = a, at = u;
        }
        break;
      case 30:
        break;
      default:
        Ul(e, n);
    }
  }
  function Wd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Wd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && yl(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var He = null, tn = !1;
  function Dl(e, t, n) {
    for (n = n.child; n !== null; )
      $d(e, t, n), n = n.sibling;
  }
  function $d(e, t, n) {
    if (Te && typeof Te.onCommitFiberUnmount == "function")
      try {
        Te.onCommitFiberUnmount(Ke, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        at || cl(n, t), Dl(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        at || cl(n, t);
        var l = He, a = tn;
        ya(n.type) && (He = n.stateNode, tn = !1), Dl(
          e,
          t,
          n
        ), $i(n.stateNode), He = l, tn = a;
        break;
      case 5:
        at || cl(n, t);
      case 6:
        if (l = He, a = tn, He = null, Dl(
          e,
          t,
          n
        ), He = l, tn = a, He !== null)
          if (tn)
            try {
              (He.nodeType === 9 ? He.body : He.nodeName === "HTML" ? He.ownerDocument.body : He).removeChild(n.stateNode);
            } catch (u) {
              Me(
                n,
                t,
                u
              );
            }
          else
            try {
              He.removeChild(n.stateNode);
            } catch (u) {
              Me(
                n,
                t,
                u
              );
            }
        break;
      case 18:
        He !== null && (tn ? (e = He, Xh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), $u(e)) : Xh(He, n.stateNode));
        break;
      case 4:
        l = He, a = tn, He = n.stateNode.containerInfo, tn = !0, Dl(
          e,
          t,
          n
        ), He = l, tn = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ca(2, n, t), at || ca(4, n, t), Dl(
          e,
          t,
          n
        );
        break;
      case 1:
        at || (cl(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && Vd(
          n,
          t,
          l
        )), Dl(
          e,
          t,
          n
        );
        break;
      case 21:
        Dl(
          e,
          t,
          n
        );
        break;
      case 22:
        at = (l = at) || n.memoizedState !== null, Dl(
          e,
          t,
          n
        ), at = l;
        break;
      default:
        Dl(
          e,
          t,
          n
        );
    }
  }
  function Fd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        $u(e);
      } catch (n) {
        Me(t, t.return, n);
      }
    }
  }
  function Pd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        $u(e);
      } catch (n) {
        Me(t, t.return, n);
      }
  }
  function py(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Jd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Jd()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function nc(e, t) {
    var n = py(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var a = My.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function nn(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l], u = e, c = t, d = c;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (ya(d.type)) {
                He = d.stateNode, tn = !1;
                break e;
              }
              break;
            case 5:
              He = d.stateNode, tn = !1;
              break e;
            case 3:
            case 4:
              He = d.stateNode.containerInfo, tn = !0;
              break e;
          }
          d = d.return;
        }
        if (He === null) throw Error(r(160));
        $d(u, c, a), He = null, tn = !1, u = a.alternate, u !== null && (u.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        eh(t, e), t = t.sibling;
  }
  var Yn = null;
  function eh(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        nn(t, e), ln(e), l & 4 && (ca(3, e, e.return), Yi(3, e), ca(5, e, e.return));
        break;
      case 1:
        nn(t, e), ln(e), l & 512 && (at || n === null || cl(n, n.return)), l & 64 && zl && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var a = Yn;
        if (nn(t, e), ln(e), l & 512 && (at || n === null || cl(n, n.return)), l & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (l) {
                    case "title":
                      u = a.getElementsByTagName("title")[0], (!u || u[Kn] || u[De] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(l), a.head.insertBefore(
                        u,
                        a.querySelector("head > title")
                      )), St(u, l, n), u[De] = e, Ye(u), l = u;
                      break e;
                    case "link":
                      var c = em(
                        "link",
                        "href",
                        a
                      ).get(l + (n.href || ""));
                      if (c) {
                        for (var d = 0; d < c.length; d++)
                          if (u = c[d], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            c.splice(d, 1);
                            break t;
                          }
                      }
                      u = a.createElement(l), St(u, l, n), a.head.appendChild(u);
                      break;
                    case "meta":
                      if (c = em(
                        "meta",
                        "content",
                        a
                      ).get(l + (n.content || ""))) {
                        for (d = 0; d < c.length; d++)
                          if (u = c[d], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            c.splice(d, 1);
                            break t;
                          }
                      }
                      u = a.createElement(l), St(u, l, n), a.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, l));
                  }
                  u[De] = e, Ye(u), l = u;
                }
                e.stateNode = l;
              } else
                tm(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Ph(
                a,
                l,
                e.memoizedProps
              );
          else
            u !== l ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, l === null ? tm(
              a,
              e.type,
              e.stateNode
            ) : Ph(
              a,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && eo(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        nn(t, e), ln(e), l & 512 && (at || n === null || cl(n, n.return)), n !== null && l & 4 && eo(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (nn(t, e), ln(e), l & 512 && (at || n === null || cl(n, n.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            Fn(a, "");
          } catch (k) {
            Me(e, e.return, k);
          }
        }
        l & 4 && e.stateNode != null && (a = e.memoizedProps, eo(
          e,
          a,
          n !== null ? n.memoizedProps : a
        )), l & 1024 && (lo = !0);
        break;
      case 6:
        if (nn(t, e), ln(e), l & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (k) {
            Me(e, e.return, k);
          }
        }
        break;
      case 3:
        if (vc = null, a = Yn, Yn = gc(t.containerInfo), nn(t, e), Yn = a, ln(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            $u(t.containerInfo);
          } catch (k) {
            Me(e, e.return, k);
          }
        lo && (lo = !1, th(e));
        break;
      case 4:
        l = Yn, Yn = gc(
          e.stateNode.containerInfo
        ), nn(t, e), ln(e), Yn = l;
        break;
      case 12:
        nn(t, e), ln(e);
        break;
      case 31:
        nn(t, e), ln(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, nc(e, l)));
        break;
      case 13:
        nn(t, e), ln(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (ac = Ge()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, nc(e, l)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var y = n !== null && n.memoizedState !== null, _ = zl, x = at;
        if (zl = _ || a, at = x || y, nn(t, e), at = x, zl = _, ln(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || y || zl || at || au(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                y = n = t;
                try {
                  if (u = y.stateNode, a)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    d = y.stateNode;
                    var z = y.memoizedProps.style, A = z != null && z.hasOwnProperty("display") ? z.display : null;
                    d.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim();
                  }
                } catch (k) {
                  Me(y, y.return, k);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                y = t;
                try {
                  y.stateNode.nodeValue = a ? "" : y.memoizedProps;
                } catch (k) {
                  Me(y, y.return, k);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                y = t;
                try {
                  var T = y.stateNode;
                  a ? Vh(T, !0) : Vh(y.stateNode, !1);
                } catch (k) {
                  Me(y, y.return, k);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), t = t.return;
            }
            n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, nc(e, n))));
        break;
      case 19:
        nn(t, e), ln(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, nc(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        nn(t, e), ln(e);
    }
  }
  function ln(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (Zd(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode, u = to(e);
            tc(e, u, a);
            break;
          case 5:
            var c = n.stateNode;
            n.flags & 32 && (Fn(c, ""), n.flags &= -33);
            var d = to(e);
            tc(e, d, c);
            break;
          case 3:
          case 4:
            var y = n.stateNode.containerInfo, _ = to(e);
            no(
              e,
              _,
              y
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (x) {
        Me(e, e.return, x);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function th(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        th(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Ul(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Id(e, t.alternate, t), t = t.sibling;
  }
  function au(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ca(4, t, t.return), au(t);
          break;
        case 1:
          cl(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Vd(
            t,
            t.return,
            n
          ), au(t);
          break;
        case 27:
          $i(t.stateNode);
        case 26:
        case 5:
          cl(t, t.return), au(t);
          break;
        case 22:
          t.memoizedState === null && au(t);
          break;
        case 30:
          au(t);
          break;
        default:
          au(t);
      }
      e = e.sibling;
    }
  }
  function jl(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, a = e, u = t, c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          jl(
            a,
            u,
            n
          ), Yi(4, u);
          break;
        case 1:
          if (jl(
            a,
            u,
            n
          ), l = u, a = l.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (_) {
              Me(l, l.return, _);
            }
          if (l = u, a = l.updateQueue, a !== null) {
            var d = l.stateNode;
            try {
              var y = a.shared.hiddenCallbacks;
              if (y !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < y.length; a++)
                  zf(y[a], d);
            } catch (_) {
              Me(l, l.return, _);
            }
          }
          n && c & 64 && Xd(u), ki(u, u.return);
          break;
        case 27:
          Kd(u);
        case 26:
        case 5:
          jl(
            a,
            u,
            n
          ), n && l === null && c & 4 && Qd(u), ki(u, u.return);
          break;
        case 12:
          jl(
            a,
            u,
            n
          );
          break;
        case 31:
          jl(
            a,
            u,
            n
          ), n && c & 4 && Fd(a, u);
          break;
        case 13:
          jl(
            a,
            u,
            n
          ), n && c & 4 && Pd(a, u);
          break;
        case 22:
          u.memoizedState === null && jl(
            a,
            u,
            n
          ), ki(u, u.return);
          break;
        case 30:
          break;
        default:
          jl(
            a,
            u,
            n
          );
      }
      t = t.sibling;
    }
  }
  function ao(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Ci(n));
  }
  function uo(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ci(e));
  }
  function kn(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        nh(
          e,
          t,
          n,
          l
        ), t = t.sibling;
  }
  function nh(e, t, n, l) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        kn(
          e,
          t,
          n,
          l
        ), a & 2048 && Yi(9, t);
        break;
      case 1:
        kn(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        kn(
          e,
          t,
          n,
          l
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ci(e)));
        break;
      case 12:
        if (a & 2048) {
          kn(
            e,
            t,
            n,
            l
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, c = u.id, d = u.onPostCommit;
            typeof d == "function" && d(
              c,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (y) {
            Me(t, t.return, y);
          }
        } else
          kn(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        kn(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        kn(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, c = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? kn(
          e,
          t,
          n,
          l
        ) : Xi(e, t) : u._visibility & 2 ? kn(
          e,
          t,
          n,
          l
        ) : (u._visibility |= 2, Gu(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && ao(c, t);
        break;
      case 24:
        kn(
          e,
          t,
          n,
          l
        ), a & 2048 && uo(t.alternate, t);
        break;
      default:
        kn(
          e,
          t,
          n,
          l
        );
    }
  }
  function Gu(e, t, n, l, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, c = t, d = n, y = l, _ = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Gu(
            u,
            c,
            d,
            y,
            a
          ), Yi(8, c);
          break;
        case 23:
          break;
        case 22:
          var x = c.stateNode;
          c.memoizedState !== null ? x._visibility & 2 ? Gu(
            u,
            c,
            d,
            y,
            a
          ) : Xi(
            u,
            c
          ) : (x._visibility |= 2, Gu(
            u,
            c,
            d,
            y,
            a
          )), a && _ & 2048 && ao(
            c.alternate,
            c
          );
          break;
        case 24:
          Gu(
            u,
            c,
            d,
            y,
            a
          ), a && _ & 2048 && uo(c.alternate, c);
          break;
        default:
          Gu(
            u,
            c,
            d,
            y,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Xi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, a = l.flags;
        switch (l.tag) {
          case 22:
            Xi(n, l), a & 2048 && ao(
              l.alternate,
              l
            );
            break;
          case 24:
            Xi(n, l), a & 2048 && uo(l.alternate, l);
            break;
          default:
            Xi(n, l);
        }
        t = t.sibling;
      }
  }
  var Vi = 8192;
  function Yu(e, t, n) {
    if (e.subtreeFlags & Vi)
      for (e = e.child; e !== null; )
        lh(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function lh(e, t, n) {
    switch (e.tag) {
      case 26:
        Yu(
          e,
          t,
          n
        ), e.flags & Vi && e.memoizedState !== null && lg(
          n,
          Yn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Yu(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var l = Yn;
        Yn = gc(e.stateNode.containerInfo), Yu(
          e,
          t,
          n
        ), Yn = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Vi, Vi = 16777216, Yu(
          e,
          t,
          n
        ), Vi = l) : Yu(
          e,
          t,
          n
        ));
        break;
      default:
        Yu(
          e,
          t,
          n
        );
    }
  }
  function ah(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Qi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ht = l, ih(
            l,
            e
          );
        }
      ah(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        uh(e), e = e.sibling;
  }
  function uh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Qi(e), e.flags & 2048 && ca(9, e, e.return);
        break;
      case 3:
        Qi(e);
        break;
      case 12:
        Qi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, lc(e)) : Qi(e);
        break;
      default:
        Qi(e);
    }
  }
  function lc(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ht = l, ih(
            l,
            e
          );
        }
      ah(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, t, t.return), lc(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, lc(t));
          break;
        default:
          lc(t);
      }
      e = e.sibling;
    }
  }
  function ih(e, t) {
    for (; ht !== null; ) {
      var n = ht;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Ci(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, ht = l;
      else
        e: for (n = e; ht !== null; ) {
          l = ht;
          var a = l.sibling, u = l.return;
          if (Wd(l), l === n) {
            ht = null;
            break e;
          }
          if (a !== null) {
            a.return = u, ht = a;
            break e;
          }
          ht = u;
        }
    }
  }
  var vy = {
    getCacheForType: function(e) {
      var t = vt(tt), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return vt(tt).controller.signal;
    }
  }, by = typeof WeakMap == "function" ? WeakMap : Map, Ae = 0, Oe = null, he = null, ge = 0, Ne = 0, yn = null, ra = !1, ku = !1, io = !1, wl = 0, Qe = 0, oa = 0, uu = 0, so = 0, gn = 0, Xu = 0, Zi = null, an = null, co = !1, ac = 0, sh = 0, uc = 1 / 0, ic = null, fa = null, ct = 0, da = null, Vu = null, Bl = 0, ro = 0, oo = null, ch = null, Ki = 0, fo = null;
  function pn() {
    return (Ae & 2) !== 0 && ge !== 0 ? ge & -ge : M.T !== null ? vo() : hl();
  }
  function rh() {
    if (gn === 0)
      if ((ge & 536870912) === 0 || ve) {
        var e = xa;
        xa <<= 1, (xa & 3932160) === 0 && (xa = 262144), gn = e;
      } else gn = 536870912;
    return e = hn.current, e !== null && (e.flags |= 32), gn;
  }
  function un(e, t, n) {
    (e === Oe && (Ne === 2 || Ne === 9) || e.cancelPendingCommit !== null) && (Qu(e, 0), ha(
      e,
      ge,
      gn,
      !1
    )), Sn(e, n), ((Ae & 2) === 0 || e !== Oe) && (e === Oe && ((Ae & 2) === 0 && (uu |= n), Qe === 4 && ha(
      e,
      ge,
      gn,
      !1
    )), rl(e));
  }
  function oh(e, t, n) {
    if ((Ae & 6) !== 0) throw Error(r(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Yl(e, t), a = l ? _y(e, t) : mo(e, t, !0), u = l;
    do {
      if (a === 0) {
        ku && !l && ha(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !Sy(n)) {
          a = mo(e, t, !1), u = !1;
          continue;
        }
        if (a === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var c = 0;
          else
            c = e.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            t = c;
            e: {
              var d = e;
              a = Zi;
              var y = d.current.memoizedState.isDehydrated;
              if (y && (Qu(d, c).flags |= 256), c = mo(
                d,
                c,
                !1
              ), c !== 2) {
                if (io && !y) {
                  d.errorRecoveryDisabledLanes |= u, uu |= u, a = 4;
                  break e;
                }
                u = an, an = a, u !== null && (an === null ? an = u : an.push.apply(
                  an,
                  u
                ));
              }
              a = c;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          Qu(e, 0), ha(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, u = a, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ha(
                l,
                t,
                gn,
                !ra
              );
              break e;
            case 2:
              an = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (a = ac + 300 - Ge(), 10 < a)) {
            if (ha(
              l,
              t,
              gn,
              !ra
            ), Kt(l, 0, !0) !== 0) break e;
            Bl = t, l.timeoutHandle = Yh(
              fh.bind(
                null,
                l,
                n,
                an,
                ic,
                co,
                t,
                gn,
                uu,
                Xu,
                ra,
                u,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          fh(
            l,
            n,
            an,
            ic,
            co,
            t,
            gn,
            uu,
            Xu,
            ra,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    rl(e);
  }
  function fh(e, t, n, l, a, u, c, d, y, _, x, z, A, T) {
    if (e.timeoutHandle = -1, z = t.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
      z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Bn
      }, lh(
        t,
        u,
        z
      );
      var k = (u & 62914560) === u ? ac - Ge() : (u & 4194048) === u ? sh - Ge() : 0;
      if (k = ag(
        z,
        k
      ), k !== null) {
        Bl = u, e.cancelPendingCommit = k(
          bh.bind(
            null,
            e,
            t,
            u,
            n,
            l,
            a,
            c,
            d,
            y,
            x,
            z,
            null,
            A,
            T
          )
        ), ha(e, u, c, !_);
        return;
      }
    }
    bh(
      e,
      t,
      u,
      n,
      l,
      a,
      c,
      d,
      y
    );
  }
  function Sy(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var a = n[l], u = a.getSnapshot;
          a = a.value;
          try {
            if (!Ht(u(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function ha(e, t, n, l) {
    t &= ~so, t &= ~uu, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var u = 31 - At(a), c = 1 << u;
      l[u] = -1, a &= ~c;
    }
    n !== 0 && fs(e, n, t);
  }
  function sc() {
    return (Ae & 6) === 0 ? (Ji(0), !1) : !0;
  }
  function ho() {
    if (he !== null) {
      if (Ne === 0)
        var e = he.return;
      else
        e = he, Ml = Wa = null, Cr(e), ju = null, qi = 0, e = he;
      for (; e !== null; )
        kd(e.alternate, e), e = e.return;
      he = null;
    }
  }
  function Qu(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, Gy(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Bl = 0, ho(), Oe = e, he = n = Tl(e.current, null), ge = t, Ne = 0, yn = null, ra = !1, ku = Yl(e, t), io = !1, Xu = gn = so = uu = oa = Qe = 0, an = Zi = null, co = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - At(l), u = 1 << a;
        t |= e[a], l &= ~u;
      }
    return wl = t, Cs(), n;
  }
  function dh(e, t) {
    ae = null, M.H = Li, t === Uu || t === ws ? (t = Cf(), Ne = 3) : t === gr ? (t = Cf(), Ne = 4) : Ne = t === Vr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, yn = t, he === null && (Qe = 1, Ws(
      e,
      Nn(t, e.current)
    ));
  }
  function hh() {
    var e = hn.current;
    return e === null ? !0 : (ge & 4194048) === ge ? Rn === null : (ge & 62914560) === ge || (ge & 536870912) !== 0 ? e === Rn : !1;
  }
  function mh() {
    var e = M.H;
    return M.H = Li, e === null ? Li : e;
  }
  function yh() {
    var e = M.A;
    return M.A = vy, e;
  }
  function cc() {
    Qe = 4, ra || (ge & 4194048) !== ge && hn.current !== null || (ku = !0), (oa & 134217727) === 0 && (uu & 134217727) === 0 || Oe === null || ha(
      Oe,
      ge,
      gn,
      !1
    );
  }
  function mo(e, t, n) {
    var l = Ae;
    Ae |= 2;
    var a = mh(), u = yh();
    (Oe !== e || ge !== t) && (ic = null, Qu(e, t)), t = !1;
    var c = Qe;
    e: do
      try {
        if (Ne !== 0 && he !== null) {
          var d = he, y = yn;
          switch (Ne) {
            case 8:
              ho(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              hn.current === null && (t = !0);
              var _ = Ne;
              if (Ne = 0, yn = null, Zu(e, d, y, _), n && ku) {
                c = 0;
                break e;
              }
              break;
            default:
              _ = Ne, Ne = 0, yn = null, Zu(e, d, y, _);
          }
        }
        Ey(), c = Qe;
        break;
      } catch (x) {
        dh(e, x);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Ml = Wa = null, Ae = l, M.H = a, M.A = u, he === null && (Oe = null, ge = 0, Cs()), c;
  }
  function Ey() {
    for (; he !== null; ) gh(he);
  }
  function _y(e, t) {
    var n = Ae;
    Ae |= 2;
    var l = mh(), a = yh();
    Oe !== e || ge !== t ? (ic = null, uc = Ge() + 500, Qu(e, t)) : ku = Yl(
      e,
      t
    );
    e: do
      try {
        if (Ne !== 0 && he !== null) {
          t = he;
          var u = yn;
          t: switch (Ne) {
            case 1:
              Ne = 0, yn = null, Zu(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Mf(u)) {
                Ne = 0, yn = null, ph(t);
                break;
              }
              t = function() {
                Ne !== 2 && Ne !== 9 || Oe !== e || (Ne = 7), rl(e);
              }, u.then(t, t);
              break e;
            case 3:
              Ne = 7;
              break e;
            case 4:
              Ne = 5;
              break e;
            case 7:
              Mf(u) ? (Ne = 0, yn = null, ph(t)) : (Ne = 0, yn = null, Zu(e, t, u, 7));
              break;
            case 5:
              var c = null;
              switch (he.tag) {
                case 26:
                  c = he.memoizedState;
                case 5:
                case 27:
                  var d = he;
                  if (c ? nm(c) : d.stateNode.complete) {
                    Ne = 0, yn = null;
                    var y = d.sibling;
                    if (y !== null) he = y;
                    else {
                      var _ = d.return;
                      _ !== null ? (he = _, rc(_)) : he = null;
                    }
                    break t;
                  }
              }
              Ne = 0, yn = null, Zu(e, t, u, 5);
              break;
            case 6:
              Ne = 0, yn = null, Zu(e, t, u, 6);
              break;
            case 8:
              ho(), Qe = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        Ay();
        break;
      } catch (x) {
        dh(e, x);
      }
    while (!0);
    return Ml = Wa = null, M.H = l, M.A = a, Ae = n, he !== null ? 0 : (Oe = null, ge = 0, Cs(), Qe);
  }
  function Ay() {
    for (; he !== null && !Na(); )
      gh(he);
  }
  function gh(e) {
    var t = Gd(e.alternate, e, wl);
    e.memoizedProps = e.pendingProps, t === null ? rc(e) : he = t;
  }
  function ph(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ud(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ge
        );
        break;
      case 11:
        t = Ud(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ge
        );
        break;
      case 5:
        Cr(t);
      default:
        kd(n, t), t = he = yf(t, wl), t = Gd(n, t, wl);
    }
    e.memoizedProps = e.pendingProps, t === null ? rc(e) : he = t;
  }
  function Zu(e, t, n, l) {
    Ml = Wa = null, Cr(t), ju = null, qi = 0;
    var a = t.return;
    try {
      if (fy(
        e,
        a,
        t,
        n,
        ge
      )) {
        Qe = 1, Ws(
          e,
          Nn(n, e.current)
        ), he = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw he = a, u;
      Qe = 1, Ws(
        e,
        Nn(n, e.current)
      ), he = null;
      return;
    }
    t.flags & 32768 ? (ve || l === 1 ? e = !0 : ku || (ge & 536870912) !== 0 ? e = !1 : (ra = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = hn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), vh(t, e)) : rc(t);
  }
  function rc(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        vh(
          t,
          ra
        );
        return;
      }
      e = t.return;
      var n = my(
        t.alternate,
        t,
        wl
      );
      if (n !== null) {
        he = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        he = t;
        return;
      }
      he = t = e;
    } while (t !== null);
    Qe === 0 && (Qe = 5);
  }
  function vh(e, t) {
    do {
      var n = yy(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, he = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        he = e;
        return;
      }
      he = e = n;
    } while (e !== null);
    Qe = 6, he = null;
  }
  function bh(e, t, n, l, a, u, c, d, y) {
    e.cancelPendingCommit = null;
    do
      oc();
    while (ct !== 0);
    if ((Ae & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (u = t.lanes | t.childLanes, u |= tr, kl(
        e,
        n,
        u,
        c,
        d,
        y
      ), e === Oe && (he = Oe = null, ge = 0), Vu = t, da = e, Bl = n, ro = u, oo = a, ch = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, xy(_t, function() {
        return Th(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null, a = B.p, B.p = 2, c = Ae, Ae |= 4;
        try {
          gy(e, t, n);
        } finally {
          Ae = c, B.p = a, M.T = l;
        }
      }
      ct = 1, Sh(), Eh(), _h();
    }
  }
  function Sh() {
    if (ct === 1) {
      ct = 0;
      var e = da, t = Vu, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = M.T, M.T = null;
        var l = B.p;
        B.p = 2;
        var a = Ae;
        Ae |= 4;
        try {
          eh(t, e);
          var u = Mo, c = h(e.containerInfo), d = u.focusedElem, y = u.selectionRange;
          if (c !== d && d && d.ownerDocument && f(
            d.ownerDocument.documentElement,
            d
          )) {
            if (y !== null && N(d)) {
              var _ = y.start, x = y.end;
              if (x === void 0 && (x = _), "selectionStart" in d)
                d.selectionStart = _, d.selectionEnd = Math.min(
                  x,
                  d.value.length
                );
              else {
                var z = d.ownerDocument || document, A = z && z.defaultView || window;
                if (A.getSelection) {
                  var T = A.getSelection(), k = d.textContent.length, W = Math.min(y.start, k), qe = y.end === void 0 ? W : Math.min(y.end, k);
                  !T.extend && W > qe && (c = qe, qe = W, W = c);
                  var b = Ns(
                    d,
                    W
                  ), p = Ns(
                    d,
                    qe
                  );
                  if (b && p && (T.rangeCount !== 1 || T.anchorNode !== b.node || T.anchorOffset !== b.offset || T.focusNode !== p.node || T.focusOffset !== p.offset)) {
                    var E = z.createRange();
                    E.setStart(b.node, b.offset), T.removeAllRanges(), W > qe ? (T.addRange(E), T.extend(p.node, p.offset)) : (E.setEnd(p.node, p.offset), T.addRange(E));
                  }
                }
              }
            }
            for (z = [], T = d; T = T.parentNode; )
              T.nodeType === 1 && z.push({
                element: T,
                left: T.scrollLeft,
                top: T.scrollTop
              });
            for (typeof d.focus == "function" && d.focus(), d = 0; d < z.length; d++) {
              var C = z[d];
              C.element.scrollLeft = C.left, C.element.scrollTop = C.top;
            }
          }
          _c = !!No, Mo = No = null;
        } finally {
          Ae = a, B.p = l, M.T = n;
        }
      }
      e.current = t, ct = 2;
    }
  }
  function Eh() {
    if (ct === 2) {
      ct = 0;
      var e = da, t = Vu, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = M.T, M.T = null;
        var l = B.p;
        B.p = 2;
        var a = Ae;
        Ae |= 4;
        try {
          Id(e, t.alternate, t);
        } finally {
          Ae = a, B.p = l, M.T = n;
        }
      }
      ct = 3;
    }
  }
  function _h() {
    if (ct === 4 || ct === 3) {
      ct = 0, Gl();
      var e = da, t = Vu, n = Bl, l = ch;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ct = 5 : (ct = 0, Vu = da = null, Ah(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (fa = null), ou(n), t = t.stateNode, Te && typeof Te.onCommitFiberRoot == "function")
        try {
          Te.onCommitFiberRoot(
            Ke,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = M.T, a = B.p, B.p = 2, M.T = null;
        try {
          for (var u = e.onRecoverableError, c = 0; c < l.length; c++) {
            var d = l[c];
            u(d.value, {
              componentStack: d.stack
            });
          }
        } finally {
          M.T = t, B.p = a;
        }
      }
      (Bl & 3) !== 0 && oc(), rl(e), a = e.pendingLanes, (n & 261930) !== 0 && (a & 42) !== 0 ? e === fo ? Ki++ : (Ki = 0, fo = e) : Ki = 0, Ji(0);
    }
  }
  function Ah(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ci(t)));
  }
  function oc() {
    return Sh(), Eh(), _h(), Th();
  }
  function Th() {
    if (ct !== 5) return !1;
    var e = da, t = ro;
    ro = 0;
    var n = ou(Bl), l = M.T, a = B.p;
    try {
      B.p = 32 > n ? 32 : n, M.T = null, n = oo, oo = null;
      var u = da, c = Bl;
      if (ct = 0, Vu = da = null, Bl = 0, (Ae & 6) !== 0) throw Error(r(331));
      var d = Ae;
      if (Ae |= 4, uh(u.current), nh(
        u,
        u.current,
        c,
        n
      ), Ae = d, Ji(0, !1), Te && typeof Te.onPostCommitFiberRoot == "function")
        try {
          Te.onPostCommitFiberRoot(Ke, u);
        } catch {
        }
      return !0;
    } finally {
      B.p = a, M.T = l, Ah(e, t);
    }
  }
  function Nh(e, t, n) {
    t = Nn(n, t), t = Xr(e.stateNode, t, 2), e = ua(e, t, 2), e !== null && (Sn(e, 2), rl(e));
  }
  function Me(e, t, n) {
    if (e.tag === 3)
      Nh(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Nh(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (fa === null || !fa.has(l))) {
            e = Nn(n, e), n = Md(2), l = ua(t, n, 2), l !== null && (xd(
              n,
              l,
              t,
              e
            ), Sn(l, 2), rl(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function yo(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new by();
      var a = /* @__PURE__ */ new Set();
      l.set(t, a);
    } else
      a = l.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(t, a));
    a.has(n) || (io = !0, a.add(n), e = Ty.bind(null, e, t, n), t.then(e, e));
  }
  function Ty(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Oe === e && (ge & n) === n && (Qe === 4 || Qe === 3 && (ge & 62914560) === ge && 300 > Ge() - ac ? (Ae & 2) === 0 && Qu(e, 0) : so |= n, Xu === ge && (Xu = 0)), rl(e);
  }
  function Mh(e, t) {
    t === 0 && (t = F()), e = Ka(e, t), e !== null && (Sn(e, t), rl(e));
  }
  function Ny(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Mh(e, n);
  }
  function My(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    l !== null && l.delete(t), Mh(e, n);
  }
  function xy(e, t) {
    return ai(e, t);
  }
  var fc = null, Ku = null, go = !1, dc = !1, po = !1, ma = 0;
  function rl(e) {
    e !== Ku && e.next === null && (Ku === null ? fc = Ku = e : Ku = Ku.next = e), dc = !0, go || (go = !0, Ry());
  }
  function Ji(e, t) {
    if (!po && dc) {
      po = !0;
      do
        for (var n = !1, l = fc; l !== null; ) {
          if (e !== 0) {
            var a = l.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var c = l.suspendedLanes, d = l.pingedLanes;
              u = (1 << 31 - At(42 | e) + 1) - 1, u &= a & ~(c & ~d), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, qh(l, u));
          } else
            u = ge, u = Kt(
              l,
              l === Oe ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || Yl(l, u) || (n = !0, qh(l, u));
          l = l.next;
        }
      while (n);
      po = !1;
    }
  }
  function Cy() {
    xh();
  }
  function xh() {
    dc = go = !1;
    var e = 0;
    ma !== 0 && Hy() && (e = ma);
    for (var t = Ge(), n = null, l = fc; l !== null; ) {
      var a = l.next, u = Ch(l, t);
      u === 0 ? (l.next = null, n === null ? fc = a : n.next = a, a === null && (Ku = n)) : (n = l, (e !== 0 || (u & 3) !== 0) && (dc = !0)), l = a;
    }
    ct !== 0 && ct !== 5 || Ji(e), ma !== 0 && (ma = 0);
  }
  function Ch(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - At(u), d = 1 << c, y = a[c];
      y === -1 ? ((d & n) === 0 || (d & l) !== 0) && (a[c] = os(d, t)) : y <= t && (e.expiredLanes |= d), u &= ~d;
    }
    if (t = Oe, n = ge, n = Kt(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (Ne === 2 || Ne === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Ta(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Yl(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && Ta(l), ou(n)) {
        case 2:
        case 8:
          n = zt;
          break;
        case 32:
          n = _t;
          break;
        case 268435456:
          n = ui;
          break;
        default:
          n = _t;
      }
      return l = Rh.bind(null, e), n = ai(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && Ta(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Rh(e, t) {
    if (ct !== 0 && ct !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (oc() && e.callbackNode !== n)
      return null;
    var l = ge;
    return l = Kt(
      e,
      e === Oe ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (oh(e, l, t), Ch(e, Ge()), e.callbackNode != null && e.callbackNode === n ? Rh.bind(null, e) : null);
  }
  function qh(e, t) {
    if (oc()) return null;
    oh(e, t, !0);
  }
  function Ry() {
    Yy(function() {
      (Ae & 6) !== 0 ? ai(
        Zt,
        Cy
      ) : xh();
    });
  }
  function vo() {
    if (ma === 0) {
      var e = zu;
      e === 0 && (e = Ma, Ma <<= 1, (Ma & 261888) === 0 && (Ma = 256)), ma = e;
    }
    return ma;
  }
  function Oh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : et("" + e);
  }
  function zh(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function qy(e, t, n, l, a) {
    if (t === "submit" && n && n.stateNode === a) {
      var u = Oh(
        (a[st] || null).action
      ), c = l.submitter;
      c && (t = (t = c[st] || null) ? Oh(t.formAction) : c.getAttribute("formAction"), t !== null && (u = t, c = null));
      var d = new Nt(
        "action",
        "action",
        null,
        l,
        a
      );
      e.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (ma !== 0) {
                  var y = c ? zh(a, c) : new FormData(a);
                  Br(
                    n,
                    {
                      pending: !0,
                      data: y,
                      method: a.method,
                      action: u
                    },
                    null,
                    y
                  );
                }
              } else
                typeof u == "function" && (d.preventDefault(), y = c ? zh(a, c) : new FormData(a), Br(
                  n,
                  {
                    pending: !0,
                    data: y,
                    method: a.method,
                    action: u
                  },
                  u,
                  y
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var bo = 0; bo < Ct.length; bo++) {
    var So = Ct[bo], Oy = So.toLowerCase(), zy = So[0].toUpperCase() + So.slice(1);
    Je(
      Oy,
      "on" + zy
    );
  }
  Je(Al, "onAnimationEnd"), Je(Gn, "onAnimationIteration"), Je(Ni, "onAnimationStart"), Je("dblclick", "onDoubleClick"), Je("focusin", "onFocus"), Je("focusout", "onBlur"), Je(Ms, "onTransitionRun"), Je(xs, "onTransitionStart"), Je(Q, "onTransitionCancel"), Je(Se, "onTransitionEnd"), It("onMouseEnter", ["mouseout", "mouseover"]), It("onMouseLeave", ["mouseout", "mouseover"]), It("onPointerEnter", ["pointerout", "pointerover"]), It("onPointerLeave", ["pointerout", "pointerover"]), In(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), In(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), In("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), In(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), In(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), In(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Dy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ii)
  );
  function Dh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], a = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var c = l.length - 1; 0 <= c; c--) {
            var d = l[c], y = d.instance, _ = d.currentTarget;
            if (d = d.listener, y !== u && a.isPropagationStopped())
              break e;
            u = d, a.currentTarget = _;
            try {
              u(a);
            } catch (x) {
              Fl(x);
            }
            a.currentTarget = null, u = y;
          }
        else
          for (c = 0; c < l.length; c++) {
            if (d = l[c], y = d.instance, _ = d.currentTarget, d = d.listener, y !== u && a.isPropagationStopped())
              break e;
            u = d, a.currentTarget = _;
            try {
              u(a);
            } catch (x) {
              Fl(x);
            }
            a.currentTarget = null, u = y;
          }
      }
    }
  }
  function me(e, t) {
    var n = t[ml];
    n === void 0 && (n = t[ml] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (Uh(t, e, 2, !1), n.add(l));
  }
  function Eo(e, t, n) {
    var l = 0;
    t && (l |= 4), Uh(
      n,
      e,
      l,
      t
    );
  }
  var hc = "_reactListening" + Math.random().toString(36).slice(2);
  function _o(e) {
    if (!e[hc]) {
      e[hc] = !0, Ra.forEach(function(n) {
        n !== "selectionchange" && (Dy.has(n) || Eo(n, !1, e), Eo(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[hc] || (t[hc] = !0, Eo("selectionchange", !1, t));
    }
  }
  function Uh(e, t, n, l) {
    switch (rm(t)) {
      case 2:
        var a = sg;
        break;
      case 8:
        a = cg;
        break;
      default:
        a = Bo;
    }
    n = a.bind(
      null,
      t,
      n,
      e
    ), a = void 0, !mi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
      passive: a
    }) : e.addEventListener(t, n, !1);
  }
  function Ao(e, t, n, l, a) {
    var u = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var c = l.tag;
        if (c === 3 || c === 4) {
          var d = l.stateNode.containerInfo;
          if (d === a) break;
          if (c === 4)
            for (c = l.return; c !== null; ) {
              var y = c.tag;
              if ((y === 3 || y === 4) && c.stateNode.containerInfo === a)
                return;
              c = c.return;
            }
          for (; d !== null; ) {
            if (c = En(d), c === null) return;
            if (y = c.tag, y === 5 || y === 6 || y === 26 || y === 27) {
              l = u = c;
              continue e;
            }
            d = d.parentNode;
          }
        }
        l = l.return;
      }
    ms(function() {
      var _ = u, x = di(n), z = [];
      e: {
        var A = Xe.get(e);
        if (A !== void 0) {
          var T = Nt, k = e;
          switch (e) {
            case "keypress":
              if (Kl(n) === 0) break e;
            case "keydown":
            case "keyup":
              T = Pt;
              break;
            case "focusin":
              k = "focus", T = vu;
              break;
            case "focusout":
              k = "blur", T = vu;
              break;
            case "beforeblur":
            case "afterblur":
              T = vu;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              T = yu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              T = gu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              T = Vc;
              break;
            case Al:
            case Gn:
            case Ni:
              T = ys;
              break;
            case Se:
              T = Zc;
              break;
            case "scroll":
            case "scrollend":
              T = nl;
              break;
            case "wheel":
              T = al;
              break;
            case "copy":
            case "cut":
            case "paste":
              T = gs;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              T = Ya;
              break;
            case "toggle":
            case "beforetoggle":
              T = Ic;
          }
          var W = (t & 4) !== 0, qe = !W && (e === "scroll" || e === "scrollend"), b = W ? A !== null ? A + "Capture" : null : A;
          W = [];
          for (var p = _, E; p !== null; ) {
            var C = p;
            if (E = C.stateNode, C = C.tag, C !== 5 && C !== 26 && C !== 27 || E === null || b === null || (C = Ua(p, b), C != null && W.push(
              Wi(p, C, E)
            )), qe) break;
            p = p.return;
          }
          0 < W.length && (A = new T(
            A,
            k,
            null,
            n,
            x
          ), z.push({ event: A, listeners: W }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (A = e === "mouseover" || e === "pointerover", T = e === "mouseout" || e === "pointerout", A && n !== Da && (k = n.relatedTarget || n.fromElement) && (En(k) || k[Un]))
            break e;
          if ((T || A) && (A = x.window === x ? x : (A = x.ownerDocument) ? A.defaultView || A.parentWindow : window, T ? (k = n.relatedTarget || n.toElement, T = _, k = k ? En(k) : null, k !== null && (qe = R(k), W = k.tag, k !== qe || W !== 5 && W !== 27 && W !== 6) && (k = null)) : (T = null, k = _), T !== k)) {
            if (W = yu, C = "onMouseLeave", b = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (W = Ya, C = "onPointerLeave", b = "onPointerEnter", p = "pointer"), qe = T == null ? A : jn(T), E = k == null ? A : jn(k), A = new W(
              C,
              p + "leave",
              T,
              n,
              x
            ), A.target = qe, A.relatedTarget = E, C = null, En(x) === _ && (W = new W(
              b,
              p + "enter",
              k,
              n,
              x
            ), W.target = E, W.relatedTarget = qe, C = W), qe = C, T && k)
              t: {
                for (W = Uy, b = T, p = k, E = 0, C = b; C; C = W(C))
                  E++;
                C = 0;
                for (var Z = p; Z; Z = W(Z))
                  C++;
                for (; 0 < E - C; )
                  b = W(b), E--;
                for (; 0 < C - E; )
                  p = W(p), C--;
                for (; E--; ) {
                  if (b === p || p !== null && b === p.alternate) {
                    W = b;
                    break t;
                  }
                  b = W(b), p = W(p);
                }
                W = null;
              }
            else W = null;
            T !== null && jh(
              z,
              A,
              T,
              W,
              !1
            ), k !== null && qe !== null && jh(
              z,
              qe,
              k,
              W,
              !0
            );
          }
        }
        e: {
          if (A = _ ? jn(_) : window, T = A.nodeName && A.nodeName.toLowerCase(), T === "select" || T === "input" && A.type === "file")
            var Ee = Qa;
          else if (bi(A))
            if (Si)
              Ee = Ai;
            else {
              Ee = As;
              var V = Nu;
            }
          else
            T = A.nodeName, !T || T.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? _ && Pn(_.elementType) && (Ee = Qa) : Ee = er;
          if (Ee && (Ee = Ee(e, _))) {
            Xa(
              z,
              Ee,
              n,
              x
            );
            break e;
          }
          V && V(e, A, _), e === "focusout" && _ && A.type === "number" && _.memoizedProps.value != null && _n(A, "number", A.value);
        }
        switch (V = _ ? jn(_) : window, e) {
          case "focusin":
            (bi(V) || V.contentEditable === "true") && (G = V, P = _, ce = null);
            break;
          case "focusout":
            ce = P = G = null;
            break;
          case "mousedown":
            Ue = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ue = !1, le(z, n, x);
            break;
          case "selectionchange":
            if (j) break;
          case "keydown":
          case "keyup":
            le(z, n, x);
        }
        var ie;
        if (vi)
          e: {
            switch (e) {
              case "compositionstart":
                var pe = "onCompositionStart";
                break e;
              case "compositionend":
                pe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                pe = "onCompositionUpdate";
                break e;
            }
            pe = void 0;
          }
        else
          $l ? Sl(e, n) && (pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (pe = "onCompositionStart");
        pe && (bs && n.locale !== "ko" && ($l || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && $l && (ie = mu()) : (tl = x, yi = "value" in tl ? tl.value : tl.textContent, $l = !0)), V = mc(_, pe), 0 < V.length && (pe = new pi(
          pe,
          e,
          null,
          n,
          x
        ), z.push({ event: pe, listeners: V }), ie ? pe.data = ie : (ie = El(n), ie !== null && (pe.data = ie)))), (ie = $c ? Es(e, n) : Fc(e, n)) && (pe = mc(_, "onBeforeInput"), 0 < pe.length && (V = new pi(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          x
        ), z.push({
          event: V,
          listeners: pe
        }), V.data = ie)), qy(
          z,
          e,
          _,
          n,
          x
        );
      }
      Dh(z, t);
    });
  }
  function Wi(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function mc(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var a = e, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = Ua(e, n), a != null && l.unshift(
        Wi(e, a, u)
      ), a = Ua(e, t), a != null && l.push(
        Wi(e, a, u)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Uy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function jh(e, t, n, l, a) {
    for (var u = t._reactName, c = []; n !== null && n !== l; ) {
      var d = n, y = d.alternate, _ = d.stateNode;
      if (d = d.tag, y !== null && y === l) break;
      d !== 5 && d !== 26 && d !== 27 || _ === null || (y = _, a ? (_ = Ua(n, u), _ != null && c.unshift(
        Wi(n, _, y)
      )) : a || (_ = Ua(n, u), _ != null && c.push(
        Wi(n, _, y)
      ))), n = n.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var jy = /\r\n?/g, wy = /\u0000|\uFFFD/g;
  function wh(e) {
    return (typeof e == "string" ? e : "" + e).replace(jy, `
`).replace(wy, "");
  }
  function Bh(e, t) {
    return t = wh(t), wh(e) === t;
  }
  function Re(e, t, n, l, a, u) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Fn(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Fn(e, "" + l);
        break;
      case "className":
        Wt(e, "class", l);
        break;
      case "tabIndex":
        Wt(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Wt(e, n, l);
        break;
      case "style":
        fi(e, l, u);
        break;
      case "data":
        if (t !== "object") {
          Wt(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = et("" + l), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (n === "formAction" ? (t !== "input" && Re(e, t, "name", a.name, a, null), Re(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Re(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Re(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Re(e, t, "encType", a.encType, a, null), Re(e, t, "method", a.method, a, null), Re(e, t, "target", a.target, a, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = et("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = Bn);
        break;
      case "onScroll":
        l != null && me("scroll", e);
        break;
      case "onScrollEnd":
        l != null && me("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(r(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = et("" + l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "" + l) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
        break;
      case "popover":
        me("beforetoggle", e), me("toggle", e), ci(e, "popover", l);
        break;
      case "xlinkActuate":
        Wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Wn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Wn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Wn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        ci(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = hf.get(n) || n, ci(e, n, l));
    }
  }
  function To(e, t, n, l, a, u) {
    switch (n) {
      case "style":
        fi(e, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(r(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Fn(e, l) : (typeof l == "number" || typeof l == "bigint") && Fn(e, "" + l);
        break;
      case "onScroll":
        l != null && me("scroll", e);
        break;
      case "onScrollEnd":
        l != null && me("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Bn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!qa.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), u = e[st] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, a), typeof l == "function")) {
              typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, a);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : ci(e, n, l);
          }
    }
  }
  function St(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        me("error", e), me("load", e);
        var l = !1, a = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var c = n[u];
            if (c != null)
              switch (u) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  Re(e, t, u, c, n, null);
              }
          }
        a && Re(e, t, "srcSet", n.srcSet, n, null), l && Re(e, t, "src", n.src, n, null);
        return;
      case "input":
        me("invalid", e);
        var d = u = c = a = null, y = null, _ = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var x = n[l];
            if (x != null)
              switch (l) {
                case "name":
                  a = x;
                  break;
                case "type":
                  c = x;
                  break;
                case "checked":
                  y = x;
                  break;
                case "defaultChecked":
                  _ = x;
                  break;
                case "value":
                  u = x;
                  break;
                case "defaultValue":
                  d = x;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (x != null)
                    throw Error(r(137, t));
                  break;
                default:
                  Re(e, t, l, x, n, null);
              }
          }
        ri(
          e,
          u,
          d,
          y,
          _,
          c,
          a,
          !1
        );
        return;
      case "select":
        me("invalid", e), l = c = u = null;
        for (a in n)
          if (n.hasOwnProperty(a) && (d = n[a], d != null))
            switch (a) {
              case "value":
                u = d;
                break;
              case "defaultValue":
                c = d;
                break;
              case "multiple":
                l = d;
              default:
                Re(e, t, a, d, n, null);
            }
        t = u, n = c, e.multiple = !!l, t != null ? Zl(e, !!l, t, !1) : n != null && Zl(e, !!l, n, !0);
        return;
      case "textarea":
        me("invalid", e), u = a = l = null;
        for (c in n)
          if (n.hasOwnProperty(c) && (d = n[c], d != null))
            switch (c) {
              case "value":
                l = d;
                break;
              case "defaultValue":
                a = d;
                break;
              case "children":
                u = d;
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(r(91));
                break;
              default:
                Re(e, t, c, d, n, null);
            }
        za(e, l, a, u);
        return;
      case "option":
        for (y in n)
          n.hasOwnProperty(y) && (l = n[y], l != null) && (y === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : Re(e, t, y, l, n, null));
        return;
      case "dialog":
        me("beforetoggle", e), me("toggle", e), me("cancel", e), me("close", e);
        break;
      case "iframe":
      case "object":
        me("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ii.length; l++)
          me(Ii[l], e);
        break;
      case "image":
        me("error", e), me("load", e);
        break;
      case "details":
        me("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        me("error", e), me("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (_ in n)
          if (n.hasOwnProperty(_) && (l = n[_], l != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Re(e, t, _, l, n, null);
            }
        return;
      default:
        if (Pn(t)) {
          for (x in n)
            n.hasOwnProperty(x) && (l = n[x], l !== void 0 && To(
              e,
              t,
              x,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (d in n)
      n.hasOwnProperty(d) && (l = n[d], l != null && Re(e, t, d, l, n, null));
  }
  function By(e, t, n, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null, u = null, c = null, d = null, y = null, _ = null, x = null;
        for (T in n) {
          var z = n[T];
          if (n.hasOwnProperty(T) && z != null)
            switch (T) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                y = z;
              default:
                l.hasOwnProperty(T) || Re(e, t, T, null, l, z);
            }
        }
        for (var A in l) {
          var T = l[A];
          if (z = n[A], l.hasOwnProperty(A) && (T != null || z != null))
            switch (A) {
              case "type":
                u = T;
                break;
              case "name":
                a = T;
                break;
              case "checked":
                _ = T;
                break;
              case "defaultChecked":
                x = T;
                break;
              case "value":
                c = T;
                break;
              case "defaultValue":
                d = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null)
                  throw Error(r(137, t));
                break;
              default:
                T !== z && Re(
                  e,
                  t,
                  A,
                  T,
                  l,
                  z
                );
            }
        }
        Bt(
          e,
          c,
          d,
          y,
          _,
          x,
          u,
          a
        );
        return;
      case "select":
        T = c = d = A = null;
        for (u in n)
          if (y = n[u], n.hasOwnProperty(u) && y != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                T = y;
              default:
                l.hasOwnProperty(u) || Re(
                  e,
                  t,
                  u,
                  null,
                  l,
                  y
                );
            }
        for (a in l)
          if (u = l[a], y = n[a], l.hasOwnProperty(a) && (u != null || y != null))
            switch (a) {
              case "value":
                A = u;
                break;
              case "defaultValue":
                d = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== y && Re(
                  e,
                  t,
                  a,
                  u,
                  l,
                  y
                );
            }
        t = d, n = c, l = T, A != null ? Zl(e, !!n, A, !1) : !!l != !!n && (t != null ? Zl(e, !!n, t, !0) : Zl(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        T = A = null;
        for (d in n)
          if (a = n[d], n.hasOwnProperty(d) && a != null && !l.hasOwnProperty(d))
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                Re(e, t, d, null, l, a);
            }
        for (c in l)
          if (a = l[c], u = n[c], l.hasOwnProperty(c) && (a != null || u != null))
            switch (c) {
              case "value":
                A = a;
                break;
              case "defaultValue":
                T = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== u && Re(e, t, c, a, l, u);
            }
        $n(e, A, T);
        return;
      case "option":
        for (var k in n)
          A = n[k], n.hasOwnProperty(k) && A != null && !l.hasOwnProperty(k) && (k === "selected" ? e.selected = !1 : Re(
            e,
            t,
            k,
            null,
            l,
            A
          ));
        for (y in l)
          A = l[y], T = n[y], l.hasOwnProperty(y) && A !== T && (A != null || T != null) && (y === "selected" ? e.selected = A && typeof A != "function" && typeof A != "symbol" : Re(
            e,
            t,
            y,
            A,
            l,
            T
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var W in n)
          A = n[W], n.hasOwnProperty(W) && A != null && !l.hasOwnProperty(W) && Re(e, t, W, null, l, A);
        for (_ in l)
          if (A = l[_], T = n[_], l.hasOwnProperty(_) && A !== T && (A != null || T != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(r(137, t));
                break;
              default:
                Re(
                  e,
                  t,
                  _,
                  A,
                  l,
                  T
                );
            }
        return;
      default:
        if (Pn(t)) {
          for (var qe in n)
            A = n[qe], n.hasOwnProperty(qe) && A !== void 0 && !l.hasOwnProperty(qe) && To(
              e,
              t,
              qe,
              void 0,
              l,
              A
            );
          for (x in l)
            A = l[x], T = n[x], !l.hasOwnProperty(x) || A === T || A === void 0 && T === void 0 || To(
              e,
              t,
              x,
              A,
              l,
              T
            );
          return;
        }
    }
    for (var b in n)
      A = n[b], n.hasOwnProperty(b) && A != null && !l.hasOwnProperty(b) && Re(e, t, b, null, l, A);
    for (z in l)
      A = l[z], T = n[z], !l.hasOwnProperty(z) || A === T || A == null && T == null || Re(e, t, z, A, l, T);
  }
  function Lh(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Ly() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var a = n[l], u = a.transferSize, c = a.initiatorType, d = a.duration;
        if (u && d && Lh(c)) {
          for (c = 0, d = a.responseEnd, l += 1; l < n.length; l++) {
            var y = n[l], _ = y.startTime;
            if (_ > d) break;
            var x = y.transferSize, z = y.initiatorType;
            x && Lh(z) && (y = y.responseEnd, c += x * (y < d ? 1 : (d - _) / (y - _)));
          }
          if (--l, t += 8 * (u + c) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var No = null, Mo = null;
  function yc(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Hh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gh(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function xo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Co = null;
  function Hy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Co ? !1 : (Co = e, !0) : (Co = null, !1);
  }
  var Yh = typeof setTimeout == "function" ? setTimeout : void 0, Gy = typeof clearTimeout == "function" ? clearTimeout : void 0, kh = typeof Promise == "function" ? Promise : void 0, Yy = typeof queueMicrotask == "function" ? queueMicrotask : typeof kh < "u" ? function(e) {
    return kh.resolve(null).then(e).catch(ky);
  } : Yh;
  function ky(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ya(e) {
    return e === "head";
  }
  function Xh(e, t) {
    var n = t, l = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8)
        if (n = a.data, n === "/$" || n === "/&") {
          if (l === 0) {
            e.removeChild(a), $u(t);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          $i(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, $i(n);
          for (var u = n.firstChild; u; ) {
            var c = u.nextSibling, d = u.nodeName;
            u[Kn] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = c;
          }
        } else
          n === "body" && $i(e.ownerDocument.body);
      n = a;
    } while (n);
    $u(t);
  }
  function Vh(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = l;
    } while (n);
  }
  function Ro(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ro(n), yl(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Xy(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var a = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Kn])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = qn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Vy(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = qn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Qh(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = qn(e.nextSibling), e === null)) return null;
    return e;
  }
  function qo(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Oo(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Qy(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var l = function() {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function qn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var zo = null;
  function Zh(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return qn(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Kh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Jh(e, t, n) {
    switch (t = yc(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(r(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(r(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function $i(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    yl(e);
  }
  var On = /* @__PURE__ */ new Map(), Ih = /* @__PURE__ */ new Set();
  function gc(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Ll = B.d;
  B.d = {
    f: Zy,
    r: Ky,
    D: Jy,
    C: Iy,
    L: Wy,
    m: $y,
    X: Py,
    S: Fy,
    M: eg
  };
  function Zy() {
    var e = Ll.f(), t = sc();
    return e || t;
  }
  function Ky(e) {
    var t = Jn(e);
    t !== null && t.tag === 5 && t.type === "form" ? dd(t) : Ll.r(e);
  }
  var Ju = typeof document > "u" ? null : document;
  function Wh(e, t, n) {
    var l = Ju;
    if (l && typeof t == "string" && t) {
      var a = wt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Ih.has(a) || (Ih.add(a), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(a) === null && (t = l.createElement("link"), St(t, "link", e), Ye(t), l.head.appendChild(t)));
    }
  }
  function Jy(e) {
    Ll.D(e), Wh("dns-prefetch", e, null);
  }
  function Iy(e, t) {
    Ll.C(e, t), Wh("preconnect", e, t);
  }
  function Wy(e, t, n) {
    Ll.L(e, t, n);
    var l = Ju;
    if (l && e && t) {
      var a = 'link[rel="preload"][as="' + wt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + wt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + wt(
        n.imageSizes
      ) + '"]')) : a += '[href="' + wt(e) + '"]';
      var u = a;
      switch (t) {
        case "style":
          u = Iu(e);
          break;
        case "script":
          u = Wu(e);
      }
      On.has(u) || (e = X(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), On.set(u, e), l.querySelector(a) !== null || t === "style" && l.querySelector(Fi(u)) || t === "script" && l.querySelector(Pi(u)) || (t = l.createElement("link"), St(t, "link", e), Ye(t), l.head.appendChild(t)));
    }
  }
  function $y(e, t) {
    Ll.m(e, t);
    var n = Ju;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + wt(l) + '"][href="' + wt(e) + '"]', u = a;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Wu(e);
      }
      if (!On.has(u) && (e = X({ rel: "modulepreload", href: e }, t), On.set(u, e), n.querySelector(a) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Pi(u)))
              return;
        }
        l = n.createElement("link"), St(l, "link", e), Ye(l), n.head.appendChild(l);
      }
    }
  }
  function Fy(e, t, n) {
    Ll.S(e, t, n);
    var l = Ju;
    if (l && e) {
      var a = fn(l).hoistableStyles, u = Iu(e);
      t = t || "default";
      var c = a.get(u);
      if (!c) {
        var d = { loading: 0, preload: null };
        if (c = l.querySelector(
          Fi(u)
        ))
          d.loading = 5;
        else {
          e = X(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = On.get(u)) && Do(e, n);
          var y = c = l.createElement("link");
          Ye(y), St(y, "link", e), y._p = new Promise(function(_, x) {
            y.onload = _, y.onerror = x;
          }), y.addEventListener("load", function() {
            d.loading |= 1;
          }), y.addEventListener("error", function() {
            d.loading |= 2;
          }), d.loading |= 4, pc(c, t, l);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: d
        }, a.set(u, c);
      }
    }
  }
  function Py(e, t) {
    Ll.X(e, t);
    var n = Ju;
    if (n && e) {
      var l = fn(n).hoistableScripts, a = Wu(e), u = l.get(a);
      u || (u = n.querySelector(Pi(a)), u || (e = X({ src: e, async: !0 }, t), (t = On.get(a)) && Uo(e, t), u = n.createElement("script"), Ye(u), St(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(a, u));
    }
  }
  function eg(e, t) {
    Ll.M(e, t);
    var n = Ju;
    if (n && e) {
      var l = fn(n).hoistableScripts, a = Wu(e), u = l.get(a);
      u || (u = n.querySelector(Pi(a)), u || (e = X({ src: e, async: !0, type: "module" }, t), (t = On.get(a)) && Uo(e, t), u = n.createElement("script"), Ye(u), St(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(a, u));
    }
  }
  function $h(e, t, n, l) {
    var a = (a = re.current) ? gc(a) : null;
    if (!a) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Iu(n.href), n = fn(
          a
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Iu(n.href);
          var u = fn(
            a
          ).hoistableStyles, c = u.get(e);
          if (c || (a = a.ownerDocument || a, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, c), (u = a.querySelector(
            Fi(e)
          )) && !u._p && (c.instance = u, c.state.loading = 5), On.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, On.set(e, n), u || tg(
            a,
            e,
            n,
            c.state
          ))), t && l === null)
            throw Error(r(528, ""));
          return c;
        }
        if (t && l !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Wu(n), n = fn(
          a
        ).hoistableScripts, l = n.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function Iu(e) {
    return 'href="' + wt(e) + '"';
  }
  function Fi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Fh(e) {
    return X({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function tg(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), St(t, "link", n), Ye(t), e.head.appendChild(t));
  }
  function Wu(e) {
    return '[src="' + wt(e) + '"]';
  }
  function Pi(e) {
    return "script[async]" + e;
  }
  function Ph(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + wt(n.href) + '"]'
          );
          if (l)
            return t.instance = l, Ye(l), l;
          var a = X({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Ye(l), St(l, "style", a), pc(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          a = Iu(n.href);
          var u = e.querySelector(
            Fi(a)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Ye(u), u;
          l = Fh(n), (a = On.get(a)) && Do(l, a), u = (e.ownerDocument || e).createElement("link"), Ye(u);
          var c = u;
          return c._p = new Promise(function(d, y) {
            c.onload = d, c.onerror = y;
          }), St(u, "link", l), t.state.loading |= 4, pc(u, n.precedence, e), t.instance = u;
        case "script":
          return u = Wu(n.src), (a = e.querySelector(
            Pi(u)
          )) ? (t.instance = a, Ye(a), a) : (l = n, (a = On.get(u)) && (l = X({}, n), Uo(l, a)), e = e.ownerDocument || e, a = e.createElement("script"), Ye(a), St(a, "link", l), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, pc(l, n.precedence, e));
    return t.instance;
  }
  function pc(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = l.length ? l[l.length - 1] : null, u = a, c = 0; c < l.length; c++) {
      var d = l[c];
      if (d.dataset.precedence === t) u = d;
      else if (u !== a) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Do(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Uo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var vc = null;
  function em(e, t, n) {
    if (vc === null) {
      var l = /* @__PURE__ */ new Map(), a = vc = /* @__PURE__ */ new Map();
      a.set(n, l);
    } else
      a = vc, l = a.get(n), l || (l = /* @__PURE__ */ new Map(), a.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var u = n[a];
      if (!(u[Kn] || u[De] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(t) || "";
        c = e + c;
        var d = l.get(c);
        d ? d.push(u) : l.set(c, [u]);
      }
    }
    return l;
  }
  function tm(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function ng(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function nm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function lg(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var a = Iu(l.href), u = t.querySelector(
          Fi(a)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = bc.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, Ye(u);
          return;
        }
        u = t.ownerDocument || t, l = Fh(l), (a = On.get(a)) && Do(l, a), u = u.createElement("link"), Ye(u);
        var c = u;
        c._p = new Promise(function(d, y) {
          c.onload = d, c.onerror = y;
        }), St(u, "link", l), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = bc.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var jo = 0;
  function ag(e, t) {
    return e.stylesheets && e.count === 0 && Ec(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && Ec(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && jo === 0 && (jo = 62500 * Ly());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ec(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > jo ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(a);
      };
    } : null;
  }
  function bc() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ec(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Sc = null;
  function Ec(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Sc = /* @__PURE__ */ new Map(), t.forEach(ug, e), Sc = null, bc.call(e));
  }
  function ug(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Sc.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Sc.set(e, n);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < a.length; u++) {
          var c = a[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (n.set(c.dataset.precedence, c), l = c);
        }
        l && n.set(null, l);
      }
      a = t.instance, c = a.getAttribute("data-precedence"), u = n.get(c) || l, u === l && n.set(null, a), n.set(c, a), this.count++, l = bc.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), u ? u.parentNode.insertBefore(a, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var es = {
    $$typeof: Be,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  };
  function ig(e, t, n, l, a, u, c, d, y) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Dn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Dn(0), this.hiddenUpdates = Dn(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function lm(e, t, n, l, a, u, c, d, y, _, x, z) {
    return e = new ig(
      e,
      t,
      n,
      c,
      y,
      _,
      x,
      z,
      d
    ), t = 1, u === !0 && (t |= 24), u = dn(3, null, null, t), e.current = u, u.stateNode = e, t = hr(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, pr(u), e;
  }
  function am(e) {
    return e ? (e = xu, e) : xu;
  }
  function um(e, t, n, l, a, u) {
    a = am(a), l.context === null ? l.context = a : l.pendingContext = a, l = aa(t), l.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (l.callback = u), n = ua(e, l, t), n !== null && (un(n, e, t), zi(n, e, t));
  }
  function im(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function wo(e, t) {
    im(e, t), (e = e.alternate) && im(e, t);
  }
  function sm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ka(e, 67108864);
      t !== null && un(t, e, 67108864), wo(e, 67108864);
    }
  }
  function cm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = pn();
      t = Ca(t);
      var n = Ka(e, t);
      n !== null && un(n, e, t), wo(e, t);
    }
  }
  var _c = !0;
  function sg(e, t, n, l) {
    var a = M.T;
    M.T = null;
    var u = B.p;
    try {
      B.p = 2, Bo(e, t, n, l);
    } finally {
      B.p = u, M.T = a;
    }
  }
  function cg(e, t, n, l) {
    var a = M.T;
    M.T = null;
    var u = B.p;
    try {
      B.p = 8, Bo(e, t, n, l);
    } finally {
      B.p = u, M.T = a;
    }
  }
  function Bo(e, t, n, l) {
    if (_c) {
      var a = Lo(l);
      if (a === null)
        Ao(
          e,
          t,
          l,
          Ac,
          n
        ), om(e, l);
      else if (og(
        a,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (om(e, l), t & 4 && -1 < rg.indexOf(e)) {
        for (; a !== null; ) {
          var u = Jn(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = D(u.pendingLanes);
                  if (c !== 0) {
                    var d = u;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; c; ) {
                      var y = 1 << 31 - At(c);
                      d.entanglements[1] |= y, c &= ~y;
                    }
                    rl(u), (Ae & 6) === 0 && (uc = Ge() + 500, Ji(0));
                  }
                }
                break;
              case 31:
              case 13:
                d = Ka(u, 2), d !== null && un(d, u, 2), sc(), wo(u, 2);
            }
          if (u = Lo(l), u === null && Ao(
            e,
            t,
            l,
            Ac,
            n
          ), u === a) break;
          a = u;
        }
        a !== null && l.stopPropagation();
      } else
        Ao(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function Lo(e) {
    return e = di(e), Ho(e);
  }
  var Ac = null;
  function Ho(e) {
    if (Ac = null, e = En(e), e !== null) {
      var t = R(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = w(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = Y(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Ac = e, null;
  }
  function rm(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Qt()) {
          case Zt:
            return 2;
          case zt:
            return 8;
          case _t:
          case Yc:
            return 32;
          case ui:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Go = !1, ga = null, pa = null, va = null, ts = /* @__PURE__ */ new Map(), ns = /* @__PURE__ */ new Map(), ba = [], rg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function om(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ga = null;
        break;
      case "dragenter":
      case "dragleave":
        pa = null;
        break;
      case "mouseover":
      case "mouseout":
        va = null;
        break;
      case "pointerover":
      case "pointerout":
        ts.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ns.delete(t.pointerId);
    }
  }
  function ls(e, t, n, l, a, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [a]
    }, t !== null && (t = Jn(t), t !== null && sm(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function og(e, t, n, l, a) {
    switch (t) {
      case "focusin":
        return ga = ls(
          ga,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "dragenter":
        return pa = ls(
          pa,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "mouseover":
        return va = ls(
          va,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "pointerover":
        var u = a.pointerId;
        return ts.set(
          u,
          ls(
            ts.get(u) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
      case "gotpointercapture":
        return u = a.pointerId, ns.set(
          u,
          ls(
            ns.get(u) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
    }
    return !1;
  }
  function fm(e) {
    var t = En(e.target);
    if (t !== null) {
      var n = R(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = w(n), t !== null) {
            e.blockedOn = t, Jt(e.priority, function() {
              cm(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Y(n), t !== null) {
            e.blockedOn = t, Jt(e.priority, function() {
              cm(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Tc(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Lo(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Da = l, n.target.dispatchEvent(l), Da = null;
      } else
        return t = Jn(n), t !== null && sm(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function dm(e, t, n) {
    Tc(e) && n.delete(t);
  }
  function fg() {
    Go = !1, ga !== null && Tc(ga) && (ga = null), pa !== null && Tc(pa) && (pa = null), va !== null && Tc(va) && (va = null), ts.forEach(dm), ns.forEach(dm);
  }
  function Nc(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Go || (Go = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      fg
    )));
  }
  var Mc = null;
  function hm(e) {
    Mc !== e && (Mc = e, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        Mc === e && (Mc = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], a = e[t + 2];
          if (typeof l != "function") {
            if (Ho(l || n) === null)
              continue;
            break;
          }
          var u = Jn(n);
          u !== null && (e.splice(t, 3), t -= 3, Br(
            u,
            {
              pending: !0,
              data: a,
              method: n.method,
              action: l
            },
            l,
            a
          ));
        }
      }
    ));
  }
  function $u(e) {
    function t(y) {
      return Nc(y, e);
    }
    ga !== null && Nc(ga, e), pa !== null && Nc(pa, e), va !== null && Nc(va, e), ts.forEach(t), ns.forEach(t);
    for (var n = 0; n < ba.length; n++) {
      var l = ba[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < ba.length && (n = ba[0], n.blockedOn === null); )
      fm(n), n.blockedOn === null && ba.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var a = n[l], u = n[l + 1], c = a[st] || null;
        if (typeof u == "function")
          c || hm(n);
        else if (c) {
          var d = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, c = u[st] || null)
              d = c.formAction;
            else if (Ho(a) !== null) continue;
          } else d = c.action;
          typeof d == "function" ? n[l + 1] = d : (n.splice(l, 3), l -= 3), hm(n);
        }
      }
  }
  function mm() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(c) {
            return a = c;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      a !== null && (a(), a = null), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, a = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), a !== null && (a(), a = null);
      };
    }
  }
  function Yo(e) {
    this._internalRoot = e;
  }
  xc.prototype.render = Yo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var n = t.current, l = pn();
    um(n, l, e, t, null, null);
  }, xc.prototype.unmount = Yo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      um(e.current, 2, null, e, null, null), sc(), t[Un] = null;
    }
  };
  function xc(e) {
    this._internalRoot = e;
  }
  xc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = hl();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ba.length && t !== 0 && t < ba[n].priority; n++) ;
      ba.splice(n, 0, e), n === 0 && fm(e);
    }
  };
  var ym = i.version;
  if (ym !== "19.2.4")
    throw Error(
      r(
        527,
        ym,
        "19.2.4"
      )
    );
  B.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = O(t), e = e !== null ? I(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var dg = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cc.isDisabled && Cc.supportsFiber)
      try {
        Ke = Cc.inject(
          dg
        ), Te = Cc;
      } catch {
      }
  }
  return us.createRoot = function(e, t) {
    if (!S(e)) throw Error(r(299));
    var n = !1, l = "", a = _d, u = Ad, c = Td;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = lm(
      e,
      1,
      !1,
      null,
      null,
      n,
      l,
      null,
      a,
      u,
      c,
      mm
    ), e[Un] = t.current, _o(e), new Yo(t);
  }, us.hydrateRoot = function(e, t, n) {
    if (!S(e)) throw Error(r(299));
    var l = !1, a = "", u = _d, c = Ad, d = Td, y = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (c = n.onCaughtError), n.onRecoverableError !== void 0 && (d = n.onRecoverableError), n.formState !== void 0 && (y = n.formState)), t = lm(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      a,
      y,
      u,
      c,
      d,
      mm
    ), t.context = am(null), n = t.current, l = pn(), l = Ca(l), a = aa(l), a.callback = null, ua(n, a, l), n = l, t.current.lanes = n, Sn(t, n), rl(t), e[Un] = t.current, _o(e), new xc(t);
  }, us.version = "19.2.4", us;
}
var Nm;
function _g() {
  if (Nm) return Vo.exports;
  Nm = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (i) {
        console.error(i);
      }
  }
  return o(), Vo.exports = Eg(), Vo.exports;
}
var Ag = _g();
const Tg = "/api";
function Bm() {
  return window.localStorage.getItem("token");
}
function Mm() {
  const o = `${window.location.pathname}${window.location.search || ""}`;
  window.location.replace(`/login?next=${encodeURIComponent(o)}`);
}
async function Fu(o, i = {}) {
  const s = Bm(), r = {
    "Content-Type": "application/json",
    ...s ? { Authorization: `Bearer ${s}` } : {},
    ...i.headers || {}
  }, S = await fetch(`${Tg}${o}`, {
    ...i,
    headers: r
  }), R = await S.text();
  let w = {};
  if (R)
    try {
      w = JSON.parse(R);
    } catch {
      w = { message: R };
    }
  if (!S.ok) {
    const Y = w.error || w.message || "Request failed";
    throw new Error(Y);
  }
  return w;
}
const fl = /* @__PURE__ */ Object.create(null);
fl.open = "0";
fl.close = "1";
fl.ping = "2";
fl.pong = "3";
fl.message = "4";
fl.upgrade = "5";
fl.noop = "6";
const jc = /* @__PURE__ */ Object.create(null);
Object.keys(fl).forEach((o) => {
  jc[fl[o]] = o;
});
const $o = { type: "error", data: "parser error" }, Lm = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Hm = typeof ArrayBuffer == "function", Gm = (o) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(o) : o && o.buffer instanceof ArrayBuffer, cf = ({ type: o, data: i }, s, r) => Lm && i instanceof Blob ? s ? r(i) : xm(i, r) : Hm && (i instanceof ArrayBuffer || Gm(i)) ? s ? r(i) : xm(new Blob([i]), r) : r(fl[o] + (i || "")), xm = (o, i) => {
  const s = new FileReader();
  return s.onload = function() {
    const r = s.result.split(",")[1];
    i("b" + (r || ""));
  }, s.readAsDataURL(o);
};
function Cm(o) {
  return o instanceof Uint8Array ? o : o instanceof ArrayBuffer ? new Uint8Array(o) : new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
}
let Jo;
function Ng(o, i) {
  if (Lm && o.data instanceof Blob)
    return o.data.arrayBuffer().then(Cm).then(i);
  if (Hm && (o.data instanceof ArrayBuffer || Gm(o.data)))
    return i(Cm(o.data));
  cf(o, !1, (s) => {
    Jo || (Jo = new TextEncoder()), i(Jo.encode(s));
  });
}
const Rm = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", cs = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let o = 0; o < Rm.length; o++)
  cs[Rm.charCodeAt(o)] = o;
const Mg = (o) => {
  let i = o.length * 0.75, s = o.length, r, S = 0, R, w, Y, U;
  o[o.length - 1] === "=" && (i--, o[o.length - 2] === "=" && i--);
  const O = new ArrayBuffer(i), I = new Uint8Array(O);
  for (r = 0; r < s; r += 4)
    R = cs[o.charCodeAt(r)], w = cs[o.charCodeAt(r + 1)], Y = cs[o.charCodeAt(r + 2)], U = cs[o.charCodeAt(r + 3)], I[S++] = R << 2 | w >> 4, I[S++] = (w & 15) << 4 | Y >> 2, I[S++] = (Y & 3) << 6 | U & 63;
  return O;
}, xg = typeof ArrayBuffer == "function", rf = (o, i) => {
  if (typeof o != "string")
    return {
      type: "message",
      data: Ym(o, i)
    };
  const s = o.charAt(0);
  return s === "b" ? {
    type: "message",
    data: Cg(o.substring(1), i)
  } : jc[s] ? o.length > 1 ? {
    type: jc[s],
    data: o.substring(1)
  } : {
    type: jc[s]
  } : $o;
}, Cg = (o, i) => {
  if (xg) {
    const s = Mg(o);
    return Ym(s, i);
  } else
    return { base64: !0, data: o };
}, Ym = (o, i) => i === "blob" ? o instanceof Blob ? o : new Blob([o]) : o instanceof ArrayBuffer ? o : o.buffer, km = "", Rg = (o, i) => {
  const s = o.length, r = new Array(s);
  let S = 0;
  o.forEach((R, w) => {
    cf(R, !1, (Y) => {
      r[w] = Y, ++S === s && i(r.join(km));
    });
  });
}, qg = (o, i) => {
  const s = o.split(km), r = [];
  for (let S = 0; S < s.length; S++) {
    const R = rf(s[S], i);
    if (r.push(R), R.type === "error")
      break;
  }
  return r;
};
function Og() {
  return new TransformStream({
    transform(o, i) {
      Ng(o, (s) => {
        const r = s.length;
        let S;
        if (r < 126)
          S = new Uint8Array(1), new DataView(S.buffer).setUint8(0, r);
        else if (r < 65536) {
          S = new Uint8Array(3);
          const R = new DataView(S.buffer);
          R.setUint8(0, 126), R.setUint16(1, r);
        } else {
          S = new Uint8Array(9);
          const R = new DataView(S.buffer);
          R.setUint8(0, 127), R.setBigUint64(1, BigInt(r));
        }
        o.data && typeof o.data != "string" && (S[0] |= 128), i.enqueue(S), i.enqueue(s);
      });
    }
  });
}
let Io;
function Rc(o) {
  return o.reduce((i, s) => i + s.length, 0);
}
function qc(o, i) {
  if (o[0].length === i)
    return o.shift();
  const s = new Uint8Array(i);
  let r = 0;
  for (let S = 0; S < i; S++)
    s[S] = o[0][r++], r === o[0].length && (o.shift(), r = 0);
  return o.length && r < o[0].length && (o[0] = o[0].slice(r)), s;
}
function zg(o, i) {
  Io || (Io = new TextDecoder());
  const s = [];
  let r = 0, S = -1, R = !1;
  return new TransformStream({
    transform(w, Y) {
      for (s.push(w); ; ) {
        if (r === 0) {
          if (Rc(s) < 1)
            break;
          const U = qc(s, 1);
          R = (U[0] & 128) === 128, S = U[0] & 127, S < 126 ? r = 3 : S === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (Rc(s) < 2)
            break;
          const U = qc(s, 2);
          S = new DataView(U.buffer, U.byteOffset, U.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (Rc(s) < 8)
            break;
          const U = qc(s, 8), O = new DataView(U.buffer, U.byteOffset, U.length), I = O.getUint32(0);
          if (I > Math.pow(2, 21) - 1) {
            Y.enqueue($o);
            break;
          }
          S = I * Math.pow(2, 32) + O.getUint32(4), r = 3;
        } else {
          if (Rc(s) < S)
            break;
          const U = qc(s, S);
          Y.enqueue(rf(R ? U : Io.decode(U), i)), r = 0;
        }
        if (S === 0 || S > o) {
          Y.enqueue($o);
          break;
        }
      }
    }
  });
}
const Xm = 4;
function ut(o) {
  if (o) return Dg(o);
}
function Dg(o) {
  for (var i in ut.prototype)
    o[i] = ut.prototype[i];
  return o;
}
ut.prototype.on = ut.prototype.addEventListener = function(o, i) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + o] = this._callbacks["$" + o] || []).push(i), this;
};
ut.prototype.once = function(o, i) {
  function s() {
    this.off(o, s), i.apply(this, arguments);
  }
  return s.fn = i, this.on(o, s), this;
};
ut.prototype.off = ut.prototype.removeListener = ut.prototype.removeAllListeners = ut.prototype.removeEventListener = function(o, i) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var s = this._callbacks["$" + o];
  if (!s) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + o], this;
  for (var r, S = 0; S < s.length; S++)
    if (r = s[S], r === i || r.fn === i) {
      s.splice(S, 1);
      break;
    }
  return s.length === 0 && delete this._callbacks["$" + o], this;
};
ut.prototype.emit = function(o) {
  this._callbacks = this._callbacks || {};
  for (var i = new Array(arguments.length - 1), s = this._callbacks["$" + o], r = 1; r < arguments.length; r++)
    i[r - 1] = arguments[r];
  if (s) {
    s = s.slice(0);
    for (var r = 0, S = s.length; r < S; ++r)
      s[r].apply(this, i);
  }
  return this;
};
ut.prototype.emitReserved = ut.prototype.emit;
ut.prototype.listeners = function(o) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + o] || [];
};
ut.prototype.hasListeners = function(o) {
  return !!this.listeners(o).length;
};
const Hc = typeof Promise == "function" && typeof Promise.resolve == "function" ? (i) => Promise.resolve().then(i) : (i, s) => s(i, 0), zn = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Ug = "arraybuffer";
function Vm(o, ...i) {
  return i.reduce((s, r) => (o.hasOwnProperty(r) && (s[r] = o[r]), s), {});
}
const jg = zn.setTimeout, wg = zn.clearTimeout;
function Gc(o, i) {
  i.useNativeTimers ? (o.setTimeoutFn = jg.bind(zn), o.clearTimeoutFn = wg.bind(zn)) : (o.setTimeoutFn = zn.setTimeout.bind(zn), o.clearTimeoutFn = zn.clearTimeout.bind(zn));
}
const Bg = 1.33;
function Lg(o) {
  return typeof o == "string" ? Hg(o) : Math.ceil((o.byteLength || o.size) * Bg);
}
function Hg(o) {
  let i = 0, s = 0;
  for (let r = 0, S = o.length; r < S; r++)
    i = o.charCodeAt(r), i < 128 ? s += 1 : i < 2048 ? s += 2 : i < 55296 || i >= 57344 ? s += 3 : (r++, s += 4);
  return s;
}
function Qm() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Gg(o) {
  let i = "";
  for (let s in o)
    o.hasOwnProperty(s) && (i.length && (i += "&"), i += encodeURIComponent(s) + "=" + encodeURIComponent(o[s]));
  return i;
}
function Yg(o) {
  let i = {}, s = o.split("&");
  for (let r = 0, S = s.length; r < S; r++) {
    let R = s[r].split("=");
    i[decodeURIComponent(R[0])] = decodeURIComponent(R[1]);
  }
  return i;
}
class kg extends Error {
  constructor(i, s, r) {
    super(i), this.description = s, this.context = r, this.type = "TransportError";
  }
}
class of extends ut {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(i) {
    super(), this.writable = !1, Gc(this, i), this.opts = i, this.query = i.query, this.socket = i.socket, this.supportsBinary = !i.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(i, s, r) {
    return super.emitReserved("error", new kg(i, s, r)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(i) {
    this.readyState === "open" && this.write(i);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(i) {
    const s = rf(i, this.socket.binaryType);
    this.onPacket(s);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(i) {
    super.emitReserved("packet", i);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(i) {
    this.readyState = "closed", super.emitReserved("close", i);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(i) {
  }
  createUri(i, s = {}) {
    return i + "://" + this._hostname() + this._port() + this.opts.path + this._query(s);
  }
  _hostname() {
    const i = this.opts.hostname;
    return i.indexOf(":") === -1 ? i : "[" + i + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(i) {
    const s = Gg(i);
    return s.length ? "?" + s : "";
  }
}
class Xg extends of {
  constructor() {
    super(...arguments), this._polling = !1;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(i) {
    this.readyState = "pausing";
    const s = () => {
      this.readyState = "paused", i();
    };
    if (this._polling || !this.writable) {
      let r = 0;
      this._polling && (r++, this.once("pollComplete", function() {
        --r || s();
      })), this.writable || (r++, this.once("drain", function() {
        --r || s();
      }));
    } else
      s();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(i) {
    const s = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    qg(i, this.socket.binaryType).forEach(s), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const i = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? i() : this.once("open", i);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(i) {
    this.writable = !1, Rg(i, (s) => {
      this.doWrite(s, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const i = this.opts.secure ? "https" : "http", s = this.query || {};
    return this.opts.timestampRequests !== !1 && (s[this.opts.timestampParam] = Qm()), !this.supportsBinary && !s.sid && (s.b64 = 1), this.createUri(i, s);
  }
}
let Zm = !1;
try {
  Zm = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Vg = Zm;
function Qg() {
}
class Zg extends Xg {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(i) {
    if (super(i), typeof location < "u") {
      const s = location.protocol === "https:";
      let r = location.port;
      r || (r = s ? "443" : "80"), this.xd = typeof location < "u" && i.hostname !== location.hostname || r !== i.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(i, s) {
    const r = this.request({
      method: "POST",
      data: i
    });
    r.on("success", s), r.on("error", (S, R) => {
      this.onError("xhr post error", S, R);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const i = this.request();
    i.on("data", this.onData.bind(this)), i.on("error", (s, r) => {
      this.onError("xhr poll error", s, r);
    }), this.pollXhr = i;
  }
}
class ol extends ut {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(i, s, r) {
    super(), this.createRequest = i, Gc(this, r), this._opts = r, this._method = r.method || "GET", this._uri = s, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var i;
    const s = Vm(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    s.xdomain = !!this._opts.xd;
    const r = this._xhr = this.createRequest(s);
    try {
      r.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let S in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(S) && r.setRequestHeader(S, this._opts.extraHeaders[S]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (i = this._opts.cookieJar) === null || i === void 0 || i.addCookies(r), "withCredentials" in r && (r.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout), r.onreadystatechange = () => {
        var S;
        r.readyState === 3 && ((S = this._opts.cookieJar) === null || S === void 0 || S.parseCookies(
          // @ts-ignore
          r.getResponseHeader("set-cookie")
        )), r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this._data);
    } catch (S) {
      this.setTimeoutFn(() => {
        this._onError(S);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = ol.requestsCount++, ol.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(i) {
    this.emitReserved("error", i, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(i) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = Qg, i)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete ol.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const i = this._xhr.responseText;
    i !== null && (this.emitReserved("data", i), this.emitReserved("success"), this._cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
}
ol.requestsCount = 0;
ol.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", qm);
  else if (typeof addEventListener == "function") {
    const o = "onpagehide" in zn ? "pagehide" : "unload";
    addEventListener(o, qm, !1);
  }
}
function qm() {
  for (let o in ol.requests)
    ol.requests.hasOwnProperty(o) && ol.requests[o].abort();
}
const Kg = (function() {
  const o = Km({
    xdomain: !1
  });
  return o && o.responseType !== null;
})();
class Jg extends Zg {
  constructor(i) {
    super(i);
    const s = i && i.forceBase64;
    this.supportsBinary = Kg && !s;
  }
  request(i = {}) {
    return Object.assign(i, { xd: this.xd }, this.opts), new ol(Km, this.uri(), i);
  }
}
function Km(o) {
  const i = o.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!i || Vg))
      return new XMLHttpRequest();
  } catch {
  }
  if (!i)
    try {
      return new zn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Jm = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Ig extends of {
  get name() {
    return "websocket";
  }
  doOpen() {
    const i = this.uri(), s = this.opts.protocols, r = Jm ? {} : Vm(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(i, s, r);
    } catch (S) {
      return this.emitReserved("error", S);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (i) => this.onClose({
      description: "websocket connection closed",
      context: i
    }), this.ws.onmessage = (i) => this.onData(i.data), this.ws.onerror = (i) => this.onError("websocket error", i);
  }
  write(i) {
    this.writable = !1;
    for (let s = 0; s < i.length; s++) {
      const r = i[s], S = s === i.length - 1;
      cf(r, this.supportsBinary, (R) => {
        try {
          this.doWrite(r, R);
        } catch {
        }
        S && Hc(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.onerror = () => {
    }, this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const i = this.opts.secure ? "wss" : "ws", s = this.query || {};
    return this.opts.timestampRequests && (s[this.opts.timestampParam] = Qm()), this.supportsBinary || (s.b64 = 1), this.createUri(i, s);
  }
}
const Wo = zn.WebSocket || zn.MozWebSocket;
class Wg extends Ig {
  createSocket(i, s, r) {
    return Jm ? new Wo(i, s, r) : s ? new Wo(i, s) : new Wo(i);
  }
  doWrite(i, s) {
    this.ws.send(s);
  }
}
class $g extends of {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((i) => {
      this.onError("webtransport error", i);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((i) => {
        const s = zg(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = i.readable.pipeThrough(s).getReader(), S = Og();
        S.readable.pipeTo(i.writable), this._writer = S.writable.getWriter();
        const R = () => {
          r.read().then(({ done: Y, value: U }) => {
            Y || (this.onPacket(U), R());
          }).catch((Y) => {
          });
        };
        R();
        const w = { type: "open" };
        this.query.sid && (w.data = `{"sid":"${this.query.sid}"}`), this._writer.write(w).then(() => this.onOpen());
      });
    });
  }
  write(i) {
    this.writable = !1;
    for (let s = 0; s < i.length; s++) {
      const r = i[s], S = s === i.length - 1;
      this._writer.write(r).then(() => {
        S && Hc(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var i;
    (i = this._transport) === null || i === void 0 || i.close();
  }
}
const Fg = {
  websocket: Wg,
  webtransport: $g,
  polling: Jg
}, Pg = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, ep = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function Fo(o) {
  if (o.length > 8e3)
    throw "URI too long";
  const i = o, s = o.indexOf("["), r = o.indexOf("]");
  s != -1 && r != -1 && (o = o.substring(0, s) + o.substring(s, r).replace(/:/g, ";") + o.substring(r, o.length));
  let S = Pg.exec(o || ""), R = {}, w = 14;
  for (; w--; )
    R[ep[w]] = S[w] || "";
  return s != -1 && r != -1 && (R.source = i, R.host = R.host.substring(1, R.host.length - 1).replace(/;/g, ":"), R.authority = R.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), R.ipv6uri = !0), R.pathNames = tp(R, R.path), R.queryKey = np(R, R.query), R;
}
function tp(o, i) {
  const s = /\/{2,9}/g, r = i.replace(s, "/").split("/");
  return (i.slice(0, 1) == "/" || i.length === 0) && r.splice(0, 1), i.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function np(o, i) {
  const s = {};
  return i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, S, R) {
    S && (s[S] = R);
  }), s;
}
const Po = typeof addEventListener == "function" && typeof removeEventListener == "function", wc = [];
Po && addEventListener("offline", () => {
  wc.forEach((o) => o());
}, !1);
class _a extends ut {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(i, s) {
    if (super(), this.binaryType = Ug, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, i && typeof i == "object" && (s = i, i = null), i) {
      const r = Fo(i);
      s.hostname = r.host, s.secure = r.protocol === "https" || r.protocol === "wss", s.port = r.port, r.query && (s.query = r.query);
    } else s.host && (s.hostname = Fo(s.host).host);
    Gc(this, s), this.secure = s.secure != null ? s.secure : typeof location < "u" && location.protocol === "https:", s.hostname && !s.port && (s.port = this.secure ? "443" : "80"), this.hostname = s.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = s.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, s.transports.forEach((r) => {
      const S = r.prototype.name;
      this.transports.push(S), this._transportsByName[S] = r;
    }), this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, s), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Yg(this.opts.query)), Po && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, wc.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(i) {
    const s = Object.assign({}, this.opts.query);
    s.EIO = Xm, s.transport = i, this.id && (s.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: s,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[i]);
    return new this._transportsByName[i](r);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const i = this.opts.rememberUpgrade && _a.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const s = this.createTransport(i);
    s.open(), this.setTransport(s);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(i) {
    this.transport && this.transport.removeAllListeners(), this.transport = i, i.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (s) => this._onClose("transport close", s));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", _a.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(i) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", i), this.emitReserved("heartbeat"), i.type) {
        case "open":
          this.onHandshake(JSON.parse(i.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const s = new Error("server error");
          s.code = i.data, this._onError(s);
          break;
        case "message":
          this.emitReserved("data", i.data), this.emitReserved("message", i.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(i) {
    this.emitReserved("handshake", i), this.id = i.sid, this.transport.query.sid = i.sid, this._pingInterval = i.pingInterval, this._pingTimeout = i.pingTimeout, this._maxPayload = i.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const i = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + i, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, i), this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const i = this._getWritablePackets();
      this.transport.send(i), this._prevBufferLen = i.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let s = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const S = this.writeBuffer[r].data;
      if (S && (s += Lg(S)), r > 0 && s > this._maxPayload)
        return this.writeBuffer.slice(0, r);
      s += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return !0;
    const i = Date.now() > this._pingTimeoutTime;
    return i && (this._pingTimeoutTime = 0, Hc(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), i;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(i, s, r) {
    return this._sendPacket("message", i, s, r), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(i, s, r) {
    return this._sendPacket("message", i, s, r), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(i, s, r, S) {
    if (typeof s == "function" && (S = s, s = void 0), typeof r == "function" && (S = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const R = {
      type: i,
      data: s,
      options: r
    };
    this.emitReserved("packetCreate", R), this.writeBuffer.push(R), S && this.once("flush", S), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const i = () => {
      this._onClose("forced close"), this.transport.close();
    }, s = () => {
      this.off("upgrade", s), this.off("upgradeError", s), i();
    }, r = () => {
      this.once("upgrade", s), this.once("upgradeError", s);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? r() : i();
    }) : this.upgrading ? r() : i()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(i) {
    if (_a.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", i), this._onClose("transport error", i);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(i, s) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Po && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = wc.indexOf(this._offlineEventListener);
        r !== -1 && wc.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", i, s), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
_a.protocol = Xm;
class lp extends _a {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let i = 0; i < this._upgrades.length; i++)
        this._probe(this._upgrades[i]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(i) {
    let s = this.createTransport(i), r = !1;
    _a.priorWebsocketSuccess = !1;
    const S = () => {
      r || (s.send([{ type: "ping", data: "probe" }]), s.once("packet", (X) => {
        if (!r)
          if (X.type === "pong" && X.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", s), !s)
              return;
            _a.priorWebsocketSuccess = s.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (I(), this.setTransport(s), s.send([{ type: "upgrade" }]), this.emitReserved("upgrade", s), s = null, this.upgrading = !1, this.flush());
            });
          } else {
            const fe = new Error("probe error");
            fe.transport = s.name, this.emitReserved("upgradeError", fe);
          }
      }));
    };
    function R() {
      r || (r = !0, I(), s.close(), s = null);
    }
    const w = (X) => {
      const fe = new Error("probe error: " + X);
      fe.transport = s.name, R(), this.emitReserved("upgradeError", fe);
    };
    function Y() {
      w("transport closed");
    }
    function U() {
      w("socket closed");
    }
    function O(X) {
      s && X.name !== s.name && R();
    }
    const I = () => {
      s.removeListener("open", S), s.removeListener("error", w), s.removeListener("close", Y), this.off("close", U), this.off("upgrading", O);
    };
    s.once("open", S), s.once("error", w), s.once("close", Y), this.once("close", U), this.once("upgrading", O), this._upgrades.indexOf("webtransport") !== -1 && i !== "webtransport" ? this.setTimeoutFn(() => {
      r || s.open();
    }, 200) : s.open();
  }
  onHandshake(i) {
    this._upgrades = this._filterUpgrades(i.upgrades), super.onHandshake(i);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(i) {
    const s = [];
    for (let r = 0; r < i.length; r++)
      ~this.transports.indexOf(i[r]) && s.push(i[r]);
    return s;
  }
}
let ap = class extends lp {
  constructor(i, s = {}) {
    const r = typeof i == "object" ? i : s;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((S) => Fg[S]).filter((S) => !!S)), super(i, r);
  }
};
function up(o, i = "", s) {
  let r = o;
  s = s || typeof location < "u" && location, o == null && (o = s.protocol + "//" + s.host), typeof o == "string" && (o.charAt(0) === "/" && (o.charAt(1) === "/" ? o = s.protocol + o : o = s.host + o), /^(https?|wss?):\/\//.test(o) || (typeof s < "u" ? o = s.protocol + "//" + o : o = "https://" + o), r = Fo(o)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const R = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + R + ":" + r.port + i, r.href = r.protocol + "://" + R + (s && s.port === r.port ? "" : ":" + r.port), r;
}
const ip = typeof ArrayBuffer == "function", sp = (o) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(o) : o.buffer instanceof ArrayBuffer, Im = Object.prototype.toString, cp = typeof Blob == "function" || typeof Blob < "u" && Im.call(Blob) === "[object BlobConstructor]", rp = typeof File == "function" || typeof File < "u" && Im.call(File) === "[object FileConstructor]";
function ff(o) {
  return ip && (o instanceof ArrayBuffer || sp(o)) || cp && o instanceof Blob || rp && o instanceof File;
}
function Bc(o, i) {
  if (!o || typeof o != "object")
    return !1;
  if (Array.isArray(o)) {
    for (let s = 0, r = o.length; s < r; s++)
      if (Bc(o[s]))
        return !0;
    return !1;
  }
  if (ff(o))
    return !0;
  if (o.toJSON && typeof o.toJSON == "function" && arguments.length === 1)
    return Bc(o.toJSON(), !0);
  for (const s in o)
    if (Object.prototype.hasOwnProperty.call(o, s) && Bc(o[s]))
      return !0;
  return !1;
}
function op(o) {
  const i = [], s = o.data, r = o;
  return r.data = ef(s, i), r.attachments = i.length, { packet: r, buffers: i };
}
function ef(o, i) {
  if (!o)
    return o;
  if (ff(o)) {
    const s = { _placeholder: !0, num: i.length };
    return i.push(o), s;
  } else if (Array.isArray(o)) {
    const s = new Array(o.length);
    for (let r = 0; r < o.length; r++)
      s[r] = ef(o[r], i);
    return s;
  } else if (typeof o == "object" && !(o instanceof Date)) {
    const s = {};
    for (const r in o)
      Object.prototype.hasOwnProperty.call(o, r) && (s[r] = ef(o[r], i));
    return s;
  }
  return o;
}
function fp(o, i) {
  return o.data = tf(o.data, i), delete o.attachments, o;
}
function tf(o, i) {
  if (!o)
    return o;
  if (o && o._placeholder === !0) {
    if (typeof o.num == "number" && o.num >= 0 && o.num < i.length)
      return i[o.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(o))
    for (let s = 0; s < o.length; s++)
      o[s] = tf(o[s], i);
  else if (typeof o == "object")
    for (const s in o)
      Object.prototype.hasOwnProperty.call(o, s) && (o[s] = tf(o[s], i));
  return o;
}
const dp = [
  "connect",
  // used on the client side
  "connect_error",
  // used on the client side
  "disconnect",
  // used on both sides
  "disconnecting",
  // used on the server side
  "newListener",
  // used by the Node.js EventEmitter
  "removeListener"
  // used by the Node.js EventEmitter
];
var be;
(function(o) {
  o[o.CONNECT = 0] = "CONNECT", o[o.DISCONNECT = 1] = "DISCONNECT", o[o.EVENT = 2] = "EVENT", o[o.ACK = 3] = "ACK", o[o.CONNECT_ERROR = 4] = "CONNECT_ERROR", o[o.BINARY_EVENT = 5] = "BINARY_EVENT", o[o.BINARY_ACK = 6] = "BINARY_ACK";
})(be || (be = {}));
class hp {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(i) {
    this.replacer = i;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(i) {
    return (i.type === be.EVENT || i.type === be.ACK) && Bc(i) ? this.encodeAsBinary({
      type: i.type === be.EVENT ? be.BINARY_EVENT : be.BINARY_ACK,
      nsp: i.nsp,
      data: i.data,
      id: i.id
    }) : [this.encodeAsString(i)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(i) {
    let s = "" + i.type;
    return (i.type === be.BINARY_EVENT || i.type === be.BINARY_ACK) && (s += i.attachments + "-"), i.nsp && i.nsp !== "/" && (s += i.nsp + ","), i.id != null && (s += i.id), i.data != null && (s += JSON.stringify(i.data, this.replacer)), s;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(i) {
    const s = op(i), r = this.encodeAsString(s.packet), S = s.buffers;
    return S.unshift(r), S;
  }
}
class df extends ut {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(i) {
    super(), this.reviver = i;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(i) {
    let s;
    if (typeof i == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      s = this.decodeString(i);
      const r = s.type === be.BINARY_EVENT;
      r || s.type === be.BINARY_ACK ? (s.type = r ? be.EVENT : be.ACK, this.reconstructor = new mp(s), s.attachments === 0 && super.emitReserved("decoded", s)) : super.emitReserved("decoded", s);
    } else if (ff(i) || i.base64)
      if (this.reconstructor)
        s = this.reconstructor.takeBinaryData(i), s && (this.reconstructor = null, super.emitReserved("decoded", s));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + i);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(i) {
    let s = 0;
    const r = {
      type: Number(i.charAt(0))
    };
    if (be[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === be.BINARY_EVENT || r.type === be.BINARY_ACK) {
      const R = s + 1;
      for (; i.charAt(++s) !== "-" && s != i.length; )
        ;
      const w = i.substring(R, s);
      if (w != Number(w) || i.charAt(s) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(w);
    }
    if (i.charAt(s + 1) === "/") {
      const R = s + 1;
      for (; ++s && !(i.charAt(s) === "," || s === i.length); )
        ;
      r.nsp = i.substring(R, s);
    } else
      r.nsp = "/";
    const S = i.charAt(s + 1);
    if (S !== "" && Number(S) == S) {
      const R = s + 1;
      for (; ++s; ) {
        const w = i.charAt(s);
        if (w == null || Number(w) != w) {
          --s;
          break;
        }
        if (s === i.length)
          break;
      }
      r.id = Number(i.substring(R, s + 1));
    }
    if (i.charAt(++s)) {
      const R = this.tryParse(i.substr(s));
      if (df.isPayloadValid(r.type, R))
        r.data = R;
      else
        throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(i) {
    try {
      return JSON.parse(i, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(i, s) {
    switch (i) {
      case be.CONNECT:
        return Om(s);
      case be.DISCONNECT:
        return s === void 0;
      case be.CONNECT_ERROR:
        return typeof s == "string" || Om(s);
      case be.EVENT:
      case be.BINARY_EVENT:
        return Array.isArray(s) && (typeof s[0] == "number" || typeof s[0] == "string" && dp.indexOf(s[0]) === -1);
      case be.ACK:
      case be.BINARY_ACK:
        return Array.isArray(s);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class mp {
  constructor(i) {
    this.packet = i, this.buffers = [], this.reconPack = i;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(i) {
    if (this.buffers.push(i), this.buffers.length === this.reconPack.attachments) {
      const s = fp(this.reconPack, this.buffers);
      return this.finishedReconstruction(), s;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
function Om(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
const yp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: df,
  Encoder: hp,
  get PacketType() {
    return be;
  }
}, Symbol.toStringTag, { value: "Module" }));
function Xn(o, i, s) {
  return o.on(i, s), function() {
    o.off(i, s);
  };
}
const gp = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Wm extends ut {
  /**
   * `Socket` constructor.
   */
  constructor(i, s, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = i, this.nsp = s, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const i = this.io;
    this.subs = [
      Xn(i, "open", this.onopen.bind(this)),
      Xn(i, "packet", this.onpacket.bind(this)),
      Xn(i, "error", this.onerror.bind(this)),
      Xn(i, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...i) {
    return i.unshift("message"), this.emit.apply(this, i), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(i, ...s) {
    var r, S, R;
    if (gp.hasOwnProperty(i))
      throw new Error('"' + i.toString() + '" is a reserved event name');
    if (s.unshift(i), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(s), this;
    const w = {
      type: be.EVENT,
      data: s
    };
    if (w.options = {}, w.options.compress = this.flags.compress !== !1, typeof s[s.length - 1] == "function") {
      const I = this.ids++, X = s.pop();
      this._registerAckCallback(I, X), w.id = I;
    }
    const Y = (S = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || S === void 0 ? void 0 : S.writable, U = this.connected && !(!((R = this.io.engine) === null || R === void 0) && R._hasPingExpired());
    return this.flags.volatile && !Y || (U ? (this.notifyOutgoingListeners(w), this.packet(w)) : this.sendBuffer.push(w)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(i, s) {
    var r;
    const S = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (S === void 0) {
      this.acks[i] = s;
      return;
    }
    const R = this.io.setTimeoutFn(() => {
      delete this.acks[i];
      for (let Y = 0; Y < this.sendBuffer.length; Y++)
        this.sendBuffer[Y].id === i && this.sendBuffer.splice(Y, 1);
      s.call(this, new Error("operation has timed out"));
    }, S), w = (...Y) => {
      this.io.clearTimeoutFn(R), s.apply(this, Y);
    };
    w.withError = !0, this.acks[i] = w;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(i, ...s) {
    return new Promise((r, S) => {
      const R = (w, Y) => w ? S(w) : r(Y);
      R.withError = !0, s.push(R), this.emit(i, ...s);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(i) {
    let s;
    typeof i[i.length - 1] == "function" && (s = i.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: i,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    i.push((S, ...R) => (this._queue[0], S !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), s && s(S)) : (this._queue.shift(), s && s(null, ...R)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(i = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const s = this._queue[0];
    s.pending && !i || (s.pending = !0, s.tryCount++, this.flags = s.flags, this.emit.apply(this, s.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(i) {
    i.nsp = this.nsp, this.io._packet(i);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((i) => {
      this._sendConnectPacket(i);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(i) {
    this.packet({
      type: be.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, i) : i
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(i) {
    this.connected || this.emitReserved("connect_error", i);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(i, s) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", i, s), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((i) => {
      if (!this.sendBuffer.some((r) => String(r.id) === i)) {
        const r = this.acks[i];
        delete this.acks[i], r.withError && r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(i) {
    if (i.nsp === this.nsp)
      switch (i.type) {
        case be.CONNECT:
          i.data && i.data.sid ? this.onconnect(i.data.sid, i.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case be.EVENT:
        case be.BINARY_EVENT:
          this.onevent(i);
          break;
        case be.ACK:
        case be.BINARY_ACK:
          this.onack(i);
          break;
        case be.DISCONNECT:
          this.ondisconnect();
          break;
        case be.CONNECT_ERROR:
          this.destroy();
          const r = new Error(i.data.message);
          r.data = i.data.data, this.emitReserved("connect_error", r);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(i) {
    const s = i.data || [];
    i.id != null && s.push(this.ack(i.id)), this.connected ? this.emitEvent(s) : this.receiveBuffer.push(Object.freeze(s));
  }
  emitEvent(i) {
    if (this._anyListeners && this._anyListeners.length) {
      const s = this._anyListeners.slice();
      for (const r of s)
        r.apply(this, i);
    }
    super.emit.apply(this, i), this._pid && i.length && typeof i[i.length - 1] == "string" && (this._lastOffset = i[i.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(i) {
    const s = this;
    let r = !1;
    return function(...S) {
      r || (r = !0, s.packet({
        type: be.ACK,
        id: i,
        data: S
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(i) {
    const s = this.acks[i.id];
    typeof s == "function" && (delete this.acks[i.id], s.withError && i.data.unshift(null), s.apply(this, i.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(i, s) {
    this.id = i, this.recovered = s && this._pid === s, this._pid = s, this.connected = !0, this.emitBuffered(), this._drainQueue(!0), this.emitReserved("connect");
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((i) => this.emitEvent(i)), this.receiveBuffer = [], this.sendBuffer.forEach((i) => {
      this.notifyOutgoingListeners(i), this.packet(i);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((i) => i()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: be.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(i) {
    return this.flags.compress = i, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(i) {
    return this.flags.timeout = i, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(i) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(i), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(i) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(i), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(i) {
    if (!this._anyListeners)
      return this;
    if (i) {
      const s = this._anyListeners;
      for (let r = 0; r < s.length; r++)
        if (i === s[r])
          return s.splice(r, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(i) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(i), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(i) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(i), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(i) {
    if (!this._anyOutgoingListeners)
      return this;
    if (i) {
      const s = this._anyOutgoingListeners;
      for (let r = 0; r < s.length; r++)
        if (i === s[r])
          return s.splice(r, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(i) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const s = this._anyOutgoingListeners.slice();
      for (const r of s)
        r.apply(this, i.data);
    }
  }
}
function ei(o) {
  o = o || {}, this.ms = o.min || 100, this.max = o.max || 1e4, this.factor = o.factor || 2, this.jitter = o.jitter > 0 && o.jitter <= 1 ? o.jitter : 0, this.attempts = 0;
}
ei.prototype.duration = function() {
  var o = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var i = Math.random(), s = Math.floor(i * this.jitter * o);
    o = (Math.floor(i * 10) & 1) == 0 ? o - s : o + s;
  }
  return Math.min(o, this.max) | 0;
};
ei.prototype.reset = function() {
  this.attempts = 0;
};
ei.prototype.setMin = function(o) {
  this.ms = o;
};
ei.prototype.setMax = function(o) {
  this.max = o;
};
ei.prototype.setJitter = function(o) {
  this.jitter = o;
};
class nf extends ut {
  constructor(i, s) {
    var r;
    super(), this.nsps = {}, this.subs = [], i && typeof i == "object" && (s = i, i = void 0), s = s || {}, s.path = s.path || "/socket.io", this.opts = s, Gc(this, s), this.reconnection(s.reconnection !== !1), this.reconnectionAttempts(s.reconnectionAttempts || 1 / 0), this.reconnectionDelay(s.reconnectionDelay || 1e3), this.reconnectionDelayMax(s.reconnectionDelayMax || 5e3), this.randomizationFactor((r = s.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new ei({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(s.timeout == null ? 2e4 : s.timeout), this._readyState = "closed", this.uri = i;
    const S = s.parser || yp;
    this.encoder = new S.Encoder(), this.decoder = new S.Decoder(), this._autoConnect = s.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(i) {
    return arguments.length ? (this._reconnection = !!i, i || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(i) {
    return i === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = i, this);
  }
  reconnectionDelay(i) {
    var s;
    return i === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = i, (s = this.backoff) === null || s === void 0 || s.setMin(i), this);
  }
  randomizationFactor(i) {
    var s;
    return i === void 0 ? this._randomizationFactor : (this._randomizationFactor = i, (s = this.backoff) === null || s === void 0 || s.setJitter(i), this);
  }
  reconnectionDelayMax(i) {
    var s;
    return i === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = i, (s = this.backoff) === null || s === void 0 || s.setMax(i), this);
  }
  timeout(i) {
    return arguments.length ? (this._timeout = i, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(i) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new ap(this.uri, this.opts);
    const s = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const S = Xn(s, "open", function() {
      r.onopen(), i && i();
    }), R = (Y) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", Y), i ? i(Y) : this.maybeReconnectOnOpen();
    }, w = Xn(s, "error", R);
    if (this._timeout !== !1) {
      const Y = this._timeout, U = this.setTimeoutFn(() => {
        S(), R(new Error("timeout")), s.close();
      }, Y);
      this.opts.autoUnref && U.unref(), this.subs.push(() => {
        this.clearTimeoutFn(U);
      });
    }
    return this.subs.push(S), this.subs.push(w), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(i) {
    return this.open(i);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const i = this.engine;
    this.subs.push(
      Xn(i, "ping", this.onping.bind(this)),
      Xn(i, "data", this.ondata.bind(this)),
      Xn(i, "error", this.onerror.bind(this)),
      Xn(i, "close", this.onclose.bind(this)),
      // @ts-ignore
      Xn(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(i) {
    try {
      this.decoder.add(i);
    } catch (s) {
      this.onclose("parse error", s);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(i) {
    Hc(() => {
      this.emitReserved("packet", i);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(i) {
    this.emitReserved("error", i);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(i, s) {
    let r = this.nsps[i];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new Wm(this, i, s), this.nsps[i] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(i) {
    const s = Object.keys(this.nsps);
    for (const r of s)
      if (this.nsps[r].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(i) {
    const s = this.encoder.encode(i);
    for (let r = 0; r < s.length; r++)
      this.engine.write(s[r], i.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((i) => i()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(i, s) {
    var r;
    this.cleanup(), (r = this.engine) === null || r === void 0 || r.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", i, s), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const i = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const s = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        i.skipReconnect || (this.emitReserved("reconnect_attempt", i.backoff.attempts), !i.skipReconnect && i.open((S) => {
          S ? (i._reconnecting = !1, i.reconnect(), this.emitReserved("reconnect_error", S)) : i.onreconnect();
        }));
      }, s);
      this.opts.autoUnref && r.unref(), this.subs.push(() => {
        this.clearTimeoutFn(r);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const i = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", i);
  }
}
const is = {};
function Lc(o, i) {
  typeof o == "object" && (i = o, o = void 0), i = i || {};
  const s = up(o, i.path || "/socket.io"), r = s.source, S = s.id, R = s.path, w = is[S] && R in is[S].nsps, Y = i.forceNew || i["force new connection"] || i.multiplex === !1 || w;
  let U;
  return Y ? U = new nf(r, i) : (is[S] || (is[S] = new nf(r, i)), U = is[S]), s.query && !i.query && (i.query = s.queryKey), U.socket(s.path, i);
}
Object.assign(Lc, {
  Manager: nf,
  Socket: Wm,
  io: Lc,
  connect: Lc
});
let su = null;
function pp(o) {
  return su ? su.auth = { token: o } : su = Lc({
    autoConnect: !1,
    transports: ["websocket"],
    auth: { token: o }
  }), su;
}
function vp() {
  su && (su.disconnect(), su = null);
}
const lf = ["POPULAR", "MAL_ONLY", "HYBRID"], af = ["STANDARD", "BALANCED_STRICT", "BALANCED_RELAXED"], uf = ["OP_ONLY", "ED_ONLY", "MIXED"], Oc = {
  POPULAR: {
    label: "Popular Catalog",
    help: "Use only the global popular anime catalog."
  },
  MAL_ONLY: {
    label: "MAL Only",
    help: "Use only anime from linked MyAnimeList accounts."
  },
  HYBRID: {
    label: "Hybrid",
    help: "Prefer MAL picks, fill remaining rounds with popular catalog."
  }
}, zc = {
  STANDARD: {
    label: "Standard",
    help: "Simple rotation; no strict player balancing."
  },
  BALANCED_STRICT: {
    label: "Balanced Strict",
    help: "Equal per-player distribution; can fail if MAL pools are too small."
  },
  BALANCED_RELAXED: {
    label: "Balanced Relaxed",
    help: "Try to balance players, then relax constraints when needed."
  }
}, Dc = {
  OP_ONLY: {
    label: "Openings Only",
    help: "Only OP songs."
  },
  ED_ONLY: {
    label: "Endings Only",
    help: "Only ED songs."
  },
  MIXED: {
    label: "Mixed",
    help: "Mix OP, ED, and insert songs when available."
  }
}, bp = 2, Sp = 3, Ep = 2, Xt = {
  name: "",
  isPrivate: !1,
  maxPlayers: 8,
  roundCount: 10,
  guessSeconds: 20,
  sourceMode: "HYBRID",
  selectionMode: "STANDARD",
  themeMode: "MIXED",
  animeScoreMin: 1,
  animeScoreMax: 10,
  playerScoreMin: 1,
  playerScoreMax: 10
};
function zm(o) {
  return o ? {
    name: typeof o.name == "string" ? o.name : "",
    isPrivate: !!o.isPrivate,
    maxPlayers: Number.isInteger(o.maxPlayers) ? o.maxPlayers : Xt.maxPlayers,
    roundCount: Number.isInteger(o.roundCount) ? o.roundCount : Xt.roundCount,
    guessSeconds: Number.isInteger(o.guessSeconds) ? o.guessSeconds : Xt.guessSeconds,
    sourceMode: lf.includes(o.sourceMode) ? o.sourceMode : Xt.sourceMode,
    selectionMode: af.includes(o.selectionMode) ? o.selectionMode : Xt.selectionMode,
    themeMode: uf.includes(o.themeMode) ? o.themeMode : Xt.themeMode,
    animeScoreMin: Number.isInteger(o.animeScoreMin) ? o.animeScoreMin : Xt.animeScoreMin,
    animeScoreMax: Number.isInteger(o.animeScoreMax) ? o.animeScoreMax : Xt.animeScoreMax,
    playerScoreMin: Number.isInteger(o.playerScoreMin) ? o.playerScoreMin : Xt.playerScoreMin,
    playerScoreMax: Number.isInteger(o.playerScoreMax) ? o.playerScoreMax : Xt.playerScoreMax
  } : { ...Xt };
}
function vn(o, i, s, { timeoutMs: r = 1e4 } = {}) {
  return new Promise((S, R) => {
    let w = !1;
    const Y = window.setTimeout(() => {
      w || (w = !0, R(new Error("Request timed out")));
    }, r);
    o.emit(i, s, (U) => {
      if (!w)
        return w = !0, window.clearTimeout(Y), U?.ok ? S(U) : R(new Error(U?.error || U?.code || "Request failed"));
    });
  });
}
function sn(o) {
  return String(o || "").trim().toUpperCase();
}
function _p(o) {
  const s = String(o || "").trim().match(/^\/(?:amq\/lobby|amq\/invite|invite)\/([^/?#]+)/i);
  if (!s) return "";
  try {
    return sn(decodeURIComponent(s[1]));
  } catch {
    return "";
  }
}
function iu(o, i) {
  const s = sn(o), r = s ? `/amq/lobby/${encodeURIComponent(s)}` : "/amq", S = new URLSearchParams(window.location.search);
  i ? (S.set("i", i), S.delete("inviteToken"), S.delete("lobby")) : (S.delete("lobby"), S.delete("i"), S.delete("inviteToken"));
  const R = S.toString();
  window.history.replaceState({}, "", R ? `${r}?${R}` : r);
}
function Ap(o) {
  const i = String(o || "").trim();
  if (!i) return "";
  const s = i.split(".");
  if (s.length !== 3) return "";
  const r = String(s[0] || "").toUpperCase();
  return /^[A-Z0-9]{4,12}$/.test(r) ? r : "";
}
function Tp(o) {
  if (!Number.isFinite(o) || o <= 0) return "00:00";
  const i = Math.ceil(o / 1e3), s = Math.floor(i / 60), r = i % 60;
  return `${String(s).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function Vn(o, i, s) {
  const r = Number.parseInt(o, 10);
  return Number.isFinite(r) ? Math.max(i, Math.min(s, r)) : i;
}
function Ea(o, i, s, r, S) {
  const R = Vn(o?.[i], 1, 10), w = Vn(o?.[s], 1, 10), Y = Vn(S, 1, 10);
  return r === "min" ? {
    ...o,
    [i]: Math.min(Y, w),
    [s]: w
  } : {
    ...o,
    [i]: R,
    [s]: Math.max(Y, R)
  };
}
function Uc({
  label: o,
  minValue: i,
  maxValue: s,
  onMinChange: r,
  onMaxChange: S,
  hint: R = ""
}) {
  const w = Vn(i, 1, 10), Y = Vn(s, 1, 10), U = (w - 1) / 9 * 100, O = (Y - 1) / 9 * 100;
  return /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card gmq-score-range-card", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "gmq-score-range-head", children: [
      /* @__PURE__ */ m.jsx("span", { children: o }),
      /* @__PURE__ */ m.jsxs("strong", { children: [
        w,
        " - ",
        Y
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: "gmq-score-range-slider",
        style: {
          "--range-start": `${U}%`,
          "--range-end": `${O}%`
        },
        children: [
          /* @__PURE__ */ m.jsx(
            "input",
            {
              type: "range",
              min: "1",
              max: "10",
              step: "1",
              value: w,
              onChange: (I) => r(I.target.value),
              "aria-label": `${o} minimum`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              type: "range",
              min: "1",
              max: "10",
              step: "1",
              value: Y,
              onChange: (I) => S(I.target.value),
              "aria-label": `${o} maximum`
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ m.jsxs("div", { className: "gmq-score-range-foot", children: [
      /* @__PURE__ */ m.jsx("span", { children: "1" }),
      /* @__PURE__ */ m.jsx("span", { children: "10" })
    ] }),
    R ? /* @__PURE__ */ m.jsx("p", { className: "gmq-field-help gmq-muted", children: R }) : null
  ] });
}
function Dm(o) {
  const i = String(o || "").replace(/\D+/g, "");
  return i ? i.slice(0, 2) : "";
}
function Pu(o, i) {
  const s = (Number(i?.score) || 0) - (Number(o?.score) || 0);
  return s !== 0 ? s : String(o?.displayName || "").localeCompare(String(i?.displayName || ""));
}
function Np(o) {
  return Array.isArray(o) ? o.map((i) => ({
    index: Number.parseInt(i?.index, 10),
    audioUrl: typeof i?.audioUrl == "string" ? i.audioUrl : null,
    videoUrl: typeof i?.videoUrl == "string" ? i.videoUrl : null,
    sampleStartSec: Number.isFinite(i?.sampleStartSec) ? i.sampleStartSec : 0,
    sampleDurationSec: Number.isFinite(i?.sampleDurationSec) ? i.sampleDurationSec : 0
  })).filter((i) => Number.isInteger(i.index) && i.index > 0).sort((i, s) => i.index - s.index) : [];
}
function Hl(o) {
  return String(o || "").trim();
}
function Um(o) {
  const i = Hl(o).toLowerCase();
  return i ? i.includes("only host") ? "Only the host can start the game." : i.includes("all players must be ready") ? "All players must click Ready before the host can start." : i.includes("not enough players") ? "Not enough players to start. Invite more players or lower the minimum players setting." : i.includes("balanced strict") ? "Balanced strict could not build fair rounds from MAL lists. Try BALANCED_RELAXED or HYBRID." : i.includes("mal_only") ? "MAL_ONLY could not build enough rounds from linked MAL lists. Try HYBRID or POPULAR." : i.includes("playable round media") || i.includes("round seeds") || i.includes("media provider") ? "Could not prepare enough playable songs for this match. Try fewer rounds or different source/theme settings." : i.includes("timed out") ? "Game start timed out. Please try again." : Hl(o) : "Could not start the game right now. Please try again.";
}
function Mp(o) {
  const i = Hl(o).toLowerCase();
  return i ? i.includes("at least 2 characters") ? "Type at least 2 characters to search." : i.includes("too many") || i.includes("rate") ? "Search is rate-limited right now. Wait a few seconds and try again." : i.includes("timed out") ? "Search timed out. Please try again." : "Search is temporarily unavailable. You can still submit a typed guess." : "Search is temporarily unavailable. You can still submit a typed guess.";
}
function ss(o) {
  return o === "autoplay_blocked" ? "Autoplay was blocked or the sample failed to auto-start. Press Play sample." : o === "source_unavailable" ? "This sample source failed to load for your browser." : "Could not play sample audio for this round.";
}
function xp(o) {
  const i = Hl(o).toLowerCase();
  return i ? i.includes("lobby not found") || i.includes("not accepting new players") || i.includes("lobby is full") : !1;
}
function Cp(o) {
  const i = Hl(o).toLowerCase();
  return i ? i.includes("kicked from this lobby") ? Hl(o) : i.includes("valid invite token is required") ? "This lobby is private. Ask the host for the invite link." : Hl(o) : "Could not join this lobby right now.";
}
function Rp(o) {
  const i = String(o || "").trim().toLowerCase();
  return i === "host_offline_timeout" ? "Lobby was closed because the host stayed offline too long." : i === "zero_connected_round_streak" ? "Lobby was closed due to inactivity (no connected players for multiple rounds)." : "Lobby was closed.";
}
function jm(o) {
  const i = String(o?.name || ""), s = Hl(o?.message).toLowerCase();
  return i === "NotAllowedError" || s.includes("notallowederror") || s.includes("user gesture") || s.includes("permission") || s.includes("autoplay") ? "autoplay_blocked" : i === "AbortError" ? "aborted" : i === "NotSupportedError" || s.includes("failed to load") || s.includes("no supported source") || s.includes("not supported") ? "source_unavailable" : "play_failed";
}
function qp() {
  const o = Bm(), i = g.useRef(null), s = g.useRef(null), r = g.useRef(""), S = g.useRef(null), R = g.useRef(!1), w = g.useRef(null), Y = g.useRef(!1), U = g.useRef(!1), O = g.useRef(0), I = g.useRef(!1), X = g.useRef(!1), fe = g.useRef(null), $e = g.useRef(null), it = g.useRef(null), rt = g.useRef(null), Et = g.useRef(null), ot = g.useRef(null), cn = g.useRef(0.25), Be = g.useRef(null), mt = g.useRef(/* @__PURE__ */ new Map()), Le = g.useRef(/* @__PURE__ */ new Map()), Fe = g.useRef(/* @__PURE__ */ new Map()), ue = g.useRef(/* @__PURE__ */ new Map()), ke = g.useRef(/* @__PURE__ */ new Map()), qt = g.useRef(/* @__PURE__ */ new Map()), Ot = g.useRef(/* @__PURE__ */ new Map()), ft = g.useRef([]), Pe = g.useRef(/* @__PURE__ */ new Set()), rn = g.useRef(0), Vt = g.useRef([]), Ze = g.useRef(!1), M = g.useRef(null), B = g.useRef(!1), K = g.useRef(0), te = g.useRef(null), ne = g.useRef(null), v = g.useRef({ roundId: null, key: "" }), q = g.useRef(null), L = g.useRef(""), H = g.useRef(null), [$, re] = g.useState(!0), [J, ye] = g.useState(""), [ze, de] = g.useState(""), [dl, dt] = g.useState(""), [Qn, Zn] = g.useState(!1), [se, ti] = g.useState(null), [ni, li] = g.useState([]), [Aa, ai] = g.useState(""), [Ta, Na] = g.useState(!1), [Gl, Ge] = g.useState(!1), [Qt, Zt] = g.useState(null), [zt, _t] = g.useState(null), [Yc, ui] = g.useState(!1), [yt, Dt] = g.useState(Xt), [Ke, Te] = g.useState(Xt), [on, At] = g.useState(String(Xt.maxPlayers)), [cu, ru] = g.useState(String(Xt.maxPlayers)), [rs, Ma] = g.useState(""), [xa, bn] = g.useState(""), [D, Kt] = g.useState(null), [Yl, os] = g.useState(null), [F, Dn] = g.useState("WAITING"), [Sn, kl] = g.useState(null), [fs, ii] = g.useState("00:00"), [oe, Ca] = g.useState(null), [ou, hl] = g.useState([]), [Jt, Ut] = g.useState(null), [De, st] = g.useState(null), [Un, ml] = g.useState(!1), [Xl, Vl] = g.useState([]), [jt, Kn] = g.useState([]), [yl, En] = g.useState([]), [Jn, jn] = g.useState([]), [fn, Ye] = g.useState(""), [Ra, qa] = g.useState(null), [In, It] = g.useState([]), [si, gl] = g.useState(!1), [fu, pl] = g.useState(!1), [ci, Wt] = g.useState(!1), [Wn, Tt] = g.useState(null), [du, vl] = g.useState(!1), [wn, ds] = g.useState(0.25), [Oa, Ql] = g.useState(""), [wt, Bt] = g.useState(""), [ri, _n] = g.useState(""), [Zl, $n] = g.useState(!1), [za, Fn] = g.useState({ ready: 0, failed: 0, total: 0 }), [oi, bl] = g.useState(""), [fi, Pn] = g.useState(!1), [hf, el] = g.useState(null), [et, Bn] = g.useState(null), [Da, di] = g.useState(""), [Ln, Lt] = g.useState(!1), hs = g.useCallback((f) => {
    const h = Dm(f);
    At(h), h && Dt((N) => ({
      ...N,
      maxPlayers: Vn(h, 1, 8)
    }));
  }, []), hi = g.useCallback((f) => {
    const h = Dm(f);
    ru(h), h && Te((N) => ({
      ...N,
      maxPlayers: Vn(h, 1, 8)
    }));
  }, []), ms = g.useCallback((f) => {
    Dt((h) => Ea(h, "animeScoreMin", "animeScoreMax", "min", f));
  }, []), Ua = g.useCallback((f) => {
    Dt((h) => Ea(h, "animeScoreMin", "animeScoreMax", "max", f));
  }, []), Hn = g.useCallback((f) => {
    Dt((h) => Ea(h, "playerScoreMin", "playerScoreMax", "min", f));
  }, []), mi = g.useCallback((f) => {
    Dt((h) => Ea(h, "playerScoreMin", "playerScoreMax", "max", f));
  }, []), ja = g.useCallback((f) => {
    Te((h) => Ea(h, "animeScoreMin", "animeScoreMax", "min", f));
  }, []), tl = g.useCallback((f) => {
    Te((h) => Ea(h, "animeScoreMin", "animeScoreMax", "max", f));
  }, []), yi = g.useCallback((f) => {
    Te((h) => Ea(h, "playerScoreMin", "playerScoreMax", "min", f));
  }, []), hu = g.useCallback((f) => {
    Te((h) => Ea(h, "playerScoreMin", "playerScoreMax", "max", f));
  }, []), mu = g.useCallback(() => {
    const f = Vn(yt.maxPlayers, 1, 8), h = on ? Vn(on, 1, 8) : f;
    return Dt((N) => ({ ...N, maxPlayers: h })), At(String(h)), h;
  }, [yt.maxPlayers, on]), Kl = g.useCallback(() => {
    const f = Vn(Ke.maxPlayers, 1, 8), h = cu ? Vn(cu, 1, 8) : f;
    return Te((N) => ({ ...N, maxPlayers: h })), ru(String(h)), h;
  }, [Ke.maxPlayers, cu]), $t = g.useCallback(() => {
    q.current && (window.clearTimeout(q.current), q.current = null);
  }, []);
  g.useEffect(() => {
    s.current = D;
  }, [D]), g.useEffect(() => {
    r.current = xa;
  }, [xa]), g.useEffect(() => {
    cn.current = wn;
  }, [wn]), g.useEffect(() => {
    L.current = fn;
  }, [fn]), g.useEffect(() => {
    H.current = Number.isInteger(Ra) ? Ra : null;
  }, [Ra]), g.useEffect(() => {
    if (!Ta && !Gl && !Qt && !zt) return;
    const f = (h) => {
      if (h.key === "Escape") {
        if (zt) {
          _t(null);
          return;
        }
        if (Qt) {
          Zt(null);
          return;
        }
        if (Gl) {
          Ge(!1);
          return;
        }
        Na(!1);
      }
    };
    return window.addEventListener("keydown", f), () => window.removeEventListener("keydown", f);
  }, [Ta, zt, Qt, Gl]), g.useEffect(() => {
    if (!zt) return;
    (D?.players || []).some((h) => h.userId === zt.userId) || _t(null);
  }, [zt, D]), g.useEffect(() => {
    if (!Qt) return;
    (D?.players || []).some((h) => h.userId === Qt.userId) || Zt(null);
  }, [Qt, D]), g.useEffect(() => {
    Ln && (Zt(null), _t(null));
  }, [Ln]), g.useEffect(() => {
    if (!D || D.status !== "WAITING") {
      Ge(!1);
      return;
    }
    if (Gl) return;
    const f = zm(D);
    Te(f), ru(String(f.maxPlayers));
  }, [D, Gl]), g.useEffect(() => {
    if (!ze) return;
    const f = window.setTimeout(() => de(""), 7e3);
    return () => window.clearTimeout(f);
  }, [ze]), g.useEffect(() => {
    if (!dl) return;
    const f = window.setTimeout(() => dt(""), 4500);
    return () => window.clearTimeout(f);
  }, [dl]), g.useEffect(() => () => {
    $t();
  }, [$t]), g.useEffect(() => {
    if ($t(), F !== "FINISHED" || !De) {
      ml(!1);
      return;
    }
    return ml(!0), q.current = window.setTimeout(() => {
      q.current = null, ml(!1);
    }, 7e3), () => {
      $t();
    };
  }, [$t, De, F]), g.useEffect(() => {
    if (!si || F !== "GUESSING") return;
    const f = (h) => {
      h.key === "Escape" && (gl(!1), rt.current?.blur?.());
    };
    return window.addEventListener("keydown", f), () => {
      window.removeEventListener("keydown", f);
    };
  }, [F, si]), g.useEffect(() => {
    F !== "GUESSING" && gl(!1);
  }, [F]);
  const gi = g.useMemo(() => {
    const f = /* @__PURE__ */ new Map();
    for (const h of D?.players || [])
      f.set(h.userId, h.displayName);
    return f;
  }, [D]), gt = g.useCallback((f) => gi.get(f) || `User ${f}`, [gi]), An = g.useCallback(() => {
    ot.current && (window.clearTimeout(ot.current), ot.current = null);
  }, []), Nt = g.useCallback(() => {
    An();
    const f = Et.current;
    f?.pause && f.pause(), fe.current && fe.current !== f && fe.current.pause(), $e.current && $e.current !== f && $e.current.pause(), Et.current = null, Wt(!1);
  }, [An]), Ft = g.useCallback(() => {
    const f = it.current;
    if (f) {
      f.pause();
      try {
        f.currentTime = 0;
      } catch {
      }
    }
  }, []), nl = g.useCallback(() => {
    const f = Vt.current;
    if (!Array.isArray(f) || f.length === 0) {
      Fn({ ready: 0, failed: 0, total: 0 });
      return;
    }
    let h = 0, N = 0;
    for (const j of f) {
      const G = Le.current.get(j);
      G === "ready" ? h += 1 : G === "failed" && (N += 1);
    }
    Fn({ ready: h, failed: N, total: f.length });
  }, []), Jl = g.useCallback((f = null) => {
    const h = f instanceof Set ? f : null, N = [];
    for (const [j] of Ot.current)
      h && h.has(j) || N.push(j);
    for (const j of N) {
      const G = Ot.current.get(j);
      if (G) {
        try {
          G.pause?.(), G.removeAttribute("src"), G.load?.();
        } catch {
        }
        G.parentNode && G.parentNode.removeChild(G);
      }
      Ot.current.delete(j), qt.current.delete(j), ke.current.delete(j);
    }
  }, []), ll = g.useCallback(() => {
    Ze.current = !0, mt.current.clear(), Le.current.clear(), Fe.current.clear(), ue.current.clear(), ft.current = [], Pe.current.clear(), rn.current = 0, Vt.current = [], M.current = null, B.current = !1, Jl(), $n(!1), Fn({ ready: 0, failed: 0, total: 0 }), bl(""), Pn(!1);
  }, [Jl]), Il = g.useCallback((f, h = "video") => {
    const N = typeof f == "string" ? f.trim() : "";
    if (!N)
      return Promise.reject(new Error("Missing media url"));
    const j = ke.current.get(N);
    if (j === "ready")
      return Promise.resolve(!0);
    const G = qt.current.get(N);
    if (j === "loading" && G)
      return G;
    ke.current.set(N, "loading");
    const P = new Promise((ce, Ue) => {
      if (Ze.current) {
        ke.current.set(N, "failed"), Ue(new Error("Preload manager was reset"));
        return;
      }
      const le = document.createElement(h === "audio" ? "audio" : "video");
      le.preload = "auto", le.muted = !0, le.playsInline = !0, le.style.position = "absolute", le.style.left = "-10000px", le.style.width = "1px", le.style.height = "1px", le.style.opacity = "0";
      const xe = (Al) => {
        if (Mt(), Al) {
          ke.current.set(N, "ready"), Ot.current.set(N, le), ce(!0);
          return;
        }
        ke.current.set(N, "failed"), Ot.current.delete(N), le.parentNode && le.parentNode.removeChild(le), Ue(new Error("Media preload failed"));
      }, Mt = () => {
        window.clearTimeout(en), le.removeEventListener("loadeddata", Gt), le.removeEventListener("canplaythrough", Gt), le.removeEventListener("error", xt);
      }, Gt = () => xe(!0), xt = () => xe(!1), en = window.setTimeout(() => xe(!1), 12e3);
      le.addEventListener("loadeddata", Gt, { once: !0 }), le.addEventListener("canplaythrough", Gt, { once: !0 }), le.addEventListener("error", xt, { once: !0 }), document.body.appendChild(le), le.src = N, le.load();
    }).finally(() => {
      ke.current.get(N) !== "loading" && qt.current.delete(N);
    });
    return qt.current.set(N, P), P;
  }, []), wa = g.useCallback(async (f) => {
    const h = Number.parseInt(f, 10);
    if (!Number.isInteger(h) || h <= 0 || Ze.current) return !1;
    const N = Fe.current.get(h);
    if (N) return N;
    if (Le.current.get(h) === "ready") return !0;
    const G = mt.current.get(h);
    if (!G)
      return Le.current.set(h, "failed"), nl(), !1;
    const P = [G.audioUrl, G.videoUrl].filter((Ue, le, xe) => Ue && xe.indexOf(Ue) === le);
    ue.current.set(h, new Set(P)), Le.current.set(h, "loading"), nl();
    const ce = (async () => {
      if (P.length === 0)
        return Le.current.set(h, "failed"), !1;
      const le = (await Promise.allSettled(P.map((xe) => {
        const Mt = G.audioUrl && xe === G.audioUrl ? "audio" : "video";
        return Il(xe, Mt);
      }))).some((xe) => xe.status === "fulfilled");
      return Le.current.set(h, le ? "ready" : "failed"), le;
    })().finally(() => {
      Fe.current.delete(h), nl();
    });
    return Fe.current.set(h, ce), ce;
  }, [Il, nl]), yu = g.useCallback(() => {
    if (!Ze.current)
      for (; rn.current < Ep && ft.current.length > 0; ) {
        const f = ft.current.shift();
        Pe.current.delete(f);
        const h = Le.current.get(f);
        h === "ready" || h === "loading" || (rn.current += 1, wa(f).catch(() => !1).finally(() => {
          rn.current = Math.max(0, rn.current - 1), yu();
        }));
      }
  }, [wa]), Wl = g.useCallback((f = []) => {
    for (const h of f) {
      const N = Number.parseInt(h, 10);
      if (!Number.isInteger(N) || N <= 0 || !mt.current.has(N)) continue;
      const j = Le.current.get(N);
      j === "ready" || j === "loading" || Pe.current.has(N) || (Le.current.set(N, "pending"), ft.current.push(N), Pe.current.add(N));
    }
    nl(), yu();
  }, [yu, nl]), gu = g.useCallback(async (f, h = 2e4) => {
    const N = (Array.isArray(f) ? f : []).map((G) => Number.parseInt(G, 10)).filter((G) => Number.isInteger(G) && G > 0);
    if (N.length === 0) return { ok: !0 };
    const j = Date.now();
    for (; !Ze.current; ) {
      const G = N.filter((ce) => Le.current.get(ce) === "failed");
      if (G.length > 0)
        return { ok: !1, reason: "failed", failedIndexes: G };
      if (N.every((ce) => Le.current.get(ce) === "ready")) return { ok: !0 };
      if (Date.now() - j >= h)
        return { ok: !1, reason: "timeout" };
      await new Promise((ce) => window.setTimeout(ce, 120));
    }
    return { ok: !1, reason: "cancelled" };
  }, []), pu = g.useCallback((f) => !f || f.ok ? "" : f.reason === "failed" ? "Failed to preload required round media. Retry to continue." : f.reason === "timeout" ? "Preloading required media timed out. Retry to continue." : "Preloading was interrupted. Retry to continue.", []), vu = g.useCallback((f = []) => {
    const h = new Set(
      (Array.isArray(f) ? f : []).map((j) => Number.parseInt(j, 10)).filter((j) => Number.isInteger(j) && j > 0)
    ), N = /* @__PURE__ */ new Set();
    for (const [j, G] of ue.current)
      if (h.has(j))
        for (const P of G || []) N.add(P);
    for (const j of [...ue.current.keys()])
      h.has(j) || (ue.current.delete(j), Le.current.delete(j), Fe.current.delete(j));
    ft.current = ft.current.filter((j) => h.has(j)), Pe.current = new Set(ft.current), Jl(N);
  }, [Jl]), Ba = g.useCallback(async (f, h) => {
    const N = sn(f), j = Number.parseInt(h, 10);
    if (!N || !Number.isInteger(j) || B.current) return;
    const G = i.current;
    if (G?.connected) {
      B.current = !0;
      try {
        await vn(G, "game:preload_ready", {
          lobbyCode: N,
          sessionId: j
        });
      } catch (P) {
        B.current = !1, de(P.message);
      }
    }
  }, []), ys = g.useCallback(async ({ sessionId: f, lobbyCode: h, manifest: N }) => {
    ll(), Ze.current = !1;
    const j = Np(N);
    mt.current = new Map(j.map((ce) => [ce.index, ce])), M.current = Number.parseInt(f, 10) || null, B.current = !1, bl(""), Pn(!1);
    const G = j.slice(0, bp).map((ce) => ce.index);
    if (Vt.current = G, nl(), G.length === 0) {
      await Ba(h, M.current);
      return;
    }
    $n(!0), Wl(G);
    const P = await gu(G);
    if (!Ze.current) {
      if (!P.ok) {
        bl(pu(P)), $n(!0);
        return;
      }
      $n(!1), await Ba(h, M.current);
    }
  }, [
    pu,
    Wl,
    ll,
    Ba,
    nl,
    gu
  ]), kc = g.useCallback(async () => {
    if (Ze.current || B.current) return;
    const f = s.current?.code, h = M.current, N = Vt.current;
    if (!f || !Number.isInteger(h) || !Array.isArray(N) || N.length === 0)
      return;
    Pn(!0), bl(""), $n(!0), Wl(N);
    const j = await gu(N);
    if (!Ze.current) {
      if (!j.ok) {
        bl(pu(j)), Pn(!1);
        return;
      }
      Pn(!1), $n(!1), await Ba(f, h);
    }
  }, [pu, Wl, Ba, gu]), gs = g.useCallback((f) => {
    const h = Number.parseInt(f, 10);
    if (!Number.isInteger(h) || h <= 0) return;
    const N = [];
    for (let j = 0; j < Sp; j += 1)
      N.push(h + j);
    Wl(N), vu(N);
  }, [Wl, vu]), ps = g.useCallback((f) => {
    const h = String(f || "0");
    let N = 2166136261;
    for (let j = 0; j < h.length; j += 1)
      N ^= h.charCodeAt(j), N = Math.imul(N, 16777619);
    return (N >>> 0) / 4294967295;
  }, []), pi = g.useCallback(async (f) => {
    if (!f) return null;
    const h = Number(f.duration);
    if (Number.isFinite(h) && h > 0) return h;
    await new Promise((j) => {
      let G = !1;
      const P = () => {
        G || (G = !0, ce(), j());
      }, ce = () => {
        f.removeEventListener("loadedmetadata", P), f.removeEventListener("durationchange", P), f.removeEventListener("loadeddata", P), f.removeEventListener("error", P);
      };
      f.addEventListener("loadedmetadata", P), f.addEventListener("durationchange", P), f.addEventListener("loadeddata", P), f.addEventListener("error", P), window.setTimeout(P, 2e3);
    });
    const N = Number(f.duration);
    return Number.isFinite(N) && N > 0 ? N : null;
  }, []), vs = g.useCallback(async (f, h) => {
    const N = Be.current;
    if (Number.isFinite(N) && N >= 0) return N;
    const j = Number.isFinite(h?.sampleStartSec) ? Math.max(0, h.sampleStartSec) : 0;
    if (j > 0)
      return Be.current = j, j;
    const G = Number.isFinite(h?.sampleDurationSec) ? Math.max(1, h.sampleDurationSec) : 10, P = await pi(f);
    if (!Number.isFinite(P) || P <= 0)
      return Be.current = j, j;
    const ce = Math.floor(P - G);
    if (ce <= 0)
      return Be.current = 0, 0;
    const Ue = `${oe?.roundId || 0}:${h?.animeId || 0}:${G}`, le = ps(Ue), xe = Math.floor(le * (ce + 1));
    return Be.current = xe, xe;
  }, [oe?.roundId, ps, pi]), La = g.useCallback(async () => {
    const f = it.current;
    if (!f) return !1;
    f.volume = Math.max(0, Math.min(1, Number(cn.current))), f.muted = !1;
    try {
      return await f.play(), vl(!1), _n(""), !0;
    } catch (h) {
      const N = jm(h);
      return N === "autoplay_blocked" ? (vl(!0), !1) : (N !== "aborted" && _n("Could not play solution video in this browser."), vl(!1), !1);
    }
  }, []), Ha = g.useCallback(async ({ isAutoplay: f = !1 } = {}) => {
    const h = oe?.sample, N = h?.audioUrl ? Ot.current.get(h.audioUrl) : null, j = h?.videoUrl ? Ot.current.get(h.videoUrl) : null, G = N || fe.current, P = j || $e.current;
    if (F !== "GUESSING" || !G && !P || !h?.audioUrl && !h?.videoUrl) return !1;
    An(), Nt(), Bt("");
    const ce = Number.isFinite(h.sampleDurationSec) ? Math.max(1, h.sampleDurationSec) : 10, Ue = Math.max(0, Math.min(1, Number(cn.current))), le = async (xt, en) => {
      if (!xt) return { ok: !1, reason: "source_unavailable" };
      xt.volume = Ue, xt.muted = !1;
      const Al = await vs(xt, h);
      try {
        xt.currentTime = Al;
      } catch {
      }
      try {
        return await xt.play(), Et.current = xt, Tt(en), pl(!1), Bt(""), Wt(!0), ot.current = window.setTimeout(() => {
          const Gn = Et.current;
          Gn && (Gn.pause(), Wt(!1), Et.current = null);
        }, ce * 1e3), { ok: !0, reason: null };
      } catch (Gn) {
        return { ok: !1, reason: jm(Gn) };
      }
    }, xe = h?.audioUrl ? await le(G, "audio") : { ok: !1, reason: "source_unavailable" };
    if (xe.ok) return !0;
    const Mt = h?.videoUrl ? await le(P, "video") : { ok: !1, reason: "source_unavailable" };
    if (Mt.ok) return !0;
    const Gt = [xe.reason, Mt.reason].filter(Boolean);
    return Gt.includes("autoplay_blocked") ? (pl(!0), Bt(ss("autoplay_blocked")), !1) : (pl(!1), Gt.includes("source_unavailable") ? (Bt(ss("source_unavailable")), !1) : ((!Gt.includes("aborted") || !f) && Bt(ss("play_failed")), !1));
  }, [An, F, vs, oe, Nt]), Tn = g.useCallback(() => {
    $t(), te.current && (window.clearTimeout(te.current), te.current = null), ne.current && (window.clearTimeout(ne.current), ne.current = null), v.current = { roundId: null, key: "" }, ll(), Nt(), Ft(), os(null), Dn("WAITING"), kl(null), Ca(null), hl([]), Ut(null), st(null), ml(!1), Vl([]), Kn([]), En([]), jn([]), Ye(""), qa(null), L.current = "", H.current = null, It([]), Ql(""), Bt(""), _n(""), pl(!1), Tt(null), vl(!1), el(null), Lt(!1);
  }, [$t, ll, Nt, Ft]), bu = g.useCallback((f) => {
    const h = f || {}, N = h.phase || "WAITING", j = Array.isArray(h?.solution?.scores) ? h.solution.scores : null;
    if (Dn(N), Ca(h.round || null), Kn(Array.isArray(h.readyUserIds) ? h.readyUserIds : []), kl(h.endsAt || h.solution?.endsAt || null), N === "WAITING" ? Vl([]) : Array.isArray(j) && Vl(j.slice().sort(Pu)), h?.round?.isSuddenDeath ? el((G) => ({
      roundIndex: Number.parseInt(h?.round?.index, 10) || G?.roundIndex || null,
      tiedUserIds: Array.isArray(G?.tiedUserIds) ? G.tiedUserIds : []
    })) : el(null), N === "ANSWERS_REVEAL") {
      hl(Array.isArray(h.answers) ? h.answers : []), Ut(null);
      return;
    }
    if (N === "SOLUTION_REVEAL") {
      hl(Array.isArray(h.answers) ? h.answers : []), Ut(h.solution || null);
      return;
    }
    N === "WAITING" && (hl([]), Ut(null));
  }, []), Ga = g.useCallback(async (f) => {
    const h = i.current;
    if (!(!h?.connected || !f))
      try {
        const N = await vn(h, "round:sync", { lobbyCode: f });
        bu(N?.state || {});
      } catch (N) {
        de(N.message);
      }
  }, [bu]), Pt = g.useCallback(async () => {
    if (!Y.current) {
      Y.current = !0, ui(!0);
      try {
        const f = await Fu("/game/lobbies");
        li(Array.isArray(f.lobbies) ? f.lobbies : []);
      } finally {
        Y.current = !1, ui(!1);
      }
    }
  }, []), Su = g.useCallback(async (f, h) => {
    const N = i.current;
    if (!N) return;
    const j = {
      lobbyCode: f,
      ...h ? { inviteToken: h } : {}
    };
    if (!N.connected) {
      S.current = j, N.connect();
      return;
    }
    await vn(N, "lobby:join", j), await Ga(f);
  }, [Ga]), Ya = g.useCallback(async (f, h = "", N = {}) => {
    const j = sn(f);
    if (!j) return de("Lobby code is required");
    const G = !!N?.fromDirectory, P = Date.now();
    if (!U.current && !(O.current > P)) {
      U.current = !0, ye("join"), de(""), dt("");
      try {
        const ce = {};
        h && (ce.inviteToken = h);
        const Ue = await Fu(`/game/lobbies/${j}/join`, {
          method: "POST",
          body: JSON.stringify(ce)
        });
        Kt(Ue.lobby), bn(h || ""), Tn(), iu(j, h || ""), await Su(j, h || ""), dt(`Joined lobby ${j}`);
      } catch (ce) {
        O.current = Date.now() + 800, de(Cp(ce?.message)), (G || xp(ce?.message)) && (li((Ue) => Ue.filter((le) => le?.code !== j)), Pt().catch(() => {
        }));
      } finally {
        U.current = !1, ye("");
      }
    }
  }, [Tn, Pt, Su]), Xc = g.useCallback(async () => {
    ye("create"), de(""), dt("");
    try {
      const f = mu(), h = {
        ...yt,
        maxPlayers: f
      }, N = await Fu("/game/lobbies", {
        method: "POST",
        body: JSON.stringify(h)
      });
      Kt(N.lobby), Na(!1), Tn(), iu(N.lobby.code, ""), await Su(N.lobby.code, ""), dt(`Created lobby ${N.lobby.code}`);
    } catch (f) {
      de(f.message);
    } finally {
      ye("");
    }
  }, [Tn, mu, yt, Su]), Vc = g.useCallback(() => {
    if (!D || D.status !== "WAITING") return;
    const f = zm(D);
    Te(f), ru(String(f.maxPlayers)), Ge(!0);
  }, [D]), Qc = g.useCallback(async () => {
    if (!(!D?.code || !i.current)) {
      ye("settings"), de("");
      try {
        const f = Kl(), h = {
          ...Ke,
          maxPlayers: f
        };
        await vn(i.current, "lobby:update_settings", {
          lobbyCode: D.code,
          settings: h
        }), Ge(!1), dt("Lobby settings updated.");
      } catch (f) {
        de(f.message);
      } finally {
        ye("");
      }
    }
  }, [Kl, Ke, D]), Zc = g.useCallback(async () => {
    if (D?.code) {
      ye("leave"), de("");
      try {
        i.current?.connected && await vn(i.current, "lobby:leave", { lobbyCode: D.code });
      } catch (f) {
        de(f.message);
      } finally {
        Kt(null), bn(""), Ge(!1), Zt(null), _t(null), iu("", ""), Tn(), ye(""), Pt().catch(() => {
        });
      }
    }
  }, [Tn, Pt, D]), Kc = g.useCallback(async () => {
    if (!(!D?.code || !i.current)) {
      ye("start"), Lt(!0), de("");
      try {
        await vn(i.current, "game:start", { lobbyCode: D.code }, { timeoutMs: 12e4 });
      } catch (f) {
        Lt(!1), de(Um(f.message));
      } finally {
        ye("");
      }
    }
  }, [D]), al = g.useCallback(async ({ force: f = !1, guessTextOverride: h, guessAnimeIdOverride: N } = {}) => {
    if (!D?.code || !oe?.roundId || !i.current || se && jt.includes(se.id)) return;
    const j = typeof h == "string" ? h : L.current, G = N !== void 0 ? N : H.current, P = String(j || "").trim(), ce = Number.isInteger(G) ? G : null, Ue = `${P.toLowerCase()}|${ce ?? ""}`, le = v.current;
    if (!(!f && le.roundId === oe.roundId && le.key === Ue))
      try {
        await vn(i.current, "round:submit_guess", {
          lobbyCode: D.code,
          roundId: oe.roundId,
          guessText: P,
          guessAnimeId: ce
        }), v.current = {
          roundId: oe.roundId,
          key: Ue
        };
      } catch {
      }
  }, [D, jt, oe, se]), Jc = g.useCallback(async () => {
    if (!(!D?.code || !i.current || !se)) {
      ye("ready"), de("");
      try {
        const f = jt.includes(se.id);
        f || await al({ force: !0 }), await vn(i.current, "round:set_ready", { lobbyCode: D.code, ready: !f });
      } catch (f) {
        de(f.message);
      } finally {
        ye("");
      }
    }
  }, [D, jt, al, se]), Ic = g.useCallback(async () => {
    if (!(!D?.code || !i.current || !se)) {
      ye("lobby-ready"), de("");
      try {
        const f = yl.includes(se.id);
        await vn(i.current, "lobby:set_ready", {
          lobbyCode: D.code,
          ready: !f
        });
      } catch (f) {
        de(f.message);
      } finally {
        ye("");
      }
    }
  }, [D, yl, se]), Wc = g.useCallback((f) => {
    if (!D?.code || !se || D.host?.id !== se.id) return;
    const h = Number.parseInt(f?.userId, 10);
    if (!Number.isInteger(h) || h === se?.id) return;
    const N = f?.displayName || `User ${h}`;
    Zt(null), _t({
      userId: h,
      displayName: N
    });
  }, [D, se]), vi = g.useCallback((f) => {
    if (!D?.code || !se || D.host?.id !== se.id) return;
    const h = Number.parseInt(f?.userId, 10);
    if (!Number.isInteger(h) || h === se?.id) return;
    const N = f?.displayName || `User ${h}`;
    _t(null), Zt({
      userId: h,
      displayName: N
    });
  }, [D, se]), ka = g.useCallback(async () => {
    if (!(!D?.code || !i.current || !Qt) && !X.current) {
      X.current = !0, ye("promote"), de("");
      try {
        await vn(i.current, "lobby:promote", {
          lobbyCode: D.code,
          userId: Qt.userId
        }), dt(`${Qt.displayName} is now the host.`), Zt(null);
      } catch (f) {
        de(f.message);
      } finally {
        X.current = !1, ye("");
      }
    }
  }, [D, Qt]), $c = g.useCallback(async () => {
    if (!(!D?.code || !i.current || !zt) && !I.current) {
      I.current = !0, ye("kick"), de("");
      try {
        await vn(i.current, "lobby:kick", {
          lobbyCode: D.code,
          userId: zt.userId
        }), dt(`${zt.displayName} was kicked from the lobby.`), _t(null);
      } catch (f) {
        de(f.message);
      } finally {
        I.current = !1, ye("");
      }
    }
  }, [zt, D]), bs = g.useCallback(async () => {
    if (D?.code) {
      ye("invite"), de(""), dt("");
      try {
        const f = await Fu(`/game/lobbies/${D.code}/invite`);
        f.inviteToken ? (bn(f.inviteToken), iu(D.code, f.inviteToken)) : (bn(""), iu(D.code, "")), navigator.clipboard?.writeText ? (await navigator.clipboard.writeText(f.inviteUrl), dt("Invite link copied")) : dt(f.inviteUrl);
      } catch (f) {
        de(f.message);
      } finally {
        ye("");
      }
    }
  }, [D]);
  g.useEffect(() => {
    if (!o) return Mm();
    const f = pp(o);
    i.current = f;
    const h = async () => {
      Zn(!0), de("");
      try {
        S.current ? (await vn(f, "lobby:join", S.current), await Ga(S.current.lobbyCode), S.current = null) : s.current?.code ? (await vn(f, "lobby:join", {
          lobbyCode: s.current.code,
          ...r.current ? { inviteToken: r.current } : {}
        }), await Ga(s.current.code)) : Pt().catch(() => {
        });
      } catch (Q) {
        de(Q.message);
      }
    }, N = () => Zn(!1), j = (Q) => {
      const Se = String(Q?.code || ""), Xe = Hl(Q?.message);
      if (Se === "game_start_failed") {
        Lt(!1), de(Um(Xe));
        return;
      }
      de(Xe || "Realtime error");
    }, G = ({ lobby: Q }) => {
      Q && (Kt(Q), Q.status !== "WAITING" && (En([]), jn([]), Lt(!1)));
    }, P = (Q) => {
      const Se = sn(Q?.lobbyCode), Xe = sn(s.current?.code);
      Se && Xe && Se !== Xe || Lt(!0);
    }, ce = ({ sessionId: Q, config: Se, preloadManifest: Xe, lobby: Ct }) => {
      Lt(!1), Ct && Kt(Ct), os({ sessionId: Q, ...Se || {} }), st(null), Dn("PENDING"), el(null), Vl(
        (s.current?.players || []).map((Je) => ({
          userId: Je.userId,
          displayName: Je.displayName,
          score: 0
        })).sort(Pu)
      ), En([]), jn([]), s.current?.code && ys({
        sessionId: Q,
        lobbyCode: s.current.code,
        manifest: Xe
      }).catch(() => {
      });
    }, Ue = (Q) => {
      const Se = sn(Q?.lobbyCode), Xe = sn(s.current?.code);
      Se && Xe && Se !== Xe || (Tn(), Kt((Ct) => Ct && { ...Ct, status: "WAITING" }));
    }, le = (Q) => {
      Nt(), Ft(), $n(!1), bl(""), Pn(!1), Dn("GUESSING"), kl(Q?.endsAt || null), Ca(Q || null), hl([]), Ut(null), st(null), Kn([]), Ye(""), qa(null), L.current = "", H.current = null, It([]), Ql(""), Bt(""), _n(""), pl(!1), Tt(null), vl(!1), v.current = {
        roundId: Number.isInteger(Q?.roundId) ? Q.roundId : null,
        key: ""
      }, Be.current = null, Q?.isSuddenDeath ? el((Se) => ({
        roundIndex: Number.parseInt(Q?.index, 10) || Se?.roundIndex || null,
        tiedUserIds: Array.isArray(Se?.tiedUserIds) ? Se.tiedUserIds : []
      })) : el(null), gs(Q?.index);
    }, xe = (Q) => {
      Dn("ANSWERS_REVEAL"), kl(Q?.endsAt || null), hl(Array.isArray(Q?.answers) ? Q.answers : []);
    }, Mt = (Q) => {
      Nt(), Dn("SOLUTION_REVEAL"), kl(Q?.endsAt || null), Ut(Q || null), Array.isArray(Q?.scores) && Vl(Q.scores.slice().sort(Pu)), Bt(""), _n(""), vl(!1);
    }, Gt = (Q) => {
      $t(), ll(), Nt(), Ft(), Dn("FINISHED"), Lt(!1), kl(null), Bt(""), _n(""), st(Q || null), ml(!0), Kt((Se) => Se && { ...Se, status: "WAITING" }), Array.isArray(Q?.finalScores) && Vl(Q.finalScores.slice().sort(Pu)), el(null), En([]), jn([]);
    }, xt = (Q) => {
      const Se = Array.isArray(Q?.tiedUserIds) ? Q.tiedUserIds.filter((Je) => Number.isInteger(Je)) : [], Xe = Number.parseInt(Q?.roundIndex, 10);
      el({
        roundIndex: Number.isInteger(Xe) ? Xe : null,
        tiedUserIds: Se
      });
      const Ct = Se.map((Je) => (s.current?.players || []).find((Yt) => Yt.userId === Je)?.displayName || null).filter(Boolean);
      Ct.length > 0 ? dt(`Sudden Death started: ${Ct.join(", ")} are tied for first.`) : dt("Sudden Death started: tie for first place.");
    }, en = (Q) => {
      Kn(Array.isArray(Q?.readyUserIds) ? Q.readyUserIds : []);
    }, Al = (Q) => {
      En(Array.isArray(Q?.readyUserIds) ? Q.readyUserIds : []), jn(Array.isArray(Q?.requiredUserIds) ? Q.requiredUserIds : []);
    }, Gn = (Q) => {
      const Se = sn(Q?.lobbyCode), Xe = sn(s.current?.code);
      if (Xe && Se && Se !== Xe) return;
      const Ct = Number.parseInt(Q?.cooldownUntil, 10);
      let Je = "You were kicked from the lobby.";
      if (Number.isFinite(Ct)) {
        const Fl = Ct - Date.now();
        Fl > 0 && (Je = `You were kicked from the lobby. Rejoin available in about ${Math.max(1, Math.ceil(Fl / 1e3))}s.`);
      }
      de(Je), Kt(null), bn(""), Ge(!1), Zt(null), _t(null), iu("", ""), Tn(), Pt().catch(() => {
      });
    }, Ni = (Q) => {
      const Se = sn(Q?.lobbyCode), Xe = sn(s.current?.code);
      Xe && Se && Se !== Xe || (de(Rp(Q?.reason)), Kt(null), bn(""), Ge(!1), Zt(null), _t(null), iu("", ""), Tn(), Pt().catch(() => {
      }));
    }, Ms = () => {
      s.current?.code || (w.current && window.clearTimeout(w.current), w.current = window.setTimeout(() => {
        w.current = null, Pt().catch(() => {
        });
      }, 150));
    }, xs = (Q) => {
      const Se = Q?.status || null;
      !Se || typeof Se != "object" || (Bn(Se), di(""));
    };
    return f.on("connect", h), f.on("disconnect", N), f.on("error", j), f.on("lobby:state", G), f.on("lobby:directory_changed", Ms), f.on("game:starting", P), f.on("game:started", ce), f.on("game:start_cancelled", Ue), f.on("round:started", le), f.on("round:answers_reveal", xe), f.on("round:solution", Mt), f.on("game:finished", Gt), f.on("game:sudden_death", xt), f.on("round:ready_state", en), f.on("lobby:ready_state", Al), f.on("lobby:kicked", Gn), f.on("lobby:terminated", Ni), f.on("media:source_status", xs), f.connect(), () => {
      f.off("connect", h), f.off("disconnect", N), f.off("error", j), f.off("lobby:state", G), f.off("lobby:directory_changed", Ms), f.off("game:starting", P), f.off("game:started", ce), f.off("game:start_cancelled", Ue), f.off("round:started", le), f.off("round:answers_reveal", xe), f.off("round:solution", Mt), f.off("game:finished", Gt), f.off("game:sudden_death", xt), f.off("round:ready_state", en), f.off("lobby:ready_state", Al), f.off("lobby:kicked", Gn), f.off("lobby:terminated", Ni), f.off("media:source_status", xs), w.current && (window.clearTimeout(w.current), w.current = null), vp();
    };
  }, [ys, $t, Tn, Pt, gs, Ga, ll, Nt, Ft, o]), g.useEffect(() => {
    if (!o) return;
    let f = !0;
    return (async () => {
      try {
        const h = await Fu("/auth/me");
        if (!f) return;
        ti(h), await Pt();
      } catch {
        Mm();
        return;
      } finally {
        f && re(!1);
      }
    })(), () => {
      f = !1;
    };
  }, [Pt, o]), g.useEffect(() => {
    if ($ || !se || R.current) return;
    R.current = !0;
    const f = new URLSearchParams(window.location.search), h = f.get("i") || f.get("inviteToken") || "", N = _p(window.location.pathname) || sn(f.get("lobby")) || Ap(h);
    N && (Ma(N), bn(h), Ya(N, h).catch(() => {
    }));
  }, [Ya, $, se]), g.useEffect(() => {
    if (!Sn) return ii("00:00");
    const f = () => ii(Tp(new Date(Sn).getTime() - Date.now()));
    f();
    const h = window.setInterval(f, 250);
    return () => window.clearInterval(h);
  }, [Sn]), g.useEffect(() => {
    if (F !== "GUESSING") {
      K.current += 1, It([]), Ql("");
      return;
    }
    const f = fn.trim();
    if (f.length < 2) {
      K.current += 1, It([]), Ql("");
      return;
    }
    const h = ++K.current, N = window.setTimeout(async () => {
      try {
        const j = await Fu("/game/search", {
          method: "POST",
          body: JSON.stringify({ query: f, limit: 8 })
        });
        if (K.current !== h) return;
        It(Array.isArray(j.results) ? j.results : []), Ql("");
      } catch (j) {
        if (K.current !== h) return;
        It([]), Ql(Mp(j?.message));
      }
    }, 120);
    return () => window.clearTimeout(N);
  }, [fn, F]), g.useEffect(() => {
    const f = !!(se && jt.includes(se.id));
    if (F !== "GUESSING" || !D?.code || !oe?.roundId || !Qn || f) {
      te.current && (window.clearTimeout(te.current), te.current = null);
      return;
    }
    return te.current && (window.clearTimeout(te.current), te.current = null), te.current = window.setTimeout(() => {
      al().catch(() => {
      });
    }, 420), () => {
      te.current && (window.clearTimeout(te.current), te.current = null);
    };
  }, [Ra, fn, D?.code, F, jt, oe?.roundId, Qn, al, se]), g.useEffect(() => {
    const f = !!(se && jt.includes(se.id));
    if (F !== "GUESSING" || !Sn || !D?.code || !oe?.roundId || !Qn || f) {
      ne.current && (window.clearTimeout(ne.current), ne.current = null);
      return;
    }
    const h = new Date(Sn).getTime() - Date.now() - 120;
    if (Number.isFinite(h)) {
      if (h <= 0) {
        al({ force: !0 }).catch(() => {
        });
        return;
      }
      return ne.current && (window.clearTimeout(ne.current), ne.current = null), ne.current = window.setTimeout(() => {
        al({ force: !0 }).catch(() => {
        }), ne.current = null;
      }, h), () => {
        ne.current && (window.clearTimeout(ne.current), ne.current = null);
      };
    }
  }, [D?.code, F, Sn, jt, oe?.roundId, Qn, al, se]), g.useEffect(() => {
    if (!!!(oe?.sample?.audioUrl || oe?.sample?.videoUrl)) {
      pl(!1), Nt();
      return;
    }
    if (F !== "GUESSING") {
      (F === "SOLUTION_REVEAL" || F === "WAITING" || F === "FINISHED" || F === "PENDING") && (pl(!1), Nt());
      return;
    }
    let h = !1;
    const N = window.setTimeout(() => {
      h || Ha({ isAutoplay: !0 }).catch(() => {
      });
    }, 0);
    return () => {
      h = !0, window.clearTimeout(N);
    };
  }, [F, Ha, oe?.roundId, oe?.sample?.audioUrl, oe?.sample?.videoUrl, Nt]), g.useEffect(() => {
    Be.current = null;
  }, [oe?.roundId]), g.useEffect(() => {
    if (!fu || F !== "GUESSING") return;
    const f = () => {
      Ha({ isAutoplay: !1 }).catch(() => {
      });
    };
    return window.addEventListener("pointerdown", f), window.addEventListener("keydown", f), () => {
      window.removeEventListener("pointerdown", f), window.removeEventListener("keydown", f);
    };
  }, [F, Ha, fu]), g.useEffect(() => {
    if (F !== "SOLUTION_REVEAL" || !Jt?.video) {
      vl(!1), _n(""), Ft();
      return;
    }
    let f = !1;
    const h = window.setTimeout(() => {
      f || La().catch(() => {
      });
    }, 0);
    return () => {
      f = !0, window.clearTimeout(h), Ft();
    };
  }, [F, La, Jt?.video, Ft]), g.useEffect(() => {
    if (!du || F !== "SOLUTION_REVEAL") return;
    const f = () => {
      La().catch(() => {
      });
    };
    return window.addEventListener("pointerdown", f), window.addEventListener("keydown", f), () => {
      window.removeEventListener("pointerdown", f), window.removeEventListener("keydown", f);
    };
  }, [F, La, du]), g.useEffect(() => {
    const f = Math.max(0, Math.min(1, Number(wn))), h = (N) => {
      N && (N.volume = f);
    };
    h(fe.current), h($e.current), h(it.current), h(Et.current);
    for (const N of Ot.current.values())
      h(N);
  }, [wn, oe?.roundId, Jt?.video]);
  const Eu = g.useMemo(() => !!(D && se && D.host?.id === se.id), [D, se]), Ss = g.useMemo(() => !!(se && jt.includes(se.id)), [jt, se]), Sl = g.useMemo(() => {
    const f = Array.isArray(Jn) ? Jn.filter((h) => Number.isInteger(h)) : [];
    return f.length > 0 ? f : (D?.players || []).map((h) => h.userId).filter((h) => Number.isInteger(h));
  }, [D, Jn]), El = g.useMemo(() => {
    const f = new Set(Array.isArray(yl) ? yl : []);
    return Sl.filter((h) => f.has(h));
  }, [yl, Sl]), $l = g.useMemo(() => !!(se && El.includes(se.id)), [se, El]), Es = g.useMemo(() => !D || D.status !== "WAITING" ? !1 : Sl.length > 0 && El.length === Sl.length, [D, El.length, Sl.length]), Fc = g.useMemo(() => !!(oe?.sample?.audioUrl || oe?.sample?.videoUrl), [oe]), _l = g.useMemo(() => F === "GUESSING", [F]), bi = g.useMemo(() => F === "ANSWERS_REVEAL", [F]), Xa = g.useMemo(() => F === "SOLUTION_REVEAL", [F]), ul = g.useMemo(() => !!(Xa && Jt), [Xa, Jt]), Va = g.useMemo(
    () => bi || Xa,
    [bi, Xa]
  ), Pc = g.useMemo(
    () => !!ul,
    [ul]
  );
  g.useMemo(() => {
    const f = Number.parseInt(oe?.sample?.sampleDurationSec, 10);
    return !Number.isFinite(f) || f <= 0 ? "Sample ready" : `${f}s preview`;
  }, [oe]);
  const _u = g.useMemo(() => `${Math.round(wn * 100)}%`, [wn]), Qa = g.useMemo(() => {
    if (!Qn)
      return { label: "Disconnected", tone: "down" };
    if (!et)
      return { label: "Checking", tone: "neutral" };
    if (!et.ok)
      return { label: "Down", tone: "down" };
    const f = Number(et.latencyMs);
    return Number.isFinite(f) && f >= 1200 ? { label: "Slow", tone: "warn" } : { label: "Healthy", tone: "ok" };
  }, [et, Qn]), Si = g.useMemo(() => {
    const f = Number(et?.latencyMs);
    return Number.isFinite(f) ? `${Math.round(f)} ms` : "n/a";
  }, [et]), Au = g.useMemo(() => {
    if (!et?.checkedAt) return "n/a";
    const f = new Date(et.checkedAt);
    return Number.isNaN(f.getTime()) ? "n/a" : f.toLocaleTimeString();
  }, [et]), Ei = g.useMemo(() => {
    const f = [
      `Provider: ${et?.provider || "AnimeThemes"}`,
      `State: ${Qa.label}`,
      `Latency: ${Si}`,
      `Last check: ${Au}${et?.cached ? " (cached)" : ""}`
    ];
    return et?.ok === !1 && et?.error && f.push(`Error: ${et.error}`), Da && f.push(`Client: ${Da}`), f;
  }, [Au, Da, Qa.label, Si, et]), Tu = g.useMemo(() => (Array.isArray(De?.finalScores) && De.finalScores.length > 0 ? De.finalScores : Xl).slice().sort(Pu), [De?.finalScores, Xl]), _i = g.useMemo(() => {
    const f = Number.parseInt(De?.winner?.userId, 10);
    return Number.isInteger(f) ? gt(f) : Tu[0]?.displayName || "";
  }, [De?.winner?.userId, Tu, gt]), _s = g.useMemo(
    () => !!D && F === "FINISHED" && Un,
    [D, F, Un]
  ), Nu = g.useMemo(
    () => !!D && F !== "WAITING" && F !== "FINISHED",
    [D, F]
  ), As = g.useMemo(
    () => !!D && (F === "WAITING" || F === "FINISHED" && !Un),
    [D, F, Un]
  ), er = g.useMemo(() => {
    const f = /* @__PURE__ */ new Map();
    for (const h of ou || [])
      Number.isInteger(h?.userId) && f.set(h.userId, h);
    return f;
  }, [ou]), Ai = g.useMemo(() => (Array.isArray(Xl) && Xl.length > 0 ? Xl : (D?.players || []).map((h) => ({
    userId: h.userId,
    displayName: h.displayName,
    score: 0
  }))).slice().sort(Pu), [D, Xl]), Ts = g.useMemo(() => {
    const f = Math.max(1, Ai.length);
    return Math.max(118, Math.min(300, 92 + f * 24));
  }, [Ai.length]), Ht = g.useMemo(() => (D?.players || []).filter((f) => Number.isInteger(f?.userId)).map((f) => ({
    userId: f.userId,
    displayName: String(f?.displayName || `Player ${f.userId}`)
  })), [D]), Za = g.useCallback((f) => {
    const h = Math.max(0, Math.min(1, Number.parseFloat(f.target.value))), N = Number.isFinite(h) ? h : 0.8;
    cn.current = N, ds(N);
  }, []), Ti = g.useMemo(() => {
    const f = String(Aa || "").trim().toLowerCase();
    return f ? ni.filter((h) => {
      const N = String(h?.code || "").toLowerCase(), j = String(h?.name || "").toLowerCase();
      return N.includes(f) || j.includes(f);
    }) : ni;
  }, [ni, Aa]), Ns = g.useMemo(() => D ? [
    `Max ${D.maxPlayers} players`,
    `${D.roundCount} rounds`,
    `${D.guessSeconds}s guess`,
    Oc[D.sourceMode]?.label || D.sourceMode,
    zc[D.selectionMode]?.label || D.selectionMode,
    Dc[D.themeMode]?.label || D.themeMode,
    `Anime score ${D.animeScoreMin ?? 1}-${D.animeScoreMax ?? 10}`,
    `Player score ${D.playerScoreMin ?? 1}-${D.playerScoreMax ?? 10}`
  ] : [], [D]);
  return $ ? /* @__PURE__ */ m.jsx("section", { className: "gmq-shell", children: "Loading game..." }) : /* @__PURE__ */ m.jsxs("section", { className: "gmq-shell", children: [
    /* @__PURE__ */ m.jsxs("header", { className: "gmq-header", children: [
      /* @__PURE__ */ m.jsxs("div", { children: [
        Nu ? null : /* @__PURE__ */ m.jsx("h1", { children: "Anime Music Quiz" }),
        /* @__PURE__ */ m.jsxs("p", { className: "gmq-muted", children: [
          "Socket: ",
          Qn ? "Connected" : "Disconnected",
          D ? ` | Lobby ${D.code}` : "",
          Yl?.sessionId ? ` | Session ${Yl.sessionId}` : ""
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "gmq-header-right", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-connection-indicator", role: "status", "aria-label": `Media source ${Qa.label}`, children: [
          /* @__PURE__ */ m.jsx("span", { className: `gmq-connection-dot gmq-status-dot-${Qa.tone}` }),
          /* @__PURE__ */ m.jsx("div", { className: "gmq-connection-tooltip", children: Ei.map((f) => /* @__PURE__ */ m.jsx("p", { children: f }, f)) })
        ] }),
        D ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-actions", children: [
          /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: bs, disabled: J === "invite", children: "Copy Invite" }),
          /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-danger", onClick: Zc, disabled: J === "leave", children: "Leave" })
        ] }) : null
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "gmq-toast-viewport", "aria-live": "polite", "aria-atomic": "false", children: [
      ze ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-alert gmq-alert-error gmq-toast", role: "alert", children: [
        /* @__PURE__ */ m.jsx("p", { children: ze }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-toast-close", onClick: () => de(""), "aria-label": "Dismiss error", children: "x" })
      ] }) : null,
      dl ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-alert gmq-alert-info gmq-toast", role: "status", children: [
        /* @__PURE__ */ m.jsx("p", { children: dl }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-toast-close", onClick: () => dt(""), "aria-label": "Dismiss message", children: "x" })
      ] }) : null
    ] }),
    Qt ? /* @__PURE__ */ m.jsx("div", { className: "gmq-modal-backdrop", onClick: () => Zt(null), children: /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-modal-card gmq-modal-confirm-card", onClick: (f) => f.stopPropagation(), children: [
      /* @__PURE__ */ m.jsx("div", { className: "gmq-modal-header", children: /* @__PURE__ */ m.jsx("h2", { children: "Promote Player" }) }),
      /* @__PURE__ */ m.jsxs("p", { children: [
        "Transfer host to ",
        /* @__PURE__ */ m.jsx("strong", { children: Qt.displayName }),
        "?"
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "gmq-modal-actions", children: [
        /* @__PURE__ */ m.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-secondary",
            onClick: () => Zt(null),
            disabled: J === "promote",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ m.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-primary",
            onClick: ka,
            disabled: J === "promote",
            children: J === "promote" ? "Promoting..." : "Promote"
          }
        )
      ] })
    ] }) }) : null,
    zt ? /* @__PURE__ */ m.jsx("div", { className: "gmq-modal-backdrop", onClick: () => _t(null), children: /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-modal-card gmq-modal-confirm-card", onClick: (f) => f.stopPropagation(), children: [
      /* @__PURE__ */ m.jsx("div", { className: "gmq-modal-header", children: /* @__PURE__ */ m.jsx("h2", { children: "Kick Player" }) }),
      /* @__PURE__ */ m.jsxs("p", { children: [
        "Kick ",
        /* @__PURE__ */ m.jsx("strong", { children: zt.displayName }),
        " from this lobby?"
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "gmq-modal-actions", children: [
        /* @__PURE__ */ m.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-secondary",
            onClick: () => _t(null),
            disabled: J === "kick",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ m.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-danger",
            onClick: $c,
            disabled: J === "kick",
            children: J === "kick" ? "Kicking..." : "Kick Player"
          }
        )
      ] })
    ] }) }) : null,
    Gl && D && D.status === "WAITING" && Eu ? /* @__PURE__ */ m.jsx("div", { className: "gmq-modal-backdrop", onClick: () => Ge(!1), children: /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-modal-card", onClick: (f) => f.stopPropagation(), children: [
      /* @__PURE__ */ m.jsxs("div", { className: "gmq-modal-header", children: [
        /* @__PURE__ */ m.jsx("h2", { children: "Match Settings" }),
        /* @__PURE__ */ m.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-secondary gmq-btn-modal-close",
            onClick: () => Ge(!1),
            children: "Close"
          }
        )
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "gmq-name-private-row", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-stack", children: [
          /* @__PURE__ */ m.jsx("label", { htmlFor: "edit-lobby-name", children: "Lobby name" }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              id: "edit-lobby-name",
              value: Ke.name,
              onChange: (f) => Te((h) => ({ ...h, name: f.target.value })),
              placeholder: "Lobby name"
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("label", { className: "gmq-checkbox gmq-checkbox-inline", children: [
          /* @__PURE__ */ m.jsx(
            "input",
            {
              type: "checkbox",
              checked: Ke.isPrivate,
              onChange: (f) => Te((h) => ({ ...h, isPrivate: f.target.checked }))
            }
          ),
          "Private lobby"
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-grid", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
          /* @__PURE__ */ m.jsx("label", { htmlFor: "edit-max-players", children: "Max Players" }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              id: "edit-max-players",
              type: "number",
              min: "1",
              max: "8",
              value: cu,
              onChange: (f) => hi(f.target.value),
              onBlur: Kl
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
          /* @__PURE__ */ m.jsx("label", { htmlFor: "edit-round-count", children: "Rounds" }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              id: "edit-round-count",
              type: "number",
              min: "1",
              max: "50",
              value: Ke.roundCount,
              onChange: (f) => Te((h) => ({ ...h, roundCount: Number(f.target.value || 10) }))
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
          /* @__PURE__ */ m.jsx("label", { htmlFor: "edit-guess-seconds", children: "Guess Time (sec)" }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              id: "edit-guess-seconds",
              type: "number",
              min: "5",
              max: "120",
              value: Ke.guessSeconds,
              onChange: (f) => Te((h) => ({ ...h, guessSeconds: Number(f.target.value || 20) }))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-grid", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
          /* @__PURE__ */ m.jsx("label", { htmlFor: "edit-source-mode", children: "Song Source" }),
          /* @__PURE__ */ m.jsx(
            "select",
            {
              id: "edit-source-mode",
              value: Ke.sourceMode,
              onChange: (f) => Te((h) => ({ ...h, sourceMode: f.target.value })),
              children: lf.map((f) => /* @__PURE__ */ m.jsx("option", { value: f, children: Oc[f]?.label || f }, f))
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
          /* @__PURE__ */ m.jsx("label", { htmlFor: "edit-selection-mode", children: "Selection Style" }),
          /* @__PURE__ */ m.jsx(
            "select",
            {
              id: "edit-selection-mode",
              value: Ke.selectionMode,
              onChange: (f) => Te((h) => ({ ...h, selectionMode: f.target.value })),
              children: af.map((f) => /* @__PURE__ */ m.jsx("option", { value: f, children: zc[f]?.label || f }, f))
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
          /* @__PURE__ */ m.jsx("label", { htmlFor: "edit-theme-mode", children: "Song Types" }),
          /* @__PURE__ */ m.jsx(
            "select",
            {
              id: "edit-theme-mode",
              value: Ke.themeMode,
              onChange: (f) => Te((h) => ({ ...h, themeMode: f.target.value })),
              children: uf.map((f) => /* @__PURE__ */ m.jsx("option", { value: f, children: Dc[f]?.label || f }, f))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-grid gmq-field-grid-2", children: [
        /* @__PURE__ */ m.jsx(
          Uc,
          {
            label: "Anime MAL Score",
            minValue: Ke.animeScoreMin,
            maxValue: Ke.animeScoreMax,
            onMinChange: ja,
            onMaxChange: tl
          }
        ),
        /* @__PURE__ */ m.jsx(
          Uc,
          {
            label: "Player MAL Score",
            minValue: Ke.playerScoreMin,
            maxValue: Ke.playerScoreMax,
            onMinChange: yi,
            onMaxChange: hu,
            hint: "Used for MAL-list entries (MAL_ONLY, and MAL portion of HYBRID)."
          }
        )
      ] }),
      /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          className: "gmq-btn gmq-btn-primary",
          onClick: Qc,
          disabled: J === "settings",
          children: J === "settings" ? "Saving..." : "Save Settings"
        }
      )
    ] }) }) : null,
    D ? /* @__PURE__ */ m.jsxs("div", { className: `gmq-grid gmq-grid-match ${Nu ? "gmq-grid-match-live" : "gmq-grid-match-idle"} ${Nu && !As ? "gmq-grid-match-round-only" : ""}`, children: [
      As ? /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-card-lobby", children: [
        /* @__PURE__ */ m.jsxs("h2", { children: [
          "Lobby ",
          D.code,
          /* @__PURE__ */ m.jsx("span", { className: `gmq-lobby-visibility ${D.isPrivate ? "private" : "public"}`, children: D.isPrivate ? "Private" : "Public" })
        ] }),
        /* @__PURE__ */ m.jsxs("p", { className: "gmq-muted", children: [
          D.name || "Untitled",
          " | ",
          D.playerCount,
          "/",
          D.maxPlayers,
          " players"
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-stack gmq-lobby-settings-block", children: [
          /* @__PURE__ */ m.jsx("strong", { children: "Current Match Settings" }),
          /* @__PURE__ */ m.jsx("div", { className: "gmq-lobby-settings", children: Ns.map((f) => /* @__PURE__ */ m.jsx("span", { children: f }, f)) })
        ] }),
        /* @__PURE__ */ m.jsx("ul", { className: "gmq-player-list", children: (D.players || []).map((f) => /* @__PURE__ */ m.jsxs("li", { children: [
          /* @__PURE__ */ m.jsxs("span", { children: [
            f.displayName,
            f.userId === D.host?.id ? " (Host)" : "",
            f.isConnected ? "" : " (offline)"
          ] }),
          D.status === "WAITING" ? /* @__PURE__ */ m.jsxs("span", { className: "gmq-player-row-actions", children: [
            Eu && se && f.userId !== se.id && !Ln ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  type: "button",
                  className: "gmq-btn gmq-btn-secondary gmq-btn-kick",
                  onClick: () => vi(f),
                  disabled: J === "promote" || J === "kick",
                  children: "Promote"
                }
              ),
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  type: "button",
                  className: "gmq-btn gmq-btn-danger gmq-btn-kick",
                  onClick: () => Wc(f),
                  disabled: J === "kick" || J === "promote",
                  children: "Kick"
                }
              )
            ] }) : null,
            /* @__PURE__ */ m.jsx("strong", { children: El.includes(f.userId) ? "Ready" : "Not Ready" })
          ] }) : null,
          F === "GUESSING" ? /* @__PURE__ */ m.jsx("strong", { children: jt.includes(f.userId) ? "Ready" : "Thinking" }) : null
        ] }, f.userId)) }),
        D.status === "WAITING" ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-actions", children: [
            /* @__PURE__ */ m.jsx(
              "button",
              {
                type: "button",
                className: "gmq-btn gmq-btn-secondary",
                onClick: Ic,
                disabled: J === "lobby-ready",
                children: $l ? "Not Ready" : "Ready Up"
              }
            ),
            /* @__PURE__ */ m.jsxs("p", { className: "gmq-muted", children: [
              "Ready ",
              El.length,
              "/",
              Sl.length
            ] })
          ] }),
          Ln ? /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Starting game..." }) : Eu ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
            /* @__PURE__ */ m.jsx(
              "button",
              {
                type: "button",
                className: "gmq-btn gmq-btn-secondary",
                onClick: Vc,
                disabled: J === "settings",
                children: "Match Settings"
              }
            ),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                type: "button",
                className: "gmq-btn gmq-btn-primary",
                onClick: Kc,
                disabled: J === "start" || !Es,
                children: "Start Game"
              }
            ),
            Es ? null : /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "All players must be ready before start." })
          ] }) : /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Waiting for host to start." })
        ] }) : null
      ] }) : null,
      _s ? /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-card-round gmq-postgame-shell", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-postgame-header", children: [
          /* @__PURE__ */ m.jsx("h2", { children: "Match Results" }),
          _i ? /* @__PURE__ */ m.jsxs("p", { className: "gmq-postgame-winner", children: [
            "Winner: ",
            _i
          ] }) : null
        ] }),
        /* @__PURE__ */ m.jsx("ol", { className: "gmq-postgame-list", children: Tu.map((f, h) => /* @__PURE__ */ m.jsxs("li", { className: `gmq-postgame-row${h === 0 ? " gmq-postgame-row-winner" : ""}`, children: [
          /* @__PURE__ */ m.jsxs("span", { children: [
            h + 1,
            ". ",
            f.displayName
          ] }),
          /* @__PURE__ */ m.jsx("strong", { children: f.score || 0 })
        ] }, `${f.userId || "row"}-${h}`)) })
      ] }) : null,
      Nu ? /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-card-round gmq-match-shell", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-match-round-pill", children: [
          /* @__PURE__ */ m.jsx("h2", { children: oe?.isSuddenDeath ? "Sudden Death" : `Round ${oe?.index || "-"}/${oe?.totalRounds || "-"}` }),
          /* @__PURE__ */ m.jsx("p", { className: "gmq-round-phase", children: fs })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-match-stage", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-match-grid gmq-match-main-row", children: [
            /* @__PURE__ */ m.jsxs(
              "section",
              {
                className: "gmq-match-panel gmq-standings-panel",
                style: { minHeight: `${Ts}px`, maxHeight: `${Ts}px` },
                children: [
                  /* @__PURE__ */ m.jsx("h3", { children: "Standings" }),
                  /* @__PURE__ */ m.jsx("ul", { className: "gmq-score-list", children: Ai.map((f) => /* @__PURE__ */ m.jsxs("li", { className: "gmq-score-row", children: [
                    /* @__PURE__ */ m.jsx("span", { children: f.displayName }),
                    /* @__PURE__ */ m.jsx("strong", { children: f.score || 0 })
                  ] }, f.userId)) })
                ]
              }
            ),
            /* @__PURE__ */ m.jsxs("section", { className: "gmq-match-center-column", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "gmq-match-panel gmq-video-panel", children: [
                /* @__PURE__ */ m.jsx("h3", { children: "Video" }),
                oe?.sample?.audioUrl ? /* @__PURE__ */ m.jsx(
                  "audio",
                  {
                    ref: fe,
                    className: "gmq-hidden-media",
                    src: oe.sample.audioUrl,
                    preload: "auto",
                    onPlay: () => Wt(!0),
                    onPause: () => Wt(!1),
                    onEnded: () => Wt(!1),
                    onError: () => Bt(ss("source_unavailable"))
                  },
                  `audio-${oe.roundId}`
                ) : null,
                oe?.sample?.videoUrl ? /* @__PURE__ */ m.jsx(
                  "video",
                  {
                    ref: $e,
                    className: "gmq-hidden-media",
                    src: oe.sample.videoUrl,
                    preload: "auto",
                    playsInline: !0,
                    onPlay: () => Wt(!0),
                    onPause: () => Wt(!1),
                    onEnded: () => Wt(!1),
                    onError: () => Bt(ss("source_unavailable"))
                  },
                  `video-${oe.roundId}`
                ) : null,
                ul ? Jt.video ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-solution-video-wrap", children: [
                  /* @__PURE__ */ m.jsx(
                    "video",
                    {
                      ref: it,
                      className: "gmq-solution-video",
                      src: Jt.video,
                      preload: "auto",
                      controls: !0,
                      playsInline: !0,
                      onError: () => _n("Could not play solution video in this browser.")
                    },
                    `solution-${oe?.roundId || Jt.correctAnime?.animeId || "video"}`
                  ),
                  du ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-stack", children: [
                    /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
                    /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => La().catch(() => {
                    }), children: "Play solution video" })
                  ] }) : null,
                  ri ? /* @__PURE__ */ m.jsx("p", { className: "gmq-muted gmq-muted-warning", children: ri }) : null
                ] }) : /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Solution video is unavailable for this round." }) : /* @__PURE__ */ m.jsx("div", { className: "gmq-video-placeholder", children: /* @__PURE__ */ m.jsx("span", { children: "Video hidden until solution reveal" }) }),
                F === "PENDING" && Zl ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-stack", children: [
                  /* @__PURE__ */ m.jsx("p", { children: "Preparing media cache before round 1..." }),
                  /* @__PURE__ */ m.jsxs("p", { className: "gmq-muted", children: [
                    "Ready ",
                    za.ready,
                    "/",
                    za.total,
                    za.failed > 0 ? ` | Failed ${za.failed}` : ""
                  ] }),
                  oi ? /* @__PURE__ */ m.jsx("p", { className: "gmq-muted gmq-muted-warning", children: oi }) : null,
                  oi ? /* @__PURE__ */ m.jsx(
                    "button",
                    {
                      type: "button",
                      className: "gmq-btn gmq-btn-secondary",
                      onClick: () => kc().catch(() => {
                      }),
                      disabled: fi,
                      children: fi ? "Retrying..." : "Retry preload"
                    }
                  ) : null
                ] }) : null,
                _l ? Fc ? fu ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-stack", children: [
                  /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
                  /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Ha({ isAutoplay: !1 }).catch(() => {
                  }), children: "Play sample" })
                ] }) : null : /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Sample audio is unavailable for this round." }) : null,
                wt ? /* @__PURE__ */ m.jsx("p", { className: "gmq-muted gmq-muted-warning", children: wt }) : null,
                /* @__PURE__ */ m.jsxs("label", { className: "gmq-volume-row gmq-volume-row-compact gmq-video-volume", children: [
                  /* @__PURE__ */ m.jsxs("span", { children: [
                    "Volume ",
                    _u
                  ] }),
                  /* @__PURE__ */ m.jsx(
                    "input",
                    {
                      className: "gmq-volume-slider-small",
                      type: "range",
                      min: "0",
                      max: "1",
                      step: "0.01",
                      value: wn,
                      onChange: Za
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ m.jsxs("div", { className: "gmq-match-panel gmq-guess-panel", children: [
                /* @__PURE__ */ m.jsxs("div", { className: "gmq-search-row", children: [
                  /* @__PURE__ */ m.jsxs("div", { className: "gmq-search-box", children: [
                    /* @__PURE__ */ m.jsx(
                      "input",
                      {
                        ref: rt,
                        value: fn,
                        disabled: !_l,
                        onChange: (f) => {
                          const h = f.target.value;
                          L.current = h, H.current = null, Ye(h), qa(null), gl(!0);
                        },
                        onFocus: () => {
                          _l && gl(!0);
                        },
                        onBlur: () => {
                          window.setTimeout(() => {
                            gl(!1);
                          }, 100);
                        },
                        placeholder: _l ? "Type anime name" : "Waiting for guessing phase"
                      }
                    ),
                    si && In.length > 0 && _l ? /* @__PURE__ */ m.jsx("ul", { className: "gmq-search-results", children: In.map((f) => /* @__PURE__ */ m.jsx("li", { children: /* @__PURE__ */ m.jsx(
                      "button",
                      {
                        type: "button",
                        onMouseDown: (h) => h.preventDefault(),
                        onClick: () => {
                          const h = String(f?.title || ""), N = Number.parseInt(f?.id, 10), j = Number.isInteger(N) ? N : null;
                          L.current = h, H.current = j, Ye(h), qa(j), It([]), gl(!1), al({
                            force: !0,
                            guessTextOverride: h,
                            guessAnimeIdOverride: j
                          }).catch(() => {
                          });
                        },
                        children: f.title
                      }
                    ) }, `${f.id}-${f.title}`)) }) : null
                  ] }),
                  /* @__PURE__ */ m.jsx(
                    "button",
                    {
                      type: "button",
                      className: "gmq-btn gmq-btn-secondary",
                      onClick: Jc,
                      disabled: J === "ready" || !_l,
                      children: Ss ? "Unskip" : "Skip"
                    }
                  )
                ] }),
                Oa ? /* @__PURE__ */ m.jsx("p", { className: "gmq-muted gmq-muted-warning", children: Oa }) : null
              ] })
            ] }),
            /* @__PURE__ */ m.jsxs("section", { className: "gmq-match-panel gmq-info-panel", children: [
              /* @__PURE__ */ m.jsx("h3", { children: "Music Info" }),
              ul ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-stack", children: [
                /* @__PURE__ */ m.jsxs("p", { children: [
                  Jt.correctAnime?.animeTitle,
                  " (",
                  Jt.correctAnime?.themeType,
                  ")"
                ] }),
                /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: Jt.correctAnime?.themeTitle || "" })
              ] }) : /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Music info hidden until solution reveal." })
            ] })
          ] }),
          /* @__PURE__ */ m.jsx("section", { className: "gmq-player-grid gmq-match-player-row", children: Ht.map((f) => {
            const h = er.get(f.userId) || null, j = Pc && typeof h?.isCorrect == "boolean" ? h.isCorrect ? " gmq-answer-bubble-correct" : " gmq-answer-bubble-wrong" : "", G = typeof h?.guessText == "string" && h.guessText.trim() ? h.guessText : "-";
            return /* @__PURE__ */ m.jsxs("div", { className: "gmq-player-square-wrap", children: [
              Va ? /* @__PURE__ */ m.jsx("div", { className: `gmq-answer-bubble${j}`, children: G }) : null,
              _l && jt.includes(f.userId) ? /* @__PURE__ */ m.jsx("span", { className: "gmq-player-ready-indicator", children: "Ready" }) : null,
              /* @__PURE__ */ m.jsx("div", { className: "gmq-player-square", children: /* @__PURE__ */ m.jsx("span", { children: f.displayName }) })
            ] }, f.userId);
          }) })
        ] })
      ] }) : null
    ] }) : /* @__PURE__ */ m.jsxs("div", { className: "gmq-menu", children: [
      /* @__PURE__ */ m.jsx("div", { className: "gmq-menu-host-wrap", children: /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary gmq-btn-host", onClick: () => Na(!0), children: "Host Lobby" }) }),
      /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-card-directory", children: [
        /* @__PURE__ */ m.jsx("div", { className: "gmq-directory-header", children: /* @__PURE__ */ m.jsx("h2", { children: "Available Lobbies" }) }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-directory-top", children: [
          /* @__PURE__ */ m.jsx("div", { className: "gmq-card gmq-card-toolbar", children: /* @__PURE__ */ m.jsxs("div", { className: "gmq-directory-controls", children: [
            /* @__PURE__ */ m.jsx("input", { value: Aa, onChange: (f) => ai(f.target.value), placeholder: "Search by code/name" }),
            /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Pt(), disabled: Yc, children: "Refresh" })
          ] }) }),
          /* @__PURE__ */ m.jsx("div", { className: "gmq-card gmq-card-manual-join", children: /* @__PURE__ */ m.jsxs("div", { className: "gmq-inline gmq-inline-manual", children: [
            /* @__PURE__ */ m.jsx("input", { value: rs, onChange: (f) => Ma(sn(f.target.value)), placeholder: "Lobby code (ABC123)" }),
            /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: () => Ya(rs, ""), disabled: J === "join", children: "Join Lobby" })
          ] }) })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-lobby-table-head", children: [
          /* @__PURE__ */ m.jsx("span", { children: "Lobby" }),
          /* @__PURE__ */ m.jsx("span", { children: "Match Settings" }),
          /* @__PURE__ */ m.jsx("span", { children: "Action" })
        ] }),
        /* @__PURE__ */ m.jsxs("ul", { className: "gmq-lobby-list gmq-lobby-list-detailed", children: [
          Ti.map((f) => /* @__PURE__ */ m.jsxs("li", { className: "gmq-lobby-item gmq-lobby-item-detailed", children: [
            /* @__PURE__ */ m.jsxs("div", { children: [
              /* @__PURE__ */ m.jsx("div", { className: "gmq-lobby-title", children: f.name || f.code }),
              /* @__PURE__ */ m.jsxs("div", { className: "gmq-muted", children: [
                f.code,
                " | ",
                f.playerCount,
                "/",
                f.maxPlayers,
                " players"
              ] })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "gmq-lobby-settings", children: [
              /* @__PURE__ */ m.jsxs("span", { children: [
                f.roundCount,
                " rounds"
              ] }),
              /* @__PURE__ */ m.jsxs("span", { children: [
                f.guessSeconds,
                "s guess"
              ] }),
              /* @__PURE__ */ m.jsx("span", { children: Oc[f.sourceMode]?.label || f.sourceMode }),
              /* @__PURE__ */ m.jsx("span", { children: zc[f.selectionMode]?.label || f.selectionMode }),
              /* @__PURE__ */ m.jsx("span", { children: Dc[f.themeMode]?.label || f.themeMode })
            ] }),
            /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Ya(f.code, "", { fromDirectory: !0 }), disabled: J === "join", children: "Join" })
          ] }, f.code)),
          Ti.length === 0 ? /* @__PURE__ */ m.jsx("li", { className: "gmq-lobby-empty gmq-muted", children: "No open public lobbies right now." }) : null
        ] })
      ] }),
      Ta ? /* @__PURE__ */ m.jsx("div", { className: "gmq-modal-backdrop", onClick: () => Na(!1), children: /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-modal-card", onClick: (f) => f.stopPropagation(), children: [
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-modal-header", children: [
          /* @__PURE__ */ m.jsx("h2", { children: "Host Lobby" }),
          /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary gmq-btn-modal-close", onClick: () => Na(!1), children: "Close" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-name-private-row", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-stack", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "create-lobby-name", children: "Lobby name" }),
            /* @__PURE__ */ m.jsx(
              "input",
              {
                id: "create-lobby-name",
                value: yt.name,
                onChange: (f) => Dt((h) => ({ ...h, name: f.target.value })),
                placeholder: "Lobby name"
              }
            )
          ] }),
          /* @__PURE__ */ m.jsxs("label", { className: "gmq-checkbox gmq-checkbox-inline", children: [
            /* @__PURE__ */ m.jsx(
              "input",
              {
                type: "checkbox",
                checked: yt.isPrivate,
                onChange: (f) => Dt((h) => ({ ...h, isPrivate: f.target.checked }))
              }
            ),
            "Private lobby"
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-grid", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "create-max-players", children: "Max Players" }),
            /* @__PURE__ */ m.jsx(
              "input",
              {
                id: "create-max-players",
                type: "number",
                min: "1",
                max: "8",
                value: on,
                onChange: (f) => hs(f.target.value),
                onBlur: mu
              }
            )
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "create-round-count", children: "Rounds" }),
            /* @__PURE__ */ m.jsx("input", { id: "create-round-count", type: "number", min: "1", max: "50", value: yt.roundCount, onChange: (f) => Dt((h) => ({ ...h, roundCount: Number(f.target.value || 10) })) })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "create-guess-seconds", children: "Guess Time (sec)" }),
            /* @__PURE__ */ m.jsx("input", { id: "create-guess-seconds", type: "number", min: "5", max: "120", value: yt.guessSeconds, onChange: (f) => Dt((h) => ({ ...h, guessSeconds: Number(f.target.value || 20) })) })
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-grid", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "create-source-mode", children: "Song Source" }),
            /* @__PURE__ */ m.jsx("select", { id: "create-source-mode", value: yt.sourceMode, onChange: (f) => Dt((h) => ({ ...h, sourceMode: f.target.value })), children: lf.map((f) => /* @__PURE__ */ m.jsx("option", { value: f, children: Oc[f]?.label || f }, f)) })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "create-selection-mode", children: "Selection Style" }),
            /* @__PURE__ */ m.jsx("select", { id: "create-selection-mode", value: yt.selectionMode, onChange: (f) => Dt((h) => ({ ...h, selectionMode: f.target.value })), children: af.map((f) => /* @__PURE__ */ m.jsx("option", { value: f, children: zc[f]?.label || f }, f)) })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "create-theme-mode", children: "Song Types" }),
            /* @__PURE__ */ m.jsx("select", { id: "create-theme-mode", value: yt.themeMode, onChange: (f) => Dt((h) => ({ ...h, themeMode: f.target.value })), children: uf.map((f) => /* @__PURE__ */ m.jsx("option", { value: f, children: Dc[f]?.label || f }, f)) })
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-grid gmq-field-grid-2", children: [
          /* @__PURE__ */ m.jsx(
            Uc,
            {
              label: "Anime MAL Score",
              minValue: yt.animeScoreMin,
              maxValue: yt.animeScoreMax,
              onMinChange: ms,
              onMaxChange: Ua
            }
          ),
          /* @__PURE__ */ m.jsx(
            Uc,
            {
              label: "Player MAL Score",
              minValue: yt.playerScoreMin,
              maxValue: yt.playerScoreMax,
              onMinChange: Hn,
              onMaxChange: mi,
              hint: "Used for MAL-list entries (MAL_ONLY, and MAL portion of HYBRID)."
            }
          )
        ] }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: Xc, disabled: J === "create", children: J === "create" ? "Hosting..." : "Host Lobby" })
      ] }) }) : null
    ] })
  ] });
}
const wm = document.getElementById("game-root");
wm && Ag.createRoot(wm).render(/* @__PURE__ */ m.jsx(qp, {}));
