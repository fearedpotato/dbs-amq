var ko = { exports: {} }, as = {};
var gm;
function yg() {
  if (gm) return as;
  gm = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(r, S, q) {
    var w = null;
    if (q !== void 0 && (w = "" + q), S.key !== void 0 && (w = "" + S.key), "key" in S) {
      q = {};
      for (var Y in S)
        Y !== "key" && (q[Y] = S[Y]);
    } else q = S;
    return S = q.ref, {
      $$typeof: o,
      type: r,
      key: w,
      ref: S !== void 0 ? S : null,
      props: q
    };
  }
  return as.Fragment = i, as.jsx = s, as.jsxs = s, as;
}
var pm;
function gg() {
  return pm || (pm = 1, ko.exports = yg()), ko.exports;
}
var m = gg(), Xo = { exports: {} }, P = {};
var vm;
function pg() {
  if (vm) return P;
  vm = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), S = /* @__PURE__ */ Symbol.for("react.profiler"), q = /* @__PURE__ */ Symbol.for("react.consumer"), w = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), U = /* @__PURE__ */ Symbol.for("react.suspense"), O = /* @__PURE__ */ Symbol.for("react.memo"), $ = /* @__PURE__ */ Symbol.for("react.lazy"), V = /* @__PURE__ */ Symbol.for("react.activity"), te = Symbol.iterator;
  function Be(p) {
    return p === null || typeof p != "object" ? null : (p = te && p[te] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var Le = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, $e = Object.assign, ot = {};
  function We(p, z, L) {
    this.props = p, this.context = z, this.refs = ot, this.updater = L || Le;
  }
  We.prototype.isReactComponent = {}, We.prototype.setState = function(p, z) {
    if (typeof p != "object" && typeof p != "function" && p != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, p, z, "setState");
  }, We.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function me() {
  }
  me.prototype = We.prototype;
  function _e(p, z, L) {
    this.props = p, this.context = z, this.refs = ot, this.updater = L || Le;
  }
  var Te = _e.prototype = new me();
  Te.constructor = _e, $e(Te, We.prototype), Te.isPureReactComponent = !0;
  var He = Array.isArray;
  function ye() {
  }
  var ee = { H: null, A: null, T: null, S: null }, Ve = Object.prototype.hasOwnProperty;
  function gt(p, z, L) {
    var H = L.ref;
    return {
      $$typeof: o,
      type: p,
      key: z,
      ref: H !== void 0 ? H : null,
      props: L
    };
  }
  function Bn(p, z) {
    return gt(p.type, z, p.props);
  }
  function ft(p) {
    return typeof p == "object" && p !== null && p.$$typeof === o;
  }
  function Fe(p) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(L) {
      return z[L];
    });
  }
  var on = /\/+/g;
  function Ut(p, z) {
    return typeof p == "object" && p !== null && p.key != null ? Fe("" + p.key) : z.toString(36);
  }
  function Rt(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (typeof p.status == "string" ? p.then(ye, ye) : (p.status = "pending", p.then(
          function(z) {
            p.status === "pending" && (p.status = "fulfilled", p.value = z);
          },
          function(z) {
            p.status === "pending" && (p.status = "rejected", p.reason = z);
          }
        )), p.status) {
          case "fulfilled":
            return p.value;
          case "rejected":
            throw p.reason;
        }
    }
    throw p;
  }
  function M(p, z, L, H, W) {
    var se = typeof p;
    (se === "undefined" || se === "boolean") && (p = null);
    var J = !1;
    if (p === null) J = !0;
    else
      switch (se) {
        case "bigint":
        case "string":
        case "number":
          J = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case o:
            case i:
              J = !0;
              break;
            case $:
              return J = p._init, M(
                J(p._payload),
                z,
                L,
                H,
                W
              );
          }
      }
    if (J)
      return W = W(p), J = H === "" ? "." + Ut(p, 0) : H, He(W) ? (L = "", J != null && (L = J.replace(on, "$&/") + "/"), M(W, z, L, "", function(oe) {
        return oe;
      })) : W != null && (ft(W) && (W = Bn(
        W,
        L + (W.key == null || p && p.key === W.key ? "" : ("" + W.key).replace(
          on,
          "$&/"
        ) + "/") + J
      )), z.push(W)), 1;
    J = 0;
    var ge = H === "" ? "." : H + ":";
    if (He(p))
      for (var we = 0; we < p.length; we++)
        H = p[we], se = ge + Ut(H, we), J += M(
          H,
          z,
          L,
          se,
          W
        );
    else if (we = Be(p), typeof we == "function")
      for (p = we.call(p), we = 0; !(H = p.next()).done; )
        H = H.value, se = ge + Ut(H, we++), J += M(
          H,
          z,
          L,
          se,
          W
        );
    else if (se === "object") {
      if (typeof p.then == "function")
        return M(
          Rt(p),
          z,
          L,
          H,
          W
        );
      throw z = String(p), Error(
        "Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return J;
  }
  function B(p, z, L) {
    if (p == null) return p;
    var H = [], W = 0;
    return M(p, H, "", "", function(se) {
      return z.call(L, se, W++);
    }), H;
  }
  function Z(p) {
    if (p._status === -1) {
      var z = p._result;
      z = z(), z.then(
        function(L) {
          (p._status === 0 || p._status === -1) && (p._status = 1, p._result = L);
        },
        function(L) {
          (p._status === 0 || p._status === -1) && (p._status = 2, p._result = L);
        }
      ), p._status === -1 && (p._status = 0, p._result = z);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var Ae = typeof reportError == "function" ? reportError : function(p) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var z = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof p == "object" && p !== null && typeof p.message == "string" ? String(p.message) : String(p),
        error: p
      });
      if (!window.dispatchEvent(z)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", p);
      return;
    }
    console.error(p);
  }, ae = {
    map: B,
    forEach: function(p, z, L) {
      B(
        p,
        function() {
          z.apply(this, arguments);
        },
        L
      );
    },
    count: function(p) {
      var z = 0;
      return B(p, function() {
        z++;
      }), z;
    },
    toArray: function(p) {
      return B(p, function(z) {
        return z;
      }) || [];
    },
    only: function(p) {
      if (!ft(p))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return p;
    }
  };
  return P.Activity = V, P.Children = ae, P.Component = We, P.Fragment = s, P.Profiler = S, P.PureComponent = _e, P.StrictMode = r, P.Suspense = U, P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ee, P.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(p) {
      return ee.H.useMemoCache(p);
    }
  }, P.cache = function(p) {
    return function() {
      return p.apply(null, arguments);
    };
  }, P.cacheSignal = function() {
    return null;
  }, P.cloneElement = function(p, z, L) {
    if (p == null)
      throw Error(
        "The argument must be a React element, but you passed " + p + "."
      );
    var H = $e({}, p.props), W = p.key;
    if (z != null)
      for (se in z.key !== void 0 && (W = "" + z.key), z)
        !Ve.call(z, se) || se === "key" || se === "__self" || se === "__source" || se === "ref" && z.ref === void 0 || (H[se] = z[se]);
    var se = arguments.length - 2;
    if (se === 1) H.children = L;
    else if (1 < se) {
      for (var J = Array(se), ge = 0; ge < se; ge++)
        J[ge] = arguments[ge + 2];
      H.children = J;
    }
    return gt(p.type, W, H);
  }, P.createContext = function(p) {
    return p = {
      $$typeof: w,
      _currentValue: p,
      _currentValue2: p,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, p.Provider = p, p.Consumer = {
      $$typeof: q,
      _context: p
    }, p;
  }, P.createElement = function(p, z, L) {
    var H, W = {}, se = null;
    if (z != null)
      for (H in z.key !== void 0 && (se = "" + z.key), z)
        Ve.call(z, H) && H !== "key" && H !== "__self" && H !== "__source" && (W[H] = z[H]);
    var J = arguments.length - 2;
    if (J === 1) W.children = L;
    else if (1 < J) {
      for (var ge = Array(J), we = 0; we < J; we++)
        ge[we] = arguments[we + 2];
      W.children = ge;
    }
    if (p && p.defaultProps)
      for (H in J = p.defaultProps, J)
        W[H] === void 0 && (W[H] = J[H]);
    return gt(p, se, W);
  }, P.createRef = function() {
    return { current: null };
  }, P.forwardRef = function(p) {
    return { $$typeof: Y, render: p };
  }, P.isValidElement = ft, P.lazy = function(p) {
    return {
      $$typeof: $,
      _payload: { _status: -1, _result: p },
      _init: Z
    };
  }, P.memo = function(p, z) {
    return {
      $$typeof: O,
      type: p,
      compare: z === void 0 ? null : z
    };
  }, P.startTransition = function(p) {
    var z = ee.T, L = {};
    ee.T = L;
    try {
      var H = p(), W = ee.S;
      W !== null && W(L, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(ye, Ae);
    } catch (se) {
      Ae(se);
    } finally {
      z !== null && L.types !== null && (z.types = L.types), ee.T = z;
    }
  }, P.unstable_useCacheRefresh = function() {
    return ee.H.useCacheRefresh();
  }, P.use = function(p) {
    return ee.H.use(p);
  }, P.useActionState = function(p, z, L) {
    return ee.H.useActionState(p, z, L);
  }, P.useCallback = function(p, z) {
    return ee.H.useCallback(p, z);
  }, P.useContext = function(p) {
    return ee.H.useContext(p);
  }, P.useDebugValue = function() {
  }, P.useDeferredValue = function(p, z) {
    return ee.H.useDeferredValue(p, z);
  }, P.useEffect = function(p, z) {
    return ee.H.useEffect(p, z);
  }, P.useEffectEvent = function(p) {
    return ee.H.useEffectEvent(p);
  }, P.useId = function() {
    return ee.H.useId();
  }, P.useImperativeHandle = function(p, z, L) {
    return ee.H.useImperativeHandle(p, z, L);
  }, P.useInsertionEffect = function(p, z) {
    return ee.H.useInsertionEffect(p, z);
  }, P.useLayoutEffect = function(p, z) {
    return ee.H.useLayoutEffect(p, z);
  }, P.useMemo = function(p, z) {
    return ee.H.useMemo(p, z);
  }, P.useOptimistic = function(p, z) {
    return ee.H.useOptimistic(p, z);
  }, P.useReducer = function(p, z, L) {
    return ee.H.useReducer(p, z, L);
  }, P.useRef = function(p) {
    return ee.H.useRef(p);
  }, P.useState = function(p) {
    return ee.H.useState(p);
  }, P.useSyncExternalStore = function(p, z, L) {
    return ee.H.useSyncExternalStore(
      p,
      z,
      L
    );
  }, P.useTransition = function() {
    return ee.H.useTransition();
  }, P.version = "19.2.4", P;
}
var bm;
function sf() {
  return bm || (bm = 1, Xo.exports = pg()), Xo.exports;
}
var g = sf(), Vo = { exports: {} }, us = {}, Qo = { exports: {} }, Zo = {};
var Sm;
function vg() {
  return Sm || (Sm = 1, (function(o) {
    function i(M, B) {
      var Z = M.length;
      M.push(B);
      e: for (; 0 < Z; ) {
        var Ae = Z - 1 >>> 1, ae = M[Ae];
        if (0 < S(ae, B))
          M[Ae] = B, M[Z] = ae, Z = Ae;
        else break e;
      }
    }
    function s(M) {
      return M.length === 0 ? null : M[0];
    }
    function r(M) {
      if (M.length === 0) return null;
      var B = M[0], Z = M.pop();
      if (Z !== B) {
        M[0] = Z;
        e: for (var Ae = 0, ae = M.length, p = ae >>> 1; Ae < p; ) {
          var z = 2 * (Ae + 1) - 1, L = M[z], H = z + 1, W = M[H];
          if (0 > S(L, Z))
            H < ae && 0 > S(W, L) ? (M[Ae] = W, M[H] = Z, Ae = H) : (M[Ae] = L, M[z] = Z, Ae = z);
          else if (H < ae && 0 > S(W, Z))
            M[Ae] = W, M[H] = Z, Ae = H;
          else break e;
        }
      }
      return B;
    }
    function S(M, B) {
      var Z = M.sortIndex - B.sortIndex;
      return Z !== 0 ? Z : M.id - B.id;
    }
    if (o.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var q = performance;
      o.unstable_now = function() {
        return q.now();
      };
    } else {
      var w = Date, Y = w.now();
      o.unstable_now = function() {
        return w.now() - Y;
      };
    }
    var U = [], O = [], $ = 1, V = null, te = 3, Be = !1, Le = !1, $e = !1, ot = !1, We = typeof setTimeout == "function" ? setTimeout : null, me = typeof clearTimeout == "function" ? clearTimeout : null, _e = typeof setImmediate < "u" ? setImmediate : null;
    function Te(M) {
      for (var B = s(O); B !== null; ) {
        if (B.callback === null) r(O);
        else if (B.startTime <= M)
          r(O), B.sortIndex = B.expirationTime, i(U, B);
        else break;
        B = s(O);
      }
    }
    function He(M) {
      if ($e = !1, Te(M), !Le)
        if (s(U) !== null)
          Le = !0, ye || (ye = !0, Fe());
        else {
          var B = s(O);
          B !== null && Rt(He, B.startTime - M);
        }
    }
    var ye = !1, ee = -1, Ve = 5, gt = -1;
    function Bn() {
      return ot ? !0 : !(o.unstable_now() - gt < Ve);
    }
    function ft() {
      if (ot = !1, ye) {
        var M = o.unstable_now();
        gt = M;
        var B = !0;
        try {
          e: {
            Le = !1, $e && ($e = !1, me(ee), ee = -1), Be = !0;
            var Z = te;
            try {
              t: {
                for (Te(M), V = s(U); V !== null && !(V.expirationTime > M && Bn()); ) {
                  var Ae = V.callback;
                  if (typeof Ae == "function") {
                    V.callback = null, te = V.priorityLevel;
                    var ae = Ae(
                      V.expirationTime <= M
                    );
                    if (M = o.unstable_now(), typeof ae == "function") {
                      V.callback = ae, Te(M), B = !0;
                      break t;
                    }
                    V === s(U) && r(U), Te(M);
                  } else r(U);
                  V = s(U);
                }
                if (V !== null) B = !0;
                else {
                  var p = s(O);
                  p !== null && Rt(
                    He,
                    p.startTime - M
                  ), B = !1;
                }
              }
              break e;
            } finally {
              V = null, te = Z, Be = !1;
            }
            B = void 0;
          }
        } finally {
          B ? Fe() : ye = !1;
        }
      }
    }
    var Fe;
    if (typeof _e == "function")
      Fe = function() {
        _e(ft);
      };
    else if (typeof MessageChannel < "u") {
      var on = new MessageChannel(), Ut = on.port2;
      on.port1.onmessage = ft, Fe = function() {
        Ut.postMessage(null);
      };
    } else
      Fe = function() {
        We(ft, 0);
      };
    function Rt(M, B) {
      ee = We(function() {
        M(o.unstable_now());
      }, B);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, o.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ve = 0 < M ? Math.floor(1e3 / M) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return te;
    }, o.unstable_next = function(M) {
      switch (te) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = te;
      }
      var Z = te;
      te = B;
      try {
        return M();
      } finally {
        te = Z;
      }
    }, o.unstable_requestPaint = function() {
      ot = !0;
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
      var Z = te;
      te = M;
      try {
        return B();
      } finally {
        te = Z;
      }
    }, o.unstable_scheduleCallback = function(M, B, Z) {
      var Ae = o.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? Ae + Z : Ae) : Z = Ae, M) {
        case 1:
          var ae = -1;
          break;
        case 2:
          ae = 250;
          break;
        case 5:
          ae = 1073741823;
          break;
        case 4:
          ae = 1e4;
          break;
        default:
          ae = 5e3;
      }
      return ae = Z + ae, M = {
        id: $++,
        callback: B,
        priorityLevel: M,
        startTime: Z,
        expirationTime: ae,
        sortIndex: -1
      }, Z > Ae ? (M.sortIndex = Z, i(O, M), s(U) === null && M === s(O) && ($e ? (me(ee), ee = -1) : $e = !0, Rt(He, Z - Ae))) : (M.sortIndex = ae, i(U, M), Le || Be || (Le = !0, ye || (ye = !0, Fe()))), M;
    }, o.unstable_shouldYield = Bn, o.unstable_wrapCallback = function(M) {
      var B = te;
      return function() {
        var Z = te;
        te = B;
        try {
          return M.apply(this, arguments);
        } finally {
          te = Z;
        }
      };
    };
  })(Zo)), Zo;
}
var Em;
function bg() {
  return Em || (Em = 1, Qo.exports = vg()), Qo.exports;
}
var Ko = { exports: {} }, Dt = {};
var _m;
function Sg() {
  if (_m) return Dt;
  _m = 1;
  var o = sf();
  function i(U) {
    var O = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      O += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var $ = 2; $ < arguments.length; $++)
        O += "&args[]=" + encodeURIComponent(arguments[$]);
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
  function q(U, O, $) {
    var V = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: S,
      key: V == null ? null : "" + V,
      children: U,
      containerInfo: O,
      implementation: $
    };
  }
  var w = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Y(U, O) {
    if (U === "font") return "";
    if (typeof O == "string")
      return O === "use-credentials" ? O : "";
  }
  return Dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Dt.createPortal = function(U, O) {
    var $ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!O || O.nodeType !== 1 && O.nodeType !== 9 && O.nodeType !== 11)
      throw Error(i(299));
    return q(U, O, null, $);
  }, Dt.flushSync = function(U) {
    var O = w.T, $ = r.p;
    try {
      if (w.T = null, r.p = 2, U) return U();
    } finally {
      w.T = O, r.p = $, r.d.f();
    }
  }, Dt.preconnect = function(U, O) {
    typeof U == "string" && (O ? (O = O.crossOrigin, O = typeof O == "string" ? O === "use-credentials" ? O : "" : void 0) : O = null, r.d.C(U, O));
  }, Dt.prefetchDNS = function(U) {
    typeof U == "string" && r.d.D(U);
  }, Dt.preinit = function(U, O) {
    if (typeof U == "string" && O && typeof O.as == "string") {
      var $ = O.as, V = Y($, O.crossOrigin), te = typeof O.integrity == "string" ? O.integrity : void 0, Be = typeof O.fetchPriority == "string" ? O.fetchPriority : void 0;
      $ === "style" ? r.d.S(
        U,
        typeof O.precedence == "string" ? O.precedence : void 0,
        {
          crossOrigin: V,
          integrity: te,
          fetchPriority: Be
        }
      ) : $ === "script" && r.d.X(U, {
        crossOrigin: V,
        integrity: te,
        fetchPriority: Be,
        nonce: typeof O.nonce == "string" ? O.nonce : void 0
      });
    }
  }, Dt.preinitModule = function(U, O) {
    if (typeof U == "string")
      if (typeof O == "object" && O !== null) {
        if (O.as == null || O.as === "script") {
          var $ = Y(
            O.as,
            O.crossOrigin
          );
          r.d.M(U, {
            crossOrigin: $,
            integrity: typeof O.integrity == "string" ? O.integrity : void 0,
            nonce: typeof O.nonce == "string" ? O.nonce : void 0
          });
        }
      } else O == null && r.d.M(U);
  }, Dt.preload = function(U, O) {
    if (typeof U == "string" && typeof O == "object" && O !== null && typeof O.as == "string") {
      var $ = O.as, V = Y($, O.crossOrigin);
      r.d.L(U, $, {
        crossOrigin: V,
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
  }, Dt.preloadModule = function(U, O) {
    if (typeof U == "string")
      if (O) {
        var $ = Y(O.as, O.crossOrigin);
        r.d.m(U, {
          as: typeof O.as == "string" && O.as !== "script" ? O.as : void 0,
          crossOrigin: $,
          integrity: typeof O.integrity == "string" ? O.integrity : void 0
        });
      } else r.d.m(U);
  }, Dt.requestFormReset = function(U) {
    r.d.r(U);
  }, Dt.unstable_batchedUpdates = function(U, O) {
    return U(O);
  }, Dt.useFormState = function(U, O, $) {
    return w.H.useFormState(U, O, $);
  }, Dt.useFormStatus = function() {
    return w.H.useHostTransitionStatus();
  }, Dt.version = "19.2.4", Dt;
}
var Am;
function Eg() {
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
  return o(), Ko.exports = Sg(), Ko.exports;
}
var Tm;
function _g() {
  if (Tm) return us;
  Tm = 1;
  var o = bg(), i = sf(), s = Eg();
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
  function q(e) {
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
    if (q(e) !== e)
      throw Error(r(188));
  }
  function O(e) {
    var t = e.alternate;
    if (!t) {
      if (t = q(e), t === null) throw Error(r(188));
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
  function $(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = $(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var V = Object.assign, te = /* @__PURE__ */ Symbol.for("react.element"), Be = /* @__PURE__ */ Symbol.for("react.transitional.element"), Le = /* @__PURE__ */ Symbol.for("react.portal"), $e = /* @__PURE__ */ Symbol.for("react.fragment"), ot = /* @__PURE__ */ Symbol.for("react.strict_mode"), We = /* @__PURE__ */ Symbol.for("react.profiler"), me = /* @__PURE__ */ Symbol.for("react.consumer"), _e = /* @__PURE__ */ Symbol.for("react.context"), Te = /* @__PURE__ */ Symbol.for("react.forward_ref"), He = /* @__PURE__ */ Symbol.for("react.suspense"), ye = /* @__PURE__ */ Symbol.for("react.suspense_list"), ee = /* @__PURE__ */ Symbol.for("react.memo"), Ve = /* @__PURE__ */ Symbol.for("react.lazy"), gt = /* @__PURE__ */ Symbol.for("react.activity"), Bn = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ft = Symbol.iterator;
  function Fe(e) {
    return e === null || typeof e != "object" ? null : (e = ft && e[ft] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var on = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ut(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === on ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case $e:
        return "Fragment";
      case We:
        return "Profiler";
      case ot:
        return "StrictMode";
      case He:
        return "Suspense";
      case ye:
        return "SuspenseList";
      case gt:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Le:
          return "Portal";
        case _e:
          return e.displayName || "Context";
        case me:
          return (e._context.displayName || "Context") + ".Consumer";
        case Te:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ee:
          return t = e.displayName || null, t !== null ? t : Ut(e.type) || "Memo";
        case Ve:
          t = e._payload, e = e._init;
          try {
            return Ut(e(t));
          } catch {
          }
      }
    return null;
  }
  var Rt = Array.isArray, M = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ae = [], ae = -1;
  function p(e) {
    return { current: e };
  }
  function z(e) {
    0 > ae || (e.current = Ae[ae], Ae[ae] = null, ae--);
  }
  function L(e, t) {
    ae++, Ae[ae] = e.current, e.current = t;
  }
  var H = p(null), W = p(null), se = p(null), J = p(null);
  function ge(e, t) {
    switch (L(se, t), L(W, e), L(H, null), t.nodeType) {
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
    z(H), L(H, e);
  }
  function we() {
    z(H), z(W), z(se);
  }
  function oe(e) {
    e.memoizedState !== null && L(J, e);
    var t = H.current, n = Gh(t, e.type);
    t !== n && (L(W, e), L(H, n));
  }
  function gl(e) {
    W.current === e && (z(H), z(W)), J.current === e && (z(J), es._currentValue = Z);
  }
  var pt, $n;
  function Wn(e) {
    if (pt === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        pt = t && t[1] || "", $n = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + pt + e + $n;
  }
  var ie = !1;
  function ai(e, t) {
    if (!e || ie) return "";
    ie = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var D = function() {
                throw Error();
              };
              if (Object.defineProperty(D.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(D, []);
                } catch (N) {
                  var A = N;
                }
                Reflect.construct(e, [], D);
              } else {
                try {
                  D.call();
                } catch (N) {
                  A = N;
                }
                e.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                A = N;
              }
              (D = e()) && typeof D.catch == "function" && D.catch(function() {
              });
            }
          } catch (N) {
            if (N && A && typeof N.stack == "string")
              return [N.stack, A.stack];
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
      ie = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Wn(n) : "";
  }
  function ui(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Wn(e.type);
      case 16:
        return Wn("Lazy");
      case 13:
        return e.child !== t && t !== null ? Wn("Suspense Fallback") : Wn("Suspense");
      case 19:
        return Wn("SuspenseList");
      case 0:
      case 15:
        return ai(e.type, !1);
      case 11:
        return ai(e.type.render, !1);
      case 1:
        return ai(e.type, !0);
      case 31:
        return Wn("Activity");
      default:
        return "";
    }
  }
  function ii(e) {
    try {
      var t = "", n = null;
      do
        t += ui(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var xa = Object.prototype.hasOwnProperty, si = o.unstable_scheduleCallback, Ca = o.unstable_cancelCallback, Ra = o.unstable_shouldYield, kl = o.unstable_requestPaint, Qe = o.unstable_now, Qt = o.unstable_getCurrentPriorityLevel, Zt = o.unstable_ImmediatePriority, jt = o.unstable_UserBlockingPriority, qt = o.unstable_NormalPriority, Jc = o.unstable_LowPriority, ci = o.unstable_IdlePriority, dt = o.log, wt = o.unstable_setDisableYieldValue, Ze = null, Re = null;
  function fn(e) {
    if (typeof dt == "function" && wt(e), Re && typeof Re.setStrictMode == "function")
      try {
        Re.setStrictMode(Ze, e);
      } catch {
      }
  }
  var Ot = Math.clz32 ? Math.clz32 : rs, ou = Math.log, fu = Math.LN2;
  function rs(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ou(e) / fu | 0) | 0;
  }
  var qa = 256, Oa = 262144, En = 4194304;
  function R(e) {
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
    return d !== 0 ? (l = d & ~u, l !== 0 ? a = R(l) : (c &= d, c !== 0 ? a = R(c) : n || (n = d & ~e, n !== 0 && (a = R(n))))) : (d = l & ~u, d !== 0 ? a = R(d) : c !== 0 ? a = R(c) : n || (n = l & ~e, n !== 0 && (a = R(n)))), a === 0 ? 0 : t !== 0 && t !== a && (t & u) === 0 && (u = a & -a, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : a;
  }
  function Xl(e, t) {
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
    var e = En;
    return En <<= 1, (En & 62914560) === 0 && (En = 4194304), e;
  }
  function Ln(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function _n(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Vl(e, t, n, l, a, u) {
    var c = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var d = e.entanglements, y = e.expirationTimes, _ = e.hiddenUpdates;
    for (n = c & ~n; 0 < n; ) {
      var x = 31 - Ot(n), D = 1 << x;
      d[x] = 0, y[x] = -1;
      var A = _[x];
      if (A !== null)
        for (_[x] = null, x = 0; x < A.length; x++) {
          var N = A[x];
          N !== null && (N.lane &= -536870913);
        }
      n &= ~D;
    }
    l !== 0 && fs(e, l, 0), u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t));
  }
  function fs(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - Ot(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function ri(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - Ot(n), a = 1 << l;
      a & t | e[l] & t && (e[l] |= t), n &= ~a;
    }
  }
  function ce(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : za(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function za(e) {
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
  function du(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function pl() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : rm(e.type));
  }
  function ht(e, t) {
    var n = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = n;
    }
  }
  var Bt = Math.random().toString(36).slice(2), Ke = "__reactFiber$" + Bt, mt = "__reactProps$" + Bt, dn = "__reactContainer$" + Bt, Fn = "__reactEvents$" + Bt, Jt = "__reactListeners$" + Bt, hu = "__reactHandles$" + Bt, Ql = "__reactResources$" + Bt, Hn = "__reactMarker$" + Bt;
  function Da(e) {
    delete e[Ke], delete e[mt], delete e[Fn], delete e[Jt], delete e[hu];
  }
  function An(e) {
    var t = e[Ke];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[dn] || n[Ke]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Kh(e); e !== null; ) {
            if (n = e[Ke]) return n;
            e = Kh(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function hn(e) {
    if (e = e[Ke] || e[dn]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Pn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Gn(e) {
    var t = e[Ql];
    return t || (t = e[Ql] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Je(e) {
    e[Hn] = !0;
  }
  var lt = /* @__PURE__ */ new Set(), el = {};
  function It(e, t) {
    $t(e, t), $t(e + "Capture", t);
  }
  function $t(e, t) {
    for (el[e] = t, e = 0; e < t.length; e++)
      lt.add(t[e]);
  }
  var tl = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Tn = {}, mu = {};
  function vl(e) {
    return xa.call(mu, e) ? !0 : xa.call(Tn, e) ? !1 : tl.test(e) ? mu[e] = !0 : (Tn[e] = !0, !1);
  }
  function oi(e, t, n) {
    if (vl(t))
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
  function nl(e, t, n, l) {
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
  function zt(e) {
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
  function yu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function bl(e, t, n) {
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
  function Yn(e) {
    if (!e._valueTracker) {
      var t = yu(e) ? "checked" : "value";
      e._valueTracker = bl(
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
    return e && (l = yu(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Ua(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Zl = /[\n"\\]/g;
  function Lt(e) {
    return e.replace(
      Zl,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ht(e, t, n, l, a, u, c, d) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + zt(t)) : e.value !== "" + zt(t) && (e.value = "" + zt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? Nn(e, c, zt(t)) : n != null ? Nn(e, c, zt(n)) : l != null && e.removeAttribute("value"), a == null && u != null && (e.defaultChecked = !!u), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + zt(d) : e.removeAttribute("name");
  }
  function fi(e, t, n, l, a, u, c, d) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Yn(e);
        return;
      }
      n = n != null ? "" + zt(n) : "", t = t != null ? "" + zt(t) : n, d || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? a, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = d ? e.checked : !!l, e.defaultChecked = !!l, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), Yn(e);
  }
  function Nn(e, t, n) {
    t === "number" && Ua(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Kl(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++)
        t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + zt(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, l && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ll(e, t, n) {
    if (t != null && (t = "" + zt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + zt(n) : "";
  }
  function ja(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(r(92));
        if (Rt(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = zt(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), Yn(e);
  }
  function al(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var di = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Sl(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || di.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function hi(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var a in t)
        l = t[a], t.hasOwnProperty(a) && n[a] !== l && Sl(e, a, l);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Sl(e, u, t[u]);
  }
  function ul(e) {
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
  ]), il = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function at(e) {
    return il.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function kn() {
  }
  var wa = null;
  function mi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ft = null, Gt = null;
  function Ba(e) {
    var t = hn(e);
    if (t && (e = t.stateNode)) {
      var n = e[mt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Ht(
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
              'input[name="' + Lt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var a = l[mt] || null;
                if (!a) throw Error(r(90));
                Ht(
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
          ll(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Kl(e, !!n.multiple, t, !1);
      }
    }
  }
  var gu = !1;
  function yi(e, t, n) {
    if (gu) return e(t, n);
    gu = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (gu = !1, (Ft !== null || Gt !== null) && (mc(), Ft && (t = Ft, e = Gt, Gt = Ft = null, Ba(t), e)))
        for (t = 0; t < e.length; t++) Ba(e[t]);
    }
  }
  function La(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[mt] || null;
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
  var Xn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), gi = !1;
  if (Xn)
    try {
      var Ha = {};
      Object.defineProperty(Ha, "passive", {
        get: function() {
          gi = !0;
        }
      }), window.addEventListener("test", Ha, Ha), window.removeEventListener("test", Ha, Ha);
    } catch {
      gi = !1;
    }
  var sl = null, pi = null, pu = null;
  function hs() {
    if (pu) return pu;
    var e, t = pi, n = t.length, l, a = "value" in sl ? sl.value : sl.textContent, u = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var c = n - e;
    for (l = 1; l <= c && t[n - l] === a[u - l]; l++) ;
    return pu = a.slice(e, 1 < l ? 1 - l : void 0);
  }
  function vu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function bu() {
    return !0;
  }
  function ms() {
    return !1;
  }
  function vt(e) {
    function t(n, l, a, u, c) {
      this._reactName = n, this._targetInst = a, this.type = l, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var d in e)
        e.hasOwnProperty(d) && (n = e[d], this[d] = n ? n(u) : u[d]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? bu : ms, this.isPropagationStopped = ms, this;
    }
    return V(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = bu);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = bu);
      },
      persist: function() {
      },
      isPersistent: bu
    }), t;
  }
  var Vn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ga = vt(Vn), Jl = V({}, Vn, { view: 0, detail: 0 }), Su = vt(Jl), Yt, Mn, Pt, El = V({}, Jl, {
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
    getModifierState: Al,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Pt && (Pt && e.type === "mousemove" ? (Yt = e.screenX - Pt.screenX, Mn = e.screenY - Pt.screenY) : Mn = Yt = 0, Pt = e), Yt);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Mn;
    }
  }), _l = vt(El), ys = V({}, El, { dataTransfer: 0 }), gs = vt(ys), vi = V({}, Jl, { relatedTarget: 0 }), cl = vt(vi), Eu = V({}, Vn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), _u = vt(Eu), ps = V({}, Vn, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Ya = vt(ps), vs = V({}, Vn, { data: 0 }), bs = vt(vs), Ss = {
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
  }, Es = {
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
  }, _s = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ka(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = _s[e]) ? !!t[e] : !1;
  }
  function Al() {
    return ka;
  }
  var xn = V({}, Jl, {
    key: function(e) {
      if (e.key) {
        var t = Ss[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = vu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Es[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Al,
    charCode: function(e) {
      return e.type === "keypress" ? vu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? vu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), As = vt(xn), Xa = V({}, El, {
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
  }), kt = vt(Xa), Au = V({}, Jl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Al
  }), Tu = vt(Au), Ic = V({}, Vn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $c = vt(Ic), Wc = V({}, El, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fc = vt(Wc), Pc = V({}, Vn, {
    newState: 0,
    oldState: 0
  }), Qn = vt(Pc), Ts = [9, 13, 27, 32], bi = Xn && "CompositionEvent" in window, Va = null;
  Xn && "documentMode" in document && (Va = document.documentMode);
  var er = Xn && "TextEvent" in window && !Va, Ns = Xn && (!bi || Va && 8 < Va && 11 >= Va), Ms = " ", xs = !1;
  function Cs(e, t) {
    switch (e) {
      case "keyup":
        return Ts.indexOf(t.keyCode) !== -1;
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
  function Nu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Il = !1;
  function $l(e, t) {
    switch (e) {
      case "compositionend":
        return Nu(t);
      case "keypress":
        return t.which !== 32 ? null : (xs = !0, Ms);
      case "textInput":
        return e = t.data, e === Ms && xs ? null : e;
      default:
        return null;
    }
  }
  function Wl(e, t) {
    if (Il)
      return e === "compositionend" || !bi && Cs(e, t) ? (e = hs(), pu = pi = sl = null, Il = !1, e) : null;
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
        return Ns && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var tr = {
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
  function Si(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!tr[e.type] : t === "textarea";
  }
  function Rs(e, t, n, l) {
    Ft ? Gt ? Gt.push(l) : Gt = [l] : Ft = l, t = Ec(t, "onChange"), 0 < t.length && (n = new Ga(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var en = null, Fl = null;
  function Mu(e) {
    Dh(e, 0);
  }
  function Tl(e) {
    var t = Pn(e);
    if (ds(t)) return e;
  }
  function qs(e, t) {
    if (e === "change") return t;
  }
  var Os = !1;
  if (Xn) {
    var Ei;
    if (Xn) {
      var Pl = "oninput" in document;
      if (!Pl) {
        var _i = document.createElement("div");
        _i.setAttribute("oninput", "return;"), Pl = typeof _i.oninput == "function";
      }
      Ei = Pl;
    } else Ei = !1;
    Os = Ei && (!document.documentMode || 9 < document.documentMode);
  }
  function Ai() {
    en && (en.detachEvent("onpropertychange", zs), Fl = en = null);
  }
  function zs(e) {
    if (e.propertyName === "value" && Tl(Fl)) {
      var t = [];
      Rs(
        t,
        Fl,
        e,
        mi(e)
      ), yi(Mu, t);
    }
  }
  function ea(e, t, n) {
    e === "focusin" ? (Ai(), en = t, Fl = n, en.attachEvent("onpropertychange", zs)) : e === "focusout" && Ai();
  }
  function Qa(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Tl(Fl);
  }
  function Ds(e, t) {
    if (e === "click") return Tl(t);
  }
  function Us(e, t) {
    if (e === "input" || e === "change")
      return Tl(t);
  }
  function Za(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var St = typeof Object.is == "function" ? Object.is : Za;
  function Ka(e, t) {
    if (St(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!xa.call(t, a) || !St(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function xu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ti(e, t) {
    var n = xu(e);
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
      n = xu(n);
    }
  }
  function js(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? js(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ws(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Ua(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ua(e.document);
    }
    return t;
  }
  function Cu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var nr = Xn && "documentMode" in document && 11 >= document.documentMode, ta = null, Ni = null, f = null, h = !1;
  function T(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    h || ta == null || ta !== Ua(l) || (l = ta, "selectionStart" in l && Cu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), f && Ka(f, l) || (f = l, l = Ec(Ni, "onSelect"), 0 < l.length && (t = new Ga(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = ta)));
  }
  function j(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var X = {
    animationend: j("Animation", "AnimationEnd"),
    animationiteration: j("Animation", "AnimationIteration"),
    animationstart: j("Animation", "AnimationStart"),
    transitionrun: j("Transition", "TransitionRun"),
    transitionstart: j("Transition", "TransitionStart"),
    transitioncancel: j("Transition", "TransitionCancel"),
    transitionend: j("Transition", "TransitionEnd")
  }, pe = {}, re = {};
  Xn && (re = document.createElement("div").style, "AnimationEvent" in window || (delete X.animationend.animation, delete X.animationiteration.animation, delete X.animationstart.animation), "TransitionEvent" in window || delete X.transitionend.transition);
  function Ce(e) {
    if (pe[e]) return pe[e];
    if (!X[e]) return e;
    var t = X[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in re)
        return pe[e] = t[n];
    return e;
  }
  var ne = Ce("animationend"), ke = Ce("animationiteration"), Et = Ce("animationstart"), _t = Ce("transitionrun"), At = Ce("transitionstart"), na = Ce("transitioncancel"), Nl = Ce("transitionend"), Zn = /* @__PURE__ */ new Map(), Ru = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ru.push("scrollEnd");
  function tn(e, t) {
    Zn.set(e, t), It(t, [e]);
  }
  var Ja = typeof reportError == "function" ? reportError : function(e) {
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
  }, G = [], fe = 0, Ie = 0;
  function Tt() {
    for (var e = fe, t = Ie = fe = 0; t < e; ) {
      var n = G[t];
      G[t++] = null;
      var l = G[t];
      G[t++] = null;
      var a = G[t];
      G[t++] = null;
      var u = G[t];
      if (G[t++] = null, l !== null && a !== null) {
        var c = l.pending;
        c === null ? a.next = a : (a.next = c.next, c.next = a), l.pending = a;
      }
      u !== 0 && mf(n, a, u);
    }
  }
  function nn(e, t, n, l) {
    G[fe++] = e, G[fe++] = t, G[fe++] = n, G[fe++] = l, Ie |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function Ia(e, t, n, l) {
    return nn(e, t, n, l), Bs(e);
  }
  function rl(e, t) {
    return nn(e, null, null, t), Bs(e);
  }
  function mf(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var a = !1, u = e.return; u !== null; )
      u.childLanes |= n, l = u.alternate, l !== null && (l.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (a = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, a && t !== null && (a = 31 - Ot(n), e = u.hiddenUpdates, l = e[a], l === null ? e[a] = [t] : l.push(t), t.lane = n | 536870912), u) : null;
  }
  function Bs(e) {
    if (50 < Ki)
      throw Ki = 0, fo = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var qu = {};
  function Fm(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function mn(e, t, n, l) {
    return new Fm(e, t, n, l);
  }
  function lr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ml(e, t) {
    var n = e.alternate;
    return n === null ? (n = mn(
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
  function Ls(e, t, n, l, a, u) {
    var c = 0;
    if (l = e, typeof e == "function") lr(e) && (c = 1);
    else if (typeof e == "string")
      c = lg(
        e,
        n,
        H.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case gt:
          return e = mn(31, n, t, a), e.elementType = gt, e.lanes = u, e;
        case $e:
          return $a(n.children, a, u, t);
        case ot:
          c = 8, a |= 24;
          break;
        case We:
          return e = mn(12, n, t, a | 2), e.elementType = We, e.lanes = u, e;
        case He:
          return e = mn(13, n, t, a), e.elementType = He, e.lanes = u, e;
        case ye:
          return e = mn(19, n, t, a), e.elementType = ye, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case _e:
                c = 10;
                break e;
              case me:
                c = 9;
                break e;
              case Te:
                c = 11;
                break e;
              case ee:
                c = 14;
                break e;
              case Ve:
                c = 16, l = null;
                break e;
            }
          c = 29, n = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = mn(c, n, t, a), t.elementType = e, t.type = l, t.lanes = u, t;
  }
  function $a(e, t, n, l) {
    return e = mn(7, e, l, t), e.lanes = n, e;
  }
  function ar(e, t, n) {
    return e = mn(6, e, null, t), e.lanes = n, e;
  }
  function gf(e) {
    var t = mn(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function ur(e, t, n) {
    return t = mn(
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
  function Cn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = pf.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: ii(t)
      }, pf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: ii(t)
    };
  }
  var Ou = [], zu = 0, Hs = null, Mi = 0, Rn = [], qn = 0, la = null, ol = 1, fl = "";
  function xl(e, t) {
    Ou[zu++] = Mi, Ou[zu++] = Hs, Hs = e, Mi = t;
  }
  function vf(e, t, n) {
    Rn[qn++] = ol, Rn[qn++] = fl, Rn[qn++] = la, la = e;
    var l = ol;
    e = fl;
    var a = 32 - Ot(l) - 1;
    l &= ~(1 << a), n += 1;
    var u = 32 - Ot(t) + a;
    if (30 < u) {
      var c = a - a % 5;
      u = (l & (1 << c) - 1).toString(32), l >>= c, a -= c, ol = 1 << 32 - Ot(t) + a | n << a | l, fl = u + e;
    } else
      ol = 1 << u | n << a | l, fl = e;
  }
  function ir(e) {
    e.return !== null && (xl(e, 1), vf(e, 1, 0));
  }
  function sr(e) {
    for (; e === Hs; )
      Hs = Ou[--zu], Ou[zu] = null, Mi = Ou[--zu], Ou[zu] = null;
    for (; e === la; )
      la = Rn[--qn], Rn[qn] = null, fl = Rn[--qn], Rn[qn] = null, ol = Rn[--qn], Rn[qn] = null;
  }
  function bf(e, t) {
    Rn[qn++] = ol, Rn[qn++] = fl, Rn[qn++] = la, ol = t.id, fl = t.overflow, la = e;
  }
  var Nt = null, Ge = null, Se = !1, aa = null, On = !1, cr = Error(r(519));
  function ua(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw xi(Cn(t, e)), cr;
  }
  function Sf(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[Ke] = e, t[mt] = l, n) {
      case "dialog":
        he("cancel", t), he("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        he("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ii.length; n++)
          he(Ii[n], t);
        break;
      case "source":
        he("error", t);
        break;
      case "img":
      case "image":
      case "link":
        he("error", t), he("load", t);
        break;
      case "details":
        he("toggle", t);
        break;
      case "input":
        he("invalid", t), fi(
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
        he("invalid", t);
        break;
      case "textarea":
        he("invalid", t), ja(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || Bh(t.textContent, n) ? (l.popover != null && (he("beforetoggle", t), he("toggle", t)), l.onScroll != null && he("scroll", t), l.onScrollEnd != null && he("scrollend", t), l.onClick != null && (t.onclick = kn), t = !0) : t = !1, t || ua(e, !0);
  }
  function Ef(e) {
    for (Nt = e.return; Nt; )
      switch (Nt.tag) {
        case 5:
        case 31:
        case 13:
          On = !1;
          return;
        case 27:
        case 3:
          On = !0;
          return;
        default:
          Nt = Nt.return;
      }
  }
  function Du(e) {
    if (e !== Nt) return !1;
    if (!Se) return Ef(e), Se = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || xo(e.type, e.memoizedProps)), n = !n), n && Ge && ua(e), Ef(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Ge = Zh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Ge = Zh(e);
    } else
      t === 27 ? (t = Ge, ba(e.type) ? (e = zo, zo = null, Ge = e) : Ge = t) : Ge = Nt ? Dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wa() {
    Ge = Nt = null, Se = !1;
  }
  function rr() {
    var e = aa;
    return e !== null && (sn === null ? sn = e : sn.push.apply(
      sn,
      e
    ), aa = null), e;
  }
  function xi(e) {
    aa === null ? aa = [e] : aa.push(e);
  }
  var or = p(null), Fa = null, Cl = null;
  function ia(e, t, n) {
    L(or, t._currentValue), t._currentValue = n;
  }
  function Rl(e) {
    e._currentValue = or.current, z(or);
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
  function Uu(e, t, n, l) {
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
          St(a.pendingProps.value, c.value) || (e !== null ? e.push(d) : e = [d]);
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
  function Gs(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!St(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Pa(e) {
    Fa = e, Cl = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Mt(e) {
    return _f(Fa, e);
  }
  function Ys(e, t) {
    return Fa === null && Pa(e), _f(e, t);
  }
  function _f(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Cl === null) {
      if (e === null) throw Error(r(308));
      Cl = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Cl = Cl.next = t;
    return n;
  }
  var Pm = typeof AbortController < "u" ? AbortController : function() {
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
  }, ey = o.unstable_scheduleCallback, ty = o.unstable_NormalPriority, ut = {
    $$typeof: _e,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function hr() {
    return {
      controller: new Pm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ci(e) {
    e.refCount--, e.refCount === 0 && ey(ty, function() {
      e.controller.abort();
    });
  }
  var Ri = null, mr = 0, ju = 0, wu = null;
  function ny(e, t) {
    if (Ri === null) {
      var n = Ri = [];
      mr = 0, ju = vo(), wu = {
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
      wu !== null && (wu.status = "fulfilled");
      var e = Ri;
      Ri = null, ju = 0, wu = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function ly(e, t) {
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
    sh = Qe(), typeof t == "object" && t !== null && typeof t.then == "function" && ny(e, t), Tf !== null && Tf(e, t);
  };
  var eu = p(null);
  function yr() {
    var e = eu.current;
    return e !== null ? e : je.pooledCache;
  }
  function ks(e, t) {
    t === null ? L(eu, eu.current) : L(eu, t.pool);
  }
  function Nf() {
    var e = yr();
    return e === null ? null : { parent: ut._currentValue, pool: e };
  }
  var Bu = Error(r(460)), gr = Error(r(474)), Xs = Error(r(542)), Vs = { then: function() {
  } };
  function Mf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function xf(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(kn, kn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Rf(e), e;
      default:
        if (typeof t.status == "string") t.then(kn, kn);
        else {
          if (e = je, e !== null && 100 < e.shellSuspendCounter)
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
        throw nu = t, Bu;
    }
  }
  function tu(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (nu = n, Bu) : n;
    }
  }
  var nu = null;
  function Cf() {
    if (nu === null) throw Error(r(459));
    var e = nu;
    return nu = null, e;
  }
  function Rf(e) {
    if (e === Bu || e === Xs)
      throw Error(r(483));
  }
  var Lu = null, qi = 0;
  function Qs(e) {
    var t = qi;
    return qi += 1, Lu === null && (Lu = []), xf(Lu, e, t);
  }
  function Oi(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Zs(e, t) {
    throw t.$$typeof === te ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function qf(e) {
    function t(b, v) {
      if (e) {
        var E = b.deletions;
        E === null ? (b.deletions = [v], b.flags |= 16) : E.push(v);
      }
    }
    function n(b, v) {
      if (!e) return null;
      for (; v !== null; )
        t(b, v), v = v.sibling;
      return null;
    }
    function l(b) {
      for (var v = /* @__PURE__ */ new Map(); b !== null; )
        b.key !== null ? v.set(b.key, b) : v.set(b.index, b), b = b.sibling;
      return v;
    }
    function a(b, v) {
      return b = Ml(b, v), b.index = 0, b.sibling = null, b;
    }
    function u(b, v, E) {
      return b.index = E, e ? (E = b.alternate, E !== null ? (E = E.index, E < v ? (b.flags |= 67108866, v) : E) : (b.flags |= 67108866, v)) : (b.flags |= 1048576, v);
    }
    function c(b) {
      return e && b.alternate === null && (b.flags |= 67108866), b;
    }
    function d(b, v, E, C) {
      return v === null || v.tag !== 6 ? (v = ar(E, b.mode, C), v.return = b, v) : (v = a(v, E), v.return = b, v);
    }
    function y(b, v, E, C) {
      var K = E.type;
      return K === $e ? x(
        b,
        v,
        E.props.children,
        C,
        E.key
      ) : v !== null && (v.elementType === K || typeof K == "object" && K !== null && K.$$typeof === Ve && tu(K) === v.type) ? (v = a(v, E.props), Oi(v, E), v.return = b, v) : (v = Ls(
        E.type,
        E.key,
        E.props,
        null,
        b.mode,
        C
      ), Oi(v, E), v.return = b, v);
    }
    function _(b, v, E, C) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== E.containerInfo || v.stateNode.implementation !== E.implementation ? (v = ur(E, b.mode, C), v.return = b, v) : (v = a(v, E.children || []), v.return = b, v);
    }
    function x(b, v, E, C, K) {
      return v === null || v.tag !== 7 ? (v = $a(
        E,
        b.mode,
        C,
        K
      ), v.return = b, v) : (v = a(v, E), v.return = b, v);
    }
    function D(b, v, E) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = ar(
          "" + v,
          b.mode,
          E
        ), v.return = b, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Be:
            return E = Ls(
              v.type,
              v.key,
              v.props,
              null,
              b.mode,
              E
            ), Oi(E, v), E.return = b, E;
          case Le:
            return v = ur(
              v,
              b.mode,
              E
            ), v.return = b, v;
          case Ve:
            return v = tu(v), D(b, v, E);
        }
        if (Rt(v) || Fe(v))
          return v = $a(
            v,
            b.mode,
            E,
            null
          ), v.return = b, v;
        if (typeof v.then == "function")
          return D(b, Qs(v), E);
        if (v.$$typeof === _e)
          return D(
            b,
            Ys(b, v),
            E
          );
        Zs(b, v);
      }
      return null;
    }
    function A(b, v, E, C) {
      var K = v !== null ? v.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return K !== null ? null : d(b, v, "" + E, C);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Be:
            return E.key === K ? y(b, v, E, C) : null;
          case Le:
            return E.key === K ? _(b, v, E, C) : null;
          case Ve:
            return E = tu(E), A(b, v, E, C);
        }
        if (Rt(E) || Fe(E))
          return K !== null ? null : x(b, v, E, C, null);
        if (typeof E.then == "function")
          return A(
            b,
            v,
            Qs(E),
            C
          );
        if (E.$$typeof === _e)
          return A(
            b,
            v,
            Ys(b, E),
            C
          );
        Zs(b, E);
      }
      return null;
    }
    function N(b, v, E, C, K) {
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return b = b.get(E) || null, d(v, b, "" + C, K);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case Be:
            return b = b.get(
              C.key === null ? E : C.key
            ) || null, y(v, b, C, K);
          case Le:
            return b = b.get(
              C.key === null ? E : C.key
            ) || null, _(v, b, C, K);
          case Ve:
            return C = tu(C), N(
              b,
              v,
              E,
              C,
              K
            );
        }
        if (Rt(C) || Fe(C))
          return b = b.get(E) || null, x(v, b, C, K, null);
        if (typeof C.then == "function")
          return N(
            b,
            v,
            E,
            Qs(C),
            K
          );
        if (C.$$typeof === _e)
          return N(
            b,
            v,
            E,
            Ys(v, C),
            K
          );
        Zs(v, C);
      }
      return null;
    }
    function k(b, v, E, C) {
      for (var K = null, Ne = null, Q = v, ue = v = 0, be = null; Q !== null && ue < E.length; ue++) {
        Q.index > ue ? (be = Q, Q = null) : be = Q.sibling;
        var Me = A(
          b,
          Q,
          E[ue],
          C
        );
        if (Me === null) {
          Q === null && (Q = be);
          break;
        }
        e && Q && Me.alternate === null && t(b, Q), v = u(Me, v, ue), Ne === null ? K = Me : Ne.sibling = Me, Ne = Me, Q = be;
      }
      if (ue === E.length)
        return n(b, Q), Se && xl(b, ue), K;
      if (Q === null) {
        for (; ue < E.length; ue++)
          Q = D(b, E[ue], C), Q !== null && (v = u(
            Q,
            v,
            ue
          ), Ne === null ? K = Q : Ne.sibling = Q, Ne = Q);
        return Se && xl(b, ue), K;
      }
      for (Q = l(Q); ue < E.length; ue++)
        be = N(
          Q,
          b,
          ue,
          E[ue],
          C
        ), be !== null && (e && be.alternate !== null && Q.delete(
          be.key === null ? ue : be.key
        ), v = u(
          be,
          v,
          ue
        ), Ne === null ? K = be : Ne.sibling = be, Ne = be);
      return e && Q.forEach(function(Ta) {
        return t(b, Ta);
      }), Se && xl(b, ue), K;
    }
    function I(b, v, E, C) {
      if (E == null) throw Error(r(151));
      for (var K = null, Ne = null, Q = v, ue = v = 0, be = null, Me = E.next(); Q !== null && !Me.done; ue++, Me = E.next()) {
        Q.index > ue ? (be = Q, Q = null) : be = Q.sibling;
        var Ta = A(b, Q, Me.value, C);
        if (Ta === null) {
          Q === null && (Q = be);
          break;
        }
        e && Q && Ta.alternate === null && t(b, Q), v = u(Ta, v, ue), Ne === null ? K = Ta : Ne.sibling = Ta, Ne = Ta, Q = be;
      }
      if (Me.done)
        return n(b, Q), Se && xl(b, ue), K;
      if (Q === null) {
        for (; !Me.done; ue++, Me = E.next())
          Me = D(b, Me.value, C), Me !== null && (v = u(Me, v, ue), Ne === null ? K = Me : Ne.sibling = Me, Ne = Me);
        return Se && xl(b, ue), K;
      }
      for (Q = l(Q); !Me.done; ue++, Me = E.next())
        Me = N(Q, b, ue, Me.value, C), Me !== null && (e && Me.alternate !== null && Q.delete(Me.key === null ? ue : Me.key), v = u(Me, v, ue), Ne === null ? K = Me : Ne.sibling = Me, Ne = Me);
      return e && Q.forEach(function(mg) {
        return t(b, mg);
      }), Se && xl(b, ue), K;
    }
    function Ue(b, v, E, C) {
      if (typeof E == "object" && E !== null && E.type === $e && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Be:
            e: {
              for (var K = E.key; v !== null; ) {
                if (v.key === K) {
                  if (K = E.type, K === $e) {
                    if (v.tag === 7) {
                      n(
                        b,
                        v.sibling
                      ), C = a(
                        v,
                        E.props.children
                      ), C.return = b, b = C;
                      break e;
                    }
                  } else if (v.elementType === K || typeof K == "object" && K !== null && K.$$typeof === Ve && tu(K) === v.type) {
                    n(
                      b,
                      v.sibling
                    ), C = a(v, E.props), Oi(C, E), C.return = b, b = C;
                    break e;
                  }
                  n(b, v);
                  break;
                } else t(b, v);
                v = v.sibling;
              }
              E.type === $e ? (C = $a(
                E.props.children,
                b.mode,
                C,
                E.key
              ), C.return = b, b = C) : (C = Ls(
                E.type,
                E.key,
                E.props,
                null,
                b.mode,
                C
              ), Oi(C, E), C.return = b, b = C);
            }
            return c(b);
          case Le:
            e: {
              for (K = E.key; v !== null; ) {
                if (v.key === K)
                  if (v.tag === 4 && v.stateNode.containerInfo === E.containerInfo && v.stateNode.implementation === E.implementation) {
                    n(
                      b,
                      v.sibling
                    ), C = a(v, E.children || []), C.return = b, b = C;
                    break e;
                  } else {
                    n(b, v);
                    break;
                  }
                else t(b, v);
                v = v.sibling;
              }
              C = ur(E, b.mode, C), C.return = b, b = C;
            }
            return c(b);
          case Ve:
            return E = tu(E), Ue(
              b,
              v,
              E,
              C
            );
        }
        if (Rt(E))
          return k(
            b,
            v,
            E,
            C
          );
        if (Fe(E)) {
          if (K = Fe(E), typeof K != "function") throw Error(r(150));
          return E = K.call(E), I(
            b,
            v,
            E,
            C
          );
        }
        if (typeof E.then == "function")
          return Ue(
            b,
            v,
            Qs(E),
            C
          );
        if (E.$$typeof === _e)
          return Ue(
            b,
            v,
            Ys(b, E),
            C
          );
        Zs(b, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, v !== null && v.tag === 6 ? (n(b, v.sibling), C = a(v, E), C.return = b, b = C) : (n(b, v), C = ar(E, b.mode, C), C.return = b, b = C), c(b)) : n(b, v);
    }
    return function(b, v, E, C) {
      try {
        qi = 0;
        var K = Ue(
          b,
          v,
          E,
          C
        );
        return Lu = null, K;
      } catch (Q) {
        if (Q === Bu || Q === Xs) throw Q;
        var Ne = mn(29, Q, null, b.mode);
        return Ne.lanes = C, Ne.return = b, Ne;
      }
    };
  }
  var lu = qf(!0), Of = qf(!1), sa = !1;
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
  function ca(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ra(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (xe & 2) !== 0) {
      var a = l.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t, t = Bs(e), mf(e, null, n), t;
    }
    return nn(e, l, t, n), Bs(e);
  }
  function zi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, ri(e, n);
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
      var e = wu;
      if (e !== null) throw e;
    }
  }
  function Ui(e, t, n, l) {
    Sr = !1;
    var a = e.updateQueue;
    sa = !1;
    var u = a.firstBaseUpdate, c = a.lastBaseUpdate, d = a.shared.pending;
    if (d !== null) {
      a.shared.pending = null;
      var y = d, _ = y.next;
      y.next = null, c === null ? u = _ : c.next = _, c = y;
      var x = e.alternate;
      x !== null && (x = x.updateQueue, d = x.lastBaseUpdate, d !== c && (d === null ? x.firstBaseUpdate = _ : d.next = _, x.lastBaseUpdate = y));
    }
    if (u !== null) {
      var D = a.baseState;
      c = 0, x = _ = y = null, d = u;
      do {
        var A = d.lane & -536870913, N = A !== d.lane;
        if (N ? (ve & A) === A : (l & A) === A) {
          A !== 0 && A === ju && (Sr = !0), x !== null && (x = x.next = {
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: null,
            next: null
          });
          e: {
            var k = e, I = d;
            A = t;
            var Ue = n;
            switch (I.tag) {
              case 1:
                if (k = I.payload, typeof k == "function") {
                  D = k.call(Ue, D, A);
                  break e;
                }
                D = k;
                break e;
              case 3:
                k.flags = k.flags & -65537 | 128;
              case 0:
                if (k = I.payload, A = typeof k == "function" ? k.call(Ue, D, A) : k, A == null) break e;
                D = V({}, D, A);
                break e;
              case 2:
                sa = !0;
            }
          }
          A = d.callback, A !== null && (e.flags |= 64, N && (e.flags |= 8192), N = a.callbacks, N === null ? a.callbacks = [A] : N.push(A));
        } else
          N = {
            lane: A,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          }, x === null ? (_ = x = N, y = D) : x = x.next = N, c |= A;
        if (d = d.next, d === null) {
          if (d = a.shared.pending, d === null)
            break;
          N = d, d = N.next, N.next = null, a.lastBaseUpdate = N, a.shared.pending = null;
        }
      } while (!0);
      x === null && (y = D), a.baseState = y, a.firstBaseUpdate = _, a.lastBaseUpdate = x, u === null && (a.shared.lanes = 0), ma |= c, e.lanes = c, e.memoizedState = D;
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
  var Hu = p(null), Ks = p(0);
  function Uf(e, t) {
    e = Ll, L(Ks, e), L(Hu, t), Ll = e | t.baseLanes;
  }
  function Er() {
    L(Ks, Ll), L(Hu, Hu.current);
  }
  function _r() {
    Ll = Ks.current, z(Hu), z(Ks);
  }
  var yn = p(null), zn = null;
  function oa(e) {
    var t = e.alternate;
    L(tt, tt.current & 1), L(yn, e), zn === null && (t === null || Hu.current !== null || t.memoizedState !== null) && (zn = e);
  }
  function Ar(e) {
    L(tt, tt.current), L(yn, e), zn === null && (zn = e);
  }
  function jf(e) {
    e.tag === 22 ? (L(tt, tt.current), L(yn, e), zn === null && (zn = e)) : fa();
  }
  function fa() {
    L(tt, tt.current), L(yn, yn.current);
  }
  function gn(e) {
    z(yn), zn === e && (zn = null), z(tt);
  }
  var tt = p(0);
  function Js(e) {
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
  var ql = 0, le = null, ze = null, it = null, Is = !1, Gu = !1, au = !1, $s = 0, ji = 0, Yu = null, ay = 0;
  function Pe() {
    throw Error(r(321));
  }
  function Tr(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!St(e[n], t[n])) return !1;
    return !0;
  }
  function Nr(e, t, n, l, a, u) {
    return ql = u, le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? vd : Gr, au = !1, u = n(l, a), au = !1, Gu && (u = Bf(
      t,
      n,
      l,
      a
    )), wf(e), u;
  }
  function wf(e) {
    M.H = Li;
    var t = ze !== null && ze.next !== null;
    if (ql = 0, it = ze = le = null, Is = !1, ji = 0, Yu = null, t) throw Error(r(300));
    e === null || st || (e = e.dependencies, e !== null && Gs(e) && (st = !0));
  }
  function Bf(e, t, n, l) {
    le = e;
    var a = 0;
    do {
      if (Gu && (Yu = null), ji = 0, Gu = !1, 25 <= a) throw Error(r(301));
      if (a += 1, it = ze = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      M.H = bd, u = t(n, l);
    } while (Gu);
    return u;
  }
  function uy() {
    var e = M.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? wi(t) : t, e = e.useState()[0], (ze !== null ? ze.memoizedState : null) !== e && (le.flags |= 1024), t;
  }
  function Mr() {
    var e = $s !== 0;
    return $s = 0, e;
  }
  function xr(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Cr(e) {
    if (Is) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Is = !1;
    }
    ql = 0, it = ze = le = null, Gu = !1, ji = $s = 0, Yu = null;
  }
  function Xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return it === null ? le.memoizedState = it = e : it = it.next = e, it;
  }
  function nt() {
    if (ze === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ze.next;
    var t = it === null ? le.memoizedState : it.next;
    if (t !== null)
      it = t, ze = e;
    else {
      if (e === null)
        throw le.alternate === null ? Error(r(467)) : Error(r(310));
      ze = e, e = {
        memoizedState: ze.memoizedState,
        baseState: ze.baseState,
        baseQueue: ze.baseQueue,
        queue: ze.queue,
        next: null
      }, it === null ? le.memoizedState = it = e : it = it.next = e;
    }
    return it;
  }
  function Ws() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function wi(e) {
    var t = ji;
    return ji += 1, Yu === null && (Yu = []), e = xf(Yu, e, t), t = le, (it === null ? t.memoizedState : it.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? vd : Gr), e;
  }
  function Fs(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return wi(e);
      if (e.$$typeof === _e) return Mt(e);
    }
    throw Error(r(438, String(e)));
  }
  function Rr(e) {
    var t = null, n = le.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = le.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Ws(), le.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = Bn;
    return t.index++, n;
  }
  function Ol(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ps(e) {
    var t = nt();
    return qr(t, ze, e);
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
        var D = _.lane & -536870913;
        if (D !== _.lane ? (ve & D) === D : (ql & D) === D) {
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
            }), D === ju && (x = !0);
          else if ((ql & A) === A) {
            _ = _.next, A === ju && (x = !0);
            continue;
          } else
            D = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, y === null ? (d = y = D, c = u) : y = y.next = D, le.lanes |= A, ma |= A;
          D = _.action, au && n(u, D), u = _.hasEagerState ? _.eagerState : n(u, D);
        } else
          A = {
            lane: D,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, y === null ? (d = y = A, c = u) : y = y.next = A, le.lanes |= D, ma |= D;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (y === null ? c = u : y.next = d, !St(u, e.memoizedState) && (st = !0, x && (n = wu, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = c, e.baseQueue = y, l.lastRenderedState = u;
    }
    return a === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Or(e) {
    var t = nt(), n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, a = n.pending, u = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var c = a = a.next;
      do
        u = e(u, c.action), c = c.next;
      while (c !== a);
      St(u, t.memoizedState) || (st = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, l];
  }
  function Lf(e, t, n) {
    var l = le, a = nt(), u = Se;
    if (u) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = t();
    var c = !St(
      (ze || a).memoizedState,
      n
    );
    if (c && (a.memoizedState = n, st = !0), a = a.queue, Ur(Yf.bind(null, l, a, e), [
      e
    ]), a.getSnapshot !== t || c || it !== null && it.memoizedState.tag & 1) {
      if (l.flags |= 2048, ku(
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
      ), je === null) throw Error(r(349));
      u || (ql & 127) !== 0 || Hf(l, t, n);
    }
    return n;
  }
  function Hf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = le.updateQueue, t === null ? (t = Ws(), le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
      return !St(e, n);
    } catch {
      return !0;
    }
  }
  function Xf(e) {
    var t = rl(e, 2);
    t !== null && cn(t, e, 2);
  }
  function zr(e) {
    var t = Xt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), au) {
        fn(!0);
        try {
          n();
        } finally {
          fn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ol,
      lastRenderedState: e
    }, t;
  }
  function Vf(e, t, n, l) {
    return e.baseState = n, qr(
      e,
      ze,
      typeof l == "function" ? l : Ol
    );
  }
  function iy(e, t, n, l, a) {
    if (nc(e)) throw Error(r(485));
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
  function $f(e, t) {
    if (Se) {
      var n = je.formState;
      if (n !== null) {
        e: {
          var l = le;
          if (Se) {
            if (Ge) {
              t: {
                for (var a = Ge, u = On; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break t;
                  }
                  if (a = Dn(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                Ge = Dn(
                  a.nextSibling
                ), l = a.data === "F!";
                break e;
              }
            }
            ua(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = Xt(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: If,
      lastRenderedState: t
    }, n.queue = l, n = yd.bind(
      null,
      le,
      l
    ), l.dispatch = n, l = zr(!1), u = Hr.bind(
      null,
      le,
      !1,
      l.queue
    ), l = Xt(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = a, n = iy.bind(
      null,
      le,
      a,
      u,
      n
    ), a.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function Wf(e) {
    var t = nt();
    return Ff(t, ze, e);
  }
  function Ff(e, t, n) {
    if (t = qr(
      e,
      t,
      If
    )[0], e = Ps(Ol)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = wi(t);
      } catch (c) {
        throw c === Bu ? Xs : c;
      }
    else l = t;
    t = nt();
    var a = t.queue, u = a.dispatch;
    return n !== t.memoizedState && (le.flags |= 2048, ku(
      9,
      { destroy: void 0 },
      sy.bind(null, a, n),
      null
    )), [l, u, e];
  }
  function sy(e, t) {
    e.action = t;
  }
  function Pf(e) {
    var t = nt(), n = ze;
    if (n !== null)
      return Ff(t, n, e);
    nt(), t = t.memoizedState, n = nt();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function ku(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = le.updateQueue, t === null && (t = Ws(), le.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function ed() {
    return nt().memoizedState;
  }
  function ec(e, t, n, l) {
    var a = Xt();
    le.flags |= e, a.memoizedState = ku(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function tc(e, t, n, l) {
    var a = nt();
    l = l === void 0 ? null : l;
    var u = a.memoizedState.inst;
    ze !== null && l !== null && Tr(l, ze.memoizedState.deps) ? a.memoizedState = ku(t, u, n, l) : (le.flags |= e, a.memoizedState = ku(
      1 | t,
      u,
      n,
      l
    ));
  }
  function td(e, t) {
    ec(8390656, 8, e, t);
  }
  function Ur(e, t) {
    tc(2048, 8, e, t);
  }
  function cy(e) {
    le.flags |= 4;
    var t = le.updateQueue;
    if (t === null)
      t = Ws(), le.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function nd(e) {
    var t = nt().memoizedState;
    return cy({ ref: t, nextImpl: e }), function() {
      if ((xe & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function ld(e, t) {
    return tc(4, 2, e, t);
  }
  function ad(e, t) {
    return tc(4, 4, e, t);
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
    n = n != null ? n.concat([e]) : null, tc(4, 4, ud.bind(null, t, e), n);
  }
  function jr() {
  }
  function sd(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Tr(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function cd(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Tr(t, l[1]))
      return l[0];
    if (l = e(), au) {
      fn(!0);
      try {
        e();
      } finally {
        fn(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function wr(e, t, n) {
    return n === void 0 || (ql & 1073741824) !== 0 && (ve & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = rh(), le.lanes |= e, ma |= e, n);
  }
  function rd(e, t, n, l) {
    return St(n, t) ? n : Hu.current !== null ? (e = wr(e, n, l), St(e, t) || (st = !0), e) : (ql & 42) === 0 || (ql & 1073741824) !== 0 && (ve & 261930) === 0 ? (st = !0, e.memoizedState = n) : (e = rh(), le.lanes |= e, ma |= e, t);
  }
  function od(e, t, n, l, a) {
    var u = B.p;
    B.p = u !== 0 && 8 > u ? u : 8;
    var c = M.T, d = {};
    M.T = d, Hr(e, !1, t, n);
    try {
      var y = a(), _ = M.S;
      if (_ !== null && _(d, y), y !== null && typeof y == "object" && typeof y.then == "function") {
        var x = ly(
          y,
          l
        );
        Bi(
          e,
          t,
          x,
          bn(e)
        );
      } else
        Bi(
          e,
          t,
          l,
          bn(e)
        );
    } catch (D) {
      Bi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: D },
        bn()
      );
    } finally {
      B.p = u, c !== null && d.types !== null && (c.types = d.types), M.T = c;
    }
  }
  function ry() {
  }
  function Br(e, t, n, l) {
    if (e.tag !== 5) throw Error(r(476));
    var a = fd(e).queue;
    od(
      e,
      a,
      t,
      Z,
      n === null ? ry : function() {
        return dd(e), n(l);
      }
    );
  }
  function fd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ol,
        lastRenderedState: Z
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
        lastRenderedReducer: Ol,
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
      bn()
    );
  }
  function Lr() {
    return Mt(es);
  }
  function hd() {
    return nt().memoizedState;
  }
  function md() {
    return nt().memoizedState;
  }
  function oy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = bn();
          e = ca(n);
          var l = ra(t, e, n);
          l !== null && (cn(l, t, n), zi(l, t, n)), t = { cache: hr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function fy(e, t, n) {
    var l = bn();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nc(e) ? gd(t, n) : (n = Ia(e, t, n, l), n !== null && (cn(n, e, l), pd(n, t, l)));
  }
  function yd(e, t, n) {
    var l = bn();
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
    if (nc(e)) gd(t, a);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var c = t.lastRenderedState, d = u(c, n);
          if (a.hasEagerState = !0, a.eagerState = d, St(d, c))
            return nn(e, t, a, 0), je === null && Tt(), !1;
        } catch {
        }
      if (n = Ia(e, t, a, l), n !== null)
        return cn(n, e, l), pd(n, t, l), !0;
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
    }, nc(e)) {
      if (t) throw Error(r(479));
    } else
      t = Ia(
        e,
        n,
        l,
        2
      ), t !== null && cn(t, e, 2);
  }
  function nc(e) {
    var t = e.alternate;
    return e === le || t !== null && t === le;
  }
  function gd(e, t) {
    Gu = Is = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function pd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, ri(e, n);
    }
  }
  var Li = {
    readContext: Mt,
    use: Fs,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useLayoutEffect: Pe,
    useInsertionEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    useHostTransitionStatus: Pe,
    useFormState: Pe,
    useActionState: Pe,
    useOptimistic: Pe,
    useMemoCache: Pe,
    useCacheRefresh: Pe
  };
  Li.useEffectEvent = Pe;
  var vd = {
    readContext: Mt,
    use: Fs,
    useCallback: function(e, t) {
      return Xt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Mt,
    useEffect: td,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, ec(
        4194308,
        4,
        ud.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return ec(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      ec(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Xt();
      t = t === void 0 ? null : t;
      var l = e();
      if (au) {
        fn(!0);
        try {
          e();
        } finally {
          fn(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = Xt();
      if (n !== void 0) {
        var a = n(t);
        if (au) {
          fn(!0);
          try {
            n(t);
          } finally {
            fn(!1);
          }
        }
      } else a = t;
      return l.memoizedState = l.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, l.queue = e, e = e.dispatch = fy.bind(
        null,
        le,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = Xt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = zr(e);
      var t = e.queue, n = yd.bind(null, le, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: jr,
    useDeferredValue: function(e, t) {
      var n = Xt();
      return wr(n, e, t);
    },
    useTransition: function() {
      var e = zr(!1);
      return e = od.bind(
        null,
        le,
        e.queue,
        !0,
        !1
      ), Xt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = le, a = Xt();
      if (Se) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = t(), je === null)
          throw Error(r(349));
        (ve & 127) !== 0 || Hf(l, t, n);
      }
      a.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return a.queue = u, td(Yf.bind(null, l, u, e), [
        e
      ]), l.flags |= 2048, ku(
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
      var e = Xt(), t = je.identifierPrefix;
      if (Se) {
        var n = fl, l = ol;
        n = (l & ~(1 << 32 - Ot(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = $s++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = ay++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Lr,
    useFormState: $f,
    useActionState: $f,
    useOptimistic: function(e) {
      var t = Xt();
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
        le,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Rr,
    useCacheRefresh: function() {
      return Xt().memoizedState = oy.bind(
        null,
        le
      );
    },
    useEffectEvent: function(e) {
      var t = Xt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((xe & 2) !== 0)
          throw Error(r(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Gr = {
    readContext: Mt,
    use: Fs,
    useCallback: sd,
    useContext: Mt,
    useEffect: Ur,
    useImperativeHandle: id,
    useInsertionEffect: ld,
    useLayoutEffect: ad,
    useMemo: cd,
    useReducer: Ps,
    useRef: ed,
    useState: function() {
      return Ps(Ol);
    },
    useDebugValue: jr,
    useDeferredValue: function(e, t) {
      var n = nt();
      return rd(
        n,
        ze.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ps(Ol)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : wi(e),
        t
      ];
    },
    useSyncExternalStore: Lf,
    useId: hd,
    useHostTransitionStatus: Lr,
    useFormState: Wf,
    useActionState: Wf,
    useOptimistic: function(e, t) {
      var n = nt();
      return Vf(n, ze, e, t);
    },
    useMemoCache: Rr,
    useCacheRefresh: md
  };
  Gr.useEffectEvent = nd;
  var bd = {
    readContext: Mt,
    use: Fs,
    useCallback: sd,
    useContext: Mt,
    useEffect: Ur,
    useImperativeHandle: id,
    useInsertionEffect: ld,
    useLayoutEffect: ad,
    useMemo: cd,
    useReducer: Or,
    useRef: ed,
    useState: function() {
      return Or(Ol);
    },
    useDebugValue: jr,
    useDeferredValue: function(e, t) {
      var n = nt();
      return ze === null ? wr(n, e, t) : rd(
        n,
        ze.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Or(Ol)[0], t = nt().memoizedState;
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
      var n = nt();
      return ze !== null ? Vf(n, ze, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Rr,
    useCacheRefresh: md
  };
  bd.useEffectEvent = nd;
  function Yr(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : V({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var kr = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = bn(), a = ca(l);
      a.payload = t, n != null && (a.callback = n), t = ra(e, a, l), t !== null && (cn(t, e, l), zi(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = bn(), a = ca(l);
      a.tag = 1, a.payload = t, n != null && (a.callback = n), t = ra(e, a, l), t !== null && (cn(t, e, l), zi(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = bn(), l = ca(n);
      l.tag = 2, t != null && (l.callback = t), t = ra(e, l, n), t !== null && (cn(t, e, n), zi(t, e, n));
    }
  };
  function Sd(e, t, n, l, a, u, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, c) : t.prototype && t.prototype.isPureReactComponent ? !Ka(n, l) || !Ka(a, u) : !0;
  }
  function Ed(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && kr.enqueueReplaceState(t, t.state, null);
  }
  function uu(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = V({}, n));
      for (var a in e)
        n[a] === void 0 && (n[a] = e[a]);
    }
    return n;
  }
  function _d(e) {
    Ja(e);
  }
  function Ad(e) {
    console.error(e);
  }
  function Td(e) {
    Ja(e);
  }
  function lc(e, t) {
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
    return n = ca(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      lc(e, t);
    }, n;
  }
  function Md(e) {
    return e = ca(e), e.tag = 3, e;
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
      Nd(t, n, l), typeof a != "function" && (ya === null ? ya = /* @__PURE__ */ new Set([this]) : ya.add(this));
      var d = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: d !== null ? d : ""
      });
    });
  }
  function dy(e, t, n, l, a) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && Uu(
        t,
        n,
        a,
        !0
      ), n = yn.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return zn === null ? yc() : n.alternate === null && et === 0 && (et = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, l === Vs ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), yo(e, l, a)), !1;
          case 22:
            return n.flags |= 65536, l === Vs ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), yo(e, l, a)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return yo(e, l, a), yc(), !1;
    }
    if (Se)
      return t = yn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, l !== cr && (e = Error(r(422), { cause: l }), xi(Cn(e, n)))) : (l !== cr && (t = Error(r(423), {
        cause: l
      }), xi(
        Cn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, l = Cn(l, n), a = Xr(
        e.stateNode,
        l,
        a
      ), br(e, a), et !== 4 && (et = 2)), !1;
    var u = Error(r(520), { cause: l });
    if (u = Cn(u, n), Zi === null ? Zi = [u] : Zi.push(u), et !== 4 && (et = 2), t === null) return !0;
    l = Cn(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Xr(n.stateNode, l, e), br(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (ya === null || !ya.has(u))))
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
  var Vr = Error(r(461)), st = !1;
  function xt(e, t, n, l) {
    t.child = e === null ? Of(t, null, n, l) : lu(
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
    return Pa(t), l = Nr(
      e,
      t,
      n,
      c,
      u,
      a
    ), d = Mr(), e !== null && !st ? (xr(e, t, a), zl(e, t, a)) : (Se && d && ir(t), t.flags |= 1, xt(e, t, l, a), t.child);
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
      )) : (e = Ls(
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
      if (n = n.compare, n = n !== null ? n : Ka, n(c, l) && e.ref === t.ref)
        return zl(e, t, a);
    }
    return t.flags |= 1, e = Ml(u, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function qd(e, t, n, l, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Ka(u, l) && e.ref === t.ref)
        if (st = !1, t.pendingProps = l = u, Fr(e, a))
          (e.flags & 131072) !== 0 && (st = !0);
        else
          return t.lanes = e.lanes, zl(e, t, a);
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
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ks(
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
      u !== null ? (ks(t, u.cachePool), Uf(t, u), fa(), t.memoizedState = null) : (e !== null && ks(t, null), Er(), fa());
    return xt(e, t, a, n), t.child;
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
    return u = u === null ? null : { parent: ut._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && ks(t, null), Er(), jf(t), e !== null && Uu(e, t, l, !0), t.childLanes = a, null;
  }
  function ac(e, t) {
    return t = ic(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Dd(e, t, n) {
    return lu(t, e.child, null, n), e = ac(t, t.pendingProps), e.flags |= 2, gn(t), t.memoizedState = null, e;
  }
  function hy(e, t, n) {
    var l = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Se) {
        if (l.mode === "hidden")
          return e = ac(t, l), t.lanes = 536870912, Hi(null, e);
        if (Ar(t), (e = Ge) ? (e = Qh(
          e,
          On
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: la !== null ? { id: ol, overflow: fl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = gf(e), n.return = t, t.child = n, Nt = t, Ge = null)) : e = null, e === null) throw ua(t);
        return t.lanes = 536870912, null;
      }
      return ac(t, l);
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
      else if (st || Uu(e, t, n, !1), a = (n & e.childLanes) !== 0, st || a) {
        if (l = je, l !== null && (c = ce(l, n), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, rl(e, c), cn(l, e, c), Vr;
        yc(), t = Dd(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, Ge = Dn(c.nextSibling), Nt = t, Se = !0, aa = null, On = !1, e !== null && bf(t, e), t = ac(t, l), t.flags |= 4096;
      return t;
    }
    return e = Ml(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function uc(e, t) {
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
    return Pa(t), n = Nr(
      e,
      t,
      n,
      l,
      void 0,
      a
    ), l = Mr(), e !== null && !st ? (xr(e, t, a), zl(e, t, a)) : (Se && l && ir(t), t.flags |= 1, xt(e, t, n, a), t.child);
  }
  function Ud(e, t, n, l, a, u) {
    return Pa(t), t.updateQueue = null, n = Bf(
      t,
      l,
      n,
      a
    ), wf(e), l = Mr(), e !== null && !st ? (xr(e, t, u), zl(e, t, u)) : (Se && l && ir(t), t.flags |= 1, xt(e, t, n, u), t.child);
  }
  function jd(e, t, n, l, a) {
    if (Pa(t), t.stateNode === null) {
      var u = qu, c = n.contextType;
      typeof c == "object" && c !== null && (u = Mt(c)), u = new n(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = kr, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, pr(t), c = n.contextType, u.context = typeof c == "object" && c !== null ? Mt(c) : qu, u.state = t.memoizedState, c = n.getDerivedStateFromProps, typeof c == "function" && (Yr(
        t,
        n,
        c,
        l
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && kr.enqueueReplaceState(u, u.state, null), Ui(t, l, u, a), Di(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      u = t.stateNode;
      var d = t.memoizedProps, y = uu(n, d);
      u.props = y;
      var _ = u.context, x = n.contextType;
      c = qu, typeof x == "object" && x !== null && (c = Mt(x));
      var D = n.getDerivedStateFromProps;
      x = typeof D == "function" || typeof u.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, x || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d || _ !== c) && Ed(
        t,
        u,
        l,
        c
      ), sa = !1;
      var A = t.memoizedState;
      u.state = A, Ui(t, l, u, a), Di(), _ = t.memoizedState, d || A !== _ || sa ? (typeof D == "function" && (Yr(
        t,
        n,
        D,
        l
      ), _ = t.memoizedState), (y = sa || Sd(
        t,
        n,
        y,
        l,
        A,
        _,
        c
      )) ? (x || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = _), u.props = l, u.state = _, u.context = c, l = y) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      u = t.stateNode, vr(e, t), c = t.memoizedProps, x = uu(n, c), u.props = x, D = t.pendingProps, A = u.context, _ = n.contextType, y = qu, typeof _ == "object" && _ !== null && (y = Mt(_)), d = n.getDerivedStateFromProps, (_ = typeof d == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== D || A !== y) && Ed(
        t,
        u,
        l,
        y
      ), sa = !1, A = t.memoizedState, u.state = A, Ui(t, l, u, a), Di();
      var N = t.memoizedState;
      c !== D || A !== N || sa || e !== null && e.dependencies !== null && Gs(e.dependencies) ? (typeof d == "function" && (Yr(
        t,
        n,
        d,
        l
      ), N = t.memoizedState), (x = sa || Sd(
        t,
        n,
        x,
        l,
        A,
        N,
        y
      ) || e !== null && e.dependencies !== null && Gs(e.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, N, y), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        N,
        y
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = N), u.props = l, u.state = N, u.context = y, l = x) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return u = l, uc(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = lu(
      t,
      e.child,
      null,
      a
    ), t.child = lu(
      t,
      null,
      n,
      a
    )) : xt(e, t, n, a), t.memoizedState = u.state, e = t.child) : e = zl(
      e,
      t,
      a
    ), e;
  }
  function wd(e, t, n, l) {
    return Wa(), t.flags |= 256, xt(e, t, n, l), t.child;
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
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= vn), e;
  }
  function Bd(e, t, n) {
    var l = t.pendingProps, a = !1, u = (t.flags & 128) !== 0, c;
    if ((c = u) || (c = e !== null && e.memoizedState === null ? !1 : (tt.current & 2) !== 0), c && (a = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Se) {
        if (a ? oa(t) : fa(), (e = Ge) ? (e = Qh(
          e,
          On
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: la !== null ? { id: ol, overflow: fl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = gf(e), n.return = t, t.child = n, Nt = t, Ge = null)) : e = null, e === null) throw ua(t);
        return Oo(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var d = l.children;
      return l = l.fallback, a ? (fa(), a = t.mode, d = ic(
        { mode: "hidden", children: d },
        a
      ), l = $a(
        l,
        a,
        n,
        null
      ), d.return = t, l.return = t, d.sibling = l, t.child = d, l = t.child, l.memoizedState = Kr(n), l.childLanes = Jr(
        e,
        c,
        n
      ), t.memoizedState = Zr, Hi(null, l)) : (oa(t), Ir(t, d));
    }
    var y = e.memoizedState;
    if (y !== null && (d = y.dehydrated, d !== null)) {
      if (u)
        t.flags & 256 ? (oa(t), t.flags &= -257, t = $r(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (fa(), t.child = e.child, t.flags |= 128, t = null) : (fa(), d = l.fallback, a = t.mode, l = ic(
          { mode: "visible", children: l.children },
          a
        ), d = $a(
          d,
          a,
          n,
          null
        ), d.flags |= 2, l.return = t, d.return = t, l.sibling = d, t.child = l, lu(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = Kr(n), l.childLanes = Jr(
          e,
          c,
          n
        ), t.memoizedState = Zr, t = Hi(null, l));
      else if (oa(t), Oo(d)) {
        if (c = d.nextSibling && d.nextSibling.dataset, c) var _ = c.dgst;
        c = _, l = Error(r(419)), l.stack = "", l.digest = c, xi({ value: l, source: null, stack: null }), t = $r(
          e,
          t,
          n
        );
      } else if (st || Uu(e, t, n, !1), c = (n & e.childLanes) !== 0, st || c) {
        if (c = je, c !== null && (l = ce(c, n), l !== 0 && l !== y.retryLane))
          throw y.retryLane = l, rl(e, l), cn(c, e, l), Vr;
        qo(d) || yc(), t = $r(
          e,
          t,
          n
        );
      } else
        qo(d) ? (t.flags |= 192, t.child = e.child, t = null) : (e = y.treeContext, Ge = Dn(
          d.nextSibling
        ), Nt = t, Se = !0, aa = null, On = !1, e !== null && bf(t, e), t = Ir(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (fa(), d = l.fallback, a = t.mode, y = e.child, _ = y.sibling, l = Ml(y, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = y.subtreeFlags & 65011712, _ !== null ? d = Ml(
      _,
      d
    ) : (d = $a(
      d,
      a,
      n,
      null
    ), d.flags |= 2), d.return = t, l.return = t, l.sibling = d, t.child = l, Hi(null, l), l = t.child, d = e.child.memoizedState, d === null ? d = Kr(n) : (a = d.cachePool, a !== null ? (y = ut._currentValue, a = a.parent !== y ? { parent: y, pool: y } : a) : a = Nf(), d = {
      baseLanes: d.baseLanes | n,
      cachePool: a
    }), l.memoizedState = d, l.childLanes = Jr(
      e,
      c,
      n
    ), t.memoizedState = Zr, Hi(e.child, l)) : (oa(t), n = e.child, e = n.sibling, n = Ml(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Ir(e, t) {
    return t = ic(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function ic(e, t) {
    return e = mn(22, e, null, t), e.lanes = 0, e;
  }
  function $r(e, t, n) {
    return lu(t, e.child, null, n), e = Ir(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ld(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), fr(e.return, t, n);
  }
  function Wr(e, t, n, l, a, u) {
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
    var c = tt.current, d = (c & 2) !== 0;
    if (d ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, L(tt, c), xt(e, t, l, n), l = Se ? Mi : 0, !d && e !== null && (e.flags & 128) !== 0)
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
          e = n.alternate, e !== null && Js(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Wr(
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
          if (e = a.alternate, e !== null && Js(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        Wr(
          t,
          !0,
          n,
          null,
          u,
          l
        );
        break;
      case "together":
        Wr(
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
  function zl(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ma |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Uu(
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
      for (e = t.child, n = Ml(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Ml(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Fr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Gs(e)));
  }
  function my(e, t, n) {
    switch (t.tag) {
      case 3:
        ge(t, t.stateNode.containerInfo), ia(t, ut, e.memoizedState.cache), Wa();
        break;
      case 27:
      case 5:
        oe(t);
        break;
      case 4:
        ge(t, t.stateNode.containerInfo);
        break;
      case 10:
        ia(
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
          return l.dehydrated !== null ? (oa(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Bd(e, t, n) : (oa(t), e = zl(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        oa(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (Uu(
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
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), L(tt, tt.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Od(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        ia(t, ut, e.memoizedState.cache);
    }
    return zl(e, t, n);
  }
  function Gd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        st = !0;
      else {
        if (!Fr(e, n) && (t.flags & 128) === 0)
          return st = !1, my(
            e,
            t,
            n
          );
        st = (e.flags & 131072) !== 0;
      }
    else
      st = !1, Se && (t.flags & 1048576) !== 0 && vf(t, Mi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = tu(t.elementType), t.type = e, typeof e == "function")
            lr(e) ? (l = uu(e, l), t.tag = 1, t = jd(
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
              if (a === Te) {
                t.tag = 11, t = Cd(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (a === ee) {
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
            throw t = Ut(e) || e, Error(r(306, t, ""));
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
        return l = t.type, a = uu(
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
          if (ge(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          a = u.element, vr(e, t), Ui(t, l, null, n);
          var c = t.memoizedState;
          if (l = c.cache, ia(t, ut, l), l !== u.cache && dr(
            t,
            [ut],
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
              a = Cn(
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
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ge = Dn(e.firstChild), Nt = t, Se = !0, aa = null, On = !0, n = Of(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Wa(), l === a) {
              t = zl(
                e,
                t,
                n
              );
              break e;
            }
            xt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return uc(e, t), e === null ? (n = Wh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Se || (n = t.type, e = t.pendingProps, l = _c(
          se.current
        ).createElement(n), l[Ke] = t, l[mt] = e, Ct(l, n, e), Je(l), t.stateNode = l) : t.memoizedState = Wh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return oe(t), e === null && Se && (l = t.stateNode = Jh(
          t.type,
          t.pendingProps,
          se.current
        ), Nt = t, On = !0, a = Ge, ba(t.type) ? (zo = a, Ge = Dn(l.firstChild)) : Ge = a), xt(
          e,
          t,
          t.pendingProps.children,
          n
        ), uc(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Se && ((a = l = Ge) && (l = Vy(
          l,
          t.type,
          t.pendingProps,
          On
        ), l !== null ? (t.stateNode = l, Nt = t, Ge = Dn(l.firstChild), On = !1, a = !0) : a = !1), a || ua(t)), oe(t), a = t.type, u = t.pendingProps, c = e !== null ? e.memoizedProps : null, l = u.children, xo(a, u) ? l = null : c !== null && xo(a, c) && (t.flags |= 32), t.memoizedState !== null && (a = Nr(
          e,
          t,
          uy,
          null,
          null,
          n
        ), es._currentValue = a), uc(e, t), xt(e, t, l, n), t.child;
      case 6:
        return e === null && Se && ((e = n = Ge) && (n = Qy(
          n,
          t.pendingProps,
          On
        ), n !== null ? (t.stateNode = n, Nt = t, Ge = null, e = !0) : e = !1), e || ua(t)), null;
      case 13:
        return Bd(e, t, n);
      case 4:
        return ge(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = lu(
          t,
          null,
          l,
          n
        ) : xt(e, t, l, n), t.child;
      case 11:
        return Cd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return xt(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return xt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return xt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return l = t.pendingProps, ia(t, t.type, l.value), xt(e, t, l.children, n), t.child;
      case 9:
        return a = t.type._context, l = t.pendingProps.children, Pa(t), a = Mt(a), l = l(a), t.flags |= 1, xt(e, t, l, n), t.child;
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
        return hy(e, t, n);
      case 22:
        return Od(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Pa(t), l = Mt(ut), e === null ? (a = yr(), a === null && (a = je, u = hr(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= n), a = u), t.memoizedState = { parent: l, cache: a }, pr(t), ia(t, ut, a)) : ((e.lanes & n) !== 0 && (vr(e, t), Ui(t, null, null, n), Di()), a = e.memoizedState, u = t.memoizedState, a.parent !== l ? (a = { parent: l, cache: l }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), ia(t, ut, l)) : (l = u.cache, ia(t, ut, l), l !== a.cache && dr(
          t,
          [ut],
          n,
          !0
        ))), xt(
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
  function Dl(e) {
    e.flags |= 4;
  }
  function Pr(e, t, n, l, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (hh()) e.flags |= 8192;
        else
          throw nu = Vs, gr;
    } else e.flags &= -16777217;
  }
  function Yd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !nm(t))
      if (hh()) e.flags |= 8192;
      else
        throw nu = Vs, gr;
  }
  function sc(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? F() : 536870912, e.lanes |= t, Zu |= t);
  }
  function Gi(e, t) {
    if (!Se)
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
  function Ye(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, l = 0;
    if (t)
      for (var a = e.child; a !== null; )
        n |= a.lanes | a.childLanes, l |= a.subtreeFlags & 65011712, l |= a.flags & 65011712, a.return = e, a = a.sibling;
    else
      for (a = e.child; a !== null; )
        n |= a.lanes | a.childLanes, l |= a.subtreeFlags, l |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= l, e.childLanes = n, t;
  }
  function yy(e, t, n) {
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
        return Ye(t), null;
      case 1:
        return Ye(t), null;
      case 3:
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Rl(ut), we(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Du(t) ? Dl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, rr())), Ye(t), null;
      case 26:
        var a = t.type, u = t.memoizedState;
        return e === null ? (Dl(t), u !== null ? (Ye(t), Yd(t, u)) : (Ye(t), Pr(
          t,
          a,
          null,
          l,
          n
        ))) : u ? u !== e.memoizedState ? (Dl(t), Ye(t), Yd(t, u)) : (Ye(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Dl(t), Ye(t), Pr(
          t,
          a,
          e,
          l,
          n
        )), null;
      case 27:
        if (gl(t), n = se.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Dl(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Ye(t), null;
          }
          e = H.current, Du(t) ? Sf(t) : (e = Jh(a, l, n), t.stateNode = e, Dl(t));
        }
        return Ye(t), null;
      case 5:
        if (gl(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Dl(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Ye(t), null;
          }
          if (u = H.current, Du(t))
            Sf(t);
          else {
            var c = _c(
              se.current
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
            u[Ke] = t, u[mt] = l;
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
            e: switch (Ct(u, a, l), a) {
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
            l && Dl(t);
          }
        }
        return Ye(t), Pr(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Dl(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = se.current, Du(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, a = Nt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
            e[Ke] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Bh(e.nodeValue, n)), e || ua(t, !0);
          } else
            e = _c(e).createTextNode(
              l
            ), e[Ke] = t, t.stateNode = e;
        }
        return Ye(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Du(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[Ke] = t;
            } else
              Wa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ye(t), e = !1;
          } else
            n = rr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (gn(t), t) : (gn(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Ye(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = Du(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[Ke] = t;
            } else
              Wa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ye(t), a = !1;
          } else
            a = rr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (gn(t), t) : (gn(t), null);
        }
        return gn(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, a = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (a = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== a && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), sc(t, t.updateQueue), Ye(t), null);
      case 4:
        return we(), e === null && _o(t.stateNode.containerInfo), Ye(t), null;
      case 10:
        return Rl(t.type), Ye(t), null;
      case 19:
        if (z(tt), l = t.memoizedState, l === null) return Ye(t), null;
        if (a = (t.flags & 128) !== 0, u = l.rendering, u === null)
          if (a) Gi(l, !1);
          else {
            if (et !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Js(e), u !== null) {
                  for (t.flags |= 128, Gi(l, !1), e = u.updateQueue, t.updateQueue = e, sc(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    yf(n, e), n = n.sibling;
                  return L(
                    tt,
                    tt.current & 1 | 2
                  ), Se && xl(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Qe() > dc && (t.flags |= 128, a = !0, Gi(l, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Js(u), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, sc(t, e), Gi(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !Se)
                return Ye(t), null;
            } else
              2 * Qe() - l.renderingStartTime > dc && n !== 536870912 && (t.flags |= 128, a = !0, Gi(l, !1), t.lanes = 4194304);
          l.isBackwards ? (u.sibling = t.child, t.child = u) : (e = l.last, e !== null ? e.sibling = u : t.child = u, l.last = u);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Qe(), e.sibling = null, n = tt.current, L(
          tt,
          a ? n & 1 | 2 : n & 1
        ), Se && xl(t, l.treeForkCount), e) : (Ye(t), null);
      case 22:
      case 23:
        return gn(t), _r(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ye(t), n = t.updateQueue, n !== null && sc(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && z(eu), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Rl(ut), Ye(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function gy(e, t) {
    switch (sr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Rl(ut), we(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return gl(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (gn(t), t.alternate === null)
            throw Error(r(340));
          Wa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (gn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          Wa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return z(tt), null;
      case 4:
        return we(), null;
      case 10:
        return Rl(t.type), null;
      case 22:
      case 23:
        return gn(t), _r(), e !== null && z(eu), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Rl(ut), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function kd(e, t) {
    switch (sr(t), t.tag) {
      case 3:
        Rl(ut), we();
        break;
      case 26:
      case 27:
      case 5:
        gl(t);
        break;
      case 4:
        we();
        break;
      case 31:
        t.memoizedState !== null && gn(t);
        break;
      case 13:
        gn(t);
        break;
      case 19:
        z(tt);
        break;
      case 10:
        Rl(t.type);
        break;
      case 22:
      case 23:
        gn(t), _r(), e !== null && z(eu);
        break;
      case 24:
        Rl(ut);
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
      Oe(t, t.return, d);
    }
  }
  function da(e, t, n) {
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
                Oe(
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
      Oe(t, t.return, x);
    }
  }
  function Xd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Df(t, n);
      } catch (l) {
        Oe(e, e.return, l);
      }
    }
  }
  function Vd(e, t, n) {
    n.props = uu(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      Oe(e, t, l);
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
      Oe(e, t, a);
    }
  }
  function dl(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (a) {
          Oe(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (a) {
          Oe(e, t, a);
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
      Oe(e, e.return, a);
    }
  }
  function eo(e, t, n) {
    try {
      var l = e.stateNode;
      Ly(l, e.type, n, t), l[mt] = t;
    } catch (a) {
      Oe(e, e.return, a);
    }
  }
  function Zd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ba(e.type) || e.tag === 4;
  }
  function to(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Zd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ba(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function no(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = kn));
    else if (l !== 4 && (l === 27 && ba(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (no(e, t, n), e = e.sibling; e !== null; )
        no(e, t, n), e = e.sibling;
  }
  function cc(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && ba(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (cc(e, t, n), e = e.sibling; e !== null; )
        cc(e, t, n), e = e.sibling;
  }
  function Kd(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      Ct(t, l, n), t[Ke] = e, t[mt] = n;
    } catch (u) {
      Oe(e, e.return, u);
    }
  }
  var Ul = !1, ct = !1, lo = !1, Jd = typeof WeakSet == "function" ? WeakSet : Set, bt = null;
  function py(e, t) {
    if (e = e.containerInfo, No = Rc, e = ws(e), Cu(e)) {
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
            var c = 0, d = -1, y = -1, _ = 0, x = 0, D = e, A = null;
            t: for (; ; ) {
              for (var N; D !== n || a !== 0 && D.nodeType !== 3 || (d = c + a), D !== u || l !== 0 && D.nodeType !== 3 || (y = c + l), D.nodeType === 3 && (c += D.nodeValue.length), (N = D.firstChild) !== null; )
                A = D, D = N;
              for (; ; ) {
                if (D === e) break t;
                if (A === n && ++_ === a && (d = c), A === u && ++x === l && (y = c), (N = D.nextSibling) !== null) break;
                D = A, A = D.parentNode;
              }
              D = N;
            }
            n = d === -1 || y === -1 ? null : { start: d, end: y };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Mo = { focusedElem: e, selectionRange: n }, Rc = !1, bt = t; bt !== null; )
      if (t = bt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, bt = e;
      else
        for (; bt !== null; ) {
          switch (t = bt, u = t.alternate, e = t.flags, t.tag) {
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
                  var k = uu(
                    n.type,
                    a
                  );
                  e = l.getSnapshotBeforeUpdate(
                    k,
                    u
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (I) {
                  Oe(
                    n,
                    n.return,
                    I
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
            e.return = t.return, bt = e;
            break;
          }
          bt = t.return;
        }
  }
  function Id(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        wl(e, n), l & 4 && Yi(5, n);
        break;
      case 1:
        if (wl(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (c) {
              Oe(n, n.return, c);
            }
          else {
            var a = uu(
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
              Oe(
                n,
                n.return,
                c
              );
            }
          }
        l & 64 && Xd(n), l & 512 && ki(n, n.return);
        break;
      case 3:
        if (wl(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
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
            Oe(n, n.return, c);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Kd(n);
      case 26:
      case 5:
        wl(e, n), t === null && l & 4 && Qd(n), l & 512 && ki(n, n.return);
        break;
      case 12:
        wl(e, n);
        break;
      case 31:
        wl(e, n), l & 4 && Fd(e, n);
        break;
      case 13:
        wl(e, n), l & 4 && Pd(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = My.bind(
          null,
          n
        ), Zy(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || Ul, !l) {
          t = t !== null && t.memoizedState !== null || ct, a = Ul;
          var u = ct;
          Ul = l, (ct = t) && !u ? Bl(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : wl(e, n), Ul = a, ct = u;
        }
        break;
      case 30:
        break;
      default:
        wl(e, n);
    }
  }
  function $d(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, $d(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Da(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Xe = null, ln = !1;
  function jl(e, t, n) {
    for (n = n.child; n !== null; )
      Wd(e, t, n), n = n.sibling;
  }
  function Wd(e, t, n) {
    if (Re && typeof Re.onCommitFiberUnmount == "function")
      try {
        Re.onCommitFiberUnmount(Ze, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        ct || dl(n, t), jl(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        ct || dl(n, t);
        var l = Xe, a = ln;
        ba(n.type) && (Xe = n.stateNode, ln = !1), jl(
          e,
          t,
          n
        ), Wi(n.stateNode), Xe = l, ln = a;
        break;
      case 5:
        ct || dl(n, t);
      case 6:
        if (l = Xe, a = ln, Xe = null, jl(
          e,
          t,
          n
        ), Xe = l, ln = a, Xe !== null)
          if (ln)
            try {
              (Xe.nodeType === 9 ? Xe.body : Xe.nodeName === "HTML" ? Xe.ownerDocument.body : Xe).removeChild(n.stateNode);
            } catch (u) {
              Oe(
                n,
                t,
                u
              );
            }
          else
            try {
              Xe.removeChild(n.stateNode);
            } catch (u) {
              Oe(
                n,
                t,
                u
              );
            }
        break;
      case 18:
        Xe !== null && (ln ? (e = Xe, Xh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), ei(e)) : Xh(Xe, n.stateNode));
        break;
      case 4:
        l = Xe, a = ln, Xe = n.stateNode.containerInfo, ln = !0, jl(
          e,
          t,
          n
        ), Xe = l, ln = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        da(2, n, t), ct || da(4, n, t), jl(
          e,
          t,
          n
        );
        break;
      case 1:
        ct || (dl(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && Vd(
          n,
          t,
          l
        )), jl(
          e,
          t,
          n
        );
        break;
      case 21:
        jl(
          e,
          t,
          n
        );
        break;
      case 22:
        ct = (l = ct) || n.memoizedState !== null, jl(
          e,
          t,
          n
        ), ct = l;
        break;
      default:
        jl(
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
        ei(e);
      } catch (n) {
        Oe(t, t.return, n);
      }
    }
  }
  function Pd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ei(e);
      } catch (n) {
        Oe(t, t.return, n);
      }
  }
  function vy(e) {
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
  function rc(e, t) {
    var n = vy(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var a = xy.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function an(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l], u = e, c = t, d = c;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (ba(d.type)) {
                Xe = d.stateNode, ln = !1;
                break e;
              }
              break;
            case 5:
              Xe = d.stateNode, ln = !1;
              break e;
            case 3:
            case 4:
              Xe = d.stateNode.containerInfo, ln = !0;
              break e;
          }
          d = d.return;
        }
        if (Xe === null) throw Error(r(160));
        Wd(u, c, a), Xe = null, ln = !1, u = a.alternate, u !== null && (u.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        eh(t, e), t = t.sibling;
  }
  var Kn = null;
  function eh(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        an(t, e), un(e), l & 4 && (da(3, e, e.return), Yi(3, e), da(5, e, e.return));
        break;
      case 1:
        an(t, e), un(e), l & 512 && (ct || n === null || dl(n, n.return)), l & 64 && Ul && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var a = Kn;
        if (an(t, e), un(e), l & 512 && (ct || n === null || dl(n, n.return)), l & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (l) {
                    case "title":
                      u = a.getElementsByTagName("title")[0], (!u || u[Hn] || u[Ke] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(l), a.head.insertBefore(
                        u,
                        a.querySelector("head > title")
                      )), Ct(u, l, n), u[Ke] = e, Je(u), l = u;
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
                      u = a.createElement(l), Ct(u, l, n), a.head.appendChild(u);
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
                      u = a.createElement(l), Ct(u, l, n), a.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, l));
                  }
                  u[Ke] = e, Je(u), l = u;
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
        an(t, e), un(e), l & 512 && (ct || n === null || dl(n, n.return)), n !== null && l & 4 && eo(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (an(t, e), un(e), l & 512 && (ct || n === null || dl(n, n.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            al(a, "");
          } catch (k) {
            Oe(e, e.return, k);
          }
        }
        l & 4 && e.stateNode != null && (a = e.memoizedProps, eo(
          e,
          a,
          n !== null ? n.memoizedProps : a
        )), l & 1024 && (lo = !0);
        break;
      case 6:
        if (an(t, e), un(e), l & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (k) {
            Oe(e, e.return, k);
          }
        }
        break;
      case 3:
        if (Nc = null, a = Kn, Kn = Ac(t.containerInfo), an(t, e), Kn = a, un(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            ei(t.containerInfo);
          } catch (k) {
            Oe(e, e.return, k);
          }
        lo && (lo = !1, th(e));
        break;
      case 4:
        l = Kn, Kn = Ac(
          e.stateNode.containerInfo
        ), an(t, e), un(e), Kn = l;
        break;
      case 12:
        an(t, e), un(e);
        break;
      case 31:
        an(t, e), un(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, rc(e, l)));
        break;
      case 13:
        an(t, e), un(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (fc = Qe()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, rc(e, l)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var y = n !== null && n.memoizedState !== null, _ = Ul, x = ct;
        if (Ul = _ || a, ct = x || y, an(t, e), ct = x, Ul = _, un(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || y || Ul || ct || iu(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                y = n = t;
                try {
                  if (u = y.stateNode, a)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    d = y.stateNode;
                    var D = y.memoizedProps.style, A = D != null && D.hasOwnProperty("display") ? D.display : null;
                    d.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim();
                  }
                } catch (k) {
                  Oe(y, y.return, k);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                y = t;
                try {
                  y.stateNode.nodeValue = a ? "" : y.memoizedProps;
                } catch (k) {
                  Oe(y, y.return, k);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                y = t;
                try {
                  var N = y.stateNode;
                  a ? Vh(N, !0) : Vh(y.stateNode, !1);
                } catch (k) {
                  Oe(y, y.return, k);
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
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, rc(e, n))));
        break;
      case 19:
        an(t, e), un(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, rc(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        an(t, e), un(e);
    }
  }
  function un(e) {
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
            cc(e, u, a);
            break;
          case 5:
            var c = n.stateNode;
            n.flags & 32 && (al(c, ""), n.flags &= -33);
            var d = to(e);
            cc(e, d, c);
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
        Oe(e, e.return, x);
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
  function wl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Id(e, t.alternate, t), t = t.sibling;
  }
  function iu(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          da(4, t, t.return), iu(t);
          break;
        case 1:
          dl(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Vd(
            t,
            t.return,
            n
          ), iu(t);
          break;
        case 27:
          Wi(t.stateNode);
        case 26:
        case 5:
          dl(t, t.return), iu(t);
          break;
        case 22:
          t.memoizedState === null && iu(t);
          break;
        case 30:
          iu(t);
          break;
        default:
          iu(t);
      }
      e = e.sibling;
    }
  }
  function Bl(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, a = e, u = t, c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Bl(
            a,
            u,
            n
          ), Yi(4, u);
          break;
        case 1:
          if (Bl(
            a,
            u,
            n
          ), l = u, a = l.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (_) {
              Oe(l, l.return, _);
            }
          if (l = u, a = l.updateQueue, a !== null) {
            var d = l.stateNode;
            try {
              var y = a.shared.hiddenCallbacks;
              if (y !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < y.length; a++)
                  zf(y[a], d);
            } catch (_) {
              Oe(l, l.return, _);
            }
          }
          n && c & 64 && Xd(u), ki(u, u.return);
          break;
        case 27:
          Kd(u);
        case 26:
        case 5:
          Bl(
            a,
            u,
            n
          ), n && l === null && c & 4 && Qd(u), ki(u, u.return);
          break;
        case 12:
          Bl(
            a,
            u,
            n
          );
          break;
        case 31:
          Bl(
            a,
            u,
            n
          ), n && c & 4 && Fd(a, u);
          break;
        case 13:
          Bl(
            a,
            u,
            n
          ), n && c & 4 && Pd(a, u);
          break;
        case 22:
          u.memoizedState === null && Bl(
            a,
            u,
            n
          ), ki(u, u.return);
          break;
        case 30:
          break;
        default:
          Bl(
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
  function Jn(e, t, n, l) {
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
        Jn(
          e,
          t,
          n,
          l
        ), a & 2048 && Yi(9, t);
        break;
      case 1:
        Jn(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        Jn(
          e,
          t,
          n,
          l
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ci(e)));
        break;
      case 12:
        if (a & 2048) {
          Jn(
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
            Oe(t, t.return, y);
          }
        } else
          Jn(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        Jn(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        Jn(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, c = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Jn(
          e,
          t,
          n,
          l
        ) : Xi(e, t) : u._visibility & 2 ? Jn(
          e,
          t,
          n,
          l
        ) : (u._visibility |= 2, Xu(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && ao(c, t);
        break;
      case 24:
        Jn(
          e,
          t,
          n,
          l
        ), a & 2048 && uo(t.alternate, t);
        break;
      default:
        Jn(
          e,
          t,
          n,
          l
        );
    }
  }
  function Xu(e, t, n, l, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, c = t, d = n, y = l, _ = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Xu(
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
          c.memoizedState !== null ? x._visibility & 2 ? Xu(
            u,
            c,
            d,
            y,
            a
          ) : Xi(
            u,
            c
          ) : (x._visibility |= 2, Xu(
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
          Xu(
            u,
            c,
            d,
            y,
            a
          ), a && _ & 2048 && uo(c.alternate, c);
          break;
        default:
          Xu(
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
  function Vu(e, t, n) {
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
        Vu(
          e,
          t,
          n
        ), e.flags & Vi && e.memoizedState !== null && ag(
          n,
          Kn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Vu(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var l = Kn;
        Kn = Ac(e.stateNode.containerInfo), Vu(
          e,
          t,
          n
        ), Kn = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Vi, Vi = 16777216, Vu(
          e,
          t,
          n
        ), Vi = l) : Vu(
          e,
          t,
          n
        ));
        break;
      default:
        Vu(
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
          bt = l, ih(
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
        Qi(e), e.flags & 2048 && da(9, e, e.return);
        break;
      case 3:
        Qi(e);
        break;
      case 12:
        Qi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, oc(e)) : Qi(e);
        break;
      default:
        Qi(e);
    }
  }
  function oc(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          bt = l, ih(
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
          da(8, t, t.return), oc(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, oc(t));
          break;
        default:
          oc(t);
      }
      e = e.sibling;
    }
  }
  function ih(e, t) {
    for (; bt !== null; ) {
      var n = bt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          da(8, n, t);
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
      if (l = n.child, l !== null) l.return = n, bt = l;
      else
        e: for (n = e; bt !== null; ) {
          l = bt;
          var a = l.sibling, u = l.return;
          if ($d(l), l === n) {
            bt = null;
            break e;
          }
          if (a !== null) {
            a.return = u, bt = a;
            break e;
          }
          bt = u;
        }
    }
  }
  var by = {
    getCacheForType: function(e) {
      var t = Mt(ut), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return Mt(ut).controller.signal;
    }
  }, Sy = typeof WeakMap == "function" ? WeakMap : Map, xe = 0, je = null, de = null, ve = 0, qe = 0, pn = null, ha = !1, Qu = !1, io = !1, Ll = 0, et = 0, ma = 0, su = 0, so = 0, vn = 0, Zu = 0, Zi = null, sn = null, co = !1, fc = 0, sh = 0, dc = 1 / 0, hc = null, ya = null, yt = 0, ga = null, Ku = null, Hl = 0, ro = 0, oo = null, ch = null, Ki = 0, fo = null;
  function bn() {
    return (xe & 2) !== 0 && ve !== 0 ? ve & -ve : M.T !== null ? vo() : pl();
  }
  function rh() {
    if (vn === 0)
      if ((ve & 536870912) === 0 || Se) {
        var e = Oa;
        Oa <<= 1, (Oa & 3932160) === 0 && (Oa = 262144), vn = e;
      } else vn = 536870912;
    return e = yn.current, e !== null && (e.flags |= 32), vn;
  }
  function cn(e, t, n) {
    (e === je && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null) && (Ju(e, 0), pa(
      e,
      ve,
      vn,
      !1
    )), _n(e, n), ((xe & 2) === 0 || e !== je) && (e === je && ((xe & 2) === 0 && (su |= n), et === 4 && pa(
      e,
      ve,
      vn,
      !1
    )), hl(e));
  }
  function oh(e, t, n) {
    if ((xe & 6) !== 0) throw Error(r(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Xl(e, t), a = l ? Ay(e, t) : mo(e, t, !0), u = l;
    do {
      if (a === 0) {
        Qu && !l && pa(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !Ey(n)) {
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
              if (y && (Ju(d, c).flags |= 256), c = mo(
                d,
                c,
                !1
              ), c !== 2) {
                if (io && !y) {
                  d.errorRecoveryDisabledLanes |= u, su |= u, a = 4;
                  break e;
                }
                u = sn, sn = a, u !== null && (sn === null ? sn = u : sn.push.apply(
                  sn,
                  u
                ));
              }
              a = c;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          Ju(e, 0), pa(e, t, 0, !0);
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
              pa(
                l,
                t,
                vn,
                !ha
              );
              break e;
            case 2:
              sn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (a = fc + 300 - Qe(), 10 < a)) {
            if (pa(
              l,
              t,
              vn,
              !ha
            ), Kt(l, 0, !0) !== 0) break e;
            Hl = t, l.timeoutHandle = Yh(
              fh.bind(
                null,
                l,
                n,
                sn,
                hc,
                co,
                t,
                vn,
                su,
                Zu,
                ha,
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
            sn,
            hc,
            co,
            t,
            vn,
            su,
            Zu,
            ha,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    hl(e);
  }
  function fh(e, t, n, l, a, u, c, d, y, _, x, D, A, N) {
    if (e.timeoutHandle = -1, D = t.subtreeFlags, D & 8192 || (D & 16785408) === 16785408) {
      D = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: kn
      }, lh(
        t,
        u,
        D
      );
      var k = (u & 62914560) === u ? fc - Qe() : (u & 4194048) === u ? sh - Qe() : 0;
      if (k = ug(
        D,
        k
      ), k !== null) {
        Hl = u, e.cancelPendingCommit = k(
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
            D,
            null,
            A,
            N
          )
        ), pa(e, u, c, !_);
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
  function Ey(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var a = n[l], u = a.getSnapshot;
          a = a.value;
          try {
            if (!St(u(), a)) return !1;
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
  function pa(e, t, n, l) {
    t &= ~so, t &= ~su, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var u = 31 - Ot(a), c = 1 << u;
      l[u] = -1, a &= ~c;
    }
    n !== 0 && fs(e, n, t);
  }
  function mc() {
    return (xe & 6) === 0 ? (Ji(0), !1) : !0;
  }
  function ho() {
    if (de !== null) {
      if (qe === 0)
        var e = de.return;
      else
        e = de, Cl = Fa = null, Cr(e), Lu = null, qi = 0, e = de;
      for (; e !== null; )
        kd(e.alternate, e), e = e.return;
      de = null;
    }
  }
  function Ju(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, Yy(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Hl = 0, ho(), je = e, de = n = Ml(e.current, null), ve = t, qe = 0, pn = null, ha = !1, Qu = Xl(e, t), io = !1, Zu = vn = so = su = ma = et = 0, sn = Zi = null, co = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - Ot(l), u = 1 << a;
        t |= e[a], l &= ~u;
      }
    return Ll = t, Tt(), n;
  }
  function dh(e, t) {
    le = null, M.H = Li, t === Bu || t === Xs ? (t = Cf(), qe = 3) : t === gr ? (t = Cf(), qe = 4) : qe = t === Vr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, pn = t, de === null && (et = 1, lc(
      e,
      Cn(t, e.current)
    ));
  }
  function hh() {
    var e = yn.current;
    return e === null ? !0 : (ve & 4194048) === ve ? zn === null : (ve & 62914560) === ve || (ve & 536870912) !== 0 ? e === zn : !1;
  }
  function mh() {
    var e = M.H;
    return M.H = Li, e === null ? Li : e;
  }
  function yh() {
    var e = M.A;
    return M.A = by, e;
  }
  function yc() {
    et = 4, ha || (ve & 4194048) !== ve && yn.current !== null || (Qu = !0), (ma & 134217727) === 0 && (su & 134217727) === 0 || je === null || pa(
      je,
      ve,
      vn,
      !1
    );
  }
  function mo(e, t, n) {
    var l = xe;
    xe |= 2;
    var a = mh(), u = yh();
    (je !== e || ve !== t) && (hc = null, Ju(e, t)), t = !1;
    var c = et;
    e: do
      try {
        if (qe !== 0 && de !== null) {
          var d = de, y = pn;
          switch (qe) {
            case 8:
              ho(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              yn.current === null && (t = !0);
              var _ = qe;
              if (qe = 0, pn = null, Iu(e, d, y, _), n && Qu) {
                c = 0;
                break e;
              }
              break;
            default:
              _ = qe, qe = 0, pn = null, Iu(e, d, y, _);
          }
        }
        _y(), c = et;
        break;
      } catch (x) {
        dh(e, x);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Cl = Fa = null, xe = l, M.H = a, M.A = u, de === null && (je = null, ve = 0, Tt()), c;
  }
  function _y() {
    for (; de !== null; ) gh(de);
  }
  function Ay(e, t) {
    var n = xe;
    xe |= 2;
    var l = mh(), a = yh();
    je !== e || ve !== t ? (hc = null, dc = Qe() + 500, Ju(e, t)) : Qu = Xl(
      e,
      t
    );
    e: do
      try {
        if (qe !== 0 && de !== null) {
          t = de;
          var u = pn;
          t: switch (qe) {
            case 1:
              qe = 0, pn = null, Iu(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Mf(u)) {
                qe = 0, pn = null, ph(t);
                break;
              }
              t = function() {
                qe !== 2 && qe !== 9 || je !== e || (qe = 7), hl(e);
              }, u.then(t, t);
              break e;
            case 3:
              qe = 7;
              break e;
            case 4:
              qe = 5;
              break e;
            case 7:
              Mf(u) ? (qe = 0, pn = null, ph(t)) : (qe = 0, pn = null, Iu(e, t, u, 7));
              break;
            case 5:
              var c = null;
              switch (de.tag) {
                case 26:
                  c = de.memoizedState;
                case 5:
                case 27:
                  var d = de;
                  if (c ? nm(c) : d.stateNode.complete) {
                    qe = 0, pn = null;
                    var y = d.sibling;
                    if (y !== null) de = y;
                    else {
                      var _ = d.return;
                      _ !== null ? (de = _, gc(_)) : de = null;
                    }
                    break t;
                  }
              }
              qe = 0, pn = null, Iu(e, t, u, 5);
              break;
            case 6:
              qe = 0, pn = null, Iu(e, t, u, 6);
              break;
            case 8:
              ho(), et = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        Ty();
        break;
      } catch (x) {
        dh(e, x);
      }
    while (!0);
    return Cl = Fa = null, M.H = l, M.A = a, xe = n, de !== null ? 0 : (je = null, ve = 0, Tt(), et);
  }
  function Ty() {
    for (; de !== null && !Ra(); )
      gh(de);
  }
  function gh(e) {
    var t = Gd(e.alternate, e, Ll);
    e.memoizedProps = e.pendingProps, t === null ? gc(e) : de = t;
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
          ve
        );
        break;
      case 11:
        t = Ud(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ve
        );
        break;
      case 5:
        Cr(t);
      default:
        kd(n, t), t = de = yf(t, Ll), t = Gd(n, t, Ll);
    }
    e.memoizedProps = e.pendingProps, t === null ? gc(e) : de = t;
  }
  function Iu(e, t, n, l) {
    Cl = Fa = null, Cr(t), Lu = null, qi = 0;
    var a = t.return;
    try {
      if (dy(
        e,
        a,
        t,
        n,
        ve
      )) {
        et = 1, lc(
          e,
          Cn(n, e.current)
        ), de = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw de = a, u;
      et = 1, lc(
        e,
        Cn(n, e.current)
      ), de = null;
      return;
    }
    t.flags & 32768 ? (Se || l === 1 ? e = !0 : Qu || (ve & 536870912) !== 0 ? e = !1 : (ha = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = yn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), vh(t, e)) : gc(t);
  }
  function gc(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        vh(
          t,
          ha
        );
        return;
      }
      e = t.return;
      var n = yy(
        t.alternate,
        t,
        Ll
      );
      if (n !== null) {
        de = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        de = t;
        return;
      }
      de = t = e;
    } while (t !== null);
    et === 0 && (et = 5);
  }
  function vh(e, t) {
    do {
      var n = gy(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, de = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        de = e;
        return;
      }
      de = e = n;
    } while (e !== null);
    et = 6, de = null;
  }
  function bh(e, t, n, l, a, u, c, d, y) {
    e.cancelPendingCommit = null;
    do
      pc();
    while (yt !== 0);
    if ((xe & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (u = t.lanes | t.childLanes, u |= Ie, Vl(
        e,
        n,
        u,
        c,
        d,
        y
      ), e === je && (de = je = null, ve = 0), Ku = t, ga = e, Hl = n, ro = u, oo = a, ch = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Cy(qt, function() {
        return Th(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null, a = B.p, B.p = 2, c = xe, xe |= 4;
        try {
          py(e, t, n);
        } finally {
          xe = c, B.p = a, M.T = l;
        }
      }
      yt = 1, Sh(), Eh(), _h();
    }
  }
  function Sh() {
    if (yt === 1) {
      yt = 0;
      var e = ga, t = Ku, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = M.T, M.T = null;
        var l = B.p;
        B.p = 2;
        var a = xe;
        xe |= 4;
        try {
          eh(t, e);
          var u = Mo, c = ws(e.containerInfo), d = u.focusedElem, y = u.selectionRange;
          if (c !== d && d && d.ownerDocument && js(
            d.ownerDocument.documentElement,
            d
          )) {
            if (y !== null && Cu(d)) {
              var _ = y.start, x = y.end;
              if (x === void 0 && (x = _), "selectionStart" in d)
                d.selectionStart = _, d.selectionEnd = Math.min(
                  x,
                  d.value.length
                );
              else {
                var D = d.ownerDocument || document, A = D && D.defaultView || window;
                if (A.getSelection) {
                  var N = A.getSelection(), k = d.textContent.length, I = Math.min(y.start, k), Ue = y.end === void 0 ? I : Math.min(y.end, k);
                  !N.extend && I > Ue && (c = Ue, Ue = I, I = c);
                  var b = Ti(
                    d,
                    I
                  ), v = Ti(
                    d,
                    Ue
                  );
                  if (b && v && (N.rangeCount !== 1 || N.anchorNode !== b.node || N.anchorOffset !== b.offset || N.focusNode !== v.node || N.focusOffset !== v.offset)) {
                    var E = D.createRange();
                    E.setStart(b.node, b.offset), N.removeAllRanges(), I > Ue ? (N.addRange(E), N.extend(v.node, v.offset)) : (E.setEnd(v.node, v.offset), N.addRange(E));
                  }
                }
              }
            }
            for (D = [], N = d; N = N.parentNode; )
              N.nodeType === 1 && D.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof d.focus == "function" && d.focus(), d = 0; d < D.length; d++) {
              var C = D[d];
              C.element.scrollLeft = C.left, C.element.scrollTop = C.top;
            }
          }
          Rc = !!No, Mo = No = null;
        } finally {
          xe = a, B.p = l, M.T = n;
        }
      }
      e.current = t, yt = 2;
    }
  }
  function Eh() {
    if (yt === 2) {
      yt = 0;
      var e = ga, t = Ku, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = M.T, M.T = null;
        var l = B.p;
        B.p = 2;
        var a = xe;
        xe |= 4;
        try {
          Id(e, t.alternate, t);
        } finally {
          xe = a, B.p = l, M.T = n;
        }
      }
      yt = 3;
    }
  }
  function _h() {
    if (yt === 4 || yt === 3) {
      yt = 0, kl();
      var e = ga, t = Ku, n = Hl, l = ch;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? yt = 5 : (yt = 0, Ku = ga = null, Ah(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (ya = null), du(n), t = t.stateNode, Re && typeof Re.onCommitFiberRoot == "function")
        try {
          Re.onCommitFiberRoot(
            Ze,
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
      (Hl & 3) !== 0 && pc(), hl(e), a = e.pendingLanes, (n & 261930) !== 0 && (a & 42) !== 0 ? e === fo ? Ki++ : (Ki = 0, fo = e) : Ki = 0, Ji(0);
    }
  }
  function Ah(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ci(t)));
  }
  function pc() {
    return Sh(), Eh(), _h(), Th();
  }
  function Th() {
    if (yt !== 5) return !1;
    var e = ga, t = ro;
    ro = 0;
    var n = du(Hl), l = M.T, a = B.p;
    try {
      B.p = 32 > n ? 32 : n, M.T = null, n = oo, oo = null;
      var u = ga, c = Hl;
      if (yt = 0, Ku = ga = null, Hl = 0, (xe & 6) !== 0) throw Error(r(331));
      var d = xe;
      if (xe |= 4, uh(u.current), nh(
        u,
        u.current,
        c,
        n
      ), xe = d, Ji(0, !1), Re && typeof Re.onPostCommitFiberRoot == "function")
        try {
          Re.onPostCommitFiberRoot(Ze, u);
        } catch {
        }
      return !0;
    } finally {
      B.p = a, M.T = l, Ah(e, t);
    }
  }
  function Nh(e, t, n) {
    t = Cn(n, t), t = Xr(e.stateNode, t, 2), e = ra(e, t, 2), e !== null && (_n(e, 2), hl(e));
  }
  function Oe(e, t, n) {
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ya === null || !ya.has(l))) {
            e = Cn(n, e), n = Md(2), l = ra(t, n, 2), l !== null && (xd(
              n,
              l,
              t,
              e
            ), _n(l, 2), hl(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function yo(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Sy();
      var a = /* @__PURE__ */ new Set();
      l.set(t, a);
    } else
      a = l.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(t, a));
    a.has(n) || (io = !0, a.add(n), e = Ny.bind(null, e, t, n), t.then(e, e));
  }
  function Ny(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, je === e && (ve & n) === n && (et === 4 || et === 3 && (ve & 62914560) === ve && 300 > Qe() - fc ? (xe & 2) === 0 && Ju(e, 0) : so |= n, Zu === ve && (Zu = 0)), hl(e);
  }
  function Mh(e, t) {
    t === 0 && (t = F()), e = rl(e, t), e !== null && (_n(e, t), hl(e));
  }
  function My(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Mh(e, n);
  }
  function xy(e, t) {
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
  function Cy(e, t) {
    return si(e, t);
  }
  var vc = null, $u = null, go = !1, bc = !1, po = !1, va = 0;
  function hl(e) {
    e !== $u && e.next === null && ($u === null ? vc = $u = e : $u = $u.next = e), bc = !0, go || (go = !0, qy());
  }
  function Ji(e, t) {
    if (!po && bc) {
      po = !0;
      do
        for (var n = !1, l = vc; l !== null; ) {
          if (e !== 0) {
            var a = l.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var c = l.suspendedLanes, d = l.pingedLanes;
              u = (1 << 31 - Ot(42 | e) + 1) - 1, u &= a & ~(c & ~d), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, qh(l, u));
          } else
            u = ve, u = Kt(
              l,
              l === je ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || Xl(l, u) || (n = !0, qh(l, u));
          l = l.next;
        }
      while (n);
      po = !1;
    }
  }
  function Ry() {
    xh();
  }
  function xh() {
    bc = go = !1;
    var e = 0;
    va !== 0 && Gy() && (e = va);
    for (var t = Qe(), n = null, l = vc; l !== null; ) {
      var a = l.next, u = Ch(l, t);
      u === 0 ? (l.next = null, n === null ? vc = a : n.next = a, a === null && ($u = n)) : (n = l, (e !== 0 || (u & 3) !== 0) && (bc = !0)), l = a;
    }
    yt !== 0 && yt !== 5 || Ji(e), va !== 0 && (va = 0);
  }
  function Ch(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - Ot(u), d = 1 << c, y = a[c];
      y === -1 ? ((d & n) === 0 || (d & l) !== 0) && (a[c] = os(d, t)) : y <= t && (e.expiredLanes |= d), u &= ~d;
    }
    if (t = je, n = ve, n = Kt(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Ca(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Xl(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && Ca(l), du(n)) {
        case 2:
        case 8:
          n = jt;
          break;
        case 32:
          n = qt;
          break;
        case 268435456:
          n = ci;
          break;
        default:
          n = qt;
      }
      return l = Rh.bind(null, e), n = si(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && Ca(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Rh(e, t) {
    if (yt !== 0 && yt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (pc() && e.callbackNode !== n)
      return null;
    var l = ve;
    return l = Kt(
      e,
      e === je ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (oh(e, l, t), Ch(e, Qe()), e.callbackNode != null && e.callbackNode === n ? Rh.bind(null, e) : null);
  }
  function qh(e, t) {
    if (pc()) return null;
    oh(e, t, !0);
  }
  function qy() {
    ky(function() {
      (xe & 6) !== 0 ? si(
        Zt,
        Ry
      ) : xh();
    });
  }
  function vo() {
    if (va === 0) {
      var e = ju;
      e === 0 && (e = qa, qa <<= 1, (qa & 261888) === 0 && (qa = 256)), va = e;
    }
    return va;
  }
  function Oh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : at("" + e);
  }
  function zh(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Oy(e, t, n, l, a) {
    if (t === "submit" && n && n.stateNode === a) {
      var u = Oh(
        (a[mt] || null).action
      ), c = l.submitter;
      c && (t = (t = c[mt] || null) ? Oh(t.formAction) : c.getAttribute("formAction"), t !== null && (u = t, c = null));
      var d = new Ga(
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
                if (va !== 0) {
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
  for (var bo = 0; bo < Ru.length; bo++) {
    var So = Ru[bo], zy = So.toLowerCase(), Dy = So[0].toUpperCase() + So.slice(1);
    tn(
      zy,
      "on" + Dy
    );
  }
  tn(ne, "onAnimationEnd"), tn(ke, "onAnimationIteration"), tn(Et, "onAnimationStart"), tn("dblclick", "onDoubleClick"), tn("focusin", "onFocus"), tn("focusout", "onBlur"), tn(_t, "onTransitionRun"), tn(At, "onTransitionStart"), tn(na, "onTransitionCancel"), tn(Nl, "onTransitionEnd"), $t("onMouseEnter", ["mouseout", "mouseover"]), $t("onMouseLeave", ["mouseout", "mouseover"]), $t("onPointerEnter", ["pointerout", "pointerover"]), $t("onPointerLeave", ["pointerout", "pointerover"]), It(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), It(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), It("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), It(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), It(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), It(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Uy = new Set(
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
              Ja(x);
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
              Ja(x);
            }
            a.currentTarget = null, u = y;
          }
      }
    }
  }
  function he(e, t) {
    var n = t[Fn];
    n === void 0 && (n = t[Fn] = /* @__PURE__ */ new Set());
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
  var Sc = "_reactListening" + Math.random().toString(36).slice(2);
  function _o(e) {
    if (!e[Sc]) {
      e[Sc] = !0, lt.forEach(function(n) {
        n !== "selectionchange" && (Uy.has(n) || Eo(n, !1, e), Eo(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Sc] || (t[Sc] = !0, Eo("selectionchange", !1, t));
    }
  }
  function Uh(e, t, n, l) {
    switch (rm(t)) {
      case 2:
        var a = cg;
        break;
      case 8:
        a = rg;
        break;
      default:
        a = Bo;
    }
    n = a.bind(
      null,
      t,
      n,
      e
    ), a = void 0, !gi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(t, n, {
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
            if (c = An(d), c === null) return;
            if (y = c.tag, y === 5 || y === 6 || y === 26 || y === 27) {
              l = u = c;
              continue e;
            }
            d = d.parentNode;
          }
        }
        l = l.return;
      }
    yi(function() {
      var _ = u, x = mi(n), D = [];
      e: {
        var A = Zn.get(e);
        if (A !== void 0) {
          var N = Ga, k = e;
          switch (e) {
            case "keypress":
              if (vu(n) === 0) break e;
            case "keydown":
            case "keyup":
              N = As;
              break;
            case "focusin":
              k = "focus", N = cl;
              break;
            case "focusout":
              k = "blur", N = cl;
              break;
            case "beforeblur":
            case "afterblur":
              N = cl;
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
              N = _l;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = gs;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = Tu;
              break;
            case ne:
            case ke:
            case Et:
              N = _u;
              break;
            case Nl:
              N = $c;
              break;
            case "scroll":
            case "scrollend":
              N = Su;
              break;
            case "wheel":
              N = Fc;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = Ya;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = kt;
              break;
            case "toggle":
            case "beforetoggle":
              N = Qn;
          }
          var I = (t & 4) !== 0, Ue = !I && (e === "scroll" || e === "scrollend"), b = I ? A !== null ? A + "Capture" : null : A;
          I = [];
          for (var v = _, E; v !== null; ) {
            var C = v;
            if (E = C.stateNode, C = C.tag, C !== 5 && C !== 26 && C !== 27 || E === null || b === null || (C = La(v, b), C != null && I.push(
              $i(v, C, E)
            )), Ue) break;
            v = v.return;
          }
          0 < I.length && (A = new N(
            A,
            k,
            null,
            n,
            x
          ), D.push({ event: A, listeners: I }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (A = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", A && n !== wa && (k = n.relatedTarget || n.fromElement) && (An(k) || k[dn]))
            break e;
          if ((N || A) && (A = x.window === x ? x : (A = x.ownerDocument) ? A.defaultView || A.parentWindow : window, N ? (k = n.relatedTarget || n.toElement, N = _, k = k ? An(k) : null, k !== null && (Ue = q(k), I = k.tag, k !== Ue || I !== 5 && I !== 27 && I !== 6) && (k = null)) : (N = null, k = _), N !== k)) {
            if (I = _l, C = "onMouseLeave", b = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (I = kt, C = "onPointerLeave", b = "onPointerEnter", v = "pointer"), Ue = N == null ? A : Pn(N), E = k == null ? A : Pn(k), A = new I(
              C,
              v + "leave",
              N,
              n,
              x
            ), A.target = Ue, A.relatedTarget = E, C = null, An(x) === _ && (I = new I(
              b,
              v + "enter",
              k,
              n,
              x
            ), I.target = E, I.relatedTarget = Ue, C = I), Ue = C, N && k)
              t: {
                for (I = jy, b = N, v = k, E = 0, C = b; C; C = I(C))
                  E++;
                C = 0;
                for (var K = v; K; K = I(K))
                  C++;
                for (; 0 < E - C; )
                  b = I(b), E--;
                for (; 0 < C - E; )
                  v = I(v), C--;
                for (; E--; ) {
                  if (b === v || v !== null && b === v.alternate) {
                    I = b;
                    break t;
                  }
                  b = I(b), v = I(v);
                }
                I = null;
              }
            else I = null;
            N !== null && jh(
              D,
              A,
              N,
              I,
              !1
            ), k !== null && Ue !== null && jh(
              D,
              Ue,
              k,
              I,
              !0
            );
          }
        }
        e: {
          if (A = _ ? Pn(_) : window, N = A.nodeName && A.nodeName.toLowerCase(), N === "select" || N === "input" && A.type === "file")
            var Ne = qs;
          else if (Si(A))
            if (Os)
              Ne = Us;
            else {
              Ne = Qa;
              var Q = ea;
            }
          else
            N = A.nodeName, !N || N.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? _ && ul(_.elementType) && (Ne = qs) : Ne = Ds;
          if (Ne && (Ne = Ne(e, _))) {
            Rs(
              D,
              Ne,
              n,
              x
            );
            break e;
          }
          Q && Q(e, A, _), e === "focusout" && _ && A.type === "number" && _.memoizedProps.value != null && Nn(A, "number", A.value);
        }
        switch (Q = _ ? Pn(_) : window, e) {
          case "focusin":
            (Si(Q) || Q.contentEditable === "true") && (ta = Q, Ni = _, f = null);
            break;
          case "focusout":
            f = Ni = ta = null;
            break;
          case "mousedown":
            h = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            h = !1, T(D, n, x);
            break;
          case "selectionchange":
            if (nr) break;
          case "keydown":
          case "keyup":
            T(D, n, x);
        }
        var ue;
        if (bi)
          e: {
            switch (e) {
              case "compositionstart":
                var be = "onCompositionStart";
                break e;
              case "compositionend":
                be = "onCompositionEnd";
                break e;
              case "compositionupdate":
                be = "onCompositionUpdate";
                break e;
            }
            be = void 0;
          }
        else
          Il ? Cs(e, n) && (be = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (be = "onCompositionStart");
        be && (Ns && n.locale !== "ko" && (Il || be !== "onCompositionStart" ? be === "onCompositionEnd" && Il && (ue = hs()) : (sl = x, pi = "value" in sl ? sl.value : sl.textContent, Il = !0)), Q = Ec(_, be), 0 < Q.length && (be = new bs(
          be,
          e,
          null,
          n,
          x
        ), D.push({ event: be, listeners: Q }), ue ? be.data = ue : (ue = Nu(n), ue !== null && (be.data = ue)))), (ue = er ? $l(e, n) : Wl(e, n)) && (be = Ec(_, "onBeforeInput"), 0 < be.length && (Q = new bs(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          x
        ), D.push({
          event: Q,
          listeners: be
        }), Q.data = ue)), Oy(
          D,
          e,
          _,
          n,
          x
        );
      }
      Dh(D, t);
    });
  }
  function $i(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Ec(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var a = e, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = La(e, n), a != null && l.unshift(
        $i(e, a, u)
      ), a = La(e, t), a != null && l.push(
        $i(e, a, u)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function jy(e) {
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
      d !== 5 && d !== 26 && d !== 27 || _ === null || (y = _, a ? (_ = La(n, u), _ != null && c.unshift(
        $i(n, _, y)
      )) : a || (_ = La(n, u), _ != null && c.push(
        $i(n, _, y)
      ))), n = n.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var wy = /\r\n?/g, By = /\u0000|\uFFFD/g;
  function wh(e) {
    return (typeof e == "string" ? e : "" + e).replace(wy, `
`).replace(By, "");
  }
  function Bh(e, t) {
    return t = wh(t), wh(e) === t;
  }
  function De(e, t, n, l, a, u) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || al(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && al(e, "" + l);
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
        hi(e, l, u);
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
        l = at("" + l), e.setAttribute(n, l);
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
          typeof u == "function" && (n === "formAction" ? (t !== "input" && De(e, t, "name", a.name, a, null), De(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), De(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), De(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (De(e, t, "encType", a.encType, a, null), De(e, t, "method", a.method, a, null), De(e, t, "target", a.target, a, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = at("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = kn);
        break;
      case "onScroll":
        l != null && he("scroll", e);
        break;
      case "onScrollEnd":
        l != null && he("scrollend", e);
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
        n = at("" + l), e.setAttributeNS(
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
        he("beforetoggle", e), he("toggle", e), oi(e, "popover", l);
        break;
      case "xlinkActuate":
        nl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        nl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        nl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        nl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        nl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        nl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        nl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        nl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        nl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        oi(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = hf.get(n) || n, oi(e, n, l));
    }
  }
  function To(e, t, n, l, a, u) {
    switch (n) {
      case "style":
        hi(e, l, u);
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
        typeof l == "string" ? al(e, l) : (typeof l == "number" || typeof l == "bigint") && al(e, "" + l);
        break;
      case "onScroll":
        l != null && he("scroll", e);
        break;
      case "onScrollEnd":
        l != null && he("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = kn);
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
        if (!el.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), u = e[mt] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, a), typeof l == "function")) {
              typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, a);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : oi(e, n, l);
          }
    }
  }
  function Ct(e, t, n) {
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
        he("error", e), he("load", e);
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
                  De(e, t, u, c, n, null);
              }
          }
        a && De(e, t, "srcSet", n.srcSet, n, null), l && De(e, t, "src", n.src, n, null);
        return;
      case "input":
        he("invalid", e);
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
                  De(e, t, l, x, n, null);
              }
          }
        fi(
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
        he("invalid", e), l = c = u = null;
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
                De(e, t, a, d, n, null);
            }
        t = u, n = c, e.multiple = !!l, t != null ? Kl(e, !!l, t, !1) : n != null && Kl(e, !!l, n, !0);
        return;
      case "textarea":
        he("invalid", e), u = a = l = null;
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
                De(e, t, c, d, n, null);
            }
        ja(e, l, a, u);
        return;
      case "option":
        for (y in n)
          n.hasOwnProperty(y) && (l = n[y], l != null) && (y === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : De(e, t, y, l, n, null));
        return;
      case "dialog":
        he("beforetoggle", e), he("toggle", e), he("cancel", e), he("close", e);
        break;
      case "iframe":
      case "object":
        he("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ii.length; l++)
          he(Ii[l], e);
        break;
      case "image":
        he("error", e), he("load", e);
        break;
      case "details":
        he("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        he("error", e), he("load", e);
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
                De(e, t, _, l, n, null);
            }
        return;
      default:
        if (ul(t)) {
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
      n.hasOwnProperty(d) && (l = n[d], l != null && De(e, t, d, l, n, null));
  }
  function Ly(e, t, n, l) {
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
        for (N in n) {
          var D = n[N];
          if (n.hasOwnProperty(N) && D != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                y = D;
              default:
                l.hasOwnProperty(N) || De(e, t, N, null, l, D);
            }
        }
        for (var A in l) {
          var N = l[A];
          if (D = n[A], l.hasOwnProperty(A) && (N != null || D != null))
            switch (A) {
              case "type":
                u = N;
                break;
              case "name":
                a = N;
                break;
              case "checked":
                _ = N;
                break;
              case "defaultChecked":
                x = N;
                break;
              case "value":
                c = N;
                break;
              case "defaultValue":
                d = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(r(137, t));
                break;
              default:
                N !== D && De(
                  e,
                  t,
                  A,
                  N,
                  l,
                  D
                );
            }
        }
        Ht(
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
        N = c = d = A = null;
        for (u in n)
          if (y = n[u], n.hasOwnProperty(u) && y != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                N = y;
              default:
                l.hasOwnProperty(u) || De(
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
                u !== y && De(
                  e,
                  t,
                  a,
                  u,
                  l,
                  y
                );
            }
        t = d, n = c, l = N, A != null ? Kl(e, !!n, A, !1) : !!l != !!n && (t != null ? Kl(e, !!n, t, !0) : Kl(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        N = A = null;
        for (d in n)
          if (a = n[d], n.hasOwnProperty(d) && a != null && !l.hasOwnProperty(d))
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                De(e, t, d, null, l, a);
            }
        for (c in l)
          if (a = l[c], u = n[c], l.hasOwnProperty(c) && (a != null || u != null))
            switch (c) {
              case "value":
                A = a;
                break;
              case "defaultValue":
                N = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== u && De(e, t, c, a, l, u);
            }
        ll(e, A, N);
        return;
      case "option":
        for (var k in n)
          A = n[k], n.hasOwnProperty(k) && A != null && !l.hasOwnProperty(k) && (k === "selected" ? e.selected = !1 : De(
            e,
            t,
            k,
            null,
            l,
            A
          ));
        for (y in l)
          A = l[y], N = n[y], l.hasOwnProperty(y) && A !== N && (A != null || N != null) && (y === "selected" ? e.selected = A && typeof A != "function" && typeof A != "symbol" : De(
            e,
            t,
            y,
            A,
            l,
            N
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
        for (var I in n)
          A = n[I], n.hasOwnProperty(I) && A != null && !l.hasOwnProperty(I) && De(e, t, I, null, l, A);
        for (_ in l)
          if (A = l[_], N = n[_], l.hasOwnProperty(_) && A !== N && (A != null || N != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(r(137, t));
                break;
              default:
                De(
                  e,
                  t,
                  _,
                  A,
                  l,
                  N
                );
            }
        return;
      default:
        if (ul(t)) {
          for (var Ue in n)
            A = n[Ue], n.hasOwnProperty(Ue) && A !== void 0 && !l.hasOwnProperty(Ue) && To(
              e,
              t,
              Ue,
              void 0,
              l,
              A
            );
          for (x in l)
            A = l[x], N = n[x], !l.hasOwnProperty(x) || A === N || A === void 0 && N === void 0 || To(
              e,
              t,
              x,
              A,
              l,
              N
            );
          return;
        }
    }
    for (var b in n)
      A = n[b], n.hasOwnProperty(b) && A != null && !l.hasOwnProperty(b) && De(e, t, b, null, l, A);
    for (D in l)
      A = l[D], N = n[D], !l.hasOwnProperty(D) || A === N || A == null && N == null || De(e, t, D, A, l, N);
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
  function Hy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var a = n[l], u = a.transferSize, c = a.initiatorType, d = a.duration;
        if (u && d && Lh(c)) {
          for (c = 0, d = a.responseEnd, l += 1; l < n.length; l++) {
            var y = n[l], _ = y.startTime;
            if (_ > d) break;
            var x = y.transferSize, D = y.initiatorType;
            x && Lh(D) && (y = y.responseEnd, c += x * (y < d ? 1 : (d - _) / (y - _)));
          }
          if (--l, t += 8 * (u + c) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var No = null, Mo = null;
  function _c(e) {
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
  function Gy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Co ? !1 : (Co = e, !0) : (Co = null, !1);
  }
  var Yh = typeof setTimeout == "function" ? setTimeout : void 0, Yy = typeof clearTimeout == "function" ? clearTimeout : void 0, kh = typeof Promise == "function" ? Promise : void 0, ky = typeof queueMicrotask == "function" ? queueMicrotask : typeof kh < "u" ? function(e) {
    return kh.resolve(null).then(e).catch(Xy);
  } : Yh;
  function Xy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ba(e) {
    return e === "head";
  }
  function Xh(e, t) {
    var n = t, l = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8)
        if (n = a.data, n === "/$" || n === "/&") {
          if (l === 0) {
            e.removeChild(a), ei(t);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          Wi(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, Wi(n);
          for (var u = n.firstChild; u; ) {
            var c = u.nextSibling, d = u.nodeName;
            u[Hn] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = c;
          }
        } else
          n === "body" && Wi(e.ownerDocument.body);
      n = a;
    } while (n);
    ei(t);
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
          Ro(n), Da(n);
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
  function Vy(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var a = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Hn])
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
      if (e = Dn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Qy(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Qh(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function qo(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Oo(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Zy(e, t) {
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
  function Dn(e) {
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
            return Dn(e.nextSibling);
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
    switch (t = _c(n), e) {
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
  function Wi(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Da(e);
  }
  var Un = /* @__PURE__ */ new Map(), Ih = /* @__PURE__ */ new Set();
  function Ac(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Gl = B.d;
  B.d = {
    f: Ky,
    r: Jy,
    D: Iy,
    C: $y,
    L: Wy,
    m: Fy,
    X: eg,
    S: Py,
    M: tg
  };
  function Ky() {
    var e = Gl.f(), t = mc();
    return e || t;
  }
  function Jy(e) {
    var t = hn(e);
    t !== null && t.tag === 5 && t.type === "form" ? dd(t) : Gl.r(e);
  }
  var Wu = typeof document > "u" ? null : document;
  function $h(e, t, n) {
    var l = Wu;
    if (l && typeof t == "string" && t) {
      var a = Lt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Ih.has(a) || (Ih.add(a), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(a) === null && (t = l.createElement("link"), Ct(t, "link", e), Je(t), l.head.appendChild(t)));
    }
  }
  function Iy(e) {
    Gl.D(e), $h("dns-prefetch", e, null);
  }
  function $y(e, t) {
    Gl.C(e, t), $h("preconnect", e, t);
  }
  function Wy(e, t, n) {
    Gl.L(e, t, n);
    var l = Wu;
    if (l && e && t) {
      var a = 'link[rel="preload"][as="' + Lt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + Lt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + Lt(
        n.imageSizes
      ) + '"]')) : a += '[href="' + Lt(e) + '"]';
      var u = a;
      switch (t) {
        case "style":
          u = Fu(e);
          break;
        case "script":
          u = Pu(e);
      }
      Un.has(u) || (e = V(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), Un.set(u, e), l.querySelector(a) !== null || t === "style" && l.querySelector(Fi(u)) || t === "script" && l.querySelector(Pi(u)) || (t = l.createElement("link"), Ct(t, "link", e), Je(t), l.head.appendChild(t)));
    }
  }
  function Fy(e, t) {
    Gl.m(e, t);
    var n = Wu;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Lt(l) + '"][href="' + Lt(e) + '"]', u = a;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Pu(e);
      }
      if (!Un.has(u) && (e = V({ rel: "modulepreload", href: e }, t), Un.set(u, e), n.querySelector(a) === null)) {
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
        l = n.createElement("link"), Ct(l, "link", e), Je(l), n.head.appendChild(l);
      }
    }
  }
  function Py(e, t, n) {
    Gl.S(e, t, n);
    var l = Wu;
    if (l && e) {
      var a = Gn(l).hoistableStyles, u = Fu(e);
      t = t || "default";
      var c = a.get(u);
      if (!c) {
        var d = { loading: 0, preload: null };
        if (c = l.querySelector(
          Fi(u)
        ))
          d.loading = 5;
        else {
          e = V(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = Un.get(u)) && Do(e, n);
          var y = c = l.createElement("link");
          Je(y), Ct(y, "link", e), y._p = new Promise(function(_, x) {
            y.onload = _, y.onerror = x;
          }), y.addEventListener("load", function() {
            d.loading |= 1;
          }), y.addEventListener("error", function() {
            d.loading |= 2;
          }), d.loading |= 4, Tc(c, t, l);
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
  function eg(e, t) {
    Gl.X(e, t);
    var n = Wu;
    if (n && e) {
      var l = Gn(n).hoistableScripts, a = Pu(e), u = l.get(a);
      u || (u = n.querySelector(Pi(a)), u || (e = V({ src: e, async: !0 }, t), (t = Un.get(a)) && Uo(e, t), u = n.createElement("script"), Je(u), Ct(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(a, u));
    }
  }
  function tg(e, t) {
    Gl.M(e, t);
    var n = Wu;
    if (n && e) {
      var l = Gn(n).hoistableScripts, a = Pu(e), u = l.get(a);
      u || (u = n.querySelector(Pi(a)), u || (e = V({ src: e, async: !0, type: "module" }, t), (t = Un.get(a)) && Uo(e, t), u = n.createElement("script"), Je(u), Ct(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(a, u));
    }
  }
  function Wh(e, t, n, l) {
    var a = (a = se.current) ? Ac(a) : null;
    if (!a) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Fu(n.href), n = Gn(
          a
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Fu(n.href);
          var u = Gn(
            a
          ).hoistableStyles, c = u.get(e);
          if (c || (a = a.ownerDocument || a, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, c), (u = a.querySelector(
            Fi(e)
          )) && !u._p && (c.instance = u, c.state.loading = 5), Un.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Un.set(e, n), u || ng(
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
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Pu(n), n = Gn(
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
  function Fu(e) {
    return 'href="' + Lt(e) + '"';
  }
  function Fi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Fh(e) {
    return V({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function ng(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), Ct(t, "link", n), Je(t), e.head.appendChild(t));
  }
  function Pu(e) {
    return '[src="' + Lt(e) + '"]';
  }
  function Pi(e) {
    return "script[async]" + e;
  }
  function Ph(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Lt(n.href) + '"]'
          );
          if (l)
            return t.instance = l, Je(l), l;
          var a = V({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Je(l), Ct(l, "style", a), Tc(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          a = Fu(n.href);
          var u = e.querySelector(
            Fi(a)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Je(u), u;
          l = Fh(n), (a = Un.get(a)) && Do(l, a), u = (e.ownerDocument || e).createElement("link"), Je(u);
          var c = u;
          return c._p = new Promise(function(d, y) {
            c.onload = d, c.onerror = y;
          }), Ct(u, "link", l), t.state.loading |= 4, Tc(u, n.precedence, e), t.instance = u;
        case "script":
          return u = Pu(n.src), (a = e.querySelector(
            Pi(u)
          )) ? (t.instance = a, Je(a), a) : (l = n, (a = Un.get(u)) && (l = V({}, n), Uo(l, a)), e = e.ownerDocument || e, a = e.createElement("script"), Je(a), Ct(a, "link", l), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Tc(l, n.precedence, e));
    return t.instance;
  }
  function Tc(e, t, n) {
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
  var Nc = null;
  function em(e, t, n) {
    if (Nc === null) {
      var l = /* @__PURE__ */ new Map(), a = Nc = /* @__PURE__ */ new Map();
      a.set(n, l);
    } else
      a = Nc, l = a.get(n), l || (l = /* @__PURE__ */ new Map(), a.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var u = n[a];
      if (!(u[Hn] || u[Ke] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function lg(e, t, n) {
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
  function ag(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var a = Fu(l.href), u = t.querySelector(
          Fi(a)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Mc.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, Je(u);
          return;
        }
        u = t.ownerDocument || t, l = Fh(l), (a = Un.get(a)) && Do(l, a), u = u.createElement("link"), Je(u);
        var c = u;
        c._p = new Promise(function(d, y) {
          c.onload = d, c.onerror = y;
        }), Ct(u, "link", l), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Mc.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var jo = 0;
  function ug(e, t) {
    return e.stylesheets && e.count === 0 && Cc(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && Cc(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && jo === 0 && (jo = 62500 * Hy());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Cc(e, e.stylesheets), e.unsuspend)) {
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
  function Mc() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Cc(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var xc = null;
  function Cc(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, xc = /* @__PURE__ */ new Map(), t.forEach(ig, e), xc = null, Mc.call(e));
  }
  function ig(e, t) {
    if (!(t.state.loading & 4)) {
      var n = xc.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), xc.set(e, n);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < a.length; u++) {
          var c = a[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (n.set(c.dataset.precedence, c), l = c);
        }
        l && n.set(null, l);
      }
      a = t.instance, c = a.getAttribute("data-precedence"), u = n.get(c) || l, u === l && n.set(null, a), n.set(c, a), this.count++, l = Mc.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), u ? u.parentNode.insertBefore(a, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var es = {
    $$typeof: _e,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0
  };
  function sg(e, t, n, l, a, u, c, d, y) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ln(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ln(0), this.hiddenUpdates = Ln(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function lm(e, t, n, l, a, u, c, d, y, _, x, D) {
    return e = new sg(
      e,
      t,
      n,
      c,
      y,
      _,
      x,
      D,
      d
    ), t = 1, u === !0 && (t |= 24), u = mn(3, null, null, t), e.current = u, u.stateNode = e, t = hr(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, pr(u), e;
  }
  function am(e) {
    return e ? (e = qu, e) : qu;
  }
  function um(e, t, n, l, a, u) {
    a = am(a), l.context === null ? l.context = a : l.pendingContext = a, l = ca(t), l.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (l.callback = u), n = ra(e, l, t), n !== null && (cn(n, e, t), zi(n, e, t));
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
      var t = rl(e, 67108864);
      t !== null && cn(t, e, 67108864), wo(e, 67108864);
    }
  }
  function cm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = bn();
      t = za(t);
      var n = rl(e, t);
      n !== null && cn(n, e, t), wo(e, t);
    }
  }
  var Rc = !0;
  function cg(e, t, n, l) {
    var a = M.T;
    M.T = null;
    var u = B.p;
    try {
      B.p = 2, Bo(e, t, n, l);
    } finally {
      B.p = u, M.T = a;
    }
  }
  function rg(e, t, n, l) {
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
    if (Rc) {
      var a = Lo(l);
      if (a === null)
        Ao(
          e,
          t,
          l,
          qc,
          n
        ), om(e, l);
      else if (fg(
        a,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (om(e, l), t & 4 && -1 < og.indexOf(e)) {
        for (; a !== null; ) {
          var u = hn(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = R(u.pendingLanes);
                  if (c !== 0) {
                    var d = u;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; c; ) {
                      var y = 1 << 31 - Ot(c);
                      d.entanglements[1] |= y, c &= ~y;
                    }
                    hl(u), (xe & 6) === 0 && (dc = Qe() + 500, Ji(0));
                  }
                }
                break;
              case 31:
              case 13:
                d = rl(u, 2), d !== null && cn(d, u, 2), mc(), wo(u, 2);
            }
          if (u = Lo(l), u === null && Ao(
            e,
            t,
            l,
            qc,
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
    return e = mi(e), Ho(e);
  }
  var qc = null;
  function Ho(e) {
    if (qc = null, e = An(e), e !== null) {
      var t = q(e);
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
    return qc = e, null;
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
          case jt:
            return 8;
          case qt:
          case Jc:
            return 32;
          case ci:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Go = !1, Sa = null, Ea = null, _a = null, ts = /* @__PURE__ */ new Map(), ns = /* @__PURE__ */ new Map(), Aa = [], og = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function om(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Sa = null;
        break;
      case "dragenter":
      case "dragleave":
        Ea = null;
        break;
      case "mouseover":
      case "mouseout":
        _a = null;
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
    }, t !== null && (t = hn(t), t !== null && sm(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function fg(e, t, n, l, a) {
    switch (t) {
      case "focusin":
        return Sa = ls(
          Sa,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "dragenter":
        return Ea = ls(
          Ea,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "mouseover":
        return _a = ls(
          _a,
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
    var t = An(e.target);
    if (t !== null) {
      var n = q(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = w(n), t !== null) {
            e.blockedOn = t, ht(e.priority, function() {
              cm(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Y(n), t !== null) {
            e.blockedOn = t, ht(e.priority, function() {
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
  function Oc(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Lo(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        wa = l, n.target.dispatchEvent(l), wa = null;
      } else
        return t = hn(n), t !== null && sm(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function dm(e, t, n) {
    Oc(e) && n.delete(t);
  }
  function dg() {
    Go = !1, Sa !== null && Oc(Sa) && (Sa = null), Ea !== null && Oc(Ea) && (Ea = null), _a !== null && Oc(_a) && (_a = null), ts.forEach(dm), ns.forEach(dm);
  }
  function zc(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Go || (Go = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      dg
    )));
  }
  var Dc = null;
  function hm(e) {
    Dc !== e && (Dc = e, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        Dc === e && (Dc = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], a = e[t + 2];
          if (typeof l != "function") {
            if (Ho(l || n) === null)
              continue;
            break;
          }
          var u = hn(n);
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
  function ei(e) {
    function t(y) {
      return zc(y, e);
    }
    Sa !== null && zc(Sa, e), Ea !== null && zc(Ea, e), _a !== null && zc(_a, e), ts.forEach(t), ns.forEach(t);
    for (var n = 0; n < Aa.length; n++) {
      var l = Aa[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Aa.length && (n = Aa[0], n.blockedOn === null); )
      fm(n), n.blockedOn === null && Aa.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var a = n[l], u = n[l + 1], c = a[mt] || null;
        if (typeof u == "function")
          c || hm(n);
        else if (c) {
          var d = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, c = u[mt] || null)
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
  Uc.prototype.render = Yo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var n = t.current, l = bn();
    um(n, l, e, t, null, null);
  }, Uc.prototype.unmount = Yo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      um(e.current, 2, null, e, null, null), mc(), t[dn] = null;
    }
  };
  function Uc(e) {
    this._internalRoot = e;
  }
  Uc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = pl();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Aa.length && t !== 0 && t < Aa[n].priority; n++) ;
      Aa.splice(n, 0, e), n === 0 && fm(e);
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
    return e = O(t), e = e !== null ? $(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var hg = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var jc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jc.isDisabled && jc.supportsFiber)
      try {
        Ze = jc.inject(
          hg
        ), Re = jc;
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
    ), e[dn] = t.current, _o(e), new Yo(t);
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
    ), t.context = am(null), n = t.current, l = bn(), l = za(l), a = ca(l), a.callback = null, ra(n, a, l), n = l, t.current.lanes = n, _n(t, n), hl(t), e[dn] = t.current, _o(e), new Uc(t);
  }, us.version = "19.2.4", us;
}
var Nm;
function Ag() {
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
  return o(), Vo.exports = _g(), Vo.exports;
}
var Tg = Ag();
const Ng = "/api";
function Lm() {
  return window.localStorage.getItem("token");
}
function Mm() {
  const o = `${window.location.pathname}${window.location.search || ""}`;
  window.location.replace(`/login?next=${encodeURIComponent(o)}`);
}
async function ti(o, i = {}) {
  const s = Lm(), r = {
    "Content-Type": "application/json",
    ...s ? { Authorization: `Bearer ${s}` } : {},
    ...i.headers || {}
  }, S = await fetch(`${Ng}${o}`, {
    ...i,
    headers: r
  }), q = await S.text();
  let w = {};
  if (q)
    try {
      w = JSON.parse(q);
    } catch {
      w = { message: q };
    }
  if (!S.ok) {
    const Y = w.error || w.message || "Request failed";
    throw new Error(Y);
  }
  return w;
}
const yl = /* @__PURE__ */ Object.create(null);
yl.open = "0";
yl.close = "1";
yl.ping = "2";
yl.pong = "3";
yl.message = "4";
yl.upgrade = "5";
yl.noop = "6";
const kc = /* @__PURE__ */ Object.create(null);
Object.keys(yl).forEach((o) => {
  kc[yl[o]] = o;
});
const Wo = { type: "error", data: "parser error" }, Hm = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Gm = typeof ArrayBuffer == "function", Ym = (o) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(o) : o && o.buffer instanceof ArrayBuffer, cf = ({ type: o, data: i }, s, r) => Hm && i instanceof Blob ? s ? r(i) : xm(i, r) : Gm && (i instanceof ArrayBuffer || Ym(i)) ? s ? r(i) : xm(new Blob([i]), r) : r(yl[o] + (i || "")), xm = (o, i) => {
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
function Mg(o, i) {
  if (Hm && o.data instanceof Blob)
    return o.data.arrayBuffer().then(Cm).then(i);
  if (Gm && (o.data instanceof ArrayBuffer || Ym(o.data)))
    return i(Cm(o.data));
  cf(o, !1, (s) => {
    Jo || (Jo = new TextEncoder()), i(Jo.encode(s));
  });
}
const Rm = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", cs = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let o = 0; o < Rm.length; o++)
  cs[Rm.charCodeAt(o)] = o;
const xg = (o) => {
  let i = o.length * 0.75, s = o.length, r, S = 0, q, w, Y, U;
  o[o.length - 1] === "=" && (i--, o[o.length - 2] === "=" && i--);
  const O = new ArrayBuffer(i), $ = new Uint8Array(O);
  for (r = 0; r < s; r += 4)
    q = cs[o.charCodeAt(r)], w = cs[o.charCodeAt(r + 1)], Y = cs[o.charCodeAt(r + 2)], U = cs[o.charCodeAt(r + 3)], $[S++] = q << 2 | w >> 4, $[S++] = (w & 15) << 4 | Y >> 2, $[S++] = (Y & 3) << 6 | U & 63;
  return O;
}, Cg = typeof ArrayBuffer == "function", rf = (o, i) => {
  if (typeof o != "string")
    return {
      type: "message",
      data: km(o, i)
    };
  const s = o.charAt(0);
  return s === "b" ? {
    type: "message",
    data: Rg(o.substring(1), i)
  } : kc[s] ? o.length > 1 ? {
    type: kc[s],
    data: o.substring(1)
  } : {
    type: kc[s]
  } : Wo;
}, Rg = (o, i) => {
  if (Cg) {
    const s = xg(o);
    return km(s, i);
  } else
    return { base64: !0, data: o };
}, km = (o, i) => i === "blob" ? o instanceof Blob ? o : new Blob([o]) : o instanceof ArrayBuffer ? o : o.buffer, Xm = "", qg = (o, i) => {
  const s = o.length, r = new Array(s);
  let S = 0;
  o.forEach((q, w) => {
    cf(q, !1, (Y) => {
      r[w] = Y, ++S === s && i(r.join(Xm));
    });
  });
}, Og = (o, i) => {
  const s = o.split(Xm), r = [];
  for (let S = 0; S < s.length; S++) {
    const q = rf(s[S], i);
    if (r.push(q), q.type === "error")
      break;
  }
  return r;
};
function zg() {
  return new TransformStream({
    transform(o, i) {
      Mg(o, (s) => {
        const r = s.length;
        let S;
        if (r < 126)
          S = new Uint8Array(1), new DataView(S.buffer).setUint8(0, r);
        else if (r < 65536) {
          S = new Uint8Array(3);
          const q = new DataView(S.buffer);
          q.setUint8(0, 126), q.setUint16(1, r);
        } else {
          S = new Uint8Array(9);
          const q = new DataView(S.buffer);
          q.setUint8(0, 127), q.setBigUint64(1, BigInt(r));
        }
        o.data && typeof o.data != "string" && (S[0] |= 128), i.enqueue(S), i.enqueue(s);
      });
    }
  });
}
let Io;
function wc(o) {
  return o.reduce((i, s) => i + s.length, 0);
}
function Bc(o, i) {
  if (o[0].length === i)
    return o.shift();
  const s = new Uint8Array(i);
  let r = 0;
  for (let S = 0; S < i; S++)
    s[S] = o[0][r++], r === o[0].length && (o.shift(), r = 0);
  return o.length && r < o[0].length && (o[0] = o[0].slice(r)), s;
}
function Dg(o, i) {
  Io || (Io = new TextDecoder());
  const s = [];
  let r = 0, S = -1, q = !1;
  return new TransformStream({
    transform(w, Y) {
      for (s.push(w); ; ) {
        if (r === 0) {
          if (wc(s) < 1)
            break;
          const U = Bc(s, 1);
          q = (U[0] & 128) === 128, S = U[0] & 127, S < 126 ? r = 3 : S === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (wc(s) < 2)
            break;
          const U = Bc(s, 2);
          S = new DataView(U.buffer, U.byteOffset, U.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (wc(s) < 8)
            break;
          const U = Bc(s, 8), O = new DataView(U.buffer, U.byteOffset, U.length), $ = O.getUint32(0);
          if ($ > Math.pow(2, 21) - 1) {
            Y.enqueue(Wo);
            break;
          }
          S = $ * Math.pow(2, 32) + O.getUint32(4), r = 3;
        } else {
          if (wc(s) < S)
            break;
          const U = Bc(s, S);
          Y.enqueue(rf(q ? U : Io.decode(U), i)), r = 0;
        }
        if (S === 0 || S > o) {
          Y.enqueue(Wo);
          break;
        }
      }
    }
  });
}
const Vm = 4;
function rt(o) {
  if (o) return Ug(o);
}
function Ug(o) {
  for (var i in rt.prototype)
    o[i] = rt.prototype[i];
  return o;
}
rt.prototype.on = rt.prototype.addEventListener = function(o, i) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + o] = this._callbacks["$" + o] || []).push(i), this;
};
rt.prototype.once = function(o, i) {
  function s() {
    this.off(o, s), i.apply(this, arguments);
  }
  return s.fn = i, this.on(o, s), this;
};
rt.prototype.off = rt.prototype.removeListener = rt.prototype.removeAllListeners = rt.prototype.removeEventListener = function(o, i) {
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
rt.prototype.emit = function(o) {
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
rt.prototype.emitReserved = rt.prototype.emit;
rt.prototype.listeners = function(o) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + o] || [];
};
rt.prototype.hasListeners = function(o) {
  return !!this.listeners(o).length;
};
const Zc = typeof Promise == "function" && typeof Promise.resolve == "function" ? (i) => Promise.resolve().then(i) : (i, s) => s(i, 0), jn = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), jg = "arraybuffer";
function Qm(o, ...i) {
  return i.reduce((s, r) => (o.hasOwnProperty(r) && (s[r] = o[r]), s), {});
}
const wg = jn.setTimeout, Bg = jn.clearTimeout;
function Kc(o, i) {
  i.useNativeTimers ? (o.setTimeoutFn = wg.bind(jn), o.clearTimeoutFn = Bg.bind(jn)) : (o.setTimeoutFn = jn.setTimeout.bind(jn), o.clearTimeoutFn = jn.clearTimeout.bind(jn));
}
const Lg = 1.33;
function Hg(o) {
  return typeof o == "string" ? Gg(o) : Math.ceil((o.byteLength || o.size) * Lg);
}
function Gg(o) {
  let i = 0, s = 0;
  for (let r = 0, S = o.length; r < S; r++)
    i = o.charCodeAt(r), i < 128 ? s += 1 : i < 2048 ? s += 2 : i < 55296 || i >= 57344 ? s += 3 : (r++, s += 4);
  return s;
}
function Zm() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Yg(o) {
  let i = "";
  for (let s in o)
    o.hasOwnProperty(s) && (i.length && (i += "&"), i += encodeURIComponent(s) + "=" + encodeURIComponent(o[s]));
  return i;
}
function kg(o) {
  let i = {}, s = o.split("&");
  for (let r = 0, S = s.length; r < S; r++) {
    let q = s[r].split("=");
    i[decodeURIComponent(q[0])] = decodeURIComponent(q[1]);
  }
  return i;
}
class Xg extends Error {
  constructor(i, s, r) {
    super(i), this.description = s, this.context = r, this.type = "TransportError";
  }
}
class of extends rt {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(i) {
    super(), this.writable = !1, Kc(this, i), this.opts = i, this.query = i.query, this.socket = i.socket, this.supportsBinary = !i.forceBase64;
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
    return super.emitReserved("error", new Xg(i, s, r)), this;
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
    const s = Yg(i);
    return s.length ? "?" + s : "";
  }
}
class Vg extends of {
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
    Og(i, this.socket.binaryType).forEach(s), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, qg(i, (s) => {
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
    return this.opts.timestampRequests !== !1 && (s[this.opts.timestampParam] = Zm()), !this.supportsBinary && !s.sid && (s.b64 = 1), this.createUri(i, s);
  }
}
let Km = !1;
try {
  Km = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Qg = Km;
function Zg() {
}
class Kg extends Vg {
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
    r.on("success", s), r.on("error", (S, q) => {
      this.onError("xhr post error", S, q);
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
class ml extends rt {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(i, s, r) {
    super(), this.createRequest = i, Kc(this, r), this._opts = r, this._method = r.method || "GET", this._uri = s, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var i;
    const s = Qm(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = ml.requestsCount++, ml.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = Zg, i)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete ml.requests[this._index], this._xhr = null;
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
ml.requestsCount = 0;
ml.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", qm);
  else if (typeof addEventListener == "function") {
    const o = "onpagehide" in jn ? "pagehide" : "unload";
    addEventListener(o, qm, !1);
  }
}
function qm() {
  for (let o in ml.requests)
    ml.requests.hasOwnProperty(o) && ml.requests[o].abort();
}
const Jg = (function() {
  const o = Jm({
    xdomain: !1
  });
  return o && o.responseType !== null;
})();
class Ig extends Kg {
  constructor(i) {
    super(i);
    const s = i && i.forceBase64;
    this.supportsBinary = Jg && !s;
  }
  request(i = {}) {
    return Object.assign(i, { xd: this.xd }, this.opts), new ml(Jm, this.uri(), i);
  }
}
function Jm(o) {
  const i = o.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!i || Qg))
      return new XMLHttpRequest();
  } catch {
  }
  if (!i)
    try {
      return new jn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Im = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class $g extends of {
  get name() {
    return "websocket";
  }
  doOpen() {
    const i = this.uri(), s = this.opts.protocols, r = Im ? {} : Qm(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      cf(r, this.supportsBinary, (q) => {
        try {
          this.doWrite(r, q);
        } catch {
        }
        S && Zc(() => {
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
    return this.opts.timestampRequests && (s[this.opts.timestampParam] = Zm()), this.supportsBinary || (s.b64 = 1), this.createUri(i, s);
  }
}
const $o = jn.WebSocket || jn.MozWebSocket;
class Wg extends $g {
  createSocket(i, s, r) {
    return Im ? new $o(i, s, r) : s ? new $o(i, s) : new $o(i);
  }
  doWrite(i, s) {
    this.ws.send(s);
  }
}
class Fg extends of {
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
        const s = Dg(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = i.readable.pipeThrough(s).getReader(), S = zg();
        S.readable.pipeTo(i.writable), this._writer = S.writable.getWriter();
        const q = () => {
          r.read().then(({ done: Y, value: U }) => {
            Y || (this.onPacket(U), q());
          }).catch((Y) => {
          });
        };
        q();
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
        S && Zc(() => {
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
const Pg = {
  websocket: Wg,
  webtransport: Fg,
  polling: Ig
}, ep = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, tp = [
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
  let S = ep.exec(o || ""), q = {}, w = 14;
  for (; w--; )
    q[tp[w]] = S[w] || "";
  return s != -1 && r != -1 && (q.source = i, q.host = q.host.substring(1, q.host.length - 1).replace(/;/g, ":"), q.authority = q.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), q.ipv6uri = !0), q.pathNames = np(q, q.path), q.queryKey = lp(q, q.query), q;
}
function np(o, i) {
  const s = /\/{2,9}/g, r = i.replace(s, "/").split("/");
  return (i.slice(0, 1) == "/" || i.length === 0) && r.splice(0, 1), i.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function lp(o, i) {
  const s = {};
  return i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, S, q) {
    S && (s[S] = q);
  }), s;
}
const Po = typeof addEventListener == "function" && typeof removeEventListener == "function", Xc = [];
Po && addEventListener("offline", () => {
  Xc.forEach((o) => o());
}, !1);
class Ma extends rt {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(i, s) {
    if (super(), this.binaryType = jg, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, i && typeof i == "object" && (s = i, i = null), i) {
      const r = Fo(i);
      s.hostname = r.host, s.secure = r.protocol === "https" || r.protocol === "wss", s.port = r.port, r.query && (s.query = r.query);
    } else s.host && (s.hostname = Fo(s.host).host);
    Kc(this, s), this.secure = s.secure != null ? s.secure : typeof location < "u" && location.protocol === "https:", s.hostname && !s.port && (s.port = this.secure ? "443" : "80"), this.hostname = s.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = s.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, s.transports.forEach((r) => {
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
    }, s), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = kg(this.opts.query)), Po && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Xc.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    s.EIO = Vm, s.transport = i, this.id && (s.sid = this.id);
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
    const i = this.opts.rememberUpgrade && Ma.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", Ma.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (S && (s += Hg(S)), r > 0 && s > this._maxPayload)
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
    return i && (this._pingTimeoutTime = 0, Zc(() => {
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
    const q = {
      type: i,
      data: s,
      options: r
    };
    this.emitReserved("packetCreate", q), this.writeBuffer.push(q), S && this.once("flush", S), this.flush();
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
    if (Ma.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
        const r = Xc.indexOf(this._offlineEventListener);
        r !== -1 && Xc.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", i, s), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Ma.protocol = Vm;
class ap extends Ma {
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
    Ma.priorWebsocketSuccess = !1;
    const S = () => {
      r || (s.send([{ type: "ping", data: "probe" }]), s.once("packet", (V) => {
        if (!r)
          if (V.type === "pong" && V.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", s), !s)
              return;
            Ma.priorWebsocketSuccess = s.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && ($(), this.setTransport(s), s.send([{ type: "upgrade" }]), this.emitReserved("upgrade", s), s = null, this.upgrading = !1, this.flush());
            });
          } else {
            const te = new Error("probe error");
            te.transport = s.name, this.emitReserved("upgradeError", te);
          }
      }));
    };
    function q() {
      r || (r = !0, $(), s.close(), s = null);
    }
    const w = (V) => {
      const te = new Error("probe error: " + V);
      te.transport = s.name, q(), this.emitReserved("upgradeError", te);
    };
    function Y() {
      w("transport closed");
    }
    function U() {
      w("socket closed");
    }
    function O(V) {
      s && V.name !== s.name && q();
    }
    const $ = () => {
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
let up = class extends ap {
  constructor(i, s = {}) {
    const r = typeof i == "object" ? i : s;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((S) => Pg[S]).filter((S) => !!S)), super(i, r);
  }
};
function ip(o, i = "", s) {
  let r = o;
  s = s || typeof location < "u" && location, o == null && (o = s.protocol + "//" + s.host), typeof o == "string" && (o.charAt(0) === "/" && (o.charAt(1) === "/" ? o = s.protocol + o : o = s.host + o), /^(https?|wss?):\/\//.test(o) || (typeof s < "u" ? o = s.protocol + "//" + o : o = "https://" + o), r = Fo(o)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const q = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + q + ":" + r.port + i, r.href = r.protocol + "://" + q + (s && s.port === r.port ? "" : ":" + r.port), r;
}
const sp = typeof ArrayBuffer == "function", cp = (o) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(o) : o.buffer instanceof ArrayBuffer, $m = Object.prototype.toString, rp = typeof Blob == "function" || typeof Blob < "u" && $m.call(Blob) === "[object BlobConstructor]", op = typeof File == "function" || typeof File < "u" && $m.call(File) === "[object FileConstructor]";
function ff(o) {
  return sp && (o instanceof ArrayBuffer || cp(o)) || rp && o instanceof Blob || op && o instanceof File;
}
function Vc(o, i) {
  if (!o || typeof o != "object")
    return !1;
  if (Array.isArray(o)) {
    for (let s = 0, r = o.length; s < r; s++)
      if (Vc(o[s]))
        return !0;
    return !1;
  }
  if (ff(o))
    return !0;
  if (o.toJSON && typeof o.toJSON == "function" && arguments.length === 1)
    return Vc(o.toJSON(), !0);
  for (const s in o)
    if (Object.prototype.hasOwnProperty.call(o, s) && Vc(o[s]))
      return !0;
  return !1;
}
function fp(o) {
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
function dp(o, i) {
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
const hp = [
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
var Ee;
(function(o) {
  o[o.CONNECT = 0] = "CONNECT", o[o.DISCONNECT = 1] = "DISCONNECT", o[o.EVENT = 2] = "EVENT", o[o.ACK = 3] = "ACK", o[o.CONNECT_ERROR = 4] = "CONNECT_ERROR", o[o.BINARY_EVENT = 5] = "BINARY_EVENT", o[o.BINARY_ACK = 6] = "BINARY_ACK";
})(Ee || (Ee = {}));
class mp {
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
    return (i.type === Ee.EVENT || i.type === Ee.ACK) && Vc(i) ? this.encodeAsBinary({
      type: i.type === Ee.EVENT ? Ee.BINARY_EVENT : Ee.BINARY_ACK,
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
    return (i.type === Ee.BINARY_EVENT || i.type === Ee.BINARY_ACK) && (s += i.attachments + "-"), i.nsp && i.nsp !== "/" && (s += i.nsp + ","), i.id != null && (s += i.id), i.data != null && (s += JSON.stringify(i.data, this.replacer)), s;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(i) {
    const s = fp(i), r = this.encodeAsString(s.packet), S = s.buffers;
    return S.unshift(r), S;
  }
}
class df extends rt {
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
      const r = s.type === Ee.BINARY_EVENT;
      r || s.type === Ee.BINARY_ACK ? (s.type = r ? Ee.EVENT : Ee.ACK, this.reconstructor = new yp(s), s.attachments === 0 && super.emitReserved("decoded", s)) : super.emitReserved("decoded", s);
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
    if (Ee[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === Ee.BINARY_EVENT || r.type === Ee.BINARY_ACK) {
      const q = s + 1;
      for (; i.charAt(++s) !== "-" && s != i.length; )
        ;
      const w = i.substring(q, s);
      if (w != Number(w) || i.charAt(s) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(w);
    }
    if (i.charAt(s + 1) === "/") {
      const q = s + 1;
      for (; ++s && !(i.charAt(s) === "," || s === i.length); )
        ;
      r.nsp = i.substring(q, s);
    } else
      r.nsp = "/";
    const S = i.charAt(s + 1);
    if (S !== "" && Number(S) == S) {
      const q = s + 1;
      for (; ++s; ) {
        const w = i.charAt(s);
        if (w == null || Number(w) != w) {
          --s;
          break;
        }
        if (s === i.length)
          break;
      }
      r.id = Number(i.substring(q, s + 1));
    }
    if (i.charAt(++s)) {
      const q = this.tryParse(i.substr(s));
      if (df.isPayloadValid(r.type, q))
        r.data = q;
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
      case Ee.CONNECT:
        return Om(s);
      case Ee.DISCONNECT:
        return s === void 0;
      case Ee.CONNECT_ERROR:
        return typeof s == "string" || Om(s);
      case Ee.EVENT:
      case Ee.BINARY_EVENT:
        return Array.isArray(s) && (typeof s[0] == "number" || typeof s[0] == "string" && hp.indexOf(s[0]) === -1);
      case Ee.ACK:
      case Ee.BINARY_ACK:
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
class yp {
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
      const s = dp(this.reconPack, this.buffers);
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
const gp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: df,
  Encoder: mp,
  get PacketType() {
    return Ee;
  }
}, Symbol.toStringTag, { value: "Module" }));
function In(o, i, s) {
  return o.on(i, s), function() {
    o.off(i, s);
  };
}
const pp = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Wm extends rt {
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
      In(i, "open", this.onopen.bind(this)),
      In(i, "packet", this.onpacket.bind(this)),
      In(i, "error", this.onerror.bind(this)),
      In(i, "close", this.onclose.bind(this))
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
    var r, S, q;
    if (pp.hasOwnProperty(i))
      throw new Error('"' + i.toString() + '" is a reserved event name');
    if (s.unshift(i), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(s), this;
    const w = {
      type: Ee.EVENT,
      data: s
    };
    if (w.options = {}, w.options.compress = this.flags.compress !== !1, typeof s[s.length - 1] == "function") {
      const $ = this.ids++, V = s.pop();
      this._registerAckCallback($, V), w.id = $;
    }
    const Y = (S = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || S === void 0 ? void 0 : S.writable, U = this.connected && !(!((q = this.io.engine) === null || q === void 0) && q._hasPingExpired());
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
    const q = this.io.setTimeoutFn(() => {
      delete this.acks[i];
      for (let Y = 0; Y < this.sendBuffer.length; Y++)
        this.sendBuffer[Y].id === i && this.sendBuffer.splice(Y, 1);
      s.call(this, new Error("operation has timed out"));
    }, S), w = (...Y) => {
      this.io.clearTimeoutFn(q), s.apply(this, Y);
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
      const q = (w, Y) => w ? S(w) : r(Y);
      q.withError = !0, s.push(q), this.emit(i, ...s);
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
    i.push((S, ...q) => (this._queue[0], S !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), s && s(S)) : (this._queue.shift(), s && s(null, ...q)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
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
      type: Ee.CONNECT,
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
        case Ee.CONNECT:
          i.data && i.data.sid ? this.onconnect(i.data.sid, i.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case Ee.EVENT:
        case Ee.BINARY_EVENT:
          this.onevent(i);
          break;
        case Ee.ACK:
        case Ee.BINARY_ACK:
          this.onack(i);
          break;
        case Ee.DISCONNECT:
          this.ondisconnect();
          break;
        case Ee.CONNECT_ERROR:
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
        type: Ee.ACK,
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
    return this.connected && this.packet({ type: Ee.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function li(o) {
  o = o || {}, this.ms = o.min || 100, this.max = o.max || 1e4, this.factor = o.factor || 2, this.jitter = o.jitter > 0 && o.jitter <= 1 ? o.jitter : 0, this.attempts = 0;
}
li.prototype.duration = function() {
  var o = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var i = Math.random(), s = Math.floor(i * this.jitter * o);
    o = (Math.floor(i * 10) & 1) == 0 ? o - s : o + s;
  }
  return Math.min(o, this.max) | 0;
};
li.prototype.reset = function() {
  this.attempts = 0;
};
li.prototype.setMin = function(o) {
  this.ms = o;
};
li.prototype.setMax = function(o) {
  this.max = o;
};
li.prototype.setJitter = function(o) {
  this.jitter = o;
};
class nf extends rt {
  constructor(i, s) {
    var r;
    super(), this.nsps = {}, this.subs = [], i && typeof i == "object" && (s = i, i = void 0), s = s || {}, s.path = s.path || "/socket.io", this.opts = s, Kc(this, s), this.reconnection(s.reconnection !== !1), this.reconnectionAttempts(s.reconnectionAttempts || 1 / 0), this.reconnectionDelay(s.reconnectionDelay || 1e3), this.reconnectionDelayMax(s.reconnectionDelayMax || 5e3), this.randomizationFactor((r = s.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new li({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(s.timeout == null ? 2e4 : s.timeout), this._readyState = "closed", this.uri = i;
    const S = s.parser || gp;
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
    this.engine = new up(this.uri, this.opts);
    const s = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const S = In(s, "open", function() {
      r.onopen(), i && i();
    }), q = (Y) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", Y), i ? i(Y) : this.maybeReconnectOnOpen();
    }, w = In(s, "error", q);
    if (this._timeout !== !1) {
      const Y = this._timeout, U = this.setTimeoutFn(() => {
        S(), q(new Error("timeout")), s.close();
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
      In(i, "ping", this.onping.bind(this)),
      In(i, "data", this.ondata.bind(this)),
      In(i, "error", this.onerror.bind(this)),
      In(i, "close", this.onclose.bind(this)),
      // @ts-ignore
      In(this.decoder, "decoded", this.ondecoded.bind(this))
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
    Zc(() => {
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
function Qc(o, i) {
  typeof o == "object" && (i = o, o = void 0), i = i || {};
  const s = ip(o, i.path || "/socket.io"), r = s.source, S = s.id, q = s.path, w = is[S] && q in is[S].nsps, Y = i.forceNew || i["force new connection"] || i.multiplex === !1 || w;
  let U;
  return Y ? U = new nf(r, i) : (is[S] || (is[S] = new nf(r, i)), U = is[S]), s.query && !i.query && (i.query = s.queryKey), U.socket(s.path, i);
}
Object.assign(Qc, {
  Manager: nf,
  Socket: Wm,
  io: Qc,
  connect: Qc
});
let ru = null;
function vp(o) {
  return ru ? ru.auth = { token: o } : ru = Qc({
    autoConnect: !1,
    transports: ["websocket"],
    auth: { token: o }
  }), ru;
}
function bp() {
  ru && (ru.disconnect(), ru = null);
}
const lf = ["POPULAR", "MAL_ONLY", "HYBRID"], af = ["STANDARD", "BALANCED_RELAXED"], uf = ["OP_ONLY", "ED_ONLY", "MIXED"], Lc = {
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
}, Hc = {
  STANDARD: {
    label: "Standard",
    help: "Simple rotation; no strict player balancing."
  },
  BALANCED_RELAXED: {
    label: "Balanced",
    help: "Try to balance players, then relax constraints when needed."
  }
}, Gc = {
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
}, Sp = 2, Ep = 3, _p = 2, Ap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Vt = {
  name: "",
  isPrivate: !1,
  maxPlayers: 8,
  roundCount: 10,
  guessSeconds: 20,
  sourceMode: "MAL_ONLY",
  selectionMode: "BALANCED_RELAXED",
  themeMode: "OP_ONLY",
  animeScoreMin: 1,
  animeScoreMax: 10,
  playerScoreMin: 1,
  playerScoreMax: 10
};
function zm(o) {
  return o ? {
    name: typeof o.name == "string" ? o.name : "",
    isPrivate: !!o.isPrivate,
    maxPlayers: Number.isInteger(o.maxPlayers) ? o.maxPlayers : Vt.maxPlayers,
    roundCount: Number.isInteger(o.roundCount) ? o.roundCount : Vt.roundCount,
    guessSeconds: Number.isInteger(o.guessSeconds) ? o.guessSeconds : Vt.guessSeconds,
    sourceMode: lf.includes(o.sourceMode) ? o.sourceMode : Vt.sourceMode,
    selectionMode: af.includes(o.selectionMode) ? o.selectionMode : Vt.selectionMode,
    themeMode: uf.includes(o.themeMode) ? o.themeMode : Vt.themeMode,
    animeScoreMin: Number.isInteger(o.animeScoreMin) ? o.animeScoreMin : Vt.animeScoreMin,
    animeScoreMax: Number.isInteger(o.animeScoreMax) ? o.animeScoreMax : Vt.animeScoreMax,
    playerScoreMin: Number.isInteger(o.playerScoreMin) ? o.playerScoreMin : Vt.playerScoreMin,
    playerScoreMax: Number.isInteger(o.playerScoreMax) ? o.playerScoreMax : Vt.playerScoreMax
  } : { ...Vt };
}
function Sn(o, i, s, { timeoutMs: r = 1e4 } = {}) {
  return new Promise((S, q) => {
    let w = !1;
    const Y = window.setTimeout(() => {
      w || (w = !0, q(new Error("Request timed out")));
    }, r);
    o.emit(i, s, (U) => {
      if (!w)
        return w = !0, window.clearTimeout(Y), U?.ok ? S(U) : q(new Error(U?.error || U?.code || "Request failed"));
    });
  });
}
function rn(o) {
  return String(o || "").trim().toUpperCase();
}
function Tp(o) {
  const s = String(o || "").trim().match(/^\/(?:amq\/lobby|amq\/invite|invite)\/([^/?#]+)/i);
  if (!s) return "";
  try {
    return rn(decodeURIComponent(s[1]));
  } catch {
    return "";
  }
}
function cu(o, i) {
  const s = rn(o), r = s ? `/amq/lobby/${encodeURIComponent(s)}` : "/amq", S = new URLSearchParams(window.location.search);
  i ? (S.set("i", i), S.delete("inviteToken"), S.delete("lobby")) : (S.delete("lobby"), S.delete("i"), S.delete("inviteToken"));
  const q = S.toString();
  window.history.replaceState({}, "", q ? `${r}?${q}` : r);
}
function Np(o) {
  const i = String(o || "").trim();
  if (!i) return "";
  const s = i.split(".");
  if (s.length !== 3) return "";
  const r = String(s[0] || "").toUpperCase();
  return /^[A-Z0-9]{4,12}$/.test(r) ? r : "";
}
function Mp(o) {
  if (!Number.isFinite(o) || o <= 0) return "00:00";
  const i = Math.ceil(o / 1e3), s = Math.floor(i / 60), r = i % 60;
  return `${String(s).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function wn(o, i, s) {
  const r = Number.parseInt(o, 10);
  return Number.isFinite(r) ? Math.max(i, Math.min(s, r)) : i;
}
function Na(o, i, s, r, S) {
  const q = wn(o?.[i], 1, 10), w = wn(o?.[s], 1, 10), Y = wn(S, 1, 10);
  return r === "min" ? {
    ...o,
    [i]: Math.min(Y, w),
    [s]: w
  } : {
    ...o,
    [i]: q,
    [s]: Math.max(Y, q)
  };
}
function Yc({
  label: o,
  minValue: i,
  maxValue: s,
  onMinChange: r,
  onMaxChange: S,
  hint: q = ""
}) {
  const w = g.useRef(null), Y = wn(i, 1, 10), U = wn(s, 1, 10), O = (Y - 1) / 9 * 100, $ = (U - 1) / 9 * 100, V = Math.max(0, $ - O), te = g.useRef(Y), Be = g.useRef(U);
  g.useEffect(() => {
    te.current = Y, Be.current = U;
  }, [U, Y]);
  const Le = g.useCallback((me) => {
    const _e = w.current;
    if (!_e) return null;
    const Te = _e.getBoundingClientRect();
    if (!Number.isFinite(Te.width) || Te.width <= 0) return null;
    const He = Math.max(0, Math.min(1, (me - Te.left) / Te.width));
    return Math.max(1, Math.min(10, Math.round(He * 9) + 1));
  }, []), $e = g.useCallback((me, _e) => {
    const Te = wn(_e, 1, 10);
    if (me === "min") {
      const ye = Math.min(Te, Be.current);
      te.current = ye, r(String(ye));
      return;
    }
    const He = Math.max(Te, te.current);
    Be.current = He, S(String(He));
  }, [S, r]), ot = g.useCallback((me, _e) => {
    if (_e.button !== 0) return;
    _e.preventDefault();
    const Te = Le(_e.clientX);
    Te != null && $e(me, Te);
    const He = (ee) => {
      const Ve = Le(ee.clientX);
      Ve != null && $e(me, Ve);
    }, ye = () => {
      window.removeEventListener("pointermove", He), window.removeEventListener("pointerup", ye);
    };
    window.addEventListener("pointermove", He), window.addEventListener("pointerup", ye);
  }, [$e, Le]), We = g.useCallback((me) => {
    if (me.button !== 0) return;
    const _e = Le(me.clientX);
    if (_e == null) return;
    const Te = Math.abs(_e - te.current), He = Math.abs(_e - Be.current), ye = Te <= He ? "min" : "max";
    ot(ye, me);
  }, [ot, Le]);
  return /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card gmq-score-range-card", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "gmq-score-range-head", children: [
      /* @__PURE__ */ m.jsx("span", { children: o }),
      /* @__PURE__ */ m.jsxs("strong", { children: [
        Y,
        " - ",
        U
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: "gmq-score-range-slider",
        style: {
          "--range-start": `${O}%`,
          "--range-end": `${$}%`
        },
        children: [
          /* @__PURE__ */ m.jsx("div", { className: "gmq-score-range-rail", ref: w, onPointerDown: We, children: /* @__PURE__ */ m.jsxs(
            "div",
            {
              className: "gmq-score-range-selected",
              style: { left: `${O}%`, width: `${V}%` },
              children: [
                /* @__PURE__ */ m.jsx(
                  "button",
                  {
                    type: "button",
                    className: "gmq-score-range-handle gmq-score-range-handle-min",
                    "aria-label": `${o} minimum`,
                    onPointerDown: (me) => {
                      me.stopPropagation(), ot("min", me);
                    }
                  }
                ),
                /* @__PURE__ */ m.jsx(
                  "button",
                  {
                    type: "button",
                    className: "gmq-score-range-handle gmq-score-range-handle-max",
                    "aria-label": `${o} maximum`,
                    onPointerDown: (me) => {
                      me.stopPropagation(), ot("max", me);
                    }
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ m.jsx("div", { className: "gmq-score-range-scale", "aria-hidden": "true", children: Ap.map((me) => /* @__PURE__ */ m.jsxs(
            "span",
            {
              className: `gmq-score-range-scale-tick${me >= Y && me <= U ? " is-selected" : ""}`,
              style: { "--tick-pos": `${(me - 1) / 9 * 100}%` },
              children: [
                /* @__PURE__ */ m.jsx("span", { className: "gmq-score-range-scale-dot" }),
                /* @__PURE__ */ m.jsx("span", { className: "gmq-score-range-scale-label", children: me })
              ]
            },
            me
          )) })
        ]
      }
    ),
    q ? /* @__PURE__ */ m.jsx("p", { className: "gmq-field-help gmq-muted", children: q }) : null
  ] });
}
function Dm(o) {
  const i = String(o || "").replace(/\D+/g, "");
  return i ? i.slice(0, 2) : "";
}
function ni(o, i) {
  const s = (Number(i?.score) || 0) - (Number(o?.score) || 0);
  return s !== 0 ? s : String(o?.displayName || "").localeCompare(String(i?.displayName || ""));
}
function xp(o) {
  return Array.isArray(o) ? o.map((i) => ({
    index: Number.parseInt(i?.index, 10),
    audioUrl: typeof i?.audioUrl == "string" ? i.audioUrl : null,
    videoUrl: typeof i?.videoUrl == "string" ? i.videoUrl : null,
    sampleStartSec: Number.isFinite(i?.sampleStartSec) ? i.sampleStartSec : 0,
    sampleDurationSec: Number.isFinite(i?.sampleDurationSec) ? i.sampleDurationSec : 0
  })).filter((i) => Number.isInteger(i.index) && i.index > 0).sort((i, s) => i.index - s.index) : [];
}
function Yl(o) {
  return String(o || "").trim();
}
function Um(o) {
  return String(o || "").normalize("NFKC").toLowerCase().trim().replace(/[^\p{L}\p{N}\s]/gu, "").replace(/\s+/g, " ");
}
function jm(o) {
  const i = Yl(o).toLowerCase();
  return i ? i.includes("only host") ? "Only the host can start the game." : i.includes("all players must be ready") ? "All players must click Ready before the host can start." : i.includes("not enough players") ? "Not enough players to start. Invite more players or lower the minimum players setting." : i.includes("balanced strict") ? "Balanced mode could not build fair rounds from MAL lists. Try Standard or Hybrid." : i.includes("mal_only") ? "MAL_ONLY could not build enough rounds from linked MAL lists. Try HYBRID or POPULAR." : i.includes("playable round media") || i.includes("round seeds") || i.includes("media provider") ? "Could not prepare enough playable songs for this match. Try fewer rounds or different source/theme settings." : i.includes("timed out") ? "Game start timed out. Please try again." : Yl(o) : "Could not start the game right now. Please try again.";
}
function Cp(o) {
  const i = Yl(o).toLowerCase();
  return i ? i.includes("at least 2 characters") ? "Type at least 2 characters to search." : i.includes("too many") || i.includes("rate") ? "Search is rate-limited right now. Wait a few seconds and try again." : i.includes("timed out") ? "Search timed out. Please try again." : "Search is temporarily unavailable. You can still submit a typed guess." : "Search is temporarily unavailable. You can still submit a typed guess.";
}
function ss(o) {
  return o === "autoplay_blocked" ? "Autoplay was blocked or the sample failed to auto-start. Press Play sample." : o === "source_unavailable" ? "This sample source failed to load for your browser." : "Could not play sample audio for this round.";
}
function Rp(o) {
  const i = Yl(o).toLowerCase();
  return i ? i.includes("lobby not found") || i.includes("not accepting new players") || i.includes("lobby is full") : !1;
}
function qp(o) {
  const i = Yl(o).toLowerCase();
  return i ? i.includes("kicked from this lobby") ? Yl(o) : i.includes("valid invite token is required") ? "This lobby is private. Ask the host for the invite link." : Yl(o) : "Could not join this lobby right now.";
}
function Op(o) {
  const i = String(o || "").trim().toLowerCase();
  return i === "host_offline_timeout" ? "Lobby was closed because the host stayed offline too long." : i === "zero_connected_round_streak" ? "Lobby was closed due to inactivity (no connected players for multiple rounds)." : "Lobby was closed.";
}
function wm(o) {
  const i = String(o?.name || ""), s = Yl(o?.message).toLowerCase();
  return i === "NotAllowedError" || s.includes("notallowederror") || s.includes("user gesture") || s.includes("permission") || s.includes("autoplay") ? "autoplay_blocked" : i === "AbortError" ? "aborted" : i === "NotSupportedError" || s.includes("failed to load") || s.includes("no supported source") || s.includes("not supported") ? "source_unavailable" : "play_failed";
}
function zp() {
  const o = Lm(), i = g.useRef(null), s = g.useRef(null), r = g.useRef(""), S = g.useRef(null), q = g.useRef(!1), w = g.useRef(null), Y = g.useRef(!1), U = g.useRef(!1), O = g.useRef(0), $ = g.useRef(!1), V = g.useRef(!1), te = g.useRef(null), Be = g.useRef(null), Le = g.useRef(null), $e = g.useRef(null), ot = g.useRef([]), We = g.useRef(null), me = g.useRef(null), _e = g.useRef(0.25), Te = g.useRef(null), He = g.useRef(/* @__PURE__ */ new Map()), ye = g.useRef(/* @__PURE__ */ new Map()), ee = g.useRef(/* @__PURE__ */ new Map()), Ve = g.useRef(/* @__PURE__ */ new Map()), gt = g.useRef(/* @__PURE__ */ new Map()), Bn = g.useRef(/* @__PURE__ */ new Map()), ft = g.useRef(/* @__PURE__ */ new Map()), Fe = g.useRef([]), on = g.useRef(/* @__PURE__ */ new Set()), Ut = g.useRef(0), Rt = g.useRef([]), M = g.useRef(!1), B = g.useRef(null), Z = g.useRef(!1), Ae = g.useRef(0), ae = g.useRef(null), p = g.useRef(null), z = g.useRef({ roundId: null, key: "" }), L = g.useRef(""), H = g.useRef(null), [W, se] = g.useState(!0), [J, ge] = g.useState(""), [we, oe] = g.useState(""), [gl, pt] = g.useState(""), [$n, Wn] = g.useState(!1), [ie, ai] = g.useState(null), [ui, ii] = g.useState([]), [xa, si] = g.useState(""), [Ca, Ra] = g.useState(!1), [kl, Qe] = g.useState(!1), [Qt, Zt] = g.useState(null), [jt, qt] = g.useState(null), [Jc, ci] = g.useState(!1), [dt, wt] = g.useState(Vt), [Ze, Re] = g.useState(Vt), [fn, Ot] = g.useState(String(Vt.maxPlayers)), [ou, fu] = g.useState(String(Vt.maxPlayers)), [rs, qa] = g.useState(""), [Oa, En] = g.useState(""), [R, Kt] = g.useState(null), [Xl, os] = g.useState(null), [F, Ln] = g.useState("WAITING"), [_n, Vl] = g.useState(null), [fs, ri] = g.useState("00:00"), [ce, za] = g.useState(null), [du, pl] = g.useState([]), [ht, Bt] = g.useState(null), [Ke, mt] = g.useState(null), [dn, Fn] = g.useState([]), [Jt, hu] = g.useState([]), [Ql, Hn] = g.useState([]), [Da, An] = g.useState([]), [hn, Pn] = g.useState(""), [Gn, Je] = g.useState(null), [lt, el] = g.useState([]), [It, $t] = g.useState(!1), [tl, Tn] = g.useState(-1), [mu, vl] = g.useState(!1), [oi, Wt] = g.useState(!1), [nl, zt] = g.useState(null), [yu, bl] = g.useState(!1), [Yn, ds] = g.useState(0.25), [Ua, Zl] = g.useState(""), [Lt, Ht] = g.useState(""), [fi, Nn] = g.useState(""), [Kl, ll] = g.useState(!1), [ja, al] = g.useState({ ready: 0, failed: 0, total: 0 }), [di, Sl] = g.useState(""), [hi, ul] = g.useState(!1), [hf, il] = g.useState(null), [at, kn] = g.useState(null), [wa, mi] = g.useState(""), [Ft, Gt] = g.useState(!1), [Ba, gu] = g.useState({
    visible: !1,
    x: 0,
    y: 0,
    text: ""
  }), yi = g.useCallback((f) => {
    gu({
      visible: !0,
      x: Number.isFinite(f?.clientX) ? f.clientX : 0,
      y: Number.isFinite(f?.clientY) ? f.clientY : 0,
      text: "User has connected a MAL account."
    });
  }, []), La = g.useCallback(() => {
    gu((f) => f.visible ? { ...f, visible: !1 } : f);
  }, []), Xn = g.useCallback((f) => {
    const h = Dm(f);
    Ot(h), h && wt((T) => ({
      ...T,
      maxPlayers: wn(h, 1, 8)
    }));
  }, []), gi = g.useCallback((f) => {
    const h = Dm(f);
    fu(h), h && Re((T) => ({
      ...T,
      maxPlayers: wn(h, 1, 8)
    }));
  }, []), Ha = g.useCallback((f) => {
    wt((h) => Na(h, "animeScoreMin", "animeScoreMax", "min", f));
  }, []), sl = g.useCallback((f) => {
    wt((h) => Na(h, "animeScoreMin", "animeScoreMax", "max", f));
  }, []), pi = g.useCallback((f) => {
    wt((h) => Na(h, "playerScoreMin", "playerScoreMax", "min", f));
  }, []), pu = g.useCallback((f) => {
    wt((h) => Na(h, "playerScoreMin", "playerScoreMax", "max", f));
  }, []), hs = g.useCallback((f) => {
    Re((h) => Na(h, "animeScoreMin", "animeScoreMax", "min", f));
  }, []), vu = g.useCallback((f) => {
    Re((h) => Na(h, "animeScoreMin", "animeScoreMax", "max", f));
  }, []), bu = g.useCallback((f) => {
    Re((h) => Na(h, "playerScoreMin", "playerScoreMax", "min", f));
  }, []), ms = g.useCallback((f) => {
    Re((h) => Na(h, "playerScoreMin", "playerScoreMax", "max", f));
  }, []), vt = g.useCallback(() => {
    const f = wn(dt.maxPlayers, 1, 8), h = fn ? wn(fn, 1, 8) : f;
    return wt((T) => ({ ...T, maxPlayers: h })), Ot(String(h)), h;
  }, [dt.maxPlayers, fn]), Vn = g.useCallback(() => {
    const f = wn(Ze.maxPlayers, 1, 8), h = ou ? wn(ou, 1, 8) : f;
    return Re((T) => ({ ...T, maxPlayers: h })), fu(String(h)), h;
  }, [Ze.maxPlayers, ou]);
  g.useEffect(() => {
    s.current = R;
  }, [R]), g.useEffect(() => {
    r.current = Oa;
  }, [Oa]), g.useEffect(() => {
    _e.current = Yn;
  }, [Yn]), g.useEffect(() => {
    L.current = hn;
  }, [hn]), g.useEffect(() => {
    H.current = Number.isInteger(Gn) ? Gn : null;
  }, [Gn]), g.useEffect(() => {
    if (!Ca && !kl && !Qt && !jt) return;
    const f = (h) => {
      if (h.key === "Escape") {
        if (jt) {
          qt(null);
          return;
        }
        if (Qt) {
          Zt(null);
          return;
        }
        if (kl) {
          Qe(!1);
          return;
        }
        Ra(!1);
      }
    };
    return window.addEventListener("keydown", f), () => window.removeEventListener("keydown", f);
  }, [Ca, jt, Qt, kl]), g.useEffect(() => {
    if (!jt) return;
    (R?.players || []).some((h) => h.userId === jt.userId) || qt(null);
  }, [jt, R]), g.useEffect(() => {
    if (!Qt) return;
    (R?.players || []).some((h) => h.userId === Qt.userId) || Zt(null);
  }, [Qt, R]), g.useEffect(() => {
    Ft && (Zt(null), qt(null));
  }, [Ft]), g.useEffect(() => {
    if (!R || R.status !== "WAITING") {
      Qe(!1);
      return;
    }
    if (kl) return;
    const f = zm(R);
    Re(f), fu(String(f.maxPlayers));
  }, [R, kl]), g.useEffect(() => {
    if (!we) return;
    const f = window.setTimeout(() => oe(""), 7e3);
    return () => window.clearTimeout(f);
  }, [we]), g.useEffect(() => {
    if (!gl) return;
    const f = window.setTimeout(() => pt(""), 4500);
    return () => window.clearTimeout(f);
  }, [gl]), g.useEffect(() => {
    if (!It || F !== "GUESSING") return;
    const f = (h) => {
      h.key === "Escape" && ($t(!1), $e.current?.blur?.());
    };
    return window.addEventListener("keydown", f), () => {
      window.removeEventListener("keydown", f);
    };
  }, [F, It]), g.useEffect(() => {
    F !== "GUESSING" && ($t(!1), Tn(-1));
  }, [F]), g.useEffect(() => {
    ot.current = ot.current.slice(0, lt.length);
  }, [lt.length]), g.useEffect(() => {
    if (!It || F !== "GUESSING" || lt.length <= 0) {
      Tn(-1);
      return;
    }
    Tn((f) => f >= 0 && f < lt.length ? f : 0);
  }, [F, It, lt]), g.useEffect(() => {
    if (tl < 0) return;
    ot.current[tl]?.scrollIntoView?.({ block: "nearest" });
  }, [tl]);
  const Ga = g.useMemo(() => {
    const f = /* @__PURE__ */ new Map();
    for (const h of R?.players || [])
      f.set(h.userId, h.displayName);
    return f;
  }, [R]), Jl = g.useCallback((f) => Ga.get(f) || `User ${f}`, [Ga]), Su = g.useCallback(() => {
    me.current && (window.clearTimeout(me.current), me.current = null);
  }, []), Yt = g.useCallback(() => {
    Su();
    const f = We.current;
    f?.pause && f.pause(), te.current && te.current !== f && te.current.pause(), Be.current && Be.current !== f && Be.current.pause(), We.current = null, Wt(!1);
  }, [Su]), Mn = g.useCallback(() => {
    const f = Le.current;
    if (f) {
      f.pause();
      try {
        f.currentTime = 0;
      } catch {
      }
    }
  }, []), Pt = g.useCallback(() => {
    const f = Rt.current;
    if (!Array.isArray(f) || f.length === 0) {
      al({ ready: 0, failed: 0, total: 0 });
      return;
    }
    let h = 0, T = 0;
    for (const j of f) {
      const X = ye.current.get(j);
      X === "ready" ? h += 1 : X === "failed" && (T += 1);
    }
    al({ ready: h, failed: T, total: f.length });
  }, []), El = g.useCallback((f = null) => {
    const h = f instanceof Set ? f : null, T = [];
    for (const [j] of ft.current)
      h && h.has(j) || T.push(j);
    for (const j of T) {
      const X = ft.current.get(j);
      if (X) {
        try {
          X.pause?.(), X.removeAttribute("src"), X.load?.();
        } catch {
        }
        X.parentNode && X.parentNode.removeChild(X);
      }
      ft.current.delete(j), Bn.current.delete(j), gt.current.delete(j);
    }
  }, []), _l = g.useCallback(() => {
    M.current = !0, He.current.clear(), ye.current.clear(), ee.current.clear(), Ve.current.clear(), Fe.current = [], on.current.clear(), Ut.current = 0, Rt.current = [], B.current = null, Z.current = !1, El(), ll(!1), al({ ready: 0, failed: 0, total: 0 }), Sl(""), ul(!1);
  }, [El]), ys = g.useCallback((f, h = "video") => {
    const T = typeof f == "string" ? f.trim() : "";
    if (!T)
      return Promise.reject(new Error("Missing media url"));
    const j = gt.current.get(T);
    if (j === "ready")
      return Promise.resolve(!0);
    const X = Bn.current.get(T);
    if (j === "loading" && X)
      return X;
    gt.current.set(T, "loading");
    const pe = new Promise((re, Ce) => {
      if (M.current) {
        gt.current.set(T, "failed"), Ce(new Error("Preload manager was reset"));
        return;
      }
      const ne = document.createElement(h === "audio" ? "audio" : "video");
      ne.preload = "auto", ne.muted = !0, ne.playsInline = !0, ne.style.position = "absolute", ne.style.left = "-10000px", ne.style.width = "1px", ne.style.height = "1px", ne.style.opacity = "0";
      const ke = (Nl) => {
        if (Et(), Nl) {
          gt.current.set(T, "ready"), ft.current.set(T, ne), re(!0);
          return;
        }
        gt.current.set(T, "failed"), ft.current.delete(T), ne.parentNode && ne.parentNode.removeChild(ne), Ce(new Error("Media preload failed"));
      }, Et = () => {
        window.clearTimeout(na), ne.removeEventListener("loadeddata", _t), ne.removeEventListener("canplaythrough", _t), ne.removeEventListener("error", At);
      }, _t = () => ke(!0), At = () => ke(!1), na = window.setTimeout(() => ke(!1), 12e3);
      ne.addEventListener("loadeddata", _t, { once: !0 }), ne.addEventListener("canplaythrough", _t, { once: !0 }), ne.addEventListener("error", At, { once: !0 }), document.body.appendChild(ne), ne.src = T, ne.load();
    }).finally(() => {
      gt.current.get(T) !== "loading" && Bn.current.delete(T);
    });
    return Bn.current.set(T, pe), pe;
  }, []), gs = g.useCallback(async (f) => {
    const h = Number.parseInt(f, 10);
    if (!Number.isInteger(h) || h <= 0 || M.current) return !1;
    const T = ee.current.get(h);
    if (T) return T;
    if (ye.current.get(h) === "ready") return !0;
    const X = He.current.get(h);
    if (!X)
      return ye.current.set(h, "failed"), Pt(), !1;
    const pe = [X.audioUrl, X.videoUrl].filter((Ce, ne, ke) => Ce && ke.indexOf(Ce) === ne);
    Ve.current.set(h, new Set(pe)), ye.current.set(h, "loading"), Pt();
    const re = (async () => {
      if (pe.length === 0)
        return ye.current.set(h, "failed"), !1;
      const ne = (await Promise.allSettled(pe.map((ke) => {
        const Et = X.audioUrl && ke === X.audioUrl ? "audio" : "video";
        return ys(ke, Et);
      }))).some((ke) => ke.status === "fulfilled");
      return ye.current.set(h, ne ? "ready" : "failed"), ne;
    })().finally(() => {
      ee.current.delete(h), Pt();
    });
    return ee.current.set(h, re), re;
  }, [ys, Pt]), vi = g.useCallback(() => {
    if (!M.current)
      for (; Ut.current < _p && Fe.current.length > 0; ) {
        const f = Fe.current.shift();
        on.current.delete(f);
        const h = ye.current.get(f);
        h === "ready" || h === "loading" || (Ut.current += 1, gs(f).catch(() => !1).finally(() => {
          Ut.current = Math.max(0, Ut.current - 1), vi();
        }));
      }
  }, [gs]), cl = g.useCallback((f = []) => {
    for (const h of f) {
      const T = Number.parseInt(h, 10);
      if (!Number.isInteger(T) || T <= 0 || !He.current.has(T)) continue;
      const j = ye.current.get(T);
      j === "ready" || j === "loading" || on.current.has(T) || (ye.current.set(T, "pending"), Fe.current.push(T), on.current.add(T));
    }
    Pt(), vi();
  }, [vi, Pt]), Eu = g.useCallback(async (f, h = 2e4) => {
    const T = (Array.isArray(f) ? f : []).map((X) => Number.parseInt(X, 10)).filter((X) => Number.isInteger(X) && X > 0);
    if (T.length === 0) return { ok: !0 };
    const j = Date.now();
    for (; !M.current; ) {
      const X = T.filter((re) => ye.current.get(re) === "failed");
      if (X.length > 0)
        return { ok: !1, reason: "failed", failedIndexes: X };
      if (T.every((re) => ye.current.get(re) === "ready")) return { ok: !0 };
      if (Date.now() - j >= h)
        return { ok: !1, reason: "timeout" };
      await new Promise((re) => window.setTimeout(re, 120));
    }
    return { ok: !1, reason: "cancelled" };
  }, []), _u = g.useCallback((f) => !f || f.ok ? "" : f.reason === "failed" ? "Failed to preload required round media. Retry to continue." : f.reason === "timeout" ? "Preloading required media timed out. Retry to continue." : "Preloading was interrupted. Retry to continue.", []), ps = g.useCallback((f = []) => {
    const h = new Set(
      (Array.isArray(f) ? f : []).map((j) => Number.parseInt(j, 10)).filter((j) => Number.isInteger(j) && j > 0)
    ), T = /* @__PURE__ */ new Set();
    for (const [j, X] of Ve.current)
      if (h.has(j))
        for (const pe of X || []) T.add(pe);
    for (const j of [...Ve.current.keys()])
      h.has(j) || (Ve.current.delete(j), ye.current.delete(j), ee.current.delete(j));
    Fe.current = Fe.current.filter((j) => h.has(j)), on.current = new Set(Fe.current), El(T);
  }, [El]), Ya = g.useCallback(async (f, h) => {
    const T = rn(f), j = Number.parseInt(h, 10);
    if (!T || !Number.isInteger(j) || Z.current) return;
    const X = i.current;
    if (X?.connected) {
      Z.current = !0;
      try {
        await Sn(X, "game:preload_ready", {
          lobbyCode: T,
          sessionId: j
        });
      } catch (pe) {
        Z.current = !1, oe(pe.message);
      }
    }
  }, []), vs = g.useCallback(async ({ sessionId: f, lobbyCode: h, manifest: T }) => {
    _l(), M.current = !1;
    const j = xp(T);
    He.current = new Map(j.map((re) => [re.index, re])), B.current = Number.parseInt(f, 10) || null, Z.current = !1, Sl(""), ul(!1);
    const X = j.slice(0, Sp).map((re) => re.index);
    if (Rt.current = X, Pt(), X.length === 0) {
      await Ya(h, B.current);
      return;
    }
    ll(!0), cl(X);
    const pe = await Eu(X);
    if (!M.current) {
      if (!pe.ok) {
        Sl(_u(pe)), ll(!0);
        return;
      }
      ll(!1), await Ya(h, B.current);
    }
  }, [
    _u,
    cl,
    _l,
    Ya,
    Pt,
    Eu
  ]), bs = g.useCallback(async () => {
    if (M.current || Z.current) return;
    const f = s.current?.code, h = B.current, T = Rt.current;
    if (!f || !Number.isInteger(h) || !Array.isArray(T) || T.length === 0)
      return;
    ul(!0), Sl(""), ll(!0), cl(T);
    const j = await Eu(T);
    if (!M.current) {
      if (!j.ok) {
        Sl(_u(j)), ul(!1);
        return;
      }
      ul(!1), ll(!1), await Ya(f, h);
    }
  }, [_u, cl, Ya, Eu]), Ss = g.useCallback((f) => {
    const h = Number.parseInt(f, 10);
    if (!Number.isInteger(h) || h <= 0) return;
    const T = [];
    for (let j = 0; j < Ep; j += 1)
      T.push(h + j);
    cl(T), ps(T);
  }, [cl, ps]), Es = g.useCallback((f) => {
    const h = String(f || "0");
    let T = 2166136261;
    for (let j = 0; j < h.length; j += 1)
      T ^= h.charCodeAt(j), T = Math.imul(T, 16777619);
    return (T >>> 0) / 4294967295;
  }, []), _s = g.useCallback(async (f, h) => {
    const T = Te.current;
    if (Number.isFinite(T) && T >= 0) return T;
    const j = Number.isFinite(h?.sampleStartSec) ? Math.max(0, h.sampleStartSec) : 0;
    if (j > 0)
      return Te.current = j, j;
    const X = Number.isFinite(h?.sampleDurationSec) ? Math.max(1, h.sampleDurationSec) : 10, pe = Number(f?.duration), re = Number.isFinite(pe) && pe > 0 ? pe : null;
    if (!Number.isFinite(re) || re <= 0)
      return Te.current = j, j;
    const Ce = Math.floor(re - X);
    if (Ce <= 0)
      return Te.current = 0, 0;
    const ne = `${ce?.roundId || 0}:${h?.animeId || 0}:${X}`, ke = Es(ne), Et = Math.floor(ke * (Ce + 1));
    return Te.current = Et, Et;
  }, [ce?.roundId, Es]), ka = g.useCallback(async () => {
    const f = Le.current;
    if (!f) return !1;
    f.volume = Math.max(0, Math.min(1, Number(_e.current))), f.muted = !1;
    try {
      return await f.play(), bl(!1), Nn(""), !0;
    } catch (h) {
      const T = wm(h);
      return T === "autoplay_blocked" ? (bl(!0), !1) : (T !== "aborted" && Nn("Could not play solution video in this browser."), bl(!1), !1);
    }
  }, []), Al = g.useCallback(async ({ isAutoplay: f = !1 } = {}) => {
    const h = ce?.sample, T = h?.audioUrl ? ft.current.get(h.audioUrl) : null, j = h?.videoUrl ? ft.current.get(h.videoUrl) : null, X = T || te.current, pe = j || Be.current;
    if (F !== "GUESSING" || !X && !pe || !h?.audioUrl && !h?.videoUrl) return !1;
    Su(), Yt(), Ht("");
    const re = Number.isFinite(h.sampleDurationSec) ? Math.max(1, h.sampleDurationSec) : 10, Ce = Math.max(0, Math.min(1, Number(_e.current))), ne = async (At, na) => {
      if (!At) return { ok: !1, reason: "source_unavailable" };
      At.volume = Ce, At.muted = !1;
      const Nl = await _s(At, h);
      try {
        At.currentTime = Nl;
      } catch {
      }
      try {
        return await At.play(), We.current = At, zt(na), vl(!1), Ht(""), Wt(!0), me.current = window.setTimeout(() => {
          const Zn = We.current;
          Zn && (Zn.pause(), Wt(!1), We.current = null);
        }, re * 1e3), { ok: !0, reason: null };
      } catch (Zn) {
        return { ok: !1, reason: wm(Zn) };
      }
    }, ke = h?.audioUrl ? await ne(X, "audio") : { ok: !1, reason: "source_unavailable" };
    if (ke.ok) return !0;
    const Et = h?.videoUrl ? await ne(pe, "video") : { ok: !1, reason: "source_unavailable" };
    if (Et.ok) return !0;
    const _t = [ke.reason, Et.reason].filter(Boolean);
    return _t.includes("autoplay_blocked") ? (vl(!0), Ht(ss("autoplay_blocked")), !1) : (vl(!1), _t.includes("source_unavailable") ? (Ht(ss("source_unavailable")), !1) : ((!_t.includes("aborted") || !f) && Ht(ss("play_failed")), !1));
  }, [Su, F, _s, ce, Yt]), xn = g.useCallback(() => {
    ae.current && (window.clearTimeout(ae.current), ae.current = null), p.current && (window.clearTimeout(p.current), p.current = null), z.current = { roundId: null, key: "" }, _l(), Yt(), Mn(), os(null), Ln("WAITING"), Vl(null), za(null), pl([]), Bt(null), mt(null), Fn([]), hu([]), Hn([]), An([]), Pn(""), Je(null), L.current = "", H.current = null, el([]), Zl(""), Ht(""), Nn(""), vl(!1), zt(null), bl(!1), il(null), Gt(!1);
  }, [_l, Yt, Mn]), As = g.useCallback((f) => {
    const h = f || {}, T = h.phase || "WAITING", j = Array.isArray(h?.solution?.scores) ? h.solution.scores : null;
    if (Ln(T), za(h.round || null), hu(Array.isArray(h.readyUserIds) ? h.readyUserIds : []), Vl(h.endsAt || h.solution?.endsAt || null), T === "WAITING" ? Fn([]) : Array.isArray(j) && Fn(j.slice().sort(ni)), h?.round?.isSuddenDeath ? il((X) => ({
      roundIndex: Number.parseInt(h?.round?.index, 10) || X?.roundIndex || null,
      tiedUserIds: Array.isArray(X?.tiedUserIds) ? X.tiedUserIds : []
    })) : il(null), T === "ANSWERS_REVEAL") {
      pl(Array.isArray(h.answers) ? h.answers : []), Bt(null);
      return;
    }
    if (T === "SOLUTION_REVEAL") {
      pl(Array.isArray(h.answers) ? h.answers : []), Bt(h.solution || null);
      return;
    }
    T === "WAITING" && (pl([]), Bt(null));
  }, []), Xa = g.useCallback(async (f) => {
    const h = i.current;
    if (!(!h?.connected || !f))
      try {
        const T = await Sn(h, "round:sync", { lobbyCode: f });
        As(T?.state || {});
      } catch (T) {
        oe(T.message);
      }
  }, [As]), kt = g.useCallback(async () => {
    if (!Y.current) {
      Y.current = !0, ci(!0);
      try {
        const f = await ti("/game/lobbies");
        ii(Array.isArray(f.lobbies) ? f.lobbies : []);
      } finally {
        Y.current = !1, ci(!1);
      }
    }
  }, []), Au = g.useCallback(async (f, h) => {
    const T = i.current;
    if (!T) return;
    const j = {
      lobbyCode: f,
      ...h ? { inviteToken: h } : {}
    };
    if (!T.connected) {
      S.current = j, T.connect();
      return;
    }
    await Sn(T, "lobby:join", j), await Xa(f);
  }, [Xa]), Tu = g.useCallback(async (f, h = "", T = {}) => {
    const j = rn(f);
    if (!j) return oe("Lobby code is required");
    const X = !!T?.fromDirectory, pe = Date.now();
    if (!U.current && !(O.current > pe)) {
      U.current = !0, ge("join"), oe(""), pt("");
      try {
        const re = {};
        h && (re.inviteToken = h);
        const Ce = await ti(`/game/lobbies/${j}/join`, {
          method: "POST",
          body: JSON.stringify(re)
        });
        Kt(Ce.lobby), En(h || ""), xn(), cu(j, h || ""), await Au(j, h || ""), pt(`Joined lobby ${j}`);
      } catch (re) {
        O.current = Date.now() + 800, oe(qp(re?.message)), (X || Rp(re?.message)) && (ii((Ce) => Ce.filter((ne) => ne?.code !== j)), kt().catch(() => {
        }));
      } finally {
        U.current = !1, ge("");
      }
    }
  }, [xn, kt, Au]), Ic = g.useCallback(async () => {
    ge("create"), oe(""), pt("");
    try {
      const f = vt(), h = {
        ...dt,
        maxPlayers: f
      }, T = await ti("/game/lobbies", {
        method: "POST",
        body: JSON.stringify(h)
      });
      Kt(T.lobby), Ra(!1), xn(), cu(T.lobby.code, ""), await Au(T.lobby.code, ""), pt(`Created lobby ${T.lobby.code}`);
    } catch (f) {
      oe(f.message);
    } finally {
      ge("");
    }
  }, [xn, vt, dt, Au]), $c = g.useCallback(() => {
    if (!R || R.status !== "WAITING") return;
    const f = zm(R);
    Re(f), fu(String(f.maxPlayers)), Qe(!0);
  }, [R]), Wc = g.useCallback(async () => {
    if (!(!R?.code || !i.current)) {
      ge("settings"), oe("");
      try {
        const f = Vn(), h = {
          ...Ze,
          maxPlayers: f
        };
        await Sn(i.current, "lobby:update_settings", {
          lobbyCode: R.code,
          settings: h
        }), Qe(!1), pt("Lobby settings updated.");
      } catch (f) {
        oe(f.message);
      } finally {
        ge("");
      }
    }
  }, [Vn, Ze, R]), Fc = g.useCallback(async () => {
    if (R?.code) {
      ge("leave"), oe("");
      try {
        i.current?.connected && await Sn(i.current, "lobby:leave", { lobbyCode: R.code });
      } catch (f) {
        oe(f.message);
      } finally {
        Kt(null), En(""), Qe(!1), Zt(null), qt(null), cu("", ""), xn(), ge(""), kt().catch(() => {
        });
      }
    }
  }, [xn, kt, R]), Pc = g.useCallback(async () => {
    if (!(!R?.code || !i.current)) {
      ge("start"), Gt(!0), oe("");
      try {
        await Sn(i.current, "game:start", { lobbyCode: R.code }, { timeoutMs: 12e4 });
      } catch (f) {
        Gt(!1), oe(jm(f.message));
      } finally {
        ge("");
      }
    }
  }, [R]), Qn = g.useCallback(async ({ force: f = !1, guessTextOverride: h, guessAnimeIdOverride: T } = {}) => {
    if (!R?.code || !ce?.roundId || !i.current || ie && Jt.includes(ie.id)) return;
    const j = typeof h == "string" ? h : L.current, X = T !== void 0 ? T : H.current, pe = String(j || "").trim();
    let re = Number.isInteger(X) ? X : null;
    if (!Number.isInteger(re) && pe) {
      const ke = Um(pe), Et = (lt || []).find((At) => Um(At?.title) === ke), _t = Number.parseInt(Et?.id, 10);
      Number.isInteger(_t) && _t > 0 && (re = _t);
    }
    const Ce = `${pe.toLowerCase()}|${re ?? ""}`, ne = z.current;
    if (!(!f && ne.roundId === ce.roundId && ne.key === Ce))
      try {
        await Sn(i.current, "round:submit_guess", {
          lobbyCode: R.code,
          roundId: ce.roundId,
          guessText: pe,
          guessAnimeId: re
        }), z.current = {
          roundId: ce.roundId,
          key: Ce
        };
      } catch {
      }
  }, [R, Jt, ce, lt, ie]), Ts = g.useCallback((f) => {
    const h = String(f?.title || ""), T = Number.parseInt(f?.id, 10), j = Number.isInteger(T) ? T : null;
    L.current = h, H.current = j, Pn(h), Je(j), el([]), $t(!1), Tn(-1), Qn({
      force: !0,
      guessTextOverride: h,
      guessAnimeIdOverride: j
    }).catch(() => {
    });
  }, [Qn]), bi = g.useCallback(async () => {
    if (!(!R?.code || !i.current || !ie)) {
      ge("ready"), oe("");
      try {
        const f = Jt.includes(ie.id);
        f || await Qn({ force: !0 }), await Sn(i.current, "round:set_ready", { lobbyCode: R.code, ready: !f });
      } catch (f) {
        oe(f.message);
      } finally {
        ge("");
      }
    }
  }, [R, Jt, Qn, ie]), Va = g.useCallback(async () => {
    if (!(!R?.code || !i.current || !ie || Ft)) {
      ge("lobby-ready"), oe("");
      try {
        const f = Ql.includes(ie.id);
        await Sn(i.current, "lobby:set_ready", {
          lobbyCode: R.code,
          ready: !f
        });
      } catch (f) {
        oe(f.message);
      } finally {
        ge("");
      }
    }
  }, [Ft, R, Ql, ie]), er = g.useCallback((f) => {
    if (!R?.code || !ie || R.host?.id !== ie.id) return;
    const h = Number.parseInt(f?.userId, 10);
    if (!Number.isInteger(h) || h === ie?.id) return;
    const T = f?.displayName || `User ${h}`;
    Zt(null), qt({
      userId: h,
      displayName: T
    });
  }, [R, ie]), Ns = g.useCallback((f) => {
    if (!R?.code || !ie || R.host?.id !== ie.id) return;
    const h = Number.parseInt(f?.userId, 10);
    if (!Number.isInteger(h) || h === ie?.id) return;
    const T = f?.displayName || `User ${h}`;
    qt(null), Zt({
      userId: h,
      displayName: T
    });
  }, [R, ie]), Ms = g.useCallback(async () => {
    if (!(!R?.code || !i.current || !Qt) && !V.current) {
      V.current = !0, ge("promote"), oe("");
      try {
        await Sn(i.current, "lobby:promote", {
          lobbyCode: R.code,
          userId: Qt.userId
        }), pt(`${Qt.displayName} is now the host.`), Zt(null);
      } catch (f) {
        oe(f.message);
      } finally {
        V.current = !1, ge("");
      }
    }
  }, [R, Qt]), xs = g.useCallback(async () => {
    if (!(!R?.code || !i.current || !jt) && !$.current) {
      $.current = !0, ge("kick"), oe("");
      try {
        await Sn(i.current, "lobby:kick", {
          lobbyCode: R.code,
          userId: jt.userId
        }), pt(`${jt.displayName} was kicked from the lobby.`), qt(null);
      } catch (f) {
        oe(f.message);
      } finally {
        $.current = !1, ge("");
      }
    }
  }, [jt, R]), Cs = g.useCallback(async () => {
    if (R?.code) {
      ge("invite"), oe(""), pt("");
      try {
        const f = await ti(`/game/lobbies/${R.code}/invite`);
        f.inviteToken ? (En(f.inviteToken), cu(R.code, f.inviteToken)) : (En(""), cu(R.code, "")), navigator.clipboard?.writeText ? (await navigator.clipboard.writeText(f.inviteUrl), pt("Invite link copied")) : pt(f.inviteUrl);
      } catch (f) {
        oe(f.message);
      } finally {
        ge("");
      }
    }
  }, [R]);
  g.useEffect(() => {
    if (!o) return Mm();
    const f = vp(o);
    i.current = f;
    const h = async () => {
      Wn(!0), oe("");
      try {
        S.current ? (await Sn(f, "lobby:join", S.current), await Xa(S.current.lobbyCode), S.current = null) : s.current?.code ? (await Sn(f, "lobby:join", {
          lobbyCode: s.current.code,
          ...r.current ? { inviteToken: r.current } : {}
        }), await Xa(s.current.code)) : kt().catch(() => {
        });
      } catch (G) {
        oe(G.message);
      }
    }, T = () => Wn(!1), j = (G) => {
      const fe = String(G?.code || ""), Ie = Yl(G?.message);
      if (fe === "game_start_failed") {
        Gt(!1), oe(jm(Ie));
        return;
      }
      oe(Ie || "Realtime error");
    }, X = ({ lobby: G }) => {
      G && (Kt(G), G.status !== "WAITING" && (Hn([]), An([]), Gt(!1)));
    }, pe = (G) => {
      const fe = rn(G?.lobbyCode), Ie = rn(s.current?.code);
      fe && Ie && fe !== Ie || Gt(!0);
    }, re = ({ sessionId: G, config: fe, preloadManifest: Ie, lobby: Tt }) => {
      Gt(!1), Tt && Kt(Tt), os({ sessionId: G, ...fe || {} }), mt(null), Ln("PENDING"), il(null), Fn(
        (s.current?.players || []).map((nn) => ({
          userId: nn.userId,
          displayName: nn.displayName,
          score: 0
        })).sort(ni)
      ), Hn([]), An([]), s.current?.code && vs({
        sessionId: G,
        lobbyCode: s.current.code,
        manifest: Ie
      }).catch(() => {
      });
    }, Ce = (G) => {
      const fe = rn(G?.lobbyCode), Ie = rn(s.current?.code);
      fe && Ie && fe !== Ie || (xn(), Kt((Tt) => Tt && { ...Tt, status: "WAITING" }));
    }, ne = (G) => {
      Yt(), Mn(), ll(!1), Sl(""), ul(!1), Ln("GUESSING"), Vl(G?.endsAt || null), za(G || null), pl([]), Bt(null), mt(null), hu([]), Pn(""), Je(null), L.current = "", H.current = null, el([]), Zl(""), Ht(""), Nn(""), vl(!1), zt(null), bl(!1), z.current = {
        roundId: Number.isInteger(G?.roundId) ? G.roundId : null,
        key: ""
      }, Te.current = null, G?.isSuddenDeath ? il((fe) => ({
        roundIndex: Number.parseInt(G?.index, 10) || fe?.roundIndex || null,
        tiedUserIds: Array.isArray(fe?.tiedUserIds) ? fe.tiedUserIds : []
      })) : il(null), Ss(G?.index);
    }, ke = (G) => {
      Ln("ANSWERS_REVEAL"), Vl(G?.endsAt || null), pl(Array.isArray(G?.answers) ? G.answers : []);
    }, Et = (G) => {
      Yt(), Ln("SOLUTION_REVEAL"), Vl(G?.endsAt || null), Bt(G || null), Array.isArray(G?.scores) && Fn(G.scores.slice().sort(ni)), Ht(""), Nn(""), bl(!1);
    }, _t = (G) => {
      _l(), Yt(), Mn(), Ln("FINISHED"), Gt(!1), Vl(null), Ht(""), Nn(""), mt(G || null), Kt((fe) => fe && { ...fe, status: "WAITING" }), Array.isArray(G?.finalScores) && Fn(G.finalScores.slice().sort(ni)), il(null), Hn([]), An([]);
    }, At = (G) => {
      const fe = Array.isArray(G?.tiedUserIds) ? G.tiedUserIds.filter((nn) => Number.isInteger(nn)) : [], Ie = Number.parseInt(G?.roundIndex, 10);
      il({
        roundIndex: Number.isInteger(Ie) ? Ie : null,
        tiedUserIds: fe
      });
      const Tt = fe.map((nn) => (s.current?.players || []).find((rl) => rl.userId === nn)?.displayName || null).filter(Boolean);
      Tt.length > 0 ? pt(`Sudden Death started: ${Tt.join(", ")} are tied for first.`) : pt("Sudden Death started: tie for first place.");
    }, na = (G) => {
      hu(Array.isArray(G?.readyUserIds) ? G.readyUserIds : []);
    }, Nl = (G) => {
      Hn(Array.isArray(G?.readyUserIds) ? G.readyUserIds : []), An(Array.isArray(G?.requiredUserIds) ? G.requiredUserIds : []);
    }, Zn = (G) => {
      const fe = rn(G?.lobbyCode), Ie = rn(s.current?.code);
      if (Ie && fe && fe !== Ie) return;
      const Tt = Number.parseInt(G?.cooldownUntil, 10);
      let nn = "You were kicked from the lobby.";
      if (Number.isFinite(Tt)) {
        const Ia = Tt - Date.now();
        Ia > 0 && (nn = `You were kicked from the lobby. Rejoin available in about ${Math.max(1, Math.ceil(Ia / 1e3))}s.`);
      }
      oe(nn), Kt(null), En(""), Qe(!1), Zt(null), qt(null), cu("", ""), xn(), kt().catch(() => {
      });
    }, Ru = (G) => {
      const fe = rn(G?.lobbyCode), Ie = rn(s.current?.code);
      Ie && fe && fe !== Ie || (oe(Op(G?.reason)), Kt(null), En(""), Qe(!1), Zt(null), qt(null), cu("", ""), xn(), kt().catch(() => {
      }));
    }, tn = () => {
      s.current?.code || (w.current && window.clearTimeout(w.current), w.current = window.setTimeout(() => {
        w.current = null, kt().catch(() => {
        });
      }, 150));
    }, Ja = (G) => {
      const fe = G?.status || null;
      !fe || typeof fe != "object" || (kn(fe), mi(""));
    };
    return f.on("connect", h), f.on("disconnect", T), f.on("error", j), f.on("lobby:state", X), f.on("lobby:directory_changed", tn), f.on("game:starting", pe), f.on("game:started", re), f.on("game:start_cancelled", Ce), f.on("round:started", ne), f.on("round:answers_reveal", ke), f.on("round:solution", Et), f.on("game:finished", _t), f.on("game:sudden_death", At), f.on("round:ready_state", na), f.on("lobby:ready_state", Nl), f.on("lobby:kicked", Zn), f.on("lobby:terminated", Ru), f.on("media:source_status", Ja), f.connect(), () => {
      f.off("connect", h), f.off("disconnect", T), f.off("error", j), f.off("lobby:state", X), f.off("lobby:directory_changed", tn), f.off("game:starting", pe), f.off("game:started", re), f.off("game:start_cancelled", Ce), f.off("round:started", ne), f.off("round:answers_reveal", ke), f.off("round:solution", Et), f.off("game:finished", _t), f.off("game:sudden_death", At), f.off("round:ready_state", na), f.off("lobby:ready_state", Nl), f.off("lobby:kicked", Zn), f.off("lobby:terminated", Ru), f.off("media:source_status", Ja), w.current && (window.clearTimeout(w.current), w.current = null), bp();
    };
  }, [vs, xn, kt, Ss, Xa, _l, Yt, Mn, o]), g.useEffect(() => {
    if (!o) return;
    let f = !0;
    return (async () => {
      try {
        const h = await ti("/auth/me");
        if (!f) return;
        ai(h), await kt();
      } catch {
        Mm();
        return;
      } finally {
        f && se(!1);
      }
    })(), () => {
      f = !1;
    };
  }, [kt, o]), g.useEffect(() => {
    if (W || !ie || q.current) return;
    q.current = !0;
    const f = new URLSearchParams(window.location.search), h = f.get("i") || f.get("inviteToken") || "", T = Tp(window.location.pathname) || rn(f.get("lobby")) || Np(h);
    T && (qa(T), En(h), Tu(T, h).catch(() => {
    }));
  }, [Tu, W, ie]), g.useEffect(() => {
    if (!_n) return ri("00:00");
    const f = () => ri(Mp(new Date(_n).getTime() - Date.now()));
    f();
    const h = window.setInterval(f, 250);
    return () => window.clearInterval(h);
  }, [_n]), g.useEffect(() => {
    if (F !== "GUESSING") {
      Ae.current += 1, el([]), Tn(-1), Zl("");
      return;
    }
    const f = hn.trim();
    if (f.length < 2) {
      Ae.current += 1, el([]), Tn(-1), Zl("");
      return;
    }
    const h = ++Ae.current, T = window.setTimeout(async () => {
      try {
        const j = await ti("/game/search", {
          method: "POST",
          body: JSON.stringify({ query: f, limit: 8 })
        });
        if (Ae.current !== h) return;
        el(Array.isArray(j.results) ? j.results : []), Zl("");
      } catch (j) {
        if (Ae.current !== h) return;
        el([]), Zl(Cp(j?.message));
      }
    }, 120);
    return () => window.clearTimeout(T);
  }, [hn, F]), g.useEffect(() => {
    const f = !!(ie && Jt.includes(ie.id));
    if (F !== "GUESSING" || !R?.code || !ce?.roundId || !$n || f) {
      ae.current && (window.clearTimeout(ae.current), ae.current = null);
      return;
    }
    return ae.current && (window.clearTimeout(ae.current), ae.current = null), ae.current = window.setTimeout(() => {
      Qn().catch(() => {
      });
    }, 420), () => {
      ae.current && (window.clearTimeout(ae.current), ae.current = null);
    };
  }, [Gn, hn, R?.code, F, Jt, ce?.roundId, $n, Qn, ie]), g.useEffect(() => {
    const f = !!(ie && Jt.includes(ie.id));
    if (F !== "GUESSING" || !_n || !R?.code || !ce?.roundId || !$n || f) {
      p.current && (window.clearTimeout(p.current), p.current = null);
      return;
    }
    const h = new Date(_n).getTime() - Date.now() - 120;
    if (Number.isFinite(h)) {
      if (h <= 0) {
        Qn({ force: !0 }).catch(() => {
        });
        return;
      }
      return p.current && (window.clearTimeout(p.current), p.current = null), p.current = window.setTimeout(() => {
        Qn({ force: !0 }).catch(() => {
        }), p.current = null;
      }, h), () => {
        p.current && (window.clearTimeout(p.current), p.current = null);
      };
    }
  }, [R?.code, F, _n, Jt, ce?.roundId, $n, Qn, ie]), g.useEffect(() => {
    if (!!!(ce?.sample?.audioUrl || ce?.sample?.videoUrl)) {
      vl(!1), Yt();
      return;
    }
    if (F !== "GUESSING") {
      (F === "SOLUTION_REVEAL" || F === "WAITING" || F === "FINISHED" || F === "PENDING") && (vl(!1), Yt());
      return;
    }
    let h = !1;
    const T = window.setTimeout(() => {
      h || Al({ isAutoplay: !0 }).catch(() => {
      });
    }, 0);
    return () => {
      h = !0, window.clearTimeout(T);
    };
  }, [F, Al, ce?.roundId, ce?.sample?.audioUrl, ce?.sample?.videoUrl, Yt]), g.useEffect(() => {
    Te.current = null;
  }, [ce?.roundId]), g.useEffect(() => {
    if (!mu || F !== "GUESSING") return;
    const f = () => {
      Al({ isAutoplay: !1 }).catch(() => {
      });
    };
    return window.addEventListener("pointerdown", f), window.addEventListener("keydown", f), () => {
      window.removeEventListener("pointerdown", f), window.removeEventListener("keydown", f);
    };
  }, [F, Al, mu]), g.useEffect(() => {
    if (F !== "SOLUTION_REVEAL" || !ht?.video) {
      bl(!1), Nn(""), Mn();
      return;
    }
    let f = !1;
    const h = window.setTimeout(() => {
      f || ka().catch(() => {
      });
    }, 0);
    return () => {
      f = !0, window.clearTimeout(h), Mn();
    };
  }, [F, ka, ht?.video, Mn]), g.useEffect(() => {
    if (!yu || F !== "SOLUTION_REVEAL") return;
    const f = () => {
      ka().catch(() => {
      });
    };
    return window.addEventListener("pointerdown", f), window.addEventListener("keydown", f), () => {
      window.removeEventListener("pointerdown", f), window.removeEventListener("keydown", f);
    };
  }, [F, ka, yu]), g.useEffect(() => {
    const f = Math.max(0, Math.min(1, Number(Yn))), h = (T) => {
      T && (T.volume = f);
    };
    h(te.current), h(Be.current), h(Le.current), h(We.current);
    for (const T of ft.current.values())
      h(T);
  }, [Yn, ce?.roundId, ht?.video]);
  const Nu = g.useMemo(() => !!(R && ie && R.host?.id === ie.id), [R, ie]), Il = g.useMemo(() => !!(ie && Jt.includes(ie.id)), [Jt, ie]), $l = g.useMemo(() => {
    const f = Array.isArray(Da) ? Da.filter((h) => Number.isInteger(h)) : [];
    return f.length > 0 ? f : (R?.players || []).map((h) => h.userId).filter((h) => Number.isInteger(h));
  }, [R, Da]), Wl = g.useMemo(() => {
    const f = new Set(Array.isArray(Ql) ? Ql : []);
    return $l.filter((h) => f.has(h));
  }, [Ql, $l]), tr = g.useMemo(() => !!(ie && Wl.includes(ie.id)), [ie, Wl]), Si = g.useMemo(() => !R || R.status !== "WAITING" ? !1 : $l.length > 0 && Wl.length === $l.length, [R, Wl.length, $l.length]), Rs = g.useMemo(() => !!(ce?.sample?.audioUrl || ce?.sample?.videoUrl), [ce]), en = g.useMemo(() => F === "GUESSING", [F]), Fl = g.useMemo(() => F === "ANSWERS_REVEAL", [F]), Mu = g.useMemo(() => F === "SOLUTION_REVEAL", [F]), Tl = g.useMemo(() => !!(Mu && ht), [Mu, ht]), qs = g.useMemo(
    () => Fl || Mu,
    [Fl, Mu]
  ), Os = g.useMemo(
    () => !!Tl,
    [Tl]
  );
  g.useMemo(() => {
    const f = Number.parseInt(ce?.sample?.sampleDurationSec, 10);
    return !Number.isFinite(f) || f <= 0 ? "Sample ready" : `${f}s preview`;
  }, [ce]);
  const Ei = g.useMemo(() => `${Math.round(Yn * 100)}%`, [Yn]), Pl = g.useMemo(() => {
    if (!$n)
      return { label: "Disconnected", tone: "down" };
    if (!at)
      return { label: "Checking", tone: "neutral" };
    if (!at.ok)
      return { label: "Down", tone: "down" };
    const f = Number(at.latencyMs);
    return Number.isFinite(f) && f >= 1200 ? { label: "Slow", tone: "warn" } : { label: "Healthy", tone: "ok" };
  }, [at, $n]), _i = g.useMemo(() => {
    const f = Number(at?.latencyMs);
    return Number.isFinite(f) ? `${Math.round(f)} ms` : "n/a";
  }, [at]), Ai = g.useMemo(() => {
    if (!at?.checkedAt) return "n/a";
    const f = new Date(at.checkedAt);
    return Number.isNaN(f.getTime()) ? "n/a" : f.toLocaleTimeString();
  }, [at]), zs = g.useMemo(() => {
    const f = [
      `Provider: ${at?.provider || "AnimeThemes"}`,
      `State: ${Pl.label}`,
      `Latency: ${_i}`,
      `Last check: ${Ai}${at?.cached ? " (cached)" : ""}`
    ];
    return at?.ok === !1 && at?.error && f.push(`Error: ${at.error}`), wa && f.push(`Client: ${wa}`), f;
  }, [Ai, wa, Pl.label, _i, at]), ea = g.useMemo(() => Ke && Array.isArray(Ke.finalScores) && Ke.finalScores.length > 0 ? Ke : R?.lastMatchResult && Array.isArray(R.lastMatchResult.finalScores) && R.lastMatchResult.finalScores.length > 0 ? R.lastMatchResult : null, [Ke, R?.lastMatchResult]), Qa = g.useMemo(() => (Array.isArray(ea?.finalScores) && ea.finalScores.length > 0 ? ea.finalScores : dn).slice().sort(ni), [ea?.finalScores, dn]), Ds = g.useMemo(() => {
    const f = Number.parseInt(ea?.winner?.userId, 10);
    return Number.isInteger(f) ? Jl(f) : Qa[0]?.displayName || "";
  }, [ea?.winner?.userId, Qa, Jl]), Us = g.useMemo(
    () => !!R && Qa.length > 0 && (F === "WAITING" || F === "FINISHED"),
    [R, F, Qa.length]
  ), Za = g.useMemo(
    () => !!R && F !== "WAITING" && F !== "FINISHED",
    [R, F]
  ), St = g.useMemo(
    () => !!R && (F === "WAITING" || F === "FINISHED"),
    [R, F]
  ), Ka = g.useMemo(() => {
    const f = /* @__PURE__ */ new Map();
    for (const h of du || [])
      Number.isInteger(h?.userId) && f.set(h.userId, h);
    return f;
  }, [du]), xu = g.useMemo(() => (Array.isArray(dn) && dn.length > 0 ? dn : (R?.players || []).map((h) => ({
    userId: h.userId,
    displayName: h.displayName,
    score: 0
  }))).slice().sort(ni), [R, dn]), Ti = g.useMemo(() => {
    const f = Math.max(1, xu.length);
    return Math.max(118, Math.min(300, 92 + f * 24));
  }, [xu.length]), js = g.useMemo(() => (R?.players || []).filter((f) => Number.isInteger(f?.userId)).map((f) => ({
    userId: f.userId,
    displayName: String(f?.displayName || `Player ${f.userId}`)
  })), [R]), ws = g.useCallback((f) => {
    const h = Math.max(0, Math.min(1, Number.parseFloat(f.target.value))), T = Number.isFinite(h) ? h : 0.8;
    _e.current = T, ds(T);
  }, []), Cu = g.useMemo(() => {
    const f = String(xa || "").trim().toLowerCase();
    return f ? ui.filter((h) => {
      const T = String(h?.code || "").toLowerCase(), j = String(h?.name || "").toLowerCase();
      return T.includes(f) || j.includes(f);
    }) : ui;
  }, [ui, xa]), nr = g.useMemo(
    () => dt.sourceMode !== "POPULAR",
    [dt.sourceMode]
  ), ta = g.useMemo(
    () => Ze.sourceMode !== "POPULAR",
    [Ze.sourceMode]
  ), Ni = g.useMemo(() => {
    if (!R) return [];
    const f = [
      `Max ${R.maxPlayers} players`,
      `${R.roundCount} rounds`,
      `${R.guessSeconds}s guess`,
      Lc[R.sourceMode]?.label || R.sourceMode,
      Hc[R.selectionMode]?.label || R.selectionMode,
      Gc[R.themeMode]?.label || R.themeMode
    ];
    return R.sourceMode !== "POPULAR" && (f.push(`Anime score ${R.animeScoreMin ?? 1}-${R.animeScoreMax ?? 10}`), f.push(`Player score ${R.playerScoreMin ?? 1}-${R.playerScoreMax ?? 10}`)), f;
  }, [R]);
  return W ? /* @__PURE__ */ m.jsx("section", { className: "gmq-shell", children: "Loading game..." }) : /* @__PURE__ */ m.jsxs("section", { className: "gmq-shell", children: [
    /* @__PURE__ */ m.jsxs("header", { className: "gmq-header", children: [
      /* @__PURE__ */ m.jsxs("div", { children: [
        Za ? null : /* @__PURE__ */ m.jsx("h1", { children: "Anime Music Quiz" }),
        /* @__PURE__ */ m.jsxs("p", { className: "gmq-muted", children: [
          "Socket: ",
          $n ? "Connected" : "Disconnected",
          R ? ` | Lobby ${R.code}` : "",
          Xl?.sessionId ? ` | Session ${Xl.sessionId}` : ""
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "gmq-header-right", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-connection-indicator", role: "status", "aria-label": `Media source ${Pl.label}`, children: [
          /* @__PURE__ */ m.jsx("span", { className: `gmq-connection-dot gmq-status-dot-${Pl.tone}` }),
          /* @__PURE__ */ m.jsx("div", { className: "gmq-connection-tooltip", children: zs.map((f) => /* @__PURE__ */ m.jsx("p", { children: f }, f)) })
        ] }),
        R ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-actions", children: [
          /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: Cs, disabled: J === "invite", children: "Copy Invite" }),
          /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-danger", onClick: Fc, disabled: J === "leave", children: "Leave" })
        ] }) : null
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "gmq-toast-viewport", "aria-live": "polite", "aria-atomic": "false", children: [
      we ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-alert gmq-alert-error gmq-toast", role: "alert", children: [
        /* @__PURE__ */ m.jsx("p", { children: we }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-toast-close", onClick: () => oe(""), "aria-label": "Dismiss error", children: "x" })
      ] }) : null,
      gl ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-alert gmq-alert-info gmq-toast", role: "status", children: [
        /* @__PURE__ */ m.jsx("p", { children: gl }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-toast-close", onClick: () => pt(""), "aria-label": "Dismiss message", children: "x" })
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
            onClick: Ms,
            disabled: J === "promote",
            children: J === "promote" ? "Promoting..." : "Promote"
          }
        )
      ] })
    ] }) }) : null,
    jt ? /* @__PURE__ */ m.jsx("div", { className: "gmq-modal-backdrop", onClick: () => qt(null), children: /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-modal-card gmq-modal-confirm-card", onClick: (f) => f.stopPropagation(), children: [
      /* @__PURE__ */ m.jsx("div", { className: "gmq-modal-header", children: /* @__PURE__ */ m.jsx("h2", { children: "Kick Player" }) }),
      /* @__PURE__ */ m.jsxs("p", { children: [
        "Kick ",
        /* @__PURE__ */ m.jsx("strong", { children: jt.displayName }),
        " from this lobby?"
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "gmq-modal-actions", children: [
        /* @__PURE__ */ m.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-secondary",
            onClick: () => qt(null),
            disabled: J === "kick",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ m.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-danger",
            onClick: xs,
            disabled: J === "kick",
            children: J === "kick" ? "Kicking..." : "Kick Player"
          }
        )
      ] })
    ] }) }) : null,
    kl && R && R.status === "WAITING" && Nu ? /* @__PURE__ */ m.jsx("div", { className: "gmq-modal-backdrop", onClick: () => Qe(!1), children: /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-modal-card", onClick: (f) => f.stopPropagation(), children: [
      /* @__PURE__ */ m.jsxs("div", { className: "gmq-modal-header", children: [
        /* @__PURE__ */ m.jsx("h2", { children: "Match Settings" }),
        /* @__PURE__ */ m.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-secondary gmq-btn-modal-close",
            onClick: () => Qe(!1),
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
              value: Ze.name,
              onChange: (f) => Re((h) => ({ ...h, name: f.target.value })),
              placeholder: "Lobby name"
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("label", { className: "gmq-checkbox gmq-checkbox-inline", children: [
          /* @__PURE__ */ m.jsx(
            "input",
            {
              type: "checkbox",
              checked: Ze.isPrivate,
              onChange: (f) => Re((h) => ({ ...h, isPrivate: f.target.checked }))
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
              value: ou,
              onChange: (f) => gi(f.target.value),
              onBlur: Vn
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
              value: Ze.roundCount,
              onChange: (f) => Re((h) => ({ ...h, roundCount: Number(f.target.value || 10) }))
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
              value: Ze.guessSeconds,
              onChange: (f) => Re((h) => ({ ...h, guessSeconds: Number(f.target.value || 20) }))
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
              value: Ze.sourceMode,
              onChange: (f) => Re((h) => ({ ...h, sourceMode: f.target.value })),
              children: lf.map((f) => /* @__PURE__ */ m.jsx("option", { value: f, children: Lc[f]?.label || f }, f))
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
          /* @__PURE__ */ m.jsx("label", { htmlFor: "edit-selection-mode", children: "Selection Style" }),
          /* @__PURE__ */ m.jsx(
            "select",
            {
              id: "edit-selection-mode",
              value: Ze.selectionMode,
              onChange: (f) => Re((h) => ({ ...h, selectionMode: f.target.value })),
              children: af.map((f) => /* @__PURE__ */ m.jsx("option", { value: f, children: Hc[f]?.label || f }, f))
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
          /* @__PURE__ */ m.jsx("label", { htmlFor: "edit-theme-mode", children: "Song Types" }),
          /* @__PURE__ */ m.jsx(
            "select",
            {
              id: "edit-theme-mode",
              value: Ze.themeMode,
              onChange: (f) => Re((h) => ({ ...h, themeMode: f.target.value })),
              children: uf.map((f) => /* @__PURE__ */ m.jsx("option", { value: f, children: Gc[f]?.label || f }, f))
            }
          )
        ] })
      ] }),
      ta ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-grid gmq-field-grid-2", children: [
        /* @__PURE__ */ m.jsx(
          Yc,
          {
            label: "Anime MAL Score",
            minValue: Ze.animeScoreMin,
            maxValue: Ze.animeScoreMax,
            onMinChange: hs,
            onMaxChange: vu
          }
        ),
        /* @__PURE__ */ m.jsx(
          Yc,
          {
            label: "Player MAL Score",
            minValue: Ze.playerScoreMin,
            maxValue: Ze.playerScoreMax,
            onMinChange: bu,
            onMaxChange: ms,
            hint: "Used for MAL-list entries (MAL_ONLY, and MAL portion of HYBRID)."
          }
        )
      ] }) : null,
      /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          className: "gmq-btn gmq-btn-primary",
          onClick: Wc,
          disabled: J === "settings",
          children: J === "settings" ? "Saving..." : "Save Settings"
        }
      )
    ] }) }) : null,
    R ? /* @__PURE__ */ m.jsxs("div", { className: `gmq-grid gmq-grid-match ${Za ? "gmq-grid-match-live" : "gmq-grid-match-idle"} ${Za && !St ? "gmq-grid-match-round-only" : ""} ${!Za && St && Us ? "gmq-grid-match-idle-with-standings" : ""}`, children: [
      St ? /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-card-lobby", children: [
        /* @__PURE__ */ m.jsxs("h2", { children: [
          "Lobby ",
          R.code,
          /* @__PURE__ */ m.jsx("span", { className: `gmq-lobby-visibility ${R.isPrivate ? "private" : "public"}`, children: R.isPrivate ? "Private" : "Public" })
        ] }),
        /* @__PURE__ */ m.jsxs("p", { className: "gmq-muted", children: [
          R.name || "Untitled",
          " | ",
          R.playerCount,
          "/",
          R.maxPlayers,
          " players"
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-stack gmq-lobby-settings-block", children: [
          /* @__PURE__ */ m.jsx("strong", { children: "Current Match Settings" }),
          /* @__PURE__ */ m.jsx("div", { className: "gmq-lobby-settings", children: Ni.map((f) => /* @__PURE__ */ m.jsx("span", { children: f }, f)) })
        ] }),
        /* @__PURE__ */ m.jsx("ul", { className: "gmq-player-list", children: (R.players || []).map((f) => /* @__PURE__ */ m.jsxs("li", { children: [
          /* @__PURE__ */ m.jsxs("span", { className: "gmq-player-name", children: [
            /* @__PURE__ */ m.jsxs("span", { children: [
              f.displayName,
              f.userId === R.host?.id ? " (Host)" : "",
              f.isConnected ? "" : " (offline)"
            ] }),
            f.hasMalConnected ? /* @__PURE__ */ m.jsx(
              "span",
              {
                className: "gmq-mal-badge",
                onMouseEnter: yi,
                onMouseMove: yi,
                onMouseLeave: La,
                children: "MAL"
              }
            ) : null
          ] }),
          R.status === "WAITING" ? /* @__PURE__ */ m.jsxs("span", { className: "gmq-player-row-actions", children: [
            Nu && ie && f.userId !== ie.id && !Ft ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  type: "button",
                  className: "gmq-btn gmq-btn-secondary gmq-btn-kick",
                  onClick: () => Ns(f),
                  disabled: J === "promote" || J === "kick",
                  children: "Promote"
                }
              ),
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  type: "button",
                  className: "gmq-btn gmq-btn-danger gmq-btn-kick",
                  onClick: () => er(f),
                  disabled: J === "kick" || J === "promote",
                  children: "Kick"
                }
              )
            ] }) : null,
            /* @__PURE__ */ m.jsx("strong", { children: Wl.includes(f.userId) ? "Ready" : "Not Ready" })
          ] }) : null,
          F === "GUESSING" ? /* @__PURE__ */ m.jsx("strong", { children: Jt.includes(f.userId) ? "Ready" : "Thinking" }) : null
        ] }, f.userId)) }),
        R.status === "WAITING" ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-actions", children: [
            Ft ? null : /* @__PURE__ */ m.jsx(
              "button",
              {
                type: "button",
                className: "gmq-btn gmq-btn-secondary",
                onClick: Va,
                disabled: J === "lobby-ready",
                children: tr ? "Not Ready" : "Ready Up"
              }
            ),
            /* @__PURE__ */ m.jsxs("p", { className: "gmq-muted", children: [
              "Ready ",
              Wl.length,
              "/",
              $l.length
            ] })
          ] }),
          Ft ? /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Starting game..." }) : Nu ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
            /* @__PURE__ */ m.jsx(
              "button",
              {
                type: "button",
                className: "gmq-btn gmq-btn-secondary",
                onClick: $c,
                disabled: J === "settings",
                children: "Match Settings"
              }
            ),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                type: "button",
                className: "gmq-btn gmq-btn-primary",
                onClick: Pc,
                disabled: J === "start" || !Si,
                children: "Start Game"
              }
            ),
            Si ? null : /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "All players must be ready before start." })
          ] }) : /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Waiting for host to start." })
        ] }) : null
      ] }) : null,
      Us ? /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-card-standings-latest", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-postgame-header", children: [
          /* @__PURE__ */ m.jsx("h2", { children: "Latest Standings" }),
          Ds ? /* @__PURE__ */ m.jsxs("p", { className: "gmq-postgame-winner", children: [
            "Winner: ",
            Ds
          ] }) : null
        ] }),
        /* @__PURE__ */ m.jsx("ol", { className: "gmq-postgame-list", children: Qa.map((f, h) => /* @__PURE__ */ m.jsxs("li", { className: `gmq-postgame-row${h === 0 ? " gmq-postgame-row-winner" : ""}`, children: [
          /* @__PURE__ */ m.jsxs("span", { children: [
            h + 1,
            ". ",
            f.displayName
          ] }),
          /* @__PURE__ */ m.jsx("strong", { children: f.score || 0 })
        ] }, `${f.userId || "row"}-${h}`)) })
      ] }) : null,
      Za ? /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-card-round gmq-match-shell", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-match-round-pill", children: [
          /* @__PURE__ */ m.jsx("h2", { children: ce?.isSuddenDeath ? "Sudden Death" : `Round ${ce?.index || "-"}/${ce?.totalRounds || "-"}` }),
          /* @__PURE__ */ m.jsx("p", { className: "gmq-round-phase", children: fs })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-match-stage", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-match-grid gmq-match-main-row", children: [
            /* @__PURE__ */ m.jsxs(
              "section",
              {
                className: "gmq-match-panel gmq-standings-panel",
                style: { minHeight: `${Ti}px`, maxHeight: `${Ti}px` },
                children: [
                  /* @__PURE__ */ m.jsx("h3", { children: "Standings" }),
                  /* @__PURE__ */ m.jsx("ul", { className: "gmq-score-list", children: xu.map((f) => /* @__PURE__ */ m.jsxs("li", { className: "gmq-score-row", children: [
                    /* @__PURE__ */ m.jsx("span", { children: f.displayName }),
                    /* @__PURE__ */ m.jsx("strong", { children: f.score || 0 })
                  ] }, f.userId)) })
                ]
              }
            ),
            /* @__PURE__ */ m.jsxs("section", { className: "gmq-match-center-column", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "gmq-match-panel gmq-video-panel", children: [
                /* @__PURE__ */ m.jsx("h3", { children: "Video" }),
                ce?.sample?.audioUrl ? /* @__PURE__ */ m.jsx(
                  "audio",
                  {
                    ref: te,
                    className: "gmq-hidden-media",
                    src: ce.sample.audioUrl,
                    preload: "auto",
                    onPlay: () => Wt(!0),
                    onPause: () => Wt(!1),
                    onEnded: () => Wt(!1),
                    onError: () => Ht(ss("source_unavailable"))
                  },
                  `audio-${ce.roundId}`
                ) : null,
                ce?.sample?.videoUrl ? /* @__PURE__ */ m.jsx(
                  "video",
                  {
                    ref: Be,
                    className: "gmq-hidden-media",
                    src: ce.sample.videoUrl,
                    preload: "auto",
                    playsInline: !0,
                    onPlay: () => Wt(!0),
                    onPause: () => Wt(!1),
                    onEnded: () => Wt(!1),
                    onError: () => Ht(ss("source_unavailable"))
                  },
                  `video-${ce.roundId}`
                ) : null,
                Tl ? ht.video ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-solution-video-wrap", children: [
                  /* @__PURE__ */ m.jsx(
                    "video",
                    {
                      ref: Le,
                      className: "gmq-solution-video",
                      src: ht.video,
                      preload: "auto",
                      controls: !0,
                      playsInline: !0,
                      onError: () => Nn("Could not play solution video in this browser.")
                    },
                    `solution-${ce?.roundId || ht.correctAnime?.animeId || "video"}`
                  ),
                  yu ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-stack", children: [
                    /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
                    /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => ka().catch(() => {
                    }), children: "Play solution video" })
                  ] }) : null,
                  fi ? /* @__PURE__ */ m.jsx("p", { className: "gmq-muted gmq-muted-warning", children: fi }) : null
                ] }) : /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Solution video is unavailable for this round." }) : /* @__PURE__ */ m.jsx("div", { className: "gmq-video-placeholder", children: /* @__PURE__ */ m.jsx("span", { children: "Video hidden until solution reveal" }) }),
                F === "PENDING" && Kl ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-stack", children: [
                  /* @__PURE__ */ m.jsx("p", { children: "Preparing media cache before round 1..." }),
                  /* @__PURE__ */ m.jsxs("p", { className: "gmq-muted", children: [
                    "Ready ",
                    ja.ready,
                    "/",
                    ja.total,
                    ja.failed > 0 ? ` | Failed ${ja.failed}` : ""
                  ] }),
                  di ? /* @__PURE__ */ m.jsx("p", { className: "gmq-muted gmq-muted-warning", children: di }) : null,
                  di ? /* @__PURE__ */ m.jsx(
                    "button",
                    {
                      type: "button",
                      className: "gmq-btn gmq-btn-secondary",
                      onClick: () => bs().catch(() => {
                      }),
                      disabled: hi,
                      children: hi ? "Retrying..." : "Retry preload"
                    }
                  ) : null
                ] }) : null,
                en ? Rs ? mu ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-stack", children: [
                  /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
                  /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Al({ isAutoplay: !1 }).catch(() => {
                  }), children: "Play sample" })
                ] }) : null : /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Sample audio is unavailable for this round." }) : null,
                Lt ? /* @__PURE__ */ m.jsx("p", { className: "gmq-muted gmq-muted-warning", children: Lt }) : null,
                /* @__PURE__ */ m.jsxs("label", { className: "gmq-volume-row gmq-volume-row-compact gmq-video-volume", children: [
                  /* @__PURE__ */ m.jsxs("span", { children: [
                    "Volume ",
                    Ei
                  ] }),
                  /* @__PURE__ */ m.jsx(
                    "input",
                    {
                      className: "gmq-volume-slider-small",
                      type: "range",
                      min: "0",
                      max: "1",
                      step: "0.01",
                      value: Yn,
                      onChange: ws
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
                        ref: $e,
                        value: hn,
                        disabled: !en,
                        onChange: (f) => {
                          const h = f.target.value;
                          L.current = h, H.current = null, Pn(h), Je(null), $t(!0);
                        },
                        onKeyDown: (f) => {
                          if (en) {
                            if (f.key === "ArrowDown" || f.key === "ArrowUp") {
                              if (lt.length <= 0) return;
                              f.preventDefault(), $t(!0), Tn((h) => {
                                if (h < 0 || h >= lt.length)
                                  return f.key === "ArrowDown" ? 0 : lt.length - 1;
                                const T = f.key === "ArrowDown" ? 1 : -1;
                                return (h + T + lt.length) % lt.length;
                              });
                              return;
                            }
                            if (f.key === "Enter") {
                              if (!It || lt.length <= 0) return;
                              f.preventDefault();
                              const h = tl >= 0 && tl < lt.length ? tl : 0, T = lt[h];
                              if (!T) return;
                              Ts(T);
                            }
                          }
                        },
                        onFocus: () => {
                          en && $t(!0);
                        },
                        onBlur: () => {
                          window.setTimeout(() => {
                            $t(!1), Tn(-1);
                          }, 100);
                        },
                        placeholder: en ? "Type anime name" : "Waiting for guessing phase"
                      }
                    ),
                    It && lt.length > 0 && en ? /* @__PURE__ */ m.jsx("ul", { className: "gmq-search-results", role: "listbox", children: lt.map((f, h) => /* @__PURE__ */ m.jsx("li", { children: /* @__PURE__ */ m.jsx(
                      "button",
                      {
                        type: "button",
                        role: "option",
                        "aria-selected": h === tl,
                        className: h === tl ? "is-active" : "",
                        ref: (T) => {
                          ot.current[h] = T;
                        },
                        onMouseDown: (T) => T.preventDefault(),
                        onMouseEnter: () => Tn(h),
                        onClick: () => Ts(f),
                        children: f.title
                      }
                    ) }, `${f.id}-${f.title}`)) }) : null
                  ] }),
                  /* @__PURE__ */ m.jsx(
                    "button",
                    {
                      type: "button",
                      className: "gmq-btn gmq-btn-secondary",
                      onClick: bi,
                      disabled: J === "ready" || !en,
                      children: Il ? "Unskip" : "Skip"
                    }
                  )
                ] }),
                Ua ? /* @__PURE__ */ m.jsx("p", { className: "gmq-muted gmq-muted-warning", children: Ua }) : null
              ] })
            ] }),
            /* @__PURE__ */ m.jsxs("section", { className: "gmq-match-panel gmq-info-panel", children: [
              /* @__PURE__ */ m.jsx("h3", { children: "Music Info" }),
              Tl ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-stack", children: [
                /* @__PURE__ */ m.jsxs("p", { children: [
                  ht.correctAnime?.animeTitle,
                  " (",
                  ht.correctAnime?.themeType,
                  ")"
                ] }),
                ht.correctAnime?.animeTitleEnglish && String(ht.correctAnime.animeTitleEnglish).trim().toLowerCase() !== String(ht.correctAnime?.animeTitle || "").trim().toLowerCase() ? /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: ht.correctAnime.animeTitleEnglish }) : null,
                ht.correctAnime?.themeTitle ? /* @__PURE__ */ m.jsxs("p", { className: "gmq-muted", children: [
                  "Artist: ",
                  ht.correctAnime.themeTitle
                ] }) : null
              ] }) : /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Music info hidden until solution reveal." })
            ] })
          ] }),
          /* @__PURE__ */ m.jsx("section", { className: "gmq-player-grid gmq-match-player-row", children: js.map((f) => {
            const h = Ka.get(f.userId) || null, j = Os && typeof h?.isCorrect == "boolean" ? h.isCorrect ? " gmq-answer-bubble-correct" : " gmq-answer-bubble-wrong" : "", X = typeof h?.guessText == "string" && h.guessText.trim() ? h.guessText : "-";
            return /* @__PURE__ */ m.jsxs("div", { className: "gmq-player-square-wrap", children: [
              qs ? /* @__PURE__ */ m.jsx("div", { className: `gmq-answer-bubble${j}`, children: X }) : null,
              en && Jt.includes(f.userId) ? /* @__PURE__ */ m.jsx("span", { className: "gmq-player-ready-indicator", children: "Ready" }) : null,
              /* @__PURE__ */ m.jsx("div", { className: "gmq-player-square", children: /* @__PURE__ */ m.jsx("span", { children: f.displayName }) })
            ] }, f.userId);
          }) })
        ] })
      ] }) : null
    ] }) : /* @__PURE__ */ m.jsxs("div", { className: "gmq-menu", children: [
      /* @__PURE__ */ m.jsx("div", { className: "gmq-menu-host-wrap", children: /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary gmq-btn-host", onClick: () => Ra(!0), children: "Host Lobby" }) }),
      /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-card-directory", children: [
        /* @__PURE__ */ m.jsx("div", { className: "gmq-directory-header", children: /* @__PURE__ */ m.jsx("h2", { children: "Available Lobbies" }) }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-directory-top", children: [
          /* @__PURE__ */ m.jsx("div", { className: "gmq-card gmq-card-toolbar", children: /* @__PURE__ */ m.jsxs("div", { className: "gmq-directory-controls", children: [
            /* @__PURE__ */ m.jsx("input", { value: xa, onChange: (f) => si(f.target.value), placeholder: "Search by code/name" }),
            /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => kt(), disabled: Jc, children: "Refresh" })
          ] }) }),
          /* @__PURE__ */ m.jsx("div", { className: "gmq-card gmq-card-manual-join", children: /* @__PURE__ */ m.jsxs("div", { className: "gmq-inline gmq-inline-manual", children: [
            /* @__PURE__ */ m.jsx("input", { value: rs, onChange: (f) => qa(rn(f.target.value)), placeholder: "Lobby code (ABC123)" }),
            /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: () => Tu(rs, ""), disabled: J === "join", children: "Join Lobby" })
          ] }) })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-lobby-table-head", children: [
          /* @__PURE__ */ m.jsx("span", { children: "Lobby" }),
          /* @__PURE__ */ m.jsx("span", { children: "Match Settings" }),
          /* @__PURE__ */ m.jsx("span", { children: "Action" })
        ] }),
        /* @__PURE__ */ m.jsxs("ul", { className: "gmq-lobby-list gmq-lobby-list-detailed", children: [
          Cu.map((f) => /* @__PURE__ */ m.jsxs("li", { className: "gmq-lobby-item gmq-lobby-item-detailed", children: [
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
              /* @__PURE__ */ m.jsx("span", { children: Lc[f.sourceMode]?.label || f.sourceMode }),
              /* @__PURE__ */ m.jsx("span", { children: Hc[f.selectionMode]?.label || f.selectionMode }),
              /* @__PURE__ */ m.jsx("span", { children: Gc[f.themeMode]?.label || f.themeMode })
            ] }),
            /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Tu(f.code, "", { fromDirectory: !0 }), disabled: J === "join", children: "Join" })
          ] }, f.code)),
          Cu.length === 0 ? /* @__PURE__ */ m.jsx("li", { className: "gmq-lobby-empty gmq-muted", children: "No open public lobbies right now." }) : null
        ] })
      ] }),
      Ca ? /* @__PURE__ */ m.jsx("div", { className: "gmq-modal-backdrop", onClick: () => Ra(!1), children: /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-modal-card", onClick: (f) => f.stopPropagation(), children: [
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-modal-header", children: [
          /* @__PURE__ */ m.jsx("h2", { children: "Host Lobby" }),
          /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary gmq-btn-modal-close", onClick: () => Ra(!1), children: "Close" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-name-private-row", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-stack", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "create-lobby-name", children: "Lobby name" }),
            /* @__PURE__ */ m.jsx(
              "input",
              {
                id: "create-lobby-name",
                value: dt.name,
                onChange: (f) => wt((h) => ({ ...h, name: f.target.value })),
                placeholder: "Lobby name"
              }
            )
          ] }),
          /* @__PURE__ */ m.jsxs("label", { className: "gmq-checkbox gmq-checkbox-inline", children: [
            /* @__PURE__ */ m.jsx(
              "input",
              {
                type: "checkbox",
                checked: dt.isPrivate,
                onChange: (f) => wt((h) => ({ ...h, isPrivate: f.target.checked }))
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
                value: fn,
                onChange: (f) => Xn(f.target.value),
                onBlur: vt
              }
            )
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "create-round-count", children: "Rounds" }),
            /* @__PURE__ */ m.jsx("input", { id: "create-round-count", type: "number", min: "1", max: "50", value: dt.roundCount, onChange: (f) => wt((h) => ({ ...h, roundCount: Number(f.target.value || 10) })) })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "create-guess-seconds", children: "Guess Time (sec)" }),
            /* @__PURE__ */ m.jsx("input", { id: "create-guess-seconds", type: "number", min: "5", max: "120", value: dt.guessSeconds, onChange: (f) => wt((h) => ({ ...h, guessSeconds: Number(f.target.value || 20) })) })
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-grid", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "create-source-mode", children: "Song Source" }),
            /* @__PURE__ */ m.jsx("select", { id: "create-source-mode", value: dt.sourceMode, onChange: (f) => wt((h) => ({ ...h, sourceMode: f.target.value })), children: lf.map((f) => /* @__PURE__ */ m.jsx("option", { value: f, children: Lc[f]?.label || f }, f)) })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "create-selection-mode", children: "Selection Style" }),
            /* @__PURE__ */ m.jsx("select", { id: "create-selection-mode", value: dt.selectionMode, onChange: (f) => wt((h) => ({ ...h, selectionMode: f.target.value })), children: af.map((f) => /* @__PURE__ */ m.jsx("option", { value: f, children: Hc[f]?.label || f }, f)) })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ m.jsx("label", { htmlFor: "create-theme-mode", children: "Song Types" }),
            /* @__PURE__ */ m.jsx("select", { id: "create-theme-mode", value: dt.themeMode, onChange: (f) => wt((h) => ({ ...h, themeMode: f.target.value })), children: uf.map((f) => /* @__PURE__ */ m.jsx("option", { value: f, children: Gc[f]?.label || f }, f)) })
          ] })
        ] }),
        nr ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-grid gmq-field-grid-2", children: [
          /* @__PURE__ */ m.jsx(
            Yc,
            {
              label: "Anime MAL Score",
              minValue: dt.animeScoreMin,
              maxValue: dt.animeScoreMax,
              onMinChange: Ha,
              onMaxChange: sl
            }
          ),
          /* @__PURE__ */ m.jsx(
            Yc,
            {
              label: "Player MAL Score",
              minValue: dt.playerScoreMin,
              maxValue: dt.playerScoreMax,
              onMinChange: pi,
              onMaxChange: pu,
              hint: "Used for MAL-list entries (MAL_ONLY, and MAL portion of HYBRID)."
            }
          )
        ] }) : null,
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: Ic, disabled: J === "create", children: J === "create" ? "Hosting..." : "Host Lobby" })
      ] }) }) : null
    ] }),
    Ba.visible ? /* @__PURE__ */ m.jsx(
      "div",
      {
        className: "gmq-floating-tooltip",
        style: {
          left: `${Ba.x}px`,
          top: `${Ba.y}px`
        },
        children: Ba.text
      }
    ) : null
  ] });
}
const Bm = document.getElementById("game-root");
Bm && Tg.createRoot(Bm).render(/* @__PURE__ */ m.jsx(zp, {}));
