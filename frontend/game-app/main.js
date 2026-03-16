var Zr = { exports: {} }, sA = {};
var pm;
function hy() {
  if (pm) return sA;
  pm = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function A(c, b, z) {
    var _ = null;
    if (z !== void 0 && (_ = "" + z), b.key !== void 0 && (_ = "" + b.key), "key" in b) {
      z = {};
      for (var X in b)
        X !== "key" && (z[X] = b[X]);
    } else z = b;
    return b = z.ref, {
      $$typeof: o,
      type: c,
      key: _,
      ref: b !== void 0 ? b : null,
      props: z
    };
  }
  return sA.Fragment = i, sA.jsx = A, sA.jsxs = A, sA;
}
var gm;
function yy() {
  return gm || (gm = 1, Zr.exports = hy()), Zr.exports;
}
var m = yy(), kr = { exports: {} }, I = {};
var vm;
function py() {
  if (vm) return I;
  vm = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), A = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), z = /* @__PURE__ */ Symbol.for("react.consumer"), _ = /* @__PURE__ */ Symbol.for("react.context"), X = /* @__PURE__ */ Symbol.for("react.forward_ref"), w = /* @__PURE__ */ Symbol.for("react.suspense"), O = /* @__PURE__ */ Symbol.for("react.memo"), W = /* @__PURE__ */ Symbol.for("react.lazy"), Z = /* @__PURE__ */ Symbol.for("react.activity"), ee = Symbol.iterator;
  function Ve(p) {
    return p === null || typeof p != "object" ? null : (p = ee && p[ee] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var He = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Fe = Object.assign, yt = {};
  function Pe(p, C, V) {
    this.props = p, this.context = C, this.refs = yt, this.updater = V || He;
  }
  Pe.prototype.isReactComponent = {}, Pe.prototype.setState = function(p, C) {
    if (typeof p != "object" && typeof p != "function" && p != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, p, C, "setState");
  }, Pe.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function me() {
  }
  me.prototype = Pe.prototype;
  function Te(p, C, V) {
    this.props = p, this.context = C, this.refs = yt, this.updater = V || He;
  }
  var Ee = Te.prototype = new me();
  Ee.constructor = Te, Fe(Ee, Pe.prototype), Ee.isPureReactComponent = !0;
  var Xe = Array.isArray;
  function re() {
  }
  var $ = { H: null, A: null, T: null, S: null }, Je = Object.prototype.hasOwnProperty;
  function xt(p, C, V) {
    var H = V.ref;
    return {
      $$typeof: o,
      type: p,
      key: C,
      ref: H !== void 0 ? H : null,
      props: V
    };
  }
  function Hn(p, C) {
    return xt(p.type, C, p.props);
  }
  function pt(p) {
    return typeof p == "object" && p !== null && p.$$typeof === o;
  }
  function Ie(p) {
    var C = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(V) {
      return C[V];
    });
  }
  var un = /\/+/g;
  function Xt(p, C) {
    return typeof p == "object" && p !== null && p.key != null ? Ie("" + p.key) : C.toString(36);
  }
  function _t(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (typeof p.status == "string" ? p.then(re, re) : (p.status = "pending", p.then(
          function(C) {
            p.status === "pending" && (p.status = "fulfilled", p.value = C);
          },
          function(C) {
            p.status === "pending" && (p.status = "rejected", p.reason = C);
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
  function R(p, C, V, H, P) {
    var ae = typeof p;
    (ae === "undefined" || ae === "boolean") && (p = null);
    var xe = !1;
    if (p === null) xe = !0;
    else
      switch (ae) {
        case "bigint":
        case "string":
        case "number":
          xe = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case o:
            case i:
              xe = !0;
              break;
            case W:
              return xe = p._init, R(
                xe(p._payload),
                C,
                V,
                H,
                P
              );
          }
      }
    if (xe)
      return P = P(p), xe = H === "" ? "." + Xt(p, 0) : H, Xe(P) ? (V = "", xe != null && (V = xe.replace(un, "$&/") + "/"), R(P, C, V, "", function(el) {
        return el;
      })) : P != null && (pt(P) && (P = Hn(
        P,
        V + (P.key == null || p && p.key === P.key ? "" : ("" + P.key).replace(
          un,
          "$&/"
        ) + "/") + xe
      )), C.push(P)), 1;
    xe = 0;
    var oe = H === "" ? "." : H + ":";
    if (Xe(p))
      for (var te = 0; te < p.length; te++)
        H = p[te], ae = oe + Xt(H, te), xe += R(
          H,
          C,
          V,
          ae,
          P
        );
    else if (te = Ve(p), typeof te == "function")
      for (p = te.call(p), te = 0; !(H = p.next()).done; )
        H = H.value, ae = oe + Xt(H, te++), xe += R(
          H,
          C,
          V,
          ae,
          P
        );
    else if (ae === "object") {
      if (typeof p.then == "function")
        return R(
          _t(p),
          C,
          V,
          H,
          P
        );
      throw C = String(p), Error(
        "Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return xe;
  }
  function L(p, C, V) {
    if (p == null) return p;
    var H = [], P = 0;
    return R(p, H, "", "", function(ae) {
      return C.call(V, ae, P++);
    }), H;
  }
  function K(p) {
    if (p._status === -1) {
      var C = p._result;
      C = C(), C.then(
        function(V) {
          (p._status === 0 || p._status === -1) && (p._status = 1, p._result = V);
        },
        function(V) {
          (p._status === 0 || p._status === -1) && (p._status = 2, p._result = V);
        }
      ), p._status === -1 && (p._status = 0, p._result = C);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var Ne = typeof reportError == "function" ? reportError : function(p) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var C = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof p == "object" && p !== null && typeof p.message == "string" ? String(p.message) : String(p),
        error: p
      });
      if (!window.dispatchEvent(C)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", p);
      return;
    }
    console.error(p);
  }, le = {
    map: L,
    forEach: function(p, C, V) {
      L(
        p,
        function() {
          C.apply(this, arguments);
        },
        V
      );
    },
    count: function(p) {
      var C = 0;
      return L(p, function() {
        C++;
      }), C;
    },
    toArray: function(p) {
      return L(p, function(C) {
        return C;
      }) || [];
    },
    only: function(p) {
      if (!pt(p))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return p;
    }
  };
  return I.Activity = Z, I.Children = le, I.Component = Pe, I.Fragment = A, I.Profiler = b, I.PureComponent = Te, I.StrictMode = c, I.Suspense = w, I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, I.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(p) {
      return $.H.useMemoCache(p);
    }
  }, I.cache = function(p) {
    return function() {
      return p.apply(null, arguments);
    };
  }, I.cacheSignal = function() {
    return null;
  }, I.cloneElement = function(p, C, V) {
    if (p == null)
      throw Error(
        "The argument must be a React element, but you passed " + p + "."
      );
    var H = Fe({}, p.props), P = p.key;
    if (C != null)
      for (ae in C.key !== void 0 && (P = "" + C.key), C)
        !Je.call(C, ae) || ae === "key" || ae === "__self" || ae === "__source" || ae === "ref" && C.ref === void 0 || (H[ae] = C[ae]);
    var ae = arguments.length - 2;
    if (ae === 1) H.children = V;
    else if (1 < ae) {
      for (var xe = Array(ae), oe = 0; oe < ae; oe++)
        xe[oe] = arguments[oe + 2];
      H.children = xe;
    }
    return xt(p.type, P, H);
  }, I.createContext = function(p) {
    return p = {
      $$typeof: _,
      _currentValue: p,
      _currentValue2: p,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, p.Provider = p, p.Consumer = {
      $$typeof: z,
      _context: p
    }, p;
  }, I.createElement = function(p, C, V) {
    var H, P = {}, ae = null;
    if (C != null)
      for (H in C.key !== void 0 && (ae = "" + C.key), C)
        Je.call(C, H) && H !== "key" && H !== "__self" && H !== "__source" && (P[H] = C[H]);
    var xe = arguments.length - 2;
    if (xe === 1) P.children = V;
    else if (1 < xe) {
      for (var oe = Array(xe), te = 0; te < xe; te++)
        oe[te] = arguments[te + 2];
      P.children = oe;
    }
    if (p && p.defaultProps)
      for (H in xe = p.defaultProps, xe)
        P[H] === void 0 && (P[H] = xe[H]);
    return xt(p, ae, P);
  }, I.createRef = function() {
    return { current: null };
  }, I.forwardRef = function(p) {
    return { $$typeof: X, render: p };
  }, I.isValidElement = pt, I.lazy = function(p) {
    return {
      $$typeof: W,
      _payload: { _status: -1, _result: p },
      _init: K
    };
  }, I.memo = function(p, C) {
    return {
      $$typeof: O,
      type: p,
      compare: C === void 0 ? null : C
    };
  }, I.startTransition = function(p) {
    var C = $.T, V = {};
    $.T = V;
    try {
      var H = p(), P = $.S;
      P !== null && P(V, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(re, Ne);
    } catch (ae) {
      Ne(ae);
    } finally {
      C !== null && V.types !== null && (C.types = V.types), $.T = C;
    }
  }, I.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, I.use = function(p) {
    return $.H.use(p);
  }, I.useActionState = function(p, C, V) {
    return $.H.useActionState(p, C, V);
  }, I.useCallback = function(p, C) {
    return $.H.useCallback(p, C);
  }, I.useContext = function(p) {
    return $.H.useContext(p);
  }, I.useDebugValue = function() {
  }, I.useDeferredValue = function(p, C) {
    return $.H.useDeferredValue(p, C);
  }, I.useEffect = function(p, C) {
    return $.H.useEffect(p, C);
  }, I.useEffectEvent = function(p) {
    return $.H.useEffectEvent(p);
  }, I.useId = function() {
    return $.H.useId();
  }, I.useImperativeHandle = function(p, C, V) {
    return $.H.useImperativeHandle(p, C, V);
  }, I.useInsertionEffect = function(p, C) {
    return $.H.useInsertionEffect(p, C);
  }, I.useLayoutEffect = function(p, C) {
    return $.H.useLayoutEffect(p, C);
  }, I.useMemo = function(p, C) {
    return $.H.useMemo(p, C);
  }, I.useOptimistic = function(p, C) {
    return $.H.useOptimistic(p, C);
  }, I.useReducer = function(p, C, V) {
    return $.H.useReducer(p, C, V);
  }, I.useRef = function(p) {
    return $.H.useRef(p);
  }, I.useState = function(p) {
    return $.H.useState(p);
  }, I.useSyncExternalStore = function(p, C, V) {
    return $.H.useSyncExternalStore(
      p,
      C,
      V
    );
  }, I.useTransition = function() {
    return $.H.useTransition();
  }, I.version = "19.2.4", I;
}
var bm;
function so() {
  return bm || (bm = 1, kr.exports = py()), kr.exports;
}
var h = so(), Kr = { exports: {} }, cA = {}, Jr = { exports: {} }, Qr = {};
var Sm;
function gy() {
  return Sm || (Sm = 1, (function(o) {
    function i(R, L) {
      var K = R.length;
      R.push(L);
      e: for (; 0 < K; ) {
        var Ne = K - 1 >>> 1, le = R[Ne];
        if (0 < b(le, L))
          R[Ne] = L, R[K] = le, K = Ne;
        else break e;
      }
    }
    function A(R) {
      return R.length === 0 ? null : R[0];
    }
    function c(R) {
      if (R.length === 0) return null;
      var L = R[0], K = R.pop();
      if (K !== L) {
        R[0] = K;
        e: for (var Ne = 0, le = R.length, p = le >>> 1; Ne < p; ) {
          var C = 2 * (Ne + 1) - 1, V = R[C], H = C + 1, P = R[H];
          if (0 > b(V, K))
            H < le && 0 > b(P, V) ? (R[Ne] = P, R[H] = K, Ne = H) : (R[Ne] = V, R[C] = K, Ne = C);
          else if (H < le && 0 > b(P, K))
            R[Ne] = P, R[H] = K, Ne = H;
          else break e;
        }
      }
      return L;
    }
    function b(R, L) {
      var K = R.sortIndex - L.sortIndex;
      return K !== 0 ? K : R.id - L.id;
    }
    if (o.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var z = performance;
      o.unstable_now = function() {
        return z.now();
      };
    } else {
      var _ = Date, X = _.now();
      o.unstable_now = function() {
        return _.now() - X;
      };
    }
    var w = [], O = [], W = 1, Z = null, ee = 3, Ve = !1, He = !1, Fe = !1, yt = !1, Pe = typeof setTimeout == "function" ? setTimeout : null, me = typeof clearTimeout == "function" ? clearTimeout : null, Te = typeof setImmediate < "u" ? setImmediate : null;
    function Ee(R) {
      for (var L = A(O); L !== null; ) {
        if (L.callback === null) c(O);
        else if (L.startTime <= R)
          c(O), L.sortIndex = L.expirationTime, i(w, L);
        else break;
        L = A(O);
      }
    }
    function Xe(R) {
      if (Fe = !1, Ee(R), !He)
        if (A(w) !== null)
          He = !0, re || (re = !0, Ie());
        else {
          var L = A(O);
          L !== null && _t(Xe, L.startTime - R);
        }
    }
    var re = !1, $ = -1, Je = 5, xt = -1;
    function Hn() {
      return yt ? !0 : !(o.unstable_now() - xt < Je);
    }
    function pt() {
      if (yt = !1, re) {
        var R = o.unstable_now();
        xt = R;
        var L = !0;
        try {
          e: {
            He = !1, Fe && (Fe = !1, me($), $ = -1), Ve = !0;
            var K = ee;
            try {
              t: {
                for (Ee(R), Z = A(w); Z !== null && !(Z.expirationTime > R && Hn()); ) {
                  var Ne = Z.callback;
                  if (typeof Ne == "function") {
                    Z.callback = null, ee = Z.priorityLevel;
                    var le = Ne(
                      Z.expirationTime <= R
                    );
                    if (R = o.unstable_now(), typeof le == "function") {
                      Z.callback = le, Ee(R), L = !0;
                      break t;
                    }
                    Z === A(w) && c(w), Ee(R);
                  } else c(w);
                  Z = A(w);
                }
                if (Z !== null) L = !0;
                else {
                  var p = A(O);
                  p !== null && _t(
                    Xe,
                    p.startTime - R
                  ), L = !1;
                }
              }
              break e;
            } finally {
              Z = null, ee = K, Ve = !1;
            }
            L = void 0;
          }
        } finally {
          L ? Ie() : re = !1;
        }
      }
    }
    var Ie;
    if (typeof Te == "function")
      Ie = function() {
        Te(pt);
      };
    else if (typeof MessageChannel < "u") {
      var un = new MessageChannel(), Xt = un.port2;
      un.port1.onmessage = pt, Ie = function() {
        Xt.postMessage(null);
      };
    } else
      Ie = function() {
        Pe(pt, 0);
      };
    function _t(R, L) {
      $ = Pe(function() {
        R(o.unstable_now());
      }, L);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, o.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Je = 0 < R ? Math.floor(1e3 / R) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return ee;
    }, o.unstable_next = function(R) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = ee;
      }
      var K = ee;
      ee = L;
      try {
        return R();
      } finally {
        ee = K;
      }
    }, o.unstable_requestPaint = function() {
      yt = !0;
    }, o.unstable_runWithPriority = function(R, L) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var K = ee;
      ee = R;
      try {
        return L();
      } finally {
        ee = K;
      }
    }, o.unstable_scheduleCallback = function(R, L, K) {
      var Ne = o.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? Ne + K : Ne) : K = Ne, R) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return le = K + le, R = {
        id: W++,
        callback: L,
        priorityLevel: R,
        startTime: K,
        expirationTime: le,
        sortIndex: -1
      }, K > Ne ? (R.sortIndex = K, i(O, R), A(w) === null && R === A(O) && (Fe ? (me($), $ = -1) : Fe = !0, _t(Xe, K - Ne))) : (R.sortIndex = le, i(w, R), He || Ve || (He = !0, re || (re = !0, Ie()))), R;
    }, o.unstable_shouldYield = Hn, o.unstable_wrapCallback = function(R) {
      var L = ee;
      return function() {
        var K = ee;
        ee = L;
        try {
          return R.apply(this, arguments);
        } finally {
          ee = K;
        }
      };
    };
  })(Qr)), Qr;
}
var Tm;
function vy() {
  return Tm || (Tm = 1, Jr.exports = gy()), Jr.exports;
}
var Wr = { exports: {} }, Vt = {};
var Nm;
function by() {
  if (Nm) return Vt;
  Nm = 1;
  var o = so();
  function i(w) {
    var O = "https://react.dev/errors/" + w;
    if (1 < arguments.length) {
      O += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var W = 2; W < arguments.length; W++)
        O += "&args[]=" + encodeURIComponent(arguments[W]);
    }
    return "Minified React error #" + w + "; visit " + O + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function A() {
  }
  var c = {
    d: {
      f: A,
      r: function() {
        throw Error(i(522));
      },
      D: A,
      C: A,
      L: A,
      m: A,
      X: A,
      S: A,
      M: A
    },
    p: 0,
    findDOMNode: null
  }, b = /* @__PURE__ */ Symbol.for("react.portal");
  function z(w, O, W) {
    var Z = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: b,
      key: Z == null ? null : "" + Z,
      children: w,
      containerInfo: O,
      implementation: W
    };
  }
  var _ = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function X(w, O) {
    if (w === "font") return "";
    if (typeof O == "string")
      return O === "use-credentials" ? O : "";
  }
  return Vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, Vt.createPortal = function(w, O) {
    var W = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!O || O.nodeType !== 1 && O.nodeType !== 9 && O.nodeType !== 11)
      throw Error(i(299));
    return z(w, O, null, W);
  }, Vt.flushSync = function(w) {
    var O = _.T, W = c.p;
    try {
      if (_.T = null, c.p = 2, w) return w();
    } finally {
      _.T = O, c.p = W, c.d.f();
    }
  }, Vt.preconnect = function(w, O) {
    typeof w == "string" && (O ? (O = O.crossOrigin, O = typeof O == "string" ? O === "use-credentials" ? O : "" : void 0) : O = null, c.d.C(w, O));
  }, Vt.prefetchDNS = function(w) {
    typeof w == "string" && c.d.D(w);
  }, Vt.preinit = function(w, O) {
    if (typeof w == "string" && O && typeof O.as == "string") {
      var W = O.as, Z = X(W, O.crossOrigin), ee = typeof O.integrity == "string" ? O.integrity : void 0, Ve = typeof O.fetchPriority == "string" ? O.fetchPriority : void 0;
      W === "style" ? c.d.S(
        w,
        typeof O.precedence == "string" ? O.precedence : void 0,
        {
          crossOrigin: Z,
          integrity: ee,
          fetchPriority: Ve
        }
      ) : W === "script" && c.d.X(w, {
        crossOrigin: Z,
        integrity: ee,
        fetchPriority: Ve,
        nonce: typeof O.nonce == "string" ? O.nonce : void 0
      });
    }
  }, Vt.preinitModule = function(w, O) {
    if (typeof w == "string")
      if (typeof O == "object" && O !== null) {
        if (O.as == null || O.as === "script") {
          var W = X(
            O.as,
            O.crossOrigin
          );
          c.d.M(w, {
            crossOrigin: W,
            integrity: typeof O.integrity == "string" ? O.integrity : void 0,
            nonce: typeof O.nonce == "string" ? O.nonce : void 0
          });
        }
      } else O == null && c.d.M(w);
  }, Vt.preload = function(w, O) {
    if (typeof w == "string" && typeof O == "object" && O !== null && typeof O.as == "string") {
      var W = O.as, Z = X(W, O.crossOrigin);
      c.d.L(w, W, {
        crossOrigin: Z,
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
  }, Vt.preloadModule = function(w, O) {
    if (typeof w == "string")
      if (O) {
        var W = X(O.as, O.crossOrigin);
        c.d.m(w, {
          as: typeof O.as == "string" && O.as !== "script" ? O.as : void 0,
          crossOrigin: W,
          integrity: typeof O.integrity == "string" ? O.integrity : void 0
        });
      } else c.d.m(w);
  }, Vt.requestFormReset = function(w) {
    c.d.r(w);
  }, Vt.unstable_batchedUpdates = function(w, O) {
    return w(O);
  }, Vt.useFormState = function(w, O, W) {
    return _.H.useFormState(w, O, W);
  }, Vt.useFormStatus = function() {
    return _.H.useHostTransitionStatus();
  }, Vt.version = "19.2.4", Vt;
}
var Em;
function Sy() {
  if (Em) return Wr.exports;
  Em = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (i) {
        console.error(i);
      }
  }
  return o(), Wr.exports = by(), Wr.exports;
}
var xm;
function Ty() {
  if (xm) return cA;
  xm = 1;
  var o = vy(), i = so(), A = Sy();
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function b(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function z(e) {
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
  function _(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function X(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function w(e) {
    if (z(e) !== e)
      throw Error(c(188));
  }
  function O(e) {
    var t = e.alternate;
    if (!t) {
      if (t = z(e), t === null) throw Error(c(188));
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
          if (u === n) return w(a), e;
          if (u === l) return w(a), t;
          u = u.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== l.return) n = a, l = u;
      else {
        for (var s = !1, f = a.child; f; ) {
          if (f === n) {
            s = !0, n = a, l = u;
            break;
          }
          if (f === l) {
            s = !0, l = a, n = u;
            break;
          }
          f = f.sibling;
        }
        if (!s) {
          for (f = u.child; f; ) {
            if (f === n) {
              s = !0, n = u, l = a;
              break;
            }
            if (f === l) {
              s = !0, l = u, n = a;
              break;
            }
            f = f.sibling;
          }
          if (!s) throw Error(c(189));
        }
      }
      if (n.alternate !== l) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function W(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = W(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Z = Object.assign, ee = /* @__PURE__ */ Symbol.for("react.element"), Ve = /* @__PURE__ */ Symbol.for("react.transitional.element"), He = /* @__PURE__ */ Symbol.for("react.portal"), Fe = /* @__PURE__ */ Symbol.for("react.fragment"), yt = /* @__PURE__ */ Symbol.for("react.strict_mode"), Pe = /* @__PURE__ */ Symbol.for("react.profiler"), me = /* @__PURE__ */ Symbol.for("react.consumer"), Te = /* @__PURE__ */ Symbol.for("react.context"), Ee = /* @__PURE__ */ Symbol.for("react.forward_ref"), Xe = /* @__PURE__ */ Symbol.for("react.suspense"), re = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), Je = /* @__PURE__ */ Symbol.for("react.lazy"), xt = /* @__PURE__ */ Symbol.for("react.activity"), Hn = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), pt = Symbol.iterator;
  function Ie(e) {
    return e === null || typeof e != "object" ? null : (e = pt && e[pt] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var un = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Xt(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === un ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Fe:
        return "Fragment";
      case Pe:
        return "Profiler";
      case yt:
        return "StrictMode";
      case Xe:
        return "Suspense";
      case re:
        return "SuspenseList";
      case xt:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case He:
          return "Portal";
        case Te:
          return e.displayName || "Context";
        case me:
          return (e._context.displayName || "Context") + ".Consumer";
        case Ee:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case $:
          return t = e.displayName || null, t !== null ? t : Xt(e.type) || "Memo";
        case Je:
          t = e._payload, e = e._init;
          try {
            return Xt(e(t));
          } catch {
          }
      }
    return null;
  }
  var _t = Array.isArray, R = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ne = [], le = -1;
  function p(e) {
    return { current: e };
  }
  function C(e) {
    0 > le || (e.current = Ne[le], Ne[le] = null, le--);
  }
  function V(e, t) {
    le++, Ne[le] = e.current, e.current = t;
  }
  var H = p(null), P = p(null), ae = p(null), xe = p(null);
  function oe(e, t) {
    switch (V(ae, t), V(P, e), V(H, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Xd(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Xd(t), e = Bd(t, e);
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
    C(H), V(H, e);
  }
  function te() {
    C(H), C(P), C(ae);
  }
  function el(e) {
    e.memoizedState !== null && V(xe, e);
    var t = H.current, n = Bd(t, e.type);
    t !== n && (V(P, e), V(H, n));
  }
  function he(e) {
    P.current === e && (C(H), C(P)), xe.current === e && (C(xe), aA._currentValue = K);
  }
  var Yl, zt;
  function Bt(e) {
    if (Yl === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Yl = t && t[1] || "", zt = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Yl + e + zt;
  }
  var su = !1;
  function ie(e, t) {
    if (!e || su) return "";
    su = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var U = function() {
                throw Error();
              };
              if (Object.defineProperty(U.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(U, []);
                } catch (x) {
                  var N = x;
                }
                Reflect.construct(e, [], U);
              } else {
                try {
                  U.call();
                } catch (x) {
                  N = x;
                }
                e.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                N = x;
              }
              (U = e()) && typeof U.catch == "function" && U.catch(function() {
              });
            }
          } catch (x) {
            if (x && N && typeof x.stack == "string")
              return [x.stack, N.stack];
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
      var u = l.DetermineComponentFrameRoot(), s = u[0], f = u[1];
      if (s && f) {
        var y = s.split(`
`), T = f.split(`
`);
        for (a = l = 0; l < y.length && !y[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; a < T.length && !T[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (l === y.length || a === T.length)
          for (l = y.length - 1, a = T.length - 1; 1 <= l && 0 <= a && y[l] !== T[a]; )
            a--;
        for (; 1 <= l && 0 <= a; l--, a--)
          if (y[l] !== T[a]) {
            if (l !== 1 || a !== 1)
              do
                if (l--, a--, 0 > a || y[l] !== T[a]) {
                  var q = `
` + y[l].replace(" at new ", " at ");
                  return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), q;
                }
              while (1 <= l && 0 <= a);
            break;
          }
      }
    } finally {
      su = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Bt(n) : "";
  }
  function Fs(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Bt(e.type);
      case 16:
        return Bt("Lazy");
      case 13:
        return e.child !== t && t !== null ? Bt("Suspense Fallback") : Bt("Suspense");
      case 19:
        return Bt("SuspenseList");
      case 0:
      case 15:
        return ie(e.type, !1);
      case 11:
        return ie(e.type.render, !1);
      case 1:
        return ie(e.type, !0);
      case 31:
        return Bt("Activity");
      default:
        return "";
    }
  }
  function cu(e) {
    try {
      var t = "", n = null;
      do
        t += Fs(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var ru = Object.prototype.hasOwnProperty, qa = o.unstable_scheduleCallback, si = o.unstable_cancelCallback, Ma = o.unstable_shouldYield, za = o.unstable_requestPaint, it = o.unstable_now, Xn = o.unstable_getCurrentPriorityLevel, Gt = o.unstable_ImmediatePriority, Wt = o.unstable_UserBlockingPriority, Ot = o.unstable_NormalPriority, An = o.unstable_LowPriority, dA = o.unstable_IdlePriority, mA = o.log, gt = o.unstable_setDisableYieldValue, vt = null, Me = null;
  function Ze(e) {
    if (typeof mA == "function" && gt(e), Me && typeof Me.setStrictMode == "function")
      try {
        Me.setStrictMode(vt, e);
      } catch {
      }
  }
  var Rt = Math.clz32 ? Math.clz32 : fu, hA = Math.log, ou = Math.LN2;
  function fu(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (hA(e) / ou | 0) | 0;
  }
  var Oa = 256, ja = 262144, Ca = 4194304;
  function Yt(e) {
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
  function j(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var a = 0, u = e.suspendedLanes, s = e.pingedLanes;
    e = e.warmLanes;
    var f = l & 134217727;
    return f !== 0 ? (l = f & ~u, l !== 0 ? a = Yt(l) : (s &= f, s !== 0 ? a = Yt(s) : n || (n = f & ~e, n !== 0 && (a = Yt(n))))) : (f = l & ~u, f !== 0 ? a = Yt(f) : s !== 0 ? a = Yt(s) : n || (n = l & ~e, n !== 0 && (a = Yt(n)))), a === 0 ? 0 : t !== 0 && t !== a && (t & u) === 0 && (u = a & -a, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : a;
  }
  function Zt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function yA(e, t) {
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
  function ci() {
    var e = Ca;
    return Ca <<= 1, (Ca & 62914560) === 0 && (Ca = 4194304), e;
  }
  function F(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function sn(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Zl(e, t, n, l, a, u) {
    var s = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var f = e.entanglements, y = e.expirationTimes, T = e.hiddenUpdates;
    for (n = s & ~n; 0 < n; ) {
      var q = 31 - Rt(n), U = 1 << q;
      f[q] = 0, y[q] = -1;
      var N = T[q];
      if (N !== null)
        for (T[q] = null, q = 0; q < N.length; q++) {
          var x = N[q];
          x !== null && (x.lane &= -536870913);
        }
      n &= ~U;
    }
    l !== 0 && pl(e, l, 0), u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(s & ~t));
  }
  function pl(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - Rt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function pA(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - Rt(n), a = 1 << l;
      a & t | e[l] & t && (e[l] |= t), n &= ~a;
    }
  }
  function ri(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : se(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function se(e) {
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
  function Ua(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function oi() {
    var e = L.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : rm(e.type));
  }
  function gl(e, t) {
    var n = L.p;
    try {
      return L.p = e, t();
    } finally {
      L.p = n;
    }
  }
  var Be = Math.random().toString(36).slice(2), ke = "__reactFiber$" + Be, At = "__reactProps$" + Be, Bn = "__reactContainer$" + Be, tl = "__reactEvents$" + Be, kl = "__reactListeners$" + Be, Ft = "__reactHandles$" + Be, wa = "__reactResources$" + Be, Gn = "__reactMarker$" + Be;
  function vl(e) {
    delete e[ke], delete e[At], delete e[tl], delete e[kl], delete e[Ft];
  }
  function nl(e) {
    var t = e[ke];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Bn] || n[ke]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Qd(e); e !== null; ) {
            if (n = e[ke]) return n;
            e = Qd(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function gn(e) {
    if (e = e[ke] || e[Bn]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function vn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Yn(e) {
    var t = e[wa];
    return t || (t = e[wa] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Qe(e) {
    e[Gn] = !0;
  }
  var Da = /* @__PURE__ */ new Set(), st = {};
  function kt(e, t) {
    cn(e, t), cn(e + "Capture", t);
  }
  function cn(e, t) {
    for (st[e] = t, e = 0; e < t.length; e++)
      Da.add(t[e]);
  }
  var bl = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Zn = {}, bn = {};
  function fi(e) {
    return ru.call(bn, e) ? !0 : ru.call(Zn, e) ? !1 : bl.test(e) ? bn[e] = !0 : (Zn[e] = !0, !1);
  }
  function Sn(e, t, n) {
    if (fi(t))
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
  function di(e, t, n) {
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
  function bt(e, t, n, l) {
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
  function rn(e) {
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
  function mi(e, t, n) {
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
        set: function(s) {
          n = "" + s, u.call(this, s);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(s) {
          n = "" + s;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function kn(e) {
    if (!e._valueTracker) {
      var t = du(e) ? "checked" : "value";
      e._valueTracker = mi(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function ll(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = du(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function mu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var gA = /[\n"\\]/g;
  function St(e) {
    return e.replace(
      gA,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function hu(e, t, n, l, a, u, s, f) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + rn(t)) : e.value !== "" + rn(t) && (e.value = "" + rn(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? yu(e, s, rn(t)) : n != null ? yu(e, s, rn(n)) : l != null && e.removeAttribute("value"), a == null && u != null && (e.defaultChecked = !!u), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + rn(f) : e.removeAttribute("name");
  }
  function Pt(e, t, n, l, a, u, s, f) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        kn(e);
        return;
      }
      n = n != null ? "" + rn(n) : "", t = t != null ? "" + rn(t) : n, f || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? a, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = f ? e.checked : !!l, e.defaultChecked = !!l, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), kn(e);
  }
  function yu(e, t, n) {
    t === "number" && mu(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Kt(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++)
        t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + rn(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, l && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function vA(e, t, n) {
    if (t != null && (t = "" + rn(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + rn(n) : "";
  }
  function al(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(c(92));
        if (_t(l)) {
          if (1 < l.length) throw Error(c(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = rn(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), kn(e);
  }
  function Kn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var hi = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function pu(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || hi.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Sl(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var a in t)
        l = t[a], t.hasOwnProperty(a) && n[a] !== l && pu(e, a, l);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && pu(e, u, t[u]);
  }
  function gu(e) {
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
  var Kl = /* @__PURE__ */ new Map([
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
  ]), Ps = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Tn(e) {
    return Ps.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function ul() {
  }
  var Nn = null;
  function Tt(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Jl = null, il = null;
  function bA(e) {
    var t = gn(e);
    if (t && (e = t.stateNode)) {
      var n = e[At] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (hu(
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
              'input[name="' + St(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var a = l[At] || null;
                if (!a) throw Error(c(90));
                hu(
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
              l = n[t], l.form === e.form && ll(l);
          }
          break e;
        case "textarea":
          vA(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Kt(e, !!n.multiple, t, !1);
      }
    }
  }
  var Jn = !1;
  function Qn(e, t, n) {
    if (Jn) return e(t, n);
    Jn = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Jn = !1, (Jl !== null || il !== null) && (ys(), Jl && (t = Jl, e = il, il = Jl = null, bA(t), e)))
        for (t = 0; t < e.length; t++) bA(e[t]);
    }
  }
  function Al(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[At] || null;
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
        c(231, t, typeof n)
      );
    return n;
  }
  var En = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), vu = !1;
  if (En)
    try {
      var Tl = {};
      Object.defineProperty(Tl, "passive", {
        get: function() {
          vu = !0;
        }
      }), window.addEventListener("test", Tl, Tl), window.removeEventListener("test", Tl, Tl);
    } catch {
      vu = !1;
    }
  var sl = null, yi = null, bu = null;
  function SA() {
    if (bu) return bu;
    var e, t = yi, n = t.length, l, a = "value" in sl ? sl.value : sl.textContent, u = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var s = n - e;
    for (l = 1; l <= s && t[n - l] === a[u - l]; l++) ;
    return bu = a.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Su(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Tu() {
    return !0;
  }
  function TA() {
    return !1;
  }
  function Lt(e) {
    function t(n, l, a, u, s) {
      this._reactName = n, this._targetInst = a, this.type = l, this.nativeEvent = u, this.target = s, this.currentTarget = null;
      for (var f in e)
        e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(u) : u[f]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Tu : TA, this.isPropagationStopped = TA, this;
    }
    return Z(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Tu);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Tu);
      },
      persist: function() {
      },
      isPersistent: Tu
    }), t;
  }
  var Nl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Nu = Lt(Nl), El = Z({}, Nl, { view: 0, detail: 0 }), pi = Lt(El), gi, vi, Ql, _a = Z({}, El, {
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
    getModifierState: Ti,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ql && (Ql && e.type === "mousemove" ? (gi = e.screenX - Ql.screenX, vi = e.screenY - Ql.screenY) : vi = gi = 0, Ql = e), gi);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : vi;
    }
  }), La = Lt(_a), on = Z({}, _a, { dataTransfer: 0 }), cl = Lt(on), rl = Z({}, El, { relatedTarget: 0 }), Wl = Lt(rl), Fl = Z({}, Nl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), bi = Lt(Fl), NA = Z({}, Nl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Si = Lt(NA), Pl = Z({}, Nl, { data: 0 }), Va = Lt(Pl), Eu = {
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
  }, EA = {
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
  function xA(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ha[e]) ? !!t[e] : !1;
  }
  function Ti() {
    return xA;
  }
  var RA = Z({}, El, {
    key: function(e) {
      if (e.key) {
        var t = Eu[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Su(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? EA[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ti,
    charCode: function(e) {
      return e.type === "keypress" ? Su(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Su(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), qA = Lt(RA), MA = Z({}, _a, {
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
  }), Il = Lt(MA), Xa = Z({}, El, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ti
  }), xn = Lt(Xa), zA = Z({}, Nl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ba = Lt(zA), It = Z({}, _a, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), xu = Lt(It), Ru = Z({}, Nl, {
    newState: 0,
    oldState: 0
  }), Is = Lt(Ru), $s = [9, 13, 27, 32], Ni = En && "CompositionEvent" in window, Ga = null;
  En && "documentMode" in document && (Ga = document.documentMode);
  var ec = En && "TextEvent" in window && !Ga, Rn = En && (!Ni || Ga && 8 < Ga && 11 >= Ga), Ei = " ", OA = !1;
  function jA(e, t) {
    switch (e) {
      case "keyup":
        return $s.indexOf(t.keyCode) !== -1;
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
  function CA(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var $l = !1;
  function tc(e, t) {
    switch (e) {
      case "compositionend":
        return CA(t);
      case "keypress":
        return t.which !== 32 ? null : (OA = !0, Ei);
      case "textInput":
        return e = t.data, e === Ei && OA ? null : e;
      default:
        return null;
    }
  }
  function nc(e, t) {
    if ($l)
      return e === "compositionend" || !Ni && jA(e, t) ? (e = SA(), bu = yi = sl = null, $l = !1, e) : null;
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
        return Rn && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var lc = {
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
  function qu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!lc[e.type] : t === "textarea";
  }
  function UA(e, t, n, l) {
    Jl ? il ? il.push(l) : il = [l] : Jl = l, t = Ns(t, "onChange"), 0 < t.length && (n = new Nu(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var qn = null, Mn = null;
  function ac(e) {
    wd(e, 0);
  }
  function Ya(e) {
    var t = vn(e);
    if (ll(t)) return e;
  }
  function wA(e, t) {
    if (e === "change") return t;
  }
  var Wn = !1;
  if (En) {
    var Mu;
    if (En) {
      var ea = "oninput" in document;
      if (!ea) {
        var Za = document.createElement("div");
        Za.setAttribute("oninput", "return;"), ea = typeof Za.oninput == "function";
      }
      Mu = ea;
    } else Mu = !1;
    Wn = Mu && (!document.documentMode || 9 < document.documentMode);
  }
  function DA() {
    qn && (qn.detachEvent("onpropertychange", _A), Mn = qn = null);
  }
  function _A(e) {
    if (e.propertyName === "value" && Ya(Mn)) {
      var t = [];
      UA(
        t,
        Mn,
        e,
        Tt(e)
      ), Qn(ac, t);
    }
  }
  function uc(e, t, n) {
    e === "focusin" ? (DA(), qn = t, Mn = n, qn.attachEvent("onpropertychange", _A)) : e === "focusout" && DA();
  }
  function zu(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ya(Mn);
  }
  function LA(e, t) {
    if (e === "click") return Ya(t);
  }
  function VA(e, t) {
    if (e === "input" || e === "change")
      return Ya(t);
  }
  function ic(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ct = typeof Object.is == "function" ? Object.is : ic;
  function Fn(e, t) {
    if (ct(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!ru.call(t, a) || !ct(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function xi(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ri(e, t) {
    var n = xi(e);
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
      n = xi(n);
    }
  }
  function ta(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ta(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ou(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = mu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = mu(e.document);
    }
    return t;
  }
  function qi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Mi = En && "documentMode" in document && 11 >= document.documentMode, xl = null, zi = null, ka = null, ju = !1;
  function HA(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ju || xl == null || xl !== mu(l) || (l = xl, "selectionStart" in l && qi(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), ka && Fn(ka, l) || (ka = l, l = Ns(zi, "onSelect"), 0 < l.length && (t = new Nu(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = xl)));
  }
  function Rl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var na = {
    animationend: Rl("Animation", "AnimationEnd"),
    animationiteration: Rl("Animation", "AnimationIteration"),
    animationstart: Rl("Animation", "AnimationStart"),
    transitionrun: Rl("Transition", "TransitionRun"),
    transitionstart: Rl("Transition", "TransitionStart"),
    transitioncancel: Rl("Transition", "TransitionCancel"),
    transitionend: Rl("Transition", "TransitionEnd")
  }, r = {}, d = {};
  En && (d = document.createElement("div").style, "AnimationEvent" in window || (delete na.animationend.animation, delete na.animationiteration.animation, delete na.animationstart.animation), "TransitionEvent" in window || delete na.transitionend.transition);
  function E(e) {
    if (r[e]) return r[e];
    if (!na[e]) return e;
    var t = na[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in d)
        return r[e] = t[n];
    return e;
  }
  var D = E("animationend"), G = E("animationiteration"), ye = E("animationstart"), Ae = E("transitionrun"), We = E("transitionstart"), ce = E("transitioncancel"), $e = E("transitionend"), qt = /* @__PURE__ */ new Map(), et = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  et.push("scrollEnd");
  function Oe(e, t) {
    qt.set(e, t), kt(t, [e]);
  }
  var zn = typeof reportError == "function" ? reportError : function(e) {
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
  }, tt = [], Nt = 0, Cu = 0;
  function Ka() {
    for (var e = Nt, t = Cu = Nt = 0; t < e; ) {
      var n = tt[t];
      tt[t++] = null;
      var l = tt[t];
      tt[t++] = null;
      var a = tt[t];
      tt[t++] = null;
      var u = tt[t];
      if (tt[t++] = null, l !== null && a !== null) {
        var s = l.pending;
        s === null ? a.next = a : (a.next = s.next, s.next = a), l.pending = a;
      }
      u !== 0 && pe(n, a, u);
    }
  }
  function Ja(e, t, n, l) {
    tt[Nt++] = e, tt[Nt++] = t, tt[Nt++] = n, tt[Nt++] = l, Cu |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function Uu(e, t, n, l) {
    return Ja(e, t, n, l), _e(e);
  }
  function B(e, t) {
    return Ja(e, null, null, t), _e(e);
  }
  function pe(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var a = !1, u = e.return; u !== null; )
      u.childLanes |= n, l = u.alternate, l !== null && (l.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (a = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, a && t !== null && (a = 31 - Rt(n), e = u.hiddenUpdates, l = e[a], l === null ? e[a] = [t] : l.push(t), t.lane = n | 536870912), u) : null;
  }
  function _e(e) {
    if (50 < Pi)
      throw Pi = 0, mr = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var rt = {};
  function $t(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function jt(e, t, n, l) {
    return new $t(e, t, n, l);
  }
  function wu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ql(e, t) {
    var n = e.alternate;
    return n === null ? (n = jt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function ho(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function XA(e, t, n, l, a, u) {
    var s = 0;
    if (l = e, typeof e == "function") wu(e) && (s = 1);
    else if (typeof e == "string")
      s = ly(
        e,
        n,
        H.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case xt:
          return e = jt(31, n, t, a), e.elementType = xt, e.lanes = u, e;
        case Fe:
          return Qa(n.children, a, u, t);
        case yt:
          s = 8, a |= 24;
          break;
        case Pe:
          return e = jt(12, n, t, a | 2), e.elementType = Pe, e.lanes = u, e;
        case Xe:
          return e = jt(13, n, t, a), e.elementType = Xe, e.lanes = u, e;
        case re:
          return e = jt(19, n, t, a), e.elementType = re, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Te:
                s = 10;
                break e;
              case me:
                s = 9;
                break e;
              case Ee:
                s = 11;
                break e;
              case $:
                s = 14;
                break e;
              case Je:
                s = 16, l = null;
                break e;
            }
          s = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = jt(s, n, t, a), t.elementType = e, t.type = l, t.lanes = u, t;
  }
  function Qa(e, t, n, l) {
    return e = jt(7, e, l, t), e.lanes = n, e;
  }
  function Ac(e, t, n) {
    return e = jt(6, e, null, t), e.lanes = n, e;
  }
  function yo(e) {
    var t = jt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function sc(e, t, n) {
    return t = jt(
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
  var po = /* @__PURE__ */ new WeakMap();
  function On(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = po.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: cu(t)
      }, po.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: cu(t)
    };
  }
  var Du = [], _u = 0, BA = null, Oi = 0, jn = [], Cn = 0, la = null, ol = 1, fl = "";
  function Ml(e, t) {
    Du[_u++] = Oi, Du[_u++] = BA, BA = e, Oi = t;
  }
  function go(e, t, n) {
    jn[Cn++] = ol, jn[Cn++] = fl, jn[Cn++] = la, la = e;
    var l = ol;
    e = fl;
    var a = 32 - Rt(l) - 1;
    l &= ~(1 << a), n += 1;
    var u = 32 - Rt(t) + a;
    if (30 < u) {
      var s = a - a % 5;
      u = (l & (1 << s) - 1).toString(32), l >>= s, a -= s, ol = 1 << 32 - Rt(t) + a | n << a | l, fl = u + e;
    } else
      ol = 1 << u | n << a | l, fl = e;
  }
  function cc(e) {
    e.return !== null && (Ml(e, 1), go(e, 1, 0));
  }
  function rc(e) {
    for (; e === BA; )
      BA = Du[--_u], Du[_u] = null, Oi = Du[--_u], Du[_u] = null;
    for (; e === la; )
      la = jn[--Cn], jn[Cn] = null, fl = jn[--Cn], jn[Cn] = null, ol = jn[--Cn], jn[Cn] = null;
  }
  function vo(e, t) {
    jn[Cn++] = ol, jn[Cn++] = fl, jn[Cn++] = la, ol = t.id, fl = t.overflow, la = e;
  }
  var Ct = null, Ge = null, be = !1, aa = null, Un = !1, oc = Error(c(519));
  function ua(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ji(On(t, e)), oc;
  }
  function bo(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[ke] = e, t[At] = l, n) {
      case "dialog":
        de("cancel", t), de("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        de("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < $i.length; n++)
          de($i[n], t);
        break;
      case "source":
        de("error", t);
        break;
      case "img":
      case "image":
      case "link":
        de("error", t), de("load", t);
        break;
      case "details":
        de("toggle", t);
        break;
      case "input":
        de("invalid", t), Pt(
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
        de("invalid", t);
        break;
      case "textarea":
        de("invalid", t), al(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || Vd(t.textContent, n) ? (l.popover != null && (de("beforetoggle", t), de("toggle", t)), l.onScroll != null && de("scroll", t), l.onScrollEnd != null && de("scrollend", t), l.onClick != null && (t.onclick = ul), t = !0) : t = !1, t || ua(e, !0);
  }
  function So(e) {
    for (Ct = e.return; Ct; )
      switch (Ct.tag) {
        case 5:
        case 31:
        case 13:
          Un = !1;
          return;
        case 27:
        case 3:
          Un = !0;
          return;
        default:
          Ct = Ct.return;
      }
  }
  function Lu(e) {
    if (e !== Ct) return !1;
    if (!be) return So(e), be = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || zr(e.type, e.memoizedProps)), n = !n), n && Ge && ua(e), So(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Ge = Jd(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Ge = Jd(e);
    } else
      t === 27 ? (t = Ge, va(e.type) ? (e = wr, wr = null, Ge = e) : Ge = t) : Ge = Ct ? Dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wa() {
    Ge = Ct = null, be = !1;
  }
  function fc() {
    var e = aa;
    return e !== null && (ln === null ? ln = e : ln.push.apply(
      ln,
      e
    ), aa = null), e;
  }
  function ji(e) {
    aa === null ? aa = [e] : aa.push(e);
  }
  var dc = p(null), Fa = null, zl = null;
  function ia(e, t, n) {
    V(dc, t._currentValue), t._currentValue = n;
  }
  function Ol(e) {
    e._currentValue = dc.current, C(dc);
  }
  function mc(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function hc(e, t, n, l) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var u = a.dependencies;
      if (u !== null) {
        var s = a.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var f = u;
          u = a;
          for (var y = 0; y < t.length; y++)
            if (f.context === t[y]) {
              u.lanes |= n, f = u.alternate, f !== null && (f.lanes |= n), mc(
                u.return,
                n,
                e
              ), l || (s = null);
              break e;
            }
          u = f.next;
        }
      } else if (a.tag === 18) {
        if (s = a.return, s === null) throw Error(c(341));
        s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), mc(s, n, e), s = null;
      } else s = a.child;
      if (s !== null) s.return = a;
      else
        for (s = a; s !== null; ) {
          if (s === e) {
            s = null;
            break;
          }
          if (a = s.sibling, a !== null) {
            a.return = s.return, s = a;
            break;
          }
          s = s.return;
        }
      a = s;
    }
  }
  function Vu(e, t, n, l) {
    e = null;
    for (var a = t, u = !1; a !== null; ) {
      if (!u) {
        if ((a.flags & 524288) !== 0) u = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var s = a.alternate;
        if (s === null) throw Error(c(387));
        if (s = s.memoizedProps, s !== null) {
          var f = a.type;
          ct(a.pendingProps.value, s.value) || (e !== null ? e.push(f) : e = [f]);
        }
      } else if (a === xe.current) {
        if (s = a.alternate, s === null) throw Error(c(387));
        s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(aA) : e = [aA]);
      }
      a = a.return;
    }
    e !== null && hc(
      t,
      e,
      n,
      l
    ), t.flags |= 262144;
  }
  function GA(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!ct(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Pa(e) {
    Fa = e, zl = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Ut(e) {
    return To(Fa, e);
  }
  function YA(e, t) {
    return Fa === null && Pa(e), To(e, t);
  }
  function To(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, zl === null) {
      if (e === null) throw Error(c(308));
      zl = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else zl = zl.next = t;
    return n;
  }
  var $m = typeof AbortController < "u" ? AbortController : function() {
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
  }, eh = o.unstable_scheduleCallback, th = o.unstable_NormalPriority, ot = {
    $$typeof: Te,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function yc() {
    return {
      controller: new $m(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ci(e) {
    e.refCount--, e.refCount === 0 && eh(th, function() {
      e.controller.abort();
    });
  }
  var Ui = null, pc = 0, Hu = 0, Xu = null;
  function nh(e, t) {
    if (Ui === null) {
      var n = Ui = [];
      pc = 0, Hu = br(), Xu = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return pc++, t.then(No, No), t;
  }
  function No() {
    if (--pc === 0 && Ui !== null) {
      Xu !== null && (Xu.status = "fulfilled");
      var e = Ui;
      Ui = null, Hu = 0, Xu = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function lh(e, t) {
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
  var Eo = R.S;
  R.S = function(e, t) {
    sd = it(), typeof t == "object" && t !== null && typeof t.then == "function" && nh(e, t), Eo !== null && Eo(e, t);
  };
  var Ia = p(null);
  function gc() {
    var e = Ia.current;
    return e !== null ? e : Le.pooledCache;
  }
  function ZA(e, t) {
    t === null ? V(Ia, Ia.current) : V(Ia, t.pool);
  }
  function xo() {
    var e = gc();
    return e === null ? null : { parent: ot._currentValue, pool: e };
  }
  var Bu = Error(c(460)), vc = Error(c(474)), kA = Error(c(542)), KA = { then: function() {
  } };
  function Ro(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function qo(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(ul, ul), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, zo(e), e;
      default:
        if (typeof t.status == "string") t.then(ul, ul);
        else {
          if (e = Le, e !== null && 100 < e.shellSuspendCounter)
            throw Error(c(482));
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
            throw e = t.reason, zo(e), e;
        }
        throw eu = t, Bu;
    }
  }
  function $a(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (eu = n, Bu) : n;
    }
  }
  var eu = null;
  function Mo() {
    if (eu === null) throw Error(c(459));
    var e = eu;
    return eu = null, e;
  }
  function zo(e) {
    if (e === Bu || e === kA)
      throw Error(c(483));
  }
  var Gu = null, wi = 0;
  function JA(e) {
    var t = wi;
    return wi += 1, Gu === null && (Gu = []), qo(Gu, e, t);
  }
  function Di(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function QA(e, t) {
    throw t.$$typeof === ee ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Oo(e) {
    function t(v, g) {
      if (e) {
        var S = v.deletions;
        S === null ? (v.deletions = [g], v.flags |= 16) : S.push(g);
      }
    }
    function n(v, g) {
      if (!e) return null;
      for (; g !== null; )
        t(v, g), g = g.sibling;
      return null;
    }
    function l(v) {
      for (var g = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? g.set(v.key, v) : g.set(v.index, v), v = v.sibling;
      return g;
    }
    function a(v, g) {
      return v = ql(v, g), v.index = 0, v.sibling = null, v;
    }
    function u(v, g, S) {
      return v.index = S, e ? (S = v.alternate, S !== null ? (S = S.index, S < g ? (v.flags |= 67108866, g) : S) : (v.flags |= 67108866, g)) : (v.flags |= 1048576, g);
    }
    function s(v) {
      return e && v.alternate === null && (v.flags |= 67108866), v;
    }
    function f(v, g, S, M) {
      return g === null || g.tag !== 6 ? (g = Ac(S, v.mode, M), g.return = v, g) : (g = a(g, S), g.return = v, g);
    }
    function y(v, g, S, M) {
      var J = S.type;
      return J === Fe ? q(
        v,
        g,
        S.props.children,
        M,
        S.key
      ) : g !== null && (g.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Je && $a(J) === g.type) ? (g = a(g, S.props), Di(g, S), g.return = v, g) : (g = XA(
        S.type,
        S.key,
        S.props,
        null,
        v.mode,
        M
      ), Di(g, S), g.return = v, g);
    }
    function T(v, g, S, M) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== S.containerInfo || g.stateNode.implementation !== S.implementation ? (g = sc(S, v.mode, M), g.return = v, g) : (g = a(g, S.children || []), g.return = v, g);
    }
    function q(v, g, S, M, J) {
      return g === null || g.tag !== 7 ? (g = Qa(
        S,
        v.mode,
        M,
        J
      ), g.return = v, g) : (g = a(g, S), g.return = v, g);
    }
    function U(v, g, S) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return g = Ac(
          "" + g,
          v.mode,
          S
        ), g.return = v, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Ve:
            return S = XA(
              g.type,
              g.key,
              g.props,
              null,
              v.mode,
              S
            ), Di(S, g), S.return = v, S;
          case He:
            return g = sc(
              g,
              v.mode,
              S
            ), g.return = v, g;
          case Je:
            return g = $a(g), U(v, g, S);
        }
        if (_t(g) || Ie(g))
          return g = Qa(
            g,
            v.mode,
            S,
            null
          ), g.return = v, g;
        if (typeof g.then == "function")
          return U(v, JA(g), S);
        if (g.$$typeof === Te)
          return U(
            v,
            YA(v, g),
            S
          );
        QA(v, g);
      }
      return null;
    }
    function N(v, g, S, M) {
      var J = g !== null ? g.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return J !== null ? null : f(v, g, "" + S, M);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Ve:
            return S.key === J ? y(v, g, S, M) : null;
          case He:
            return S.key === J ? T(v, g, S, M) : null;
          case Je:
            return S = $a(S), N(v, g, S, M);
        }
        if (_t(S) || Ie(S))
          return J !== null ? null : q(v, g, S, M, null);
        if (typeof S.then == "function")
          return N(
            v,
            g,
            JA(S),
            M
          );
        if (S.$$typeof === Te)
          return N(
            v,
            g,
            YA(v, S),
            M
          );
        QA(v, S);
      }
      return null;
    }
    function x(v, g, S, M, J) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return v = v.get(S) || null, f(g, v, "" + M, J);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Ve:
            return v = v.get(
              M.key === null ? S : M.key
            ) || null, y(g, v, M, J);
          case He:
            return v = v.get(
              M.key === null ? S : M.key
            ) || null, T(g, v, M, J);
          case Je:
            return M = $a(M), x(
              v,
              g,
              S,
              M,
              J
            );
        }
        if (_t(M) || Ie(M))
          return v = v.get(S) || null, q(g, v, M, J, null);
        if (typeof M.then == "function")
          return x(
            v,
            g,
            S,
            JA(M),
            J
          );
        if (M.$$typeof === Te)
          return x(
            v,
            g,
            S,
            YA(g, M),
            J
          );
        QA(g, M);
      }
      return null;
    }
    function Y(v, g, S, M) {
      for (var J = null, Re = null, k = g, ue = g = 0, ve = null; k !== null && ue < S.length; ue++) {
        k.index > ue ? (ve = k, k = null) : ve = k.sibling;
        var qe = N(
          v,
          k,
          S[ue],
          M
        );
        if (qe === null) {
          k === null && (k = ve);
          break;
        }
        e && k && qe.alternate === null && t(v, k), g = u(qe, g, ue), Re === null ? J = qe : Re.sibling = qe, Re = qe, k = ve;
      }
      if (ue === S.length)
        return n(v, k), be && Ml(v, ue), J;
      if (k === null) {
        for (; ue < S.length; ue++)
          k = U(v, S[ue], M), k !== null && (g = u(
            k,
            g,
            ue
          ), Re === null ? J = k : Re.sibling = k, Re = k);
        return be && Ml(v, ue), J;
      }
      for (k = l(k); ue < S.length; ue++)
        ve = x(
          k,
          v,
          ue,
          S[ue],
          M
        ), ve !== null && (e && ve.alternate !== null && k.delete(
          ve.key === null ? ue : ve.key
        ), g = u(
          ve,
          g,
          ue
        ), Re === null ? J = ve : Re.sibling = ve, Re = ve);
      return e && k.forEach(function(Ea) {
        return t(v, Ea);
      }), be && Ml(v, ue), J;
    }
    function Q(v, g, S, M) {
      if (S == null) throw Error(c(151));
      for (var J = null, Re = null, k = g, ue = g = 0, ve = null, qe = S.next(); k !== null && !qe.done; ue++, qe = S.next()) {
        k.index > ue ? (ve = k, k = null) : ve = k.sibling;
        var Ea = N(v, k, qe.value, M);
        if (Ea === null) {
          k === null && (k = ve);
          break;
        }
        e && k && Ea.alternate === null && t(v, k), g = u(Ea, g, ue), Re === null ? J = Ea : Re.sibling = Ea, Re = Ea, k = ve;
      }
      if (qe.done)
        return n(v, k), be && Ml(v, ue), J;
      if (k === null) {
        for (; !qe.done; ue++, qe = S.next())
          qe = U(v, qe.value, M), qe !== null && (g = u(qe, g, ue), Re === null ? J = qe : Re.sibling = qe, Re = qe);
        return be && Ml(v, ue), J;
      }
      for (k = l(k); !qe.done; ue++, qe = S.next())
        qe = x(k, v, ue, qe.value, M), qe !== null && (e && qe.alternate !== null && k.delete(qe.key === null ? ue : qe.key), g = u(qe, g, ue), Re === null ? J = qe : Re.sibling = qe, Re = qe);
      return e && k.forEach(function(my) {
        return t(v, my);
      }), be && Ml(v, ue), J;
    }
    function De(v, g, S, M) {
      if (typeof S == "object" && S !== null && S.type === Fe && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Ve:
            e: {
              for (var J = S.key; g !== null; ) {
                if (g.key === J) {
                  if (J = S.type, J === Fe) {
                    if (g.tag === 7) {
                      n(
                        v,
                        g.sibling
                      ), M = a(
                        g,
                        S.props.children
                      ), M.return = v, v = M;
                      break e;
                    }
                  } else if (g.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Je && $a(J) === g.type) {
                    n(
                      v,
                      g.sibling
                    ), M = a(g, S.props), Di(M, S), M.return = v, v = M;
                    break e;
                  }
                  n(v, g);
                  break;
                } else t(v, g);
                g = g.sibling;
              }
              S.type === Fe ? (M = Qa(
                S.props.children,
                v.mode,
                M,
                S.key
              ), M.return = v, v = M) : (M = XA(
                S.type,
                S.key,
                S.props,
                null,
                v.mode,
                M
              ), Di(M, S), M.return = v, v = M);
            }
            return s(v);
          case He:
            e: {
              for (J = S.key; g !== null; ) {
                if (g.key === J)
                  if (g.tag === 4 && g.stateNode.containerInfo === S.containerInfo && g.stateNode.implementation === S.implementation) {
                    n(
                      v,
                      g.sibling
                    ), M = a(g, S.children || []), M.return = v, v = M;
                    break e;
                  } else {
                    n(v, g);
                    break;
                  }
                else t(v, g);
                g = g.sibling;
              }
              M = sc(S, v.mode, M), M.return = v, v = M;
            }
            return s(v);
          case Je:
            return S = $a(S), De(
              v,
              g,
              S,
              M
            );
        }
        if (_t(S))
          return Y(
            v,
            g,
            S,
            M
          );
        if (Ie(S)) {
          if (J = Ie(S), typeof J != "function") throw Error(c(150));
          return S = J.call(S), Q(
            v,
            g,
            S,
            M
          );
        }
        if (typeof S.then == "function")
          return De(
            v,
            g,
            JA(S),
            M
          );
        if (S.$$typeof === Te)
          return De(
            v,
            g,
            YA(v, S),
            M
          );
        QA(v, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, g !== null && g.tag === 6 ? (n(v, g.sibling), M = a(g, S), M.return = v, v = M) : (n(v, g), M = Ac(S, v.mode, M), M.return = v, v = M), s(v)) : n(v, g);
    }
    return function(v, g, S, M) {
      try {
        wi = 0;
        var J = De(
          v,
          g,
          S,
          M
        );
        return Gu = null, J;
      } catch (k) {
        if (k === Bu || k === kA) throw k;
        var Re = jt(29, k, null, v.mode);
        return Re.lanes = M, Re.return = v, Re;
      }
    };
  }
  var tu = Oo(!0), jo = Oo(!1), Aa = !1;
  function bc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Sc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function sa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ca(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (ze & 2) !== 0) {
      var a = l.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t, t = _e(e), pe(e, null, n), t;
    }
    return Ja(e, l, t, n), _e(e);
  }
  function _i(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, pA(e, n);
    }
  }
  function Tc(e, t) {
    var n = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var a = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var s = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? a = u = s : u = u.next = s, n = n.next;
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
  var Nc = !1;
  function Li() {
    if (Nc) {
      var e = Xu;
      if (e !== null) throw e;
    }
  }
  function Vi(e, t, n, l) {
    Nc = !1;
    var a = e.updateQueue;
    Aa = !1;
    var u = a.firstBaseUpdate, s = a.lastBaseUpdate, f = a.shared.pending;
    if (f !== null) {
      a.shared.pending = null;
      var y = f, T = y.next;
      y.next = null, s === null ? u = T : s.next = T, s = y;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, f = q.lastBaseUpdate, f !== s && (f === null ? q.firstBaseUpdate = T : f.next = T, q.lastBaseUpdate = y));
    }
    if (u !== null) {
      var U = a.baseState;
      s = 0, q = T = y = null, f = u;
      do {
        var N = f.lane & -536870913, x = N !== f.lane;
        if (x ? (ge & N) === N : (l & N) === N) {
          N !== 0 && N === Hu && (Nc = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var Y = e, Q = f;
            N = t;
            var De = n;
            switch (Q.tag) {
              case 1:
                if (Y = Q.payload, typeof Y == "function") {
                  U = Y.call(De, U, N);
                  break e;
                }
                U = Y;
                break e;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = Q.payload, N = typeof Y == "function" ? Y.call(De, U, N) : Y, N == null) break e;
                U = Z({}, U, N);
                break e;
              case 2:
                Aa = !0;
            }
          }
          N = f.callback, N !== null && (e.flags |= 64, x && (e.flags |= 8192), x = a.callbacks, x === null ? a.callbacks = [N] : x.push(N));
        } else
          x = {
            lane: N,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, q === null ? (T = q = x, y = U) : q = q.next = x, s |= N;
        if (f = f.next, f === null) {
          if (f = a.shared.pending, f === null)
            break;
          x = f, f = x.next, x.next = null, a.lastBaseUpdate = x, a.shared.pending = null;
        }
      } while (!0);
      q === null && (y = U), a.baseState = y, a.firstBaseUpdate = T, a.lastBaseUpdate = q, u === null && (a.shared.lanes = 0), ma |= s, e.lanes = s, e.memoizedState = U;
    }
  }
  function Co(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function Uo(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Co(n[e], t);
  }
  var Yu = p(null), WA = p(0);
  function wo(e, t) {
    e = Hl, V(WA, e), V(Yu, t), Hl = e | t.baseLanes;
  }
  function Ec() {
    V(WA, Hl), V(Yu, Yu.current);
  }
  function xc() {
    Hl = WA.current, C(Yu), C(WA);
  }
  var fn = p(null), wn = null;
  function ra(e) {
    var t = e.alternate;
    V(at, at.current & 1), V(fn, e), wn === null && (t === null || Yu.current !== null || t.memoizedState !== null) && (wn = e);
  }
  function Rc(e) {
    V(at, at.current), V(fn, e), wn === null && (wn = e);
  }
  function Do(e) {
    e.tag === 22 ? (V(at, at.current), V(fn, e), wn === null && (wn = e)) : oa();
  }
  function oa() {
    V(at, at.current), V(fn, fn.current);
  }
  function dn(e) {
    C(fn), wn === e && (wn = null), C(at);
  }
  var at = p(0);
  function FA(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Cr(n) || Ur(n)))
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
  var jl = 0, ne = null, Ue = null, ft = null, PA = !1, Zu = !1, nu = !1, IA = 0, Hi = 0, ku = null, ah = 0;
  function nt() {
    throw Error(c(321));
  }
  function qc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!ct(e[n], t[n])) return !1;
    return !0;
  }
  function Mc(e, t, n, l, a, u) {
    return jl = u, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R.H = e === null || e.memoizedState === null ? vf : Yc, nu = !1, u = n(l, a), nu = !1, Zu && (u = Lo(
      t,
      n,
      l,
      a
    )), _o(e), u;
  }
  function _o(e) {
    R.H = Gi;
    var t = Ue !== null && Ue.next !== null;
    if (jl = 0, ft = Ue = ne = null, PA = !1, Hi = 0, ku = null, t) throw Error(c(300));
    e === null || dt || (e = e.dependencies, e !== null && GA(e) && (dt = !0));
  }
  function Lo(e, t, n, l) {
    ne = e;
    var a = 0;
    do {
      if (Zu && (ku = null), Hi = 0, Zu = !1, 25 <= a) throw Error(c(301));
      if (a += 1, ft = Ue = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      R.H = bf, u = t(n, l);
    } while (Zu);
    return u;
  }
  function uh() {
    var e = R.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Xi(t) : t, e = e.useState()[0], (Ue !== null ? Ue.memoizedState : null) !== e && (ne.flags |= 1024), t;
  }
  function zc() {
    var e = IA !== 0;
    return IA = 0, e;
  }
  function Oc(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function jc(e) {
    if (PA) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      PA = !1;
    }
    jl = 0, ft = Ue = ne = null, Zu = !1, Hi = IA = 0, ku = null;
  }
  function Jt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ft === null ? ne.memoizedState = ft = e : ft = ft.next = e, ft;
  }
  function ut() {
    if (Ue === null) {
      var e = ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ue.next;
    var t = ft === null ? ne.memoizedState : ft.next;
    if (t !== null)
      ft = t, Ue = e;
    else {
      if (e === null)
        throw ne.alternate === null ? Error(c(467)) : Error(c(310));
      Ue = e, e = {
        memoizedState: Ue.memoizedState,
        baseState: Ue.baseState,
        baseQueue: Ue.baseQueue,
        queue: Ue.queue,
        next: null
      }, ft === null ? ne.memoizedState = ft = e : ft = ft.next = e;
    }
    return ft;
  }
  function $A() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Xi(e) {
    var t = Hi;
    return Hi += 1, ku === null && (ku = []), e = qo(ku, e, t), t = ne, (ft === null ? t.memoizedState : ft.next) === null && (t = t.alternate, R.H = t === null || t.memoizedState === null ? vf : Yc), e;
  }
  function es(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Xi(e);
      if (e.$$typeof === Te) return Ut(e);
    }
    throw Error(c(438, String(e)));
  }
  function Cc(e) {
    var t = null, n = ne.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = ne.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = $A(), ne.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = Hn;
    return t.index++, n;
  }
  function Cl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ts(e) {
    var t = ut();
    return Uc(t, Ue, e);
  }
  function Uc(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = n;
    var a = e.baseQueue, u = l.pending;
    if (u !== null) {
      if (a !== null) {
        var s = a.next;
        a.next = u.next, u.next = s;
      }
      t.baseQueue = a = u, l.pending = null;
    }
    if (u = e.baseState, a === null) e.memoizedState = u;
    else {
      t = a.next;
      var f = s = null, y = null, T = t, q = !1;
      do {
        var U = T.lane & -536870913;
        if (U !== T.lane ? (ge & U) === U : (jl & U) === U) {
          var N = T.revertLane;
          if (N === 0)
            y !== null && (y = y.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }), U === Hu && (q = !0);
          else if ((jl & N) === N) {
            T = T.next, N === Hu && (q = !0);
            continue;
          } else
            U = {
              lane: 0,
              revertLane: T.revertLane,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }, y === null ? (f = y = U, s = u) : y = y.next = U, ne.lanes |= N, ma |= N;
          U = T.action, nu && n(u, U), u = T.hasEagerState ? T.eagerState : n(u, U);
        } else
          N = {
            lane: U,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          }, y === null ? (f = y = N, s = u) : y = y.next = N, ne.lanes |= U, ma |= U;
        T = T.next;
      } while (T !== null && T !== t);
      if (y === null ? s = u : y.next = f, !ct(u, e.memoizedState) && (dt = !0, q && (n = Xu, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = s, e.baseQueue = y, l.lastRenderedState = u;
    }
    return a === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function wc(e) {
    var t = ut(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, a = n.pending, u = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var s = a = a.next;
      do
        u = e(u, s.action), s = s.next;
      while (s !== a);
      ct(u, t.memoizedState) || (dt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, l];
  }
  function Vo(e, t, n) {
    var l = ne, a = ut(), u = be;
    if (u) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var s = !ct(
      (Ue || a).memoizedState,
      n
    );
    if (s && (a.memoizedState = n, dt = !0), a = a.queue, Lc(Bo.bind(null, l, a, e), [
      e
    ]), a.getSnapshot !== t || s || ft !== null && ft.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ku(
        9,
        { destroy: void 0 },
        Xo.bind(
          null,
          l,
          a,
          n,
          t
        ),
        null
      ), Le === null) throw Error(c(349));
      u || (jl & 127) !== 0 || Ho(l, t, n);
    }
    return n;
  }
  function Ho(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ne.updateQueue, t === null ? (t = $A(), ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Xo(e, t, n, l) {
    t.value = n, t.getSnapshot = l, Go(t) && Yo(e);
  }
  function Bo(e, t, n) {
    return n(function() {
      Go(t) && Yo(e);
    });
  }
  function Go(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ct(e, n);
    } catch {
      return !0;
    }
  }
  function Yo(e) {
    var t = B(e, 2);
    t !== null && an(t, e, 2);
  }
  function Dc(e) {
    var t = Jt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), nu) {
        Ze(!0);
        try {
          n();
        } finally {
          Ze(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Cl,
      lastRenderedState: e
    }, t;
  }
  function Zo(e, t, n, l) {
    return e.baseState = n, Uc(
      e,
      Ue,
      typeof l == "function" ? l : Cl
    );
  }
  function ih(e, t, n, l, a) {
    if (as(e)) throw Error(c(485));
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
        then: function(s) {
          u.listeners.push(s);
        }
      };
      R.T !== null ? n(!0) : u.isTransition = !1, l(u), n = t.pending, n === null ? (u.next = t.pending = u, ko(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function ko(e, t) {
    var n = t.action, l = t.payload, a = e.state;
    if (t.isTransition) {
      var u = R.T, s = {};
      R.T = s;
      try {
        var f = n(a, l), y = R.S;
        y !== null && y(s, f), Ko(e, t, f);
      } catch (T) {
        _c(e, t, T);
      } finally {
        u !== null && s.types !== null && (u.types = s.types), R.T = u;
      }
    } else
      try {
        u = n(a, l), Ko(e, t, u);
      } catch (T) {
        _c(e, t, T);
      }
  }
  function Ko(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        Jo(e, t, l);
      },
      function(l) {
        return _c(e, t, l);
      }
    ) : Jo(e, t, n);
  }
  function Jo(e, t, n) {
    t.status = "fulfilled", t.value = n, Qo(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, ko(e, n)));
  }
  function _c(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, Qo(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Qo(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Wo(e, t) {
    return t;
  }
  function Fo(e, t) {
    if (be) {
      var n = Le.formState;
      if (n !== null) {
        e: {
          var l = ne;
          if (be) {
            if (Ge) {
              t: {
                for (var a = Ge, u = Un; a.nodeType !== 8; ) {
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
    return n = Jt(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wo,
      lastRenderedState: t
    }, n.queue = l, n = yf.bind(
      null,
      ne,
      l
    ), l.dispatch = n, l = Dc(!1), u = Gc.bind(
      null,
      ne,
      !1,
      l.queue
    ), l = Jt(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = a, n = ih.bind(
      null,
      ne,
      a,
      u,
      n
    ), a.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function Po(e) {
    var t = ut();
    return Io(t, Ue, e);
  }
  function Io(e, t, n) {
    if (t = Uc(
      e,
      t,
      Wo
    )[0], e = ts(Cl)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Xi(t);
      } catch (s) {
        throw s === Bu ? kA : s;
      }
    else l = t;
    t = ut();
    var a = t.queue, u = a.dispatch;
    return n !== t.memoizedState && (ne.flags |= 2048, Ku(
      9,
      { destroy: void 0 },
      Ah.bind(null, a, n),
      null
    )), [l, u, e];
  }
  function Ah(e, t) {
    e.action = t;
  }
  function $o(e) {
    var t = ut(), n = Ue;
    if (n !== null)
      return Io(t, n, e);
    ut(), t = t.memoizedState, n = ut();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function Ku(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = ne.updateQueue, t === null && (t = $A(), ne.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function ef() {
    return ut().memoizedState;
  }
  function ns(e, t, n, l) {
    var a = Jt();
    ne.flags |= e, a.memoizedState = Ku(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function ls(e, t, n, l) {
    var a = ut();
    l = l === void 0 ? null : l;
    var u = a.memoizedState.inst;
    Ue !== null && l !== null && qc(l, Ue.memoizedState.deps) ? a.memoizedState = Ku(t, u, n, l) : (ne.flags |= e, a.memoizedState = Ku(
      1 | t,
      u,
      n,
      l
    ));
  }
  function tf(e, t) {
    ns(8390656, 8, e, t);
  }
  function Lc(e, t) {
    ls(2048, 8, e, t);
  }
  function sh(e) {
    ne.flags |= 4;
    var t = ne.updateQueue;
    if (t === null)
      t = $A(), ne.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function nf(e) {
    var t = ut().memoizedState;
    return sh({ ref: t, nextImpl: e }), function() {
      if ((ze & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function lf(e, t) {
    return ls(4, 2, e, t);
  }
  function af(e, t) {
    return ls(4, 4, e, t);
  }
  function uf(e, t) {
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
  function Af(e, t, n) {
    n = n != null ? n.concat([e]) : null, ls(4, 4, uf.bind(null, t, e), n);
  }
  function Vc() {
  }
  function sf(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && qc(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function cf(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && qc(t, l[1]))
      return l[0];
    if (l = e(), nu) {
      Ze(!0);
      try {
        e();
      } finally {
        Ze(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function Hc(e, t, n) {
    return n === void 0 || (jl & 1073741824) !== 0 && (ge & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = rd(), ne.lanes |= e, ma |= e, n);
  }
  function rf(e, t, n, l) {
    return ct(n, t) ? n : Yu.current !== null ? (e = Hc(e, n, l), ct(e, t) || (dt = !0), e) : (jl & 42) === 0 || (jl & 1073741824) !== 0 && (ge & 261930) === 0 ? (dt = !0, e.memoizedState = n) : (e = rd(), ne.lanes |= e, ma |= e, t);
  }
  function of(e, t, n, l, a) {
    var u = L.p;
    L.p = u !== 0 && 8 > u ? u : 8;
    var s = R.T, f = {};
    R.T = f, Gc(e, !1, t, n);
    try {
      var y = a(), T = R.S;
      if (T !== null && T(f, y), y !== null && typeof y == "object" && typeof y.then == "function") {
        var q = lh(
          y,
          l
        );
        Bi(
          e,
          t,
          q,
          yn(e)
        );
      } else
        Bi(
          e,
          t,
          l,
          yn(e)
        );
    } catch (U) {
      Bi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: U },
        yn()
      );
    } finally {
      L.p = u, s !== null && f.types !== null && (s.types = f.types), R.T = s;
    }
  }
  function ch() {
  }
  function Xc(e, t, n, l) {
    if (e.tag !== 5) throw Error(c(476));
    var a = ff(e).queue;
    of(
      e,
      a,
      t,
      K,
      n === null ? ch : function() {
        return df(e), n(l);
      }
    );
  }
  function ff(e) {
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
        lastRenderedReducer: Cl,
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
        lastRenderedReducer: Cl,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function df(e) {
    var t = ff(e);
    t.next === null && (t = e.alternate.memoizedState), Bi(
      e,
      t.next.queue,
      {},
      yn()
    );
  }
  function Bc() {
    return Ut(aA);
  }
  function mf() {
    return ut().memoizedState;
  }
  function hf() {
    return ut().memoizedState;
  }
  function rh(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = yn();
          e = sa(n);
          var l = ca(t, e, n);
          l !== null && (an(l, t, n), _i(l, t, n)), t = { cache: yc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function oh(e, t, n) {
    var l = yn();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, as(e) ? pf(t, n) : (n = Uu(e, t, n, l), n !== null && (an(n, e, l), gf(n, t, l)));
  }
  function yf(e, t, n) {
    var l = yn();
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
    if (as(e)) pf(t, a);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var s = t.lastRenderedState, f = u(s, n);
          if (a.hasEagerState = !0, a.eagerState = f, ct(f, s))
            return Ja(e, t, a, 0), Le === null && Ka(), !1;
        } catch {
        }
      if (n = Uu(e, t, a, l), n !== null)
        return an(n, e, l), gf(n, t, l), !0;
    }
    return !1;
  }
  function Gc(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: br(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, as(e)) {
      if (t) throw Error(c(479));
    } else
      t = Uu(
        e,
        n,
        l,
        2
      ), t !== null && an(t, e, 2);
  }
  function as(e) {
    var t = e.alternate;
    return e === ne || t !== null && t === ne;
  }
  function pf(e, t) {
    Zu = PA = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function gf(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, pA(e, n);
    }
  }
  var Gi = {
    readContext: Ut,
    use: es,
    useCallback: nt,
    useContext: nt,
    useEffect: nt,
    useImperativeHandle: nt,
    useLayoutEffect: nt,
    useInsertionEffect: nt,
    useMemo: nt,
    useReducer: nt,
    useRef: nt,
    useState: nt,
    useDebugValue: nt,
    useDeferredValue: nt,
    useTransition: nt,
    useSyncExternalStore: nt,
    useId: nt,
    useHostTransitionStatus: nt,
    useFormState: nt,
    useActionState: nt,
    useOptimistic: nt,
    useMemoCache: nt,
    useCacheRefresh: nt
  };
  Gi.useEffectEvent = nt;
  var vf = {
    readContext: Ut,
    use: es,
    useCallback: function(e, t) {
      return Jt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Ut,
    useEffect: tf,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, ns(
        4194308,
        4,
        uf.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return ns(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      ns(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Jt();
      t = t === void 0 ? null : t;
      var l = e();
      if (nu) {
        Ze(!0);
        try {
          e();
        } finally {
          Ze(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = Jt();
      if (n !== void 0) {
        var a = n(t);
        if (nu) {
          Ze(!0);
          try {
            n(t);
          } finally {
            Ze(!1);
          }
        }
      } else a = t;
      return l.memoizedState = l.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, l.queue = e, e = e.dispatch = oh.bind(
        null,
        ne,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = Jt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Dc(e);
      var t = e.queue, n = yf.bind(null, ne, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Vc,
    useDeferredValue: function(e, t) {
      var n = Jt();
      return Hc(n, e, t);
    },
    useTransition: function() {
      var e = Dc(!1);
      return e = of.bind(
        null,
        ne,
        e.queue,
        !0,
        !1
      ), Jt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = ne, a = Jt();
      if (be) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), Le === null)
          throw Error(c(349));
        (ge & 127) !== 0 || Ho(l, t, n);
      }
      a.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return a.queue = u, tf(Bo.bind(null, l, u, e), [
        e
      ]), l.flags |= 2048, Ku(
        9,
        { destroy: void 0 },
        Xo.bind(
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
      var e = Jt(), t = Le.identifierPrefix;
      if (be) {
        var n = fl, l = ol;
        n = (l & ~(1 << 32 - Rt(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = IA++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = ah++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Bc,
    useFormState: Fo,
    useActionState: Fo,
    useOptimistic: function(e) {
      var t = Jt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Gc.bind(
        null,
        ne,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Cc,
    useCacheRefresh: function() {
      return Jt().memoizedState = rh.bind(
        null,
        ne
      );
    },
    useEffectEvent: function(e) {
      var t = Jt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((ze & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Yc = {
    readContext: Ut,
    use: es,
    useCallback: sf,
    useContext: Ut,
    useEffect: Lc,
    useImperativeHandle: Af,
    useInsertionEffect: lf,
    useLayoutEffect: af,
    useMemo: cf,
    useReducer: ts,
    useRef: ef,
    useState: function() {
      return ts(Cl);
    },
    useDebugValue: Vc,
    useDeferredValue: function(e, t) {
      var n = ut();
      return rf(
        n,
        Ue.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ts(Cl)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : Xi(e),
        t
      ];
    },
    useSyncExternalStore: Vo,
    useId: mf,
    useHostTransitionStatus: Bc,
    useFormState: Po,
    useActionState: Po,
    useOptimistic: function(e, t) {
      var n = ut();
      return Zo(n, Ue, e, t);
    },
    useMemoCache: Cc,
    useCacheRefresh: hf
  };
  Yc.useEffectEvent = nf;
  var bf = {
    readContext: Ut,
    use: es,
    useCallback: sf,
    useContext: Ut,
    useEffect: Lc,
    useImperativeHandle: Af,
    useInsertionEffect: lf,
    useLayoutEffect: af,
    useMemo: cf,
    useReducer: wc,
    useRef: ef,
    useState: function() {
      return wc(Cl);
    },
    useDebugValue: Vc,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Ue === null ? Hc(n, e, t) : rf(
        n,
        Ue.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = wc(Cl)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : Xi(e),
        t
      ];
    },
    useSyncExternalStore: Vo,
    useId: mf,
    useHostTransitionStatus: Bc,
    useFormState: $o,
    useActionState: $o,
    useOptimistic: function(e, t) {
      var n = ut();
      return Ue !== null ? Zo(n, Ue, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Cc,
    useCacheRefresh: hf
  };
  bf.useEffectEvent = nf;
  function Zc(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : Z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var kc = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = yn(), a = sa(l);
      a.payload = t, n != null && (a.callback = n), t = ca(e, a, l), t !== null && (an(t, e, l), _i(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = yn(), a = sa(l);
      a.tag = 1, a.payload = t, n != null && (a.callback = n), t = ca(e, a, l), t !== null && (an(t, e, l), _i(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = yn(), l = sa(n);
      l.tag = 2, t != null && (l.callback = t), t = ca(e, l, n), t !== null && (an(t, e, n), _i(t, e, n));
    }
  };
  function Sf(e, t, n, l, a, u, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, s) : t.prototype && t.prototype.isPureReactComponent ? !Fn(n, l) || !Fn(a, u) : !0;
  }
  function Tf(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && kc.enqueueReplaceState(t, t.state, null);
  }
  function lu(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = Z({}, n));
      for (var a in e)
        n[a] === void 0 && (n[a] = e[a]);
    }
    return n;
  }
  function Nf(e) {
    zn(e);
  }
  function Ef(e) {
    console.error(e);
  }
  function xf(e) {
    zn(e);
  }
  function us(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Rf(e, t, n) {
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
  function Kc(e, t, n) {
    return n = sa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      us(e, t);
    }, n;
  }
  function qf(e) {
    return e = sa(e), e.tag = 3, e;
  }
  function Mf(e, t, n, l) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = l.value;
      e.payload = function() {
        return a(u);
      }, e.callback = function() {
        Rf(t, n, l);
      };
    }
    var s = n.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
      Rf(t, n, l), typeof a != "function" && (ha === null ? ha = /* @__PURE__ */ new Set([this]) : ha.add(this));
      var f = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function fh(e, t, n, l, a) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && Vu(
        t,
        n,
        a,
        !0
      ), n = fn.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return wn === null ? ps() : n.alternate === null && lt === 0 && (lt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, l === KA ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), pr(e, l, a)), !1;
          case 22:
            return n.flags |= 65536, l === KA ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), pr(e, l, a)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return pr(e, l, a), ps(), !1;
    }
    if (be)
      return t = fn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, l !== oc && (e = Error(c(422), { cause: l }), ji(On(e, n)))) : (l !== oc && (t = Error(c(423), {
        cause: l
      }), ji(
        On(t, n)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, l = On(l, n), a = Kc(
        e.stateNode,
        l,
        a
      ), Tc(e, a), lt !== 4 && (lt = 2)), !1;
    var u = Error(c(520), { cause: l });
    if (u = On(u, n), Fi === null ? Fi = [u] : Fi.push(u), lt !== 4 && (lt = 2), t === null) return !0;
    l = On(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Kc(n.stateNode, l, e), Tc(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (ha === null || !ha.has(u))))
            return n.flags |= 65536, a &= -a, n.lanes |= a, a = qf(a), Mf(
              a,
              e,
              n,
              l
            ), Tc(n, a), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Jc = Error(c(461)), dt = !1;
  function wt(e, t, n, l) {
    t.child = e === null ? jo(t, null, n, l) : tu(
      t,
      e.child,
      n,
      l
    );
  }
  function zf(e, t, n, l, a) {
    n = n.render;
    var u = t.ref;
    if ("ref" in l) {
      var s = {};
      for (var f in l)
        f !== "ref" && (s[f] = l[f]);
    } else s = l;
    return Pa(t), l = Mc(
      e,
      t,
      n,
      s,
      u,
      a
    ), f = zc(), e !== null && !dt ? (Oc(e, t, a), Ul(e, t, a)) : (be && f && cc(t), t.flags |= 1, wt(e, t, l, a), t.child);
  }
  function Of(e, t, n, l, a) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !wu(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, jf(
        e,
        t,
        u,
        l,
        a
      )) : (e = XA(
        n.type,
        null,
        l,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !tr(e, a)) {
      var s = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Fn, n(s, l) && e.ref === t.ref)
        return Ul(e, t, a);
    }
    return t.flags |= 1, e = ql(u, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function jf(e, t, n, l, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Fn(u, l) && e.ref === t.ref)
        if (dt = !1, t.pendingProps = l = u, tr(e, a))
          (e.flags & 131072) !== 0 && (dt = !0);
        else
          return t.lanes = e.lanes, Ul(e, t, a);
    }
    return Qc(
      e,
      t,
      n,
      l,
      a
    );
  }
  function Cf(e, t, n, l) {
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
        return Uf(
          e,
          t,
          u,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ZA(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? wo(t, u) : Ec(), Do(t);
      else
        return l = t.lanes = 536870912, Uf(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          l
        );
    } else
      u !== null ? (ZA(t, u.cachePool), wo(t, u), oa(), t.memoizedState = null) : (e !== null && ZA(t, null), Ec(), oa());
    return wt(e, t, a, n), t.child;
  }
  function Yi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Uf(e, t, n, l, a) {
    var u = gc();
    return u = u === null ? null : { parent: ot._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && ZA(t, null), Ec(), Do(t), e !== null && Vu(e, t, l, !0), t.childLanes = a, null;
  }
  function is(e, t) {
    return t = ss(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function wf(e, t, n) {
    return tu(t, e.child, null, n), e = is(t, t.pendingProps), e.flags |= 2, dn(t), t.memoizedState = null, e;
  }
  function dh(e, t, n) {
    var l = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (be) {
        if (l.mode === "hidden")
          return e = is(t, l), t.lanes = 536870912, Yi(null, e);
        if (Rc(t), (e = Ge) ? (e = Kd(
          e,
          Un
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: la !== null ? { id: ol, overflow: fl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = yo(e), n.return = t, t.child = n, Ct = t, Ge = null)) : e = null, e === null) throw ua(t);
        return t.lanes = 536870912, null;
      }
      return is(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var s = u.dehydrated;
      if (Rc(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = wf(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (dt || Vu(e, t, n, !1), a = (n & e.childLanes) !== 0, dt || a) {
        if (l = Le, l !== null && (s = ri(l, n), s !== 0 && s !== u.retryLane))
          throw u.retryLane = s, B(e, s), an(l, e, s), Jc;
        ps(), t = wf(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, Ge = Dn(s.nextSibling), Ct = t, be = !0, aa = null, Un = !1, e !== null && vo(t, e), t = is(t, l), t.flags |= 4096;
      return t;
    }
    return e = ql(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function As(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Qc(e, t, n, l, a) {
    return Pa(t), n = Mc(
      e,
      t,
      n,
      l,
      void 0,
      a
    ), l = zc(), e !== null && !dt ? (Oc(e, t, a), Ul(e, t, a)) : (be && l && cc(t), t.flags |= 1, wt(e, t, n, a), t.child);
  }
  function Df(e, t, n, l, a, u) {
    return Pa(t), t.updateQueue = null, n = Lo(
      t,
      l,
      n,
      a
    ), _o(e), l = zc(), e !== null && !dt ? (Oc(e, t, u), Ul(e, t, u)) : (be && l && cc(t), t.flags |= 1, wt(e, t, n, u), t.child);
  }
  function _f(e, t, n, l, a) {
    if (Pa(t), t.stateNode === null) {
      var u = rt, s = n.contextType;
      typeof s == "object" && s !== null && (u = Ut(s)), u = new n(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = kc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, bc(t), s = n.contextType, u.context = typeof s == "object" && s !== null ? Ut(s) : rt, u.state = t.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && (Zc(
        t,
        n,
        s,
        l
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (s = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), s !== u.state && kc.enqueueReplaceState(u, u.state, null), Vi(t, l, u, a), Li(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      u = t.stateNode;
      var f = t.memoizedProps, y = lu(n, f);
      u.props = y;
      var T = u.context, q = n.contextType;
      s = rt, typeof q == "object" && q !== null && (s = Ut(q));
      var U = n.getDerivedStateFromProps;
      q = typeof U == "function" || typeof u.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, q || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f || T !== s) && Tf(
        t,
        u,
        l,
        s
      ), Aa = !1;
      var N = t.memoizedState;
      u.state = N, Vi(t, l, u, a), Li(), T = t.memoizedState, f || N !== T || Aa ? (typeof U == "function" && (Zc(
        t,
        n,
        U,
        l
      ), T = t.memoizedState), (y = Aa || Sf(
        t,
        n,
        y,
        l,
        N,
        T,
        s
      )) ? (q || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = T), u.props = l, u.state = T, u.context = s, l = y) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      u = t.stateNode, Sc(e, t), s = t.memoizedProps, q = lu(n, s), u.props = q, U = t.pendingProps, N = u.context, T = n.contextType, y = rt, typeof T == "object" && T !== null && (y = Ut(T)), f = n.getDerivedStateFromProps, (T = typeof f == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s !== U || N !== y) && Tf(
        t,
        u,
        l,
        y
      ), Aa = !1, N = t.memoizedState, u.state = N, Vi(t, l, u, a), Li();
      var x = t.memoizedState;
      s !== U || N !== x || Aa || e !== null && e.dependencies !== null && GA(e.dependencies) ? (typeof f == "function" && (Zc(
        t,
        n,
        f,
        l
      ), x = t.memoizedState), (q = Aa || Sf(
        t,
        n,
        q,
        l,
        N,
        x,
        y
      ) || e !== null && e.dependencies !== null && GA(e.dependencies)) ? (T || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, x, y), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        x,
        y
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = x), u.props = l, u.state = x, u.context = y, l = q) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return u = l, As(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = tu(
      t,
      e.child,
      null,
      a
    ), t.child = tu(
      t,
      null,
      n,
      a
    )) : wt(e, t, n, a), t.memoizedState = u.state, e = t.child) : e = Ul(
      e,
      t,
      a
    ), e;
  }
  function Lf(e, t, n, l) {
    return Wa(), t.flags |= 256, wt(e, t, n, l), t.child;
  }
  var Wc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Fc(e) {
    return { baseLanes: e, cachePool: xo() };
  }
  function Pc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= hn), e;
  }
  function Vf(e, t, n) {
    var l = t.pendingProps, a = !1, u = (t.flags & 128) !== 0, s;
    if ((s = u) || (s = e !== null && e.memoizedState === null ? !1 : (at.current & 2) !== 0), s && (a = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (be) {
        if (a ? ra(t) : oa(), (e = Ge) ? (e = Kd(
          e,
          Un
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: la !== null ? { id: ol, overflow: fl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = yo(e), n.return = t, t.child = n, Ct = t, Ge = null)) : e = null, e === null) throw ua(t);
        return Ur(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var f = l.children;
      return l = l.fallback, a ? (oa(), a = t.mode, f = ss(
        { mode: "hidden", children: f },
        a
      ), l = Qa(
        l,
        a,
        n,
        null
      ), f.return = t, l.return = t, f.sibling = l, t.child = f, l = t.child, l.memoizedState = Fc(n), l.childLanes = Pc(
        e,
        s,
        n
      ), t.memoizedState = Wc, Yi(null, l)) : (ra(t), Ic(t, f));
    }
    var y = e.memoizedState;
    if (y !== null && (f = y.dehydrated, f !== null)) {
      if (u)
        t.flags & 256 ? (ra(t), t.flags &= -257, t = $c(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (oa(), t.child = e.child, t.flags |= 128, t = null) : (oa(), f = l.fallback, a = t.mode, l = ss(
          { mode: "visible", children: l.children },
          a
        ), f = Qa(
          f,
          a,
          n,
          null
        ), f.flags |= 2, l.return = t, f.return = t, l.sibling = f, t.child = l, tu(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = Fc(n), l.childLanes = Pc(
          e,
          s,
          n
        ), t.memoizedState = Wc, t = Yi(null, l));
      else if (ra(t), Ur(f)) {
        if (s = f.nextSibling && f.nextSibling.dataset, s) var T = s.dgst;
        s = T, l = Error(c(419)), l.stack = "", l.digest = s, ji({ value: l, source: null, stack: null }), t = $c(
          e,
          t,
          n
        );
      } else if (dt || Vu(e, t, n, !1), s = (n & e.childLanes) !== 0, dt || s) {
        if (s = Le, s !== null && (l = ri(s, n), l !== 0 && l !== y.retryLane))
          throw y.retryLane = l, B(e, l), an(s, e, l), Jc;
        Cr(f) || ps(), t = $c(
          e,
          t,
          n
        );
      } else
        Cr(f) ? (t.flags |= 192, t.child = e.child, t = null) : (e = y.treeContext, Ge = Dn(
          f.nextSibling
        ), Ct = t, be = !0, aa = null, Un = !1, e !== null && vo(t, e), t = Ic(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (oa(), f = l.fallback, a = t.mode, y = e.child, T = y.sibling, l = ql(y, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = y.subtreeFlags & 65011712, T !== null ? f = ql(
      T,
      f
    ) : (f = Qa(
      f,
      a,
      n,
      null
    ), f.flags |= 2), f.return = t, l.return = t, l.sibling = f, t.child = l, Yi(null, l), l = t.child, f = e.child.memoizedState, f === null ? f = Fc(n) : (a = f.cachePool, a !== null ? (y = ot._currentValue, a = a.parent !== y ? { parent: y, pool: y } : a) : a = xo(), f = {
      baseLanes: f.baseLanes | n,
      cachePool: a
    }), l.memoizedState = f, l.childLanes = Pc(
      e,
      s,
      n
    ), t.memoizedState = Wc, Yi(e.child, l)) : (ra(t), n = e.child, e = n.sibling, n = ql(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Ic(e, t) {
    return t = ss(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function ss(e, t) {
    return e = jt(22, e, null, t), e.lanes = 0, e;
  }
  function $c(e, t, n) {
    return tu(t, e.child, null, n), e = Ic(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Hf(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), mc(e.return, t, n);
  }
  function er(e, t, n, l, a, u) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: a,
      treeForkCount: u
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = l, s.tail = n, s.tailMode = a, s.treeForkCount = u);
  }
  function Xf(e, t, n) {
    var l = t.pendingProps, a = l.revealOrder, u = l.tail;
    l = l.children;
    var s = at.current, f = (s & 2) !== 0;
    if (f ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, V(at, s), wt(e, t, l, n), l = be ? Oi : 0, !f && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Hf(e, n, t);
        else if (e.tag === 19)
          Hf(e, n, t);
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
          e = n.alternate, e !== null && FA(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), er(
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
          if (e = a.alternate, e !== null && FA(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        er(
          t,
          !0,
          n,
          null,
          u,
          l
        );
        break;
      case "together":
        er(
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
  function Ul(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ma |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Vu(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(c(153));
    if (t.child !== null) {
      for (e = t.child, n = ql(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = ql(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function tr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && GA(e)));
  }
  function mh(e, t, n) {
    switch (t.tag) {
      case 3:
        oe(t, t.stateNode.containerInfo), ia(t, ot, e.memoizedState.cache), Wa();
        break;
      case 27:
      case 5:
        el(t);
        break;
      case 4:
        oe(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, Rc(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (ra(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Vf(e, t, n) : (ra(t), e = Ul(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        ra(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (Vu(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), a) {
          if (l)
            return Xf(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), V(at, at.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Cf(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        ia(t, ot, e.memoizedState.cache);
    }
    return Ul(e, t, n);
  }
  function Bf(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        dt = !0;
      else {
        if (!tr(e, n) && (t.flags & 128) === 0)
          return dt = !1, mh(
            e,
            t,
            n
          );
        dt = (e.flags & 131072) !== 0;
      }
    else
      dt = !1, be && (t.flags & 1048576) !== 0 && go(t, Oi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = $a(t.elementType), t.type = e, typeof e == "function")
            wu(e) ? (l = lu(e, l), t.tag = 1, t = _f(
              null,
              t,
              e,
              l,
              n
            )) : (t.tag = 0, t = Qc(
              null,
              t,
              e,
              l,
              n
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === Ee) {
                t.tag = 11, t = zf(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (a === $) {
                t.tag = 14, t = Of(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              }
            }
            throw t = Xt(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return Qc(
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
        ), _f(
          e,
          t,
          l,
          a,
          n
        );
      case 3:
        e: {
          if (oe(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          a = u.element, Sc(e, t), Vi(t, l, null, n);
          var s = t.memoizedState;
          if (l = s.cache, ia(t, ot, l), l !== u.cache && hc(
            t,
            [ot],
            n,
            !0
          ), Li(), l = s.element, u.isDehydrated)
            if (u = {
              element: l,
              isDehydrated: !1,
              cache: s.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Lf(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== a) {
              a = On(
                Error(c(424)),
                t
              ), ji(a), t = Lf(
                e,
                t,
                l,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ge = Dn(e.firstChild), Ct = t, be = !0, aa = null, Un = !0, n = jo(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Wa(), l === a) {
              t = Ul(
                e,
                t,
                n
              );
              break e;
            }
            wt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return As(e, t), e === null ? (n = Id(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : be || (n = t.type, e = t.pendingProps, l = Es(
          ae.current
        ).createElement(n), l[ke] = t, l[At] = e, Dt(l, n, e), Qe(l), t.stateNode = l) : t.memoizedState = Id(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return el(t), e === null && be && (l = t.stateNode = Wd(
          t.type,
          t.pendingProps,
          ae.current
        ), Ct = t, Un = !0, a = Ge, va(t.type) ? (wr = a, Ge = Dn(l.firstChild)) : Ge = a), wt(
          e,
          t,
          t.pendingProps.children,
          n
        ), As(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && be && ((a = l = Ge) && (l = Zh(
          l,
          t.type,
          t.pendingProps,
          Un
        ), l !== null ? (t.stateNode = l, Ct = t, Ge = Dn(l.firstChild), Un = !1, a = !0) : a = !1), a || ua(t)), el(t), a = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, l = u.children, zr(a, u) ? l = null : s !== null && zr(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = Mc(
          e,
          t,
          uh,
          null,
          null,
          n
        ), aA._currentValue = a), As(e, t), wt(e, t, l, n), t.child;
      case 6:
        return e === null && be && ((e = n = Ge) && (n = kh(
          n,
          t.pendingProps,
          Un
        ), n !== null ? (t.stateNode = n, Ct = t, Ge = null, e = !0) : e = !1), e || ua(t)), null;
      case 13:
        return Vf(e, t, n);
      case 4:
        return oe(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = tu(
          t,
          null,
          l,
          n
        ) : wt(e, t, l, n), t.child;
      case 11:
        return zf(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return wt(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return wt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return wt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return l = t.pendingProps, ia(t, t.type, l.value), wt(e, t, l.children, n), t.child;
      case 9:
        return a = t.type._context, l = t.pendingProps.children, Pa(t), a = Ut(a), l = l(a), t.flags |= 1, wt(e, t, l, n), t.child;
      case 14:
        return Of(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return jf(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Xf(e, t, n);
      case 31:
        return dh(e, t, n);
      case 22:
        return Cf(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Pa(t), l = Ut(ot), e === null ? (a = gc(), a === null && (a = Le, u = yc(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= n), a = u), t.memoizedState = { parent: l, cache: a }, bc(t), ia(t, ot, a)) : ((e.lanes & n) !== 0 && (Sc(e, t), Vi(t, null, null, n), Li()), a = e.memoizedState, u = t.memoizedState, a.parent !== l ? (a = { parent: l, cache: l }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), ia(t, ot, l)) : (l = u.cache, ia(t, ot, l), l !== a.cache && hc(
          t,
          [ot],
          n,
          !0
        ))), wt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function wl(e) {
    e.flags |= 4;
  }
  function nr(e, t, n, l, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (md()) e.flags |= 8192;
        else
          throw eu = KA, vc;
    } else e.flags &= -16777217;
  }
  function Gf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !lm(t))
      if (md()) e.flags |= 8192;
      else
        throw eu = KA, vc;
  }
  function cs(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ci() : 536870912, e.lanes |= t, Fu |= t);
  }
  function Zi(e, t) {
    if (!be)
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
  function hh(e, t, n) {
    var l = t.pendingProps;
    switch (rc(t), t.tag) {
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
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Ol(ot), te(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Lu(t) ? wl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, fc())), Ye(t), null;
      case 26:
        var a = t.type, u = t.memoizedState;
        return e === null ? (wl(t), u !== null ? (Ye(t), Gf(t, u)) : (Ye(t), nr(
          t,
          a,
          null,
          l,
          n
        ))) : u ? u !== e.memoizedState ? (wl(t), Ye(t), Gf(t, u)) : (Ye(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && wl(t), Ye(t), nr(
          t,
          a,
          e,
          l,
          n
        )), null;
      case 27:
        if (he(t), n = ae.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && wl(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ye(t), null;
          }
          e = H.current, Lu(t) ? bo(t) : (e = Wd(a, l, n), t.stateNode = e, wl(t));
        }
        return Ye(t), null;
      case 5:
        if (he(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && wl(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ye(t), null;
          }
          if (u = H.current, Lu(t))
            bo(t);
          else {
            var s = Es(
              ae.current
            );
            switch (u) {
              case 1:
                u = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                u = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    u = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    u = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    u = s.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof l.is == "string" ? s.createElement("select", {
                      is: l.is
                    }) : s.createElement("select"), l.multiple ? u.multiple = !0 : l.size && (u.size = l.size);
                    break;
                  default:
                    u = typeof l.is == "string" ? s.createElement(a, { is: l.is }) : s.createElement(a);
                }
            }
            u[ke] = t, u[At] = l;
            e: for (s = t.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                u.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === t) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === t)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            t.stateNode = u;
            e: switch (Dt(u, a, l), a) {
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
            l && wl(t);
          }
        }
        return Ye(t), nr(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && wl(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(c(166));
          if (e = ae.current, Lu(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, a = Ct, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
            e[ke] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Vd(e.nodeValue, n)), e || ua(t, !0);
          } else
            e = Es(e).createTextNode(
              l
            ), e[ke] = t, t.stateNode = e;
        }
        return Ye(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Lu(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[ke] = t;
            } else
              Wa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ye(t), e = !1;
          } else
            n = fc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (dn(t), t) : (dn(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Ye(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = Lu(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(c(317));
              a[ke] = t;
            } else
              Wa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ye(t), a = !1;
          } else
            a = fc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (dn(t), t) : (dn(t), null);
        }
        return dn(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, a = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (a = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== a && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), cs(t, t.updateQueue), Ye(t), null);
      case 4:
        return te(), e === null && Er(t.stateNode.containerInfo), Ye(t), null;
      case 10:
        return Ol(t.type), Ye(t), null;
      case 19:
        if (C(at), l = t.memoizedState, l === null) return Ye(t), null;
        if (a = (t.flags & 128) !== 0, u = l.rendering, u === null)
          if (a) Zi(l, !1);
          else {
            if (lt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = FA(e), u !== null) {
                  for (t.flags |= 128, Zi(l, !1), e = u.updateQueue, t.updateQueue = e, cs(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    ho(n, e), n = n.sibling;
                  return V(
                    at,
                    at.current & 1 | 2
                  ), be && Ml(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && it() > ms && (t.flags |= 128, a = !0, Zi(l, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = FA(u), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, cs(t, e), Zi(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !be)
                return Ye(t), null;
            } else
              2 * it() - l.renderingStartTime > ms && n !== 536870912 && (t.flags |= 128, a = !0, Zi(l, !1), t.lanes = 4194304);
          l.isBackwards ? (u.sibling = t.child, t.child = u) : (e = l.last, e !== null ? e.sibling = u : t.child = u, l.last = u);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = it(), e.sibling = null, n = at.current, V(
          at,
          a ? n & 1 | 2 : n & 1
        ), be && Ml(t, l.treeForkCount), e) : (Ye(t), null);
      case 22:
      case 23:
        return dn(t), xc(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ye(t), n = t.updateQueue, n !== null && cs(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && C(Ia), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Ol(ot), Ye(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function yh(e, t) {
    switch (rc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ol(ot), te(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return he(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (dn(t), t.alternate === null)
            throw Error(c(340));
          Wa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (dn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          Wa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return C(at), null;
      case 4:
        return te(), null;
      case 10:
        return Ol(t.type), null;
      case 22:
      case 23:
        return dn(t), xc(), e !== null && C(Ia), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Ol(ot), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Yf(e, t) {
    switch (rc(t), t.tag) {
      case 3:
        Ol(ot), te();
        break;
      case 26:
      case 27:
      case 5:
        he(t);
        break;
      case 4:
        te();
        break;
      case 31:
        t.memoizedState !== null && dn(t);
        break;
      case 13:
        dn(t);
        break;
      case 19:
        C(at);
        break;
      case 10:
        Ol(t.type);
        break;
      case 22:
      case 23:
        dn(t), xc(), e !== null && C(Ia);
        break;
      case 24:
        Ol(ot);
    }
  }
  function ki(e, t) {
    try {
      var n = t.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var a = l.next;
        n = a;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var u = n.create, s = n.inst;
            l = u(), s.destroy = l;
          }
          n = n.next;
        } while (n !== a);
      }
    } catch (f) {
      Ce(t, t.return, f);
    }
  }
  function fa(e, t, n) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            var s = l.inst, f = s.destroy;
            if (f !== void 0) {
              s.destroy = void 0, a = t;
              var y = n, T = f;
              try {
                T();
              } catch (q) {
                Ce(
                  a,
                  y,
                  q
                );
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (q) {
      Ce(t, t.return, q);
    }
  }
  function Zf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Uo(t, n);
      } catch (l) {
        Ce(e, e.return, l);
      }
    }
  }
  function kf(e, t, n) {
    n.props = lu(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      Ce(e, t, l);
    }
  }
  function Ki(e, t) {
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
      Ce(e, t, a);
    }
  }
  function dl(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (a) {
          Ce(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (a) {
          Ce(e, t, a);
        }
      else n.current = null;
  }
  function Kf(e) {
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
      Ce(e, e.return, a);
    }
  }
  function lr(e, t, n) {
    try {
      var l = e.stateNode;
      Vh(l, e.type, n, t), l[At] = t;
    } catch (a) {
      Ce(e, e.return, a);
    }
  }
  function Jf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && va(e.type) || e.tag === 4;
  }
  function ar(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Jf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && va(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ur(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ul));
    else if (l !== 4 && (l === 27 && va(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (ur(e, t, n), e = e.sibling; e !== null; )
        ur(e, t, n), e = e.sibling;
  }
  function rs(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && va(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (rs(e, t, n), e = e.sibling; e !== null; )
        rs(e, t, n), e = e.sibling;
  }
  function Qf(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      Dt(t, l, n), t[ke] = e, t[At] = n;
    } catch (u) {
      Ce(e, e.return, u);
    }
  }
  var Dl = !1, mt = !1, ir = !1, Wf = typeof WeakSet == "function" ? WeakSet : Set, Mt = null;
  function ph(e, t) {
    if (e = e.containerInfo, qr = js, e = Ou(e), qi(e)) {
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
            var s = 0, f = -1, y = -1, T = 0, q = 0, U = e, N = null;
            t: for (; ; ) {
              for (var x; U !== n || a !== 0 && U.nodeType !== 3 || (f = s + a), U !== u || l !== 0 && U.nodeType !== 3 || (y = s + l), U.nodeType === 3 && (s += U.nodeValue.length), (x = U.firstChild) !== null; )
                N = U, U = x;
              for (; ; ) {
                if (U === e) break t;
                if (N === n && ++T === a && (f = s), N === u && ++q === l && (y = s), (x = U.nextSibling) !== null) break;
                U = N, N = U.parentNode;
              }
              U = x;
            }
            n = f === -1 || y === -1 ? null : { start: f, end: y };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Mr = { focusedElem: e, selectionRange: n }, js = !1, Mt = t; Mt !== null; )
      if (t = Mt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, Mt = e;
      else
        for (; Mt !== null; ) {
          switch (t = Mt, u = t.alternate, e = t.flags, t.tag) {
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
                  var Y = lu(
                    n.type,
                    a
                  );
                  e = l.getSnapshotBeforeUpdate(
                    Y,
                    u
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Q) {
                  Ce(
                    n,
                    n.return,
                    Q
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  jr(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      jr(e);
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
              if ((e & 1024) !== 0) throw Error(c(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Mt = e;
            break;
          }
          Mt = t.return;
        }
  }
  function Ff(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Ll(e, n), l & 4 && ki(5, n);
        break;
      case 1:
        if (Ll(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (s) {
              Ce(n, n.return, s);
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
            } catch (s) {
              Ce(
                n,
                n.return,
                s
              );
            }
          }
        l & 64 && Zf(n), l & 512 && Ki(n, n.return);
        break;
      case 3:
        if (Ll(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
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
            Uo(e, t);
          } catch (s) {
            Ce(n, n.return, s);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Qf(n);
      case 26:
      case 5:
        Ll(e, n), t === null && l & 4 && Kf(n), l & 512 && Ki(n, n.return);
        break;
      case 12:
        Ll(e, n);
        break;
      case 31:
        Ll(e, n), l & 4 && $f(e, n);
        break;
      case 13:
        Ll(e, n), l & 4 && ed(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Rh.bind(
          null,
          n
        ), Kh(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || Dl, !l) {
          t = t !== null && t.memoizedState !== null || mt, a = Dl;
          var u = mt;
          Dl = l, (mt = t) && !u ? Vl(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Ll(e, n), Dl = a, mt = u;
        }
        break;
      case 30:
        break;
      default:
        Ll(e, n);
    }
  }
  function Pf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Pf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && vl(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ke = null, en = !1;
  function _l(e, t, n) {
    for (n = n.child; n !== null; )
      If(e, t, n), n = n.sibling;
  }
  function If(e, t, n) {
    if (Me && typeof Me.onCommitFiberUnmount == "function")
      try {
        Me.onCommitFiberUnmount(vt, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        mt || dl(n, t), _l(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        mt || dl(n, t);
        var l = Ke, a = en;
        va(n.type) && (Ke = n.stateNode, en = !1), _l(
          e,
          t,
          n
        ), tA(n.stateNode), Ke = l, en = a;
        break;
      case 5:
        mt || dl(n, t);
      case 6:
        if (l = Ke, a = en, Ke = null, _l(
          e,
          t,
          n
        ), Ke = l, en = a, Ke !== null)
          if (en)
            try {
              (Ke.nodeType === 9 ? Ke.body : Ke.nodeName === "HTML" ? Ke.ownerDocument.body : Ke).removeChild(n.stateNode);
            } catch (u) {
              Ce(
                n,
                t,
                u
              );
            }
          else
            try {
              Ke.removeChild(n.stateNode);
            } catch (u) {
              Ce(
                n,
                t,
                u
              );
            }
        break;
      case 18:
        Ke !== null && (en ? (e = Ke, Zd(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), ai(e)) : Zd(Ke, n.stateNode));
        break;
      case 4:
        l = Ke, a = en, Ke = n.stateNode.containerInfo, en = !0, _l(
          e,
          t,
          n
        ), Ke = l, en = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        fa(2, n, t), mt || fa(4, n, t), _l(
          e,
          t,
          n
        );
        break;
      case 1:
        mt || (dl(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && kf(
          n,
          t,
          l
        )), _l(
          e,
          t,
          n
        );
        break;
      case 21:
        _l(
          e,
          t,
          n
        );
        break;
      case 22:
        mt = (l = mt) || n.memoizedState !== null, _l(
          e,
          t,
          n
        ), mt = l;
        break;
      default:
        _l(
          e,
          t,
          n
        );
    }
  }
  function $f(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ai(e);
      } catch (n) {
        Ce(t, t.return, n);
      }
    }
  }
  function ed(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ai(e);
      } catch (n) {
        Ce(t, t.return, n);
      }
  }
  function gh(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Wf()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Wf()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function os(e, t) {
    var n = gh(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var a = qh.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function tn(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l], u = e, s = t, f = s;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (va(f.type)) {
                Ke = f.stateNode, en = !1;
                break e;
              }
              break;
            case 5:
              Ke = f.stateNode, en = !1;
              break e;
            case 3:
            case 4:
              Ke = f.stateNode.containerInfo, en = !0;
              break e;
          }
          f = f.return;
        }
        if (Ke === null) throw Error(c(160));
        If(u, s, a), Ke = null, en = !1, u = a.alternate, u !== null && (u.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        td(t, e), t = t.sibling;
  }
  var Pn = null;
  function td(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        tn(t, e), nn(e), l & 4 && (fa(3, e, e.return), ki(3, e), fa(5, e, e.return));
        break;
      case 1:
        tn(t, e), nn(e), l & 512 && (mt || n === null || dl(n, n.return)), l & 64 && Dl && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var a = Pn;
        if (tn(t, e), nn(e), l & 512 && (mt || n === null || dl(n, n.return)), l & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (l) {
                    case "title":
                      u = a.getElementsByTagName("title")[0], (!u || u[Gn] || u[ke] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(l), a.head.insertBefore(
                        u,
                        a.querySelector("head > title")
                      )), Dt(u, l, n), u[ke] = e, Qe(u), l = u;
                      break e;
                    case "link":
                      var s = tm(
                        "link",
                        "href",
                        a
                      ).get(l + (n.href || ""));
                      if (s) {
                        for (var f = 0; f < s.length; f++)
                          if (u = s[f], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            s.splice(f, 1);
                            break t;
                          }
                      }
                      u = a.createElement(l), Dt(u, l, n), a.head.appendChild(u);
                      break;
                    case "meta":
                      if (s = tm(
                        "meta",
                        "content",
                        a
                      ).get(l + (n.content || ""))) {
                        for (f = 0; f < s.length; f++)
                          if (u = s[f], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            s.splice(f, 1);
                            break t;
                          }
                      }
                      u = a.createElement(l), Dt(u, l, n), a.head.appendChild(u);
                      break;
                    default:
                      throw Error(c(468, l));
                  }
                  u[ke] = e, Qe(u), l = u;
                }
                e.stateNode = l;
              } else
                nm(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = em(
                a,
                l,
                e.memoizedProps
              );
          else
            u !== l ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, l === null ? nm(
              a,
              e.type,
              e.stateNode
            ) : em(
              a,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && lr(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        tn(t, e), nn(e), l & 512 && (mt || n === null || dl(n, n.return)), n !== null && l & 4 && lr(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (tn(t, e), nn(e), l & 512 && (mt || n === null || dl(n, n.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            Kn(a, "");
          } catch (Y) {
            Ce(e, e.return, Y);
          }
        }
        l & 4 && e.stateNode != null && (a = e.memoizedProps, lr(
          e,
          a,
          n !== null ? n.memoizedProps : a
        )), l & 1024 && (ir = !0);
        break;
      case 6:
        if (tn(t, e), nn(e), l & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (Y) {
            Ce(e, e.return, Y);
          }
        }
        break;
      case 3:
        if (qs = null, a = Pn, Pn = xs(t.containerInfo), tn(t, e), Pn = a, nn(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            ai(t.containerInfo);
          } catch (Y) {
            Ce(e, e.return, Y);
          }
        ir && (ir = !1, nd(e));
        break;
      case 4:
        l = Pn, Pn = xs(
          e.stateNode.containerInfo
        ), tn(t, e), nn(e), Pn = l;
        break;
      case 12:
        tn(t, e), nn(e);
        break;
      case 31:
        tn(t, e), nn(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, os(e, l)));
        break;
      case 13:
        tn(t, e), nn(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (ds = it()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, os(e, l)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var y = n !== null && n.memoizedState !== null, T = Dl, q = mt;
        if (Dl = T || a, mt = q || y, tn(t, e), mt = q, Dl = T, nn(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || y || Dl || mt || au(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                y = n = t;
                try {
                  if (u = y.stateNode, a)
                    s = u.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    f = y.stateNode;
                    var U = y.memoizedProps.style, N = U != null && U.hasOwnProperty("display") ? U.display : null;
                    f.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (Y) {
                  Ce(y, y.return, Y);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                y = t;
                try {
                  y.stateNode.nodeValue = a ? "" : y.memoizedProps;
                } catch (Y) {
                  Ce(y, y.return, Y);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                y = t;
                try {
                  var x = y.stateNode;
                  a ? kd(x, !0) : kd(y.stateNode, !1);
                } catch (Y) {
                  Ce(y, y.return, Y);
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
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, os(e, n))));
        break;
      case 19:
        tn(t, e), nn(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, os(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        tn(t, e), nn(e);
    }
  }
  function nn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (Jf(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode, u = ar(e);
            rs(e, u, a);
            break;
          case 5:
            var s = n.stateNode;
            n.flags & 32 && (Kn(s, ""), n.flags &= -33);
            var f = ar(e);
            rs(e, f, s);
            break;
          case 3:
          case 4:
            var y = n.stateNode.containerInfo, T = ar(e);
            ur(
              e,
              T,
              y
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (q) {
        Ce(e, e.return, q);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function nd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        nd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Ll(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Ff(e, t.alternate, t), t = t.sibling;
  }
  function au(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          fa(4, t, t.return), au(t);
          break;
        case 1:
          dl(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && kf(
            t,
            t.return,
            n
          ), au(t);
          break;
        case 27:
          tA(t.stateNode);
        case 26:
        case 5:
          dl(t, t.return), au(t);
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
  function Vl(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, a = e, u = t, s = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Vl(
            a,
            u,
            n
          ), ki(4, u);
          break;
        case 1:
          if (Vl(
            a,
            u,
            n
          ), l = u, a = l.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (T) {
              Ce(l, l.return, T);
            }
          if (l = u, a = l.updateQueue, a !== null) {
            var f = l.stateNode;
            try {
              var y = a.shared.hiddenCallbacks;
              if (y !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < y.length; a++)
                  Co(y[a], f);
            } catch (T) {
              Ce(l, l.return, T);
            }
          }
          n && s & 64 && Zf(u), Ki(u, u.return);
          break;
        case 27:
          Qf(u);
        case 26:
        case 5:
          Vl(
            a,
            u,
            n
          ), n && l === null && s & 4 && Kf(u), Ki(u, u.return);
          break;
        case 12:
          Vl(
            a,
            u,
            n
          );
          break;
        case 31:
          Vl(
            a,
            u,
            n
          ), n && s & 4 && $f(a, u);
          break;
        case 13:
          Vl(
            a,
            u,
            n
          ), n && s & 4 && ed(a, u);
          break;
        case 22:
          u.memoizedState === null && Vl(
            a,
            u,
            n
          ), Ki(u, u.return);
          break;
        case 30:
          break;
        default:
          Vl(
            a,
            u,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Ar(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Ci(n));
  }
  function sr(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ci(e));
  }
  function In(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        ld(
          e,
          t,
          n,
          l
        ), t = t.sibling;
  }
  function ld(e, t, n, l) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        In(
          e,
          t,
          n,
          l
        ), a & 2048 && ki(9, t);
        break;
      case 1:
        In(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        In(
          e,
          t,
          n,
          l
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ci(e)));
        break;
      case 12:
        if (a & 2048) {
          In(
            e,
            t,
            n,
            l
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, s = u.id, f = u.onPostCommit;
            typeof f == "function" && f(
              s,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (y) {
            Ce(t, t.return, y);
          }
        } else
          In(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        In(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        In(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, s = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? In(
          e,
          t,
          n,
          l
        ) : Ji(e, t) : u._visibility & 2 ? In(
          e,
          t,
          n,
          l
        ) : (u._visibility |= 2, Ju(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && Ar(s, t);
        break;
      case 24:
        In(
          e,
          t,
          n,
          l
        ), a & 2048 && sr(t.alternate, t);
        break;
      default:
        In(
          e,
          t,
          n,
          l
        );
    }
  }
  function Ju(e, t, n, l, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, s = t, f = n, y = l, T = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Ju(
            u,
            s,
            f,
            y,
            a
          ), ki(8, s);
          break;
        case 23:
          break;
        case 22:
          var q = s.stateNode;
          s.memoizedState !== null ? q._visibility & 2 ? Ju(
            u,
            s,
            f,
            y,
            a
          ) : Ji(
            u,
            s
          ) : (q._visibility |= 2, Ju(
            u,
            s,
            f,
            y,
            a
          )), a && T & 2048 && Ar(
            s.alternate,
            s
          );
          break;
        case 24:
          Ju(
            u,
            s,
            f,
            y,
            a
          ), a && T & 2048 && sr(s.alternate, s);
          break;
        default:
          Ju(
            u,
            s,
            f,
            y,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Ji(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, a = l.flags;
        switch (l.tag) {
          case 22:
            Ji(n, l), a & 2048 && Ar(
              l.alternate,
              l
            );
            break;
          case 24:
            Ji(n, l), a & 2048 && sr(l.alternate, l);
            break;
          default:
            Ji(n, l);
        }
        t = t.sibling;
      }
  }
  var Qi = 8192;
  function Qu(e, t, n) {
    if (e.subtreeFlags & Qi)
      for (e = e.child; e !== null; )
        ad(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function ad(e, t, n) {
    switch (e.tag) {
      case 26:
        Qu(
          e,
          t,
          n
        ), e.flags & Qi && e.memoizedState !== null && ay(
          n,
          Pn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Qu(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var l = Pn;
        Pn = xs(e.stateNode.containerInfo), Qu(
          e,
          t,
          n
        ), Pn = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Qi, Qi = 16777216, Qu(
          e,
          t,
          n
        ), Qi = l) : Qu(
          e,
          t,
          n
        ));
        break;
      default:
        Qu(
          e,
          t,
          n
        );
    }
  }
  function ud(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Wi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          Mt = l, Ad(
            l,
            e
          );
        }
      ud(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        id(e), e = e.sibling;
  }
  function id(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Wi(e), e.flags & 2048 && fa(9, e, e.return);
        break;
      case 3:
        Wi(e);
        break;
      case 12:
        Wi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, fs(e)) : Wi(e);
        break;
      default:
        Wi(e);
    }
  }
  function fs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          Mt = l, Ad(
            l,
            e
          );
        }
      ud(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          fa(8, t, t.return), fs(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, fs(t));
          break;
        default:
          fs(t);
      }
      e = e.sibling;
    }
  }
  function Ad(e, t) {
    for (; Mt !== null; ) {
      var n = Mt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          fa(8, n, t);
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
      if (l = n.child, l !== null) l.return = n, Mt = l;
      else
        e: for (n = e; Mt !== null; ) {
          l = Mt;
          var a = l.sibling, u = l.return;
          if (Pf(l), l === n) {
            Mt = null;
            break e;
          }
          if (a !== null) {
            a.return = u, Mt = a;
            break e;
          }
          Mt = u;
        }
    }
  }
  var vh = {
    getCacheForType: function(e) {
      var t = Ut(ot), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return Ut(ot).controller.signal;
    }
  }, bh = typeof WeakMap == "function" ? WeakMap : Map, ze = 0, Le = null, fe = null, ge = 0, je = 0, mn = null, da = !1, Wu = !1, cr = !1, Hl = 0, lt = 0, ma = 0, uu = 0, rr = 0, hn = 0, Fu = 0, Fi = null, ln = null, or = !1, ds = 0, sd = 0, ms = 1 / 0, hs = null, ha = null, Et = 0, ya = null, Pu = null, Xl = 0, fr = 0, dr = null, cd = null, Pi = 0, mr = null;
  function yn() {
    return (ze & 2) !== 0 && ge !== 0 ? ge & -ge : R.T !== null ? br() : oi();
  }
  function rd() {
    if (hn === 0)
      if ((ge & 536870912) === 0 || be) {
        var e = ja;
        ja <<= 1, (ja & 3932160) === 0 && (ja = 262144), hn = e;
      } else hn = 536870912;
    return e = fn.current, e !== null && (e.flags |= 32), hn;
  }
  function an(e, t, n) {
    (e === Le && (je === 2 || je === 9) || e.cancelPendingCommit !== null) && (Iu(e, 0), pa(
      e,
      ge,
      hn,
      !1
    )), sn(e, n), ((ze & 2) === 0 || e !== Le) && (e === Le && ((ze & 2) === 0 && (uu |= n), lt === 4 && pa(
      e,
      ge,
      hn,
      !1
    )), ml(e));
  }
  function od(e, t, n) {
    if ((ze & 6) !== 0) throw Error(c(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Zt(e, t), a = l ? Nh(e, t) : yr(e, t, !0), u = l;
    do {
      if (a === 0) {
        Wu && !l && pa(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !Sh(n)) {
          a = yr(e, t, !1), u = !1;
          continue;
        }
        if (a === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var s = 0;
          else
            s = e.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            t = s;
            e: {
              var f = e;
              a = Fi;
              var y = f.current.memoizedState.isDehydrated;
              if (y && (Iu(f, s).flags |= 256), s = yr(
                f,
                s,
                !1
              ), s !== 2) {
                if (cr && !y) {
                  f.errorRecoveryDisabledLanes |= u, uu |= u, a = 4;
                  break e;
                }
                u = ln, ln = a, u !== null && (ln === null ? ln = u : ln.push.apply(
                  ln,
                  u
                ));
              }
              a = s;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          Iu(e, 0), pa(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, u = a, u) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              pa(
                l,
                t,
                hn,
                !da
              );
              break e;
            case 2:
              ln = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (a = ds + 300 - it(), 10 < a)) {
            if (pa(
              l,
              t,
              hn,
              !da
            ), j(l, 0, !0) !== 0) break e;
            Xl = t, l.timeoutHandle = Gd(
              fd.bind(
                null,
                l,
                n,
                ln,
                hs,
                or,
                t,
                hn,
                uu,
                Fu,
                da,
                u,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          fd(
            l,
            n,
            ln,
            hs,
            or,
            t,
            hn,
            uu,
            Fu,
            da,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ml(e);
  }
  function fd(e, t, n, l, a, u, s, f, y, T, q, U, N, x) {
    if (e.timeoutHandle = -1, U = t.subtreeFlags, U & 8192 || (U & 16785408) === 16785408) {
      U = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ul
      }, ad(
        t,
        u,
        U
      );
      var Y = (u & 62914560) === u ? ds - it() : (u & 4194048) === u ? sd - it() : 0;
      if (Y = uy(
        U,
        Y
      ), Y !== null) {
        Xl = u, e.cancelPendingCommit = Y(
          bd.bind(
            null,
            e,
            t,
            u,
            n,
            l,
            a,
            s,
            f,
            y,
            q,
            U,
            null,
            N,
            x
          )
        ), pa(e, u, s, !T);
        return;
      }
    }
    bd(
      e,
      t,
      u,
      n,
      l,
      a,
      s,
      f,
      y
    );
  }
  function Sh(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var a = n[l], u = a.getSnapshot;
          a = a.value;
          try {
            if (!ct(u(), a)) return !1;
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
    t &= ~rr, t &= ~uu, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var u = 31 - Rt(a), s = 1 << u;
      l[u] = -1, a &= ~s;
    }
    n !== 0 && pl(e, n, t);
  }
  function ys() {
    return (ze & 6) === 0 ? (Ii(0), !1) : !0;
  }
  function hr() {
    if (fe !== null) {
      if (je === 0)
        var e = fe.return;
      else
        e = fe, zl = Fa = null, jc(e), Gu = null, wi = 0, e = fe;
      for (; e !== null; )
        Yf(e.alternate, e), e = e.return;
      fe = null;
    }
  }
  function Iu(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, Bh(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Xl = 0, hr(), Le = e, fe = n = ql(e.current, null), ge = t, je = 0, mn = null, da = !1, Wu = Zt(e, t), cr = !1, Fu = hn = rr = uu = ma = lt = 0, ln = Fi = null, or = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - Rt(l), u = 1 << a;
        t |= e[a], l &= ~u;
      }
    return Hl = t, Ka(), n;
  }
  function dd(e, t) {
    ne = null, R.H = Gi, t === Bu || t === kA ? (t = Mo(), je = 3) : t === vc ? (t = Mo(), je = 4) : je = t === Jc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, mn = t, fe === null && (lt = 1, us(
      e,
      On(t, e.current)
    ));
  }
  function md() {
    var e = fn.current;
    return e === null ? !0 : (ge & 4194048) === ge ? wn === null : (ge & 62914560) === ge || (ge & 536870912) !== 0 ? e === wn : !1;
  }
  function hd() {
    var e = R.H;
    return R.H = Gi, e === null ? Gi : e;
  }
  function yd() {
    var e = R.A;
    return R.A = vh, e;
  }
  function ps() {
    lt = 4, da || (ge & 4194048) !== ge && fn.current !== null || (Wu = !0), (ma & 134217727) === 0 && (uu & 134217727) === 0 || Le === null || pa(
      Le,
      ge,
      hn,
      !1
    );
  }
  function yr(e, t, n) {
    var l = ze;
    ze |= 2;
    var a = hd(), u = yd();
    (Le !== e || ge !== t) && (hs = null, Iu(e, t)), t = !1;
    var s = lt;
    e: do
      try {
        if (je !== 0 && fe !== null) {
          var f = fe, y = mn;
          switch (je) {
            case 8:
              hr(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              fn.current === null && (t = !0);
              var T = je;
              if (je = 0, mn = null, $u(e, f, y, T), n && Wu) {
                s = 0;
                break e;
              }
              break;
            default:
              T = je, je = 0, mn = null, $u(e, f, y, T);
          }
        }
        Th(), s = lt;
        break;
      } catch (q) {
        dd(e, q);
      }
    while (!0);
    return t && e.shellSuspendCounter++, zl = Fa = null, ze = l, R.H = a, R.A = u, fe === null && (Le = null, ge = 0, Ka()), s;
  }
  function Th() {
    for (; fe !== null; ) pd(fe);
  }
  function Nh(e, t) {
    var n = ze;
    ze |= 2;
    var l = hd(), a = yd();
    Le !== e || ge !== t ? (hs = null, ms = it() + 500, Iu(e, t)) : Wu = Zt(
      e,
      t
    );
    e: do
      try {
        if (je !== 0 && fe !== null) {
          t = fe;
          var u = mn;
          t: switch (je) {
            case 1:
              je = 0, mn = null, $u(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Ro(u)) {
                je = 0, mn = null, gd(t);
                break;
              }
              t = function() {
                je !== 2 && je !== 9 || Le !== e || (je = 7), ml(e);
              }, u.then(t, t);
              break e;
            case 3:
              je = 7;
              break e;
            case 4:
              je = 5;
              break e;
            case 7:
              Ro(u) ? (je = 0, mn = null, gd(t)) : (je = 0, mn = null, $u(e, t, u, 7));
              break;
            case 5:
              var s = null;
              switch (fe.tag) {
                case 26:
                  s = fe.memoizedState;
                case 5:
                case 27:
                  var f = fe;
                  if (s ? lm(s) : f.stateNode.complete) {
                    je = 0, mn = null;
                    var y = f.sibling;
                    if (y !== null) fe = y;
                    else {
                      var T = f.return;
                      T !== null ? (fe = T, gs(T)) : fe = null;
                    }
                    break t;
                  }
              }
              je = 0, mn = null, $u(e, t, u, 5);
              break;
            case 6:
              je = 0, mn = null, $u(e, t, u, 6);
              break;
            case 8:
              hr(), lt = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Eh();
        break;
      } catch (q) {
        dd(e, q);
      }
    while (!0);
    return zl = Fa = null, R.H = l, R.A = a, ze = n, fe !== null ? 0 : (Le = null, ge = 0, Ka(), lt);
  }
  function Eh() {
    for (; fe !== null && !Ma(); )
      pd(fe);
  }
  function pd(e) {
    var t = Bf(e.alternate, e, Hl);
    e.memoizedProps = e.pendingProps, t === null ? gs(e) : fe = t;
  }
  function gd(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Df(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ge
        );
        break;
      case 11:
        t = Df(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ge
        );
        break;
      case 5:
        jc(t);
      default:
        Yf(n, t), t = fe = ho(t, Hl), t = Bf(n, t, Hl);
    }
    e.memoizedProps = e.pendingProps, t === null ? gs(e) : fe = t;
  }
  function $u(e, t, n, l) {
    zl = Fa = null, jc(t), Gu = null, wi = 0;
    var a = t.return;
    try {
      if (fh(
        e,
        a,
        t,
        n,
        ge
      )) {
        lt = 1, us(
          e,
          On(n, e.current)
        ), fe = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw fe = a, u;
      lt = 1, us(
        e,
        On(n, e.current)
      ), fe = null;
      return;
    }
    t.flags & 32768 ? (be || l === 1 ? e = !0 : Wu || (ge & 536870912) !== 0 ? e = !1 : (da = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = fn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), vd(t, e)) : gs(t);
  }
  function gs(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        vd(
          t,
          da
        );
        return;
      }
      e = t.return;
      var n = hh(
        t.alternate,
        t,
        Hl
      );
      if (n !== null) {
        fe = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        fe = t;
        return;
      }
      fe = t = e;
    } while (t !== null);
    lt === 0 && (lt = 5);
  }
  function vd(e, t) {
    do {
      var n = yh(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, fe = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        fe = e;
        return;
      }
      fe = e = n;
    } while (e !== null);
    lt = 6, fe = null;
  }
  function bd(e, t, n, l, a, u, s, f, y) {
    e.cancelPendingCommit = null;
    do
      vs();
    while (Et !== 0);
    if ((ze & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (u = t.lanes | t.childLanes, u |= Cu, Zl(
        e,
        n,
        u,
        s,
        f,
        y
      ), e === Le && (fe = Le = null, ge = 0), Pu = t, ya = e, Xl = n, fr = u, dr = a, cd = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Mh(Ot, function() {
        return xd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = R.T, R.T = null, a = L.p, L.p = 2, s = ze, ze |= 4;
        try {
          ph(e, t, n);
        } finally {
          ze = s, L.p = a, R.T = l;
        }
      }
      Et = 1, Sd(), Td(), Nd();
    }
  }
  function Sd() {
    if (Et === 1) {
      Et = 0;
      var e = ya, t = Pu, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = R.T, R.T = null;
        var l = L.p;
        L.p = 2;
        var a = ze;
        ze |= 4;
        try {
          td(t, e);
          var u = Mr, s = Ou(e.containerInfo), f = u.focusedElem, y = u.selectionRange;
          if (s !== f && f && f.ownerDocument && ta(
            f.ownerDocument.documentElement,
            f
          )) {
            if (y !== null && qi(f)) {
              var T = y.start, q = y.end;
              if (q === void 0 && (q = T), "selectionStart" in f)
                f.selectionStart = T, f.selectionEnd = Math.min(
                  q,
                  f.value.length
                );
              else {
                var U = f.ownerDocument || document, N = U && U.defaultView || window;
                if (N.getSelection) {
                  var x = N.getSelection(), Y = f.textContent.length, Q = Math.min(y.start, Y), De = y.end === void 0 ? Q : Math.min(y.end, Y);
                  !x.extend && Q > De && (s = De, De = Q, Q = s);
                  var v = Ri(
                    f,
                    Q
                  ), g = Ri(
                    f,
                    De
                  );
                  if (v && g && (x.rangeCount !== 1 || x.anchorNode !== v.node || x.anchorOffset !== v.offset || x.focusNode !== g.node || x.focusOffset !== g.offset)) {
                    var S = U.createRange();
                    S.setStart(v.node, v.offset), x.removeAllRanges(), Q > De ? (x.addRange(S), x.extend(g.node, g.offset)) : (S.setEnd(g.node, g.offset), x.addRange(S));
                  }
                }
              }
            }
            for (U = [], x = f; x = x.parentNode; )
              x.nodeType === 1 && U.push({
                element: x,
                left: x.scrollLeft,
                top: x.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < U.length; f++) {
              var M = U[f];
              M.element.scrollLeft = M.left, M.element.scrollTop = M.top;
            }
          }
          js = !!qr, Mr = qr = null;
        } finally {
          ze = a, L.p = l, R.T = n;
        }
      }
      e.current = t, Et = 2;
    }
  }
  function Td() {
    if (Et === 2) {
      Et = 0;
      var e = ya, t = Pu, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = R.T, R.T = null;
        var l = L.p;
        L.p = 2;
        var a = ze;
        ze |= 4;
        try {
          Ff(e, t.alternate, t);
        } finally {
          ze = a, L.p = l, R.T = n;
        }
      }
      Et = 3;
    }
  }
  function Nd() {
    if (Et === 4 || Et === 3) {
      Et = 0, za();
      var e = ya, t = Pu, n = Xl, l = cd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Et = 5 : (Et = 0, Pu = ya = null, Ed(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (ha = null), Ua(n), t = t.stateNode, Me && typeof Me.onCommitFiberRoot == "function")
        try {
          Me.onCommitFiberRoot(
            vt,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = R.T, a = L.p, L.p = 2, R.T = null;
        try {
          for (var u = e.onRecoverableError, s = 0; s < l.length; s++) {
            var f = l[s];
            u(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          R.T = t, L.p = a;
        }
      }
      (Xl & 3) !== 0 && vs(), ml(e), a = e.pendingLanes, (n & 261930) !== 0 && (a & 42) !== 0 ? e === mr ? Pi++ : (Pi = 0, mr = e) : Pi = 0, Ii(0);
    }
  }
  function Ed(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ci(t)));
  }
  function vs() {
    return Sd(), Td(), Nd(), xd();
  }
  function xd() {
    if (Et !== 5) return !1;
    var e = ya, t = fr;
    fr = 0;
    var n = Ua(Xl), l = R.T, a = L.p;
    try {
      L.p = 32 > n ? 32 : n, R.T = null, n = dr, dr = null;
      var u = ya, s = Xl;
      if (Et = 0, Pu = ya = null, Xl = 0, (ze & 6) !== 0) throw Error(c(331));
      var f = ze;
      if (ze |= 4, id(u.current), ld(
        u,
        u.current,
        s,
        n
      ), ze = f, Ii(0, !1), Me && typeof Me.onPostCommitFiberRoot == "function")
        try {
          Me.onPostCommitFiberRoot(vt, u);
        } catch {
        }
      return !0;
    } finally {
      L.p = a, R.T = l, Ed(e, t);
    }
  }
  function Rd(e, t, n) {
    t = On(n, t), t = Kc(e.stateNode, t, 2), e = ca(e, t, 2), e !== null && (sn(e, 2), ml(e));
  }
  function Ce(e, t, n) {
    if (e.tag === 3)
      Rd(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Rd(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ha === null || !ha.has(l))) {
            e = On(n, e), n = qf(2), l = ca(t, n, 2), l !== null && (Mf(
              n,
              l,
              t,
              e
            ), sn(l, 2), ml(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function pr(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new bh();
      var a = /* @__PURE__ */ new Set();
      l.set(t, a);
    } else
      a = l.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(t, a));
    a.has(n) || (cr = !0, a.add(n), e = xh.bind(null, e, t, n), t.then(e, e));
  }
  function xh(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Le === e && (ge & n) === n && (lt === 4 || lt === 3 && (ge & 62914560) === ge && 300 > it() - ds ? (ze & 2) === 0 && Iu(e, 0) : rr |= n, Fu === ge && (Fu = 0)), ml(e);
  }
  function qd(e, t) {
    t === 0 && (t = ci()), e = B(e, t), e !== null && (sn(e, t), ml(e));
  }
  function Rh(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), qd(e, n);
  }
  function qh(e, t) {
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
        throw Error(c(314));
    }
    l !== null && l.delete(t), qd(e, n);
  }
  function Mh(e, t) {
    return qa(e, t);
  }
  var bs = null, ei = null, gr = !1, Ss = !1, vr = !1, ga = 0;
  function ml(e) {
    e !== ei && e.next === null && (ei === null ? bs = ei = e : ei = ei.next = e), Ss = !0, gr || (gr = !0, Oh());
  }
  function Ii(e, t) {
    if (!vr && Ss) {
      vr = !0;
      do
        for (var n = !1, l = bs; l !== null; ) {
          if (e !== 0) {
            var a = l.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var s = l.suspendedLanes, f = l.pingedLanes;
              u = (1 << 31 - Rt(42 | e) + 1) - 1, u &= a & ~(s & ~f), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, jd(l, u));
          } else
            u = ge, u = j(
              l,
              l === Le ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || Zt(l, u) || (n = !0, jd(l, u));
          l = l.next;
        }
      while (n);
      vr = !1;
    }
  }
  function zh() {
    Md();
  }
  function Md() {
    Ss = gr = !1;
    var e = 0;
    ga !== 0 && Xh() && (e = ga);
    for (var t = it(), n = null, l = bs; l !== null; ) {
      var a = l.next, u = zd(l, t);
      u === 0 ? (l.next = null, n === null ? bs = a : n.next = a, a === null && (ei = n)) : (n = l, (e !== 0 || (u & 3) !== 0) && (Ss = !0)), l = a;
    }
    Et !== 0 && Et !== 5 || Ii(e), ga !== 0 && (ga = 0);
  }
  function zd(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var s = 31 - Rt(u), f = 1 << s, y = a[s];
      y === -1 ? ((f & n) === 0 || (f & l) !== 0) && (a[s] = yA(f, t)) : y <= t && (e.expiredLanes |= f), u &= ~f;
    }
    if (t = Le, n = ge, n = j(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (je === 2 || je === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && si(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Zt(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && si(l), Ua(n)) {
        case 2:
        case 8:
          n = Wt;
          break;
        case 32:
          n = Ot;
          break;
        case 268435456:
          n = dA;
          break;
        default:
          n = Ot;
      }
      return l = Od.bind(null, e), n = qa(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && si(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Od(e, t) {
    if (Et !== 0 && Et !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (vs() && e.callbackNode !== n)
      return null;
    var l = ge;
    return l = j(
      e,
      e === Le ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (od(e, l, t), zd(e, it()), e.callbackNode != null && e.callbackNode === n ? Od.bind(null, e) : null);
  }
  function jd(e, t) {
    if (vs()) return null;
    od(e, t, !0);
  }
  function Oh() {
    Gh(function() {
      (ze & 6) !== 0 ? qa(
        Gt,
        zh
      ) : Md();
    });
  }
  function br() {
    if (ga === 0) {
      var e = Hu;
      e === 0 && (e = Oa, Oa <<= 1, (Oa & 261888) === 0 && (Oa = 256)), ga = e;
    }
    return ga;
  }
  function Cd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Tn("" + e);
  }
  function Ud(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function jh(e, t, n, l, a) {
    if (t === "submit" && n && n.stateNode === a) {
      var u = Cd(
        (a[At] || null).action
      ), s = l.submitter;
      s && (t = (t = s[At] || null) ? Cd(t.formAction) : s.getAttribute("formAction"), t !== null && (u = t, s = null));
      var f = new Nu(
        "action",
        "action",
        null,
        l,
        a
      );
      e.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (ga !== 0) {
                  var y = s ? Ud(a, s) : new FormData(a);
                  Xc(
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
                typeof u == "function" && (f.preventDefault(), y = s ? Ud(a, s) : new FormData(a), Xc(
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
  for (var Sr = 0; Sr < et.length; Sr++) {
    var Tr = et[Sr], Ch = Tr.toLowerCase(), Uh = Tr[0].toUpperCase() + Tr.slice(1);
    Oe(
      Ch,
      "on" + Uh
    );
  }
  Oe(D, "onAnimationEnd"), Oe(G, "onAnimationIteration"), Oe(ye, "onAnimationStart"), Oe("dblclick", "onDoubleClick"), Oe("focusin", "onFocus"), Oe("focusout", "onBlur"), Oe(Ae, "onTransitionRun"), Oe(We, "onTransitionStart"), Oe(ce, "onTransitionCancel"), Oe($e, "onTransitionEnd"), cn("onMouseEnter", ["mouseout", "mouseover"]), cn("onMouseLeave", ["mouseout", "mouseover"]), cn("onPointerEnter", ["pointerout", "pointerover"]), cn("onPointerLeave", ["pointerout", "pointerover"]), kt(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), kt(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), kt("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), kt(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), kt(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), kt(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var $i = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), wh = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($i)
  );
  function wd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], a = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var s = l.length - 1; 0 <= s; s--) {
            var f = l[s], y = f.instance, T = f.currentTarget;
            if (f = f.listener, y !== u && a.isPropagationStopped())
              break e;
            u = f, a.currentTarget = T;
            try {
              u(a);
            } catch (q) {
              zn(q);
            }
            a.currentTarget = null, u = y;
          }
        else
          for (s = 0; s < l.length; s++) {
            if (f = l[s], y = f.instance, T = f.currentTarget, f = f.listener, y !== u && a.isPropagationStopped())
              break e;
            u = f, a.currentTarget = T;
            try {
              u(a);
            } catch (q) {
              zn(q);
            }
            a.currentTarget = null, u = y;
          }
      }
    }
  }
  function de(e, t) {
    var n = t[tl];
    n === void 0 && (n = t[tl] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (Dd(t, e, 2, !1), n.add(l));
  }
  function Nr(e, t, n) {
    var l = 0;
    t && (l |= 4), Dd(
      n,
      e,
      l,
      t
    );
  }
  var Ts = "_reactListening" + Math.random().toString(36).slice(2);
  function Er(e) {
    if (!e[Ts]) {
      e[Ts] = !0, Da.forEach(function(n) {
        n !== "selectionchange" && (wh.has(n) || Nr(n, !1, e), Nr(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ts] || (t[Ts] = !0, Nr("selectionchange", !1, t));
    }
  }
  function Dd(e, t, n, l) {
    switch (rm(t)) {
      case 2:
        var a = sy;
        break;
      case 8:
        a = cy;
        break;
      default:
        a = Hr;
    }
    n = a.bind(
      null,
      t,
      n,
      e
    ), a = void 0, !vu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
      passive: a
    }) : e.addEventListener(t, n, !1);
  }
  function xr(e, t, n, l, a) {
    var u = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var s = l.tag;
        if (s === 3 || s === 4) {
          var f = l.stateNode.containerInfo;
          if (f === a) break;
          if (s === 4)
            for (s = l.return; s !== null; ) {
              var y = s.tag;
              if ((y === 3 || y === 4) && s.stateNode.containerInfo === a)
                return;
              s = s.return;
            }
          for (; f !== null; ) {
            if (s = nl(f), s === null) return;
            if (y = s.tag, y === 5 || y === 6 || y === 26 || y === 27) {
              l = u = s;
              continue e;
            }
            f = f.parentNode;
          }
        }
        l = l.return;
      }
    Qn(function() {
      var T = u, q = Tt(n), U = [];
      e: {
        var N = qt.get(e);
        if (N !== void 0) {
          var x = Nu, Y = e;
          switch (e) {
            case "keypress":
              if (Su(n) === 0) break e;
            case "keydown":
            case "keyup":
              x = qA;
              break;
            case "focusin":
              Y = "focus", x = Wl;
              break;
            case "focusout":
              Y = "blur", x = Wl;
              break;
            case "beforeblur":
            case "afterblur":
              x = Wl;
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
              x = La;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = cl;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = xn;
              break;
            case D:
            case G:
            case ye:
              x = bi;
              break;
            case $e:
              x = Ba;
              break;
            case "scroll":
            case "scrollend":
              x = pi;
              break;
            case "wheel":
              x = xu;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = Si;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = Il;
              break;
            case "toggle":
            case "beforetoggle":
              x = Is;
          }
          var Q = (t & 4) !== 0, De = !Q && (e === "scroll" || e === "scrollend"), v = Q ? N !== null ? N + "Capture" : null : N;
          Q = [];
          for (var g = T, S; g !== null; ) {
            var M = g;
            if (S = M.stateNode, M = M.tag, M !== 5 && M !== 26 && M !== 27 || S === null || v === null || (M = Al(g, v), M != null && Q.push(
              eA(g, M, S)
            )), De) break;
            g = g.return;
          }
          0 < Q.length && (N = new x(
            N,
            Y,
            null,
            n,
            q
          ), U.push({ event: N, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (N = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", N && n !== Nn && (Y = n.relatedTarget || n.fromElement) && (nl(Y) || Y[Bn]))
            break e;
          if ((x || N) && (N = q.window === q ? q : (N = q.ownerDocument) ? N.defaultView || N.parentWindow : window, x ? (Y = n.relatedTarget || n.toElement, x = T, Y = Y ? nl(Y) : null, Y !== null && (De = z(Y), Q = Y.tag, Y !== De || Q !== 5 && Q !== 27 && Q !== 6) && (Y = null)) : (x = null, Y = T), x !== Y)) {
            if (Q = La, M = "onMouseLeave", v = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (Q = Il, M = "onPointerLeave", v = "onPointerEnter", g = "pointer"), De = x == null ? N : vn(x), S = Y == null ? N : vn(Y), N = new Q(
              M,
              g + "leave",
              x,
              n,
              q
            ), N.target = De, N.relatedTarget = S, M = null, nl(q) === T && (Q = new Q(
              v,
              g + "enter",
              Y,
              n,
              q
            ), Q.target = S, Q.relatedTarget = De, M = Q), De = M, x && Y)
              t: {
                for (Q = Dh, v = x, g = Y, S = 0, M = v; M; M = Q(M))
                  S++;
                M = 0;
                for (var J = g; J; J = Q(J))
                  M++;
                for (; 0 < S - M; )
                  v = Q(v), S--;
                for (; 0 < M - S; )
                  g = Q(g), M--;
                for (; S--; ) {
                  if (v === g || g !== null && v === g.alternate) {
                    Q = v;
                    break t;
                  }
                  v = Q(v), g = Q(g);
                }
                Q = null;
              }
            else Q = null;
            x !== null && _d(
              U,
              N,
              x,
              Q,
              !1
            ), Y !== null && De !== null && _d(
              U,
              De,
              Y,
              Q,
              !0
            );
          }
        }
        e: {
          if (N = T ? vn(T) : window, x = N.nodeName && N.nodeName.toLowerCase(), x === "select" || x === "input" && N.type === "file")
            var Re = wA;
          else if (qu(N))
            if (Wn)
              Re = VA;
            else {
              Re = zu;
              var k = uc;
            }
          else
            x = N.nodeName, !x || x.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? T && gu(T.elementType) && (Re = wA) : Re = LA;
          if (Re && (Re = Re(e, T))) {
            UA(
              U,
              Re,
              n,
              q
            );
            break e;
          }
          k && k(e, N, T), e === "focusout" && T && N.type === "number" && T.memoizedProps.value != null && yu(N, "number", N.value);
        }
        switch (k = T ? vn(T) : window, e) {
          case "focusin":
            (qu(k) || k.contentEditable === "true") && (xl = k, zi = T, ka = null);
            break;
          case "focusout":
            ka = zi = xl = null;
            break;
          case "mousedown":
            ju = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ju = !1, HA(U, n, q);
            break;
          case "selectionchange":
            if (Mi) break;
          case "keydown":
          case "keyup":
            HA(U, n, q);
        }
        var ue;
        if (Ni)
          e: {
            switch (e) {
              case "compositionstart":
                var ve = "onCompositionStart";
                break e;
              case "compositionend":
                ve = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ve = "onCompositionUpdate";
                break e;
            }
            ve = void 0;
          }
        else
          $l ? jA(e, n) && (ve = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ve = "onCompositionStart");
        ve && (Rn && n.locale !== "ko" && ($l || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && $l && (ue = SA()) : (sl = q, yi = "value" in sl ? sl.value : sl.textContent, $l = !0)), k = Ns(T, ve), 0 < k.length && (ve = new Va(
          ve,
          e,
          null,
          n,
          q
        ), U.push({ event: ve, listeners: k }), ue ? ve.data = ue : (ue = CA(n), ue !== null && (ve.data = ue)))), (ue = ec ? tc(e, n) : nc(e, n)) && (ve = Ns(T, "onBeforeInput"), 0 < ve.length && (k = new Va(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          q
        ), U.push({
          event: k,
          listeners: ve
        }), k.data = ue)), jh(
          U,
          e,
          T,
          n,
          q
        );
      }
      wd(U, t);
    });
  }
  function eA(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Ns(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var a = e, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = Al(e, n), a != null && l.unshift(
        eA(e, a, u)
      ), a = Al(e, t), a != null && l.push(
        eA(e, a, u)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Dh(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function _d(e, t, n, l, a) {
    for (var u = t._reactName, s = []; n !== null && n !== l; ) {
      var f = n, y = f.alternate, T = f.stateNode;
      if (f = f.tag, y !== null && y === l) break;
      f !== 5 && f !== 26 && f !== 27 || T === null || (y = T, a ? (T = Al(n, u), T != null && s.unshift(
        eA(n, T, y)
      )) : a || (T = Al(n, u), T != null && s.push(
        eA(n, T, y)
      ))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var _h = /\r\n?/g, Lh = /\u0000|\uFFFD/g;
  function Ld(e) {
    return (typeof e == "string" ? e : "" + e).replace(_h, `
`).replace(Lh, "");
  }
  function Vd(e, t) {
    return t = Ld(t), Ld(e) === t;
  }
  function we(e, t, n, l, a, u) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Kn(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Kn(e, "" + l);
        break;
      case "className":
        di(e, "class", l);
        break;
      case "tabIndex":
        di(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        di(e, n, l);
        break;
      case "style":
        Sl(e, l, u);
        break;
      case "data":
        if (t !== "object") {
          di(e, "data", l);
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
        l = Tn("" + l), e.setAttribute(n, l);
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
          typeof u == "function" && (n === "formAction" ? (t !== "input" && we(e, t, "name", a.name, a, null), we(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), we(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), we(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (we(e, t, "encType", a.encType, a, null), we(e, t, "method", a.method, a, null), we(e, t, "target", a.target, a, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = Tn("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = ul);
        break;
      case "onScroll":
        l != null && de("scroll", e);
        break;
      case "onScrollEnd":
        l != null && de("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(c(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(c(60));
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
        n = Tn("" + l), e.setAttributeNS(
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
        de("beforetoggle", e), de("toggle", e), Sn(e, "popover", l);
        break;
      case "xlinkActuate":
        bt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        bt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        bt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        bt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        bt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        bt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        bt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        bt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        bt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Sn(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Kl.get(n) || n, Sn(e, n, l));
    }
  }
  function Rr(e, t, n, l, a, u) {
    switch (n) {
      case "style":
        Sl(e, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(c(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Kn(e, l) : (typeof l == "number" || typeof l == "bigint") && Kn(e, "" + l);
        break;
      case "onScroll":
        l != null && de("scroll", e);
        break;
      case "onScrollEnd":
        l != null && de("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = ul);
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
        if (!st.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), u = e[At] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, a), typeof l == "function")) {
              typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, a);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : Sn(e, n, l);
          }
    }
  }
  function Dt(e, t, n) {
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
        de("error", e), de("load", e);
        var l = !1, a = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var s = n[u];
            if (s != null)
              switch (u) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  we(e, t, u, s, n, null);
              }
          }
        a && we(e, t, "srcSet", n.srcSet, n, null), l && we(e, t, "src", n.src, n, null);
        return;
      case "input":
        de("invalid", e);
        var f = u = s = a = null, y = null, T = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var q = n[l];
            if (q != null)
              switch (l) {
                case "name":
                  a = q;
                  break;
                case "type":
                  s = q;
                  break;
                case "checked":
                  y = q;
                  break;
                case "defaultChecked":
                  T = q;
                  break;
                case "value":
                  u = q;
                  break;
                case "defaultValue":
                  f = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(c(137, t));
                  break;
                default:
                  we(e, t, l, q, n, null);
              }
          }
        Pt(
          e,
          u,
          f,
          y,
          T,
          s,
          a,
          !1
        );
        return;
      case "select":
        de("invalid", e), l = s = u = null;
        for (a in n)
          if (n.hasOwnProperty(a) && (f = n[a], f != null))
            switch (a) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                s = f;
                break;
              case "multiple":
                l = f;
              default:
                we(e, t, a, f, n, null);
            }
        t = u, n = s, e.multiple = !!l, t != null ? Kt(e, !!l, t, !1) : n != null && Kt(e, !!l, n, !0);
        return;
      case "textarea":
        de("invalid", e), u = a = l = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (f = n[s], f != null))
            switch (s) {
              case "value":
                l = f;
                break;
              case "defaultValue":
                a = f;
                break;
              case "children":
                u = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(c(91));
                break;
              default:
                we(e, t, s, f, n, null);
            }
        al(e, l, a, u);
        return;
      case "option":
        for (y in n)
          n.hasOwnProperty(y) && (l = n[y], l != null) && (y === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : we(e, t, y, l, n, null));
        return;
      case "dialog":
        de("beforetoggle", e), de("toggle", e), de("cancel", e), de("close", e);
        break;
      case "iframe":
      case "object":
        de("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < $i.length; l++)
          de($i[l], e);
        break;
      case "image":
        de("error", e), de("load", e);
        break;
      case "details":
        de("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        de("error", e), de("load", e);
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
        for (T in n)
          if (n.hasOwnProperty(T) && (l = n[T], l != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                we(e, t, T, l, n, null);
            }
        return;
      default:
        if (gu(t)) {
          for (q in n)
            n.hasOwnProperty(q) && (l = n[q], l !== void 0 && Rr(
              e,
              t,
              q,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (f in n)
      n.hasOwnProperty(f) && (l = n[f], l != null && we(e, t, f, l, n, null));
  }
  function Vh(e, t, n, l) {
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
        var a = null, u = null, s = null, f = null, y = null, T = null, q = null;
        for (x in n) {
          var U = n[x];
          if (n.hasOwnProperty(x) && U != null)
            switch (x) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                y = U;
              default:
                l.hasOwnProperty(x) || we(e, t, x, null, l, U);
            }
        }
        for (var N in l) {
          var x = l[N];
          if (U = n[N], l.hasOwnProperty(N) && (x != null || U != null))
            switch (N) {
              case "type":
                u = x;
                break;
              case "name":
                a = x;
                break;
              case "checked":
                T = x;
                break;
              case "defaultChecked":
                q = x;
                break;
              case "value":
                s = x;
                break;
              case "defaultValue":
                f = x;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(c(137, t));
                break;
              default:
                x !== U && we(
                  e,
                  t,
                  N,
                  x,
                  l,
                  U
                );
            }
        }
        hu(
          e,
          s,
          f,
          y,
          T,
          q,
          u,
          a
        );
        return;
      case "select":
        x = s = f = N = null;
        for (u in n)
          if (y = n[u], n.hasOwnProperty(u) && y != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                x = y;
              default:
                l.hasOwnProperty(u) || we(
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
                N = u;
                break;
              case "defaultValue":
                f = u;
                break;
              case "multiple":
                s = u;
              default:
                u !== y && we(
                  e,
                  t,
                  a,
                  u,
                  l,
                  y
                );
            }
        t = f, n = s, l = x, N != null ? Kt(e, !!n, N, !1) : !!l != !!n && (t != null ? Kt(e, !!n, t, !0) : Kt(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        x = N = null;
        for (f in n)
          if (a = n[f], n.hasOwnProperty(f) && a != null && !l.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                we(e, t, f, null, l, a);
            }
        for (s in l)
          if (a = l[s], u = n[s], l.hasOwnProperty(s) && (a != null || u != null))
            switch (s) {
              case "value":
                N = a;
                break;
              case "defaultValue":
                x = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(c(91));
                break;
              default:
                a !== u && we(e, t, s, a, l, u);
            }
        vA(e, N, x);
        return;
      case "option":
        for (var Y in n)
          N = n[Y], n.hasOwnProperty(Y) && N != null && !l.hasOwnProperty(Y) && (Y === "selected" ? e.selected = !1 : we(
            e,
            t,
            Y,
            null,
            l,
            N
          ));
        for (y in l)
          N = l[y], x = n[y], l.hasOwnProperty(y) && N !== x && (N != null || x != null) && (y === "selected" ? e.selected = N && typeof N != "function" && typeof N != "symbol" : we(
            e,
            t,
            y,
            N,
            l,
            x
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
        for (var Q in n)
          N = n[Q], n.hasOwnProperty(Q) && N != null && !l.hasOwnProperty(Q) && we(e, t, Q, null, l, N);
        for (T in l)
          if (N = l[T], x = n[T], l.hasOwnProperty(T) && N !== x && (N != null || x != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(c(137, t));
                break;
              default:
                we(
                  e,
                  t,
                  T,
                  N,
                  l,
                  x
                );
            }
        return;
      default:
        if (gu(t)) {
          for (var De in n)
            N = n[De], n.hasOwnProperty(De) && N !== void 0 && !l.hasOwnProperty(De) && Rr(
              e,
              t,
              De,
              void 0,
              l,
              N
            );
          for (q in l)
            N = l[q], x = n[q], !l.hasOwnProperty(q) || N === x || N === void 0 && x === void 0 || Rr(
              e,
              t,
              q,
              N,
              l,
              x
            );
          return;
        }
    }
    for (var v in n)
      N = n[v], n.hasOwnProperty(v) && N != null && !l.hasOwnProperty(v) && we(e, t, v, null, l, N);
    for (U in l)
      N = l[U], x = n[U], !l.hasOwnProperty(U) || N === x || N == null && x == null || we(e, t, U, N, l, x);
  }
  function Hd(e) {
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
  function Hh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var a = n[l], u = a.transferSize, s = a.initiatorType, f = a.duration;
        if (u && f && Hd(s)) {
          for (s = 0, f = a.responseEnd, l += 1; l < n.length; l++) {
            var y = n[l], T = y.startTime;
            if (T > f) break;
            var q = y.transferSize, U = y.initiatorType;
            q && Hd(U) && (y = y.responseEnd, s += q * (y < f ? 1 : (f - T) / (y - T)));
          }
          if (--l, t += 8 * (u + s) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var qr = null, Mr = null;
  function Es(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Xd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Bd(e, t) {
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
  function zr(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Or = null;
  function Xh() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Or ? !1 : (Or = e, !0) : (Or = null, !1);
  }
  var Gd = typeof setTimeout == "function" ? setTimeout : void 0, Bh = typeof clearTimeout == "function" ? clearTimeout : void 0, Yd = typeof Promise == "function" ? Promise : void 0, Gh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yd < "u" ? function(e) {
    return Yd.resolve(null).then(e).catch(Yh);
  } : Gd;
  function Yh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function va(e) {
    return e === "head";
  }
  function Zd(e, t) {
    var n = t, l = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8)
        if (n = a.data, n === "/$" || n === "/&") {
          if (l === 0) {
            e.removeChild(a), ai(t);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          tA(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, tA(n);
          for (var u = n.firstChild; u; ) {
            var s = u.nextSibling, f = u.nodeName;
            u[Gn] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = s;
          }
        } else
          n === "body" && tA(e.ownerDocument.body);
      n = a;
    } while (n);
    ai(t);
  }
  function kd(e, t) {
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
  function jr(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          jr(n), vl(n);
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
  function Zh(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var a = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Gn])
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
  function kh(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Kd(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Cr(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ur(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Kh(e, t) {
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
  var wr = null;
  function Jd(e) {
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
  function Qd(e) {
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
  function Wd(e, t, n) {
    switch (t = Es(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(c(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(c(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function tA(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    vl(e);
  }
  var _n = /* @__PURE__ */ new Map(), Fd = /* @__PURE__ */ new Set();
  function xs(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Bl = L.d;
  L.d = {
    f: Jh,
    r: Qh,
    D: Wh,
    C: Fh,
    L: Ph,
    m: Ih,
    X: ey,
    S: $h,
    M: ty
  };
  function Jh() {
    var e = Bl.f(), t = ys();
    return e || t;
  }
  function Qh(e) {
    var t = gn(e);
    t !== null && t.tag === 5 && t.type === "form" ? df(t) : Bl.r(e);
  }
  var ti = typeof document > "u" ? null : document;
  function Pd(e, t, n) {
    var l = ti;
    if (l && typeof t == "string" && t) {
      var a = St(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Fd.has(a) || (Fd.add(a), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(a) === null && (t = l.createElement("link"), Dt(t, "link", e), Qe(t), l.head.appendChild(t)));
    }
  }
  function Wh(e) {
    Bl.D(e), Pd("dns-prefetch", e, null);
  }
  function Fh(e, t) {
    Bl.C(e, t), Pd("preconnect", e, t);
  }
  function Ph(e, t, n) {
    Bl.L(e, t, n);
    var l = ti;
    if (l && e && t) {
      var a = 'link[rel="preload"][as="' + St(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + St(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + St(
        n.imageSizes
      ) + '"]')) : a += '[href="' + St(e) + '"]';
      var u = a;
      switch (t) {
        case "style":
          u = ni(e);
          break;
        case "script":
          u = li(e);
      }
      _n.has(u) || (e = Z(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), _n.set(u, e), l.querySelector(a) !== null || t === "style" && l.querySelector(nA(u)) || t === "script" && l.querySelector(lA(u)) || (t = l.createElement("link"), Dt(t, "link", e), Qe(t), l.head.appendChild(t)));
    }
  }
  function Ih(e, t) {
    Bl.m(e, t);
    var n = ti;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + St(l) + '"][href="' + St(e) + '"]', u = a;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = li(e);
      }
      if (!_n.has(u) && (e = Z({ rel: "modulepreload", href: e }, t), _n.set(u, e), n.querySelector(a) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(lA(u)))
              return;
        }
        l = n.createElement("link"), Dt(l, "link", e), Qe(l), n.head.appendChild(l);
      }
    }
  }
  function $h(e, t, n) {
    Bl.S(e, t, n);
    var l = ti;
    if (l && e) {
      var a = Yn(l).hoistableStyles, u = ni(e);
      t = t || "default";
      var s = a.get(u);
      if (!s) {
        var f = { loading: 0, preload: null };
        if (s = l.querySelector(
          nA(u)
        ))
          f.loading = 5;
        else {
          e = Z(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = _n.get(u)) && Dr(e, n);
          var y = s = l.createElement("link");
          Qe(y), Dt(y, "link", e), y._p = new Promise(function(T, q) {
            y.onload = T, y.onerror = q;
          }), y.addEventListener("load", function() {
            f.loading |= 1;
          }), y.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, Rs(s, t, l);
        }
        s = {
          type: "stylesheet",
          instance: s,
          count: 1,
          state: f
        }, a.set(u, s);
      }
    }
  }
  function ey(e, t) {
    Bl.X(e, t);
    var n = ti;
    if (n && e) {
      var l = Yn(n).hoistableScripts, a = li(e), u = l.get(a);
      u || (u = n.querySelector(lA(a)), u || (e = Z({ src: e, async: !0 }, t), (t = _n.get(a)) && _r(e, t), u = n.createElement("script"), Qe(u), Dt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(a, u));
    }
  }
  function ty(e, t) {
    Bl.M(e, t);
    var n = ti;
    if (n && e) {
      var l = Yn(n).hoistableScripts, a = li(e), u = l.get(a);
      u || (u = n.querySelector(lA(a)), u || (e = Z({ src: e, async: !0, type: "module" }, t), (t = _n.get(a)) && _r(e, t), u = n.createElement("script"), Qe(u), Dt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(a, u));
    }
  }
  function Id(e, t, n, l) {
    var a = (a = ae.current) ? xs(a) : null;
    if (!a) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = ni(n.href), n = Yn(
          a
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = ni(n.href);
          var u = Yn(
            a
          ).hoistableStyles, s = u.get(e);
          if (s || (a = a.ownerDocument || a, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, s), (u = a.querySelector(
            nA(e)
          )) && !u._p && (s.instance = u, s.state.loading = 5), _n.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, _n.set(e, n), u || ny(
            a,
            e,
            n,
            s.state
          ))), t && l === null)
            throw Error(c(528, ""));
          return s;
        }
        if (t && l !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = li(n), n = Yn(
          a
        ).hoistableScripts, l = n.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, e));
    }
  }
  function ni(e) {
    return 'href="' + St(e) + '"';
  }
  function nA(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function $d(e) {
    return Z({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function ny(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), Dt(t, "link", n), Qe(t), e.head.appendChild(t));
  }
  function li(e) {
    return '[src="' + St(e) + '"]';
  }
  function lA(e) {
    return "script[async]" + e;
  }
  function em(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + St(n.href) + '"]'
          );
          if (l)
            return t.instance = l, Qe(l), l;
          var a = Z({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Qe(l), Dt(l, "style", a), Rs(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          a = ni(n.href);
          var u = e.querySelector(
            nA(a)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Qe(u), u;
          l = $d(n), (a = _n.get(a)) && Dr(l, a), u = (e.ownerDocument || e).createElement("link"), Qe(u);
          var s = u;
          return s._p = new Promise(function(f, y) {
            s.onload = f, s.onerror = y;
          }), Dt(u, "link", l), t.state.loading |= 4, Rs(u, n.precedence, e), t.instance = u;
        case "script":
          return u = li(n.src), (a = e.querySelector(
            lA(u)
          )) ? (t.instance = a, Qe(a), a) : (l = n, (a = _n.get(u)) && (l = Z({}, n), _r(l, a)), e = e.ownerDocument || e, a = e.createElement("script"), Qe(a), Dt(a, "link", l), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Rs(l, n.precedence, e));
    return t.instance;
  }
  function Rs(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = l.length ? l[l.length - 1] : null, u = a, s = 0; s < l.length; s++) {
      var f = l[s];
      if (f.dataset.precedence === t) u = f;
      else if (u !== a) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Dr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function _r(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var qs = null;
  function tm(e, t, n) {
    if (qs === null) {
      var l = /* @__PURE__ */ new Map(), a = qs = /* @__PURE__ */ new Map();
      a.set(n, l);
    } else
      a = qs, l = a.get(n), l || (l = /* @__PURE__ */ new Map(), a.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var u = n[a];
      if (!(u[Gn] || u[ke] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = u.getAttribute(t) || "";
        s = e + s;
        var f = l.get(s);
        f ? f.push(u) : l.set(s, [u]);
      }
    }
    return l;
  }
  function nm(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function ly(e, t, n) {
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
  function lm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function ay(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var a = ni(l.href), u = t.querySelector(
          nA(a)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ms.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, Qe(u);
          return;
        }
        u = t.ownerDocument || t, l = $d(l), (a = _n.get(a)) && Dr(l, a), u = u.createElement("link"), Qe(u);
        var s = u;
        s._p = new Promise(function(f, y) {
          s.onload = f, s.onerror = y;
        }), Dt(u, "link", l), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Ms.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Lr = 0;
  function uy(e, t) {
    return e.stylesheets && e.count === 0 && Os(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && Os(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Lr === 0 && (Lr = 62500 * Hh());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Os(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Lr ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(a);
      };
    } : null;
  }
  function Ms() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Os(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var zs = null;
  function Os(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, zs = /* @__PURE__ */ new Map(), t.forEach(iy, e), zs = null, Ms.call(e));
  }
  function iy(e, t) {
    if (!(t.state.loading & 4)) {
      var n = zs.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), zs.set(e, n);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < a.length; u++) {
          var s = a[u];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (n.set(s.dataset.precedence, s), l = s);
        }
        l && n.set(null, l);
      }
      a = t.instance, s = a.getAttribute("data-precedence"), u = n.get(s) || l, u === l && n.set(null, a), n.set(s, a), this.count++, l = Ms.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), u ? u.parentNode.insertBefore(a, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var aA = {
    $$typeof: Te,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  };
  function Ay(e, t, n, l, a, u, s, f, y) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = F(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = F(0), this.hiddenUpdates = F(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function am(e, t, n, l, a, u, s, f, y, T, q, U) {
    return e = new Ay(
      e,
      t,
      n,
      s,
      y,
      T,
      q,
      U,
      f
    ), t = 1, u === !0 && (t |= 24), u = jt(3, null, null, t), e.current = u, u.stateNode = e, t = yc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, bc(u), e;
  }
  function um(e) {
    return e ? (e = rt, e) : rt;
  }
  function im(e, t, n, l, a, u) {
    a = um(a), l.context === null ? l.context = a : l.pendingContext = a, l = sa(t), l.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (l.callback = u), n = ca(e, l, t), n !== null && (an(n, e, t), _i(n, e, t));
  }
  function Am(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Vr(e, t) {
    Am(e, t), (e = e.alternate) && Am(e, t);
  }
  function sm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = B(e, 67108864);
      t !== null && an(t, e, 67108864), Vr(e, 67108864);
    }
  }
  function cm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = yn();
      t = se(t);
      var n = B(e, t);
      n !== null && an(n, e, t), Vr(e, t);
    }
  }
  var js = !0;
  function sy(e, t, n, l) {
    var a = R.T;
    R.T = null;
    var u = L.p;
    try {
      L.p = 2, Hr(e, t, n, l);
    } finally {
      L.p = u, R.T = a;
    }
  }
  function cy(e, t, n, l) {
    var a = R.T;
    R.T = null;
    var u = L.p;
    try {
      L.p = 8, Hr(e, t, n, l);
    } finally {
      L.p = u, R.T = a;
    }
  }
  function Hr(e, t, n, l) {
    if (js) {
      var a = Xr(l);
      if (a === null)
        xr(
          e,
          t,
          l,
          Cs,
          n
        ), om(e, l);
      else if (oy(
        a,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (om(e, l), t & 4 && -1 < ry.indexOf(e)) {
        for (; a !== null; ) {
          var u = gn(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var s = Yt(u.pendingLanes);
                  if (s !== 0) {
                    var f = u;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; s; ) {
                      var y = 1 << 31 - Rt(s);
                      f.entanglements[1] |= y, s &= ~y;
                    }
                    ml(u), (ze & 6) === 0 && (ms = it() + 500, Ii(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = B(u, 2), f !== null && an(f, u, 2), ys(), Vr(u, 2);
            }
          if (u = Xr(l), u === null && xr(
            e,
            t,
            l,
            Cs,
            n
          ), u === a) break;
          a = u;
        }
        a !== null && l.stopPropagation();
      } else
        xr(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function Xr(e) {
    return e = Tt(e), Br(e);
  }
  var Cs = null;
  function Br(e) {
    if (Cs = null, e = nl(e), e !== null) {
      var t = z(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = _(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = X(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Cs = e, null;
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
        switch (Xn()) {
          case Gt:
            return 2;
          case Wt:
            return 8;
          case Ot:
          case An:
            return 32;
          case dA:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Gr = !1, ba = null, Sa = null, Ta = null, uA = /* @__PURE__ */ new Map(), iA = /* @__PURE__ */ new Map(), Na = [], ry = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function om(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ba = null;
        break;
      case "dragenter":
      case "dragleave":
        Sa = null;
        break;
      case "mouseover":
      case "mouseout":
        Ta = null;
        break;
      case "pointerover":
      case "pointerout":
        uA.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        iA.delete(t.pointerId);
    }
  }
  function AA(e, t, n, l, a, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [a]
    }, t !== null && (t = gn(t), t !== null && sm(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function oy(e, t, n, l, a) {
    switch (t) {
      case "focusin":
        return ba = AA(
          ba,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "dragenter":
        return Sa = AA(
          Sa,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "mouseover":
        return Ta = AA(
          Ta,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "pointerover":
        var u = a.pointerId;
        return uA.set(
          u,
          AA(
            uA.get(u) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
      case "gotpointercapture":
        return u = a.pointerId, iA.set(
          u,
          AA(
            iA.get(u) || null,
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
    var t = nl(e.target);
    if (t !== null) {
      var n = z(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = _(n), t !== null) {
            e.blockedOn = t, gl(e.priority, function() {
              cm(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = X(n), t !== null) {
            e.blockedOn = t, gl(e.priority, function() {
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
  function Us(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Xr(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Nn = l, n.target.dispatchEvent(l), Nn = null;
      } else
        return t = gn(n), t !== null && sm(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function dm(e, t, n) {
    Us(e) && n.delete(t);
  }
  function fy() {
    Gr = !1, ba !== null && Us(ba) && (ba = null), Sa !== null && Us(Sa) && (Sa = null), Ta !== null && Us(Ta) && (Ta = null), uA.forEach(dm), iA.forEach(dm);
  }
  function ws(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Gr || (Gr = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      fy
    )));
  }
  var Ds = null;
  function mm(e) {
    Ds !== e && (Ds = e, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        Ds === e && (Ds = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], a = e[t + 2];
          if (typeof l != "function") {
            if (Br(l || n) === null)
              continue;
            break;
          }
          var u = gn(n);
          u !== null && (e.splice(t, 3), t -= 3, Xc(
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
  function ai(e) {
    function t(y) {
      return ws(y, e);
    }
    ba !== null && ws(ba, e), Sa !== null && ws(Sa, e), Ta !== null && ws(Ta, e), uA.forEach(t), iA.forEach(t);
    for (var n = 0; n < Na.length; n++) {
      var l = Na[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Na.length && (n = Na[0], n.blockedOn === null); )
      fm(n), n.blockedOn === null && Na.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var a = n[l], u = n[l + 1], s = a[At] || null;
        if (typeof u == "function")
          s || mm(n);
        else if (s) {
          var f = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, s = u[At] || null)
              f = s.formAction;
            else if (Br(a) !== null) continue;
          } else f = s.action;
          typeof f == "function" ? n[l + 1] = f : (n.splice(l, 3), l -= 3), mm(n);
        }
      }
  }
  function hm() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(s) {
            return a = s;
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
  function Yr(e) {
    this._internalRoot = e;
  }
  _s.prototype.render = Yr.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, l = yn();
    im(n, l, e, t, null, null);
  }, _s.prototype.unmount = Yr.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      im(e.current, 2, null, e, null, null), ys(), t[Bn] = null;
    }
  };
  function _s(e) {
    this._internalRoot = e;
  }
  _s.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = oi();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Na.length && t !== 0 && t < Na[n].priority; n++) ;
      Na.splice(n, 0, e), n === 0 && fm(e);
    }
  };
  var ym = i.version;
  if (ym !== "19.2.4")
    throw Error(
      c(
        527,
        ym,
        "19.2.4"
      )
    );
  L.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = O(t), e = e !== null ? W(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var dy = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ls.isDisabled && Ls.supportsFiber)
      try {
        vt = Ls.inject(
          dy
        ), Me = Ls;
      } catch {
      }
  }
  return cA.createRoot = function(e, t) {
    if (!b(e)) throw Error(c(299));
    var n = !1, l = "", a = Nf, u = Ef, s = xf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = am(
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
      s,
      hm
    ), e[Bn] = t.current, Er(e), new Yr(t);
  }, cA.hydrateRoot = function(e, t, n) {
    if (!b(e)) throw Error(c(299));
    var l = !1, a = "", u = Nf, s = Ef, f = xf, y = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (f = n.onRecoverableError), n.formState !== void 0 && (y = n.formState)), t = am(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      a,
      y,
      u,
      s,
      f,
      hm
    ), t.context = um(null), n = t.current, l = yn(), l = se(l), a = sa(l), a.callback = null, ca(n, a, l), n = l, t.current.lanes = n, sn(t, n), ml(t), e[Bn] = t.current, Er(e), new _s(t);
  }, cA.version = "19.2.4", cA;
}
var Rm;
function Ny() {
  if (Rm) return Kr.exports;
  Rm = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (i) {
        console.error(i);
      }
  }
  return o(), Kr.exports = Ty(), Kr.exports;
}
var Ey = Ny();
const xy = "/api";
function Hm() {
  return window.localStorage.getItem("token");
}
function qm() {
  const o = `${window.location.pathname}${window.location.search || ""}`;
  window.location.replace(`/login?next=${encodeURIComponent(o)}`);
}
async function ui(o, i = {}) {
  const A = Hm(), c = {
    "Content-Type": "application/json",
    ...A ? { Authorization: `Bearer ${A}` } : {},
    ...i.headers || {}
  }, b = await fetch(`${xy}${o}`, {
    ...i,
    headers: c
  }), z = await b.text();
  let _ = {};
  if (z)
    try {
      _ = JSON.parse(z);
    } catch {
      _ = { message: z };
    }
  if (!b.ok) {
    const X = _.error || _.message || "Request failed";
    throw new Error(X);
  }
  return _;
}
const yl = /* @__PURE__ */ Object.create(null);
yl.open = "0";
yl.close = "1";
yl.ping = "2";
yl.pong = "3";
yl.message = "4";
yl.upgrade = "5";
yl.noop = "6";
const Zs = /* @__PURE__ */ Object.create(null);
Object.keys(yl).forEach((o) => {
  Zs[yl[o]] = o;
});
const $r = { type: "error", data: "parser error" }, Xm = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Bm = typeof ArrayBuffer == "function", Gm = (o) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(o) : o && o.buffer instanceof ArrayBuffer, co = ({ type: o, data: i }, A, c) => Xm && i instanceof Blob ? A ? c(i) : Mm(i, c) : Bm && (i instanceof ArrayBuffer || Gm(i)) ? A ? c(i) : Mm(new Blob([i]), c) : c(yl[o] + (i || "")), Mm = (o, i) => {
  const A = new FileReader();
  return A.onload = function() {
    const c = A.result.split(",")[1];
    i("b" + (c || ""));
  }, A.readAsDataURL(o);
};
function zm(o) {
  return o instanceof Uint8Array ? o : o instanceof ArrayBuffer ? new Uint8Array(o) : new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
}
let Fr;
function Ry(o, i) {
  if (Xm && o.data instanceof Blob)
    return o.data.arrayBuffer().then(zm).then(i);
  if (Bm && (o.data instanceof ArrayBuffer || Gm(o.data)))
    return i(zm(o.data));
  co(o, !1, (A) => {
    Fr || (Fr = new TextEncoder()), i(Fr.encode(A));
  });
}
const Om = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", fA = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let o = 0; o < Om.length; o++)
  fA[Om.charCodeAt(o)] = o;
const qy = (o) => {
  let i = o.length * 0.75, A = o.length, c, b = 0, z, _, X, w;
  o[o.length - 1] === "=" && (i--, o[o.length - 2] === "=" && i--);
  const O = new ArrayBuffer(i), W = new Uint8Array(O);
  for (c = 0; c < A; c += 4)
    z = fA[o.charCodeAt(c)], _ = fA[o.charCodeAt(c + 1)], X = fA[o.charCodeAt(c + 2)], w = fA[o.charCodeAt(c + 3)], W[b++] = z << 2 | _ >> 4, W[b++] = (_ & 15) << 4 | X >> 2, W[b++] = (X & 3) << 6 | w & 63;
  return O;
}, My = typeof ArrayBuffer == "function", ro = (o, i) => {
  if (typeof o != "string")
    return {
      type: "message",
      data: Ym(o, i)
    };
  const A = o.charAt(0);
  return A === "b" ? {
    type: "message",
    data: zy(o.substring(1), i)
  } : Zs[A] ? o.length > 1 ? {
    type: Zs[A],
    data: o.substring(1)
  } : {
    type: Zs[A]
  } : $r;
}, zy = (o, i) => {
  if (My) {
    const A = qy(o);
    return Ym(A, i);
  } else
    return { base64: !0, data: o };
}, Ym = (o, i) => i === "blob" ? o instanceof Blob ? o : new Blob([o]) : o instanceof ArrayBuffer ? o : o.buffer, Zm = "", Oy = (o, i) => {
  const A = o.length, c = new Array(A);
  let b = 0;
  o.forEach((z, _) => {
    co(z, !1, (X) => {
      c[_] = X, ++b === A && i(c.join(Zm));
    });
  });
}, jy = (o, i) => {
  const A = o.split(Zm), c = [];
  for (let b = 0; b < A.length; b++) {
    const z = ro(A[b], i);
    if (c.push(z), z.type === "error")
      break;
  }
  return c;
};
function Cy() {
  return new TransformStream({
    transform(o, i) {
      Ry(o, (A) => {
        const c = A.length;
        let b;
        if (c < 126)
          b = new Uint8Array(1), new DataView(b.buffer).setUint8(0, c);
        else if (c < 65536) {
          b = new Uint8Array(3);
          const z = new DataView(b.buffer);
          z.setUint8(0, 126), z.setUint16(1, c);
        } else {
          b = new Uint8Array(9);
          const z = new DataView(b.buffer);
          z.setUint8(0, 127), z.setBigUint64(1, BigInt(c));
        }
        o.data && typeof o.data != "string" && (b[0] |= 128), i.enqueue(b), i.enqueue(A);
      });
    }
  });
}
let Pr;
function Vs(o) {
  return o.reduce((i, A) => i + A.length, 0);
}
function Hs(o, i) {
  if (o[0].length === i)
    return o.shift();
  const A = new Uint8Array(i);
  let c = 0;
  for (let b = 0; b < i; b++)
    A[b] = o[0][c++], c === o[0].length && (o.shift(), c = 0);
  return o.length && c < o[0].length && (o[0] = o[0].slice(c)), A;
}
function Uy(o, i) {
  Pr || (Pr = new TextDecoder());
  const A = [];
  let c = 0, b = -1, z = !1;
  return new TransformStream({
    transform(_, X) {
      for (A.push(_); ; ) {
        if (c === 0) {
          if (Vs(A) < 1)
            break;
          const w = Hs(A, 1);
          z = (w[0] & 128) === 128, b = w[0] & 127, b < 126 ? c = 3 : b === 126 ? c = 1 : c = 2;
        } else if (c === 1) {
          if (Vs(A) < 2)
            break;
          const w = Hs(A, 2);
          b = new DataView(w.buffer, w.byteOffset, w.length).getUint16(0), c = 3;
        } else if (c === 2) {
          if (Vs(A) < 8)
            break;
          const w = Hs(A, 8), O = new DataView(w.buffer, w.byteOffset, w.length), W = O.getUint32(0);
          if (W > Math.pow(2, 21) - 1) {
            X.enqueue($r);
            break;
          }
          b = W * Math.pow(2, 32) + O.getUint32(4), c = 3;
        } else {
          if (Vs(A) < b)
            break;
          const w = Hs(A, b);
          X.enqueue(ro(z ? w : Pr.decode(w), i)), c = 0;
        }
        if (b === 0 || b > o) {
          X.enqueue($r);
          break;
        }
      }
    }
  });
}
const km = 4;
function ht(o) {
  if (o) return wy(o);
}
function wy(o) {
  for (var i in ht.prototype)
    o[i] = ht.prototype[i];
  return o;
}
ht.prototype.on = ht.prototype.addEventListener = function(o, i) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + o] = this._callbacks["$" + o] || []).push(i), this;
};
ht.prototype.once = function(o, i) {
  function A() {
    this.off(o, A), i.apply(this, arguments);
  }
  return A.fn = i, this.on(o, A), this;
};
ht.prototype.off = ht.prototype.removeListener = ht.prototype.removeAllListeners = ht.prototype.removeEventListener = function(o, i) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var A = this._callbacks["$" + o];
  if (!A) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + o], this;
  for (var c, b = 0; b < A.length; b++)
    if (c = A[b], c === i || c.fn === i) {
      A.splice(b, 1);
      break;
    }
  return A.length === 0 && delete this._callbacks["$" + o], this;
};
ht.prototype.emit = function(o) {
  this._callbacks = this._callbacks || {};
  for (var i = new Array(arguments.length - 1), A = this._callbacks["$" + o], c = 1; c < arguments.length; c++)
    i[c - 1] = arguments[c];
  if (A) {
    A = A.slice(0);
    for (var c = 0, b = A.length; c < b; ++c)
      A[c].apply(this, i);
  }
  return this;
};
ht.prototype.emitReserved = ht.prototype.emit;
ht.prototype.listeners = function(o) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + o] || [];
};
ht.prototype.hasListeners = function(o) {
  return !!this.listeners(o).length;
};
const Qs = typeof Promise == "function" && typeof Promise.resolve == "function" ? (i) => Promise.resolve().then(i) : (i, A) => A(i, 0), Ln = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Dy = "arraybuffer";
function Km(o, ...i) {
  return i.reduce((A, c) => (o.hasOwnProperty(c) && (A[c] = o[c]), A), {});
}
const _y = Ln.setTimeout, Ly = Ln.clearTimeout;
function Ws(o, i) {
  i.useNativeTimers ? (o.setTimeoutFn = _y.bind(Ln), o.clearTimeoutFn = Ly.bind(Ln)) : (o.setTimeoutFn = Ln.setTimeout.bind(Ln), o.clearTimeoutFn = Ln.clearTimeout.bind(Ln));
}
const Vy = 1.33;
function Hy(o) {
  return typeof o == "string" ? Xy(o) : Math.ceil((o.byteLength || o.size) * Vy);
}
function Xy(o) {
  let i = 0, A = 0;
  for (let c = 0, b = o.length; c < b; c++)
    i = o.charCodeAt(c), i < 128 ? A += 1 : i < 2048 ? A += 2 : i < 55296 || i >= 57344 ? A += 3 : (c++, A += 4);
  return A;
}
function Jm() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function By(o) {
  let i = "";
  for (let A in o)
    o.hasOwnProperty(A) && (i.length && (i += "&"), i += encodeURIComponent(A) + "=" + encodeURIComponent(o[A]));
  return i;
}
function Gy(o) {
  let i = {}, A = o.split("&");
  for (let c = 0, b = A.length; c < b; c++) {
    let z = A[c].split("=");
    i[decodeURIComponent(z[0])] = decodeURIComponent(z[1]);
  }
  return i;
}
class Yy extends Error {
  constructor(i, A, c) {
    super(i), this.description = A, this.context = c, this.type = "TransportError";
  }
}
class oo extends ht {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(i) {
    super(), this.writable = !1, Ws(this, i), this.opts = i, this.query = i.query, this.socket = i.socket, this.supportsBinary = !i.forceBase64;
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
  onError(i, A, c) {
    return super.emitReserved("error", new Yy(i, A, c)), this;
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
    const A = ro(i, this.socket.binaryType);
    this.onPacket(A);
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
  createUri(i, A = {}) {
    return i + "://" + this._hostname() + this._port() + this.opts.path + this._query(A);
  }
  _hostname() {
    const i = this.opts.hostname;
    return i.indexOf(":") === -1 ? i : "[" + i + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(i) {
    const A = By(i);
    return A.length ? "?" + A : "";
  }
}
class Zy extends oo {
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
    const A = () => {
      this.readyState = "paused", i();
    };
    if (this._polling || !this.writable) {
      let c = 0;
      this._polling && (c++, this.once("pollComplete", function() {
        --c || A();
      })), this.writable || (c++, this.once("drain", function() {
        --c || A();
      }));
    } else
      A();
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
    const A = (c) => {
      if (this.readyState === "opening" && c.type === "open" && this.onOpen(), c.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(c);
    };
    jy(i, this.socket.binaryType).forEach(A), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, Oy(i, (A) => {
      this.doWrite(A, () => {
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
    const i = this.opts.secure ? "https" : "http", A = this.query || {};
    return this.opts.timestampRequests !== !1 && (A[this.opts.timestampParam] = Jm()), !this.supportsBinary && !A.sid && (A.b64 = 1), this.createUri(i, A);
  }
}
let Qm = !1;
try {
  Qm = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const ky = Qm;
function Ky() {
}
class Jy extends Zy {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(i) {
    if (super(i), typeof location < "u") {
      const A = location.protocol === "https:";
      let c = location.port;
      c || (c = A ? "443" : "80"), this.xd = typeof location < "u" && i.hostname !== location.hostname || c !== i.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(i, A) {
    const c = this.request({
      method: "POST",
      data: i
    });
    c.on("success", A), c.on("error", (b, z) => {
      this.onError("xhr post error", b, z);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const i = this.request();
    i.on("data", this.onData.bind(this)), i.on("error", (A, c) => {
      this.onError("xhr poll error", A, c);
    }), this.pollXhr = i;
  }
}
class hl extends ht {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(i, A, c) {
    super(), this.createRequest = i, Ws(this, c), this._opts = c, this._method = c.method || "GET", this._uri = A, this._data = c.data !== void 0 ? c.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var i;
    const A = Km(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    A.xdomain = !!this._opts.xd;
    const c = this._xhr = this.createRequest(A);
    try {
      c.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          c.setDisableHeaderCheck && c.setDisableHeaderCheck(!0);
          for (let b in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(b) && c.setRequestHeader(b, this._opts.extraHeaders[b]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          c.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        c.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (i = this._opts.cookieJar) === null || i === void 0 || i.addCookies(c), "withCredentials" in c && (c.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (c.timeout = this._opts.requestTimeout), c.onreadystatechange = () => {
        var b;
        c.readyState === 3 && ((b = this._opts.cookieJar) === null || b === void 0 || b.parseCookies(
          // @ts-ignore
          c.getResponseHeader("set-cookie")
        )), c.readyState === 4 && (c.status === 200 || c.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof c.status == "number" ? c.status : 0);
        }, 0));
      }, c.send(this._data);
    } catch (b) {
      this.setTimeoutFn(() => {
        this._onError(b);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = hl.requestsCount++, hl.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = Ky, i)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete hl.requests[this._index], this._xhr = null;
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
hl.requestsCount = 0;
hl.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", jm);
  else if (typeof addEventListener == "function") {
    const o = "onpagehide" in Ln ? "pagehide" : "unload";
    addEventListener(o, jm, !1);
  }
}
function jm() {
  for (let o in hl.requests)
    hl.requests.hasOwnProperty(o) && hl.requests[o].abort();
}
const Qy = (function() {
  const o = Wm({
    xdomain: !1
  });
  return o && o.responseType !== null;
})();
class Wy extends Jy {
  constructor(i) {
    super(i);
    const A = i && i.forceBase64;
    this.supportsBinary = Qy && !A;
  }
  request(i = {}) {
    return Object.assign(i, { xd: this.xd }, this.opts), new hl(Wm, this.uri(), i);
  }
}
function Wm(o) {
  const i = o.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!i || ky))
      return new XMLHttpRequest();
  } catch {
  }
  if (!i)
    try {
      return new Ln[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Fm = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Fy extends oo {
  get name() {
    return "websocket";
  }
  doOpen() {
    const i = this.uri(), A = this.opts.protocols, c = Fm ? {} : Km(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (c.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(i, A, c);
    } catch (b) {
      return this.emitReserved("error", b);
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
    for (let A = 0; A < i.length; A++) {
      const c = i[A], b = A === i.length - 1;
      co(c, this.supportsBinary, (z) => {
        try {
          this.doWrite(c, z);
        } catch {
        }
        b && Qs(() => {
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
    const i = this.opts.secure ? "wss" : "ws", A = this.query || {};
    return this.opts.timestampRequests && (A[this.opts.timestampParam] = Jm()), this.supportsBinary || (A.b64 = 1), this.createUri(i, A);
  }
}
const Ir = Ln.WebSocket || Ln.MozWebSocket;
class Py extends Fy {
  createSocket(i, A, c) {
    return Fm ? new Ir(i, A, c) : A ? new Ir(i, A) : new Ir(i);
  }
  doWrite(i, A) {
    this.ws.send(A);
  }
}
class Iy extends oo {
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
        const A = Uy(Number.MAX_SAFE_INTEGER, this.socket.binaryType), c = i.readable.pipeThrough(A).getReader(), b = Cy();
        b.readable.pipeTo(i.writable), this._writer = b.writable.getWriter();
        const z = () => {
          c.read().then(({ done: X, value: w }) => {
            X || (this.onPacket(w), z());
          }).catch((X) => {
          });
        };
        z();
        const _ = { type: "open" };
        this.query.sid && (_.data = `{"sid":"${this.query.sid}"}`), this._writer.write(_).then(() => this.onOpen());
      });
    });
  }
  write(i) {
    this.writable = !1;
    for (let A = 0; A < i.length; A++) {
      const c = i[A], b = A === i.length - 1;
      this._writer.write(c).then(() => {
        b && Qs(() => {
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
const $y = {
  websocket: Py,
  webtransport: Iy,
  polling: Wy
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
function eo(o) {
  if (o.length > 8e3)
    throw "URI too long";
  const i = o, A = o.indexOf("["), c = o.indexOf("]");
  A != -1 && c != -1 && (o = o.substring(0, A) + o.substring(A, c).replace(/:/g, ";") + o.substring(c, o.length));
  let b = ep.exec(o || ""), z = {}, _ = 14;
  for (; _--; )
    z[tp[_]] = b[_] || "";
  return A != -1 && c != -1 && (z.source = i, z.host = z.host.substring(1, z.host.length - 1).replace(/;/g, ":"), z.authority = z.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), z.ipv6uri = !0), z.pathNames = np(z, z.path), z.queryKey = lp(z, z.query), z;
}
function np(o, i) {
  const A = /\/{2,9}/g, c = i.replace(A, "/").split("/");
  return (i.slice(0, 1) == "/" || i.length === 0) && c.splice(0, 1), i.slice(-1) == "/" && c.splice(c.length - 1, 1), c;
}
function lp(o, i) {
  const A = {};
  return i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(c, b, z) {
    b && (A[b] = z);
  }), A;
}
const to = typeof addEventListener == "function" && typeof removeEventListener == "function", ks = [];
to && addEventListener("offline", () => {
  ks.forEach((o) => o());
}, !1);
class Ra extends ht {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(i, A) {
    if (super(), this.binaryType = Dy, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, i && typeof i == "object" && (A = i, i = null), i) {
      const c = eo(i);
      A.hostname = c.host, A.secure = c.protocol === "https" || c.protocol === "wss", A.port = c.port, c.query && (A.query = c.query);
    } else A.host && (A.hostname = eo(A.host).host);
    Ws(this, A), this.secure = A.secure != null ? A.secure : typeof location < "u" && location.protocol === "https:", A.hostname && !A.port && (A.port = this.secure ? "443" : "80"), this.hostname = A.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = A.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, A.transports.forEach((c) => {
      const b = c.prototype.name;
      this.transports.push(b), this._transportsByName[b] = c;
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
    }, A), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Gy(this.opts.query)), to && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, ks.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(i) {
    const A = Object.assign({}, this.opts.query);
    A.EIO = km, A.transport = i, this.id && (A.sid = this.id);
    const c = Object.assign({}, this.opts, {
      query: A,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[i]);
    return new this._transportsByName[i](c);
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
    const i = this.opts.rememberUpgrade && Ra.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const A = this.createTransport(i);
    A.open(), this.setTransport(A);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(i) {
    this.transport && this.transport.removeAllListeners(), this.transport = i, i.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (A) => this._onClose("transport close", A));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", Ra.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
          const A = new Error("server error");
          A.code = i.data, this._onError(A);
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
    let A = 1;
    for (let c = 0; c < this.writeBuffer.length; c++) {
      const b = this.writeBuffer[c].data;
      if (b && (A += Hy(b)), c > 0 && A > this._maxPayload)
        return this.writeBuffer.slice(0, c);
      A += 2;
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
    return i && (this._pingTimeoutTime = 0, Qs(() => {
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
  write(i, A, c) {
    return this._sendPacket("message", i, A, c), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(i, A, c) {
    return this._sendPacket("message", i, A, c), this;
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
  _sendPacket(i, A, c, b) {
    if (typeof A == "function" && (b = A, A = void 0), typeof c == "function" && (b = c, c = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    c = c || {}, c.compress = c.compress !== !1;
    const z = {
      type: i,
      data: A,
      options: c
    };
    this.emitReserved("packetCreate", z), this.writeBuffer.push(z), b && this.once("flush", b), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const i = () => {
      this._onClose("forced close"), this.transport.close();
    }, A = () => {
      this.off("upgrade", A), this.off("upgradeError", A), i();
    }, c = () => {
      this.once("upgrade", A), this.once("upgradeError", A);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? c() : i();
    }) : this.upgrading ? c() : i()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(i) {
    if (Ra.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", i), this._onClose("transport error", i);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(i, A) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), to && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const c = ks.indexOf(this._offlineEventListener);
        c !== -1 && ks.splice(c, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", i, A), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Ra.protocol = km;
class ap extends Ra {
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
    let A = this.createTransport(i), c = !1;
    Ra.priorWebsocketSuccess = !1;
    const b = () => {
      c || (A.send([{ type: "ping", data: "probe" }]), A.once("packet", (Z) => {
        if (!c)
          if (Z.type === "pong" && Z.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", A), !A)
              return;
            Ra.priorWebsocketSuccess = A.name === "websocket", this.transport.pause(() => {
              c || this.readyState !== "closed" && (W(), this.setTransport(A), A.send([{ type: "upgrade" }]), this.emitReserved("upgrade", A), A = null, this.upgrading = !1, this.flush());
            });
          } else {
            const ee = new Error("probe error");
            ee.transport = A.name, this.emitReserved("upgradeError", ee);
          }
      }));
    };
    function z() {
      c || (c = !0, W(), A.close(), A = null);
    }
    const _ = (Z) => {
      const ee = new Error("probe error: " + Z);
      ee.transport = A.name, z(), this.emitReserved("upgradeError", ee);
    };
    function X() {
      _("transport closed");
    }
    function w() {
      _("socket closed");
    }
    function O(Z) {
      A && Z.name !== A.name && z();
    }
    const W = () => {
      A.removeListener("open", b), A.removeListener("error", _), A.removeListener("close", X), this.off("close", w), this.off("upgrading", O);
    };
    A.once("open", b), A.once("error", _), A.once("close", X), this.once("close", w), this.once("upgrading", O), this._upgrades.indexOf("webtransport") !== -1 && i !== "webtransport" ? this.setTimeoutFn(() => {
      c || A.open();
    }, 200) : A.open();
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
    const A = [];
    for (let c = 0; c < i.length; c++)
      ~this.transports.indexOf(i[c]) && A.push(i[c]);
    return A;
  }
}
let up = class extends ap {
  constructor(i, A = {}) {
    const c = typeof i == "object" ? i : A;
    (!c.transports || c.transports && typeof c.transports[0] == "string") && (c.transports = (c.transports || ["polling", "websocket", "webtransport"]).map((b) => $y[b]).filter((b) => !!b)), super(i, c);
  }
};
function ip(o, i = "", A) {
  let c = o;
  A = A || typeof location < "u" && location, o == null && (o = A.protocol + "//" + A.host), typeof o == "string" && (o.charAt(0) === "/" && (o.charAt(1) === "/" ? o = A.protocol + o : o = A.host + o), /^(https?|wss?):\/\//.test(o) || (typeof A < "u" ? o = A.protocol + "//" + o : o = "https://" + o), c = eo(o)), c.port || (/^(http|ws)$/.test(c.protocol) ? c.port = "80" : /^(http|ws)s$/.test(c.protocol) && (c.port = "443")), c.path = c.path || "/";
  const z = c.host.indexOf(":") !== -1 ? "[" + c.host + "]" : c.host;
  return c.id = c.protocol + "://" + z + ":" + c.port + i, c.href = c.protocol + "://" + z + (A && A.port === c.port ? "" : ":" + c.port), c;
}
const Ap = typeof ArrayBuffer == "function", sp = (o) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(o) : o.buffer instanceof ArrayBuffer, Pm = Object.prototype.toString, cp = typeof Blob == "function" || typeof Blob < "u" && Pm.call(Blob) === "[object BlobConstructor]", rp = typeof File == "function" || typeof File < "u" && Pm.call(File) === "[object FileConstructor]";
function fo(o) {
  return Ap && (o instanceof ArrayBuffer || sp(o)) || cp && o instanceof Blob || rp && o instanceof File;
}
function Ks(o, i) {
  if (!o || typeof o != "object")
    return !1;
  if (Array.isArray(o)) {
    for (let A = 0, c = o.length; A < c; A++)
      if (Ks(o[A]))
        return !0;
    return !1;
  }
  if (fo(o))
    return !0;
  if (o.toJSON && typeof o.toJSON == "function" && arguments.length === 1)
    return Ks(o.toJSON(), !0);
  for (const A in o)
    if (Object.prototype.hasOwnProperty.call(o, A) && Ks(o[A]))
      return !0;
  return !1;
}
function op(o) {
  const i = [], A = o.data, c = o;
  return c.data = no(A, i), c.attachments = i.length, { packet: c, buffers: i };
}
function no(o, i) {
  if (!o)
    return o;
  if (fo(o)) {
    const A = { _placeholder: !0, num: i.length };
    return i.push(o), A;
  } else if (Array.isArray(o)) {
    const A = new Array(o.length);
    for (let c = 0; c < o.length; c++)
      A[c] = no(o[c], i);
    return A;
  } else if (typeof o == "object" && !(o instanceof Date)) {
    const A = {};
    for (const c in o)
      Object.prototype.hasOwnProperty.call(o, c) && (A[c] = no(o[c], i));
    return A;
  }
  return o;
}
function fp(o, i) {
  return o.data = lo(o.data, i), delete o.attachments, o;
}
function lo(o, i) {
  if (!o)
    return o;
  if (o && o._placeholder === !0) {
    if (typeof o.num == "number" && o.num >= 0 && o.num < i.length)
      return i[o.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(o))
    for (let A = 0; A < o.length; A++)
      o[A] = lo(o[A], i);
  else if (typeof o == "object")
    for (const A in o)
      Object.prototype.hasOwnProperty.call(o, A) && (o[A] = lo(o[A], i));
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
var Se;
(function(o) {
  o[o.CONNECT = 0] = "CONNECT", o[o.DISCONNECT = 1] = "DISCONNECT", o[o.EVENT = 2] = "EVENT", o[o.ACK = 3] = "ACK", o[o.CONNECT_ERROR = 4] = "CONNECT_ERROR", o[o.BINARY_EVENT = 5] = "BINARY_EVENT", o[o.BINARY_ACK = 6] = "BINARY_ACK";
})(Se || (Se = {}));
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
    return (i.type === Se.EVENT || i.type === Se.ACK) && Ks(i) ? this.encodeAsBinary({
      type: i.type === Se.EVENT ? Se.BINARY_EVENT : Se.BINARY_ACK,
      nsp: i.nsp,
      data: i.data,
      id: i.id
    }) : [this.encodeAsString(i)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(i) {
    let A = "" + i.type;
    return (i.type === Se.BINARY_EVENT || i.type === Se.BINARY_ACK) && (A += i.attachments + "-"), i.nsp && i.nsp !== "/" && (A += i.nsp + ","), i.id != null && (A += i.id), i.data != null && (A += JSON.stringify(i.data, this.replacer)), A;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(i) {
    const A = op(i), c = this.encodeAsString(A.packet), b = A.buffers;
    return b.unshift(c), b;
  }
}
class mo extends ht {
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
    let A;
    if (typeof i == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      A = this.decodeString(i);
      const c = A.type === Se.BINARY_EVENT;
      c || A.type === Se.BINARY_ACK ? (A.type = c ? Se.EVENT : Se.ACK, this.reconstructor = new hp(A), A.attachments === 0 && super.emitReserved("decoded", A)) : super.emitReserved("decoded", A);
    } else if (fo(i) || i.base64)
      if (this.reconstructor)
        A = this.reconstructor.takeBinaryData(i), A && (this.reconstructor = null, super.emitReserved("decoded", A));
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
    let A = 0;
    const c = {
      type: Number(i.charAt(0))
    };
    if (Se[c.type] === void 0)
      throw new Error("unknown packet type " + c.type);
    if (c.type === Se.BINARY_EVENT || c.type === Se.BINARY_ACK) {
      const z = A + 1;
      for (; i.charAt(++A) !== "-" && A != i.length; )
        ;
      const _ = i.substring(z, A);
      if (_ != Number(_) || i.charAt(A) !== "-")
        throw new Error("Illegal attachments");
      c.attachments = Number(_);
    }
    if (i.charAt(A + 1) === "/") {
      const z = A + 1;
      for (; ++A && !(i.charAt(A) === "," || A === i.length); )
        ;
      c.nsp = i.substring(z, A);
    } else
      c.nsp = "/";
    const b = i.charAt(A + 1);
    if (b !== "" && Number(b) == b) {
      const z = A + 1;
      for (; ++A; ) {
        const _ = i.charAt(A);
        if (_ == null || Number(_) != _) {
          --A;
          break;
        }
        if (A === i.length)
          break;
      }
      c.id = Number(i.substring(z, A + 1));
    }
    if (i.charAt(++A)) {
      const z = this.tryParse(i.substr(A));
      if (mo.isPayloadValid(c.type, z))
        c.data = z;
      else
        throw new Error("invalid payload");
    }
    return c;
  }
  tryParse(i) {
    try {
      return JSON.parse(i, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(i, A) {
    switch (i) {
      case Se.CONNECT:
        return Cm(A);
      case Se.DISCONNECT:
        return A === void 0;
      case Se.CONNECT_ERROR:
        return typeof A == "string" || Cm(A);
      case Se.EVENT:
      case Se.BINARY_EVENT:
        return Array.isArray(A) && (typeof A[0] == "number" || typeof A[0] == "string" && dp.indexOf(A[0]) === -1);
      case Se.ACK:
      case Se.BINARY_ACK:
        return Array.isArray(A);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class hp {
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
      const A = fp(this.reconPack, this.buffers);
      return this.finishedReconstruction(), A;
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
function Cm(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
const yp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: mo,
  Encoder: mp,
  get PacketType() {
    return Se;
  }
}, Symbol.toStringTag, { value: "Module" }));
function $n(o, i, A) {
  return o.on(i, A), function() {
    o.off(i, A);
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
class Im extends ht {
  /**
   * `Socket` constructor.
   */
  constructor(i, A, c) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = i, this.nsp = A, c && c.auth && (this.auth = c.auth), this._opts = Object.assign({}, c), this.io._autoConnect && this.open();
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
      $n(i, "open", this.onopen.bind(this)),
      $n(i, "packet", this.onpacket.bind(this)),
      $n(i, "error", this.onerror.bind(this)),
      $n(i, "close", this.onclose.bind(this))
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
  emit(i, ...A) {
    var c, b, z;
    if (pp.hasOwnProperty(i))
      throw new Error('"' + i.toString() + '" is a reserved event name');
    if (A.unshift(i), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(A), this;
    const _ = {
      type: Se.EVENT,
      data: A
    };
    if (_.options = {}, _.options.compress = this.flags.compress !== !1, typeof A[A.length - 1] == "function") {
      const W = this.ids++, Z = A.pop();
      this._registerAckCallback(W, Z), _.id = W;
    }
    const X = (b = (c = this.io.engine) === null || c === void 0 ? void 0 : c.transport) === null || b === void 0 ? void 0 : b.writable, w = this.connected && !(!((z = this.io.engine) === null || z === void 0) && z._hasPingExpired());
    return this.flags.volatile && !X || (w ? (this.notifyOutgoingListeners(_), this.packet(_)) : this.sendBuffer.push(_)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(i, A) {
    var c;
    const b = (c = this.flags.timeout) !== null && c !== void 0 ? c : this._opts.ackTimeout;
    if (b === void 0) {
      this.acks[i] = A;
      return;
    }
    const z = this.io.setTimeoutFn(() => {
      delete this.acks[i];
      for (let X = 0; X < this.sendBuffer.length; X++)
        this.sendBuffer[X].id === i && this.sendBuffer.splice(X, 1);
      A.call(this, new Error("operation has timed out"));
    }, b), _ = (...X) => {
      this.io.clearTimeoutFn(z), A.apply(this, X);
    };
    _.withError = !0, this.acks[i] = _;
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
  emitWithAck(i, ...A) {
    return new Promise((c, b) => {
      const z = (_, X) => _ ? b(_) : c(X);
      z.withError = !0, A.push(z), this.emit(i, ...A);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(i) {
    let A;
    typeof i[i.length - 1] == "function" && (A = i.pop());
    const c = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: i,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    i.push((b, ...z) => (this._queue[0], b !== null ? c.tryCount > this._opts.retries && (this._queue.shift(), A && A(b)) : (this._queue.shift(), A && A(null, ...z)), c.pending = !1, this._drainQueue())), this._queue.push(c), this._drainQueue();
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
    const A = this._queue[0];
    A.pending && !i || (A.pending = !0, A.tryCount++, this.flags = A.flags, this.emit.apply(this, A.args));
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
      type: Se.CONNECT,
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
  onclose(i, A) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", i, A), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((i) => {
      if (!this.sendBuffer.some((c) => String(c.id) === i)) {
        const c = this.acks[i];
        delete this.acks[i], c.withError && c.call(this, new Error("socket has been disconnected"));
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
        case Se.CONNECT:
          i.data && i.data.sid ? this.onconnect(i.data.sid, i.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case Se.EVENT:
        case Se.BINARY_EVENT:
          this.onevent(i);
          break;
        case Se.ACK:
        case Se.BINARY_ACK:
          this.onack(i);
          break;
        case Se.DISCONNECT:
          this.ondisconnect();
          break;
        case Se.CONNECT_ERROR:
          this.destroy();
          const c = new Error(i.data.message);
          c.data = i.data.data, this.emitReserved("connect_error", c);
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
    const A = i.data || [];
    i.id != null && A.push(this.ack(i.id)), this.connected ? this.emitEvent(A) : this.receiveBuffer.push(Object.freeze(A));
  }
  emitEvent(i) {
    if (this._anyListeners && this._anyListeners.length) {
      const A = this._anyListeners.slice();
      for (const c of A)
        c.apply(this, i);
    }
    super.emit.apply(this, i), this._pid && i.length && typeof i[i.length - 1] == "string" && (this._lastOffset = i[i.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(i) {
    const A = this;
    let c = !1;
    return function(...b) {
      c || (c = !0, A.packet({
        type: Se.ACK,
        id: i,
        data: b
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
    const A = this.acks[i.id];
    typeof A == "function" && (delete this.acks[i.id], A.withError && i.data.unshift(null), A.apply(this, i.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(i, A) {
    this.id = i, this.recovered = A && this._pid === A, this._pid = A, this.connected = !0, this.emitBuffered(), this._drainQueue(!0), this.emitReserved("connect");
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
    return this.connected && this.packet({ type: Se.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
      const A = this._anyListeners;
      for (let c = 0; c < A.length; c++)
        if (i === A[c])
          return A.splice(c, 1), this;
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
      const A = this._anyOutgoingListeners;
      for (let c = 0; c < A.length; c++)
        if (i === A[c])
          return A.splice(c, 1), this;
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
      const A = this._anyOutgoingListeners.slice();
      for (const c of A)
        c.apply(this, i.data);
    }
  }
}
function Ai(o) {
  o = o || {}, this.ms = o.min || 100, this.max = o.max || 1e4, this.factor = o.factor || 2, this.jitter = o.jitter > 0 && o.jitter <= 1 ? o.jitter : 0, this.attempts = 0;
}
Ai.prototype.duration = function() {
  var o = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var i = Math.random(), A = Math.floor(i * this.jitter * o);
    o = (Math.floor(i * 10) & 1) == 0 ? o - A : o + A;
  }
  return Math.min(o, this.max) | 0;
};
Ai.prototype.reset = function() {
  this.attempts = 0;
};
Ai.prototype.setMin = function(o) {
  this.ms = o;
};
Ai.prototype.setMax = function(o) {
  this.max = o;
};
Ai.prototype.setJitter = function(o) {
  this.jitter = o;
};
class ao extends ht {
  constructor(i, A) {
    var c;
    super(), this.nsps = {}, this.subs = [], i && typeof i == "object" && (A = i, i = void 0), A = A || {}, A.path = A.path || "/socket.io", this.opts = A, Ws(this, A), this.reconnection(A.reconnection !== !1), this.reconnectionAttempts(A.reconnectionAttempts || 1 / 0), this.reconnectionDelay(A.reconnectionDelay || 1e3), this.reconnectionDelayMax(A.reconnectionDelayMax || 5e3), this.randomizationFactor((c = A.randomizationFactor) !== null && c !== void 0 ? c : 0.5), this.backoff = new Ai({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(A.timeout == null ? 2e4 : A.timeout), this._readyState = "closed", this.uri = i;
    const b = A.parser || yp;
    this.encoder = new b.Encoder(), this.decoder = new b.Decoder(), this._autoConnect = A.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(i) {
    return arguments.length ? (this._reconnection = !!i, i || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(i) {
    return i === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = i, this);
  }
  reconnectionDelay(i) {
    var A;
    return i === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = i, (A = this.backoff) === null || A === void 0 || A.setMin(i), this);
  }
  randomizationFactor(i) {
    var A;
    return i === void 0 ? this._randomizationFactor : (this._randomizationFactor = i, (A = this.backoff) === null || A === void 0 || A.setJitter(i), this);
  }
  reconnectionDelayMax(i) {
    var A;
    return i === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = i, (A = this.backoff) === null || A === void 0 || A.setMax(i), this);
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
    const A = this.engine, c = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const b = $n(A, "open", function() {
      c.onopen(), i && i();
    }), z = (X) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", X), i ? i(X) : this.maybeReconnectOnOpen();
    }, _ = $n(A, "error", z);
    if (this._timeout !== !1) {
      const X = this._timeout, w = this.setTimeoutFn(() => {
        b(), z(new Error("timeout")), A.close();
      }, X);
      this.opts.autoUnref && w.unref(), this.subs.push(() => {
        this.clearTimeoutFn(w);
      });
    }
    return this.subs.push(b), this.subs.push(_), this;
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
      $n(i, "ping", this.onping.bind(this)),
      $n(i, "data", this.ondata.bind(this)),
      $n(i, "error", this.onerror.bind(this)),
      $n(i, "close", this.onclose.bind(this)),
      // @ts-ignore
      $n(this.decoder, "decoded", this.ondecoded.bind(this))
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
    } catch (A) {
      this.onclose("parse error", A);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(i) {
    Qs(() => {
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
  socket(i, A) {
    let c = this.nsps[i];
    return c ? this._autoConnect && !c.active && c.connect() : (c = new Im(this, i, A), this.nsps[i] = c), c;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(i) {
    const A = Object.keys(this.nsps);
    for (const c of A)
      if (this.nsps[c].active)
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
    const A = this.encoder.encode(i);
    for (let c = 0; c < A.length; c++)
      this.engine.write(A[c], i.options);
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
  onclose(i, A) {
    var c;
    this.cleanup(), (c = this.engine) === null || c === void 0 || c.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", i, A), this._reconnection && !this.skipReconnect && this.reconnect();
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
      const A = this.backoff.duration();
      this._reconnecting = !0;
      const c = this.setTimeoutFn(() => {
        i.skipReconnect || (this.emitReserved("reconnect_attempt", i.backoff.attempts), !i.skipReconnect && i.open((b) => {
          b ? (i._reconnecting = !1, i.reconnect(), this.emitReserved("reconnect_error", b)) : i.onreconnect();
        }));
      }, A);
      this.opts.autoUnref && c.unref(), this.subs.push(() => {
        this.clearTimeoutFn(c);
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
const rA = {};
function Js(o, i) {
  typeof o == "object" && (i = o, o = void 0), i = i || {};
  const A = ip(o, i.path || "/socket.io"), c = A.source, b = A.id, z = A.path, _ = rA[b] && z in rA[b].nsps, X = i.forceNew || i["force new connection"] || i.multiplex === !1 || _;
  let w;
  return X ? w = new ao(c, i) : (rA[b] || (rA[b] = new ao(c, i)), w = rA[b]), A.query && !i.query && (i.query = A.queryKey), w.socket(A.path, i);
}
Object.assign(Js, {
  Manager: ao,
  Socket: Im,
  io: Js,
  connect: Js
});
let Au = null;
function gp(o) {
  return Au ? Au.auth = { token: o } : Au = Js({
    autoConnect: !1,
    transports: ["websocket"],
    auth: { token: o }
  }), Au;
}
function vp() {
  Au && (Au.disconnect(), Au = null);
}
const bp = "data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k=", uo = ["POPULAR", "MAL_ONLY", "HYBRID"], io = ["STANDARD", "BALANCED_RELAXED"], Ao = ["OP_ONLY", "ED_ONLY", "MIXED"], Xs = {
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
}, Bs = {
  STANDARD: {
    label: "Standard",
    help: "Simple rotation; no strict player balancing."
  },
  BALANCED_RELAXED: {
    label: "Balanced",
    help: "Try to balance players, then relax constraints when needed."
  }
}, Gs = {
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
}, Sp = 2, Tp = 3, Np = 2, Ep = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Qt = {
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
function Um(o) {
  return o ? {
    name: typeof o.name == "string" ? o.name : "",
    isPrivate: !!o.isPrivate,
    maxPlayers: Number.isInteger(o.maxPlayers) ? o.maxPlayers : Qt.maxPlayers,
    roundCount: Number.isInteger(o.roundCount) ? o.roundCount : Qt.roundCount,
    guessSeconds: Number.isInteger(o.guessSeconds) ? o.guessSeconds : Qt.guessSeconds,
    sourceMode: uo.includes(o.sourceMode) ? o.sourceMode : Qt.sourceMode,
    selectionMode: io.includes(o.selectionMode) ? o.selectionMode : Qt.selectionMode,
    themeMode: Ao.includes(o.themeMode) ? o.themeMode : Qt.themeMode,
    animeScoreMin: Number.isInteger(o.animeScoreMin) ? o.animeScoreMin : Qt.animeScoreMin,
    animeScoreMax: Number.isInteger(o.animeScoreMax) ? o.animeScoreMax : Qt.animeScoreMax,
    playerScoreMin: Number.isInteger(o.playerScoreMin) ? o.playerScoreMin : Qt.playerScoreMin,
    playerScoreMax: Number.isInteger(o.playerScoreMax) ? o.playerScoreMax : Qt.playerScoreMax
  } : { ...Qt };
}
function pn(o, i, A, { timeoutMs: c = 1e4 } = {}) {
  return new Promise((b, z) => {
    let _ = !1;
    const X = window.setTimeout(() => {
      _ || (_ = !0, z(new Error("Request timed out")));
    }, c);
    o.emit(i, A, (w) => {
      if (!_)
        return _ = !0, window.clearTimeout(X), w?.ok ? b(w) : z(new Error(w?.error || w?.code || "Request failed"));
    });
  });
}
function Ht(o) {
  return String(o || "").trim().toUpperCase();
}
function xp(o) {
  const A = String(o || "").trim().match(/^\/(?:amq\/lobby|amq\/invite|invite)\/([^/?#]+)/i);
  if (!A) return "";
  try {
    return Ht(decodeURIComponent(A[1]));
  } catch {
    return "";
  }
}
function iu(o, i) {
  const A = Ht(o), c = A ? `/amq/lobby/${encodeURIComponent(A)}` : "/amq", b = new URLSearchParams(window.location.search);
  i ? (b.set("i", i), b.delete("inviteToken"), b.delete("lobby")) : (b.delete("lobby"), b.delete("i"), b.delete("inviteToken"));
  const z = b.toString();
  window.history.replaceState({}, "", z ? `${c}?${z}` : c);
}
function Rp(o) {
  const i = String(o || "").trim();
  if (!i) return "";
  const A = i.split(".");
  if (A.length !== 3) return "";
  const c = String(A[0] || "").toUpperCase();
  return /^[A-Z0-9]{4,12}$/.test(c) ? c : "";
}
function qp(o) {
  if (!Number.isFinite(o) || o <= 0) return "00:00";
  const i = Math.ceil(o / 1e3), A = Math.floor(i / 60), c = i % 60;
  return `${String(A).padStart(2, "0")}:${String(c).padStart(2, "0")}`;
}
function Vn(o, i, A) {
  const c = Number.parseInt(o, 10);
  return Number.isFinite(c) ? Math.max(i, Math.min(A, c)) : i;
}
function xa(o, i, A, c, b) {
  const z = Vn(o?.[i], 1, 10), _ = Vn(o?.[A], 1, 10), X = Vn(b, 1, 10);
  return c === "min" ? {
    ...o,
    [i]: Math.min(X, _),
    [A]: _
  } : {
    ...o,
    [i]: z,
    [A]: Math.max(X, z)
  };
}
function Ys({
  label: o,
  minValue: i,
  maxValue: A,
  onMinChange: c,
  onMaxChange: b,
  hint: z = ""
}) {
  const _ = h.useRef(null), X = Vn(i, 1, 10), w = Vn(A, 1, 10), O = (X - 1) / 9 * 100, W = (w - 1) / 9 * 100, Z = Math.max(0, W - O), ee = h.useRef(X), Ve = h.useRef(w);
  h.useEffect(() => {
    ee.current = X, Ve.current = w;
  }, [w, X]);
  const He = h.useCallback((me) => {
    const Te = _.current;
    if (!Te) return null;
    const Ee = Te.getBoundingClientRect();
    if (!Number.isFinite(Ee.width) || Ee.width <= 0) return null;
    const Xe = Math.max(0, Math.min(1, (me - Ee.left) / Ee.width));
    return Math.max(1, Math.min(10, Math.round(Xe * 9) + 1));
  }, []), Fe = h.useCallback((me, Te) => {
    const Ee = Vn(Te, 1, 10);
    if (me === "min") {
      const re = Math.min(Ee, Ve.current);
      ee.current = re, c(String(re));
      return;
    }
    const Xe = Math.max(Ee, ee.current);
    Ve.current = Xe, b(String(Xe));
  }, [b, c]), yt = h.useCallback((me, Te) => {
    if (Te.button !== 0) return;
    Te.preventDefault();
    const Ee = He(Te.clientX);
    Ee != null && Fe(me, Ee);
    const Xe = ($) => {
      const Je = He($.clientX);
      Je != null && Fe(me, Je);
    }, re = () => {
      window.removeEventListener("pointermove", Xe), window.removeEventListener("pointerup", re);
    };
    window.addEventListener("pointermove", Xe), window.addEventListener("pointerup", re);
  }, [Fe, He]), Pe = h.useCallback((me) => {
    if (me.button !== 0) return;
    const Te = He(me.clientX);
    if (Te == null) return;
    const Ee = Math.abs(Te - ee.current), Xe = Math.abs(Te - Ve.current), re = Ee <= Xe ? "min" : "max";
    yt(re, me);
  }, [yt, He]);
  return /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card gmq-score-range-card", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "gmq-score-range-head", children: [
      /* @__PURE__ */ m.jsx("span", { children: o }),
      /* @__PURE__ */ m.jsxs("strong", { children: [
        X,
        " - ",
        w
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: "gmq-score-range-slider",
        style: {
          "--range-start": `${O}%`,
          "--range-end": `${W}%`
        },
        children: [
          /* @__PURE__ */ m.jsx("div", { className: "gmq-score-range-rail", ref: _, onPointerDown: Pe, children: /* @__PURE__ */ m.jsxs(
            "div",
            {
              className: "gmq-score-range-selected",
              style: { left: `${O}%`, width: `${Z}%` },
              children: [
                /* @__PURE__ */ m.jsx(
                  "button",
                  {
                    type: "button",
                    className: "gmq-score-range-handle gmq-score-range-handle-min",
                    "aria-label": `${o} minimum`,
                    onPointerDown: (me) => {
                      me.stopPropagation(), yt("min", me);
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
                      me.stopPropagation(), yt("max", me);
                    }
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ m.jsx("div", { className: "gmq-score-range-scale", "aria-hidden": "true", children: Ep.map((me) => /* @__PURE__ */ m.jsxs(
            "span",
            {
              className: `gmq-score-range-scale-tick${me >= X && me <= w ? " is-selected" : ""}`,
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
    z ? /* @__PURE__ */ m.jsx("p", { className: "gmq-field-help gmq-muted", children: z }) : null
  ] });
}
function wm(o) {
  const i = String(o || "").replace(/\D+/g, "");
  return i ? i.slice(0, 2) : "";
}
function ii(o, i) {
  const A = (Number(i?.score) || 0) - (Number(o?.score) || 0);
  return A !== 0 ? A : String(o?.displayName || "").localeCompare(String(i?.displayName || ""));
}
function Mp(o) {
  return Array.isArray(o) ? o.map((i) => ({
    index: Number.parseInt(i?.index, 10),
    audioUrl: typeof i?.audioUrl == "string" ? i.audioUrl : null,
    videoUrl: typeof i?.videoUrl == "string" ? i.videoUrl : null,
    sampleStartSec: Number.isFinite(i?.sampleStartSec) ? i.sampleStartSec : 0,
    sampleDurationSec: Number.isFinite(i?.sampleDurationSec) ? i.sampleDurationSec : 0
  })).filter((i) => Number.isInteger(i.index) && i.index > 0).sort((i, A) => i.index - A.index) : [];
}
function Gl(o) {
  return String(o || "").trim();
}
function Dm(o) {
  return String(o || "").normalize("NFKC").toLowerCase().trim().replace(/[^\p{L}\p{N}\s]/gu, "").replace(/\s+/g, " ");
}
function _m(o) {
  const i = Gl(o).toLowerCase();
  return i ? i.includes("only host") ? "Only the host can start the game." : i.includes("all players must be ready") ? "All players must click Ready before the host can start." : i.includes("not enough players") ? "Not enough players to start. Invite more players or lower the minimum players setting." : i.includes("balanced strict") ? "Balanced mode could not build fair rounds from MAL lists. Try Standard or Hybrid." : i.includes("mal_only") ? "MAL_ONLY could not build enough rounds from linked MAL lists. Try HYBRID or POPULAR." : i.includes("playable round media") || i.includes("round seeds") || i.includes("media provider") ? "Could not prepare enough playable songs for this match. Try fewer rounds or different source/theme settings." : i.includes("timed out") ? "Game start timed out. Please try again." : Gl(o) : "Could not start the game right now. Please try again.";
}
function zp(o) {
  const i = Gl(o).toLowerCase();
  return i ? i.includes("at least 2 characters") ? "Type at least 2 characters to search." : i.includes("too many") || i.includes("rate") ? "Search is rate-limited right now. Wait a few seconds and try again." : i.includes("timed out") ? "Search timed out. Please try again." : "Search is temporarily unavailable. You can still submit a typed guess." : "Search is temporarily unavailable. You can still submit a typed guess.";
}
function oA(o) {
  return o === "autoplay_blocked" ? "Autoplay was blocked or the sample failed to auto-start. Press Play sample." : o === "source_unavailable" ? "This sample source failed to load for your browser." : "Could not play sample audio for this round.";
}
function Op(o) {
  const i = Gl(o).toLowerCase();
  return i ? i.includes("lobby not found") || i.includes("not accepting new players") || i.includes("lobby is full") : !1;
}
function jp(o) {
  const i = Gl(o).toLowerCase();
  return i ? i.includes("kicked from this lobby") ? Gl(o) : i.includes("valid invite token is required") ? "This lobby is private. Ask the host for the invite link." : Gl(o) : "Could not join this lobby right now.";
}
function Cp(o) {
  const i = String(o || "").trim().toLowerCase();
  return i === "host_offline_timeout" ? "Lobby was closed because the host stayed offline too long." : i === "zero_connected_round_streak" ? "Lobby was closed due to inactivity (no connected players for multiple rounds)." : "Lobby was closed.";
}
function Lm(o) {
  const i = String(o?.name || ""), A = Gl(o?.message).toLowerCase();
  return i === "NotAllowedError" || A.includes("notallowederror") || A.includes("user gesture") || A.includes("permission") || A.includes("autoplay") ? "autoplay_blocked" : i === "AbortError" ? "aborted" : i === "NotSupportedError" || A.includes("failed to load") || A.includes("no supported source") || A.includes("not supported") ? "source_unavailable" : "play_failed";
}
function Up() {
  const o = Hm(), i = h.useRef(null), A = h.useRef(null), c = h.useRef(""), b = h.useRef(null), z = h.useRef(!1), _ = h.useRef(null), X = h.useRef(!1), w = h.useRef(!1), O = h.useRef(0), W = h.useRef(!1), Z = h.useRef(!1), ee = h.useRef(null), Ve = h.useRef(null), He = h.useRef(null), Fe = h.useRef(null), yt = h.useRef([]), Pe = h.useRef(null), me = h.useRef(null), Te = h.useRef(0.25), Ee = h.useRef(null), Xe = h.useRef(/* @__PURE__ */ new Map()), re = h.useRef(/* @__PURE__ */ new Map()), $ = h.useRef(/* @__PURE__ */ new Map()), Je = h.useRef(/* @__PURE__ */ new Map()), xt = h.useRef(/* @__PURE__ */ new Map()), Hn = h.useRef(/* @__PURE__ */ new Map()), pt = h.useRef(/* @__PURE__ */ new Map()), Ie = h.useRef([]), un = h.useRef(/* @__PURE__ */ new Set()), Xt = h.useRef(0), _t = h.useRef([]), R = h.useRef(!1), L = h.useRef(null), K = h.useRef(!1), Ne = h.useRef(0), le = h.useRef(null), p = h.useRef(null), C = h.useRef({ roundId: null, key: "" }), V = h.useRef(""), H = h.useRef(null), P = h.useRef(!1), [ae, xe] = h.useState(!0), [oe, te] = h.useState(""), [el, he] = h.useState(""), [Yl, zt] = h.useState(""), [Bt, su] = h.useState(!1), [ie, Fs] = h.useState(null), [cu, ru] = h.useState([]), [qa, si] = h.useState(""), [Ma, za] = h.useState(!1), [it, Xn] = h.useState(!1), [Gt, Wt] = h.useState(null), [Ot, An] = h.useState(null), [dA, mA] = h.useState(!1), [gt, vt] = h.useState(Qt), [Me, Ze] = h.useState(Qt), [Rt, hA] = h.useState(String(Qt.maxPlayers)), [ou, fu] = h.useState(String(Qt.maxPlayers)), [Oa, ja] = h.useState(""), [Ca, Yt] = h.useState(""), [j, Zt] = h.useState(null), [yA, ci] = h.useState(null), [F, sn] = h.useState("WAITING"), [Zl, pl] = h.useState(null), [pA, ri] = h.useState("00:00"), [se, Ua] = h.useState(null), [oi, gl] = h.useState([]), [Be, ke] = h.useState(null), [At, Bn] = h.useState(null), [tl, kl] = h.useState([]), [Ft, wa] = h.useState([]), [Gn, vl] = h.useState([]), [nl, gn] = h.useState([]), [vn, Yn] = h.useState(""), [Qe, Da] = h.useState(null), [st, kt] = h.useState([]), [cn, bl] = h.useState(!1), [Zn, bn] = h.useState(-1), [fi, Sn] = h.useState(!1), [di, bt] = h.useState(!1), [rn, du] = h.useState(null), [mi, kn] = h.useState(!1), [ll, mu] = h.useState(0.25), [gA, St] = h.useState(""), [hu, Pt] = h.useState(""), [yu, Kt] = h.useState(""), [vA, al] = h.useState(!1), [Kn, hi] = h.useState({ ready: 0, failed: 0, total: 0 }), [pu, Sl] = h.useState(""), [gu, Kl] = h.useState(!1), [Ps, Tn] = h.useState({ active: !1, nextRoundIndex: null }), [ul, Nn] = h.useState(null), [Tt, Jl] = h.useState(null), [il, bA] = h.useState(""), [Jn, Qn] = h.useState(!1), [Al, En] = h.useState({
    visible: !1,
    x: 0,
    y: 0,
    text: ""
  }), vu = h.useCallback((r) => {
    En({
      visible: !0,
      x: Number.isFinite(r?.clientX) ? r.clientX : 0,
      y: Number.isFinite(r?.clientY) ? r.clientY : 0,
      text: "User has connected a MAL account."
    });
  }, []), Tl = h.useCallback(() => {
    En((r) => r.visible ? { ...r, visible: !1 } : r);
  }, []);
  h.useEffect(() => {
    F === "WAITING" && j?.status === "WAITING" || Tl();
  }, [F, j?.status, Tl]);
  const sl = h.useCallback((r) => {
    const d = wm(r);
    hA(d), d && vt((E) => ({
      ...E,
      maxPlayers: Vn(d, 1, 8)
    }));
  }, []), yi = h.useCallback((r) => {
    const d = wm(r);
    fu(d), d && Ze((E) => ({
      ...E,
      maxPlayers: Vn(d, 1, 8)
    }));
  }, []), bu = h.useCallback((r) => {
    vt((d) => xa(d, "animeScoreMin", "animeScoreMax", "min", r));
  }, []), SA = h.useCallback((r) => {
    vt((d) => xa(d, "animeScoreMin", "animeScoreMax", "max", r));
  }, []), Su = h.useCallback((r) => {
    vt((d) => xa(d, "playerScoreMin", "playerScoreMax", "min", r));
  }, []), Tu = h.useCallback((r) => {
    vt((d) => xa(d, "playerScoreMin", "playerScoreMax", "max", r));
  }, []), TA = h.useCallback((r) => {
    Ze((d) => xa(d, "animeScoreMin", "animeScoreMax", "min", r));
  }, []), Lt = h.useCallback((r) => {
    Ze((d) => xa(d, "animeScoreMin", "animeScoreMax", "max", r));
  }, []), Nl = h.useCallback((r) => {
    Ze((d) => xa(d, "playerScoreMin", "playerScoreMax", "min", r));
  }, []), Nu = h.useCallback((r) => {
    Ze((d) => xa(d, "playerScoreMin", "playerScoreMax", "max", r));
  }, []), El = h.useCallback(() => {
    const r = Vn(gt.maxPlayers, 1, 8), d = Rt ? Vn(Rt, 1, 8) : r;
    return vt((E) => ({ ...E, maxPlayers: d })), hA(String(d)), d;
  }, [gt.maxPlayers, Rt]), pi = h.useCallback(() => {
    const r = Vn(Me.maxPlayers, 1, 8), d = ou ? Vn(ou, 1, 8) : r;
    return Ze((E) => ({ ...E, maxPlayers: d })), fu(String(d)), d;
  }, [Me.maxPlayers, ou]);
  h.useEffect(() => {
    A.current = j;
  }, [j]), h.useEffect(() => {
    c.current = Ca;
  }, [Ca]), h.useEffect(() => {
    Te.current = ll;
  }, [ll]), h.useEffect(() => {
    V.current = vn;
  }, [vn]), h.useEffect(() => {
    H.current = Number.isInteger(Qe) ? Qe : null;
  }, [Qe]), h.useEffect(() => {
    Ma && (P.current = !1);
  }, [Ma]);
  const gi = h.useCallback((r) => {
    P.current = r.target === r.currentTarget;
  }, []), vi = h.useCallback((r) => {
    r.target === r.currentTarget && P.current && za(!1);
  }, []);
  h.useEffect(() => {
    if (!Ma && !it && !Gt && !Ot) return;
    const r = (d) => {
      if (d.key === "Escape") {
        if (Ot) {
          An(null);
          return;
        }
        if (Gt) {
          Wt(null);
          return;
        }
        if (it) {
          Xn(!1);
          return;
        }
        za(!1);
      }
    };
    return window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r);
  }, [Ma, Ot, Gt, it]), h.useEffect(() => {
    if (!Ot) return;
    (j?.players || []).some((d) => d.userId === Ot.userId) || An(null);
  }, [Ot, j]), h.useEffect(() => {
    if (!Gt) return;
    (j?.players || []).some((d) => d.userId === Gt.userId) || Wt(null);
  }, [Gt, j]), h.useEffect(() => {
    Jn && (Wt(null), An(null));
  }, [Jn]), h.useEffect(() => {
    if (!j || j.status !== "WAITING") {
      Xn(!1);
      return;
    }
    if (it) return;
    const r = Um(j);
    Ze(r), fu(String(r.maxPlayers));
  }, [j, it]), h.useEffect(() => {
    if (!el) return;
    const r = window.setTimeout(() => he(""), 7e3);
    return () => window.clearTimeout(r);
  }, [el]), h.useEffect(() => {
    if (!Yl) return;
    const r = window.setTimeout(() => zt(""), 4500);
    return () => window.clearTimeout(r);
  }, [Yl]), h.useEffect(() => {
    if (!cn || F !== "GUESSING") return;
    const r = (d) => {
      d.key === "Escape" && (bl(!1), Fe.current?.blur?.());
    };
    return window.addEventListener("keydown", r), () => {
      window.removeEventListener("keydown", r);
    };
  }, [F, cn]), h.useEffect(() => {
    F !== "GUESSING" && (bl(!1), bn(-1));
  }, [F]), h.useEffect(() => {
    yt.current = yt.current.slice(0, st.length);
  }, [st.length]), h.useEffect(() => {
    if (!cn || F !== "GUESSING" || st.length <= 0) {
      bn(-1);
      return;
    }
    bn((r) => r >= 0 && r < st.length ? r : 0);
  }, [F, cn, st]), h.useEffect(() => {
    if (Zn < 0) return;
    yt.current[Zn]?.scrollIntoView?.({ block: "nearest" });
  }, [Zn]);
  const Ql = h.useMemo(() => {
    const r = /* @__PURE__ */ new Map();
    for (const d of j?.players || [])
      r.set(d.userId, d.displayName);
    return r;
  }, [j]), _a = h.useCallback((r) => Ql.get(r) || `User ${r}`, [Ql]), La = h.useCallback(() => {
    me.current && (window.clearTimeout(me.current), me.current = null);
  }, []), on = h.useCallback(() => {
    La();
    const r = Pe.current;
    r?.pause && r.pause(), ee.current && ee.current !== r && ee.current.pause(), Ve.current && Ve.current !== r && Ve.current.pause(), Pe.current = null, bt(!1);
  }, [La]), cl = h.useCallback(() => {
    const r = He.current;
    if (r) {
      r.pause();
      try {
        r.currentTime = 0;
      } catch {
      }
    }
  }, []), rl = h.useCallback(() => {
    const r = _t.current;
    if (!Array.isArray(r) || r.length === 0) {
      hi({ ready: 0, failed: 0, total: 0 });
      return;
    }
    let d = 0, E = 0;
    for (const D of r) {
      const G = re.current.get(D);
      G === "ready" ? d += 1 : G === "failed" && (E += 1);
    }
    hi({ ready: d, failed: E, total: r.length });
  }, []), Wl = h.useCallback((r = null) => {
    const d = r instanceof Set ? r : null, E = [];
    for (const [D] of pt.current)
      d && d.has(D) || E.push(D);
    for (const D of E) {
      const G = pt.current.get(D);
      if (G) {
        try {
          G.pause?.(), G.removeAttribute("src"), G.load?.();
        } catch {
        }
        G.parentNode && G.parentNode.removeChild(G);
      }
      pt.current.delete(D), Hn.current.delete(D), xt.current.delete(D);
    }
  }, []), Fl = h.useCallback(() => {
    R.current = !0, Xe.current.clear(), re.current.clear(), $.current.clear(), Je.current.clear(), Ie.current = [], un.current.clear(), Xt.current = 0, _t.current = [], L.current = null, K.current = !1, Wl(), al(!1), hi({ ready: 0, failed: 0, total: 0 }), Sl(""), Kl(!1);
  }, [Wl]), bi = h.useCallback((r, d = "video") => {
    const E = typeof r == "string" ? r.trim() : "";
    if (!E)
      return Promise.reject(new Error("Missing media url"));
    const D = xt.current.get(E);
    if (D === "ready")
      return Promise.resolve(!0);
    const G = Hn.current.get(E);
    if (D === "loading" && G)
      return G;
    xt.current.set(E, "loading");
    const ye = new Promise((Ae, We) => {
      if (R.current) {
        xt.current.set(E, "failed"), We(new Error("Preload manager was reset"));
        return;
      }
      const ce = document.createElement(d === "audio" ? "audio" : "video");
      ce.preload = "auto", ce.muted = !0, ce.playsInline = !0, ce.style.position = "absolute", ce.style.left = "-10000px", ce.style.width = "1px", ce.style.height = "1px", ce.style.opacity = "0";
      const $e = (tt) => {
        if (qt(), tt) {
          xt.current.set(E, "ready"), pt.current.set(E, ce), Ae(!0);
          return;
        }
        xt.current.set(E, "failed"), pt.current.delete(E), ce.parentNode && ce.parentNode.removeChild(ce), We(new Error("Media preload failed"));
      }, qt = () => {
        window.clearTimeout(zn), ce.removeEventListener("loadeddata", et), ce.removeEventListener("canplaythrough", et), ce.removeEventListener("error", Oe);
      }, et = () => $e(!0), Oe = () => $e(!1), zn = window.setTimeout(() => $e(!1), 12e3);
      ce.addEventListener("loadeddata", et, { once: !0 }), ce.addEventListener("canplaythrough", et, { once: !0 }), ce.addEventListener("error", Oe, { once: !0 }), document.body.appendChild(ce), ce.src = E, ce.load();
    }).finally(() => {
      xt.current.get(E) !== "loading" && Hn.current.delete(E);
    });
    return Hn.current.set(E, ye), ye;
  }, []), NA = h.useCallback(async (r) => {
    const d = Number.parseInt(r, 10);
    if (!Number.isInteger(d) || d <= 0 || R.current) return !1;
    const E = $.current.get(d);
    if (E) return E;
    if (re.current.get(d) === "ready") return !0;
    const G = Xe.current.get(d);
    if (!G)
      return re.current.set(d, "failed"), rl(), !1;
    const ye = G.audioUrl || G.videoUrl || null, Ae = G.audioUrl && G.videoUrl ? G.videoUrl : null, We = [ye, Ae].filter(($e, qt, et) => $e && et.indexOf($e) === qt);
    Je.current.set(d, new Set(We)), re.current.set(d, "loading"), rl();
    const ce = (async () => {
      if (We.length === 0)
        return re.current.set(d, "failed"), !1;
      const $e = G.audioUrl && ye === G.audioUrl ? "audio" : "video";
      if ((await Promise.allSettled([
        bi(ye, $e)
      ])).some((Nt) => Nt.status === "fulfilled"))
        return re.current.set(d, "ready"), !0;
      if (!Ae || Ae === ye)
        return re.current.set(d, "failed"), !1;
      const Oe = G.audioUrl && Ae === G.audioUrl ? "audio" : "video", tt = (await Promise.allSettled([
        bi(Ae, Oe)
      ])).some((Nt) => Nt.status === "fulfilled");
      return re.current.set(d, tt ? "ready" : "failed"), tt;
    })().finally(() => {
      $.current.delete(d), rl();
    });
    return $.current.set(d, ce), ce;
  }, [bi, rl]), Si = h.useCallback(() => {
    if (!R.current)
      for (; Xt.current < Np && Ie.current.length > 0; ) {
        const r = Ie.current.shift();
        un.current.delete(r);
        const d = re.current.get(r);
        d === "ready" || d === "loading" || (Xt.current += 1, NA(r).catch(() => !1).finally(() => {
          Xt.current = Math.max(0, Xt.current - 1), Si();
        }));
      }
  }, [NA]), Pl = h.useCallback((r = []) => {
    for (const d of r) {
      const E = Number.parseInt(d, 10);
      if (!Number.isInteger(E) || E <= 0 || !Xe.current.has(E)) continue;
      const D = re.current.get(E);
      D === "ready" || D === "loading" || un.current.has(E) || (re.current.set(E, "pending"), Ie.current.push(E), un.current.add(E));
    }
    rl(), Si();
  }, [Si, rl]), Va = h.useCallback(async (r, d = 2e4) => {
    const E = (Array.isArray(r) ? r : []).map((G) => Number.parseInt(G, 10)).filter((G) => Number.isInteger(G) && G > 0);
    if (E.length === 0) return { ok: !0 };
    const D = Date.now();
    for (; !R.current; ) {
      const G = E.filter((Ae) => re.current.get(Ae) === "failed");
      if (G.length > 0)
        return { ok: !1, reason: "failed", failedIndexes: G };
      if (E.every((Ae) => re.current.get(Ae) === "ready")) return { ok: !0 };
      if (Date.now() - D >= d)
        return { ok: !1, reason: "timeout" };
      await new Promise((Ae) => window.setTimeout(Ae, 120));
    }
    return { ok: !1, reason: "cancelled" };
  }, []), Eu = h.useCallback((r) => !r || r.ok ? "" : r.reason === "failed" ? "Failed to preload required round media. Retry to continue." : r.reason === "timeout" ? "Preloading required media timed out. Retry to continue." : "Preloading was interrupted. Retry to continue.", []), EA = h.useCallback((r = []) => {
    const d = new Set(
      (Array.isArray(r) ? r : []).map((D) => Number.parseInt(D, 10)).filter((D) => Number.isInteger(D) && D > 0)
    ), E = /* @__PURE__ */ new Set();
    for (const [D, G] of Je.current)
      if (d.has(D))
        for (const ye of G || []) E.add(ye);
    for (const D of [...Je.current.keys()])
      d.has(D) || (Je.current.delete(D), re.current.delete(D), $.current.delete(D));
    Ie.current = Ie.current.filter((D) => d.has(D)), un.current = new Set(Ie.current), Wl(E);
  }, [Wl]), Ha = h.useCallback(async (r, d) => {
    const E = Ht(r), D = Number.parseInt(d, 10);
    if (!E || !Number.isInteger(D) || K.current) return;
    const G = i.current;
    if (G?.connected) {
      K.current = !0;
      try {
        await pn(G, "game:preload_ready", {
          lobbyCode: E,
          sessionId: D
        });
      } catch (ye) {
        K.current = !1, he(ye.message);
      }
    }
  }, []), xA = h.useCallback(async ({ sessionId: r, lobbyCode: d, manifest: E }) => {
    Fl(), R.current = !1;
    const D = Mp(E);
    Xe.current = new Map(D.map((Ae) => [Ae.index, Ae])), L.current = Number.parseInt(r, 10) || null, K.current = !1, Sl(""), Kl(!1);
    const G = D.slice(0, Sp).map((Ae) => Ae.index);
    if (_t.current = G, rl(), G.length === 0) {
      await Ha(d, L.current);
      return;
    }
    al(!0), Pl(G);
    const ye = await Va(G);
    if (!R.current) {
      if (!ye.ok) {
        Sl(Eu(ye)), al(!0);
        return;
      }
      al(!1), await Ha(d, L.current);
    }
  }, [
    Eu,
    Pl,
    Fl,
    Ha,
    rl,
    Va
  ]), Ti = h.useCallback(async () => {
    if (R.current || K.current) return;
    const r = A.current?.code, d = L.current, E = _t.current;
    if (!r || !Number.isInteger(d) || !Array.isArray(E) || E.length === 0)
      return;
    Kl(!0), Sl(""), al(!0), Pl(E);
    const D = await Va(E);
    if (!R.current) {
      if (!D.ok) {
        Sl(Eu(D)), Kl(!1);
        return;
      }
      Kl(!1), al(!1), await Ha(r, d);
    }
  }, [Eu, Pl, Ha, Va]), RA = h.useCallback((r) => {
    const d = Number.parseInt(r, 10);
    if (!Number.isInteger(d) || d <= 0) return;
    const E = [];
    for (let D = 0; D < Tp; D += 1)
      E.push(d + D);
    Pl(E), EA(E);
  }, [Pl, EA]), qA = h.useCallback((r) => {
    const d = String(r || "0");
    let E = 2166136261;
    for (let D = 0; D < d.length; D += 1)
      E ^= d.charCodeAt(D), E = Math.imul(E, 16777619);
    return (E >>> 0) / 4294967295;
  }, []), MA = h.useCallback(async (r, d) => {
    const E = Ee.current;
    if (Number.isFinite(E) && E >= 0) return E;
    const D = Number.isFinite(d?.sampleStartSec) ? Math.max(0, d.sampleStartSec) : 0;
    if (D > 0)
      return Ee.current = D, D;
    const G = Number.isFinite(d?.sampleDurationSec) ? Math.max(1, d.sampleDurationSec) : 10, ye = Number(r?.duration), Ae = Number.isFinite(ye) && ye > 0 ? ye : null;
    if (!Number.isFinite(Ae) || Ae <= 0)
      return Ee.current = D, D;
    const We = Math.floor(Ae - G);
    if (We <= 0)
      return Ee.current = 0, 0;
    const ce = `${se?.roundId || 0}:${d?.animeId || 0}:${G}`, $e = qA(ce), qt = Math.floor($e * (We + 1));
    return Ee.current = qt, qt;
  }, [se?.roundId, qA]), Il = h.useCallback(async () => {
    const r = He.current;
    if (!r) return !1;
    r.volume = Math.max(0, Math.min(1, Number(Te.current))), r.muted = !1;
    try {
      return await r.play(), kn(!1), Kt(""), !0;
    } catch (d) {
      const E = Lm(d);
      return E === "autoplay_blocked" ? (kn(!0), !1) : (E !== "aborted" && Kt("Could not play solution video in this browser."), kn(!1), !1);
    }
  }, []), Xa = h.useCallback(async ({ isAutoplay: r = !1 } = {}) => {
    const d = se?.sample, E = d?.audioUrl ? pt.current.get(d.audioUrl) : null, D = d?.videoUrl ? pt.current.get(d.videoUrl) : null, G = E || ee.current, ye = D || Ve.current;
    if (F !== "GUESSING" || !G && !ye || !d?.audioUrl && !d?.videoUrl) return !1;
    La(), on(), Pt("");
    const Ae = Number.isFinite(d.sampleDurationSec) ? Math.max(1, d.sampleDurationSec) : 10, We = Math.max(0, Math.min(1, Number(Te.current))), ce = async (Oe, zn) => {
      if (!Oe) return { ok: !1, reason: "source_unavailable" };
      Oe.volume = We, Oe.muted = !1;
      const tt = await MA(Oe, d);
      try {
        Oe.currentTime = tt;
      } catch {
      }
      try {
        return await Oe.play(), Pe.current = Oe, du(zn), Sn(!1), Pt(""), bt(!0), me.current = window.setTimeout(() => {
          const Nt = Pe.current;
          Nt && (Nt.pause(), bt(!1), Pe.current = null);
        }, Ae * 1e3), { ok: !0, reason: null };
      } catch (Nt) {
        return { ok: !1, reason: Lm(Nt) };
      }
    }, $e = d?.audioUrl ? await ce(G, "audio") : { ok: !1, reason: "source_unavailable" };
    if ($e.ok) return !0;
    const qt = d?.videoUrl ? await ce(ye, "video") : { ok: !1, reason: "source_unavailable" };
    if (qt.ok) return !0;
    const et = [$e.reason, qt.reason].filter(Boolean);
    return et.includes("autoplay_blocked") ? (Sn(!0), Pt(oA("autoplay_blocked")), !1) : (Sn(!1), et.includes("source_unavailable") ? (Pt(oA("source_unavailable")), !1) : ((!et.includes("aborted") || !r) && Pt(oA("play_failed")), !1));
  }, [La, F, MA, se, on]), xn = h.useCallback(() => {
    le.current && (window.clearTimeout(le.current), le.current = null), p.current && (window.clearTimeout(p.current), p.current = null), C.current = { roundId: null, key: "" }, Fl(), on(), cl(), ci(null), sn("WAITING"), pl(null), Ua(null), gl([]), ke(null), Bn(null), kl([]), wa([]), vl([]), gn([]), Yn(""), Da(null), V.current = "", H.current = null, kt([]), St(""), Pt(""), Kt(""), Sn(!1), du(null), kn(!1), Tn({ active: !1, nextRoundIndex: null }), Nn(null), Qn(!1);
  }, [Fl, on, cl]), zA = h.useCallback((r) => {
    const d = r || {}, E = d.phase || "WAITING", D = Array.isArray(d?.solution?.scores) ? d.solution.scores : null;
    if (sn(E), Ua(d.round || null), wa(Array.isArray(d.readyUserIds) ? d.readyUserIds : []), pl(d.endsAt || d.solution?.endsAt || null), E === "WAITING" ? kl([]) : Array.isArray(D) && kl(D.slice().sort(ii)), d?.round?.isSuddenDeath ? Nn((G) => ({
      roundIndex: Number.parseInt(d?.round?.index, 10) || G?.roundIndex || null,
      tiedUserIds: Array.isArray(G?.tiedUserIds) ? G.tiedUserIds : []
    })) : Nn(null), E === "ANSWERS_REVEAL") {
      gl(Array.isArray(d.answers) ? d.answers : []), ke(null);
      return;
    }
    if (E === "SOLUTION_REVEAL") {
      gl(Array.isArray(d.answers) ? d.answers : []), ke(d.solution || null);
      return;
    }
    E === "WAITING" && (gl([]), ke(null));
  }, []), Ba = h.useCallback(async (r) => {
    const d = i.current;
    if (!(!d?.connected || !r))
      try {
        const E = await pn(d, "round:sync", { lobbyCode: r });
        zA(E?.state || {});
      } catch (E) {
        he(E.message);
      }
  }, [zA]), It = h.useCallback(async () => {
    if (!X.current) {
      X.current = !0, mA(!0);
      try {
        const r = await ui("/game/lobbies");
        ru(Array.isArray(r.lobbies) ? r.lobbies : []);
      } finally {
        X.current = !1, mA(!1);
      }
    }
  }, []), xu = h.useCallback(async (r, d) => {
    const E = i.current;
    if (!E) return;
    const D = {
      lobbyCode: r,
      ...d ? { inviteToken: d } : {}
    };
    if (!E.connected) {
      b.current = D, E.connect();
      return;
    }
    await pn(E, "lobby:join", D), await Ba(r);
  }, [Ba]), Ru = h.useCallback(async (r, d = "", E = {}) => {
    const D = Ht(r);
    if (!D) return he("Lobby code is required");
    const G = !!E?.fromDirectory, ye = Date.now();
    if (!w.current && !(O.current > ye)) {
      w.current = !0, te("join"), he(""), zt("");
      try {
        const Ae = {};
        d && (Ae.inviteToken = d);
        const We = await ui(`/game/lobbies/${D}/join`, {
          method: "POST",
          body: JSON.stringify(Ae)
        });
        Zt(We.lobby), Yt(d || ""), xn(), iu(D, d || ""), await xu(D, d || ""), zt(`Joined lobby ${D}`);
      } catch (Ae) {
        O.current = Date.now() + 800, he(jp(Ae?.message)), (G || Op(Ae?.message)) && (ru((We) => We.filter((ce) => ce?.code !== D)), It().catch(() => {
        }));
      } finally {
        w.current = !1, te("");
      }
    }
  }, [xn, It, xu]), Is = h.useCallback(async () => {
    te("create"), he(""), zt("");
    try {
      const r = El(), d = {
        ...gt,
        maxPlayers: r
      }, E = await ui("/game/lobbies", {
        method: "POST",
        body: JSON.stringify(d)
      });
      Zt(E.lobby), za(!1), xn(), iu(E.lobby.code, ""), await xu(E.lobby.code, ""), zt(`Created lobby ${E.lobby.code}`);
    } catch (r) {
      he(r.message);
    } finally {
      te("");
    }
  }, [xn, El, gt, xu]), $s = h.useCallback(() => {
    if (!j || j.status !== "WAITING") return;
    const r = Um(j);
    Ze(r), fu(String(r.maxPlayers)), Xn(!0);
  }, [j]), Ni = h.useCallback(async () => {
    if (!(!j?.code || !i.current)) {
      te("settings"), he("");
      try {
        const r = pi(), d = {
          ...Me,
          maxPlayers: r
        };
        await pn(i.current, "lobby:update_settings", {
          lobbyCode: j.code,
          settings: d
        }), Xn(!1), zt("Lobby settings updated.");
      } catch (r) {
        he(r.message);
      } finally {
        te("");
      }
    }
  }, [pi, Me, j]), Ga = h.useCallback(async () => {
    if (j?.code) {
      te("leave"), he("");
      try {
        i.current?.connected && await pn(i.current, "lobby:leave", { lobbyCode: j.code });
      } catch (r) {
        he(r.message);
      } finally {
        Zt(null), Yt(""), Xn(!1), Wt(null), An(null), iu("", ""), xn(), te(""), It().catch(() => {
        });
      }
    }
  }, [xn, It, j]), ec = h.useCallback(async () => {
    if (!(!j?.code || !i.current)) {
      te("start"), Qn(!0), he("");
      try {
        await pn(i.current, "game:start", { lobbyCode: j.code }, { timeoutMs: 12e4 });
      } catch (r) {
        Qn(!1), he(_m(r.message));
      } finally {
        te("");
      }
    }
  }, [j]), Rn = h.useCallback(async ({ force: r = !1, guessTextOverride: d, guessAnimeIdOverride: E } = {}) => {
    if (!j?.code || !se?.roundId || !i.current || ie && Ft.includes(ie.id)) return;
    const D = typeof d == "string" ? d : V.current, G = E !== void 0 ? E : H.current, ye = String(D || "").trim();
    let Ae = Number.isInteger(G) ? G : null;
    if (!Number.isInteger(Ae) && ye) {
      const $e = Dm(ye), qt = (st || []).find((Oe) => Dm(Oe?.title) === $e), et = Number.parseInt(qt?.id, 10);
      Number.isInteger(et) && et > 0 && (Ae = et);
    }
    const We = `${ye.toLowerCase()}|${Ae ?? ""}`, ce = C.current;
    if (!(!r && ce.roundId === se.roundId && ce.key === We))
      try {
        await pn(i.current, "round:submit_guess", {
          lobbyCode: j.code,
          roundId: se.roundId,
          guessText: ye,
          guessAnimeId: Ae
        }), C.current = {
          roundId: se.roundId,
          key: We
        };
      } catch {
      }
  }, [j, Ft, se, st, ie]), Ei = h.useCallback((r) => {
    const d = String(r?.title || ""), E = Number.parseInt(r?.id, 10), D = Number.isInteger(E) ? E : null;
    V.current = d, H.current = D, Yn(d), Da(D), kt([]), bl(!1), bn(-1), Rn({
      force: !0,
      guessTextOverride: d,
      guessAnimeIdOverride: D
    }).catch(() => {
    });
  }, [Rn]), OA = h.useCallback(async () => {
    if (!(!j?.code || !i.current || !ie)) {
      te("ready"), he("");
      try {
        const r = Ft.includes(ie.id);
        r || await Rn({ force: !0 }), await pn(i.current, "round:set_ready", { lobbyCode: j.code, ready: !r });
      } catch (r) {
        he(r.message);
      } finally {
        te("");
      }
    }
  }, [j, Ft, Rn, ie]), jA = h.useCallback(async () => {
    if (!(!j?.code || !i.current || !ie || Jn)) {
      te("lobby-ready"), he("");
      try {
        const r = Gn.includes(ie.id);
        await pn(i.current, "lobby:set_ready", {
          lobbyCode: j.code,
          ready: !r
        });
      } catch (r) {
        he(r.message);
      } finally {
        te("");
      }
    }
  }, [Jn, j, Gn, ie]), CA = h.useCallback((r) => {
    if (!j?.code || !ie || j.host?.id !== ie.id) return;
    const d = Number.parseInt(r?.userId, 10);
    if (!Number.isInteger(d) || d === ie?.id) return;
    const E = r?.displayName || `User ${d}`;
    Wt(null), An({
      userId: d,
      displayName: E
    });
  }, [j, ie]), $l = h.useCallback((r) => {
    if (!j?.code || !ie || j.host?.id !== ie.id) return;
    const d = Number.parseInt(r?.userId, 10);
    if (!Number.isInteger(d) || d === ie?.id) return;
    const E = r?.displayName || `User ${d}`;
    An(null), Wt({
      userId: d,
      displayName: E
    });
  }, [j, ie]), tc = h.useCallback(async () => {
    if (!(!j?.code || !i.current || !Gt) && !Z.current) {
      Z.current = !0, te("promote"), he("");
      try {
        await pn(i.current, "lobby:promote", {
          lobbyCode: j.code,
          userId: Gt.userId
        }), zt(`${Gt.displayName} is now the host.`), Wt(null);
      } catch (r) {
        he(r.message);
      } finally {
        Z.current = !1, te("");
      }
    }
  }, [j, Gt]), nc = h.useCallback(async () => {
    if (!(!j?.code || !i.current || !Ot) && !W.current) {
      W.current = !0, te("kick"), he("");
      try {
        await pn(i.current, "lobby:kick", {
          lobbyCode: j.code,
          userId: Ot.userId
        }), zt(`${Ot.displayName} was kicked from the lobby.`), An(null);
      } catch (r) {
        he(r.message);
      } finally {
        W.current = !1, te("");
      }
    }
  }, [Ot, j]), lc = h.useCallback(async () => {
    if (j?.code) {
      te("invite"), he(""), zt("");
      try {
        const r = await ui(`/game/lobbies/${j.code}/invite`);
        r.inviteToken ? (Yt(r.inviteToken), iu(j.code, r.inviteToken)) : (Yt(""), iu(j.code, "")), navigator.clipboard?.writeText ? (await navigator.clipboard.writeText(r.inviteUrl), zt("Invite link copied")) : zt(r.inviteUrl);
      } catch (r) {
        he(r.message);
      } finally {
        te("");
      }
    }
  }, [j]);
  h.useEffect(() => {
    if (!o) return qm();
    const r = gp(o);
    i.current = r;
    const d = async () => {
      su(!0), he("");
      try {
        b.current ? (await pn(r, "lobby:join", b.current), await Ba(b.current.lobbyCode), b.current = null) : A.current?.code ? (await pn(r, "lobby:join", {
          lobbyCode: A.current.code,
          ...c.current ? { inviteToken: c.current } : {}
        }), await Ba(A.current.code)) : It().catch(() => {
        });
      } catch (B) {
        he(B.message);
      }
    }, E = () => su(!1), D = (B) => {
      const pe = String(B?.code || ""), _e = Gl(B?.message);
      if (pe === "game_start_failed") {
        Qn(!1), he(_m(_e));
        return;
      }
      he(_e || "Realtime error");
    }, G = ({ lobby: B }) => {
      B && (Zt(B), B.status !== "WAITING" && (vl([]), gn([]), Qn(!1)));
    }, ye = (B) => {
      const pe = Ht(B?.lobbyCode), _e = Ht(A.current?.code);
      pe && _e && pe !== _e || Qn(!0);
    }, Ae = ({ sessionId: B, config: pe, preloadManifest: _e, lobby: rt }) => {
      Qn(!1), rt && Zt(rt), ci({ sessionId: B, ...pe || {} }), Bn(null), sn("PENDING"), Nn(null), kl(
        (A.current?.players || []).map(($t) => ({
          userId: $t.userId,
          displayName: $t.displayName,
          score: 0
        })).sort(ii)
      ), vl([]), gn([]), A.current?.code && xA({
        sessionId: B,
        lobbyCode: A.current.code,
        manifest: _e
      }).catch(() => {
      });
    }, We = (B) => {
      const pe = Ht(B?.lobbyCode), _e = Ht(A.current?.code);
      pe && _e && pe !== _e || (xn(), Zt((rt) => rt && { ...rt, status: "WAITING" }));
    }, ce = (B) => {
      on(), cl(), al(!1), Sl(""), Kl(!1), Tn({ active: !1, nextRoundIndex: null }), sn("GUESSING"), pl(B?.endsAt || null), Ua(B || null), gl([]), ke(null), Bn(null), wa([]), Yn(""), Da(null), V.current = "", H.current = null, kt([]), St(""), Pt(""), Kt(""), Sn(!1), du(null), kn(!1), C.current = {
        roundId: Number.isInteger(B?.roundId) ? B.roundId : null,
        key: ""
      }, Ee.current = null, B?.isSuddenDeath ? Nn((pe) => ({
        roundIndex: Number.parseInt(B?.index, 10) || pe?.roundIndex || null,
        tiedUserIds: Array.isArray(pe?.tiedUserIds) ? pe.tiedUserIds : []
      })) : Nn(null), RA(B?.index);
    }, $e = (B) => {
      Tn({ active: !1, nextRoundIndex: null }), sn("ANSWERS_REVEAL"), pl(B?.endsAt || null), gl(Array.isArray(B?.answers) ? B.answers : []);
    }, qt = (B) => {
      on(), Tn({ active: !1, nextRoundIndex: null }), sn("SOLUTION_REVEAL"), pl(B?.endsAt || null), ke(B || null), Array.isArray(B?.scores) && kl(B.scores.slice().sort(ii)), Pt(""), Kt(""), kn(!1);
    }, et = (B) => {
      Fl(), on(), cl(), Tn({ active: !1, nextRoundIndex: null }), sn("FINISHED"), Qn(!1), pl(null), Pt(""), Kt(""), Bn(B || null), Zt((pe) => pe && { ...pe, status: "WAITING" }), Array.isArray(B?.finalScores) && kl(B.finalScores.slice().sort(ii)), Nn(null), vl([]), gn([]);
    }, Oe = (B) => {
      const pe = Ht(B?.lobbyCode), _e = Ht(A.current?.code);
      if (pe && _e && pe !== _e) return;
      if (!(B?.preparing === !0)) {
        Tn({ active: !1, nextRoundIndex: null });
        return;
      }
      const $t = Number.parseInt(B?.nextRoundIndex, 10);
      Tn({
        active: !0,
        nextRoundIndex: Number.isInteger($t) ? $t : null
      });
    }, zn = (B) => {
      const pe = Array.isArray(B?.tiedUserIds) ? B.tiedUserIds.filter(($t) => Number.isInteger($t)) : [], _e = Number.parseInt(B?.roundIndex, 10);
      Nn({
        roundIndex: Number.isInteger(_e) ? _e : null,
        tiedUserIds: pe
      });
      const rt = pe.map(($t) => (A.current?.players || []).find((wu) => wu.userId === $t)?.displayName || null).filter(Boolean);
      rt.length > 0 ? zt(`Sudden Death started: ${rt.join(", ")} are tied for first.`) : zt("Sudden Death started: tie for first place.");
    }, tt = (B) => {
      wa(Array.isArray(B?.readyUserIds) ? B.readyUserIds : []);
    }, Nt = (B) => {
      vl(Array.isArray(B?.readyUserIds) ? B.readyUserIds : []), gn(Array.isArray(B?.requiredUserIds) ? B.requiredUserIds : []);
    }, Cu = (B) => {
      const pe = Ht(B?.lobbyCode), _e = Ht(A.current?.code);
      if (_e && pe && pe !== _e) return;
      const rt = Number.parseInt(B?.cooldownUntil, 10);
      let $t = "You were kicked from the lobby.";
      if (Number.isFinite(rt)) {
        const jt = rt - Date.now();
        jt > 0 && ($t = `You were kicked from the lobby. Rejoin available in about ${Math.max(1, Math.ceil(jt / 1e3))}s.`);
      }
      he($t), Zt(null), Yt(""), Xn(!1), Wt(null), An(null), iu("", ""), xn(), It().catch(() => {
      });
    }, Ka = (B) => {
      const pe = Ht(B?.lobbyCode), _e = Ht(A.current?.code);
      _e && pe && pe !== _e || (he(Cp(B?.reason)), Zt(null), Yt(""), Xn(!1), Wt(null), An(null), iu("", ""), xn(), It().catch(() => {
      }));
    }, Ja = () => {
      A.current?.code || (_.current && window.clearTimeout(_.current), _.current = window.setTimeout(() => {
        _.current = null, It().catch(() => {
        });
      }, 150));
    }, Uu = (B) => {
      const pe = B?.status || null;
      !pe || typeof pe != "object" || (Jl(pe), bA(""));
    };
    return r.on("connect", d), r.on("disconnect", E), r.on("error", D), r.on("lobby:state", G), r.on("lobby:directory_changed", Ja), r.on("game:starting", ye), r.on("game:started", Ae), r.on("game:start_cancelled", We), r.on("round:started", ce), r.on("round:preparing", Oe), r.on("round:answers_reveal", $e), r.on("round:solution", qt), r.on("game:finished", et), r.on("game:sudden_death", zn), r.on("round:ready_state", tt), r.on("lobby:ready_state", Nt), r.on("lobby:kicked", Cu), r.on("lobby:terminated", Ka), r.on("media:source_status", Uu), r.connect(), () => {
      r.off("connect", d), r.off("disconnect", E), r.off("error", D), r.off("lobby:state", G), r.off("lobby:directory_changed", Ja), r.off("game:starting", ye), r.off("game:started", Ae), r.off("game:start_cancelled", We), r.off("round:started", ce), r.off("round:preparing", Oe), r.off("round:answers_reveal", $e), r.off("round:solution", qt), r.off("game:finished", et), r.off("game:sudden_death", zn), r.off("round:ready_state", tt), r.off("lobby:ready_state", Nt), r.off("lobby:kicked", Cu), r.off("lobby:terminated", Ka), r.off("media:source_status", Uu), _.current && (window.clearTimeout(_.current), _.current = null), vp();
    };
  }, [xA, xn, It, RA, Ba, Fl, on, cl, o]), h.useEffect(() => {
    if (!o) return;
    let r = !0;
    return (async () => {
      try {
        const d = await ui("/auth/me");
        if (!r) return;
        Fs(d), await It();
      } catch {
        qm();
        return;
      } finally {
        r && xe(!1);
      }
    })(), () => {
      r = !1;
    };
  }, [It, o]), h.useEffect(() => {
    if (ae || !ie || z.current) return;
    z.current = !0;
    const r = new URLSearchParams(window.location.search), d = r.get("i") || r.get("inviteToken") || "", E = xp(window.location.pathname) || Ht(r.get("lobby")) || Rp(d);
    E && (ja(E), Yt(d), Ru(E, d).catch(() => {
    }));
  }, [Ru, ae, ie]), h.useEffect(() => {
    if (!Zl) return ri("00:00");
    const r = () => ri(qp(new Date(Zl).getTime() - Date.now()));
    r();
    const d = window.setInterval(r, 250);
    return () => window.clearInterval(d);
  }, [Zl]), h.useEffect(() => {
    if (F !== "GUESSING") {
      Ne.current += 1, kt([]), bn(-1), St("");
      return;
    }
    const r = vn.trim();
    if (r.length < 2) {
      Ne.current += 1, kt([]), bn(-1), St("");
      return;
    }
    const d = ++Ne.current, E = window.setTimeout(async () => {
      try {
        const D = await ui("/game/search", {
          method: "POST",
          body: JSON.stringify({ query: r, limit: 8 })
        });
        if (Ne.current !== d) return;
        kt(Array.isArray(D.results) ? D.results : []), St("");
      } catch (D) {
        if (Ne.current !== d) return;
        kt([]), St(zp(D?.message));
      }
    }, 120);
    return () => window.clearTimeout(E);
  }, [vn, F]), h.useEffect(() => {
    const r = !!(ie && Ft.includes(ie.id));
    if (F !== "GUESSING" || !j?.code || !se?.roundId || !Bt || r) {
      le.current && (window.clearTimeout(le.current), le.current = null);
      return;
    }
    return le.current && (window.clearTimeout(le.current), le.current = null), le.current = window.setTimeout(() => {
      Rn().catch(() => {
      });
    }, 420), () => {
      le.current && (window.clearTimeout(le.current), le.current = null);
    };
  }, [Qe, vn, j?.code, F, Ft, se?.roundId, Bt, Rn, ie]), h.useEffect(() => {
    const r = !!(ie && Ft.includes(ie.id));
    if (F !== "GUESSING" || !Zl || !j?.code || !se?.roundId || !Bt || r) {
      p.current && (window.clearTimeout(p.current), p.current = null);
      return;
    }
    const d = new Date(Zl).getTime() - Date.now() - 120;
    if (Number.isFinite(d)) {
      if (d <= 0) {
        Rn({ force: !0 }).catch(() => {
        });
        return;
      }
      return p.current && (window.clearTimeout(p.current), p.current = null), p.current = window.setTimeout(() => {
        Rn({ force: !0 }).catch(() => {
        }), p.current = null;
      }, d), () => {
        p.current && (window.clearTimeout(p.current), p.current = null);
      };
    }
  }, [j?.code, F, Zl, Ft, se?.roundId, Bt, Rn, ie]), h.useEffect(() => {
    if (!!!(se?.sample?.audioUrl || se?.sample?.videoUrl)) {
      Sn(!1), on();
      return;
    }
    if (F !== "GUESSING") {
      (F === "SOLUTION_REVEAL" || F === "WAITING" || F === "FINISHED" || F === "PENDING") && (Sn(!1), on());
      return;
    }
    let d = !1;
    const E = window.setTimeout(() => {
      d || Xa({ isAutoplay: !0 }).catch(() => {
      });
    }, 0);
    return () => {
      d = !0, window.clearTimeout(E);
    };
  }, [F, Xa, se?.roundId, se?.sample?.audioUrl, se?.sample?.videoUrl, on]), h.useEffect(() => {
    Ee.current = null;
  }, [se?.roundId]), h.useEffect(() => {
    if (!fi || F !== "GUESSING") return;
    const r = () => {
      Xa({ isAutoplay: !1 }).catch(() => {
      });
    };
    return window.addEventListener("pointerdown", r), window.addEventListener("keydown", r), () => {
      window.removeEventListener("pointerdown", r), window.removeEventListener("keydown", r);
    };
  }, [F, Xa, fi]), h.useEffect(() => {
    if (F !== "SOLUTION_REVEAL" || !Be?.video) {
      kn(!1), Kt(""), cl();
      return;
    }
    let r = !1;
    const d = window.setTimeout(() => {
      r || Il().catch(() => {
      });
    }, 0);
    return () => {
      r = !0, window.clearTimeout(d), cl();
    };
  }, [F, Il, Be?.video, cl]), h.useEffect(() => {
    if (!mi || F !== "SOLUTION_REVEAL") return;
    const r = () => {
      Il().catch(() => {
      });
    };
    return window.addEventListener("pointerdown", r), window.addEventListener("keydown", r), () => {
      window.removeEventListener("pointerdown", r), window.removeEventListener("keydown", r);
    };
  }, [F, Il, mi]), h.useEffect(() => {
    const r = Math.max(0, Math.min(1, Number(ll))), d = (E) => {
      E && (E.volume = r);
    };
    d(ee.current), d(Ve.current), d(He.current), d(Pe.current);
    for (const E of pt.current.values())
      d(E);
  }, [ll, se?.roundId, Be?.video]);
  const qu = h.useMemo(() => !!(j && ie && j.host?.id === ie.id), [j, ie]), UA = h.useMemo(() => !!(ie && Ft.includes(ie.id)), [Ft, ie]), qn = h.useMemo(() => {
    const r = Array.isArray(nl) ? nl.filter((d) => Number.isInteger(d)) : [];
    return r.length > 0 ? r : (j?.players || []).map((d) => d.userId).filter((d) => Number.isInteger(d));
  }, [j, nl]), Mn = h.useMemo(() => {
    const r = new Set(Array.isArray(Gn) ? Gn : []);
    return qn.filter((d) => r.has(d));
  }, [Gn, qn]), ac = h.useMemo(() => !!(ie && Mn.includes(ie.id)), [ie, Mn]), Ya = h.useMemo(() => !j || j.status !== "WAITING" ? !1 : qn.length > 0 && Mn.length === qn.length, [j, Mn.length, qn.length]), wA = h.useMemo(() => !!(se?.sample?.audioUrl || se?.sample?.videoUrl), [se]), Wn = h.useMemo(() => F === "GUESSING", [F]), Mu = h.useMemo(() => F === "ANSWERS_REVEAL", [F]), ea = h.useMemo(() => F === "SOLUTION_REVEAL", [F]), Za = h.useMemo(() => !!(ea && Be), [ea, Be]), DA = h.useMemo(
    () => Mu || ea,
    [Mu, ea]
  ), _A = h.useMemo(
    () => !!Za,
    [Za]
  );
  h.useMemo(() => {
    const r = Number.parseInt(se?.sample?.sampleDurationSec, 10);
    return !Number.isFinite(r) || r <= 0 ? "Sample ready" : `${r}s preview`;
  }, [se]);
  const uc = h.useMemo(() => `${Math.round(ll * 100)}%`, [ll]), zu = h.useMemo(() => {
    if (!Bt)
      return { label: "Disconnected", tone: "down" };
    if (!Tt)
      return { label: "Checking", tone: "neutral" };
    if (!Tt.ok)
      return { label: "Down", tone: "down" };
    const r = Number(Tt.latencyMs);
    return Number.isFinite(r) && r >= 1200 ? { label: "Slow", tone: "warn" } : { label: "Healthy", tone: "ok" };
  }, [Tt, Bt]), LA = h.useMemo(() => {
    const r = Number(Tt?.latencyMs);
    return Number.isFinite(r) ? `${Math.round(r)} ms` : "n/a";
  }, [Tt]), VA = h.useMemo(() => {
    if (!Tt?.checkedAt) return "n/a";
    const r = new Date(Tt.checkedAt);
    return Number.isNaN(r.getTime()) ? "n/a" : r.toLocaleTimeString();
  }, [Tt]), ic = h.useMemo(() => {
    const r = [
      `Provider: ${Tt?.provider || "AnimeThemes"}`,
      `State: ${zu.label}`,
      `Latency: ${LA}`,
      `Last check: ${VA}${Tt?.cached ? " (cached)" : ""}`
    ];
    return Tt?.ok === !1 && Tt?.error && r.push(`Error: ${Tt.error}`), il && r.push(`Client: ${il}`), r;
  }, [VA, il, zu.label, LA, Tt]), ct = h.useMemo(() => At && Array.isArray(At.finalScores) && At.finalScores.length > 0 ? At : j?.lastMatchResult && Array.isArray(j.lastMatchResult.finalScores) && j.lastMatchResult.finalScores.length > 0 ? j.lastMatchResult : null, [At, j?.lastMatchResult]), Fn = h.useMemo(() => (Array.isArray(ct?.finalScores) && ct.finalScores.length > 0 ? ct.finalScores : tl).slice().sort(ii), [ct?.finalScores, tl]), xi = h.useMemo(() => {
    const r = Number.parseInt(ct?.winner?.userId, 10);
    return Number.isInteger(r) ? _a(r) : Fn[0]?.displayName || "";
  }, [ct?.winner?.userId, Fn, _a]), Ri = h.useMemo(
    () => !!j && Fn.length > 0 && (F === "WAITING" || F === "FINISHED"),
    [j, F, Fn.length]
  ), ta = h.useMemo(
    () => !!j && F !== "WAITING" && F !== "FINISHED",
    [j, F]
  ), Ou = h.useMemo(
    () => !!j && (F === "WAITING" || F === "FINISHED"),
    [j, F]
  ), qi = h.useMemo(() => {
    const r = /* @__PURE__ */ new Map();
    for (const d of oi || [])
      Number.isInteger(d?.userId) && r.set(d.userId, d);
    return r;
  }, [oi]), Mi = h.useMemo(() => (Array.isArray(tl) && tl.length > 0 ? tl : (j?.players || []).map((d) => ({
    userId: d.userId,
    displayName: d.displayName,
    score: 0
  }))).slice().sort(ii), [j, tl]), xl = h.useMemo(() => {
    const r = Math.max(1, Mi.length);
    return Math.max(118, Math.min(300, 92 + r * 24));
  }, [Mi.length]), zi = h.useMemo(() => (j?.players || []).filter((r) => Number.isInteger(r?.userId)).map((r) => ({
    userId: r.userId,
    displayName: String(r?.displayName || `Player ${r.userId}`)
  })), [j]), ka = h.useCallback((r) => {
    const d = Math.max(0, Math.min(1, Number.parseFloat(r.target.value))), E = Number.isFinite(d) ? d : 0.8;
    Te.current = E, mu(E);
  }, []), ju = h.useMemo(() => {
    const r = String(qa || "").trim().toLowerCase();
    return r ? cu.filter((d) => {
      const E = String(d?.code || "").toLowerCase(), D = String(d?.name || "").toLowerCase();
      return E.includes(r) || D.includes(r);
    }) : cu;
  }, [cu, qa]), HA = h.useMemo(
    () => gt.sourceMode !== "POPULAR",
    [gt.sourceMode]
  ), Rl = h.useMemo(
    () => Me.sourceMode !== "POPULAR",
    [Me.sourceMode]
  ), na = h.useMemo(() => {
    if (!j) return [];
    const r = [
      `Max ${j.maxPlayers} players`,
      `${j.roundCount} rounds`,
      `${j.guessSeconds}s guess`,
      Xs[j.sourceMode]?.label || j.sourceMode,
      Bs[j.selectionMode]?.label || j.selectionMode,
      Gs[j.themeMode]?.label || j.themeMode
    ];
    return j.sourceMode !== "POPULAR" && (r.push(`Anime score ${j.animeScoreMin ?? 1}-${j.animeScoreMax ?? 10}`), r.push(`Player score ${j.playerScoreMin ?? 1}-${j.playerScoreMax ?? 10}`)), r;
  }, [j]);
  return ae ? /* @__PURE__ */ m.jsx("section", { className: "gmq-shell", children: "Loading game..." }) : /* @__PURE__ */ m.jsxs("section", { className: "gmq-shell", children: [
    /* @__PURE__ */ m.jsxs("header", { className: "gmq-header", children: [
      /* @__PURE__ */ m.jsxs("div", { children: [
        ta ? null : /* @__PURE__ */ m.jsx("h1", { children: "Anime Music Quiz" }),
        /* @__PURE__ */ m.jsxs("p", { className: "gmq-muted", children: [
          "Socket: ",
          Bt ? "Connected" : "Disconnected",
          j ? ` | Lobby ${j.code}` : "",
          yA?.sessionId ? ` | Session ${yA.sessionId}` : ""
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "gmq-header-right", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-connection-indicator", role: "status", "aria-label": `Media source ${zu.label}`, children: [
          /* @__PURE__ */ m.jsx("span", { className: `gmq-connection-dot gmq-status-dot-${zu.tone}` }),
          /* @__PURE__ */ m.jsx("div", { className: "gmq-connection-tooltip", children: ic.map((r) => /* @__PURE__ */ m.jsx("p", { children: r }, r)) })
        ] }),
        j ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-actions", children: [
          /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: lc, disabled: oe === "invite", children: "Copy Invite" }),
          /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-danger", onClick: Ga, disabled: oe === "leave", children: "Leave" })
        ] }) : null
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "gmq-toast-viewport", "aria-live": "polite", "aria-atomic": "false", children: [
      el ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-alert gmq-alert-error gmq-toast", role: "alert", children: [
        /* @__PURE__ */ m.jsx("p", { children: el }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-toast-close", onClick: () => he(""), "aria-label": "Dismiss error", children: "x" })
      ] }) : null,
      Yl ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-alert gmq-alert-info gmq-toast", role: "status", children: [
        /* @__PURE__ */ m.jsx("p", { children: Yl }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-toast-close", onClick: () => zt(""), "aria-label": "Dismiss message", children: "x" })
      ] }) : null
    ] }),
    Gt ? /* @__PURE__ */ m.jsx("div", { className: "gmq-modal-backdrop", onClick: () => Wt(null), children: /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-modal-card gmq-modal-confirm-card", onClick: (r) => r.stopPropagation(), children: [
      /* @__PURE__ */ m.jsx("div", { className: "gmq-modal-header", children: /* @__PURE__ */ m.jsx("h2", { children: "Promote Player" }) }),
      /* @__PURE__ */ m.jsxs("p", { children: [
        "Transfer host to ",
        /* @__PURE__ */ m.jsx("strong", { children: Gt.displayName }),
        "?"
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "gmq-modal-actions", children: [
        /* @__PURE__ */ m.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-secondary",
            onClick: () => Wt(null),
            disabled: oe === "promote",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ m.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-primary",
            onClick: tc,
            disabled: oe === "promote",
            children: oe === "promote" ? "Promoting..." : "Promote"
          }
        )
      ] })
    ] }) }) : null,
    Ot ? /* @__PURE__ */ m.jsx("div", { className: "gmq-modal-backdrop", onClick: () => An(null), children: /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-modal-card gmq-modal-confirm-card", onClick: (r) => r.stopPropagation(), children: [
      /* @__PURE__ */ m.jsx("div", { className: "gmq-modal-header", children: /* @__PURE__ */ m.jsx("h2", { children: "Kick Player" }) }),
      /* @__PURE__ */ m.jsxs("p", { children: [
        "Kick ",
        /* @__PURE__ */ m.jsx("strong", { children: Ot.displayName }),
        " from this lobby?"
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "gmq-modal-actions", children: [
        /* @__PURE__ */ m.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-secondary",
            onClick: () => An(null),
            disabled: oe === "kick",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ m.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-danger",
            onClick: nc,
            disabled: oe === "kick",
            children: oe === "kick" ? "Kicking..." : "Kick Player"
          }
        )
      ] })
    ] }) }) : null,
    it && j && j.status === "WAITING" && qu ? /* @__PURE__ */ m.jsx("div", { className: "gmq-modal-backdrop", onClick: () => Xn(!1), children: /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-modal-card", onClick: (r) => r.stopPropagation(), children: [
      /* @__PURE__ */ m.jsxs("div", { className: "gmq-modal-header", children: [
        /* @__PURE__ */ m.jsx("h2", { children: "Match Settings" }),
        /* @__PURE__ */ m.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-secondary gmq-btn-modal-close",
            onClick: () => Xn(!1),
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
              value: Me.name,
              onChange: (r) => Ze((d) => ({ ...d, name: r.target.value })),
              placeholder: "Lobby name"
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("label", { className: "gmq-checkbox gmq-checkbox-inline", children: [
          /* @__PURE__ */ m.jsx(
            "input",
            {
              type: "checkbox",
              checked: Me.isPrivate,
              onChange: (r) => Ze((d) => ({ ...d, isPrivate: r.target.checked }))
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
              onChange: (r) => yi(r.target.value),
              onBlur: pi
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
              value: Me.roundCount,
              onChange: (r) => Ze((d) => ({ ...d, roundCount: Number(r.target.value || 10) }))
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
              value: Me.guessSeconds,
              onChange: (r) => Ze((d) => ({ ...d, guessSeconds: Number(r.target.value || 20) }))
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
              value: Me.sourceMode,
              onChange: (r) => Ze((d) => ({ ...d, sourceMode: r.target.value })),
              children: uo.map((r) => /* @__PURE__ */ m.jsx("option", { value: r, children: Xs[r]?.label || r }, r))
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
          /* @__PURE__ */ m.jsx("label", { htmlFor: "edit-selection-mode", children: "Selection Style" }),
          /* @__PURE__ */ m.jsx(
            "select",
            {
              id: "edit-selection-mode",
              value: Me.selectionMode,
              onChange: (r) => Ze((d) => ({ ...d, selectionMode: r.target.value })),
              children: io.map((r) => /* @__PURE__ */ m.jsx("option", { value: r, children: Bs[r]?.label || r }, r))
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
          /* @__PURE__ */ m.jsx("label", { htmlFor: "edit-theme-mode", children: "Song Types" }),
          /* @__PURE__ */ m.jsx(
            "select",
            {
              id: "edit-theme-mode",
              value: Me.themeMode,
              onChange: (r) => Ze((d) => ({ ...d, themeMode: r.target.value })),
              children: Ao.map((r) => /* @__PURE__ */ m.jsx("option", { value: r, children: Gs[r]?.label || r }, r))
            }
          )
        ] })
      ] }),
      Rl ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-grid gmq-field-grid-2", children: [
        /* @__PURE__ */ m.jsx(
          Ys,
          {
            label: "Anime MAL Score",
            minValue: Me.animeScoreMin,
            maxValue: Me.animeScoreMax,
            onMinChange: TA,
            onMaxChange: Lt
          }
        ),
        /* @__PURE__ */ m.jsx(
          Ys,
          {
            label: "Player MAL Score",
            minValue: Me.playerScoreMin,
            maxValue: Me.playerScoreMax,
            onMinChange: Nl,
            onMaxChange: Nu,
            hint: "Used for MAL-list entries (MAL_ONLY, and MAL portion of HYBRID)."
          }
        )
      ] }) : null,
      /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          className: "gmq-btn gmq-btn-primary",
          onClick: Ni,
          disabled: oe === "settings",
          children: oe === "settings" ? "Saving..." : "Save Settings"
        }
      )
    ] }) }) : null,
    j ? /* @__PURE__ */ m.jsxs("div", { className: `gmq-grid gmq-grid-match ${ta ? "gmq-grid-match-live" : "gmq-grid-match-idle"} ${ta && !Ou ? "gmq-grid-match-round-only" : ""} ${!ta && Ou && Ri ? "gmq-grid-match-idle-with-standings" : ""}`, children: [
      Ou ? /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-card-lobby", children: [
        /* @__PURE__ */ m.jsxs("h2", { children: [
          "Lobby ",
          j.code,
          /* @__PURE__ */ m.jsx("span", { className: `gmq-lobby-visibility ${j.isPrivate ? "private" : "public"}`, children: j.isPrivate ? "Private" : "Public" })
        ] }),
        /* @__PURE__ */ m.jsxs("p", { className: "gmq-muted", children: [
          j.name || "Untitled",
          " | ",
          j.playerCount,
          "/",
          j.maxPlayers,
          " players"
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-stack gmq-lobby-settings-block", children: [
          /* @__PURE__ */ m.jsx("strong", { children: "Current Match Settings" }),
          /* @__PURE__ */ m.jsx("div", { className: "gmq-lobby-settings", children: na.map((r) => /* @__PURE__ */ m.jsx("span", { children: r }, r)) })
        ] }),
        /* @__PURE__ */ m.jsx("ul", { className: "gmq-player-list", children: (j.players || []).map((r) => /* @__PURE__ */ m.jsxs("li", { children: [
          /* @__PURE__ */ m.jsxs("span", { className: "gmq-player-name", children: [
            /* @__PURE__ */ m.jsxs("span", { children: [
              r.displayName,
              r.userId === j.host?.id ? " (Host)" : "",
              r.isConnected ? "" : " (offline)"
            ] }),
            r.hasMalConnected ? /* @__PURE__ */ m.jsx(
              "img",
              {
                className: "gmq-mal-badge",
                src: bp,
                alt: "MAL connected",
                draggable: !1,
                onDragStart: (d) => d.preventDefault(),
                onMouseEnter: vu,
                onMouseMove: vu,
                onMouseLeave: Tl
              }
            ) : null
          ] }),
          j.status === "WAITING" ? /* @__PURE__ */ m.jsxs("span", { className: "gmq-player-row-actions", children: [
            qu && ie && r.userId !== ie.id && !Jn ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  type: "button",
                  className: "gmq-btn gmq-btn-secondary gmq-btn-kick",
                  onClick: () => $l(r),
                  disabled: oe === "promote" || oe === "kick",
                  children: "Promote"
                }
              ),
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  type: "button",
                  className: "gmq-btn gmq-btn-danger gmq-btn-kick",
                  onClick: () => CA(r),
                  disabled: oe === "kick" || oe === "promote",
                  children: "Kick"
                }
              )
            ] }) : null,
            /* @__PURE__ */ m.jsx("strong", { children: Mn.includes(r.userId) ? "Ready" : "Not Ready" })
          ] }) : null,
          F === "GUESSING" ? /* @__PURE__ */ m.jsx("strong", { children: Ft.includes(r.userId) ? "Ready" : "Thinking" }) : null
        ] }, r.userId)) }),
        j.status === "WAITING" ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-actions", children: [
            Jn ? null : /* @__PURE__ */ m.jsx(
              "button",
              {
                type: "button",
                className: "gmq-btn gmq-btn-secondary",
                onClick: jA,
                disabled: oe === "lobby-ready",
                children: ac ? "Not Ready" : "Ready Up"
              }
            ),
            /* @__PURE__ */ m.jsxs("p", { className: "gmq-muted", children: [
              "Ready ",
              Mn.length,
              "/",
              qn.length
            ] })
          ] }),
          Jn ? /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Preparing game..." }) : qu ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
            /* @__PURE__ */ m.jsx(
              "button",
              {
                type: "button",
                className: "gmq-btn gmq-btn-secondary",
                onClick: $s,
                disabled: oe === "settings",
                children: "Match Settings"
              }
            ),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                type: "button",
                className: "gmq-btn gmq-btn-primary",
                onClick: ec,
                disabled: oe === "start" || !Ya,
                children: "Start Game"
              }
            ),
            Ya ? null : /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "All players must be ready before start." })
          ] }) : /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Waiting for host to start." })
        ] }) : null
      ] }) : null,
      Ri ? /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-card-standings-latest", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-postgame-header", children: [
          /* @__PURE__ */ m.jsx("h2", { children: "Latest Standings" }),
          xi ? /* @__PURE__ */ m.jsxs("p", { className: "gmq-postgame-winner", children: [
            "Winner: ",
            xi
          ] }) : null
        ] }),
        /* @__PURE__ */ m.jsx("ol", { className: "gmq-postgame-list", children: Fn.map((r, d) => /* @__PURE__ */ m.jsxs("li", { className: `gmq-postgame-row${d === 0 ? " gmq-postgame-row-winner" : ""}`, children: [
          /* @__PURE__ */ m.jsxs("span", { children: [
            d + 1,
            ". ",
            r.displayName
          ] }),
          /* @__PURE__ */ m.jsx("strong", { children: r.score || 0 })
        ] }, `${r.userId || "row"}-${d}`)) })
      ] }) : null,
      ta ? /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-card-round gmq-match-shell", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-match-round-pill", children: [
          /* @__PURE__ */ m.jsx("h2", { children: se?.isSuddenDeath ? "Sudden Death" : `Round ${se?.index || "-"}/${se?.totalRounds || "-"}` }),
          /* @__PURE__ */ m.jsx("p", { className: "gmq-round-phase", children: pA })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-match-stage", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "gmq-match-grid gmq-match-main-row", children: [
            /* @__PURE__ */ m.jsxs(
              "section",
              {
                className: "gmq-match-panel gmq-standings-panel",
                style: { minHeight: `${xl}px`, maxHeight: `${xl}px` },
                children: [
                  /* @__PURE__ */ m.jsx("h3", { children: "Standings" }),
                  /* @__PURE__ */ m.jsx("ul", { className: "gmq-score-list", children: Mi.map((r) => /* @__PURE__ */ m.jsxs("li", { className: "gmq-score-row", children: [
                    /* @__PURE__ */ m.jsx("span", { children: r.displayName }),
                    /* @__PURE__ */ m.jsx("strong", { children: r.score || 0 })
                  ] }, r.userId)) })
                ]
              }
            ),
            /* @__PURE__ */ m.jsxs("section", { className: "gmq-match-center-column", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "gmq-match-panel gmq-video-panel", children: [
                se?.sample?.audioUrl ? /* @__PURE__ */ m.jsx(
                  "audio",
                  {
                    ref: ee,
                    className: "gmq-hidden-media",
                    src: se.sample.audioUrl,
                    preload: "auto",
                    onPlay: () => bt(!0),
                    onPause: () => bt(!1),
                    onEnded: () => bt(!1),
                    onError: () => Pt(oA("source_unavailable"))
                  },
                  `audio-${se.roundId}`
                ) : null,
                se?.sample?.videoUrl ? /* @__PURE__ */ m.jsx(
                  "video",
                  {
                    ref: Ve,
                    className: "gmq-hidden-media",
                    src: se.sample.videoUrl,
                    preload: "auto",
                    playsInline: !0,
                    onPlay: () => bt(!0),
                    onPause: () => bt(!1),
                    onEnded: () => bt(!1),
                    onError: () => Pt(oA("source_unavailable"))
                  },
                  `video-${se.roundId}`
                ) : null,
                Za ? Be.video ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-solution-video-wrap", children: [
                  /* @__PURE__ */ m.jsx(
                    "video",
                    {
                      ref: He,
                      className: "gmq-solution-video",
                      src: Be.video,
                      preload: "auto",
                      controls: !0,
                      playsInline: !0,
                      onError: () => Kt("Could not play solution video in this browser.")
                    },
                    `solution-${se?.roundId || Be.correctAnime?.animeId || "video"}`
                  ),
                  mi ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-stack", children: [
                    /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
                    /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Il().catch(() => {
                    }), children: "Play solution video" })
                  ] }) : null,
                  yu ? /* @__PURE__ */ m.jsx("p", { className: "gmq-muted gmq-muted-warning", children: yu }) : null
                ] }) : /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Solution video is unavailable for this round." }) : /* @__PURE__ */ m.jsx("div", { className: "gmq-video-placeholder", children: /* @__PURE__ */ m.jsx("span", { children: "Video hidden until solution reveal" }) }),
                F === "PENDING" && vA ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-stack", children: [
                  /* @__PURE__ */ m.jsx("p", { children: "Preparing media cache before round 1..." }),
                  /* @__PURE__ */ m.jsxs("p", { className: "gmq-muted", children: [
                    "Ready ",
                    Kn.ready,
                    "/",
                    Kn.total,
                    Kn.failed > 0 ? ` | Failed ${Kn.failed}` : ""
                  ] }),
                  pu ? /* @__PURE__ */ m.jsx("p", { className: "gmq-muted gmq-muted-warning", children: pu }) : null,
                  pu ? /* @__PURE__ */ m.jsx(
                    "button",
                    {
                      type: "button",
                      className: "gmq-btn gmq-btn-secondary",
                      onClick: () => Ti().catch(() => {
                      }),
                      disabled: gu,
                      children: gu ? "Retrying..." : "Retry preload"
                    }
                  ) : null
                ] }) : null,
                Wn ? wA ? fi ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-stack", children: [
                  /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
                  /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Xa({ isAutoplay: !1 }).catch(() => {
                  }), children: "Play sample" })
                ] }) : null : /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Sample audio is unavailable for this round." }) : null,
                hu ? /* @__PURE__ */ m.jsx("p", { className: "gmq-muted gmq-muted-warning", children: hu }) : null,
                /* @__PURE__ */ m.jsxs("label", { className: "gmq-volume-row gmq-volume-row-compact gmq-video-volume", children: [
                  /* @__PURE__ */ m.jsxs("span", { children: [
                    "Volume ",
                    uc
                  ] }),
                  /* @__PURE__ */ m.jsx(
                    "input",
                    {
                      className: "gmq-volume-slider-small",
                      type: "range",
                      min: "0",
                      max: "1",
                      step: "0.01",
                      value: ll,
                      onChange: ka
                    }
                  )
                ] }),
                Ps.active ? /* @__PURE__ */ m.jsx("p", { className: "gmq-muted gmq-round-preparing", children: "Preparing next round..." }) : null
              ] }),
              /* @__PURE__ */ m.jsxs("div", { className: "gmq-match-panel gmq-guess-panel", children: [
                /* @__PURE__ */ m.jsxs("div", { className: "gmq-search-row", children: [
                  /* @__PURE__ */ m.jsxs("div", { className: "gmq-search-box", children: [
                    /* @__PURE__ */ m.jsx(
                      "input",
                      {
                        ref: Fe,
                        value: vn,
                        disabled: !Wn,
                        onChange: (r) => {
                          const d = r.target.value;
                          V.current = d, H.current = null, Yn(d), Da(null), bl(!0);
                        },
                        onKeyDown: (r) => {
                          if (Wn) {
                            if (r.key === "ArrowDown" || r.key === "ArrowUp") {
                              if (st.length <= 0) return;
                              r.preventDefault(), bl(!0), bn((d) => {
                                if (d < 0 || d >= st.length)
                                  return r.key === "ArrowDown" ? 0 : st.length - 1;
                                const E = r.key === "ArrowDown" ? 1 : -1;
                                return (d + E + st.length) % st.length;
                              });
                              return;
                            }
                            if (r.key === "Enter") {
                              if (!cn || st.length <= 0) return;
                              r.preventDefault();
                              const d = Zn >= 0 && Zn < st.length ? Zn : 0, E = st[d];
                              if (!E) return;
                              Ei(E);
                            }
                          }
                        },
                        onFocus: () => {
                          Wn && bl(!0);
                        },
                        onBlur: () => {
                          window.setTimeout(() => {
                            bl(!1), bn(-1);
                          }, 100);
                        },
                        placeholder: Wn ? "Type anime name" : "Waiting for guessing phase"
                      }
                    ),
                    cn && st.length > 0 && Wn ? /* @__PURE__ */ m.jsx("ul", { className: "gmq-search-results", role: "listbox", children: st.map((r, d) => /* @__PURE__ */ m.jsx("li", { children: /* @__PURE__ */ m.jsx(
                      "button",
                      {
                        type: "button",
                        role: "option",
                        "aria-selected": d === Zn,
                        className: d === Zn ? "is-active" : "",
                        ref: (E) => {
                          yt.current[d] = E;
                        },
                        onMouseDown: (E) => E.preventDefault(),
                        onMouseEnter: () => bn(d),
                        onClick: () => Ei(r),
                        children: r.title
                      }
                    ) }, `${r.id}-${r.title}`)) }) : null
                  ] }),
                  /* @__PURE__ */ m.jsx(
                    "button",
                    {
                      type: "button",
                      className: "gmq-btn gmq-btn-secondary",
                      onClick: OA,
                      disabled: oe === "ready" || !Wn,
                      children: UA ? "Unskip" : "Skip"
                    }
                  )
                ] }),
                gA ? /* @__PURE__ */ m.jsx("p", { className: "gmq-muted gmq-muted-warning", children: gA }) : null
              ] })
            ] }),
            /* @__PURE__ */ m.jsxs("section", { className: "gmq-match-panel gmq-info-panel", children: [
              /* @__PURE__ */ m.jsx("h3", { children: "Music Info" }),
              Za ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-stack", children: [
                /* @__PURE__ */ m.jsxs("p", { children: [
                  Be.correctAnime?.animeTitle,
                  " (",
                  Be.correctAnime?.themeType,
                  ")"
                ] }),
                Be.correctAnime?.animeTitleEnglish && String(Be.correctAnime.animeTitleEnglish).trim().toLowerCase() !== String(Be.correctAnime?.animeTitle || "").trim().toLowerCase() ? /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: Be.correctAnime.animeTitleEnglish }) : null,
                Be.correctAnime?.themeTitle ? /* @__PURE__ */ m.jsxs("p", { className: "gmq-muted", children: [
                  "Artist: ",
                  Be.correctAnime.themeTitle
                ] }) : null
              ] }) : /* @__PURE__ */ m.jsx("p", { className: "gmq-muted", children: "Music info hidden until solution reveal." })
            ] })
          ] }),
          /* @__PURE__ */ m.jsx("section", { className: "gmq-player-grid gmq-match-player-row", children: zi.map((r) => {
            const d = qi.get(r.userId) || null, D = _A && typeof d?.isCorrect == "boolean" ? d.isCorrect ? " gmq-answer-bubble-correct" : " gmq-answer-bubble-wrong" : "", G = typeof d?.guessText == "string" && d.guessText.trim() ? d.guessText : "-";
            return /* @__PURE__ */ m.jsxs("div", { className: "gmq-player-square-wrap", children: [
              DA ? /* @__PURE__ */ m.jsx("div", { className: `gmq-answer-bubble${D}`, children: G }) : null,
              Wn && Ft.includes(r.userId) ? /* @__PURE__ */ m.jsx("span", { className: "gmq-player-ready-indicator", children: "Ready" }) : null,
              /* @__PURE__ */ m.jsx("div", { className: "gmq-player-square", children: /* @__PURE__ */ m.jsx("span", { children: r.displayName }) })
            ] }, r.userId);
          }) })
        ] })
      ] }) : null
    ] }) : /* @__PURE__ */ m.jsxs("div", { className: "gmq-menu", children: [
      /* @__PURE__ */ m.jsx("div", { className: "gmq-menu-host-wrap", children: /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary gmq-btn-host", onClick: () => za(!0), children: "Host Lobby" }) }),
      /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-card-directory", children: [
        /* @__PURE__ */ m.jsx("div", { className: "gmq-directory-header", children: /* @__PURE__ */ m.jsx("h2", { children: "Available Lobbies" }) }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-directory-top", children: [
          /* @__PURE__ */ m.jsx("div", { className: "gmq-card gmq-card-toolbar", children: /* @__PURE__ */ m.jsxs("div", { className: "gmq-directory-controls", children: [
            /* @__PURE__ */ m.jsx("input", { value: qa, onChange: (r) => si(r.target.value), placeholder: "Search by code/name" }),
            /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => It(), disabled: dA, children: "Refresh" })
          ] }) }),
          /* @__PURE__ */ m.jsx("div", { className: "gmq-card gmq-card-manual-join", children: /* @__PURE__ */ m.jsxs("div", { className: "gmq-inline gmq-inline-manual", children: [
            /* @__PURE__ */ m.jsx("input", { value: Oa, onChange: (r) => ja(Ht(r.target.value)), placeholder: "Lobby code (ABC123)" }),
            /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: () => Ru(Oa, ""), disabled: oe === "join", children: "Join Lobby" })
          ] }) })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "gmq-lobby-table-head", children: [
          /* @__PURE__ */ m.jsx("span", { children: "Lobby" }),
          /* @__PURE__ */ m.jsx("span", { children: "Match Settings" }),
          /* @__PURE__ */ m.jsx("span", { children: "Action" })
        ] }),
        /* @__PURE__ */ m.jsxs("ul", { className: "gmq-lobby-list gmq-lobby-list-detailed", children: [
          ju.map((r) => /* @__PURE__ */ m.jsxs("li", { className: "gmq-lobby-item gmq-lobby-item-detailed", children: [
            /* @__PURE__ */ m.jsxs("div", { children: [
              /* @__PURE__ */ m.jsx("div", { className: "gmq-lobby-title", children: r.name || r.code }),
              /* @__PURE__ */ m.jsxs("div", { className: "gmq-muted", children: [
                r.code,
                " | ",
                r.playerCount,
                "/",
                r.maxPlayers,
                " players"
              ] })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "gmq-lobby-settings", children: [
              /* @__PURE__ */ m.jsxs("span", { children: [
                r.roundCount,
                " rounds"
              ] }),
              /* @__PURE__ */ m.jsxs("span", { children: [
                r.guessSeconds,
                "s guess"
              ] }),
              /* @__PURE__ */ m.jsx("span", { children: Xs[r.sourceMode]?.label || r.sourceMode }),
              /* @__PURE__ */ m.jsx("span", { children: Bs[r.selectionMode]?.label || r.selectionMode }),
              /* @__PURE__ */ m.jsx("span", { children: Gs[r.themeMode]?.label || r.themeMode })
            ] }),
            /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Ru(r.code, "", { fromDirectory: !0 }), disabled: oe === "join", children: "Join" })
          ] }, r.code)),
          ju.length === 0 ? /* @__PURE__ */ m.jsx("li", { className: "gmq-lobby-empty gmq-muted", children: "No open public lobbies right now." }) : null
        ] })
      ] }),
      Ma ? /* @__PURE__ */ m.jsx(
        "div",
        {
          className: "gmq-modal-backdrop",
          onPointerDown: gi,
          onClick: vi,
          children: /* @__PURE__ */ m.jsxs("article", { className: "gmq-card gmq-modal-card", onClick: (r) => r.stopPropagation(), children: [
            /* @__PURE__ */ m.jsxs("div", { className: "gmq-modal-header", children: [
              /* @__PURE__ */ m.jsx("h2", { children: "Host Lobby" }),
              /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary gmq-btn-modal-close", onClick: () => za(!1), children: "Close" })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "gmq-name-private-row", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-stack", children: [
                /* @__PURE__ */ m.jsx("label", { htmlFor: "create-lobby-name", children: "Lobby name" }),
                /* @__PURE__ */ m.jsx(
                  "input",
                  {
                    id: "create-lobby-name",
                    value: gt.name,
                    onChange: (r) => vt((d) => ({ ...d, name: r.target.value })),
                    placeholder: "Lobby name"
                  }
                )
              ] }),
              /* @__PURE__ */ m.jsxs("label", { className: "gmq-checkbox gmq-checkbox-inline", children: [
                /* @__PURE__ */ m.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: gt.isPrivate,
                    onChange: (r) => vt((d) => ({ ...d, isPrivate: r.target.checked }))
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
                    value: Rt,
                    onChange: (r) => sl(r.target.value),
                    onBlur: El
                  }
                )
              ] }),
              /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
                /* @__PURE__ */ m.jsx("label", { htmlFor: "create-round-count", children: "Rounds" }),
                /* @__PURE__ */ m.jsx("input", { id: "create-round-count", type: "number", min: "1", max: "50", value: gt.roundCount, onChange: (r) => vt((d) => ({ ...d, roundCount: Number(r.target.value || 10) })) })
              ] }),
              /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
                /* @__PURE__ */ m.jsx("label", { htmlFor: "create-guess-seconds", children: "Guess Time (sec)" }),
                /* @__PURE__ */ m.jsx("input", { id: "create-guess-seconds", type: "number", min: "5", max: "120", value: gt.guessSeconds, onChange: (r) => vt((d) => ({ ...d, guessSeconds: Number(r.target.value || 20) })) })
              ] })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-grid", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
                /* @__PURE__ */ m.jsx("label", { htmlFor: "create-source-mode", children: "Song Source" }),
                /* @__PURE__ */ m.jsx("select", { id: "create-source-mode", value: gt.sourceMode, onChange: (r) => vt((d) => ({ ...d, sourceMode: r.target.value })), children: uo.map((r) => /* @__PURE__ */ m.jsx("option", { value: r, children: Xs[r]?.label || r }, r)) })
              ] }),
              /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
                /* @__PURE__ */ m.jsx("label", { htmlFor: "create-selection-mode", children: "Selection Style" }),
                /* @__PURE__ */ m.jsx("select", { id: "create-selection-mode", value: gt.selectionMode, onChange: (r) => vt((d) => ({ ...d, selectionMode: r.target.value })), children: io.map((r) => /* @__PURE__ */ m.jsx("option", { value: r, children: Bs[r]?.label || r }, r)) })
              ] }),
              /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-card", children: [
                /* @__PURE__ */ m.jsx("label", { htmlFor: "create-theme-mode", children: "Song Types" }),
                /* @__PURE__ */ m.jsx("select", { id: "create-theme-mode", value: gt.themeMode, onChange: (r) => vt((d) => ({ ...d, themeMode: r.target.value })), children: Ao.map((r) => /* @__PURE__ */ m.jsx("option", { value: r, children: Gs[r]?.label || r }, r)) })
              ] })
            ] }),
            HA ? /* @__PURE__ */ m.jsxs("div", { className: "gmq-field-grid gmq-field-grid-2", children: [
              /* @__PURE__ */ m.jsx(
                Ys,
                {
                  label: "Anime MAL Score",
                  minValue: gt.animeScoreMin,
                  maxValue: gt.animeScoreMax,
                  onMinChange: bu,
                  onMaxChange: SA
                }
              ),
              /* @__PURE__ */ m.jsx(
                Ys,
                {
                  label: "Player MAL Score",
                  minValue: gt.playerScoreMin,
                  maxValue: gt.playerScoreMax,
                  onMinChange: Su,
                  onMaxChange: Tu,
                  hint: "Used for MAL-list entries (MAL_ONLY, and MAL portion of HYBRID)."
                }
              )
            ] }) : null,
            /* @__PURE__ */ m.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: Is, disabled: oe === "create", children: oe === "create" ? "Hosting..." : "Host Lobby" })
          ] })
        }
      ) : null
    ] }),
    Al.visible ? /* @__PURE__ */ m.jsx(
      "div",
      {
        className: "gmq-floating-tooltip",
        style: {
          left: `${Al.x}px`,
          top: `${Al.y}px`
        },
        children: Al.text
      }
    ) : null
  ] });
}
const Vm = document.getElementById("game-root");
Vm && Ey.createRoot(Vm).render(/* @__PURE__ */ m.jsx(Up, {}));
