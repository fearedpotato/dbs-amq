var nf = { exports: {} }, hu = {};
var hd;
function Iy() {
  if (hd) return hu;
  hd = 1;
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
  return hu.Fragment = i, hu.jsx = s, hu.jsxs = s, hu;
}
var dd;
function Py() {
  return dd || (dd = 1, nf.exports = Iy()), nf.exports;
}
var R = Py(), af = { exports: {} }, W = {};
var md;
function t0() {
  if (md) return W;
  md = 1;
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), g = /* @__PURE__ */ Symbol.for("react.profiler"), M = /* @__PURE__ */ Symbol.for("react.consumer"), q = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), C = /* @__PURE__ */ Symbol.for("react.suspense"), z = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), G = /* @__PURE__ */ Symbol.for("react.activity"), P = Symbol.iterator;
  function Wt(h) {
    return h === null || typeof h != "object" ? null : (h = P && h[P] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var le = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, zt = Object.assign, At = {};
  function ne(h, O, B) {
    this.props = h, this.context = O, this.refs = At, this.updater = B || le;
  }
  ne.prototype.isReactComponent = {}, ne.prototype.setState = function(h, O) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, O, "setState");
  }, ne.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function vt() {
  }
  vt.prototype = ne.prototype;
  function Xt(h, O, B) {
    this.props = h, this.context = O, this.refs = At, this.updater = B || le;
  }
  var Ut = Xt.prototype = new vt();
  Ut.constructor = Xt, zt(Ut, ne.prototype), Ut.isPureReactComponent = !0;
  var De = Array.isArray;
  function $t() {
  }
  var K = { H: null, A: null, T: null, S: null }, ae = Object.prototype.hasOwnProperty;
  function Ue(h, O, B) {
    var j = B.ref;
    return {
      $$typeof: r,
      type: h,
      key: O,
      ref: j !== void 0 ? j : null,
      props: B
    };
  }
  function Dl(h, O) {
    return Ue(h.type, O, h.props);
  }
  function re(h) {
    return typeof h == "object" && h !== null && h.$$typeof === r;
  }
  function ue(h) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(B) {
      return O[B];
    });
  }
  var Zt = /\/+/g;
  function Kt(h, O) {
    return typeof h == "object" && h !== null && h.key != null ? ue("" + h.key) : O.toString(36);
  }
  function de(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then($t, $t) : (h.status = "pending", h.then(
          function(O) {
            h.status === "pending" && (h.status = "fulfilled", h.value = O);
          },
          function(O) {
            h.status === "pending" && (h.status = "rejected", h.reason = O);
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
  function T(h, O, B, j, H) {
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
                O,
                B,
                j,
                H
              );
          }
      }
    if (ft)
      return H = H(h), ft = j === "" ? "." + Kt(h, 0) : j, De(H) ? (B = "", ft != null && (B = ft.replace(Zt, "$&/") + "/"), T(H, O, B, "", function(Ul) {
        return Ul;
      })) : H != null && (re(H) && (H = Dl(
        H,
        B + (H.key == null || h && h.key === H.key ? "" : ("" + H.key).replace(
          Zt,
          "$&/"
        ) + "/") + ft
      )), O.push(H)), 1;
    ft = 0;
    var Rt = j === "" ? "." : j + ":";
    if (De(h))
      for (var Nt = 0; Nt < h.length; Nt++)
        j = h[Nt], k = Rt + Kt(j, Nt), ft += T(
          j,
          O,
          B,
          k,
          H
        );
    else if (Nt = Wt(h), typeof Nt == "function")
      for (h = Nt.call(h), Nt = 0; !(j = h.next()).done; )
        j = j.value, k = Rt + Kt(j, Nt++), ft += T(
          j,
          O,
          B,
          k,
          H
        );
    else if (k === "object") {
      if (typeof h.then == "function")
        return T(
          de(h),
          O,
          B,
          j,
          H
        );
      throw O = String(h), Error(
        "Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ft;
  }
  function x(h, O, B) {
    if (h == null) return h;
    var j = [], H = 0;
    return T(h, j, "", "", function(k) {
      return O.call(B, k, H++);
    }), j;
  }
  function V(h) {
    if (h._status === -1) {
      var O = h._result;
      O = O(), O.then(
        function(B) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = B);
        },
        function(B) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = B);
        }
      ), h._status === -1 && (h._status = 0, h._result = O);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var at = typeof reportError == "function" ? reportError : function(h) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var O = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
        error: h
      });
      if (!window.dispatchEvent(O)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", h);
      return;
    }
    console.error(h);
  }, dt = {
    map: x,
    forEach: function(h, O, B) {
      x(
        h,
        function() {
          O.apply(this, arguments);
        },
        B
      );
    },
    count: function(h) {
      var O = 0;
      return x(h, function() {
        O++;
      }), O;
    },
    toArray: function(h) {
      return x(h, function(O) {
        return O;
      }) || [];
    },
    only: function(h) {
      if (!re(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  };
  return W.Activity = G, W.Children = dt, W.Component = ne, W.Fragment = s, W.Profiler = g, W.PureComponent = Xt, W.StrictMode = f, W.Suspense = C, W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, W.__COMPILER_RUNTIME = {
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
  }, W.cloneElement = function(h, O, B) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var j = zt({}, h.props), H = h.key;
    if (O != null)
      for (k in O.key !== void 0 && (H = "" + O.key), O)
        !ae.call(O, k) || k === "key" || k === "__self" || k === "__source" || k === "ref" && O.ref === void 0 || (j[k] = O[k]);
    var k = arguments.length - 2;
    if (k === 1) j.children = B;
    else if (1 < k) {
      for (var ft = Array(k), Rt = 0; Rt < k; Rt++)
        ft[Rt] = arguments[Rt + 2];
      j.children = ft;
    }
    return Ue(h.type, H, j);
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
  }, W.createElement = function(h, O, B) {
    var j, H = {}, k = null;
    if (O != null)
      for (j in O.key !== void 0 && (k = "" + O.key), O)
        ae.call(O, j) && j !== "key" && j !== "__self" && j !== "__source" && (H[j] = O[j]);
    var ft = arguments.length - 2;
    if (ft === 1) H.children = B;
    else if (1 < ft) {
      for (var Rt = Array(ft), Nt = 0; Nt < ft; Nt++)
        Rt[Nt] = arguments[Nt + 2];
      H.children = Rt;
    }
    if (h && h.defaultProps)
      for (j in ft = h.defaultProps, ft)
        H[j] === void 0 && (H[j] = ft[j]);
    return Ue(h, k, H);
  }, W.createRef = function() {
    return { current: null };
  }, W.forwardRef = function(h) {
    return { $$typeof: Y, render: h };
  }, W.isValidElement = re, W.lazy = function(h) {
    return {
      $$typeof: J,
      _payload: { _status: -1, _result: h },
      _init: V
    };
  }, W.memo = function(h, O) {
    return {
      $$typeof: z,
      type: h,
      compare: O === void 0 ? null : O
    };
  }, W.startTransition = function(h) {
    var O = K.T, B = {};
    K.T = B;
    try {
      var j = h(), H = K.S;
      H !== null && H(B, j), typeof j == "object" && j !== null && typeof j.then == "function" && j.then($t, at);
    } catch (k) {
      at(k);
    } finally {
      O !== null && B.types !== null && (O.types = B.types), K.T = O;
    }
  }, W.unstable_useCacheRefresh = function() {
    return K.H.useCacheRefresh();
  }, W.use = function(h) {
    return K.H.use(h);
  }, W.useActionState = function(h, O, B) {
    return K.H.useActionState(h, O, B);
  }, W.useCallback = function(h, O) {
    return K.H.useCallback(h, O);
  }, W.useContext = function(h) {
    return K.H.useContext(h);
  }, W.useDebugValue = function() {
  }, W.useDeferredValue = function(h, O) {
    return K.H.useDeferredValue(h, O);
  }, W.useEffect = function(h, O) {
    return K.H.useEffect(h, O);
  }, W.useEffectEvent = function(h) {
    return K.H.useEffectEvent(h);
  }, W.useId = function() {
    return K.H.useId();
  }, W.useImperativeHandle = function(h, O, B) {
    return K.H.useImperativeHandle(h, O, B);
  }, W.useInsertionEffect = function(h, O) {
    return K.H.useInsertionEffect(h, O);
  }, W.useLayoutEffect = function(h, O) {
    return K.H.useLayoutEffect(h, O);
  }, W.useMemo = function(h, O) {
    return K.H.useMemo(h, O);
  }, W.useOptimistic = function(h, O) {
    return K.H.useOptimistic(h, O);
  }, W.useReducer = function(h, O, B) {
    return K.H.useReducer(h, O, B);
  }, W.useRef = function(h) {
    return K.H.useRef(h);
  }, W.useState = function(h) {
    return K.H.useState(h);
  }, W.useSyncExternalStore = function(h, O, B) {
    return K.H.useSyncExternalStore(
      h,
      O,
      B
    );
  }, W.useTransition = function() {
    return K.H.useTransition();
  }, W.version = "19.2.4", W;
}
var yd;
function Sf() {
  return yd || (yd = 1, af.exports = t0()), af.exports;
}
var U = Sf(), uf = { exports: {} }, du = {}, cf = { exports: {} }, sf = {};
var vd;
function e0() {
  return vd || (vd = 1, (function(r) {
    function i(T, x) {
      var V = T.length;
      T.push(x);
      t: for (; 0 < V; ) {
        var at = V - 1 >>> 1, dt = T[at];
        if (0 < g(dt, x))
          T[at] = x, T[V] = dt, V = at;
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
        t: for (var at = 0, dt = T.length, h = dt >>> 1; at < h; ) {
          var O = 2 * (at + 1) - 1, B = T[O], j = O + 1, H = T[j];
          if (0 > g(B, V))
            j < dt && 0 > g(H, B) ? (T[at] = H, T[j] = V, at = j) : (T[at] = B, T[O] = V, at = O);
          else if (j < dt && 0 > g(H, V))
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
    var C = [], z = [], J = 1, G = null, P = 3, Wt = !1, le = !1, zt = !1, At = !1, ne = typeof setTimeout == "function" ? setTimeout : null, vt = typeof clearTimeout == "function" ? clearTimeout : null, Xt = typeof setImmediate < "u" ? setImmediate : null;
    function Ut(T) {
      for (var x = s(z); x !== null; ) {
        if (x.callback === null) f(z);
        else if (x.startTime <= T)
          f(z), x.sortIndex = x.expirationTime, i(C, x);
        else break;
        x = s(z);
      }
    }
    function De(T) {
      if (zt = !1, Ut(T), !le)
        if (s(C) !== null)
          le = !0, $t || ($t = !0, ue());
        else {
          var x = s(z);
          x !== null && de(De, x.startTime - T);
        }
    }
    var $t = !1, K = -1, ae = 5, Ue = -1;
    function Dl() {
      return At ? !0 : !(r.unstable_now() - Ue < ae);
    }
    function re() {
      if (At = !1, $t) {
        var T = r.unstable_now();
        Ue = T;
        var x = !0;
        try {
          t: {
            le = !1, zt && (zt = !1, vt(K), K = -1), Wt = !0;
            var V = P;
            try {
              e: {
                for (Ut(T), G = s(C); G !== null && !(G.expirationTime > T && Dl()); ) {
                  var at = G.callback;
                  if (typeof at == "function") {
                    G.callback = null, P = G.priorityLevel;
                    var dt = at(
                      G.expirationTime <= T
                    );
                    if (T = r.unstable_now(), typeof dt == "function") {
                      G.callback = dt, Ut(T), x = !0;
                      break e;
                    }
                    G === s(C) && f(C), Ut(T);
                  } else f(C);
                  G = s(C);
                }
                if (G !== null) x = !0;
                else {
                  var h = s(z);
                  h !== null && de(
                    De,
                    h.startTime - T
                  ), x = !1;
                }
              }
              break t;
            } finally {
              G = null, P = V, Wt = !1;
            }
            x = void 0;
          }
        } finally {
          x ? ue() : $t = !1;
        }
      }
    }
    var ue;
    if (typeof Xt == "function")
      ue = function() {
        Xt(re);
      };
    else if (typeof MessageChannel < "u") {
      var Zt = new MessageChannel(), Kt = Zt.port2;
      Zt.port1.onmessage = re, ue = function() {
        Kt.postMessage(null);
      };
    } else
      ue = function() {
        ne(re, 0);
      };
    function de(T, x) {
      K = ne(function() {
        T(r.unstable_now());
      }, x);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, r.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ae = 0 < T ? Math.floor(1e3 / T) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return P;
    }, r.unstable_next = function(T) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var x = 3;
          break;
        default:
          x = P;
      }
      var V = P;
      P = x;
      try {
        return T();
      } finally {
        P = V;
      }
    }, r.unstable_requestPaint = function() {
      At = !0;
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
      var V = P;
      P = T;
      try {
        return x();
      } finally {
        P = V;
      }
    }, r.unstable_scheduleCallback = function(T, x, V) {
      var at = r.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? at + V : at) : V = at, T) {
        case 1:
          var dt = -1;
          break;
        case 2:
          dt = 250;
          break;
        case 5:
          dt = 1073741823;
          break;
        case 4:
          dt = 1e4;
          break;
        default:
          dt = 5e3;
      }
      return dt = V + dt, T = {
        id: J++,
        callback: x,
        priorityLevel: T,
        startTime: V,
        expirationTime: dt,
        sortIndex: -1
      }, V > at ? (T.sortIndex = V, i(z, T), s(C) === null && T === s(z) && (zt ? (vt(K), K = -1) : zt = !0, de(De, V - at))) : (T.sortIndex = dt, i(C, T), le || Wt || (le = !0, $t || ($t = !0, ue()))), T;
    }, r.unstable_shouldYield = Dl, r.unstable_wrapCallback = function(T) {
      var x = P;
      return function() {
        var V = P;
        P = x;
        try {
          return T.apply(this, arguments);
        } finally {
          P = V;
        }
      };
    };
  })(sf)), sf;
}
var gd;
function l0() {
  return gd || (gd = 1, cf.exports = e0()), cf.exports;
}
var ff = { exports: {} }, fe = {};
var pd;
function n0() {
  if (pd) return fe;
  pd = 1;
  var r = Sf();
  function i(C) {
    var z = "https://react.dev/errors/" + C;
    if (1 < arguments.length) {
      z += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var J = 2; J < arguments.length; J++)
        z += "&args[]=" + encodeURIComponent(arguments[J]);
    }
    return "Minified React error #" + C + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function M(C, z, J) {
    var G = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: g,
      key: G == null ? null : "" + G,
      children: C,
      containerInfo: z,
      implementation: J
    };
  }
  var q = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Y(C, z) {
    if (C === "font") return "";
    if (typeof z == "string")
      return z === "use-credentials" ? z : "";
  }
  return fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, fe.createPortal = function(C, z) {
    var J = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11)
      throw Error(i(299));
    return M(C, z, null, J);
  }, fe.flushSync = function(C) {
    var z = q.T, J = f.p;
    try {
      if (q.T = null, f.p = 2, C) return C();
    } finally {
      q.T = z, f.p = J, f.d.f();
    }
  }, fe.preconnect = function(C, z) {
    typeof C == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, f.d.C(C, z));
  }, fe.prefetchDNS = function(C) {
    typeof C == "string" && f.d.D(C);
  }, fe.preinit = function(C, z) {
    if (typeof C == "string" && z && typeof z.as == "string") {
      var J = z.as, G = Y(J, z.crossOrigin), P = typeof z.integrity == "string" ? z.integrity : void 0, Wt = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
      J === "style" ? f.d.S(
        C,
        typeof z.precedence == "string" ? z.precedence : void 0,
        {
          crossOrigin: G,
          integrity: P,
          fetchPriority: Wt
        }
      ) : J === "script" && f.d.X(C, {
        crossOrigin: G,
        integrity: P,
        fetchPriority: Wt,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0
      });
    }
  }, fe.preinitModule = function(C, z) {
    if (typeof C == "string")
      if (typeof z == "object" && z !== null) {
        if (z.as == null || z.as === "script") {
          var J = Y(
            z.as,
            z.crossOrigin
          );
          f.d.M(C, {
            crossOrigin: J,
            integrity: typeof z.integrity == "string" ? z.integrity : void 0,
            nonce: typeof z.nonce == "string" ? z.nonce : void 0
          });
        }
      } else z == null && f.d.M(C);
  }, fe.preload = function(C, z) {
    if (typeof C == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
      var J = z.as, G = Y(J, z.crossOrigin);
      f.d.L(C, J, {
        crossOrigin: G,
        integrity: typeof z.integrity == "string" ? z.integrity : void 0,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0,
        type: typeof z.type == "string" ? z.type : void 0,
        fetchPriority: typeof z.fetchPriority == "string" ? z.fetchPriority : void 0,
        referrerPolicy: typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0,
        imageSrcSet: typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0,
        imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0,
        media: typeof z.media == "string" ? z.media : void 0
      });
    }
  }, fe.preloadModule = function(C, z) {
    if (typeof C == "string")
      if (z) {
        var J = Y(z.as, z.crossOrigin);
        f.d.m(C, {
          as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
          crossOrigin: J,
          integrity: typeof z.integrity == "string" ? z.integrity : void 0
        });
      } else f.d.m(C);
  }, fe.requestFormReset = function(C) {
    f.d.r(C);
  }, fe.unstable_batchedUpdates = function(C, z) {
    return C(z);
  }, fe.useFormState = function(C, z, J) {
    return q.H.useFormState(C, z, J);
  }, fe.useFormStatus = function() {
    return q.H.useHostTransitionStatus();
  }, fe.version = "19.2.4", fe;
}
var bd;
function a0() {
  if (bd) return ff.exports;
  bd = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), ff.exports = n0(), ff.exports;
}
var Sd;
function u0() {
  if (Sd) return du;
  Sd = 1;
  var r = l0(), i = Sf(), s = a0();
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
  function z(t) {
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
  var G = Object.assign, P = /* @__PURE__ */ Symbol.for("react.element"), Wt = /* @__PURE__ */ Symbol.for("react.transitional.element"), le = /* @__PURE__ */ Symbol.for("react.portal"), zt = /* @__PURE__ */ Symbol.for("react.fragment"), At = /* @__PURE__ */ Symbol.for("react.strict_mode"), ne = /* @__PURE__ */ Symbol.for("react.profiler"), vt = /* @__PURE__ */ Symbol.for("react.consumer"), Xt = /* @__PURE__ */ Symbol.for("react.context"), Ut = /* @__PURE__ */ Symbol.for("react.forward_ref"), De = /* @__PURE__ */ Symbol.for("react.suspense"), $t = /* @__PURE__ */ Symbol.for("react.suspense_list"), K = /* @__PURE__ */ Symbol.for("react.memo"), ae = /* @__PURE__ */ Symbol.for("react.lazy"), Ue = /* @__PURE__ */ Symbol.for("react.activity"), Dl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), re = Symbol.iterator;
  function ue(t) {
    return t === null || typeof t != "object" ? null : (t = re && t[re] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Zt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Kt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Zt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case zt:
        return "Fragment";
      case ne:
        return "Profiler";
      case At:
        return "StrictMode";
      case De:
        return "Suspense";
      case $t:
        return "SuspenseList";
      case Ue:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case le:
          return "Portal";
        case Xt:
          return t.displayName || "Context";
        case vt:
          return (t._context.displayName || "Context") + ".Consumer";
        case Ut:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case K:
          return e = t.displayName || null, e !== null ? e : Kt(t.type) || "Memo";
        case ae:
          e = t._payload, t = t._init;
          try {
            return Kt(t(e));
          } catch {
          }
      }
    return null;
  }
  var de = Array.isArray, T = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, at = [], dt = -1;
  function h(t) {
    return { current: t };
  }
  function O(t) {
    0 > dt || (t.current = at[dt], at[dt] = null, dt--);
  }
  function B(t, e) {
    dt++, at[dt] = t.current, t.current = e;
  }
  var j = h(null), H = h(null), k = h(null), ft = h(null);
  function Rt(t, e) {
    switch (B(k, e), B(H, t), B(j, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Bh(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Bh(e), t = Hh(e, t);
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
    O(j), B(j, t);
  }
  function Nt() {
    O(j), O(H), O(k);
  }
  function Ul(t) {
    t.memoizedState !== null && B(ft, t);
    var e = j.current, l = Hh(e, t.type);
    e !== l && (B(H, t), B(j, l));
  }
  function tt(t) {
    H.current === t && (O(j), O(H)), ft.current === t && (O(ft), su._currentValue = V);
  }
  var sn, vu;
  function me(t) {
    if (sn === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        sn = e && e[1] || "", vu = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + sn + t + vu;
  }
  var Ft = !1;
  function Fe(t, e) {
    if (!t || Ft) return "";
    Ft = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var N = function() {
                throw Error();
              };
              if (Object.defineProperty(N.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(N, []);
                } catch (_) {
                  var S = _;
                }
                Reflect.construct(t, [], N);
              } else {
                try {
                  N.call();
                } catch (_) {
                  S = _;
                }
                t.call(N.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                S = _;
              }
              (N = t()) && typeof N.catch == "function" && N.catch(function() {
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
    return (l = t ? t.displayName || t.name : "") ? me(l) : "";
  }
  function qn(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return me(t.type);
      case 16:
        return me("Lazy");
      case 13:
        return t.child !== e && e !== null ? me("Suspense Fallback") : me("Suspense");
      case 19:
        return me("SuspenseList");
      case 0:
      case 15:
        return Fe(t.type, !1);
      case 11:
        return Fe(t.type.render, !1);
      case 1:
        return Fe(t.type, !0);
      case 31:
        return me("Activity");
      default:
        return "";
    }
  }
  function fn(t) {
    try {
      var e = "", l = null;
      do
        e += qn(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Ie = Object.prototype.hasOwnProperty, ql = r.unstable_scheduleCallback, fl = r.unstable_cancelCallback, xn = r.unstable_shouldYield, ba = r.unstable_requestPaint, Jt = r.unstable_now, Zi = r.unstable_getCurrentPriorityLevel, Pe = r.unstable_ImmediatePriority, gu = r.unstable_UserBlockingPriority, Ke = r.unstable_NormalPriority, Ki = r.unstable_LowPriority, qe = r.unstable_IdlePriority, Ji = r.log, Sa = r.unstable_setDisableYieldValue, rn = null, Bt = null;
  function ie(t) {
    if (typeof Ji == "function" && Sa(t), Bt && typeof Bt.setStrictMode == "function")
      try {
        Bt.setStrictMode(rn, t);
      } catch {
      }
  }
  var oe = Math.clz32 ? Math.clz32 : Bn, pu = Math.log, ki = Math.LN2;
  function Bn(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (pu(t) / ki | 0) | 0;
  }
  var ce = 256, _e = 262144, on = 4194304;
  function tl(t) {
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
  function hn(t, e, l) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var a = 0, u = t.suspendedLanes, c = t.pingedLanes;
    t = t.warmLanes;
    var o = n & 134217727;
    return o !== 0 ? (n = o & ~u, n !== 0 ? a = tl(n) : (c &= o, c !== 0 ? a = tl(c) : l || (l = o & ~t, l !== 0 && (a = tl(l))))) : (o = n & ~u, o !== 0 ? a = tl(o) : c !== 0 ? a = tl(c) : l || (l = n & ~t, l !== 0 && (a = tl(l)))), a === 0 ? 0 : e !== 0 && e !== a && (e & u) === 0 && (u = a & -a, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : a;
  }
  function rl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function bu(t, e) {
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
  function ol() {
    var t = on;
    return on <<= 1, (on & 62914560) === 0 && (on = 4194304), t;
  }
  function Hn(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function xe(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function dn(t, e, l, n, a, u) {
    var c = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var o = t.entanglements, d = t.expirationTimes, b = t.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var E = 31 - oe(l), N = 1 << E;
      o[E] = 0, d[E] = -1;
      var S = b[E];
      if (S !== null)
        for (b[E] = null, E = 0; E < S.length; E++) {
          var _ = S[E];
          _ !== null && (_.lane &= -536870913);
        }
      l &= ~N;
    }
    n !== 0 && mn(t, n, 0), u !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(c & ~e));
  }
  function mn(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var n = 31 - oe(e);
    t.entangledLanes |= e, t.entanglements[n] = t.entanglements[n] | 1073741824 | l & 261930;
  }
  function yn(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var n = 31 - oe(l), a = 1 << n;
      a & e | t[n] & e && (t[n] |= e), l &= ~a;
    }
  }
  function Su(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : _a(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function _a(t) {
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
  function Ea(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function _u() {
    var t = x.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : ud(t.type));
  }
  function Eu(t, e) {
    var l = x.p;
    try {
      return x.p = t, e();
    } finally {
      x.p = l;
    }
  }
  var el = Math.random().toString(36).slice(2), Qt = "__reactFiber$" + el, se = "__reactProps$" + el, ll = "__reactContainer$" + el, Ta = "__reactEvents$" + el, Aa = "__reactListeners$" + el, Wi = "__reactHandles$" + el, Tu = "__reactResources$" + el, xl = "__reactMarker$" + el;
  function y(t) {
    delete t[Qt], delete t[se], delete t[Ta], delete t[Aa], delete t[Wi];
  }
  function D(t) {
    var e = t[Qt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[ll] || l[Qt]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = Qh(t); t !== null; ) {
            if (l = t[Qt]) return l;
            t = Qh(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function X(t) {
    if (t = t[Qt] || t[ll]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function $(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function Mt(t) {
    var e = t[Tu];
    return e || (e = t[Tu] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function et(t) {
    t[xl] = !0;
  }
  var Ee = /* @__PURE__ */ new Set(), Bl = {};
  function Te(t, e) {
    Ht(t, e), Ht(t + "Capture", e);
  }
  function Ht(t, e) {
    for (Bl[t] = e, t = 0; t < e.length; t++)
      Ee.add(e[t]);
  }
  var jn = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), gt = {}, hl = {};
  function Vd(t) {
    return Ie.call(hl, t) ? !0 : Ie.call(gt, t) ? !1 : jn.test(t) ? hl[t] = !0 : (gt[t] = !0, !1);
  }
  function Au(t, e, l) {
    if (Vd(e))
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
  function Ou(t, e, l) {
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
  function dl(t, e, l, n) {
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
  function Be(t) {
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
  function zf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Zd(t, e, l) {
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
  function $i(t) {
    if (!t._valueTracker) {
      var e = zf(t) ? "checked" : "value";
      t._valueTracker = Zd(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Nf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), n = "";
    return t && (n = zf(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== l ? (e.setValue(t), !0) : !1;
  }
  function zu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Kd = /[\n"\\]/g;
  function He(t) {
    return t.replace(
      Kd,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Fi(t, e, l, n, a, u, c, o) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), e != null ? c === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Be(e)) : t.value !== "" + Be(e) && (t.value = "" + Be(e)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), e != null ? Ii(t, c, Be(e)) : l != null ? Ii(t, c, Be(l)) : n != null && t.removeAttribute("value"), a == null && u != null && (t.defaultChecked = !!u), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.name = "" + Be(o) : t.removeAttribute("name");
  }
  function Rf(t, e, l, n, a, u, c, o) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        $i(t);
        return;
      }
      l = l != null ? "" + Be(l) : "", e = e != null ? "" + Be(e) : l, o || e === t.value || (t.value = e), t.defaultValue = e;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = o ? t.checked : !!n, t.defaultChecked = !!n, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c), $i(t);
  }
  function Ii(t, e, l) {
    e === "number" && zu(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function Ln(t, e, l, n) {
    if (t = t.options, e) {
      e = {};
      for (var a = 0; a < l.length; a++)
        e["$" + l[a]] = !0;
      for (l = 0; l < t.length; l++)
        a = e.hasOwnProperty("$" + t[l].value), t[l].selected !== a && (t[l].selected = a), a && n && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + Be(l), e = null, a = 0; a < t.length; a++) {
        if (t[a].value === l) {
          t[a].selected = !0, n && (t[a].defaultSelected = !0);
          return;
        }
        e !== null || t[a].disabled || (e = t[a]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Mf(t, e, l) {
    if (e != null && (e = "" + Be(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Be(l) : "";
  }
  function Cf(t, e, l, n) {
    if (e == null) {
      if (n != null) {
        if (l != null) throw Error(f(92));
        if (de(n)) {
          if (1 < n.length) throw Error(f(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), e = l;
    }
    l = Be(e), t.defaultValue = l, n = t.textContent, n === l && n !== "" && n !== null && (t.value = n), $i(t);
  }
  function Yn(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Jd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Df(t, e, l) {
    var n = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : n ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Jd.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function Uf(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(f(62));
    if (t = t.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "");
      for (var a in e)
        n = e[a], e.hasOwnProperty(a) && l[a] !== n && Df(t, a, n);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && Df(t, u, e[u]);
  }
  function Pi(t) {
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
  var kd = /* @__PURE__ */ new Map([
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
  ]), Wd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Nu(t) {
    return Wd.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function ml() {
  }
  var tc = null;
  function ec(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Gn = null, wn = null;
  function qf(t) {
    var e = X(t);
    if (e && (t = e.stateNode)) {
      var l = t[se] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Fi(
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
              'input[name="' + He(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var n = l[e];
              if (n !== t && n.form === t.form) {
                var a = n[se] || null;
                if (!a) throw Error(f(90));
                Fi(
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
              n = l[e], n.form === t.form && Nf(n);
          }
          break t;
        case "textarea":
          Mf(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && Ln(t, !!l.multiple, e, !1);
      }
    }
  }
  var lc = !1;
  function xf(t, e, l) {
    if (lc) return t(e, l);
    lc = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (lc = !1, (Gn !== null || wn !== null) && (mi(), Gn && (e = Gn, t = wn, wn = Gn = null, qf(e), t)))
        for (e = 0; e < t.length; e++) qf(t[e]);
    }
  }
  function Oa(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var n = l[se] || null;
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
  var yl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), nc = !1;
  if (yl)
    try {
      var za = {};
      Object.defineProperty(za, "passive", {
        get: function() {
          nc = !0;
        }
      }), window.addEventListener("test", za, za), window.removeEventListener("test", za, za);
    } catch {
      nc = !1;
    }
  var Hl = null, ac = null, Ru = null;
  function Bf() {
    if (Ru) return Ru;
    var t, e = ac, l = e.length, n, a = "value" in Hl ? Hl.value : Hl.textContent, u = a.length;
    for (t = 0; t < l && e[t] === a[t]; t++) ;
    var c = l - t;
    for (n = 1; n <= c && e[l - n] === a[u - n]; n++) ;
    return Ru = a.slice(t, 1 < n ? 1 - n : void 0);
  }
  function Mu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Cu() {
    return !0;
  }
  function Hf() {
    return !1;
  }
  function ye(t) {
    function e(l, n, a, u, c) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var o in t)
        t.hasOwnProperty(o) && (l = t[o], this[o] = l ? l(u) : u[o]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Cu : Hf, this.isPropagationStopped = Hf, this;
    }
    return G(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Cu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Cu);
      },
      persist: function() {
      },
      isPersistent: Cu
    }), e;
  }
  var vn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Du = ye(vn), Na = G({}, vn, { view: 0, detail: 0 }), $d = ye(Na), uc, ic, Ra, Uu = G({}, Na, {
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
    getModifierState: sc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ra && (Ra && t.type === "mousemove" ? (uc = t.screenX - Ra.screenX, ic = t.screenY - Ra.screenY) : ic = uc = 0, Ra = t), uc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : ic;
    }
  }), jf = ye(Uu), Fd = G({}, Uu, { dataTransfer: 0 }), Id = ye(Fd), Pd = G({}, Na, { relatedTarget: 0 }), cc = ye(Pd), tm = G({}, vn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), em = ye(tm), lm = G({}, vn, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), nm = ye(lm), am = G({}, vn, { data: 0 }), Lf = ye(am), um = {
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
  }, im = {
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
  }, cm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function sm(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = cm[t]) ? !!e[t] : !1;
  }
  function sc() {
    return sm;
  }
  var fm = G({}, Na, {
    key: function(t) {
      if (t.key) {
        var e = um[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Mu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? im[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: sc,
    charCode: function(t) {
      return t.type === "keypress" ? Mu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Mu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), rm = ye(fm), om = G({}, Uu, {
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
  }), Yf = ye(om), hm = G({}, Na, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sc
  }), dm = ye(hm), mm = G({}, vn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ym = ye(mm), vm = G({}, Uu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), gm = ye(vm), pm = G({}, vn, {
    newState: 0,
    oldState: 0
  }), bm = ye(pm), Sm = [9, 13, 27, 32], fc = yl && "CompositionEvent" in window, Ma = null;
  yl && "documentMode" in document && (Ma = document.documentMode);
  var _m = yl && "TextEvent" in window && !Ma, Gf = yl && (!fc || Ma && 8 < Ma && 11 >= Ma), wf = " ", Xf = !1;
  function Qf(t, e) {
    switch (t) {
      case "keyup":
        return Sm.indexOf(e.keyCode) !== -1;
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
  function Vf(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Xn = !1;
  function Em(t, e) {
    switch (t) {
      case "compositionend":
        return Vf(e);
      case "keypress":
        return e.which !== 32 ? null : (Xf = !0, wf);
      case "textInput":
        return t = e.data, t === wf && Xf ? null : t;
      default:
        return null;
    }
  }
  function Tm(t, e) {
    if (Xn)
      return t === "compositionend" || !fc && Qf(t, e) ? (t = Bf(), Ru = ac = Hl = null, Xn = !1, t) : null;
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
        return Gf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Am = {
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
  function Zf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Am[t.type] : e === "textarea";
  }
  function Kf(t, e, l, n) {
    Gn ? wn ? wn.push(n) : wn = [n] : Gn = n, e = _i(e, "onChange"), 0 < e.length && (l = new Du(
      "onChange",
      "change",
      null,
      l,
      n
    ), t.push({ event: l, listeners: e }));
  }
  var Ca = null, Da = null;
  function Om(t) {
    Mh(t, 0);
  }
  function qu(t) {
    var e = $(t);
    if (Nf(e)) return t;
  }
  function Jf(t, e) {
    if (t === "change") return e;
  }
  var kf = !1;
  if (yl) {
    var rc;
    if (yl) {
      var oc = "oninput" in document;
      if (!oc) {
        var Wf = document.createElement("div");
        Wf.setAttribute("oninput", "return;"), oc = typeof Wf.oninput == "function";
      }
      rc = oc;
    } else rc = !1;
    kf = rc && (!document.documentMode || 9 < document.documentMode);
  }
  function $f() {
    Ca && (Ca.detachEvent("onpropertychange", Ff), Da = Ca = null);
  }
  function Ff(t) {
    if (t.propertyName === "value" && qu(Da)) {
      var e = [];
      Kf(
        e,
        Da,
        t,
        ec(t)
      ), xf(Om, e);
    }
  }
  function zm(t, e, l) {
    t === "focusin" ? ($f(), Ca = e, Da = l, Ca.attachEvent("onpropertychange", Ff)) : t === "focusout" && $f();
  }
  function Nm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return qu(Da);
  }
  function Rm(t, e) {
    if (t === "click") return qu(e);
  }
  function Mm(t, e) {
    if (t === "input" || t === "change")
      return qu(e);
  }
  function Cm(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Ae = typeof Object.is == "function" ? Object.is : Cm;
  function Ua(t, e) {
    if (Ae(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), n = Object.keys(e);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!Ie.call(e, a) || !Ae(t[a], e[a]))
        return !1;
    }
    return !0;
  }
  function If(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Pf(t, e) {
    var l = If(t);
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
      l = If(l);
    }
  }
  function tr(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? tr(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function er(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = zu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = zu(t.document);
    }
    return e;
  }
  function hc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Dm = yl && "documentMode" in document && 11 >= document.documentMode, Qn = null, dc = null, qa = null, mc = !1;
  function lr(t, e, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    mc || Qn == null || Qn !== zu(n) || (n = Qn, "selectionStart" in n && hc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), qa && Ua(qa, n) || (qa = n, n = _i(dc, "onSelect"), 0 < n.length && (e = new Du(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: n }), e.target = Qn)));
  }
  function gn(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var Vn = {
    animationend: gn("Animation", "AnimationEnd"),
    animationiteration: gn("Animation", "AnimationIteration"),
    animationstart: gn("Animation", "AnimationStart"),
    transitionrun: gn("Transition", "TransitionRun"),
    transitionstart: gn("Transition", "TransitionStart"),
    transitioncancel: gn("Transition", "TransitionCancel"),
    transitionend: gn("Transition", "TransitionEnd")
  }, yc = {}, nr = {};
  yl && (nr = document.createElement("div").style, "AnimationEvent" in window || (delete Vn.animationend.animation, delete Vn.animationiteration.animation, delete Vn.animationstart.animation), "TransitionEvent" in window || delete Vn.transitionend.transition);
  function pn(t) {
    if (yc[t]) return yc[t];
    if (!Vn[t]) return t;
    var e = Vn[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in nr)
        return yc[t] = e[l];
    return t;
  }
  var ar = pn("animationend"), ur = pn("animationiteration"), ir = pn("animationstart"), Um = pn("transitionrun"), qm = pn("transitionstart"), xm = pn("transitioncancel"), cr = pn("transitionend"), sr = /* @__PURE__ */ new Map(), vc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  vc.push("scrollEnd");
  function Je(t, e) {
    sr.set(t, e), Te(e, [t]);
  }
  var xu = typeof reportError == "function" ? reportError : function(t) {
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
  }, je = [], Zn = 0, gc = 0;
  function Bu() {
    for (var t = Zn, e = gc = Zn = 0; e < t; ) {
      var l = je[e];
      je[e++] = null;
      var n = je[e];
      je[e++] = null;
      var a = je[e];
      je[e++] = null;
      var u = je[e];
      if (je[e++] = null, n !== null && a !== null) {
        var c = n.pending;
        c === null ? a.next = a : (a.next = c.next, c.next = a), n.pending = a;
      }
      u !== 0 && fr(l, a, u);
    }
  }
  function Hu(t, e, l, n) {
    je[Zn++] = t, je[Zn++] = e, je[Zn++] = l, je[Zn++] = n, gc |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
  }
  function pc(t, e, l, n) {
    return Hu(t, e, l, n), ju(t);
  }
  function bn(t, e) {
    return Hu(t, null, null, e), ju(t);
  }
  function fr(t, e, l) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, u = t.return; u !== null; )
      u.childLanes |= l, n = u.alternate, n !== null && (n.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (a = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, a && e !== null && (a = 31 - oe(l), t = u.hiddenUpdates, n = t[a], n === null ? t[a] = [e] : n.push(e), e.lane = l | 536870912), u) : null;
  }
  function ju(t) {
    if (50 < eu)
      throw eu = 0, Ns = null, Error(f(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Kn = {};
  function Bm(t, e, l, n) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Oe(t, e, l, n) {
    return new Bm(t, e, l, n);
  }
  function bc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function vl(t, e) {
    var l = t.alternate;
    return l === null ? (l = Oe(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function rr(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Lu(t, e, l, n, a, u) {
    var c = 0;
    if (n = t, typeof t == "function") bc(t) && (c = 1);
    else if (typeof t == "string")
      c = Gy(
        t,
        l,
        j.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Ue:
          return t = Oe(31, l, e, a), t.elementType = Ue, t.lanes = u, t;
        case zt:
          return Sn(l.children, a, u, e);
        case At:
          c = 8, a |= 24;
          break;
        case ne:
          return t = Oe(12, l, e, a | 2), t.elementType = ne, t.lanes = u, t;
        case De:
          return t = Oe(13, l, e, a), t.elementType = De, t.lanes = u, t;
        case $t:
          return t = Oe(19, l, e, a), t.elementType = $t, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Xt:
                c = 10;
                break t;
              case vt:
                c = 9;
                break t;
              case Ut:
                c = 11;
                break t;
              case K:
                c = 14;
                break t;
              case ae:
                c = 16, n = null;
                break t;
            }
          c = 29, l = Error(
            f(130, t === null ? "null" : typeof t, "")
          ), n = null;
      }
    return e = Oe(c, l, e, a), e.elementType = t, e.type = n, e.lanes = u, e;
  }
  function Sn(t, e, l, n) {
    return t = Oe(7, t, n, e), t.lanes = l, t;
  }
  function Sc(t, e, l) {
    return t = Oe(6, t, null, e), t.lanes = l, t;
  }
  function or(t) {
    var e = Oe(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function _c(t, e, l) {
    return e = Oe(
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
  var hr = /* @__PURE__ */ new WeakMap();
  function Le(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = hr.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: fn(e)
      }, hr.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: fn(e)
    };
  }
  var Jn = [], kn = 0, Yu = null, xa = 0, Ye = [], Ge = 0, jl = null, nl = 1, al = "";
  function gl(t, e) {
    Jn[kn++] = xa, Jn[kn++] = Yu, Yu = t, xa = e;
  }
  function dr(t, e, l) {
    Ye[Ge++] = nl, Ye[Ge++] = al, Ye[Ge++] = jl, jl = t;
    var n = nl;
    t = al;
    var a = 32 - oe(n) - 1;
    n &= ~(1 << a), l += 1;
    var u = 32 - oe(e) + a;
    if (30 < u) {
      var c = a - a % 5;
      u = (n & (1 << c) - 1).toString(32), n >>= c, a -= c, nl = 1 << 32 - oe(e) + a | l << a | n, al = u + t;
    } else
      nl = 1 << u | l << a | n, al = t;
  }
  function Ec(t) {
    t.return !== null && (gl(t, 1), dr(t, 1, 0));
  }
  function Tc(t) {
    for (; t === Yu; )
      Yu = Jn[--kn], Jn[kn] = null, xa = Jn[--kn], Jn[kn] = null;
    for (; t === jl; )
      jl = Ye[--Ge], Ye[Ge] = null, al = Ye[--Ge], Ye[Ge] = null, nl = Ye[--Ge], Ye[Ge] = null;
  }
  function mr(t, e) {
    Ye[Ge++] = nl, Ye[Ge++] = al, Ye[Ge++] = jl, nl = e.id, al = e.overflow, jl = t;
  }
  var It = null, Et = null, ct = !1, Ll = null, we = !1, Ac = Error(f(519));
  function Yl(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ba(Le(e, t)), Ac;
  }
  function yr(t) {
    var e = t.stateNode, l = t.type, n = t.memoizedProps;
    switch (e[Qt] = t, e[se] = n, l) {
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
        for (l = 0; l < nu.length; l++)
          nt(nu[l], e);
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
        nt("invalid", e), Rf(
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
        nt("invalid", e), Cf(e, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || n.suppressHydrationWarning === !0 || qh(e.textContent, l) ? (n.popover != null && (nt("beforetoggle", e), nt("toggle", e)), n.onScroll != null && nt("scroll", e), n.onScrollEnd != null && nt("scrollend", e), n.onClick != null && (e.onclick = ml), e = !0) : e = !1, e || Yl(t, !0);
  }
  function vr(t) {
    for (It = t.return; It; )
      switch (It.tag) {
        case 5:
        case 31:
        case 13:
          we = !1;
          return;
        case 27:
        case 3:
          we = !0;
          return;
        default:
          It = It.return;
      }
  }
  function Wn(t) {
    if (t !== It) return !1;
    if (!ct) return vr(t), ct = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Xs(t.type, t.memoizedProps)), l = !l), l && Et && Yl(t), vr(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      Et = Xh(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      Et = Xh(t);
    } else
      e === 27 ? (e = Et, Pl(t.type) ? (t = Js, Js = null, Et = t) : Et = e) : Et = It ? Qe(t.stateNode.nextSibling) : null;
    return !0;
  }
  function _n() {
    Et = It = null, ct = !1;
  }
  function Oc() {
    var t = Ll;
    return t !== null && (be === null ? be = t : be.push.apply(
      be,
      t
    ), Ll = null), t;
  }
  function Ba(t) {
    Ll === null ? Ll = [t] : Ll.push(t);
  }
  var zc = h(null), En = null, pl = null;
  function Gl(t, e, l) {
    B(zc, e._currentValue), e._currentValue = l;
  }
  function bl(t) {
    t._currentValue = zc.current, O(zc);
  }
  function Nc(t, e, l) {
    for (; t !== null; ) {
      var n = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function Rc(t, e, l, n) {
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
              u.lanes |= l, o = u.alternate, o !== null && (o.lanes |= l), Nc(
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
        c.lanes |= l, u = c.alternate, u !== null && (u.lanes |= l), Nc(c, l, t), c = null;
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
  function $n(t, e, l, n) {
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
          Ae(a.pendingProps.value, c.value) || (t !== null ? t.push(o) : t = [o]);
        }
      } else if (a === ft.current) {
        if (c = a.alternate, c === null) throw Error(f(387));
        c.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(su) : t = [su]);
      }
      a = a.return;
    }
    t !== null && Rc(
      e,
      t,
      l,
      n
    ), e.flags |= 262144;
  }
  function Gu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ae(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Tn(t) {
    En = t, pl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Pt(t) {
    return gr(En, t);
  }
  function wu(t, e) {
    return En === null && Tn(t), gr(t, e);
  }
  function gr(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, pl === null) {
      if (t === null) throw Error(f(308));
      pl = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else pl = pl.next = e;
    return l;
  }
  var Hm = typeof AbortController < "u" ? AbortController : function() {
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
  }, jm = r.unstable_scheduleCallback, Lm = r.unstable_NormalPriority, jt = {
    $$typeof: Xt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Mc() {
    return {
      controller: new Hm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ha(t) {
    t.refCount--, t.refCount === 0 && jm(Lm, function() {
      t.controller.abort();
    });
  }
  var ja = null, Cc = 0, Fn = 0, In = null;
  function Ym(t, e) {
    if (ja === null) {
      var l = ja = [];
      Cc = 0, Fn = qs(), In = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Cc++, e.then(pr, pr), e;
  }
  function pr() {
    if (--Cc === 0 && ja !== null) {
      In !== null && (In.status = "fulfilled");
      var t = ja;
      ja = null, Fn = 0, In = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Gm(t, e) {
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
  var br = T.S;
  T.S = function(t, e) {
    nh = Jt(), typeof e == "object" && e !== null && typeof e.then == "function" && Ym(t, e), br !== null && br(t, e);
  };
  var An = h(null);
  function Dc() {
    var t = An.current;
    return t !== null ? t : _t.pooledCache;
  }
  function Xu(t, e) {
    e === null ? B(An, An.current) : B(An, e.pool);
  }
  function Sr() {
    var t = Dc();
    return t === null ? null : { parent: jt._currentValue, pool: t };
  }
  var Pn = Error(f(460)), Uc = Error(f(474)), Qu = Error(f(542)), Vu = { then: function() {
  } };
  function _r(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Er(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(ml, ml), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Ar(t), t;
      default:
        if (typeof e.status == "string") e.then(ml, ml);
        else {
          if (t = _t, t !== null && 100 < t.shellSuspendCounter)
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
            throw t = e.reason, Ar(t), t;
        }
        throw zn = e, Pn;
    }
  }
  function On(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (zn = l, Pn) : l;
    }
  }
  var zn = null;
  function Tr() {
    if (zn === null) throw Error(f(459));
    var t = zn;
    return zn = null, t;
  }
  function Ar(t) {
    if (t === Pn || t === Qu)
      throw Error(f(483));
  }
  var ta = null, La = 0;
  function Zu(t) {
    var e = La;
    return La += 1, ta === null && (ta = []), Er(ta, t, e);
  }
  function Ya(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Ku(t, e) {
    throw e.$$typeof === P ? Error(f(525)) : (t = Object.prototype.toString.call(e), Error(
      f(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Or(t) {
    function e(v, m) {
      if (t) {
        var p = v.deletions;
        p === null ? (v.deletions = [m], v.flags |= 16) : p.push(m);
      }
    }
    function l(v, m) {
      if (!t) return null;
      for (; m !== null; )
        e(v, m), m = m.sibling;
      return null;
    }
    function n(v) {
      for (var m = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? m.set(v.key, v) : m.set(v.index, v), v = v.sibling;
      return m;
    }
    function a(v, m) {
      return v = vl(v, m), v.index = 0, v.sibling = null, v;
    }
    function u(v, m, p) {
      return v.index = p, t ? (p = v.alternate, p !== null ? (p = p.index, p < m ? (v.flags |= 67108866, m) : p) : (v.flags |= 67108866, m)) : (v.flags |= 1048576, m);
    }
    function c(v) {
      return t && v.alternate === null && (v.flags |= 67108866), v;
    }
    function o(v, m, p, A) {
      return m === null || m.tag !== 6 ? (m = Sc(p, v.mode, A), m.return = v, m) : (m = a(m, p), m.return = v, m);
    }
    function d(v, m, p, A) {
      var Q = p.type;
      return Q === zt ? E(
        v,
        m,
        p.props.children,
        A,
        p.key
      ) : m !== null && (m.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === ae && On(Q) === m.type) ? (m = a(m, p.props), Ya(m, p), m.return = v, m) : (m = Lu(
        p.type,
        p.key,
        p.props,
        null,
        v.mode,
        A
      ), Ya(m, p), m.return = v, m);
    }
    function b(v, m, p, A) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== p.containerInfo || m.stateNode.implementation !== p.implementation ? (m = _c(p, v.mode, A), m.return = v, m) : (m = a(m, p.children || []), m.return = v, m);
    }
    function E(v, m, p, A, Q) {
      return m === null || m.tag !== 7 ? (m = Sn(
        p,
        v.mode,
        A,
        Q
      ), m.return = v, m) : (m = a(m, p), m.return = v, m);
    }
    function N(v, m, p) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return m = Sc(
          "" + m,
          v.mode,
          p
        ), m.return = v, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Wt:
            return p = Lu(
              m.type,
              m.key,
              m.props,
              null,
              v.mode,
              p
            ), Ya(p, m), p.return = v, p;
          case le:
            return m = _c(
              m,
              v.mode,
              p
            ), m.return = v, m;
          case ae:
            return m = On(m), N(v, m, p);
        }
        if (de(m) || ue(m))
          return m = Sn(
            m,
            v.mode,
            p,
            null
          ), m.return = v, m;
        if (typeof m.then == "function")
          return N(v, Zu(m), p);
        if (m.$$typeof === Xt)
          return N(
            v,
            wu(v, m),
            p
          );
        Ku(v, m);
      }
      return null;
    }
    function S(v, m, p, A) {
      var Q = m !== null ? m.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return Q !== null ? null : o(v, m, "" + p, A);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Wt:
            return p.key === Q ? d(v, m, p, A) : null;
          case le:
            return p.key === Q ? b(v, m, p, A) : null;
          case ae:
            return p = On(p), S(v, m, p, A);
        }
        if (de(p) || ue(p))
          return Q !== null ? null : E(v, m, p, A, null);
        if (typeof p.then == "function")
          return S(
            v,
            m,
            Zu(p),
            A
          );
        if (p.$$typeof === Xt)
          return S(
            v,
            m,
            wu(v, p),
            A
          );
        Ku(v, p);
      }
      return null;
    }
    function _(v, m, p, A, Q) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return v = v.get(p) || null, o(m, v, "" + A, Q);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case Wt:
            return v = v.get(
              A.key === null ? p : A.key
            ) || null, d(m, v, A, Q);
          case le:
            return v = v.get(
              A.key === null ? p : A.key
            ) || null, b(m, v, A, Q);
          case ae:
            return A = On(A), _(
              v,
              m,
              p,
              A,
              Q
            );
        }
        if (de(A) || ue(A))
          return v = v.get(p) || null, E(m, v, A, Q, null);
        if (typeof A.then == "function")
          return _(
            v,
            m,
            p,
            Zu(A),
            Q
          );
        if (A.$$typeof === Xt)
          return _(
            v,
            m,
            p,
            wu(m, A),
            Q
          );
        Ku(m, A);
      }
      return null;
    }
    function L(v, m, p, A) {
      for (var Q = null, rt = null, w = m, I = m = 0, it = null; w !== null && I < p.length; I++) {
        w.index > I ? (it = w, w = null) : it = w.sibling;
        var ot = S(
          v,
          w,
          p[I],
          A
        );
        if (ot === null) {
          w === null && (w = it);
          break;
        }
        t && w && ot.alternate === null && e(v, w), m = u(ot, m, I), rt === null ? Q = ot : rt.sibling = ot, rt = ot, w = it;
      }
      if (I === p.length)
        return l(v, w), ct && gl(v, I), Q;
      if (w === null) {
        for (; I < p.length; I++)
          w = N(v, p[I], A), w !== null && (m = u(
            w,
            m,
            I
          ), rt === null ? Q = w : rt.sibling = w, rt = w);
        return ct && gl(v, I), Q;
      }
      for (w = n(w); I < p.length; I++)
        it = _(
          w,
          v,
          I,
          p[I],
          A
        ), it !== null && (t && it.alternate !== null && w.delete(
          it.key === null ? I : it.key
        ), m = u(
          it,
          m,
          I
        ), rt === null ? Q = it : rt.sibling = it, rt = it);
      return t && w.forEach(function(an) {
        return e(v, an);
      }), ct && gl(v, I), Q;
    }
    function Z(v, m, p, A) {
      if (p == null) throw Error(f(151));
      for (var Q = null, rt = null, w = m, I = m = 0, it = null, ot = p.next(); w !== null && !ot.done; I++, ot = p.next()) {
        w.index > I ? (it = w, w = null) : it = w.sibling;
        var an = S(v, w, ot.value, A);
        if (an === null) {
          w === null && (w = it);
          break;
        }
        t && w && an.alternate === null && e(v, w), m = u(an, m, I), rt === null ? Q = an : rt.sibling = an, rt = an, w = it;
      }
      if (ot.done)
        return l(v, w), ct && gl(v, I), Q;
      if (w === null) {
        for (; !ot.done; I++, ot = p.next())
          ot = N(v, ot.value, A), ot !== null && (m = u(ot, m, I), rt === null ? Q = ot : rt.sibling = ot, rt = ot);
        return ct && gl(v, I), Q;
      }
      for (w = n(w); !ot.done; I++, ot = p.next())
        ot = _(w, v, I, ot.value, A), ot !== null && (t && ot.alternate !== null && w.delete(ot.key === null ? I : ot.key), m = u(ot, m, I), rt === null ? Q = ot : rt.sibling = ot, rt = ot);
      return t && w.forEach(function(Fy) {
        return e(v, Fy);
      }), ct && gl(v, I), Q;
    }
    function St(v, m, p, A) {
      if (typeof p == "object" && p !== null && p.type === zt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Wt:
            t: {
              for (var Q = p.key; m !== null; ) {
                if (m.key === Q) {
                  if (Q = p.type, Q === zt) {
                    if (m.tag === 7) {
                      l(
                        v,
                        m.sibling
                      ), A = a(
                        m,
                        p.props.children
                      ), A.return = v, v = A;
                      break t;
                    }
                  } else if (m.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === ae && On(Q) === m.type) {
                    l(
                      v,
                      m.sibling
                    ), A = a(m, p.props), Ya(A, p), A.return = v, v = A;
                    break t;
                  }
                  l(v, m);
                  break;
                } else e(v, m);
                m = m.sibling;
              }
              p.type === zt ? (A = Sn(
                p.props.children,
                v.mode,
                A,
                p.key
              ), A.return = v, v = A) : (A = Lu(
                p.type,
                p.key,
                p.props,
                null,
                v.mode,
                A
              ), Ya(A, p), A.return = v, v = A);
            }
            return c(v);
          case le:
            t: {
              for (Q = p.key; m !== null; ) {
                if (m.key === Q)
                  if (m.tag === 4 && m.stateNode.containerInfo === p.containerInfo && m.stateNode.implementation === p.implementation) {
                    l(
                      v,
                      m.sibling
                    ), A = a(m, p.children || []), A.return = v, v = A;
                    break t;
                  } else {
                    l(v, m);
                    break;
                  }
                else e(v, m);
                m = m.sibling;
              }
              A = _c(p, v.mode, A), A.return = v, v = A;
            }
            return c(v);
          case ae:
            return p = On(p), St(
              v,
              m,
              p,
              A
            );
        }
        if (de(p))
          return L(
            v,
            m,
            p,
            A
          );
        if (ue(p)) {
          if (Q = ue(p), typeof Q != "function") throw Error(f(150));
          return p = Q.call(p), Z(
            v,
            m,
            p,
            A
          );
        }
        if (typeof p.then == "function")
          return St(
            v,
            m,
            Zu(p),
            A
          );
        if (p.$$typeof === Xt)
          return St(
            v,
            m,
            wu(v, p),
            A
          );
        Ku(v, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p, m !== null && m.tag === 6 ? (l(v, m.sibling), A = a(m, p), A.return = v, v = A) : (l(v, m), A = Sc(p, v.mode, A), A.return = v, v = A), c(v)) : l(v, m);
    }
    return function(v, m, p, A) {
      try {
        La = 0;
        var Q = St(
          v,
          m,
          p,
          A
        );
        return ta = null, Q;
      } catch (w) {
        if (w === Pn || w === Qu) throw w;
        var rt = Oe(29, w, null, v.mode);
        return rt.lanes = A, rt.return = v, rt;
      }
    };
  }
  var Nn = Or(!0), zr = Or(!1), wl = !1;
  function qc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function xc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Xl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ql(t, e, l) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (ht & 2) !== 0) {
      var a = n.pending;
      return a === null ? e.next = e : (e.next = a.next, a.next = e), n.pending = e, e = ju(t), fr(t, null, l), e;
    }
    return Hu(t, n, e, l), ju(t);
  }
  function Ga(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, yn(t, l);
    }
  }
  function Bc(t, e) {
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
  var Hc = !1;
  function wa() {
    if (Hc) {
      var t = In;
      if (t !== null) throw t;
    }
  }
  function Xa(t, e, l, n) {
    Hc = !1;
    var a = t.updateQueue;
    wl = !1;
    var u = a.firstBaseUpdate, c = a.lastBaseUpdate, o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var d = o, b = d.next;
      d.next = null, c === null ? u = b : c.next = b, c = d;
      var E = t.alternate;
      E !== null && (E = E.updateQueue, o = E.lastBaseUpdate, o !== c && (o === null ? E.firstBaseUpdate = b : o.next = b, E.lastBaseUpdate = d));
    }
    if (u !== null) {
      var N = a.baseState;
      c = 0, E = b = d = null, o = u;
      do {
        var S = o.lane & -536870913, _ = S !== o.lane;
        if (_ ? (ut & S) === S : (n & S) === S) {
          S !== 0 && S === Fn && (Hc = !0), E !== null && (E = E.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          t: {
            var L = t, Z = o;
            S = e;
            var St = l;
            switch (Z.tag) {
              case 1:
                if (L = Z.payload, typeof L == "function") {
                  N = L.call(St, N, S);
                  break t;
                }
                N = L;
                break t;
              case 3:
                L.flags = L.flags & -65537 | 128;
              case 0:
                if (L = Z.payload, S = typeof L == "function" ? L.call(St, N, S) : L, S == null) break t;
                N = G({}, N, S);
                break t;
              case 2:
                wl = !0;
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
          }, E === null ? (b = E = _, d = N) : E = E.next = _, c |= S;
        if (o = o.next, o === null) {
          if (o = a.shared.pending, o === null)
            break;
          _ = o, o = _.next, _.next = null, a.lastBaseUpdate = _, a.shared.pending = null;
        }
      } while (!0);
      E === null && (d = N), a.baseState = d, a.firstBaseUpdate = b, a.lastBaseUpdate = E, u === null && (a.shared.lanes = 0), kl |= c, t.lanes = c, t.memoizedState = N;
    }
  }
  function Nr(t, e) {
    if (typeof t != "function")
      throw Error(f(191, t));
    t.call(e);
  }
  function Rr(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        Nr(l[t], e);
  }
  var ea = h(null), Ju = h(0);
  function Mr(t, e) {
    t = Rl, B(Ju, t), B(ea, e), Rl = t | e.baseLanes;
  }
  function jc() {
    B(Ju, Rl), B(ea, ea.current);
  }
  function Lc() {
    Rl = Ju.current, O(ea), O(Ju);
  }
  var ze = h(null), Xe = null;
  function Vl(t) {
    var e = t.alternate;
    B(qt, qt.current & 1), B(ze, t), Xe === null && (e === null || ea.current !== null || e.memoizedState !== null) && (Xe = t);
  }
  function Yc(t) {
    B(qt, qt.current), B(ze, t), Xe === null && (Xe = t);
  }
  function Cr(t) {
    t.tag === 22 ? (B(qt, qt.current), B(ze, t), Xe === null && (Xe = t)) : Zl();
  }
  function Zl() {
    B(qt, qt.current), B(ze, ze.current);
  }
  function Ne(t) {
    O(ze), Xe === t && (Xe = null), O(qt);
  }
  var qt = h(0);
  function ku(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Zs(l) || Ks(l)))
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
  var Sl = 0, F = null, pt = null, Lt = null, Wu = !1, la = !1, Rn = !1, $u = 0, Qa = 0, na = null, wm = 0;
  function Ct() {
    throw Error(f(321));
  }
  function Gc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!Ae(t[l], e[l])) return !1;
    return !0;
  }
  function wc(t, e, l, n, a, u) {
    return Sl = u, F = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, T.H = t === null || t.memoizedState === null ? mo : ls, Rn = !1, u = l(n, a), Rn = !1, la && (u = Ur(
      e,
      l,
      n,
      a
    )), Dr(t), u;
  }
  function Dr(t) {
    T.H = Ka;
    var e = pt !== null && pt.next !== null;
    if (Sl = 0, Lt = pt = F = null, Wu = !1, Qa = 0, na = null, e) throw Error(f(300));
    t === null || Yt || (t = t.dependencies, t !== null && Gu(t) && (Yt = !0));
  }
  function Ur(t, e, l, n) {
    F = t;
    var a = 0;
    do {
      if (la && (na = null), Qa = 0, la = !1, 25 <= a) throw Error(f(301));
      if (a += 1, Lt = pt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      T.H = yo, u = e(l, n);
    } while (la);
    return u;
  }
  function Xm() {
    var t = T.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Va(e) : e, t = t.useState()[0], (pt !== null ? pt.memoizedState : null) !== t && (F.flags |= 1024), e;
  }
  function Xc() {
    var t = $u !== 0;
    return $u = 0, t;
  }
  function Qc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function Vc(t) {
    if (Wu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Wu = !1;
    }
    Sl = 0, Lt = pt = F = null, la = !1, Qa = $u = 0, na = null;
  }
  function he() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Lt === null ? F.memoizedState = Lt = t : Lt = Lt.next = t, Lt;
  }
  function xt() {
    if (pt === null) {
      var t = F.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = pt.next;
    var e = Lt === null ? F.memoizedState : Lt.next;
    if (e !== null)
      Lt = e, pt = t;
    else {
      if (t === null)
        throw F.alternate === null ? Error(f(467)) : Error(f(310));
      pt = t, t = {
        memoizedState: pt.memoizedState,
        baseState: pt.baseState,
        baseQueue: pt.baseQueue,
        queue: pt.queue,
        next: null
      }, Lt === null ? F.memoizedState = Lt = t : Lt = Lt.next = t;
    }
    return Lt;
  }
  function Fu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Va(t) {
    var e = Qa;
    return Qa += 1, na === null && (na = []), t = Er(na, t, e), e = F, (Lt === null ? e.memoizedState : Lt.next) === null && (e = e.alternate, T.H = e === null || e.memoizedState === null ? mo : ls), t;
  }
  function Iu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Va(t);
      if (t.$$typeof === Xt) return Pt(t);
    }
    throw Error(f(438, String(t)));
  }
  function Zc(t) {
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
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Fu(), F.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), n = 0; n < t; n++)
        l[n] = Dl;
    return e.index++, l;
  }
  function _l(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Pu(t) {
    var e = xt();
    return Kc(e, pt, t);
  }
  function Kc(t, e, l) {
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
        var N = b.lane & -536870913;
        if (N !== b.lane ? (ut & N) === N : (Sl & N) === N) {
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
            }), N === Fn && (E = !0);
          else if ((Sl & S) === S) {
            b = b.next, S === Fn && (E = !0);
            continue;
          } else
            N = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, d === null ? (o = d = N, c = u) : d = d.next = N, F.lanes |= S, kl |= S;
          N = b.action, Rn && l(u, N), u = b.hasEagerState ? b.eagerState : l(u, N);
        } else
          S = {
            lane: N,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, d === null ? (o = d = S, c = u) : d = d.next = S, F.lanes |= N, kl |= N;
        b = b.next;
      } while (b !== null && b !== e);
      if (d === null ? c = u : d.next = o, !Ae(u, t.memoizedState) && (Yt = !0, E && (l = In, l !== null)))
        throw l;
      t.memoizedState = u, t.baseState = c, t.baseQueue = d, n.lastRenderedState = u;
    }
    return a === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function Jc(t) {
    var e = xt(), l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var n = l.dispatch, a = l.pending, u = e.memoizedState;
    if (a !== null) {
      l.pending = null;
      var c = a = a.next;
      do
        u = t(u, c.action), c = c.next;
      while (c !== a);
      Ae(u, e.memoizedState) || (Yt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
    }
    return [u, n];
  }
  function qr(t, e, l) {
    var n = F, a = xt(), u = ct;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var c = !Ae(
      (pt || a).memoizedState,
      l
    );
    if (c && (a.memoizedState = l, Yt = !0), a = a.queue, $c(Hr.bind(null, n, a, t), [
      t
    ]), a.getSnapshot !== e || c || Lt !== null && Lt.memoizedState.tag & 1) {
      if (n.flags |= 2048, aa(
        9,
        { destroy: void 0 },
        Br.bind(
          null,
          n,
          a,
          l,
          e
        ),
        null
      ), _t === null) throw Error(f(349));
      u || (Sl & 127) !== 0 || xr(n, e, l);
    }
    return l;
  }
  function xr(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = F.updateQueue, e === null ? (e = Fu(), F.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function Br(t, e, l, n) {
    e.value = l, e.getSnapshot = n, jr(e) && Lr(t);
  }
  function Hr(t, e, l) {
    return l(function() {
      jr(e) && Lr(t);
    });
  }
  function jr(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !Ae(t, l);
    } catch {
      return !0;
    }
  }
  function Lr(t) {
    var e = bn(t, 2);
    e !== null && Se(e, t, 2);
  }
  function kc(t) {
    var e = he();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), Rn) {
        ie(!0);
        try {
          l();
        } finally {
          ie(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _l,
      lastRenderedState: t
    }, e;
  }
  function Yr(t, e, l, n) {
    return t.baseState = l, Kc(
      t,
      pt,
      typeof n == "function" ? n : _l
    );
  }
  function Qm(t, e, l, n, a) {
    if (li(t)) throw Error(f(485));
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
      T.T !== null ? l(!0) : u.isTransition = !1, n(u), l = e.pending, l === null ? (u.next = e.pending = u, Gr(e, u)) : (u.next = l.next, e.pending = l.next = u);
    }
  }
  function Gr(t, e) {
    var l = e.action, n = e.payload, a = t.state;
    if (e.isTransition) {
      var u = T.T, c = {};
      T.T = c;
      try {
        var o = l(a, n), d = T.S;
        d !== null && d(c, o), wr(t, e, o);
      } catch (b) {
        Wc(t, e, b);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), T.T = u;
      }
    } else
      try {
        u = l(a, n), wr(t, e, u);
      } catch (b) {
        Wc(t, e, b);
      }
  }
  function wr(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        Xr(t, e, n);
      },
      function(n) {
        return Wc(t, e, n);
      }
    ) : Xr(t, e, l);
  }
  function Xr(t, e, l) {
    e.status = "fulfilled", e.value = l, Qr(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, Gr(t, l)));
  }
  function Wc(t, e, l) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        e.status = "rejected", e.reason = l, Qr(e), e = e.next;
      while (e !== n);
    }
    t.action = null;
  }
  function Qr(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Vr(t, e) {
    return e;
  }
  function Zr(t, e) {
    if (ct) {
      var l = _t.formState;
      if (l !== null) {
        t: {
          var n = F;
          if (ct) {
            if (Et) {
              e: {
                for (var a = Et, u = we; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break e;
                  }
                  if (a = Qe(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break e;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                Et = Qe(
                  a.nextSibling
                ), n = a.data === "F!";
                break t;
              }
            }
            Yl(n);
          }
          n = !1;
        }
        n && (e = l[0]);
      }
    }
    return l = he(), l.memoizedState = l.baseState = e, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vr,
      lastRenderedState: e
    }, l.queue = n, l = ro.bind(
      null,
      F,
      n
    ), n.dispatch = l, n = kc(!1), u = es.bind(
      null,
      F,
      !1,
      n.queue
    ), n = he(), a = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, n.queue = a, l = Qm.bind(
      null,
      F,
      a,
      u,
      l
    ), a.dispatch = l, n.memoizedState = t, [e, l, !1];
  }
  function Kr(t) {
    var e = xt();
    return Jr(e, pt, t);
  }
  function Jr(t, e, l) {
    if (e = Kc(
      t,
      e,
      Vr
    )[0], t = Pu(_l)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var n = Va(e);
      } catch (c) {
        throw c === Pn ? Qu : c;
      }
    else n = e;
    e = xt();
    var a = e.queue, u = a.dispatch;
    return l !== e.memoizedState && (F.flags |= 2048, aa(
      9,
      { destroy: void 0 },
      Vm.bind(null, a, l),
      null
    )), [n, u, t];
  }
  function Vm(t, e) {
    t.action = e;
  }
  function kr(t) {
    var e = xt(), l = pt;
    if (l !== null)
      return Jr(e, l, t);
    xt(), e = e.memoizedState, l = xt();
    var n = l.queue.dispatch;
    return l.memoizedState = t, [e, n, !1];
  }
  function aa(t, e, l, n) {
    return t = { tag: t, create: l, deps: n, inst: e, next: null }, e = F.updateQueue, e === null && (e = Fu(), F.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (n = l.next, l.next = t, t.next = n, e.lastEffect = t), t;
  }
  function Wr() {
    return xt().memoizedState;
  }
  function ti(t, e, l, n) {
    var a = he();
    F.flags |= t, a.memoizedState = aa(
      1 | e,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function ei(t, e, l, n) {
    var a = xt();
    n = n === void 0 ? null : n;
    var u = a.memoizedState.inst;
    pt !== null && n !== null && Gc(n, pt.memoizedState.deps) ? a.memoizedState = aa(e, u, l, n) : (F.flags |= t, a.memoizedState = aa(
      1 | e,
      u,
      l,
      n
    ));
  }
  function $r(t, e) {
    ti(8390656, 8, t, e);
  }
  function $c(t, e) {
    ei(2048, 8, t, e);
  }
  function Zm(t) {
    F.flags |= 4;
    var e = F.updateQueue;
    if (e === null)
      e = Fu(), F.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function Fr(t) {
    var e = xt().memoizedState;
    return Zm({ ref: e, nextImpl: t }), function() {
      if ((ht & 2) !== 0) throw Error(f(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Ir(t, e) {
    return ei(4, 2, t, e);
  }
  function Pr(t, e) {
    return ei(4, 4, t, e);
  }
  function to(t, e) {
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
  function eo(t, e, l) {
    l = l != null ? l.concat([t]) : null, ei(4, 4, to.bind(null, e, t), l);
  }
  function Fc() {
  }
  function lo(t, e) {
    var l = xt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && Gc(e, n[1]) ? n[0] : (l.memoizedState = [t, e], t);
  }
  function no(t, e) {
    var l = xt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && Gc(e, n[1]))
      return n[0];
    if (n = t(), Rn) {
      ie(!0);
      try {
        t();
      } finally {
        ie(!1);
      }
    }
    return l.memoizedState = [n, e], n;
  }
  function Ic(t, e, l) {
    return l === void 0 || (Sl & 1073741824) !== 0 && (ut & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = uh(), F.lanes |= t, kl |= t, l);
  }
  function ao(t, e, l, n) {
    return Ae(l, e) ? l : ea.current !== null ? (t = Ic(t, l, n), Ae(t, e) || (Yt = !0), t) : (Sl & 42) === 0 || (Sl & 1073741824) !== 0 && (ut & 261930) === 0 ? (Yt = !0, t.memoizedState = l) : (t = uh(), F.lanes |= t, kl |= t, e);
  }
  function uo(t, e, l, n, a) {
    var u = x.p;
    x.p = u !== 0 && 8 > u ? u : 8;
    var c = T.T, o = {};
    T.T = o, es(t, !1, e, l);
    try {
      var d = a(), b = T.S;
      if (b !== null && b(o, d), d !== null && typeof d == "object" && typeof d.then == "function") {
        var E = Gm(
          d,
          n
        );
        Za(
          t,
          e,
          E,
          Ce(t)
        );
      } else
        Za(
          t,
          e,
          n,
          Ce(t)
        );
    } catch (N) {
      Za(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: N },
        Ce()
      );
    } finally {
      x.p = u, c !== null && o.types !== null && (c.types = o.types), T.T = c;
    }
  }
  function Km() {
  }
  function Pc(t, e, l, n) {
    if (t.tag !== 5) throw Error(f(476));
    var a = io(t).queue;
    uo(
      t,
      a,
      e,
      V,
      l === null ? Km : function() {
        return co(t), l(n);
      }
    );
  }
  function io(t) {
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
        lastRenderedReducer: _l,
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
        lastRenderedReducer: _l,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function co(t) {
    var e = io(t);
    e.next === null && (e = t.alternate.memoizedState), Za(
      t,
      e.next.queue,
      {},
      Ce()
    );
  }
  function ts() {
    return Pt(su);
  }
  function so() {
    return xt().memoizedState;
  }
  function fo() {
    return xt().memoizedState;
  }
  function Jm(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Ce();
          t = Xl(l);
          var n = Ql(e, t, l);
          n !== null && (Se(n, e, l), Ga(n, e, l)), e = { cache: Mc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function km(t, e, l) {
    var n = Ce();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, li(t) ? oo(e, l) : (l = pc(t, e, l, n), l !== null && (Se(l, t, n), ho(l, e, n)));
  }
  function ro(t, e, l) {
    var n = Ce();
    Za(t, e, l, n);
  }
  function Za(t, e, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (li(t)) oo(e, a);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var c = e.lastRenderedState, o = u(c, l);
          if (a.hasEagerState = !0, a.eagerState = o, Ae(o, c))
            return Hu(t, e, a, 0), _t === null && Bu(), !1;
        } catch {
        }
      if (l = pc(t, e, a, n), l !== null)
        return Se(l, t, n), ho(l, e, n), !0;
    }
    return !1;
  }
  function es(t, e, l, n) {
    if (n = {
      lane: 2,
      revertLane: qs(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, li(t)) {
      if (e) throw Error(f(479));
    } else
      e = pc(
        t,
        l,
        n,
        2
      ), e !== null && Se(e, t, 2);
  }
  function li(t) {
    var e = t.alternate;
    return t === F || e !== null && e === F;
  }
  function oo(t, e) {
    la = Wu = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function ho(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, yn(t, l);
    }
  }
  var Ka = {
    readContext: Pt,
    use: Iu,
    useCallback: Ct,
    useContext: Ct,
    useEffect: Ct,
    useImperativeHandle: Ct,
    useLayoutEffect: Ct,
    useInsertionEffect: Ct,
    useMemo: Ct,
    useReducer: Ct,
    useRef: Ct,
    useState: Ct,
    useDebugValue: Ct,
    useDeferredValue: Ct,
    useTransition: Ct,
    useSyncExternalStore: Ct,
    useId: Ct,
    useHostTransitionStatus: Ct,
    useFormState: Ct,
    useActionState: Ct,
    useOptimistic: Ct,
    useMemoCache: Ct,
    useCacheRefresh: Ct
  };
  Ka.useEffectEvent = Ct;
  var mo = {
    readContext: Pt,
    use: Iu,
    useCallback: function(t, e) {
      return he().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Pt,
    useEffect: $r,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, ti(
        4194308,
        4,
        to.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return ti(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      ti(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = he();
      e = e === void 0 ? null : e;
      var n = t();
      if (Rn) {
        ie(!0);
        try {
          t();
        } finally {
          ie(!1);
        }
      }
      return l.memoizedState = [n, e], n;
    },
    useReducer: function(t, e, l) {
      var n = he();
      if (l !== void 0) {
        var a = l(e);
        if (Rn) {
          ie(!0);
          try {
            l(e);
          } finally {
            ie(!1);
          }
        }
      } else a = e;
      return n.memoizedState = n.baseState = a, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: a
      }, n.queue = t, t = t.dispatch = km.bind(
        null,
        F,
        t
      ), [n.memoizedState, t];
    },
    useRef: function(t) {
      var e = he();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = kc(t);
      var e = t.queue, l = ro.bind(null, F, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: Fc,
    useDeferredValue: function(t, e) {
      var l = he();
      return Ic(l, t, e);
    },
    useTransition: function() {
      var t = kc(!1);
      return t = uo.bind(
        null,
        F,
        t.queue,
        !0,
        !1
      ), he().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var n = F, a = he();
      if (ct) {
        if (l === void 0)
          throw Error(f(407));
        l = l();
      } else {
        if (l = e(), _t === null)
          throw Error(f(349));
        (ut & 127) !== 0 || xr(n, e, l);
      }
      a.memoizedState = l;
      var u = { value: l, getSnapshot: e };
      return a.queue = u, $r(Hr.bind(null, n, u, t), [
        t
      ]), n.flags |= 2048, aa(
        9,
        { destroy: void 0 },
        Br.bind(
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
      var t = he(), e = _t.identifierPrefix;
      if (ct) {
        var l = al, n = nl;
        l = (n & ~(1 << 32 - oe(n) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = $u++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = wm++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: ts,
    useFormState: Zr,
    useActionState: Zr,
    useOptimistic: function(t) {
      var e = he();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = es.bind(
        null,
        F,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: Zc,
    useCacheRefresh: function() {
      return he().memoizedState = Jm.bind(
        null,
        F
      );
    },
    useEffectEvent: function(t) {
      var e = he(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((ht & 2) !== 0)
          throw Error(f(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, ls = {
    readContext: Pt,
    use: Iu,
    useCallback: lo,
    useContext: Pt,
    useEffect: $c,
    useImperativeHandle: eo,
    useInsertionEffect: Ir,
    useLayoutEffect: Pr,
    useMemo: no,
    useReducer: Pu,
    useRef: Wr,
    useState: function() {
      return Pu(_l);
    },
    useDebugValue: Fc,
    useDeferredValue: function(t, e) {
      var l = xt();
      return ao(
        l,
        pt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Pu(_l)[0], e = xt().memoizedState;
      return [
        typeof t == "boolean" ? t : Va(t),
        e
      ];
    },
    useSyncExternalStore: qr,
    useId: so,
    useHostTransitionStatus: ts,
    useFormState: Kr,
    useActionState: Kr,
    useOptimistic: function(t, e) {
      var l = xt();
      return Yr(l, pt, t, e);
    },
    useMemoCache: Zc,
    useCacheRefresh: fo
  };
  ls.useEffectEvent = Fr;
  var yo = {
    readContext: Pt,
    use: Iu,
    useCallback: lo,
    useContext: Pt,
    useEffect: $c,
    useImperativeHandle: eo,
    useInsertionEffect: Ir,
    useLayoutEffect: Pr,
    useMemo: no,
    useReducer: Jc,
    useRef: Wr,
    useState: function() {
      return Jc(_l);
    },
    useDebugValue: Fc,
    useDeferredValue: function(t, e) {
      var l = xt();
      return pt === null ? Ic(l, t, e) : ao(
        l,
        pt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Jc(_l)[0], e = xt().memoizedState;
      return [
        typeof t == "boolean" ? t : Va(t),
        e
      ];
    },
    useSyncExternalStore: qr,
    useId: so,
    useHostTransitionStatus: ts,
    useFormState: kr,
    useActionState: kr,
    useOptimistic: function(t, e) {
      var l = xt();
      return pt !== null ? Yr(l, pt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: Zc,
    useCacheRefresh: fo
  };
  yo.useEffectEvent = Fr;
  function ns(t, e, l, n) {
    e = t.memoizedState, l = l(n, e), l = l == null ? e : G({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var as = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var n = Ce(), a = Xl(n);
      a.payload = e, l != null && (a.callback = l), e = Ql(t, a, n), e !== null && (Se(e, t, n), Ga(e, t, n));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var n = Ce(), a = Xl(n);
      a.tag = 1, a.payload = e, l != null && (a.callback = l), e = Ql(t, a, n), e !== null && (Se(e, t, n), Ga(e, t, n));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = Ce(), n = Xl(l);
      n.tag = 2, e != null && (n.callback = e), e = Ql(t, n, l), e !== null && (Se(e, t, l), Ga(e, t, l));
    }
  };
  function vo(t, e, l, n, a, u, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, u, c) : e.prototype && e.prototype.isPureReactComponent ? !Ua(l, n) || !Ua(a, u) : !0;
  }
  function go(t, e, l, n) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, n), e.state !== t && as.enqueueReplaceState(e, e.state, null);
  }
  function Mn(t, e) {
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
  function po(t) {
    xu(t);
  }
  function bo(t) {
    console.error(t);
  }
  function So(t) {
    xu(t);
  }
  function ni(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function _o(t, e, l) {
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
  function us(t, e, l) {
    return l = Xl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      ni(t, e);
    }, l;
  }
  function Eo(t) {
    return t = Xl(t), t.tag = 3, t;
  }
  function To(t, e, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = n.value;
      t.payload = function() {
        return a(u);
      }, t.callback = function() {
        _o(e, l, n);
      };
    }
    var c = l.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      _o(e, l, n), typeof a != "function" && (Wl === null ? Wl = /* @__PURE__ */ new Set([this]) : Wl.add(this));
      var o = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function Wm(t, e, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (e = l.alternate, e !== null && $n(
        e,
        l,
        a,
        !0
      ), l = ze.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Xe === null ? yi() : l.alternate === null && Dt === 0 && (Dt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Vu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : e.add(n), Cs(t, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === Vu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Cs(t, n, a)), !1;
        }
        throw Error(f(435, l.tag));
      }
      return Cs(t, n, a), yi(), !1;
    }
    if (ct)
      return e = ze.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = a, n !== Ac && (t = Error(f(422), { cause: n }), Ba(Le(t, l)))) : (n !== Ac && (e = Error(f(423), {
        cause: n
      }), Ba(
        Le(e, l)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, n = Le(n, l), a = us(
        t.stateNode,
        n,
        a
      ), Bc(t, a), Dt !== 4 && (Dt = 2)), !1;
    var u = Error(f(520), { cause: n });
    if (u = Le(u, l), tu === null ? tu = [u] : tu.push(u), Dt !== 4 && (Dt = 2), e === null) return !0;
    n = Le(n, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = a & -a, l.lanes |= t, t = us(l.stateNode, n, t), Bc(l, t), !1;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Wl === null || !Wl.has(u))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = Eo(a), To(
              a,
              t,
              l,
              n
            ), Bc(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var is = Error(f(461)), Yt = !1;
  function te(t, e, l, n) {
    e.child = t === null ? zr(e, null, l, n) : Nn(
      e,
      t.child,
      l,
      n
    );
  }
  function Ao(t, e, l, n, a) {
    l = l.render;
    var u = e.ref;
    if ("ref" in n) {
      var c = {};
      for (var o in n)
        o !== "ref" && (c[o] = n[o]);
    } else c = n;
    return Tn(e), n = wc(
      t,
      e,
      l,
      c,
      u,
      a
    ), o = Xc(), t !== null && !Yt ? (Qc(t, e, a), El(t, e, a)) : (ct && o && Ec(e), e.flags |= 1, te(t, e, n, a), e.child);
  }
  function Oo(t, e, l, n, a) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !bc(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, zo(
        t,
        e,
        u,
        n,
        a
      )) : (t = Lu(
        l.type,
        null,
        n,
        e,
        e.mode,
        a
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !ms(t, a)) {
      var c = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Ua, l(c, n) && t.ref === e.ref)
        return El(t, e, a);
    }
    return e.flags |= 1, t = vl(u, n), t.ref = e.ref, t.return = e, e.child = t;
  }
  function zo(t, e, l, n, a) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Ua(u, n) && t.ref === e.ref)
        if (Yt = !1, e.pendingProps = n = u, ms(t, a))
          (t.flags & 131072) !== 0 && (Yt = !0);
        else
          return e.lanes = t.lanes, El(t, e, a);
    }
    return cs(
      t,
      e,
      l,
      n,
      a
    );
  }
  function No(t, e, l, n) {
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
        return Ro(
          t,
          e,
          u,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Xu(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? Mr(e, u) : jc(), Cr(e);
      else
        return n = e.lanes = 536870912, Ro(
          t,
          e,
          u !== null ? u.baseLanes | l : l,
          l,
          n
        );
    } else
      u !== null ? (Xu(e, u.cachePool), Mr(e, u), Zl(), e.memoizedState = null) : (t !== null && Xu(e, null), jc(), Zl());
    return te(t, e, a, l), e.child;
  }
  function Ja(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Ro(t, e, l, n, a) {
    var u = Dc();
    return u = u === null ? null : { parent: jt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, t !== null && Xu(e, null), jc(), Cr(e), t !== null && $n(t, e, n, !0), e.childLanes = a, null;
  }
  function ai(t, e) {
    return e = ii(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Mo(t, e, l) {
    return Nn(e, t.child, null, l), t = ai(e, e.pendingProps), t.flags |= 2, Ne(e), e.memoizedState = null, t;
  }
  function $m(t, e, l) {
    var n = e.pendingProps, a = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (ct) {
        if (n.mode === "hidden")
          return t = ai(e, n), e.lanes = 536870912, Ja(null, t);
        if (Yc(e), (t = Et) ? (t = wh(
          t,
          we
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: jl !== null ? { id: nl, overflow: al } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = or(t), l.return = e, e.child = l, It = e, Et = null)) : t = null, t === null) throw Yl(e);
        return e.lanes = 536870912, null;
      }
      return ai(e, n);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (Yc(e), a)
        if (e.flags & 256)
          e.flags &= -257, e = Mo(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(f(558));
      else if (Yt || $n(t, e, l, !1), a = (l & t.childLanes) !== 0, Yt || a) {
        if (n = _t, n !== null && (c = Su(n, l), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, bn(t, c), Se(n, t, c), is;
        yi(), e = Mo(
          t,
          e,
          l
        );
      } else
        t = u.treeContext, Et = Qe(c.nextSibling), It = e, ct = !0, Ll = null, we = !1, t !== null && mr(e, t), e = ai(e, n), e.flags |= 4096;
      return e;
    }
    return t = vl(t.child, {
      mode: n.mode,
      children: n.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function ui(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function cs(t, e, l, n, a) {
    return Tn(e), l = wc(
      t,
      e,
      l,
      n,
      void 0,
      a
    ), n = Xc(), t !== null && !Yt ? (Qc(t, e, a), El(t, e, a)) : (ct && n && Ec(e), e.flags |= 1, te(t, e, l, a), e.child);
  }
  function Co(t, e, l, n, a, u) {
    return Tn(e), e.updateQueue = null, l = Ur(
      e,
      n,
      l,
      a
    ), Dr(t), n = Xc(), t !== null && !Yt ? (Qc(t, e, u), El(t, e, u)) : (ct && n && Ec(e), e.flags |= 1, te(t, e, l, u), e.child);
  }
  function Do(t, e, l, n, a) {
    if (Tn(e), e.stateNode === null) {
      var u = Kn, c = l.contextType;
      typeof c == "object" && c !== null && (u = Pt(c)), u = new l(n, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = as, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = n, u.state = e.memoizedState, u.refs = {}, qc(e), c = l.contextType, u.context = typeof c == "object" && c !== null ? Pt(c) : Kn, u.state = e.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (ns(
        e,
        l,
        c,
        n
      ), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && as.enqueueReplaceState(u, u.state, null), Xa(e, n, u, a), wa(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), n = !0;
    } else if (t === null) {
      u = e.stateNode;
      var o = e.memoizedProps, d = Mn(l, o);
      u.props = d;
      var b = u.context, E = l.contextType;
      c = Kn, typeof E == "object" && E !== null && (c = Pt(E));
      var N = l.getDerivedStateFromProps;
      E = typeof N == "function" || typeof u.getSnapshotBeforeUpdate == "function", o = e.pendingProps !== o, E || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o || b !== c) && go(
        e,
        u,
        n,
        c
      ), wl = !1;
      var S = e.memoizedState;
      u.state = S, Xa(e, n, u, a), wa(), b = e.memoizedState, o || S !== b || wl ? (typeof N == "function" && (ns(
        e,
        l,
        N,
        n
      ), b = e.memoizedState), (d = wl || vo(
        e,
        l,
        d,
        n,
        S,
        b,
        c
      )) ? (E || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = b), u.props = n, u.state = b, u.context = c, n = d) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
    } else {
      u = e.stateNode, xc(t, e), c = e.memoizedProps, E = Mn(l, c), u.props = E, N = e.pendingProps, S = u.context, b = l.contextType, d = Kn, typeof b == "object" && b !== null && (d = Pt(b)), o = l.getDerivedStateFromProps, (b = typeof o == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== N || S !== d) && go(
        e,
        u,
        n,
        d
      ), wl = !1, S = e.memoizedState, u.state = S, Xa(e, n, u, a), wa();
      var _ = e.memoizedState;
      c !== N || S !== _ || wl || t !== null && t.dependencies !== null && Gu(t.dependencies) ? (typeof o == "function" && (ns(
        e,
        l,
        o,
        n
      ), _ = e.memoizedState), (E = wl || vo(
        e,
        l,
        E,
        n,
        S,
        _,
        d
      ) || t !== null && t.dependencies !== null && Gu(t.dependencies)) ? (b || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(n, _, d), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        n,
        _,
        d
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = _), u.props = n, u.state = _, u.context = d, n = E) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), n = !1);
    }
    return u = n, ui(t, e), n = (e.flags & 128) !== 0, u || n ? (u = e.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && n ? (e.child = Nn(
      e,
      t.child,
      null,
      a
    ), e.child = Nn(
      e,
      null,
      l,
      a
    )) : te(t, e, l, a), e.memoizedState = u.state, t = e.child) : t = El(
      t,
      e,
      a
    ), t;
  }
  function Uo(t, e, l, n) {
    return _n(), e.flags |= 256, te(t, e, l, n), e.child;
  }
  var ss = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function fs(t) {
    return { baseLanes: t, cachePool: Sr() };
  }
  function rs(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Me), t;
  }
  function qo(t, e, l) {
    var n = e.pendingProps, a = !1, u = (e.flags & 128) !== 0, c;
    if ((c = u) || (c = t !== null && t.memoizedState === null ? !1 : (qt.current & 2) !== 0), c && (a = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (ct) {
        if (a ? Vl(e) : Zl(), (t = Et) ? (t = wh(
          t,
          we
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: jl !== null ? { id: nl, overflow: al } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = or(t), l.return = e, e.child = l, It = e, Et = null)) : t = null, t === null) throw Yl(e);
        return Ks(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var o = n.children;
      return n = n.fallback, a ? (Zl(), a = e.mode, o = ii(
        { mode: "hidden", children: o },
        a
      ), n = Sn(
        n,
        a,
        l,
        null
      ), o.return = e, n.return = e, o.sibling = n, e.child = o, n = e.child, n.memoizedState = fs(l), n.childLanes = rs(
        t,
        c,
        l
      ), e.memoizedState = ss, Ja(null, n)) : (Vl(e), os(e, o));
    }
    var d = t.memoizedState;
    if (d !== null && (o = d.dehydrated, o !== null)) {
      if (u)
        e.flags & 256 ? (Vl(e), e.flags &= -257, e = hs(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (Zl(), e.child = t.child, e.flags |= 128, e = null) : (Zl(), o = n.fallback, a = e.mode, n = ii(
          { mode: "visible", children: n.children },
          a
        ), o = Sn(
          o,
          a,
          l,
          null
        ), o.flags |= 2, n.return = e, o.return = e, n.sibling = o, e.child = n, Nn(
          e,
          t.child,
          null,
          l
        ), n = e.child, n.memoizedState = fs(l), n.childLanes = rs(
          t,
          c,
          l
        ), e.memoizedState = ss, e = Ja(null, n));
      else if (Vl(e), Ks(o)) {
        if (c = o.nextSibling && o.nextSibling.dataset, c) var b = c.dgst;
        c = b, n = Error(f(419)), n.stack = "", n.digest = c, Ba({ value: n, source: null, stack: null }), e = hs(
          t,
          e,
          l
        );
      } else if (Yt || $n(t, e, l, !1), c = (l & t.childLanes) !== 0, Yt || c) {
        if (c = _t, c !== null && (n = Su(c, l), n !== 0 && n !== d.retryLane))
          throw d.retryLane = n, bn(t, n), Se(c, t, n), is;
        Zs(o) || yi(), e = hs(
          t,
          e,
          l
        );
      } else
        Zs(o) ? (e.flags |= 192, e.child = t.child, e = null) : (t = d.treeContext, Et = Qe(
          o.nextSibling
        ), It = e, ct = !0, Ll = null, we = !1, t !== null && mr(e, t), e = os(
          e,
          n.children
        ), e.flags |= 4096);
      return e;
    }
    return a ? (Zl(), o = n.fallback, a = e.mode, d = t.child, b = d.sibling, n = vl(d, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = d.subtreeFlags & 65011712, b !== null ? o = vl(
      b,
      o
    ) : (o = Sn(
      o,
      a,
      l,
      null
    ), o.flags |= 2), o.return = e, n.return = e, n.sibling = o, e.child = n, Ja(null, n), n = e.child, o = t.child.memoizedState, o === null ? o = fs(l) : (a = o.cachePool, a !== null ? (d = jt._currentValue, a = a.parent !== d ? { parent: d, pool: d } : a) : a = Sr(), o = {
      baseLanes: o.baseLanes | l,
      cachePool: a
    }), n.memoizedState = o, n.childLanes = rs(
      t,
      c,
      l
    ), e.memoizedState = ss, Ja(t.child, n)) : (Vl(e), l = t.child, t = l.sibling, l = vl(l, {
      mode: "visible",
      children: n.children
    }), l.return = e, l.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function os(t, e) {
    return e = ii(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function ii(t, e) {
    return t = Oe(22, t, null, e), t.lanes = 0, t;
  }
  function hs(t, e, l) {
    return Nn(e, t.child, null, l), t = os(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function xo(t, e, l) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e), Nc(t.return, e, l);
  }
  function ds(t, e, l, n, a, u) {
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
  function Bo(t, e, l) {
    var n = e.pendingProps, a = n.revealOrder, u = n.tail;
    n = n.children;
    var c = qt.current, o = (c & 2) !== 0;
    if (o ? (c = c & 1 | 2, e.flags |= 128) : c &= 1, B(qt, c), te(t, e, n, l), n = ct ? xa : 0, !o && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && xo(t, l, e);
        else if (t.tag === 19)
          xo(t, l, e);
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
          t = l.alternate, t !== null && ku(t) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = e.child, e.child = null) : (a = l.sibling, l.sibling = null), ds(
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
          if (t = a.alternate, t !== null && ku(t) === null) {
            e.child = a;
            break;
          }
          t = a.sibling, a.sibling = l, l = a, a = t;
        }
        ds(
          e,
          !0,
          l,
          null,
          u,
          n
        );
        break;
      case "together":
        ds(
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
  function El(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), kl |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if ($n(
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
      for (t = e.child, l = vl(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = vl(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function ms(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Gu(t)));
  }
  function Fm(t, e, l) {
    switch (e.tag) {
      case 3:
        Rt(e, e.stateNode.containerInfo), Gl(e, jt, t.memoizedState.cache), _n();
        break;
      case 27:
      case 5:
        Ul(e);
        break;
      case 4:
        Rt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Gl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Yc(e), null;
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Vl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? qo(t, e, l) : (Vl(e), t = El(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        Vl(e);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (n = (l & e.childLanes) !== 0, n || ($n(
          t,
          e,
          l,
          !1
        ), n = (l & e.childLanes) !== 0), a) {
          if (n)
            return Bo(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), B(qt, qt.current), n) break;
        return null;
      case 22:
        return e.lanes = 0, No(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        Gl(e, jt, t.memoizedState.cache);
    }
    return El(t, e, l);
  }
  function Ho(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Yt = !0;
      else {
        if (!ms(t, l) && (e.flags & 128) === 0)
          return Yt = !1, Fm(
            t,
            e,
            l
          );
        Yt = (t.flags & 131072) !== 0;
      }
    else
      Yt = !1, ct && (e.flags & 1048576) !== 0 && dr(e, xa, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (t = On(e.elementType), e.type = t, typeof t == "function")
            bc(t) ? (n = Mn(t, n), e.tag = 1, e = Do(
              null,
              e,
              t,
              n,
              l
            )) : (e.tag = 0, e = cs(
              null,
              e,
              t,
              n,
              l
            ));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === Ut) {
                e.tag = 11, e = Ao(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              } else if (a === K) {
                e.tag = 14, e = Oo(
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
        return cs(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return n = e.type, a = Mn(
          n,
          e.pendingProps
        ), Do(
          t,
          e,
          n,
          a,
          l
        );
      case 3:
        t: {
          if (Rt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(f(387));
          n = e.pendingProps;
          var u = e.memoizedState;
          a = u.element, xc(t, e), Xa(e, n, null, l);
          var c = e.memoizedState;
          if (n = c.cache, Gl(e, jt, n), n !== u.cache && Rc(
            e,
            [jt],
            l,
            !0
          ), wa(), n = c.element, u.isDehydrated)
            if (u = {
              element: n,
              isDehydrated: !1,
              cache: c.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = Uo(
                t,
                e,
                n,
                l
              );
              break t;
            } else if (n !== a) {
              a = Le(
                Error(f(424)),
                e
              ), Ba(a), e = Uo(
                t,
                e,
                n,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Et = Qe(t.firstChild), It = e, ct = !0, Ll = null, we = !0, l = zr(
                e,
                null,
                n,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (_n(), n === a) {
              e = El(
                t,
                e,
                l
              );
              break t;
            }
            te(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return ui(t, e), t === null ? (l = Jh(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : ct || (l = e.type, t = e.pendingProps, n = Ei(
          k.current
        ).createElement(l), n[Qt] = e, n[se] = t, ee(n, l, t), et(n), e.stateNode = n) : e.memoizedState = Jh(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ul(e), t === null && ct && (n = e.stateNode = Vh(
          e.type,
          e.pendingProps,
          k.current
        ), It = e, we = !0, a = Et, Pl(e.type) ? (Js = a, Et = Qe(n.firstChild)) : Et = a), te(
          t,
          e,
          e.pendingProps.children,
          l
        ), ui(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && ct && ((a = n = Et) && (n = Ny(
          n,
          e.type,
          e.pendingProps,
          we
        ), n !== null ? (e.stateNode = n, It = e, Et = Qe(n.firstChild), we = !1, a = !0) : a = !1), a || Yl(e)), Ul(e), a = e.type, u = e.pendingProps, c = t !== null ? t.memoizedProps : null, n = u.children, Xs(a, u) ? n = null : c !== null && Xs(a, c) && (e.flags |= 32), e.memoizedState !== null && (a = wc(
          t,
          e,
          Xm,
          null,
          null,
          l
        ), su._currentValue = a), ui(t, e), te(t, e, n, l), e.child;
      case 6:
        return t === null && ct && ((t = l = Et) && (l = Ry(
          l,
          e.pendingProps,
          we
        ), l !== null ? (e.stateNode = l, It = e, Et = null, t = !0) : t = !1), t || Yl(e)), null;
      case 13:
        return qo(t, e, l);
      case 4:
        return Rt(
          e,
          e.stateNode.containerInfo
        ), n = e.pendingProps, t === null ? e.child = Nn(
          e,
          null,
          n,
          l
        ) : te(t, e, n, l), e.child;
      case 11:
        return Ao(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return te(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return te(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return te(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return n = e.pendingProps, Gl(e, e.type, n.value), te(t, e, n.children, l), e.child;
      case 9:
        return a = e.type._context, n = e.pendingProps.children, Tn(e), a = Pt(a), n = n(a), e.flags |= 1, te(t, e, n, l), e.child;
      case 14:
        return Oo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return zo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return Bo(t, e, l);
      case 31:
        return $m(t, e, l);
      case 22:
        return No(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return Tn(e), n = Pt(jt), t === null ? (a = Dc(), a === null && (a = _t, u = Mc(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= l), a = u), e.memoizedState = { parent: n, cache: a }, qc(e), Gl(e, jt, a)) : ((t.lanes & l) !== 0 && (xc(t, e), Xa(e, null, null, l), wa()), a = t.memoizedState, u = e.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), Gl(e, jt, n)) : (n = u.cache, Gl(e, jt, n), n !== a.cache && Rc(
          e,
          [jt],
          l,
          !0
        ))), te(
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
  function Tl(t) {
    t.flags |= 4;
  }
  function ys(t, e, l, n, a) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (a & 335544128) === a)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (fh()) t.flags |= 8192;
        else
          throw zn = Vu, Uc;
    } else t.flags &= -16777217;
  }
  function jo(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Ih(e))
      if (fh()) t.flags |= 8192;
      else
        throw zn = Vu, Uc;
  }
  function ci(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? ol() : 536870912, t.lanes |= e, sa |= e);
  }
  function ka(t, e) {
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
  function Tt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, n = 0;
    if (e)
      for (var a = t.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = t, a = a.sibling;
    else
      for (a = t.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = t, a = a.sibling;
    return t.subtreeFlags |= n, t.childLanes = l, e;
  }
  function Im(t, e, l) {
    var n = e.pendingProps;
    switch (Tc(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tt(e), null;
      case 1:
        return Tt(e), null;
      case 3:
        return l = e.stateNode, n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), bl(jt), Nt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Wn(e) ? Tl(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Oc())), Tt(e), null;
      case 26:
        var a = e.type, u = e.memoizedState;
        return t === null ? (Tl(e), u !== null ? (Tt(e), jo(e, u)) : (Tt(e), ys(
          e,
          a,
          null,
          n,
          l
        ))) : u ? u !== t.memoizedState ? (Tl(e), Tt(e), jo(e, u)) : (Tt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== n && Tl(e), Tt(e), ys(
          e,
          a,
          t,
          n,
          l
        )), null;
      case 27:
        if (tt(e), l = k.current, a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && Tl(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(f(166));
            return Tt(e), null;
          }
          t = j.current, Wn(e) ? yr(e) : (t = Vh(a, n, l), e.stateNode = t, Tl(e));
        }
        return Tt(e), null;
      case 5:
        if (tt(e), a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && Tl(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(f(166));
            return Tt(e), null;
          }
          if (u = j.current, Wn(e))
            yr(e);
          else {
            var c = Ei(
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
            u[Qt] = e, u[se] = n;
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
            t: switch (ee(u, a, n), a) {
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
            n && Tl(e);
          }
        }
        return Tt(e), ys(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== n && Tl(e);
        else {
          if (typeof n != "string" && e.stateNode === null)
            throw Error(f(166));
          if (t = k.current, Wn(e)) {
            if (t = e.stateNode, l = e.memoizedProps, n = null, a = It, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            t[Qt] = e, t = !!(t.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || qh(t.nodeValue, l)), t || Yl(e, !0);
          } else
            t = Ei(t).createTextNode(
              n
            ), t[Qt] = e, e.stateNode = t;
        }
        return Tt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (n = Wn(e), l !== null) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(557));
              t[Qt] = e;
            } else
              _n(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Tt(e), t = !1;
          } else
            l = Oc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (Ne(e), e) : (Ne(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(f(558));
        }
        return Tt(e), null;
      case 13:
        if (n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = Wn(e), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(f(317));
              a[Qt] = e;
            } else
              _n(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Tt(e), a = !1;
          } else
            a = Oc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return e.flags & 256 ? (Ne(e), e) : (Ne(e), null);
        }
        return Ne(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = n !== null, t = t !== null && t.memoizedState !== null, l && (n = e.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== a && (n.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), ci(e, e.updateQueue), Tt(e), null);
      case 4:
        return Nt(), t === null && js(e.stateNode.containerInfo), Tt(e), null;
      case 10:
        return bl(e.type), Tt(e), null;
      case 19:
        if (O(qt), n = e.memoizedState, n === null) return Tt(e), null;
        if (a = (e.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) ka(n, !1);
          else {
            if (Dt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = ku(t), u !== null) {
                  for (e.flags |= 128, ka(n, !1), t = u.updateQueue, e.updateQueue = t, ci(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    rr(l, t), l = l.sibling;
                  return B(
                    qt,
                    qt.current & 1 | 2
                  ), ct && gl(e, n.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null && Jt() > hi && (e.flags |= 128, a = !0, ka(n, !1), e.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = ku(u), t !== null) {
              if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, ci(e, t), ka(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !ct)
                return Tt(e), null;
            } else
              2 * Jt() - n.renderingStartTime > hi && l !== 536870912 && (e.flags |= 128, a = !0, ka(n, !1), e.lanes = 4194304);
          n.isBackwards ? (u.sibling = e.child, e.child = u) : (t = n.last, t !== null ? t.sibling = u : e.child = u, n.last = u);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = Jt(), t.sibling = null, l = qt.current, B(
          qt,
          a ? l & 1 | 2 : l & 1
        ), ct && gl(e, n.treeForkCount), t) : (Tt(e), null);
      case 22:
      case 23:
        return Ne(e), Lc(), n = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Tt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Tt(e), l = e.updateQueue, l !== null && ci(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== l && (e.flags |= 2048), t !== null && O(An), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), bl(jt), Tt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function Pm(t, e) {
    switch (Tc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return bl(jt), Nt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return tt(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Ne(e), e.alternate === null)
            throw Error(f(340));
          _n();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Ne(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(f(340));
          _n();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return O(qt), null;
      case 4:
        return Nt(), null;
      case 10:
        return bl(e.type), null;
      case 22:
      case 23:
        return Ne(e), Lc(), t !== null && O(An), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return bl(jt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Lo(t, e) {
    switch (Tc(e), e.tag) {
      case 3:
        bl(jt), Nt();
        break;
      case 26:
      case 27:
      case 5:
        tt(e);
        break;
      case 4:
        Nt();
        break;
      case 31:
        e.memoizedState !== null && Ne(e);
        break;
      case 13:
        Ne(e);
        break;
      case 19:
        O(qt);
        break;
      case 10:
        bl(e.type);
        break;
      case 22:
      case 23:
        Ne(e), Lc(), t !== null && O(An);
        break;
      case 24:
        bl(jt);
    }
  }
  function Wa(t, e) {
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
      yt(e, e.return, o);
    }
  }
  function Kl(t, e, l) {
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
                yt(
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
      yt(e, e.return, E);
    }
  }
  function Yo(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Rr(e, l);
      } catch (n) {
        yt(t, t.return, n);
      }
    }
  }
  function Go(t, e, l) {
    l.props = Mn(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      yt(t, e, n);
    }
  }
  function $a(t, e) {
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
      yt(t, e, a);
    }
  }
  function ul(t, e) {
    var l = t.ref, n = t.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          yt(t, e, a);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          yt(t, e, a);
        }
      else l.current = null;
  }
  function wo(t) {
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
      yt(t, t.return, a);
    }
  }
  function vs(t, e, l) {
    try {
      var n = t.stateNode;
      _y(n, t.type, l, e), n[se] = e;
    } catch (a) {
      yt(t, t.return, a);
    }
  }
  function Xo(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Pl(t.type) || t.tag === 4;
  }
  function gs(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Xo(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Pl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function ps(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = ml));
    else if (n !== 4 && (n === 27 && Pl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (ps(t, e, l), t = t.sibling; t !== null; )
        ps(t, e, l), t = t.sibling;
  }
  function si(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (n !== 4 && (n === 27 && Pl(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (si(t, e, l), t = t.sibling; t !== null; )
        si(t, e, l), t = t.sibling;
  }
  function Qo(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var n = t.type, a = e.attributes; a.length; )
        e.removeAttributeNode(a[0]);
      ee(e, n, l), e[Qt] = t, e[se] = l;
    } catch (u) {
      yt(t, t.return, u);
    }
  }
  var Al = !1, Gt = !1, bs = !1, Vo = typeof WeakSet == "function" ? WeakSet : Set, kt = null;
  function ty(t, e) {
    if (t = t.containerInfo, Gs = Mi, t = er(t), hc(t)) {
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
            var c = 0, o = -1, d = -1, b = 0, E = 0, N = t, S = null;
            e: for (; ; ) {
              for (var _; N !== l || a !== 0 && N.nodeType !== 3 || (o = c + a), N !== u || n !== 0 && N.nodeType !== 3 || (d = c + n), N.nodeType === 3 && (c += N.nodeValue.length), (_ = N.firstChild) !== null; )
                S = N, N = _;
              for (; ; ) {
                if (N === t) break e;
                if (S === l && ++b === a && (o = c), S === u && ++E === n && (d = c), (_ = N.nextSibling) !== null) break;
                N = S, S = N.parentNode;
              }
              N = _;
            }
            l = o === -1 || d === -1 ? null : { start: o, end: d };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (ws = { focusedElem: t, selectionRange: l }, Mi = !1, kt = e; kt !== null; )
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
                  var L = Mn(
                    l.type,
                    a
                  );
                  t = n.getSnapshotBeforeUpdate(
                    L,
                    u
                  ), n.__reactInternalSnapshotBeforeUpdate = t;
                } catch (Z) {
                  yt(
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
                  Vs(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Vs(t);
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
  function Zo(t, e, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        zl(t, l), n & 4 && Wa(5, l);
        break;
      case 1:
        if (zl(t, l), n & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (c) {
              yt(l, l.return, c);
            }
          else {
            var a = Mn(
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
              yt(
                l,
                l.return,
                c
              );
            }
          }
        n & 64 && Yo(l), n & 512 && $a(l, l.return);
        break;
      case 3:
        if (zl(t, l), n & 64 && (t = l.updateQueue, t !== null)) {
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
            Rr(t, e);
          } catch (c) {
            yt(l, l.return, c);
          }
        }
        break;
      case 27:
        e === null && n & 4 && Qo(l);
      case 26:
      case 5:
        zl(t, l), e === null && n & 4 && wo(l), n & 512 && $a(l, l.return);
        break;
      case 12:
        zl(t, l);
        break;
      case 31:
        zl(t, l), n & 4 && ko(t, l);
        break;
      case 13:
        zl(t, l), n & 4 && Wo(t, l), n & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = fy.bind(
          null,
          l
        ), My(t, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || Al, !n) {
          e = e !== null && e.memoizedState !== null || Gt, a = Al;
          var u = Gt;
          Al = n, (Gt = e) && !u ? Nl(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : zl(t, l), Al = a, Gt = u;
        }
        break;
      case 30:
        break;
      default:
        zl(t, l);
    }
  }
  function Ko(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Ko(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && y(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Ot = null, ve = !1;
  function Ol(t, e, l) {
    for (l = l.child; l !== null; )
      Jo(t, e, l), l = l.sibling;
  }
  function Jo(t, e, l) {
    if (Bt && typeof Bt.onCommitFiberUnmount == "function")
      try {
        Bt.onCommitFiberUnmount(rn, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Gt || ul(l, e), Ol(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Gt || ul(l, e);
        var n = Ot, a = ve;
        Pl(l.type) && (Ot = l.stateNode, ve = !1), Ol(
          t,
          e,
          l
        ), uu(l.stateNode), Ot = n, ve = a;
        break;
      case 5:
        Gt || ul(l, e);
      case 6:
        if (n = Ot, a = ve, Ot = null, Ol(
          t,
          e,
          l
        ), Ot = n, ve = a, Ot !== null)
          if (ve)
            try {
              (Ot.nodeType === 9 ? Ot.body : Ot.nodeName === "HTML" ? Ot.ownerDocument.body : Ot).removeChild(l.stateNode);
            } catch (u) {
              yt(
                l,
                e,
                u
              );
            }
          else
            try {
              Ot.removeChild(l.stateNode);
            } catch (u) {
              yt(
                l,
                e,
                u
              );
            }
        break;
      case 18:
        Ot !== null && (ve ? (t = Ot, Yh(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), va(t)) : Yh(Ot, l.stateNode));
        break;
      case 4:
        n = Ot, a = ve, Ot = l.stateNode.containerInfo, ve = !0, Ol(
          t,
          e,
          l
        ), Ot = n, ve = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Kl(2, l, e), Gt || Kl(4, l, e), Ol(
          t,
          e,
          l
        );
        break;
      case 1:
        Gt || (ul(l, e), n = l.stateNode, typeof n.componentWillUnmount == "function" && Go(
          l,
          e,
          n
        )), Ol(
          t,
          e,
          l
        );
        break;
      case 21:
        Ol(
          t,
          e,
          l
        );
        break;
      case 22:
        Gt = (n = Gt) || l.memoizedState !== null, Ol(
          t,
          e,
          l
        ), Gt = n;
        break;
      default:
        Ol(
          t,
          e,
          l
        );
    }
  }
  function ko(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        va(t);
      } catch (l) {
        yt(e, e.return, l);
      }
    }
  }
  function Wo(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        va(t);
      } catch (l) {
        yt(e, e.return, l);
      }
  }
  function ey(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Vo()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Vo()), e;
      default:
        throw Error(f(435, t.tag));
    }
  }
  function fi(t, e) {
    var l = ey(t);
    e.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = ry.bind(null, t, n);
        n.then(a, a);
      }
    });
  }
  function ge(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], u = t, c = e, o = c;
        t: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (Pl(o.type)) {
                Ot = o.stateNode, ve = !1;
                break t;
              }
              break;
            case 5:
              Ot = o.stateNode, ve = !1;
              break t;
            case 3:
            case 4:
              Ot = o.stateNode.containerInfo, ve = !0;
              break t;
          }
          o = o.return;
        }
        if (Ot === null) throw Error(f(160));
        Jo(u, c, a), Ot = null, ve = !1, u = a.alternate, u !== null && (u.return = null), a.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        $o(e, t), e = e.sibling;
  }
  var ke = null;
  function $o(t, e) {
    var l = t.alternate, n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ge(e, t), pe(t), n & 4 && (Kl(3, t, t.return), Wa(3, t), Kl(5, t, t.return));
        break;
      case 1:
        ge(e, t), pe(t), n & 512 && (Gt || l === null || ul(l, l.return)), n & 64 && Al && (t = t.updateQueue, t !== null && (n = t.callbacks, n !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = ke;
        if (ge(e, t), pe(t), n & 512 && (Gt || l === null || ul(l, l.return)), n & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (n = t.memoizedState, l === null)
            if (n === null)
              if (t.stateNode === null) {
                t: {
                  n = t.type, l = t.memoizedProps, a = a.ownerDocument || a;
                  e: switch (n) {
                    case "title":
                      u = a.getElementsByTagName("title")[0], (!u || u[xl] || u[Qt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(n), a.head.insertBefore(
                        u,
                        a.querySelector("head > title")
                      )), ee(u, n, l), u[Qt] = t, et(u), n = u;
                      break t;
                    case "link":
                      var c = $h(
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
                      u = a.createElement(n), ee(u, n, l), a.head.appendChild(u);
                      break;
                    case "meta":
                      if (c = $h(
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
                      u = a.createElement(n), ee(u, n, l), a.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, n));
                  }
                  u[Qt] = t, et(u), n = u;
                }
                t.stateNode = n;
              } else
                Fh(
                  a,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Wh(
                a,
                n,
                t.memoizedProps
              );
          else
            u !== n ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, n === null ? Fh(
              a,
              t.type,
              t.stateNode
            ) : Wh(
              a,
              n,
              t.memoizedProps
            )) : n === null && t.stateNode !== null && vs(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        ge(e, t), pe(t), n & 512 && (Gt || l === null || ul(l, l.return)), l !== null && n & 4 && vs(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (ge(e, t), pe(t), n & 512 && (Gt || l === null || ul(l, l.return)), t.flags & 32) {
          a = t.stateNode;
          try {
            Yn(a, "");
          } catch (L) {
            yt(t, t.return, L);
          }
        }
        n & 4 && t.stateNode != null && (a = t.memoizedProps, vs(
          t,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (bs = !0);
        break;
      case 6:
        if (ge(e, t), pe(t), n & 4) {
          if (t.stateNode === null)
            throw Error(f(162));
          n = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = n;
          } catch (L) {
            yt(t, t.return, L);
          }
        }
        break;
      case 3:
        if (Oi = null, a = ke, ke = Ti(e.containerInfo), ge(e, t), ke = a, pe(t), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            va(e.containerInfo);
          } catch (L) {
            yt(t, t.return, L);
          }
        bs && (bs = !1, Fo(t));
        break;
      case 4:
        n = ke, ke = Ti(
          t.stateNode.containerInfo
        ), ge(e, t), pe(t), ke = n;
        break;
      case 12:
        ge(e, t), pe(t);
        break;
      case 31:
        ge(e, t), pe(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, fi(t, n)));
        break;
      case 13:
        ge(e, t), pe(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (oi = Jt()), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, fi(t, n)));
        break;
      case 22:
        a = t.memoizedState !== null;
        var d = l !== null && l.memoizedState !== null, b = Al, E = Gt;
        if (Al = b || a, Gt = E || d, ge(e, t), Gt = E, Al = b, pe(t), n & 8192)
          t: for (e = t.stateNode, e._visibility = a ? e._visibility & -2 : e._visibility | 1, a && (l === null || d || Al || Gt || Cn(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                d = l = e;
                try {
                  if (u = d.stateNode, a)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    o = d.stateNode;
                    var N = d.memoizedProps.style, S = N != null && N.hasOwnProperty("display") ? N.display : null;
                    o.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (L) {
                  yt(d, d.return, L);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                d = e;
                try {
                  d.stateNode.nodeValue = a ? "" : d.memoizedProps;
                } catch (L) {
                  yt(d, d.return, L);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                d = e;
                try {
                  var _ = d.stateNode;
                  a ? Gh(_, !0) : Gh(d.stateNode, !1);
                } catch (L) {
                  yt(d, d.return, L);
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
        n & 4 && (n = t.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, fi(t, l))));
        break;
      case 19:
        ge(e, t), pe(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, fi(t, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ge(e, t), pe(t);
    }
  }
  function pe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, n = t.return; n !== null; ) {
          if (Xo(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, u = gs(t);
            si(t, u, a);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (Yn(c, ""), l.flags &= -33);
            var o = gs(t);
            si(t, o, c);
            break;
          case 3:
          case 4:
            var d = l.stateNode.containerInfo, b = gs(t);
            ps(
              t,
              b,
              d
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (E) {
        yt(t, t.return, E);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Fo(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Fo(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function zl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Zo(t, e.alternate, e), e = e.sibling;
  }
  function Cn(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Kl(4, e, e.return), Cn(e);
          break;
        case 1:
          ul(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Go(
            e,
            e.return,
            l
          ), Cn(e);
          break;
        case 27:
          uu(e.stateNode);
        case 26:
        case 5:
          ul(e, e.return), Cn(e);
          break;
        case 22:
          e.memoizedState === null && Cn(e);
          break;
        case 30:
          Cn(e);
          break;
        default:
          Cn(e);
      }
      t = t.sibling;
    }
  }
  function Nl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate, a = t, u = e, c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Nl(
            a,
            u,
            l
          ), Wa(4, u);
          break;
        case 1:
          if (Nl(
            a,
            u,
            l
          ), n = u, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (b) {
              yt(n, n.return, b);
            }
          if (n = u, a = n.updateQueue, a !== null) {
            var o = n.stateNode;
            try {
              var d = a.shared.hiddenCallbacks;
              if (d !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < d.length; a++)
                  Nr(d[a], o);
            } catch (b) {
              yt(n, n.return, b);
            }
          }
          l && c & 64 && Yo(u), $a(u, u.return);
          break;
        case 27:
          Qo(u);
        case 26:
        case 5:
          Nl(
            a,
            u,
            l
          ), l && n === null && c & 4 && wo(u), $a(u, u.return);
          break;
        case 12:
          Nl(
            a,
            u,
            l
          );
          break;
        case 31:
          Nl(
            a,
            u,
            l
          ), l && c & 4 && ko(a, u);
          break;
        case 13:
          Nl(
            a,
            u,
            l
          ), l && c & 4 && Wo(a, u);
          break;
        case 22:
          u.memoizedState === null && Nl(
            a,
            u,
            l
          ), $a(u, u.return);
          break;
        case 30:
          break;
        default:
          Nl(
            a,
            u,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Ss(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Ha(l));
  }
  function _s(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ha(t));
  }
  function We(t, e, l, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Io(
          t,
          e,
          l,
          n
        ), e = e.sibling;
  }
  function Io(t, e, l, n) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        We(
          t,
          e,
          l,
          n
        ), a & 2048 && Wa(9, e);
        break;
      case 1:
        We(
          t,
          e,
          l,
          n
        );
        break;
      case 3:
        We(
          t,
          e,
          l,
          n
        ), a & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ha(t)));
        break;
      case 12:
        if (a & 2048) {
          We(
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
            yt(e, e.return, d);
          }
        } else
          We(
            t,
            e,
            l,
            n
          );
        break;
      case 31:
        We(
          t,
          e,
          l,
          n
        );
        break;
      case 13:
        We(
          t,
          e,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, c = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? We(
          t,
          e,
          l,
          n
        ) : Fa(t, e) : u._visibility & 2 ? We(
          t,
          e,
          l,
          n
        ) : (u._visibility |= 2, ua(
          t,
          e,
          l,
          n,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && Ss(c, e);
        break;
      case 24:
        We(
          t,
          e,
          l,
          n
        ), a & 2048 && _s(e.alternate, e);
        break;
      default:
        We(
          t,
          e,
          l,
          n
        );
    }
  }
  function ua(t, e, l, n, a) {
    for (a = a && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, c = e, o = l, d = n, b = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ua(
            u,
            c,
            o,
            d,
            a
          ), Wa(8, c);
          break;
        case 23:
          break;
        case 22:
          var E = c.stateNode;
          c.memoizedState !== null ? E._visibility & 2 ? ua(
            u,
            c,
            o,
            d,
            a
          ) : Fa(
            u,
            c
          ) : (E._visibility |= 2, ua(
            u,
            c,
            o,
            d,
            a
          )), a && b & 2048 && Ss(
            c.alternate,
            c
          );
          break;
        case 24:
          ua(
            u,
            c,
            o,
            d,
            a
          ), a && b & 2048 && _s(c.alternate, c);
          break;
        default:
          ua(
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
  function Fa(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, n = e, a = n.flags;
        switch (n.tag) {
          case 22:
            Fa(l, n), a & 2048 && Ss(
              n.alternate,
              n
            );
            break;
          case 24:
            Fa(l, n), a & 2048 && _s(n.alternate, n);
            break;
          default:
            Fa(l, n);
        }
        e = e.sibling;
      }
  }
  var Ia = 8192;
  function ia(t, e, l) {
    if (t.subtreeFlags & Ia)
      for (t = t.child; t !== null; )
        Po(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function Po(t, e, l) {
    switch (t.tag) {
      case 26:
        ia(
          t,
          e,
          l
        ), t.flags & Ia && t.memoizedState !== null && wy(
          l,
          ke,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        ia(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var n = ke;
        ke = Ti(t.stateNode.containerInfo), ia(
          t,
          e,
          l
        ), ke = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = Ia, Ia = 16777216, ia(
          t,
          e,
          l
        ), Ia = n) : ia(
          t,
          e,
          l
        ));
        break;
      default:
        ia(
          t,
          e,
          l
        );
    }
  }
  function th(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Pa(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          kt = n, lh(
            n,
            t
          );
        }
      th(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        eh(t), t = t.sibling;
  }
  function eh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Pa(t), t.flags & 2048 && Kl(9, t, t.return);
        break;
      case 3:
        Pa(t);
        break;
      case 12:
        Pa(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ri(t)) : Pa(t);
        break;
      default:
        Pa(t);
    }
  }
  function ri(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          kt = n, lh(
            n,
            t
          );
        }
      th(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Kl(8, e, e.return), ri(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, ri(e));
          break;
        default:
          ri(e);
      }
      t = t.sibling;
    }
  }
  function lh(t, e) {
    for (; kt !== null; ) {
      var l = kt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Kl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Ha(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, kt = n;
      else
        t: for (l = t; kt !== null; ) {
          n = kt;
          var a = n.sibling, u = n.return;
          if (Ko(n), n === l) {
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
  var ly = {
    getCacheForType: function(t) {
      var e = Pt(jt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return Pt(jt).controller.signal;
    }
  }, ny = typeof WeakMap == "function" ? WeakMap : Map, ht = 0, _t = null, lt = null, ut = 0, mt = 0, Re = null, Jl = !1, ca = !1, Es = !1, Rl = 0, Dt = 0, kl = 0, Dn = 0, Ts = 0, Me = 0, sa = 0, tu = null, be = null, As = !1, oi = 0, nh = 0, hi = 1 / 0, di = null, Wl = null, Vt = 0, $l = null, fa = null, Ml = 0, Os = 0, zs = null, ah = null, eu = 0, Ns = null;
  function Ce() {
    return (ht & 2) !== 0 && ut !== 0 ? ut & -ut : T.T !== null ? qs() : _u();
  }
  function uh() {
    if (Me === 0)
      if ((ut & 536870912) === 0 || ct) {
        var t = _e;
        _e <<= 1, (_e & 3932160) === 0 && (_e = 262144), Me = t;
      } else Me = 536870912;
    return t = ze.current, t !== null && (t.flags |= 32), Me;
  }
  function Se(t, e, l) {
    (t === _t && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null) && (ra(t, 0), Fl(
      t,
      ut,
      Me,
      !1
    )), xe(t, l), ((ht & 2) === 0 || t !== _t) && (t === _t && ((ht & 2) === 0 && (Dn |= l), Dt === 4 && Fl(
      t,
      ut,
      Me,
      !1
    )), il(t));
  }
  function ih(t, e, l) {
    if ((ht & 6) !== 0) throw Error(f(327));
    var n = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || rl(t, e), a = n ? iy(t, e) : Ms(t, e, !0), u = n;
    do {
      if (a === 0) {
        ca && !n && Fl(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, u && !ay(l)) {
          a = Ms(t, e, !1), u = !1;
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
              a = tu;
              var d = o.current.memoizedState.isDehydrated;
              if (d && (ra(o, c).flags |= 256), c = Ms(
                o,
                c,
                !1
              ), c !== 2) {
                if (Es && !d) {
                  o.errorRecoveryDisabledLanes |= u, Dn |= u, a = 4;
                  break t;
                }
                u = be, be = a, u !== null && (be === null ? be = u : be.push.apply(
                  be,
                  u
                ));
              }
              a = c;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          ra(t, 0), Fl(t, e, 0, !0);
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
              Fl(
                n,
                e,
                Me,
                !Jl
              );
              break t;
            case 2:
              be = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && (a = oi + 300 - Jt(), 10 < a)) {
            if (Fl(
              n,
              e,
              Me,
              !Jl
            ), hn(n, 0, !0) !== 0) break t;
            Ml = e, n.timeoutHandle = jh(
              ch.bind(
                null,
                n,
                l,
                be,
                di,
                As,
                e,
                Me,
                Dn,
                sa,
                Jl,
                u,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break t;
          }
          ch(
            n,
            l,
            be,
            di,
            As,
            e,
            Me,
            Dn,
            sa,
            Jl,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    il(t);
  }
  function ch(t, e, l, n, a, u, c, o, d, b, E, N, S, _) {
    if (t.timeoutHandle = -1, N = e.subtreeFlags, N & 8192 || (N & 16785408) === 16785408) {
      N = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ml
      }, Po(
        e,
        u,
        N
      );
      var L = (u & 62914560) === u ? oi - Jt() : (u & 4194048) === u ? nh - Jt() : 0;
      if (L = Xy(
        N,
        L
      ), L !== null) {
        Ml = u, t.cancelPendingCommit = L(
          yh.bind(
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
            N,
            null,
            S,
            _
          )
        ), Fl(t, u, c, !b);
        return;
      }
    }
    yh(
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
  function ay(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var n = 0; n < l.length; n++) {
          var a = l[n], u = a.getSnapshot;
          a = a.value;
          try {
            if (!Ae(u(), a)) return !1;
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
  function Fl(t, e, l, n) {
    e &= ~Ts, e &= ~Dn, t.suspendedLanes |= e, t.pingedLanes &= ~e, n && (t.warmLanes |= e), n = t.expirationTimes;
    for (var a = e; 0 < a; ) {
      var u = 31 - oe(a), c = 1 << u;
      n[u] = -1, a &= ~c;
    }
    l !== 0 && mn(t, l, e);
  }
  function mi() {
    return (ht & 6) === 0 ? (lu(0), !1) : !0;
  }
  function Rs() {
    if (lt !== null) {
      if (mt === 0)
        var t = lt.return;
      else
        t = lt, pl = En = null, Vc(t), ta = null, La = 0, t = lt;
      for (; t !== null; )
        Lo(t.alternate, t), t = t.return;
      lt = null;
    }
  }
  function ra(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Ay(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Ml = 0, Rs(), _t = t, lt = l = vl(t.current, null), ut = e, mt = 0, Re = null, Jl = !1, ca = rl(t, e), Es = !1, sa = Me = Ts = Dn = kl = Dt = 0, be = tu = null, As = !1, (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - oe(n), u = 1 << a;
        e |= t[a], n &= ~u;
      }
    return Rl = e, Bu(), l;
  }
  function sh(t, e) {
    F = null, T.H = Ka, e === Pn || e === Qu ? (e = Tr(), mt = 3) : e === Uc ? (e = Tr(), mt = 4) : mt = e === is ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Re = e, lt === null && (Dt = 1, ni(
      t,
      Le(e, t.current)
    ));
  }
  function fh() {
    var t = ze.current;
    return t === null ? !0 : (ut & 4194048) === ut ? Xe === null : (ut & 62914560) === ut || (ut & 536870912) !== 0 ? t === Xe : !1;
  }
  function rh() {
    var t = T.H;
    return T.H = Ka, t === null ? Ka : t;
  }
  function oh() {
    var t = T.A;
    return T.A = ly, t;
  }
  function yi() {
    Dt = 4, Jl || (ut & 4194048) !== ut && ze.current !== null || (ca = !0), (kl & 134217727) === 0 && (Dn & 134217727) === 0 || _t === null || Fl(
      _t,
      ut,
      Me,
      !1
    );
  }
  function Ms(t, e, l) {
    var n = ht;
    ht |= 2;
    var a = rh(), u = oh();
    (_t !== t || ut !== e) && (di = null, ra(t, e)), e = !1;
    var c = Dt;
    t: do
      try {
        if (mt !== 0 && lt !== null) {
          var o = lt, d = Re;
          switch (mt) {
            case 8:
              Rs(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ze.current === null && (e = !0);
              var b = mt;
              if (mt = 0, Re = null, oa(t, o, d, b), l && ca) {
                c = 0;
                break t;
              }
              break;
            default:
              b = mt, mt = 0, Re = null, oa(t, o, d, b);
          }
        }
        uy(), c = Dt;
        break;
      } catch (E) {
        sh(t, E);
      }
    while (!0);
    return e && t.shellSuspendCounter++, pl = En = null, ht = n, T.H = a, T.A = u, lt === null && (_t = null, ut = 0, Bu()), c;
  }
  function uy() {
    for (; lt !== null; ) hh(lt);
  }
  function iy(t, e) {
    var l = ht;
    ht |= 2;
    var n = rh(), a = oh();
    _t !== t || ut !== e ? (di = null, hi = Jt() + 500, ra(t, e)) : ca = rl(
      t,
      e
    );
    t: do
      try {
        if (mt !== 0 && lt !== null) {
          e = lt;
          var u = Re;
          e: switch (mt) {
            case 1:
              mt = 0, Re = null, oa(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (_r(u)) {
                mt = 0, Re = null, dh(e);
                break;
              }
              e = function() {
                mt !== 2 && mt !== 9 || _t !== t || (mt = 7), il(t);
              }, u.then(e, e);
              break t;
            case 3:
              mt = 7;
              break t;
            case 4:
              mt = 5;
              break t;
            case 7:
              _r(u) ? (mt = 0, Re = null, dh(e)) : (mt = 0, Re = null, oa(t, e, u, 7));
              break;
            case 5:
              var c = null;
              switch (lt.tag) {
                case 26:
                  c = lt.memoizedState;
                case 5:
                case 27:
                  var o = lt;
                  if (c ? Ih(c) : o.stateNode.complete) {
                    mt = 0, Re = null;
                    var d = o.sibling;
                    if (d !== null) lt = d;
                    else {
                      var b = o.return;
                      b !== null ? (lt = b, vi(b)) : lt = null;
                    }
                    break e;
                  }
              }
              mt = 0, Re = null, oa(t, e, u, 5);
              break;
            case 6:
              mt = 0, Re = null, oa(t, e, u, 6);
              break;
            case 8:
              Rs(), Dt = 6;
              break t;
            default:
              throw Error(f(462));
          }
        }
        cy();
        break;
      } catch (E) {
        sh(t, E);
      }
    while (!0);
    return pl = En = null, T.H = n, T.A = a, ht = l, lt !== null ? 0 : (_t = null, ut = 0, Bu(), Dt);
  }
  function cy() {
    for (; lt !== null && !xn(); )
      hh(lt);
  }
  function hh(t) {
    var e = Ho(t.alternate, t, Rl);
    t.memoizedProps = t.pendingProps, e === null ? vi(t) : lt = e;
  }
  function dh(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Co(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          ut
        );
        break;
      case 11:
        e = Co(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          ut
        );
        break;
      case 5:
        Vc(e);
      default:
        Lo(l, e), e = lt = rr(e, Rl), e = Ho(l, e, Rl);
    }
    t.memoizedProps = t.pendingProps, e === null ? vi(t) : lt = e;
  }
  function oa(t, e, l, n) {
    pl = En = null, Vc(e), ta = null, La = 0;
    var a = e.return;
    try {
      if (Wm(
        t,
        a,
        e,
        l,
        ut
      )) {
        Dt = 1, ni(
          t,
          Le(l, t.current)
        ), lt = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw lt = a, u;
      Dt = 1, ni(
        t,
        Le(l, t.current)
      ), lt = null;
      return;
    }
    e.flags & 32768 ? (ct || n === 1 ? t = !0 : ca || (ut & 536870912) !== 0 ? t = !1 : (Jl = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = ze.current, n !== null && n.tag === 13 && (n.flags |= 16384))), mh(e, t)) : vi(e);
  }
  function vi(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        mh(
          e,
          Jl
        );
        return;
      }
      t = e.return;
      var l = Im(
        e.alternate,
        e,
        Rl
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
    Dt === 0 && (Dt = 5);
  }
  function mh(t, e) {
    do {
      var l = Pm(t.alternate, t);
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
    Dt = 6, lt = null;
  }
  function yh(t, e, l, n, a, u, c, o, d) {
    t.cancelPendingCommit = null;
    do
      gi();
    while (Vt !== 0);
    if ((ht & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (u = e.lanes | e.childLanes, u |= gc, dn(
        t,
        l,
        u,
        c,
        o,
        d
      ), t === _t && (lt = _t = null, ut = 0), fa = e, $l = t, Ml = l, Os = u, zs = a, ah = n, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, oy(Ke, function() {
        return Sh(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
        n = T.T, T.T = null, a = x.p, x.p = 2, c = ht, ht |= 4;
        try {
          ty(t, e, l);
        } finally {
          ht = c, x.p = a, T.T = n;
        }
      }
      Vt = 1, vh(), gh(), ph();
    }
  }
  function vh() {
    if (Vt === 1) {
      Vt = 0;
      var t = $l, e = fa, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = T.T, T.T = null;
        var n = x.p;
        x.p = 2;
        var a = ht;
        ht |= 4;
        try {
          $o(e, t);
          var u = ws, c = er(t.containerInfo), o = u.focusedElem, d = u.selectionRange;
          if (c !== o && o && o.ownerDocument && tr(
            o.ownerDocument.documentElement,
            o
          )) {
            if (d !== null && hc(o)) {
              var b = d.start, E = d.end;
              if (E === void 0 && (E = b), "selectionStart" in o)
                o.selectionStart = b, o.selectionEnd = Math.min(
                  E,
                  o.value.length
                );
              else {
                var N = o.ownerDocument || document, S = N && N.defaultView || window;
                if (S.getSelection) {
                  var _ = S.getSelection(), L = o.textContent.length, Z = Math.min(d.start, L), St = d.end === void 0 ? Z : Math.min(d.end, L);
                  !_.extend && Z > St && (c = St, St = Z, Z = c);
                  var v = Pf(
                    o,
                    Z
                  ), m = Pf(
                    o,
                    St
                  );
                  if (v && m && (_.rangeCount !== 1 || _.anchorNode !== v.node || _.anchorOffset !== v.offset || _.focusNode !== m.node || _.focusOffset !== m.offset)) {
                    var p = N.createRange();
                    p.setStart(v.node, v.offset), _.removeAllRanges(), Z > St ? (_.addRange(p), _.extend(m.node, m.offset)) : (p.setEnd(m.node, m.offset), _.addRange(p));
                  }
                }
              }
            }
            for (N = [], _ = o; _ = _.parentNode; )
              _.nodeType === 1 && N.push({
                element: _,
                left: _.scrollLeft,
                top: _.scrollTop
              });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < N.length; o++) {
              var A = N[o];
              A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
            }
          }
          Mi = !!Gs, ws = Gs = null;
        } finally {
          ht = a, x.p = n, T.T = l;
        }
      }
      t.current = e, Vt = 2;
    }
  }
  function gh() {
    if (Vt === 2) {
      Vt = 0;
      var t = $l, e = fa, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = T.T, T.T = null;
        var n = x.p;
        x.p = 2;
        var a = ht;
        ht |= 4;
        try {
          Zo(t, e.alternate, e);
        } finally {
          ht = a, x.p = n, T.T = l;
        }
      }
      Vt = 3;
    }
  }
  function ph() {
    if (Vt === 4 || Vt === 3) {
      Vt = 0, ba();
      var t = $l, e = fa, l = Ml, n = ah;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Vt = 5 : (Vt = 0, fa = $l = null, bh(t, t.pendingLanes));
      var a = t.pendingLanes;
      if (a === 0 && (Wl = null), Ea(l), e = e.stateNode, Bt && typeof Bt.onCommitFiberRoot == "function")
        try {
          Bt.onCommitFiberRoot(
            rn,
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
      (Ml & 3) !== 0 && gi(), il(t), a = t.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? t === Ns ? eu++ : (eu = 0, Ns = t) : eu = 0, lu(0);
    }
  }
  function bh(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Ha(e)));
  }
  function gi() {
    return vh(), gh(), ph(), Sh();
  }
  function Sh() {
    if (Vt !== 5) return !1;
    var t = $l, e = Os;
    Os = 0;
    var l = Ea(Ml), n = T.T, a = x.p;
    try {
      x.p = 32 > l ? 32 : l, T.T = null, l = zs, zs = null;
      var u = $l, c = Ml;
      if (Vt = 0, fa = $l = null, Ml = 0, (ht & 6) !== 0) throw Error(f(331));
      var o = ht;
      if (ht |= 4, eh(u.current), Io(
        u,
        u.current,
        c,
        l
      ), ht = o, lu(0, !1), Bt && typeof Bt.onPostCommitFiberRoot == "function")
        try {
          Bt.onPostCommitFiberRoot(rn, u);
        } catch {
        }
      return !0;
    } finally {
      x.p = a, T.T = n, bh(t, e);
    }
  }
  function _h(t, e, l) {
    e = Le(l, e), e = us(t.stateNode, e, 2), t = Ql(t, e, 2), t !== null && (xe(t, 2), il(t));
  }
  function yt(t, e, l) {
    if (t.tag === 3)
      _h(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          _h(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Wl === null || !Wl.has(n))) {
            t = Le(l, t), l = Eo(2), n = Ql(e, l, 2), n !== null && (To(
              l,
              n,
              e,
              t
            ), xe(n, 2), il(n));
            break;
          }
        }
        e = e.return;
      }
  }
  function Cs(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new ny();
      var a = /* @__PURE__ */ new Set();
      n.set(e, a);
    } else
      a = n.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(e, a));
    a.has(l) || (Es = !0, a.add(l), t = sy.bind(null, t, e, l), e.then(t, t));
  }
  function sy(t, e, l) {
    var n = t.pingCache;
    n !== null && n.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, _t === t && (ut & l) === l && (Dt === 4 || Dt === 3 && (ut & 62914560) === ut && 300 > Jt() - oi ? (ht & 2) === 0 && ra(t, 0) : Ts |= l, sa === ut && (sa = 0)), il(t);
  }
  function Eh(t, e) {
    e === 0 && (e = ol()), t = bn(t, e), t !== null && (xe(t, e), il(t));
  }
  function fy(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), Eh(t, l);
  }
  function ry(t, e) {
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
    n !== null && n.delete(e), Eh(t, l);
  }
  function oy(t, e) {
    return ql(t, e);
  }
  var pi = null, ha = null, Ds = !1, bi = !1, Us = !1, Il = 0;
  function il(t) {
    t !== ha && t.next === null && (ha === null ? pi = ha = t : ha = ha.next = t), bi = !0, Ds || (Ds = !0, dy());
  }
  function lu(t, e) {
    if (!Us && bi) {
      Us = !0;
      do
        for (var l = !1, n = pi; n !== null; ) {
          if (t !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var c = n.suspendedLanes, o = n.pingedLanes;
              u = (1 << 31 - oe(42 | t) + 1) - 1, u &= a & ~(c & ~o), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, zh(n, u));
          } else
            u = ut, u = hn(
              n,
              n === _t ? u : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (u & 3) === 0 || rl(n, u) || (l = !0, zh(n, u));
          n = n.next;
        }
      while (l);
      Us = !1;
    }
  }
  function hy() {
    Th();
  }
  function Th() {
    bi = Ds = !1;
    var t = 0;
    Il !== 0 && Ty() && (t = Il);
    for (var e = Jt(), l = null, n = pi; n !== null; ) {
      var a = n.next, u = Ah(n, e);
      u === 0 ? (n.next = null, l === null ? pi = a : l.next = a, a === null && (ha = l)) : (l = n, (t !== 0 || (u & 3) !== 0) && (bi = !0)), n = a;
    }
    Vt !== 0 && Vt !== 5 || lu(t), Il !== 0 && (Il = 0);
  }
  function Ah(t, e) {
    for (var l = t.suspendedLanes, n = t.pingedLanes, a = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - oe(u), o = 1 << c, d = a[c];
      d === -1 ? ((o & l) === 0 || (o & n) !== 0) && (a[c] = bu(o, e)) : d <= e && (t.expiredLanes |= o), u &= ~o;
    }
    if (e = _t, l = ut, l = hn(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n = t.callbackNode, l === 0 || t === e && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null)
      return n !== null && n !== null && fl(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || rl(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (n !== null && fl(n), Ea(l)) {
        case 2:
        case 8:
          l = gu;
          break;
        case 32:
          l = Ke;
          break;
        case 268435456:
          l = qe;
          break;
        default:
          l = Ke;
      }
      return n = Oh.bind(null, t), l = ql(l, n), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return n !== null && n !== null && fl(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Oh(t, e) {
    if (Vt !== 0 && Vt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (gi() && t.callbackNode !== l)
      return null;
    var n = ut;
    return n = hn(
      t,
      t === _t ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n === 0 ? null : (ih(t, n, e), Ah(t, Jt()), t.callbackNode != null && t.callbackNode === l ? Oh.bind(null, t) : null);
  }
  function zh(t, e) {
    if (gi()) return null;
    ih(t, e, !0);
  }
  function dy() {
    Oy(function() {
      (ht & 6) !== 0 ? ql(
        Pe,
        hy
      ) : Th();
    });
  }
  function qs() {
    if (Il === 0) {
      var t = Fn;
      t === 0 && (t = ce, ce <<= 1, (ce & 261888) === 0 && (ce = 256)), Il = t;
    }
    return Il;
  }
  function Nh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Nu("" + t);
  }
  function Rh(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function my(t, e, l, n, a) {
    if (e === "submit" && l && l.stateNode === a) {
      var u = Nh(
        (a[se] || null).action
      ), c = n.submitter;
      c && (e = (e = c[se] || null) ? Nh(e.formAction) : c.getAttribute("formAction"), e !== null && (u = e, c = null));
      var o = new Du(
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
                if (Il !== 0) {
                  var d = c ? Rh(a, c) : new FormData(a);
                  Pc(
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
                typeof u == "function" && (o.preventDefault(), d = c ? Rh(a, c) : new FormData(a), Pc(
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
  for (var xs = 0; xs < vc.length; xs++) {
    var Bs = vc[xs], yy = Bs.toLowerCase(), vy = Bs[0].toUpperCase() + Bs.slice(1);
    Je(
      yy,
      "on" + vy
    );
  }
  Je(ar, "onAnimationEnd"), Je(ur, "onAnimationIteration"), Je(ir, "onAnimationStart"), Je("dblclick", "onDoubleClick"), Je("focusin", "onFocus"), Je("focusout", "onBlur"), Je(Um, "onTransitionRun"), Je(qm, "onTransitionStart"), Je(xm, "onTransitionCancel"), Je(cr, "onTransitionEnd"), Ht("onMouseEnter", ["mouseout", "mouseover"]), Ht("onMouseLeave", ["mouseout", "mouseover"]), Ht("onPointerEnter", ["pointerout", "pointerover"]), Ht("onPointerLeave", ["pointerout", "pointerover"]), Te(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Te(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Te("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Te(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Te(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Te(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var nu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), gy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nu)
  );
  function Mh(t, e) {
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
              xu(E);
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
              xu(E);
            }
            a.currentTarget = null, u = d;
          }
      }
    }
  }
  function nt(t, e) {
    var l = e[Ta];
    l === void 0 && (l = e[Ta] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    l.has(n) || (Ch(e, t, 2, !1), l.add(n));
  }
  function Hs(t, e, l) {
    var n = 0;
    e && (n |= 4), Ch(
      l,
      t,
      n,
      e
    );
  }
  var Si = "_reactListening" + Math.random().toString(36).slice(2);
  function js(t) {
    if (!t[Si]) {
      t[Si] = !0, Ee.forEach(function(l) {
        l !== "selectionchange" && (gy.has(l) || Hs(l, !1, t), Hs(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Si] || (e[Si] = !0, Hs("selectionchange", !1, e));
    }
  }
  function Ch(t, e, l, n) {
    switch (ud(e)) {
      case 2:
        var a = Zy;
        break;
      case 8:
        a = Ky;
        break;
      default:
        a = Is;
    }
    l = a.bind(
      null,
      e,
      l,
      t
    ), a = void 0, !nc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = !0), n ? a !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: a
    }) : t.addEventListener(e, l, !0) : a !== void 0 ? t.addEventListener(e, l, {
      passive: a
    }) : t.addEventListener(e, l, !1);
  }
  function Ls(t, e, l, n, a) {
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
            if (c = D(o), c === null) return;
            if (d = c.tag, d === 5 || d === 6 || d === 26 || d === 27) {
              n = u = c;
              continue t;
            }
            o = o.parentNode;
          }
        }
        n = n.return;
      }
    xf(function() {
      var b = u, E = ec(l), N = [];
      t: {
        var S = sr.get(t);
        if (S !== void 0) {
          var _ = Du, L = t;
          switch (t) {
            case "keypress":
              if (Mu(l) === 0) break t;
            case "keydown":
            case "keyup":
              _ = rm;
              break;
            case "focusin":
              L = "focus", _ = cc;
              break;
            case "focusout":
              L = "blur", _ = cc;
              break;
            case "beforeblur":
            case "afterblur":
              _ = cc;
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
              _ = jf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = Id;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = dm;
              break;
            case ar:
            case ur:
            case ir:
              _ = em;
              break;
            case cr:
              _ = ym;
              break;
            case "scroll":
            case "scrollend":
              _ = $d;
              break;
            case "wheel":
              _ = gm;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = nm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = Yf;
              break;
            case "toggle":
            case "beforetoggle":
              _ = bm;
          }
          var Z = (e & 4) !== 0, St = !Z && (t === "scroll" || t === "scrollend"), v = Z ? S !== null ? S + "Capture" : null : S;
          Z = [];
          for (var m = b, p; m !== null; ) {
            var A = m;
            if (p = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || p === null || v === null || (A = Oa(m, v), A != null && Z.push(
              au(m, A, p)
            )), St) break;
            m = m.return;
          }
          0 < Z.length && (S = new _(
            S,
            L,
            null,
            l,
            E
          ), N.push({ event: S, listeners: Z }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (S = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout", S && l !== tc && (L = l.relatedTarget || l.fromElement) && (D(L) || L[ll]))
            break t;
          if ((_ || S) && (S = E.window === E ? E : (S = E.ownerDocument) ? S.defaultView || S.parentWindow : window, _ ? (L = l.relatedTarget || l.toElement, _ = b, L = L ? D(L) : null, L !== null && (St = M(L), Z = L.tag, L !== St || Z !== 5 && Z !== 27 && Z !== 6) && (L = null)) : (_ = null, L = b), _ !== L)) {
            if (Z = jf, A = "onMouseLeave", v = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (Z = Yf, A = "onPointerLeave", v = "onPointerEnter", m = "pointer"), St = _ == null ? S : $(_), p = L == null ? S : $(L), S = new Z(
              A,
              m + "leave",
              _,
              l,
              E
            ), S.target = St, S.relatedTarget = p, A = null, D(E) === b && (Z = new Z(
              v,
              m + "enter",
              L,
              l,
              E
            ), Z.target = p, Z.relatedTarget = St, A = Z), St = A, _ && L)
              e: {
                for (Z = py, v = _, m = L, p = 0, A = v; A; A = Z(A))
                  p++;
                A = 0;
                for (var Q = m; Q; Q = Z(Q))
                  A++;
                for (; 0 < p - A; )
                  v = Z(v), p--;
                for (; 0 < A - p; )
                  m = Z(m), A--;
                for (; p--; ) {
                  if (v === m || m !== null && v === m.alternate) {
                    Z = v;
                    break e;
                  }
                  v = Z(v), m = Z(m);
                }
                Z = null;
              }
            else Z = null;
            _ !== null && Dh(
              N,
              S,
              _,
              Z,
              !1
            ), L !== null && St !== null && Dh(
              N,
              St,
              L,
              Z,
              !0
            );
          }
        }
        t: {
          if (S = b ? $(b) : window, _ = S.nodeName && S.nodeName.toLowerCase(), _ === "select" || _ === "input" && S.type === "file")
            var rt = Jf;
          else if (Zf(S))
            if (kf)
              rt = Mm;
            else {
              rt = Nm;
              var w = zm;
            }
          else
            _ = S.nodeName, !_ || _.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? b && Pi(b.elementType) && (rt = Jf) : rt = Rm;
          if (rt && (rt = rt(t, b))) {
            Kf(
              N,
              rt,
              l,
              E
            );
            break t;
          }
          w && w(t, S, b), t === "focusout" && b && S.type === "number" && b.memoizedProps.value != null && Ii(S, "number", S.value);
        }
        switch (w = b ? $(b) : window, t) {
          case "focusin":
            (Zf(w) || w.contentEditable === "true") && (Qn = w, dc = b, qa = null);
            break;
          case "focusout":
            qa = dc = Qn = null;
            break;
          case "mousedown":
            mc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            mc = !1, lr(N, l, E);
            break;
          case "selectionchange":
            if (Dm) break;
          case "keydown":
          case "keyup":
            lr(N, l, E);
        }
        var I;
        if (fc)
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
          Xn ? Qf(t, l) && (it = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (it = "onCompositionStart");
        it && (Gf && l.locale !== "ko" && (Xn || it !== "onCompositionStart" ? it === "onCompositionEnd" && Xn && (I = Bf()) : (Hl = E, ac = "value" in Hl ? Hl.value : Hl.textContent, Xn = !0)), w = _i(b, it), 0 < w.length && (it = new Lf(
          it,
          t,
          null,
          l,
          E
        ), N.push({ event: it, listeners: w }), I ? it.data = I : (I = Vf(l), I !== null && (it.data = I)))), (I = _m ? Em(t, l) : Tm(t, l)) && (it = _i(b, "onBeforeInput"), 0 < it.length && (w = new Lf(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          E
        ), N.push({
          event: w,
          listeners: it
        }), w.data = I)), my(
          N,
          t,
          b,
          l,
          E
        );
      }
      Mh(N, e);
    });
  }
  function au(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function _i(t, e) {
    for (var l = e + "Capture", n = []; t !== null; ) {
      var a = t, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = Oa(t, l), a != null && n.unshift(
        au(t, a, u)
      ), a = Oa(t, e), a != null && n.push(
        au(t, a, u)
      )), t.tag === 3) return n;
      t = t.return;
    }
    return [];
  }
  function py(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Dh(t, e, l, n, a) {
    for (var u = e._reactName, c = []; l !== null && l !== n; ) {
      var o = l, d = o.alternate, b = o.stateNode;
      if (o = o.tag, d !== null && d === n) break;
      o !== 5 && o !== 26 && o !== 27 || b === null || (d = b, a ? (b = Oa(l, u), b != null && c.unshift(
        au(l, b, d)
      )) : a || (b = Oa(l, u), b != null && c.push(
        au(l, b, d)
      ))), l = l.return;
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var by = /\r\n?/g, Sy = /\u0000|\uFFFD/g;
  function Uh(t) {
    return (typeof t == "string" ? t : "" + t).replace(by, `
`).replace(Sy, "");
  }
  function qh(t, e) {
    return e = Uh(e), Uh(t) === e;
  }
  function bt(t, e, l, n, a, u) {
    switch (l) {
      case "children":
        typeof n == "string" ? e === "body" || e === "textarea" && n === "" || Yn(t, n) : (typeof n == "number" || typeof n == "bigint") && e !== "body" && Yn(t, "" + n);
        break;
      case "className":
        Ou(t, "class", n);
        break;
      case "tabIndex":
        Ou(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ou(t, l, n);
        break;
      case "style":
        Uf(t, n, u);
        break;
      case "data":
        if (e !== "object") {
          Ou(t, "data", n);
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
        n = Nu("" + n), t.setAttribute(l, n);
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
          typeof u == "function" && (l === "formAction" ? (e !== "input" && bt(t, e, "name", a.name, a, null), bt(
            t,
            e,
            "formEncType",
            a.formEncType,
            a,
            null
          ), bt(
            t,
            e,
            "formMethod",
            a.formMethod,
            a,
            null
          ), bt(
            t,
            e,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (bt(t, e, "encType", a.encType, a, null), bt(t, e, "method", a.method, a, null), bt(t, e, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = Nu("" + n), t.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (t.onclick = ml);
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
        l = Nu("" + n), t.setAttributeNS(
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
        nt("beforetoggle", t), nt("toggle", t), Au(t, "popover", n);
        break;
      case "xlinkActuate":
        dl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        dl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        dl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        dl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        dl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        dl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        dl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        dl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        dl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        Au(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = kd.get(l) || l, Au(t, l, n));
    }
  }
  function Ys(t, e, l, n, a, u) {
    switch (l) {
      case "style":
        Uf(t, n, u);
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
        typeof n == "string" ? Yn(t, n) : (typeof n == "number" || typeof n == "bigint") && Yn(t, "" + n);
        break;
      case "onScroll":
        n != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && nt("scrollend", t);
        break;
      case "onClick":
        n != null && (t.onclick = ml);
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
        if (!Bl.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), e = l.slice(2, a ? l.length - 7 : void 0), u = t[se] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, a), typeof n == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, n, a);
              break t;
            }
            l in t ? t[l] = n : n === !0 ? t.setAttribute(l, "") : Au(t, l, n);
          }
    }
  }
  function ee(t, e, l) {
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
                  bt(t, e, u, c, l, null);
              }
          }
        a && bt(t, e, "srcSet", l.srcSet, l, null), n && bt(t, e, "src", l.src, l, null);
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
                  bt(t, e, n, E, l, null);
              }
          }
        Rf(
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
                bt(t, e, a, o, l, null);
            }
        e = u, l = c, t.multiple = !!n, e != null ? Ln(t, !!n, e, !1) : l != null && Ln(t, !!n, l, !0);
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
                bt(t, e, c, o, l, null);
            }
        Cf(t, n, a, u);
        return;
      case "option":
        for (d in l)
          l.hasOwnProperty(d) && (n = l[d], n != null) && (d === "selected" ? t.selected = n && typeof n != "function" && typeof n != "symbol" : bt(t, e, d, n, l, null));
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
        for (n = 0; n < nu.length; n++)
          nt(nu[n], t);
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
                bt(t, e, b, n, l, null);
            }
        return;
      default:
        if (Pi(e)) {
          for (E in l)
            l.hasOwnProperty(E) && (n = l[E], n !== void 0 && Ys(
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
      l.hasOwnProperty(o) && (n = l[o], n != null && bt(t, e, o, n, l, null));
  }
  function _y(t, e, l, n) {
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
          var N = l[_];
          if (l.hasOwnProperty(_) && N != null)
            switch (_) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = N;
              default:
                n.hasOwnProperty(_) || bt(t, e, _, null, n, N);
            }
        }
        for (var S in n) {
          var _ = n[S];
          if (N = l[S], n.hasOwnProperty(S) && (_ != null || N != null))
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
                _ !== N && bt(
                  t,
                  e,
                  S,
                  _,
                  n,
                  N
                );
            }
        }
        Fi(
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
                n.hasOwnProperty(u) || bt(
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
                u !== d && bt(
                  t,
                  e,
                  a,
                  u,
                  n,
                  d
                );
            }
        e = o, l = c, n = _, S != null ? Ln(t, !!l, S, !1) : !!n != !!l && (e != null ? Ln(t, !!l, e, !0) : Ln(t, !!l, l ? [] : "", !1));
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
                bt(t, e, o, null, n, a);
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
                a !== u && bt(t, e, c, a, n, u);
            }
        Mf(t, S, _);
        return;
      case "option":
        for (var L in l)
          S = l[L], l.hasOwnProperty(L) && S != null && !n.hasOwnProperty(L) && (L === "selected" ? t.selected = !1 : bt(
            t,
            e,
            L,
            null,
            n,
            S
          ));
        for (d in n)
          S = n[d], _ = l[d], n.hasOwnProperty(d) && S !== _ && (S != null || _ != null) && (d === "selected" ? t.selected = S && typeof S != "function" && typeof S != "symbol" : bt(
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
          S = l[Z], l.hasOwnProperty(Z) && S != null && !n.hasOwnProperty(Z) && bt(t, e, Z, null, n, S);
        for (b in n)
          if (S = n[b], _ = l[b], n.hasOwnProperty(b) && S !== _ && (S != null || _ != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(f(137, e));
                break;
              default:
                bt(
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
        if (Pi(e)) {
          for (var St in l)
            S = l[St], l.hasOwnProperty(St) && S !== void 0 && !n.hasOwnProperty(St) && Ys(
              t,
              e,
              St,
              void 0,
              n,
              S
            );
          for (E in n)
            S = n[E], _ = l[E], !n.hasOwnProperty(E) || S === _ || S === void 0 && _ === void 0 || Ys(
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
      S = l[v], l.hasOwnProperty(v) && S != null && !n.hasOwnProperty(v) && bt(t, e, v, null, n, S);
    for (N in n)
      S = n[N], _ = l[N], !n.hasOwnProperty(N) || S === _ || S == null && _ == null || bt(t, e, N, S, n, _);
  }
  function xh(t) {
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
  function Ey() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], u = a.transferSize, c = a.initiatorType, o = a.duration;
        if (u && o && xh(c)) {
          for (c = 0, o = a.responseEnd, n += 1; n < l.length; n++) {
            var d = l[n], b = d.startTime;
            if (b > o) break;
            var E = d.transferSize, N = d.initiatorType;
            E && xh(N) && (d = d.responseEnd, c += E * (d < o ? 1 : (o - b) / (d - b)));
          }
          if (--n, e += 8 * (u + c) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Gs = null, ws = null;
  function Ei(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Bh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Hh(t, e) {
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
  function Xs(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Qs = null;
  function Ty() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Qs ? !1 : (Qs = t, !0) : (Qs = null, !1);
  }
  var jh = typeof setTimeout == "function" ? setTimeout : void 0, Ay = typeof clearTimeout == "function" ? clearTimeout : void 0, Lh = typeof Promise == "function" ? Promise : void 0, Oy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lh < "u" ? function(t) {
    return Lh.resolve(null).then(t).catch(zy);
  } : jh;
  function zy(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Pl(t) {
    return t === "head";
  }
  function Yh(t, e) {
    var l = e, n = 0;
    do {
      var a = l.nextSibling;
      if (t.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            t.removeChild(a), va(e);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          uu(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, uu(l);
          for (var u = l.firstChild; u; ) {
            var c = u.nextSibling, o = u.nodeName;
            u[xl] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = c;
          }
        } else
          l === "body" && uu(t.ownerDocument.body);
      l = a;
    } while (l);
    va(e);
  }
  function Gh(t, e) {
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
  function Vs(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Vs(l), y(l);
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
  function Ny(t, e, l, n) {
    for (; t.nodeType === 1; ) {
      var a = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (n) {
        if (!t[xl])
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
      if (t = Qe(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Ry(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Qe(t.nextSibling), t === null)) return null;
    return t;
  }
  function wh(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Qe(t.nextSibling), t === null)) return null;
    return t;
  }
  function Zs(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Ks(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function My(t, e) {
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
  function Qe(t) {
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
  var Js = null;
  function Xh(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return Qe(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Qh(t) {
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
  function Vh(t, e, l) {
    switch (e = Ei(l), t) {
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
  function uu(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    y(t);
  }
  var Ve = /* @__PURE__ */ new Map(), Zh = /* @__PURE__ */ new Set();
  function Ti(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Cl = x.d;
  x.d = {
    f: Cy,
    r: Dy,
    D: Uy,
    C: qy,
    L: xy,
    m: By,
    X: jy,
    S: Hy,
    M: Ly
  };
  function Cy() {
    var t = Cl.f(), e = mi();
    return t || e;
  }
  function Dy(t) {
    var e = X(t);
    e !== null && e.tag === 5 && e.type === "form" ? co(e) : Cl.r(t);
  }
  var da = typeof document > "u" ? null : document;
  function Kh(t, e, l) {
    var n = da;
    if (n && typeof e == "string" && e) {
      var a = He(e);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), Zh.has(a) || (Zh.add(a), t = { rel: t, crossOrigin: l, href: e }, n.querySelector(a) === null && (e = n.createElement("link"), ee(e, "link", t), et(e), n.head.appendChild(e)));
    }
  }
  function Uy(t) {
    Cl.D(t), Kh("dns-prefetch", t, null);
  }
  function qy(t, e) {
    Cl.C(t, e), Kh("preconnect", t, e);
  }
  function xy(t, e, l) {
    Cl.L(t, e, l);
    var n = da;
    if (n && t && e) {
      var a = 'link[rel="preload"][as="' + He(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + He(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + He(
        l.imageSizes
      ) + '"]')) : a += '[href="' + He(t) + '"]';
      var u = a;
      switch (e) {
        case "style":
          u = ma(t);
          break;
        case "script":
          u = ya(t);
      }
      Ve.has(u) || (t = G(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Ve.set(u, t), n.querySelector(a) !== null || e === "style" && n.querySelector(iu(u)) || e === "script" && n.querySelector(cu(u)) || (e = n.createElement("link"), ee(e, "link", t), et(e), n.head.appendChild(e)));
    }
  }
  function By(t, e) {
    Cl.m(t, e);
    var l = da;
    if (l && t) {
      var n = e && typeof e.as == "string" ? e.as : "script", a = 'link[rel="modulepreload"][as="' + He(n) + '"][href="' + He(t) + '"]', u = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ya(t);
      }
      if (!Ve.has(u) && (t = G({ rel: "modulepreload", href: t }, e), Ve.set(u, t), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(cu(u)))
              return;
        }
        n = l.createElement("link"), ee(n, "link", t), et(n), l.head.appendChild(n);
      }
    }
  }
  function Hy(t, e, l) {
    Cl.S(t, e, l);
    var n = da;
    if (n && t) {
      var a = Mt(n).hoistableStyles, u = ma(t);
      e = e || "default";
      var c = a.get(u);
      if (!c) {
        var o = { loading: 0, preload: null };
        if (c = n.querySelector(
          iu(u)
        ))
          o.loading = 5;
        else {
          t = G(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = Ve.get(u)) && ks(t, l);
          var d = c = n.createElement("link");
          et(d), ee(d, "link", t), d._p = new Promise(function(b, E) {
            d.onload = b, d.onerror = E;
          }), d.addEventListener("load", function() {
            o.loading |= 1;
          }), d.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, Ai(c, e, n);
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
  function jy(t, e) {
    Cl.X(t, e);
    var l = da;
    if (l && t) {
      var n = Mt(l).hoistableScripts, a = ya(t), u = n.get(a);
      u || (u = l.querySelector(cu(a)), u || (t = G({ src: t, async: !0 }, e), (e = Ve.get(a)) && Ws(t, e), u = l.createElement("script"), et(u), ee(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Ly(t, e) {
    Cl.M(t, e);
    var l = da;
    if (l && t) {
      var n = Mt(l).hoistableScripts, a = ya(t), u = n.get(a);
      u || (u = l.querySelector(cu(a)), u || (t = G({ src: t, async: !0, type: "module" }, e), (e = Ve.get(a)) && Ws(t, e), u = l.createElement("script"), et(u), ee(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Jh(t, e, l, n) {
    var a = (a = k.current) ? Ti(a) : null;
    if (!a) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = ma(l.href), l = Mt(
          a
        ).hoistableStyles, n = l.get(e), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = ma(l.href);
          var u = Mt(
            a
          ).hoistableStyles, c = u.get(t);
          if (c || (a = a.ownerDocument || a, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, c), (u = a.querySelector(
            iu(t)
          )) && !u._p && (c.instance = u, c.state.loading = 5), Ve.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Ve.set(t, l), u || Yy(
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
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ya(l), l = Mt(
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
  function ma(t) {
    return 'href="' + He(t) + '"';
  }
  function iu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function kh(t) {
    return G({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Yy(t, e, l, n) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? n.loading = 1 : (e = t.createElement("link"), n.preload = e, e.addEventListener("load", function() {
      return n.loading |= 1;
    }), e.addEventListener("error", function() {
      return n.loading |= 2;
    }), ee(e, "link", l), et(e), t.head.appendChild(e));
  }
  function ya(t) {
    return '[src="' + He(t) + '"]';
  }
  function cu(t) {
    return "script[async]" + t;
  }
  function Wh(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var n = t.querySelector(
            'style[data-href~="' + He(l.href) + '"]'
          );
          if (n)
            return e.instance = n, et(n), n;
          var a = G({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (t.ownerDocument || t).createElement(
            "style"
          ), et(n), ee(n, "style", a), Ai(n, l.precedence, t), e.instance = n;
        case "stylesheet":
          a = ma(l.href);
          var u = t.querySelector(
            iu(a)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, et(u), u;
          n = kh(l), (a = Ve.get(a)) && ks(n, a), u = (t.ownerDocument || t).createElement("link"), et(u);
          var c = u;
          return c._p = new Promise(function(o, d) {
            c.onload = o, c.onerror = d;
          }), ee(u, "link", n), e.state.loading |= 4, Ai(u, l.precedence, t), e.instance = u;
        case "script":
          return u = ya(l.src), (a = t.querySelector(
            cu(u)
          )) ? (e.instance = a, et(a), a) : (n = l, (a = Ve.get(u)) && (n = G({}, l), Ws(n, a)), t = t.ownerDocument || t, a = t.createElement("script"), et(a), ee(a, "link", n), t.head.appendChild(a), e.instance = a);
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (n = e.instance, e.state.loading |= 4, Ai(n, l.precedence, t));
    return e.instance;
  }
  function Ai(t, e, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, u = a, c = 0; c < n.length; c++) {
      var o = n[c];
      if (o.dataset.precedence === e) u = o;
      else if (u !== a) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function ks(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Ws(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Oi = null;
  function $h(t, e, l) {
    if (Oi === null) {
      var n = /* @__PURE__ */ new Map(), a = Oi = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = Oi, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(t)) return n;
    for (n.set(t, null), l = l.getElementsByTagName(t), a = 0; a < l.length; a++) {
      var u = l[a];
      if (!(u[xl] || u[Qt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(e) || "";
        c = t + c;
        var o = n.get(c);
        o ? o.push(u) : n.set(c, [u]);
      }
    }
    return n;
  }
  function Fh(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Gy(t, e, l) {
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
  function Ih(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function wy(t, e, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = ma(n.href), u = e.querySelector(
          iu(a)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = zi.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, et(u);
          return;
        }
        u = e.ownerDocument || e, n = kh(n), (a = Ve.get(a)) && ks(n, a), u = u.createElement("link"), et(u);
        var c = u;
        c._p = new Promise(function(o, d) {
          c.onload = o, c.onerror = d;
        }), ee(u, "link", n), l.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = zi.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var $s = 0;
  function Xy(t, e) {
    return t.stylesheets && t.count === 0 && Ri(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (t.stylesheets && Ri(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && $s === 0 && ($s = 62500 * Ey());
      var a = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Ri(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > $s ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function zi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ri(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Ni = null;
  function Ri(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Ni = /* @__PURE__ */ new Map(), e.forEach(Qy, t), Ni = null, zi.call(t));
  }
  function Qy(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Ni.get(t);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Ni.set(t, l);
        for (var a = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < a.length; u++) {
          var c = a[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), n = c);
        }
        n && l.set(null, n);
      }
      a = e.instance, c = a.getAttribute("data-precedence"), u = l.get(c) || n, u === n && l.set(null, a), l.set(c, a), this.count++, n = zi.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), u ? u.parentNode.insertBefore(a, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), e.state.loading |= 4;
    }
  }
  var su = {
    $$typeof: Xt,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0
  };
  function Vy(t, e, l, n, a, u, c, o, d) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Hn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hn(0), this.hiddenUpdates = Hn(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ph(t, e, l, n, a, u, c, o, d, b, E, N) {
    return t = new Vy(
      t,
      e,
      l,
      c,
      d,
      b,
      E,
      N,
      o
    ), e = 1, u === !0 && (e |= 24), u = Oe(3, null, null, e), t.current = u, u.stateNode = t, e = Mc(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: e
    }, qc(u), t;
  }
  function td(t) {
    return t ? (t = Kn, t) : Kn;
  }
  function ed(t, e, l, n, a, u) {
    a = td(a), n.context === null ? n.context = a : n.pendingContext = a, n = Xl(e), n.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (n.callback = u), l = Ql(t, n, e), l !== null && (Se(l, t, e), Ga(l, t, e));
  }
  function ld(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Fs(t, e) {
    ld(t, e), (t = t.alternate) && ld(t, e);
  }
  function nd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = bn(t, 67108864);
      e !== null && Se(e, t, 67108864), Fs(t, 67108864);
    }
  }
  function ad(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ce();
      e = _a(e);
      var l = bn(t, e);
      l !== null && Se(l, t, e), Fs(t, e);
    }
  }
  var Mi = !0;
  function Zy(t, e, l, n) {
    var a = T.T;
    T.T = null;
    var u = x.p;
    try {
      x.p = 2, Is(t, e, l, n);
    } finally {
      x.p = u, T.T = a;
    }
  }
  function Ky(t, e, l, n) {
    var a = T.T;
    T.T = null;
    var u = x.p;
    try {
      x.p = 8, Is(t, e, l, n);
    } finally {
      x.p = u, T.T = a;
    }
  }
  function Is(t, e, l, n) {
    if (Mi) {
      var a = Ps(n);
      if (a === null)
        Ls(
          t,
          e,
          n,
          Ci,
          l
        ), id(t, n);
      else if (ky(
        a,
        t,
        e,
        l,
        n
      ))
        n.stopPropagation();
      else if (id(t, n), e & 4 && -1 < Jy.indexOf(t)) {
        for (; a !== null; ) {
          var u = X(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = tl(u.pendingLanes);
                  if (c !== 0) {
                    var o = u;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; c; ) {
                      var d = 1 << 31 - oe(c);
                      o.entanglements[1] |= d, c &= ~d;
                    }
                    il(u), (ht & 6) === 0 && (hi = Jt() + 500, lu(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = bn(u, 2), o !== null && Se(o, u, 2), mi(), Fs(u, 2);
            }
          if (u = Ps(n), u === null && Ls(
            t,
            e,
            n,
            Ci,
            l
          ), u === a) break;
          a = u;
        }
        a !== null && n.stopPropagation();
      } else
        Ls(
          t,
          e,
          n,
          null,
          l
        );
    }
  }
  function Ps(t) {
    return t = ec(t), tf(t);
  }
  var Ci = null;
  function tf(t) {
    if (Ci = null, t = D(t), t !== null) {
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
    return Ci = t, null;
  }
  function ud(t) {
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
        switch (Zi()) {
          case Pe:
            return 2;
          case gu:
            return 8;
          case Ke:
          case Ki:
            return 32;
          case qe:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ef = !1, tn = null, en = null, ln = null, fu = /* @__PURE__ */ new Map(), ru = /* @__PURE__ */ new Map(), nn = [], Jy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function id(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        tn = null;
        break;
      case "dragenter":
      case "dragleave":
        en = null;
        break;
      case "mouseover":
      case "mouseout":
        ln = null;
        break;
      case "pointerover":
      case "pointerout":
        fu.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ru.delete(e.pointerId);
    }
  }
  function ou(t, e, l, n, a, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: u,
      targetContainers: [a]
    }, e !== null && (e = X(e), e !== null && nd(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
  }
  function ky(t, e, l, n, a) {
    switch (e) {
      case "focusin":
        return tn = ou(
          tn,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return en = ou(
          en,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return ln = ou(
          ln,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var u = a.pointerId;
        return fu.set(
          u,
          ou(
            fu.get(u) || null,
            t,
            e,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return u = a.pointerId, ru.set(
          u,
          ou(
            ru.get(u) || null,
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
  function cd(t) {
    var e = D(t.target);
    if (e !== null) {
      var l = M(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = q(l), e !== null) {
            t.blockedOn = e, Eu(t.priority, function() {
              ad(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = Y(l), e !== null) {
            t.blockedOn = e, Eu(t.priority, function() {
              ad(l);
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
  function Di(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Ps(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        tc = n, l.target.dispatchEvent(n), tc = null;
      } else
        return e = X(l), e !== null && nd(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function sd(t, e, l) {
    Di(t) && l.delete(e);
  }
  function Wy() {
    ef = !1, tn !== null && Di(tn) && (tn = null), en !== null && Di(en) && (en = null), ln !== null && Di(ln) && (ln = null), fu.forEach(sd), ru.forEach(sd);
  }
  function Ui(t, e) {
    t.blockedOn === e && (t.blockedOn = null, ef || (ef = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      Wy
    )));
  }
  var qi = null;
  function fd(t) {
    qi !== t && (qi = t, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        qi === t && (qi = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], n = t[e + 1], a = t[e + 2];
          if (typeof n != "function") {
            if (tf(n || l) === null)
              continue;
            break;
          }
          var u = X(l);
          u !== null && (t.splice(e, 3), e -= 3, Pc(
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
  function va(t) {
    function e(d) {
      return Ui(d, t);
    }
    tn !== null && Ui(tn, t), en !== null && Ui(en, t), ln !== null && Ui(ln, t), fu.forEach(e), ru.forEach(e);
    for (var l = 0; l < nn.length; l++) {
      var n = nn[l];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < nn.length && (l = nn[0], l.blockedOn === null); )
      cd(l), l.blockedOn === null && nn.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], u = l[n + 1], c = a[se] || null;
        if (typeof u == "function")
          c || fd(l);
        else if (c) {
          var o = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, c = u[se] || null)
              o = c.formAction;
            else if (tf(a) !== null) continue;
          } else o = c.action;
          typeof o == "function" ? l[n + 1] = o : (l.splice(n, 3), n -= 3), fd(l);
        }
      }
  }
  function rd() {
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
  function lf(t) {
    this._internalRoot = t;
  }
  xi.prototype.render = lf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(f(409));
    var l = e.current, n = Ce();
    ed(l, n, t, e, null, null);
  }, xi.prototype.unmount = lf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      ed(t.current, 2, null, t, null, null), mi(), e[ll] = null;
    }
  };
  function xi(t) {
    this._internalRoot = t;
  }
  xi.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = _u();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < nn.length && e !== 0 && e < nn[l].priority; l++) ;
      nn.splice(l, 0, t), l === 0 && cd(t);
    }
  };
  var od = i.version;
  if (od !== "19.2.4")
    throw Error(
      f(
        527,
        od,
        "19.2.4"
      )
    );
  x.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
    return t = z(e), t = t !== null ? J(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var $y = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: T,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bi.isDisabled && Bi.supportsFiber)
      try {
        rn = Bi.inject(
          $y
        ), Bt = Bi;
      } catch {
      }
  }
  return du.createRoot = function(t, e) {
    if (!g(t)) throw Error(f(299));
    var l = !1, n = "", a = po, u = bo, c = So;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), e = Ph(
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
      rd
    ), t[ll] = e.current, js(t), new lf(e);
  }, du.hydrateRoot = function(t, e, l) {
    if (!g(t)) throw Error(f(299));
    var n = !1, a = "", u = po, c = bo, o = So, d = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (o = l.onRecoverableError), l.formState !== void 0 && (d = l.formState)), e = Ph(
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
      rd
    ), e.context = td(null), l = e.current, n = Ce(), n = _a(n), a = Xl(n), a.callback = null, Ql(l, a, n), l = n, e.current.lanes = l, xe(e, l), il(e), t[ll] = e.current, js(t), new xi(e);
  }, du.version = "19.2.4", du;
}
var _d;
function i0() {
  if (_d) return uf.exports;
  _d = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), uf.exports = u0(), uf.exports;
}
var c0 = i0();
const s0 = "/api";
function Cd() {
  return window.localStorage.getItem("token");
}
function Ed() {
  window.location.replace("/login.html");
}
async function ga(r, i = {}) {
  const s = Cd(), f = {
    "Content-Type": "application/json",
    ...s ? { Authorization: `Bearer ${s}` } : {},
    ...i.headers || {}
  }, g = await fetch(`${s0}${r}`, {
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
const sl = /* @__PURE__ */ Object.create(null);
sl.open = "0";
sl.close = "1";
sl.ping = "2";
sl.pong = "3";
sl.message = "4";
sl.upgrade = "5";
sl.noop = "6";
const Yi = /* @__PURE__ */ Object.create(null);
Object.keys(sl).forEach((r) => {
  Yi[sl[r]] = r;
});
const mf = { type: "error", data: "parser error" }, Dd = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Ud = typeof ArrayBuffer == "function", qd = (r) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(r) : r && r.buffer instanceof ArrayBuffer, _f = ({ type: r, data: i }, s, f) => Dd && i instanceof Blob ? s ? f(i) : Td(i, f) : Ud && (i instanceof ArrayBuffer || qd(i)) ? s ? f(i) : Td(new Blob([i]), f) : f(sl[r] + (i || "")), Td = (r, i) => {
  const s = new FileReader();
  return s.onload = function() {
    const f = s.result.split(",")[1];
    i("b" + (f || ""));
  }, s.readAsDataURL(r);
};
function Ad(r) {
  return r instanceof Uint8Array ? r : r instanceof ArrayBuffer ? new Uint8Array(r) : new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
}
let rf;
function f0(r, i) {
  if (Dd && r.data instanceof Blob)
    return r.data.arrayBuffer().then(Ad).then(i);
  if (Ud && (r.data instanceof ArrayBuffer || qd(r.data)))
    return i(Ad(r.data));
  _f(r, !1, (s) => {
    rf || (rf = new TextEncoder()), i(rf.encode(s));
  });
}
const Od = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", yu = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let r = 0; r < Od.length; r++)
  yu[Od.charCodeAt(r)] = r;
const r0 = (r) => {
  let i = r.length * 0.75, s = r.length, f, g = 0, M, q, Y, C;
  r[r.length - 1] === "=" && (i--, r[r.length - 2] === "=" && i--);
  const z = new ArrayBuffer(i), J = new Uint8Array(z);
  for (f = 0; f < s; f += 4)
    M = yu[r.charCodeAt(f)], q = yu[r.charCodeAt(f + 1)], Y = yu[r.charCodeAt(f + 2)], C = yu[r.charCodeAt(f + 3)], J[g++] = M << 2 | q >> 4, J[g++] = (q & 15) << 4 | Y >> 2, J[g++] = (Y & 3) << 6 | C & 63;
  return z;
}, o0 = typeof ArrayBuffer == "function", Ef = (r, i) => {
  if (typeof r != "string")
    return {
      type: "message",
      data: xd(r, i)
    };
  const s = r.charAt(0);
  return s === "b" ? {
    type: "message",
    data: h0(r.substring(1), i)
  } : Yi[s] ? r.length > 1 ? {
    type: Yi[s],
    data: r.substring(1)
  } : {
    type: Yi[s]
  } : mf;
}, h0 = (r, i) => {
  if (o0) {
    const s = r0(r);
    return xd(s, i);
  } else
    return { base64: !0, data: r };
}, xd = (r, i) => i === "blob" ? r instanceof Blob ? r : new Blob([r]) : r instanceof ArrayBuffer ? r : r.buffer, Bd = "", d0 = (r, i) => {
  const s = r.length, f = new Array(s);
  let g = 0;
  r.forEach((M, q) => {
    _f(M, !1, (Y) => {
      f[q] = Y, ++g === s && i(f.join(Bd));
    });
  });
}, m0 = (r, i) => {
  const s = r.split(Bd), f = [];
  for (let g = 0; g < s.length; g++) {
    const M = Ef(s[g], i);
    if (f.push(M), M.type === "error")
      break;
  }
  return f;
};
function y0() {
  return new TransformStream({
    transform(r, i) {
      f0(r, (s) => {
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
let of;
function Hi(r) {
  return r.reduce((i, s) => i + s.length, 0);
}
function ji(r, i) {
  if (r[0].length === i)
    return r.shift();
  const s = new Uint8Array(i);
  let f = 0;
  for (let g = 0; g < i; g++)
    s[g] = r[0][f++], f === r[0].length && (r.shift(), f = 0);
  return r.length && f < r[0].length && (r[0] = r[0].slice(f)), s;
}
function v0(r, i) {
  of || (of = new TextDecoder());
  const s = [];
  let f = 0, g = -1, M = !1;
  return new TransformStream({
    transform(q, Y) {
      for (s.push(q); ; ) {
        if (f === 0) {
          if (Hi(s) < 1)
            break;
          const C = ji(s, 1);
          M = (C[0] & 128) === 128, g = C[0] & 127, g < 126 ? f = 3 : g === 126 ? f = 1 : f = 2;
        } else if (f === 1) {
          if (Hi(s) < 2)
            break;
          const C = ji(s, 2);
          g = new DataView(C.buffer, C.byteOffset, C.length).getUint16(0), f = 3;
        } else if (f === 2) {
          if (Hi(s) < 8)
            break;
          const C = ji(s, 8), z = new DataView(C.buffer, C.byteOffset, C.length), J = z.getUint32(0);
          if (J > Math.pow(2, 21) - 1) {
            Y.enqueue(mf);
            break;
          }
          g = J * Math.pow(2, 32) + z.getUint32(4), f = 3;
        } else {
          if (Hi(s) < g)
            break;
          const C = ji(s, g);
          Y.enqueue(Ef(M ? C : of.decode(C), i)), f = 0;
        }
        if (g === 0 || g > r) {
          Y.enqueue(mf);
          break;
        }
      }
    }
  });
}
const Hd = 4;
function wt(r) {
  if (r) return g0(r);
}
function g0(r) {
  for (var i in wt.prototype)
    r[i] = wt.prototype[i];
  return r;
}
wt.prototype.on = wt.prototype.addEventListener = function(r, i) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(i), this;
};
wt.prototype.once = function(r, i) {
  function s() {
    this.off(r, s), i.apply(this, arguments);
  }
  return s.fn = i, this.on(r, s), this;
};
wt.prototype.off = wt.prototype.removeListener = wt.prototype.removeAllListeners = wt.prototype.removeEventListener = function(r, i) {
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
wt.prototype.emit = function(r) {
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
wt.prototype.emitReserved = wt.prototype.emit;
wt.prototype.listeners = function(r) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + r] || [];
};
wt.prototype.hasListeners = function(r) {
  return !!this.listeners(r).length;
};
const Qi = typeof Promise == "function" && typeof Promise.resolve == "function" ? (i) => Promise.resolve().then(i) : (i, s) => s(i, 0), Ze = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), p0 = "arraybuffer";
function jd(r, ...i) {
  return i.reduce((s, f) => (r.hasOwnProperty(f) && (s[f] = r[f]), s), {});
}
const b0 = Ze.setTimeout, S0 = Ze.clearTimeout;
function Vi(r, i) {
  i.useNativeTimers ? (r.setTimeoutFn = b0.bind(Ze), r.clearTimeoutFn = S0.bind(Ze)) : (r.setTimeoutFn = Ze.setTimeout.bind(Ze), r.clearTimeoutFn = Ze.clearTimeout.bind(Ze));
}
const _0 = 1.33;
function E0(r) {
  return typeof r == "string" ? T0(r) : Math.ceil((r.byteLength || r.size) * _0);
}
function T0(r) {
  let i = 0, s = 0;
  for (let f = 0, g = r.length; f < g; f++)
    i = r.charCodeAt(f), i < 128 ? s += 1 : i < 2048 ? s += 2 : i < 55296 || i >= 57344 ? s += 3 : (f++, s += 4);
  return s;
}
function Ld() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function A0(r) {
  let i = "";
  for (let s in r)
    r.hasOwnProperty(s) && (i.length && (i += "&"), i += encodeURIComponent(s) + "=" + encodeURIComponent(r[s]));
  return i;
}
function O0(r) {
  let i = {}, s = r.split("&");
  for (let f = 0, g = s.length; f < g; f++) {
    let M = s[f].split("=");
    i[decodeURIComponent(M[0])] = decodeURIComponent(M[1]);
  }
  return i;
}
class z0 extends Error {
  constructor(i, s, f) {
    super(i), this.description = s, this.context = f, this.type = "TransportError";
  }
}
class Tf extends wt {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(i) {
    super(), this.writable = !1, Vi(this, i), this.opts = i, this.query = i.query, this.socket = i.socket, this.supportsBinary = !i.forceBase64;
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
    return super.emitReserved("error", new z0(i, s, f)), this;
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
    const s = Ef(i, this.socket.binaryType);
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
    const s = A0(i);
    return s.length ? "?" + s : "";
  }
}
class N0 extends Tf {
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
    m0(i, this.socket.binaryType).forEach(s), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, d0(i, (s) => {
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
    return this.opts.timestampRequests !== !1 && (s[this.opts.timestampParam] = Ld()), !this.supportsBinary && !s.sid && (s.b64 = 1), this.createUri(i, s);
  }
}
let Yd = !1;
try {
  Yd = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const R0 = Yd;
function M0() {
}
class C0 extends N0 {
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
class cl extends wt {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(i, s, f) {
    super(), this.createRequest = i, Vi(this, f), this._opts = f, this._method = f.method || "GET", this._uri = s, this._data = f.data !== void 0 ? f.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var i;
    const s = jd(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = cl.requestsCount++, cl.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = M0, i)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete cl.requests[this._index], this._xhr = null;
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
cl.requestsCount = 0;
cl.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", zd);
  else if (typeof addEventListener == "function") {
    const r = "onpagehide" in Ze ? "pagehide" : "unload";
    addEventListener(r, zd, !1);
  }
}
function zd() {
  for (let r in cl.requests)
    cl.requests.hasOwnProperty(r) && cl.requests[r].abort();
}
const D0 = (function() {
  const r = Gd({
    xdomain: !1
  });
  return r && r.responseType !== null;
})();
class U0 extends C0 {
  constructor(i) {
    super(i);
    const s = i && i.forceBase64;
    this.supportsBinary = D0 && !s;
  }
  request(i = {}) {
    return Object.assign(i, { xd: this.xd }, this.opts), new cl(Gd, this.uri(), i);
  }
}
function Gd(r) {
  const i = r.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!i || R0))
      return new XMLHttpRequest();
  } catch {
  }
  if (!i)
    try {
      return new Ze[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const wd = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class q0 extends Tf {
  get name() {
    return "websocket";
  }
  doOpen() {
    const i = this.uri(), s = this.opts.protocols, f = wd ? {} : jd(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      _f(f, this.supportsBinary, (M) => {
        try {
          this.doWrite(f, M);
        } catch {
        }
        g && Qi(() => {
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
    return this.opts.timestampRequests && (s[this.opts.timestampParam] = Ld()), this.supportsBinary || (s.b64 = 1), this.createUri(i, s);
  }
}
const hf = Ze.WebSocket || Ze.MozWebSocket;
class x0 extends q0 {
  createSocket(i, s, f) {
    return wd ? new hf(i, s, f) : s ? new hf(i, s) : new hf(i);
  }
  doWrite(i, s) {
    this.ws.send(s);
  }
}
class B0 extends Tf {
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
        const s = v0(Number.MAX_SAFE_INTEGER, this.socket.binaryType), f = i.readable.pipeThrough(s).getReader(), g = y0();
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
        g && Qi(() => {
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
const H0 = {
  websocket: x0,
  webtransport: B0,
  polling: U0
}, j0 = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, L0 = [
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
function yf(r) {
  if (r.length > 8e3)
    throw "URI too long";
  const i = r, s = r.indexOf("["), f = r.indexOf("]");
  s != -1 && f != -1 && (r = r.substring(0, s) + r.substring(s, f).replace(/:/g, ";") + r.substring(f, r.length));
  let g = j0.exec(r || ""), M = {}, q = 14;
  for (; q--; )
    M[L0[q]] = g[q] || "";
  return s != -1 && f != -1 && (M.source = i, M.host = M.host.substring(1, M.host.length - 1).replace(/;/g, ":"), M.authority = M.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), M.ipv6uri = !0), M.pathNames = Y0(M, M.path), M.queryKey = G0(M, M.query), M;
}
function Y0(r, i) {
  const s = /\/{2,9}/g, f = i.replace(s, "/").split("/");
  return (i.slice(0, 1) == "/" || i.length === 0) && f.splice(0, 1), i.slice(-1) == "/" && f.splice(f.length - 1, 1), f;
}
function G0(r, i) {
  const s = {};
  return i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(f, g, M) {
    g && (s[g] = M);
  }), s;
}
const vf = typeof addEventListener == "function" && typeof removeEventListener == "function", Gi = [];
vf && addEventListener("offline", () => {
  Gi.forEach((r) => r());
}, !1);
class cn extends wt {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(i, s) {
    if (super(), this.binaryType = p0, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, i && typeof i == "object" && (s = i, i = null), i) {
      const f = yf(i);
      s.hostname = f.host, s.secure = f.protocol === "https" || f.protocol === "wss", s.port = f.port, f.query && (s.query = f.query);
    } else s.host && (s.hostname = yf(s.host).host);
    Vi(this, s), this.secure = s.secure != null ? s.secure : typeof location < "u" && location.protocol === "https:", s.hostname && !s.port && (s.port = this.secure ? "443" : "80"), this.hostname = s.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = s.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, s.transports.forEach((f) => {
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
    }, s), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = O0(this.opts.query)), vf && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Gi.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    s.EIO = Hd, s.transport = i, this.id && (s.sid = this.id);
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
    const i = this.opts.rememberUpgrade && cn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", cn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (g && (s += E0(g)), f > 0 && s > this._maxPayload)
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
    return i && (this._pingTimeoutTime = 0, Qi(() => {
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
    if (cn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), vf && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const f = Gi.indexOf(this._offlineEventListener);
        f !== -1 && Gi.splice(f, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", i, s), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
cn.protocol = Hd;
class w0 extends cn {
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
    cn.priorWebsocketSuccess = !1;
    const g = () => {
      f || (s.send([{ type: "ping", data: "probe" }]), s.once("packet", (G) => {
        if (!f)
          if (G.type === "pong" && G.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", s), !s)
              return;
            cn.priorWebsocketSuccess = s.name === "websocket", this.transport.pause(() => {
              f || this.readyState !== "closed" && (J(), this.setTransport(s), s.send([{ type: "upgrade" }]), this.emitReserved("upgrade", s), s = null, this.upgrading = !1, this.flush());
            });
          } else {
            const P = new Error("probe error");
            P.transport = s.name, this.emitReserved("upgradeError", P);
          }
      }));
    };
    function M() {
      f || (f = !0, J(), s.close(), s = null);
    }
    const q = (G) => {
      const P = new Error("probe error: " + G);
      P.transport = s.name, M(), this.emitReserved("upgradeError", P);
    };
    function Y() {
      q("transport closed");
    }
    function C() {
      q("socket closed");
    }
    function z(G) {
      s && G.name !== s.name && M();
    }
    const J = () => {
      s.removeListener("open", g), s.removeListener("error", q), s.removeListener("close", Y), this.off("close", C), this.off("upgrading", z);
    };
    s.once("open", g), s.once("error", q), s.once("close", Y), this.once("close", C), this.once("upgrading", z), this._upgrades.indexOf("webtransport") !== -1 && i !== "webtransport" ? this.setTimeoutFn(() => {
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
let X0 = class extends w0 {
  constructor(i, s = {}) {
    const f = typeof i == "object" ? i : s;
    (!f.transports || f.transports && typeof f.transports[0] == "string") && (f.transports = (f.transports || ["polling", "websocket", "webtransport"]).map((g) => H0[g]).filter((g) => !!g)), super(i, f);
  }
};
function Q0(r, i = "", s) {
  let f = r;
  s = s || typeof location < "u" && location, r == null && (r = s.protocol + "//" + s.host), typeof r == "string" && (r.charAt(0) === "/" && (r.charAt(1) === "/" ? r = s.protocol + r : r = s.host + r), /^(https?|wss?):\/\//.test(r) || (typeof s < "u" ? r = s.protocol + "//" + r : r = "https://" + r), f = yf(r)), f.port || (/^(http|ws)$/.test(f.protocol) ? f.port = "80" : /^(http|ws)s$/.test(f.protocol) && (f.port = "443")), f.path = f.path || "/";
  const M = f.host.indexOf(":") !== -1 ? "[" + f.host + "]" : f.host;
  return f.id = f.protocol + "://" + M + ":" + f.port + i, f.href = f.protocol + "://" + M + (s && s.port === f.port ? "" : ":" + f.port), f;
}
const V0 = typeof ArrayBuffer == "function", Z0 = (r) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(r) : r.buffer instanceof ArrayBuffer, Xd = Object.prototype.toString, K0 = typeof Blob == "function" || typeof Blob < "u" && Xd.call(Blob) === "[object BlobConstructor]", J0 = typeof File == "function" || typeof File < "u" && Xd.call(File) === "[object FileConstructor]";
function Af(r) {
  return V0 && (r instanceof ArrayBuffer || Z0(r)) || K0 && r instanceof Blob || J0 && r instanceof File;
}
function wi(r, i) {
  if (!r || typeof r != "object")
    return !1;
  if (Array.isArray(r)) {
    for (let s = 0, f = r.length; s < f; s++)
      if (wi(r[s]))
        return !0;
    return !1;
  }
  if (Af(r))
    return !0;
  if (r.toJSON && typeof r.toJSON == "function" && arguments.length === 1)
    return wi(r.toJSON(), !0);
  for (const s in r)
    if (Object.prototype.hasOwnProperty.call(r, s) && wi(r[s]))
      return !0;
  return !1;
}
function k0(r) {
  const i = [], s = r.data, f = r;
  return f.data = gf(s, i), f.attachments = i.length, { packet: f, buffers: i };
}
function gf(r, i) {
  if (!r)
    return r;
  if (Af(r)) {
    const s = { _placeholder: !0, num: i.length };
    return i.push(r), s;
  } else if (Array.isArray(r)) {
    const s = new Array(r.length);
    for (let f = 0; f < r.length; f++)
      s[f] = gf(r[f], i);
    return s;
  } else if (typeof r == "object" && !(r instanceof Date)) {
    const s = {};
    for (const f in r)
      Object.prototype.hasOwnProperty.call(r, f) && (s[f] = gf(r[f], i));
    return s;
  }
  return r;
}
function W0(r, i) {
  return r.data = pf(r.data, i), delete r.attachments, r;
}
function pf(r, i) {
  if (!r)
    return r;
  if (r && r._placeholder === !0) {
    if (typeof r.num == "number" && r.num >= 0 && r.num < i.length)
      return i[r.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(r))
    for (let s = 0; s < r.length; s++)
      r[s] = pf(r[s], i);
  else if (typeof r == "object")
    for (const s in r)
      Object.prototype.hasOwnProperty.call(r, s) && (r[s] = pf(r[s], i));
  return r;
}
const $0 = [
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
class F0 {
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
    return (i.type === st.EVENT || i.type === st.ACK) && wi(i) ? this.encodeAsBinary({
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
    const s = k0(i), f = this.encodeAsString(s.packet), g = s.buffers;
    return g.unshift(f), g;
  }
}
class Of extends wt {
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
      f || s.type === st.BINARY_ACK ? (s.type = f ? st.EVENT : st.ACK, this.reconstructor = new I0(s), s.attachments === 0 && super.emitReserved("decoded", s)) : super.emitReserved("decoded", s);
    } else if (Af(i) || i.base64)
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
      if (Of.isPayloadValid(f.type, M))
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
        return Nd(s);
      case st.DISCONNECT:
        return s === void 0;
      case st.CONNECT_ERROR:
        return typeof s == "string" || Nd(s);
      case st.EVENT:
      case st.BINARY_EVENT:
        return Array.isArray(s) && (typeof s[0] == "number" || typeof s[0] == "string" && $0.indexOf(s[0]) === -1);
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
class I0 {
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
      const s = W0(this.reconPack, this.buffers);
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
function Nd(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
const P0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Of,
  Encoder: F0,
  get PacketType() {
    return st;
  }
}, Symbol.toStringTag, { value: "Module" }));
function $e(r, i, s) {
  return r.on(i, s), function() {
    r.off(i, s);
  };
}
const tv = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Qd extends wt {
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
      $e(i, "open", this.onopen.bind(this)),
      $e(i, "packet", this.onpacket.bind(this)),
      $e(i, "error", this.onerror.bind(this)),
      $e(i, "close", this.onclose.bind(this))
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
    if (tv.hasOwnProperty(i))
      throw new Error('"' + i.toString() + '" is a reserved event name');
    if (s.unshift(i), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(s), this;
    const q = {
      type: st.EVENT,
      data: s
    };
    if (q.options = {}, q.options.compress = this.flags.compress !== !1, typeof s[s.length - 1] == "function") {
      const J = this.ids++, G = s.pop();
      this._registerAckCallback(J, G), q.id = J;
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
function pa(r) {
  r = r || {}, this.ms = r.min || 100, this.max = r.max || 1e4, this.factor = r.factor || 2, this.jitter = r.jitter > 0 && r.jitter <= 1 ? r.jitter : 0, this.attempts = 0;
}
pa.prototype.duration = function() {
  var r = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var i = Math.random(), s = Math.floor(i * this.jitter * r);
    r = (Math.floor(i * 10) & 1) == 0 ? r - s : r + s;
  }
  return Math.min(r, this.max) | 0;
};
pa.prototype.reset = function() {
  this.attempts = 0;
};
pa.prototype.setMin = function(r) {
  this.ms = r;
};
pa.prototype.setMax = function(r) {
  this.max = r;
};
pa.prototype.setJitter = function(r) {
  this.jitter = r;
};
class bf extends wt {
  constructor(i, s) {
    var f;
    super(), this.nsps = {}, this.subs = [], i && typeof i == "object" && (s = i, i = void 0), s = s || {}, s.path = s.path || "/socket.io", this.opts = s, Vi(this, s), this.reconnection(s.reconnection !== !1), this.reconnectionAttempts(s.reconnectionAttempts || 1 / 0), this.reconnectionDelay(s.reconnectionDelay || 1e3), this.reconnectionDelayMax(s.reconnectionDelayMax || 5e3), this.randomizationFactor((f = s.randomizationFactor) !== null && f !== void 0 ? f : 0.5), this.backoff = new pa({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(s.timeout == null ? 2e4 : s.timeout), this._readyState = "closed", this.uri = i;
    const g = s.parser || P0;
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
    this.engine = new X0(this.uri, this.opts);
    const s = this.engine, f = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const g = $e(s, "open", function() {
      f.onopen(), i && i();
    }), M = (Y) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", Y), i ? i(Y) : this.maybeReconnectOnOpen();
    }, q = $e(s, "error", M);
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
      $e(i, "ping", this.onping.bind(this)),
      $e(i, "data", this.ondata.bind(this)),
      $e(i, "error", this.onerror.bind(this)),
      $e(i, "close", this.onclose.bind(this)),
      // @ts-ignore
      $e(this.decoder, "decoded", this.ondecoded.bind(this))
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
    Qi(() => {
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
    return f ? this._autoConnect && !f.active && f.connect() : (f = new Qd(this, i, s), this.nsps[i] = f), f;
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
const mu = {};
function Xi(r, i) {
  typeof r == "object" && (i = r, r = void 0), i = i || {};
  const s = Q0(r, i.path || "/socket.io"), f = s.source, g = s.id, M = s.path, q = mu[g] && M in mu[g].nsps, Y = i.forceNew || i["force new connection"] || i.multiplex === !1 || q;
  let C;
  return Y ? C = new bf(f, i) : (mu[g] || (mu[g] = new bf(f, i)), C = mu[g]), s.query && !i.query && (i.query = s.queryKey), C.socket(s.path, i);
}
Object.assign(Xi, {
  Manager: bf,
  Socket: Qd,
  io: Xi,
  connect: Xi
});
let Un = null;
function ev(r) {
  return Un ? Un.auth = { token: r } : Un = Xi({
    autoConnect: !1,
    transports: ["websocket"],
    auth: { token: r }
  }), Un;
}
function lv() {
  Un && (Un.disconnect(), Un = null);
}
const nv = ["POPULAR", "MAL_ONLY", "HYBRID"], av = ["STANDARD", "BALANCED_STRICT", "BALANCED_RELAXED"], uv = ["OP_ONLY", "ED_ONLY", "MIXED"], iv = {
  name: "",
  isPrivate: !1,
  roundCount: 10,
  guessSeconds: 20,
  sampleSeconds: 10,
  sourceMode: "HYBRID",
  selectionMode: "STANDARD",
  themeMode: "MIXED"
};
function un(r, i, s, { timeoutMs: f = 1e4 } = {}) {
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
function df(r) {
  return String(r || "").trim().toUpperCase();
}
function Li(r, i) {
  const s = new URLSearchParams(window.location.search);
  r ? s.set("lobby", r) : s.delete("lobby"), i ? s.set("inviteToken", i) : s.delete("inviteToken");
  const f = s.toString();
  window.history.replaceState({}, "", f ? `${window.location.pathname}?${f}` : window.location.pathname);
}
function cv(r) {
  if (!Number.isFinite(r) || r <= 0) return "00:00";
  const i = Math.ceil(r / 1e3), s = Math.floor(i / 60), f = i % 60;
  return `${String(s).padStart(2, "0")}:${String(f).padStart(2, "0")}`;
}
function Rd(r, i) {
  return (i.score || 0) - (r.score || 0);
}
function sv() {
  const r = Cd(), i = U.useRef(null), s = U.useRef(null), f = U.useRef(""), g = U.useRef(null), M = U.useRef(!1), q = U.useRef(null), Y = U.useRef(null), C = U.useRef(null), z = U.useRef(null), J = U.useRef(null), G = U.useRef(0.8), P = U.useRef(null), [Wt, le] = U.useState(!0), [zt, At] = U.useState(""), [ne, vt] = U.useState(""), [Xt, Ut] = U.useState(""), [De, $t] = U.useState(!1), [K, ae] = U.useState(null), [Ue, Dl] = U.useState([]), [re, ue] = U.useState(""), [Zt, Kt] = U.useState(iv), [de, T] = U.useState(""), [x, V] = U.useState(""), [at, dt] = U.useState(""), [h, O] = U.useState(null), [B, j] = U.useState(null), [H, k] = U.useState("WAITING"), [ft, Rt] = U.useState(null), [Nt, Ul] = U.useState("00:00"), [tt, sn] = U.useState(null), [vu, me] = U.useState([]), [Ft, Fe] = U.useState(null), [qn, fn] = U.useState(null), [Ie, ql] = U.useState([]), [fl, xn] = U.useState(""), [ba, Jt] = U.useState(null), [Zi, Pe] = U.useState([]), [gu, Ke] = U.useState(!1), [Ki, qe] = U.useState(!1), [Ji, Sa] = U.useState(null), [rn, Bt] = U.useState(!1), [ie, oe] = U.useState(0.8);
  U.useEffect(() => {
    s.current = h;
  }, [h]), U.useEffect(() => {
    f.current = x;
  }, [x]), U.useEffect(() => {
    G.current = ie;
  }, [ie]);
  const pu = U.useMemo(() => {
    const y = /* @__PURE__ */ new Map();
    for (const D of h?.players || [])
      y.set(D.userId, D.displayName);
    return y;
  }, [h]), ki = U.useCallback((y) => pu.get(y) || `User ${y}`, [pu]), Bn = U.useCallback(() => {
    J.current && (window.clearTimeout(J.current), J.current = null);
  }, []), ce = U.useCallback(() => {
    Bn(), q.current && q.current.pause(), Y.current && Y.current.pause(), z.current = null, qe(!1);
  }, [Bn]), _e = U.useCallback(() => {
    const y = C.current;
    if (y) {
      y.pause();
      try {
        y.currentTime = 0;
      } catch {
      }
    }
  }, []), on = U.useCallback((y) => {
    const D = String(y || "0");
    let X = 2166136261;
    for (let $ = 0; $ < D.length; $ += 1)
      X ^= D.charCodeAt($), X = Math.imul(X, 16777619);
    return (X >>> 0) / 4294967295;
  }, []), tl = U.useCallback(async (y) => {
    if (!y) return null;
    const D = Number(y.duration);
    if (Number.isFinite(D) && D > 0) return D;
    await new Promise(($) => {
      let Mt = !1;
      const et = () => {
        Mt || (Mt = !0, Ee(), $());
      }, Ee = () => {
        y.removeEventListener("loadedmetadata", et), y.removeEventListener("durationchange", et), y.removeEventListener("loadeddata", et), y.removeEventListener("error", et);
      };
      y.addEventListener("loadedmetadata", et), y.addEventListener("durationchange", et), y.addEventListener("loadeddata", et), y.addEventListener("error", et), window.setTimeout(et, 2e3);
    });
    const X = Number(y.duration);
    return Number.isFinite(X) && X > 0 ? X : null;
  }, []), hn = U.useCallback(async (y, D) => {
    const X = P.current;
    if (Number.isFinite(X) && X >= 0) return X;
    const $ = Number.isFinite(D?.sampleStartSec) ? Math.max(0, D.sampleStartSec) : 0;
    if ($ > 0)
      return P.current = $, $;
    const Mt = Number.isFinite(D?.sampleDurationSec) ? Math.max(1, D.sampleDurationSec) : 10, et = await tl(y);
    if (!Number.isFinite(et) || et <= 0)
      return P.current = $, $;
    const Ee = Math.floor(et - Mt);
    if (Ee <= 0)
      return P.current = 0, 0;
    const Bl = `${tt?.roundId || 0}:${D?.animeId || 0}:${Mt}`, Te = on(Bl), Ht = Math.floor(Te * (Ee + 1));
    return P.current = Ht, Ht;
  }, [tt?.roundId, on, tl]), rl = U.useCallback(async () => {
    const y = C.current;
    if (!y) return !1;
    y.volume = Math.max(0, Math.min(1, Number(G.current))), y.muted = !1;
    try {
      return await y.play(), Bt(!1), !0;
    } catch {
      return Bt(!0), !1;
    }
  }, []), bu = U.useCallback(async ({ isAutoplay: y = !1 } = {}) => {
    const D = q.current, X = Y.current, $ = tt?.sample;
    if (H !== "GUESSING" || !D && !X || !$?.audioUrl && !$?.videoUrl) return !1;
    Bn(), ce();
    const Mt = Number.isFinite($.sampleDurationSec) ? Math.max(1, $.sampleDurationSec) : 10, et = Math.max(0, Math.min(1, Number(G.current))), Ee = async (Ht, jn) => {
      if (!Ht) return !1;
      Ht.volume = et, Ht.muted = !1;
      const gt = await hn(Ht, $);
      try {
        Ht.currentTime = gt;
      } catch {
      }
      try {
        return await Ht.play(), z.current = Ht, Sa(jn), Ke(!1), qe(!0), J.current = window.setTimeout(() => {
          const hl = z.current;
          hl && (hl.pause(), qe(!1), z.current = null);
        }, Mt * 1e3), !0;
      } catch {
        return !1;
      }
    };
    return ($?.audioUrl ? await Ee(D, "audio") : !1) || ($?.videoUrl ? await Ee(X, "video") : !1) ? !0 : (y && Ke(!0), !1);
  }, [Bn, H, hn, tt, ce]), ol = U.useCallback(() => {
    ce(), _e(), j(null), k("WAITING"), Rt(null), sn(null), me([]), Fe(null), fn(null), ql([]), xn(""), Jt(null), Pe([]), Ke(!1), Sa(null), Bt(!1);
  }, [ce, _e]), Hn = U.useCallback((y) => {
    const D = y || {}, X = D.phase || "WAITING";
    if (k(X), sn(D.round || null), ql(Array.isArray(D.readyUserIds) ? D.readyUserIds : []), Rt(D.endsAt || D.solution?.endsAt || null), X === "ANSWERS_REVEAL") {
      me(Array.isArray(D.answers) ? D.answers : []), Fe(null);
      return;
    }
    if (X === "SOLUTION_REVEAL") {
      me(Array.isArray(D.answers) ? D.answers : []), Fe(D.solution || null);
      return;
    }
    X === "WAITING" && (me([]), Fe(null));
  }, []), xe = U.useCallback(async (y) => {
    const D = i.current;
    if (!(!D?.connected || !y))
      try {
        const X = await un(D, "round:sync", { lobbyCode: y });
        Hn(X?.state || {});
      } catch (X) {
        vt(X.message);
      }
  }, [Hn]), dn = U.useCallback(async (y = "") => {
    const D = String(y || "").trim(), X = new URLSearchParams();
    D && X.set("q", D);
    const $ = await ga(`/game/lobbies${X.toString() ? `?${X}` : ""}`);
    Dl(Array.isArray($.lobbies) ? $.lobbies : []);
  }, []), mn = U.useCallback(async (y, D, X) => {
    const $ = i.current;
    if (!$) return;
    const Mt = {
      lobbyCode: y,
      ...D ? { inviteToken: D } : {},
      ...X ? { displayName: X } : {}
    };
    if (!$.connected) {
      g.current = Mt, $.connect();
      return;
    }
    await un($, "lobby:join", Mt), await xe(y);
  }, [xe]), yn = U.useCallback(async (y, D = "") => {
    const X = df(y);
    if (!X) return vt("Lobby code is required");
    At("join"), vt(""), Ut("");
    try {
      const $ = {};
      at.trim() && ($.displayName = at.trim()), D && ($.inviteToken = D);
      const Mt = await ga(`/game/lobbies/${X}/join`, {
        method: "POST",
        body: JSON.stringify($)
      });
      O(Mt.lobby), V(D || ""), ol(), Li(X, D || ""), await mn(X, D || "", at.trim()), Ut(`Joined lobby ${X}`);
    } catch ($) {
      vt($.message);
    } finally {
      At("");
    }
  }, [ol, at, mn]), Su = U.useCallback(async () => {
    At("create"), vt(""), Ut("");
    try {
      const y = await ga("/game/lobbies", {
        method: "POST",
        body: JSON.stringify(Zt)
      });
      O(y.lobby), ol(), Li(y.lobby.code, ""), await mn(y.lobby.code, "", at.trim()), Ut(`Created lobby ${y.lobby.code}`);
    } catch (y) {
      vt(y.message);
    } finally {
      At("");
    }
  }, [ol, Zt, at, mn]), _a = U.useCallback(async () => {
    if (h?.code) {
      At("leave"), vt("");
      try {
        i.current?.connected && await un(i.current, "lobby:leave", { lobbyCode: h.code });
      } catch (y) {
        vt(y.message);
      } finally {
        O(null), V(""), Li("", ""), ol(), At(""), dn(re).catch(() => {
        });
      }
    }
  }, [ol, dn, h, re]), Ea = U.useCallback(async () => {
    if (!(!h?.code || !i.current)) {
      At("start"), vt("");
      try {
        await un(i.current, "game:start", { lobbyCode: h.code }, { timeoutMs: 12e4 });
      } catch (y) {
        vt(y.message);
      } finally {
        At("");
      }
    }
  }, [h]), _u = U.useCallback(async () => {
    if (!(!h?.code || !tt?.roundId || !i.current)) {
      At("guess"), vt("");
      try {
        await un(i.current, "round:submit_guess", {
          lobbyCode: h.code,
          roundId: tt.roundId,
          guessText: fl.trim(),
          guessAnimeId: Number.isInteger(ba) ? ba : null
        }), Ut("Guess saved");
      } catch (y) {
        vt(y.message);
      } finally {
        At("");
      }
    }
  }, [ba, fl, h, tt]), Eu = U.useCallback(async () => {
    if (!(!h?.code || !i.current || !K)) {
      At("ready"), vt("");
      try {
        const y = Ie.includes(K.id);
        await un(i.current, "round:set_ready", { lobbyCode: h.code, ready: !y });
      } catch (y) {
        vt(y.message);
      } finally {
        At("");
      }
    }
  }, [h, Ie, K]), el = U.useCallback(async () => {
    if (h?.code) {
      At("invite"), vt(""), Ut("");
      try {
        const y = await ga(`/game/lobbies/${h.code}/invite`);
        y.inviteToken && (V(y.inviteToken), Li(h.code, y.inviteToken)), navigator.clipboard?.writeText ? (await navigator.clipboard.writeText(y.inviteUrl), Ut("Invite link copied")) : Ut(y.inviteUrl);
      } catch (y) {
        vt(y.message);
      } finally {
        At("");
      }
    }
  }, [h]);
  U.useEffect(() => {
    if (!r) return Ed();
    const y = ev(r);
    i.current = y;
    const D = async () => {
      $t(!0), vt("");
      try {
        g.current ? (await un(y, "lobby:join", g.current), await xe(g.current.lobbyCode), g.current = null) : s.current?.code && (await un(y, "lobby:join", {
          lobbyCode: s.current.code,
          ...f.current ? { inviteToken: f.current } : {}
        }), await xe(s.current.code));
      } catch (gt) {
        vt(gt.message);
      }
    }, X = () => $t(!1), $ = (gt) => vt(gt?.message || "Realtime error"), Mt = ({ lobby: gt }) => gt && O(gt), et = ({ sessionId: gt, config: hl }) => {
      j({ sessionId: gt, ...hl || {} }), fn(null), k("PENDING"), s.current?.code && xe(s.current.code).catch(() => {
      });
    }, Ee = (gt) => {
      ce(), _e(), k("GUESSING"), Rt(gt?.endsAt || null), sn(gt || null), me([]), Fe(null), fn(null), ql([]), xn(""), Jt(null), Pe([]), Ke(!1), Sa(null), Bt(!1), P.current = null;
    }, Bl = (gt) => {
      k("ANSWERS_REVEAL"), Rt(gt?.endsAt || null), me(Array.isArray(gt?.answers) ? gt.answers : []);
    }, Te = (gt) => {
      ce(), k("SOLUTION_REVEAL"), Rt(gt?.endsAt || null), Fe(gt || null), Bt(!1);
    }, Ht = (gt) => {
      ce(), _e(), k("FINISHED"), Rt(null), fn(gt || null);
    }, jn = (gt) => {
      ql(Array.isArray(gt?.readyUserIds) ? gt.readyUserIds : []);
    };
    return y.on("connect", D), y.on("disconnect", X), y.on("error", $), y.on("lobby:state", Mt), y.on("game:started", et), y.on("round:started", Ee), y.on("round:answers_reveal", Bl), y.on("round:solution", Te), y.on("game:finished", Ht), y.on("round:ready_state", jn), y.connect(), () => {
      y.off("connect", D), y.off("disconnect", X), y.off("error", $), y.off("lobby:state", Mt), y.off("game:started", et), y.off("round:started", Ee), y.off("round:answers_reveal", Bl), y.off("round:solution", Te), y.off("game:finished", Ht), y.off("round:ready_state", jn), lv();
    };
  }, [xe, ce, _e, r]), U.useEffect(() => {
    if (!r) return;
    let y = !0;
    return (async () => {
      try {
        const D = await ga("/auth/me");
        if (!y) return;
        ae(D), await dn("");
      } catch {
        Ed();
        return;
      } finally {
        y && le(!1);
      }
    })(), () => {
      y = !1;
    };
  }, [dn, r]), U.useEffect(() => {
    if (Wt || !K || M.current) return;
    M.current = !0;
    const y = new URLSearchParams(window.location.search), D = df(y.get("lobby")), X = y.get("inviteToken") || "";
    D && (T(D), V(X), yn(D, X).catch(() => {
    }));
  }, [yn, Wt, K]), U.useEffect(() => {
    if (!ft) return Ul("00:00");
    const y = () => Ul(cv(new Date(ft).getTime() - Date.now()));
    y();
    const D = window.setInterval(y, 250);
    return () => window.clearInterval(D);
  }, [ft]), U.useEffect(() => {
    if (H !== "GUESSING") return Pe([]);
    const y = fl.trim();
    if (y.length < 2) return Pe([]);
    const D = window.setTimeout(async () => {
      try {
        const X = await ga("/game/search", {
          method: "POST",
          body: JSON.stringify({ query: y, limit: 8 })
        });
        Pe(Array.isArray(X.results) ? X.results : []);
      } catch {
        Pe([]);
      }
    }, 300);
    return () => window.clearTimeout(D);
  }, [fl, H]), U.useEffect(() => {
    if (!!!(tt?.sample?.audioUrl || tt?.sample?.videoUrl)) {
      Ke(!1), ce();
      return;
    }
    if (H !== "GUESSING") {
      (H === "SOLUTION_REVEAL" || H === "WAITING" || H === "FINISHED" || H === "PENDING") && (Ke(!1), ce());
      return;
    }
    let D = !1;
    const X = window.setTimeout(() => {
      D || bu({ isAutoplay: !0 }).catch(() => {
      });
    }, 0);
    return () => {
      D = !0, window.clearTimeout(X);
    };
  }, [H, bu, tt?.roundId, tt?.sample?.audioUrl, tt?.sample?.videoUrl, ce]), U.useEffect(() => {
    P.current = null;
  }, [tt?.roundId]), U.useEffect(() => {
    if (H !== "SOLUTION_REVEAL" || !Ft?.video) {
      Bt(!1), _e();
      return;
    }
    let y = !1;
    const D = window.setTimeout(() => {
      y || rl().catch(() => {
      });
    }, 0);
    return () => {
      y = !0, window.clearTimeout(D), _e();
    };
  }, [H, rl, Ft?.video, _e]), U.useEffect(() => {
    const y = Math.max(0, Math.min(1, Number(ie)));
    q.current && (q.current.volume = y), Y.current && (Y.current.volume = y), C.current && (C.current.volume = y);
  }, [ie, tt?.roundId, Ft?.video]);
  const Qt = U.useMemo(() => !!(h && K && h.host?.id === K.id), [h, K]), se = U.useMemo(() => !!(K && Ie.includes(K.id)), [Ie, K]), ll = U.useMemo(() => !!(tt?.sample?.audioUrl || tt?.sample?.videoUrl), [tt]), Ta = U.useMemo(() => !!(tt && ll && (H === "GUESSING" || H === "ANSWERS_REVEAL")), [ll, H, tt]), Aa = U.useMemo(() => {
    const y = Number.parseInt(tt?.sample?.sampleDurationSec, 10);
    return !Number.isFinite(y) || y <= 0 ? "Sample ready" : `${y}s preview`;
  }, [tt]), Wi = U.useMemo(() => `${Math.round(ie * 100)}%`, [ie]), Tu = U.useCallback((y) => {
    const D = Math.max(0, Math.min(1, Number.parseFloat(y.target.value)));
    oe(Number.isFinite(D) ? D : 0.8);
  }, []), xl = U.useMemo(() => H === "FINISHED" ? (qn?.finalScores || []).slice().sort(Rd) : H === "SOLUTION_REVEAL" ? (Ft?.scores || []).slice().sort(Rd) : [], [qn, H, Ft]);
  return Wt ? /* @__PURE__ */ R.jsx("section", { className: "gmq-shell", children: "Loading game..." }) : /* @__PURE__ */ R.jsxs("section", { className: "gmq-shell", children: [
    /* @__PURE__ */ R.jsxs("header", { className: "gmq-header", children: [
      /* @__PURE__ */ R.jsxs("div", { children: [
        /* @__PURE__ */ R.jsx("h1", { children: "Anime Music Quiz" }),
        /* @__PURE__ */ R.jsxs("p", { className: "gmq-muted", children: [
          "Socket: ",
          De ? "Connected" : "Disconnected",
          h ? ` | Lobby ${h.code}` : "",
          B?.sessionId ? ` | Session ${B.sessionId}` : ""
        ] })
      ] }),
      h ? /* @__PURE__ */ R.jsxs("div", { className: "gmq-actions", children: [
        /* @__PURE__ */ R.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: el, disabled: zt === "invite", children: "Copy Invite" }),
        /* @__PURE__ */ R.jsx("button", { type: "button", className: "gmq-btn gmq-btn-danger", onClick: _a, disabled: zt === "leave", children: "Leave" })
      ] }) : null
    ] }),
    ne ? /* @__PURE__ */ R.jsx("div", { className: "gmq-alert gmq-alert-error", children: ne }) : null,
    Xt ? /* @__PURE__ */ R.jsx("div", { className: "gmq-alert gmq-alert-info", children: Xt }) : null,
    h ? /* @__PURE__ */ R.jsxs("div", { className: "gmq-grid", children: [
      /* @__PURE__ */ R.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ R.jsxs("h2", { children: [
          "Lobby ",
          h.code
        ] }),
        /* @__PURE__ */ R.jsxs("p", { className: "gmq-muted", children: [
          h.name || "Untitled",
          " | ",
          h.playerCount,
          "/",
          h.maxPlayers,
          " players"
        ] }),
        /* @__PURE__ */ R.jsx("ul", { className: "gmq-player-list", children: (h.players || []).map((y) => /* @__PURE__ */ R.jsxs("li", { children: [
          /* @__PURE__ */ R.jsxs("span", { children: [
            y.displayName,
            y.userId === h.host?.id ? " (Host)" : "",
            y.isConnected ? "" : " (offline)"
          ] }),
          H === "GUESSING" ? /* @__PURE__ */ R.jsx("strong", { children: Ie.includes(y.userId) ? "Ready" : "Thinking" }) : null
        ] }, y.userId)) }),
        h.status === "WAITING" ? Qt ? /* @__PURE__ */ R.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: Ea, disabled: zt === "start", children: "Start Game" }) : /* @__PURE__ */ R.jsx("p", { className: "gmq-muted", children: "Waiting for host to start." }) : null
      ] }),
      /* @__PURE__ */ R.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ R.jsx("h2", { children: "Round" }),
        /* @__PURE__ */ R.jsxs("p", { className: "gmq-round-phase", children: [
          H,
          " | ",
          Nt
        ] }),
        Ta ? /* @__PURE__ */ R.jsxs("div", { className: "gmq-sample-player", children: [
          tt?.sample?.audioUrl ? /* @__PURE__ */ R.jsx(
            "audio",
            {
              ref: q,
              src: tt.sample.audioUrl,
              preload: "auto",
              onPlay: () => qe(!0),
              onPause: () => qe(!1),
              onEnded: () => qe(!1)
            },
            `audio-${tt.roundId}`
          ) : null,
          tt?.sample?.videoUrl ? /* @__PURE__ */ R.jsx(
            "video",
            {
              ref: Y,
              src: tt.sample.videoUrl,
              preload: "auto",
              playsInline: !0,
              onPlay: () => qe(!0),
              onPause: () => qe(!1),
              onEnded: () => qe(!1)
            },
            `video-${tt.roundId}`
          ) : null,
          /* @__PURE__ */ R.jsxs("label", { className: "gmq-volume-row", children: [
            /* @__PURE__ */ R.jsxs("span", { children: [
              "Volume ",
              Wi
            ] }),
            /* @__PURE__ */ R.jsx(
              "input",
              {
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: ie,
                onChange: Tu
              }
            )
          ] }),
          gu ? /* @__PURE__ */ R.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }) : Ji === "video" && !tt?.sample?.audioUrl ? /* @__PURE__ */ R.jsxs("p", { className: "gmq-muted", children: [
            "Using video source audio. ",
            Aa
          ] }) : Ki ? /* @__PURE__ */ R.jsxs("p", { className: "gmq-muted", children: [
            "Sample is playing. ",
            Aa
          ] }) : /* @__PURE__ */ R.jsx("p", { className: "gmq-muted", children: Aa })
        ] }) : null,
        H === "GUESSING" && tt ? /* @__PURE__ */ R.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ R.jsxs("p", { children: [
            "Round ",
            tt.index,
            "/",
            tt.totalRounds
          ] }),
          ll ? null : /* @__PURE__ */ R.jsx("p", { className: "gmq-muted", children: "Sample audio is unavailable for this round." }),
          /* @__PURE__ */ R.jsx("input", { value: fl, onChange: (y) => {
            xn(y.target.value), Jt(null);
          }, placeholder: "Type anime name" }),
          /* @__PURE__ */ R.jsx("ul", { className: "gmq-search-results", children: Zi.map((y) => /* @__PURE__ */ R.jsx("li", { children: /* @__PURE__ */ R.jsx("button", { type: "button", onClick: () => {
            xn(y.title || ""), Jt(Number.isInteger(y.id) ? y.id : null), Pe([]);
          }, children: y.title }) }, `${y.id}-${y.title}`)) }),
          /* @__PURE__ */ R.jsxs("div", { className: "gmq-actions", children: [
            /* @__PURE__ */ R.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: _u, disabled: zt === "guess", children: "Submit Guess" }),
            /* @__PURE__ */ R.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: Eu, disabled: zt === "ready", children: se ? "Unskip" : "Skip / Ready" })
          ] }),
          /* @__PURE__ */ R.jsxs("p", { className: "gmq-muted", children: [
            Ie.length,
            " ready"
          ] })
        ] }) : null,
        H === "ANSWERS_REVEAL" ? /* @__PURE__ */ R.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ R.jsx("h3", { children: "Answers" }),
          /* @__PURE__ */ R.jsx("ul", { className: "gmq-answer-list", children: vu.map((y) => /* @__PURE__ */ R.jsxs("li", { children: [
            /* @__PURE__ */ R.jsx("span", { children: ki(y.userId) }),
            /* @__PURE__ */ R.jsx("span", { children: y.guessText || "(blank)" }),
            /* @__PURE__ */ R.jsx("strong", { children: y.isCorrect ? "Correct" : "Wrong" })
          ] }, `${y.userId}-${y.guessText || "blank"}`)) })
        ] }) : null,
        H === "SOLUTION_REVEAL" && Ft ? /* @__PURE__ */ R.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ R.jsx("h3", { children: "Solution" }),
          /* @__PURE__ */ R.jsxs("p", { children: [
            Ft.correctAnime?.animeTitle,
            " (",
            Ft.correctAnime?.themeType,
            ")"
          ] }),
          /* @__PURE__ */ R.jsx("p", { className: "gmq-muted", children: Ft.correctAnime?.themeTitle || "" }),
          Ft.video ? /* @__PURE__ */ R.jsxs("div", { className: "gmq-solution-video-wrap", children: [
            /* @__PURE__ */ R.jsx(
              "video",
              {
                ref: C,
                className: "gmq-solution-video",
                src: Ft.video,
                preload: "auto",
                controls: !0,
                playsInline: !0
              },
              `solution-${tt?.roundId || Ft.correctAnime?.animeId || "video"}`
            ),
            rn ? /* @__PURE__ */ R.jsxs("div", { className: "gmq-stack", children: [
              /* @__PURE__ */ R.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
              /* @__PURE__ */ R.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => rl().catch(() => {
              }), children: "Play solution video" })
            ] }) : null,
            /* @__PURE__ */ R.jsx("a", { href: Ft.video, target: "_blank", rel: "noreferrer", children: "Open video source" })
          ] }) : /* @__PURE__ */ R.jsx("p", { className: "gmq-muted", children: "Solution video is unavailable for this round." })
        ] }) : null,
        H === "FINISHED" && qn ? /* @__PURE__ */ R.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ R.jsx("h3", { children: "Final Result" }),
          /* @__PURE__ */ R.jsxs("p", { children: [
            "Winner: ",
            qn.winner?.displayName || "Tie"
          ] })
        ] }) : null,
        xl.length ? /* @__PURE__ */ R.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ R.jsx("h3", { children: "Scoreboard" }),
          /* @__PURE__ */ R.jsx("ul", { className: "gmq-score-list", children: xl.map((y) => /* @__PURE__ */ R.jsxs("li", { className: "gmq-score-row", children: [
            /* @__PURE__ */ R.jsx("span", { children: y.displayName }),
            /* @__PURE__ */ R.jsx("strong", { children: y.score })
          ] }, y.userId)) })
        ] }) : null
      ] })
    ] }) : /* @__PURE__ */ R.jsxs("div", { className: "gmq-grid", children: [
      /* @__PURE__ */ R.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ R.jsx("h2", { children: "Create Lobby" }),
        /* @__PURE__ */ R.jsx("label", { children: "Name" }),
        /* @__PURE__ */ R.jsx("input", { value: Zt.name, onChange: (y) => Kt((D) => ({ ...D, name: y.target.value })), placeholder: "Optional lobby name" }),
        /* @__PURE__ */ R.jsxs("label", { className: "gmq-checkbox", children: [
          /* @__PURE__ */ R.jsx("input", { type: "checkbox", checked: Zt.isPrivate, onChange: (y) => Kt((D) => ({ ...D, isPrivate: y.target.checked })) }),
          " Private lobby"
        ] }),
        /* @__PURE__ */ R.jsxs("div", { className: "gmq-inline", children: [
          /* @__PURE__ */ R.jsx("input", { type: "number", min: "1", max: "50", value: Zt.roundCount, onChange: (y) => Kt((D) => ({ ...D, roundCount: Number(y.target.value || 10) })) }),
          /* @__PURE__ */ R.jsx("input", { type: "number", min: "5", max: "120", value: Zt.guessSeconds, onChange: (y) => Kt((D) => ({ ...D, guessSeconds: Number(y.target.value || 20) })) }),
          /* @__PURE__ */ R.jsx("input", { type: "number", min: "3", max: "60", value: Zt.sampleSeconds, onChange: (y) => Kt((D) => ({ ...D, sampleSeconds: Number(y.target.value || 10) })) })
        ] }),
        /* @__PURE__ */ R.jsxs("div", { className: "gmq-inline", children: [
          /* @__PURE__ */ R.jsx("select", { value: Zt.sourceMode, onChange: (y) => Kt((D) => ({ ...D, sourceMode: y.target.value })), children: nv.map((y) => /* @__PURE__ */ R.jsx("option", { value: y, children: y }, y)) }),
          /* @__PURE__ */ R.jsx("select", { value: Zt.selectionMode, onChange: (y) => Kt((D) => ({ ...D, selectionMode: y.target.value })), children: av.map((y) => /* @__PURE__ */ R.jsx("option", { value: y, children: y }, y)) }),
          /* @__PURE__ */ R.jsx("select", { value: Zt.themeMode, onChange: (y) => Kt((D) => ({ ...D, themeMode: y.target.value })), children: uv.map((y) => /* @__PURE__ */ R.jsx("option", { value: y, children: y }, y)) })
        ] }),
        /* @__PURE__ */ R.jsx("label", { children: "Display Name" }),
        /* @__PURE__ */ R.jsx("input", { value: at, onChange: (y) => dt(y.target.value), placeholder: K?.nickname || K?.username || "Player" }),
        /* @__PURE__ */ R.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: Su, disabled: zt === "create", children: "Create Lobby" })
      ] }),
      /* @__PURE__ */ R.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ R.jsx("h2", { children: "Join Lobby" }),
        /* @__PURE__ */ R.jsx("label", { children: "Lobby Code" }),
        /* @__PURE__ */ R.jsx("input", { value: de, onChange: (y) => T(df(y.target.value)), placeholder: "ABC123" }),
        /* @__PURE__ */ R.jsx("label", { children: "Invite Token (private lobby)" }),
        /* @__PURE__ */ R.jsx("input", { value: x, onChange: (y) => V(y.target.value.trim()), placeholder: "Paste invite token" }),
        /* @__PURE__ */ R.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: () => yn(de, x), disabled: zt === "join", children: "Join Lobby" })
      ] }),
      /* @__PURE__ */ R.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ R.jsx("h2", { children: "Joinable Lobbies" }),
        /* @__PURE__ */ R.jsxs("div", { className: "gmq-inline", children: [
          /* @__PURE__ */ R.jsx("input", { value: re, onChange: (y) => ue(y.target.value), placeholder: "Search by code/name" }),
          /* @__PURE__ */ R.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => dn(re), children: "Refresh" })
        ] }),
        /* @__PURE__ */ R.jsx("ul", { className: "gmq-lobby-list", children: Ue.map((y) => /* @__PURE__ */ R.jsxs("li", { className: "gmq-lobby-item", children: [
          /* @__PURE__ */ R.jsxs("div", { children: [
            /* @__PURE__ */ R.jsx("div", { className: "gmq-lobby-title", children: y.name || y.code }),
            /* @__PURE__ */ R.jsxs("div", { className: "gmq-muted", children: [
              y.code,
              " | ",
              y.playerCount,
              "/",
              y.maxPlayers
            ] })
          ] }),
          /* @__PURE__ */ R.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => yn(y.code, ""), children: "Join" })
        ] }, y.code)) })
      ] })
    ] })
  ] });
}
const Md = document.getElementById("game-root");
Md && c0.createRoot(Md).render(/* @__PURE__ */ R.jsx(sv, {}));
