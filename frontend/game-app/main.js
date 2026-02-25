var Vs = { exports: {} }, tu = {};
var sd;
function Im() {
  if (sd) return tu;
  sd = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(f, v, R) {
    var M = null;
    if (R !== void 0 && (M = "" + R), v.key !== void 0 && (M = "" + v.key), "key" in v) {
      R = {};
      for (var G in v)
        G !== "key" && (R[G] = v[G]);
    } else R = v;
    return v = R.ref, {
      $$typeof: o,
      type: f,
      key: M,
      ref: v !== void 0 ? v : null,
      props: R
    };
  }
  return tu.Fragment = i, tu.jsx = s, tu.jsxs = s, tu;
}
var fd;
function Pm() {
  return fd || (fd = 1, Vs.exports = Im()), Vs.exports;
}
var D = Pm(), ws = { exports: {} }, k = {};
var od;
function t0() {
  if (od) return k;
  od = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), v = /* @__PURE__ */ Symbol.for("react.profiler"), R = /* @__PURE__ */ Symbol.for("react.consumer"), M = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), C = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.memo"), w = /* @__PURE__ */ Symbol.for("react.lazy"), U = /* @__PURE__ */ Symbol.for("react.activity"), it = Symbol.iterator;
  function zt(y) {
    return y === null || typeof y != "object" ? null : (y = it && y[it] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var Ft = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Gt = Object.assign, Ot = {};
  function le(y, N, B) {
    this.props = y, this.context = N, this.refs = Ot, this.updater = B || Ft;
  }
  le.prototype.isReactComponent = {}, le.prototype.setState = function(y, N) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, N, "setState");
  }, le.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function Ge() {
  }
  Ge.prototype = le.prototype;
  function Xt(y, N, B) {
    this.props = y, this.context = N, this.refs = Ot, this.updater = B || Ft;
  }
  var wt = Xt.prototype = new Ge();
  wt.constructor = Xt, Gt(wt, le.prototype), wt.isPureReactComponent = !0;
  var _e = Array.isArray;
  function St() {
  }
  var K = { H: null, A: null, T: null, S: null }, Zt = Object.prototype.hasOwnProperty;
  function he(y, N, B) {
    var x = B.ref;
    return {
      $$typeof: o,
      type: y,
      key: N,
      ref: x !== void 0 ? x : null,
      props: B
    };
  }
  function Be(y, N) {
    return he(y.type, N, y.props);
  }
  function It(y) {
    return typeof y == "object" && y !== null && y.$$typeof === o;
  }
  function Nt(y) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(B) {
      return N[B];
    });
  }
  var Fe = /\/+/g;
  function J(y, N) {
    return typeof y == "object" && y !== null && y.key != null ? Nt("" + y.key) : N.toString(36);
  }
  function Pt(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(St, St) : (y.status = "pending", y.then(
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
  function A(y, N, B, x, Z) {
    var F = typeof y;
    (F === "undefined" || F === "boolean") && (y = null);
    var I = !1;
    if (y === null) I = !0;
    else
      switch (F) {
        case "bigint":
        case "string":
        case "number":
          I = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case o:
            case i:
              I = !0;
              break;
            case w:
              return I = y._init, A(
                I(y._payload),
                N,
                B,
                x,
                Z
              );
          }
      }
    if (I)
      return Z = Z(y), I = x === "" ? "." + J(y, 0) : x, _e(Z) ? (B = "", I != null && (B = I.replace(Fe, "$&/") + "/"), A(Z, N, B, "", function(Xe) {
        return Xe;
      })) : Z != null && (It(Z) && (Z = Be(
        Z,
        B + (Z.key == null || y && y.key === Z.key ? "" : ("" + Z.key).replace(
          Fe,
          "$&/"
        ) + "/") + I
      )), N.push(Z)), 1;
    I = 0;
    var Tt = x === "" ? "." : x + ":";
    if (_e(y))
      for (var yt = 0; yt < y.length; yt++)
        x = y[yt], F = Tt + J(x, yt), I += A(
          x,
          N,
          B,
          F,
          Z
        );
    else if (yt = zt(y), typeof yt == "function")
      for (y = yt.call(y), yt = 0; !(x = y.next()).done; )
        x = x.value, F = Tt + J(x, yt++), I += A(
          x,
          N,
          B,
          F,
          Z
        );
    else if (F === "object") {
      if (typeof y.then == "function")
        return A(
          Pt(y),
          N,
          B,
          x,
          Z
        );
      throw N = String(y), Error(
        "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return I;
  }
  function q(y, N, B) {
    if (y == null) return y;
    var x = [], Z = 0;
    return A(y, x, "", "", function(F) {
      return N.call(B, F, Z++);
    }), x;
  }
  function L(y) {
    if (y._status === -1) {
      var N = y._result;
      N = N(), N.then(
        function(B) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = B);
        },
        function(B) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = B);
        }
      ), y._status === -1 && (y._status = 0, y._result = N);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var et = typeof reportError == "function" ? reportError : function(y) {
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
  }, ot = {
    map: q,
    forEach: function(y, N, B) {
      q(
        y,
        function() {
          N.apply(this, arguments);
        },
        B
      );
    },
    count: function(y) {
      var N = 0;
      return q(y, function() {
        N++;
      }), N;
    },
    toArray: function(y) {
      return q(y, function(N) {
        return N;
      }) || [];
    },
    only: function(y) {
      if (!It(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return k.Activity = U, k.Children = ot, k.Component = le, k.Fragment = s, k.Profiler = v, k.PureComponent = Xt, k.StrictMode = f, k.Suspense = C, k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, k.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return K.H.useMemoCache(y);
    }
  }, k.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, k.cacheSignal = function() {
    return null;
  }, k.cloneElement = function(y, N, B) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var x = Gt({}, y.props), Z = y.key;
    if (N != null)
      for (F in N.key !== void 0 && (Z = "" + N.key), N)
        !Zt.call(N, F) || F === "key" || F === "__self" || F === "__source" || F === "ref" && N.ref === void 0 || (x[F] = N[F]);
    var F = arguments.length - 2;
    if (F === 1) x.children = B;
    else if (1 < F) {
      for (var I = Array(F), Tt = 0; Tt < F; Tt++)
        I[Tt] = arguments[Tt + 2];
      x.children = I;
    }
    return he(y.type, Z, x);
  }, k.createContext = function(y) {
    return y = {
      $$typeof: M,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: R,
      _context: y
    }, y;
  }, k.createElement = function(y, N, B) {
    var x, Z = {}, F = null;
    if (N != null)
      for (x in N.key !== void 0 && (F = "" + N.key), N)
        Zt.call(N, x) && x !== "key" && x !== "__self" && x !== "__source" && (Z[x] = N[x]);
    var I = arguments.length - 2;
    if (I === 1) Z.children = B;
    else if (1 < I) {
      for (var Tt = Array(I), yt = 0; yt < I; yt++)
        Tt[yt] = arguments[yt + 2];
      Z.children = Tt;
    }
    if (y && y.defaultProps)
      for (x in I = y.defaultProps, I)
        Z[x] === void 0 && (Z[x] = I[x]);
    return he(y, F, Z);
  }, k.createRef = function() {
    return { current: null };
  }, k.forwardRef = function(y) {
    return { $$typeof: G, render: y };
  }, k.isValidElement = It, k.lazy = function(y) {
    return {
      $$typeof: w,
      _payload: { _status: -1, _result: y },
      _init: L
    };
  }, k.memo = function(y, N) {
    return {
      $$typeof: T,
      type: y,
      compare: N === void 0 ? null : N
    };
  }, k.startTransition = function(y) {
    var N = K.T, B = {};
    K.T = B;
    try {
      var x = y(), Z = K.S;
      Z !== null && Z(B, x), typeof x == "object" && x !== null && typeof x.then == "function" && x.then(St, et);
    } catch (F) {
      et(F);
    } finally {
      N !== null && B.types !== null && (N.types = B.types), K.T = N;
    }
  }, k.unstable_useCacheRefresh = function() {
    return K.H.useCacheRefresh();
  }, k.use = function(y) {
    return K.H.use(y);
  }, k.useActionState = function(y, N, B) {
    return K.H.useActionState(y, N, B);
  }, k.useCallback = function(y, N) {
    return K.H.useCallback(y, N);
  }, k.useContext = function(y) {
    return K.H.useContext(y);
  }, k.useDebugValue = function() {
  }, k.useDeferredValue = function(y, N) {
    return K.H.useDeferredValue(y, N);
  }, k.useEffect = function(y, N) {
    return K.H.useEffect(y, N);
  }, k.useEffectEvent = function(y) {
    return K.H.useEffectEvent(y);
  }, k.useId = function() {
    return K.H.useId();
  }, k.useImperativeHandle = function(y, N, B) {
    return K.H.useImperativeHandle(y, N, B);
  }, k.useInsertionEffect = function(y, N) {
    return K.H.useInsertionEffect(y, N);
  }, k.useLayoutEffect = function(y, N) {
    return K.H.useLayoutEffect(y, N);
  }, k.useMemo = function(y, N) {
    return K.H.useMemo(y, N);
  }, k.useOptimistic = function(y, N) {
    return K.H.useOptimistic(y, N);
  }, k.useReducer = function(y, N, B) {
    return K.H.useReducer(y, N, B);
  }, k.useRef = function(y) {
    return K.H.useRef(y);
  }, k.useState = function(y) {
    return K.H.useState(y);
  }, k.useSyncExternalStore = function(y, N, B) {
    return K.H.useSyncExternalStore(
      y,
      N,
      B
    );
  }, k.useTransition = function() {
    return K.H.useTransition();
  }, k.version = "19.2.4", k;
}
var rd;
function uf() {
  return rd || (rd = 1, ws.exports = t0()), ws.exports;
}
var Q = uf(), Zs = { exports: {} }, eu = {}, Ks = { exports: {} }, Js = {};
var hd;
function e0() {
  return hd || (hd = 1, (function(o) {
    function i(A, q) {
      var L = A.length;
      A.push(q);
      t: for (; 0 < L; ) {
        var et = L - 1 >>> 1, ot = A[et];
        if (0 < v(ot, q))
          A[et] = q, A[L] = ot, L = et;
        else break t;
      }
    }
    function s(A) {
      return A.length === 0 ? null : A[0];
    }
    function f(A) {
      if (A.length === 0) return null;
      var q = A[0], L = A.pop();
      if (L !== q) {
        A[0] = L;
        t: for (var et = 0, ot = A.length, y = ot >>> 1; et < y; ) {
          var N = 2 * (et + 1) - 1, B = A[N], x = N + 1, Z = A[x];
          if (0 > v(B, L))
            x < ot && 0 > v(Z, B) ? (A[et] = Z, A[x] = L, et = x) : (A[et] = B, A[N] = L, et = N);
          else if (x < ot && 0 > v(Z, L))
            A[et] = Z, A[x] = L, et = x;
          else break t;
        }
      }
      return q;
    }
    function v(A, q) {
      var L = A.sortIndex - q.sortIndex;
      return L !== 0 ? L : A.id - q.id;
    }
    if (o.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var R = performance;
      o.unstable_now = function() {
        return R.now();
      };
    } else {
      var M = Date, G = M.now();
      o.unstable_now = function() {
        return M.now() - G;
      };
    }
    var C = [], T = [], w = 1, U = null, it = 3, zt = !1, Ft = !1, Gt = !1, Ot = !1, le = typeof setTimeout == "function" ? setTimeout : null, Ge = typeof clearTimeout == "function" ? clearTimeout : null, Xt = typeof setImmediate < "u" ? setImmediate : null;
    function wt(A) {
      for (var q = s(T); q !== null; ) {
        if (q.callback === null) f(T);
        else if (q.startTime <= A)
          f(T), q.sortIndex = q.expirationTime, i(C, q);
        else break;
        q = s(T);
      }
    }
    function _e(A) {
      if (Gt = !1, wt(A), !Ft)
        if (s(C) !== null)
          Ft = !0, St || (St = !0, Nt());
        else {
          var q = s(T);
          q !== null && Pt(_e, q.startTime - A);
        }
    }
    var St = !1, K = -1, Zt = 5, he = -1;
    function Be() {
      return Ot ? !0 : !(o.unstable_now() - he < Zt);
    }
    function It() {
      if (Ot = !1, St) {
        var A = o.unstable_now();
        he = A;
        var q = !0;
        try {
          t: {
            Ft = !1, Gt && (Gt = !1, Ge(K), K = -1), zt = !0;
            var L = it;
            try {
              e: {
                for (wt(A), U = s(C); U !== null && !(U.expirationTime > A && Be()); ) {
                  var et = U.callback;
                  if (typeof et == "function") {
                    U.callback = null, it = U.priorityLevel;
                    var ot = et(
                      U.expirationTime <= A
                    );
                    if (A = o.unstable_now(), typeof ot == "function") {
                      U.callback = ot, wt(A), q = !0;
                      break e;
                    }
                    U === s(C) && f(C), wt(A);
                  } else f(C);
                  U = s(C);
                }
                if (U !== null) q = !0;
                else {
                  var y = s(T);
                  y !== null && Pt(
                    _e,
                    y.startTime - A
                  ), q = !1;
                }
              }
              break t;
            } finally {
              U = null, it = L, zt = !1;
            }
            q = void 0;
          }
        } finally {
          q ? Nt() : St = !1;
        }
      }
    }
    var Nt;
    if (typeof Xt == "function")
      Nt = function() {
        Xt(It);
      };
    else if (typeof MessageChannel < "u") {
      var Fe = new MessageChannel(), J = Fe.port2;
      Fe.port1.onmessage = It, Nt = function() {
        J.postMessage(null);
      };
    } else
      Nt = function() {
        le(It, 0);
      };
    function Pt(A, q) {
      K = le(function() {
        A(o.unstable_now());
      }, q);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, o.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Zt = 0 < A ? Math.floor(1e3 / A) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return it;
    }, o.unstable_next = function(A) {
      switch (it) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = it;
      }
      var L = it;
      it = q;
      try {
        return A();
      } finally {
        it = L;
      }
    }, o.unstable_requestPaint = function() {
      Ot = !0;
    }, o.unstable_runWithPriority = function(A, q) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var L = it;
      it = A;
      try {
        return q();
      } finally {
        it = L;
      }
    }, o.unstable_scheduleCallback = function(A, q, L) {
      var et = o.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? et + L : et) : L = et, A) {
        case 1:
          var ot = -1;
          break;
        case 2:
          ot = 250;
          break;
        case 5:
          ot = 1073741823;
          break;
        case 4:
          ot = 1e4;
          break;
        default:
          ot = 5e3;
      }
      return ot = L + ot, A = {
        id: w++,
        callback: q,
        priorityLevel: A,
        startTime: L,
        expirationTime: ot,
        sortIndex: -1
      }, L > et ? (A.sortIndex = L, i(T, A), s(C) === null && A === s(T) && (Gt ? (Ge(K), K = -1) : Gt = !0, Pt(_e, L - et))) : (A.sortIndex = ot, i(C, A), Ft || zt || (Ft = !0, St || (St = !0, Nt()))), A;
    }, o.unstable_shouldYield = Be, o.unstable_wrapCallback = function(A) {
      var q = it;
      return function() {
        var L = it;
        it = q;
        try {
          return A.apply(this, arguments);
        } finally {
          it = L;
        }
      };
    };
  })(Js)), Js;
}
var dd;
function l0() {
  return dd || (dd = 1, Ks.exports = e0()), Ks.exports;
}
var ks = { exports: {} }, ee = {};
var yd;
function n0() {
  if (yd) return ee;
  yd = 1;
  var o = uf();
  function i(C) {
    var T = "https://react.dev/errors/" + C;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var w = 2; w < arguments.length; w++)
        T += "&args[]=" + encodeURIComponent(arguments[w]);
    }
    return "Minified React error #" + C + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, v = /* @__PURE__ */ Symbol.for("react.portal");
  function R(C, T, w) {
    var U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: v,
      key: U == null ? null : "" + U,
      children: C,
      containerInfo: T,
      implementation: w
    };
  }
  var M = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function G(C, T) {
    if (C === "font") return "";
    if (typeof T == "string")
      return T === "use-credentials" ? T : "";
  }
  return ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, ee.createPortal = function(C, T) {
    var w = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
      throw Error(i(299));
    return R(C, T, null, w);
  }, ee.flushSync = function(C) {
    var T = M.T, w = f.p;
    try {
      if (M.T = null, f.p = 2, C) return C();
    } finally {
      M.T = T, f.p = w, f.d.f();
    }
  }, ee.preconnect = function(C, T) {
    typeof C == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, f.d.C(C, T));
  }, ee.prefetchDNS = function(C) {
    typeof C == "string" && f.d.D(C);
  }, ee.preinit = function(C, T) {
    if (typeof C == "string" && T && typeof T.as == "string") {
      var w = T.as, U = G(w, T.crossOrigin), it = typeof T.integrity == "string" ? T.integrity : void 0, zt = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      w === "style" ? f.d.S(
        C,
        typeof T.precedence == "string" ? T.precedence : void 0,
        {
          crossOrigin: U,
          integrity: it,
          fetchPriority: zt
        }
      ) : w === "script" && f.d.X(C, {
        crossOrigin: U,
        integrity: it,
        fetchPriority: zt,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      });
    }
  }, ee.preinitModule = function(C, T) {
    if (typeof C == "string")
      if (typeof T == "object" && T !== null) {
        if (T.as == null || T.as === "script") {
          var w = G(
            T.as,
            T.crossOrigin
          );
          f.d.M(C, {
            crossOrigin: w,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
            nonce: typeof T.nonce == "string" ? T.nonce : void 0
          });
        }
      } else T == null && f.d.M(C);
  }, ee.preload = function(C, T) {
    if (typeof C == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var w = T.as, U = G(w, T.crossOrigin);
      f.d.L(C, w, {
        crossOrigin: U,
        integrity: typeof T.integrity == "string" ? T.integrity : void 0,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0,
        type: typeof T.type == "string" ? T.type : void 0,
        fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
        referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
        imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
        imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
        media: typeof T.media == "string" ? T.media : void 0
      });
    }
  }, ee.preloadModule = function(C, T) {
    if (typeof C == "string")
      if (T) {
        var w = G(T.as, T.crossOrigin);
        f.d.m(C, {
          as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
          crossOrigin: w,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0
        });
      } else f.d.m(C);
  }, ee.requestFormReset = function(C) {
    f.d.r(C);
  }, ee.unstable_batchedUpdates = function(C, T) {
    return C(T);
  }, ee.useFormState = function(C, T, w) {
    return M.H.useFormState(C, T, w);
  }, ee.useFormStatus = function() {
    return M.H.useHostTransitionStatus();
  }, ee.version = "19.2.4", ee;
}
var md;
function a0() {
  if (md) return ks.exports;
  md = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (i) {
        console.error(i);
      }
  }
  return o(), ks.exports = n0(), ks.exports;
}
var vd;
function u0() {
  if (vd) return eu;
  vd = 1;
  var o = l0(), i = uf(), s = a0();
  function f(t) {
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
  function R(t) {
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
  function M(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function G(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function C(t) {
    if (R(t) !== t)
      throw Error(f(188));
  }
  function T(t) {
    var e = t.alternate;
    if (!e) {
      if (e = R(t), e === null) throw Error(f(188));
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
        for (var c = !1, r = a.child; r; ) {
          if (r === l) {
            c = !0, l = a, n = u;
            break;
          }
          if (r === n) {
            c = !0, n = a, l = u;
            break;
          }
          r = r.sibling;
        }
        if (!c) {
          for (r = u.child; r; ) {
            if (r === l) {
              c = !0, l = u, n = a;
              break;
            }
            if (r === n) {
              c = !0, n = u, l = a;
              break;
            }
            r = r.sibling;
          }
          if (!c) throw Error(f(189));
        }
      }
      if (l.alternate !== n) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function w(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = w(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var U = Object.assign, it = /* @__PURE__ */ Symbol.for("react.element"), zt = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ft = /* @__PURE__ */ Symbol.for("react.portal"), Gt = /* @__PURE__ */ Symbol.for("react.fragment"), Ot = /* @__PURE__ */ Symbol.for("react.strict_mode"), le = /* @__PURE__ */ Symbol.for("react.profiler"), Ge = /* @__PURE__ */ Symbol.for("react.consumer"), Xt = /* @__PURE__ */ Symbol.for("react.context"), wt = /* @__PURE__ */ Symbol.for("react.forward_ref"), _e = /* @__PURE__ */ Symbol.for("react.suspense"), St = /* @__PURE__ */ Symbol.for("react.suspense_list"), K = /* @__PURE__ */ Symbol.for("react.memo"), Zt = /* @__PURE__ */ Symbol.for("react.lazy"), he = /* @__PURE__ */ Symbol.for("react.activity"), Be = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), It = Symbol.iterator;
  function Nt(t) {
    return t === null || typeof t != "object" ? null : (t = It && t[It] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Fe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function J(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Fe ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Gt:
        return "Fragment";
      case le:
        return "Profiler";
      case Ot:
        return "StrictMode";
      case _e:
        return "Suspense";
      case St:
        return "SuspenseList";
      case he:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Ft:
          return "Portal";
        case Xt:
          return t.displayName || "Context";
        case Ge:
          return (t._context.displayName || "Context") + ".Consumer";
        case wt:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case K:
          return e = t.displayName || null, e !== null ? e : J(t.type) || "Memo";
        case Zt:
          e = t._payload, t = t._init;
          try {
            return J(t(e));
          } catch {
          }
      }
    return null;
  }
  var Pt = Array.isArray, A = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, et = [], ot = -1;
  function y(t) {
    return { current: t };
  }
  function N(t) {
    0 > ot || (t.current = et[ot], et[ot] = null, ot--);
  }
  function B(t, e) {
    ot++, et[ot] = t.current, t.current = e;
  }
  var x = y(null), Z = y(null), F = y(null), I = y(null);
  function Tt(t, e) {
    switch (B(F, e), B(Z, t), B(x, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Mh(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Mh(e), t = Uh(e, t);
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
    N(x), B(x, t);
  }
  function yt() {
    N(x), N(Z), N(F);
  }
  function Xe(t) {
    t.memoizedState !== null && B(I, t);
    var e = x.current, l = Uh(e, t.type);
    e !== l && (B(Z, t), B(x, l));
  }
  function Ie(t) {
    Z.current === t && (N(x), N(Z)), I.current === t && (N(I), $a._currentValue = L);
  }
  var Qe, Kl;
  function de(t) {
    if (Qe === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        Qe = e && e[1] || "", Kl = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Qe + t + Kl;
  }
  var gl = !1;
  function Jl(t, e) {
    if (!t || gl) return "";
    gl = !0;
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
                  var b = _;
                }
                Reflect.construct(t, [], z);
              } else {
                try {
                  z.call();
                } catch (_) {
                  b = _;
                }
                t.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                b = _;
              }
              (z = t()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (_) {
            if (_ && b && typeof _.stack == "string")
              return [_.stack, b.stack];
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
      var u = n.DetermineComponentFrameRoot(), c = u[0], r = u[1];
      if (c && r) {
        var h = c.split(`
`), p = r.split(`
`);
        for (a = n = 0; n < h.length && !h[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; a < p.length && !p[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (n === h.length || a === p.length)
          for (n = h.length - 1, a = p.length - 1; 1 <= n && 0 <= a && h[n] !== p[a]; )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (h[n] !== p[a]) {
            if (n !== 1 || a !== 1)
              do
                if (n--, a--, 0 > a || h[n] !== p[a]) {
                  var E = `
` + h[n].replace(" at new ", " at ");
                  return t.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", t.displayName)), E;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      gl = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? de(l) : "";
  }
  function Sn(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return de(t.type);
      case 16:
        return de("Lazy");
      case 13:
        return t.child !== e && e !== null ? de("Suspense Fallback") : de("Suspense");
      case 19:
        return de("SuspenseList");
      case 0:
      case 15:
        return Jl(t.type, !1);
      case 11:
        return Jl(t.type.render, !1);
      case 1:
        return Jl(t.type, !0);
      case 31:
        return de("Activity");
      default:
        return "";
    }
  }
  function au(t) {
    try {
      var e = "", l = null;
      do
        e += Sn(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var xe = Object.prototype.hasOwnProperty, _n = o.unstable_scheduleCallback, fa = o.unstable_cancelCallback, pl = o.unstable_shouldYield, uu = o.unstable_requestPaint, qt = o.unstable_now, kl = o.unstable_getCurrentPriorityLevel, Wl = o.unstable_ImmediatePriority, $l = o.unstable_UserBlockingPriority, En = o.unstable_NormalPriority, Ci = o.unstable_LowPriority, iu = o.unstable_IdlePriority, Di = o.log, Mi = o.unstable_setDisableYieldValue, Fl = null, ne = null;
  function Ve(t) {
    if (typeof Di == "function" && Mi(t), ne && typeof ne.setStrictMode == "function")
      try {
        ne.setStrictMode(Fl, t);
      } catch {
      }
  }
  var te = Math.clz32 ? Math.clz32 : ct, S = Math.log, j = Math.LN2;
  function ct(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (S(t) / j | 0) | 0;
  }
  var Dt = 256, Ee = 262144, Il = 4194304;
  function we(t) {
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
  function Pl(t, e, l) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var a = 0, u = t.suspendedLanes, c = t.pingedLanes;
    t = t.warmLanes;
    var r = n & 134217727;
    return r !== 0 ? (n = r & ~u, n !== 0 ? a = we(n) : (c &= r, c !== 0 ? a = we(c) : l || (l = r & ~t, l !== 0 && (a = we(l))))) : (r = n & ~u, r !== 0 ? a = we(r) : c !== 0 ? a = we(c) : l || (l = n & ~t, l !== 0 && (a = we(l)))), a === 0 ? 0 : e !== 0 && e !== a && (e & u) === 0 && (u = a & -a, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : a;
  }
  function bl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function cu(t, e) {
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
  function oa() {
    var t = Il;
    return Il <<= 1, (Il & 62914560) === 0 && (Il = 4194304), t;
  }
  function pt(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function tn(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Gd(t, e, l, n, a, u) {
    var c = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var r = t.entanglements, h = t.expirationTimes, p = t.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var E = 31 - te(l), z = 1 << E;
      r[E] = 0, h[E] = -1;
      var b = p[E];
      if (b !== null)
        for (p[E] = null, E = 0; E < b.length; E++) {
          var _ = b[E];
          _ !== null && (_.lane &= -536870913);
        }
      l &= ~z;
    }
    n !== 0 && hf(t, n, 0), u !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(c & ~e));
  }
  function hf(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var n = 31 - te(e);
    t.entangledLanes |= e, t.entanglements[n] = t.entanglements[n] | 1073741824 | l & 261930;
  }
  function df(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var n = 31 - te(l), a = 1 << n;
      a & e | t[n] & e && (t[n] |= e), l &= ~a;
    }
  }
  function yf(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : Ui(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function Ui(t) {
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
  function qi(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function mf() {
    var t = q.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : ed(t.type));
  }
  function vf(t, e) {
    var l = q.p;
    try {
      return q.p = t, e();
    } finally {
      q.p = l;
    }
  }
  var Sl = Math.random().toString(36).slice(2), Kt = "__reactFiber$" + Sl, ue = "__reactProps$" + Sl, Tn = "__reactContainer$" + Sl, Bi = "__reactEvents$" + Sl, Xd = "__reactListeners$" + Sl, Qd = "__reactHandles$" + Sl, gf = "__reactResources$" + Sl, ra = "__reactMarker$" + Sl;
  function xi(t) {
    delete t[Kt], delete t[ue], delete t[Bi], delete t[Xd], delete t[Qd];
  }
  function An(t) {
    var e = t[Kt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[Tn] || l[Kt]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = Lh(t); t !== null; ) {
            if (l = t[Kt]) return l;
            t = Lh(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function On(t) {
    if (t = t[Kt] || t[Tn]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function ha(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function zn(t) {
    var e = t[gf];
    return e || (e = t[gf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Qt(t) {
    t[ra] = !0;
  }
  var pf = /* @__PURE__ */ new Set(), bf = {};
  function en(t, e) {
    Nn(t, e), Nn(t + "Capture", e);
  }
  function Nn(t, e) {
    for (bf[t] = e, t = 0; t < e.length; t++)
      pf.add(e[t]);
  }
  var Vd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Sf = {}, _f = {};
  function wd(t) {
    return xe.call(_f, t) ? !0 : xe.call(Sf, t) ? !1 : Vd.test(t) ? _f[t] = !0 : (Sf[t] = !0, !1);
  }
  function su(t, e, l) {
    if (wd(e))
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
  function fu(t, e, l) {
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
  function Pe(t, e, l, n) {
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
  function Te(t) {
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
  function Ef(t) {
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
  function Hi(t) {
    if (!t._valueTracker) {
      var e = Ef(t) ? "checked" : "value";
      t._valueTracker = Zd(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Tf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), n = "";
    return t && (n = Ef(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== l ? (e.setValue(t), !0) : !1;
  }
  function ou(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Kd = /[\n"\\]/g;
  function Ae(t) {
    return t.replace(
      Kd,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ji(t, e, l, n, a, u, c, r) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), e != null ? c === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Te(e)) : t.value !== "" + Te(e) && (t.value = "" + Te(e)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), e != null ? Yi(t, c, Te(e)) : l != null ? Yi(t, c, Te(l)) : n != null && t.removeAttribute("value"), a == null && u != null && (t.defaultChecked = !!u), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? t.name = "" + Te(r) : t.removeAttribute("name");
  }
  function Af(t, e, l, n, a, u, c, r) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        Hi(t);
        return;
      }
      l = l != null ? "" + Te(l) : "", e = e != null ? "" + Te(e) : l, r || e === t.value || (t.value = e), t.defaultValue = e;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = r ? t.checked : !!n, t.defaultChecked = !!n, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c), Hi(t);
  }
  function Yi(t, e, l) {
    e === "number" && ou(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function Rn(t, e, l, n) {
    if (t = t.options, e) {
      e = {};
      for (var a = 0; a < l.length; a++)
        e["$" + l[a]] = !0;
      for (l = 0; l < t.length; l++)
        a = e.hasOwnProperty("$" + t[l].value), t[l].selected !== a && (t[l].selected = a), a && n && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + Te(l), e = null, a = 0; a < t.length; a++) {
        if (t[a].value === l) {
          t[a].selected = !0, n && (t[a].defaultSelected = !0);
          return;
        }
        e !== null || t[a].disabled || (e = t[a]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Of(t, e, l) {
    if (e != null && (e = "" + Te(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Te(l) : "";
  }
  function zf(t, e, l, n) {
    if (e == null) {
      if (n != null) {
        if (l != null) throw Error(f(92));
        if (Pt(n)) {
          if (1 < n.length) throw Error(f(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), e = l;
    }
    l = Te(e), t.defaultValue = l, n = t.textContent, n === l && n !== "" && n !== null && (t.value = n), Hi(t);
  }
  function Cn(t, e) {
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
  function Nf(t, e, l) {
    var n = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : n ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Jd.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function Rf(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(f(62));
    if (t = t.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "");
      for (var a in e)
        n = e[a], e.hasOwnProperty(a) && l[a] !== n && Nf(t, a, n);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && Nf(t, u, e[u]);
  }
  function Li(t) {
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
  function ru(t) {
    return Wd.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function tl() {
  }
  var Gi = null;
  function Xi(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Dn = null, Mn = null;
  function Cf(t) {
    var e = On(t);
    if (e && (t = e.stateNode)) {
      var l = t[ue] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (ji(
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
              'input[name="' + Ae(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var n = l[e];
              if (n !== t && n.form === t.form) {
                var a = n[ue] || null;
                if (!a) throw Error(f(90));
                ji(
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
              n = l[e], n.form === t.form && Tf(n);
          }
          break t;
        case "textarea":
          Of(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && Rn(t, !!l.multiple, e, !1);
      }
    }
  }
  var Qi = !1;
  function Df(t, e, l) {
    if (Qi) return t(e, l);
    Qi = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (Qi = !1, (Dn !== null || Mn !== null) && (Iu(), Dn && (e = Dn, t = Mn, Mn = Dn = null, Cf(e), t)))
        for (e = 0; e < t.length; e++) Cf(t[e]);
    }
  }
  function da(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var n = l[ue] || null;
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
  var el = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Vi = !1;
  if (el)
    try {
      var ya = {};
      Object.defineProperty(ya, "passive", {
        get: function() {
          Vi = !0;
        }
      }), window.addEventListener("test", ya, ya), window.removeEventListener("test", ya, ya);
    } catch {
      Vi = !1;
    }
  var _l = null, wi = null, hu = null;
  function Mf() {
    if (hu) return hu;
    var t, e = wi, l = e.length, n, a = "value" in _l ? _l.value : _l.textContent, u = a.length;
    for (t = 0; t < l && e[t] === a[t]; t++) ;
    var c = l - t;
    for (n = 1; n <= c && e[l - n] === a[u - n]; n++) ;
    return hu = a.slice(t, 1 < n ? 1 - n : void 0);
  }
  function du(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function yu() {
    return !0;
  }
  function Uf() {
    return !1;
  }
  function ie(t) {
    function e(l, n, a, u, c) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var r in t)
        t.hasOwnProperty(r) && (l = t[r], this[r] = l ? l(u) : u[r]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? yu : Uf, this.isPropagationStopped = Uf, this;
    }
    return U(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = yu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = yu);
      },
      persist: function() {
      },
      isPersistent: yu
    }), e;
  }
  var ln = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, mu = ie(ln), ma = U({}, ln, { view: 0, detail: 0 }), $d = ie(ma), Zi, Ki, va, vu = U({}, ma, {
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
    getModifierState: ki,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== va && (va && t.type === "mousemove" ? (Zi = t.screenX - va.screenX, Ki = t.screenY - va.screenY) : Ki = Zi = 0, va = t), Zi);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Ki;
    }
  }), qf = ie(vu), Fd = U({}, vu, { dataTransfer: 0 }), Id = ie(Fd), Pd = U({}, ma, { relatedTarget: 0 }), Ji = ie(Pd), ty = U({}, ln, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ey = ie(ty), ly = U({}, ln, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), ny = ie(ly), ay = U({}, ln, { data: 0 }), Bf = ie(ay), uy = {
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
  }, iy = {
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
  }, cy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function sy(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = cy[t]) ? !!e[t] : !1;
  }
  function ki() {
    return sy;
  }
  var fy = U({}, ma, {
    key: function(t) {
      if (t.key) {
        var e = uy[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = du(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? iy[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ki,
    charCode: function(t) {
      return t.type === "keypress" ? du(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? du(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), oy = ie(fy), ry = U({}, vu, {
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
  }), xf = ie(ry), hy = U({}, ma, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ki
  }), dy = ie(hy), yy = U({}, ln, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), my = ie(yy), vy = U({}, vu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), gy = ie(vy), py = U({}, ln, {
    newState: 0,
    oldState: 0
  }), by = ie(py), Sy = [9, 13, 27, 32], Wi = el && "CompositionEvent" in window, ga = null;
  el && "documentMode" in document && (ga = document.documentMode);
  var _y = el && "TextEvent" in window && !ga, Hf = el && (!Wi || ga && 8 < ga && 11 >= ga), jf = " ", Yf = !1;
  function Lf(t, e) {
    switch (t) {
      case "keyup":
        return Sy.indexOf(e.keyCode) !== -1;
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
  function Gf(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Un = !1;
  function Ey(t, e) {
    switch (t) {
      case "compositionend":
        return Gf(e);
      case "keypress":
        return e.which !== 32 ? null : (Yf = !0, jf);
      case "textInput":
        return t = e.data, t === jf && Yf ? null : t;
      default:
        return null;
    }
  }
  function Ty(t, e) {
    if (Un)
      return t === "compositionend" || !Wi && Lf(t, e) ? (t = Mf(), hu = wi = _l = null, Un = !1, t) : null;
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
        return Hf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Ay = {
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
  function Xf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Ay[t.type] : e === "textarea";
  }
  function Qf(t, e, l, n) {
    Dn ? Mn ? Mn.push(n) : Mn = [n] : Dn = n, e = ui(e, "onChange"), 0 < e.length && (l = new mu(
      "onChange",
      "change",
      null,
      l,
      n
    ), t.push({ event: l, listeners: e }));
  }
  var pa = null, ba = null;
  function Oy(t) {
    Oh(t, 0);
  }
  function gu(t) {
    var e = ha(t);
    if (Tf(e)) return t;
  }
  function Vf(t, e) {
    if (t === "change") return e;
  }
  var wf = !1;
  if (el) {
    var $i;
    if (el) {
      var Fi = "oninput" in document;
      if (!Fi) {
        var Zf = document.createElement("div");
        Zf.setAttribute("oninput", "return;"), Fi = typeof Zf.oninput == "function";
      }
      $i = Fi;
    } else $i = !1;
    wf = $i && (!document.documentMode || 9 < document.documentMode);
  }
  function Kf() {
    pa && (pa.detachEvent("onpropertychange", Jf), ba = pa = null);
  }
  function Jf(t) {
    if (t.propertyName === "value" && gu(ba)) {
      var e = [];
      Qf(
        e,
        ba,
        t,
        Xi(t)
      ), Df(Oy, e);
    }
  }
  function zy(t, e, l) {
    t === "focusin" ? (Kf(), pa = e, ba = l, pa.attachEvent("onpropertychange", Jf)) : t === "focusout" && Kf();
  }
  function Ny(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return gu(ba);
  }
  function Ry(t, e) {
    if (t === "click") return gu(e);
  }
  function Cy(t, e) {
    if (t === "input" || t === "change")
      return gu(e);
  }
  function Dy(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ye = typeof Object.is == "function" ? Object.is : Dy;
  function Sa(t, e) {
    if (ye(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), n = Object.keys(e);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!xe.call(e, a) || !ye(t[a], e[a]))
        return !1;
    }
    return !0;
  }
  function kf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Wf(t, e) {
    var l = kf(t);
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
      l = kf(l);
    }
  }
  function $f(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? $f(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Ff(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = ou(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = ou(t.document);
    }
    return e;
  }
  function Ii(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var My = el && "documentMode" in document && 11 >= document.documentMode, qn = null, Pi = null, _a = null, tc = !1;
  function If(t, e, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    tc || qn == null || qn !== ou(n) || (n = qn, "selectionStart" in n && Ii(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), _a && Sa(_a, n) || (_a = n, n = ui(Pi, "onSelect"), 0 < n.length && (e = new mu(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: n }), e.target = qn)));
  }
  function nn(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var Bn = {
    animationend: nn("Animation", "AnimationEnd"),
    animationiteration: nn("Animation", "AnimationIteration"),
    animationstart: nn("Animation", "AnimationStart"),
    transitionrun: nn("Transition", "TransitionRun"),
    transitionstart: nn("Transition", "TransitionStart"),
    transitioncancel: nn("Transition", "TransitionCancel"),
    transitionend: nn("Transition", "TransitionEnd")
  }, ec = {}, Pf = {};
  el && (Pf = document.createElement("div").style, "AnimationEvent" in window || (delete Bn.animationend.animation, delete Bn.animationiteration.animation, delete Bn.animationstart.animation), "TransitionEvent" in window || delete Bn.transitionend.transition);
  function an(t) {
    if (ec[t]) return ec[t];
    if (!Bn[t]) return t;
    var e = Bn[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Pf)
        return ec[t] = e[l];
    return t;
  }
  var to = an("animationend"), eo = an("animationiteration"), lo = an("animationstart"), Uy = an("transitionrun"), qy = an("transitionstart"), By = an("transitioncancel"), no = an("transitionend"), ao = /* @__PURE__ */ new Map(), lc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  lc.push("scrollEnd");
  function He(t, e) {
    ao.set(t, e), en(e, [t]);
  }
  var pu = typeof reportError == "function" ? reportError : function(t) {
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
  }, Oe = [], xn = 0, nc = 0;
  function bu() {
    for (var t = xn, e = nc = xn = 0; e < t; ) {
      var l = Oe[e];
      Oe[e++] = null;
      var n = Oe[e];
      Oe[e++] = null;
      var a = Oe[e];
      Oe[e++] = null;
      var u = Oe[e];
      if (Oe[e++] = null, n !== null && a !== null) {
        var c = n.pending;
        c === null ? a.next = a : (a.next = c.next, c.next = a), n.pending = a;
      }
      u !== 0 && uo(l, a, u);
    }
  }
  function Su(t, e, l, n) {
    Oe[xn++] = t, Oe[xn++] = e, Oe[xn++] = l, Oe[xn++] = n, nc |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
  }
  function ac(t, e, l, n) {
    return Su(t, e, l, n), _u(t);
  }
  function un(t, e) {
    return Su(t, null, null, e), _u(t);
  }
  function uo(t, e, l) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, u = t.return; u !== null; )
      u.childLanes |= l, n = u.alternate, n !== null && (n.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (a = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, a && e !== null && (a = 31 - te(l), t = u.hiddenUpdates, n = t[a], n === null ? t[a] = [e] : n.push(e), e.lane = l | 536870912), u) : null;
  }
  function _u(t) {
    if (50 < Va)
      throw Va = 0, ds = null, Error(f(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Hn = {};
  function xy(t, e, l, n) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function me(t, e, l, n) {
    return new xy(t, e, l, n);
  }
  function uc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function ll(t, e) {
    var l = t.alternate;
    return l === null ? (l = me(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function io(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Eu(t, e, l, n, a, u) {
    var c = 0;
    if (n = t, typeof t == "function") uc(t) && (c = 1);
    else if (typeof t == "string")
      c = Gm(
        t,
        l,
        x.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case he:
          return t = me(31, l, e, a), t.elementType = he, t.lanes = u, t;
        case Gt:
          return cn(l.children, a, u, e);
        case Ot:
          c = 8, a |= 24;
          break;
        case le:
          return t = me(12, l, e, a | 2), t.elementType = le, t.lanes = u, t;
        case _e:
          return t = me(13, l, e, a), t.elementType = _e, t.lanes = u, t;
        case St:
          return t = me(19, l, e, a), t.elementType = St, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Xt:
                c = 10;
                break t;
              case Ge:
                c = 9;
                break t;
              case wt:
                c = 11;
                break t;
              case K:
                c = 14;
                break t;
              case Zt:
                c = 16, n = null;
                break t;
            }
          c = 29, l = Error(
            f(130, t === null ? "null" : typeof t, "")
          ), n = null;
      }
    return e = me(c, l, e, a), e.elementType = t, e.type = n, e.lanes = u, e;
  }
  function cn(t, e, l, n) {
    return t = me(7, t, n, e), t.lanes = l, t;
  }
  function ic(t, e, l) {
    return t = me(6, t, null, e), t.lanes = l, t;
  }
  function co(t) {
    var e = me(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function cc(t, e, l) {
    return e = me(
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
  var so = /* @__PURE__ */ new WeakMap();
  function ze(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = so.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: au(e)
      }, so.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: au(e)
    };
  }
  var jn = [], Yn = 0, Tu = null, Ea = 0, Ne = [], Re = 0, El = null, Ze = 1, Ke = "";
  function nl(t, e) {
    jn[Yn++] = Ea, jn[Yn++] = Tu, Tu = t, Ea = e;
  }
  function fo(t, e, l) {
    Ne[Re++] = Ze, Ne[Re++] = Ke, Ne[Re++] = El, El = t;
    var n = Ze;
    t = Ke;
    var a = 32 - te(n) - 1;
    n &= ~(1 << a), l += 1;
    var u = 32 - te(e) + a;
    if (30 < u) {
      var c = a - a % 5;
      u = (n & (1 << c) - 1).toString(32), n >>= c, a -= c, Ze = 1 << 32 - te(e) + a | l << a | n, Ke = u + t;
    } else
      Ze = 1 << u | l << a | n, Ke = t;
  }
  function sc(t) {
    t.return !== null && (nl(t, 1), fo(t, 1, 0));
  }
  function fc(t) {
    for (; t === Tu; )
      Tu = jn[--Yn], jn[Yn] = null, Ea = jn[--Yn], jn[Yn] = null;
    for (; t === El; )
      El = Ne[--Re], Ne[Re] = null, Ke = Ne[--Re], Ne[Re] = null, Ze = Ne[--Re], Ne[Re] = null;
  }
  function oo(t, e) {
    Ne[Re++] = Ze, Ne[Re++] = Ke, Ne[Re++] = El, Ze = e.id, Ke = e.overflow, El = t;
  }
  var Jt = null, _t = null, at = !1, Tl = null, Ce = !1, oc = Error(f(519));
  function Al(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ta(ze(e, t)), oc;
  }
  function ro(t) {
    var e = t.stateNode, l = t.type, n = t.memoizedProps;
    switch (e[Kt] = t, e[ue] = n, l) {
      case "dialog":
        tt("cancel", e), tt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        tt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Za.length; l++)
          tt(Za[l], e);
        break;
      case "source":
        tt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        tt("error", e), tt("load", e);
        break;
      case "details":
        tt("toggle", e);
        break;
      case "input":
        tt("invalid", e), Af(
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
        tt("invalid", e);
        break;
      case "textarea":
        tt("invalid", e), zf(e, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || n.suppressHydrationWarning === !0 || Ch(e.textContent, l) ? (n.popover != null && (tt("beforetoggle", e), tt("toggle", e)), n.onScroll != null && tt("scroll", e), n.onScrollEnd != null && tt("scrollend", e), n.onClick != null && (e.onclick = tl), e = !0) : e = !1, e || Al(t, !0);
  }
  function ho(t) {
    for (Jt = t.return; Jt; )
      switch (Jt.tag) {
        case 5:
        case 31:
        case 13:
          Ce = !1;
          return;
        case 27:
        case 3:
          Ce = !0;
          return;
        default:
          Jt = Jt.return;
      }
  }
  function Ln(t) {
    if (t !== Jt) return !1;
    if (!at) return ho(t), at = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Rs(t.type, t.memoizedProps)), l = !l), l && _t && Al(t), ho(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      _t = Yh(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      _t = Yh(t);
    } else
      e === 27 ? (e = _t, Yl(t.type) ? (t = qs, qs = null, _t = t) : _t = e) : _t = Jt ? Me(t.stateNode.nextSibling) : null;
    return !0;
  }
  function sn() {
    _t = Jt = null, at = !1;
  }
  function rc() {
    var t = Tl;
    return t !== null && (oe === null ? oe = t : oe.push.apply(
      oe,
      t
    ), Tl = null), t;
  }
  function Ta(t) {
    Tl === null ? Tl = [t] : Tl.push(t);
  }
  var hc = y(null), fn = null, al = null;
  function Ol(t, e, l) {
    B(hc, e._currentValue), e._currentValue = l;
  }
  function ul(t) {
    t._currentValue = hc.current, N(hc);
  }
  function dc(t, e, l) {
    for (; t !== null; ) {
      var n = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function yc(t, e, l, n) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var u = a.dependencies;
      if (u !== null) {
        var c = a.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var r = u;
          u = a;
          for (var h = 0; h < e.length; h++)
            if (r.context === e[h]) {
              u.lanes |= l, r = u.alternate, r !== null && (r.lanes |= l), dc(
                u.return,
                l,
                t
              ), n || (c = null);
              break t;
            }
          u = r.next;
        }
      } else if (a.tag === 18) {
        if (c = a.return, c === null) throw Error(f(341));
        c.lanes |= l, u = c.alternate, u !== null && (u.lanes |= l), dc(c, l, t), c = null;
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
  function Gn(t, e, l, n) {
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
          var r = a.type;
          ye(a.pendingProps.value, c.value) || (t !== null ? t.push(r) : t = [r]);
        }
      } else if (a === I.current) {
        if (c = a.alternate, c === null) throw Error(f(387));
        c.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push($a) : t = [$a]);
      }
      a = a.return;
    }
    t !== null && yc(
      e,
      t,
      l,
      n
    ), e.flags |= 262144;
  }
  function Au(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ye(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function on(t) {
    fn = t, al = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function kt(t) {
    return yo(fn, t);
  }
  function Ou(t, e) {
    return fn === null && on(t), yo(t, e);
  }
  function yo(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, al === null) {
      if (t === null) throw Error(f(308));
      al = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else al = al.next = e;
    return l;
  }
  var Hy = typeof AbortController < "u" ? AbortController : function() {
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
  }, jy = o.unstable_scheduleCallback, Yy = o.unstable_NormalPriority, Bt = {
    $$typeof: Xt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function mc() {
    return {
      controller: new Hy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Aa(t) {
    t.refCount--, t.refCount === 0 && jy(Yy, function() {
      t.controller.abort();
    });
  }
  var Oa = null, vc = 0, Xn = 0, Qn = null;
  function Ly(t, e) {
    if (Oa === null) {
      var l = Oa = [];
      vc = 0, Xn = bs(), Qn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return vc++, e.then(mo, mo), e;
  }
  function mo() {
    if (--vc === 0 && Oa !== null) {
      Qn !== null && (Qn.status = "fulfilled");
      var t = Oa;
      Oa = null, Xn = 0, Qn = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Gy(t, e) {
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
  var vo = A.S;
  A.S = function(t, e) {
    Pr = qt(), typeof e == "object" && e !== null && typeof e.then == "function" && Ly(t, e), vo !== null && vo(t, e);
  };
  var rn = y(null);
  function gc() {
    var t = rn.current;
    return t !== null ? t : bt.pooledCache;
  }
  function zu(t, e) {
    e === null ? B(rn, rn.current) : B(rn, e.pool);
  }
  function go() {
    var t = gc();
    return t === null ? null : { parent: Bt._currentValue, pool: t };
  }
  var Vn = Error(f(460)), pc = Error(f(474)), Nu = Error(f(542)), Ru = { then: function() {
  } };
  function po(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function bo(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(tl, tl), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, _o(t), t;
      default:
        if (typeof e.status == "string") e.then(tl, tl);
        else {
          if (t = bt, t !== null && 100 < t.shellSuspendCounter)
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
            throw t = e.reason, _o(t), t;
        }
        throw dn = e, Vn;
    }
  }
  function hn(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (dn = l, Vn) : l;
    }
  }
  var dn = null;
  function So() {
    if (dn === null) throw Error(f(459));
    var t = dn;
    return dn = null, t;
  }
  function _o(t) {
    if (t === Vn || t === Nu)
      throw Error(f(483));
  }
  var wn = null, za = 0;
  function Cu(t) {
    var e = za;
    return za += 1, wn === null && (wn = []), bo(wn, t, e);
  }
  function Na(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Du(t, e) {
    throw e.$$typeof === it ? Error(f(525)) : (t = Object.prototype.toString.call(e), Error(
      f(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Eo(t) {
    function e(m, d) {
      if (t) {
        var g = m.deletions;
        g === null ? (m.deletions = [d], m.flags |= 16) : g.push(d);
      }
    }
    function l(m, d) {
      if (!t) return null;
      for (; d !== null; )
        e(m, d), d = d.sibling;
      return null;
    }
    function n(m) {
      for (var d = /* @__PURE__ */ new Map(); m !== null; )
        m.key !== null ? d.set(m.key, m) : d.set(m.index, m), m = m.sibling;
      return d;
    }
    function a(m, d) {
      return m = ll(m, d), m.index = 0, m.sibling = null, m;
    }
    function u(m, d, g) {
      return m.index = g, t ? (g = m.alternate, g !== null ? (g = g.index, g < d ? (m.flags |= 67108866, d) : g) : (m.flags |= 67108866, d)) : (m.flags |= 1048576, d);
    }
    function c(m) {
      return t && m.alternate === null && (m.flags |= 67108866), m;
    }
    function r(m, d, g, O) {
      return d === null || d.tag !== 6 ? (d = ic(g, m.mode, O), d.return = m, d) : (d = a(d, g), d.return = m, d);
    }
    function h(m, d, g, O) {
      var X = g.type;
      return X === Gt ? E(
        m,
        d,
        g.props.children,
        O,
        g.key
      ) : d !== null && (d.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Zt && hn(X) === d.type) ? (d = a(d, g.props), Na(d, g), d.return = m, d) : (d = Eu(
        g.type,
        g.key,
        g.props,
        null,
        m.mode,
        O
      ), Na(d, g), d.return = m, d);
    }
    function p(m, d, g, O) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== g.containerInfo || d.stateNode.implementation !== g.implementation ? (d = cc(g, m.mode, O), d.return = m, d) : (d = a(d, g.children || []), d.return = m, d);
    }
    function E(m, d, g, O, X) {
      return d === null || d.tag !== 7 ? (d = cn(
        g,
        m.mode,
        O,
        X
      ), d.return = m, d) : (d = a(d, g), d.return = m, d);
    }
    function z(m, d, g) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return d = ic(
          "" + d,
          m.mode,
          g
        ), d.return = m, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case zt:
            return g = Eu(
              d.type,
              d.key,
              d.props,
              null,
              m.mode,
              g
            ), Na(g, d), g.return = m, g;
          case Ft:
            return d = cc(
              d,
              m.mode,
              g
            ), d.return = m, d;
          case Zt:
            return d = hn(d), z(m, d, g);
        }
        if (Pt(d) || Nt(d))
          return d = cn(
            d,
            m.mode,
            g,
            null
          ), d.return = m, d;
        if (typeof d.then == "function")
          return z(m, Cu(d), g);
        if (d.$$typeof === Xt)
          return z(
            m,
            Ou(m, d),
            g
          );
        Du(m, d);
      }
      return null;
    }
    function b(m, d, g, O) {
      var X = d !== null ? d.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return X !== null ? null : r(m, d, "" + g, O);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case zt:
            return g.key === X ? h(m, d, g, O) : null;
          case Ft:
            return g.key === X ? p(m, d, g, O) : null;
          case Zt:
            return g = hn(g), b(m, d, g, O);
        }
        if (Pt(g) || Nt(g))
          return X !== null ? null : E(m, d, g, O, null);
        if (typeof g.then == "function")
          return b(
            m,
            d,
            Cu(g),
            O
          );
        if (g.$$typeof === Xt)
          return b(
            m,
            d,
            Ou(m, g),
            O
          );
        Du(m, g);
      }
      return null;
    }
    function _(m, d, g, O, X) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return m = m.get(g) || null, r(d, m, "" + O, X);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case zt:
            return m = m.get(
              O.key === null ? g : O.key
            ) || null, h(d, m, O, X);
          case Ft:
            return m = m.get(
              O.key === null ? g : O.key
            ) || null, p(d, m, O, X);
          case Zt:
            return O = hn(O), _(
              m,
              d,
              g,
              O,
              X
            );
        }
        if (Pt(O) || Nt(O))
          return m = m.get(g) || null, E(d, m, O, X, null);
        if (typeof O.then == "function")
          return _(
            m,
            d,
            g,
            Cu(O),
            X
          );
        if (O.$$typeof === Xt)
          return _(
            m,
            d,
            g,
            Ou(d, O),
            X
          );
        Du(d, O);
      }
      return null;
    }
    function H(m, d, g, O) {
      for (var X = null, st = null, Y = d, $ = d = 0, nt = null; Y !== null && $ < g.length; $++) {
        Y.index > $ ? (nt = Y, Y = null) : nt = Y.sibling;
        var ft = b(
          m,
          Y,
          g[$],
          O
        );
        if (ft === null) {
          Y === null && (Y = nt);
          break;
        }
        t && Y && ft.alternate === null && e(m, Y), d = u(ft, d, $), st === null ? X = ft : st.sibling = ft, st = ft, Y = nt;
      }
      if ($ === g.length)
        return l(m, Y), at && nl(m, $), X;
      if (Y === null) {
        for (; $ < g.length; $++)
          Y = z(m, g[$], O), Y !== null && (d = u(
            Y,
            d,
            $
          ), st === null ? X = Y : st.sibling = Y, st = Y);
        return at && nl(m, $), X;
      }
      for (Y = n(Y); $ < g.length; $++)
        nt = _(
          Y,
          m,
          $,
          g[$],
          O
        ), nt !== null && (t && nt.alternate !== null && Y.delete(
          nt.key === null ? $ : nt.key
        ), d = u(
          nt,
          d,
          $
        ), st === null ? X = nt : st.sibling = nt, st = nt);
      return t && Y.forEach(function(Vl) {
        return e(m, Vl);
      }), at && nl(m, $), X;
    }
    function V(m, d, g, O) {
      if (g == null) throw Error(f(151));
      for (var X = null, st = null, Y = d, $ = d = 0, nt = null, ft = g.next(); Y !== null && !ft.done; $++, ft = g.next()) {
        Y.index > $ ? (nt = Y, Y = null) : nt = Y.sibling;
        var Vl = b(m, Y, ft.value, O);
        if (Vl === null) {
          Y === null && (Y = nt);
          break;
        }
        t && Y && Vl.alternate === null && e(m, Y), d = u(Vl, d, $), st === null ? X = Vl : st.sibling = Vl, st = Vl, Y = nt;
      }
      if (ft.done)
        return l(m, Y), at && nl(m, $), X;
      if (Y === null) {
        for (; !ft.done; $++, ft = g.next())
          ft = z(m, ft.value, O), ft !== null && (d = u(ft, d, $), st === null ? X = ft : st.sibling = ft, st = ft);
        return at && nl(m, $), X;
      }
      for (Y = n(Y); !ft.done; $++, ft = g.next())
        ft = _(Y, m, $, ft.value, O), ft !== null && (t && ft.alternate !== null && Y.delete(ft.key === null ? $ : ft.key), d = u(ft, d, $), st === null ? X = ft : st.sibling = ft, st = ft);
      return t && Y.forEach(function(Fm) {
        return e(m, Fm);
      }), at && nl(m, $), X;
    }
    function gt(m, d, g, O) {
      if (typeof g == "object" && g !== null && g.type === Gt && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case zt:
            t: {
              for (var X = g.key; d !== null; ) {
                if (d.key === X) {
                  if (X = g.type, X === Gt) {
                    if (d.tag === 7) {
                      l(
                        m,
                        d.sibling
                      ), O = a(
                        d,
                        g.props.children
                      ), O.return = m, m = O;
                      break t;
                    }
                  } else if (d.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Zt && hn(X) === d.type) {
                    l(
                      m,
                      d.sibling
                    ), O = a(d, g.props), Na(O, g), O.return = m, m = O;
                    break t;
                  }
                  l(m, d);
                  break;
                } else e(m, d);
                d = d.sibling;
              }
              g.type === Gt ? (O = cn(
                g.props.children,
                m.mode,
                O,
                g.key
              ), O.return = m, m = O) : (O = Eu(
                g.type,
                g.key,
                g.props,
                null,
                m.mode,
                O
              ), Na(O, g), O.return = m, m = O);
            }
            return c(m);
          case Ft:
            t: {
              for (X = g.key; d !== null; ) {
                if (d.key === X)
                  if (d.tag === 4 && d.stateNode.containerInfo === g.containerInfo && d.stateNode.implementation === g.implementation) {
                    l(
                      m,
                      d.sibling
                    ), O = a(d, g.children || []), O.return = m, m = O;
                    break t;
                  } else {
                    l(m, d);
                    break;
                  }
                else e(m, d);
                d = d.sibling;
              }
              O = cc(g, m.mode, O), O.return = m, m = O;
            }
            return c(m);
          case Zt:
            return g = hn(g), gt(
              m,
              d,
              g,
              O
            );
        }
        if (Pt(g))
          return H(
            m,
            d,
            g,
            O
          );
        if (Nt(g)) {
          if (X = Nt(g), typeof X != "function") throw Error(f(150));
          return g = X.call(g), V(
            m,
            d,
            g,
            O
          );
        }
        if (typeof g.then == "function")
          return gt(
            m,
            d,
            Cu(g),
            O
          );
        if (g.$$typeof === Xt)
          return gt(
            m,
            d,
            Ou(m, g),
            O
          );
        Du(m, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, d !== null && d.tag === 6 ? (l(m, d.sibling), O = a(d, g), O.return = m, m = O) : (l(m, d), O = ic(g, m.mode, O), O.return = m, m = O), c(m)) : l(m, d);
    }
    return function(m, d, g, O) {
      try {
        za = 0;
        var X = gt(
          m,
          d,
          g,
          O
        );
        return wn = null, X;
      } catch (Y) {
        if (Y === Vn || Y === Nu) throw Y;
        var st = me(29, Y, null, m.mode);
        return st.lanes = O, st.return = m, st;
      }
    };
  }
  var yn = Eo(!0), To = Eo(!1), zl = !1;
  function bc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Sc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Nl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Rl(t, e, l) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (rt & 2) !== 0) {
      var a = n.pending;
      return a === null ? e.next = e : (e.next = a.next, a.next = e), n.pending = e, e = _u(t), uo(t, null, l), e;
    }
    return Su(t, n, e, l), _u(t);
  }
  function Ra(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, df(t, l);
    }
  }
  function _c(t, e) {
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
  var Ec = !1;
  function Ca() {
    if (Ec) {
      var t = Qn;
      if (t !== null) throw t;
    }
  }
  function Da(t, e, l, n) {
    Ec = !1;
    var a = t.updateQueue;
    zl = !1;
    var u = a.firstBaseUpdate, c = a.lastBaseUpdate, r = a.shared.pending;
    if (r !== null) {
      a.shared.pending = null;
      var h = r, p = h.next;
      h.next = null, c === null ? u = p : c.next = p, c = h;
      var E = t.alternate;
      E !== null && (E = E.updateQueue, r = E.lastBaseUpdate, r !== c && (r === null ? E.firstBaseUpdate = p : r.next = p, E.lastBaseUpdate = h));
    }
    if (u !== null) {
      var z = a.baseState;
      c = 0, E = p = h = null, r = u;
      do {
        var b = r.lane & -536870913, _ = b !== r.lane;
        if (_ ? (lt & b) === b : (n & b) === b) {
          b !== 0 && b === Xn && (Ec = !0), E !== null && (E = E.next = {
            lane: 0,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          });
          t: {
            var H = t, V = r;
            b = e;
            var gt = l;
            switch (V.tag) {
              case 1:
                if (H = V.payload, typeof H == "function") {
                  z = H.call(gt, z, b);
                  break t;
                }
                z = H;
                break t;
              case 3:
                H.flags = H.flags & -65537 | 128;
              case 0:
                if (H = V.payload, b = typeof H == "function" ? H.call(gt, z, b) : H, b == null) break t;
                z = U({}, z, b);
                break t;
              case 2:
                zl = !0;
            }
          }
          b = r.callback, b !== null && (t.flags |= 64, _ && (t.flags |= 8192), _ = a.callbacks, _ === null ? a.callbacks = [b] : _.push(b));
        } else
          _ = {
            lane: b,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null
          }, E === null ? (p = E = _, h = z) : E = E.next = _, c |= b;
        if (r = r.next, r === null) {
          if (r = a.shared.pending, r === null)
            break;
          _ = r, r = _.next, _.next = null, a.lastBaseUpdate = _, a.shared.pending = null;
        }
      } while (!0);
      E === null && (h = z), a.baseState = h, a.firstBaseUpdate = p, a.lastBaseUpdate = E, u === null && (a.shared.lanes = 0), ql |= c, t.lanes = c, t.memoizedState = z;
    }
  }
  function Ao(t, e) {
    if (typeof t != "function")
      throw Error(f(191, t));
    t.call(e);
  }
  function Oo(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        Ao(l[t], e);
  }
  var Zn = y(null), Mu = y(0);
  function zo(t, e) {
    t = yl, B(Mu, t), B(Zn, e), yl = t | e.baseLanes;
  }
  function Tc() {
    B(Mu, yl), B(Zn, Zn.current);
  }
  function Ac() {
    yl = Mu.current, N(Zn), N(Mu);
  }
  var ve = y(null), De = null;
  function Cl(t) {
    var e = t.alternate;
    B(Mt, Mt.current & 1), B(ve, t), De === null && (e === null || Zn.current !== null || e.memoizedState !== null) && (De = t);
  }
  function Oc(t) {
    B(Mt, Mt.current), B(ve, t), De === null && (De = t);
  }
  function No(t) {
    t.tag === 22 ? (B(Mt, Mt.current), B(ve, t), De === null && (De = t)) : Dl();
  }
  function Dl() {
    B(Mt, Mt.current), B(ve, ve.current);
  }
  function ge(t) {
    N(ve), De === t && (De = null), N(Mt);
  }
  var Mt = y(0);
  function Uu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Ms(l) || Us(l)))
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
  var il = 0, W = null, mt = null, xt = null, qu = !1, Kn = !1, mn = !1, Bu = 0, Ma = 0, Jn = null, Xy = 0;
  function Rt() {
    throw Error(f(321));
  }
  function zc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ye(t[l], e[l])) return !1;
    return !0;
  }
  function Nc(t, e, l, n, a, u) {
    return il = u, W = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, A.H = t === null || t.memoizedState === null ? or : Qc, mn = !1, u = l(n, a), mn = !1, Kn && (u = Co(
      e,
      l,
      n,
      a
    )), Ro(t), u;
  }
  function Ro(t) {
    A.H = Ba;
    var e = mt !== null && mt.next !== null;
    if (il = 0, xt = mt = W = null, qu = !1, Ma = 0, Jn = null, e) throw Error(f(300));
    t === null || Ht || (t = t.dependencies, t !== null && Au(t) && (Ht = !0));
  }
  function Co(t, e, l, n) {
    W = t;
    var a = 0;
    do {
      if (Kn && (Jn = null), Ma = 0, Kn = !1, 25 <= a) throw Error(f(301));
      if (a += 1, xt = mt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      A.H = rr, u = e(l, n);
    } while (Kn);
    return u;
  }
  function Qy() {
    var t = A.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Ua(e) : e, t = t.useState()[0], (mt !== null ? mt.memoizedState : null) !== t && (W.flags |= 1024), e;
  }
  function Rc() {
    var t = Bu !== 0;
    return Bu = 0, t;
  }
  function Cc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function Dc(t) {
    if (qu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      qu = !1;
    }
    il = 0, xt = mt = W = null, Kn = !1, Ma = Bu = 0, Jn = null;
  }
  function ae() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return xt === null ? W.memoizedState = xt = t : xt = xt.next = t, xt;
  }
  function Ut() {
    if (mt === null) {
      var t = W.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = mt.next;
    var e = xt === null ? W.memoizedState : xt.next;
    if (e !== null)
      xt = e, mt = t;
    else {
      if (t === null)
        throw W.alternate === null ? Error(f(467)) : Error(f(310));
      mt = t, t = {
        memoizedState: mt.memoizedState,
        baseState: mt.baseState,
        baseQueue: mt.baseQueue,
        queue: mt.queue,
        next: null
      }, xt === null ? W.memoizedState = xt = t : xt = xt.next = t;
    }
    return xt;
  }
  function xu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ua(t) {
    var e = Ma;
    return Ma += 1, Jn === null && (Jn = []), t = bo(Jn, t, e), e = W, (xt === null ? e.memoizedState : xt.next) === null && (e = e.alternate, A.H = e === null || e.memoizedState === null ? or : Qc), t;
  }
  function Hu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ua(t);
      if (t.$$typeof === Xt) return kt(t);
    }
    throw Error(f(438, String(t)));
  }
  function Mc(t) {
    var e = null, l = W.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var n = W.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (e = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = xu(), W.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), n = 0; n < t; n++)
        l[n] = Be;
    return e.index++, l;
  }
  function cl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ju(t) {
    var e = Ut();
    return Uc(e, mt, t);
  }
  function Uc(t, e, l) {
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
      var r = c = null, h = null, p = e, E = !1;
      do {
        var z = p.lane & -536870913;
        if (z !== p.lane ? (lt & z) === z : (il & z) === z) {
          var b = p.revertLane;
          if (b === 0)
            h !== null && (h = h.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }), z === Xn && (E = !0);
          else if ((il & b) === b) {
            p = p.next, b === Xn && (E = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: p.revertLane,
              gesture: null,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, h === null ? (r = h = z, c = u) : h = h.next = z, W.lanes |= b, ql |= b;
          z = p.action, mn && l(u, z), u = p.hasEagerState ? p.eagerState : l(u, z);
        } else
          b = {
            lane: z,
            revertLane: p.revertLane,
            gesture: p.gesture,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          }, h === null ? (r = h = b, c = u) : h = h.next = b, W.lanes |= z, ql |= z;
        p = p.next;
      } while (p !== null && p !== e);
      if (h === null ? c = u : h.next = r, !ye(u, t.memoizedState) && (Ht = !0, E && (l = Qn, l !== null)))
        throw l;
      t.memoizedState = u, t.baseState = c, t.baseQueue = h, n.lastRenderedState = u;
    }
    return a === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function qc(t) {
    var e = Ut(), l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var n = l.dispatch, a = l.pending, u = e.memoizedState;
    if (a !== null) {
      l.pending = null;
      var c = a = a.next;
      do
        u = t(u, c.action), c = c.next;
      while (c !== a);
      ye(u, e.memoizedState) || (Ht = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
    }
    return [u, n];
  }
  function Do(t, e, l) {
    var n = W, a = Ut(), u = at;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var c = !ye(
      (mt || a).memoizedState,
      l
    );
    if (c && (a.memoizedState = l, Ht = !0), a = a.queue, Hc(qo.bind(null, n, a, t), [
      t
    ]), a.getSnapshot !== e || c || xt !== null && xt.memoizedState.tag & 1) {
      if (n.flags |= 2048, kn(
        9,
        { destroy: void 0 },
        Uo.bind(
          null,
          n,
          a,
          l,
          e
        ),
        null
      ), bt === null) throw Error(f(349));
      u || (il & 127) !== 0 || Mo(n, e, l);
    }
    return l;
  }
  function Mo(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = W.updateQueue, e === null ? (e = xu(), W.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function Uo(t, e, l, n) {
    e.value = l, e.getSnapshot = n, Bo(e) && xo(t);
  }
  function qo(t, e, l) {
    return l(function() {
      Bo(e) && xo(t);
    });
  }
  function Bo(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ye(t, l);
    } catch {
      return !0;
    }
  }
  function xo(t) {
    var e = un(t, 2);
    e !== null && re(e, t, 2);
  }
  function Bc(t) {
    var e = ae();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), mn) {
        Ve(!0);
        try {
          l();
        } finally {
          Ve(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cl,
      lastRenderedState: t
    }, e;
  }
  function Ho(t, e, l, n) {
    return t.baseState = l, Uc(
      t,
      mt,
      typeof n == "function" ? n : cl
    );
  }
  function Vy(t, e, l, n, a) {
    if (Gu(t)) throw Error(f(485));
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
      A.T !== null ? l(!0) : u.isTransition = !1, n(u), l = e.pending, l === null ? (u.next = e.pending = u, jo(e, u)) : (u.next = l.next, e.pending = l.next = u);
    }
  }
  function jo(t, e) {
    var l = e.action, n = e.payload, a = t.state;
    if (e.isTransition) {
      var u = A.T, c = {};
      A.T = c;
      try {
        var r = l(a, n), h = A.S;
        h !== null && h(c, r), Yo(t, e, r);
      } catch (p) {
        xc(t, e, p);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), A.T = u;
      }
    } else
      try {
        u = l(a, n), Yo(t, e, u);
      } catch (p) {
        xc(t, e, p);
      }
  }
  function Yo(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        Lo(t, e, n);
      },
      function(n) {
        return xc(t, e, n);
      }
    ) : Lo(t, e, l);
  }
  function Lo(t, e, l) {
    e.status = "fulfilled", e.value = l, Go(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, jo(t, l)));
  }
  function xc(t, e, l) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        e.status = "rejected", e.reason = l, Go(e), e = e.next;
      while (e !== n);
    }
    t.action = null;
  }
  function Go(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Xo(t, e) {
    return e;
  }
  function Qo(t, e) {
    if (at) {
      var l = bt.formState;
      if (l !== null) {
        t: {
          var n = W;
          if (at) {
            if (_t) {
              e: {
                for (var a = _t, u = Ce; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break e;
                  }
                  if (a = Me(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break e;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                _t = Me(
                  a.nextSibling
                ), n = a.data === "F!";
                break t;
              }
            }
            Al(n);
          }
          n = !1;
        }
        n && (e = l[0]);
      }
    }
    return l = ae(), l.memoizedState = l.baseState = e, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xo,
      lastRenderedState: e
    }, l.queue = n, l = cr.bind(
      null,
      W,
      n
    ), n.dispatch = l, n = Bc(!1), u = Xc.bind(
      null,
      W,
      !1,
      n.queue
    ), n = ae(), a = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, n.queue = a, l = Vy.bind(
      null,
      W,
      a,
      u,
      l
    ), a.dispatch = l, n.memoizedState = t, [e, l, !1];
  }
  function Vo(t) {
    var e = Ut();
    return wo(e, mt, t);
  }
  function wo(t, e, l) {
    if (e = Uc(
      t,
      e,
      Xo
    )[0], t = ju(cl)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var n = Ua(e);
      } catch (c) {
        throw c === Vn ? Nu : c;
      }
    else n = e;
    e = Ut();
    var a = e.queue, u = a.dispatch;
    return l !== e.memoizedState && (W.flags |= 2048, kn(
      9,
      { destroy: void 0 },
      wy.bind(null, a, l),
      null
    )), [n, u, t];
  }
  function wy(t, e) {
    t.action = e;
  }
  function Zo(t) {
    var e = Ut(), l = mt;
    if (l !== null)
      return wo(e, l, t);
    Ut(), e = e.memoizedState, l = Ut();
    var n = l.queue.dispatch;
    return l.memoizedState = t, [e, n, !1];
  }
  function kn(t, e, l, n) {
    return t = { tag: t, create: l, deps: n, inst: e, next: null }, e = W.updateQueue, e === null && (e = xu(), W.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (n = l.next, l.next = t, t.next = n, e.lastEffect = t), t;
  }
  function Ko() {
    return Ut().memoizedState;
  }
  function Yu(t, e, l, n) {
    var a = ae();
    W.flags |= t, a.memoizedState = kn(
      1 | e,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function Lu(t, e, l, n) {
    var a = Ut();
    n = n === void 0 ? null : n;
    var u = a.memoizedState.inst;
    mt !== null && n !== null && zc(n, mt.memoizedState.deps) ? a.memoizedState = kn(e, u, l, n) : (W.flags |= t, a.memoizedState = kn(
      1 | e,
      u,
      l,
      n
    ));
  }
  function Jo(t, e) {
    Yu(8390656, 8, t, e);
  }
  function Hc(t, e) {
    Lu(2048, 8, t, e);
  }
  function Zy(t) {
    W.flags |= 4;
    var e = W.updateQueue;
    if (e === null)
      e = xu(), W.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function ko(t) {
    var e = Ut().memoizedState;
    return Zy({ ref: e, nextImpl: t }), function() {
      if ((rt & 2) !== 0) throw Error(f(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Wo(t, e) {
    return Lu(4, 2, t, e);
  }
  function $o(t, e) {
    return Lu(4, 4, t, e);
  }
  function Fo(t, e) {
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
  function Io(t, e, l) {
    l = l != null ? l.concat([t]) : null, Lu(4, 4, Fo.bind(null, e, t), l);
  }
  function jc() {
  }
  function Po(t, e) {
    var l = Ut();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && zc(e, n[1]) ? n[0] : (l.memoizedState = [t, e], t);
  }
  function tr(t, e) {
    var l = Ut();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && zc(e, n[1]))
      return n[0];
    if (n = t(), mn) {
      Ve(!0);
      try {
        t();
      } finally {
        Ve(!1);
      }
    }
    return l.memoizedState = [n, e], n;
  }
  function Yc(t, e, l) {
    return l === void 0 || (il & 1073741824) !== 0 && (lt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = eh(), W.lanes |= t, ql |= t, l);
  }
  function er(t, e, l, n) {
    return ye(l, e) ? l : Zn.current !== null ? (t = Yc(t, l, n), ye(t, e) || (Ht = !0), t) : (il & 42) === 0 || (il & 1073741824) !== 0 && (lt & 261930) === 0 ? (Ht = !0, t.memoizedState = l) : (t = eh(), W.lanes |= t, ql |= t, e);
  }
  function lr(t, e, l, n, a) {
    var u = q.p;
    q.p = u !== 0 && 8 > u ? u : 8;
    var c = A.T, r = {};
    A.T = r, Xc(t, !1, e, l);
    try {
      var h = a(), p = A.S;
      if (p !== null && p(r, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var E = Gy(
          h,
          n
        );
        qa(
          t,
          e,
          E,
          Se(t)
        );
      } else
        qa(
          t,
          e,
          n,
          Se(t)
        );
    } catch (z) {
      qa(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: z },
        Se()
      );
    } finally {
      q.p = u, c !== null && r.types !== null && (c.types = r.types), A.T = c;
    }
  }
  function Ky() {
  }
  function Lc(t, e, l, n) {
    if (t.tag !== 5) throw Error(f(476));
    var a = nr(t).queue;
    lr(
      t,
      a,
      e,
      L,
      l === null ? Ky : function() {
        return ar(t), l(n);
      }
    );
  }
  function nr(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: L,
      baseState: L,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cl,
        lastRenderedState: L
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
        lastRenderedReducer: cl,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function ar(t) {
    var e = nr(t);
    e.next === null && (e = t.alternate.memoizedState), qa(
      t,
      e.next.queue,
      {},
      Se()
    );
  }
  function Gc() {
    return kt($a);
  }
  function ur() {
    return Ut().memoizedState;
  }
  function ir() {
    return Ut().memoizedState;
  }
  function Jy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Se();
          t = Nl(l);
          var n = Rl(e, t, l);
          n !== null && (re(n, e, l), Ra(n, e, l)), e = { cache: mc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function ky(t, e, l) {
    var n = Se();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Gu(t) ? sr(e, l) : (l = ac(t, e, l, n), l !== null && (re(l, t, n), fr(l, e, n)));
  }
  function cr(t, e, l) {
    var n = Se();
    qa(t, e, l, n);
  }
  function qa(t, e, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Gu(t)) sr(e, a);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var c = e.lastRenderedState, r = u(c, l);
          if (a.hasEagerState = !0, a.eagerState = r, ye(r, c))
            return Su(t, e, a, 0), bt === null && bu(), !1;
        } catch {
        }
      if (l = ac(t, e, a, n), l !== null)
        return re(l, t, n), fr(l, e, n), !0;
    }
    return !1;
  }
  function Xc(t, e, l, n) {
    if (n = {
      lane: 2,
      revertLane: bs(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Gu(t)) {
      if (e) throw Error(f(479));
    } else
      e = ac(
        t,
        l,
        n,
        2
      ), e !== null && re(e, t, 2);
  }
  function Gu(t) {
    var e = t.alternate;
    return t === W || e !== null && e === W;
  }
  function sr(t, e) {
    Kn = qu = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function fr(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, df(t, l);
    }
  }
  var Ba = {
    readContext: kt,
    use: Hu,
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
  Ba.useEffectEvent = Rt;
  var or = {
    readContext: kt,
    use: Hu,
    useCallback: function(t, e) {
      return ae().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: kt,
    useEffect: Jo,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, Yu(
        4194308,
        4,
        Fo.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return Yu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Yu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = ae();
      e = e === void 0 ? null : e;
      var n = t();
      if (mn) {
        Ve(!0);
        try {
          t();
        } finally {
          Ve(!1);
        }
      }
      return l.memoizedState = [n, e], n;
    },
    useReducer: function(t, e, l) {
      var n = ae();
      if (l !== void 0) {
        var a = l(e);
        if (mn) {
          Ve(!0);
          try {
            l(e);
          } finally {
            Ve(!1);
          }
        }
      } else a = e;
      return n.memoizedState = n.baseState = a, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: a
      }, n.queue = t, t = t.dispatch = ky.bind(
        null,
        W,
        t
      ), [n.memoizedState, t];
    },
    useRef: function(t) {
      var e = ae();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Bc(t);
      var e = t.queue, l = cr.bind(null, W, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: jc,
    useDeferredValue: function(t, e) {
      var l = ae();
      return Yc(l, t, e);
    },
    useTransition: function() {
      var t = Bc(!1);
      return t = lr.bind(
        null,
        W,
        t.queue,
        !0,
        !1
      ), ae().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var n = W, a = ae();
      if (at) {
        if (l === void 0)
          throw Error(f(407));
        l = l();
      } else {
        if (l = e(), bt === null)
          throw Error(f(349));
        (lt & 127) !== 0 || Mo(n, e, l);
      }
      a.memoizedState = l;
      var u = { value: l, getSnapshot: e };
      return a.queue = u, Jo(qo.bind(null, n, u, t), [
        t
      ]), n.flags |= 2048, kn(
        9,
        { destroy: void 0 },
        Uo.bind(
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
      var t = ae(), e = bt.identifierPrefix;
      if (at) {
        var l = Ke, n = Ze;
        l = (n & ~(1 << 32 - te(n) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Bu++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = Xy++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Gc,
    useFormState: Qo,
    useActionState: Qo,
    useOptimistic: function(t) {
      var e = ae();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = Xc.bind(
        null,
        W,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: Mc,
    useCacheRefresh: function() {
      return ae().memoizedState = Jy.bind(
        null,
        W
      );
    },
    useEffectEvent: function(t) {
      var e = ae(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((rt & 2) !== 0)
          throw Error(f(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Qc = {
    readContext: kt,
    use: Hu,
    useCallback: Po,
    useContext: kt,
    useEffect: Hc,
    useImperativeHandle: Io,
    useInsertionEffect: Wo,
    useLayoutEffect: $o,
    useMemo: tr,
    useReducer: ju,
    useRef: Ko,
    useState: function() {
      return ju(cl);
    },
    useDebugValue: jc,
    useDeferredValue: function(t, e) {
      var l = Ut();
      return er(
        l,
        mt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ju(cl)[0], e = Ut().memoizedState;
      return [
        typeof t == "boolean" ? t : Ua(t),
        e
      ];
    },
    useSyncExternalStore: Do,
    useId: ur,
    useHostTransitionStatus: Gc,
    useFormState: Vo,
    useActionState: Vo,
    useOptimistic: function(t, e) {
      var l = Ut();
      return Ho(l, mt, t, e);
    },
    useMemoCache: Mc,
    useCacheRefresh: ir
  };
  Qc.useEffectEvent = ko;
  var rr = {
    readContext: kt,
    use: Hu,
    useCallback: Po,
    useContext: kt,
    useEffect: Hc,
    useImperativeHandle: Io,
    useInsertionEffect: Wo,
    useLayoutEffect: $o,
    useMemo: tr,
    useReducer: qc,
    useRef: Ko,
    useState: function() {
      return qc(cl);
    },
    useDebugValue: jc,
    useDeferredValue: function(t, e) {
      var l = Ut();
      return mt === null ? Yc(l, t, e) : er(
        l,
        mt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = qc(cl)[0], e = Ut().memoizedState;
      return [
        typeof t == "boolean" ? t : Ua(t),
        e
      ];
    },
    useSyncExternalStore: Do,
    useId: ur,
    useHostTransitionStatus: Gc,
    useFormState: Zo,
    useActionState: Zo,
    useOptimistic: function(t, e) {
      var l = Ut();
      return mt !== null ? Ho(l, mt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: Mc,
    useCacheRefresh: ir
  };
  rr.useEffectEvent = ko;
  function Vc(t, e, l, n) {
    e = t.memoizedState, l = l(n, e), l = l == null ? e : U({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var wc = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var n = Se(), a = Nl(n);
      a.payload = e, l != null && (a.callback = l), e = Rl(t, a, n), e !== null && (re(e, t, n), Ra(e, t, n));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var n = Se(), a = Nl(n);
      a.tag = 1, a.payload = e, l != null && (a.callback = l), e = Rl(t, a, n), e !== null && (re(e, t, n), Ra(e, t, n));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = Se(), n = Nl(l);
      n.tag = 2, e != null && (n.callback = e), e = Rl(t, n, l), e !== null && (re(e, t, l), Ra(e, t, l));
    }
  };
  function hr(t, e, l, n, a, u, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, u, c) : e.prototype && e.prototype.isPureReactComponent ? !Sa(l, n) || !Sa(a, u) : !0;
  }
  function dr(t, e, l, n) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, n), e.state !== t && wc.enqueueReplaceState(e, e.state, null);
  }
  function vn(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var n in e)
        n !== "ref" && (l[n] = e[n]);
    }
    if (t = t.defaultProps) {
      l === e && (l = U({}, l));
      for (var a in t)
        l[a] === void 0 && (l[a] = t[a]);
    }
    return l;
  }
  function yr(t) {
    pu(t);
  }
  function mr(t) {
    console.error(t);
  }
  function vr(t) {
    pu(t);
  }
  function Xu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function gr(t, e, l) {
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
  function Zc(t, e, l) {
    return l = Nl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Xu(t, e);
    }, l;
  }
  function pr(t) {
    return t = Nl(t), t.tag = 3, t;
  }
  function br(t, e, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = n.value;
      t.payload = function() {
        return a(u);
      }, t.callback = function() {
        gr(e, l, n);
      };
    }
    var c = l.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      gr(e, l, n), typeof a != "function" && (Bl === null ? Bl = /* @__PURE__ */ new Set([this]) : Bl.add(this));
      var r = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: r !== null ? r : ""
      });
    });
  }
  function Wy(t, e, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (e = l.alternate, e !== null && Gn(
        e,
        l,
        a,
        !0
      ), l = ve.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return De === null ? Pu() : l.alternate === null && Ct === 0 && (Ct = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Ru ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : e.add(n), vs(t, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === Ru ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), vs(t, n, a)), !1;
        }
        throw Error(f(435, l.tag));
      }
      return vs(t, n, a), Pu(), !1;
    }
    if (at)
      return e = ve.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = a, n !== oc && (t = Error(f(422), { cause: n }), Ta(ze(t, l)))) : (n !== oc && (e = Error(f(423), {
        cause: n
      }), Ta(
        ze(e, l)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, n = ze(n, l), a = Zc(
        t.stateNode,
        n,
        a
      ), _c(t, a), Ct !== 4 && (Ct = 2)), !1;
    var u = Error(f(520), { cause: n });
    if (u = ze(u, l), Qa === null ? Qa = [u] : Qa.push(u), Ct !== 4 && (Ct = 2), e === null) return !0;
    n = ze(n, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = a & -a, l.lanes |= t, t = Zc(l.stateNode, n, t), _c(l, t), !1;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Bl === null || !Bl.has(u))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = pr(a), br(
              a,
              t,
              l,
              n
            ), _c(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Kc = Error(f(461)), Ht = !1;
  function Wt(t, e, l, n) {
    e.child = t === null ? To(e, null, l, n) : yn(
      e,
      t.child,
      l,
      n
    );
  }
  function Sr(t, e, l, n, a) {
    l = l.render;
    var u = e.ref;
    if ("ref" in n) {
      var c = {};
      for (var r in n)
        r !== "ref" && (c[r] = n[r]);
    } else c = n;
    return on(e), n = Nc(
      t,
      e,
      l,
      c,
      u,
      a
    ), r = Rc(), t !== null && !Ht ? (Cc(t, e, a), sl(t, e, a)) : (at && r && sc(e), e.flags |= 1, Wt(t, e, n, a), e.child);
  }
  function _r(t, e, l, n, a) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !uc(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, Er(
        t,
        e,
        u,
        n,
        a
      )) : (t = Eu(
        l.type,
        null,
        n,
        e,
        e.mode,
        a
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !ts(t, a)) {
      var c = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Sa, l(c, n) && t.ref === e.ref)
        return sl(t, e, a);
    }
    return e.flags |= 1, t = ll(u, n), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Er(t, e, l, n, a) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Sa(u, n) && t.ref === e.ref)
        if (Ht = !1, e.pendingProps = n = u, ts(t, a))
          (t.flags & 131072) !== 0 && (Ht = !0);
        else
          return e.lanes = t.lanes, sl(t, e, a);
    }
    return Jc(
      t,
      e,
      l,
      n,
      a
    );
  }
  function Tr(t, e, l, n) {
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
        return Ar(
          t,
          e,
          u,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && zu(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? zo(e, u) : Tc(), No(e);
      else
        return n = e.lanes = 536870912, Ar(
          t,
          e,
          u !== null ? u.baseLanes | l : l,
          l,
          n
        );
    } else
      u !== null ? (zu(e, u.cachePool), zo(e, u), Dl(), e.memoizedState = null) : (t !== null && zu(e, null), Tc(), Dl());
    return Wt(t, e, a, l), e.child;
  }
  function xa(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Ar(t, e, l, n, a) {
    var u = gc();
    return u = u === null ? null : { parent: Bt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, t !== null && zu(e, null), Tc(), No(e), t !== null && Gn(t, e, n, !0), e.childLanes = a, null;
  }
  function Qu(t, e) {
    return e = wu(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Or(t, e, l) {
    return yn(e, t.child, null, l), t = Qu(e, e.pendingProps), t.flags |= 2, ge(e), e.memoizedState = null, t;
  }
  function $y(t, e, l) {
    var n = e.pendingProps, a = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (at) {
        if (n.mode === "hidden")
          return t = Qu(e, n), e.lanes = 536870912, xa(null, t);
        if (Oc(e), (t = _t) ? (t = jh(
          t,
          Ce
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: El !== null ? { id: Ze, overflow: Ke } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = co(t), l.return = e, e.child = l, Jt = e, _t = null)) : t = null, t === null) throw Al(e);
        return e.lanes = 536870912, null;
      }
      return Qu(e, n);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (Oc(e), a)
        if (e.flags & 256)
          e.flags &= -257, e = Or(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(f(558));
      else if (Ht || Gn(t, e, l, !1), a = (l & t.childLanes) !== 0, Ht || a) {
        if (n = bt, n !== null && (c = yf(n, l), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, un(t, c), re(n, t, c), Kc;
        Pu(), e = Or(
          t,
          e,
          l
        );
      } else
        t = u.treeContext, _t = Me(c.nextSibling), Jt = e, at = !0, Tl = null, Ce = !1, t !== null && oo(e, t), e = Qu(e, n), e.flags |= 4096;
      return e;
    }
    return t = ll(t.child, {
      mode: n.mode,
      children: n.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Vu(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Jc(t, e, l, n, a) {
    return on(e), l = Nc(
      t,
      e,
      l,
      n,
      void 0,
      a
    ), n = Rc(), t !== null && !Ht ? (Cc(t, e, a), sl(t, e, a)) : (at && n && sc(e), e.flags |= 1, Wt(t, e, l, a), e.child);
  }
  function zr(t, e, l, n, a, u) {
    return on(e), e.updateQueue = null, l = Co(
      e,
      n,
      l,
      a
    ), Ro(t), n = Rc(), t !== null && !Ht ? (Cc(t, e, u), sl(t, e, u)) : (at && n && sc(e), e.flags |= 1, Wt(t, e, l, u), e.child);
  }
  function Nr(t, e, l, n, a) {
    if (on(e), e.stateNode === null) {
      var u = Hn, c = l.contextType;
      typeof c == "object" && c !== null && (u = kt(c)), u = new l(n, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = wc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = n, u.state = e.memoizedState, u.refs = {}, bc(e), c = l.contextType, u.context = typeof c == "object" && c !== null ? kt(c) : Hn, u.state = e.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (Vc(
        e,
        l,
        c,
        n
      ), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && wc.enqueueReplaceState(u, u.state, null), Da(e, n, u, a), Ca(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), n = !0;
    } else if (t === null) {
      u = e.stateNode;
      var r = e.memoizedProps, h = vn(l, r);
      u.props = h;
      var p = u.context, E = l.contextType;
      c = Hn, typeof E == "object" && E !== null && (c = kt(E));
      var z = l.getDerivedStateFromProps;
      E = typeof z == "function" || typeof u.getSnapshotBeforeUpdate == "function", r = e.pendingProps !== r, E || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r || p !== c) && dr(
        e,
        u,
        n,
        c
      ), zl = !1;
      var b = e.memoizedState;
      u.state = b, Da(e, n, u, a), Ca(), p = e.memoizedState, r || b !== p || zl ? (typeof z == "function" && (Vc(
        e,
        l,
        z,
        n
      ), p = e.memoizedState), (h = zl || hr(
        e,
        l,
        h,
        n,
        b,
        p,
        c
      )) ? (E || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = p), u.props = n, u.state = p, u.context = c, n = h) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
    } else {
      u = e.stateNode, Sc(t, e), c = e.memoizedProps, E = vn(l, c), u.props = E, z = e.pendingProps, b = u.context, p = l.contextType, h = Hn, typeof p == "object" && p !== null && (h = kt(p)), r = l.getDerivedStateFromProps, (p = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== z || b !== h) && dr(
        e,
        u,
        n,
        h
      ), zl = !1, b = e.memoizedState, u.state = b, Da(e, n, u, a), Ca();
      var _ = e.memoizedState;
      c !== z || b !== _ || zl || t !== null && t.dependencies !== null && Au(t.dependencies) ? (typeof r == "function" && (Vc(
        e,
        l,
        r,
        n
      ), _ = e.memoizedState), (E = zl || hr(
        e,
        l,
        E,
        n,
        b,
        _,
        h
      ) || t !== null && t.dependencies !== null && Au(t.dependencies)) ? (p || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(n, _, h), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        n,
        _,
        h
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && b === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && b === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = _), u.props = n, u.state = _, u.context = h, n = E) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && b === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && b === t.memoizedState || (e.flags |= 1024), n = !1);
    }
    return u = n, Vu(t, e), n = (e.flags & 128) !== 0, u || n ? (u = e.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && n ? (e.child = yn(
      e,
      t.child,
      null,
      a
    ), e.child = yn(
      e,
      null,
      l,
      a
    )) : Wt(t, e, l, a), e.memoizedState = u.state, t = e.child) : t = sl(
      t,
      e,
      a
    ), t;
  }
  function Rr(t, e, l, n) {
    return sn(), e.flags |= 256, Wt(t, e, l, n), e.child;
  }
  var kc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Wc(t) {
    return { baseLanes: t, cachePool: go() };
  }
  function $c(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= be), t;
  }
  function Cr(t, e, l) {
    var n = e.pendingProps, a = !1, u = (e.flags & 128) !== 0, c;
    if ((c = u) || (c = t !== null && t.memoizedState === null ? !1 : (Mt.current & 2) !== 0), c && (a = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (at) {
        if (a ? Cl(e) : Dl(), (t = _t) ? (t = jh(
          t,
          Ce
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: El !== null ? { id: Ze, overflow: Ke } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = co(t), l.return = e, e.child = l, Jt = e, _t = null)) : t = null, t === null) throw Al(e);
        return Us(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var r = n.children;
      return n = n.fallback, a ? (Dl(), a = e.mode, r = wu(
        { mode: "hidden", children: r },
        a
      ), n = cn(
        n,
        a,
        l,
        null
      ), r.return = e, n.return = e, r.sibling = n, e.child = r, n = e.child, n.memoizedState = Wc(l), n.childLanes = $c(
        t,
        c,
        l
      ), e.memoizedState = kc, xa(null, n)) : (Cl(e), Fc(e, r));
    }
    var h = t.memoizedState;
    if (h !== null && (r = h.dehydrated, r !== null)) {
      if (u)
        e.flags & 256 ? (Cl(e), e.flags &= -257, e = Ic(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (Dl(), e.child = t.child, e.flags |= 128, e = null) : (Dl(), r = n.fallback, a = e.mode, n = wu(
          { mode: "visible", children: n.children },
          a
        ), r = cn(
          r,
          a,
          l,
          null
        ), r.flags |= 2, n.return = e, r.return = e, n.sibling = r, e.child = n, yn(
          e,
          t.child,
          null,
          l
        ), n = e.child, n.memoizedState = Wc(l), n.childLanes = $c(
          t,
          c,
          l
        ), e.memoizedState = kc, e = xa(null, n));
      else if (Cl(e), Us(r)) {
        if (c = r.nextSibling && r.nextSibling.dataset, c) var p = c.dgst;
        c = p, n = Error(f(419)), n.stack = "", n.digest = c, Ta({ value: n, source: null, stack: null }), e = Ic(
          t,
          e,
          l
        );
      } else if (Ht || Gn(t, e, l, !1), c = (l & t.childLanes) !== 0, Ht || c) {
        if (c = bt, c !== null && (n = yf(c, l), n !== 0 && n !== h.retryLane))
          throw h.retryLane = n, un(t, n), re(c, t, n), Kc;
        Ms(r) || Pu(), e = Ic(
          t,
          e,
          l
        );
      } else
        Ms(r) ? (e.flags |= 192, e.child = t.child, e = null) : (t = h.treeContext, _t = Me(
          r.nextSibling
        ), Jt = e, at = !0, Tl = null, Ce = !1, t !== null && oo(e, t), e = Fc(
          e,
          n.children
        ), e.flags |= 4096);
      return e;
    }
    return a ? (Dl(), r = n.fallback, a = e.mode, h = t.child, p = h.sibling, n = ll(h, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = h.subtreeFlags & 65011712, p !== null ? r = ll(
      p,
      r
    ) : (r = cn(
      r,
      a,
      l,
      null
    ), r.flags |= 2), r.return = e, n.return = e, n.sibling = r, e.child = n, xa(null, n), n = e.child, r = t.child.memoizedState, r === null ? r = Wc(l) : (a = r.cachePool, a !== null ? (h = Bt._currentValue, a = a.parent !== h ? { parent: h, pool: h } : a) : a = go(), r = {
      baseLanes: r.baseLanes | l,
      cachePool: a
    }), n.memoizedState = r, n.childLanes = $c(
      t,
      c,
      l
    ), e.memoizedState = kc, xa(t.child, n)) : (Cl(e), l = t.child, t = l.sibling, l = ll(l, {
      mode: "visible",
      children: n.children
    }), l.return = e, l.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function Fc(t, e) {
    return e = wu(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function wu(t, e) {
    return t = me(22, t, null, e), t.lanes = 0, t;
  }
  function Ic(t, e, l) {
    return yn(e, t.child, null, l), t = Fc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Dr(t, e, l) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e), dc(t.return, e, l);
  }
  function Pc(t, e, l, n, a, u) {
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
  function Mr(t, e, l) {
    var n = e.pendingProps, a = n.revealOrder, u = n.tail;
    n = n.children;
    var c = Mt.current, r = (c & 2) !== 0;
    if (r ? (c = c & 1 | 2, e.flags |= 128) : c &= 1, B(Mt, c), Wt(t, e, n, l), n = at ? Ea : 0, !r && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Dr(t, l, e);
        else if (t.tag === 19)
          Dr(t, l, e);
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
          t = l.alternate, t !== null && Uu(t) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = e.child, e.child = null) : (a = l.sibling, l.sibling = null), Pc(
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
          if (t = a.alternate, t !== null && Uu(t) === null) {
            e.child = a;
            break;
          }
          t = a.sibling, a.sibling = l, l = a, a = t;
        }
        Pc(
          e,
          !0,
          l,
          null,
          u,
          n
        );
        break;
      case "together":
        Pc(
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
  function sl(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), ql |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (Gn(
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
      for (t = e.child, l = ll(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = ll(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function ts(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Au(t)));
  }
  function Fy(t, e, l) {
    switch (e.tag) {
      case 3:
        Tt(e, e.stateNode.containerInfo), Ol(e, Bt, t.memoizedState.cache), sn();
        break;
      case 27:
      case 5:
        Xe(e);
        break;
      case 4:
        Tt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Ol(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Oc(e), null;
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Cl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? Cr(t, e, l) : (Cl(e), t = sl(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        Cl(e);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (n = (l & e.childLanes) !== 0, n || (Gn(
          t,
          e,
          l,
          !1
        ), n = (l & e.childLanes) !== 0), a) {
          if (n)
            return Mr(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), B(Mt, Mt.current), n) break;
        return null;
      case 22:
        return e.lanes = 0, Tr(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        Ol(e, Bt, t.memoizedState.cache);
    }
    return sl(t, e, l);
  }
  function Ur(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Ht = !0;
      else {
        if (!ts(t, l) && (e.flags & 128) === 0)
          return Ht = !1, Fy(
            t,
            e,
            l
          );
        Ht = (t.flags & 131072) !== 0;
      }
    else
      Ht = !1, at && (e.flags & 1048576) !== 0 && fo(e, Ea, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (t = hn(e.elementType), e.type = t, typeof t == "function")
            uc(t) ? (n = vn(t, n), e.tag = 1, e = Nr(
              null,
              e,
              t,
              n,
              l
            )) : (e.tag = 0, e = Jc(
              null,
              e,
              t,
              n,
              l
            ));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === wt) {
                e.tag = 11, e = Sr(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              } else if (a === K) {
                e.tag = 14, e = _r(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              }
            }
            throw e = J(t) || t, Error(f(306, e, ""));
          }
        }
        return e;
      case 0:
        return Jc(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return n = e.type, a = vn(
          n,
          e.pendingProps
        ), Nr(
          t,
          e,
          n,
          a,
          l
        );
      case 3:
        t: {
          if (Tt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(f(387));
          n = e.pendingProps;
          var u = e.memoizedState;
          a = u.element, Sc(t, e), Da(e, n, null, l);
          var c = e.memoizedState;
          if (n = c.cache, Ol(e, Bt, n), n !== u.cache && yc(
            e,
            [Bt],
            l,
            !0
          ), Ca(), n = c.element, u.isDehydrated)
            if (u = {
              element: n,
              isDehydrated: !1,
              cache: c.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = Rr(
                t,
                e,
                n,
                l
              );
              break t;
            } else if (n !== a) {
              a = ze(
                Error(f(424)),
                e
              ), Ta(a), e = Rr(
                t,
                e,
                n,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, _t = Me(t.firstChild), Jt = e, at = !0, Tl = null, Ce = !0, l = To(
                e,
                null,
                n,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (sn(), n === a) {
              e = sl(
                t,
                e,
                l
              );
              break t;
            }
            Wt(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Vu(t, e), t === null ? (l = Vh(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : at || (l = e.type, t = e.pendingProps, n = ii(
          F.current
        ).createElement(l), n[Kt] = e, n[ue] = t, $t(n, l, t), Qt(n), e.stateNode = n) : e.memoizedState = Vh(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Xe(e), t === null && at && (n = e.stateNode = Gh(
          e.type,
          e.pendingProps,
          F.current
        ), Jt = e, Ce = !0, a = _t, Yl(e.type) ? (qs = a, _t = Me(n.firstChild)) : _t = a), Wt(
          t,
          e,
          e.pendingProps.children,
          l
        ), Vu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && at && ((a = n = _t) && (n = Nm(
          n,
          e.type,
          e.pendingProps,
          Ce
        ), n !== null ? (e.stateNode = n, Jt = e, _t = Me(n.firstChild), Ce = !1, a = !0) : a = !1), a || Al(e)), Xe(e), a = e.type, u = e.pendingProps, c = t !== null ? t.memoizedProps : null, n = u.children, Rs(a, u) ? n = null : c !== null && Rs(a, c) && (e.flags |= 32), e.memoizedState !== null && (a = Nc(
          t,
          e,
          Qy,
          null,
          null,
          l
        ), $a._currentValue = a), Vu(t, e), Wt(t, e, n, l), e.child;
      case 6:
        return t === null && at && ((t = l = _t) && (l = Rm(
          l,
          e.pendingProps,
          Ce
        ), l !== null ? (e.stateNode = l, Jt = e, _t = null, t = !0) : t = !1), t || Al(e)), null;
      case 13:
        return Cr(t, e, l);
      case 4:
        return Tt(
          e,
          e.stateNode.containerInfo
        ), n = e.pendingProps, t === null ? e.child = yn(
          e,
          null,
          n,
          l
        ) : Wt(t, e, n, l), e.child;
      case 11:
        return Sr(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return Wt(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return Wt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return Wt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return n = e.pendingProps, Ol(e, e.type, n.value), Wt(t, e, n.children, l), e.child;
      case 9:
        return a = e.type._context, n = e.pendingProps.children, on(e), a = kt(a), n = n(a), e.flags |= 1, Wt(t, e, n, l), e.child;
      case 14:
        return _r(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return Er(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return Mr(t, e, l);
      case 31:
        return $y(t, e, l);
      case 22:
        return Tr(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return on(e), n = kt(Bt), t === null ? (a = gc(), a === null && (a = bt, u = mc(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= l), a = u), e.memoizedState = { parent: n, cache: a }, bc(e), Ol(e, Bt, a)) : ((t.lanes & l) !== 0 && (Sc(t, e), Da(e, null, null, l), Ca()), a = t.memoizedState, u = e.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), Ol(e, Bt, n)) : (n = u.cache, Ol(e, Bt, n), n !== a.cache && yc(
          e,
          [Bt],
          l,
          !0
        ))), Wt(
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
  function fl(t) {
    t.flags |= 4;
  }
  function es(t, e, l, n, a) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (a & 335544128) === a)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (uh()) t.flags |= 8192;
        else
          throw dn = Ru, pc;
    } else t.flags &= -16777217;
  }
  function qr(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !kh(e))
      if (uh()) t.flags |= 8192;
      else
        throw dn = Ru, pc;
  }
  function Zu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? oa() : 536870912, t.lanes |= e, In |= e);
  }
  function Ha(t, e) {
    if (!at)
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
  function Iy(t, e, l) {
    var n = e.pendingProps;
    switch (fc(e), e.tag) {
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
        return l = e.stateNode, n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), ul(Bt), yt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Ln(e) ? fl(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, rc())), Et(e), null;
      case 26:
        var a = e.type, u = e.memoizedState;
        return t === null ? (fl(e), u !== null ? (Et(e), qr(e, u)) : (Et(e), es(
          e,
          a,
          null,
          n,
          l
        ))) : u ? u !== t.memoizedState ? (fl(e), Et(e), qr(e, u)) : (Et(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== n && fl(e), Et(e), es(
          e,
          a,
          t,
          n,
          l
        )), null;
      case 27:
        if (Ie(e), l = F.current, a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && fl(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(f(166));
            return Et(e), null;
          }
          t = x.current, Ln(e) ? ro(e) : (t = Gh(a, n, l), e.stateNode = t, fl(e));
        }
        return Et(e), null;
      case 5:
        if (Ie(e), a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && fl(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(f(166));
            return Et(e), null;
          }
          if (u = x.current, Ln(e))
            ro(e);
          else {
            var c = ii(
              F.current
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
            u[Kt] = e, u[ue] = n;
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
            t: switch ($t(u, a, n), a) {
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
            n && fl(e);
          }
        }
        return Et(e), es(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== n && fl(e);
        else {
          if (typeof n != "string" && e.stateNode === null)
            throw Error(f(166));
          if (t = F.current, Ln(e)) {
            if (t = e.stateNode, l = e.memoizedProps, n = null, a = Jt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            t[Kt] = e, t = !!(t.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Ch(t.nodeValue, l)), t || Al(e, !0);
          } else
            t = ii(t).createTextNode(
              n
            ), t[Kt] = e, e.stateNode = t;
        }
        return Et(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (n = Ln(e), l !== null) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(557));
              t[Kt] = e;
            } else
              sn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Et(e), t = !1;
          } else
            l = rc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (ge(e), e) : (ge(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(f(558));
        }
        return Et(e), null;
      case 13:
        if (n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = Ln(e), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(f(317));
              a[Kt] = e;
            } else
              sn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Et(e), a = !1;
          } else
            a = rc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return e.flags & 256 ? (ge(e), e) : (ge(e), null);
        }
        return ge(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = n !== null, t = t !== null && t.memoizedState !== null, l && (n = e.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== a && (n.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Zu(e, e.updateQueue), Et(e), null);
      case 4:
        return yt(), t === null && Ts(e.stateNode.containerInfo), Et(e), null;
      case 10:
        return ul(e.type), Et(e), null;
      case 19:
        if (N(Mt), n = e.memoizedState, n === null) return Et(e), null;
        if (a = (e.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) Ha(n, !1);
          else {
            if (Ct !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = Uu(t), u !== null) {
                  for (e.flags |= 128, Ha(n, !1), t = u.updateQueue, e.updateQueue = t, Zu(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    io(l, t), l = l.sibling;
                  return B(
                    Mt,
                    Mt.current & 1 | 2
                  ), at && nl(e, n.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null && qt() > $u && (e.flags |= 128, a = !0, Ha(n, !1), e.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = Uu(u), t !== null) {
              if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, Zu(e, t), Ha(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !at)
                return Et(e), null;
            } else
              2 * qt() - n.renderingStartTime > $u && l !== 536870912 && (e.flags |= 128, a = !0, Ha(n, !1), e.lanes = 4194304);
          n.isBackwards ? (u.sibling = e.child, e.child = u) : (t = n.last, t !== null ? t.sibling = u : e.child = u, n.last = u);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = qt(), t.sibling = null, l = Mt.current, B(
          Mt,
          a ? l & 1 | 2 : l & 1
        ), at && nl(e, n.treeForkCount), t) : (Et(e), null);
      case 22:
      case 23:
        return ge(e), Ac(), n = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Et(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Et(e), l = e.updateQueue, l !== null && Zu(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== l && (e.flags |= 2048), t !== null && N(rn), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), ul(Bt), Et(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function Py(t, e) {
    switch (fc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return ul(Bt), yt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Ie(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (ge(e), e.alternate === null)
            throw Error(f(340));
          sn();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (ge(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(f(340));
          sn();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return N(Mt), null;
      case 4:
        return yt(), null;
      case 10:
        return ul(e.type), null;
      case 22:
      case 23:
        return ge(e), Ac(), t !== null && N(rn), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return ul(Bt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Br(t, e) {
    switch (fc(e), e.tag) {
      case 3:
        ul(Bt), yt();
        break;
      case 26:
      case 27:
      case 5:
        Ie(e);
        break;
      case 4:
        yt();
        break;
      case 31:
        e.memoizedState !== null && ge(e);
        break;
      case 13:
        ge(e);
        break;
      case 19:
        N(Mt);
        break;
      case 10:
        ul(e.type);
        break;
      case 22:
      case 23:
        ge(e), Ac(), t !== null && N(rn);
        break;
      case 24:
        ul(Bt);
    }
  }
  function ja(t, e) {
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
    } catch (r) {
      dt(e, e.return, r);
    }
  }
  function Ml(t, e, l) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        n = u;
        do {
          if ((n.tag & t) === t) {
            var c = n.inst, r = c.destroy;
            if (r !== void 0) {
              c.destroy = void 0, a = e;
              var h = l, p = r;
              try {
                p();
              } catch (E) {
                dt(
                  a,
                  h,
                  E
                );
              }
            }
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (E) {
      dt(e, e.return, E);
    }
  }
  function xr(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Oo(e, l);
      } catch (n) {
        dt(t, t.return, n);
      }
    }
  }
  function Hr(t, e, l) {
    l.props = vn(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      dt(t, e, n);
    }
  }
  function Ya(t, e) {
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
      dt(t, e, a);
    }
  }
  function Je(t, e) {
    var l = t.ref, n = t.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          dt(t, e, a);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          dt(t, e, a);
        }
      else l.current = null;
  }
  function jr(t) {
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
      dt(t, t.return, a);
    }
  }
  function ls(t, e, l) {
    try {
      var n = t.stateNode;
      _m(n, t.type, l, e), n[ue] = e;
    } catch (a) {
      dt(t, t.return, a);
    }
  }
  function Yr(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Yl(t.type) || t.tag === 4;
  }
  function ns(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Yr(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Yl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function as(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = tl));
    else if (n !== 4 && (n === 27 && Yl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (as(t, e, l), t = t.sibling; t !== null; )
        as(t, e, l), t = t.sibling;
  }
  function Ku(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (n !== 4 && (n === 27 && Yl(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Ku(t, e, l), t = t.sibling; t !== null; )
        Ku(t, e, l), t = t.sibling;
  }
  function Lr(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var n = t.type, a = e.attributes; a.length; )
        e.removeAttributeNode(a[0]);
      $t(e, n, l), e[Kt] = t, e[ue] = l;
    } catch (u) {
      dt(t, t.return, u);
    }
  }
  var ol = !1, jt = !1, us = !1, Gr = typeof WeakSet == "function" ? WeakSet : Set, Vt = null;
  function tm(t, e) {
    if (t = t.containerInfo, zs = di, t = Ff(t), Ii(t)) {
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
            var c = 0, r = -1, h = -1, p = 0, E = 0, z = t, b = null;
            e: for (; ; ) {
              for (var _; z !== l || a !== 0 && z.nodeType !== 3 || (r = c + a), z !== u || n !== 0 && z.nodeType !== 3 || (h = c + n), z.nodeType === 3 && (c += z.nodeValue.length), (_ = z.firstChild) !== null; )
                b = z, z = _;
              for (; ; ) {
                if (z === t) break e;
                if (b === l && ++p === a && (r = c), b === u && ++E === n && (h = c), (_ = z.nextSibling) !== null) break;
                z = b, b = z.parentNode;
              }
              z = _;
            }
            l = r === -1 || h === -1 ? null : { start: r, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Ns = { focusedElem: t, selectionRange: l }, di = !1, Vt = e; Vt !== null; )
      if (e = Vt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, Vt = t;
      else
        for (; Vt !== null; ) {
          switch (e = Vt, u = e.alternate, t = e.flags, e.tag) {
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
                  var H = vn(
                    l.type,
                    a
                  );
                  t = n.getSnapshotBeforeUpdate(
                    H,
                    u
                  ), n.__reactInternalSnapshotBeforeUpdate = t;
                } catch (V) {
                  dt(
                    l,
                    l.return,
                    V
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  Ds(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ds(t);
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
            t.return = e.return, Vt = t;
            break;
          }
          Vt = e.return;
        }
  }
  function Xr(t, e, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        hl(t, l), n & 4 && ja(5, l);
        break;
      case 1:
        if (hl(t, l), n & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (c) {
              dt(l, l.return, c);
            }
          else {
            var a = vn(
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
              dt(
                l,
                l.return,
                c
              );
            }
          }
        n & 64 && xr(l), n & 512 && Ya(l, l.return);
        break;
      case 3:
        if (hl(t, l), n & 64 && (t = l.updateQueue, t !== null)) {
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
            Oo(t, e);
          } catch (c) {
            dt(l, l.return, c);
          }
        }
        break;
      case 27:
        e === null && n & 4 && Lr(l);
      case 26:
      case 5:
        hl(t, l), e === null && n & 4 && jr(l), n & 512 && Ya(l, l.return);
        break;
      case 12:
        hl(t, l);
        break;
      case 31:
        hl(t, l), n & 4 && wr(t, l);
        break;
      case 13:
        hl(t, l), n & 4 && Zr(t, l), n & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = fm.bind(
          null,
          l
        ), Cm(t, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || ol, !n) {
          e = e !== null && e.memoizedState !== null || jt, a = ol;
          var u = jt;
          ol = n, (jt = e) && !u ? dl(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : hl(t, l), ol = a, jt = u;
        }
        break;
      case 30:
        break;
      default:
        hl(t, l);
    }
  }
  function Qr(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Qr(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && xi(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var At = null, ce = !1;
  function rl(t, e, l) {
    for (l = l.child; l !== null; )
      Vr(t, e, l), l = l.sibling;
  }
  function Vr(t, e, l) {
    if (ne && typeof ne.onCommitFiberUnmount == "function")
      try {
        ne.onCommitFiberUnmount(Fl, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        jt || Je(l, e), rl(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        jt || Je(l, e);
        var n = At, a = ce;
        Yl(l.type) && (At = l.stateNode, ce = !1), rl(
          t,
          e,
          l
        ), Ja(l.stateNode), At = n, ce = a;
        break;
      case 5:
        jt || Je(l, e);
      case 6:
        if (n = At, a = ce, At = null, rl(
          t,
          e,
          l
        ), At = n, ce = a, At !== null)
          if (ce)
            try {
              (At.nodeType === 9 ? At.body : At.nodeName === "HTML" ? At.ownerDocument.body : At).removeChild(l.stateNode);
            } catch (u) {
              dt(
                l,
                e,
                u
              );
            }
          else
            try {
              At.removeChild(l.stateNode);
            } catch (u) {
              dt(
                l,
                e,
                u
              );
            }
        break;
      case 18:
        At !== null && (ce ? (t = At, xh(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), ia(t)) : xh(At, l.stateNode));
        break;
      case 4:
        n = At, a = ce, At = l.stateNode.containerInfo, ce = !0, rl(
          t,
          e,
          l
        ), At = n, ce = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ml(2, l, e), jt || Ml(4, l, e), rl(
          t,
          e,
          l
        );
        break;
      case 1:
        jt || (Je(l, e), n = l.stateNode, typeof n.componentWillUnmount == "function" && Hr(
          l,
          e,
          n
        )), rl(
          t,
          e,
          l
        );
        break;
      case 21:
        rl(
          t,
          e,
          l
        );
        break;
      case 22:
        jt = (n = jt) || l.memoizedState !== null, rl(
          t,
          e,
          l
        ), jt = n;
        break;
      default:
        rl(
          t,
          e,
          l
        );
    }
  }
  function wr(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        ia(t);
      } catch (l) {
        dt(e, e.return, l);
      }
    }
  }
  function Zr(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        ia(t);
      } catch (l) {
        dt(e, e.return, l);
      }
  }
  function em(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Gr()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Gr()), e;
      default:
        throw Error(f(435, t.tag));
    }
  }
  function Ju(t, e) {
    var l = em(t);
    e.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = om.bind(null, t, n);
        n.then(a, a);
      }
    });
  }
  function se(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], u = t, c = e, r = c;
        t: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (Yl(r.type)) {
                At = r.stateNode, ce = !1;
                break t;
              }
              break;
            case 5:
              At = r.stateNode, ce = !1;
              break t;
            case 3:
            case 4:
              At = r.stateNode.containerInfo, ce = !0;
              break t;
          }
          r = r.return;
        }
        if (At === null) throw Error(f(160));
        Vr(u, c, a), At = null, ce = !1, u = a.alternate, u !== null && (u.return = null), a.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Kr(e, t), e = e.sibling;
  }
  var je = null;
  function Kr(t, e) {
    var l = t.alternate, n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        se(e, t), fe(t), n & 4 && (Ml(3, t, t.return), ja(3, t), Ml(5, t, t.return));
        break;
      case 1:
        se(e, t), fe(t), n & 512 && (jt || l === null || Je(l, l.return)), n & 64 && ol && (t = t.updateQueue, t !== null && (n = t.callbacks, n !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = je;
        if (se(e, t), fe(t), n & 512 && (jt || l === null || Je(l, l.return)), n & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (n = t.memoizedState, l === null)
            if (n === null)
              if (t.stateNode === null) {
                t: {
                  n = t.type, l = t.memoizedProps, a = a.ownerDocument || a;
                  e: switch (n) {
                    case "title":
                      u = a.getElementsByTagName("title")[0], (!u || u[ra] || u[Kt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(n), a.head.insertBefore(
                        u,
                        a.querySelector("head > title")
                      )), $t(u, n, l), u[Kt] = t, Qt(u), n = u;
                      break t;
                    case "link":
                      var c = Kh(
                        "link",
                        "href",
                        a
                      ).get(n + (l.href || ""));
                      if (c) {
                        for (var r = 0; r < c.length; r++)
                          if (u = c[r], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            c.splice(r, 1);
                            break e;
                          }
                      }
                      u = a.createElement(n), $t(u, n, l), a.head.appendChild(u);
                      break;
                    case "meta":
                      if (c = Kh(
                        "meta",
                        "content",
                        a
                      ).get(n + (l.content || ""))) {
                        for (r = 0; r < c.length; r++)
                          if (u = c[r], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            c.splice(r, 1);
                            break e;
                          }
                      }
                      u = a.createElement(n), $t(u, n, l), a.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, n));
                  }
                  u[Kt] = t, Qt(u), n = u;
                }
                t.stateNode = n;
              } else
                Jh(
                  a,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Zh(
                a,
                n,
                t.memoizedProps
              );
          else
            u !== n ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, n === null ? Jh(
              a,
              t.type,
              t.stateNode
            ) : Zh(
              a,
              n,
              t.memoizedProps
            )) : n === null && t.stateNode !== null && ls(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        se(e, t), fe(t), n & 512 && (jt || l === null || Je(l, l.return)), l !== null && n & 4 && ls(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (se(e, t), fe(t), n & 512 && (jt || l === null || Je(l, l.return)), t.flags & 32) {
          a = t.stateNode;
          try {
            Cn(a, "");
          } catch (H) {
            dt(t, t.return, H);
          }
        }
        n & 4 && t.stateNode != null && (a = t.memoizedProps, ls(
          t,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (us = !0);
        break;
      case 6:
        if (se(e, t), fe(t), n & 4) {
          if (t.stateNode === null)
            throw Error(f(162));
          n = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = n;
          } catch (H) {
            dt(t, t.return, H);
          }
        }
        break;
      case 3:
        if (fi = null, a = je, je = ci(e.containerInfo), se(e, t), je = a, fe(t), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            ia(e.containerInfo);
          } catch (H) {
            dt(t, t.return, H);
          }
        us && (us = !1, Jr(t));
        break;
      case 4:
        n = je, je = ci(
          t.stateNode.containerInfo
        ), se(e, t), fe(t), je = n;
        break;
      case 12:
        se(e, t), fe(t);
        break;
      case 31:
        se(e, t), fe(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, Ju(t, n)));
        break;
      case 13:
        se(e, t), fe(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Wu = qt()), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, Ju(t, n)));
        break;
      case 22:
        a = t.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null, p = ol, E = jt;
        if (ol = p || a, jt = E || h, se(e, t), jt = E, ol = p, fe(t), n & 8192)
          t: for (e = t.stateNode, e._visibility = a ? e._visibility & -2 : e._visibility | 1, a && (l === null || h || ol || jt || gn(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                h = l = e;
                try {
                  if (u = h.stateNode, a)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    r = h.stateNode;
                    var z = h.memoizedProps.style, b = z != null && z.hasOwnProperty("display") ? z.display : null;
                    r.style.display = b == null || typeof b == "boolean" ? "" : ("" + b).trim();
                  }
                } catch (H) {
                  dt(h, h.return, H);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                h = e;
                try {
                  h.stateNode.nodeValue = a ? "" : h.memoizedProps;
                } catch (H) {
                  dt(h, h.return, H);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                h = e;
                try {
                  var _ = h.stateNode;
                  a ? Hh(_, !0) : Hh(h.stateNode, !1);
                } catch (H) {
                  dt(h, h.return, H);
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
        n & 4 && (n = t.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, Ju(t, l))));
        break;
      case 19:
        se(e, t), fe(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, Ju(t, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        se(e, t), fe(t);
    }
  }
  function fe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, n = t.return; n !== null; ) {
          if (Yr(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, u = ns(t);
            Ku(t, u, a);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (Cn(c, ""), l.flags &= -33);
            var r = ns(t);
            Ku(t, r, c);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo, p = ns(t);
            as(
              t,
              p,
              h
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (E) {
        dt(t, t.return, E);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Jr(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Jr(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function hl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Xr(t, e.alternate, e), e = e.sibling;
  }
  function gn(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ml(4, e, e.return), gn(e);
          break;
        case 1:
          Je(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Hr(
            e,
            e.return,
            l
          ), gn(e);
          break;
        case 27:
          Ja(e.stateNode);
        case 26:
        case 5:
          Je(e, e.return), gn(e);
          break;
        case 22:
          e.memoizedState === null && gn(e);
          break;
        case 30:
          gn(e);
          break;
        default:
          gn(e);
      }
      t = t.sibling;
    }
  }
  function dl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate, a = t, u = e, c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          dl(
            a,
            u,
            l
          ), ja(4, u);
          break;
        case 1:
          if (dl(
            a,
            u,
            l
          ), n = u, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (p) {
              dt(n, n.return, p);
            }
          if (n = u, a = n.updateQueue, a !== null) {
            var r = n.stateNode;
            try {
              var h = a.shared.hiddenCallbacks;
              if (h !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < h.length; a++)
                  Ao(h[a], r);
            } catch (p) {
              dt(n, n.return, p);
            }
          }
          l && c & 64 && xr(u), Ya(u, u.return);
          break;
        case 27:
          Lr(u);
        case 26:
        case 5:
          dl(
            a,
            u,
            l
          ), l && n === null && c & 4 && jr(u), Ya(u, u.return);
          break;
        case 12:
          dl(
            a,
            u,
            l
          );
          break;
        case 31:
          dl(
            a,
            u,
            l
          ), l && c & 4 && wr(a, u);
          break;
        case 13:
          dl(
            a,
            u,
            l
          ), l && c & 4 && Zr(a, u);
          break;
        case 22:
          u.memoizedState === null && dl(
            a,
            u,
            l
          ), Ya(u, u.return);
          break;
        case 30:
          break;
        default:
          dl(
            a,
            u,
            l
          );
      }
      e = e.sibling;
    }
  }
  function is(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Aa(l));
  }
  function cs(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Aa(t));
  }
  function Ye(t, e, l, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        kr(
          t,
          e,
          l,
          n
        ), e = e.sibling;
  }
  function kr(t, e, l, n) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ye(
          t,
          e,
          l,
          n
        ), a & 2048 && ja(9, e);
        break;
      case 1:
        Ye(
          t,
          e,
          l,
          n
        );
        break;
      case 3:
        Ye(
          t,
          e,
          l,
          n
        ), a & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Aa(t)));
        break;
      case 12:
        if (a & 2048) {
          Ye(
            t,
            e,
            l,
            n
          ), t = e.stateNode;
          try {
            var u = e.memoizedProps, c = u.id, r = u.onPostCommit;
            typeof r == "function" && r(
              c,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (h) {
            dt(e, e.return, h);
          }
        } else
          Ye(
            t,
            e,
            l,
            n
          );
        break;
      case 31:
        Ye(
          t,
          e,
          l,
          n
        );
        break;
      case 13:
        Ye(
          t,
          e,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, c = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Ye(
          t,
          e,
          l,
          n
        ) : La(t, e) : u._visibility & 2 ? Ye(
          t,
          e,
          l,
          n
        ) : (u._visibility |= 2, Wn(
          t,
          e,
          l,
          n,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && is(c, e);
        break;
      case 24:
        Ye(
          t,
          e,
          l,
          n
        ), a & 2048 && cs(e.alternate, e);
        break;
      default:
        Ye(
          t,
          e,
          l,
          n
        );
    }
  }
  function Wn(t, e, l, n, a) {
    for (a = a && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, c = e, r = l, h = n, p = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Wn(
            u,
            c,
            r,
            h,
            a
          ), ja(8, c);
          break;
        case 23:
          break;
        case 22:
          var E = c.stateNode;
          c.memoizedState !== null ? E._visibility & 2 ? Wn(
            u,
            c,
            r,
            h,
            a
          ) : La(
            u,
            c
          ) : (E._visibility |= 2, Wn(
            u,
            c,
            r,
            h,
            a
          )), a && p & 2048 && is(
            c.alternate,
            c
          );
          break;
        case 24:
          Wn(
            u,
            c,
            r,
            h,
            a
          ), a && p & 2048 && cs(c.alternate, c);
          break;
        default:
          Wn(
            u,
            c,
            r,
            h,
            a
          );
      }
      e = e.sibling;
    }
  }
  function La(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, n = e, a = n.flags;
        switch (n.tag) {
          case 22:
            La(l, n), a & 2048 && is(
              n.alternate,
              n
            );
            break;
          case 24:
            La(l, n), a & 2048 && cs(n.alternate, n);
            break;
          default:
            La(l, n);
        }
        e = e.sibling;
      }
  }
  var Ga = 8192;
  function $n(t, e, l) {
    if (t.subtreeFlags & Ga)
      for (t = t.child; t !== null; )
        Wr(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function Wr(t, e, l) {
    switch (t.tag) {
      case 26:
        $n(
          t,
          e,
          l
        ), t.flags & Ga && t.memoizedState !== null && Xm(
          l,
          je,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        $n(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var n = je;
        je = ci(t.stateNode.containerInfo), $n(
          t,
          e,
          l
        ), je = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = Ga, Ga = 16777216, $n(
          t,
          e,
          l
        ), Ga = n) : $n(
          t,
          e,
          l
        ));
        break;
      default:
        $n(
          t,
          e,
          l
        );
    }
  }
  function $r(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Xa(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          Vt = n, Ir(
            n,
            t
          );
        }
      $r(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Fr(t), t = t.sibling;
  }
  function Fr(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Xa(t), t.flags & 2048 && Ml(9, t, t.return);
        break;
      case 3:
        Xa(t);
        break;
      case 12:
        Xa(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ku(t)) : Xa(t);
        break;
      default:
        Xa(t);
    }
  }
  function ku(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          Vt = n, Ir(
            n,
            t
          );
        }
      $r(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Ml(8, e, e.return), ku(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, ku(e));
          break;
        default:
          ku(e);
      }
      t = t.sibling;
    }
  }
  function Ir(t, e) {
    for (; Vt !== null; ) {
      var l = Vt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ml(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Aa(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, Vt = n;
      else
        t: for (l = t; Vt !== null; ) {
          n = Vt;
          var a = n.sibling, u = n.return;
          if (Qr(n), n === l) {
            Vt = null;
            break t;
          }
          if (a !== null) {
            a.return = u, Vt = a;
            break t;
          }
          Vt = u;
        }
    }
  }
  var lm = {
    getCacheForType: function(t) {
      var e = kt(Bt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return kt(Bt).controller.signal;
    }
  }, nm = typeof WeakMap == "function" ? WeakMap : Map, rt = 0, bt = null, P = null, lt = 0, ht = 0, pe = null, Ul = !1, Fn = !1, ss = !1, yl = 0, Ct = 0, ql = 0, pn = 0, fs = 0, be = 0, In = 0, Qa = null, oe = null, os = !1, Wu = 0, Pr = 0, $u = 1 / 0, Fu = null, Bl = null, Lt = 0, xl = null, Pn = null, ml = 0, rs = 0, hs = null, th = null, Va = 0, ds = null;
  function Se() {
    return (rt & 2) !== 0 && lt !== 0 ? lt & -lt : A.T !== null ? bs() : mf();
  }
  function eh() {
    if (be === 0)
      if ((lt & 536870912) === 0 || at) {
        var t = Ee;
        Ee <<= 1, (Ee & 3932160) === 0 && (Ee = 262144), be = t;
      } else be = 536870912;
    return t = ve.current, t !== null && (t.flags |= 32), be;
  }
  function re(t, e, l) {
    (t === bt && (ht === 2 || ht === 9) || t.cancelPendingCommit !== null) && (ta(t, 0), Hl(
      t,
      lt,
      be,
      !1
    )), tn(t, l), ((rt & 2) === 0 || t !== bt) && (t === bt && ((rt & 2) === 0 && (pn |= l), Ct === 4 && Hl(
      t,
      lt,
      be,
      !1
    )), ke(t));
  }
  function lh(t, e, l) {
    if ((rt & 6) !== 0) throw Error(f(327));
    var n = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || bl(t, e), a = n ? im(t, e) : ms(t, e, !0), u = n;
    do {
      if (a === 0) {
        Fn && !n && Hl(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, u && !am(l)) {
          a = ms(t, e, !1), u = !1;
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
              var r = t;
              a = Qa;
              var h = r.current.memoizedState.isDehydrated;
              if (h && (ta(r, c).flags |= 256), c = ms(
                r,
                c,
                !1
              ), c !== 2) {
                if (ss && !h) {
                  r.errorRecoveryDisabledLanes |= u, pn |= u, a = 4;
                  break t;
                }
                u = oe, oe = a, u !== null && (oe === null ? oe = u : oe.push.apply(
                  oe,
                  u
                ));
              }
              a = c;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          ta(t, 0), Hl(t, e, 0, !0);
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
              Hl(
                n,
                e,
                be,
                !Ul
              );
              break t;
            case 2:
              oe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && (a = Wu + 300 - qt(), 10 < a)) {
            if (Hl(
              n,
              e,
              be,
              !Ul
            ), Pl(n, 0, !0) !== 0) break t;
            ml = e, n.timeoutHandle = qh(
              nh.bind(
                null,
                n,
                l,
                oe,
                Fu,
                os,
                e,
                be,
                pn,
                In,
                Ul,
                u,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break t;
          }
          nh(
            n,
            l,
            oe,
            Fu,
            os,
            e,
            be,
            pn,
            In,
            Ul,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ke(t);
  }
  function nh(t, e, l, n, a, u, c, r, h, p, E, z, b, _) {
    if (t.timeoutHandle = -1, z = e.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
      z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: tl
      }, Wr(
        e,
        u,
        z
      );
      var H = (u & 62914560) === u ? Wu - qt() : (u & 4194048) === u ? Pr - qt() : 0;
      if (H = Qm(
        z,
        H
      ), H !== null) {
        ml = u, t.cancelPendingCommit = H(
          rh.bind(
            null,
            t,
            e,
            u,
            l,
            n,
            a,
            c,
            r,
            h,
            E,
            z,
            null,
            b,
            _
          )
        ), Hl(t, u, c, !p);
        return;
      }
    }
    rh(
      t,
      e,
      u,
      l,
      n,
      a,
      c,
      r,
      h
    );
  }
  function am(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var n = 0; n < l.length; n++) {
          var a = l[n], u = a.getSnapshot;
          a = a.value;
          try {
            if (!ye(u(), a)) return !1;
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
  function Hl(t, e, l, n) {
    e &= ~fs, e &= ~pn, t.suspendedLanes |= e, t.pingedLanes &= ~e, n && (t.warmLanes |= e), n = t.expirationTimes;
    for (var a = e; 0 < a; ) {
      var u = 31 - te(a), c = 1 << u;
      n[u] = -1, a &= ~c;
    }
    l !== 0 && hf(t, l, e);
  }
  function Iu() {
    return (rt & 6) === 0 ? (wa(0), !1) : !0;
  }
  function ys() {
    if (P !== null) {
      if (ht === 0)
        var t = P.return;
      else
        t = P, al = fn = null, Dc(t), wn = null, za = 0, t = P;
      for (; t !== null; )
        Br(t.alternate, t), t = t.return;
      P = null;
    }
  }
  function ta(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Am(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), ml = 0, ys(), bt = t, P = l = ll(t.current, null), lt = e, ht = 0, pe = null, Ul = !1, Fn = bl(t, e), ss = !1, In = be = fs = pn = ql = Ct = 0, oe = Qa = null, os = !1, (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - te(n), u = 1 << a;
        e |= t[a], n &= ~u;
      }
    return yl = e, bu(), l;
  }
  function ah(t, e) {
    W = null, A.H = Ba, e === Vn || e === Nu ? (e = So(), ht = 3) : e === pc ? (e = So(), ht = 4) : ht = e === Kc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, pe = e, P === null && (Ct = 1, Xu(
      t,
      ze(e, t.current)
    ));
  }
  function uh() {
    var t = ve.current;
    return t === null ? !0 : (lt & 4194048) === lt ? De === null : (lt & 62914560) === lt || (lt & 536870912) !== 0 ? t === De : !1;
  }
  function ih() {
    var t = A.H;
    return A.H = Ba, t === null ? Ba : t;
  }
  function ch() {
    var t = A.A;
    return A.A = lm, t;
  }
  function Pu() {
    Ct = 4, Ul || (lt & 4194048) !== lt && ve.current !== null || (Fn = !0), (ql & 134217727) === 0 && (pn & 134217727) === 0 || bt === null || Hl(
      bt,
      lt,
      be,
      !1
    );
  }
  function ms(t, e, l) {
    var n = rt;
    rt |= 2;
    var a = ih(), u = ch();
    (bt !== t || lt !== e) && (Fu = null, ta(t, e)), e = !1;
    var c = Ct;
    t: do
      try {
        if (ht !== 0 && P !== null) {
          var r = P, h = pe;
          switch (ht) {
            case 8:
              ys(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ve.current === null && (e = !0);
              var p = ht;
              if (ht = 0, pe = null, ea(t, r, h, p), l && Fn) {
                c = 0;
                break t;
              }
              break;
            default:
              p = ht, ht = 0, pe = null, ea(t, r, h, p);
          }
        }
        um(), c = Ct;
        break;
      } catch (E) {
        ah(t, E);
      }
    while (!0);
    return e && t.shellSuspendCounter++, al = fn = null, rt = n, A.H = a, A.A = u, P === null && (bt = null, lt = 0, bu()), c;
  }
  function um() {
    for (; P !== null; ) sh(P);
  }
  function im(t, e) {
    var l = rt;
    rt |= 2;
    var n = ih(), a = ch();
    bt !== t || lt !== e ? (Fu = null, $u = qt() + 500, ta(t, e)) : Fn = bl(
      t,
      e
    );
    t: do
      try {
        if (ht !== 0 && P !== null) {
          e = P;
          var u = pe;
          e: switch (ht) {
            case 1:
              ht = 0, pe = null, ea(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (po(u)) {
                ht = 0, pe = null, fh(e);
                break;
              }
              e = function() {
                ht !== 2 && ht !== 9 || bt !== t || (ht = 7), ke(t);
              }, u.then(e, e);
              break t;
            case 3:
              ht = 7;
              break t;
            case 4:
              ht = 5;
              break t;
            case 7:
              po(u) ? (ht = 0, pe = null, fh(e)) : (ht = 0, pe = null, ea(t, e, u, 7));
              break;
            case 5:
              var c = null;
              switch (P.tag) {
                case 26:
                  c = P.memoizedState;
                case 5:
                case 27:
                  var r = P;
                  if (c ? kh(c) : r.stateNode.complete) {
                    ht = 0, pe = null;
                    var h = r.sibling;
                    if (h !== null) P = h;
                    else {
                      var p = r.return;
                      p !== null ? (P = p, ti(p)) : P = null;
                    }
                    break e;
                  }
              }
              ht = 0, pe = null, ea(t, e, u, 5);
              break;
            case 6:
              ht = 0, pe = null, ea(t, e, u, 6);
              break;
            case 8:
              ys(), Ct = 6;
              break t;
            default:
              throw Error(f(462));
          }
        }
        cm();
        break;
      } catch (E) {
        ah(t, E);
      }
    while (!0);
    return al = fn = null, A.H = n, A.A = a, rt = l, P !== null ? 0 : (bt = null, lt = 0, bu(), Ct);
  }
  function cm() {
    for (; P !== null && !pl(); )
      sh(P);
  }
  function sh(t) {
    var e = Ur(t.alternate, t, yl);
    t.memoizedProps = t.pendingProps, e === null ? ti(t) : P = e;
  }
  function fh(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = zr(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          lt
        );
        break;
      case 11:
        e = zr(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          lt
        );
        break;
      case 5:
        Dc(e);
      default:
        Br(l, e), e = P = io(e, yl), e = Ur(l, e, yl);
    }
    t.memoizedProps = t.pendingProps, e === null ? ti(t) : P = e;
  }
  function ea(t, e, l, n) {
    al = fn = null, Dc(e), wn = null, za = 0;
    var a = e.return;
    try {
      if (Wy(
        t,
        a,
        e,
        l,
        lt
      )) {
        Ct = 1, Xu(
          t,
          ze(l, t.current)
        ), P = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw P = a, u;
      Ct = 1, Xu(
        t,
        ze(l, t.current)
      ), P = null;
      return;
    }
    e.flags & 32768 ? (at || n === 1 ? t = !0 : Fn || (lt & 536870912) !== 0 ? t = !1 : (Ul = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = ve.current, n !== null && n.tag === 13 && (n.flags |= 16384))), oh(e, t)) : ti(e);
  }
  function ti(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        oh(
          e,
          Ul
        );
        return;
      }
      t = e.return;
      var l = Iy(
        e.alternate,
        e,
        yl
      );
      if (l !== null) {
        P = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        P = e;
        return;
      }
      P = e = t;
    } while (e !== null);
    Ct === 0 && (Ct = 5);
  }
  function oh(t, e) {
    do {
      var l = Py(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, P = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        P = t;
        return;
      }
      P = t = l;
    } while (t !== null);
    Ct = 6, P = null;
  }
  function rh(t, e, l, n, a, u, c, r, h) {
    t.cancelPendingCommit = null;
    do
      ei();
    while (Lt !== 0);
    if ((rt & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (u = e.lanes | e.childLanes, u |= nc, Gd(
        t,
        l,
        u,
        c,
        r,
        h
      ), t === bt && (P = bt = null, lt = 0), Pn = e, xl = t, ml = l, rs = u, hs = a, th = n, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, rm(En, function() {
        return vh(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
        n = A.T, A.T = null, a = q.p, q.p = 2, c = rt, rt |= 4;
        try {
          tm(t, e, l);
        } finally {
          rt = c, q.p = a, A.T = n;
        }
      }
      Lt = 1, hh(), dh(), yh();
    }
  }
  function hh() {
    if (Lt === 1) {
      Lt = 0;
      var t = xl, e = Pn, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = A.T, A.T = null;
        var n = q.p;
        q.p = 2;
        var a = rt;
        rt |= 4;
        try {
          Kr(e, t);
          var u = Ns, c = Ff(t.containerInfo), r = u.focusedElem, h = u.selectionRange;
          if (c !== r && r && r.ownerDocument && $f(
            r.ownerDocument.documentElement,
            r
          )) {
            if (h !== null && Ii(r)) {
              var p = h.start, E = h.end;
              if (E === void 0 && (E = p), "selectionStart" in r)
                r.selectionStart = p, r.selectionEnd = Math.min(
                  E,
                  r.value.length
                );
              else {
                var z = r.ownerDocument || document, b = z && z.defaultView || window;
                if (b.getSelection) {
                  var _ = b.getSelection(), H = r.textContent.length, V = Math.min(h.start, H), gt = h.end === void 0 ? V : Math.min(h.end, H);
                  !_.extend && V > gt && (c = gt, gt = V, V = c);
                  var m = Wf(
                    r,
                    V
                  ), d = Wf(
                    r,
                    gt
                  );
                  if (m && d && (_.rangeCount !== 1 || _.anchorNode !== m.node || _.anchorOffset !== m.offset || _.focusNode !== d.node || _.focusOffset !== d.offset)) {
                    var g = z.createRange();
                    g.setStart(m.node, m.offset), _.removeAllRanges(), V > gt ? (_.addRange(g), _.extend(d.node, d.offset)) : (g.setEnd(d.node, d.offset), _.addRange(g));
                  }
                }
              }
            }
            for (z = [], _ = r; _ = _.parentNode; )
              _.nodeType === 1 && z.push({
                element: _,
                left: _.scrollLeft,
                top: _.scrollTop
              });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < z.length; r++) {
              var O = z[r];
              O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
            }
          }
          di = !!zs, Ns = zs = null;
        } finally {
          rt = a, q.p = n, A.T = l;
        }
      }
      t.current = e, Lt = 2;
    }
  }
  function dh() {
    if (Lt === 2) {
      Lt = 0;
      var t = xl, e = Pn, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = A.T, A.T = null;
        var n = q.p;
        q.p = 2;
        var a = rt;
        rt |= 4;
        try {
          Xr(t, e.alternate, e);
        } finally {
          rt = a, q.p = n, A.T = l;
        }
      }
      Lt = 3;
    }
  }
  function yh() {
    if (Lt === 4 || Lt === 3) {
      Lt = 0, uu();
      var t = xl, e = Pn, l = ml, n = th;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Lt = 5 : (Lt = 0, Pn = xl = null, mh(t, t.pendingLanes));
      var a = t.pendingLanes;
      if (a === 0 && (Bl = null), qi(l), e = e.stateNode, ne && typeof ne.onCommitFiberRoot == "function")
        try {
          ne.onCommitFiberRoot(
            Fl,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        e = A.T, a = q.p, q.p = 2, A.T = null;
        try {
          for (var u = t.onRecoverableError, c = 0; c < n.length; c++) {
            var r = n[c];
            u(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          A.T = e, q.p = a;
        }
      }
      (ml & 3) !== 0 && ei(), ke(t), a = t.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? t === ds ? Va++ : (Va = 0, ds = t) : Va = 0, wa(0);
    }
  }
  function mh(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Aa(e)));
  }
  function ei() {
    return hh(), dh(), yh(), vh();
  }
  function vh() {
    if (Lt !== 5) return !1;
    var t = xl, e = rs;
    rs = 0;
    var l = qi(ml), n = A.T, a = q.p;
    try {
      q.p = 32 > l ? 32 : l, A.T = null, l = hs, hs = null;
      var u = xl, c = ml;
      if (Lt = 0, Pn = xl = null, ml = 0, (rt & 6) !== 0) throw Error(f(331));
      var r = rt;
      if (rt |= 4, Fr(u.current), kr(
        u,
        u.current,
        c,
        l
      ), rt = r, wa(0, !1), ne && typeof ne.onPostCommitFiberRoot == "function")
        try {
          ne.onPostCommitFiberRoot(Fl, u);
        } catch {
        }
      return !0;
    } finally {
      q.p = a, A.T = n, mh(t, e);
    }
  }
  function gh(t, e, l) {
    e = ze(l, e), e = Zc(t.stateNode, e, 2), t = Rl(t, e, 2), t !== null && (tn(t, 2), ke(t));
  }
  function dt(t, e, l) {
    if (t.tag === 3)
      gh(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          gh(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Bl === null || !Bl.has(n))) {
            t = ze(l, t), l = pr(2), n = Rl(e, l, 2), n !== null && (br(
              l,
              n,
              e,
              t
            ), tn(n, 2), ke(n));
            break;
          }
        }
        e = e.return;
      }
  }
  function vs(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new nm();
      var a = /* @__PURE__ */ new Set();
      n.set(e, a);
    } else
      a = n.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(e, a));
    a.has(l) || (ss = !0, a.add(l), t = sm.bind(null, t, e, l), e.then(t, t));
  }
  function sm(t, e, l) {
    var n = t.pingCache;
    n !== null && n.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, bt === t && (lt & l) === l && (Ct === 4 || Ct === 3 && (lt & 62914560) === lt && 300 > qt() - Wu ? (rt & 2) === 0 && ta(t, 0) : fs |= l, In === lt && (In = 0)), ke(t);
  }
  function ph(t, e) {
    e === 0 && (e = oa()), t = un(t, e), t !== null && (tn(t, e), ke(t));
  }
  function fm(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), ph(t, l);
  }
  function om(t, e) {
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
    n !== null && n.delete(e), ph(t, l);
  }
  function rm(t, e) {
    return _n(t, e);
  }
  var li = null, la = null, gs = !1, ni = !1, ps = !1, jl = 0;
  function ke(t) {
    t !== la && t.next === null && (la === null ? li = la = t : la = la.next = t), ni = !0, gs || (gs = !0, dm());
  }
  function wa(t, e) {
    if (!ps && ni) {
      ps = !0;
      do
        for (var l = !1, n = li; n !== null; ) {
          if (t !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var c = n.suspendedLanes, r = n.pingedLanes;
              u = (1 << 31 - te(42 | t) + 1) - 1, u &= a & ~(c & ~r), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, Eh(n, u));
          } else
            u = lt, u = Pl(
              n,
              n === bt ? u : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (u & 3) === 0 || bl(n, u) || (l = !0, Eh(n, u));
          n = n.next;
        }
      while (l);
      ps = !1;
    }
  }
  function hm() {
    bh();
  }
  function bh() {
    ni = gs = !1;
    var t = 0;
    jl !== 0 && Tm() && (t = jl);
    for (var e = qt(), l = null, n = li; n !== null; ) {
      var a = n.next, u = Sh(n, e);
      u === 0 ? (n.next = null, l === null ? li = a : l.next = a, a === null && (la = l)) : (l = n, (t !== 0 || (u & 3) !== 0) && (ni = !0)), n = a;
    }
    Lt !== 0 && Lt !== 5 || wa(t), jl !== 0 && (jl = 0);
  }
  function Sh(t, e) {
    for (var l = t.suspendedLanes, n = t.pingedLanes, a = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - te(u), r = 1 << c, h = a[c];
      h === -1 ? ((r & l) === 0 || (r & n) !== 0) && (a[c] = cu(r, e)) : h <= e && (t.expiredLanes |= r), u &= ~r;
    }
    if (e = bt, l = lt, l = Pl(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n = t.callbackNode, l === 0 || t === e && (ht === 2 || ht === 9) || t.cancelPendingCommit !== null)
      return n !== null && n !== null && fa(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || bl(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (n !== null && fa(n), qi(l)) {
        case 2:
        case 8:
          l = $l;
          break;
        case 32:
          l = En;
          break;
        case 268435456:
          l = iu;
          break;
        default:
          l = En;
      }
      return n = _h.bind(null, t), l = _n(l, n), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return n !== null && n !== null && fa(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function _h(t, e) {
    if (Lt !== 0 && Lt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (ei() && t.callbackNode !== l)
      return null;
    var n = lt;
    return n = Pl(
      t,
      t === bt ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n === 0 ? null : (lh(t, n, e), Sh(t, qt()), t.callbackNode != null && t.callbackNode === l ? _h.bind(null, t) : null);
  }
  function Eh(t, e) {
    if (ei()) return null;
    lh(t, e, !0);
  }
  function dm() {
    Om(function() {
      (rt & 6) !== 0 ? _n(
        Wl,
        hm
      ) : bh();
    });
  }
  function bs() {
    if (jl === 0) {
      var t = Xn;
      t === 0 && (t = Dt, Dt <<= 1, (Dt & 261888) === 0 && (Dt = 256)), jl = t;
    }
    return jl;
  }
  function Th(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : ru("" + t);
  }
  function Ah(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function ym(t, e, l, n, a) {
    if (e === "submit" && l && l.stateNode === a) {
      var u = Th(
        (a[ue] || null).action
      ), c = n.submitter;
      c && (e = (e = c[ue] || null) ? Th(e.formAction) : c.getAttribute("formAction"), e !== null && (u = e, c = null));
      var r = new mu(
        "action",
        "action",
        null,
        n,
        a
      );
      t.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (jl !== 0) {
                  var h = c ? Ah(a, c) : new FormData(a);
                  Lc(
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
                typeof u == "function" && (r.preventDefault(), h = c ? Ah(a, c) : new FormData(a), Lc(
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
  for (var Ss = 0; Ss < lc.length; Ss++) {
    var _s = lc[Ss], mm = _s.toLowerCase(), vm = _s[0].toUpperCase() + _s.slice(1);
    He(
      mm,
      "on" + vm
    );
  }
  He(to, "onAnimationEnd"), He(eo, "onAnimationIteration"), He(lo, "onAnimationStart"), He("dblclick", "onDoubleClick"), He("focusin", "onFocus"), He("focusout", "onBlur"), He(Uy, "onTransitionRun"), He(qy, "onTransitionStart"), He(By, "onTransitionCancel"), He(no, "onTransitionEnd"), Nn("onMouseEnter", ["mouseout", "mouseover"]), Nn("onMouseLeave", ["mouseout", "mouseover"]), Nn("onPointerEnter", ["pointerout", "pointerover"]), Nn("onPointerLeave", ["pointerout", "pointerover"]), en(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), en(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), en("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), en(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), en(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), en(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Za = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), gm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Za)
  );
  function Oh(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var n = t[l], a = n.event;
      n = n.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var c = n.length - 1; 0 <= c; c--) {
            var r = n[c], h = r.instance, p = r.currentTarget;
            if (r = r.listener, h !== u && a.isPropagationStopped())
              break t;
            u = r, a.currentTarget = p;
            try {
              u(a);
            } catch (E) {
              pu(E);
            }
            a.currentTarget = null, u = h;
          }
        else
          for (c = 0; c < n.length; c++) {
            if (r = n[c], h = r.instance, p = r.currentTarget, r = r.listener, h !== u && a.isPropagationStopped())
              break t;
            u = r, a.currentTarget = p;
            try {
              u(a);
            } catch (E) {
              pu(E);
            }
            a.currentTarget = null, u = h;
          }
      }
    }
  }
  function tt(t, e) {
    var l = e[Bi];
    l === void 0 && (l = e[Bi] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    l.has(n) || (zh(e, t, 2, !1), l.add(n));
  }
  function Es(t, e, l) {
    var n = 0;
    e && (n |= 4), zh(
      l,
      t,
      n,
      e
    );
  }
  var ai = "_reactListening" + Math.random().toString(36).slice(2);
  function Ts(t) {
    if (!t[ai]) {
      t[ai] = !0, pf.forEach(function(l) {
        l !== "selectionchange" && (gm.has(l) || Es(l, !1, t), Es(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ai] || (e[ai] = !0, Es("selectionchange", !1, e));
    }
  }
  function zh(t, e, l, n) {
    switch (ed(e)) {
      case 2:
        var a = Zm;
        break;
      case 8:
        a = Km;
        break;
      default:
        a = Ys;
    }
    l = a.bind(
      null,
      e,
      l,
      t
    ), a = void 0, !Vi || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = !0), n ? a !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: a
    }) : t.addEventListener(e, l, !0) : a !== void 0 ? t.addEventListener(e, l, {
      passive: a
    }) : t.addEventListener(e, l, !1);
  }
  function As(t, e, l, n, a) {
    var u = n;
    if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
      t: for (; ; ) {
        if (n === null) return;
        var c = n.tag;
        if (c === 3 || c === 4) {
          var r = n.stateNode.containerInfo;
          if (r === a) break;
          if (c === 4)
            for (c = n.return; c !== null; ) {
              var h = c.tag;
              if ((h === 3 || h === 4) && c.stateNode.containerInfo === a)
                return;
              c = c.return;
            }
          for (; r !== null; ) {
            if (c = An(r), c === null) return;
            if (h = c.tag, h === 5 || h === 6 || h === 26 || h === 27) {
              n = u = c;
              continue t;
            }
            r = r.parentNode;
          }
        }
        n = n.return;
      }
    Df(function() {
      var p = u, E = Xi(l), z = [];
      t: {
        var b = ao.get(t);
        if (b !== void 0) {
          var _ = mu, H = t;
          switch (t) {
            case "keypress":
              if (du(l) === 0) break t;
            case "keydown":
            case "keyup":
              _ = oy;
              break;
            case "focusin":
              H = "focus", _ = Ji;
              break;
            case "focusout":
              H = "blur", _ = Ji;
              break;
            case "beforeblur":
            case "afterblur":
              _ = Ji;
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
              _ = qf;
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
              _ = dy;
              break;
            case to:
            case eo:
            case lo:
              _ = ey;
              break;
            case no:
              _ = my;
              break;
            case "scroll":
            case "scrollend":
              _ = $d;
              break;
            case "wheel":
              _ = gy;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = ny;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = xf;
              break;
            case "toggle":
            case "beforetoggle":
              _ = by;
          }
          var V = (e & 4) !== 0, gt = !V && (t === "scroll" || t === "scrollend"), m = V ? b !== null ? b + "Capture" : null : b;
          V = [];
          for (var d = p, g; d !== null; ) {
            var O = d;
            if (g = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || g === null || m === null || (O = da(d, m), O != null && V.push(
              Ka(d, O, g)
            )), gt) break;
            d = d.return;
          }
          0 < V.length && (b = new _(
            b,
            H,
            null,
            l,
            E
          ), z.push({ event: b, listeners: V }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (b = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout", b && l !== Gi && (H = l.relatedTarget || l.fromElement) && (An(H) || H[Tn]))
            break t;
          if ((_ || b) && (b = E.window === E ? E : (b = E.ownerDocument) ? b.defaultView || b.parentWindow : window, _ ? (H = l.relatedTarget || l.toElement, _ = p, H = H ? An(H) : null, H !== null && (gt = R(H), V = H.tag, H !== gt || V !== 5 && V !== 27 && V !== 6) && (H = null)) : (_ = null, H = p), _ !== H)) {
            if (V = qf, O = "onMouseLeave", m = "onMouseEnter", d = "mouse", (t === "pointerout" || t === "pointerover") && (V = xf, O = "onPointerLeave", m = "onPointerEnter", d = "pointer"), gt = _ == null ? b : ha(_), g = H == null ? b : ha(H), b = new V(
              O,
              d + "leave",
              _,
              l,
              E
            ), b.target = gt, b.relatedTarget = g, O = null, An(E) === p && (V = new V(
              m,
              d + "enter",
              H,
              l,
              E
            ), V.target = g, V.relatedTarget = gt, O = V), gt = O, _ && H)
              e: {
                for (V = pm, m = _, d = H, g = 0, O = m; O; O = V(O))
                  g++;
                O = 0;
                for (var X = d; X; X = V(X))
                  O++;
                for (; 0 < g - O; )
                  m = V(m), g--;
                for (; 0 < O - g; )
                  d = V(d), O--;
                for (; g--; ) {
                  if (m === d || d !== null && m === d.alternate) {
                    V = m;
                    break e;
                  }
                  m = V(m), d = V(d);
                }
                V = null;
              }
            else V = null;
            _ !== null && Nh(
              z,
              b,
              _,
              V,
              !1
            ), H !== null && gt !== null && Nh(
              z,
              gt,
              H,
              V,
              !0
            );
          }
        }
        t: {
          if (b = p ? ha(p) : window, _ = b.nodeName && b.nodeName.toLowerCase(), _ === "select" || _ === "input" && b.type === "file")
            var st = Vf;
          else if (Xf(b))
            if (wf)
              st = Cy;
            else {
              st = Ny;
              var Y = zy;
            }
          else
            _ = b.nodeName, !_ || _.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? p && Li(p.elementType) && (st = Vf) : st = Ry;
          if (st && (st = st(t, p))) {
            Qf(
              z,
              st,
              l,
              E
            );
            break t;
          }
          Y && Y(t, b, p), t === "focusout" && p && b.type === "number" && p.memoizedProps.value != null && Yi(b, "number", b.value);
        }
        switch (Y = p ? ha(p) : window, t) {
          case "focusin":
            (Xf(Y) || Y.contentEditable === "true") && (qn = Y, Pi = p, _a = null);
            break;
          case "focusout":
            _a = Pi = qn = null;
            break;
          case "mousedown":
            tc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            tc = !1, If(z, l, E);
            break;
          case "selectionchange":
            if (My) break;
          case "keydown":
          case "keyup":
            If(z, l, E);
        }
        var $;
        if (Wi)
          t: {
            switch (t) {
              case "compositionstart":
                var nt = "onCompositionStart";
                break t;
              case "compositionend":
                nt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                nt = "onCompositionUpdate";
                break t;
            }
            nt = void 0;
          }
        else
          Un ? Lf(t, l) && (nt = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (nt = "onCompositionStart");
        nt && (Hf && l.locale !== "ko" && (Un || nt !== "onCompositionStart" ? nt === "onCompositionEnd" && Un && ($ = Mf()) : (_l = E, wi = "value" in _l ? _l.value : _l.textContent, Un = !0)), Y = ui(p, nt), 0 < Y.length && (nt = new Bf(
          nt,
          t,
          null,
          l,
          E
        ), z.push({ event: nt, listeners: Y }), $ ? nt.data = $ : ($ = Gf(l), $ !== null && (nt.data = $)))), ($ = _y ? Ey(t, l) : Ty(t, l)) && (nt = ui(p, "onBeforeInput"), 0 < nt.length && (Y = new Bf(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          E
        ), z.push({
          event: Y,
          listeners: nt
        }), Y.data = $)), ym(
          z,
          t,
          p,
          l,
          E
        );
      }
      Oh(z, e);
    });
  }
  function Ka(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function ui(t, e) {
    for (var l = e + "Capture", n = []; t !== null; ) {
      var a = t, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = da(t, l), a != null && n.unshift(
        Ka(t, a, u)
      ), a = da(t, e), a != null && n.push(
        Ka(t, a, u)
      )), t.tag === 3) return n;
      t = t.return;
    }
    return [];
  }
  function pm(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Nh(t, e, l, n, a) {
    for (var u = e._reactName, c = []; l !== null && l !== n; ) {
      var r = l, h = r.alternate, p = r.stateNode;
      if (r = r.tag, h !== null && h === n) break;
      r !== 5 && r !== 26 && r !== 27 || p === null || (h = p, a ? (p = da(l, u), p != null && c.unshift(
        Ka(l, p, h)
      )) : a || (p = da(l, u), p != null && c.push(
        Ka(l, p, h)
      ))), l = l.return;
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var bm = /\r\n?/g, Sm = /\u0000|\uFFFD/g;
  function Rh(t) {
    return (typeof t == "string" ? t : "" + t).replace(bm, `
`).replace(Sm, "");
  }
  function Ch(t, e) {
    return e = Rh(e), Rh(t) === e;
  }
  function vt(t, e, l, n, a, u) {
    switch (l) {
      case "children":
        typeof n == "string" ? e === "body" || e === "textarea" && n === "" || Cn(t, n) : (typeof n == "number" || typeof n == "bigint") && e !== "body" && Cn(t, "" + n);
        break;
      case "className":
        fu(t, "class", n);
        break;
      case "tabIndex":
        fu(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        fu(t, l, n);
        break;
      case "style":
        Rf(t, n, u);
        break;
      case "data":
        if (e !== "object") {
          fu(t, "data", n);
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
        n = ru("" + n), t.setAttribute(l, n);
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
          typeof u == "function" && (l === "formAction" ? (e !== "input" && vt(t, e, "name", a.name, a, null), vt(
            t,
            e,
            "formEncType",
            a.formEncType,
            a,
            null
          ), vt(
            t,
            e,
            "formMethod",
            a.formMethod,
            a,
            null
          ), vt(
            t,
            e,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (vt(t, e, "encType", a.encType, a, null), vt(t, e, "method", a.method, a, null), vt(t, e, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = ru("" + n), t.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (t.onclick = tl);
        break;
      case "onScroll":
        n != null && tt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && tt("scrollend", t);
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
        l = ru("" + n), t.setAttributeNS(
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
        tt("beforetoggle", t), tt("toggle", t), su(t, "popover", n);
        break;
      case "xlinkActuate":
        Pe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Pe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Pe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Pe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Pe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Pe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Pe(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Pe(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Pe(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        su(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = kd.get(l) || l, su(t, l, n));
    }
  }
  function Os(t, e, l, n, a, u) {
    switch (l) {
      case "style":
        Rf(t, n, u);
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
        typeof n == "string" ? Cn(t, n) : (typeof n == "number" || typeof n == "bigint") && Cn(t, "" + n);
        break;
      case "onScroll":
        n != null && tt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && tt("scrollend", t);
        break;
      case "onClick":
        n != null && (t.onclick = tl);
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
        if (!bf.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), e = l.slice(2, a ? l.length - 7 : void 0), u = t[ue] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, a), typeof n == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, n, a);
              break t;
            }
            l in t ? t[l] = n : n === !0 ? t.setAttribute(l, "") : su(t, l, n);
          }
    }
  }
  function $t(t, e, l) {
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
        tt("error", t), tt("load", t);
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
                  vt(t, e, u, c, l, null);
              }
          }
        a && vt(t, e, "srcSet", l.srcSet, l, null), n && vt(t, e, "src", l.src, l, null);
        return;
      case "input":
        tt("invalid", t);
        var r = u = c = a = null, h = null, p = null;
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
                  h = E;
                  break;
                case "defaultChecked":
                  p = E;
                  break;
                case "value":
                  u = E;
                  break;
                case "defaultValue":
                  r = E;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (E != null)
                    throw Error(f(137, e));
                  break;
                default:
                  vt(t, e, n, E, l, null);
              }
          }
        Af(
          t,
          u,
          r,
          h,
          p,
          c,
          a,
          !1
        );
        return;
      case "select":
        tt("invalid", t), n = c = u = null;
        for (a in l)
          if (l.hasOwnProperty(a) && (r = l[a], r != null))
            switch (a) {
              case "value":
                u = r;
                break;
              case "defaultValue":
                c = r;
                break;
              case "multiple":
                n = r;
              default:
                vt(t, e, a, r, l, null);
            }
        e = u, l = c, t.multiple = !!n, e != null ? Rn(t, !!n, e, !1) : l != null && Rn(t, !!n, l, !0);
        return;
      case "textarea":
        tt("invalid", t), u = a = n = null;
        for (c in l)
          if (l.hasOwnProperty(c) && (r = l[c], r != null))
            switch (c) {
              case "value":
                n = r;
                break;
              case "defaultValue":
                a = r;
                break;
              case "children":
                u = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(f(91));
                break;
              default:
                vt(t, e, c, r, l, null);
            }
        zf(t, n, a, u);
        return;
      case "option":
        for (h in l)
          l.hasOwnProperty(h) && (n = l[h], n != null) && (h === "selected" ? t.selected = n && typeof n != "function" && typeof n != "symbol" : vt(t, e, h, n, l, null));
        return;
      case "dialog":
        tt("beforetoggle", t), tt("toggle", t), tt("cancel", t), tt("close", t);
        break;
      case "iframe":
      case "object":
        tt("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Za.length; n++)
          tt(Za[n], t);
        break;
      case "image":
        tt("error", t), tt("load", t);
        break;
      case "details":
        tt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        tt("error", t), tt("load", t);
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
        for (p in l)
          if (l.hasOwnProperty(p) && (n = l[p], n != null))
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                vt(t, e, p, n, l, null);
            }
        return;
      default:
        if (Li(e)) {
          for (E in l)
            l.hasOwnProperty(E) && (n = l[E], n !== void 0 && Os(
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
    for (r in l)
      l.hasOwnProperty(r) && (n = l[r], n != null && vt(t, e, r, n, l, null));
  }
  function _m(t, e, l, n) {
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
        var a = null, u = null, c = null, r = null, h = null, p = null, E = null;
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
                n.hasOwnProperty(_) || vt(t, e, _, null, n, z);
            }
        }
        for (var b in n) {
          var _ = n[b];
          if (z = l[b], n.hasOwnProperty(b) && (_ != null || z != null))
            switch (b) {
              case "type":
                u = _;
                break;
              case "name":
                a = _;
                break;
              case "checked":
                p = _;
                break;
              case "defaultChecked":
                E = _;
                break;
              case "value":
                c = _;
                break;
              case "defaultValue":
                r = _;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(f(137, e));
                break;
              default:
                _ !== z && vt(
                  t,
                  e,
                  b,
                  _,
                  n,
                  z
                );
            }
        }
        ji(
          t,
          c,
          r,
          h,
          p,
          E,
          u,
          a
        );
        return;
      case "select":
        _ = c = r = b = null;
        for (u in l)
          if (h = l[u], l.hasOwnProperty(u) && h != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                _ = h;
              default:
                n.hasOwnProperty(u) || vt(
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
                b = u;
                break;
              case "defaultValue":
                r = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== h && vt(
                  t,
                  e,
                  a,
                  u,
                  n,
                  h
                );
            }
        e = r, l = c, n = _, b != null ? Rn(t, !!l, b, !1) : !!n != !!l && (e != null ? Rn(t, !!l, e, !0) : Rn(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        _ = b = null;
        for (r in l)
          if (a = l[r], l.hasOwnProperty(r) && a != null && !n.hasOwnProperty(r))
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                vt(t, e, r, null, n, a);
            }
        for (c in n)
          if (a = n[c], u = l[c], n.hasOwnProperty(c) && (a != null || u != null))
            switch (c) {
              case "value":
                b = a;
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
                a !== u && vt(t, e, c, a, n, u);
            }
        Of(t, b, _);
        return;
      case "option":
        for (var H in l)
          b = l[H], l.hasOwnProperty(H) && b != null && !n.hasOwnProperty(H) && (H === "selected" ? t.selected = !1 : vt(
            t,
            e,
            H,
            null,
            n,
            b
          ));
        for (h in n)
          b = n[h], _ = l[h], n.hasOwnProperty(h) && b !== _ && (b != null || _ != null) && (h === "selected" ? t.selected = b && typeof b != "function" && typeof b != "symbol" : vt(
            t,
            e,
            h,
            b,
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
        for (var V in l)
          b = l[V], l.hasOwnProperty(V) && b != null && !n.hasOwnProperty(V) && vt(t, e, V, null, n, b);
        for (p in n)
          if (b = n[p], _ = l[p], n.hasOwnProperty(p) && b !== _ && (b != null || _ != null))
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null)
                  throw Error(f(137, e));
                break;
              default:
                vt(
                  t,
                  e,
                  p,
                  b,
                  n,
                  _
                );
            }
        return;
      default:
        if (Li(e)) {
          for (var gt in l)
            b = l[gt], l.hasOwnProperty(gt) && b !== void 0 && !n.hasOwnProperty(gt) && Os(
              t,
              e,
              gt,
              void 0,
              n,
              b
            );
          for (E in n)
            b = n[E], _ = l[E], !n.hasOwnProperty(E) || b === _ || b === void 0 && _ === void 0 || Os(
              t,
              e,
              E,
              b,
              n,
              _
            );
          return;
        }
    }
    for (var m in l)
      b = l[m], l.hasOwnProperty(m) && b != null && !n.hasOwnProperty(m) && vt(t, e, m, null, n, b);
    for (z in n)
      b = n[z], _ = l[z], !n.hasOwnProperty(z) || b === _ || b == null && _ == null || vt(t, e, z, b, n, _);
  }
  function Dh(t) {
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
  function Em() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], u = a.transferSize, c = a.initiatorType, r = a.duration;
        if (u && r && Dh(c)) {
          for (c = 0, r = a.responseEnd, n += 1; n < l.length; n++) {
            var h = l[n], p = h.startTime;
            if (p > r) break;
            var E = h.transferSize, z = h.initiatorType;
            E && Dh(z) && (h = h.responseEnd, c += E * (h < r ? 1 : (r - p) / (h - p)));
          }
          if (--n, e += 8 * (u + c) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var zs = null, Ns = null;
  function ii(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Mh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Uh(t, e) {
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
  function Rs(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Cs = null;
  function Tm() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Cs ? !1 : (Cs = t, !0) : (Cs = null, !1);
  }
  var qh = typeof setTimeout == "function" ? setTimeout : void 0, Am = typeof clearTimeout == "function" ? clearTimeout : void 0, Bh = typeof Promise == "function" ? Promise : void 0, Om = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bh < "u" ? function(t) {
    return Bh.resolve(null).then(t).catch(zm);
  } : qh;
  function zm(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Yl(t) {
    return t === "head";
  }
  function xh(t, e) {
    var l = e, n = 0;
    do {
      var a = l.nextSibling;
      if (t.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            t.removeChild(a), ia(e);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          Ja(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, Ja(l);
          for (var u = l.firstChild; u; ) {
            var c = u.nextSibling, r = u.nodeName;
            u[ra] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = c;
          }
        } else
          l === "body" && Ja(t.ownerDocument.body);
      l = a;
    } while (l);
    ia(e);
  }
  function Hh(t, e) {
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
  function Ds(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ds(l), xi(l);
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
  function Nm(t, e, l, n) {
    for (; t.nodeType === 1; ) {
      var a = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (n) {
        if (!t[ra])
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
      if (t = Me(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Rm(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Me(t.nextSibling), t === null)) return null;
    return t;
  }
  function jh(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Me(t.nextSibling), t === null)) return null;
    return t;
  }
  function Ms(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Us(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Cm(t, e) {
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
  function Me(t) {
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
  var qs = null;
  function Yh(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return Me(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Lh(t) {
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
  function Gh(t, e, l) {
    switch (e = ii(l), t) {
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
  function Ja(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    xi(t);
  }
  var Ue = /* @__PURE__ */ new Map(), Xh = /* @__PURE__ */ new Set();
  function ci(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var vl = q.d;
  q.d = {
    f: Dm,
    r: Mm,
    D: Um,
    C: qm,
    L: Bm,
    m: xm,
    X: jm,
    S: Hm,
    M: Ym
  };
  function Dm() {
    var t = vl.f(), e = Iu();
    return t || e;
  }
  function Mm(t) {
    var e = On(t);
    e !== null && e.tag === 5 && e.type === "form" ? ar(e) : vl.r(t);
  }
  var na = typeof document > "u" ? null : document;
  function Qh(t, e, l) {
    var n = na;
    if (n && typeof e == "string" && e) {
      var a = Ae(e);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), Xh.has(a) || (Xh.add(a), t = { rel: t, crossOrigin: l, href: e }, n.querySelector(a) === null && (e = n.createElement("link"), $t(e, "link", t), Qt(e), n.head.appendChild(e)));
    }
  }
  function Um(t) {
    vl.D(t), Qh("dns-prefetch", t, null);
  }
  function qm(t, e) {
    vl.C(t, e), Qh("preconnect", t, e);
  }
  function Bm(t, e, l) {
    vl.L(t, e, l);
    var n = na;
    if (n && t && e) {
      var a = 'link[rel="preload"][as="' + Ae(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Ae(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Ae(
        l.imageSizes
      ) + '"]')) : a += '[href="' + Ae(t) + '"]';
      var u = a;
      switch (e) {
        case "style":
          u = aa(t);
          break;
        case "script":
          u = ua(t);
      }
      Ue.has(u) || (t = U(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Ue.set(u, t), n.querySelector(a) !== null || e === "style" && n.querySelector(ka(u)) || e === "script" && n.querySelector(Wa(u)) || (e = n.createElement("link"), $t(e, "link", t), Qt(e), n.head.appendChild(e)));
    }
  }
  function xm(t, e) {
    vl.m(t, e);
    var l = na;
    if (l && t) {
      var n = e && typeof e.as == "string" ? e.as : "script", a = 'link[rel="modulepreload"][as="' + Ae(n) + '"][href="' + Ae(t) + '"]', u = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ua(t);
      }
      if (!Ue.has(u) && (t = U({ rel: "modulepreload", href: t }, e), Ue.set(u, t), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Wa(u)))
              return;
        }
        n = l.createElement("link"), $t(n, "link", t), Qt(n), l.head.appendChild(n);
      }
    }
  }
  function Hm(t, e, l) {
    vl.S(t, e, l);
    var n = na;
    if (n && t) {
      var a = zn(n).hoistableStyles, u = aa(t);
      e = e || "default";
      var c = a.get(u);
      if (!c) {
        var r = { loading: 0, preload: null };
        if (c = n.querySelector(
          ka(u)
        ))
          r.loading = 5;
        else {
          t = U(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = Ue.get(u)) && Bs(t, l);
          var h = c = n.createElement("link");
          Qt(h), $t(h, "link", t), h._p = new Promise(function(p, E) {
            h.onload = p, h.onerror = E;
          }), h.addEventListener("load", function() {
            r.loading |= 1;
          }), h.addEventListener("error", function() {
            r.loading |= 2;
          }), r.loading |= 4, si(c, e, n);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: r
        }, a.set(u, c);
      }
    }
  }
  function jm(t, e) {
    vl.X(t, e);
    var l = na;
    if (l && t) {
      var n = zn(l).hoistableScripts, a = ua(t), u = n.get(a);
      u || (u = l.querySelector(Wa(a)), u || (t = U({ src: t, async: !0 }, e), (e = Ue.get(a)) && xs(t, e), u = l.createElement("script"), Qt(u), $t(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Ym(t, e) {
    vl.M(t, e);
    var l = na;
    if (l && t) {
      var n = zn(l).hoistableScripts, a = ua(t), u = n.get(a);
      u || (u = l.querySelector(Wa(a)), u || (t = U({ src: t, async: !0, type: "module" }, e), (e = Ue.get(a)) && xs(t, e), u = l.createElement("script"), Qt(u), $t(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Vh(t, e, l, n) {
    var a = (a = F.current) ? ci(a) : null;
    if (!a) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = aa(l.href), l = zn(
          a
        ).hoistableStyles, n = l.get(e), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = aa(l.href);
          var u = zn(
            a
          ).hoistableStyles, c = u.get(t);
          if (c || (a = a.ownerDocument || a, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, c), (u = a.querySelector(
            ka(t)
          )) && !u._p && (c.instance = u, c.state.loading = 5), Ue.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Ue.set(t, l), u || Lm(
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
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ua(l), l = zn(
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
  function aa(t) {
    return 'href="' + Ae(t) + '"';
  }
  function ka(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function wh(t) {
    return U({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Lm(t, e, l, n) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? n.loading = 1 : (e = t.createElement("link"), n.preload = e, e.addEventListener("load", function() {
      return n.loading |= 1;
    }), e.addEventListener("error", function() {
      return n.loading |= 2;
    }), $t(e, "link", l), Qt(e), t.head.appendChild(e));
  }
  function ua(t) {
    return '[src="' + Ae(t) + '"]';
  }
  function Wa(t) {
    return "script[async]" + t;
  }
  function Zh(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var n = t.querySelector(
            'style[data-href~="' + Ae(l.href) + '"]'
          );
          if (n)
            return e.instance = n, Qt(n), n;
          var a = U({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (t.ownerDocument || t).createElement(
            "style"
          ), Qt(n), $t(n, "style", a), si(n, l.precedence, t), e.instance = n;
        case "stylesheet":
          a = aa(l.href);
          var u = t.querySelector(
            ka(a)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, Qt(u), u;
          n = wh(l), (a = Ue.get(a)) && Bs(n, a), u = (t.ownerDocument || t).createElement("link"), Qt(u);
          var c = u;
          return c._p = new Promise(function(r, h) {
            c.onload = r, c.onerror = h;
          }), $t(u, "link", n), e.state.loading |= 4, si(u, l.precedence, t), e.instance = u;
        case "script":
          return u = ua(l.src), (a = t.querySelector(
            Wa(u)
          )) ? (e.instance = a, Qt(a), a) : (n = l, (a = Ue.get(u)) && (n = U({}, l), xs(n, a)), t = t.ownerDocument || t, a = t.createElement("script"), Qt(a), $t(a, "link", n), t.head.appendChild(a), e.instance = a);
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (n = e.instance, e.state.loading |= 4, si(n, l.precedence, t));
    return e.instance;
  }
  function si(t, e, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, u = a, c = 0; c < n.length; c++) {
      var r = n[c];
      if (r.dataset.precedence === e) u = r;
      else if (u !== a) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function Bs(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function xs(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var fi = null;
  function Kh(t, e, l) {
    if (fi === null) {
      var n = /* @__PURE__ */ new Map(), a = fi = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = fi, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(t)) return n;
    for (n.set(t, null), l = l.getElementsByTagName(t), a = 0; a < l.length; a++) {
      var u = l[a];
      if (!(u[ra] || u[Kt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(e) || "";
        c = t + c;
        var r = n.get(c);
        r ? r.push(u) : n.set(c, [u]);
      }
    }
    return n;
  }
  function Jh(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Gm(t, e, l) {
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
  function kh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Xm(t, e, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = aa(n.href), u = e.querySelector(
          ka(a)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = oi.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Qt(u);
          return;
        }
        u = e.ownerDocument || e, n = wh(n), (a = Ue.get(a)) && Bs(n, a), u = u.createElement("link"), Qt(u);
        var c = u;
        c._p = new Promise(function(r, h) {
          c.onload = r, c.onerror = h;
        }), $t(u, "link", n), l.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = oi.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var Hs = 0;
  function Qm(t, e) {
    return t.stylesheets && t.count === 0 && hi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (t.stylesheets && hi(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Hs === 0 && (Hs = 62500 * Em());
      var a = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && hi(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > Hs ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function oi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) hi(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var ri = null;
  function hi(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, ri = /* @__PURE__ */ new Map(), e.forEach(Vm, t), ri = null, oi.call(t));
  }
  function Vm(t, e) {
    if (!(e.state.loading & 4)) {
      var l = ri.get(t);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), ri.set(t, l);
        for (var a = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < a.length; u++) {
          var c = a[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), n = c);
        }
        n && l.set(null, n);
      }
      a = e.instance, c = a.getAttribute("data-precedence"), u = l.get(c) || n, u === n && l.set(null, a), l.set(c, a), this.count++, n = oi.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), u ? u.parentNode.insertBefore(a, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), e.state.loading |= 4;
    }
  }
  var $a = {
    $$typeof: Xt,
    Provider: null,
    Consumer: null,
    _currentValue: L,
    _currentValue2: L,
    _threadCount: 0
  };
  function wm(t, e, l, n, a, u, c, r, h) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = pt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pt(0), this.hiddenUpdates = pt(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Wh(t, e, l, n, a, u, c, r, h, p, E, z) {
    return t = new wm(
      t,
      e,
      l,
      c,
      h,
      p,
      E,
      z,
      r
    ), e = 1, u === !0 && (e |= 24), u = me(3, null, null, e), t.current = u, u.stateNode = t, e = mc(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: e
    }, bc(u), t;
  }
  function $h(t) {
    return t ? (t = Hn, t) : Hn;
  }
  function Fh(t, e, l, n, a, u) {
    a = $h(a), n.context === null ? n.context = a : n.pendingContext = a, n = Nl(e), n.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (n.callback = u), l = Rl(t, n, e), l !== null && (re(l, t, e), Ra(l, t, e));
  }
  function Ih(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function js(t, e) {
    Ih(t, e), (t = t.alternate) && Ih(t, e);
  }
  function Ph(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = un(t, 67108864);
      e !== null && re(e, t, 67108864), js(t, 67108864);
    }
  }
  function td(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Se();
      e = Ui(e);
      var l = un(t, e);
      l !== null && re(l, t, e), js(t, e);
    }
  }
  var di = !0;
  function Zm(t, e, l, n) {
    var a = A.T;
    A.T = null;
    var u = q.p;
    try {
      q.p = 2, Ys(t, e, l, n);
    } finally {
      q.p = u, A.T = a;
    }
  }
  function Km(t, e, l, n) {
    var a = A.T;
    A.T = null;
    var u = q.p;
    try {
      q.p = 8, Ys(t, e, l, n);
    } finally {
      q.p = u, A.T = a;
    }
  }
  function Ys(t, e, l, n) {
    if (di) {
      var a = Ls(n);
      if (a === null)
        As(
          t,
          e,
          n,
          yi,
          l
        ), ld(t, n);
      else if (km(
        a,
        t,
        e,
        l,
        n
      ))
        n.stopPropagation();
      else if (ld(t, n), e & 4 && -1 < Jm.indexOf(t)) {
        for (; a !== null; ) {
          var u = On(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = we(u.pendingLanes);
                  if (c !== 0) {
                    var r = u;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; c; ) {
                      var h = 1 << 31 - te(c);
                      r.entanglements[1] |= h, c &= ~h;
                    }
                    ke(u), (rt & 6) === 0 && ($u = qt() + 500, wa(0));
                  }
                }
                break;
              case 31:
              case 13:
                r = un(u, 2), r !== null && re(r, u, 2), Iu(), js(u, 2);
            }
          if (u = Ls(n), u === null && As(
            t,
            e,
            n,
            yi,
            l
          ), u === a) break;
          a = u;
        }
        a !== null && n.stopPropagation();
      } else
        As(
          t,
          e,
          n,
          null,
          l
        );
    }
  }
  function Ls(t) {
    return t = Xi(t), Gs(t);
  }
  var yi = null;
  function Gs(t) {
    if (yi = null, t = An(t), t !== null) {
      var e = R(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = M(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = G(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return yi = t, null;
  }
  function ed(t) {
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
        switch (kl()) {
          case Wl:
            return 2;
          case $l:
            return 8;
          case En:
          case Ci:
            return 32;
          case iu:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Xs = !1, Ll = null, Gl = null, Xl = null, Fa = /* @__PURE__ */ new Map(), Ia = /* @__PURE__ */ new Map(), Ql = [], Jm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ld(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ll = null;
        break;
      case "dragenter":
      case "dragleave":
        Gl = null;
        break;
      case "mouseover":
      case "mouseout":
        Xl = null;
        break;
      case "pointerover":
      case "pointerout":
        Fa.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ia.delete(e.pointerId);
    }
  }
  function Pa(t, e, l, n, a, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: u,
      targetContainers: [a]
    }, e !== null && (e = On(e), e !== null && Ph(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
  }
  function km(t, e, l, n, a) {
    switch (e) {
      case "focusin":
        return Ll = Pa(
          Ll,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return Gl = Pa(
          Gl,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return Xl = Pa(
          Xl,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var u = a.pointerId;
        return Fa.set(
          u,
          Pa(
            Fa.get(u) || null,
            t,
            e,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return u = a.pointerId, Ia.set(
          u,
          Pa(
            Ia.get(u) || null,
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
  function nd(t) {
    var e = An(t.target);
    if (e !== null) {
      var l = R(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = M(l), e !== null) {
            t.blockedOn = e, vf(t.priority, function() {
              td(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = G(l), e !== null) {
            t.blockedOn = e, vf(t.priority, function() {
              td(l);
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
  function mi(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Ls(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        Gi = n, l.target.dispatchEvent(n), Gi = null;
      } else
        return e = On(l), e !== null && Ph(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function ad(t, e, l) {
    mi(t) && l.delete(e);
  }
  function Wm() {
    Xs = !1, Ll !== null && mi(Ll) && (Ll = null), Gl !== null && mi(Gl) && (Gl = null), Xl !== null && mi(Xl) && (Xl = null), Fa.forEach(ad), Ia.forEach(ad);
  }
  function vi(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Xs || (Xs = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      Wm
    )));
  }
  var gi = null;
  function ud(t) {
    gi !== t && (gi = t, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        gi === t && (gi = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], n = t[e + 1], a = t[e + 2];
          if (typeof n != "function") {
            if (Gs(n || l) === null)
              continue;
            break;
          }
          var u = On(l);
          u !== null && (t.splice(e, 3), e -= 3, Lc(
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
  function ia(t) {
    function e(h) {
      return vi(h, t);
    }
    Ll !== null && vi(Ll, t), Gl !== null && vi(Gl, t), Xl !== null && vi(Xl, t), Fa.forEach(e), Ia.forEach(e);
    for (var l = 0; l < Ql.length; l++) {
      var n = Ql[l];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < Ql.length && (l = Ql[0], l.blockedOn === null); )
      nd(l), l.blockedOn === null && Ql.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], u = l[n + 1], c = a[ue] || null;
        if (typeof u == "function")
          c || ud(l);
        else if (c) {
          var r = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, c = u[ue] || null)
              r = c.formAction;
            else if (Gs(a) !== null) continue;
          } else r = c.action;
          typeof r == "function" ? l[n + 1] = r : (l.splice(n, 3), n -= 3), ud(l);
        }
      }
  }
  function id() {
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
  function Qs(t) {
    this._internalRoot = t;
  }
  pi.prototype.render = Qs.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(f(409));
    var l = e.current, n = Se();
    Fh(l, n, t, e, null, null);
  }, pi.prototype.unmount = Qs.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Fh(t.current, 2, null, t, null, null), Iu(), e[Tn] = null;
    }
  };
  function pi(t) {
    this._internalRoot = t;
  }
  pi.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = mf();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Ql.length && e !== 0 && e < Ql[l].priority; l++) ;
      Ql.splice(l, 0, t), l === 0 && nd(t);
    }
  };
  var cd = i.version;
  if (cd !== "19.2.4")
    throw Error(
      f(
        527,
        cd,
        "19.2.4"
      )
    );
  q.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
    return t = T(e), t = t !== null ? w(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var $m = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bi.isDisabled && bi.supportsFiber)
      try {
        Fl = bi.inject(
          $m
        ), ne = bi;
      } catch {
      }
  }
  return eu.createRoot = function(t, e) {
    if (!v(t)) throw Error(f(299));
    var l = !1, n = "", a = yr, u = mr, c = vr;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), e = Wh(
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
      id
    ), t[Tn] = e.current, Ts(t), new Qs(e);
  }, eu.hydrateRoot = function(t, e, l) {
    if (!v(t)) throw Error(f(299));
    var n = !1, a = "", u = yr, c = mr, r = vr, h = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (r = l.onRecoverableError), l.formState !== void 0 && (h = l.formState)), e = Wh(
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
      r,
      id
    ), e.context = $h(null), l = e.current, n = Se(), n = Ui(n), a = Nl(n), a.callback = null, Rl(l, a, n), l = n, e.current.lanes = l, tn(e, l), ke(e), t[Tn] = e.current, Ts(t), new pi(e);
  }, eu.version = "19.2.4", eu;
}
var gd;
function i0() {
  if (gd) return Zs.exports;
  gd = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (i) {
        console.error(i);
      }
  }
  return o(), Zs.exports = u0(), Zs.exports;
}
var c0 = i0();
const s0 = "/api";
function zd() {
  return window.localStorage.getItem("token");
}
function pd() {
  window.location.replace("/login.html");
}
async function ca(o, i = {}) {
  const s = zd(), f = {
    "Content-Type": "application/json",
    ...s ? { Authorization: `Bearer ${s}` } : {},
    ...i.headers || {}
  }, v = await fetch(`${s0}${o}`, {
    ...i,
    headers: f
  }), R = await v.text();
  let M = {};
  if (R)
    try {
      M = JSON.parse(R);
    } catch {
      M = { message: R };
    }
  if (!v.ok) {
    const G = M.error || M.message || "Request failed";
    throw new Error(G);
  }
  return M;
}
const $e = /* @__PURE__ */ Object.create(null);
$e.open = "0";
$e.close = "1";
$e.ping = "2";
$e.pong = "3";
$e.message = "4";
$e.upgrade = "5";
$e.noop = "6";
const Ti = /* @__PURE__ */ Object.create(null);
Object.keys($e).forEach((o) => {
  Ti[$e[o]] = o;
});
const Ps = { type: "error", data: "parser error" }, Nd = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Rd = typeof ArrayBuffer == "function", Cd = (o) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(o) : o && o.buffer instanceof ArrayBuffer, cf = ({ type: o, data: i }, s, f) => Nd && i instanceof Blob ? s ? f(i) : bd(i, f) : Rd && (i instanceof ArrayBuffer || Cd(i)) ? s ? f(i) : bd(new Blob([i]), f) : f($e[o] + (i || "")), bd = (o, i) => {
  const s = new FileReader();
  return s.onload = function() {
    const f = s.result.split(",")[1];
    i("b" + (f || ""));
  }, s.readAsDataURL(o);
};
function Sd(o) {
  return o instanceof Uint8Array ? o : o instanceof ArrayBuffer ? new Uint8Array(o) : new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
}
let Ws;
function f0(o, i) {
  if (Nd && o.data instanceof Blob)
    return o.data.arrayBuffer().then(Sd).then(i);
  if (Rd && (o.data instanceof ArrayBuffer || Cd(o.data)))
    return i(Sd(o.data));
  cf(o, !1, (s) => {
    Ws || (Ws = new TextEncoder()), i(Ws.encode(s));
  });
}
const _d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", nu = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let o = 0; o < _d.length; o++)
  nu[_d.charCodeAt(o)] = o;
const o0 = (o) => {
  let i = o.length * 0.75, s = o.length, f, v = 0, R, M, G, C;
  o[o.length - 1] === "=" && (i--, o[o.length - 2] === "=" && i--);
  const T = new ArrayBuffer(i), w = new Uint8Array(T);
  for (f = 0; f < s; f += 4)
    R = nu[o.charCodeAt(f)], M = nu[o.charCodeAt(f + 1)], G = nu[o.charCodeAt(f + 2)], C = nu[o.charCodeAt(f + 3)], w[v++] = R << 2 | M >> 4, w[v++] = (M & 15) << 4 | G >> 2, w[v++] = (G & 3) << 6 | C & 63;
  return T;
}, r0 = typeof ArrayBuffer == "function", sf = (o, i) => {
  if (typeof o != "string")
    return {
      type: "message",
      data: Dd(o, i)
    };
  const s = o.charAt(0);
  return s === "b" ? {
    type: "message",
    data: h0(o.substring(1), i)
  } : Ti[s] ? o.length > 1 ? {
    type: Ti[s],
    data: o.substring(1)
  } : {
    type: Ti[s]
  } : Ps;
}, h0 = (o, i) => {
  if (r0) {
    const s = o0(o);
    return Dd(s, i);
  } else
    return { base64: !0, data: o };
}, Dd = (o, i) => i === "blob" ? o instanceof Blob ? o : new Blob([o]) : o instanceof ArrayBuffer ? o : o.buffer, Md = "", d0 = (o, i) => {
  const s = o.length, f = new Array(s);
  let v = 0;
  o.forEach((R, M) => {
    cf(R, !1, (G) => {
      f[M] = G, ++v === s && i(f.join(Md));
    });
  });
}, y0 = (o, i) => {
  const s = o.split(Md), f = [];
  for (let v = 0; v < s.length; v++) {
    const R = sf(s[v], i);
    if (f.push(R), R.type === "error")
      break;
  }
  return f;
};
function m0() {
  return new TransformStream({
    transform(o, i) {
      f0(o, (s) => {
        const f = s.length;
        let v;
        if (f < 126)
          v = new Uint8Array(1), new DataView(v.buffer).setUint8(0, f);
        else if (f < 65536) {
          v = new Uint8Array(3);
          const R = new DataView(v.buffer);
          R.setUint8(0, 126), R.setUint16(1, f);
        } else {
          v = new Uint8Array(9);
          const R = new DataView(v.buffer);
          R.setUint8(0, 127), R.setBigUint64(1, BigInt(f));
        }
        o.data && typeof o.data != "string" && (v[0] |= 128), i.enqueue(v), i.enqueue(s);
      });
    }
  });
}
let $s;
function Si(o) {
  return o.reduce((i, s) => i + s.length, 0);
}
function _i(o, i) {
  if (o[0].length === i)
    return o.shift();
  const s = new Uint8Array(i);
  let f = 0;
  for (let v = 0; v < i; v++)
    s[v] = o[0][f++], f === o[0].length && (o.shift(), f = 0);
  return o.length && f < o[0].length && (o[0] = o[0].slice(f)), s;
}
function v0(o, i) {
  $s || ($s = new TextDecoder());
  const s = [];
  let f = 0, v = -1, R = !1;
  return new TransformStream({
    transform(M, G) {
      for (s.push(M); ; ) {
        if (f === 0) {
          if (Si(s) < 1)
            break;
          const C = _i(s, 1);
          R = (C[0] & 128) === 128, v = C[0] & 127, v < 126 ? f = 3 : v === 126 ? f = 1 : f = 2;
        } else if (f === 1) {
          if (Si(s) < 2)
            break;
          const C = _i(s, 2);
          v = new DataView(C.buffer, C.byteOffset, C.length).getUint16(0), f = 3;
        } else if (f === 2) {
          if (Si(s) < 8)
            break;
          const C = _i(s, 8), T = new DataView(C.buffer, C.byteOffset, C.length), w = T.getUint32(0);
          if (w > Math.pow(2, 21) - 1) {
            G.enqueue(Ps);
            break;
          }
          v = w * Math.pow(2, 32) + T.getUint32(4), f = 3;
        } else {
          if (Si(s) < v)
            break;
          const C = _i(s, v);
          G.enqueue(sf(R ? C : $s.decode(C), i)), f = 0;
        }
        if (v === 0 || v > o) {
          G.enqueue(Ps);
          break;
        }
      }
    }
  });
}
const Ud = 4;
function Yt(o) {
  if (o) return g0(o);
}
function g0(o) {
  for (var i in Yt.prototype)
    o[i] = Yt.prototype[i];
  return o;
}
Yt.prototype.on = Yt.prototype.addEventListener = function(o, i) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + o] = this._callbacks["$" + o] || []).push(i), this;
};
Yt.prototype.once = function(o, i) {
  function s() {
    this.off(o, s), i.apply(this, arguments);
  }
  return s.fn = i, this.on(o, s), this;
};
Yt.prototype.off = Yt.prototype.removeListener = Yt.prototype.removeAllListeners = Yt.prototype.removeEventListener = function(o, i) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var s = this._callbacks["$" + o];
  if (!s) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + o], this;
  for (var f, v = 0; v < s.length; v++)
    if (f = s[v], f === i || f.fn === i) {
      s.splice(v, 1);
      break;
    }
  return s.length === 0 && delete this._callbacks["$" + o], this;
};
Yt.prototype.emit = function(o) {
  this._callbacks = this._callbacks || {};
  for (var i = new Array(arguments.length - 1), s = this._callbacks["$" + o], f = 1; f < arguments.length; f++)
    i[f - 1] = arguments[f];
  if (s) {
    s = s.slice(0);
    for (var f = 0, v = s.length; f < v; ++f)
      s[f].apply(this, i);
  }
  return this;
};
Yt.prototype.emitReserved = Yt.prototype.emit;
Yt.prototype.listeners = function(o) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + o] || [];
};
Yt.prototype.hasListeners = function(o) {
  return !!this.listeners(o).length;
};
const Ni = typeof Promise == "function" && typeof Promise.resolve == "function" ? (i) => Promise.resolve().then(i) : (i, s) => s(i, 0), qe = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), p0 = "arraybuffer";
function qd(o, ...i) {
  return i.reduce((s, f) => (o.hasOwnProperty(f) && (s[f] = o[f]), s), {});
}
const b0 = qe.setTimeout, S0 = qe.clearTimeout;
function Ri(o, i) {
  i.useNativeTimers ? (o.setTimeoutFn = b0.bind(qe), o.clearTimeoutFn = S0.bind(qe)) : (o.setTimeoutFn = qe.setTimeout.bind(qe), o.clearTimeoutFn = qe.clearTimeout.bind(qe));
}
const _0 = 1.33;
function E0(o) {
  return typeof o == "string" ? T0(o) : Math.ceil((o.byteLength || o.size) * _0);
}
function T0(o) {
  let i = 0, s = 0;
  for (let f = 0, v = o.length; f < v; f++)
    i = o.charCodeAt(f), i < 128 ? s += 1 : i < 2048 ? s += 2 : i < 55296 || i >= 57344 ? s += 3 : (f++, s += 4);
  return s;
}
function Bd() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function A0(o) {
  let i = "";
  for (let s in o)
    o.hasOwnProperty(s) && (i.length && (i += "&"), i += encodeURIComponent(s) + "=" + encodeURIComponent(o[s]));
  return i;
}
function O0(o) {
  let i = {}, s = o.split("&");
  for (let f = 0, v = s.length; f < v; f++) {
    let R = s[f].split("=");
    i[decodeURIComponent(R[0])] = decodeURIComponent(R[1]);
  }
  return i;
}
class z0 extends Error {
  constructor(i, s, f) {
    super(i), this.description = s, this.context = f, this.type = "TransportError";
  }
}
class ff extends Yt {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(i) {
    super(), this.writable = !1, Ri(this, i), this.opts = i, this.query = i.query, this.socket = i.socket, this.supportsBinary = !i.forceBase64;
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
    const s = sf(i, this.socket.binaryType);
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
class N0 extends ff {
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
    y0(i, this.socket.binaryType).forEach(s), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    return this.opts.timestampRequests !== !1 && (s[this.opts.timestampParam] = Bd()), !this.supportsBinary && !s.sid && (s.b64 = 1), this.createUri(i, s);
  }
}
let xd = !1;
try {
  xd = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const R0 = xd;
function C0() {
}
class D0 extends N0 {
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
    f.on("success", s), f.on("error", (v, R) => {
      this.onError("xhr post error", v, R);
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
class We extends Yt {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(i, s, f) {
    super(), this.createRequest = i, Ri(this, f), this._opts = f, this._method = f.method || "GET", this._uri = s, this._data = f.data !== void 0 ? f.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var i;
    const s = qd(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    s.xdomain = !!this._opts.xd;
    const f = this._xhr = this.createRequest(s);
    try {
      f.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          f.setDisableHeaderCheck && f.setDisableHeaderCheck(!0);
          for (let v in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(v) && f.setRequestHeader(v, this._opts.extraHeaders[v]);
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
        var v;
        f.readyState === 3 && ((v = this._opts.cookieJar) === null || v === void 0 || v.parseCookies(
          // @ts-ignore
          f.getResponseHeader("set-cookie")
        )), f.readyState === 4 && (f.status === 200 || f.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof f.status == "number" ? f.status : 0);
        }, 0));
      }, f.send(this._data);
    } catch (v) {
      this.setTimeoutFn(() => {
        this._onError(v);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = We.requestsCount++, We.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = C0, i)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete We.requests[this._index], this._xhr = null;
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
We.requestsCount = 0;
We.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Ed);
  else if (typeof addEventListener == "function") {
    const o = "onpagehide" in qe ? "pagehide" : "unload";
    addEventListener(o, Ed, !1);
  }
}
function Ed() {
  for (let o in We.requests)
    We.requests.hasOwnProperty(o) && We.requests[o].abort();
}
const M0 = (function() {
  const o = Hd({
    xdomain: !1
  });
  return o && o.responseType !== null;
})();
class U0 extends D0 {
  constructor(i) {
    super(i);
    const s = i && i.forceBase64;
    this.supportsBinary = M0 && !s;
  }
  request(i = {}) {
    return Object.assign(i, { xd: this.xd }, this.opts), new We(Hd, this.uri(), i);
  }
}
function Hd(o) {
  const i = o.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!i || R0))
      return new XMLHttpRequest();
  } catch {
  }
  if (!i)
    try {
      return new qe[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const jd = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class q0 extends ff {
  get name() {
    return "websocket";
  }
  doOpen() {
    const i = this.uri(), s = this.opts.protocols, f = jd ? {} : qd(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (f.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(i, s, f);
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
      const f = i[s], v = s === i.length - 1;
      cf(f, this.supportsBinary, (R) => {
        try {
          this.doWrite(f, R);
        } catch {
        }
        v && Ni(() => {
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
    return this.opts.timestampRequests && (s[this.opts.timestampParam] = Bd()), this.supportsBinary || (s.b64 = 1), this.createUri(i, s);
  }
}
const Fs = qe.WebSocket || qe.MozWebSocket;
class B0 extends q0 {
  createSocket(i, s, f) {
    return jd ? new Fs(i, s, f) : s ? new Fs(i, s) : new Fs(i);
  }
  doWrite(i, s) {
    this.ws.send(s);
  }
}
class x0 extends ff {
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
        const s = v0(Number.MAX_SAFE_INTEGER, this.socket.binaryType), f = i.readable.pipeThrough(s).getReader(), v = m0();
        v.readable.pipeTo(i.writable), this._writer = v.writable.getWriter();
        const R = () => {
          f.read().then(({ done: G, value: C }) => {
            G || (this.onPacket(C), R());
          }).catch((G) => {
          });
        };
        R();
        const M = { type: "open" };
        this.query.sid && (M.data = `{"sid":"${this.query.sid}"}`), this._writer.write(M).then(() => this.onOpen());
      });
    });
  }
  write(i) {
    this.writable = !1;
    for (let s = 0; s < i.length; s++) {
      const f = i[s], v = s === i.length - 1;
      this._writer.write(f).then(() => {
        v && Ni(() => {
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
  websocket: B0,
  webtransport: x0,
  polling: U0
}, j0 = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Y0 = [
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
function tf(o) {
  if (o.length > 8e3)
    throw "URI too long";
  const i = o, s = o.indexOf("["), f = o.indexOf("]");
  s != -1 && f != -1 && (o = o.substring(0, s) + o.substring(s, f).replace(/:/g, ";") + o.substring(f, o.length));
  let v = j0.exec(o || ""), R = {}, M = 14;
  for (; M--; )
    R[Y0[M]] = v[M] || "";
  return s != -1 && f != -1 && (R.source = i, R.host = R.host.substring(1, R.host.length - 1).replace(/;/g, ":"), R.authority = R.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), R.ipv6uri = !0), R.pathNames = L0(R, R.path), R.queryKey = G0(R, R.query), R;
}
function L0(o, i) {
  const s = /\/{2,9}/g, f = i.replace(s, "/").split("/");
  return (i.slice(0, 1) == "/" || i.length === 0) && f.splice(0, 1), i.slice(-1) == "/" && f.splice(f.length - 1, 1), f;
}
function G0(o, i) {
  const s = {};
  return i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(f, v, R) {
    v && (s[v] = R);
  }), s;
}
const ef = typeof addEventListener == "function" && typeof removeEventListener == "function", Ai = [];
ef && addEventListener("offline", () => {
  Ai.forEach((o) => o());
}, !1);
class Zl extends Yt {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(i, s) {
    if (super(), this.binaryType = p0, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, i && typeof i == "object" && (s = i, i = null), i) {
      const f = tf(i);
      s.hostname = f.host, s.secure = f.protocol === "https" || f.protocol === "wss", s.port = f.port, f.query && (s.query = f.query);
    } else s.host && (s.hostname = tf(s.host).host);
    Ri(this, s), this.secure = s.secure != null ? s.secure : typeof location < "u" && location.protocol === "https:", s.hostname && !s.port && (s.port = this.secure ? "443" : "80"), this.hostname = s.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = s.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, s.transports.forEach((f) => {
      const v = f.prototype.name;
      this.transports.push(v), this._transportsByName[v] = f;
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
    }, s), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = O0(this.opts.query)), ef && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Ai.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    s.EIO = Ud, s.transport = i, this.id && (s.sid = this.id);
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
    const i = this.opts.rememberUpgrade && Zl.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", Zl.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      const v = this.writeBuffer[f].data;
      if (v && (s += E0(v)), f > 0 && s > this._maxPayload)
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
    return i && (this._pingTimeoutTime = 0, Ni(() => {
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
  _sendPacket(i, s, f, v) {
    if (typeof s == "function" && (v = s, s = void 0), typeof f == "function" && (v = f, f = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    f = f || {}, f.compress = f.compress !== !1;
    const R = {
      type: i,
      data: s,
      options: f
    };
    this.emitReserved("packetCreate", R), this.writeBuffer.push(R), v && this.once("flush", v), this.flush();
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
    if (Zl.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), ef && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const f = Ai.indexOf(this._offlineEventListener);
        f !== -1 && Ai.splice(f, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", i, s), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Zl.protocol = Ud;
class X0 extends Zl {
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
    Zl.priorWebsocketSuccess = !1;
    const v = () => {
      f || (s.send([{ type: "ping", data: "probe" }]), s.once("packet", (U) => {
        if (!f)
          if (U.type === "pong" && U.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", s), !s)
              return;
            Zl.priorWebsocketSuccess = s.name === "websocket", this.transport.pause(() => {
              f || this.readyState !== "closed" && (w(), this.setTransport(s), s.send([{ type: "upgrade" }]), this.emitReserved("upgrade", s), s = null, this.upgrading = !1, this.flush());
            });
          } else {
            const it = new Error("probe error");
            it.transport = s.name, this.emitReserved("upgradeError", it);
          }
      }));
    };
    function R() {
      f || (f = !0, w(), s.close(), s = null);
    }
    const M = (U) => {
      const it = new Error("probe error: " + U);
      it.transport = s.name, R(), this.emitReserved("upgradeError", it);
    };
    function G() {
      M("transport closed");
    }
    function C() {
      M("socket closed");
    }
    function T(U) {
      s && U.name !== s.name && R();
    }
    const w = () => {
      s.removeListener("open", v), s.removeListener("error", M), s.removeListener("close", G), this.off("close", C), this.off("upgrading", T);
    };
    s.once("open", v), s.once("error", M), s.once("close", G), this.once("close", C), this.once("upgrading", T), this._upgrades.indexOf("webtransport") !== -1 && i !== "webtransport" ? this.setTimeoutFn(() => {
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
let Q0 = class extends X0 {
  constructor(i, s = {}) {
    const f = typeof i == "object" ? i : s;
    (!f.transports || f.transports && typeof f.transports[0] == "string") && (f.transports = (f.transports || ["polling", "websocket", "webtransport"]).map((v) => H0[v]).filter((v) => !!v)), super(i, f);
  }
};
function V0(o, i = "", s) {
  let f = o;
  s = s || typeof location < "u" && location, o == null && (o = s.protocol + "//" + s.host), typeof o == "string" && (o.charAt(0) === "/" && (o.charAt(1) === "/" ? o = s.protocol + o : o = s.host + o), /^(https?|wss?):\/\//.test(o) || (typeof s < "u" ? o = s.protocol + "//" + o : o = "https://" + o), f = tf(o)), f.port || (/^(http|ws)$/.test(f.protocol) ? f.port = "80" : /^(http|ws)s$/.test(f.protocol) && (f.port = "443")), f.path = f.path || "/";
  const R = f.host.indexOf(":") !== -1 ? "[" + f.host + "]" : f.host;
  return f.id = f.protocol + "://" + R + ":" + f.port + i, f.href = f.protocol + "://" + R + (s && s.port === f.port ? "" : ":" + f.port), f;
}
const w0 = typeof ArrayBuffer == "function", Z0 = (o) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(o) : o.buffer instanceof ArrayBuffer, Yd = Object.prototype.toString, K0 = typeof Blob == "function" || typeof Blob < "u" && Yd.call(Blob) === "[object BlobConstructor]", J0 = typeof File == "function" || typeof File < "u" && Yd.call(File) === "[object FileConstructor]";
function of(o) {
  return w0 && (o instanceof ArrayBuffer || Z0(o)) || K0 && o instanceof Blob || J0 && o instanceof File;
}
function Oi(o, i) {
  if (!o || typeof o != "object")
    return !1;
  if (Array.isArray(o)) {
    for (let s = 0, f = o.length; s < f; s++)
      if (Oi(o[s]))
        return !0;
    return !1;
  }
  if (of(o))
    return !0;
  if (o.toJSON && typeof o.toJSON == "function" && arguments.length === 1)
    return Oi(o.toJSON(), !0);
  for (const s in o)
    if (Object.prototype.hasOwnProperty.call(o, s) && Oi(o[s]))
      return !0;
  return !1;
}
function k0(o) {
  const i = [], s = o.data, f = o;
  return f.data = lf(s, i), f.attachments = i.length, { packet: f, buffers: i };
}
function lf(o, i) {
  if (!o)
    return o;
  if (of(o)) {
    const s = { _placeholder: !0, num: i.length };
    return i.push(o), s;
  } else if (Array.isArray(o)) {
    const s = new Array(o.length);
    for (let f = 0; f < o.length; f++)
      s[f] = lf(o[f], i);
    return s;
  } else if (typeof o == "object" && !(o instanceof Date)) {
    const s = {};
    for (const f in o)
      Object.prototype.hasOwnProperty.call(o, f) && (s[f] = lf(o[f], i));
    return s;
  }
  return o;
}
function W0(o, i) {
  return o.data = nf(o.data, i), delete o.attachments, o;
}
function nf(o, i) {
  if (!o)
    return o;
  if (o && o._placeholder === !0) {
    if (typeof o.num == "number" && o.num >= 0 && o.num < i.length)
      return i[o.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(o))
    for (let s = 0; s < o.length; s++)
      o[s] = nf(o[s], i);
  else if (typeof o == "object")
    for (const s in o)
      Object.prototype.hasOwnProperty.call(o, s) && (o[s] = nf(o[s], i));
  return o;
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
var ut;
(function(o) {
  o[o.CONNECT = 0] = "CONNECT", o[o.DISCONNECT = 1] = "DISCONNECT", o[o.EVENT = 2] = "EVENT", o[o.ACK = 3] = "ACK", o[o.CONNECT_ERROR = 4] = "CONNECT_ERROR", o[o.BINARY_EVENT = 5] = "BINARY_EVENT", o[o.BINARY_ACK = 6] = "BINARY_ACK";
})(ut || (ut = {}));
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
    return (i.type === ut.EVENT || i.type === ut.ACK) && Oi(i) ? this.encodeAsBinary({
      type: i.type === ut.EVENT ? ut.BINARY_EVENT : ut.BINARY_ACK,
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
    return (i.type === ut.BINARY_EVENT || i.type === ut.BINARY_ACK) && (s += i.attachments + "-"), i.nsp && i.nsp !== "/" && (s += i.nsp + ","), i.id != null && (s += i.id), i.data != null && (s += JSON.stringify(i.data, this.replacer)), s;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(i) {
    const s = k0(i), f = this.encodeAsString(s.packet), v = s.buffers;
    return v.unshift(f), v;
  }
}
class rf extends Yt {
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
      const f = s.type === ut.BINARY_EVENT;
      f || s.type === ut.BINARY_ACK ? (s.type = f ? ut.EVENT : ut.ACK, this.reconstructor = new I0(s), s.attachments === 0 && super.emitReserved("decoded", s)) : super.emitReserved("decoded", s);
    } else if (of(i) || i.base64)
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
    if (ut[f.type] === void 0)
      throw new Error("unknown packet type " + f.type);
    if (f.type === ut.BINARY_EVENT || f.type === ut.BINARY_ACK) {
      const R = s + 1;
      for (; i.charAt(++s) !== "-" && s != i.length; )
        ;
      const M = i.substring(R, s);
      if (M != Number(M) || i.charAt(s) !== "-")
        throw new Error("Illegal attachments");
      f.attachments = Number(M);
    }
    if (i.charAt(s + 1) === "/") {
      const R = s + 1;
      for (; ++s && !(i.charAt(s) === "," || s === i.length); )
        ;
      f.nsp = i.substring(R, s);
    } else
      f.nsp = "/";
    const v = i.charAt(s + 1);
    if (v !== "" && Number(v) == v) {
      const R = s + 1;
      for (; ++s; ) {
        const M = i.charAt(s);
        if (M == null || Number(M) != M) {
          --s;
          break;
        }
        if (s === i.length)
          break;
      }
      f.id = Number(i.substring(R, s + 1));
    }
    if (i.charAt(++s)) {
      const R = this.tryParse(i.substr(s));
      if (rf.isPayloadValid(f.type, R))
        f.data = R;
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
      case ut.CONNECT:
        return Td(s);
      case ut.DISCONNECT:
        return s === void 0;
      case ut.CONNECT_ERROR:
        return typeof s == "string" || Td(s);
      case ut.EVENT:
      case ut.BINARY_EVENT:
        return Array.isArray(s) && (typeof s[0] == "number" || typeof s[0] == "string" && $0.indexOf(s[0]) === -1);
      case ut.ACK:
      case ut.BINARY_ACK:
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
function Td(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
const P0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: rf,
  Encoder: F0,
  get PacketType() {
    return ut;
  }
}, Symbol.toStringTag, { value: "Module" }));
function Le(o, i, s) {
  return o.on(i, s), function() {
    o.off(i, s);
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
class Ld extends Yt {
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
      Le(i, "open", this.onopen.bind(this)),
      Le(i, "packet", this.onpacket.bind(this)),
      Le(i, "error", this.onerror.bind(this)),
      Le(i, "close", this.onclose.bind(this))
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
    var f, v, R;
    if (tv.hasOwnProperty(i))
      throw new Error('"' + i.toString() + '" is a reserved event name');
    if (s.unshift(i), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(s), this;
    const M = {
      type: ut.EVENT,
      data: s
    };
    if (M.options = {}, M.options.compress = this.flags.compress !== !1, typeof s[s.length - 1] == "function") {
      const w = this.ids++, U = s.pop();
      this._registerAckCallback(w, U), M.id = w;
    }
    const G = (v = (f = this.io.engine) === null || f === void 0 ? void 0 : f.transport) === null || v === void 0 ? void 0 : v.writable, C = this.connected && !(!((R = this.io.engine) === null || R === void 0) && R._hasPingExpired());
    return this.flags.volatile && !G || (C ? (this.notifyOutgoingListeners(M), this.packet(M)) : this.sendBuffer.push(M)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(i, s) {
    var f;
    const v = (f = this.flags.timeout) !== null && f !== void 0 ? f : this._opts.ackTimeout;
    if (v === void 0) {
      this.acks[i] = s;
      return;
    }
    const R = this.io.setTimeoutFn(() => {
      delete this.acks[i];
      for (let G = 0; G < this.sendBuffer.length; G++)
        this.sendBuffer[G].id === i && this.sendBuffer.splice(G, 1);
      s.call(this, new Error("operation has timed out"));
    }, v), M = (...G) => {
      this.io.clearTimeoutFn(R), s.apply(this, G);
    };
    M.withError = !0, this.acks[i] = M;
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
    return new Promise((f, v) => {
      const R = (M, G) => M ? v(M) : f(G);
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
    const f = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: i,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    i.push((v, ...R) => (this._queue[0], v !== null ? f.tryCount > this._opts.retries && (this._queue.shift(), s && s(v)) : (this._queue.shift(), s && s(null, ...R)), f.pending = !1, this._drainQueue())), this._queue.push(f), this._drainQueue();
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
      type: ut.CONNECT,
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
        case ut.CONNECT:
          i.data && i.data.sid ? this.onconnect(i.data.sid, i.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ut.EVENT:
        case ut.BINARY_EVENT:
          this.onevent(i);
          break;
        case ut.ACK:
        case ut.BINARY_ACK:
          this.onack(i);
          break;
        case ut.DISCONNECT:
          this.ondisconnect();
          break;
        case ut.CONNECT_ERROR:
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
    return function(...v) {
      f || (f = !0, s.packet({
        type: ut.ACK,
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
    return this.connected && this.packet({ type: ut.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function sa(o) {
  o = o || {}, this.ms = o.min || 100, this.max = o.max || 1e4, this.factor = o.factor || 2, this.jitter = o.jitter > 0 && o.jitter <= 1 ? o.jitter : 0, this.attempts = 0;
}
sa.prototype.duration = function() {
  var o = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var i = Math.random(), s = Math.floor(i * this.jitter * o);
    o = (Math.floor(i * 10) & 1) == 0 ? o - s : o + s;
  }
  return Math.min(o, this.max) | 0;
};
sa.prototype.reset = function() {
  this.attempts = 0;
};
sa.prototype.setMin = function(o) {
  this.ms = o;
};
sa.prototype.setMax = function(o) {
  this.max = o;
};
sa.prototype.setJitter = function(o) {
  this.jitter = o;
};
class af extends Yt {
  constructor(i, s) {
    var f;
    super(), this.nsps = {}, this.subs = [], i && typeof i == "object" && (s = i, i = void 0), s = s || {}, s.path = s.path || "/socket.io", this.opts = s, Ri(this, s), this.reconnection(s.reconnection !== !1), this.reconnectionAttempts(s.reconnectionAttempts || 1 / 0), this.reconnectionDelay(s.reconnectionDelay || 1e3), this.reconnectionDelayMax(s.reconnectionDelayMax || 5e3), this.randomizationFactor((f = s.randomizationFactor) !== null && f !== void 0 ? f : 0.5), this.backoff = new sa({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(s.timeout == null ? 2e4 : s.timeout), this._readyState = "closed", this.uri = i;
    const v = s.parser || P0;
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
    this.engine = new Q0(this.uri, this.opts);
    const s = this.engine, f = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const v = Le(s, "open", function() {
      f.onopen(), i && i();
    }), R = (G) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", G), i ? i(G) : this.maybeReconnectOnOpen();
    }, M = Le(s, "error", R);
    if (this._timeout !== !1) {
      const G = this._timeout, C = this.setTimeoutFn(() => {
        v(), R(new Error("timeout")), s.close();
      }, G);
      this.opts.autoUnref && C.unref(), this.subs.push(() => {
        this.clearTimeoutFn(C);
      });
    }
    return this.subs.push(v), this.subs.push(M), this;
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
      Le(i, "ping", this.onping.bind(this)),
      Le(i, "data", this.ondata.bind(this)),
      Le(i, "error", this.onerror.bind(this)),
      Le(i, "close", this.onclose.bind(this)),
      // @ts-ignore
      Le(this.decoder, "decoded", this.ondecoded.bind(this))
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
    Ni(() => {
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
    return f ? this._autoConnect && !f.active && f.connect() : (f = new Ld(this, i, s), this.nsps[i] = f), f;
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
        i.skipReconnect || (this.emitReserved("reconnect_attempt", i.backoff.attempts), !i.skipReconnect && i.open((v) => {
          v ? (i._reconnecting = !1, i.reconnect(), this.emitReserved("reconnect_error", v)) : i.onreconnect();
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
const lu = {};
function zi(o, i) {
  typeof o == "object" && (i = o, o = void 0), i = i || {};
  const s = V0(o, i.path || "/socket.io"), f = s.source, v = s.id, R = s.path, M = lu[v] && R in lu[v].nsps, G = i.forceNew || i["force new connection"] || i.multiplex === !1 || M;
  let C;
  return G ? C = new af(f, i) : (lu[v] || (lu[v] = new af(f, i)), C = lu[v]), s.query && !i.query && (i.query = s.queryKey), C.socket(s.path, i);
}
Object.assign(zi, {
  Manager: af,
  Socket: Ld,
  io: zi,
  connect: zi
});
let bn = null;
function ev(o) {
  return bn ? bn.auth = { token: o } : bn = zi({
    autoConnect: !1,
    transports: ["websocket"],
    auth: { token: o }
  }), bn;
}
function lv() {
  bn && (bn.disconnect(), bn = null);
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
function wl(o, i, s, { timeoutMs: f = 1e4 } = {}) {
  return new Promise((v, R) => {
    let M = !1;
    const G = window.setTimeout(() => {
      M || (M = !0, R(new Error("Request timed out")));
    }, f);
    o.emit(i, s, (C) => {
      if (!M)
        return M = !0, window.clearTimeout(G), C?.ok ? v(C) : R(new Error(C?.error || C?.code || "Request failed"));
    });
  });
}
function Is(o) {
  return String(o || "").trim().toUpperCase();
}
function Ei(o, i) {
  const s = new URLSearchParams(window.location.search);
  o ? s.set("lobby", o) : s.delete("lobby"), i ? s.set("inviteToken", i) : s.delete("inviteToken");
  const f = s.toString();
  window.history.replaceState({}, "", f ? `${window.location.pathname}?${f}` : window.location.pathname);
}
function cv(o) {
  if (!Number.isFinite(o) || o <= 0) return "00:00";
  const i = Math.ceil(o / 1e3), s = Math.floor(i / 60), f = i % 60;
  return `${String(s).padStart(2, "0")}:${String(f).padStart(2, "0")}`;
}
function Ad(o, i) {
  return (i.score || 0) - (o.score || 0);
}
function sv() {
  const o = zd(), i = Q.useRef(null), s = Q.useRef(null), f = Q.useRef(""), v = Q.useRef(null), R = Q.useRef(!1), [M, G] = Q.useState(!0), [C, T] = Q.useState(""), [w, U] = Q.useState(""), [it, zt] = Q.useState(""), [Ft, Gt] = Q.useState(!1), [Ot, le] = Q.useState(null), [Ge, Xt] = Q.useState([]), [wt, _e] = Q.useState(""), [St, K] = Q.useState(iv), [Zt, he] = Q.useState(""), [Be, It] = Q.useState(""), [Nt, Fe] = Q.useState(""), [J, Pt] = Q.useState(null), [A, q] = Q.useState(null), [L, et] = Q.useState("WAITING"), [ot, y] = Q.useState(null), [N, B] = Q.useState("00:00"), [x, Z] = Q.useState(null), [F, I] = Q.useState([]), [Tt, yt] = Q.useState(null), [Xe, Ie] = Q.useState(null), [Qe, Kl] = Q.useState([]), [de, gl] = Q.useState(""), [Jl, Sn] = Q.useState(null), [au, xe] = Q.useState([]);
  Q.useEffect(() => {
    s.current = J;
  }, [J]), Q.useEffect(() => {
    f.current = Be;
  }, [Be]);
  const _n = Q.useMemo(() => {
    const S = /* @__PURE__ */ new Map();
    for (const j of J?.players || [])
      S.set(j.userId, j.displayName);
    return S;
  }, [J]), fa = Q.useCallback((S) => _n.get(S) || `User ${S}`, [_n]), pl = Q.useCallback(() => {
    q(null), et("WAITING"), y(null), Z(null), I([]), yt(null), Ie(null), Kl([]), gl(""), Sn(null), xe([]);
  }, []), uu = Q.useCallback((S) => {
    const j = S || {}, ct = j.phase || "WAITING";
    if (et(ct), Z(j.round || null), Kl(Array.isArray(j.readyUserIds) ? j.readyUserIds : []), y(j.endsAt || j.solution?.endsAt || null), ct === "ANSWERS_REVEAL") {
      I(Array.isArray(j.answers) ? j.answers : []), yt(null);
      return;
    }
    if (ct === "SOLUTION_REVEAL") {
      I(Array.isArray(j.answers) ? j.answers : []), yt(j.solution || null);
      return;
    }
    ct === "WAITING" && (I([]), yt(null));
  }, []), qt = Q.useCallback(async (S) => {
    const j = i.current;
    if (!(!j?.connected || !S))
      try {
        const ct = await wl(j, "round:sync", { lobbyCode: S });
        uu(ct?.state || {});
      } catch (ct) {
        U(ct.message);
      }
  }, [uu]), kl = Q.useCallback(async (S = "") => {
    const j = String(S || "").trim(), ct = new URLSearchParams();
    j && ct.set("q", j);
    const Dt = await ca(`/game/lobbies${ct.toString() ? `?${ct}` : ""}`);
    Xt(Array.isArray(Dt.lobbies) ? Dt.lobbies : []);
  }, []), Wl = Q.useCallback(async (S, j, ct) => {
    const Dt = i.current;
    if (!Dt) return;
    const Ee = {
      lobbyCode: S,
      ...j ? { inviteToken: j } : {},
      ...ct ? { displayName: ct } : {}
    };
    if (!Dt.connected) {
      v.current = Ee, Dt.connect();
      return;
    }
    await wl(Dt, "lobby:join", Ee), await qt(S);
  }, [qt]), $l = Q.useCallback(async (S, j = "") => {
    const ct = Is(S);
    if (!ct) return U("Lobby code is required");
    T("join"), U(""), zt("");
    try {
      const Dt = {};
      Nt.trim() && (Dt.displayName = Nt.trim()), j && (Dt.inviteToken = j);
      const Ee = await ca(`/game/lobbies/${ct}/join`, {
        method: "POST",
        body: JSON.stringify(Dt)
      });
      Pt(Ee.lobby), It(j || ""), pl(), Ei(ct, j || ""), await Wl(ct, j || "", Nt.trim()), zt(`Joined lobby ${ct}`);
    } catch (Dt) {
      U(Dt.message);
    } finally {
      T("");
    }
  }, [pl, Nt, Wl]), En = Q.useCallback(async () => {
    T("create"), U(""), zt("");
    try {
      const S = await ca("/game/lobbies", {
        method: "POST",
        body: JSON.stringify(St)
      });
      Pt(S.lobby), pl(), Ei(S.lobby.code, ""), await Wl(S.lobby.code, "", Nt.trim()), zt(`Created lobby ${S.lobby.code}`);
    } catch (S) {
      U(S.message);
    } finally {
      T("");
    }
  }, [pl, St, Nt, Wl]), Ci = Q.useCallback(async () => {
    if (J?.code) {
      T("leave"), U("");
      try {
        i.current?.connected && await wl(i.current, "lobby:leave", { lobbyCode: J.code });
      } catch (S) {
        U(S.message);
      } finally {
        Pt(null), It(""), Ei("", ""), pl(), T(""), kl(wt).catch(() => {
        });
      }
    }
  }, [pl, kl, J, wt]), iu = Q.useCallback(async () => {
    if (!(!J?.code || !i.current)) {
      T("start"), U("");
      try {
        await wl(i.current, "game:start", { lobbyCode: J.code }, { timeoutMs: 12e4 });
      } catch (S) {
        U(S.message);
      } finally {
        T("");
      }
    }
  }, [J]), Di = Q.useCallback(async () => {
    if (!(!J?.code || !x?.roundId || !i.current)) {
      T("guess"), U("");
      try {
        await wl(i.current, "round:submit_guess", {
          lobbyCode: J.code,
          roundId: x.roundId,
          guessText: de.trim(),
          guessAnimeId: Number.isInteger(Jl) ? Jl : null
        }), zt("Guess saved");
      } catch (S) {
        U(S.message);
      } finally {
        T("");
      }
    }
  }, [Jl, de, J, x]), Mi = Q.useCallback(async () => {
    if (!(!J?.code || !i.current || !Ot)) {
      T("ready"), U("");
      try {
        const S = Qe.includes(Ot.id);
        await wl(i.current, "round:set_ready", { lobbyCode: J.code, ready: !S });
      } catch (S) {
        U(S.message);
      } finally {
        T("");
      }
    }
  }, [J, Qe, Ot]), Fl = Q.useCallback(async () => {
    if (J?.code) {
      T("invite"), U(""), zt("");
      try {
        const S = await ca(`/game/lobbies/${J.code}/invite`);
        S.inviteToken && (It(S.inviteToken), Ei(J.code, S.inviteToken)), navigator.clipboard?.writeText ? (await navigator.clipboard.writeText(S.inviteUrl), zt("Invite link copied")) : zt(S.inviteUrl);
      } catch (S) {
        U(S.message);
      } finally {
        T("");
      }
    }
  }, [J]);
  Q.useEffect(() => {
    if (!o) return pd();
    const S = ev(o);
    i.current = S;
    const j = async () => {
      Gt(!0), U("");
      try {
        v.current ? (await wl(S, "lobby:join", v.current), await qt(v.current.lobbyCode), v.current = null) : s.current?.code && (await wl(S, "lobby:join", {
          lobbyCode: s.current.code,
          ...f.current ? { inviteToken: f.current } : {}
        }), await qt(s.current.code));
      } catch (pt) {
        U(pt.message);
      }
    }, ct = () => Gt(!1), Dt = (pt) => U(pt?.message || "Realtime error"), Ee = ({ lobby: pt }) => pt && Pt(pt), Il = ({ sessionId: pt, config: tn }) => {
      q({ sessionId: pt, ...tn || {} }), Ie(null), et("PENDING"), s.current?.code && qt(s.current.code).catch(() => {
      });
    }, we = (pt) => {
      et("GUESSING"), y(pt?.endsAt || null), Z(pt || null), I([]), yt(null), Ie(null), Kl([]), gl(""), Sn(null), xe([]);
    }, Pl = (pt) => {
      et("ANSWERS_REVEAL"), y(pt?.endsAt || null), I(Array.isArray(pt?.answers) ? pt.answers : []);
    }, bl = (pt) => {
      et("SOLUTION_REVEAL"), y(pt?.endsAt || null), yt(pt || null);
    }, cu = (pt) => {
      et("FINISHED"), y(null), Ie(pt || null);
    }, oa = (pt) => {
      Kl(Array.isArray(pt?.readyUserIds) ? pt.readyUserIds : []);
    };
    return S.on("connect", j), S.on("disconnect", ct), S.on("error", Dt), S.on("lobby:state", Ee), S.on("game:started", Il), S.on("round:started", we), S.on("round:answers_reveal", Pl), S.on("round:solution", bl), S.on("game:finished", cu), S.on("round:ready_state", oa), S.connect(), () => {
      S.off("connect", j), S.off("disconnect", ct), S.off("error", Dt), S.off("lobby:state", Ee), S.off("game:started", Il), S.off("round:started", we), S.off("round:answers_reveal", Pl), S.off("round:solution", bl), S.off("game:finished", cu), S.off("round:ready_state", oa), lv();
    };
  }, [qt, o]), Q.useEffect(() => {
    if (!o) return;
    let S = !0;
    return (async () => {
      try {
        const j = await ca("/auth/me");
        if (!S) return;
        le(j), await kl("");
      } catch {
        pd();
        return;
      } finally {
        S && G(!1);
      }
    })(), () => {
      S = !1;
    };
  }, [kl, o]), Q.useEffect(() => {
    if (M || !Ot || R.current) return;
    R.current = !0;
    const S = new URLSearchParams(window.location.search), j = Is(S.get("lobby")), ct = S.get("inviteToken") || "";
    j && (he(j), It(ct), $l(j, ct).catch(() => {
    }));
  }, [$l, M, Ot]), Q.useEffect(() => {
    if (!ot) return B("00:00");
    const S = () => B(cv(new Date(ot).getTime() - Date.now()));
    S();
    const j = window.setInterval(S, 250);
    return () => window.clearInterval(j);
  }, [ot]), Q.useEffect(() => {
    if (L !== "GUESSING") return xe([]);
    const S = de.trim();
    if (S.length < 2) return xe([]);
    const j = window.setTimeout(async () => {
      try {
        const ct = await ca("/game/search", {
          method: "POST",
          body: JSON.stringify({ query: S, limit: 8 })
        });
        xe(Array.isArray(ct.results) ? ct.results : []);
      } catch {
        xe([]);
      }
    }, 300);
    return () => window.clearTimeout(j);
  }, [de, L]);
  const ne = Q.useMemo(() => !!(J && Ot && J.host?.id === Ot.id), [J, Ot]), Ve = Q.useMemo(() => !!(Ot && Qe.includes(Ot.id)), [Qe, Ot]), te = Q.useMemo(() => L === "FINISHED" ? (Xe?.finalScores || []).slice().sort(Ad) : L === "SOLUTION_REVEAL" ? (Tt?.scores || []).slice().sort(Ad) : [], [Xe, L, Tt]);
  return M ? /* @__PURE__ */ D.jsx("section", { className: "gmq-shell", children: "Loading game..." }) : /* @__PURE__ */ D.jsxs("section", { className: "gmq-shell", children: [
    /* @__PURE__ */ D.jsxs("header", { className: "gmq-header", children: [
      /* @__PURE__ */ D.jsxs("div", { children: [
        /* @__PURE__ */ D.jsx("h1", { children: "Anime Music Quiz" }),
        /* @__PURE__ */ D.jsxs("p", { className: "gmq-muted", children: [
          "Socket: ",
          Ft ? "Connected" : "Disconnected",
          J ? ` | Lobby ${J.code}` : "",
          A?.sessionId ? ` | Session ${A.sessionId}` : ""
        ] })
      ] }),
      J ? /* @__PURE__ */ D.jsxs("div", { className: "gmq-actions", children: [
        /* @__PURE__ */ D.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: Fl, disabled: C === "invite", children: "Copy Invite" }),
        /* @__PURE__ */ D.jsx("button", { type: "button", className: "gmq-btn gmq-btn-danger", onClick: Ci, disabled: C === "leave", children: "Leave" })
      ] }) : null
    ] }),
    w ? /* @__PURE__ */ D.jsx("div", { className: "gmq-alert gmq-alert-error", children: w }) : null,
    it ? /* @__PURE__ */ D.jsx("div", { className: "gmq-alert gmq-alert-info", children: it }) : null,
    J ? /* @__PURE__ */ D.jsxs("div", { className: "gmq-grid", children: [
      /* @__PURE__ */ D.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ D.jsxs("h2", { children: [
          "Lobby ",
          J.code
        ] }),
        /* @__PURE__ */ D.jsxs("p", { className: "gmq-muted", children: [
          J.name || "Untitled",
          " | ",
          J.playerCount,
          "/",
          J.maxPlayers,
          " players"
        ] }),
        /* @__PURE__ */ D.jsx("ul", { className: "gmq-player-list", children: (J.players || []).map((S) => /* @__PURE__ */ D.jsxs("li", { children: [
          /* @__PURE__ */ D.jsxs("span", { children: [
            S.displayName,
            S.userId === J.host?.id ? " (Host)" : "",
            S.isConnected ? "" : " (offline)"
          ] }),
          L === "GUESSING" ? /* @__PURE__ */ D.jsx("strong", { children: Qe.includes(S.userId) ? "Ready" : "Thinking" }) : null
        ] }, S.userId)) }),
        J.status === "WAITING" ? ne ? /* @__PURE__ */ D.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: iu, disabled: C === "start", children: "Start Game" }) : /* @__PURE__ */ D.jsx("p", { className: "gmq-muted", children: "Waiting for host to start." }) : null
      ] }),
      /* @__PURE__ */ D.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ D.jsx("h2", { children: "Round" }),
        /* @__PURE__ */ D.jsxs("p", { className: "gmq-round-phase", children: [
          L,
          " | ",
          N
        ] }),
        L === "GUESSING" && x ? /* @__PURE__ */ D.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ D.jsxs("p", { children: [
            "Round ",
            x.index,
            "/",
            x.totalRounds
          ] }),
          /* @__PURE__ */ D.jsx("input", { value: de, onChange: (S) => {
            gl(S.target.value), Sn(null);
          }, placeholder: "Type anime name" }),
          /* @__PURE__ */ D.jsx("ul", { className: "gmq-search-results", children: au.map((S) => /* @__PURE__ */ D.jsx("li", { children: /* @__PURE__ */ D.jsx("button", { type: "button", onClick: () => {
            gl(S.title || ""), Sn(Number.isInteger(S.id) ? S.id : null), xe([]);
          }, children: S.title }) }, `${S.id}-${S.title}`)) }),
          /* @__PURE__ */ D.jsxs("div", { className: "gmq-actions", children: [
            /* @__PURE__ */ D.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: Di, disabled: C === "guess", children: "Submit Guess" }),
            /* @__PURE__ */ D.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: Mi, disabled: C === "ready", children: Ve ? "Unskip" : "Skip / Ready" })
          ] }),
          /* @__PURE__ */ D.jsxs("p", { className: "gmq-muted", children: [
            Qe.length,
            " ready"
          ] })
        ] }) : null,
        L === "ANSWERS_REVEAL" ? /* @__PURE__ */ D.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ D.jsx("h3", { children: "Answers" }),
          /* @__PURE__ */ D.jsx("ul", { className: "gmq-answer-list", children: F.map((S) => /* @__PURE__ */ D.jsxs("li", { children: [
            /* @__PURE__ */ D.jsx("span", { children: fa(S.userId) }),
            /* @__PURE__ */ D.jsx("span", { children: S.guessText || "(blank)" }),
            /* @__PURE__ */ D.jsx("strong", { children: S.isCorrect ? "Correct" : "Wrong" })
          ] }, `${S.userId}-${S.guessText || "blank"}`)) })
        ] }) : null,
        L === "SOLUTION_REVEAL" && Tt ? /* @__PURE__ */ D.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ D.jsx("h3", { children: "Solution" }),
          /* @__PURE__ */ D.jsxs("p", { children: [
            Tt.correctAnime?.animeTitle,
            " (",
            Tt.correctAnime?.themeType,
            ")"
          ] }),
          /* @__PURE__ */ D.jsx("p", { className: "gmq-muted", children: Tt.correctAnime?.themeTitle || "" }),
          Tt.video ? /* @__PURE__ */ D.jsx("a", { href: Tt.video, target: "_blank", rel: "noreferrer", children: "Open video source" }) : null
        ] }) : null,
        L === "FINISHED" && Xe ? /* @__PURE__ */ D.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ D.jsx("h3", { children: "Final Result" }),
          /* @__PURE__ */ D.jsxs("p", { children: [
            "Winner: ",
            Xe.winner?.displayName || "Tie"
          ] })
        ] }) : null,
        te.length ? /* @__PURE__ */ D.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ D.jsx("h3", { children: "Scoreboard" }),
          /* @__PURE__ */ D.jsx("ul", { className: "gmq-score-list", children: te.map((S) => /* @__PURE__ */ D.jsxs("li", { className: "gmq-score-row", children: [
            /* @__PURE__ */ D.jsx("span", { children: S.displayName }),
            /* @__PURE__ */ D.jsx("strong", { children: S.score })
          ] }, S.userId)) })
        ] }) : null
      ] })
    ] }) : /* @__PURE__ */ D.jsxs("div", { className: "gmq-grid", children: [
      /* @__PURE__ */ D.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ D.jsx("h2", { children: "Create Lobby" }),
        /* @__PURE__ */ D.jsx("label", { children: "Name" }),
        /* @__PURE__ */ D.jsx("input", { value: St.name, onChange: (S) => K((j) => ({ ...j, name: S.target.value })), placeholder: "Optional lobby name" }),
        /* @__PURE__ */ D.jsxs("label", { className: "gmq-checkbox", children: [
          /* @__PURE__ */ D.jsx("input", { type: "checkbox", checked: St.isPrivate, onChange: (S) => K((j) => ({ ...j, isPrivate: S.target.checked })) }),
          " Private lobby"
        ] }),
        /* @__PURE__ */ D.jsxs("div", { className: "gmq-inline", children: [
          /* @__PURE__ */ D.jsx("input", { type: "number", min: "1", max: "50", value: St.roundCount, onChange: (S) => K((j) => ({ ...j, roundCount: Number(S.target.value || 10) })) }),
          /* @__PURE__ */ D.jsx("input", { type: "number", min: "5", max: "120", value: St.guessSeconds, onChange: (S) => K((j) => ({ ...j, guessSeconds: Number(S.target.value || 20) })) }),
          /* @__PURE__ */ D.jsx("input", { type: "number", min: "3", max: "60", value: St.sampleSeconds, onChange: (S) => K((j) => ({ ...j, sampleSeconds: Number(S.target.value || 10) })) })
        ] }),
        /* @__PURE__ */ D.jsxs("div", { className: "gmq-inline", children: [
          /* @__PURE__ */ D.jsx("select", { value: St.sourceMode, onChange: (S) => K((j) => ({ ...j, sourceMode: S.target.value })), children: nv.map((S) => /* @__PURE__ */ D.jsx("option", { value: S, children: S }, S)) }),
          /* @__PURE__ */ D.jsx("select", { value: St.selectionMode, onChange: (S) => K((j) => ({ ...j, selectionMode: S.target.value })), children: av.map((S) => /* @__PURE__ */ D.jsx("option", { value: S, children: S }, S)) }),
          /* @__PURE__ */ D.jsx("select", { value: St.themeMode, onChange: (S) => K((j) => ({ ...j, themeMode: S.target.value })), children: uv.map((S) => /* @__PURE__ */ D.jsx("option", { value: S, children: S }, S)) })
        ] }),
        /* @__PURE__ */ D.jsx("label", { children: "Display Name" }),
        /* @__PURE__ */ D.jsx("input", { value: Nt, onChange: (S) => Fe(S.target.value), placeholder: Ot?.nickname || Ot?.username || "Player" }),
        /* @__PURE__ */ D.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: En, disabled: C === "create", children: "Create Lobby" })
      ] }),
      /* @__PURE__ */ D.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ D.jsx("h2", { children: "Join Lobby" }),
        /* @__PURE__ */ D.jsx("label", { children: "Lobby Code" }),
        /* @__PURE__ */ D.jsx("input", { value: Zt, onChange: (S) => he(Is(S.target.value)), placeholder: "ABC123" }),
        /* @__PURE__ */ D.jsx("label", { children: "Invite Token (private lobby)" }),
        /* @__PURE__ */ D.jsx("input", { value: Be, onChange: (S) => It(S.target.value.trim()), placeholder: "Paste invite token" }),
        /* @__PURE__ */ D.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: () => $l(Zt, Be), disabled: C === "join", children: "Join Lobby" })
      ] }),
      /* @__PURE__ */ D.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ D.jsx("h2", { children: "Joinable Lobbies" }),
        /* @__PURE__ */ D.jsxs("div", { className: "gmq-inline", children: [
          /* @__PURE__ */ D.jsx("input", { value: wt, onChange: (S) => _e(S.target.value), placeholder: "Search by code/name" }),
          /* @__PURE__ */ D.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => kl(wt), children: "Refresh" })
        ] }),
        /* @__PURE__ */ D.jsx("ul", { className: "gmq-lobby-list", children: Ge.map((S) => /* @__PURE__ */ D.jsxs("li", { className: "gmq-lobby-item", children: [
          /* @__PURE__ */ D.jsxs("div", { children: [
            /* @__PURE__ */ D.jsx("div", { className: "gmq-lobby-title", children: S.name || S.code }),
            /* @__PURE__ */ D.jsxs("div", { className: "gmq-muted", children: [
              S.code,
              " | ",
              S.playerCount,
              "/",
              S.maxPlayers
            ] })
          ] }),
          /* @__PURE__ */ D.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => $l(S.code, ""), children: "Join" })
        ] }, S.code)) })
      ] })
    ] })
  ] });
}
const Od = document.getElementById("game-root");
Od && c0.createRoot(Od).render(/* @__PURE__ */ D.jsx(sv, {}));
