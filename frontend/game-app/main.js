var zr = { exports: {} }, ii = {};
var Th;
function l0() {
  if (Th) return ii;
  Th = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(r, g, U) {
    var j = null;
    if (U !== void 0 && (j = "" + U), g.key !== void 0 && (j = "" + g.key), "key" in g) {
      U = {};
      for (var G in g)
        G !== "key" && (U[G] = g[G]);
    } else U = g;
    return g = U.ref, {
      $$typeof: f,
      type: r,
      key: j,
      ref: g !== void 0 ? g : null,
      props: U
    };
  }
  return ii.Fragment = i, ii.jsx = s, ii.jsxs = s, ii;
}
var Nh;
function n0() {
  return Nh || (Nh = 1, zr.exports = l0()), zr.exports;
}
var A = n0(), Mr = { exports: {} }, W = {};
var Oh;
function a0() {
  if (Oh) return W;
  Oh = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), g = /* @__PURE__ */ Symbol.for("react.profiler"), U = /* @__PURE__ */ Symbol.for("react.consumer"), j = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), D = /* @__PURE__ */ Symbol.for("react.memo"), k = /* @__PURE__ */ Symbol.for("react.lazy"), Y = /* @__PURE__ */ Symbol.for("react.activity"), ht = Symbol.iterator;
  function Ht(y) {
    return y === null || typeof y != "object" ? null : (y = ht && y[ht] || y["@@iterator"], typeof y == "function" ? y : null);
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
  }, bt = Object.assign, Se = {};
  function It(y, R, H) {
    this.props = y, this.context = R, this.refs = Se, this.updater = H || Ft;
  }
  It.prototype.isReactComponent = {}, It.prototype.setState = function(y, R) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, R, "setState");
  }, It.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function ye() {
  }
  ye.prototype = It.prototype;
  function wt(y, R, H) {
    this.props = y, this.context = R, this.refs = Se, this.updater = H || Ft;
  }
  var ae = wt.prototype = new ye();
  ae.constructor = wt, bt(ae, It.prototype), ae.isPureReactComponent = !0;
  var ue = Array.isArray;
  function Qt() {
  }
  var I = { H: null, A: null, T: null, S: null }, Pt = Object.prototype.hasOwnProperty;
  function Vt(y, R, H) {
    var L = H.ref;
    return {
      $$typeof: f,
      type: y,
      key: R,
      ref: L !== void 0 ? L : null,
      props: H
    };
  }
  function ke(y, R) {
    return Vt(y.type, R, y.props);
  }
  function re(y) {
    return typeof y == "object" && y !== null && y.$$typeof === f;
  }
  function ie(y) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(H) {
      return R[H];
    });
  }
  var ql = /\/+/g;
  function fe(y, R) {
    return typeof y == "object" && y !== null && y.key != null ? ie("" + y.key) : R.toString(36);
  }
  function zt(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(Qt, Qt) : (y.status = "pending", y.then(
          function(R) {
            y.status === "pending" && (y.status = "fulfilled", y.value = R);
          },
          function(R) {
            y.status === "pending" && (y.status = "rejected", y.reason = R);
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
  function O(y, R, H, L, J) {
    var $ = typeof y;
    ($ === "undefined" || $ === "boolean") && (y = null);
    var mt = !1;
    if (y === null) mt = !0;
    else
      switch ($) {
        case "bigint":
        case "string":
        case "number":
          mt = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case f:
            case i:
              mt = !0;
              break;
            case k:
              return mt = y._init, O(
                mt(y._payload),
                R,
                H,
                L,
                J
              );
          }
      }
    if (mt)
      return J = J(y), mt = L === "" ? "." + fe(y, 0) : L, ue(J) ? (H = "", mt != null && (H = mt.replace(ql, "$&/") + "/"), O(J, R, H, "", function(ln) {
        return ln;
      })) : J != null && (re(J) && (J = ke(
        J,
        H + (J.key == null || y && y.key === J.key ? "" : ("" + J.key).replace(
          ql,
          "$&/"
        ) + "/") + mt
      )), R.push(J)), 1;
    mt = 0;
    var Mt = L === "" ? "." : L + ":";
    if (ue(y))
      for (var pt = 0; pt < y.length; pt++)
        L = y[pt], $ = Mt + fe(L, pt), mt += O(
          L,
          R,
          H,
          $,
          J
        );
    else if (pt = Ht(y), typeof pt == "function")
      for (y = pt.call(y), pt = 0; !(L = y.next()).done; )
        L = L.value, $ = Mt + fe(L, pt++), mt += O(
          L,
          R,
          H,
          $,
          J
        );
    else if ($ === "object") {
      if (typeof y.then == "function")
        return O(
          zt(y),
          R,
          H,
          L,
          J
        );
      throw R = String(y), Error(
        "Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return mt;
  }
  function q(y, R, H) {
    if (y == null) return y;
    var L = [], J = 0;
    return O(y, L, "", "", function($) {
      return R.call(H, $, J++);
    }), L;
  }
  function Z(y) {
    if (y._status === -1) {
      var R = y._result;
      R = R(), R.then(
        function(H) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = H);
        },
        function(H) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = H);
        }
      ), y._status === -1 && (y._status = 0, y._result = R);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var at = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var R = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(R)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, St = {
    map: q,
    forEach: function(y, R, H) {
      q(
        y,
        function() {
          R.apply(this, arguments);
        },
        H
      );
    },
    count: function(y) {
      var R = 0;
      return q(y, function() {
        R++;
      }), R;
    },
    toArray: function(y) {
      return q(y, function(R) {
        return R;
      }) || [];
    },
    only: function(y) {
      if (!re(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return W.Activity = Y, W.Children = St, W.Component = It, W.Fragment = s, W.Profiler = g, W.PureComponent = wt, W.StrictMode = r, W.Suspense = x, W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, W.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return I.H.useMemoCache(y);
    }
  }, W.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, W.cacheSignal = function() {
    return null;
  }, W.cloneElement = function(y, R, H) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var L = bt({}, y.props), J = y.key;
    if (R != null)
      for ($ in R.key !== void 0 && (J = "" + R.key), R)
        !Pt.call(R, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && R.ref === void 0 || (L[$] = R[$]);
    var $ = arguments.length - 2;
    if ($ === 1) L.children = H;
    else if (1 < $) {
      for (var mt = Array($), Mt = 0; Mt < $; Mt++)
        mt[Mt] = arguments[Mt + 2];
      L.children = mt;
    }
    return Vt(y.type, J, L);
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
  }, W.createElement = function(y, R, H) {
    var L, J = {}, $ = null;
    if (R != null)
      for (L in R.key !== void 0 && ($ = "" + R.key), R)
        Pt.call(R, L) && L !== "key" && L !== "__self" && L !== "__source" && (J[L] = R[L]);
    var mt = arguments.length - 2;
    if (mt === 1) J.children = H;
    else if (1 < mt) {
      for (var Mt = Array(mt), pt = 0; pt < mt; pt++)
        Mt[pt] = arguments[pt + 2];
      J.children = Mt;
    }
    if (y && y.defaultProps)
      for (L in mt = y.defaultProps, mt)
        J[L] === void 0 && (J[L] = mt[L]);
    return Vt(y, $, J);
  }, W.createRef = function() {
    return { current: null };
  }, W.forwardRef = function(y) {
    return { $$typeof: G, render: y };
  }, W.isValidElement = re, W.lazy = function(y) {
    return {
      $$typeof: k,
      _payload: { _status: -1, _result: y },
      _init: Z
    };
  }, W.memo = function(y, R) {
    return {
      $$typeof: D,
      type: y,
      compare: R === void 0 ? null : R
    };
  }, W.startTransition = function(y) {
    var R = I.T, H = {};
    I.T = H;
    try {
      var L = y(), J = I.S;
      J !== null && J(H, L), typeof L == "object" && L !== null && typeof L.then == "function" && L.then(Qt, at);
    } catch ($) {
      at($);
    } finally {
      R !== null && H.types !== null && (R.types = H.types), I.T = R;
    }
  }, W.unstable_useCacheRefresh = function() {
    return I.H.useCacheRefresh();
  }, W.use = function(y) {
    return I.H.use(y);
  }, W.useActionState = function(y, R, H) {
    return I.H.useActionState(y, R, H);
  }, W.useCallback = function(y, R) {
    return I.H.useCallback(y, R);
  }, W.useContext = function(y) {
    return I.H.useContext(y);
  }, W.useDebugValue = function() {
  }, W.useDeferredValue = function(y, R) {
    return I.H.useDeferredValue(y, R);
  }, W.useEffect = function(y, R) {
    return I.H.useEffect(y, R);
  }, W.useEffectEvent = function(y) {
    return I.H.useEffectEvent(y);
  }, W.useId = function() {
    return I.H.useId();
  }, W.useImperativeHandle = function(y, R, H) {
    return I.H.useImperativeHandle(y, R, H);
  }, W.useInsertionEffect = function(y, R) {
    return I.H.useInsertionEffect(y, R);
  }, W.useLayoutEffect = function(y, R) {
    return I.H.useLayoutEffect(y, R);
  }, W.useMemo = function(y, R) {
    return I.H.useMemo(y, R);
  }, W.useOptimistic = function(y, R) {
    return I.H.useOptimistic(y, R);
  }, W.useReducer = function(y, R, H) {
    return I.H.useReducer(y, R, H);
  }, W.useRef = function(y) {
    return I.H.useRef(y);
  }, W.useState = function(y) {
    return I.H.useState(y);
  }, W.useSyncExternalStore = function(y, R, H) {
    return I.H.useSyncExternalStore(
      y,
      R,
      H
    );
  }, W.useTransition = function() {
    return I.H.useTransition();
  }, W.version = "19.2.4", W;
}
var Rh;
function Qr() {
  return Rh || (Rh = 1, Mr.exports = a0()), Mr.exports;
}
var T = Qr(), Cr = { exports: {} }, ci = {}, Dr = { exports: {} }, Ur = {};
var zh;
function u0() {
  return zh || (zh = 1, (function(f) {
    function i(O, q) {
      var Z = O.length;
      O.push(q);
      t: for (; 0 < Z; ) {
        var at = Z - 1 >>> 1, St = O[at];
        if (0 < g(St, q))
          O[at] = q, O[Z] = St, Z = at;
        else break t;
      }
    }
    function s(O) {
      return O.length === 0 ? null : O[0];
    }
    function r(O) {
      if (O.length === 0) return null;
      var q = O[0], Z = O.pop();
      if (Z !== q) {
        O[0] = Z;
        t: for (var at = 0, St = O.length, y = St >>> 1; at < y; ) {
          var R = 2 * (at + 1) - 1, H = O[R], L = R + 1, J = O[L];
          if (0 > g(H, Z))
            L < St && 0 > g(J, H) ? (O[at] = J, O[L] = Z, at = L) : (O[at] = H, O[R] = Z, at = R);
          else if (L < St && 0 > g(J, Z))
            O[at] = J, O[L] = Z, at = L;
          else break t;
        }
      }
      return q;
    }
    function g(O, q) {
      var Z = O.sortIndex - q.sortIndex;
      return Z !== 0 ? Z : O.id - q.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var U = performance;
      f.unstable_now = function() {
        return U.now();
      };
    } else {
      var j = Date, G = j.now();
      f.unstable_now = function() {
        return j.now() - G;
      };
    }
    var x = [], D = [], k = 1, Y = null, ht = 3, Ht = !1, Ft = !1, bt = !1, Se = !1, It = typeof setTimeout == "function" ? setTimeout : null, ye = typeof clearTimeout == "function" ? clearTimeout : null, wt = typeof setImmediate < "u" ? setImmediate : null;
    function ae(O) {
      for (var q = s(D); q !== null; ) {
        if (q.callback === null) r(D);
        else if (q.startTime <= O)
          r(D), q.sortIndex = q.expirationTime, i(x, q);
        else break;
        q = s(D);
      }
    }
    function ue(O) {
      if (bt = !1, ae(O), !Ft)
        if (s(x) !== null)
          Ft = !0, Qt || (Qt = !0, ie());
        else {
          var q = s(D);
          q !== null && zt(ue, q.startTime - O);
        }
    }
    var Qt = !1, I = -1, Pt = 5, Vt = -1;
    function ke() {
      return Se ? !0 : !(f.unstable_now() - Vt < Pt);
    }
    function re() {
      if (Se = !1, Qt) {
        var O = f.unstable_now();
        Vt = O;
        var q = !0;
        try {
          t: {
            Ft = !1, bt && (bt = !1, ye(I), I = -1), Ht = !0;
            var Z = ht;
            try {
              e: {
                for (ae(O), Y = s(x); Y !== null && !(Y.expirationTime > O && ke()); ) {
                  var at = Y.callback;
                  if (typeof at == "function") {
                    Y.callback = null, ht = Y.priorityLevel;
                    var St = at(
                      Y.expirationTime <= O
                    );
                    if (O = f.unstable_now(), typeof St == "function") {
                      Y.callback = St, ae(O), q = !0;
                      break e;
                    }
                    Y === s(x) && r(x), ae(O);
                  } else r(x);
                  Y = s(x);
                }
                if (Y !== null) q = !0;
                else {
                  var y = s(D);
                  y !== null && zt(
                    ue,
                    y.startTime - O
                  ), q = !1;
                }
              }
              break t;
            } finally {
              Y = null, ht = Z, Ht = !1;
            }
            q = void 0;
          }
        } finally {
          q ? ie() : Qt = !1;
        }
      }
    }
    var ie;
    if (typeof wt == "function")
      ie = function() {
        wt(re);
      };
    else if (typeof MessageChannel < "u") {
      var ql = new MessageChannel(), fe = ql.port2;
      ql.port1.onmessage = re, ie = function() {
        fe.postMessage(null);
      };
    } else
      ie = function() {
        It(re, 0);
      };
    function zt(O, q) {
      I = It(function() {
        O(f.unstable_now());
      }, q);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, f.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Pt = 0 < O ? Math.floor(1e3 / O) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return ht;
    }, f.unstable_next = function(O) {
      switch (ht) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = ht;
      }
      var Z = ht;
      ht = q;
      try {
        return O();
      } finally {
        ht = Z;
      }
    }, f.unstable_requestPaint = function() {
      Se = !0;
    }, f.unstable_runWithPriority = function(O, q) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var Z = ht;
      ht = O;
      try {
        return q();
      } finally {
        ht = Z;
      }
    }, f.unstable_scheduleCallback = function(O, q, Z) {
      var at = f.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? at + Z : at) : Z = at, O) {
        case 1:
          var St = -1;
          break;
        case 2:
          St = 250;
          break;
        case 5:
          St = 1073741823;
          break;
        case 4:
          St = 1e4;
          break;
        default:
          St = 5e3;
      }
      return St = Z + St, O = {
        id: k++,
        callback: q,
        priorityLevel: O,
        startTime: Z,
        expirationTime: St,
        sortIndex: -1
      }, Z > at ? (O.sortIndex = Z, i(D, O), s(x) === null && O === s(D) && (bt ? (ye(I), I = -1) : bt = !0, zt(ue, Z - at))) : (O.sortIndex = St, i(x, O), Ft || Ht || (Ft = !0, Qt || (Qt = !0, ie()))), O;
    }, f.unstable_shouldYield = ke, f.unstable_wrapCallback = function(O) {
      var q = ht;
      return function() {
        var Z = ht;
        ht = q;
        try {
          return O.apply(this, arguments);
        } finally {
          ht = Z;
        }
      };
    };
  })(Ur)), Ur;
}
var Mh;
function i0() {
  return Mh || (Mh = 1, Dr.exports = u0()), Dr.exports;
}
var qr = { exports: {} }, be = {};
var Ch;
function c0() {
  if (Ch) return be;
  Ch = 1;
  var f = Qr();
  function i(x) {
    var D = "https://react.dev/errors/" + x;
    if (1 < arguments.length) {
      D += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var k = 2; k < arguments.length; k++)
        D += "&args[]=" + encodeURIComponent(arguments[k]);
    }
    return "Minified React error #" + x + "; visit " + D + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, g = /* @__PURE__ */ Symbol.for("react.portal");
  function U(x, D, k) {
    var Y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: g,
      key: Y == null ? null : "" + Y,
      children: x,
      containerInfo: D,
      implementation: k
    };
  }
  var j = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function G(x, D) {
    if (x === "font") return "";
    if (typeof D == "string")
      return D === "use-credentials" ? D : "";
  }
  return be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, be.createPortal = function(x, D) {
    var k = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!D || D.nodeType !== 1 && D.nodeType !== 9 && D.nodeType !== 11)
      throw Error(i(299));
    return U(x, D, null, k);
  }, be.flushSync = function(x) {
    var D = j.T, k = r.p;
    try {
      if (j.T = null, r.p = 2, x) return x();
    } finally {
      j.T = D, r.p = k, r.d.f();
    }
  }, be.preconnect = function(x, D) {
    typeof x == "string" && (D ? (D = D.crossOrigin, D = typeof D == "string" ? D === "use-credentials" ? D : "" : void 0) : D = null, r.d.C(x, D));
  }, be.prefetchDNS = function(x) {
    typeof x == "string" && r.d.D(x);
  }, be.preinit = function(x, D) {
    if (typeof x == "string" && D && typeof D.as == "string") {
      var k = D.as, Y = G(k, D.crossOrigin), ht = typeof D.integrity == "string" ? D.integrity : void 0, Ht = typeof D.fetchPriority == "string" ? D.fetchPriority : void 0;
      k === "style" ? r.d.S(
        x,
        typeof D.precedence == "string" ? D.precedence : void 0,
        {
          crossOrigin: Y,
          integrity: ht,
          fetchPriority: Ht
        }
      ) : k === "script" && r.d.X(x, {
        crossOrigin: Y,
        integrity: ht,
        fetchPriority: Ht,
        nonce: typeof D.nonce == "string" ? D.nonce : void 0
      });
    }
  }, be.preinitModule = function(x, D) {
    if (typeof x == "string")
      if (typeof D == "object" && D !== null) {
        if (D.as == null || D.as === "script") {
          var k = G(
            D.as,
            D.crossOrigin
          );
          r.d.M(x, {
            crossOrigin: k,
            integrity: typeof D.integrity == "string" ? D.integrity : void 0,
            nonce: typeof D.nonce == "string" ? D.nonce : void 0
          });
        }
      } else D == null && r.d.M(x);
  }, be.preload = function(x, D) {
    if (typeof x == "string" && typeof D == "object" && D !== null && typeof D.as == "string") {
      var k = D.as, Y = G(k, D.crossOrigin);
      r.d.L(x, k, {
        crossOrigin: Y,
        integrity: typeof D.integrity == "string" ? D.integrity : void 0,
        nonce: typeof D.nonce == "string" ? D.nonce : void 0,
        type: typeof D.type == "string" ? D.type : void 0,
        fetchPriority: typeof D.fetchPriority == "string" ? D.fetchPriority : void 0,
        referrerPolicy: typeof D.referrerPolicy == "string" ? D.referrerPolicy : void 0,
        imageSrcSet: typeof D.imageSrcSet == "string" ? D.imageSrcSet : void 0,
        imageSizes: typeof D.imageSizes == "string" ? D.imageSizes : void 0,
        media: typeof D.media == "string" ? D.media : void 0
      });
    }
  }, be.preloadModule = function(x, D) {
    if (typeof x == "string")
      if (D) {
        var k = G(D.as, D.crossOrigin);
        r.d.m(x, {
          as: typeof D.as == "string" && D.as !== "script" ? D.as : void 0,
          crossOrigin: k,
          integrity: typeof D.integrity == "string" ? D.integrity : void 0
        });
      } else r.d.m(x);
  }, be.requestFormReset = function(x) {
    r.d.r(x);
  }, be.unstable_batchedUpdates = function(x, D) {
    return x(D);
  }, be.useFormState = function(x, D, k) {
    return j.H.useFormState(x, D, k);
  }, be.useFormStatus = function() {
    return j.H.useHostTransitionStatus();
  }, be.version = "19.2.4", be;
}
var Dh;
function s0() {
  if (Dh) return qr.exports;
  Dh = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (i) {
        console.error(i);
      }
  }
  return f(), qr.exports = c0(), qr.exports;
}
var Uh;
function r0() {
  if (Uh) return ci;
  Uh = 1;
  var f = i0(), i = Qr(), s = s0();
  function r(t) {
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
  function G(t) {
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
  function D(t) {
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
  var Y = Object.assign, ht = /* @__PURE__ */ Symbol.for("react.element"), Ht = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ft = /* @__PURE__ */ Symbol.for("react.portal"), bt = /* @__PURE__ */ Symbol.for("react.fragment"), Se = /* @__PURE__ */ Symbol.for("react.strict_mode"), It = /* @__PURE__ */ Symbol.for("react.profiler"), ye = /* @__PURE__ */ Symbol.for("react.consumer"), wt = /* @__PURE__ */ Symbol.for("react.context"), ae = /* @__PURE__ */ Symbol.for("react.forward_ref"), ue = /* @__PURE__ */ Symbol.for("react.suspense"), Qt = /* @__PURE__ */ Symbol.for("react.suspense_list"), I = /* @__PURE__ */ Symbol.for("react.memo"), Pt = /* @__PURE__ */ Symbol.for("react.lazy"), Vt = /* @__PURE__ */ Symbol.for("react.activity"), ke = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), re = Symbol.iterator;
  function ie(t) {
    return t === null || typeof t != "object" ? null : (t = re && t[re] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var ql = /* @__PURE__ */ Symbol.for("react.client.reference");
  function fe(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ql ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case bt:
        return "Fragment";
      case It:
        return "Profiler";
      case Se:
        return "StrictMode";
      case ue:
        return "Suspense";
      case Qt:
        return "SuspenseList";
      case Vt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Ft:
          return "Portal";
        case wt:
          return t.displayName || "Context";
        case ye:
          return (t._context.displayName || "Context") + ".Consumer";
        case ae:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case I:
          return e = t.displayName || null, e !== null ? e : fe(t.type) || "Memo";
        case Pt:
          e = t._payload, t = t._init;
          try {
            return fe(t(e));
          } catch {
          }
      }
    return null;
  }
  var zt = Array.isArray, O = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, at = [], St = -1;
  function y(t) {
    return { current: t };
  }
  function R(t) {
    0 > St || (t.current = at[St], at[St] = null, St--);
  }
  function H(t, e) {
    St++, at[St] = t.current, t.current = e;
  }
  var L = y(null), J = y(null), $ = y(null), mt = y(null);
  function Mt(t, e) {
    switch (H($, e), H(J, t), H(L, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? kd(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = kd(e), t = Jd(e, t);
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
    R(L), H(L, t);
  }
  function pt() {
    R(L), R(J), R($);
  }
  function ln(t) {
    t.memoizedState !== null && H(mt, t);
    var e = L.current, l = Jd(e, t.type);
    e !== l && (H(J, t), H(L, l));
  }
  function Vn(t) {
    J.current === t && (R(L), R(J)), mt.current === t && (R(mt), li._currentValue = Z);
  }
  var nn, an;
  function Ee(t) {
    if (nn === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        nn = e && e[1] || "", an = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + nn + t + an;
  }
  var iu = !1;
  function lt(t, e) {
    if (!t || iu) return "";
    iu = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
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
                } catch (_) {
                  var S = _;
                }
                Reflect.construct(t, [], C);
              } else {
                try {
                  C.call();
                } catch (_) {
                  S = _;
                }
                t.call(C.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                S = _;
              }
              (C = t()) && typeof C.catch == "function" && C.catch(function() {
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
                  var N = `
` + h[n].replace(" at new ", " at ");
                  return t.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", t.displayName)), N;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      iu = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? Ee(l) : "";
  }
  function ma(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ee(t.type);
      case 16:
        return Ee("Lazy");
      case 13:
        return t.child !== e && e !== null ? Ee("Suspense Fallback") : Ee("Suspense");
      case 19:
        return Ee("SuspenseList");
      case 0:
      case 15:
        return lt(t.type, !1);
      case 11:
        return lt(t.type.render, !1);
      case 1:
        return lt(t.type, !0);
      case 31:
        return Ee("Activity");
      default:
        return "";
    }
  }
  function cu(t) {
    try {
      var e = "", l = null;
      do
        e += ma(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var ya = Object.prototype.hasOwnProperty, et = f.unstable_scheduleCallback, il = f.unstable_cancelCallback, su = f.unstable_shouldYield, un = f.unstable_requestPaint, _e = f.unstable_now, oi = f.unstable_getCurrentPriorityLevel, ft = f.unstable_ImmediatePriority, va = f.unstable_UserBlockingPriority, ga = f.unstable_NormalPriority, cn = f.unstable_LowPriority, ve = f.unstable_IdlePriority, sn = f.log, pa = f.unstable_setDisableYieldValue, gl = null, Zt = null;
  function xe(t) {
    if (typeof sn == "function" && pa(t), Zt && typeof Zt.setStrictMode == "function")
      try {
        Zt.setStrictMode(gl, t);
      } catch {
      }
  }
  var te = Math.clz32 ? Math.clz32 : Sa, ba = Math.log, ru = Math.LN2;
  function Sa(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (ba(t) / ru | 0) | 0;
  }
  var Zn = 256, Je = 262144, rn = 4194304;
  function Te(t) {
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
  function pl(t, e, l) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var a = 0, u = t.suspendedLanes, c = t.pingedLanes;
    t = t.warmLanes;
    var o = n & 134217727;
    return o !== 0 ? (n = o & ~u, n !== 0 ? a = Te(n) : (c &= o, c !== 0 ? a = Te(c) : l || (l = o & ~t, l !== 0 && (a = Te(l))))) : (o = n & ~u, o !== 0 ? a = Te(o) : c !== 0 ? a = Te(c) : l || (l = n & ~t, l !== 0 && (a = Te(l)))), a === 0 ? 0 : e !== 0 && e !== a && (e & u) === 0 && (u = a & -a, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : a;
  }
  function Be(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function fu(t, e) {
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
    var t = rn;
    return rn <<= 1, (rn & 62914560) === 0 && (rn = 4194304), t;
  }
  function ou(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function xl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Kn(t, e, l, n, a, u) {
    var c = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var o = t.entanglements, h = t.expirationTimes, b = t.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var N = 31 - te(l), C = 1 << N;
      o[N] = 0, h[N] = -1;
      var S = b[N];
      if (S !== null)
        for (b[N] = null, N = 0; N < S.length; N++) {
          var _ = S[N];
          _ !== null && (_.lane &= -536870913);
        }
      l &= ~C;
    }
    n !== 0 && bl(t, n, 0), u !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(c & ~e));
  }
  function bl(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var n = 31 - te(e);
    t.entangledLanes |= e, t.entanglements[n] = t.entanglements[n] | 1073741824 | l & 261930;
  }
  function Sl(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var n = 31 - te(l), a = 1 << n;
      a & e | t[n] & e && (t[n] |= e), l &= ~a;
    }
  }
  function di(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : Ea(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function Ea(t) {
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
  function El(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function kn() {
    var t = q.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : gh(t.type));
  }
  function Ne(t, e) {
    var l = q.p;
    try {
      return q.p = t, e();
    } finally {
      q.p = l;
    }
  }
  var je = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + je, ce = "__reactProps$" + je, Oe = "__reactContainer$" + je, ge = "__reactEvents$" + je, du = "__reactListeners$" + je, hu = "__reactHandles$" + je, Bl = "__reactResources$" + je, fn = "__reactMarker$" + je;
  function _l(t) {
    delete t[Ct], delete t[ce], delete t[ge], delete t[du], delete t[hu];
  }
  function Lt(t) {
    var e = t[Ct];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[Oe] || l[Ct]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = eh(t); t !== null; ) {
            if (l = t[Ct]) return l;
            t = eh(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function on(t) {
    if (t = t[Ct] || t[Oe]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Al(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function jl(t) {
    var e = t[Bl];
    return e || (e = t[Bl] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Yt(t) {
    t[fn] = !0;
  }
  var mu = /* @__PURE__ */ new Set(), yu = {};
  function Hl(t, e) {
    cl(t, e), cl(t + "Capture", e);
  }
  function cl(t, e) {
    for (yu[t] = e, t = 0; t < e.length; t++)
      mu.add(e[t]);
  }
  var He = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), sl = {}, rl = {};
  function _a(t) {
    return ya.call(rl, t) ? !0 : ya.call(sl, t) ? !1 : He.test(t) ? rl[t] = !0 : (sl[t] = !0, !1);
  }
  function fl(t, e, l) {
    if (_a(e))
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
  function Jn(t, e, l) {
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
  function $e(t, e, l, n) {
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
  function pe(t) {
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
  function wl(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Aa(t, e, l) {
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
  function dn(t) {
    if (!t._valueTracker) {
      var e = wl(t) ? "checked" : "value";
      t._valueTracker = Aa(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function vu(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), n = "";
    return t && (n = wl(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== l ? (e.setValue(t), !0) : !1;
  }
  function Tl(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var hi = /[\n"\\]/g;
  function Re(t) {
    return t.replace(
      hi,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ta(t, e, l, n, a, u, c, o) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), e != null ? c === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + pe(e)) : t.value !== "" + pe(e) && (t.value = "" + pe(e)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), e != null ? Na(t, c, pe(e)) : l != null ? Na(t, c, pe(l)) : n != null && t.removeAttribute("value"), a == null && u != null && (t.defaultChecked = !!u), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.name = "" + pe(o) : t.removeAttribute("name");
  }
  function gu(t, e, l, n, a, u, c, o) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        dn(t);
        return;
      }
      l = l != null ? "" + pe(l) : "", e = e != null ? "" + pe(e) : l, o || e === t.value || (t.value = e), t.defaultValue = e;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = o ? t.checked : !!n, t.defaultChecked = !!n, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c), dn(t);
  }
  function Na(t, e, l) {
    e === "number" && Tl(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function Ll(t, e, l, n) {
    if (t = t.options, e) {
      e = {};
      for (var a = 0; a < l.length; a++)
        e["$" + l[a]] = !0;
      for (l = 0; l < t.length; l++)
        a = e.hasOwnProperty("$" + t[l].value), t[l].selected !== a && (t[l].selected = a), a && n && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + pe(l), e = null, a = 0; a < t.length; a++) {
        if (t[a].value === l) {
          t[a].selected = !0, n && (t[a].defaultSelected = !0);
          return;
        }
        e !== null || t[a].disabled || (e = t[a]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function hn(t, e, l) {
    if (e != null && (e = "" + pe(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + pe(l) : "";
  }
  function mn(t, e, l, n) {
    if (e == null) {
      if (n != null) {
        if (l != null) throw Error(r(92));
        if (zt(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), e = l;
    }
    l = pe(e), t.defaultValue = l, n = t.textContent, n === l && n !== "" && n !== null && (t.value = n), dn(t);
  }
  function we(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var mi = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function yn(t, e, l) {
    var n = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : n ? t.setProperty(e, l) : typeof l != "number" || l === 0 || mi.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function vn(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "");
      for (var a in e)
        n = e[a], e.hasOwnProperty(a) && l[a] !== n && yn(t, a, n);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && yn(t, u, e[u]);
  }
  function gn(t) {
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
  var Oa = /* @__PURE__ */ new Map([
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
  ]), Cc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ra(t) {
    return Cc.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function ol() {
  }
  var pu = null;
  function bu(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var pn = null, dl = null;
  function yi(t) {
    var e = on(t);
    if (e && (t = e.stateNode)) {
      var l = t[ce] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Ta(
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
              'input[name="' + Re(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var n = l[e];
              if (n !== t && n.form === t.form) {
                var a = n[ce] || null;
                if (!a) throw Error(r(90));
                Ta(
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
              n = l[e], n.form === t.form && vu(n);
          }
          break t;
        case "textarea":
          hn(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && Ll(t, !!l.multiple, e, !1);
      }
    }
  }
  var Su = !1;
  function za(t, e, l) {
    if (Su) return t(e, l);
    Su = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (Su = !1, (pn !== null || dl !== null) && (Ii(), pn && (e = pn, t = dl, dl = pn = null, yi(e), t)))
        for (e = 0; e < t.length; e++) yi(t[e]);
    }
  }
  function Wn(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var n = l[ce] || null;
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
  var Le = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Eu = !1;
  if (Le)
    try {
      var bn = {};
      Object.defineProperty(bn, "passive", {
        get: function() {
          Eu = !0;
        }
      }), window.addEventListener("test", bn, bn), window.removeEventListener("test", bn, bn);
    } catch {
      Eu = !1;
    }
  var Nl = null, _u = null, Sn = null;
  function vi() {
    if (Sn) return Sn;
    var t, e = _u, l = e.length, n, a = "value" in Nl ? Nl.value : Nl.textContent, u = a.length;
    for (t = 0; t < l && e[t] === a[t]; t++) ;
    var c = l - t;
    for (n = 1; n <= c && e[l - n] === a[u - n]; n++) ;
    return Sn = a.slice(t, 1 < n ? 1 - n : void 0);
  }
  function $n(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function d() {
    return !0;
  }
  function E() {
    return !1;
  }
  function z(t) {
    function e(l, n, a, u, c) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var o in t)
        t.hasOwnProperty(o) && (l = t[o], this[o] = l ? l(u) : u[o]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? d : E, this.isPropagationStopped = E, this;
    }
    return Y(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = d);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = d);
      },
      persist: function() {
      },
      isPersistent: d
    }), e;
  }
  var B = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Q = z(B), tt = Y({}, B, { view: 0, detail: 0 }), At = z(tt), ee, nt, Dt, le = Y({}, tt, {
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
    getModifierState: qc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Dt && (Dt && t.type === "mousemove" ? (ee = t.screenX - Dt.screenX, nt = t.screenY - Dt.screenY) : nt = ee = 0, Dt = t), ee);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : nt;
    }
  }), ct = z(le), Ol = Y({}, le, { dataTransfer: 0 }), ze = z(Ol), Dc = Y({}, tt, { relatedTarget: 0 }), Uc = z(Dc), am = Y({}, B, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), um = z(am), im = Y({}, B, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), cm = z(im), sm = Y({}, B, { data: 0 }), Wr = z(sm), rm = {
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
  function qc() {
    return dm;
  }
  var hm = Y({}, tt, {
    key: function(t) {
      if (t.key) {
        var e = rm[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = $n(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? fm[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: qc,
    charCode: function(t) {
      return t.type === "keypress" ? $n(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? $n(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), mm = z(hm), ym = Y({}, le, {
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
  }), $r = z(ym), vm = Y({}, tt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: qc
  }), gm = z(vm), pm = Y({}, B, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), bm = z(pm), Sm = Y({}, le, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Em = z(Sm), _m = Y({}, B, {
    newState: 0,
    oldState: 0
  }), Am = z(_m), Tm = [9, 13, 27, 32], xc = Le && "CompositionEvent" in window, Au = null;
  Le && "documentMode" in document && (Au = document.documentMode);
  var Nm = Le && "TextEvent" in window && !Au, Fr = Le && (!xc || Au && 8 < Au && 11 >= Au), Ir = " ", Pr = !1;
  function tf(t, e) {
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
  function ef(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ma = !1;
  function Om(t, e) {
    switch (t) {
      case "compositionend":
        return ef(e);
      case "keypress":
        return e.which !== 32 ? null : (Pr = !0, Ir);
      case "textInput":
        return t = e.data, t === Ir && Pr ? null : t;
      default:
        return null;
    }
  }
  function Rm(t, e) {
    if (Ma)
      return t === "compositionend" || !xc && tf(t, e) ? (t = vi(), Sn = _u = Nl = null, Ma = !1, t) : null;
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
        return Fr && e.locale !== "ko" ? null : e.data;
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
  function lf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!zm[t.type] : e === "textarea";
  }
  function nf(t, e, l, n) {
    pn ? dl ? dl.push(n) : dl = [n] : pn = n, e = uc(e, "onChange"), 0 < e.length && (l = new Q(
      "onChange",
      "change",
      null,
      l,
      n
    ), t.push({ event: l, listeners: e }));
  }
  var Tu = null, Nu = null;
  function Mm(t) {
    Gd(t, 0);
  }
  function gi(t) {
    var e = Al(t);
    if (vu(e)) return t;
  }
  function af(t, e) {
    if (t === "change") return e;
  }
  var uf = !1;
  if (Le) {
    var Bc;
    if (Le) {
      var jc = "oninput" in document;
      if (!jc) {
        var cf = document.createElement("div");
        cf.setAttribute("oninput", "return;"), jc = typeof cf.oninput == "function";
      }
      Bc = jc;
    } else Bc = !1;
    uf = Bc && (!document.documentMode || 9 < document.documentMode);
  }
  function sf() {
    Tu && (Tu.detachEvent("onpropertychange", rf), Nu = Tu = null);
  }
  function rf(t) {
    if (t.propertyName === "value" && gi(Nu)) {
      var e = [];
      nf(
        e,
        Nu,
        t,
        bu(t)
      ), za(Mm, e);
    }
  }
  function Cm(t, e, l) {
    t === "focusin" ? (sf(), Tu = e, Nu = l, Tu.attachEvent("onpropertychange", rf)) : t === "focusout" && sf();
  }
  function Dm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return gi(Nu);
  }
  function Um(t, e) {
    if (t === "click") return gi(e);
  }
  function qm(t, e) {
    if (t === "input" || t === "change")
      return gi(e);
  }
  function xm(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Ye = typeof Object.is == "function" ? Object.is : xm;
  function Ou(t, e) {
    if (Ye(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), n = Object.keys(e);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!ya.call(e, a) || !Ye(t[a], e[a]))
        return !1;
    }
    return !0;
  }
  function ff(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function of(t, e) {
    var l = ff(t);
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
      l = ff(l);
    }
  }
  function df(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? df(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function hf(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Tl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Tl(t.document);
    }
    return e;
  }
  function Hc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Bm = Le && "documentMode" in document && 11 >= document.documentMode, Ca = null, wc = null, Ru = null, Lc = !1;
  function mf(t, e, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Lc || Ca == null || Ca !== Tl(n) || (n = Ca, "selectionStart" in n && Hc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), Ru && Ou(Ru, n) || (Ru = n, n = uc(wc, "onSelect"), 0 < n.length && (e = new Q(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: n }), e.target = Ca)));
  }
  function Fn(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var Da = {
    animationend: Fn("Animation", "AnimationEnd"),
    animationiteration: Fn("Animation", "AnimationIteration"),
    animationstart: Fn("Animation", "AnimationStart"),
    transitionrun: Fn("Transition", "TransitionRun"),
    transitionstart: Fn("Transition", "TransitionStart"),
    transitioncancel: Fn("Transition", "TransitionCancel"),
    transitionend: Fn("Transition", "TransitionEnd")
  }, Yc = {}, yf = {};
  Le && (yf = document.createElement("div").style, "AnimationEvent" in window || (delete Da.animationend.animation, delete Da.animationiteration.animation, delete Da.animationstart.animation), "TransitionEvent" in window || delete Da.transitionend.transition);
  function In(t) {
    if (Yc[t]) return Yc[t];
    if (!Da[t]) return t;
    var e = Da[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in yf)
        return Yc[t] = e[l];
    return t;
  }
  var vf = In("animationend"), gf = In("animationiteration"), pf = In("animationstart"), jm = In("transitionrun"), Hm = In("transitionstart"), wm = In("transitioncancel"), bf = In("transitionend"), Sf = /* @__PURE__ */ new Map(), Gc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Gc.push("scrollEnd");
  function hl(t, e) {
    Sf.set(t, e), Hl(e, [t]);
  }
  var pi = typeof reportError == "function" ? reportError : function(t) {
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
  }, Fe = [], Ua = 0, Xc = 0;
  function bi() {
    for (var t = Ua, e = Xc = Ua = 0; e < t; ) {
      var l = Fe[e];
      Fe[e++] = null;
      var n = Fe[e];
      Fe[e++] = null;
      var a = Fe[e];
      Fe[e++] = null;
      var u = Fe[e];
      if (Fe[e++] = null, n !== null && a !== null) {
        var c = n.pending;
        c === null ? a.next = a : (a.next = c.next, c.next = a), n.pending = a;
      }
      u !== 0 && Ef(l, a, u);
    }
  }
  function Si(t, e, l, n) {
    Fe[Ua++] = t, Fe[Ua++] = e, Fe[Ua++] = l, Fe[Ua++] = n, Xc |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
  }
  function Qc(t, e, l, n) {
    return Si(t, e, l, n), Ei(t);
  }
  function Pn(t, e) {
    return Si(t, null, null, e), Ei(t);
  }
  function Ef(t, e, l) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, u = t.return; u !== null; )
      u.childLanes |= l, n = u.alternate, n !== null && (n.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (a = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, a && e !== null && (a = 31 - te(l), t = u.hiddenUpdates, n = t[a], n === null ? t[a] = [e] : n.push(e), e.lane = l | 536870912), u) : null;
  }
  function Ei(t) {
    if (50 < Wu)
      throw Wu = 0, Is = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var qa = {};
  function Lm(t, e, l, n) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ge(t, e, l, n) {
    return new Lm(t, e, l, n);
  }
  function Vc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Yl(t, e) {
    var l = t.alternate;
    return l === null ? (l = Ge(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function _f(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function _i(t, e, l, n, a, u) {
    var c = 0;
    if (n = t, typeof t == "function") Vc(t) && (c = 1);
    else if (typeof t == "string")
      c = Vy(
        t,
        l,
        L.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Vt:
          return t = Ge(31, l, e, a), t.elementType = Vt, t.lanes = u, t;
        case bt:
          return ta(l.children, a, u, e);
        case Se:
          c = 8, a |= 24;
          break;
        case It:
          return t = Ge(12, l, e, a | 2), t.elementType = It, t.lanes = u, t;
        case ue:
          return t = Ge(13, l, e, a), t.elementType = ue, t.lanes = u, t;
        case Qt:
          return t = Ge(19, l, e, a), t.elementType = Qt, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case wt:
                c = 10;
                break t;
              case ye:
                c = 9;
                break t;
              case ae:
                c = 11;
                break t;
              case I:
                c = 14;
                break t;
              case Pt:
                c = 16, n = null;
                break t;
            }
          c = 29, l = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), n = null;
      }
    return e = Ge(c, l, e, a), e.elementType = t, e.type = n, e.lanes = u, e;
  }
  function ta(t, e, l, n) {
    return t = Ge(7, t, n, e), t.lanes = l, t;
  }
  function Zc(t, e, l) {
    return t = Ge(6, t, null, e), t.lanes = l, t;
  }
  function Af(t) {
    var e = Ge(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Kc(t, e, l) {
    return e = Ge(
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
  var Tf = /* @__PURE__ */ new WeakMap();
  function Ie(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Tf.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: cu(e)
      }, Tf.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: cu(e)
    };
  }
  var xa = [], Ba = 0, Ai = null, zu = 0, Pe = [], tl = 0, En = null, Rl = 1, zl = "";
  function Gl(t, e) {
    xa[Ba++] = zu, xa[Ba++] = Ai, Ai = t, zu = e;
  }
  function Nf(t, e, l) {
    Pe[tl++] = Rl, Pe[tl++] = zl, Pe[tl++] = En, En = t;
    var n = Rl;
    t = zl;
    var a = 32 - te(n) - 1;
    n &= ~(1 << a), l += 1;
    var u = 32 - te(e) + a;
    if (30 < u) {
      var c = a - a % 5;
      u = (n & (1 << c) - 1).toString(32), n >>= c, a -= c, Rl = 1 << 32 - te(e) + a | l << a | n, zl = u + t;
    } else
      Rl = 1 << u | l << a | n, zl = t;
  }
  function kc(t) {
    t.return !== null && (Gl(t, 1), Nf(t, 1, 0));
  }
  function Jc(t) {
    for (; t === Ai; )
      Ai = xa[--Ba], xa[Ba] = null, zu = xa[--Ba], xa[Ba] = null;
    for (; t === En; )
      En = Pe[--tl], Pe[tl] = null, zl = Pe[--tl], Pe[tl] = null, Rl = Pe[--tl], Pe[tl] = null;
  }
  function Of(t, e) {
    Pe[tl++] = Rl, Pe[tl++] = zl, Pe[tl++] = En, Rl = e.id, zl = e.overflow, En = t;
  }
  var oe = null, Ut = null, ot = !1, _n = null, el = !1, Wc = Error(r(519));
  function An(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Mu(Ie(e, t)), Wc;
  }
  function Rf(t) {
    var e = t.stateNode, l = t.type, n = t.memoizedProps;
    switch (e[Ct] = t, e[ce] = n, l) {
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
        for (l = 0; l < Fu.length; l++)
          it(Fu[l], e);
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
        it("invalid", e), gu(
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
        it("invalid", e), mn(e, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || n.suppressHydrationWarning === !0 || Zd(e.textContent, l) ? (n.popover != null && (it("beforetoggle", e), it("toggle", e)), n.onScroll != null && it("scroll", e), n.onScrollEnd != null && it("scrollend", e), n.onClick != null && (e.onclick = ol), e = !0) : e = !1, e || An(t, !0);
  }
  function zf(t) {
    for (oe = t.return; oe; )
      switch (oe.tag) {
        case 5:
        case 31:
        case 13:
          el = !1;
          return;
        case 27:
        case 3:
          el = !0;
          return;
        default:
          oe = oe.return;
      }
  }
  function ja(t) {
    if (t !== oe) return !1;
    if (!ot) return zf(t), ot = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || hr(t.type, t.memoizedProps)), l = !l), l && Ut && An(t), zf(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Ut = th(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Ut = th(t);
    } else
      e === 27 ? (e = Ut, Hn(t.type) ? (t = pr, pr = null, Ut = t) : Ut = e) : Ut = oe ? nl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function ea() {
    Ut = oe = null, ot = !1;
  }
  function $c() {
    var t = _n;
    return t !== null && (Ue === null ? Ue = t : Ue.push.apply(
      Ue,
      t
    ), _n = null), t;
  }
  function Mu(t) {
    _n === null ? _n = [t] : _n.push(t);
  }
  var Fc = y(null), la = null, Xl = null;
  function Tn(t, e, l) {
    H(Fc, e._currentValue), e._currentValue = l;
  }
  function Ql(t) {
    t._currentValue = Fc.current, R(Fc);
  }
  function Ic(t, e, l) {
    for (; t !== null; ) {
      var n = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function Pc(t, e, l, n) {
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
              u.lanes |= l, o = u.alternate, o !== null && (o.lanes |= l), Ic(
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
        c.lanes |= l, u = c.alternate, u !== null && (u.lanes |= l), Ic(c, l, t), c = null;
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
  function Ha(t, e, l, n) {
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
          Ye(a.pendingProps.value, c.value) || (t !== null ? t.push(o) : t = [o]);
        }
      } else if (a === mt.current) {
        if (c = a.alternate, c === null) throw Error(r(387));
        c.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(li) : t = [li]);
      }
      a = a.return;
    }
    t !== null && Pc(
      e,
      t,
      l,
      n
    ), e.flags |= 262144;
  }
  function Ti(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ye(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function na(t) {
    la = t, Xl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function de(t) {
    return Mf(la, t);
  }
  function Ni(t, e) {
    return la === null && na(t), Mf(t, e);
  }
  function Mf(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, Xl === null) {
      if (t === null) throw Error(r(308));
      Xl = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Xl = Xl.next = e;
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
  }, Gm = f.unstable_scheduleCallback, Xm = f.unstable_NormalPriority, Kt = {
    $$typeof: wt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ts() {
    return {
      controller: new Ym(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Cu(t) {
    t.refCount--, t.refCount === 0 && Gm(Xm, function() {
      t.controller.abort();
    });
  }
  var Du = null, es = 0, wa = 0, La = null;
  function Qm(t, e) {
    if (Du === null) {
      var l = Du = [];
      es = 0, wa = ar(), La = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return es++, e.then(Cf, Cf), e;
  }
  function Cf() {
    if (--es === 0 && Du !== null) {
      La !== null && (La.status = "fulfilled");
      var t = Du;
      Du = null, wa = 0, La = null;
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
  var Df = O.S;
  O.S = function(t, e) {
    yd = _e(), typeof e == "object" && e !== null && typeof e.then == "function" && Qm(t, e), Df !== null && Df(t, e);
  };
  var aa = y(null);
  function ls() {
    var t = aa.current;
    return t !== null ? t : Rt.pooledCache;
  }
  function Oi(t, e) {
    e === null ? H(aa, aa.current) : H(aa, e.pool);
  }
  function Uf() {
    var t = ls();
    return t === null ? null : { parent: Kt._currentValue, pool: t };
  }
  var Ya = Error(r(460)), ns = Error(r(474)), Ri = Error(r(542)), zi = { then: function() {
  } };
  function qf(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function xf(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(ol, ol), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, jf(t), t;
      default:
        if (typeof e.status == "string") e.then(ol, ol);
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
            throw t = e.reason, jf(t), t;
        }
        throw ia = e, Ya;
    }
  }
  function ua(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (ia = l, Ya) : l;
    }
  }
  var ia = null;
  function Bf() {
    if (ia === null) throw Error(r(459));
    var t = ia;
    return ia = null, t;
  }
  function jf(t) {
    if (t === Ya || t === Ri)
      throw Error(r(483));
  }
  var Ga = null, Uu = 0;
  function Mi(t) {
    var e = Uu;
    return Uu += 1, Ga === null && (Ga = []), xf(Ga, t, e);
  }
  function qu(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Ci(t, e) {
    throw e.$$typeof === ht ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Hf(t) {
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
      return v = Yl(v, m), v.index = 0, v.sibling = null, v;
    }
    function u(v, m, p) {
      return v.index = p, t ? (p = v.alternate, p !== null ? (p = p.index, p < m ? (v.flags |= 67108866, m) : p) : (v.flags |= 67108866, m)) : (v.flags |= 1048576, m);
    }
    function c(v) {
      return t && v.alternate === null && (v.flags |= 67108866), v;
    }
    function o(v, m, p, M) {
      return m === null || m.tag !== 6 ? (m = Zc(p, v.mode, M), m.return = v, m) : (m = a(m, p), m.return = v, m);
    }
    function h(v, m, p, M) {
      var V = p.type;
      return V === bt ? N(
        v,
        m,
        p.props.children,
        M,
        p.key
      ) : m !== null && (m.elementType === V || typeof V == "object" && V !== null && V.$$typeof === Pt && ua(V) === m.type) ? (m = a(m, p.props), qu(m, p), m.return = v, m) : (m = _i(
        p.type,
        p.key,
        p.props,
        null,
        v.mode,
        M
      ), qu(m, p), m.return = v, m);
    }
    function b(v, m, p, M) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== p.containerInfo || m.stateNode.implementation !== p.implementation ? (m = Kc(p, v.mode, M), m.return = v, m) : (m = a(m, p.children || []), m.return = v, m);
    }
    function N(v, m, p, M, V) {
      return m === null || m.tag !== 7 ? (m = ta(
        p,
        v.mode,
        M,
        V
      ), m.return = v, m) : (m = a(m, p), m.return = v, m);
    }
    function C(v, m, p) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return m = Zc(
          "" + m,
          v.mode,
          p
        ), m.return = v, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Ht:
            return p = _i(
              m.type,
              m.key,
              m.props,
              null,
              v.mode,
              p
            ), qu(p, m), p.return = v, p;
          case Ft:
            return m = Kc(
              m,
              v.mode,
              p
            ), m.return = v, m;
          case Pt:
            return m = ua(m), C(v, m, p);
        }
        if (zt(m) || ie(m))
          return m = ta(
            m,
            v.mode,
            p,
            null
          ), m.return = v, m;
        if (typeof m.then == "function")
          return C(v, Mi(m), p);
        if (m.$$typeof === wt)
          return C(
            v,
            Ni(v, m),
            p
          );
        Ci(v, m);
      }
      return null;
    }
    function S(v, m, p, M) {
      var V = m !== null ? m.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return V !== null ? null : o(v, m, "" + p, M);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Ht:
            return p.key === V ? h(v, m, p, M) : null;
          case Ft:
            return p.key === V ? b(v, m, p, M) : null;
          case Pt:
            return p = ua(p), S(v, m, p, M);
        }
        if (zt(p) || ie(p))
          return V !== null ? null : N(v, m, p, M, null);
        if (typeof p.then == "function")
          return S(
            v,
            m,
            Mi(p),
            M
          );
        if (p.$$typeof === wt)
          return S(
            v,
            m,
            Ni(v, p),
            M
          );
        Ci(v, p);
      }
      return null;
    }
    function _(v, m, p, M, V) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return v = v.get(p) || null, o(m, v, "" + M, V);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Ht:
            return v = v.get(
              M.key === null ? p : M.key
            ) || null, h(m, v, M, V);
          case Ft:
            return v = v.get(
              M.key === null ? p : M.key
            ) || null, b(m, v, M, V);
          case Pt:
            return M = ua(M), _(
              v,
              m,
              p,
              M,
              V
            );
        }
        if (zt(M) || ie(M))
          return v = v.get(p) || null, N(m, v, M, V, null);
        if (typeof M.then == "function")
          return _(
            v,
            m,
            p,
            Mi(M),
            V
          );
        if (M.$$typeof === wt)
          return _(
            v,
            m,
            p,
            Ni(m, M),
            V
          );
        Ci(m, M);
      }
      return null;
    }
    function w(v, m, p, M) {
      for (var V = null, yt = null, X = m, P = m = 0, rt = null; X !== null && P < p.length; P++) {
        X.index > P ? (rt = X, X = null) : rt = X.sibling;
        var vt = S(
          v,
          X,
          p[P],
          M
        );
        if (vt === null) {
          X === null && (X = rt);
          break;
        }
        t && X && vt.alternate === null && e(v, X), m = u(vt, m, P), yt === null ? V = vt : yt.sibling = vt, yt = vt, X = rt;
      }
      if (P === p.length)
        return l(v, X), ot && Gl(v, P), V;
      if (X === null) {
        for (; P < p.length; P++)
          X = C(v, p[P], M), X !== null && (m = u(
            X,
            m,
            P
          ), yt === null ? V = X : yt.sibling = X, yt = X);
        return ot && Gl(v, P), V;
      }
      for (X = n(X); P < p.length; P++)
        rt = _(
          X,
          v,
          P,
          p[P],
          M
        ), rt !== null && (t && rt.alternate !== null && X.delete(
          rt.key === null ? P : rt.key
        ), m = u(
          rt,
          m,
          P
        ), yt === null ? V = rt : yt.sibling = rt, yt = rt);
      return t && X.forEach(function(Xn) {
        return e(v, Xn);
      }), ot && Gl(v, P), V;
    }
    function K(v, m, p, M) {
      if (p == null) throw Error(r(151));
      for (var V = null, yt = null, X = m, P = m = 0, rt = null, vt = p.next(); X !== null && !vt.done; P++, vt = p.next()) {
        X.index > P ? (rt = X, X = null) : rt = X.sibling;
        var Xn = S(v, X, vt.value, M);
        if (Xn === null) {
          X === null && (X = rt);
          break;
        }
        t && X && Xn.alternate === null && e(v, X), m = u(Xn, m, P), yt === null ? V = Xn : yt.sibling = Xn, yt = Xn, X = rt;
      }
      if (vt.done)
        return l(v, X), ot && Gl(v, P), V;
      if (X === null) {
        for (; !vt.done; P++, vt = p.next())
          vt = C(v, vt.value, M), vt !== null && (m = u(vt, m, P), yt === null ? V = vt : yt.sibling = vt, yt = vt);
        return ot && Gl(v, P), V;
      }
      for (X = n(X); !vt.done; P++, vt = p.next())
        vt = _(X, v, P, vt.value, M), vt !== null && (t && vt.alternate !== null && X.delete(vt.key === null ? P : vt.key), m = u(vt, m, P), yt === null ? V = vt : yt.sibling = vt, yt = vt);
      return t && X.forEach(function(e0) {
        return e(v, e0);
      }), ot && Gl(v, P), V;
    }
    function Ot(v, m, p, M) {
      if (typeof p == "object" && p !== null && p.type === bt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Ht:
            t: {
              for (var V = p.key; m !== null; ) {
                if (m.key === V) {
                  if (V = p.type, V === bt) {
                    if (m.tag === 7) {
                      l(
                        v,
                        m.sibling
                      ), M = a(
                        m,
                        p.props.children
                      ), M.return = v, v = M;
                      break t;
                    }
                  } else if (m.elementType === V || typeof V == "object" && V !== null && V.$$typeof === Pt && ua(V) === m.type) {
                    l(
                      v,
                      m.sibling
                    ), M = a(m, p.props), qu(M, p), M.return = v, v = M;
                    break t;
                  }
                  l(v, m);
                  break;
                } else e(v, m);
                m = m.sibling;
              }
              p.type === bt ? (M = ta(
                p.props.children,
                v.mode,
                M,
                p.key
              ), M.return = v, v = M) : (M = _i(
                p.type,
                p.key,
                p.props,
                null,
                v.mode,
                M
              ), qu(M, p), M.return = v, v = M);
            }
            return c(v);
          case Ft:
            t: {
              for (V = p.key; m !== null; ) {
                if (m.key === V)
                  if (m.tag === 4 && m.stateNode.containerInfo === p.containerInfo && m.stateNode.implementation === p.implementation) {
                    l(
                      v,
                      m.sibling
                    ), M = a(m, p.children || []), M.return = v, v = M;
                    break t;
                  } else {
                    l(v, m);
                    break;
                  }
                else e(v, m);
                m = m.sibling;
              }
              M = Kc(p, v.mode, M), M.return = v, v = M;
            }
            return c(v);
          case Pt:
            return p = ua(p), Ot(
              v,
              m,
              p,
              M
            );
        }
        if (zt(p))
          return w(
            v,
            m,
            p,
            M
          );
        if (ie(p)) {
          if (V = ie(p), typeof V != "function") throw Error(r(150));
          return p = V.call(p), K(
            v,
            m,
            p,
            M
          );
        }
        if (typeof p.then == "function")
          return Ot(
            v,
            m,
            Mi(p),
            M
          );
        if (p.$$typeof === wt)
          return Ot(
            v,
            m,
            Ni(v, p),
            M
          );
        Ci(v, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p, m !== null && m.tag === 6 ? (l(v, m.sibling), M = a(m, p), M.return = v, v = M) : (l(v, m), M = Zc(p, v.mode, M), M.return = v, v = M), c(v)) : l(v, m);
    }
    return function(v, m, p, M) {
      try {
        Uu = 0;
        var V = Ot(
          v,
          m,
          p,
          M
        );
        return Ga = null, V;
      } catch (X) {
        if (X === Ya || X === Ri) throw X;
        var yt = Ge(29, X, null, v.mode);
        return yt.lanes = M, yt.return = v, yt;
      }
    };
  }
  var ca = Hf(!0), wf = Hf(!1), Nn = !1;
  function as(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function us(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function On(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Rn(t, e, l) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (gt & 2) !== 0) {
      var a = n.pending;
      return a === null ? e.next = e : (e.next = a.next, a.next = e), n.pending = e, e = Ei(t), Ef(t, null, l), e;
    }
    return Si(t, n, e, l), Ei(t);
  }
  function xu(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, Sl(t, l);
    }
  }
  function is(t, e) {
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
  var cs = !1;
  function Bu() {
    if (cs) {
      var t = La;
      if (t !== null) throw t;
    }
  }
  function ju(t, e, l, n) {
    cs = !1;
    var a = t.updateQueue;
    Nn = !1;
    var u = a.firstBaseUpdate, c = a.lastBaseUpdate, o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var h = o, b = h.next;
      h.next = null, c === null ? u = b : c.next = b, c = h;
      var N = t.alternate;
      N !== null && (N = N.updateQueue, o = N.lastBaseUpdate, o !== c && (o === null ? N.firstBaseUpdate = b : o.next = b, N.lastBaseUpdate = h));
    }
    if (u !== null) {
      var C = a.baseState;
      c = 0, N = b = h = null, o = u;
      do {
        var S = o.lane & -536870913, _ = S !== o.lane;
        if (_ ? (st & S) === S : (n & S) === S) {
          S !== 0 && S === wa && (cs = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          t: {
            var w = t, K = o;
            S = e;
            var Ot = l;
            switch (K.tag) {
              case 1:
                if (w = K.payload, typeof w == "function") {
                  C = w.call(Ot, C, S);
                  break t;
                }
                C = w;
                break t;
              case 3:
                w.flags = w.flags & -65537 | 128;
              case 0:
                if (w = K.payload, S = typeof w == "function" ? w.call(Ot, C, S) : w, S == null) break t;
                C = Y({}, C, S);
                break t;
              case 2:
                Nn = !0;
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
          }, N === null ? (b = N = _, h = C) : N = N.next = _, c |= S;
        if (o = o.next, o === null) {
          if (o = a.shared.pending, o === null)
            break;
          _ = o, o = _.next, _.next = null, a.lastBaseUpdate = _, a.shared.pending = null;
        }
      } while (!0);
      N === null && (h = C), a.baseState = h, a.firstBaseUpdate = b, a.lastBaseUpdate = N, u === null && (a.shared.lanes = 0), Un |= c, t.lanes = c, t.memoizedState = C;
    }
  }
  function Lf(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function Yf(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        Lf(l[t], e);
  }
  var Xa = y(null), Di = y(0);
  function Gf(t, e) {
    t = Il, H(Di, t), H(Xa, e), Il = t | e.baseLanes;
  }
  function ss() {
    H(Di, Il), H(Xa, Xa.current);
  }
  function rs() {
    Il = Di.current, R(Xa), R(Di);
  }
  var Xe = y(null), ll = null;
  function zn(t) {
    var e = t.alternate;
    H(Gt, Gt.current & 1), H(Xe, t), ll === null && (e === null || Xa.current !== null || e.memoizedState !== null) && (ll = t);
  }
  function fs(t) {
    H(Gt, Gt.current), H(Xe, t), ll === null && (ll = t);
  }
  function Xf(t) {
    t.tag === 22 ? (H(Gt, Gt.current), H(Xe, t), ll === null && (ll = t)) : Mn();
  }
  function Mn() {
    H(Gt, Gt.current), H(Xe, Xe.current);
  }
  function Qe(t) {
    R(Xe), ll === t && (ll = null), R(Gt);
  }
  var Gt = y(0);
  function Ui(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || vr(l) || gr(l)))
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
  var Vl = 0, F = null, Tt = null, kt = null, qi = !1, Qa = !1, sa = !1, xi = 0, Hu = 0, Va = null, Zm = 0;
  function Bt() {
    throw Error(r(321));
  }
  function os(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!Ye(t[l], e[l])) return !1;
    return !0;
  }
  function ds(t, e, l, n, a, u) {
    return Vl = u, F = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, O.H = t === null || t.memoizedState === null ? Oo : Rs, sa = !1, u = l(n, a), sa = !1, Qa && (u = Vf(
      e,
      l,
      n,
      a
    )), Qf(t), u;
  }
  function Qf(t) {
    O.H = Yu;
    var e = Tt !== null && Tt.next !== null;
    if (Vl = 0, kt = Tt = F = null, qi = !1, Hu = 0, Va = null, e) throw Error(r(300));
    t === null || Jt || (t = t.dependencies, t !== null && Ti(t) && (Jt = !0));
  }
  function Vf(t, e, l, n) {
    F = t;
    var a = 0;
    do {
      if (Qa && (Va = null), Hu = 0, Qa = !1, 25 <= a) throw Error(r(301));
      if (a += 1, kt = Tt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      O.H = Ro, u = e(l, n);
    } while (Qa);
    return u;
  }
  function Km() {
    var t = O.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? wu(e) : e, t = t.useState()[0], (Tt !== null ? Tt.memoizedState : null) !== t && (F.flags |= 1024), e;
  }
  function hs() {
    var t = xi !== 0;
    return xi = 0, t;
  }
  function ms(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function ys(t) {
    if (qi) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      qi = !1;
    }
    Vl = 0, kt = Tt = F = null, Qa = !1, Hu = xi = 0, Va = null;
  }
  function Ae() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return kt === null ? F.memoizedState = kt = t : kt = kt.next = t, kt;
  }
  function Xt() {
    if (Tt === null) {
      var t = F.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Tt.next;
    var e = kt === null ? F.memoizedState : kt.next;
    if (e !== null)
      kt = e, Tt = t;
    else {
      if (t === null)
        throw F.alternate === null ? Error(r(467)) : Error(r(310));
      Tt = t, t = {
        memoizedState: Tt.memoizedState,
        baseState: Tt.baseState,
        baseQueue: Tt.baseQueue,
        queue: Tt.queue,
        next: null
      }, kt === null ? F.memoizedState = kt = t : kt = kt.next = t;
    }
    return kt;
  }
  function Bi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function wu(t) {
    var e = Hu;
    return Hu += 1, Va === null && (Va = []), t = xf(Va, t, e), e = F, (kt === null ? e.memoizedState : kt.next) === null && (e = e.alternate, O.H = e === null || e.memoizedState === null ? Oo : Rs), t;
  }
  function ji(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return wu(t);
      if (t.$$typeof === wt) return de(t);
    }
    throw Error(r(438, String(t)));
  }
  function vs(t) {
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
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Bi(), F.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), n = 0; n < t; n++)
        l[n] = ke;
    return e.index++, l;
  }
  function Zl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Hi(t) {
    var e = Xt();
    return gs(e, Tt, t);
  }
  function gs(t, e, l) {
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
      var o = c = null, h = null, b = e, N = !1;
      do {
        var C = b.lane & -536870913;
        if (C !== b.lane ? (st & C) === C : (Vl & C) === C) {
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
            }), C === wa && (N = !0);
          else if ((Vl & S) === S) {
            b = b.next, S === wa && (N = !0);
            continue;
          } else
            C = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, h === null ? (o = h = C, c = u) : h = h.next = C, F.lanes |= S, Un |= S;
          C = b.action, sa && l(u, C), u = b.hasEagerState ? b.eagerState : l(u, C);
        } else
          S = {
            lane: C,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, h === null ? (o = h = S, c = u) : h = h.next = S, F.lanes |= C, Un |= C;
        b = b.next;
      } while (b !== null && b !== e);
      if (h === null ? c = u : h.next = o, !Ye(u, t.memoizedState) && (Jt = !0, N && (l = La, l !== null)))
        throw l;
      t.memoizedState = u, t.baseState = c, t.baseQueue = h, n.lastRenderedState = u;
    }
    return a === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function ps(t) {
    var e = Xt(), l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = t;
    var n = l.dispatch, a = l.pending, u = e.memoizedState;
    if (a !== null) {
      l.pending = null;
      var c = a = a.next;
      do
        u = t(u, c.action), c = c.next;
      while (c !== a);
      Ye(u, e.memoizedState) || (Jt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
    }
    return [u, n];
  }
  function Zf(t, e, l) {
    var n = F, a = Xt(), u = ot;
    if (u) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = e();
    var c = !Ye(
      (Tt || a).memoizedState,
      l
    );
    if (c && (a.memoizedState = l, Jt = !0), a = a.queue, Es(Jf.bind(null, n, a, t), [
      t
    ]), a.getSnapshot !== e || c || kt !== null && kt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Za(
        9,
        { destroy: void 0 },
        kf.bind(
          null,
          n,
          a,
          l,
          e
        ),
        null
      ), Rt === null) throw Error(r(349));
      u || (Vl & 127) !== 0 || Kf(n, e, l);
    }
    return l;
  }
  function Kf(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = F.updateQueue, e === null ? (e = Bi(), F.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function kf(t, e, l, n) {
    e.value = l, e.getSnapshot = n, Wf(e) && $f(t);
  }
  function Jf(t, e, l) {
    return l(function() {
      Wf(e) && $f(t);
    });
  }
  function Wf(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !Ye(t, l);
    } catch {
      return !0;
    }
  }
  function $f(t) {
    var e = Pn(t, 2);
    e !== null && qe(e, t, 2);
  }
  function bs(t) {
    var e = Ae();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), sa) {
        xe(!0);
        try {
          l();
        } finally {
          xe(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zl,
      lastRenderedState: t
    }, e;
  }
  function Ff(t, e, l, n) {
    return t.baseState = l, gs(
      t,
      Tt,
      typeof n == "function" ? n : Zl
    );
  }
  function km(t, e, l, n, a) {
    if (Yi(t)) throw Error(r(485));
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
      O.T !== null ? l(!0) : u.isTransition = !1, n(u), l = e.pending, l === null ? (u.next = e.pending = u, If(e, u)) : (u.next = l.next, e.pending = l.next = u);
    }
  }
  function If(t, e) {
    var l = e.action, n = e.payload, a = t.state;
    if (e.isTransition) {
      var u = O.T, c = {};
      O.T = c;
      try {
        var o = l(a, n), h = O.S;
        h !== null && h(c, o), Pf(t, e, o);
      } catch (b) {
        Ss(t, e, b);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), O.T = u;
      }
    } else
      try {
        u = l(a, n), Pf(t, e, u);
      } catch (b) {
        Ss(t, e, b);
      }
  }
  function Pf(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        to(t, e, n);
      },
      function(n) {
        return Ss(t, e, n);
      }
    ) : to(t, e, l);
  }
  function to(t, e, l) {
    e.status = "fulfilled", e.value = l, eo(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, If(t, l)));
  }
  function Ss(t, e, l) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        e.status = "rejected", e.reason = l, eo(e), e = e.next;
      while (e !== n);
    }
    t.action = null;
  }
  function eo(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function lo(t, e) {
    return e;
  }
  function no(t, e) {
    if (ot) {
      var l = Rt.formState;
      if (l !== null) {
        t: {
          var n = F;
          if (ot) {
            if (Ut) {
              e: {
                for (var a = Ut, u = el; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break e;
                  }
                  if (a = nl(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break e;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                Ut = nl(
                  a.nextSibling
                ), n = a.data === "F!";
                break t;
              }
            }
            An(n);
          }
          n = !1;
        }
        n && (e = l[0]);
      }
    }
    return l = Ae(), l.memoizedState = l.baseState = e, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lo,
      lastRenderedState: e
    }, l.queue = n, l = Ao.bind(
      null,
      F,
      n
    ), n.dispatch = l, n = bs(!1), u = Os.bind(
      null,
      F,
      !1,
      n.queue
    ), n = Ae(), a = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, n.queue = a, l = km.bind(
      null,
      F,
      a,
      u,
      l
    ), a.dispatch = l, n.memoizedState = t, [e, l, !1];
  }
  function ao(t) {
    var e = Xt();
    return uo(e, Tt, t);
  }
  function uo(t, e, l) {
    if (e = gs(
      t,
      e,
      lo
    )[0], t = Hi(Zl)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var n = wu(e);
      } catch (c) {
        throw c === Ya ? Ri : c;
      }
    else n = e;
    e = Xt();
    var a = e.queue, u = a.dispatch;
    return l !== e.memoizedState && (F.flags |= 2048, Za(
      9,
      { destroy: void 0 },
      Jm.bind(null, a, l),
      null
    )), [n, u, t];
  }
  function Jm(t, e) {
    t.action = e;
  }
  function io(t) {
    var e = Xt(), l = Tt;
    if (l !== null)
      return uo(e, l, t);
    Xt(), e = e.memoizedState, l = Xt();
    var n = l.queue.dispatch;
    return l.memoizedState = t, [e, n, !1];
  }
  function Za(t, e, l, n) {
    return t = { tag: t, create: l, deps: n, inst: e, next: null }, e = F.updateQueue, e === null && (e = Bi(), F.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (n = l.next, l.next = t, t.next = n, e.lastEffect = t), t;
  }
  function co() {
    return Xt().memoizedState;
  }
  function wi(t, e, l, n) {
    var a = Ae();
    F.flags |= t, a.memoizedState = Za(
      1 | e,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function Li(t, e, l, n) {
    var a = Xt();
    n = n === void 0 ? null : n;
    var u = a.memoizedState.inst;
    Tt !== null && n !== null && os(n, Tt.memoizedState.deps) ? a.memoizedState = Za(e, u, l, n) : (F.flags |= t, a.memoizedState = Za(
      1 | e,
      u,
      l,
      n
    ));
  }
  function so(t, e) {
    wi(8390656, 8, t, e);
  }
  function Es(t, e) {
    Li(2048, 8, t, e);
  }
  function Wm(t) {
    F.flags |= 4;
    var e = F.updateQueue;
    if (e === null)
      e = Bi(), F.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function ro(t) {
    var e = Xt().memoizedState;
    return Wm({ ref: e, nextImpl: t }), function() {
      if ((gt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function fo(t, e) {
    return Li(4, 2, t, e);
  }
  function oo(t, e) {
    return Li(4, 4, t, e);
  }
  function ho(t, e) {
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
  function mo(t, e, l) {
    l = l != null ? l.concat([t]) : null, Li(4, 4, ho.bind(null, e, t), l);
  }
  function _s() {
  }
  function yo(t, e) {
    var l = Xt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && os(e, n[1]) ? n[0] : (l.memoizedState = [t, e], t);
  }
  function vo(t, e) {
    var l = Xt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && os(e, n[1]))
      return n[0];
    if (n = t(), sa) {
      xe(!0);
      try {
        t();
      } finally {
        xe(!1);
      }
    }
    return l.memoizedState = [n, e], n;
  }
  function As(t, e, l) {
    return l === void 0 || (Vl & 1073741824) !== 0 && (st & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = gd(), F.lanes |= t, Un |= t, l);
  }
  function go(t, e, l, n) {
    return Ye(l, e) ? l : Xa.current !== null ? (t = As(t, l, n), Ye(t, e) || (Jt = !0), t) : (Vl & 42) === 0 || (Vl & 1073741824) !== 0 && (st & 261930) === 0 ? (Jt = !0, t.memoizedState = l) : (t = gd(), F.lanes |= t, Un |= t, e);
  }
  function po(t, e, l, n, a) {
    var u = q.p;
    q.p = u !== 0 && 8 > u ? u : 8;
    var c = O.T, o = {};
    O.T = o, Os(t, !1, e, l);
    try {
      var h = a(), b = O.S;
      if (b !== null && b(o, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var N = Vm(
          h,
          n
        );
        Lu(
          t,
          e,
          N,
          Ke(t)
        );
      } else
        Lu(
          t,
          e,
          n,
          Ke(t)
        );
    } catch (C) {
      Lu(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: C },
        Ke()
      );
    } finally {
      q.p = u, c !== null && o.types !== null && (c.types = o.types), O.T = c;
    }
  }
  function $m() {
  }
  function Ts(t, e, l, n) {
    if (t.tag !== 5) throw Error(r(476));
    var a = bo(t).queue;
    po(
      t,
      a,
      e,
      Z,
      l === null ? $m : function() {
        return So(t), l(n);
      }
    );
  }
  function bo(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zl,
        lastRenderedState: Z
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
        lastRenderedReducer: Zl,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function So(t) {
    var e = bo(t);
    e.next === null && (e = t.alternate.memoizedState), Lu(
      t,
      e.next.queue,
      {},
      Ke()
    );
  }
  function Ns() {
    return de(li);
  }
  function Eo() {
    return Xt().memoizedState;
  }
  function _o() {
    return Xt().memoizedState;
  }
  function Fm(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Ke();
          t = On(l);
          var n = Rn(e, t, l);
          n !== null && (qe(n, e, l), xu(n, e, l)), e = { cache: ts() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Im(t, e, l) {
    var n = Ke();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Yi(t) ? To(e, l) : (l = Qc(t, e, l, n), l !== null && (qe(l, t, n), No(l, e, n)));
  }
  function Ao(t, e, l) {
    var n = Ke();
    Lu(t, e, l, n);
  }
  function Lu(t, e, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Yi(t)) To(e, a);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var c = e.lastRenderedState, o = u(c, l);
          if (a.hasEagerState = !0, a.eagerState = o, Ye(o, c))
            return Si(t, e, a, 0), Rt === null && bi(), !1;
        } catch {
        }
      if (l = Qc(t, e, a, n), l !== null)
        return qe(l, t, n), No(l, e, n), !0;
    }
    return !1;
  }
  function Os(t, e, l, n) {
    if (n = {
      lane: 2,
      revertLane: ar(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Yi(t)) {
      if (e) throw Error(r(479));
    } else
      e = Qc(
        t,
        l,
        n,
        2
      ), e !== null && qe(e, t, 2);
  }
  function Yi(t) {
    var e = t.alternate;
    return t === F || e !== null && e === F;
  }
  function To(t, e) {
    Qa = qi = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function No(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, Sl(t, l);
    }
  }
  var Yu = {
    readContext: de,
    use: ji,
    useCallback: Bt,
    useContext: Bt,
    useEffect: Bt,
    useImperativeHandle: Bt,
    useLayoutEffect: Bt,
    useInsertionEffect: Bt,
    useMemo: Bt,
    useReducer: Bt,
    useRef: Bt,
    useState: Bt,
    useDebugValue: Bt,
    useDeferredValue: Bt,
    useTransition: Bt,
    useSyncExternalStore: Bt,
    useId: Bt,
    useHostTransitionStatus: Bt,
    useFormState: Bt,
    useActionState: Bt,
    useOptimistic: Bt,
    useMemoCache: Bt,
    useCacheRefresh: Bt
  };
  Yu.useEffectEvent = Bt;
  var Oo = {
    readContext: de,
    use: ji,
    useCallback: function(t, e) {
      return Ae().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: de,
    useEffect: so,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, wi(
        4194308,
        4,
        ho.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return wi(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      wi(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = Ae();
      e = e === void 0 ? null : e;
      var n = t();
      if (sa) {
        xe(!0);
        try {
          t();
        } finally {
          xe(!1);
        }
      }
      return l.memoizedState = [n, e], n;
    },
    useReducer: function(t, e, l) {
      var n = Ae();
      if (l !== void 0) {
        var a = l(e);
        if (sa) {
          xe(!0);
          try {
            l(e);
          } finally {
            xe(!1);
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
      var e = Ae();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = bs(t);
      var e = t.queue, l = Ao.bind(null, F, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: _s,
    useDeferredValue: function(t, e) {
      var l = Ae();
      return As(l, t, e);
    },
    useTransition: function() {
      var t = bs(!1);
      return t = po.bind(
        null,
        F,
        t.queue,
        !0,
        !1
      ), Ae().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var n = F, a = Ae();
      if (ot) {
        if (l === void 0)
          throw Error(r(407));
        l = l();
      } else {
        if (l = e(), Rt === null)
          throw Error(r(349));
        (st & 127) !== 0 || Kf(n, e, l);
      }
      a.memoizedState = l;
      var u = { value: l, getSnapshot: e };
      return a.queue = u, so(Jf.bind(null, n, u, t), [
        t
      ]), n.flags |= 2048, Za(
        9,
        { destroy: void 0 },
        kf.bind(
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
      var t = Ae(), e = Rt.identifierPrefix;
      if (ot) {
        var l = zl, n = Rl;
        l = (n & ~(1 << 32 - te(n) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = xi++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = Zm++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Ns,
    useFormState: no,
    useActionState: no,
    useOptimistic: function(t) {
      var e = Ae();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = Os.bind(
        null,
        F,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: vs,
    useCacheRefresh: function() {
      return Ae().memoizedState = Fm.bind(
        null,
        F
      );
    },
    useEffectEvent: function(t) {
      var e = Ae(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((gt & 2) !== 0)
          throw Error(r(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Rs = {
    readContext: de,
    use: ji,
    useCallback: yo,
    useContext: de,
    useEffect: Es,
    useImperativeHandle: mo,
    useInsertionEffect: fo,
    useLayoutEffect: oo,
    useMemo: vo,
    useReducer: Hi,
    useRef: co,
    useState: function() {
      return Hi(Zl);
    },
    useDebugValue: _s,
    useDeferredValue: function(t, e) {
      var l = Xt();
      return go(
        l,
        Tt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Hi(Zl)[0], e = Xt().memoizedState;
      return [
        typeof t == "boolean" ? t : wu(t),
        e
      ];
    },
    useSyncExternalStore: Zf,
    useId: Eo,
    useHostTransitionStatus: Ns,
    useFormState: ao,
    useActionState: ao,
    useOptimistic: function(t, e) {
      var l = Xt();
      return Ff(l, Tt, t, e);
    },
    useMemoCache: vs,
    useCacheRefresh: _o
  };
  Rs.useEffectEvent = ro;
  var Ro = {
    readContext: de,
    use: ji,
    useCallback: yo,
    useContext: de,
    useEffect: Es,
    useImperativeHandle: mo,
    useInsertionEffect: fo,
    useLayoutEffect: oo,
    useMemo: vo,
    useReducer: ps,
    useRef: co,
    useState: function() {
      return ps(Zl);
    },
    useDebugValue: _s,
    useDeferredValue: function(t, e) {
      var l = Xt();
      return Tt === null ? As(l, t, e) : go(
        l,
        Tt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ps(Zl)[0], e = Xt().memoizedState;
      return [
        typeof t == "boolean" ? t : wu(t),
        e
      ];
    },
    useSyncExternalStore: Zf,
    useId: Eo,
    useHostTransitionStatus: Ns,
    useFormState: io,
    useActionState: io,
    useOptimistic: function(t, e) {
      var l = Xt();
      return Tt !== null ? Ff(l, Tt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: vs,
    useCacheRefresh: _o
  };
  Ro.useEffectEvent = ro;
  function zs(t, e, l, n) {
    e = t.memoizedState, l = l(n, e), l = l == null ? e : Y({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Ms = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var n = Ke(), a = On(n);
      a.payload = e, l != null && (a.callback = l), e = Rn(t, a, n), e !== null && (qe(e, t, n), xu(e, t, n));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var n = Ke(), a = On(n);
      a.tag = 1, a.payload = e, l != null && (a.callback = l), e = Rn(t, a, n), e !== null && (qe(e, t, n), xu(e, t, n));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = Ke(), n = On(l);
      n.tag = 2, e != null && (n.callback = e), e = Rn(t, n, l), e !== null && (qe(e, t, l), xu(e, t, l));
    }
  };
  function zo(t, e, l, n, a, u, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, u, c) : e.prototype && e.prototype.isPureReactComponent ? !Ou(l, n) || !Ou(a, u) : !0;
  }
  function Mo(t, e, l, n) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, n), e.state !== t && Ms.enqueueReplaceState(e, e.state, null);
  }
  function ra(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var n in e)
        n !== "ref" && (l[n] = e[n]);
    }
    if (t = t.defaultProps) {
      l === e && (l = Y({}, l));
      for (var a in t)
        l[a] === void 0 && (l[a] = t[a]);
    }
    return l;
  }
  function Co(t) {
    pi(t);
  }
  function Do(t) {
    console.error(t);
  }
  function Uo(t) {
    pi(t);
  }
  function Gi(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function qo(t, e, l) {
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
  function Cs(t, e, l) {
    return l = On(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Gi(t, e);
    }, l;
  }
  function xo(t) {
    return t = On(t), t.tag = 3, t;
  }
  function Bo(t, e, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = n.value;
      t.payload = function() {
        return a(u);
      }, t.callback = function() {
        qo(e, l, n);
      };
    }
    var c = l.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      qo(e, l, n), typeof a != "function" && (qn === null ? qn = /* @__PURE__ */ new Set([this]) : qn.add(this));
      var o = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function Pm(t, e, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (e = l.alternate, e !== null && Ha(
        e,
        l,
        a,
        !0
      ), l = Xe.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return ll === null ? Pi() : l.alternate === null && jt === 0 && (jt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === zi ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : e.add(n), er(t, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === zi ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), er(t, n, a)), !1;
        }
        throw Error(r(435, l.tag));
      }
      return er(t, n, a), Pi(), !1;
    }
    if (ot)
      return e = Xe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = a, n !== Wc && (t = Error(r(422), { cause: n }), Mu(Ie(t, l)))) : (n !== Wc && (e = Error(r(423), {
        cause: n
      }), Mu(
        Ie(e, l)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, n = Ie(n, l), a = Cs(
        t.stateNode,
        n,
        a
      ), is(t, a), jt !== 4 && (jt = 2)), !1;
    var u = Error(r(520), { cause: n });
    if (u = Ie(u, l), Ju === null ? Ju = [u] : Ju.push(u), jt !== 4 && (jt = 2), e === null) return !0;
    n = Ie(n, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = a & -a, l.lanes |= t, t = Cs(l.stateNode, n, t), is(l, t), !1;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (qn === null || !qn.has(u))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = xo(a), Bo(
              a,
              t,
              l,
              n
            ), is(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Ds = Error(r(461)), Jt = !1;
  function he(t, e, l, n) {
    e.child = t === null ? wf(e, null, l, n) : ca(
      e,
      t.child,
      l,
      n
    );
  }
  function jo(t, e, l, n, a) {
    l = l.render;
    var u = e.ref;
    if ("ref" in n) {
      var c = {};
      for (var o in n)
        o !== "ref" && (c[o] = n[o]);
    } else c = n;
    return na(e), n = ds(
      t,
      e,
      l,
      c,
      u,
      a
    ), o = hs(), t !== null && !Jt ? (ms(t, e, a), Kl(t, e, a)) : (ot && o && kc(e), e.flags |= 1, he(t, e, n, a), e.child);
  }
  function Ho(t, e, l, n, a) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !Vc(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, wo(
        t,
        e,
        u,
        n,
        a
      )) : (t = _i(
        l.type,
        null,
        n,
        e,
        e.mode,
        a
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !Ls(t, a)) {
      var c = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Ou, l(c, n) && t.ref === e.ref)
        return Kl(t, e, a);
    }
    return e.flags |= 1, t = Yl(u, n), t.ref = e.ref, t.return = e, e.child = t;
  }
  function wo(t, e, l, n, a) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Ou(u, n) && t.ref === e.ref)
        if (Jt = !1, e.pendingProps = n = u, Ls(t, a))
          (t.flags & 131072) !== 0 && (Jt = !0);
        else
          return e.lanes = t.lanes, Kl(t, e, a);
    }
    return Us(
      t,
      e,
      l,
      n,
      a
    );
  }
  function Lo(t, e, l, n) {
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
        return Yo(
          t,
          e,
          u,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Oi(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? Gf(e, u) : ss(), Xf(e);
      else
        return n = e.lanes = 536870912, Yo(
          t,
          e,
          u !== null ? u.baseLanes | l : l,
          l,
          n
        );
    } else
      u !== null ? (Oi(e, u.cachePool), Gf(e, u), Mn(), e.memoizedState = null) : (t !== null && Oi(e, null), ss(), Mn());
    return he(t, e, a, l), e.child;
  }
  function Gu(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Yo(t, e, l, n, a) {
    var u = ls();
    return u = u === null ? null : { parent: Kt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, t !== null && Oi(e, null), ss(), Xf(e), t !== null && Ha(t, e, n, !0), e.childLanes = a, null;
  }
  function Xi(t, e) {
    return e = Vi(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Go(t, e, l) {
    return ca(e, t.child, null, l), t = Xi(e, e.pendingProps), t.flags |= 2, Qe(e), e.memoizedState = null, t;
  }
  function ty(t, e, l) {
    var n = e.pendingProps, a = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (ot) {
        if (n.mode === "hidden")
          return t = Xi(e, n), e.lanes = 536870912, Gu(null, t);
        if (fs(e), (t = Ut) ? (t = Pd(
          t,
          el
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: En !== null ? { id: Rl, overflow: zl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Af(t), l.return = e, e.child = l, oe = e, Ut = null)) : t = null, t === null) throw An(e);
        return e.lanes = 536870912, null;
      }
      return Xi(e, n);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (fs(e), a)
        if (e.flags & 256)
          e.flags &= -257, e = Go(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (Jt || Ha(t, e, l, !1), a = (l & t.childLanes) !== 0, Jt || a) {
        if (n = Rt, n !== null && (c = di(n, l), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, Pn(t, c), qe(n, t, c), Ds;
        Pi(), e = Go(
          t,
          e,
          l
        );
      } else
        t = u.treeContext, Ut = nl(c.nextSibling), oe = e, ot = !0, _n = null, el = !1, t !== null && Of(e, t), e = Xi(e, n), e.flags |= 4096;
      return e;
    }
    return t = Yl(t.child, {
      mode: n.mode,
      children: n.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Qi(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(r(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Us(t, e, l, n, a) {
    return na(e), l = ds(
      t,
      e,
      l,
      n,
      void 0,
      a
    ), n = hs(), t !== null && !Jt ? (ms(t, e, a), Kl(t, e, a)) : (ot && n && kc(e), e.flags |= 1, he(t, e, l, a), e.child);
  }
  function Xo(t, e, l, n, a, u) {
    return na(e), e.updateQueue = null, l = Vf(
      e,
      n,
      l,
      a
    ), Qf(t), n = hs(), t !== null && !Jt ? (ms(t, e, u), Kl(t, e, u)) : (ot && n && kc(e), e.flags |= 1, he(t, e, l, u), e.child);
  }
  function Qo(t, e, l, n, a) {
    if (na(e), e.stateNode === null) {
      var u = qa, c = l.contextType;
      typeof c == "object" && c !== null && (u = de(c)), u = new l(n, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Ms, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = n, u.state = e.memoizedState, u.refs = {}, as(e), c = l.contextType, u.context = typeof c == "object" && c !== null ? de(c) : qa, u.state = e.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (zs(
        e,
        l,
        c,
        n
      ), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && Ms.enqueueReplaceState(u, u.state, null), ju(e, n, u, a), Bu(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), n = !0;
    } else if (t === null) {
      u = e.stateNode;
      var o = e.memoizedProps, h = ra(l, o);
      u.props = h;
      var b = u.context, N = l.contextType;
      c = qa, typeof N == "object" && N !== null && (c = de(N));
      var C = l.getDerivedStateFromProps;
      N = typeof C == "function" || typeof u.getSnapshotBeforeUpdate == "function", o = e.pendingProps !== o, N || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o || b !== c) && Mo(
        e,
        u,
        n,
        c
      ), Nn = !1;
      var S = e.memoizedState;
      u.state = S, ju(e, n, u, a), Bu(), b = e.memoizedState, o || S !== b || Nn ? (typeof C == "function" && (zs(
        e,
        l,
        C,
        n
      ), b = e.memoizedState), (h = Nn || zo(
        e,
        l,
        h,
        n,
        S,
        b,
        c
      )) ? (N || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = b), u.props = n, u.state = b, u.context = c, n = h) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
    } else {
      u = e.stateNode, us(t, e), c = e.memoizedProps, N = ra(l, c), u.props = N, C = e.pendingProps, S = u.context, b = l.contextType, h = qa, typeof b == "object" && b !== null && (h = de(b)), o = l.getDerivedStateFromProps, (b = typeof o == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== C || S !== h) && Mo(
        e,
        u,
        n,
        h
      ), Nn = !1, S = e.memoizedState, u.state = S, ju(e, n, u, a), Bu();
      var _ = e.memoizedState;
      c !== C || S !== _ || Nn || t !== null && t.dependencies !== null && Ti(t.dependencies) ? (typeof o == "function" && (zs(
        e,
        l,
        o,
        n
      ), _ = e.memoizedState), (N = Nn || zo(
        e,
        l,
        N,
        n,
        S,
        _,
        h
      ) || t !== null && t.dependencies !== null && Ti(t.dependencies)) ? (b || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(n, _, h), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        n,
        _,
        h
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = _), u.props = n, u.state = _, u.context = h, n = N) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), n = !1);
    }
    return u = n, Qi(t, e), n = (e.flags & 128) !== 0, u || n ? (u = e.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && n ? (e.child = ca(
      e,
      t.child,
      null,
      a
    ), e.child = ca(
      e,
      null,
      l,
      a
    )) : he(t, e, l, a), e.memoizedState = u.state, t = e.child) : t = Kl(
      t,
      e,
      a
    ), t;
  }
  function Vo(t, e, l, n) {
    return ea(), e.flags |= 256, he(t, e, l, n), e.child;
  }
  var qs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function xs(t) {
    return { baseLanes: t, cachePool: Uf() };
  }
  function Bs(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Ze), t;
  }
  function Zo(t, e, l) {
    var n = e.pendingProps, a = !1, u = (e.flags & 128) !== 0, c;
    if ((c = u) || (c = t !== null && t.memoizedState === null ? !1 : (Gt.current & 2) !== 0), c && (a = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (ot) {
        if (a ? zn(e) : Mn(), (t = Ut) ? (t = Pd(
          t,
          el
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: En !== null ? { id: Rl, overflow: zl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Af(t), l.return = e, e.child = l, oe = e, Ut = null)) : t = null, t === null) throw An(e);
        return gr(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var o = n.children;
      return n = n.fallback, a ? (Mn(), a = e.mode, o = Vi(
        { mode: "hidden", children: o },
        a
      ), n = ta(
        n,
        a,
        l,
        null
      ), o.return = e, n.return = e, o.sibling = n, e.child = o, n = e.child, n.memoizedState = xs(l), n.childLanes = Bs(
        t,
        c,
        l
      ), e.memoizedState = qs, Gu(null, n)) : (zn(e), js(e, o));
    }
    var h = t.memoizedState;
    if (h !== null && (o = h.dehydrated, o !== null)) {
      if (u)
        e.flags & 256 ? (zn(e), e.flags &= -257, e = Hs(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (Mn(), e.child = t.child, e.flags |= 128, e = null) : (Mn(), o = n.fallback, a = e.mode, n = Vi(
          { mode: "visible", children: n.children },
          a
        ), o = ta(
          o,
          a,
          l,
          null
        ), o.flags |= 2, n.return = e, o.return = e, n.sibling = o, e.child = n, ca(
          e,
          t.child,
          null,
          l
        ), n = e.child, n.memoizedState = xs(l), n.childLanes = Bs(
          t,
          c,
          l
        ), e.memoizedState = qs, e = Gu(null, n));
      else if (zn(e), gr(o)) {
        if (c = o.nextSibling && o.nextSibling.dataset, c) var b = c.dgst;
        c = b, n = Error(r(419)), n.stack = "", n.digest = c, Mu({ value: n, source: null, stack: null }), e = Hs(
          t,
          e,
          l
        );
      } else if (Jt || Ha(t, e, l, !1), c = (l & t.childLanes) !== 0, Jt || c) {
        if (c = Rt, c !== null && (n = di(c, l), n !== 0 && n !== h.retryLane))
          throw h.retryLane = n, Pn(t, n), qe(c, t, n), Ds;
        vr(o) || Pi(), e = Hs(
          t,
          e,
          l
        );
      } else
        vr(o) ? (e.flags |= 192, e.child = t.child, e = null) : (t = h.treeContext, Ut = nl(
          o.nextSibling
        ), oe = e, ot = !0, _n = null, el = !1, t !== null && Of(e, t), e = js(
          e,
          n.children
        ), e.flags |= 4096);
      return e;
    }
    return a ? (Mn(), o = n.fallback, a = e.mode, h = t.child, b = h.sibling, n = Yl(h, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = h.subtreeFlags & 65011712, b !== null ? o = Yl(
      b,
      o
    ) : (o = ta(
      o,
      a,
      l,
      null
    ), o.flags |= 2), o.return = e, n.return = e, n.sibling = o, e.child = n, Gu(null, n), n = e.child, o = t.child.memoizedState, o === null ? o = xs(l) : (a = o.cachePool, a !== null ? (h = Kt._currentValue, a = a.parent !== h ? { parent: h, pool: h } : a) : a = Uf(), o = {
      baseLanes: o.baseLanes | l,
      cachePool: a
    }), n.memoizedState = o, n.childLanes = Bs(
      t,
      c,
      l
    ), e.memoizedState = qs, Gu(t.child, n)) : (zn(e), l = t.child, t = l.sibling, l = Yl(l, {
      mode: "visible",
      children: n.children
    }), l.return = e, l.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function js(t, e) {
    return e = Vi(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Vi(t, e) {
    return t = Ge(22, t, null, e), t.lanes = 0, t;
  }
  function Hs(t, e, l) {
    return ca(e, t.child, null, l), t = js(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Ko(t, e, l) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e), Ic(t.return, e, l);
  }
  function ws(t, e, l, n, a, u) {
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
  function ko(t, e, l) {
    var n = e.pendingProps, a = n.revealOrder, u = n.tail;
    n = n.children;
    var c = Gt.current, o = (c & 2) !== 0;
    if (o ? (c = c & 1 | 2, e.flags |= 128) : c &= 1, H(Gt, c), he(t, e, n, l), n = ot ? zu : 0, !o && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Ko(t, l, e);
        else if (t.tag === 19)
          Ko(t, l, e);
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
          t = l.alternate, t !== null && Ui(t) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = e.child, e.child = null) : (a = l.sibling, l.sibling = null), ws(
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
          if (t = a.alternate, t !== null && Ui(t) === null) {
            e.child = a;
            break;
          }
          t = a.sibling, a.sibling = l, l = a, a = t;
        }
        ws(
          e,
          !0,
          l,
          null,
          u,
          n
        );
        break;
      case "together":
        ws(
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
  function Kl(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), Un |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (Ha(
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
      for (t = e.child, l = Yl(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = Yl(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function Ls(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Ti(t)));
  }
  function ey(t, e, l) {
    switch (e.tag) {
      case 3:
        Mt(e, e.stateNode.containerInfo), Tn(e, Kt, t.memoizedState.cache), ea();
        break;
      case 27:
      case 5:
        ln(e);
        break;
      case 4:
        Mt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Tn(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, fs(e), null;
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (zn(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? Zo(t, e, l) : (zn(e), t = Kl(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        zn(e);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (n = (l & e.childLanes) !== 0, n || (Ha(
          t,
          e,
          l,
          !1
        ), n = (l & e.childLanes) !== 0), a) {
          if (n)
            return ko(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), H(Gt, Gt.current), n) break;
        return null;
      case 22:
        return e.lanes = 0, Lo(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        Tn(e, Kt, t.memoizedState.cache);
    }
    return Kl(t, e, l);
  }
  function Jo(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Jt = !0;
      else {
        if (!Ls(t, l) && (e.flags & 128) === 0)
          return Jt = !1, ey(
            t,
            e,
            l
          );
        Jt = (t.flags & 131072) !== 0;
      }
    else
      Jt = !1, ot && (e.flags & 1048576) !== 0 && Nf(e, zu, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (t = ua(e.elementType), e.type = t, typeof t == "function")
            Vc(t) ? (n = ra(t, n), e.tag = 1, e = Qo(
              null,
              e,
              t,
              n,
              l
            )) : (e.tag = 0, e = Us(
              null,
              e,
              t,
              n,
              l
            ));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === ae) {
                e.tag = 11, e = jo(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              } else if (a === I) {
                e.tag = 14, e = Ho(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              }
            }
            throw e = fe(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return Us(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return n = e.type, a = ra(
          n,
          e.pendingProps
        ), Qo(
          t,
          e,
          n,
          a,
          l
        );
      case 3:
        t: {
          if (Mt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          n = e.pendingProps;
          var u = e.memoizedState;
          a = u.element, us(t, e), ju(e, n, null, l);
          var c = e.memoizedState;
          if (n = c.cache, Tn(e, Kt, n), n !== u.cache && Pc(
            e,
            [Kt],
            l,
            !0
          ), Bu(), n = c.element, u.isDehydrated)
            if (u = {
              element: n,
              isDehydrated: !1,
              cache: c.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = Vo(
                t,
                e,
                n,
                l
              );
              break t;
            } else if (n !== a) {
              a = Ie(
                Error(r(424)),
                e
              ), Mu(a), e = Vo(
                t,
                e,
                n,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Ut = nl(t.firstChild), oe = e, ot = !0, _n = null, el = !0, l = wf(
                e,
                null,
                n,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (ea(), n === a) {
              e = Kl(
                t,
                e,
                l
              );
              break t;
            }
            he(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Qi(t, e), t === null ? (l = uh(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : ot || (l = e.type, t = e.pendingProps, n = ic(
          $.current
        ).createElement(l), n[Ct] = e, n[ce] = t, me(n, l, t), Yt(n), e.stateNode = n) : e.memoizedState = uh(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return ln(e), t === null && ot && (n = e.stateNode = lh(
          e.type,
          e.pendingProps,
          $.current
        ), oe = e, el = !0, a = Ut, Hn(e.type) ? (pr = a, Ut = nl(n.firstChild)) : Ut = a), he(
          t,
          e,
          e.pendingProps.children,
          l
        ), Qi(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && ot && ((a = n = Ut) && (n = Dy(
          n,
          e.type,
          e.pendingProps,
          el
        ), n !== null ? (e.stateNode = n, oe = e, Ut = nl(n.firstChild), el = !1, a = !0) : a = !1), a || An(e)), ln(e), a = e.type, u = e.pendingProps, c = t !== null ? t.memoizedProps : null, n = u.children, hr(a, u) ? n = null : c !== null && hr(a, c) && (e.flags |= 32), e.memoizedState !== null && (a = ds(
          t,
          e,
          Km,
          null,
          null,
          l
        ), li._currentValue = a), Qi(t, e), he(t, e, n, l), e.child;
      case 6:
        return t === null && ot && ((t = l = Ut) && (l = Uy(
          l,
          e.pendingProps,
          el
        ), l !== null ? (e.stateNode = l, oe = e, Ut = null, t = !0) : t = !1), t || An(e)), null;
      case 13:
        return Zo(t, e, l);
      case 4:
        return Mt(
          e,
          e.stateNode.containerInfo
        ), n = e.pendingProps, t === null ? e.child = ca(
          e,
          null,
          n,
          l
        ) : he(t, e, n, l), e.child;
      case 11:
        return jo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return he(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return he(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return he(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return n = e.pendingProps, Tn(e, e.type, n.value), he(t, e, n.children, l), e.child;
      case 9:
        return a = e.type._context, n = e.pendingProps.children, na(e), a = de(a), n = n(a), e.flags |= 1, he(t, e, n, l), e.child;
      case 14:
        return Ho(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return wo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return ko(t, e, l);
      case 31:
        return ty(t, e, l);
      case 22:
        return Lo(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return na(e), n = de(Kt), t === null ? (a = ls(), a === null && (a = Rt, u = ts(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= l), a = u), e.memoizedState = { parent: n, cache: a }, as(e), Tn(e, Kt, a)) : ((t.lanes & l) !== 0 && (us(t, e), ju(e, null, null, l), Bu()), a = t.memoizedState, u = e.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), Tn(e, Kt, n)) : (n = u.cache, Tn(e, Kt, n), n !== a.cache && Pc(
          e,
          [Kt],
          l,
          !0
        ))), he(
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
  function kl(t) {
    t.flags |= 4;
  }
  function Ys(t, e, l, n, a) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (a & 335544128) === a)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Ed()) t.flags |= 8192;
        else
          throw ia = zi, ns;
    } else t.flags &= -16777217;
  }
  function Wo(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !fh(e))
      if (Ed()) t.flags |= 8192;
      else
        throw ia = zi, ns;
  }
  function Zi(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? We() : 536870912, t.lanes |= e, Wa |= e);
  }
  function Xu(t, e) {
    if (!ot)
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
  function qt(t) {
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
    switch (Jc(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return qt(e), null;
      case 1:
        return qt(e), null;
      case 3:
        return l = e.stateNode, n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Ql(Kt), pt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (ja(e) ? kl(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, $c())), qt(e), null;
      case 26:
        var a = e.type, u = e.memoizedState;
        return t === null ? (kl(e), u !== null ? (qt(e), Wo(e, u)) : (qt(e), Ys(
          e,
          a,
          null,
          n,
          l
        ))) : u ? u !== t.memoizedState ? (kl(e), qt(e), Wo(e, u)) : (qt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== n && kl(e), qt(e), Ys(
          e,
          a,
          t,
          n,
          l
        )), null;
      case 27:
        if (Vn(e), l = $.current, a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && kl(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(r(166));
            return qt(e), null;
          }
          t = L.current, ja(e) ? Rf(e) : (t = lh(a, n, l), e.stateNode = t, kl(e));
        }
        return qt(e), null;
      case 5:
        if (Vn(e), a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && kl(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(r(166));
            return qt(e), null;
          }
          if (u = L.current, ja(e))
            Rf(e);
          else {
            var c = ic(
              $.current
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
            u[Ct] = e, u[ce] = n;
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
            t: switch (me(u, a, n), a) {
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
            n && kl(e);
          }
        }
        return qt(e), Ys(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== n && kl(e);
        else {
          if (typeof n != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = $.current, ja(e)) {
            if (t = e.stateNode, l = e.memoizedProps, n = null, a = oe, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            t[Ct] = e, t = !!(t.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Zd(t.nodeValue, l)), t || An(e, !0);
          } else
            t = ic(t).createTextNode(
              n
            ), t[Ct] = e, e.stateNode = t;
        }
        return qt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (n = ja(e), l !== null) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[Ct] = e;
            } else
              ea(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            qt(e), t = !1;
          } else
            l = $c(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (Qe(e), e) : (Qe(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return qt(e), null;
      case 13:
        if (n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = ja(e), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[Ct] = e;
            } else
              ea(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            qt(e), a = !1;
          } else
            a = $c(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return e.flags & 256 ? (Qe(e), e) : (Qe(e), null);
        }
        return Qe(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = n !== null, t = t !== null && t.memoizedState !== null, l && (n = e.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== a && (n.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Zi(e, e.updateQueue), qt(e), null);
      case 4:
        return pt(), t === null && sr(e.stateNode.containerInfo), qt(e), null;
      case 10:
        return Ql(e.type), qt(e), null;
      case 19:
        if (R(Gt), n = e.memoizedState, n === null) return qt(e), null;
        if (a = (e.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) Xu(n, !1);
          else {
            if (jt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = Ui(t), u !== null) {
                  for (e.flags |= 128, Xu(n, !1), t = u.updateQueue, e.updateQueue = t, Zi(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    _f(l, t), l = l.sibling;
                  return H(
                    Gt,
                    Gt.current & 1 | 2
                  ), ot && Gl(e, n.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null && _e() > $i && (e.flags |= 128, a = !0, Xu(n, !1), e.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = Ui(u), t !== null) {
              if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, Zi(e, t), Xu(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !ot)
                return qt(e), null;
            } else
              2 * _e() - n.renderingStartTime > $i && l !== 536870912 && (e.flags |= 128, a = !0, Xu(n, !1), e.lanes = 4194304);
          n.isBackwards ? (u.sibling = e.child, e.child = u) : (t = n.last, t !== null ? t.sibling = u : e.child = u, n.last = u);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = _e(), t.sibling = null, l = Gt.current, H(
          Gt,
          a ? l & 1 | 2 : l & 1
        ), ot && Gl(e, n.treeForkCount), t) : (qt(e), null);
      case 22:
      case 23:
        return Qe(e), rs(), n = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (qt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : qt(e), l = e.updateQueue, l !== null && Zi(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== l && (e.flags |= 2048), t !== null && R(aa), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Ql(Kt), qt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function ny(t, e) {
    switch (Jc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Ql(Kt), pt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Vn(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Qe(e), e.alternate === null)
            throw Error(r(340));
          ea();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Qe(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          ea();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return R(Gt), null;
      case 4:
        return pt(), null;
      case 10:
        return Ql(e.type), null;
      case 22:
      case 23:
        return Qe(e), rs(), t !== null && R(aa), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Ql(Kt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function $o(t, e) {
    switch (Jc(e), e.tag) {
      case 3:
        Ql(Kt), pt();
        break;
      case 26:
      case 27:
      case 5:
        Vn(e);
        break;
      case 4:
        pt();
        break;
      case 31:
        e.memoizedState !== null && Qe(e);
        break;
      case 13:
        Qe(e);
        break;
      case 19:
        R(Gt);
        break;
      case 10:
        Ql(e.type);
        break;
      case 22:
      case 23:
        Qe(e), rs(), t !== null && R(aa);
        break;
      case 24:
        Ql(Kt);
    }
  }
  function Qu(t, e) {
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
      _t(e, e.return, o);
    }
  }
  function Cn(t, e, l) {
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
              } catch (N) {
                _t(
                  a,
                  h,
                  N
                );
              }
            }
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (N) {
      _t(e, e.return, N);
    }
  }
  function Fo(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Yf(e, l);
      } catch (n) {
        _t(t, t.return, n);
      }
    }
  }
  function Io(t, e, l) {
    l.props = ra(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      _t(t, e, n);
    }
  }
  function Vu(t, e) {
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
      _t(t, e, a);
    }
  }
  function Ml(t, e) {
    var l = t.ref, n = t.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          _t(t, e, a);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          _t(t, e, a);
        }
      else l.current = null;
  }
  function Po(t) {
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
      _t(t, t.return, a);
    }
  }
  function Gs(t, e, l) {
    try {
      var n = t.stateNode;
      Ny(n, t.type, l, e), n[ce] = e;
    } catch (a) {
      _t(t, t.return, a);
    }
  }
  function td(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Hn(t.type) || t.tag === 4;
  }
  function Xs(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || td(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Hn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Qs(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = ol));
    else if (n !== 4 && (n === 27 && Hn(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (Qs(t, e, l), t = t.sibling; t !== null; )
        Qs(t, e, l), t = t.sibling;
  }
  function Ki(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (n !== 4 && (n === 27 && Hn(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Ki(t, e, l), t = t.sibling; t !== null; )
        Ki(t, e, l), t = t.sibling;
  }
  function ed(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var n = t.type, a = e.attributes; a.length; )
        e.removeAttributeNode(a[0]);
      me(e, n, l), e[Ct] = t, e[ce] = l;
    } catch (u) {
      _t(t, t.return, u);
    }
  }
  var Jl = !1, Wt = !1, Vs = !1, ld = typeof WeakSet == "function" ? WeakSet : Set, se = null;
  function ay(t, e) {
    if (t = t.containerInfo, or = hc, t = hf(t), Hc(t)) {
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
            var c = 0, o = -1, h = -1, b = 0, N = 0, C = t, S = null;
            e: for (; ; ) {
              for (var _; C !== l || a !== 0 && C.nodeType !== 3 || (o = c + a), C !== u || n !== 0 && C.nodeType !== 3 || (h = c + n), C.nodeType === 3 && (c += C.nodeValue.length), (_ = C.firstChild) !== null; )
                S = C, C = _;
              for (; ; ) {
                if (C === t) break e;
                if (S === l && ++b === a && (o = c), S === u && ++N === n && (h = c), (_ = C.nextSibling) !== null) break;
                C = S, S = C.parentNode;
              }
              C = _;
            }
            l = o === -1 || h === -1 ? null : { start: o, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (dr = { focusedElem: t, selectionRange: l }, hc = !1, se = e; se !== null; )
      if (e = se, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, se = t;
      else
        for (; se !== null; ) {
          switch (e = se, u = e.alternate, t = e.flags, e.tag) {
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
                  var w = ra(
                    l.type,
                    a
                  );
                  t = n.getSnapshotBeforeUpdate(
                    w,
                    u
                  ), n.__reactInternalSnapshotBeforeUpdate = t;
                } catch (K) {
                  _t(
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
                  yr(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      yr(t);
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
            t.return = e.return, se = t;
            break;
          }
          se = e.return;
        }
  }
  function nd(t, e, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        $l(t, l), n & 4 && Qu(5, l);
        break;
      case 1:
        if ($l(t, l), n & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (c) {
              _t(l, l.return, c);
            }
          else {
            var a = ra(
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
              _t(
                l,
                l.return,
                c
              );
            }
          }
        n & 64 && Fo(l), n & 512 && Vu(l, l.return);
        break;
      case 3:
        if ($l(t, l), n & 64 && (t = l.updateQueue, t !== null)) {
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
            Yf(t, e);
          } catch (c) {
            _t(l, l.return, c);
          }
        }
        break;
      case 27:
        e === null && n & 4 && ed(l);
      case 26:
      case 5:
        $l(t, l), e === null && n & 4 && Po(l), n & 512 && Vu(l, l.return);
        break;
      case 12:
        $l(t, l);
        break;
      case 31:
        $l(t, l), n & 4 && id(t, l);
        break;
      case 13:
        $l(t, l), n & 4 && cd(t, l), n & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = hy.bind(
          null,
          l
        ), qy(t, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || Jl, !n) {
          e = e !== null && e.memoizedState !== null || Wt, a = Jl;
          var u = Wt;
          Jl = n, (Wt = e) && !u ? Fl(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : $l(t, l), Jl = a, Wt = u;
        }
        break;
      case 30:
        break;
      default:
        $l(t, l);
    }
  }
  function ad(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, ad(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && _l(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var xt = null, Me = !1;
  function Wl(t, e, l) {
    for (l = l.child; l !== null; )
      ud(t, e, l), l = l.sibling;
  }
  function ud(t, e, l) {
    if (Zt && typeof Zt.onCommitFiberUnmount == "function")
      try {
        Zt.onCommitFiberUnmount(gl, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Wt || Ml(l, e), Wl(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Wt || Ml(l, e);
        var n = xt, a = Me;
        Hn(l.type) && (xt = l.stateNode, Me = !1), Wl(
          t,
          e,
          l
        ), Pu(l.stateNode), xt = n, Me = a;
        break;
      case 5:
        Wt || Ml(l, e);
      case 6:
        if (n = xt, a = Me, xt = null, Wl(
          t,
          e,
          l
        ), xt = n, Me = a, xt !== null)
          if (Me)
            try {
              (xt.nodeType === 9 ? xt.body : xt.nodeName === "HTML" ? xt.ownerDocument.body : xt).removeChild(l.stateNode);
            } catch (u) {
              _t(
                l,
                e,
                u
              );
            }
          else
            try {
              xt.removeChild(l.stateNode);
            } catch (u) {
              _t(
                l,
                e,
                u
              );
            }
        break;
      case 18:
        xt !== null && (Me ? (t = xt, Fd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), nu(t)) : Fd(xt, l.stateNode));
        break;
      case 4:
        n = xt, a = Me, xt = l.stateNode.containerInfo, Me = !0, Wl(
          t,
          e,
          l
        ), xt = n, Me = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Cn(2, l, e), Wt || Cn(4, l, e), Wl(
          t,
          e,
          l
        );
        break;
      case 1:
        Wt || (Ml(l, e), n = l.stateNode, typeof n.componentWillUnmount == "function" && Io(
          l,
          e,
          n
        )), Wl(
          t,
          e,
          l
        );
        break;
      case 21:
        Wl(
          t,
          e,
          l
        );
        break;
      case 22:
        Wt = (n = Wt) || l.memoizedState !== null, Wl(
          t,
          e,
          l
        ), Wt = n;
        break;
      default:
        Wl(
          t,
          e,
          l
        );
    }
  }
  function id(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        nu(t);
      } catch (l) {
        _t(e, e.return, l);
      }
    }
  }
  function cd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        nu(t);
      } catch (l) {
        _t(e, e.return, l);
      }
  }
  function uy(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new ld()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new ld()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function ki(t, e) {
    var l = uy(t);
    e.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = my.bind(null, t, n);
        n.then(a, a);
      }
    });
  }
  function Ce(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], u = t, c = e, o = c;
        t: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (Hn(o.type)) {
                xt = o.stateNode, Me = !1;
                break t;
              }
              break;
            case 5:
              xt = o.stateNode, Me = !1;
              break t;
            case 3:
            case 4:
              xt = o.stateNode.containerInfo, Me = !0;
              break t;
          }
          o = o.return;
        }
        if (xt === null) throw Error(r(160));
        ud(u, c, a), xt = null, Me = !1, u = a.alternate, u !== null && (u.return = null), a.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        sd(e, t), e = e.sibling;
  }
  var ml = null;
  function sd(t, e) {
    var l = t.alternate, n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ce(e, t), De(t), n & 4 && (Cn(3, t, t.return), Qu(3, t), Cn(5, t, t.return));
        break;
      case 1:
        Ce(e, t), De(t), n & 512 && (Wt || l === null || Ml(l, l.return)), n & 64 && Jl && (t = t.updateQueue, t !== null && (n = t.callbacks, n !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = ml;
        if (Ce(e, t), De(t), n & 512 && (Wt || l === null || Ml(l, l.return)), n & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (n = t.memoizedState, l === null)
            if (n === null)
              if (t.stateNode === null) {
                t: {
                  n = t.type, l = t.memoizedProps, a = a.ownerDocument || a;
                  e: switch (n) {
                    case "title":
                      u = a.getElementsByTagName("title")[0], (!u || u[fn] || u[Ct] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(n), a.head.insertBefore(
                        u,
                        a.querySelector("head > title")
                      )), me(u, n, l), u[Ct] = t, Yt(u), n = u;
                      break t;
                    case "link":
                      var c = sh(
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
                      u = a.createElement(n), me(u, n, l), a.head.appendChild(u);
                      break;
                    case "meta":
                      if (c = sh(
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
                      u = a.createElement(n), me(u, n, l), a.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, n));
                  }
                  u[Ct] = t, Yt(u), n = u;
                }
                t.stateNode = n;
              } else
                rh(
                  a,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = ch(
                a,
                n,
                t.memoizedProps
              );
          else
            u !== n ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, n === null ? rh(
              a,
              t.type,
              t.stateNode
            ) : ch(
              a,
              n,
              t.memoizedProps
            )) : n === null && t.stateNode !== null && Gs(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        Ce(e, t), De(t), n & 512 && (Wt || l === null || Ml(l, l.return)), l !== null && n & 4 && Gs(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (Ce(e, t), De(t), n & 512 && (Wt || l === null || Ml(l, l.return)), t.flags & 32) {
          a = t.stateNode;
          try {
            we(a, "");
          } catch (w) {
            _t(t, t.return, w);
          }
        }
        n & 4 && t.stateNode != null && (a = t.memoizedProps, Gs(
          t,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (Vs = !0);
        break;
      case 6:
        if (Ce(e, t), De(t), n & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          n = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = n;
          } catch (w) {
            _t(t, t.return, w);
          }
        }
        break;
      case 3:
        if (rc = null, a = ml, ml = cc(e.containerInfo), Ce(e, t), ml = a, De(t), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            nu(e.containerInfo);
          } catch (w) {
            _t(t, t.return, w);
          }
        Vs && (Vs = !1, rd(t));
        break;
      case 4:
        n = ml, ml = cc(
          t.stateNode.containerInfo
        ), Ce(e, t), De(t), ml = n;
        break;
      case 12:
        Ce(e, t), De(t);
        break;
      case 31:
        Ce(e, t), De(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, ki(t, n)));
        break;
      case 13:
        Ce(e, t), De(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Wi = _e()), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, ki(t, n)));
        break;
      case 22:
        a = t.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null, b = Jl, N = Wt;
        if (Jl = b || a, Wt = N || h, Ce(e, t), Wt = N, Jl = b, De(t), n & 8192)
          t: for (e = t.stateNode, e._visibility = a ? e._visibility & -2 : e._visibility | 1, a && (l === null || h || Jl || Wt || fa(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                h = l = e;
                try {
                  if (u = h.stateNode, a)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    o = h.stateNode;
                    var C = h.memoizedProps.style, S = C != null && C.hasOwnProperty("display") ? C.display : null;
                    o.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (w) {
                  _t(h, h.return, w);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                h = e;
                try {
                  h.stateNode.nodeValue = a ? "" : h.memoizedProps;
                } catch (w) {
                  _t(h, h.return, w);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                h = e;
                try {
                  var _ = h.stateNode;
                  a ? Id(_, !0) : Id(h.stateNode, !1);
                } catch (w) {
                  _t(h, h.return, w);
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
        n & 4 && (n = t.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, ki(t, l))));
        break;
      case 19:
        Ce(e, t), De(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, ki(t, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ce(e, t), De(t);
    }
  }
  function De(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, n = t.return; n !== null; ) {
          if (td(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, u = Xs(t);
            Ki(t, u, a);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (we(c, ""), l.flags &= -33);
            var o = Xs(t);
            Ki(t, o, c);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo, b = Xs(t);
            Qs(
              t,
              b,
              h
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (N) {
        _t(t, t.return, N);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function rd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        rd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function $l(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        nd(t, e.alternate, e), e = e.sibling;
  }
  function fa(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Cn(4, e, e.return), fa(e);
          break;
        case 1:
          Ml(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Io(
            e,
            e.return,
            l
          ), fa(e);
          break;
        case 27:
          Pu(e.stateNode);
        case 26:
        case 5:
          Ml(e, e.return), fa(e);
          break;
        case 22:
          e.memoizedState === null && fa(e);
          break;
        case 30:
          fa(e);
          break;
        default:
          fa(e);
      }
      t = t.sibling;
    }
  }
  function Fl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate, a = t, u = e, c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Fl(
            a,
            u,
            l
          ), Qu(4, u);
          break;
        case 1:
          if (Fl(
            a,
            u,
            l
          ), n = u, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (b) {
              _t(n, n.return, b);
            }
          if (n = u, a = n.updateQueue, a !== null) {
            var o = n.stateNode;
            try {
              var h = a.shared.hiddenCallbacks;
              if (h !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < h.length; a++)
                  Lf(h[a], o);
            } catch (b) {
              _t(n, n.return, b);
            }
          }
          l && c & 64 && Fo(u), Vu(u, u.return);
          break;
        case 27:
          ed(u);
        case 26:
        case 5:
          Fl(
            a,
            u,
            l
          ), l && n === null && c & 4 && Po(u), Vu(u, u.return);
          break;
        case 12:
          Fl(
            a,
            u,
            l
          );
          break;
        case 31:
          Fl(
            a,
            u,
            l
          ), l && c & 4 && id(a, u);
          break;
        case 13:
          Fl(
            a,
            u,
            l
          ), l && c & 4 && cd(a, u);
          break;
        case 22:
          u.memoizedState === null && Fl(
            a,
            u,
            l
          ), Vu(u, u.return);
          break;
        case 30:
          break;
        default:
          Fl(
            a,
            u,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Zs(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Cu(l));
  }
  function Ks(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Cu(t));
  }
  function yl(t, e, l, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        fd(
          t,
          e,
          l,
          n
        ), e = e.sibling;
  }
  function fd(t, e, l, n) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        yl(
          t,
          e,
          l,
          n
        ), a & 2048 && Qu(9, e);
        break;
      case 1:
        yl(
          t,
          e,
          l,
          n
        );
        break;
      case 3:
        yl(
          t,
          e,
          l,
          n
        ), a & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Cu(t)));
        break;
      case 12:
        if (a & 2048) {
          yl(
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
            _t(e, e.return, h);
          }
        } else
          yl(
            t,
            e,
            l,
            n
          );
        break;
      case 31:
        yl(
          t,
          e,
          l,
          n
        );
        break;
      case 13:
        yl(
          t,
          e,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, c = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? yl(
          t,
          e,
          l,
          n
        ) : Zu(t, e) : u._visibility & 2 ? yl(
          t,
          e,
          l,
          n
        ) : (u._visibility |= 2, Ka(
          t,
          e,
          l,
          n,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && Zs(c, e);
        break;
      case 24:
        yl(
          t,
          e,
          l,
          n
        ), a & 2048 && Ks(e.alternate, e);
        break;
      default:
        yl(
          t,
          e,
          l,
          n
        );
    }
  }
  function Ka(t, e, l, n, a) {
    for (a = a && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, c = e, o = l, h = n, b = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Ka(
            u,
            c,
            o,
            h,
            a
          ), Qu(8, c);
          break;
        case 23:
          break;
        case 22:
          var N = c.stateNode;
          c.memoizedState !== null ? N._visibility & 2 ? Ka(
            u,
            c,
            o,
            h,
            a
          ) : Zu(
            u,
            c
          ) : (N._visibility |= 2, Ka(
            u,
            c,
            o,
            h,
            a
          )), a && b & 2048 && Zs(
            c.alternate,
            c
          );
          break;
        case 24:
          Ka(
            u,
            c,
            o,
            h,
            a
          ), a && b & 2048 && Ks(c.alternate, c);
          break;
        default:
          Ka(
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
  function Zu(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, n = e, a = n.flags;
        switch (n.tag) {
          case 22:
            Zu(l, n), a & 2048 && Zs(
              n.alternate,
              n
            );
            break;
          case 24:
            Zu(l, n), a & 2048 && Ks(n.alternate, n);
            break;
          default:
            Zu(l, n);
        }
        e = e.sibling;
      }
  }
  var Ku = 8192;
  function ka(t, e, l) {
    if (t.subtreeFlags & Ku)
      for (t = t.child; t !== null; )
        od(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function od(t, e, l) {
    switch (t.tag) {
      case 26:
        ka(
          t,
          e,
          l
        ), t.flags & Ku && t.memoizedState !== null && Zy(
          l,
          ml,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        ka(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var n = ml;
        ml = cc(t.stateNode.containerInfo), ka(
          t,
          e,
          l
        ), ml = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = Ku, Ku = 16777216, ka(
          t,
          e,
          l
        ), Ku = n) : ka(
          t,
          e,
          l
        ));
        break;
      default:
        ka(
          t,
          e,
          l
        );
    }
  }
  function dd(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function ku(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          se = n, md(
            n,
            t
          );
        }
      dd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        hd(t), t = t.sibling;
  }
  function hd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ku(t), t.flags & 2048 && Cn(9, t, t.return);
        break;
      case 3:
        ku(t);
        break;
      case 12:
        ku(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Ji(t)) : ku(t);
        break;
      default:
        ku(t);
    }
  }
  function Ji(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          se = n, md(
            n,
            t
          );
        }
      dd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Cn(8, e, e.return), Ji(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Ji(e));
          break;
        default:
          Ji(e);
      }
      t = t.sibling;
    }
  }
  function md(t, e) {
    for (; se !== null; ) {
      var l = se;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Cn(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Cu(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, se = n;
      else
        t: for (l = t; se !== null; ) {
          n = se;
          var a = n.sibling, u = n.return;
          if (ad(n), n === l) {
            se = null;
            break t;
          }
          if (a !== null) {
            a.return = u, se = a;
            break t;
          }
          se = u;
        }
    }
  }
  var iy = {
    getCacheForType: function(t) {
      var e = de(Kt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return de(Kt).controller.signal;
    }
  }, cy = typeof WeakMap == "function" ? WeakMap : Map, gt = 0, Rt = null, ut = null, st = 0, Et = 0, Ve = null, Dn = !1, Ja = !1, ks = !1, Il = 0, jt = 0, Un = 0, oa = 0, Js = 0, Ze = 0, Wa = 0, Ju = null, Ue = null, Ws = !1, Wi = 0, yd = 0, $i = 1 / 0, Fi = null, qn = null, ne = 0, xn = null, $a = null, Pl = 0, $s = 0, Fs = null, vd = null, Wu = 0, Is = null;
  function Ke() {
    return (gt & 2) !== 0 && st !== 0 ? st & -st : O.T !== null ? ar() : kn();
  }
  function gd() {
    if (Ze === 0)
      if ((st & 536870912) === 0 || ot) {
        var t = Je;
        Je <<= 1, (Je & 3932160) === 0 && (Je = 262144), Ze = t;
      } else Ze = 536870912;
    return t = Xe.current, t !== null && (t.flags |= 32), Ze;
  }
  function qe(t, e, l) {
    (t === Rt && (Et === 2 || Et === 9) || t.cancelPendingCommit !== null) && (Fa(t, 0), Bn(
      t,
      st,
      Ze,
      !1
    )), xl(t, l), ((gt & 2) === 0 || t !== Rt) && (t === Rt && ((gt & 2) === 0 && (oa |= l), jt === 4 && Bn(
      t,
      st,
      Ze,
      !1
    )), Cl(t));
  }
  function pd(t, e, l) {
    if ((gt & 6) !== 0) throw Error(r(327));
    var n = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Be(t, e), a = n ? fy(t, e) : tr(t, e, !0), u = n;
    do {
      if (a === 0) {
        Ja && !n && Bn(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, u && !sy(l)) {
          a = tr(t, e, !1), u = !1;
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
              a = Ju;
              var h = o.current.memoizedState.isDehydrated;
              if (h && (Fa(o, c).flags |= 256), c = tr(
                o,
                c,
                !1
              ), c !== 2) {
                if (ks && !h) {
                  o.errorRecoveryDisabledLanes |= u, oa |= u, a = 4;
                  break t;
                }
                u = Ue, Ue = a, u !== null && (Ue === null ? Ue = u : Ue.push.apply(
                  Ue,
                  u
                ));
              }
              a = c;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          Fa(t, 0), Bn(t, e, 0, !0);
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
              Bn(
                n,
                e,
                Ze,
                !Dn
              );
              break t;
            case 2:
              Ue = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (a = Wi + 300 - _e(), 10 < a)) {
            if (Bn(
              n,
              e,
              Ze,
              !Dn
            ), pl(n, 0, !0) !== 0) break t;
            Pl = e, n.timeoutHandle = Wd(
              bd.bind(
                null,
                n,
                l,
                Ue,
                Fi,
                Ws,
                e,
                Ze,
                oa,
                Wa,
                Dn,
                u,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break t;
          }
          bd(
            n,
            l,
            Ue,
            Fi,
            Ws,
            e,
            Ze,
            oa,
            Wa,
            Dn,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Cl(t);
  }
  function bd(t, e, l, n, a, u, c, o, h, b, N, C, S, _) {
    if (t.timeoutHandle = -1, C = e.subtreeFlags, C & 8192 || (C & 16785408) === 16785408) {
      C = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ol
      }, od(
        e,
        u,
        C
      );
      var w = (u & 62914560) === u ? Wi - _e() : (u & 4194048) === u ? yd - _e() : 0;
      if (w = Ky(
        C,
        w
      ), w !== null) {
        Pl = u, t.cancelPendingCommit = w(
          Rd.bind(
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
            N,
            C,
            null,
            S,
            _
          )
        ), Bn(t, u, c, !b);
        return;
      }
    }
    Rd(
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
            if (!Ye(u(), a)) return !1;
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
  function Bn(t, e, l, n) {
    e &= ~Js, e &= ~oa, t.suspendedLanes |= e, t.pingedLanes &= ~e, n && (t.warmLanes |= e), n = t.expirationTimes;
    for (var a = e; 0 < a; ) {
      var u = 31 - te(a), c = 1 << u;
      n[u] = -1, a &= ~c;
    }
    l !== 0 && bl(t, l, e);
  }
  function Ii() {
    return (gt & 6) === 0 ? ($u(0), !1) : !0;
  }
  function Ps() {
    if (ut !== null) {
      if (Et === 0)
        var t = ut.return;
      else
        t = ut, Xl = la = null, ys(t), Ga = null, Uu = 0, t = ut;
      for (; t !== null; )
        $o(t.alternate, t), t = t.return;
      ut = null;
    }
  }
  function Fa(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, zy(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Pl = 0, Ps(), Rt = t, ut = l = Yl(t.current, null), st = e, Et = 0, Ve = null, Dn = !1, Ja = Be(t, e), ks = !1, Wa = Ze = Js = oa = Un = jt = 0, Ue = Ju = null, Ws = !1, (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - te(n), u = 1 << a;
        e |= t[a], n &= ~u;
      }
    return Il = e, bi(), l;
  }
  function Sd(t, e) {
    F = null, O.H = Yu, e === Ya || e === Ri ? (e = Bf(), Et = 3) : e === ns ? (e = Bf(), Et = 4) : Et = e === Ds ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ve = e, ut === null && (jt = 1, Gi(
      t,
      Ie(e, t.current)
    ));
  }
  function Ed() {
    var t = Xe.current;
    return t === null ? !0 : (st & 4194048) === st ? ll === null : (st & 62914560) === st || (st & 536870912) !== 0 ? t === ll : !1;
  }
  function _d() {
    var t = O.H;
    return O.H = Yu, t === null ? Yu : t;
  }
  function Ad() {
    var t = O.A;
    return O.A = iy, t;
  }
  function Pi() {
    jt = 4, Dn || (st & 4194048) !== st && Xe.current !== null || (Ja = !0), (Un & 134217727) === 0 && (oa & 134217727) === 0 || Rt === null || Bn(
      Rt,
      st,
      Ze,
      !1
    );
  }
  function tr(t, e, l) {
    var n = gt;
    gt |= 2;
    var a = _d(), u = Ad();
    (Rt !== t || st !== e) && (Fi = null, Fa(t, e)), e = !1;
    var c = jt;
    t: do
      try {
        if (Et !== 0 && ut !== null) {
          var o = ut, h = Ve;
          switch (Et) {
            case 8:
              Ps(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Xe.current === null && (e = !0);
              var b = Et;
              if (Et = 0, Ve = null, Ia(t, o, h, b), l && Ja) {
                c = 0;
                break t;
              }
              break;
            default:
              b = Et, Et = 0, Ve = null, Ia(t, o, h, b);
          }
        }
        ry(), c = jt;
        break;
      } catch (N) {
        Sd(t, N);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Xl = la = null, gt = n, O.H = a, O.A = u, ut === null && (Rt = null, st = 0, bi()), c;
  }
  function ry() {
    for (; ut !== null; ) Td(ut);
  }
  function fy(t, e) {
    var l = gt;
    gt |= 2;
    var n = _d(), a = Ad();
    Rt !== t || st !== e ? (Fi = null, $i = _e() + 500, Fa(t, e)) : Ja = Be(
      t,
      e
    );
    t: do
      try {
        if (Et !== 0 && ut !== null) {
          e = ut;
          var u = Ve;
          e: switch (Et) {
            case 1:
              Et = 0, Ve = null, Ia(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (qf(u)) {
                Et = 0, Ve = null, Nd(e);
                break;
              }
              e = function() {
                Et !== 2 && Et !== 9 || Rt !== t || (Et = 7), Cl(t);
              }, u.then(e, e);
              break t;
            case 3:
              Et = 7;
              break t;
            case 4:
              Et = 5;
              break t;
            case 7:
              qf(u) ? (Et = 0, Ve = null, Nd(e)) : (Et = 0, Ve = null, Ia(t, e, u, 7));
              break;
            case 5:
              var c = null;
              switch (ut.tag) {
                case 26:
                  c = ut.memoizedState;
                case 5:
                case 27:
                  var o = ut;
                  if (c ? fh(c) : o.stateNode.complete) {
                    Et = 0, Ve = null;
                    var h = o.sibling;
                    if (h !== null) ut = h;
                    else {
                      var b = o.return;
                      b !== null ? (ut = b, tc(b)) : ut = null;
                    }
                    break e;
                  }
              }
              Et = 0, Ve = null, Ia(t, e, u, 5);
              break;
            case 6:
              Et = 0, Ve = null, Ia(t, e, u, 6);
              break;
            case 8:
              Ps(), jt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        oy();
        break;
      } catch (N) {
        Sd(t, N);
      }
    while (!0);
    return Xl = la = null, O.H = n, O.A = a, gt = l, ut !== null ? 0 : (Rt = null, st = 0, bi(), jt);
  }
  function oy() {
    for (; ut !== null && !su(); )
      Td(ut);
  }
  function Td(t) {
    var e = Jo(t.alternate, t, Il);
    t.memoizedProps = t.pendingProps, e === null ? tc(t) : ut = e;
  }
  function Nd(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Xo(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          st
        );
        break;
      case 11:
        e = Xo(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          st
        );
        break;
      case 5:
        ys(e);
      default:
        $o(l, e), e = ut = _f(e, Il), e = Jo(l, e, Il);
    }
    t.memoizedProps = t.pendingProps, e === null ? tc(t) : ut = e;
  }
  function Ia(t, e, l, n) {
    Xl = la = null, ys(e), Ga = null, Uu = 0;
    var a = e.return;
    try {
      if (Pm(
        t,
        a,
        e,
        l,
        st
      )) {
        jt = 1, Gi(
          t,
          Ie(l, t.current)
        ), ut = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw ut = a, u;
      jt = 1, Gi(
        t,
        Ie(l, t.current)
      ), ut = null;
      return;
    }
    e.flags & 32768 ? (ot || n === 1 ? t = !0 : Ja || (st & 536870912) !== 0 ? t = !1 : (Dn = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Xe.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Od(e, t)) : tc(e);
  }
  function tc(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Od(
          e,
          Dn
        );
        return;
      }
      t = e.return;
      var l = ly(
        e.alternate,
        e,
        Il
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
    jt === 0 && (jt = 5);
  }
  function Od(t, e) {
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
    jt = 6, ut = null;
  }
  function Rd(t, e, l, n, a, u, c, o, h) {
    t.cancelPendingCommit = null;
    do
      ec();
    while (ne !== 0);
    if ((gt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (u = e.lanes | e.childLanes, u |= Xc, Kn(
        t,
        l,
        u,
        c,
        o,
        h
      ), t === Rt && (ut = Rt = null, st = 0), $a = e, xn = t, Pl = l, $s = u, Fs = a, vd = n, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, yy(ga, function() {
        return Ud(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
        n = O.T, O.T = null, a = q.p, q.p = 2, c = gt, gt |= 4;
        try {
          ay(t, e, l);
        } finally {
          gt = c, q.p = a, O.T = n;
        }
      }
      ne = 1, zd(), Md(), Cd();
    }
  }
  function zd() {
    if (ne === 1) {
      ne = 0;
      var t = xn, e = $a, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = O.T, O.T = null;
        var n = q.p;
        q.p = 2;
        var a = gt;
        gt |= 4;
        try {
          sd(e, t);
          var u = dr, c = hf(t.containerInfo), o = u.focusedElem, h = u.selectionRange;
          if (c !== o && o && o.ownerDocument && df(
            o.ownerDocument.documentElement,
            o
          )) {
            if (h !== null && Hc(o)) {
              var b = h.start, N = h.end;
              if (N === void 0 && (N = b), "selectionStart" in o)
                o.selectionStart = b, o.selectionEnd = Math.min(
                  N,
                  o.value.length
                );
              else {
                var C = o.ownerDocument || document, S = C && C.defaultView || window;
                if (S.getSelection) {
                  var _ = S.getSelection(), w = o.textContent.length, K = Math.min(h.start, w), Ot = h.end === void 0 ? K : Math.min(h.end, w);
                  !_.extend && K > Ot && (c = Ot, Ot = K, K = c);
                  var v = of(
                    o,
                    K
                  ), m = of(
                    o,
                    Ot
                  );
                  if (v && m && (_.rangeCount !== 1 || _.anchorNode !== v.node || _.anchorOffset !== v.offset || _.focusNode !== m.node || _.focusOffset !== m.offset)) {
                    var p = C.createRange();
                    p.setStart(v.node, v.offset), _.removeAllRanges(), K > Ot ? (_.addRange(p), _.extend(m.node, m.offset)) : (p.setEnd(m.node, m.offset), _.addRange(p));
                  }
                }
              }
            }
            for (C = [], _ = o; _ = _.parentNode; )
              _.nodeType === 1 && C.push({
                element: _,
                left: _.scrollLeft,
                top: _.scrollTop
              });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < C.length; o++) {
              var M = C[o];
              M.element.scrollLeft = M.left, M.element.scrollTop = M.top;
            }
          }
          hc = !!or, dr = or = null;
        } finally {
          gt = a, q.p = n, O.T = l;
        }
      }
      t.current = e, ne = 2;
    }
  }
  function Md() {
    if (ne === 2) {
      ne = 0;
      var t = xn, e = $a, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = O.T, O.T = null;
        var n = q.p;
        q.p = 2;
        var a = gt;
        gt |= 4;
        try {
          nd(t, e.alternate, e);
        } finally {
          gt = a, q.p = n, O.T = l;
        }
      }
      ne = 3;
    }
  }
  function Cd() {
    if (ne === 4 || ne === 3) {
      ne = 0, un();
      var t = xn, e = $a, l = Pl, n = vd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? ne = 5 : (ne = 0, $a = xn = null, Dd(t, t.pendingLanes));
      var a = t.pendingLanes;
      if (a === 0 && (qn = null), El(l), e = e.stateNode, Zt && typeof Zt.onCommitFiberRoot == "function")
        try {
          Zt.onCommitFiberRoot(
            gl,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        e = O.T, a = q.p, q.p = 2, O.T = null;
        try {
          for (var u = t.onRecoverableError, c = 0; c < n.length; c++) {
            var o = n[c];
            u(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          O.T = e, q.p = a;
        }
      }
      (Pl & 3) !== 0 && ec(), Cl(t), a = t.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? t === Is ? Wu++ : (Wu = 0, Is = t) : Wu = 0, $u(0);
    }
  }
  function Dd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Cu(e)));
  }
  function ec() {
    return zd(), Md(), Cd(), Ud();
  }
  function Ud() {
    if (ne !== 5) return !1;
    var t = xn, e = $s;
    $s = 0;
    var l = El(Pl), n = O.T, a = q.p;
    try {
      q.p = 32 > l ? 32 : l, O.T = null, l = Fs, Fs = null;
      var u = xn, c = Pl;
      if (ne = 0, $a = xn = null, Pl = 0, (gt & 6) !== 0) throw Error(r(331));
      var o = gt;
      if (gt |= 4, hd(u.current), fd(
        u,
        u.current,
        c,
        l
      ), gt = o, $u(0, !1), Zt && typeof Zt.onPostCommitFiberRoot == "function")
        try {
          Zt.onPostCommitFiberRoot(gl, u);
        } catch {
        }
      return !0;
    } finally {
      q.p = a, O.T = n, Dd(t, e);
    }
  }
  function qd(t, e, l) {
    e = Ie(l, e), e = Cs(t.stateNode, e, 2), t = Rn(t, e, 2), t !== null && (xl(t, 2), Cl(t));
  }
  function _t(t, e, l) {
    if (t.tag === 3)
      qd(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          qd(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (qn === null || !qn.has(n))) {
            t = Ie(l, t), l = xo(2), n = Rn(e, l, 2), n !== null && (Bo(
              l,
              n,
              e,
              t
            ), xl(n, 2), Cl(n));
            break;
          }
        }
        e = e.return;
      }
  }
  function er(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new cy();
      var a = /* @__PURE__ */ new Set();
      n.set(e, a);
    } else
      a = n.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(e, a));
    a.has(l) || (ks = !0, a.add(l), t = dy.bind(null, t, e, l), e.then(t, t));
  }
  function dy(t, e, l) {
    var n = t.pingCache;
    n !== null && n.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Rt === t && (st & l) === l && (jt === 4 || jt === 3 && (st & 62914560) === st && 300 > _e() - Wi ? (gt & 2) === 0 && Fa(t, 0) : Js |= l, Wa === st && (Wa = 0)), Cl(t);
  }
  function xd(t, e) {
    e === 0 && (e = We()), t = Pn(t, e), t !== null && (xl(t, e), Cl(t));
  }
  function hy(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), xd(t, l);
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
    n !== null && n.delete(e), xd(t, l);
  }
  function yy(t, e) {
    return et(t, e);
  }
  var lc = null, Pa = null, lr = !1, nc = !1, nr = !1, jn = 0;
  function Cl(t) {
    t !== Pa && t.next === null && (Pa === null ? lc = Pa = t : Pa = Pa.next = t), nc = !0, lr || (lr = !0, gy());
  }
  function $u(t, e) {
    if (!nr && nc) {
      nr = !0;
      do
        for (var l = !1, n = lc; n !== null; ) {
          if (t !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var c = n.suspendedLanes, o = n.pingedLanes;
              u = (1 << 31 - te(42 | t) + 1) - 1, u &= a & ~(c & ~o), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, wd(n, u));
          } else
            u = st, u = pl(
              n,
              n === Rt ? u : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (u & 3) === 0 || Be(n, u) || (l = !0, wd(n, u));
          n = n.next;
        }
      while (l);
      nr = !1;
    }
  }
  function vy() {
    Bd();
  }
  function Bd() {
    nc = lr = !1;
    var t = 0;
    jn !== 0 && Ry() && (t = jn);
    for (var e = _e(), l = null, n = lc; n !== null; ) {
      var a = n.next, u = jd(n, e);
      u === 0 ? (n.next = null, l === null ? lc = a : l.next = a, a === null && (Pa = l)) : (l = n, (t !== 0 || (u & 3) !== 0) && (nc = !0)), n = a;
    }
    ne !== 0 && ne !== 5 || $u(t), jn !== 0 && (jn = 0);
  }
  function jd(t, e) {
    for (var l = t.suspendedLanes, n = t.pingedLanes, a = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - te(u), o = 1 << c, h = a[c];
      h === -1 ? ((o & l) === 0 || (o & n) !== 0) && (a[c] = fu(o, e)) : h <= e && (t.expiredLanes |= o), u &= ~o;
    }
    if (e = Rt, l = st, l = pl(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n = t.callbackNode, l === 0 || t === e && (Et === 2 || Et === 9) || t.cancelPendingCommit !== null)
      return n !== null && n !== null && il(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || Be(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (n !== null && il(n), El(l)) {
        case 2:
        case 8:
          l = va;
          break;
        case 32:
          l = ga;
          break;
        case 268435456:
          l = ve;
          break;
        default:
          l = ga;
      }
      return n = Hd.bind(null, t), l = et(l, n), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return n !== null && n !== null && il(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Hd(t, e) {
    if (ne !== 0 && ne !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (ec() && t.callbackNode !== l)
      return null;
    var n = st;
    return n = pl(
      t,
      t === Rt ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n === 0 ? null : (pd(t, n, e), jd(t, _e()), t.callbackNode != null && t.callbackNode === l ? Hd.bind(null, t) : null);
  }
  function wd(t, e) {
    if (ec()) return null;
    pd(t, e, !0);
  }
  function gy() {
    My(function() {
      (gt & 6) !== 0 ? et(
        ft,
        vy
      ) : Bd();
    });
  }
  function ar() {
    if (jn === 0) {
      var t = wa;
      t === 0 && (t = Zn, Zn <<= 1, (Zn & 261888) === 0 && (Zn = 256)), jn = t;
    }
    return jn;
  }
  function Ld(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Ra("" + t);
  }
  function Yd(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function py(t, e, l, n, a) {
    if (e === "submit" && l && l.stateNode === a) {
      var u = Ld(
        (a[ce] || null).action
      ), c = n.submitter;
      c && (e = (e = c[ce] || null) ? Ld(e.formAction) : c.getAttribute("formAction"), e !== null && (u = e, c = null));
      var o = new Q(
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
                if (jn !== 0) {
                  var h = c ? Yd(a, c) : new FormData(a);
                  Ts(
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
                typeof u == "function" && (o.preventDefault(), h = c ? Yd(a, c) : new FormData(a), Ts(
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
  for (var ur = 0; ur < Gc.length; ur++) {
    var ir = Gc[ur], by = ir.toLowerCase(), Sy = ir[0].toUpperCase() + ir.slice(1);
    hl(
      by,
      "on" + Sy
    );
  }
  hl(vf, "onAnimationEnd"), hl(gf, "onAnimationIteration"), hl(pf, "onAnimationStart"), hl("dblclick", "onDoubleClick"), hl("focusin", "onFocus"), hl("focusout", "onBlur"), hl(jm, "onTransitionRun"), hl(Hm, "onTransitionStart"), hl(wm, "onTransitionCancel"), hl(bf, "onTransitionEnd"), cl("onMouseEnter", ["mouseout", "mouseover"]), cl("onMouseLeave", ["mouseout", "mouseover"]), cl("onPointerEnter", ["pointerout", "pointerover"]), cl("onPointerLeave", ["pointerout", "pointerover"]), Hl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Hl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Hl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Hl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Hl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Hl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Fu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ey = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fu)
  );
  function Gd(t, e) {
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
            } catch (N) {
              pi(N);
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
            } catch (N) {
              pi(N);
            }
            a.currentTarget = null, u = h;
          }
      }
    }
  }
  function it(t, e) {
    var l = e[ge];
    l === void 0 && (l = e[ge] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    l.has(n) || (Xd(e, t, 2, !1), l.add(n));
  }
  function cr(t, e, l) {
    var n = 0;
    e && (n |= 4), Xd(
      l,
      t,
      n,
      e
    );
  }
  var ac = "_reactListening" + Math.random().toString(36).slice(2);
  function sr(t) {
    if (!t[ac]) {
      t[ac] = !0, mu.forEach(function(l) {
        l !== "selectionchange" && (Ey.has(l) || cr(l, !1, t), cr(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ac] || (e[ac] = !0, cr("selectionchange", !1, e));
    }
  }
  function Xd(t, e, l, n) {
    switch (gh(e)) {
      case 2:
        var a = Wy;
        break;
      case 8:
        a = $y;
        break;
      default:
        a = Ar;
    }
    l = a.bind(
      null,
      e,
      l,
      t
    ), a = void 0, !Eu || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = !0), n ? a !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: a
    }) : t.addEventListener(e, l, !0) : a !== void 0 ? t.addEventListener(e, l, {
      passive: a
    }) : t.addEventListener(e, l, !1);
  }
  function rr(t, e, l, n, a) {
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
            if (c = Lt(o), c === null) return;
            if (h = c.tag, h === 5 || h === 6 || h === 26 || h === 27) {
              n = u = c;
              continue t;
            }
            o = o.parentNode;
          }
        }
        n = n.return;
      }
    za(function() {
      var b = u, N = bu(l), C = [];
      t: {
        var S = Sf.get(t);
        if (S !== void 0) {
          var _ = Q, w = t;
          switch (t) {
            case "keypress":
              if ($n(l) === 0) break t;
            case "keydown":
            case "keyup":
              _ = mm;
              break;
            case "focusin":
              w = "focus", _ = Uc;
              break;
            case "focusout":
              w = "blur", _ = Uc;
              break;
            case "beforeblur":
            case "afterblur":
              _ = Uc;
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
              _ = ct;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = ze;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = gm;
              break;
            case vf:
            case gf:
            case pf:
              _ = um;
              break;
            case bf:
              _ = bm;
              break;
            case "scroll":
            case "scrollend":
              _ = At;
              break;
            case "wheel":
              _ = Em;
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
              _ = $r;
              break;
            case "toggle":
            case "beforetoggle":
              _ = Am;
          }
          var K = (e & 4) !== 0, Ot = !K && (t === "scroll" || t === "scrollend"), v = K ? S !== null ? S + "Capture" : null : S;
          K = [];
          for (var m = b, p; m !== null; ) {
            var M = m;
            if (p = M.stateNode, M = M.tag, M !== 5 && M !== 26 && M !== 27 || p === null || v === null || (M = Wn(m, v), M != null && K.push(
              Iu(m, M, p)
            )), Ot) break;
            m = m.return;
          }
          0 < K.length && (S = new _(
            S,
            w,
            null,
            l,
            N
          ), C.push({ event: S, listeners: K }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (S = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout", S && l !== pu && (w = l.relatedTarget || l.fromElement) && (Lt(w) || w[Oe]))
            break t;
          if ((_ || S) && (S = N.window === N ? N : (S = N.ownerDocument) ? S.defaultView || S.parentWindow : window, _ ? (w = l.relatedTarget || l.toElement, _ = b, w = w ? Lt(w) : null, w !== null && (Ot = U(w), K = w.tag, w !== Ot || K !== 5 && K !== 27 && K !== 6) && (w = null)) : (_ = null, w = b), _ !== w)) {
            if (K = ct, M = "onMouseLeave", v = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (K = $r, M = "onPointerLeave", v = "onPointerEnter", m = "pointer"), Ot = _ == null ? S : Al(_), p = w == null ? S : Al(w), S = new K(
              M,
              m + "leave",
              _,
              l,
              N
            ), S.target = Ot, S.relatedTarget = p, M = null, Lt(N) === b && (K = new K(
              v,
              m + "enter",
              w,
              l,
              N
            ), K.target = p, K.relatedTarget = Ot, M = K), Ot = M, _ && w)
              e: {
                for (K = _y, v = _, m = w, p = 0, M = v; M; M = K(M))
                  p++;
                M = 0;
                for (var V = m; V; V = K(V))
                  M++;
                for (; 0 < p - M; )
                  v = K(v), p--;
                for (; 0 < M - p; )
                  m = K(m), M--;
                for (; p--; ) {
                  if (v === m || m !== null && v === m.alternate) {
                    K = v;
                    break e;
                  }
                  v = K(v), m = K(m);
                }
                K = null;
              }
            else K = null;
            _ !== null && Qd(
              C,
              S,
              _,
              K,
              !1
            ), w !== null && Ot !== null && Qd(
              C,
              Ot,
              w,
              K,
              !0
            );
          }
        }
        t: {
          if (S = b ? Al(b) : window, _ = S.nodeName && S.nodeName.toLowerCase(), _ === "select" || _ === "input" && S.type === "file")
            var yt = af;
          else if (lf(S))
            if (uf)
              yt = qm;
            else {
              yt = Dm;
              var X = Cm;
            }
          else
            _ = S.nodeName, !_ || _.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? b && gn(b.elementType) && (yt = af) : yt = Um;
          if (yt && (yt = yt(t, b))) {
            nf(
              C,
              yt,
              l,
              N
            );
            break t;
          }
          X && X(t, S, b), t === "focusout" && b && S.type === "number" && b.memoizedProps.value != null && Na(S, "number", S.value);
        }
        switch (X = b ? Al(b) : window, t) {
          case "focusin":
            (lf(X) || X.contentEditable === "true") && (Ca = X, wc = b, Ru = null);
            break;
          case "focusout":
            Ru = wc = Ca = null;
            break;
          case "mousedown":
            Lc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Lc = !1, mf(C, l, N);
            break;
          case "selectionchange":
            if (Bm) break;
          case "keydown":
          case "keyup":
            mf(C, l, N);
        }
        var P;
        if (xc)
          t: {
            switch (t) {
              case "compositionstart":
                var rt = "onCompositionStart";
                break t;
              case "compositionend":
                rt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                rt = "onCompositionUpdate";
                break t;
            }
            rt = void 0;
          }
        else
          Ma ? tf(t, l) && (rt = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (rt = "onCompositionStart");
        rt && (Fr && l.locale !== "ko" && (Ma || rt !== "onCompositionStart" ? rt === "onCompositionEnd" && Ma && (P = vi()) : (Nl = N, _u = "value" in Nl ? Nl.value : Nl.textContent, Ma = !0)), X = uc(b, rt), 0 < X.length && (rt = new Wr(
          rt,
          t,
          null,
          l,
          N
        ), C.push({ event: rt, listeners: X }), P ? rt.data = P : (P = ef(l), P !== null && (rt.data = P)))), (P = Nm ? Om(t, l) : Rm(t, l)) && (rt = uc(b, "onBeforeInput"), 0 < rt.length && (X = new Wr(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          N
        ), C.push({
          event: X,
          listeners: rt
        }), X.data = P)), py(
          C,
          t,
          b,
          l,
          N
        );
      }
      Gd(C, e);
    });
  }
  function Iu(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function uc(t, e) {
    for (var l = e + "Capture", n = []; t !== null; ) {
      var a = t, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = Wn(t, l), a != null && n.unshift(
        Iu(t, a, u)
      ), a = Wn(t, e), a != null && n.push(
        Iu(t, a, u)
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
  function Qd(t, e, l, n, a) {
    for (var u = e._reactName, c = []; l !== null && l !== n; ) {
      var o = l, h = o.alternate, b = o.stateNode;
      if (o = o.tag, h !== null && h === n) break;
      o !== 5 && o !== 26 && o !== 27 || b === null || (h = b, a ? (b = Wn(l, u), b != null && c.unshift(
        Iu(l, b, h)
      )) : a || (b = Wn(l, u), b != null && c.push(
        Iu(l, b, h)
      ))), l = l.return;
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var Ay = /\r\n?/g, Ty = /\u0000|\uFFFD/g;
  function Vd(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ay, `
`).replace(Ty, "");
  }
  function Zd(t, e) {
    return e = Vd(e), Vd(t) === e;
  }
  function Nt(t, e, l, n, a, u) {
    switch (l) {
      case "children":
        typeof n == "string" ? e === "body" || e === "textarea" && n === "" || we(t, n) : (typeof n == "number" || typeof n == "bigint") && e !== "body" && we(t, "" + n);
        break;
      case "className":
        Jn(t, "class", n);
        break;
      case "tabIndex":
        Jn(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Jn(t, l, n);
        break;
      case "style":
        vn(t, n, u);
        break;
      case "data":
        if (e !== "object") {
          Jn(t, "data", n);
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
        n = Ra("" + n), t.setAttribute(l, n);
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
        n = Ra("" + n), t.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (t.onclick = ol);
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
        l = Ra("" + n), t.setAttributeNS(
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
        it("beforetoggle", t), it("toggle", t), fl(t, "popover", n);
        break;
      case "xlinkActuate":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        $e(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        $e(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        $e(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        $e(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        fl(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Oa.get(l) || l, fl(t, l, n));
    }
  }
  function fr(t, e, l, n, a, u) {
    switch (l) {
      case "style":
        vn(t, n, u);
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
        typeof n == "string" ? we(t, n) : (typeof n == "number" || typeof n == "bigint") && we(t, "" + n);
        break;
      case "onScroll":
        n != null && it("scroll", t);
        break;
      case "onScrollEnd":
        n != null && it("scrollend", t);
        break;
      case "onClick":
        n != null && (t.onclick = ol);
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
        if (!yu.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), e = l.slice(2, a ? l.length - 7 : void 0), u = t[ce] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, a), typeof n == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, n, a);
              break t;
            }
            l in t ? t[l] = n : n === !0 ? t.setAttribute(l, "") : fl(t, l, n);
          }
    }
  }
  function me(t, e, l) {
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
            var N = l[n];
            if (N != null)
              switch (n) {
                case "name":
                  a = N;
                  break;
                case "type":
                  c = N;
                  break;
                case "checked":
                  h = N;
                  break;
                case "defaultChecked":
                  b = N;
                  break;
                case "value":
                  u = N;
                  break;
                case "defaultValue":
                  o = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Nt(t, e, n, N, l, null);
              }
          }
        gu(
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
        e = u, l = c, t.multiple = !!n, e != null ? Ll(t, !!n, e, !1) : l != null && Ll(t, !!n, l, !0);
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
        mn(t, n, a, u);
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
        for (n = 0; n < Fu.length; n++)
          it(Fu[n], t);
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
        if (gn(e)) {
          for (N in l)
            l.hasOwnProperty(N) && (n = l[N], n !== void 0 && fr(
              t,
              e,
              N,
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
        var a = null, u = null, c = null, o = null, h = null, b = null, N = null;
        for (_ in l) {
          var C = l[_];
          if (l.hasOwnProperty(_) && C != null)
            switch (_) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = C;
              default:
                n.hasOwnProperty(_) || Nt(t, e, _, null, n, C);
            }
        }
        for (var S in n) {
          var _ = n[S];
          if (C = l[S], n.hasOwnProperty(S) && (_ != null || C != null))
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
                N = _;
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
                _ !== C && Nt(
                  t,
                  e,
                  S,
                  _,
                  n,
                  C
                );
            }
        }
        Ta(
          t,
          c,
          o,
          h,
          b,
          N,
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
        e = o, l = c, n = _, S != null ? Ll(t, !!l, S, !1) : !!n != !!l && (e != null ? Ll(t, !!l, e, !0) : Ll(t, !!l, l ? [] : "", !1));
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
        hn(t, S, _);
        return;
      case "option":
        for (var w in l)
          S = l[w], l.hasOwnProperty(w) && S != null && !n.hasOwnProperty(w) && (w === "selected" ? t.selected = !1 : Nt(
            t,
            e,
            w,
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
        if (gn(e)) {
          for (var Ot in l)
            S = l[Ot], l.hasOwnProperty(Ot) && S !== void 0 && !n.hasOwnProperty(Ot) && fr(
              t,
              e,
              Ot,
              void 0,
              n,
              S
            );
          for (N in n)
            S = n[N], _ = l[N], !n.hasOwnProperty(N) || S === _ || S === void 0 && _ === void 0 || fr(
              t,
              e,
              N,
              S,
              n,
              _
            );
          return;
        }
    }
    for (var v in l)
      S = l[v], l.hasOwnProperty(v) && S != null && !n.hasOwnProperty(v) && Nt(t, e, v, null, n, S);
    for (C in n)
      S = n[C], _ = l[C], !n.hasOwnProperty(C) || S === _ || S == null && _ == null || Nt(t, e, C, S, n, _);
  }
  function Kd(t) {
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
        if (u && o && Kd(c)) {
          for (c = 0, o = a.responseEnd, n += 1; n < l.length; n++) {
            var h = l[n], b = h.startTime;
            if (b > o) break;
            var N = h.transferSize, C = h.initiatorType;
            N && Kd(C) && (h = h.responseEnd, c += N * (h < o ? 1 : (o - b) / (h - b)));
          }
          if (--n, e += 8 * (u + c) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var or = null, dr = null;
  function ic(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function kd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Jd(t, e) {
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
  function hr(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var mr = null;
  function Ry() {
    var t = window.event;
    return t && t.type === "popstate" ? t === mr ? !1 : (mr = t, !0) : (mr = null, !1);
  }
  var Wd = typeof setTimeout == "function" ? setTimeout : void 0, zy = typeof clearTimeout == "function" ? clearTimeout : void 0, $d = typeof Promise == "function" ? Promise : void 0, My = typeof queueMicrotask == "function" ? queueMicrotask : typeof $d < "u" ? function(t) {
    return $d.resolve(null).then(t).catch(Cy);
  } : Wd;
  function Cy(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Hn(t) {
    return t === "head";
  }
  function Fd(t, e) {
    var l = e, n = 0;
    do {
      var a = l.nextSibling;
      if (t.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            t.removeChild(a), nu(e);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          Pu(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, Pu(l);
          for (var u = l.firstChild; u; ) {
            var c = u.nextSibling, o = u.nodeName;
            u[fn] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = c;
          }
        } else
          l === "body" && Pu(t.ownerDocument.body);
      l = a;
    } while (l);
    nu(e);
  }
  function Id(t, e) {
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
  function yr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          yr(l), _l(l);
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
        if (!t[fn])
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
      if (t = nl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Uy(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = nl(t.nextSibling), t === null)) return null;
    return t;
  }
  function Pd(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = nl(t.nextSibling), t === null)) return null;
    return t;
  }
  function vr(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function gr(t) {
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
  function nl(t) {
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
  var pr = null;
  function th(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return nl(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function eh(t) {
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
  function lh(t, e, l) {
    switch (e = ic(l), t) {
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
  function Pu(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    _l(t);
  }
  var al = /* @__PURE__ */ new Map(), nh = /* @__PURE__ */ new Set();
  function cc(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var tn = q.d;
  q.d = {
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
    var t = tn.f(), e = Ii();
    return t || e;
  }
  function By(t) {
    var e = on(t);
    e !== null && e.tag === 5 && e.type === "form" ? So(e) : tn.r(t);
  }
  var tu = typeof document > "u" ? null : document;
  function ah(t, e, l) {
    var n = tu;
    if (n && typeof e == "string" && e) {
      var a = Re(e);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), nh.has(a) || (nh.add(a), t = { rel: t, crossOrigin: l, href: e }, n.querySelector(a) === null && (e = n.createElement("link"), me(e, "link", t), Yt(e), n.head.appendChild(e)));
    }
  }
  function jy(t) {
    tn.D(t), ah("dns-prefetch", t, null);
  }
  function Hy(t, e) {
    tn.C(t, e), ah("preconnect", t, e);
  }
  function wy(t, e, l) {
    tn.L(t, e, l);
    var n = tu;
    if (n && t && e) {
      var a = 'link[rel="preload"][as="' + Re(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Re(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Re(
        l.imageSizes
      ) + '"]')) : a += '[href="' + Re(t) + '"]';
      var u = a;
      switch (e) {
        case "style":
          u = eu(t);
          break;
        case "script":
          u = lu(t);
      }
      al.has(u) || (t = Y(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), al.set(u, t), n.querySelector(a) !== null || e === "style" && n.querySelector(ti(u)) || e === "script" && n.querySelector(ei(u)) || (e = n.createElement("link"), me(e, "link", t), Yt(e), n.head.appendChild(e)));
    }
  }
  function Ly(t, e) {
    tn.m(t, e);
    var l = tu;
    if (l && t) {
      var n = e && typeof e.as == "string" ? e.as : "script", a = 'link[rel="modulepreload"][as="' + Re(n) + '"][href="' + Re(t) + '"]', u = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = lu(t);
      }
      if (!al.has(u) && (t = Y({ rel: "modulepreload", href: t }, e), al.set(u, t), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(ei(u)))
              return;
        }
        n = l.createElement("link"), me(n, "link", t), Yt(n), l.head.appendChild(n);
      }
    }
  }
  function Yy(t, e, l) {
    tn.S(t, e, l);
    var n = tu;
    if (n && t) {
      var a = jl(n).hoistableStyles, u = eu(t);
      e = e || "default";
      var c = a.get(u);
      if (!c) {
        var o = { loading: 0, preload: null };
        if (c = n.querySelector(
          ti(u)
        ))
          o.loading = 5;
        else {
          t = Y(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = al.get(u)) && br(t, l);
          var h = c = n.createElement("link");
          Yt(h), me(h, "link", t), h._p = new Promise(function(b, N) {
            h.onload = b, h.onerror = N;
          }), h.addEventListener("load", function() {
            o.loading |= 1;
          }), h.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, sc(c, e, n);
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
    tn.X(t, e);
    var l = tu;
    if (l && t) {
      var n = jl(l).hoistableScripts, a = lu(t), u = n.get(a);
      u || (u = l.querySelector(ei(a)), u || (t = Y({ src: t, async: !0 }, e), (e = al.get(a)) && Sr(t, e), u = l.createElement("script"), Yt(u), me(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Xy(t, e) {
    tn.M(t, e);
    var l = tu;
    if (l && t) {
      var n = jl(l).hoistableScripts, a = lu(t), u = n.get(a);
      u || (u = l.querySelector(ei(a)), u || (t = Y({ src: t, async: !0, type: "module" }, e), (e = al.get(a)) && Sr(t, e), u = l.createElement("script"), Yt(u), me(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function uh(t, e, l, n) {
    var a = (a = $.current) ? cc(a) : null;
    if (!a) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = eu(l.href), l = jl(
          a
        ).hoistableStyles, n = l.get(e), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = eu(l.href);
          var u = jl(
            a
          ).hoistableStyles, c = u.get(t);
          if (c || (a = a.ownerDocument || a, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, c), (u = a.querySelector(
            ti(t)
          )) && !u._p && (c.instance = u, c.state.loading = 5), al.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, al.set(t, l), u || Qy(
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
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = lu(l), l = jl(
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
  function eu(t) {
    return 'href="' + Re(t) + '"';
  }
  function ti(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function ih(t) {
    return Y({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Qy(t, e, l, n) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? n.loading = 1 : (e = t.createElement("link"), n.preload = e, e.addEventListener("load", function() {
      return n.loading |= 1;
    }), e.addEventListener("error", function() {
      return n.loading |= 2;
    }), me(e, "link", l), Yt(e), t.head.appendChild(e));
  }
  function lu(t) {
    return '[src="' + Re(t) + '"]';
  }
  function ei(t) {
    return "script[async]" + t;
  }
  function ch(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var n = t.querySelector(
            'style[data-href~="' + Re(l.href) + '"]'
          );
          if (n)
            return e.instance = n, Yt(n), n;
          var a = Y({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (t.ownerDocument || t).createElement(
            "style"
          ), Yt(n), me(n, "style", a), sc(n, l.precedence, t), e.instance = n;
        case "stylesheet":
          a = eu(l.href);
          var u = t.querySelector(
            ti(a)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, Yt(u), u;
          n = ih(l), (a = al.get(a)) && br(n, a), u = (t.ownerDocument || t).createElement("link"), Yt(u);
          var c = u;
          return c._p = new Promise(function(o, h) {
            c.onload = o, c.onerror = h;
          }), me(u, "link", n), e.state.loading |= 4, sc(u, l.precedence, t), e.instance = u;
        case "script":
          return u = lu(l.src), (a = t.querySelector(
            ei(u)
          )) ? (e.instance = a, Yt(a), a) : (n = l, (a = al.get(u)) && (n = Y({}, l), Sr(n, a)), t = t.ownerDocument || t, a = t.createElement("script"), Yt(a), me(a, "link", n), t.head.appendChild(a), e.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (n = e.instance, e.state.loading |= 4, sc(n, l.precedence, t));
    return e.instance;
  }
  function sc(t, e, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, u = a, c = 0; c < n.length; c++) {
      var o = n[c];
      if (o.dataset.precedence === e) u = o;
      else if (u !== a) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function br(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Sr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var rc = null;
  function sh(t, e, l) {
    if (rc === null) {
      var n = /* @__PURE__ */ new Map(), a = rc = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = rc, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(t)) return n;
    for (n.set(t, null), l = l.getElementsByTagName(t), a = 0; a < l.length; a++) {
      var u = l[a];
      if (!(u[fn] || u[Ct] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(e) || "";
        c = t + c;
        var o = n.get(c);
        o ? o.push(u) : n.set(c, [u]);
      }
    }
    return n;
  }
  function rh(t, e, l) {
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
  function fh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Zy(t, e, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = eu(n.href), u = e.querySelector(
          ti(a)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = fc.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Yt(u);
          return;
        }
        u = e.ownerDocument || e, n = ih(n), (a = al.get(a)) && br(n, a), u = u.createElement("link"), Yt(u);
        var c = u;
        c._p = new Promise(function(o, h) {
          c.onload = o, c.onerror = h;
        }), me(u, "link", n), l.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = fc.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var Er = 0;
  function Ky(t, e) {
    return t.stylesheets && t.count === 0 && dc(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (t.stylesheets && dc(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Er === 0 && (Er = 62500 * Oy());
      var a = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && dc(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > Er ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function fc() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) dc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var oc = null;
  function dc(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, oc = /* @__PURE__ */ new Map(), e.forEach(ky, t), oc = null, fc.call(t));
  }
  function ky(t, e) {
    if (!(e.state.loading & 4)) {
      var l = oc.get(t);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), oc.set(t, l);
        for (var a = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < a.length; u++) {
          var c = a[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), n = c);
        }
        n && l.set(null, n);
      }
      a = e.instance, c = a.getAttribute("data-precedence"), u = l.get(c) || n, u === n && l.set(null, a), l.set(c, a), this.count++, n = fc.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), u ? u.parentNode.insertBefore(a, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), e.state.loading |= 4;
    }
  }
  var li = {
    $$typeof: wt,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0
  };
  function Jy(t, e, l, n, a, u, c, o, h) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ou(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ou(0), this.hiddenUpdates = ou(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function oh(t, e, l, n, a, u, c, o, h, b, N, C) {
    return t = new Jy(
      t,
      e,
      l,
      c,
      h,
      b,
      N,
      C,
      o
    ), e = 1, u === !0 && (e |= 24), u = Ge(3, null, null, e), t.current = u, u.stateNode = t, e = ts(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: e
    }, as(u), t;
  }
  function dh(t) {
    return t ? (t = qa, t) : qa;
  }
  function hh(t, e, l, n, a, u) {
    a = dh(a), n.context === null ? n.context = a : n.pendingContext = a, n = On(e), n.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (n.callback = u), l = Rn(t, n, e), l !== null && (qe(l, t, e), xu(l, t, e));
  }
  function mh(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function _r(t, e) {
    mh(t, e), (t = t.alternate) && mh(t, e);
  }
  function yh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Pn(t, 67108864);
      e !== null && qe(e, t, 67108864), _r(t, 67108864);
    }
  }
  function vh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ke();
      e = Ea(e);
      var l = Pn(t, e);
      l !== null && qe(l, t, e), _r(t, e);
    }
  }
  var hc = !0;
  function Wy(t, e, l, n) {
    var a = O.T;
    O.T = null;
    var u = q.p;
    try {
      q.p = 2, Ar(t, e, l, n);
    } finally {
      q.p = u, O.T = a;
    }
  }
  function $y(t, e, l, n) {
    var a = O.T;
    O.T = null;
    var u = q.p;
    try {
      q.p = 8, Ar(t, e, l, n);
    } finally {
      q.p = u, O.T = a;
    }
  }
  function Ar(t, e, l, n) {
    if (hc) {
      var a = Tr(n);
      if (a === null)
        rr(
          t,
          e,
          n,
          mc,
          l
        ), ph(t, n);
      else if (Iy(
        a,
        t,
        e,
        l,
        n
      ))
        n.stopPropagation();
      else if (ph(t, n), e & 4 && -1 < Fy.indexOf(t)) {
        for (; a !== null; ) {
          var u = on(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = Te(u.pendingLanes);
                  if (c !== 0) {
                    var o = u;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; c; ) {
                      var h = 1 << 31 - te(c);
                      o.entanglements[1] |= h, c &= ~h;
                    }
                    Cl(u), (gt & 6) === 0 && ($i = _e() + 500, $u(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = Pn(u, 2), o !== null && qe(o, u, 2), Ii(), _r(u, 2);
            }
          if (u = Tr(n), u === null && rr(
            t,
            e,
            n,
            mc,
            l
          ), u === a) break;
          a = u;
        }
        a !== null && n.stopPropagation();
      } else
        rr(
          t,
          e,
          n,
          null,
          l
        );
    }
  }
  function Tr(t) {
    return t = bu(t), Nr(t);
  }
  var mc = null;
  function Nr(t) {
    if (mc = null, t = Lt(t), t !== null) {
      var e = U(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = j(e), t !== null) return t;
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
    return mc = t, null;
  }
  function gh(t) {
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
        switch (oi()) {
          case ft:
            return 2;
          case va:
            return 8;
          case ga:
          case cn:
            return 32;
          case ve:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Or = !1, wn = null, Ln = null, Yn = null, ni = /* @__PURE__ */ new Map(), ai = /* @__PURE__ */ new Map(), Gn = [], Fy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ph(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        wn = null;
        break;
      case "dragenter":
      case "dragleave":
        Ln = null;
        break;
      case "mouseover":
      case "mouseout":
        Yn = null;
        break;
      case "pointerover":
      case "pointerout":
        ni.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ai.delete(e.pointerId);
    }
  }
  function ui(t, e, l, n, a, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: u,
      targetContainers: [a]
    }, e !== null && (e = on(e), e !== null && yh(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
  }
  function Iy(t, e, l, n, a) {
    switch (e) {
      case "focusin":
        return wn = ui(
          wn,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return Ln = ui(
          Ln,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return Yn = ui(
          Yn,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var u = a.pointerId;
        return ni.set(
          u,
          ui(
            ni.get(u) || null,
            t,
            e,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return u = a.pointerId, ai.set(
          u,
          ui(
            ai.get(u) || null,
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
  function bh(t) {
    var e = Lt(t.target);
    if (e !== null) {
      var l = U(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = j(l), e !== null) {
            t.blockedOn = e, Ne(t.priority, function() {
              vh(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = G(l), e !== null) {
            t.blockedOn = e, Ne(t.priority, function() {
              vh(l);
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
  function yc(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Tr(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        pu = n, l.target.dispatchEvent(n), pu = null;
      } else
        return e = on(l), e !== null && yh(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function Sh(t, e, l) {
    yc(t) && l.delete(e);
  }
  function Py() {
    Or = !1, wn !== null && yc(wn) && (wn = null), Ln !== null && yc(Ln) && (Ln = null), Yn !== null && yc(Yn) && (Yn = null), ni.forEach(Sh), ai.forEach(Sh);
  }
  function vc(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Or || (Or = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      Py
    )));
  }
  var gc = null;
  function Eh(t) {
    gc !== t && (gc = t, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        gc === t && (gc = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], n = t[e + 1], a = t[e + 2];
          if (typeof n != "function") {
            if (Nr(n || l) === null)
              continue;
            break;
          }
          var u = on(l);
          u !== null && (t.splice(e, 3), e -= 3, Ts(
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
  function nu(t) {
    function e(h) {
      return vc(h, t);
    }
    wn !== null && vc(wn, t), Ln !== null && vc(Ln, t), Yn !== null && vc(Yn, t), ni.forEach(e), ai.forEach(e);
    for (var l = 0; l < Gn.length; l++) {
      var n = Gn[l];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < Gn.length && (l = Gn[0], l.blockedOn === null); )
      bh(l), l.blockedOn === null && Gn.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], u = l[n + 1], c = a[ce] || null;
        if (typeof u == "function")
          c || Eh(l);
        else if (c) {
          var o = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, c = u[ce] || null)
              o = c.formAction;
            else if (Nr(a) !== null) continue;
          } else o = c.action;
          typeof o == "function" ? l[n + 1] = o : (l.splice(n, 3), n -= 3), Eh(l);
        }
      }
  }
  function _h() {
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
  function Rr(t) {
    this._internalRoot = t;
  }
  pc.prototype.render = Rr.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var l = e.current, n = Ke();
    hh(l, n, t, e, null, null);
  }, pc.prototype.unmount = Rr.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      hh(t.current, 2, null, t, null, null), Ii(), e[Oe] = null;
    }
  };
  function pc(t) {
    this._internalRoot = t;
  }
  pc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = kn();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Gn.length && e !== 0 && e < Gn[l].priority; l++) ;
      Gn.splice(l, 0, t), l === 0 && bh(t);
    }
  };
  var Ah = i.version;
  if (Ah !== "19.2.4")
    throw Error(
      r(
        527,
        Ah,
        "19.2.4"
      )
    );
  q.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = D(e), t = t !== null ? k(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var t0 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bc.isDisabled && bc.supportsFiber)
      try {
        gl = bc.inject(
          t0
        ), Zt = bc;
      } catch {
      }
  }
  return ci.createRoot = function(t, e) {
    if (!g(t)) throw Error(r(299));
    var l = !1, n = "", a = Co, u = Do, c = Uo;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), e = oh(
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
      _h
    ), t[Oe] = e.current, sr(t), new Rr(e);
  }, ci.hydrateRoot = function(t, e, l) {
    if (!g(t)) throw Error(r(299));
    var n = !1, a = "", u = Co, c = Do, o = Uo, h = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (o = l.onRecoverableError), l.formState !== void 0 && (h = l.formState)), e = oh(
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
      _h
    ), e.context = dh(null), l = e.current, n = Ke(), n = Ea(n), a = On(n), a.callback = null, Rn(l, a, n), l = n, e.current.lanes = l, xl(e, l), Cl(e), t[Oe] = e.current, sr(t), new pc(e);
  }, ci.version = "19.2.4", ci;
}
var qh;
function f0() {
  if (qh) return Cr.exports;
  qh = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (i) {
        console.error(i);
      }
  }
  return f(), Cr.exports = r0(), Cr.exports;
}
var o0 = f0();
const d0 = "/api";
function Vh() {
  return window.localStorage.getItem("token");
}
function xh() {
  window.location.replace("/login.html");
}
async function da(f, i = {}) {
  const s = Vh(), r = {
    "Content-Type": "application/json",
    ...s ? { Authorization: `Bearer ${s}` } : {},
    ...i.headers || {}
  }, g = await fetch(`${d0}${f}`, {
    ...i,
    headers: r
  }), U = await g.text();
  let j = {};
  if (U)
    try {
      j = JSON.parse(U);
    } catch {
      j = { message: U };
    }
  if (!g.ok) {
    const G = j.error || j.message || "Request failed";
    throw new Error(G);
  }
  return j;
}
const Ul = /* @__PURE__ */ Object.create(null);
Ul.open = "0";
Ul.close = "1";
Ul.ping = "2";
Ul.pong = "3";
Ul.message = "4";
Ul.upgrade = "5";
Ul.noop = "6";
const Tc = /* @__PURE__ */ Object.create(null);
Object.keys(Ul).forEach((f) => {
  Tc[Ul[f]] = f;
});
const Hr = { type: "error", data: "parser error" }, Zh = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Kh = typeof ArrayBuffer == "function", kh = (f) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(f) : f && f.buffer instanceof ArrayBuffer, Vr = ({ type: f, data: i }, s, r) => Zh && i instanceof Blob ? s ? r(i) : Bh(i, r) : Kh && (i instanceof ArrayBuffer || kh(i)) ? s ? r(i) : Bh(new Blob([i]), r) : r(Ul[f] + (i || "")), Bh = (f, i) => {
  const s = new FileReader();
  return s.onload = function() {
    const r = s.result.split(",")[1];
    i("b" + (r || ""));
  }, s.readAsDataURL(f);
};
function jh(f) {
  return f instanceof Uint8Array ? f : f instanceof ArrayBuffer ? new Uint8Array(f) : new Uint8Array(f.buffer, f.byteOffset, f.byteLength);
}
let xr;
function h0(f, i) {
  if (Zh && f.data instanceof Blob)
    return f.data.arrayBuffer().then(jh).then(i);
  if (Kh && (f.data instanceof ArrayBuffer || kh(f.data)))
    return i(jh(f.data));
  Vr(f, !1, (s) => {
    xr || (xr = new TextEncoder()), i(xr.encode(s));
  });
}
const Hh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", fi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let f = 0; f < Hh.length; f++)
  fi[Hh.charCodeAt(f)] = f;
const m0 = (f) => {
  let i = f.length * 0.75, s = f.length, r, g = 0, U, j, G, x;
  f[f.length - 1] === "=" && (i--, f[f.length - 2] === "=" && i--);
  const D = new ArrayBuffer(i), k = new Uint8Array(D);
  for (r = 0; r < s; r += 4)
    U = fi[f.charCodeAt(r)], j = fi[f.charCodeAt(r + 1)], G = fi[f.charCodeAt(r + 2)], x = fi[f.charCodeAt(r + 3)], k[g++] = U << 2 | j >> 4, k[g++] = (j & 15) << 4 | G >> 2, k[g++] = (G & 3) << 6 | x & 63;
  return D;
}, y0 = typeof ArrayBuffer == "function", Zr = (f, i) => {
  if (typeof f != "string")
    return {
      type: "message",
      data: Jh(f, i)
    };
  const s = f.charAt(0);
  return s === "b" ? {
    type: "message",
    data: v0(f.substring(1), i)
  } : Tc[s] ? f.length > 1 ? {
    type: Tc[s],
    data: f.substring(1)
  } : {
    type: Tc[s]
  } : Hr;
}, v0 = (f, i) => {
  if (y0) {
    const s = m0(f);
    return Jh(s, i);
  } else
    return { base64: !0, data: f };
}, Jh = (f, i) => i === "blob" ? f instanceof Blob ? f : new Blob([f]) : f instanceof ArrayBuffer ? f : f.buffer, Wh = "", g0 = (f, i) => {
  const s = f.length, r = new Array(s);
  let g = 0;
  f.forEach((U, j) => {
    Vr(U, !1, (G) => {
      r[j] = G, ++g === s && i(r.join(Wh));
    });
  });
}, p0 = (f, i) => {
  const s = f.split(Wh), r = [];
  for (let g = 0; g < s.length; g++) {
    const U = Zr(s[g], i);
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
        let g;
        if (r < 126)
          g = new Uint8Array(1), new DataView(g.buffer).setUint8(0, r);
        else if (r < 65536) {
          g = new Uint8Array(3);
          const U = new DataView(g.buffer);
          U.setUint8(0, 126), U.setUint16(1, r);
        } else {
          g = new Uint8Array(9);
          const U = new DataView(g.buffer);
          U.setUint8(0, 127), U.setBigUint64(1, BigInt(r));
        }
        f.data && typeof f.data != "string" && (g[0] |= 128), i.enqueue(g), i.enqueue(s);
      });
    }
  });
}
let Br;
function Sc(f) {
  return f.reduce((i, s) => i + s.length, 0);
}
function Ec(f, i) {
  if (f[0].length === i)
    return f.shift();
  const s = new Uint8Array(i);
  let r = 0;
  for (let g = 0; g < i; g++)
    s[g] = f[0][r++], r === f[0].length && (f.shift(), r = 0);
  return f.length && r < f[0].length && (f[0] = f[0].slice(r)), s;
}
function S0(f, i) {
  Br || (Br = new TextDecoder());
  const s = [];
  let r = 0, g = -1, U = !1;
  return new TransformStream({
    transform(j, G) {
      for (s.push(j); ; ) {
        if (r === 0) {
          if (Sc(s) < 1)
            break;
          const x = Ec(s, 1);
          U = (x[0] & 128) === 128, g = x[0] & 127, g < 126 ? r = 3 : g === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (Sc(s) < 2)
            break;
          const x = Ec(s, 2);
          g = new DataView(x.buffer, x.byteOffset, x.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (Sc(s) < 8)
            break;
          const x = Ec(s, 8), D = new DataView(x.buffer, x.byteOffset, x.length), k = D.getUint32(0);
          if (k > Math.pow(2, 21) - 1) {
            G.enqueue(Hr);
            break;
          }
          g = k * Math.pow(2, 32) + D.getUint32(4), r = 3;
        } else {
          if (Sc(s) < g)
            break;
          const x = Ec(s, g);
          G.enqueue(Zr(U ? x : Br.decode(x), i)), r = 0;
        }
        if (g === 0 || g > f) {
          G.enqueue(Hr);
          break;
        }
      }
    }
  });
}
const $h = 4;
function $t(f) {
  if (f) return E0(f);
}
function E0(f) {
  for (var i in $t.prototype)
    f[i] = $t.prototype[i];
  return f;
}
$t.prototype.on = $t.prototype.addEventListener = function(f, i) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + f] = this._callbacks["$" + f] || []).push(i), this;
};
$t.prototype.once = function(f, i) {
  function s() {
    this.off(f, s), i.apply(this, arguments);
  }
  return s.fn = i, this.on(f, s), this;
};
$t.prototype.off = $t.prototype.removeListener = $t.prototype.removeAllListeners = $t.prototype.removeEventListener = function(f, i) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var s = this._callbacks["$" + f];
  if (!s) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + f], this;
  for (var r, g = 0; g < s.length; g++)
    if (r = s[g], r === i || r.fn === i) {
      s.splice(g, 1);
      break;
    }
  return s.length === 0 && delete this._callbacks["$" + f], this;
};
$t.prototype.emit = function(f) {
  this._callbacks = this._callbacks || {};
  for (var i = new Array(arguments.length - 1), s = this._callbacks["$" + f], r = 1; r < arguments.length; r++)
    i[r - 1] = arguments[r];
  if (s) {
    s = s.slice(0);
    for (var r = 0, g = s.length; r < g; ++r)
      s[r].apply(this, i);
  }
  return this;
};
$t.prototype.emitReserved = $t.prototype.emit;
$t.prototype.listeners = function(f) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + f] || [];
};
$t.prototype.hasListeners = function(f) {
  return !!this.listeners(f).length;
};
const zc = typeof Promise == "function" && typeof Promise.resolve == "function" ? (i) => Promise.resolve().then(i) : (i, s) => s(i, 0), ul = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), _0 = "arraybuffer";
function Fh(f, ...i) {
  return i.reduce((s, r) => (f.hasOwnProperty(r) && (s[r] = f[r]), s), {});
}
const A0 = ul.setTimeout, T0 = ul.clearTimeout;
function Mc(f, i) {
  i.useNativeTimers ? (f.setTimeoutFn = A0.bind(ul), f.clearTimeoutFn = T0.bind(ul)) : (f.setTimeoutFn = ul.setTimeout.bind(ul), f.clearTimeoutFn = ul.clearTimeout.bind(ul));
}
const N0 = 1.33;
function O0(f) {
  return typeof f == "string" ? R0(f) : Math.ceil((f.byteLength || f.size) * N0);
}
function R0(f) {
  let i = 0, s = 0;
  for (let r = 0, g = f.length; r < g; r++)
    i = f.charCodeAt(r), i < 128 ? s += 1 : i < 2048 ? s += 2 : i < 55296 || i >= 57344 ? s += 3 : (r++, s += 4);
  return s;
}
function Ih() {
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
  for (let r = 0, g = s.length; r < g; r++) {
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
class Kr extends $t {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(i) {
    super(), this.writable = !1, Mc(this, i), this.opts = i, this.query = i.query, this.socket = i.socket, this.supportsBinary = !i.forceBase64;
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
    const s = Zr(i, this.socket.binaryType);
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
class D0 extends Kr {
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
    this.writable = !1, g0(i, (s) => {
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
    return this.opts.timestampRequests !== !1 && (s[this.opts.timestampParam] = Ih()), !this.supportsBinary && !s.sid && (s.b64 = 1), this.createUri(i, s);
  }
}
let Ph = !1;
try {
  Ph = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const U0 = Ph;
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
    r.on("success", s), r.on("error", (g, U) => {
      this.onError("xhr post error", g, U);
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
class Dl extends $t {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(i, s, r) {
    super(), this.createRequest = i, Mc(this, r), this._opts = r, this._method = r.method || "GET", this._uri = s, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var i;
    const s = Fh(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    s.xdomain = !!this._opts.xd;
    const r = this._xhr = this.createRequest(s);
    try {
      r.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let g in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(g) && r.setRequestHeader(g, this._opts.extraHeaders[g]);
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
        var g;
        r.readyState === 3 && ((g = this._opts.cookieJar) === null || g === void 0 || g.parseCookies(
          // @ts-ignore
          r.getResponseHeader("set-cookie")
        )), r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this._data);
    } catch (g) {
      this.setTimeoutFn(() => {
        this._onError(g);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = Dl.requestsCount++, Dl.requests[this._index] = this);
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
      typeof document < "u" && delete Dl.requests[this._index], this._xhr = null;
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
Dl.requestsCount = 0;
Dl.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", wh);
  else if (typeof addEventListener == "function") {
    const f = "onpagehide" in ul ? "pagehide" : "unload";
    addEventListener(f, wh, !1);
  }
}
function wh() {
  for (let f in Dl.requests)
    Dl.requests.hasOwnProperty(f) && Dl.requests[f].abort();
}
const B0 = (function() {
  const f = tm({
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
    return Object.assign(i, { xd: this.xd }, this.opts), new Dl(tm, this.uri(), i);
  }
}
function tm(f) {
  const i = f.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!i || U0))
      return new XMLHttpRequest();
  } catch {
  }
  if (!i)
    try {
      return new ul[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const em = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class H0 extends Kr {
  get name() {
    return "websocket";
  }
  doOpen() {
    const i = this.uri(), s = this.opts.protocols, r = em ? {} : Fh(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(i, s, r);
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
      const r = i[s], g = s === i.length - 1;
      Vr(r, this.supportsBinary, (U) => {
        try {
          this.doWrite(r, U);
        } catch {
        }
        g && zc(() => {
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
    return this.opts.timestampRequests && (s[this.opts.timestampParam] = Ih()), this.supportsBinary || (s.b64 = 1), this.createUri(i, s);
  }
}
const jr = ul.WebSocket || ul.MozWebSocket;
class w0 extends H0 {
  createSocket(i, s, r) {
    return em ? new jr(i, s, r) : s ? new jr(i, s) : new jr(i);
  }
  doWrite(i, s) {
    this.ws.send(s);
  }
}
class L0 extends Kr {
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
        const s = S0(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = i.readable.pipeThrough(s).getReader(), g = b0();
        g.readable.pipeTo(i.writable), this._writer = g.writable.getWriter();
        const U = () => {
          r.read().then(({ done: G, value: x }) => {
            G || (this.onPacket(x), U());
          }).catch((G) => {
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
      const r = i[s], g = s === i.length - 1;
      this._writer.write(r).then(() => {
        g && zc(() => {
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
function wr(f) {
  if (f.length > 8e3)
    throw "URI too long";
  const i = f, s = f.indexOf("["), r = f.indexOf("]");
  s != -1 && r != -1 && (f = f.substring(0, s) + f.substring(s, r).replace(/:/g, ";") + f.substring(r, f.length));
  let g = G0.exec(f || ""), U = {}, j = 14;
  for (; j--; )
    U[X0[j]] = g[j] || "";
  return s != -1 && r != -1 && (U.source = i, U.host = U.host.substring(1, U.host.length - 1).replace(/;/g, ":"), U.authority = U.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), U.ipv6uri = !0), U.pathNames = Q0(U, U.path), U.queryKey = V0(U, U.query), U;
}
function Q0(f, i) {
  const s = /\/{2,9}/g, r = i.replace(s, "/").split("/");
  return (i.slice(0, 1) == "/" || i.length === 0) && r.splice(0, 1), i.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function V0(f, i) {
  const s = {};
  return i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, g, U) {
    g && (s[g] = U);
  }), s;
}
const Lr = typeof addEventListener == "function" && typeof removeEventListener == "function", Nc = [];
Lr && addEventListener("offline", () => {
  Nc.forEach((f) => f());
}, !1);
class Qn extends $t {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(i, s) {
    if (super(), this.binaryType = _0, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, i && typeof i == "object" && (s = i, i = null), i) {
      const r = wr(i);
      s.hostname = r.host, s.secure = r.protocol === "https" || r.protocol === "wss", s.port = r.port, r.query && (s.query = r.query);
    } else s.host && (s.hostname = wr(s.host).host);
    Mc(this, s), this.secure = s.secure != null ? s.secure : typeof location < "u" && location.protocol === "https:", s.hostname && !s.port && (s.port = this.secure ? "443" : "80"), this.hostname = s.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = s.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, s.transports.forEach((r) => {
      const g = r.prototype.name;
      this.transports.push(g), this._transportsByName[g] = r;
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
    }, s), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = M0(this.opts.query)), Lr && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Nc.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    s.EIO = $h, s.transport = i, this.id && (s.sid = this.id);
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
    const i = this.opts.rememberUpgrade && Qn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", Qn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      const g = this.writeBuffer[r].data;
      if (g && (s += O0(g)), r > 0 && s > this._maxPayload)
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
    return i && (this._pingTimeoutTime = 0, zc(() => {
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
  _sendPacket(i, s, r, g) {
    if (typeof s == "function" && (g = s, s = void 0), typeof r == "function" && (g = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const U = {
      type: i,
      data: s,
      options: r
    };
    this.emitReserved("packetCreate", U), this.writeBuffer.push(U), g && this.once("flush", g), this.flush();
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
    if (Qn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Lr && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = Nc.indexOf(this._offlineEventListener);
        r !== -1 && Nc.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", i, s), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Qn.protocol = $h;
class Z0 extends Qn {
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
    Qn.priorWebsocketSuccess = !1;
    const g = () => {
      r || (s.send([{ type: "ping", data: "probe" }]), s.once("packet", (Y) => {
        if (!r)
          if (Y.type === "pong" && Y.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", s), !s)
              return;
            Qn.priorWebsocketSuccess = s.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (k(), this.setTransport(s), s.send([{ type: "upgrade" }]), this.emitReserved("upgrade", s), s = null, this.upgrading = !1, this.flush());
            });
          } else {
            const ht = new Error("probe error");
            ht.transport = s.name, this.emitReserved("upgradeError", ht);
          }
      }));
    };
    function U() {
      r || (r = !0, k(), s.close(), s = null);
    }
    const j = (Y) => {
      const ht = new Error("probe error: " + Y);
      ht.transport = s.name, U(), this.emitReserved("upgradeError", ht);
    };
    function G() {
      j("transport closed");
    }
    function x() {
      j("socket closed");
    }
    function D(Y) {
      s && Y.name !== s.name && U();
    }
    const k = () => {
      s.removeListener("open", g), s.removeListener("error", j), s.removeListener("close", G), this.off("close", x), this.off("upgrading", D);
    };
    s.once("open", g), s.once("error", j), s.once("close", G), this.once("close", x), this.once("upgrading", D), this._upgrades.indexOf("webtransport") !== -1 && i !== "webtransport" ? this.setTimeoutFn(() => {
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
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((g) => Y0[g]).filter((g) => !!g)), super(i, r);
  }
};
function k0(f, i = "", s) {
  let r = f;
  s = s || typeof location < "u" && location, f == null && (f = s.protocol + "//" + s.host), typeof f == "string" && (f.charAt(0) === "/" && (f.charAt(1) === "/" ? f = s.protocol + f : f = s.host + f), /^(https?|wss?):\/\//.test(f) || (typeof s < "u" ? f = s.protocol + "//" + f : f = "https://" + f), r = wr(f)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const U = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + U + ":" + r.port + i, r.href = r.protocol + "://" + U + (s && s.port === r.port ? "" : ":" + r.port), r;
}
const J0 = typeof ArrayBuffer == "function", W0 = (f) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(f) : f.buffer instanceof ArrayBuffer, lm = Object.prototype.toString, $0 = typeof Blob == "function" || typeof Blob < "u" && lm.call(Blob) === "[object BlobConstructor]", F0 = typeof File == "function" || typeof File < "u" && lm.call(File) === "[object FileConstructor]";
function kr(f) {
  return J0 && (f instanceof ArrayBuffer || W0(f)) || $0 && f instanceof Blob || F0 && f instanceof File;
}
function Oc(f, i) {
  if (!f || typeof f != "object")
    return !1;
  if (Array.isArray(f)) {
    for (let s = 0, r = f.length; s < r; s++)
      if (Oc(f[s]))
        return !0;
    return !1;
  }
  if (kr(f))
    return !0;
  if (f.toJSON && typeof f.toJSON == "function" && arguments.length === 1)
    return Oc(f.toJSON(), !0);
  for (const s in f)
    if (Object.prototype.hasOwnProperty.call(f, s) && Oc(f[s]))
      return !0;
  return !1;
}
function I0(f) {
  const i = [], s = f.data, r = f;
  return r.data = Yr(s, i), r.attachments = i.length, { packet: r, buffers: i };
}
function Yr(f, i) {
  if (!f)
    return f;
  if (kr(f)) {
    const s = { _placeholder: !0, num: i.length };
    return i.push(f), s;
  } else if (Array.isArray(f)) {
    const s = new Array(f.length);
    for (let r = 0; r < f.length; r++)
      s[r] = Yr(f[r], i);
    return s;
  } else if (typeof f == "object" && !(f instanceof Date)) {
    const s = {};
    for (const r in f)
      Object.prototype.hasOwnProperty.call(f, r) && (s[r] = Yr(f[r], i));
    return s;
  }
  return f;
}
function P0(f, i) {
  return f.data = Gr(f.data, i), delete f.attachments, f;
}
function Gr(f, i) {
  if (!f)
    return f;
  if (f && f._placeholder === !0) {
    if (typeof f.num == "number" && f.num >= 0 && f.num < i.length)
      return i[f.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(f))
    for (let s = 0; s < f.length; s++)
      f[s] = Gr(f[s], i);
  else if (typeof f == "object")
    for (const s in f)
      Object.prototype.hasOwnProperty.call(f, s) && (f[s] = Gr(f[s], i));
  return f;
}
const tv = [
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
var dt;
(function(f) {
  f[f.CONNECT = 0] = "CONNECT", f[f.DISCONNECT = 1] = "DISCONNECT", f[f.EVENT = 2] = "EVENT", f[f.ACK = 3] = "ACK", f[f.CONNECT_ERROR = 4] = "CONNECT_ERROR", f[f.BINARY_EVENT = 5] = "BINARY_EVENT", f[f.BINARY_ACK = 6] = "BINARY_ACK";
})(dt || (dt = {}));
class ev {
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
    return (i.type === dt.EVENT || i.type === dt.ACK) && Oc(i) ? this.encodeAsBinary({
      type: i.type === dt.EVENT ? dt.BINARY_EVENT : dt.BINARY_ACK,
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
    return (i.type === dt.BINARY_EVENT || i.type === dt.BINARY_ACK) && (s += i.attachments + "-"), i.nsp && i.nsp !== "/" && (s += i.nsp + ","), i.id != null && (s += i.id), i.data != null && (s += JSON.stringify(i.data, this.replacer)), s;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(i) {
    const s = I0(i), r = this.encodeAsString(s.packet), g = s.buffers;
    return g.unshift(r), g;
  }
}
class Jr extends $t {
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
      const r = s.type === dt.BINARY_EVENT;
      r || s.type === dt.BINARY_ACK ? (s.type = r ? dt.EVENT : dt.ACK, this.reconstructor = new lv(s), s.attachments === 0 && super.emitReserved("decoded", s)) : super.emitReserved("decoded", s);
    } else if (kr(i) || i.base64)
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
    if (dt[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === dt.BINARY_EVENT || r.type === dt.BINARY_ACK) {
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
    const g = i.charAt(s + 1);
    if (g !== "" && Number(g) == g) {
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
      if (Jr.isPayloadValid(r.type, U))
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
      case dt.CONNECT:
        return Lh(s);
      case dt.DISCONNECT:
        return s === void 0;
      case dt.CONNECT_ERROR:
        return typeof s == "string" || Lh(s);
      case dt.EVENT:
      case dt.BINARY_EVENT:
        return Array.isArray(s) && (typeof s[0] == "number" || typeof s[0] == "string" && tv.indexOf(s[0]) === -1);
      case dt.ACK:
      case dt.BINARY_ACK:
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
class lv {
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
function Lh(f) {
  return Object.prototype.toString.call(f) === "[object Object]";
}
const nv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Jr,
  Encoder: ev,
  get PacketType() {
    return dt;
  }
}, Symbol.toStringTag, { value: "Module" }));
function vl(f, i, s) {
  return f.on(i, s), function() {
    f.off(i, s);
  };
}
const av = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class nm extends $t {
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
      vl(i, "open", this.onopen.bind(this)),
      vl(i, "packet", this.onpacket.bind(this)),
      vl(i, "error", this.onerror.bind(this)),
      vl(i, "close", this.onclose.bind(this))
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
    var r, g, U;
    if (av.hasOwnProperty(i))
      throw new Error('"' + i.toString() + '" is a reserved event name');
    if (s.unshift(i), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(s), this;
    const j = {
      type: dt.EVENT,
      data: s
    };
    if (j.options = {}, j.options.compress = this.flags.compress !== !1, typeof s[s.length - 1] == "function") {
      const k = this.ids++, Y = s.pop();
      this._registerAckCallback(k, Y), j.id = k;
    }
    const G = (g = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || g === void 0 ? void 0 : g.writable, x = this.connected && !(!((U = this.io.engine) === null || U === void 0) && U._hasPingExpired());
    return this.flags.volatile && !G || (x ? (this.notifyOutgoingListeners(j), this.packet(j)) : this.sendBuffer.push(j)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(i, s) {
    var r;
    const g = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (g === void 0) {
      this.acks[i] = s;
      return;
    }
    const U = this.io.setTimeoutFn(() => {
      delete this.acks[i];
      for (let G = 0; G < this.sendBuffer.length; G++)
        this.sendBuffer[G].id === i && this.sendBuffer.splice(G, 1);
      s.call(this, new Error("operation has timed out"));
    }, g), j = (...G) => {
      this.io.clearTimeoutFn(U), s.apply(this, G);
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
    return new Promise((r, g) => {
      const U = (j, G) => j ? g(j) : r(G);
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
    i.push((g, ...U) => (this._queue[0], g !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), s && s(g)) : (this._queue.shift(), s && s(null, ...U)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
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
      type: dt.CONNECT,
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
        case dt.CONNECT:
          i.data && i.data.sid ? this.onconnect(i.data.sid, i.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case dt.EVENT:
        case dt.BINARY_EVENT:
          this.onevent(i);
          break;
        case dt.ACK:
        case dt.BINARY_ACK:
          this.onack(i);
          break;
        case dt.DISCONNECT:
          this.ondisconnect();
          break;
        case dt.CONNECT_ERROR:
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
    return function(...g) {
      r || (r = !0, s.packet({
        type: dt.ACK,
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
    return this.connected && this.packet({ type: dt.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function uu(f) {
  f = f || {}, this.ms = f.min || 100, this.max = f.max || 1e4, this.factor = f.factor || 2, this.jitter = f.jitter > 0 && f.jitter <= 1 ? f.jitter : 0, this.attempts = 0;
}
uu.prototype.duration = function() {
  var f = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var i = Math.random(), s = Math.floor(i * this.jitter * f);
    f = (Math.floor(i * 10) & 1) == 0 ? f - s : f + s;
  }
  return Math.min(f, this.max) | 0;
};
uu.prototype.reset = function() {
  this.attempts = 0;
};
uu.prototype.setMin = function(f) {
  this.ms = f;
};
uu.prototype.setMax = function(f) {
  this.max = f;
};
uu.prototype.setJitter = function(f) {
  this.jitter = f;
};
class Xr extends $t {
  constructor(i, s) {
    var r;
    super(), this.nsps = {}, this.subs = [], i && typeof i == "object" && (s = i, i = void 0), s = s || {}, s.path = s.path || "/socket.io", this.opts = s, Mc(this, s), this.reconnection(s.reconnection !== !1), this.reconnectionAttempts(s.reconnectionAttempts || 1 / 0), this.reconnectionDelay(s.reconnectionDelay || 1e3), this.reconnectionDelayMax(s.reconnectionDelayMax || 5e3), this.randomizationFactor((r = s.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new uu({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(s.timeout == null ? 2e4 : s.timeout), this._readyState = "closed", this.uri = i;
    const g = s.parser || nv;
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
    this.engine = new K0(this.uri, this.opts);
    const s = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const g = vl(s, "open", function() {
      r.onopen(), i && i();
    }), U = (G) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", G), i ? i(G) : this.maybeReconnectOnOpen();
    }, j = vl(s, "error", U);
    if (this._timeout !== !1) {
      const G = this._timeout, x = this.setTimeoutFn(() => {
        g(), U(new Error("timeout")), s.close();
      }, G);
      this.opts.autoUnref && x.unref(), this.subs.push(() => {
        this.clearTimeoutFn(x);
      });
    }
    return this.subs.push(g), this.subs.push(j), this;
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
      vl(i, "ping", this.onping.bind(this)),
      vl(i, "data", this.ondata.bind(this)),
      vl(i, "error", this.onerror.bind(this)),
      vl(i, "close", this.onclose.bind(this)),
      // @ts-ignore
      vl(this.decoder, "decoded", this.ondecoded.bind(this))
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
    zc(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new nm(this, i, s), this.nsps[i] = r), r;
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
        i.skipReconnect || (this.emitReserved("reconnect_attempt", i.backoff.attempts), !i.skipReconnect && i.open((g) => {
          g ? (i._reconnecting = !1, i.reconnect(), this.emitReserved("reconnect_error", g)) : i.onreconnect();
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
const si = {};
function Rc(f, i) {
  typeof f == "object" && (i = f, f = void 0), i = i || {};
  const s = k0(f, i.path || "/socket.io"), r = s.source, g = s.id, U = s.path, j = si[g] && U in si[g].nsps, G = i.forceNew || i["force new connection"] || i.multiplex === !1 || j;
  let x;
  return G ? x = new Xr(r, i) : (si[g] || (si[g] = new Xr(r, i)), x = si[g]), s.query && !i.query && (i.query = s.queryKey), x.socket(s.path, i);
}
Object.assign(Rc, {
  Manager: Xr,
  Socket: nm,
  io: Rc,
  connect: Rc
});
let ha = null;
function uv(f) {
  return ha ? ha.auth = { token: f } : ha = Rc({
    autoConnect: !1,
    transports: ["websocket"],
    auth: { token: f }
  }), ha;
}
function iv() {
  ha && (ha.disconnect(), ha = null);
}
const cv = ["POPULAR", "MAL_ONLY", "HYBRID"], sv = ["STANDARD", "BALANCED_STRICT", "BALANCED_RELAXED"], rv = ["OP_ONLY", "ED_ONLY", "MIXED"], fv = 2, ov = 3, dv = 2, hv = {
  name: "",
  isPrivate: !1,
  roundCount: 10,
  guessSeconds: 20,
  sampleSeconds: 10,
  sourceMode: "HYBRID",
  selectionMode: "STANDARD",
  themeMode: "MIXED"
};
function en(f, i, s, { timeoutMs: r = 1e4 } = {}) {
  return new Promise((g, U) => {
    let j = !1;
    const G = window.setTimeout(() => {
      j || (j = !0, U(new Error("Request timed out")));
    }, r);
    f.emit(i, s, (x) => {
      if (!j)
        return j = !0, window.clearTimeout(G), x?.ok ? g(x) : U(new Error(x?.error || x?.code || "Request failed"));
    });
  });
}
function _c(f) {
  return String(f || "").trim().toUpperCase();
}
function Ac(f, i) {
  const s = new URLSearchParams(window.location.search);
  f ? s.set("lobby", f) : s.delete("lobby"), i ? s.set("inviteToken", i) : s.delete("inviteToken");
  const r = s.toString();
  window.history.replaceState({}, "", r ? `${window.location.pathname}?${r}` : window.location.pathname);
}
function mv(f) {
  if (!Number.isFinite(f) || f <= 0) return "00:00";
  const i = Math.ceil(f / 1e3), s = Math.floor(i / 60), r = i % 60;
  return `${String(s).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function Yh(f, i) {
  return (i.score || 0) - (f.score || 0);
}
function yv(f) {
  return Array.isArray(f) ? f.map((i) => ({
    index: Number.parseInt(i?.index, 10),
    audioUrl: typeof i?.audioUrl == "string" ? i.audioUrl : null,
    videoUrl: typeof i?.videoUrl == "string" ? i.videoUrl : null,
    sampleStartSec: Number.isFinite(i?.sampleStartSec) ? i.sampleStartSec : 0,
    sampleDurationSec: Number.isFinite(i?.sampleDurationSec) ? i.sampleDurationSec : 0
  })).filter((i) => Number.isInteger(i.index) && i.index > 0).sort((i, s) => i.index - s.index) : [];
}
function au(f) {
  return String(f || "").trim();
}
function Gh(f) {
  const i = au(f).toLowerCase();
  return i ? i.includes("only host") ? "Only the host can start the game." : i.includes("not enough players") ? "Not enough players to start. Invite more players or lower the minimum players setting." : i.includes("balanced strict") ? "Balanced strict could not build fair rounds from MAL lists. Try BALANCED_RELAXED or HYBRID." : i.includes("mal_only") ? "MAL_ONLY could not build enough rounds from linked MAL lists. Try HYBRID or POPULAR." : i.includes("playable round media") || i.includes("round seeds") || i.includes("media provider") ? "Could not prepare enough playable songs for this match. Try fewer rounds or different source/theme settings." : i.includes("timed out") ? "Game start timed out. Please try again." : au(f) : "Could not start the game right now. Please try again.";
}
function vv(f) {
  const i = au(f).toLowerCase();
  return i ? i.includes("at least 2 characters") ? "Type at least 2 characters to search." : i.includes("too many") || i.includes("rate") ? "Search is rate-limited right now. Wait a few seconds and try again." : i.includes("timed out") ? "Search timed out. Please try again." : "Search is temporarily unavailable. You can still submit a typed guess." : "Search is temporarily unavailable. You can still submit a typed guess.";
}
function ri(f) {
  return f === "autoplay_blocked" ? "Autoplay was blocked or the sample failed to auto-start. Press Play sample." : f === "source_unavailable" ? "This sample source failed to load for your browser." : "Could not play sample audio for this round.";
}
function Xh(f) {
  const i = String(f?.name || ""), s = au(f?.message).toLowerCase();
  return i === "NotAllowedError" || s.includes("notallowederror") || s.includes("user gesture") || s.includes("permission") || s.includes("autoplay") ? "autoplay_blocked" : i === "AbortError" ? "aborted" : i === "NotSupportedError" || s.includes("failed to load") || s.includes("no supported source") || s.includes("not supported") ? "source_unavailable" : "play_failed";
}
function gv() {
  const f = Vh(), i = T.useRef(null), s = T.useRef(null), r = T.useRef(""), g = T.useRef(null), U = T.useRef(!1), j = T.useRef(null), G = T.useRef(null), x = T.useRef(null), D = T.useRef(null), k = T.useRef(null), Y = T.useRef(null), ht = T.useRef(0.25), Ht = T.useRef(null), Ft = T.useRef(/* @__PURE__ */ new Map()), bt = T.useRef(/* @__PURE__ */ new Map()), Se = T.useRef(/* @__PURE__ */ new Map()), It = T.useRef(/* @__PURE__ */ new Map()), ye = T.useRef(/* @__PURE__ */ new Map()), wt = T.useRef(/* @__PURE__ */ new Map()), ae = T.useRef(/* @__PURE__ */ new Map()), ue = T.useRef([]), Qt = T.useRef(/* @__PURE__ */ new Set()), I = T.useRef(0), Pt = T.useRef([]), Vt = T.useRef(!1), ke = T.useRef(null), re = T.useRef(!1), [ie, ql] = T.useState(!0), [fe, zt] = T.useState(""), [O, q] = T.useState(""), [Z, at] = T.useState(""), [St, y] = T.useState(!1), [R, H] = T.useState(null), [L, J] = T.useState([]), [$, mt] = T.useState(""), [Mt, pt] = T.useState(hv), [ln, Vn] = T.useState(""), [nn, an] = T.useState(""), [Ee, iu] = T.useState(""), [lt, ma] = T.useState(null), [cu, ya] = T.useState(null), [et, il] = T.useState("WAITING"), [su, un] = T.useState(null), [_e, oi] = T.useState("00:00"), [ft, va] = T.useState(null), [ga, cn] = T.useState([]), [ve, sn] = T.useState(null), [pa, gl] = T.useState(null), [Zt, xe] = T.useState([]), [te, ba] = T.useState(""), [ru, Sa] = T.useState(null), [Zn, Je] = T.useState([]), [rn, Te] = T.useState(!1), [pl, Be] = T.useState(!1), [fu, We] = T.useState(!1), [ou, xl] = T.useState(null), [Kn, bl] = T.useState(!1), [Sl, di] = T.useState(0.25), [Ea, El] = T.useState(""), [kn, Ne] = T.useState(""), [je, Ct] = T.useState(""), [ce, Oe] = T.useState(!1), [ge, du] = T.useState({ ready: 0, failed: 0, total: 0 }), [hu, Bl] = T.useState(""), [fn, _l] = T.useState(!1), [Lt, on] = T.useState(null), [Al, jl] = T.useState(!1), [Yt, mu] = T.useState("");
  T.useEffect(() => {
    s.current = lt;
  }, [lt]), T.useEffect(() => {
    r.current = nn;
  }, [nn]), T.useEffect(() => {
    ht.current = Sl;
  }, [Sl]), T.useEffect(() => {
    if (!rn || et !== "GUESSING") return;
    const d = (E) => {
      E.key === "Escape" && (Te(!1), D.current?.blur?.());
    };
    return window.addEventListener("keydown", d), () => {
      window.removeEventListener("keydown", d);
    };
  }, [et, rn]), T.useEffect(() => {
    et !== "GUESSING" && Te(!1);
  }, [et]);
  const yu = T.useMemo(() => {
    const d = /* @__PURE__ */ new Map();
    for (const E of lt?.players || [])
      d.set(E.userId, E.displayName);
    return d;
  }, [lt]), Hl = T.useCallback((d) => yu.get(d) || `User ${d}`, [yu]), cl = T.useCallback(() => {
    Y.current && (window.clearTimeout(Y.current), Y.current = null);
  }, []), He = T.useCallback(() => {
    cl(), j.current && j.current.pause(), G.current && G.current.pause(), k.current = null, We(!1);
  }, [cl]), sl = T.useCallback(() => {
    const d = x.current;
    if (d) {
      d.pause();
      try {
        d.currentTime = 0;
      } catch {
      }
    }
  }, []), rl = T.useCallback(() => {
    const d = Pt.current;
    if (!Array.isArray(d) || d.length === 0) {
      du({ ready: 0, failed: 0, total: 0 });
      return;
    }
    let E = 0, z = 0;
    for (const B of d) {
      const Q = bt.current.get(B);
      Q === "ready" ? E += 1 : Q === "failed" && (z += 1);
    }
    du({ ready: E, failed: z, total: d.length });
  }, []), _a = T.useCallback((d = null) => {
    const E = d instanceof Set ? d : null, z = [];
    for (const [B] of ae.current)
      E && E.has(B) || z.push(B);
    for (const B of z) {
      const Q = ae.current.get(B);
      if (Q) {
        try {
          Q.pause?.(), Q.removeAttribute("src"), Q.load?.();
        } catch {
        }
        Q.parentNode && Q.parentNode.removeChild(Q);
      }
      ae.current.delete(B), wt.current.delete(B), ye.current.delete(B);
    }
  }, []), fl = T.useCallback(() => {
    Vt.current = !0, Ft.current.clear(), bt.current.clear(), Se.current.clear(), It.current.clear(), ue.current = [], Qt.current.clear(), I.current = 0, Pt.current = [], ke.current = null, re.current = !1, _a(), Oe(!1), du({ ready: 0, failed: 0, total: 0 }), Bl(""), _l(!1);
  }, [_a]), Jn = T.useCallback((d, E = "video") => {
    const z = typeof d == "string" ? d.trim() : "";
    if (!z)
      return Promise.reject(new Error("Missing media url"));
    const B = ye.current.get(z);
    if (B === "ready")
      return Promise.resolve(!0);
    const Q = wt.current.get(z);
    if (B === "loading" && Q)
      return Q;
    ye.current.set(z, "loading");
    const tt = new Promise((At, ee) => {
      if (Vt.current) {
        ye.current.set(z, "failed"), ee(new Error("Preload manager was reset"));
        return;
      }
      const nt = document.createElement(E === "audio" ? "audio" : "video");
      nt.preload = "auto", nt.muted = !0, nt.playsInline = !0, nt.style.position = "absolute", nt.style.left = "-10000px", nt.style.width = "1px", nt.style.height = "1px", nt.style.opacity = "0";
      const Dt = (Dc) => {
        if (le(), Dc) {
          ye.current.set(z, "ready"), ae.current.set(z, nt), At(!0);
          return;
        }
        ye.current.set(z, "failed"), ae.current.delete(z), nt.parentNode && nt.parentNode.removeChild(nt), ee(new Error("Media preload failed"));
      }, le = () => {
        window.clearTimeout(ze), nt.removeEventListener("loadeddata", ct), nt.removeEventListener("canplaythrough", ct), nt.removeEventListener("error", Ol);
      }, ct = () => Dt(!0), Ol = () => Dt(!1), ze = window.setTimeout(() => Dt(!1), 12e3);
      nt.addEventListener("loadeddata", ct, { once: !0 }), nt.addEventListener("canplaythrough", ct, { once: !0 }), nt.addEventListener("error", Ol, { once: !0 }), document.body.appendChild(nt), nt.src = z, nt.load();
    }).finally(() => {
      ye.current.get(z) !== "loading" && wt.current.delete(z);
    });
    return wt.current.set(z, tt), tt;
  }, []), $e = T.useCallback(async (d) => {
    const E = Number.parseInt(d, 10);
    if (!Number.isInteger(E) || E <= 0 || Vt.current) return !1;
    const z = Se.current.get(E);
    if (z) return z;
    if (bt.current.get(E) === "ready") return !0;
    const Q = Ft.current.get(E);
    if (!Q)
      return bt.current.set(E, "failed"), rl(), !1;
    const tt = [Q.audioUrl, Q.videoUrl].filter((ee, nt, Dt) => ee && Dt.indexOf(ee) === nt);
    It.current.set(E, new Set(tt)), bt.current.set(E, "loading"), rl();
    const At = (async () => {
      if (tt.length === 0)
        return bt.current.set(E, "failed"), !1;
      const nt = (await Promise.allSettled(tt.map((Dt) => {
        const le = Q.audioUrl && Dt === Q.audioUrl ? "audio" : "video";
        return Jn(Dt, le);
      }))).some((Dt) => Dt.status === "fulfilled");
      return bt.current.set(E, nt ? "ready" : "failed"), nt;
    })().finally(() => {
      Se.current.delete(E), rl();
    });
    return Se.current.set(E, At), At;
  }, [Jn, rl]), pe = T.useCallback(() => {
    if (!Vt.current)
      for (; I.current < dv && ue.current.length > 0; ) {
        const d = ue.current.shift();
        Qt.current.delete(d);
        const E = bt.current.get(d);
        E === "ready" || E === "loading" || (I.current += 1, $e(d).catch(() => !1).finally(() => {
          I.current = Math.max(0, I.current - 1), pe();
        }));
      }
  }, [$e]), wl = T.useCallback((d = []) => {
    for (const E of d) {
      const z = Number.parseInt(E, 10);
      if (!Number.isInteger(z) || z <= 0 || !Ft.current.has(z)) continue;
      const B = bt.current.get(z);
      B === "ready" || B === "loading" || Qt.current.has(z) || (bt.current.set(z, "pending"), ue.current.push(z), Qt.current.add(z));
    }
    rl(), pe();
  }, [pe, rl]), Aa = T.useCallback(async (d, E = 2e4) => {
    const z = (Array.isArray(d) ? d : []).map((Q) => Number.parseInt(Q, 10)).filter((Q) => Number.isInteger(Q) && Q > 0);
    if (z.length === 0) return { ok: !0 };
    const B = Date.now();
    for (; !Vt.current; ) {
      const Q = z.filter((At) => bt.current.get(At) === "failed");
      if (Q.length > 0)
        return { ok: !1, reason: "failed", failedIndexes: Q };
      if (z.every((At) => bt.current.get(At) === "ready")) return { ok: !0 };
      if (Date.now() - B >= E)
        return { ok: !1, reason: "timeout" };
      await new Promise((At) => window.setTimeout(At, 120));
    }
    return { ok: !1, reason: "cancelled" };
  }, []), dn = T.useCallback((d) => !d || d.ok ? "" : d.reason === "failed" ? "Failed to preload required round media. Retry to continue." : d.reason === "timeout" ? "Preloading required media timed out. Retry to continue." : "Preloading was interrupted. Retry to continue.", []), vu = T.useCallback((d = []) => {
    const E = new Set(
      (Array.isArray(d) ? d : []).map((B) => Number.parseInt(B, 10)).filter((B) => Number.isInteger(B) && B > 0)
    ), z = /* @__PURE__ */ new Set();
    for (const [B, Q] of It.current)
      if (E.has(B))
        for (const tt of Q || []) z.add(tt);
    for (const B of [...It.current.keys()])
      E.has(B) || (It.current.delete(B), bt.current.delete(B), Se.current.delete(B));
    ue.current = ue.current.filter((B) => E.has(B)), Qt.current = new Set(ue.current), _a(z);
  }, [_a]), Tl = T.useCallback(async (d, E) => {
    const z = _c(d), B = Number.parseInt(E, 10);
    if (!z || !Number.isInteger(B) || re.current) return;
    const Q = i.current;
    if (Q?.connected) {
      re.current = !0;
      try {
        await en(Q, "game:preload_ready", {
          lobbyCode: z,
          sessionId: B
        });
      } catch (tt) {
        re.current = !1, q(tt.message);
      }
    }
  }, []), hi = T.useCallback(async ({ sessionId: d, lobbyCode: E, manifest: z }) => {
    fl(), Vt.current = !1;
    const B = yv(z);
    Ft.current = new Map(B.map((At) => [At.index, At])), ke.current = Number.parseInt(d, 10) || null, re.current = !1, Bl(""), _l(!1);
    const Q = B.slice(0, fv).map((At) => At.index);
    if (Pt.current = Q, rl(), Q.length === 0) {
      await Tl(E, ke.current);
      return;
    }
    Oe(!0), wl(Q);
    const tt = await Aa(Q);
    if (!Vt.current) {
      if (!tt.ok) {
        Bl(dn(tt)), Oe(!0);
        return;
      }
      Oe(!1), await Tl(E, ke.current);
    }
  }, [
    dn,
    wl,
    fl,
    Tl,
    rl,
    Aa
  ]), Re = T.useCallback(async () => {
    if (Vt.current || re.current) return;
    const d = s.current?.code, E = ke.current, z = Pt.current;
    if (!d || !Number.isInteger(E) || !Array.isArray(z) || z.length === 0)
      return;
    _l(!0), Bl(""), Oe(!0), wl(z);
    const B = await Aa(z);
    if (!Vt.current) {
      if (!B.ok) {
        Bl(dn(B)), _l(!1);
        return;
      }
      _l(!1), Oe(!1), await Tl(d, E);
    }
  }, [dn, wl, Tl, Aa]), Ta = T.useCallback((d) => {
    const E = Number.parseInt(d, 10);
    if (!Number.isInteger(E) || E <= 0) return;
    const z = [];
    for (let B = 0; B < ov; B += 1)
      z.push(E + B);
    wl(z), vu(z);
  }, [wl, vu]), gu = T.useCallback((d) => {
    const E = String(d || "0");
    let z = 2166136261;
    for (let B = 0; B < E.length; B += 1)
      z ^= E.charCodeAt(B), z = Math.imul(z, 16777619);
    return (z >>> 0) / 4294967295;
  }, []), Na = T.useCallback(async (d) => {
    if (!d) return null;
    const E = Number(d.duration);
    if (Number.isFinite(E) && E > 0) return E;
    await new Promise((B) => {
      let Q = !1;
      const tt = () => {
        Q || (Q = !0, At(), B());
      }, At = () => {
        d.removeEventListener("loadedmetadata", tt), d.removeEventListener("durationchange", tt), d.removeEventListener("loadeddata", tt), d.removeEventListener("error", tt);
      };
      d.addEventListener("loadedmetadata", tt), d.addEventListener("durationchange", tt), d.addEventListener("loadeddata", tt), d.addEventListener("error", tt), window.setTimeout(tt, 2e3);
    });
    const z = Number(d.duration);
    return Number.isFinite(z) && z > 0 ? z : null;
  }, []), Ll = T.useCallback(async (d, E) => {
    const z = Ht.current;
    if (Number.isFinite(z) && z >= 0) return z;
    const B = Number.isFinite(E?.sampleStartSec) ? Math.max(0, E.sampleStartSec) : 0;
    if (B > 0)
      return Ht.current = B, B;
    const Q = Number.isFinite(E?.sampleDurationSec) ? Math.max(1, E.sampleDurationSec) : 10, tt = await Na(d);
    if (!Number.isFinite(tt) || tt <= 0)
      return Ht.current = B, B;
    const At = Math.floor(tt - Q);
    if (At <= 0)
      return Ht.current = 0, 0;
    const ee = `${ft?.roundId || 0}:${E?.animeId || 0}:${Q}`, nt = gu(ee), Dt = Math.floor(nt * (At + 1));
    return Ht.current = Dt, Dt;
  }, [ft?.roundId, gu, Na]), hn = T.useCallback(async () => {
    const d = x.current;
    if (!d) return !1;
    d.volume = Math.max(0, Math.min(1, Number(ht.current))), d.muted = !1;
    try {
      return await d.play(), bl(!1), Ct(""), !0;
    } catch (E) {
      const z = Xh(E);
      return z === "autoplay_blocked" ? (bl(!0), !1) : (z !== "aborted" && Ct('Could not play solution video in this browser. Use "Open video source".'), bl(!1), !1);
    }
  }, []), mn = T.useCallback(async ({ isAutoplay: d = !1 } = {}) => {
    const E = j.current, z = G.current, B = ft?.sample;
    if (et !== "GUESSING" || !E && !z || !B?.audioUrl && !B?.videoUrl) return !1;
    cl(), He(), Ne("");
    const Q = Number.isFinite(B.sampleDurationSec) ? Math.max(1, B.sampleDurationSec) : 10, tt = Math.max(0, Math.min(1, Number(ht.current))), At = async (le, ct) => {
      if (!le) return { ok: !1, reason: "source_unavailable" };
      le.volume = tt, le.muted = !1;
      const Ol = await Ll(le, B);
      try {
        le.currentTime = Ol;
      } catch {
      }
      try {
        return await le.play(), k.current = le, xl(ct), Be(!1), Ne(""), We(!0), Y.current = window.setTimeout(() => {
          const ze = k.current;
          ze && (ze.pause(), We(!1), k.current = null);
        }, Q * 1e3), { ok: !0, reason: null };
      } catch (ze) {
        return { ok: !1, reason: Xh(ze) };
      }
    }, ee = B?.audioUrl ? await At(E, "audio") : { ok: !1, reason: "source_unavailable" };
    if (ee.ok) return !0;
    const nt = B?.videoUrl ? await At(z, "video") : { ok: !1, reason: "source_unavailable" };
    if (nt.ok) return !0;
    const Dt = [ee.reason, nt.reason].filter(Boolean);
    return Dt.includes("autoplay_blocked") ? (Be(!0), Ne(ri("autoplay_blocked")), !1) : (Be(!1), Dt.includes("source_unavailable") ? (Ne(ri("source_unavailable")), !1) : ((!Dt.includes("aborted") || !d) && Ne(ri("play_failed")), !1));
  }, [cl, et, Ll, ft, He]), we = T.useCallback(() => {
    fl(), He(), sl(), ya(null), il("WAITING"), un(null), va(null), cn([]), sn(null), gl(null), xe([]), ba(""), Sa(null), Je([]), El(""), Ne(""), Ct(""), Be(!1), xl(null), bl(!1);
  }, [fl, He, sl]), mi = T.useCallback((d) => {
    const E = d || {}, z = E.phase || "WAITING";
    if (il(z), va(E.round || null), xe(Array.isArray(E.readyUserIds) ? E.readyUserIds : []), un(E.endsAt || E.solution?.endsAt || null), z === "ANSWERS_REVEAL") {
      cn(Array.isArray(E.answers) ? E.answers : []), sn(null);
      return;
    }
    if (z === "SOLUTION_REVEAL") {
      cn(Array.isArray(E.answers) ? E.answers : []), sn(E.solution || null);
      return;
    }
    z === "WAITING" && (cn([]), sn(null));
  }, []), yn = T.useCallback(async (d) => {
    const E = i.current;
    if (!(!E?.connected || !d))
      try {
        const z = await en(E, "round:sync", { lobbyCode: d });
        mi(z?.state || {});
      } catch (z) {
        q(z.message);
      }
  }, [mi]), vn = T.useCallback(async (d = "") => {
    const E = String(d || "").trim(), z = new URLSearchParams();
    E && z.set("q", E);
    const B = await da(`/game/lobbies${z.toString() ? `?${z}` : ""}`);
    J(Array.isArray(B.lobbies) ? B.lobbies : []);
  }, []), gn = T.useCallback(async (d, E, z) => {
    const B = i.current;
    if (!B) return;
    const Q = {
      lobbyCode: d,
      ...E ? { inviteToken: E } : {},
      ...z ? { displayName: z } : {}
    };
    if (!B.connected) {
      g.current = Q, B.connect();
      return;
    }
    await en(B, "lobby:join", Q), await yn(d);
  }, [yn]), Oa = T.useCallback(async (d, E = "") => {
    const z = _c(d);
    if (!z) return q("Lobby code is required");
    zt("join"), q(""), at("");
    try {
      const B = {};
      Ee.trim() && (B.displayName = Ee.trim()), E && (B.inviteToken = E);
      const Q = await da(`/game/lobbies/${z}/join`, {
        method: "POST",
        body: JSON.stringify(B)
      });
      ma(Q.lobby), an(E || ""), we(), Ac(z, E || ""), await gn(z, E || "", Ee.trim()), at(`Joined lobby ${z}`);
    } catch (B) {
      q(B.message);
    } finally {
      zt("");
    }
  }, [we, Ee, gn]), Cc = T.useCallback(async () => {
    zt("create"), q(""), at("");
    try {
      const d = await da("/game/lobbies", {
        method: "POST",
        body: JSON.stringify(Mt)
      });
      ma(d.lobby), we(), Ac(d.lobby.code, ""), await gn(d.lobby.code, "", Ee.trim()), at(`Created lobby ${d.lobby.code}`);
    } catch (d) {
      q(d.message);
    } finally {
      zt("");
    }
  }, [we, Mt, Ee, gn]), Ra = T.useCallback(async () => {
    if (lt?.code) {
      zt("leave"), q("");
      try {
        i.current?.connected && await en(i.current, "lobby:leave", { lobbyCode: lt.code });
      } catch (d) {
        q(d.message);
      } finally {
        ma(null), an(""), Ac("", ""), we(), zt(""), vn($).catch(() => {
        });
      }
    }
  }, [we, vn, lt, $]), ol = T.useCallback(async () => {
    if (!(!lt?.code || !i.current)) {
      zt("start"), q("");
      try {
        await en(i.current, "game:start", { lobbyCode: lt.code }, { timeoutMs: 12e4 });
      } catch (d) {
        q(Gh(d.message));
      } finally {
        zt("");
      }
    }
  }, [lt]), pu = T.useCallback(async () => {
    if (!(!lt?.code || !ft?.roundId || !i.current)) {
      zt("guess"), q("");
      try {
        await en(i.current, "round:submit_guess", {
          lobbyCode: lt.code,
          roundId: ft.roundId,
          guessText: te.trim(),
          guessAnimeId: Number.isInteger(ru) ? ru : null
        }), at("Guess saved");
      } catch (d) {
        q(d.message);
      } finally {
        zt("");
      }
    }
  }, [ru, te, lt, ft]), bu = T.useCallback(async () => {
    if (!(!lt?.code || !i.current || !R)) {
      zt("ready"), q("");
      try {
        const d = Zt.includes(R.id);
        await en(i.current, "round:set_ready", { lobbyCode: lt.code, ready: !d });
      } catch (d) {
        q(d.message);
      } finally {
        zt("");
      }
    }
  }, [lt, Zt, R]), pn = T.useCallback(async () => {
    if (lt?.code) {
      zt("invite"), q(""), at("");
      try {
        const d = await da(`/game/lobbies/${lt.code}/invite`);
        d.inviteToken && (an(d.inviteToken), Ac(lt.code, d.inviteToken)), navigator.clipboard?.writeText ? (await navigator.clipboard.writeText(d.inviteUrl), at("Invite link copied")) : at(d.inviteUrl);
      } catch (d) {
        q(d.message);
      } finally {
        zt("");
      }
    }
  }, [lt]);
  T.useEffect(() => {
    if (!f) return xh();
    const d = uv(f);
    i.current = d;
    const E = async () => {
      y(!0), q("");
      try {
        g.current ? (await en(d, "lobby:join", g.current), await yn(g.current.lobbyCode), g.current = null) : s.current?.code && (await en(d, "lobby:join", {
          lobbyCode: s.current.code,
          ...r.current ? { inviteToken: r.current } : {}
        }), await yn(s.current.code));
      } catch (ct) {
        q(ct.message);
      }
    }, z = () => y(!1), B = (ct) => {
      const Ol = String(ct?.code || ""), ze = au(ct?.message);
      if (Ol === "game_start_failed") {
        q(Gh(ze));
        return;
      }
      q(ze || "Realtime error");
    }, Q = ({ lobby: ct }) => ct && ma(ct), tt = ({ sessionId: ct, config: Ol, preloadManifest: ze }) => {
      ya({ sessionId: ct, ...Ol || {} }), gl(null), il("PENDING"), s.current?.code && hi({
        sessionId: ct,
        lobbyCode: s.current.code,
        manifest: ze
      }).catch(() => {
      });
    }, At = (ct) => {
      He(), sl(), Oe(!1), Bl(""), _l(!1), il("GUESSING"), un(ct?.endsAt || null), va(ct || null), cn([]), sn(null), gl(null), xe([]), ba(""), Sa(null), Je([]), El(""), Ne(""), Ct(""), Be(!1), xl(null), bl(!1), Ht.current = null, Ta(ct?.index);
    }, ee = (ct) => {
      il("ANSWERS_REVEAL"), un(ct?.endsAt || null), cn(Array.isArray(ct?.answers) ? ct.answers : []);
    }, nt = (ct) => {
      He(), il("SOLUTION_REVEAL"), un(ct?.endsAt || null), sn(ct || null), Ne(""), Ct(""), bl(!1);
    }, Dt = (ct) => {
      fl(), He(), sl(), il("FINISHED"), un(null), Ne(""), Ct(""), gl(ct || null);
    }, le = (ct) => {
      xe(Array.isArray(ct?.readyUserIds) ? ct.readyUserIds : []);
    };
    return d.on("connect", E), d.on("disconnect", z), d.on("error", B), d.on("lobby:state", Q), d.on("game:started", tt), d.on("round:started", At), d.on("round:answers_reveal", ee), d.on("round:solution", nt), d.on("game:finished", Dt), d.on("round:ready_state", le), d.connect(), () => {
      d.off("connect", E), d.off("disconnect", z), d.off("error", B), d.off("lobby:state", Q), d.off("game:started", tt), d.off("round:started", At), d.off("round:answers_reveal", ee), d.off("round:solution", nt), d.off("game:finished", Dt), d.off("round:ready_state", le), iv();
    };
  }, [hi, Ta, yn, fl, He, sl, f]);
  const dl = T.useCallback(async ({ forceRefresh: d = !1, silent: E = !1 } = {}) => {
    E || jl(!0);
    try {
      const B = await da(d ? "/game/media-source-status?refresh=1" : "/game/media-source-status");
      on(B?.status || null), mu("");
    } catch (z) {
      mu(au(z?.message) || "Could not fetch media source status");
    } finally {
      E || jl(!1);
    }
  }, []);
  T.useEffect(() => {
    if (!f) return;
    let d = !0;
    return (async () => {
      try {
        const E = await da("/auth/me");
        if (!d) return;
        H(E), await vn("");
      } catch {
        xh();
        return;
      } finally {
        d && ql(!1);
      }
    })(), () => {
      d = !1;
    };
  }, [vn, f]), T.useEffect(() => {
    if (!f) return;
    let d = !0;
    dl({ forceRefresh: !0 }).catch(() => {
    });
    const E = window.setInterval(() => {
      d && dl({ silent: !0 }).catch(() => {
      });
    }, 15e3);
    return () => {
      d = !1, window.clearInterval(E);
    };
  }, [dl, f]), T.useEffect(() => {
    if (ie || !R || U.current) return;
    U.current = !0;
    const d = new URLSearchParams(window.location.search), E = _c(d.get("lobby")), z = d.get("inviteToken") || "";
    E && (Vn(E), an(z), Oa(E, z).catch(() => {
    }));
  }, [Oa, ie, R]), T.useEffect(() => {
    if (!su) return oi("00:00");
    const d = () => oi(mv(new Date(su).getTime() - Date.now()));
    d();
    const E = window.setInterval(d, 250);
    return () => window.clearInterval(E);
  }, [su]), T.useEffect(() => {
    if (et !== "GUESSING") {
      Je([]), El("");
      return;
    }
    const d = te.trim();
    if (d.length < 2) {
      Je([]), El("");
      return;
    }
    const E = window.setTimeout(async () => {
      try {
        const z = await da("/game/search", {
          method: "POST",
          body: JSON.stringify({ query: d, limit: 8 })
        });
        Je(Array.isArray(z.results) ? z.results : []), El("");
      } catch (z) {
        Je([]), El(vv(z?.message));
      }
    }, 300);
    return () => window.clearTimeout(E);
  }, [te, et]), T.useEffect(() => {
    if (!!!(ft?.sample?.audioUrl || ft?.sample?.videoUrl)) {
      Be(!1), He();
      return;
    }
    if (et !== "GUESSING") {
      (et === "SOLUTION_REVEAL" || et === "WAITING" || et === "FINISHED" || et === "PENDING") && (Be(!1), He());
      return;
    }
    let E = !1;
    const z = window.setTimeout(() => {
      E || mn({ isAutoplay: !0 }).catch(() => {
      });
    }, 0);
    return () => {
      E = !0, window.clearTimeout(z);
    };
  }, [et, mn, ft?.roundId, ft?.sample?.audioUrl, ft?.sample?.videoUrl, He]), T.useEffect(() => {
    Ht.current = null;
  }, [ft?.roundId]), T.useEffect(() => {
    if (!pl || et !== "GUESSING") return;
    const d = () => {
      mn({ isAutoplay: !1 }).catch(() => {
      });
    };
    return window.addEventListener("pointerdown", d), window.addEventListener("keydown", d), () => {
      window.removeEventListener("pointerdown", d), window.removeEventListener("keydown", d);
    };
  }, [et, mn, pl]), T.useEffect(() => {
    if (et !== "SOLUTION_REVEAL" || !ve?.video) {
      bl(!1), Ct(""), sl();
      return;
    }
    let d = !1;
    const E = window.setTimeout(() => {
      d || hn().catch(() => {
      });
    }, 0);
    return () => {
      d = !0, window.clearTimeout(E), sl();
    };
  }, [et, hn, ve?.video, sl]), T.useEffect(() => {
    if (!Kn || et !== "SOLUTION_REVEAL") return;
    const d = () => {
      hn().catch(() => {
      });
    };
    return window.addEventListener("pointerdown", d), window.addEventListener("keydown", d), () => {
      window.removeEventListener("pointerdown", d), window.removeEventListener("keydown", d);
    };
  }, [et, hn, Kn]), T.useEffect(() => {
    const d = Math.max(0, Math.min(1, Number(Sl)));
    j.current && (j.current.volume = d), G.current && (G.current.volume = d), x.current && (x.current.volume = d);
  }, [Sl, ft?.roundId, ve?.video]);
  const yi = T.useMemo(() => !!(lt && R && lt.host?.id === R.id), [lt, R]), Su = T.useMemo(() => !!(R && Zt.includes(R.id)), [Zt, R]), za = T.useMemo(() => !!(ft?.sample?.audioUrl || ft?.sample?.videoUrl), [ft]), Wn = T.useMemo(() => !!(ft && za && (et === "GUESSING" || et === "ANSWERS_REVEAL")), [za, et, ft]), Le = T.useMemo(() => {
    const d = Number.parseInt(ft?.sample?.sampleDurationSec, 10);
    return !Number.isFinite(d) || d <= 0 ? "Sample ready" : `${d}s preview`;
  }, [ft]), Eu = T.useMemo(() => `${Math.round(Sl * 100)}%`, [Sl]), bn = T.useMemo(() => {
    if (!Lt)
      return { label: Al ? "Checking" : "Unknown", tone: "neutral" };
    if (!Lt.ok)
      return { label: "Down", tone: "down" };
    const d = Number(Lt.latencyMs);
    return Number.isFinite(d) && d >= 2500 ? { label: "Slow", tone: "warn" } : { label: "Healthy", tone: "ok" };
  }, [Al, Lt]), Nl = T.useMemo(() => {
    const d = Number(Lt?.latencyMs);
    return Number.isFinite(d) ? `${Math.round(d)} ms` : "n/a";
  }, [Lt]), _u = T.useMemo(() => {
    if (!Lt?.checkedAt) return "n/a";
    const d = new Date(Lt.checkedAt);
    return Number.isNaN(d.getTime()) ? "n/a" : d.toLocaleTimeString();
  }, [Lt]), Sn = T.useMemo(() => ce ? { label: "Busy", tone: "warn", detail: ge.total > 0 ? `Preloading required rounds (${ge.ready}/${ge.total})` : "Preloading required rounds" } : ge.failed > 0 ? { label: "Degraded", tone: "warn", detail: `Preload failures detected (${ge.failed})` } : kn || je ? { label: "Degraded", tone: "warn", detail: "Client playback errors detected in this session" } : pl || Kn ? { label: "Blocked", tone: "warn", detail: "Browser autoplay restrictions require user interaction" } : fu ? { label: "Active", tone: "ok", detail: "Sample playback is running" } : { label: "Idle", tone: "neutral", detail: `Phase ${et}` }, [
    kn,
    et,
    ce,
    ge.failed,
    ge.ready,
    ge.total,
    pl,
    fu,
    je,
    Kn
  ]), vi = T.useCallback((d) => {
    const E = Math.max(0, Math.min(1, Number.parseFloat(d.target.value)));
    di(Number.isFinite(E) ? E : 0.8);
  }, []), $n = T.useMemo(() => et === "FINISHED" ? (pa?.finalScores || []).slice().sort(Yh) : et === "SOLUTION_REVEAL" ? (ve?.scores || []).slice().sort(Yh) : [], [pa, et, ve]);
  return ie ? /* @__PURE__ */ A.jsx("section", { className: "gmq-shell", children: "Loading game..." }) : /* @__PURE__ */ A.jsxs("section", { className: "gmq-shell", children: [
    /* @__PURE__ */ A.jsxs("header", { className: "gmq-header", children: [
      /* @__PURE__ */ A.jsxs("div", { children: [
        /* @__PURE__ */ A.jsx("h1", { children: "Anime Music Quiz" }),
        /* @__PURE__ */ A.jsxs("p", { className: "gmq-muted", children: [
          "Socket: ",
          St ? "Connected" : "Disconnected",
          lt ? ` | Lobby ${lt.code}` : "",
          cu?.sessionId ? ` | Session ${cu.sessionId}` : ""
        ] })
      ] }),
      lt ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-actions", children: [
        /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: pn, disabled: fe === "invite", children: "Copy Invite" }),
        /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-danger", onClick: Ra, disabled: fe === "leave", children: "Leave" })
      ] }) : null
    ] }),
    O ? /* @__PURE__ */ A.jsx("div", { className: "gmq-alert gmq-alert-error", children: O }) : null,
    Z ? /* @__PURE__ */ A.jsx("div", { className: "gmq-alert gmq-alert-info", children: Z }) : null,
    lt ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-grid gmq-grid-match", children: [
      /* @__PURE__ */ A.jsxs("article", { className: "gmq-card gmq-card-lobby", children: [
        /* @__PURE__ */ A.jsxs("h2", { children: [
          "Lobby ",
          lt.code
        ] }),
        /* @__PURE__ */ A.jsxs("p", { className: "gmq-muted", children: [
          lt.name || "Untitled",
          " | ",
          lt.playerCount,
          "/",
          lt.maxPlayers,
          " players"
        ] }),
        /* @__PURE__ */ A.jsx("ul", { className: "gmq-player-list", children: (lt.players || []).map((d) => /* @__PURE__ */ A.jsxs("li", { children: [
          /* @__PURE__ */ A.jsxs("span", { children: [
            d.displayName,
            d.userId === lt.host?.id ? " (Host)" : "",
            d.isConnected ? "" : " (offline)"
          ] }),
          et === "GUESSING" ? /* @__PURE__ */ A.jsx("strong", { children: Zt.includes(d.userId) ? "Ready" : "Thinking" }) : null
        ] }, d.userId)) }),
        lt.status === "WAITING" ? yi ? /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: ol, disabled: fe === "start", children: "Start Game" }) : /* @__PURE__ */ A.jsx("p", { className: "gmq-muted", children: "Waiting for host to start." }) : null
      ] }),
      /* @__PURE__ */ A.jsxs("article", { className: "gmq-card gmq-card-media", children: [
        /* @__PURE__ */ A.jsx("h2", { children: "Media Status" }),
        /* @__PURE__ */ A.jsxs("div", { className: "gmq-status-row", children: [
          /* @__PURE__ */ A.jsx("span", { className: `gmq-status-dot gmq-status-dot-${bn.tone}` }),
          /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
            /* @__PURE__ */ A.jsxs("strong", { children: [
              "Source API: ",
              bn.label
            ] }),
            /* @__PURE__ */ A.jsxs("p", { className: "gmq-muted", children: [
              Lt?.provider || "AnimeThemes",
              " | Latency ",
              Nl
            ] }),
            /* @__PURE__ */ A.jsxs("p", { className: "gmq-muted", children: [
              "Last check: ",
              _u,
              Lt?.cached ? " (cached)" : ""
            ] }),
            Lt?.ok === !1 && Lt?.error ? /* @__PURE__ */ A.jsx("p", { className: "gmq-muted gmq-muted-warning", children: Lt.error }) : null,
            Yt ? /* @__PURE__ */ A.jsx("p", { className: "gmq-muted gmq-muted-warning", children: Yt }) : null
          ] })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "gmq-status-row", children: [
          /* @__PURE__ */ A.jsx("span", { className: `gmq-status-dot gmq-status-dot-${Sn.tone}` }),
          /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
            /* @__PURE__ */ A.jsxs("strong", { children: [
              "Local Client: ",
              Sn.label
            ] }),
            /* @__PURE__ */ A.jsx("p", { className: "gmq-muted", children: Sn.detail })
          ] })
        ] }),
        /* @__PURE__ */ A.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-secondary",
            onClick: () => dl({ forceRefresh: !0 }).catch(() => {
            }),
            disabled: Al,
            children: Al ? "Checking..." : "Refresh Source Status"
          }
        )
      ] }),
      /* @__PURE__ */ A.jsxs("article", { className: "gmq-card gmq-card-round", children: [
        /* @__PURE__ */ A.jsx("h2", { children: "Round" }),
        /* @__PURE__ */ A.jsxs("p", { className: "gmq-round-phase", children: [
          et,
          " | ",
          _e
        ] }),
        et === "PENDING" && ce ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ A.jsx("p", { children: "Preparing media cache before round 1..." }),
          /* @__PURE__ */ A.jsxs("p", { className: "gmq-muted", children: [
            "Ready ",
            ge.ready,
            "/",
            ge.total,
            ge.failed > 0 ? ` | Failed ${ge.failed}` : ""
          ] }),
          hu ? /* @__PURE__ */ A.jsx("p", { className: "gmq-muted gmq-muted-warning", children: hu }) : null,
          hu ? /* @__PURE__ */ A.jsx(
            "button",
            {
              type: "button",
              className: "gmq-btn gmq-btn-secondary",
              onClick: () => Re().catch(() => {
              }),
              disabled: fn,
              children: fn ? "Retrying..." : "Retry preload"
            }
          ) : null
        ] }) : null,
        Wn ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-sample-player", children: [
          ft?.sample?.audioUrl ? /* @__PURE__ */ A.jsx(
            "audio",
            {
              ref: j,
              src: ft.sample.audioUrl,
              preload: "auto",
              onPlay: () => We(!0),
              onPause: () => We(!1),
              onEnded: () => We(!1),
              onError: () => Ne(ri("source_unavailable"))
            },
            `audio-${ft.roundId}`
          ) : null,
          ft?.sample?.videoUrl ? /* @__PURE__ */ A.jsx(
            "video",
            {
              ref: G,
              src: ft.sample.videoUrl,
              preload: "auto",
              playsInline: !0,
              onPlay: () => We(!0),
              onPause: () => We(!1),
              onEnded: () => We(!1),
              onError: () => Ne(ri("source_unavailable"))
            },
            `video-${ft.roundId}`
          ) : null,
          /* @__PURE__ */ A.jsxs("label", { className: "gmq-volume-row", children: [
            /* @__PURE__ */ A.jsxs("span", { children: [
              "Volume ",
              Eu
            ] }),
            /* @__PURE__ */ A.jsx(
              "input",
              {
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Sl,
                onChange: vi
              }
            )
          ] }),
          pl ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
            /* @__PURE__ */ A.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
            /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => mn({ isAutoplay: !1 }).catch(() => {
            }), children: "Play sample" })
          ] }) : ou === "video" && !ft?.sample?.audioUrl ? /* @__PURE__ */ A.jsxs("p", { className: "gmq-muted", children: [
            "Using video source audio. ",
            Le
          ] }) : fu ? /* @__PURE__ */ A.jsxs("p", { className: "gmq-muted", children: [
            "Sample is playing. ",
            Le
          ] }) : /* @__PURE__ */ A.jsx("p", { className: "gmq-muted", children: Le }),
          kn ? /* @__PURE__ */ A.jsx("p", { className: "gmq-muted gmq-muted-warning", children: kn }) : null
        ] }) : null,
        et === "GUESSING" && ft ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ A.jsxs("p", { children: [
            "Round ",
            ft.index,
            "/",
            ft.totalRounds
          ] }),
          za ? null : /* @__PURE__ */ A.jsx("p", { className: "gmq-muted", children: "Sample audio is unavailable for this round." }),
          /* @__PURE__ */ A.jsxs("div", { className: "gmq-search-box", children: [
            /* @__PURE__ */ A.jsx(
              "input",
              {
                ref: D,
                value: te,
                onChange: (d) => {
                  ba(d.target.value), Sa(null), Te(!0);
                },
                onFocus: () => Te(!0),
                onBlur: () => {
                  window.setTimeout(() => {
                    Te(!1);
                  }, 100);
                },
                placeholder: "Type anime name"
              }
            ),
            rn && Zn.length > 0 ? /* @__PURE__ */ A.jsx("ul", { className: "gmq-search-results", children: Zn.map((d) => /* @__PURE__ */ A.jsx("li", { children: /* @__PURE__ */ A.jsx(
              "button",
              {
                type: "button",
                onMouseDown: (E) => E.preventDefault(),
                onClick: () => {
                  ba(d.title || ""), Sa(Number.isInteger(d.id) ? d.id : null), Je([]), Te(!1);
                },
                children: d.title
              }
            ) }, `${d.id}-${d.title}`)) }) : null
          ] }),
          Ea ? /* @__PURE__ */ A.jsx("p", { className: "gmq-muted gmq-muted-warning", children: Ea }) : null,
          /* @__PURE__ */ A.jsxs("div", { className: "gmq-actions", children: [
            /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: pu, disabled: fe === "guess", children: "Submit Guess" }),
            /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: bu, disabled: fe === "ready", children: Su ? "Unskip" : "Skip / Ready" })
          ] }),
          /* @__PURE__ */ A.jsxs("p", { className: "gmq-muted", children: [
            Zt.length,
            " ready"
          ] })
        ] }) : null,
        et === "ANSWERS_REVEAL" ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Answers" }),
          /* @__PURE__ */ A.jsx("ul", { className: "gmq-answer-list", children: ga.map((d) => /* @__PURE__ */ A.jsxs("li", { children: [
            /* @__PURE__ */ A.jsx("span", { children: Hl(d.userId) }),
            /* @__PURE__ */ A.jsx("span", { children: d.guessText || "(blank)" }),
            /* @__PURE__ */ A.jsx("strong", { children: d.isCorrect ? "Correct" : "Wrong" })
          ] }, `${d.userId}-${d.guessText || "blank"}`)) })
        ] }) : null,
        et === "SOLUTION_REVEAL" && ve ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Solution" }),
          /* @__PURE__ */ A.jsxs("p", { children: [
            ve.correctAnime?.animeTitle,
            " (",
            ve.correctAnime?.themeType,
            ")"
          ] }),
          /* @__PURE__ */ A.jsx("p", { className: "gmq-muted", children: ve.correctAnime?.themeTitle || "" }),
          ve.video ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-solution-video-wrap", children: [
            /* @__PURE__ */ A.jsx(
              "video",
              {
                ref: x,
                className: "gmq-solution-video",
                src: ve.video,
                preload: "auto",
                controls: !0,
                playsInline: !0,
                onError: () => Ct('Could not play solution video in this browser. Use "Open video source".')
              },
              `solution-${ft?.roundId || ve.correctAnime?.animeId || "video"}`
            ),
            Kn ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
              /* @__PURE__ */ A.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
              /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => hn().catch(() => {
              }), children: "Play solution video" })
            ] }) : null,
            je ? /* @__PURE__ */ A.jsx("p", { className: "gmq-muted gmq-muted-warning", children: je }) : null,
            /* @__PURE__ */ A.jsx("a", { href: ve.video, target: "_blank", rel: "noreferrer", children: "Open video source" })
          ] }) : /* @__PURE__ */ A.jsx("p", { className: "gmq-muted", children: "Solution video is unavailable for this round." })
        ] }) : null,
        et === "FINISHED" && pa ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Final Result" }),
          /* @__PURE__ */ A.jsxs("p", { children: [
            "Winner: ",
            pa.winner?.displayName || "Tie"
          ] })
        ] }) : null,
        $n.length ? /* @__PURE__ */ A.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Scoreboard" }),
          /* @__PURE__ */ A.jsx("ul", { className: "gmq-score-list", children: $n.map((d) => /* @__PURE__ */ A.jsxs("li", { className: "gmq-score-row", children: [
            /* @__PURE__ */ A.jsx("span", { children: d.displayName }),
            /* @__PURE__ */ A.jsx("strong", { children: d.score })
          ] }, d.userId)) })
        ] }) : null
      ] })
    ] }) : /* @__PURE__ */ A.jsxs("div", { className: "gmq-grid", children: [
      /* @__PURE__ */ A.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ A.jsx("h2", { children: "Create Lobby" }),
        /* @__PURE__ */ A.jsx("label", { children: "Name" }),
        /* @__PURE__ */ A.jsx("input", { value: Mt.name, onChange: (d) => pt((E) => ({ ...E, name: d.target.value })), placeholder: "Optional lobby name" }),
        /* @__PURE__ */ A.jsxs("label", { className: "gmq-checkbox", children: [
          /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: Mt.isPrivate, onChange: (d) => pt((E) => ({ ...E, isPrivate: d.target.checked })) }),
          " Private lobby"
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "gmq-inline", children: [
          /* @__PURE__ */ A.jsx("input", { type: "number", min: "1", max: "50", value: Mt.roundCount, onChange: (d) => pt((E) => ({ ...E, roundCount: Number(d.target.value || 10) })) }),
          /* @__PURE__ */ A.jsx("input", { type: "number", min: "5", max: "120", value: Mt.guessSeconds, onChange: (d) => pt((E) => ({ ...E, guessSeconds: Number(d.target.value || 20) })) }),
          /* @__PURE__ */ A.jsx("input", { type: "number", min: "3", max: "60", value: Mt.sampleSeconds, onChange: (d) => pt((E) => ({ ...E, sampleSeconds: Number(d.target.value || 10) })) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "gmq-inline", children: [
          /* @__PURE__ */ A.jsx("select", { value: Mt.sourceMode, onChange: (d) => pt((E) => ({ ...E, sourceMode: d.target.value })), children: cv.map((d) => /* @__PURE__ */ A.jsx("option", { value: d, children: d }, d)) }),
          /* @__PURE__ */ A.jsx("select", { value: Mt.selectionMode, onChange: (d) => pt((E) => ({ ...E, selectionMode: d.target.value })), children: sv.map((d) => /* @__PURE__ */ A.jsx("option", { value: d, children: d }, d)) }),
          /* @__PURE__ */ A.jsx("select", { value: Mt.themeMode, onChange: (d) => pt((E) => ({ ...E, themeMode: d.target.value })), children: rv.map((d) => /* @__PURE__ */ A.jsx("option", { value: d, children: d }, d)) })
        ] }),
        /* @__PURE__ */ A.jsx("label", { children: "Display Name" }),
        /* @__PURE__ */ A.jsx("input", { value: Ee, onChange: (d) => iu(d.target.value), placeholder: R?.nickname || R?.username || "Player" }),
        /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: Cc, disabled: fe === "create", children: "Create Lobby" })
      ] }),
      /* @__PURE__ */ A.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ A.jsx("h2", { children: "Join Lobby" }),
        /* @__PURE__ */ A.jsx("label", { children: "Lobby Code" }),
        /* @__PURE__ */ A.jsx("input", { value: ln, onChange: (d) => Vn(_c(d.target.value)), placeholder: "ABC123" }),
        /* @__PURE__ */ A.jsx("label", { children: "Invite Token (private lobby)" }),
        /* @__PURE__ */ A.jsx("input", { value: nn, onChange: (d) => an(d.target.value.trim()), placeholder: "Paste invite token" }),
        /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: () => Oa(ln, nn), disabled: fe === "join", children: "Join Lobby" })
      ] }),
      /* @__PURE__ */ A.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ A.jsx("h2", { children: "Joinable Lobbies" }),
        /* @__PURE__ */ A.jsxs("div", { className: "gmq-inline", children: [
          /* @__PURE__ */ A.jsx("input", { value: $, onChange: (d) => mt(d.target.value), placeholder: "Search by code/name" }),
          /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => vn($), children: "Refresh" })
        ] }),
        /* @__PURE__ */ A.jsx("ul", { className: "gmq-lobby-list", children: L.map((d) => /* @__PURE__ */ A.jsxs("li", { className: "gmq-lobby-item", children: [
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
          /* @__PURE__ */ A.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Oa(d.code, ""), children: "Join" })
        ] }, d.code)) })
      ] })
    ] })
  ] });
}
const Qh = document.getElementById("game-root");
Qh && o0.createRoot(Qh).render(/* @__PURE__ */ A.jsx(gv, {}));
