var Ao = { exports: {} }, Di = {};
var sm;
function dg() {
  if (sm) return Di;
  sm = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(r, S, z) {
    var w = null;
    if (z !== void 0 && (w = "" + z), S.key !== void 0 && (w = "" + S.key), "key" in S) {
      z = {};
      for (var k in S)
        k !== "key" && (z[k] = S[k]);
    } else z = S;
    return S = z.ref, {
      $$typeof: o,
      type: r,
      key: w,
      ref: S !== void 0 ? S : null,
      props: z
    };
  }
  return Di.Fragment = i, Di.jsx = s, Di.jsxs = s, Di;
}
var cm;
function hg() {
  return cm || (cm = 1, Ao.exports = dg()), Ao.exports;
}
var h = hg(), To = { exports: {} }, ee = {};
var rm;
function mg() {
  if (rm) return ee;
  rm = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), S = /* @__PURE__ */ Symbol.for("react.profiler"), z = /* @__PURE__ */ Symbol.for("react.consumer"), w = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), U = /* @__PURE__ */ Symbol.for("react.suspense"), q = /* @__PURE__ */ Symbol.for("react.memo"), $ = /* @__PURE__ */ Symbol.for("react.lazy"), G = /* @__PURE__ */ Symbol.for("react.activity"), ie = Symbol.iterator;
  function Ke(y) {
    return y === null || typeof y != "object" ? null : (y = ie && y[ie] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var Je = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, it = Object.assign, qt = {};
  function st(y, N, H) {
    this.props = y, this.context = N, this.refs = qt, this.updater = H || Je;
  }
  st.prototype.isReactComponent = {}, st.prototype.setState = function(y, N) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, N, "setState");
  }, st.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function il() {
  }
  il.prototype = st.prototype;
  function Me(y, N, H) {
    this.props = y, this.context = N, this.refs = qt, this.updater = H || Je;
  }
  var ft = Me.prototype = new il();
  ft.constructor = Me, it(ft, st.prototype), ft.isPureReactComponent = !0;
  var qe = Array.isArray;
  function We() {
  }
  var le = { H: null, A: null, T: null, S: null }, je = Object.prototype.hasOwnProperty;
  function xt(y, N, H) {
    var D = H.ref;
    return {
      $$typeof: o,
      type: y,
      key: N,
      ref: D !== void 0 ? D : null,
      props: H
    };
  }
  function sl(y, N) {
    return xt(y.type, N, y.props);
  }
  function ct(y) {
    return typeof y == "object" && y !== null && y.$$typeof === o;
  }
  function Fe(y) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(H) {
      return N[H];
    });
  }
  var Vt = /\/+/g;
  function zt(y, N) {
    return typeof y == "object" && y !== null && y.key != null ? Fe("" + y.key) : N.toString(36);
  }
  function He(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(We, We) : (y.status = "pending", y.then(
          function(N) {
            y.status === "pending" && (y.status = "fulfilled", y.value = N);
          },
          function(N) {
            y.status === "pending" && (y.status = "rejected", y.reason = N);
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
  function x(y, N, H, D, I) {
    var K = typeof y;
    (K === "undefined" || K === "boolean") && (y = null);
    var me = !1;
    if (y === null) me = !0;
    else
      switch (K) {
        case "bigint":
        case "string":
        case "number":
          me = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case o:
            case i:
              me = !0;
              break;
            case $:
              return me = y._init, x(
                me(y._payload),
                N,
                H,
                D,
                I
              );
          }
      }
    if (me)
      return I = I(y), me = D === "" ? "." + zt(y, 0) : D, qe(I) ? (H = "", me != null && (H = me.replace(Vt, "$&/") + "/"), x(I, N, H, "", function(oa) {
        return oa;
      })) : I != null && (ct(I) && (I = sl(
        I,
        H + (I.key == null || y && y.key === I.key ? "" : ("" + I.key).replace(
          Vt,
          "$&/"
        ) + "/") + me
      )), N.push(I)), 1;
    me = 0;
    var rt = D === "" ? "." : D + ":";
    if (qe(y))
      for (var F = 0; F < y.length; F++)
        D = y[F], K = rt + zt(D, F), me += x(
          D,
          N,
          H,
          K,
          I
        );
    else if (F = Ke(y), typeof F == "function")
      for (y = F.call(y), F = 0; !(D = y.next()).done; )
        D = D.value, K = rt + zt(D, F++), me += x(
          D,
          N,
          H,
          K,
          I
        );
    else if (K === "object") {
      if (typeof y.then == "function")
        return x(
          He(y),
          N,
          H,
          D,
          I
        );
      throw N = String(y), Error(
        "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return me;
  }
  function L(y, N, H) {
    if (y == null) return y;
    var D = [], I = 0;
    return x(y, D, "", "", function(K) {
      return N.call(H, K, I++);
    }), D;
  }
  function Z(y) {
    if (y._status === -1) {
      var N = y._result;
      N = N(), N.then(
        function(H) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = H);
        },
        function(H) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = H);
        }
      ), y._status === -1 && (y._status = 0, y._result = N);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var ge = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var N = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(N)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, Se = {
    map: L,
    forEach: function(y, N, H) {
      L(
        y,
        function() {
          N.apply(this, arguments);
        },
        H
      );
    },
    count: function(y) {
      var N = 0;
      return L(y, function() {
        N++;
      }), N;
    },
    toArray: function(y) {
      return L(y, function(N) {
        return N;
      }) || [];
    },
    only: function(y) {
      if (!ct(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return ee.Activity = G, ee.Children = Se, ee.Component = st, ee.Fragment = s, ee.Profiler = S, ee.PureComponent = Me, ee.StrictMode = r, ee.Suspense = U, ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = le, ee.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return le.H.useMemoCache(y);
    }
  }, ee.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, ee.cacheSignal = function() {
    return null;
  }, ee.cloneElement = function(y, N, H) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var D = it({}, y.props), I = y.key;
    if (N != null)
      for (K in N.key !== void 0 && (I = "" + N.key), N)
        !je.call(N, K) || K === "key" || K === "__self" || K === "__source" || K === "ref" && N.ref === void 0 || (D[K] = N[K]);
    var K = arguments.length - 2;
    if (K === 1) D.children = H;
    else if (1 < K) {
      for (var me = Array(K), rt = 0; rt < K; rt++)
        me[rt] = arguments[rt + 2];
      D.children = me;
    }
    return xt(y.type, I, D);
  }, ee.createContext = function(y) {
    return y = {
      $$typeof: w,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: z,
      _context: y
    }, y;
  }, ee.createElement = function(y, N, H) {
    var D, I = {}, K = null;
    if (N != null)
      for (D in N.key !== void 0 && (K = "" + N.key), N)
        je.call(N, D) && D !== "key" && D !== "__self" && D !== "__source" && (I[D] = N[D]);
    var me = arguments.length - 2;
    if (me === 1) I.children = H;
    else if (1 < me) {
      for (var rt = Array(me), F = 0; F < me; F++)
        rt[F] = arguments[F + 2];
      I.children = rt;
    }
    if (y && y.defaultProps)
      for (D in me = y.defaultProps, me)
        I[D] === void 0 && (I[D] = me[D]);
    return xt(y, K, I);
  }, ee.createRef = function() {
    return { current: null };
  }, ee.forwardRef = function(y) {
    return { $$typeof: k, render: y };
  }, ee.isValidElement = ct, ee.lazy = function(y) {
    return {
      $$typeof: $,
      _payload: { _status: -1, _result: y },
      _init: Z
    };
  }, ee.memo = function(y, N) {
    return {
      $$typeof: q,
      type: y,
      compare: N === void 0 ? null : N
    };
  }, ee.startTransition = function(y) {
    var N = le.T, H = {};
    le.T = H;
    try {
      var D = y(), I = le.S;
      I !== null && I(H, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(We, ge);
    } catch (K) {
      ge(K);
    } finally {
      N !== null && H.types !== null && (N.types = H.types), le.T = N;
    }
  }, ee.unstable_useCacheRefresh = function() {
    return le.H.useCacheRefresh();
  }, ee.use = function(y) {
    return le.H.use(y);
  }, ee.useActionState = function(y, N, H) {
    return le.H.useActionState(y, N, H);
  }, ee.useCallback = function(y, N) {
    return le.H.useCallback(y, N);
  }, ee.useContext = function(y) {
    return le.H.useContext(y);
  }, ee.useDebugValue = function() {
  }, ee.useDeferredValue = function(y, N) {
    return le.H.useDeferredValue(y, N);
  }, ee.useEffect = function(y, N) {
    return le.H.useEffect(y, N);
  }, ee.useEffectEvent = function(y) {
    return le.H.useEffectEvent(y);
  }, ee.useId = function() {
    return le.H.useId();
  }, ee.useImperativeHandle = function(y, N, H) {
    return le.H.useImperativeHandle(y, N, H);
  }, ee.useInsertionEffect = function(y, N) {
    return le.H.useInsertionEffect(y, N);
  }, ee.useLayoutEffect = function(y, N) {
    return le.H.useLayoutEffect(y, N);
  }, ee.useMemo = function(y, N) {
    return le.H.useMemo(y, N);
  }, ee.useOptimistic = function(y, N) {
    return le.H.useOptimistic(y, N);
  }, ee.useReducer = function(y, N, H) {
    return le.H.useReducer(y, N, H);
  }, ee.useRef = function(y) {
    return le.H.useRef(y);
  }, ee.useState = function(y) {
    return le.H.useState(y);
  }, ee.useSyncExternalStore = function(y, N, H) {
    return le.H.useSyncExternalStore(
      y,
      N,
      H
    );
  }, ee.useTransition = function() {
    return le.H.useTransition();
  }, ee.version = "19.2.4", ee;
}
var om;
function Go() {
  return om || (om = 1, To.exports = mg()), To.exports;
}
var b = Go(), No = { exports: {} }, Ui = {}, xo = { exports: {} }, Ro = {};
var fm;
function yg() {
  return fm || (fm = 1, (function(o) {
    function i(x, L) {
      var Z = x.length;
      x.push(L);
      e: for (; 0 < Z; ) {
        var ge = Z - 1 >>> 1, Se = x[ge];
        if (0 < S(Se, L))
          x[ge] = L, x[Z] = Se, Z = ge;
        else break e;
      }
    }
    function s(x) {
      return x.length === 0 ? null : x[0];
    }
    function r(x) {
      if (x.length === 0) return null;
      var L = x[0], Z = x.pop();
      if (Z !== L) {
        x[0] = Z;
        e: for (var ge = 0, Se = x.length, y = Se >>> 1; ge < y; ) {
          var N = 2 * (ge + 1) - 1, H = x[N], D = N + 1, I = x[D];
          if (0 > S(H, Z))
            D < Se && 0 > S(I, H) ? (x[ge] = I, x[D] = Z, ge = D) : (x[ge] = H, x[N] = Z, ge = N);
          else if (D < Se && 0 > S(I, Z))
            x[ge] = I, x[D] = Z, ge = D;
          else break e;
        }
      }
      return L;
    }
    function S(x, L) {
      var Z = x.sortIndex - L.sortIndex;
      return Z !== 0 ? Z : x.id - L.id;
    }
    if (o.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var z = performance;
      o.unstable_now = function() {
        return z.now();
      };
    } else {
      var w = Date, k = w.now();
      o.unstable_now = function() {
        return w.now() - k;
      };
    }
    var U = [], q = [], $ = 1, G = null, ie = 3, Ke = !1, Je = !1, it = !1, qt = !1, st = typeof setTimeout == "function" ? setTimeout : null, il = typeof clearTimeout == "function" ? clearTimeout : null, Me = typeof setImmediate < "u" ? setImmediate : null;
    function ft(x) {
      for (var L = s(q); L !== null; ) {
        if (L.callback === null) r(q);
        else if (L.startTime <= x)
          r(q), L.sortIndex = L.expirationTime, i(U, L);
        else break;
        L = s(q);
      }
    }
    function qe(x) {
      if (it = !1, ft(x), !Je)
        if (s(U) !== null)
          Je = !0, We || (We = !0, Fe());
        else {
          var L = s(q);
          L !== null && He(qe, L.startTime - x);
        }
    }
    var We = !1, le = -1, je = 5, xt = -1;
    function sl() {
      return qt ? !0 : !(o.unstable_now() - xt < je);
    }
    function ct() {
      if (qt = !1, We) {
        var x = o.unstable_now();
        xt = x;
        var L = !0;
        try {
          e: {
            Je = !1, it && (it = !1, il(le), le = -1), Ke = !0;
            var Z = ie;
            try {
              t: {
                for (ft(x), G = s(U); G !== null && !(G.expirationTime > x && sl()); ) {
                  var ge = G.callback;
                  if (typeof ge == "function") {
                    G.callback = null, ie = G.priorityLevel;
                    var Se = ge(
                      G.expirationTime <= x
                    );
                    if (x = o.unstable_now(), typeof Se == "function") {
                      G.callback = Se, ft(x), L = !0;
                      break t;
                    }
                    G === s(U) && r(U), ft(x);
                  } else r(U);
                  G = s(U);
                }
                if (G !== null) L = !0;
                else {
                  var y = s(q);
                  y !== null && He(
                    qe,
                    y.startTime - x
                  ), L = !1;
                }
              }
              break e;
            } finally {
              G = null, ie = Z, Ke = !1;
            }
            L = void 0;
          }
        } finally {
          L ? Fe() : We = !1;
        }
      }
    }
    var Fe;
    if (typeof Me == "function")
      Fe = function() {
        Me(ct);
      };
    else if (typeof MessageChannel < "u") {
      var Vt = new MessageChannel(), zt = Vt.port2;
      Vt.port1.onmessage = ct, Fe = function() {
        zt.postMessage(null);
      };
    } else
      Fe = function() {
        st(ct, 0);
      };
    function He(x, L) {
      le = st(function() {
        x(o.unstable_now());
      }, L);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(x) {
      x.callback = null;
    }, o.unstable_forceFrameRate = function(x) {
      0 > x || 125 < x ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : je = 0 < x ? Math.floor(1e3 / x) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return ie;
    }, o.unstable_next = function(x) {
      switch (ie) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = ie;
      }
      var Z = ie;
      ie = L;
      try {
        return x();
      } finally {
        ie = Z;
      }
    }, o.unstable_requestPaint = function() {
      qt = !0;
    }, o.unstable_runWithPriority = function(x, L) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var Z = ie;
      ie = x;
      try {
        return L();
      } finally {
        ie = Z;
      }
    }, o.unstable_scheduleCallback = function(x, L, Z) {
      var ge = o.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? ge + Z : ge) : Z = ge, x) {
        case 1:
          var Se = -1;
          break;
        case 2:
          Se = 250;
          break;
        case 5:
          Se = 1073741823;
          break;
        case 4:
          Se = 1e4;
          break;
        default:
          Se = 5e3;
      }
      return Se = Z + Se, x = {
        id: $++,
        callback: L,
        priorityLevel: x,
        startTime: Z,
        expirationTime: Se,
        sortIndex: -1
      }, Z > ge ? (x.sortIndex = Z, i(q, x), s(U) === null && x === s(q) && (it ? (il(le), le = -1) : it = !0, He(qe, Z - ge))) : (x.sortIndex = Se, i(U, x), Je || Ke || (Je = !0, We || (We = !0, Fe()))), x;
    }, o.unstable_shouldYield = sl, o.unstable_wrapCallback = function(x) {
      var L = ie;
      return function() {
        var Z = ie;
        ie = L;
        try {
          return x.apply(this, arguments);
        } finally {
          ie = Z;
        }
      };
    };
  })(Ro)), Ro;
}
var dm;
function gg() {
  return dm || (dm = 1, xo.exports = yg()), xo.exports;
}
var Oo = { exports: {} }, Nt = {};
var hm;
function pg() {
  if (hm) return Nt;
  hm = 1;
  var o = Go();
  function i(U) {
    var q = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      q += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var $ = 2; $ < arguments.length; $++)
        q += "&args[]=" + encodeURIComponent(arguments[$]);
    }
    return "Minified React error #" + U + "; visit " + q + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function z(U, q, $) {
    var G = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: S,
      key: G == null ? null : "" + G,
      children: U,
      containerInfo: q,
      implementation: $
    };
  }
  var w = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function k(U, q) {
    if (U === "font") return "";
    if (typeof q == "string")
      return q === "use-credentials" ? q : "";
  }
  return Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Nt.createPortal = function(U, q) {
    var $ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!q || q.nodeType !== 1 && q.nodeType !== 9 && q.nodeType !== 11)
      throw Error(i(299));
    return z(U, q, null, $);
  }, Nt.flushSync = function(U) {
    var q = w.T, $ = r.p;
    try {
      if (w.T = null, r.p = 2, U) return U();
    } finally {
      w.T = q, r.p = $, r.d.f();
    }
  }, Nt.preconnect = function(U, q) {
    typeof U == "string" && (q ? (q = q.crossOrigin, q = typeof q == "string" ? q === "use-credentials" ? q : "" : void 0) : q = null, r.d.C(U, q));
  }, Nt.prefetchDNS = function(U) {
    typeof U == "string" && r.d.D(U);
  }, Nt.preinit = function(U, q) {
    if (typeof U == "string" && q && typeof q.as == "string") {
      var $ = q.as, G = k($, q.crossOrigin), ie = typeof q.integrity == "string" ? q.integrity : void 0, Ke = typeof q.fetchPriority == "string" ? q.fetchPriority : void 0;
      $ === "style" ? r.d.S(
        U,
        typeof q.precedence == "string" ? q.precedence : void 0,
        {
          crossOrigin: G,
          integrity: ie,
          fetchPriority: Ke
        }
      ) : $ === "script" && r.d.X(U, {
        crossOrigin: G,
        integrity: ie,
        fetchPriority: Ke,
        nonce: typeof q.nonce == "string" ? q.nonce : void 0
      });
    }
  }, Nt.preinitModule = function(U, q) {
    if (typeof U == "string")
      if (typeof q == "object" && q !== null) {
        if (q.as == null || q.as === "script") {
          var $ = k(
            q.as,
            q.crossOrigin
          );
          r.d.M(U, {
            crossOrigin: $,
            integrity: typeof q.integrity == "string" ? q.integrity : void 0,
            nonce: typeof q.nonce == "string" ? q.nonce : void 0
          });
        }
      } else q == null && r.d.M(U);
  }, Nt.preload = function(U, q) {
    if (typeof U == "string" && typeof q == "object" && q !== null && typeof q.as == "string") {
      var $ = q.as, G = k($, q.crossOrigin);
      r.d.L(U, $, {
        crossOrigin: G,
        integrity: typeof q.integrity == "string" ? q.integrity : void 0,
        nonce: typeof q.nonce == "string" ? q.nonce : void 0,
        type: typeof q.type == "string" ? q.type : void 0,
        fetchPriority: typeof q.fetchPriority == "string" ? q.fetchPriority : void 0,
        referrerPolicy: typeof q.referrerPolicy == "string" ? q.referrerPolicy : void 0,
        imageSrcSet: typeof q.imageSrcSet == "string" ? q.imageSrcSet : void 0,
        imageSizes: typeof q.imageSizes == "string" ? q.imageSizes : void 0,
        media: typeof q.media == "string" ? q.media : void 0
      });
    }
  }, Nt.preloadModule = function(U, q) {
    if (typeof U == "string")
      if (q) {
        var $ = k(q.as, q.crossOrigin);
        r.d.m(U, {
          as: typeof q.as == "string" && q.as !== "script" ? q.as : void 0,
          crossOrigin: $,
          integrity: typeof q.integrity == "string" ? q.integrity : void 0
        });
      } else r.d.m(U);
  }, Nt.requestFormReset = function(U) {
    r.d.r(U);
  }, Nt.unstable_batchedUpdates = function(U, q) {
    return U(q);
  }, Nt.useFormState = function(U, q, $) {
    return w.H.useFormState(U, q, $);
  }, Nt.useFormStatus = function() {
    return w.H.useHostTransitionStatus();
  }, Nt.version = "19.2.4", Nt;
}
var mm;
function vg() {
  if (mm) return Oo.exports;
  mm = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (i) {
        console.error(i);
      }
  }
  return o(), Oo.exports = pg(), Oo.exports;
}
var ym;
function bg() {
  if (ym) return Ui;
  ym = 1;
  var o = gg(), i = Go(), s = vg();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function S(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function z(e) {
    var t = e, l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function w(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function k(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function U(e) {
    if (z(e) !== e)
      throw Error(r(188));
  }
  function q(e) {
    var t = e.alternate;
    if (!t) {
      if (t = z(e), t === null) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var l = e, n = t; ; ) {
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
          if (u === l) return U(a), e;
          if (u === n) return U(a), t;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== n.return) l = a, n = u;
      else {
        for (var c = !1, d = a.child; d; ) {
          if (d === l) {
            c = !0, l = a, n = u;
            break;
          }
          if (d === n) {
            c = !0, n = a, l = u;
            break;
          }
          d = d.sibling;
        }
        if (!c) {
          for (d = u.child; d; ) {
            if (d === l) {
              c = !0, l = u, n = a;
              break;
            }
            if (d === n) {
              c = !0, n = u, l = a;
              break;
            }
            d = d.sibling;
          }
          if (!c) throw Error(r(189));
        }
      }
      if (l.alternate !== n) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? e : t;
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
  var G = Object.assign, ie = /* @__PURE__ */ Symbol.for("react.element"), Ke = /* @__PURE__ */ Symbol.for("react.transitional.element"), Je = /* @__PURE__ */ Symbol.for("react.portal"), it = /* @__PURE__ */ Symbol.for("react.fragment"), qt = /* @__PURE__ */ Symbol.for("react.strict_mode"), st = /* @__PURE__ */ Symbol.for("react.profiler"), il = /* @__PURE__ */ Symbol.for("react.consumer"), Me = /* @__PURE__ */ Symbol.for("react.context"), ft = /* @__PURE__ */ Symbol.for("react.forward_ref"), qe = /* @__PURE__ */ Symbol.for("react.suspense"), We = /* @__PURE__ */ Symbol.for("react.suspense_list"), le = /* @__PURE__ */ Symbol.for("react.memo"), je = /* @__PURE__ */ Symbol.for("react.lazy"), xt = /* @__PURE__ */ Symbol.for("react.activity"), sl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ct = Symbol.iterator;
  function Fe(e) {
    return e === null || typeof e != "object" ? null : (e = ct && e[ct] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Vt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function zt(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Vt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case it:
        return "Fragment";
      case st:
        return "Profiler";
      case qt:
        return "StrictMode";
      case qe:
        return "Suspense";
      case We:
        return "SuspenseList";
      case xt:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Je:
          return "Portal";
        case Me:
          return e.displayName || "Context";
        case il:
          return (e._context.displayName || "Context") + ".Consumer";
        case ft:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case le:
          return t = e.displayName || null, t !== null ? t : zt(e.type) || "Memo";
        case je:
          t = e._payload, e = e._init;
          try {
            return zt(e(t));
          } catch {
          }
      }
    return null;
  }
  var He = Array.isArray, x = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ge = [], Se = -1;
  function y(e) {
    return { current: e };
  }
  function N(e) {
    0 > Se || (e.current = ge[Se], ge[Se] = null, Se--);
  }
  function H(e, t) {
    Se++, ge[Se] = e.current, e.current = t;
  }
  var D = y(null), I = y(null), K = y(null), me = y(null);
  function rt(e, t) {
    switch (H(K, t), H(I, e), H(D, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Mh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Mh(t), e = qh(t, e);
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
    N(D), H(D, e);
  }
  function F() {
    N(D), N(I), N(K);
  }
  function oa(e) {
    e.memoizedState !== null && H(me, e);
    var t = D.current, l = qh(t, e.type);
    t !== l && (H(I, e), H(D, l));
  }
  function bn(e) {
    I.current === e && (N(D), N(I)), me.current === e && (N(me), Ci._currentValue = Z);
  }
  var Xa, ka;
  function Wl(e) {
    if (Xa === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Xa = t && t[1] || "", ka = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Xa + e + ka;
  }
  var fa = !1;
  function Fl(e, t) {
    if (!e || fa) return "";
    fa = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var M = function() {
                throw Error();
              };
              if (Object.defineProperty(M.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(M, []);
                } catch (T) {
                  var A = T;
                }
                Reflect.construct(e, [], M);
              } else {
                try {
                  M.call();
                } catch (T) {
                  A = T;
                }
                e.call(M.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (T) {
                A = T;
              }
              (M = e()) && typeof M.catch == "function" && M.catch(function() {
              });
            }
          } catch (T) {
            if (T && A && typeof T.stack == "string")
              return [T.stack, A.stack];
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
      var u = n.DetermineComponentFrameRoot(), c = u[0], d = u[1];
      if (c && d) {
        var m = c.split(`
`), _ = d.split(`
`);
        for (a = n = 0; n < m.length && !m[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; a < _.length && !_[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (n === m.length || a === _.length)
          for (n = m.length - 1, a = _.length - 1; 1 <= n && 0 <= a && m[n] !== _[a]; )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (m[n] !== _[a]) {
            if (n !== 1 || a !== 1)
              do
                if (n--, a--, 0 > a || m[n] !== _[a]) {
                  var R = `
` + m[n].replace(" at new ", " at ");
                  return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), R;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      fa = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? Wl(l) : "";
  }
  function Sn(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Wl(e.type);
      case 16:
        return Wl("Lazy");
      case 13:
        return e.child !== t && t !== null ? Wl("Suspense Fallback") : Wl("Suspense");
      case 19:
        return Wl("SuspenseList");
      case 0:
      case 15:
        return Fl(e.type, !1);
      case 11:
        return Fl(e.type.render, !1);
      case 1:
        return Fl(e.type, !0);
      case 31:
        return Wl("Activity");
      default:
        return "";
    }
  }
  function cl(e) {
    try {
      var t = "", l = null;
      do
        t += Sn(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var gt = Object.prototype.hasOwnProperty, Dt = o.unstable_scheduleCallback, pt = o.unstable_cancelCallback, rl = o.unstable_shouldYield, yc = o.unstable_requestPaint, vt = o.unstable_now, Zt = o.unstable_getCurrentPriorityLevel, ol = o.unstable_ImmediatePriority, Ut = o.unstable_UserBlockingPriority, bt = o.unstable_NormalPriority, Qa = o.unstable_LowPriority, Lu = o.unstable_IdlePriority, Va = o.log, Za = o.unstable_setDisableYieldValue, En = null, St = null;
  function Rl(e) {
    if (typeof Va == "function" && Za(e), St && typeof St.setStrictMode == "function")
      try {
        St.setStrictMode(En, e);
      } catch {
      }
  }
  var Ye = Math.clz32 ? Math.clz32 : Li, j = Math.log, _n = Math.LN2;
  function Li(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (j(e) / _n | 0) | 0;
  }
  var da = 256, P = 262144, fl = 4194304;
  function Ol(e) {
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
  function Cl(e, t, l) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var a = 0, u = e.suspendedLanes, c = e.pingedLanes;
    e = e.warmLanes;
    var d = n & 134217727;
    return d !== 0 ? (n = d & ~u, n !== 0 ? a = Ol(n) : (c &= d, c !== 0 ? a = Ol(c) : l || (l = d & ~e, l !== 0 && (a = Ol(l))))) : (d = n & ~u, d !== 0 ? a = Ol(d) : c !== 0 ? a = Ol(c) : l || (l = n & ~e, l !== 0 && (a = Ol(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & u) === 0 && (u = a & -a, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : a;
  }
  function ha(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Hi(e, t) {
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
  function se() {
    var e = fl;
    return fl <<= 1, (fl & 62914560) === 0 && (fl = 4194304), e;
  }
  function ma(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function ya(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function An(e, t, l, n, a, u) {
    var c = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var d = e.entanglements, m = e.expirationTimes, _ = e.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var R = 31 - Ye(l), M = 1 << R;
      d[R] = 0, m[R] = -1;
      var A = _[R];
      if (A !== null)
        for (_[R] = null, R = 0; R < A.length; R++) {
          var T = A[R];
          T !== null && (T.lane &= -536870913);
        }
      l &= ~M;
    }
    n !== 0 && Et(e, n, 0), u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t));
  }
  function Et(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - Ye(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 261930;
  }
  function $l(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var n = 31 - Ye(l), a = 1 << n;
      a & t | e[n] & t && (e[n] |= t), l &= ~a;
    }
  }
  function ga(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : Tn(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function Tn(e) {
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
  function wl(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function pa() {
    var e = L.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : em(e.type));
  }
  function Nn(e, t) {
    var l = L.p;
    try {
      return L.p = e, t();
    } finally {
      L.p = l;
    }
  }
  var jt = Math.random().toString(36).slice(2), Ge = "__reactFiber$" + jt, $e = "__reactProps$" + jt, dl = "__reactContainer$" + jt, xn = "__reactEvents$" + jt, Hu = "__reactListeners$" + jt, Ka = "__reactHandles$" + jt, Yu = "__reactResources$" + jt, Kt = "__reactMarker$" + jt;
  function va(e) {
    delete e[Ge], delete e[$e], delete e[xn], delete e[Hu], delete e[Ka];
  }
  function Jt(e) {
    var t = e[Ge];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[dl] || l[Ge]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = Lh(e); e !== null; ) {
            if (l = e[Ge]) return l;
            e = Lh(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function Ll(e) {
    if (e = e[Ge] || e[dl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Wt(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Rn(e) {
    var t = e[Yu];
    return t || (t = e[Yu] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ae(e) {
    e[Kt] = !0;
  }
  var Yi = /* @__PURE__ */ new Set(), Ja = {};
  function Ml(e, t) {
    Bt(e, t), Bt(e + "Capture", t);
  }
  function Bt(e, t) {
    for (Ja[e] = t, e = 0; e < t.length; e++)
      Yi.add(t[e]);
  }
  var Il = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Gi = {}, Gu = {};
  function On(e) {
    return gt.call(Gu, e) ? !0 : gt.call(Gi, e) ? !1 : Il.test(e) ? Gu[e] = !0 : (Gi[e] = !0, !1);
  }
  function ba(e, t, l) {
    if (On(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var n = t.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function _t(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function hl(e, t, l, n) {
    if (n === null) e.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + n);
    }
  }
  function Xe(e) {
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
  function Xi(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Pl(e, t, l) {
    var n = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, u = n.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(c) {
          l = "" + c, u.call(this, c);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(c) {
          l = "" + c;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Cn(e) {
    if (!e._valueTracker) {
      var t = Xi(e) ? "checked" : "value";
      e._valueTracker = Pl(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Wa(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), n = "";
    return e && (n = Xi(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
  }
  function Mn(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var qn = /[\n"\\]/g;
  function Rt(e) {
    return e.replace(
      qn,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Hl(e, t, l, n, a, u, c, d) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Xe(t)) : e.value !== "" + Xe(t) && (e.value = "" + Xe(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? ml(e, c, Xe(t)) : l != null ? ml(e, c, Xe(l)) : n != null && e.removeAttribute("value"), a == null && u != null && (e.defaultChecked = !!u), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + Xe(d) : e.removeAttribute("name");
  }
  function Fa(e, t, l, n, a, u, c, d) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Cn(e);
        return;
      }
      l = l != null ? "" + Xe(l) : "", t = t != null ? "" + Xe(t) : l, d || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = d ? e.checked : !!n, e.defaultChecked = !!n, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), Cn(e);
  }
  function ml(e, t, l) {
    t === "number" && Mn(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function Be(e, t, l, n) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < l.length; a++)
        t["$" + l[a]] = !0;
      for (l = 0; l < e.length; l++)
        a = t.hasOwnProperty("$" + e[l].value), e[l].selected !== a && (e[l].selected = a), a && n && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Xe(l), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === l) {
          e[a].selected = !0, n && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ki(e, t, l) {
    if (t != null && (t = "" + Xe(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Xe(l) : "";
  }
  function $a(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(r(92));
        if (He(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), t = l;
    }
    l = Xe(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n), Cn(e);
  }
  function zn(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var gc = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Qi(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || gc.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function Ia(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var a in t)
        n = t[a], t.hasOwnProperty(a) && l[a] !== n && Qi(e, a, n);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Qi(e, u, t[u]);
  }
  function Sa(e) {
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
  var Vi = /* @__PURE__ */ new Map([
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
  ]), Xu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function en(e) {
    return Xu.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function ke() {
  }
  var yl = null;
  function gl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ql = null, Ft = null;
  function ku(e) {
    var t = Ll(e);
    if (t && (e = t.stateNode)) {
      var l = e[$e] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Hl(
            e,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Rt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var n = l[t];
              if (n !== e && n.form === e.form) {
                var a = n[$e] || null;
                if (!a) throw Error(r(90));
                Hl(
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
            for (t = 0; t < l.length; t++)
              n = l[t], n.form === e.form && Wa(n);
          }
          break e;
        case "textarea":
          ki(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && Be(e, !!l.multiple, t, !1);
      }
    }
  }
  var Pa = !1;
  function eu(e, t, l) {
    if (Pa) return e(t, l);
    Pa = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (Pa = !1, (ql !== null || Ft !== null) && (Bs(), ql && (t = ql, e = Ft, Ft = ql = null, ku(t), e)))
        for (t = 0; t < e.length; t++) ku(e[t]);
    }
  }
  function pl(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var n = l[$e] || null;
    if (n === null) return null;
    l = n[t];
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
        (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function")
      throw Error(
        r(231, t, typeof l)
      );
    return l;
  }
  var wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Dn = !1;
  if (wt)
    try {
      var Un = {};
      Object.defineProperty(Un, "passive", {
        get: function() {
          Dn = !0;
        }
      }), window.addEventListener("test", Un, Un), window.removeEventListener("test", Un, Un);
    } catch {
      Dn = !1;
    }
  var Lt = null, tu = null, lu = null;
  function Qu() {
    if (lu) return lu;
    var e, t = tu, l = t.length, n, a = "value" in Lt ? Lt.value : Lt.textContent, u = a.length;
    for (e = 0; e < l && t[e] === a[e]; e++) ;
    var c = l - e;
    for (n = 1; n <= c && t[l - n] === a[u - n]; n++) ;
    return lu = a.slice(e, 1 < n ? 1 - n : void 0);
  }
  function Ea(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function _a() {
    return !0;
  }
  function Vu() {
    return !1;
  }
  function Ie(e) {
    function t(l, n, a, u, c) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var d in e)
        e.hasOwnProperty(d) && (l = e[d], this[d] = l ? l(u) : u[d]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? _a : Vu, this.isPropagationStopped = Vu, this;
    }
    return G(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = _a);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = _a);
      },
      persist: function() {
      },
      isPersistent: _a
    }), t;
  }
  var $t = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ht = Ie($t), jn = G({}, $t, { view: 0, detail: 0 }), Aa = Ie(jn), At, Bn, Yl, nu = G({}, jn, {
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
    getModifierState: Gl,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Yl && (Yl && e.type === "mousemove" ? (At = e.screenX - Yl.screenX, Bn = e.screenY - Yl.screenY) : Bn = At = 0, Yl = e), At);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Bn;
    }
  }), Zi = Ie(nu), pc = G({}, nu, { dataTransfer: 0 }), vc = Ie(pc), bc = G({}, jn, { relatedTarget: 0 }), Zu = Ie(bc), Sc = G({}, $t, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ec = Ie(Sc), _c = G({}, $t, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Ac = Ie(_c), Tc = G({}, $t, { data: 0 }), Ki = Ie(Tc), Nc = {
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
  }, Ku = {
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
  }, xc = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function wn(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = xc[e]) ? !!t[e] : !1;
  }
  function Gl() {
    return wn;
  }
  var Rc = G({}, jn, {
    key: function(e) {
      if (e.key) {
        var t = Nc[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ea(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ku[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Gl,
    charCode: function(e) {
      return e.type === "keypress" ? Ea(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ea(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Ji = Ie(Rc), Ju = G({}, nu, {
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
  }), Wi = Ie(Ju), Wu = G({}, jn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Gl
  }), Oc = Ie(Wu), au = G({}, $t, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fi = Ie(au), $i = G({}, nu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Cc = Ie($i), Fu = G({}, $t, {
    newState: 0,
    oldState: 0
  }), Ii = Ie(Fu), Mc = [9, 13, 27, 32], uu = wt && "CompositionEvent" in window, Ln = null;
  wt && "documentMode" in document && (Ln = document.documentMode);
  var Pi = wt && "TextEvent" in window && !Ln, es = wt && (!uu || Ln && 8 < Ln && 11 >= Ln), f = " ", p = !1;
  function O(e, t) {
    switch (e) {
      case "keyup":
        return Mc.indexOf(t.keyCode) !== -1;
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
  function B(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Q = !1;
  function ue(e, t) {
    switch (e) {
      case "compositionend":
        return B(t);
      case "keypress":
        return t.which !== 32 ? null : (p = !0, f);
      case "textInput":
        return e = t.data, e === f && p ? null : e;
      default:
        return null;
    }
  }
  function ye(e, t) {
    if (Q)
      return e === "compositionend" || !uu && O(e, t) ? (e = Qu(), lu = tu = Lt = null, Q = !1, e) : null;
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
        return es && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Qe = {
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
  function ae(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Qe[e.type] : t === "textarea";
  }
  function De(e, t, l, n) {
    ql ? Ft ? Ft.push(n) : Ft = [n] : ql = n, t = ks(t, "onChange"), 0 < t.length && (l = new Ht(
      "onChange",
      "change",
      null,
      l,
      n
    ), e.push({ event: l, listeners: t }));
  }
  var Pe = null, Ot = null;
  function tn(e) {
    Th(e, 0);
  }
  function Ct(e) {
    var t = Wt(e);
    if (Wa(t)) return e;
  }
  function Ta(e, t) {
    if (e === "change") return t;
  }
  var $u = !1;
  if (wt) {
    var iu;
    if (wt) {
      var W = "oninput" in document;
      if (!W) {
        var Ue = document.createElement("div");
        Ue.setAttribute("oninput", "return;"), W = typeof Ue.oninput == "function";
      }
      iu = W;
    } else iu = !1;
    $u = iu && (!document.documentMode || 9 < document.documentMode);
  }
  function Tt() {
    Pe && (Pe.detachEvent("onpropertychange", Hn), Ot = Pe = null);
  }
  function Hn(e) {
    if (e.propertyName === "value" && Ct(Ot)) {
      var t = [];
      De(
        t,
        Ot,
        e,
        gl(e)
      ), eu(tn, t);
    }
  }
  function Yn(e, t, l) {
    e === "focusin" ? (Tt(), Pe = t, Ot = l, Pe.attachEvent("onpropertychange", Hn)) : e === "focusout" && Tt();
  }
  function Iu(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ct(Ot);
  }
  function ts(e, t) {
    if (e === "click") return Ct(t);
  }
  function km(e, t) {
    if (e === "input" || e === "change")
      return Ct(t);
  }
  function Qm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var It = typeof Object.is == "function" ? Object.is : Qm;
  function Pu(e, t) {
    if (It(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), n = Object.keys(t);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!gt.call(t, a) || !It(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function Ko(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Jo(e, t) {
    var l = Ko(e);
    e = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (n = e + l.textContent.length, e <= t && n >= t)
          return { node: l, offset: t - e };
        e = n;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Ko(l);
    }
  }
  function Wo(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Fo(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Mn(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Mn(e.document);
    }
    return t;
  }
  function qc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Vm = wt && "documentMode" in document && 11 >= document.documentMode, su = null, zc = null, ei = null, Dc = !1;
  function $o(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Dc || su == null || su !== Mn(n) || (n = su, "selectionStart" in n && qc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), ei && Pu(ei, n) || (ei = n, n = ks(zc, "onSelect"), 0 < n.length && (t = new Ht(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: n }), t.target = su)));
  }
  function Na(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var cu = {
    animationend: Na("Animation", "AnimationEnd"),
    animationiteration: Na("Animation", "AnimationIteration"),
    animationstart: Na("Animation", "AnimationStart"),
    transitionrun: Na("Transition", "TransitionRun"),
    transitionstart: Na("Transition", "TransitionStart"),
    transitioncancel: Na("Transition", "TransitionCancel"),
    transitionend: Na("Transition", "TransitionEnd")
  }, Uc = {}, Io = {};
  wt && (Io = document.createElement("div").style, "AnimationEvent" in window || (delete cu.animationend.animation, delete cu.animationiteration.animation, delete cu.animationstart.animation), "TransitionEvent" in window || delete cu.transitionend.transition);
  function xa(e) {
    if (Uc[e]) return Uc[e];
    if (!cu[e]) return e;
    var t = cu[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Io)
        return Uc[e] = t[l];
    return e;
  }
  var Po = xa("animationend"), ef = xa("animationiteration"), tf = xa("animationstart"), Zm = xa("transitionrun"), Km = xa("transitionstart"), Jm = xa("transitioncancel"), lf = xa("transitionend"), nf = /* @__PURE__ */ new Map(), jc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  jc.push("scrollEnd");
  function zl(e, t) {
    nf.set(e, t), Ml(t, [e]);
  }
  var ls = typeof reportError == "function" ? reportError : function(e) {
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
  }, vl = [], ru = 0, Bc = 0;
  function ns() {
    for (var e = ru, t = Bc = ru = 0; t < e; ) {
      var l = vl[t];
      vl[t++] = null;
      var n = vl[t];
      vl[t++] = null;
      var a = vl[t];
      vl[t++] = null;
      var u = vl[t];
      if (vl[t++] = null, n !== null && a !== null) {
        var c = n.pending;
        c === null ? a.next = a : (a.next = c.next, c.next = a), n.pending = a;
      }
      u !== 0 && af(l, a, u);
    }
  }
  function as(e, t, l, n) {
    vl[ru++] = e, vl[ru++] = t, vl[ru++] = l, vl[ru++] = n, Bc |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function wc(e, t, l, n) {
    return as(e, t, l, n), us(e);
  }
  function Ra(e, t) {
    return as(e, null, null, t), us(e);
  }
  function af(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, u = e.return; u !== null; )
      u.childLanes |= l, n = u.alternate, n !== null && (n.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (a = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, a && t !== null && (a = 31 - Ye(l), e = u.hiddenUpdates, n = e[a], n === null ? e[a] = [t] : n.push(t), t.lane = l | 536870912), u) : null;
  }
  function us(e) {
    if (50 < _i)
      throw _i = 0, Zr = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ou = {};
  function Wm(e, t, l, n) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pt(e, t, l, n) {
    return new Wm(e, t, l, n);
  }
  function Lc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ln(e, t) {
    var l = e.alternate;
    return l === null ? (l = Pt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function uf(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function is(e, t, l, n, a, u) {
    var c = 0;
    if (n = e, typeof e == "function") Lc(e) && (c = 1);
    else if (typeof e == "string")
      c = eg(
        e,
        l,
        D.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case xt:
          return e = Pt(31, l, t, a), e.elementType = xt, e.lanes = u, e;
        case it:
          return Oa(l.children, a, u, t);
        case qt:
          c = 8, a |= 24;
          break;
        case st:
          return e = Pt(12, l, t, a | 2), e.elementType = st, e.lanes = u, e;
        case qe:
          return e = Pt(13, l, t, a), e.elementType = qe, e.lanes = u, e;
        case We:
          return e = Pt(19, l, t, a), e.elementType = We, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Me:
                c = 10;
                break e;
              case il:
                c = 9;
                break e;
              case ft:
                c = 11;
                break e;
              case le:
                c = 14;
                break e;
              case je:
                c = 16, n = null;
                break e;
            }
          c = 29, l = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return t = Pt(c, l, t, a), t.elementType = e, t.type = n, t.lanes = u, t;
  }
  function Oa(e, t, l, n) {
    return e = Pt(7, e, n, t), e.lanes = l, e;
  }
  function Hc(e, t, l) {
    return e = Pt(6, e, null, t), e.lanes = l, e;
  }
  function sf(e) {
    var t = Pt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Yc(e, t, l) {
    return t = Pt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = l, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var cf = /* @__PURE__ */ new WeakMap();
  function bl(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = cf.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: cl(t)
      }, cf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: cl(t)
    };
  }
  var fu = [], du = 0, ss = null, ti = 0, Sl = [], El = 0, Gn = null, Xl = 1, kl = "";
  function nn(e, t) {
    fu[du++] = ti, fu[du++] = ss, ss = e, ti = t;
  }
  function rf(e, t, l) {
    Sl[El++] = Xl, Sl[El++] = kl, Sl[El++] = Gn, Gn = e;
    var n = Xl;
    e = kl;
    var a = 32 - Ye(n) - 1;
    n &= ~(1 << a), l += 1;
    var u = 32 - Ye(t) + a;
    if (30 < u) {
      var c = a - a % 5;
      u = (n & (1 << c) - 1).toString(32), n >>= c, a -= c, Xl = 1 << 32 - Ye(t) + a | l << a | n, kl = u + e;
    } else
      Xl = 1 << u | l << a | n, kl = e;
  }
  function Gc(e) {
    e.return !== null && (nn(e, 1), rf(e, 1, 0));
  }
  function Xc(e) {
    for (; e === ss; )
      ss = fu[--du], fu[du] = null, ti = fu[--du], fu[du] = null;
    for (; e === Gn; )
      Gn = Sl[--El], Sl[El] = null, kl = Sl[--El], Sl[El] = null, Xl = Sl[--El], Sl[El] = null;
  }
  function of(e, t) {
    Sl[El++] = Xl, Sl[El++] = kl, Sl[El++] = Gn, Xl = t.id, kl = t.overflow, Gn = e;
  }
  var dt = null, Oe = null, de = !1, Xn = null, _l = !1, kc = Error(r(519));
  function kn(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw li(bl(t, e)), kc;
  }
  function ff(e) {
    var t = e.stateNode, l = e.type, n = e.memoizedProps;
    switch (t[Ge] = e, t[$e] = n, l) {
      case "dialog":
        re("cancel", t), re("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        re("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ti.length; l++)
          re(Ti[l], t);
        break;
      case "source":
        re("error", t);
        break;
      case "img":
      case "image":
      case "link":
        re("error", t), re("load", t);
        break;
      case "details":
        re("toggle", t);
        break;
      case "input":
        re("invalid", t), Fa(
          t,
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
        re("invalid", t);
        break;
      case "textarea":
        re("invalid", t), $a(t, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || Oh(t.textContent, l) ? (n.popover != null && (re("beforetoggle", t), re("toggle", t)), n.onScroll != null && re("scroll", t), n.onScrollEnd != null && re("scrollend", t), n.onClick != null && (t.onclick = ke), t = !0) : t = !1, t || kn(e, !0);
  }
  function df(e) {
    for (dt = e.return; dt; )
      switch (dt.tag) {
        case 5:
        case 31:
        case 13:
          _l = !1;
          return;
        case 27:
        case 3:
          _l = !0;
          return;
        default:
          dt = dt.return;
      }
  }
  function hu(e) {
    if (e !== dt) return !1;
    if (!de) return df(e), de = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || so(e.type, e.memoizedProps)), l = !l), l && Oe && kn(e), df(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Oe = wh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Oe = wh(e);
    } else
      t === 27 ? (t = Oe, na(e.type) ? (e = ho, ho = null, Oe = e) : Oe = t) : Oe = dt ? Tl(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ca() {
    Oe = dt = null, de = !1;
  }
  function Qc() {
    var e = Xn;
    return e !== null && (kt === null ? kt = e : kt.push.apply(
      kt,
      e
    ), Xn = null), e;
  }
  function li(e) {
    Xn === null ? Xn = [e] : Xn.push(e);
  }
  var Vc = y(null), Ma = null, an = null;
  function Qn(e, t, l) {
    H(Vc, t._currentValue), t._currentValue = l;
  }
  function un(e) {
    e._currentValue = Vc.current, N(Vc);
  }
  function Zc(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function Kc(e, t, l, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var u = a.dependencies;
      if (u !== null) {
        var c = a.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var d = u;
          u = a;
          for (var m = 0; m < t.length; m++)
            if (d.context === t[m]) {
              u.lanes |= l, d = u.alternate, d !== null && (d.lanes |= l), Zc(
                u.return,
                l,
                e
              ), n || (c = null);
              break e;
            }
          u = d.next;
        }
      } else if (a.tag === 18) {
        if (c = a.return, c === null) throw Error(r(341));
        c.lanes |= l, u = c.alternate, u !== null && (u.lanes |= l), Zc(c, l, e), c = null;
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
  function mu(e, t, l, n) {
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
          It(a.pendingProps.value, c.value) || (e !== null ? e.push(d) : e = [d]);
        }
      } else if (a === me.current) {
        if (c = a.alternate, c === null) throw Error(r(387));
        c.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Ci) : e = [Ci]);
      }
      a = a.return;
    }
    e !== null && Kc(
      t,
      e,
      l,
      n
    ), t.flags |= 262144;
  }
  function cs(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!It(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function qa(e) {
    Ma = e, an = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ht(e) {
    return hf(Ma, e);
  }
  function rs(e, t) {
    return Ma === null && qa(e), hf(e, t);
  }
  function hf(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, an === null) {
      if (e === null) throw Error(r(308));
      an = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else an = an.next = t;
    return l;
  }
  var Fm = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(l, n) {
        e.push(n);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(l) {
        return l();
      });
    };
  }, $m = o.unstable_scheduleCallback, Im = o.unstable_NormalPriority, et = {
    $$typeof: Me,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Jc() {
    return {
      controller: new Fm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ni(e) {
    e.refCount--, e.refCount === 0 && $m(Im, function() {
      e.controller.abort();
    });
  }
  var ai = null, Wc = 0, yu = 0, gu = null;
  function Pm(e, t) {
    if (ai === null) {
      var l = ai = [];
      Wc = 0, yu = Ir(), gu = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Wc++, t.then(mf, mf), t;
  }
  function mf() {
    if (--Wc === 0 && ai !== null) {
      gu !== null && (gu.status = "fulfilled");
      var e = ai;
      ai = null, yu = 0, gu = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function ey(e, t) {
    var l = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        l.push(a);
      }
    };
    return e.then(
      function() {
        n.status = "fulfilled", n.value = t;
        for (var a = 0; a < l.length; a++) (0, l[a])(t);
      },
      function(a) {
        for (n.status = "rejected", n.reason = a, a = 0; a < l.length; a++)
          (0, l[a])(void 0);
      }
    ), n;
  }
  var yf = x.S;
  x.S = function(e, t) {
    Id = vt(), typeof t == "object" && t !== null && typeof t.then == "function" && Pm(e, t), yf !== null && yf(e, t);
  };
  var za = y(null);
  function Fc() {
    var e = za.current;
    return e !== null ? e : Re.pooledCache;
  }
  function os(e, t) {
    t === null ? H(za, za.current) : H(za, t.pool);
  }
  function gf() {
    var e = Fc();
    return e === null ? null : { parent: et._currentValue, pool: e };
  }
  var pu = Error(r(460)), $c = Error(r(474)), fs = Error(r(542)), ds = { then: function() {
  } };
  function pf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function vf(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(ke, ke), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Sf(e), e;
      default:
        if (typeof t.status == "string") t.then(ke, ke);
        else {
          if (e = Re, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
          e = t, e.status = "pending", e.then(
            function(n) {
              if (t.status === "pending") {
                var a = t;
                a.status = "fulfilled", a.value = n;
              }
            },
            function(n) {
              if (t.status === "pending") {
                var a = t;
                a.status = "rejected", a.reason = n;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Sf(e), e;
        }
        throw Ua = t, pu;
    }
  }
  function Da(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Ua = l, pu) : l;
    }
  }
  var Ua = null;
  function bf() {
    if (Ua === null) throw Error(r(459));
    var e = Ua;
    return Ua = null, e;
  }
  function Sf(e) {
    if (e === pu || e === fs)
      throw Error(r(483));
  }
  var vu = null, ui = 0;
  function hs(e) {
    var t = ui;
    return ui += 1, vu === null && (vu = []), vf(vu, e, t);
  }
  function ii(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function ms(e, t) {
    throw t.$$typeof === ie ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Ef(e) {
    function t(v, g) {
      if (e) {
        var E = v.deletions;
        E === null ? (v.deletions = [g], v.flags |= 16) : E.push(g);
      }
    }
    function l(v, g) {
      if (!e) return null;
      for (; g !== null; )
        t(v, g), g = g.sibling;
      return null;
    }
    function n(v) {
      for (var g = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? g.set(v.key, v) : g.set(v.index, v), v = v.sibling;
      return g;
    }
    function a(v, g) {
      return v = ln(v, g), v.index = 0, v.sibling = null, v;
    }
    function u(v, g, E) {
      return v.index = E, e ? (E = v.alternate, E !== null ? (E = E.index, E < g ? (v.flags |= 67108866, g) : E) : (v.flags |= 67108866, g)) : (v.flags |= 1048576, g);
    }
    function c(v) {
      return e && v.alternate === null && (v.flags |= 67108866), v;
    }
    function d(v, g, E, C) {
      return g === null || g.tag !== 6 ? (g = Hc(E, v.mode, C), g.return = v, g) : (g = a(g, E), g.return = v, g);
    }
    function m(v, g, E, C) {
      var V = E.type;
      return V === it ? R(
        v,
        g,
        E.props.children,
        C,
        E.key
      ) : g !== null && (g.elementType === V || typeof V == "object" && V !== null && V.$$typeof === je && Da(V) === g.type) ? (g = a(g, E.props), ii(g, E), g.return = v, g) : (g = is(
        E.type,
        E.key,
        E.props,
        null,
        v.mode,
        C
      ), ii(g, E), g.return = v, g);
    }
    function _(v, g, E, C) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== E.containerInfo || g.stateNode.implementation !== E.implementation ? (g = Yc(E, v.mode, C), g.return = v, g) : (g = a(g, E.children || []), g.return = v, g);
    }
    function R(v, g, E, C, V) {
      return g === null || g.tag !== 7 ? (g = Oa(
        E,
        v.mode,
        C,
        V
      ), g.return = v, g) : (g = a(g, E), g.return = v, g);
    }
    function M(v, g, E) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return g = Hc(
          "" + g,
          v.mode,
          E
        ), g.return = v, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Ke:
            return E = is(
              g.type,
              g.key,
              g.props,
              null,
              v.mode,
              E
            ), ii(E, g), E.return = v, E;
          case Je:
            return g = Yc(
              g,
              v.mode,
              E
            ), g.return = v, g;
          case je:
            return g = Da(g), M(v, g, E);
        }
        if (He(g) || Fe(g))
          return g = Oa(
            g,
            v.mode,
            E,
            null
          ), g.return = v, g;
        if (typeof g.then == "function")
          return M(v, hs(g), E);
        if (g.$$typeof === Me)
          return M(
            v,
            rs(v, g),
            E
          );
        ms(v, g);
      }
      return null;
    }
    function A(v, g, E, C) {
      var V = g !== null ? g.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return V !== null ? null : d(v, g, "" + E, C);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Ke:
            return E.key === V ? m(v, g, E, C) : null;
          case Je:
            return E.key === V ? _(v, g, E, C) : null;
          case je:
            return E = Da(E), A(v, g, E, C);
        }
        if (He(E) || Fe(E))
          return V !== null ? null : R(v, g, E, C, null);
        if (typeof E.then == "function")
          return A(
            v,
            g,
            hs(E),
            C
          );
        if (E.$$typeof === Me)
          return A(
            v,
            g,
            rs(v, E),
            C
          );
        ms(v, E);
      }
      return null;
    }
    function T(v, g, E, C, V) {
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return v = v.get(E) || null, d(g, v, "" + C, V);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case Ke:
            return v = v.get(
              C.key === null ? E : C.key
            ) || null, m(g, v, C, V);
          case Je:
            return v = v.get(
              C.key === null ? E : C.key
            ) || null, _(g, v, C, V);
          case je:
            return C = Da(C), T(
              v,
              g,
              E,
              C,
              V
            );
        }
        if (He(C) || Fe(C))
          return v = v.get(E) || null, R(g, v, C, V, null);
        if (typeof C.then == "function")
          return T(
            v,
            g,
            E,
            hs(C),
            V
          );
        if (C.$$typeof === Me)
          return T(
            v,
            g,
            E,
            rs(g, C),
            V
          );
        ms(g, C);
      }
      return null;
    }
    function Y(v, g, E, C) {
      for (var V = null, pe = null, X = g, ne = g = 0, fe = null; X !== null && ne < E.length; ne++) {
        X.index > ne ? (fe = X, X = null) : fe = X.sibling;
        var ve = A(
          v,
          X,
          E[ne],
          C
        );
        if (ve === null) {
          X === null && (X = fe);
          break;
        }
        e && X && ve.alternate === null && t(v, X), g = u(ve, g, ne), pe === null ? V = ve : pe.sibling = ve, pe = ve, X = fe;
      }
      if (ne === E.length)
        return l(v, X), de && nn(v, ne), V;
      if (X === null) {
        for (; ne < E.length; ne++)
          X = M(v, E[ne], C), X !== null && (g = u(
            X,
            g,
            ne
          ), pe === null ? V = X : pe.sibling = X, pe = X);
        return de && nn(v, ne), V;
      }
      for (X = n(X); ne < E.length; ne++)
        fe = T(
          X,
          v,
          ne,
          E[ne],
          C
        ), fe !== null && (e && fe.alternate !== null && X.delete(
          fe.key === null ? ne : fe.key
        ), g = u(
          fe,
          g,
          ne
        ), pe === null ? V = fe : pe.sibling = fe, pe = fe);
      return e && X.forEach(function(ca) {
        return t(v, ca);
      }), de && nn(v, ne), V;
    }
    function J(v, g, E, C) {
      if (E == null) throw Error(r(151));
      for (var V = null, pe = null, X = g, ne = g = 0, fe = null, ve = E.next(); X !== null && !ve.done; ne++, ve = E.next()) {
        X.index > ne ? (fe = X, X = null) : fe = X.sibling;
        var ca = A(v, X, ve.value, C);
        if (ca === null) {
          X === null && (X = fe);
          break;
        }
        e && X && ca.alternate === null && t(v, X), g = u(ca, g, ne), pe === null ? V = ca : pe.sibling = ca, pe = ca, X = fe;
      }
      if (ve.done)
        return l(v, X), de && nn(v, ne), V;
      if (X === null) {
        for (; !ve.done; ne++, ve = E.next())
          ve = M(v, ve.value, C), ve !== null && (g = u(ve, g, ne), pe === null ? V = ve : pe.sibling = ve, pe = ve);
        return de && nn(v, ne), V;
      }
      for (X = n(X); !ve.done; ne++, ve = E.next())
        ve = T(X, v, ne, ve.value, C), ve !== null && (e && ve.alternate !== null && X.delete(ve.key === null ? ne : ve.key), g = u(ve, g, ne), pe === null ? V = ve : pe.sibling = ve, pe = ve);
      return e && X.forEach(function(fg) {
        return t(v, fg);
      }), de && nn(v, ne), V;
    }
    function xe(v, g, E, C) {
      if (typeof E == "object" && E !== null && E.type === it && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Ke:
            e: {
              for (var V = E.key; g !== null; ) {
                if (g.key === V) {
                  if (V = E.type, V === it) {
                    if (g.tag === 7) {
                      l(
                        v,
                        g.sibling
                      ), C = a(
                        g,
                        E.props.children
                      ), C.return = v, v = C;
                      break e;
                    }
                  } else if (g.elementType === V || typeof V == "object" && V !== null && V.$$typeof === je && Da(V) === g.type) {
                    l(
                      v,
                      g.sibling
                    ), C = a(g, E.props), ii(C, E), C.return = v, v = C;
                    break e;
                  }
                  l(v, g);
                  break;
                } else t(v, g);
                g = g.sibling;
              }
              E.type === it ? (C = Oa(
                E.props.children,
                v.mode,
                C,
                E.key
              ), C.return = v, v = C) : (C = is(
                E.type,
                E.key,
                E.props,
                null,
                v.mode,
                C
              ), ii(C, E), C.return = v, v = C);
            }
            return c(v);
          case Je:
            e: {
              for (V = E.key; g !== null; ) {
                if (g.key === V)
                  if (g.tag === 4 && g.stateNode.containerInfo === E.containerInfo && g.stateNode.implementation === E.implementation) {
                    l(
                      v,
                      g.sibling
                    ), C = a(g, E.children || []), C.return = v, v = C;
                    break e;
                  } else {
                    l(v, g);
                    break;
                  }
                else t(v, g);
                g = g.sibling;
              }
              C = Yc(E, v.mode, C), C.return = v, v = C;
            }
            return c(v);
          case je:
            return E = Da(E), xe(
              v,
              g,
              E,
              C
            );
        }
        if (He(E))
          return Y(
            v,
            g,
            E,
            C
          );
        if (Fe(E)) {
          if (V = Fe(E), typeof V != "function") throw Error(r(150));
          return E = V.call(E), J(
            v,
            g,
            E,
            C
          );
        }
        if (typeof E.then == "function")
          return xe(
            v,
            g,
            hs(E),
            C
          );
        if (E.$$typeof === Me)
          return xe(
            v,
            g,
            rs(v, E),
            C
          );
        ms(v, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, g !== null && g.tag === 6 ? (l(v, g.sibling), C = a(g, E), C.return = v, v = C) : (l(v, g), C = Hc(E, v.mode, C), C.return = v, v = C), c(v)) : l(v, g);
    }
    return function(v, g, E, C) {
      try {
        ui = 0;
        var V = xe(
          v,
          g,
          E,
          C
        );
        return vu = null, V;
      } catch (X) {
        if (X === pu || X === fs) throw X;
        var pe = Pt(29, X, null, v.mode);
        return pe.lanes = C, pe.return = v, pe;
      }
    };
  }
  var ja = Ef(!0), _f = Ef(!1), Vn = !1;
  function Ic(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Pc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Zn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Kn(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (be & 2) !== 0) {
      var a = n.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = us(e), af(e, null, l), t;
    }
    return as(e, n, t, l), us(e);
  }
  function si(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, $l(e, l);
    }
  }
  function er(e, t) {
    var l = e.updateQueue, n = e.alternate;
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
        u === null ? a = u = t : u = u.next = t;
      } else a = u = t;
      l = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: u,
        shared: n.shared,
        callbacks: n.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var tr = !1;
  function ci() {
    if (tr) {
      var e = gu;
      if (e !== null) throw e;
    }
  }
  function ri(e, t, l, n) {
    tr = !1;
    var a = e.updateQueue;
    Vn = !1;
    var u = a.firstBaseUpdate, c = a.lastBaseUpdate, d = a.shared.pending;
    if (d !== null) {
      a.shared.pending = null;
      var m = d, _ = m.next;
      m.next = null, c === null ? u = _ : c.next = _, c = m;
      var R = e.alternate;
      R !== null && (R = R.updateQueue, d = R.lastBaseUpdate, d !== c && (d === null ? R.firstBaseUpdate = _ : d.next = _, R.lastBaseUpdate = m));
    }
    if (u !== null) {
      var M = a.baseState;
      c = 0, R = _ = m = null, d = u;
      do {
        var A = d.lane & -536870913, T = A !== d.lane;
        if (T ? (oe & A) === A : (n & A) === A) {
          A !== 0 && A === yu && (tr = !0), R !== null && (R = R.next = {
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: null,
            next: null
          });
          e: {
            var Y = e, J = d;
            A = t;
            var xe = l;
            switch (J.tag) {
              case 1:
                if (Y = J.payload, typeof Y == "function") {
                  M = Y.call(xe, M, A);
                  break e;
                }
                M = Y;
                break e;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = J.payload, A = typeof Y == "function" ? Y.call(xe, M, A) : Y, A == null) break e;
                M = G({}, M, A);
                break e;
              case 2:
                Vn = !0;
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
          }, R === null ? (_ = R = T, m = M) : R = R.next = T, c |= A;
        if (d = d.next, d === null) {
          if (d = a.shared.pending, d === null)
            break;
          T = d, d = T.next, T.next = null, a.lastBaseUpdate = T, a.shared.pending = null;
        }
      } while (!0);
      R === null && (m = M), a.baseState = m, a.firstBaseUpdate = _, a.lastBaseUpdate = R, u === null && (a.shared.lanes = 0), In |= c, e.lanes = c, e.memoizedState = M;
    }
  }
  function Af(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function Tf(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        Af(l[e], t);
  }
  var bu = y(null), ys = y(0);
  function Nf(e, t) {
    e = yn, H(ys, e), H(bu, t), yn = e | t.baseLanes;
  }
  function lr() {
    H(ys, yn), H(bu, bu.current);
  }
  function nr() {
    yn = ys.current, N(bu), N(ys);
  }
  var el = y(null), Al = null;
  function Jn(e) {
    var t = e.alternate;
    H(Ve, Ve.current & 1), H(el, e), Al === null && (t === null || bu.current !== null || t.memoizedState !== null) && (Al = e);
  }
  function ar(e) {
    H(Ve, Ve.current), H(el, e), Al === null && (Al = e);
  }
  function xf(e) {
    e.tag === 22 ? (H(Ve, Ve.current), H(el, e), Al === null && (Al = e)) : Wn();
  }
  function Wn() {
    H(Ve, Ve.current), H(el, el.current);
  }
  function tl(e) {
    N(el), Al === e && (Al = null), N(Ve);
  }
  var Ve = y(0);
  function gs(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || oo(l) || fo(l)))
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
  var sn = 0, te = null, Te = null, tt = null, ps = !1, Su = !1, Ba = !1, vs = 0, oi = 0, Eu = null, ty = 0;
  function we() {
    throw Error(r(321));
  }
  function ur(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!It(e[l], t[l])) return !1;
    return !0;
  }
  function ir(e, t, l, n, a, u) {
    return sn = u, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, x.H = e === null || e.memoizedState === null ? rd : Er, Ba = !1, u = l(n, a), Ba = !1, Su && (u = Of(
      t,
      l,
      n,
      a
    )), Rf(e), u;
  }
  function Rf(e) {
    x.H = hi;
    var t = Te !== null && Te.next !== null;
    if (sn = 0, tt = Te = te = null, ps = !1, oi = 0, Eu = null, t) throw Error(r(300));
    e === null || lt || (e = e.dependencies, e !== null && cs(e) && (lt = !0));
  }
  function Of(e, t, l, n) {
    te = e;
    var a = 0;
    do {
      if (Su && (Eu = null), oi = 0, Su = !1, 25 <= a) throw Error(r(301));
      if (a += 1, tt = Te = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      x.H = od, u = t(l, n);
    } while (Su);
    return u;
  }
  function ly() {
    var e = x.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? fi(t) : t, e = e.useState()[0], (Te !== null ? Te.memoizedState : null) !== e && (te.flags |= 1024), t;
  }
  function sr() {
    var e = vs !== 0;
    return vs = 0, e;
  }
  function cr(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function rr(e) {
    if (ps) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ps = !1;
    }
    sn = 0, tt = Te = te = null, Su = !1, oi = vs = 0, Eu = null;
  }
  function Mt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return tt === null ? te.memoizedState = tt = e : tt = tt.next = e, tt;
  }
  function Ze() {
    if (Te === null) {
      var e = te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Te.next;
    var t = tt === null ? te.memoizedState : tt.next;
    if (t !== null)
      tt = t, Te = e;
    else {
      if (e === null)
        throw te.alternate === null ? Error(r(467)) : Error(r(310));
      Te = e, e = {
        memoizedState: Te.memoizedState,
        baseState: Te.baseState,
        baseQueue: Te.baseQueue,
        queue: Te.queue,
        next: null
      }, tt === null ? te.memoizedState = tt = e : tt = tt.next = e;
    }
    return tt;
  }
  function bs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function fi(e) {
    var t = oi;
    return oi += 1, Eu === null && (Eu = []), e = vf(Eu, e, t), t = te, (tt === null ? t.memoizedState : tt.next) === null && (t = t.alternate, x.H = t === null || t.memoizedState === null ? rd : Er), e;
  }
  function Ss(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return fi(e);
      if (e.$$typeof === Me) return ht(e);
    }
    throw Error(r(438, String(e)));
  }
  function or(e) {
    var t = null, l = te.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var n = te.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = bs(), te.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++)
        l[n] = sl;
    return t.index++, l;
  }
  function cn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Es(e) {
    var t = Ze();
    return fr(t, Te, e);
  }
  function fr(e, t, l) {
    var n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = l;
    var a = e.baseQueue, u = n.pending;
    if (u !== null) {
      if (a !== null) {
        var c = a.next;
        a.next = u.next, u.next = c;
      }
      t.baseQueue = a = u, n.pending = null;
    }
    if (u = e.baseState, a === null) e.memoizedState = u;
    else {
      t = a.next;
      var d = c = null, m = null, _ = t, R = !1;
      do {
        var M = _.lane & -536870913;
        if (M !== _.lane ? (oe & M) === M : (sn & M) === M) {
          var A = _.revertLane;
          if (A === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), M === yu && (R = !0);
          else if ((sn & A) === A) {
            _ = _.next, A === yu && (R = !0);
            continue;
          } else
            M = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, m === null ? (d = m = M, c = u) : m = m.next = M, te.lanes |= A, In |= A;
          M = _.action, Ba && l(u, M), u = _.hasEagerState ? _.eagerState : l(u, M);
        } else
          A = {
            lane: M,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, m === null ? (d = m = A, c = u) : m = m.next = A, te.lanes |= M, In |= M;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (m === null ? c = u : m.next = d, !It(u, e.memoizedState) && (lt = !0, R && (l = gu, l !== null)))
        throw l;
      e.memoizedState = u, e.baseState = c, e.baseQueue = m, n.lastRenderedState = u;
    }
    return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function dr(e) {
    var t = Ze(), l = t.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = e;
    var n = l.dispatch, a = l.pending, u = t.memoizedState;
    if (a !== null) {
      l.pending = null;
      var c = a = a.next;
      do
        u = e(u, c.action), c = c.next;
      while (c !== a);
      It(u, t.memoizedState) || (lt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
    }
    return [u, n];
  }
  function Cf(e, t, l) {
    var n = te, a = Ze(), u = de;
    if (u) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = t();
    var c = !It(
      (Te || a).memoizedState,
      l
    );
    if (c && (a.memoizedState = l, lt = !0), a = a.queue, yr(zf.bind(null, n, a, e), [
      e
    ]), a.getSnapshot !== t || c || tt !== null && tt.memoizedState.tag & 1) {
      if (n.flags |= 2048, _u(
        9,
        { destroy: void 0 },
        qf.bind(
          null,
          n,
          a,
          l,
          t
        ),
        null
      ), Re === null) throw Error(r(349));
      u || (sn & 127) !== 0 || Mf(n, t, l);
    }
    return l;
  }
  function Mf(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = te.updateQueue, t === null ? (t = bs(), te.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function qf(e, t, l, n) {
    t.value = l, t.getSnapshot = n, Df(t) && Uf(e);
  }
  function zf(e, t, l) {
    return l(function() {
      Df(t) && Uf(e);
    });
  }
  function Df(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !It(e, l);
    } catch {
      return !0;
    }
  }
  function Uf(e) {
    var t = Ra(e, 2);
    t !== null && Qt(t, e, 2);
  }
  function hr(e) {
    var t = Mt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), Ba) {
        Rl(!0);
        try {
          l();
        } finally {
          Rl(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cn,
      lastRenderedState: e
    }, t;
  }
  function jf(e, t, l, n) {
    return e.baseState = l, fr(
      e,
      Te,
      typeof n == "function" ? n : cn
    );
  }
  function ny(e, t, l, n, a) {
    if (Ts(e)) throw Error(r(485));
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
      x.T !== null ? l(!0) : u.isTransition = !1, n(u), l = t.pending, l === null ? (u.next = t.pending = u, Bf(t, u)) : (u.next = l.next, t.pending = l.next = u);
    }
  }
  function Bf(e, t) {
    var l = t.action, n = t.payload, a = e.state;
    if (t.isTransition) {
      var u = x.T, c = {};
      x.T = c;
      try {
        var d = l(a, n), m = x.S;
        m !== null && m(c, d), wf(e, t, d);
      } catch (_) {
        mr(e, t, _);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), x.T = u;
      }
    } else
      try {
        u = l(a, n), wf(e, t, u);
      } catch (_) {
        mr(e, t, _);
      }
  }
  function wf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        Lf(e, t, n);
      },
      function(n) {
        return mr(e, t, n);
      }
    ) : Lf(e, t, l);
  }
  function Lf(e, t, l) {
    t.status = "fulfilled", t.value = l, Hf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Bf(e, l)));
  }
  function mr(e, t, l) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        t.status = "rejected", t.reason = l, Hf(t), t = t.next;
      while (t !== n);
    }
    e.action = null;
  }
  function Hf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Yf(e, t) {
    return t;
  }
  function Gf(e, t) {
    if (de) {
      var l = Re.formState;
      if (l !== null) {
        e: {
          var n = te;
          if (de) {
            if (Oe) {
              t: {
                for (var a = Oe, u = _l; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break t;
                  }
                  if (a = Tl(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                Oe = Tl(
                  a.nextSibling
                ), n = a.data === "F!";
                break e;
              }
            }
            kn(n);
          }
          n = !1;
        }
        n && (t = l[0]);
      }
    }
    return l = Mt(), l.memoizedState = l.baseState = t, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yf,
      lastRenderedState: t
    }, l.queue = n, l = id.bind(
      null,
      te,
      n
    ), n.dispatch = l, n = hr(!1), u = Sr.bind(
      null,
      te,
      !1,
      n.queue
    ), n = Mt(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = a, l = ny.bind(
      null,
      te,
      a,
      u,
      l
    ), a.dispatch = l, n.memoizedState = e, [t, l, !1];
  }
  function Xf(e) {
    var t = Ze();
    return kf(t, Te, e);
  }
  function kf(e, t, l) {
    if (t = fr(
      e,
      t,
      Yf
    )[0], e = Es(cn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = fi(t);
      } catch (c) {
        throw c === pu ? fs : c;
      }
    else n = t;
    t = Ze();
    var a = t.queue, u = a.dispatch;
    return l !== t.memoizedState && (te.flags |= 2048, _u(
      9,
      { destroy: void 0 },
      ay.bind(null, a, l),
      null
    )), [n, u, e];
  }
  function ay(e, t) {
    e.action = t;
  }
  function Qf(e) {
    var t = Ze(), l = Te;
    if (l !== null)
      return kf(t, l, e);
    Ze(), t = t.memoizedState, l = Ze();
    var n = l.queue.dispatch;
    return l.memoizedState = e, [t, n, !1];
  }
  function _u(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = te.updateQueue, t === null && (t = bs(), te.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function Vf() {
    return Ze().memoizedState;
  }
  function _s(e, t, l, n) {
    var a = Mt();
    te.flags |= e, a.memoizedState = _u(
      1 | t,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function As(e, t, l, n) {
    var a = Ze();
    n = n === void 0 ? null : n;
    var u = a.memoizedState.inst;
    Te !== null && n !== null && ur(n, Te.memoizedState.deps) ? a.memoizedState = _u(t, u, l, n) : (te.flags |= e, a.memoizedState = _u(
      1 | t,
      u,
      l,
      n
    ));
  }
  function Zf(e, t) {
    _s(8390656, 8, e, t);
  }
  function yr(e, t) {
    As(2048, 8, e, t);
  }
  function uy(e) {
    te.flags |= 4;
    var t = te.updateQueue;
    if (t === null)
      t = bs(), te.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function Kf(e) {
    var t = Ze().memoizedState;
    return uy({ ref: t, nextImpl: e }), function() {
      if ((be & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Jf(e, t) {
    return As(4, 2, e, t);
  }
  function Wf(e, t) {
    return As(4, 4, e, t);
  }
  function Ff(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function() {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function $f(e, t, l) {
    l = l != null ? l.concat([e]) : null, As(4, 4, Ff.bind(null, t, e), l);
  }
  function gr() {
  }
  function If(e, t) {
    var l = Ze();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && ur(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e);
  }
  function Pf(e, t) {
    var l = Ze();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && ur(t, n[1]))
      return n[0];
    if (n = e(), Ba) {
      Rl(!0);
      try {
        e();
      } finally {
        Rl(!1);
      }
    }
    return l.memoizedState = [n, t], n;
  }
  function pr(e, t, l) {
    return l === void 0 || (sn & 1073741824) !== 0 && (oe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = eh(), te.lanes |= e, In |= e, l);
  }
  function ed(e, t, l, n) {
    return It(l, t) ? l : bu.current !== null ? (e = pr(e, l, n), It(e, t) || (lt = !0), e) : (sn & 42) === 0 || (sn & 1073741824) !== 0 && (oe & 261930) === 0 ? (lt = !0, e.memoizedState = l) : (e = eh(), te.lanes |= e, In |= e, t);
  }
  function td(e, t, l, n, a) {
    var u = L.p;
    L.p = u !== 0 && 8 > u ? u : 8;
    var c = x.T, d = {};
    x.T = d, Sr(e, !1, t, l);
    try {
      var m = a(), _ = x.S;
      if (_ !== null && _(d, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var R = ey(
          m,
          n
        );
        di(
          e,
          t,
          R,
          al(e)
        );
      } else
        di(
          e,
          t,
          n,
          al(e)
        );
    } catch (M) {
      di(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: M },
        al()
      );
    } finally {
      L.p = u, c !== null && d.types !== null && (c.types = d.types), x.T = c;
    }
  }
  function iy() {
  }
  function vr(e, t, l, n) {
    if (e.tag !== 5) throw Error(r(476));
    var a = ld(e).queue;
    td(
      e,
      a,
      t,
      Z,
      l === null ? iy : function() {
        return nd(e), l(n);
      }
    );
  }
  function ld(e) {
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
        lastRenderedReducer: cn,
        lastRenderedState: Z
      },
      next: null
    };
    var l = {};
    return t.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cn,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function nd(e) {
    var t = ld(e);
    t.next === null && (t = e.alternate.memoizedState), di(
      e,
      t.next.queue,
      {},
      al()
    );
  }
  function br() {
    return ht(Ci);
  }
  function ad() {
    return Ze().memoizedState;
  }
  function ud() {
    return Ze().memoizedState;
  }
  function sy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = al();
          e = Zn(l);
          var n = Kn(t, e, l);
          n !== null && (Qt(n, t, l), si(n, t, l)), t = { cache: Jc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function cy(e, t, l) {
    var n = al();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ts(e) ? sd(t, l) : (l = wc(e, t, l, n), l !== null && (Qt(l, e, n), cd(l, t, n)));
  }
  function id(e, t, l) {
    var n = al();
    di(e, t, l, n);
  }
  function di(e, t, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ts(e)) sd(t, a);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var c = t.lastRenderedState, d = u(c, l);
          if (a.hasEagerState = !0, a.eagerState = d, It(d, c))
            return as(e, t, a, 0), Re === null && ns(), !1;
        } catch {
        }
      if (l = wc(e, t, a, n), l !== null)
        return Qt(l, e, n), cd(l, t, n), !0;
    }
    return !1;
  }
  function Sr(e, t, l, n) {
    if (n = {
      lane: 2,
      revertLane: Ir(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ts(e)) {
      if (t) throw Error(r(479));
    } else
      t = wc(
        e,
        l,
        n,
        2
      ), t !== null && Qt(t, e, 2);
  }
  function Ts(e) {
    var t = e.alternate;
    return e === te || t !== null && t === te;
  }
  function sd(e, t) {
    Su = ps = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function cd(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, $l(e, l);
    }
  }
  var hi = {
    readContext: ht,
    use: Ss,
    useCallback: we,
    useContext: we,
    useEffect: we,
    useImperativeHandle: we,
    useLayoutEffect: we,
    useInsertionEffect: we,
    useMemo: we,
    useReducer: we,
    useRef: we,
    useState: we,
    useDebugValue: we,
    useDeferredValue: we,
    useTransition: we,
    useSyncExternalStore: we,
    useId: we,
    useHostTransitionStatus: we,
    useFormState: we,
    useActionState: we,
    useOptimistic: we,
    useMemoCache: we,
    useCacheRefresh: we
  };
  hi.useEffectEvent = we;
  var rd = {
    readContext: ht,
    use: Ss,
    useCallback: function(e, t) {
      return Mt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ht,
    useEffect: Zf,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, _s(
        4194308,
        4,
        Ff.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return _s(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      _s(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = Mt();
      t = t === void 0 ? null : t;
      var n = e();
      if (Ba) {
        Rl(!0);
        try {
          e();
        } finally {
          Rl(!1);
        }
      }
      return l.memoizedState = [n, t], n;
    },
    useReducer: function(e, t, l) {
      var n = Mt();
      if (l !== void 0) {
        var a = l(t);
        if (Ba) {
          Rl(!0);
          try {
            l(t);
          } finally {
            Rl(!1);
          }
        }
      } else a = t;
      return n.memoizedState = n.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, n.queue = e, e = e.dispatch = cy.bind(
        null,
        te,
        e
      ), [n.memoizedState, e];
    },
    useRef: function(e) {
      var t = Mt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = hr(e);
      var t = e.queue, l = id.bind(null, te, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: gr,
    useDeferredValue: function(e, t) {
      var l = Mt();
      return pr(l, e, t);
    },
    useTransition: function() {
      var e = hr(!1);
      return e = td.bind(
        null,
        te,
        e.queue,
        !0,
        !1
      ), Mt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var n = te, a = Mt();
      if (de) {
        if (l === void 0)
          throw Error(r(407));
        l = l();
      } else {
        if (l = t(), Re === null)
          throw Error(r(349));
        (oe & 127) !== 0 || Mf(n, t, l);
      }
      a.memoizedState = l;
      var u = { value: l, getSnapshot: t };
      return a.queue = u, Zf(zf.bind(null, n, u, e), [
        e
      ]), n.flags |= 2048, _u(
        9,
        { destroy: void 0 },
        qf.bind(
          null,
          n,
          u,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = Mt(), t = Re.identifierPrefix;
      if (de) {
        var l = kl, n = Xl;
        l = (n & ~(1 << 32 - Ye(n) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = vs++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = ty++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: br,
    useFormState: Gf,
    useActionState: Gf,
    useOptimistic: function(e) {
      var t = Mt();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = Sr.bind(
        null,
        te,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: or,
    useCacheRefresh: function() {
      return Mt().memoizedState = sy.bind(
        null,
        te
      );
    },
    useEffectEvent: function(e) {
      var t = Mt(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((be & 2) !== 0)
          throw Error(r(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Er = {
    readContext: ht,
    use: Ss,
    useCallback: If,
    useContext: ht,
    useEffect: yr,
    useImperativeHandle: $f,
    useInsertionEffect: Jf,
    useLayoutEffect: Wf,
    useMemo: Pf,
    useReducer: Es,
    useRef: Vf,
    useState: function() {
      return Es(cn);
    },
    useDebugValue: gr,
    useDeferredValue: function(e, t) {
      var l = Ze();
      return ed(
        l,
        Te.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Es(cn)[0], t = Ze().memoizedState;
      return [
        typeof e == "boolean" ? e : fi(e),
        t
      ];
    },
    useSyncExternalStore: Cf,
    useId: ad,
    useHostTransitionStatus: br,
    useFormState: Xf,
    useActionState: Xf,
    useOptimistic: function(e, t) {
      var l = Ze();
      return jf(l, Te, e, t);
    },
    useMemoCache: or,
    useCacheRefresh: ud
  };
  Er.useEffectEvent = Kf;
  var od = {
    readContext: ht,
    use: Ss,
    useCallback: If,
    useContext: ht,
    useEffect: yr,
    useImperativeHandle: $f,
    useInsertionEffect: Jf,
    useLayoutEffect: Wf,
    useMemo: Pf,
    useReducer: dr,
    useRef: Vf,
    useState: function() {
      return dr(cn);
    },
    useDebugValue: gr,
    useDeferredValue: function(e, t) {
      var l = Ze();
      return Te === null ? pr(l, e, t) : ed(
        l,
        Te.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = dr(cn)[0], t = Ze().memoizedState;
      return [
        typeof e == "boolean" ? e : fi(e),
        t
      ];
    },
    useSyncExternalStore: Cf,
    useId: ad,
    useHostTransitionStatus: br,
    useFormState: Qf,
    useActionState: Qf,
    useOptimistic: function(e, t) {
      var l = Ze();
      return Te !== null ? jf(l, Te, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: or,
    useCacheRefresh: ud
  };
  od.useEffectEvent = Kf;
  function _r(e, t, l, n) {
    t = e.memoizedState, l = l(n, t), l = l == null ? t : G({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Ar = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var n = al(), a = Zn(n);
      a.payload = t, l != null && (a.callback = l), t = Kn(e, a, n), t !== null && (Qt(t, e, n), si(t, e, n));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var n = al(), a = Zn(n);
      a.tag = 1, a.payload = t, l != null && (a.callback = l), t = Kn(e, a, n), t !== null && (Qt(t, e, n), si(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = al(), n = Zn(l);
      n.tag = 2, t != null && (n.callback = t), t = Kn(e, n, l), t !== null && (Qt(t, e, l), si(t, e, l));
    }
  };
  function fd(e, t, l, n, a, u, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, u, c) : t.prototype && t.prototype.isPureReactComponent ? !Pu(l, n) || !Pu(a, u) : !0;
  }
  function dd(e, t, l, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && Ar.enqueueReplaceState(t, t.state, null);
  }
  function wa(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var n in t)
        n !== "ref" && (l[n] = t[n]);
    }
    if (e = e.defaultProps) {
      l === t && (l = G({}, l));
      for (var a in e)
        l[a] === void 0 && (l[a] = e[a]);
    }
    return l;
  }
  function hd(e) {
    ls(e);
  }
  function md(e) {
    console.error(e);
  }
  function yd(e) {
    ls(e);
  }
  function Ns(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function gd(e, t, l) {
    try {
      var n = e.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Tr(e, t, l) {
    return l = Zn(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Ns(e, t);
    }, l;
  }
  function pd(e) {
    return e = Zn(e), e.tag = 3, e;
  }
  function vd(e, t, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = n.value;
      e.payload = function() {
        return a(u);
      }, e.callback = function() {
        gd(t, l, n);
      };
    }
    var c = l.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
      gd(t, l, n), typeof a != "function" && (Pn === null ? Pn = /* @__PURE__ */ new Set([this]) : Pn.add(this));
      var d = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: d !== null ? d : ""
      });
    });
  }
  function ry(e, t, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (t = l.alternate, t !== null && mu(
        t,
        l,
        a,
        !0
      ), l = el.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Al === null ? ws() : l.alternate === null && Le === 0 && (Le = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === ds ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), Wr(e, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === ds ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Wr(e, n, a)), !1;
        }
        throw Error(r(435, l.tag));
      }
      return Wr(e, n, a), ws(), !1;
    }
    if (de)
      return t = el.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== kc && (e = Error(r(422), { cause: n }), li(bl(e, l)))) : (n !== kc && (t = Error(r(423), {
        cause: n
      }), li(
        bl(t, l)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = bl(n, l), a = Tr(
        e.stateNode,
        n,
        a
      ), er(e, a), Le !== 4 && (Le = 2)), !1;
    var u = Error(r(520), { cause: n });
    if (u = bl(u, l), Ei === null ? Ei = [u] : Ei.push(u), Le !== 4 && (Le = 2), t === null) return !0;
    n = bl(n, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = a & -a, l.lanes |= e, e = Tr(l.stateNode, n, e), er(l, e), !1;
        case 1:
          if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Pn === null || !Pn.has(u))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = pd(a), vd(
              a,
              e,
              l,
              n
            ), er(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Nr = Error(r(461)), lt = !1;
  function mt(e, t, l, n) {
    t.child = e === null ? _f(t, null, l, n) : ja(
      t,
      e.child,
      l,
      n
    );
  }
  function bd(e, t, l, n, a) {
    l = l.render;
    var u = t.ref;
    if ("ref" in n) {
      var c = {};
      for (var d in n)
        d !== "ref" && (c[d] = n[d]);
    } else c = n;
    return qa(t), n = ir(
      e,
      t,
      l,
      c,
      u,
      a
    ), d = sr(), e !== null && !lt ? (cr(e, t, a), rn(e, t, a)) : (de && d && Gc(t), t.flags |= 1, mt(e, t, n, a), t.child);
  }
  function Sd(e, t, l, n, a) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" && !Lc(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, Ed(
        e,
        t,
        u,
        n,
        a
      )) : (e = is(
        l.type,
        null,
        n,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Dr(e, a)) {
      var c = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Pu, l(c, n) && e.ref === t.ref)
        return rn(e, t, a);
    }
    return t.flags |= 1, e = ln(u, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ed(e, t, l, n, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Pu(u, n) && e.ref === t.ref)
        if (lt = !1, t.pendingProps = n = u, Dr(e, a))
          (e.flags & 131072) !== 0 && (lt = !0);
        else
          return t.lanes = e.lanes, rn(e, t, a);
    }
    return xr(
      e,
      t,
      l,
      n,
      a
    );
  }
  function _d(e, t, l, n) {
    var a = n.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | l : l, e !== null) {
          for (n = t.child = e.child, a = 0; n !== null; )
            a = a | n.lanes | n.childLanes, n = n.sibling;
          n = a & ~u;
        } else n = 0, t.child = null;
        return Ad(
          e,
          t,
          u,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && os(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Nf(t, u) : lr(), xf(t);
      else
        return n = t.lanes = 536870912, Ad(
          e,
          t,
          u !== null ? u.baseLanes | l : l,
          l,
          n
        );
    } else
      u !== null ? (os(t, u.cachePool), Nf(t, u), Wn(), t.memoizedState = null) : (e !== null && os(t, null), lr(), Wn());
    return mt(e, t, a, l), t.child;
  }
  function mi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Ad(e, t, l, n, a) {
    var u = Fc();
    return u = u === null ? null : { parent: et._currentValue, pool: u }, t.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, e !== null && os(t, null), lr(), xf(t), e !== null && mu(e, t, n, !0), t.childLanes = a, null;
  }
  function xs(e, t) {
    return t = Os(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Td(e, t, l) {
    return ja(t, e.child, null, l), e = xs(t, t.pendingProps), e.flags |= 2, tl(t), t.memoizedState = null, e;
  }
  function oy(e, t, l) {
    var n = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (de) {
        if (n.mode === "hidden")
          return e = xs(t, n), t.lanes = 536870912, mi(null, e);
        if (ar(t), (e = Oe) ? (e = Bh(
          e,
          _l
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Gn !== null ? { id: Xl, overflow: kl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = sf(e), l.return = t, t.child = l, dt = t, Oe = null)) : e = null, e === null) throw kn(t);
        return t.lanes = 536870912, null;
      }
      return xs(t, n);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (ar(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = Td(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (lt || mu(e, t, l, !1), a = (l & e.childLanes) !== 0, lt || a) {
        if (n = Re, n !== null && (c = ga(n, l), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, Ra(e, c), Qt(n, e, c), Nr;
        ws(), t = Td(
          e,
          t,
          l
        );
      } else
        e = u.treeContext, Oe = Tl(c.nextSibling), dt = t, de = !0, Xn = null, _l = !1, e !== null && of(t, e), t = xs(t, n), t.flags |= 4096;
      return t;
    }
    return e = ln(e.child, {
      mode: n.mode,
      children: n.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Rs(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(r(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function xr(e, t, l, n, a) {
    return qa(t), l = ir(
      e,
      t,
      l,
      n,
      void 0,
      a
    ), n = sr(), e !== null && !lt ? (cr(e, t, a), rn(e, t, a)) : (de && n && Gc(t), t.flags |= 1, mt(e, t, l, a), t.child);
  }
  function Nd(e, t, l, n, a, u) {
    return qa(t), t.updateQueue = null, l = Of(
      t,
      n,
      l,
      a
    ), Rf(e), n = sr(), e !== null && !lt ? (cr(e, t, u), rn(e, t, u)) : (de && n && Gc(t), t.flags |= 1, mt(e, t, l, u), t.child);
  }
  function xd(e, t, l, n, a) {
    if (qa(t), t.stateNode === null) {
      var u = ou, c = l.contextType;
      typeof c == "object" && c !== null && (u = ht(c)), u = new l(n, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Ar, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = n, u.state = t.memoizedState, u.refs = {}, Ic(t), c = l.contextType, u.context = typeof c == "object" && c !== null ? ht(c) : ou, u.state = t.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (_r(
        t,
        l,
        c,
        n
      ), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && Ar.enqueueReplaceState(u, u.state, null), ri(t, n, u, a), ci(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      u = t.stateNode;
      var d = t.memoizedProps, m = wa(l, d);
      u.props = m;
      var _ = u.context, R = l.contextType;
      c = ou, typeof R == "object" && R !== null && (c = ht(R));
      var M = l.getDerivedStateFromProps;
      R = typeof M == "function" || typeof u.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, R || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d || _ !== c) && dd(
        t,
        u,
        n,
        c
      ), Vn = !1;
      var A = t.memoizedState;
      u.state = A, ri(t, n, u, a), ci(), _ = t.memoizedState, d || A !== _ || Vn ? (typeof M == "function" && (_r(
        t,
        l,
        M,
        n
      ), _ = t.memoizedState), (m = Vn || fd(
        t,
        l,
        m,
        n,
        A,
        _,
        c
      )) ? (R || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = _), u.props = n, u.state = _, u.context = c, n = m) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      u = t.stateNode, Pc(e, t), c = t.memoizedProps, R = wa(l, c), u.props = R, M = t.pendingProps, A = u.context, _ = l.contextType, m = ou, typeof _ == "object" && _ !== null && (m = ht(_)), d = l.getDerivedStateFromProps, (_ = typeof d == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== M || A !== m) && dd(
        t,
        u,
        n,
        m
      ), Vn = !1, A = t.memoizedState, u.state = A, ri(t, n, u, a), ci();
      var T = t.memoizedState;
      c !== M || A !== T || Vn || e !== null && e.dependencies !== null && cs(e.dependencies) ? (typeof d == "function" && (_r(
        t,
        l,
        d,
        n
      ), T = t.memoizedState), (R = Vn || fd(
        t,
        l,
        R,
        n,
        A,
        T,
        m
      ) || e !== null && e.dependencies !== null && cs(e.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(n, T, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        n,
        T,
        m
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = T), u.props = n, u.state = T, u.context = m, n = R) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return u = n, Rs(e, t), n = (t.flags & 128) !== 0, u || n ? (u = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && n ? (t.child = ja(
      t,
      e.child,
      null,
      a
    ), t.child = ja(
      t,
      null,
      l,
      a
    )) : mt(e, t, l, a), t.memoizedState = u.state, e = t.child) : e = rn(
      e,
      t,
      a
    ), e;
  }
  function Rd(e, t, l, n) {
    return Ca(), t.flags |= 256, mt(e, t, l, n), t.child;
  }
  var Rr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Or(e) {
    return { baseLanes: e, cachePool: gf() };
  }
  function Cr(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= nl), e;
  }
  function Od(e, t, l) {
    var n = t.pendingProps, a = !1, u = (t.flags & 128) !== 0, c;
    if ((c = u) || (c = e !== null && e.memoizedState === null ? !1 : (Ve.current & 2) !== 0), c && (a = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (de) {
        if (a ? Jn(t) : Wn(), (e = Oe) ? (e = Bh(
          e,
          _l
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Gn !== null ? { id: Xl, overflow: kl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = sf(e), l.return = t, t.child = l, dt = t, Oe = null)) : e = null, e === null) throw kn(t);
        return fo(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var d = n.children;
      return n = n.fallback, a ? (Wn(), a = t.mode, d = Os(
        { mode: "hidden", children: d },
        a
      ), n = Oa(
        n,
        a,
        l,
        null
      ), d.return = t, n.return = t, d.sibling = n, t.child = d, n = t.child, n.memoizedState = Or(l), n.childLanes = Cr(
        e,
        c,
        l
      ), t.memoizedState = Rr, mi(null, n)) : (Jn(t), Mr(t, d));
    }
    var m = e.memoizedState;
    if (m !== null && (d = m.dehydrated, d !== null)) {
      if (u)
        t.flags & 256 ? (Jn(t), t.flags &= -257, t = qr(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Wn(), t.child = e.child, t.flags |= 128, t = null) : (Wn(), d = n.fallback, a = t.mode, n = Os(
          { mode: "visible", children: n.children },
          a
        ), d = Oa(
          d,
          a,
          l,
          null
        ), d.flags |= 2, n.return = t, d.return = t, n.sibling = d, t.child = n, ja(
          t,
          e.child,
          null,
          l
        ), n = t.child, n.memoizedState = Or(l), n.childLanes = Cr(
          e,
          c,
          l
        ), t.memoizedState = Rr, t = mi(null, n));
      else if (Jn(t), fo(d)) {
        if (c = d.nextSibling && d.nextSibling.dataset, c) var _ = c.dgst;
        c = _, n = Error(r(419)), n.stack = "", n.digest = c, li({ value: n, source: null, stack: null }), t = qr(
          e,
          t,
          l
        );
      } else if (lt || mu(e, t, l, !1), c = (l & e.childLanes) !== 0, lt || c) {
        if (c = Re, c !== null && (n = ga(c, l), n !== 0 && n !== m.retryLane))
          throw m.retryLane = n, Ra(e, n), Qt(c, e, n), Nr;
        oo(d) || ws(), t = qr(
          e,
          t,
          l
        );
      } else
        oo(d) ? (t.flags |= 192, t.child = e.child, t = null) : (e = m.treeContext, Oe = Tl(
          d.nextSibling
        ), dt = t, de = !0, Xn = null, _l = !1, e !== null && of(t, e), t = Mr(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (Wn(), d = n.fallback, a = t.mode, m = e.child, _ = m.sibling, n = ln(m, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = m.subtreeFlags & 65011712, _ !== null ? d = ln(
      _,
      d
    ) : (d = Oa(
      d,
      a,
      l,
      null
    ), d.flags |= 2), d.return = t, n.return = t, n.sibling = d, t.child = n, mi(null, n), n = t.child, d = e.child.memoizedState, d === null ? d = Or(l) : (a = d.cachePool, a !== null ? (m = et._currentValue, a = a.parent !== m ? { parent: m, pool: m } : a) : a = gf(), d = {
      baseLanes: d.baseLanes | l,
      cachePool: a
    }), n.memoizedState = d, n.childLanes = Cr(
      e,
      c,
      l
    ), t.memoizedState = Rr, mi(e.child, n)) : (Jn(t), l = e.child, e = l.sibling, l = ln(l, {
      mode: "visible",
      children: n.children
    }), l.return = t, l.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function Mr(e, t) {
    return t = Os(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Os(e, t) {
    return e = Pt(22, e, null, t), e.lanes = 0, e;
  }
  function qr(e, t, l) {
    return ja(t, e.child, null, l), e = Mr(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Cd(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Zc(e.return, t, l);
  }
  function zr(e, t, l, n, a, u) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: l,
      tailMode: a,
      treeForkCount: u
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = n, c.tail = l, c.tailMode = a, c.treeForkCount = u);
  }
  function Md(e, t, l) {
    var n = t.pendingProps, a = n.revealOrder, u = n.tail;
    n = n.children;
    var c = Ve.current, d = (c & 2) !== 0;
    if (d ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, H(Ve, c), mt(e, t, n, l), n = de ? ti : 0, !d && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Cd(e, l, t);
        else if (e.tag === 19)
          Cd(e, l, t);
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
        for (l = t.child, a = null; l !== null; )
          e = l.alternate, e !== null && gs(e) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), zr(
          t,
          !1,
          a,
          l,
          u,
          n
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && gs(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = l, l = a, a = e;
        }
        zr(
          t,
          !0,
          l,
          null,
          u,
          n
        );
        break;
      case "together":
        zr(
          t,
          !1,
          null,
          null,
          void 0,
          n
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function rn(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), In |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (mu(
          e,
          t,
          l,
          !1
        ), (l & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, l = ln(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = ln(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function Dr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && cs(e)));
  }
  function fy(e, t, l) {
    switch (t.tag) {
      case 3:
        rt(t, t.stateNode.containerInfo), Qn(t, et, e.memoizedState.cache), Ca();
        break;
      case 27:
      case 5:
        oa(t);
        break;
      case 4:
        rt(t, t.stateNode.containerInfo);
        break;
      case 10:
        Qn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, ar(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Jn(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Od(e, t, l) : (Jn(t), e = rn(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Jn(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (n = (l & t.childLanes) !== 0, n || (mu(
          e,
          t,
          l,
          !1
        ), n = (l & t.childLanes) !== 0), a) {
          if (n)
            return Md(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), H(Ve, Ve.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, _d(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        Qn(t, et, e.memoizedState.cache);
    }
    return rn(e, t, l);
  }
  function qd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        lt = !0;
      else {
        if (!Dr(e, l) && (t.flags & 128) === 0)
          return lt = !1, fy(
            e,
            t,
            l
          );
        lt = (e.flags & 131072) !== 0;
      }
    else
      lt = !1, de && (t.flags & 1048576) !== 0 && rf(t, ti, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = Da(t.elementType), t.type = e, typeof e == "function")
            Lc(e) ? (n = wa(e, n), t.tag = 1, t = xd(
              null,
              t,
              e,
              n,
              l
            )) : (t.tag = 0, t = xr(
              null,
              t,
              e,
              n,
              l
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === ft) {
                t.tag = 11, t = bd(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              } else if (a === le) {
                t.tag = 14, t = Sd(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              }
            }
            throw t = zt(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return xr(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return n = t.type, a = wa(
          n,
          t.pendingProps
        ), xd(
          e,
          t,
          n,
          a,
          l
        );
      case 3:
        e: {
          if (rt(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          n = t.pendingProps;
          var u = t.memoizedState;
          a = u.element, Pc(e, t), ri(t, n, null, l);
          var c = t.memoizedState;
          if (n = c.cache, Qn(t, et, n), n !== u.cache && Kc(
            t,
            [et],
            l,
            !0
          ), ci(), n = c.element, u.isDehydrated)
            if (u = {
              element: n,
              isDehydrated: !1,
              cache: c.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Rd(
                e,
                t,
                n,
                l
              );
              break e;
            } else if (n !== a) {
              a = bl(
                Error(r(424)),
                t
              ), li(a), t = Rd(
                e,
                t,
                n,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Oe = Tl(e.firstChild), dt = t, de = !0, Xn = null, _l = !0, l = _f(
                t,
                null,
                n,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ca(), n === a) {
              t = rn(
                e,
                t,
                l
              );
              break e;
            }
            mt(e, t, n, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Rs(e, t), e === null ? (l = Xh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : de || (l = t.type, e = t.pendingProps, n = Qs(
          K.current
        ).createElement(l), n[Ge] = t, n[$e] = e, yt(n, l, e), Ae(n), t.stateNode = n) : t.memoizedState = Xh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return oa(t), e === null && de && (n = t.stateNode = Hh(
          t.type,
          t.pendingProps,
          K.current
        ), dt = t, _l = !0, a = Oe, na(t.type) ? (ho = a, Oe = Tl(n.firstChild)) : Oe = a), mt(
          e,
          t,
          t.pendingProps.children,
          l
        ), Rs(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && de && ((a = n = Oe) && (n = Gy(
          n,
          t.type,
          t.pendingProps,
          _l
        ), n !== null ? (t.stateNode = n, dt = t, Oe = Tl(n.firstChild), _l = !1, a = !0) : a = !1), a || kn(t)), oa(t), a = t.type, u = t.pendingProps, c = e !== null ? e.memoizedProps : null, n = u.children, so(a, u) ? n = null : c !== null && so(a, c) && (t.flags |= 32), t.memoizedState !== null && (a = ir(
          e,
          t,
          ly,
          null,
          null,
          l
        ), Ci._currentValue = a), Rs(e, t), mt(e, t, n, l), t.child;
      case 6:
        return e === null && de && ((e = l = Oe) && (l = Xy(
          l,
          t.pendingProps,
          _l
        ), l !== null ? (t.stateNode = l, dt = t, Oe = null, e = !0) : e = !1), e || kn(t)), null;
      case 13:
        return Od(e, t, l);
      case 4:
        return rt(
          t,
          t.stateNode.containerInfo
        ), n = t.pendingProps, e === null ? t.child = ja(
          t,
          null,
          n,
          l
        ) : mt(e, t, n, l), t.child;
      case 11:
        return bd(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return mt(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return mt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return mt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return n = t.pendingProps, Qn(t, t.type, n.value), mt(e, t, n.children, l), t.child;
      case 9:
        return a = t.type._context, n = t.pendingProps.children, qa(t), a = ht(a), n = n(a), t.flags |= 1, mt(e, t, n, l), t.child;
      case 14:
        return Sd(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return Ed(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return Md(e, t, l);
      case 31:
        return oy(e, t, l);
      case 22:
        return _d(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return qa(t), n = ht(et), e === null ? (a = Fc(), a === null && (a = Re, u = Jc(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= l), a = u), t.memoizedState = { parent: n, cache: a }, Ic(t), Qn(t, et, a)) : ((e.lanes & l) !== 0 && (Pc(e, t), ri(t, null, null, l), ci()), a = e.memoizedState, u = t.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), Qn(t, et, n)) : (n = u.cache, Qn(t, et, n), n !== a.cache && Kc(
          t,
          [et],
          l,
          !0
        ))), mt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function on(e) {
    e.flags |= 4;
  }
  function Ur(e, t, l, n, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (ah()) e.flags |= 8192;
        else
          throw Ua = ds, $c;
    } else e.flags &= -16777217;
  }
  function zd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Kh(t))
      if (ah()) e.flags |= 8192;
      else
        throw Ua = ds, $c;
  }
  function Cs(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? se() : 536870912, e.lanes |= t, xu |= t);
  }
  function yi(e, t) {
    if (!de)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var n = null; l !== null; )
            l.alternate !== null && (n = l), l = l.sibling;
          n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
      }
  }
  function Ce(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
    if (t)
      for (var a = e.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = e, a = a.sibling;
    else
      for (a = e.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= n, e.childLanes = l, t;
  }
  function dy(e, t, l) {
    var n = t.pendingProps;
    switch (Xc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ce(t), null;
      case 1:
        return Ce(t), null;
      case 3:
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), un(et), F(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (hu(t) ? on(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Qc())), Ce(t), null;
      case 26:
        var a = t.type, u = t.memoizedState;
        return e === null ? (on(t), u !== null ? (Ce(t), zd(t, u)) : (Ce(t), Ur(
          t,
          a,
          null,
          n,
          l
        ))) : u ? u !== e.memoizedState ? (on(t), Ce(t), zd(t, u)) : (Ce(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && on(t), Ce(t), Ur(
          t,
          a,
          e,
          n,
          l
        )), null;
      case 27:
        if (bn(t), l = K.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && on(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Ce(t), null;
          }
          e = D.current, hu(t) ? ff(t) : (e = Hh(a, n, l), t.stateNode = e, on(t));
        }
        return Ce(t), null;
      case 5:
        if (bn(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && on(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Ce(t), null;
          }
          if (u = D.current, hu(t))
            ff(t);
          else {
            var c = Qs(
              K.current
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
            u[Ge] = t, u[$e] = n;
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
            e: switch (yt(u, a, n), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && on(t);
          }
        }
        return Ce(t), Ur(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== n && on(t);
        else {
          if (typeof n != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = K.current, hu(t)) {
            if (e = t.stateNode, l = t.memoizedProps, n = null, a = dt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            e[Ge] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Oh(e.nodeValue, l)), e || kn(t, !0);
          } else
            e = Qs(e).createTextNode(
              n
            ), e[Ge] = t, t.stateNode = e;
        }
        return Ce(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (n = hu(t), l !== null) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[Ge] = t;
            } else
              Ca(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ce(t), e = !1;
          } else
            l = Qc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (tl(t), t) : (tl(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Ce(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = hu(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[Ge] = t;
            } else
              Ca(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ce(t), a = !1;
          } else
            a = Qc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (tl(t), t) : (tl(t), null);
        }
        return tl(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = n !== null, e = e !== null && e.memoizedState !== null, l && (n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== a && (n.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Cs(t, t.updateQueue), Ce(t), null);
      case 4:
        return F(), e === null && lo(t.stateNode.containerInfo), Ce(t), null;
      case 10:
        return un(t.type), Ce(t), null;
      case 19:
        if (N(Ve), n = t.memoizedState, n === null) return Ce(t), null;
        if (a = (t.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) yi(n, !1);
          else {
            if (Le !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = gs(e), u !== null) {
                  for (t.flags |= 128, yi(n, !1), e = u.updateQueue, t.updateQueue = e, Cs(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    uf(l, e), l = l.sibling;
                  return H(
                    Ve,
                    Ve.current & 1 | 2
                  ), de && nn(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && vt() > Us && (t.flags |= 128, a = !0, yi(n, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = gs(u), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Cs(t, e), yi(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !de)
                return Ce(t), null;
            } else
              2 * vt() - n.renderingStartTime > Us && l !== 536870912 && (t.flags |= 128, a = !0, yi(n, !1), t.lanes = 4194304);
          n.isBackwards ? (u.sibling = t.child, t.child = u) : (e = n.last, e !== null ? e.sibling = u : t.child = u, n.last = u);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = vt(), e.sibling = null, l = Ve.current, H(
          Ve,
          a ? l & 1 | 2 : l & 1
        ), de && nn(t, n.treeForkCount), e) : (Ce(t), null);
      case 22:
      case 23:
        return tl(t), nr(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t), l = t.updateQueue, l !== null && Cs(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && N(za), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), un(et), Ce(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function hy(e, t) {
    switch (Xc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return un(et), F(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return bn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (tl(t), t.alternate === null)
            throw Error(r(340));
          Ca();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (tl(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          Ca();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return N(Ve), null;
      case 4:
        return F(), null;
      case 10:
        return un(t.type), null;
      case 22:
      case 23:
        return tl(t), nr(), e !== null && N(za), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return un(et), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Dd(e, t) {
    switch (Xc(t), t.tag) {
      case 3:
        un(et), F();
        break;
      case 26:
      case 27:
      case 5:
        bn(t);
        break;
      case 4:
        F();
        break;
      case 31:
        t.memoizedState !== null && tl(t);
        break;
      case 13:
        tl(t);
        break;
      case 19:
        N(Ve);
        break;
      case 10:
        un(t.type);
        break;
      case 22:
      case 23:
        tl(t), nr(), e !== null && N(za);
        break;
      case 24:
        un(et);
    }
  }
  function gi(e, t) {
    try {
      var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        l = a;
        do {
          if ((l.tag & e) === e) {
            n = void 0;
            var u = l.create, c = l.inst;
            n = u(), c.destroy = n;
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (d) {
      _e(t, t.return, d);
    }
  }
  function Fn(e, t, l) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        n = u;
        do {
          if ((n.tag & e) === e) {
            var c = n.inst, d = c.destroy;
            if (d !== void 0) {
              c.destroy = void 0, a = t;
              var m = l, _ = d;
              try {
                _();
              } catch (R) {
                _e(
                  a,
                  m,
                  R
                );
              }
            }
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (R) {
      _e(t, t.return, R);
    }
  }
  function Ud(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Tf(t, l);
      } catch (n) {
        _e(e, e.return, n);
      }
    }
  }
  function jd(e, t, l) {
    l.props = wa(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      _e(e, t, n);
    }
  }
  function pi(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(n) : l.current = n;
      }
    } catch (a) {
      _e(e, t, a);
    }
  }
  function Ql(e, t) {
    var l = e.ref, n = e.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          _e(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          _e(e, t, a);
        }
      else l.current = null;
  }
  function Bd(e) {
    var t = e.type, l = e.memoizedProps, n = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break e;
        case "img":
          l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (a) {
      _e(e, e.return, a);
    }
  }
  function jr(e, t, l) {
    try {
      var n = e.stateNode;
      jy(n, e.type, l, t), n[$e] = t;
    } catch (a) {
      _e(e, e.return, a);
    }
  }
  function wd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && na(e.type) || e.tag === 4;
  }
  function Br(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || wd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && na(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function wr(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = ke));
    else if (n !== 4 && (n === 27 && na(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (wr(e, t, l), e = e.sibling; e !== null; )
        wr(e, t, l), e = e.sibling;
  }
  function Ms(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && (n === 27 && na(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Ms(e, t, l), e = e.sibling; e !== null; )
        Ms(e, t, l), e = e.sibling;
  }
  function Ld(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var n = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      yt(t, n, l), t[Ge] = e, t[$e] = l;
    } catch (u) {
      _e(e, e.return, u);
    }
  }
  var fn = !1, nt = !1, Lr = !1, Hd = typeof WeakSet == "function" ? WeakSet : Set, ot = null;
  function my(e, t) {
    if (e = e.containerInfo, uo = $s, e = Fo(e), qc(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var a = n.anchorOffset, u = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break e;
            }
            var c = 0, d = -1, m = -1, _ = 0, R = 0, M = e, A = null;
            t: for (; ; ) {
              for (var T; M !== l || a !== 0 && M.nodeType !== 3 || (d = c + a), M !== u || n !== 0 && M.nodeType !== 3 || (m = c + n), M.nodeType === 3 && (c += M.nodeValue.length), (T = M.firstChild) !== null; )
                A = M, M = T;
              for (; ; ) {
                if (M === e) break t;
                if (A === l && ++_ === a && (d = c), A === u && ++R === n && (m = c), (T = M.nextSibling) !== null) break;
                M = A, A = M.parentNode;
              }
              M = T;
            }
            l = d === -1 || m === -1 ? null : { start: d, end: m };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (io = { focusedElem: e, selectionRange: l }, $s = !1, ot = t; ot !== null; )
      if (t = ot, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ot = e;
      else
        for (; ot !== null; ) {
          switch (t = ot, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (l = 0; l < e.length; l++)
                  a = e[l], a.ref.impl = a.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, l = t, a = u.memoizedProps, u = u.memoizedState, n = l.stateNode;
                try {
                  var Y = wa(
                    l.type,
                    a
                  );
                  e = n.getSnapshotBeforeUpdate(
                    Y,
                    u
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (J) {
                  _e(
                    l,
                    l.return,
                    J
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  ro(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ro(e);
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
            e.return = t.return, ot = e;
            break;
          }
          ot = t.return;
        }
  }
  function Yd(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        hn(e, l), n & 4 && gi(5, l);
        break;
      case 1:
        if (hn(e, l), n & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (c) {
              _e(l, l.return, c);
            }
          else {
            var a = wa(
              l.type,
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
              _e(
                l,
                l.return,
                c
              );
            }
          }
        n & 64 && Ud(l), n & 512 && pi(l, l.return);
        break;
      case 3:
        if (hn(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Tf(e, t);
          } catch (c) {
            _e(l, l.return, c);
          }
        }
        break;
      case 27:
        t === null && n & 4 && Ld(l);
      case 26:
      case 5:
        hn(e, l), t === null && n & 4 && Bd(l), n & 512 && pi(l, l.return);
        break;
      case 12:
        hn(e, l);
        break;
      case 31:
        hn(e, l), n & 4 && kd(e, l);
        break;
      case 13:
        hn(e, l), n & 4 && Qd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Ay.bind(
          null,
          l
        ), ky(e, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || fn, !n) {
          t = t !== null && t.memoizedState !== null || nt, a = fn;
          var u = nt;
          fn = n, (nt = t) && !u ? mn(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : hn(e, l), fn = a, nt = u;
        }
        break;
      case 30:
        break;
      default:
        hn(e, l);
    }
  }
  function Gd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Gd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && va(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var ze = null, Yt = !1;
  function dn(e, t, l) {
    for (l = l.child; l !== null; )
      Xd(e, t, l), l = l.sibling;
  }
  function Xd(e, t, l) {
    if (St && typeof St.onCommitFiberUnmount == "function")
      try {
        St.onCommitFiberUnmount(En, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        nt || Ql(l, t), dn(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        nt || Ql(l, t);
        var n = ze, a = Yt;
        na(l.type) && (ze = l.stateNode, Yt = !1), dn(
          e,
          t,
          l
        ), xi(l.stateNode), ze = n, Yt = a;
        break;
      case 5:
        nt || Ql(l, t);
      case 6:
        if (n = ze, a = Yt, ze = null, dn(
          e,
          t,
          l
        ), ze = n, Yt = a, ze !== null)
          if (Yt)
            try {
              (ze.nodeType === 9 ? ze.body : ze.nodeName === "HTML" ? ze.ownerDocument.body : ze).removeChild(l.stateNode);
            } catch (u) {
              _e(
                l,
                t,
                u
              );
            }
          else
            try {
              ze.removeChild(l.stateNode);
            } catch (u) {
              _e(
                l,
                t,
                u
              );
            }
        break;
      case 18:
        ze !== null && (Yt ? (e = ze, Uh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Uu(e)) : Uh(ze, l.stateNode));
        break;
      case 4:
        n = ze, a = Yt, ze = l.stateNode.containerInfo, Yt = !0, dn(
          e,
          t,
          l
        ), ze = n, Yt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Fn(2, l, t), nt || Fn(4, l, t), dn(
          e,
          t,
          l
        );
        break;
      case 1:
        nt || (Ql(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && jd(
          l,
          t,
          n
        )), dn(
          e,
          t,
          l
        );
        break;
      case 21:
        dn(
          e,
          t,
          l
        );
        break;
      case 22:
        nt = (n = nt) || l.memoizedState !== null, dn(
          e,
          t,
          l
        ), nt = n;
        break;
      default:
        dn(
          e,
          t,
          l
        );
    }
  }
  function kd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Uu(e);
      } catch (l) {
        _e(t, t.return, l);
      }
    }
  }
  function Qd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Uu(e);
      } catch (l) {
        _e(t, t.return, l);
      }
  }
  function yy(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Hd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Hd()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function qs(e, t) {
    var l = yy(e);
    t.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = Ty.bind(null, e, n);
        n.then(a, a);
      }
    });
  }
  function Gt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], u = e, c = t, d = c;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (na(d.type)) {
                ze = d.stateNode, Yt = !1;
                break e;
              }
              break;
            case 5:
              ze = d.stateNode, Yt = !1;
              break e;
            case 3:
            case 4:
              ze = d.stateNode.containerInfo, Yt = !0;
              break e;
          }
          d = d.return;
        }
        if (ze === null) throw Error(r(160));
        Xd(u, c, a), ze = null, Yt = !1, u = a.alternate, u !== null && (u.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Vd(t, e), t = t.sibling;
  }
  var Dl = null;
  function Vd(e, t) {
    var l = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Gt(t, e), Xt(e), n & 4 && (Fn(3, e, e.return), gi(3, e), Fn(5, e, e.return));
        break;
      case 1:
        Gt(t, e), Xt(e), n & 512 && (nt || l === null || Ql(l, l.return)), n & 64 && fn && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = Dl;
        if (Gt(t, e), Xt(e), n & 512 && (nt || l === null || Ql(l, l.return)), n & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (n = e.memoizedState, l === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (n) {
                    case "title":
                      u = a.getElementsByTagName("title")[0], (!u || u[Kt] || u[Ge] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(n), a.head.insertBefore(
                        u,
                        a.querySelector("head > title")
                      )), yt(u, n, l), u[Ge] = e, Ae(u), n = u;
                      break e;
                    case "link":
                      var c = Vh(
                        "link",
                        "href",
                        a
                      ).get(n + (l.href || ""));
                      if (c) {
                        for (var d = 0; d < c.length; d++)
                          if (u = c[d], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            c.splice(d, 1);
                            break t;
                          }
                      }
                      u = a.createElement(n), yt(u, n, l), a.head.appendChild(u);
                      break;
                    case "meta":
                      if (c = Vh(
                        "meta",
                        "content",
                        a
                      ).get(n + (l.content || ""))) {
                        for (d = 0; d < c.length; d++)
                          if (u = c[d], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            c.splice(d, 1);
                            break t;
                          }
                      }
                      u = a.createElement(n), yt(u, n, l), a.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, n));
                  }
                  u[Ge] = e, Ae(u), n = u;
                }
                e.stateNode = n;
              } else
                Zh(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Qh(
                a,
                n,
                e.memoizedProps
              );
          else
            u !== n ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, n === null ? Zh(
              a,
              e.type,
              e.stateNode
            ) : Qh(
              a,
              n,
              e.memoizedProps
            )) : n === null && e.stateNode !== null && jr(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        Gt(t, e), Xt(e), n & 512 && (nt || l === null || Ql(l, l.return)), l !== null && n & 4 && jr(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (Gt(t, e), Xt(e), n & 512 && (nt || l === null || Ql(l, l.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            zn(a, "");
          } catch (Y) {
            _e(e, e.return, Y);
          }
        }
        n & 4 && e.stateNode != null && (a = e.memoizedProps, jr(
          e,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (Lr = !0);
        break;
      case 6:
        if (Gt(t, e), Xt(e), n & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          n = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = n;
          } catch (Y) {
            _e(e, e.return, Y);
          }
        }
        break;
      case 3:
        if (Ks = null, a = Dl, Dl = Vs(t.containerInfo), Gt(t, e), Dl = a, Xt(e), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Uu(t.containerInfo);
          } catch (Y) {
            _e(e, e.return, Y);
          }
        Lr && (Lr = !1, Zd(e));
        break;
      case 4:
        n = Dl, Dl = Vs(
          e.stateNode.containerInfo
        ), Gt(t, e), Xt(e), Dl = n;
        break;
      case 12:
        Gt(t, e), Xt(e);
        break;
      case 31:
        Gt(t, e), Xt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, qs(e, n)));
        break;
      case 13:
        Gt(t, e), Xt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Ds = vt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, qs(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var m = l !== null && l.memoizedState !== null, _ = fn, R = nt;
        if (fn = _ || a, nt = R || m, Gt(t, e), nt = R, fn = _, Xt(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || m || fn || nt || La(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                m = l = t;
                try {
                  if (u = m.stateNode, a)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    d = m.stateNode;
                    var M = m.memoizedProps.style, A = M != null && M.hasOwnProperty("display") ? M.display : null;
                    d.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim();
                  }
                } catch (Y) {
                  _e(m, m.return, Y);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                m = t;
                try {
                  m.stateNode.nodeValue = a ? "" : m.memoizedProps;
                } catch (Y) {
                  _e(m, m.return, Y);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                m = t;
                try {
                  var T = m.stateNode;
                  a ? jh(T, !0) : jh(m.stateNode, !1);
                } catch (Y) {
                  _e(m, m.return, Y);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), t = t.return;
            }
            l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
          }
        n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, qs(e, l))));
        break;
      case 19:
        Gt(t, e), Xt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, qs(e, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Gt(t, e), Xt(e);
    }
  }
  function Xt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, n = e.return; n !== null; ) {
          if (wd(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, u = Br(e);
            Ms(e, u, a);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (zn(c, ""), l.flags &= -33);
            var d = Br(e);
            Ms(e, d, c);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo, _ = Br(e);
            wr(
              e,
              _,
              m
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (R) {
        _e(e, e.return, R);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Zd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Zd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function hn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Yd(e, t.alternate, t), t = t.sibling;
  }
  function La(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Fn(4, t, t.return), La(t);
          break;
        case 1:
          Ql(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && jd(
            t,
            t.return,
            l
          ), La(t);
          break;
        case 27:
          xi(t.stateNode);
        case 26:
        case 5:
          Ql(t, t.return), La(t);
          break;
        case 22:
          t.memoizedState === null && La(t);
          break;
        case 30:
          La(t);
          break;
        default:
          La(t);
      }
      e = e.sibling;
    }
  }
  function mn(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate, a = e, u = t, c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          mn(
            a,
            u,
            l
          ), gi(4, u);
          break;
        case 1:
          if (mn(
            a,
            u,
            l
          ), n = u, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (_) {
              _e(n, n.return, _);
            }
          if (n = u, a = n.updateQueue, a !== null) {
            var d = n.stateNode;
            try {
              var m = a.shared.hiddenCallbacks;
              if (m !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < m.length; a++)
                  Af(m[a], d);
            } catch (_) {
              _e(n, n.return, _);
            }
          }
          l && c & 64 && Ud(u), pi(u, u.return);
          break;
        case 27:
          Ld(u);
        case 26:
        case 5:
          mn(
            a,
            u,
            l
          ), l && n === null && c & 4 && Bd(u), pi(u, u.return);
          break;
        case 12:
          mn(
            a,
            u,
            l
          );
          break;
        case 31:
          mn(
            a,
            u,
            l
          ), l && c & 4 && kd(a, u);
          break;
        case 13:
          mn(
            a,
            u,
            l
          ), l && c & 4 && Qd(a, u);
          break;
        case 22:
          u.memoizedState === null && mn(
            a,
            u,
            l
          ), pi(u, u.return);
          break;
        case 30:
          break;
        default:
          mn(
            a,
            u,
            l
          );
      }
      t = t.sibling;
    }
  }
  function Hr(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && ni(l));
  }
  function Yr(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ni(e));
  }
  function Ul(e, t, l, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Kd(
          e,
          t,
          l,
          n
        ), t = t.sibling;
  }
  function Kd(e, t, l, n) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ul(
          e,
          t,
          l,
          n
        ), a & 2048 && gi(9, t);
        break;
      case 1:
        Ul(
          e,
          t,
          l,
          n
        );
        break;
      case 3:
        Ul(
          e,
          t,
          l,
          n
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ni(e)));
        break;
      case 12:
        if (a & 2048) {
          Ul(
            e,
            t,
            l,
            n
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, c = u.id, d = u.onPostCommit;
            typeof d == "function" && d(
              c,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (m) {
            _e(t, t.return, m);
          }
        } else
          Ul(
            e,
            t,
            l,
            n
          );
        break;
      case 31:
        Ul(
          e,
          t,
          l,
          n
        );
        break;
      case 13:
        Ul(
          e,
          t,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, c = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Ul(
          e,
          t,
          l,
          n
        ) : vi(e, t) : u._visibility & 2 ? Ul(
          e,
          t,
          l,
          n
        ) : (u._visibility |= 2, Au(
          e,
          t,
          l,
          n,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && Hr(c, t);
        break;
      case 24:
        Ul(
          e,
          t,
          l,
          n
        ), a & 2048 && Yr(t.alternate, t);
        break;
      default:
        Ul(
          e,
          t,
          l,
          n
        );
    }
  }
  function Au(e, t, l, n, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, c = t, d = l, m = n, _ = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Au(
            u,
            c,
            d,
            m,
            a
          ), gi(8, c);
          break;
        case 23:
          break;
        case 22:
          var R = c.stateNode;
          c.memoizedState !== null ? R._visibility & 2 ? Au(
            u,
            c,
            d,
            m,
            a
          ) : vi(
            u,
            c
          ) : (R._visibility |= 2, Au(
            u,
            c,
            d,
            m,
            a
          )), a && _ & 2048 && Hr(
            c.alternate,
            c
          );
          break;
        case 24:
          Au(
            u,
            c,
            d,
            m,
            a
          ), a && _ & 2048 && Yr(c.alternate, c);
          break;
        default:
          Au(
            u,
            c,
            d,
            m,
            a
          );
      }
      t = t.sibling;
    }
  }
  function vi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, n = t, a = n.flags;
        switch (n.tag) {
          case 22:
            vi(l, n), a & 2048 && Hr(
              n.alternate,
              n
            );
            break;
          case 24:
            vi(l, n), a & 2048 && Yr(n.alternate, n);
            break;
          default:
            vi(l, n);
        }
        t = t.sibling;
      }
  }
  var bi = 8192;
  function Tu(e, t, l) {
    if (e.subtreeFlags & bi)
      for (e = e.child; e !== null; )
        Jd(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function Jd(e, t, l) {
    switch (e.tag) {
      case 26:
        Tu(
          e,
          t,
          l
        ), e.flags & bi && e.memoizedState !== null && tg(
          l,
          Dl,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Tu(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var n = Dl;
        Dl = Vs(e.stateNode.containerInfo), Tu(
          e,
          t,
          l
        ), Dl = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = bi, bi = 16777216, Tu(
          e,
          t,
          l
        ), bi = n) : Tu(
          e,
          t,
          l
        ));
        break;
      default:
        Tu(
          e,
          t,
          l
        );
    }
  }
  function Wd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Si(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          ot = n, $d(
            n,
            e
          );
        }
      Wd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Fd(e), e = e.sibling;
  }
  function Fd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Si(e), e.flags & 2048 && Fn(9, e, e.return);
        break;
      case 3:
        Si(e);
        break;
      case 12:
        Si(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, zs(e)) : Si(e);
        break;
      default:
        Si(e);
    }
  }
  function zs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          ot = n, $d(
            n,
            e
          );
        }
      Wd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Fn(8, t, t.return), zs(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, zs(t));
          break;
        default:
          zs(t);
      }
      e = e.sibling;
    }
  }
  function $d(e, t) {
    for (; ot !== null; ) {
      var l = ot;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Fn(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          ni(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, ot = n;
      else
        e: for (l = e; ot !== null; ) {
          n = ot;
          var a = n.sibling, u = n.return;
          if (Gd(n), n === l) {
            ot = null;
            break e;
          }
          if (a !== null) {
            a.return = u, ot = a;
            break e;
          }
          ot = u;
        }
    }
  }
  var gy = {
    getCacheForType: function(e) {
      var t = ht(et), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return ht(et).controller.signal;
    }
  }, py = typeof WeakMap == "function" ? WeakMap : Map, be = 0, Re = null, ce = null, oe = 0, Ee = 0, ll = null, $n = !1, Nu = !1, Gr = !1, yn = 0, Le = 0, In = 0, Ha = 0, Xr = 0, nl = 0, xu = 0, Ei = null, kt = null, kr = !1, Ds = 0, Id = 0, Us = 1 / 0, js = null, Pn = null, ut = 0, ea = null, Ru = null, gn = 0, Qr = 0, Vr = null, Pd = null, _i = 0, Zr = null;
  function al() {
    return (be & 2) !== 0 && oe !== 0 ? oe & -oe : x.T !== null ? Ir() : pa();
  }
  function eh() {
    if (nl === 0)
      if ((oe & 536870912) === 0 || de) {
        var e = P;
        P <<= 1, (P & 3932160) === 0 && (P = 262144), nl = e;
      } else nl = 536870912;
    return e = el.current, e !== null && (e.flags |= 32), nl;
  }
  function Qt(e, t, l) {
    (e === Re && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null) && (Ou(e, 0), ta(
      e,
      oe,
      nl,
      !1
    )), ya(e, l), ((be & 2) === 0 || e !== Re) && (e === Re && ((be & 2) === 0 && (Ha |= l), Le === 4 && ta(
      e,
      oe,
      nl,
      !1
    )), Vl(e));
  }
  function th(e, t, l) {
    if ((be & 6) !== 0) throw Error(r(327));
    var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ha(e, t), a = n ? Sy(e, t) : Jr(e, t, !0), u = n;
    do {
      if (a === 0) {
        Nu && !n && ta(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, u && !vy(l)) {
          a = Jr(e, t, !1), u = !1;
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
              a = Ei;
              var m = d.current.memoizedState.isDehydrated;
              if (m && (Ou(d, c).flags |= 256), c = Jr(
                d,
                c,
                !1
              ), c !== 2) {
                if (Gr && !m) {
                  d.errorRecoveryDisabledLanes |= u, Ha |= u, a = 4;
                  break e;
                }
                u = kt, kt = a, u !== null && (kt === null ? kt = u : kt.push.apply(
                  kt,
                  u
                ));
              }
              a = c;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          Ou(e, 0), ta(e, t, 0, !0);
          break;
        }
        e: {
          switch (n = e, u = a, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ta(
                n,
                t,
                nl,
                !$n
              );
              break e;
            case 2:
              kt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (a = Ds + 300 - vt(), 10 < a)) {
            if (ta(
              n,
              t,
              nl,
              !$n
            ), Cl(n, 0, !0) !== 0) break e;
            gn = t, n.timeoutHandle = zh(
              lh.bind(
                null,
                n,
                l,
                kt,
                js,
                kr,
                t,
                nl,
                Ha,
                xu,
                $n,
                u,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          lh(
            n,
            l,
            kt,
            js,
            kr,
            t,
            nl,
            Ha,
            xu,
            $n,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Vl(e);
  }
  function lh(e, t, l, n, a, u, c, d, m, _, R, M, A, T) {
    if (e.timeoutHandle = -1, M = t.subtreeFlags, M & 8192 || (M & 16785408) === 16785408) {
      M = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ke
      }, Jd(
        t,
        u,
        M
      );
      var Y = (u & 62914560) === u ? Ds - vt() : (u & 4194048) === u ? Id - vt() : 0;
      if (Y = lg(
        M,
        Y
      ), Y !== null) {
        gn = u, e.cancelPendingCommit = Y(
          oh.bind(
            null,
            e,
            t,
            u,
            l,
            n,
            a,
            c,
            d,
            m,
            R,
            M,
            null,
            A,
            T
          )
        ), ta(e, u, c, !_);
        return;
      }
    }
    oh(
      e,
      t,
      u,
      l,
      n,
      a,
      c,
      d,
      m
    );
  }
  function vy(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var n = 0; n < l.length; n++) {
          var a = l[n], u = a.getSnapshot;
          a = a.value;
          try {
            if (!It(u(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null)
        l.return = t, t = l;
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
  function ta(e, t, l, n) {
    t &= ~Xr, t &= ~Ha, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var u = 31 - Ye(a), c = 1 << u;
      n[u] = -1, a &= ~c;
    }
    l !== 0 && Et(e, l, t);
  }
  function Bs() {
    return (be & 6) === 0 ? (Ai(0), !1) : !0;
  }
  function Kr() {
    if (ce !== null) {
      if (Ee === 0)
        var e = ce.return;
      else
        e = ce, an = Ma = null, rr(e), vu = null, ui = 0, e = ce;
      for (; e !== null; )
        Dd(e.alternate, e), e = e.return;
      ce = null;
    }
  }
  function Ou(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, Ly(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), gn = 0, Kr(), Re = e, ce = l = ln(e.current, null), oe = t, Ee = 0, ll = null, $n = !1, Nu = ha(e, t), Gr = !1, xu = nl = Xr = Ha = In = Le = 0, kt = Ei = null, kr = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - Ye(n), u = 1 << a;
        t |= e[a], n &= ~u;
      }
    return yn = t, ns(), l;
  }
  function nh(e, t) {
    te = null, x.H = hi, t === pu || t === fs ? (t = bf(), Ee = 3) : t === $c ? (t = bf(), Ee = 4) : Ee = t === Nr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ll = t, ce === null && (Le = 1, Ns(
      e,
      bl(t, e.current)
    ));
  }
  function ah() {
    var e = el.current;
    return e === null ? !0 : (oe & 4194048) === oe ? Al === null : (oe & 62914560) === oe || (oe & 536870912) !== 0 ? e === Al : !1;
  }
  function uh() {
    var e = x.H;
    return x.H = hi, e === null ? hi : e;
  }
  function ih() {
    var e = x.A;
    return x.A = gy, e;
  }
  function ws() {
    Le = 4, $n || (oe & 4194048) !== oe && el.current !== null || (Nu = !0), (In & 134217727) === 0 && (Ha & 134217727) === 0 || Re === null || ta(
      Re,
      oe,
      nl,
      !1
    );
  }
  function Jr(e, t, l) {
    var n = be;
    be |= 2;
    var a = uh(), u = ih();
    (Re !== e || oe !== t) && (js = null, Ou(e, t)), t = !1;
    var c = Le;
    e: do
      try {
        if (Ee !== 0 && ce !== null) {
          var d = ce, m = ll;
          switch (Ee) {
            case 8:
              Kr(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              el.current === null && (t = !0);
              var _ = Ee;
              if (Ee = 0, ll = null, Cu(e, d, m, _), l && Nu) {
                c = 0;
                break e;
              }
              break;
            default:
              _ = Ee, Ee = 0, ll = null, Cu(e, d, m, _);
          }
        }
        by(), c = Le;
        break;
      } catch (R) {
        nh(e, R);
      }
    while (!0);
    return t && e.shellSuspendCounter++, an = Ma = null, be = n, x.H = a, x.A = u, ce === null && (Re = null, oe = 0, ns()), c;
  }
  function by() {
    for (; ce !== null; ) sh(ce);
  }
  function Sy(e, t) {
    var l = be;
    be |= 2;
    var n = uh(), a = ih();
    Re !== e || oe !== t ? (js = null, Us = vt() + 500, Ou(e, t)) : Nu = ha(
      e,
      t
    );
    e: do
      try {
        if (Ee !== 0 && ce !== null) {
          t = ce;
          var u = ll;
          t: switch (Ee) {
            case 1:
              Ee = 0, ll = null, Cu(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (pf(u)) {
                Ee = 0, ll = null, ch(t);
                break;
              }
              t = function() {
                Ee !== 2 && Ee !== 9 || Re !== e || (Ee = 7), Vl(e);
              }, u.then(t, t);
              break e;
            case 3:
              Ee = 7;
              break e;
            case 4:
              Ee = 5;
              break e;
            case 7:
              pf(u) ? (Ee = 0, ll = null, ch(t)) : (Ee = 0, ll = null, Cu(e, t, u, 7));
              break;
            case 5:
              var c = null;
              switch (ce.tag) {
                case 26:
                  c = ce.memoizedState;
                case 5:
                case 27:
                  var d = ce;
                  if (c ? Kh(c) : d.stateNode.complete) {
                    Ee = 0, ll = null;
                    var m = d.sibling;
                    if (m !== null) ce = m;
                    else {
                      var _ = d.return;
                      _ !== null ? (ce = _, Ls(_)) : ce = null;
                    }
                    break t;
                  }
              }
              Ee = 0, ll = null, Cu(e, t, u, 5);
              break;
            case 6:
              Ee = 0, ll = null, Cu(e, t, u, 6);
              break;
            case 8:
              Kr(), Le = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        Ey();
        break;
      } catch (R) {
        nh(e, R);
      }
    while (!0);
    return an = Ma = null, x.H = n, x.A = a, be = l, ce !== null ? 0 : (Re = null, oe = 0, ns(), Le);
  }
  function Ey() {
    for (; ce !== null && !rl(); )
      sh(ce);
  }
  function sh(e) {
    var t = qd(e.alternate, e, yn);
    e.memoizedProps = e.pendingProps, t === null ? Ls(e) : ce = t;
  }
  function ch(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Nd(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          oe
        );
        break;
      case 11:
        t = Nd(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          oe
        );
        break;
      case 5:
        rr(t);
      default:
        Dd(l, t), t = ce = uf(t, yn), t = qd(l, t, yn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Ls(e) : ce = t;
  }
  function Cu(e, t, l, n) {
    an = Ma = null, rr(t), vu = null, ui = 0;
    var a = t.return;
    try {
      if (ry(
        e,
        a,
        t,
        l,
        oe
      )) {
        Le = 1, Ns(
          e,
          bl(l, e.current)
        ), ce = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw ce = a, u;
      Le = 1, Ns(
        e,
        bl(l, e.current)
      ), ce = null;
      return;
    }
    t.flags & 32768 ? (de || n === 1 ? e = !0 : Nu || (oe & 536870912) !== 0 ? e = !1 : ($n = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = el.current, n !== null && n.tag === 13 && (n.flags |= 16384))), rh(t, e)) : Ls(t);
  }
  function Ls(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        rh(
          t,
          $n
        );
        return;
      }
      e = t.return;
      var l = dy(
        t.alternate,
        t,
        yn
      );
      if (l !== null) {
        ce = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        ce = t;
        return;
      }
      ce = t = e;
    } while (t !== null);
    Le === 0 && (Le = 5);
  }
  function rh(e, t) {
    do {
      var l = hy(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, ce = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        ce = e;
        return;
      }
      ce = e = l;
    } while (e !== null);
    Le = 6, ce = null;
  }
  function oh(e, t, l, n, a, u, c, d, m) {
    e.cancelPendingCommit = null;
    do
      Hs();
    while (ut !== 0);
    if ((be & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (u = t.lanes | t.childLanes, u |= Bc, An(
        e,
        l,
        u,
        c,
        d,
        m
      ), e === Re && (ce = Re = null, oe = 0), Ru = t, ea = e, gn = l, Qr = u, Vr = a, Pd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ny(bt, function() {
        return yh(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = x.T, x.T = null, a = L.p, L.p = 2, c = be, be |= 4;
        try {
          my(e, t, l);
        } finally {
          be = c, L.p = a, x.T = n;
        }
      }
      ut = 1, fh(), dh(), hh();
    }
  }
  function fh() {
    if (ut === 1) {
      ut = 0;
      var e = ea, t = Ru, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = x.T, x.T = null;
        var n = L.p;
        L.p = 2;
        var a = be;
        be |= 4;
        try {
          Vd(t, e);
          var u = io, c = Fo(e.containerInfo), d = u.focusedElem, m = u.selectionRange;
          if (c !== d && d && d.ownerDocument && Wo(
            d.ownerDocument.documentElement,
            d
          )) {
            if (m !== null && qc(d)) {
              var _ = m.start, R = m.end;
              if (R === void 0 && (R = _), "selectionStart" in d)
                d.selectionStart = _, d.selectionEnd = Math.min(
                  R,
                  d.value.length
                );
              else {
                var M = d.ownerDocument || document, A = M && M.defaultView || window;
                if (A.getSelection) {
                  var T = A.getSelection(), Y = d.textContent.length, J = Math.min(m.start, Y), xe = m.end === void 0 ? J : Math.min(m.end, Y);
                  !T.extend && J > xe && (c = xe, xe = J, J = c);
                  var v = Jo(
                    d,
                    J
                  ), g = Jo(
                    d,
                    xe
                  );
                  if (v && g && (T.rangeCount !== 1 || T.anchorNode !== v.node || T.anchorOffset !== v.offset || T.focusNode !== g.node || T.focusOffset !== g.offset)) {
                    var E = M.createRange();
                    E.setStart(v.node, v.offset), T.removeAllRanges(), J > xe ? (T.addRange(E), T.extend(g.node, g.offset)) : (E.setEnd(g.node, g.offset), T.addRange(E));
                  }
                }
              }
            }
            for (M = [], T = d; T = T.parentNode; )
              T.nodeType === 1 && M.push({
                element: T,
                left: T.scrollLeft,
                top: T.scrollTop
              });
            for (typeof d.focus == "function" && d.focus(), d = 0; d < M.length; d++) {
              var C = M[d];
              C.element.scrollLeft = C.left, C.element.scrollTop = C.top;
            }
          }
          $s = !!uo, io = uo = null;
        } finally {
          be = a, L.p = n, x.T = l;
        }
      }
      e.current = t, ut = 2;
    }
  }
  function dh() {
    if (ut === 2) {
      ut = 0;
      var e = ea, t = Ru, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = x.T, x.T = null;
        var n = L.p;
        L.p = 2;
        var a = be;
        be |= 4;
        try {
          Yd(e, t.alternate, t);
        } finally {
          be = a, L.p = n, x.T = l;
        }
      }
      ut = 3;
    }
  }
  function hh() {
    if (ut === 4 || ut === 3) {
      ut = 0, yc();
      var e = ea, t = Ru, l = gn, n = Pd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ut = 5 : (ut = 0, Ru = ea = null, mh(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Pn = null), wl(l), t = t.stateNode, St && typeof St.onCommitFiberRoot == "function")
        try {
          St.onCommitFiberRoot(
            En,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        t = x.T, a = L.p, L.p = 2, x.T = null;
        try {
          for (var u = e.onRecoverableError, c = 0; c < n.length; c++) {
            var d = n[c];
            u(d.value, {
              componentStack: d.stack
            });
          }
        } finally {
          x.T = t, L.p = a;
        }
      }
      (gn & 3) !== 0 && Hs(), Vl(e), a = e.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? e === Zr ? _i++ : (_i = 0, Zr = e) : _i = 0, Ai(0);
    }
  }
  function mh(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ni(t)));
  }
  function Hs() {
    return fh(), dh(), hh(), yh();
  }
  function yh() {
    if (ut !== 5) return !1;
    var e = ea, t = Qr;
    Qr = 0;
    var l = wl(gn), n = x.T, a = L.p;
    try {
      L.p = 32 > l ? 32 : l, x.T = null, l = Vr, Vr = null;
      var u = ea, c = gn;
      if (ut = 0, Ru = ea = null, gn = 0, (be & 6) !== 0) throw Error(r(331));
      var d = be;
      if (be |= 4, Fd(u.current), Kd(
        u,
        u.current,
        c,
        l
      ), be = d, Ai(0, !1), St && typeof St.onPostCommitFiberRoot == "function")
        try {
          St.onPostCommitFiberRoot(En, u);
        } catch {
        }
      return !0;
    } finally {
      L.p = a, x.T = n, mh(e, t);
    }
  }
  function gh(e, t, l) {
    t = bl(l, t), t = Tr(e.stateNode, t, 2), e = Kn(e, t, 2), e !== null && (ya(e, 2), Vl(e));
  }
  function _e(e, t, l) {
    if (e.tag === 3)
      gh(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          gh(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Pn === null || !Pn.has(n))) {
            e = bl(l, e), l = pd(2), n = Kn(t, l, 2), n !== null && (vd(
              l,
              n,
              t,
              e
            ), ya(n, 2), Vl(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function Wr(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new py();
      var a = /* @__PURE__ */ new Set();
      n.set(t, a);
    } else
      a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
    a.has(l) || (Gr = !0, a.add(l), e = _y.bind(null, e, t, l), t.then(e, e));
  }
  function _y(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Re === e && (oe & l) === l && (Le === 4 || Le === 3 && (oe & 62914560) === oe && 300 > vt() - Ds ? (be & 2) === 0 && Ou(e, 0) : Xr |= l, xu === oe && (xu = 0)), Vl(e);
  }
  function ph(e, t) {
    t === 0 && (t = se()), e = Ra(e, t), e !== null && (ya(e, t), Vl(e));
  }
  function Ay(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), ph(e, l);
  }
  function Ty(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode, a = e.memoizedState;
        a !== null && (l = a.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    n !== null && n.delete(t), ph(e, l);
  }
  function Ny(e, t) {
    return Dt(e, t);
  }
  var Ys = null, Mu = null, Fr = !1, Gs = !1, $r = !1, la = 0;
  function Vl(e) {
    e !== Mu && e.next === null && (Mu === null ? Ys = Mu = e : Mu = Mu.next = e), Gs = !0, Fr || (Fr = !0, Ry());
  }
  function Ai(e, t) {
    if (!$r && Gs) {
      $r = !0;
      do
        for (var l = !1, n = Ys; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var c = n.suspendedLanes, d = n.pingedLanes;
              u = (1 << 31 - Ye(42 | e) + 1) - 1, u &= a & ~(c & ~d), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, Eh(n, u));
          } else
            u = oe, u = Cl(
              n,
              n === Re ? u : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (u & 3) === 0 || ha(n, u) || (l = !0, Eh(n, u));
          n = n.next;
        }
      while (l);
      $r = !1;
    }
  }
  function xy() {
    vh();
  }
  function vh() {
    Gs = Fr = !1;
    var e = 0;
    la !== 0 && wy() && (e = la);
    for (var t = vt(), l = null, n = Ys; n !== null; ) {
      var a = n.next, u = bh(n, t);
      u === 0 ? (n.next = null, l === null ? Ys = a : l.next = a, a === null && (Mu = l)) : (l = n, (e !== 0 || (u & 3) !== 0) && (Gs = !0)), n = a;
    }
    ut !== 0 && ut !== 5 || Ai(e), la !== 0 && (la = 0);
  }
  function bh(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - Ye(u), d = 1 << c, m = a[c];
      m === -1 ? ((d & l) === 0 || (d & n) !== 0) && (a[c] = Hi(d, t)) : m <= t && (e.expiredLanes |= d), u &= ~d;
    }
    if (t = Re, l = oe, l = Cl(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, l === 0 || e === t && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && pt(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || ha(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (n !== null && pt(n), wl(l)) {
        case 2:
        case 8:
          l = Ut;
          break;
        case 32:
          l = bt;
          break;
        case 268435456:
          l = Lu;
          break;
        default:
          l = bt;
      }
      return n = Sh.bind(null, e), l = Dt(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && pt(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Sh(e, t) {
    if (ut !== 0 && ut !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (Hs() && e.callbackNode !== l)
      return null;
    var n = oe;
    return n = Cl(
      e,
      e === Re ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (th(e, n, t), bh(e, vt()), e.callbackNode != null && e.callbackNode === l ? Sh.bind(null, e) : null);
  }
  function Eh(e, t) {
    if (Hs()) return null;
    th(e, t, !0);
  }
  function Ry() {
    Hy(function() {
      (be & 6) !== 0 ? Dt(
        ol,
        xy
      ) : vh();
    });
  }
  function Ir() {
    if (la === 0) {
      var e = yu;
      e === 0 && (e = da, da <<= 1, (da & 261888) === 0 && (da = 256)), la = e;
    }
    return la;
  }
  function _h(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : en("" + e);
  }
  function Ah(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function Oy(e, t, l, n, a) {
    if (t === "submit" && l && l.stateNode === a) {
      var u = _h(
        (a[$e] || null).action
      ), c = n.submitter;
      c && (t = (t = c[$e] || null) ? _h(t.formAction) : c.getAttribute("formAction"), t !== null && (u = t, c = null));
      var d = new Ht(
        "action",
        "action",
        null,
        n,
        a
      );
      e.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (la !== 0) {
                  var m = c ? Ah(a, c) : new FormData(a);
                  vr(
                    l,
                    {
                      pending: !0,
                      data: m,
                      method: a.method,
                      action: u
                    },
                    null,
                    m
                  );
                }
              } else
                typeof u == "function" && (d.preventDefault(), m = c ? Ah(a, c) : new FormData(a), vr(
                  l,
                  {
                    pending: !0,
                    data: m,
                    method: a.method,
                    action: u
                  },
                  u,
                  m
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var Pr = 0; Pr < jc.length; Pr++) {
    var eo = jc[Pr], Cy = eo.toLowerCase(), My = eo[0].toUpperCase() + eo.slice(1);
    zl(
      Cy,
      "on" + My
    );
  }
  zl(Po, "onAnimationEnd"), zl(ef, "onAnimationIteration"), zl(tf, "onAnimationStart"), zl("dblclick", "onDoubleClick"), zl("focusin", "onFocus"), zl("focusout", "onBlur"), zl(Zm, "onTransitionRun"), zl(Km, "onTransitionStart"), zl(Jm, "onTransitionCancel"), zl(lf, "onTransitionEnd"), Bt("onMouseEnter", ["mouseout", "mouseover"]), Bt("onMouseLeave", ["mouseout", "mouseover"]), Bt("onPointerEnter", ["pointerout", "pointerover"]), Bt("onPointerLeave", ["pointerout", "pointerover"]), Ml(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ml(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ml("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ml(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ml(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ml(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ti = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), qy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ti)
  );
  function Th(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l], a = n.event;
      n = n.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var c = n.length - 1; 0 <= c; c--) {
            var d = n[c], m = d.instance, _ = d.currentTarget;
            if (d = d.listener, m !== u && a.isPropagationStopped())
              break e;
            u = d, a.currentTarget = _;
            try {
              u(a);
            } catch (R) {
              ls(R);
            }
            a.currentTarget = null, u = m;
          }
        else
          for (c = 0; c < n.length; c++) {
            if (d = n[c], m = d.instance, _ = d.currentTarget, d = d.listener, m !== u && a.isPropagationStopped())
              break e;
            u = d, a.currentTarget = _;
            try {
              u(a);
            } catch (R) {
              ls(R);
            }
            a.currentTarget = null, u = m;
          }
      }
    }
  }
  function re(e, t) {
    var l = t[xn];
    l === void 0 && (l = t[xn] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    l.has(n) || (Nh(t, e, 2, !1), l.add(n));
  }
  function to(e, t, l) {
    var n = 0;
    t && (n |= 4), Nh(
      l,
      e,
      n,
      t
    );
  }
  var Xs = "_reactListening" + Math.random().toString(36).slice(2);
  function lo(e) {
    if (!e[Xs]) {
      e[Xs] = !0, Yi.forEach(function(l) {
        l !== "selectionchange" && (qy.has(l) || to(l, !1, e), to(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Xs] || (t[Xs] = !0, to("selectionchange", !1, t));
    }
  }
  function Nh(e, t, l, n) {
    switch (em(t)) {
      case 2:
        var a = ug;
        break;
      case 8:
        a = ig;
        break;
      default:
        a = vo;
    }
    l = a.bind(
      null,
      t,
      l,
      e
    ), a = void 0, !Dn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
      passive: a
    }) : e.addEventListener(t, l, !1);
  }
  function no(e, t, l, n, a) {
    var u = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (; ; ) {
        if (n === null) return;
        var c = n.tag;
        if (c === 3 || c === 4) {
          var d = n.stateNode.containerInfo;
          if (d === a) break;
          if (c === 4)
            for (c = n.return; c !== null; ) {
              var m = c.tag;
              if ((m === 3 || m === 4) && c.stateNode.containerInfo === a)
                return;
              c = c.return;
            }
          for (; d !== null; ) {
            if (c = Jt(d), c === null) return;
            if (m = c.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              n = u = c;
              continue e;
            }
            d = d.parentNode;
          }
        }
        n = n.return;
      }
    eu(function() {
      var _ = u, R = gl(l), M = [];
      e: {
        var A = nf.get(e);
        if (A !== void 0) {
          var T = Ht, Y = e;
          switch (e) {
            case "keypress":
              if (Ea(l) === 0) break e;
            case "keydown":
            case "keyup":
              T = Ji;
              break;
            case "focusin":
              Y = "focus", T = Zu;
              break;
            case "focusout":
              Y = "blur", T = Zu;
              break;
            case "beforeblur":
            case "afterblur":
              T = Zu;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              T = Zi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              T = vc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              T = Oc;
              break;
            case Po:
            case ef:
            case tf:
              T = Ec;
              break;
            case lf:
              T = Fi;
              break;
            case "scroll":
            case "scrollend":
              T = Aa;
              break;
            case "wheel":
              T = Cc;
              break;
            case "copy":
            case "cut":
            case "paste":
              T = Ac;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              T = Wi;
              break;
            case "toggle":
            case "beforetoggle":
              T = Ii;
          }
          var J = (t & 4) !== 0, xe = !J && (e === "scroll" || e === "scrollend"), v = J ? A !== null ? A + "Capture" : null : A;
          J = [];
          for (var g = _, E; g !== null; ) {
            var C = g;
            if (E = C.stateNode, C = C.tag, C !== 5 && C !== 26 && C !== 27 || E === null || v === null || (C = pl(g, v), C != null && J.push(
              Ni(g, C, E)
            )), xe) break;
            g = g.return;
          }
          0 < J.length && (A = new T(
            A,
            Y,
            null,
            l,
            R
          ), M.push({ event: A, listeners: J }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (A = e === "mouseover" || e === "pointerover", T = e === "mouseout" || e === "pointerout", A && l !== yl && (Y = l.relatedTarget || l.fromElement) && (Jt(Y) || Y[dl]))
            break e;
          if ((T || A) && (A = R.window === R ? R : (A = R.ownerDocument) ? A.defaultView || A.parentWindow : window, T ? (Y = l.relatedTarget || l.toElement, T = _, Y = Y ? Jt(Y) : null, Y !== null && (xe = z(Y), J = Y.tag, Y !== xe || J !== 5 && J !== 27 && J !== 6) && (Y = null)) : (T = null, Y = _), T !== Y)) {
            if (J = Zi, C = "onMouseLeave", v = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (J = Wi, C = "onPointerLeave", v = "onPointerEnter", g = "pointer"), xe = T == null ? A : Wt(T), E = Y == null ? A : Wt(Y), A = new J(
              C,
              g + "leave",
              T,
              l,
              R
            ), A.target = xe, A.relatedTarget = E, C = null, Jt(R) === _ && (J = new J(
              v,
              g + "enter",
              Y,
              l,
              R
            ), J.target = E, J.relatedTarget = xe, C = J), xe = C, T && Y)
              t: {
                for (J = zy, v = T, g = Y, E = 0, C = v; C; C = J(C))
                  E++;
                C = 0;
                for (var V = g; V; V = J(V))
                  C++;
                for (; 0 < E - C; )
                  v = J(v), E--;
                for (; 0 < C - E; )
                  g = J(g), C--;
                for (; E--; ) {
                  if (v === g || g !== null && v === g.alternate) {
                    J = v;
                    break t;
                  }
                  v = J(v), g = J(g);
                }
                J = null;
              }
            else J = null;
            T !== null && xh(
              M,
              A,
              T,
              J,
              !1
            ), Y !== null && xe !== null && xh(
              M,
              xe,
              Y,
              J,
              !0
            );
          }
        }
        e: {
          if (A = _ ? Wt(_) : window, T = A.nodeName && A.nodeName.toLowerCase(), T === "select" || T === "input" && A.type === "file")
            var pe = Ta;
          else if (ae(A))
            if ($u)
              pe = km;
            else {
              pe = Iu;
              var X = Yn;
            }
          else
            T = A.nodeName, !T || T.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? _ && Sa(_.elementType) && (pe = Ta) : pe = ts;
          if (pe && (pe = pe(e, _))) {
            De(
              M,
              pe,
              l,
              R
            );
            break e;
          }
          X && X(e, A, _), e === "focusout" && _ && A.type === "number" && _.memoizedProps.value != null && ml(A, "number", A.value);
        }
        switch (X = _ ? Wt(_) : window, e) {
          case "focusin":
            (ae(X) || X.contentEditable === "true") && (su = X, zc = _, ei = null);
            break;
          case "focusout":
            ei = zc = su = null;
            break;
          case "mousedown":
            Dc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Dc = !1, $o(M, l, R);
            break;
          case "selectionchange":
            if (Vm) break;
          case "keydown":
          case "keyup":
            $o(M, l, R);
        }
        var ne;
        if (uu)
          e: {
            switch (e) {
              case "compositionstart":
                var fe = "onCompositionStart";
                break e;
              case "compositionend":
                fe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                fe = "onCompositionUpdate";
                break e;
            }
            fe = void 0;
          }
        else
          Q ? O(e, l) && (fe = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (fe = "onCompositionStart");
        fe && (es && l.locale !== "ko" && (Q || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && Q && (ne = Qu()) : (Lt = R, tu = "value" in Lt ? Lt.value : Lt.textContent, Q = !0)), X = ks(_, fe), 0 < X.length && (fe = new Ki(
          fe,
          e,
          null,
          l,
          R
        ), M.push({ event: fe, listeners: X }), ne ? fe.data = ne : (ne = B(l), ne !== null && (fe.data = ne)))), (ne = Pi ? ue(e, l) : ye(e, l)) && (fe = ks(_, "onBeforeInput"), 0 < fe.length && (X = new Ki(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          R
        ), M.push({
          event: X,
          listeners: fe
        }), X.data = ne)), Oy(
          M,
          e,
          _,
          l,
          R
        );
      }
      Th(M, t);
    });
  }
  function Ni(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function ks(e, t) {
    for (var l = t + "Capture", n = []; e !== null; ) {
      var a = e, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = pl(e, l), a != null && n.unshift(
        Ni(e, a, u)
      ), a = pl(e, t), a != null && n.push(
        Ni(e, a, u)
      )), e.tag === 3) return n;
      e = e.return;
    }
    return [];
  }
  function zy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function xh(e, t, l, n, a) {
    for (var u = t._reactName, c = []; l !== null && l !== n; ) {
      var d = l, m = d.alternate, _ = d.stateNode;
      if (d = d.tag, m !== null && m === n) break;
      d !== 5 && d !== 26 && d !== 27 || _ === null || (m = _, a ? (_ = pl(l, u), _ != null && c.unshift(
        Ni(l, _, m)
      )) : a || (_ = pl(l, u), _ != null && c.push(
        Ni(l, _, m)
      ))), l = l.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var Dy = /\r\n?/g, Uy = /\u0000|\uFFFD/g;
  function Rh(e) {
    return (typeof e == "string" ? e : "" + e).replace(Dy, `
`).replace(Uy, "");
  }
  function Oh(e, t) {
    return t = Rh(t), Rh(e) === t;
  }
  function Ne(e, t, l, n, a, u) {
    switch (l) {
      case "children":
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || zn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && zn(e, "" + n);
        break;
      case "className":
        _t(e, "class", n);
        break;
      case "tabIndex":
        _t(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        _t(e, l, n);
        break;
      case "style":
        Ia(e, n, u);
        break;
      case "data":
        if (t !== "object") {
          _t(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = en("" + n), e.setAttribute(l, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (l === "formAction" ? (t !== "input" && Ne(e, t, "name", a.name, a, null), Ne(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Ne(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Ne(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Ne(e, t, "encType", a.encType, a, null), Ne(e, t, "method", a.method, a, null), Ne(e, t, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = en("" + n), e.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (e.onclick = ke);
        break;
      case "onScroll":
        n != null && re("scroll", e);
        break;
      case "onScrollEnd":
        n != null && re("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(r(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
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
          e.removeAttribute("xlink:href");
          break;
        }
        l = en("" + n), e.setAttributeNS(
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
        n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "" + n) : e.removeAttribute(l);
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
        n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0 ? e.setAttribute(l, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, n) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(l, n) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(l) : e.setAttribute(l, n);
        break;
      case "popover":
        re("beforetoggle", e), re("toggle", e), ba(e, "popover", n);
        break;
      case "xlinkActuate":
        hl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        hl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        hl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        hl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        hl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        hl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        hl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        hl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        hl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        ba(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Vi.get(l) || l, ba(e, l, n));
    }
  }
  function ao(e, t, l, n, a, u) {
    switch (l) {
      case "style":
        Ia(e, n, u);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(r(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string" ? zn(e, n) : (typeof n == "number" || typeof n == "bigint") && zn(e, "" + n);
        break;
      case "onScroll":
        n != null && re("scroll", e);
        break;
      case "onScrollEnd":
        n != null && re("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = ke);
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
        if (!Ja.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), u = e[$e] || null, u = u != null ? u[l] : null, typeof u == "function" && e.removeEventListener(t, u, a), typeof n == "function")) {
              typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
              break e;
            }
            l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : ba(e, l, n);
          }
    }
  }
  function yt(e, t, l) {
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
        re("error", e), re("load", e);
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
                  throw Error(r(137, t));
                default:
                  Ne(e, t, u, c, l, null);
              }
          }
        a && Ne(e, t, "srcSet", l.srcSet, l, null), n && Ne(e, t, "src", l.src, l, null);
        return;
      case "input":
        re("invalid", e);
        var d = u = c = a = null, m = null, _ = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var R = l[n];
            if (R != null)
              switch (n) {
                case "name":
                  a = R;
                  break;
                case "type":
                  c = R;
                  break;
                case "checked":
                  m = R;
                  break;
                case "defaultChecked":
                  _ = R;
                  break;
                case "value":
                  u = R;
                  break;
                case "defaultValue":
                  d = R;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (R != null)
                    throw Error(r(137, t));
                  break;
                default:
                  Ne(e, t, n, R, l, null);
              }
          }
        Fa(
          e,
          u,
          d,
          m,
          _,
          c,
          a,
          !1
        );
        return;
      case "select":
        re("invalid", e), n = c = u = null;
        for (a in l)
          if (l.hasOwnProperty(a) && (d = l[a], d != null))
            switch (a) {
              case "value":
                u = d;
                break;
              case "defaultValue":
                c = d;
                break;
              case "multiple":
                n = d;
              default:
                Ne(e, t, a, d, l, null);
            }
        t = u, l = c, e.multiple = !!n, t != null ? Be(e, !!n, t, !1) : l != null && Be(e, !!n, l, !0);
        return;
      case "textarea":
        re("invalid", e), u = a = n = null;
        for (c in l)
          if (l.hasOwnProperty(c) && (d = l[c], d != null))
            switch (c) {
              case "value":
                n = d;
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
                Ne(e, t, c, d, l, null);
            }
        $a(e, n, a, u);
        return;
      case "option":
        for (m in l)
          l.hasOwnProperty(m) && (n = l[m], n != null) && (m === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : Ne(e, t, m, n, l, null));
        return;
      case "dialog":
        re("beforetoggle", e), re("toggle", e), re("cancel", e), re("close", e);
        break;
      case "iframe":
      case "object":
        re("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ti.length; n++)
          re(Ti[n], e);
        break;
      case "image":
        re("error", e), re("load", e);
        break;
      case "details":
        re("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        re("error", e), re("load", e);
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
        for (_ in l)
          if (l.hasOwnProperty(_) && (n = l[_], n != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Ne(e, t, _, n, l, null);
            }
        return;
      default:
        if (Sa(t)) {
          for (R in l)
            l.hasOwnProperty(R) && (n = l[R], n !== void 0 && ao(
              e,
              t,
              R,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (d in l)
      l.hasOwnProperty(d) && (n = l[d], n != null && Ne(e, t, d, n, l, null));
  }
  function jy(e, t, l, n) {
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
        var a = null, u = null, c = null, d = null, m = null, _ = null, R = null;
        for (T in l) {
          var M = l[T];
          if (l.hasOwnProperty(T) && M != null)
            switch (T) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = M;
              default:
                n.hasOwnProperty(T) || Ne(e, t, T, null, n, M);
            }
        }
        for (var A in n) {
          var T = n[A];
          if (M = l[A], n.hasOwnProperty(A) && (T != null || M != null))
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
                R = T;
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
                T !== M && Ne(
                  e,
                  t,
                  A,
                  T,
                  n,
                  M
                );
            }
        }
        Hl(
          e,
          c,
          d,
          m,
          _,
          R,
          u,
          a
        );
        return;
      case "select":
        T = c = d = A = null;
        for (u in l)
          if (m = l[u], l.hasOwnProperty(u) && m != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                T = m;
              default:
                n.hasOwnProperty(u) || Ne(
                  e,
                  t,
                  u,
                  null,
                  n,
                  m
                );
            }
        for (a in n)
          if (u = n[a], m = l[a], n.hasOwnProperty(a) && (u != null || m != null))
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
                u !== m && Ne(
                  e,
                  t,
                  a,
                  u,
                  n,
                  m
                );
            }
        t = d, l = c, n = T, A != null ? Be(e, !!l, A, !1) : !!n != !!l && (t != null ? Be(e, !!l, t, !0) : Be(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        T = A = null;
        for (d in l)
          if (a = l[d], l.hasOwnProperty(d) && a != null && !n.hasOwnProperty(d))
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ne(e, t, d, null, n, a);
            }
        for (c in n)
          if (a = n[c], u = l[c], n.hasOwnProperty(c) && (a != null || u != null))
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
                a !== u && Ne(e, t, c, a, n, u);
            }
        ki(e, A, T);
        return;
      case "option":
        for (var Y in l)
          A = l[Y], l.hasOwnProperty(Y) && A != null && !n.hasOwnProperty(Y) && (Y === "selected" ? e.selected = !1 : Ne(
            e,
            t,
            Y,
            null,
            n,
            A
          ));
        for (m in n)
          A = n[m], T = l[m], n.hasOwnProperty(m) && A !== T && (A != null || T != null) && (m === "selected" ? e.selected = A && typeof A != "function" && typeof A != "symbol" : Ne(
            e,
            t,
            m,
            A,
            n,
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
        for (var J in l)
          A = l[J], l.hasOwnProperty(J) && A != null && !n.hasOwnProperty(J) && Ne(e, t, J, null, n, A);
        for (_ in n)
          if (A = n[_], T = l[_], n.hasOwnProperty(_) && A !== T && (A != null || T != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(r(137, t));
                break;
              default:
                Ne(
                  e,
                  t,
                  _,
                  A,
                  n,
                  T
                );
            }
        return;
      default:
        if (Sa(t)) {
          for (var xe in l)
            A = l[xe], l.hasOwnProperty(xe) && A !== void 0 && !n.hasOwnProperty(xe) && ao(
              e,
              t,
              xe,
              void 0,
              n,
              A
            );
          for (R in n)
            A = n[R], T = l[R], !n.hasOwnProperty(R) || A === T || A === void 0 && T === void 0 || ao(
              e,
              t,
              R,
              A,
              n,
              T
            );
          return;
        }
    }
    for (var v in l)
      A = l[v], l.hasOwnProperty(v) && A != null && !n.hasOwnProperty(v) && Ne(e, t, v, null, n, A);
    for (M in n)
      A = n[M], T = l[M], !n.hasOwnProperty(M) || A === T || A == null && T == null || Ne(e, t, M, A, n, T);
  }
  function Ch(e) {
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
  function By() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], u = a.transferSize, c = a.initiatorType, d = a.duration;
        if (u && d && Ch(c)) {
          for (c = 0, d = a.responseEnd, n += 1; n < l.length; n++) {
            var m = l[n], _ = m.startTime;
            if (_ > d) break;
            var R = m.transferSize, M = m.initiatorType;
            R && Ch(M) && (m = m.responseEnd, c += R * (m < d ? 1 : (d - _) / (m - _)));
          }
          if (--n, t += 8 * (u + c) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var uo = null, io = null;
  function Qs(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Mh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function qh(e, t) {
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
  function so(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var co = null;
  function wy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === co ? !1 : (co = e, !0) : (co = null, !1);
  }
  var zh = typeof setTimeout == "function" ? setTimeout : void 0, Ly = typeof clearTimeout == "function" ? clearTimeout : void 0, Dh = typeof Promise == "function" ? Promise : void 0, Hy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dh < "u" ? function(e) {
    return Dh.resolve(null).then(e).catch(Yy);
  } : zh;
  function Yy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function na(e) {
    return e === "head";
  }
  function Uh(e, t) {
    var l = t, n = 0;
    do {
      var a = l.nextSibling;
      if (e.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            e.removeChild(a), Uu(t);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          xi(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, xi(l);
          for (var u = l.firstChild; u; ) {
            var c = u.nextSibling, d = u.nodeName;
            u[Kt] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = c;
          }
        } else
          l === "body" && xi(e.ownerDocument.body);
      l = a;
    } while (l);
    Uu(t);
  }
  function jh(e, t) {
    var l = e;
    e = 0;
    do {
      var n = l.nextSibling;
      if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), n && n.nodeType === 8)
        if (l = n.data, l === "/$") {
          if (e === 0) break;
          e--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
      l = n;
    } while (l);
  }
  function ro(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ro(l), va(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function Gy(e, t, l, n) {
    for (; e.nodeType === 1; ) {
      var a = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (n) {
        if (!e[Kt])
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
      if (e = Tl(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Xy(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Tl(e.nextSibling), e === null)) return null;
    return e;
  }
  function Bh(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Tl(e.nextSibling), e === null)) return null;
    return e;
  }
  function oo(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function fo(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function ky(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading")
      t();
    else {
      var n = function() {
        t(), l.removeEventListener("DOMContentLoaded", n);
      };
      l.addEventListener("DOMContentLoaded", n), e._reactRetry = n;
    }
  }
  function Tl(e) {
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
  var ho = null;
  function wh(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return Tl(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Lh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else l !== "/$" && l !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Hh(e, t, l) {
    switch (t = Qs(l), e) {
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
  function xi(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    va(e);
  }
  var Nl = /* @__PURE__ */ new Map(), Yh = /* @__PURE__ */ new Set();
  function Vs(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var pn = L.d;
  L.d = {
    f: Qy,
    r: Vy,
    D: Zy,
    C: Ky,
    L: Jy,
    m: Wy,
    X: $y,
    S: Fy,
    M: Iy
  };
  function Qy() {
    var e = pn.f(), t = Bs();
    return e || t;
  }
  function Vy(e) {
    var t = Ll(e);
    t !== null && t.tag === 5 && t.type === "form" ? nd(t) : pn.r(e);
  }
  var qu = typeof document > "u" ? null : document;
  function Gh(e, t, l) {
    var n = qu;
    if (n && typeof t == "string" && t) {
      var a = Rt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), Yh.has(a) || (Yh.add(a), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(a) === null && (t = n.createElement("link"), yt(t, "link", e), Ae(t), n.head.appendChild(t)));
    }
  }
  function Zy(e) {
    pn.D(e), Gh("dns-prefetch", e, null);
  }
  function Ky(e, t) {
    pn.C(e, t), Gh("preconnect", e, t);
  }
  function Jy(e, t, l) {
    pn.L(e, t, l);
    var n = qu;
    if (n && e && t) {
      var a = 'link[rel="preload"][as="' + Rt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Rt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Rt(
        l.imageSizes
      ) + '"]')) : a += '[href="' + Rt(e) + '"]';
      var u = a;
      switch (t) {
        case "style":
          u = zu(e);
          break;
        case "script":
          u = Du(e);
      }
      Nl.has(u) || (e = G(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Nl.set(u, e), n.querySelector(a) !== null || t === "style" && n.querySelector(Ri(u)) || t === "script" && n.querySelector(Oi(u)) || (t = n.createElement("link"), yt(t, "link", e), Ae(t), n.head.appendChild(t)));
    }
  }
  function Wy(e, t) {
    pn.m(e, t);
    var l = qu;
    if (l && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Rt(n) + '"][href="' + Rt(e) + '"]', u = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Du(e);
      }
      if (!Nl.has(u) && (e = G({ rel: "modulepreload", href: e }, t), Nl.set(u, e), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Oi(u)))
              return;
        }
        n = l.createElement("link"), yt(n, "link", e), Ae(n), l.head.appendChild(n);
      }
    }
  }
  function Fy(e, t, l) {
    pn.S(e, t, l);
    var n = qu;
    if (n && e) {
      var a = Rn(n).hoistableStyles, u = zu(e);
      t = t || "default";
      var c = a.get(u);
      if (!c) {
        var d = { loading: 0, preload: null };
        if (c = n.querySelector(
          Ri(u)
        ))
          d.loading = 5;
        else {
          e = G(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Nl.get(u)) && mo(e, l);
          var m = c = n.createElement("link");
          Ae(m), yt(m, "link", e), m._p = new Promise(function(_, R) {
            m.onload = _, m.onerror = R;
          }), m.addEventListener("load", function() {
            d.loading |= 1;
          }), m.addEventListener("error", function() {
            d.loading |= 2;
          }), d.loading |= 4, Zs(c, t, n);
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
  function $y(e, t) {
    pn.X(e, t);
    var l = qu;
    if (l && e) {
      var n = Rn(l).hoistableScripts, a = Du(e), u = n.get(a);
      u || (u = l.querySelector(Oi(a)), u || (e = G({ src: e, async: !0 }, t), (t = Nl.get(a)) && yo(e, t), u = l.createElement("script"), Ae(u), yt(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Iy(e, t) {
    pn.M(e, t);
    var l = qu;
    if (l && e) {
      var n = Rn(l).hoistableScripts, a = Du(e), u = n.get(a);
      u || (u = l.querySelector(Oi(a)), u || (e = G({ src: e, async: !0, type: "module" }, t), (t = Nl.get(a)) && yo(e, t), u = l.createElement("script"), Ae(u), yt(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Xh(e, t, l, n) {
    var a = (a = K.current) ? Vs(a) : null;
    if (!a) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = zu(l.href), l = Rn(
          a
        ).hoistableStyles, n = l.get(t), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = zu(l.href);
          var u = Rn(
            a
          ).hoistableStyles, c = u.get(e);
          if (c || (a = a.ownerDocument || a, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, c), (u = a.querySelector(
            Ri(e)
          )) && !u._p && (c.instance = u, c.state.loading = 5), Nl.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Nl.set(e, l), u || Py(
            a,
            e,
            l,
            c.state
          ))), t && n === null)
            throw Error(r(528, ""));
          return c;
        }
        if (t && n !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Du(l), l = Rn(
          a
        ).hoistableScripts, n = l.get(t), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function zu(e) {
    return 'href="' + Rt(e) + '"';
  }
  function Ri(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function kh(e) {
    return G({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Py(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), yt(t, "link", l), Ae(t), e.head.appendChild(t));
  }
  function Du(e) {
    return '[src="' + Rt(e) + '"]';
  }
  function Oi(e) {
    return "script[async]" + e;
  }
  function Qh(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + Rt(l.href) + '"]'
          );
          if (n)
            return t.instance = n, Ae(n), n;
          var a = G({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), Ae(n), yt(n, "style", a), Zs(n, l.precedence, e), t.instance = n;
        case "stylesheet":
          a = zu(l.href);
          var u = e.querySelector(
            Ri(a)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Ae(u), u;
          n = kh(l), (a = Nl.get(a)) && mo(n, a), u = (e.ownerDocument || e).createElement("link"), Ae(u);
          var c = u;
          return c._p = new Promise(function(d, m) {
            c.onload = d, c.onerror = m;
          }), yt(u, "link", n), t.state.loading |= 4, Zs(u, l.precedence, e), t.instance = u;
        case "script":
          return u = Du(l.src), (a = e.querySelector(
            Oi(u)
          )) ? (t.instance = a, Ae(a), a) : (n = l, (a = Nl.get(u)) && (n = G({}, l), yo(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Ae(a), yt(a, "link", n), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, Zs(n, l.precedence, e));
    return t.instance;
  }
  function Zs(e, t, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, u = a, c = 0; c < n.length; c++) {
      var d = n[c];
      if (d.dataset.precedence === t) u = d;
      else if (u !== a) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function mo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function yo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Ks = null;
  function Vh(e, t, l) {
    if (Ks === null) {
      var n = /* @__PURE__ */ new Map(), a = Ks = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = Ks, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(e)) return n;
    for (n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++) {
      var u = l[a];
      if (!(u[Kt] || u[Ge] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(t) || "";
        c = e + c;
        var d = n.get(c);
        d ? d.push(u) : n.set(c, [u]);
      }
    }
    return n;
  }
  function Zh(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function eg(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
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
  function Kh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function tg(e, t, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = zu(n.href), u = t.querySelector(
          Ri(a)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Js.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, Ae(u);
          return;
        }
        u = t.ownerDocument || t, n = kh(n), (a = Nl.get(a)) && mo(n, a), u = u.createElement("link"), Ae(u);
        var c = u;
        c._p = new Promise(function(d, m) {
          c.onload = d, c.onerror = m;
        }), yt(u, "link", n), l.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Js.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var go = 0;
  function lg(e, t) {
    return e.stylesheets && e.count === 0 && Fs(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (e.stylesheets && Fs(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && go === 0 && (go = 62500 * By());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Fs(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > go ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function Js() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Fs(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ws = null;
  function Fs(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ws = /* @__PURE__ */ new Map(), t.forEach(ng, e), Ws = null, Js.call(e));
  }
  function ng(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Ws.get(e);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Ws.set(e, l);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < a.length; u++) {
          var c = a[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), n = c);
        }
        n && l.set(null, n);
      }
      a = t.instance, c = a.getAttribute("data-precedence"), u = l.get(c) || n, u === n && l.set(null, a), l.set(c, a), this.count++, n = Js.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), u ? u.parentNode.insertBefore(a, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Ci = {
    $$typeof: Me,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0
  };
  function ag(e, t, l, n, a, u, c, d, m) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ma(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ma(0), this.hiddenUpdates = ma(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Jh(e, t, l, n, a, u, c, d, m, _, R, M) {
    return e = new ag(
      e,
      t,
      l,
      c,
      m,
      _,
      R,
      M,
      d
    ), t = 1, u === !0 && (t |= 24), u = Pt(3, null, null, t), e.current = u, u.stateNode = e, t = Jc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: t
    }, Ic(u), e;
  }
  function Wh(e) {
    return e ? (e = ou, e) : ou;
  }
  function Fh(e, t, l, n, a, u) {
    a = Wh(a), n.context === null ? n.context = a : n.pendingContext = a, n = Zn(t), n.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (n.callback = u), l = Kn(e, n, t), l !== null && (Qt(l, e, t), si(l, e, t));
  }
  function $h(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function po(e, t) {
    $h(e, t), (e = e.alternate) && $h(e, t);
  }
  function Ih(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ra(e, 67108864);
      t !== null && Qt(t, e, 67108864), po(e, 67108864);
    }
  }
  function Ph(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = al();
      t = Tn(t);
      var l = Ra(e, t);
      l !== null && Qt(l, e, t), po(e, t);
    }
  }
  var $s = !0;
  function ug(e, t, l, n) {
    var a = x.T;
    x.T = null;
    var u = L.p;
    try {
      L.p = 2, vo(e, t, l, n);
    } finally {
      L.p = u, x.T = a;
    }
  }
  function ig(e, t, l, n) {
    var a = x.T;
    x.T = null;
    var u = L.p;
    try {
      L.p = 8, vo(e, t, l, n);
    } finally {
      L.p = u, x.T = a;
    }
  }
  function vo(e, t, l, n) {
    if ($s) {
      var a = bo(n);
      if (a === null)
        no(
          e,
          t,
          n,
          Is,
          l
        ), tm(e, n);
      else if (cg(
        a,
        e,
        t,
        l,
        n
      ))
        n.stopPropagation();
      else if (tm(e, n), t & 4 && -1 < sg.indexOf(e)) {
        for (; a !== null; ) {
          var u = Ll(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = Ol(u.pendingLanes);
                  if (c !== 0) {
                    var d = u;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; c; ) {
                      var m = 1 << 31 - Ye(c);
                      d.entanglements[1] |= m, c &= ~m;
                    }
                    Vl(u), (be & 6) === 0 && (Us = vt() + 500, Ai(0));
                  }
                }
                break;
              case 31:
              case 13:
                d = Ra(u, 2), d !== null && Qt(d, u, 2), Bs(), po(u, 2);
            }
          if (u = bo(n), u === null && no(
            e,
            t,
            n,
            Is,
            l
          ), u === a) break;
          a = u;
        }
        a !== null && n.stopPropagation();
      } else
        no(
          e,
          t,
          n,
          null,
          l
        );
    }
  }
  function bo(e) {
    return e = gl(e), So(e);
  }
  var Is = null;
  function So(e) {
    if (Is = null, e = Jt(e), e !== null) {
      var t = z(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = w(t), e !== null) return e;
          e = null;
        } else if (l === 31) {
          if (e = k(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Is = e, null;
  }
  function em(e) {
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
        switch (Zt()) {
          case ol:
            return 2;
          case Ut:
            return 8;
          case bt:
          case Qa:
            return 32;
          case Lu:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Eo = !1, aa = null, ua = null, ia = null, Mi = /* @__PURE__ */ new Map(), qi = /* @__PURE__ */ new Map(), sa = [], sg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function tm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        aa = null;
        break;
      case "dragenter":
      case "dragleave":
        ua = null;
        break;
      case "mouseover":
      case "mouseout":
        ia = null;
        break;
      case "pointerover":
      case "pointerout":
        Mi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        qi.delete(t.pointerId);
    }
  }
  function zi(e, t, l, n, a, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: u,
      targetContainers: [a]
    }, t !== null && (t = Ll(t), t !== null && Ih(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function cg(e, t, l, n, a) {
    switch (t) {
      case "focusin":
        return aa = zi(
          aa,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return ua = zi(
          ua,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return ia = zi(
          ia,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var u = a.pointerId;
        return Mi.set(
          u,
          zi(
            Mi.get(u) || null,
            e,
            t,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return u = a.pointerId, qi.set(
          u,
          zi(
            qi.get(u) || null,
            e,
            t,
            l,
            n,
            a
          )
        ), !0;
    }
    return !1;
  }
  function lm(e) {
    var t = Jt(e.target);
    if (t !== null) {
      var l = z(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = w(l), t !== null) {
            e.blockedOn = t, Nn(e.priority, function() {
              Ph(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = k(l), t !== null) {
            e.blockedOn = t, Nn(e.priority, function() {
              Ph(l);
            });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ps(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = bo(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        yl = n, l.target.dispatchEvent(n), yl = null;
      } else
        return t = Ll(l), t !== null && Ih(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function nm(e, t, l) {
    Ps(e) && l.delete(t);
  }
  function rg() {
    Eo = !1, aa !== null && Ps(aa) && (aa = null), ua !== null && Ps(ua) && (ua = null), ia !== null && Ps(ia) && (ia = null), Mi.forEach(nm), qi.forEach(nm);
  }
  function ec(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Eo || (Eo = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      rg
    )));
  }
  var tc = null;
  function am(e) {
    tc !== e && (tc = e, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        tc === e && (tc = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], n = e[t + 1], a = e[t + 2];
          if (typeof n != "function") {
            if (So(n || l) === null)
              continue;
            break;
          }
          var u = Ll(l);
          u !== null && (e.splice(t, 3), t -= 3, vr(
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
  function Uu(e) {
    function t(m) {
      return ec(m, e);
    }
    aa !== null && ec(aa, e), ua !== null && ec(ua, e), ia !== null && ec(ia, e), Mi.forEach(t), qi.forEach(t);
    for (var l = 0; l < sa.length; l++) {
      var n = sa[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < sa.length && (l = sa[0], l.blockedOn === null); )
      lm(l), l.blockedOn === null && sa.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], u = l[n + 1], c = a[$e] || null;
        if (typeof u == "function")
          c || am(l);
        else if (c) {
          var d = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, c = u[$e] || null)
              d = c.formAction;
            else if (So(a) !== null) continue;
          } else d = c.action;
          typeof d == "function" ? l[n + 1] = d : (l.splice(n, 3), n -= 3), am(l);
        }
      }
  }
  function um() {
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
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
        n = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), a !== null && (a(), a = null);
      };
    }
  }
  function _o(e) {
    this._internalRoot = e;
  }
  lc.prototype.render = _o.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var l = t.current, n = al();
    Fh(l, n, e, t, null, null);
  }, lc.prototype.unmount = _o.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Fh(e.current, 2, null, e, null, null), Bs(), t[dl] = null;
    }
  };
  function lc(e) {
    this._internalRoot = e;
  }
  lc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = pa();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < sa.length && t !== 0 && t < sa[l].priority; l++) ;
      sa.splice(l, 0, e), l === 0 && lm(e);
    }
  };
  var im = i.version;
  if (im !== "19.2.4")
    throw Error(
      r(
        527,
        im,
        "19.2.4"
      )
    );
  L.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = q(t), e = e !== null ? $(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var og = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: x,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var nc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!nc.isDisabled && nc.supportsFiber)
      try {
        En = nc.inject(
          og
        ), St = nc;
      } catch {
      }
  }
  return Ui.createRoot = function(e, t) {
    if (!S(e)) throw Error(r(299));
    var l = !1, n = "", a = hd, u = md, c = yd;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = Jh(
      e,
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
      um
    ), e[dl] = t.current, lo(e), new _o(t);
  }, Ui.hydrateRoot = function(e, t, l) {
    if (!S(e)) throw Error(r(299));
    var n = !1, a = "", u = hd, c = md, d = yd, m = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (d = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), t = Jh(
      e,
      1,
      !0,
      t,
      l ?? null,
      n,
      a,
      m,
      u,
      c,
      d,
      um
    ), t.context = Wh(null), l = t.current, n = al(), n = Tn(n), a = Zn(n), a.callback = null, Kn(l, a, n), l = n, t.current.lanes = l, ya(t, l), Vl(t), e[dl] = t.current, lo(e), new lc(t);
  }, Ui.version = "19.2.4", Ui;
}
var gm;
function Sg() {
  if (gm) return No.exports;
  gm = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (i) {
        console.error(i);
      }
  }
  return o(), No.exports = bg(), No.exports;
}
var Eg = Sg();
const _g = "/api";
function Cm() {
  return window.localStorage.getItem("token");
}
function pm() {
  const o = `${window.location.pathname}${window.location.search || ""}`;
  window.location.replace(`/login?next=${encodeURIComponent(o)}`);
}
async function ju(o, i = {}) {
  const s = Cm(), r = {
    "Content-Type": "application/json",
    ...s ? { Authorization: `Bearer ${s}` } : {},
    ...i.headers || {}
  }, S = await fetch(`${_g}${o}`, {
    ...i,
    headers: r
  }), z = await S.text();
  let w = {};
  if (z)
    try {
      w = JSON.parse(z);
    } catch {
      w = { message: z };
    }
  if (!S.ok) {
    const k = w.error || w.message || "Request failed";
    throw new Error(k);
  }
  return w;
}
const Jl = /* @__PURE__ */ Object.create(null);
Jl.open = "0";
Jl.close = "1";
Jl.ping = "2";
Jl.pong = "3";
Jl.message = "4";
Jl.upgrade = "5";
Jl.noop = "6";
const rc = /* @__PURE__ */ Object.create(null);
Object.keys(Jl).forEach((o) => {
  rc[Jl[o]] = o;
});
const zo = { type: "error", data: "parser error" }, Mm = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", qm = typeof ArrayBuffer == "function", zm = (o) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(o) : o && o.buffer instanceof ArrayBuffer, Xo = ({ type: o, data: i }, s, r) => Mm && i instanceof Blob ? s ? r(i) : vm(i, r) : qm && (i instanceof ArrayBuffer || zm(i)) ? s ? r(i) : vm(new Blob([i]), r) : r(Jl[o] + (i || "")), vm = (o, i) => {
  const s = new FileReader();
  return s.onload = function() {
    const r = s.result.split(",")[1];
    i("b" + (r || ""));
  }, s.readAsDataURL(o);
};
function bm(o) {
  return o instanceof Uint8Array ? o : o instanceof ArrayBuffer ? new Uint8Array(o) : new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
}
let Co;
function Ag(o, i) {
  if (Mm && o.data instanceof Blob)
    return o.data.arrayBuffer().then(bm).then(i);
  if (qm && (o.data instanceof ArrayBuffer || zm(o.data)))
    return i(bm(o.data));
  Xo(o, !1, (s) => {
    Co || (Co = new TextEncoder()), i(Co.encode(s));
  });
}
const Sm = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", wi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let o = 0; o < Sm.length; o++)
  wi[Sm.charCodeAt(o)] = o;
const Tg = (o) => {
  let i = o.length * 0.75, s = o.length, r, S = 0, z, w, k, U;
  o[o.length - 1] === "=" && (i--, o[o.length - 2] === "=" && i--);
  const q = new ArrayBuffer(i), $ = new Uint8Array(q);
  for (r = 0; r < s; r += 4)
    z = wi[o.charCodeAt(r)], w = wi[o.charCodeAt(r + 1)], k = wi[o.charCodeAt(r + 2)], U = wi[o.charCodeAt(r + 3)], $[S++] = z << 2 | w >> 4, $[S++] = (w & 15) << 4 | k >> 2, $[S++] = (k & 3) << 6 | U & 63;
  return q;
}, Ng = typeof ArrayBuffer == "function", ko = (o, i) => {
  if (typeof o != "string")
    return {
      type: "message",
      data: Dm(o, i)
    };
  const s = o.charAt(0);
  return s === "b" ? {
    type: "message",
    data: xg(o.substring(1), i)
  } : rc[s] ? o.length > 1 ? {
    type: rc[s],
    data: o.substring(1)
  } : {
    type: rc[s]
  } : zo;
}, xg = (o, i) => {
  if (Ng) {
    const s = Tg(o);
    return Dm(s, i);
  } else
    return { base64: !0, data: o };
}, Dm = (o, i) => i === "blob" ? o instanceof Blob ? o : new Blob([o]) : o instanceof ArrayBuffer ? o : o.buffer, Um = "", Rg = (o, i) => {
  const s = o.length, r = new Array(s);
  let S = 0;
  o.forEach((z, w) => {
    Xo(z, !1, (k) => {
      r[w] = k, ++S === s && i(r.join(Um));
    });
  });
}, Og = (o, i) => {
  const s = o.split(Um), r = [];
  for (let S = 0; S < s.length; S++) {
    const z = ko(s[S], i);
    if (r.push(z), z.type === "error")
      break;
  }
  return r;
};
function Cg() {
  return new TransformStream({
    transform(o, i) {
      Ag(o, (s) => {
        const r = s.length;
        let S;
        if (r < 126)
          S = new Uint8Array(1), new DataView(S.buffer).setUint8(0, r);
        else if (r < 65536) {
          S = new Uint8Array(3);
          const z = new DataView(S.buffer);
          z.setUint8(0, 126), z.setUint16(1, r);
        } else {
          S = new Uint8Array(9);
          const z = new DataView(S.buffer);
          z.setUint8(0, 127), z.setBigUint64(1, BigInt(r));
        }
        o.data && typeof o.data != "string" && (S[0] |= 128), i.enqueue(S), i.enqueue(s);
      });
    }
  });
}
let Mo;
function ac(o) {
  return o.reduce((i, s) => i + s.length, 0);
}
function uc(o, i) {
  if (o[0].length === i)
    return o.shift();
  const s = new Uint8Array(i);
  let r = 0;
  for (let S = 0; S < i; S++)
    s[S] = o[0][r++], r === o[0].length && (o.shift(), r = 0);
  return o.length && r < o[0].length && (o[0] = o[0].slice(r)), s;
}
function Mg(o, i) {
  Mo || (Mo = new TextDecoder());
  const s = [];
  let r = 0, S = -1, z = !1;
  return new TransformStream({
    transform(w, k) {
      for (s.push(w); ; ) {
        if (r === 0) {
          if (ac(s) < 1)
            break;
          const U = uc(s, 1);
          z = (U[0] & 128) === 128, S = U[0] & 127, S < 126 ? r = 3 : S === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (ac(s) < 2)
            break;
          const U = uc(s, 2);
          S = new DataView(U.buffer, U.byteOffset, U.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (ac(s) < 8)
            break;
          const U = uc(s, 8), q = new DataView(U.buffer, U.byteOffset, U.length), $ = q.getUint32(0);
          if ($ > Math.pow(2, 21) - 1) {
            k.enqueue(zo);
            break;
          }
          S = $ * Math.pow(2, 32) + q.getUint32(4), r = 3;
        } else {
          if (ac(s) < S)
            break;
          const U = uc(s, S);
          k.enqueue(ko(z ? U : Mo.decode(U), i)), r = 0;
        }
        if (S === 0 || S > o) {
          k.enqueue(zo);
          break;
        }
      }
    }
  });
}
const jm = 4;
function at(o) {
  if (o) return qg(o);
}
function qg(o) {
  for (var i in at.prototype)
    o[i] = at.prototype[i];
  return o;
}
at.prototype.on = at.prototype.addEventListener = function(o, i) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + o] = this._callbacks["$" + o] || []).push(i), this;
};
at.prototype.once = function(o, i) {
  function s() {
    this.off(o, s), i.apply(this, arguments);
  }
  return s.fn = i, this.on(o, s), this;
};
at.prototype.off = at.prototype.removeListener = at.prototype.removeAllListeners = at.prototype.removeEventListener = function(o, i) {
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
at.prototype.emit = function(o) {
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
at.prototype.emitReserved = at.prototype.emit;
at.prototype.listeners = function(o) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + o] || [];
};
at.prototype.hasListeners = function(o) {
  return !!this.listeners(o).length;
};
const hc = typeof Promise == "function" && typeof Promise.resolve == "function" ? (i) => Promise.resolve().then(i) : (i, s) => s(i, 0), xl = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), zg = "arraybuffer";
function Bm(o, ...i) {
  return i.reduce((s, r) => (o.hasOwnProperty(r) && (s[r] = o[r]), s), {});
}
const Dg = xl.setTimeout, Ug = xl.clearTimeout;
function mc(o, i) {
  i.useNativeTimers ? (o.setTimeoutFn = Dg.bind(xl), o.clearTimeoutFn = Ug.bind(xl)) : (o.setTimeoutFn = xl.setTimeout.bind(xl), o.clearTimeoutFn = xl.clearTimeout.bind(xl));
}
const jg = 1.33;
function Bg(o) {
  return typeof o == "string" ? wg(o) : Math.ceil((o.byteLength || o.size) * jg);
}
function wg(o) {
  let i = 0, s = 0;
  for (let r = 0, S = o.length; r < S; r++)
    i = o.charCodeAt(r), i < 128 ? s += 1 : i < 2048 ? s += 2 : i < 55296 || i >= 57344 ? s += 3 : (r++, s += 4);
  return s;
}
function wm() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Lg(o) {
  let i = "";
  for (let s in o)
    o.hasOwnProperty(s) && (i.length && (i += "&"), i += encodeURIComponent(s) + "=" + encodeURIComponent(o[s]));
  return i;
}
function Hg(o) {
  let i = {}, s = o.split("&");
  for (let r = 0, S = s.length; r < S; r++) {
    let z = s[r].split("=");
    i[decodeURIComponent(z[0])] = decodeURIComponent(z[1]);
  }
  return i;
}
class Yg extends Error {
  constructor(i, s, r) {
    super(i), this.description = s, this.context = r, this.type = "TransportError";
  }
}
class Qo extends at {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(i) {
    super(), this.writable = !1, mc(this, i), this.opts = i, this.query = i.query, this.socket = i.socket, this.supportsBinary = !i.forceBase64;
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
    return super.emitReserved("error", new Yg(i, s, r)), this;
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
    const s = ko(i, this.socket.binaryType);
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
    const s = Lg(i);
    return s.length ? "?" + s : "";
  }
}
class Gg extends Qo {
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
    return this.opts.timestampRequests !== !1 && (s[this.opts.timestampParam] = wm()), !this.supportsBinary && !s.sid && (s.b64 = 1), this.createUri(i, s);
  }
}
let Lm = !1;
try {
  Lm = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Xg = Lm;
function kg() {
}
class Qg extends Gg {
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
    r.on("success", s), r.on("error", (S, z) => {
      this.onError("xhr post error", S, z);
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
class Kl extends at {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(i, s, r) {
    super(), this.createRequest = i, mc(this, r), this._opts = r, this._method = r.method || "GET", this._uri = s, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var i;
    const s = Bm(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = Kl.requestsCount++, Kl.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = kg, i)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Kl.requests[this._index], this._xhr = null;
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
Kl.requestsCount = 0;
Kl.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Em);
  else if (typeof addEventListener == "function") {
    const o = "onpagehide" in xl ? "pagehide" : "unload";
    addEventListener(o, Em, !1);
  }
}
function Em() {
  for (let o in Kl.requests)
    Kl.requests.hasOwnProperty(o) && Kl.requests[o].abort();
}
const Vg = (function() {
  const o = Hm({
    xdomain: !1
  });
  return o && o.responseType !== null;
})();
class Zg extends Qg {
  constructor(i) {
    super(i);
    const s = i && i.forceBase64;
    this.supportsBinary = Vg && !s;
  }
  request(i = {}) {
    return Object.assign(i, { xd: this.xd }, this.opts), new Kl(Hm, this.uri(), i);
  }
}
function Hm(o) {
  const i = o.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!i || Xg))
      return new XMLHttpRequest();
  } catch {
  }
  if (!i)
    try {
      return new xl[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Ym = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Kg extends Qo {
  get name() {
    return "websocket";
  }
  doOpen() {
    const i = this.uri(), s = this.opts.protocols, r = Ym ? {} : Bm(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      Xo(r, this.supportsBinary, (z) => {
        try {
          this.doWrite(r, z);
        } catch {
        }
        S && hc(() => {
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
    return this.opts.timestampRequests && (s[this.opts.timestampParam] = wm()), this.supportsBinary || (s.b64 = 1), this.createUri(i, s);
  }
}
const qo = xl.WebSocket || xl.MozWebSocket;
class Jg extends Kg {
  createSocket(i, s, r) {
    return Ym ? new qo(i, s, r) : s ? new qo(i, s) : new qo(i);
  }
  doWrite(i, s) {
    this.ws.send(s);
  }
}
class Wg extends Qo {
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
        const s = Mg(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = i.readable.pipeThrough(s).getReader(), S = Cg();
        S.readable.pipeTo(i.writable), this._writer = S.writable.getWriter();
        const z = () => {
          r.read().then(({ done: k, value: U }) => {
            k || (this.onPacket(U), z());
          }).catch((k) => {
          });
        };
        z();
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
        S && hc(() => {
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
  websocket: Jg,
  webtransport: Wg,
  polling: Zg
}, $g = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Ig = [
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
function Do(o) {
  if (o.length > 8e3)
    throw "URI too long";
  const i = o, s = o.indexOf("["), r = o.indexOf("]");
  s != -1 && r != -1 && (o = o.substring(0, s) + o.substring(s, r).replace(/:/g, ";") + o.substring(r, o.length));
  let S = $g.exec(o || ""), z = {}, w = 14;
  for (; w--; )
    z[Ig[w]] = S[w] || "";
  return s != -1 && r != -1 && (z.source = i, z.host = z.host.substring(1, z.host.length - 1).replace(/;/g, ":"), z.authority = z.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), z.ipv6uri = !0), z.pathNames = Pg(z, z.path), z.queryKey = ep(z, z.query), z;
}
function Pg(o, i) {
  const s = /\/{2,9}/g, r = i.replace(s, "/").split("/");
  return (i.slice(0, 1) == "/" || i.length === 0) && r.splice(0, 1), i.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function ep(o, i) {
  const s = {};
  return i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, S, z) {
    S && (s[S] = z);
  }), s;
}
const Uo = typeof addEventListener == "function" && typeof removeEventListener == "function", oc = [];
Uo && addEventListener("offline", () => {
  oc.forEach((o) => o());
}, !1);
class ra extends at {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(i, s) {
    if (super(), this.binaryType = zg, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, i && typeof i == "object" && (s = i, i = null), i) {
      const r = Do(i);
      s.hostname = r.host, s.secure = r.protocol === "https" || r.protocol === "wss", s.port = r.port, r.query && (s.query = r.query);
    } else s.host && (s.hostname = Do(s.host).host);
    mc(this, s), this.secure = s.secure != null ? s.secure : typeof location < "u" && location.protocol === "https:", s.hostname && !s.port && (s.port = this.secure ? "443" : "80"), this.hostname = s.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = s.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, s.transports.forEach((r) => {
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
    }, s), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Hg(this.opts.query)), Uo && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, oc.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    s.EIO = jm, s.transport = i, this.id && (s.sid = this.id);
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
    const i = this.opts.rememberUpgrade && ra.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", ra.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (S && (s += Bg(S)), r > 0 && s > this._maxPayload)
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
    return i && (this._pingTimeoutTime = 0, hc(() => {
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
    const z = {
      type: i,
      data: s,
      options: r
    };
    this.emitReserved("packetCreate", z), this.writeBuffer.push(z), S && this.once("flush", S), this.flush();
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
    if (ra.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Uo && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = oc.indexOf(this._offlineEventListener);
        r !== -1 && oc.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", i, s), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
ra.protocol = jm;
class tp extends ra {
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
    ra.priorWebsocketSuccess = !1;
    const S = () => {
      r || (s.send([{ type: "ping", data: "probe" }]), s.once("packet", (G) => {
        if (!r)
          if (G.type === "pong" && G.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", s), !s)
              return;
            ra.priorWebsocketSuccess = s.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && ($(), this.setTransport(s), s.send([{ type: "upgrade" }]), this.emitReserved("upgrade", s), s = null, this.upgrading = !1, this.flush());
            });
          } else {
            const ie = new Error("probe error");
            ie.transport = s.name, this.emitReserved("upgradeError", ie);
          }
      }));
    };
    function z() {
      r || (r = !0, $(), s.close(), s = null);
    }
    const w = (G) => {
      const ie = new Error("probe error: " + G);
      ie.transport = s.name, z(), this.emitReserved("upgradeError", ie);
    };
    function k() {
      w("transport closed");
    }
    function U() {
      w("socket closed");
    }
    function q(G) {
      s && G.name !== s.name && z();
    }
    const $ = () => {
      s.removeListener("open", S), s.removeListener("error", w), s.removeListener("close", k), this.off("close", U), this.off("upgrading", q);
    };
    s.once("open", S), s.once("error", w), s.once("close", k), this.once("close", U), this.once("upgrading", q), this._upgrades.indexOf("webtransport") !== -1 && i !== "webtransport" ? this.setTimeoutFn(() => {
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
let lp = class extends tp {
  constructor(i, s = {}) {
    const r = typeof i == "object" ? i : s;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((S) => Fg[S]).filter((S) => !!S)), super(i, r);
  }
};
function np(o, i = "", s) {
  let r = o;
  s = s || typeof location < "u" && location, o == null && (o = s.protocol + "//" + s.host), typeof o == "string" && (o.charAt(0) === "/" && (o.charAt(1) === "/" ? o = s.protocol + o : o = s.host + o), /^(https?|wss?):\/\//.test(o) || (typeof s < "u" ? o = s.protocol + "//" + o : o = "https://" + o), r = Do(o)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const z = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + z + ":" + r.port + i, r.href = r.protocol + "://" + z + (s && s.port === r.port ? "" : ":" + r.port), r;
}
const ap = typeof ArrayBuffer == "function", up = (o) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(o) : o.buffer instanceof ArrayBuffer, Gm = Object.prototype.toString, ip = typeof Blob == "function" || typeof Blob < "u" && Gm.call(Blob) === "[object BlobConstructor]", sp = typeof File == "function" || typeof File < "u" && Gm.call(File) === "[object FileConstructor]";
function Vo(o) {
  return ap && (o instanceof ArrayBuffer || up(o)) || ip && o instanceof Blob || sp && o instanceof File;
}
function fc(o, i) {
  if (!o || typeof o != "object")
    return !1;
  if (Array.isArray(o)) {
    for (let s = 0, r = o.length; s < r; s++)
      if (fc(o[s]))
        return !0;
    return !1;
  }
  if (Vo(o))
    return !0;
  if (o.toJSON && typeof o.toJSON == "function" && arguments.length === 1)
    return fc(o.toJSON(), !0);
  for (const s in o)
    if (Object.prototype.hasOwnProperty.call(o, s) && fc(o[s]))
      return !0;
  return !1;
}
function cp(o) {
  const i = [], s = o.data, r = o;
  return r.data = jo(s, i), r.attachments = i.length, { packet: r, buffers: i };
}
function jo(o, i) {
  if (!o)
    return o;
  if (Vo(o)) {
    const s = { _placeholder: !0, num: i.length };
    return i.push(o), s;
  } else if (Array.isArray(o)) {
    const s = new Array(o.length);
    for (let r = 0; r < o.length; r++)
      s[r] = jo(o[r], i);
    return s;
  } else if (typeof o == "object" && !(o instanceof Date)) {
    const s = {};
    for (const r in o)
      Object.prototype.hasOwnProperty.call(o, r) && (s[r] = jo(o[r], i));
    return s;
  }
  return o;
}
function rp(o, i) {
  return o.data = Bo(o.data, i), delete o.attachments, o;
}
function Bo(o, i) {
  if (!o)
    return o;
  if (o && o._placeholder === !0) {
    if (typeof o.num == "number" && o.num >= 0 && o.num < i.length)
      return i[o.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(o))
    for (let s = 0; s < o.length; s++)
      o[s] = Bo(o[s], i);
  else if (typeof o == "object")
    for (const s in o)
      Object.prototype.hasOwnProperty.call(o, s) && (o[s] = Bo(o[s], i));
  return o;
}
const op = [
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
var he;
(function(o) {
  o[o.CONNECT = 0] = "CONNECT", o[o.DISCONNECT = 1] = "DISCONNECT", o[o.EVENT = 2] = "EVENT", o[o.ACK = 3] = "ACK", o[o.CONNECT_ERROR = 4] = "CONNECT_ERROR", o[o.BINARY_EVENT = 5] = "BINARY_EVENT", o[o.BINARY_ACK = 6] = "BINARY_ACK";
})(he || (he = {}));
class fp {
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
    return (i.type === he.EVENT || i.type === he.ACK) && fc(i) ? this.encodeAsBinary({
      type: i.type === he.EVENT ? he.BINARY_EVENT : he.BINARY_ACK,
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
    return (i.type === he.BINARY_EVENT || i.type === he.BINARY_ACK) && (s += i.attachments + "-"), i.nsp && i.nsp !== "/" && (s += i.nsp + ","), i.id != null && (s += i.id), i.data != null && (s += JSON.stringify(i.data, this.replacer)), s;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(i) {
    const s = cp(i), r = this.encodeAsString(s.packet), S = s.buffers;
    return S.unshift(r), S;
  }
}
class Zo extends at {
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
      const r = s.type === he.BINARY_EVENT;
      r || s.type === he.BINARY_ACK ? (s.type = r ? he.EVENT : he.ACK, this.reconstructor = new dp(s), s.attachments === 0 && super.emitReserved("decoded", s)) : super.emitReserved("decoded", s);
    } else if (Vo(i) || i.base64)
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
    if (he[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === he.BINARY_EVENT || r.type === he.BINARY_ACK) {
      const z = s + 1;
      for (; i.charAt(++s) !== "-" && s != i.length; )
        ;
      const w = i.substring(z, s);
      if (w != Number(w) || i.charAt(s) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(w);
    }
    if (i.charAt(s + 1) === "/") {
      const z = s + 1;
      for (; ++s && !(i.charAt(s) === "," || s === i.length); )
        ;
      r.nsp = i.substring(z, s);
    } else
      r.nsp = "/";
    const S = i.charAt(s + 1);
    if (S !== "" && Number(S) == S) {
      const z = s + 1;
      for (; ++s; ) {
        const w = i.charAt(s);
        if (w == null || Number(w) != w) {
          --s;
          break;
        }
        if (s === i.length)
          break;
      }
      r.id = Number(i.substring(z, s + 1));
    }
    if (i.charAt(++s)) {
      const z = this.tryParse(i.substr(s));
      if (Zo.isPayloadValid(r.type, z))
        r.data = z;
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
      case he.CONNECT:
        return _m(s);
      case he.DISCONNECT:
        return s === void 0;
      case he.CONNECT_ERROR:
        return typeof s == "string" || _m(s);
      case he.EVENT:
      case he.BINARY_EVENT:
        return Array.isArray(s) && (typeof s[0] == "number" || typeof s[0] == "string" && op.indexOf(s[0]) === -1);
      case he.ACK:
      case he.BINARY_ACK:
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
class dp {
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
      const s = rp(this.reconPack, this.buffers);
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
function _m(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
const hp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Zo,
  Encoder: fp,
  get PacketType() {
    return he;
  }
}, Symbol.toStringTag, { value: "Module" }));
function jl(o, i, s) {
  return o.on(i, s), function() {
    o.off(i, s);
  };
}
const mp = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Xm extends at {
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
      jl(i, "open", this.onopen.bind(this)),
      jl(i, "packet", this.onpacket.bind(this)),
      jl(i, "error", this.onerror.bind(this)),
      jl(i, "close", this.onclose.bind(this))
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
    var r, S, z;
    if (mp.hasOwnProperty(i))
      throw new Error('"' + i.toString() + '" is a reserved event name');
    if (s.unshift(i), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(s), this;
    const w = {
      type: he.EVENT,
      data: s
    };
    if (w.options = {}, w.options.compress = this.flags.compress !== !1, typeof s[s.length - 1] == "function") {
      const $ = this.ids++, G = s.pop();
      this._registerAckCallback($, G), w.id = $;
    }
    const k = (S = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || S === void 0 ? void 0 : S.writable, U = this.connected && !(!((z = this.io.engine) === null || z === void 0) && z._hasPingExpired());
    return this.flags.volatile && !k || (U ? (this.notifyOutgoingListeners(w), this.packet(w)) : this.sendBuffer.push(w)), this.flags = {}, this;
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
    const z = this.io.setTimeoutFn(() => {
      delete this.acks[i];
      for (let k = 0; k < this.sendBuffer.length; k++)
        this.sendBuffer[k].id === i && this.sendBuffer.splice(k, 1);
      s.call(this, new Error("operation has timed out"));
    }, S), w = (...k) => {
      this.io.clearTimeoutFn(z), s.apply(this, k);
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
      const z = (w, k) => w ? S(w) : r(k);
      z.withError = !0, s.push(z), this.emit(i, ...s);
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
    i.push((S, ...z) => (this._queue[0], S !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), s && s(S)) : (this._queue.shift(), s && s(null, ...z)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
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
      type: he.CONNECT,
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
        case he.CONNECT:
          i.data && i.data.sid ? this.onconnect(i.data.sid, i.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case he.EVENT:
        case he.BINARY_EVENT:
          this.onevent(i);
          break;
        case he.ACK:
        case he.BINARY_ACK:
          this.onack(i);
          break;
        case he.DISCONNECT:
          this.ondisconnect();
          break;
        case he.CONNECT_ERROR:
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
        type: he.ACK,
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
    return this.connected && this.packet({ type: he.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function wu(o) {
  o = o || {}, this.ms = o.min || 100, this.max = o.max || 1e4, this.factor = o.factor || 2, this.jitter = o.jitter > 0 && o.jitter <= 1 ? o.jitter : 0, this.attempts = 0;
}
wu.prototype.duration = function() {
  var o = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var i = Math.random(), s = Math.floor(i * this.jitter * o);
    o = (Math.floor(i * 10) & 1) == 0 ? o - s : o + s;
  }
  return Math.min(o, this.max) | 0;
};
wu.prototype.reset = function() {
  this.attempts = 0;
};
wu.prototype.setMin = function(o) {
  this.ms = o;
};
wu.prototype.setMax = function(o) {
  this.max = o;
};
wu.prototype.setJitter = function(o) {
  this.jitter = o;
};
class wo extends at {
  constructor(i, s) {
    var r;
    super(), this.nsps = {}, this.subs = [], i && typeof i == "object" && (s = i, i = void 0), s = s || {}, s.path = s.path || "/socket.io", this.opts = s, mc(this, s), this.reconnection(s.reconnection !== !1), this.reconnectionAttempts(s.reconnectionAttempts || 1 / 0), this.reconnectionDelay(s.reconnectionDelay || 1e3), this.reconnectionDelayMax(s.reconnectionDelayMax || 5e3), this.randomizationFactor((r = s.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new wu({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(s.timeout == null ? 2e4 : s.timeout), this._readyState = "closed", this.uri = i;
    const S = s.parser || hp;
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
    this.engine = new lp(this.uri, this.opts);
    const s = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const S = jl(s, "open", function() {
      r.onopen(), i && i();
    }), z = (k) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", k), i ? i(k) : this.maybeReconnectOnOpen();
    }, w = jl(s, "error", z);
    if (this._timeout !== !1) {
      const k = this._timeout, U = this.setTimeoutFn(() => {
        S(), z(new Error("timeout")), s.close();
      }, k);
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
      jl(i, "ping", this.onping.bind(this)),
      jl(i, "data", this.ondata.bind(this)),
      jl(i, "error", this.onerror.bind(this)),
      jl(i, "close", this.onclose.bind(this)),
      // @ts-ignore
      jl(this.decoder, "decoded", this.ondecoded.bind(this))
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
    hc(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new Xm(this, i, s), this.nsps[i] = r), r;
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
const ji = {};
function dc(o, i) {
  typeof o == "object" && (i = o, o = void 0), i = i || {};
  const s = np(o, i.path || "/socket.io"), r = s.source, S = s.id, z = s.path, w = ji[S] && z in ji[S].nsps, k = i.forceNew || i["force new connection"] || i.multiplex === !1 || w;
  let U;
  return k ? U = new wo(r, i) : (ji[S] || (ji[S] = new wo(r, i)), U = ji[S]), s.query && !i.query && (i.query = s.queryKey), U.socket(s.path, i);
}
Object.assign(dc, {
  Manager: wo,
  Socket: Xm,
  io: dc,
  connect: dc
});
let Ga = null;
function yp(o) {
  return Ga ? Ga.auth = { token: o } : Ga = dc({
    autoConnect: !1,
    transports: ["websocket"],
    auth: { token: o }
  }), Ga;
}
function gp() {
  Ga && (Ga.disconnect(), Ga = null);
}
const Lo = ["POPULAR", "MAL_ONLY", "HYBRID"], Ho = ["STANDARD", "BALANCED_STRICT", "BALANCED_RELAXED"], Yo = ["OP_ONLY", "ED_ONLY", "MIXED"], ic = {
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
}, sc = {
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
}, cc = {
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
}, pp = 2, vp = 3, bp = 2, Bl = {
  name: "",
  isPrivate: !1,
  maxPlayers: 8,
  roundCount: 10,
  guessSeconds: 20,
  sourceMode: "HYBRID",
  selectionMode: "STANDARD",
  themeMode: "MIXED"
};
function Am(o) {
  return o ? {
    name: typeof o.name == "string" ? o.name : "",
    isPrivate: !!o.isPrivate,
    maxPlayers: Number.isInteger(o.maxPlayers) ? o.maxPlayers : Bl.maxPlayers,
    roundCount: Number.isInteger(o.roundCount) ? o.roundCount : Bl.roundCount,
    guessSeconds: Number.isInteger(o.guessSeconds) ? o.guessSeconds : Bl.guessSeconds,
    sourceMode: Lo.includes(o.sourceMode) ? o.sourceMode : Bl.sourceMode,
    selectionMode: Ho.includes(o.selectionMode) ? o.selectionMode : Bl.selectionMode,
    themeMode: Yo.includes(o.themeMode) ? o.themeMode : Bl.themeMode
  } : { ...Bl };
}
function ul(o, i, s, { timeoutMs: r = 1e4 } = {}) {
  return new Promise((S, z) => {
    let w = !1;
    const k = window.setTimeout(() => {
      w || (w = !0, z(new Error("Request timed out")));
    }, r);
    o.emit(i, s, (U) => {
      if (!w)
        return w = !0, window.clearTimeout(k), U?.ok ? S(U) : z(new Error(U?.error || U?.code || "Request failed"));
    });
  });
}
function Zl(o) {
  return String(o || "").trim().toUpperCase();
}
function Sp(o) {
  const s = String(o || "").trim().match(/^\/(?:amq\/lobby|amq\/invite|invite)\/([^/?#]+)/i);
  if (!s) return "";
  try {
    return Zl(decodeURIComponent(s[1]));
  } catch {
    return "";
  }
}
function Ya(o, i) {
  const s = Zl(o), r = s ? `/amq/lobby/${encodeURIComponent(s)}` : "/amq", S = new URLSearchParams(window.location.search);
  i ? (S.set("i", i), S.delete("inviteToken"), S.delete("lobby")) : (S.delete("lobby"), S.delete("i"), S.delete("inviteToken"));
  const z = S.toString();
  window.history.replaceState({}, "", z ? `${r}?${z}` : r);
}
function Ep(o) {
  const i = String(o || "").trim();
  if (!i) return "";
  const s = i.split(".");
  if (s.length !== 3) return "";
  const r = String(s[0] || "").toUpperCase();
  return /^[A-Z0-9]{4,12}$/.test(r) ? r : "";
}
function _p(o) {
  if (!Number.isFinite(o) || o <= 0) return "00:00";
  const i = Math.ceil(o / 1e3), s = Math.floor(i / 60), r = i % 60;
  return `${String(s).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function Bu(o, i, s) {
  const r = Number.parseInt(o, 10);
  return Number.isFinite(r) ? Math.max(i, Math.min(s, r)) : i;
}
function Tm(o) {
  const i = String(o || "").replace(/\D+/g, "");
  return i ? i.slice(0, 2) : "";
}
function Nm(o, i) {
  return (i.score || 0) - (o.score || 0);
}
function Ap(o) {
  return Array.isArray(o) ? o.map((i) => ({
    index: Number.parseInt(i?.index, 10),
    audioUrl: typeof i?.audioUrl == "string" ? i.audioUrl : null,
    videoUrl: typeof i?.videoUrl == "string" ? i.videoUrl : null,
    sampleStartSec: Number.isFinite(i?.sampleStartSec) ? i.sampleStartSec : 0,
    sampleDurationSec: Number.isFinite(i?.sampleDurationSec) ? i.sampleDurationSec : 0
  })).filter((i) => Number.isInteger(i.index) && i.index > 0).sort((i, s) => i.index - s.index) : [];
}
function vn(o) {
  return String(o || "").trim();
}
function xm(o) {
  const i = vn(o).toLowerCase();
  return i ? i.includes("only host") ? "Only the host can start the game." : i.includes("all players must be ready") ? "All players must click Ready before the host can start." : i.includes("not enough players") ? "Not enough players to start. Invite more players or lower the minimum players setting." : i.includes("balanced strict") ? "Balanced strict could not build fair rounds from MAL lists. Try BALANCED_RELAXED or HYBRID." : i.includes("mal_only") ? "MAL_ONLY could not build enough rounds from linked MAL lists. Try HYBRID or POPULAR." : i.includes("playable round media") || i.includes("round seeds") || i.includes("media provider") ? "Could not prepare enough playable songs for this match. Try fewer rounds or different source/theme settings." : i.includes("timed out") ? "Game start timed out. Please try again." : vn(o) : "Could not start the game right now. Please try again.";
}
function Tp(o) {
  const i = vn(o).toLowerCase();
  return i ? i.includes("at least 2 characters") ? "Type at least 2 characters to search." : i.includes("too many") || i.includes("rate") ? "Search is rate-limited right now. Wait a few seconds and try again." : i.includes("timed out") ? "Search timed out. Please try again." : "Search is temporarily unavailable. You can still submit a typed guess." : "Search is temporarily unavailable. You can still submit a typed guess.";
}
function Bi(o) {
  return o === "autoplay_blocked" ? "Autoplay was blocked or the sample failed to auto-start. Press Play sample." : o === "source_unavailable" ? "This sample source failed to load for your browser." : "Could not play sample audio for this round.";
}
function Np(o) {
  const i = vn(o).toLowerCase();
  return i ? i.includes("lobby not found") || i.includes("not accepting new players") || i.includes("lobby is full") : !1;
}
function xp(o) {
  const i = vn(o).toLowerCase();
  return i ? i.includes("kicked from this lobby") ? vn(o) : i.includes("valid invite token is required") ? "This lobby is private. Ask the host for the invite link." : vn(o) : "Could not join this lobby right now.";
}
function Rp(o) {
  const i = String(o || "").trim().toLowerCase();
  return i === "host_offline_timeout" ? "Lobby was closed because the host stayed offline too long." : i === "zero_connected_round_streak" ? "Lobby was closed due to inactivity (no connected players for multiple rounds)." : "Lobby was closed.";
}
function Rm(o) {
  const i = String(o?.name || ""), s = vn(o?.message).toLowerCase();
  return i === "NotAllowedError" || s.includes("notallowederror") || s.includes("user gesture") || s.includes("permission") || s.includes("autoplay") ? "autoplay_blocked" : i === "AbortError" ? "aborted" : i === "NotSupportedError" || s.includes("failed to load") || s.includes("no supported source") || s.includes("not supported") ? "source_unavailable" : "play_failed";
}
function Op() {
  const o = Cm(), i = b.useRef(null), s = b.useRef(null), r = b.useRef(""), S = b.useRef(null), z = b.useRef(!1), w = b.useRef(null), k = b.useRef(!1), U = b.useRef(!1), q = b.useRef(0), $ = b.useRef(!1), G = b.useRef(!1), ie = b.useRef(null), Ke = b.useRef(null), Je = b.useRef(null), it = b.useRef(null), qt = b.useRef(null), st = b.useRef(null), il = b.useRef(0.25), Me = b.useRef(null), ft = b.useRef(/* @__PURE__ */ new Map()), qe = b.useRef(/* @__PURE__ */ new Map()), We = b.useRef(/* @__PURE__ */ new Map()), le = b.useRef(/* @__PURE__ */ new Map()), je = b.useRef(/* @__PURE__ */ new Map()), xt = b.useRef(/* @__PURE__ */ new Map()), sl = b.useRef(/* @__PURE__ */ new Map()), ct = b.useRef([]), Fe = b.useRef(/* @__PURE__ */ new Set()), Vt = b.useRef(0), zt = b.useRef([]), He = b.useRef(!1), x = b.useRef(null), L = b.useRef(!1), Z = b.useRef(0), [ge, Se] = b.useState(!0), [y, N] = b.useState(""), [H, D] = b.useState(""), [I, K] = b.useState(""), [me, rt] = b.useState(!1), [F, oa] = b.useState(null), [bn, Xa] = b.useState([]), [ka, Wl] = b.useState(""), [fa, Fl] = b.useState(!1), [Sn, cl] = b.useState(!1), [gt, Dt] = b.useState(null), [pt, rl] = b.useState(null), [yc, vt] = b.useState(!1), [Zt, ol] = b.useState(Bl), [Ut, bt] = b.useState(Bl), [Qa, Lu] = b.useState(String(Bl.maxPlayers)), [Va, Za] = b.useState(String(Bl.maxPlayers)), [En, St] = b.useState(""), [Rl, Ye] = b.useState(""), [j, _n] = b.useState(null), [Li, da] = b.useState(null), [P, fl] = b.useState("WAITING"), [Ol, Cl] = b.useState(null), [ha, Hi] = b.useState("00:00"), [se, ma] = b.useState(null), [ya, An] = b.useState([]), [Et, $l] = b.useState(null), [ga, Tn] = b.useState(null), [wl, pa] = b.useState([]), [Nn, jt] = b.useState([]), [Ge, $e] = b.useState([]), [dl, xn] = b.useState(""), [Hu, Ka] = b.useState(null), [Yu, Kt] = b.useState([]), [va, Jt] = b.useState(!1), [Ll, Wt] = b.useState(!1), [Rn, Ae] = b.useState(!1), [Yi, Ja] = b.useState(null), [Ml, Bt] = b.useState(!1), [Il, Gi] = b.useState(0.25), [Gu, On] = b.useState(""), [ba, _t] = b.useState(""), [hl, Xe] = b.useState(""), [Xi, Pl] = b.useState(!1), [Cn, Wa] = b.useState({ ready: 0, failed: 0, total: 0 }), [Mn, qn] = b.useState(""), [Rt, Hl] = b.useState(!1), [Fa, ml] = b.useState(null), [Be, ki] = b.useState(null), [$a, zn] = b.useState(""), gc = b.useCallback((f) => {
    const p = Tm(f);
    Lu(p), p && ol((O) => ({
      ...O,
      maxPlayers: Bu(p, 1, 8)
    }));
  }, []), Qi = b.useCallback((f) => {
    const p = Tm(f);
    Za(p), p && bt((O) => ({
      ...O,
      maxPlayers: Bu(p, 1, 8)
    }));
  }, []), Ia = b.useCallback(() => {
    const f = Bu(Zt.maxPlayers, 1, 8), p = Qa ? Bu(Qa, 1, 8) : f;
    return ol((O) => ({ ...O, maxPlayers: p })), Lu(String(p)), p;
  }, [Zt.maxPlayers, Qa]), Sa = b.useCallback(() => {
    const f = Bu(Ut.maxPlayers, 1, 8), p = Va ? Bu(Va, 1, 8) : f;
    return bt((O) => ({ ...O, maxPlayers: p })), Za(String(p)), p;
  }, [Ut.maxPlayers, Va]);
  b.useEffect(() => {
    s.current = j;
  }, [j]), b.useEffect(() => {
    r.current = Rl;
  }, [Rl]), b.useEffect(() => {
    il.current = Il;
  }, [Il]), b.useEffect(() => {
    if (!fa && !Sn && !gt && !pt) return;
    const f = (p) => {
      if (p.key === "Escape") {
        if (pt) {
          rl(null);
          return;
        }
        if (gt) {
          Dt(null);
          return;
        }
        if (Sn) {
          cl(!1);
          return;
        }
        Fl(!1);
      }
    };
    return window.addEventListener("keydown", f), () => window.removeEventListener("keydown", f);
  }, [fa, pt, gt, Sn]), b.useEffect(() => {
    if (!pt) return;
    (j?.players || []).some((p) => p.userId === pt.userId) || rl(null);
  }, [pt, j]), b.useEffect(() => {
    if (!gt) return;
    (j?.players || []).some((p) => p.userId === gt.userId) || Dt(null);
  }, [gt, j]), b.useEffect(() => {
    if (!j || j.status !== "WAITING") {
      cl(!1);
      return;
    }
    if (Sn) return;
    const f = Am(j);
    bt(f), Za(String(f.maxPlayers));
  }, [j, Sn]), b.useEffect(() => {
    if (!H) return;
    const f = window.setTimeout(() => D(""), 7e3);
    return () => window.clearTimeout(f);
  }, [H]), b.useEffect(() => {
    if (!I) return;
    const f = window.setTimeout(() => K(""), 4500);
    return () => window.clearTimeout(f);
  }, [I]), b.useEffect(() => {
    if (!va || P !== "GUESSING") return;
    const f = (p) => {
      p.key === "Escape" && (Jt(!1), it.current?.blur?.());
    };
    return window.addEventListener("keydown", f), () => {
      window.removeEventListener("keydown", f);
    };
  }, [P, va]), b.useEffect(() => {
    P !== "GUESSING" && Jt(!1);
  }, [P]);
  const Vi = b.useMemo(() => {
    const f = /* @__PURE__ */ new Map();
    for (const p of j?.players || [])
      f.set(p.userId, p.displayName);
    return f;
  }, [j]), Xu = b.useCallback((f) => Vi.get(f) || `User ${f}`, [Vi]), en = b.useCallback(() => {
    st.current && (window.clearTimeout(st.current), st.current = null);
  }, []), ke = b.useCallback(() => {
    en(), ie.current && ie.current.pause(), Ke.current && Ke.current.pause(), qt.current = null, Ae(!1);
  }, [en]), yl = b.useCallback(() => {
    const f = Je.current;
    if (f) {
      f.pause();
      try {
        f.currentTime = 0;
      } catch {
      }
    }
  }, []), gl = b.useCallback(() => {
    const f = zt.current;
    if (!Array.isArray(f) || f.length === 0) {
      Wa({ ready: 0, failed: 0, total: 0 });
      return;
    }
    let p = 0, O = 0;
    for (const B of f) {
      const Q = qe.current.get(B);
      Q === "ready" ? p += 1 : Q === "failed" && (O += 1);
    }
    Wa({ ready: p, failed: O, total: f.length });
  }, []), ql = b.useCallback((f = null) => {
    const p = f instanceof Set ? f : null, O = [];
    for (const [B] of sl.current)
      p && p.has(B) || O.push(B);
    for (const B of O) {
      const Q = sl.current.get(B);
      if (Q) {
        try {
          Q.pause?.(), Q.removeAttribute("src"), Q.load?.();
        } catch {
        }
        Q.parentNode && Q.parentNode.removeChild(Q);
      }
      sl.current.delete(B), xt.current.delete(B), je.current.delete(B);
    }
  }, []), Ft = b.useCallback(() => {
    He.current = !0, ft.current.clear(), qe.current.clear(), We.current.clear(), le.current.clear(), ct.current = [], Fe.current.clear(), Vt.current = 0, zt.current = [], x.current = null, L.current = !1, ql(), Pl(!1), Wa({ ready: 0, failed: 0, total: 0 }), qn(""), Hl(!1);
  }, [ql]), ku = b.useCallback((f, p = "video") => {
    const O = typeof f == "string" ? f.trim() : "";
    if (!O)
      return Promise.reject(new Error("Missing media url"));
    const B = je.current.get(O);
    if (B === "ready")
      return Promise.resolve(!0);
    const Q = xt.current.get(O);
    if (B === "loading" && Q)
      return Q;
    je.current.set(O, "loading");
    const ue = new Promise((ye, Qe) => {
      if (He.current) {
        je.current.set(O, "failed"), Qe(new Error("Preload manager was reset"));
        return;
      }
      const ae = document.createElement(p === "audio" ? "audio" : "video");
      ae.preload = "auto", ae.muted = !0, ae.playsInline = !0, ae.style.position = "absolute", ae.style.left = "-10000px", ae.style.width = "1px", ae.style.height = "1px", ae.style.opacity = "0";
      const De = (Ta) => {
        if (Pe(), Ta) {
          je.current.set(O, "ready"), sl.current.set(O, ae), ye(!0);
          return;
        }
        je.current.set(O, "failed"), sl.current.delete(O), ae.parentNode && ae.parentNode.removeChild(ae), Qe(new Error("Media preload failed"));
      }, Pe = () => {
        window.clearTimeout(Ct), ae.removeEventListener("loadeddata", Ot), ae.removeEventListener("canplaythrough", Ot), ae.removeEventListener("error", tn);
      }, Ot = () => De(!0), tn = () => De(!1), Ct = window.setTimeout(() => De(!1), 12e3);
      ae.addEventListener("loadeddata", Ot, { once: !0 }), ae.addEventListener("canplaythrough", Ot, { once: !0 }), ae.addEventListener("error", tn, { once: !0 }), document.body.appendChild(ae), ae.src = O, ae.load();
    }).finally(() => {
      je.current.get(O) !== "loading" && xt.current.delete(O);
    });
    return xt.current.set(O, ue), ue;
  }, []), Pa = b.useCallback(async (f) => {
    const p = Number.parseInt(f, 10);
    if (!Number.isInteger(p) || p <= 0 || He.current) return !1;
    const O = We.current.get(p);
    if (O) return O;
    if (qe.current.get(p) === "ready") return !0;
    const Q = ft.current.get(p);
    if (!Q)
      return qe.current.set(p, "failed"), gl(), !1;
    const ue = [Q.audioUrl, Q.videoUrl].filter((Qe, ae, De) => Qe && De.indexOf(Qe) === ae);
    le.current.set(p, new Set(ue)), qe.current.set(p, "loading"), gl();
    const ye = (async () => {
      if (ue.length === 0)
        return qe.current.set(p, "failed"), !1;
      const ae = (await Promise.allSettled(ue.map((De) => {
        const Pe = Q.audioUrl && De === Q.audioUrl ? "audio" : "video";
        return ku(De, Pe);
      }))).some((De) => De.status === "fulfilled");
      return qe.current.set(p, ae ? "ready" : "failed"), ae;
    })().finally(() => {
      We.current.delete(p), gl();
    });
    return We.current.set(p, ye), ye;
  }, [ku, gl]), eu = b.useCallback(() => {
    if (!He.current)
      for (; Vt.current < bp && ct.current.length > 0; ) {
        const f = ct.current.shift();
        Fe.current.delete(f);
        const p = qe.current.get(f);
        p === "ready" || p === "loading" || (Vt.current += 1, Pa(f).catch(() => !1).finally(() => {
          Vt.current = Math.max(0, Vt.current - 1), eu();
        }));
      }
  }, [Pa]), pl = b.useCallback((f = []) => {
    for (const p of f) {
      const O = Number.parseInt(p, 10);
      if (!Number.isInteger(O) || O <= 0 || !ft.current.has(O)) continue;
      const B = qe.current.get(O);
      B === "ready" || B === "loading" || Fe.current.has(O) || (qe.current.set(O, "pending"), ct.current.push(O), Fe.current.add(O));
    }
    gl(), eu();
  }, [eu, gl]), wt = b.useCallback(async (f, p = 2e4) => {
    const O = (Array.isArray(f) ? f : []).map((Q) => Number.parseInt(Q, 10)).filter((Q) => Number.isInteger(Q) && Q > 0);
    if (O.length === 0) return { ok: !0 };
    const B = Date.now();
    for (; !He.current; ) {
      const Q = O.filter((ye) => qe.current.get(ye) === "failed");
      if (Q.length > 0)
        return { ok: !1, reason: "failed", failedIndexes: Q };
      if (O.every((ye) => qe.current.get(ye) === "ready")) return { ok: !0 };
      if (Date.now() - B >= p)
        return { ok: !1, reason: "timeout" };
      await new Promise((ye) => window.setTimeout(ye, 120));
    }
    return { ok: !1, reason: "cancelled" };
  }, []), Dn = b.useCallback((f) => !f || f.ok ? "" : f.reason === "failed" ? "Failed to preload required round media. Retry to continue." : f.reason === "timeout" ? "Preloading required media timed out. Retry to continue." : "Preloading was interrupted. Retry to continue.", []), Un = b.useCallback((f = []) => {
    const p = new Set(
      (Array.isArray(f) ? f : []).map((B) => Number.parseInt(B, 10)).filter((B) => Number.isInteger(B) && B > 0)
    ), O = /* @__PURE__ */ new Set();
    for (const [B, Q] of le.current)
      if (p.has(B))
        for (const ue of Q || []) O.add(ue);
    for (const B of [...le.current.keys()])
      p.has(B) || (le.current.delete(B), qe.current.delete(B), We.current.delete(B));
    ct.current = ct.current.filter((B) => p.has(B)), Fe.current = new Set(ct.current), ql(O);
  }, [ql]), Lt = b.useCallback(async (f, p) => {
    const O = Zl(f), B = Number.parseInt(p, 10);
    if (!O || !Number.isInteger(B) || L.current) return;
    const Q = i.current;
    if (Q?.connected) {
      L.current = !0;
      try {
        await ul(Q, "game:preload_ready", {
          lobbyCode: O,
          sessionId: B
        });
      } catch (ue) {
        L.current = !1, D(ue.message);
      }
    }
  }, []), tu = b.useCallback(async ({ sessionId: f, lobbyCode: p, manifest: O }) => {
    Ft(), He.current = !1;
    const B = Ap(O);
    ft.current = new Map(B.map((ye) => [ye.index, ye])), x.current = Number.parseInt(f, 10) || null, L.current = !1, qn(""), Hl(!1);
    const Q = B.slice(0, pp).map((ye) => ye.index);
    if (zt.current = Q, gl(), Q.length === 0) {
      await Lt(p, x.current);
      return;
    }
    Pl(!0), pl(Q);
    const ue = await wt(Q);
    if (!He.current) {
      if (!ue.ok) {
        qn(Dn(ue)), Pl(!0);
        return;
      }
      Pl(!1), await Lt(p, x.current);
    }
  }, [
    Dn,
    pl,
    Ft,
    Lt,
    gl,
    wt
  ]), lu = b.useCallback(async () => {
    if (He.current || L.current) return;
    const f = s.current?.code, p = x.current, O = zt.current;
    if (!f || !Number.isInteger(p) || !Array.isArray(O) || O.length === 0)
      return;
    Hl(!0), qn(""), Pl(!0), pl(O);
    const B = await wt(O);
    if (!He.current) {
      if (!B.ok) {
        qn(Dn(B)), Hl(!1);
        return;
      }
      Hl(!1), Pl(!1), await Lt(f, p);
    }
  }, [Dn, pl, Lt, wt]), Qu = b.useCallback((f) => {
    const p = Number.parseInt(f, 10);
    if (!Number.isInteger(p) || p <= 0) return;
    const O = [];
    for (let B = 0; B < vp; B += 1)
      O.push(p + B);
    pl(O), Un(O);
  }, [pl, Un]), Ea = b.useCallback((f) => {
    const p = String(f || "0");
    let O = 2166136261;
    for (let B = 0; B < p.length; B += 1)
      O ^= p.charCodeAt(B), O = Math.imul(O, 16777619);
    return (O >>> 0) / 4294967295;
  }, []), _a = b.useCallback(async (f) => {
    if (!f) return null;
    const p = Number(f.duration);
    if (Number.isFinite(p) && p > 0) return p;
    await new Promise((B) => {
      let Q = !1;
      const ue = () => {
        Q || (Q = !0, ye(), B());
      }, ye = () => {
        f.removeEventListener("loadedmetadata", ue), f.removeEventListener("durationchange", ue), f.removeEventListener("loadeddata", ue), f.removeEventListener("error", ue);
      };
      f.addEventListener("loadedmetadata", ue), f.addEventListener("durationchange", ue), f.addEventListener("loadeddata", ue), f.addEventListener("error", ue), window.setTimeout(ue, 2e3);
    });
    const O = Number(f.duration);
    return Number.isFinite(O) && O > 0 ? O : null;
  }, []), Vu = b.useCallback(async (f, p) => {
    const O = Me.current;
    if (Number.isFinite(O) && O >= 0) return O;
    const B = Number.isFinite(p?.sampleStartSec) ? Math.max(0, p.sampleStartSec) : 0;
    if (B > 0)
      return Me.current = B, B;
    const Q = Number.isFinite(p?.sampleDurationSec) ? Math.max(1, p.sampleDurationSec) : 10, ue = await _a(f);
    if (!Number.isFinite(ue) || ue <= 0)
      return Me.current = B, B;
    const ye = Math.floor(ue - Q);
    if (ye <= 0)
      return Me.current = 0, 0;
    const Qe = `${se?.roundId || 0}:${p?.animeId || 0}:${Q}`, ae = Ea(Qe), De = Math.floor(ae * (ye + 1));
    return Me.current = De, De;
  }, [se?.roundId, Ea, _a]), Ie = b.useCallback(async () => {
    const f = Je.current;
    if (!f) return !1;
    f.volume = Math.max(0, Math.min(1, Number(il.current))), f.muted = !1;
    try {
      return await f.play(), Bt(!1), Xe(""), !0;
    } catch (p) {
      const O = Rm(p);
      return O === "autoplay_blocked" ? (Bt(!0), !1) : (O !== "aborted" && Xe('Could not play solution video in this browser. Use "Open video source".'), Bt(!1), !1);
    }
  }, []), $t = b.useCallback(async ({ isAutoplay: f = !1 } = {}) => {
    const p = ie.current, O = Ke.current, B = se?.sample;
    if (P !== "GUESSING" || !p && !O || !B?.audioUrl && !B?.videoUrl) return !1;
    en(), ke(), _t("");
    const Q = Number.isFinite(B.sampleDurationSec) ? Math.max(1, B.sampleDurationSec) : 10, ue = Math.max(0, Math.min(1, Number(il.current))), ye = async (Pe, Ot) => {
      if (!Pe) return { ok: !1, reason: "source_unavailable" };
      Pe.volume = ue, Pe.muted = !1;
      const tn = await Vu(Pe, B);
      try {
        Pe.currentTime = tn;
      } catch {
      }
      try {
        return await Pe.play(), qt.current = Pe, Ja(Ot), Wt(!1), _t(""), Ae(!0), st.current = window.setTimeout(() => {
          const Ct = qt.current;
          Ct && (Ct.pause(), Ae(!1), qt.current = null);
        }, Q * 1e3), { ok: !0, reason: null };
      } catch (Ct) {
        return { ok: !1, reason: Rm(Ct) };
      }
    }, Qe = B?.audioUrl ? await ye(p, "audio") : { ok: !1, reason: "source_unavailable" };
    if (Qe.ok) return !0;
    const ae = B?.videoUrl ? await ye(O, "video") : { ok: !1, reason: "source_unavailable" };
    if (ae.ok) return !0;
    const De = [Qe.reason, ae.reason].filter(Boolean);
    return De.includes("autoplay_blocked") ? (Wt(!0), _t(Bi("autoplay_blocked")), !1) : (Wt(!1), De.includes("source_unavailable") ? (_t(Bi("source_unavailable")), !1) : ((!De.includes("aborted") || !f) && _t(Bi("play_failed")), !1));
  }, [en, P, Vu, se, ke]), Ht = b.useCallback(() => {
    Ft(), ke(), yl(), da(null), fl("WAITING"), Cl(null), ma(null), An([]), $l(null), Tn(null), pa([]), jt([]), $e([]), xn(""), Ka(null), Kt([]), On(""), _t(""), Xe(""), Wt(!1), Ja(null), Bt(!1), ml(null);
  }, [Ft, ke, yl]), jn = b.useCallback((f) => {
    const p = f || {}, O = p.phase || "WAITING";
    if (fl(O), ma(p.round || null), pa(Array.isArray(p.readyUserIds) ? p.readyUserIds : []), Cl(p.endsAt || p.solution?.endsAt || null), p?.round?.isSuddenDeath ? ml((B) => ({
      roundIndex: Number.parseInt(p?.round?.index, 10) || B?.roundIndex || null,
      tiedUserIds: Array.isArray(B?.tiedUserIds) ? B.tiedUserIds : []
    })) : ml(null), O === "ANSWERS_REVEAL") {
      An(Array.isArray(p.answers) ? p.answers : []), $l(null);
      return;
    }
    if (O === "SOLUTION_REVEAL") {
      An(Array.isArray(p.answers) ? p.answers : []), $l(p.solution || null);
      return;
    }
    O === "WAITING" && (An([]), $l(null));
  }, []), Aa = b.useCallback(async (f) => {
    const p = i.current;
    if (!(!p?.connected || !f))
      try {
        const O = await ul(p, "round:sync", { lobbyCode: f });
        jn(O?.state || {});
      } catch (O) {
        D(O.message);
      }
  }, [jn]), At = b.useCallback(async () => {
    if (!k.current) {
      k.current = !0, vt(!0);
      try {
        const f = await ju("/game/lobbies");
        Xa(Array.isArray(f.lobbies) ? f.lobbies : []);
      } finally {
        k.current = !1, vt(!1);
      }
    }
  }, []), Bn = b.useCallback(async (f, p) => {
    const O = i.current;
    if (!O) return;
    const B = {
      lobbyCode: f,
      ...p ? { inviteToken: p } : {}
    };
    if (!O.connected) {
      S.current = B, O.connect();
      return;
    }
    await ul(O, "lobby:join", B), await Aa(f);
  }, [Aa]), Yl = b.useCallback(async (f, p = "", O = {}) => {
    const B = Zl(f);
    if (!B) return D("Lobby code is required");
    const Q = !!O?.fromDirectory, ue = Date.now();
    if (!U.current && !(q.current > ue)) {
      U.current = !0, N("join"), D(""), K("");
      try {
        const ye = {};
        p && (ye.inviteToken = p);
        const Qe = await ju(`/game/lobbies/${B}/join`, {
          method: "POST",
          body: JSON.stringify(ye)
        });
        _n(Qe.lobby), Ye(p || ""), Ht(), Ya(B, p || ""), await Bn(B, p || ""), K(`Joined lobby ${B}`);
      } catch (ye) {
        q.current = Date.now() + 800, D(xp(ye?.message)), (Q || Np(ye?.message)) && (Xa((Qe) => Qe.filter((ae) => ae?.code !== B)), At().catch(() => {
        }));
      } finally {
        U.current = !1, N("");
      }
    }
  }, [Ht, At, Bn]), nu = b.useCallback(async () => {
    N("create"), D(""), K("");
    try {
      const f = Ia(), p = {
        ...Zt,
        maxPlayers: f
      }, O = await ju("/game/lobbies", {
        method: "POST",
        body: JSON.stringify(p)
      });
      _n(O.lobby), Fl(!1), Ht(), Ya(O.lobby.code, ""), await Bn(O.lobby.code, ""), K(`Created lobby ${O.lobby.code}`);
    } catch (f) {
      D(f.message);
    } finally {
      N("");
    }
  }, [Ht, Ia, Zt, Bn]), Zi = b.useCallback(() => {
    if (!j || j.status !== "WAITING") return;
    const f = Am(j);
    bt(f), Za(String(f.maxPlayers)), cl(!0);
  }, [j]), pc = b.useCallback(async () => {
    if (!(!j?.code || !i.current)) {
      N("settings"), D("");
      try {
        const f = Sa(), p = {
          ...Ut,
          maxPlayers: f
        };
        await ul(i.current, "lobby:update_settings", {
          lobbyCode: j.code,
          settings: p
        }), cl(!1), K("Lobby settings updated.");
      } catch (f) {
        D(f.message);
      } finally {
        N("");
      }
    }
  }, [Sa, Ut, j]), vc = b.useCallback(async () => {
    if (j?.code) {
      N("leave"), D("");
      try {
        i.current?.connected && await ul(i.current, "lobby:leave", { lobbyCode: j.code });
      } catch (f) {
        D(f.message);
      } finally {
        _n(null), Ye(""), cl(!1), Dt(null), rl(null), Ya("", ""), Ht(), N(""), At().catch(() => {
        });
      }
    }
  }, [Ht, At, j]), bc = b.useCallback(async () => {
    if (!(!j?.code || !i.current)) {
      N("start"), D("");
      try {
        await ul(i.current, "game:start", { lobbyCode: j.code }, { timeoutMs: 12e4 });
      } catch (f) {
        D(xm(f.message));
      } finally {
        N("");
      }
    }
  }, [j]), Zu = b.useCallback(async () => {
    if (!(!j?.code || !se?.roundId || !i.current)) {
      N("guess"), D("");
      try {
        await ul(i.current, "round:submit_guess", {
          lobbyCode: j.code,
          roundId: se.roundId,
          guessText: dl.trim(),
          guessAnimeId: Number.isInteger(Hu) ? Hu : null
        }), K("Guess saved");
      } catch (f) {
        D(f.message);
      } finally {
        N("");
      }
    }
  }, [Hu, dl, j, se]), Sc = b.useCallback(async () => {
    if (!(!j?.code || !i.current || !F)) {
      N("ready"), D("");
      try {
        const f = wl.includes(F.id);
        await ul(i.current, "round:set_ready", { lobbyCode: j.code, ready: !f });
      } catch (f) {
        D(f.message);
      } finally {
        N("");
      }
    }
  }, [j, wl, F]), Ec = b.useCallback(async () => {
    if (!(!j?.code || !i.current || !F)) {
      N("lobby-ready"), D("");
      try {
        const f = Nn.includes(F.id);
        await ul(i.current, "lobby:set_ready", {
          lobbyCode: j.code,
          ready: !f
        });
      } catch (f) {
        D(f.message);
      } finally {
        N("");
      }
    }
  }, [j, Nn, F]), _c = b.useCallback((f) => {
    if (!j?.code || !F || j.host?.id !== F.id) return;
    const p = Number.parseInt(f?.userId, 10);
    if (!Number.isInteger(p) || p === F?.id) return;
    const O = f?.displayName || `User ${p}`;
    Dt(null), rl({
      userId: p,
      displayName: O
    });
  }, [j, F]), Ac = b.useCallback((f) => {
    if (!j?.code || !F || j.host?.id !== F.id) return;
    const p = Number.parseInt(f?.userId, 10);
    if (!Number.isInteger(p) || p === F?.id) return;
    const O = f?.displayName || `User ${p}`;
    rl(null), Dt({
      userId: p,
      displayName: O
    });
  }, [j, F]), Tc = b.useCallback(async () => {
    if (!(!j?.code || !i.current || !gt) && !G.current) {
      G.current = !0, N("promote"), D("");
      try {
        await ul(i.current, "lobby:promote", {
          lobbyCode: j.code,
          userId: gt.userId
        }), K(`${gt.displayName} is now the host.`), Dt(null);
      } catch (f) {
        D(f.message);
      } finally {
        G.current = !1, N("");
      }
    }
  }, [j, gt]), Ki = b.useCallback(async () => {
    if (!(!j?.code || !i.current || !pt) && !$.current) {
      $.current = !0, N("kick"), D("");
      try {
        await ul(i.current, "lobby:kick", {
          lobbyCode: j.code,
          userId: pt.userId
        }), K(`${pt.displayName} was kicked from the lobby.`), rl(null);
      } catch (f) {
        D(f.message);
      } finally {
        $.current = !1, N("");
      }
    }
  }, [pt, j]), Nc = b.useCallback(async () => {
    if (j?.code) {
      N("invite"), D(""), K("");
      try {
        const f = await ju(`/game/lobbies/${j.code}/invite`);
        f.inviteToken ? (Ye(f.inviteToken), Ya(j.code, f.inviteToken)) : (Ye(""), Ya(j.code, "")), navigator.clipboard?.writeText ? (await navigator.clipboard.writeText(f.inviteUrl), K("Invite link copied")) : K(f.inviteUrl);
      } catch (f) {
        D(f.message);
      } finally {
        N("");
      }
    }
  }, [j]);
  b.useEffect(() => {
    if (!o) return pm();
    const f = yp(o);
    i.current = f;
    const p = async () => {
      rt(!0), D("");
      try {
        S.current ? (await ul(f, "lobby:join", S.current), await Aa(S.current.lobbyCode), S.current = null) : s.current?.code ? (await ul(f, "lobby:join", {
          lobbyCode: s.current.code,
          ...r.current ? { inviteToken: r.current } : {}
        }), await Aa(s.current.code)) : At().catch(() => {
        });
      } catch (W) {
        D(W.message);
      }
    }, O = () => rt(!1), B = (W) => {
      const Ue = String(W?.code || ""), Tt = vn(W?.message);
      if (Ue === "game_start_failed") {
        D(xm(Tt));
        return;
      }
      D(Tt || "Realtime error");
    }, Q = ({ lobby: W }) => {
      W && (_n(W), W.status !== "WAITING" && (jt([]), $e([])));
    }, ue = ({ sessionId: W, config: Ue, preloadManifest: Tt }) => {
      da({ sessionId: W, ...Ue || {} }), Tn(null), fl("PENDING"), ml(null), jt([]), $e([]), s.current?.code && tu({
        sessionId: W,
        lobbyCode: s.current.code,
        manifest: Tt
      }).catch(() => {
      });
    }, ye = (W) => {
      ke(), yl(), Pl(!1), qn(""), Hl(!1), fl("GUESSING"), Cl(W?.endsAt || null), ma(W || null), An([]), $l(null), Tn(null), pa([]), xn(""), Ka(null), Kt([]), On(""), _t(""), Xe(""), Wt(!1), Ja(null), Bt(!1), Me.current = null, W?.isSuddenDeath ? ml((Ue) => ({
        roundIndex: Number.parseInt(W?.index, 10) || Ue?.roundIndex || null,
        tiedUserIds: Array.isArray(Ue?.tiedUserIds) ? Ue.tiedUserIds : []
      })) : ml(null), Qu(W?.index);
    }, Qe = (W) => {
      fl("ANSWERS_REVEAL"), Cl(W?.endsAt || null), An(Array.isArray(W?.answers) ? W.answers : []);
    }, ae = (W) => {
      ke(), fl("SOLUTION_REVEAL"), Cl(W?.endsAt || null), $l(W || null), _t(""), Xe(""), Bt(!1);
    }, De = (W) => {
      Ft(), ke(), yl(), fl("FINISHED"), Cl(null), _t(""), Xe(""), Tn(W || null), ml(null), jt([]), $e([]);
    }, Pe = (W) => {
      const Ue = Array.isArray(W?.tiedUserIds) ? W.tiedUserIds.filter((Yn) => Number.isInteger(Yn)) : [], Tt = Number.parseInt(W?.roundIndex, 10);
      ml({
        roundIndex: Number.isInteger(Tt) ? Tt : null,
        tiedUserIds: Ue
      });
      const Hn = Ue.map((Yn) => (s.current?.players || []).find((ts) => ts.userId === Yn)?.displayName || null).filter(Boolean);
      Hn.length > 0 ? K(`Sudden Death started: ${Hn.join(", ")} are tied for first.`) : K("Sudden Death started: tie for first place.");
    }, Ot = (W) => {
      pa(Array.isArray(W?.readyUserIds) ? W.readyUserIds : []);
    }, tn = (W) => {
      jt(Array.isArray(W?.readyUserIds) ? W.readyUserIds : []), $e(Array.isArray(W?.requiredUserIds) ? W.requiredUserIds : []);
    }, Ct = (W) => {
      const Ue = Zl(W?.lobbyCode), Tt = Zl(s.current?.code);
      if (Tt && Ue && Ue !== Tt) return;
      const Hn = Number.parseInt(W?.cooldownUntil, 10);
      let Yn = "You were kicked from the lobby.";
      if (Number.isFinite(Hn)) {
        const Iu = Hn - Date.now();
        Iu > 0 && (Yn = `You were kicked from the lobby. Rejoin available in about ${Math.max(1, Math.ceil(Iu / 1e3))}s.`);
      }
      D(Yn), _n(null), Ye(""), cl(!1), Dt(null), rl(null), Ya("", ""), Ht(), At().catch(() => {
      });
    }, Ta = (W) => {
      const Ue = Zl(W?.lobbyCode), Tt = Zl(s.current?.code);
      Tt && Ue && Ue !== Tt || (D(Rp(W?.reason)), _n(null), Ye(""), cl(!1), Dt(null), rl(null), Ya("", ""), Ht(), At().catch(() => {
      }));
    }, $u = () => {
      s.current?.code || (w.current && window.clearTimeout(w.current), w.current = window.setTimeout(() => {
        w.current = null, At().catch(() => {
        });
      }, 150));
    }, iu = (W) => {
      const Ue = W?.status || null;
      !Ue || typeof Ue != "object" || (ki(Ue), zn(""));
    };
    return f.on("connect", p), f.on("disconnect", O), f.on("error", B), f.on("lobby:state", Q), f.on("lobby:directory_changed", $u), f.on("game:started", ue), f.on("round:started", ye), f.on("round:answers_reveal", Qe), f.on("round:solution", ae), f.on("game:finished", De), f.on("game:sudden_death", Pe), f.on("round:ready_state", Ot), f.on("lobby:ready_state", tn), f.on("lobby:kicked", Ct), f.on("lobby:terminated", Ta), f.on("media:source_status", iu), f.connect(), () => {
      f.off("connect", p), f.off("disconnect", O), f.off("error", B), f.off("lobby:state", Q), f.off("lobby:directory_changed", $u), f.off("game:started", ue), f.off("round:started", ye), f.off("round:answers_reveal", Qe), f.off("round:solution", ae), f.off("game:finished", De), f.off("game:sudden_death", Pe), f.off("round:ready_state", Ot), f.off("lobby:ready_state", tn), f.off("lobby:kicked", Ct), f.off("lobby:terminated", Ta), f.off("media:source_status", iu), w.current && (window.clearTimeout(w.current), w.current = null), gp();
    };
  }, [tu, Ht, At, Qu, Aa, Ft, ke, yl, o]), b.useEffect(() => {
    if (!o) return;
    let f = !0;
    return (async () => {
      try {
        const p = await ju("/auth/me");
        if (!f) return;
        oa(p), await At();
      } catch {
        pm();
        return;
      } finally {
        f && Se(!1);
      }
    })(), () => {
      f = !1;
    };
  }, [At, o]), b.useEffect(() => {
    if (ge || !F || z.current) return;
    z.current = !0;
    const f = new URLSearchParams(window.location.search), p = f.get("i") || f.get("inviteToken") || "", O = Sp(window.location.pathname) || Zl(f.get("lobby")) || Ep(p);
    O && (St(O), Ye(p), Yl(O, p).catch(() => {
    }));
  }, [Yl, ge, F]), b.useEffect(() => {
    if (!Ol) return Hi("00:00");
    const f = () => Hi(_p(new Date(Ol).getTime() - Date.now()));
    f();
    const p = window.setInterval(f, 250);
    return () => window.clearInterval(p);
  }, [Ol]), b.useEffect(() => {
    if (P !== "GUESSING") {
      Z.current += 1, Kt([]), On("");
      return;
    }
    const f = dl.trim();
    if (f.length < 2) {
      Z.current += 1, Kt([]), On("");
      return;
    }
    const p = ++Z.current, O = window.setTimeout(async () => {
      try {
        const B = await ju("/game/search", {
          method: "POST",
          body: JSON.stringify({ query: f, limit: 8 })
        });
        if (Z.current !== p) return;
        Kt(Array.isArray(B.results) ? B.results : []), On("");
      } catch (B) {
        if (Z.current !== p) return;
        Kt([]), On(Tp(B?.message));
      }
    }, 120);
    return () => window.clearTimeout(O);
  }, [dl, P]), b.useEffect(() => {
    if (!!!(se?.sample?.audioUrl || se?.sample?.videoUrl)) {
      Wt(!1), ke();
      return;
    }
    if (P !== "GUESSING") {
      (P === "SOLUTION_REVEAL" || P === "WAITING" || P === "FINISHED" || P === "PENDING") && (Wt(!1), ke());
      return;
    }
    let p = !1;
    const O = window.setTimeout(() => {
      p || $t({ isAutoplay: !0 }).catch(() => {
      });
    }, 0);
    return () => {
      p = !0, window.clearTimeout(O);
    };
  }, [P, $t, se?.roundId, se?.sample?.audioUrl, se?.sample?.videoUrl, ke]), b.useEffect(() => {
    Me.current = null;
  }, [se?.roundId]), b.useEffect(() => {
    if (!Ll || P !== "GUESSING") return;
    const f = () => {
      $t({ isAutoplay: !1 }).catch(() => {
      });
    };
    return window.addEventListener("pointerdown", f), window.addEventListener("keydown", f), () => {
      window.removeEventListener("pointerdown", f), window.removeEventListener("keydown", f);
    };
  }, [P, $t, Ll]), b.useEffect(() => {
    if (P !== "SOLUTION_REVEAL" || !Et?.video) {
      Bt(!1), Xe(""), yl();
      return;
    }
    let f = !1;
    const p = window.setTimeout(() => {
      f || Ie().catch(() => {
      });
    }, 0);
    return () => {
      f = !0, window.clearTimeout(p), yl();
    };
  }, [P, Ie, Et?.video, yl]), b.useEffect(() => {
    if (!Ml || P !== "SOLUTION_REVEAL") return;
    const f = () => {
      Ie().catch(() => {
      });
    };
    return window.addEventListener("pointerdown", f), window.addEventListener("keydown", f), () => {
      window.removeEventListener("pointerdown", f), window.removeEventListener("keydown", f);
    };
  }, [P, Ie, Ml]), b.useEffect(() => {
    const f = Math.max(0, Math.min(1, Number(Il)));
    ie.current && (ie.current.volume = f), Ke.current && (Ke.current.volume = f), Je.current && (Je.current.volume = f);
  }, [Il, se?.roundId, Et?.video]);
  const Ku = b.useMemo(() => !!(j && F && j.host?.id === F.id), [j, F]), xc = b.useMemo(() => !!(F && wl.includes(F.id)), [wl, F]), wn = b.useMemo(() => {
    const f = Array.isArray(Ge) ? Ge.filter((p) => Number.isInteger(p)) : [];
    return f.length > 0 ? f : (j?.players || []).map((p) => p.userId).filter((p) => Number.isInteger(p));
  }, [j, Ge]), Gl = b.useMemo(() => {
    const f = new Set(Array.isArray(Nn) ? Nn : []);
    return wn.filter((p) => f.has(p));
  }, [Nn, wn]), Rc = b.useMemo(() => !!(F && Gl.includes(F.id)), [F, Gl]), Ji = b.useMemo(() => !j || j.status !== "WAITING" ? !1 : wn.length > 0 && Gl.length === wn.length, [j, Gl.length, wn.length]), Ju = b.useMemo(() => !!(se?.sample?.audioUrl || se?.sample?.videoUrl), [se]), Wi = b.useMemo(() => !!(se && Ju && (P === "GUESSING" || P === "ANSWERS_REVEAL")), [Ju, P, se]), Wu = b.useMemo(() => {
    const f = Number.parseInt(se?.sample?.sampleDurationSec, 10);
    return !Number.isFinite(f) || f <= 0 ? "Sample ready" : `${f}s preview`;
  }, [se]), Oc = b.useMemo(() => `${Math.round(Il * 100)}%`, [Il]), au = b.useMemo(() => {
    if (!me)
      return { label: "Disconnected", tone: "down" };
    if (!Be)
      return { label: "Checking", tone: "neutral" };
    if (!Be.ok)
      return { label: "Down", tone: "down" };
    const f = Number(Be.latencyMs);
    return Number.isFinite(f) && f >= 1200 ? { label: "Slow", tone: "warn" } : { label: "Healthy", tone: "ok" };
  }, [Be, me]), Fi = b.useMemo(() => {
    const f = Number(Be?.latencyMs);
    return Number.isFinite(f) ? `${Math.round(f)} ms` : "n/a";
  }, [Be]), $i = b.useMemo(() => {
    if (!Be?.checkedAt) return "n/a";
    const f = new Date(Be.checkedAt);
    return Number.isNaN(f.getTime()) ? "n/a" : f.toLocaleTimeString();
  }, [Be]), Cc = b.useMemo(() => {
    const f = [
      `Provider: ${Be?.provider || "AnimeThemes"}`,
      `State: ${au.label}`,
      `Latency: ${Fi}`,
      `Last check: ${$i}${Be?.cached ? " (cached)" : ""}`
    ];
    return Be?.ok === !1 && Be?.error && f.push(`Error: ${Be.error}`), $a && f.push(`Client: ${$a}`), f;
  }, [$i, $a, au.label, Fi, Be]), Fu = b.useMemo(() => !!j && P !== "WAITING" && P !== "FINISHED", [j, P]), Ii = b.useMemo(() => !!j && (P === "WAITING" || P === "FINISHED"), [j, P]), Mc = b.useCallback((f) => {
    const p = Math.max(0, Math.min(1, Number.parseFloat(f.target.value)));
    Gi(Number.isFinite(p) ? p : 0.8);
  }, []), uu = b.useMemo(() => P === "FINISHED" ? (ga?.finalScores || []).slice().sort(Nm) : P === "SOLUTION_REVEAL" ? (Et?.scores || []).slice().sort(Nm) : [], [ga, P, Et]), Ln = b.useMemo(() => {
    if (!se?.isSuddenDeath || P === "FINISHED") return "";
    const p = (Array.isArray(Fa?.tiedUserIds) ? Fa.tiedUserIds : []).map((O) => Xu(O)).filter(Boolean);
    return p.length > 0 ? `Sudden Death: tie for first between ${p.join(", ")}.` : "Sudden Death: tie for first place. Extra rounds continue until the tie is broken.";
  }, [P, Xu, se?.isSuddenDeath, Fa?.tiedUserIds]), Pi = b.useMemo(() => {
    const f = String(ka || "").trim().toLowerCase();
    return f ? bn.filter((p) => {
      const O = String(p?.code || "").toLowerCase(), B = String(p?.name || "").toLowerCase();
      return O.includes(f) || B.includes(f);
    }) : bn;
  }, [bn, ka]), es = b.useMemo(() => j ? [
    `Max ${j.maxPlayers} players`,
    `${j.roundCount} rounds`,
    `${j.guessSeconds}s guess`,
    ic[j.sourceMode]?.label || j.sourceMode,
    sc[j.selectionMode]?.label || j.selectionMode,
    cc[j.themeMode]?.label || j.themeMode
  ] : [], [j]);
  return ge ? /* @__PURE__ */ h.jsx("section", { className: "gmq-shell", children: "Loading game..." }) : /* @__PURE__ */ h.jsxs("section", { className: "gmq-shell", children: [
    /* @__PURE__ */ h.jsxs("header", { className: "gmq-header", children: [
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("h1", { children: "Anime Music Quiz" }),
        /* @__PURE__ */ h.jsxs("p", { className: "gmq-muted", children: [
          "Socket: ",
          me ? "Connected" : "Disconnected",
          j ? ` | Lobby ${j.code}` : "",
          Li?.sessionId ? ` | Session ${Li.sessionId}` : ""
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "gmq-header-right", children: [
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-connection-indicator", role: "status", "aria-label": `Media source ${au.label}`, children: [
          /* @__PURE__ */ h.jsx("span", { className: `gmq-connection-dot gmq-status-dot-${au.tone}` }),
          /* @__PURE__ */ h.jsx("div", { className: "gmq-connection-tooltip", children: Cc.map((f) => /* @__PURE__ */ h.jsx("p", { children: f }, f)) })
        ] }),
        j ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-actions", children: [
          /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: Nc, disabled: y === "invite", children: "Copy Invite" }),
          /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-danger", onClick: vc, disabled: y === "leave", children: "Leave" })
        ] }) : null
      ] })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "gmq-toast-viewport", "aria-live": "polite", "aria-atomic": "false", children: [
      H ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-alert gmq-alert-error gmq-toast", role: "alert", children: [
        /* @__PURE__ */ h.jsx("p", { children: H }),
        /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-toast-close", onClick: () => D(""), "aria-label": "Dismiss error", children: "x" })
      ] }) : null,
      I ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-alert gmq-alert-info gmq-toast", role: "status", children: [
        /* @__PURE__ */ h.jsx("p", { children: I }),
        /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-toast-close", onClick: () => K(""), "aria-label": "Dismiss message", children: "x" })
      ] }) : null
    ] }),
    gt ? /* @__PURE__ */ h.jsx("div", { className: "gmq-modal-backdrop", onClick: () => Dt(null), children: /* @__PURE__ */ h.jsxs("article", { className: "gmq-card gmq-modal-card gmq-modal-confirm-card", onClick: (f) => f.stopPropagation(), children: [
      /* @__PURE__ */ h.jsx("div", { className: "gmq-modal-header", children: /* @__PURE__ */ h.jsx("h2", { children: "Promote Player" }) }),
      /* @__PURE__ */ h.jsxs("p", { children: [
        "Transfer host to ",
        /* @__PURE__ */ h.jsx("strong", { children: gt.displayName }),
        "?"
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "gmq-modal-actions", children: [
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-secondary",
            onClick: () => Dt(null),
            disabled: y === "promote",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-primary",
            onClick: Tc,
            disabled: y === "promote",
            children: y === "promote" ? "Promoting..." : "Promote"
          }
        )
      ] })
    ] }) }) : null,
    pt ? /* @__PURE__ */ h.jsx("div", { className: "gmq-modal-backdrop", onClick: () => rl(null), children: /* @__PURE__ */ h.jsxs("article", { className: "gmq-card gmq-modal-card gmq-modal-confirm-card", onClick: (f) => f.stopPropagation(), children: [
      /* @__PURE__ */ h.jsx("div", { className: "gmq-modal-header", children: /* @__PURE__ */ h.jsx("h2", { children: "Kick Player" }) }),
      /* @__PURE__ */ h.jsxs("p", { children: [
        "Kick ",
        /* @__PURE__ */ h.jsx("strong", { children: pt.displayName }),
        " from this lobby?"
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "gmq-modal-actions", children: [
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-secondary",
            onClick: () => rl(null),
            disabled: y === "kick",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-danger",
            onClick: Ki,
            disabled: y === "kick",
            children: y === "kick" ? "Kicking..." : "Kick Player"
          }
        )
      ] })
    ] }) }) : null,
    Sn && j && j.status === "WAITING" && Ku ? /* @__PURE__ */ h.jsx("div", { className: "gmq-modal-backdrop", onClick: () => cl(!1), children: /* @__PURE__ */ h.jsxs("article", { className: "gmq-card gmq-modal-card", onClick: (f) => f.stopPropagation(), children: [
      /* @__PURE__ */ h.jsxs("div", { className: "gmq-modal-header", children: [
        /* @__PURE__ */ h.jsx("h2", { children: "Match Settings" }),
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-secondary gmq-btn-modal-close",
            onClick: () => cl(!1),
            children: "Close"
          }
        )
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "gmq-name-private-row", children: [
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-stack", children: [
          /* @__PURE__ */ h.jsx("label", { htmlFor: "edit-lobby-name", children: "Lobby name" }),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              id: "edit-lobby-name",
              value: Ut.name,
              onChange: (f) => bt((p) => ({ ...p, name: f.target.value })),
              placeholder: "Lobby name"
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs("label", { className: "gmq-checkbox gmq-checkbox-inline", children: [
          /* @__PURE__ */ h.jsx(
            "input",
            {
              type: "checkbox",
              checked: Ut.isPrivate,
              onChange: (f) => bt((p) => ({ ...p, isPrivate: f.target.checked }))
            }
          ),
          "Private lobby"
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-grid", children: [
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
          /* @__PURE__ */ h.jsx("label", { htmlFor: "edit-max-players", children: "Max Players" }),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              id: "edit-max-players",
              type: "number",
              min: "1",
              max: "8",
              value: Va,
              onChange: (f) => Qi(f.target.value),
              onBlur: Sa
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
          /* @__PURE__ */ h.jsx("label", { htmlFor: "edit-round-count", children: "Rounds" }),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              id: "edit-round-count",
              type: "number",
              min: "1",
              max: "50",
              value: Ut.roundCount,
              onChange: (f) => bt((p) => ({ ...p, roundCount: Number(f.target.value || 10) }))
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
          /* @__PURE__ */ h.jsx("label", { htmlFor: "edit-guess-seconds", children: "Guess Time (sec)" }),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              id: "edit-guess-seconds",
              type: "number",
              min: "5",
              max: "120",
              value: Ut.guessSeconds,
              onChange: (f) => bt((p) => ({ ...p, guessSeconds: Number(f.target.value || 20) }))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-grid", children: [
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
          /* @__PURE__ */ h.jsx("label", { htmlFor: "edit-source-mode", children: "Song Source" }),
          /* @__PURE__ */ h.jsx(
            "select",
            {
              id: "edit-source-mode",
              value: Ut.sourceMode,
              onChange: (f) => bt((p) => ({ ...p, sourceMode: f.target.value })),
              children: Lo.map((f) => /* @__PURE__ */ h.jsx("option", { value: f, children: ic[f]?.label || f }, f))
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
          /* @__PURE__ */ h.jsx("label", { htmlFor: "edit-selection-mode", children: "Selection Style" }),
          /* @__PURE__ */ h.jsx(
            "select",
            {
              id: "edit-selection-mode",
              value: Ut.selectionMode,
              onChange: (f) => bt((p) => ({ ...p, selectionMode: f.target.value })),
              children: Ho.map((f) => /* @__PURE__ */ h.jsx("option", { value: f, children: sc[f]?.label || f }, f))
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
          /* @__PURE__ */ h.jsx("label", { htmlFor: "edit-theme-mode", children: "Song Types" }),
          /* @__PURE__ */ h.jsx(
            "select",
            {
              id: "edit-theme-mode",
              value: Ut.themeMode,
              onChange: (f) => bt((p) => ({ ...p, themeMode: f.target.value })),
              children: Yo.map((f) => /* @__PURE__ */ h.jsx("option", { value: f, children: cc[f]?.label || f }, f))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          className: "gmq-btn gmq-btn-primary",
          onClick: pc,
          disabled: y === "settings",
          children: y === "settings" ? "Saving..." : "Save Settings"
        }
      )
    ] }) }) : null,
    j ? /* @__PURE__ */ h.jsxs("div", { className: `gmq-grid gmq-grid-match ${Fu ? "gmq-grid-match-live" : "gmq-grid-match-idle"} ${Fu && !Ii ? "gmq-grid-match-round-only" : ""}`, children: [
      Ii ? /* @__PURE__ */ h.jsxs("article", { className: "gmq-card gmq-card-lobby", children: [
        /* @__PURE__ */ h.jsxs("h2", { children: [
          "Lobby ",
          j.code,
          /* @__PURE__ */ h.jsx("span", { className: `gmq-lobby-visibility ${j.isPrivate ? "private" : "public"}`, children: j.isPrivate ? "Private" : "Public" })
        ] }),
        /* @__PURE__ */ h.jsxs("p", { className: "gmq-muted", children: [
          j.name || "Untitled",
          " | ",
          j.playerCount,
          "/",
          j.maxPlayers,
          " players"
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-stack gmq-lobby-settings-block", children: [
          /* @__PURE__ */ h.jsx("strong", { children: "Current Match Settings" }),
          /* @__PURE__ */ h.jsx("div", { className: "gmq-lobby-settings", children: es.map((f) => /* @__PURE__ */ h.jsx("span", { children: f }, f)) })
        ] }),
        /* @__PURE__ */ h.jsx("ul", { className: "gmq-player-list", children: (j.players || []).map((f) => /* @__PURE__ */ h.jsxs("li", { children: [
          /* @__PURE__ */ h.jsxs("span", { children: [
            f.displayName,
            f.userId === j.host?.id ? " (Host)" : "",
            f.isConnected ? "" : " (offline)"
          ] }),
          j.status === "WAITING" ? /* @__PURE__ */ h.jsxs("span", { className: "gmq-player-row-actions", children: [
            Ku && F && f.userId !== F.id ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  type: "button",
                  className: "gmq-btn gmq-btn-secondary gmq-btn-kick",
                  onClick: () => Ac(f),
                  disabled: y === "promote" || y === "kick",
                  children: "Promote"
                }
              ),
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  type: "button",
                  className: "gmq-btn gmq-btn-danger gmq-btn-kick",
                  onClick: () => _c(f),
                  disabled: y === "kick" || y === "promote",
                  children: "Kick"
                }
              )
            ] }) : null,
            /* @__PURE__ */ h.jsx("strong", { children: Gl.includes(f.userId) ? "Ready" : "Not Ready" })
          ] }) : null,
          P === "GUESSING" ? /* @__PURE__ */ h.jsx("strong", { children: wl.includes(f.userId) ? "Ready" : "Thinking" }) : null
        ] }, f.userId)) }),
        j.status === "WAITING" ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "gmq-actions", children: [
            /* @__PURE__ */ h.jsx(
              "button",
              {
                type: "button",
                className: "gmq-btn gmq-btn-secondary",
                onClick: Ec,
                disabled: y === "lobby-ready",
                children: Rc ? "Not Ready" : "Ready Up"
              }
            ),
            /* @__PURE__ */ h.jsxs("p", { className: "gmq-muted", children: [
              "Ready ",
              Gl.length,
              "/",
              wn.length
            ] })
          ] }),
          Ku ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            /* @__PURE__ */ h.jsx(
              "button",
              {
                type: "button",
                className: "gmq-btn gmq-btn-secondary",
                onClick: Zi,
                disabled: y === "settings",
                children: "Match Settings"
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                type: "button",
                className: "gmq-btn gmq-btn-primary",
                onClick: bc,
                disabled: y === "start" || !Ji,
                children: "Start Game"
              }
            ),
            Ji ? null : /* @__PURE__ */ h.jsx("p", { className: "gmq-muted", children: "All players must be ready before start." })
          ] }) : /* @__PURE__ */ h.jsx("p", { className: "gmq-muted", children: "Waiting for host to start." })
        ] }) : null
      ] }) : null,
      Fu ? /* @__PURE__ */ h.jsxs("article", { className: "gmq-card gmq-card-round", children: [
        /* @__PURE__ */ h.jsx("h2", { children: "Round" }),
        /* @__PURE__ */ h.jsxs("p", { className: "gmq-round-phase", children: [
          P,
          " | ",
          ha
        ] }),
        Ln ? /* @__PURE__ */ h.jsx("div", { className: "gmq-alert gmq-alert-warning", children: Ln }) : null,
        P === "PENDING" && Xi ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ h.jsx("p", { children: "Preparing media cache before round 1..." }),
          /* @__PURE__ */ h.jsxs("p", { className: "gmq-muted", children: [
            "Ready ",
            Cn.ready,
            "/",
            Cn.total,
            Cn.failed > 0 ? ` | Failed ${Cn.failed}` : ""
          ] }),
          Mn ? /* @__PURE__ */ h.jsx("p", { className: "gmq-muted gmq-muted-warning", children: Mn }) : null,
          Mn ? /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: "gmq-btn gmq-btn-secondary",
              onClick: () => lu().catch(() => {
              }),
              disabled: Rt,
              children: Rt ? "Retrying..." : "Retry preload"
            }
          ) : null
        ] }) : null,
        Wi ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-sample-player", children: [
          se?.sample?.audioUrl ? /* @__PURE__ */ h.jsx(
            "audio",
            {
              ref: ie,
              src: se.sample.audioUrl,
              preload: "auto",
              onPlay: () => Ae(!0),
              onPause: () => Ae(!1),
              onEnded: () => Ae(!1),
              onError: () => _t(Bi("source_unavailable"))
            },
            `audio-${se.roundId}`
          ) : null,
          se?.sample?.videoUrl ? /* @__PURE__ */ h.jsx(
            "video",
            {
              ref: Ke,
              src: se.sample.videoUrl,
              preload: "auto",
              playsInline: !0,
              onPlay: () => Ae(!0),
              onPause: () => Ae(!1),
              onEnded: () => Ae(!1),
              onError: () => _t(Bi("source_unavailable"))
            },
            `video-${se.roundId}`
          ) : null,
          /* @__PURE__ */ h.jsxs("label", { className: "gmq-volume-row", children: [
            /* @__PURE__ */ h.jsxs("span", { children: [
              "Volume ",
              Oc
            ] }),
            /* @__PURE__ */ h.jsx(
              "input",
              {
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Il,
                onChange: Mc
              }
            )
          ] }),
          Ll ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-stack", children: [
            /* @__PURE__ */ h.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
            /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => $t({ isAutoplay: !1 }).catch(() => {
            }), children: "Play sample" })
          ] }) : Yi === "video" && !se?.sample?.audioUrl ? /* @__PURE__ */ h.jsxs("p", { className: "gmq-muted", children: [
            "Using video source audio. ",
            Wu
          ] }) : Rn ? /* @__PURE__ */ h.jsxs("p", { className: "gmq-muted", children: [
            "Sample is playing. ",
            Wu
          ] }) : /* @__PURE__ */ h.jsx("p", { className: "gmq-muted", children: Wu }),
          ba ? /* @__PURE__ */ h.jsx("p", { className: "gmq-muted gmq-muted-warning", children: ba }) : null
        ] }) : null,
        P === "GUESSING" && se ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ h.jsxs("p", { children: [
            "Round ",
            se.index,
            "/",
            se.totalRounds
          ] }),
          Ju ? null : /* @__PURE__ */ h.jsx("p", { className: "gmq-muted", children: "Sample audio is unavailable for this round." }),
          /* @__PURE__ */ h.jsxs("div", { className: "gmq-search-box", children: [
            /* @__PURE__ */ h.jsx(
              "input",
              {
                ref: it,
                value: dl,
                onChange: (f) => {
                  xn(f.target.value), Ka(null), Jt(!0);
                },
                onFocus: () => Jt(!0),
                onBlur: () => {
                  window.setTimeout(() => {
                    Jt(!1);
                  }, 100);
                },
                placeholder: "Type anime name"
              }
            ),
            va && Yu.length > 0 ? /* @__PURE__ */ h.jsx("ul", { className: "gmq-search-results", children: Yu.map((f) => /* @__PURE__ */ h.jsx("li", { children: /* @__PURE__ */ h.jsx(
              "button",
              {
                type: "button",
                onMouseDown: (p) => p.preventDefault(),
                onClick: () => {
                  xn(f.title || ""), Ka(Number.isInteger(f.id) ? f.id : null), Kt([]), Jt(!1);
                },
                children: f.title
              }
            ) }, `${f.id}-${f.title}`)) }) : null
          ] }),
          Gu ? /* @__PURE__ */ h.jsx("p", { className: "gmq-muted gmq-muted-warning", children: Gu }) : null,
          /* @__PURE__ */ h.jsxs("div", { className: "gmq-actions", children: [
            /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: Zu, disabled: y === "guess", children: "Submit Guess" }),
            /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: Sc, disabled: y === "ready", children: xc ? "Unskip" : "Skip / Ready" })
          ] }),
          /* @__PURE__ */ h.jsxs("p", { className: "gmq-muted", children: [
            wl.length,
            " ready"
          ] })
        ] }) : null,
        P === "ANSWERS_REVEAL" ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ h.jsx("h3", { children: "Answers" }),
          /* @__PURE__ */ h.jsx("ul", { className: "gmq-answer-list", children: ya.map((f) => /* @__PURE__ */ h.jsxs("li", { children: [
            /* @__PURE__ */ h.jsx("span", { children: Xu(f.userId) }),
            /* @__PURE__ */ h.jsx("span", { children: f.guessText || "(blank)" }),
            /* @__PURE__ */ h.jsx("strong", { children: f.isCorrect ? "Correct" : "Wrong" })
          ] }, `${f.userId}-${f.guessText || "blank"}`)) })
        ] }) : null,
        P === "SOLUTION_REVEAL" && Et ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ h.jsx("h3", { children: "Solution" }),
          /* @__PURE__ */ h.jsxs("p", { children: [
            Et.correctAnime?.animeTitle,
            " (",
            Et.correctAnime?.themeType,
            ")"
          ] }),
          /* @__PURE__ */ h.jsx("p", { className: "gmq-muted", children: Et.correctAnime?.themeTitle || "" }),
          Et.video ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-solution-video-wrap", children: [
            /* @__PURE__ */ h.jsx(
              "video",
              {
                ref: Je,
                className: "gmq-solution-video",
                src: Et.video,
                preload: "auto",
                controls: !0,
                playsInline: !0,
                onError: () => Xe('Could not play solution video in this browser. Use "Open video source".')
              },
              `solution-${se?.roundId || Et.correctAnime?.animeId || "video"}`
            ),
            Ml ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-stack", children: [
              /* @__PURE__ */ h.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
              /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Ie().catch(() => {
              }), children: "Play solution video" })
            ] }) : null,
            hl ? /* @__PURE__ */ h.jsx("p", { className: "gmq-muted gmq-muted-warning", children: hl }) : null,
            /* @__PURE__ */ h.jsx("a", { href: Et.video, target: "_blank", rel: "noreferrer", children: "Open video source" })
          ] }) : /* @__PURE__ */ h.jsx("p", { className: "gmq-muted", children: "Solution video is unavailable for this round." })
        ] }) : null,
        P === "FINISHED" && ga ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ h.jsx("h3", { children: "Final Result" }),
          /* @__PURE__ */ h.jsxs("p", { children: [
            "Winner: ",
            ga.winner?.displayName || "Tie"
          ] })
        ] }) : null,
        uu.length ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ h.jsx("h3", { children: "Scoreboard" }),
          /* @__PURE__ */ h.jsx("ul", { className: "gmq-score-list", children: uu.map((f) => /* @__PURE__ */ h.jsxs("li", { className: "gmq-score-row", children: [
            /* @__PURE__ */ h.jsx("span", { children: f.displayName }),
            /* @__PURE__ */ h.jsx("strong", { children: f.score })
          ] }, f.userId)) })
        ] }) : null
      ] }) : null
    ] }) : /* @__PURE__ */ h.jsxs("div", { className: "gmq-menu", children: [
      /* @__PURE__ */ h.jsx("div", { className: "gmq-menu-host-wrap", children: /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary gmq-btn-host", onClick: () => Fl(!0), children: "Host Lobby" }) }),
      /* @__PURE__ */ h.jsxs("article", { className: "gmq-card gmq-card-directory", children: [
        /* @__PURE__ */ h.jsx("div", { className: "gmq-directory-header", children: /* @__PURE__ */ h.jsx("h2", { children: "Available Lobbies" }) }),
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-directory-top", children: [
          /* @__PURE__ */ h.jsx("div", { className: "gmq-card gmq-card-toolbar", children: /* @__PURE__ */ h.jsxs("div", { className: "gmq-directory-controls", children: [
            /* @__PURE__ */ h.jsx("input", { value: ka, onChange: (f) => Wl(f.target.value), placeholder: "Search by code/name" }),
            /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => At(), disabled: yc, children: "Refresh" })
          ] }) }),
          /* @__PURE__ */ h.jsx("div", { className: "gmq-card gmq-card-manual-join", children: /* @__PURE__ */ h.jsxs("div", { className: "gmq-inline gmq-inline-manual", children: [
            /* @__PURE__ */ h.jsx("input", { value: En, onChange: (f) => St(Zl(f.target.value)), placeholder: "Lobby code (ABC123)" }),
            /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: () => Yl(En, ""), disabled: y === "join", children: "Join Lobby" })
          ] }) })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-lobby-table-head", children: [
          /* @__PURE__ */ h.jsx("span", { children: "Lobby" }),
          /* @__PURE__ */ h.jsx("span", { children: "Match Settings" }),
          /* @__PURE__ */ h.jsx("span", { children: "Action" })
        ] }),
        /* @__PURE__ */ h.jsxs("ul", { className: "gmq-lobby-list gmq-lobby-list-detailed", children: [
          Pi.map((f) => /* @__PURE__ */ h.jsxs("li", { className: "gmq-lobby-item gmq-lobby-item-detailed", children: [
            /* @__PURE__ */ h.jsxs("div", { children: [
              /* @__PURE__ */ h.jsx("div", { className: "gmq-lobby-title", children: f.name || f.code }),
              /* @__PURE__ */ h.jsxs("div", { className: "gmq-muted", children: [
                f.code,
                " | ",
                f.playerCount,
                "/",
                f.maxPlayers,
                " players"
              ] })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "gmq-lobby-settings", children: [
              /* @__PURE__ */ h.jsxs("span", { children: [
                f.roundCount,
                " rounds"
              ] }),
              /* @__PURE__ */ h.jsxs("span", { children: [
                f.guessSeconds,
                "s guess"
              ] }),
              /* @__PURE__ */ h.jsx("span", { children: ic[f.sourceMode]?.label || f.sourceMode }),
              /* @__PURE__ */ h.jsx("span", { children: sc[f.selectionMode]?.label || f.selectionMode }),
              /* @__PURE__ */ h.jsx("span", { children: cc[f.themeMode]?.label || f.themeMode })
            ] }),
            /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Yl(f.code, "", { fromDirectory: !0 }), disabled: y === "join", children: "Join" })
          ] }, f.code)),
          Pi.length === 0 ? /* @__PURE__ */ h.jsx("li", { className: "gmq-lobby-empty gmq-muted", children: "No open public lobbies right now." }) : null
        ] })
      ] }),
      fa ? /* @__PURE__ */ h.jsx("div", { className: "gmq-modal-backdrop", onClick: () => Fl(!1), children: /* @__PURE__ */ h.jsxs("article", { className: "gmq-card gmq-modal-card", onClick: (f) => f.stopPropagation(), children: [
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-modal-header", children: [
          /* @__PURE__ */ h.jsx("h2", { children: "Host Lobby" }),
          /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary gmq-btn-modal-close", onClick: () => Fl(!1), children: "Close" })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-name-private-row", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-stack", children: [
            /* @__PURE__ */ h.jsx("label", { htmlFor: "create-lobby-name", children: "Lobby name" }),
            /* @__PURE__ */ h.jsx(
              "input",
              {
                id: "create-lobby-name",
                value: Zt.name,
                onChange: (f) => ol((p) => ({ ...p, name: f.target.value })),
                placeholder: "Lobby name"
              }
            )
          ] }),
          /* @__PURE__ */ h.jsxs("label", { className: "gmq-checkbox gmq-checkbox-inline", children: [
            /* @__PURE__ */ h.jsx(
              "input",
              {
                type: "checkbox",
                checked: Zt.isPrivate,
                onChange: (f) => ol((p) => ({ ...p, isPrivate: f.target.checked }))
              }
            ),
            "Private lobby"
          ] })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-grid", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ h.jsx("label", { htmlFor: "create-max-players", children: "Max Players" }),
            /* @__PURE__ */ h.jsx(
              "input",
              {
                id: "create-max-players",
                type: "number",
                min: "1",
                max: "8",
                value: Qa,
                onChange: (f) => gc(f.target.value),
                onBlur: Ia
              }
            )
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ h.jsx("label", { htmlFor: "create-round-count", children: "Rounds" }),
            /* @__PURE__ */ h.jsx("input", { id: "create-round-count", type: "number", min: "1", max: "50", value: Zt.roundCount, onChange: (f) => ol((p) => ({ ...p, roundCount: Number(f.target.value || 10) })) })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ h.jsx("label", { htmlFor: "create-guess-seconds", children: "Guess Time (sec)" }),
            /* @__PURE__ */ h.jsx("input", { id: "create-guess-seconds", type: "number", min: "5", max: "120", value: Zt.guessSeconds, onChange: (f) => ol((p) => ({ ...p, guessSeconds: Number(f.target.value || 20) })) })
          ] })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-grid", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ h.jsx("label", { htmlFor: "create-source-mode", children: "Song Source" }),
            /* @__PURE__ */ h.jsx("select", { id: "create-source-mode", value: Zt.sourceMode, onChange: (f) => ol((p) => ({ ...p, sourceMode: f.target.value })), children: Lo.map((f) => /* @__PURE__ */ h.jsx("option", { value: f, children: ic[f]?.label || f }, f)) })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ h.jsx("label", { htmlFor: "create-selection-mode", children: "Selection Style" }),
            /* @__PURE__ */ h.jsx("select", { id: "create-selection-mode", value: Zt.selectionMode, onChange: (f) => ol((p) => ({ ...p, selectionMode: f.target.value })), children: Ho.map((f) => /* @__PURE__ */ h.jsx("option", { value: f, children: sc[f]?.label || f }, f)) })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ h.jsx("label", { htmlFor: "create-theme-mode", children: "Song Types" }),
            /* @__PURE__ */ h.jsx("select", { id: "create-theme-mode", value: Zt.themeMode, onChange: (f) => ol((p) => ({ ...p, themeMode: f.target.value })), children: Yo.map((f) => /* @__PURE__ */ h.jsx("option", { value: f, children: cc[f]?.label || f }, f)) })
          ] })
        ] }),
        /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: nu, disabled: y === "create", children: y === "create" ? "Hosting..." : "Host Lobby" })
      ] }) }) : null
    ] })
  ] });
}
const Om = document.getElementById("game-root");
Om && Eg.createRoot(Om).render(/* @__PURE__ */ h.jsx(Op, {}));
