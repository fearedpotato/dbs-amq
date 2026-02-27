var _o = { exports: {} }, zi = {};
var im;
function dg() {
  if (im) return zi;
  im = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(r, S, z) {
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
  return zi.Fragment = i, zi.jsx = c, zi.jsxs = c, zi;
}
var sm;
function hg() {
  return sm || (sm = 1, _o.exports = dg()), _o.exports;
}
var h = hg(), Ao = { exports: {} }, ee = {};
var cm;
function mg() {
  if (cm) return ee;
  cm = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), S = /* @__PURE__ */ Symbol.for("react.profiler"), z = /* @__PURE__ */ Symbol.for("react.consumer"), w = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), U = /* @__PURE__ */ Symbol.for("react.suspense"), q = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), G = /* @__PURE__ */ Symbol.for("react.activity"), ie = Symbol.iterator;
  function Ze(y) {
    return y === null || typeof y != "object" ? null : (y = ie && y[ie] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var Ke = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, it = Object.assign, Ct = {};
  function st(y, N, H) {
    this.props = y, this.context = N, this.refs = Ct, this.updater = H || Ke;
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
  function Ce(y, N, H) {
    this.props = y, this.context = N, this.refs = Ct, this.updater = H || Ke;
  }
  var ft = Ce.prototype = new il();
  ft.constructor = Ce, it(ft, st.prototype), ft.isPureReactComponent = !0;
  var qe = Array.isArray;
  function Je() {
  }
  var le = { H: null, A: null, T: null, S: null }, Ue = Object.prototype.hasOwnProperty;
  function Tt(y, N, H) {
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
    return Tt(y.type, N, y.props);
  }
  function ct(y) {
    return typeof y == "object" && y !== null && y.$$typeof === o;
  }
  function We(y) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(H) {
      return N[H];
    });
  }
  var Xt = /\/+/g;
  function qt(y, N) {
    return typeof y == "object" && y !== null && y.key != null ? We("" + y.key) : N.toString(36);
  }
  function Le(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(Je, Je) : (y.status = "pending", y.then(
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
  function x(y, N, H, D, $) {
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
            case F:
              return me = y._init, x(
                me(y._payload),
                N,
                H,
                D,
                $
              );
          }
      }
    if (me)
      return $ = $(y), me = D === "" ? "." + qt(y, 0) : D, qe($) ? (H = "", me != null && (H = me.replace(Xt, "$&/") + "/"), x($, N, H, "", function(ra) {
        return ra;
      })) : $ != null && (ct($) && ($ = sl(
        $,
        H + ($.key == null || y && y.key === $.key ? "" : ("" + $.key).replace(
          Xt,
          "$&/"
        ) + "/") + me
      )), N.push($)), 1;
    me = 0;
    var rt = D === "" ? "." : D + ":";
    if (qe(y))
      for (var W = 0; W < y.length; W++)
        D = y[W], K = rt + qt(D, W), me += x(
          D,
          N,
          H,
          K,
          $
        );
    else if (W = Ze(y), typeof W == "function")
      for (y = W.call(y), W = 0; !(D = y.next()).done; )
        D = D.value, K = rt + qt(D, W++), me += x(
          D,
          N,
          H,
          K,
          $
        );
    else if (K === "object") {
      if (typeof y.then == "function")
        return x(
          Le(y),
          N,
          H,
          D,
          $
        );
      throw N = String(y), Error(
        "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return me;
  }
  function L(y, N, H) {
    if (y == null) return y;
    var D = [], $ = 0;
    return x(y, D, "", "", function(K) {
      return N.call(H, K, $++);
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
  return ee.Activity = G, ee.Children = Se, ee.Component = st, ee.Fragment = c, ee.Profiler = S, ee.PureComponent = Ce, ee.StrictMode = r, ee.Suspense = U, ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = le, ee.__COMPILER_RUNTIME = {
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
    var D = it({}, y.props), $ = y.key;
    if (N != null)
      for (K in N.key !== void 0 && ($ = "" + N.key), N)
        !Ue.call(N, K) || K === "key" || K === "__self" || K === "__source" || K === "ref" && N.ref === void 0 || (D[K] = N[K]);
    var K = arguments.length - 2;
    if (K === 1) D.children = H;
    else if (1 < K) {
      for (var me = Array(K), rt = 0; rt < K; rt++)
        me[rt] = arguments[rt + 2];
      D.children = me;
    }
    return Tt(y.type, $, D);
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
    var D, $ = {}, K = null;
    if (N != null)
      for (D in N.key !== void 0 && (K = "" + N.key), N)
        Ue.call(N, D) && D !== "key" && D !== "__self" && D !== "__source" && ($[D] = N[D]);
    var me = arguments.length - 2;
    if (me === 1) $.children = H;
    else if (1 < me) {
      for (var rt = Array(me), W = 0; W < me; W++)
        rt[W] = arguments[W + 2];
      $.children = rt;
    }
    if (y && y.defaultProps)
      for (D in me = y.defaultProps, me)
        $[D] === void 0 && ($[D] = me[D]);
    return Tt(y, K, $);
  }, ee.createRef = function() {
    return { current: null };
  }, ee.forwardRef = function(y) {
    return { $$typeof: k, render: y };
  }, ee.isValidElement = ct, ee.lazy = function(y) {
    return {
      $$typeof: F,
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
      var D = y(), $ = le.S;
      $ !== null && $(H, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(Je, ge);
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
var rm;
function Yo() {
  return rm || (rm = 1, Ao.exports = mg()), Ao.exports;
}
var b = Yo(), To = { exports: {} }, Di = {}, No = { exports: {} }, xo = {};
var om;
function yg() {
  return om || (om = 1, (function(o) {
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
    function c(x) {
      return x.length === 0 ? null : x[0];
    }
    function r(x) {
      if (x.length === 0) return null;
      var L = x[0], Z = x.pop();
      if (Z !== L) {
        x[0] = Z;
        e: for (var ge = 0, Se = x.length, y = Se >>> 1; ge < y; ) {
          var N = 2 * (ge + 1) - 1, H = x[N], D = N + 1, $ = x[D];
          if (0 > S(H, Z))
            D < Se && 0 > S($, H) ? (x[ge] = $, x[D] = Z, ge = D) : (x[ge] = H, x[N] = Z, ge = N);
          else if (D < Se && 0 > S($, Z))
            x[ge] = $, x[D] = Z, ge = D;
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
    var U = [], q = [], F = 1, G = null, ie = 3, Ze = !1, Ke = !1, it = !1, Ct = !1, st = typeof setTimeout == "function" ? setTimeout : null, il = typeof clearTimeout == "function" ? clearTimeout : null, Ce = typeof setImmediate < "u" ? setImmediate : null;
    function ft(x) {
      for (var L = c(q); L !== null; ) {
        if (L.callback === null) r(q);
        else if (L.startTime <= x)
          r(q), L.sortIndex = L.expirationTime, i(U, L);
        else break;
        L = c(q);
      }
    }
    function qe(x) {
      if (it = !1, ft(x), !Ke)
        if (c(U) !== null)
          Ke = !0, Je || (Je = !0, We());
        else {
          var L = c(q);
          L !== null && Le(qe, L.startTime - x);
        }
    }
    var Je = !1, le = -1, Ue = 5, Tt = -1;
    function sl() {
      return Ct ? !0 : !(o.unstable_now() - Tt < Ue);
    }
    function ct() {
      if (Ct = !1, Je) {
        var x = o.unstable_now();
        Tt = x;
        var L = !0;
        try {
          e: {
            Ke = !1, it && (it = !1, il(le), le = -1), Ze = !0;
            var Z = ie;
            try {
              t: {
                for (ft(x), G = c(U); G !== null && !(G.expirationTime > x && sl()); ) {
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
                    G === c(U) && r(U), ft(x);
                  } else r(U);
                  G = c(U);
                }
                if (G !== null) L = !0;
                else {
                  var y = c(q);
                  y !== null && Le(
                    qe,
                    y.startTime - x
                  ), L = !1;
                }
              }
              break e;
            } finally {
              G = null, ie = Z, Ze = !1;
            }
            L = void 0;
          }
        } finally {
          L ? We() : Je = !1;
        }
      }
    }
    var We;
    if (typeof Ce == "function")
      We = function() {
        Ce(ct);
      };
    else if (typeof MessageChannel < "u") {
      var Xt = new MessageChannel(), qt = Xt.port2;
      Xt.port1.onmessage = ct, We = function() {
        qt.postMessage(null);
      };
    } else
      We = function() {
        st(ct, 0);
      };
    function Le(x, L) {
      le = st(function() {
        x(o.unstable_now());
      }, L);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(x) {
      x.callback = null;
    }, o.unstable_forceFrameRate = function(x) {
      0 > x || 125 < x ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ue = 0 < x ? Math.floor(1e3 / x) : 5;
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
      Ct = !0;
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
        id: F++,
        callback: L,
        priorityLevel: x,
        startTime: Z,
        expirationTime: Se,
        sortIndex: -1
      }, Z > ge ? (x.sortIndex = Z, i(q, x), c(U) === null && x === c(q) && (it ? (il(le), le = -1) : it = !0, Le(qe, Z - ge))) : (x.sortIndex = Se, i(U, x), Ke || Ze || (Ke = !0, Je || (Je = !0, We()))), x;
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
  })(xo)), xo;
}
var fm;
function gg() {
  return fm || (fm = 1, No.exports = yg()), No.exports;
}
var Ro = { exports: {} }, At = {};
var dm;
function pg() {
  if (dm) return At;
  dm = 1;
  var o = Yo();
  function i(U) {
    var q = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      q += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var F = 2; F < arguments.length; F++)
        q += "&args[]=" + encodeURIComponent(arguments[F]);
    }
    return "Minified React error #" + U + "; visit " + q + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c() {
  }
  var r = {
    d: {
      f: c,
      r: function() {
        throw Error(i(522));
      },
      D: c,
      C: c,
      L: c,
      m: c,
      X: c,
      S: c,
      M: c
    },
    p: 0,
    findDOMNode: null
  }, S = /* @__PURE__ */ Symbol.for("react.portal");
  function z(U, q, F) {
    var G = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: S,
      key: G == null ? null : "" + G,
      children: U,
      containerInfo: q,
      implementation: F
    };
  }
  var w = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function k(U, q) {
    if (U === "font") return "";
    if (typeof q == "string")
      return q === "use-credentials" ? q : "";
  }
  return At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, At.createPortal = function(U, q) {
    var F = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!q || q.nodeType !== 1 && q.nodeType !== 9 && q.nodeType !== 11)
      throw Error(i(299));
    return z(U, q, null, F);
  }, At.flushSync = function(U) {
    var q = w.T, F = r.p;
    try {
      if (w.T = null, r.p = 2, U) return U();
    } finally {
      w.T = q, r.p = F, r.d.f();
    }
  }, At.preconnect = function(U, q) {
    typeof U == "string" && (q ? (q = q.crossOrigin, q = typeof q == "string" ? q === "use-credentials" ? q : "" : void 0) : q = null, r.d.C(U, q));
  }, At.prefetchDNS = function(U) {
    typeof U == "string" && r.d.D(U);
  }, At.preinit = function(U, q) {
    if (typeof U == "string" && q && typeof q.as == "string") {
      var F = q.as, G = k(F, q.crossOrigin), ie = typeof q.integrity == "string" ? q.integrity : void 0, Ze = typeof q.fetchPriority == "string" ? q.fetchPriority : void 0;
      F === "style" ? r.d.S(
        U,
        typeof q.precedence == "string" ? q.precedence : void 0,
        {
          crossOrigin: G,
          integrity: ie,
          fetchPriority: Ze
        }
      ) : F === "script" && r.d.X(U, {
        crossOrigin: G,
        integrity: ie,
        fetchPriority: Ze,
        nonce: typeof q.nonce == "string" ? q.nonce : void 0
      });
    }
  }, At.preinitModule = function(U, q) {
    if (typeof U == "string")
      if (typeof q == "object" && q !== null) {
        if (q.as == null || q.as === "script") {
          var F = k(
            q.as,
            q.crossOrigin
          );
          r.d.M(U, {
            crossOrigin: F,
            integrity: typeof q.integrity == "string" ? q.integrity : void 0,
            nonce: typeof q.nonce == "string" ? q.nonce : void 0
          });
        }
      } else q == null && r.d.M(U);
  }, At.preload = function(U, q) {
    if (typeof U == "string" && typeof q == "object" && q !== null && typeof q.as == "string") {
      var F = q.as, G = k(F, q.crossOrigin);
      r.d.L(U, F, {
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
  }, At.preloadModule = function(U, q) {
    if (typeof U == "string")
      if (q) {
        var F = k(q.as, q.crossOrigin);
        r.d.m(U, {
          as: typeof q.as == "string" && q.as !== "script" ? q.as : void 0,
          crossOrigin: F,
          integrity: typeof q.integrity == "string" ? q.integrity : void 0
        });
      } else r.d.m(U);
  }, At.requestFormReset = function(U) {
    r.d.r(U);
  }, At.unstable_batchedUpdates = function(U, q) {
    return U(q);
  }, At.useFormState = function(U, q, F) {
    return w.H.useFormState(U, q, F);
  }, At.useFormStatus = function() {
    return w.H.useHostTransitionStatus();
  }, At.version = "19.2.4", At;
}
var hm;
function vg() {
  if (hm) return Ro.exports;
  hm = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (i) {
        console.error(i);
      }
  }
  return o(), Ro.exports = pg(), Ro.exports;
}
var mm;
function bg() {
  if (mm) return Di;
  mm = 1;
  var o = gg(), i = Yo(), c = vg();
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
        for (var s = !1, d = a.child; d; ) {
          if (d === l) {
            s = !0, l = a, n = u;
            break;
          }
          if (d === n) {
            s = !0, n = a, l = u;
            break;
          }
          d = d.sibling;
        }
        if (!s) {
          for (d = u.child; d; ) {
            if (d === l) {
              s = !0, l = u, n = a;
              break;
            }
            if (d === n) {
              s = !0, n = u, l = a;
              break;
            }
            d = d.sibling;
          }
          if (!s) throw Error(r(189));
        }
      }
      if (l.alternate !== n) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? e : t;
  }
  function F(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = F(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var G = Object.assign, ie = /* @__PURE__ */ Symbol.for("react.element"), Ze = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ke = /* @__PURE__ */ Symbol.for("react.portal"), it = /* @__PURE__ */ Symbol.for("react.fragment"), Ct = /* @__PURE__ */ Symbol.for("react.strict_mode"), st = /* @__PURE__ */ Symbol.for("react.profiler"), il = /* @__PURE__ */ Symbol.for("react.consumer"), Ce = /* @__PURE__ */ Symbol.for("react.context"), ft = /* @__PURE__ */ Symbol.for("react.forward_ref"), qe = /* @__PURE__ */ Symbol.for("react.suspense"), Je = /* @__PURE__ */ Symbol.for("react.suspense_list"), le = /* @__PURE__ */ Symbol.for("react.memo"), Ue = /* @__PURE__ */ Symbol.for("react.lazy"), Tt = /* @__PURE__ */ Symbol.for("react.activity"), sl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ct = Symbol.iterator;
  function We(e) {
    return e === null || typeof e != "object" ? null : (e = ct && e[ct] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Xt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function qt(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Xt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case it:
        return "Fragment";
      case st:
        return "Profiler";
      case Ct:
        return "StrictMode";
      case qe:
        return "Suspense";
      case Je:
        return "SuspenseList";
      case Tt:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ke:
          return "Portal";
        case Ce:
          return e.displayName || "Context";
        case il:
          return (e._context.displayName || "Context") + ".Consumer";
        case ft:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case le:
          return t = e.displayName || null, t !== null ? t : qt(e.type) || "Memo";
        case Ue:
          t = e._payload, e = e._init;
          try {
            return qt(e(t));
          } catch {
          }
      }
    return null;
  }
  var Le = Array.isArray, x = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = {
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
  var D = y(null), $ = y(null), K = y(null), me = y(null);
  function rt(e, t) {
    switch (H(K, t), H($, e), H(D, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Mh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Mh(t), e = Ch(t, e);
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
  function W() {
    N(D), N($), N(K);
  }
  function ra(e) {
    e.memoizedState !== null && H(me, e);
    var t = D.current, l = Ch(t, e.type);
    t !== l && (H($, e), H(D, l));
  }
  function bn(e) {
    $.current === e && (N(D), N($)), me.current === e && (N(me), Oi._currentValue = Z);
  }
  var Ga, Xa;
  function Jl(e) {
    if (Ga === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Ga = t && t[1] || "", Xa = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ga + e + Xa;
  }
  var oa = !1;
  function Wl(e, t) {
    if (!e || oa) return "";
    oa = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var C = function() {
                throw Error();
              };
              if (Object.defineProperty(C.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(C, []);
                } catch (T) {
                  var A = T;
                }
                Reflect.construct(e, [], C);
              } else {
                try {
                  C.call();
                } catch (T) {
                  A = T;
                }
                e.call(C.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (T) {
                A = T;
              }
              (C = e()) && typeof C.catch == "function" && C.catch(function() {
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
      var u = n.DetermineComponentFrameRoot(), s = u[0], d = u[1];
      if (s && d) {
        var m = s.split(`
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
      oa = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? Jl(l) : "";
  }
  function Sn(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Jl(e.type);
      case 16:
        return Jl("Lazy");
      case 13:
        return e.child !== t && t !== null ? Jl("Suspense Fallback") : Jl("Suspense");
      case 19:
        return Jl("SuspenseList");
      case 0:
      case 15:
        return Wl(e.type, !1);
      case 11:
        return Wl(e.type.render, !1);
      case 1:
        return Wl(e.type, !0);
      case 31:
        return Jl("Activity");
      default:
        return "";
    }
  }
  function Nl(e) {
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
  var gt = Object.prototype.hasOwnProperty, kt = o.unstable_scheduleCallback, pt = o.unstable_cancelCallback, xl = o.unstable_shouldYield, mc = o.unstable_requestPaint, vt = o.unstable_now, Qt = o.unstable_getCurrentPriorityLevel, cl = o.unstable_ImmediatePriority, zt = o.unstable_UserBlockingPriority, bt = o.unstable_NormalPriority, ka = o.unstable_LowPriority, wu = o.unstable_IdlePriority, Qa = o.log, Va = o.unstable_setDisableYieldValue, En = null, St = null;
  function Rl(e) {
    if (typeof Qa == "function" && Va(e), St && typeof St.setStrictMode == "function")
      try {
        St.setStrictMode(En, e);
      } catch {
      }
  }
  var Fe = Math.clz32 ? Math.clz32 : wi, j = Math.log, fa = Math.LN2;
  function wi(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (j(e) / fa | 0) | 0;
  }
  var da = 256, P = 262144, rl = 4194304;
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
  function Ml(e, t, l) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var a = 0, u = e.suspendedLanes, s = e.pingedLanes;
    e = e.warmLanes;
    var d = n & 134217727;
    return d !== 0 ? (n = d & ~u, n !== 0 ? a = Ol(n) : (s &= d, s !== 0 ? a = Ol(s) : l || (l = d & ~e, l !== 0 && (a = Ol(l))))) : (d = n & ~u, d !== 0 ? a = Ol(d) : s !== 0 ? a = Ol(s) : l || (l = n & ~e, l !== 0 && (a = Ol(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & u) === 0 && (u = a & -a, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : a;
  }
  function ha(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Li(e, t) {
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
    var e = rl;
    return rl <<= 1, (rl & 62914560) === 0 && (rl = 4194304), e;
  }
  function ma(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function ya(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function _n(e, t, l, n, a, u) {
    var s = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var d = e.entanglements, m = e.expirationTimes, _ = e.hiddenUpdates;
    for (l = s & ~l; 0 < l; ) {
      var R = 31 - Fe(l), C = 1 << R;
      d[R] = 0, m[R] = -1;
      var A = _[R];
      if (A !== null)
        for (_[R] = null, R = 0; R < A.length; R++) {
          var T = A[R];
          T !== null && (T.lane &= -536870913);
        }
      l &= ~C;
    }
    n !== 0 && Et(e, n, 0), u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(s & ~t));
  }
  function Et(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - Fe(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 261930;
  }
  function Fl(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var n = 31 - Fe(l), a = 1 << n;
      a & t | e[n] & t && (e[n] |= t), l &= ~a;
    }
  }
  function ga(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : An(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function An(e) {
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
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Ph(e.type));
  }
  function Tn(e, t) {
    var l = L.p;
    try {
      return L.p = e, t();
    } finally {
      L.p = l;
    }
  }
  var Dt = Math.random().toString(36).slice(2), He = "__reactFiber$" + Dt, $e = "__reactProps$" + Dt, ol = "__reactContainer$" + Dt, Nn = "__reactEvents$" + Dt, Lu = "__reactListeners$" + Dt, Za = "__reactHandles$" + Dt, Hu = "__reactResources$" + Dt, Vt = "__reactMarker$" + Dt;
  function va(e) {
    delete e[He], delete e[$e], delete e[Nn], delete e[Lu], delete e[Za];
  }
  function Zt(e) {
    var t = e[He];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[ol] || l[He]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = wh(e); e !== null; ) {
            if (l = e[He]) return l;
            e = wh(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function Ll(e) {
    if (e = e[He] || e[ol]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Kt(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function xn(e) {
    var t = e[Hu];
    return t || (t = e[Hu] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ae(e) {
    e[Vt] = !0;
  }
  var Hi = /* @__PURE__ */ new Set(), Ka = {};
  function Cl(e, t) {
    Ut(e, t), Ut(e + "Capture", t);
  }
  function Ut(e, t) {
    for (Ka[e] = t, e = 0; e < t.length; e++)
      Hi.add(t[e]);
  }
  var $l = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Yi = {}, Yu = {};
  function Rn(e) {
    return gt.call(Yu, e) ? !0 : gt.call(Yi, e) ? !1 : $l.test(e) ? Yu[e] = !0 : (Yi[e] = !0, !1);
  }
  function ba(e, t, l) {
    if (Rn(t))
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
  function fl(e, t, l, n) {
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
  function Ye(e) {
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
  function Gi(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Il(e, t, l) {
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
        set: function(s) {
          l = "" + s, u.call(this, s);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(s) {
          l = "" + s;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function On(e) {
    if (!e._valueTracker) {
      var t = Gi(e) ? "checked" : "value";
      e._valueTracker = Il(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Ja(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), n = "";
    return e && (n = Gi(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
  }
  function Mn(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Cn = /[\n"\\]/g;
  function Nt(e) {
    return e.replace(
      Cn,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Hl(e, t, l, n, a, u, s, d) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ye(t)) : e.value !== "" + Ye(t) && (e.value = "" + Ye(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? dl(e, s, Ye(t)) : l != null ? dl(e, s, Ye(l)) : n != null && e.removeAttribute("value"), a == null && u != null && (e.defaultChecked = !!u), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + Ye(d) : e.removeAttribute("name");
  }
  function Wa(e, t, l, n, a, u, s, d) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        On(e);
        return;
      }
      l = l != null ? "" + Ye(l) : "", t = t != null ? "" + Ye(t) : l, d || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = d ? e.checked : !!n, e.defaultChecked = !!n, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), On(e);
  }
  function dl(e, t, l) {
    t === "number" && Mn(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function je(e, t, l, n) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < l.length; a++)
        t["$" + l[a]] = !0;
      for (l = 0; l < e.length; l++)
        a = t.hasOwnProperty("$" + e[l].value), e[l].selected !== a && (e[l].selected = a), a && n && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Ye(l), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === l) {
          e[a].selected = !0, n && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Xi(e, t, l) {
    if (t != null && (t = "" + Ye(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Ye(l) : "";
  }
  function Fa(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(r(92));
        if (Le(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), t = l;
    }
    l = Ye(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n), On(e);
  }
  function qn(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var yc = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ki(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || yc.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function $a(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var a in t)
        n = t[a], t.hasOwnProperty(a) && l[a] !== n && ki(e, a, n);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && ki(e, u, t[u]);
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
  var Qi = /* @__PURE__ */ new Map([
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
  ]), Gu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Pl(e) {
    return Gu.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Ge() {
  }
  var hl = null;
  function ml(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ql = null, Jt = null;
  function Xu(e) {
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
              'input[name="' + Nt(
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
              n = l[t], n.form === e.form && Ja(n);
          }
          break e;
        case "textarea":
          Xi(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && je(e, !!l.multiple, t, !1);
      }
    }
  }
  var Ia = !1;
  function Pa(e, t, l) {
    if (Ia) return e(t, l);
    Ia = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (Ia = !1, (ql !== null || Jt !== null) && (js(), ql && (t = ql, e = Jt, Jt = ql = null, Xu(t), e)))
        for (t = 0; t < e.length; t++) Xu(e[t]);
    }
  }
  function yl(e, t) {
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
  var jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), zn = !1;
  if (jt)
    try {
      var Dn = {};
      Object.defineProperty(Dn, "passive", {
        get: function() {
          zn = !0;
        }
      }), window.addEventListener("test", Dn, Dn), window.removeEventListener("test", Dn, Dn);
    } catch {
      zn = !1;
    }
  var Bt = null, eu = null, tu = null;
  function ku() {
    if (tu) return tu;
    var e, t = eu, l = t.length, n, a = "value" in Bt ? Bt.value : Bt.textContent, u = a.length;
    for (e = 0; e < l && t[e] === a[e]; e++) ;
    var s = l - e;
    for (n = 1; n <= s && t[l - n] === a[u - n]; n++) ;
    return tu = a.slice(e, 1 < n ? 1 - n : void 0);
  }
  function Ea(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function _a() {
    return !0;
  }
  function Qu() {
    return !1;
  }
  function Ie(e) {
    function t(l, n, a, u, s) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = u, this.target = s, this.currentTarget = null;
      for (var d in e)
        e.hasOwnProperty(d) && (l = e[d], this[d] = l ? l(u) : u[d]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? _a : Qu, this.isPropagationStopped = Qu, this;
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
  var Wt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ft = Ie(Wt), Un = G({}, Wt, { view: 0, detail: 0 }), Aa = Ie(Un), xt, jn, Yl, lu = G({}, Un, {
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
      return "movementX" in e ? e.movementX : (e !== Yl && (Yl && e.type === "mousemove" ? (xt = e.screenX - Yl.screenX, jn = e.screenY - Yl.screenY) : jn = xt = 0, Yl = e), xt);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : jn;
    }
  }), Vi = Ie(lu), gc = G({}, lu, { dataTransfer: 0 }), pc = Ie(gc), vc = G({}, Un, { relatedTarget: 0 }), Vu = Ie(vc), bc = G({}, Wt, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Sc = Ie(bc), Ec = G({}, Wt, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), _c = Ie(Ec), Ac = G({}, Wt, { data: 0 }), Zi = Ie(Ac), Tc = {
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
  }, Zu = {
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
  }, Nc = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Bn(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Nc[e]) ? !!t[e] : !1;
  }
  function Gl() {
    return Bn;
  }
  var xc = G({}, Un, {
    key: function(e) {
      if (e.key) {
        var t = Tc[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ea(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zu[e.keyCode] || "Unidentified" : "";
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
  }), Ki = Ie(xc), Ku = G({}, lu, {
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
  }), Ji = Ie(Ku), Ju = G({}, Un, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Gl
  }), Rc = Ie(Ju), nu = G({}, Wt, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Wi = Ie(nu), Fi = G({}, lu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Oc = Ie(Fi), Wu = G({}, Wt, {
    newState: 0,
    oldState: 0
  }), $i = Ie(Wu), Mc = [9, 13, 27, 32], au = jt && "CompositionEvent" in window, wn = null;
  jt && "documentMode" in document && (wn = document.documentMode);
  var Ii = jt && "TextEvent" in window && !wn, Pi = jt && (!au || wn && 8 < wn && 11 >= wn), f = " ", p = !1;
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
      return e === "compositionend" || !au && O(e, t) ? (e = ku(), tu = eu = Bt = null, Q = !1, e) : null;
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
        return Pi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Xe = {
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
    return t === "input" ? !!Xe[e.type] : t === "textarea";
  }
  function De(e, t, l, n) {
    ql ? Jt ? Jt.push(n) : Jt = [n] : ql = n, t = Xs(t, "onChange"), 0 < t.length && (l = new Ft(
      "onChange",
      "change",
      null,
      l,
      n
    ), e.push({ event: l, listeners: t }));
  }
  var Pe = null, Rt = null;
  function en(e) {
    Ah(e, 0);
  }
  function Ot(e) {
    var t = Kt(e);
    if (Ja(t)) return e;
  }
  function Ta(e, t) {
    if (e === "change") return t;
  }
  var Fu = !1;
  if (jt) {
    var I;
    if (jt) {
      var ke = "oninput" in document;
      if (!ke) {
        var $t = document.createElement("div");
        $t.setAttribute("oninput", "return;"), ke = typeof $t.oninput == "function";
      }
      I = ke;
    } else I = !1;
    Fu = I && (!document.documentMode || 9 < document.documentMode);
  }
  function Ln() {
    Pe && (Pe.detachEvent("onpropertychange", tn), Rt = Pe = null);
  }
  function tn(e) {
    if (e.propertyName === "value" && Ot(Rt)) {
      var t = [];
      De(
        t,
        Rt,
        e,
        ml(e)
      ), Pa(en, t);
    }
  }
  function $u(e, t, l) {
    e === "focusin" ? (Ln(), Pe = t, Rt = l, Pe.attachEvent("onpropertychange", tn)) : e === "focusout" && Ln();
  }
  function es(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ot(Rt);
  }
  function Xm(e, t) {
    if (e === "click") return Ot(t);
  }
  function km(e, t) {
    if (e === "input" || e === "change")
      return Ot(t);
  }
  function Qm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var It = typeof Object.is == "function" ? Object.is : Qm;
  function Iu(e, t) {
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
  function Zo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ko(e, t) {
    var l = Zo(e);
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
      l = Zo(l);
    }
  }
  function Jo(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Jo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Wo(e) {
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
  function Cc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Vm = jt && "documentMode" in document && 11 >= document.documentMode, uu = null, qc = null, Pu = null, zc = !1;
  function Fo(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    zc || uu == null || uu !== Mn(n) || (n = uu, "selectionStart" in n && Cc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), Pu && Iu(Pu, n) || (Pu = n, n = Xs(qc, "onSelect"), 0 < n.length && (t = new Ft(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: n }), t.target = uu)));
  }
  function Na(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var iu = {
    animationend: Na("Animation", "AnimationEnd"),
    animationiteration: Na("Animation", "AnimationIteration"),
    animationstart: Na("Animation", "AnimationStart"),
    transitionrun: Na("Transition", "TransitionRun"),
    transitionstart: Na("Transition", "TransitionStart"),
    transitioncancel: Na("Transition", "TransitionCancel"),
    transitionend: Na("Transition", "TransitionEnd")
  }, Dc = {}, $o = {};
  jt && ($o = document.createElement("div").style, "AnimationEvent" in window || (delete iu.animationend.animation, delete iu.animationiteration.animation, delete iu.animationstart.animation), "TransitionEvent" in window || delete iu.transitionend.transition);
  function xa(e) {
    if (Dc[e]) return Dc[e];
    if (!iu[e]) return e;
    var t = iu[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in $o)
        return Dc[e] = t[l];
    return e;
  }
  var Io = xa("animationend"), Po = xa("animationiteration"), ef = xa("animationstart"), Zm = xa("transitionrun"), Km = xa("transitionstart"), Jm = xa("transitioncancel"), tf = xa("transitionend"), lf = /* @__PURE__ */ new Map(), Uc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Uc.push("scrollEnd");
  function zl(e, t) {
    lf.set(e, t), Cl(t, [e]);
  }
  var ts = typeof reportError == "function" ? reportError : function(e) {
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
  }, gl = [], su = 0, jc = 0;
  function ls() {
    for (var e = su, t = jc = su = 0; t < e; ) {
      var l = gl[t];
      gl[t++] = null;
      var n = gl[t];
      gl[t++] = null;
      var a = gl[t];
      gl[t++] = null;
      var u = gl[t];
      if (gl[t++] = null, n !== null && a !== null) {
        var s = n.pending;
        s === null ? a.next = a : (a.next = s.next, s.next = a), n.pending = a;
      }
      u !== 0 && nf(l, a, u);
    }
  }
  function ns(e, t, l, n) {
    gl[su++] = e, gl[su++] = t, gl[su++] = l, gl[su++] = n, jc |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function Bc(e, t, l, n) {
    return ns(e, t, l, n), as(e);
  }
  function Ra(e, t) {
    return ns(e, null, null, t), as(e);
  }
  function nf(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, u = e.return; u !== null; )
      u.childLanes |= l, n = u.alternate, n !== null && (n.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (a = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, a && t !== null && (a = 31 - Fe(l), e = u.hiddenUpdates, n = e[a], n === null ? e[a] = [t] : n.push(t), t.lane = l | 536870912), u) : null;
  }
  function as(e) {
    if (50 < Ei)
      throw Ei = 0, Vr = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var cu = {};
  function Wm(e, t, l, n) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pt(e, t, l, n) {
    return new Wm(e, t, l, n);
  }
  function wc(e) {
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
  function af(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function us(e, t, l, n, a, u) {
    var s = 0;
    if (n = e, typeof e == "function") wc(e) && (s = 1);
    else if (typeof e == "string")
      s = eg(
        e,
        l,
        D.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Tt:
          return e = Pt(31, l, t, a), e.elementType = Tt, e.lanes = u, e;
        case it:
          return Oa(l.children, a, u, t);
        case Ct:
          s = 8, a |= 24;
          break;
        case st:
          return e = Pt(12, l, t, a | 2), e.elementType = st, e.lanes = u, e;
        case qe:
          return e = Pt(13, l, t, a), e.elementType = qe, e.lanes = u, e;
        case Je:
          return e = Pt(19, l, t, a), e.elementType = Je, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ce:
                s = 10;
                break e;
              case il:
                s = 9;
                break e;
              case ft:
                s = 11;
                break e;
              case le:
                s = 14;
                break e;
              case Ue:
                s = 16, n = null;
                break e;
            }
          s = 29, l = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return t = Pt(s, l, t, a), t.elementType = e, t.type = n, t.lanes = u, t;
  }
  function Oa(e, t, l, n) {
    return e = Pt(7, e, n, t), e.lanes = l, e;
  }
  function Lc(e, t, l) {
    return e = Pt(6, e, null, t), e.lanes = l, e;
  }
  function uf(e) {
    var t = Pt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Hc(e, t, l) {
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
  var sf = /* @__PURE__ */ new WeakMap();
  function pl(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = sf.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: Nl(t)
      }, sf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Nl(t)
    };
  }
  var ru = [], ou = 0, is = null, ei = 0, vl = [], bl = 0, Hn = null, Xl = 1, kl = "";
  function nn(e, t) {
    ru[ou++] = ei, ru[ou++] = is, is = e, ei = t;
  }
  function cf(e, t, l) {
    vl[bl++] = Xl, vl[bl++] = kl, vl[bl++] = Hn, Hn = e;
    var n = Xl;
    e = kl;
    var a = 32 - Fe(n) - 1;
    n &= ~(1 << a), l += 1;
    var u = 32 - Fe(t) + a;
    if (30 < u) {
      var s = a - a % 5;
      u = (n & (1 << s) - 1).toString(32), n >>= s, a -= s, Xl = 1 << 32 - Fe(t) + a | l << a | n, kl = u + e;
    } else
      Xl = 1 << u | l << a | n, kl = e;
  }
  function Yc(e) {
    e.return !== null && (nn(e, 1), cf(e, 1, 0));
  }
  function Gc(e) {
    for (; e === is; )
      is = ru[--ou], ru[ou] = null, ei = ru[--ou], ru[ou] = null;
    for (; e === Hn; )
      Hn = vl[--bl], vl[bl] = null, kl = vl[--bl], vl[bl] = null, Xl = vl[--bl], vl[bl] = null;
  }
  function rf(e, t) {
    vl[bl++] = Xl, vl[bl++] = kl, vl[bl++] = Hn, Xl = t.id, kl = t.overflow, Hn = e;
  }
  var dt = null, Oe = null, de = !1, Yn = null, Sl = !1, Xc = Error(r(519));
  function Gn(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ti(pl(t, e)), Xc;
  }
  function of(e) {
    var t = e.stateNode, l = e.type, n = e.memoizedProps;
    switch (t[He] = e, t[$e] = n, l) {
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
        for (l = 0; l < Ai.length; l++)
          re(Ai[l], t);
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
        re("invalid", t), Wa(
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
        re("invalid", t), Fa(t, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || Rh(t.textContent, l) ? (n.popover != null && (re("beforetoggle", t), re("toggle", t)), n.onScroll != null && re("scroll", t), n.onScrollEnd != null && re("scrollend", t), n.onClick != null && (t.onclick = Ge), t = !0) : t = !1, t || Gn(e, !0);
  }
  function ff(e) {
    for (dt = e.return; dt; )
      switch (dt.tag) {
        case 5:
        case 31:
        case 13:
          Sl = !1;
          return;
        case 27:
        case 3:
          Sl = !0;
          return;
        default:
          dt = dt.return;
      }
  }
  function fu(e) {
    if (e !== dt) return !1;
    if (!de) return ff(e), de = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || io(e.type, e.memoizedProps)), l = !l), l && Oe && Gn(e), ff(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Oe = Bh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Oe = Bh(e);
    } else
      t === 27 ? (t = Oe, ta(e.type) ? (e = fo, fo = null, Oe = e) : Oe = t) : Oe = dt ? _l(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ma() {
    Oe = dt = null, de = !1;
  }
  function kc() {
    var e = Yn;
    return e !== null && (Yt === null ? Yt = e : Yt.push.apply(
      Yt,
      e
    ), Yn = null), e;
  }
  function ti(e) {
    Yn === null ? Yn = [e] : Yn.push(e);
  }
  var Qc = y(null), Ca = null, an = null;
  function Xn(e, t, l) {
    H(Qc, t._currentValue), t._currentValue = l;
  }
  function un(e) {
    e._currentValue = Qc.current, N(Qc);
  }
  function Vc(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function Zc(e, t, l, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var u = a.dependencies;
      if (u !== null) {
        var s = a.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var d = u;
          u = a;
          for (var m = 0; m < t.length; m++)
            if (d.context === t[m]) {
              u.lanes |= l, d = u.alternate, d !== null && (d.lanes |= l), Vc(
                u.return,
                l,
                e
              ), n || (s = null);
              break e;
            }
          u = d.next;
        }
      } else if (a.tag === 18) {
        if (s = a.return, s === null) throw Error(r(341));
        s.lanes |= l, u = s.alternate, u !== null && (u.lanes |= l), Vc(s, l, e), s = null;
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
  function du(e, t, l, n) {
    e = null;
    for (var a = t, u = !1; a !== null; ) {
      if (!u) {
        if ((a.flags & 524288) !== 0) u = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var s = a.alternate;
        if (s === null) throw Error(r(387));
        if (s = s.memoizedProps, s !== null) {
          var d = a.type;
          It(a.pendingProps.value, s.value) || (e !== null ? e.push(d) : e = [d]);
        }
      } else if (a === me.current) {
        if (s = a.alternate, s === null) throw Error(r(387));
        s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Oi) : e = [Oi]);
      }
      a = a.return;
    }
    e !== null && Zc(
      t,
      e,
      l,
      n
    ), t.flags |= 262144;
  }
  function ss(e) {
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
    Ca = e, an = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ht(e) {
    return df(Ca, e);
  }
  function cs(e, t) {
    return Ca === null && qa(e), df(e, t);
  }
  function df(e, t) {
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
    $$typeof: Ce,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Kc() {
    return {
      controller: new Fm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function li(e) {
    e.refCount--, e.refCount === 0 && $m(Im, function() {
      e.controller.abort();
    });
  }
  var ni = null, Jc = 0, hu = 0, mu = null;
  function Pm(e, t) {
    if (ni === null) {
      var l = ni = [];
      Jc = 0, hu = $r(), mu = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Jc++, t.then(hf, hf), t;
  }
  function hf() {
    if (--Jc === 0 && ni !== null) {
      mu !== null && (mu.status = "fulfilled");
      var e = ni;
      ni = null, hu = 0, mu = null;
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
  var mf = x.S;
  x.S = function(e, t) {
    $d = vt(), typeof t == "object" && t !== null && typeof t.then == "function" && Pm(e, t), mf !== null && mf(e, t);
  };
  var za = y(null);
  function Wc() {
    var e = za.current;
    return e !== null ? e : Re.pooledCache;
  }
  function rs(e, t) {
    t === null ? H(za, za.current) : H(za, t.pool);
  }
  function yf() {
    var e = Wc();
    return e === null ? null : { parent: et._currentValue, pool: e };
  }
  var yu = Error(r(460)), Fc = Error(r(474)), os = Error(r(542)), fs = { then: function() {
  } };
  function gf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function pf(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Ge, Ge), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, bf(e), e;
      default:
        if (typeof t.status == "string") t.then(Ge, Ge);
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
            throw e = t.reason, bf(e), e;
        }
        throw Ua = t, yu;
    }
  }
  function Da(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Ua = l, yu) : l;
    }
  }
  var Ua = null;
  function vf() {
    if (Ua === null) throw Error(r(459));
    var e = Ua;
    return Ua = null, e;
  }
  function bf(e) {
    if (e === yu || e === os)
      throw Error(r(483));
  }
  var gu = null, ai = 0;
  function ds(e) {
    var t = ai;
    return ai += 1, gu === null && (gu = []), pf(gu, e, t);
  }
  function ui(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function hs(e, t) {
    throw t.$$typeof === ie ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Sf(e) {
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
    function s(v) {
      return e && v.alternate === null && (v.flags |= 67108866), v;
    }
    function d(v, g, E, M) {
      return g === null || g.tag !== 6 ? (g = Lc(E, v.mode, M), g.return = v, g) : (g = a(g, E), g.return = v, g);
    }
    function m(v, g, E, M) {
      var V = E.type;
      return V === it ? R(
        v,
        g,
        E.props.children,
        M,
        E.key
      ) : g !== null && (g.elementType === V || typeof V == "object" && V !== null && V.$$typeof === Ue && Da(V) === g.type) ? (g = a(g, E.props), ui(g, E), g.return = v, g) : (g = us(
        E.type,
        E.key,
        E.props,
        null,
        v.mode,
        M
      ), ui(g, E), g.return = v, g);
    }
    function _(v, g, E, M) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== E.containerInfo || g.stateNode.implementation !== E.implementation ? (g = Hc(E, v.mode, M), g.return = v, g) : (g = a(g, E.children || []), g.return = v, g);
    }
    function R(v, g, E, M, V) {
      return g === null || g.tag !== 7 ? (g = Oa(
        E,
        v.mode,
        M,
        V
      ), g.return = v, g) : (g = a(g, E), g.return = v, g);
    }
    function C(v, g, E) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return g = Lc(
          "" + g,
          v.mode,
          E
        ), g.return = v, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Ze:
            return E = us(
              g.type,
              g.key,
              g.props,
              null,
              v.mode,
              E
            ), ui(E, g), E.return = v, E;
          case Ke:
            return g = Hc(
              g,
              v.mode,
              E
            ), g.return = v, g;
          case Ue:
            return g = Da(g), C(v, g, E);
        }
        if (Le(g) || We(g))
          return g = Oa(
            g,
            v.mode,
            E,
            null
          ), g.return = v, g;
        if (typeof g.then == "function")
          return C(v, ds(g), E);
        if (g.$$typeof === Ce)
          return C(
            v,
            cs(v, g),
            E
          );
        hs(v, g);
      }
      return null;
    }
    function A(v, g, E, M) {
      var V = g !== null ? g.key : null;
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return V !== null ? null : d(v, g, "" + E, M);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Ze:
            return E.key === V ? m(v, g, E, M) : null;
          case Ke:
            return E.key === V ? _(v, g, E, M) : null;
          case Ue:
            return E = Da(E), A(v, g, E, M);
        }
        if (Le(E) || We(E))
          return V !== null ? null : R(v, g, E, M, null);
        if (typeof E.then == "function")
          return A(
            v,
            g,
            ds(E),
            M
          );
        if (E.$$typeof === Ce)
          return A(
            v,
            g,
            cs(v, E),
            M
          );
        hs(v, E);
      }
      return null;
    }
    function T(v, g, E, M, V) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return v = v.get(E) || null, d(g, v, "" + M, V);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Ze:
            return v = v.get(
              M.key === null ? E : M.key
            ) || null, m(g, v, M, V);
          case Ke:
            return v = v.get(
              M.key === null ? E : M.key
            ) || null, _(g, v, M, V);
          case Ue:
            return M = Da(M), T(
              v,
              g,
              E,
              M,
              V
            );
        }
        if (Le(M) || We(M))
          return v = v.get(E) || null, R(g, v, M, V, null);
        if (typeof M.then == "function")
          return T(
            v,
            g,
            E,
            ds(M),
            V
          );
        if (M.$$typeof === Ce)
          return T(
            v,
            g,
            E,
            cs(g, M),
            V
          );
        hs(g, M);
      }
      return null;
    }
    function Y(v, g, E, M) {
      for (var V = null, pe = null, X = g, ne = g = 0, fe = null; X !== null && ne < E.length; ne++) {
        X.index > ne ? (fe = X, X = null) : fe = X.sibling;
        var ve = A(
          v,
          X,
          E[ne],
          M
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
          X = C(v, E[ne], M), X !== null && (g = u(
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
          M
        ), fe !== null && (e && fe.alternate !== null && X.delete(
          fe.key === null ? ne : fe.key
        ), g = u(
          fe,
          g,
          ne
        ), pe === null ? V = fe : pe.sibling = fe, pe = fe);
      return e && X.forEach(function(ia) {
        return t(v, ia);
      }), de && nn(v, ne), V;
    }
    function J(v, g, E, M) {
      if (E == null) throw Error(r(151));
      for (var V = null, pe = null, X = g, ne = g = 0, fe = null, ve = E.next(); X !== null && !ve.done; ne++, ve = E.next()) {
        X.index > ne ? (fe = X, X = null) : fe = X.sibling;
        var ia = A(v, X, ve.value, M);
        if (ia === null) {
          X === null && (X = fe);
          break;
        }
        e && X && ia.alternate === null && t(v, X), g = u(ia, g, ne), pe === null ? V = ia : pe.sibling = ia, pe = ia, X = fe;
      }
      if (ve.done)
        return l(v, X), de && nn(v, ne), V;
      if (X === null) {
        for (; !ve.done; ne++, ve = E.next())
          ve = C(v, ve.value, M), ve !== null && (g = u(ve, g, ne), pe === null ? V = ve : pe.sibling = ve, pe = ve);
        return de && nn(v, ne), V;
      }
      for (X = n(X); !ve.done; ne++, ve = E.next())
        ve = T(X, v, ne, ve.value, M), ve !== null && (e && ve.alternate !== null && X.delete(ve.key === null ? ne : ve.key), g = u(ve, g, ne), pe === null ? V = ve : pe.sibling = ve, pe = ve);
      return e && X.forEach(function(fg) {
        return t(v, fg);
      }), de && nn(v, ne), V;
    }
    function xe(v, g, E, M) {
      if (typeof E == "object" && E !== null && E.type === it && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Ze:
            e: {
              for (var V = E.key; g !== null; ) {
                if (g.key === V) {
                  if (V = E.type, V === it) {
                    if (g.tag === 7) {
                      l(
                        v,
                        g.sibling
                      ), M = a(
                        g,
                        E.props.children
                      ), M.return = v, v = M;
                      break e;
                    }
                  } else if (g.elementType === V || typeof V == "object" && V !== null && V.$$typeof === Ue && Da(V) === g.type) {
                    l(
                      v,
                      g.sibling
                    ), M = a(g, E.props), ui(M, E), M.return = v, v = M;
                    break e;
                  }
                  l(v, g);
                  break;
                } else t(v, g);
                g = g.sibling;
              }
              E.type === it ? (M = Oa(
                E.props.children,
                v.mode,
                M,
                E.key
              ), M.return = v, v = M) : (M = us(
                E.type,
                E.key,
                E.props,
                null,
                v.mode,
                M
              ), ui(M, E), M.return = v, v = M);
            }
            return s(v);
          case Ke:
            e: {
              for (V = E.key; g !== null; ) {
                if (g.key === V)
                  if (g.tag === 4 && g.stateNode.containerInfo === E.containerInfo && g.stateNode.implementation === E.implementation) {
                    l(
                      v,
                      g.sibling
                    ), M = a(g, E.children || []), M.return = v, v = M;
                    break e;
                  } else {
                    l(v, g);
                    break;
                  }
                else t(v, g);
                g = g.sibling;
              }
              M = Hc(E, v.mode, M), M.return = v, v = M;
            }
            return s(v);
          case Ue:
            return E = Da(E), xe(
              v,
              g,
              E,
              M
            );
        }
        if (Le(E))
          return Y(
            v,
            g,
            E,
            M
          );
        if (We(E)) {
          if (V = We(E), typeof V != "function") throw Error(r(150));
          return E = V.call(E), J(
            v,
            g,
            E,
            M
          );
        }
        if (typeof E.then == "function")
          return xe(
            v,
            g,
            ds(E),
            M
          );
        if (E.$$typeof === Ce)
          return xe(
            v,
            g,
            cs(v, E),
            M
          );
        hs(v, E);
      }
      return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, g !== null && g.tag === 6 ? (l(v, g.sibling), M = a(g, E), M.return = v, v = M) : (l(v, g), M = Lc(E, v.mode, M), M.return = v, v = M), s(v)) : l(v, g);
    }
    return function(v, g, E, M) {
      try {
        ai = 0;
        var V = xe(
          v,
          g,
          E,
          M
        );
        return gu = null, V;
      } catch (X) {
        if (X === yu || X === os) throw X;
        var pe = Pt(29, X, null, v.mode);
        return pe.lanes = M, pe.return = v, pe;
      }
    };
  }
  var ja = Sf(!0), Ef = Sf(!1), kn = !1;
  function $c(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ic(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Qn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Vn(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (be & 2) !== 0) {
      var a = n.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = as(e), nf(e, null, l), t;
    }
    return ns(e, n, t, l), as(e);
  }
  function ii(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, Fl(e, l);
    }
  }
  function Pc(e, t) {
    var l = e.updateQueue, n = e.alternate;
    if (n !== null && (n = n.updateQueue, l === n)) {
      var a = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var s = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? a = u = s : u = u.next = s, l = l.next;
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
  var er = !1;
  function si() {
    if (er) {
      var e = mu;
      if (e !== null) throw e;
    }
  }
  function ci(e, t, l, n) {
    er = !1;
    var a = e.updateQueue;
    kn = !1;
    var u = a.firstBaseUpdate, s = a.lastBaseUpdate, d = a.shared.pending;
    if (d !== null) {
      a.shared.pending = null;
      var m = d, _ = m.next;
      m.next = null, s === null ? u = _ : s.next = _, s = m;
      var R = e.alternate;
      R !== null && (R = R.updateQueue, d = R.lastBaseUpdate, d !== s && (d === null ? R.firstBaseUpdate = _ : d.next = _, R.lastBaseUpdate = m));
    }
    if (u !== null) {
      var C = a.baseState;
      s = 0, R = _ = m = null, d = u;
      do {
        var A = d.lane & -536870913, T = A !== d.lane;
        if (T ? (oe & A) === A : (n & A) === A) {
          A !== 0 && A === hu && (er = !0), R !== null && (R = R.next = {
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
                  C = Y.call(xe, C, A);
                  break e;
                }
                C = Y;
                break e;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = J.payload, A = typeof Y == "function" ? Y.call(xe, C, A) : Y, A == null) break e;
                C = G({}, C, A);
                break e;
              case 2:
                kn = !0;
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
          }, R === null ? (_ = R = T, m = C) : R = R.next = T, s |= A;
        if (d = d.next, d === null) {
          if (d = a.shared.pending, d === null)
            break;
          T = d, d = T.next, T.next = null, a.lastBaseUpdate = T, a.shared.pending = null;
        }
      } while (!0);
      R === null && (m = C), a.baseState = m, a.firstBaseUpdate = _, a.lastBaseUpdate = R, u === null && (a.shared.lanes = 0), Fn |= s, e.lanes = s, e.memoizedState = C;
    }
  }
  function _f(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function Af(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        _f(l[e], t);
  }
  var pu = y(null), ms = y(0);
  function Tf(e, t) {
    e = yn, H(ms, e), H(pu, t), yn = e | t.baseLanes;
  }
  function tr() {
    H(ms, yn), H(pu, pu.current);
  }
  function lr() {
    yn = ms.current, N(pu), N(ms);
  }
  var el = y(null), El = null;
  function Zn(e) {
    var t = e.alternate;
    H(Qe, Qe.current & 1), H(el, e), El === null && (t === null || pu.current !== null || t.memoizedState !== null) && (El = e);
  }
  function nr(e) {
    H(Qe, Qe.current), H(el, e), El === null && (El = e);
  }
  function Nf(e) {
    e.tag === 22 ? (H(Qe, Qe.current), H(el, e), El === null && (El = e)) : Kn();
  }
  function Kn() {
    H(Qe, Qe.current), H(el, el.current);
  }
  function tl(e) {
    N(el), El === e && (El = null), N(Qe);
  }
  var Qe = y(0);
  function ys(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || ro(l) || oo(l)))
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
  var sn = 0, te = null, Te = null, tt = null, gs = !1, vu = !1, Ba = !1, ps = 0, ri = 0, bu = null, ty = 0;
  function Be() {
    throw Error(r(321));
  }
  function ar(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!It(e[l], t[l])) return !1;
    return !0;
  }
  function ur(e, t, l, n, a, u) {
    return sn = u, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, x.H = e === null || e.memoizedState === null ? cd : Sr, Ba = !1, u = l(n, a), Ba = !1, vu && (u = Rf(
      t,
      l,
      n,
      a
    )), xf(e), u;
  }
  function xf(e) {
    x.H = di;
    var t = Te !== null && Te.next !== null;
    if (sn = 0, tt = Te = te = null, gs = !1, ri = 0, bu = null, t) throw Error(r(300));
    e === null || lt || (e = e.dependencies, e !== null && ss(e) && (lt = !0));
  }
  function Rf(e, t, l, n) {
    te = e;
    var a = 0;
    do {
      if (vu && (bu = null), ri = 0, vu = !1, 25 <= a) throw Error(r(301));
      if (a += 1, tt = Te = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      x.H = rd, u = t(l, n);
    } while (vu);
    return u;
  }
  function ly() {
    var e = x.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? oi(t) : t, e = e.useState()[0], (Te !== null ? Te.memoizedState : null) !== e && (te.flags |= 1024), t;
  }
  function ir() {
    var e = ps !== 0;
    return ps = 0, e;
  }
  function sr(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function cr(e) {
    if (gs) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      gs = !1;
    }
    sn = 0, tt = Te = te = null, vu = !1, ri = ps = 0, bu = null;
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
  function Ve() {
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
  function vs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function oi(e) {
    var t = ri;
    return ri += 1, bu === null && (bu = []), e = pf(bu, e, t), t = te, (tt === null ? t.memoizedState : tt.next) === null && (t = t.alternate, x.H = t === null || t.memoizedState === null ? cd : Sr), e;
  }
  function bs(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return oi(e);
      if (e.$$typeof === Ce) return ht(e);
    }
    throw Error(r(438, String(e)));
  }
  function rr(e) {
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
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = vs(), te.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++)
        l[n] = sl;
    return t.index++, l;
  }
  function cn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ss(e) {
    var t = Ve();
    return or(t, Te, e);
  }
  function or(e, t, l) {
    var n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = l;
    var a = e.baseQueue, u = n.pending;
    if (u !== null) {
      if (a !== null) {
        var s = a.next;
        a.next = u.next, u.next = s;
      }
      t.baseQueue = a = u, n.pending = null;
    }
    if (u = e.baseState, a === null) e.memoizedState = u;
    else {
      t = a.next;
      var d = s = null, m = null, _ = t, R = !1;
      do {
        var C = _.lane & -536870913;
        if (C !== _.lane ? (oe & C) === C : (sn & C) === C) {
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
            }), C === hu && (R = !0);
          else if ((sn & A) === A) {
            _ = _.next, A === hu && (R = !0);
            continue;
          } else
            C = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, m === null ? (d = m = C, s = u) : m = m.next = C, te.lanes |= A, Fn |= A;
          C = _.action, Ba && l(u, C), u = _.hasEagerState ? _.eagerState : l(u, C);
        } else
          A = {
            lane: C,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, m === null ? (d = m = A, s = u) : m = m.next = A, te.lanes |= C, Fn |= C;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (m === null ? s = u : m.next = d, !It(u, e.memoizedState) && (lt = !0, R && (l = mu, l !== null)))
        throw l;
      e.memoizedState = u, e.baseState = s, e.baseQueue = m, n.lastRenderedState = u;
    }
    return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function fr(e) {
    var t = Ve(), l = t.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = e;
    var n = l.dispatch, a = l.pending, u = t.memoizedState;
    if (a !== null) {
      l.pending = null;
      var s = a = a.next;
      do
        u = e(u, s.action), s = s.next;
      while (s !== a);
      It(u, t.memoizedState) || (lt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
    }
    return [u, n];
  }
  function Of(e, t, l) {
    var n = te, a = Ve(), u = de;
    if (u) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = t();
    var s = !It(
      (Te || a).memoizedState,
      l
    );
    if (s && (a.memoizedState = l, lt = !0), a = a.queue, mr(qf.bind(null, n, a, e), [
      e
    ]), a.getSnapshot !== t || s || tt !== null && tt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Su(
        9,
        { destroy: void 0 },
        Cf.bind(
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
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = te.updateQueue, t === null ? (t = vs(), te.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function Cf(e, t, l, n) {
    t.value = l, t.getSnapshot = n, zf(t) && Df(e);
  }
  function qf(e, t, l) {
    return l(function() {
      zf(t) && Df(e);
    });
  }
  function zf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !It(e, l);
    } catch {
      return !0;
    }
  }
  function Df(e) {
    var t = Ra(e, 2);
    t !== null && Gt(t, e, 2);
  }
  function dr(e) {
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
  function Uf(e, t, l, n) {
    return e.baseState = l, or(
      e,
      Te,
      typeof n == "function" ? n : cn
    );
  }
  function ny(e, t, l, n, a) {
    if (As(e)) throw Error(r(485));
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
      x.T !== null ? l(!0) : u.isTransition = !1, n(u), l = t.pending, l === null ? (u.next = t.pending = u, jf(t, u)) : (u.next = l.next, t.pending = l.next = u);
    }
  }
  function jf(e, t) {
    var l = t.action, n = t.payload, a = e.state;
    if (t.isTransition) {
      var u = x.T, s = {};
      x.T = s;
      try {
        var d = l(a, n), m = x.S;
        m !== null && m(s, d), Bf(e, t, d);
      } catch (_) {
        hr(e, t, _);
      } finally {
        u !== null && s.types !== null && (u.types = s.types), x.T = u;
      }
    } else
      try {
        u = l(a, n), Bf(e, t, u);
      } catch (_) {
        hr(e, t, _);
      }
  }
  function Bf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        wf(e, t, n);
      },
      function(n) {
        return hr(e, t, n);
      }
    ) : wf(e, t, l);
  }
  function wf(e, t, l) {
    t.status = "fulfilled", t.value = l, Lf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, jf(e, l)));
  }
  function hr(e, t, l) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        t.status = "rejected", t.reason = l, Lf(t), t = t.next;
      while (t !== n);
    }
    e.action = null;
  }
  function Lf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Hf(e, t) {
    return t;
  }
  function Yf(e, t) {
    if (de) {
      var l = Re.formState;
      if (l !== null) {
        e: {
          var n = te;
          if (de) {
            if (Oe) {
              t: {
                for (var a = Oe, u = Sl; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break t;
                  }
                  if (a = _l(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                Oe = _l(
                  a.nextSibling
                ), n = a.data === "F!";
                break e;
              }
            }
            Gn(n);
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
      lastRenderedReducer: Hf,
      lastRenderedState: t
    }, l.queue = n, l = ud.bind(
      null,
      te,
      n
    ), n.dispatch = l, n = dr(!1), u = br.bind(
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
  function Gf(e) {
    var t = Ve();
    return Xf(t, Te, e);
  }
  function Xf(e, t, l) {
    if (t = or(
      e,
      t,
      Hf
    )[0], e = Ss(cn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = oi(t);
      } catch (s) {
        throw s === yu ? os : s;
      }
    else n = t;
    t = Ve();
    var a = t.queue, u = a.dispatch;
    return l !== t.memoizedState && (te.flags |= 2048, Su(
      9,
      { destroy: void 0 },
      ay.bind(null, a, l),
      null
    )), [n, u, e];
  }
  function ay(e, t) {
    e.action = t;
  }
  function kf(e) {
    var t = Ve(), l = Te;
    if (l !== null)
      return Xf(t, l, e);
    Ve(), t = t.memoizedState, l = Ve();
    var n = l.queue.dispatch;
    return l.memoizedState = e, [t, n, !1];
  }
  function Su(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = te.updateQueue, t === null && (t = vs(), te.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function Qf() {
    return Ve().memoizedState;
  }
  function Es(e, t, l, n) {
    var a = Mt();
    te.flags |= e, a.memoizedState = Su(
      1 | t,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function _s(e, t, l, n) {
    var a = Ve();
    n = n === void 0 ? null : n;
    var u = a.memoizedState.inst;
    Te !== null && n !== null && ar(n, Te.memoizedState.deps) ? a.memoizedState = Su(t, u, l, n) : (te.flags |= e, a.memoizedState = Su(
      1 | t,
      u,
      l,
      n
    ));
  }
  function Vf(e, t) {
    Es(8390656, 8, e, t);
  }
  function mr(e, t) {
    _s(2048, 8, e, t);
  }
  function uy(e) {
    te.flags |= 4;
    var t = te.updateQueue;
    if (t === null)
      t = vs(), te.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function Zf(e) {
    var t = Ve().memoizedState;
    return uy({ ref: t, nextImpl: e }), function() {
      if ((be & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Kf(e, t) {
    return _s(4, 2, e, t);
  }
  function Jf(e, t) {
    return _s(4, 4, e, t);
  }
  function Wf(e, t) {
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
  function Ff(e, t, l) {
    l = l != null ? l.concat([e]) : null, _s(4, 4, Wf.bind(null, t, e), l);
  }
  function yr() {
  }
  function $f(e, t) {
    var l = Ve();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && ar(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e);
  }
  function If(e, t) {
    var l = Ve();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && ar(t, n[1]))
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
  function gr(e, t, l) {
    return l === void 0 || (sn & 1073741824) !== 0 && (oe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = Pd(), te.lanes |= e, Fn |= e, l);
  }
  function Pf(e, t, l, n) {
    return It(l, t) ? l : pu.current !== null ? (e = gr(e, l, n), It(e, t) || (lt = !0), e) : (sn & 42) === 0 || (sn & 1073741824) !== 0 && (oe & 261930) === 0 ? (lt = !0, e.memoizedState = l) : (e = Pd(), te.lanes |= e, Fn |= e, t);
  }
  function ed(e, t, l, n, a) {
    var u = L.p;
    L.p = u !== 0 && 8 > u ? u : 8;
    var s = x.T, d = {};
    x.T = d, br(e, !1, t, l);
    try {
      var m = a(), _ = x.S;
      if (_ !== null && _(d, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var R = ey(
          m,
          n
        );
        fi(
          e,
          t,
          R,
          al(e)
        );
      } else
        fi(
          e,
          t,
          n,
          al(e)
        );
    } catch (C) {
      fi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: C },
        al()
      );
    } finally {
      L.p = u, s !== null && d.types !== null && (s.types = d.types), x.T = s;
    }
  }
  function iy() {
  }
  function pr(e, t, l, n) {
    if (e.tag !== 5) throw Error(r(476));
    var a = td(e).queue;
    ed(
      e,
      a,
      t,
      Z,
      l === null ? iy : function() {
        return ld(e), l(n);
      }
    );
  }
  function td(e) {
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
  function ld(e) {
    var t = td(e);
    t.next === null && (t = e.alternate.memoizedState), fi(
      e,
      t.next.queue,
      {},
      al()
    );
  }
  function vr() {
    return ht(Oi);
  }
  function nd() {
    return Ve().memoizedState;
  }
  function ad() {
    return Ve().memoizedState;
  }
  function sy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = al();
          e = Qn(l);
          var n = Vn(t, e, l);
          n !== null && (Gt(n, t, l), ii(n, t, l)), t = { cache: Kc() }, e.payload = t;
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
    }, As(e) ? id(t, l) : (l = Bc(e, t, l, n), l !== null && (Gt(l, e, n), sd(l, t, n)));
  }
  function ud(e, t, l) {
    var n = al();
    fi(e, t, l, n);
  }
  function fi(e, t, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (As(e)) id(t, a);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var s = t.lastRenderedState, d = u(s, l);
          if (a.hasEagerState = !0, a.eagerState = d, It(d, s))
            return ns(e, t, a, 0), Re === null && ls(), !1;
        } catch {
        }
      if (l = Bc(e, t, a, n), l !== null)
        return Gt(l, e, n), sd(l, t, n), !0;
    }
    return !1;
  }
  function br(e, t, l, n) {
    if (n = {
      lane: 2,
      revertLane: $r(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, As(e)) {
      if (t) throw Error(r(479));
    } else
      t = Bc(
        e,
        l,
        n,
        2
      ), t !== null && Gt(t, e, 2);
  }
  function As(e) {
    var t = e.alternate;
    return e === te || t !== null && t === te;
  }
  function id(e, t) {
    vu = gs = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function sd(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, Fl(e, l);
    }
  }
  var di = {
    readContext: ht,
    use: bs,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useLayoutEffect: Be,
    useInsertionEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useSyncExternalStore: Be,
    useId: Be,
    useHostTransitionStatus: Be,
    useFormState: Be,
    useActionState: Be,
    useOptimistic: Be,
    useMemoCache: Be,
    useCacheRefresh: Be
  };
  di.useEffectEvent = Be;
  var cd = {
    readContext: ht,
    use: bs,
    useCallback: function(e, t) {
      return Mt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ht,
    useEffect: Vf,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Es(
        4194308,
        4,
        Wf.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return Es(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Es(4, 2, e, t);
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
      e = dr(e);
      var t = e.queue, l = ud.bind(null, te, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: yr,
    useDeferredValue: function(e, t) {
      var l = Mt();
      return gr(l, e, t);
    },
    useTransition: function() {
      var e = dr(!1);
      return e = ed.bind(
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
      return a.queue = u, Vf(qf.bind(null, n, u, e), [
        e
      ]), n.flags |= 2048, Su(
        9,
        { destroy: void 0 },
        Cf.bind(
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
        l = (n & ~(1 << 32 - Fe(n) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = ps++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = ty++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: vr,
    useFormState: Yf,
    useActionState: Yf,
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
      return t.queue = l, t = br.bind(
        null,
        te,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: rr,
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
  }, Sr = {
    readContext: ht,
    use: bs,
    useCallback: $f,
    useContext: ht,
    useEffect: mr,
    useImperativeHandle: Ff,
    useInsertionEffect: Kf,
    useLayoutEffect: Jf,
    useMemo: If,
    useReducer: Ss,
    useRef: Qf,
    useState: function() {
      return Ss(cn);
    },
    useDebugValue: yr,
    useDeferredValue: function(e, t) {
      var l = Ve();
      return Pf(
        l,
        Te.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ss(cn)[0], t = Ve().memoizedState;
      return [
        typeof e == "boolean" ? e : oi(e),
        t
      ];
    },
    useSyncExternalStore: Of,
    useId: nd,
    useHostTransitionStatus: vr,
    useFormState: Gf,
    useActionState: Gf,
    useOptimistic: function(e, t) {
      var l = Ve();
      return Uf(l, Te, e, t);
    },
    useMemoCache: rr,
    useCacheRefresh: ad
  };
  Sr.useEffectEvent = Zf;
  var rd = {
    readContext: ht,
    use: bs,
    useCallback: $f,
    useContext: ht,
    useEffect: mr,
    useImperativeHandle: Ff,
    useInsertionEffect: Kf,
    useLayoutEffect: Jf,
    useMemo: If,
    useReducer: fr,
    useRef: Qf,
    useState: function() {
      return fr(cn);
    },
    useDebugValue: yr,
    useDeferredValue: function(e, t) {
      var l = Ve();
      return Te === null ? gr(l, e, t) : Pf(
        l,
        Te.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = fr(cn)[0], t = Ve().memoizedState;
      return [
        typeof e == "boolean" ? e : oi(e),
        t
      ];
    },
    useSyncExternalStore: Of,
    useId: nd,
    useHostTransitionStatus: vr,
    useFormState: kf,
    useActionState: kf,
    useOptimistic: function(e, t) {
      var l = Ve();
      return Te !== null ? Uf(l, Te, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: rr,
    useCacheRefresh: ad
  };
  rd.useEffectEvent = Zf;
  function Er(e, t, l, n) {
    t = e.memoizedState, l = l(n, t), l = l == null ? t : G({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var _r = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var n = al(), a = Qn(n);
      a.payload = t, l != null && (a.callback = l), t = Vn(e, a, n), t !== null && (Gt(t, e, n), ii(t, e, n));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var n = al(), a = Qn(n);
      a.tag = 1, a.payload = t, l != null && (a.callback = l), t = Vn(e, a, n), t !== null && (Gt(t, e, n), ii(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = al(), n = Qn(l);
      n.tag = 2, t != null && (n.callback = t), t = Vn(e, n, l), t !== null && (Gt(t, e, l), ii(t, e, l));
    }
  };
  function od(e, t, l, n, a, u, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, u, s) : t.prototype && t.prototype.isPureReactComponent ? !Iu(l, n) || !Iu(a, u) : !0;
  }
  function fd(e, t, l, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && _r.enqueueReplaceState(t, t.state, null);
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
  function dd(e) {
    ts(e);
  }
  function hd(e) {
    console.error(e);
  }
  function md(e) {
    ts(e);
  }
  function Ts(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function yd(e, t, l) {
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
  function Ar(e, t, l) {
    return l = Qn(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Ts(e, t);
    }, l;
  }
  function gd(e) {
    return e = Qn(e), e.tag = 3, e;
  }
  function pd(e, t, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = n.value;
      e.payload = function() {
        return a(u);
      }, e.callback = function() {
        yd(t, l, n);
      };
    }
    var s = l.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
      yd(t, l, n), typeof a != "function" && ($n === null ? $n = /* @__PURE__ */ new Set([this]) : $n.add(this));
      var d = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: d !== null ? d : ""
      });
    });
  }
  function ry(e, t, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (t = l.alternate, t !== null && du(
        t,
        l,
        a,
        !0
      ), l = el.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return El === null ? Bs() : l.alternate === null && we === 0 && (we = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === fs ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), Jr(e, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === fs ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Jr(e, n, a)), !1;
        }
        throw Error(r(435, l.tag));
      }
      return Jr(e, n, a), Bs(), !1;
    }
    if (de)
      return t = el.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== Xc && (e = Error(r(422), { cause: n }), ti(pl(e, l)))) : (n !== Xc && (t = Error(r(423), {
        cause: n
      }), ti(
        pl(t, l)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = pl(n, l), a = Ar(
        e.stateNode,
        n,
        a
      ), Pc(e, a), we !== 4 && (we = 2)), !1;
    var u = Error(r(520), { cause: n });
    if (u = pl(u, l), Si === null ? Si = [u] : Si.push(u), we !== 4 && (we = 2), t === null) return !0;
    n = pl(n, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = a & -a, l.lanes |= e, e = Ar(l.stateNode, n, e), Pc(l, e), !1;
        case 1:
          if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && ($n === null || !$n.has(u))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = gd(a), pd(
              a,
              e,
              l,
              n
            ), Pc(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Tr = Error(r(461)), lt = !1;
  function mt(e, t, l, n) {
    t.child = e === null ? Ef(t, null, l, n) : ja(
      t,
      e.child,
      l,
      n
    );
  }
  function vd(e, t, l, n, a) {
    l = l.render;
    var u = t.ref;
    if ("ref" in n) {
      var s = {};
      for (var d in n)
        d !== "ref" && (s[d] = n[d]);
    } else s = n;
    return qa(t), n = ur(
      e,
      t,
      l,
      s,
      u,
      a
    ), d = ir(), e !== null && !lt ? (sr(e, t, a), rn(e, t, a)) : (de && d && Yc(t), t.flags |= 1, mt(e, t, n, a), t.child);
  }
  function bd(e, t, l, n, a) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" && !wc(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, Sd(
        e,
        t,
        u,
        n,
        a
      )) : (e = us(
        l.type,
        null,
        n,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !zr(e, a)) {
      var s = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Iu, l(s, n) && e.ref === t.ref)
        return rn(e, t, a);
    }
    return t.flags |= 1, e = ln(u, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Sd(e, t, l, n, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Iu(u, n) && e.ref === t.ref)
        if (lt = !1, t.pendingProps = n = u, zr(e, a))
          (e.flags & 131072) !== 0 && (lt = !0);
        else
          return t.lanes = e.lanes, rn(e, t, a);
    }
    return Nr(
      e,
      t,
      l,
      n,
      a
    );
  }
  function Ed(e, t, l, n) {
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
        return _d(
          e,
          t,
          u,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && rs(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Tf(t, u) : tr(), Nf(t);
      else
        return n = t.lanes = 536870912, _d(
          e,
          t,
          u !== null ? u.baseLanes | l : l,
          l,
          n
        );
    } else
      u !== null ? (rs(t, u.cachePool), Tf(t, u), Kn(), t.memoizedState = null) : (e !== null && rs(t, null), tr(), Kn());
    return mt(e, t, a, l), t.child;
  }
  function hi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function _d(e, t, l, n, a) {
    var u = Wc();
    return u = u === null ? null : { parent: et._currentValue, pool: u }, t.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, e !== null && rs(t, null), tr(), Nf(t), e !== null && du(e, t, n, !0), t.childLanes = a, null;
  }
  function Ns(e, t) {
    return t = Rs(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ad(e, t, l) {
    return ja(t, e.child, null, l), e = Ns(t, t.pendingProps), e.flags |= 2, tl(t), t.memoizedState = null, e;
  }
  function oy(e, t, l) {
    var n = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (de) {
        if (n.mode === "hidden")
          return e = Ns(t, n), t.lanes = 536870912, hi(null, e);
        if (nr(t), (e = Oe) ? (e = jh(
          e,
          Sl
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Hn !== null ? { id: Xl, overflow: kl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = uf(e), l.return = t, t.child = l, dt = t, Oe = null)) : e = null, e === null) throw Gn(t);
        return t.lanes = 536870912, null;
      }
      return Ns(t, n);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var s = u.dehydrated;
      if (nr(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = Ad(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (lt || du(e, t, l, !1), a = (l & e.childLanes) !== 0, lt || a) {
        if (n = Re, n !== null && (s = ga(n, l), s !== 0 && s !== u.retryLane))
          throw u.retryLane = s, Ra(e, s), Gt(n, e, s), Tr;
        Bs(), t = Ad(
          e,
          t,
          l
        );
      } else
        e = u.treeContext, Oe = _l(s.nextSibling), dt = t, de = !0, Yn = null, Sl = !1, e !== null && rf(t, e), t = Ns(t, n), t.flags |= 4096;
      return t;
    }
    return e = ln(e.child, {
      mode: n.mode,
      children: n.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function xs(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(r(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Nr(e, t, l, n, a) {
    return qa(t), l = ur(
      e,
      t,
      l,
      n,
      void 0,
      a
    ), n = ir(), e !== null && !lt ? (sr(e, t, a), rn(e, t, a)) : (de && n && Yc(t), t.flags |= 1, mt(e, t, l, a), t.child);
  }
  function Td(e, t, l, n, a, u) {
    return qa(t), t.updateQueue = null, l = Rf(
      t,
      n,
      l,
      a
    ), xf(e), n = ir(), e !== null && !lt ? (sr(e, t, u), rn(e, t, u)) : (de && n && Yc(t), t.flags |= 1, mt(e, t, l, u), t.child);
  }
  function Nd(e, t, l, n, a) {
    if (qa(t), t.stateNode === null) {
      var u = cu, s = l.contextType;
      typeof s == "object" && s !== null && (u = ht(s)), u = new l(n, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = _r, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = n, u.state = t.memoizedState, u.refs = {}, $c(t), s = l.contextType, u.context = typeof s == "object" && s !== null ? ht(s) : cu, u.state = t.memoizedState, s = l.getDerivedStateFromProps, typeof s == "function" && (Er(
        t,
        l,
        s,
        n
      ), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (s = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), s !== u.state && _r.enqueueReplaceState(u, u.state, null), ci(t, n, u, a), si(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      u = t.stateNode;
      var d = t.memoizedProps, m = wa(l, d);
      u.props = m;
      var _ = u.context, R = l.contextType;
      s = cu, typeof R == "object" && R !== null && (s = ht(R));
      var C = l.getDerivedStateFromProps;
      R = typeof C == "function" || typeof u.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, R || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d || _ !== s) && fd(
        t,
        u,
        n,
        s
      ), kn = !1;
      var A = t.memoizedState;
      u.state = A, ci(t, n, u, a), si(), _ = t.memoizedState, d || A !== _ || kn ? (typeof C == "function" && (Er(
        t,
        l,
        C,
        n
      ), _ = t.memoizedState), (m = kn || od(
        t,
        l,
        m,
        n,
        A,
        _,
        s
      )) ? (R || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = _), u.props = n, u.state = _, u.context = s, n = m) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      u = t.stateNode, Ic(e, t), s = t.memoizedProps, R = wa(l, s), u.props = R, C = t.pendingProps, A = u.context, _ = l.contextType, m = cu, typeof _ == "object" && _ !== null && (m = ht(_)), d = l.getDerivedStateFromProps, (_ = typeof d == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s !== C || A !== m) && fd(
        t,
        u,
        n,
        m
      ), kn = !1, A = t.memoizedState, u.state = A, ci(t, n, u, a), si();
      var T = t.memoizedState;
      s !== C || A !== T || kn || e !== null && e.dependencies !== null && ss(e.dependencies) ? (typeof d == "function" && (Er(
        t,
        l,
        d,
        n
      ), T = t.memoizedState), (R = kn || od(
        t,
        l,
        R,
        n,
        A,
        T,
        m
      ) || e !== null && e.dependencies !== null && ss(e.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(n, T, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        n,
        T,
        m
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = T), u.props = n, u.state = T, u.context = m, n = R) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return u = n, xs(e, t), n = (t.flags & 128) !== 0, u || n ? (u = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && n ? (t.child = ja(
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
  function xd(e, t, l, n) {
    return Ma(), t.flags |= 256, mt(e, t, l, n), t.child;
  }
  var xr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Rr(e) {
    return { baseLanes: e, cachePool: yf() };
  }
  function Or(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= nl), e;
  }
  function Rd(e, t, l) {
    var n = t.pendingProps, a = !1, u = (t.flags & 128) !== 0, s;
    if ((s = u) || (s = e !== null && e.memoizedState === null ? !1 : (Qe.current & 2) !== 0), s && (a = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (de) {
        if (a ? Zn(t) : Kn(), (e = Oe) ? (e = jh(
          e,
          Sl
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Hn !== null ? { id: Xl, overflow: kl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = uf(e), l.return = t, t.child = l, dt = t, Oe = null)) : e = null, e === null) throw Gn(t);
        return oo(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var d = n.children;
      return n = n.fallback, a ? (Kn(), a = t.mode, d = Rs(
        { mode: "hidden", children: d },
        a
      ), n = Oa(
        n,
        a,
        l,
        null
      ), d.return = t, n.return = t, d.sibling = n, t.child = d, n = t.child, n.memoizedState = Rr(l), n.childLanes = Or(
        e,
        s,
        l
      ), t.memoizedState = xr, hi(null, n)) : (Zn(t), Mr(t, d));
    }
    var m = e.memoizedState;
    if (m !== null && (d = m.dehydrated, d !== null)) {
      if (u)
        t.flags & 256 ? (Zn(t), t.flags &= -257, t = Cr(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Kn(), t.child = e.child, t.flags |= 128, t = null) : (Kn(), d = n.fallback, a = t.mode, n = Rs(
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
        ), n = t.child, n.memoizedState = Rr(l), n.childLanes = Or(
          e,
          s,
          l
        ), t.memoizedState = xr, t = hi(null, n));
      else if (Zn(t), oo(d)) {
        if (s = d.nextSibling && d.nextSibling.dataset, s) var _ = s.dgst;
        s = _, n = Error(r(419)), n.stack = "", n.digest = s, ti({ value: n, source: null, stack: null }), t = Cr(
          e,
          t,
          l
        );
      } else if (lt || du(e, t, l, !1), s = (l & e.childLanes) !== 0, lt || s) {
        if (s = Re, s !== null && (n = ga(s, l), n !== 0 && n !== m.retryLane))
          throw m.retryLane = n, Ra(e, n), Gt(s, e, n), Tr;
        ro(d) || Bs(), t = Cr(
          e,
          t,
          l
        );
      } else
        ro(d) ? (t.flags |= 192, t.child = e.child, t = null) : (e = m.treeContext, Oe = _l(
          d.nextSibling
        ), dt = t, de = !0, Yn = null, Sl = !1, e !== null && rf(t, e), t = Mr(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (Kn(), d = n.fallback, a = t.mode, m = e.child, _ = m.sibling, n = ln(m, {
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
    ), d.flags |= 2), d.return = t, n.return = t, n.sibling = d, t.child = n, hi(null, n), n = t.child, d = e.child.memoizedState, d === null ? d = Rr(l) : (a = d.cachePool, a !== null ? (m = et._currentValue, a = a.parent !== m ? { parent: m, pool: m } : a) : a = yf(), d = {
      baseLanes: d.baseLanes | l,
      cachePool: a
    }), n.memoizedState = d, n.childLanes = Or(
      e,
      s,
      l
    ), t.memoizedState = xr, hi(e.child, n)) : (Zn(t), l = e.child, e = l.sibling, l = ln(l, {
      mode: "visible",
      children: n.children
    }), l.return = t, l.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function Mr(e, t) {
    return t = Rs(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Rs(e, t) {
    return e = Pt(22, e, null, t), e.lanes = 0, e;
  }
  function Cr(e, t, l) {
    return ja(t, e.child, null, l), e = Mr(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Od(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Vc(e.return, t, l);
  }
  function qr(e, t, l, n, a, u) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: l,
      tailMode: a,
      treeForkCount: u
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = n, s.tail = l, s.tailMode = a, s.treeForkCount = u);
  }
  function Md(e, t, l) {
    var n = t.pendingProps, a = n.revealOrder, u = n.tail;
    n = n.children;
    var s = Qe.current, d = (s & 2) !== 0;
    if (d ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, H(Qe, s), mt(e, t, n, l), n = de ? ei : 0, !d && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Od(e, l, t);
        else if (e.tag === 19)
          Od(e, l, t);
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
          e = l.alternate, e !== null && ys(e) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), qr(
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
          if (e = a.alternate, e !== null && ys(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = l, l = a, a = e;
        }
        qr(
          t,
          !0,
          l,
          null,
          u,
          n
        );
        break;
      case "together":
        qr(
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
    if (e !== null && (t.dependencies = e.dependencies), Fn |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (du(
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
  function zr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ss(e)));
  }
  function fy(e, t, l) {
    switch (t.tag) {
      case 3:
        rt(t, t.stateNode.containerInfo), Xn(t, et, e.memoizedState.cache), Ma();
        break;
      case 27:
      case 5:
        ra(t);
        break;
      case 4:
        rt(t, t.stateNode.containerInfo);
        break;
      case 10:
        Xn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, nr(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Zn(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Rd(e, t, l) : (Zn(t), e = rn(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Zn(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (n = (l & t.childLanes) !== 0, n || (du(
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
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), H(Qe, Qe.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, Ed(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        Xn(t, et, e.memoizedState.cache);
    }
    return rn(e, t, l);
  }
  function Cd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        lt = !0;
      else {
        if (!zr(e, l) && (t.flags & 128) === 0)
          return lt = !1, fy(
            e,
            t,
            l
          );
        lt = (e.flags & 131072) !== 0;
      }
    else
      lt = !1, de && (t.flags & 1048576) !== 0 && cf(t, ei, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = Da(t.elementType), t.type = e, typeof e == "function")
            wc(e) ? (n = wa(e, n), t.tag = 1, t = Nd(
              null,
              t,
              e,
              n,
              l
            )) : (t.tag = 0, t = Nr(
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
                t.tag = 11, t = vd(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              } else if (a === le) {
                t.tag = 14, t = bd(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              }
            }
            throw t = qt(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return Nr(
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
        ), Nd(
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
          a = u.element, Ic(e, t), ci(t, n, null, l);
          var s = t.memoizedState;
          if (n = s.cache, Xn(t, et, n), n !== u.cache && Zc(
            t,
            [et],
            l,
            !0
          ), si(), n = s.element, u.isDehydrated)
            if (u = {
              element: n,
              isDehydrated: !1,
              cache: s.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = xd(
                e,
                t,
                n,
                l
              );
              break e;
            } else if (n !== a) {
              a = pl(
                Error(r(424)),
                t
              ), ti(a), t = xd(
                e,
                t,
                n,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Oe = _l(e.firstChild), dt = t, de = !0, Yn = null, Sl = !0, l = Ef(
                t,
                null,
                n,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ma(), n === a) {
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
        return xs(e, t), e === null ? (l = Gh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : de || (l = t.type, e = t.pendingProps, n = ks(
          K.current
        ).createElement(l), n[He] = t, n[$e] = e, yt(n, l, e), Ae(n), t.stateNode = n) : t.memoizedState = Gh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ra(t), e === null && de && (n = t.stateNode = Lh(
          t.type,
          t.pendingProps,
          K.current
        ), dt = t, Sl = !0, a = Oe, ta(t.type) ? (fo = a, Oe = _l(n.firstChild)) : Oe = a), mt(
          e,
          t,
          t.pendingProps.children,
          l
        ), xs(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && de && ((a = n = Oe) && (n = Gy(
          n,
          t.type,
          t.pendingProps,
          Sl
        ), n !== null ? (t.stateNode = n, dt = t, Oe = _l(n.firstChild), Sl = !1, a = !0) : a = !1), a || Gn(t)), ra(t), a = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, n = u.children, io(a, u) ? n = null : s !== null && io(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = ur(
          e,
          t,
          ly,
          null,
          null,
          l
        ), Oi._currentValue = a), xs(e, t), mt(e, t, n, l), t.child;
      case 6:
        return e === null && de && ((e = l = Oe) && (l = Xy(
          l,
          t.pendingProps,
          Sl
        ), l !== null ? (t.stateNode = l, dt = t, Oe = null, e = !0) : e = !1), e || Gn(t)), null;
      case 13:
        return Rd(e, t, l);
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
        return vd(
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
        return n = t.pendingProps, Xn(t, t.type, n.value), mt(e, t, n.children, l), t.child;
      case 9:
        return a = t.type._context, n = t.pendingProps.children, qa(t), a = ht(a), n = n(a), t.flags |= 1, mt(e, t, n, l), t.child;
      case 14:
        return bd(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return Sd(
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
        return Ed(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return qa(t), n = ht(et), e === null ? (a = Wc(), a === null && (a = Re, u = Kc(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= l), a = u), t.memoizedState = { parent: n, cache: a }, $c(t), Xn(t, et, a)) : ((e.lanes & l) !== 0 && (Ic(e, t), ci(t, null, null, l), si()), a = e.memoizedState, u = t.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), Xn(t, et, n)) : (n = u.cache, Xn(t, et, n), n !== a.cache && Zc(
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
  function Dr(e, t, l, n, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (nh()) e.flags |= 8192;
        else
          throw Ua = fs, Fc;
    } else e.flags &= -16777217;
  }
  function qd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Zh(t))
      if (nh()) e.flags |= 8192;
      else
        throw Ua = fs, Fc;
  }
  function Os(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? se() : 536870912, e.lanes |= t, Tu |= t);
  }
  function mi(e, t) {
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
  function Me(e) {
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
    switch (Gc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Me(t), null;
      case 1:
        return Me(t), null;
      case 3:
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), un(et), W(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (fu(t) ? on(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, kc())), Me(t), null;
      case 26:
        var a = t.type, u = t.memoizedState;
        return e === null ? (on(t), u !== null ? (Me(t), qd(t, u)) : (Me(t), Dr(
          t,
          a,
          null,
          n,
          l
        ))) : u ? u !== e.memoizedState ? (on(t), Me(t), qd(t, u)) : (Me(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && on(t), Me(t), Dr(
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
            return Me(t), null;
          }
          e = D.current, fu(t) ? of(t) : (e = Lh(a, n, l), t.stateNode = e, on(t));
        }
        return Me(t), null;
      case 5:
        if (bn(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && on(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Me(t), null;
          }
          if (u = D.current, fu(t))
            of(t);
          else {
            var s = ks(
              K.current
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
                    u = typeof n.is == "string" ? s.createElement("select", {
                      is: n.is
                    }) : s.createElement("select"), n.multiple ? u.multiple = !0 : n.size && (u.size = n.size);
                    break;
                  default:
                    u = typeof n.is == "string" ? s.createElement(a, { is: n.is }) : s.createElement(a);
                }
            }
            u[He] = t, u[$e] = n;
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
        return Me(t), Dr(
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
          if (e = K.current, fu(t)) {
            if (e = t.stateNode, l = t.memoizedProps, n = null, a = dt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            e[He] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Rh(e.nodeValue, l)), e || Gn(t, !0);
          } else
            e = ks(e).createTextNode(
              n
            ), e[He] = t, t.stateNode = e;
        }
        return Me(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (n = fu(t), l !== null) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[He] = t;
            } else
              Ma(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Me(t), e = !1;
          } else
            l = kc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (tl(t), t) : (tl(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Me(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = fu(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[He] = t;
            } else
              Ma(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Me(t), a = !1;
          } else
            a = kc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (tl(t), t) : (tl(t), null);
        }
        return tl(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = n !== null, e = e !== null && e.memoizedState !== null, l && (n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== a && (n.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Os(t, t.updateQueue), Me(t), null);
      case 4:
        return W(), e === null && to(t.stateNode.containerInfo), Me(t), null;
      case 10:
        return un(t.type), Me(t), null;
      case 19:
        if (N(Qe), n = t.memoizedState, n === null) return Me(t), null;
        if (a = (t.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) mi(n, !1);
          else {
            if (we !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = ys(e), u !== null) {
                  for (t.flags |= 128, mi(n, !1), e = u.updateQueue, t.updateQueue = e, Os(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    af(l, e), l = l.sibling;
                  return H(
                    Qe,
                    Qe.current & 1 | 2
                  ), de && nn(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && vt() > Ds && (t.flags |= 128, a = !0, mi(n, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = ys(u), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Os(t, e), mi(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !de)
                return Me(t), null;
            } else
              2 * vt() - n.renderingStartTime > Ds && l !== 536870912 && (t.flags |= 128, a = !0, mi(n, !1), t.lanes = 4194304);
          n.isBackwards ? (u.sibling = t.child, t.child = u) : (e = n.last, e !== null ? e.sibling = u : t.child = u, n.last = u);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = vt(), e.sibling = null, l = Qe.current, H(
          Qe,
          a ? l & 1 | 2 : l & 1
        ), de && nn(t, n.treeForkCount), e) : (Me(t), null);
      case 22:
      case 23:
        return tl(t), lr(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t), l = t.updateQueue, l !== null && Os(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && N(za), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), un(et), Me(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function hy(e, t) {
    switch (Gc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return un(et), W(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return bn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (tl(t), t.alternate === null)
            throw Error(r(340));
          Ma();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (tl(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          Ma();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return N(Qe), null;
      case 4:
        return W(), null;
      case 10:
        return un(t.type), null;
      case 22:
      case 23:
        return tl(t), lr(), e !== null && N(za), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return un(et), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function zd(e, t) {
    switch (Gc(t), t.tag) {
      case 3:
        un(et), W();
        break;
      case 26:
      case 27:
      case 5:
        bn(t);
        break;
      case 4:
        W();
        break;
      case 31:
        t.memoizedState !== null && tl(t);
        break;
      case 13:
        tl(t);
        break;
      case 19:
        N(Qe);
        break;
      case 10:
        un(t.type);
        break;
      case 22:
      case 23:
        tl(t), lr(), e !== null && N(za);
        break;
      case 24:
        un(et);
    }
  }
  function yi(e, t) {
    try {
      var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        l = a;
        do {
          if ((l.tag & e) === e) {
            n = void 0;
            var u = l.create, s = l.inst;
            n = u(), s.destroy = n;
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (d) {
      _e(t, t.return, d);
    }
  }
  function Jn(e, t, l) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        n = u;
        do {
          if ((n.tag & e) === e) {
            var s = n.inst, d = s.destroy;
            if (d !== void 0) {
              s.destroy = void 0, a = t;
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
  function Dd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Af(t, l);
      } catch (n) {
        _e(e, e.return, n);
      }
    }
  }
  function Ud(e, t, l) {
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
  function gi(e, t) {
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
  function jd(e) {
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
  function Ur(e, t, l) {
    try {
      var n = e.stateNode;
      jy(n, e.type, l, t), n[$e] = t;
    } catch (a) {
      _e(e, e.return, a);
    }
  }
  function Bd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ta(e.type) || e.tag === 4;
  }
  function jr(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Bd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ta(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Br(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Ge));
    else if (n !== 4 && (n === 27 && ta(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (Br(e, t, l), e = e.sibling; e !== null; )
        Br(e, t, l), e = e.sibling;
  }
  function Ms(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && (n === 27 && ta(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Ms(e, t, l), e = e.sibling; e !== null; )
        Ms(e, t, l), e = e.sibling;
  }
  function wd(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var n = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      yt(t, n, l), t[He] = e, t[$e] = l;
    } catch (u) {
      _e(e, e.return, u);
    }
  }
  var fn = !1, nt = !1, wr = !1, Ld = typeof WeakSet == "function" ? WeakSet : Set, ot = null;
  function my(e, t) {
    if (e = e.containerInfo, ao = Fs, e = Wo(e), Cc(e)) {
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
            var s = 0, d = -1, m = -1, _ = 0, R = 0, C = e, A = null;
            t: for (; ; ) {
              for (var T; C !== l || a !== 0 && C.nodeType !== 3 || (d = s + a), C !== u || n !== 0 && C.nodeType !== 3 || (m = s + n), C.nodeType === 3 && (s += C.nodeValue.length), (T = C.firstChild) !== null; )
                A = C, C = T;
              for (; ; ) {
                if (C === e) break t;
                if (A === l && ++_ === a && (d = s), A === u && ++R === n && (m = s), (T = C.nextSibling) !== null) break;
                C = A, A = C.parentNode;
              }
              C = T;
            }
            l = d === -1 || m === -1 ? null : { start: d, end: m };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (uo = { focusedElem: e, selectionRange: l }, Fs = !1, ot = t; ot !== null; )
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
                  co(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      co(e);
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
  function Hd(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        hn(e, l), n & 4 && yi(5, l);
        break;
      case 1:
        if (hn(e, l), n & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (s) {
              _e(l, l.return, s);
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
            } catch (s) {
              _e(
                l,
                l.return,
                s
              );
            }
          }
        n & 64 && Dd(l), n & 512 && gi(l, l.return);
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
            Af(e, t);
          } catch (s) {
            _e(l, l.return, s);
          }
        }
        break;
      case 27:
        t === null && n & 4 && wd(l);
      case 26:
      case 5:
        hn(e, l), t === null && n & 4 && jd(l), n & 512 && gi(l, l.return);
        break;
      case 12:
        hn(e, l);
        break;
      case 31:
        hn(e, l), n & 4 && Xd(e, l);
        break;
      case 13:
        hn(e, l), n & 4 && kd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Ay.bind(
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
  function Yd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Yd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && va(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var ze = null, wt = !1;
  function dn(e, t, l) {
    for (l = l.child; l !== null; )
      Gd(e, t, l), l = l.sibling;
  }
  function Gd(e, t, l) {
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
        var n = ze, a = wt;
        ta(l.type) && (ze = l.stateNode, wt = !1), dn(
          e,
          t,
          l
        ), Ni(l.stateNode), ze = n, wt = a;
        break;
      case 5:
        nt || Ql(l, t);
      case 6:
        if (n = ze, a = wt, ze = null, dn(
          e,
          t,
          l
        ), ze = n, wt = a, ze !== null)
          if (wt)
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
        ze !== null && (wt ? (e = ze, Dh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), zu(e)) : Dh(ze, l.stateNode));
        break;
      case 4:
        n = ze, a = wt, ze = l.stateNode.containerInfo, wt = !0, dn(
          e,
          t,
          l
        ), ze = n, wt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Jn(2, l, t), nt || Jn(4, l, t), dn(
          e,
          t,
          l
        );
        break;
      case 1:
        nt || (Ql(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && Ud(
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
  function Xd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        zu(e);
      } catch (l) {
        _e(t, t.return, l);
      }
    }
  }
  function kd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        zu(e);
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
        return t === null && (t = e.stateNode = new Ld()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Ld()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Cs(e, t) {
    var l = yy(e);
    t.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = Ty.bind(null, e, n);
        n.then(a, a);
      }
    });
  }
  function Lt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], u = e, s = t, d = s;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (ta(d.type)) {
                ze = d.stateNode, wt = !1;
                break e;
              }
              break;
            case 5:
              ze = d.stateNode, wt = !1;
              break e;
            case 3:
            case 4:
              ze = d.stateNode.containerInfo, wt = !0;
              break e;
          }
          d = d.return;
        }
        if (ze === null) throw Error(r(160));
        Gd(u, s, a), ze = null, wt = !1, u = a.alternate, u !== null && (u.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Qd(t, e), t = t.sibling;
  }
  var Dl = null;
  function Qd(e, t) {
    var l = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Lt(t, e), Ht(e), n & 4 && (Jn(3, e, e.return), yi(3, e), Jn(5, e, e.return));
        break;
      case 1:
        Lt(t, e), Ht(e), n & 512 && (nt || l === null || Ql(l, l.return)), n & 64 && fn && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = Dl;
        if (Lt(t, e), Ht(e), n & 512 && (nt || l === null || Ql(l, l.return)), n & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (n = e.memoizedState, l === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (n) {
                    case "title":
                      u = a.getElementsByTagName("title")[0], (!u || u[Vt] || u[He] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(n), a.head.insertBefore(
                        u,
                        a.querySelector("head > title")
                      )), yt(u, n, l), u[He] = e, Ae(u), n = u;
                      break e;
                    case "link":
                      var s = Qh(
                        "link",
                        "href",
                        a
                      ).get(n + (l.href || ""));
                      if (s) {
                        for (var d = 0; d < s.length; d++)
                          if (u = s[d], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            s.splice(d, 1);
                            break t;
                          }
                      }
                      u = a.createElement(n), yt(u, n, l), a.head.appendChild(u);
                      break;
                    case "meta":
                      if (s = Qh(
                        "meta",
                        "content",
                        a
                      ).get(n + (l.content || ""))) {
                        for (d = 0; d < s.length; d++)
                          if (u = s[d], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            s.splice(d, 1);
                            break t;
                          }
                      }
                      u = a.createElement(n), yt(u, n, l), a.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, n));
                  }
                  u[He] = e, Ae(u), n = u;
                }
                e.stateNode = n;
              } else
                Vh(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = kh(
                a,
                n,
                e.memoizedProps
              );
          else
            u !== n ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, n === null ? Vh(
              a,
              e.type,
              e.stateNode
            ) : kh(
              a,
              n,
              e.memoizedProps
            )) : n === null && e.stateNode !== null && Ur(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        Lt(t, e), Ht(e), n & 512 && (nt || l === null || Ql(l, l.return)), l !== null && n & 4 && Ur(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (Lt(t, e), Ht(e), n & 512 && (nt || l === null || Ql(l, l.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            qn(a, "");
          } catch (Y) {
            _e(e, e.return, Y);
          }
        }
        n & 4 && e.stateNode != null && (a = e.memoizedProps, Ur(
          e,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (wr = !0);
        break;
      case 6:
        if (Lt(t, e), Ht(e), n & 4) {
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
        if (Zs = null, a = Dl, Dl = Qs(t.containerInfo), Lt(t, e), Dl = a, Ht(e), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            zu(t.containerInfo);
          } catch (Y) {
            _e(e, e.return, Y);
          }
        wr && (wr = !1, Vd(e));
        break;
      case 4:
        n = Dl, Dl = Qs(
          e.stateNode.containerInfo
        ), Lt(t, e), Ht(e), Dl = n;
        break;
      case 12:
        Lt(t, e), Ht(e);
        break;
      case 31:
        Lt(t, e), Ht(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Cs(e, n)));
        break;
      case 13:
        Lt(t, e), Ht(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (zs = vt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Cs(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var m = l !== null && l.memoizedState !== null, _ = fn, R = nt;
        if (fn = _ || a, nt = R || m, Lt(t, e), nt = R, fn = _, Ht(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || m || fn || nt || La(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                m = l = t;
                try {
                  if (u = m.stateNode, a)
                    s = u.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    d = m.stateNode;
                    var C = m.memoizedProps.style, A = C != null && C.hasOwnProperty("display") ? C.display : null;
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
                  a ? Uh(T, !0) : Uh(m.stateNode, !1);
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
        n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, Cs(e, l))));
        break;
      case 19:
        Lt(t, e), Ht(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Cs(e, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Lt(t, e), Ht(e);
    }
  }
  function Ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, n = e.return; n !== null; ) {
          if (Bd(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, u = jr(e);
            Ms(e, u, a);
            break;
          case 5:
            var s = l.stateNode;
            l.flags & 32 && (qn(s, ""), l.flags &= -33);
            var d = jr(e);
            Ms(e, d, s);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo, _ = jr(e);
            Br(
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
  function Vd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Vd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function hn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Hd(e, t.alternate, t), t = t.sibling;
  }
  function La(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Jn(4, t, t.return), La(t);
          break;
        case 1:
          Ql(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Ud(
            t,
            t.return,
            l
          ), La(t);
          break;
        case 27:
          Ni(t.stateNode);
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
      var n = t.alternate, a = e, u = t, s = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          mn(
            a,
            u,
            l
          ), yi(4, u);
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
                  _f(m[a], d);
            } catch (_) {
              _e(n, n.return, _);
            }
          }
          l && s & 64 && Dd(u), gi(u, u.return);
          break;
        case 27:
          wd(u);
        case 26:
        case 5:
          mn(
            a,
            u,
            l
          ), l && n === null && s & 4 && jd(u), gi(u, u.return);
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
          ), l && s & 4 && Xd(a, u);
          break;
        case 13:
          mn(
            a,
            u,
            l
          ), l && s & 4 && kd(a, u);
          break;
        case 22:
          u.memoizedState === null && mn(
            a,
            u,
            l
          ), gi(u, u.return);
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
  function Lr(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && li(l));
  }
  function Hr(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && li(e));
  }
  function Ul(e, t, l, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Zd(
          e,
          t,
          l,
          n
        ), t = t.sibling;
  }
  function Zd(e, t, l, n) {
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
        ), a & 2048 && yi(9, t);
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
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && li(e)));
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
            var u = t.memoizedProps, s = u.id, d = u.onPostCommit;
            typeof d == "function" && d(
              s,
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
        u = t.stateNode, s = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Ul(
          e,
          t,
          l,
          n
        ) : pi(e, t) : u._visibility & 2 ? Ul(
          e,
          t,
          l,
          n
        ) : (u._visibility |= 2, Eu(
          e,
          t,
          l,
          n,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && Lr(s, t);
        break;
      case 24:
        Ul(
          e,
          t,
          l,
          n
        ), a & 2048 && Hr(t.alternate, t);
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
  function Eu(e, t, l, n, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, s = t, d = l, m = n, _ = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Eu(
            u,
            s,
            d,
            m,
            a
          ), yi(8, s);
          break;
        case 23:
          break;
        case 22:
          var R = s.stateNode;
          s.memoizedState !== null ? R._visibility & 2 ? Eu(
            u,
            s,
            d,
            m,
            a
          ) : pi(
            u,
            s
          ) : (R._visibility |= 2, Eu(
            u,
            s,
            d,
            m,
            a
          )), a && _ & 2048 && Lr(
            s.alternate,
            s
          );
          break;
        case 24:
          Eu(
            u,
            s,
            d,
            m,
            a
          ), a && _ & 2048 && Hr(s.alternate, s);
          break;
        default:
          Eu(
            u,
            s,
            d,
            m,
            a
          );
      }
      t = t.sibling;
    }
  }
  function pi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, n = t, a = n.flags;
        switch (n.tag) {
          case 22:
            pi(l, n), a & 2048 && Lr(
              n.alternate,
              n
            );
            break;
          case 24:
            pi(l, n), a & 2048 && Hr(n.alternate, n);
            break;
          default:
            pi(l, n);
        }
        t = t.sibling;
      }
  }
  var vi = 8192;
  function _u(e, t, l) {
    if (e.subtreeFlags & vi)
      for (e = e.child; e !== null; )
        Kd(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function Kd(e, t, l) {
    switch (e.tag) {
      case 26:
        _u(
          e,
          t,
          l
        ), e.flags & vi && e.memoizedState !== null && tg(
          l,
          Dl,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        _u(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var n = Dl;
        Dl = Qs(e.stateNode.containerInfo), _u(
          e,
          t,
          l
        ), Dl = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = vi, vi = 16777216, _u(
          e,
          t,
          l
        ), vi = n) : _u(
          e,
          t,
          l
        ));
        break;
      default:
        _u(
          e,
          t,
          l
        );
    }
  }
  function Jd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function bi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          ot = n, Fd(
            n,
            e
          );
        }
      Jd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Wd(e), e = e.sibling;
  }
  function Wd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        bi(e), e.flags & 2048 && Jn(9, e, e.return);
        break;
      case 3:
        bi(e);
        break;
      case 12:
        bi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, qs(e)) : bi(e);
        break;
      default:
        bi(e);
    }
  }
  function qs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          ot = n, Fd(
            n,
            e
          );
        }
      Jd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Jn(8, t, t.return), qs(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, qs(t));
          break;
        default:
          qs(t);
      }
      e = e.sibling;
    }
  }
  function Fd(e, t) {
    for (; ot !== null; ) {
      var l = ot;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Jn(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          li(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, ot = n;
      else
        e: for (l = e; ot !== null; ) {
          n = ot;
          var a = n.sibling, u = n.return;
          if (Yd(n), n === l) {
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
  }, py = typeof WeakMap == "function" ? WeakMap : Map, be = 0, Re = null, ce = null, oe = 0, Ee = 0, ll = null, Wn = !1, Au = !1, Yr = !1, yn = 0, we = 0, Fn = 0, Ha = 0, Gr = 0, nl = 0, Tu = 0, Si = null, Yt = null, Xr = !1, zs = 0, $d = 0, Ds = 1 / 0, Us = null, $n = null, ut = 0, In = null, Nu = null, gn = 0, kr = 0, Qr = null, Id = null, Ei = 0, Vr = null;
  function al() {
    return (be & 2) !== 0 && oe !== 0 ? oe & -oe : x.T !== null ? $r() : pa();
  }
  function Pd() {
    if (nl === 0)
      if ((oe & 536870912) === 0 || de) {
        var e = P;
        P <<= 1, (P & 3932160) === 0 && (P = 262144), nl = e;
      } else nl = 536870912;
    return e = el.current, e !== null && (e.flags |= 32), nl;
  }
  function Gt(e, t, l) {
    (e === Re && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null) && (xu(e, 0), Pn(
      e,
      oe,
      nl,
      !1
    )), ya(e, l), ((be & 2) === 0 || e !== Re) && (e === Re && ((be & 2) === 0 && (Ha |= l), we === 4 && Pn(
      e,
      oe,
      nl,
      !1
    )), Vl(e));
  }
  function eh(e, t, l) {
    if ((be & 6) !== 0) throw Error(r(327));
    var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ha(e, t), a = n ? Sy(e, t) : Kr(e, t, !0), u = n;
    do {
      if (a === 0) {
        Au && !n && Pn(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, u && !vy(l)) {
          a = Kr(e, t, !1), u = !1;
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
              var d = e;
              a = Si;
              var m = d.current.memoizedState.isDehydrated;
              if (m && (xu(d, s).flags |= 256), s = Kr(
                d,
                s,
                !1
              ), s !== 2) {
                if (Yr && !m) {
                  d.errorRecoveryDisabledLanes |= u, Ha |= u, a = 4;
                  break e;
                }
                u = Yt, Yt = a, u !== null && (Yt === null ? Yt = u : Yt.push.apply(
                  Yt,
                  u
                ));
              }
              a = s;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          xu(e, 0), Pn(e, t, 0, !0);
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
              Pn(
                n,
                t,
                nl,
                !Wn
              );
              break e;
            case 2:
              Yt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (a = zs + 300 - vt(), 10 < a)) {
            if (Pn(
              n,
              t,
              nl,
              !Wn
            ), Ml(n, 0, !0) !== 0) break e;
            gn = t, n.timeoutHandle = qh(
              th.bind(
                null,
                n,
                l,
                Yt,
                Us,
                Xr,
                t,
                nl,
                Ha,
                Tu,
                Wn,
                u,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          th(
            n,
            l,
            Yt,
            Us,
            Xr,
            t,
            nl,
            Ha,
            Tu,
            Wn,
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
  function th(e, t, l, n, a, u, s, d, m, _, R, C, A, T) {
    if (e.timeoutHandle = -1, C = t.subtreeFlags, C & 8192 || (C & 16785408) === 16785408) {
      C = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ge
      }, Kd(
        t,
        u,
        C
      );
      var Y = (u & 62914560) === u ? zs - vt() : (u & 4194048) === u ? $d - vt() : 0;
      if (Y = lg(
        C,
        Y
      ), Y !== null) {
        gn = u, e.cancelPendingCommit = Y(
          rh.bind(
            null,
            e,
            t,
            u,
            l,
            n,
            a,
            s,
            d,
            m,
            R,
            C,
            null,
            A,
            T
          )
        ), Pn(e, u, s, !_);
        return;
      }
    }
    rh(
      e,
      t,
      u,
      l,
      n,
      a,
      s,
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
  function Pn(e, t, l, n) {
    t &= ~Gr, t &= ~Ha, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var u = 31 - Fe(a), s = 1 << u;
      n[u] = -1, a &= ~s;
    }
    l !== 0 && Et(e, l, t);
  }
  function js() {
    return (be & 6) === 0 ? (_i(0), !1) : !0;
  }
  function Zr() {
    if (ce !== null) {
      if (Ee === 0)
        var e = ce.return;
      else
        e = ce, an = Ca = null, cr(e), gu = null, ai = 0, e = ce;
      for (; e !== null; )
        zd(e.alternate, e), e = e.return;
      ce = null;
    }
  }
  function xu(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, Ly(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), gn = 0, Zr(), Re = e, ce = l = ln(e.current, null), oe = t, Ee = 0, ll = null, Wn = !1, Au = ha(e, t), Yr = !1, Tu = nl = Gr = Ha = Fn = we = 0, Yt = Si = null, Xr = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - Fe(n), u = 1 << a;
        t |= e[a], n &= ~u;
      }
    return yn = t, ls(), l;
  }
  function lh(e, t) {
    te = null, x.H = di, t === yu || t === os ? (t = vf(), Ee = 3) : t === Fc ? (t = vf(), Ee = 4) : Ee = t === Tr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ll = t, ce === null && (we = 1, Ts(
      e,
      pl(t, e.current)
    ));
  }
  function nh() {
    var e = el.current;
    return e === null ? !0 : (oe & 4194048) === oe ? El === null : (oe & 62914560) === oe || (oe & 536870912) !== 0 ? e === El : !1;
  }
  function ah() {
    var e = x.H;
    return x.H = di, e === null ? di : e;
  }
  function uh() {
    var e = x.A;
    return x.A = gy, e;
  }
  function Bs() {
    we = 4, Wn || (oe & 4194048) !== oe && el.current !== null || (Au = !0), (Fn & 134217727) === 0 && (Ha & 134217727) === 0 || Re === null || Pn(
      Re,
      oe,
      nl,
      !1
    );
  }
  function Kr(e, t, l) {
    var n = be;
    be |= 2;
    var a = ah(), u = uh();
    (Re !== e || oe !== t) && (Us = null, xu(e, t)), t = !1;
    var s = we;
    e: do
      try {
        if (Ee !== 0 && ce !== null) {
          var d = ce, m = ll;
          switch (Ee) {
            case 8:
              Zr(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              el.current === null && (t = !0);
              var _ = Ee;
              if (Ee = 0, ll = null, Ru(e, d, m, _), l && Au) {
                s = 0;
                break e;
              }
              break;
            default:
              _ = Ee, Ee = 0, ll = null, Ru(e, d, m, _);
          }
        }
        by(), s = we;
        break;
      } catch (R) {
        lh(e, R);
      }
    while (!0);
    return t && e.shellSuspendCounter++, an = Ca = null, be = n, x.H = a, x.A = u, ce === null && (Re = null, oe = 0, ls()), s;
  }
  function by() {
    for (; ce !== null; ) ih(ce);
  }
  function Sy(e, t) {
    var l = be;
    be |= 2;
    var n = ah(), a = uh();
    Re !== e || oe !== t ? (Us = null, Ds = vt() + 500, xu(e, t)) : Au = ha(
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
              Ee = 0, ll = null, Ru(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (gf(u)) {
                Ee = 0, ll = null, sh(t);
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
              gf(u) ? (Ee = 0, ll = null, sh(t)) : (Ee = 0, ll = null, Ru(e, t, u, 7));
              break;
            case 5:
              var s = null;
              switch (ce.tag) {
                case 26:
                  s = ce.memoizedState;
                case 5:
                case 27:
                  var d = ce;
                  if (s ? Zh(s) : d.stateNode.complete) {
                    Ee = 0, ll = null;
                    var m = d.sibling;
                    if (m !== null) ce = m;
                    else {
                      var _ = d.return;
                      _ !== null ? (ce = _, ws(_)) : ce = null;
                    }
                    break t;
                  }
              }
              Ee = 0, ll = null, Ru(e, t, u, 5);
              break;
            case 6:
              Ee = 0, ll = null, Ru(e, t, u, 6);
              break;
            case 8:
              Zr(), we = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        Ey();
        break;
      } catch (R) {
        lh(e, R);
      }
    while (!0);
    return an = Ca = null, x.H = n, x.A = a, be = l, ce !== null ? 0 : (Re = null, oe = 0, ls(), we);
  }
  function Ey() {
    for (; ce !== null && !xl(); )
      ih(ce);
  }
  function ih(e) {
    var t = Cd(e.alternate, e, yn);
    e.memoizedProps = e.pendingProps, t === null ? ws(e) : ce = t;
  }
  function sh(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Td(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          oe
        );
        break;
      case 11:
        t = Td(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          oe
        );
        break;
      case 5:
        cr(t);
      default:
        zd(l, t), t = ce = af(t, yn), t = Cd(l, t, yn);
    }
    e.memoizedProps = e.pendingProps, t === null ? ws(e) : ce = t;
  }
  function Ru(e, t, l, n) {
    an = Ca = null, cr(t), gu = null, ai = 0;
    var a = t.return;
    try {
      if (ry(
        e,
        a,
        t,
        l,
        oe
      )) {
        we = 1, Ts(
          e,
          pl(l, e.current)
        ), ce = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw ce = a, u;
      we = 1, Ts(
        e,
        pl(l, e.current)
      ), ce = null;
      return;
    }
    t.flags & 32768 ? (de || n === 1 ? e = !0 : Au || (oe & 536870912) !== 0 ? e = !1 : (Wn = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = el.current, n !== null && n.tag === 13 && (n.flags |= 16384))), ch(t, e)) : ws(t);
  }
  function ws(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        ch(
          t,
          Wn
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
    we === 0 && (we = 5);
  }
  function ch(e, t) {
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
    we = 6, ce = null;
  }
  function rh(e, t, l, n, a, u, s, d, m) {
    e.cancelPendingCommit = null;
    do
      Ls();
    while (ut !== 0);
    if ((be & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (u = t.lanes | t.childLanes, u |= jc, _n(
        e,
        l,
        u,
        s,
        d,
        m
      ), e === Re && (ce = Re = null, oe = 0), Nu = t, In = e, gn = l, kr = u, Qr = a, Id = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ny(bt, function() {
        return mh(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = x.T, x.T = null, a = L.p, L.p = 2, s = be, be |= 4;
        try {
          my(e, t, l);
        } finally {
          be = s, L.p = a, x.T = n;
        }
      }
      ut = 1, oh(), fh(), dh();
    }
  }
  function oh() {
    if (ut === 1) {
      ut = 0;
      var e = In, t = Nu, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = x.T, x.T = null;
        var n = L.p;
        L.p = 2;
        var a = be;
        be |= 4;
        try {
          Qd(t, e);
          var u = uo, s = Wo(e.containerInfo), d = u.focusedElem, m = u.selectionRange;
          if (s !== d && d && d.ownerDocument && Jo(
            d.ownerDocument.documentElement,
            d
          )) {
            if (m !== null && Cc(d)) {
              var _ = m.start, R = m.end;
              if (R === void 0 && (R = _), "selectionStart" in d)
                d.selectionStart = _, d.selectionEnd = Math.min(
                  R,
                  d.value.length
                );
              else {
                var C = d.ownerDocument || document, A = C && C.defaultView || window;
                if (A.getSelection) {
                  var T = A.getSelection(), Y = d.textContent.length, J = Math.min(m.start, Y), xe = m.end === void 0 ? J : Math.min(m.end, Y);
                  !T.extend && J > xe && (s = xe, xe = J, J = s);
                  var v = Ko(
                    d,
                    J
                  ), g = Ko(
                    d,
                    xe
                  );
                  if (v && g && (T.rangeCount !== 1 || T.anchorNode !== v.node || T.anchorOffset !== v.offset || T.focusNode !== g.node || T.focusOffset !== g.offset)) {
                    var E = C.createRange();
                    E.setStart(v.node, v.offset), T.removeAllRanges(), J > xe ? (T.addRange(E), T.extend(g.node, g.offset)) : (E.setEnd(g.node, g.offset), T.addRange(E));
                  }
                }
              }
            }
            for (C = [], T = d; T = T.parentNode; )
              T.nodeType === 1 && C.push({
                element: T,
                left: T.scrollLeft,
                top: T.scrollTop
              });
            for (typeof d.focus == "function" && d.focus(), d = 0; d < C.length; d++) {
              var M = C[d];
              M.element.scrollLeft = M.left, M.element.scrollTop = M.top;
            }
          }
          Fs = !!ao, uo = ao = null;
        } finally {
          be = a, L.p = n, x.T = l;
        }
      }
      e.current = t, ut = 2;
    }
  }
  function fh() {
    if (ut === 2) {
      ut = 0;
      var e = In, t = Nu, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = x.T, x.T = null;
        var n = L.p;
        L.p = 2;
        var a = be;
        be |= 4;
        try {
          Hd(e, t.alternate, t);
        } finally {
          be = a, L.p = n, x.T = l;
        }
      }
      ut = 3;
    }
  }
  function dh() {
    if (ut === 4 || ut === 3) {
      ut = 0, mc();
      var e = In, t = Nu, l = gn, n = Id;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ut = 5 : (ut = 0, Nu = In = null, hh(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && ($n = null), wl(l), t = t.stateNode, St && typeof St.onCommitFiberRoot == "function")
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
          for (var u = e.onRecoverableError, s = 0; s < n.length; s++) {
            var d = n[s];
            u(d.value, {
              componentStack: d.stack
            });
          }
        } finally {
          x.T = t, L.p = a;
        }
      }
      (gn & 3) !== 0 && Ls(), Vl(e), a = e.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? e === Vr ? Ei++ : (Ei = 0, Vr = e) : Ei = 0, _i(0);
    }
  }
  function hh(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, li(t)));
  }
  function Ls() {
    return oh(), fh(), dh(), mh();
  }
  function mh() {
    if (ut !== 5) return !1;
    var e = In, t = kr;
    kr = 0;
    var l = wl(gn), n = x.T, a = L.p;
    try {
      L.p = 32 > l ? 32 : l, x.T = null, l = Qr, Qr = null;
      var u = In, s = gn;
      if (ut = 0, Nu = In = null, gn = 0, (be & 6) !== 0) throw Error(r(331));
      var d = be;
      if (be |= 4, Wd(u.current), Zd(
        u,
        u.current,
        s,
        l
      ), be = d, _i(0, !1), St && typeof St.onPostCommitFiberRoot == "function")
        try {
          St.onPostCommitFiberRoot(En, u);
        } catch {
        }
      return !0;
    } finally {
      L.p = a, x.T = n, hh(e, t);
    }
  }
  function yh(e, t, l) {
    t = pl(l, t), t = Ar(e.stateNode, t, 2), e = Vn(e, t, 2), e !== null && (ya(e, 2), Vl(e));
  }
  function _e(e, t, l) {
    if (e.tag === 3)
      yh(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          yh(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && ($n === null || !$n.has(n))) {
            e = pl(l, e), l = gd(2), n = Vn(t, l, 2), n !== null && (pd(
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
  function Jr(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new py();
      var a = /* @__PURE__ */ new Set();
      n.set(t, a);
    } else
      a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
    a.has(l) || (Yr = !0, a.add(l), e = _y.bind(null, e, t, l), t.then(e, e));
  }
  function _y(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Re === e && (oe & l) === l && (we === 4 || we === 3 && (oe & 62914560) === oe && 300 > vt() - zs ? (be & 2) === 0 && xu(e, 0) : Gr |= l, Tu === oe && (Tu = 0)), Vl(e);
  }
  function gh(e, t) {
    t === 0 && (t = se()), e = Ra(e, t), e !== null && (ya(e, t), Vl(e));
  }
  function Ay(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), gh(e, l);
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
    n !== null && n.delete(t), gh(e, l);
  }
  function Ny(e, t) {
    return kt(e, t);
  }
  var Hs = null, Ou = null, Wr = !1, Ys = !1, Fr = !1, ea = 0;
  function Vl(e) {
    e !== Ou && e.next === null && (Ou === null ? Hs = Ou = e : Ou = Ou.next = e), Ys = !0, Wr || (Wr = !0, Ry());
  }
  function _i(e, t) {
    if (!Fr && Ys) {
      Fr = !0;
      do
        for (var l = !1, n = Hs; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var s = n.suspendedLanes, d = n.pingedLanes;
              u = (1 << 31 - Fe(42 | e) + 1) - 1, u &= a & ~(s & ~d), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, Sh(n, u));
          } else
            u = oe, u = Ml(
              n,
              n === Re ? u : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (u & 3) === 0 || ha(n, u) || (l = !0, Sh(n, u));
          n = n.next;
        }
      while (l);
      Fr = !1;
    }
  }
  function xy() {
    ph();
  }
  function ph() {
    Ys = Wr = !1;
    var e = 0;
    ea !== 0 && wy() && (e = ea);
    for (var t = vt(), l = null, n = Hs; n !== null; ) {
      var a = n.next, u = vh(n, t);
      u === 0 ? (n.next = null, l === null ? Hs = a : l.next = a, a === null && (Ou = l)) : (l = n, (e !== 0 || (u & 3) !== 0) && (Ys = !0)), n = a;
    }
    ut !== 0 && ut !== 5 || _i(e), ea !== 0 && (ea = 0);
  }
  function vh(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var s = 31 - Fe(u), d = 1 << s, m = a[s];
      m === -1 ? ((d & l) === 0 || (d & n) !== 0) && (a[s] = Li(d, t)) : m <= t && (e.expiredLanes |= d), u &= ~d;
    }
    if (t = Re, l = oe, l = Ml(
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
          l = zt;
          break;
        case 32:
          l = bt;
          break;
        case 268435456:
          l = wu;
          break;
        default:
          l = bt;
      }
      return n = bh.bind(null, e), l = kt(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && pt(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function bh(e, t) {
    if (ut !== 0 && ut !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (Ls() && e.callbackNode !== l)
      return null;
    var n = oe;
    return n = Ml(
      e,
      e === Re ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (eh(e, n, t), vh(e, vt()), e.callbackNode != null && e.callbackNode === l ? bh.bind(null, e) : null);
  }
  function Sh(e, t) {
    if (Ls()) return null;
    eh(e, t, !0);
  }
  function Ry() {
    Hy(function() {
      (be & 6) !== 0 ? kt(
        cl,
        xy
      ) : ph();
    });
  }
  function $r() {
    if (ea === 0) {
      var e = hu;
      e === 0 && (e = da, da <<= 1, (da & 261888) === 0 && (da = 256)), ea = e;
    }
    return ea;
  }
  function Eh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Pl("" + e);
  }
  function _h(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function Oy(e, t, l, n, a) {
    if (t === "submit" && l && l.stateNode === a) {
      var u = Eh(
        (a[$e] || null).action
      ), s = n.submitter;
      s && (t = (t = s[$e] || null) ? Eh(t.formAction) : s.getAttribute("formAction"), t !== null && (u = t, s = null));
      var d = new Ft(
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
                if (ea !== 0) {
                  var m = s ? _h(a, s) : new FormData(a);
                  pr(
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
                typeof u == "function" && (d.preventDefault(), m = s ? _h(a, s) : new FormData(a), pr(
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
  for (var Ir = 0; Ir < Uc.length; Ir++) {
    var Pr = Uc[Ir], My = Pr.toLowerCase(), Cy = Pr[0].toUpperCase() + Pr.slice(1);
    zl(
      My,
      "on" + Cy
    );
  }
  zl(Io, "onAnimationEnd"), zl(Po, "onAnimationIteration"), zl(ef, "onAnimationStart"), zl("dblclick", "onDoubleClick"), zl("focusin", "onFocus"), zl("focusout", "onBlur"), zl(Zm, "onTransitionRun"), zl(Km, "onTransitionStart"), zl(Jm, "onTransitionCancel"), zl(tf, "onTransitionEnd"), Ut("onMouseEnter", ["mouseout", "mouseover"]), Ut("onMouseLeave", ["mouseout", "mouseover"]), Ut("onPointerEnter", ["pointerout", "pointerover"]), Ut("onPointerLeave", ["pointerout", "pointerover"]), Cl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Cl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Cl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Cl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Cl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Cl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ai = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), qy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ai)
  );
  function Ah(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l], a = n.event;
      n = n.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var s = n.length - 1; 0 <= s; s--) {
            var d = n[s], m = d.instance, _ = d.currentTarget;
            if (d = d.listener, m !== u && a.isPropagationStopped())
              break e;
            u = d, a.currentTarget = _;
            try {
              u(a);
            } catch (R) {
              ts(R);
            }
            a.currentTarget = null, u = m;
          }
        else
          for (s = 0; s < n.length; s++) {
            if (d = n[s], m = d.instance, _ = d.currentTarget, d = d.listener, m !== u && a.isPropagationStopped())
              break e;
            u = d, a.currentTarget = _;
            try {
              u(a);
            } catch (R) {
              ts(R);
            }
            a.currentTarget = null, u = m;
          }
      }
    }
  }
  function re(e, t) {
    var l = t[Nn];
    l === void 0 && (l = t[Nn] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    l.has(n) || (Th(t, e, 2, !1), l.add(n));
  }
  function eo(e, t, l) {
    var n = 0;
    t && (n |= 4), Th(
      l,
      e,
      n,
      t
    );
  }
  var Gs = "_reactListening" + Math.random().toString(36).slice(2);
  function to(e) {
    if (!e[Gs]) {
      e[Gs] = !0, Hi.forEach(function(l) {
        l !== "selectionchange" && (qy.has(l) || eo(l, !1, e), eo(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Gs] || (t[Gs] = !0, eo("selectionchange", !1, t));
    }
  }
  function Th(e, t, l, n) {
    switch (Ph(t)) {
      case 2:
        var a = ug;
        break;
      case 8:
        a = ig;
        break;
      default:
        a = po;
    }
    l = a.bind(
      null,
      t,
      l,
      e
    ), a = void 0, !zn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
      passive: a
    }) : e.addEventListener(t, l, !1);
  }
  function lo(e, t, l, n, a) {
    var u = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (; ; ) {
        if (n === null) return;
        var s = n.tag;
        if (s === 3 || s === 4) {
          var d = n.stateNode.containerInfo;
          if (d === a) break;
          if (s === 4)
            for (s = n.return; s !== null; ) {
              var m = s.tag;
              if ((m === 3 || m === 4) && s.stateNode.containerInfo === a)
                return;
              s = s.return;
            }
          for (; d !== null; ) {
            if (s = Zt(d), s === null) return;
            if (m = s.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              n = u = s;
              continue e;
            }
            d = d.parentNode;
          }
        }
        n = n.return;
      }
    Pa(function() {
      var _ = u, R = ml(l), C = [];
      e: {
        var A = lf.get(e);
        if (A !== void 0) {
          var T = Ft, Y = e;
          switch (e) {
            case "keypress":
              if (Ea(l) === 0) break e;
            case "keydown":
            case "keyup":
              T = Ki;
              break;
            case "focusin":
              Y = "focus", T = Vu;
              break;
            case "focusout":
              Y = "blur", T = Vu;
              break;
            case "beforeblur":
            case "afterblur":
              T = Vu;
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
              T = Vi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              T = pc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              T = Rc;
              break;
            case Io:
            case Po:
            case ef:
              T = Sc;
              break;
            case tf:
              T = Wi;
              break;
            case "scroll":
            case "scrollend":
              T = Aa;
              break;
            case "wheel":
              T = Oc;
              break;
            case "copy":
            case "cut":
            case "paste":
              T = _c;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              T = Ji;
              break;
            case "toggle":
            case "beforetoggle":
              T = $i;
          }
          var J = (t & 4) !== 0, xe = !J && (e === "scroll" || e === "scrollend"), v = J ? A !== null ? A + "Capture" : null : A;
          J = [];
          for (var g = _, E; g !== null; ) {
            var M = g;
            if (E = M.stateNode, M = M.tag, M !== 5 && M !== 26 && M !== 27 || E === null || v === null || (M = yl(g, v), M != null && J.push(
              Ti(g, M, E)
            )), xe) break;
            g = g.return;
          }
          0 < J.length && (A = new T(
            A,
            Y,
            null,
            l,
            R
          ), C.push({ event: A, listeners: J }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (A = e === "mouseover" || e === "pointerover", T = e === "mouseout" || e === "pointerout", A && l !== hl && (Y = l.relatedTarget || l.fromElement) && (Zt(Y) || Y[ol]))
            break e;
          if ((T || A) && (A = R.window === R ? R : (A = R.ownerDocument) ? A.defaultView || A.parentWindow : window, T ? (Y = l.relatedTarget || l.toElement, T = _, Y = Y ? Zt(Y) : null, Y !== null && (xe = z(Y), J = Y.tag, Y !== xe || J !== 5 && J !== 27 && J !== 6) && (Y = null)) : (T = null, Y = _), T !== Y)) {
            if (J = Vi, M = "onMouseLeave", v = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (J = Ji, M = "onPointerLeave", v = "onPointerEnter", g = "pointer"), xe = T == null ? A : Kt(T), E = Y == null ? A : Kt(Y), A = new J(
              M,
              g + "leave",
              T,
              l,
              R
            ), A.target = xe, A.relatedTarget = E, M = null, Zt(R) === _ && (J = new J(
              v,
              g + "enter",
              Y,
              l,
              R
            ), J.target = E, J.relatedTarget = xe, M = J), xe = M, T && Y)
              t: {
                for (J = zy, v = T, g = Y, E = 0, M = v; M; M = J(M))
                  E++;
                M = 0;
                for (var V = g; V; V = J(V))
                  M++;
                for (; 0 < E - M; )
                  v = J(v), E--;
                for (; 0 < M - E; )
                  g = J(g), M--;
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
            T !== null && Nh(
              C,
              A,
              T,
              J,
              !1
            ), Y !== null && xe !== null && Nh(
              C,
              xe,
              Y,
              J,
              !0
            );
          }
        }
        e: {
          if (A = _ ? Kt(_) : window, T = A.nodeName && A.nodeName.toLowerCase(), T === "select" || T === "input" && A.type === "file")
            var pe = Ta;
          else if (ae(A))
            if (Fu)
              pe = km;
            else {
              pe = es;
              var X = $u;
            }
          else
            T = A.nodeName, !T || T.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? _ && Sa(_.elementType) && (pe = Ta) : pe = Xm;
          if (pe && (pe = pe(e, _))) {
            De(
              C,
              pe,
              l,
              R
            );
            break e;
          }
          X && X(e, A, _), e === "focusout" && _ && A.type === "number" && _.memoizedProps.value != null && dl(A, "number", A.value);
        }
        switch (X = _ ? Kt(_) : window, e) {
          case "focusin":
            (ae(X) || X.contentEditable === "true") && (uu = X, qc = _, Pu = null);
            break;
          case "focusout":
            Pu = qc = uu = null;
            break;
          case "mousedown":
            zc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            zc = !1, Fo(C, l, R);
            break;
          case "selectionchange":
            if (Vm) break;
          case "keydown":
          case "keyup":
            Fo(C, l, R);
        }
        var ne;
        if (au)
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
        fe && (Pi && l.locale !== "ko" && (Q || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && Q && (ne = ku()) : (Bt = R, eu = "value" in Bt ? Bt.value : Bt.textContent, Q = !0)), X = Xs(_, fe), 0 < X.length && (fe = new Zi(
          fe,
          e,
          null,
          l,
          R
        ), C.push({ event: fe, listeners: X }), ne ? fe.data = ne : (ne = B(l), ne !== null && (fe.data = ne)))), (ne = Ii ? ue(e, l) : ye(e, l)) && (fe = Xs(_, "onBeforeInput"), 0 < fe.length && (X = new Zi(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          R
        ), C.push({
          event: X,
          listeners: fe
        }), X.data = ne)), Oy(
          C,
          e,
          _,
          l,
          R
        );
      }
      Ah(C, t);
    });
  }
  function Ti(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function Xs(e, t) {
    for (var l = t + "Capture", n = []; e !== null; ) {
      var a = e, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = yl(e, l), a != null && n.unshift(
        Ti(e, a, u)
      ), a = yl(e, t), a != null && n.push(
        Ti(e, a, u)
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
  function Nh(e, t, l, n, a) {
    for (var u = t._reactName, s = []; l !== null && l !== n; ) {
      var d = l, m = d.alternate, _ = d.stateNode;
      if (d = d.tag, m !== null && m === n) break;
      d !== 5 && d !== 26 && d !== 27 || _ === null || (m = _, a ? (_ = yl(l, u), _ != null && s.unshift(
        Ti(l, _, m)
      )) : a || (_ = yl(l, u), _ != null && s.push(
        Ti(l, _, m)
      ))), l = l.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var Dy = /\r\n?/g, Uy = /\u0000|\uFFFD/g;
  function xh(e) {
    return (typeof e == "string" ? e : "" + e).replace(Dy, `
`).replace(Uy, "");
  }
  function Rh(e, t) {
    return t = xh(t), xh(e) === t;
  }
  function Ne(e, t, l, n, a, u) {
    switch (l) {
      case "children":
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || qn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && qn(e, "" + n);
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
        $a(e, n, u);
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
        n = Pl("" + n), e.setAttribute(l, n);
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
        n = Pl("" + n), e.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (e.onclick = Ge);
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
        l = Pl("" + n), e.setAttributeNS(
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
        fl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        fl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        fl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        fl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        fl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        fl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        fl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        fl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        fl(
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
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Qi.get(l) || l, ba(e, l, n));
    }
  }
  function no(e, t, l, n, a, u) {
    switch (l) {
      case "style":
        $a(e, n, u);
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
        typeof n == "string" ? qn(e, n) : (typeof n == "number" || typeof n == "bigint") && qn(e, "" + n);
        break;
      case "onScroll":
        n != null && re("scroll", e);
        break;
      case "onScrollEnd":
        n != null && re("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = Ge);
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
        if (!Ka.hasOwnProperty(l))
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
            var s = l[u];
            if (s != null)
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
                  Ne(e, t, u, s, l, null);
              }
          }
        a && Ne(e, t, "srcSet", l.srcSet, l, null), n && Ne(e, t, "src", l.src, l, null);
        return;
      case "input":
        re("invalid", e);
        var d = u = s = a = null, m = null, _ = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var R = l[n];
            if (R != null)
              switch (n) {
                case "name":
                  a = R;
                  break;
                case "type":
                  s = R;
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
        Wa(
          e,
          u,
          d,
          m,
          _,
          s,
          a,
          !1
        );
        return;
      case "select":
        re("invalid", e), n = s = u = null;
        for (a in l)
          if (l.hasOwnProperty(a) && (d = l[a], d != null))
            switch (a) {
              case "value":
                u = d;
                break;
              case "defaultValue":
                s = d;
                break;
              case "multiple":
                n = d;
              default:
                Ne(e, t, a, d, l, null);
            }
        t = u, l = s, e.multiple = !!n, t != null ? je(e, !!n, t, !1) : l != null && je(e, !!n, l, !0);
        return;
      case "textarea":
        re("invalid", e), u = a = n = null;
        for (s in l)
          if (l.hasOwnProperty(s) && (d = l[s], d != null))
            switch (s) {
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
                Ne(e, t, s, d, l, null);
            }
        Fa(e, n, a, u);
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
        for (n = 0; n < Ai.length; n++)
          re(Ai[n], e);
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
            l.hasOwnProperty(R) && (n = l[R], n !== void 0 && no(
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
        var a = null, u = null, s = null, d = null, m = null, _ = null, R = null;
        for (T in l) {
          var C = l[T];
          if (l.hasOwnProperty(T) && C != null)
            switch (T) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = C;
              default:
                n.hasOwnProperty(T) || Ne(e, t, T, null, n, C);
            }
        }
        for (var A in n) {
          var T = n[A];
          if (C = l[A], n.hasOwnProperty(A) && (T != null || C != null))
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
                s = T;
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
                T !== C && Ne(
                  e,
                  t,
                  A,
                  T,
                  n,
                  C
                );
            }
        }
        Hl(
          e,
          s,
          d,
          m,
          _,
          R,
          u,
          a
        );
        return;
      case "select":
        T = s = d = A = null;
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
                s = u;
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
        t = d, l = s, n = T, A != null ? je(e, !!l, A, !1) : !!n != !!l && (t != null ? je(e, !!l, t, !0) : je(e, !!l, l ? [] : "", !1));
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
        for (s in n)
          if (a = n[s], u = l[s], n.hasOwnProperty(s) && (a != null || u != null))
            switch (s) {
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
                a !== u && Ne(e, t, s, a, n, u);
            }
        Xi(e, A, T);
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
            A = l[xe], l.hasOwnProperty(xe) && A !== void 0 && !n.hasOwnProperty(xe) && no(
              e,
              t,
              xe,
              void 0,
              n,
              A
            );
          for (R in n)
            A = n[R], T = l[R], !n.hasOwnProperty(R) || A === T || A === void 0 && T === void 0 || no(
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
    for (C in n)
      A = n[C], T = l[C], !n.hasOwnProperty(C) || A === T || A == null && T == null || Ne(e, t, C, A, n, T);
  }
  function Oh(e) {
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
        var a = l[n], u = a.transferSize, s = a.initiatorType, d = a.duration;
        if (u && d && Oh(s)) {
          for (s = 0, d = a.responseEnd, n += 1; n < l.length; n++) {
            var m = l[n], _ = m.startTime;
            if (_ > d) break;
            var R = m.transferSize, C = m.initiatorType;
            R && Oh(C) && (m = m.responseEnd, s += R * (m < d ? 1 : (d - _) / (m - _)));
          }
          if (--n, t += 8 * (u + s) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var ao = null, uo = null;
  function ks(e) {
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
  function Ch(e, t) {
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
  function io(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var so = null;
  function wy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === so ? !1 : (so = e, !0) : (so = null, !1);
  }
  var qh = typeof setTimeout == "function" ? setTimeout : void 0, Ly = typeof clearTimeout == "function" ? clearTimeout : void 0, zh = typeof Promise == "function" ? Promise : void 0, Hy = typeof queueMicrotask == "function" ? queueMicrotask : typeof zh < "u" ? function(e) {
    return zh.resolve(null).then(e).catch(Yy);
  } : qh;
  function Yy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ta(e) {
    return e === "head";
  }
  function Dh(e, t) {
    var l = t, n = 0;
    do {
      var a = l.nextSibling;
      if (e.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            e.removeChild(a), zu(t);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          Ni(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, Ni(l);
          for (var u = l.firstChild; u; ) {
            var s = u.nextSibling, d = u.nodeName;
            u[Vt] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = s;
          }
        } else
          l === "body" && Ni(e.ownerDocument.body);
      l = a;
    } while (l);
    zu(t);
  }
  function Uh(e, t) {
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
  function co(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          co(l), va(l);
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
        if (!e[Vt])
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
      if (e = _l(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Xy(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = _l(e.nextSibling), e === null)) return null;
    return e;
  }
  function jh(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = _l(e.nextSibling), e === null)) return null;
    return e;
  }
  function ro(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function oo(e) {
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
  function _l(e) {
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
  var fo = null;
  function Bh(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return _l(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function wh(e) {
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
  function Lh(e, t, l) {
    switch (t = ks(l), e) {
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
  function Ni(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    va(e);
  }
  var Al = /* @__PURE__ */ new Map(), Hh = /* @__PURE__ */ new Set();
  function Qs(e) {
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
    var e = pn.f(), t = js();
    return e || t;
  }
  function Vy(e) {
    var t = Ll(e);
    t !== null && t.tag === 5 && t.type === "form" ? ld(t) : pn.r(e);
  }
  var Mu = typeof document > "u" ? null : document;
  function Yh(e, t, l) {
    var n = Mu;
    if (n && typeof t == "string" && t) {
      var a = Nt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), Hh.has(a) || (Hh.add(a), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(a) === null && (t = n.createElement("link"), yt(t, "link", e), Ae(t), n.head.appendChild(t)));
    }
  }
  function Zy(e) {
    pn.D(e), Yh("dns-prefetch", e, null);
  }
  function Ky(e, t) {
    pn.C(e, t), Yh("preconnect", e, t);
  }
  function Jy(e, t, l) {
    pn.L(e, t, l);
    var n = Mu;
    if (n && e && t) {
      var a = 'link[rel="preload"][as="' + Nt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Nt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Nt(
        l.imageSizes
      ) + '"]')) : a += '[href="' + Nt(e) + '"]';
      var u = a;
      switch (t) {
        case "style":
          u = Cu(e);
          break;
        case "script":
          u = qu(e);
      }
      Al.has(u) || (e = G(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Al.set(u, e), n.querySelector(a) !== null || t === "style" && n.querySelector(xi(u)) || t === "script" && n.querySelector(Ri(u)) || (t = n.createElement("link"), yt(t, "link", e), Ae(t), n.head.appendChild(t)));
    }
  }
  function Wy(e, t) {
    pn.m(e, t);
    var l = Mu;
    if (l && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Nt(n) + '"][href="' + Nt(e) + '"]', u = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = qu(e);
      }
      if (!Al.has(u) && (e = G({ rel: "modulepreload", href: e }, t), Al.set(u, e), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Ri(u)))
              return;
        }
        n = l.createElement("link"), yt(n, "link", e), Ae(n), l.head.appendChild(n);
      }
    }
  }
  function Fy(e, t, l) {
    pn.S(e, t, l);
    var n = Mu;
    if (n && e) {
      var a = xn(n).hoistableStyles, u = Cu(e);
      t = t || "default";
      var s = a.get(u);
      if (!s) {
        var d = { loading: 0, preload: null };
        if (s = n.querySelector(
          xi(u)
        ))
          d.loading = 5;
        else {
          e = G(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Al.get(u)) && ho(e, l);
          var m = s = n.createElement("link");
          Ae(m), yt(m, "link", e), m._p = new Promise(function(_, R) {
            m.onload = _, m.onerror = R;
          }), m.addEventListener("load", function() {
            d.loading |= 1;
          }), m.addEventListener("error", function() {
            d.loading |= 2;
          }), d.loading |= 4, Vs(s, t, n);
        }
        s = {
          type: "stylesheet",
          instance: s,
          count: 1,
          state: d
        }, a.set(u, s);
      }
    }
  }
  function $y(e, t) {
    pn.X(e, t);
    var l = Mu;
    if (l && e) {
      var n = xn(l).hoistableScripts, a = qu(e), u = n.get(a);
      u || (u = l.querySelector(Ri(a)), u || (e = G({ src: e, async: !0 }, t), (t = Al.get(a)) && mo(e, t), u = l.createElement("script"), Ae(u), yt(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Iy(e, t) {
    pn.M(e, t);
    var l = Mu;
    if (l && e) {
      var n = xn(l).hoistableScripts, a = qu(e), u = n.get(a);
      u || (u = l.querySelector(Ri(a)), u || (e = G({ src: e, async: !0, type: "module" }, t), (t = Al.get(a)) && mo(e, t), u = l.createElement("script"), Ae(u), yt(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Gh(e, t, l, n) {
    var a = (a = K.current) ? Qs(a) : null;
    if (!a) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Cu(l.href), l = xn(
          a
        ).hoistableStyles, n = l.get(t), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Cu(l.href);
          var u = xn(
            a
          ).hoistableStyles, s = u.get(e);
          if (s || (a = a.ownerDocument || a, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, s), (u = a.querySelector(
            xi(e)
          )) && !u._p && (s.instance = u, s.state.loading = 5), Al.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Al.set(e, l), u || Py(
            a,
            e,
            l,
            s.state
          ))), t && n === null)
            throw Error(r(528, ""));
          return s;
        }
        if (t && n !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = qu(l), l = xn(
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
  function Cu(e) {
    return 'href="' + Nt(e) + '"';
  }
  function xi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Xh(e) {
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
  function qu(e) {
    return '[src="' + Nt(e) + '"]';
  }
  function Ri(e) {
    return "script[async]" + e;
  }
  function kh(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + Nt(l.href) + '"]'
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
          ), Ae(n), yt(n, "style", a), Vs(n, l.precedence, e), t.instance = n;
        case "stylesheet":
          a = Cu(l.href);
          var u = e.querySelector(
            xi(a)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Ae(u), u;
          n = Xh(l), (a = Al.get(a)) && ho(n, a), u = (e.ownerDocument || e).createElement("link"), Ae(u);
          var s = u;
          return s._p = new Promise(function(d, m) {
            s.onload = d, s.onerror = m;
          }), yt(u, "link", n), t.state.loading |= 4, Vs(u, l.precedence, e), t.instance = u;
        case "script":
          return u = qu(l.src), (a = e.querySelector(
            Ri(u)
          )) ? (t.instance = a, Ae(a), a) : (n = l, (a = Al.get(u)) && (n = G({}, l), mo(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Ae(a), yt(a, "link", n), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, Vs(n, l.precedence, e));
    return t.instance;
  }
  function Vs(e, t, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, u = a, s = 0; s < n.length; s++) {
      var d = n[s];
      if (d.dataset.precedence === t) u = d;
      else if (u !== a) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function ho(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function mo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Zs = null;
  function Qh(e, t, l) {
    if (Zs === null) {
      var n = /* @__PURE__ */ new Map(), a = Zs = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = Zs, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(e)) return n;
    for (n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++) {
      var u = l[a];
      if (!(u[Vt] || u[He] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = u.getAttribute(t) || "";
        s = e + s;
        var d = n.get(s);
        d ? d.push(u) : n.set(s, [u]);
      }
    }
    return n;
  }
  function Vh(e, t, l) {
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
  function Zh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function tg(e, t, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = Cu(n.href), u = t.querySelector(
          xi(a)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ks.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, Ae(u);
          return;
        }
        u = t.ownerDocument || t, n = Xh(n), (a = Al.get(a)) && ho(n, a), u = u.createElement("link"), Ae(u);
        var s = u;
        s._p = new Promise(function(d, m) {
          s.onload = d, s.onerror = m;
        }), yt(u, "link", n), l.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Ks.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var yo = 0;
  function lg(e, t) {
    return e.stylesheets && e.count === 0 && Ws(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (e.stylesheets && Ws(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && yo === 0 && (yo = 62500 * By());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ws(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > yo ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function Ks() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ws(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Js = null;
  function Ws(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Js = /* @__PURE__ */ new Map(), t.forEach(ng, e), Js = null, Ks.call(e));
  }
  function ng(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Js.get(e);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Js.set(e, l);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < a.length; u++) {
          var s = a[u];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (l.set(s.dataset.precedence, s), n = s);
        }
        n && l.set(null, n);
      }
      a = t.instance, s = a.getAttribute("data-precedence"), u = l.get(s) || n, u === n && l.set(null, a), l.set(s, a), this.count++, n = Ks.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), u ? u.parentNode.insertBefore(a, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Oi = {
    $$typeof: Ce,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0
  };
  function ag(e, t, l, n, a, u, s, d, m) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ma(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ma(0), this.hiddenUpdates = ma(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Kh(e, t, l, n, a, u, s, d, m, _, R, C) {
    return e = new ag(
      e,
      t,
      l,
      s,
      m,
      _,
      R,
      C,
      d
    ), t = 1, u === !0 && (t |= 24), u = Pt(3, null, null, t), e.current = u, u.stateNode = e, t = Kc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: t
    }, $c(u), e;
  }
  function Jh(e) {
    return e ? (e = cu, e) : cu;
  }
  function Wh(e, t, l, n, a, u) {
    a = Jh(a), n.context === null ? n.context = a : n.pendingContext = a, n = Qn(t), n.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (n.callback = u), l = Vn(e, n, t), l !== null && (Gt(l, e, t), ii(l, e, t));
  }
  function Fh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function go(e, t) {
    Fh(e, t), (e = e.alternate) && Fh(e, t);
  }
  function $h(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ra(e, 67108864);
      t !== null && Gt(t, e, 67108864), go(e, 67108864);
    }
  }
  function Ih(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = al();
      t = An(t);
      var l = Ra(e, t);
      l !== null && Gt(l, e, t), go(e, t);
    }
  }
  var Fs = !0;
  function ug(e, t, l, n) {
    var a = x.T;
    x.T = null;
    var u = L.p;
    try {
      L.p = 2, po(e, t, l, n);
    } finally {
      L.p = u, x.T = a;
    }
  }
  function ig(e, t, l, n) {
    var a = x.T;
    x.T = null;
    var u = L.p;
    try {
      L.p = 8, po(e, t, l, n);
    } finally {
      L.p = u, x.T = a;
    }
  }
  function po(e, t, l, n) {
    if (Fs) {
      var a = vo(n);
      if (a === null)
        lo(
          e,
          t,
          n,
          $s,
          l
        ), em(e, n);
      else if (cg(
        a,
        e,
        t,
        l,
        n
      ))
        n.stopPropagation();
      else if (em(e, n), t & 4 && -1 < sg.indexOf(e)) {
        for (; a !== null; ) {
          var u = Ll(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var s = Ol(u.pendingLanes);
                  if (s !== 0) {
                    var d = u;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; s; ) {
                      var m = 1 << 31 - Fe(s);
                      d.entanglements[1] |= m, s &= ~m;
                    }
                    Vl(u), (be & 6) === 0 && (Ds = vt() + 500, _i(0));
                  }
                }
                break;
              case 31:
              case 13:
                d = Ra(u, 2), d !== null && Gt(d, u, 2), js(), go(u, 2);
            }
          if (u = vo(n), u === null && lo(
            e,
            t,
            n,
            $s,
            l
          ), u === a) break;
          a = u;
        }
        a !== null && n.stopPropagation();
      } else
        lo(
          e,
          t,
          n,
          null,
          l
        );
    }
  }
  function vo(e) {
    return e = ml(e), bo(e);
  }
  var $s = null;
  function bo(e) {
    if ($s = null, e = Zt(e), e !== null) {
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
    return $s = e, null;
  }
  function Ph(e) {
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
          case cl:
            return 2;
          case zt:
            return 8;
          case bt:
          case ka:
            return 32;
          case wu:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var So = !1, la = null, na = null, aa = null, Mi = /* @__PURE__ */ new Map(), Ci = /* @__PURE__ */ new Map(), ua = [], sg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function em(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        la = null;
        break;
      case "dragenter":
      case "dragleave":
        na = null;
        break;
      case "mouseover":
      case "mouseout":
        aa = null;
        break;
      case "pointerover":
      case "pointerout":
        Mi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ci.delete(t.pointerId);
    }
  }
  function qi(e, t, l, n, a, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: u,
      targetContainers: [a]
    }, t !== null && (t = Ll(t), t !== null && $h(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function cg(e, t, l, n, a) {
    switch (t) {
      case "focusin":
        return la = qi(
          la,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return na = qi(
          na,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return aa = qi(
          aa,
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
          qi(
            Mi.get(u) || null,
            e,
            t,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return u = a.pointerId, Ci.set(
          u,
          qi(
            Ci.get(u) || null,
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
  function tm(e) {
    var t = Zt(e.target);
    if (t !== null) {
      var l = z(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = w(l), t !== null) {
            e.blockedOn = t, Tn(e.priority, function() {
              Ih(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = k(l), t !== null) {
            e.blockedOn = t, Tn(e.priority, function() {
              Ih(l);
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
  function Is(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = vo(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        hl = n, l.target.dispatchEvent(n), hl = null;
      } else
        return t = Ll(l), t !== null && $h(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function lm(e, t, l) {
    Is(e) && l.delete(t);
  }
  function rg() {
    So = !1, la !== null && Is(la) && (la = null), na !== null && Is(na) && (na = null), aa !== null && Is(aa) && (aa = null), Mi.forEach(lm), Ci.forEach(lm);
  }
  function Ps(e, t) {
    e.blockedOn === t && (e.blockedOn = null, So || (So = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      rg
    )));
  }
  var ec = null;
  function nm(e) {
    ec !== e && (ec = e, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        ec === e && (ec = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], n = e[t + 1], a = e[t + 2];
          if (typeof n != "function") {
            if (bo(n || l) === null)
              continue;
            break;
          }
          var u = Ll(l);
          u !== null && (e.splice(t, 3), t -= 3, pr(
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
  function zu(e) {
    function t(m) {
      return Ps(m, e);
    }
    la !== null && Ps(la, e), na !== null && Ps(na, e), aa !== null && Ps(aa, e), Mi.forEach(t), Ci.forEach(t);
    for (var l = 0; l < ua.length; l++) {
      var n = ua[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < ua.length && (l = ua[0], l.blockedOn === null); )
      tm(l), l.blockedOn === null && ua.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], u = l[n + 1], s = a[$e] || null;
        if (typeof u == "function")
          s || nm(l);
        else if (s) {
          var d = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, s = u[$e] || null)
              d = s.formAction;
            else if (bo(a) !== null) continue;
          } else d = s.action;
          typeof d == "function" ? l[n + 1] = d : (l.splice(n, 3), n -= 3), nm(l);
        }
      }
  }
  function am() {
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
  function Eo(e) {
    this._internalRoot = e;
  }
  tc.prototype.render = Eo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var l = t.current, n = al();
    Wh(l, n, e, t, null, null);
  }, tc.prototype.unmount = Eo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Wh(e.current, 2, null, e, null, null), js(), t[ol] = null;
    }
  };
  function tc(e) {
    this._internalRoot = e;
  }
  tc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = pa();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < ua.length && t !== 0 && t < ua[l].priority; l++) ;
      ua.splice(l, 0, e), l === 0 && tm(e);
    }
  };
  var um = i.version;
  if (um !== "19.2.4")
    throw Error(
      r(
        527,
        um,
        "19.2.4"
      )
    );
  L.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = q(t), e = e !== null ? F(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var og = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: x,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var lc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!lc.isDisabled && lc.supportsFiber)
      try {
        En = lc.inject(
          og
        ), St = lc;
      } catch {
      }
  }
  return Di.createRoot = function(e, t) {
    if (!S(e)) throw Error(r(299));
    var l = !1, n = "", a = dd, u = hd, s = md;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Kh(
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
      s,
      am
    ), e[ol] = t.current, to(e), new Eo(t);
  }, Di.hydrateRoot = function(e, t, l) {
    if (!S(e)) throw Error(r(299));
    var n = !1, a = "", u = dd, s = hd, d = md, m = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (s = l.onCaughtError), l.onRecoverableError !== void 0 && (d = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), t = Kh(
      e,
      1,
      !0,
      t,
      l ?? null,
      n,
      a,
      m,
      u,
      s,
      d,
      am
    ), t.context = Jh(null), l = t.current, n = al(), n = An(n), a = Qn(n), a.callback = null, Vn(l, a, n), l = n, t.current.lanes = l, ya(t, l), Vl(t), e[ol] = t.current, to(e), new tc(t);
  }, Di.version = "19.2.4", Di;
}
var ym;
function Sg() {
  if (ym) return To.exports;
  ym = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (i) {
        console.error(i);
      }
  }
  return o(), To.exports = bg(), To.exports;
}
var Eg = Sg();
const _g = "/api";
function Om() {
  return window.localStorage.getItem("token");
}
function gm() {
  const o = `${window.location.pathname}${window.location.search || ""}`;
  window.location.replace(`/login?next=${encodeURIComponent(o)}`);
}
async function Du(o, i = {}) {
  const c = Om(), r = {
    "Content-Type": "application/json",
    ...c ? { Authorization: `Bearer ${c}` } : {},
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
const Kl = /* @__PURE__ */ Object.create(null);
Kl.open = "0";
Kl.close = "1";
Kl.ping = "2";
Kl.pong = "3";
Kl.message = "4";
Kl.upgrade = "5";
Kl.noop = "6";
const cc = /* @__PURE__ */ Object.create(null);
Object.keys(Kl).forEach((o) => {
  cc[Kl[o]] = o;
});
const qo = { type: "error", data: "parser error" }, Mm = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Cm = typeof ArrayBuffer == "function", qm = (o) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(o) : o && o.buffer instanceof ArrayBuffer, Go = ({ type: o, data: i }, c, r) => Mm && i instanceof Blob ? c ? r(i) : pm(i, r) : Cm && (i instanceof ArrayBuffer || qm(i)) ? c ? r(i) : pm(new Blob([i]), r) : r(Kl[o] + (i || "")), pm = (o, i) => {
  const c = new FileReader();
  return c.onload = function() {
    const r = c.result.split(",")[1];
    i("b" + (r || ""));
  }, c.readAsDataURL(o);
};
function vm(o) {
  return o instanceof Uint8Array ? o : o instanceof ArrayBuffer ? new Uint8Array(o) : new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
}
let Oo;
function Ag(o, i) {
  if (Mm && o.data instanceof Blob)
    return o.data.arrayBuffer().then(vm).then(i);
  if (Cm && (o.data instanceof ArrayBuffer || qm(o.data)))
    return i(vm(o.data));
  Go(o, !1, (c) => {
    Oo || (Oo = new TextEncoder()), i(Oo.encode(c));
  });
}
const bm = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Bi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let o = 0; o < bm.length; o++)
  Bi[bm.charCodeAt(o)] = o;
const Tg = (o) => {
  let i = o.length * 0.75, c = o.length, r, S = 0, z, w, k, U;
  o[o.length - 1] === "=" && (i--, o[o.length - 2] === "=" && i--);
  const q = new ArrayBuffer(i), F = new Uint8Array(q);
  for (r = 0; r < c; r += 4)
    z = Bi[o.charCodeAt(r)], w = Bi[o.charCodeAt(r + 1)], k = Bi[o.charCodeAt(r + 2)], U = Bi[o.charCodeAt(r + 3)], F[S++] = z << 2 | w >> 4, F[S++] = (w & 15) << 4 | k >> 2, F[S++] = (k & 3) << 6 | U & 63;
  return q;
}, Ng = typeof ArrayBuffer == "function", Xo = (o, i) => {
  if (typeof o != "string")
    return {
      type: "message",
      data: zm(o, i)
    };
  const c = o.charAt(0);
  return c === "b" ? {
    type: "message",
    data: xg(o.substring(1), i)
  } : cc[c] ? o.length > 1 ? {
    type: cc[c],
    data: o.substring(1)
  } : {
    type: cc[c]
  } : qo;
}, xg = (o, i) => {
  if (Ng) {
    const c = Tg(o);
    return zm(c, i);
  } else
    return { base64: !0, data: o };
}, zm = (o, i) => i === "blob" ? o instanceof Blob ? o : new Blob([o]) : o instanceof ArrayBuffer ? o : o.buffer, Dm = "", Rg = (o, i) => {
  const c = o.length, r = new Array(c);
  let S = 0;
  o.forEach((z, w) => {
    Go(z, !1, (k) => {
      r[w] = k, ++S === c && i(r.join(Dm));
    });
  });
}, Og = (o, i) => {
  const c = o.split(Dm), r = [];
  for (let S = 0; S < c.length; S++) {
    const z = Xo(c[S], i);
    if (r.push(z), z.type === "error")
      break;
  }
  return r;
};
function Mg() {
  return new TransformStream({
    transform(o, i) {
      Ag(o, (c) => {
        const r = c.length;
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
        o.data && typeof o.data != "string" && (S[0] |= 128), i.enqueue(S), i.enqueue(c);
      });
    }
  });
}
let Mo;
function nc(o) {
  return o.reduce((i, c) => i + c.length, 0);
}
function ac(o, i) {
  if (o[0].length === i)
    return o.shift();
  const c = new Uint8Array(i);
  let r = 0;
  for (let S = 0; S < i; S++)
    c[S] = o[0][r++], r === o[0].length && (o.shift(), r = 0);
  return o.length && r < o[0].length && (o[0] = o[0].slice(r)), c;
}
function Cg(o, i) {
  Mo || (Mo = new TextDecoder());
  const c = [];
  let r = 0, S = -1, z = !1;
  return new TransformStream({
    transform(w, k) {
      for (c.push(w); ; ) {
        if (r === 0) {
          if (nc(c) < 1)
            break;
          const U = ac(c, 1);
          z = (U[0] & 128) === 128, S = U[0] & 127, S < 126 ? r = 3 : S === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (nc(c) < 2)
            break;
          const U = ac(c, 2);
          S = new DataView(U.buffer, U.byteOffset, U.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (nc(c) < 8)
            break;
          const U = ac(c, 8), q = new DataView(U.buffer, U.byteOffset, U.length), F = q.getUint32(0);
          if (F > Math.pow(2, 21) - 1) {
            k.enqueue(qo);
            break;
          }
          S = F * Math.pow(2, 32) + q.getUint32(4), r = 3;
        } else {
          if (nc(c) < S)
            break;
          const U = ac(c, S);
          k.enqueue(Xo(z ? U : Mo.decode(U), i)), r = 0;
        }
        if (S === 0 || S > o) {
          k.enqueue(qo);
          break;
        }
      }
    }
  });
}
const Um = 4;
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
  function c() {
    this.off(o, c), i.apply(this, arguments);
  }
  return c.fn = i, this.on(o, c), this;
};
at.prototype.off = at.prototype.removeListener = at.prototype.removeAllListeners = at.prototype.removeEventListener = function(o, i) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var c = this._callbacks["$" + o];
  if (!c) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + o], this;
  for (var r, S = 0; S < c.length; S++)
    if (r = c[S], r === i || r.fn === i) {
      c.splice(S, 1);
      break;
    }
  return c.length === 0 && delete this._callbacks["$" + o], this;
};
at.prototype.emit = function(o) {
  this._callbacks = this._callbacks || {};
  for (var i = new Array(arguments.length - 1), c = this._callbacks["$" + o], r = 1; r < arguments.length; r++)
    i[r - 1] = arguments[r];
  if (c) {
    c = c.slice(0);
    for (var r = 0, S = c.length; r < S; ++r)
      c[r].apply(this, i);
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
const dc = typeof Promise == "function" && typeof Promise.resolve == "function" ? (i) => Promise.resolve().then(i) : (i, c) => c(i, 0), Tl = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), zg = "arraybuffer";
function jm(o, ...i) {
  return i.reduce((c, r) => (o.hasOwnProperty(r) && (c[r] = o[r]), c), {});
}
const Dg = Tl.setTimeout, Ug = Tl.clearTimeout;
function hc(o, i) {
  i.useNativeTimers ? (o.setTimeoutFn = Dg.bind(Tl), o.clearTimeoutFn = Ug.bind(Tl)) : (o.setTimeoutFn = Tl.setTimeout.bind(Tl), o.clearTimeoutFn = Tl.clearTimeout.bind(Tl));
}
const jg = 1.33;
function Bg(o) {
  return typeof o == "string" ? wg(o) : Math.ceil((o.byteLength || o.size) * jg);
}
function wg(o) {
  let i = 0, c = 0;
  for (let r = 0, S = o.length; r < S; r++)
    i = o.charCodeAt(r), i < 128 ? c += 1 : i < 2048 ? c += 2 : i < 55296 || i >= 57344 ? c += 3 : (r++, c += 4);
  return c;
}
function Bm() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Lg(o) {
  let i = "";
  for (let c in o)
    o.hasOwnProperty(c) && (i.length && (i += "&"), i += encodeURIComponent(c) + "=" + encodeURIComponent(o[c]));
  return i;
}
function Hg(o) {
  let i = {}, c = o.split("&");
  for (let r = 0, S = c.length; r < S; r++) {
    let z = c[r].split("=");
    i[decodeURIComponent(z[0])] = decodeURIComponent(z[1]);
  }
  return i;
}
class Yg extends Error {
  constructor(i, c, r) {
    super(i), this.description = c, this.context = r, this.type = "TransportError";
  }
}
class ko extends at {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(i) {
    super(), this.writable = !1, hc(this, i), this.opts = i, this.query = i.query, this.socket = i.socket, this.supportsBinary = !i.forceBase64;
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
  onError(i, c, r) {
    return super.emitReserved("error", new Yg(i, c, r)), this;
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
    const c = Xo(i, this.socket.binaryType);
    this.onPacket(c);
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
  createUri(i, c = {}) {
    return i + "://" + this._hostname() + this._port() + this.opts.path + this._query(c);
  }
  _hostname() {
    const i = this.opts.hostname;
    return i.indexOf(":") === -1 ? i : "[" + i + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(i) {
    const c = Lg(i);
    return c.length ? "?" + c : "";
  }
}
class Gg extends ko {
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
    const c = () => {
      this.readyState = "paused", i();
    };
    if (this._polling || !this.writable) {
      let r = 0;
      this._polling && (r++, this.once("pollComplete", function() {
        --r || c();
      })), this.writable || (r++, this.once("drain", function() {
        --r || c();
      }));
    } else
      c();
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
    const c = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    Og(i, this.socket.binaryType).forEach(c), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, Rg(i, (c) => {
      this.doWrite(c, () => {
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
    const i = this.opts.secure ? "https" : "http", c = this.query || {};
    return this.opts.timestampRequests !== !1 && (c[this.opts.timestampParam] = Bm()), !this.supportsBinary && !c.sid && (c.b64 = 1), this.createUri(i, c);
  }
}
let wm = !1;
try {
  wm = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Xg = wm;
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
      const c = location.protocol === "https:";
      let r = location.port;
      r || (r = c ? "443" : "80"), this.xd = typeof location < "u" && i.hostname !== location.hostname || r !== i.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(i, c) {
    const r = this.request({
      method: "POST",
      data: i
    });
    r.on("success", c), r.on("error", (S, z) => {
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
    i.on("data", this.onData.bind(this)), i.on("error", (c, r) => {
      this.onError("xhr poll error", c, r);
    }), this.pollXhr = i;
  }
}
class Zl extends at {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(i, c, r) {
    super(), this.createRequest = i, hc(this, r), this._opts = r, this._method = r.method || "GET", this._uri = c, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var i;
    const c = jm(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    c.xdomain = !!this._opts.xd;
    const r = this._xhr = this.createRequest(c);
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
    typeof document < "u" && (this._index = Zl.requestsCount++, Zl.requests[this._index] = this);
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
      typeof document < "u" && delete Zl.requests[this._index], this._xhr = null;
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
Zl.requestsCount = 0;
Zl.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Sm);
  else if (typeof addEventListener == "function") {
    const o = "onpagehide" in Tl ? "pagehide" : "unload";
    addEventListener(o, Sm, !1);
  }
}
function Sm() {
  for (let o in Zl.requests)
    Zl.requests.hasOwnProperty(o) && Zl.requests[o].abort();
}
const Vg = (function() {
  const o = Lm({
    xdomain: !1
  });
  return o && o.responseType !== null;
})();
class Zg extends Qg {
  constructor(i) {
    super(i);
    const c = i && i.forceBase64;
    this.supportsBinary = Vg && !c;
  }
  request(i = {}) {
    return Object.assign(i, { xd: this.xd }, this.opts), new Zl(Lm, this.uri(), i);
  }
}
function Lm(o) {
  const i = o.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!i || Xg))
      return new XMLHttpRequest();
  } catch {
  }
  if (!i)
    try {
      return new Tl[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Hm = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Kg extends ko {
  get name() {
    return "websocket";
  }
  doOpen() {
    const i = this.uri(), c = this.opts.protocols, r = Hm ? {} : jm(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(i, c, r);
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
    for (let c = 0; c < i.length; c++) {
      const r = i[c], S = c === i.length - 1;
      Go(r, this.supportsBinary, (z) => {
        try {
          this.doWrite(r, z);
        } catch {
        }
        S && dc(() => {
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
    const i = this.opts.secure ? "wss" : "ws", c = this.query || {};
    return this.opts.timestampRequests && (c[this.opts.timestampParam] = Bm()), this.supportsBinary || (c.b64 = 1), this.createUri(i, c);
  }
}
const Co = Tl.WebSocket || Tl.MozWebSocket;
class Jg extends Kg {
  createSocket(i, c, r) {
    return Hm ? new Co(i, c, r) : c ? new Co(i, c) : new Co(i);
  }
  doWrite(i, c) {
    this.ws.send(c);
  }
}
class Wg extends ko {
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
        const c = Cg(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = i.readable.pipeThrough(c).getReader(), S = Mg();
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
    for (let c = 0; c < i.length; c++) {
      const r = i[c], S = c === i.length - 1;
      this._writer.write(r).then(() => {
        S && dc(() => {
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
function zo(o) {
  if (o.length > 8e3)
    throw "URI too long";
  const i = o, c = o.indexOf("["), r = o.indexOf("]");
  c != -1 && r != -1 && (o = o.substring(0, c) + o.substring(c, r).replace(/:/g, ";") + o.substring(r, o.length));
  let S = $g.exec(o || ""), z = {}, w = 14;
  for (; w--; )
    z[Ig[w]] = S[w] || "";
  return c != -1 && r != -1 && (z.source = i, z.host = z.host.substring(1, z.host.length - 1).replace(/;/g, ":"), z.authority = z.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), z.ipv6uri = !0), z.pathNames = Pg(z, z.path), z.queryKey = ep(z, z.query), z;
}
function Pg(o, i) {
  const c = /\/{2,9}/g, r = i.replace(c, "/").split("/");
  return (i.slice(0, 1) == "/" || i.length === 0) && r.splice(0, 1), i.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function ep(o, i) {
  const c = {};
  return i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, S, z) {
    S && (c[S] = z);
  }), c;
}
const Do = typeof addEventListener == "function" && typeof removeEventListener == "function", rc = [];
Do && addEventListener("offline", () => {
  rc.forEach((o) => o());
}, !1);
class ca extends at {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(i, c) {
    if (super(), this.binaryType = zg, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, i && typeof i == "object" && (c = i, i = null), i) {
      const r = zo(i);
      c.hostname = r.host, c.secure = r.protocol === "https" || r.protocol === "wss", c.port = r.port, r.query && (c.query = r.query);
    } else c.host && (c.hostname = zo(c.host).host);
    hc(this, c), this.secure = c.secure != null ? c.secure : typeof location < "u" && location.protocol === "https:", c.hostname && !c.port && (c.port = this.secure ? "443" : "80"), this.hostname = c.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = c.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, c.transports.forEach((r) => {
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
    }, c), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Hg(this.opts.query)), Do && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, rc.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(i) {
    const c = Object.assign({}, this.opts.query);
    c.EIO = Um, c.transport = i, this.id && (c.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: c,
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
    const i = this.opts.rememberUpgrade && ca.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const c = this.createTransport(i);
    c.open(), this.setTransport(c);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(i) {
    this.transport && this.transport.removeAllListeners(), this.transport = i, i.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (c) => this._onClose("transport close", c));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", ca.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
          const c = new Error("server error");
          c.code = i.data, this._onError(c);
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
    let c = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const S = this.writeBuffer[r].data;
      if (S && (c += Bg(S)), r > 0 && c > this._maxPayload)
        return this.writeBuffer.slice(0, r);
      c += 2;
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
    return i && (this._pingTimeoutTime = 0, dc(() => {
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
  write(i, c, r) {
    return this._sendPacket("message", i, c, r), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(i, c, r) {
    return this._sendPacket("message", i, c, r), this;
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
  _sendPacket(i, c, r, S) {
    if (typeof c == "function" && (S = c, c = void 0), typeof r == "function" && (S = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const z = {
      type: i,
      data: c,
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
    }, c = () => {
      this.off("upgrade", c), this.off("upgradeError", c), i();
    }, r = () => {
      this.once("upgrade", c), this.once("upgradeError", c);
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
    if (ca.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", i), this._onClose("transport error", i);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(i, c) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Do && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = rc.indexOf(this._offlineEventListener);
        r !== -1 && rc.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", i, c), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
ca.protocol = Um;
class tp extends ca {
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
    let c = this.createTransport(i), r = !1;
    ca.priorWebsocketSuccess = !1;
    const S = () => {
      r || (c.send([{ type: "ping", data: "probe" }]), c.once("packet", (G) => {
        if (!r)
          if (G.type === "pong" && G.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", c), !c)
              return;
            ca.priorWebsocketSuccess = c.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (F(), this.setTransport(c), c.send([{ type: "upgrade" }]), this.emitReserved("upgrade", c), c = null, this.upgrading = !1, this.flush());
            });
          } else {
            const ie = new Error("probe error");
            ie.transport = c.name, this.emitReserved("upgradeError", ie);
          }
      }));
    };
    function z() {
      r || (r = !0, F(), c.close(), c = null);
    }
    const w = (G) => {
      const ie = new Error("probe error: " + G);
      ie.transport = c.name, z(), this.emitReserved("upgradeError", ie);
    };
    function k() {
      w("transport closed");
    }
    function U() {
      w("socket closed");
    }
    function q(G) {
      c && G.name !== c.name && z();
    }
    const F = () => {
      c.removeListener("open", S), c.removeListener("error", w), c.removeListener("close", k), this.off("close", U), this.off("upgrading", q);
    };
    c.once("open", S), c.once("error", w), c.once("close", k), this.once("close", U), this.once("upgrading", q), this._upgrades.indexOf("webtransport") !== -1 && i !== "webtransport" ? this.setTimeoutFn(() => {
      r || c.open();
    }, 200) : c.open();
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
    const c = [];
    for (let r = 0; r < i.length; r++)
      ~this.transports.indexOf(i[r]) && c.push(i[r]);
    return c;
  }
}
let lp = class extends tp {
  constructor(i, c = {}) {
    const r = typeof i == "object" ? i : c;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((S) => Fg[S]).filter((S) => !!S)), super(i, r);
  }
};
function np(o, i = "", c) {
  let r = o;
  c = c || typeof location < "u" && location, o == null && (o = c.protocol + "//" + c.host), typeof o == "string" && (o.charAt(0) === "/" && (o.charAt(1) === "/" ? o = c.protocol + o : o = c.host + o), /^(https?|wss?):\/\//.test(o) || (typeof c < "u" ? o = c.protocol + "//" + o : o = "https://" + o), r = zo(o)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const z = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + z + ":" + r.port + i, r.href = r.protocol + "://" + z + (c && c.port === r.port ? "" : ":" + r.port), r;
}
const ap = typeof ArrayBuffer == "function", up = (o) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(o) : o.buffer instanceof ArrayBuffer, Ym = Object.prototype.toString, ip = typeof Blob == "function" || typeof Blob < "u" && Ym.call(Blob) === "[object BlobConstructor]", sp = typeof File == "function" || typeof File < "u" && Ym.call(File) === "[object FileConstructor]";
function Qo(o) {
  return ap && (o instanceof ArrayBuffer || up(o)) || ip && o instanceof Blob || sp && o instanceof File;
}
function oc(o, i) {
  if (!o || typeof o != "object")
    return !1;
  if (Array.isArray(o)) {
    for (let c = 0, r = o.length; c < r; c++)
      if (oc(o[c]))
        return !0;
    return !1;
  }
  if (Qo(o))
    return !0;
  if (o.toJSON && typeof o.toJSON == "function" && arguments.length === 1)
    return oc(o.toJSON(), !0);
  for (const c in o)
    if (Object.prototype.hasOwnProperty.call(o, c) && oc(o[c]))
      return !0;
  return !1;
}
function cp(o) {
  const i = [], c = o.data, r = o;
  return r.data = Uo(c, i), r.attachments = i.length, { packet: r, buffers: i };
}
function Uo(o, i) {
  if (!o)
    return o;
  if (Qo(o)) {
    const c = { _placeholder: !0, num: i.length };
    return i.push(o), c;
  } else if (Array.isArray(o)) {
    const c = new Array(o.length);
    for (let r = 0; r < o.length; r++)
      c[r] = Uo(o[r], i);
    return c;
  } else if (typeof o == "object" && !(o instanceof Date)) {
    const c = {};
    for (const r in o)
      Object.prototype.hasOwnProperty.call(o, r) && (c[r] = Uo(o[r], i));
    return c;
  }
  return o;
}
function rp(o, i) {
  return o.data = jo(o.data, i), delete o.attachments, o;
}
function jo(o, i) {
  if (!o)
    return o;
  if (o && o._placeholder === !0) {
    if (typeof o.num == "number" && o.num >= 0 && o.num < i.length)
      return i[o.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(o))
    for (let c = 0; c < o.length; c++)
      o[c] = jo(o[c], i);
  else if (typeof o == "object")
    for (const c in o)
      Object.prototype.hasOwnProperty.call(o, c) && (o[c] = jo(o[c], i));
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
    return (i.type === he.EVENT || i.type === he.ACK) && oc(i) ? this.encodeAsBinary({
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
    let c = "" + i.type;
    return (i.type === he.BINARY_EVENT || i.type === he.BINARY_ACK) && (c += i.attachments + "-"), i.nsp && i.nsp !== "/" && (c += i.nsp + ","), i.id != null && (c += i.id), i.data != null && (c += JSON.stringify(i.data, this.replacer)), c;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(i) {
    const c = cp(i), r = this.encodeAsString(c.packet), S = c.buffers;
    return S.unshift(r), S;
  }
}
class Vo extends at {
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
    let c;
    if (typeof i == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      c = this.decodeString(i);
      const r = c.type === he.BINARY_EVENT;
      r || c.type === he.BINARY_ACK ? (c.type = r ? he.EVENT : he.ACK, this.reconstructor = new dp(c), c.attachments === 0 && super.emitReserved("decoded", c)) : super.emitReserved("decoded", c);
    } else if (Qo(i) || i.base64)
      if (this.reconstructor)
        c = this.reconstructor.takeBinaryData(i), c && (this.reconstructor = null, super.emitReserved("decoded", c));
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
    let c = 0;
    const r = {
      type: Number(i.charAt(0))
    };
    if (he[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === he.BINARY_EVENT || r.type === he.BINARY_ACK) {
      const z = c + 1;
      for (; i.charAt(++c) !== "-" && c != i.length; )
        ;
      const w = i.substring(z, c);
      if (w != Number(w) || i.charAt(c) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(w);
    }
    if (i.charAt(c + 1) === "/") {
      const z = c + 1;
      for (; ++c && !(i.charAt(c) === "," || c === i.length); )
        ;
      r.nsp = i.substring(z, c);
    } else
      r.nsp = "/";
    const S = i.charAt(c + 1);
    if (S !== "" && Number(S) == S) {
      const z = c + 1;
      for (; ++c; ) {
        const w = i.charAt(c);
        if (w == null || Number(w) != w) {
          --c;
          break;
        }
        if (c === i.length)
          break;
      }
      r.id = Number(i.substring(z, c + 1));
    }
    if (i.charAt(++c)) {
      const z = this.tryParse(i.substr(c));
      if (Vo.isPayloadValid(r.type, z))
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
  static isPayloadValid(i, c) {
    switch (i) {
      case he.CONNECT:
        return Em(c);
      case he.DISCONNECT:
        return c === void 0;
      case he.CONNECT_ERROR:
        return typeof c == "string" || Em(c);
      case he.EVENT:
      case he.BINARY_EVENT:
        return Array.isArray(c) && (typeof c[0] == "number" || typeof c[0] == "string" && op.indexOf(c[0]) === -1);
      case he.ACK:
      case he.BINARY_ACK:
        return Array.isArray(c);
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
      const c = rp(this.reconPack, this.buffers);
      return this.finishedReconstruction(), c;
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
function Em(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
const hp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Vo,
  Encoder: fp,
  get PacketType() {
    return he;
  }
}, Symbol.toStringTag, { value: "Module" }));
function jl(o, i, c) {
  return o.on(i, c), function() {
    o.off(i, c);
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
class Gm extends at {
  /**
   * `Socket` constructor.
   */
  constructor(i, c, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = i, this.nsp = c, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
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
  emit(i, ...c) {
    var r, S, z;
    if (mp.hasOwnProperty(i))
      throw new Error('"' + i.toString() + '" is a reserved event name');
    if (c.unshift(i), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(c), this;
    const w = {
      type: he.EVENT,
      data: c
    };
    if (w.options = {}, w.options.compress = this.flags.compress !== !1, typeof c[c.length - 1] == "function") {
      const F = this.ids++, G = c.pop();
      this._registerAckCallback(F, G), w.id = F;
    }
    const k = (S = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || S === void 0 ? void 0 : S.writable, U = this.connected && !(!((z = this.io.engine) === null || z === void 0) && z._hasPingExpired());
    return this.flags.volatile && !k || (U ? (this.notifyOutgoingListeners(w), this.packet(w)) : this.sendBuffer.push(w)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(i, c) {
    var r;
    const S = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (S === void 0) {
      this.acks[i] = c;
      return;
    }
    const z = this.io.setTimeoutFn(() => {
      delete this.acks[i];
      for (let k = 0; k < this.sendBuffer.length; k++)
        this.sendBuffer[k].id === i && this.sendBuffer.splice(k, 1);
      c.call(this, new Error("operation has timed out"));
    }, S), w = (...k) => {
      this.io.clearTimeoutFn(z), c.apply(this, k);
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
  emitWithAck(i, ...c) {
    return new Promise((r, S) => {
      const z = (w, k) => w ? S(w) : r(k);
      z.withError = !0, c.push(z), this.emit(i, ...c);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(i) {
    let c;
    typeof i[i.length - 1] == "function" && (c = i.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: i,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    i.push((S, ...z) => (this._queue[0], S !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), c && c(S)) : (this._queue.shift(), c && c(null, ...z)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
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
    const c = this._queue[0];
    c.pending && !i || (c.pending = !0, c.tryCount++, this.flags = c.flags, this.emit.apply(this, c.args));
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
  onclose(i, c) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", i, c), this._clearAcks();
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
    const c = i.data || [];
    i.id != null && c.push(this.ack(i.id)), this.connected ? this.emitEvent(c) : this.receiveBuffer.push(Object.freeze(c));
  }
  emitEvent(i) {
    if (this._anyListeners && this._anyListeners.length) {
      const c = this._anyListeners.slice();
      for (const r of c)
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
    const c = this;
    let r = !1;
    return function(...S) {
      r || (r = !0, c.packet({
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
    const c = this.acks[i.id];
    typeof c == "function" && (delete this.acks[i.id], c.withError && i.data.unshift(null), c.apply(this, i.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(i, c) {
    this.id = i, this.recovered = c && this._pid === c, this._pid = c, this.connected = !0, this.emitBuffered(), this._drainQueue(!0), this.emitReserved("connect");
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
      const c = this._anyListeners;
      for (let r = 0; r < c.length; r++)
        if (i === c[r])
          return c.splice(r, 1), this;
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
      const c = this._anyOutgoingListeners;
      for (let r = 0; r < c.length; r++)
        if (i === c[r])
          return c.splice(r, 1), this;
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
      const c = this._anyOutgoingListeners.slice();
      for (const r of c)
        r.apply(this, i.data);
    }
  }
}
function Bu(o) {
  o = o || {}, this.ms = o.min || 100, this.max = o.max || 1e4, this.factor = o.factor || 2, this.jitter = o.jitter > 0 && o.jitter <= 1 ? o.jitter : 0, this.attempts = 0;
}
Bu.prototype.duration = function() {
  var o = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var i = Math.random(), c = Math.floor(i * this.jitter * o);
    o = (Math.floor(i * 10) & 1) == 0 ? o - c : o + c;
  }
  return Math.min(o, this.max) | 0;
};
Bu.prototype.reset = function() {
  this.attempts = 0;
};
Bu.prototype.setMin = function(o) {
  this.ms = o;
};
Bu.prototype.setMax = function(o) {
  this.max = o;
};
Bu.prototype.setJitter = function(o) {
  this.jitter = o;
};
class Bo extends at {
  constructor(i, c) {
    var r;
    super(), this.nsps = {}, this.subs = [], i && typeof i == "object" && (c = i, i = void 0), c = c || {}, c.path = c.path || "/socket.io", this.opts = c, hc(this, c), this.reconnection(c.reconnection !== !1), this.reconnectionAttempts(c.reconnectionAttempts || 1 / 0), this.reconnectionDelay(c.reconnectionDelay || 1e3), this.reconnectionDelayMax(c.reconnectionDelayMax || 5e3), this.randomizationFactor((r = c.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Bu({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(c.timeout == null ? 2e4 : c.timeout), this._readyState = "closed", this.uri = i;
    const S = c.parser || hp;
    this.encoder = new S.Encoder(), this.decoder = new S.Decoder(), this._autoConnect = c.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(i) {
    return arguments.length ? (this._reconnection = !!i, i || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(i) {
    return i === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = i, this);
  }
  reconnectionDelay(i) {
    var c;
    return i === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = i, (c = this.backoff) === null || c === void 0 || c.setMin(i), this);
  }
  randomizationFactor(i) {
    var c;
    return i === void 0 ? this._randomizationFactor : (this._randomizationFactor = i, (c = this.backoff) === null || c === void 0 || c.setJitter(i), this);
  }
  reconnectionDelayMax(i) {
    var c;
    return i === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = i, (c = this.backoff) === null || c === void 0 || c.setMax(i), this);
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
    const c = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const S = jl(c, "open", function() {
      r.onopen(), i && i();
    }), z = (k) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", k), i ? i(k) : this.maybeReconnectOnOpen();
    }, w = jl(c, "error", z);
    if (this._timeout !== !1) {
      const k = this._timeout, U = this.setTimeoutFn(() => {
        S(), z(new Error("timeout")), c.close();
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
    } catch (c) {
      this.onclose("parse error", c);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(i) {
    dc(() => {
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
  socket(i, c) {
    let r = this.nsps[i];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new Gm(this, i, c), this.nsps[i] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(i) {
    const c = Object.keys(this.nsps);
    for (const r of c)
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
    const c = this.encoder.encode(i);
    for (let r = 0; r < c.length; r++)
      this.engine.write(c[r], i.options);
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
  onclose(i, c) {
    var r;
    this.cleanup(), (r = this.engine) === null || r === void 0 || r.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", i, c), this._reconnection && !this.skipReconnect && this.reconnect();
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
      const c = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        i.skipReconnect || (this.emitReserved("reconnect_attempt", i.backoff.attempts), !i.skipReconnect && i.open((S) => {
          S ? (i._reconnecting = !1, i.reconnect(), this.emitReserved("reconnect_error", S)) : i.onreconnect();
        }));
      }, c);
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
const Ui = {};
function fc(o, i) {
  typeof o == "object" && (i = o, o = void 0), i = i || {};
  const c = np(o, i.path || "/socket.io"), r = c.source, S = c.id, z = c.path, w = Ui[S] && z in Ui[S].nsps, k = i.forceNew || i["force new connection"] || i.multiplex === !1 || w;
  let U;
  return k ? U = new Bo(r, i) : (Ui[S] || (Ui[S] = new Bo(r, i)), U = Ui[S]), c.query && !i.query && (i.query = c.queryKey), U.socket(c.path, i);
}
Object.assign(fc, {
  Manager: Bo,
  Socket: Gm,
  io: fc,
  connect: fc
});
let Ya = null;
function yp(o) {
  return Ya ? Ya.auth = { token: o } : Ya = fc({
    autoConnect: !1,
    transports: ["websocket"],
    auth: { token: o }
  }), Ya;
}
function gp() {
  Ya && (Ya.disconnect(), Ya = null);
}
const wo = ["POPULAR", "MAL_ONLY", "HYBRID"], Lo = ["STANDARD", "BALANCED_STRICT", "BALANCED_RELAXED"], Ho = ["OP_ONLY", "ED_ONLY", "MIXED"], uc = {
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
}, ic = {
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
}, sc = {
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
function _m(o) {
  return o ? {
    name: typeof o.name == "string" ? o.name : "",
    isPrivate: !!o.isPrivate,
    maxPlayers: Number.isInteger(o.maxPlayers) ? o.maxPlayers : Bl.maxPlayers,
    roundCount: Number.isInteger(o.roundCount) ? o.roundCount : Bl.roundCount,
    guessSeconds: Number.isInteger(o.guessSeconds) ? o.guessSeconds : Bl.guessSeconds,
    sourceMode: wo.includes(o.sourceMode) ? o.sourceMode : Bl.sourceMode,
    selectionMode: Lo.includes(o.selectionMode) ? o.selectionMode : Bl.selectionMode,
    themeMode: Ho.includes(o.themeMode) ? o.themeMode : Bl.themeMode
  } : { ...Bl };
}
function ul(o, i, c, { timeoutMs: r = 1e4 } = {}) {
  return new Promise((S, z) => {
    let w = !1;
    const k = window.setTimeout(() => {
      w || (w = !0, z(new Error("Request timed out")));
    }, r);
    o.emit(i, c, (U) => {
      if (!w)
        return w = !0, window.clearTimeout(k), U?.ok ? S(U) : z(new Error(U?.error || U?.code || "Request failed"));
    });
  });
}
function sa(o) {
  return String(o || "").trim().toUpperCase();
}
function Sp(o) {
  const c = String(o || "").trim().match(/^\/(?:amq\/lobby|amq\/invite|invite)\/([^/?#]+)/i);
  if (!c) return "";
  try {
    return sa(decodeURIComponent(c[1]));
  } catch {
    return "";
  }
}
function Uu(o, i) {
  const c = sa(o), r = c ? `/amq/lobby/${encodeURIComponent(c)}` : "/amq", S = new URLSearchParams(window.location.search);
  i ? (S.set("i", i), S.delete("inviteToken"), S.delete("lobby")) : (S.delete("lobby"), S.delete("i"), S.delete("inviteToken"));
  const z = S.toString();
  window.history.replaceState({}, "", z ? `${r}?${z}` : r);
}
function Ep(o) {
  const i = String(o || "").trim();
  if (!i) return "";
  const c = i.split(".");
  if (c.length !== 3) return "";
  const r = String(c[0] || "").toUpperCase();
  return /^[A-Z0-9]{4,12}$/.test(r) ? r : "";
}
function _p(o) {
  if (!Number.isFinite(o) || o <= 0) return "00:00";
  const i = Math.ceil(o / 1e3), c = Math.floor(i / 60), r = i % 60;
  return `${String(c).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function ju(o, i, c) {
  const r = Number.parseInt(o, 10);
  return Number.isFinite(r) ? Math.max(i, Math.min(c, r)) : i;
}
function Am(o) {
  const i = String(o || "").replace(/\D+/g, "");
  return i ? i.slice(0, 2) : "";
}
function Tm(o, i) {
  return (i.score || 0) - (o.score || 0);
}
function Ap(o) {
  return Array.isArray(o) ? o.map((i) => ({
    index: Number.parseInt(i?.index, 10),
    audioUrl: typeof i?.audioUrl == "string" ? i.audioUrl : null,
    videoUrl: typeof i?.videoUrl == "string" ? i.videoUrl : null,
    sampleStartSec: Number.isFinite(i?.sampleStartSec) ? i.sampleStartSec : 0,
    sampleDurationSec: Number.isFinite(i?.sampleDurationSec) ? i.sampleDurationSec : 0
  })).filter((i) => Number.isInteger(i.index) && i.index > 0).sort((i, c) => i.index - c.index) : [];
}
function vn(o) {
  return String(o || "").trim();
}
function Nm(o) {
  const i = vn(o).toLowerCase();
  return i ? i.includes("only host") ? "Only the host can start the game." : i.includes("all players must be ready") ? "All players must click Ready before the host can start." : i.includes("not enough players") ? "Not enough players to start. Invite more players or lower the minimum players setting." : i.includes("balanced strict") ? "Balanced strict could not build fair rounds from MAL lists. Try BALANCED_RELAXED or HYBRID." : i.includes("mal_only") ? "MAL_ONLY could not build enough rounds from linked MAL lists. Try HYBRID or POPULAR." : i.includes("playable round media") || i.includes("round seeds") || i.includes("media provider") ? "Could not prepare enough playable songs for this match. Try fewer rounds or different source/theme settings." : i.includes("timed out") ? "Game start timed out. Please try again." : vn(o) : "Could not start the game right now. Please try again.";
}
function Tp(o) {
  const i = vn(o).toLowerCase();
  return i ? i.includes("at least 2 characters") ? "Type at least 2 characters to search." : i.includes("too many") || i.includes("rate") ? "Search is rate-limited right now. Wait a few seconds and try again." : i.includes("timed out") ? "Search timed out. Please try again." : "Search is temporarily unavailable. You can still submit a typed guess." : "Search is temporarily unavailable. You can still submit a typed guess.";
}
function ji(o) {
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
function xm(o) {
  const i = String(o?.name || ""), c = vn(o?.message).toLowerCase();
  return i === "NotAllowedError" || c.includes("notallowederror") || c.includes("user gesture") || c.includes("permission") || c.includes("autoplay") ? "autoplay_blocked" : i === "AbortError" ? "aborted" : i === "NotSupportedError" || c.includes("failed to load") || c.includes("no supported source") || c.includes("not supported") ? "source_unavailable" : "play_failed";
}
function Rp() {
  const o = Om(), i = b.useRef(null), c = b.useRef(null), r = b.useRef(""), S = b.useRef(null), z = b.useRef(!1), w = b.useRef(null), k = b.useRef(!1), U = b.useRef(!1), q = b.useRef(0), F = b.useRef(!1), G = b.useRef(!1), ie = b.useRef(null), Ze = b.useRef(null), Ke = b.useRef(null), it = b.useRef(null), Ct = b.useRef(null), st = b.useRef(null), il = b.useRef(0.25), Ce = b.useRef(null), ft = b.useRef(/* @__PURE__ */ new Map()), qe = b.useRef(/* @__PURE__ */ new Map()), Je = b.useRef(/* @__PURE__ */ new Map()), le = b.useRef(/* @__PURE__ */ new Map()), Ue = b.useRef(/* @__PURE__ */ new Map()), Tt = b.useRef(/* @__PURE__ */ new Map()), sl = b.useRef(/* @__PURE__ */ new Map()), ct = b.useRef([]), We = b.useRef(/* @__PURE__ */ new Set()), Xt = b.useRef(0), qt = b.useRef([]), Le = b.useRef(!1), x = b.useRef(null), L = b.useRef(!1), Z = b.useRef(0), [ge, Se] = b.useState(!0), [y, N] = b.useState(""), [H, D] = b.useState(""), [$, K] = b.useState(""), [me, rt] = b.useState(!1), [W, ra] = b.useState(null), [bn, Ga] = b.useState([]), [Xa, Jl] = b.useState(""), [oa, Wl] = b.useState(!1), [Sn, Nl] = b.useState(!1), [gt, kt] = b.useState(null), [pt, xl] = b.useState(null), [mc, vt] = b.useState(!1), [Qt, cl] = b.useState(Bl), [zt, bt] = b.useState(Bl), [ka, wu] = b.useState(String(Bl.maxPlayers)), [Qa, Va] = b.useState(String(Bl.maxPlayers)), [En, St] = b.useState(""), [Rl, Fe] = b.useState(""), [j, fa] = b.useState(null), [wi, da] = b.useState(null), [P, rl] = b.useState("WAITING"), [Ol, Ml] = b.useState(null), [ha, Li] = b.useState("00:00"), [se, ma] = b.useState(null), [ya, _n] = b.useState([]), [Et, Fl] = b.useState(null), [ga, An] = b.useState(null), [wl, pa] = b.useState([]), [Tn, Dt] = b.useState([]), [He, $e] = b.useState([]), [ol, Nn] = b.useState(""), [Lu, Za] = b.useState(null), [Hu, Vt] = b.useState([]), [va, Zt] = b.useState(!1), [Ll, Kt] = b.useState(!1), [xn, Ae] = b.useState(!1), [Hi, Ka] = b.useState(null), [Cl, Ut] = b.useState(!1), [$l, Yi] = b.useState(0.25), [Yu, Rn] = b.useState(""), [ba, _t] = b.useState(""), [fl, Ye] = b.useState(""), [Gi, Il] = b.useState(!1), [On, Ja] = b.useState({ ready: 0, failed: 0, total: 0 }), [Mn, Cn] = b.useState(""), [Nt, Hl] = b.useState(!1), [Wa, dl] = b.useState(null), [je, Xi] = b.useState(null), [Fa, qn] = b.useState(""), yc = b.useCallback((f) => {
    const p = Am(f);
    wu(p), p && cl((O) => ({
      ...O,
      maxPlayers: ju(p, 1, 8)
    }));
  }, []), ki = b.useCallback((f) => {
    const p = Am(f);
    Va(p), p && bt((O) => ({
      ...O,
      maxPlayers: ju(p, 1, 8)
    }));
  }, []), $a = b.useCallback(() => {
    const f = ju(Qt.maxPlayers, 1, 8), p = ka ? ju(ka, 1, 8) : f;
    return cl((O) => ({ ...O, maxPlayers: p })), wu(String(p)), p;
  }, [Qt.maxPlayers, ka]), Sa = b.useCallback(() => {
    const f = ju(zt.maxPlayers, 1, 8), p = Qa ? ju(Qa, 1, 8) : f;
    return bt((O) => ({ ...O, maxPlayers: p })), Va(String(p)), p;
  }, [zt.maxPlayers, Qa]);
  b.useEffect(() => {
    c.current = j;
  }, [j]), b.useEffect(() => {
    r.current = Rl;
  }, [Rl]), b.useEffect(() => {
    il.current = $l;
  }, [$l]), b.useEffect(() => {
    if (!oa && !Sn && !gt && !pt) return;
    const f = (p) => {
      if (p.key === "Escape") {
        if (pt) {
          xl(null);
          return;
        }
        if (gt) {
          kt(null);
          return;
        }
        if (Sn) {
          Nl(!1);
          return;
        }
        Wl(!1);
      }
    };
    return window.addEventListener("keydown", f), () => window.removeEventListener("keydown", f);
  }, [oa, pt, gt, Sn]), b.useEffect(() => {
    if (!pt) return;
    (j?.players || []).some((p) => p.userId === pt.userId) || xl(null);
  }, [pt, j]), b.useEffect(() => {
    if (!gt) return;
    (j?.players || []).some((p) => p.userId === gt.userId) || kt(null);
  }, [gt, j]), b.useEffect(() => {
    if (!j || j.status !== "WAITING") {
      Nl(!1);
      return;
    }
    if (Sn) return;
    const f = _m(j);
    bt(f), Va(String(f.maxPlayers));
  }, [j, Sn]), b.useEffect(() => {
    if (!H) return;
    const f = window.setTimeout(() => D(""), 7e3);
    return () => window.clearTimeout(f);
  }, [H]), b.useEffect(() => {
    if (!$) return;
    const f = window.setTimeout(() => K(""), 4500);
    return () => window.clearTimeout(f);
  }, [$]), b.useEffect(() => {
    if (!va || P !== "GUESSING") return;
    const f = (p) => {
      p.key === "Escape" && (Zt(!1), it.current?.blur?.());
    };
    return window.addEventListener("keydown", f), () => {
      window.removeEventListener("keydown", f);
    };
  }, [P, va]), b.useEffect(() => {
    P !== "GUESSING" && Zt(!1);
  }, [P]);
  const Qi = b.useMemo(() => {
    const f = /* @__PURE__ */ new Map();
    for (const p of j?.players || [])
      f.set(p.userId, p.displayName);
    return f;
  }, [j]), Gu = b.useCallback((f) => Qi.get(f) || `User ${f}`, [Qi]), Pl = b.useCallback(() => {
    st.current && (window.clearTimeout(st.current), st.current = null);
  }, []), Ge = b.useCallback(() => {
    Pl(), ie.current && ie.current.pause(), Ze.current && Ze.current.pause(), Ct.current = null, Ae(!1);
  }, [Pl]), hl = b.useCallback(() => {
    const f = Ke.current;
    if (f) {
      f.pause();
      try {
        f.currentTime = 0;
      } catch {
      }
    }
  }, []), ml = b.useCallback(() => {
    const f = qt.current;
    if (!Array.isArray(f) || f.length === 0) {
      Ja({ ready: 0, failed: 0, total: 0 });
      return;
    }
    let p = 0, O = 0;
    for (const B of f) {
      const Q = qe.current.get(B);
      Q === "ready" ? p += 1 : Q === "failed" && (O += 1);
    }
    Ja({ ready: p, failed: O, total: f.length });
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
      sl.current.delete(B), Tt.current.delete(B), Ue.current.delete(B);
    }
  }, []), Jt = b.useCallback(() => {
    Le.current = !0, ft.current.clear(), qe.current.clear(), Je.current.clear(), le.current.clear(), ct.current = [], We.current.clear(), Xt.current = 0, qt.current = [], x.current = null, L.current = !1, ql(), Il(!1), Ja({ ready: 0, failed: 0, total: 0 }), Cn(""), Hl(!1);
  }, [ql]), Xu = b.useCallback((f, p = "video") => {
    const O = typeof f == "string" ? f.trim() : "";
    if (!O)
      return Promise.reject(new Error("Missing media url"));
    const B = Ue.current.get(O);
    if (B === "ready")
      return Promise.resolve(!0);
    const Q = Tt.current.get(O);
    if (B === "loading" && Q)
      return Q;
    Ue.current.set(O, "loading");
    const ue = new Promise((ye, Xe) => {
      if (Le.current) {
        Ue.current.set(O, "failed"), Xe(new Error("Preload manager was reset"));
        return;
      }
      const ae = document.createElement(p === "audio" ? "audio" : "video");
      ae.preload = "auto", ae.muted = !0, ae.playsInline = !0, ae.style.position = "absolute", ae.style.left = "-10000px", ae.style.width = "1px", ae.style.height = "1px", ae.style.opacity = "0";
      const De = (Ta) => {
        if (Pe(), Ta) {
          Ue.current.set(O, "ready"), sl.current.set(O, ae), ye(!0);
          return;
        }
        Ue.current.set(O, "failed"), sl.current.delete(O), ae.parentNode && ae.parentNode.removeChild(ae), Xe(new Error("Media preload failed"));
      }, Pe = () => {
        window.clearTimeout(Ot), ae.removeEventListener("loadeddata", Rt), ae.removeEventListener("canplaythrough", Rt), ae.removeEventListener("error", en);
      }, Rt = () => De(!0), en = () => De(!1), Ot = window.setTimeout(() => De(!1), 12e3);
      ae.addEventListener("loadeddata", Rt, { once: !0 }), ae.addEventListener("canplaythrough", Rt, { once: !0 }), ae.addEventListener("error", en, { once: !0 }), document.body.appendChild(ae), ae.src = O, ae.load();
    }).finally(() => {
      Ue.current.get(O) !== "loading" && Tt.current.delete(O);
    });
    return Tt.current.set(O, ue), ue;
  }, []), Ia = b.useCallback(async (f) => {
    const p = Number.parseInt(f, 10);
    if (!Number.isInteger(p) || p <= 0 || Le.current) return !1;
    const O = Je.current.get(p);
    if (O) return O;
    if (qe.current.get(p) === "ready") return !0;
    const Q = ft.current.get(p);
    if (!Q)
      return qe.current.set(p, "failed"), ml(), !1;
    const ue = [Q.audioUrl, Q.videoUrl].filter((Xe, ae, De) => Xe && De.indexOf(Xe) === ae);
    le.current.set(p, new Set(ue)), qe.current.set(p, "loading"), ml();
    const ye = (async () => {
      if (ue.length === 0)
        return qe.current.set(p, "failed"), !1;
      const ae = (await Promise.allSettled(ue.map((De) => {
        const Pe = Q.audioUrl && De === Q.audioUrl ? "audio" : "video";
        return Xu(De, Pe);
      }))).some((De) => De.status === "fulfilled");
      return qe.current.set(p, ae ? "ready" : "failed"), ae;
    })().finally(() => {
      Je.current.delete(p), ml();
    });
    return Je.current.set(p, ye), ye;
  }, [Xu, ml]), Pa = b.useCallback(() => {
    if (!Le.current)
      for (; Xt.current < bp && ct.current.length > 0; ) {
        const f = ct.current.shift();
        We.current.delete(f);
        const p = qe.current.get(f);
        p === "ready" || p === "loading" || (Xt.current += 1, Ia(f).catch(() => !1).finally(() => {
          Xt.current = Math.max(0, Xt.current - 1), Pa();
        }));
      }
  }, [Ia]), yl = b.useCallback((f = []) => {
    for (const p of f) {
      const O = Number.parseInt(p, 10);
      if (!Number.isInteger(O) || O <= 0 || !ft.current.has(O)) continue;
      const B = qe.current.get(O);
      B === "ready" || B === "loading" || We.current.has(O) || (qe.current.set(O, "pending"), ct.current.push(O), We.current.add(O));
    }
    ml(), Pa();
  }, [Pa, ml]), jt = b.useCallback(async (f, p = 2e4) => {
    const O = (Array.isArray(f) ? f : []).map((Q) => Number.parseInt(Q, 10)).filter((Q) => Number.isInteger(Q) && Q > 0);
    if (O.length === 0) return { ok: !0 };
    const B = Date.now();
    for (; !Le.current; ) {
      const Q = O.filter((ye) => qe.current.get(ye) === "failed");
      if (Q.length > 0)
        return { ok: !1, reason: "failed", failedIndexes: Q };
      if (O.every((ye) => qe.current.get(ye) === "ready")) return { ok: !0 };
      if (Date.now() - B >= p)
        return { ok: !1, reason: "timeout" };
      await new Promise((ye) => window.setTimeout(ye, 120));
    }
    return { ok: !1, reason: "cancelled" };
  }, []), zn = b.useCallback((f) => !f || f.ok ? "" : f.reason === "failed" ? "Failed to preload required round media. Retry to continue." : f.reason === "timeout" ? "Preloading required media timed out. Retry to continue." : "Preloading was interrupted. Retry to continue.", []), Dn = b.useCallback((f = []) => {
    const p = new Set(
      (Array.isArray(f) ? f : []).map((B) => Number.parseInt(B, 10)).filter((B) => Number.isInteger(B) && B > 0)
    ), O = /* @__PURE__ */ new Set();
    for (const [B, Q] of le.current)
      if (p.has(B))
        for (const ue of Q || []) O.add(ue);
    for (const B of [...le.current.keys()])
      p.has(B) || (le.current.delete(B), qe.current.delete(B), Je.current.delete(B));
    ct.current = ct.current.filter((B) => p.has(B)), We.current = new Set(ct.current), ql(O);
  }, [ql]), Bt = b.useCallback(async (f, p) => {
    const O = sa(f), B = Number.parseInt(p, 10);
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
  }, []), eu = b.useCallback(async ({ sessionId: f, lobbyCode: p, manifest: O }) => {
    Jt(), Le.current = !1;
    const B = Ap(O);
    ft.current = new Map(B.map((ye) => [ye.index, ye])), x.current = Number.parseInt(f, 10) || null, L.current = !1, Cn(""), Hl(!1);
    const Q = B.slice(0, pp).map((ye) => ye.index);
    if (qt.current = Q, ml(), Q.length === 0) {
      await Bt(p, x.current);
      return;
    }
    Il(!0), yl(Q);
    const ue = await jt(Q);
    if (!Le.current) {
      if (!ue.ok) {
        Cn(zn(ue)), Il(!0);
        return;
      }
      Il(!1), await Bt(p, x.current);
    }
  }, [
    zn,
    yl,
    Jt,
    Bt,
    ml,
    jt
  ]), tu = b.useCallback(async () => {
    if (Le.current || L.current) return;
    const f = c.current?.code, p = x.current, O = qt.current;
    if (!f || !Number.isInteger(p) || !Array.isArray(O) || O.length === 0)
      return;
    Hl(!0), Cn(""), Il(!0), yl(O);
    const B = await jt(O);
    if (!Le.current) {
      if (!B.ok) {
        Cn(zn(B)), Hl(!1);
        return;
      }
      Hl(!1), Il(!1), await Bt(f, p);
    }
  }, [zn, yl, Bt, jt]), ku = b.useCallback((f) => {
    const p = Number.parseInt(f, 10);
    if (!Number.isInteger(p) || p <= 0) return;
    const O = [];
    for (let B = 0; B < vp; B += 1)
      O.push(p + B);
    yl(O), Dn(O);
  }, [yl, Dn]), Ea = b.useCallback((f) => {
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
  }, []), Qu = b.useCallback(async (f, p) => {
    const O = Ce.current;
    if (Number.isFinite(O) && O >= 0) return O;
    const B = Number.isFinite(p?.sampleStartSec) ? Math.max(0, p.sampleStartSec) : 0;
    if (B > 0)
      return Ce.current = B, B;
    const Q = Number.isFinite(p?.sampleDurationSec) ? Math.max(1, p.sampleDurationSec) : 10, ue = await _a(f);
    if (!Number.isFinite(ue) || ue <= 0)
      return Ce.current = B, B;
    const ye = Math.floor(ue - Q);
    if (ye <= 0)
      return Ce.current = 0, 0;
    const Xe = `${se?.roundId || 0}:${p?.animeId || 0}:${Q}`, ae = Ea(Xe), De = Math.floor(ae * (ye + 1));
    return Ce.current = De, De;
  }, [se?.roundId, Ea, _a]), Ie = b.useCallback(async () => {
    const f = Ke.current;
    if (!f) return !1;
    f.volume = Math.max(0, Math.min(1, Number(il.current))), f.muted = !1;
    try {
      return await f.play(), Ut(!1), Ye(""), !0;
    } catch (p) {
      const O = xm(p);
      return O === "autoplay_blocked" ? (Ut(!0), !1) : (O !== "aborted" && Ye('Could not play solution video in this browser. Use "Open video source".'), Ut(!1), !1);
    }
  }, []), Wt = b.useCallback(async ({ isAutoplay: f = !1 } = {}) => {
    const p = ie.current, O = Ze.current, B = se?.sample;
    if (P !== "GUESSING" || !p && !O || !B?.audioUrl && !B?.videoUrl) return !1;
    Pl(), Ge(), _t("");
    const Q = Number.isFinite(B.sampleDurationSec) ? Math.max(1, B.sampleDurationSec) : 10, ue = Math.max(0, Math.min(1, Number(il.current))), ye = async (Pe, Rt) => {
      if (!Pe) return { ok: !1, reason: "source_unavailable" };
      Pe.volume = ue, Pe.muted = !1;
      const en = await Qu(Pe, B);
      try {
        Pe.currentTime = en;
      } catch {
      }
      try {
        return await Pe.play(), Ct.current = Pe, Ka(Rt), Kt(!1), _t(""), Ae(!0), st.current = window.setTimeout(() => {
          const Ot = Ct.current;
          Ot && (Ot.pause(), Ae(!1), Ct.current = null);
        }, Q * 1e3), { ok: !0, reason: null };
      } catch (Ot) {
        return { ok: !1, reason: xm(Ot) };
      }
    }, Xe = B?.audioUrl ? await ye(p, "audio") : { ok: !1, reason: "source_unavailable" };
    if (Xe.ok) return !0;
    const ae = B?.videoUrl ? await ye(O, "video") : { ok: !1, reason: "source_unavailable" };
    if (ae.ok) return !0;
    const De = [Xe.reason, ae.reason].filter(Boolean);
    return De.includes("autoplay_blocked") ? (Kt(!0), _t(ji("autoplay_blocked")), !1) : (Kt(!1), De.includes("source_unavailable") ? (_t(ji("source_unavailable")), !1) : ((!De.includes("aborted") || !f) && _t(ji("play_failed")), !1));
  }, [Pl, P, Qu, se, Ge]), Ft = b.useCallback(() => {
    Jt(), Ge(), hl(), da(null), rl("WAITING"), Ml(null), ma(null), _n([]), Fl(null), An(null), pa([]), Dt([]), $e([]), Nn(""), Za(null), Vt([]), Rn(""), _t(""), Ye(""), Kt(!1), Ka(null), Ut(!1), dl(null);
  }, [Jt, Ge, hl]), Un = b.useCallback((f) => {
    const p = f || {}, O = p.phase || "WAITING";
    if (rl(O), ma(p.round || null), pa(Array.isArray(p.readyUserIds) ? p.readyUserIds : []), Ml(p.endsAt || p.solution?.endsAt || null), p?.round?.isSuddenDeath ? dl((B) => ({
      roundIndex: Number.parseInt(p?.round?.index, 10) || B?.roundIndex || null,
      tiedUserIds: Array.isArray(B?.tiedUserIds) ? B.tiedUserIds : []
    })) : dl(null), O === "ANSWERS_REVEAL") {
      _n(Array.isArray(p.answers) ? p.answers : []), Fl(null);
      return;
    }
    if (O === "SOLUTION_REVEAL") {
      _n(Array.isArray(p.answers) ? p.answers : []), Fl(p.solution || null);
      return;
    }
    O === "WAITING" && (_n([]), Fl(null));
  }, []), Aa = b.useCallback(async (f) => {
    const p = i.current;
    if (!(!p?.connected || !f))
      try {
        const O = await ul(p, "round:sync", { lobbyCode: f });
        Un(O?.state || {});
      } catch (O) {
        D(O.message);
      }
  }, [Un]), xt = b.useCallback(async () => {
    if (!k.current) {
      k.current = !0, vt(!0);
      try {
        const f = await Du("/game/lobbies");
        Ga(Array.isArray(f.lobbies) ? f.lobbies : []);
      } finally {
        k.current = !1, vt(!1);
      }
    }
  }, []), jn = b.useCallback(async (f, p) => {
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
    const B = sa(f);
    if (!B) return D("Lobby code is required");
    const Q = !!O?.fromDirectory, ue = Date.now();
    if (!U.current && !(q.current > ue)) {
      U.current = !0, N("join"), D(""), K("");
      try {
        const ye = {};
        p && (ye.inviteToken = p);
        const Xe = await Du(`/game/lobbies/${B}/join`, {
          method: "POST",
          body: JSON.stringify(ye)
        });
        fa(Xe.lobby), Fe(p || ""), Ft(), Uu(B, p || ""), await jn(B, p || ""), K(`Joined lobby ${B}`);
      } catch (ye) {
        q.current = Date.now() + 800, D(xp(ye?.message)), (Q || Np(ye?.message)) && (Ga((Xe) => Xe.filter((ae) => ae?.code !== B)), xt().catch(() => {
        }));
      } finally {
        U.current = !1, N("");
      }
    }
  }, [Ft, xt, jn]), lu = b.useCallback(async () => {
    N("create"), D(""), K("");
    try {
      const f = $a(), p = {
        ...Qt,
        maxPlayers: f
      }, O = await Du("/game/lobbies", {
        method: "POST",
        body: JSON.stringify(p)
      });
      fa(O.lobby), Wl(!1), Ft(), Uu(O.lobby.code, ""), await jn(O.lobby.code, ""), K(`Created lobby ${O.lobby.code}`);
    } catch (f) {
      D(f.message);
    } finally {
      N("");
    }
  }, [Ft, $a, Qt, jn]), Vi = b.useCallback(() => {
    if (!j || j.status !== "WAITING") return;
    const f = _m(j);
    bt(f), Va(String(f.maxPlayers)), Nl(!0);
  }, [j]), gc = b.useCallback(async () => {
    if (!(!j?.code || !i.current)) {
      N("settings"), D("");
      try {
        const f = Sa(), p = {
          ...zt,
          maxPlayers: f
        };
        await ul(i.current, "lobby:update_settings", {
          lobbyCode: j.code,
          settings: p
        }), Nl(!1), K("Lobby settings updated.");
      } catch (f) {
        D(f.message);
      } finally {
        N("");
      }
    }
  }, [Sa, zt, j]), pc = b.useCallback(async () => {
    if (j?.code) {
      N("leave"), D("");
      try {
        i.current?.connected && await ul(i.current, "lobby:leave", { lobbyCode: j.code });
      } catch (f) {
        D(f.message);
      } finally {
        fa(null), Fe(""), Nl(!1), kt(null), xl(null), Uu("", ""), Ft(), N(""), xt().catch(() => {
        });
      }
    }
  }, [Ft, xt, j]), vc = b.useCallback(async () => {
    if (!(!j?.code || !i.current)) {
      N("start"), D("");
      try {
        await ul(i.current, "game:start", { lobbyCode: j.code }, { timeoutMs: 12e4 });
      } catch (f) {
        D(Nm(f.message));
      } finally {
        N("");
      }
    }
  }, [j]), Vu = b.useCallback(async () => {
    if (!(!j?.code || !se?.roundId || !i.current)) {
      N("guess"), D("");
      try {
        await ul(i.current, "round:submit_guess", {
          lobbyCode: j.code,
          roundId: se.roundId,
          guessText: ol.trim(),
          guessAnimeId: Number.isInteger(Lu) ? Lu : null
        }), K("Guess saved");
      } catch (f) {
        D(f.message);
      } finally {
        N("");
      }
    }
  }, [Lu, ol, j, se]), bc = b.useCallback(async () => {
    if (!(!j?.code || !i.current || !W)) {
      N("ready"), D("");
      try {
        const f = wl.includes(W.id);
        await ul(i.current, "round:set_ready", { lobbyCode: j.code, ready: !f });
      } catch (f) {
        D(f.message);
      } finally {
        N("");
      }
    }
  }, [j, wl, W]), Sc = b.useCallback(async () => {
    if (!(!j?.code || !i.current || !W)) {
      N("lobby-ready"), D("");
      try {
        const f = Tn.includes(W.id);
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
  }, [j, Tn, W]), Ec = b.useCallback((f) => {
    if (!j?.code || !W || j.host?.id !== W.id) return;
    const p = Number.parseInt(f?.userId, 10);
    if (!Number.isInteger(p) || p === W?.id) return;
    const O = f?.displayName || `User ${p}`;
    kt(null), xl({
      userId: p,
      displayName: O
    });
  }, [j, W]), _c = b.useCallback((f) => {
    if (!j?.code || !W || j.host?.id !== W.id) return;
    const p = Number.parseInt(f?.userId, 10);
    if (!Number.isInteger(p) || p === W?.id) return;
    const O = f?.displayName || `User ${p}`;
    xl(null), kt({
      userId: p,
      displayName: O
    });
  }, [j, W]), Ac = b.useCallback(async () => {
    if (!(!j?.code || !i.current || !gt) && !G.current) {
      G.current = !0, N("promote"), D("");
      try {
        await ul(i.current, "lobby:promote", {
          lobbyCode: j.code,
          userId: gt.userId
        }), K(`${gt.displayName} is now the host.`), kt(null);
      } catch (f) {
        D(f.message);
      } finally {
        G.current = !1, N("");
      }
    }
  }, [j, gt]), Zi = b.useCallback(async () => {
    if (!(!j?.code || !i.current || !pt) && !F.current) {
      F.current = !0, N("kick"), D("");
      try {
        await ul(i.current, "lobby:kick", {
          lobbyCode: j.code,
          userId: pt.userId
        }), K(`${pt.displayName} was kicked from the lobby.`), xl(null);
      } catch (f) {
        D(f.message);
      } finally {
        F.current = !1, N("");
      }
    }
  }, [pt, j]), Tc = b.useCallback(async () => {
    if (j?.code) {
      N("invite"), D(""), K("");
      try {
        const f = await Du(`/game/lobbies/${j.code}/invite`);
        f.inviteToken ? (Fe(f.inviteToken), Uu(j.code, f.inviteToken)) : (Fe(""), Uu(j.code, "")), navigator.clipboard?.writeText ? (await navigator.clipboard.writeText(f.inviteUrl), K("Invite link copied")) : K(f.inviteUrl);
      } catch (f) {
        D(f.message);
      } finally {
        N("");
      }
    }
  }, [j]);
  b.useEffect(() => {
    if (!o) return gm();
    const f = yp(o);
    i.current = f;
    const p = async () => {
      rt(!0), D("");
      try {
        S.current ? (await ul(f, "lobby:join", S.current), await Aa(S.current.lobbyCode), S.current = null) : c.current?.code ? (await ul(f, "lobby:join", {
          lobbyCode: c.current.code,
          ...r.current ? { inviteToken: r.current } : {}
        }), await Aa(c.current.code)) : xt().catch(() => {
        });
      } catch (I) {
        D(I.message);
      }
    }, O = () => rt(!1), B = (I) => {
      const ke = String(I?.code || ""), $t = vn(I?.message);
      if (ke === "game_start_failed") {
        D(Nm($t));
        return;
      }
      D($t || "Realtime error");
    }, Q = ({ lobby: I }) => {
      I && (fa(I), I.status !== "WAITING" && (Dt([]), $e([])));
    }, ue = ({ sessionId: I, config: ke, preloadManifest: $t }) => {
      da({ sessionId: I, ...ke || {} }), An(null), rl("PENDING"), dl(null), Dt([]), $e([]), c.current?.code && eu({
        sessionId: I,
        lobbyCode: c.current.code,
        manifest: $t
      }).catch(() => {
      });
    }, ye = (I) => {
      Ge(), hl(), Il(!1), Cn(""), Hl(!1), rl("GUESSING"), Ml(I?.endsAt || null), ma(I || null), _n([]), Fl(null), An(null), pa([]), Nn(""), Za(null), Vt([]), Rn(""), _t(""), Ye(""), Kt(!1), Ka(null), Ut(!1), Ce.current = null, I?.isSuddenDeath ? dl((ke) => ({
        roundIndex: Number.parseInt(I?.index, 10) || ke?.roundIndex || null,
        tiedUserIds: Array.isArray(ke?.tiedUserIds) ? ke.tiedUserIds : []
      })) : dl(null), ku(I?.index);
    }, Xe = (I) => {
      rl("ANSWERS_REVEAL"), Ml(I?.endsAt || null), _n(Array.isArray(I?.answers) ? I.answers : []);
    }, ae = (I) => {
      Ge(), rl("SOLUTION_REVEAL"), Ml(I?.endsAt || null), Fl(I || null), _t(""), Ye(""), Ut(!1);
    }, De = (I) => {
      Jt(), Ge(), hl(), rl("FINISHED"), Ml(null), _t(""), Ye(""), An(I || null), dl(null), Dt([]), $e([]);
    }, Pe = (I) => {
      const ke = Array.isArray(I?.tiedUserIds) ? I.tiedUserIds.filter((tn) => Number.isInteger(tn)) : [], $t = Number.parseInt(I?.roundIndex, 10);
      dl({
        roundIndex: Number.isInteger($t) ? $t : null,
        tiedUserIds: ke
      });
      const Ln = ke.map((tn) => (c.current?.players || []).find((es) => es.userId === tn)?.displayName || null).filter(Boolean);
      Ln.length > 0 ? K(`Sudden Death started: ${Ln.join(", ")} are tied for first.`) : K("Sudden Death started: tie for first place.");
    }, Rt = (I) => {
      pa(Array.isArray(I?.readyUserIds) ? I.readyUserIds : []);
    }, en = (I) => {
      Dt(Array.isArray(I?.readyUserIds) ? I.readyUserIds : []), $e(Array.isArray(I?.requiredUserIds) ? I.requiredUserIds : []);
    }, Ot = (I) => {
      const ke = sa(I?.lobbyCode), $t = sa(c.current?.code);
      if ($t && ke && ke !== $t) return;
      const Ln = Number.parseInt(I?.cooldownUntil, 10);
      let tn = "You were kicked from the lobby.";
      if (Number.isFinite(Ln)) {
        const $u = Ln - Date.now();
        $u > 0 && (tn = `You were kicked from the lobby. Rejoin available in about ${Math.max(1, Math.ceil($u / 1e3))}s.`);
      }
      D(tn), fa(null), Fe(""), Nl(!1), kt(null), xl(null), Uu("", ""), Ft(), xt().catch(() => {
      });
    }, Ta = () => {
      c.current?.code || (w.current && window.clearTimeout(w.current), w.current = window.setTimeout(() => {
        w.current = null, xt().catch(() => {
        });
      }, 150));
    }, Fu = (I) => {
      const ke = I?.status || null;
      !ke || typeof ke != "object" || (Xi(ke), qn(""));
    };
    return f.on("connect", p), f.on("disconnect", O), f.on("error", B), f.on("lobby:state", Q), f.on("lobby:directory_changed", Ta), f.on("game:started", ue), f.on("round:started", ye), f.on("round:answers_reveal", Xe), f.on("round:solution", ae), f.on("game:finished", De), f.on("game:sudden_death", Pe), f.on("round:ready_state", Rt), f.on("lobby:ready_state", en), f.on("lobby:kicked", Ot), f.on("media:source_status", Fu), f.connect(), () => {
      f.off("connect", p), f.off("disconnect", O), f.off("error", B), f.off("lobby:state", Q), f.off("lobby:directory_changed", Ta), f.off("game:started", ue), f.off("round:started", ye), f.off("round:answers_reveal", Xe), f.off("round:solution", ae), f.off("game:finished", De), f.off("game:sudden_death", Pe), f.off("round:ready_state", Rt), f.off("lobby:ready_state", en), f.off("lobby:kicked", Ot), f.off("media:source_status", Fu), w.current && (window.clearTimeout(w.current), w.current = null), gp();
    };
  }, [eu, Ft, xt, ku, Aa, Jt, Ge, hl, o]), b.useEffect(() => {
    if (!o) return;
    let f = !0;
    return (async () => {
      try {
        const p = await Du("/auth/me");
        if (!f) return;
        ra(p), await xt();
      } catch {
        gm();
        return;
      } finally {
        f && Se(!1);
      }
    })(), () => {
      f = !1;
    };
  }, [xt, o]), b.useEffect(() => {
    if (ge || !W || z.current) return;
    z.current = !0;
    const f = new URLSearchParams(window.location.search), p = f.get("i") || f.get("inviteToken") || "", O = Sp(window.location.pathname) || sa(f.get("lobby")) || Ep(p);
    O && (St(O), Fe(p), Yl(O, p).catch(() => {
    }));
  }, [Yl, ge, W]), b.useEffect(() => {
    if (!Ol) return Li("00:00");
    const f = () => Li(_p(new Date(Ol).getTime() - Date.now()));
    f();
    const p = window.setInterval(f, 250);
    return () => window.clearInterval(p);
  }, [Ol]), b.useEffect(() => {
    if (P !== "GUESSING") {
      Z.current += 1, Vt([]), Rn("");
      return;
    }
    const f = ol.trim();
    if (f.length < 2) {
      Z.current += 1, Vt([]), Rn("");
      return;
    }
    const p = ++Z.current, O = window.setTimeout(async () => {
      try {
        const B = await Du("/game/search", {
          method: "POST",
          body: JSON.stringify({ query: f, limit: 8 })
        });
        if (Z.current !== p) return;
        Vt(Array.isArray(B.results) ? B.results : []), Rn("");
      } catch (B) {
        if (Z.current !== p) return;
        Vt([]), Rn(Tp(B?.message));
      }
    }, 120);
    return () => window.clearTimeout(O);
  }, [ol, P]), b.useEffect(() => {
    if (!!!(se?.sample?.audioUrl || se?.sample?.videoUrl)) {
      Kt(!1), Ge();
      return;
    }
    if (P !== "GUESSING") {
      (P === "SOLUTION_REVEAL" || P === "WAITING" || P === "FINISHED" || P === "PENDING") && (Kt(!1), Ge());
      return;
    }
    let p = !1;
    const O = window.setTimeout(() => {
      p || Wt({ isAutoplay: !0 }).catch(() => {
      });
    }, 0);
    return () => {
      p = !0, window.clearTimeout(O);
    };
  }, [P, Wt, se?.roundId, se?.sample?.audioUrl, se?.sample?.videoUrl, Ge]), b.useEffect(() => {
    Ce.current = null;
  }, [se?.roundId]), b.useEffect(() => {
    if (!Ll || P !== "GUESSING") return;
    const f = () => {
      Wt({ isAutoplay: !1 }).catch(() => {
      });
    };
    return window.addEventListener("pointerdown", f), window.addEventListener("keydown", f), () => {
      window.removeEventListener("pointerdown", f), window.removeEventListener("keydown", f);
    };
  }, [P, Wt, Ll]), b.useEffect(() => {
    if (P !== "SOLUTION_REVEAL" || !Et?.video) {
      Ut(!1), Ye(""), hl();
      return;
    }
    let f = !1;
    const p = window.setTimeout(() => {
      f || Ie().catch(() => {
      });
    }, 0);
    return () => {
      f = !0, window.clearTimeout(p), hl();
    };
  }, [P, Ie, Et?.video, hl]), b.useEffect(() => {
    if (!Cl || P !== "SOLUTION_REVEAL") return;
    const f = () => {
      Ie().catch(() => {
      });
    };
    return window.addEventListener("pointerdown", f), window.addEventListener("keydown", f), () => {
      window.removeEventListener("pointerdown", f), window.removeEventListener("keydown", f);
    };
  }, [P, Ie, Cl]), b.useEffect(() => {
    const f = Math.max(0, Math.min(1, Number($l)));
    ie.current && (ie.current.volume = f), Ze.current && (Ze.current.volume = f), Ke.current && (Ke.current.volume = f);
  }, [$l, se?.roundId, Et?.video]);
  const Zu = b.useMemo(() => !!(j && W && j.host?.id === W.id), [j, W]), Nc = b.useMemo(() => !!(W && wl.includes(W.id)), [wl, W]), Bn = b.useMemo(() => {
    const f = Array.isArray(He) ? He.filter((p) => Number.isInteger(p)) : [];
    return f.length > 0 ? f : (j?.players || []).map((p) => p.userId).filter((p) => Number.isInteger(p));
  }, [j, He]), Gl = b.useMemo(() => {
    const f = new Set(Array.isArray(Tn) ? Tn : []);
    return Bn.filter((p) => f.has(p));
  }, [Tn, Bn]), xc = b.useMemo(() => !!(W && Gl.includes(W.id)), [W, Gl]), Ki = b.useMemo(() => !j || j.status !== "WAITING" ? !1 : Bn.length > 0 && Gl.length === Bn.length, [j, Gl.length, Bn.length]), Ku = b.useMemo(() => !!(se?.sample?.audioUrl || se?.sample?.videoUrl), [se]), Ji = b.useMemo(() => !!(se && Ku && (P === "GUESSING" || P === "ANSWERS_REVEAL")), [Ku, P, se]), Ju = b.useMemo(() => {
    const f = Number.parseInt(se?.sample?.sampleDurationSec, 10);
    return !Number.isFinite(f) || f <= 0 ? "Sample ready" : `${f}s preview`;
  }, [se]), Rc = b.useMemo(() => `${Math.round($l * 100)}%`, [$l]), nu = b.useMemo(() => {
    if (!me)
      return { label: "Disconnected", tone: "down" };
    if (!je)
      return { label: "Checking", tone: "neutral" };
    if (!je.ok)
      return { label: "Down", tone: "down" };
    const f = Number(je.latencyMs);
    return Number.isFinite(f) && f >= 1200 ? { label: "Slow", tone: "warn" } : { label: "Healthy", tone: "ok" };
  }, [je, me]), Wi = b.useMemo(() => {
    const f = Number(je?.latencyMs);
    return Number.isFinite(f) ? `${Math.round(f)} ms` : "n/a";
  }, [je]), Fi = b.useMemo(() => {
    if (!je?.checkedAt) return "n/a";
    const f = new Date(je.checkedAt);
    return Number.isNaN(f.getTime()) ? "n/a" : f.toLocaleTimeString();
  }, [je]), Oc = b.useMemo(() => {
    const f = [
      `Provider: ${je?.provider || "AnimeThemes"}`,
      `State: ${nu.label}`,
      `Latency: ${Wi}`,
      `Last check: ${Fi}${je?.cached ? " (cached)" : ""}`
    ];
    return je?.ok === !1 && je?.error && f.push(`Error: ${je.error}`), Fa && f.push(`Client: ${Fa}`), f;
  }, [Fi, Fa, nu.label, Wi, je]), Wu = b.useMemo(() => !!j && P !== "WAITING" && P !== "FINISHED", [j, P]), $i = b.useMemo(() => !!j && (P === "WAITING" || P === "FINISHED"), [j, P]), Mc = b.useCallback((f) => {
    const p = Math.max(0, Math.min(1, Number.parseFloat(f.target.value)));
    Yi(Number.isFinite(p) ? p : 0.8);
  }, []), au = b.useMemo(() => P === "FINISHED" ? (ga?.finalScores || []).slice().sort(Tm) : P === "SOLUTION_REVEAL" ? (Et?.scores || []).slice().sort(Tm) : [], [ga, P, Et]), wn = b.useMemo(() => {
    if (!se?.isSuddenDeath || P === "FINISHED") return "";
    const p = (Array.isArray(Wa?.tiedUserIds) ? Wa.tiedUserIds : []).map((O) => Gu(O)).filter(Boolean);
    return p.length > 0 ? `Sudden Death: tie for first between ${p.join(", ")}.` : "Sudden Death: tie for first place. Extra rounds continue until the tie is broken.";
  }, [P, Gu, se?.isSuddenDeath, Wa?.tiedUserIds]), Ii = b.useMemo(() => {
    const f = String(Xa || "").trim().toLowerCase();
    return f ? bn.filter((p) => {
      const O = String(p?.code || "").toLowerCase(), B = String(p?.name || "").toLowerCase();
      return O.includes(f) || B.includes(f);
    }) : bn;
  }, [bn, Xa]), Pi = b.useMemo(() => j ? [
    `Max ${j.maxPlayers} players`,
    `${j.roundCount} rounds`,
    `${j.guessSeconds}s guess`,
    uc[j.sourceMode]?.label || j.sourceMode,
    ic[j.selectionMode]?.label || j.selectionMode,
    sc[j.themeMode]?.label || j.themeMode
  ] : [], [j]);
  return ge ? /* @__PURE__ */ h.jsx("section", { className: "gmq-shell", children: "Loading game..." }) : /* @__PURE__ */ h.jsxs("section", { className: "gmq-shell", children: [
    /* @__PURE__ */ h.jsxs("header", { className: "gmq-header", children: [
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("h1", { children: "Anime Music Quiz" }),
        /* @__PURE__ */ h.jsxs("p", { className: "gmq-muted", children: [
          "Socket: ",
          me ? "Connected" : "Disconnected",
          j ? ` | Lobby ${j.code}` : "",
          wi?.sessionId ? ` | Session ${wi.sessionId}` : ""
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "gmq-header-right", children: [
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-connection-indicator", role: "status", "aria-label": `Media source ${nu.label}`, children: [
          /* @__PURE__ */ h.jsx("span", { className: `gmq-connection-dot gmq-status-dot-${nu.tone}` }),
          /* @__PURE__ */ h.jsx("div", { className: "gmq-connection-tooltip", children: Oc.map((f) => /* @__PURE__ */ h.jsx("p", { children: f }, f)) })
        ] }),
        j ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-actions", children: [
          /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: Tc, disabled: y === "invite", children: "Copy Invite" }),
          /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-danger", onClick: pc, disabled: y === "leave", children: "Leave" })
        ] }) : null
      ] })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "gmq-toast-viewport", "aria-live": "polite", "aria-atomic": "false", children: [
      H ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-alert gmq-alert-error gmq-toast", role: "alert", children: [
        /* @__PURE__ */ h.jsx("p", { children: H }),
        /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-toast-close", onClick: () => D(""), "aria-label": "Dismiss error", children: "x" })
      ] }) : null,
      $ ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-alert gmq-alert-info gmq-toast", role: "status", children: [
        /* @__PURE__ */ h.jsx("p", { children: $ }),
        /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-toast-close", onClick: () => K(""), "aria-label": "Dismiss message", children: "x" })
      ] }) : null
    ] }),
    gt ? /* @__PURE__ */ h.jsx("div", { className: "gmq-modal-backdrop", onClick: () => kt(null), children: /* @__PURE__ */ h.jsxs("article", { className: "gmq-card gmq-modal-card gmq-modal-confirm-card", onClick: (f) => f.stopPropagation(), children: [
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
            onClick: () => kt(null),
            disabled: y === "promote",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-primary",
            onClick: Ac,
            disabled: y === "promote",
            children: y === "promote" ? "Promoting..." : "Promote"
          }
        )
      ] })
    ] }) }) : null,
    pt ? /* @__PURE__ */ h.jsx("div", { className: "gmq-modal-backdrop", onClick: () => xl(null), children: /* @__PURE__ */ h.jsxs("article", { className: "gmq-card gmq-modal-card gmq-modal-confirm-card", onClick: (f) => f.stopPropagation(), children: [
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
            onClick: () => xl(null),
            disabled: y === "kick",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-danger",
            onClick: Zi,
            disabled: y === "kick",
            children: y === "kick" ? "Kicking..." : "Kick Player"
          }
        )
      ] })
    ] }) }) : null,
    Sn && j && j.status === "WAITING" && Zu ? /* @__PURE__ */ h.jsx("div", { className: "gmq-modal-backdrop", onClick: () => Nl(!1), children: /* @__PURE__ */ h.jsxs("article", { className: "gmq-card gmq-modal-card", onClick: (f) => f.stopPropagation(), children: [
      /* @__PURE__ */ h.jsxs("div", { className: "gmq-modal-header", children: [
        /* @__PURE__ */ h.jsx("h2", { children: "Match Settings" }),
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-secondary gmq-btn-modal-close",
            onClick: () => Nl(!1),
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
              value: zt.name,
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
              checked: zt.isPrivate,
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
              value: Qa,
              onChange: (f) => ki(f.target.value),
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
              value: zt.roundCount,
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
              value: zt.guessSeconds,
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
              value: zt.sourceMode,
              onChange: (f) => bt((p) => ({ ...p, sourceMode: f.target.value })),
              children: wo.map((f) => /* @__PURE__ */ h.jsx("option", { value: f, children: uc[f]?.label || f }, f))
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
          /* @__PURE__ */ h.jsx("label", { htmlFor: "edit-selection-mode", children: "Selection Style" }),
          /* @__PURE__ */ h.jsx(
            "select",
            {
              id: "edit-selection-mode",
              value: zt.selectionMode,
              onChange: (f) => bt((p) => ({ ...p, selectionMode: f.target.value })),
              children: Lo.map((f) => /* @__PURE__ */ h.jsx("option", { value: f, children: ic[f]?.label || f }, f))
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
          /* @__PURE__ */ h.jsx("label", { htmlFor: "edit-theme-mode", children: "Song Types" }),
          /* @__PURE__ */ h.jsx(
            "select",
            {
              id: "edit-theme-mode",
              value: zt.themeMode,
              onChange: (f) => bt((p) => ({ ...p, themeMode: f.target.value })),
              children: Ho.map((f) => /* @__PURE__ */ h.jsx("option", { value: f, children: sc[f]?.label || f }, f))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          className: "gmq-btn gmq-btn-primary",
          onClick: gc,
          disabled: y === "settings",
          children: y === "settings" ? "Saving..." : "Save Settings"
        }
      )
    ] }) }) : null,
    j ? /* @__PURE__ */ h.jsxs("div", { className: `gmq-grid gmq-grid-match ${Wu ? "gmq-grid-match-live" : "gmq-grid-match-idle"} ${Wu && !$i ? "gmq-grid-match-round-only" : ""}`, children: [
      $i ? /* @__PURE__ */ h.jsxs("article", { className: "gmq-card gmq-card-lobby", children: [
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
          /* @__PURE__ */ h.jsx("div", { className: "gmq-lobby-settings", children: Pi.map((f) => /* @__PURE__ */ h.jsx("span", { children: f }, f)) })
        ] }),
        /* @__PURE__ */ h.jsx("ul", { className: "gmq-player-list", children: (j.players || []).map((f) => /* @__PURE__ */ h.jsxs("li", { children: [
          /* @__PURE__ */ h.jsxs("span", { children: [
            f.displayName,
            f.userId === j.host?.id ? " (Host)" : "",
            f.isConnected ? "" : " (offline)"
          ] }),
          j.status === "WAITING" ? /* @__PURE__ */ h.jsxs("span", { className: "gmq-player-row-actions", children: [
            Zu && W && f.userId !== W.id ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  type: "button",
                  className: "gmq-btn gmq-btn-secondary gmq-btn-kick",
                  onClick: () => _c(f),
                  disabled: y === "promote" || y === "kick",
                  children: "Promote"
                }
              ),
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  type: "button",
                  className: "gmq-btn gmq-btn-danger gmq-btn-kick",
                  onClick: () => Ec(f),
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
                onClick: Sc,
                disabled: y === "lobby-ready",
                children: xc ? "Not Ready" : "Ready Up"
              }
            ),
            /* @__PURE__ */ h.jsxs("p", { className: "gmq-muted", children: [
              "Ready ",
              Gl.length,
              "/",
              Bn.length
            ] })
          ] }),
          Zu ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            /* @__PURE__ */ h.jsx(
              "button",
              {
                type: "button",
                className: "gmq-btn gmq-btn-secondary",
                onClick: Vi,
                disabled: y === "settings",
                children: "Match Settings"
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                type: "button",
                className: "gmq-btn gmq-btn-primary",
                onClick: vc,
                disabled: y === "start" || !Ki,
                children: "Start Game"
              }
            ),
            Ki ? null : /* @__PURE__ */ h.jsx("p", { className: "gmq-muted", children: "All players must be ready before start." })
          ] }) : /* @__PURE__ */ h.jsx("p", { className: "gmq-muted", children: "Waiting for host to start." })
        ] }) : null
      ] }) : null,
      Wu ? /* @__PURE__ */ h.jsxs("article", { className: "gmq-card gmq-card-round", children: [
        /* @__PURE__ */ h.jsx("h2", { children: "Round" }),
        /* @__PURE__ */ h.jsxs("p", { className: "gmq-round-phase", children: [
          P,
          " | ",
          ha
        ] }),
        wn ? /* @__PURE__ */ h.jsx("div", { className: "gmq-alert gmq-alert-warning", children: wn }) : null,
        P === "PENDING" && Gi ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ h.jsx("p", { children: "Preparing media cache before round 1..." }),
          /* @__PURE__ */ h.jsxs("p", { className: "gmq-muted", children: [
            "Ready ",
            On.ready,
            "/",
            On.total,
            On.failed > 0 ? ` | Failed ${On.failed}` : ""
          ] }),
          Mn ? /* @__PURE__ */ h.jsx("p", { className: "gmq-muted gmq-muted-warning", children: Mn }) : null,
          Mn ? /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: "gmq-btn gmq-btn-secondary",
              onClick: () => tu().catch(() => {
              }),
              disabled: Nt,
              children: Nt ? "Retrying..." : "Retry preload"
            }
          ) : null
        ] }) : null,
        Ji ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-sample-player", children: [
          se?.sample?.audioUrl ? /* @__PURE__ */ h.jsx(
            "audio",
            {
              ref: ie,
              src: se.sample.audioUrl,
              preload: "auto",
              onPlay: () => Ae(!0),
              onPause: () => Ae(!1),
              onEnded: () => Ae(!1),
              onError: () => _t(ji("source_unavailable"))
            },
            `audio-${se.roundId}`
          ) : null,
          se?.sample?.videoUrl ? /* @__PURE__ */ h.jsx(
            "video",
            {
              ref: Ze,
              src: se.sample.videoUrl,
              preload: "auto",
              playsInline: !0,
              onPlay: () => Ae(!0),
              onPause: () => Ae(!1),
              onEnded: () => Ae(!1),
              onError: () => _t(ji("source_unavailable"))
            },
            `video-${se.roundId}`
          ) : null,
          /* @__PURE__ */ h.jsxs("label", { className: "gmq-volume-row", children: [
            /* @__PURE__ */ h.jsxs("span", { children: [
              "Volume ",
              Rc
            ] }),
            /* @__PURE__ */ h.jsx(
              "input",
              {
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: $l,
                onChange: Mc
              }
            )
          ] }),
          Ll ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-stack", children: [
            /* @__PURE__ */ h.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
            /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Wt({ isAutoplay: !1 }).catch(() => {
            }), children: "Play sample" })
          ] }) : Hi === "video" && !se?.sample?.audioUrl ? /* @__PURE__ */ h.jsxs("p", { className: "gmq-muted", children: [
            "Using video source audio. ",
            Ju
          ] }) : xn ? /* @__PURE__ */ h.jsxs("p", { className: "gmq-muted", children: [
            "Sample is playing. ",
            Ju
          ] }) : /* @__PURE__ */ h.jsx("p", { className: "gmq-muted", children: Ju }),
          ba ? /* @__PURE__ */ h.jsx("p", { className: "gmq-muted gmq-muted-warning", children: ba }) : null
        ] }) : null,
        P === "GUESSING" && se ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ h.jsxs("p", { children: [
            "Round ",
            se.index,
            "/",
            se.totalRounds
          ] }),
          Ku ? null : /* @__PURE__ */ h.jsx("p", { className: "gmq-muted", children: "Sample audio is unavailable for this round." }),
          /* @__PURE__ */ h.jsxs("div", { className: "gmq-search-box", children: [
            /* @__PURE__ */ h.jsx(
              "input",
              {
                ref: it,
                value: ol,
                onChange: (f) => {
                  Nn(f.target.value), Za(null), Zt(!0);
                },
                onFocus: () => Zt(!0),
                onBlur: () => {
                  window.setTimeout(() => {
                    Zt(!1);
                  }, 100);
                },
                placeholder: "Type anime name"
              }
            ),
            va && Hu.length > 0 ? /* @__PURE__ */ h.jsx("ul", { className: "gmq-search-results", children: Hu.map((f) => /* @__PURE__ */ h.jsx("li", { children: /* @__PURE__ */ h.jsx(
              "button",
              {
                type: "button",
                onMouseDown: (p) => p.preventDefault(),
                onClick: () => {
                  Nn(f.title || ""), Za(Number.isInteger(f.id) ? f.id : null), Vt([]), Zt(!1);
                },
                children: f.title
              }
            ) }, `${f.id}-${f.title}`)) }) : null
          ] }),
          Yu ? /* @__PURE__ */ h.jsx("p", { className: "gmq-muted gmq-muted-warning", children: Yu }) : null,
          /* @__PURE__ */ h.jsxs("div", { className: "gmq-actions", children: [
            /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: Vu, disabled: y === "guess", children: "Submit Guess" }),
            /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: bc, disabled: y === "ready", children: Nc ? "Unskip" : "Skip / Ready" })
          ] }),
          /* @__PURE__ */ h.jsxs("p", { className: "gmq-muted", children: [
            wl.length,
            " ready"
          ] })
        ] }) : null,
        P === "ANSWERS_REVEAL" ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ h.jsx("h3", { children: "Answers" }),
          /* @__PURE__ */ h.jsx("ul", { className: "gmq-answer-list", children: ya.map((f) => /* @__PURE__ */ h.jsxs("li", { children: [
            /* @__PURE__ */ h.jsx("span", { children: Gu(f.userId) }),
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
                ref: Ke,
                className: "gmq-solution-video",
                src: Et.video,
                preload: "auto",
                controls: !0,
                playsInline: !0,
                onError: () => Ye('Could not play solution video in this browser. Use "Open video source".')
              },
              `solution-${se?.roundId || Et.correctAnime?.animeId || "video"}`
            ),
            Cl ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-stack", children: [
              /* @__PURE__ */ h.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
              /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Ie().catch(() => {
              }), children: "Play solution video" })
            ] }) : null,
            fl ? /* @__PURE__ */ h.jsx("p", { className: "gmq-muted gmq-muted-warning", children: fl }) : null,
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
        au.length ? /* @__PURE__ */ h.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ h.jsx("h3", { children: "Scoreboard" }),
          /* @__PURE__ */ h.jsx("ul", { className: "gmq-score-list", children: au.map((f) => /* @__PURE__ */ h.jsxs("li", { className: "gmq-score-row", children: [
            /* @__PURE__ */ h.jsx("span", { children: f.displayName }),
            /* @__PURE__ */ h.jsx("strong", { children: f.score })
          ] }, f.userId)) })
        ] }) : null
      ] }) : null
    ] }) : /* @__PURE__ */ h.jsxs("div", { className: "gmq-menu", children: [
      /* @__PURE__ */ h.jsx("div", { className: "gmq-menu-host-wrap", children: /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary gmq-btn-host", onClick: () => Wl(!0), children: "Host Lobby" }) }),
      /* @__PURE__ */ h.jsxs("article", { className: "gmq-card gmq-card-directory", children: [
        /* @__PURE__ */ h.jsx("div", { className: "gmq-directory-header", children: /* @__PURE__ */ h.jsx("h2", { children: "Available Lobbies" }) }),
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-directory-top", children: [
          /* @__PURE__ */ h.jsx("div", { className: "gmq-card gmq-card-toolbar", children: /* @__PURE__ */ h.jsxs("div", { className: "gmq-directory-controls", children: [
            /* @__PURE__ */ h.jsx("input", { value: Xa, onChange: (f) => Jl(f.target.value), placeholder: "Search by code/name" }),
            /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => xt(), disabled: mc, children: "Refresh" })
          ] }) }),
          /* @__PURE__ */ h.jsx("div", { className: "gmq-card gmq-card-manual-join", children: /* @__PURE__ */ h.jsxs("div", { className: "gmq-inline gmq-inline-manual", children: [
            /* @__PURE__ */ h.jsx("input", { value: En, onChange: (f) => St(sa(f.target.value)), placeholder: "Lobby code (ABC123)" }),
            /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: () => Yl(En, ""), disabled: y === "join", children: "Join Lobby" })
          ] }) })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-lobby-table-head", children: [
          /* @__PURE__ */ h.jsx("span", { children: "Lobby" }),
          /* @__PURE__ */ h.jsx("span", { children: "Match Settings" }),
          /* @__PURE__ */ h.jsx("span", { children: "Action" })
        ] }),
        /* @__PURE__ */ h.jsxs("ul", { className: "gmq-lobby-list gmq-lobby-list-detailed", children: [
          Ii.map((f) => /* @__PURE__ */ h.jsxs("li", { className: "gmq-lobby-item gmq-lobby-item-detailed", children: [
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
              /* @__PURE__ */ h.jsx("span", { children: uc[f.sourceMode]?.label || f.sourceMode }),
              /* @__PURE__ */ h.jsx("span", { children: ic[f.selectionMode]?.label || f.selectionMode }),
              /* @__PURE__ */ h.jsx("span", { children: sc[f.themeMode]?.label || f.themeMode })
            ] }),
            /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Yl(f.code, "", { fromDirectory: !0 }), disabled: y === "join", children: "Join" })
          ] }, f.code)),
          Ii.length === 0 ? /* @__PURE__ */ h.jsx("li", { className: "gmq-lobby-empty gmq-muted", children: "No open public lobbies right now." }) : null
        ] })
      ] }),
      oa ? /* @__PURE__ */ h.jsx("div", { className: "gmq-modal-backdrop", onClick: () => Wl(!1), children: /* @__PURE__ */ h.jsxs("article", { className: "gmq-card gmq-modal-card", onClick: (f) => f.stopPropagation(), children: [
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-modal-header", children: [
          /* @__PURE__ */ h.jsx("h2", { children: "Host Lobby" }),
          /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary gmq-btn-modal-close", onClick: () => Wl(!1), children: "Close" })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-name-private-row", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-stack", children: [
            /* @__PURE__ */ h.jsx("label", { htmlFor: "create-lobby-name", children: "Lobby name" }),
            /* @__PURE__ */ h.jsx(
              "input",
              {
                id: "create-lobby-name",
                value: Qt.name,
                onChange: (f) => cl((p) => ({ ...p, name: f.target.value })),
                placeholder: "Lobby name"
              }
            )
          ] }),
          /* @__PURE__ */ h.jsxs("label", { className: "gmq-checkbox gmq-checkbox-inline", children: [
            /* @__PURE__ */ h.jsx(
              "input",
              {
                type: "checkbox",
                checked: Qt.isPrivate,
                onChange: (f) => cl((p) => ({ ...p, isPrivate: f.target.checked }))
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
                value: ka,
                onChange: (f) => yc(f.target.value),
                onBlur: $a
              }
            )
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ h.jsx("label", { htmlFor: "create-round-count", children: "Rounds" }),
            /* @__PURE__ */ h.jsx("input", { id: "create-round-count", type: "number", min: "1", max: "50", value: Qt.roundCount, onChange: (f) => cl((p) => ({ ...p, roundCount: Number(f.target.value || 10) })) })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ h.jsx("label", { htmlFor: "create-guess-seconds", children: "Guess Time (sec)" }),
            /* @__PURE__ */ h.jsx("input", { id: "create-guess-seconds", type: "number", min: "5", max: "120", value: Qt.guessSeconds, onChange: (f) => cl((p) => ({ ...p, guessSeconds: Number(f.target.value || 20) })) })
          ] })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-grid", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ h.jsx("label", { htmlFor: "create-source-mode", children: "Song Source" }),
            /* @__PURE__ */ h.jsx("select", { id: "create-source-mode", value: Qt.sourceMode, onChange: (f) => cl((p) => ({ ...p, sourceMode: f.target.value })), children: wo.map((f) => /* @__PURE__ */ h.jsx("option", { value: f, children: uc[f]?.label || f }, f)) })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ h.jsx("label", { htmlFor: "create-selection-mode", children: "Selection Style" }),
            /* @__PURE__ */ h.jsx("select", { id: "create-selection-mode", value: Qt.selectionMode, onChange: (f) => cl((p) => ({ ...p, selectionMode: f.target.value })), children: Lo.map((f) => /* @__PURE__ */ h.jsx("option", { value: f, children: ic[f]?.label || f }, f)) })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "gmq-field-card", children: [
            /* @__PURE__ */ h.jsx("label", { htmlFor: "create-theme-mode", children: "Song Types" }),
            /* @__PURE__ */ h.jsx("select", { id: "create-theme-mode", value: Qt.themeMode, onChange: (f) => cl((p) => ({ ...p, themeMode: f.target.value })), children: Ho.map((f) => /* @__PURE__ */ h.jsx("option", { value: f, children: sc[f]?.label || f }, f)) })
          ] })
        ] }),
        /* @__PURE__ */ h.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: lu, disabled: y === "create", children: y === "create" ? "Hosting..." : "Host Lobby" })
      ] }) }) : null
    ] })
  ] });
}
const Rm = document.getElementById("game-root");
Rm && Eg.createRoot(Rm).render(/* @__PURE__ */ h.jsx(Rp, {}));
