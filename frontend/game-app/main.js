var Br = { exports: {} }, di = {};
var Ch;
function l0() {
  if (Ch) return di;
  Ch = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(r, v, U) {
    var j = null;
    if (U !== void 0 && (j = "" + U), v.key !== void 0 && (j = "" + v.key), "key" in v) {
      U = {};
      for (var X in v)
        X !== "key" && (U[X] = v[X]);
    } else U = v;
    return v = U.ref, {
      $$typeof: f,
      type: r,
      key: j,
      ref: v !== void 0 ? v : null,
      props: U
    };
  }
  return di.Fragment = i, di.jsx = s, di.jsxs = s, di;
}
var Dh;
function n0() {
  return Dh || (Dh = 1, Br.exports = l0()), Br.exports;
}
var A = n0(), jr = { exports: {} }, W = {};
var Uh;
function a0() {
  if (Uh) return W;
  Uh = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), v = /* @__PURE__ */ Symbol.for("react.profiler"), U = /* @__PURE__ */ Symbol.for("react.consumer"), j = /* @__PURE__ */ Symbol.for("react.context"), X = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), C = /* @__PURE__ */ Symbol.for("react.memo"), k = /* @__PURE__ */ Symbol.for("react.lazy"), G = /* @__PURE__ */ Symbol.for("react.activity"), mt = Symbol.iterator;
  function jt(y) {
    return y === null || typeof y != "object" ? null : (y = mt && y[mt] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var Pt = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Et = Object.assign, Ee = {};
  function te(y, M, B) {
    this.props = y, this.context = M, this.refs = Ee, this.updater = B || Pt;
  }
  te.prototype.isReactComponent = {}, te.prototype.setState = function(y, M) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, M, "setState");
  }, te.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function pe() {
  }
  pe.prototype = te.prototype;
  function Ht(y, M, B) {
    this.props = y, this.context = M, this.refs = Ee, this.updater = B || Pt;
  }
  var ue = Ht.prototype = new pe();
  ue.constructor = Ht, Et(ue, te.prototype), ue.isPureReactComponent = !0;
  var ie = Array.isArray;
  function Gt() {
  }
  var F = { H: null, A: null, T: null, S: null }, ee = Object.prototype.hasOwnProperty;
  function Xt(y, M, B) {
    var Y = B.ref;
    return {
      $$typeof: f,
      type: y,
      key: M,
      ref: Y !== void 0 ? Y : null,
      props: B
    };
  }
  function $e(y, M) {
    return Xt(y.type, M, y.props);
  }
  function oe(y) {
    return typeof y == "object" && y !== null && y.$$typeof === f;
  }
  function Qt(y) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(B) {
      return M[B];
    });
  }
  var rl = /\/+/g;
  function fl(y, M) {
    return typeof y == "object" && y !== null && y.key != null ? Qt("" + y.key) : M.toString(36);
  }
  function le(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(Gt, Gt) : (y.status = "pending", y.then(
          function(M) {
            y.status === "pending" && (y.status = "fulfilled", y.value = M);
          },
          function(M) {
            y.status === "pending" && (y.status = "rejected", y.reason = M);
          }
        )), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function T(y, M, B, Y, J) {
    var et = typeof y;
    (et === "undefined" || et === "boolean") && (y = null);
    var ot = !1;
    if (y === null) ot = !0;
    else
      switch (et) {
        case "bigint":
        case "string":
        case "number":
          ot = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case f:
            case i:
              ot = !0;
              break;
            case k:
              return ot = y._init, T(
                ot(y._payload),
                M,
                B,
                Y,
                J
              );
          }
      }
    if (ot)
      return J = J(y), ot = Y === "" ? "." + fl(y, 0) : Y, ie(J) ? (B = "", ot != null && (B = ot.replace(rl, "$&/") + "/"), T(J, M, B, "", function(Oe) {
        return Oe;
      })) : J != null && (oe(J) && (J = $e(
        J,
        B + (J.key == null || y && y.key === J.key ? "" : ("" + J.key).replace(
          rl,
          "$&/"
        ) + "/") + ot
      )), M.push(J)), 1;
    ot = 0;
    var de = Y === "" ? "." : Y + ":";
    if (ie(y))
      for (var yt = 0; yt < y.length; yt++)
        Y = y[yt], et = de + fl(Y, yt), ot += T(
          Y,
          M,
          B,
          et,
          J
        );
    else if (yt = jt(y), typeof yt == "function")
      for (y = yt.call(y), yt = 0; !(Y = y.next()).done; )
        Y = Y.value, et = de + fl(Y, yt++), ot += T(
          Y,
          M,
          B,
          et,
          J
        );
    else if (et === "object") {
      if (typeof y.then == "function")
        return T(
          le(y),
          M,
          B,
          Y,
          J
        );
      throw M = String(y), Error(
        "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ot;
  }
  function H(y, M, B) {
    if (y == null) return y;
    var Y = [], J = 0;
    return T(y, Y, "", "", function(et) {
      return M.call(B, et, J++);
    }), Y;
  }
  function w(y) {
    if (y._status === -1) {
      var M = y._result;
      M = M(), M.then(
        function(B) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = B);
        },
        function(B) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = B);
        }
      ), y._status === -1 && (y._status = 0, y._result = M);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var pt = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var M = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(M)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, nt = {
    map: H,
    forEach: function(y, M, B) {
      H(
        y,
        function() {
          M.apply(this, arguments);
        },
        B
      );
    },
    count: function(y) {
      var M = 0;
      return H(y, function() {
        M++;
      }), M;
    },
    toArray: function(y) {
      return H(y, function(M) {
        return M;
      }) || [];
    },
    only: function(y) {
      if (!oe(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return W.Activity = G, W.Children = nt, W.Component = te, W.Fragment = s, W.Profiler = v, W.PureComponent = Ht, W.StrictMode = r, W.Suspense = x, W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, W.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return F.H.useMemoCache(y);
    }
  }, W.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, W.cacheSignal = function() {
    return null;
  }, W.cloneElement = function(y, M, B) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var Y = Et({}, y.props), J = y.key;
    if (M != null)
      for (et in M.key !== void 0 && (J = "" + M.key), M)
        !ee.call(M, et) || et === "key" || et === "__self" || et === "__source" || et === "ref" && M.ref === void 0 || (Y[et] = M[et]);
    var et = arguments.length - 2;
    if (et === 1) Y.children = B;
    else if (1 < et) {
      for (var ot = Array(et), de = 0; de < et; de++)
        ot[de] = arguments[de + 2];
      Y.children = ot;
    }
    return Xt(y.type, J, Y);
  }, W.createContext = function(y) {
    return y = {
      $$typeof: j,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: U,
      _context: y
    }, y;
  }, W.createElement = function(y, M, B) {
    var Y, J = {}, et = null;
    if (M != null)
      for (Y in M.key !== void 0 && (et = "" + M.key), M)
        ee.call(M, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (J[Y] = M[Y]);
    var ot = arguments.length - 2;
    if (ot === 1) J.children = B;
    else if (1 < ot) {
      for (var de = Array(ot), yt = 0; yt < ot; yt++)
        de[yt] = arguments[yt + 2];
      J.children = de;
    }
    if (y && y.defaultProps)
      for (Y in ot = y.defaultProps, ot)
        J[Y] === void 0 && (J[Y] = ot[Y]);
    return Xt(y, et, J);
  }, W.createRef = function() {
    return { current: null };
  }, W.forwardRef = function(y) {
    return { $$typeof: X, render: y };
  }, W.isValidElement = oe, W.lazy = function(y) {
    return {
      $$typeof: k,
      _payload: { _status: -1, _result: y },
      _init: w
    };
  }, W.memo = function(y, M) {
    return {
      $$typeof: C,
      type: y,
      compare: M === void 0 ? null : M
    };
  }, W.startTransition = function(y) {
    var M = F.T, B = {};
    F.T = B;
    try {
      var Y = y(), J = F.S;
      J !== null && J(B, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(Gt, pt);
    } catch (et) {
      pt(et);
    } finally {
      M !== null && B.types !== null && (M.types = B.types), F.T = M;
    }
  }, W.unstable_useCacheRefresh = function() {
    return F.H.useCacheRefresh();
  }, W.use = function(y) {
    return F.H.use(y);
  }, W.useActionState = function(y, M, B) {
    return F.H.useActionState(y, M, B);
  }, W.useCallback = function(y, M) {
    return F.H.useCallback(y, M);
  }, W.useContext = function(y) {
    return F.H.useContext(y);
  }, W.useDebugValue = function() {
  }, W.useDeferredValue = function(y, M) {
    return F.H.useDeferredValue(y, M);
  }, W.useEffect = function(y, M) {
    return F.H.useEffect(y, M);
  }, W.useEffectEvent = function(y) {
    return F.H.useEffectEvent(y);
  }, W.useId = function() {
    return F.H.useId();
  }, W.useImperativeHandle = function(y, M, B) {
    return F.H.useImperativeHandle(y, M, B);
  }, W.useInsertionEffect = function(y, M) {
    return F.H.useInsertionEffect(y, M);
  }, W.useLayoutEffect = function(y, M) {
    return F.H.useLayoutEffect(y, M);
  }, W.useMemo = function(y, M) {
    return F.H.useMemo(y, M);
  }, W.useOptimistic = function(y, M) {
    return F.H.useOptimistic(y, M);
  }, W.useReducer = function(y, M, B) {
    return F.H.useReducer(y, M, B);
  }, W.useRef = function(y) {
    return F.H.useRef(y);
  }, W.useState = function(y) {
    return F.H.useState(y);
  }, W.useSyncExternalStore = function(y, M, B) {
    return F.H.useSyncExternalStore(
      y,
      M,
      B
    );
  }, W.useTransition = function() {
    return F.H.useTransition();
  }, W.version = "19.2.4", W;
}
var qh;
function $r() {
  return qh || (qh = 1, jr.exports = a0()), jr.exports;
}
var N = $r(), Hr = { exports: {} }, hi = {}, wr = { exports: {} }, Lr = {};
var xh;
function u0() {
  return xh || (xh = 1, (function(f) {
    function i(T, H) {
      var w = T.length;
      T.push(H);
      t: for (; 0 < w; ) {
        var pt = w - 1 >>> 1, nt = T[pt];
        if (0 < v(nt, H))
          T[pt] = H, T[w] = nt, w = pt;
        else break t;
      }
    }
    function s(T) {
      return T.length === 0 ? null : T[0];
    }
    function r(T) {
      if (T.length === 0) return null;
      var H = T[0], w = T.pop();
      if (w !== H) {
        T[0] = w;
        t: for (var pt = 0, nt = T.length, y = nt >>> 1; pt < y; ) {
          var M = 2 * (pt + 1) - 1, B = T[M], Y = M + 1, J = T[Y];
          if (0 > v(B, w))
            Y < nt && 0 > v(J, B) ? (T[pt] = J, T[Y] = w, pt = Y) : (T[pt] = B, T[M] = w, pt = M);
          else if (Y < nt && 0 > v(J, w))
            T[pt] = J, T[Y] = w, pt = Y;
          else break t;
        }
      }
      return H;
    }
    function v(T, H) {
      var w = T.sortIndex - H.sortIndex;
      return w !== 0 ? w : T.id - H.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var U = performance;
      f.unstable_now = function() {
        return U.now();
      };
    } else {
      var j = Date, X = j.now();
      f.unstable_now = function() {
        return j.now() - X;
      };
    }
    var x = [], C = [], k = 1, G = null, mt = 3, jt = !1, Pt = !1, Et = !1, Ee = !1, te = typeof setTimeout == "function" ? setTimeout : null, pe = typeof clearTimeout == "function" ? clearTimeout : null, Ht = typeof setImmediate < "u" ? setImmediate : null;
    function ue(T) {
      for (var H = s(C); H !== null; ) {
        if (H.callback === null) r(C);
        else if (H.startTime <= T)
          r(C), H.sortIndex = H.expirationTime, i(x, H);
        else break;
        H = s(C);
      }
    }
    function ie(T) {
      if (Et = !1, ue(T), !Pt)
        if (s(x) !== null)
          Pt = !0, Gt || (Gt = !0, Qt());
        else {
          var H = s(C);
          H !== null && le(ie, H.startTime - T);
        }
    }
    var Gt = !1, F = -1, ee = 5, Xt = -1;
    function $e() {
      return Ee ? !0 : !(f.unstable_now() - Xt < ee);
    }
    function oe() {
      if (Ee = !1, Gt) {
        var T = f.unstable_now();
        Xt = T;
        var H = !0;
        try {
          t: {
            Pt = !1, Et && (Et = !1, pe(F), F = -1), jt = !0;
            var w = mt;
            try {
              e: {
                for (ue(T), G = s(x); G !== null && !(G.expirationTime > T && $e()); ) {
                  var pt = G.callback;
                  if (typeof pt == "function") {
                    G.callback = null, mt = G.priorityLevel;
                    var nt = pt(
                      G.expirationTime <= T
                    );
                    if (T = f.unstable_now(), typeof nt == "function") {
                      G.callback = nt, ue(T), H = !0;
                      break e;
                    }
                    G === s(x) && r(x), ue(T);
                  } else r(x);
                  G = s(x);
                }
                if (G !== null) H = !0;
                else {
                  var y = s(C);
                  y !== null && le(
                    ie,
                    y.startTime - T
                  ), H = !1;
                }
              }
              break t;
            } finally {
              G = null, mt = w, jt = !1;
            }
            H = void 0;
          }
        } finally {
          H ? Qt() : Gt = !1;
        }
      }
    }
    var Qt;
    if (typeof Ht == "function")
      Qt = function() {
        Ht(oe);
      };
    else if (typeof MessageChannel < "u") {
      var rl = new MessageChannel(), fl = rl.port2;
      rl.port1.onmessage = oe, Qt = function() {
        fl.postMessage(null);
      };
    } else
      Qt = function() {
        te(oe, 0);
      };
    function le(T, H) {
      F = te(function() {
        T(f.unstable_now());
      }, H);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, f.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ee = 0 < T ? Math.floor(1e3 / T) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return mt;
    }, f.unstable_next = function(T) {
      switch (mt) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = mt;
      }
      var w = mt;
      mt = H;
      try {
        return T();
      } finally {
        mt = w;
      }
    }, f.unstable_requestPaint = function() {
      Ee = !0;
    }, f.unstable_runWithPriority = function(T, H) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var w = mt;
      mt = T;
      try {
        return H();
      } finally {
        mt = w;
      }
    }, f.unstable_scheduleCallback = function(T, H, w) {
      var pt = f.unstable_now();
      switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? pt + w : pt) : w = pt, T) {
        case 1:
          var nt = -1;
          break;
        case 2:
          nt = 250;
          break;
        case 5:
          nt = 1073741823;
          break;
        case 4:
          nt = 1e4;
          break;
        default:
          nt = 5e3;
      }
      return nt = w + nt, T = {
        id: k++,
        callback: H,
        priorityLevel: T,
        startTime: w,
        expirationTime: nt,
        sortIndex: -1
      }, w > pt ? (T.sortIndex = w, i(C, T), s(x) === null && T === s(C) && (Et ? (pe(F), F = -1) : Et = !0, le(ie, w - pt))) : (T.sortIndex = nt, i(x, T), Pt || jt || (Pt = !0, Gt || (Gt = !0, Qt()))), T;
    }, f.unstable_shouldYield = $e, f.unstable_wrapCallback = function(T) {
      var H = mt;
      return function() {
        var w = mt;
        mt = H;
        try {
          return T.apply(this, arguments);
        } finally {
          mt = w;
        }
      };
    };
  })(Lr)), Lr;
}
var Bh;
function i0() {
  return Bh || (Bh = 1, wr.exports = u0()), wr.exports;
}
var Yr = { exports: {} }, Se = {};
var jh;
function c0() {
  if (jh) return Se;
  jh = 1;
  var f = $r();
  function i(x) {
    var C = "https://react.dev/errors/" + x;
    if (1 < arguments.length) {
      C += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var k = 2; k < arguments.length; k++)
        C += "&args[]=" + encodeURIComponent(arguments[k]);
    }
    return "Minified React error #" + x + "; visit " + C + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, v = /* @__PURE__ */ Symbol.for("react.portal");
  function U(x, C, k) {
    var G = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: v,
      key: G == null ? null : "" + G,
      children: x,
      containerInfo: C,
      implementation: k
    };
  }
  var j = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function X(x, C) {
    if (x === "font") return "";
    if (typeof C == "string")
      return C === "use-credentials" ? C : "";
  }
  return Se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Se.createPortal = function(x, C) {
    var k = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!C || C.nodeType !== 1 && C.nodeType !== 9 && C.nodeType !== 11)
      throw Error(i(299));
    return U(x, C, null, k);
  }, Se.flushSync = function(x) {
    var C = j.T, k = r.p;
    try {
      if (j.T = null, r.p = 2, x) return x();
    } finally {
      j.T = C, r.p = k, r.d.f();
    }
  }, Se.preconnect = function(x, C) {
    typeof x == "string" && (C ? (C = C.crossOrigin, C = typeof C == "string" ? C === "use-credentials" ? C : "" : void 0) : C = null, r.d.C(x, C));
  }, Se.prefetchDNS = function(x) {
    typeof x == "string" && r.d.D(x);
  }, Se.preinit = function(x, C) {
    if (typeof x == "string" && C && typeof C.as == "string") {
      var k = C.as, G = X(k, C.crossOrigin), mt = typeof C.integrity == "string" ? C.integrity : void 0, jt = typeof C.fetchPriority == "string" ? C.fetchPriority : void 0;
      k === "style" ? r.d.S(
        x,
        typeof C.precedence == "string" ? C.precedence : void 0,
        {
          crossOrigin: G,
          integrity: mt,
          fetchPriority: jt
        }
      ) : k === "script" && r.d.X(x, {
        crossOrigin: G,
        integrity: mt,
        fetchPriority: jt,
        nonce: typeof C.nonce == "string" ? C.nonce : void 0
      });
    }
  }, Se.preinitModule = function(x, C) {
    if (typeof x == "string")
      if (typeof C == "object" && C !== null) {
        if (C.as == null || C.as === "script") {
          var k = X(
            C.as,
            C.crossOrigin
          );
          r.d.M(x, {
            crossOrigin: k,
            integrity: typeof C.integrity == "string" ? C.integrity : void 0,
            nonce: typeof C.nonce == "string" ? C.nonce : void 0
          });
        }
      } else C == null && r.d.M(x);
  }, Se.preload = function(x, C) {
    if (typeof x == "string" && typeof C == "object" && C !== null && typeof C.as == "string") {
      var k = C.as, G = X(k, C.crossOrigin);
      r.d.L(x, k, {
        crossOrigin: G,
        integrity: typeof C.integrity == "string" ? C.integrity : void 0,
        nonce: typeof C.nonce == "string" ? C.nonce : void 0,
        type: typeof C.type == "string" ? C.type : void 0,
        fetchPriority: typeof C.fetchPriority == "string" ? C.fetchPriority : void 0,
        referrerPolicy: typeof C.referrerPolicy == "string" ? C.referrerPolicy : void 0,
        imageSrcSet: typeof C.imageSrcSet == "string" ? C.imageSrcSet : void 0,
        imageSizes: typeof C.imageSizes == "string" ? C.imageSizes : void 0,
        media: typeof C.media == "string" ? C.media : void 0
      });
    }
  }, Se.preloadModule = function(x, C) {
    if (typeof x == "string")
      if (C) {
        var k = X(C.as, C.crossOrigin);
        r.d.m(x, {
          as: typeof C.as == "string" && C.as !== "script" ? C.as : void 0,
          crossOrigin: k,
          integrity: typeof C.integrity == "string" ? C.integrity : void 0
        });
      } else r.d.m(x);
  }, Se.requestFormReset = function(x) {
    r.d.r(x);
  }, Se.unstable_batchedUpdates = function(x, C) {
    return x(C);
  }, Se.useFormState = function(x, C, k) {
    return j.H.useFormState(x, C, k);
  }, Se.useFormStatus = function() {
    return j.H.useHostTransitionStatus();
  }, Se.version = "19.2.4", Se;
}
var Hh;
function s0() {
  if (Hh) return Yr.exports;
  Hh = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (i) {
        console.error(i);
      }
  }
  return f(), Yr.exports = c0(), Yr.exports;
}
var wh;
function r0() {
  if (wh) return hi;
  wh = 1;
  var f = i0(), i = $r(), s = s0();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function v(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function U(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function j(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function X(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function x(t) {
    if (U(t) !== t)
      throw Error(r(188));
  }
  function C(t) {
    var e = t.alternate;
    if (!e) {
      if (e = U(t), e === null) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var l = t, n = e; ; ) {
      var a = l.return;
      if (a === null) break;
      var u = a.alternate;
      if (u === null) {
        if (n = a.return, n !== null) {
          l = n;
          continue;
        }
        break;
      }
      if (a.child === u.child) {
        for (u = a.child; u; ) {
          if (u === l) return x(a), t;
          if (u === n) return x(a), e;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== n.return) l = a, n = u;
      else {
        for (var c = !1, o = a.child; o; ) {
          if (o === l) {
            c = !0, l = a, n = u;
            break;
          }
          if (o === n) {
            c = !0, n = a, l = u;
            break;
          }
          o = o.sibling;
        }
        if (!c) {
          for (o = u.child; o; ) {
            if (o === l) {
              c = !0, l = u, n = a;
              break;
            }
            if (o === n) {
              c = !0, n = u, l = a;
              break;
            }
            o = o.sibling;
          }
          if (!c) throw Error(r(189));
        }
      }
      if (l.alternate !== n) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? t : e;
  }
  function k(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = k(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var G = Object.assign, mt = /* @__PURE__ */ Symbol.for("react.element"), jt = /* @__PURE__ */ Symbol.for("react.transitional.element"), Pt = /* @__PURE__ */ Symbol.for("react.portal"), Et = /* @__PURE__ */ Symbol.for("react.fragment"), Ee = /* @__PURE__ */ Symbol.for("react.strict_mode"), te = /* @__PURE__ */ Symbol.for("react.profiler"), pe = /* @__PURE__ */ Symbol.for("react.consumer"), Ht = /* @__PURE__ */ Symbol.for("react.context"), ue = /* @__PURE__ */ Symbol.for("react.forward_ref"), ie = /* @__PURE__ */ Symbol.for("react.suspense"), Gt = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), ee = /* @__PURE__ */ Symbol.for("react.lazy"), Xt = /* @__PURE__ */ Symbol.for("react.activity"), $e = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), oe = Symbol.iterator;
  function Qt(t) {
    return t === null || typeof t != "object" ? null : (t = oe && t[oe] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var rl = /* @__PURE__ */ Symbol.for("react.client.reference");
  function fl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === rl ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Et:
        return "Fragment";
      case te:
        return "Profiler";
      case Ee:
        return "StrictMode";
      case ie:
        return "Suspense";
      case Gt:
        return "SuspenseList";
      case Xt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Pt:
          return "Portal";
        case Ht:
          return t.displayName || "Context";
        case pe:
          return (t._context.displayName || "Context") + ".Consumer";
        case ue:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case F:
          return e = t.displayName || null, e !== null ? e : fl(t.type) || "Memo";
        case ee:
          e = t._payload, t = t._init;
          try {
            return fl(t(e));
          } catch {
          }
      }
    return null;
  }
  var le = Array.isArray, T = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pt = [], nt = -1;
  function y(t) {
    return { current: t };
  }
  function M(t) {
    0 > nt || (t.current = pt[nt], pt[nt] = null, nt--);
  }
  function B(t, e) {
    nt++, pt[nt] = t.current, t.current = e;
  }
  var Y = y(null), J = y(null), et = y(null), ot = y(null);
  function de(t, e) {
    switch (B(et, e), B(J, t), B(Y, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Pd(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Pd(e), t = th(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    M(Y), B(Y, t);
  }
  function yt() {
    M(Y), M(J), M(et);
  }
  function Oe(t) {
    t.memoizedState !== null && B(ot, t);
    var e = Y.current, l = th(e, t.type);
    e !== l && (B(J, t), B(Y, l));
  }
  function Gn(t) {
    J.current === t && (M(Y), M(J)), ot.current === t && (M(ot), si._currentValue = w);
  }
  var _a, Xn;
  function je(t) {
    if (_a === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        _a = e && e[1] || "", Xn = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + _a + t + Xn;
  }
  var ol = !1;
  function ou(t, e) {
    if (!t || ol) return "";
    ol = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
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
                } catch (_) {
                  var S = _;
                }
                Reflect.construct(t, [], z);
              } else {
                try {
                  z.call();
                } catch (_) {
                  S = _;
                }
                t.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                S = _;
              }
              (z = t()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (_) {
            if (_ && S && typeof _.stack == "string")
              return [_.stack, S.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = n.DetermineComponentFrameRoot(), c = u[0], o = u[1];
      if (c && o) {
        var h = c.split(`
`), b = o.split(`
`);
        for (a = n = 0; n < h.length && !h[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; a < b.length && !b[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (n === h.length || a === b.length)
          for (n = h.length - 1, a = b.length - 1; 1 <= n && 0 <= a && h[n] !== b[a]; )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (h[n] !== b[a]) {
            if (n !== 1 || a !== 1)
              do
                if (n--, a--, 0 > a || h[n] !== b[a]) {
                  var O = `
` + h[n].replace(" at new ", " at ");
                  return t.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", t.displayName)), O;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      ol = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? je(l) : "";
  }
  function ct(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return je(t.type);
      case 16:
        return je("Lazy");
      case 13:
        return t.child !== e && e !== null ? je("Suspense Fallback") : je("Suspense");
      case 19:
        return je("SuspenseList");
      case 0:
      case 15:
        return ou(t.type, !1);
      case 11:
        return ou(t.type.render, !1);
      case 1:
        return ou(t.type, !0);
      case 31:
        return je("Activity");
      default:
        return "";
    }
  }
  function Qn(t) {
    try {
      var e = "", l = null;
      do
        e += ct(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Aa = Object.prototype.hasOwnProperty, Ta = f.unstable_scheduleCallback, I = f.unstable_cancelCallback, Bl = f.unstable_shouldYield, du = f.unstable_requestPaint, Vt = f.unstable_now, jc = f.unstable_getCurrentPriorityLevel, hu = f.unstable_ImmediatePriority, at = f.unstable_UserBlockingPriority, on = f.unstable_NormalPriority, Hc = f.unstable_LowPriority, jl = f.unstable_IdlePriority, _e = f.log, dn = f.unstable_setDisableYieldValue, _l = null, ce = null;
  function Ae(t) {
    if (typeof _e == "function" && dn(t), ce && typeof ce.setStrictMode == "function")
      try {
        ce.setStrictMode(_l, t);
      } catch {
      }
  }
  var se = Math.clz32 ? Math.clz32 : mu, Vn = Math.log, Na = Math.LN2;
  function mu(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Vn(t) / Na | 0) | 0;
  }
  var Hl = 256, Zn = 262144, Fe = 4194304;
  function dl(t) {
    var e = t & 42;
    if (e !== 0) return e;
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function hl(t, e, l) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var a = 0, u = t.suspendedLanes, c = t.pingedLanes;
    t = t.warmLanes;
    var o = n & 134217727;
    return o !== 0 ? (n = o & ~u, n !== 0 ? a = dl(n) : (c &= o, c !== 0 ? a = dl(c) : l || (l = o & ~t, l !== 0 && (a = dl(l))))) : (o = n & ~u, o !== 0 ? a = dl(o) : c !== 0 ? a = dl(c) : l || (l = n & ~t, l !== 0 && (a = dl(l)))), a === 0 ? 0 : e !== 0 && e !== a && (e & u) === 0 && (u = a & -a, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : a;
  }
  function ml(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function wl(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function Oa() {
    var t = Fe;
    return Fe <<= 1, (Fe & 62914560) === 0 && (Fe = 4194304), t;
  }
  function He(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Kn(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function yu(t, e, l, n, a, u) {
    var c = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var o = t.entanglements, h = t.expirationTimes, b = t.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var O = 31 - se(l), z = 1 << O;
      o[O] = 0, h[O] = -1;
      var S = b[O];
      if (S !== null)
        for (b[O] = null, O = 0; O < S.length; O++) {
          var _ = S[O];
          _ !== null && (_.lane &= -536870913);
        }
      l &= ~z;
    }
    n !== 0 && hn(t, n, 0), u !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(c & ~e));
  }
  function hn(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var n = 31 - se(e);
    t.entangledLanes |= e, t.entanglements[n] = t.entanglements[n] | 1073741824 | l & 261930;
  }
  function Al(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var n = 31 - se(l), a = 1 << n;
      a & e | t[n] & e && (t[n] |= e), l &= ~a;
    }
  }
  function Tl(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : gu(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function gu(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ra(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ll() {
    var t = H.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Ah(t.type));
  }
  function kn(t, e) {
    var l = H.p;
    try {
      return H.p = t, e();
    } finally {
      H.p = l;
    }
  }
  var Zt = Math.random().toString(36).slice(2), Ut = "__reactFiber$" + Zt, Dt = "__reactProps$" + Zt, Nl = "__reactContainer$" + Zt, yl = "__reactEvents$" + Zt, Re = "__reactListeners$" + Zt, vu = "__reactHandles$" + Zt, za = "__reactResources$" + Zt, Ie = "__reactMarker$" + Zt;
  function Ma(t) {
    delete t[Ut], delete t[Dt], delete t[yl], delete t[Re], delete t[vu];
  }
  function we(t) {
    var e = t[Ut];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[Nl] || l[Ut]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = ch(t); t !== null; ) {
            if (l = t[Ut]) return l;
            t = ch(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function Ol(t) {
    if (t = t[Ut] || t[Nl]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function ze(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function wt(t) {
    var e = t[za];
    return e || (e = t[za] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Kt(t) {
    t[Ie] = !0;
  }
  var Jn = /* @__PURE__ */ new Set(), pu = {};
  function Rl(t, e) {
    Yl(t, e), Yl(t + "Capture", e);
  }
  function Yl(t, e) {
    for (pu[t] = e, t = 0; t < e.length; t++)
      Jn.add(e[t]);
  }
  var vi = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ca = {}, Wn = {};
  function Le(t) {
    return Aa.call(Wn, t) ? !0 : Aa.call(Ca, t) ? !1 : vi.test(t) ? Wn[t] = !0 : (Ca[t] = !0, !1);
  }
  function Ye(t, e, l) {
    if (Le(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var n = e.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Ge(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Me(t, e, l, n) {
    if (n === null) t.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + n);
    }
  }
  function ne(t) {
    switch (typeof t) {
      case "bigint":
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
  function bu(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function pi(t, e, l) {
    var n = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, u = n.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(c) {
          l = "" + c, u.call(this, c);
        }
      }), Object.defineProperty(t, e, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(c) {
          l = "" + c;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function $n(t) {
    if (!t._valueTracker) {
      var e = bu(t) ? "checked" : "value";
      t._valueTracker = pi(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Gl(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), n = "";
    return t && (n = bu(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== l ? (e.setValue(t), !0) : !1;
  }
  function Xl(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Da = /[\n"\\]/g;
  function Te(t) {
    return t.replace(
      Da,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ql(t, e, l, n, a, u, c, o) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), e != null ? c === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ne(e)) : t.value !== "" + ne(e) && (t.value = "" + ne(e)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), e != null ? Eu(t, c, ne(e)) : l != null ? Eu(t, c, ne(l)) : n != null && t.removeAttribute("value"), a == null && u != null && (t.defaultChecked = !!u), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.name = "" + ne(o) : t.removeAttribute("name");
  }
  function Su(t, e, l, n, a, u, c, o) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        $n(t);
        return;
      }
      l = l != null ? "" + ne(l) : "", e = e != null ? "" + ne(e) : l, o || e === t.value || (t.value = e), t.defaultValue = e;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = o ? t.checked : !!n, t.defaultChecked = !!n, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c), $n(t);
  }
  function Eu(t, e, l) {
    e === "number" && Xl(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function Vl(t, e, l, n) {
    if (t = t.options, e) {
      e = {};
      for (var a = 0; a < l.length; a++)
        e["$" + l[a]] = !0;
      for (l = 0; l < t.length; l++)
        a = e.hasOwnProperty("$" + t[l].value), t[l].selected !== a && (t[l].selected = a), a && n && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + ne(l), e = null, a = 0; a < t.length; a++) {
        if (t[a].value === l) {
          t[a].selected = !0, n && (t[a].defaultSelected = !0);
          return;
        }
        e !== null || t[a].disabled || (e = t[a]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function _u(t, e, l) {
    if (e != null && (e = "" + ne(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + ne(l) : "";
  }
  function Au(t, e, l, n) {
    if (e == null) {
      if (n != null) {
        if (l != null) throw Error(r(92));
        if (le(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), e = l;
    }
    l = ne(e), t.defaultValue = l, n = t.textContent, n === l && n !== "" && n !== null && (t.value = n), $n(t);
  }
  function Zl(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Fn = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function mn(t, e, l) {
    var n = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : n ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Fn.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function Kl(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "");
      for (var a in e)
        n = e[a], e.hasOwnProperty(a) && l[a] !== n && mn(t, a, n);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && mn(t, u, e[u]);
  }
  function Ua(t) {
    if (t.indexOf("-") === -1) return !1;
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
  var In = /* @__PURE__ */ new Map([
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
  ]), Pn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function kl(t) {
    return Pn.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Ce() {
  }
  var Tu = null;
  function Nu(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var yn = null, gn = null;
  function bi(t) {
    var e = Ol(t);
    if (e && (t = e.stateNode)) {
      var l = t[Dt] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Ql(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Te(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var n = l[e];
              if (n !== t && n.form === t.form) {
                var a = n[Dt] || null;
                if (!a) throw Error(r(90));
                Ql(
                  n,
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
            for (e = 0; e < l.length; e++)
              n = l[e], n.form === t.form && Gl(n);
          }
          break t;
        case "textarea":
          _u(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && Vl(t, !!l.multiple, e, !1);
      }
    }
  }
  var Ou = !1;
  function ta(t, e, l) {
    if (Ou) return t(e, l);
    Ou = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (Ou = !1, (yn !== null || gn !== null) && (ac(), yn && (e = yn, t = gn, gn = yn = null, bi(e), t)))
        for (e = 0; e < t.length; e++) bi(t[e]);
    }
  }
  function ea(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var n = l[Dt] || null;
    if (n === null) return null;
    l = n[e];
    t: switch (e) {
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
        (n = !n.disabled) || (t = t.type, n = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !n;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        r(231, e, typeof l)
      );
    return l;
  }
  var gl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), la = !1;
  if (gl)
    try {
      var na = {};
      Object.defineProperty(na, "passive", {
        get: function() {
          la = !0;
        }
      }), window.addEventListener("test", na, na), window.removeEventListener("test", na, na);
    } catch {
      la = !1;
    }
  var Pe = null, Ru = null, aa = null;
  function Si() {
    if (aa) return aa;
    var t, e = Ru, l = e.length, n, a = "value" in Pe ? Pe.value : Pe.textContent, u = a.length;
    for (t = 0; t < l && e[t] === a[t]; t++) ;
    var c = l - t;
    for (n = 1; n <= c && e[l - n] === a[u - n]; n++) ;
    return aa = a.slice(t, 1 < n ? 1 - n : void 0);
  }
  function qa(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function vn() {
    return !0;
  }
  function Ei() {
    return !1;
  }
  function he(t) {
    function e(l, n, a, u, c) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var o in t)
        t.hasOwnProperty(o) && (l = t[o], this[o] = l ? l(u) : u[o]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? vn : Ei, this.isPropagationStopped = Ei, this;
    }
    return G(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = vn);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = vn);
      },
      persist: function() {
      },
      isPersistent: vn
    }), e;
  }
  var zl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, d = he(zl), E = G({}, zl, { view: 0, detail: 0 }), D = he(E), q, V, tt, bt = G({}, E, {
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
    getModifierState: Yc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== tt && (tt && t.type === "mousemove" ? (q = t.screenX - tt.screenX, V = t.screenY - tt.screenY) : V = q = 0, tt = t), q);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : V;
    }
  }), re = he(bt), st = G({}, bt, { dataTransfer: 0 }), qt = he(st), be = G({}, E, { relatedTarget: 0 }), Xe = he(be), lt = G({}, zl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), kt = he(lt), vl = G({}, zl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), _i = he(vl), zu = G({}, zl, { data: 0 }), wc = he(zu), Lc = {
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
  }, fm = {
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
  }, om = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function dm(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = om[t]) ? !!e[t] : !1;
  }
  function Yc() {
    return dm;
  }
  var hm = G({}, E, {
    key: function(t) {
      if (t.key) {
        var e = Lc[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = qa(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? fm[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Yc,
    charCode: function(t) {
      return t.type === "keypress" ? qa(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? qa(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), mm = he(hm), ym = G({}, bt, {
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
  }), lf = he(ym), gm = G({}, E, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Yc
  }), vm = he(gm), pm = G({}, zl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), bm = he(pm), Sm = G({}, bt, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Em = he(Sm), _m = G({}, zl, {
    newState: 0,
    oldState: 0
  }), Am = he(_m), Tm = [9, 13, 27, 32], Gc = gl && "CompositionEvent" in window, Mu = null;
  gl && "documentMode" in document && (Mu = document.documentMode);
  var Nm = gl && "TextEvent" in window && !Mu, nf = gl && (!Gc || Mu && 8 < Mu && 11 >= Mu), af = " ", uf = !1;
  function cf(t, e) {
    switch (t) {
      case "keyup":
        return Tm.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function sf(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var xa = !1;
  function Om(t, e) {
    switch (t) {
      case "compositionend":
        return sf(e);
      case "keypress":
        return e.which !== 32 ? null : (uf = !0, af);
      case "textInput":
        return t = e.data, t === af && uf ? null : t;
      default:
        return null;
    }
  }
  function Rm(t, e) {
    if (xa)
      return t === "compositionend" || !Gc && cf(t, e) ? (t = Si(), aa = Ru = Pe = null, xa = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return nf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var zm = {
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
  function rf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!zm[t.type] : e === "textarea";
  }
  function ff(t, e, l, n) {
    yn ? gn ? gn.push(n) : gn = [n] : yn = n, e = oc(e, "onChange"), 0 < e.length && (l = new d(
      "onChange",
      "change",
      null,
      l,
      n
    ), t.push({ event: l, listeners: e }));
  }
  var Cu = null, Du = null;
  function Mm(t) {
    kd(t, 0);
  }
  function Ai(t) {
    var e = ze(t);
    if (Gl(e)) return t;
  }
  function of(t, e) {
    if (t === "change") return e;
  }
  var df = !1;
  if (gl) {
    var Xc;
    if (gl) {
      var Qc = "oninput" in document;
      if (!Qc) {
        var hf = document.createElement("div");
        hf.setAttribute("oninput", "return;"), Qc = typeof hf.oninput == "function";
      }
      Xc = Qc;
    } else Xc = !1;
    df = Xc && (!document.documentMode || 9 < document.documentMode);
  }
  function mf() {
    Cu && (Cu.detachEvent("onpropertychange", yf), Du = Cu = null);
  }
  function yf(t) {
    if (t.propertyName === "value" && Ai(Du)) {
      var e = [];
      ff(
        e,
        Du,
        t,
        Nu(t)
      ), ta(Mm, e);
    }
  }
  function Cm(t, e, l) {
    t === "focusin" ? (mf(), Cu = e, Du = l, Cu.attachEvent("onpropertychange", yf)) : t === "focusout" && mf();
  }
  function Dm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ai(Du);
  }
  function Um(t, e) {
    if (t === "click") return Ai(e);
  }
  function qm(t, e) {
    if (t === "input" || t === "change")
      return Ai(e);
  }
  function xm(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Qe = typeof Object.is == "function" ? Object.is : xm;
  function Uu(t, e) {
    if (Qe(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), n = Object.keys(e);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!Aa.call(e, a) || !Qe(t[a], e[a]))
        return !1;
    }
    return !0;
  }
  function gf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function vf(t, e) {
    var l = gf(t);
    t = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (n = t + l.textContent.length, t <= e && n >= e)
          return { node: l, offset: e - t };
        t = n;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = gf(l);
    }
  }
  function pf(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? pf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function bf(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Xl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Xl(t.document);
    }
    return e;
  }
  function Vc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Bm = gl && "documentMode" in document && 11 >= document.documentMode, Ba = null, Zc = null, qu = null, Kc = !1;
  function Sf(t, e, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Kc || Ba == null || Ba !== Xl(n) || (n = Ba, "selectionStart" in n && Vc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), qu && Uu(qu, n) || (qu = n, n = oc(Zc, "onSelect"), 0 < n.length && (e = new d(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: n }), e.target = Ba)));
  }
  function ua(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var ja = {
    animationend: ua("Animation", "AnimationEnd"),
    animationiteration: ua("Animation", "AnimationIteration"),
    animationstart: ua("Animation", "AnimationStart"),
    transitionrun: ua("Transition", "TransitionRun"),
    transitionstart: ua("Transition", "TransitionStart"),
    transitioncancel: ua("Transition", "TransitionCancel"),
    transitionend: ua("Transition", "TransitionEnd")
  }, kc = {}, Ef = {};
  gl && (Ef = document.createElement("div").style, "AnimationEvent" in window || (delete ja.animationend.animation, delete ja.animationiteration.animation, delete ja.animationstart.animation), "TransitionEvent" in window || delete ja.transitionend.transition);
  function ia(t) {
    if (kc[t]) return kc[t];
    if (!ja[t]) return t;
    var e = ja[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Ef)
        return kc[t] = e[l];
    return t;
  }
  var _f = ia("animationend"), Af = ia("animationiteration"), Tf = ia("animationstart"), jm = ia("transitionrun"), Hm = ia("transitionstart"), wm = ia("transitioncancel"), Nf = ia("transitionend"), Of = /* @__PURE__ */ new Map(), Jc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Jc.push("scrollEnd");
  function pl(t, e) {
    Of.set(t, e), Rl(e, [t]);
  }
  var Ti = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, tl = [], Ha = 0, Wc = 0;
  function Ni() {
    for (var t = Ha, e = Wc = Ha = 0; e < t; ) {
      var l = tl[e];
      tl[e++] = null;
      var n = tl[e];
      tl[e++] = null;
      var a = tl[e];
      tl[e++] = null;
      var u = tl[e];
      if (tl[e++] = null, n !== null && a !== null) {
        var c = n.pending;
        c === null ? a.next = a : (a.next = c.next, c.next = a), n.pending = a;
      }
      u !== 0 && Rf(l, a, u);
    }
  }
  function Oi(t, e, l, n) {
    tl[Ha++] = t, tl[Ha++] = e, tl[Ha++] = l, tl[Ha++] = n, Wc |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
  }
  function $c(t, e, l, n) {
    return Oi(t, e, l, n), Ri(t);
  }
  function ca(t, e) {
    return Oi(t, null, null, e), Ri(t);
  }
  function Rf(t, e, l) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, u = t.return; u !== null; )
      u.childLanes |= l, n = u.alternate, n !== null && (n.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (a = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, a && e !== null && (a = 31 - se(l), t = u.hiddenUpdates, n = t[a], n === null ? t[a] = [e] : n.push(e), e.lane = l | 536870912), u) : null;
  }
  function Ri(t) {
    if (50 < ei)
      throw ei = 0, ur = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var wa = {};
  function Lm(t, e, l, n) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ve(t, e, l, n) {
    return new Lm(t, e, l, n);
  }
  function Fc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Jl(t, e) {
    var l = t.alternate;
    return l === null ? (l = Ve(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function zf(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function zi(t, e, l, n, a, u) {
    var c = 0;
    if (n = t, typeof t == "function") Fc(t) && (c = 1);
    else if (typeof t == "string")
      c = Vy(
        t,
        l,
        Y.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Xt:
          return t = Ve(31, l, e, a), t.elementType = Xt, t.lanes = u, t;
        case Et:
          return sa(l.children, a, u, e);
        case Ee:
          c = 8, a |= 24;
          break;
        case te:
          return t = Ve(12, l, e, a | 2), t.elementType = te, t.lanes = u, t;
        case ie:
          return t = Ve(13, l, e, a), t.elementType = ie, t.lanes = u, t;
        case Gt:
          return t = Ve(19, l, e, a), t.elementType = Gt, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Ht:
                c = 10;
                break t;
              case pe:
                c = 9;
                break t;
              case ue:
                c = 11;
                break t;
              case F:
                c = 14;
                break t;
              case ee:
                c = 16, n = null;
                break t;
            }
          c = 29, l = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), n = null;
      }
    return e = Ve(c, l, e, a), e.elementType = t, e.type = n, e.lanes = u, e;
  }
  function sa(t, e, l, n) {
    return t = Ve(7, t, n, e), t.lanes = l, t;
  }
  function Ic(t, e, l) {
    return t = Ve(6, t, null, e), t.lanes = l, t;
  }
  function Mf(t) {
    var e = Ve(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Pc(t, e, l) {
    return e = Ve(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Cf = /* @__PURE__ */ new WeakMap();
  function el(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Cf.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: Qn(e)
      }, Cf.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Qn(e)
    };
  }
  var La = [], Ya = 0, Mi = null, xu = 0, ll = [], nl = 0, pn = null, Ml = 1, Cl = "";
  function Wl(t, e) {
    La[Ya++] = xu, La[Ya++] = Mi, Mi = t, xu = e;
  }
  function Df(t, e, l) {
    ll[nl++] = Ml, ll[nl++] = Cl, ll[nl++] = pn, pn = t;
    var n = Ml;
    t = Cl;
    var a = 32 - se(n) - 1;
    n &= ~(1 << a), l += 1;
    var u = 32 - se(e) + a;
    if (30 < u) {
      var c = a - a % 5;
      u = (n & (1 << c) - 1).toString(32), n >>= c, a -= c, Ml = 1 << 32 - se(e) + a | l << a | n, Cl = u + t;
    } else
      Ml = 1 << u | l << a | n, Cl = t;
  }
  function ts(t) {
    t.return !== null && (Wl(t, 1), Df(t, 1, 0));
  }
  function es(t) {
    for (; t === Mi; )
      Mi = La[--Ya], La[Ya] = null, xu = La[--Ya], La[Ya] = null;
    for (; t === pn; )
      pn = ll[--nl], ll[nl] = null, Cl = ll[--nl], ll[nl] = null, Ml = ll[--nl], ll[nl] = null;
  }
  function Uf(t, e) {
    ll[nl++] = Ml, ll[nl++] = Cl, ll[nl++] = pn, Ml = e.id, Cl = e.overflow, pn = t;
  }
  var me = null, zt = null, dt = !1, bn = null, al = !1, ls = Error(r(519));
  function Sn(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Bu(el(e, t)), ls;
  }
  function qf(t) {
    var e = t.stateNode, l = t.type, n = t.memoizedProps;
    switch (e[Ut] = t, e[Dt] = n, l) {
      case "dialog":
        it("cancel", e), it("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        it("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ni.length; l++)
          it(ni[l], e);
        break;
      case "source":
        it("error", e);
        break;
      case "img":
      case "image":
      case "link":
        it("error", e), it("load", e);
        break;
      case "details":
        it("toggle", e);
        break;
      case "input":
        it("invalid", e), Su(
          e,
          n.value,
          n.defaultValue,
          n.checked,
          n.defaultChecked,
          n.type,
          n.name,
          !0
        );
        break;
      case "select":
        it("invalid", e);
        break;
      case "textarea":
        it("invalid", e), Au(e, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || n.suppressHydrationWarning === !0 || Fd(e.textContent, l) ? (n.popover != null && (it("beforetoggle", e), it("toggle", e)), n.onScroll != null && it("scroll", e), n.onScrollEnd != null && it("scrollend", e), n.onClick != null && (e.onclick = Ce), e = !0) : e = !1, e || Sn(t, !0);
  }
  function xf(t) {
    for (me = t.return; me; )
      switch (me.tag) {
        case 5:
        case 31:
        case 13:
          al = !1;
          return;
        case 27:
        case 3:
          al = !0;
          return;
        default:
          me = me.return;
      }
  }
  function Ga(t) {
    if (t !== me) return !1;
    if (!dt) return xf(t), dt = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Sr(t.type, t.memoizedProps)), l = !l), l && zt && Sn(t), xf(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      zt = ih(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      zt = ih(t);
    } else
      e === 27 ? (e = zt, xn(t.type) ? (t = Nr, Nr = null, zt = t) : zt = e) : zt = me ? il(t.stateNode.nextSibling) : null;
    return !0;
  }
  function ra() {
    zt = me = null, dt = !1;
  }
  function ns() {
    var t = bn;
    return t !== null && (xe === null ? xe = t : xe.push.apply(
      xe,
      t
    ), bn = null), t;
  }
  function Bu(t) {
    bn === null ? bn = [t] : bn.push(t);
  }
  var as = y(null), fa = null, $l = null;
  function En(t, e, l) {
    B(as, e._currentValue), e._currentValue = l;
  }
  function Fl(t) {
    t._currentValue = as.current, M(as);
  }
  function us(t, e, l) {
    for (; t !== null; ) {
      var n = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function is(t, e, l, n) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var u = a.dependencies;
      if (u !== null) {
        var c = a.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var o = u;
          u = a;
          for (var h = 0; h < e.length; h++)
            if (o.context === e[h]) {
              u.lanes |= l, o = u.alternate, o !== null && (o.lanes |= l), us(
                u.return,
                l,
                t
              ), n || (c = null);
              break t;
            }
          u = o.next;
        }
      } else if (a.tag === 18) {
        if (c = a.return, c === null) throw Error(r(341));
        c.lanes |= l, u = c.alternate, u !== null && (u.lanes |= l), us(c, l, t), c = null;
      } else c = a.child;
      if (c !== null) c.return = a;
      else
        for (c = a; c !== null; ) {
          if (c === t) {
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
  function Xa(t, e, l, n) {
    t = null;
    for (var a = e, u = !1; a !== null; ) {
      if (!u) {
        if ((a.flags & 524288) !== 0) u = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var c = a.alternate;
        if (c === null) throw Error(r(387));
        if (c = c.memoizedProps, c !== null) {
          var o = a.type;
          Qe(a.pendingProps.value, c.value) || (t !== null ? t.push(o) : t = [o]);
        }
      } else if (a === ot.current) {
        if (c = a.alternate, c === null) throw Error(r(387));
        c.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(si) : t = [si]);
      }
      a = a.return;
    }
    t !== null && is(
      e,
      t,
      l,
      n
    ), e.flags |= 262144;
  }
  function Ci(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Qe(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function oa(t) {
    fa = t, $l = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function ye(t) {
    return Bf(fa, t);
  }
  function Di(t, e) {
    return fa === null && oa(t), Bf(t, e);
  }
  function Bf(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, $l === null) {
      if (t === null) throw Error(r(308));
      $l = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else $l = $l.next = e;
    return l;
  }
  var Ym = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, n) {
        t.push(n);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, Gm = f.unstable_scheduleCallback, Xm = f.unstable_NormalPriority, Jt = {
    $$typeof: Ht,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function cs() {
    return {
      controller: new Ym(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ju(t) {
    t.refCount--, t.refCount === 0 && Gm(Xm, function() {
      t.controller.abort();
    });
  }
  var Hu = null, ss = 0, Qa = 0, Va = null;
  function Qm(t, e) {
    if (Hu === null) {
      var l = Hu = [];
      ss = 0, Qa = or(), Va = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return ss++, e.then(jf, jf), e;
  }
  function jf() {
    if (--ss === 0 && Hu !== null) {
      Va !== null && (Va.status = "fulfilled");
      var t = Hu;
      Hu = null, Qa = 0, Va = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Vm(t, e) {
    var l = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        l.push(a);
      }
    };
    return t.then(
      function() {
        n.status = "fulfilled", n.value = e;
        for (var a = 0; a < l.length; a++) (0, l[a])(e);
      },
      function(a) {
        for (n.status = "rejected", n.reason = a, a = 0; a < l.length; a++)
          (0, l[a])(void 0);
      }
    ), n;
  }
  var Hf = T.S;
  T.S = function(t, e) {
    Ed = Vt(), typeof e == "object" && e !== null && typeof e.then == "function" && Qm(t, e), Hf !== null && Hf(t, e);
  };
  var da = y(null);
  function rs() {
    var t = da.current;
    return t !== null ? t : Rt.pooledCache;
  }
  function Ui(t, e) {
    e === null ? B(da, da.current) : B(da, e.pool);
  }
  function wf() {
    var t = rs();
    return t === null ? null : { parent: Jt._currentValue, pool: t };
  }
  var Za = Error(r(460)), fs = Error(r(474)), qi = Error(r(542)), xi = { then: function() {
  } };
  function Lf(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Yf(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Ce, Ce), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Xf(t), t;
      default:
        if (typeof e.status == "string") e.then(Ce, Ce);
        else {
          if (t = Rt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = e, t.status = "pending", t.then(
            function(n) {
              if (e.status === "pending") {
                var a = e;
                a.status = "fulfilled", a.value = n;
              }
            },
            function(n) {
              if (e.status === "pending") {
                var a = e;
                a.status = "rejected", a.reason = n;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Xf(t), t;
        }
        throw ma = e, Za;
    }
  }
  function ha(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (ma = l, Za) : l;
    }
  }
  var ma = null;
  function Gf() {
    if (ma === null) throw Error(r(459));
    var t = ma;
    return ma = null, t;
  }
  function Xf(t) {
    if (t === Za || t === qi)
      throw Error(r(483));
  }
  var Ka = null, wu = 0;
  function Bi(t) {
    var e = wu;
    return wu += 1, Ka === null && (Ka = []), Yf(Ka, t, e);
  }
  function Lu(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function ji(t, e) {
    throw e.$$typeof === mt ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Qf(t) {
    function e(g, m) {
      if (t) {
        var p = g.deletions;
        p === null ? (g.deletions = [m], g.flags |= 16) : p.push(m);
      }
    }
    function l(g, m) {
      if (!t) return null;
      for (; m !== null; )
        e(g, m), m = m.sibling;
      return null;
    }
    function n(g) {
      for (var m = /* @__PURE__ */ new Map(); g !== null; )
        g.key !== null ? m.set(g.key, g) : m.set(g.index, g), g = g.sibling;
      return m;
    }
    function a(g, m) {
      return g = Jl(g, m), g.index = 0, g.sibling = null, g;
    }
    function u(g, m, p) {
      return g.index = p, t ? (p = g.alternate, p !== null ? (p = p.index, p < m ? (g.flags |= 67108866, m) : p) : (g.flags |= 67108866, m)) : (g.flags |= 1048576, m);
    }
    function c(g) {
      return t && g.alternate === null && (g.flags |= 67108866), g;
    }
    function o(g, m, p, R) {
      return m === null || m.tag !== 6 ? (m = Ic(p, g.mode, R), m.return = g, m) : (m = a(m, p), m.return = g, m);
    }
    function h(g, m, p, R) {
      var Z = p.type;
      return Z === Et ? O(
        g,
        m,
        p.props.children,
        R,
        p.key
      ) : m !== null && (m.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === ee && ha(Z) === m.type) ? (m = a(m, p.props), Lu(m, p), m.return = g, m) : (m = zi(
        p.type,
        p.key,
        p.props,
        null,
        g.mode,
        R
      ), Lu(m, p), m.return = g, m);
    }
    function b(g, m, p, R) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== p.containerInfo || m.stateNode.implementation !== p.implementation ? (m = Pc(p, g.mode, R), m.return = g, m) : (m = a(m, p.children || []), m.return = g, m);
    }
    function O(g, m, p, R, Z) {
      return m === null || m.tag !== 7 ? (m = sa(
        p,
        g.mode,
        R,
        Z
      ), m.return = g, m) : (m = a(m, p), m.return = g, m);
    }
    function z(g, m, p) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return m = Ic(
          "" + m,
          g.mode,
          p
        ), m.return = g, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case jt:
            return p = zi(
              m.type,
              m.key,
              m.props,
              null,
              g.mode,
              p
            ), Lu(p, m), p.return = g, p;
          case Pt:
            return m = Pc(
              m,
              g.mode,
              p
            ), m.return = g, m;
          case ee:
            return m = ha(m), z(g, m, p);
        }
        if (le(m) || Qt(m))
          return m = sa(
            m,
            g.mode,
            p,
            null
          ), m.return = g, m;
        if (typeof m.then == "function")
          return z(g, Bi(m), p);
        if (m.$$typeof === Ht)
          return z(
            g,
            Di(g, m),
            p
          );
        ji(g, m);
      }
      return null;
    }
    function S(g, m, p, R) {
      var Z = m !== null ? m.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return Z !== null ? null : o(g, m, "" + p, R);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case jt:
            return p.key === Z ? h(g, m, p, R) : null;
          case Pt:
            return p.key === Z ? b(g, m, p, R) : null;
          case ee:
            return p = ha(p), S(g, m, p, R);
        }
        if (le(p) || Qt(p))
          return Z !== null ? null : O(g, m, p, R, null);
        if (typeof p.then == "function")
          return S(
            g,
            m,
            Bi(p),
            R
          );
        if (p.$$typeof === Ht)
          return S(
            g,
            m,
            Di(g, p),
            R
          );
        ji(g, p);
      }
      return null;
    }
    function _(g, m, p, R, Z) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return g = g.get(p) || null, o(m, g, "" + R, Z);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case jt:
            return g = g.get(
              R.key === null ? p : R.key
            ) || null, h(m, g, R, Z);
          case Pt:
            return g = g.get(
              R.key === null ? p : R.key
            ) || null, b(m, g, R, Z);
          case ee:
            return R = ha(R), _(
              g,
              m,
              p,
              R,
              Z
            );
        }
        if (le(R) || Qt(R))
          return g = g.get(p) || null, O(m, g, R, Z, null);
        if (typeof R.then == "function")
          return _(
            g,
            m,
            p,
            Bi(R),
            Z
          );
        if (R.$$typeof === Ht)
          return _(
            g,
            m,
            p,
            Di(m, R),
            Z
          );
        ji(m, R);
      }
      return null;
    }
    function L(g, m, p, R) {
      for (var Z = null, gt = null, Q = m, P = m = 0, ft = null; Q !== null && P < p.length; P++) {
        Q.index > P ? (ft = Q, Q = null) : ft = Q.sibling;
        var vt = S(
          g,
          Q,
          p[P],
          R
        );
        if (vt === null) {
          Q === null && (Q = ft);
          break;
        }
        t && Q && vt.alternate === null && e(g, Q), m = u(vt, m, P), gt === null ? Z = vt : gt.sibling = vt, gt = vt, Q = ft;
      }
      if (P === p.length)
        return l(g, Q), dt && Wl(g, P), Z;
      if (Q === null) {
        for (; P < p.length; P++)
          Q = z(g, p[P], R), Q !== null && (m = u(
            Q,
            m,
            P
          ), gt === null ? Z = Q : gt.sibling = Q, gt = Q);
        return dt && Wl(g, P), Z;
      }
      for (Q = n(Q); P < p.length; P++)
        ft = _(
          Q,
          g,
          P,
          p[P],
          R
        ), ft !== null && (t && ft.alternate !== null && Q.delete(
          ft.key === null ? P : ft.key
        ), m = u(
          ft,
          m,
          P
        ), gt === null ? Z = ft : gt.sibling = ft, gt = ft);
      return t && Q.forEach(function(Ln) {
        return e(g, Ln);
      }), dt && Wl(g, P), Z;
    }
    function K(g, m, p, R) {
      if (p == null) throw Error(r(151));
      for (var Z = null, gt = null, Q = m, P = m = 0, ft = null, vt = p.next(); Q !== null && !vt.done; P++, vt = p.next()) {
        Q.index > P ? (ft = Q, Q = null) : ft = Q.sibling;
        var Ln = S(g, Q, vt.value, R);
        if (Ln === null) {
          Q === null && (Q = ft);
          break;
        }
        t && Q && Ln.alternate === null && e(g, Q), m = u(Ln, m, P), gt === null ? Z = Ln : gt.sibling = Ln, gt = Ln, Q = ft;
      }
      if (vt.done)
        return l(g, Q), dt && Wl(g, P), Z;
      if (Q === null) {
        for (; !vt.done; P++, vt = p.next())
          vt = z(g, vt.value, R), vt !== null && (m = u(vt, m, P), gt === null ? Z = vt : gt.sibling = vt, gt = vt);
        return dt && Wl(g, P), Z;
      }
      for (Q = n(Q); !vt.done; P++, vt = p.next())
        vt = _(Q, g, P, vt.value, R), vt !== null && (t && vt.alternate !== null && Q.delete(vt.key === null ? P : vt.key), m = u(vt, m, P), gt === null ? Z = vt : gt.sibling = vt, gt = vt);
      return t && Q.forEach(function(e0) {
        return e(g, e0);
      }), dt && Wl(g, P), Z;
    }
    function Ot(g, m, p, R) {
      if (typeof p == "object" && p !== null && p.type === Et && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case jt:
            t: {
              for (var Z = p.key; m !== null; ) {
                if (m.key === Z) {
                  if (Z = p.type, Z === Et) {
                    if (m.tag === 7) {
                      l(
                        g,
                        m.sibling
                      ), R = a(
                        m,
                        p.props.children
                      ), R.return = g, g = R;
                      break t;
                    }
                  } else if (m.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === ee && ha(Z) === m.type) {
                    l(
                      g,
                      m.sibling
                    ), R = a(m, p.props), Lu(R, p), R.return = g, g = R;
                    break t;
                  }
                  l(g, m);
                  break;
                } else e(g, m);
                m = m.sibling;
              }
              p.type === Et ? (R = sa(
                p.props.children,
                g.mode,
                R,
                p.key
              ), R.return = g, g = R) : (R = zi(
                p.type,
                p.key,
                p.props,
                null,
                g.mode,
                R
              ), Lu(R, p), R.return = g, g = R);
            }
            return c(g);
          case Pt:
            t: {
              for (Z = p.key; m !== null; ) {
                if (m.key === Z)
                  if (m.tag === 4 && m.stateNode.containerInfo === p.containerInfo && m.stateNode.implementation === p.implementation) {
                    l(
                      g,
                      m.sibling
                    ), R = a(m, p.children || []), R.return = g, g = R;
                    break t;
                  } else {
                    l(g, m);
                    break;
                  }
                else e(g, m);
                m = m.sibling;
              }
              R = Pc(p, g.mode, R), R.return = g, g = R;
            }
            return c(g);
          case ee:
            return p = ha(p), Ot(
              g,
              m,
              p,
              R
            );
        }
        if (le(p))
          return L(
            g,
            m,
            p,
            R
          );
        if (Qt(p)) {
          if (Z = Qt(p), typeof Z != "function") throw Error(r(150));
          return p = Z.call(p), K(
            g,
            m,
            p,
            R
          );
        }
        if (typeof p.then == "function")
          return Ot(
            g,
            m,
            Bi(p),
            R
          );
        if (p.$$typeof === Ht)
          return Ot(
            g,
            m,
            Di(g, p),
            R
          );
        ji(g, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p, m !== null && m.tag === 6 ? (l(g, m.sibling), R = a(m, p), R.return = g, g = R) : (l(g, m), R = Ic(p, g.mode, R), R.return = g, g = R), c(g)) : l(g, m);
    }
    return function(g, m, p, R) {
      try {
        wu = 0;
        var Z = Ot(
          g,
          m,
          p,
          R
        );
        return Ka = null, Z;
      } catch (Q) {
        if (Q === Za || Q === qi) throw Q;
        var gt = Ve(29, Q, null, g.mode);
        return gt.lanes = R, gt.return = g, gt;
      }
    };
  }
  var ya = Qf(!0), Vf = Qf(!1), _n = !1;
  function os(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ds(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function An(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Tn(t, e, l) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (St & 2) !== 0) {
      var a = n.pending;
      return a === null ? e.next = e : (e.next = a.next, a.next = e), n.pending = e, e = Ri(t), Rf(t, null, l), e;
    }
    return Oi(t, n, e, l), Ri(t);
  }
  function Yu(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, Al(t, l);
    }
  }
  function hs(t, e) {
    var l = t.updateQueue, n = t.alternate;
    if (n !== null && (n = n.updateQueue, l === n)) {
      var a = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? a = u = c : u = u.next = c, l = l.next;
        } while (l !== null);
        u === null ? a = u = e : u = u.next = e;
      } else a = u = e;
      l = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: u,
        shared: n.shared,
        callbacks: n.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var ms = !1;
  function Gu() {
    if (ms) {
      var t = Va;
      if (t !== null) throw t;
    }
  }
  function Xu(t, e, l, n) {
    ms = !1;
    var a = t.updateQueue;
    _n = !1;
    var u = a.firstBaseUpdate, c = a.lastBaseUpdate, o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var h = o, b = h.next;
      h.next = null, c === null ? u = b : c.next = b, c = h;
      var O = t.alternate;
      O !== null && (O = O.updateQueue, o = O.lastBaseUpdate, o !== c && (o === null ? O.firstBaseUpdate = b : o.next = b, O.lastBaseUpdate = h));
    }
    if (u !== null) {
      var z = a.baseState;
      c = 0, O = b = h = null, o = u;
      do {
        var S = o.lane & -536870913, _ = S !== o.lane;
        if (_ ? (rt & S) === S : (n & S) === S) {
          S !== 0 && S === Qa && (ms = !0), O !== null && (O = O.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          t: {
            var L = t, K = o;
            S = e;
            var Ot = l;
            switch (K.tag) {
              case 1:
                if (L = K.payload, typeof L == "function") {
                  z = L.call(Ot, z, S);
                  break t;
                }
                z = L;
                break t;
              case 3:
                L.flags = L.flags & -65537 | 128;
              case 0:
                if (L = K.payload, S = typeof L == "function" ? L.call(Ot, z, S) : L, S == null) break t;
                z = G({}, z, S);
                break t;
              case 2:
                _n = !0;
            }
          }
          S = o.callback, S !== null && (t.flags |= 64, _ && (t.flags |= 8192), _ = a.callbacks, _ === null ? a.callbacks = [S] : _.push(S));
        } else
          _ = {
            lane: S,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          }, O === null ? (b = O = _, h = z) : O = O.next = _, c |= S;
        if (o = o.next, o === null) {
          if (o = a.shared.pending, o === null)
            break;
          _ = o, o = _.next, _.next = null, a.lastBaseUpdate = _, a.shared.pending = null;
        }
      } while (!0);
      O === null && (h = z), a.baseState = h, a.firstBaseUpdate = b, a.lastBaseUpdate = O, u === null && (a.shared.lanes = 0), Mn |= c, t.lanes = c, t.memoizedState = z;
    }
  }
  function Zf(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function Kf(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        Zf(l[t], e);
  }
  var ka = y(null), Hi = y(0);
  function kf(t, e) {
    t = cn, B(Hi, t), B(ka, e), cn = t | e.baseLanes;
  }
  function ys() {
    B(Hi, cn), B(ka, ka.current);
  }
  function gs() {
    cn = Hi.current, M(ka), M(Hi);
  }
  var Ze = y(null), ul = null;
  function Nn(t) {
    var e = t.alternate;
    B(Lt, Lt.current & 1), B(Ze, t), ul === null && (e === null || ka.current !== null || e.memoizedState !== null) && (ul = t);
  }
  function vs(t) {
    B(Lt, Lt.current), B(Ze, t), ul === null && (ul = t);
  }
  function Jf(t) {
    t.tag === 22 ? (B(Lt, Lt.current), B(Ze, t), ul === null && (ul = t)) : On();
  }
  function On() {
    B(Lt, Lt.current), B(Ze, Ze.current);
  }
  function Ke(t) {
    M(Ze), ul === t && (ul = null), M(Lt);
  }
  var Lt = y(0);
  function wi(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Ar(l) || Tr(l)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Il = 0, $ = null, Tt = null, Wt = null, Li = !1, Ja = !1, ga = !1, Yi = 0, Qu = 0, Wa = null, Zm = 0;
  function xt() {
    throw Error(r(321));
  }
  function ps(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!Qe(t[l], e[l])) return !1;
    return !0;
  }
  function bs(t, e, l, n, a, u) {
    return Il = u, $ = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, T.H = t === null || t.memoizedState === null ? Uo : xs, ga = !1, u = l(n, a), ga = !1, Ja && (u = $f(
      e,
      l,
      n,
      a
    )), Wf(t), u;
  }
  function Wf(t) {
    T.H = Ku;
    var e = Tt !== null && Tt.next !== null;
    if (Il = 0, Wt = Tt = $ = null, Li = !1, Qu = 0, Wa = null, e) throw Error(r(300));
    t === null || $t || (t = t.dependencies, t !== null && Ci(t) && ($t = !0));
  }
  function $f(t, e, l, n) {
    $ = t;
    var a = 0;
    do {
      if (Ja && (Wa = null), Qu = 0, Ja = !1, 25 <= a) throw Error(r(301));
      if (a += 1, Wt = Tt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      T.H = qo, u = e(l, n);
    } while (Ja);
    return u;
  }
  function Km() {
    var t = T.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Vu(e) : e, t = t.useState()[0], (Tt !== null ? Tt.memoizedState : null) !== t && ($.flags |= 1024), e;
  }
  function Ss() {
    var t = Yi !== 0;
    return Yi = 0, t;
  }
  function Es(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function _s(t) {
    if (Li) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Li = !1;
    }
    Il = 0, Wt = Tt = $ = null, Ja = !1, Qu = Yi = 0, Wa = null;
  }
  function Ne() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Wt === null ? $.memoizedState = Wt = t : Wt = Wt.next = t, Wt;
  }
  function Yt() {
    if (Tt === null) {
      var t = $.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Tt.next;
    var e = Wt === null ? $.memoizedState : Wt.next;
    if (e !== null)
      Wt = e, Tt = t;
    else {
      if (t === null)
        throw $.alternate === null ? Error(r(467)) : Error(r(310));
      Tt = t, t = {
        memoizedState: Tt.memoizedState,
        baseState: Tt.baseState,
        baseQueue: Tt.baseQueue,
        queue: Tt.queue,
        next: null
      }, Wt === null ? $.memoizedState = Wt = t : Wt = Wt.next = t;
    }
    return Wt;
  }
  function Gi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Vu(t) {
    var e = Qu;
    return Qu += 1, Wa === null && (Wa = []), t = Yf(Wa, t, e), e = $, (Wt === null ? e.memoizedState : Wt.next) === null && (e = e.alternate, T.H = e === null || e.memoizedState === null ? Uo : xs), t;
  }
  function Xi(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Vu(t);
      if (t.$$typeof === Ht) return ye(t);
    }
    throw Error(r(438, String(t)));
  }
  function As(t) {
    var e = null, l = $.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var n = $.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (e = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Gi(), $.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), n = 0; n < t; n++)
        l[n] = $e;
    return e.index++, l;
  }
  function Pl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Qi(t) {
    var e = Yt();
    return Ts(e, Tt, t);
  }
  function Ts(t, e, l) {
    var n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = l;
    var a = t.baseQueue, u = n.pending;
    if (u !== null) {
      if (a !== null) {
        var c = a.next;
        a.next = u.next, u.next = c;
      }
      e.baseQueue = a = u, n.pending = null;
    }
    if (u = t.baseState, a === null) t.memoizedState = u;
    else {
      e = a.next;
      var o = c = null, h = null, b = e, O = !1;
      do {
        var z = b.lane & -536870913;
        if (z !== b.lane ? (rt & z) === z : (Il & z) === z) {
          var S = b.revertLane;
          if (S === 0)
            h !== null && (h = h.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }), z === Qa && (O = !0);
          else if ((Il & S) === S) {
            b = b.next, S === Qa && (O = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, h === null ? (o = h = z, c = u) : h = h.next = z, $.lanes |= S, Mn |= S;
          z = b.action, ga && l(u, z), u = b.hasEagerState ? b.eagerState : l(u, z);
        } else
          S = {
            lane: z,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, h === null ? (o = h = S, c = u) : h = h.next = S, $.lanes |= z, Mn |= z;
        b = b.next;
      } while (b !== null && b !== e);
      if (h === null ? c = u : h.next = o, !Qe(u, t.memoizedState) && ($t = !0, O && (l = Va, l !== null)))
        throw l;
      t.memoizedState = u, t.baseState = c, t.baseQueue = h, n.lastRenderedState = u;
    }
    return a === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function Ns(t) {
    var e = Yt(), l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = t;
    var n = l.dispatch, a = l.pending, u = e.memoizedState;
    if (a !== null) {
      l.pending = null;
      var c = a = a.next;
      do
        u = t(u, c.action), c = c.next;
      while (c !== a);
      Qe(u, e.memoizedState) || ($t = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
    }
    return [u, n];
  }
  function Ff(t, e, l) {
    var n = $, a = Yt(), u = dt;
    if (u) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = e();
    var c = !Qe(
      (Tt || a).memoizedState,
      l
    );
    if (c && (a.memoizedState = l, $t = !0), a = a.queue, zs(to.bind(null, n, a, t), [
      t
    ]), a.getSnapshot !== e || c || Wt !== null && Wt.memoizedState.tag & 1) {
      if (n.flags |= 2048, $a(
        9,
        { destroy: void 0 },
        Pf.bind(
          null,
          n,
          a,
          l,
          e
        ),
        null
      ), Rt === null) throw Error(r(349));
      u || (Il & 127) !== 0 || If(n, e, l);
    }
    return l;
  }
  function If(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = $.updateQueue, e === null ? (e = Gi(), $.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function Pf(t, e, l, n) {
    e.value = l, e.getSnapshot = n, eo(e) && lo(t);
  }
  function to(t, e, l) {
    return l(function() {
      eo(e) && lo(t);
    });
  }
  function eo(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !Qe(t, l);
    } catch {
      return !0;
    }
  }
  function lo(t) {
    var e = ca(t, 2);
    e !== null && Be(e, t, 2);
  }
  function Os(t) {
    var e = Ne();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), ga) {
        Ae(!0);
        try {
          l();
        } finally {
          Ae(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pl,
      lastRenderedState: t
    }, e;
  }
  function no(t, e, l, n) {
    return t.baseState = l, Ts(
      t,
      Tt,
      typeof n == "function" ? n : Pl
    );
  }
  function km(t, e, l, n, a) {
    if (Ki(t)) throw Error(r(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: a,
        action: t,
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
      T.T !== null ? l(!0) : u.isTransition = !1, n(u), l = e.pending, l === null ? (u.next = e.pending = u, ao(e, u)) : (u.next = l.next, e.pending = l.next = u);
    }
  }
  function ao(t, e) {
    var l = e.action, n = e.payload, a = t.state;
    if (e.isTransition) {
      var u = T.T, c = {};
      T.T = c;
      try {
        var o = l(a, n), h = T.S;
        h !== null && h(c, o), uo(t, e, o);
      } catch (b) {
        Rs(t, e, b);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), T.T = u;
      }
    } else
      try {
        u = l(a, n), uo(t, e, u);
      } catch (b) {
        Rs(t, e, b);
      }
  }
  function uo(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        io(t, e, n);
      },
      function(n) {
        return Rs(t, e, n);
      }
    ) : io(t, e, l);
  }
  function io(t, e, l) {
    e.status = "fulfilled", e.value = l, co(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, ao(t, l)));
  }
  function Rs(t, e, l) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        e.status = "rejected", e.reason = l, co(e), e = e.next;
      while (e !== n);
    }
    t.action = null;
  }
  function co(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function so(t, e) {
    return e;
  }
  function ro(t, e) {
    if (dt) {
      var l = Rt.formState;
      if (l !== null) {
        t: {
          var n = $;
          if (dt) {
            if (zt) {
              e: {
                for (var a = zt, u = al; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break e;
                  }
                  if (a = il(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break e;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                zt = il(
                  a.nextSibling
                ), n = a.data === "F!";
                break t;
              }
            }
            Sn(n);
          }
          n = !1;
        }
        n && (e = l[0]);
      }
    }
    return l = Ne(), l.memoizedState = l.baseState = e, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: so,
      lastRenderedState: e
    }, l.queue = n, l = Mo.bind(
      null,
      $,
      n
    ), n.dispatch = l, n = Os(!1), u = qs.bind(
      null,
      $,
      !1,
      n.queue
    ), n = Ne(), a = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, n.queue = a, l = km.bind(
      null,
      $,
      a,
      u,
      l
    ), a.dispatch = l, n.memoizedState = t, [e, l, !1];
  }
  function fo(t) {
    var e = Yt();
    return oo(e, Tt, t);
  }
  function oo(t, e, l) {
    if (e = Ts(
      t,
      e,
      so
    )[0], t = Qi(Pl)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var n = Vu(e);
      } catch (c) {
        throw c === Za ? qi : c;
      }
    else n = e;
    e = Yt();
    var a = e.queue, u = a.dispatch;
    return l !== e.memoizedState && ($.flags |= 2048, $a(
      9,
      { destroy: void 0 },
      Jm.bind(null, a, l),
      null
    )), [n, u, t];
  }
  function Jm(t, e) {
    t.action = e;
  }
  function ho(t) {
    var e = Yt(), l = Tt;
    if (l !== null)
      return oo(e, l, t);
    Yt(), e = e.memoizedState, l = Yt();
    var n = l.queue.dispatch;
    return l.memoizedState = t, [e, n, !1];
  }
  function $a(t, e, l, n) {
    return t = { tag: t, create: l, deps: n, inst: e, next: null }, e = $.updateQueue, e === null && (e = Gi(), $.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (n = l.next, l.next = t, t.next = n, e.lastEffect = t), t;
  }
  function mo() {
    return Yt().memoizedState;
  }
  function Vi(t, e, l, n) {
    var a = Ne();
    $.flags |= t, a.memoizedState = $a(
      1 | e,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function Zi(t, e, l, n) {
    var a = Yt();
    n = n === void 0 ? null : n;
    var u = a.memoizedState.inst;
    Tt !== null && n !== null && ps(n, Tt.memoizedState.deps) ? a.memoizedState = $a(e, u, l, n) : ($.flags |= t, a.memoizedState = $a(
      1 | e,
      u,
      l,
      n
    ));
  }
  function yo(t, e) {
    Vi(8390656, 8, t, e);
  }
  function zs(t, e) {
    Zi(2048, 8, t, e);
  }
  function Wm(t) {
    $.flags |= 4;
    var e = $.updateQueue;
    if (e === null)
      e = Gi(), $.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function go(t) {
    var e = Yt().memoizedState;
    return Wm({ ref: e, nextImpl: t }), function() {
      if ((St & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function vo(t, e) {
    return Zi(4, 2, t, e);
  }
  function po(t, e) {
    return Zi(4, 4, t, e);
  }
  function bo(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function So(t, e, l) {
    l = l != null ? l.concat([t]) : null, Zi(4, 4, bo.bind(null, e, t), l);
  }
  function Ms() {
  }
  function Eo(t, e) {
    var l = Yt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && ps(e, n[1]) ? n[0] : (l.memoizedState = [t, e], t);
  }
  function _o(t, e) {
    var l = Yt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && ps(e, n[1]))
      return n[0];
    if (n = t(), ga) {
      Ae(!0);
      try {
        t();
      } finally {
        Ae(!1);
      }
    }
    return l.memoizedState = [n, e], n;
  }
  function Cs(t, e, l) {
    return l === void 0 || (Il & 1073741824) !== 0 && (rt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = Ad(), $.lanes |= t, Mn |= t, l);
  }
  function Ao(t, e, l, n) {
    return Qe(l, e) ? l : ka.current !== null ? (t = Cs(t, l, n), Qe(t, e) || ($t = !0), t) : (Il & 42) === 0 || (Il & 1073741824) !== 0 && (rt & 261930) === 0 ? ($t = !0, t.memoizedState = l) : (t = Ad(), $.lanes |= t, Mn |= t, e);
  }
  function To(t, e, l, n, a) {
    var u = H.p;
    H.p = u !== 0 && 8 > u ? u : 8;
    var c = T.T, o = {};
    T.T = o, qs(t, !1, e, l);
    try {
      var h = a(), b = T.S;
      if (b !== null && b(o, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var O = Vm(
          h,
          n
        );
        Zu(
          t,
          e,
          O,
          We(t)
        );
      } else
        Zu(
          t,
          e,
          n,
          We(t)
        );
    } catch (z) {
      Zu(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: z },
        We()
      );
    } finally {
      H.p = u, c !== null && o.types !== null && (c.types = o.types), T.T = c;
    }
  }
  function $m() {
  }
  function Ds(t, e, l, n) {
    if (t.tag !== 5) throw Error(r(476));
    var a = No(t).queue;
    To(
      t,
      a,
      e,
      w,
      l === null ? $m : function() {
        return Oo(t), l(n);
      }
    );
  }
  function No(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: w,
      baseState: w,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pl,
        lastRenderedState: w
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pl,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Oo(t) {
    var e = No(t);
    e.next === null && (e = t.alternate.memoizedState), Zu(
      t,
      e.next.queue,
      {},
      We()
    );
  }
  function Us() {
    return ye(si);
  }
  function Ro() {
    return Yt().memoizedState;
  }
  function zo() {
    return Yt().memoizedState;
  }
  function Fm(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = We();
          t = An(l);
          var n = Tn(e, t, l);
          n !== null && (Be(n, e, l), Yu(n, e, l)), e = { cache: cs() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Im(t, e, l) {
    var n = We();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ki(t) ? Co(e, l) : (l = $c(t, e, l, n), l !== null && (Be(l, t, n), Do(l, e, n)));
  }
  function Mo(t, e, l) {
    var n = We();
    Zu(t, e, l, n);
  }
  function Zu(t, e, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ki(t)) Co(e, a);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var c = e.lastRenderedState, o = u(c, l);
          if (a.hasEagerState = !0, a.eagerState = o, Qe(o, c))
            return Oi(t, e, a, 0), Rt === null && Ni(), !1;
        } catch {
        }
      if (l = $c(t, e, a, n), l !== null)
        return Be(l, t, n), Do(l, e, n), !0;
    }
    return !1;
  }
  function qs(t, e, l, n) {
    if (n = {
      lane: 2,
      revertLane: or(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ki(t)) {
      if (e) throw Error(r(479));
    } else
      e = $c(
        t,
        l,
        n,
        2
      ), e !== null && Be(e, t, 2);
  }
  function Ki(t) {
    var e = t.alternate;
    return t === $ || e !== null && e === $;
  }
  function Co(t, e) {
    Ja = Li = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Do(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, Al(t, l);
    }
  }
  var Ku = {
    readContext: ye,
    use: Xi,
    useCallback: xt,
    useContext: xt,
    useEffect: xt,
    useImperativeHandle: xt,
    useLayoutEffect: xt,
    useInsertionEffect: xt,
    useMemo: xt,
    useReducer: xt,
    useRef: xt,
    useState: xt,
    useDebugValue: xt,
    useDeferredValue: xt,
    useTransition: xt,
    useSyncExternalStore: xt,
    useId: xt,
    useHostTransitionStatus: xt,
    useFormState: xt,
    useActionState: xt,
    useOptimistic: xt,
    useMemoCache: xt,
    useCacheRefresh: xt
  };
  Ku.useEffectEvent = xt;
  var Uo = {
    readContext: ye,
    use: Xi,
    useCallback: function(t, e) {
      return Ne().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: ye,
    useEffect: yo,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, Vi(
        4194308,
        4,
        bo.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return Vi(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Vi(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = Ne();
      e = e === void 0 ? null : e;
      var n = t();
      if (ga) {
        Ae(!0);
        try {
          t();
        } finally {
          Ae(!1);
        }
      }
      return l.memoizedState = [n, e], n;
    },
    useReducer: function(t, e, l) {
      var n = Ne();
      if (l !== void 0) {
        var a = l(e);
        if (ga) {
          Ae(!0);
          try {
            l(e);
          } finally {
            Ae(!1);
          }
        }
      } else a = e;
      return n.memoizedState = n.baseState = a, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: a
      }, n.queue = t, t = t.dispatch = Im.bind(
        null,
        $,
        t
      ), [n.memoizedState, t];
    },
    useRef: function(t) {
      var e = Ne();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Os(t);
      var e = t.queue, l = Mo.bind(null, $, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: Ms,
    useDeferredValue: function(t, e) {
      var l = Ne();
      return Cs(l, t, e);
    },
    useTransition: function() {
      var t = Os(!1);
      return t = To.bind(
        null,
        $,
        t.queue,
        !0,
        !1
      ), Ne().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var n = $, a = Ne();
      if (dt) {
        if (l === void 0)
          throw Error(r(407));
        l = l();
      } else {
        if (l = e(), Rt === null)
          throw Error(r(349));
        (rt & 127) !== 0 || If(n, e, l);
      }
      a.memoizedState = l;
      var u = { value: l, getSnapshot: e };
      return a.queue = u, yo(to.bind(null, n, u, t), [
        t
      ]), n.flags |= 2048, $a(
        9,
        { destroy: void 0 },
        Pf.bind(
          null,
          n,
          u,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = Ne(), e = Rt.identifierPrefix;
      if (dt) {
        var l = Cl, n = Ml;
        l = (n & ~(1 << 32 - se(n) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Yi++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = Zm++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Us,
    useFormState: ro,
    useActionState: ro,
    useOptimistic: function(t) {
      var e = Ne();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = qs.bind(
        null,
        $,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: As,
    useCacheRefresh: function() {
      return Ne().memoizedState = Fm.bind(
        null,
        $
      );
    },
    useEffectEvent: function(t) {
      var e = Ne(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((St & 2) !== 0)
          throw Error(r(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, xs = {
    readContext: ye,
    use: Xi,
    useCallback: Eo,
    useContext: ye,
    useEffect: zs,
    useImperativeHandle: So,
    useInsertionEffect: vo,
    useLayoutEffect: po,
    useMemo: _o,
    useReducer: Qi,
    useRef: mo,
    useState: function() {
      return Qi(Pl);
    },
    useDebugValue: Ms,
    useDeferredValue: function(t, e) {
      var l = Yt();
      return Ao(
        l,
        Tt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Qi(Pl)[0], e = Yt().memoizedState;
      return [
        typeof t == "boolean" ? t : Vu(t),
        e
      ];
    },
    useSyncExternalStore: Ff,
    useId: Ro,
    useHostTransitionStatus: Us,
    useFormState: fo,
    useActionState: fo,
    useOptimistic: function(t, e) {
      var l = Yt();
      return no(l, Tt, t, e);
    },
    useMemoCache: As,
    useCacheRefresh: zo
  };
  xs.useEffectEvent = go;
  var qo = {
    readContext: ye,
    use: Xi,
    useCallback: Eo,
    useContext: ye,
    useEffect: zs,
    useImperativeHandle: So,
    useInsertionEffect: vo,
    useLayoutEffect: po,
    useMemo: _o,
    useReducer: Ns,
    useRef: mo,
    useState: function() {
      return Ns(Pl);
    },
    useDebugValue: Ms,
    useDeferredValue: function(t, e) {
      var l = Yt();
      return Tt === null ? Cs(l, t, e) : Ao(
        l,
        Tt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Ns(Pl)[0], e = Yt().memoizedState;
      return [
        typeof t == "boolean" ? t : Vu(t),
        e
      ];
    },
    useSyncExternalStore: Ff,
    useId: Ro,
    useHostTransitionStatus: Us,
    useFormState: ho,
    useActionState: ho,
    useOptimistic: function(t, e) {
      var l = Yt();
      return Tt !== null ? no(l, Tt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: As,
    useCacheRefresh: zo
  };
  qo.useEffectEvent = go;
  function Bs(t, e, l, n) {
    e = t.memoizedState, l = l(n, e), l = l == null ? e : G({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var js = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var n = We(), a = An(n);
      a.payload = e, l != null && (a.callback = l), e = Tn(t, a, n), e !== null && (Be(e, t, n), Yu(e, t, n));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var n = We(), a = An(n);
      a.tag = 1, a.payload = e, l != null && (a.callback = l), e = Tn(t, a, n), e !== null && (Be(e, t, n), Yu(e, t, n));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = We(), n = An(l);
      n.tag = 2, e != null && (n.callback = e), e = Tn(t, n, l), e !== null && (Be(e, t, l), Yu(e, t, l));
    }
  };
  function xo(t, e, l, n, a, u, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, u, c) : e.prototype && e.prototype.isPureReactComponent ? !Uu(l, n) || !Uu(a, u) : !0;
  }
  function Bo(t, e, l, n) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, n), e.state !== t && js.enqueueReplaceState(e, e.state, null);
  }
  function va(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var n in e)
        n !== "ref" && (l[n] = e[n]);
    }
    if (t = t.defaultProps) {
      l === e && (l = G({}, l));
      for (var a in t)
        l[a] === void 0 && (l[a] = t[a]);
    }
    return l;
  }
  function jo(t) {
    Ti(t);
  }
  function Ho(t) {
    console.error(t);
  }
  function wo(t) {
    Ti(t);
  }
  function ki(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Lo(t, e, l) {
    try {
      var n = t.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Hs(t, e, l) {
    return l = An(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      ki(t, e);
    }, l;
  }
  function Yo(t) {
    return t = An(t), t.tag = 3, t;
  }
  function Go(t, e, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = n.value;
      t.payload = function() {
        return a(u);
      }, t.callback = function() {
        Lo(e, l, n);
      };
    }
    var c = l.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      Lo(e, l, n), typeof a != "function" && (Cn === null ? Cn = /* @__PURE__ */ new Set([this]) : Cn.add(this));
      var o = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function Pm(t, e, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (e = l.alternate, e !== null && Xa(
        e,
        l,
        a,
        !0
      ), l = Ze.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return ul === null ? uc() : l.alternate === null && Bt === 0 && (Bt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === xi ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : e.add(n), sr(t, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === xi ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), sr(t, n, a)), !1;
        }
        throw Error(r(435, l.tag));
      }
      return sr(t, n, a), uc(), !1;
    }
    if (dt)
      return e = Ze.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = a, n !== ls && (t = Error(r(422), { cause: n }), Bu(el(t, l)))) : (n !== ls && (e = Error(r(423), {
        cause: n
      }), Bu(
        el(e, l)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, n = el(n, l), a = Hs(
        t.stateNode,
        n,
        a
      ), hs(t, a), Bt !== 4 && (Bt = 2)), !1;
    var u = Error(r(520), { cause: n });
    if (u = el(u, l), ti === null ? ti = [u] : ti.push(u), Bt !== 4 && (Bt = 2), e === null) return !0;
    n = el(n, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = a & -a, l.lanes |= t, t = Hs(l.stateNode, n, t), hs(l, t), !1;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Cn === null || !Cn.has(u))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = Yo(a), Go(
              a,
              t,
              l,
              n
            ), hs(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var ws = Error(r(461)), $t = !1;
  function ge(t, e, l, n) {
    e.child = t === null ? Vf(e, null, l, n) : ya(
      e,
      t.child,
      l,
      n
    );
  }
  function Xo(t, e, l, n, a) {
    l = l.render;
    var u = e.ref;
    if ("ref" in n) {
      var c = {};
      for (var o in n)
        o !== "ref" && (c[o] = n[o]);
    } else c = n;
    return oa(e), n = bs(
      t,
      e,
      l,
      c,
      u,
      a
    ), o = Ss(), t !== null && !$t ? (Es(t, e, a), tn(t, e, a)) : (dt && o && ts(e), e.flags |= 1, ge(t, e, n, a), e.child);
  }
  function Qo(t, e, l, n, a) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !Fc(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, Vo(
        t,
        e,
        u,
        n,
        a
      )) : (t = zi(
        l.type,
        null,
        n,
        e,
        e.mode,
        a
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !Ks(t, a)) {
      var c = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Uu, l(c, n) && t.ref === e.ref)
        return tn(t, e, a);
    }
    return e.flags |= 1, t = Jl(u, n), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Vo(t, e, l, n, a) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Uu(u, n) && t.ref === e.ref)
        if ($t = !1, e.pendingProps = n = u, Ks(t, a))
          (t.flags & 131072) !== 0 && ($t = !0);
        else
          return e.lanes = t.lanes, tn(t, e, a);
    }
    return Ls(
      t,
      e,
      l,
      n,
      a
    );
  }
  function Zo(t, e, l, n) {
    var a = n.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | l : l, t !== null) {
          for (n = e.child = t.child, a = 0; n !== null; )
            a = a | n.lanes | n.childLanes, n = n.sibling;
          n = a & ~u;
        } else n = 0, e.child = null;
        return Ko(
          t,
          e,
          u,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Ui(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? kf(e, u) : ys(), Jf(e);
      else
        return n = e.lanes = 536870912, Ko(
          t,
          e,
          u !== null ? u.baseLanes | l : l,
          l,
          n
        );
    } else
      u !== null ? (Ui(e, u.cachePool), kf(e, u), On(), e.memoizedState = null) : (t !== null && Ui(e, null), ys(), On());
    return ge(t, e, a, l), e.child;
  }
  function ku(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Ko(t, e, l, n, a) {
    var u = rs();
    return u = u === null ? null : { parent: Jt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, t !== null && Ui(e, null), ys(), Jf(e), t !== null && Xa(t, e, n, !0), e.childLanes = a, null;
  }
  function Ji(t, e) {
    return e = $i(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function ko(t, e, l) {
    return ya(e, t.child, null, l), t = Ji(e, e.pendingProps), t.flags |= 2, Ke(e), e.memoizedState = null, t;
  }
  function ty(t, e, l) {
    var n = e.pendingProps, a = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (dt) {
        if (n.mode === "hidden")
          return t = Ji(e, n), e.lanes = 536870912, ku(null, t);
        if (vs(e), (t = zt) ? (t = uh(
          t,
          al
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: pn !== null ? { id: Ml, overflow: Cl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Mf(t), l.return = e, e.child = l, me = e, zt = null)) : t = null, t === null) throw Sn(e);
        return e.lanes = 536870912, null;
      }
      return Ji(e, n);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (vs(e), a)
        if (e.flags & 256)
          e.flags &= -257, e = ko(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if ($t || Xa(t, e, l, !1), a = (l & t.childLanes) !== 0, $t || a) {
        if (n = Rt, n !== null && (c = Tl(n, l), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, ca(t, c), Be(n, t, c), ws;
        uc(), e = ko(
          t,
          e,
          l
        );
      } else
        t = u.treeContext, zt = il(c.nextSibling), me = e, dt = !0, bn = null, al = !1, t !== null && Uf(e, t), e = Ji(e, n), e.flags |= 4096;
      return e;
    }
    return t = Jl(t.child, {
      mode: n.mode,
      children: n.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Wi(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(r(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Ls(t, e, l, n, a) {
    return oa(e), l = bs(
      t,
      e,
      l,
      n,
      void 0,
      a
    ), n = Ss(), t !== null && !$t ? (Es(t, e, a), tn(t, e, a)) : (dt && n && ts(e), e.flags |= 1, ge(t, e, l, a), e.child);
  }
  function Jo(t, e, l, n, a, u) {
    return oa(e), e.updateQueue = null, l = $f(
      e,
      n,
      l,
      a
    ), Wf(t), n = Ss(), t !== null && !$t ? (Es(t, e, u), tn(t, e, u)) : (dt && n && ts(e), e.flags |= 1, ge(t, e, l, u), e.child);
  }
  function Wo(t, e, l, n, a) {
    if (oa(e), e.stateNode === null) {
      var u = wa, c = l.contextType;
      typeof c == "object" && c !== null && (u = ye(c)), u = new l(n, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = js, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = n, u.state = e.memoizedState, u.refs = {}, os(e), c = l.contextType, u.context = typeof c == "object" && c !== null ? ye(c) : wa, u.state = e.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (Bs(
        e,
        l,
        c,
        n
      ), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && js.enqueueReplaceState(u, u.state, null), Xu(e, n, u, a), Gu(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), n = !0;
    } else if (t === null) {
      u = e.stateNode;
      var o = e.memoizedProps, h = va(l, o);
      u.props = h;
      var b = u.context, O = l.contextType;
      c = wa, typeof O == "object" && O !== null && (c = ye(O));
      var z = l.getDerivedStateFromProps;
      O = typeof z == "function" || typeof u.getSnapshotBeforeUpdate == "function", o = e.pendingProps !== o, O || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o || b !== c) && Bo(
        e,
        u,
        n,
        c
      ), _n = !1;
      var S = e.memoizedState;
      u.state = S, Xu(e, n, u, a), Gu(), b = e.memoizedState, o || S !== b || _n ? (typeof z == "function" && (Bs(
        e,
        l,
        z,
        n
      ), b = e.memoizedState), (h = _n || xo(
        e,
        l,
        h,
        n,
        S,
        b,
        c
      )) ? (O || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = b), u.props = n, u.state = b, u.context = c, n = h) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
    } else {
      u = e.stateNode, ds(t, e), c = e.memoizedProps, O = va(l, c), u.props = O, z = e.pendingProps, S = u.context, b = l.contextType, h = wa, typeof b == "object" && b !== null && (h = ye(b)), o = l.getDerivedStateFromProps, (b = typeof o == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== z || S !== h) && Bo(
        e,
        u,
        n,
        h
      ), _n = !1, S = e.memoizedState, u.state = S, Xu(e, n, u, a), Gu();
      var _ = e.memoizedState;
      c !== z || S !== _ || _n || t !== null && t.dependencies !== null && Ci(t.dependencies) ? (typeof o == "function" && (Bs(
        e,
        l,
        o,
        n
      ), _ = e.memoizedState), (O = _n || xo(
        e,
        l,
        O,
        n,
        S,
        _,
        h
      ) || t !== null && t.dependencies !== null && Ci(t.dependencies)) ? (b || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(n, _, h), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        n,
        _,
        h
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = _), u.props = n, u.state = _, u.context = h, n = O) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), n = !1);
    }
    return u = n, Wi(t, e), n = (e.flags & 128) !== 0, u || n ? (u = e.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && n ? (e.child = ya(
      e,
      t.child,
      null,
      a
    ), e.child = ya(
      e,
      null,
      l,
      a
    )) : ge(t, e, l, a), e.memoizedState = u.state, t = e.child) : t = tn(
      t,
      e,
      a
    ), t;
  }
  function $o(t, e, l, n) {
    return ra(), e.flags |= 256, ge(t, e, l, n), e.child;
  }
  var Ys = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Gs(t) {
    return { baseLanes: t, cachePool: wf() };
  }
  function Xs(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Je), t;
  }
  function Fo(t, e, l) {
    var n = e.pendingProps, a = !1, u = (e.flags & 128) !== 0, c;
    if ((c = u) || (c = t !== null && t.memoizedState === null ? !1 : (Lt.current & 2) !== 0), c && (a = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (dt) {
        if (a ? Nn(e) : On(), (t = zt) ? (t = uh(
          t,
          al
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: pn !== null ? { id: Ml, overflow: Cl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Mf(t), l.return = e, e.child = l, me = e, zt = null)) : t = null, t === null) throw Sn(e);
        return Tr(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var o = n.children;
      return n = n.fallback, a ? (On(), a = e.mode, o = $i(
        { mode: "hidden", children: o },
        a
      ), n = sa(
        n,
        a,
        l,
        null
      ), o.return = e, n.return = e, o.sibling = n, e.child = o, n = e.child, n.memoizedState = Gs(l), n.childLanes = Xs(
        t,
        c,
        l
      ), e.memoizedState = Ys, ku(null, n)) : (Nn(e), Qs(e, o));
    }
    var h = t.memoizedState;
    if (h !== null && (o = h.dehydrated, o !== null)) {
      if (u)
        e.flags & 256 ? (Nn(e), e.flags &= -257, e = Vs(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (On(), e.child = t.child, e.flags |= 128, e = null) : (On(), o = n.fallback, a = e.mode, n = $i(
          { mode: "visible", children: n.children },
          a
        ), o = sa(
          o,
          a,
          l,
          null
        ), o.flags |= 2, n.return = e, o.return = e, n.sibling = o, e.child = n, ya(
          e,
          t.child,
          null,
          l
        ), n = e.child, n.memoizedState = Gs(l), n.childLanes = Xs(
          t,
          c,
          l
        ), e.memoizedState = Ys, e = ku(null, n));
      else if (Nn(e), Tr(o)) {
        if (c = o.nextSibling && o.nextSibling.dataset, c) var b = c.dgst;
        c = b, n = Error(r(419)), n.stack = "", n.digest = c, Bu({ value: n, source: null, stack: null }), e = Vs(
          t,
          e,
          l
        );
      } else if ($t || Xa(t, e, l, !1), c = (l & t.childLanes) !== 0, $t || c) {
        if (c = Rt, c !== null && (n = Tl(c, l), n !== 0 && n !== h.retryLane))
          throw h.retryLane = n, ca(t, n), Be(c, t, n), ws;
        Ar(o) || uc(), e = Vs(
          t,
          e,
          l
        );
      } else
        Ar(o) ? (e.flags |= 192, e.child = t.child, e = null) : (t = h.treeContext, zt = il(
          o.nextSibling
        ), me = e, dt = !0, bn = null, al = !1, t !== null && Uf(e, t), e = Qs(
          e,
          n.children
        ), e.flags |= 4096);
      return e;
    }
    return a ? (On(), o = n.fallback, a = e.mode, h = t.child, b = h.sibling, n = Jl(h, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = h.subtreeFlags & 65011712, b !== null ? o = Jl(
      b,
      o
    ) : (o = sa(
      o,
      a,
      l,
      null
    ), o.flags |= 2), o.return = e, n.return = e, n.sibling = o, e.child = n, ku(null, n), n = e.child, o = t.child.memoizedState, o === null ? o = Gs(l) : (a = o.cachePool, a !== null ? (h = Jt._currentValue, a = a.parent !== h ? { parent: h, pool: h } : a) : a = wf(), o = {
      baseLanes: o.baseLanes | l,
      cachePool: a
    }), n.memoizedState = o, n.childLanes = Xs(
      t,
      c,
      l
    ), e.memoizedState = Ys, ku(t.child, n)) : (Nn(e), l = t.child, t = l.sibling, l = Jl(l, {
      mode: "visible",
      children: n.children
    }), l.return = e, l.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function Qs(t, e) {
    return e = $i(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function $i(t, e) {
    return t = Ve(22, t, null, e), t.lanes = 0, t;
  }
  function Vs(t, e, l) {
    return ya(e, t.child, null, l), t = Qs(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Io(t, e, l) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e), us(t.return, e, l);
  }
  function Zs(t, e, l, n, a, u) {
    var c = t.memoizedState;
    c === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: l,
      tailMode: a,
      treeForkCount: u
    } : (c.isBackwards = e, c.rendering = null, c.renderingStartTime = 0, c.last = n, c.tail = l, c.tailMode = a, c.treeForkCount = u);
  }
  function Po(t, e, l) {
    var n = e.pendingProps, a = n.revealOrder, u = n.tail;
    n = n.children;
    var c = Lt.current, o = (c & 2) !== 0;
    if (o ? (c = c & 1 | 2, e.flags |= 128) : c &= 1, B(Lt, c), ge(t, e, n, l), n = dt ? xu : 0, !o && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Io(t, l, e);
        else if (t.tag === 19)
          Io(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (a) {
      case "forwards":
        for (l = e.child, a = null; l !== null; )
          t = l.alternate, t !== null && wi(t) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = e.child, e.child = null) : (a = l.sibling, l.sibling = null), Zs(
          e,
          !1,
          a,
          l,
          u,
          n
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, a = e.child, e.child = null; a !== null; ) {
          if (t = a.alternate, t !== null && wi(t) === null) {
            e.child = a;
            break;
          }
          t = a.sibling, a.sibling = l, l = a, a = t;
        }
        Zs(
          e,
          !0,
          l,
          null,
          u,
          n
        );
        break;
      case "together":
        Zs(
          e,
          !1,
          null,
          null,
          void 0,
          n
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function tn(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), Mn |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (Xa(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, l = Jl(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = Jl(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function Ks(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Ci(t)));
  }
  function ey(t, e, l) {
    switch (e.tag) {
      case 3:
        de(e, e.stateNode.containerInfo), En(e, Jt, t.memoizedState.cache), ra();
        break;
      case 27:
      case 5:
        Oe(e);
        break;
      case 4:
        de(e, e.stateNode.containerInfo);
        break;
      case 10:
        En(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, vs(e), null;
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Nn(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? Fo(t, e, l) : (Nn(e), t = tn(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        Nn(e);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (n = (l & e.childLanes) !== 0, n || (Xa(
          t,
          e,
          l,
          !1
        ), n = (l & e.childLanes) !== 0), a) {
          if (n)
            return Po(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), B(Lt, Lt.current), n) break;
        return null;
      case 22:
        return e.lanes = 0, Zo(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        En(e, Jt, t.memoizedState.cache);
    }
    return tn(t, e, l);
  }
  function td(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        $t = !0;
      else {
        if (!Ks(t, l) && (e.flags & 128) === 0)
          return $t = !1, ey(
            t,
            e,
            l
          );
        $t = (t.flags & 131072) !== 0;
      }
    else
      $t = !1, dt && (e.flags & 1048576) !== 0 && Df(e, xu, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (t = ha(e.elementType), e.type = t, typeof t == "function")
            Fc(t) ? (n = va(t, n), e.tag = 1, e = Wo(
              null,
              e,
              t,
              n,
              l
            )) : (e.tag = 0, e = Ls(
              null,
              e,
              t,
              n,
              l
            ));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === ue) {
                e.tag = 11, e = Xo(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              } else if (a === F) {
                e.tag = 14, e = Qo(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              }
            }
            throw e = fl(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return Ls(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return n = e.type, a = va(
          n,
          e.pendingProps
        ), Wo(
          t,
          e,
          n,
          a,
          l
        );
      case 3:
        t: {
          if (de(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          n = e.pendingProps;
          var u = e.memoizedState;
          a = u.element, ds(t, e), Xu(e, n, null, l);
          var c = e.memoizedState;
          if (n = c.cache, En(e, Jt, n), n !== u.cache && is(
            e,
            [Jt],
            l,
            !0
          ), Gu(), n = c.element, u.isDehydrated)
            if (u = {
              element: n,
              isDehydrated: !1,
              cache: c.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = $o(
                t,
                e,
                n,
                l
              );
              break t;
            } else if (n !== a) {
              a = el(
                Error(r(424)),
                e
              ), Bu(a), e = $o(
                t,
                e,
                n,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, zt = il(t.firstChild), me = e, dt = !0, bn = null, al = !0, l = Vf(
                e,
                null,
                n,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (ra(), n === a) {
              e = tn(
                t,
                e,
                l
              );
              break t;
            }
            ge(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Wi(t, e), t === null ? (l = oh(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : dt || (l = e.type, t = e.pendingProps, n = dc(
          et.current
        ).createElement(l), n[Ut] = e, n[Dt] = t, ve(n, l, t), Kt(n), e.stateNode = n) : e.memoizedState = oh(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Oe(e), t === null && dt && (n = e.stateNode = sh(
          e.type,
          e.pendingProps,
          et.current
        ), me = e, al = !0, a = zt, xn(e.type) ? (Nr = a, zt = il(n.firstChild)) : zt = a), ge(
          t,
          e,
          e.pendingProps.children,
          l
        ), Wi(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && dt && ((a = n = zt) && (n = Dy(
          n,
          e.type,
          e.pendingProps,
          al
        ), n !== null ? (e.stateNode = n, me = e, zt = il(n.firstChild), al = !1, a = !0) : a = !1), a || Sn(e)), Oe(e), a = e.type, u = e.pendingProps, c = t !== null ? t.memoizedProps : null, n = u.children, Sr(a, u) ? n = null : c !== null && Sr(a, c) && (e.flags |= 32), e.memoizedState !== null && (a = bs(
          t,
          e,
          Km,
          null,
          null,
          l
        ), si._currentValue = a), Wi(t, e), ge(t, e, n, l), e.child;
      case 6:
        return t === null && dt && ((t = l = zt) && (l = Uy(
          l,
          e.pendingProps,
          al
        ), l !== null ? (e.stateNode = l, me = e, zt = null, t = !0) : t = !1), t || Sn(e)), null;
      case 13:
        return Fo(t, e, l);
      case 4:
        return de(
          e,
          e.stateNode.containerInfo
        ), n = e.pendingProps, t === null ? e.child = ya(
          e,
          null,
          n,
          l
        ) : ge(t, e, n, l), e.child;
      case 11:
        return Xo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return ge(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return ge(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return ge(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return n = e.pendingProps, En(e, e.type, n.value), ge(t, e, n.children, l), e.child;
      case 9:
        return a = e.type._context, n = e.pendingProps.children, oa(e), a = ye(a), n = n(a), e.flags |= 1, ge(t, e, n, l), e.child;
      case 14:
        return Qo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return Vo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return Po(t, e, l);
      case 31:
        return ty(t, e, l);
      case 22:
        return Zo(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return oa(e), n = ye(Jt), t === null ? (a = rs(), a === null && (a = Rt, u = cs(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= l), a = u), e.memoizedState = { parent: n, cache: a }, os(e), En(e, Jt, a)) : ((t.lanes & l) !== 0 && (ds(t, e), Xu(e, null, null, l), Gu()), a = t.memoizedState, u = e.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), En(e, Jt, n)) : (n = u.cache, En(e, Jt, n), n !== a.cache && is(
          e,
          [Jt],
          l,
          !0
        ))), ge(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function en(t) {
    t.flags |= 4;
  }
  function ks(t, e, l, n, a) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (a & 335544128) === a)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Rd()) t.flags |= 8192;
        else
          throw ma = xi, fs;
    } else t.flags &= -16777217;
  }
  function ed(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !gh(e))
      if (Rd()) t.flags |= 8192;
      else
        throw ma = xi, fs;
  }
  function Fi(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Oa() : 536870912, t.lanes |= e, tu |= e);
  }
  function Ju(t, e) {
    if (!dt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var n = null; l !== null; )
            l.alternate !== null && (n = l), l = l.sibling;
          n === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : n.sibling = null;
      }
  }
  function Mt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, n = 0;
    if (e)
      for (var a = t.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = t, a = a.sibling;
    else
      for (a = t.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = t, a = a.sibling;
    return t.subtreeFlags |= n, t.childLanes = l, e;
  }
  function ly(t, e, l) {
    var n = e.pendingProps;
    switch (es(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Mt(e), null;
      case 1:
        return Mt(e), null;
      case 3:
        return l = e.stateNode, n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Fl(Jt), yt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Ga(e) ? en(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, ns())), Mt(e), null;
      case 26:
        var a = e.type, u = e.memoizedState;
        return t === null ? (en(e), u !== null ? (Mt(e), ed(e, u)) : (Mt(e), ks(
          e,
          a,
          null,
          n,
          l
        ))) : u ? u !== t.memoizedState ? (en(e), Mt(e), ed(e, u)) : (Mt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== n && en(e), Mt(e), ks(
          e,
          a,
          t,
          n,
          l
        )), null;
      case 27:
        if (Gn(e), l = et.current, a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && en(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Mt(e), null;
          }
          t = Y.current, Ga(e) ? qf(e) : (t = sh(a, n, l), e.stateNode = t, en(e));
        }
        return Mt(e), null;
      case 5:
        if (Gn(e), a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && en(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Mt(e), null;
          }
          if (u = Y.current, Ga(e))
            qf(e);
          else {
            var c = dc(
              et.current
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
                    u = typeof n.is == "string" ? c.createElement("select", {
                      is: n.is
                    }) : c.createElement("select"), n.multiple ? u.multiple = !0 : n.size && (u.size = n.size);
                    break;
                  default:
                    u = typeof n.is == "string" ? c.createElement(a, { is: n.is }) : c.createElement(a);
                }
            }
            u[Ut] = e, u[Dt] = n;
            t: for (c = e.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                u.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === e) break t;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === e)
                  break t;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            e.stateNode = u;
            t: switch (ve(u, a, n), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break t;
              case "img":
                n = !0;
                break t;
              default:
                n = !1;
            }
            n && en(e);
          }
        }
        return Mt(e), ks(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== n && en(e);
        else {
          if (typeof n != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = et.current, Ga(e)) {
            if (t = e.stateNode, l = e.memoizedProps, n = null, a = me, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            t[Ut] = e, t = !!(t.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Fd(t.nodeValue, l)), t || Sn(e, !0);
          } else
            t = dc(t).createTextNode(
              n
            ), t[Ut] = e, e.stateNode = t;
        }
        return Mt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (n = Ga(e), l !== null) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[Ut] = e;
            } else
              ra(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Mt(e), t = !1;
          } else
            l = ns(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (Ke(e), e) : (Ke(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Mt(e), null;
      case 13:
        if (n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = Ga(e), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[Ut] = e;
            } else
              ra(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Mt(e), a = !1;
          } else
            a = ns(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return e.flags & 256 ? (Ke(e), e) : (Ke(e), null);
        }
        return Ke(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = n !== null, t = t !== null && t.memoizedState !== null, l && (n = e.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== a && (n.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Fi(e, e.updateQueue), Mt(e), null);
      case 4:
        return yt(), t === null && yr(e.stateNode.containerInfo), Mt(e), null;
      case 10:
        return Fl(e.type), Mt(e), null;
      case 19:
        if (M(Lt), n = e.memoizedState, n === null) return Mt(e), null;
        if (a = (e.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) Ju(n, !1);
          else {
            if (Bt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = wi(t), u !== null) {
                  for (e.flags |= 128, Ju(n, !1), t = u.updateQueue, e.updateQueue = t, Fi(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    zf(l, t), l = l.sibling;
                  return B(
                    Lt,
                    Lt.current & 1 | 2
                  ), dt && Wl(e, n.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null && Vt() > lc && (e.flags |= 128, a = !0, Ju(n, !1), e.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = wi(u), t !== null) {
              if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, Fi(e, t), Ju(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !dt)
                return Mt(e), null;
            } else
              2 * Vt() - n.renderingStartTime > lc && l !== 536870912 && (e.flags |= 128, a = !0, Ju(n, !1), e.lanes = 4194304);
          n.isBackwards ? (u.sibling = e.child, e.child = u) : (t = n.last, t !== null ? t.sibling = u : e.child = u, n.last = u);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = Vt(), t.sibling = null, l = Lt.current, B(
          Lt,
          a ? l & 1 | 2 : l & 1
        ), dt && Wl(e, n.treeForkCount), t) : (Mt(e), null);
      case 22:
      case 23:
        return Ke(e), gs(), n = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Mt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Mt(e), l = e.updateQueue, l !== null && Fi(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== l && (e.flags |= 2048), t !== null && M(da), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Fl(Jt), Mt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function ny(t, e) {
    switch (es(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Fl(Jt), yt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Gn(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Ke(e), e.alternate === null)
            throw Error(r(340));
          ra();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Ke(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          ra();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return M(Lt), null;
      case 4:
        return yt(), null;
      case 10:
        return Fl(e.type), null;
      case 22:
      case 23:
        return Ke(e), gs(), t !== null && M(da), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Fl(Jt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ld(t, e) {
    switch (es(e), e.tag) {
      case 3:
        Fl(Jt), yt();
        break;
      case 26:
      case 27:
      case 5:
        Gn(e);
        break;
      case 4:
        yt();
        break;
      case 31:
        e.memoizedState !== null && Ke(e);
        break;
      case 13:
        Ke(e);
        break;
      case 19:
        M(Lt);
        break;
      case 10:
        Fl(e.type);
        break;
      case 22:
      case 23:
        Ke(e), gs(), t !== null && M(da);
        break;
      case 24:
        Fl(Jt);
    }
  }
  function Wu(t, e) {
    try {
      var l = e.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        l = a;
        do {
          if ((l.tag & t) === t) {
            n = void 0;
            var u = l.create, c = l.inst;
            n = u(), c.destroy = n;
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (o) {
      At(e, e.return, o);
    }
  }
  function Rn(t, e, l) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        n = u;
        do {
          if ((n.tag & t) === t) {
            var c = n.inst, o = c.destroy;
            if (o !== void 0) {
              c.destroy = void 0, a = e;
              var h = l, b = o;
              try {
                b();
              } catch (O) {
                At(
                  a,
                  h,
                  O
                );
              }
            }
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (O) {
      At(e, e.return, O);
    }
  }
  function nd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Kf(e, l);
      } catch (n) {
        At(t, t.return, n);
      }
    }
  }
  function ad(t, e, l) {
    l.props = va(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      At(t, e, n);
    }
  }
  function $u(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var n = t.stateNode;
            break;
          case 30:
            n = t.stateNode;
            break;
          default:
            n = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(n) : l.current = n;
      }
    } catch (a) {
      At(t, e, a);
    }
  }
  function Dl(t, e) {
    var l = t.ref, n = t.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          At(t, e, a);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          At(t, e, a);
        }
      else l.current = null;
  }
  function ud(t) {
    var e = t.type, l = t.memoizedProps, n = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break t;
        case "img":
          l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (a) {
      At(t, t.return, a);
    }
  }
  function Js(t, e, l) {
    try {
      var n = t.stateNode;
      Ny(n, t.type, l, e), n[Dt] = e;
    } catch (a) {
      At(t, t.return, a);
    }
  }
  function id(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && xn(t.type) || t.tag === 4;
  }
  function Ws(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || id(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && xn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function $s(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Ce));
    else if (n !== 4 && (n === 27 && xn(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for ($s(t, e, l), t = t.sibling; t !== null; )
        $s(t, e, l), t = t.sibling;
  }
  function Ii(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (n !== 4 && (n === 27 && xn(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Ii(t, e, l), t = t.sibling; t !== null; )
        Ii(t, e, l), t = t.sibling;
  }
  function cd(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var n = t.type, a = e.attributes; a.length; )
        e.removeAttributeNode(a[0]);
      ve(e, n, l), e[Ut] = t, e[Dt] = l;
    } catch (u) {
      At(t, t.return, u);
    }
  }
  var ln = !1, Ft = !1, Fs = !1, sd = typeof WeakSet == "function" ? WeakSet : Set, fe = null;
  function ay(t, e) {
    if (t = t.containerInfo, pr = bc, t = bf(t), Vc(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var a = n.anchorOffset, u = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break t;
            }
            var c = 0, o = -1, h = -1, b = 0, O = 0, z = t, S = null;
            e: for (; ; ) {
              for (var _; z !== l || a !== 0 && z.nodeType !== 3 || (o = c + a), z !== u || n !== 0 && z.nodeType !== 3 || (h = c + n), z.nodeType === 3 && (c += z.nodeValue.length), (_ = z.firstChild) !== null; )
                S = z, z = _;
              for (; ; ) {
                if (z === t) break e;
                if (S === l && ++b === a && (o = c), S === u && ++O === n && (h = c), (_ = z.nextSibling) !== null) break;
                z = S, S = z.parentNode;
              }
              z = _;
            }
            l = o === -1 || h === -1 ? null : { start: o, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (br = { focusedElem: t, selectionRange: l }, bc = !1, fe = e; fe !== null; )
      if (e = fe, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, fe = t;
      else
        for (; fe !== null; ) {
          switch (e = fe, u = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (l = 0; l < t.length; l++)
                  a = t[l], a.ref.impl = a.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                t = void 0, l = e, a = u.memoizedProps, u = u.memoizedState, n = l.stateNode;
                try {
                  var L = va(
                    l.type,
                    a
                  );
                  t = n.getSnapshotBeforeUpdate(
                    L,
                    u
                  ), n.__reactInternalSnapshotBeforeUpdate = t;
                } catch (K) {
                  At(
                    l,
                    l.return,
                    K
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  _r(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      _r(t);
                      break;
                    default:
                      t.textContent = "";
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
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, fe = t;
            break;
          }
          fe = e.return;
        }
  }
  function rd(t, e, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        an(t, l), n & 4 && Wu(5, l);
        break;
      case 1:
        if (an(t, l), n & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (c) {
              At(l, l.return, c);
            }
          else {
            var a = va(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                a,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              At(
                l,
                l.return,
                c
              );
            }
          }
        n & 64 && nd(l), n & 512 && $u(l, l.return);
        break;
      case 3:
        if (an(t, l), n & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            Kf(t, e);
          } catch (c) {
            At(l, l.return, c);
          }
        }
        break;
      case 27:
        e === null && n & 4 && cd(l);
      case 26:
      case 5:
        an(t, l), e === null && n & 4 && ud(l), n & 512 && $u(l, l.return);
        break;
      case 12:
        an(t, l);
        break;
      case 31:
        an(t, l), n & 4 && dd(t, l);
        break;
      case 13:
        an(t, l), n & 4 && hd(t, l), n & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = hy.bind(
          null,
          l
        ), qy(t, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || ln, !n) {
          e = e !== null && e.memoizedState !== null || Ft, a = ln;
          var u = Ft;
          ln = n, (Ft = e) && !u ? un(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : an(t, l), ln = a, Ft = u;
        }
        break;
      case 30:
        break;
      default:
        an(t, l);
    }
  }
  function fd(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, fd(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Ma(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Ct = null, De = !1;
  function nn(t, e, l) {
    for (l = l.child; l !== null; )
      od(t, e, l), l = l.sibling;
  }
  function od(t, e, l) {
    if (ce && typeof ce.onCommitFiberUnmount == "function")
      try {
        ce.onCommitFiberUnmount(_l, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Ft || Dl(l, e), nn(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Ft || Dl(l, e);
        var n = Ct, a = De;
        xn(l.type) && (Ct = l.stateNode, De = !1), nn(
          t,
          e,
          l
        ), ui(l.stateNode), Ct = n, De = a;
        break;
      case 5:
        Ft || Dl(l, e);
      case 6:
        if (n = Ct, a = De, Ct = null, nn(
          t,
          e,
          l
        ), Ct = n, De = a, Ct !== null)
          if (De)
            try {
              (Ct.nodeType === 9 ? Ct.body : Ct.nodeName === "HTML" ? Ct.ownerDocument.body : Ct).removeChild(l.stateNode);
            } catch (u) {
              At(
                l,
                e,
                u
              );
            }
          else
            try {
              Ct.removeChild(l.stateNode);
            } catch (u) {
              At(
                l,
                e,
                u
              );
            }
        break;
      case 18:
        Ct !== null && (De ? (t = Ct, nh(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), su(t)) : nh(Ct, l.stateNode));
        break;
      case 4:
        n = Ct, a = De, Ct = l.stateNode.containerInfo, De = !0, nn(
          t,
          e,
          l
        ), Ct = n, De = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Rn(2, l, e), Ft || Rn(4, l, e), nn(
          t,
          e,
          l
        );
        break;
      case 1:
        Ft || (Dl(l, e), n = l.stateNode, typeof n.componentWillUnmount == "function" && ad(
          l,
          e,
          n
        )), nn(
          t,
          e,
          l
        );
        break;
      case 21:
        nn(
          t,
          e,
          l
        );
        break;
      case 22:
        Ft = (n = Ft) || l.memoizedState !== null, nn(
          t,
          e,
          l
        ), Ft = n;
        break;
      default:
        nn(
          t,
          e,
          l
        );
    }
  }
  function dd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        su(t);
      } catch (l) {
        At(e, e.return, l);
      }
    }
  }
  function hd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        su(t);
      } catch (l) {
        At(e, e.return, l);
      }
  }
  function uy(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new sd()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new sd()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Pi(t, e) {
    var l = uy(t);
    e.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = my.bind(null, t, n);
        n.then(a, a);
      }
    });
  }
  function Ue(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], u = t, c = e, o = c;
        t: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (xn(o.type)) {
                Ct = o.stateNode, De = !1;
                break t;
              }
              break;
            case 5:
              Ct = o.stateNode, De = !1;
              break t;
            case 3:
            case 4:
              Ct = o.stateNode.containerInfo, De = !0;
              break t;
          }
          o = o.return;
        }
        if (Ct === null) throw Error(r(160));
        od(u, c, a), Ct = null, De = !1, u = a.alternate, u !== null && (u.return = null), a.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        md(e, t), e = e.sibling;
  }
  var bl = null;
  function md(t, e) {
    var l = t.alternate, n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ue(e, t), qe(t), n & 4 && (Rn(3, t, t.return), Wu(3, t), Rn(5, t, t.return));
        break;
      case 1:
        Ue(e, t), qe(t), n & 512 && (Ft || l === null || Dl(l, l.return)), n & 64 && ln && (t = t.updateQueue, t !== null && (n = t.callbacks, n !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = bl;
        if (Ue(e, t), qe(t), n & 512 && (Ft || l === null || Dl(l, l.return)), n & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (n = t.memoizedState, l === null)
            if (n === null)
              if (t.stateNode === null) {
                t: {
                  n = t.type, l = t.memoizedProps, a = a.ownerDocument || a;
                  e: switch (n) {
                    case "title":
                      u = a.getElementsByTagName("title")[0], (!u || u[Ie] || u[Ut] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(n), a.head.insertBefore(
                        u,
                        a.querySelector("head > title")
                      )), ve(u, n, l), u[Ut] = t, Kt(u), n = u;
                      break t;
                    case "link":
                      var c = mh(
                        "link",
                        "href",
                        a
                      ).get(n + (l.href || ""));
                      if (c) {
                        for (var o = 0; o < c.length; o++)
                          if (u = c[o], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            c.splice(o, 1);
                            break e;
                          }
                      }
                      u = a.createElement(n), ve(u, n, l), a.head.appendChild(u);
                      break;
                    case "meta":
                      if (c = mh(
                        "meta",
                        "content",
                        a
                      ).get(n + (l.content || ""))) {
                        for (o = 0; o < c.length; o++)
                          if (u = c[o], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            c.splice(o, 1);
                            break e;
                          }
                      }
                      u = a.createElement(n), ve(u, n, l), a.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, n));
                  }
                  u[Ut] = t, Kt(u), n = u;
                }
                t.stateNode = n;
              } else
                yh(
                  a,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = hh(
                a,
                n,
                t.memoizedProps
              );
          else
            u !== n ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, n === null ? yh(
              a,
              t.type,
              t.stateNode
            ) : hh(
              a,
              n,
              t.memoizedProps
            )) : n === null && t.stateNode !== null && Js(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        Ue(e, t), qe(t), n & 512 && (Ft || l === null || Dl(l, l.return)), l !== null && n & 4 && Js(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (Ue(e, t), qe(t), n & 512 && (Ft || l === null || Dl(l, l.return)), t.flags & 32) {
          a = t.stateNode;
          try {
            Zl(a, "");
          } catch (L) {
            At(t, t.return, L);
          }
        }
        n & 4 && t.stateNode != null && (a = t.memoizedProps, Js(
          t,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (Fs = !0);
        break;
      case 6:
        if (Ue(e, t), qe(t), n & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          n = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = n;
          } catch (L) {
            At(t, t.return, L);
          }
        }
        break;
      case 3:
        if (yc = null, a = bl, bl = hc(e.containerInfo), Ue(e, t), bl = a, qe(t), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            su(e.containerInfo);
          } catch (L) {
            At(t, t.return, L);
          }
        Fs && (Fs = !1, yd(t));
        break;
      case 4:
        n = bl, bl = hc(
          t.stateNode.containerInfo
        ), Ue(e, t), qe(t), bl = n;
        break;
      case 12:
        Ue(e, t), qe(t);
        break;
      case 31:
        Ue(e, t), qe(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, Pi(t, n)));
        break;
      case 13:
        Ue(e, t), qe(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (ec = Vt()), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, Pi(t, n)));
        break;
      case 22:
        a = t.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null, b = ln, O = Ft;
        if (ln = b || a, Ft = O || h, Ue(e, t), Ft = O, ln = b, qe(t), n & 8192)
          t: for (e = t.stateNode, e._visibility = a ? e._visibility & -2 : e._visibility | 1, a && (l === null || h || ln || Ft || pa(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                h = l = e;
                try {
                  if (u = h.stateNode, a)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    o = h.stateNode;
                    var z = h.memoizedProps.style, S = z != null && z.hasOwnProperty("display") ? z.display : null;
                    o.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (L) {
                  At(h, h.return, L);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                h = e;
                try {
                  h.stateNode.nodeValue = a ? "" : h.memoizedProps;
                } catch (L) {
                  At(h, h.return, L);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                h = e;
                try {
                  var _ = h.stateNode;
                  a ? ah(_, !0) : ah(h.stateNode, !1);
                } catch (L) {
                  At(h, h.return, L);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
        n & 4 && (n = t.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, Pi(t, l))));
        break;
      case 19:
        Ue(e, t), qe(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, Pi(t, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ue(e, t), qe(t);
    }
  }
  function qe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, n = t.return; n !== null; ) {
          if (id(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, u = Ws(t);
            Ii(t, u, a);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (Zl(c, ""), l.flags &= -33);
            var o = Ws(t);
            Ii(t, o, c);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo, b = Ws(t);
            $s(
              t,
              b,
              h
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (O) {
        At(t, t.return, O);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function yd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        yd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function an(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        rd(t, e.alternate, e), e = e.sibling;
  }
  function pa(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Rn(4, e, e.return), pa(e);
          break;
        case 1:
          Dl(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && ad(
            e,
            e.return,
            l
          ), pa(e);
          break;
        case 27:
          ui(e.stateNode);
        case 26:
        case 5:
          Dl(e, e.return), pa(e);
          break;
        case 22:
          e.memoizedState === null && pa(e);
          break;
        case 30:
          pa(e);
          break;
        default:
          pa(e);
      }
      t = t.sibling;
    }
  }
  function un(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate, a = t, u = e, c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          un(
            a,
            u,
            l
          ), Wu(4, u);
          break;
        case 1:
          if (un(
            a,
            u,
            l
          ), n = u, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (b) {
              At(n, n.return, b);
            }
          if (n = u, a = n.updateQueue, a !== null) {
            var o = n.stateNode;
            try {
              var h = a.shared.hiddenCallbacks;
              if (h !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < h.length; a++)
                  Zf(h[a], o);
            } catch (b) {
              At(n, n.return, b);
            }
          }
          l && c & 64 && nd(u), $u(u, u.return);
          break;
        case 27:
          cd(u);
        case 26:
        case 5:
          un(
            a,
            u,
            l
          ), l && n === null && c & 4 && ud(u), $u(u, u.return);
          break;
        case 12:
          un(
            a,
            u,
            l
          );
          break;
        case 31:
          un(
            a,
            u,
            l
          ), l && c & 4 && dd(a, u);
          break;
        case 13:
          un(
            a,
            u,
            l
          ), l && c & 4 && hd(a, u);
          break;
        case 22:
          u.memoizedState === null && un(
            a,
            u,
            l
          ), $u(u, u.return);
          break;
        case 30:
          break;
        default:
          un(
            a,
            u,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Is(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && ju(l));
  }
  function Ps(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ju(t));
  }
  function Sl(t, e, l, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        gd(
          t,
          e,
          l,
          n
        ), e = e.sibling;
  }
  function gd(t, e, l, n) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Sl(
          t,
          e,
          l,
          n
        ), a & 2048 && Wu(9, e);
        break;
      case 1:
        Sl(
          t,
          e,
          l,
          n
        );
        break;
      case 3:
        Sl(
          t,
          e,
          l,
          n
        ), a & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ju(t)));
        break;
      case 12:
        if (a & 2048) {
          Sl(
            t,
            e,
            l,
            n
          ), t = e.stateNode;
          try {
            var u = e.memoizedProps, c = u.id, o = u.onPostCommit;
            typeof o == "function" && o(
              c,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (h) {
            At(e, e.return, h);
          }
        } else
          Sl(
            t,
            e,
            l,
            n
          );
        break;
      case 31:
        Sl(
          t,
          e,
          l,
          n
        );
        break;
      case 13:
        Sl(
          t,
          e,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, c = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Sl(
          t,
          e,
          l,
          n
        ) : Fu(t, e) : u._visibility & 2 ? Sl(
          t,
          e,
          l,
          n
        ) : (u._visibility |= 2, Fa(
          t,
          e,
          l,
          n,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && Is(c, e);
        break;
      case 24:
        Sl(
          t,
          e,
          l,
          n
        ), a & 2048 && Ps(e.alternate, e);
        break;
      default:
        Sl(
          t,
          e,
          l,
          n
        );
    }
  }
  function Fa(t, e, l, n, a) {
    for (a = a && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, c = e, o = l, h = n, b = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Fa(
            u,
            c,
            o,
            h,
            a
          ), Wu(8, c);
          break;
        case 23:
          break;
        case 22:
          var O = c.stateNode;
          c.memoizedState !== null ? O._visibility & 2 ? Fa(
            u,
            c,
            o,
            h,
            a
          ) : Fu(
            u,
            c
          ) : (O._visibility |= 2, Fa(
            u,
            c,
            o,
            h,
            a
          )), a && b & 2048 && Is(
            c.alternate,
            c
          );
          break;
        case 24:
          Fa(
            u,
            c,
            o,
            h,
            a
          ), a && b & 2048 && Ps(c.alternate, c);
          break;
        default:
          Fa(
            u,
            c,
            o,
            h,
            a
          );
      }
      e = e.sibling;
    }
  }
  function Fu(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, n = e, a = n.flags;
        switch (n.tag) {
          case 22:
            Fu(l, n), a & 2048 && Is(
              n.alternate,
              n
            );
            break;
          case 24:
            Fu(l, n), a & 2048 && Ps(n.alternate, n);
            break;
          default:
            Fu(l, n);
        }
        e = e.sibling;
      }
  }
  var Iu = 8192;
  function Ia(t, e, l) {
    if (t.subtreeFlags & Iu)
      for (t = t.child; t !== null; )
        vd(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function vd(t, e, l) {
    switch (t.tag) {
      case 26:
        Ia(
          t,
          e,
          l
        ), t.flags & Iu && t.memoizedState !== null && Zy(
          l,
          bl,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Ia(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var n = bl;
        bl = hc(t.stateNode.containerInfo), Ia(
          t,
          e,
          l
        ), bl = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = Iu, Iu = 16777216, Ia(
          t,
          e,
          l
        ), Iu = n) : Ia(
          t,
          e,
          l
        ));
        break;
      default:
        Ia(
          t,
          e,
          l
        );
    }
  }
  function pd(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Pu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          fe = n, Sd(
            n,
            t
          );
        }
      pd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        bd(t), t = t.sibling;
  }
  function bd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Pu(t), t.flags & 2048 && Rn(9, t, t.return);
        break;
      case 3:
        Pu(t);
        break;
      case 12:
        Pu(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, tc(t)) : Pu(t);
        break;
      default:
        Pu(t);
    }
  }
  function tc(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          fe = n, Sd(
            n,
            t
          );
        }
      pd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Rn(8, e, e.return), tc(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, tc(e));
          break;
        default:
          tc(e);
      }
      t = t.sibling;
    }
  }
  function Sd(t, e) {
    for (; fe !== null; ) {
      var l = fe;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Rn(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          ju(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, fe = n;
      else
        t: for (l = t; fe !== null; ) {
          n = fe;
          var a = n.sibling, u = n.return;
          if (fd(n), n === l) {
            fe = null;
            break t;
          }
          if (a !== null) {
            a.return = u, fe = a;
            break t;
          }
          fe = u;
        }
    }
  }
  var iy = {
    getCacheForType: function(t) {
      var e = ye(Jt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return ye(Jt).controller.signal;
    }
  }, cy = typeof WeakMap == "function" ? WeakMap : Map, St = 0, Rt = null, ut = null, rt = 0, _t = 0, ke = null, zn = !1, Pa = !1, tr = !1, cn = 0, Bt = 0, Mn = 0, ba = 0, er = 0, Je = 0, tu = 0, ti = null, xe = null, lr = !1, ec = 0, Ed = 0, lc = 1 / 0, nc = null, Cn = null, ae = 0, Dn = null, eu = null, sn = 0, nr = 0, ar = null, _d = null, ei = 0, ur = null;
  function We() {
    return (St & 2) !== 0 && rt !== 0 ? rt & -rt : T.T !== null ? or() : Ll();
  }
  function Ad() {
    if (Je === 0)
      if ((rt & 536870912) === 0 || dt) {
        var t = Zn;
        Zn <<= 1, (Zn & 3932160) === 0 && (Zn = 262144), Je = t;
      } else Je = 536870912;
    return t = Ze.current, t !== null && (t.flags |= 32), Je;
  }
  function Be(t, e, l) {
    (t === Rt && (_t === 2 || _t === 9) || t.cancelPendingCommit !== null) && (lu(t, 0), Un(
      t,
      rt,
      Je,
      !1
    )), Kn(t, l), ((St & 2) === 0 || t !== Rt) && (t === Rt && ((St & 2) === 0 && (ba |= l), Bt === 4 && Un(
      t,
      rt,
      Je,
      !1
    )), Ul(t));
  }
  function Td(t, e, l) {
    if ((St & 6) !== 0) throw Error(r(327));
    var n = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || ml(t, e), a = n ? fy(t, e) : cr(t, e, !0), u = n;
    do {
      if (a === 0) {
        Pa && !n && Un(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, u && !sy(l)) {
          a = cr(t, e, !1), u = !1;
          continue;
        }
        if (a === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var c = 0;
          else
            c = t.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            e = c;
            t: {
              var o = t;
              a = ti;
              var h = o.current.memoizedState.isDehydrated;
              if (h && (lu(o, c).flags |= 256), c = cr(
                o,
                c,
                !1
              ), c !== 2) {
                if (tr && !h) {
                  o.errorRecoveryDisabledLanes |= u, ba |= u, a = 4;
                  break t;
                }
                u = xe, xe = a, u !== null && (xe === null ? xe = u : xe.push.apply(
                  xe,
                  u
                ));
              }
              a = c;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          lu(t, 0), Un(t, e, 0, !0);
          break;
        }
        t: {
          switch (n = t, u = a, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Un(
                n,
                e,
                Je,
                !zn
              );
              break t;
            case 2:
              xe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (a = ec + 300 - Vt(), 10 < a)) {
            if (Un(
              n,
              e,
              Je,
              !zn
            ), hl(n, 0, !0) !== 0) break t;
            sn = e, n.timeoutHandle = eh(
              Nd.bind(
                null,
                n,
                l,
                xe,
                nc,
                lr,
                e,
                Je,
                ba,
                tu,
                zn,
                u,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break t;
          }
          Nd(
            n,
            l,
            xe,
            nc,
            lr,
            e,
            Je,
            ba,
            tu,
            zn,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ul(t);
  }
  function Nd(t, e, l, n, a, u, c, o, h, b, O, z, S, _) {
    if (t.timeoutHandle = -1, z = e.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
      z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ce
      }, vd(
        e,
        u,
        z
      );
      var L = (u & 62914560) === u ? ec - Vt() : (u & 4194048) === u ? Ed - Vt() : 0;
      if (L = Ky(
        z,
        L
      ), L !== null) {
        sn = u, t.cancelPendingCommit = L(
          qd.bind(
            null,
            t,
            e,
            u,
            l,
            n,
            a,
            c,
            o,
            h,
            O,
            z,
            null,
            S,
            _
          )
        ), Un(t, u, c, !b);
        return;
      }
    }
    qd(
      t,
      e,
      u,
      l,
      n,
      a,
      c,
      o,
      h
    );
  }
  function sy(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var n = 0; n < l.length; n++) {
          var a = l[n], u = a.getSnapshot;
          a = a.value;
          try {
            if (!Qe(u(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Un(t, e, l, n) {
    e &= ~er, e &= ~ba, t.suspendedLanes |= e, t.pingedLanes &= ~e, n && (t.warmLanes |= e), n = t.expirationTimes;
    for (var a = e; 0 < a; ) {
      var u = 31 - se(a), c = 1 << u;
      n[u] = -1, a &= ~c;
    }
    l !== 0 && hn(t, l, e);
  }
  function ac() {
    return (St & 6) === 0 ? (li(0), !1) : !0;
  }
  function ir() {
    if (ut !== null) {
      if (_t === 0)
        var t = ut.return;
      else
        t = ut, $l = fa = null, _s(t), Ka = null, wu = 0, t = ut;
      for (; t !== null; )
        ld(t.alternate, t), t = t.return;
      ut = null;
    }
  }
  function lu(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, zy(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), sn = 0, ir(), Rt = t, ut = l = Jl(t.current, null), rt = e, _t = 0, ke = null, zn = !1, Pa = ml(t, e), tr = !1, tu = Je = er = ba = Mn = Bt = 0, xe = ti = null, lr = !1, (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - se(n), u = 1 << a;
        e |= t[a], n &= ~u;
      }
    return cn = e, Ni(), l;
  }
  function Od(t, e) {
    $ = null, T.H = Ku, e === Za || e === qi ? (e = Gf(), _t = 3) : e === fs ? (e = Gf(), _t = 4) : _t = e === ws ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, ke = e, ut === null && (Bt = 1, ki(
      t,
      el(e, t.current)
    ));
  }
  function Rd() {
    var t = Ze.current;
    return t === null ? !0 : (rt & 4194048) === rt ? ul === null : (rt & 62914560) === rt || (rt & 536870912) !== 0 ? t === ul : !1;
  }
  function zd() {
    var t = T.H;
    return T.H = Ku, t === null ? Ku : t;
  }
  function Md() {
    var t = T.A;
    return T.A = iy, t;
  }
  function uc() {
    Bt = 4, zn || (rt & 4194048) !== rt && Ze.current !== null || (Pa = !0), (Mn & 134217727) === 0 && (ba & 134217727) === 0 || Rt === null || Un(
      Rt,
      rt,
      Je,
      !1
    );
  }
  function cr(t, e, l) {
    var n = St;
    St |= 2;
    var a = zd(), u = Md();
    (Rt !== t || rt !== e) && (nc = null, lu(t, e)), e = !1;
    var c = Bt;
    t: do
      try {
        if (_t !== 0 && ut !== null) {
          var o = ut, h = ke;
          switch (_t) {
            case 8:
              ir(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ze.current === null && (e = !0);
              var b = _t;
              if (_t = 0, ke = null, nu(t, o, h, b), l && Pa) {
                c = 0;
                break t;
              }
              break;
            default:
              b = _t, _t = 0, ke = null, nu(t, o, h, b);
          }
        }
        ry(), c = Bt;
        break;
      } catch (O) {
        Od(t, O);
      }
    while (!0);
    return e && t.shellSuspendCounter++, $l = fa = null, St = n, T.H = a, T.A = u, ut === null && (Rt = null, rt = 0, Ni()), c;
  }
  function ry() {
    for (; ut !== null; ) Cd(ut);
  }
  function fy(t, e) {
    var l = St;
    St |= 2;
    var n = zd(), a = Md();
    Rt !== t || rt !== e ? (nc = null, lc = Vt() + 500, lu(t, e)) : Pa = ml(
      t,
      e
    );
    t: do
      try {
        if (_t !== 0 && ut !== null) {
          e = ut;
          var u = ke;
          e: switch (_t) {
            case 1:
              _t = 0, ke = null, nu(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (Lf(u)) {
                _t = 0, ke = null, Dd(e);
                break;
              }
              e = function() {
                _t !== 2 && _t !== 9 || Rt !== t || (_t = 7), Ul(t);
              }, u.then(e, e);
              break t;
            case 3:
              _t = 7;
              break t;
            case 4:
              _t = 5;
              break t;
            case 7:
              Lf(u) ? (_t = 0, ke = null, Dd(e)) : (_t = 0, ke = null, nu(t, e, u, 7));
              break;
            case 5:
              var c = null;
              switch (ut.tag) {
                case 26:
                  c = ut.memoizedState;
                case 5:
                case 27:
                  var o = ut;
                  if (c ? gh(c) : o.stateNode.complete) {
                    _t = 0, ke = null;
                    var h = o.sibling;
                    if (h !== null) ut = h;
                    else {
                      var b = o.return;
                      b !== null ? (ut = b, ic(b)) : ut = null;
                    }
                    break e;
                  }
              }
              _t = 0, ke = null, nu(t, e, u, 5);
              break;
            case 6:
              _t = 0, ke = null, nu(t, e, u, 6);
              break;
            case 8:
              ir(), Bt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        oy();
        break;
      } catch (O) {
        Od(t, O);
      }
    while (!0);
    return $l = fa = null, T.H = n, T.A = a, St = l, ut !== null ? 0 : (Rt = null, rt = 0, Ni(), Bt);
  }
  function oy() {
    for (; ut !== null && !Bl(); )
      Cd(ut);
  }
  function Cd(t) {
    var e = td(t.alternate, t, cn);
    t.memoizedProps = t.pendingProps, e === null ? ic(t) : ut = e;
  }
  function Dd(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Jo(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          rt
        );
        break;
      case 11:
        e = Jo(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          rt
        );
        break;
      case 5:
        _s(e);
      default:
        ld(l, e), e = ut = zf(e, cn), e = td(l, e, cn);
    }
    t.memoizedProps = t.pendingProps, e === null ? ic(t) : ut = e;
  }
  function nu(t, e, l, n) {
    $l = fa = null, _s(e), Ka = null, wu = 0;
    var a = e.return;
    try {
      if (Pm(
        t,
        a,
        e,
        l,
        rt
      )) {
        Bt = 1, ki(
          t,
          el(l, t.current)
        ), ut = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw ut = a, u;
      Bt = 1, ki(
        t,
        el(l, t.current)
      ), ut = null;
      return;
    }
    e.flags & 32768 ? (dt || n === 1 ? t = !0 : Pa || (rt & 536870912) !== 0 ? t = !1 : (zn = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Ze.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Ud(e, t)) : ic(e);
  }
  function ic(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Ud(
          e,
          zn
        );
        return;
      }
      t = e.return;
      var l = ly(
        e.alternate,
        e,
        cn
      );
      if (l !== null) {
        ut = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        ut = e;
        return;
      }
      ut = e = t;
    } while (e !== null);
    Bt === 0 && (Bt = 5);
  }
  function Ud(t, e) {
    do {
      var l = ny(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, ut = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        ut = t;
        return;
      }
      ut = t = l;
    } while (t !== null);
    Bt = 6, ut = null;
  }
  function qd(t, e, l, n, a, u, c, o, h) {
    t.cancelPendingCommit = null;
    do
      cc();
    while (ae !== 0);
    if ((St & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (u = e.lanes | e.childLanes, u |= Wc, yu(
        t,
        l,
        u,
        c,
        o,
        h
      ), t === Rt && (ut = Rt = null, rt = 0), eu = e, Dn = t, sn = l, nr = u, ar = a, _d = n, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, yy(on, function() {
        return wd(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
        n = T.T, T.T = null, a = H.p, H.p = 2, c = St, St |= 4;
        try {
          ay(t, e, l);
        } finally {
          St = c, H.p = a, T.T = n;
        }
      }
      ae = 1, xd(), Bd(), jd();
    }
  }
  function xd() {
    if (ae === 1) {
      ae = 0;
      var t = Dn, e = eu, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = T.T, T.T = null;
        var n = H.p;
        H.p = 2;
        var a = St;
        St |= 4;
        try {
          md(e, t);
          var u = br, c = bf(t.containerInfo), o = u.focusedElem, h = u.selectionRange;
          if (c !== o && o && o.ownerDocument && pf(
            o.ownerDocument.documentElement,
            o
          )) {
            if (h !== null && Vc(o)) {
              var b = h.start, O = h.end;
              if (O === void 0 && (O = b), "selectionStart" in o)
                o.selectionStart = b, o.selectionEnd = Math.min(
                  O,
                  o.value.length
                );
              else {
                var z = o.ownerDocument || document, S = z && z.defaultView || window;
                if (S.getSelection) {
                  var _ = S.getSelection(), L = o.textContent.length, K = Math.min(h.start, L), Ot = h.end === void 0 ? K : Math.min(h.end, L);
                  !_.extend && K > Ot && (c = Ot, Ot = K, K = c);
                  var g = vf(
                    o,
                    K
                  ), m = vf(
                    o,
                    Ot
                  );
                  if (g && m && (_.rangeCount !== 1 || _.anchorNode !== g.node || _.anchorOffset !== g.offset || _.focusNode !== m.node || _.focusOffset !== m.offset)) {
                    var p = z.createRange();
                    p.setStart(g.node, g.offset), _.removeAllRanges(), K > Ot ? (_.addRange(p), _.extend(m.node, m.offset)) : (p.setEnd(m.node, m.offset), _.addRange(p));
                  }
                }
              }
            }
            for (z = [], _ = o; _ = _.parentNode; )
              _.nodeType === 1 && z.push({
                element: _,
                left: _.scrollLeft,
                top: _.scrollTop
              });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < z.length; o++) {
              var R = z[o];
              R.element.scrollLeft = R.left, R.element.scrollTop = R.top;
            }
          }
          bc = !!pr, br = pr = null;
        } finally {
          St = a, H.p = n, T.T = l;
        }
      }
      t.current = e, ae = 2;
    }
  }
  function Bd() {
    if (ae === 2) {
      ae = 0;
      var t = Dn, e = eu, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = T.T, T.T = null;
        var n = H.p;
        H.p = 2;
        var a = St;
        St |= 4;
        try {
          rd(t, e.alternate, e);
        } finally {
          St = a, H.p = n, T.T = l;
        }
      }
      ae = 3;
    }
  }
  function jd() {
    if (ae === 4 || ae === 3) {
      ae = 0, du();
      var t = Dn, e = eu, l = sn, n = _d;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? ae = 5 : (ae = 0, eu = Dn = null, Hd(t, t.pendingLanes));
      var a = t.pendingLanes;
      if (a === 0 && (Cn = null), Ra(l), e = e.stateNode, ce && typeof ce.onCommitFiberRoot == "function")
        try {
          ce.onCommitFiberRoot(
            _l,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        e = T.T, a = H.p, H.p = 2, T.T = null;
        try {
          for (var u = t.onRecoverableError, c = 0; c < n.length; c++) {
            var o = n[c];
            u(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          T.T = e, H.p = a;
        }
      }
      (sn & 3) !== 0 && cc(), Ul(t), a = t.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? t === ur ? ei++ : (ei = 0, ur = t) : ei = 0, li(0);
    }
  }
  function Hd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, ju(e)));
  }
  function cc() {
    return xd(), Bd(), jd(), wd();
  }
  function wd() {
    if (ae !== 5) return !1;
    var t = Dn, e = nr;
    nr = 0;
    var l = Ra(sn), n = T.T, a = H.p;
    try {
      H.p = 32 > l ? 32 : l, T.T = null, l = ar, ar = null;
      var u = Dn, c = sn;
      if (ae = 0, eu = Dn = null, sn = 0, (St & 6) !== 0) throw Error(r(331));
      var o = St;
      if (St |= 4, bd(u.current), gd(
        u,
        u.current,
        c,
        l
      ), St = o, li(0, !1), ce && typeof ce.onPostCommitFiberRoot == "function")
        try {
          ce.onPostCommitFiberRoot(_l, u);
        } catch {
        }
      return !0;
    } finally {
      H.p = a, T.T = n, Hd(t, e);
    }
  }
  function Ld(t, e, l) {
    e = el(l, e), e = Hs(t.stateNode, e, 2), t = Tn(t, e, 2), t !== null && (Kn(t, 2), Ul(t));
  }
  function At(t, e, l) {
    if (t.tag === 3)
      Ld(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Ld(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Cn === null || !Cn.has(n))) {
            t = el(l, t), l = Yo(2), n = Tn(e, l, 2), n !== null && (Go(
              l,
              n,
              e,
              t
            ), Kn(n, 2), Ul(n));
            break;
          }
        }
        e = e.return;
      }
  }
  function sr(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new cy();
      var a = /* @__PURE__ */ new Set();
      n.set(e, a);
    } else
      a = n.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(e, a));
    a.has(l) || (tr = !0, a.add(l), t = dy.bind(null, t, e, l), e.then(t, t));
  }
  function dy(t, e, l) {
    var n = t.pingCache;
    n !== null && n.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Rt === t && (rt & l) === l && (Bt === 4 || Bt === 3 && (rt & 62914560) === rt && 300 > Vt() - ec ? (St & 2) === 0 && lu(t, 0) : er |= l, tu === rt && (tu = 0)), Ul(t);
  }
  function Yd(t, e) {
    e === 0 && (e = Oa()), t = ca(t, e), t !== null && (Kn(t, e), Ul(t));
  }
  function hy(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), Yd(t, l);
  }
  function my(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var n = t.stateNode, a = t.memoizedState;
        a !== null && (l = a.retryLane);
        break;
      case 19:
        n = t.stateNode;
        break;
      case 22:
        n = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    n !== null && n.delete(e), Yd(t, l);
  }
  function yy(t, e) {
    return Ta(t, e);
  }
  var sc = null, au = null, rr = !1, rc = !1, fr = !1, qn = 0;
  function Ul(t) {
    t !== au && t.next === null && (au === null ? sc = au = t : au = au.next = t), rc = !0, rr || (rr = !0, vy());
  }
  function li(t, e) {
    if (!fr && rc) {
      fr = !0;
      do
        for (var l = !1, n = sc; n !== null; ) {
          if (t !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var c = n.suspendedLanes, o = n.pingedLanes;
              u = (1 << 31 - se(42 | t) + 1) - 1, u &= a & ~(c & ~o), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, Vd(n, u));
          } else
            u = rt, u = hl(
              n,
              n === Rt ? u : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (u & 3) === 0 || ml(n, u) || (l = !0, Vd(n, u));
          n = n.next;
        }
      while (l);
      fr = !1;
    }
  }
  function gy() {
    Gd();
  }
  function Gd() {
    rc = rr = !1;
    var t = 0;
    qn !== 0 && Ry() && (t = qn);
    for (var e = Vt(), l = null, n = sc; n !== null; ) {
      var a = n.next, u = Xd(n, e);
      u === 0 ? (n.next = null, l === null ? sc = a : l.next = a, a === null && (au = l)) : (l = n, (t !== 0 || (u & 3) !== 0) && (rc = !0)), n = a;
    }
    ae !== 0 && ae !== 5 || li(t), qn !== 0 && (qn = 0);
  }
  function Xd(t, e) {
    for (var l = t.suspendedLanes, n = t.pingedLanes, a = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - se(u), o = 1 << c, h = a[c];
      h === -1 ? ((o & l) === 0 || (o & n) !== 0) && (a[c] = wl(o, e)) : h <= e && (t.expiredLanes |= o), u &= ~o;
    }
    if (e = Rt, l = rt, l = hl(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n = t.callbackNode, l === 0 || t === e && (_t === 2 || _t === 9) || t.cancelPendingCommit !== null)
      return n !== null && n !== null && I(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || ml(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (n !== null && I(n), Ra(l)) {
        case 2:
        case 8:
          l = at;
          break;
        case 32:
          l = on;
          break;
        case 268435456:
          l = jl;
          break;
        default:
          l = on;
      }
      return n = Qd.bind(null, t), l = Ta(l, n), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return n !== null && n !== null && I(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Qd(t, e) {
    if (ae !== 0 && ae !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (cc() && t.callbackNode !== l)
      return null;
    var n = rt;
    return n = hl(
      t,
      t === Rt ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n === 0 ? null : (Td(t, n, e), Xd(t, Vt()), t.callbackNode != null && t.callbackNode === l ? Qd.bind(null, t) : null);
  }
  function Vd(t, e) {
    if (cc()) return null;
    Td(t, e, !0);
  }
  function vy() {
    My(function() {
      (St & 6) !== 0 ? Ta(
        hu,
        gy
      ) : Gd();
    });
  }
  function or() {
    if (qn === 0) {
      var t = Qa;
      t === 0 && (t = Hl, Hl <<= 1, (Hl & 261888) === 0 && (Hl = 256)), qn = t;
    }
    return qn;
  }
  function Zd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : kl("" + t);
  }
  function Kd(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function py(t, e, l, n, a) {
    if (e === "submit" && l && l.stateNode === a) {
      var u = Zd(
        (a[Dt] || null).action
      ), c = n.submitter;
      c && (e = (e = c[Dt] || null) ? Zd(e.formAction) : c.getAttribute("formAction"), e !== null && (u = e, c = null));
      var o = new d(
        "action",
        "action",
        null,
        n,
        a
      );
      t.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (qn !== 0) {
                  var h = c ? Kd(a, c) : new FormData(a);
                  Ds(
                    l,
                    {
                      pending: !0,
                      data: h,
                      method: a.method,
                      action: u
                    },
                    null,
                    h
                  );
                }
              } else
                typeof u == "function" && (o.preventDefault(), h = c ? Kd(a, c) : new FormData(a), Ds(
                  l,
                  {
                    pending: !0,
                    data: h,
                    method: a.method,
                    action: u
                  },
                  u,
                  h
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var dr = 0; dr < Jc.length; dr++) {
    var hr = Jc[dr], by = hr.toLowerCase(), Sy = hr[0].toUpperCase() + hr.slice(1);
    pl(
      by,
      "on" + Sy
    );
  }
  pl(_f, "onAnimationEnd"), pl(Af, "onAnimationIteration"), pl(Tf, "onAnimationStart"), pl("dblclick", "onDoubleClick"), pl("focusin", "onFocus"), pl("focusout", "onBlur"), pl(jm, "onTransitionRun"), pl(Hm, "onTransitionStart"), pl(wm, "onTransitionCancel"), pl(Nf, "onTransitionEnd"), Yl("onMouseEnter", ["mouseout", "mouseover"]), Yl("onMouseLeave", ["mouseout", "mouseover"]), Yl("onPointerEnter", ["pointerout", "pointerover"]), Yl("onPointerLeave", ["pointerout", "pointerover"]), Rl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Rl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Rl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Rl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Rl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Rl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ey = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ni)
  );
  function kd(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var n = t[l], a = n.event;
      n = n.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var c = n.length - 1; 0 <= c; c--) {
            var o = n[c], h = o.instance, b = o.currentTarget;
            if (o = o.listener, h !== u && a.isPropagationStopped())
              break t;
            u = o, a.currentTarget = b;
            try {
              u(a);
            } catch (O) {
              Ti(O);
            }
            a.currentTarget = null, u = h;
          }
        else
          for (c = 0; c < n.length; c++) {
            if (o = n[c], h = o.instance, b = o.currentTarget, o = o.listener, h !== u && a.isPropagationStopped())
              break t;
            u = o, a.currentTarget = b;
            try {
              u(a);
            } catch (O) {
              Ti(O);
            }
            a.currentTarget = null, u = h;
          }
      }
    }
  }
  function it(t, e) {
    var l = e[yl];
    l === void 0 && (l = e[yl] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    l.has(n) || (Jd(e, t, 2, !1), l.add(n));
  }
  function mr(t, e, l) {
    var n = 0;
    e && (n |= 4), Jd(
      l,
      t,
      n,
      e
    );
  }
  var fc = "_reactListening" + Math.random().toString(36).slice(2);
  function yr(t) {
    if (!t[fc]) {
      t[fc] = !0, Jn.forEach(function(l) {
        l !== "selectionchange" && (Ey.has(l) || mr(l, !1, t), mr(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[fc] || (e[fc] = !0, mr("selectionchange", !1, e));
    }
  }
  function Jd(t, e, l, n) {
    switch (Ah(e)) {
      case 2:
        var a = Wy;
        break;
      case 8:
        a = $y;
        break;
      default:
        a = Cr;
    }
    l = a.bind(
      null,
      e,
      l,
      t
    ), a = void 0, !la || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = !0), n ? a !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: a
    }) : t.addEventListener(e, l, !0) : a !== void 0 ? t.addEventListener(e, l, {
      passive: a
    }) : t.addEventListener(e, l, !1);
  }
  function gr(t, e, l, n, a) {
    var u = n;
    if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
      t: for (; ; ) {
        if (n === null) return;
        var c = n.tag;
        if (c === 3 || c === 4) {
          var o = n.stateNode.containerInfo;
          if (o === a) break;
          if (c === 4)
            for (c = n.return; c !== null; ) {
              var h = c.tag;
              if ((h === 3 || h === 4) && c.stateNode.containerInfo === a)
                return;
              c = c.return;
            }
          for (; o !== null; ) {
            if (c = we(o), c === null) return;
            if (h = c.tag, h === 5 || h === 6 || h === 26 || h === 27) {
              n = u = c;
              continue t;
            }
            o = o.parentNode;
          }
        }
        n = n.return;
      }
    ta(function() {
      var b = u, O = Nu(l), z = [];
      t: {
        var S = Of.get(t);
        if (S !== void 0) {
          var _ = d, L = t;
          switch (t) {
            case "keypress":
              if (qa(l) === 0) break t;
            case "keydown":
            case "keyup":
              _ = mm;
              break;
            case "focusin":
              L = "focus", _ = Xe;
              break;
            case "focusout":
              L = "blur", _ = Xe;
              break;
            case "beforeblur":
            case "afterblur":
              _ = Xe;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _ = re;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = qt;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = vm;
              break;
            case _f:
            case Af:
            case Tf:
              _ = kt;
              break;
            case Nf:
              _ = bm;
              break;
            case "scroll":
            case "scrollend":
              _ = D;
              break;
            case "wheel":
              _ = Em;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = _i;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = lf;
              break;
            case "toggle":
            case "beforetoggle":
              _ = Am;
          }
          var K = (e & 4) !== 0, Ot = !K && (t === "scroll" || t === "scrollend"), g = K ? S !== null ? S + "Capture" : null : S;
          K = [];
          for (var m = b, p; m !== null; ) {
            var R = m;
            if (p = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || p === null || g === null || (R = ea(m, g), R != null && K.push(
              ai(m, R, p)
            )), Ot) break;
            m = m.return;
          }
          0 < K.length && (S = new _(
            S,
            L,
            null,
            l,
            O
          ), z.push({ event: S, listeners: K }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (S = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout", S && l !== Tu && (L = l.relatedTarget || l.fromElement) && (we(L) || L[Nl]))
            break t;
          if ((_ || S) && (S = O.window === O ? O : (S = O.ownerDocument) ? S.defaultView || S.parentWindow : window, _ ? (L = l.relatedTarget || l.toElement, _ = b, L = L ? we(L) : null, L !== null && (Ot = U(L), K = L.tag, L !== Ot || K !== 5 && K !== 27 && K !== 6) && (L = null)) : (_ = null, L = b), _ !== L)) {
            if (K = re, R = "onMouseLeave", g = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (K = lf, R = "onPointerLeave", g = "onPointerEnter", m = "pointer"), Ot = _ == null ? S : ze(_), p = L == null ? S : ze(L), S = new K(
              R,
              m + "leave",
              _,
              l,
              O
            ), S.target = Ot, S.relatedTarget = p, R = null, we(O) === b && (K = new K(
              g,
              m + "enter",
              L,
              l,
              O
            ), K.target = p, K.relatedTarget = Ot, R = K), Ot = R, _ && L)
              e: {
                for (K = _y, g = _, m = L, p = 0, R = g; R; R = K(R))
                  p++;
                R = 0;
                for (var Z = m; Z; Z = K(Z))
                  R++;
                for (; 0 < p - R; )
                  g = K(g), p--;
                for (; 0 < R - p; )
                  m = K(m), R--;
                for (; p--; ) {
                  if (g === m || m !== null && g === m.alternate) {
                    K = g;
                    break e;
                  }
                  g = K(g), m = K(m);
                }
                K = null;
              }
            else K = null;
            _ !== null && Wd(
              z,
              S,
              _,
              K,
              !1
            ), L !== null && Ot !== null && Wd(
              z,
              Ot,
              L,
              K,
              !0
            );
          }
        }
        t: {
          if (S = b ? ze(b) : window, _ = S.nodeName && S.nodeName.toLowerCase(), _ === "select" || _ === "input" && S.type === "file")
            var gt = of;
          else if (rf(S))
            if (df)
              gt = qm;
            else {
              gt = Dm;
              var Q = Cm;
            }
          else
            _ = S.nodeName, !_ || _.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? b && Ua(b.elementType) && (gt = of) : gt = Um;
          if (gt && (gt = gt(t, b))) {
            ff(
              z,
              gt,
              l,
              O
            );
            break t;
          }
          Q && Q(t, S, b), t === "focusout" && b && S.type === "number" && b.memoizedProps.value != null && Eu(S, "number", S.value);
        }
        switch (Q = b ? ze(b) : window, t) {
          case "focusin":
            (rf(Q) || Q.contentEditable === "true") && (Ba = Q, Zc = b, qu = null);
            break;
          case "focusout":
            qu = Zc = Ba = null;
            break;
          case "mousedown":
            Kc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Kc = !1, Sf(z, l, O);
            break;
          case "selectionchange":
            if (Bm) break;
          case "keydown":
          case "keyup":
            Sf(z, l, O);
        }
        var P;
        if (Gc)
          t: {
            switch (t) {
              case "compositionstart":
                var ft = "onCompositionStart";
                break t;
              case "compositionend":
                ft = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ft = "onCompositionUpdate";
                break t;
            }
            ft = void 0;
          }
        else
          xa ? cf(t, l) && (ft = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (ft = "onCompositionStart");
        ft && (nf && l.locale !== "ko" && (xa || ft !== "onCompositionStart" ? ft === "onCompositionEnd" && xa && (P = Si()) : (Pe = O, Ru = "value" in Pe ? Pe.value : Pe.textContent, xa = !0)), Q = oc(b, ft), 0 < Q.length && (ft = new wc(
          ft,
          t,
          null,
          l,
          O
        ), z.push({ event: ft, listeners: Q }), P ? ft.data = P : (P = sf(l), P !== null && (ft.data = P)))), (P = Nm ? Om(t, l) : Rm(t, l)) && (ft = oc(b, "onBeforeInput"), 0 < ft.length && (Q = new wc(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          O
        ), z.push({
          event: Q,
          listeners: ft
        }), Q.data = P)), py(
          z,
          t,
          b,
          l,
          O
        );
      }
      kd(z, e);
    });
  }
  function ai(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function oc(t, e) {
    for (var l = e + "Capture", n = []; t !== null; ) {
      var a = t, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = ea(t, l), a != null && n.unshift(
        ai(t, a, u)
      ), a = ea(t, e), a != null && n.push(
        ai(t, a, u)
      )), t.tag === 3) return n;
      t = t.return;
    }
    return [];
  }
  function _y(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Wd(t, e, l, n, a) {
    for (var u = e._reactName, c = []; l !== null && l !== n; ) {
      var o = l, h = o.alternate, b = o.stateNode;
      if (o = o.tag, h !== null && h === n) break;
      o !== 5 && o !== 26 && o !== 27 || b === null || (h = b, a ? (b = ea(l, u), b != null && c.unshift(
        ai(l, b, h)
      )) : a || (b = ea(l, u), b != null && c.push(
        ai(l, b, h)
      ))), l = l.return;
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var Ay = /\r\n?/g, Ty = /\u0000|\uFFFD/g;
  function $d(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ay, `
`).replace(Ty, "");
  }
  function Fd(t, e) {
    return e = $d(e), $d(t) === e;
  }
  function Nt(t, e, l, n, a, u) {
    switch (l) {
      case "children":
        typeof n == "string" ? e === "body" || e === "textarea" && n === "" || Zl(t, n) : (typeof n == "number" || typeof n == "bigint") && e !== "body" && Zl(t, "" + n);
        break;
      case "className":
        Ge(t, "class", n);
        break;
      case "tabIndex":
        Ge(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ge(t, l, n);
        break;
      case "style":
        Kl(t, n, u);
        break;
      case "data":
        if (e !== "object") {
          Ge(t, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = kl("" + n), t.setAttribute(l, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (l === "formAction" ? (e !== "input" && Nt(t, e, "name", a.name, a, null), Nt(
            t,
            e,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Nt(
            t,
            e,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Nt(
            t,
            e,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Nt(t, e, "encType", a.encType, a, null), Nt(t, e, "method", a.method, a, null), Nt(t, e, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = kl("" + n), t.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (t.onclick = Ce);
        break;
      case "onScroll":
        n != null && it("scroll", t);
        break;
      case "onScrollEnd":
        n != null && it("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        t.muted = n && typeof n != "function" && typeof n != "symbol";
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
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = kl("" + n), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
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
        n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, "" + n) : t.removeAttribute(l);
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
        n && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0 ? t.setAttribute(l, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, n) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? t.setAttribute(l, n) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? t.removeAttribute(l) : t.setAttribute(l, n);
        break;
      case "popover":
        it("beforetoggle", t), it("toggle", t), Ye(t, "popover", n);
        break;
      case "xlinkActuate":
        Me(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Me(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Me(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Me(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Me(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Me(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Me(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Me(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Me(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        Ye(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = In.get(l) || l, Ye(t, l, n));
    }
  }
  function vr(t, e, l, n, a, u) {
    switch (l) {
      case "style":
        Kl(t, n, u);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string" ? Zl(t, n) : (typeof n == "number" || typeof n == "bigint") && Zl(t, "" + n);
        break;
      case "onScroll":
        n != null && it("scroll", t);
        break;
      case "onScrollEnd":
        n != null && it("scrollend", t);
        break;
      case "onClick":
        n != null && (t.onclick = Ce);
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
        if (!pu.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), e = l.slice(2, a ? l.length - 7 : void 0), u = t[Dt] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, a), typeof n == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, n, a);
              break t;
            }
            l in t ? t[l] = n : n === !0 ? t.setAttribute(l, "") : Ye(t, l, n);
          }
    }
  }
  function ve(t, e, l) {
    switch (e) {
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
        it("error", t), it("load", t);
        var n = !1, a = !1, u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var c = l[u];
            if (c != null)
              switch (u) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Nt(t, e, u, c, l, null);
              }
          }
        a && Nt(t, e, "srcSet", l.srcSet, l, null), n && Nt(t, e, "src", l.src, l, null);
        return;
      case "input":
        it("invalid", t);
        var o = u = c = a = null, h = null, b = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var O = l[n];
            if (O != null)
              switch (n) {
                case "name":
                  a = O;
                  break;
                case "type":
                  c = O;
                  break;
                case "checked":
                  h = O;
                  break;
                case "defaultChecked":
                  b = O;
                  break;
                case "value":
                  u = O;
                  break;
                case "defaultValue":
                  o = O;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Nt(t, e, n, O, l, null);
              }
          }
        Su(
          t,
          u,
          o,
          h,
          b,
          c,
          a,
          !1
        );
        return;
      case "select":
        it("invalid", t), n = c = u = null;
        for (a in l)
          if (l.hasOwnProperty(a) && (o = l[a], o != null))
            switch (a) {
              case "value":
                u = o;
                break;
              case "defaultValue":
                c = o;
                break;
              case "multiple":
                n = o;
              default:
                Nt(t, e, a, o, l, null);
            }
        e = u, l = c, t.multiple = !!n, e != null ? Vl(t, !!n, e, !1) : l != null && Vl(t, !!n, l, !0);
        return;
      case "textarea":
        it("invalid", t), u = a = n = null;
        for (c in l)
          if (l.hasOwnProperty(c) && (o = l[c], o != null))
            switch (c) {
              case "value":
                n = o;
                break;
              case "defaultValue":
                a = o;
                break;
              case "children":
                u = o;
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(r(91));
                break;
              default:
                Nt(t, e, c, o, l, null);
            }
        Au(t, n, a, u);
        return;
      case "option":
        for (h in l)
          l.hasOwnProperty(h) && (n = l[h], n != null) && (h === "selected" ? t.selected = n && typeof n != "function" && typeof n != "symbol" : Nt(t, e, h, n, l, null));
        return;
      case "dialog":
        it("beforetoggle", t), it("toggle", t), it("cancel", t), it("close", t);
        break;
      case "iframe":
      case "object":
        it("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ni.length; n++)
          it(ni[n], t);
        break;
      case "image":
        it("error", t), it("load", t);
        break;
      case "details":
        it("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        it("error", t), it("load", t);
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
        for (b in l)
          if (l.hasOwnProperty(b) && (n = l[b], n != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Nt(t, e, b, n, l, null);
            }
        return;
      default:
        if (Ua(e)) {
          for (O in l)
            l.hasOwnProperty(O) && (n = l[O], n !== void 0 && vr(
              t,
              e,
              O,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (o in l)
      l.hasOwnProperty(o) && (n = l[o], n != null && Nt(t, e, o, n, l, null));
  }
  function Ny(t, e, l, n) {
    switch (e) {
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
        var a = null, u = null, c = null, o = null, h = null, b = null, O = null;
        for (_ in l) {
          var z = l[_];
          if (l.hasOwnProperty(_) && z != null)
            switch (_) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = z;
              default:
                n.hasOwnProperty(_) || Nt(t, e, _, null, n, z);
            }
        }
        for (var S in n) {
          var _ = n[S];
          if (z = l[S], n.hasOwnProperty(S) && (_ != null || z != null))
            switch (S) {
              case "type":
                u = _;
                break;
              case "name":
                a = _;
                break;
              case "checked":
                b = _;
                break;
              case "defaultChecked":
                O = _;
                break;
              case "value":
                c = _;
                break;
              case "defaultValue":
                o = _;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(r(137, e));
                break;
              default:
                _ !== z && Nt(
                  t,
                  e,
                  S,
                  _,
                  n,
                  z
                );
            }
        }
        Ql(
          t,
          c,
          o,
          h,
          b,
          O,
          u,
          a
        );
        return;
      case "select":
        _ = c = o = S = null;
        for (u in l)
          if (h = l[u], l.hasOwnProperty(u) && h != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                _ = h;
              default:
                n.hasOwnProperty(u) || Nt(
                  t,
                  e,
                  u,
                  null,
                  n,
                  h
                );
            }
        for (a in n)
          if (u = n[a], h = l[a], n.hasOwnProperty(a) && (u != null || h != null))
            switch (a) {
              case "value":
                S = u;
                break;
              case "defaultValue":
                o = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== h && Nt(
                  t,
                  e,
                  a,
                  u,
                  n,
                  h
                );
            }
        e = o, l = c, n = _, S != null ? Vl(t, !!l, S, !1) : !!n != !!l && (e != null ? Vl(t, !!l, e, !0) : Vl(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        _ = S = null;
        for (o in l)
          if (a = l[o], l.hasOwnProperty(o) && a != null && !n.hasOwnProperty(o))
            switch (o) {
              case "value":
                break;
              case "children":
                break;
              default:
                Nt(t, e, o, null, n, a);
            }
        for (c in n)
          if (a = n[c], u = l[c], n.hasOwnProperty(c) && (a != null || u != null))
            switch (c) {
              case "value":
                S = a;
                break;
              case "defaultValue":
                _ = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== u && Nt(t, e, c, a, n, u);
            }
        _u(t, S, _);
        return;
      case "option":
        for (var L in l)
          S = l[L], l.hasOwnProperty(L) && S != null && !n.hasOwnProperty(L) && (L === "selected" ? t.selected = !1 : Nt(
            t,
            e,
            L,
            null,
            n,
            S
          ));
        for (h in n)
          S = n[h], _ = l[h], n.hasOwnProperty(h) && S !== _ && (S != null || _ != null) && (h === "selected" ? t.selected = S && typeof S != "function" && typeof S != "symbol" : Nt(
            t,
            e,
            h,
            S,
            n,
            _
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
        for (var K in l)
          S = l[K], l.hasOwnProperty(K) && S != null && !n.hasOwnProperty(K) && Nt(t, e, K, null, n, S);
        for (b in n)
          if (S = n[b], _ = l[b], n.hasOwnProperty(b) && S !== _ && (S != null || _ != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(r(137, e));
                break;
              default:
                Nt(
                  t,
                  e,
                  b,
                  S,
                  n,
                  _
                );
            }
        return;
      default:
        if (Ua(e)) {
          for (var Ot in l)
            S = l[Ot], l.hasOwnProperty(Ot) && S !== void 0 && !n.hasOwnProperty(Ot) && vr(
              t,
              e,
              Ot,
              void 0,
              n,
              S
            );
          for (O in n)
            S = n[O], _ = l[O], !n.hasOwnProperty(O) || S === _ || S === void 0 && _ === void 0 || vr(
              t,
              e,
              O,
              S,
              n,
              _
            );
          return;
        }
    }
    for (var g in l)
      S = l[g], l.hasOwnProperty(g) && S != null && !n.hasOwnProperty(g) && Nt(t, e, g, null, n, S);
    for (z in n)
      S = n[z], _ = l[z], !n.hasOwnProperty(z) || S === _ || S == null && _ == null || Nt(t, e, z, S, n, _);
  }
  function Id(t) {
    switch (t) {
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
  function Oy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], u = a.transferSize, c = a.initiatorType, o = a.duration;
        if (u && o && Id(c)) {
          for (c = 0, o = a.responseEnd, n += 1; n < l.length; n++) {
            var h = l[n], b = h.startTime;
            if (b > o) break;
            var O = h.transferSize, z = h.initiatorType;
            O && Id(z) && (h = h.responseEnd, c += O * (h < o ? 1 : (o - b) / (h - b)));
          }
          if (--n, e += 8 * (u + c) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var pr = null, br = null;
  function dc(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Pd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function th(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Sr(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Er = null;
  function Ry() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Er ? !1 : (Er = t, !0) : (Er = null, !1);
  }
  var eh = typeof setTimeout == "function" ? setTimeout : void 0, zy = typeof clearTimeout == "function" ? clearTimeout : void 0, lh = typeof Promise == "function" ? Promise : void 0, My = typeof queueMicrotask == "function" ? queueMicrotask : typeof lh < "u" ? function(t) {
    return lh.resolve(null).then(t).catch(Cy);
  } : eh;
  function Cy(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function xn(t) {
    return t === "head";
  }
  function nh(t, e) {
    var l = e, n = 0;
    do {
      var a = l.nextSibling;
      if (t.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            t.removeChild(a), su(e);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          ui(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, ui(l);
          for (var u = l.firstChild; u; ) {
            var c = u.nextSibling, o = u.nodeName;
            u[Ie] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = c;
          }
        } else
          l === "body" && ui(t.ownerDocument.body);
      l = a;
    } while (l);
    su(e);
  }
  function ah(t, e) {
    var l = t;
    t = 0;
    do {
      var n = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), n && n.nodeType === 8)
        if (l = n.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = n;
    } while (l);
  }
  function _r(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          _r(l), Ma(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function Dy(t, e, l, n) {
    for (; t.nodeType === 1; ) {
      var a = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (n) {
        if (!t[Ie])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== a.rel || t.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || t.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (a.src == null ? null : a.src) || t.getAttribute("type") !== (a.type == null ? null : a.type) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = il(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Uy(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = il(t.nextSibling), t === null)) return null;
    return t;
  }
  function uh(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = il(t.nextSibling), t === null)) return null;
    return t;
  }
  function Ar(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Tr(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function qy(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading")
      e();
    else {
      var n = function() {
        e(), l.removeEventListener("DOMContentLoaded", n);
      };
      l.addEventListener("DOMContentLoaded", n), t._reactRetry = n;
    }
  }
  function il(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Nr = null;
  function ih(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return il(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function ch(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function sh(t, e, l) {
    switch (e = dc(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function ui(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Ma(t);
  }
  var cl = /* @__PURE__ */ new Map(), rh = /* @__PURE__ */ new Set();
  function hc(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var rn = H.d;
  H.d = {
    f: xy,
    r: By,
    D: jy,
    C: Hy,
    L: wy,
    m: Ly,
    X: Gy,
    S: Yy,
    M: Xy
  };
  function xy() {
    var t = rn.f(), e = ac();
    return t || e;
  }
  function By(t) {
    var e = Ol(t);
    e !== null && e.tag === 5 && e.type === "form" ? Oo(e) : rn.r(t);
  }
  var uu = typeof document > "u" ? null : document;
  function fh(t, e, l) {
    var n = uu;
    if (n && typeof e == "string" && e) {
      var a = Te(e);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), rh.has(a) || (rh.add(a), t = { rel: t, crossOrigin: l, href: e }, n.querySelector(a) === null && (e = n.createElement("link"), ve(e, "link", t), Kt(e), n.head.appendChild(e)));
    }
  }
  function jy(t) {
    rn.D(t), fh("dns-prefetch", t, null);
  }
  function Hy(t, e) {
    rn.C(t, e), fh("preconnect", t, e);
  }
  function wy(t, e, l) {
    rn.L(t, e, l);
    var n = uu;
    if (n && t && e) {
      var a = 'link[rel="preload"][as="' + Te(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Te(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Te(
        l.imageSizes
      ) + '"]')) : a += '[href="' + Te(t) + '"]';
      var u = a;
      switch (e) {
        case "style":
          u = iu(t);
          break;
        case "script":
          u = cu(t);
      }
      cl.has(u) || (t = G(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), cl.set(u, t), n.querySelector(a) !== null || e === "style" && n.querySelector(ii(u)) || e === "script" && n.querySelector(ci(u)) || (e = n.createElement("link"), ve(e, "link", t), Kt(e), n.head.appendChild(e)));
    }
  }
  function Ly(t, e) {
    rn.m(t, e);
    var l = uu;
    if (l && t) {
      var n = e && typeof e.as == "string" ? e.as : "script", a = 'link[rel="modulepreload"][as="' + Te(n) + '"][href="' + Te(t) + '"]', u = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = cu(t);
      }
      if (!cl.has(u) && (t = G({ rel: "modulepreload", href: t }, e), cl.set(u, t), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(ci(u)))
              return;
        }
        n = l.createElement("link"), ve(n, "link", t), Kt(n), l.head.appendChild(n);
      }
    }
  }
  function Yy(t, e, l) {
    rn.S(t, e, l);
    var n = uu;
    if (n && t) {
      var a = wt(n).hoistableStyles, u = iu(t);
      e = e || "default";
      var c = a.get(u);
      if (!c) {
        var o = { loading: 0, preload: null };
        if (c = n.querySelector(
          ii(u)
        ))
          o.loading = 5;
        else {
          t = G(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = cl.get(u)) && Or(t, l);
          var h = c = n.createElement("link");
          Kt(h), ve(h, "link", t), h._p = new Promise(function(b, O) {
            h.onload = b, h.onerror = O;
          }), h.addEventListener("load", function() {
            o.loading |= 1;
          }), h.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, mc(c, e, n);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: o
        }, a.set(u, c);
      }
    }
  }
  function Gy(t, e) {
    rn.X(t, e);
    var l = uu;
    if (l && t) {
      var n = wt(l).hoistableScripts, a = cu(t), u = n.get(a);
      u || (u = l.querySelector(ci(a)), u || (t = G({ src: t, async: !0 }, e), (e = cl.get(a)) && Rr(t, e), u = l.createElement("script"), Kt(u), ve(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Xy(t, e) {
    rn.M(t, e);
    var l = uu;
    if (l && t) {
      var n = wt(l).hoistableScripts, a = cu(t), u = n.get(a);
      u || (u = l.querySelector(ci(a)), u || (t = G({ src: t, async: !0, type: "module" }, e), (e = cl.get(a)) && Rr(t, e), u = l.createElement("script"), Kt(u), ve(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function oh(t, e, l, n) {
    var a = (a = et.current) ? hc(a) : null;
    if (!a) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = iu(l.href), l = wt(
          a
        ).hoistableStyles, n = l.get(e), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = iu(l.href);
          var u = wt(
            a
          ).hoistableStyles, c = u.get(t);
          if (c || (a = a.ownerDocument || a, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, c), (u = a.querySelector(
            ii(t)
          )) && !u._p && (c.instance = u, c.state.loading = 5), cl.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, cl.set(t, l), u || Qy(
            a,
            t,
            l,
            c.state
          ))), e && n === null)
            throw Error(r(528, ""));
          return c;
        }
        if (e && n !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = cu(l), l = wt(
          a
        ).hoistableScripts, n = l.get(e), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function iu(t) {
    return 'href="' + Te(t) + '"';
  }
  function ii(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function dh(t) {
    return G({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Qy(t, e, l, n) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? n.loading = 1 : (e = t.createElement("link"), n.preload = e, e.addEventListener("load", function() {
      return n.loading |= 1;
    }), e.addEventListener("error", function() {
      return n.loading |= 2;
    }), ve(e, "link", l), Kt(e), t.head.appendChild(e));
  }
  function cu(t) {
    return '[src="' + Te(t) + '"]';
  }
  function ci(t) {
    return "script[async]" + t;
  }
  function hh(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var n = t.querySelector(
            'style[data-href~="' + Te(l.href) + '"]'
          );
          if (n)
            return e.instance = n, Kt(n), n;
          var a = G({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (t.ownerDocument || t).createElement(
            "style"
          ), Kt(n), ve(n, "style", a), mc(n, l.precedence, t), e.instance = n;
        case "stylesheet":
          a = iu(l.href);
          var u = t.querySelector(
            ii(a)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, Kt(u), u;
          n = dh(l), (a = cl.get(a)) && Or(n, a), u = (t.ownerDocument || t).createElement("link"), Kt(u);
          var c = u;
          return c._p = new Promise(function(o, h) {
            c.onload = o, c.onerror = h;
          }), ve(u, "link", n), e.state.loading |= 4, mc(u, l.precedence, t), e.instance = u;
        case "script":
          return u = cu(l.src), (a = t.querySelector(
            ci(u)
          )) ? (e.instance = a, Kt(a), a) : (n = l, (a = cl.get(u)) && (n = G({}, l), Rr(n, a)), t = t.ownerDocument || t, a = t.createElement("script"), Kt(a), ve(a, "link", n), t.head.appendChild(a), e.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (n = e.instance, e.state.loading |= 4, mc(n, l.precedence, t));
    return e.instance;
  }
  function mc(t, e, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, u = a, c = 0; c < n.length; c++) {
      var o = n[c];
      if (o.dataset.precedence === e) u = o;
      else if (u !== a) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function Or(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Rr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var yc = null;
  function mh(t, e, l) {
    if (yc === null) {
      var n = /* @__PURE__ */ new Map(), a = yc = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = yc, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(t)) return n;
    for (n.set(t, null), l = l.getElementsByTagName(t), a = 0; a < l.length; a++) {
      var u = l[a];
      if (!(u[Ie] || u[Ut] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(e) || "";
        c = t + c;
        var o = n.get(c);
        o ? o.push(u) : n.set(c, [u]);
      }
    }
    return n;
  }
  function yh(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Vy(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function gh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Zy(t, e, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = iu(n.href), u = e.querySelector(
          ii(a)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = gc.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Kt(u);
          return;
        }
        u = e.ownerDocument || e, n = dh(n), (a = cl.get(a)) && Or(n, a), u = u.createElement("link"), Kt(u);
        var c = u;
        c._p = new Promise(function(o, h) {
          c.onload = o, c.onerror = h;
        }), ve(u, "link", n), l.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = gc.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var zr = 0;
  function Ky(t, e) {
    return t.stylesheets && t.count === 0 && pc(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (t.stylesheets && pc(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && zr === 0 && (zr = 62500 * Oy());
      var a = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && pc(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > zr ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function gc() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) pc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var vc = null;
  function pc(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, vc = /* @__PURE__ */ new Map(), e.forEach(ky, t), vc = null, gc.call(t));
  }
  function ky(t, e) {
    if (!(e.state.loading & 4)) {
      var l = vc.get(t);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), vc.set(t, l);
        for (var a = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < a.length; u++) {
          var c = a[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), n = c);
        }
        n && l.set(null, n);
      }
      a = e.instance, c = a.getAttribute("data-precedence"), u = l.get(c) || n, u === n && l.set(null, a), l.set(c, a), this.count++, n = gc.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), u ? u.parentNode.insertBefore(a, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), e.state.loading |= 4;
    }
  }
  var si = {
    $$typeof: Ht,
    Provider: null,
    Consumer: null,
    _currentValue: w,
    _currentValue2: w,
    _threadCount: 0
  };
  function Jy(t, e, l, n, a, u, c, o, h) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = He(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = He(0), this.hiddenUpdates = He(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function vh(t, e, l, n, a, u, c, o, h, b, O, z) {
    return t = new Jy(
      t,
      e,
      l,
      c,
      h,
      b,
      O,
      z,
      o
    ), e = 1, u === !0 && (e |= 24), u = Ve(3, null, null, e), t.current = u, u.stateNode = t, e = cs(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: e
    }, os(u), t;
  }
  function ph(t) {
    return t ? (t = wa, t) : wa;
  }
  function bh(t, e, l, n, a, u) {
    a = ph(a), n.context === null ? n.context = a : n.pendingContext = a, n = An(e), n.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (n.callback = u), l = Tn(t, n, e), l !== null && (Be(l, t, e), Yu(l, t, e));
  }
  function Sh(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Mr(t, e) {
    Sh(t, e), (t = t.alternate) && Sh(t, e);
  }
  function Eh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ca(t, 67108864);
      e !== null && Be(e, t, 67108864), Mr(t, 67108864);
    }
  }
  function _h(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = We();
      e = gu(e);
      var l = ca(t, e);
      l !== null && Be(l, t, e), Mr(t, e);
    }
  }
  var bc = !0;
  function Wy(t, e, l, n) {
    var a = T.T;
    T.T = null;
    var u = H.p;
    try {
      H.p = 2, Cr(t, e, l, n);
    } finally {
      H.p = u, T.T = a;
    }
  }
  function $y(t, e, l, n) {
    var a = T.T;
    T.T = null;
    var u = H.p;
    try {
      H.p = 8, Cr(t, e, l, n);
    } finally {
      H.p = u, T.T = a;
    }
  }
  function Cr(t, e, l, n) {
    if (bc) {
      var a = Dr(n);
      if (a === null)
        gr(
          t,
          e,
          n,
          Sc,
          l
        ), Th(t, n);
      else if (Iy(
        a,
        t,
        e,
        l,
        n
      ))
        n.stopPropagation();
      else if (Th(t, n), e & 4 && -1 < Fy.indexOf(t)) {
        for (; a !== null; ) {
          var u = Ol(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = dl(u.pendingLanes);
                  if (c !== 0) {
                    var o = u;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; c; ) {
                      var h = 1 << 31 - se(c);
                      o.entanglements[1] |= h, c &= ~h;
                    }
                    Ul(u), (St & 6) === 0 && (lc = Vt() + 500, li(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = ca(u, 2), o !== null && Be(o, u, 2), ac(), Mr(u, 2);
            }
          if (u = Dr(n), u === null && gr(
            t,
            e,
            n,
            Sc,
            l
          ), u === a) break;
          a = u;
        }
        a !== null && n.stopPropagation();
      } else
        gr(
          t,
          e,
          n,
          null,
          l
        );
    }
  }
  function Dr(t) {
    return t = Nu(t), Ur(t);
  }
  var Sc = null;
  function Ur(t) {
    if (Sc = null, t = we(t), t !== null) {
      var e = U(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = j(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = X(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Sc = t, null;
  }
  function Ah(t) {
    switch (t) {
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
        switch (jc()) {
          case hu:
            return 2;
          case at:
            return 8;
          case on:
          case Hc:
            return 32;
          case jl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var qr = !1, Bn = null, jn = null, Hn = null, ri = /* @__PURE__ */ new Map(), fi = /* @__PURE__ */ new Map(), wn = [], Fy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Th(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Bn = null;
        break;
      case "dragenter":
      case "dragleave":
        jn = null;
        break;
      case "mouseover":
      case "mouseout":
        Hn = null;
        break;
      case "pointerover":
      case "pointerout":
        ri.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        fi.delete(e.pointerId);
    }
  }
  function oi(t, e, l, n, a, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: u,
      targetContainers: [a]
    }, e !== null && (e = Ol(e), e !== null && Eh(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
  }
  function Iy(t, e, l, n, a) {
    switch (e) {
      case "focusin":
        return Bn = oi(
          Bn,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return jn = oi(
          jn,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return Hn = oi(
          Hn,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var u = a.pointerId;
        return ri.set(
          u,
          oi(
            ri.get(u) || null,
            t,
            e,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return u = a.pointerId, fi.set(
          u,
          oi(
            fi.get(u) || null,
            t,
            e,
            l,
            n,
            a
          )
        ), !0;
    }
    return !1;
  }
  function Nh(t) {
    var e = we(t.target);
    if (e !== null) {
      var l = U(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = j(l), e !== null) {
            t.blockedOn = e, kn(t.priority, function() {
              _h(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = X(l), e !== null) {
            t.blockedOn = e, kn(t.priority, function() {
              _h(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ec(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Dr(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        Tu = n, l.target.dispatchEvent(n), Tu = null;
      } else
        return e = Ol(l), e !== null && Eh(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function Oh(t, e, l) {
    Ec(t) && l.delete(e);
  }
  function Py() {
    qr = !1, Bn !== null && Ec(Bn) && (Bn = null), jn !== null && Ec(jn) && (jn = null), Hn !== null && Ec(Hn) && (Hn = null), ri.forEach(Oh), fi.forEach(Oh);
  }
  function _c(t, e) {
    t.blockedOn === e && (t.blockedOn = null, qr || (qr = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      Py
    )));
  }
  var Ac = null;
  function Rh(t) {
    Ac !== t && (Ac = t, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        Ac === t && (Ac = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], n = t[e + 1], a = t[e + 2];
          if (typeof n != "function") {
            if (Ur(n || l) === null)
              continue;
            break;
          }
          var u = Ol(l);
          u !== null && (t.splice(e, 3), e -= 3, Ds(
            u,
            {
              pending: !0,
              data: a,
              method: l.method,
              action: n
            },
            n,
            a
          ));
        }
      }
    ));
  }
  function su(t) {
    function e(h) {
      return _c(h, t);
    }
    Bn !== null && _c(Bn, t), jn !== null && _c(jn, t), Hn !== null && _c(Hn, t), ri.forEach(e), fi.forEach(e);
    for (var l = 0; l < wn.length; l++) {
      var n = wn[l];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < wn.length && (l = wn[0], l.blockedOn === null); )
      Nh(l), l.blockedOn === null && wn.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], u = l[n + 1], c = a[Dt] || null;
        if (typeof u == "function")
          c || Rh(l);
        else if (c) {
          var o = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, c = u[Dt] || null)
              o = c.formAction;
            else if (Ur(a) !== null) continue;
          } else o = c.action;
          typeof o == "function" ? l[n + 1] = o : (l.splice(n, 3), n -= 3), Rh(l);
        }
      }
  }
  function zh() {
    function t(u) {
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
    function e() {
      a !== null && (a(), a = null), n || setTimeout(l, 20);
    }
    function l() {
      if (!n && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, a = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        n = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), a !== null && (a(), a = null);
      };
    }
  }
  function xr(t) {
    this._internalRoot = t;
  }
  Tc.prototype.render = xr.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var l = e.current, n = We();
    bh(l, n, t, e, null, null);
  }, Tc.prototype.unmount = xr.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      bh(t.current, 2, null, t, null, null), ac(), e[Nl] = null;
    }
  };
  function Tc(t) {
    this._internalRoot = t;
  }
  Tc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Ll();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < wn.length && e !== 0 && e < wn[l].priority; l++) ;
      wn.splice(l, 0, t), l === 0 && Nh(t);
    }
  };
  var Mh = i.version;
  if (Mh !== "19.2.4")
    throw Error(
      r(
        527,
        Mh,
        "19.2.4"
      )
    );
  H.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = C(e), t = t !== null ? k(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var t0 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: T,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nc.isDisabled && Nc.supportsFiber)
      try {
        _l = Nc.inject(
          t0
        ), ce = Nc;
      } catch {
      }
  }
  return hi.createRoot = function(t, e) {
    if (!v(t)) throw Error(r(299));
    var l = !1, n = "", a = jo, u = Ho, c = wo;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), e = vh(
      t,
      1,
      !1,
      null,
      null,
      l,
      n,
      null,
      a,
      u,
      c,
      zh
    ), t[Nl] = e.current, yr(t), new xr(e);
  }, hi.hydrateRoot = function(t, e, l) {
    if (!v(t)) throw Error(r(299));
    var n = !1, a = "", u = jo, c = Ho, o = wo, h = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (o = l.onRecoverableError), l.formState !== void 0 && (h = l.formState)), e = vh(
      t,
      1,
      !0,
      e,
      l ?? null,
      n,
      a,
      h,
      u,
      c,
      o,
      zh
    ), e.context = ph(null), l = e.current, n = We(), n = gu(n), a = An(n), a.callback = null, Tn(l, a, n), l = n, e.current.lanes = l, Kn(e, l), Ul(e), t[Nl] = e.current, yr(t), new Tc(e);
  }, hi.version = "19.2.4", hi;
}
var Lh;
function f0() {
  if (Lh) return Hr.exports;
  Lh = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (i) {
        console.error(i);
      }
  }
  return f(), Hr.exports = r0(), Hr.exports;
}
var o0 = f0();
const d0 = "/api";
function $h() {
  return window.localStorage.getItem("token");
}
function Yh() {
  window.location.replace("/login.html");
}
async function Sa(f, i = {}) {
  const s = $h(), r = {
    "Content-Type": "application/json",
    ...s ? { Authorization: `Bearer ${s}` } : {},
    ...i.headers || {}
  }, v = await fetch(`${d0}${f}`, {
    ...i,
    headers: r
  }), U = await v.text();
  let j = {};
  if (U)
    try {
      j = JSON.parse(U);
    } catch {
      j = { message: U };
    }
  if (!v.ok) {
    const X = j.error || j.message || "Request failed";
    throw new Error(X);
  }
  return j;
}
const xl = /* @__PURE__ */ Object.create(null);
xl.open = "0";
xl.close = "1";
xl.ping = "2";
xl.pong = "3";
xl.message = "4";
xl.upgrade = "5";
xl.noop = "6";
const Cc = /* @__PURE__ */ Object.create(null);
Object.keys(xl).forEach((f) => {
  Cc[xl[f]] = f;
});
const Vr = { type: "error", data: "parser error" }, Fh = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Ih = typeof ArrayBuffer == "function", Ph = (f) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(f) : f && f.buffer instanceof ArrayBuffer, Fr = ({ type: f, data: i }, s, r) => Fh && i instanceof Blob ? s ? r(i) : Gh(i, r) : Ih && (i instanceof ArrayBuffer || Ph(i)) ? s ? r(i) : Gh(new Blob([i]), r) : r(xl[f] + (i || "")), Gh = (f, i) => {
  const s = new FileReader();
  return s.onload = function() {
    const r = s.result.split(",")[1];
    i("b" + (r || ""));
  }, s.readAsDataURL(f);
};
function Xh(f) {
  return f instanceof Uint8Array ? f : f instanceof ArrayBuffer ? new Uint8Array(f) : new Uint8Array(f.buffer, f.byteOffset, f.byteLength);
}
let Gr;
function h0(f, i) {
  if (Fh && f.data instanceof Blob)
    return f.data.arrayBuffer().then(Xh).then(i);
  if (Ih && (f.data instanceof ArrayBuffer || Ph(f.data)))
    return i(Xh(f.data));
  Fr(f, !1, (s) => {
    Gr || (Gr = new TextEncoder()), i(Gr.encode(s));
  });
}
const Qh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", gi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let f = 0; f < Qh.length; f++)
  gi[Qh.charCodeAt(f)] = f;
const m0 = (f) => {
  let i = f.length * 0.75, s = f.length, r, v = 0, U, j, X, x;
  f[f.length - 1] === "=" && (i--, f[f.length - 2] === "=" && i--);
  const C = new ArrayBuffer(i), k = new Uint8Array(C);
  for (r = 0; r < s; r += 4)
    U = gi[f.charCodeAt(r)], j = gi[f.charCodeAt(r + 1)], X = gi[f.charCodeAt(r + 2)], x = gi[f.charCodeAt(r + 3)], k[v++] = U << 2 | j >> 4, k[v++] = (j & 15) << 4 | X >> 2, k[v++] = (X & 3) << 6 | x & 63;
  return C;
}, y0 = typeof ArrayBuffer == "function", Ir = (f, i) => {
  if (typeof f != "string")
    return {
      type: "message",
      data: tm(f, i)
    };
  const s = f.charAt(0);
  return s === "b" ? {
    type: "message",
    data: g0(f.substring(1), i)
  } : Cc[s] ? f.length > 1 ? {
    type: Cc[s],
    data: f.substring(1)
  } : {
    type: Cc[s]
  } : Vr;
}, g0 = (f, i) => {
  if (y0) {
    const s = m0(f);
    return tm(s, i);
  } else
    return { base64: !0, data: f };
}, tm = (f, i) => i === "blob" ? f instanceof Blob ? f : new Blob([f]) : f instanceof ArrayBuffer ? f : f.buffer, em = "", v0 = (f, i) => {
  const s = f.length, r = new Array(s);
  let v = 0;
  f.forEach((U, j) => {
    Fr(U, !1, (X) => {
      r[j] = X, ++v === s && i(r.join(em));
    });
  });
}, p0 = (f, i) => {
  const s = f.split(em), r = [];
  for (let v = 0; v < s.length; v++) {
    const U = Ir(s[v], i);
    if (r.push(U), U.type === "error")
      break;
  }
  return r;
};
function b0() {
  return new TransformStream({
    transform(f, i) {
      h0(f, (s) => {
        const r = s.length;
        let v;
        if (r < 126)
          v = new Uint8Array(1), new DataView(v.buffer).setUint8(0, r);
        else if (r < 65536) {
          v = new Uint8Array(3);
          const U = new DataView(v.buffer);
          U.setUint8(0, 126), U.setUint16(1, r);
        } else {
          v = new Uint8Array(9);
          const U = new DataView(v.buffer);
          U.setUint8(0, 127), U.setBigUint64(1, BigInt(r));
        }
        f.data && typeof f.data != "string" && (v[0] |= 128), i.enqueue(v), i.enqueue(s);
      });
    }
  });
}
let Xr;
function Oc(f) {
  return f.reduce((i, s) => i + s.length, 0);
}
function Rc(f, i) {
  if (f[0].length === i)
    return f.shift();
  const s = new Uint8Array(i);
  let r = 0;
  for (let v = 0; v < i; v++)
    s[v] = f[0][r++], r === f[0].length && (f.shift(), r = 0);
  return f.length && r < f[0].length && (f[0] = f[0].slice(r)), s;
}
function S0(f, i) {
  Xr || (Xr = new TextDecoder());
  const s = [];
  let r = 0, v = -1, U = !1;
  return new TransformStream({
    transform(j, X) {
      for (s.push(j); ; ) {
        if (r === 0) {
          if (Oc(s) < 1)
            break;
          const x = Rc(s, 1);
          U = (x[0] & 128) === 128, v = x[0] & 127, v < 126 ? r = 3 : v === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (Oc(s) < 2)
            break;
          const x = Rc(s, 2);
          v = new DataView(x.buffer, x.byteOffset, x.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (Oc(s) < 8)
            break;
          const x = Rc(s, 8), C = new DataView(x.buffer, x.byteOffset, x.length), k = C.getUint32(0);
          if (k > Math.pow(2, 21) - 1) {
            X.enqueue(Vr);
            break;
          }
          v = k * Math.pow(2, 32) + C.getUint32(4), r = 3;
        } else {
          if (Oc(s) < v)
            break;
          const x = Rc(s, v);
          X.enqueue(Ir(U ? x : Xr.decode(x), i)), r = 0;
        }
        if (v === 0 || v > f) {
          X.enqueue(Vr);
          break;
        }
      }
    }
  });
}
const lm = 4;
function It(f) {
  if (f) return E0(f);
}
function E0(f) {
  for (var i in It.prototype)
    f[i] = It.prototype[i];
  return f;
}
It.prototype.on = It.prototype.addEventListener = function(f, i) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + f] = this._callbacks["$" + f] || []).push(i), this;
};
It.prototype.once = function(f, i) {
  function s() {
    this.off(f, s), i.apply(this, arguments);
  }
  return s.fn = i, this.on(f, s), this;
};
It.prototype.off = It.prototype.removeListener = It.prototype.removeAllListeners = It.prototype.removeEventListener = function(f, i) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var s = this._callbacks["$" + f];
  if (!s) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + f], this;
  for (var r, v = 0; v < s.length; v++)
    if (r = s[v], r === i || r.fn === i) {
      s.splice(v, 1);
      break;
    }
  return s.length === 0 && delete this._callbacks["$" + f], this;
};
It.prototype.emit = function(f) {
  this._callbacks = this._callbacks || {};
  for (var i = new Array(arguments.length - 1), s = this._callbacks["$" + f], r = 1; r < arguments.length; r++)
    i[r - 1] = arguments[r];
  if (s) {
    s = s.slice(0);
    for (var r = 0, v = s.length; r < v; ++r)
      s[r].apply(this, i);
  }
  return this;
};
It.prototype.emitReserved = It.prototype.emit;
It.prototype.listeners = function(f) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + f] || [];
};
It.prototype.hasListeners = function(f) {
  return !!this.listeners(f).length;
};
const xc = typeof Promise == "function" && typeof Promise.resolve == "function" ? (i) => Promise.resolve().then(i) : (i, s) => s(i, 0), sl = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), _0 = "arraybuffer";
function nm(f, ...i) {
  return i.reduce((s, r) => (f.hasOwnProperty(r) && (s[r] = f[r]), s), {});
}
const A0 = sl.setTimeout, T0 = sl.clearTimeout;
function Bc(f, i) {
  i.useNativeTimers ? (f.setTimeoutFn = A0.bind(sl), f.clearTimeoutFn = T0.bind(sl)) : (f.setTimeoutFn = sl.setTimeout.bind(sl), f.clearTimeoutFn = sl.clearTimeout.bind(sl));
}
const N0 = 1.33;
function O0(f) {
  return typeof f == "string" ? R0(f) : Math.ceil((f.byteLength || f.size) * N0);
}
function R0(f) {
  let i = 0, s = 0;
  for (let r = 0, v = f.length; r < v; r++)
    i = f.charCodeAt(r), i < 128 ? s += 1 : i < 2048 ? s += 2 : i < 55296 || i >= 57344 ? s += 3 : (r++, s += 4);
  return s;
}
function am() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function z0(f) {
  let i = "";
  for (let s in f)
    f.hasOwnProperty(s) && (i.length && (i += "&"), i += encodeURIComponent(s) + "=" + encodeURIComponent(f[s]));
  return i;
}
function M0(f) {
  let i = {}, s = f.split("&");
  for (let r = 0, v = s.length; r < v; r++) {
    let U = s[r].split("=");
    i[decodeURIComponent(U[0])] = decodeURIComponent(U[1]);
  }
  return i;
}
class C0 extends Error {
  constructor(i, s, r) {
    super(i), this.description = s, this.context = r, this.type = "TransportError";
  }
}
class Pr extends It {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(i) {
    super(), this.writable = !1, Bc(this, i), this.opts = i, this.query = i.query, this.socket = i.socket, this.supportsBinary = !i.forceBase64;
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
    return super.emitReserved("error", new C0(i, s, r)), this;
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
    const s = Ir(i, this.socket.binaryType);
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
    const s = z0(i);
    return s.length ? "?" + s : "";
  }
}
class D0 extends Pr {
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
    p0(i, this.socket.binaryType).forEach(s), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, v0(i, (s) => {
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
    return this.opts.timestampRequests !== !1 && (s[this.opts.timestampParam] = am()), !this.supportsBinary && !s.sid && (s.b64 = 1), this.createUri(i, s);
  }
}
let um = !1;
try {
  um = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const U0 = um;
function q0() {
}
class x0 extends D0 {
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
    r.on("success", s), r.on("error", (v, U) => {
      this.onError("xhr post error", v, U);
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
class ql extends It {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(i, s, r) {
    super(), this.createRequest = i, Bc(this, r), this._opts = r, this._method = r.method || "GET", this._uri = s, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var i;
    const s = nm(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    s.xdomain = !!this._opts.xd;
    const r = this._xhr = this.createRequest(s);
    try {
      r.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let v in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(v) && r.setRequestHeader(v, this._opts.extraHeaders[v]);
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
        var v;
        r.readyState === 3 && ((v = this._opts.cookieJar) === null || v === void 0 || v.parseCookies(
          // @ts-ignore
          r.getResponseHeader("set-cookie")
        )), r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this._data);
    } catch (v) {
      this.setTimeoutFn(() => {
        this._onError(v);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = ql.requestsCount++, ql.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = q0, i)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete ql.requests[this._index], this._xhr = null;
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
ql.requestsCount = 0;
ql.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Vh);
  else if (typeof addEventListener == "function") {
    const f = "onpagehide" in sl ? "pagehide" : "unload";
    addEventListener(f, Vh, !1);
  }
}
function Vh() {
  for (let f in ql.requests)
    ql.requests.hasOwnProperty(f) && ql.requests[f].abort();
}
const B0 = (function() {
  const f = im({
    xdomain: !1
  });
  return f && f.responseType !== null;
})();
class j0 extends x0 {
  constructor(i) {
    super(i);
    const s = i && i.forceBase64;
    this.supportsBinary = B0 && !s;
  }
  request(i = {}) {
    return Object.assign(i, { xd: this.xd }, this.opts), new ql(im, this.uri(), i);
  }
}
function im(f) {
  const i = f.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!i || U0))
      return new XMLHttpRequest();
  } catch {
  }
  if (!i)
    try {
      return new sl[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const cm = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class H0 extends Pr {
  get name() {
    return "websocket";
  }
  doOpen() {
    const i = this.uri(), s = this.opts.protocols, r = cm ? {} : nm(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(i, s, r);
    } catch (v) {
      return this.emitReserved("error", v);
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
      const r = i[s], v = s === i.length - 1;
      Fr(r, this.supportsBinary, (U) => {
        try {
          this.doWrite(r, U);
        } catch {
        }
        v && xc(() => {
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
    return this.opts.timestampRequests && (s[this.opts.timestampParam] = am()), this.supportsBinary || (s.b64 = 1), this.createUri(i, s);
  }
}
const Qr = sl.WebSocket || sl.MozWebSocket;
class w0 extends H0 {
  createSocket(i, s, r) {
    return cm ? new Qr(i, s, r) : s ? new Qr(i, s) : new Qr(i);
  }
  doWrite(i, s) {
    this.ws.send(s);
  }
}
class L0 extends Pr {
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
        const s = S0(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = i.readable.pipeThrough(s).getReader(), v = b0();
        v.readable.pipeTo(i.writable), this._writer = v.writable.getWriter();
        const U = () => {
          r.read().then(({ done: X, value: x }) => {
            X || (this.onPacket(x), U());
          }).catch((X) => {
          });
        };
        U();
        const j = { type: "open" };
        this.query.sid && (j.data = `{"sid":"${this.query.sid}"}`), this._writer.write(j).then(() => this.onOpen());
      });
    });
  }
  write(i) {
    this.writable = !1;
    for (let s = 0; s < i.length; s++) {
      const r = i[s], v = s === i.length - 1;
      this._writer.write(r).then(() => {
        v && xc(() => {
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
const Y0 = {
  websocket: w0,
  webtransport: L0,
  polling: j0
}, G0 = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, X0 = [
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
function Zr(f) {
  if (f.length > 8e3)
    throw "URI too long";
  const i = f, s = f.indexOf("["), r = f.indexOf("]");
  s != -1 && r != -1 && (f = f.substring(0, s) + f.substring(s, r).replace(/:/g, ";") + f.substring(r, f.length));
  let v = G0.exec(f || ""), U = {}, j = 14;
  for (; j--; )
    U[X0[j]] = v[j] || "";
  return s != -1 && r != -1 && (U.source = i, U.host = U.host.substring(1, U.host.length - 1).replace(/;/g, ":"), U.authority = U.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), U.ipv6uri = !0), U.pathNames = Q0(U, U.path), U.queryKey = V0(U, U.query), U;
}
function Q0(f, i) {
  const s = /\/{2,9}/g, r = i.replace(s, "/").split("/");
  return (i.slice(0, 1) == "/" || i.length === 0) && r.splice(0, 1), i.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function V0(f, i) {
  const s = {};
  return i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, v, U) {
    v && (s[v] = U);
  }), s;
}
const Kr = typeof addEventListener == "function" && typeof removeEventListener == "function", Dc = [];
Kr && addEventListener("offline", () => {
  Dc.forEach((f) => f());
}, !1);
class Yn extends It {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(i, s) {
    if (super(), this.binaryType = _0, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, i && typeof i == "object" && (s = i, i = null), i) {
      const r = Zr(i);
      s.hostname = r.host, s.secure = r.protocol === "https" || r.protocol === "wss", s.port = r.port, r.query && (s.query = r.query);
    } else s.host && (s.hostname = Zr(s.host).host);
    Bc(this, s), this.secure = s.secure != null ? s.secure : typeof location < "u" && location.protocol === "https:", s.hostname && !s.port && (s.port = this.secure ? "443" : "80"), this.hostname = s.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = s.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, s.transports.forEach((r) => {
      const v = r.prototype.name;
      this.transports.push(v), this._transportsByName[v] = r;
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
    }, s), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = M0(this.opts.query)), Kr && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Dc.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    s.EIO = lm, s.transport = i, this.id && (s.sid = this.id);
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
    const i = this.opts.rememberUpgrade && Yn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", Yn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      const v = this.writeBuffer[r].data;
      if (v && (s += O0(v)), r > 0 && s > this._maxPayload)
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
    return i && (this._pingTimeoutTime = 0, xc(() => {
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
  _sendPacket(i, s, r, v) {
    if (typeof s == "function" && (v = s, s = void 0), typeof r == "function" && (v = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const U = {
      type: i,
      data: s,
      options: r
    };
    this.emitReserved("packetCreate", U), this.writeBuffer.push(U), v && this.once("flush", v), this.flush();
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
    if (Yn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Kr && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = Dc.indexOf(this._offlineEventListener);
        r !== -1 && Dc.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", i, s), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Yn.protocol = lm;
class Z0 extends Yn {
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
    Yn.priorWebsocketSuccess = !1;
    const v = () => {
      r || (s.send([{ type: "ping", data: "probe" }]), s.once("packet", (G) => {
        if (!r)
          if (G.type === "pong" && G.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", s), !s)
              return;
            Yn.priorWebsocketSuccess = s.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (k(), this.setTransport(s), s.send([{ type: "upgrade" }]), this.emitReserved("upgrade", s), s = null, this.upgrading = !1, this.flush());
            });
          } else {
            const mt = new Error("probe error");
            mt.transport = s.name, this.emitReserved("upgradeError", mt);
          }
      }));
    };
    function U() {
      r || (r = !0, k(), s.close(), s = null);
    }
    const j = (G) => {
      const mt = new Error("probe error: " + G);
      mt.transport = s.name, U(), this.emitReserved("upgradeError", mt);
    };
    function X() {
      j("transport closed");
    }
    function x() {
      j("socket closed");
    }
    function C(G) {
      s && G.name !== s.name && U();
    }
    const k = () => {
      s.removeListener("open", v), s.removeListener("error", j), s.removeListener("close", X), this.off("close", x), this.off("upgrading", C);
    };
    s.once("open", v), s.once("error", j), s.once("close", X), this.once("close", x), this.once("upgrading", C), this._upgrades.indexOf("webtransport") !== -1 && i !== "webtransport" ? this.setTimeoutFn(() => {
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
let K0 = class extends Z0 {
  constructor(i, s = {}) {
    const r = typeof i == "object" ? i : s;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((v) => Y0[v]).filter((v) => !!v)), super(i, r);
  }
};
function k0(f, i = "", s) {
  let r = f;
  s = s || typeof location < "u" && location, f == null && (f = s.protocol + "//" + s.host), typeof f == "string" && (f.charAt(0) === "/" && (f.charAt(1) === "/" ? f = s.protocol + f : f = s.host + f), /^(https?|wss?):\/\//.test(f) || (typeof s < "u" ? f = s.protocol + "//" + f : f = "https://" + f), r = Zr(f)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const U = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + U + ":" + r.port + i, r.href = r.protocol + "://" + U + (s && s.port === r.port ? "" : ":" + r.port), r;
}
const J0 = typeof ArrayBuffer == "function", W0 = (f) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(f) : f.buffer instanceof ArrayBuffer, sm = Object.prototype.toString, $0 = typeof Blob == "function" || typeof Blob < "u" && sm.call(Blob) === "[object BlobConstructor]", F0 = typeof File == "function" || typeof File < "u" && sm.call(File) === "[object FileConstructor]";
function tf(f) {
  return J0 && (f instanceof ArrayBuffer || W0(f)) || $0 && f instanceof Blob || F0 && f instanceof File;
}
function Uc(f, i) {
  if (!f || typeof f != "object")
    return !1;
  if (Array.isArray(f)) {
    for (let s = 0, r = f.length; s < r; s++)
      if (Uc(f[s]))
        return !0;
    return !1;
  }
  if (tf(f))
    return !0;
  if (f.toJSON && typeof f.toJSON == "function" && arguments.length === 1)
    return Uc(f.toJSON(), !0);
  for (const s in f)
    if (Object.prototype.hasOwnProperty.call(f, s) && Uc(f[s]))
      return !0;
  return !1;
}
function I0(f) {
  const i = [], s = f.data, r = f;
  return r.data = kr(s, i), r.attachments = i.length, { packet: r, buffers: i };
}
function kr(f, i) {
  if (!f)
    return f;
  if (tf(f)) {
    const s = { _placeholder: !0, num: i.length };
    return i.push(f), s;
  } else if (Array.isArray(f)) {
    const s = new Array(f.length);
    for (let r = 0; r < f.length; r++)
      s[r] = kr(f[r], i);
    return s;
  } else if (typeof f == "object" && !(f instanceof Date)) {
    const s = {};
    for (const r in f)
      Object.prototype.hasOwnProperty.call(f, r) && (s[r] = kr(f[r], i));
    return s;
  }
  return f;
}
function P0(f, i) {
  return f.data = Jr(f.data, i), delete f.attachments, f;
}
function Jr(f, i) {
  if (!f)
    return f;
  if (f && f._placeholder === !0) {
    if (typeof f.num == "number" && f.num >= 0 && f.num < i.length)
      return i[f.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(f))
    for (let s = 0; s < f.length; s++)
      f[s] = Jr(f[s], i);
  else if (typeof f == "object")
    for (const s in f)
      Object.prototype.hasOwnProperty.call(f, s) && (f[s] = Jr(f[s], i));
  return f;
}
const tg = [
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
var ht;
(function(f) {
  f[f.CONNECT = 0] = "CONNECT", f[f.DISCONNECT = 1] = "DISCONNECT", f[f.EVENT = 2] = "EVENT", f[f.ACK = 3] = "ACK", f[f.CONNECT_ERROR = 4] = "CONNECT_ERROR", f[f.BINARY_EVENT = 5] = "BINARY_EVENT", f[f.BINARY_ACK = 6] = "BINARY_ACK";
})(ht || (ht = {}));
class eg {
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
    return (i.type === ht.EVENT || i.type === ht.ACK) && Uc(i) ? this.encodeAsBinary({
      type: i.type === ht.EVENT ? ht.BINARY_EVENT : ht.BINARY_ACK,
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
    return (i.type === ht.BINARY_EVENT || i.type === ht.BINARY_ACK) && (s += i.attachments + "-"), i.nsp && i.nsp !== "/" && (s += i.nsp + ","), i.id != null && (s += i.id), i.data != null && (s += JSON.stringify(i.data, this.replacer)), s;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(i) {
    const s = I0(i), r = this.encodeAsString(s.packet), v = s.buffers;
    return v.unshift(r), v;
  }
}
class ef extends It {
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
      const r = s.type === ht.BINARY_EVENT;
      r || s.type === ht.BINARY_ACK ? (s.type = r ? ht.EVENT : ht.ACK, this.reconstructor = new lg(s), s.attachments === 0 && super.emitReserved("decoded", s)) : super.emitReserved("decoded", s);
    } else if (tf(i) || i.base64)
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
    if (ht[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === ht.BINARY_EVENT || r.type === ht.BINARY_ACK) {
      const U = s + 1;
      for (; i.charAt(++s) !== "-" && s != i.length; )
        ;
      const j = i.substring(U, s);
      if (j != Number(j) || i.charAt(s) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(j);
    }
    if (i.charAt(s + 1) === "/") {
      const U = s + 1;
      for (; ++s && !(i.charAt(s) === "," || s === i.length); )
        ;
      r.nsp = i.substring(U, s);
    } else
      r.nsp = "/";
    const v = i.charAt(s + 1);
    if (v !== "" && Number(v) == v) {
      const U = s + 1;
      for (; ++s; ) {
        const j = i.charAt(s);
        if (j == null || Number(j) != j) {
          --s;
          break;
        }
        if (s === i.length)
          break;
      }
      r.id = Number(i.substring(U, s + 1));
    }
    if (i.charAt(++s)) {
      const U = this.tryParse(i.substr(s));
      if (ef.isPayloadValid(r.type, U))
        r.data = U;
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
      case ht.CONNECT:
        return Zh(s);
      case ht.DISCONNECT:
        return s === void 0;
      case ht.CONNECT_ERROR:
        return typeof s == "string" || Zh(s);
      case ht.EVENT:
      case ht.BINARY_EVENT:
        return Array.isArray(s) && (typeof s[0] == "number" || typeof s[0] == "string" && tg.indexOf(s[0]) === -1);
      case ht.ACK:
      case ht.BINARY_ACK:
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
class lg {
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
      const s = P0(this.reconPack, this.buffers);
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
function Zh(f) {
  return Object.prototype.toString.call(f) === "[object Object]";
}
const ng = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: ef,
  Encoder: eg,
  get PacketType() {
    return ht;
  }
}, Symbol.toStringTag, { value: "Module" }));
function El(f, i, s) {
  return f.on(i, s), function() {
    f.off(i, s);
  };
}
const ag = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class rm extends It {
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
      El(i, "open", this.onopen.bind(this)),
      El(i, "packet", this.onpacket.bind(this)),
      El(i, "error", this.onerror.bind(this)),
      El(i, "close", this.onclose.bind(this))
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
    var r, v, U;
    if (ag.hasOwnProperty(i))
      throw new Error('"' + i.toString() + '" is a reserved event name');
    if (s.unshift(i), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(s), this;
    const j = {
      type: ht.EVENT,
      data: s
    };
    if (j.options = {}, j.options.compress = this.flags.compress !== !1, typeof s[s.length - 1] == "function") {
      const k = this.ids++, G = s.pop();
      this._registerAckCallback(k, G), j.id = k;
    }
    const X = (v = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || v === void 0 ? void 0 : v.writable, x = this.connected && !(!((U = this.io.engine) === null || U === void 0) && U._hasPingExpired());
    return this.flags.volatile && !X || (x ? (this.notifyOutgoingListeners(j), this.packet(j)) : this.sendBuffer.push(j)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(i, s) {
    var r;
    const v = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (v === void 0) {
      this.acks[i] = s;
      return;
    }
    const U = this.io.setTimeoutFn(() => {
      delete this.acks[i];
      for (let X = 0; X < this.sendBuffer.length; X++)
        this.sendBuffer[X].id === i && this.sendBuffer.splice(X, 1);
      s.call(this, new Error("operation has timed out"));
    }, v), j = (...X) => {
      this.io.clearTimeoutFn(U), s.apply(this, X);
    };
    j.withError = !0, this.acks[i] = j;
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
    return new Promise((r, v) => {
      const U = (j, X) => j ? v(j) : r(X);
      U.withError = !0, s.push(U), this.emit(i, ...s);
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
    i.push((v, ...U) => (this._queue[0], v !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), s && s(v)) : (this._queue.shift(), s && s(null, ...U)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
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
      type: ht.CONNECT,
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
        case ht.CONNECT:
          i.data && i.data.sid ? this.onconnect(i.data.sid, i.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ht.EVENT:
        case ht.BINARY_EVENT:
          this.onevent(i);
          break;
        case ht.ACK:
        case ht.BINARY_ACK:
          this.onack(i);
          break;
        case ht.DISCONNECT:
          this.ondisconnect();
          break;
        case ht.CONNECT_ERROR:
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
    return function(...v) {
      r || (r = !0, s.packet({
        type: ht.ACK,
        id: i,
        data: v
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
    return this.connected && this.packet({ type: ht.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function fu(f) {
  f = f || {}, this.ms = f.min || 100, this.max = f.max || 1e4, this.factor = f.factor || 2, this.jitter = f.jitter > 0 && f.jitter <= 1 ? f.jitter : 0, this.attempts = 0;
}
fu.prototype.duration = function() {
  var f = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var i = Math.random(), s = Math.floor(i * this.jitter * f);
    f = (Math.floor(i * 10) & 1) == 0 ? f - s : f + s;
  }
  return Math.min(f, this.max) | 0;
};
fu.prototype.reset = function() {
  this.attempts = 0;
};
fu.prototype.setMin = function(f) {
  this.ms = f;
};
fu.prototype.setMax = function(f) {
  this.max = f;
};
fu.prototype.setJitter = function(f) {
  this.jitter = f;
};
class Wr extends It {
  constructor(i, s) {
    var r;
    super(), this.nsps = {}, this.subs = [], i && typeof i == "object" && (s = i, i = void 0), s = s || {}, s.path = s.path || "/socket.io", this.opts = s, Bc(this, s), this.reconnection(s.reconnection !== !1), this.reconnectionAttempts(s.reconnectionAttempts || 1 / 0), this.reconnectionDelay(s.reconnectionDelay || 1e3), this.reconnectionDelayMax(s.reconnectionDelayMax || 5e3), this.randomizationFactor((r = s.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new fu({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(s.timeout == null ? 2e4 : s.timeout), this._readyState = "closed", this.uri = i;
    const v = s.parser || ng;
    this.encoder = new v.Encoder(), this.decoder = new v.Decoder(), this._autoConnect = s.autoConnect !== !1, this._autoConnect && this.open();
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
    this.engine = new K0(this.uri, this.opts);
    const s = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const v = El(s, "open", function() {
      r.onopen(), i && i();
    }), U = (X) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", X), i ? i(X) : this.maybeReconnectOnOpen();
    }, j = El(s, "error", U);
    if (this._timeout !== !1) {
      const X = this._timeout, x = this.setTimeoutFn(() => {
        v(), U(new Error("timeout")), s.close();
      }, X);
      this.opts.autoUnref && x.unref(), this.subs.push(() => {
        this.clearTimeoutFn(x);
      });
    }
    return this.subs.push(v), this.subs.push(j), this;
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
      El(i, "ping", this.onping.bind(this)),
      El(i, "data", this.ondata.bind(this)),
      El(i, "error", this.onerror.bind(this)),
      El(i, "close", this.onclose.bind(this)),
      // @ts-ignore
      El(this.decoder, "decoded", this.ondecoded.bind(this))
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
    xc(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new rm(this, i, s), this.nsps[i] = r), r;
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
        i.skipReconnect || (this.emitReserved("reconnect_attempt", i.backoff.attempts), !i.skipReconnect && i.open((v) => {
          v ? (i._reconnecting = !1, i.reconnect(), this.emitReserved("reconnect_error", v)) : i.onreconnect();
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
const mi = {};
function qc(f, i) {
  typeof f == "object" && (i = f, f = void 0), i = i || {};
  const s = k0(f, i.path || "/socket.io"), r = s.source, v = s.id, U = s.path, j = mi[v] && U in mi[v].nsps, X = i.forceNew || i["force new connection"] || i.multiplex === !1 || j;
  let x;
  return X ? x = new Wr(r, i) : (mi[v] || (mi[v] = new Wr(r, i)), x = mi[v]), s.query && !i.query && (i.query = s.queryKey), x.socket(s.path, i);
}
Object.assign(qc, {
  Manager: Wr,
  Socket: rm,
  io: qc,
  connect: qc
});
let Ea = null;
function ug(f) {
  return Ea ? Ea.auth = { token: f } : Ea = qc({
    autoConnect: !1,
    transports: ["websocket"],
    auth: { token: f }
  }), Ea;
}
function ig() {
  Ea && (Ea.disconnect(), Ea = null);
}
const cg = ["POPULAR", "MAL_ONLY", "HYBRID"], sg = ["STANDARD", "BALANCED_STRICT", "BALANCED_RELAXED"], rg = ["OP_ONLY", "ED_ONLY", "MIXED"], fg = 2, og = 3, dg = 2, hg = {
  name: "",
  isPrivate: !1,
  roundCount: 10,
  guessSeconds: 20,
  sampleSeconds: 10,
  sourceMode: "HYBRID",
  selectionMode: "STANDARD",
  themeMode: "MIXED"
};
function fn(f, i, s, { timeoutMs: r = 1e4 } = {}) {
  return new Promise((v, U) => {
    let j = !1;
    const X = window.setTimeout(() => {
      j || (j = !0, U(new Error("Request timed out")));
    }, r);
    f.emit(i, s, (x) => {
      if (!j)
        return j = !0, window.clearTimeout(X), x?.ok ? v(x) : U(new Error(x?.error || x?.code || "Request failed"));
    });
  });
}
function zc(f) {
  return String(f || "").trim().toUpperCase();
}
function Mc(f, i) {
  const s = new URLSearchParams(window.location.search);
  f ? s.set("lobby", f) : s.delete("lobby"), i ? s.set("inviteToken", i) : s.delete("inviteToken");
  const r = s.toString();
  window.history.replaceState({}, "", r ? `${window.location.pathname}?${r}` : window.location.pathname);
}
function mg(f) {
  if (!Number.isFinite(f) || f <= 0) return "00:00";
  const i = Math.ceil(f / 1e3), s = Math.floor(i / 60), r = i % 60;
  return `${String(s).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function Kh(f, i) {
  return (i.score || 0) - (f.score || 0);
}
function yg(f) {
  return Array.isArray(f) ? f.map((i) => ({
    index: Number.parseInt(i?.index, 10),
    audioUrl: typeof i?.audioUrl == "string" ? i.audioUrl : null,
    videoUrl: typeof i?.videoUrl == "string" ? i.videoUrl : null,
    sampleStartSec: Number.isFinite(i?.sampleStartSec) ? i.sampleStartSec : 0,
    sampleDurationSec: Number.isFinite(i?.sampleDurationSec) ? i.sampleDurationSec : 0
  })).filter((i) => Number.isInteger(i.index) && i.index > 0).sort((i, s) => i.index - s.index) : [];
}
function ru(f) {
  return String(f || "").trim();
}
function kh(f) {
  const i = ru(f).toLowerCase();
  return i ? i.includes("only host") ? "Only the host can start the game." : i.includes("not enough players") ? "Not enough players to start. Invite more players or lower the minimum players setting." : i.includes("balanced strict") ? "Balanced strict could not build fair rounds from MAL lists. Try BALANCED_RELAXED or HYBRID." : i.includes("mal_only") ? "MAL_ONLY could not build enough rounds from linked MAL lists. Try HYBRID or POPULAR." : i.includes("playable round media") || i.includes("round seeds") || i.includes("media provider") ? "Could not prepare enough playable songs for this match. Try fewer rounds or different source/theme settings." : i.includes("timed out") ? "Game start timed out. Please try again." : ru(f) : "Could not start the game right now. Please try again.";
}
function gg(f) {
  const i = ru(f).toLowerCase();
  return i ? i.includes("at least 2 characters") ? "Type at least 2 characters to search." : i.includes("too many") || i.includes("rate") ? "Search is rate-limited right now. Wait a few seconds and try again." : i.includes("timed out") ? "Search timed out. Please try again." : "Search is temporarily unavailable. You can still submit a typed guess." : "Search is temporarily unavailable. You can still submit a typed guess.";
}
function yi(f) {
  return f === "autoplay_blocked" ? "Autoplay was blocked or the sample failed to auto-start. Press Play sample." : f === "source_unavailable" ? "This sample source failed to load for your browser." : "Could not play sample audio for this round.";
}
function Jh(f) {
  const i = String(f?.name || ""), s = ru(f?.message).toLowerCase();
  return i === "NotAllowedError" || s.includes("notallowederror") || s.includes("user gesture") || s.includes("permission") || s.includes("autoplay") ? "autoplay_blocked" : i === "AbortError" ? "aborted" : i === "NotSupportedError" || s.includes("failed to load") || s.includes("no supported source") || s.includes("not supported") ? "source_unavailable" : "play_failed";
}
function vg() {
  const f = $h(), i = N.useRef(null), s = N.useRef(null), r = N.useRef(""), v = N.useRef(null), U = N.useRef(!1), j = N.useRef(null), X = N.useRef(null), x = N.useRef(null), C = N.useRef(null), k = N.useRef(null), G = N.useRef(null), mt = N.useRef(0.25), jt = N.useRef(null), Pt = N.useRef(/* @__PURE__ */ new Map()), Et = N.useRef(/* @__PURE__ */ new Map()), Ee = N.useRef(/* @__PURE__ */ new Map()), te = N.useRef(/* @__PURE__ */ new Map()), pe = N.useRef(/* @__PURE__ */ new Map()), Ht = N.useRef(/* @__PURE__ */ new Map()), ue = N.useRef(/* @__PURE__ */ new Map()), ie = N.useRef([]), Gt = N.useRef(/* @__PURE__ */ new Set()), F = N.useRef(0), ee = N.useRef([]), Xt = N.useRef(!1), $e = N.useRef(null), oe = N.useRef(!1), Qt = N.useRef(0), [rl, fl] = N.useState(!0), [le, T] = N.useState(""), [H, w] = N.useState(""), [pt, nt] = N.useState(""), [y, M] = N.useState(!1), [B, Y] = N.useState(null), [J, et] = N.useState([]), [ot, de] = N.useState(""), [yt, Oe] = N.useState(hg), [Gn, _a] = N.useState(""), [Xn, je] = N.useState(""), [ol, ou] = N.useState(""), [ct, Qn] = N.useState(null), [Aa, Ta] = N.useState(null), [I, Bl] = N.useState("WAITING"), [du, Vt] = N.useState(null), [jc, hu] = N.useState("00:00"), [at, on] = N.useState(null), [Hc, jl] = N.useState([]), [_e, dn] = N.useState(null), [_l, ce] = N.useState(null), [Ae, se] = N.useState([]), [Vn, Na] = N.useState(""), [mu, Hl] = N.useState(null), [Zn, Fe] = N.useState([]), [dl, hl] = N.useState(!1), [ml, wl] = N.useState(!1), [Oa, He] = N.useState(!1), [Kn, yu] = N.useState(null), [hn, Al] = N.useState(!1), [Tl, gu] = N.useState(0.25), [Ra, Ll] = N.useState(""), [kn, Zt] = N.useState(""), [Ut, Dt] = N.useState(""), [Nl, yl] = N.useState(!1), [Re, vu] = N.useState({ ready: 0, failed: 0, total: 0 }), [za, Ie] = N.useState(""), [Ma, we] = N.useState(!1), [Ol, ze] = N.useState(null), [wt, Kt] = N.useState(null), [Jn, pu] = N.useState(!1), [Rl, Yl] = N.useState("");
  N.useEffect(() => {
    s.current = ct;
  }, [ct]), N.useEffect(() => {
    r.current = Xn;
  }, [Xn]), N.useEffect(() => {
    mt.current = Tl;
  }, [Tl]), N.useEffect(() => {
    if (!dl || I !== "GUESSING") return;
    const d = (E) => {
      E.key === "Escape" && (hl(!1), C.current?.blur?.());
    };
    return window.addEventListener("keydown", d), () => {
      window.removeEventListener("keydown", d);
    };
  }, [I, dl]), N.useEffect(() => {
    I !== "GUESSING" && hl(!1);
  }, [I]);
  const vi = N.useMemo(() => {
    const d = /* @__PURE__ */ new Map();
    for (const E of ct?.players || [])
      d.set(E.userId, E.displayName);
    return d;
  }, [ct]), Ca = N.useCallback((d) => vi.get(d) || `User ${d}`, [vi]), Wn = N.useCallback(() => {
    G.current && (window.clearTimeout(G.current), G.current = null);
  }, []), Le = N.useCallback(() => {
    Wn(), j.current && j.current.pause(), X.current && X.current.pause(), k.current = null, He(!1);
  }, [Wn]), Ye = N.useCallback(() => {
    const d = x.current;
    if (d) {
      d.pause();
      try {
        d.currentTime = 0;
      } catch {
      }
    }
  }, []), Ge = N.useCallback(() => {
    const d = ee.current;
    if (!Array.isArray(d) || d.length === 0) {
      vu({ ready: 0, failed: 0, total: 0 });
      return;
    }
    let E = 0, D = 0;
    for (const q of d) {
      const V = Et.current.get(q);
      V === "ready" ? E += 1 : V === "failed" && (D += 1);
    }
    vu({ ready: E, failed: D, total: d.length });
  }, []), Me = N.useCallback((d = null) => {
    const E = d instanceof Set ? d : null, D = [];
    for (const [q] of ue.current)
      E && E.has(q) || D.push(q);
    for (const q of D) {
      const V = ue.current.get(q);
      if (V) {
        try {
          V.pause?.(), V.removeAttribute("src"), V.load?.();
        } catch {
        }
        V.parentNode && V.parentNode.removeChild(V);
      }
      ue.current.delete(q), Ht.current.delete(q), pe.current.delete(q);
    }
  }, []), ne = N.useCallback(() => {
    Xt.current = !0, Pt.current.clear(), Et.current.clear(), Ee.current.clear(), te.current.clear(), ie.current = [], Gt.current.clear(), F.current = 0, ee.current = [], $e.current = null, oe.current = !1, Me(), yl(!1), vu({ ready: 0, failed: 0, total: 0 }), Ie(""), we(!1);
  }, [Me]), bu = N.useCallback((d, E = "video") => {
    const D = typeof d == "string" ? d.trim() : "";
    if (!D)
      return Promise.reject(new Error("Missing media url"));
    const q = pe.current.get(D);
    if (q === "ready")
      return Promise.resolve(!0);
    const V = Ht.current.get(D);
    if (q === "loading" && V)
      return V;
    pe.current.set(D, "loading");
    const tt = new Promise((bt, re) => {
      if (Xt.current) {
        pe.current.set(D, "failed"), re(new Error("Preload manager was reset"));
        return;
      }
      const st = document.createElement(E === "audio" ? "audio" : "video");
      st.preload = "auto", st.muted = !0, st.playsInline = !0, st.style.position = "absolute", st.style.left = "-10000px", st.style.width = "1px", st.style.height = "1px", st.style.opacity = "0";
      const qt = (vl) => {
        if (be(), vl) {
          pe.current.set(D, "ready"), ue.current.set(D, st), bt(!0);
          return;
        }
        pe.current.set(D, "failed"), ue.current.delete(D), st.parentNode && st.parentNode.removeChild(st), re(new Error("Media preload failed"));
      }, be = () => {
        window.clearTimeout(kt), st.removeEventListener("loadeddata", Xe), st.removeEventListener("canplaythrough", Xe), st.removeEventListener("error", lt);
      }, Xe = () => qt(!0), lt = () => qt(!1), kt = window.setTimeout(() => qt(!1), 12e3);
      st.addEventListener("loadeddata", Xe, { once: !0 }), st.addEventListener("canplaythrough", Xe, { once: !0 }), st.addEventListener("error", lt, { once: !0 }), document.body.appendChild(st), st.src = D, st.load();
    }).finally(() => {
      pe.current.get(D) !== "loading" && Ht.current.delete(D);
    });
    return Ht.current.set(D, tt), tt;
  }, []), pi = N.useCallback(async (d) => {
    const E = Number.parseInt(d, 10);
    if (!Number.isInteger(E) || E <= 0 || Xt.current) return !1;
    const D = Ee.current.get(E);
    if (D) return D;
    if (Et.current.get(E) === "ready") return !0;
    const V = Pt.current.get(E);
    if (!V)
      return Et.current.set(E, "failed"), Ge(), !1;
    const tt = [V.audioUrl, V.videoUrl].filter((re, st, qt) => re && qt.indexOf(re) === st);
    te.current.set(E, new Set(tt)), Et.current.set(E, "loading"), Ge();
    const bt = (async () => {
      if (tt.length === 0)
        return Et.current.set(E, "failed"), !1;
      const st = (await Promise.allSettled(tt.map((qt) => {
        const be = V.audioUrl && qt === V.audioUrl ? "audio" : "video";
        return bu(qt, be);
      }))).some((qt) => qt.status === "fulfilled");
      return Et.current.set(E, st ? "ready" : "failed"), st;
    })().finally(() => {
      Ee.current.delete(E), Ge();
    });
    return Ee.current.set(E, bt), bt;
  }, [bu, Ge]), $n = N.useCallback(() => {
    if (!Xt.current)
      for (; F.current < dg && ie.current.length > 0; ) {
        const d = ie.current.shift();
        Gt.current.delete(d);
        const E = Et.current.get(d);
        E === "ready" || E === "loading" || (F.current += 1, pi(d).catch(() => !1).finally(() => {
          F.current = Math.max(0, F.current - 1), $n();
        }));
      }
  }, [pi]), Gl = N.useCallback((d = []) => {
    for (const E of d) {
      const D = Number.parseInt(E, 10);
      if (!Number.isInteger(D) || D <= 0 || !Pt.current.has(D)) continue;
      const q = Et.current.get(D);
      q === "ready" || q === "loading" || Gt.current.has(D) || (Et.current.set(D, "pending"), ie.current.push(D), Gt.current.add(D));
    }
    Ge(), $n();
  }, [$n, Ge]), Xl = N.useCallback(async (d, E = 2e4) => {
    const D = (Array.isArray(d) ? d : []).map((V) => Number.parseInt(V, 10)).filter((V) => Number.isInteger(V) && V > 0);
    if (D.length === 0) return { ok: !0 };
    const q = Date.now();
    for (; !Xt.current; ) {
      const V = D.filter((bt) => Et.current.get(bt) === "failed");
      if (V.length > 0)
        return { ok: !1, reason: "failed", failedIndexes: V };
      if (D.every((bt) => Et.current.get(bt) === "ready")) return { ok: !0 };
      if (Date.now() - q >= E)
        return { ok: !1, reason: "timeout" };
      await new Promise((bt) => window.setTimeout(bt, 120));
    }
    return { ok: !1, reason: "cancelled" };
  }, []), Da = N.useCallback((d) => !d || d.ok ? "" : d.reason === "failed" ? "Failed to preload required round media. Retry to continue." : d.reason === "timeout" ? "Preloading required media timed out. Retry to continue." : "Preloading was interrupted. Retry to continue.", []), Te = N.useCallback((d = []) => {
    const E = new Set(
      (Array.isArray(d) ? d : []).map((q) => Number.parseInt(q, 10)).filter((q) => Number.isInteger(q) && q > 0)
    ), D = /* @__PURE__ */ new Set();
    for (const [q, V] of te.current)
      if (E.has(q))
        for (const tt of V || []) D.add(tt);
    for (const q of [...te.current.keys()])
      E.has(q) || (te.current.delete(q), Et.current.delete(q), Ee.current.delete(q));
    ie.current = ie.current.filter((q) => E.has(q)), Gt.current = new Set(ie.current), Me(D);
  }, [Me]), Ql = N.useCallback(async (d, E) => {
    const D = zc(d), q = Number.parseInt(E, 10);
    if (!D || !Number.isInteger(q) || oe.current) return;
    const V = i.current;
    if (V?.connected) {
      oe.current = !0;
      try {
        await fn(V, "game:preload_ready", {
          lobbyCode: D,
          sessionId: q
        });
      } catch (tt) {
        oe.current = !1, w(tt.message);
      }
    }
  }, []), Su = N.useCallback(async ({ sessionId: d, lobbyCode: E, manifest: D }) => {
    ne(), Xt.current = !1;
    const q = yg(D);
    Pt.current = new Map(q.map((bt) => [bt.index, bt])), $e.current = Number.parseInt(d, 10) || null, oe.current = !1, Ie(""), we(!1);
    const V = q.slice(0, fg).map((bt) => bt.index);
    if (ee.current = V, Ge(), V.length === 0) {
      await Ql(E, $e.current);
      return;
    }
    yl(!0), Gl(V);
    const tt = await Xl(V);
    if (!Xt.current) {
      if (!tt.ok) {
        Ie(Da(tt)), yl(!0);
        return;
      }
      yl(!1), await Ql(E, $e.current);
    }
  }, [
    Da,
    Gl,
    ne,
    Ql,
    Ge,
    Xl
  ]), Eu = N.useCallback(async () => {
    if (Xt.current || oe.current) return;
    const d = s.current?.code, E = $e.current, D = ee.current;
    if (!d || !Number.isInteger(E) || !Array.isArray(D) || D.length === 0)
      return;
    we(!0), Ie(""), yl(!0), Gl(D);
    const q = await Xl(D);
    if (!Xt.current) {
      if (!q.ok) {
        Ie(Da(q)), we(!1);
        return;
      }
      we(!1), yl(!1), await Ql(d, E);
    }
  }, [Da, Gl, Ql, Xl]), Vl = N.useCallback((d) => {
    const E = Number.parseInt(d, 10);
    if (!Number.isInteger(E) || E <= 0) return;
    const D = [];
    for (let q = 0; q < og; q += 1)
      D.push(E + q);
    Gl(D), Te(D);
  }, [Gl, Te]), _u = N.useCallback((d) => {
    const E = String(d || "0");
    let D = 2166136261;
    for (let q = 0; q < E.length; q += 1)
      D ^= E.charCodeAt(q), D = Math.imul(D, 16777619);
    return (D >>> 0) / 4294967295;
  }, []), Au = N.useCallback(async (d) => {
    if (!d) return null;
    const E = Number(d.duration);
    if (Number.isFinite(E) && E > 0) return E;
    await new Promise((q) => {
      let V = !1;
      const tt = () => {
        V || (V = !0, bt(), q());
      }, bt = () => {
        d.removeEventListener("loadedmetadata", tt), d.removeEventListener("durationchange", tt), d.removeEventListener("loadeddata", tt), d.removeEventListener("error", tt);
      };
      d.addEventListener("loadedmetadata", tt), d.addEventListener("durationchange", tt), d.addEventListener("loadeddata", tt), d.addEventListener("error", tt), window.setTimeout(tt, 2e3);
    });
    const D = Number(d.duration);
    return Number.isFinite(D) && D > 0 ? D : null;
  }, []), Zl = N.useCallback(async (d, E) => {
    const D = jt.current;
    if (Number.isFinite(D) && D >= 0) return D;
    const q = Number.isFinite(E?.sampleStartSec) ? Math.max(0, E.sampleStartSec) : 0;
    if (q > 0)
      return jt.current = q, q;
    const V = Number.isFinite(E?.sampleDurationSec) ? Math.max(1, E.sampleDurationSec) : 10, tt = await Au(d);
    if (!Number.isFinite(tt) || tt <= 0)
      return jt.current = q, q;
    const bt = Math.floor(tt - V);
    if (bt <= 0)
      return jt.current = 0, 0;
    const re = `${at?.roundId || 0}:${E?.animeId || 0}:${V}`, st = _u(re), qt = Math.floor(st * (bt + 1));
    return jt.current = qt, qt;
  }, [at?.roundId, _u, Au]), Fn = N.useCallback(async () => {
    const d = x.current;
    if (!d) return !1;
    d.volume = Math.max(0, Math.min(1, Number(mt.current))), d.muted = !1;
    try {
      return await d.play(), Al(!1), Dt(""), !0;
    } catch (E) {
      const D = Jh(E);
      return D === "autoplay_blocked" ? (Al(!0), !1) : (D !== "aborted" && Dt('Could not play solution video in this browser. Use "Open video source".'), Al(!1), !1);
    }
  }, []), mn = N.useCallback(async ({ isAutoplay: d = !1 } = {}) => {
    const E = j.current, D = X.current, q = at?.sample;
    if (I !== "GUESSING" || !E && !D || !q?.audioUrl && !q?.videoUrl) return !1;
    Wn(), Le(), Zt("");
    const V = Number.isFinite(q.sampleDurationSec) ? Math.max(1, q.sampleDurationSec) : 10, tt = Math.max(0, Math.min(1, Number(mt.current))), bt = async (be, Xe) => {
      if (!be) return { ok: !1, reason: "source_unavailable" };
      be.volume = tt, be.muted = !1;
      const lt = await Zl(be, q);
      try {
        be.currentTime = lt;
      } catch {
      }
      try {
        return await be.play(), k.current = be, yu(Xe), wl(!1), Zt(""), He(!0), G.current = window.setTimeout(() => {
          const kt = k.current;
          kt && (kt.pause(), He(!1), k.current = null);
        }, V * 1e3), { ok: !0, reason: null };
      } catch (kt) {
        return { ok: !1, reason: Jh(kt) };
      }
    }, re = q?.audioUrl ? await bt(E, "audio") : { ok: !1, reason: "source_unavailable" };
    if (re.ok) return !0;
    const st = q?.videoUrl ? await bt(D, "video") : { ok: !1, reason: "source_unavailable" };
    if (st.ok) return !0;
    const qt = [re.reason, st.reason].filter(Boolean);
    return qt.includes("autoplay_blocked") ? (wl(!0), Zt(yi("autoplay_blocked")), !1) : (wl(!1), qt.includes("source_unavailable") ? (Zt(yi("source_unavailable")), !1) : ((!qt.includes("aborted") || !d) && Zt(yi("play_failed")), !1));
  }, [Wn, I, Zl, at, Le]), Kl = N.useCallback(() => {
    ne(), Le(), Ye(), Ta(null), Bl("WAITING"), Vt(null), on(null), jl([]), dn(null), ce(null), se([]), Na(""), Hl(null), Fe([]), Ll(""), Zt(""), Dt(""), wl(!1), yu(null), Al(!1), ze(null);
  }, [ne, Le, Ye]), Ua = N.useCallback((d) => {
    const E = d || {}, D = E.phase || "WAITING";
    if (Bl(D), on(E.round || null), se(Array.isArray(E.readyUserIds) ? E.readyUserIds : []), Vt(E.endsAt || E.solution?.endsAt || null), E?.round?.isSuddenDeath ? ze((q) => ({
      roundIndex: Number.parseInt(E?.round?.index, 10) || q?.roundIndex || null,
      tiedUserIds: Array.isArray(q?.tiedUserIds) ? q.tiedUserIds : []
    })) : ze(null), D === "ANSWERS_REVEAL") {
      jl(Array.isArray(E.answers) ? E.answers : []), dn(null);
      return;
    }
    if (D === "SOLUTION_REVEAL") {
      jl(Array.isArray(E.answers) ? E.answers : []), dn(E.solution || null);
      return;
    }
    D === "WAITING" && (jl([]), dn(null));
  }, []), In = N.useCallback(async (d) => {
    const E = i.current;
    if (!(!E?.connected || !d))
      try {
        const D = await fn(E, "round:sync", { lobbyCode: d });
        Ua(D?.state || {});
      } catch (D) {
        w(D.message);
      }
  }, [Ua]), Pn = N.useCallback(async (d = "") => {
    const E = String(d || "").trim(), D = new URLSearchParams();
    E && D.set("q", E);
    const q = await Sa(`/game/lobbies${D.toString() ? `?${D}` : ""}`);
    et(Array.isArray(q.lobbies) ? q.lobbies : []);
  }, []), kl = N.useCallback(async (d, E, D) => {
    const q = i.current;
    if (!q) return;
    const V = {
      lobbyCode: d,
      ...E ? { inviteToken: E } : {},
      ...D ? { displayName: D } : {}
    };
    if (!q.connected) {
      v.current = V, q.connect();
      return;
    }
    await fn(q, "lobby:join", V), await In(d);
  }, [In]), Ce = N.useCallback(async (d, E = "") => {
    const D = zc(d);
    if (!D) return w("Lobby code is required");
    T("join"), w(""), nt("");
    try {
      const q = {};
      ol.trim() && (q.displayName = ol.trim()), E && (q.inviteToken = E);
      const V = await Sa(`/game/lobbies/${D}/join`, {
        method: "POST",
        body: JSON.stringify(q)
      });
      Qn(V.lobby), je(E || ""), Kl(), Mc(D, E || ""), await kl(D, E || "", ol.trim()), nt(`Joined lobby ${D}`);
    } catch (q) {
      w(q.message);
    } finally {
      T("");
    }
  }, [Kl, ol, kl]), Tu = N.useCallback(async () => {
    T("create"), w(""), nt("");
    try {
      const d = await Sa("/game/lobbies", {
        method: "POST",
        body: JSON.stringify(yt)
      });
      Qn(d.lobby), Kl(), Mc(d.lobby.code, ""), await kl(d.lobby.code, "", ol.trim()), nt(`Created lobby ${d.lobby.code}`);
    } catch (d) {
      w(d.message);
    } finally {
      T("");
    }
  }, [Kl, yt, ol, kl]), Nu = N.useCallback(async () => {
    if (ct?.code) {
      T("leave"), w("");
      try {
        i.current?.connected && await fn(i.current, "lobby:leave", { lobbyCode: ct.code });
      } catch (d) {
        w(d.message);
      } finally {
        Qn(null), je(""), Mc("", ""), Kl(), T(""), Pn(ot).catch(() => {
        });
      }
    }
  }, [Kl, Pn, ct, ot]), yn = N.useCallback(async () => {
    if (!(!ct?.code || !i.current)) {
      T("start"), w("");
      try {
        await fn(i.current, "game:start", { lobbyCode: ct.code }, { timeoutMs: 12e4 });
      } catch (d) {
        w(kh(d.message));
      } finally {
        T("");
      }
    }
  }, [ct]), gn = N.useCallback(async () => {
    if (!(!ct?.code || !at?.roundId || !i.current)) {
      T("guess"), w("");
      try {
        await fn(i.current, "round:submit_guess", {
          lobbyCode: ct.code,
          roundId: at.roundId,
          guessText: Vn.trim(),
          guessAnimeId: Number.isInteger(mu) ? mu : null
        }), nt("Guess saved");
      } catch (d) {
        w(d.message);
      } finally {
        T("");
      }
    }
  }, [mu, Vn, ct, at]), bi = N.useCallback(async () => {
    if (!(!ct?.code || !i.current || !B)) {
      T("ready"), w("");
      try {
        const d = Ae.includes(B.id);
        await fn(i.current, "round:set_ready", { lobbyCode: ct.code, ready: !d });
      } catch (d) {
        w(d.message);
      } finally {
        T("");
      }
    }
  }, [ct, Ae, B]), Ou = N.useCallback(async () => {
    if (ct?.code) {
      T("invite"), w(""), nt("");
      try {
        const d = await Sa(`/game/lobbies/${ct.code}/invite`);
        d.inviteToken && (je(d.inviteToken), Mc(ct.code, d.inviteToken)), navigator.clipboard?.writeText ? (await navigator.clipboard.writeText(d.inviteUrl), nt("Invite link copied")) : nt(d.inviteUrl);
      } catch (d) {
        w(d.message);
      } finally {
        T("");
      }
    }
  }, [ct]);
  N.useEffect(() => {
    if (!f) return Yh();
    const d = ug(f);
    i.current = d;
    const E = async () => {
      M(!0), w("");
      try {
        v.current ? (await fn(d, "lobby:join", v.current), await In(v.current.lobbyCode), v.current = null) : s.current?.code && (await fn(d, "lobby:join", {
          lobbyCode: s.current.code,
          ...r.current ? { inviteToken: r.current } : {}
        }), await In(s.current.code));
      } catch (lt) {
        w(lt.message);
      }
    }, D = () => M(!1), q = (lt) => {
      const kt = String(lt?.code || ""), vl = ru(lt?.message);
      if (kt === "game_start_failed") {
        w(kh(vl));
        return;
      }
      w(vl || "Realtime error");
    }, V = ({ lobby: lt }) => lt && Qn(lt), tt = ({ sessionId: lt, config: kt, preloadManifest: vl }) => {
      Ta({ sessionId: lt, ...kt || {} }), ce(null), Bl("PENDING"), ze(null), s.current?.code && Su({
        sessionId: lt,
        lobbyCode: s.current.code,
        manifest: vl
      }).catch(() => {
      });
    }, bt = (lt) => {
      Le(), Ye(), yl(!1), Ie(""), we(!1), Bl("GUESSING"), Vt(lt?.endsAt || null), on(lt || null), jl([]), dn(null), ce(null), se([]), Na(""), Hl(null), Fe([]), Ll(""), Zt(""), Dt(""), wl(!1), yu(null), Al(!1), jt.current = null, lt?.isSuddenDeath ? ze((kt) => ({
        roundIndex: Number.parseInt(lt?.index, 10) || kt?.roundIndex || null,
        tiedUserIds: Array.isArray(kt?.tiedUserIds) ? kt.tiedUserIds : []
      })) : ze(null), Vl(lt?.index);
    }, re = (lt) => {
      Bl("ANSWERS_REVEAL"), Vt(lt?.endsAt || null), jl(Array.isArray(lt?.answers) ? lt.answers : []);
    }, st = (lt) => {
      Le(), Bl("SOLUTION_REVEAL"), Vt(lt?.endsAt || null), dn(lt || null), Zt(""), Dt(""), Al(!1);
    }, qt = (lt) => {
      ne(), Le(), Ye(), Bl("FINISHED"), Vt(null), Zt(""), Dt(""), ce(lt || null), ze(null);
    }, be = (lt) => {
      const kt = Array.isArray(lt?.tiedUserIds) ? lt.tiedUserIds.filter((zu) => Number.isInteger(zu)) : [], vl = Number.parseInt(lt?.roundIndex, 10);
      ze({
        roundIndex: Number.isInteger(vl) ? vl : null,
        tiedUserIds: kt
      });
      const _i = kt.map((zu) => (s.current?.players || []).find((Lc) => Lc.userId === zu)?.displayName || null).filter(Boolean);
      _i.length > 0 ? nt(`Sudden Death started: ${_i.join(", ")} are tied for first.`) : nt("Sudden Death started: tie for first place.");
    }, Xe = (lt) => {
      se(Array.isArray(lt?.readyUserIds) ? lt.readyUserIds : []);
    };
    return d.on("connect", E), d.on("disconnect", D), d.on("error", q), d.on("lobby:state", V), d.on("game:started", tt), d.on("round:started", bt), d.on("round:answers_reveal", re), d.on("round:solution", st), d.on("game:finished", qt), d.on("game:sudden_death", be), d.on("round:ready_state", Xe), d.connect(), () => {
      d.off("connect", E), d.off("disconnect", D), d.off("error", q), d.off("lobby:state", V), d.off("game:started", tt), d.off("round:started", bt), d.off("round:answers_reveal", re), d.off("round:solution", st), d.off("game:finished", qt), d.off("game:sudden_death", be), d.off("round:ready_state", Xe), ig();
    };
  }, [Su, Vl, In, ne, Le, Ye, f]);
  const ta = N.useCallback(async ({ forceRefresh: d = !1, silent: E = !1 } = {}) => {
    E || pu(!0);
    try {
      const q = await Sa(d ? "/game/media-source-status?refresh=1" : "/game/media-source-status");
      Kt(q?.status || null), Yl("");
    } catch (D) {
      Yl(ru(D?.message) || "Could not fetch media source status");
    } finally {
      E || pu(!1);
    }
  }, []);
  N.useEffect(() => {
    if (!f) return;
    let d = !0;
    return (async () => {
      try {
        const E = await Sa("/auth/me");
        if (!d) return;
        Y(E), await Pn("");
      } catch {
        Yh();
        return;
      } finally {
        d && fl(!1);
      }
    })(), () => {
      d = !1;
    };
  }, [Pn, f]), N.useEffect(() => {
    if (!f) return;
    let d = !0;
    ta({ forceRefresh: !0 }).catch(() => {
    });
    const E = window.setInterval(() => {
      d && ta({ silent: !0 }).catch(() => {
      });
    }, 15e3);
    return () => {
      d = !1, window.clearInterval(E);
    };
  }, [ta, f]), N.useEffect(() => {
    if (rl || !B || U.current) return;
    U.current = !0;
    const d = new URLSearchParams(window.location.search), E = zc(d.get("lobby")), D = d.get("inviteToken") || "";
    E && (_a(E), je(D), Ce(E, D).catch(() => {
    }));
  }, [Ce, rl, B]), N.useEffect(() => {
    if (!du) return hu("00:00");
    const d = () => hu(mg(new Date(du).getTime() - Date.now()));
    d();
    const E = window.setInterval(d, 250);
    return () => window.clearInterval(E);
  }, [du]), N.useEffect(() => {
    if (I !== "GUESSING") {
      Qt.current += 1, Fe([]), Ll("");
      return;
    }
    const d = Vn.trim();
    if (d.length < 2) {
      Qt.current += 1, Fe([]), Ll("");
      return;
    }
    const E = ++Qt.current, D = window.setTimeout(async () => {
      try {
        const q = await Sa("/game/search", {
          method: "POST",
          body: JSON.stringify({ query: d, limit: 8 })
        });
        if (Qt.current !== E) return;
        Fe(Array.isArray(q.results) ? q.results : []), Ll("");
      } catch (q) {
        if (Qt.current !== E) return;
        Fe([]), Ll(gg(q?.message));
      }
    }, 120);
    return () => window.clearTimeout(D);
  }, [Vn, I]), N.useEffect(() => {
    if (!!!(at?.sample?.audioUrl || at?.sample?.videoUrl)) {
      wl(!1), Le();
      return;
    }
    if (I !== "GUESSING") {
      (I === "SOLUTION_REVEAL" || I === "WAITING" || I === "FINISHED" || I === "PENDING") && (wl(!1), Le());
      return;
    }
    let E = !1;
    const D = window.setTimeout(() => {
      E || mn({ isAutoplay: !0 }).catch(() => {
      });
    }, 0);
    return () => {
      E = !0, window.clearTimeout(D);
    };
  }, [I, mn, at?.roundId, at?.sample?.audioUrl, at?.sample?.videoUrl, Le]), N.useEffect(() => {
    jt.current = null;
  }, [at?.roundId]), N.useEffect(() => {
    if (!ml || I !== "GUESSING") return;
    const d = () => {
      mn({ isAutoplay: !1 }).catch(() => {
      });
    };
    return window.addEventListener("pointerdown", d), window.addEventListener("keydown", d), () => {
      window.removeEventListener("pointerdown", d), window.removeEventListener("keydown", d);
    };
  }, [I, mn, ml]), N.useEffect(() => {
    if (I !== "SOLUTION_REVEAL" || !_e?.video) {
      Al(!1), Dt(""), Ye();
      return;
    }
    let d = !1;
    const E = window.setTimeout(() => {
      d || Fn().catch(() => {
      });
    }, 0);
    return () => {
      d = !0, window.clearTimeout(E), Ye();
    };
  }, [I, Fn, _e?.video, Ye]), N.useEffect(() => {
    if (!hn || I !== "SOLUTION_REVEAL") return;
    const d = () => {
      Fn().catch(() => {
      });
    };
    return window.addEventListener("pointerdown", d), window.addEventListener("keydown", d), () => {
      window.removeEventListener("pointerdown", d), window.removeEventListener("keydown", d);
    };
  }, [I, Fn, hn]), N.useEffect(() => {
    const d = Math.max(0, Math.min(1, Number(Tl)));
    j.current && (j.current.volume = d), X.current && (X.current.volume = d), x.current && (x.current.volume = d);
  }, [Tl, at?.roundId, _e?.video]);
  const ea = N.useMemo(() => !!(ct && B && ct.host?.id === B.id), [ct, B]), gl = N.useMemo(() => !!(B && Ae.includes(B.id)), [Ae, B]), la = N.useMemo(() => !!(at?.sample?.audioUrl || at?.sample?.videoUrl), [at]), na = N.useMemo(() => !!(at && la && (I === "GUESSING" || I === "ANSWERS_REVEAL")), [la, I, at]), Pe = N.useMemo(() => {
    const d = Number.parseInt(at?.sample?.sampleDurationSec, 10);
    return !Number.isFinite(d) || d <= 0 ? "Sample ready" : `${d}s preview`;
  }, [at]), Ru = N.useMemo(() => `${Math.round(Tl * 100)}%`, [Tl]), aa = N.useMemo(() => {
    if (!wt)
      return { label: Jn ? "Checking" : "Unknown", tone: "neutral" };
    if (!wt.ok)
      return { label: "Down", tone: "down" };
    const d = Number(wt.latencyMs);
    return Number.isFinite(d) && d >= 2500 ? { label: "Slow", tone: "warn" } : { label: "Healthy", tone: "ok" };
  }, [Jn, wt]), Si = N.useMemo(() => {
    const d = Number(wt?.latencyMs);
    return Number.isFinite(d) ? `${Math.round(d)} ms` : "n/a";
  }, [wt]), qa = N.useMemo(() => {
    if (!wt?.checkedAt) return "n/a";
    const d = new Date(wt.checkedAt);
    return Number.isNaN(d.getTime()) ? "n/a" : d.toLocaleTimeString();
  }, [wt]), vn = N.useMemo(() => Nl ? { label: "Busy", tone: "warn", detail: Re.total > 0 ? `Preloading required rounds (${Re.ready}/${Re.total})` : "Preloading required rounds" } : Re.failed > 0 ? { label: "Degraded", tone: "warn", detail: `Preload failures detected (${Re.failed})` } : kn || Ut ? { label: "Degraded", tone: "warn", detail: "Client playback errors detected in this session" } : ml || hn ? { label: "Blocked", tone: "warn", detail: "Browser autoplay restrictions require user interaction" } : Oa ? { label: "Active", tone: "ok", detail: "Sample playback is running" } : { label: "Idle", tone: "neutral", detail: `Phase ${I}` }, [
    kn,
    I,
    Nl,
    Re.failed,
    Re.ready,
    Re.total,
    ml,
    Oa,
    Ut,
    hn
  ]), Ei = N.useCallback((d) => {
    const E = Math.max(0, Math.min(1, Number.parseFloat(d.target.value)));
    gu(Number.isFinite(E) ? E : 0.8);
  }, []), he = N.useMemo(() => I === "FINISHED" ? (_l?.finalScores || []).slice().sort(Kh) : I === "SOLUTION_REVEAL" ? (_e?.scores || []).slice().sort(Kh) : [], [_l, I, _e]), zl = N.useMemo(() => {
    if (!at?.isSuddenDeath || I === "FINISHED") return "";
    const E = (Array.isArray(Ol?.tiedUserIds) ? Ol.tiedUserIds : []).map((D) => Ca(D)).filter(Boolean);
    return E.length > 0 ? `Sudden Death: tie for first between ${E.join(", ")}.` : "Sudden Death: tie for first place. Extra rounds continue until the tie is broken.";
  }, [I, Ca, at?.isSuddenDeath, Ol?.tiedUserIds]);
  return rl ? /* @__PURE__ */ A.jsx("section", { className: "gmq-shell", children: "Loading game..." }) : /* @__PURE__ */ A.jsxs("section", { className: "gmq-shell", children: [
    /* @__PURE__ */ A.jsxs("header", { className: "gmq-header", children: [
      /* @__PURE__ */ A.jsxs("div", { children: [
        /* @__PURE__ */ A.jsx("h1", { children: "Anime Music Quiz" }),
        /* @__PURE__ */ A.jsxs("p", { className: "gmq-muted", children: [
          "Socket: ",
          y ? "Connected" : "Disconnected",
          ct ? ` | Lobby ${ct.code}` : "",
          Aa?.sessionId ? ` | Session ${Aa.sessionId}` : ""
        ] })
      ] }),
      ct ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-actions", children: [
        /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: Ou, disabled: le === "invite", children: "Copy Invite" }),
        /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-danger", onClick: Nu, disabled: le === "leave", children: "Leave" })
      ] }) : null
    ] }),
    H ? /* @__PURE__ */ A.jsx("div", { className: "gmq-alert gmq-alert-error", children: H }) : null,
    pt ? /* @__PURE__ */ A.jsx("div", { className: "gmq-alert gmq-alert-info", children: pt }) : null,
    ct ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-grid gmq-grid-match", children: [
      /* @__PURE__ */ A.jsxs("article", { className: "gmq-card gmq-card-lobby", children: [
        /* @__PURE__ */ A.jsxs("h2", { children: [
          "Lobby ",
          ct.code
        ] }),
        /* @__PURE__ */ A.jsxs("p", { className: "gmq-muted", children: [
          ct.name || "Untitled",
          " | ",
          ct.playerCount,
          "/",
          ct.maxPlayers,
          " players"
        ] }),
        /* @__PURE__ */ A.jsx("ul", { className: "gmq-player-list", children: (ct.players || []).map((d) => /* @__PURE__ */ A.jsxs("li", { children: [
          /* @__PURE__ */ A.jsxs("span", { children: [
            d.displayName,
            d.userId === ct.host?.id ? " (Host)" : "",
            d.isConnected ? "" : " (offline)"
          ] }),
          I === "GUESSING" ? /* @__PURE__ */ A.jsx("strong", { children: Ae.includes(d.userId) ? "Ready" : "Thinking" }) : null
        ] }, d.userId)) }),
        ct.status === "WAITING" ? ea ? /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: yn, disabled: le === "start", children: "Start Game" }) : /* @__PURE__ */ A.jsx("p", { className: "gmq-muted", children: "Waiting for host to start." }) : null
      ] }),
      /* @__PURE__ */ A.jsxs("article", { className: "gmq-card gmq-card-media", children: [
        /* @__PURE__ */ A.jsx("h2", { children: "Media Status" }),
        /* @__PURE__ */ A.jsxs("div", { className: "gmq-status-row", children: [
          /* @__PURE__ */ A.jsx("span", { className: `gmq-status-dot gmq-status-dot-${aa.tone}` }),
          /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
            /* @__PURE__ */ A.jsxs("strong", { children: [
              "Source API: ",
              aa.label
            ] }),
            /* @__PURE__ */ A.jsxs("p", { className: "gmq-muted", children: [
              wt?.provider || "AnimeThemes",
              " | Latency ",
              Si
            ] }),
            /* @__PURE__ */ A.jsxs("p", { className: "gmq-muted", children: [
              "Last check: ",
              qa,
              wt?.cached ? " (cached)" : ""
            ] }),
            wt?.ok === !1 && wt?.error ? /* @__PURE__ */ A.jsx("p", { className: "gmq-muted gmq-muted-warning", children: wt.error }) : null,
            Rl ? /* @__PURE__ */ A.jsx("p", { className: "gmq-muted gmq-muted-warning", children: Rl }) : null
          ] })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "gmq-status-row", children: [
          /* @__PURE__ */ A.jsx("span", { className: `gmq-status-dot gmq-status-dot-${vn.tone}` }),
          /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
            /* @__PURE__ */ A.jsxs("strong", { children: [
              "Local Client: ",
              vn.label
            ] }),
            /* @__PURE__ */ A.jsx("p", { className: "gmq-muted", children: vn.detail })
          ] })
        ] }),
        /* @__PURE__ */ A.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-secondary",
            onClick: () => ta({ forceRefresh: !0 }).catch(() => {
            }),
            disabled: Jn,
            children: Jn ? "Checking..." : "Refresh Source Status"
          }
        )
      ] }),
      /* @__PURE__ */ A.jsxs("article", { className: "gmq-card gmq-card-round", children: [
        /* @__PURE__ */ A.jsx("h2", { children: "Round" }),
        /* @__PURE__ */ A.jsxs("p", { className: "gmq-round-phase", children: [
          I,
          " | ",
          jc
        ] }),
        zl ? /* @__PURE__ */ A.jsx("div", { className: "gmq-alert gmq-alert-warning", children: zl }) : null,
        I === "PENDING" && Nl ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ A.jsx("p", { children: "Preparing media cache before round 1..." }),
          /* @__PURE__ */ A.jsxs("p", { className: "gmq-muted", children: [
            "Ready ",
            Re.ready,
            "/",
            Re.total,
            Re.failed > 0 ? ` | Failed ${Re.failed}` : ""
          ] }),
          za ? /* @__PURE__ */ A.jsx("p", { className: "gmq-muted gmq-muted-warning", children: za }) : null,
          za ? /* @__PURE__ */ A.jsx(
            "button",
            {
              type: "button",
              className: "gmq-btn gmq-btn-secondary",
              onClick: () => Eu().catch(() => {
              }),
              disabled: Ma,
              children: Ma ? "Retrying..." : "Retry preload"
            }
          ) : null
        ] }) : null,
        na ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-sample-player", children: [
          at?.sample?.audioUrl ? /* @__PURE__ */ A.jsx(
            "audio",
            {
              ref: j,
              src: at.sample.audioUrl,
              preload: "auto",
              onPlay: () => He(!0),
              onPause: () => He(!1),
              onEnded: () => He(!1),
              onError: () => Zt(yi("source_unavailable"))
            },
            `audio-${at.roundId}`
          ) : null,
          at?.sample?.videoUrl ? /* @__PURE__ */ A.jsx(
            "video",
            {
              ref: X,
              src: at.sample.videoUrl,
              preload: "auto",
              playsInline: !0,
              onPlay: () => He(!0),
              onPause: () => He(!1),
              onEnded: () => He(!1),
              onError: () => Zt(yi("source_unavailable"))
            },
            `video-${at.roundId}`
          ) : null,
          /* @__PURE__ */ A.jsxs("label", { className: "gmq-volume-row", children: [
            /* @__PURE__ */ A.jsxs("span", { children: [
              "Volume ",
              Ru
            ] }),
            /* @__PURE__ */ A.jsx(
              "input",
              {
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Tl,
                onChange: Ei
              }
            )
          ] }),
          ml ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
            /* @__PURE__ */ A.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
            /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => mn({ isAutoplay: !1 }).catch(() => {
            }), children: "Play sample" })
          ] }) : Kn === "video" && !at?.sample?.audioUrl ? /* @__PURE__ */ A.jsxs("p", { className: "gmq-muted", children: [
            "Using video source audio. ",
            Pe
          ] }) : Oa ? /* @__PURE__ */ A.jsxs("p", { className: "gmq-muted", children: [
            "Sample is playing. ",
            Pe
          ] }) : /* @__PURE__ */ A.jsx("p", { className: "gmq-muted", children: Pe }),
          kn ? /* @__PURE__ */ A.jsx("p", { className: "gmq-muted gmq-muted-warning", children: kn }) : null
        ] }) : null,
        I === "GUESSING" && at ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ A.jsxs("p", { children: [
            "Round ",
            at.index,
            "/",
            at.totalRounds
          ] }),
          la ? null : /* @__PURE__ */ A.jsx("p", { className: "gmq-muted", children: "Sample audio is unavailable for this round." }),
          /* @__PURE__ */ A.jsxs("div", { className: "gmq-search-box", children: [
            /* @__PURE__ */ A.jsx(
              "input",
              {
                ref: C,
                value: Vn,
                onChange: (d) => {
                  Na(d.target.value), Hl(null), hl(!0);
                },
                onFocus: () => hl(!0),
                onBlur: () => {
                  window.setTimeout(() => {
                    hl(!1);
                  }, 100);
                },
                placeholder: "Type anime name"
              }
            ),
            dl && Zn.length > 0 ? /* @__PURE__ */ A.jsx("ul", { className: "gmq-search-results", children: Zn.map((d) => /* @__PURE__ */ A.jsx("li", { children: /* @__PURE__ */ A.jsx(
              "button",
              {
                type: "button",
                onMouseDown: (E) => E.preventDefault(),
                onClick: () => {
                  Na(d.title || ""), Hl(Number.isInteger(d.id) ? d.id : null), Fe([]), hl(!1);
                },
                children: d.title
              }
            ) }, `${d.id}-${d.title}`)) }) : null
          ] }),
          Ra ? /* @__PURE__ */ A.jsx("p", { className: "gmq-muted gmq-muted-warning", children: Ra }) : null,
          /* @__PURE__ */ A.jsxs("div", { className: "gmq-actions", children: [
            /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: gn, disabled: le === "guess", children: "Submit Guess" }),
            /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: bi, disabled: le === "ready", children: gl ? "Unskip" : "Skip / Ready" })
          ] }),
          /* @__PURE__ */ A.jsxs("p", { className: "gmq-muted", children: [
            Ae.length,
            " ready"
          ] })
        ] }) : null,
        I === "ANSWERS_REVEAL" ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Answers" }),
          /* @__PURE__ */ A.jsx("ul", { className: "gmq-answer-list", children: Hc.map((d) => /* @__PURE__ */ A.jsxs("li", { children: [
            /* @__PURE__ */ A.jsx("span", { children: Ca(d.userId) }),
            /* @__PURE__ */ A.jsx("span", { children: d.guessText || "(blank)" }),
            /* @__PURE__ */ A.jsx("strong", { children: d.isCorrect ? "Correct" : "Wrong" })
          ] }, `${d.userId}-${d.guessText || "blank"}`)) })
        ] }) : null,
        I === "SOLUTION_REVEAL" && _e ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Solution" }),
          /* @__PURE__ */ A.jsxs("p", { children: [
            _e.correctAnime?.animeTitle,
            " (",
            _e.correctAnime?.themeType,
            ")"
          ] }),
          /* @__PURE__ */ A.jsx("p", { className: "gmq-muted", children: _e.correctAnime?.themeTitle || "" }),
          _e.video ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-solution-video-wrap", children: [
            /* @__PURE__ */ A.jsx(
              "video",
              {
                ref: x,
                className: "gmq-solution-video",
                src: _e.video,
                preload: "auto",
                controls: !0,
                playsInline: !0,
                onError: () => Dt('Could not play solution video in this browser. Use "Open video source".')
              },
              `solution-${at?.roundId || _e.correctAnime?.animeId || "video"}`
            ),
            hn ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
              /* @__PURE__ */ A.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
              /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Fn().catch(() => {
              }), children: "Play solution video" })
            ] }) : null,
            Ut ? /* @__PURE__ */ A.jsx("p", { className: "gmq-muted gmq-muted-warning", children: Ut }) : null,
            /* @__PURE__ */ A.jsx("a", { href: _e.video, target: "_blank", rel: "noreferrer", children: "Open video source" })
          ] }) : /* @__PURE__ */ A.jsx("p", { className: "gmq-muted", children: "Solution video is unavailable for this round." })
        ] }) : null,
        I === "FINISHED" && _l ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Final Result" }),
          /* @__PURE__ */ A.jsxs("p", { children: [
            "Winner: ",
            _l.winner?.displayName || "Tie"
          ] })
        ] }) : null,
        he.length ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Scoreboard" }),
          /* @__PURE__ */ A.jsx("ul", { className: "gmq-score-list", children: he.map((d) => /* @__PURE__ */ A.jsxs("li", { className: "gmq-score-row", children: [
            /* @__PURE__ */ A.jsx("span", { children: d.displayName }),
            /* @__PURE__ */ A.jsx("strong", { children: d.score })
          ] }, d.userId)) })
        ] }) : null
      ] })
    ] }) : /* @__PURE__ */ A.jsxs("div", { className: "gmq-grid", children: [
      /* @__PURE__ */ A.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ A.jsx("h2", { children: "Create Lobby" }),
        /* @__PURE__ */ A.jsx("label", { children: "Name" }),
        /* @__PURE__ */ A.jsx("input", { value: yt.name, onChange: (d) => Oe((E) => ({ ...E, name: d.target.value })), placeholder: "Optional lobby name" }),
        /* @__PURE__ */ A.jsxs("label", { className: "gmq-checkbox", children: [
          /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: yt.isPrivate, onChange: (d) => Oe((E) => ({ ...E, isPrivate: d.target.checked })) }),
          " Private lobby"
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "gmq-inline", children: [
          /* @__PURE__ */ A.jsx("input", { type: "number", min: "1", max: "50", value: yt.roundCount, onChange: (d) => Oe((E) => ({ ...E, roundCount: Number(d.target.value || 10) })) }),
          /* @__PURE__ */ A.jsx("input", { type: "number", min: "5", max: "120", value: yt.guessSeconds, onChange: (d) => Oe((E) => ({ ...E, guessSeconds: Number(d.target.value || 20) })) }),
          /* @__PURE__ */ A.jsx("input", { type: "number", min: "3", max: "60", value: yt.sampleSeconds, onChange: (d) => Oe((E) => ({ ...E, sampleSeconds: Number(d.target.value || 10) })) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "gmq-inline", children: [
          /* @__PURE__ */ A.jsx("select", { value: yt.sourceMode, onChange: (d) => Oe((E) => ({ ...E, sourceMode: d.target.value })), children: cg.map((d) => /* @__PURE__ */ A.jsx("option", { value: d, children: d }, d)) }),
          /* @__PURE__ */ A.jsx("select", { value: yt.selectionMode, onChange: (d) => Oe((E) => ({ ...E, selectionMode: d.target.value })), children: sg.map((d) => /* @__PURE__ */ A.jsx("option", { value: d, children: d }, d)) }),
          /* @__PURE__ */ A.jsx("select", { value: yt.themeMode, onChange: (d) => Oe((E) => ({ ...E, themeMode: d.target.value })), children: rg.map((d) => /* @__PURE__ */ A.jsx("option", { value: d, children: d }, d)) })
        ] }),
        /* @__PURE__ */ A.jsx("label", { children: "Display Name" }),
        /* @__PURE__ */ A.jsx("input", { value: ol, onChange: (d) => ou(d.target.value), placeholder: B?.nickname || B?.username || "Player" }),
        /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: Tu, disabled: le === "create", children: "Create Lobby" })
      ] }),
      /* @__PURE__ */ A.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ A.jsx("h2", { children: "Join Lobby" }),
        /* @__PURE__ */ A.jsx("label", { children: "Lobby Code" }),
        /* @__PURE__ */ A.jsx("input", { value: Gn, onChange: (d) => _a(zc(d.target.value)), placeholder: "ABC123" }),
        /* @__PURE__ */ A.jsx("label", { children: "Invite Token (private lobby)" }),
        /* @__PURE__ */ A.jsx("input", { value: Xn, onChange: (d) => je(d.target.value.trim()), placeholder: "Paste invite token" }),
        /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: () => Ce(Gn, Xn), disabled: le === "join", children: "Join Lobby" })
      ] }),
      /* @__PURE__ */ A.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ A.jsx("h2", { children: "Joinable Lobbies" }),
        /* @__PURE__ */ A.jsxs("div", { className: "gmq-inline", children: [
          /* @__PURE__ */ A.jsx("input", { value: ot, onChange: (d) => de(d.target.value), placeholder: "Search by code/name" }),
          /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Pn(ot), children: "Refresh" })
        ] }),
        /* @__PURE__ */ A.jsx("ul", { className: "gmq-lobby-list", children: J.map((d) => /* @__PURE__ */ A.jsxs("li", { className: "gmq-lobby-item", children: [
          /* @__PURE__ */ A.jsxs("div", { children: [
            /* @__PURE__ */ A.jsx("div", { className: "gmq-lobby-title", children: d.name || d.code }),
            /* @__PURE__ */ A.jsxs("div", { className: "gmq-muted", children: [
              d.code,
              " | ",
              d.playerCount,
              "/",
              d.maxPlayers
            ] })
          ] }),
          /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Ce(d.code, ""), children: "Join" })
        ] }, d.code)) })
      ] })
    ] })
  ] });
}
const Wh = document.getElementById("game-root");
Wh && o0.createRoot(Wh).render(/* @__PURE__ */ A.jsx(vg, {}));
