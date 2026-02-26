var Nr = { exports: {} }, $u = {};
var _h;
function l0() {
  if (_h) return $u;
  _h = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(r, g, U) {
    var B = null;
    if (U !== void 0 && (B = "" + U), g.key !== void 0 && (B = "" + g.key), "key" in g) {
      U = {};
      for (var Y in g)
        Y !== "key" && (U[Y] = g[Y]);
    } else U = g;
    return g = U.ref, {
      $$typeof: f,
      type: r,
      key: B,
      ref: g !== void 0 ? g : null,
      props: U
    };
  }
  return $u.Fragment = i, $u.jsx = s, $u.jsxs = s, $u;
}
var Eh;
function n0() {
  return Eh || (Eh = 1, Nr.exports = l0()), Nr.exports;
}
var T = n0(), Or = { exports: {} }, $ = {};
var Ah;
function a0() {
  if (Ah) return $;
  Ah = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), g = /* @__PURE__ */ Symbol.for("react.profiler"), U = /* @__PURE__ */ Symbol.for("react.consumer"), B = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), q = /* @__PURE__ */ Symbol.for("react.suspense"), z = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), G = /* @__PURE__ */ Symbol.for("react.activity"), nt = Symbol.iterator;
  function Pt(m) {
    return m === null || typeof m != "object" ? null : (m = nt && m[nt] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var At = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, wt = Object.assign, be = {};
  function Yt(m, D, H) {
    this.props = m, this.context = D, this.refs = be, this.updater = H || At;
  }
  Yt.prototype.isReactComponent = {}, Yt.prototype.setState = function(m, D) {
    if (typeof m != "object" && typeof m != "function" && m != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, m, D, "setState");
  }, Yt.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function Le() {
  }
  Le.prototype = Yt.prototype;
  function Bt(m, D, H) {
    this.props = m, this.context = D, this.refs = be, this.updater = H || At;
  }
  var Qt = Bt.prototype = new Le();
  Qt.constructor = Bt, wt(Qt, Yt.prototype), Qt.isPureReactComponent = !0;
  var de = Array.isArray;
  function Vt() {
  }
  var tt = { H: null, A: null, T: null, S: null }, Ct = Object.prototype.hasOwnProperty;
  function he(m, D, H) {
    var w = H.ref;
    return {
      $$typeof: f,
      type: m,
      key: D,
      ref: w !== void 0 ? w : null,
      props: H
    };
  }
  function we(m, D) {
    return he(m.type, D, m.props);
  }
  function Oe(m) {
    return typeof m == "object" && m !== null && m.$$typeof === f;
  }
  function me(m) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(H) {
      return D[H];
    });
  }
  var Se = /\/+/g;
  function Dt(m, D) {
    return typeof m == "object" && m !== null && m.key != null ? me("" + m.key) : D.toString(36);
  }
  function Re(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then(Vt, Vt) : (m.status = "pending", m.then(
          function(D) {
            m.status === "pending" && (m.status = "fulfilled", m.value = D);
          },
          function(D) {
            m.status === "pending" && (m.status = "rejected", m.reason = D);
          }
        )), m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function _(m, D, H, w, W) {
    var lt = typeof m;
    (lt === "undefined" || lt === "boolean") && (m = null);
    var I = !1;
    if (m === null) I = !0;
    else
      switch (lt) {
        case "bigint":
        case "string":
        case "number":
          I = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case f:
            case i:
              I = !0;
              break;
            case J:
              return I = m._init, _(
                I(m._payload),
                D,
                H,
                w,
                W
              );
          }
      }
    if (I)
      return W = W(m), I = w === "" ? "." + Dt(m, 0) : w, de(W) ? (H = "", I != null && (H = I.replace(Se, "$&/") + "/"), _(W, D, H, "", function(un) {
        return un;
      })) : W != null && (Oe(W) && (W = we(
        W,
        H + (W.key == null || m && m.key === W.key ? "" : ("" + W.key).replace(
          Se,
          "$&/"
        ) + "/") + I
      )), D.push(W)), 1;
    I = 0;
    var Ut = w === "" ? "." : w + ":";
    if (de(m))
      for (var qt = 0; qt < m.length; qt++)
        w = m[qt], lt = Ut + Dt(w, qt), I += _(
          w,
          D,
          H,
          lt,
          W
        );
    else if (qt = Pt(m), typeof qt == "function")
      for (m = qt.call(m), qt = 0; !(w = m.next()).done; )
        w = w.value, lt = Ut + Dt(w, qt++), I += _(
          w,
          D,
          H,
          lt,
          W
        );
    else if (lt === "object") {
      if (typeof m.then == "function")
        return _(
          Re(m),
          D,
          H,
          w,
          W
        );
      throw D = String(m), Error(
        "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return I;
  }
  function j(m, D, H) {
    if (m == null) return m;
    var w = [], W = 0;
    return _(m, w, "", "", function(lt) {
      return D.call(H, lt, W++);
    }), w;
  }
  function Q(m) {
    if (m._status === -1) {
      var D = m._result;
      D = D(), D.then(
        function(H) {
          (m._status === 0 || m._status === -1) && (m._status = 1, m._result = H);
        },
        function(H) {
          (m._status === 0 || m._status === -1) && (m._status = 2, m._result = H);
        }
      ), m._status === -1 && (m._status = 0, m._result = D);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var pt = typeof reportError == "function" ? reportError : function(m) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var D = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
        error: m
      });
      if (!window.dispatchEvent(D)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", m);
      return;
    }
    console.error(m);
  }, bt = {
    map: j,
    forEach: function(m, D, H) {
      j(
        m,
        function() {
          D.apply(this, arguments);
        },
        H
      );
    },
    count: function(m) {
      var D = 0;
      return j(m, function() {
        D++;
      }), D;
    },
    toArray: function(m) {
      return j(m, function(D) {
        return D;
      }) || [];
    },
    only: function(m) {
      if (!Oe(m))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return m;
    }
  };
  return $.Activity = G, $.Children = bt, $.Component = Yt, $.Fragment = s, $.Profiler = g, $.PureComponent = Bt, $.StrictMode = r, $.Suspense = q, $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = tt, $.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(m) {
      return tt.H.useMemoCache(m);
    }
  }, $.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, $.cacheSignal = function() {
    return null;
  }, $.cloneElement = function(m, D, H) {
    if (m == null)
      throw Error(
        "The argument must be a React element, but you passed " + m + "."
      );
    var w = wt({}, m.props), W = m.key;
    if (D != null)
      for (lt in D.key !== void 0 && (W = "" + D.key), D)
        !Ct.call(D, lt) || lt === "key" || lt === "__self" || lt === "__source" || lt === "ref" && D.ref === void 0 || (w[lt] = D[lt]);
    var lt = arguments.length - 2;
    if (lt === 1) w.children = H;
    else if (1 < lt) {
      for (var I = Array(lt), Ut = 0; Ut < lt; Ut++)
        I[Ut] = arguments[Ut + 2];
      w.children = I;
    }
    return he(m.type, W, w);
  }, $.createContext = function(m) {
    return m = {
      $$typeof: B,
      _currentValue: m,
      _currentValue2: m,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, m.Provider = m, m.Consumer = {
      $$typeof: U,
      _context: m
    }, m;
  }, $.createElement = function(m, D, H) {
    var w, W = {}, lt = null;
    if (D != null)
      for (w in D.key !== void 0 && (lt = "" + D.key), D)
        Ct.call(D, w) && w !== "key" && w !== "__self" && w !== "__source" && (W[w] = D[w]);
    var I = arguments.length - 2;
    if (I === 1) W.children = H;
    else if (1 < I) {
      for (var Ut = Array(I), qt = 0; qt < I; qt++)
        Ut[qt] = arguments[qt + 2];
      W.children = Ut;
    }
    if (m && m.defaultProps)
      for (w in I = m.defaultProps, I)
        W[w] === void 0 && (W[w] = I[w]);
    return he(m, lt, W);
  }, $.createRef = function() {
    return { current: null };
  }, $.forwardRef = function(m) {
    return { $$typeof: Y, render: m };
  }, $.isValidElement = Oe, $.lazy = function(m) {
    return {
      $$typeof: J,
      _payload: { _status: -1, _result: m },
      _init: Q
    };
  }, $.memo = function(m, D) {
    return {
      $$typeof: z,
      type: m,
      compare: D === void 0 ? null : D
    };
  }, $.startTransition = function(m) {
    var D = tt.T, H = {};
    tt.T = H;
    try {
      var w = m(), W = tt.S;
      W !== null && W(H, w), typeof w == "object" && w !== null && typeof w.then == "function" && w.then(Vt, pt);
    } catch (lt) {
      pt(lt);
    } finally {
      D !== null && H.types !== null && (D.types = H.types), tt.T = D;
    }
  }, $.unstable_useCacheRefresh = function() {
    return tt.H.useCacheRefresh();
  }, $.use = function(m) {
    return tt.H.use(m);
  }, $.useActionState = function(m, D, H) {
    return tt.H.useActionState(m, D, H);
  }, $.useCallback = function(m, D) {
    return tt.H.useCallback(m, D);
  }, $.useContext = function(m) {
    return tt.H.useContext(m);
  }, $.useDebugValue = function() {
  }, $.useDeferredValue = function(m, D) {
    return tt.H.useDeferredValue(m, D);
  }, $.useEffect = function(m, D) {
    return tt.H.useEffect(m, D);
  }, $.useEffectEvent = function(m) {
    return tt.H.useEffectEvent(m);
  }, $.useId = function() {
    return tt.H.useId();
  }, $.useImperativeHandle = function(m, D, H) {
    return tt.H.useImperativeHandle(m, D, H);
  }, $.useInsertionEffect = function(m, D) {
    return tt.H.useInsertionEffect(m, D);
  }, $.useLayoutEffect = function(m, D) {
    return tt.H.useLayoutEffect(m, D);
  }, $.useMemo = function(m, D) {
    return tt.H.useMemo(m, D);
  }, $.useOptimistic = function(m, D) {
    return tt.H.useOptimistic(m, D);
  }, $.useReducer = function(m, D, H) {
    return tt.H.useReducer(m, D, H);
  }, $.useRef = function(m) {
    return tt.H.useRef(m);
  }, $.useState = function(m) {
    return tt.H.useState(m);
  }, $.useSyncExternalStore = function(m, D, H) {
    return tt.H.useSyncExternalStore(
      m,
      D,
      H
    );
  }, $.useTransition = function() {
    return tt.H.useTransition();
  }, $.version = "19.2.4", $;
}
var Th;
function Yr() {
  return Th || (Th = 1, Or.exports = a0()), Or.exports;
}
var N = Yr(), Rr = { exports: {} }, Fu = {}, zr = { exports: {} }, Mr = {};
var Nh;
function u0() {
  return Nh || (Nh = 1, (function(f) {
    function i(_, j) {
      var Q = _.length;
      _.push(j);
      t: for (; 0 < Q; ) {
        var pt = Q - 1 >>> 1, bt = _[pt];
        if (0 < g(bt, j))
          _[pt] = j, _[Q] = bt, Q = pt;
        else break t;
      }
    }
    function s(_) {
      return _.length === 0 ? null : _[0];
    }
    function r(_) {
      if (_.length === 0) return null;
      var j = _[0], Q = _.pop();
      if (Q !== j) {
        _[0] = Q;
        t: for (var pt = 0, bt = _.length, m = bt >>> 1; pt < m; ) {
          var D = 2 * (pt + 1) - 1, H = _[D], w = D + 1, W = _[w];
          if (0 > g(H, Q))
            w < bt && 0 > g(W, H) ? (_[pt] = W, _[w] = Q, pt = w) : (_[pt] = H, _[D] = Q, pt = D);
          else if (w < bt && 0 > g(W, Q))
            _[pt] = W, _[w] = Q, pt = w;
          else break t;
        }
      }
      return j;
    }
    function g(_, j) {
      var Q = _.sortIndex - j.sortIndex;
      return Q !== 0 ? Q : _.id - j.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var U = performance;
      f.unstable_now = function() {
        return U.now();
      };
    } else {
      var B = Date, Y = B.now();
      f.unstable_now = function() {
        return B.now() - Y;
      };
    }
    var q = [], z = [], J = 1, G = null, nt = 3, Pt = !1, At = !1, wt = !1, be = !1, Yt = typeof setTimeout == "function" ? setTimeout : null, Le = typeof clearTimeout == "function" ? clearTimeout : null, Bt = typeof setImmediate < "u" ? setImmediate : null;
    function Qt(_) {
      for (var j = s(z); j !== null; ) {
        if (j.callback === null) r(z);
        else if (j.startTime <= _)
          r(z), j.sortIndex = j.expirationTime, i(q, j);
        else break;
        j = s(z);
      }
    }
    function de(_) {
      if (wt = !1, Qt(_), !At)
        if (s(q) !== null)
          At = !0, Vt || (Vt = !0, me());
        else {
          var j = s(z);
          j !== null && Re(de, j.startTime - _);
        }
    }
    var Vt = !1, tt = -1, Ct = 5, he = -1;
    function we() {
      return be ? !0 : !(f.unstable_now() - he < Ct);
    }
    function Oe() {
      if (be = !1, Vt) {
        var _ = f.unstable_now();
        he = _;
        var j = !0;
        try {
          t: {
            At = !1, wt && (wt = !1, Le(tt), tt = -1), Pt = !0;
            var Q = nt;
            try {
              e: {
                for (Qt(_), G = s(q); G !== null && !(G.expirationTime > _ && we()); ) {
                  var pt = G.callback;
                  if (typeof pt == "function") {
                    G.callback = null, nt = G.priorityLevel;
                    var bt = pt(
                      G.expirationTime <= _
                    );
                    if (_ = f.unstable_now(), typeof bt == "function") {
                      G.callback = bt, Qt(_), j = !0;
                      break e;
                    }
                    G === s(q) && r(q), Qt(_);
                  } else r(q);
                  G = s(q);
                }
                if (G !== null) j = !0;
                else {
                  var m = s(z);
                  m !== null && Re(
                    de,
                    m.startTime - _
                  ), j = !1;
                }
              }
              break t;
            } finally {
              G = null, nt = Q, Pt = !1;
            }
            j = void 0;
          }
        } finally {
          j ? me() : Vt = !1;
        }
      }
    }
    var me;
    if (typeof Bt == "function")
      me = function() {
        Bt(Oe);
      };
    else if (typeof MessageChannel < "u") {
      var Se = new MessageChannel(), Dt = Se.port2;
      Se.port1.onmessage = Oe, me = function() {
        Dt.postMessage(null);
      };
    } else
      me = function() {
        Yt(Oe, 0);
      };
    function Re(_, j) {
      tt = Yt(function() {
        _(f.unstable_now());
      }, j);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, f.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ct = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return nt;
    }, f.unstable_next = function(_) {
      switch (nt) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = nt;
      }
      var Q = nt;
      nt = j;
      try {
        return _();
      } finally {
        nt = Q;
      }
    }, f.unstable_requestPaint = function() {
      be = !0;
    }, f.unstable_runWithPriority = function(_, j) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var Q = nt;
      nt = _;
      try {
        return j();
      } finally {
        nt = Q;
      }
    }, f.unstable_scheduleCallback = function(_, j, Q) {
      var pt = f.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? pt + Q : pt) : Q = pt, _) {
        case 1:
          var bt = -1;
          break;
        case 2:
          bt = 250;
          break;
        case 5:
          bt = 1073741823;
          break;
        case 4:
          bt = 1e4;
          break;
        default:
          bt = 5e3;
      }
      return bt = Q + bt, _ = {
        id: J++,
        callback: j,
        priorityLevel: _,
        startTime: Q,
        expirationTime: bt,
        sortIndex: -1
      }, Q > pt ? (_.sortIndex = Q, i(z, _), s(q) === null && _ === s(z) && (wt ? (Le(tt), tt = -1) : wt = !0, Re(de, Q - pt))) : (_.sortIndex = bt, i(q, _), At || Pt || (At = !0, Vt || (Vt = !0, me()))), _;
    }, f.unstable_shouldYield = we, f.unstable_wrapCallback = function(_) {
      var j = nt;
      return function() {
        var Q = nt;
        nt = j;
        try {
          return _.apply(this, arguments);
        } finally {
          nt = Q;
        }
      };
    };
  })(Mr)), Mr;
}
var Oh;
function i0() {
  return Oh || (Oh = 1, zr.exports = u0()), zr.exports;
}
var Cr = { exports: {} }, pe = {};
var Rh;
function c0() {
  if (Rh) return pe;
  Rh = 1;
  var f = Yr();
  function i(q) {
    var z = "https://react.dev/errors/" + q;
    if (1 < arguments.length) {
      z += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var J = 2; J < arguments.length; J++)
        z += "&args[]=" + encodeURIComponent(arguments[J]);
    }
    return "Minified React error #" + q + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function U(q, z, J) {
    var G = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: g,
      key: G == null ? null : "" + G,
      children: q,
      containerInfo: z,
      implementation: J
    };
  }
  var B = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Y(q, z) {
    if (q === "font") return "";
    if (typeof z == "string")
      return z === "use-credentials" ? z : "";
  }
  return pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, pe.createPortal = function(q, z) {
    var J = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11)
      throw Error(i(299));
    return U(q, z, null, J);
  }, pe.flushSync = function(q) {
    var z = B.T, J = r.p;
    try {
      if (B.T = null, r.p = 2, q) return q();
    } finally {
      B.T = z, r.p = J, r.d.f();
    }
  }, pe.preconnect = function(q, z) {
    typeof q == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, r.d.C(q, z));
  }, pe.prefetchDNS = function(q) {
    typeof q == "string" && r.d.D(q);
  }, pe.preinit = function(q, z) {
    if (typeof q == "string" && z && typeof z.as == "string") {
      var J = z.as, G = Y(J, z.crossOrigin), nt = typeof z.integrity == "string" ? z.integrity : void 0, Pt = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
      J === "style" ? r.d.S(
        q,
        typeof z.precedence == "string" ? z.precedence : void 0,
        {
          crossOrigin: G,
          integrity: nt,
          fetchPriority: Pt
        }
      ) : J === "script" && r.d.X(q, {
        crossOrigin: G,
        integrity: nt,
        fetchPriority: Pt,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0
      });
    }
  }, pe.preinitModule = function(q, z) {
    if (typeof q == "string")
      if (typeof z == "object" && z !== null) {
        if (z.as == null || z.as === "script") {
          var J = Y(
            z.as,
            z.crossOrigin
          );
          r.d.M(q, {
            crossOrigin: J,
            integrity: typeof z.integrity == "string" ? z.integrity : void 0,
            nonce: typeof z.nonce == "string" ? z.nonce : void 0
          });
        }
      } else z == null && r.d.M(q);
  }, pe.preload = function(q, z) {
    if (typeof q == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
      var J = z.as, G = Y(J, z.crossOrigin);
      r.d.L(q, J, {
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
  }, pe.preloadModule = function(q, z) {
    if (typeof q == "string")
      if (z) {
        var J = Y(z.as, z.crossOrigin);
        r.d.m(q, {
          as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
          crossOrigin: J,
          integrity: typeof z.integrity == "string" ? z.integrity : void 0
        });
      } else r.d.m(q);
  }, pe.requestFormReset = function(q) {
    r.d.r(q);
  }, pe.unstable_batchedUpdates = function(q, z) {
    return q(z);
  }, pe.useFormState = function(q, z, J) {
    return B.H.useFormState(q, z, J);
  }, pe.useFormStatus = function() {
    return B.H.useHostTransitionStatus();
  }, pe.version = "19.2.4", pe;
}
var zh;
function s0() {
  if (zh) return Cr.exports;
  zh = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (i) {
        console.error(i);
      }
  }
  return f(), Cr.exports = c0(), Cr.exports;
}
var Mh;
function r0() {
  if (Mh) return Fu;
  Mh = 1;
  var f = i0(), i = Yr(), s = s0();
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
  function B(t) {
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
  function q(t) {
    if (U(t) !== t)
      throw Error(r(188));
  }
  function z(t) {
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
          if (u === l) return q(a), t;
          if (u === n) return q(a), e;
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
  function J(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = J(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var G = Object.assign, nt = /* @__PURE__ */ Symbol.for("react.element"), Pt = /* @__PURE__ */ Symbol.for("react.transitional.element"), At = /* @__PURE__ */ Symbol.for("react.portal"), wt = /* @__PURE__ */ Symbol.for("react.fragment"), be = /* @__PURE__ */ Symbol.for("react.strict_mode"), Yt = /* @__PURE__ */ Symbol.for("react.profiler"), Le = /* @__PURE__ */ Symbol.for("react.consumer"), Bt = /* @__PURE__ */ Symbol.for("react.context"), Qt = /* @__PURE__ */ Symbol.for("react.forward_ref"), de = /* @__PURE__ */ Symbol.for("react.suspense"), Vt = /* @__PURE__ */ Symbol.for("react.suspense_list"), tt = /* @__PURE__ */ Symbol.for("react.memo"), Ct = /* @__PURE__ */ Symbol.for("react.lazy"), he = /* @__PURE__ */ Symbol.for("react.activity"), we = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Oe = Symbol.iterator;
  function me(t) {
    return t === null || typeof t != "object" ? null : (t = Oe && t[Oe] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Se = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Dt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Se ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case wt:
        return "Fragment";
      case Yt:
        return "Profiler";
      case be:
        return "StrictMode";
      case de:
        return "Suspense";
      case Vt:
        return "SuspenseList";
      case he:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case At:
          return "Portal";
        case Bt:
          return t.displayName || "Context";
        case Le:
          return (t._context.displayName || "Context") + ".Consumer";
        case Qt:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case tt:
          return e = t.displayName || null, e !== null ? e : Dt(t.type) || "Memo";
        case Ct:
          e = t._payload, t = t._init;
          try {
            return Dt(t(e));
          } catch {
          }
      }
    return null;
  }
  var Re = Array.isArray, _ = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pt = [], bt = -1;
  function m(t) {
    return { current: t };
  }
  function D(t) {
    0 > bt || (t.current = pt[bt], pt[bt] = null, bt--);
  }
  function H(t, e) {
    bt++, pt[bt] = t.current, t.current = e;
  }
  var w = m(null), W = m(null), lt = m(null), I = m(null);
  function Ut(t, e) {
    switch (H(lt, e), H(W, t), H(w, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Vd(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Vd(e), t = Zd(e, t);
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
    D(w), H(w, t);
  }
  function qt() {
    D(w), D(W), D(lt);
  }
  function un(t) {
    t.memoizedState !== null && H(I, t);
    var e = w.current, l = Zd(e, t.type);
    e !== l && (H(W, t), H(w, l));
  }
  function Ul(t) {
    W.current === t && (D(w), D(W)), I.current === t && (D(I), Ku._currentValue = Q);
  }
  var ql, Sl;
  function xl(t) {
    if (ql === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ql = e && e[1] || "", Sl = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ql + t + Sl;
  }
  var at = !1;
  function cn(t, e) {
    if (!t || at) return "";
    at = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
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
                } catch (E) {
                  var S = E;
                }
                Reflect.construct(t, [], M);
              } else {
                try {
                  M.call();
                } catch (E) {
                  S = E;
                }
                t.call(M.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (E) {
                S = E;
              }
              (M = t()) && typeof M.catch == "function" && M.catch(function() {
              });
            }
          } catch (E) {
            if (E && S && typeof E.stack == "string")
              return [E.stack, S.stack];
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
      at = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? xl(l) : "";
  }
  function ei(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return xl(t.type);
      case 16:
        return xl("Lazy");
      case 13:
        return t.child !== e && e !== null ? xl("Suspense Fallback") : xl("Suspense");
      case 19:
        return xl("SuspenseList");
      case 0:
      case 15:
        return cn(t.type, !1);
      case 11:
        return cn(t.type.render, !1);
      case 1:
        return cn(t.type, !0);
      case 31:
        return xl("Activity");
      default:
        return "";
    }
  }
  function nu(t) {
    try {
      var e = "", l = null;
      do
        e += ei(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var ft = Object.prototype.hasOwnProperty, sl = f.unstable_scheduleCallback, Qn = f.unstable_cancelCallback, sn = f.unstable_shouldYield, Tc = f.unstable_requestPaint, ye = f.unstable_now, ht = f.unstable_getCurrentPriorityLevel, ya = f.unstable_ImmediatePriority, li = f.unstable_UserBlockingPriority, rl = f.unstable_NormalPriority, _e = f.unstable_LowPriority, Bl = f.unstable_IdlePriority, va = f.log, ga = f.unstable_setDisableYieldValue, We = null, te = null;
  function ze(t) {
    if (typeof va == "function" && ga(t), te && typeof te.setStrictMode == "function")
      try {
        te.setStrictMode(We, t);
      } catch {
      }
  }
  var ee = Math.clz32 ? Math.clz32 : Nc, au = Math.log, pa = Math.LN2;
  function Nc(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (au(t) / pa | 0) | 0;
  }
  var $e = 256, _l = 262144, Fe = 4194304;
  function fl(t) {
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
  function Me(t, e, l) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var a = 0, u = t.suspendedLanes, c = t.pingedLanes;
    t = t.warmLanes;
    var o = n & 134217727;
    return o !== 0 ? (n = o & ~u, n !== 0 ? a = fl(n) : (c &= o, c !== 0 ? a = fl(c) : l || (l = o & ~t, l !== 0 && (a = fl(l))))) : (o = n & ~u, o !== 0 ? a = fl(o) : c !== 0 ? a = fl(c) : l || (l = n & ~t, l !== 0 && (a = fl(l)))), a === 0 ? 0 : e !== 0 && e !== a && (e & u) === 0 && (u = a & -a, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : a;
  }
  function Vn(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function uu(t, e) {
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
  function rn() {
    var t = Fe;
    return Fe <<= 1, (Fe & 62914560) === 0 && (Fe = 4194304), t;
  }
  function ol(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ye(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Oc(t, e, l, n, a, u) {
    var c = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var o = t.entanglements, h = t.expirationTimes, b = t.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var O = 31 - ee(l), M = 1 << O;
      o[O] = 0, h[O] = -1;
      var S = b[O];
      if (S !== null)
        for (b[O] = null, O = 0; O < S.length; O++) {
          var E = S[O];
          E !== null && (E.lane &= -536870913);
        }
      l &= ~M;
    }
    n !== 0 && iu(t, n, 0), u !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(c & ~e));
  }
  function iu(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var n = 31 - ee(e);
    t.entangledLanes |= e, t.entanglements[n] = t.entanglements[n] | 1073741824 | l & 261930;
  }
  function jl(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var n = 31 - ee(l), a = 1 << n;
      a & e | t[n] & e && (t[n] |= e), l &= ~a;
    }
  }
  function Zn(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : Ee(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function Ee(t) {
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
  function fn(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function dl() {
    var t = j.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : mh(t.type));
  }
  function ba(t, e) {
    var l = j.p;
    try {
      return j.p = t, e();
    } finally {
      j.p = l;
    }
  }
  var ve = Math.random().toString(36).slice(2), St = "__reactFiber$" + ve, le = "__reactProps$" + ve, El = "__reactContainer$" + ve, Al = "__reactEvents$" + ve, ni = "__reactListeners$" + ve, on = "__reactHandles$" + ve, ue = "__reactResources$" + ve, Kn = "__reactMarker$" + ve;
  function dn(t) {
    delete t[St], delete t[le], delete t[Al], delete t[ni], delete t[on];
  }
  function Hl(t) {
    var e = t[St];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[El] || l[St]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = Id(t); t !== null; ) {
            if (l = t[St]) return l;
            t = Id(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function Ll(t) {
    if (t = t[St] || t[El]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function hn(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function wl(t) {
    var e = t[ue];
    return e || (e = t[ue] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Zt(t) {
    t[Kn] = !0;
  }
  var kn = /* @__PURE__ */ new Set(), Ce = {};
  function ge(t, e) {
    Ae(t, e), Ae(t + "Capture", e);
  }
  function Ae(t, e) {
    for (Ce[t] = e, t = 0; t < e.length; t++)
      kn.add(e[t]);
  }
  var Sa = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Yl = {}, cu = {};
  function ai(t) {
    return ft.call(cu, t) ? !0 : ft.call(Yl, t) ? !1 : Sa.test(t) ? cu[t] = !0 : (Yl[t] = !0, !1);
  }
  function mn(t, e, l) {
    if (ai(e))
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
  function hl(t, e, l) {
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
  function De(t, e, l, n) {
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
  function ie(t) {
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
  function su(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Jn(t, e, l) {
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
  function _a(t) {
    if (!t._valueTracker) {
      var e = su(t) ? "checked" : "value";
      t._valueTracker = Jn(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function ui(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), n = "";
    return t && (n = su(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== l ? (e.setValue(t), !0) : !1;
  }
  function Wn(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var ii = /[\n"\\]/g;
  function Te(t) {
    return t.replace(
      ii,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ea(t, e, l, n, a, u, c, o) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), e != null ? c === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ie(e)) : t.value !== "" + ie(e) && (t.value = "" + ie(e)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), e != null ? Gl(t, c, ie(e)) : l != null ? Gl(t, c, ie(l)) : n != null && t.removeAttribute("value"), a == null && u != null && (t.defaultChecked = !!u), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.name = "" + ie(o) : t.removeAttribute("name");
  }
  function yn(t, e, l, n, a, u, c, o) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        _a(t);
        return;
      }
      l = l != null ? "" + ie(l) : "", e = e != null ? "" + ie(e) : l, o || e === t.value || (t.value = e), t.defaultValue = e;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = o ? t.checked : !!n, t.defaultChecked = !!n, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c), _a(t);
  }
  function Gl(t, e, l) {
    e === "number" && Wn(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function Ge(t, e, l, n) {
    if (t = t.options, e) {
      e = {};
      for (var a = 0; a < l.length; a++)
        e["$" + l[a]] = !0;
      for (l = 0; l < t.length; l++)
        a = e.hasOwnProperty("$" + t[l].value), t[l].selected !== a && (t[l].selected = a), a && n && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + ie(l), e = null, a = 0; a < t.length; a++) {
        if (t[a].value === l) {
          t[a].selected = !0, n && (t[a].defaultSelected = !0);
          return;
        }
        e !== null || t[a].disabled || (e = t[a]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ru(t, e, l) {
    if (e != null && (e = "" + ie(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + ie(l) : "";
  }
  function vn(t, e, l, n) {
    if (e == null) {
      if (n != null) {
        if (l != null) throw Error(r(92));
        if (Re(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), e = l;
    }
    l = ie(e), t.defaultValue = l, n = t.textContent, n === l && n !== "" && n !== null && (t.value = n), _a(t);
  }
  function Ie(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Aa = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function $n(t, e, l) {
    var n = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : n ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Aa.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function ci(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "");
      for (var a in e)
        n = e[a], e.hasOwnProperty(a) && l[a] !== n && $n(t, a, n);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && $n(t, u, e[u]);
  }
  function fu(t) {
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
  var Rc = /* @__PURE__ */ new Map([
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
  ]), zc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ta(t) {
    return zc.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function ml() {
  }
  var gn = null;
  function ou(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var pn = null, Tl = null;
  function si(t) {
    var e = Ll(t);
    if (e && (t = e.stateNode)) {
      var l = t[le] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Ea(
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
                var a = n[le] || null;
                if (!a) throw Error(r(90));
                Ea(
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
              n = l[e], n.form === t.form && ui(n);
          }
          break t;
        case "textarea":
          ru(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && Ge(t, !!l.multiple, e, !1);
      }
    }
  }
  var Fn = !1;
  function ri(t, e, l) {
    if (Fn) return t(e, l);
    Fn = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (Fn = !1, (pn !== null || Tl !== null) && (Ki(), pn && (e = pn, t = Tl, Tl = pn = null, si(e), t)))
        for (e = 0; e < t.length; e++) si(t[e]);
    }
  }
  function bn(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var n = l[le] || null;
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
  var yl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), du = !1;
  if (yl)
    try {
      var Xl = {};
      Object.defineProperty(Xl, "passive", {
        get: function() {
          du = !0;
        }
      }), window.addEventListener("test", Xl, Xl), window.removeEventListener("test", Xl, Xl);
    } catch {
      du = !1;
    }
  var Nl = null, Na = null, d = null;
  function A() {
    if (d) return d;
    var t, e = Na, l = e.length, n, a = "value" in Nl ? Nl.value : Nl.textContent, u = a.length;
    for (t = 0; t < l && e[t] === a[t]; t++) ;
    var c = l - t;
    for (n = 1; n <= c && e[l - n] === a[u - n]; n++) ;
    return d = a.slice(t, 1 < n ? 1 - n : void 0);
  }
  function C(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function x() {
    return !0;
  }
  function V() {
    return !1;
  }
  function k(t) {
    function e(l, n, a, u, c) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var o in t)
        t.hasOwnProperty(o) && (l = t[o], this[o] = l ? l(u) : u[o]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? x : V, this.isPropagationStopped = V, this;
    }
    return G(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = x);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = x);
      },
      persist: function() {
      },
      isPersistent: x
    }), e;
  }
  var mt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Kt = k(mt), et = G({}, mt, { view: 0, detail: 0 }), jt = k(et), ne, ut, Ue, ce = G({}, et, {
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
    getModifierState: Cc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ue && (Ue && t.type === "mousemove" ? (ne = t.screenX - Ue.screenX, ut = t.screenY - Ue.screenY) : ut = ne = 0, Ue = t), ne);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : ut;
    }
  }), fi = k(ce), em = G({}, ce, { dataTransfer: 0 }), lm = k(em), nm = G({}, et, { relatedTarget: 0 }), Mc = k(nm), am = G({}, mt, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), um = k(am), im = G({}, mt, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), cm = k(im), sm = G({}, mt, { data: 0 }), Kr = k(sm), rm = {
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
  function Cc() {
    return dm;
  }
  var hm = G({}, et, {
    key: function(t) {
      if (t.key) {
        var e = rm[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = C(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? fm[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Cc,
    charCode: function(t) {
      return t.type === "keypress" ? C(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? C(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), mm = k(hm), ym = G({}, ce, {
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
  }), kr = k(ym), vm = G({}, et, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Cc
  }), gm = k(vm), pm = G({}, mt, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), bm = k(pm), Sm = G({}, ce, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), _m = k(Sm), Em = G({}, mt, {
    newState: 0,
    oldState: 0
  }), Am = k(Em), Tm = [9, 13, 27, 32], Dc = yl && "CompositionEvent" in window, hu = null;
  yl && "documentMode" in document && (hu = document.documentMode);
  var Nm = yl && "TextEvent" in window && !hu, Jr = yl && (!Dc || hu && 8 < hu && 11 >= hu), Wr = " ", $r = !1;
  function Fr(t, e) {
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
  function Ir(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Oa = !1;
  function Om(t, e) {
    switch (t) {
      case "compositionend":
        return Ir(e);
      case "keypress":
        return e.which !== 32 ? null : ($r = !0, Wr);
      case "textInput":
        return t = e.data, t === Wr && $r ? null : t;
      default:
        return null;
    }
  }
  function Rm(t, e) {
    if (Oa)
      return t === "compositionend" || !Dc && Fr(t, e) ? (t = A(), d = Na = Nl = null, Oa = !1, t) : null;
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
        return Jr && e.locale !== "ko" ? null : e.data;
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
  function Pr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!zm[t.type] : e === "textarea";
  }
  function tf(t, e, l, n) {
    pn ? Tl ? Tl.push(n) : Tl = [n] : pn = n, e = Pi(e, "onChange"), 0 < e.length && (l = new Kt(
      "onChange",
      "change",
      null,
      l,
      n
    ), t.push({ event: l, listeners: e }));
  }
  var mu = null, yu = null;
  function Mm(t) {
    Ld(t, 0);
  }
  function oi(t) {
    var e = hn(t);
    if (ui(e)) return t;
  }
  function ef(t, e) {
    if (t === "change") return e;
  }
  var lf = !1;
  if (yl) {
    var Uc;
    if (yl) {
      var qc = "oninput" in document;
      if (!qc) {
        var nf = document.createElement("div");
        nf.setAttribute("oninput", "return;"), qc = typeof nf.oninput == "function";
      }
      Uc = qc;
    } else Uc = !1;
    lf = Uc && (!document.documentMode || 9 < document.documentMode);
  }
  function af() {
    mu && (mu.detachEvent("onpropertychange", uf), yu = mu = null);
  }
  function uf(t) {
    if (t.propertyName === "value" && oi(yu)) {
      var e = [];
      tf(
        e,
        yu,
        t,
        ou(t)
      ), ri(Mm, e);
    }
  }
  function Cm(t, e, l) {
    t === "focusin" ? (af(), mu = e, yu = l, mu.attachEvent("onpropertychange", uf)) : t === "focusout" && af();
  }
  function Dm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return oi(yu);
  }
  function Um(t, e) {
    if (t === "click") return oi(e);
  }
  function qm(t, e) {
    if (t === "input" || t === "change")
      return oi(e);
  }
  function xm(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Xe = typeof Object.is == "function" ? Object.is : xm;
  function vu(t, e) {
    if (Xe(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), n = Object.keys(e);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!ft.call(e, a) || !Xe(t[a], e[a]))
        return !1;
    }
    return !0;
  }
  function cf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function sf(t, e) {
    var l = cf(t);
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
      l = cf(l);
    }
  }
  function rf(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? rf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function ff(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Wn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Wn(t.document);
    }
    return e;
  }
  function xc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Bm = yl && "documentMode" in document && 11 >= document.documentMode, Ra = null, Bc = null, gu = null, jc = !1;
  function of(t, e, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    jc || Ra == null || Ra !== Wn(n) || (n = Ra, "selectionStart" in n && xc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), gu && vu(gu, n) || (gu = n, n = Pi(Bc, "onSelect"), 0 < n.length && (e = new Kt(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: n }), e.target = Ra)));
  }
  function In(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var za = {
    animationend: In("Animation", "AnimationEnd"),
    animationiteration: In("Animation", "AnimationIteration"),
    animationstart: In("Animation", "AnimationStart"),
    transitionrun: In("Transition", "TransitionRun"),
    transitionstart: In("Transition", "TransitionStart"),
    transitioncancel: In("Transition", "TransitionCancel"),
    transitionend: In("Transition", "TransitionEnd")
  }, Hc = {}, df = {};
  yl && (df = document.createElement("div").style, "AnimationEvent" in window || (delete za.animationend.animation, delete za.animationiteration.animation, delete za.animationstart.animation), "TransitionEvent" in window || delete za.transitionend.transition);
  function Pn(t) {
    if (Hc[t]) return Hc[t];
    if (!za[t]) return t;
    var e = za[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in df)
        return Hc[t] = e[l];
    return t;
  }
  var hf = Pn("animationend"), mf = Pn("animationiteration"), yf = Pn("animationstart"), jm = Pn("transitionrun"), Hm = Pn("transitionstart"), Lm = Pn("transitioncancel"), vf = Pn("transitionend"), gf = /* @__PURE__ */ new Map(), Lc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Lc.push("scrollEnd");
  function vl(t, e) {
    gf.set(t, e), ge(e, [t]);
  }
  var di = typeof reportError == "function" ? reportError : function(t) {
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
  }, Pe = [], Ma = 0, wc = 0;
  function hi() {
    for (var t = Ma, e = wc = Ma = 0; e < t; ) {
      var l = Pe[e];
      Pe[e++] = null;
      var n = Pe[e];
      Pe[e++] = null;
      var a = Pe[e];
      Pe[e++] = null;
      var u = Pe[e];
      if (Pe[e++] = null, n !== null && a !== null) {
        var c = n.pending;
        c === null ? a.next = a : (a.next = c.next, c.next = a), n.pending = a;
      }
      u !== 0 && pf(l, a, u);
    }
  }
  function mi(t, e, l, n) {
    Pe[Ma++] = t, Pe[Ma++] = e, Pe[Ma++] = l, Pe[Ma++] = n, wc |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
  }
  function Yc(t, e, l, n) {
    return mi(t, e, l, n), yi(t);
  }
  function ta(t, e) {
    return mi(t, null, null, e), yi(t);
  }
  function pf(t, e, l) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, u = t.return; u !== null; )
      u.childLanes |= l, n = u.alternate, n !== null && (n.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (a = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, a && e !== null && (a = 31 - ee(l), t = u.hiddenUpdates, n = t[a], n === null ? t[a] = [e] : n.push(e), e.lane = l | 536870912), u) : null;
  }
  function yi(t) {
    if (50 < wu)
      throw wu = 0, Ws = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ca = {};
  function wm(t, e, l, n) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qe(t, e, l, n) {
    return new wm(t, e, l, n);
  }
  function Gc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Ql(t, e) {
    var l = t.alternate;
    return l === null ? (l = Qe(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function bf(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function vi(t, e, l, n, a, u) {
    var c = 0;
    if (n = t, typeof t == "function") Gc(t) && (c = 1);
    else if (typeof t == "string")
      c = Vy(
        t,
        l,
        w.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case he:
          return t = Qe(31, l, e, a), t.elementType = he, t.lanes = u, t;
        case wt:
          return ea(l.children, a, u, e);
        case be:
          c = 8, a |= 24;
          break;
        case Yt:
          return t = Qe(12, l, e, a | 2), t.elementType = Yt, t.lanes = u, t;
        case de:
          return t = Qe(13, l, e, a), t.elementType = de, t.lanes = u, t;
        case Vt:
          return t = Qe(19, l, e, a), t.elementType = Vt, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Bt:
                c = 10;
                break t;
              case Le:
                c = 9;
                break t;
              case Qt:
                c = 11;
                break t;
              case tt:
                c = 14;
                break t;
              case Ct:
                c = 16, n = null;
                break t;
            }
          c = 29, l = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), n = null;
      }
    return e = Qe(c, l, e, a), e.elementType = t, e.type = n, e.lanes = u, e;
  }
  function ea(t, e, l, n) {
    return t = Qe(7, t, n, e), t.lanes = l, t;
  }
  function Xc(t, e, l) {
    return t = Qe(6, t, null, e), t.lanes = l, t;
  }
  function Sf(t) {
    var e = Qe(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Qc(t, e, l) {
    return e = Qe(
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
  var _f = /* @__PURE__ */ new WeakMap();
  function tl(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = _f.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: nu(e)
      }, _f.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: nu(e)
    };
  }
  var Da = [], Ua = 0, gi = null, pu = 0, el = [], ll = 0, Sn = null, Ol = 1, Rl = "";
  function Vl(t, e) {
    Da[Ua++] = pu, Da[Ua++] = gi, gi = t, pu = e;
  }
  function Ef(t, e, l) {
    el[ll++] = Ol, el[ll++] = Rl, el[ll++] = Sn, Sn = t;
    var n = Ol;
    t = Rl;
    var a = 32 - ee(n) - 1;
    n &= ~(1 << a), l += 1;
    var u = 32 - ee(e) + a;
    if (30 < u) {
      var c = a - a % 5;
      u = (n & (1 << c) - 1).toString(32), n >>= c, a -= c, Ol = 1 << 32 - ee(e) + a | l << a | n, Rl = u + t;
    } else
      Ol = 1 << u | l << a | n, Rl = t;
  }
  function Vc(t) {
    t.return !== null && (Vl(t, 1), Ef(t, 1, 0));
  }
  function Zc(t) {
    for (; t === gi; )
      gi = Da[--Ua], Da[Ua] = null, pu = Da[--Ua], Da[Ua] = null;
    for (; t === Sn; )
      Sn = el[--ll], el[ll] = null, Rl = el[--ll], el[ll] = null, Ol = el[--ll], el[ll] = null;
  }
  function Af(t, e) {
    el[ll++] = Ol, el[ll++] = Rl, el[ll++] = Sn, Ol = e.id, Rl = e.overflow, Sn = t;
  }
  var se = null, zt = null, ot = !1, _n = null, nl = !1, Kc = Error(r(519));
  function En(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw bu(tl(e, t)), Kc;
  }
  function Tf(t) {
    var e = t.stateNode, l = t.type, n = t.memoizedProps;
    switch (e[St] = t, e[le] = n, l) {
      case "dialog":
        ct("cancel", e), ct("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ct("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Gu.length; l++)
          ct(Gu[l], e);
        break;
      case "source":
        ct("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ct("error", e), ct("load", e);
        break;
      case "details":
        ct("toggle", e);
        break;
      case "input":
        ct("invalid", e), yn(
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
        ct("invalid", e);
        break;
      case "textarea":
        ct("invalid", e), vn(e, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || n.suppressHydrationWarning === !0 || Xd(e.textContent, l) ? (n.popover != null && (ct("beforetoggle", e), ct("toggle", e)), n.onScroll != null && ct("scroll", e), n.onScrollEnd != null && ct("scrollend", e), n.onClick != null && (e.onclick = ml), e = !0) : e = !1, e || En(t, !0);
  }
  function Nf(t) {
    for (se = t.return; se; )
      switch (se.tag) {
        case 5:
        case 31:
        case 13:
          nl = !1;
          return;
        case 27:
        case 3:
          nl = !0;
          return;
        default:
          se = se.return;
      }
  }
  function qa(t) {
    if (t !== se) return !1;
    if (!ot) return Nf(t), ot = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || fr(t.type, t.memoizedProps)), l = !l), l && zt && En(t), Nf(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      zt = Fd(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      zt = Fd(t);
    } else
      e === 27 ? (e = zt, jn(t.type) ? (t = yr, yr = null, zt = t) : zt = e) : zt = se ? ul(t.stateNode.nextSibling) : null;
    return !0;
  }
  function la() {
    zt = se = null, ot = !1;
  }
  function kc() {
    var t = _n;
    return t !== null && (je === null ? je = t : je.push.apply(
      je,
      t
    ), _n = null), t;
  }
  function bu(t) {
    _n === null ? _n = [t] : _n.push(t);
  }
  var Jc = m(null), na = null, Zl = null;
  function An(t, e, l) {
    H(Jc, e._currentValue), e._currentValue = l;
  }
  function Kl(t) {
    t._currentValue = Jc.current, D(Jc);
  }
  function Wc(t, e, l) {
    for (; t !== null; ) {
      var n = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function $c(t, e, l, n) {
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
              u.lanes |= l, o = u.alternate, o !== null && (o.lanes |= l), Wc(
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
        c.lanes |= l, u = c.alternate, u !== null && (u.lanes |= l), Wc(c, l, t), c = null;
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
  function xa(t, e, l, n) {
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
          Xe(a.pendingProps.value, c.value) || (t !== null ? t.push(o) : t = [o]);
        }
      } else if (a === I.current) {
        if (c = a.alternate, c === null) throw Error(r(387));
        c.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(Ku) : t = [Ku]);
      }
      a = a.return;
    }
    t !== null && $c(
      e,
      t,
      l,
      n
    ), e.flags |= 262144;
  }
  function pi(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Xe(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function aa(t) {
    na = t, Zl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function re(t) {
    return Of(na, t);
  }
  function bi(t, e) {
    return na === null && aa(t), Of(t, e);
  }
  function Of(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, Zl === null) {
      if (t === null) throw Error(r(308));
      Zl = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Zl = Zl.next = e;
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
  }, Gm = f.unstable_scheduleCallback, Xm = f.unstable_NormalPriority, kt = {
    $$typeof: Bt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Fc() {
    return {
      controller: new Ym(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Su(t) {
    t.refCount--, t.refCount === 0 && Gm(Xm, function() {
      t.controller.abort();
    });
  }
  var _u = null, Ic = 0, Ba = 0, ja = null;
  function Qm(t, e) {
    if (_u === null) {
      var l = _u = [];
      Ic = 0, Ba = er(), ja = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Ic++, e.then(Rf, Rf), e;
  }
  function Rf() {
    if (--Ic === 0 && _u !== null) {
      ja !== null && (ja.status = "fulfilled");
      var t = _u;
      _u = null, Ba = 0, ja = null;
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
  var zf = _.S;
  _.S = function(t, e) {
    dd = ye(), typeof e == "object" && e !== null && typeof e.then == "function" && Qm(t, e), zf !== null && zf(t, e);
  };
  var ua = m(null);
  function Pc() {
    var t = ua.current;
    return t !== null ? t : Rt.pooledCache;
  }
  function Si(t, e) {
    e === null ? H(ua, ua.current) : H(ua, e.pool);
  }
  function Mf() {
    var t = Pc();
    return t === null ? null : { parent: kt._currentValue, pool: t };
  }
  var Ha = Error(r(460)), ts = Error(r(474)), _i = Error(r(542)), Ei = { then: function() {
  } };
  function Cf(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Df(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(ml, ml), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, qf(t), t;
      default:
        if (typeof e.status == "string") e.then(ml, ml);
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
            throw t = e.reason, qf(t), t;
        }
        throw ca = e, Ha;
    }
  }
  function ia(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (ca = l, Ha) : l;
    }
  }
  var ca = null;
  function Uf() {
    if (ca === null) throw Error(r(459));
    var t = ca;
    return ca = null, t;
  }
  function qf(t) {
    if (t === Ha || t === _i)
      throw Error(r(483));
  }
  var La = null, Eu = 0;
  function Ai(t) {
    var e = Eu;
    return Eu += 1, La === null && (La = []), Df(La, t, e);
  }
  function Au(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Ti(t, e) {
    throw e.$$typeof === nt ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function xf(t) {
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
      return v = Ql(v, y), v.index = 0, v.sibling = null, v;
    }
    function u(v, y, p) {
      return v.index = p, t ? (p = v.alternate, p !== null ? (p = p.index, p < y ? (v.flags |= 67108866, y) : p) : (v.flags |= 67108866, y)) : (v.flags |= 1048576, y);
    }
    function c(v) {
      return t && v.alternate === null && (v.flags |= 67108866), v;
    }
    function o(v, y, p, R) {
      return y === null || y.tag !== 6 ? (y = Xc(p, v.mode, R), y.return = v, y) : (y = a(y, p), y.return = v, y);
    }
    function h(v, y, p, R) {
      var Z = p.type;
      return Z === wt ? O(
        v,
        y,
        p.props.children,
        R,
        p.key
      ) : y !== null && (y.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === Ct && ia(Z) === y.type) ? (y = a(y, p.props), Au(y, p), y.return = v, y) : (y = vi(
        p.type,
        p.key,
        p.props,
        null,
        v.mode,
        R
      ), Au(y, p), y.return = v, y);
    }
    function b(v, y, p, R) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== p.containerInfo || y.stateNode.implementation !== p.implementation ? (y = Qc(p, v.mode, R), y.return = v, y) : (y = a(y, p.children || []), y.return = v, y);
    }
    function O(v, y, p, R, Z) {
      return y === null || y.tag !== 7 ? (y = ea(
        p,
        v.mode,
        R,
        Z
      ), y.return = v, y) : (y = a(y, p), y.return = v, y);
    }
    function M(v, y, p) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = Xc(
          "" + y,
          v.mode,
          p
        ), y.return = v, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Pt:
            return p = vi(
              y.type,
              y.key,
              y.props,
              null,
              v.mode,
              p
            ), Au(p, y), p.return = v, p;
          case At:
            return y = Qc(
              y,
              v.mode,
              p
            ), y.return = v, y;
          case Ct:
            return y = ia(y), M(v, y, p);
        }
        if (Re(y) || me(y))
          return y = ea(
            y,
            v.mode,
            p,
            null
          ), y.return = v, y;
        if (typeof y.then == "function")
          return M(v, Ai(y), p);
        if (y.$$typeof === Bt)
          return M(
            v,
            bi(v, y),
            p
          );
        Ti(v, y);
      }
      return null;
    }
    function S(v, y, p, R) {
      var Z = y !== null ? y.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return Z !== null ? null : o(v, y, "" + p, R);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Pt:
            return p.key === Z ? h(v, y, p, R) : null;
          case At:
            return p.key === Z ? b(v, y, p, R) : null;
          case Ct:
            return p = ia(p), S(v, y, p, R);
        }
        if (Re(p) || me(p))
          return Z !== null ? null : O(v, y, p, R, null);
        if (typeof p.then == "function")
          return S(
            v,
            y,
            Ai(p),
            R
          );
        if (p.$$typeof === Bt)
          return S(
            v,
            y,
            bi(v, p),
            R
          );
        Ti(v, p);
      }
      return null;
    }
    function E(v, y, p, R, Z) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return v = v.get(p) || null, o(y, v, "" + R, Z);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case Pt:
            return v = v.get(
              R.key === null ? p : R.key
            ) || null, h(y, v, R, Z);
          case At:
            return v = v.get(
              R.key === null ? p : R.key
            ) || null, b(y, v, R, Z);
          case Ct:
            return R = ia(R), E(
              v,
              y,
              p,
              R,
              Z
            );
        }
        if (Re(R) || me(R))
          return v = v.get(p) || null, O(y, v, R, Z, null);
        if (typeof R.then == "function")
          return E(
            v,
            y,
            p,
            Ai(R),
            Z
          );
        if (R.$$typeof === Bt)
          return E(
            v,
            y,
            p,
            bi(y, R),
            Z
          );
        Ti(y, R);
      }
      return null;
    }
    function L(v, y, p, R) {
      for (var Z = null, yt = null, X = y, P = y = 0, rt = null; X !== null && P < p.length; P++) {
        X.index > P ? (rt = X, X = null) : rt = X.sibling;
        var vt = S(
          v,
          X,
          p[P],
          R
        );
        if (vt === null) {
          X === null && (X = rt);
          break;
        }
        t && X && vt.alternate === null && e(v, X), y = u(vt, y, P), yt === null ? Z = vt : yt.sibling = vt, yt = vt, X = rt;
      }
      if (P === p.length)
        return l(v, X), ot && Vl(v, P), Z;
      if (X === null) {
        for (; P < p.length; P++)
          X = M(v, p[P], R), X !== null && (y = u(
            X,
            y,
            P
          ), yt === null ? Z = X : yt.sibling = X, yt = X);
        return ot && Vl(v, P), Z;
      }
      for (X = n(X); P < p.length; P++)
        rt = E(
          X,
          v,
          P,
          p[P],
          R
        ), rt !== null && (t && rt.alternate !== null && X.delete(
          rt.key === null ? P : rt.key
        ), y = u(
          rt,
          y,
          P
        ), yt === null ? Z = rt : yt.sibling = rt, yt = rt);
      return t && X.forEach(function(Gn) {
        return e(v, Gn);
      }), ot && Vl(v, P), Z;
    }
    function K(v, y, p, R) {
      if (p == null) throw Error(r(151));
      for (var Z = null, yt = null, X = y, P = y = 0, rt = null, vt = p.next(); X !== null && !vt.done; P++, vt = p.next()) {
        X.index > P ? (rt = X, X = null) : rt = X.sibling;
        var Gn = S(v, X, vt.value, R);
        if (Gn === null) {
          X === null && (X = rt);
          break;
        }
        t && X && Gn.alternate === null && e(v, X), y = u(Gn, y, P), yt === null ? Z = Gn : yt.sibling = Gn, yt = Gn, X = rt;
      }
      if (vt.done)
        return l(v, X), ot && Vl(v, P), Z;
      if (X === null) {
        for (; !vt.done; P++, vt = p.next())
          vt = M(v, vt.value, R), vt !== null && (y = u(vt, y, P), yt === null ? Z = vt : yt.sibling = vt, yt = vt);
        return ot && Vl(v, P), Z;
      }
      for (X = n(X); !vt.done; P++, vt = p.next())
        vt = E(X, v, P, vt.value, R), vt !== null && (t && vt.alternate !== null && X.delete(vt.key === null ? P : vt.key), y = u(vt, y, P), yt === null ? Z = vt : yt.sibling = vt, yt = vt);
      return t && X.forEach(function(e0) {
        return e(v, e0);
      }), ot && Vl(v, P), Z;
    }
    function Ot(v, y, p, R) {
      if (typeof p == "object" && p !== null && p.type === wt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Pt:
            t: {
              for (var Z = p.key; y !== null; ) {
                if (y.key === Z) {
                  if (Z = p.type, Z === wt) {
                    if (y.tag === 7) {
                      l(
                        v,
                        y.sibling
                      ), R = a(
                        y,
                        p.props.children
                      ), R.return = v, v = R;
                      break t;
                    }
                  } else if (y.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === Ct && ia(Z) === y.type) {
                    l(
                      v,
                      y.sibling
                    ), R = a(y, p.props), Au(R, p), R.return = v, v = R;
                    break t;
                  }
                  l(v, y);
                  break;
                } else e(v, y);
                y = y.sibling;
              }
              p.type === wt ? (R = ea(
                p.props.children,
                v.mode,
                R,
                p.key
              ), R.return = v, v = R) : (R = vi(
                p.type,
                p.key,
                p.props,
                null,
                v.mode,
                R
              ), Au(R, p), R.return = v, v = R);
            }
            return c(v);
          case At:
            t: {
              for (Z = p.key; y !== null; ) {
                if (y.key === Z)
                  if (y.tag === 4 && y.stateNode.containerInfo === p.containerInfo && y.stateNode.implementation === p.implementation) {
                    l(
                      v,
                      y.sibling
                    ), R = a(y, p.children || []), R.return = v, v = R;
                    break t;
                  } else {
                    l(v, y);
                    break;
                  }
                else e(v, y);
                y = y.sibling;
              }
              R = Qc(p, v.mode, R), R.return = v, v = R;
            }
            return c(v);
          case Ct:
            return p = ia(p), Ot(
              v,
              y,
              p,
              R
            );
        }
        if (Re(p))
          return L(
            v,
            y,
            p,
            R
          );
        if (me(p)) {
          if (Z = me(p), typeof Z != "function") throw Error(r(150));
          return p = Z.call(p), K(
            v,
            y,
            p,
            R
          );
        }
        if (typeof p.then == "function")
          return Ot(
            v,
            y,
            Ai(p),
            R
          );
        if (p.$$typeof === Bt)
          return Ot(
            v,
            y,
            bi(v, p),
            R
          );
        Ti(v, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p, y !== null && y.tag === 6 ? (l(v, y.sibling), R = a(y, p), R.return = v, v = R) : (l(v, y), R = Xc(p, v.mode, R), R.return = v, v = R), c(v)) : l(v, y);
    }
    return function(v, y, p, R) {
      try {
        Eu = 0;
        var Z = Ot(
          v,
          y,
          p,
          R
        );
        return La = null, Z;
      } catch (X) {
        if (X === Ha || X === _i) throw X;
        var yt = Qe(29, X, null, v.mode);
        return yt.lanes = R, yt.return = v, yt;
      }
    };
  }
  var sa = xf(!0), Bf = xf(!1), Tn = !1;
  function es(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ls(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Nn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function On(t, e, l) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (gt & 2) !== 0) {
      var a = n.pending;
      return a === null ? e.next = e : (e.next = a.next, a.next = e), n.pending = e, e = yi(t), pf(t, null, l), e;
    }
    return mi(t, n, e, l), yi(t);
  }
  function Tu(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, jl(t, l);
    }
  }
  function ns(t, e) {
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
  var as = !1;
  function Nu() {
    if (as) {
      var t = ja;
      if (t !== null) throw t;
    }
  }
  function Ou(t, e, l, n) {
    as = !1;
    var a = t.updateQueue;
    Tn = !1;
    var u = a.firstBaseUpdate, c = a.lastBaseUpdate, o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var h = o, b = h.next;
      h.next = null, c === null ? u = b : c.next = b, c = h;
      var O = t.alternate;
      O !== null && (O = O.updateQueue, o = O.lastBaseUpdate, o !== c && (o === null ? O.firstBaseUpdate = b : o.next = b, O.lastBaseUpdate = h));
    }
    if (u !== null) {
      var M = a.baseState;
      c = 0, O = b = h = null, o = u;
      do {
        var S = o.lane & -536870913, E = S !== o.lane;
        if (E ? (st & S) === S : (n & S) === S) {
          S !== 0 && S === Ba && (as = !0), O !== null && (O = O.next = {
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
                  M = L.call(Ot, M, S);
                  break t;
                }
                M = L;
                break t;
              case 3:
                L.flags = L.flags & -65537 | 128;
              case 0:
                if (L = K.payload, S = typeof L == "function" ? L.call(Ot, M, S) : L, S == null) break t;
                M = G({}, M, S);
                break t;
              case 2:
                Tn = !0;
            }
          }
          S = o.callback, S !== null && (t.flags |= 64, E && (t.flags |= 8192), E = a.callbacks, E === null ? a.callbacks = [S] : E.push(S));
        } else
          E = {
            lane: S,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          }, O === null ? (b = O = E, h = M) : O = O.next = E, c |= S;
        if (o = o.next, o === null) {
          if (o = a.shared.pending, o === null)
            break;
          E = o, o = E.next, E.next = null, a.lastBaseUpdate = E, a.shared.pending = null;
        }
      } while (!0);
      O === null && (h = M), a.baseState = h, a.firstBaseUpdate = b, a.lastBaseUpdate = O, u === null && (a.shared.lanes = 0), Dn |= c, t.lanes = c, t.memoizedState = M;
    }
  }
  function jf(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function Hf(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        jf(l[t], e);
  }
  var wa = m(null), Ni = m(0);
  function Lf(t, e) {
    t = en, H(Ni, t), H(wa, e), en = t | e.baseLanes;
  }
  function us() {
    H(Ni, en), H(wa, wa.current);
  }
  function is() {
    en = Ni.current, D(wa), D(Ni);
  }
  var Ve = m(null), al = null;
  function Rn(t) {
    var e = t.alternate;
    H(Gt, Gt.current & 1), H(Ve, t), al === null && (e === null || wa.current !== null || e.memoizedState !== null) && (al = t);
  }
  function cs(t) {
    H(Gt, Gt.current), H(Ve, t), al === null && (al = t);
  }
  function wf(t) {
    t.tag === 22 ? (H(Gt, Gt.current), H(Ve, t), al === null && (al = t)) : zn();
  }
  function zn() {
    H(Gt, Gt.current), H(Ve, Ve.current);
  }
  function Ze(t) {
    D(Ve), al === t && (al = null), D(Gt);
  }
  var Gt = m(0);
  function Oi(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || hr(l) || mr(l)))
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
  var kl = 0, F = null, Tt = null, Jt = null, Ri = !1, Ya = !1, ra = !1, zi = 0, Ru = 0, Ga = null, Zm = 0;
  function Ht() {
    throw Error(r(321));
  }
  function ss(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!Xe(t[l], e[l])) return !1;
    return !0;
  }
  function rs(t, e, l, n, a, u) {
    return kl = u, F = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, _.H = t === null || t.memoizedState === null ? Ao : Ts, ra = !1, u = l(n, a), ra = !1, Ya && (u = Gf(
      e,
      l,
      n,
      a
    )), Yf(t), u;
  }
  function Yf(t) {
    _.H = Cu;
    var e = Tt !== null && Tt.next !== null;
    if (kl = 0, Jt = Tt = F = null, Ri = !1, Ru = 0, Ga = null, e) throw Error(r(300));
    t === null || Wt || (t = t.dependencies, t !== null && pi(t) && (Wt = !0));
  }
  function Gf(t, e, l, n) {
    F = t;
    var a = 0;
    do {
      if (Ya && (Ga = null), Ru = 0, Ya = !1, 25 <= a) throw Error(r(301));
      if (a += 1, Jt = Tt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      _.H = To, u = e(l, n);
    } while (Ya);
    return u;
  }
  function Km() {
    var t = _.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? zu(e) : e, t = t.useState()[0], (Tt !== null ? Tt.memoizedState : null) !== t && (F.flags |= 1024), e;
  }
  function fs() {
    var t = zi !== 0;
    return zi = 0, t;
  }
  function os(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function ds(t) {
    if (Ri) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Ri = !1;
    }
    kl = 0, Jt = Tt = F = null, Ya = !1, Ru = zi = 0, Ga = null;
  }
  function Ne() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Jt === null ? F.memoizedState = Jt = t : Jt = Jt.next = t, Jt;
  }
  function Xt() {
    if (Tt === null) {
      var t = F.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Tt.next;
    var e = Jt === null ? F.memoizedState : Jt.next;
    if (e !== null)
      Jt = e, Tt = t;
    else {
      if (t === null)
        throw F.alternate === null ? Error(r(467)) : Error(r(310));
      Tt = t, t = {
        memoizedState: Tt.memoizedState,
        baseState: Tt.baseState,
        baseQueue: Tt.baseQueue,
        queue: Tt.queue,
        next: null
      }, Jt === null ? F.memoizedState = Jt = t : Jt = Jt.next = t;
    }
    return Jt;
  }
  function Mi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function zu(t) {
    var e = Ru;
    return Ru += 1, Ga === null && (Ga = []), t = Df(Ga, t, e), e = F, (Jt === null ? e.memoizedState : Jt.next) === null && (e = e.alternate, _.H = e === null || e.memoizedState === null ? Ao : Ts), t;
  }
  function Ci(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return zu(t);
      if (t.$$typeof === Bt) return re(t);
    }
    throw Error(r(438, String(t)));
  }
  function hs(t) {
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
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Mi(), F.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), n = 0; n < t; n++)
        l[n] = we;
    return e.index++, l;
  }
  function Jl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Di(t) {
    var e = Xt();
    return ms(e, Tt, t);
  }
  function ms(t, e, l) {
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
        var M = b.lane & -536870913;
        if (M !== b.lane ? (st & M) === M : (kl & M) === M) {
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
            }), M === Ba && (O = !0);
          else if ((kl & S) === S) {
            b = b.next, S === Ba && (O = !0);
            continue;
          } else
            M = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, h === null ? (o = h = M, c = u) : h = h.next = M, F.lanes |= S, Dn |= S;
          M = b.action, ra && l(u, M), u = b.hasEagerState ? b.eagerState : l(u, M);
        } else
          S = {
            lane: M,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, h === null ? (o = h = S, c = u) : h = h.next = S, F.lanes |= M, Dn |= M;
        b = b.next;
      } while (b !== null && b !== e);
      if (h === null ? c = u : h.next = o, !Xe(u, t.memoizedState) && (Wt = !0, O && (l = ja, l !== null)))
        throw l;
      t.memoizedState = u, t.baseState = c, t.baseQueue = h, n.lastRenderedState = u;
    }
    return a === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function ys(t) {
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
      Xe(u, e.memoizedState) || (Wt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
    }
    return [u, n];
  }
  function Xf(t, e, l) {
    var n = F, a = Xt(), u = ot;
    if (u) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = e();
    var c = !Xe(
      (Tt || a).memoizedState,
      l
    );
    if (c && (a.memoizedState = l, Wt = !0), a = a.queue, ps(Zf.bind(null, n, a, t), [
      t
    ]), a.getSnapshot !== e || c || Jt !== null && Jt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Xa(
        9,
        { destroy: void 0 },
        Vf.bind(
          null,
          n,
          a,
          l,
          e
        ),
        null
      ), Rt === null) throw Error(r(349));
      u || (kl & 127) !== 0 || Qf(n, e, l);
    }
    return l;
  }
  function Qf(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = F.updateQueue, e === null ? (e = Mi(), F.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function Vf(t, e, l, n) {
    e.value = l, e.getSnapshot = n, Kf(e) && kf(t);
  }
  function Zf(t, e, l) {
    return l(function() {
      Kf(e) && kf(t);
    });
  }
  function Kf(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !Xe(t, l);
    } catch {
      return !0;
    }
  }
  function kf(t) {
    var e = ta(t, 2);
    e !== null && He(e, t, 2);
  }
  function vs(t) {
    var e = Ne();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), ra) {
        ze(!0);
        try {
          l();
        } finally {
          ze(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jl,
      lastRenderedState: t
    }, e;
  }
  function Jf(t, e, l, n) {
    return t.baseState = l, ms(
      t,
      Tt,
      typeof n == "function" ? n : Jl
    );
  }
  function km(t, e, l, n, a) {
    if (xi(t)) throw Error(r(485));
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
      _.T !== null ? l(!0) : u.isTransition = !1, n(u), l = e.pending, l === null ? (u.next = e.pending = u, Wf(e, u)) : (u.next = l.next, e.pending = l.next = u);
    }
  }
  function Wf(t, e) {
    var l = e.action, n = e.payload, a = t.state;
    if (e.isTransition) {
      var u = _.T, c = {};
      _.T = c;
      try {
        var o = l(a, n), h = _.S;
        h !== null && h(c, o), $f(t, e, o);
      } catch (b) {
        gs(t, e, b);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), _.T = u;
      }
    } else
      try {
        u = l(a, n), $f(t, e, u);
      } catch (b) {
        gs(t, e, b);
      }
  }
  function $f(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        Ff(t, e, n);
      },
      function(n) {
        return gs(t, e, n);
      }
    ) : Ff(t, e, l);
  }
  function Ff(t, e, l) {
    e.status = "fulfilled", e.value = l, If(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, Wf(t, l)));
  }
  function gs(t, e, l) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        e.status = "rejected", e.reason = l, If(e), e = e.next;
      while (e !== n);
    }
    t.action = null;
  }
  function If(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Pf(t, e) {
    return e;
  }
  function to(t, e) {
    if (ot) {
      var l = Rt.formState;
      if (l !== null) {
        t: {
          var n = F;
          if (ot) {
            if (zt) {
              e: {
                for (var a = zt, u = nl; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break e;
                  }
                  if (a = ul(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break e;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                zt = ul(
                  a.nextSibling
                ), n = a.data === "F!";
                break t;
              }
            }
            En(n);
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
      lastRenderedReducer: Pf,
      lastRenderedState: e
    }, l.queue = n, l = So.bind(
      null,
      F,
      n
    ), n.dispatch = l, n = vs(!1), u = As.bind(
      null,
      F,
      !1,
      n.queue
    ), n = Ne(), a = {
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
  function eo(t) {
    var e = Xt();
    return lo(e, Tt, t);
  }
  function lo(t, e, l) {
    if (e = ms(
      t,
      e,
      Pf
    )[0], t = Di(Jl)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var n = zu(e);
      } catch (c) {
        throw c === Ha ? _i : c;
      }
    else n = e;
    e = Xt();
    var a = e.queue, u = a.dispatch;
    return l !== e.memoizedState && (F.flags |= 2048, Xa(
      9,
      { destroy: void 0 },
      Jm.bind(null, a, l),
      null
    )), [n, u, t];
  }
  function Jm(t, e) {
    t.action = e;
  }
  function no(t) {
    var e = Xt(), l = Tt;
    if (l !== null)
      return lo(e, l, t);
    Xt(), e = e.memoizedState, l = Xt();
    var n = l.queue.dispatch;
    return l.memoizedState = t, [e, n, !1];
  }
  function Xa(t, e, l, n) {
    return t = { tag: t, create: l, deps: n, inst: e, next: null }, e = F.updateQueue, e === null && (e = Mi(), F.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (n = l.next, l.next = t, t.next = n, e.lastEffect = t), t;
  }
  function ao() {
    return Xt().memoizedState;
  }
  function Ui(t, e, l, n) {
    var a = Ne();
    F.flags |= t, a.memoizedState = Xa(
      1 | e,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function qi(t, e, l, n) {
    var a = Xt();
    n = n === void 0 ? null : n;
    var u = a.memoizedState.inst;
    Tt !== null && n !== null && ss(n, Tt.memoizedState.deps) ? a.memoizedState = Xa(e, u, l, n) : (F.flags |= t, a.memoizedState = Xa(
      1 | e,
      u,
      l,
      n
    ));
  }
  function uo(t, e) {
    Ui(8390656, 8, t, e);
  }
  function ps(t, e) {
    qi(2048, 8, t, e);
  }
  function Wm(t) {
    F.flags |= 4;
    var e = F.updateQueue;
    if (e === null)
      e = Mi(), F.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function io(t) {
    var e = Xt().memoizedState;
    return Wm({ ref: e, nextImpl: t }), function() {
      if ((gt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function co(t, e) {
    return qi(4, 2, t, e);
  }
  function so(t, e) {
    return qi(4, 4, t, e);
  }
  function ro(t, e) {
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
  function fo(t, e, l) {
    l = l != null ? l.concat([t]) : null, qi(4, 4, ro.bind(null, e, t), l);
  }
  function bs() {
  }
  function oo(t, e) {
    var l = Xt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && ss(e, n[1]) ? n[0] : (l.memoizedState = [t, e], t);
  }
  function ho(t, e) {
    var l = Xt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && ss(e, n[1]))
      return n[0];
    if (n = t(), ra) {
      ze(!0);
      try {
        t();
      } finally {
        ze(!1);
      }
    }
    return l.memoizedState = [n, e], n;
  }
  function Ss(t, e, l) {
    return l === void 0 || (kl & 1073741824) !== 0 && (st & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = md(), F.lanes |= t, Dn |= t, l);
  }
  function mo(t, e, l, n) {
    return Xe(l, e) ? l : wa.current !== null ? (t = Ss(t, l, n), Xe(t, e) || (Wt = !0), t) : (kl & 42) === 0 || (kl & 1073741824) !== 0 && (st & 261930) === 0 ? (Wt = !0, t.memoizedState = l) : (t = md(), F.lanes |= t, Dn |= t, e);
  }
  function yo(t, e, l, n, a) {
    var u = j.p;
    j.p = u !== 0 && 8 > u ? u : 8;
    var c = _.T, o = {};
    _.T = o, As(t, !1, e, l);
    try {
      var h = a(), b = _.S;
      if (b !== null && b(o, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var O = Vm(
          h,
          n
        );
        Mu(
          t,
          e,
          O,
          Je(t)
        );
      } else
        Mu(
          t,
          e,
          n,
          Je(t)
        );
    } catch (M) {
      Mu(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: M },
        Je()
      );
    } finally {
      j.p = u, c !== null && o.types !== null && (c.types = o.types), _.T = c;
    }
  }
  function $m() {
  }
  function _s(t, e, l, n) {
    if (t.tag !== 5) throw Error(r(476));
    var a = vo(t).queue;
    yo(
      t,
      a,
      e,
      Q,
      l === null ? $m : function() {
        return go(t), l(n);
      }
    );
  }
  function vo(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jl,
        lastRenderedState: Q
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
        lastRenderedReducer: Jl,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function go(t) {
    var e = vo(t);
    e.next === null && (e = t.alternate.memoizedState), Mu(
      t,
      e.next.queue,
      {},
      Je()
    );
  }
  function Es() {
    return re(Ku);
  }
  function po() {
    return Xt().memoizedState;
  }
  function bo() {
    return Xt().memoizedState;
  }
  function Fm(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Je();
          t = Nn(l);
          var n = On(e, t, l);
          n !== null && (He(n, e, l), Tu(n, e, l)), e = { cache: Fc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Im(t, e, l) {
    var n = Je();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, xi(t) ? _o(e, l) : (l = Yc(t, e, l, n), l !== null && (He(l, t, n), Eo(l, e, n)));
  }
  function So(t, e, l) {
    var n = Je();
    Mu(t, e, l, n);
  }
  function Mu(t, e, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (xi(t)) _o(e, a);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var c = e.lastRenderedState, o = u(c, l);
          if (a.hasEagerState = !0, a.eagerState = o, Xe(o, c))
            return mi(t, e, a, 0), Rt === null && hi(), !1;
        } catch {
        }
      if (l = Yc(t, e, a, n), l !== null)
        return He(l, t, n), Eo(l, e, n), !0;
    }
    return !1;
  }
  function As(t, e, l, n) {
    if (n = {
      lane: 2,
      revertLane: er(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, xi(t)) {
      if (e) throw Error(r(479));
    } else
      e = Yc(
        t,
        l,
        n,
        2
      ), e !== null && He(e, t, 2);
  }
  function xi(t) {
    var e = t.alternate;
    return t === F || e !== null && e === F;
  }
  function _o(t, e) {
    Ya = Ri = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Eo(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, jl(t, l);
    }
  }
  var Cu = {
    readContext: re,
    use: Ci,
    useCallback: Ht,
    useContext: Ht,
    useEffect: Ht,
    useImperativeHandle: Ht,
    useLayoutEffect: Ht,
    useInsertionEffect: Ht,
    useMemo: Ht,
    useReducer: Ht,
    useRef: Ht,
    useState: Ht,
    useDebugValue: Ht,
    useDeferredValue: Ht,
    useTransition: Ht,
    useSyncExternalStore: Ht,
    useId: Ht,
    useHostTransitionStatus: Ht,
    useFormState: Ht,
    useActionState: Ht,
    useOptimistic: Ht,
    useMemoCache: Ht,
    useCacheRefresh: Ht
  };
  Cu.useEffectEvent = Ht;
  var Ao = {
    readContext: re,
    use: Ci,
    useCallback: function(t, e) {
      return Ne().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: re,
    useEffect: uo,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, Ui(
        4194308,
        4,
        ro.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return Ui(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Ui(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = Ne();
      e = e === void 0 ? null : e;
      var n = t();
      if (ra) {
        ze(!0);
        try {
          t();
        } finally {
          ze(!1);
        }
      }
      return l.memoizedState = [n, e], n;
    },
    useReducer: function(t, e, l) {
      var n = Ne();
      if (l !== void 0) {
        var a = l(e);
        if (ra) {
          ze(!0);
          try {
            l(e);
          } finally {
            ze(!1);
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
      var e = Ne();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = vs(t);
      var e = t.queue, l = So.bind(null, F, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: bs,
    useDeferredValue: function(t, e) {
      var l = Ne();
      return Ss(l, t, e);
    },
    useTransition: function() {
      var t = vs(!1);
      return t = yo.bind(
        null,
        F,
        t.queue,
        !0,
        !1
      ), Ne().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var n = F, a = Ne();
      if (ot) {
        if (l === void 0)
          throw Error(r(407));
        l = l();
      } else {
        if (l = e(), Rt === null)
          throw Error(r(349));
        (st & 127) !== 0 || Qf(n, e, l);
      }
      a.memoizedState = l;
      var u = { value: l, getSnapshot: e };
      return a.queue = u, uo(Zf.bind(null, n, u, t), [
        t
      ]), n.flags |= 2048, Xa(
        9,
        { destroy: void 0 },
        Vf.bind(
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
      if (ot) {
        var l = Rl, n = Ol;
        l = (n & ~(1 << 32 - ee(n) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = zi++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = Zm++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Es,
    useFormState: to,
    useActionState: to,
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
      return e.queue = l, e = As.bind(
        null,
        F,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: hs,
    useCacheRefresh: function() {
      return Ne().memoizedState = Fm.bind(
        null,
        F
      );
    },
    useEffectEvent: function(t) {
      var e = Ne(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((gt & 2) !== 0)
          throw Error(r(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Ts = {
    readContext: re,
    use: Ci,
    useCallback: oo,
    useContext: re,
    useEffect: ps,
    useImperativeHandle: fo,
    useInsertionEffect: co,
    useLayoutEffect: so,
    useMemo: ho,
    useReducer: Di,
    useRef: ao,
    useState: function() {
      return Di(Jl);
    },
    useDebugValue: bs,
    useDeferredValue: function(t, e) {
      var l = Xt();
      return mo(
        l,
        Tt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Di(Jl)[0], e = Xt().memoizedState;
      return [
        typeof t == "boolean" ? t : zu(t),
        e
      ];
    },
    useSyncExternalStore: Xf,
    useId: po,
    useHostTransitionStatus: Es,
    useFormState: eo,
    useActionState: eo,
    useOptimistic: function(t, e) {
      var l = Xt();
      return Jf(l, Tt, t, e);
    },
    useMemoCache: hs,
    useCacheRefresh: bo
  };
  Ts.useEffectEvent = io;
  var To = {
    readContext: re,
    use: Ci,
    useCallback: oo,
    useContext: re,
    useEffect: ps,
    useImperativeHandle: fo,
    useInsertionEffect: co,
    useLayoutEffect: so,
    useMemo: ho,
    useReducer: ys,
    useRef: ao,
    useState: function() {
      return ys(Jl);
    },
    useDebugValue: bs,
    useDeferredValue: function(t, e) {
      var l = Xt();
      return Tt === null ? Ss(l, t, e) : mo(
        l,
        Tt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ys(Jl)[0], e = Xt().memoizedState;
      return [
        typeof t == "boolean" ? t : zu(t),
        e
      ];
    },
    useSyncExternalStore: Xf,
    useId: po,
    useHostTransitionStatus: Es,
    useFormState: no,
    useActionState: no,
    useOptimistic: function(t, e) {
      var l = Xt();
      return Tt !== null ? Jf(l, Tt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: hs,
    useCacheRefresh: bo
  };
  To.useEffectEvent = io;
  function Ns(t, e, l, n) {
    e = t.memoizedState, l = l(n, e), l = l == null ? e : G({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Os = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var n = Je(), a = Nn(n);
      a.payload = e, l != null && (a.callback = l), e = On(t, a, n), e !== null && (He(e, t, n), Tu(e, t, n));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var n = Je(), a = Nn(n);
      a.tag = 1, a.payload = e, l != null && (a.callback = l), e = On(t, a, n), e !== null && (He(e, t, n), Tu(e, t, n));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = Je(), n = Nn(l);
      n.tag = 2, e != null && (n.callback = e), e = On(t, n, l), e !== null && (He(e, t, l), Tu(e, t, l));
    }
  };
  function No(t, e, l, n, a, u, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, u, c) : e.prototype && e.prototype.isPureReactComponent ? !vu(l, n) || !vu(a, u) : !0;
  }
  function Oo(t, e, l, n) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, n), e.state !== t && Os.enqueueReplaceState(e, e.state, null);
  }
  function fa(t, e) {
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
  function Ro(t) {
    di(t);
  }
  function zo(t) {
    console.error(t);
  }
  function Mo(t) {
    di(t);
  }
  function Bi(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Co(t, e, l) {
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
  function Rs(t, e, l) {
    return l = Nn(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Bi(t, e);
    }, l;
  }
  function Do(t) {
    return t = Nn(t), t.tag = 3, t;
  }
  function Uo(t, e, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = n.value;
      t.payload = function() {
        return a(u);
      }, t.callback = function() {
        Co(e, l, n);
      };
    }
    var c = l.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      Co(e, l, n), typeof a != "function" && (Un === null ? Un = /* @__PURE__ */ new Set([this]) : Un.add(this));
      var o = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function Pm(t, e, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (e = l.alternate, e !== null && xa(
        e,
        l,
        a,
        !0
      ), l = Ve.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return al === null ? ki() : l.alternate === null && Lt === 0 && (Lt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Ei ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : e.add(n), Is(t, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === Ei ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Is(t, n, a)), !1;
        }
        throw Error(r(435, l.tag));
      }
      return Is(t, n, a), ki(), !1;
    }
    if (ot)
      return e = Ve.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = a, n !== Kc && (t = Error(r(422), { cause: n }), bu(tl(t, l)))) : (n !== Kc && (e = Error(r(423), {
        cause: n
      }), bu(
        tl(e, l)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, n = tl(n, l), a = Rs(
        t.stateNode,
        n,
        a
      ), ns(t, a), Lt !== 4 && (Lt = 2)), !1;
    var u = Error(r(520), { cause: n });
    if (u = tl(u, l), Lu === null ? Lu = [u] : Lu.push(u), Lt !== 4 && (Lt = 2), e === null) return !0;
    n = tl(n, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = a & -a, l.lanes |= t, t = Rs(l.stateNode, n, t), ns(l, t), !1;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Un === null || !Un.has(u))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = Do(a), Uo(
              a,
              t,
              l,
              n
            ), ns(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var zs = Error(r(461)), Wt = !1;
  function fe(t, e, l, n) {
    e.child = t === null ? Bf(e, null, l, n) : sa(
      e,
      t.child,
      l,
      n
    );
  }
  function qo(t, e, l, n, a) {
    l = l.render;
    var u = e.ref;
    if ("ref" in n) {
      var c = {};
      for (var o in n)
        o !== "ref" && (c[o] = n[o]);
    } else c = n;
    return aa(e), n = rs(
      t,
      e,
      l,
      c,
      u,
      a
    ), o = fs(), t !== null && !Wt ? (os(t, e, a), Wl(t, e, a)) : (ot && o && Vc(e), e.flags |= 1, fe(t, e, n, a), e.child);
  }
  function xo(t, e, l, n, a) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !Gc(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, Bo(
        t,
        e,
        u,
        n,
        a
      )) : (t = vi(
        l.type,
        null,
        n,
        e,
        e.mode,
        a
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !js(t, a)) {
      var c = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : vu, l(c, n) && t.ref === e.ref)
        return Wl(t, e, a);
    }
    return e.flags |= 1, t = Ql(u, n), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Bo(t, e, l, n, a) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (vu(u, n) && t.ref === e.ref)
        if (Wt = !1, e.pendingProps = n = u, js(t, a))
          (t.flags & 131072) !== 0 && (Wt = !0);
        else
          return e.lanes = t.lanes, Wl(t, e, a);
    }
    return Ms(
      t,
      e,
      l,
      n,
      a
    );
  }
  function jo(t, e, l, n) {
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
        return Ho(
          t,
          e,
          u,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Si(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? Lf(e, u) : us(), wf(e);
      else
        return n = e.lanes = 536870912, Ho(
          t,
          e,
          u !== null ? u.baseLanes | l : l,
          l,
          n
        );
    } else
      u !== null ? (Si(e, u.cachePool), Lf(e, u), zn(), e.memoizedState = null) : (t !== null && Si(e, null), us(), zn());
    return fe(t, e, a, l), e.child;
  }
  function Du(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Ho(t, e, l, n, a) {
    var u = Pc();
    return u = u === null ? null : { parent: kt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, t !== null && Si(e, null), us(), wf(e), t !== null && xa(t, e, n, !0), e.childLanes = a, null;
  }
  function ji(t, e) {
    return e = Li(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Lo(t, e, l) {
    return sa(e, t.child, null, l), t = ji(e, e.pendingProps), t.flags |= 2, Ze(e), e.memoizedState = null, t;
  }
  function ty(t, e, l) {
    var n = e.pendingProps, a = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (ot) {
        if (n.mode === "hidden")
          return t = ji(e, n), e.lanes = 536870912, Du(null, t);
        if (cs(e), (t = zt) ? (t = $d(
          t,
          nl
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Sn !== null ? { id: Ol, overflow: Rl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Sf(t), l.return = e, e.child = l, se = e, zt = null)) : t = null, t === null) throw En(e);
        return e.lanes = 536870912, null;
      }
      return ji(e, n);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (cs(e), a)
        if (e.flags & 256)
          e.flags &= -257, e = Lo(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (Wt || xa(t, e, l, !1), a = (l & t.childLanes) !== 0, Wt || a) {
        if (n = Rt, n !== null && (c = Zn(n, l), c !== 0 && c !== u.retryLane))
          throw u.retryLane = c, ta(t, c), He(n, t, c), zs;
        ki(), e = Lo(
          t,
          e,
          l
        );
      } else
        t = u.treeContext, zt = ul(c.nextSibling), se = e, ot = !0, _n = null, nl = !1, t !== null && Af(e, t), e = ji(e, n), e.flags |= 4096;
      return e;
    }
    return t = Ql(t.child, {
      mode: n.mode,
      children: n.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Hi(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(r(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Ms(t, e, l, n, a) {
    return aa(e), l = rs(
      t,
      e,
      l,
      n,
      void 0,
      a
    ), n = fs(), t !== null && !Wt ? (os(t, e, a), Wl(t, e, a)) : (ot && n && Vc(e), e.flags |= 1, fe(t, e, l, a), e.child);
  }
  function wo(t, e, l, n, a, u) {
    return aa(e), e.updateQueue = null, l = Gf(
      e,
      n,
      l,
      a
    ), Yf(t), n = fs(), t !== null && !Wt ? (os(t, e, u), Wl(t, e, u)) : (ot && n && Vc(e), e.flags |= 1, fe(t, e, l, u), e.child);
  }
  function Yo(t, e, l, n, a) {
    if (aa(e), e.stateNode === null) {
      var u = Ca, c = l.contextType;
      typeof c == "object" && c !== null && (u = re(c)), u = new l(n, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Os, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = n, u.state = e.memoizedState, u.refs = {}, es(e), c = l.contextType, u.context = typeof c == "object" && c !== null ? re(c) : Ca, u.state = e.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (Ns(
        e,
        l,
        c,
        n
      ), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && Os.enqueueReplaceState(u, u.state, null), Ou(e, n, u, a), Nu(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), n = !0;
    } else if (t === null) {
      u = e.stateNode;
      var o = e.memoizedProps, h = fa(l, o);
      u.props = h;
      var b = u.context, O = l.contextType;
      c = Ca, typeof O == "object" && O !== null && (c = re(O));
      var M = l.getDerivedStateFromProps;
      O = typeof M == "function" || typeof u.getSnapshotBeforeUpdate == "function", o = e.pendingProps !== o, O || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o || b !== c) && Oo(
        e,
        u,
        n,
        c
      ), Tn = !1;
      var S = e.memoizedState;
      u.state = S, Ou(e, n, u, a), Nu(), b = e.memoizedState, o || S !== b || Tn ? (typeof M == "function" && (Ns(
        e,
        l,
        M,
        n
      ), b = e.memoizedState), (h = Tn || No(
        e,
        l,
        h,
        n,
        S,
        b,
        c
      )) ? (O || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = b), u.props = n, u.state = b, u.context = c, n = h) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
    } else {
      u = e.stateNode, ls(t, e), c = e.memoizedProps, O = fa(l, c), u.props = O, M = e.pendingProps, S = u.context, b = l.contextType, h = Ca, typeof b == "object" && b !== null && (h = re(b)), o = l.getDerivedStateFromProps, (b = typeof o == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== M || S !== h) && Oo(
        e,
        u,
        n,
        h
      ), Tn = !1, S = e.memoizedState, u.state = S, Ou(e, n, u, a), Nu();
      var E = e.memoizedState;
      c !== M || S !== E || Tn || t !== null && t.dependencies !== null && pi(t.dependencies) ? (typeof o == "function" && (Ns(
        e,
        l,
        o,
        n
      ), E = e.memoizedState), (O = Tn || No(
        e,
        l,
        O,
        n,
        S,
        E,
        h
      ) || t !== null && t.dependencies !== null && pi(t.dependencies)) ? (b || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(n, E, h), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        n,
        E,
        h
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = E), u.props = n, u.state = E, u.context = h, n = O) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), n = !1);
    }
    return u = n, Hi(t, e), n = (e.flags & 128) !== 0, u || n ? (u = e.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && n ? (e.child = sa(
      e,
      t.child,
      null,
      a
    ), e.child = sa(
      e,
      null,
      l,
      a
    )) : fe(t, e, l, a), e.memoizedState = u.state, t = e.child) : t = Wl(
      t,
      e,
      a
    ), t;
  }
  function Go(t, e, l, n) {
    return la(), e.flags |= 256, fe(t, e, l, n), e.child;
  }
  var Cs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ds(t) {
    return { baseLanes: t, cachePool: Mf() };
  }
  function Us(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= ke), t;
  }
  function Xo(t, e, l) {
    var n = e.pendingProps, a = !1, u = (e.flags & 128) !== 0, c;
    if ((c = u) || (c = t !== null && t.memoizedState === null ? !1 : (Gt.current & 2) !== 0), c && (a = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (ot) {
        if (a ? Rn(e) : zn(), (t = zt) ? (t = $d(
          t,
          nl
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Sn !== null ? { id: Ol, overflow: Rl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Sf(t), l.return = e, e.child = l, se = e, zt = null)) : t = null, t === null) throw En(e);
        return mr(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var o = n.children;
      return n = n.fallback, a ? (zn(), a = e.mode, o = Li(
        { mode: "hidden", children: o },
        a
      ), n = ea(
        n,
        a,
        l,
        null
      ), o.return = e, n.return = e, o.sibling = n, e.child = o, n = e.child, n.memoizedState = Ds(l), n.childLanes = Us(
        t,
        c,
        l
      ), e.memoizedState = Cs, Du(null, n)) : (Rn(e), qs(e, o));
    }
    var h = t.memoizedState;
    if (h !== null && (o = h.dehydrated, o !== null)) {
      if (u)
        e.flags & 256 ? (Rn(e), e.flags &= -257, e = xs(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (zn(), e.child = t.child, e.flags |= 128, e = null) : (zn(), o = n.fallback, a = e.mode, n = Li(
          { mode: "visible", children: n.children },
          a
        ), o = ea(
          o,
          a,
          l,
          null
        ), o.flags |= 2, n.return = e, o.return = e, n.sibling = o, e.child = n, sa(
          e,
          t.child,
          null,
          l
        ), n = e.child, n.memoizedState = Ds(l), n.childLanes = Us(
          t,
          c,
          l
        ), e.memoizedState = Cs, e = Du(null, n));
      else if (Rn(e), mr(o)) {
        if (c = o.nextSibling && o.nextSibling.dataset, c) var b = c.dgst;
        c = b, n = Error(r(419)), n.stack = "", n.digest = c, bu({ value: n, source: null, stack: null }), e = xs(
          t,
          e,
          l
        );
      } else if (Wt || xa(t, e, l, !1), c = (l & t.childLanes) !== 0, Wt || c) {
        if (c = Rt, c !== null && (n = Zn(c, l), n !== 0 && n !== h.retryLane))
          throw h.retryLane = n, ta(t, n), He(c, t, n), zs;
        hr(o) || ki(), e = xs(
          t,
          e,
          l
        );
      } else
        hr(o) ? (e.flags |= 192, e.child = t.child, e = null) : (t = h.treeContext, zt = ul(
          o.nextSibling
        ), se = e, ot = !0, _n = null, nl = !1, t !== null && Af(e, t), e = qs(
          e,
          n.children
        ), e.flags |= 4096);
      return e;
    }
    return a ? (zn(), o = n.fallback, a = e.mode, h = t.child, b = h.sibling, n = Ql(h, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = h.subtreeFlags & 65011712, b !== null ? o = Ql(
      b,
      o
    ) : (o = ea(
      o,
      a,
      l,
      null
    ), o.flags |= 2), o.return = e, n.return = e, n.sibling = o, e.child = n, Du(null, n), n = e.child, o = t.child.memoizedState, o === null ? o = Ds(l) : (a = o.cachePool, a !== null ? (h = kt._currentValue, a = a.parent !== h ? { parent: h, pool: h } : a) : a = Mf(), o = {
      baseLanes: o.baseLanes | l,
      cachePool: a
    }), n.memoizedState = o, n.childLanes = Us(
      t,
      c,
      l
    ), e.memoizedState = Cs, Du(t.child, n)) : (Rn(e), l = t.child, t = l.sibling, l = Ql(l, {
      mode: "visible",
      children: n.children
    }), l.return = e, l.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function qs(t, e) {
    return e = Li(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Li(t, e) {
    return t = Qe(22, t, null, e), t.lanes = 0, t;
  }
  function xs(t, e, l) {
    return sa(e, t.child, null, l), t = qs(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Qo(t, e, l) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e), Wc(t.return, e, l);
  }
  function Bs(t, e, l, n, a, u) {
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
  function Vo(t, e, l) {
    var n = e.pendingProps, a = n.revealOrder, u = n.tail;
    n = n.children;
    var c = Gt.current, o = (c & 2) !== 0;
    if (o ? (c = c & 1 | 2, e.flags |= 128) : c &= 1, H(Gt, c), fe(t, e, n, l), n = ot ? pu : 0, !o && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Qo(t, l, e);
        else if (t.tag === 19)
          Qo(t, l, e);
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
          t = l.alternate, t !== null && Oi(t) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = e.child, e.child = null) : (a = l.sibling, l.sibling = null), Bs(
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
          if (t = a.alternate, t !== null && Oi(t) === null) {
            e.child = a;
            break;
          }
          t = a.sibling, a.sibling = l, l = a, a = t;
        }
        Bs(
          e,
          !0,
          l,
          null,
          u,
          n
        );
        break;
      case "together":
        Bs(
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
  function Wl(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), Dn |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (xa(
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
      for (t = e.child, l = Ql(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = Ql(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function js(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && pi(t)));
  }
  function ey(t, e, l) {
    switch (e.tag) {
      case 3:
        Ut(e, e.stateNode.containerInfo), An(e, kt, t.memoizedState.cache), la();
        break;
      case 27:
      case 5:
        un(e);
        break;
      case 4:
        Ut(e, e.stateNode.containerInfo);
        break;
      case 10:
        An(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, cs(e), null;
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Rn(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? Xo(t, e, l) : (Rn(e), t = Wl(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        Rn(e);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (n = (l & e.childLanes) !== 0, n || (xa(
          t,
          e,
          l,
          !1
        ), n = (l & e.childLanes) !== 0), a) {
          if (n)
            return Vo(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), H(Gt, Gt.current), n) break;
        return null;
      case 22:
        return e.lanes = 0, jo(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        An(e, kt, t.memoizedState.cache);
    }
    return Wl(t, e, l);
  }
  function Zo(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Wt = !0;
      else {
        if (!js(t, l) && (e.flags & 128) === 0)
          return Wt = !1, ey(
            t,
            e,
            l
          );
        Wt = (t.flags & 131072) !== 0;
      }
    else
      Wt = !1, ot && (e.flags & 1048576) !== 0 && Ef(e, pu, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (t = ia(e.elementType), e.type = t, typeof t == "function")
            Gc(t) ? (n = fa(t, n), e.tag = 1, e = Yo(
              null,
              e,
              t,
              n,
              l
            )) : (e.tag = 0, e = Ms(
              null,
              e,
              t,
              n,
              l
            ));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === Qt) {
                e.tag = 11, e = qo(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              } else if (a === tt) {
                e.tag = 14, e = xo(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              }
            }
            throw e = Dt(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return Ms(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return n = e.type, a = fa(
          n,
          e.pendingProps
        ), Yo(
          t,
          e,
          n,
          a,
          l
        );
      case 3:
        t: {
          if (Ut(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          n = e.pendingProps;
          var u = e.memoizedState;
          a = u.element, ls(t, e), Ou(e, n, null, l);
          var c = e.memoizedState;
          if (n = c.cache, An(e, kt, n), n !== u.cache && $c(
            e,
            [kt],
            l,
            !0
          ), Nu(), n = c.element, u.isDehydrated)
            if (u = {
              element: n,
              isDehydrated: !1,
              cache: c.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = Go(
                t,
                e,
                n,
                l
              );
              break t;
            } else if (n !== a) {
              a = tl(
                Error(r(424)),
                e
              ), bu(a), e = Go(
                t,
                e,
                n,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, zt = ul(t.firstChild), se = e, ot = !0, _n = null, nl = !0, l = Bf(
                e,
                null,
                n,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (la(), n === a) {
              e = Wl(
                t,
                e,
                l
              );
              break t;
            }
            fe(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Hi(t, e), t === null ? (l = lh(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : ot || (l = e.type, t = e.pendingProps, n = tc(
          lt.current
        ).createElement(l), n[St] = e, n[le] = t, oe(n, l, t), Zt(n), e.stateNode = n) : e.memoizedState = lh(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return un(e), t === null && ot && (n = e.stateNode = Pd(
          e.type,
          e.pendingProps,
          lt.current
        ), se = e, nl = !0, a = zt, jn(e.type) ? (yr = a, zt = ul(n.firstChild)) : zt = a), fe(
          t,
          e,
          e.pendingProps.children,
          l
        ), Hi(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && ot && ((a = n = zt) && (n = Dy(
          n,
          e.type,
          e.pendingProps,
          nl
        ), n !== null ? (e.stateNode = n, se = e, zt = ul(n.firstChild), nl = !1, a = !0) : a = !1), a || En(e)), un(e), a = e.type, u = e.pendingProps, c = t !== null ? t.memoizedProps : null, n = u.children, fr(a, u) ? n = null : c !== null && fr(a, c) && (e.flags |= 32), e.memoizedState !== null && (a = rs(
          t,
          e,
          Km,
          null,
          null,
          l
        ), Ku._currentValue = a), Hi(t, e), fe(t, e, n, l), e.child;
      case 6:
        return t === null && ot && ((t = l = zt) && (l = Uy(
          l,
          e.pendingProps,
          nl
        ), l !== null ? (e.stateNode = l, se = e, zt = null, t = !0) : t = !1), t || En(e)), null;
      case 13:
        return Xo(t, e, l);
      case 4:
        return Ut(
          e,
          e.stateNode.containerInfo
        ), n = e.pendingProps, t === null ? e.child = sa(
          e,
          null,
          n,
          l
        ) : fe(t, e, n, l), e.child;
      case 11:
        return qo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return fe(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return fe(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return fe(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return n = e.pendingProps, An(e, e.type, n.value), fe(t, e, n.children, l), e.child;
      case 9:
        return a = e.type._context, n = e.pendingProps.children, aa(e), a = re(a), n = n(a), e.flags |= 1, fe(t, e, n, l), e.child;
      case 14:
        return xo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return Bo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return Vo(t, e, l);
      case 31:
        return ty(t, e, l);
      case 22:
        return jo(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return aa(e), n = re(kt), t === null ? (a = Pc(), a === null && (a = Rt, u = Fc(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= l), a = u), e.memoizedState = { parent: n, cache: a }, es(e), An(e, kt, a)) : ((t.lanes & l) !== 0 && (ls(t, e), Ou(e, null, null, l), Nu()), a = t.memoizedState, u = e.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), An(e, kt, n)) : (n = u.cache, An(e, kt, n), n !== a.cache && $c(
          e,
          [kt],
          l,
          !0
        ))), fe(
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
  function $l(t) {
    t.flags |= 4;
  }
  function Hs(t, e, l, n, a) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (a & 335544128) === a)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (pd()) t.flags |= 8192;
        else
          throw ca = Ei, ts;
    } else t.flags &= -16777217;
  }
  function Ko(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !ch(e))
      if (pd()) t.flags |= 8192;
      else
        throw ca = Ei, ts;
  }
  function wi(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? rn() : 536870912, t.lanes |= e, Ka |= e);
  }
  function Uu(t, e) {
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
    switch (Zc(e), e.tag) {
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
        return l = e.stateNode, n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Kl(kt), qt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (qa(e) ? $l(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, kc())), Mt(e), null;
      case 26:
        var a = e.type, u = e.memoizedState;
        return t === null ? ($l(e), u !== null ? (Mt(e), Ko(e, u)) : (Mt(e), Hs(
          e,
          a,
          null,
          n,
          l
        ))) : u ? u !== t.memoizedState ? ($l(e), Mt(e), Ko(e, u)) : (Mt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== n && $l(e), Mt(e), Hs(
          e,
          a,
          t,
          n,
          l
        )), null;
      case 27:
        if (Ul(e), l = lt.current, a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && $l(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Mt(e), null;
          }
          t = w.current, qa(e) ? Tf(e) : (t = Pd(a, n, l), e.stateNode = t, $l(e));
        }
        return Mt(e), null;
      case 5:
        if (Ul(e), a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && $l(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Mt(e), null;
          }
          if (u = w.current, qa(e))
            Tf(e);
          else {
            var c = tc(
              lt.current
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
            u[St] = e, u[le] = n;
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
            t: switch (oe(u, a, n), a) {
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
            n && $l(e);
          }
        }
        return Mt(e), Hs(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== n && $l(e);
        else {
          if (typeof n != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = lt.current, qa(e)) {
            if (t = e.stateNode, l = e.memoizedProps, n = null, a = se, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            t[St] = e, t = !!(t.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Xd(t.nodeValue, l)), t || En(e, !0);
          } else
            t = tc(t).createTextNode(
              n
            ), t[St] = e, e.stateNode = t;
        }
        return Mt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (n = qa(e), l !== null) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[St] = e;
            } else
              la(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Mt(e), t = !1;
          } else
            l = kc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (Ze(e), e) : (Ze(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Mt(e), null;
      case 13:
        if (n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = qa(e), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[St] = e;
            } else
              la(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Mt(e), a = !1;
          } else
            a = kc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return e.flags & 256 ? (Ze(e), e) : (Ze(e), null);
        }
        return Ze(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = n !== null, t = t !== null && t.memoizedState !== null, l && (n = e.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== a && (n.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), wi(e, e.updateQueue), Mt(e), null);
      case 4:
        return qt(), t === null && ur(e.stateNode.containerInfo), Mt(e), null;
      case 10:
        return Kl(e.type), Mt(e), null;
      case 19:
        if (D(Gt), n = e.memoizedState, n === null) return Mt(e), null;
        if (a = (e.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) Uu(n, !1);
          else {
            if (Lt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = Oi(t), u !== null) {
                  for (e.flags |= 128, Uu(n, !1), t = u.updateQueue, e.updateQueue = t, wi(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    bf(l, t), l = l.sibling;
                  return H(
                    Gt,
                    Gt.current & 1 | 2
                  ), ot && Vl(e, n.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null && ye() > Vi && (e.flags |= 128, a = !0, Uu(n, !1), e.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = Oi(u), t !== null) {
              if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, wi(e, t), Uu(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !ot)
                return Mt(e), null;
            } else
              2 * ye() - n.renderingStartTime > Vi && l !== 536870912 && (e.flags |= 128, a = !0, Uu(n, !1), e.lanes = 4194304);
          n.isBackwards ? (u.sibling = e.child, e.child = u) : (t = n.last, t !== null ? t.sibling = u : e.child = u, n.last = u);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = ye(), t.sibling = null, l = Gt.current, H(
          Gt,
          a ? l & 1 | 2 : l & 1
        ), ot && Vl(e, n.treeForkCount), t) : (Mt(e), null);
      case 22:
      case 23:
        return Ze(e), is(), n = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Mt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Mt(e), l = e.updateQueue, l !== null && wi(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== l && (e.flags |= 2048), t !== null && D(ua), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Kl(kt), Mt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function ny(t, e) {
    switch (Zc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Kl(kt), qt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Ul(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Ze(e), e.alternate === null)
            throw Error(r(340));
          la();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Ze(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          la();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return D(Gt), null;
      case 4:
        return qt(), null;
      case 10:
        return Kl(e.type), null;
      case 22:
      case 23:
        return Ze(e), is(), t !== null && D(ua), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Kl(kt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ko(t, e) {
    switch (Zc(e), e.tag) {
      case 3:
        Kl(kt), qt();
        break;
      case 26:
      case 27:
      case 5:
        Ul(e);
        break;
      case 4:
        qt();
        break;
      case 31:
        e.memoizedState !== null && Ze(e);
        break;
      case 13:
        Ze(e);
        break;
      case 19:
        D(Gt);
        break;
      case 10:
        Kl(e.type);
        break;
      case 22:
      case 23:
        Ze(e), is(), t !== null && D(ua);
        break;
      case 24:
        Kl(kt);
    }
  }
  function qu(t, e) {
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
      Et(e, e.return, o);
    }
  }
  function Mn(t, e, l) {
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
                Et(
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
      Et(e, e.return, O);
    }
  }
  function Jo(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Hf(e, l);
      } catch (n) {
        Et(t, t.return, n);
      }
    }
  }
  function Wo(t, e, l) {
    l.props = fa(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      Et(t, e, n);
    }
  }
  function xu(t, e) {
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
      Et(t, e, a);
    }
  }
  function zl(t, e) {
    var l = t.ref, n = t.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          Et(t, e, a);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          Et(t, e, a);
        }
      else l.current = null;
  }
  function $o(t) {
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
      Et(t, t.return, a);
    }
  }
  function Ls(t, e, l) {
    try {
      var n = t.stateNode;
      Ny(n, t.type, l, e), n[le] = e;
    } catch (a) {
      Et(t, t.return, a);
    }
  }
  function Fo(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && jn(t.type) || t.tag === 4;
  }
  function ws(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Fo(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && jn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Ys(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = ml));
    else if (n !== 4 && (n === 27 && jn(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (Ys(t, e, l), t = t.sibling; t !== null; )
        Ys(t, e, l), t = t.sibling;
  }
  function Yi(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (n !== 4 && (n === 27 && jn(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Yi(t, e, l), t = t.sibling; t !== null; )
        Yi(t, e, l), t = t.sibling;
  }
  function Io(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var n = t.type, a = e.attributes; a.length; )
        e.removeAttributeNode(a[0]);
      oe(e, n, l), e[St] = t, e[le] = l;
    } catch (u) {
      Et(t, t.return, u);
    }
  }
  var Fl = !1, $t = !1, Gs = !1, Po = typeof WeakSet == "function" ? WeakSet : Set, ae = null;
  function ay(t, e) {
    if (t = t.containerInfo, sr = cc, t = ff(t), xc(t)) {
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
            var c = 0, o = -1, h = -1, b = 0, O = 0, M = t, S = null;
            e: for (; ; ) {
              for (var E; M !== l || a !== 0 && M.nodeType !== 3 || (o = c + a), M !== u || n !== 0 && M.nodeType !== 3 || (h = c + n), M.nodeType === 3 && (c += M.nodeValue.length), (E = M.firstChild) !== null; )
                S = M, M = E;
              for (; ; ) {
                if (M === t) break e;
                if (S === l && ++b === a && (o = c), S === u && ++O === n && (h = c), (E = M.nextSibling) !== null) break;
                M = S, S = M.parentNode;
              }
              M = E;
            }
            l = o === -1 || h === -1 ? null : { start: o, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (rr = { focusedElem: t, selectionRange: l }, cc = !1, ae = e; ae !== null; )
      if (e = ae, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, ae = t;
      else
        for (; ae !== null; ) {
          switch (e = ae, u = e.alternate, t = e.flags, e.tag) {
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
                  var L = fa(
                    l.type,
                    a
                  );
                  t = n.getSnapshotBeforeUpdate(
                    L,
                    u
                  ), n.__reactInternalSnapshotBeforeUpdate = t;
                } catch (K) {
                  Et(
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
                  dr(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      dr(t);
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
            t.return = e.return, ae = t;
            break;
          }
          ae = e.return;
        }
  }
  function td(t, e, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Pl(t, l), n & 4 && qu(5, l);
        break;
      case 1:
        if (Pl(t, l), n & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (c) {
              Et(l, l.return, c);
            }
          else {
            var a = fa(
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
              Et(
                l,
                l.return,
                c
              );
            }
          }
        n & 64 && Jo(l), n & 512 && xu(l, l.return);
        break;
      case 3:
        if (Pl(t, l), n & 64 && (t = l.updateQueue, t !== null)) {
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
            Hf(t, e);
          } catch (c) {
            Et(l, l.return, c);
          }
        }
        break;
      case 27:
        e === null && n & 4 && Io(l);
      case 26:
      case 5:
        Pl(t, l), e === null && n & 4 && $o(l), n & 512 && xu(l, l.return);
        break;
      case 12:
        Pl(t, l);
        break;
      case 31:
        Pl(t, l), n & 4 && nd(t, l);
        break;
      case 13:
        Pl(t, l), n & 4 && ad(t, l), n & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = hy.bind(
          null,
          l
        ), qy(t, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || Fl, !n) {
          e = e !== null && e.memoizedState !== null || $t, a = Fl;
          var u = $t;
          Fl = n, ($t = e) && !u ? tn(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : Pl(t, l), Fl = a, $t = u;
        }
        break;
      case 30:
        break;
      default:
        Pl(t, l);
    }
  }
  function ed(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, ed(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && dn(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var xt = null, qe = !1;
  function Il(t, e, l) {
    for (l = l.child; l !== null; )
      ld(t, e, l), l = l.sibling;
  }
  function ld(t, e, l) {
    if (te && typeof te.onCommitFiberUnmount == "function")
      try {
        te.onCommitFiberUnmount(We, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        $t || zl(l, e), Il(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        $t || zl(l, e);
        var n = xt, a = qe;
        jn(l.type) && (xt = l.stateNode, qe = !1), Il(
          t,
          e,
          l
        ), Qu(l.stateNode), xt = n, qe = a;
        break;
      case 5:
        $t || zl(l, e);
      case 6:
        if (n = xt, a = qe, xt = null, Il(
          t,
          e,
          l
        ), xt = n, qe = a, xt !== null)
          if (qe)
            try {
              (xt.nodeType === 9 ? xt.body : xt.nodeName === "HTML" ? xt.ownerDocument.body : xt).removeChild(l.stateNode);
            } catch (u) {
              Et(
                l,
                e,
                u
              );
            }
          else
            try {
              xt.removeChild(l.stateNode);
            } catch (u) {
              Et(
                l,
                e,
                u
              );
            }
        break;
      case 18:
        xt !== null && (qe ? (t = xt, Jd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), tu(t)) : Jd(xt, l.stateNode));
        break;
      case 4:
        n = xt, a = qe, xt = l.stateNode.containerInfo, qe = !0, Il(
          t,
          e,
          l
        ), xt = n, qe = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Mn(2, l, e), $t || Mn(4, l, e), Il(
          t,
          e,
          l
        );
        break;
      case 1:
        $t || (zl(l, e), n = l.stateNode, typeof n.componentWillUnmount == "function" && Wo(
          l,
          e,
          n
        )), Il(
          t,
          e,
          l
        );
        break;
      case 21:
        Il(
          t,
          e,
          l
        );
        break;
      case 22:
        $t = (n = $t) || l.memoizedState !== null, Il(
          t,
          e,
          l
        ), $t = n;
        break;
      default:
        Il(
          t,
          e,
          l
        );
    }
  }
  function nd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        tu(t);
      } catch (l) {
        Et(e, e.return, l);
      }
    }
  }
  function ad(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        tu(t);
      } catch (l) {
        Et(e, e.return, l);
      }
  }
  function uy(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Po()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Po()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Gi(t, e) {
    var l = uy(t);
    e.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = my.bind(null, t, n);
        n.then(a, a);
      }
    });
  }
  function xe(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], u = t, c = e, o = c;
        t: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (jn(o.type)) {
                xt = o.stateNode, qe = !1;
                break t;
              }
              break;
            case 5:
              xt = o.stateNode, qe = !1;
              break t;
            case 3:
            case 4:
              xt = o.stateNode.containerInfo, qe = !0;
              break t;
          }
          o = o.return;
        }
        if (xt === null) throw Error(r(160));
        ld(u, c, a), xt = null, qe = !1, u = a.alternate, u !== null && (u.return = null), a.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        ud(e, t), e = e.sibling;
  }
  var gl = null;
  function ud(t, e) {
    var l = t.alternate, n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        xe(e, t), Be(t), n & 4 && (Mn(3, t, t.return), qu(3, t), Mn(5, t, t.return));
        break;
      case 1:
        xe(e, t), Be(t), n & 512 && ($t || l === null || zl(l, l.return)), n & 64 && Fl && (t = t.updateQueue, t !== null && (n = t.callbacks, n !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = gl;
        if (xe(e, t), Be(t), n & 512 && ($t || l === null || zl(l, l.return)), n & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (n = t.memoizedState, l === null)
            if (n === null)
              if (t.stateNode === null) {
                t: {
                  n = t.type, l = t.memoizedProps, a = a.ownerDocument || a;
                  e: switch (n) {
                    case "title":
                      u = a.getElementsByTagName("title")[0], (!u || u[Kn] || u[St] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(n), a.head.insertBefore(
                        u,
                        a.querySelector("head > title")
                      )), oe(u, n, l), u[St] = t, Zt(u), n = u;
                      break t;
                    case "link":
                      var c = uh(
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
                      u = a.createElement(n), oe(u, n, l), a.head.appendChild(u);
                      break;
                    case "meta":
                      if (c = uh(
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
                      u = a.createElement(n), oe(u, n, l), a.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, n));
                  }
                  u[St] = t, Zt(u), n = u;
                }
                t.stateNode = n;
              } else
                ih(
                  a,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = ah(
                a,
                n,
                t.memoizedProps
              );
          else
            u !== n ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, n === null ? ih(
              a,
              t.type,
              t.stateNode
            ) : ah(
              a,
              n,
              t.memoizedProps
            )) : n === null && t.stateNode !== null && Ls(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        xe(e, t), Be(t), n & 512 && ($t || l === null || zl(l, l.return)), l !== null && n & 4 && Ls(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (xe(e, t), Be(t), n & 512 && ($t || l === null || zl(l, l.return)), t.flags & 32) {
          a = t.stateNode;
          try {
            Ie(a, "");
          } catch (L) {
            Et(t, t.return, L);
          }
        }
        n & 4 && t.stateNode != null && (a = t.memoizedProps, Ls(
          t,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (Gs = !0);
        break;
      case 6:
        if (xe(e, t), Be(t), n & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          n = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = n;
          } catch (L) {
            Et(t, t.return, L);
          }
        }
        break;
      case 3:
        if (nc = null, a = gl, gl = ec(e.containerInfo), xe(e, t), gl = a, Be(t), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            tu(e.containerInfo);
          } catch (L) {
            Et(t, t.return, L);
          }
        Gs && (Gs = !1, id(t));
        break;
      case 4:
        n = gl, gl = ec(
          t.stateNode.containerInfo
        ), xe(e, t), Be(t), gl = n;
        break;
      case 12:
        xe(e, t), Be(t);
        break;
      case 31:
        xe(e, t), Be(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, Gi(t, n)));
        break;
      case 13:
        xe(e, t), Be(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Qi = ye()), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, Gi(t, n)));
        break;
      case 22:
        a = t.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null, b = Fl, O = $t;
        if (Fl = b || a, $t = O || h, xe(e, t), $t = O, Fl = b, Be(t), n & 8192)
          t: for (e = t.stateNode, e._visibility = a ? e._visibility & -2 : e._visibility | 1, a && (l === null || h || Fl || $t || oa(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                h = l = e;
                try {
                  if (u = h.stateNode, a)
                    c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    o = h.stateNode;
                    var M = h.memoizedProps.style, S = M != null && M.hasOwnProperty("display") ? M.display : null;
                    o.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (L) {
                  Et(h, h.return, L);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                h = e;
                try {
                  h.stateNode.nodeValue = a ? "" : h.memoizedProps;
                } catch (L) {
                  Et(h, h.return, L);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                h = e;
                try {
                  var E = h.stateNode;
                  a ? Wd(E, !0) : Wd(h.stateNode, !1);
                } catch (L) {
                  Et(h, h.return, L);
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
        n & 4 && (n = t.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, Gi(t, l))));
        break;
      case 19:
        xe(e, t), Be(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, Gi(t, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        xe(e, t), Be(t);
    }
  }
  function Be(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, n = t.return; n !== null; ) {
          if (Fo(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, u = ws(t);
            Yi(t, u, a);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (Ie(c, ""), l.flags &= -33);
            var o = ws(t);
            Yi(t, o, c);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo, b = ws(t);
            Ys(
              t,
              b,
              h
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (O) {
        Et(t, t.return, O);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function id(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        id(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function Pl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        td(t, e.alternate, e), e = e.sibling;
  }
  function oa(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Mn(4, e, e.return), oa(e);
          break;
        case 1:
          zl(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Wo(
            e,
            e.return,
            l
          ), oa(e);
          break;
        case 27:
          Qu(e.stateNode);
        case 26:
        case 5:
          zl(e, e.return), oa(e);
          break;
        case 22:
          e.memoizedState === null && oa(e);
          break;
        case 30:
          oa(e);
          break;
        default:
          oa(e);
      }
      t = t.sibling;
    }
  }
  function tn(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate, a = t, u = e, c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          tn(
            a,
            u,
            l
          ), qu(4, u);
          break;
        case 1:
          if (tn(
            a,
            u,
            l
          ), n = u, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (b) {
              Et(n, n.return, b);
            }
          if (n = u, a = n.updateQueue, a !== null) {
            var o = n.stateNode;
            try {
              var h = a.shared.hiddenCallbacks;
              if (h !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < h.length; a++)
                  jf(h[a], o);
            } catch (b) {
              Et(n, n.return, b);
            }
          }
          l && c & 64 && Jo(u), xu(u, u.return);
          break;
        case 27:
          Io(u);
        case 26:
        case 5:
          tn(
            a,
            u,
            l
          ), l && n === null && c & 4 && $o(u), xu(u, u.return);
          break;
        case 12:
          tn(
            a,
            u,
            l
          );
          break;
        case 31:
          tn(
            a,
            u,
            l
          ), l && c & 4 && nd(a, u);
          break;
        case 13:
          tn(
            a,
            u,
            l
          ), l && c & 4 && ad(a, u);
          break;
        case 22:
          u.memoizedState === null && tn(
            a,
            u,
            l
          ), xu(u, u.return);
          break;
        case 30:
          break;
        default:
          tn(
            a,
            u,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Xs(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Su(l));
  }
  function Qs(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Su(t));
  }
  function pl(t, e, l, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        cd(
          t,
          e,
          l,
          n
        ), e = e.sibling;
  }
  function cd(t, e, l, n) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        pl(
          t,
          e,
          l,
          n
        ), a & 2048 && qu(9, e);
        break;
      case 1:
        pl(
          t,
          e,
          l,
          n
        );
        break;
      case 3:
        pl(
          t,
          e,
          l,
          n
        ), a & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Su(t)));
        break;
      case 12:
        if (a & 2048) {
          pl(
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
            Et(e, e.return, h);
          }
        } else
          pl(
            t,
            e,
            l,
            n
          );
        break;
      case 31:
        pl(
          t,
          e,
          l,
          n
        );
        break;
      case 13:
        pl(
          t,
          e,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, c = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? pl(
          t,
          e,
          l,
          n
        ) : Bu(t, e) : u._visibility & 2 ? pl(
          t,
          e,
          l,
          n
        ) : (u._visibility |= 2, Qa(
          t,
          e,
          l,
          n,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && Xs(c, e);
        break;
      case 24:
        pl(
          t,
          e,
          l,
          n
        ), a & 2048 && Qs(e.alternate, e);
        break;
      default:
        pl(
          t,
          e,
          l,
          n
        );
    }
  }
  function Qa(t, e, l, n, a) {
    for (a = a && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, c = e, o = l, h = n, b = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Qa(
            u,
            c,
            o,
            h,
            a
          ), qu(8, c);
          break;
        case 23:
          break;
        case 22:
          var O = c.stateNode;
          c.memoizedState !== null ? O._visibility & 2 ? Qa(
            u,
            c,
            o,
            h,
            a
          ) : Bu(
            u,
            c
          ) : (O._visibility |= 2, Qa(
            u,
            c,
            o,
            h,
            a
          )), a && b & 2048 && Xs(
            c.alternate,
            c
          );
          break;
        case 24:
          Qa(
            u,
            c,
            o,
            h,
            a
          ), a && b & 2048 && Qs(c.alternate, c);
          break;
        default:
          Qa(
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
  function Bu(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, n = e, a = n.flags;
        switch (n.tag) {
          case 22:
            Bu(l, n), a & 2048 && Xs(
              n.alternate,
              n
            );
            break;
          case 24:
            Bu(l, n), a & 2048 && Qs(n.alternate, n);
            break;
          default:
            Bu(l, n);
        }
        e = e.sibling;
      }
  }
  var ju = 8192;
  function Va(t, e, l) {
    if (t.subtreeFlags & ju)
      for (t = t.child; t !== null; )
        sd(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function sd(t, e, l) {
    switch (t.tag) {
      case 26:
        Va(
          t,
          e,
          l
        ), t.flags & ju && t.memoizedState !== null && Zy(
          l,
          gl,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Va(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var n = gl;
        gl = ec(t.stateNode.containerInfo), Va(
          t,
          e,
          l
        ), gl = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = ju, ju = 16777216, Va(
          t,
          e,
          l
        ), ju = n) : Va(
          t,
          e,
          l
        ));
        break;
      default:
        Va(
          t,
          e,
          l
        );
    }
  }
  function rd(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Hu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          ae = n, od(
            n,
            t
          );
        }
      rd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        fd(t), t = t.sibling;
  }
  function fd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Hu(t), t.flags & 2048 && Mn(9, t, t.return);
        break;
      case 3:
        Hu(t);
        break;
      case 12:
        Hu(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Xi(t)) : Hu(t);
        break;
      default:
        Hu(t);
    }
  }
  function Xi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          ae = n, od(
            n,
            t
          );
        }
      rd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Mn(8, e, e.return), Xi(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Xi(e));
          break;
        default:
          Xi(e);
      }
      t = t.sibling;
    }
  }
  function od(t, e) {
    for (; ae !== null; ) {
      var l = ae;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Mn(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Su(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, ae = n;
      else
        t: for (l = t; ae !== null; ) {
          n = ae;
          var a = n.sibling, u = n.return;
          if (ed(n), n === l) {
            ae = null;
            break t;
          }
          if (a !== null) {
            a.return = u, ae = a;
            break t;
          }
          ae = u;
        }
    }
  }
  var iy = {
    getCacheForType: function(t) {
      var e = re(kt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return re(kt).controller.signal;
    }
  }, cy = typeof WeakMap == "function" ? WeakMap : Map, gt = 0, Rt = null, it = null, st = 0, _t = 0, Ke = null, Cn = !1, Za = !1, Vs = !1, en = 0, Lt = 0, Dn = 0, da = 0, Zs = 0, ke = 0, Ka = 0, Lu = null, je = null, Ks = !1, Qi = 0, dd = 0, Vi = 1 / 0, Zi = null, Un = null, It = 0, qn = null, ka = null, ln = 0, ks = 0, Js = null, hd = null, wu = 0, Ws = null;
  function Je() {
    return (gt & 2) !== 0 && st !== 0 ? st & -st : _.T !== null ? er() : dl();
  }
  function md() {
    if (ke === 0)
      if ((st & 536870912) === 0 || ot) {
        var t = _l;
        _l <<= 1, (_l & 3932160) === 0 && (_l = 262144), ke = t;
      } else ke = 536870912;
    return t = Ve.current, t !== null && (t.flags |= 32), ke;
  }
  function He(t, e, l) {
    (t === Rt && (_t === 2 || _t === 9) || t.cancelPendingCommit !== null) && (Ja(t, 0), xn(
      t,
      st,
      ke,
      !1
    )), Ye(t, l), ((gt & 2) === 0 || t !== Rt) && (t === Rt && ((gt & 2) === 0 && (da |= l), Lt === 4 && xn(
      t,
      st,
      ke,
      !1
    )), Ml(t));
  }
  function yd(t, e, l) {
    if ((gt & 6) !== 0) throw Error(r(327));
    var n = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Vn(t, e), a = n ? fy(t, e) : Fs(t, e, !0), u = n;
    do {
      if (a === 0) {
        Za && !n && xn(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, u && !sy(l)) {
          a = Fs(t, e, !1), u = !1;
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
              a = Lu;
              var h = o.current.memoizedState.isDehydrated;
              if (h && (Ja(o, c).flags |= 256), c = Fs(
                o,
                c,
                !1
              ), c !== 2) {
                if (Vs && !h) {
                  o.errorRecoveryDisabledLanes |= u, da |= u, a = 4;
                  break t;
                }
                u = je, je = a, u !== null && (je === null ? je = u : je.push.apply(
                  je,
                  u
                ));
              }
              a = c;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          Ja(t, 0), xn(t, e, 0, !0);
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
              xn(
                n,
                e,
                ke,
                !Cn
              );
              break t;
            case 2:
              je = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (a = Qi + 300 - ye(), 10 < a)) {
            if (xn(
              n,
              e,
              ke,
              !Cn
            ), Me(n, 0, !0) !== 0) break t;
            ln = e, n.timeoutHandle = Kd(
              vd.bind(
                null,
                n,
                l,
                je,
                Zi,
                Ks,
                e,
                ke,
                da,
                Ka,
                Cn,
                u,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break t;
          }
          vd(
            n,
            l,
            je,
            Zi,
            Ks,
            e,
            ke,
            da,
            Ka,
            Cn,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ml(t);
  }
  function vd(t, e, l, n, a, u, c, o, h, b, O, M, S, E) {
    if (t.timeoutHandle = -1, M = e.subtreeFlags, M & 8192 || (M & 16785408) === 16785408) {
      M = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ml
      }, sd(
        e,
        u,
        M
      );
      var L = (u & 62914560) === u ? Qi - ye() : (u & 4194048) === u ? dd - ye() : 0;
      if (L = Ky(
        M,
        L
      ), L !== null) {
        ln = u, t.cancelPendingCommit = L(
          Td.bind(
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
            M,
            null,
            S,
            E
          )
        ), xn(t, u, c, !b);
        return;
      }
    }
    Td(
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
            if (!Xe(u(), a)) return !1;
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
  function xn(t, e, l, n) {
    e &= ~Zs, e &= ~da, t.suspendedLanes |= e, t.pingedLanes &= ~e, n && (t.warmLanes |= e), n = t.expirationTimes;
    for (var a = e; 0 < a; ) {
      var u = 31 - ee(a), c = 1 << u;
      n[u] = -1, a &= ~c;
    }
    l !== 0 && iu(t, l, e);
  }
  function Ki() {
    return (gt & 6) === 0 ? (Yu(0), !1) : !0;
  }
  function $s() {
    if (it !== null) {
      if (_t === 0)
        var t = it.return;
      else
        t = it, Zl = na = null, ds(t), La = null, Eu = 0, t = it;
      for (; t !== null; )
        ko(t.alternate, t), t = t.return;
      it = null;
    }
  }
  function Ja(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, zy(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), ln = 0, $s(), Rt = t, it = l = Ql(t.current, null), st = e, _t = 0, Ke = null, Cn = !1, Za = Vn(t, e), Vs = !1, Ka = ke = Zs = da = Dn = Lt = 0, je = Lu = null, Ks = !1, (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - ee(n), u = 1 << a;
        e |= t[a], n &= ~u;
      }
    return en = e, hi(), l;
  }
  function gd(t, e) {
    F = null, _.H = Cu, e === Ha || e === _i ? (e = Uf(), _t = 3) : e === ts ? (e = Uf(), _t = 4) : _t = e === zs ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ke = e, it === null && (Lt = 1, Bi(
      t,
      tl(e, t.current)
    ));
  }
  function pd() {
    var t = Ve.current;
    return t === null ? !0 : (st & 4194048) === st ? al === null : (st & 62914560) === st || (st & 536870912) !== 0 ? t === al : !1;
  }
  function bd() {
    var t = _.H;
    return _.H = Cu, t === null ? Cu : t;
  }
  function Sd() {
    var t = _.A;
    return _.A = iy, t;
  }
  function ki() {
    Lt = 4, Cn || (st & 4194048) !== st && Ve.current !== null || (Za = !0), (Dn & 134217727) === 0 && (da & 134217727) === 0 || Rt === null || xn(
      Rt,
      st,
      ke,
      !1
    );
  }
  function Fs(t, e, l) {
    var n = gt;
    gt |= 2;
    var a = bd(), u = Sd();
    (Rt !== t || st !== e) && (Zi = null, Ja(t, e)), e = !1;
    var c = Lt;
    t: do
      try {
        if (_t !== 0 && it !== null) {
          var o = it, h = Ke;
          switch (_t) {
            case 8:
              $s(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ve.current === null && (e = !0);
              var b = _t;
              if (_t = 0, Ke = null, Wa(t, o, h, b), l && Za) {
                c = 0;
                break t;
              }
              break;
            default:
              b = _t, _t = 0, Ke = null, Wa(t, o, h, b);
          }
        }
        ry(), c = Lt;
        break;
      } catch (O) {
        gd(t, O);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Zl = na = null, gt = n, _.H = a, _.A = u, it === null && (Rt = null, st = 0, hi()), c;
  }
  function ry() {
    for (; it !== null; ) _d(it);
  }
  function fy(t, e) {
    var l = gt;
    gt |= 2;
    var n = bd(), a = Sd();
    Rt !== t || st !== e ? (Zi = null, Vi = ye() + 500, Ja(t, e)) : Za = Vn(
      t,
      e
    );
    t: do
      try {
        if (_t !== 0 && it !== null) {
          e = it;
          var u = Ke;
          e: switch (_t) {
            case 1:
              _t = 0, Ke = null, Wa(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (Cf(u)) {
                _t = 0, Ke = null, Ed(e);
                break;
              }
              e = function() {
                _t !== 2 && _t !== 9 || Rt !== t || (_t = 7), Ml(t);
              }, u.then(e, e);
              break t;
            case 3:
              _t = 7;
              break t;
            case 4:
              _t = 5;
              break t;
            case 7:
              Cf(u) ? (_t = 0, Ke = null, Ed(e)) : (_t = 0, Ke = null, Wa(t, e, u, 7));
              break;
            case 5:
              var c = null;
              switch (it.tag) {
                case 26:
                  c = it.memoizedState;
                case 5:
                case 27:
                  var o = it;
                  if (c ? ch(c) : o.stateNode.complete) {
                    _t = 0, Ke = null;
                    var h = o.sibling;
                    if (h !== null) it = h;
                    else {
                      var b = o.return;
                      b !== null ? (it = b, Ji(b)) : it = null;
                    }
                    break e;
                  }
              }
              _t = 0, Ke = null, Wa(t, e, u, 5);
              break;
            case 6:
              _t = 0, Ke = null, Wa(t, e, u, 6);
              break;
            case 8:
              $s(), Lt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        oy();
        break;
      } catch (O) {
        gd(t, O);
      }
    while (!0);
    return Zl = na = null, _.H = n, _.A = a, gt = l, it !== null ? 0 : (Rt = null, st = 0, hi(), Lt);
  }
  function oy() {
    for (; it !== null && !sn(); )
      _d(it);
  }
  function _d(t) {
    var e = Zo(t.alternate, t, en);
    t.memoizedProps = t.pendingProps, e === null ? Ji(t) : it = e;
  }
  function Ed(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = wo(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          st
        );
        break;
      case 11:
        e = wo(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          st
        );
        break;
      case 5:
        ds(e);
      default:
        ko(l, e), e = it = bf(e, en), e = Zo(l, e, en);
    }
    t.memoizedProps = t.pendingProps, e === null ? Ji(t) : it = e;
  }
  function Wa(t, e, l, n) {
    Zl = na = null, ds(e), La = null, Eu = 0;
    var a = e.return;
    try {
      if (Pm(
        t,
        a,
        e,
        l,
        st
      )) {
        Lt = 1, Bi(
          t,
          tl(l, t.current)
        ), it = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw it = a, u;
      Lt = 1, Bi(
        t,
        tl(l, t.current)
      ), it = null;
      return;
    }
    e.flags & 32768 ? (ot || n === 1 ? t = !0 : Za || (st & 536870912) !== 0 ? t = !1 : (Cn = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Ve.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Ad(e, t)) : Ji(e);
  }
  function Ji(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Ad(
          e,
          Cn
        );
        return;
      }
      t = e.return;
      var l = ly(
        e.alternate,
        e,
        en
      );
      if (l !== null) {
        it = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        it = e;
        return;
      }
      it = e = t;
    } while (e !== null);
    Lt === 0 && (Lt = 5);
  }
  function Ad(t, e) {
    do {
      var l = ny(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, it = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        it = t;
        return;
      }
      it = t = l;
    } while (t !== null);
    Lt = 6, it = null;
  }
  function Td(t, e, l, n, a, u, c, o, h) {
    t.cancelPendingCommit = null;
    do
      Wi();
    while (It !== 0);
    if ((gt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (u = e.lanes | e.childLanes, u |= wc, Oc(
        t,
        l,
        u,
        c,
        o,
        h
      ), t === Rt && (it = Rt = null, st = 0), ka = e, qn = t, ln = l, ks = u, Js = a, hd = n, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, yy(rl, function() {
        return Md(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
        n = _.T, _.T = null, a = j.p, j.p = 2, c = gt, gt |= 4;
        try {
          ay(t, e, l);
        } finally {
          gt = c, j.p = a, _.T = n;
        }
      }
      It = 1, Nd(), Od(), Rd();
    }
  }
  function Nd() {
    if (It === 1) {
      It = 0;
      var t = qn, e = ka, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = _.T, _.T = null;
        var n = j.p;
        j.p = 2;
        var a = gt;
        gt |= 4;
        try {
          ud(e, t);
          var u = rr, c = ff(t.containerInfo), o = u.focusedElem, h = u.selectionRange;
          if (c !== o && o && o.ownerDocument && rf(
            o.ownerDocument.documentElement,
            o
          )) {
            if (h !== null && xc(o)) {
              var b = h.start, O = h.end;
              if (O === void 0 && (O = b), "selectionStart" in o)
                o.selectionStart = b, o.selectionEnd = Math.min(
                  O,
                  o.value.length
                );
              else {
                var M = o.ownerDocument || document, S = M && M.defaultView || window;
                if (S.getSelection) {
                  var E = S.getSelection(), L = o.textContent.length, K = Math.min(h.start, L), Ot = h.end === void 0 ? K : Math.min(h.end, L);
                  !E.extend && K > Ot && (c = Ot, Ot = K, K = c);
                  var v = sf(
                    o,
                    K
                  ), y = sf(
                    o,
                    Ot
                  );
                  if (v && y && (E.rangeCount !== 1 || E.anchorNode !== v.node || E.anchorOffset !== v.offset || E.focusNode !== y.node || E.focusOffset !== y.offset)) {
                    var p = M.createRange();
                    p.setStart(v.node, v.offset), E.removeAllRanges(), K > Ot ? (E.addRange(p), E.extend(y.node, y.offset)) : (p.setEnd(y.node, y.offset), E.addRange(p));
                  }
                }
              }
            }
            for (M = [], E = o; E = E.parentNode; )
              E.nodeType === 1 && M.push({
                element: E,
                left: E.scrollLeft,
                top: E.scrollTop
              });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < M.length; o++) {
              var R = M[o];
              R.element.scrollLeft = R.left, R.element.scrollTop = R.top;
            }
          }
          cc = !!sr, rr = sr = null;
        } finally {
          gt = a, j.p = n, _.T = l;
        }
      }
      t.current = e, It = 2;
    }
  }
  function Od() {
    if (It === 2) {
      It = 0;
      var t = qn, e = ka, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = _.T, _.T = null;
        var n = j.p;
        j.p = 2;
        var a = gt;
        gt |= 4;
        try {
          td(t, e.alternate, e);
        } finally {
          gt = a, j.p = n, _.T = l;
        }
      }
      It = 3;
    }
  }
  function Rd() {
    if (It === 4 || It === 3) {
      It = 0, Tc();
      var t = qn, e = ka, l = ln, n = hd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? It = 5 : (It = 0, ka = qn = null, zd(t, t.pendingLanes));
      var a = t.pendingLanes;
      if (a === 0 && (Un = null), fn(l), e = e.stateNode, te && typeof te.onCommitFiberRoot == "function")
        try {
          te.onCommitFiberRoot(
            We,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        e = _.T, a = j.p, j.p = 2, _.T = null;
        try {
          for (var u = t.onRecoverableError, c = 0; c < n.length; c++) {
            var o = n[c];
            u(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          _.T = e, j.p = a;
        }
      }
      (ln & 3) !== 0 && Wi(), Ml(t), a = t.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? t === Ws ? wu++ : (wu = 0, Ws = t) : wu = 0, Yu(0);
    }
  }
  function zd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Su(e)));
  }
  function Wi() {
    return Nd(), Od(), Rd(), Md();
  }
  function Md() {
    if (It !== 5) return !1;
    var t = qn, e = ks;
    ks = 0;
    var l = fn(ln), n = _.T, a = j.p;
    try {
      j.p = 32 > l ? 32 : l, _.T = null, l = Js, Js = null;
      var u = qn, c = ln;
      if (It = 0, ka = qn = null, ln = 0, (gt & 6) !== 0) throw Error(r(331));
      var o = gt;
      if (gt |= 4, fd(u.current), cd(
        u,
        u.current,
        c,
        l
      ), gt = o, Yu(0, !1), te && typeof te.onPostCommitFiberRoot == "function")
        try {
          te.onPostCommitFiberRoot(We, u);
        } catch {
        }
      return !0;
    } finally {
      j.p = a, _.T = n, zd(t, e);
    }
  }
  function Cd(t, e, l) {
    e = tl(l, e), e = Rs(t.stateNode, e, 2), t = On(t, e, 2), t !== null && (Ye(t, 2), Ml(t));
  }
  function Et(t, e, l) {
    if (t.tag === 3)
      Cd(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Cd(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Un === null || !Un.has(n))) {
            t = tl(l, t), l = Do(2), n = On(e, l, 2), n !== null && (Uo(
              l,
              n,
              e,
              t
            ), Ye(n, 2), Ml(n));
            break;
          }
        }
        e = e.return;
      }
  }
  function Is(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new cy();
      var a = /* @__PURE__ */ new Set();
      n.set(e, a);
    } else
      a = n.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(e, a));
    a.has(l) || (Vs = !0, a.add(l), t = dy.bind(null, t, e, l), e.then(t, t));
  }
  function dy(t, e, l) {
    var n = t.pingCache;
    n !== null && n.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Rt === t && (st & l) === l && (Lt === 4 || Lt === 3 && (st & 62914560) === st && 300 > ye() - Qi ? (gt & 2) === 0 && Ja(t, 0) : Zs |= l, Ka === st && (Ka = 0)), Ml(t);
  }
  function Dd(t, e) {
    e === 0 && (e = rn()), t = ta(t, e), t !== null && (Ye(t, e), Ml(t));
  }
  function hy(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), Dd(t, l);
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
    n !== null && n.delete(e), Dd(t, l);
  }
  function yy(t, e) {
    return sl(t, e);
  }
  var $i = null, $a = null, Ps = !1, Fi = !1, tr = !1, Bn = 0;
  function Ml(t) {
    t !== $a && t.next === null && ($a === null ? $i = $a = t : $a = $a.next = t), Fi = !0, Ps || (Ps = !0, gy());
  }
  function Yu(t, e) {
    if (!tr && Fi) {
      tr = !0;
      do
        for (var l = !1, n = $i; n !== null; ) {
          if (t !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var c = n.suspendedLanes, o = n.pingedLanes;
              u = (1 << 31 - ee(42 | t) + 1) - 1, u &= a & ~(c & ~o), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, Bd(n, u));
          } else
            u = st, u = Me(
              n,
              n === Rt ? u : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (u & 3) === 0 || Vn(n, u) || (l = !0, Bd(n, u));
          n = n.next;
        }
      while (l);
      tr = !1;
    }
  }
  function vy() {
    Ud();
  }
  function Ud() {
    Fi = Ps = !1;
    var t = 0;
    Bn !== 0 && Ry() && (t = Bn);
    for (var e = ye(), l = null, n = $i; n !== null; ) {
      var a = n.next, u = qd(n, e);
      u === 0 ? (n.next = null, l === null ? $i = a : l.next = a, a === null && ($a = l)) : (l = n, (t !== 0 || (u & 3) !== 0) && (Fi = !0)), n = a;
    }
    It !== 0 && It !== 5 || Yu(t), Bn !== 0 && (Bn = 0);
  }
  function qd(t, e) {
    for (var l = t.suspendedLanes, n = t.pingedLanes, a = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - ee(u), o = 1 << c, h = a[c];
      h === -1 ? ((o & l) === 0 || (o & n) !== 0) && (a[c] = uu(o, e)) : h <= e && (t.expiredLanes |= o), u &= ~o;
    }
    if (e = Rt, l = st, l = Me(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n = t.callbackNode, l === 0 || t === e && (_t === 2 || _t === 9) || t.cancelPendingCommit !== null)
      return n !== null && n !== null && Qn(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || Vn(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (n !== null && Qn(n), fn(l)) {
        case 2:
        case 8:
          l = li;
          break;
        case 32:
          l = rl;
          break;
        case 268435456:
          l = Bl;
          break;
        default:
          l = rl;
      }
      return n = xd.bind(null, t), l = sl(l, n), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return n !== null && n !== null && Qn(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function xd(t, e) {
    if (It !== 0 && It !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (Wi() && t.callbackNode !== l)
      return null;
    var n = st;
    return n = Me(
      t,
      t === Rt ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n === 0 ? null : (yd(t, n, e), qd(t, ye()), t.callbackNode != null && t.callbackNode === l ? xd.bind(null, t) : null);
  }
  function Bd(t, e) {
    if (Wi()) return null;
    yd(t, e, !0);
  }
  function gy() {
    My(function() {
      (gt & 6) !== 0 ? sl(
        ya,
        vy
      ) : Ud();
    });
  }
  function er() {
    if (Bn === 0) {
      var t = Ba;
      t === 0 && (t = $e, $e <<= 1, ($e & 261888) === 0 && ($e = 256)), Bn = t;
    }
    return Bn;
  }
  function jd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Ta("" + t);
  }
  function Hd(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function py(t, e, l, n, a) {
    if (e === "submit" && l && l.stateNode === a) {
      var u = jd(
        (a[le] || null).action
      ), c = n.submitter;
      c && (e = (e = c[le] || null) ? jd(e.formAction) : c.getAttribute("formAction"), e !== null && (u = e, c = null));
      var o = new Kt(
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
                if (Bn !== 0) {
                  var h = c ? Hd(a, c) : new FormData(a);
                  _s(
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
                typeof u == "function" && (o.preventDefault(), h = c ? Hd(a, c) : new FormData(a), _s(
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
  for (var lr = 0; lr < Lc.length; lr++) {
    var nr = Lc[lr], by = nr.toLowerCase(), Sy = nr[0].toUpperCase() + nr.slice(1);
    vl(
      by,
      "on" + Sy
    );
  }
  vl(hf, "onAnimationEnd"), vl(mf, "onAnimationIteration"), vl(yf, "onAnimationStart"), vl("dblclick", "onDoubleClick"), vl("focusin", "onFocus"), vl("focusout", "onBlur"), vl(jm, "onTransitionRun"), vl(Hm, "onTransitionStart"), vl(Lm, "onTransitionCancel"), vl(vf, "onTransitionEnd"), Ae("onMouseEnter", ["mouseout", "mouseover"]), Ae("onMouseLeave", ["mouseout", "mouseover"]), Ae("onPointerEnter", ["pointerout", "pointerover"]), Ae("onPointerLeave", ["pointerout", "pointerover"]), ge(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ge(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ge("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ge(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ge(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ge(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Gu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), _y = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gu)
  );
  function Ld(t, e) {
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
              di(O);
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
              di(O);
            }
            a.currentTarget = null, u = h;
          }
      }
    }
  }
  function ct(t, e) {
    var l = e[Al];
    l === void 0 && (l = e[Al] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    l.has(n) || (wd(e, t, 2, !1), l.add(n));
  }
  function ar(t, e, l) {
    var n = 0;
    e && (n |= 4), wd(
      l,
      t,
      n,
      e
    );
  }
  var Ii = "_reactListening" + Math.random().toString(36).slice(2);
  function ur(t) {
    if (!t[Ii]) {
      t[Ii] = !0, kn.forEach(function(l) {
        l !== "selectionchange" && (_y.has(l) || ar(l, !1, t), ar(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ii] || (e[Ii] = !0, ar("selectionchange", !1, e));
    }
  }
  function wd(t, e, l, n) {
    switch (mh(e)) {
      case 2:
        var a = Wy;
        break;
      case 8:
        a = $y;
        break;
      default:
        a = Sr;
    }
    l = a.bind(
      null,
      e,
      l,
      t
    ), a = void 0, !du || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = !0), n ? a !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: a
    }) : t.addEventListener(e, l, !0) : a !== void 0 ? t.addEventListener(e, l, {
      passive: a
    }) : t.addEventListener(e, l, !1);
  }
  function ir(t, e, l, n, a) {
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
            if (c = Hl(o), c === null) return;
            if (h = c.tag, h === 5 || h === 6 || h === 26 || h === 27) {
              n = u = c;
              continue t;
            }
            o = o.parentNode;
          }
        }
        n = n.return;
      }
    ri(function() {
      var b = u, O = ou(l), M = [];
      t: {
        var S = gf.get(t);
        if (S !== void 0) {
          var E = Kt, L = t;
          switch (t) {
            case "keypress":
              if (C(l) === 0) break t;
            case "keydown":
            case "keyup":
              E = mm;
              break;
            case "focusin":
              L = "focus", E = Mc;
              break;
            case "focusout":
              L = "blur", E = Mc;
              break;
            case "beforeblur":
            case "afterblur":
              E = Mc;
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
              E = fi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = lm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = gm;
              break;
            case hf:
            case mf:
            case yf:
              E = um;
              break;
            case vf:
              E = bm;
              break;
            case "scroll":
            case "scrollend":
              E = jt;
              break;
            case "wheel":
              E = _m;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = cm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = kr;
              break;
            case "toggle":
            case "beforetoggle":
              E = Am;
          }
          var K = (e & 4) !== 0, Ot = !K && (t === "scroll" || t === "scrollend"), v = K ? S !== null ? S + "Capture" : null : S;
          K = [];
          for (var y = b, p; y !== null; ) {
            var R = y;
            if (p = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || p === null || v === null || (R = bn(y, v), R != null && K.push(
              Xu(y, R, p)
            )), Ot) break;
            y = y.return;
          }
          0 < K.length && (S = new E(
            S,
            L,
            null,
            l,
            O
          ), M.push({ event: S, listeners: K }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (S = t === "mouseover" || t === "pointerover", E = t === "mouseout" || t === "pointerout", S && l !== gn && (L = l.relatedTarget || l.fromElement) && (Hl(L) || L[El]))
            break t;
          if ((E || S) && (S = O.window === O ? O : (S = O.ownerDocument) ? S.defaultView || S.parentWindow : window, E ? (L = l.relatedTarget || l.toElement, E = b, L = L ? Hl(L) : null, L !== null && (Ot = U(L), K = L.tag, L !== Ot || K !== 5 && K !== 27 && K !== 6) && (L = null)) : (E = null, L = b), E !== L)) {
            if (K = fi, R = "onMouseLeave", v = "onMouseEnter", y = "mouse", (t === "pointerout" || t === "pointerover") && (K = kr, R = "onPointerLeave", v = "onPointerEnter", y = "pointer"), Ot = E == null ? S : hn(E), p = L == null ? S : hn(L), S = new K(
              R,
              y + "leave",
              E,
              l,
              O
            ), S.target = Ot, S.relatedTarget = p, R = null, Hl(O) === b && (K = new K(
              v,
              y + "enter",
              L,
              l,
              O
            ), K.target = p, K.relatedTarget = Ot, R = K), Ot = R, E && L)
              e: {
                for (K = Ey, v = E, y = L, p = 0, R = v; R; R = K(R))
                  p++;
                R = 0;
                for (var Z = y; Z; Z = K(Z))
                  R++;
                for (; 0 < p - R; )
                  v = K(v), p--;
                for (; 0 < R - p; )
                  y = K(y), R--;
                for (; p--; ) {
                  if (v === y || y !== null && v === y.alternate) {
                    K = v;
                    break e;
                  }
                  v = K(v), y = K(y);
                }
                K = null;
              }
            else K = null;
            E !== null && Yd(
              M,
              S,
              E,
              K,
              !1
            ), L !== null && Ot !== null && Yd(
              M,
              Ot,
              L,
              K,
              !0
            );
          }
        }
        t: {
          if (S = b ? hn(b) : window, E = S.nodeName && S.nodeName.toLowerCase(), E === "select" || E === "input" && S.type === "file")
            var yt = ef;
          else if (Pr(S))
            if (lf)
              yt = qm;
            else {
              yt = Dm;
              var X = Cm;
            }
          else
            E = S.nodeName, !E || E.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? b && fu(b.elementType) && (yt = ef) : yt = Um;
          if (yt && (yt = yt(t, b))) {
            tf(
              M,
              yt,
              l,
              O
            );
            break t;
          }
          X && X(t, S, b), t === "focusout" && b && S.type === "number" && b.memoizedProps.value != null && Gl(S, "number", S.value);
        }
        switch (X = b ? hn(b) : window, t) {
          case "focusin":
            (Pr(X) || X.contentEditable === "true") && (Ra = X, Bc = b, gu = null);
            break;
          case "focusout":
            gu = Bc = Ra = null;
            break;
          case "mousedown":
            jc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            jc = !1, of(M, l, O);
            break;
          case "selectionchange":
            if (Bm) break;
          case "keydown":
          case "keyup":
            of(M, l, O);
        }
        var P;
        if (Dc)
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
          Oa ? Fr(t, l) && (rt = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (rt = "onCompositionStart");
        rt && (Jr && l.locale !== "ko" && (Oa || rt !== "onCompositionStart" ? rt === "onCompositionEnd" && Oa && (P = A()) : (Nl = O, Na = "value" in Nl ? Nl.value : Nl.textContent, Oa = !0)), X = Pi(b, rt), 0 < X.length && (rt = new Kr(
          rt,
          t,
          null,
          l,
          O
        ), M.push({ event: rt, listeners: X }), P ? rt.data = P : (P = Ir(l), P !== null && (rt.data = P)))), (P = Nm ? Om(t, l) : Rm(t, l)) && (rt = Pi(b, "onBeforeInput"), 0 < rt.length && (X = new Kr(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          O
        ), M.push({
          event: X,
          listeners: rt
        }), X.data = P)), py(
          M,
          t,
          b,
          l,
          O
        );
      }
      Ld(M, e);
    });
  }
  function Xu(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function Pi(t, e) {
    for (var l = e + "Capture", n = []; t !== null; ) {
      var a = t, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = bn(t, l), a != null && n.unshift(
        Xu(t, a, u)
      ), a = bn(t, e), a != null && n.push(
        Xu(t, a, u)
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
  function Yd(t, e, l, n, a) {
    for (var u = e._reactName, c = []; l !== null && l !== n; ) {
      var o = l, h = o.alternate, b = o.stateNode;
      if (o = o.tag, h !== null && h === n) break;
      o !== 5 && o !== 26 && o !== 27 || b === null || (h = b, a ? (b = bn(l, u), b != null && c.unshift(
        Xu(l, b, h)
      )) : a || (b = bn(l, u), b != null && c.push(
        Xu(l, b, h)
      ))), l = l.return;
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var Ay = /\r\n?/g, Ty = /\u0000|\uFFFD/g;
  function Gd(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ay, `
`).replace(Ty, "");
  }
  function Xd(t, e) {
    return e = Gd(e), Gd(t) === e;
  }
  function Nt(t, e, l, n, a, u) {
    switch (l) {
      case "children":
        typeof n == "string" ? e === "body" || e === "textarea" && n === "" || Ie(t, n) : (typeof n == "number" || typeof n == "bigint") && e !== "body" && Ie(t, "" + n);
        break;
      case "className":
        hl(t, "class", n);
        break;
      case "tabIndex":
        hl(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        hl(t, l, n);
        break;
      case "style":
        ci(t, n, u);
        break;
      case "data":
        if (e !== "object") {
          hl(t, "data", n);
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
        n = Ta("" + n), t.setAttribute(l, n);
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
        n = Ta("" + n), t.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (t.onclick = ml);
        break;
      case "onScroll":
        n != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        n != null && ct("scrollend", t);
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
        l = Ta("" + n), t.setAttributeNS(
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
        ct("beforetoggle", t), ct("toggle", t), mn(t, "popover", n);
        break;
      case "xlinkActuate":
        De(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        De(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        De(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        De(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        De(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        De(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        De(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        De(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        De(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        mn(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Rc.get(l) || l, mn(t, l, n));
    }
  }
  function cr(t, e, l, n, a, u) {
    switch (l) {
      case "style":
        ci(t, n, u);
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
        typeof n == "string" ? Ie(t, n) : (typeof n == "number" || typeof n == "bigint") && Ie(t, "" + n);
        break;
      case "onScroll":
        n != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        n != null && ct("scrollend", t);
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
        if (!Ce.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), e = l.slice(2, a ? l.length - 7 : void 0), u = t[le] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, a), typeof n == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, n, a);
              break t;
            }
            l in t ? t[l] = n : n === !0 ? t.setAttribute(l, "") : mn(t, l, n);
          }
    }
  }
  function oe(t, e, l) {
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
        ct("error", t), ct("load", t);
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
        ct("invalid", t);
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
        yn(
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
        ct("invalid", t), n = c = u = null;
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
        e = u, l = c, t.multiple = !!n, e != null ? Ge(t, !!n, e, !1) : l != null && Ge(t, !!n, l, !0);
        return;
      case "textarea":
        ct("invalid", t), u = a = n = null;
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
        vn(t, n, a, u);
        return;
      case "option":
        for (h in l)
          l.hasOwnProperty(h) && (n = l[h], n != null) && (h === "selected" ? t.selected = n && typeof n != "function" && typeof n != "symbol" : Nt(t, e, h, n, l, null));
        return;
      case "dialog":
        ct("beforetoggle", t), ct("toggle", t), ct("cancel", t), ct("close", t);
        break;
      case "iframe":
      case "object":
        ct("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Gu.length; n++)
          ct(Gu[n], t);
        break;
      case "image":
        ct("error", t), ct("load", t);
        break;
      case "details":
        ct("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ct("error", t), ct("load", t);
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
        if (fu(e)) {
          for (O in l)
            l.hasOwnProperty(O) && (n = l[O], n !== void 0 && cr(
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
        for (E in l) {
          var M = l[E];
          if (l.hasOwnProperty(E) && M != null)
            switch (E) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = M;
              default:
                n.hasOwnProperty(E) || Nt(t, e, E, null, n, M);
            }
        }
        for (var S in n) {
          var E = n[S];
          if (M = l[S], n.hasOwnProperty(S) && (E != null || M != null))
            switch (S) {
              case "type":
                u = E;
                break;
              case "name":
                a = E;
                break;
              case "checked":
                b = E;
                break;
              case "defaultChecked":
                O = E;
                break;
              case "value":
                c = E;
                break;
              case "defaultValue":
                o = E;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null)
                  throw Error(r(137, e));
                break;
              default:
                E !== M && Nt(
                  t,
                  e,
                  S,
                  E,
                  n,
                  M
                );
            }
        }
        Ea(
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
        E = c = o = S = null;
        for (u in l)
          if (h = l[u], l.hasOwnProperty(u) && h != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                E = h;
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
        e = o, l = c, n = E, S != null ? Ge(t, !!l, S, !1) : !!n != !!l && (e != null ? Ge(t, !!l, e, !0) : Ge(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        E = S = null;
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
                E = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== u && Nt(t, e, c, a, n, u);
            }
        ru(t, S, E);
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
          S = n[h], E = l[h], n.hasOwnProperty(h) && S !== E && (S != null || E != null) && (h === "selected" ? t.selected = S && typeof S != "function" && typeof S != "symbol" : Nt(
            t,
            e,
            h,
            S,
            n,
            E
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
          if (S = n[b], E = l[b], n.hasOwnProperty(b) && S !== E && (S != null || E != null))
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
                  E
                );
            }
        return;
      default:
        if (fu(e)) {
          for (var Ot in l)
            S = l[Ot], l.hasOwnProperty(Ot) && S !== void 0 && !n.hasOwnProperty(Ot) && cr(
              t,
              e,
              Ot,
              void 0,
              n,
              S
            );
          for (O in n)
            S = n[O], E = l[O], !n.hasOwnProperty(O) || S === E || S === void 0 && E === void 0 || cr(
              t,
              e,
              O,
              S,
              n,
              E
            );
          return;
        }
    }
    for (var v in l)
      S = l[v], l.hasOwnProperty(v) && S != null && !n.hasOwnProperty(v) && Nt(t, e, v, null, n, S);
    for (M in n)
      S = n[M], E = l[M], !n.hasOwnProperty(M) || S === E || S == null && E == null || Nt(t, e, M, S, n, E);
  }
  function Qd(t) {
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
        if (u && o && Qd(c)) {
          for (c = 0, o = a.responseEnd, n += 1; n < l.length; n++) {
            var h = l[n], b = h.startTime;
            if (b > o) break;
            var O = h.transferSize, M = h.initiatorType;
            O && Qd(M) && (h = h.responseEnd, c += O * (h < o ? 1 : (o - b) / (h - b)));
          }
          if (--n, e += 8 * (u + c) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var sr = null, rr = null;
  function tc(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Vd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Zd(t, e) {
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
  function fr(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var or = null;
  function Ry() {
    var t = window.event;
    return t && t.type === "popstate" ? t === or ? !1 : (or = t, !0) : (or = null, !1);
  }
  var Kd = typeof setTimeout == "function" ? setTimeout : void 0, zy = typeof clearTimeout == "function" ? clearTimeout : void 0, kd = typeof Promise == "function" ? Promise : void 0, My = typeof queueMicrotask == "function" ? queueMicrotask : typeof kd < "u" ? function(t) {
    return kd.resolve(null).then(t).catch(Cy);
  } : Kd;
  function Cy(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function jn(t) {
    return t === "head";
  }
  function Jd(t, e) {
    var l = e, n = 0;
    do {
      var a = l.nextSibling;
      if (t.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            t.removeChild(a), tu(e);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          Qu(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, Qu(l);
          for (var u = l.firstChild; u; ) {
            var c = u.nextSibling, o = u.nodeName;
            u[Kn] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = c;
          }
        } else
          l === "body" && Qu(t.ownerDocument.body);
      l = a;
    } while (l);
    tu(e);
  }
  function Wd(t, e) {
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
  function dr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          dr(l), dn(l);
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
        if (!t[Kn])
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
      if (t = ul(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Uy(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = ul(t.nextSibling), t === null)) return null;
    return t;
  }
  function $d(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = ul(t.nextSibling), t === null)) return null;
    return t;
  }
  function hr(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function mr(t) {
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
  function ul(t) {
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
  var yr = null;
  function Fd(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return ul(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Id(t) {
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
  function Pd(t, e, l) {
    switch (e = tc(l), t) {
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
  function Qu(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    dn(t);
  }
  var il = /* @__PURE__ */ new Map(), th = /* @__PURE__ */ new Set();
  function ec(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var nn = j.d;
  j.d = {
    f: xy,
    r: By,
    D: jy,
    C: Hy,
    L: Ly,
    m: wy,
    X: Gy,
    S: Yy,
    M: Xy
  };
  function xy() {
    var t = nn.f(), e = Ki();
    return t || e;
  }
  function By(t) {
    var e = Ll(t);
    e !== null && e.tag === 5 && e.type === "form" ? go(e) : nn.r(t);
  }
  var Fa = typeof document > "u" ? null : document;
  function eh(t, e, l) {
    var n = Fa;
    if (n && typeof e == "string" && e) {
      var a = Te(e);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), th.has(a) || (th.add(a), t = { rel: t, crossOrigin: l, href: e }, n.querySelector(a) === null && (e = n.createElement("link"), oe(e, "link", t), Zt(e), n.head.appendChild(e)));
    }
  }
  function jy(t) {
    nn.D(t), eh("dns-prefetch", t, null);
  }
  function Hy(t, e) {
    nn.C(t, e), eh("preconnect", t, e);
  }
  function Ly(t, e, l) {
    nn.L(t, e, l);
    var n = Fa;
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
          u = Ia(t);
          break;
        case "script":
          u = Pa(t);
      }
      il.has(u) || (t = G(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), il.set(u, t), n.querySelector(a) !== null || e === "style" && n.querySelector(Vu(u)) || e === "script" && n.querySelector(Zu(u)) || (e = n.createElement("link"), oe(e, "link", t), Zt(e), n.head.appendChild(e)));
    }
  }
  function wy(t, e) {
    nn.m(t, e);
    var l = Fa;
    if (l && t) {
      var n = e && typeof e.as == "string" ? e.as : "script", a = 'link[rel="modulepreload"][as="' + Te(n) + '"][href="' + Te(t) + '"]', u = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Pa(t);
      }
      if (!il.has(u) && (t = G({ rel: "modulepreload", href: t }, e), il.set(u, t), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Zu(u)))
              return;
        }
        n = l.createElement("link"), oe(n, "link", t), Zt(n), l.head.appendChild(n);
      }
    }
  }
  function Yy(t, e, l) {
    nn.S(t, e, l);
    var n = Fa;
    if (n && t) {
      var a = wl(n).hoistableStyles, u = Ia(t);
      e = e || "default";
      var c = a.get(u);
      if (!c) {
        var o = { loading: 0, preload: null };
        if (c = n.querySelector(
          Vu(u)
        ))
          o.loading = 5;
        else {
          t = G(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = il.get(u)) && vr(t, l);
          var h = c = n.createElement("link");
          Zt(h), oe(h, "link", t), h._p = new Promise(function(b, O) {
            h.onload = b, h.onerror = O;
          }), h.addEventListener("load", function() {
            o.loading |= 1;
          }), h.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, lc(c, e, n);
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
    nn.X(t, e);
    var l = Fa;
    if (l && t) {
      var n = wl(l).hoistableScripts, a = Pa(t), u = n.get(a);
      u || (u = l.querySelector(Zu(a)), u || (t = G({ src: t, async: !0 }, e), (e = il.get(a)) && gr(t, e), u = l.createElement("script"), Zt(u), oe(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Xy(t, e) {
    nn.M(t, e);
    var l = Fa;
    if (l && t) {
      var n = wl(l).hoistableScripts, a = Pa(t), u = n.get(a);
      u || (u = l.querySelector(Zu(a)), u || (t = G({ src: t, async: !0, type: "module" }, e), (e = il.get(a)) && gr(t, e), u = l.createElement("script"), Zt(u), oe(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function lh(t, e, l, n) {
    var a = (a = lt.current) ? ec(a) : null;
    if (!a) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Ia(l.href), l = wl(
          a
        ).hoistableStyles, n = l.get(e), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = Ia(l.href);
          var u = wl(
            a
          ).hoistableStyles, c = u.get(t);
          if (c || (a = a.ownerDocument || a, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, c), (u = a.querySelector(
            Vu(t)
          )) && !u._p && (c.instance = u, c.state.loading = 5), il.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, il.set(t, l), u || Qy(
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
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Pa(l), l = wl(
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
  function Ia(t) {
    return 'href="' + Te(t) + '"';
  }
  function Vu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function nh(t) {
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
    }), oe(e, "link", l), Zt(e), t.head.appendChild(e));
  }
  function Pa(t) {
    return '[src="' + Te(t) + '"]';
  }
  function Zu(t) {
    return "script[async]" + t;
  }
  function ah(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var n = t.querySelector(
            'style[data-href~="' + Te(l.href) + '"]'
          );
          if (n)
            return e.instance = n, Zt(n), n;
          var a = G({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (t.ownerDocument || t).createElement(
            "style"
          ), Zt(n), oe(n, "style", a), lc(n, l.precedence, t), e.instance = n;
        case "stylesheet":
          a = Ia(l.href);
          var u = t.querySelector(
            Vu(a)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, Zt(u), u;
          n = nh(l), (a = il.get(a)) && vr(n, a), u = (t.ownerDocument || t).createElement("link"), Zt(u);
          var c = u;
          return c._p = new Promise(function(o, h) {
            c.onload = o, c.onerror = h;
          }), oe(u, "link", n), e.state.loading |= 4, lc(u, l.precedence, t), e.instance = u;
        case "script":
          return u = Pa(l.src), (a = t.querySelector(
            Zu(u)
          )) ? (e.instance = a, Zt(a), a) : (n = l, (a = il.get(u)) && (n = G({}, l), gr(n, a)), t = t.ownerDocument || t, a = t.createElement("script"), Zt(a), oe(a, "link", n), t.head.appendChild(a), e.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (n = e.instance, e.state.loading |= 4, lc(n, l.precedence, t));
    return e.instance;
  }
  function lc(t, e, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, u = a, c = 0; c < n.length; c++) {
      var o = n[c];
      if (o.dataset.precedence === e) u = o;
      else if (u !== a) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function vr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function gr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var nc = null;
  function uh(t, e, l) {
    if (nc === null) {
      var n = /* @__PURE__ */ new Map(), a = nc = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = nc, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(t)) return n;
    for (n.set(t, null), l = l.getElementsByTagName(t), a = 0; a < l.length; a++) {
      var u = l[a];
      if (!(u[Kn] || u[St] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(e) || "";
        c = t + c;
        var o = n.get(c);
        o ? o.push(u) : n.set(c, [u]);
      }
    }
    return n;
  }
  function ih(t, e, l) {
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
  function ch(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Zy(t, e, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = Ia(n.href), u = e.querySelector(
          Vu(a)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = ac.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Zt(u);
          return;
        }
        u = e.ownerDocument || e, n = nh(n), (a = il.get(a)) && vr(n, a), u = u.createElement("link"), Zt(u);
        var c = u;
        c._p = new Promise(function(o, h) {
          c.onload = o, c.onerror = h;
        }), oe(u, "link", n), l.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = ac.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var pr = 0;
  function Ky(t, e) {
    return t.stylesheets && t.count === 0 && ic(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (t.stylesheets && ic(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && pr === 0 && (pr = 62500 * Oy());
      var a = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && ic(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > pr ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function ac() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ic(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var uc = null;
  function ic(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, uc = /* @__PURE__ */ new Map(), e.forEach(ky, t), uc = null, ac.call(t));
  }
  function ky(t, e) {
    if (!(e.state.loading & 4)) {
      var l = uc.get(t);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), uc.set(t, l);
        for (var a = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < a.length; u++) {
          var c = a[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), n = c);
        }
        n && l.set(null, n);
      }
      a = e.instance, c = a.getAttribute("data-precedence"), u = l.get(c) || n, u === n && l.set(null, a), l.set(c, a), this.count++, n = ac.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), u ? u.parentNode.insertBefore(a, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Ku = {
    $$typeof: Bt,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0
  };
  function Jy(t, e, l, n, a, u, c, o, h) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ol(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ol(0), this.hiddenUpdates = ol(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function sh(t, e, l, n, a, u, c, o, h, b, O, M) {
    return t = new Jy(
      t,
      e,
      l,
      c,
      h,
      b,
      O,
      M,
      o
    ), e = 1, u === !0 && (e |= 24), u = Qe(3, null, null, e), t.current = u, u.stateNode = t, e = Fc(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: e
    }, es(u), t;
  }
  function rh(t) {
    return t ? (t = Ca, t) : Ca;
  }
  function fh(t, e, l, n, a, u) {
    a = rh(a), n.context === null ? n.context = a : n.pendingContext = a, n = Nn(e), n.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (n.callback = u), l = On(t, n, e), l !== null && (He(l, t, e), Tu(l, t, e));
  }
  function oh(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function br(t, e) {
    oh(t, e), (t = t.alternate) && oh(t, e);
  }
  function dh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ta(t, 67108864);
      e !== null && He(e, t, 67108864), br(t, 67108864);
    }
  }
  function hh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Je();
      e = Ee(e);
      var l = ta(t, e);
      l !== null && He(l, t, e), br(t, e);
    }
  }
  var cc = !0;
  function Wy(t, e, l, n) {
    var a = _.T;
    _.T = null;
    var u = j.p;
    try {
      j.p = 2, Sr(t, e, l, n);
    } finally {
      j.p = u, _.T = a;
    }
  }
  function $y(t, e, l, n) {
    var a = _.T;
    _.T = null;
    var u = j.p;
    try {
      j.p = 8, Sr(t, e, l, n);
    } finally {
      j.p = u, _.T = a;
    }
  }
  function Sr(t, e, l, n) {
    if (cc) {
      var a = _r(n);
      if (a === null)
        ir(
          t,
          e,
          n,
          sc,
          l
        ), yh(t, n);
      else if (Iy(
        a,
        t,
        e,
        l,
        n
      ))
        n.stopPropagation();
      else if (yh(t, n), e & 4 && -1 < Fy.indexOf(t)) {
        for (; a !== null; ) {
          var u = Ll(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = fl(u.pendingLanes);
                  if (c !== 0) {
                    var o = u;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; c; ) {
                      var h = 1 << 31 - ee(c);
                      o.entanglements[1] |= h, c &= ~h;
                    }
                    Ml(u), (gt & 6) === 0 && (Vi = ye() + 500, Yu(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = ta(u, 2), o !== null && He(o, u, 2), Ki(), br(u, 2);
            }
          if (u = _r(n), u === null && ir(
            t,
            e,
            n,
            sc,
            l
          ), u === a) break;
          a = u;
        }
        a !== null && n.stopPropagation();
      } else
        ir(
          t,
          e,
          n,
          null,
          l
        );
    }
  }
  function _r(t) {
    return t = ou(t), Er(t);
  }
  var sc = null;
  function Er(t) {
    if (sc = null, t = Hl(t), t !== null) {
      var e = U(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = B(e), t !== null) return t;
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
    return sc = t, null;
  }
  function mh(t) {
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
        switch (ht()) {
          case ya:
            return 2;
          case li:
            return 8;
          case rl:
          case _e:
            return 32;
          case Bl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ar = !1, Hn = null, Ln = null, wn = null, ku = /* @__PURE__ */ new Map(), Ju = /* @__PURE__ */ new Map(), Yn = [], Fy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function yh(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Hn = null;
        break;
      case "dragenter":
      case "dragleave":
        Ln = null;
        break;
      case "mouseover":
      case "mouseout":
        wn = null;
        break;
      case "pointerover":
      case "pointerout":
        ku.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ju.delete(e.pointerId);
    }
  }
  function Wu(t, e, l, n, a, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: u,
      targetContainers: [a]
    }, e !== null && (e = Ll(e), e !== null && dh(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
  }
  function Iy(t, e, l, n, a) {
    switch (e) {
      case "focusin":
        return Hn = Wu(
          Hn,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return Ln = Wu(
          Ln,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return wn = Wu(
          wn,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var u = a.pointerId;
        return ku.set(
          u,
          Wu(
            ku.get(u) || null,
            t,
            e,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return u = a.pointerId, Ju.set(
          u,
          Wu(
            Ju.get(u) || null,
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
  function vh(t) {
    var e = Hl(t.target);
    if (e !== null) {
      var l = U(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = B(l), e !== null) {
            t.blockedOn = e, ba(t.priority, function() {
              hh(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = Y(l), e !== null) {
            t.blockedOn = e, ba(t.priority, function() {
              hh(l);
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
  function rc(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = _r(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        gn = n, l.target.dispatchEvent(n), gn = null;
      } else
        return e = Ll(l), e !== null && dh(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function gh(t, e, l) {
    rc(t) && l.delete(e);
  }
  function Py() {
    Ar = !1, Hn !== null && rc(Hn) && (Hn = null), Ln !== null && rc(Ln) && (Ln = null), wn !== null && rc(wn) && (wn = null), ku.forEach(gh), Ju.forEach(gh);
  }
  function fc(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Ar || (Ar = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      Py
    )));
  }
  var oc = null;
  function ph(t) {
    oc !== t && (oc = t, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        oc === t && (oc = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], n = t[e + 1], a = t[e + 2];
          if (typeof n != "function") {
            if (Er(n || l) === null)
              continue;
            break;
          }
          var u = Ll(l);
          u !== null && (t.splice(e, 3), e -= 3, _s(
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
  function tu(t) {
    function e(h) {
      return fc(h, t);
    }
    Hn !== null && fc(Hn, t), Ln !== null && fc(Ln, t), wn !== null && fc(wn, t), ku.forEach(e), Ju.forEach(e);
    for (var l = 0; l < Yn.length; l++) {
      var n = Yn[l];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < Yn.length && (l = Yn[0], l.blockedOn === null); )
      vh(l), l.blockedOn === null && Yn.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], u = l[n + 1], c = a[le] || null;
        if (typeof u == "function")
          c || ph(l);
        else if (c) {
          var o = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, c = u[le] || null)
              o = c.formAction;
            else if (Er(a) !== null) continue;
          } else o = c.action;
          typeof o == "function" ? l[n + 1] = o : (l.splice(n, 3), n -= 3), ph(l);
        }
      }
  }
  function bh() {
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
  function Tr(t) {
    this._internalRoot = t;
  }
  dc.prototype.render = Tr.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var l = e.current, n = Je();
    fh(l, n, t, e, null, null);
  }, dc.prototype.unmount = Tr.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      fh(t.current, 2, null, t, null, null), Ki(), e[El] = null;
    }
  };
  function dc(t) {
    this._internalRoot = t;
  }
  dc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = dl();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Yn.length && e !== 0 && e < Yn[l].priority; l++) ;
      Yn.splice(l, 0, t), l === 0 && vh(t);
    }
  };
  var Sh = i.version;
  if (Sh !== "19.2.4")
    throw Error(
      r(
        527,
        Sh,
        "19.2.4"
      )
    );
  j.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = z(e), t = t !== null ? J(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var t0 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var hc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!hc.isDisabled && hc.supportsFiber)
      try {
        We = hc.inject(
          t0
        ), te = hc;
      } catch {
      }
  }
  return Fu.createRoot = function(t, e) {
    if (!g(t)) throw Error(r(299));
    var l = !1, n = "", a = Ro, u = zo, c = Mo;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), e = sh(
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
      bh
    ), t[El] = e.current, ur(t), new Tr(e);
  }, Fu.hydrateRoot = function(t, e, l) {
    if (!g(t)) throw Error(r(299));
    var n = !1, a = "", u = Ro, c = zo, o = Mo, h = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (o = l.onRecoverableError), l.formState !== void 0 && (h = l.formState)), e = sh(
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
      bh
    ), e.context = rh(null), l = e.current, n = Je(), n = Ee(n), a = Nn(n), a.callback = null, On(l, a, n), l = n, e.current.lanes = l, Ye(e, l), Ml(e), t[El] = e.current, ur(t), new dc(e);
  }, Fu.version = "19.2.4", Fu;
}
var Ch;
function f0() {
  if (Ch) return Rr.exports;
  Ch = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (i) {
        console.error(i);
      }
  }
  return f(), Rr.exports = r0(), Rr.exports;
}
var o0 = f0();
const d0 = "/api";
function Gh() {
  return window.localStorage.getItem("token");
}
function Dh() {
  window.location.replace("/login.html");
}
async function ha(f, i = {}) {
  const s = Gh(), r = {
    "Content-Type": "application/json",
    ...s ? { Authorization: `Bearer ${s}` } : {},
    ...i.headers || {}
  }, g = await fetch(`${d0}${f}`, {
    ...i,
    headers: r
  }), U = await g.text();
  let B = {};
  if (U)
    try {
      B = JSON.parse(U);
    } catch {
      B = { message: U };
    }
  if (!g.ok) {
    const Y = B.error || B.message || "Request failed";
    throw new Error(Y);
  }
  return B;
}
const Dl = /* @__PURE__ */ Object.create(null);
Dl.open = "0";
Dl.close = "1";
Dl.ping = "2";
Dl.pong = "3";
Dl.message = "4";
Dl.upgrade = "5";
Dl.noop = "6";
const pc = /* @__PURE__ */ Object.create(null);
Object.keys(Dl).forEach((f) => {
  pc[Dl[f]] = f;
});
const xr = { type: "error", data: "parser error" }, Xh = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Qh = typeof ArrayBuffer == "function", Vh = (f) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(f) : f && f.buffer instanceof ArrayBuffer, Gr = ({ type: f, data: i }, s, r) => Xh && i instanceof Blob ? s ? r(i) : Uh(i, r) : Qh && (i instanceof ArrayBuffer || Vh(i)) ? s ? r(i) : Uh(new Blob([i]), r) : r(Dl[f] + (i || "")), Uh = (f, i) => {
  const s = new FileReader();
  return s.onload = function() {
    const r = s.result.split(",")[1];
    i("b" + (r || ""));
  }, s.readAsDataURL(f);
};
function qh(f) {
  return f instanceof Uint8Array ? f : f instanceof ArrayBuffer ? new Uint8Array(f) : new Uint8Array(f.buffer, f.byteOffset, f.byteLength);
}
let Dr;
function h0(f, i) {
  if (Xh && f.data instanceof Blob)
    return f.data.arrayBuffer().then(qh).then(i);
  if (Qh && (f.data instanceof ArrayBuffer || Vh(f.data)))
    return i(qh(f.data));
  Gr(f, !1, (s) => {
    Dr || (Dr = new TextEncoder()), i(Dr.encode(s));
  });
}
const xh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ti = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let f = 0; f < xh.length; f++)
  ti[xh.charCodeAt(f)] = f;
const m0 = (f) => {
  let i = f.length * 0.75, s = f.length, r, g = 0, U, B, Y, q;
  f[f.length - 1] === "=" && (i--, f[f.length - 2] === "=" && i--);
  const z = new ArrayBuffer(i), J = new Uint8Array(z);
  for (r = 0; r < s; r += 4)
    U = ti[f.charCodeAt(r)], B = ti[f.charCodeAt(r + 1)], Y = ti[f.charCodeAt(r + 2)], q = ti[f.charCodeAt(r + 3)], J[g++] = U << 2 | B >> 4, J[g++] = (B & 15) << 4 | Y >> 2, J[g++] = (Y & 3) << 6 | q & 63;
  return z;
}, y0 = typeof ArrayBuffer == "function", Xr = (f, i) => {
  if (typeof f != "string")
    return {
      type: "message",
      data: Zh(f, i)
    };
  const s = f.charAt(0);
  return s === "b" ? {
    type: "message",
    data: v0(f.substring(1), i)
  } : pc[s] ? f.length > 1 ? {
    type: pc[s],
    data: f.substring(1)
  } : {
    type: pc[s]
  } : xr;
}, v0 = (f, i) => {
  if (y0) {
    const s = m0(f);
    return Zh(s, i);
  } else
    return { base64: !0, data: f };
}, Zh = (f, i) => i === "blob" ? f instanceof Blob ? f : new Blob([f]) : f instanceof ArrayBuffer ? f : f.buffer, Kh = "", g0 = (f, i) => {
  const s = f.length, r = new Array(s);
  let g = 0;
  f.forEach((U, B) => {
    Gr(U, !1, (Y) => {
      r[B] = Y, ++g === s && i(r.join(Kh));
    });
  });
}, p0 = (f, i) => {
  const s = f.split(Kh), r = [];
  for (let g = 0; g < s.length; g++) {
    const U = Xr(s[g], i);
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
let Ur;
function mc(f) {
  return f.reduce((i, s) => i + s.length, 0);
}
function yc(f, i) {
  if (f[0].length === i)
    return f.shift();
  const s = new Uint8Array(i);
  let r = 0;
  for (let g = 0; g < i; g++)
    s[g] = f[0][r++], r === f[0].length && (f.shift(), r = 0);
  return f.length && r < f[0].length && (f[0] = f[0].slice(r)), s;
}
function S0(f, i) {
  Ur || (Ur = new TextDecoder());
  const s = [];
  let r = 0, g = -1, U = !1;
  return new TransformStream({
    transform(B, Y) {
      for (s.push(B); ; ) {
        if (r === 0) {
          if (mc(s) < 1)
            break;
          const q = yc(s, 1);
          U = (q[0] & 128) === 128, g = q[0] & 127, g < 126 ? r = 3 : g === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (mc(s) < 2)
            break;
          const q = yc(s, 2);
          g = new DataView(q.buffer, q.byteOffset, q.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (mc(s) < 8)
            break;
          const q = yc(s, 8), z = new DataView(q.buffer, q.byteOffset, q.length), J = z.getUint32(0);
          if (J > Math.pow(2, 21) - 1) {
            Y.enqueue(xr);
            break;
          }
          g = J * Math.pow(2, 32) + z.getUint32(4), r = 3;
        } else {
          if (mc(s) < g)
            break;
          const q = yc(s, g);
          Y.enqueue(Xr(U ? q : Ur.decode(q), i)), r = 0;
        }
        if (g === 0 || g > f) {
          Y.enqueue(xr);
          break;
        }
      }
    }
  });
}
const kh = 4;
function Ft(f) {
  if (f) return _0(f);
}
function _0(f) {
  for (var i in Ft.prototype)
    f[i] = Ft.prototype[i];
  return f;
}
Ft.prototype.on = Ft.prototype.addEventListener = function(f, i) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + f] = this._callbacks["$" + f] || []).push(i), this;
};
Ft.prototype.once = function(f, i) {
  function s() {
    this.off(f, s), i.apply(this, arguments);
  }
  return s.fn = i, this.on(f, s), this;
};
Ft.prototype.off = Ft.prototype.removeListener = Ft.prototype.removeAllListeners = Ft.prototype.removeEventListener = function(f, i) {
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
Ft.prototype.emit = function(f) {
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
Ft.prototype.emitReserved = Ft.prototype.emit;
Ft.prototype.listeners = function(f) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + f] || [];
};
Ft.prototype.hasListeners = function(f) {
  return !!this.listeners(f).length;
};
const Ec = typeof Promise == "function" && typeof Promise.resolve == "function" ? (i) => Promise.resolve().then(i) : (i, s) => s(i, 0), cl = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), E0 = "arraybuffer";
function Jh(f, ...i) {
  return i.reduce((s, r) => (f.hasOwnProperty(r) && (s[r] = f[r]), s), {});
}
const A0 = cl.setTimeout, T0 = cl.clearTimeout;
function Ac(f, i) {
  i.useNativeTimers ? (f.setTimeoutFn = A0.bind(cl), f.clearTimeoutFn = T0.bind(cl)) : (f.setTimeoutFn = cl.setTimeout.bind(cl), f.clearTimeoutFn = cl.clearTimeout.bind(cl));
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
function Wh() {
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
class Qr extends Ft {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(i) {
    super(), this.writable = !1, Ac(this, i), this.opts = i, this.query = i.query, this.socket = i.socket, this.supportsBinary = !i.forceBase64;
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
    const s = Xr(i, this.socket.binaryType);
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
class D0 extends Qr {
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
    return this.opts.timestampRequests !== !1 && (s[this.opts.timestampParam] = Wh()), !this.supportsBinary && !s.sid && (s.b64 = 1), this.createUri(i, s);
  }
}
let $h = !1;
try {
  $h = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const U0 = $h;
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
class Cl extends Ft {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(i, s, r) {
    super(), this.createRequest = i, Ac(this, r), this._opts = r, this._method = r.method || "GET", this._uri = s, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var i;
    const s = Jh(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = Cl.requestsCount++, Cl.requests[this._index] = this);
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
      typeof document < "u" && delete Cl.requests[this._index], this._xhr = null;
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
Cl.requestsCount = 0;
Cl.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Bh);
  else if (typeof addEventListener == "function") {
    const f = "onpagehide" in cl ? "pagehide" : "unload";
    addEventListener(f, Bh, !1);
  }
}
function Bh() {
  for (let f in Cl.requests)
    Cl.requests.hasOwnProperty(f) && Cl.requests[f].abort();
}
const B0 = (function() {
  const f = Fh({
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
    return Object.assign(i, { xd: this.xd }, this.opts), new Cl(Fh, this.uri(), i);
  }
}
function Fh(f) {
  const i = f.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!i || U0))
      return new XMLHttpRequest();
  } catch {
  }
  if (!i)
    try {
      return new cl[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Ih = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class H0 extends Qr {
  get name() {
    return "websocket";
  }
  doOpen() {
    const i = this.uri(), s = this.opts.protocols, r = Ih ? {} : Jh(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      Gr(r, this.supportsBinary, (U) => {
        try {
          this.doWrite(r, U);
        } catch {
        }
        g && Ec(() => {
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
    return this.opts.timestampRequests && (s[this.opts.timestampParam] = Wh()), this.supportsBinary || (s.b64 = 1), this.createUri(i, s);
  }
}
const qr = cl.WebSocket || cl.MozWebSocket;
class L0 extends H0 {
  createSocket(i, s, r) {
    return Ih ? new qr(i, s, r) : s ? new qr(i, s) : new qr(i);
  }
  doWrite(i, s) {
    this.ws.send(s);
  }
}
class w0 extends Qr {
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
          r.read().then(({ done: Y, value: q }) => {
            Y || (this.onPacket(q), U());
          }).catch((Y) => {
          });
        };
        U();
        const B = { type: "open" };
        this.query.sid && (B.data = `{"sid":"${this.query.sid}"}`), this._writer.write(B).then(() => this.onOpen());
      });
    });
  }
  write(i) {
    this.writable = !1;
    for (let s = 0; s < i.length; s++) {
      const r = i[s], g = s === i.length - 1;
      this._writer.write(r).then(() => {
        g && Ec(() => {
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
  websocket: L0,
  webtransport: w0,
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
function Br(f) {
  if (f.length > 8e3)
    throw "URI too long";
  const i = f, s = f.indexOf("["), r = f.indexOf("]");
  s != -1 && r != -1 && (f = f.substring(0, s) + f.substring(s, r).replace(/:/g, ";") + f.substring(r, f.length));
  let g = G0.exec(f || ""), U = {}, B = 14;
  for (; B--; )
    U[X0[B]] = g[B] || "";
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
const jr = typeof addEventListener == "function" && typeof removeEventListener == "function", bc = [];
jr && addEventListener("offline", () => {
  bc.forEach((f) => f());
}, !1);
class Xn extends Ft {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(i, s) {
    if (super(), this.binaryType = E0, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, i && typeof i == "object" && (s = i, i = null), i) {
      const r = Br(i);
      s.hostname = r.host, s.secure = r.protocol === "https" || r.protocol === "wss", s.port = r.port, r.query && (s.query = r.query);
    } else s.host && (s.hostname = Br(s.host).host);
    Ac(this, s), this.secure = s.secure != null ? s.secure : typeof location < "u" && location.protocol === "https:", s.hostname && !s.port && (s.port = this.secure ? "443" : "80"), this.hostname = s.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = s.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, s.transports.forEach((r) => {
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
    }, s), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = M0(this.opts.query)), jr && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, bc.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    s.EIO = kh, s.transport = i, this.id && (s.sid = this.id);
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
    const i = this.opts.rememberUpgrade && Xn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", Xn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
    return i && (this._pingTimeoutTime = 0, Ec(() => {
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
    if (Xn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), jr && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = bc.indexOf(this._offlineEventListener);
        r !== -1 && bc.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", i, s), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Xn.protocol = kh;
class Z0 extends Xn {
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
    Xn.priorWebsocketSuccess = !1;
    const g = () => {
      r || (s.send([{ type: "ping", data: "probe" }]), s.once("packet", (G) => {
        if (!r)
          if (G.type === "pong" && G.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", s), !s)
              return;
            Xn.priorWebsocketSuccess = s.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (J(), this.setTransport(s), s.send([{ type: "upgrade" }]), this.emitReserved("upgrade", s), s = null, this.upgrading = !1, this.flush());
            });
          } else {
            const nt = new Error("probe error");
            nt.transport = s.name, this.emitReserved("upgradeError", nt);
          }
      }));
    };
    function U() {
      r || (r = !0, J(), s.close(), s = null);
    }
    const B = (G) => {
      const nt = new Error("probe error: " + G);
      nt.transport = s.name, U(), this.emitReserved("upgradeError", nt);
    };
    function Y() {
      B("transport closed");
    }
    function q() {
      B("socket closed");
    }
    function z(G) {
      s && G.name !== s.name && U();
    }
    const J = () => {
      s.removeListener("open", g), s.removeListener("error", B), s.removeListener("close", Y), this.off("close", q), this.off("upgrading", z);
    };
    s.once("open", g), s.once("error", B), s.once("close", Y), this.once("close", q), this.once("upgrading", z), this._upgrades.indexOf("webtransport") !== -1 && i !== "webtransport" ? this.setTimeoutFn(() => {
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
  s = s || typeof location < "u" && location, f == null && (f = s.protocol + "//" + s.host), typeof f == "string" && (f.charAt(0) === "/" && (f.charAt(1) === "/" ? f = s.protocol + f : f = s.host + f), /^(https?|wss?):\/\//.test(f) || (typeof s < "u" ? f = s.protocol + "//" + f : f = "https://" + f), r = Br(f)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const U = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + U + ":" + r.port + i, r.href = r.protocol + "://" + U + (s && s.port === r.port ? "" : ":" + r.port), r;
}
const J0 = typeof ArrayBuffer == "function", W0 = (f) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(f) : f.buffer instanceof ArrayBuffer, Ph = Object.prototype.toString, $0 = typeof Blob == "function" || typeof Blob < "u" && Ph.call(Blob) === "[object BlobConstructor]", F0 = typeof File == "function" || typeof File < "u" && Ph.call(File) === "[object FileConstructor]";
function Vr(f) {
  return J0 && (f instanceof ArrayBuffer || W0(f)) || $0 && f instanceof Blob || F0 && f instanceof File;
}
function Sc(f, i) {
  if (!f || typeof f != "object")
    return !1;
  if (Array.isArray(f)) {
    for (let s = 0, r = f.length; s < r; s++)
      if (Sc(f[s]))
        return !0;
    return !1;
  }
  if (Vr(f))
    return !0;
  if (f.toJSON && typeof f.toJSON == "function" && arguments.length === 1)
    return Sc(f.toJSON(), !0);
  for (const s in f)
    if (Object.prototype.hasOwnProperty.call(f, s) && Sc(f[s]))
      return !0;
  return !1;
}
function I0(f) {
  const i = [], s = f.data, r = f;
  return r.data = Hr(s, i), r.attachments = i.length, { packet: r, buffers: i };
}
function Hr(f, i) {
  if (!f)
    return f;
  if (Vr(f)) {
    const s = { _placeholder: !0, num: i.length };
    return i.push(f), s;
  } else if (Array.isArray(f)) {
    const s = new Array(f.length);
    for (let r = 0; r < f.length; r++)
      s[r] = Hr(f[r], i);
    return s;
  } else if (typeof f == "object" && !(f instanceof Date)) {
    const s = {};
    for (const r in f)
      Object.prototype.hasOwnProperty.call(f, r) && (s[r] = Hr(f[r], i));
    return s;
  }
  return f;
}
function P0(f, i) {
  return f.data = Lr(f.data, i), delete f.attachments, f;
}
function Lr(f, i) {
  if (!f)
    return f;
  if (f && f._placeholder === !0) {
    if (typeof f.num == "number" && f.num >= 0 && f.num < i.length)
      return i[f.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(f))
    for (let s = 0; s < f.length; s++)
      f[s] = Lr(f[s], i);
  else if (typeof f == "object")
    for (const s in f)
      Object.prototype.hasOwnProperty.call(f, s) && (f[s] = Lr(f[s], i));
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
    return (i.type === dt.EVENT || i.type === dt.ACK) && Sc(i) ? this.encodeAsBinary({
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
class Zr extends Ft {
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
    } else if (Vr(i) || i.base64)
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
      const B = i.substring(U, s);
      if (B != Number(B) || i.charAt(s) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(B);
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
        const B = i.charAt(s);
        if (B == null || Number(B) != B) {
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
      if (Zr.isPayloadValid(r.type, U))
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
        return jh(s);
      case dt.DISCONNECT:
        return s === void 0;
      case dt.CONNECT_ERROR:
        return typeof s == "string" || jh(s);
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
function jh(f) {
  return Object.prototype.toString.call(f) === "[object Object]";
}
const nv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Zr,
  Encoder: ev,
  get PacketType() {
    return dt;
  }
}, Symbol.toStringTag, { value: "Module" }));
function bl(f, i, s) {
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
class tm extends Ft {
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
      bl(i, "open", this.onopen.bind(this)),
      bl(i, "packet", this.onpacket.bind(this)),
      bl(i, "error", this.onerror.bind(this)),
      bl(i, "close", this.onclose.bind(this))
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
    const B = {
      type: dt.EVENT,
      data: s
    };
    if (B.options = {}, B.options.compress = this.flags.compress !== !1, typeof s[s.length - 1] == "function") {
      const J = this.ids++, G = s.pop();
      this._registerAckCallback(J, G), B.id = J;
    }
    const Y = (g = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || g === void 0 ? void 0 : g.writable, q = this.connected && !(!((U = this.io.engine) === null || U === void 0) && U._hasPingExpired());
    return this.flags.volatile && !Y || (q ? (this.notifyOutgoingListeners(B), this.packet(B)) : this.sendBuffer.push(B)), this.flags = {}, this;
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
      for (let Y = 0; Y < this.sendBuffer.length; Y++)
        this.sendBuffer[Y].id === i && this.sendBuffer.splice(Y, 1);
      s.call(this, new Error("operation has timed out"));
    }, g), B = (...Y) => {
      this.io.clearTimeoutFn(U), s.apply(this, Y);
    };
    B.withError = !0, this.acks[i] = B;
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
      const U = (B, Y) => B ? g(B) : r(Y);
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
function lu(f) {
  f = f || {}, this.ms = f.min || 100, this.max = f.max || 1e4, this.factor = f.factor || 2, this.jitter = f.jitter > 0 && f.jitter <= 1 ? f.jitter : 0, this.attempts = 0;
}
lu.prototype.duration = function() {
  var f = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var i = Math.random(), s = Math.floor(i * this.jitter * f);
    f = (Math.floor(i * 10) & 1) == 0 ? f - s : f + s;
  }
  return Math.min(f, this.max) | 0;
};
lu.prototype.reset = function() {
  this.attempts = 0;
};
lu.prototype.setMin = function(f) {
  this.ms = f;
};
lu.prototype.setMax = function(f) {
  this.max = f;
};
lu.prototype.setJitter = function(f) {
  this.jitter = f;
};
class wr extends Ft {
  constructor(i, s) {
    var r;
    super(), this.nsps = {}, this.subs = [], i && typeof i == "object" && (s = i, i = void 0), s = s || {}, s.path = s.path || "/socket.io", this.opts = s, Ac(this, s), this.reconnection(s.reconnection !== !1), this.reconnectionAttempts(s.reconnectionAttempts || 1 / 0), this.reconnectionDelay(s.reconnectionDelay || 1e3), this.reconnectionDelayMax(s.reconnectionDelayMax || 5e3), this.randomizationFactor((r = s.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new lu({
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
    const g = bl(s, "open", function() {
      r.onopen(), i && i();
    }), U = (Y) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", Y), i ? i(Y) : this.maybeReconnectOnOpen();
    }, B = bl(s, "error", U);
    if (this._timeout !== !1) {
      const Y = this._timeout, q = this.setTimeoutFn(() => {
        g(), U(new Error("timeout")), s.close();
      }, Y);
      this.opts.autoUnref && q.unref(), this.subs.push(() => {
        this.clearTimeoutFn(q);
      });
    }
    return this.subs.push(g), this.subs.push(B), this;
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
      bl(i, "ping", this.onping.bind(this)),
      bl(i, "data", this.ondata.bind(this)),
      bl(i, "error", this.onerror.bind(this)),
      bl(i, "close", this.onclose.bind(this)),
      // @ts-ignore
      bl(this.decoder, "decoded", this.ondecoded.bind(this))
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
    Ec(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new tm(this, i, s), this.nsps[i] = r), r;
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
const Iu = {};
function _c(f, i) {
  typeof f == "object" && (i = f, f = void 0), i = i || {};
  const s = k0(f, i.path || "/socket.io"), r = s.source, g = s.id, U = s.path, B = Iu[g] && U in Iu[g].nsps, Y = i.forceNew || i["force new connection"] || i.multiplex === !1 || B;
  let q;
  return Y ? q = new wr(r, i) : (Iu[g] || (Iu[g] = new wr(r, i)), q = Iu[g]), s.query && !i.query && (i.query = s.queryKey), q.socket(s.path, i);
}
Object.assign(_c, {
  Manager: wr,
  Socket: tm,
  io: _c,
  connect: _c
});
let ma = null;
function uv(f) {
  return ma ? ma.auth = { token: f } : ma = _c({
    autoConnect: !1,
    transports: ["websocket"],
    auth: { token: f }
  }), ma;
}
function iv() {
  ma && (ma.disconnect(), ma = null);
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
function an(f, i, s, { timeoutMs: r = 1e4 } = {}) {
  return new Promise((g, U) => {
    let B = !1;
    const Y = window.setTimeout(() => {
      B || (B = !0, U(new Error("Request timed out")));
    }, r);
    f.emit(i, s, (q) => {
      if (!B)
        return B = !0, window.clearTimeout(Y), q?.ok ? g(q) : U(new Error(q?.error || q?.code || "Request failed"));
    });
  });
}
function vc(f) {
  return String(f || "").trim().toUpperCase();
}
function gc(f, i) {
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
function Hh(f, i) {
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
function eu(f) {
  return String(f || "").trim();
}
function Lh(f) {
  const i = eu(f).toLowerCase();
  return i ? i.includes("only host") ? "Only the host can start the game." : i.includes("not enough players") ? "Not enough players to start. Invite more players or lower the minimum players setting." : i.includes("balanced strict") ? "Balanced strict could not build fair rounds from MAL lists. Try BALANCED_RELAXED or HYBRID." : i.includes("mal_only") ? "MAL_ONLY could not build enough rounds from linked MAL lists. Try HYBRID or POPULAR." : i.includes("playable round media") || i.includes("round seeds") || i.includes("media provider") ? "Could not prepare enough playable songs for this match. Try fewer rounds or different source/theme settings." : i.includes("timed out") ? "Game start timed out. Please try again." : eu(f) : "Could not start the game right now. Please try again.";
}
function vv(f) {
  const i = eu(f).toLowerCase();
  return i ? i.includes("at least 2 characters") ? "Type at least 2 characters to search." : i.includes("too many") || i.includes("rate") ? "Search is rate-limited right now. Wait a few seconds and try again." : i.includes("timed out") ? "Search timed out. Please try again." : "Search is temporarily unavailable. You can still submit a typed guess." : "Search is temporarily unavailable. You can still submit a typed guess.";
}
function Pu(f) {
  return f === "autoplay_blocked" ? "Autoplay was blocked or the sample failed to auto-start. Press Play sample." : f === "source_unavailable" ? "This sample source failed to load for your browser." : "Could not play sample audio for this round.";
}
function wh(f) {
  const i = String(f?.name || ""), s = eu(f?.message).toLowerCase();
  return i === "NotAllowedError" || s.includes("notallowederror") || s.includes("user gesture") || s.includes("permission") || s.includes("autoplay") ? "autoplay_blocked" : i === "AbortError" ? "aborted" : i === "NotSupportedError" || s.includes("failed to load") || s.includes("no supported source") || s.includes("not supported") ? "source_unavailable" : "play_failed";
}
function gv() {
  const f = Gh(), i = N.useRef(null), s = N.useRef(null), r = N.useRef(""), g = N.useRef(null), U = N.useRef(!1), B = N.useRef(null), Y = N.useRef(null), q = N.useRef(null), z = N.useRef(null), J = N.useRef(null), G = N.useRef(0.8), nt = N.useRef(null), Pt = N.useRef(/* @__PURE__ */ new Map()), At = N.useRef(/* @__PURE__ */ new Map()), wt = N.useRef(/* @__PURE__ */ new Map()), be = N.useRef(/* @__PURE__ */ new Map()), Yt = N.useRef(/* @__PURE__ */ new Map()), Le = N.useRef(/* @__PURE__ */ new Map()), Bt = N.useRef(/* @__PURE__ */ new Map()), Qt = N.useRef([]), de = N.useRef(/* @__PURE__ */ new Set()), Vt = N.useRef(0), tt = N.useRef([]), Ct = N.useRef(!1), he = N.useRef(null), we = N.useRef(!1), [Oe, me] = N.useState(!0), [Se, Dt] = N.useState(""), [Re, _] = N.useState(""), [j, Q] = N.useState(""), [pt, bt] = N.useState(!1), [m, D] = N.useState(null), [H, w] = N.useState([]), [W, lt] = N.useState(""), [I, Ut] = N.useState(hv), [qt, un] = N.useState(""), [Ul, ql] = N.useState(""), [Sl, xl] = N.useState(""), [at, cn] = N.useState(null), [ei, nu] = N.useState(null), [ft, sl] = N.useState("WAITING"), [Qn, sn] = N.useState(null), [Tc, ye] = N.useState("00:00"), [ht, ya] = N.useState(null), [li, rl] = N.useState([]), [_e, Bl] = N.useState(null), [va, ga] = N.useState(null), [We, te] = N.useState([]), [ze, ee] = N.useState(""), [au, pa] = N.useState(null), [Nc, $e] = N.useState([]), [_l, Fe] = N.useState(!1), [fl, Me] = N.useState(!1), [Vn, uu] = N.useState(null), [rn, ol] = N.useState(!1), [Ye, Oc] = N.useState(0.8), [iu, jl] = N.useState(""), [Zn, Ee] = N.useState(""), [fn, dl] = N.useState(""), [ba, ve] = N.useState(!1), [St, le] = N.useState({ ready: 0, failed: 0, total: 0 }), [El, Al] = N.useState(""), [ni, on] = N.useState(!1), [ue, Kn] = N.useState(null), [dn, Hl] = N.useState(!1), [Ll, hn] = N.useState("");
  N.useEffect(() => {
    s.current = at;
  }, [at]), N.useEffect(() => {
    r.current = Ul;
  }, [Ul]), N.useEffect(() => {
    G.current = Ye;
  }, [Ye]);
  const wl = N.useMemo(() => {
    const d = /* @__PURE__ */ new Map();
    for (const A of at?.players || [])
      d.set(A.userId, A.displayName);
    return d;
  }, [at]), Zt = N.useCallback((d) => wl.get(d) || `User ${d}`, [wl]), kn = N.useCallback(() => {
    J.current && (window.clearTimeout(J.current), J.current = null);
  }, []), Ce = N.useCallback(() => {
    kn(), B.current && B.current.pause(), Y.current && Y.current.pause(), z.current = null, Me(!1);
  }, [kn]), ge = N.useCallback(() => {
    const d = q.current;
    if (d) {
      d.pause();
      try {
        d.currentTime = 0;
      } catch {
      }
    }
  }, []), Ae = N.useCallback(() => {
    const d = tt.current;
    if (!Array.isArray(d) || d.length === 0) {
      le({ ready: 0, failed: 0, total: 0 });
      return;
    }
    let A = 0, C = 0;
    for (const x of d) {
      const V = At.current.get(x);
      V === "ready" ? A += 1 : V === "failed" && (C += 1);
    }
    le({ ready: A, failed: C, total: d.length });
  }, []), Sa = N.useCallback((d = null) => {
    const A = d instanceof Set ? d : null, C = [];
    for (const [x] of Bt.current)
      A && A.has(x) || C.push(x);
    for (const x of C) {
      const V = Bt.current.get(x);
      if (V) {
        try {
          V.pause?.(), V.removeAttribute("src"), V.load?.();
        } catch {
        }
        V.parentNode && V.parentNode.removeChild(V);
      }
      Bt.current.delete(x), Le.current.delete(x), Yt.current.delete(x);
    }
  }, []), Yl = N.useCallback(() => {
    Ct.current = !0, Pt.current.clear(), At.current.clear(), wt.current.clear(), be.current.clear(), Qt.current = [], de.current.clear(), Vt.current = 0, tt.current = [], he.current = null, we.current = !1, Sa(), ve(!1), le({ ready: 0, failed: 0, total: 0 }), Al(""), on(!1);
  }, [Sa]), cu = N.useCallback((d, A = "video") => {
    const C = typeof d == "string" ? d.trim() : "";
    if (!C)
      return Promise.reject(new Error("Missing media url"));
    const x = Yt.current.get(C);
    if (x === "ready")
      return Promise.resolve(!0);
    const V = Le.current.get(C);
    if (x === "loading" && V)
      return V;
    Yt.current.set(C, "loading");
    const k = new Promise((mt, Kt) => {
      if (Ct.current) {
        Yt.current.set(C, "failed"), Kt(new Error("Preload manager was reset"));
        return;
      }
      const et = document.createElement(A === "audio" ? "audio" : "video");
      et.preload = "auto", et.muted = !0, et.playsInline = !0, et.style.position = "absolute", et.style.left = "-10000px", et.style.width = "1px", et.style.height = "1px", et.style.opacity = "0";
      const jt = (fi) => {
        if (ne(), fi) {
          Yt.current.set(C, "ready"), Bt.current.set(C, et), mt(!0);
          return;
        }
        Yt.current.set(C, "failed"), Bt.current.delete(C), et.parentNode && et.parentNode.removeChild(et), Kt(new Error("Media preload failed"));
      }, ne = () => {
        window.clearTimeout(ce), et.removeEventListener("loadeddata", ut), et.removeEventListener("canplaythrough", ut), et.removeEventListener("error", Ue);
      }, ut = () => jt(!0), Ue = () => jt(!1), ce = window.setTimeout(() => jt(!1), 12e3);
      et.addEventListener("loadeddata", ut, { once: !0 }), et.addEventListener("canplaythrough", ut, { once: !0 }), et.addEventListener("error", Ue, { once: !0 }), document.body.appendChild(et), et.src = C, et.load();
    }).finally(() => {
      Yt.current.get(C) !== "loading" && Le.current.delete(C);
    });
    return Le.current.set(C, k), k;
  }, []), ai = N.useCallback(async (d) => {
    const A = Number.parseInt(d, 10);
    if (!Number.isInteger(A) || A <= 0 || Ct.current) return !1;
    const C = wt.current.get(A);
    if (C) return C;
    if (At.current.get(A) === "ready") return !0;
    const V = Pt.current.get(A);
    if (!V)
      return At.current.set(A, "failed"), Ae(), !1;
    const k = [V.audioUrl, V.videoUrl].filter((Kt, et, jt) => Kt && jt.indexOf(Kt) === et);
    be.current.set(A, new Set(k)), At.current.set(A, "loading"), Ae();
    const mt = (async () => {
      if (k.length === 0)
        return At.current.set(A, "failed"), !1;
      const et = (await Promise.allSettled(k.map((jt) => {
        const ne = V.audioUrl && jt === V.audioUrl ? "audio" : "video";
        return cu(jt, ne);
      }))).some((jt) => jt.status === "fulfilled");
      return At.current.set(A, et ? "ready" : "failed"), et;
    })().finally(() => {
      wt.current.delete(A), Ae();
    });
    return wt.current.set(A, mt), mt;
  }, [cu, Ae]), mn = N.useCallback(() => {
    if (!Ct.current)
      for (; Vt.current < dv && Qt.current.length > 0; ) {
        const d = Qt.current.shift();
        de.current.delete(d);
        const A = At.current.get(d);
        A === "ready" || A === "loading" || (Vt.current += 1, ai(d).catch(() => !1).finally(() => {
          Vt.current = Math.max(0, Vt.current - 1), mn();
        }));
      }
  }, [ai]), hl = N.useCallback((d = []) => {
    for (const A of d) {
      const C = Number.parseInt(A, 10);
      if (!Number.isInteger(C) || C <= 0 || !Pt.current.has(C)) continue;
      const x = At.current.get(C);
      x === "ready" || x === "loading" || de.current.has(C) || (At.current.set(C, "pending"), Qt.current.push(C), de.current.add(C));
    }
    Ae(), mn();
  }, [mn, Ae]), De = N.useCallback(async (d, A = 2e4) => {
    const C = (Array.isArray(d) ? d : []).map((V) => Number.parseInt(V, 10)).filter((V) => Number.isInteger(V) && V > 0);
    if (C.length === 0) return { ok: !0 };
    const x = Date.now();
    for (; !Ct.current; ) {
      const V = C.filter((mt) => At.current.get(mt) === "failed");
      if (V.length > 0)
        return { ok: !1, reason: "failed", failedIndexes: V };
      if (C.every((mt) => At.current.get(mt) === "ready")) return { ok: !0 };
      if (Date.now() - x >= A)
        return { ok: !1, reason: "timeout" };
      await new Promise((mt) => window.setTimeout(mt, 120));
    }
    return { ok: !1, reason: "cancelled" };
  }, []), ie = N.useCallback((d) => !d || d.ok ? "" : d.reason === "failed" ? "Failed to preload required round media. Retry to continue." : d.reason === "timeout" ? "Preloading required media timed out. Retry to continue." : "Preloading was interrupted. Retry to continue.", []), su = N.useCallback((d = []) => {
    const A = new Set(
      (Array.isArray(d) ? d : []).map((x) => Number.parseInt(x, 10)).filter((x) => Number.isInteger(x) && x > 0)
    ), C = /* @__PURE__ */ new Set();
    for (const [x, V] of be.current)
      if (A.has(x))
        for (const k of V || []) C.add(k);
    for (const x of [...be.current.keys()])
      A.has(x) || (be.current.delete(x), At.current.delete(x), wt.current.delete(x));
    Qt.current = Qt.current.filter((x) => A.has(x)), de.current = new Set(Qt.current), Sa(C);
  }, [Sa]), Jn = N.useCallback(async (d, A) => {
    const C = vc(d), x = Number.parseInt(A, 10);
    if (!C || !Number.isInteger(x) || we.current) return;
    const V = i.current;
    if (V?.connected) {
      we.current = !0;
      try {
        await an(V, "game:preload_ready", {
          lobbyCode: C,
          sessionId: x
        });
      } catch (k) {
        we.current = !1, _(k.message);
      }
    }
  }, []), _a = N.useCallback(async ({ sessionId: d, lobbyCode: A, manifest: C }) => {
    Yl(), Ct.current = !1;
    const x = yv(C);
    Pt.current = new Map(x.map((mt) => [mt.index, mt])), he.current = Number.parseInt(d, 10) || null, we.current = !1, Al(""), on(!1);
    const V = x.slice(0, fv).map((mt) => mt.index);
    if (tt.current = V, Ae(), V.length === 0) {
      await Jn(A, he.current);
      return;
    }
    ve(!0), hl(V);
    const k = await De(V);
    if (!Ct.current) {
      if (!k.ok) {
        Al(ie(k)), ve(!0);
        return;
      }
      ve(!1), await Jn(A, he.current);
    }
  }, [
    ie,
    hl,
    Yl,
    Jn,
    Ae,
    De
  ]), ui = N.useCallback(async () => {
    if (Ct.current || we.current) return;
    const d = s.current?.code, A = he.current, C = tt.current;
    if (!d || !Number.isInteger(A) || !Array.isArray(C) || C.length === 0)
      return;
    on(!0), Al(""), ve(!0), hl(C);
    const x = await De(C);
    if (!Ct.current) {
      if (!x.ok) {
        Al(ie(x)), on(!1);
        return;
      }
      on(!1), ve(!1), await Jn(d, A);
    }
  }, [ie, hl, Jn, De]), Wn = N.useCallback((d) => {
    const A = Number.parseInt(d, 10);
    if (!Number.isInteger(A) || A <= 0) return;
    const C = [];
    for (let x = 0; x < ov; x += 1)
      C.push(A + x);
    hl(C), su(C);
  }, [hl, su]), ii = N.useCallback((d) => {
    const A = String(d || "0");
    let C = 2166136261;
    for (let x = 0; x < A.length; x += 1)
      C ^= A.charCodeAt(x), C = Math.imul(C, 16777619);
    return (C >>> 0) / 4294967295;
  }, []), Te = N.useCallback(async (d) => {
    if (!d) return null;
    const A = Number(d.duration);
    if (Number.isFinite(A) && A > 0) return A;
    await new Promise((x) => {
      let V = !1;
      const k = () => {
        V || (V = !0, mt(), x());
      }, mt = () => {
        d.removeEventListener("loadedmetadata", k), d.removeEventListener("durationchange", k), d.removeEventListener("loadeddata", k), d.removeEventListener("error", k);
      };
      d.addEventListener("loadedmetadata", k), d.addEventListener("durationchange", k), d.addEventListener("loadeddata", k), d.addEventListener("error", k), window.setTimeout(k, 2e3);
    });
    const C = Number(d.duration);
    return Number.isFinite(C) && C > 0 ? C : null;
  }, []), Ea = N.useCallback(async (d, A) => {
    const C = nt.current;
    if (Number.isFinite(C) && C >= 0) return C;
    const x = Number.isFinite(A?.sampleStartSec) ? Math.max(0, A.sampleStartSec) : 0;
    if (x > 0)
      return nt.current = x, x;
    const V = Number.isFinite(A?.sampleDurationSec) ? Math.max(1, A.sampleDurationSec) : 10, k = await Te(d);
    if (!Number.isFinite(k) || k <= 0)
      return nt.current = x, x;
    const mt = Math.floor(k - V);
    if (mt <= 0)
      return nt.current = 0, 0;
    const Kt = `${ht?.roundId || 0}:${A?.animeId || 0}:${V}`, et = ii(Kt), jt = Math.floor(et * (mt + 1));
    return nt.current = jt, jt;
  }, [ht?.roundId, ii, Te]), yn = N.useCallback(async () => {
    const d = q.current;
    if (!d) return !1;
    d.volume = Math.max(0, Math.min(1, Number(G.current))), d.muted = !1;
    try {
      return await d.play(), ol(!1), dl(""), !0;
    } catch (A) {
      const C = wh(A);
      return C === "autoplay_blocked" ? (ol(!0), !1) : (C !== "aborted" && dl('Could not play solution video in this browser. Use "Open video source".'), ol(!1), !1);
    }
  }, []), Gl = N.useCallback(async ({ isAutoplay: d = !1 } = {}) => {
    const A = B.current, C = Y.current, x = ht?.sample;
    if (ft !== "GUESSING" || !A && !C || !x?.audioUrl && !x?.videoUrl) return !1;
    kn(), Ce(), Ee("");
    const V = Number.isFinite(x.sampleDurationSec) ? Math.max(1, x.sampleDurationSec) : 10, k = Math.max(0, Math.min(1, Number(G.current))), mt = async (ne, ut) => {
      if (!ne) return { ok: !1, reason: "source_unavailable" };
      ne.volume = k, ne.muted = !1;
      const Ue = await Ea(ne, x);
      try {
        ne.currentTime = Ue;
      } catch {
      }
      try {
        return await ne.play(), z.current = ne, uu(ut), Fe(!1), Ee(""), Me(!0), J.current = window.setTimeout(() => {
          const ce = z.current;
          ce && (ce.pause(), Me(!1), z.current = null);
        }, V * 1e3), { ok: !0, reason: null };
      } catch (ce) {
        return { ok: !1, reason: wh(ce) };
      }
    }, Kt = x?.audioUrl ? await mt(A, "audio") : { ok: !1, reason: "source_unavailable" };
    if (Kt.ok) return !0;
    const et = x?.videoUrl ? await mt(C, "video") : { ok: !1, reason: "source_unavailable" };
    if (et.ok) return !0;
    const jt = [Kt.reason, et.reason].filter(Boolean);
    return jt.includes("autoplay_blocked") ? (Fe(!0), Ee(Pu("autoplay_blocked")), !1) : (Fe(!1), jt.includes("source_unavailable") ? (Ee(Pu("source_unavailable")), !1) : ((!jt.includes("aborted") || !d) && Ee(Pu("play_failed")), !1));
  }, [kn, ft, Ea, ht, Ce]), Ge = N.useCallback(() => {
    Yl(), Ce(), ge(), nu(null), sl("WAITING"), sn(null), ya(null), rl([]), Bl(null), ga(null), te([]), ee(""), pa(null), $e([]), jl(""), Ee(""), dl(""), Fe(!1), uu(null), ol(!1);
  }, [Yl, Ce, ge]), ru = N.useCallback((d) => {
    const A = d || {}, C = A.phase || "WAITING";
    if (sl(C), ya(A.round || null), te(Array.isArray(A.readyUserIds) ? A.readyUserIds : []), sn(A.endsAt || A.solution?.endsAt || null), C === "ANSWERS_REVEAL") {
      rl(Array.isArray(A.answers) ? A.answers : []), Bl(null);
      return;
    }
    if (C === "SOLUTION_REVEAL") {
      rl(Array.isArray(A.answers) ? A.answers : []), Bl(A.solution || null);
      return;
    }
    C === "WAITING" && (rl([]), Bl(null));
  }, []), vn = N.useCallback(async (d) => {
    const A = i.current;
    if (!(!A?.connected || !d))
      try {
        const C = await an(A, "round:sync", { lobbyCode: d });
        ru(C?.state || {});
      } catch (C) {
        _(C.message);
      }
  }, [ru]), Ie = N.useCallback(async (d = "") => {
    const A = String(d || "").trim(), C = new URLSearchParams();
    A && C.set("q", A);
    const x = await ha(`/game/lobbies${C.toString() ? `?${C}` : ""}`);
    w(Array.isArray(x.lobbies) ? x.lobbies : []);
  }, []), Aa = N.useCallback(async (d, A, C) => {
    const x = i.current;
    if (!x) return;
    const V = {
      lobbyCode: d,
      ...A ? { inviteToken: A } : {},
      ...C ? { displayName: C } : {}
    };
    if (!x.connected) {
      g.current = V, x.connect();
      return;
    }
    await an(x, "lobby:join", V), await vn(d);
  }, [vn]), $n = N.useCallback(async (d, A = "") => {
    const C = vc(d);
    if (!C) return _("Lobby code is required");
    Dt("join"), _(""), Q("");
    try {
      const x = {};
      Sl.trim() && (x.displayName = Sl.trim()), A && (x.inviteToken = A);
      const V = await ha(`/game/lobbies/${C}/join`, {
        method: "POST",
        body: JSON.stringify(x)
      });
      cn(V.lobby), ql(A || ""), Ge(), gc(C, A || ""), await Aa(C, A || "", Sl.trim()), Q(`Joined lobby ${C}`);
    } catch (x) {
      _(x.message);
    } finally {
      Dt("");
    }
  }, [Ge, Sl, Aa]), ci = N.useCallback(async () => {
    Dt("create"), _(""), Q("");
    try {
      const d = await ha("/game/lobbies", {
        method: "POST",
        body: JSON.stringify(I)
      });
      cn(d.lobby), Ge(), gc(d.lobby.code, ""), await Aa(d.lobby.code, "", Sl.trim()), Q(`Created lobby ${d.lobby.code}`);
    } catch (d) {
      _(d.message);
    } finally {
      Dt("");
    }
  }, [Ge, I, Sl, Aa]), fu = N.useCallback(async () => {
    if (at?.code) {
      Dt("leave"), _("");
      try {
        i.current?.connected && await an(i.current, "lobby:leave", { lobbyCode: at.code });
      } catch (d) {
        _(d.message);
      } finally {
        cn(null), ql(""), gc("", ""), Ge(), Dt(""), Ie(W).catch(() => {
        });
      }
    }
  }, [Ge, Ie, at, W]), Rc = N.useCallback(async () => {
    if (!(!at?.code || !i.current)) {
      Dt("start"), _("");
      try {
        await an(i.current, "game:start", { lobbyCode: at.code }, { timeoutMs: 12e4 });
      } catch (d) {
        _(Lh(d.message));
      } finally {
        Dt("");
      }
    }
  }, [at]), zc = N.useCallback(async () => {
    if (!(!at?.code || !ht?.roundId || !i.current)) {
      Dt("guess"), _("");
      try {
        await an(i.current, "round:submit_guess", {
          lobbyCode: at.code,
          roundId: ht.roundId,
          guessText: ze.trim(),
          guessAnimeId: Number.isInteger(au) ? au : null
        }), Q("Guess saved");
      } catch (d) {
        _(d.message);
      } finally {
        Dt("");
      }
    }
  }, [au, ze, at, ht]), Ta = N.useCallback(async () => {
    if (!(!at?.code || !i.current || !m)) {
      Dt("ready"), _("");
      try {
        const d = We.includes(m.id);
        await an(i.current, "round:set_ready", { lobbyCode: at.code, ready: !d });
      } catch (d) {
        _(d.message);
      } finally {
        Dt("");
      }
    }
  }, [at, We, m]), ml = N.useCallback(async () => {
    if (at?.code) {
      Dt("invite"), _(""), Q("");
      try {
        const d = await ha(`/game/lobbies/${at.code}/invite`);
        d.inviteToken && (ql(d.inviteToken), gc(at.code, d.inviteToken)), navigator.clipboard?.writeText ? (await navigator.clipboard.writeText(d.inviteUrl), Q("Invite link copied")) : Q(d.inviteUrl);
      } catch (d) {
        _(d.message);
      } finally {
        Dt("");
      }
    }
  }, [at]);
  N.useEffect(() => {
    if (!f) return Dh();
    const d = uv(f);
    i.current = d;
    const A = async () => {
      bt(!0), _("");
      try {
        g.current ? (await an(d, "lobby:join", g.current), await vn(g.current.lobbyCode), g.current = null) : s.current?.code && (await an(d, "lobby:join", {
          lobbyCode: s.current.code,
          ...r.current ? { inviteToken: r.current } : {}
        }), await vn(s.current.code));
      } catch (ut) {
        _(ut.message);
      }
    }, C = () => bt(!1), x = (ut) => {
      const Ue = String(ut?.code || ""), ce = eu(ut?.message);
      if (Ue === "game_start_failed") {
        _(Lh(ce));
        return;
      }
      _(ce || "Realtime error");
    }, V = ({ lobby: ut }) => ut && cn(ut), k = ({ sessionId: ut, config: Ue, preloadManifest: ce }) => {
      nu({ sessionId: ut, ...Ue || {} }), ga(null), sl("PENDING"), s.current?.code && _a({
        sessionId: ut,
        lobbyCode: s.current.code,
        manifest: ce
      }).catch(() => {
      });
    }, mt = (ut) => {
      Ce(), ge(), ve(!1), Al(""), on(!1), sl("GUESSING"), sn(ut?.endsAt || null), ya(ut || null), rl([]), Bl(null), ga(null), te([]), ee(""), pa(null), $e([]), jl(""), Ee(""), dl(""), Fe(!1), uu(null), ol(!1), nt.current = null, Wn(ut?.index);
    }, Kt = (ut) => {
      sl("ANSWERS_REVEAL"), sn(ut?.endsAt || null), rl(Array.isArray(ut?.answers) ? ut.answers : []);
    }, et = (ut) => {
      Ce(), sl("SOLUTION_REVEAL"), sn(ut?.endsAt || null), Bl(ut || null), Ee(""), dl(""), ol(!1);
    }, jt = (ut) => {
      Yl(), Ce(), ge(), sl("FINISHED"), sn(null), Ee(""), dl(""), ga(ut || null);
    }, ne = (ut) => {
      te(Array.isArray(ut?.readyUserIds) ? ut.readyUserIds : []);
    };
    return d.on("connect", A), d.on("disconnect", C), d.on("error", x), d.on("lobby:state", V), d.on("game:started", k), d.on("round:started", mt), d.on("round:answers_reveal", Kt), d.on("round:solution", et), d.on("game:finished", jt), d.on("round:ready_state", ne), d.connect(), () => {
      d.off("connect", A), d.off("disconnect", C), d.off("error", x), d.off("lobby:state", V), d.off("game:started", k), d.off("round:started", mt), d.off("round:answers_reveal", Kt), d.off("round:solution", et), d.off("game:finished", jt), d.off("round:ready_state", ne), iv();
    };
  }, [_a, Wn, vn, Yl, Ce, ge, f]);
  const gn = N.useCallback(async ({ forceRefresh: d = !1, silent: A = !1 } = {}) => {
    A || Hl(!0);
    try {
      const x = await ha(d ? "/game/media-source-status?refresh=1" : "/game/media-source-status");
      Kn(x?.status || null), hn("");
    } catch (C) {
      hn(eu(C?.message) || "Could not fetch media source status");
    } finally {
      A || Hl(!1);
    }
  }, []);
  N.useEffect(() => {
    if (!f) return;
    let d = !0;
    return (async () => {
      try {
        const A = await ha("/auth/me");
        if (!d) return;
        D(A), await Ie("");
      } catch {
        Dh();
        return;
      } finally {
        d && me(!1);
      }
    })(), () => {
      d = !1;
    };
  }, [Ie, f]), N.useEffect(() => {
    if (!f) return;
    let d = !0;
    gn({ forceRefresh: !0 }).catch(() => {
    });
    const A = window.setInterval(() => {
      d && gn({ silent: !0 }).catch(() => {
      });
    }, 15e3);
    return () => {
      d = !1, window.clearInterval(A);
    };
  }, [gn, f]), N.useEffect(() => {
    if (Oe || !m || U.current) return;
    U.current = !0;
    const d = new URLSearchParams(window.location.search), A = vc(d.get("lobby")), C = d.get("inviteToken") || "";
    A && (un(A), ql(C), $n(A, C).catch(() => {
    }));
  }, [$n, Oe, m]), N.useEffect(() => {
    if (!Qn) return ye("00:00");
    const d = () => ye(mv(new Date(Qn).getTime() - Date.now()));
    d();
    const A = window.setInterval(d, 250);
    return () => window.clearInterval(A);
  }, [Qn]), N.useEffect(() => {
    if (ft !== "GUESSING") {
      $e([]), jl("");
      return;
    }
    const d = ze.trim();
    if (d.length < 2) {
      $e([]), jl("");
      return;
    }
    const A = window.setTimeout(async () => {
      try {
        const C = await ha("/game/search", {
          method: "POST",
          body: JSON.stringify({ query: d, limit: 8 })
        });
        $e(Array.isArray(C.results) ? C.results : []), jl("");
      } catch (C) {
        $e([]), jl(vv(C?.message));
      }
    }, 300);
    return () => window.clearTimeout(A);
  }, [ze, ft]), N.useEffect(() => {
    if (!!!(ht?.sample?.audioUrl || ht?.sample?.videoUrl)) {
      Fe(!1), Ce();
      return;
    }
    if (ft !== "GUESSING") {
      (ft === "SOLUTION_REVEAL" || ft === "WAITING" || ft === "FINISHED" || ft === "PENDING") && (Fe(!1), Ce());
      return;
    }
    let A = !1;
    const C = window.setTimeout(() => {
      A || Gl({ isAutoplay: !0 }).catch(() => {
      });
    }, 0);
    return () => {
      A = !0, window.clearTimeout(C);
    };
  }, [ft, Gl, ht?.roundId, ht?.sample?.audioUrl, ht?.sample?.videoUrl, Ce]), N.useEffect(() => {
    nt.current = null;
  }, [ht?.roundId]), N.useEffect(() => {
    if (!_l || ft !== "GUESSING") return;
    const d = () => {
      Gl({ isAutoplay: !1 }).catch(() => {
      });
    };
    return window.addEventListener("pointerdown", d), window.addEventListener("keydown", d), () => {
      window.removeEventListener("pointerdown", d), window.removeEventListener("keydown", d);
    };
  }, [ft, Gl, _l]), N.useEffect(() => {
    if (ft !== "SOLUTION_REVEAL" || !_e?.video) {
      ol(!1), dl(""), ge();
      return;
    }
    let d = !1;
    const A = window.setTimeout(() => {
      d || yn().catch(() => {
      });
    }, 0);
    return () => {
      d = !0, window.clearTimeout(A), ge();
    };
  }, [ft, yn, _e?.video, ge]), N.useEffect(() => {
    if (!rn || ft !== "SOLUTION_REVEAL") return;
    const d = () => {
      yn().catch(() => {
      });
    };
    return window.addEventListener("pointerdown", d), window.addEventListener("keydown", d), () => {
      window.removeEventListener("pointerdown", d), window.removeEventListener("keydown", d);
    };
  }, [ft, yn, rn]), N.useEffect(() => {
    const d = Math.max(0, Math.min(1, Number(Ye)));
    B.current && (B.current.volume = d), Y.current && (Y.current.volume = d), q.current && (q.current.volume = d);
  }, [Ye, ht?.roundId, _e?.video]);
  const ou = N.useMemo(() => !!(at && m && at.host?.id === m.id), [at, m]), pn = N.useMemo(() => !!(m && We.includes(m.id)), [We, m]), Tl = N.useMemo(() => !!(ht?.sample?.audioUrl || ht?.sample?.videoUrl), [ht]), si = N.useMemo(() => !!(ht && Tl && (ft === "GUESSING" || ft === "ANSWERS_REVEAL")), [Tl, ft, ht]), Fn = N.useMemo(() => {
    const d = Number.parseInt(ht?.sample?.sampleDurationSec, 10);
    return !Number.isFinite(d) || d <= 0 ? "Sample ready" : `${d}s preview`;
  }, [ht]), ri = N.useMemo(() => `${Math.round(Ye * 100)}%`, [Ye]), bn = N.useMemo(() => {
    if (!ue)
      return { label: dn ? "Checking" : "Unknown", tone: "neutral" };
    if (!ue.ok)
      return { label: "Down", tone: "down" };
    const d = Number(ue.latencyMs);
    return Number.isFinite(d) && d >= 2500 ? { label: "Slow", tone: "warn" } : { label: "Healthy", tone: "ok" };
  }, [dn, ue]), yl = N.useMemo(() => {
    const d = Number(ue?.latencyMs);
    return Number.isFinite(d) ? `${Math.round(d)} ms` : "n/a";
  }, [ue]), du = N.useMemo(() => {
    if (!ue?.checkedAt) return "n/a";
    const d = new Date(ue.checkedAt);
    return Number.isNaN(d.getTime()) ? "n/a" : d.toLocaleTimeString();
  }, [ue]), Xl = N.useMemo(() => ba ? { label: "Busy", tone: "warn", detail: St.total > 0 ? `Preloading required rounds (${St.ready}/${St.total})` : "Preloading required rounds" } : St.failed > 0 ? { label: "Degraded", tone: "warn", detail: `Preload failures detected (${St.failed})` } : Zn || fn ? { label: "Degraded", tone: "warn", detail: "Client playback errors detected in this session" } : _l || rn ? { label: "Blocked", tone: "warn", detail: "Browser autoplay restrictions require user interaction" } : fl ? { label: "Active", tone: "ok", detail: "Sample playback is running" } : { label: "Idle", tone: "neutral", detail: `Phase ${ft}` }, [
    Zn,
    ft,
    ba,
    St.failed,
    St.ready,
    St.total,
    _l,
    fl,
    fn,
    rn
  ]), Nl = N.useCallback((d) => {
    const A = Math.max(0, Math.min(1, Number.parseFloat(d.target.value)));
    Oc(Number.isFinite(A) ? A : 0.8);
  }, []), Na = N.useMemo(() => ft === "FINISHED" ? (va?.finalScores || []).slice().sort(Hh) : ft === "SOLUTION_REVEAL" ? (_e?.scores || []).slice().sort(Hh) : [], [va, ft, _e]);
  return Oe ? /* @__PURE__ */ T.jsx("section", { className: "gmq-shell", children: "Loading game..." }) : /* @__PURE__ */ T.jsxs("section", { className: "gmq-shell", children: [
    /* @__PURE__ */ T.jsxs("header", { className: "gmq-header", children: [
      /* @__PURE__ */ T.jsxs("div", { children: [
        /* @__PURE__ */ T.jsx("h1", { children: "Anime Music Quiz" }),
        /* @__PURE__ */ T.jsxs("p", { className: "gmq-muted", children: [
          "Socket: ",
          pt ? "Connected" : "Disconnected",
          at ? ` | Lobby ${at.code}` : "",
          ei?.sessionId ? ` | Session ${ei.sessionId}` : ""
        ] })
      ] }),
      at ? /* @__PURE__ */ T.jsxs("div", { className: "gmq-actions", children: [
        /* @__PURE__ */ T.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: ml, disabled: Se === "invite", children: "Copy Invite" }),
        /* @__PURE__ */ T.jsx("button", { type: "button", className: "gmq-btn gmq-btn-danger", onClick: fu, disabled: Se === "leave", children: "Leave" })
      ] }) : null
    ] }),
    Re ? /* @__PURE__ */ T.jsx("div", { className: "gmq-alert gmq-alert-error", children: Re }) : null,
    j ? /* @__PURE__ */ T.jsx("div", { className: "gmq-alert gmq-alert-info", children: j }) : null,
    at ? /* @__PURE__ */ T.jsxs("div", { className: "gmq-grid", children: [
      /* @__PURE__ */ T.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ T.jsxs("h2", { children: [
          "Lobby ",
          at.code
        ] }),
        /* @__PURE__ */ T.jsxs("p", { className: "gmq-muted", children: [
          at.name || "Untitled",
          " | ",
          at.playerCount,
          "/",
          at.maxPlayers,
          " players"
        ] }),
        /* @__PURE__ */ T.jsx("ul", { className: "gmq-player-list", children: (at.players || []).map((d) => /* @__PURE__ */ T.jsxs("li", { children: [
          /* @__PURE__ */ T.jsxs("span", { children: [
            d.displayName,
            d.userId === at.host?.id ? " (Host)" : "",
            d.isConnected ? "" : " (offline)"
          ] }),
          ft === "GUESSING" ? /* @__PURE__ */ T.jsx("strong", { children: We.includes(d.userId) ? "Ready" : "Thinking" }) : null
        ] }, d.userId)) }),
        at.status === "WAITING" ? ou ? /* @__PURE__ */ T.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: Rc, disabled: Se === "start", children: "Start Game" }) : /* @__PURE__ */ T.jsx("p", { className: "gmq-muted", children: "Waiting for host to start." }) : null
      ] }),
      /* @__PURE__ */ T.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ T.jsx("h2", { children: "Media Status" }),
        /* @__PURE__ */ T.jsxs("div", { className: "gmq-status-row", children: [
          /* @__PURE__ */ T.jsx("span", { className: `gmq-status-dot gmq-status-dot-${bn.tone}` }),
          /* @__PURE__ */ T.jsxs("div", { className: "gmq-stack", children: [
            /* @__PURE__ */ T.jsxs("strong", { children: [
              "Source API: ",
              bn.label
            ] }),
            /* @__PURE__ */ T.jsxs("p", { className: "gmq-muted", children: [
              ue?.provider || "AnimeThemes",
              " | Latency ",
              yl
            ] }),
            /* @__PURE__ */ T.jsxs("p", { className: "gmq-muted", children: [
              "Last check: ",
              du,
              ue?.cached ? " (cached)" : ""
            ] }),
            ue?.ok === !1 && ue?.error ? /* @__PURE__ */ T.jsx("p", { className: "gmq-muted gmq-muted-warning", children: ue.error }) : null,
            Ll ? /* @__PURE__ */ T.jsx("p", { className: "gmq-muted gmq-muted-warning", children: Ll }) : null
          ] })
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: "gmq-status-row", children: [
          /* @__PURE__ */ T.jsx("span", { className: `gmq-status-dot gmq-status-dot-${Xl.tone}` }),
          /* @__PURE__ */ T.jsxs("div", { className: "gmq-stack", children: [
            /* @__PURE__ */ T.jsxs("strong", { children: [
              "Local Client: ",
              Xl.label
            ] }),
            /* @__PURE__ */ T.jsx("p", { className: "gmq-muted", children: Xl.detail })
          ] })
        ] }),
        /* @__PURE__ */ T.jsx(
          "button",
          {
            type: "button",
            className: "gmq-btn gmq-btn-secondary",
            onClick: () => gn({ forceRefresh: !0 }).catch(() => {
            }),
            disabled: dn,
            children: dn ? "Checking..." : "Refresh Source Status"
          }
        )
      ] }),
      /* @__PURE__ */ T.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ T.jsx("h2", { children: "Round" }),
        /* @__PURE__ */ T.jsxs("p", { className: "gmq-round-phase", children: [
          ft,
          " | ",
          Tc
        ] }),
        ft === "PENDING" && ba ? /* @__PURE__ */ T.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ T.jsx("p", { children: "Preparing media cache before round 1..." }),
          /* @__PURE__ */ T.jsxs("p", { className: "gmq-muted", children: [
            "Ready ",
            St.ready,
            "/",
            St.total,
            St.failed > 0 ? ` | Failed ${St.failed}` : ""
          ] }),
          El ? /* @__PURE__ */ T.jsx("p", { className: "gmq-muted gmq-muted-warning", children: El }) : null,
          El ? /* @__PURE__ */ T.jsx(
            "button",
            {
              type: "button",
              className: "gmq-btn gmq-btn-secondary",
              onClick: () => ui().catch(() => {
              }),
              disabled: ni,
              children: ni ? "Retrying..." : "Retry preload"
            }
          ) : null
        ] }) : null,
        si ? /* @__PURE__ */ T.jsxs("div", { className: "gmq-sample-player", children: [
          ht?.sample?.audioUrl ? /* @__PURE__ */ T.jsx(
            "audio",
            {
              ref: B,
              src: ht.sample.audioUrl,
              preload: "auto",
              onPlay: () => Me(!0),
              onPause: () => Me(!1),
              onEnded: () => Me(!1),
              onError: () => Ee(Pu("source_unavailable"))
            },
            `audio-${ht.roundId}`
          ) : null,
          ht?.sample?.videoUrl ? /* @__PURE__ */ T.jsx(
            "video",
            {
              ref: Y,
              src: ht.sample.videoUrl,
              preload: "auto",
              playsInline: !0,
              onPlay: () => Me(!0),
              onPause: () => Me(!1),
              onEnded: () => Me(!1),
              onError: () => Ee(Pu("source_unavailable"))
            },
            `video-${ht.roundId}`
          ) : null,
          /* @__PURE__ */ T.jsxs("label", { className: "gmq-volume-row", children: [
            /* @__PURE__ */ T.jsxs("span", { children: [
              "Volume ",
              ri
            ] }),
            /* @__PURE__ */ T.jsx(
              "input",
              {
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Ye,
                onChange: Nl
              }
            )
          ] }),
          _l ? /* @__PURE__ */ T.jsxs("div", { className: "gmq-stack", children: [
            /* @__PURE__ */ T.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
            /* @__PURE__ */ T.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Gl({ isAutoplay: !1 }).catch(() => {
            }), children: "Play sample" })
          ] }) : Vn === "video" && !ht?.sample?.audioUrl ? /* @__PURE__ */ T.jsxs("p", { className: "gmq-muted", children: [
            "Using video source audio. ",
            Fn
          ] }) : fl ? /* @__PURE__ */ T.jsxs("p", { className: "gmq-muted", children: [
            "Sample is playing. ",
            Fn
          ] }) : /* @__PURE__ */ T.jsx("p", { className: "gmq-muted", children: Fn }),
          Zn ? /* @__PURE__ */ T.jsx("p", { className: "gmq-muted gmq-muted-warning", children: Zn }) : null
        ] }) : null,
        ft === "GUESSING" && ht ? /* @__PURE__ */ T.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ T.jsxs("p", { children: [
            "Round ",
            ht.index,
            "/",
            ht.totalRounds
          ] }),
          Tl ? null : /* @__PURE__ */ T.jsx("p", { className: "gmq-muted", children: "Sample audio is unavailable for this round." }),
          /* @__PURE__ */ T.jsx("input", { value: ze, onChange: (d) => {
            ee(d.target.value), pa(null);
          }, placeholder: "Type anime name" }),
          /* @__PURE__ */ T.jsx("ul", { className: "gmq-search-results", children: Nc.map((d) => /* @__PURE__ */ T.jsx("li", { children: /* @__PURE__ */ T.jsx("button", { type: "button", onClick: () => {
            ee(d.title || ""), pa(Number.isInteger(d.id) ? d.id : null), $e([]);
          }, children: d.title }) }, `${d.id}-${d.title}`)) }),
          iu ? /* @__PURE__ */ T.jsx("p", { className: "gmq-muted gmq-muted-warning", children: iu }) : null,
          /* @__PURE__ */ T.jsxs("div", { className: "gmq-actions", children: [
            /* @__PURE__ */ T.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: zc, disabled: Se === "guess", children: "Submit Guess" }),
            /* @__PURE__ */ T.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: Ta, disabled: Se === "ready", children: pn ? "Unskip" : "Skip / Ready" })
          ] }),
          /* @__PURE__ */ T.jsxs("p", { className: "gmq-muted", children: [
            We.length,
            " ready"
          ] })
        ] }) : null,
        ft === "ANSWERS_REVEAL" ? /* @__PURE__ */ T.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ T.jsx("h3", { children: "Answers" }),
          /* @__PURE__ */ T.jsx("ul", { className: "gmq-answer-list", children: li.map((d) => /* @__PURE__ */ T.jsxs("li", { children: [
            /* @__PURE__ */ T.jsx("span", { children: Zt(d.userId) }),
            /* @__PURE__ */ T.jsx("span", { children: d.guessText || "(blank)" }),
            /* @__PURE__ */ T.jsx("strong", { children: d.isCorrect ? "Correct" : "Wrong" })
          ] }, `${d.userId}-${d.guessText || "blank"}`)) })
        ] }) : null,
        ft === "SOLUTION_REVEAL" && _e ? /* @__PURE__ */ T.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ T.jsx("h3", { children: "Solution" }),
          /* @__PURE__ */ T.jsxs("p", { children: [
            _e.correctAnime?.animeTitle,
            " (",
            _e.correctAnime?.themeType,
            ")"
          ] }),
          /* @__PURE__ */ T.jsx("p", { className: "gmq-muted", children: _e.correctAnime?.themeTitle || "" }),
          _e.video ? /* @__PURE__ */ T.jsxs("div", { className: "gmq-solution-video-wrap", children: [
            /* @__PURE__ */ T.jsx(
              "video",
              {
                ref: q,
                className: "gmq-solution-video",
                src: _e.video,
                preload: "auto",
                controls: !0,
                playsInline: !0,
                onError: () => dl('Could not play solution video in this browser. Use "Open video source".')
              },
              `solution-${ht?.roundId || _e.correctAnime?.animeId || "video"}`
            ),
            rn ? /* @__PURE__ */ T.jsxs("div", { className: "gmq-stack", children: [
              /* @__PURE__ */ T.jsx("p", { className: "gmq-muted", children: "Autoplay was blocked by your browser." }),
              /* @__PURE__ */ T.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => yn().catch(() => {
              }), children: "Play solution video" })
            ] }) : null,
            fn ? /* @__PURE__ */ T.jsx("p", { className: "gmq-muted gmq-muted-warning", children: fn }) : null,
            /* @__PURE__ */ T.jsx("a", { href: _e.video, target: "_blank", rel: "noreferrer", children: "Open video source" })
          ] }) : /* @__PURE__ */ T.jsx("p", { className: "gmq-muted", children: "Solution video is unavailable for this round." })
        ] }) : null,
        ft === "FINISHED" && va ? /* @__PURE__ */ T.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ T.jsx("h3", { children: "Final Result" }),
          /* @__PURE__ */ T.jsxs("p", { children: [
            "Winner: ",
            va.winner?.displayName || "Tie"
          ] })
        ] }) : null,
        Na.length ? /* @__PURE__ */ T.jsxs("div", { className: "gmq-stack", children: [
          /* @__PURE__ */ T.jsx("h3", { children: "Scoreboard" }),
          /* @__PURE__ */ T.jsx("ul", { className: "gmq-score-list", children: Na.map((d) => /* @__PURE__ */ T.jsxs("li", { className: "gmq-score-row", children: [
            /* @__PURE__ */ T.jsx("span", { children: d.displayName }),
            /* @__PURE__ */ T.jsx("strong", { children: d.score })
          ] }, d.userId)) })
        ] }) : null
      ] })
    ] }) : /* @__PURE__ */ T.jsxs("div", { className: "gmq-grid", children: [
      /* @__PURE__ */ T.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ T.jsx("h2", { children: "Create Lobby" }),
        /* @__PURE__ */ T.jsx("label", { children: "Name" }),
        /* @__PURE__ */ T.jsx("input", { value: I.name, onChange: (d) => Ut((A) => ({ ...A, name: d.target.value })), placeholder: "Optional lobby name" }),
        /* @__PURE__ */ T.jsxs("label", { className: "gmq-checkbox", children: [
          /* @__PURE__ */ T.jsx("input", { type: "checkbox", checked: I.isPrivate, onChange: (d) => Ut((A) => ({ ...A, isPrivate: d.target.checked })) }),
          " Private lobby"
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: "gmq-inline", children: [
          /* @__PURE__ */ T.jsx("input", { type: "number", min: "1", max: "50", value: I.roundCount, onChange: (d) => Ut((A) => ({ ...A, roundCount: Number(d.target.value || 10) })) }),
          /* @__PURE__ */ T.jsx("input", { type: "number", min: "5", max: "120", value: I.guessSeconds, onChange: (d) => Ut((A) => ({ ...A, guessSeconds: Number(d.target.value || 20) })) }),
          /* @__PURE__ */ T.jsx("input", { type: "number", min: "3", max: "60", value: I.sampleSeconds, onChange: (d) => Ut((A) => ({ ...A, sampleSeconds: Number(d.target.value || 10) })) })
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: "gmq-inline", children: [
          /* @__PURE__ */ T.jsx("select", { value: I.sourceMode, onChange: (d) => Ut((A) => ({ ...A, sourceMode: d.target.value })), children: cv.map((d) => /* @__PURE__ */ T.jsx("option", { value: d, children: d }, d)) }),
          /* @__PURE__ */ T.jsx("select", { value: I.selectionMode, onChange: (d) => Ut((A) => ({ ...A, selectionMode: d.target.value })), children: sv.map((d) => /* @__PURE__ */ T.jsx("option", { value: d, children: d }, d)) }),
          /* @__PURE__ */ T.jsx("select", { value: I.themeMode, onChange: (d) => Ut((A) => ({ ...A, themeMode: d.target.value })), children: rv.map((d) => /* @__PURE__ */ T.jsx("option", { value: d, children: d }, d)) })
        ] }),
        /* @__PURE__ */ T.jsx("label", { children: "Display Name" }),
        /* @__PURE__ */ T.jsx("input", { value: Sl, onChange: (d) => xl(d.target.value), placeholder: m?.nickname || m?.username || "Player" }),
        /* @__PURE__ */ T.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: ci, disabled: Se === "create", children: "Create Lobby" })
      ] }),
      /* @__PURE__ */ T.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ T.jsx("h2", { children: "Join Lobby" }),
        /* @__PURE__ */ T.jsx("label", { children: "Lobby Code" }),
        /* @__PURE__ */ T.jsx("input", { value: qt, onChange: (d) => un(vc(d.target.value)), placeholder: "ABC123" }),
        /* @__PURE__ */ T.jsx("label", { children: "Invite Token (private lobby)" }),
        /* @__PURE__ */ T.jsx("input", { value: Ul, onChange: (d) => ql(d.target.value.trim()), placeholder: "Paste invite token" }),
        /* @__PURE__ */ T.jsx("button", { type: "button", className: "gmq-btn gmq-btn-primary", onClick: () => $n(qt, Ul), disabled: Se === "join", children: "Join Lobby" })
      ] }),
      /* @__PURE__ */ T.jsxs("article", { className: "gmq-card", children: [
        /* @__PURE__ */ T.jsx("h2", { children: "Joinable Lobbies" }),
        /* @__PURE__ */ T.jsxs("div", { className: "gmq-inline", children: [
          /* @__PURE__ */ T.jsx("input", { value: W, onChange: (d) => lt(d.target.value), placeholder: "Search by code/name" }),
          /* @__PURE__ */ T.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => Ie(W), children: "Refresh" })
        ] }),
        /* @__PURE__ */ T.jsx("ul", { className: "gmq-lobby-list", children: H.map((d) => /* @__PURE__ */ T.jsxs("li", { className: "gmq-lobby-item", children: [
          /* @__PURE__ */ T.jsxs("div", { children: [
            /* @__PURE__ */ T.jsx("div", { className: "gmq-lobby-title", children: d.name || d.code }),
            /* @__PURE__ */ T.jsxs("div", { className: "gmq-muted", children: [
              d.code,
              " | ",
              d.playerCount,
              "/",
              d.maxPlayers
            ] })
          ] }),
          /* @__PURE__ */ T.jsx("button", { type: "button", className: "gmq-btn gmq-btn-secondary", onClick: () => $n(d.code, ""), children: "Join" })
        ] }, d.code)) })
      ] })
    ] })
  ] });
}
const Yh = document.getElementById("game-root");
Yh && o0.createRoot(Yh).render(/* @__PURE__ */ T.jsx(gv, {}));
