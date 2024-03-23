import Pe, { useEffect as pr, useMemo as $e, useRef as F } from "react";
var te = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function gr() {
  if (Oe)
    return W;
  Oe = 1;
  var n = Pe, a = Symbol.for("react.element"), l = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(g, m, T) {
    var h, C = {}, O = null, P = null;
    T !== void 0 && (O = "" + T), m.key !== void 0 && (O = "" + m.key), m.ref !== void 0 && (P = m.ref);
    for (h in m)
      c.call(m, h) && !p.hasOwnProperty(h) && (C[h] = m[h]);
    if (g && g.defaultProps)
      for (h in m = g.defaultProps, m)
        C[h] === void 0 && (C[h] = m[h]);
    return { $$typeof: a, type: g, key: O, ref: P, props: C, _owner: d.current };
  }
  return W.Fragment = l, W.jsx = f, W.jsxs = f, W;
}
var Y = {}, Se;
function yr() {
  if (Se)
    return Y;
  Se = 1;
  var n = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return n.NODE_ENV !== "production" && function() {
    var a = Pe, l = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), m = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), ke = Symbol.for("react.offscreen"), ne = Symbol.iterator, De = "@@iterator";
    function Fe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ne && e[ne] || e[De];
      return typeof r == "function" ? r : null;
    }
    var $ = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          t[i - 1] = arguments[i];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var i = $.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var v = t.map(function(s) {
          return String(s);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Ie = !1, We = !1, Ye = !1, Le = !1, Me = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ve(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === f || Me || e === p || e === h || e === C || Le || e === ke || Ie || We || Ye || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === O || e.$$typeof === g || e.$$typeof === m || e.$$typeof === T || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var i = e.displayName;
      if (i)
        return i;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case c:
          return "Portal";
        case f:
          return "Profiler";
        case p:
          return "StrictMode";
        case h:
          return "Suspense";
        case C:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return ie(r) + ".Consumer";
          case g:
            var t = e;
            return ie(t._context) + ".Provider";
          case T:
            return Ue(e, e.render, "ForwardRef");
          case O:
            var i = e.displayName || null;
            return i !== null ? i : w(e.type) || "Memo";
          case P: {
            var u = e, v = u._payload, s = u._init;
            try {
              return w(s(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, A = 0, oe, se, ue, le, ce, fe, ve;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Be() {
      {
        if (A === 0) {
          oe = console.log, se = console.info, ue = console.warn, le = console.error, ce = console.group, fe = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function qe() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: oe
            }),
            info: S({}, e, {
              value: se
            }),
            warn: S({}, e, {
              value: ue
            }),
            error: S({}, e, {
              value: le
            }),
            group: S({}, e, {
              value: ce
            }),
            groupCollapsed: S({}, e, {
              value: fe
            }),
            groupEnd: S({}, e, {
              value: ve
            })
          });
        }
        A < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = $.ReactCurrentDispatcher, H;
    function V(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            H = i && i[1] || "";
          }
        return `
` + H + e;
      }
    }
    var K = !1, U;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Ge();
    }
    function pe(e, r) {
      if (!e || K)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var i;
      K = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = z.current, z.current = null, Be();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (j) {
              i = j;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (j) {
              i = j;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            i = j;
          }
          e();
        }
      } catch (j) {
        if (j && i && typeof j.stack == "string") {
          for (var o = j.stack.split(`
`), b = i.stack.split(`
`), y = o.length - 1, _ = b.length - 1; y >= 1 && _ >= 0 && o[y] !== b[_]; )
            _--;
          for (; y >= 1 && _ >= 0; y--, _--)
            if (o[y] !== b[_]) {
              if (y !== 1 || _ !== 1)
                do
                  if (y--, _--, _ < 0 || o[y] !== b[_]) {
                    var R = `
` + o[y].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, R), R;
                  }
                while (y >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        K = !1, z.current = v, qe(), Error.prepareStackTrace = u;
      }
      var D = e ? e.displayName || e.name : "", Ce = D ? V(D) : "";
      return typeof e == "function" && U.set(e, Ce), Ce;
    }
    function Je(e, r, t) {
      return pe(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ne(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case h:
          return V("Suspense");
        case C:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            return Je(e.render);
          case O:
            return B(e.type, r, t);
          case P: {
            var i = e, u = i._payload, v = i._init;
            try {
              return B(v(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, ge = {}, ye = $.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function ze(e, r, t, i, u) {
      {
        var v = Function.call.bind(q);
        for (var s in e)
          if (v(e, s)) {
            var o = void 0;
            try {
              if (typeof e[s] != "function") {
                var b = Error((i || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              o = e[s](r, s, i, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              o = y;
            }
            o && !(o instanceof Error) && (G(u), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", t, s, typeof o), G(null)), o instanceof Error && !(o.message in ge) && (ge[o.message] = !0, G(u), E("Failed %s type: %s", t, o.message), G(null));
          }
      }
    }
    var He = Array.isArray;
    function X(e) {
      return He(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function _e(e) {
      if (Xe(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), me(e);
    }
    var I = $.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, Ee, Z;
    Z = {};
    function Qe(e) {
      if (q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function er(e) {
      if (q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rr(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = w(I.current.type);
        Z[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(I.current.type), e.ref), Z[t] = !0);
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          he || (he = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, t, i, u, v, s) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ir(e, r, t, i, u) {
      {
        var v, s = {}, o = null, b = null;
        t !== void 0 && (_e(t), o = "" + t), er(r) && (_e(r.key), o = "" + r.key), Qe(r) && (b = r.ref, rr(r, u));
        for (v in r)
          q.call(r, v) && !Ze.hasOwnProperty(v) && (s[v] = r[v]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (v in y)
            s[v] === void 0 && (s[v] = y[v]);
        }
        if (o || b) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && tr(s, _), b && nr(s, _);
        }
        return ar(e, o, b, u, i, I.current, s);
      }
    }
    var Q = $.ReactCurrentOwner, be = $.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function Re() {
      {
        if (Q.current) {
          var e = w(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var xe = {};
    function sr(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = sr(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var i = "";
        e && e._owner && e._owner !== Q.current && (i = " It was passed a child from " + w(e._owner.type) + "."), k(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, i), k(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            re(i) && Te(i, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = Fe(e);
          if (typeof u == "function" && u !== e.entries)
            for (var v = u.call(e), s; !(s = v.next()).done; )
              re(s.value) && Te(s.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === T || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === O))
          t = r.propTypes;
        else
          return;
        if (t) {
          var i = w(r);
          ze(t, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var u = w(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var i = r[t];
          if (i !== "children" && i !== "key") {
            k(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function je(e, r, t, i, u, v) {
      {
        var s = Ve(e);
        if (!s) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = or(u);
          b ? o += b : o += Re();
          var y;
          e === null ? y = "null" : X(e) ? y = "array" : e !== void 0 && e.$$typeof === l ? (y = "<" + (w(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, o);
        }
        var _ = ir(e, r, t, u, v);
        if (_ == null)
          return _;
        if (s) {
          var R = r.children;
          if (R !== void 0)
            if (i)
              if (X(R)) {
                for (var D = 0; D < R.length; D++)
                  we(R[D], e);
                Object.freeze && Object.freeze(R);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(R, e);
        }
        return e === d ? lr(_) : ur(_), _;
      }
    }
    function cr(e, r, t) {
      return je(e, r, t, !0);
    }
    function fr(e, r, t) {
      return je(e, r, t, !1);
    }
    var vr = fr, dr = cr;
    Y.Fragment = d, Y.jsx = vr, Y.jsxs = dr;
  }(), Y;
}
var mr = {};
mr.NODE_ENV === "production" ? te.exports = gr() : te.exports = yr();
var x = te.exports;
const _r = (n) => {
  let a = `translate(${n.translate.x},${n.translate.y}) rotate(${n.rotate}) scale(${n.scale.x},${n.scale.y}) skewX(${n.skew.x}) skewY(${n.skew.y})`, l = `${n.origin.x} ${n.origin.y}`;
  return {
    transform: a,
    origin: l
  };
}, L = (n, a, l) => a && a.map((c, d) => {
  let {
    key: p,
    type: f,
    ...g
  } = c;
  return /* @__PURE__ */ x.jsx(wr, { type: f, rootRef: n, path: [...l, d], ...g }, p);
}), M = (n, a, l) => {
  pr(() => (n.current && (n.current[l.join("_")] = a), () => {
    n.current && delete n.current[l.join("_")];
  }), [l]);
}, J = (n) => $e(() => _r(n), [n]), hr = ({
  rootRef: n,
  nodeList: a,
  path: l,
  props: c
}) => {
  const d = F(null), p = L(n, a, l);
  return M(n, d, l), /* @__PURE__ */ x.jsxs("svg", { ref: d, ...c, style: {
    overflow: "visible"
  }, children: [
    /* @__PURE__ */ x.jsx("rect", { width: "100%", height: "100%", fill: c.background }),
    p
  ] });
}, N = {
  translate: {
    x: 0,
    y: 0
  },
  scale: {
    x: 1,
    y: 1
  },
  skew: {
    x: 0,
    y: 0
  },
  rotate: 0,
  origin: {
    x: 0,
    y: 0
  }
}, Er = ({
  rootRef: n,
  nodeList: a,
  path: l,
  transform: c = N,
  props: d
}) => {
  const p = F(null), f = J(c), g = L(n, a, l);
  return M(n, p, l), /* @__PURE__ */ x.jsx("g", { ref: p, transform: f.transform, "transform-origin": f.origin, ...d, children: g });
}, br = ({
  id: n,
  rootRef: a,
  nodeList: l,
  path: c,
  transform: d = N,
  props: p
}) => {
  const f = F(null), g = J(d), m = L(a, l, c);
  return M(a, f, c), /* @__PURE__ */ x.jsx("rect", { ref: f, id: n, transform: g.transform, "transform-origin": g.origin, ...p, children: m });
}, Rr = ({
  id: n,
  rootRef: a,
  nodeList: l,
  path: c,
  transform: d = N,
  props: p
}) => {
  const f = F(null), g = J(d), m = L(a, l, c);
  return M(a, f, c), /* @__PURE__ */ x.jsx("ellipse", { ref: f, id: n, transform: g.transform, "transform-origin": g.origin, ...p, children: m });
}, xr = (n, a, l, c) => {
  const d = (p = "") => {
    let f = c[l - 1];
    return f.x !== f.x1 || f.y !== f.y1 || a.x !== a.x0 || a.y !== a.y0 ? f.break || f.type === "startNode" ? `${n}C${f.x1},${f.y1} ${a.x0},${a.y0} ${a.x},${a.y}${p}` : `${n}S${a.x0},${a.y0} ${a.x},${a.y}${p}` : `${n}L${a.x},${a.y}${p}`;
  };
  switch (a.type) {
    case "startNode":
      return `${n}M${a.x},${a.y}`;
    case "node":
    case "endNode":
      return d();
    case "endLoopNode":
      return d("z");
  }
  return n;
}, Tr = ({
  id: n,
  rootRef: a,
  nodeList: l,
  path: c,
  transform: d = N,
  segments: p = [],
  props: f
}) => {
  const g = F(null), m = J(d), T = L(a, l, c), h = $e(() => p.reduce(xr, ""), [p]);
  return M(a, g, c), /* @__PURE__ */ x.jsx("path", { ref: g, id: n, d: h, transform: m.transform, "transform-origin": m.origin, ...f, children: T });
}, wr = ({
  rootRef: n = F({}),
  path: a = [],
  type: l,
  ...c
}) => {
  switch (l) {
    case "svg":
      return /* @__PURE__ */ x.jsx(hr, { rootRef: n, path: a, ...c });
    case "group":
      return /* @__PURE__ */ x.jsx(Er, { rootRef: n, path: a, ...c });
    case "rect":
      return /* @__PURE__ */ x.jsx(br, { rootRef: n, path: a, ...c });
    case "ellipse":
      return /* @__PURE__ */ x.jsx(Rr, { rootRef: n, path: a, ...c });
    case "path":
      return /* @__PURE__ */ x.jsx(Tr, { rootRef: n, path: a, ...c });
  }
};
export {
  wr as SVGElement
};
