var ff = { exports: {} }, Su = {};
var vd;
function lv() {
  if (vd) return Su;
  vd = 1;
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(f, g, M) {
    var q = null;
    if (M !== void 0 && (q = "" + M), g.key !== void 0 && (q = "" + g.key), "key" in g) {
      M = {};
      for (var Y in g)
        Y !== "key" && (M[Y] = g[Y]);
    } else M = g;
    return g = M.ref, {
      $$typeof: r,
      type: f,
      key: q,
      ref: g !== void 0 ? g : null,
      props: M
    };
  }
  return Su.Fragment = i, Su.jsx = s, Su.jsxs = s, Su;
}
var gd;
function nv() {
  return gd || (gd = 1, ff.exports = lv()), ff.exports;
}
var O = nv(), rf = { exports: {} }, W = {};
var pd;
function av() {
  if (pd) return W;
  pd = 1;
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), g = /* @__PURE__ */ Symbol.for("react.profiler"), M = /* @__PURE__ */ Symbol.for("react.consumer"), q = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), C = /* @__PURE__ */ Symbol.for("react.suspense"), N = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), w = /* @__PURE__ */ Symbol.for("react.activity"), tt = Symbol.iterator;
  function Wt(h) {
    return h === null || typeof h != "object" ? null : (h = tt && h[tt] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var ne = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Ot = Object.assign, Tt = {};
  function ae(h, z, B) {
    this.props = h, this.context = z, this.refs = Tt, this.updater = B || ne;
  }
  ae.prototype.isReactComponent = {}, ae.prototype.setState = function(h, z) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, z, "setState");
  }, ae.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function dt() {
  }
  dt.prototype = ae.prototype;
  function Xt(h, z, B) {
    this.props = h, this.context = z, this.refs = Tt, this.updater = B || ne;
  }
  var Ct = Xt.prototype = new dt();
  Ct.constructor = Xt, Ot(Ct, ae.prototype), Ct.isPureReactComponent = !0;
  var xe = Array.isArray;
  function $t() {
  }
  var K = { H: null, A: null, T: null, S: null }, ue = Object.prototype.hasOwnProperty;
  function Be(h, z, B) {
    var j = B.ref;
    return {
      $$typeof: r,
      type: h,
      key: z,
      ref: j !== void 0 ? j : null,
      props: B
    };
  }
  function Bl(h, z) {
    return Be(h.type, z, h.props);
  }
  function oe(h) {
    return typeof h == "object" && h !== null && h.$$typeof === r;
  }
  function ie(h) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(B) {
      return z[B];
    });
  }
  var Zt = /\/+/g;
  function Kt(h, z) {
    return typeof h == "object" && h !== null && h.key != null ? ie("" + h.key) : z.toString(36);
  }
  function me(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then($t, $t) : (h.status = "pending", h.then(
          function(z) {
            h.status === "pending" && (h.status = "fulfilled", h.value = z);
          },
          function(z) {
            h.status === "pending" && (h.status = "rejected", h.reason = z);
          }
        )), h.status) {
          case "fulfilled":
            return h.value;
          case "rejected":
            throw h.reason;
        }
    }
    throw h;
  }
  function T(h, z, B, j, H) {
    var k = typeof h;
    (k === "undefined" || k === "boolean") && (h = null);
    var ft = !1;
    if (h === null) ft = !0;
    else
      switch (k) {
        case "bigint":
        case "string":
        case "number":
          ft = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case r:
            case i:
              ft = !0;
              break;
            case J:
              return ft = h._init, T(
                ft(h._payload),
                z,
                B,
                j,
                H
              );
          }
      }
    if (ft)
      return H = H(h), ft = j === "" ? "." + Kt(h, 0) : j, xe(H) ? (B = "", ft != null && (B = ft.replace(Zt, "$&/") + "/"), T(H, z, B, "", function(Hl) {
        return Hl;
      })) : H != null && (oe(H) && (H = Bl(
        H,
        B + (H.key == null || h && h.key === H.key ? "" : ("" + H.key).replace(
          Zt,
          "$&/"
        ) + "/") + ft
      )), z.push(H)), 1;
    ft = 0;
    var Nt = j === "" ? "." : j + ":";
    if (xe(h))
      for (var zt = 0; zt < h.length; zt++)
        j = h[zt], k = Nt + Kt(j, zt), ft += T(
          j,
          z,
          B,
          k,
          H
        );
    else if (zt = Wt(h), typeof zt == "function")
      for (h = zt.call(h), zt = 0; !(j = h.next()).done; )
        j = j.value, k = Nt + Kt(j, zt++), ft += T(
          j,
          z,
          B,
          k,
          H
        );
    else if (k === "object") {
      if (typeof h.then == "function")
        return T(
          me(h),
          z,
          B,
          j,
          H
        );
      throw z = String(h), Error(
        "Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ft;
  }
  function x(h, z, B) {
    if (h == null) return h;
    var j = [], H = 0;
    return T(h, j, "", "", function(k) {
      return z.call(B, k, H++);
    }), j;
  }
  function V(h) {
    if (h._status === -1) {
      var z = h._result;
      z = z(), z.then(
        function(B) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = B);
        },
        function(B) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = B);
        }
      ), h._status === -1 && (h._status = 0, h._result = z);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var at = typeof reportError == "function" ? reportError : function(h) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var z = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
        error: h
      });
      if (!window.dispatchEvent(z)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", h);
      return;
    }
    console.error(h);
  }, mt = {
    map: x,
    forEach: function(h, z, B) {
      x(
        h,
        function() {
          z.apply(this, arguments);
        },
        B
      );
    },
    count: function(h) {
      var z = 0;
      return x(h, function() {
        z++;
      }), z;
    },
    toArray: function(h) {
      return x(h, function(z) {
        return z;
      }) || [];
    },
    only: function(h) {
      if (!oe(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  };
  return W.Activity = w, W.Children = mt, W.Component = ae, W.Fragment = s, W.Profiler = g, W.PureComponent = Xt, W.StrictMode = f, W.Suspense = C, W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, W.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return K.H.useMemoCache(h);
    }
  }, W.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, W.cacheSignal = function() {
    return null;
  }, W.cloneElement = function(h, z, B) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var j = Ot({}, h.props), H = h.key;
    if (z != null)
      for (k in z.key !== void 0 && (H = "" + z.key), z)
        !ue.call(z, k) || k === "key" || k === "__self" || k === "__source" || k === "ref" && z.ref === void 0 || (j[k] = z[k]);
    var k = arguments.length - 2;
    if (k === 1) j.children = B;
    else if (1 < k) {
      for (var ft = Array(k), Nt = 0; Nt < k; Nt++)
        ft[Nt] = arguments[Nt + 2];
      j.children = ft;
    }
    return Be(h.type, H, j);
  }, W.createContext = function(h) {
    return h = {
      $$typeof: q,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: M,
      _context: h
    }, h;
  }, W.createElement = function(h, z, B) {
    var j, H = {}, k = null;
    if (z != null)
      for (j in z.key !== void 0 && (k = "" + z.key), z)
        ue.call(z, j) && j !== "key" && j !== "__self" && j !== "__source" && (H[j] = z[j]);
    var ft = arguments.length - 2;
    if (ft === 1) H.children = B;
    else if (1 < ft) {
      for (var Nt = Array(ft), zt = 0; zt < ft; zt++)
        Nt[zt] = arguments[zt + 2];
      H.children = Nt;
    }
    if (h && h.defaultProps)
      for (j in ft = h.defaultProps, ft)
        H[j] === void 0 && (H[j] = ft[j]);
    return Be(h, k, H);
  }, W.createRef = function() {
    return { current: null };
  }, W.forwardRef = function(h) {
    return { $$typeof: Y, render: h };
  }, W.isValidElement = oe, W.lazy = function(h) {
    return {
      $$typeof: J,
      _payload: { _status: -1, _result: h },
      _init: V
    };
  }, W.memo = function(h, z) {
    return {
      $$typeof: N,
      type: h,
      compare: z === void 0 ? null : z
    };
  }, W.startTransition = function(h) {
    var z = K.T, B = {};
    K.T = B;
    try {
      var j = h(), H = K.S;
      H !== null && H(B, j), typeof j == "object" && j !== null && typeof j.then == "function" && j.then($t, at);
    } catch (k) {
      at(k);
    } finally {
      z !== null && B.types !== null && (z.types = B.types), K.T = z;
    }
  }, W.unstable_useCacheRefresh = function() {
    return K.H.useCacheRefresh();
  }, W.use = function(h) {
    return K.H.use(h);
  }, W.useActionState = function(h, z, B) {
    return K.H.useActionState(h, z, B);
  }, W.useCallback = function(h, z) {
    return K.H.useCallback(h, z);
  }, W.useContext = function(h) {
    return K.H.useContext(h);
  }, W.useDebugValue = function() {
  }, W.useDeferredValue = function(h, z) {
    return K.H.useDeferredValue(h, z);
  }, W.useEffect = function(h, z) {
    return K.H.useEffect(h, z);
  }, W.useEffectEvent = function(h) {
    return K.H.useEffectEvent(h);
  }, W.useId = function() {
    return K.H.useId();
  }, W.useImperativeHandle = function(h, z, B) {
    return K.H.useImperativeHandle(h, z, B);
  }, W.useInsertionEffect = function(h, z) {
    return K.H.useInsertionEffect(h, z);
  }, W.useLayoutEffect = function(h, z) {
    return K.H.useLayoutEffect(h, z);
  }, W.useMemo = function(h, z) {
    return K.H.useMemo(h, z);
  }, W.useOptimistic = function(h, z) {
    return K.H.useOptimistic(h, z);
  }, W.useReducer = function(h, z, B) {
    return K.H.useReducer(h, z, B);
  }, W.useRef = function(h) {
    return K.H.useRef(h);
  }, W.useState = function(h) {
    return K.H.useState(h);
  }, W.useSyncExternalStore = function(h, z, B) {
    return K.H.useSyncExternalStore(
      h,
      z,
      B
    );
  }, W.useTransition = function() {
    return K.H.useTransition();
  }, W.version = "19.2.4", W;
}
var bd;
function Of() {
  return bd || (bd = 1, rf.exports = av()), rf.exports;
}
var U = Of(), of = { exports: {} }, _u = {}, hf = { exports: {} }, df = {};
var Sd;
function uv() {
  return Sd || (Sd = 1, (function(r) {
    function i(T, x) {
      var V = T.length;
      T.push(x);
      t: for (; 0 < V; ) {
        var at = V - 1 >>> 1, mt = T[at];
        if (0 < g(mt, x))
          T[at] = x, T[V] = mt, V = at;
        else break t;
      }
    }
    function s(T) {
      return T.length === 0 ? null : T[0];
    }
    function f(T) {
      if (T.length === 0) return null;
      var x = T[0], V = T.pop();
      if (V !== x) {
        T[0] = V;
        t: for (var at = 0, mt = T.length, h = mt >>> 1; at < h; ) {
          var z = 2 * (at + 1) - 1, B = T[z], j = z + 1, H = T[j];
          if (0 > g(B, V))
            j < mt && 0 > g(H, B) ? (T[at] = H, T[j] = V, at = j) : (T[at] = B, T[z] = V, at = z);
          else if (j < mt && 0 > g(H, V))
            T[at] = H, T[j] = V, at = j;
          else break t;
        }
      }
      return x;
    }
    function g(T, x) {
      var V = T.sortIndex - x.sortIndex;
      return V !== 0 ? V : T.id - x.id;
    }
    if (r.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var M = performance;
      r.unstable_now = function() {
        return M.now();
      };
    } else {
      var q = Date, Y = q.now();
      r.unstable_now = function() {
        return q.now() - Y;
      };
    }
    var C = [], N = [], J = 1, w = null, tt = 3, Wt = !1, ne = !1, Ot = !1, Tt = !1, ae = typeof setTimeout == "function" ? setTimeout : null, dt = typeof clearTimeout == "function" ? clearTimeout : null, Xt = typeof setImmediate < "u" ? setImmediate : null;
    function Ct(T) {
      for (var x = s(N); x !== null; ) {
        if (x.callback === null) f(N);
        else if (x.startTime <= T)
          f(N), x.sortIndex = x.expirationTime, i(C, x);
        else break;
        x = s(N);
      }
    }
    function xe(T) {
      if (Ot = !1, Ct(T), !ne)
        if (s(C) !== null)
          ne = !0, $t || ($t = !0, ie());
        else {
          var x = s(N);
          x !== null && me(xe, x.startTime - T);
        }
    }
    var $t = !1, K = -1, ue = 5, Be = -1;
    function Bl() {
      return Tt ? !0 : !(r.unstable_now() - Be < ue);
    }
    function oe() {
      if (Tt = !1, $t) {
        var T = r.unstable_now();
        Be = T;
        var x = !0;
        try {
          t: {
            ne = !1, Ot && (Ot = !1, dt(K), K = -1), Wt = !0;
            var V = tt;
            try {
              e: {
                for (Ct(T), w = s(C); w !== null && !(w.expirationTime > T && Bl()); ) {
                  var at = w.callback;
                  if (typeof at == "function") {
                    w.callback = null, tt = w.priorityLevel;
                    var mt = at(
                      w.expirationTime <= T
                    );
                    if (T = r.unstable_now(), typeof mt == "function") {
                      w.callback = mt, Ct(T), x = !0;
                      break e;
                    }
                    w === s(C) && f(C), Ct(T);
                  } else f(C);
                  w = s(C);
                }
                if (w !== null) x = !0;
                else {
                  var h = s(N);
                  h !== null && me(
                    xe,
                    h.startTime - T
                  ), x = !1;
                }
              }
              break t;
            } finally {
              w = null, tt = V, Wt = !1;
            }
            x = void 0;
          }
        } finally {
          x ? ie() : $t = !1;
        }
      }
    }
    var ie;
    if (typeof Xt == "function")
      ie = function() {
        Xt(oe);
      };
    else if (typeof MessageChannel < "u") {
      var Zt = new MessageChannel(), Kt = Zt.port2;
      Zt.port1.onmessage = oe, ie = function() {
        Kt.postMessage(null);
      };
    } else
      ie = function() {
        ae(oe, 0);
      };
    function me(T, x) {
      K = ae(function() {
        T(r.unstable_now());
      }, x);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, r.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ue = 0 < T ? Math.floor(1e3 / T) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return tt;
    }, r.unstable_next = function(T) {
      switch (tt) {
        case 1:
        case 2:
        case 3:
          var x = 3;
          break;
        default:
          x = tt;
      }
      var V = tt;
      tt = x;
      try {
        return T();
      } finally {
        tt = V;
      }
    }, r.unstable_requestPaint = function() {
      Tt = !0;
    }, r.unstable_runWithPriority = function(T, x) {
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
      var V = tt;
      tt = T;
      try {
        return x();
      } finally {
        tt = V;
      }
    }, r.unstable_scheduleCallback = function(T, x, V) {
      var at = r.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? at + V : at) : V = at, T) {
        case 1:
          var mt = -1;
          break;
        case 2:
          mt = 250;
          break;
        case 5:
          mt = 1073741823;
          break;
        case 4:
          mt = 1e4;
          break;
        default:
          mt = 5e3;
      }
      return mt = V + mt, T = {
        id: J++,
        callback: x,
        priorityLevel: T,
        startTime: V,
        expirationTime: mt,
        sortIndex: -1
      }, V > at ? (T.sortIndex = V, i(N, T), s(C) === null && T === s(N) && (Ot ? (dt(K), K = -1) : Ot = !0, me(xe, V - at))) : (T.sortIndex = mt, i(C, T), ne || Wt || (ne = !0, $t || ($t = !0, ie()))), T;
    }, r.unstable_shouldYield = Bl, r.unstable_wrapCallback = function(T) {
      var x = tt;
      return function() {
        var V = tt;
        tt = x;
        try {
          return T.apply(this, arguments);
        } finally {
          tt = V;
        }
      };
    };
  })(df)), df;
}
var _d;
function iv() {
  return _d || (_d = 1, hf.exports = uv()), hf.exports;
}
var mf = { exports: {} }, re = {};
var Ed;
function cv() {
  if (Ed) return re;
  Ed = 1;
  var r = Of();
  function i(C) {
    var N = "https://react.dev/errors/" + C;
    if (1 < arguments.length) {
      N += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var J = 2; J < arguments.length; J++)
        N += "&args[]=" + encodeURIComponent(arguments[J]);
    }
    return "Minified React error #" + C + "; visit " + N + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var f = {
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
  }, g = /* @__PURE__ */ Symbol.for("react.portal");
  function M(C, N, J) {
    var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: g,
      key: w == null ? null : "" + w,
      children: C,
      containerInfo: N,
      implementation: J
    };
  }
  var q = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Y(C, N) {
    if (C === "font") return "";
    if (typeof N == "string")
      return N === "use-credentials" ? N : "";
  }
  return re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, re.createPortal = function(C, N) {
    var J = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!N || N.nodeType !== 1 && N.nodeType !== 9 && N.nodeType !== 11)
      throw Error(i(299));
    return M(C, N, null, J);
  }, re.flushSync = function(C) {
    var N = q.T, J = f.p;
    try {
      if (q.T = null, f.p = 2, C) return C();
    } finally {
      q.T = N, f.p = J, f.d.f();
    }
  }, re.preconnect = function(C, N) {
    typeof C == "string" && (N ? (N = N.crossOrigin, N = typeof N == "string" ? N === "use-credentials" ? N : "" : void 0) : N = null, f.d.C(C, N));
  }, re.prefetchDNS = function(C) {
    typeof C == "string" && f.d.D(C);
  }, re.preinit = function(C, N) {
    if (typeof C == "string" && N && typeof N.as == "string") {
      var J = N.as, w = Y(J, N.crossOrigin), tt = typeof N.integrity == "string" ? N.integrity : void 0, Wt = typeof N.fetchPriority == "string" ? N.fetchPriority : void 0;
      J === "style" ? f.d.S(
        C,
        typeof N.precedence == "string" ? N.precedence : void 0,
        {
          crossOrigin: w,
          integrity: tt,
          fetchPriority: Wt
        }
      ) : J === "script" && f.d.X(C, {
        crossOrigin: w,
        integrity: tt,
        fetchPriority: Wt,
        nonce: typeof N.nonce == "string" ? N.nonce : void 0
      });
    }
  }, re.preinitModule = function(C, N) {
    if (typeof C == "string")
      if (typeof N == "object" && N !== null) {
        if (N.as == null || N.as === "script") {
          var J = Y(
            N.as,
            N.crossOrigin
          );
          f.d.M(C, {
            crossOrigin: J,
            integrity: typeof N.integrity == "string" ? N.integrity : void 0,
            nonce: typeof N.nonce == "string" ? N.nonce : void 0
          });
        }
      } else N == null && f.d.M(C);
  }, re.preload = function(C, N) {
    if (typeof C == "string" && typeof N == "object" && N !== null && typeof N.as == "string") {
      var J = N.as, w = Y(J, N.crossOrigin);
      f.d.L(C, J, {
        crossOrigin: w,
        integrity: typeof N.integrity == "string" ? N.integrity : void 0,
        nonce: typeof N.nonce == "string" ? N.nonce : void 0,
        type: typeof N.type == "string" ? N.type : void 0,
        fetchPriority: typeof N.fetchPriority == "string" ? N.fetchPriority : void 0,
        referrerPolicy: typeof N.referrerPolicy == "string" ? N.referrerPolicy : void 0,
        imageSrcSet: typeof N.imageSrcSet == "string" ? N.imageSrcSet : void 0,
        imageSizes: typeof N.imageSizes == "string" ? N.imageSizes : void 0,
        media: typeof N.media == "string" ? N.media : void 0
      });
    }
  }, re.preloadModule = function(C, N) {
    if (typeof C == "string")
      if (N) {
        var J = Y(N.as, N.crossOrigin);
        f.d.m(C, {
          as: typeof N.as == "string" && N.as !== "script" ? N.as : void 0,
          crossOrigin: J,
          integrity: typeof N.integrity == "string" ? N.integrity : void 0
        });
      } else f.d.m(C);
  }, re.requestFormReset = function(C) {
    f.d.r(C);
  }, re.unstable_batchedUpdates = function(C, N) {
    return C(N);
  }, re.useFormState = function(C, N, J) {
    return q.H.useFormState(C, N, J);
  }, re.useFormStatus = function() {
    return q.H.useHostTransitionStatus();
  }, re.version = "19.2.4", re;
}
var Td;
function sv() {
  if (Td) return mf.exports;
  Td = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), mf.exports = cv(), mf.exports;
}
var Ad;
function fv() {
  if (Ad) return _u;
  Ad = 1;
  var r = iv(), i = Of(), s = sv();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function g(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function M(t) {
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
  function q(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function Y(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function C(t) {
    if (M(t) !== t)
      throw Error(f(188));
  }
  function N(t) {
    var e = t.alternate;
    if (!e) {
      if (e = M(t), e === null) throw Error(f(188));
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
          if (u === l) return C(a), t;
          if (u === n) return C(a), e;
          u = u.sibling;
        }
        throw Error(f(188));
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
          if (!c) throw Error(f(189));
        }
      }
      if (l.alternate !== n) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function J(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = J(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var w = Object.assign, tt = /* @__PURE__ */ Symbol.for("react.element"), Wt = /* @__PURE__ */ Symbol.for("react.transitional.element"), ne = /* @__PURE__ */ Symbol.for("react.portal"), Ot = /* @__PURE__ */ Symbol.for("react.fragment"), Tt = /* @__PURE__ */ Symbol.for("react.strict_mode"), ae = /* @__PURE__ */ Symbol.for("react.profiler"), dt = /* @__PURE__ */ Symbol.for("react.consumer"), Xt = /* @__PURE__ */ Symbol.for("react.context"), Ct = /* @__PURE__ */ Symbol.for("react.forward_ref"), xe = /* @__PURE__ */ Symbol.for("react.suspense"), $t = /* @__PURE__ */ Symbol.for("react.suspense_list"), K = /* @__PURE__ */ Symbol.for("react.memo"), ue = /* @__PURE__ */ Symbol.for("react.lazy"), Be = /* @__PURE__ */ Symbol.for("react.activity"), Bl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), oe = Symbol.iterator;
  function ie(t) {
    return t === null || typeof t != "object" ? null : (t = oe && t[oe] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Zt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Kt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Zt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Ot:
        return "Fragment";
      case ae:
        return "Profiler";
      case Tt:
        return "StrictMode";
      case xe:
        return "Suspense";
      case $t:
        return "SuspenseList";
      case Be:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case ne:
          return "Portal";
        case Xt:
          return t.displayName || "Context";
        case dt:
          return (t._context.displayName || "Context") + ".Consumer";
        case Ct:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case K:
          return e = t.displayName || null, e !== null ? e : Kt(t.type) || "Memo";
        case ue:
          e = t._payload, t = t._init;
          try {
            return Kt(t(e));
          } catch {
          }
      }
    return null;
  }
  var me = Array.isArray, T = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, at = [], mt = -1;
  function h(t) {
    return { current: t };
  }
  function z(t) {
    0 > mt || (t.current = at[mt], at[mt] = null, mt--);
  }
  function B(t, e) {
    mt++, at[mt] = t.current, t.current = e;
  }
  var j = h(null), H = h(null), k = h(null), ft = h(null);
  function Nt(t, e) {
    switch (B(k, e), B(H, t), B(j, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Yh(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Yh(e), t = wh(e, t);
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
    z(j), B(j, t);
  }
  function zt() {
    z(j), z(H), z(k);
  }
  function Hl(t) {
    t.memoizedState !== null && B(ft, t);
    var e = j.current, l = wh(e, t.type);
    e !== l && (B(H, t), B(j, l));
  }
  function et(t) {
    H.current === t && (z(j), z(H)), ft.current === t && (z(ft), vu._currentValue = V);
  }
  var bn, zu;
  function ye(t) {
    if (bn === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        bn = e && e[1] || "", zu = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + bn + t + zu;
  }
  var Ft = !1;
  function tl(t, e) {
    if (!t || Ft) return "";
    Ft = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var R = function() {
                throw Error();
              };
              if (Object.defineProperty(R.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(R, []);
                } catch (_) {
                  var S = _;
                }
                Reflect.construct(t, [], R);
              } else {
                try {
                  R.call();
                } catch (_) {
                  S = _;
                }
                t.call(R.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                S = _;
              }
              (R = t()) && typeof R.catch == "function" && R.catch(function() {
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
        var d = c.split(`
`), b = o.split(`
`);
        for (a = n = 0; n < d.length && !d[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; a < b.length && !b[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (n === d.length || a === b.length)
          for (n = d.length - 1, a = b.length - 1; 1 <= n && 0 <= a && d[n] !== b[a]; )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (d[n] !== b[a]) {
            if (n !== 1 || a !== 1)
              do
                if (n--, a--, 0 > a || d[n] !== b[a]) {
                  var E = `
` + d[n].replace(" at new ", " at ");
                  return t.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", t.displayName)), E;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      Ft = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? ye(l) : "";
  }
  function Qn(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ye(t.type);
      case 16:
        return ye("Lazy");
      case 13:
        return t.child !== e && e !== null ? ye("Suspense Fallback") : ye("Suspense");
      case 19:
        return ye("SuspenseList");
      case 0:
      case 15:
        return tl(t.type, !1);
      case 11:
        return tl(t.type.render, !1);
      case 1:
        return tl(t.type, !0);
      case 31:
        return ye("Activity");
      default:
        return "";
    }
  }
  function Sn(t) {
    try {
      var e = "", l = null;
      do
        e += Qn(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var el = Object.prototype.hasOwnProperty, jl = r.unstable_scheduleCallback, ml = r.unstable_cancelCallback, Vn = r.unstable_shouldYield, Ca = r.unstable_requestPaint, Jt = r.unstable_now, $i = r.unstable_getCurrentPriorityLevel, ll = r.unstable_ImmediatePriority, Zn = r.unstable_UserBlockingPriority, He = r.unstable_NormalPriority, Fi = r.unstable_LowPriority, je = r.unstable_IdlePriority, Ii = r.log, Da = r.unstable_setDisableYieldValue, yl = null, Dt = null;
  function ce(t) {
    if (typeof Ii == "function" && Da(t), Dt && typeof Dt.setStrictMode == "function")
      try {
        Dt.setStrictMode(yl, t);
      } catch {
      }
  }
  var he = Math.clz32 ? Math.clz32 : Ru, Nu = Math.log, Ll = Math.LN2;
  function Ru(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Nu(t) / Ll | 0) | 0;
  }
  var se = 256, _n = 262144, Te = 4194304;
  function nl(t) {
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
  function Kn(t, e, l) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var a = 0, u = t.suspendedLanes, c = t.pingedLanes;
    t = t.warmLanes;
    var o = n & 134217727;
    return o !== 0 ? (n = o & ~u, n !== 0 ? a = nl(n) : (c &= o, c !== 0 ? a = nl(c) : l || (l = o & ~t, l !== 0 && (a = nl(l))))) : (o = n & ~u, o !== 0 ? a = nl(o) : c !== 0 ? a = nl(c) : l || (l = n & ~t, l !== 0 && (a = nl(l)))), a === 0 ? 0 : e !== 0 && e !== a && (e & u) === 0 && (u = a & -a, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : a;
  }
  function al(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Ae(t, e) {
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
  function We() {
    var t = Te;
    return Te <<= 1, (Te & 62914560) === 0 && (Te = 4194304), t;
  }
  function Jn(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Yl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Mu(t, e, l, n, a, u) {
    var c = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var o = t.entanglements, d = t.expirationTimes, b = t.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var E = 31 - he(l), R = 1 << E;
      o[E] = 0, d[E] = -1;
      var S = b[E];
      if (S !== null)
        for (b[E] = null, E = 0; E < S.length; E++) {
          var _ = S[E];
          _ !== null && (_.lane &= -536870913);
        }
      l &= ~R;
    }
    n !== 0 && wl(t, n, 0), u !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(c & ~e));
  }
  function wl(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var n = 31 - he(e);
    t.entangledLanes |= e, t.entanglements[n] = t.entanglements[n] | 1073741824 | l & 261930;
  }
  function Gl(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var n = 31 - he(l), a = 1 << n;
      a & e | t[n] & e && (t[n] |= e), l &= ~a;
    }
  }
  function vl(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : kn(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function kn(t) {
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
  function ul(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Xl() {
    var t = x.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : fd(t.type));
  }
  function En(t, e) {
    var l = x.p;
    try {
      return x.p = t, e();
    } finally {
      x.p = l;
    }
  }
  var Oe = Math.random().toString(36).slice(2), Qt = "__reactFiber$" + Oe, fe = "__reactProps$" + Oe, Ql = "__reactContainer$" + Oe, Ua = "__reactEvents$" + Oe, Pi = "__reactListeners$" + Oe, tc = "__reactHandles$" + Oe, Cu = "__reactResources$" + Oe, Tn = "__reactMarker$" + Oe;
  function An(t) {
    delete t[Qt], delete t[fe], delete t[Ua], delete t[Pi], delete t[tc];
  }
  function Vl(t) {
    var e = t[Qt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[Ql] || l[Qt]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = Jh(t); t !== null; ) {
            if (l = t[Qt]) return l;
            t = Jh(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function il(t) {
    if (t = t[Qt] || t[Ql]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function On(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function Zl(t) {
    var e = t[Cu];
    return e || (e = t[Cu] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Ut(t) {
    t[Tn] = !0;
  }
  var m = /* @__PURE__ */ new Set(), D = {};
  function G(t, e) {
    $(t, e), $(t + "Capture", e);
  }
  function $(t, e) {
    for (D[t] = e, t = 0; t < e.length; t++)
      m.add(e[t]);
  }
  var It = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), qt = {}, ze = {};
  function gl(t) {
    return el.call(ze, t) ? !0 : el.call(qt, t) ? !1 : It.test(t) ? ze[t] = !0 : (qt[t] = !0, !1);
  }
  function Le(t, e, l) {
    if (gl(e))
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
  function ve(t, e, l) {
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
  function Ht(t, e, l, n) {
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
  function P(t) {
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
  function Kl(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function cl(t, e, l) {
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
  function ec(t) {
    if (!t._valueTracker) {
      var e = Kl(t) ? "checked" : "value";
      t._valueTracker = cl(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Df(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), n = "";
    return t && (n = Kl(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== l ? (e.setValue(t), !0) : !1;
  }
  function Du(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var $d = /[\n"\\]/g;
  function Ye(t) {
    return t.replace(
      $d,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function lc(t, e, l, n, a, u, c, o) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), e != null ? c === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + P(e)) : t.value !== "" + P(e) && (t.value = "" + P(e)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), e != null ? nc(t, c, P(e)) : l != null ? nc(t, c, P(l)) : n != null && t.removeAttribute("value"), a == null && u != null && (t.defaultChecked = !!u), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.name = "" + P(o) : t.removeAttribute("name");
  }
  function Uf(t, e, l, n, a, u, c, o) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        ec(t);
        return;
      }
      l = l != null ? "" + P(l) : "", e = e != null ? "" + P(e) : l, o || e === t.value || (t.value = e), t.defaultValue = e;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = o ? t.checked : !!n, t.defaultChecked = !!n, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c), ec(t);
  }
  function nc(t, e, l) {
    e === "number" && Du(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function Wn(t, e, l, n) {
    if (t = t.options, e) {
      e = {};
      for (var a = 0; a < l.length; a++)
        e["$" + l[a]] = !0;
      for (l = 0; l < t.length; l++)
        a = e.hasOwnProperty("$" + t[l].value), t[l].selected !== a && (t[l].selected = a), a && n && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + P(l), e = null, a = 0; a < t.length; a++) {
        if (t[a].value === l) {
          t[a].selected = !0, n && (t[a].defaultSelected = !0);
          return;
        }
        e !== null || t[a].disabled || (e = t[a]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function qf(t, e, l) {
    if (e != null && (e = "" + P(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + P(l) : "";
  }
  function xf(t, e, l, n) {
    if (e == null) {
      if (n != null) {
        if (l != null) throw Error(f(92));
        if (me(n)) {
          if (1 < n.length) throw Error(f(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), e = l;
    }
    l = P(e), t.defaultValue = l, n = t.textContent, n === l && n !== "" && n !== null && (t.value = n), ec(t);
  }
  function $n(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Fd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Bf(t, e, l) {
    var n = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : n ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Fd.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function Hf(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(f(62));
    if (t = t.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "");
      for (var a in e)
        n = e[a], e.hasOwnProperty(a) && l[a] !== n && Bf(t, a, n);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && Bf(t, u, e[u]);
  }
  function ac(t) {
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
  var Id = /* @__PURE__ */ new Map([
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
  ]), Pd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Uu(t) {
    return Pd.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function pl() {
  }
  var uc = null;
  function ic(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Fn = null, In = null;
  function jf(t) {
    var e = il(t);
    if (e && (t = e.stateNode)) {
      var l = t[fe] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (lc(
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
              'input[name="' + Ye(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var n = l[e];
              if (n !== t && n.form === t.form) {
                var a = n[fe] || null;
                if (!a) throw Error(f(90));
                lc(
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
              n = l[e], n.form === t.form && Df(n);
          }
          break t;
        case "textarea":
          qf(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && Wn(t, !!l.multiple, e, !1);
      }
    }
  }
  var cc = !1;
  function Lf(t, e, l) {
    if (cc) return t(e, l);
    cc = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (cc = !1, (Fn !== null || In !== null) && (bi(), Fn && (e = Fn, t = In, In = Fn = null, jf(e), t)))
        for (e = 0; e < t.length; e++) jf(t[e]);
    }
  }
  function qa(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var n = l[fe] || null;
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
        f(231, e, typeof l)
      );
    return l;
  }
  var bl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), sc = !1;
  if (bl)
    try {
      var xa = {};
      Object.defineProperty(xa, "passive", {
        get: function() {
          sc = !0;
        }
      }), window.addEventListener("test", xa, xa), window.removeEventListener("test", xa, xa);
    } catch {
      sc = !1;
    }
  var Jl = null, fc = null, qu = null;
  function Yf() {
    if (qu) return qu;
    var t, e = fc, l = e.length, n, a = "value" in Jl ? Jl.value : Jl.textContent, u = a.length;
    for (t = 0; t < l && e[t] === a[t]; t++) ;
    var c = l - t;
    for (n = 1; n <= c && e[l - n] === a[u - n]; n++) ;
    return qu = a.slice(t, 1 < n ? 1 - n : void 0);
  }
  function xu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Bu() {
    return !0;
  }
  function wf() {
    return !1;
  }
  function ge(t) {
    function e(l, n, a, u, c) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var o in t)
        t.hasOwnProperty(o) && (l = t[o], this[o] = l ? l(u) : u[o]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Bu : wf, this.isPropagationStopped = wf, this;
    }
    return w(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Bu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Bu);
      },
      persist: function() {
      },
      isPersistent: Bu
    }), e;
  }
  var zn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Hu = ge(zn), Ba = w({}, zn, { view: 0, detail: 0 }), tm = ge(Ba), rc, oc, Ha, ju = w({}, Ba, {
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
    getModifierState: dc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ha && (Ha && t.type === "mousemove" ? (rc = t.screenX - Ha.screenX, oc = t.screenY - Ha.screenY) : oc = rc = 0, Ha = t), rc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : oc;
    }
  }), Gf = ge(ju), em = w({}, ju, { dataTransfer: 0 }), lm = ge(em), nm = w({}, Ba, { relatedTarget: 0 }), hc = ge(nm), am = w({}, zn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), um = ge(am), im = w({}, zn, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), cm = ge(im), sm = w({}, zn, { data: 0 }), Xf = ge(sm), fm = {
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
  }, rm = {
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
  function hm(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = om[t]) ? !!e[t] : !1;
  }
  function dc() {
    return hm;
  }
  var dm = w({}, Ba, {
    key: function(t) {
      if (t.key) {
        var e = fm[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = xu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? rm[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: dc,
    charCode: function(t) {
      return t.type === "keypress" ? xu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? xu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), mm = ge(dm), ym = w({}, ju, {
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
  }), Qf = ge(ym), vm = w({}, Ba, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: dc
  }), gm = ge(vm), pm = w({}, zn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), bm = ge(pm), Sm = w({}, ju, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), _m = ge(Sm), Em = w({}, zn, {
    newState: 0,
    oldState: 0
  }), Tm = ge(Em), Am = [9, 13, 27, 32], mc = bl && "CompositionEvent" in window, ja = null;
  bl && "documentMode" in document && (ja = document.documentMode);
  var Om = bl && "TextEvent" in window && !ja, Vf = bl && (!mc || ja && 8 < ja && 11 >= ja), Zf = " ", Kf = !1;
  function Jf(t, e) {
    switch (t) {
      case "keyup":
        return Am.indexOf(e.keyCode) !== -1;
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
  function kf(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Pn = !1;
  function zm(t, e) {
    switch (t) {
      case "compositionend":
        return kf(e);
      case "keypress":
        return e.which !== 32 ? null : (Kf = !0, Zf);
      case "textInput":
        return t = e.data, t === Zf && Kf ? null : t;
      default:
        return null;
    }
  }
  function Nm(t, e) {
    if (Pn)
      return t === "compositionend" || !mc && Jf(t, e) ? (t = Yf(), qu = fc = Jl = null, Pn = !1, t) : null;
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
        return Vf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Rm = {
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
  function Wf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Rm[t.type] : e === "textarea";
  }
  function $f(t, e, l, n) {
    Fn ? In ? In.push(n) : In = [n] : Fn = n, e = zi(e, "onChange"), 0 < e.length && (l = new Hu(
      "onChange",
      "change",
      null,
      l,
      n
    ), t.push({ event: l, listeners: e }));
  }
  var La = null, Ya = null;
  function Mm(t) {
    qh(t, 0);
  }
  function Lu(t) {
    var e = On(t);
    if (Df(e)) return t;
  }
  function Ff(t, e) {
    if (t === "change") return e;
  }
  var If = !1;
  if (bl) {
    var yc;
    if (bl) {
      var vc = "oninput" in document;
      if (!vc) {
        var Pf = document.createElement("div");
        Pf.setAttribute("oninput", "return;"), vc = typeof Pf.oninput == "function";
      }
      yc = vc;
    } else yc = !1;
    If = yc && (!document.documentMode || 9 < document.documentMode);
  }
  function tr() {
    La && (La.detachEvent("onpropertychange", er), Ya = La = null);
  }
  function er(t) {
    if (t.propertyName === "value" && Lu(Ya)) {
      var e = [];
      $f(
        e,
        Ya,
        t,
        ic(t)
      ), Lf(Mm, e);
    }
  }
  function Cm(t, e, l) {
    t === "focusin" ? (tr(), La = e, Ya = l, La.attachEvent("onpropertychange", er)) : t === "focusout" && tr();
  }
  function Dm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Lu(Ya);
  }
  function Um(t, e) {
    if (t === "click") return Lu(e);
  }
  function qm(t, e) {
    if (t === "input" || t === "change")
      return Lu(e);
  }
  function xm(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Ne = typeof Object.is == "function" ? Object.is : xm;
  function wa(t, e) {
    if (Ne(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), n = Object.keys(e);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!el.call(e, a) || !Ne(t[a], e[a]))
        return !1;
    }
    return !0;
  }
  function lr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function nr(t, e) {
    var l = lr(t);
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
      l = lr(l);
    }
  }
  function ar(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? ar(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function ur(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Du(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Du(t.document);
    }
    return e;
  }
  function gc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Bm = bl && "documentMode" in document && 11 >= document.documentMode, ta = null, pc = null, Ga = null, bc = !1;
  function ir(t, e, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    bc || ta == null || ta !== Du(n) || (n = ta, "selectionStart" in n && gc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), Ga && wa(Ga, n) || (Ga = n, n = zi(pc, "onSelect"), 0 < n.length && (e = new Hu(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: n }), e.target = ta)));
  }
  function Nn(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var ea = {
    animationend: Nn("Animation", "AnimationEnd"),
    animationiteration: Nn("Animation", "AnimationIteration"),
    animationstart: Nn("Animation", "AnimationStart"),
    transitionrun: Nn("Transition", "TransitionRun"),
    transitionstart: Nn("Transition", "TransitionStart"),
    transitioncancel: Nn("Transition", "TransitionCancel"),
    transitionend: Nn("Transition", "TransitionEnd")
  }, Sc = {}, cr = {};
  bl && (cr = document.createElement("div").style, "AnimationEvent" in window || (delete ea.animationend.animation, delete ea.animationiteration.animation, delete ea.animationstart.animation), "TransitionEvent" in window || delete ea.transitionend.transition);
  function Rn(t) {
    if (Sc[t]) return Sc[t];
    if (!ea[t]) return t;
    var e = ea[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in cr)
        return Sc[t] = e[l];
    return t;
  }
  var sr = Rn("animationend"), fr = Rn("animationiteration"), rr = Rn("animationstart"), Hm = Rn("transitionrun"), jm = Rn("transitionstart"), Lm = Rn("transitioncancel"), or = Rn("transitionend"), hr = /* @__PURE__ */ new Map(), _c = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  _c.push("scrollEnd");
  function $e(t, e) {
    hr.set(t, e), G(e, [t]);
  }
  var Yu = typeof reportError == "function" ? reportError : function(t) {
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
  }, we = [], la = 0, Ec = 0;
  function wu() {
    for (var t = la, e = Ec = la = 0; e < t; ) {
      var l = we[e];
      we[e++] = null;
      var n = we[e];
      we[e++] = null;
      var a = we[e];
      we[e++] = null;
      var u = we[e];
      if (we[e++] = null, n !== null && a !== null) {
        var c = n.pending;
        c === null ? a.next = a : (a.next = c.next, c.next = a), n.pending = a;
      }
      u !== 0 && dr(l, a, u);
    }
  }
  function Gu(t, e, l, n) {
    we[la++] = t, we[la++] = e, we[la++] = l, we[la++] = n, Ec |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
  }
  function Tc(t, e, l, n) {
    return Gu(t, e, l, n), Xu(t);
  }
  function Mn(t, e) {
    return Gu(t, null, null, e), Xu(t);
  }
  function dr(t, e, l) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, u = t.return; u !== null; )
      u.childLanes |= l, n = u.alternate, n !== null && (n.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (a = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, a && e !== null && (a = 31 - he(l), t = u.hiddenUpdates, n = t[a], n === null ? t[a] = [e] : n.push(e), e.lane = l | 536870912), u) : null;
  }
  function Xu(t) {
    if (50 < fu)
      throw fu = 0, Us = null, Error(f(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var na = {};
  function Ym(t, e, l, n) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Re(t, e, l, n) {
    return new Ym(t, e, l, n);
  }
  function Ac(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Sl(t, e) {
    var l = t.alternate;
    return l === null ? (l = Re(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function mr(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Qu(t, e, l, n, a, u) {
    var c = 0;
    if (n = t, typeof t == "function") Ac(t) && (c = 1);
    else if (typeof t == "string")
      c = Vy(
        t,
        l,
        j.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Be:
          return t = Re(31, l, e, a), t.elementType = Be, t.lanes = u, t;
        case Ot:
          return Cn(l.children, a, u, e);
        case Tt:
          c = 8, a |= 24;
          break;
        case ae:
          return t = Re(12, l, e, a | 2), t.elementType = ae, t.lanes = u, t;
        case xe:
          return t = Re(13, l, e, a), t.elementType = xe, t.lanes = u, t;
        case $t:
          return t = Re(19, l, e, a), t.elementType = $t, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Xt:
                c = 10;
                break t;
              case dt:
                c = 9;
                break t;
              case Ct:
                c = 11;
                break t;
              case K:
                c = 14;
                break t;
              case ue:
                c = 16, n = null;
                break t;
            }
          c = 29, l = Error(
            f(130, t === null ? "null" : typeof t, "")
          ), n = null;
      }
    return e = Re(c, l, e, a), e.elementType = t, e.type = n, e.lanes = u, e;
  }
  function Cn(t, e, l, n) {
    return t = Re(7, t, n, e), t.lanes = l, t;
  }
  function Oc(t, e, l) {
    return t = Re(6, t, null, e), t.lanes = l, t;
  }
  function yr(t) {
    var e = Re(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function zc(t, e, l) {
    return e = Re(
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
  var vr = /* @__PURE__ */ new WeakMap();
  function Ge(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = vr.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: Sn(e)
      }, vr.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Sn(e)
    };
  }
  var aa = [], ua = 0, Vu = null, Xa = 0, Xe = [], Qe = 0, kl = null, sl = 1, fl = "";
  function _l(t, e) {
    aa[ua++] = Xa, aa[ua++] = Vu, Vu = t, Xa = e;
  }
  function gr(t, e, l) {
    Xe[Qe++] = sl, Xe[Qe++] = fl, Xe[Qe++] = kl, kl = t;
    var n = sl;
    t = fl;
    var a = 32 - he(n) - 1;
    n &= ~(1 << a), l += 1;
    var u = 32 - he(e) + a;
    if (30 < u) {
      var c = a - a % 5;
      u = (n & (1 << c) - 1).toString(32), n >>= c, a -= c, sl = 1 << 32 - he(e) + a | l << a | n, fl = u + t;
    } else
      sl = 1 << u | l << a | n, fl = t;
  }
  function Nc(t) {
    t.return !== null && (_l(t, 1), gr(t, 1, 0));
  }
  function Rc(t) {
    for (; t === Vu; )
      Vu = aa[--ua], aa[ua] = null, Xa = aa[--ua], aa[ua] = null;
    for (; t === kl; )
      kl = Xe[--Qe], Xe[Qe] = null, fl = Xe[--Qe], Xe[Qe] = null, sl = Xe[--Qe], Xe[Qe] = null;
  }
  function pr(t, e) {
    Xe[Qe++] = sl, Xe[Qe++] = fl, Xe[Qe++] = kl, sl = e.id, fl = e.overflow, kl = t;
  }
  var Pt = null, _t = null, ct = !1, Wl = null, Ve = !1, Mc = Error(f(519));
  function $l(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Qa(Ge(e, t)), Mc;
  }
  function br(t) {
    var e = t.stateNode, l = t.type, n = t.memoizedProps;
    switch (e[Qt] = t, e[fe] = n, l) {
      case "dialog":
        nt("cancel", e), nt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        nt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ou.length; l++)
          nt(ou[l], e);
        break;
      case "source":
        nt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        nt("error", e), nt("load", e);
        break;
      case "details":
        nt("toggle", e);
        break;
      case "input":
        nt("invalid", e), Uf(
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
        nt("invalid", e);
        break;
      case "textarea":
        nt("invalid", e), xf(e, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || n.suppressHydrationWarning === !0 || jh(e.textContent, l) ? (n.popover != null && (nt("beforetoggle", e), nt("toggle", e)), n.onScroll != null && nt("scroll", e), n.onScrollEnd != null && nt("scrollend", e), n.onClick != null && (e.onclick = pl), e = !0) : e = !1, e || $l(t, !0);
  }
  function Sr(t) {
    for (Pt = t.return; Pt; )
      switch (Pt.tag) {
        case 5:
        case 31:
        case 13:
          Ve = !1;
          return;
        case 27:
        case 3:
          Ve = !0;
          return;
        default:
          Pt = Pt.return;
      }
  }
  function ia(t) {
    if (t !== Pt) return !1;
    if (!ct) return Sr(t), ct = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Js(t.type, t.memoizedProps)), l = !l), l && _t && $l(t), Sr(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      _t = Kh(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      _t = Kh(t);
    } else
      e === 27 ? (e = _t, on(t.type) ? (t = Is, Is = null, _t = t) : _t = e) : _t = Pt ? Ke(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Dn() {
    _t = Pt = null, ct = !1;
  }
  function Cc() {
    var t = Wl;
    return t !== null && (_e === null ? _e = t : _e.push.apply(
      _e,
      t
    ), Wl = null), t;
  }
  function Qa(t) {
    Wl === null ? Wl = [t] : Wl.push(t);
  }
  var Dc = h(null), Un = null, El = null;
  function Fl(t, e, l) {
    B(Dc, e._currentValue), e._currentValue = l;
  }
  function Tl(t) {
    t._currentValue = Dc.current, z(Dc);
  }
  function Uc(t, e, l) {
    for (; t !== null; ) {
      var n = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function qc(t, e, l, n) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var u = a.dependencies;
      if (u !== null) {
        var c = a.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var o = u;
          u = a;
          for (var d = 0; d < e.length; d++)
            if (o.context === e[d]) {
              u.lanes |= l, o = u.alternate, o !== null && (o.lanes |= l), Uc(
                u.return,
                l,
                t
              ), n || (c = null);
              break t;
            }
          u = o.next;
        }
      } else if (a.tag === 18) {
        if (c = a.return, c === null) throw Error(f(341));
        c.lanes |= l, u = c.alternate, u !== null && (u.lanes |= l), Uc(c, l, t), c = null;
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
  function ca(t, e, l, n) {
    t = null;
    for (var a = e, u = !1; a !== null; ) {
      if (!u) {
        if ((a.flags & 524288) !== 0) u = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var c = a.alternate;
        if (c === null) throw Error(f(387));
        if (c = c.memoizedProps, c !== null) {
          var o = a.type;
          Ne(a.pendingProps.value, c.value) || (t !== null ? t.push(o) : t = [o]);
        }
      } else if (a === ft.current) {
        if (c = a.alternate, c === null) throw Error(f(387));
        c.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(vu) : t = [vu]);
      }
      a = a.return;
    }
    t !== null && qc(
      e,
      t,
      l,
      n
    ), e.flags |= 262144;
  }
  function Zu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ne(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function qn(t) {
    Un = t, El = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function te(t) {
    return _r(Un, t);
  }
  function Ku(t, e) {
    return Un === null && qn(t), _r(t, e);
  }
  function _r(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, El === null) {
      if (t === null) throw Error(f(308));
      El = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else El = El.next = e;
    return l;
  }
  var wm = typeof AbortController < "u" ? AbortController : function() {
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
  }, Gm = r.unstable_scheduleCallback, Xm = r.unstable_NormalPriority, jt = {
    $$typeof: Xt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function xc() {
    return {
      controller: new wm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Va(t) {
    t.refCount--, t.refCount === 0 && Gm(Xm, function() {
      t.controller.abort();
    });
  }
  var Za = null, Bc = 0, sa = 0, fa = null;
  function Qm(t, e) {
    if (Za === null) {
      var l = Za = [];
      Bc = 0, sa = Ls(), fa = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Bc++, e.then(Er, Er), e;
  }
  function Er() {
    if (--Bc === 0 && Za !== null) {
      fa !== null && (fa.status = "fulfilled");
      var t = Za;
      Za = null, sa = 0, fa = null;
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
  var Tr = T.S;
  T.S = function(t, e) {
    ch = Jt(), typeof e == "object" && e !== null && typeof e.then == "function" && Qm(t, e), Tr !== null && Tr(t, e);
  };
  var xn = h(null);
  function Hc() {
    var t = xn.current;
    return t !== null ? t : St.pooledCache;
  }
  function Ju(t, e) {
    e === null ? B(xn, xn.current) : B(xn, e.pool);
  }
  function Ar() {
    var t = Hc();
    return t === null ? null : { parent: jt._currentValue, pool: t };
  }
  var ra = Error(f(460)), jc = Error(f(474)), ku = Error(f(542)), Wu = { then: function() {
  } };
  function Or(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function zr(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(pl, pl), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Rr(t), t;
      default:
        if (typeof e.status == "string") e.then(pl, pl);
        else {
          if (t = St, t !== null && 100 < t.shellSuspendCounter)
            throw Error(f(482));
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
            throw t = e.reason, Rr(t), t;
        }
        throw Hn = e, ra;
    }
  }
  function Bn(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Hn = l, ra) : l;
    }
  }
  var Hn = null;
  function Nr() {
    if (Hn === null) throw Error(f(459));
    var t = Hn;
    return Hn = null, t;
  }
  function Rr(t) {
    if (t === ra || t === ku)
      throw Error(f(483));
  }
  var oa = null, Ka = 0;
  function $u(t) {
    var e = Ka;
    return Ka += 1, oa === null && (oa = []), zr(oa, t, e);
  }
  function Ja(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Fu(t, e) {
    throw e.$$typeof === tt ? Error(f(525)) : (t = Object.prototype.toString.call(e), Error(
      f(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Mr(t) {
    function e(v, y) {
      if (t) {
        var p = v.deletions;
        p === null ? (v.deletions = [y], v.flags |= 16) : p.push(y);
      }
    }
    function l(v, y) {
      if (!t) return null;
      for (; y !== null; )
        e(v, y), y = y.sibling;
      return null;
    }
    function n(v) {
      for (var y = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? y.set(v.key, v) : y.set(v.index, v), v = v.sibling;
      return y;
    }
    function a(v, y) {
      return v = Sl(v, y), v.index = 0, v.sibling = null, v;
    }
    function u(v, y, p) {
      return v.index = p, t ? (p = v.alternate, p !== null ? (p = p.index, p < y ? (v.flags |= 67108866, y) : p) : (v.flags |= 67108866, y)) : (v.flags |= 1048576, y);
    }
    function c(v) {
      return t && v.alternate === null && (v.flags |= 67108866), v;
    }
    function o(v, y, p, A) {
      return y === null || y.tag !== 6 ? (y = Oc(p, v.mode, A), y.return = v, y) : (y = a(y, p), y.return = v, y);
    }
    function d(v, y, p, A) {
      var Q = p.type;
      return Q === Ot ? E(
        v,
        y,
        p.props.children,
        A,
        p.key
      ) : y !== null && (y.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === ue && Bn(Q) === y.type) ? (y = a(y, p.props), Ja(y, p), y.return = v, y) : (y = Qu(
        p.type,
        p.key,
        p.props,
        null,
        v.mode,
        A
      ), Ja(y, p), y.return = v, y);
    }
    function b(v, y, p, A) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== p.containerInfo || y.stateNode.implementation !== p.implementation ? (y = zc(p, v.mode, A), y.return = v, y) : (y = a(y, p.children || []), y.return = v, y);
    }
    function E(v, y, p, A, Q) {
      return y === null || y.tag !== 7 ? (y = Cn(
        p,
        v.mode,
        A,
        Q
      ), y.return = v, y) : (y = a(y, p), y.return = v, y);
    }
    function R(v, y, p) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = Oc(
          "" + y,
          v.mode,
          p
        ), y.return = v, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Wt:
            return p = Qu(
              y.type,
              y.key,
              y.props,
              null,
              v.mode,
              p
            ), Ja(p, y), p.return = v, p;
          case ne:
            return y = zc(
              y,
              v.mode,
              p
            ), y.return = v, y;
          case ue:
            return y = Bn(y), R(v, y, p);
        }
        if (me(y) || ie(y))
          return y = Cn(
            y,
            v.mode,
            p,
            null
          ), y.return = v, y;
        if (typeof y.then == "function")
          return R(v, $u(y), p);
        if (y.$$typeof === Xt)
          return R(
            v,
            Ku(v, y),
            p
          );
        Fu(v, y);
      }
      return null;
    }
    function S(v, y, p, A) {
      var Q = y !== null ? y.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return Q !== null ? null : o(v, y, "" + p, A);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Wt:
            return p.key === Q ? d(v, y, p, A) : null;
          case ne:
            return p.key === Q ? b(v, y, p, A) : null;
          case ue:
            return p = Bn(p), S(v, y, p, A);
        }
        if (me(p) || ie(p))
          return Q !== null ? null : E(v, y, p, A, null);
        if (typeof p.then == "function")
          return S(
            v,
            y,
            $u(p),
            A
          );
        if (p.$$typeof === Xt)
          return S(
            v,
            y,
            Ku(v, p),
            A
          );
        Fu(v, p);
      }
      return null;
    }
    function _(v, y, p, A, Q) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return v = v.get(p) || null, o(y, v, "" + A, Q);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case Wt:
            return v = v.get(
              A.key === null ? p : A.key
            ) || null, d(y, v, A, Q);
          case ne:
            return v = v.get(
              A.key === null ? p : A.key
            ) || null, b(y, v, A, Q);
          case ue:
            return A = Bn(A), _(
              v,
              y,
              p,
              A,
              Q
            );
        }
        if (me(A) || ie(A))
          return v = v.get(p) || null, E(y, v, A, Q, null);
        if (typeof A.then == "function")
          return _(
            v,
            y,
            p,
            $u(A),
            Q
          );
        if (A.$$typeof === Xt)
          return _(
            v,
            y,
            p,
            Ku(y, A),
            Q
          );
        Fu(y, A);
      }
      return null;
    }
    function L(v, y, p, A) {
      for (var Q = null, rt = null, X = y, I = y = 0, it = null; X !== null && I < p.length; I++) {
        X.index > I ? (it = X, X = null) : it = X.sibling;
        var ot = S(
          v,
          X,
          p[I],
          A
        );
        if (ot === null) {
          X === null && (X = it);
          break;
        }
        t && X && ot.alternate === null && e(v, X), y = u(ot, y, I), rt === null ? Q = ot : rt.sibling = ot, rt = ot, X = it;
      }
      if (I === p.length)
        return l(v, X), ct && _l(v, I), Q;
      if (X === null) {
        for (; I < p.length; I++)
          X = R(v, p[I], A), X !== null && (y = u(
            X,
            y,
            I
          ), rt === null ? Q = X : rt.sibling = X, rt = X);
        return ct && _l(v, I), Q;
      }
      for (X = n(X); I < p.length; I++)
        it = _(
          X,
          v,
          I,
          p[I],
          A
        ), it !== null && (t && it.alternate !== null && X.delete(
          it.key === null ? I : it.key
        ), y = u(
          it,
          y,
          I
        ), rt === null ? Q = it : rt.sibling = it, rt = it);
      return t && X.forEach(function(vn) {
        return e(v, vn);
      }), ct && _l(v, I), Q;
    }
    function Z(v, y, p, A) {
      if (p == null) throw Error(f(151));
      for (var Q = null, rt = null, X = y, I = y = 0, it = null, ot = p.next(); X !== null && !ot.done; I++, ot = p.next()) {
        X.index > I ? (it = X, X = null) : it = X.sibling;
        var vn = S(v, X, ot.value, A);
        if (vn === null) {
          X === null && (X = it);
          break;
        }
        t && X && vn.alternate === null && e(v, X), y = u(vn, y, I), rt === null ? Q = vn : rt.sibling = vn, rt = vn, X = it;
      }
      if (ot.done)
        return l(v, X), ct && _l(v, I), Q;
      if (X === null) {
        for (; !ot.done; I++, ot = p.next())
          ot = R(v, ot.value, A), ot !== null && (y = u(ot, y, I), rt === null ? Q = ot : rt.sibling = ot, rt = ot);
        return ct && _l(v, I), Q;
      }
      for (X = n(X); !ot.done; I++, ot = p.next())
        ot = _(X, v, I, ot.value, A), ot !== null && (t && ot.alternate !== null && X.delete(ot.key === null ? I : ot.key), y = u(ot, y, I), rt === null ? Q = ot : rt.sibling = ot, rt = ot);
      return t && X.forEach(function(ev) {
        return e(v, ev);
      }), ct && _l(v, I), Q;
    }
    function bt(v, y, p, A) {
      if (typeof p == "object" && p !== null && p.type === Ot && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Wt:
            t: {
              for (var Q = p.key; y !== null; ) {
                if (y.key === Q) {
                  if (Q = p.type, Q === Ot) {
                    if (y.tag === 7) {
                      l(
                        v,
                        y.sibling
                      ), A = a(
                        y,
                        p.props.children
                      ), A.return = v, v = A;
                      break t;
                    }
                  } else if (y.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === ue && Bn(Q) === y.type) {
                    l(
                      v,
                      y.sibling
                    ), A = a(y, p.props), Ja(A, p), A.return = v, v = A;
                    break t;
                  }
                  l(v, y);
                  break;
                } else e(v, y);
                y = y.sibling;
              }
              p.type === Ot ? (A = Cn(
                p.props.children,
                v.mode,
                A,
                p.key
              ), A.return = v, v = A) : (A = Qu(
                p.type,
                p.key,
                p.props,
                null,
                v.mode,
                A
              ), Ja(A, p), A.return = v, v = A);
            }
            return c(v);
          case ne:
            t: {
              for (Q = p.key; y !== null; ) {
                if (y.key === Q)
                  if (y.tag === 4 && y.stateNode.containerInfo === p.containerInfo && y.stateNode.implementation === p.implementation) {
                    l(
                      v,
                      y.sibling
                    ), A = a(y, p.children || []), A.return = v, v = A;
                    break t;
                  } else {
                    l(v, y);
                    break;
                  }
                else e(v, y);
                y = y.sibling;
              }
              A = zc(p, v.mode, A), A.return = v, v = A;
            }
            return c(v);
          case ue:
            return p = Bn(p), bt(
              v,
              y,
              p,
              A
            );
        }
        if (me(p))
          return L(
            v,
            y,
            p,
            A
          );
        if (ie(p)) {
          if (Q = ie(p), typeof Q != "function") throw Error(f(150));
          return p = Q.call(p), Z(
            v,
            y,
            p,
            A
          );
        }
        if (typeof p.then == "function")
          return bt(
            v,
            y,
            $u(p),
            A
          );
        if (p.$$typeof === Xt)
          return bt(
            v,
            y,
            Ku(v, p),
            A
          );
        Fu(v, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p, y !== null && y.tag === 6 ? (l(v, y.sibling), A = a(y, p), A.return = v, v = A) : (l(v, y), A = Oc(p, v.mode, A), A.return = v, v = A), c(v)) : l(v, y);
    }
    return function(v, y, p, A) {
      try {
        Ka = 0;
        var Q = bt(
          v,
          y,
          p,
          A
        );
        return oa = null, Q;
      } catch (X) {
        if (X === ra || X === ku) throw X;
        var rt = Re(29, X, null, v.mode);
        return rt.lanes = A, rt.return = v, rt;
      }
    };
  }
  var jn = Mr(!0), Cr = Mr(!1), Il = !1;
  function Lc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Yc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Pl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function tn(t, e, l) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (ht & 2) !== 0) {
      var a = n.pending;
      return a === null ? e.next = e : (e.next = a.next, a.next = e), n.pending = e, e = Xu(t), dr(t, null, l), e;
    }
    return Gu(t, n, e, l), Xu(t);
  }
  function ka(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, Gl(t, l);
    }
  }
  function wc(t, e) {
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
  var Gc = !1;
  function Wa() {
    if (Gc) {
      var t = fa;
      if (t !== null) throw t;
    }
  }
  function $a(t, e, l, n) {
    Gc = !1;
    var a = t.updateQueue;
    Il = !1;
    var u = a.firstBaseUpdate, c = a.lastBaseUpdate, o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var d = o, b = d.next;
      d.next = null, c === null ? u = b : c.next = b, c = d;
      var E = t.alternate;
      E !== null && (E = E.updateQueue, o = E.lastBaseUpdate, o !== c && (o === null ? E.firstBaseUpdate = b : o.next = b, E.lastBaseUpdate = d));
    }
    if (u !== null) {
      var R = a.baseState;
      c = 0, E = b = d = null, o = u;
      do {
        var S = o.lane & -536870913, _ = S !== o.lane;
        if (_ ? (ut & S) === S : (n & S) === S) {
          S !== 0 && S === sa && (Gc = !0), E !== null && (E = E.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          t: {
            var L = t, Z = o;
            S = e;
            var bt = l;
            switch (Z.tag) {
              case 1:
                if (L = Z.payload, typeof L == "function") {
                  R = L.call(bt, R, S);
                  break t;
                }
                R = L;
                break t;
              case 3:
                L.flags = L.flags & -65537 | 128;
              case 0:
                if (L = Z.payload, S = typeof L == "function" ? L.call(bt, R, S) : L, S == null) break t;
                R = w({}, R, S);
                break t;
              case 2:
                Il = !0;
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
          }, E === null ? (b = E = _, d = R) : E = E.next = _, c |= S;
        if (o = o.next, o === null) {
          if (o = a.shared.pending, o === null)
            break;
          _ = o, o = _.next, _.next = null, a.lastBaseUpdate = _, a.shared.pending = null;
        }
      } while (!0);
      E === null && (d = R), a.baseState = d, a.firstBaseUpdate = b, a.lastBaseUpdate = E, u === null && (a.shared.lanes = 0), un |= c, t.lanes = c, t.memoizedState = R;
    }
  }
  function Dr(t, e) {
    if (typeof t != "function")
      throw Error(f(191, t));
    t.call(e);
  }
  function Ur(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        Dr(l[t], e);
  }
  var ha = h(null), Iu = h(0);
  function qr(t, e) {
    t = Ul, B(Iu, t), B(ha, e), Ul = t | e.baseLanes;
  }
  function Xc() {
    B(Iu, Ul), B(ha, ha.current);
  }
  function Qc() {
    Ul = Iu.current, z(ha), z(Iu);
  }
  var Me = h(null), Ze = null;
  function en(t) {
    var e = t.alternate;
    B(xt, xt.current & 1), B(Me, t), Ze === null && (e === null || ha.current !== null || e.memoizedState !== null) && (Ze = t);
  }
  function Vc(t) {
    B(xt, xt.current), B(Me, t), Ze === null && (Ze = t);
  }
  function xr(t) {
    t.tag === 22 ? (B(xt, xt.current), B(Me, t), Ze === null && (Ze = t)) : ln();
  }
  function ln() {
    B(xt, xt.current), B(Me, Me.current);
  }
  function Ce(t) {
    z(Me), Ze === t && (Ze = null), z(xt);
  }
  var xt = h(0);
  function Pu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || $s(l) || Fs(l)))
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
  var Al = 0, F = null, gt = null, Lt = null, ti = !1, da = !1, Ln = !1, ei = 0, Fa = 0, ma = null, Zm = 0;
  function Rt() {
    throw Error(f(321));
  }
  function Zc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!Ne(t[l], e[l])) return !1;
    return !0;
  }
  function Kc(t, e, l, n, a, u) {
    return Al = u, F = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, T.H = t === null || t.memoizedState === null ? po : cs, Ln = !1, u = l(n, a), Ln = !1, da && (u = Hr(
      e,
      l,
      n,
      a
    )), Br(t), u;
  }
  function Br(t) {
    T.H = tu;
    var e = gt !== null && gt.next !== null;
    if (Al = 0, Lt = gt = F = null, ti = !1, Fa = 0, ma = null, e) throw Error(f(300));
    t === null || Yt || (t = t.dependencies, t !== null && Zu(t) && (Yt = !0));
  }
  function Hr(t, e, l, n) {
    F = t;
    var a = 0;
    do {
      if (da && (ma = null), Fa = 0, da = !1, 25 <= a) throw Error(f(301));
      if (a += 1, Lt = gt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      T.H = bo, u = e(l, n);
    } while (da);
    return u;
  }
  function Km() {
    var t = T.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Ia(e) : e, t = t.useState()[0], (gt !== null ? gt.memoizedState : null) !== t && (F.flags |= 1024), e;
  }
  function Jc() {
    var t = ei !== 0;
    return ei = 0, t;
  }
  function kc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function Wc(t) {
    if (ti) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      ti = !1;
    }
    Al = 0, Lt = gt = F = null, da = !1, Fa = ei = 0, ma = null;
  }
  function de() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Lt === null ? F.memoizedState = Lt = t : Lt = Lt.next = t, Lt;
  }
  function Bt() {
    if (gt === null) {
      var t = F.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = gt.next;
    var e = Lt === null ? F.memoizedState : Lt.next;
    if (e !== null)
      Lt = e, gt = t;
    else {
      if (t === null)
        throw F.alternate === null ? Error(f(467)) : Error(f(310));
      gt = t, t = {
        memoizedState: gt.memoizedState,
        baseState: gt.baseState,
        baseQueue: gt.baseQueue,
        queue: gt.queue,
        next: null
      }, Lt === null ? F.memoizedState = Lt = t : Lt = Lt.next = t;
    }
    return Lt;
  }
  function li() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ia(t) {
    var e = Fa;
    return Fa += 1, ma === null && (ma = []), t = zr(ma, t, e), e = F, (Lt === null ? e.memoizedState : Lt.next) === null && (e = e.alternate, T.H = e === null || e.memoizedState === null ? po : cs), t;
  }
  function ni(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ia(t);
      if (t.$$typeof === Xt) return te(t);
    }
    throw Error(f(438, String(t)));
  }
  function $c(t) {
    var e = null, l = F.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var n = F.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (e = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = li(), F.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), n = 0; n < t; n++)
        l[n] = Bl;
    return e.index++, l;
  }
  function Ol(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ai(t) {
    var e = Bt();
    return Fc(e, gt, t);
  }
  function Fc(t, e, l) {
    var n = t.queue;
    if (n === null) throw Error(f(311));
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
      var o = c = null, d = null, b = e, E = !1;
      do {
        var R = b.lane & -536870913;
        if (R !== b.lane ? (ut & R) === R : (Al & R) === R) {
          var S = b.revertLane;
          if (S === 0)
            d !== null && (d = d.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }), R === sa && (E = !0);
          else if ((Al & S) === S) {
            b = b.next, S === sa && (E = !0);
            continue;
          } else
            R = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, d === null ? (o = d = R, c = u) : d = d.next = R, F.lanes |= S, un |= S;
          R = b.action, Ln && l(u, R), u = b.hasEagerState ? b.eagerState : l(u, R);
        } else
          S = {
            lane: R,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, d === null ? (o = d = S, c = u) : d = d.next = S, F.lanes |= R, un |= R;
        b = b.next;
      } while (b !== null && b !== e);
      if (d === null ? c = u : d.next = o, !Ne(u, t.memoizedState) && (Yt = !0, E && (l = fa, l !== null)))
        throw l;
      t.memoizedState = u, t.baseState = c, t.baseQueue = d, n.lastRenderedState = u;
    }
    return a === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function Ic(t) {
    var e = Bt(), l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var n = l.dispatch, a = l.pending, u = e.memoizedState;
    if (a !== null) {
      l.pending = null;
      var c = a = a.next;
      do
        u = t(u, c.action), c = c.next;
      while (c !== a);
      Ne(u, e.memoizedState) || (Yt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
    }
    return [u, n];
  }
  function jr(t, e, l) {
    var n = F, a = Bt(), u = ct;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var c = !Ne(
      (gt || a).memoizedState,
      l
    );
    if (c && (a.memoizedState = l, Yt = !0), a = a.queue, es(wr.bind(null, n, a, t), [
      t
    ]), a.getSnapshot !== e || c || Lt !== null && Lt.memoizedState.tag & 1) {
      if (n.flags |= 2048, ya(
        9,
        { destroy: void 0 },
        Yr.bind(
          null,
          n,
          a,
          l,
          e
        ),
        null
      ), St === null) throw Error(f(349));
      u || (Al & 127) !== 0 || Lr(n, e, l);
    }
    return l;
  }
  function Lr(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = F.updateQueue, e === null ? (e = li(), F.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function Yr(t, e, l, n) {
    e.value = l, e.getSnapshot = n, Gr(e) && Xr(t);
  }
  function wr(t, e, l) {
    return l(function() {
      Gr(e) && Xr(t);
    });
  }
  function Gr(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !Ne(t, l);
    } catch {
      return !0;
    }
  }
  function Xr(t) {
    var e = Mn(t, 2);
    e !== null && Ee(e, t, 2);
  }
  function Pc(t) {
    var e = de();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), Ln) {
        ce(!0);
        try {
          l();
        } finally {
          ce(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ol,
      lastRenderedState: t
    }, e;
  }
  function Qr(t, e, l, n) {
    return t.baseState = l, Fc(
      t,
      gt,
      typeof n == "function" ? n : Ol
    );
  }
  function Jm(t, e, l, n, a) {
    if (ci(t)) throw Error(f(485));
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
      T.T !== null ? l(!0) : u.isTransition = !1, n(u), l = e.pending, l === null ? (u.next = e.pending = u, Vr(e, u)) : (u.next = l.next, e.pending = l.next = u);
    }
  }
  function Vr(t, e) {
    var l = e.action, n = e.payload, a = t.state;
    if (e.isTransition) {
      var u = T.T, c = {};
      T.T = c;
      try {
        var o = l(a, n), d = T.S;
        d !== null && d(c, o), Zr(t, e, o);
      } catch (b) {
        ts(t, e, b);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), T.T = u;
      }
    } else
      try {
        u = l(a, n), Zr(t, e, u);
      } catch (b) {
        ts(t, e, b);
      }
  }
  function Zr(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        Kr(t, e, n);
      },
      function(n) {
        return ts(t, e, n);
      }
    ) : Kr(t, e, l);
  }
  function Kr(t, e, l) {
    e.status = "fulfilled", e.value = l, Jr(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, Vr(t, l)));
  }
  function ts(t, e, l) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        e.status = "rejected", e.reason = l, Jr(e), e = e.next;
      while (e !== n);
    }
    t.action = null;
  }
  function Jr(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function kr(t, e) {
    return e;
  }
  function Wr(t, e) {
    if (ct) {
      var l = St.formState;
      if (l !== null) {
        t: {
          var n = F;
          if (ct) {
            if (_t) {
              e: {
                for (var a = _t, u = Ve; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break e;
                  }
                  if (a = Ke(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break e;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                _t = Ke(
                  a.nextSibling
                ), n = a.data === "F!";
                break t;
              }
            }
            $l(n);
          }
          n = !1;
        }
        n && (e = l[0]);
      }
    }
    return l = de(), l.memoizedState = l.baseState = e, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: kr,
      lastRenderedState: e
    }, l.queue = n, l = yo.bind(
      null,
      F,
      n
    ), n.dispatch = l, n = Pc(!1), u = is.bind(
      null,
      F,
      !1,
      n.queue
    ), n = de(), a = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, n.queue = a, l = Jm.bind(
      null,
      F,
      a,
      u,
      l
    ), a.dispatch = l, n.memoizedState = t, [e, l, !1];
  }
  function $r(t) {
    var e = Bt();
    return Fr(e, gt, t);
  }
  function Fr(t, e, l) {
    if (e = Fc(
      t,
      e,
      kr
    )[0], t = ai(Ol)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var n = Ia(e);
      } catch (c) {
        throw c === ra ? ku : c;
      }
    else n = e;
    e = Bt();
    var a = e.queue, u = a.dispatch;
    return l !== e.memoizedState && (F.flags |= 2048, ya(
      9,
      { destroy: void 0 },
      km.bind(null, a, l),
      null
    )), [n, u, t];
  }
  function km(t, e) {
    t.action = e;
  }
  function Ir(t) {
    var e = Bt(), l = gt;
    if (l !== null)
      return Fr(e, l, t);
    Bt(), e = e.memoizedState, l = Bt();
    var n = l.queue.dispatch;
    return l.memoizedState = t, [e, n, !1];
  }
  function ya(t, e, l, n) {
    return t = { tag: t, create: l, deps: n, inst: e, next: null }, e = F.updateQueue, e === null && (e = li(), F.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (n = l.next, l.next = t, t.next = n, e.lastEffect = t), t;
  }
  function Pr() {
    return Bt().memoizedState;
  }
  function ui(t, e, l, n) {
    var a = de();
    F.flags |= t, a.memoizedState = ya(
      1 | e,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function ii(t, e, l, n) {
    var a = Bt();
    n = n === void 0 ? null : n;
    var u = a.memoizedState.inst;
    gt !== null && n !== null && Zc(n, gt.memoizedState.deps) ? a.memoizedState = ya(e, u, l, n) : (F.flags |= t, a.memoizedState = ya(
      1 | e,
      u,
      l,
      n
    ));
  }
  function to(t, e) {
    ui(8390656, 8, t, e);
  }
  function es(t, e) {
    ii(2048, 8, t, e);
  }
  function Wm(t) {
    F.flags |= 4;
    var e = F.updateQueue;
    if (e === null)
      e = li(), F.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function eo(t) {
    var e = Bt().memoizedState;
    return Wm({ ref: e, nextImpl: t }), function() {
      if ((ht & 2) !== 0) throw Error(f(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function lo(t, e) {
    return ii(4, 2, t, e);
  }
  function no(t, e) {
    return ii(4, 4, t, e);
  }
  function ao(t, e) {
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
  function uo(t, e, l) {
    l = l != null ? l.concat([t]) : null, ii(4, 4, ao.bind(null, e, t), l);
  }
  function ls() {
  }
  function io(t, e) {
    var l = Bt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && Zc(e, n[1]) ? n[0] : (l.memoizedState = [t, e], t);
  }
  function co(t, e) {
    var l = Bt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && Zc(e, n[1]))
      return n[0];
    if (n = t(), Ln) {
      ce(!0);
      try {
        t();
      } finally {
        ce(!1);
      }
    }
    return l.memoizedState = [n, e], n;
  }
  function ns(t, e, l) {
    return l === void 0 || (Al & 1073741824) !== 0 && (ut & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = fh(), F.lanes |= t, un |= t, l);
  }
  function so(t, e, l, n) {
    return Ne(l, e) ? l : ha.current !== null ? (t = ns(t, l, n), Ne(t, e) || (Yt = !0), t) : (Al & 42) === 0 || (Al & 1073741824) !== 0 && (ut & 261930) === 0 ? (Yt = !0, t.memoizedState = l) : (t = fh(), F.lanes |= t, un |= t, e);
  }
  function fo(t, e, l, n, a) {
    var u = x.p;
    x.p = u !== 0 && 8 > u ? u : 8;
    var c = T.T, o = {};
    T.T = o, is(t, !1, e, l);
    try {
      var d = a(), b = T.S;
      if (b !== null && b(o, d), d !== null && typeof d == "object" && typeof d.then == "function") {
        var E = Vm(
          d,
          n
        );
        Pa(
          t,
          e,
          E,
          qe(t)
        );
      } else
        Pa(
          t,
          e,
          n,
          qe(t)
        );
    } catch (R) {
      Pa(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: R },
        qe()
      );
    } finally {
      x.p = u, c !== null && o.types !== null && (c.types = o.types), T.T = c;
    }
  }
  function $m() {
  }
  function as(t, e, l, n) {
    if (t.tag !== 5) throw Error(f(476));
    var a = ro(t).queue;
    fo(
      t,
      a,
      e,
      V,
      l === null ? $m : function() {
        return oo(t), l(n);
      }
    );
  }
  function ro(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: V,
      baseState: V,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ol,
        lastRenderedState: V
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
        lastRenderedReducer: Ol,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function oo(t) {
    var e = ro(t);
    e.next === null && (e = t.alternate.memoizedState), Pa(
      t,
      e.next.queue,
      {},
      qe()
    );
  }
  function us() {
    return te(vu);
  }
  function ho() {
    return Bt().memoizedState;
  }
  function mo() {
    return Bt().memoizedState;
  }
  function Fm(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = qe();
          t = Pl(l);
          var n = tn(e, t, l);
          n !== null && (Ee(n, e, l), ka(n, e, l)), e = { cache: xc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Im(t, e, l) {
    var n = qe();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ci(t) ? vo(e, l) : (l = Tc(t, e, l, n), l !== null && (Ee(l, t, n), go(l, e, n)));
  }
  function yo(t, e, l) {
    var n = qe();
    Pa(t, e, l, n);
  }
  function Pa(t, e, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ci(t)) vo(e, a);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var c = e.lastRenderedState, o = u(c, l);
          if (a.hasEagerState = !0, a.eagerState = o, Ne(o, c))
            return Gu(t, e, a, 0), St === null && wu(), !1;
        } catch {
        }
      if (l = Tc(t, e, a, n), l !== null)
        return Ee(l, t, n), go(l, e, n), !0;
    }
    return !1;
  }
  function is(t, e, l, n) {
    if (n = {
      lane: 2,
      revertLane: Ls(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ci(t)) {
      if (e) throw Error(f(479));
    } else
      e = Tc(
        t,
        l,
        n,
        2
      ), e !== null && Ee(e, t, 2);
  }
  function ci(t) {
    var e = t.alternate;
    return t === F || e !== null && e === F;
  }
  function vo(t, e) {
    da = ti = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function go(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, Gl(t, l);
    }
  }
  var tu = {
    readContext: te,
    use: ni,
    useCallback: Rt,
    useContext: Rt,
    useEffect: Rt,
    useImperativeHandle: Rt,
    useLayoutEffect: Rt,
    useInsertionEffect: Rt,
    useMemo: Rt,
    useReducer: Rt,
    useRef: Rt,
    useState: Rt,
    useDebugValue: Rt,
    useDeferredValue: Rt,
    useTransition: Rt,
    useSyncExternalStore: Rt,
    useId: Rt,
    useHostTransitionStatus: Rt,
    useFormState: Rt,
    useActionState: Rt,
    useOptimistic: Rt,
    useMemoCache: Rt,
    useCacheRefresh: Rt
  };
  tu.useEffectEvent = Rt;
  var po = {
    readContext: te,
    use: ni,
    useCallback: function(t, e) {
      return de().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: te,
    useEffect: to,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, ui(
        4194308,
        4,
        ao.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return ui(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      ui(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = de();
      e = e === void 0 ? null : e;
      var n = t();
      if (Ln) {
        ce(!0);
        try {
          t();
        } finally {
          ce(!1);
        }
      }
      return l.memoizedState = [n, e], n;
    },
    useReducer: function(t, e, l) {
      var n = de();
      if (l !== void 0) {
        var a = l(e);
        if (Ln) {
          ce(!0);
          try {
            l(e);
          } finally {
            ce(!1);
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
        F,
        t
      ), [n.memoizedState, t];
    },
    useRef: function(t) {
      var e = de();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Pc(t);
      var e = t.queue, l = yo.bind(null, F, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: ls,
    useDeferredValue: function(t, e) {
      var l = de();
      return ns(l, t, e);
    },
    useTransition: function() {
      var t = Pc(!1);
      return t = fo.bind(
        null,
        F,
        t.queue,
        !0,
        !1
      ), de().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var n = F, a = de();
      if (ct) {
        if (l === void 0)
          throw Error(f(407));
        l = l();
      } else {
        if (l = e(), St === null)
          throw Error(f(349));
        (ut & 127) !== 0 || Lr(n, e, l);
      }
      a.memoizedState = l;
      var u = { value: l, getSnapshot: e };
      return a.queue = u, to(wr.bind(null, n, u, t), [
        t
      ]), n.flags |= 2048, ya(
        9,
        { destroy: void 0 },
        Yr.bind(
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
      var t = de(), e = St.identifierPrefix;
      if (ct) {
        var l = fl, n = sl;
        l = (n & ~(1 << 32 - he(n) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = ei++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = Zm++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: us,
    useFormState: Wr,
    useActionState: Wr,
    useOptimistic: function(t) {
      var e = de();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = is.bind(
        null,
        F,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: $c,
    useCacheRefresh: function() {
      return de().memoizedState = Fm.bind(
        null,
        F
      );
    },
    useEffectEvent: function(t) {
      var e = de(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((ht & 2) !== 0)
          throw Error(f(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, cs = {
    readContext: te,
    use: ni,
    useCallback: io,
    useContext: te,
    useEffect: es,
    useImperativeHandle: uo,
    useInsertionEffect: lo,
    useLayoutEffect: no,
    useMemo: co,
    useReducer: ai,
    useRef: Pr,
    useState: function() {
      return ai(Ol);
    },
    useDebugValue: ls,
    useDeferredValue: function(t, e) {
      var l = Bt();
      return so(
        l,
        gt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ai(Ol)[0], e = Bt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ia(t),
        e
      ];
    },
    useSyncExternalStore: jr,
    useId: ho,
    useHostTransitionStatus: us,
    useFormState: $r,
    useActionState: $r,
    useOptimistic: function(t, e) {
      var l = Bt();
      return Qr(l, gt, t, e);
    },
    useMemoCache: $c,
    useCacheRefresh: mo
  };
  cs.useEffectEvent = eo;
  var bo = {
    readContext: te,
    use: ni,
    useCallback: io,
    useContext: te,
    useEffect: es,
    useImperativeHandle: uo,
    useInsertionEffect: lo,
    useLayoutEffect: no,
    useMemo: co,
    useReducer: Ic,
    useRef: Pr,
    useState: function() {
      return Ic(Ol);
    },
    useDebugValue: ls,
    useDeferredValue: function(t, e) {
      var l = Bt();
      return gt === null ? ns(l, t, e) : so(
        l,
        gt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Ic(Ol)[0], e = Bt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ia(t),
        e
      ];
    },
    useSyncExternalStore: jr,
    useId: ho,
    useHostTransitionStatus: us,
    useFormState: Ir,
    useActionState: Ir,
    useOptimistic: function(t, e) {
      var l = Bt();
      return gt !== null ? Qr(l, gt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: $c,
    useCacheRefresh: mo
  };
  bo.useEffectEvent = eo;
  function ss(t, e, l, n) {
    e = t.memoizedState, l = l(n, e), l = l == null ? e : w({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var fs = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var n = qe(), a = Pl(n);
      a.payload = e, l != null && (a.callback = l), e = tn(t, a, n), e !== null && (Ee(e, t, n), ka(e, t, n));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var n = qe(), a = Pl(n);
      a.tag = 1, a.payload = e, l != null && (a.callback = l), e = tn(t, a, n), e !== null && (Ee(e, t, n), ka(e, t, n));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = qe(), n = Pl(l);
      n.tag = 2, e != null && (n.callback = e), e = tn(t, n, l), e !== null && (Ee(e, t, l), ka(e, t, l));
    }
  };
  function So(t, e, l, n, a, u, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, u, c) : e.prototype && e.prototype.isPureReactComponent ? !wa(l, n) || !wa(a, u) : !0;
  }
  function _o(t, e, l, n) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, n), e.state !== t && fs.enqueueReplaceState(e, e.state, null);
  }
  function Yn(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var n in e)
        n !== "ref" && (l[n] = e[n]);
    }
    if (t = t.defaultProps) {
      l === e && (l = w({}, l));
      for (var a in t)
        l[a] === void 0 && (l[a] = t[a]);
    }
    return l;
  }
  function Eo(t) {
    Yu(t);
  }
  function To(t) {
    console.error(t);
  }
  function Ao(t) {
    Yu(t);
  }
  function si(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Oo(t, e, l) {
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
  function rs(t, e, l) {
    return l = Pl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      si(t, e);
    }, l;
  }
  function zo(t) {
    return t = Pl(t), t.tag = 3, t;
  }
  function No(t, e, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = n.value;
      t.payload = function() {
        return a(u);
      }, t.callback = function() {
        Oo(e, l, n);
      };
    }
    var c = l.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      Oo(e, l, n), typeof a != "function" && (cn === null ? cn = /* @__PURE__ */ new Set([this]) : cn.add(this));
      var o = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function Pm(t, e, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (e = l.alternate, e !== null && ca(
        e,
        l,
        a,
        !0
      ), l = Me.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Ze === null ? Si() : l.alternate === null && Mt === 0 && (Mt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Wu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : e.add(n), Bs(t, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === Wu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Bs(t, n, a)), !1;
        }
        throw Error(f(435, l.tag));
      }
      return Bs(t, n, a), Si(), !1;
    }
    if (ct)
      return e = Me.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = a, n !== Mc && (t = Error(f(422), { cause: n }), Qa(Ge(t, l)))) : (n !== Mc && (e = Error(f(423), {
        cause: n
      }), Qa(
        Ge(e, l)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, n = Ge(n, l), a = rs(
        t.stateNode,
        n,
        a
      ), wc(t, a), Mt !== 4 && (Mt = 2)), !1;
    var u = Error(f(520), { cause: n });
    if (u = Ge(u, l), su === null ? su = [u] : su.push(u), Mt !== 4 && (Mt = 2), e === null) return !0;
    n = Ge(n, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = a & -a, l.lanes |= t, t = rs(l.stateNode, n, t), wc(l, t), !1;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (cn === null || !cn.has(u))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = zo(a), No(
              a,
              t,
              l,
              n
            ), wc(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var os = Error(f(461)), Yt = !1;
  function ee(t, e, l, n) {
    e.child = t === null ? Cr(e, null, l, n) : jn(
      e,
      t.child,
      l,
      n
    );
  }
  function Ro(t, e, l, n, a) {
    l = l.render;
    var u = e.ref;
    if ("ref" in n) {
      var c = {};
      for (var o in n)
        o !== "ref" && (c[o] = n[o]);
    } else c = n;
    return qn(e), n = Kc(
      t,
      e,
      l,
      c,
      u,
      a
    ), o = Jc(), t !== null && !Yt ? (kc(t, e, a), zl(t, e, a)) : (ct && o && Nc(e), e.flags |= 1, ee(t, e, n, a), e.child);
  }
  function Mo(t, e, l, n, a) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !Ac(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, Co(
        t,
        e,
        u,
        n,
        a
      )) : (t = Qu(
        l.type,
        null,
        n,
        e,
        e.mode,
        a
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !bs(t, a)) {
      var c = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : wa, l(c, n) && t.ref === e.ref)
        return zl(t, e, a);
    }
    return e.flags |= 1, t = Sl(u, n), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Co(t, e, l, n, a) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (wa(u, n) && t.ref === e.ref)
        if (Yt = !1, e.pendingProps = n = u, bs(t, a))
          (t.flags & 131072) !== 0 && (Yt = !0);
        else
          return e.lanes = t.lanes, zl(t, e, a);
    }
    return hs(
      t,
      e,
      l,
      n,
      a
    );
  }
  function Do(t, e, l, n) {
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
        return Uo(
          t,
          e,
          u,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Ju(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? qr(e, u) : Xc(), xr(e);
      else
        return n = e.lanes = 536870912, Uo(
          t,
          e,
          u !== null ? u.baseLanes | l : l,
          l,
          n
        );
    } else
      u !== null ? (Ju(e, u.cachePool), qr(e, u), ln(), e.memoizedState = null) : (t !== null && Ju(e, null), Xc(), ln());
    return ee(t, e, a, l), e.child;
  }
  function eu(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Uo(t, e, l, n, a) {
    var u = Hc();
    return u = u === null ? null : { parent: jt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, t !== null && Ju(e, null), Xc(), xr(e), t !== null && ca(t, e, n, !0), e.childLanes = a, null;
  }
  function fi(t, e) {
    return e = oi(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function qo(t, e, l) {
    return jn(e, t.child, null, l), t = fi(e, e.pendingProps), t.flags |= 2, Ce(e), e.memoizedState = null, t;
  }
  function ty(t, e, l) {
    var n = e.pendingProps, a = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (ct) {
        if (n.mode === "hidden")
          return t = fi(e, n), e.lanes = 536870912, eu(null, t);
        if (Vc(e), (t = _t) ? (t = Zh(
          t,
          Ve
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: kl !== null ? { id: sl, overflow: fl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = yr(t), l.return = e, e.child = l, Pt = e, _t = null)) : t = null, t === null) throw $l(e);
        return e.lanes = 536870912, null;
      }
      return fi(e, n);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (Vc(e), a)
        if (e.flags & 256)
          e.flags &= -257, e = qo(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(f(558));
      else if (Yt || ca(t, e, l, !1), a = (l & t.childLanes) !== 0, Yt || a) {
        if (n = St, n !== null && (c = vl(n, l), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, Mn(t, c), Ee(n, t, c), os;
        Si(), e = qo(
          t,
          e,
          l
        );
      } else
        t = u.treeContext, _t = Ke(c.nextSibling), Pt = e, ct = !0, Wl = null, Ve = !1, t !== null && pr(e, t), e = fi(e, n), e.flags |= 4096;
      return e;
    }
    return t = Sl(t.child, {
      mode: n.mode,
      children: n.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function ri(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function hs(t, e, l, n, a) {
    return qn(e), l = Kc(
      t,
      e,
      l,
      n,
      void 0,
      a
    ), n = Jc(), t !== null && !Yt ? (kc(t, e, a), zl(t, e, a)) : (ct && n && Nc(e), e.flags |= 1, ee(t, e, l, a), e.child);
  }
  function xo(t, e, l, n, a, u) {
    return qn(e), e.updateQueue = null, l = Hr(
      e,
      n,
      l,
      a
    ), Br(t), n = Jc(), t !== null && !Yt ? (kc(t, e, u), zl(t, e, u)) : (ct && n && Nc(e), e.flags |= 1, ee(t, e, l, u), e.child);
  }
  function Bo(t, e, l, n, a) {
    if (qn(e), e.stateNode === null) {
      var u = na, c = l.contextType;
      typeof c == "object" && c !== null && (u = te(c)), u = new l(n, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = fs, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = n, u.state = e.memoizedState, u.refs = {}, Lc(e), c = l.contextType, u.context = typeof c == "object" && c !== null ? te(c) : na, u.state = e.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (ss(
        e,
        l,
        c,
        n
      ), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && fs.enqueueReplaceState(u, u.state, null), $a(e, n, u, a), Wa(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), n = !0;
    } else if (t === null) {
      u = e.stateNode;
      var o = e.memoizedProps, d = Yn(l, o);
      u.props = d;
      var b = u.context, E = l.contextType;
      c = na, typeof E == "object" && E !== null && (c = te(E));
      var R = l.getDerivedStateFromProps;
      E = typeof R == "function" || typeof u.getSnapshotBeforeUpdate == "function", o = e.pendingProps !== o, E || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o || b !== c) && _o(
        e,
        u,
        n,
        c
      ), Il = !1;
      var S = e.memoizedState;
      u.state = S, $a(e, n, u, a), Wa(), b = e.memoizedState, o || S !== b || Il ? (typeof R == "function" && (ss(
        e,
        l,
        R,
        n
      ), b = e.memoizedState), (d = Il || So(
        e,
        l,
        d,
        n,
        S,
        b,
        c
      )) ? (E || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = b), u.props = n, u.state = b, u.context = c, n = d) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
    } else {
      u = e.stateNode, Yc(t, e), c = e.memoizedProps, E = Yn(l, c), u.props = E, R = e.pendingProps, S = u.context, b = l.contextType, d = na, typeof b == "object" && b !== null && (d = te(b)), o = l.getDerivedStateFromProps, (b = typeof o == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== R || S !== d) && _o(
        e,
        u,
        n,
        d
      ), Il = !1, S = e.memoizedState, u.state = S, $a(e, n, u, a), Wa();
      var _ = e.memoizedState;
      c !== R || S !== _ || Il || t !== null && t.dependencies !== null && Zu(t.dependencies) ? (typeof o == "function" && (ss(
        e,
        l,
        o,
        n
      ), _ = e.memoizedState), (E = Il || So(
        e,
        l,
        E,
        n,
        S,
        _,
        d
      ) || t !== null && t.dependencies !== null && Zu(t.dependencies)) ? (b || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(n, _, d), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        n,
        _,
        d
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = _), u.props = n, u.state = _, u.context = d, n = E) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), n = !1);
    }
    return u = n, ri(t, e), n = (e.flags & 128) !== 0, u || n ? (u = e.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && n ? (e.child = jn(
      e,
      t.child,
      null,
      a
    ), e.child = jn(
      e,
      null,
      l,
      a
    )) : ee(t, e, l, a), e.memoizedState = u.state, t = e.child) : t = zl(
      t,
      e,
      a
    ), t;
  }
  function Ho(t, e, l, n) {
    return Dn(), e.flags |= 256, ee(t, e, l, n), e.child;
  }
  var ds = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ms(t) {
    return { baseLanes: t, cachePool: Ar() };
  }
  function ys(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Ue), t;
  }
  function jo(t, e, l) {
    var n = e.pendingProps, a = !1, u = (e.flags & 128) !== 0, c;
    if ((c = u) || (c = t !== null && t.memoizedState === null ? !1 : (xt.current & 2) !== 0), c && (a = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (ct) {
        if (a ? en(e) : ln(), (t = _t) ? (t = Zh(
          t,
          Ve
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: kl !== null ? { id: sl, overflow: fl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = yr(t), l.return = e, e.child = l, Pt = e, _t = null)) : t = null, t === null) throw $l(e);
        return Fs(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var o = n.children;
      return n = n.fallback, a ? (ln(), a = e.mode, o = oi(
        { mode: "hidden", children: o },
        a
      ), n = Cn(
        n,
        a,
        l,
        null
      ), o.return = e, n.return = e, o.sibling = n, e.child = o, n = e.child, n.memoizedState = ms(l), n.childLanes = ys(
        t,
        c,
        l
      ), e.memoizedState = ds, eu(null, n)) : (en(e), vs(e, o));
    }
    var d = t.memoizedState;
    if (d !== null && (o = d.dehydrated, o !== null)) {
      if (u)
        e.flags & 256 ? (en(e), e.flags &= -257, e = gs(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (ln(), e.child = t.child, e.flags |= 128, e = null) : (ln(), o = n.fallback, a = e.mode, n = oi(
          { mode: "visible", children: n.children },
          a
        ), o = Cn(
          o,
          a,
          l,
          null
        ), o.flags |= 2, n.return = e, o.return = e, n.sibling = o, e.child = n, jn(
          e,
          t.child,
          null,
          l
        ), n = e.child, n.memoizedState = ms(l), n.childLanes = ys(
          t,
          c,
          l
        ), e.memoizedState = ds, e = eu(null, n));
      else if (en(e), Fs(o)) {
        if (c = o.nextSibling && o.nextSibling.dataset, c) var b = c.dgst;
        c = b, n = Error(f(419)), n.stack = "", n.digest = c, Qa({ value: n, source: null, stack: null }), e = gs(
          t,
          e,
          l
        );
      } else if (Yt || ca(t, e, l, !1), c = (l & t.childLanes) !== 0, Yt || c) {
        if (c = St, c !== null && (n = vl(c, l), n !== 0 && n !== d.retryLane))
          throw d.retryLane = n, Mn(t, n), Ee(c, t, n), os;
        $s(o) || Si(), e = gs(
          t,
          e,
          l
        );
      } else
        $s(o) ? (e.flags |= 192, e.child = t.child, e = null) : (t = d.treeContext, _t = Ke(
          o.nextSibling
        ), Pt = e, ct = !0, Wl = null, Ve = !1, t !== null && pr(e, t), e = vs(
          e,
          n.children
        ), e.flags |= 4096);
      return e;
    }
    return a ? (ln(), o = n.fallback, a = e.mode, d = t.child, b = d.sibling, n = Sl(d, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = d.subtreeFlags & 65011712, b !== null ? o = Sl(
      b,
      o
    ) : (o = Cn(
      o,
      a,
      l,
      null
    ), o.flags |= 2), o.return = e, n.return = e, n.sibling = o, e.child = n, eu(null, n), n = e.child, o = t.child.memoizedState, o === null ? o = ms(l) : (a = o.cachePool, a !== null ? (d = jt._currentValue, a = a.parent !== d ? { parent: d, pool: d } : a) : a = Ar(), o = {
      baseLanes: o.baseLanes | l,
      cachePool: a
    }), n.memoizedState = o, n.childLanes = ys(
      t,
      c,
      l
    ), e.memoizedState = ds, eu(t.child, n)) : (en(e), l = t.child, t = l.sibling, l = Sl(l, {
      mode: "visible",
      children: n.children
    }), l.return = e, l.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function vs(t, e) {
    return e = oi(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function oi(t, e) {
    return t = Re(22, t, null, e), t.lanes = 0, t;
  }
  function gs(t, e, l) {
    return jn(e, t.child, null, l), t = vs(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Lo(t, e, l) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e), Uc(t.return, e, l);
  }
  function ps(t, e, l, n, a, u) {
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
  function Yo(t, e, l) {
    var n = e.pendingProps, a = n.revealOrder, u = n.tail;
    n = n.children;
    var c = xt.current, o = (c & 2) !== 0;
    if (o ? (c = c & 1 | 2, e.flags |= 128) : c &= 1, B(xt, c), ee(t, e, n, l), n = ct ? Xa : 0, !o && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Lo(t, l, e);
        else if (t.tag === 19)
          Lo(t, l, e);
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
          t = l.alternate, t !== null && Pu(t) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = e.child, e.child = null) : (a = l.sibling, l.sibling = null), ps(
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
          if (t = a.alternate, t !== null && Pu(t) === null) {
            e.child = a;
            break;
          }
          t = a.sibling, a.sibling = l, l = a, a = t;
        }
        ps(
          e,
          !0,
          l,
          null,
          u,
          n
        );
        break;
      case "together":
        ps(
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
  function zl(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), un |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (ca(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(f(153));
    if (e.child !== null) {
      for (t = e.child, l = Sl(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = Sl(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function bs(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Zu(t)));
  }
  function ey(t, e, l) {
    switch (e.tag) {
      case 3:
        Nt(e, e.stateNode.containerInfo), Fl(e, jt, t.memoizedState.cache), Dn();
        break;
      case 27:
      case 5:
        Hl(e);
        break;
      case 4:
        Nt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Fl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Vc(e), null;
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (en(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? jo(t, e, l) : (en(e), t = zl(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        en(e);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (n = (l & e.childLanes) !== 0, n || (ca(
          t,
          e,
          l,
          !1
        ), n = (l & e.childLanes) !== 0), a) {
          if (n)
            return Yo(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), B(xt, xt.current), n) break;
        return null;
      case 22:
        return e.lanes = 0, Do(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        Fl(e, jt, t.memoizedState.cache);
    }
    return zl(t, e, l);
  }
  function wo(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Yt = !0;
      else {
        if (!bs(t, l) && (e.flags & 128) === 0)
          return Yt = !1, ey(
            t,
            e,
            l
          );
        Yt = (t.flags & 131072) !== 0;
      }
    else
      Yt = !1, ct && (e.flags & 1048576) !== 0 && gr(e, Xa, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (t = Bn(e.elementType), e.type = t, typeof t == "function")
            Ac(t) ? (n = Yn(t, n), e.tag = 1, e = Bo(
              null,
              e,
              t,
              n,
              l
            )) : (e.tag = 0, e = hs(
              null,
              e,
              t,
              n,
              l
            ));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === Ct) {
                e.tag = 11, e = Ro(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              } else if (a === K) {
                e.tag = 14, e = Mo(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              }
            }
            throw e = Kt(t) || t, Error(f(306, e, ""));
          }
        }
        return e;
      case 0:
        return hs(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return n = e.type, a = Yn(
          n,
          e.pendingProps
        ), Bo(
          t,
          e,
          n,
          a,
          l
        );
      case 3:
        t: {
          if (Nt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(f(387));
          n = e.pendingProps;
          var u = e.memoizedState;
          a = u.element, Yc(t, e), $a(e, n, null, l);
          var c = e.memoizedState;
          if (n = c.cache, Fl(e, jt, n), n !== u.cache && qc(
            e,
            [jt],
            l,
            !0
          ), Wa(), n = c.element, u.isDehydrated)
            if (u = {
              element: n,
              isDehydrated: !1,
              cache: c.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = Ho(
                t,
                e,
                n,
                l
              );
              break t;
            } else if (n !== a) {
              a = Ge(
                Error(f(424)),
                e
              ), Qa(a), e = Ho(
                t,
                e,
                n,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, _t = Ke(t.firstChild), Pt = e, ct = !0, Wl = null, Ve = !0, l = Cr(
                e,
                null,
                n,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Dn(), n === a) {
              e = zl(
                t,
                e,
                l
              );
              break t;
            }
            ee(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return ri(t, e), t === null ? (l = Fh(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : ct || (l = e.type, t = e.pendingProps, n = Ni(
          k.current
        ).createElement(l), n[Qt] = e, n[fe] = t, le(n, l, t), Ut(n), e.stateNode = n) : e.memoizedState = Fh(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Hl(e), t === null && ct && (n = e.stateNode = kh(
          e.type,
          e.pendingProps,
          k.current
        ), Pt = e, Ve = !0, a = _t, on(e.type) ? (Is = a, _t = Ke(n.firstChild)) : _t = a), ee(
          t,
          e,
          e.pendingProps.children,
          l
        ), ri(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && ct && ((a = n = _t) && (n = Dy(
          n,
          e.type,
          e.pendingProps,
          Ve
        ), n !== null ? (e.stateNode = n, Pt = e, _t = Ke(n.firstChild), Ve = !1, a = !0) : a = !1), a || $l(e)), Hl(e), a = e.type, u = e.pendingProps, c = t !== null ? t.memoizedProps : null, n = u.children, Js(a, u) ? n = null : c !== null && Js(a, c) && (e.flags |= 32), e.memoizedState !== null && (a = Kc(
          t,
          e,
          Km,
          null,
          null,
          l
        ), vu._currentValue = a), ri(t, e), ee(t, e, n, l), e.child;
      case 6:
        return t === null && ct && ((t = l = _t) && (l = Uy(
          l,
          e.pendingProps,
          Ve
        ), l !== null ? (e.stateNode = l, Pt = e, _t = null, t = !0) : t = !1), t || $l(e)), null;
      case 13:
        return jo(t, e, l);
      case 4:
        return Nt(
          e,
          e.stateNode.containerInfo
        ), n = e.pendingProps, t === null ? e.child = jn(
          e,
          null,
          n,
          l
        ) : ee(t, e, n, l), e.child;
      case 11:
        return Ro(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return ee(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return ee(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return ee(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return n = e.pendingProps, Fl(e, e.type, n.value), ee(t, e, n.children, l), e.child;
      case 9:
        return a = e.type._context, n = e.pendingProps.children, qn(e), a = te(a), n = n(a), e.flags |= 1, ee(t, e, n, l), e.child;
      case 14:
        return Mo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return Co(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return Yo(t, e, l);
      case 31:
        return ty(t, e, l);
      case 22:
        return Do(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return qn(e), n = te(jt), t === null ? (a = Hc(), a === null && (a = St, u = xc(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= l), a = u), e.memoizedState = { parent: n, cache: a }, Lc(e), Fl(e, jt, a)) : ((t.lanes & l) !== 0 && (Yc(t, e), $a(e, null, null, l), Wa()), a = t.memoizedState, u = e.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), Fl(e, jt, n)) : (n = u.cache, Fl(e, jt, n), n !== a.cache && qc(
          e,
          [jt],
          l,
          !0
        ))), ee(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function Nl(t) {
    t.flags |= 4;
  }
  function Ss(t, e, l, n, a) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (a & 335544128) === a)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (dh()) t.flags |= 8192;
        else
          throw Hn = Wu, jc;
    } else t.flags &= -16777217;
  }
  function Go(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !ld(e))
      if (dh()) t.flags |= 8192;
      else
        throw Hn = Wu, jc;
  }
  function hi(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? We() : 536870912, t.lanes |= e, ba |= e);
  }
  function lu(t, e) {
    if (!ct)
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
  function Et(t) {
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
    switch (Rc(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Et(e), null;
      case 1:
        return Et(e), null;
      case 3:
        return l = e.stateNode, n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Tl(jt), zt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (ia(e) ? Nl(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Cc())), Et(e), null;
      case 26:
        var a = e.type, u = e.memoizedState;
        return t === null ? (Nl(e), u !== null ? (Et(e), Go(e, u)) : (Et(e), Ss(
          e,
          a,
          null,
          n,
          l
        ))) : u ? u !== t.memoizedState ? (Nl(e), Et(e), Go(e, u)) : (Et(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== n && Nl(e), Et(e), Ss(
          e,
          a,
          t,
          n,
          l
        )), null;
      case 27:
        if (et(e), l = k.current, a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && Nl(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(f(166));
            return Et(e), null;
          }
          t = j.current, ia(e) ? br(e) : (t = kh(a, n, l), e.stateNode = t, Nl(e));
        }
        return Et(e), null;
      case 5:
        if (et(e), a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && Nl(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(f(166));
            return Et(e), null;
          }
          if (u = j.current, ia(e))
            br(e);
          else {
            var c = Ni(
              k.current
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
            u[Qt] = e, u[fe] = n;
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
            t: switch (le(u, a, n), a) {
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
            n && Nl(e);
          }
        }
        return Et(e), Ss(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== n && Nl(e);
        else {
          if (typeof n != "string" && e.stateNode === null)
            throw Error(f(166));
          if (t = k.current, ia(e)) {
            if (t = e.stateNode, l = e.memoizedProps, n = null, a = Pt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            t[Qt] = e, t = !!(t.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || jh(t.nodeValue, l)), t || $l(e, !0);
          } else
            t = Ni(t).createTextNode(
              n
            ), t[Qt] = e, e.stateNode = t;
        }
        return Et(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (n = ia(e), l !== null) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(557));
              t[Qt] = e;
            } else
              Dn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Et(e), t = !1;
          } else
            l = Cc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (Ce(e), e) : (Ce(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(f(558));
        }
        return Et(e), null;
      case 13:
        if (n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = ia(e), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(f(317));
              a[Qt] = e;
            } else
              Dn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Et(e), a = !1;
          } else
            a = Cc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return e.flags & 256 ? (Ce(e), e) : (Ce(e), null);
        }
        return Ce(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = n !== null, t = t !== null && t.memoizedState !== null, l && (n = e.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== a && (n.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), hi(e, e.updateQueue), Et(e), null);
      case 4:
        return zt(), t === null && Xs(e.stateNode.containerInfo), Et(e), null;
      case 10:
        return Tl(e.type), Et(e), null;
      case 19:
        if (z(xt), n = e.memoizedState, n === null) return Et(e), null;
        if (a = (e.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) lu(n, !1);
          else {
            if (Mt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = Pu(t), u !== null) {
                  for (e.flags |= 128, lu(n, !1), t = u.updateQueue, e.updateQueue = t, hi(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    mr(l, t), l = l.sibling;
                  return B(
                    xt,
                    xt.current & 1 | 2
                  ), ct && _l(e, n.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null && Jt() > gi && (e.flags |= 128, a = !0, lu(n, !1), e.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = Pu(u), t !== null) {
              if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, hi(e, t), lu(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !ct)
                return Et(e), null;
            } else
              2 * Jt() - n.renderingStartTime > gi && l !== 536870912 && (e.flags |= 128, a = !0, lu(n, !1), e.lanes = 4194304);
          n.isBackwards ? (u.sibling = e.child, e.child = u) : (t = n.last, t !== null ? t.sibling = u : e.child = u, n.last = u);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = Jt(), t.sibling = null, l = xt.current, B(
          xt,
          a ? l & 1 | 2 : l & 1
        ), ct && _l(e, n.treeForkCount), t) : (Et(e), null);
      case 22:
      case 23:
        return Ce(e), Qc(), n = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Et(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Et(e), l = e.updateQueue, l !== null && hi(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== l && (e.flags |= 2048), t !== null && z(xn), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Tl(jt), Et(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function ny(t, e) {
    switch (Rc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Tl(jt), zt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return et(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Ce(e), e.alternate === null)
            throw Error(f(340));
          Dn();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Ce(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(f(340));
          Dn();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return z(xt), null;
      case 4:
        return zt(), null;
      case 10:
        return Tl(e.type), null;
      case 22:
      case 23:
        return Ce(e), Qc(), t !== null && z(xn), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Tl(jt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xo(t, e) {
    switch (Rc(e), e.tag) {
      case 3:
        Tl(jt), zt();
        break;
      case 26:
      case 27:
      case 5:
        et(e);
        break;
      case 4:
        zt();
        break;
      case 31:
        e.memoizedState !== null && Ce(e);
        break;
      case 13:
        Ce(e);
        break;
      case 19:
        z(xt);
        break;
      case 10:
        Tl(e.type);
        break;
      case 22:
      case 23:
        Ce(e), Qc(), t !== null && z(xn);
        break;
      case 24:
        Tl(jt);
    }
  }
  function nu(t, e) {
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
      vt(e, e.return, o);
    }
  }
  function nn(t, e, l) {
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
              var d = l, b = o;
              try {
                b();
              } catch (E) {
                vt(
                  a,
                  d,
                  E
                );
              }
            }
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (E) {
      vt(e, e.return, E);
    }
  }
  function Qo(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Ur(e, l);
      } catch (n) {
        vt(t, t.return, n);
      }
    }
  }
  function Vo(t, e, l) {
    l.props = Yn(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      vt(t, e, n);
    }
  }
  function au(t, e) {
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
      vt(t, e, a);
    }
  }
  function rl(t, e) {
    var l = t.ref, n = t.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          vt(t, e, a);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          vt(t, e, a);
        }
      else l.current = null;
  }
  function Zo(t) {
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
      vt(t, t.return, a);
    }
  }
  function _s(t, e, l) {
    try {
      var n = t.stateNode;
      Oy(n, t.type, l, e), n[fe] = e;
    } catch (a) {
      vt(t, t.return, a);
    }
  }
  function Ko(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && on(t.type) || t.tag === 4;
  }
  function Es(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ko(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && on(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Ts(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = pl));
    else if (n !== 4 && (n === 27 && on(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (Ts(t, e, l), t = t.sibling; t !== null; )
        Ts(t, e, l), t = t.sibling;
  }
  function di(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (n !== 4 && (n === 27 && on(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (di(t, e, l), t = t.sibling; t !== null; )
        di(t, e, l), t = t.sibling;
  }
  function Jo(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var n = t.type, a = e.attributes; a.length; )
        e.removeAttributeNode(a[0]);
      le(e, n, l), e[Qt] = t, e[fe] = l;
    } catch (u) {
      vt(t, t.return, u);
    }
  }
  var Rl = !1, wt = !1, As = !1, ko = typeof WeakSet == "function" ? WeakSet : Set, kt = null;
  function ay(t, e) {
    if (t = t.containerInfo, Zs = xi, t = ur(t), gc(t)) {
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
            var c = 0, o = -1, d = -1, b = 0, E = 0, R = t, S = null;
            e: for (; ; ) {
              for (var _; R !== l || a !== 0 && R.nodeType !== 3 || (o = c + a), R !== u || n !== 0 && R.nodeType !== 3 || (d = c + n), R.nodeType === 3 && (c += R.nodeValue.length), (_ = R.firstChild) !== null; )
                S = R, R = _;
              for (; ; ) {
                if (R === t) break e;
                if (S === l && ++b === a && (o = c), S === u && ++E === n && (d = c), (_ = R.nextSibling) !== null) break;
                R = S, S = R.parentNode;
              }
              R = _;
            }
            l = o === -1 || d === -1 ? null : { start: o, end: d };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Ks = { focusedElem: t, selectionRange: l }, xi = !1, kt = e; kt !== null; )
      if (e = kt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, kt = t;
      else
        for (; kt !== null; ) {
          switch (e = kt, u = e.alternate, t = e.flags, e.tag) {
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
                  var L = Yn(
                    l.type,
                    a
                  );
                  t = n.getSnapshotBeforeUpdate(
                    L,
                    u
                  ), n.__reactInternalSnapshotBeforeUpdate = t;
                } catch (Z) {
                  vt(
                    l,
                    l.return,
                    Z
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  Ws(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ws(t);
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
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, kt = t;
            break;
          }
          kt = e.return;
        }
  }
  function Wo(t, e, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Cl(t, l), n & 4 && nu(5, l);
        break;
      case 1:
        if (Cl(t, l), n & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (c) {
              vt(l, l.return, c);
            }
          else {
            var a = Yn(
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
              vt(
                l,
                l.return,
                c
              );
            }
          }
        n & 64 && Qo(l), n & 512 && au(l, l.return);
        break;
      case 3:
        if (Cl(t, l), n & 64 && (t = l.updateQueue, t !== null)) {
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
            Ur(t, e);
          } catch (c) {
            vt(l, l.return, c);
          }
        }
        break;
      case 27:
        e === null && n & 4 && Jo(l);
      case 26:
      case 5:
        Cl(t, l), e === null && n & 4 && Zo(l), n & 512 && au(l, l.return);
        break;
      case 12:
        Cl(t, l);
        break;
      case 31:
        Cl(t, l), n & 4 && Io(t, l);
        break;
      case 13:
        Cl(t, l), n & 4 && Po(t, l), n & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = dy.bind(
          null,
          l
        ), qy(t, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || Rl, !n) {
          e = e !== null && e.memoizedState !== null || wt, a = Rl;
          var u = wt;
          Rl = n, (wt = e) && !u ? Dl(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : Cl(t, l), Rl = a, wt = u;
        }
        break;
      case 30:
        break;
      default:
        Cl(t, l);
    }
  }
  function $o(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, $o(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && An(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var At = null, pe = !1;
  function Ml(t, e, l) {
    for (l = l.child; l !== null; )
      Fo(t, e, l), l = l.sibling;
  }
  function Fo(t, e, l) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
      try {
        Dt.onCommitFiberUnmount(yl, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        wt || rl(l, e), Ml(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        wt || rl(l, e);
        var n = At, a = pe;
        on(l.type) && (At = l.stateNode, pe = !1), Ml(
          t,
          e,
          l
        ), du(l.stateNode), At = n, pe = a;
        break;
      case 5:
        wt || rl(l, e);
      case 6:
        if (n = At, a = pe, At = null, Ml(
          t,
          e,
          l
        ), At = n, pe = a, At !== null)
          if (pe)
            try {
              (At.nodeType === 9 ? At.body : At.nodeName === "HTML" ? At.ownerDocument.body : At).removeChild(l.stateNode);
            } catch (u) {
              vt(
                l,
                e,
                u
              );
            }
          else
            try {
              At.removeChild(l.stateNode);
            } catch (u) {
              vt(
                l,
                e,
                u
              );
            }
        break;
      case 18:
        At !== null && (pe ? (t = At, Qh(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Na(t)) : Qh(At, l.stateNode));
        break;
      case 4:
        n = At, a = pe, At = l.stateNode.containerInfo, pe = !0, Ml(
          t,
          e,
          l
        ), At = n, pe = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        nn(2, l, e), wt || nn(4, l, e), Ml(
          t,
          e,
          l
        );
        break;
      case 1:
        wt || (rl(l, e), n = l.stateNode, typeof n.componentWillUnmount == "function" && Vo(
          l,
          e,
          n
        )), Ml(
          t,
          e,
          l
        );
        break;
      case 21:
        Ml(
          t,
          e,
          l
        );
        break;
      case 22:
        wt = (n = wt) || l.memoizedState !== null, Ml(
          t,
          e,
          l
        ), wt = n;
        break;
      default:
        Ml(
          t,
          e,
          l
        );
    }
  }
  function Io(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Na(t);
      } catch (l) {
        vt(e, e.return, l);
      }
    }
  }
  function Po(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Na(t);
      } catch (l) {
        vt(e, e.return, l);
      }
  }
  function uy(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new ko()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new ko()), e;
      default:
        throw Error(f(435, t.tag));
    }
  }
  function mi(t, e) {
    var l = uy(t);
    e.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = my.bind(null, t, n);
        n.then(a, a);
      }
    });
  }
  function be(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], u = t, c = e, o = c;
        t: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (on(o.type)) {
                At = o.stateNode, pe = !1;
                break t;
              }
              break;
            case 5:
              At = o.stateNode, pe = !1;
              break t;
            case 3:
            case 4:
              At = o.stateNode.containerInfo, pe = !0;
              break t;
          }
          o = o.return;
        }
        if (At === null) throw Error(f(160));
        Fo(u, c, a), At = null, pe = !1, u = a.alternate, u !== null && (u.return = null), a.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        th(e, t), e = e.sibling;
  }
  var Fe = null;
  function th(t, e) {
    var l = t.alternate, n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        be(e, t), Se(t), n & 4 && (nn(3, t, t.return), nu(3, t), nn(5, t, t.return));
        break;
      case 1:
        be(e, t), Se(t), n & 512 && (wt || l === null || rl(l, l.return)), n & 64 && Rl && (t = t.updateQueue, t !== null && (n = t.callbacks, n !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = Fe;
        if (be(e, t), Se(t), n & 512 && (wt || l === null || rl(l, l.return)), n & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (n = t.memoizedState, l === null)
            if (n === null)
              if (t.stateNode === null) {
                t: {
                  n = t.type, l = t.memoizedProps, a = a.ownerDocument || a;
                  e: switch (n) {
                    case "title":
                      u = a.getElementsByTagName("title")[0], (!u || u[Tn] || u[Qt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(n), a.head.insertBefore(
                        u,
                        a.querySelector("head > title")
                      )), le(u, n, l), u[Qt] = t, Ut(u), n = u;
                      break t;
                    case "link":
                      var c = td(
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
                      u = a.createElement(n), le(u, n, l), a.head.appendChild(u);
                      break;
                    case "meta":
                      if (c = td(
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
                      u = a.createElement(n), le(u, n, l), a.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, n));
                  }
                  u[Qt] = t, Ut(u), n = u;
                }
                t.stateNode = n;
              } else
                ed(
                  a,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Ph(
                a,
                n,
                t.memoizedProps
              );
          else
            u !== n ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, n === null ? ed(
              a,
              t.type,
              t.stateNode
            ) : Ph(
              a,
              n,
              t.memoizedProps
            )) : n === null && t.stateNode !== null && _s(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        be(e, t), Se(t), n & 512 && (wt || l === null || rl(l, l.return)), l !== null && n & 4 && _s(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (be(e, t), Se(t), n & 512 && (wt || l === null || rl(l, l.return)), t.flags & 32) {
          a = t.stateNode;
          try {
            $n(a, "");
          } catch (L) {
            vt(t, t.return, L);
          }
        }
        n & 4 && t.stateNode != null && (a = t.memoizedProps, _s(
          t,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (As = !0);
        break;
      case 6:
        if (be(e, t), Se(t), n & 4) {
          if (t.stateNode === null)
            throw Error(f(162));
          n = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = n;
          } catch (L) {
            vt(t, t.return, L);
          }
        }
        break;
      case 3:
        if (Ci = null, a = Fe, Fe = Ri(e.containerInfo), be(e, t), Fe = a, Se(t), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Na(e.containerInfo);
          } catch (L) {
            vt(t, t.return, L);
          }
        As && (As = !1, eh(t));
        break;
      case 4:
        n = Fe, Fe = Ri(
          t.stateNode.containerInfo
        ), be(e, t), Se(t), Fe = n;
        break;
      case 12:
        be(e, t), Se(t);
        break;
      case 31:
        be(e, t), Se(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, mi(t, n)));
        break;
      case 13:
        be(e, t), Se(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (vi = Jt()), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, mi(t, n)));
        break;
      case 22:
        a = t.memoizedState !== null;
        var d = l !== null && l.memoizedState !== null, b = Rl, E = wt;
        if (Rl = b || a, wt = E || d, be(e, t), wt = E, Rl = b, Se(t), n & 8192)
          t: for (e = t.stateNode, e._visibility = a ? e._visibility & -2 : e._visibility | 1, a && (l === null || d || Rl || wt || wn(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                d = l = e;
                try {
                  if (u = d.stateNode, a)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    o = d.stateNode;
                    var R = d.memoizedProps.style, S = R != null && R.hasOwnProperty("display") ? R.display : null;
                    o.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (L) {
                  vt(d, d.return, L);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                d = e;
                try {
                  d.stateNode.nodeValue = a ? "" : d.memoizedProps;
                } catch (L) {
                  vt(d, d.return, L);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                d = e;
                try {
                  var _ = d.stateNode;
                  a ? Vh(_, !0) : Vh(d.stateNode, !1);
                } catch (L) {
                  vt(d, d.return, L);
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
        n & 4 && (n = t.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, mi(t, l))));
        break;
      case 19:
        be(e, t), Se(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, mi(t, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        be(e, t), Se(t);
    }
  }
  function Se(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, n = t.return; n !== null; ) {
          if (Ko(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, u = Es(t);
            di(t, u, a);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && ($n(c, ""), l.flags &= -33);
            var o = Es(t);
            di(t, o, c);
            break;
          case 3:
          case 4:
            var d = l.stateNode.containerInfo, b = Es(t);
            Ts(
              t,
              b,
              d
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (E) {
        vt(t, t.return, E);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function eh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        eh(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function Cl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Wo(t, e.alternate, e), e = e.sibling;
  }
  function wn(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          nn(4, e, e.return), wn(e);
          break;
        case 1:
          rl(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Vo(
            e,
            e.return,
            l
          ), wn(e);
          break;
        case 27:
          du(e.stateNode);
        case 26:
        case 5:
          rl(e, e.return), wn(e);
          break;
        case 22:
          e.memoizedState === null && wn(e);
          break;
        case 30:
          wn(e);
          break;
        default:
          wn(e);
      }
      t = t.sibling;
    }
  }
  function Dl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate, a = t, u = e, c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Dl(
            a,
            u,
            l
          ), nu(4, u);
          break;
        case 1:
          if (Dl(
            a,
            u,
            l
          ), n = u, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (b) {
              vt(n, n.return, b);
            }
          if (n = u, a = n.updateQueue, a !== null) {
            var o = n.stateNode;
            try {
              var d = a.shared.hiddenCallbacks;
              if (d !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < d.length; a++)
                  Dr(d[a], o);
            } catch (b) {
              vt(n, n.return, b);
            }
          }
          l && c & 64 && Qo(u), au(u, u.return);
          break;
        case 27:
          Jo(u);
        case 26:
        case 5:
          Dl(
            a,
            u,
            l
          ), l && n === null && c & 4 && Zo(u), au(u, u.return);
          break;
        case 12:
          Dl(
            a,
            u,
            l
          );
          break;
        case 31:
          Dl(
            a,
            u,
            l
          ), l && c & 4 && Io(a, u);
          break;
        case 13:
          Dl(
            a,
            u,
            l
          ), l && c & 4 && Po(a, u);
          break;
        case 22:
          u.memoizedState === null && Dl(
            a,
            u,
            l
          ), au(u, u.return);
          break;
        case 30:
          break;
        default:
          Dl(
            a,
            u,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Os(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Va(l));
  }
  function zs(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Va(t));
  }
  function Ie(t, e, l, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        lh(
          t,
          e,
          l,
          n
        ), e = e.sibling;
  }
  function lh(t, e, l, n) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ie(
          t,
          e,
          l,
          n
        ), a & 2048 && nu(9, e);
        break;
      case 1:
        Ie(
          t,
          e,
          l,
          n
        );
        break;
      case 3:
        Ie(
          t,
          e,
          l,
          n
        ), a & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Va(t)));
        break;
      case 12:
        if (a & 2048) {
          Ie(
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
          } catch (d) {
            vt(e, e.return, d);
          }
        } else
          Ie(
            t,
            e,
            l,
            n
          );
        break;
      case 31:
        Ie(
          t,
          e,
          l,
          n
        );
        break;
      case 13:
        Ie(
          t,
          e,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, c = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Ie(
          t,
          e,
          l,
          n
        ) : uu(t, e) : u._visibility & 2 ? Ie(
          t,
          e,
          l,
          n
        ) : (u._visibility |= 2, va(
          t,
          e,
          l,
          n,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && Os(c, e);
        break;
      case 24:
        Ie(
          t,
          e,
          l,
          n
        ), a & 2048 && zs(e.alternate, e);
        break;
      default:
        Ie(
          t,
          e,
          l,
          n
        );
    }
  }
  function va(t, e, l, n, a) {
    for (a = a && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, c = e, o = l, d = n, b = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          va(
            u,
            c,
            o,
            d,
            a
          ), nu(8, c);
          break;
        case 23:
          break;
        case 22:
          var E = c.stateNode;
          c.memoizedState !== null ? E._visibility & 2 ? va(
            u,
            c,
            o,
            d,
            a
          ) : uu(
            u,
            c
          ) : (E._visibility |= 2, va(
            u,
            c,
            o,
            d,
            a
          )), a && b & 2048 && Os(
            c.alternate,
            c
          );
          break;
        case 24:
          va(
            u,
            c,
            o,
            d,
            a
          ), a && b & 2048 && zs(c.alternate, c);
          break;
        default:
          va(
            u,
            c,
            o,
            d,
            a
          );
      }
      e = e.sibling;
    }
  }
  function uu(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, n = e, a = n.flags;
        switch (n.tag) {
          case 22:
            uu(l, n), a & 2048 && Os(
              n.alternate,
              n
            );
            break;
          case 24:
            uu(l, n), a & 2048 && zs(n.alternate, n);
            break;
          default:
            uu(l, n);
        }
        e = e.sibling;
      }
  }
  var iu = 8192;
  function ga(t, e, l) {
    if (t.subtreeFlags & iu)
      for (t = t.child; t !== null; )
        nh(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function nh(t, e, l) {
    switch (t.tag) {
      case 26:
        ga(
          t,
          e,
          l
        ), t.flags & iu && t.memoizedState !== null && Zy(
          l,
          Fe,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        ga(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var n = Fe;
        Fe = Ri(t.stateNode.containerInfo), ga(
          t,
          e,
          l
        ), Fe = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = iu, iu = 16777216, ga(
          t,
          e,
          l
        ), iu = n) : ga(
          t,
          e,
          l
        ));
        break;
      default:
        ga(
          t,
          e,
          l
        );
    }
  }
  function ah(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function cu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          kt = n, ih(
            n,
            t
          );
        }
      ah(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        uh(t), t = t.sibling;
  }
  function uh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        cu(t), t.flags & 2048 && nn(9, t, t.return);
        break;
      case 3:
        cu(t);
        break;
      case 12:
        cu(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, yi(t)) : cu(t);
        break;
      default:
        cu(t);
    }
  }
  function yi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          kt = n, ih(
            n,
            t
          );
        }
      ah(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          nn(8, e, e.return), yi(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, yi(e));
          break;
        default:
          yi(e);
      }
      t = t.sibling;
    }
  }
  function ih(t, e) {
    for (; kt !== null; ) {
      var l = kt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          nn(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Va(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, kt = n;
      else
        t: for (l = t; kt !== null; ) {
          n = kt;
          var a = n.sibling, u = n.return;
          if ($o(n), n === l) {
            kt = null;
            break t;
          }
          if (a !== null) {
            a.return = u, kt = a;
            break t;
          }
          kt = u;
        }
    }
  }
  var iy = {
    getCacheForType: function(t) {
      var e = te(jt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return te(jt).controller.signal;
    }
  }, cy = typeof WeakMap == "function" ? WeakMap : Map, ht = 0, St = null, lt = null, ut = 0, yt = 0, De = null, an = !1, pa = !1, Ns = !1, Ul = 0, Mt = 0, un = 0, Gn = 0, Rs = 0, Ue = 0, ba = 0, su = null, _e = null, Ms = !1, vi = 0, ch = 0, gi = 1 / 0, pi = null, cn = null, Vt = 0, sn = null, Sa = null, ql = 0, Cs = 0, Ds = null, sh = null, fu = 0, Us = null;
  function qe() {
    return (ht & 2) !== 0 && ut !== 0 ? ut & -ut : T.T !== null ? Ls() : Xl();
  }
  function fh() {
    if (Ue === 0)
      if ((ut & 536870912) === 0 || ct) {
        var t = _n;
        _n <<= 1, (_n & 3932160) === 0 && (_n = 262144), Ue = t;
      } else Ue = 536870912;
    return t = Me.current, t !== null && (t.flags |= 32), Ue;
  }
  function Ee(t, e, l) {
    (t === St && (yt === 2 || yt === 9) || t.cancelPendingCommit !== null) && (_a(t, 0), fn(
      t,
      ut,
      Ue,
      !1
    )), Yl(t, l), ((ht & 2) === 0 || t !== St) && (t === St && ((ht & 2) === 0 && (Gn |= l), Mt === 4 && fn(
      t,
      ut,
      Ue,
      !1
    )), ol(t));
  }
  function rh(t, e, l) {
    if ((ht & 6) !== 0) throw Error(f(327));
    var n = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || al(t, e), a = n ? ry(t, e) : xs(t, e, !0), u = n;
    do {
      if (a === 0) {
        pa && !n && fn(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, u && !sy(l)) {
          a = xs(t, e, !1), u = !1;
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
              a = su;
              var d = o.current.memoizedState.isDehydrated;
              if (d && (_a(o, c).flags |= 256), c = xs(
                o,
                c,
                !1
              ), c !== 2) {
                if (Ns && !d) {
                  o.errorRecoveryDisabledLanes |= u, Gn |= u, a = 4;
                  break t;
                }
                u = _e, _e = a, u !== null && (_e === null ? _e = u : _e.push.apply(
                  _e,
                  u
                ));
              }
              a = c;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          _a(t, 0), fn(t, e, 0, !0);
          break;
        }
        t: {
          switch (n = t, u = a, u) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              fn(
                n,
                e,
                Ue,
                !an
              );
              break t;
            case 2:
              _e = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && (a = vi + 300 - Jt(), 10 < a)) {
            if (fn(
              n,
              e,
              Ue,
              !an
            ), Kn(n, 0, !0) !== 0) break t;
            ql = e, n.timeoutHandle = Gh(
              oh.bind(
                null,
                n,
                l,
                _e,
                pi,
                Ms,
                e,
                Ue,
                Gn,
                ba,
                an,
                u,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break t;
          }
          oh(
            n,
            l,
            _e,
            pi,
            Ms,
            e,
            Ue,
            Gn,
            ba,
            an,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ol(t);
  }
  function oh(t, e, l, n, a, u, c, o, d, b, E, R, S, _) {
    if (t.timeoutHandle = -1, R = e.subtreeFlags, R & 8192 || (R & 16785408) === 16785408) {
      R = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: pl
      }, nh(
        e,
        u,
        R
      );
      var L = (u & 62914560) === u ? vi - Jt() : (u & 4194048) === u ? ch - Jt() : 0;
      if (L = Ky(
        R,
        L
      ), L !== null) {
        ql = u, t.cancelPendingCommit = L(
          bh.bind(
            null,
            t,
            e,
            u,
            l,
            n,
            a,
            c,
            o,
            d,
            E,
            R,
            null,
            S,
            _
          )
        ), fn(t, u, c, !b);
        return;
      }
    }
    bh(
      t,
      e,
      u,
      l,
      n,
      a,
      c,
      o,
      d
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
            if (!Ne(u(), a)) return !1;
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
  function fn(t, e, l, n) {
    e &= ~Rs, e &= ~Gn, t.suspendedLanes |= e, t.pingedLanes &= ~e, n && (t.warmLanes |= e), n = t.expirationTimes;
    for (var a = e; 0 < a; ) {
      var u = 31 - he(a), c = 1 << u;
      n[u] = -1, a &= ~c;
    }
    l !== 0 && wl(t, l, e);
  }
  function bi() {
    return (ht & 6) === 0 ? (ru(0), !1) : !0;
  }
  function qs() {
    if (lt !== null) {
      if (yt === 0)
        var t = lt.return;
      else
        t = lt, El = Un = null, Wc(t), oa = null, Ka = 0, t = lt;
      for (; t !== null; )
        Xo(t.alternate, t), t = t.return;
      lt = null;
    }
  }
  function _a(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Ry(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), ql = 0, qs(), St = t, lt = l = Sl(t.current, null), ut = e, yt = 0, De = null, an = !1, pa = al(t, e), Ns = !1, ba = Ue = Rs = Gn = un = Mt = 0, _e = su = null, Ms = !1, (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - he(n), u = 1 << a;
        e |= t[a], n &= ~u;
      }
    return Ul = e, wu(), l;
  }
  function hh(t, e) {
    F = null, T.H = tu, e === ra || e === ku ? (e = Nr(), yt = 3) : e === jc ? (e = Nr(), yt = 4) : yt = e === os ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, De = e, lt === null && (Mt = 1, si(
      t,
      Ge(e, t.current)
    ));
  }
  function dh() {
    var t = Me.current;
    return t === null ? !0 : (ut & 4194048) === ut ? Ze === null : (ut & 62914560) === ut || (ut & 536870912) !== 0 ? t === Ze : !1;
  }
  function mh() {
    var t = T.H;
    return T.H = tu, t === null ? tu : t;
  }
  function yh() {
    var t = T.A;
    return T.A = iy, t;
  }
  function Si() {
    Mt = 4, an || (ut & 4194048) !== ut && Me.current !== null || (pa = !0), (un & 134217727) === 0 && (Gn & 134217727) === 0 || St === null || fn(
      St,
      ut,
      Ue,
      !1
    );
  }
  function xs(t, e, l) {
    var n = ht;
    ht |= 2;
    var a = mh(), u = yh();
    (St !== t || ut !== e) && (pi = null, _a(t, e)), e = !1;
    var c = Mt;
    t: do
      try {
        if (yt !== 0 && lt !== null) {
          var o = lt, d = De;
          switch (yt) {
            case 8:
              qs(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Me.current === null && (e = !0);
              var b = yt;
              if (yt = 0, De = null, Ea(t, o, d, b), l && pa) {
                c = 0;
                break t;
              }
              break;
            default:
              b = yt, yt = 0, De = null, Ea(t, o, d, b);
          }
        }
        fy(), c = Mt;
        break;
      } catch (E) {
        hh(t, E);
      }
    while (!0);
    return e && t.shellSuspendCounter++, El = Un = null, ht = n, T.H = a, T.A = u, lt === null && (St = null, ut = 0, wu()), c;
  }
  function fy() {
    for (; lt !== null; ) vh(lt);
  }
  function ry(t, e) {
    var l = ht;
    ht |= 2;
    var n = mh(), a = yh();
    St !== t || ut !== e ? (pi = null, gi = Jt() + 500, _a(t, e)) : pa = al(
      t,
      e
    );
    t: do
      try {
        if (yt !== 0 && lt !== null) {
          e = lt;
          var u = De;
          e: switch (yt) {
            case 1:
              yt = 0, De = null, Ea(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (Or(u)) {
                yt = 0, De = null, gh(e);
                break;
              }
              e = function() {
                yt !== 2 && yt !== 9 || St !== t || (yt = 7), ol(t);
              }, u.then(e, e);
              break t;
            case 3:
              yt = 7;
              break t;
            case 4:
              yt = 5;
              break t;
            case 7:
              Or(u) ? (yt = 0, De = null, gh(e)) : (yt = 0, De = null, Ea(t, e, u, 7));
              break;
            case 5:
              var c = null;
              switch (lt.tag) {
                case 26:
                  c = lt.memoizedState;
                case 5:
                case 27:
                  var o = lt;
                  if (c ? ld(c) : o.stateNode.complete) {
                    yt = 0, De = null;
                    var d = o.sibling;
                    if (d !== null) lt = d;
                    else {
                      var b = o.return;
                      b !== null ? (lt = b, _i(b)) : lt = null;
                    }
                    break e;
                  }
              }
              yt = 0, De = null, Ea(t, e, u, 5);
              break;
            case 6:
              yt = 0, De = null, Ea(t, e, u, 6);
              break;
            case 8:
              qs(), Mt = 6;
              break t;
            default:
              throw Error(f(462));
          }
        }
        oy();
        break;
      } catch (E) {
        hh(t, E);
      }
    while (!0);
    return El = Un = null, T.H = n, T.A = a, ht = l, lt !== null ? 0 : (St = null, ut = 0, wu(), Mt);
  }
  function oy() {
    for (; lt !== null && !Vn(); )
      vh(lt);
  }
  function vh(t) {
    var e = wo(t.alternate, t, Ul);
    t.memoizedProps = t.pendingProps, e === null ? _i(t) : lt = e;
  }
  function gh(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = xo(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          ut
        );
        break;
      case 11:
        e = xo(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          ut
        );
        break;
      case 5:
        Wc(e);
      default:
        Xo(l, e), e = lt = mr(e, Ul), e = wo(l, e, Ul);
    }
    t.memoizedProps = t.pendingProps, e === null ? _i(t) : lt = e;
  }
  function Ea(t, e, l, n) {
    El = Un = null, Wc(e), oa = null, Ka = 0;
    var a = e.return;
    try {
      if (Pm(
        t,
        a,
        e,
        l,
        ut
      )) {
        Mt = 1, si(
          t,
          Ge(l, t.current)
        ), lt = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw lt = a, u;
      Mt = 1, si(
        t,
        Ge(l, t.current)
      ), lt = null;
      return;
    }
    e.flags & 32768 ? (ct || n === 1 ? t = !0 : pa || (ut & 536870912) !== 0 ? t = !1 : (an = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Me.current, n !== null && n.tag === 13 && (n.flags |= 16384))), ph(e, t)) : _i(e);
  }
  function _i(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        ph(
          e,
          an
        );
        return;
      }
      t = e.return;
      var l = ly(
        e.alternate,
        e,
        Ul
      );
      if (l !== null) {
        lt = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        lt = e;
        return;
      }
      lt = e = t;
    } while (e !== null);
    Mt === 0 && (Mt = 5);
  }
  function ph(t, e) {
    do {
      var l = ny(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, lt = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        lt = t;
        return;
      }
      lt = t = l;
    } while (t !== null);
    Mt = 6, lt = null;
  }
  function bh(t, e, l, n, a, u, c, o, d) {
    t.cancelPendingCommit = null;
    do
      Ei();
    while (Vt !== 0);
    if ((ht & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (u = e.lanes | e.childLanes, u |= Ec, Mu(
        t,
        l,
        u,
        c,
        o,
        d
      ), t === St && (lt = St = null, ut = 0), Sa = e, sn = t, ql = l, Cs = u, Ds = a, sh = n, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, yy(He, function() {
        return Ah(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
        n = T.T, T.T = null, a = x.p, x.p = 2, c = ht, ht |= 4;
        try {
          ay(t, e, l);
        } finally {
          ht = c, x.p = a, T.T = n;
        }
      }
      Vt = 1, Sh(), _h(), Eh();
    }
  }
  function Sh() {
    if (Vt === 1) {
      Vt = 0;
      var t = sn, e = Sa, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = T.T, T.T = null;
        var n = x.p;
        x.p = 2;
        var a = ht;
        ht |= 4;
        try {
          th(e, t);
          var u = Ks, c = ur(t.containerInfo), o = u.focusedElem, d = u.selectionRange;
          if (c !== o && o && o.ownerDocument && ar(
            o.ownerDocument.documentElement,
            o
          )) {
            if (d !== null && gc(o)) {
              var b = d.start, E = d.end;
              if (E === void 0 && (E = b), "selectionStart" in o)
                o.selectionStart = b, o.selectionEnd = Math.min(
                  E,
                  o.value.length
                );
              else {
                var R = o.ownerDocument || document, S = R && R.defaultView || window;
                if (S.getSelection) {
                  var _ = S.getSelection(), L = o.textContent.length, Z = Math.min(d.start, L), bt = d.end === void 0 ? Z : Math.min(d.end, L);
                  !_.extend && Z > bt && (c = bt, bt = Z, Z = c);
                  var v = nr(
                    o,
                    Z
                  ), y = nr(
                    o,
                    bt
                  );
                  if (v && y && (_.rangeCount !== 1 || _.anchorNode !== v.node || _.anchorOffset !== v.offset || _.focusNode !== y.node || _.focusOffset !== y.offset)) {
                    var p = R.createRange();
                    p.setStart(v.node, v.offset), _.removeAllRanges(), Z > bt ? (_.addRange(p), _.extend(y.node, y.offset)) : (p.setEnd(y.node, y.offset), _.addRange(p));
                  }
                }
              }
            }
            for (R = [], _ = o; _ = _.parentNode; )
              _.nodeType === 1 && R.push({
                element: _,
                left: _.scrollLeft,
                top: _.scrollTop
              });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < R.length; o++) {
              var A = R[o];
              A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
            }
          }
          xi = !!Zs, Ks = Zs = null;
        } finally {
          ht = a, x.p = n, T.T = l;
        }
      }
      t.current = e, Vt = 2;
    }
  }
  function _h() {
    if (Vt === 2) {
      Vt = 0;
      var t = sn, e = Sa, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = T.T, T.T = null;
        var n = x.p;
        x.p = 2;
        var a = ht;
        ht |= 4;
        try {
          Wo(t, e.alternate, e);
        } finally {
          ht = a, x.p = n, T.T = l;
        }
      }
      Vt = 3;
    }
  }
  function Eh() {
    if (Vt === 4 || Vt === 3) {
      Vt = 0, Ca();
      var t = sn, e = Sa, l = ql, n = sh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Vt = 5 : (Vt = 0, Sa = sn = null, Th(t, t.pendingLanes));
      var a = t.pendingLanes;
      if (a === 0 && (cn = null), ul(l), e = e.stateNode, Dt && typeof Dt.onCommitFiberRoot == "function")
        try {
          Dt.onCommitFiberRoot(
            yl,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        e = T.T, a = x.p, x.p = 2, T.T = null;
        try {
          for (var u = t.onRecoverableError, c = 0; c < n.length; c++) {
            var o = n[c];
            u(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          T.T = e, x.p = a;
        }
      }
      (ql & 3) !== 0 && Ei(), ol(t), a = t.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? t === Us ? fu++ : (fu = 0, Us = t) : fu = 0, ru(0);
    }
  }
  function Th(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Va(e)));
  }
  function Ei() {
    return Sh(), _h(), Eh(), Ah();
  }
  function Ah() {
    if (Vt !== 5) return !1;
    var t = sn, e = Cs;
    Cs = 0;
    var l = ul(ql), n = T.T, a = x.p;
    try {
      x.p = 32 > l ? 32 : l, T.T = null, l = Ds, Ds = null;
      var u = sn, c = ql;
      if (Vt = 0, Sa = sn = null, ql = 0, (ht & 6) !== 0) throw Error(f(331));
      var o = ht;
      if (ht |= 4, uh(u.current), lh(
        u,
        u.current,
        c,
        l
      ), ht = o, ru(0, !1), Dt && typeof Dt.onPostCommitFiberRoot == "function")
        try {
          Dt.onPostCommitFiberRoot(yl, u);
        } catch {
        }
      return !0;
    } finally {
      x.p = a, T.T = n, Th(t, e);
    }
  }
  function Oh(t, e, l) {
    e = Ge(l, e), e = rs(t.stateNode, e, 2), t = tn(t, e, 2), t !== null && (Yl(t, 2), ol(t));
  }
  function vt(t, e, l) {
    if (t.tag === 3)
      Oh(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Oh(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (cn === null || !cn.has(n))) {
            t = Ge(l, t), l = zo(2), n = tn(e, l, 2), n !== null && (No(
              l,
              n,
              e,
              t
            ), Yl(n, 2), ol(n));
            break;
          }
        }
        e = e.return;
      }
  }
  function Bs(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new cy();
      var a = /* @__PURE__ */ new Set();
      n.set(e, a);
    } else
      a = n.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(e, a));
    a.has(l) || (Ns = !0, a.add(l), t = hy.bind(null, t, e, l), e.then(t, t));
  }
  function hy(t, e, l) {
    var n = t.pingCache;
    n !== null && n.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, St === t && (ut & l) === l && (Mt === 4 || Mt === 3 && (ut & 62914560) === ut && 300 > Jt() - vi ? (ht & 2) === 0 && _a(t, 0) : Rs |= l, ba === ut && (ba = 0)), ol(t);
  }
  function zh(t, e) {
    e === 0 && (e = We()), t = Mn(t, e), t !== null && (Yl(t, e), ol(t));
  }
  function dy(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), zh(t, l);
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
        throw Error(f(314));
    }
    n !== null && n.delete(e), zh(t, l);
  }
  function yy(t, e) {
    return jl(t, e);
  }
  var Ti = null, Ta = null, Hs = !1, Ai = !1, js = !1, rn = 0;
  function ol(t) {
    t !== Ta && t.next === null && (Ta === null ? Ti = Ta = t : Ta = Ta.next = t), Ai = !0, Hs || (Hs = !0, gy());
  }
  function ru(t, e) {
    if (!js && Ai) {
      js = !0;
      do
        for (var l = !1, n = Ti; n !== null; ) {
          if (t !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var c = n.suspendedLanes, o = n.pingedLanes;
              u = (1 << 31 - he(42 | t) + 1) - 1, u &= a & ~(c & ~o), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, Ch(n, u));
          } else
            u = ut, u = Kn(
              n,
              n === St ? u : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (u & 3) === 0 || al(n, u) || (l = !0, Ch(n, u));
          n = n.next;
        }
      while (l);
      js = !1;
    }
  }
  function vy() {
    Nh();
  }
  function Nh() {
    Ai = Hs = !1;
    var t = 0;
    rn !== 0 && Ny() && (t = rn);
    for (var e = Jt(), l = null, n = Ti; n !== null; ) {
      var a = n.next, u = Rh(n, e);
      u === 0 ? (n.next = null, l === null ? Ti = a : l.next = a, a === null && (Ta = l)) : (l = n, (t !== 0 || (u & 3) !== 0) && (Ai = !0)), n = a;
    }
    Vt !== 0 && Vt !== 5 || ru(t), rn !== 0 && (rn = 0);
  }
  function Rh(t, e) {
    for (var l = t.suspendedLanes, n = t.pingedLanes, a = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - he(u), o = 1 << c, d = a[c];
      d === -1 ? ((o & l) === 0 || (o & n) !== 0) && (a[c] = Ae(o, e)) : d <= e && (t.expiredLanes |= o), u &= ~o;
    }
    if (e = St, l = ut, l = Kn(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n = t.callbackNode, l === 0 || t === e && (yt === 2 || yt === 9) || t.cancelPendingCommit !== null)
      return n !== null && n !== null && ml(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || al(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (n !== null && ml(n), ul(l)) {
        case 2:
        case 8:
          l = Zn;
          break;
        case 32:
          l = He;
          break;
        case 268435456:
          l = je;
          break;
        default:
          l = He;
      }
      return n = Mh.bind(null, t), l = jl(l, n), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return n !== null && n !== null && ml(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Mh(t, e) {
    if (Vt !== 0 && Vt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (Ei() && t.callbackNode !== l)
      return null;
    var n = ut;
    return n = Kn(
      t,
      t === St ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n === 0 ? null : (rh(t, n, e), Rh(t, Jt()), t.callbackNode != null && t.callbackNode === l ? Mh.bind(null, t) : null);
  }
  function Ch(t, e) {
    if (Ei()) return null;
    rh(t, e, !0);
  }
  function gy() {
    My(function() {
      (ht & 6) !== 0 ? jl(
        ll,
        vy
      ) : Nh();
    });
  }
  function Ls() {
    if (rn === 0) {
      var t = sa;
      t === 0 && (t = se, se <<= 1, (se & 261888) === 0 && (se = 256)), rn = t;
    }
    return rn;
  }
  function Dh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Uu("" + t);
  }
  function Uh(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function py(t, e, l, n, a) {
    if (e === "submit" && l && l.stateNode === a) {
      var u = Dh(
        (a[fe] || null).action
      ), c = n.submitter;
      c && (e = (e = c[fe] || null) ? Dh(e.formAction) : c.getAttribute("formAction"), e !== null && (u = e, c = null));
      var o = new Hu(
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
                if (rn !== 0) {
                  var d = c ? Uh(a, c) : new FormData(a);
                  as(
                    l,
                    {
                      pending: !0,
                      data: d,
                      method: a.method,
                      action: u
                    },
                    null,
                    d
                  );
                }
              } else
                typeof u == "function" && (o.preventDefault(), d = c ? Uh(a, c) : new FormData(a), as(
                  l,
                  {
                    pending: !0,
                    data: d,
                    method: a.method,
                    action: u
                  },
                  u,
                  d
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var Ys = 0; Ys < _c.length; Ys++) {
    var ws = _c[Ys], by = ws.toLowerCase(), Sy = ws[0].toUpperCase() + ws.slice(1);
    $e(
      by,
      "on" + Sy
    );
  }
  $e(sr, "onAnimationEnd"), $e(fr, "onAnimationIteration"), $e(rr, "onAnimationStart"), $e("dblclick", "onDoubleClick"), $e("focusin", "onFocus"), $e("focusout", "onBlur"), $e(Hm, "onTransitionRun"), $e(jm, "onTransitionStart"), $e(Lm, "onTransitionCancel"), $e(or, "onTransitionEnd"), $("onMouseEnter", ["mouseout", "mouseover"]), $("onMouseLeave", ["mouseout", "mouseover"]), $("onPointerEnter", ["pointerout", "pointerover"]), $("onPointerLeave", ["pointerout", "pointerover"]), G(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), G(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), G("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), G(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), G(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), G(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ou = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), _y = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ou)
  );
  function qh(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var n = t[l], a = n.event;
      n = n.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var c = n.length - 1; 0 <= c; c--) {
            var o = n[c], d = o.instance, b = o.currentTarget;
            if (o = o.listener, d !== u && a.isPropagationStopped())
              break t;
            u = o, a.currentTarget = b;
            try {
              u(a);
            } catch (E) {
              Yu(E);
            }
            a.currentTarget = null, u = d;
          }
        else
          for (c = 0; c < n.length; c++) {
            if (o = n[c], d = o.instance, b = o.currentTarget, o = o.listener, d !== u && a.isPropagationStopped())
              break t;
            u = o, a.currentTarget = b;
            try {
              u(a);
            } catch (E) {
              Yu(E);
            }
            a.currentTarget = null, u = d;
          }
      }
    }
  }
  function nt(t, e) {
    var l = e[Ua];
    l === void 0 && (l = e[Ua] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    l.has(n) || (xh(e, t, 2, !1), l.add(n));
  }
  function Gs(t, e, l) {
    var n = 0;
    e && (n |= 4), xh(
      l,
      t,
      n,
      e
    );
  }
  var Oi = "_reactListening" + Math.random().toString(36).slice(2);
  function Xs(t) {
    if (!t[Oi]) {
      t[Oi] = !0, m.forEach(function(l) {
        l !== "selectionchange" && (_y.has(l) || Gs(l, !1, t), Gs(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Oi] || (e[Oi] = !0, Gs("selectionchange", !1, e));
    }
  }
  function xh(t, e, l, n) {
    switch (fd(e)) {
      case 2:
        var a = Wy;
        break;
      case 8:
        a = $y;
        break;
      default:
        a = nf;
    }
    l = a.bind(
      null,
      e,
      l,
      t
    ), a = void 0, !sc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = !0), n ? a !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: a
    }) : t.addEventListener(e, l, !0) : a !== void 0 ? t.addEventListener(e, l, {
      passive: a
    }) : t.addEventListener(e, l, !1);
  }
  function Qs(t, e, l, n, a) {
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
              var d = c.tag;
              if ((d === 3 || d === 4) && c.stateNode.containerInfo === a)
                return;
              c = c.return;
            }
          for (; o !== null; ) {
            if (c = Vl(o), c === null) return;
            if (d = c.tag, d === 5 || d === 6 || d === 26 || d === 27) {
              n = u = c;
              continue t;
            }
            o = o.parentNode;
          }
        }
        n = n.return;
      }
    Lf(function() {
      var b = u, E = ic(l), R = [];
      t: {
        var S = hr.get(t);
        if (S !== void 0) {
          var _ = Hu, L = t;
          switch (t) {
            case "keypress":
              if (xu(l) === 0) break t;
            case "keydown":
            case "keyup":
              _ = mm;
              break;
            case "focusin":
              L = "focus", _ = hc;
              break;
            case "focusout":
              L = "blur", _ = hc;
              break;
            case "beforeblur":
            case "afterblur":
              _ = hc;
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
              _ = Gf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = lm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = gm;
              break;
            case sr:
            case fr:
            case rr:
              _ = um;
              break;
            case or:
              _ = bm;
              break;
            case "scroll":
            case "scrollend":
              _ = tm;
              break;
            case "wheel":
              _ = _m;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = cm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = Qf;
              break;
            case "toggle":
            case "beforetoggle":
              _ = Tm;
          }
          var Z = (e & 4) !== 0, bt = !Z && (t === "scroll" || t === "scrollend"), v = Z ? S !== null ? S + "Capture" : null : S;
          Z = [];
          for (var y = b, p; y !== null; ) {
            var A = y;
            if (p = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || p === null || v === null || (A = qa(y, v), A != null && Z.push(
              hu(y, A, p)
            )), bt) break;
            y = y.return;
          }
          0 < Z.length && (S = new _(
            S,
            L,
            null,
            l,
            E
          ), R.push({ event: S, listeners: Z }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (S = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout", S && l !== uc && (L = l.relatedTarget || l.fromElement) && (Vl(L) || L[Ql]))
            break t;
          if ((_ || S) && (S = E.window === E ? E : (S = E.ownerDocument) ? S.defaultView || S.parentWindow : window, _ ? (L = l.relatedTarget || l.toElement, _ = b, L = L ? Vl(L) : null, L !== null && (bt = M(L), Z = L.tag, L !== bt || Z !== 5 && Z !== 27 && Z !== 6) && (L = null)) : (_ = null, L = b), _ !== L)) {
            if (Z = Gf, A = "onMouseLeave", v = "onMouseEnter", y = "mouse", (t === "pointerout" || t === "pointerover") && (Z = Qf, A = "onPointerLeave", v = "onPointerEnter", y = "pointer"), bt = _ == null ? S : On(_), p = L == null ? S : On(L), S = new Z(
              A,
              y + "leave",
              _,
              l,
              E
            ), S.target = bt, S.relatedTarget = p, A = null, Vl(E) === b && (Z = new Z(
              v,
              y + "enter",
              L,
              l,
              E
            ), Z.target = p, Z.relatedTarget = bt, A = Z), bt = A, _ && L)
              e: {
                for (Z = Ey, v = _, y = L, p = 0, A = v; A; A = Z(A))
                  p++;
                A = 0;
                for (var Q = y; Q; Q = Z(Q))
                  A++;
                for (; 0 < p - A; )
                  v = Z(v), p--;
                for (; 0 < A - p; )
                  y = Z(y), A--;
                for (; p--; ) {
                  if (v === y || y !== null && v === y.alternate) {
                    Z = v;
                    break e;
                  }
                  v = Z(v), y = Z(y);
                }
                Z = null;
              }
            else Z = null;
            _ !== null && Bh(
              R,
              S,
              _,
              Z,
              !1
            ), L !== null && bt !== null && Bh(
              R,
              bt,
              L,
              Z,
              !0
            );
          }
        }
        t: {
          if (S = b ? On(b) : window, _ = S.nodeName && S.nodeName.toLowerCase(), _ === "select" || _ === "input" && S.type === "file")
            var rt = Ff;
          else if (Wf(S))
            if (If)
              rt = qm;
            else {
              rt = Dm;
              var X = Cm;
            }
          else
            _ = S.nodeName, !_ || _.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? b && ac(b.elementType) && (rt = Ff) : rt = Um;
          if (rt && (rt = rt(t, b))) {
            $f(
              R,
              rt,
              l,
              E
            );
            break t;
          }
          X && X(t, S, b), t === "focusout" && b && S.type === "number" && b.memoizedProps.value != null && nc(S, "number", S.value);
        }
        switch (X = b ? On(b) : window, t) {
          case "focusin":
            (Wf(X) || X.contentEditable === "true") && (ta = X, pc = b, Ga = null);
            break;
          case "focusout":
            Ga = pc = ta = null;
            break;
          case "mousedown":
            bc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            bc = !1, ir(R, l, E);
            break;
          case "selectionchange":
            if (Bm) break;
          case "keydown":
          case "keyup":
            ir(R, l, E);
        }
        var I;
        if (mc)
          t: {
            switch (t) {
              case "compositionstart":
                var it = "onCompositionStart";
                break t;
              case "compositionend":
                it = "onCompositionEnd";
                break t;
              case "compositionupdate":
                it = "onCompositionUpdate";
                break t;
            }
            it = void 0;
          }
        else
          Pn ? Jf(t, l) && (it = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (it = "onCompositionStart");
        it && (Vf && l.locale !== "ko" && (Pn || it !== "onCompositionStart" ? it === "onCompositionEnd" && Pn && (I = Yf()) : (Jl = E, fc = "value" in Jl ? Jl.value : Jl.textContent, Pn = !0)), X = zi(b, it), 0 < X.length && (it = new Xf(
          it,
          t,
          null,
          l,
          E
        ), R.push({ event: it, listeners: X }), I ? it.data = I : (I = kf(l), I !== null && (it.data = I)))), (I = Om ? zm(t, l) : Nm(t, l)) && (it = zi(b, "onBeforeInput"), 0 < it.length && (X = new Xf(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          E
        ), R.push({
          event: X,
          listeners: it
        }), X.data = I)), py(
          R,
          t,
          b,
          l,
          E
        );
      }
      qh(R, e);
    });
  }
  function hu(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function zi(t, e) {
    for (var l = e + "Capture", n = []; t !== null; ) {
      var a = t, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = qa(t, l), a != null && n.unshift(
        hu(t, a, u)
      ), a = qa(t, e), a != null && n.push(
        hu(t, a, u)
      )), t.tag === 3) return n;
      t = t.return;
    }
    return [];
  }
  function Ey(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Bh(t, e, l, n, a) {
    for (var u = e._reactName, c = []; l !== null && l !== n; ) {
      var o = l, d = o.alternate, b = o.stateNode;
      if (o = o.tag, d !== null && d === n) break;
      o !== 5 && o !== 26 && o !== 27 || b === null || (d = b, a ? (b = qa(l, u), b != null && c.unshift(
        hu(l, b, d)
      )) : a || (b = qa(l, u), b != null && c.push(
        hu(l, b, d)
      ))), l = l.return;
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var Ty = /\r\n?/g, Ay = /\u0000|\uFFFD/g;
  function Hh(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ty, `
`).replace(Ay, "");
  }
  function jh(t, e) {
    return e = Hh(e), Hh(t) === e;
  }
  function pt(t, e, l, n, a, u) {
    switch (l) {
      case "children":
        typeof n == "string" ? e === "body" || e === "textarea" && n === "" || $n(t, n) : (typeof n == "number" || typeof n == "bigint") && e !== "body" && $n(t, "" + n);
        break;
      case "className":
        ve(t, "class", n);
        break;
      case "tabIndex":
        ve(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ve(t, l, n);
        break;
      case "style":
        Hf(t, n, u);
        break;
      case "data":
        if (e !== "object") {
          ve(t, "data", n);
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
        n = Uu("" + n), t.setAttribute(l, n);
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
          typeof u == "function" && (l === "formAction" ? (e !== "input" && pt(t, e, "name", a.name, a, null), pt(
            t,
            e,
            "formEncType",
            a.formEncType,
            a,
            null
          ), pt(
            t,
            e,
            "formMethod",
            a.formMethod,
            a,
            null
          ), pt(
            t,
            e,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (pt(t, e, "encType", a.encType, a, null), pt(t, e, "method", a.method, a, null), pt(t, e, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = Uu("" + n), t.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (t.onclick = pl);
        break;
      case "onScroll":
        n != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && nt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(f(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(f(60));
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
        l = Uu("" + n), t.setAttributeNS(
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
        nt("beforetoggle", t), nt("toggle", t), Le(t, "popover", n);
        break;
      case "xlinkActuate":
        Ht(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Ht(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Ht(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Ht(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Ht(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Ht(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Ht(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Ht(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Ht(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        Le(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Id.get(l) || l, Le(t, l, n));
    }
  }
  function Vs(t, e, l, n, a, u) {
    switch (l) {
      case "style":
        Hf(t, n, u);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(f(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string" ? $n(t, n) : (typeof n == "number" || typeof n == "bigint") && $n(t, "" + n);
        break;
      case "onScroll":
        n != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && nt("scrollend", t);
        break;
      case "onClick":
        n != null && (t.onclick = pl);
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
        if (!D.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), e = l.slice(2, a ? l.length - 7 : void 0), u = t[fe] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, a), typeof n == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, n, a);
              break t;
            }
            l in t ? t[l] = n : n === !0 ? t.setAttribute(l, "") : Le(t, l, n);
          }
    }
  }
  function le(t, e, l) {
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
        nt("error", t), nt("load", t);
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
                  throw Error(f(137, e));
                default:
                  pt(t, e, u, c, l, null);
              }
          }
        a && pt(t, e, "srcSet", l.srcSet, l, null), n && pt(t, e, "src", l.src, l, null);
        return;
      case "input":
        nt("invalid", t);
        var o = u = c = a = null, d = null, b = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var E = l[n];
            if (E != null)
              switch (n) {
                case "name":
                  a = E;
                  break;
                case "type":
                  c = E;
                  break;
                case "checked":
                  d = E;
                  break;
                case "defaultChecked":
                  b = E;
                  break;
                case "value":
                  u = E;
                  break;
                case "defaultValue":
                  o = E;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (E != null)
                    throw Error(f(137, e));
                  break;
                default:
                  pt(t, e, n, E, l, null);
              }
          }
        Uf(
          t,
          u,
          o,
          d,
          b,
          c,
          a,
          !1
        );
        return;
      case "select":
        nt("invalid", t), n = c = u = null;
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
                pt(t, e, a, o, l, null);
            }
        e = u, l = c, t.multiple = !!n, e != null ? Wn(t, !!n, e, !1) : l != null && Wn(t, !!n, l, !0);
        return;
      case "textarea":
        nt("invalid", t), u = a = n = null;
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
                if (o != null) throw Error(f(91));
                break;
              default:
                pt(t, e, c, o, l, null);
            }
        xf(t, n, a, u);
        return;
      case "option":
        for (d in l)
          l.hasOwnProperty(d) && (n = l[d], n != null) && (d === "selected" ? t.selected = n && typeof n != "function" && typeof n != "symbol" : pt(t, e, d, n, l, null));
        return;
      case "dialog":
        nt("beforetoggle", t), nt("toggle", t), nt("cancel", t), nt("close", t);
        break;
      case "iframe":
      case "object":
        nt("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ou.length; n++)
          nt(ou[n], t);
        break;
      case "image":
        nt("error", t), nt("load", t);
        break;
      case "details":
        nt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        nt("error", t), nt("load", t);
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
                throw Error(f(137, e));
              default:
                pt(t, e, b, n, l, null);
            }
        return;
      default:
        if (ac(e)) {
          for (E in l)
            l.hasOwnProperty(E) && (n = l[E], n !== void 0 && Vs(
              t,
              e,
              E,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (o in l)
      l.hasOwnProperty(o) && (n = l[o], n != null && pt(t, e, o, n, l, null));
  }
  function Oy(t, e, l, n) {
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
        var a = null, u = null, c = null, o = null, d = null, b = null, E = null;
        for (_ in l) {
          var R = l[_];
          if (l.hasOwnProperty(_) && R != null)
            switch (_) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = R;
              default:
                n.hasOwnProperty(_) || pt(t, e, _, null, n, R);
            }
        }
        for (var S in n) {
          var _ = n[S];
          if (R = l[S], n.hasOwnProperty(S) && (_ != null || R != null))
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
                E = _;
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
                  throw Error(f(137, e));
                break;
              default:
                _ !== R && pt(
                  t,
                  e,
                  S,
                  _,
                  n,
                  R
                );
            }
        }
        lc(
          t,
          c,
          o,
          d,
          b,
          E,
          u,
          a
        );
        return;
      case "select":
        _ = c = o = S = null;
        for (u in l)
          if (d = l[u], l.hasOwnProperty(u) && d != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                _ = d;
              default:
                n.hasOwnProperty(u) || pt(
                  t,
                  e,
                  u,
                  null,
                  n,
                  d
                );
            }
        for (a in n)
          if (u = n[a], d = l[a], n.hasOwnProperty(a) && (u != null || d != null))
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
                u !== d && pt(
                  t,
                  e,
                  a,
                  u,
                  n,
                  d
                );
            }
        e = o, l = c, n = _, S != null ? Wn(t, !!l, S, !1) : !!n != !!l && (e != null ? Wn(t, !!l, e, !0) : Wn(t, !!l, l ? [] : "", !1));
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
                pt(t, e, o, null, n, a);
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
                if (a != null) throw Error(f(91));
                break;
              default:
                a !== u && pt(t, e, c, a, n, u);
            }
        qf(t, S, _);
        return;
      case "option":
        for (var L in l)
          S = l[L], l.hasOwnProperty(L) && S != null && !n.hasOwnProperty(L) && (L === "selected" ? t.selected = !1 : pt(
            t,
            e,
            L,
            null,
            n,
            S
          ));
        for (d in n)
          S = n[d], _ = l[d], n.hasOwnProperty(d) && S !== _ && (S != null || _ != null) && (d === "selected" ? t.selected = S && typeof S != "function" && typeof S != "symbol" : pt(
            t,
            e,
            d,
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
        for (var Z in l)
          S = l[Z], l.hasOwnProperty(Z) && S != null && !n.hasOwnProperty(Z) && pt(t, e, Z, null, n, S);
        for (b in n)
          if (S = n[b], _ = l[b], n.hasOwnProperty(b) && S !== _ && (S != null || _ != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(f(137, e));
                break;
              default:
                pt(
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
        if (ac(e)) {
          for (var bt in l)
            S = l[bt], l.hasOwnProperty(bt) && S !== void 0 && !n.hasOwnProperty(bt) && Vs(
              t,
              e,
              bt,
              void 0,
              n,
              S
            );
          for (E in n)
            S = n[E], _ = l[E], !n.hasOwnProperty(E) || S === _ || S === void 0 && _ === void 0 || Vs(
              t,
              e,
              E,
              S,
              n,
              _
            );
          return;
        }
    }
    for (var v in l)
      S = l[v], l.hasOwnProperty(v) && S != null && !n.hasOwnProperty(v) && pt(t, e, v, null, n, S);
    for (R in n)
      S = n[R], _ = l[R], !n.hasOwnProperty(R) || S === _ || S == null && _ == null || pt(t, e, R, S, n, _);
  }
  function Lh(t) {
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
  function zy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], u = a.transferSize, c = a.initiatorType, o = a.duration;
        if (u && o && Lh(c)) {
          for (c = 0, o = a.responseEnd, n += 1; n < l.length; n++) {
            var d = l[n], b = d.startTime;
            if (b > o) break;
            var E = d.transferSize, R = d.initiatorType;
            E && Lh(R) && (d = d.responseEnd, c += E * (d < o ? 1 : (o - b) / (d - b)));
          }
          if (--n, e += 8 * (u + c) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Zs = null, Ks = null;
  function Ni(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Yh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function wh(t, e) {
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
  function Js(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var ks = null;
  function Ny() {
    var t = window.event;
    return t && t.type === "popstate" ? t === ks ? !1 : (ks = t, !0) : (ks = null, !1);
  }
  var Gh = typeof setTimeout == "function" ? setTimeout : void 0, Ry = typeof clearTimeout == "function" ? clearTimeout : void 0, Xh = typeof Promise == "function" ? Promise : void 0, My = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xh < "u" ? function(t) {
    return Xh.resolve(null).then(t).catch(Cy);
  } : Gh;
  function Cy(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function on(t) {
    return t === "head";
  }
  function Qh(t, e) {
    var l = e, n = 0;
    do {
      var a = l.nextSibling;
      if (t.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            t.removeChild(a), Na(e);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          du(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, du(l);
          for (var u = l.firstChild; u; ) {
            var c = u.nextSibling, o = u.nodeName;
            u[Tn] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = c;
          }
        } else
          l === "body" && du(t.ownerDocument.body);
      l = a;
    } while (l);
    Na(e);
  }
  function Vh(t, e) {
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
  function Ws(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ws(l), An(l);
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
        if (!t[Tn])
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
      if (t = Ke(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Uy(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ke(t.nextSibling), t === null)) return null;
    return t;
  }
  function Zh(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ke(t.nextSibling), t === null)) return null;
    return t;
  }
  function $s(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Fs(t) {
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
  function Ke(t) {
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
  var Is = null;
  function Kh(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return Ke(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Jh(t) {
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
  function kh(t, e, l) {
    switch (e = Ni(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(f(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(f(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function du(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    An(t);
  }
  var Je = /* @__PURE__ */ new Map(), Wh = /* @__PURE__ */ new Set();
  function Ri(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var xl = x.d;
  x.d = {
    f: xy,
    r: By,
    D: Hy,
    C: jy,
    L: Ly,
    m: Yy,
    X: Gy,
    S: wy,
    M: Xy
  };
  function xy() {
    var t = xl.f(), e = bi();
    return t || e;
  }
  function By(t) {
    var e = il(t);
    e !== null && e.tag === 5 && e.type === "form" ? oo(e) : xl.r(t);
  }
  var Aa = typeof document > "u" ? null : document;
  function $h(t, e, l) {
    var n = Aa;
    if (n && typeof e == "string" && e) {
      var a = Ye(e);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), Wh.has(a) || (Wh.add(a), t = { rel: t, crossOrigin: l, href: e }, n.querySelector(a) === null && (e = n.createElement("link"), le(e, "link", t), Ut(e), n.head.appendChild(e)));
    }
  }
  function Hy(t) {
    xl.D(t), $h("dns-prefetch", t, null);
  }
  function jy(t, e) {
    xl.C(t, e), $h("preconnect", t, e);
  }
  function Ly(t, e, l) {
    xl.L(t, e, l);
    var n = Aa;
    if (n && t && e) {
      var a = 'link[rel="preload"][as="' + Ye(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Ye(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Ye(
        l.imageSizes
      ) + '"]')) : a += '[href="' + Ye(t) + '"]';
      var u = a;
      switch (e) {
        case "style":
          u = Oa(t);
          break;
        case "script":
          u = za(t);
      }
      Je.has(u) || (t = w(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Je.set(u, t), n.querySelector(a) !== null || e === "style" && n.querySelector(mu(u)) || e === "script" && n.querySelector(yu(u)) || (e = n.createElement("link"), le(e, "link", t), Ut(e), n.head.appendChild(e)));
    }
  }
  function Yy(t, e) {
    xl.m(t, e);
    var l = Aa;
    if (l && t) {
      var n = e && typeof e.as == "string" ? e.as : "script", a = 'link[rel="modulepreload"][as="' + Ye(n) + '"][href="' + Ye(t) + '"]', u = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = za(t);
      }
      if (!Je.has(u) && (t = w({ rel: "modulepreload", href: t }, e), Je.set(u, t), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(yu(u)))
              return;
        }
        n = l.createElement("link"), le(n, "link", t), Ut(n), l.head.appendChild(n);
      }
    }
  }
  function wy(t, e, l) {
    xl.S(t, e, l);
    var n = Aa;
    if (n && t) {
      var a = Zl(n).hoistableStyles, u = Oa(t);
      e = e || "default";
      var c = a.get(u);
      if (!c) {
        var o = { loading: 0, preload: null };
        if (c = n.querySelector(
          mu(u)
        ))
          o.loading = 5;
        else {
          t = w(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = Je.get(u)) && Ps(t, l);
          var d = c = n.createElement("link");
          Ut(d), le(d, "link", t), d._p = new Promise(function(b, E) {
            d.onload = b, d.onerror = E;
          }), d.addEventListener("load", function() {
            o.loading |= 1;
          }), d.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, Mi(c, e, n);
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
    xl.X(t, e);
    var l = Aa;
    if (l && t) {
      var n = Zl(l).hoistableScripts, a = za(t), u = n.get(a);
      u || (u = l.querySelector(yu(a)), u || (t = w({ src: t, async: !0 }, e), (e = Je.get(a)) && tf(t, e), u = l.createElement("script"), Ut(u), le(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Xy(t, e) {
    xl.M(t, e);
    var l = Aa;
    if (l && t) {
      var n = Zl(l).hoistableScripts, a = za(t), u = n.get(a);
      u || (u = l.querySelector(yu(a)), u || (t = w({ src: t, async: !0, type: "module" }, e), (e = Je.get(a)) && tf(t, e), u = l.createElement("script"), Ut(u), le(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Fh(t, e, l, n) {
    var a = (a = k.current) ? Ri(a) : null;
    if (!a) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Oa(l.href), l = Zl(
          a
        ).hoistableStyles, n = l.get(e), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = Oa(l.href);
          var u = Zl(
            a
          ).hoistableStyles, c = u.get(t);
          if (c || (a = a.ownerDocument || a, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, c), (u = a.querySelector(
            mu(t)
          )) && !u._p && (c.instance = u, c.state.loading = 5), Je.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Je.set(t, l), u || Qy(
            a,
            t,
            l,
            c.state
          ))), e && n === null)
            throw Error(f(528, ""));
          return c;
        }
        if (e && n !== null)
          throw Error(f(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = za(l), l = Zl(
          a
        ).hoistableScripts, n = l.get(e), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, t));
    }
  }
  function Oa(t) {
    return 'href="' + Ye(t) + '"';
  }
  function mu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Ih(t) {
    return w({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Qy(t, e, l, n) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? n.loading = 1 : (e = t.createElement("link"), n.preload = e, e.addEventListener("load", function() {
      return n.loading |= 1;
    }), e.addEventListener("error", function() {
      return n.loading |= 2;
    }), le(e, "link", l), Ut(e), t.head.appendChild(e));
  }
  function za(t) {
    return '[src="' + Ye(t) + '"]';
  }
  function yu(t) {
    return "script[async]" + t;
  }
  function Ph(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var n = t.querySelector(
            'style[data-href~="' + Ye(l.href) + '"]'
          );
          if (n)
            return e.instance = n, Ut(n), n;
          var a = w({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (t.ownerDocument || t).createElement(
            "style"
          ), Ut(n), le(n, "style", a), Mi(n, l.precedence, t), e.instance = n;
        case "stylesheet":
          a = Oa(l.href);
          var u = t.querySelector(
            mu(a)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, Ut(u), u;
          n = Ih(l), (a = Je.get(a)) && Ps(n, a), u = (t.ownerDocument || t).createElement("link"), Ut(u);
          var c = u;
          return c._p = new Promise(function(o, d) {
            c.onload = o, c.onerror = d;
          }), le(u, "link", n), e.state.loading |= 4, Mi(u, l.precedence, t), e.instance = u;
        case "script":
          return u = za(l.src), (a = t.querySelector(
            yu(u)
          )) ? (e.instance = a, Ut(a), a) : (n = l, (a = Je.get(u)) && (n = w({}, l), tf(n, a)), t = t.ownerDocument || t, a = t.createElement("script"), Ut(a), le(a, "link", n), t.head.appendChild(a), e.instance = a);
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (n = e.instance, e.state.loading |= 4, Mi(n, l.precedence, t));
    return e.instance;
  }
  function Mi(t, e, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, u = a, c = 0; c < n.length; c++) {
      var o = n[c];
      if (o.dataset.precedence === e) u = o;
      else if (u !== a) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function Ps(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function tf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Ci = null;
  function td(t, e, l) {
    if (Ci === null) {
      var n = /* @__PURE__ */ new Map(), a = Ci = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = Ci, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(t)) return n;
    for (n.set(t, null), l = l.getElementsByTagName(t), a = 0; a < l.length; a++) {
      var u = l[a];
      if (!(u[Tn] || u[Qt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(e) || "";
        c = t + c;
        var o = n.get(c);
        o ? o.push(u) : n.set(c, [u]);
      }
    }
    return n;
  }
  function ed(t, e, l) {
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
  function ld(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Zy(t, e, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = Oa(n.href), u = e.querySelector(
          mu(a)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Di.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Ut(u);
          return;
        }
        u = e.ownerDocument || e, n = Ih(n), (a = Je.get(a)) && Ps(n, a), u = u.createElement("link"), Ut(u);
        var c = u;
        c._p = new Promise(function(o, d) {
          c.onload = o, c.onerror = d;
        }), le(u, "link", n), l.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = Di.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var ef = 0;
  function Ky(t, e) {
    return t.stylesheets && t.count === 0 && qi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (t.stylesheets && qi(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && ef === 0 && (ef = 62500 * zy());
      var a = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && qi(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > ef ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function Di() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) qi(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Ui = null;
  function qi(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Ui = /* @__PURE__ */ new Map(), e.forEach(Jy, t), Ui = null, Di.call(t));
  }
  function Jy(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Ui.get(t);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Ui.set(t, l);
        for (var a = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < a.length; u++) {
          var c = a[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), n = c);
        }
        n && l.set(null, n);
      }
      a = e.instance, c = a.getAttribute("data-precedence"), u = l.get(c) || n, u === n && l.set(null, a), l.set(c, a), this.count++, n = Di.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), u ? u.parentNode.insertBefore(a, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), e.state.loading |= 4;
    }
  }
  var vu = {
    $$typeof: Xt,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0
  };
  function ky(t, e, l, n, a, u, c, o, d) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Jn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jn(0), this.hiddenUpdates = Jn(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function nd(t, e, l, n, a, u, c, o, d, b, E, R) {
    return t = new ky(
      t,
      e,
      l,
      c,
      d,
      b,
      E,
      R,
      o
    ), e = 1, u === !0 && (e |= 24), u = Re(3, null, null, e), t.current = u, u.stateNode = t, e = xc(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: e
    }, Lc(u), t;
  }
  function ad(t) {
    return t ? (t = na, t) : na;
  }
  function ud(t, e, l, n, a, u) {
    a = ad(a), n.context === null ? n.context = a : n.pendingContext = a, n = Pl(e), n.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (n.callback = u), l = tn(t, n, e), l !== null && (Ee(l, t, e), ka(l, t, e));
  }
  function id(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function lf(t, e) {
    id(t, e), (t = t.alternate) && id(t, e);
  }
  function cd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Mn(t, 67108864);
      e !== null && Ee(e, t, 67108864), lf(t, 67108864);
    }
  }
  function sd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = qe();
      e = kn(e);
      var l = Mn(t, e);
      l !== null && Ee(l, t, e), lf(t, e);
    }
  }
  var xi = !0;
  function Wy(t, e, l, n) {
    var a = T.T;
    T.T = null;
    var u = x.p;
    try {
      x.p = 2, nf(t, e, l, n);
    } finally {
      x.p = u, T.T = a;
    }
  }
  function $y(t, e, l, n) {
    var a = T.T;
    T.T = null;
    var u = x.p;
    try {
      x.p = 8, nf(t, e, l, n);
    } finally {
      x.p = u, T.T = a;
    }
  }
  function nf(t, e, l, n) {
    if (xi) {
      var a = af(n);
      if (a === null)
        Qs(
          t,
          e,
          n,
          Bi,
          l
        ), rd(t, n);
      else if (Iy(
        a,
        t,
        e,
        l,
        n
      ))
        n.stopPropagation();
      else if (rd(t, n), e & 4 && -1 < Fy.indexOf(t)) {
        for (; a !== null; ) {
          var u = il(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = nl(u.pendingLanes);
                  if (c !== 0) {
                    var o = u;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; c; ) {
                      var d = 1 << 31 - he(c);
                      o.entanglements[1] |= d, c &= ~d;
                    }
                    ol(u), (ht & 6) === 0 && (gi = Jt() + 500, ru(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = Mn(u, 2), o !== null && Ee(o, u, 2), bi(), lf(u, 2);
            }
          if (u = af(n), u === null && Qs(
            t,
            e,
            n,
            Bi,
            l
          ), u === a) break;
          a = u;
        }
        a !== null && n.stopPropagation();
      } else
        Qs(
          t,
          e,
          n,
          null,
          l
        );
    }
  }
  function af(t) {
    return t = ic(t), uf(t);
  }
  var Bi = null;
  function uf(t) {
    if (Bi = null, t = Vl(t), t !== null) {
      var e = M(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = q(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = Y(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Bi = t, null;
  }
  function fd(t) {
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
        switch ($i()) {
          case ll:
            return 2;
          case Zn:
            return 8;
          case He:
          case Fi:
            return 32;
          case je:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var cf = !1, hn = null, dn = null, mn = null, gu = /* @__PURE__ */ new Map(), pu = /* @__PURE__ */ new Map(), yn = [], Fy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function rd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        hn = null;
        break;
      case "dragenter":
      case "dragleave":
        dn = null;
        break;
      case "mouseover":
      case "mouseout":
        mn = null;
        break;
      case "pointerover":
      case "pointerout":
        gu.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pu.delete(e.pointerId);
    }
  }
  function bu(t, e, l, n, a, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: u,
      targetContainers: [a]
    }, e !== null && (e = il(e), e !== null && cd(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
  }
  function Iy(t, e, l, n, a) {
    switch (e) {
      case "focusin":
        return hn = bu(
          hn,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return dn = bu(
          dn,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return mn = bu(
          mn,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var u = a.pointerId;
        return gu.set(
          u,
          bu(
            gu.get(u) || null,
            t,
            e,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return u = a.pointerId, pu.set(
          u,
          bu(
            pu.get(u) || null,
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
  function od(t) {
    var e = Vl(t.target);
    if (e !== null) {
      var l = M(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = q(l), e !== null) {
            t.blockedOn = e, En(t.priority, function() {
              sd(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = Y(l), e !== null) {
            t.blockedOn = e, En(t.priority, function() {
              sd(l);
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
  function Hi(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = af(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        uc = n, l.target.dispatchEvent(n), uc = null;
      } else
        return e = il(l), e !== null && cd(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function hd(t, e, l) {
    Hi(t) && l.delete(e);
  }
  function Py() {
    cf = !1, hn !== null && Hi(hn) && (hn = null), dn !== null && Hi(dn) && (dn = null), mn !== null && Hi(mn) && (mn = null), gu.forEach(hd), pu.forEach(hd);
  }
  function ji(t, e) {
    t.blockedOn === e && (t.blockedOn = null, cf || (cf = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      Py
    )));
  }
  var Li = null;
  function dd(t) {
    Li !== t && (Li = t, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        Li === t && (Li = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], n = t[e + 1], a = t[e + 2];
          if (typeof n != "function") {
            if (uf(n || l) === null)
              continue;
            break;
          }
          var u = il(l);
          u !== null && (t.splice(e, 3), e -= 3, as(
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
  function Na(t) {
    function e(d) {
      return ji(d, t);
    }
    hn !== null && ji(hn, t), dn !== null && ji(dn, t), mn !== null && ji(mn, t), gu.forEach(e), pu.forEach(e);
    for (var l = 0; l < yn.length; l++) {
      var n = yn[l];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < yn.length && (l = yn[0], l.blockedOn === null); )
      od(l), l.blockedOn === null && yn.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], u = l[n + 1], c = a[fe] || null;
        if (typeof u == "function")
          c || dd(l);
        else if (c) {
          var o = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, c = u[fe] || null)
              o = c.formAction;
            else if (uf(a) !== null) continue;
          } else o = c.action;
          typeof o == "function" ? l[n + 1] = o : (l.splice(n, 3), n -= 3), dd(l);
        }
      }
  }
  function md() {
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
  function sf(t) {
    this._internalRoot = t;
  }
  Yi.prototype.render = sf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(f(409));
    var l = e.current, n = qe();
    ud(l, n, t, e, null, null);
  }, Yi.prototype.unmount = sf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      ud(t.current, 2, null, t, null, null), bi(), e[Ql] = null;
    }
  };
  function Yi(t) {
    this._internalRoot = t;
  }
  Yi.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Xl();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < yn.length && e !== 0 && e < yn[l].priority; l++) ;
      yn.splice(l, 0, t), l === 0 && od(t);
    }
  };
  var yd = i.version;
  if (yd !== "19.2.4")
    throw Error(
      f(
        527,
        yd,
        "19.2.4"
      )
    );
  x.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
    return t = N(e), t = t !== null ? J(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var tv = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: T,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wi.isDisabled && wi.supportsFiber)
      try {
        yl = wi.inject(
          tv
        ), Dt = wi;
      } catch {
      }
  }
  return _u.createRoot = function(t, e) {
    if (!g(t)) throw Error(f(299));
    var l = !1, n = "", a = Eo, u = To, c = Ao;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), e = nd(
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
      md
    ), t[Ql] = e.current, Xs(t), new sf(e);
  }, _u.hydrateRoot = function(t, e, l) {
    if (!g(t)) throw Error(f(299));
    var n = !1, a = "", u = Eo, c = To, o = Ao, d = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (o = l.onRecoverableError), l.formState !== void 0 && (d = l.formState)), e = nd(
      t,
      1,
      !0,
      e,
      l ?? null,
      n,
      a,
      d,
      u,
      c,
      o,
      md
    ), e.context = ad(null), l = e.current, n = qe(), n = kn(n), a = Pl(n), a.callback = null, tn(l, a, n), l = n, e.current.lanes = l, Yl(e, l), ol(e), t[Ql] = e.current, Xs(t), new Yi(e);
  }, _u.version = "19.2.4", _u;
}
var Od;
function rv() {
  if (Od) return of.exports;
  Od = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), of.exports = fv(), of.exports;
}
var ov = rv();
const hv = "/api";
function Hd() {
  return window.localStorage.getItem("token");
}
function zd() {
  window.location.replace("/login.html");
}
async function Ra(r, i = {}) {
  const s = Hd(), f = {
    "Content-Type": "application/json",
    ...s ? { Authorization: `Bearer ${s}` } : {},
    ...i.headers || {}
  }, g = await fetch(`${hv}${r}`, {
    ...i,
    headers: f
  }), M = await g.text();
  let q = {};
  if (M)
    try {
      q = JSON.parse(M);
    } catch {
      q = { message: M };
    }
  if (!g.ok) {
    const Y = q.error || q.message || "Request failed";
    throw new Error(Y);
  }
  return q;
}
const dl = /* @__PURE__ */ Object.create(null);
dl.open = "0";
dl.close = "1";
dl.ping = "2";
dl.pong = "3";
dl.message = "4";
dl.upgrade = "5";
dl.noop = "6";
const Vi = /* @__PURE__ */ Object.create(null);
Object.keys(dl).forEach((r) => {
  Vi[dl[r]] = r;
});
const bf = { type: "error", data: "parser error" }, jd = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Ld = typeof ArrayBuffer == "function", Yd = (r) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(r) : r && r.buffer instanceof ArrayBuffer, zf = ({ type: r, data: i }, s, f) => jd && i instanceof Blob ? s ? f(i) : Nd(i, f) : Ld && (i instanceof ArrayBuffer || Yd(i)) ? s ? f(i) : Nd(new Blob([i]), f) : f(dl[r] + (i || "")), Nd = (r, i) => {
  const s = new FileReader();
  return s.onload = function() {
    const f = s.result.split(",")[1];
    i("b" + (f || ""));
  }, s.readAsDataURL(r);
};
function Rd(r) {
  return r instanceof Uint8Array ? r : r instanceof ArrayBuffer ? new Uint8Array(r) : new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
}
let yf;
function dv(r, i) {
  if (jd && r.data instanceof Blob)
    return r.data.arrayBuffer().then(Rd).then(i);
  if (Ld && (r.data instanceof ArrayBuffer || Yd(r.data)))
    return i(Rd(r.data));
  zf(r, !1, (s) => {
    yf || (yf = new TextEncoder()), i(yf.encode(s));
  });
}
const Md = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Au = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let r = 0; r < Md.length; r++)
  Au[Md.charCodeAt(r)] = r;
const mv = (r) => {
  let i = r.length * 0.75, s = r.length, f, g = 0, M, q, Y, C;
  r[r.length - 1] === "=" && (i--, r[r.length - 2] === "=" && i--);
  const N = new ArrayBuffer(i), J = new Uint8Array(N);
  for (f = 0; f < s; f += 4)
    M = Au[r.charCodeAt(f)], q = Au[r.charCodeAt(f + 1)], Y = Au[r.charCodeAt(f + 2)], C = Au[r.charCodeAt(f + 3)], J[g++] = M << 2 | q >> 4, J[g++] = (q & 15) << 4 | Y >> 2, J[g++] = (Y & 3) << 6 | C & 63;
  return N;
}, yv = typeof ArrayBuffer == "function", Nf = (r, i) => {
  if (typeof r != "string")
    return {
      type: "message",
      data: wd(r, i)
    };
  const s = r.charAt(0);
  return s === "b" ? {
    type: "message",
    data: vv(r.substring(1), i)
  } : Vi[s] ? r.length > 1 ? {
    type: Vi[s],
    data: r.substring(1)
  } : {
    type: Vi[s]
  } : bf;
}, vv = (r, i) => {
  if (yv) {
    const s = mv(r);
    return wd(s, i);
  } else
    return { base64: !0, data: r };
}, wd = (r, i) => i === "blob" ? r instanceof Blob ? r : new Blob([r]) : r instanceof ArrayBuffer ? r : r.buffer, Gd = "", gv = (r, i) => {
  const s = r.length, f = new Array(s);
  let g = 0;
  r.forEach((M, q) => {
    zf(M, !1, (Y) => {
      f[q] = Y, ++g === s && i(f.join(Gd));
    });
  });
}, pv = (r, i) => {
  const s = r.split(Gd), f = [];
  for (let g = 0; g < s.length; g++) {
    const M = Nf(s[g], i);
    if (f.push(M), M.type === "error")
      break;
  }
  return f;
};
function bv() {
  return new TransformStream({
    transform(r, i) {
      dv(r, (s) => {
        const f = s.length;
        let g;
        if (f < 126)
          g = new Uint8Array(1), new DataView(g.buffer).setUint8(0, f);
        else if (f < 65536) {
          g = new Uint8Array(3);
          const M = new DataView(g.buffer);
          M.setUint8(0, 126), M.setUint16(1, f);
        } else {
          g = new Uint8Array(9);
          const M = new DataView(g.buffer);
          M.setUint8(0, 127), M.setBigUint64(1, BigInt(f));
        }
        r.data && typeof r.data != "string" && (g[0] |= 128), i.enqueue(g), i.enqueue(s);
      });
    }
  });
}
let vf;
function Gi(r) {
  return r.reduce((i, s) => i + s.length, 0);
}
function Xi(r, i) {
  if (r[0].length === i)
    return r.shift();
  const s = new Uint8Array(i);
  let f = 0;
  for (let g = 0; g < i; g++)
    s[g] = r[0][f++], f === r[0].length && (r.shift(), f = 0);
  return r.length && f < r[0].length && (r[0] = r[0].slice(f)), s;
}
function Sv(r, i) {
  vf || (vf = new TextDecoder());
  const s = [];
  let f = 0, g = -1, M = !1;
  return new TransformStream({
    transform(q, Y) {
      for (s.push(q); ; ) {
        if (f === 0) {
          if (Gi(s) < 1)
            break;
          const C = Xi(s, 1);
          M = (C[0] & 128) === 128, g = C[0] & 127, g < 126 ? f = 3 : g === 126 ? f = 1 : f = 2;
        } else if (f === 1) {
          if (Gi(s) < 2)
            break;
          const C = Xi(s, 2);
          g = new DataView(C.buffer, C.byteOffset, C.length).getUint16(0), f = 3;
        } else if (f === 2) {
          if (Gi(s) < 8)
            break;
          const C = Xi(s, 8), N = new DataView(C.buffer, C.byteOffset, C.length), J = N.getUint32(0);
          if (J > Math.pow(2, 21) - 1) {
            Y.enqueue(bf);
            break;
          }
          g = J * Math.pow(2, 32) + N.getUint32(4), f = 3;
        } else {
          if (Gi(s) < g)
            break;
          const C = Xi(s, g);
          Y.enqueue(Nf(M ? C : vf.decode(C), i)), f = 0;
        }
        if (g === 0 || g > r) {
          Y.enqueue(bf);
          break;
        }
      }
    }
  });
}
const Xd = 4;
function Gt(r) {
  if (r) return _v(r);
}
function _v(r) {
  for (var i in Gt.prototype)
    r[i] = Gt.prototype[i];
  return r;
}
Gt.prototype.on = Gt.prototype.addEventListener = function(r, i) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(i), this;
};
Gt.prototype.once = function(r, i) {
  function s() {
    this.off(r, s), i.apply(this, arguments);
  }
  return s.fn = i, this.on(r, s), this;
};
Gt.prototype.off = Gt.prototype.removeListener = Gt.prototype.removeAllListeners = Gt.prototype.removeEventListener = function(r, i) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var s = this._callbacks["$" + r];
  if (!s) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + r], this;
  for (var f, g = 0; g < s.length; g++)
    if (f = s[g], f === i || f.fn === i) {
      s.splice(g, 1);
      break;
    }
  return s.length === 0 && delete this._callbacks["$" + r], this;
};
Gt.prototype.emit = function(r) {
  this._callbacks = this._callbacks || {};
  for (var i = new Array(arguments.length - 1), s = this._callbacks["$" + r], f = 1; f < arguments.length; f++)
    i[f - 1] = arguments[f];
  if (s) {
    s = s.slice(0);
    for (var f = 0, g = s.length; f < g; ++f)
      s[f].apply(this, i);
  }
  return this;
};
Gt.prototype.emitReserved = Gt.prototype.emit;
Gt.prototype.listeners = function(r) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + r] || [];
};
Gt.prototype.hasListeners = function(r) {
  return !!this.listeners(r).length;
};
const ki = typeof Promise == "function" && typeof Promise.resolve == "function" ? (i) => Promise.resolve().then(i) : (i, s) => s(i, 0), ke = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Ev = "arraybuffer";
function Qd(r, ...i) {
  return i.reduce((s, f) => (r.hasOwnProperty(f) && (s[f] = r[f]), s), {});
}
const Tv = ke.setTimeout, Av = ke.clearTimeout;
function Wi(r, i) {
  i.useNativeTimers ? (r.setTimeoutFn = Tv.bind(ke), r.clearTimeoutFn = Av.bind(ke)) : (r.setTimeoutFn = ke.setTimeout.bind(ke), r.clearTimeoutFn = ke.clearTimeout.bind(ke));
}
const Ov = 1.33;
function zv(r) {
  return typeof r == "string" ? Nv(r) : Math.ceil((r.byteLength || r.size) * Ov);
}
function Nv(r) {
  let i = 0, s = 0;
  for (let f = 0, g = r.length; f < g; f++)
    i = r.charCodeAt(f), i < 128 ? s += 1 : i < 2048 ? s += 2 : i < 55296 || i >= 57344 ? s += 3 : (f++, s += 4);
  return s;
}
function Vd() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Rv(r) {
  let i = "";
  for (let s in r)
    r.hasOwnProperty(s) && (i.length && (i += "&"), i += encodeURIComponent(s) + "=" + encodeURIComponent(r[s]));
  return i;
}
function Mv(r) {
  let i = {}, s = r.split("&");
  for (let f = 0, g = s.length; f < g; f++) {
    let M = s[f].split("=");
    i[decodeURIComponent(M[0])] = decodeURIComponent(M[1]);
  }
  return i;
}
class Cv extends Error {
  constructor(i, s, f) {
    super(i), this.description = s, this.context = f, this.type = "TransportError";
  }
}
class Rf extends Gt {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(i) {
    super(), this.writable = !1, Wi(this, i), this.opts = i, this.query = i.query, this.socket = i.socket, this.supportsBinary = !i.forceBase64;
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
  onError(i, s, f) {
    return super.emitReserved("error", new Cv(i, s, f)), this;
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
    const s = Nf(i, this.socket.binaryType);
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
    const s = Rv(i);
    return s.length ? "?" + s : "";
  }
}
class Dv extends Rf {
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
      let f = 0;
      this._polling && (f++, this.once("pollComplete", function() {
        --f || s();
      })), this.writable || (f++, this.once("drain", function() {
        --f || s();
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
    const s = (f) => {
      if (this.readyState === "opening" && f.type === "open" && this.onOpen(), f.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(f);
    };
    pv(i, this.socket.binaryType).forEach(s), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, gv(i, (s) => {
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
    return this.opts.timestampRequests !== !1 && (s[this.opts.timestampParam] = Vd()), !this.supportsBinary && !s.sid && (s.b64 = 1), this.createUri(i, s);
  }
}
let Zd = !1;
try {
  Zd = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Uv = Zd;
function qv() {
}
class xv extends Dv {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(i) {
    if (super(i), typeof location < "u") {
      const s = location.protocol === "https:";
      let f = location.port;
      f || (f = s ? "443" : "80"), this.xd = typeof location < "u" && i.hostname !== location.hostname || f !== i.port;
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
    const f = this.request({
      method: "POST",
      data: i
    });
    f.on("success", s), f.on("error", (g, M) => {
      this.onError("xhr post error", g, M);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const i = this.request();
    i.on("data", this.onData.bind(this)), i.on("error", (s, f) => {
      this.onError("xhr poll error", s, f);
    }), this.pollXhr = i;
  }
}
class hl extends Gt {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(i, s, f) {
    super(), this.createRequest = i, Wi(this, f), this._opts = f, this._method = f.method || "GET", this._uri = s, this._data = f.data !== void 0 ? f.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var i;
    const s = Qd(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    s.xdomain = !!this._opts.xd;
    const f = this._xhr = this.createRequest(s);
    try {
      f.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          f.setDisableHeaderCheck && f.setDisableHeaderCheck(!0);
          for (let g in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(g) && f.setRequestHeader(g, this._opts.extraHeaders[g]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          f.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        f.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (i = this._opts.cookieJar) === null || i === void 0 || i.addCookies(f), "withCredentials" in f && (f.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (f.timeout = this._opts.requestTimeout), f.onreadystatechange = () => {
        var g;
        f.readyState === 3 && ((g = this._opts.cookieJar) === null || g === void 0 || g.parseCookies(
          // @ts-ignore
          f.getResponseHeader("set-cookie")
        )), f.readyState === 4 && (f.status === 200 || f.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof f.status == "number" ? f.status : 0);
        }, 0));
      }, f.send(this._data);
    } catch (g) {
      this.setTimeoutFn(() => {
        this._onError(g);
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
      if (this._xhr.onreadystatechange = qv, i)
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
    attachEvent("onunload", Cd);
  else if (typeof addEventListener == "function") {
    const r = "onpagehide" in ke ? "pagehide" : "unload";
    addEventListener(r, Cd, !1);
  }
}
function Cd() {
  for (let r in hl.requests)
    hl.requests.hasOwnProperty(r) && hl.requests[r].abort();
}
const Bv = (function() {
  const r = Kd({
    xdomain: !1
  });
  return r && r.responseType !== null;
})();
class Hv extends xv {
  constructor(i) {
    super(i);
    const s = i && i.forceBase64;
    this.supportsBinary = Bv && !s;
  }
  request(i = {}) {
    return Object.assign(i, { xd: this.xd }, this.opts), new hl(Kd, this.uri(), i);
  }
}
function Kd(r) {
  const i = r.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!i || Uv))
      return new XMLHttpRequest();
  } catch {
  }
  if (!i)
    try {
      return new ke[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Jd = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class jv extends Rf {
  get name() {
    return "websocket";
  }
  doOpen() {
    const i = this.uri(), s = this.opts.protocols, f = Jd ? {} : Qd(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (f.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(i, s, f);
    } catch (g) {
      return this.emitReserved("error", g);
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
      const f = i[s], g = s === i.length - 1;
      zf(f, this.supportsBinary, (M) => {
        try {
          this.doWrite(f, M);
        } catch {
        }
        g && ki(() => {
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
    return this.opts.timestampRequests && (s[this.opts.timestampParam] = Vd()), this.supportsBinary || (s.b64 = 1), this.createUri(i, s);
  }
}
const gf = ke.WebSocket || ke.MozWebSocket;
class Lv extends jv {
  createSocket(i, s, f) {
    return Jd ? new gf(i, s, f) : s ? new gf(i, s) : new gf(i);
  }
  doWrite(i, s) {
    this.ws.send(s);
  }
}
class Yv extends Rf {
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
        const s = Sv(Number.MAX_SAFE_INTEGER, this.socket.binaryType), f = i.readable.pipeThrough(s).getReader(), g = bv();
        g.readable.pipeTo(i.writable), this._writer = g.writable.getWriter();
        const M = () => {
          f.read().then(({ done: Y, value: C }) => {
            Y || (this.onPacket(C), M());
          }).catch((Y) => {
          });
        };
        M();
        const q = { type: "open" };
        this.query.sid && (q.data = `{"sid":"${this.query.sid}"}`), this._writer.write(q).then(() => this.onOpen());
      });
    });
  }
  write(i) {
    this.writable = !1;
    for (let s = 0; s < i.length; s++) {
      const f = i[s], g = s === i.length - 1;
      this._writer.write(f).then(() => {
        g && ki(() => {
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
const wv = {
  websocket: Lv,
  webtransport: Yv,
  polling: Hv
}, Gv = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Xv = [
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
function Sf(r) {
  if (r.length > 8e3)
    throw "URI too long";
  const i = r, s = r.indexOf("["), f = r.indexOf("]");
  s != -1 && f != -1 && (r = r.substring(0, s) + r.substring(s, f).replace(/:/g, ";") + r.substring(f, r.length));
  let g = Gv.exec(r || ""), M = {}, q = 14;
  for (; q--; )
    M[Xv[q]] = g[q] || "";
  return s != -1 && f != -1 && (M.source = i, M.host = M.host.substring(1, M.host.length - 1).replace(/;/g, ":"), M.authority = M.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), M.ipv6uri = !0), M.pathNames = Qv(M, M.path), M.queryKey = Vv(M, M.query), M;
}
function Qv(r, i) {
  const s = /\/{2,9}/g, f = i.replace(s, "/").split("/");
  return (i.slice(0, 1) == "/" || i.length === 0) && f.splice(0, 1), i.slice(-1) == "/" && f.splice(f.length - 1, 1), f;
}
function Vv(r, i) {
  const s = {};
  return i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(f, g, M) {
    g && (s[g] = M);
  }), s;
}
const _f = typeof addEventListener == "function" && typeof removeEventListener == "function", Zi = [];
_f && addEventListener("offline", () => {
  Zi.forEach((r) => r());
}, !1);
class pn extends Gt {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(i, s) {
    if (super(), this.binaryType = Ev, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, i && typeof i == "object" && (s = i, i = null), i) {
      const f = Sf(i);
      s.hostname = f.host, s.secure = f.protocol === "https" || f.protocol === "wss", s.port = f.port, f.query && (s.query = f.query);
    } else s.host && (s.hostname = Sf(s.host).host);
    Wi(this, s), this.secure = s.secure != null ? s.secure : typeof location < "u" && location.protocol === "https:", s.hostname && !s.port && (s.port = this.secure ? "443" : "80"), this.hostname = s.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = s.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, s.transports.forEach((f) => {
      const g = f.prototype.name;
      this.transports.push(g), this._transportsByName[g] = f;
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
    }, s), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Mv(this.opts.query)), _f && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Zi.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    s.EIO = Xd, s.transport = i, this.id && (s.sid = this.id);
    const f = Object.assign({}, this.opts, {
      query: s,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[i]);
    return new this._transportsByName[i](f);
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
    const i = this.opts.rememberUpgrade && pn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", pn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
    for (let f = 0; f < this.writeBuffer.length; f++) {
      const g = this.writeBuffer[f].data;
      if (g && (s += zv(g)), f > 0 && s > this._maxPayload)
        return this.writeBuffer.slice(0, f);
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
    return i && (this._pingTimeoutTime = 0, ki(() => {
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
  write(i, s, f) {
    return this._sendPacket("message", i, s, f), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(i, s, f) {
    return this._sendPacket("message", i, s, f), this;
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
  _sendPacket(i, s, f, g) {
    if (typeof s == "function" && (g = s, s = void 0), typeof f == "function" && (g = f, f = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    f = f || {}, f.compress = f.compress !== !1;
    const M = {
      type: i,
      data: s,
      options: f
    };
    this.emitReserved("packetCreate", M), this.writeBuffer.push(M), g && this.once("flush", g), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const i = () => {
      this._onClose("forced close"), this.transport.close();
    }, s = () => {
      this.off("upgrade", s), this.off("upgradeError", s), i();
    }, f = () => {
      this.once("upgrade", s), this.once("upgradeError", s);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? f() : i();
    }) : this.upgrading ? f() : i()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(i) {
    if (pn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), _f && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const f = Zi.indexOf(this._offlineEventListener);
        f !== -1 && Zi.splice(f, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", i, s), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
pn.protocol = Xd;
class Zv extends pn {
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
    let s = this.createTransport(i), f = !1;
    pn.priorWebsocketSuccess = !1;
    const g = () => {
      f || (s.send([{ type: "ping", data: "probe" }]), s.once("packet", (w) => {
        if (!f)
          if (w.type === "pong" && w.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", s), !s)
              return;
            pn.priorWebsocketSuccess = s.name === "websocket", this.transport.pause(() => {
              f || this.readyState !== "closed" && (J(), this.setTransport(s), s.send([{ type: "upgrade" }]), this.emitReserved("upgrade", s), s = null, this.upgrading = !1, this.flush());
            });
          } else {
            const tt = new Error("probe error");
            tt.transport = s.name, this.emitReserved("upgradeError", tt);
          }
      }));
    };
    function M() {
      f || (f = !0, J(), s.close(), s = null);
    }
    const q = (w) => {
      const tt = new Error("probe error: " + w);
      tt.transport = s.name, M(), this.emitReserved("upgradeError", tt);
    };
    function Y() {
      q("transport closed");
    }
    function C() {
      q("socket closed");
    }
    function N(w) {
      s && w.name !== s.name && M();
    }
    const J = () => {
      s.removeListener("open", g), s.removeListener("error", q), s.removeListener("close", Y), this.off("close", C), this.off("upgrading", N);
    };
    s.once("open", g), s.once("error", q), s.once("close", Y), this.once("close", C), this.once("upgrading", N), this._upgrades.indexOf("webtransport") !== -1 && i !== "webtransport" ? this.setTimeoutFn(() => {
      f || s.open();
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
    for (let f = 0; f < i.length; f++)
      ~this.transports.indexOf(i[f]) && s.push(i[f]);
    return s;
  }
}
let Kv = class extends Zv {
  constructor(i, s = {}) {
    const f = typeof i == "object" ? i : s;
    (!f.transports || f.transports && typeof f.transports[0] == "string") && (f.transports = (f.transports || ["polling", "websocket", "webtransport"]).map((g) => wv[g]).filter((g) => !!g)), super(i, f);
  }
};
function Jv(r, i = "", s) {
  let f = r;
  s = s || typeof location < "u" && location, r == null && (r = s.protocol + "//" + s.host), typeof r == "string" && (r.charAt(0) === "/" && (r.charAt(1) === "/" ? r = s.protocol + r : r = s.host + r), /^(https?|wss?):\/\//.test(r) || (typeof s < "u" ? r = s.protocol + "//" + r : r = "https://" + r), f = Sf(r)), f.port || (/^(http|ws)$/.test(f.protocol) ? f.port = "80" : /^(http|ws)s$/.test(f.protocol) && (f.port = "443")), f.path = f.path || "/";
  const M = f.host.indexOf(":") !== -1 ? "[" + f.host + "]" : f.host;
  return f.id = f.protocol + "://" + M + ":" + f.port + i, f.href = f.protocol + "://" + M + (s && s.port === f.port ? "" : ":" + f.port), f;
}
const kv = typeof ArrayBuffer == "function", Wv = (r) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(r) : r.buffer instanceof ArrayBuffer, kd = Object.prototype.toString, $v = typeof Blob == "function" || typeof Blob < "u" && kd.call(Blob) === "[object BlobConstructor]", Fv = typeof File == "function" || typeof File < "u" && kd.call(File) === "[object FileConstructor]";
function Mf(r) {
  return kv && (r instanceof ArrayBuffer || Wv(r)) || $v && r instanceof Blob || Fv && r instanceof File;
}
function Ki(r, i) {
  if (!r || typeof r != "object")
    return !1;
  if (Array.isArray(r)) {
    for (let s = 0, f = r.length; s < f; s++)
      if (Ki(r[s]))
        return !0;
    return !1;
  }
  if (Mf(r))
    return !0;
  if (r.toJSON && typeof r.toJSON == "function" && arguments.length === 1)
    return Ki(r.toJSON(), !0);
  for (const s in r)
    if (Object.prototype.hasOwnProperty.call(r, s) && Ki(r[s]))
      return !0;
  return !1;
}
function Iv(r) {
  const i = [], s = r.data, f = r;
  return f.data = Ef(s, i), f.attachments = i.length, { packet: f, buffers: i };
}
function Ef(r, i) {
  if (!r)
    return r;
  if (Mf(r)) {
    const s = { _placeholder: !0, num: i.length };
    return i.push(r), s;
  } else if (Array.isArray(r)) {
    const s = new Array(r.length);
    for (let f = 0; f < r.length; f++)
      s[f] = Ef(r[f], i);
    return s;
  } else if (typeof r == "object" && !(r instanceof Date)) {
    const s = {};
    for (const f in r)
      Object.prototype.hasOwnProperty.call(r, f) && (s[f] = Ef(r[f], i));
    return s;
  }
  return r;
}
function Pv(r, i) {
  return r.data = Tf(r.data, i), delete r.attachments, r;
}
function Tf(r, i) {
  if (!r)
    return r;
  if (r && r._placeholder === !0) {
    if (typeof r.num == "number" && r.num >= 0 && r.num < i.length)
      return i[r.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(r))
    for (let s = 0; s < r.length; s++)
      r[s] = Tf(r[s], i);
  else if (typeof r == "object")
    for (const s in r)
      Object.prototype.hasOwnProperty.call(r, s) && (r[s] = Tf(r[s], i));
  return r;
}
const t0 = [
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
var st;
(function(r) {
  r[r.CONNECT = 0] = "CONNECT", r[r.DISCONNECT = 1] = "DISCONNECT", r[r.EVENT = 2] = "EVENT", r[r.ACK = 3] = "ACK", r[r.CONNECT_ERROR = 4] = "CONNECT_ERROR", r[r.BINARY_EVENT = 5] = "BINARY_EVENT", r[r.BINARY_ACK = 6] = "BINARY_ACK";
})(st || (st = {}));
class e0 {
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
    return (i.type === st.EVENT || i.type === st.ACK) && Ki(i) ? this.encodeAsBinary({
      type: i.type === st.EVENT ? st.BINARY_EVENT : st.BINARY_ACK,
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
    return (i.type === st.BINARY_EVENT || i.type === st.BINARY_ACK) && (s += i.attachments + "-"), i.nsp && i.nsp !== "/" && (s += i.nsp + ","), i.id != null && (s += i.id), i.data != null && (s += JSON.stringify(i.data, this.replacer)), s;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(i) {
    const s = Iv(i), f = this.encodeAsString(s.packet), g = s.buffers;
    return g.unshift(f), g;
  }
}
class Cf extends Gt {
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
      const f = s.type === st.BINARY_EVENT;
      f || s.type === st.BINARY_ACK ? (s.type = f ? st.EVENT : st.ACK, this.reconstructor = new l0(s), s.attachments === 0 && super.emitReserved("decoded", s)) : super.emitReserved("decoded", s);
    } else if (Mf(i) || i.base64)
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
    const f = {
      type: Number(i.charAt(0))
    };
    if (st[f.type] === void 0)
      throw new Error("unknown packet type " + f.type);
    if (f.type === st.BINARY_EVENT || f.type === st.BINARY_ACK) {
      const M = s + 1;
      for (; i.charAt(++s) !== "-" && s != i.length; )
        ;
      const q = i.substring(M, s);
      if (q != Number(q) || i.charAt(s) !== "-")
        throw new Error("Illegal attachments");
      f.attachments = Number(q);
    }
    if (i.charAt(s + 1) === "/") {
      const M = s + 1;
      for (; ++s && !(i.charAt(s) === "," || s === i.length); )
        ;
      f.nsp = i.substring(M, s);
    } else
      f.nsp = "/";
    const g = i.charAt(s + 1);
    if (g !== "" && Number(g) == g) {
      const M = s + 1;
      for (; ++s; ) {
        const q = i.charAt(s);
        if (q == null || Number(q) != q) {
          --s;
          break;
        }
        if (s === i.length)
          break;
      }
      f.id = Number(i.substring(M, s + 1));
    }
    if (i.charAt(++s)) {
      const M = this.tryParse(i.substr(s));
      if (Cf.isPayloadValid(f.type, M))
        f.data = M;
      else
        throw new Error("invalid payload");
    }
    return f;
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
      case st.CONNECT:
        return Dd(s);
      case st.DISCONNECT:
        return s === void 0;
      case st.CONNECT_ERROR:
        return typeof s == "string" || Dd(s);
      case st.EVENT:
      case st.BINARY_EVENT:
        return Array.isArray(s) && (typeof s[0] == "number" || typeof s[0] == "string" && t0.indexOf(s[0]) === -1);
      case st.ACK:
      case st.BINARY_ACK:
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
class l0 {
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
      const s = Pv(this.reconPack, this.buffers);
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
function Dd(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
const n0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Cf,
  Encoder: e0,
  get PacketType() {
    return st;
  }
}, Symbol.toStringTag, { value: "Module" }));
function Pe(r, i, s) {
  return r.on(i, s), function() {
    r.off(i, s);
  };
}
const a0 = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Wd extends Gt {
  /**
   * `Socket` constructor.
   */
  constructor(i, s, f) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = i, this.nsp = s, f && f.auth && (this.auth = f.auth), this._opts = Object.assign({}, f), this.io._autoConnect && this.open();
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
      Pe(i, "open", this.onopen.bind(this)),
      Pe(i, "packet", this.onpacket.bind(this)),
      Pe(i, "error", this.onerror.bind(this)),
      Pe(i, "close", this.onclose.bind(this))
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
    var f, g, M;
    if (a0.hasOwnProperty(i))
      throw new Error('"' + i.toString() + '" is a reserved event name');
    if (s.unshift(i), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(s), this;
    const q = {
      type: st.EVENT,
      data: s
    };
    if (q.options = {}, q.options.compress = this.flags.compress !== !1, typeof s[s.length - 1] == "function") {
      const J = this.ids++, w = s.pop();
      this._registerAckCallback(J, w), q.id = J;
    }
    const Y = (g = (f = this.io.engine) === null || f === void 0 ? void 0 : f.transport) === null || g === void 0 ? void 0 : g.writable, C = this.connected && !(!((M = this.io.engine) === null || M === void 0) && M._hasPingExpired());
    return this.flags.volatile && !Y || (C ? (this.notifyOutgoingListeners(q), this.packet(q)) : this.sendBuffer.push(q)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(i, s) {
    var f;
    const g = (f = this.flags.timeout) !== null && f !== void 0 ? f : this._opts.ackTimeout;
    if (g === void 0) {
      this.acks[i] = s;
      return;
    }
    const M = this.io.setTimeoutFn(() => {
      delete this.acks[i];
      for (let Y = 0; Y < this.sendBuffer.length; Y++)
        this.sendBuffer[Y].id === i && this.sendBuffer.splice(Y, 1);
      s.call(this, new Error("operation has timed out"));
    }, g), q = (...Y) => {
      this.io.clearTimeoutFn(M), s.apply(this, Y);
    };
    q.withError = !0, this.acks[i] = q;
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
    return new Promise((f, g) => {
      const M = (q, Y) => q ? g(q) : f(Y);
      M.withError = !0, s.push(M), this.emit(i, ...s);
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
    const f = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: i,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    i.push((g, ...M) => (this._queue[0], g !== null ? f.tryCount > this._opts.retries && (this._queue.shift(), s && s(g)) : (this._queue.shift(), s && s(null, ...M)), f.pending = !1, this._drainQueue())), this._queue.push(f), this._drainQueue();
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
      type: st.CONNECT,
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
      if (!this.sendBuffer.some((f) => String(f.id) === i)) {
        const f = this.acks[i];
        delete this.acks[i], f.withError && f.call(this, new Error("socket has been disconnected"));
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
        case st.CONNECT:
          i.data && i.data.sid ? this.onconnect(i.data.sid, i.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case st.EVENT:
        case st.BINARY_EVENT:
          this.onevent(i);
          break;
        case st.ACK:
        case st.BINARY_ACK:
          this.onack(i);
          break;
        case st.DISCONNECT:
          this.ondisconnect();
          break;
        case st.CONNECT_ERROR:
          this.destroy();
          const f = new Error(i.data.message);
          f.data = i.data.data, this.emitReserved("connect_error", f);
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
      for (const f of s)
        f.apply(this, i);
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
    let f = !1;
    return function(...g) {
      f || (f = !0, s.packet({
        type: st.ACK,
        id: i,
        data: g
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
    return this.connected && this.packet({ type: st.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
      for (let f = 0; f < s.length; f++)
        if (i === s[f])
          return s.splice(f, 1), this;
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
      for (let f = 0; f < s.length; f++)
        if (i === s[f])
          return s.splice(f, 1), this;
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
      for (const f of s)
        f.apply(this, i.data);
    }
  }
}
function Ma(r) {
  r = r || {}, this.ms = r.min || 100, this.max = r.max || 1e4, this.factor = r.factor || 2, this.jitter = r.jitter > 0 && r.jitter <= 1 ? r.jitter : 0, this.attempts = 0;
}
Ma.prototype.duration = function() {
  var r = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var i = Math.random(), s = Math.floor(i * this.jitter * r);
    r = (Math.floor(i * 10) & 1) == 0 ? r - s : r + s;
  }
  return Math.min(r, this.max) | 0;
};
Ma.prototype.reset = function() {
  this.attempts = 0;
};
Ma.prototype.setMin = function(r) {
  this.ms = r;
};
Ma.prototype.setMax = function(r) {
  this.max = r;
};
Ma.prototype.setJitter = function(r) {
  this.jitter = r;
};
class Af extends Gt {
  constructor(i, s) {
    var f;
    super(), this.nsps = {}, this.subs = [], i && typeof i == "object" && (s = i, i = void 0), s = s || {}, s.path = s.path || "/socket.io", this.opts = s, Wi(this, s), this.reconnection(s.reconnection !== !1), this.reconnectionAttempts(s.reconnectionAttempts || 1 / 0), this.reconnectionDelay(s.reconnectionDelay || 1e3), this.reconnectionDelayMax(s.reconnectionDelayMax || 5e3), this.randomizationFactor((f = s.randomizationFactor) !== null && f !== void 0 ? f : 0.5), this.backoff = new Ma({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(s.timeout == null ? 2e4 : s.timeout), this._readyState = "closed", this.uri = i;
    const g = s.parser || n0;
    this.encoder = new g.Encoder(), this.decoder = new g.Decoder(), this._autoConnect = s.autoConnect !== !1, this._autoConnect && this.open();
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
    this.engine = new Kv(this.uri, this.opts);
    const s = this.engine, f = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const g = Pe(s, "open", function() {
      f.onopen(), i && i();
    }), M = (Y) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", Y), i ? i(Y) : this.maybeReconnectOnOpen();
    }, q = Pe(s, "error", M);
    if (this._timeout !== !1) {
      const Y = this._timeout, C = this.setTimeoutFn(() => {
        g(), M(new Error("timeout")), s.close();
      }, Y);
      this.opts.autoUnref && C.unref(), this.subs.push(() => {
        this.clearTimeoutFn(C);
      });
    }
    return this.subs.push(g), this.subs.push(q), this;
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
      Pe(i, "ping", this.onping.bind(this)),
      Pe(i, "data", this.ondata.bind(this)),
      Pe(i, "error", this.onerror.bind(this)),
      Pe(i, "close", this.onclose.bind(this)),
      // @ts-ignore
      Pe(this.decoder, "decoded", this.ondecoded.bind(this))
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
    ki(() => {
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
    let f = this.nsps[i];
    return f ? this._autoConnect && !f.active && f.connect() : (f = new Wd(this, i, s), this.nsps[i] = f), f;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(i) {
    const s = Object.keys(this.nsps);
    for (const f of s)
      if (this.nsps[f].active)
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
    for (let f = 0; f < s.length; f++)
      this.engine.write(s[f], i.options);
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
    var f;
    this.cleanup(), (f = this.engine) === null || f === void 0 || f.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", i, s), this._reconnection && !this.skipReconnect && this.reconnect();
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
      const f = this.setTimeoutFn(() => {
        i.skipReconnect || (this.emitReserved("reconnect_attempt", i.backoff.attempts), !i.skipReconnect && i.open((g) => {
          g ? (i._reconnecting = !1, i.reconnect(), this.emitReserved("reconnect_error", g)) : i.onreconnect();
        }));
      }, s);
      this.opts.autoUnref && f.unref(), this.subs.push(() => {
        this.clearTimeoutFn(f);
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
const Eu = {};
function Ji(r, i) {
  typeof r == "object" && (i = r, r = void 0), i = i || {};
  const s = Jv(r, i.path || "/socket.io"), f = s.source, g = s.id, M = s.path, q = Eu[g] && M in Eu[g].nsps, Y = i.forceNew || i["force new connection"] || i.multiplex === !1 || q;
  let C;
  return Y ? C = new Af(f, i) : (Eu[g] || (Eu[g] = new Af(f, i)), C = Eu[g]), s.query && !i.query && (i.query = s.queryKey), C.socket(s.path, i);
}
Object.assign(Ji, {
  Manager: Af,
  Socket: Wd,
  io: Ji,
  connect: Ji
});
let Xn = null;
function u0(r) {
  return Xn ? Xn.auth = { token: r } : Xn = Ji({
    autoConnect: !1,
    transports: ["websocket"],
    auth: { token: r }
  }), Xn;
}
function i0() {
  Xn && (Xn.disconnect(), Xn = null);
}
const c0 = ["POPULAR", "MAL_ONLY", "HYBRID"], s0 = ["STANDARD", "BALANCED_STRICT", "BALANCED_RELAXED"], f0 = ["OP_ONLY", "ED_ONLY", "MIXED"], r0 = {
  name: "",
  isPrivate: !1,
  roundCount: 10,
  guessSeconds: 20,
  sampleSeconds: 10,
  sourceMode: "HYBRID",
  selectionMode: "STANDARD",
  themeMode: "MIXED"
};
function gn(r, i, s, { timeoutMs: f = 1e4 } = {}) {
  return new Promise((g, M) => {
    let q = !1;
    const Y = window.setTimeout(() => {
      q || (q = !0, M(new Error("Request timed out")));
    }, f);
    r.emit(i, s, (C) => {
      if (!q)
        return q = !0, window.clearTimeout(Y), C?.ok ? g(C) : M(new Error(C?.error || C?.code || "Request failed"));
    });
  });
}
function pf(r) {
  return String(r || "").trim().toUpperCase();
}
function Qi(r, i) {
  const s = new URLSearchParams(window.location.search);
  r ? s.set("lobby", r) : s.delete("lobby"), i ? s.set("inviteToken", i) : s.delete("inviteToken");
  const f = s.toString();
  window.history.replaceState({}, "", f ? `${window.location.pathname}?${f}` : window.location.pathname);
}
function o0(r) {
  if (!Number.isFinite(r) || r <= 0) return "00:00";
  const i = Math.ceil(r / 1e3), s = Math.floor(i / 60), f = i % 60;
  return `${String(s).padStart(2, "0")}:${String(f).padStart(2, "0")}`;
}
function Ud(r, i) {
  return (i.score || 0) - (r.score || 0);
}
function Ou(r) {
  return String(r || "").trim();
}
function qd(r) {
  const i = Ou(r).toLowerCase();
  return i ? i.includes("only host") ? "Only the host can start the game." : i.includes("not enough players") ? "Not enough players to start. Invite more players or lower the minimum players setting." : i.includes("balanced strict") ? "Balanced strict could not build fair rounds from MAL lists. Try BALANCED_RELAXED or HYBRID." : i.includes("mal_only") ? "MAL_ONLY could not build enough rounds from linked MAL lists. Try HYBRID or POPULAR." : i.includes("playable round media") || i.includes("round seeds") || i.includes("media provider") ? "Could not prepare enough playable songs for this match. Try fewer rounds or different source/theme settings." : i.includes("timed out") ? "Game start timed out. Please try again." : Ou(r) : "Could not start the game right now. Please try again.";
}
function h0(r) {
  const i = Ou(r).toLowerCase();
  return i ? i.includes("at least 2 characters") ? "Type at least 2 characters to search." : i.includes("too many") || i.includes("rate") ? "Search is rate-limited right now. Wait a few seconds and try again." : i.includes("timed out") ? "Search timed out. Please try again." : "Search is temporarily unavailable. You can still submit a typed guess." : "Search is temporarily unavailable. You can still submit a typed guess.";
}
function Tu(r) {
  return r === "autoplay_blocked" ? "Autoplay was blocked or the sample failed to auto-start. Press Play sample." : r === "source_unavailable" ? "This sample source failed to load for your browser." : "Could not play sample audio for this round.";
}
function xd(r) {
  const i = String(r?.name || ""), s = Ou(r?.message).toLowerCase();
  return i === "NotAllowedError" || s.includes("notallowederror") || s.includes("user gesture") || s.includes("permission") || s.includes("autoplay") ? "autoplay_blocked" : i === "AbortError" ? "aborted" : i === "NotSupportedError" || s.includes("failed to load") || s.includes("no supported source") || s.includes("not supported") ? "source_unavailable" : "play_failed";
}
function d0() {
  const r = Hd(), i = U.useRef(null), s = U.useRef(null), f = U.useRef(""), g = U.useRef(null), M = U.useRef(!1), q = U.useRef(null), Y = U.useRef(null), C = U.useRef(null), N = U.useRef(null), J = U.useRef(null), w = U.useRef(0.8), tt = U.useRef(null), [Wt, ne] = U.useState(!0), [Ot, Tt] = U.useState(""), [ae, dt] = U.useState(""), [Xt, Ct] = U.useState(""), [xe, $t] = U.useState(!1), [K, ue] = U.useState(null), [Be, Bl] = U.useState([]), [oe, ie] = U.useState(""), [Zt, Kt] = U.useState(r0), [me, T] = U.useState(""), [x, V] = U.useState(""), [at, mt] = U.useState(""), [h, z] = U.useState(null), [B, j] = U.useState(null), [H, k] = U.useState("WAITING"), [ft, Nt] = U.useState(null), [zt, Hl] = U.useState("00:00"), [et, bn] = U.useState(null), [zu, ye] = U.useState([]), [Ft, tl] = U.useState(null), [Qn, Sn] = U.useState(null), [el, jl] = U.useState([]), [ml, Vn] = U.useState(""), [Ca, Jt] = U.useState(null), [$i, ll] = U.useState([]), [Zn, He] = U.useState(!1), [Fi, je] = U.useState(!1), [Ii, Da] = U.useState(null), [yl, Dt] = U.useState(!1), [ce, he] = U.useState(0.8), [Nu, Ll] = U.useState(""), [Ru, se] = U.useState(""), [_n, Te] = U.useState("");
  U.useEffect(() => {
    s.current = h;
  }, [h]), U.useEffect(() => {
    f.current = x;
  }, [x]), U.useEffect(() => {
    w.current = ce;
  }, [ce]);
  const nl = U.useMemo(() => {
    const m = /* @__PURE__ */ new Map();
    for (const D of h?.players || [])
      m.set(D.userId, D.displayName);
    return m;
  }, [h]), Kn = U.useCallback((m) => nl.get(m) || `User ${m}`, [nl]), al = U.useCallback(() => {
    J.current && (window.clearTimeout(J.current), J.current = null);
  }, []), Ae = U.useCallback(() => {
    al(), q.current && q.current.pause(), Y.current && Y.current.pause(), N.current = null, je(!1);
  }, [al]), We = U.useCallback(() => {
    const m = C.current;
    if (m) {
      m.pause();
      try {
        m.currentTime = 0;
      } catch {
      }
    }
  }, []), Jn = U.useCallback((m) => {
    const D = String(m || "0");
    let G = 2166136261;
    for (let $ = 0; $ < D.length; $ += 1)
      G ^= D.charCodeAt($), G = Math.imul(G, 16777619);
    return (G >>> 0) / 4294967295;
  }, []), Yl = U.useCallback(async (m) => {
    if (!m) return null;
    const D = Number(m.duration);
    if (Number.isFinite(D) && D > 0) return D;
    await new Promise(($) => {
      let It = !1;
      const qt = () => {
        It || (It = !0, ze(), $());
      }, ze = () => {
        m.removeEventListener("loadedmetadata", qt), m.removeEventListener("durationchange", qt), m.removeEventListener("loadeddata", qt), m.removeEventListener("error", qt);
      };
      m.addEventListener("loadedmetadata", qt), m.addEventListener("durationchange", qt), m.addEventListener("loadeddata", qt), m.addEventListener("error", qt), window.setTimeout(qt, 2e3);
    });
    const G = Number(m.duration);
    return Number.isFinite(G) && G > 0 ? G : null;
  }, []), Mu = U.useCallback(async (m, D) => {
    const G = tt.current;
    if (Number.isFinite(G) && G >= 0) return G;
    const $ = Number.isFinite(D?.sampleStartSec) ? Math.max(0, D.sampleStartSec) : 0;
    if ($ > 0)
      return tt.current = $, $;
    const It = Number.isFinite(D?.sampleDurationSec) ? Math.max(1, D.sampleDurationSec) : 10, qt = await Yl(m);
    if (!Number.isFinite(qt) || qt <= 0)
      return tt.current = $, $;
    const ze = Math.floor(qt - It);
    if (ze <= 0)
      return tt.current = 0, 0;
    const gl = `${et?.roundId || 0}:${D?.animeId || 0}:${It}`, Le = Jn(gl), ve = Math.floor(Le * (ze + 1));
    return tt.current = ve, ve;
  }, [et?.roundId, Jn, Yl]), wl = U.useCallback(async () => {
    const m = C.current;
    if (!m) return !1;
    m.volume = Math.max(0, Math.min(1, Number(w.current))), m.muted = !1;
    try {
      return await m.play(), Dt(!1), Te(""), !0;
    } catch (D) {
      const G = xd(D);
      return G === "autoplay_blocked" ? (Dt(!0), !1) : (G !== "aborted" && Te('Could not play solution video in this browser. Use "Open video source".'), Dt(!1), !1);
    }
  }, []), Gl = U.useCallback(async ({ isAutoplay: m = !1 } = {}) => {
    const D = q.current, G = Y.current, $ = et?.sample;
    if (H !== "GUESSING" || !D && !G || !$?.audioUrl && !$?.videoUrl) return !1;
    al(), Ae(), se("");
    const It = Number.isFinite($.sampleDurationSec) ? Math.max(1, $.sampleDurationSec) : 10, qt = Math.max(0, Math.min(1, Number(w.current))), ze = async (Ht, P) => {
      if (!Ht) return { ok: !1, reason: "source_unavailable" };
      Ht.volume = qt, Ht.muted = !1;
      const Kl = await Mu(Ht, $);
      try {
        Ht.currentTime = Kl;
      } catch {
      }
      try {
        return await Ht.play(), N.current = Ht, Da(P), He(!1), se(""), je(!0), J.current = window.setTimeout(() => {
          const cl = N.current;
          cl && (cl.pause(), je(!1), N.current = null);
        }, It * 1e3), { ok: !0, reason: null };
      } catch (cl) {
        return { ok: !1, reason: xd(cl) };
      }
    }, gl = $?.audioUrl ? await ze(D, "audio") : { ok: !1, reason: "source_unavailable" };
    if (gl.ok) return !0;
    const Le = $?.videoUrl ? await ze(G, "video") : { ok: !1, reason: "source_unavailable" };
    if (Le.ok) return !0;
    const ve = [gl.reason, Le.reason].filter(Boolean);
    return ve.includes("autoplay_blocked") ? (He(!0), se(Tu("autoplay_blocked")), !1) : (He(!1), ve.includes("source_unavailable") ? (se(Tu("source_unavailable")), !1) : ((!ve.includes("aborted") || !m) && se(Tu("play_failed")), !1));
  }, [al, H, Mu, et, Ae]), vl = U.useCallback(() => {
    Ae(), We(), j(null), k("WAITING"), Nt(null), bn(null), ye([]), tl(null), Sn(null), jl([]), Vn(""), Jt(null), ll([]), Ll(""), se(""), Te(""), He(!1), Da(null), Dt(!1);
  }, [Ae, We]), kn = U.useCallback((m) => {
    const D = m || {}, G = D.phase || "WAITING";
    if (k(G), bn(D.round || null), jl(Array.isArray(D.readyUserIds) ? D.readyUserIds : []), Nt(D.endsAt || D.solution?.endsAt || null), G === "ANSWERS_REVEAL") {
      ye(Array.isArray(D.answers) ? D.answers : []), tl(null);
      return;
    }
    if (G === "SOLUTION_REVEAL") {
      ye(Array.isArray(D.answers) ? D.answers : []), tl(D.solution || null);
      return;
    }
    G === "WAITING" && (ye([]), tl(null));
  }, []), ul = U.useCallback(async (m) => {
    const D = i.current;
    if (!(!D?.connected || !m))
      try {
        const G = await gn(D, "round:sync", { lobbyCode: m });
        kn(G?.state || {});
      } catch (G) {
        dt(G.message);
      }
  }, [kn]), Xl = U.useCallback(async (m = "") => {
    const D = String(m || "").trim(), G = new URLSearchParams();
    D && G.set("q", D);
    const $ = await Ra(`/game/lobbies${G.toString() ? `?${G}` : ""}`);
    Bl(Array.isArray($.lobbies) ? $.lobbies : []);
  }, []), En = U.useCallback(async (m, D, G) => {
    const $ = i.current;
    if (!$) return;
    const It = {
      lobbyCode: m,
      ...D ? { inviteToken: D } : {},
      ...G ? { displayName: G } : {}
    };
    if (!$.connected) {
      g.current = It, $.connect();
      return;
    }
    await gn($, "lobby:join", It), await ul(m);
  }, [ul]), Oe = U.useCallback(async (m, D = "") => {
    const G = pf(m);
    if (!G) return dt("Lobby code is required");
    Tt("join"), dt(""), Ct("");
    try {
      const $ = {};
      at.trim() && ($.displayName = at.trim()), D && ($.inviteToken = D);
      const It = await Ra(`/game/lobbies/${G}/join`, {
        method: "POST",
        body: JSON.stringify($)
      });
      z(It.lobby), V(D || ""), vl(), Qi(G, D || ""), await En(G, D || "", at.trim()), Ct(`Joined lobby ${G}`);
    } catch ($) {
      dt($.message);
    } finally {
      Tt("");
    }
  }, [vl, at, En]), Qt = U.useCallback(async () => {
    Tt("create"), dt(""), Ct("");
    try {
      const m = await Ra("/game/lobbies", {
        method: "POST",
        body: JSON.stringify(Zt)
      });
      z(m.lobby), vl(), Qi(m.lobby.code, ""), await En(m.lobby.code, "", at.trim()), Ct(`Created lobby ${m.lobby.code}`);
    } catch (m) {
      dt(m.message);
    } finally {
      Tt("");
    }
  }, [vl, Zt, at, En]), fe = U.useCallback(async () => {
    if (h?.code) {
      Tt("leave"), dt("");
      try {
        i.current?.connected && await gn(i.current, "lobby:leave", { lobbyCode: h.code });
      } catch (m) {
        dt(m.message);
      } finally {
        z(null), V(""), Qi("", ""), vl(), Tt(""), Xl(oe).catch(() => {
        });
      }
    }
  }, [vl, Xl, h, oe]), Ql = U.useCallback(async () => {
    if (!(!h?.code || !i.current)) {
      Tt("start"), dt("");
      try {
        await gn(i.current, "game:start", { lobbyCode: h.code }, { timeoutMs: 12e4 });
      } catch (m) {
        dt(qd(m.message));
      } finally {
        Tt("");
      }
    }
  }, [h]), Ua = U.useCallback(async () => {
    if (!(!h?.code || !et?.roundId || !i.current)) {
      Tt("guess"), dt("");
      try {
        await gn(i.current, "round:submit_guess", {
          lobbyCode: h.code,
          roundId: et.roundId,
          guessText: ml.trim(),
          guessAnimeId: Number.isInteger(Ca) ? Ca : null
        }), Ct("Guess saved");
      } catch (m) {
        dt(m.message);
      } finally {
        Tt("");
      }
    }
  }, [Ca, ml, h, et]), Pi = U.useCallback(async () => {
    if (!(!h?.code || !i.current || !K)) {
      Tt("ready"), dt("");
      try {
        const m = el.includes(K.id);
        await gn(i.current, "round:set_ready", { lobbyCode: h.code, ready: !m });
      } catch (m) {
        dt(m.message);
      } finally {
        Tt("");
      }
    }
  }, [h, el, K]), tc = U.useCallback(async () => {
    if (h?.code) {
      Tt("invite"), dt(""), Ct("");
      try {
        const m = await Ra(`/game/lobbies/${h.code}/invite`);
        m.inviteToken && (V(m.inviteToken), Qi(h.code, m.inviteToken)), navigator.clipboard?.writeText ? (await navigator.clipboard.writeText(m.inviteUrl), Ct("Invite link copied")) : Ct(m.inviteUrl);
      } catch (m) {
        dt(m.message);
      } finally {
        Tt("");
      }
    }
  }, [h]);
  U.useEffect(() => {
    if (!r) return zd();
    const m = u0(r);
    i.current = m;
    const D = async () => {
      $t(!0), dt("");
      try {
        g.current ? (await gn(m, "lobby:join", g.current), await ul(g.current.lobbyCode), g.current = null) : s.current?.code && (await gn(m, "lobby:join", {
          lobbyCode: s.current.code,
          ...f.current ? { inviteToken: f.current } : {}
        }), await ul(s.current.code));
      } catch (P) {
        dt(P.message);
      }
    }, G = () => $t(!1), $ = (P) => {
      const Kl = String(P?.code || ""), cl = Ou(P?.message);
      if (Kl === "game_start_failed") {
        dt(qd(cl));
        return;
      }
      dt(cl || "Realtime error");
    }, It = ({ lobby: P }) => P && z(P), qt = ({ sessionId: P, config: Kl }) => {
      j({ sessionId: P, ...Kl || {} }), Sn(null), k("PENDING"), s.current?.code && ul(s.current.code).catch(() => {
      });
    }, ze = (P) => {
      Ae(), We(), k("GUESSING"), Nt(P?.endsAt || null), bn(P || null), ye([]), tl(null), Sn(null), jl([]), Vn(""), Jt(null), ll([]), Ll(""), se(""), Te(""), He(!1), Da(null), Dt(!1), tt.current = null;
    }, gl = (P) => {
      k("ANSWERS_REVEAL"), Nt(P?.endsAt || null), ye(Array.isArray(P?.answers) ? P.answers : []);
    }, Le = (P) => {
      Ae(), k("SOLUTION_REVEAL"), Nt(P?.endsAt || null), tl(P || null), se(""), Te(""), Dt(!1);
    }, ve = (P) => {
      Ae(), We(), k("FINISHED"), Nt(null), se(""), Te(""), Sn(P || null);
    }, Ht = (P) => {
      jl(Array.isArray(P?.readyUserIds) ? P.readyUserIds : []);
    };
    return m.on("connect", D), m.on("disconnect", G), m.on("error", $), m.on("lobby:state", It), m.on("game:started", qt), m.on("round:started", ze), m.on("round:answers_reveal", gl), m.on("round:solution", Le), m.on("game:finished", ve), m.on("round:ready_state", Ht), m.connect(), () => {
      m.off("connect", D), m.off("disconnect", G), m.off("error", $), m.off("lobby:state", It), m.off("game:started", qt), m.off("round:started", ze), m.off("round:answers_reveal", gl), m.off("round:solution", Le), m.off("game:finished", ve), m.off("round:ready_state", Ht), i0();
    };
  }, [ul, Ae, We, r]), U.useEffect(() => {
    if (!r) return;
    let m = !0;
    return (async () => {
      try {
        const D = await Ra("/auth/me");
        if (!m) return;
        ue(D), await Xl("");
      } catch {
        zd();
        return;
      } finally {
        m && ne(!1);
      }
    })(), () => {
      m = !1;
    };
  }, [Xl, r]), U.useEffect(() => {
    if (Wt || !K || M.current) return;
    M.current = !0;
    const m = new URLSearchParams(window.location.search), D = pf(m.get("lobby")), G = m.get("inviteToken") || "";
    D && (T(D), V(G), Oe(D, G).catch(() => {
    }));
  }, [Oe, Wt, K]), U.useEffect(() => {
    if (!ft) return Hl("00:00");
    const m = () => Hl(o0(new Date(ft).getTime() - Date.now()));
    m();
    const D = window.setInterval(m, 250);
    return () => window.clearInterval(D);
  }, [ft]), U.useEffect(() => {
    if (H !== "GUESSING") {
      ll([]), Ll("");
      return;
    }
    const m = ml.trim();
    if (m.length < 2) {
      ll([]), Ll("");
      return;
    }
    const D = window.setTimeout(async () => {
      try {
        const G = await Ra("/game/search", {
          method: "POST",
          body: JSON.stringify({ query: m, limit: 8 })
        });
        ll(Array.isArray(G.results) ? G.results : []), Ll("");
      } catch (G) {
        ll([]), Ll(h0(G?.message));
      }
    }, 300);
    return () => window.clearTimeout(D);
  }, [ml, H]), U.useEffect(() => {
    if (!!!(et?.sample?.audioUrl || et?.sample?.videoUrl)) {
      He(!1), Ae();
      return;
    }
    if (H !== "GUESSING") {
      (H === "SOLUTION_REVEAL" || H === "WAITING" || H === "FINISHED" || H === "PENDING") && (He(!1), Ae());
      return;
    }
    let D = !1;
    const G = window.setTimeout(() => {
      D || Gl({ isAutoplay: !0 }).catch(() => {
      });
    }, 0);
    return () => {
      D = !0, window.clearTimeout(G);
    };
  }, [H, Gl, et?.roundId, et?.sample?.audioUrl, et?.sample?.videoUrl, Ae]), U.useEffect(() => {
    tt.current = null;
  }, [et?.roundId]), U.useEffect(() => {
    if (!Zn || H !== "GUESSING") return;
    const m = () => {
      Gl({ isAutoplay: !1 }).catch(() => {
      });
    };
    return window.addEventListener("pointerdown", m), window.addEventListener("keydown", m), () => {
      window.removeEventListener("pointerdown", m), window.removeEventListener("keydown", m);
    };
  }, [H, Gl, Zn]), U.useEffect(() => {
    if (H !== "SOLUTION_REVEAL" || !Ft?.video) {
      Dt(!1), Te(""), We();
      return;
    }
    let m = !1;
    const D = window.setTimeout(() => {
      m || wl().catch(() => {
      });
    }, 0);
    return () => {
      m = !0, window.clearTimeout(D), We();
    };
  }, [H, wl, Ft?.video, We]), U.useEffect(() => {
    if (!yl || H !== "SOLUTION_REVEAL") return;
    const m = () => {
      wl().catch(() => {
      });
    };
    return window.addEventListener("pointerdown", m), window.addEventListener("keydown", m), () => {
      window.removeEventListener("pointerdown", m), window.removeEventListener("keydown", m);
    };
  }, [H, wl, yl]), U.useEffect(() => {
    const m = Math.max(0, Math.min(1, Number(ce)));
    q.current && (q.current.volume = m), Y.current && (Y.current.volume = m), C.current && (C.current.volume = m);
  }, [ce, et?.roundId, Ft?.video]);
  const Cu = U.useMemo(() => !!(h && K && h.host?.id === K.id), [h, K]), Tn = U.useMemo(() => !!(K && el.includes(K.id)), [el, K]), An = U.useMemo(() => !!(et?.sample?.audioUrl || et?.sample?.videoUrl), [et]), Vl = U.useMemo(() => !!(et && An && (H === "GUESSING" || H === "ANSWERS_REVEAL")), [An, H, et]), il = U.useMemo(() => {
    const m = Number.parseInt(et?.sample?.sampleDurationSec, 10);
    return !Number.isFinite(m) || m <= 0 ? "Sample ready" : `${m}s preview`;
  }, [et]), On = U.useMemo(() => `${Math.round(ce * 100)}%`, [ce]), Zl = U.useCallback((m) => {
    const D = Math.max(0, Math.min(1, Number.parseFloat(m.target.value)));
    he(Number.isFinite(D) ? D : 0.8);
  }, []), Ut = U.useMemo(() => H === "FINISHED" ? (Qn?.finalScores || []).slice().sort(Ud) : H === "SOLUTION_REVEAL" ? (Ft?.scores || []).slice().sort(Ud) : [], [Qn, H, Ft]);
  return Wt ? /* @__PURE__ */ O.jsx("section", { className: "gmq-shell", children: "Loading game..." }) : /* @__PURE__ */ O.jsxs("section", { className: "gmq-shell", children: [
    /* @__PURE__ */ O.jsxs("header", { className: "gmq-header", children: [
      /* @__PURE__ */ O.jsxs("div", { children: [
        /* @__PURE__ */ O.jsx("h1", { children: "Anime Music Quiz" }),
        /* @__PURE__ */ O.jsxs("p", { className: "gmq-muted", children: [
          "Socket: ",
          xe ? "Connected" : "Disconnected",
          h ? ` | Lobby ${h.code}` : "",
          B?.sessionId ? ` | Session ${B.sessionId}` : ""
        ] })
      ] }),
      h ? /* @__PURE__ */ O.jsxs("div", { className: "gmq-actions", children: [
        /* @__PURE__ */ O.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: tc, disabled: Ot === "invite", children: "Copy Invite" }),
        /* @__PURE__ */ O.jsx("button", { type: "button", className: "gmq-btn gmq-btn-danger", onClick: fe, disabled: Ot === "leave", children: "Leave" })
      ] }) : null
    ] }),
    ae ? /* @__PURE__ */ O.jsx("div", { className: "gmq-alert gmq-alert-error", children: ae }) : null,
    Xt ? /* @__PURE__ */ O.jsx("div", { className: "gmq-alert gmq-alert-info", children: Xt }) : null,
    h ? /* @__PURE__ */ O.jsxs("div", { className: "gmq-grid", children: [
      /* @__PURE__ */ O.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ O.jsxs("h2", { children: [
          "Lobby ",
          h.code
        ] }),
        /* @__PURE__ */ O.jsxs("p", { className: "gmq-muted", children: [
          h.name || "Untitled",
          " | ",
          h.playerCount,
          "/",
          h.maxPlayers,
          " players"
        ] }),
        /* @__PURE__ */ O.jsx("ul", { className: "gmq-player-list", children: (h.players || []).map((m) => /* @__PURE__ */ O.jsxs("li", { children: [
          /* @__PURE__ */ O.jsxs("span", { children: [
            m.displayName,
            m.userId === h.host?.id ? " (Host)" : "",
            m.isConnected ? "" : " (offline)"
          ] }),
          H === "GUESSING" ? /* @__PURE__ */ O.jsx("strong", { children: el.includes(m.userId) ? "Ready" : "Thinking" }) : null
        ] }, m.userId)) }),
        h.status === "WAITING" ? Cu ? /* @__PURE__ */ O.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: Ql, disabled: Ot === "start", children: "Start Game" }) : /* @__PURE__ */ O.jsx("p", { className: "gmq-muted", children: "Waiting for host to start." }) : null
      ] }),
      /* @__PURE__ */ O.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ O.jsx("h2", { children: "Round" }),
        /* @__PURE__ */ O.jsxs("p", { className: "gmq-round-phase", children: [
          H,
          " | ",
          zt
        ] }),
        Vl ? /* @__PURE__ */ O.jsxs("div", { className: "gmq-sample-player", children: [
          et?.sample?.audioUrl ? /* @__PURE__ */ O.jsx(
            "audio",
            {
              ref: q,
              src: et.sample.audioUrl,
              preload: "auto",
              onPlay: () => je(!0),
              onPause: () => je(!1),
              onEnded: () => je(!1),
              onError: () => se(Tu("source_unavailable"))
            },
            `audio-${et.roundId}`
          ) : null,
          et?.sample?.videoUrl ? /* @__PURE__ */ O.jsx(
            "video",
            {
              ref: Y,
              src: et.sample.videoUrl,
              preload: "auto",
              playsInline: !0,
              onPlay: () => je(!0),
              onPause: () => je(!1),
              onEnded: () => je(!1),
              onError: () => se(Tu("source_unavailable"))
            },
            `video-${et.roundId}`
          ) : null,
          /* @__PURE__ */ O.jsxs("label", { className: "gmq-volume-row", children: [
            /* @__PURE__ */ O.jsxs("span", { children: [
              "Volume ",
              On
            ] }),
            /* @__PURE__ */ O.jsx(
              "input",
              {
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: ce,
                onChange: Zl
              }
            )
          ] }),
          Zn ? /* @__PURE__ */ O.jsxs("div", { className: "gmq-stack", children: [
            /* @__PURE__ */ O.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
            /* @__PURE__ */ O.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Gl({ isAutoplay: !1 }).catch(() => {
            }), children: "Play sample" })
          ] }) : Ii === "video" && !et?.sample?.audioUrl ? /* @__PURE__ */ O.jsxs("p", { className: "gmq-muted", children: [
            "Using video source audio. ",
            il
          ] }) : Fi ? /* @__PURE__ */ O.jsxs("p", { className: "gmq-muted", children: [
            "Sample is playing. ",
            il
          ] }) : /* @__PURE__ */ O.jsx("p", { className: "gmq-muted", children: il }),
          Ru ? /* @__PURE__ */ O.jsx("p", { className: "gmq-muted gmq-muted-warning", children: Ru }) : null
        ] }) : null,
        H === "GUESSING" && et ? /* @__PURE__ */ O.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ O.jsxs("p", { children: [
            "Round ",
            et.index,
            "/",
            et.totalRounds
          ] }),
          An ? null : /* @__PURE__ */ O.jsx("p", { className: "gmq-muted", children: "Sample audio is unavailable for this round." }),
          /* @__PURE__ */ O.jsx("input", { value: ml, onChange: (m) => {
            Vn(m.target.value), Jt(null);
          }, placeholder: "Type anime name" }),
          /* @__PURE__ */ O.jsx("ul", { className: "gmq-search-results", children: $i.map((m) => /* @__PURE__ */ O.jsx("li", { children: /* @__PURE__ */ O.jsx("button", { type: "button", onClick: () => {
            Vn(m.title || ""), Jt(Number.isInteger(m.id) ? m.id : null), ll([]);
          }, children: m.title }) }, `${m.id}-${m.title}`)) }),
          Nu ? /* @__PURE__ */ O.jsx("p", { className: "gmq-muted gmq-muted-warning", children: Nu }) : null,
          /* @__PURE__ */ O.jsxs("div", { className: "gmq-actions", children: [
            /* @__PURE__ */ O.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: Ua, disabled: Ot === "guess", children: "Submit Guess" }),
            /* @__PURE__ */ O.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: Pi, disabled: Ot === "ready", children: Tn ? "Unskip" : "Skip / Ready" })
          ] }),
          /* @__PURE__ */ O.jsxs("p", { className: "gmq-muted", children: [
            el.length,
            " ready"
          ] })
        ] }) : null,
        H === "ANSWERS_REVEAL" ? /* @__PURE__ */ O.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ O.jsx("h3", { children: "Answers" }),
          /* @__PURE__ */ O.jsx("ul", { className: "gmq-answer-list", children: zu.map((m) => /* @__PURE__ */ O.jsxs("li", { children: [
            /* @__PURE__ */ O.jsx("span", { children: Kn(m.userId) }),
            /* @__PURE__ */ O.jsx("span", { children: m.guessText || "(blank)" }),
            /* @__PURE__ */ O.jsx("strong", { children: m.isCorrect ? "Correct" : "Wrong" })
          ] }, `${m.userId}-${m.guessText || "blank"}`)) })
        ] }) : null,
        H === "SOLUTION_REVEAL" && Ft ? /* @__PURE__ */ O.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ O.jsx("h3", { children: "Solution" }),
          /* @__PURE__ */ O.jsxs("p", { children: [
            Ft.correctAnime?.animeTitle,
            " (",
            Ft.correctAnime?.themeType,
            ")"
          ] }),
          /* @__PURE__ */ O.jsx("p", { className: "gmq-muted", children: Ft.correctAnime?.themeTitle || "" }),
          Ft.video ? /* @__PURE__ */ O.jsxs("div", { className: "gmq-solution-video-wrap", children: [
            /* @__PURE__ */ O.jsx(
              "video",
              {
                ref: C,
                className: "gmq-solution-video",
                src: Ft.video,
                preload: "auto",
                controls: !0,
                playsInline: !0,
                onError: () => Te('Could not play solution video in this browser. Use "Open video source".')
              },
              `solution-${et?.roundId || Ft.correctAnime?.animeId || "video"}`
            ),
            yl ? /* @__PURE__ */ O.jsxs("div", { className: "gmq-stack", children: [
              /* @__PURE__ */ O.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
              /* @__PURE__ */ O.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => wl().catch(() => {
              }), children: "Play solution video" })
            ] }) : null,
            _n ? /* @__PURE__ */ O.jsx("p", { className: "gmq-muted gmq-muted-warning", children: _n }) : null,
            /* @__PURE__ */ O.jsx("a", { href: Ft.video, target: "_blank", rel: "noreferrer", children: "Open video source" })
          ] }) : /* @__PURE__ */ O.jsx("p", { className: "gmq-muted", children: "Solution video is unavailable for this round." })
        ] }) : null,
        H === "FINISHED" && Qn ? /* @__PURE__ */ O.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ O.jsx("h3", { children: "Final Result" }),
          /* @__PURE__ */ O.jsxs("p", { children: [
            "Winner: ",
            Qn.winner?.displayName || "Tie"
          ] })
        ] }) : null,
        Ut.length ? /* @__PURE__ */ O.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ O.jsx("h3", { children: "Scoreboard" }),
          /* @__PURE__ */ O.jsx("ul", { className: "gmq-score-list", children: Ut.map((m) => /* @__PURE__ */ O.jsxs("li", { className: "gmq-score-row", children: [
            /* @__PURE__ */ O.jsx("span", { children: m.displayName }),
            /* @__PURE__ */ O.jsx("strong", { children: m.score })
          ] }, m.userId)) })
        ] }) : null
      ] })
    ] }) : /* @__PURE__ */ O.jsxs("div", { className: "gmq-grid", children: [
      /* @__PURE__ */ O.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ O.jsx("h2", { children: "Create Lobby" }),
        /* @__PURE__ */ O.jsx("label", { children: "Name" }),
        /* @__PURE__ */ O.jsx("input", { value: Zt.name, onChange: (m) => Kt((D) => ({ ...D, name: m.target.value })), placeholder: "Optional lobby name" }),
        /* @__PURE__ */ O.jsxs("label", { className: "gmq-checkbox", children: [
          /* @__PURE__ */ O.jsx("input", { type: "checkbox", checked: Zt.isPrivate, onChange: (m) => Kt((D) => ({ ...D, isPrivate: m.target.checked })) }),
          " Private lobby"
        ] }),
        /* @__PURE__ */ O.jsxs("div", { className: "gmq-inline", children: [
          /* @__PURE__ */ O.jsx("input", { type: "number", min: "1", max: "50", value: Zt.roundCount, onChange: (m) => Kt((D) => ({ ...D, roundCount: Number(m.target.value || 10) })) }),
          /* @__PURE__ */ O.jsx("input", { type: "number", min: "5", max: "120", value: Zt.guessSeconds, onChange: (m) => Kt((D) => ({ ...D, guessSeconds: Number(m.target.value || 20) })) }),
          /* @__PURE__ */ O.jsx("input", { type: "number", min: "3", max: "60", value: Zt.sampleSeconds, onChange: (m) => Kt((D) => ({ ...D, sampleSeconds: Number(m.target.value || 10) })) })
        ] }),
        /* @__PURE__ */ O.jsxs("div", { className: "gmq-inline", children: [
          /* @__PURE__ */ O.jsx("select", { value: Zt.sourceMode, onChange: (m) => Kt((D) => ({ ...D, sourceMode: m.target.value })), children: c0.map((m) => /* @__PURE__ */ O.jsx("option", { value: m, children: m }, m)) }),
          /* @__PURE__ */ O.jsx("select", { value: Zt.selectionMode, onChange: (m) => Kt((D) => ({ ...D, selectionMode: m.target.value })), children: s0.map((m) => /* @__PURE__ */ O.jsx("option", { value: m, children: m }, m)) }),
          /* @__PURE__ */ O.jsx("select", { value: Zt.themeMode, onChange: (m) => Kt((D) => ({ ...D, themeMode: m.target.value })), children: f0.map((m) => /* @__PURE__ */ O.jsx("option", { value: m, children: m }, m)) })
        ] }),
        /* @__PURE__ */ O.jsx("label", { children: "Display Name" }),
        /* @__PURE__ */ O.jsx("input", { value: at, onChange: (m) => mt(m.target.value), placeholder: K?.nickname || K?.username || "Player" }),
        /* @__PURE__ */ O.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: Qt, disabled: Ot === "create", children: "Create Lobby" })
      ] }),
      /* @__PURE__ */ O.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ O.jsx("h2", { children: "Join Lobby" }),
        /* @__PURE__ */ O.jsx("label", { children: "Lobby Code" }),
        /* @__PURE__ */ O.jsx("input", { value: me, onChange: (m) => T(pf(m.target.value)), placeholder: "ABC123" }),
        /* @__PURE__ */ O.jsx("label", { children: "Invite Token (private lobby)" }),
        /* @__PURE__ */ O.jsx("input", { value: x, onChange: (m) => V(m.target.value.trim()), placeholder: "Paste invite token" }),
        /* @__PURE__ */ O.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: () => Oe(me, x), disabled: Ot === "join", children: "Join Lobby" })
      ] }),
      /* @__PURE__ */ O.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ O.jsx("h2", { children: "Joinable Lobbies" }),
        /* @__PURE__ */ O.jsxs("div", { className: "gmq-inline", children: [
          /* @__PURE__ */ O.jsx("input", { value: oe, onChange: (m) => ie(m.target.value), placeholder: "Search by code/name" }),
          /* @__PURE__ */ O.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Xl(oe), children: "Refresh" })
        ] }),
        /* @__PURE__ */ O.jsx("ul", { className: "gmq-lobby-list", children: Be.map((m) => /* @__PURE__ */ O.jsxs("li", { className: "gmq-lobby-item", children: [
          /* @__PURE__ */ O.jsxs("div", { children: [
            /* @__PURE__ */ O.jsx("div", { className: "gmq-lobby-title", children: m.name || m.code }),
            /* @__PURE__ */ O.jsxs("div", { className: "gmq-muted", children: [
              m.code,
              " | ",
              m.playerCount,
              "/",
              m.maxPlayers
            ] })
          ] }),
          /* @__PURE__ */ O.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Oe(m.code, ""), children: "Join" })
        ] }, m.code)) })
      ] })
    ] })
  ] });
}
const Bd = document.getElementById("game-root");
Bd && ov.createRoot(Bd).render(/* @__PURE__ */ O.jsx(d0, {}));
