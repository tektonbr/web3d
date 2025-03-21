/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
!(function r(a, s, l) {
  function d(t, e) {
    if (!s[t]) {
      if (!a[t]) {
        var n = "function" == typeof require && require;
        if (!e && n) return n(t, !0);
        if (u) return u(t, !0);
        var o = new Error("Cannot find module '" + t + "'");
        throw ((o.code = "MODULE_NOT_FOUND"), o);
      }
      var i = (s[t] = { exports: {} });
      a[t][0].call(
        i.exports,
        function (e) {
          return d(a[t][1][e] || e);
        },
        i,
        i.exports,
        r,
        a,
        s,
        l
      );
    }
    return s[t].exports;
  }
  for (
    var u = "function" == typeof require && require, e = 0;
    e < l.length;
    e++
  )
    d(l[e]);
  return d;
})(
  {
    1: [function (e, t, n) {}, {}],
    2: [
      function (i, r, e) {
        (function (e) {
          var t,
            n = void 0 !== e ? e : "undefined" != typeof window ? window : {},
            o = i(1);
          "undefined" != typeof document
            ? (t = document)
            : (t = n["__GLOBAL_DOCUMENT_CACHE@4"]) ||
              (t = n["__GLOBAL_DOCUMENT_CACHE@4"] = o),
            (r.exports = t);
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      { 1: 1 },
    ],
    3: [
      function (e, n, t) {
        (function (e) {
          var t;
          (t =
            "undefined" != typeof window
              ? window
              : void 0 !== e
              ? e
              : "undefined" != typeof self
              ? self
              : {}),
            (n.exports = t);
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    4: [
      function (e, t, n) {
        var o,
          i,
          r = (t.exports = {});
        function a() {
          throw new Error("setTimeout has not been defined");
        }
        function s() {
          throw new Error("clearTimeout has not been defined");
        }
        function l(t) {
          if (o === setTimeout) return setTimeout(t, 0);
          if ((o === a || !o) && setTimeout)
            return (o = setTimeout), setTimeout(t, 0);
          try {
            return o(t, 0);
          } catch (e) {
            try {
              return o.call(null, t, 0);
            } catch (e) {
              return o.call(this, t, 0);
            }
          }
        }
        !(function () {
          try {
            o = "function" == typeof setTimeout ? setTimeout : a;
          } catch (e) {
            o = a;
          }
          try {
            i = "function" == typeof clearTimeout ? clearTimeout : s;
          } catch (e) {
            i = s;
          }
        })();
        var d,
          u = [],
          c = !1,
          f = -1;
        function p() {
          c &&
            d &&
            ((c = !1),
            d.length ? (u = d.concat(u)) : (f = -1),
            u.length && m());
        }
        function m() {
          if (!c) {
            var e = l(p);
            c = !0;
            for (var t = u.length; t; ) {
              for (d = u, u = []; ++f < t; ) d && d[f].run();
              (f = -1), (t = u.length);
            }
            (d = null),
              (c = !1),
              (function (t) {
                if (i === clearTimeout) return clearTimeout(t);
                if ((i === s || !i) && clearTimeout)
                  return (i = clearTimeout), clearTimeout(t);
                try {
                  i(t);
                } catch (e) {
                  try {
                    return i.call(null, t);
                  } catch (e) {
                    return i.call(this, t);
                  }
                }
              })(e);
          }
        }
        function h(e, t) {
          (this.fun = e), (this.array = t);
        }
        function v() {}
        (r.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (1 < arguments.length)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          u.push(new h(e, t)), 1 !== u.length || c || l(m);
        }),
          (h.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (r.title = "browser"),
          (r.browser = !0),
          (r.env = {}),
          (r.argv = []),
          (r.version = ""),
          (r.versions = {}),
          (r.on = v),
          (r.addListener = v),
          (r.once = v),
          (r.off = v),
          (r.removeListener = v),
          (r.removeAllListeners = v),
          (r.emit = v),
          (r.prependListener = v),
          (r.prependOnceListener = v),
          (r.listeners = function (e) {
            return [];
          }),
          (r.binding = function (e) {
            throw new Error("process.binding is not supported");
          }),
          (r.cwd = function () {
            return "/";
          }),
          (r.chdir = function (e) {
            throw new Error("process.chdir is not supported");
          }),
          (r.umask = function () {
            return 0;
          });
      },
      {},
    ],
    5: [
      function (e, c, t) {
        (function (n) {
          !(function (e) {
            var t = setTimeout;
            function o() {}
            function r(e) {
              if ("object" != typeof this)
                throw new TypeError("Promises must be constructed via new");
              if ("function" != typeof e) throw new TypeError("not a function");
              (this._state = 0),
                (this._handled = !1),
                (this._value = void 0),
                (this._deferreds = []),
                u(e, this);
            }
            function i(n, o) {
              for (; 3 === n._state; ) n = n._value;
              0 !== n._state
                ? ((n._handled = !0),
                  r._immediateFn(function () {
                    var e = 1 === n._state ? o.onFulfilled : o.onRejected;
                    if (null !== e) {
                      var t;
                      try {
                        t = e(n._value);
                      } catch (e) {
                        return void s(o.promise, e);
                      }
                      a(o.promise, t);
                    } else (1 === n._state ? a : s)(o.promise, n._value);
                  }))
                : n._deferreds.push(o);
            }
            function a(t, e) {
              try {
                if (e === t)
                  throw new TypeError(
                    "A promise cannot be resolved with itself."
                  );
                if (e && ("object" == typeof e || "function" == typeof e)) {
                  var n = e.then;
                  if (e instanceof r)
                    return (t._state = 3), (t._value = e), void l(t);
                  if ("function" == typeof n)
                    return void u(
                      ((o = n),
                      (i = e),
                      function () {
                        o.apply(i, arguments);
                      }),
                      t
                    );
                }
                (t._state = 1), (t._value = e), l(t);
              } catch (e) {
                s(t, e);
              }
              var o, i;
            }
            function s(e, t) {
              (e._state = 2), (e._value = t), l(e);
            }
            function l(e) {
              2 === e._state &&
                0 === e._deferreds.length &&
                r._immediateFn(function () {
                  e._handled || r._unhandledRejectionFn(e._value);
                });
              for (var t = 0, n = e._deferreds.length; t < n; t++)
                i(e, e._deferreds[t]);
              e._deferreds = null;
            }
            function d(e, t, n) {
              (this.onFulfilled = "function" == typeof e ? e : null),
                (this.onRejected = "function" == typeof t ? t : null),
                (this.promise = n);
            }
            function u(e, t) {
              var n = !1;
              try {
                e(
                  function (e) {
                    n || ((n = !0), a(t, e));
                  },
                  function (e) {
                    n || ((n = !0), s(t, e));
                  }
                );
              } catch (e) {
                if (n) return;
                (n = !0), s(t, e);
              }
            }
            (r.prototype.catch = function (e) {
              return this.then(null, e);
            }),
              (r.prototype.then = function (e, t) {
                var n = new this.constructor(o);
                return i(this, new d(e, t, n)), n;
              }),
              (r.all = function (e) {
                var s = Array.prototype.slice.call(e);
                return new r(function (o, i) {
                  if (0 === s.length) return o([]);
                  var r = s.length;
                  function a(t, e) {
                    try {
                      if (
                        e &&
                        ("object" == typeof e || "function" == typeof e)
                      ) {
                        var n = e.then;
                        if ("function" == typeof n)
                          return void n.call(
                            e,
                            function (e) {
                              a(t, e);
                            },
                            i
                          );
                      }
                      (s[t] = e), 0 == --r && o(s);
                    } catch (e) {
                      i(e);
                    }
                  }
                  for (var e = 0; e < s.length; e++) a(e, s[e]);
                });
              }),
              (r.resolve = function (t) {
                return t && "object" == typeof t && t.constructor === r
                  ? t
                  : new r(function (e) {
                      e(t);
                    });
              }),
              (r.reject = function (n) {
                return new r(function (e, t) {
                  t(n);
                });
              }),
              (r.race = function (i) {
                return new r(function (e, t) {
                  for (var n = 0, o = i.length; n < o; n++) i[n].then(e, t);
                });
              }),
              (r._immediateFn =
                ("function" == typeof n &&
                  function (e) {
                    n(e);
                  }) ||
                function (e) {
                  t(e, 0);
                }),
              (r._unhandledRejectionFn = function (e) {
                "undefined" != typeof console &&
                  console &&
                  console.warn("Possible Unhandled Promise Rejection:", e);
              }),
              (r._setImmediateFn = function (e) {
                r._immediateFn = e;
              }),
              (r._setUnhandledRejectionFn = function (e) {
                r._unhandledRejectionFn = e;
              }),
              void 0 !== c && c.exports
                ? (c.exports = r)
                : e.Promise || (e.Promise = r);
          })(this);
        }.call(this, e(6).setImmediate));
      },
      { 6: 6 },
    ],
    6: [
      function (l, e, d) {
        (function (e, t) {
          var o = l(4).nextTick,
            n = Function.prototype.apply,
            i = Array.prototype.slice,
            r = {},
            a = 0;
          function s(e, t) {
            (this._id = e), (this._clearFn = t);
          }
          (d.setTimeout = function () {
            return new s(n.call(setTimeout, window, arguments), clearTimeout);
          }),
            (d.setInterval = function () {
              return new s(
                n.call(setInterval, window, arguments),
                clearInterval
              );
            }),
            (d.clearTimeout = d.clearInterval =
              function (e) {
                e.close();
              }),
            (s.prototype.unref = s.prototype.ref = function () {}),
            (s.prototype.close = function () {
              this._clearFn.call(window, this._id);
            }),
            (d.enroll = function (e, t) {
              clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
            }),
            (d.unenroll = function (e) {
              clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
            }),
            (d._unrefActive = d.active =
              function (e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                0 <= t &&
                  (e._idleTimeoutId = setTimeout(function () {
                    e._onTimeout && e._onTimeout();
                  }, t));
              }),
            (d.setImmediate =
              "function" == typeof e
                ? e
                : function (e) {
                    var t = a++,
                      n = !(arguments.length < 2) && i.call(arguments, 1);
                    return (
                      (r[t] = !0),
                      o(function () {
                        r[t] &&
                          (n ? e.apply(null, n) : e.call(null),
                          d.clearImmediate(t));
                      }),
                      t
                    );
                  }),
            (d.clearImmediate =
              "function" == typeof t
                ? t
                : function (e) {
                    delete r[e];
                  });
        }.call(this, l(6).setImmediate, l(6).clearImmediate));
      },
      { 4: 4, 6: 6 },
    ],
    7: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var o,
          a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          i = e(9),
          r = (o = i) && o.__esModule ? o : { default: o },
          s = e(17),
          l = e(29);
        var d = {
          lang: "en",
          en: s.EN,
          language: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            if (null != t && t.length) {
              if ("string" != typeof t[0])
                throw new TypeError("Language code must be a string value");
              if (!/^[a-z]{2,3}((\-|_)[a-z]{2})?$/i.test(t[0]))
                throw new TypeError(
                  "Language code must have format 2-3 letters and. optionally, hyphen, underscore followed by 2 more letters"
                );
              (d.lang = t[0]),
                void 0 === d[t[0]]
                  ? ((t[1] =
                      null !== t[1] && void 0 !== t[1] && "object" === a(t[1])
                        ? t[1]
                        : {}),
                    (d[t[0]] = (0, l.isObjectEmpty)(t[1]) ? s.EN : t[1]))
                  : null !== t[1] &&
                    void 0 !== t[1] &&
                    "object" === a(t[1]) &&
                    (d[t[0]] = t[1]);
            }
            return d.lang;
          },
          t: function (e) {
            var t =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            if ("string" == typeof e && e.length) {
              var n = void 0,
                o = void 0,
                i = d.language(),
                r = function (e, t, n) {
                  return "object" !== (void 0 === e ? "undefined" : a(e)) ||
                    "number" != typeof t ||
                    "number" != typeof n
                    ? e
                    : [
                        function () {
                          return arguments.length <= 1 ? void 0 : arguments[1];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : arguments.length <= 2
                            ? void 0
                            : arguments[2];
                        },
                        function () {
                          return 0 ===
                            (arguments.length <= 0 ? void 0 : arguments[0]) ||
                            1 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : arguments.length <= 2
                            ? void 0
                            : arguments[2];
                        },
                        function () {
                          return (arguments.length <= 0
                            ? void 0
                            : arguments[0]) %
                            10 ==
                            1 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 !=
                              11
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 0 !==
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0]) ||
                            11 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 ===
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) ||
                              12 ===
                                (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : 2 <
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) <
                                20
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : arguments.length <= 4
                            ? void 0
                            : arguments[4];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 0 ===
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) ||
                              (0 <
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  100 &&
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  100 <
                                  20)
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return (arguments.length <= 0
                            ? void 0
                            : arguments[0]) %
                            10 ==
                            1 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 !=
                              11
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 <=
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  10 &&
                              ((arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                10 ||
                                20 <=
                                  (arguments.length <= 0
                                    ? void 0
                                    : arguments[0]) %
                                    100)
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : [3];
                        },
                        function () {
                          return (arguments.length <= 0
                            ? void 0
                            : arguments[0]) %
                            10 ==
                            1 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 !=
                              11
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 <=
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  10 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                10 <=
                                4 &&
                              ((arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                10 ||
                                20 <=
                                  (arguments.length <= 0
                                    ? void 0
                                    : arguments[0]) %
                                    100)
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 <=
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) <=
                                4
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 <=
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  10 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                10 <=
                                4 &&
                              ((arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                10 ||
                                20 <=
                                  (arguments.length <= 0
                                    ? void 0
                                    : arguments[0]) %
                                    100)
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return (arguments.length <= 0
                            ? void 0
                            : arguments[0]) %
                            100 ==
                            1
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 ==
                              2
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 ==
                                3 ||
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 ==
                                4
                            ? arguments.length <= 4
                              ? void 0
                              : arguments[4]
                            : arguments.length <= 1
                            ? void 0
                            : arguments[1];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : 2 <
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) <
                                7
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : 6 <
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) <
                                11
                            ? arguments.length <= 4
                              ? void 0
                              : arguments[4]
                            : arguments.length <= 5
                            ? void 0
                            : arguments[5];
                        },
                        function () {
                          return 0 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 1 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : 2 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : 3 <=
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  100 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <=
                                10
                            ? arguments.length <= 4
                              ? void 0
                              : arguments[4]
                            : 11 <=
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100
                            ? arguments.length <= 5
                              ? void 0
                              : arguments[5]
                            : arguments.length <= 6
                            ? void 0
                            : arguments[6];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 0 ===
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) ||
                              (1 <
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  100 &&
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  100 <
                                  11)
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : 10 <
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  100 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                20
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : arguments.length <= 4
                            ? void 0
                            : arguments[4];
                        },
                        function () {
                          return (arguments.length <= 0
                            ? void 0
                            : arguments[0]) %
                            10 ==
                            1
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : (arguments.length <= 0 ? void 0 : arguments[0]) %
                                10 ==
                              2
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return 11 !==
                            (arguments.length <= 0 ? void 0 : arguments[0]) &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 ==
                              1
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : arguments.length <= 2
                            ? void 0
                            : arguments[2];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 <=
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) %
                                  10 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                10 <=
                                4 &&
                              ((arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                10 ||
                                20 <=
                                  (arguments.length <= 0
                                    ? void 0
                                    : arguments[0]) %
                                    100)
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : 8 !==
                                (arguments.length <= 0
                                  ? void 0
                                  : arguments[0]) &&
                              11 !==
                                (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : arguments.length <= 4
                            ? void 0
                            : arguments[4];
                        },
                        function () {
                          return 0 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : arguments.length <= 2
                            ? void 0
                            : arguments[2];
                        },
                        function () {
                          return 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 2 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : 3 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 3
                              ? void 0
                              : arguments[3]
                            : arguments.length <= 4
                            ? void 0
                            : arguments[4];
                        },
                        function () {
                          return 0 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 1
                              ? void 0
                              : arguments[1]
                            : 1 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                            ? arguments.length <= 2
                              ? void 0
                              : arguments[2]
                            : arguments.length <= 3
                            ? void 0
                            : arguments[3];
                        },
                      ][n].apply(null, [t].concat(e));
                };
              return (
                void 0 !== d[i] &&
                  ((n = d[i][e]),
                  null !== t &&
                    "number" == typeof t &&
                    ((o = d[i]["mejs.plural-form"]),
                    (n = r.apply(null, [n, t, o])))),
                !n &&
                  d.en &&
                  ((n = d.en[e]),
                  null !== t &&
                    "number" == typeof t &&
                    ((o = d.en["mejs.plural-form"]),
                    (n = r.apply(null, [n, t, o])))),
                (n = n || e),
                null !== t && "number" == typeof t && (n = n.replace("%1", t)),
                (0, l.escapeHTML)(n)
              );
            }
            return e;
          },
        };
        (r.default.i18n = d),
          "undefined" != typeof mejsL10n &&
            r.default.i18n.language(mejsL10n.language, mejsL10n.strings),
          (n.default = d);
      },
      { 17: 17, 29: 29, 9: 9 },
    ],
    8: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var L =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          F = o(e(3)),
          I = o(e(2)),
          j = o(e(9)),
          M = e(29),
          O = e(30),
          D = e(10),
          R = e(27);
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = function e(t, n, o) {
          var c = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var f = this;
          (o = Array.isArray(o) ? o : null),
            (f.defaults = {
              renderers: [],
              fakeNodeName: "mediaelementwrapper",
              pluginPath: "build/",
              shimScriptAccess: "sameDomain",
            }),
            (n = Object.assign(f.defaults, n)),
            (f.mediaElement = I.default.createElement(n.fakeNodeName));
          var i = t,
            r = !1;
          if (
            ("string" == typeof t
              ? (f.mediaElement.originalNode = I.default.getElementById(t))
              : (i = (f.mediaElement.originalNode = t).id),
            void 0 === f.mediaElement.originalNode ||
              null === f.mediaElement.originalNode)
          )
            return null;
          (f.mediaElement.options = n),
            (i = i || "mejs_" + Math.random().toString().slice(2)),
            f.mediaElement.originalNode.setAttribute("id", i + "_from_mejs");
          var a = f.mediaElement.originalNode.tagName.toLowerCase();
          -1 < ["video", "audio"].indexOf(a) &&
            !f.mediaElement.originalNode.getAttribute("preload") &&
            f.mediaElement.originalNode.setAttribute("preload", "none"),
            f.mediaElement.originalNode.parentNode.insertBefore(
              f.mediaElement,
              f.mediaElement.originalNode
            ),
            f.mediaElement.appendChild(f.mediaElement.originalNode);
          var s = function (t, e) {
              if (
                "https:" === F.default.location.protocol &&
                0 === t.indexOf("http:") &&
                R.IS_IOS &&
                -1 < j.default.html5media.mediaTypes.indexOf(e)
              ) {
                var n = new XMLHttpRequest();
                (n.onreadystatechange = function () {
                  if (4 !== this.readyState || 200 !== this.status) return t;
                  var e = (
                    F.default.URL || F.default.webkitURL
                  ).createObjectURL(this.response);
                  return f.mediaElement.originalNode.setAttribute("src", e), e;
                }),
                  n.open("GET", t),
                  (n.responseType = "blob"),
                  n.send();
              }
              return t;
            },
            l = void 0;
          if (null !== o) l = o;
          else if (null !== f.mediaElement.originalNode)
            switch (
              ((l = []), f.mediaElement.originalNode.nodeName.toLowerCase())
            ) {
              case "iframe":
                l.push({
                  type: "",
                  src: f.mediaElement.originalNode.getAttribute("src"),
                });
                break;
              case "audio":
              case "video":
                var d = f.mediaElement.originalNode.children.length,
                  u = f.mediaElement.originalNode.getAttribute("src");
                if (u) {
                  var p = f.mediaElement.originalNode,
                    m = (0, O.formatType)(u, p.getAttribute("type"));
                  l.push({ type: m, src: s(u, m) });
                }
                for (var h = 0; h < d; h++) {
                  var v = f.mediaElement.originalNode.children[h];
                  if ("source" === v.tagName.toLowerCase()) {
                    var y = v.getAttribute("src"),
                      g = (0, O.formatType)(y, v.getAttribute("type"));
                    l.push({ type: g, src: s(y, g) });
                  }
                }
            }
          (f.mediaElement.id = i),
            (f.mediaElement.renderers = {}),
            (f.mediaElement.events = {}),
            (f.mediaElement.promises = []),
            (f.mediaElement.renderer = null),
            (f.mediaElement.rendererName = null),
            (f.mediaElement.changeRenderer = function (e, t) {
              var n = c,
                o = 2 < Object.keys(t[0]).length ? t[0] : t[0].src;
              if (
                void 0 !== n.mediaElement.renderer &&
                null !== n.mediaElement.renderer &&
                n.mediaElement.renderer.name === e
              )
                return (
                  n.mediaElement.renderer.pause(),
                  n.mediaElement.renderer.stop &&
                    n.mediaElement.renderer.stop(),
                  n.mediaElement.renderer.show(),
                  n.mediaElement.renderer.setSrc(o),
                  !0
                );
              void 0 !== n.mediaElement.renderer &&
                null !== n.mediaElement.renderer &&
                (n.mediaElement.renderer.pause(),
                n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(),
                n.mediaElement.renderer.hide());
              var i = n.mediaElement.renderers[e],
                r = null;
              if (null != i)
                return (
                  i.show(),
                  i.setSrc(o),
                  (n.mediaElement.renderer = i),
                  (n.mediaElement.rendererName = e),
                  !0
                );
              for (
                var a = n.mediaElement.options.renderers.length
                    ? n.mediaElement.options.renderers
                    : D.renderer.order,
                  s = 0,
                  l = a.length;
                s < l;
                s++
              ) {
                var d = a[s];
                if (d === e) {
                  r = D.renderer.renderers[d];
                  var u = Object.assign(r.options, n.mediaElement.options);
                  return (
                    ((i = r.create(n.mediaElement, u, t)).name = e),
                    (n.mediaElement.renderers[r.name] = i),
                    (n.mediaElement.renderer = i),
                    (n.mediaElement.rendererName = e),
                    i.show(),
                    !0
                  );
                }
              }
              return !1;
            }),
            (f.mediaElement.setSize = function (e, t) {
              void 0 !== f.mediaElement.renderer &&
                null !== f.mediaElement.renderer &&
                f.mediaElement.renderer.setSize(e, t);
            }),
            (f.mediaElement.generateError = function (e, t) {
              (e = e || ""), (t = Array.isArray(t) ? t : []);
              var n = (0, M.createEvent)("error", f.mediaElement);
              (n.message = e),
                (n.urls = t),
                f.mediaElement.dispatchEvent(n),
                (r = !0);
            });
          var E = j.default.html5media.properties,
            b = j.default.html5media.methods,
            S = function (t, e, n, o) {
              var i = t[e];
              Object.defineProperty(t, e, {
                get: function () {
                  return n.apply(t, [i]);
                },
                set: function (e) {
                  return (i = o.apply(t, [e]));
                },
              });
            },
            w = function (e) {
              if ("src" !== e) {
                var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1),
                  n = function () {
                    return void 0 !== f.mediaElement.renderer &&
                      null !== f.mediaElement.renderer &&
                      "function" == typeof f.mediaElement.renderer["get" + t]
                      ? f.mediaElement.renderer["get" + t]()
                      : null;
                  },
                  o = function (e) {
                    void 0 !== f.mediaElement.renderer &&
                      null !== f.mediaElement.renderer &&
                      "function" == typeof f.mediaElement.renderer["set" + t] &&
                      f.mediaElement.renderer["set" + t](e);
                  };
                S(f.mediaElement, e, n, o),
                  (f.mediaElement["get" + t] = n),
                  (f.mediaElement["set" + t] = o);
              }
            },
            x = function () {
              return void 0 !== f.mediaElement.renderer &&
                null !== f.mediaElement.renderer
                ? f.mediaElement.renderer.getSrc()
                : null;
            },
            T = function (e) {
              var t = [];
              if ("string" == typeof e)
                t.push({ src: e, type: e ? (0, O.getTypeFromFile)(e) : "" });
              else if (
                "object" === (void 0 === e ? "undefined" : L(e)) &&
                void 0 !== e.src
              ) {
                var n = (0, O.absolutizeUrl)(e.src),
                  o = e.type,
                  i = Object.assign(e, {
                    src: n,
                    type:
                      ("" !== o && null != o) || !n
                        ? o
                        : (0, O.getTypeFromFile)(n),
                  });
                t.push(i);
              } else if (Array.isArray(e))
                for (var r = 0, a = e.length; r < a; r++) {
                  var s = (0, O.absolutizeUrl)(e[r].src),
                    l = e[r].type,
                    d = Object.assign(e[r], {
                      src: s,
                      type:
                        ("" !== l && null != l) || !s
                          ? l
                          : (0, O.getTypeFromFile)(s),
                    });
                  t.push(d);
                }
              var u = D.renderer.select(
                  t,
                  f.mediaElement.options.renderers.length
                    ? f.mediaElement.options.renderers
                    : []
                ),
                c = void 0;
              if (
                (f.mediaElement.paused ||
                  (f.mediaElement.pause(),
                  (c = (0, M.createEvent)("pause", f.mediaElement)),
                  f.mediaElement.dispatchEvent(c)),
                (f.mediaElement.originalNode.src = t[0].src || ""),
                null !== u || !t[0].src)
              )
                return t[0].src
                  ? f.mediaElement.changeRenderer(u.rendererName, t)
                  : null;
              f.mediaElement.generateError("No renderer found", t);
            },
            P = function (e, t) {
              try {
                if (
                  "play" !== e ||
                  ("native_dash" !== f.mediaElement.rendererName &&
                    "native_hls" !== f.mediaElement.rendererName)
                )
                  f.mediaElement.renderer[e](t);
                else {
                  var n = f.mediaElement.renderer[e](t);
                  n &&
                    "function" == typeof n.then &&
                    n.catch(function () {
                      f.mediaElement.paused &&
                        setTimeout(function () {
                          var e = f.mediaElement.renderer.play();
                          void 0 !== e &&
                            e.catch(function () {
                              f.mediaElement.renderer.paused ||
                                f.mediaElement.renderer.pause();
                            });
                        }, 150);
                    });
                }
              } catch (e) {
                f.mediaElement.generateError(e, l);
              }
            },
            C = function (o) {
              f.mediaElement[o] = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (
                  void 0 !== f.mediaElement.renderer &&
                    null !== f.mediaElement.renderer &&
                    "function" == typeof f.mediaElement.renderer[o] &&
                    (f.mediaElement.promises.length
                      ? Promise.all(f.mediaElement.promises)
                          .then(function () {
                            P(o, t);
                          })
                          .catch(function (e) {
                            f.mediaElement.generateError(e, l);
                          })
                      : P(o, t)),
                  null
                );
              };
            };
          S(f.mediaElement, "src", x, T),
            (f.mediaElement.getSrc = x),
            (f.mediaElement.setSrc = T);
          for (var k = 0, _ = E.length; k < _; k++) w(E[k]);
          for (var N = 0, A = b.length; N < A; N++) C(b[N]);
          return (
            (f.mediaElement.addEventListener = function (e, t) {
              (f.mediaElement.events[e] = f.mediaElement.events[e] || []),
                f.mediaElement.events[e].push(t);
            }),
            (f.mediaElement.removeEventListener = function (e, t) {
              if (!e) return (f.mediaElement.events = {}), !0;
              var n = f.mediaElement.events[e];
              if (!n) return !0;
              if (!t) return (f.mediaElement.events[e] = []), !0;
              for (var o = 0; o < n.length; o++)
                if (n[o] === t)
                  return f.mediaElement.events[e].splice(o, 1), !0;
              return !1;
            }),
            (f.mediaElement.dispatchEvent = function (e) {
              var t = f.mediaElement.events[e.type];
              if (t) for (var n = 0; n < t.length; n++) t[n].apply(null, [e]);
            }),
            (f.mediaElement.destroy = function () {
              var e = f.mediaElement.originalNode.cloneNode(!0),
                t = f.mediaElement.parentElement;
              e.removeAttribute("id"),
                e.remove(),
                f.mediaElement.remove(),
                t.appendChild(e);
            }),
            l.length && (f.mediaElement.src = l),
            f.mediaElement.promises.length
              ? Promise.all(f.mediaElement.promises)
                  .then(function () {
                    f.mediaElement.options.success &&
                      f.mediaElement.options.success(
                        f.mediaElement,
                        f.mediaElement.originalNode
                      );
                  })
                  .catch(function () {
                    r &&
                      f.mediaElement.options.error &&
                      f.mediaElement.options.error(
                        f.mediaElement,
                        f.mediaElement.originalNode
                      );
                  })
              : (f.mediaElement.options.success &&
                  f.mediaElement.options.success(
                    f.mediaElement,
                    f.mediaElement.originalNode
                  ),
                r &&
                  f.mediaElement.options.error &&
                  f.mediaElement.options.error(
                    f.mediaElement,
                    f.mediaElement.originalNode
                  )),
            f.mediaElement
          );
        };
        (F.default.MediaElement = i),
          (j.default.MediaElement = i),
          (n.default = i);
      },
      { 10: 10, 2: 2, 27: 27, 29: 29, 3: 3, 30: 30, 9: 9 },
    ],
    9: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var o,
          i = e(3);
        var r = {
          version: "4.2.12",
          html5media: {
            properties: [
              "volume",
              "src",
              "currentTime",
              "muted",
              "duration",
              "paused",
              "ended",
              "buffered",
              "error",
              "networkState",
              "readyState",
              "seeking",
              "seekable",
              "currentSrc",
              "preload",
              "bufferedBytes",
              "bufferedTime",
              "initialTime",
              "startOffsetTime",
              "defaultPlaybackRate",
              "playbackRate",
              "played",
              "autoplay",
              "loop",
              "controls",
            ],
            readOnlyProperties: [
              "duration",
              "paused",
              "ended",
              "buffered",
              "error",
              "networkState",
              "readyState",
              "seeking",
              "seekable",
            ],
            methods: ["load", "play", "pause", "canPlayType"],
            events: [
              "loadstart",
              "durationchange",
              "loadedmetadata",
              "loadeddata",
              "progress",
              "canplay",
              "canplaythrough",
              "suspend",
              "abort",
              "error",
              "emptied",
              "stalled",
              "play",
              "playing",
              "pause",
              "waiting",
              "seeking",
              "seeked",
              "timeupdate",
              "ended",
              "ratechange",
              "volumechange",
            ],
            mediaTypes: [
              "audio/mp3",
              "audio/ogg",
              "audio/oga",
              "audio/wav",
              "audio/x-wav",
              "audio/wave",
              "audio/x-pn-wav",
              "audio/mpeg",
              "audio/mp4",
              "video/mp4",
              "video/webm",
              "video/ogg",
              "video/ogv",
            ],
          },
        };
        (((o = i) && o.__esModule ? o : { default: o }).default.mejs = r),
          (n.default = r);
      },
      { 3: 3 },
    ],
    10: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.renderer = void 0);
        var o,
          i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          r = (function () {
            function o(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (e, t, n) {
              return t && o(e.prototype, t), n && o(e, n), e;
            };
          })(),
          a = e(9),
          s = (o = a) && o.__esModule ? o : { default: o };
        var l = (function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.renderers = {}),
                (this.order = []);
            }
            return (
              r(e, [
                {
                  key: "add",
                  value: function (e) {
                    if (void 0 === e.name)
                      throw new TypeError(
                        "renderer must contain at least `name` property"
                      );
                    (this.renderers[e.name] = e), this.order.push(e.name);
                  },
                },
                {
                  key: "select",
                  value: function (e) {
                    var t =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : [],
                      n = t.length;
                    if (((t = t.length ? t : this.order), !n)) {
                      var o = [/^(html5|native)/i, /^flash/i, /iframe$/i],
                        i = function (e) {
                          for (var t = 0, n = o.length; t < n; t++)
                            if (o[t].test(e)) return t;
                          return o.length;
                        };
                      t.sort(function (e, t) {
                        return i(e) - i(t);
                      });
                    }
                    for (var r = 0, a = t.length; r < a; r++) {
                      var s = t[r],
                        l = this.renderers[s];
                      if (null != l)
                        for (var d = 0, u = e.length; d < u; d++)
                          if (
                            "function" == typeof l.canPlayType &&
                            "string" == typeof e[d].type &&
                            l.canPlayType(e[d].type)
                          )
                            return { rendererName: l.name, src: e[d].src };
                    }
                    return null;
                  },
                },
                {
                  key: "order",
                  set: function (e) {
                    if (!Array.isArray(e))
                      throw new TypeError("order must be an array of strings.");
                    this._order = e;
                  },
                  get: function () {
                    return this._order;
                  },
                },
                {
                  key: "renderers",
                  set: function (e) {
                    if (
                      null !== e &&
                      "object" !== (void 0 === e ? "undefined" : i(e))
                    )
                      throw new TypeError(
                        "renderers must be an array of objects."
                      );
                    this._renderers = e;
                  },
                  get: function () {
                    return this._renderers;
                  },
                },
              ]),
              e
            );
          })(),
          d = (n.renderer = new l());
        s.default.Renderers = d;
      },
      { 9: 9 },
    ],
    11: [
      function (e, t, n) {
        "use strict";
        var f = a(e(3)),
          p = a(e(2)),
          i = a(e(7)),
          o = e(18),
          r = a(o),
          m = (function (e) {
            {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return (t.default = e), t;
            }
          })(e(27)),
          h = e(29),
          v = e(28),
          y = e(30);
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.assign(o.config, {
          usePluginFullScreen: !0,
          fullscreenText: null,
          useFakeFullscreen: !1,
        }),
          Object.assign(r.default.prototype, {
            isFullScreen: !1,
            isNativeFullScreen: !1,
            isInIframe: !1,
            isPluginClickThroughCreated: !1,
            fullscreenMode: "",
            containerSizeTimeout: null,
            buildfullscreen: function (n) {
              if (n.isVideo) {
                (n.isInIframe =
                  f.default.location !== f.default.parent.location),
                  n.detectFullscreenMode();
                var o = this,
                  e = (0, h.isString)(o.options.fullscreenText)
                    ? o.options.fullscreenText
                    : i.default.t("mejs.fullscreen"),
                  t = p.default.createElement("div");
                if (
                  ((t.className =
                    o.options.classPrefix +
                    "button " +
                    o.options.classPrefix +
                    "fullscreen-button"),
                  (t.innerHTML =
                    '<button type="button" aria-controls="' +
                    o.id +
                    '" title="' +
                    e +
                    '" aria-label="' +
                    e +
                    '" tabindex="0"></button>'),
                  o.addControlElement(t, "fullscreen"),
                  t.addEventListener("click", function () {
                    (m.HAS_TRUE_NATIVE_FULLSCREEN && m.IS_FULLSCREEN) ||
                    n.isFullScreen
                      ? n.exitFullScreen()
                      : n.enterFullScreen();
                  }),
                  (n.fullscreenBtn = t),
                  o.options.keyActions.push({
                    keys: [70],
                    action: function (e, t, n, o) {
                      o.ctrlKey ||
                        (void 0 !== e.enterFullScreen &&
                          (e.isFullScreen
                            ? e.exitFullScreen()
                            : e.enterFullScreen()));
                    },
                  }),
                  (o.exitFullscreenCallback = function (e) {
                    var t = e.which || e.keyCode || 0;
                    o.options.enableKeyboard &&
                      27 === t &&
                      ((m.HAS_TRUE_NATIVE_FULLSCREEN && m.IS_FULLSCREEN) ||
                        o.isFullScreen) &&
                      n.exitFullScreen();
                  }),
                  o.globalBind("keydown", o.exitFullscreenCallback),
                  (o.normalHeight = 0),
                  (o.normalWidth = 0),
                  m.HAS_TRUE_NATIVE_FULLSCREEN)
                ) {
                  n.globalBind(m.FULLSCREEN_EVENT_NAME, function () {
                    n.isFullScreen &&
                      (m.isFullScreen()
                        ? ((n.isNativeFullScreen = !0), n.setControlsSize())
                        : ((n.isNativeFullScreen = !1), n.exitFullScreen()));
                  });
                }
              }
            },
            cleanfullscreen: function (e) {
              e.exitFullScreen(),
                e.globalUnbind("keydown", e.exitFullscreenCallback);
            },
            detectFullscreenMode: function () {
              var e =
                  null !== this.media.rendererName &&
                  /(native|html5)/i.test(this.media.rendererName),
                t = "";
              return (
                m.HAS_TRUE_NATIVE_FULLSCREEN && e
                  ? (t = "native-native")
                  : m.HAS_TRUE_NATIVE_FULLSCREEN && !e
                  ? (t = "plugin-native")
                  : this.usePluginFullScreen &&
                    m.SUPPORT_POINTER_EVENTS &&
                    (t = "plugin-click"),
                (this.fullscreenMode = t)
              );
            },
            enterFullScreen: function () {
              var o = this,
                e =
                  null !== o.media.rendererName &&
                  /(html5|native)/i.test(o.media.rendererName),
                t = getComputedStyle(o.getElement(o.container));
              if (o.isVideo)
                if (
                  !1 === o.options.useFakeFullscreen &&
                  m.IS_IOS &&
                  m.HAS_IOS_FULLSCREEN &&
                  "function" ==
                    typeof o.media.originalNode.webkitEnterFullscreen &&
                  o.media.originalNode.canPlayType(
                    (0, y.getTypeFromFile)(o.media.getSrc())
                  )
                )
                  o.media.originalNode.webkitEnterFullscreen();
                else {
                  if (
                    ((0, v.addClass)(
                      p.default.documentElement,
                      o.options.classPrefix + "fullscreen"
                    ),
                    (0, v.addClass)(
                      o.getElement(o.container),
                      o.options.classPrefix + "container-fullscreen"
                    ),
                    (o.normalHeight = parseFloat(t.height)),
                    (o.normalWidth = parseFloat(t.width)),
                    ("native-native" !== o.fullscreenMode &&
                      "plugin-native" !== o.fullscreenMode) ||
                      (m.requestFullScreen(o.getElement(o.container)),
                      o.isInIframe &&
                        setTimeout(function e() {
                          if (o.isNativeFullScreen) {
                            var t =
                                f.default.innerWidth ||
                                p.default.documentElement.clientWidth ||
                                p.default.body.clientWidth,
                              n = screen.width;
                            0.002 * n < Math.abs(n - t)
                              ? o.exitFullScreen()
                              : setTimeout(e, 500);
                          }
                        }, 1e3)),
                    (o.getElement(o.container).style.width = "100%"),
                    (o.getElement(o.container).style.height = "100%"),
                    (o.containerSizeTimeout = setTimeout(function () {
                      (o.getElement(o.container).style.width = "100%"),
                        (o.getElement(o.container).style.height = "100%"),
                        o.setControlsSize();
                    }, 500)),
                    e)
                  )
                    (o.node.style.width = "100%"),
                      (o.node.style.height = "100%");
                  else
                    for (
                      var n = o
                          .getElement(o.container)
                          .querySelectorAll("embed, object, video"),
                        i = n.length,
                        r = 0;
                      r < i;
                      r++
                    )
                      (n[r].style.width = "100%"), (n[r].style.height = "100%");
                  o.options.setDimensions &&
                    "function" == typeof o.media.setSize &&
                    o.media.setSize(screen.width, screen.height);
                  for (
                    var a = o.getElement(o.layers).children,
                      s = a.length,
                      l = 0;
                    l < s;
                    l++
                  )
                    (a[l].style.width = "100%"), (a[l].style.height = "100%");
                  o.fullscreenBtn &&
                    ((0, v.removeClass)(
                      o.fullscreenBtn,
                      o.options.classPrefix + "fullscreen"
                    ),
                    (0, v.addClass)(
                      o.fullscreenBtn,
                      o.options.classPrefix + "unfullscreen"
                    )),
                    o.setControlsSize(),
                    (o.isFullScreen = !0);
                  var d = Math.min(
                      screen.width / o.width,
                      screen.height / o.height
                    ),
                    u = o
                      .getElement(o.container)
                      .querySelector(
                        "." + o.options.classPrefix + "captions-text"
                      );
                  u &&
                    ((u.style.fontSize = 100 * d + "%"),
                    (u.style.lineHeight = "normal"),
                    (o
                      .getElement(o.container)
                      .querySelector(
                        "." + o.options.classPrefix + "captions-position"
                      ).style.bottom =
                      (screen.height - o.normalHeight) / 2 -
                      o.getElement(o.controls).offsetHeight / 2 +
                      d +
                      15 +
                      "px"));
                  var c = (0, h.createEvent)(
                    "enteredfullscreen",
                    o.getElement(o.container)
                  );
                  o.getElement(o.container).dispatchEvent(c);
                }
            },
            exitFullScreen: function () {
              var e = this,
                t =
                  null !== e.media.rendererName &&
                  /(native|html5)/i.test(e.media.rendererName);
              if (e.isVideo) {
                if (
                  (clearTimeout(e.containerSizeTimeout),
                  m.HAS_TRUE_NATIVE_FULLSCREEN &&
                    (m.IS_FULLSCREEN || e.isFullScreen) &&
                    m.cancelFullScreen(),
                  (0, v.removeClass)(
                    p.default.documentElement,
                    e.options.classPrefix + "fullscreen"
                  ),
                  (0, v.removeClass)(
                    e.getElement(e.container),
                    e.options.classPrefix + "container-fullscreen"
                  ),
                  e.options.setDimensions)
                ) {
                  if (
                    ((e.getElement(e.container).style.width =
                      e.normalWidth + "px"),
                    (e.getElement(e.container).style.height =
                      e.normalHeight + "px"),
                    t)
                  )
                    (e.node.style.width = e.normalWidth + "px"),
                      (e.node.style.height = e.normalHeight + "px");
                  else
                    for (
                      var n = e
                          .getElement(e.container)
                          .querySelectorAll("embed, object, video"),
                        o = n.length,
                        i = 0;
                      i < o;
                      i++
                    )
                      (n[i].style.width = e.normalWidth + "px"),
                        (n[i].style.height = e.normalHeight + "px");
                  "function" == typeof e.media.setSize &&
                    e.media.setSize(e.normalWidth, e.normalHeight);
                  for (
                    var r = e.getElement(e.layers).children,
                      a = r.length,
                      s = 0;
                    s < a;
                    s++
                  )
                    (r[s].style.width = e.normalWidth + "px"),
                      (r[s].style.height = e.normalHeight + "px");
                }
                e.fullscreenBtn &&
                  ((0, v.removeClass)(
                    e.fullscreenBtn,
                    e.options.classPrefix + "unfullscreen"
                  ),
                  (0, v.addClass)(
                    e.fullscreenBtn,
                    e.options.classPrefix + "fullscreen"
                  )),
                  e.setControlsSize(),
                  (e.isFullScreen = !1);
                var l = e
                  .getElement(e.container)
                  .querySelector("." + e.options.classPrefix + "captions-text");
                l &&
                  ((l.style.fontSize = ""),
                  (l.style.lineHeight = ""),
                  (e
                    .getElement(e.container)
                    .querySelector(
                      "." + e.options.classPrefix + "captions-position"
                    ).style.bottom = ""));
                var d = (0, h.createEvent)(
                  "exitedfullscreen",
                  e.getElement(e.container)
                );
                e.getElement(e.container).dispatchEvent(d);
              }
            },
          });
      },
      { 18: 18, 2: 2, 27: 27, 28: 28, 29: 29, 3: 3, 30: 30, 7: 7 },
    ],
    12: [
      function (e, t, n) {
        "use strict";
        var c = r(e(2)),
          o = e(18),
          i = r(o),
          f = r(e(7)),
          p = e(29),
          m = e(28);
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.assign(o.config, { playText: null, pauseText: null }),
          Object.assign(i.default.prototype, {
            buildplaypause: function (e, t, n, o) {
              var i = this,
                r = i.options,
                a = (0, p.isString)(r.playText)
                  ? r.playText
                  : f.default.t("mejs.play"),
                s = (0, p.isString)(r.pauseText)
                  ? r.pauseText
                  : f.default.t("mejs.pause"),
                l = c.default.createElement("div");
              (l.className =
                i.options.classPrefix +
                "button " +
                i.options.classPrefix +
                "playpause-button " +
                i.options.classPrefix +
                "play"),
                (l.innerHTML =
                  '<button type="button" aria-controls="' +
                  i.id +
                  '" title="' +
                  a +
                  '" aria-label="' +
                  s +
                  '" tabindex="0"></button>'),
                l.addEventListener("click", function () {
                  i.paused ? i.play() : i.pause();
                });
              var d = l.querySelector("button");
              function u(e) {
                "play" === e
                  ? ((0, m.removeClass)(l, i.options.classPrefix + "play"),
                    (0, m.removeClass)(l, i.options.classPrefix + "replay"),
                    (0, m.addClass)(l, i.options.classPrefix + "pause"),
                    d.setAttribute("title", s),
                    d.setAttribute("aria-label", s))
                  : ((0, m.removeClass)(l, i.options.classPrefix + "pause"),
                    (0, m.removeClass)(l, i.options.classPrefix + "replay"),
                    (0, m.addClass)(l, i.options.classPrefix + "play"),
                    d.setAttribute("title", a),
                    d.setAttribute("aria-label", a));
              }
              i.addControlElement(l, "playpause"),
                u("pse"),
                o.addEventListener("loadedmetadata", function () {
                  -1 === o.rendererName.indexOf("flash") && u("pse");
                }),
                o.addEventListener("play", function () {
                  u("play");
                }),
                o.addEventListener("playing", function () {
                  u("play");
                }),
                o.addEventListener("pause", function () {
                  u("pse");
                }),
                o.addEventListener("ended", function () {
                  e.options.loop ||
                    ((0, m.removeClass)(l, i.options.classPrefix + "pause"),
                    (0, m.removeClass)(l, i.options.classPrefix + "play"),
                    (0, m.addClass)(l, i.options.classPrefix + "replay"),
                    d.setAttribute("title", a),
                    d.setAttribute("aria-label", a));
                });
            },
          });
      },
      { 18: 18, 2: 2, 28: 28, 29: 29, 7: 7 },
    ],
    13: [
      function (e, t, n) {
        "use strict";
        var p = r(e(2)),
          o = e(18),
          i = r(o),
          m = r(e(7)),
          g = e(27),
          E = e(32),
          b = e(28);
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.assign(o.config, {
          enableProgressTooltip: !0,
          useSmoothHover: !0,
          forceLive: !1,
        }),
          Object.assign(i.default.prototype, {
            buildprogress: function (h, s, e, d) {
              var u = 0,
                v = !1,
                c = !1,
                y = this,
                t = h.options.autoRewind,
                n = h.options.enableProgressTooltip
                  ? '<span class="' +
                    y.options.classPrefix +
                    'time-float"><span class="' +
                    y.options.classPrefix +
                    'time-float-current">00:00</span><span class="' +
                    y.options.classPrefix +
                    'time-float-corner"></span></span>'
                  : "",
                o = p.default.createElement("div");
              (o.className = y.options.classPrefix + "time-rail"),
                (o.innerHTML =
                  '<span class="' +
                  y.options.classPrefix +
                  "time-total " +
                  y.options.classPrefix +
                  'time-slider"><span class="' +
                  y.options.classPrefix +
                  'time-buffering"></span><span class="' +
                  y.options.classPrefix +
                  'time-loaded"></span><span class="' +
                  y.options.classPrefix +
                  'time-current"></span><span class="' +
                  y.options.classPrefix +
                  'time-hovered no-hover"></span><span class="' +
                  y.options.classPrefix +
                  'time-handle"><span class="' +
                  y.options.classPrefix +
                  'time-handle-content"></span></span>' +
                  n +
                  "</span>"),
                y.addControlElement(o, "progress"),
                y.options.keyActions.push(
                  {
                    keys: [37, 227],
                    action: function (e) {
                      if (!isNaN(e.duration) && 0 < e.duration) {
                        e.isVideo && (e.showControls(), e.startControlsTimer());
                        var t = e
                          .getElement(e.container)
                          .querySelector(
                            "." + _player.config.classPrefix + "time-total"
                          );
                        t && t.focus();
                        var n = Math.max(
                          e.currentTime -
                            e.options.defaultSeekBackwardInterval(e),
                          0
                        );
                        e.setCurrentTime(n);
                      }
                    },
                  },
                  {
                    keys: [39, 228],
                    action: function (e) {
                      if (!isNaN(e.duration) && 0 < e.duration) {
                        e.isVideo && (e.showControls(), e.startControlsTimer());
                        var t = e
                          .getElement(e.container)
                          .querySelector(
                            "." + _player.config.classPrefix + "time-total"
                          );
                        t && t.focus();
                        var n = Math.min(
                          e.currentTime +
                            e.options.defaultSeekForwardInterval(e),
                          e.duration
                        );
                        e.setCurrentTime(n);
                      }
                    },
                  }
                ),
                (y.rail = s.querySelector(
                  "." + y.options.classPrefix + "time-rail"
                )),
                (y.total = s.querySelector(
                  "." + y.options.classPrefix + "time-total"
                )),
                (y.loaded = s.querySelector(
                  "." + y.options.classPrefix + "time-loaded"
                )),
                (y.current = s.querySelector(
                  "." + y.options.classPrefix + "time-current"
                )),
                (y.handle = s.querySelector(
                  "." + y.options.classPrefix + "time-handle"
                )),
                (y.timefloat = s.querySelector(
                  "." + y.options.classPrefix + "time-float"
                )),
                (y.timefloatcurrent = s.querySelector(
                  "." + y.options.classPrefix + "time-float-current"
                )),
                (y.slider = s.querySelector(
                  "." + y.options.classPrefix + "time-slider"
                )),
                (y.hovered = s.querySelector(
                  "." + y.options.classPrefix + "time-hovered"
                )),
                (y.buffer = s.querySelector(
                  "." + y.options.classPrefix + "time-buffering"
                )),
                (y.newTime = 0),
                (y.forcedHandlePause = !1),
                (y.setTransformStyle = function (e, t) {
                  (e.style.transform = t),
                    (e.style.webkitTransform = t),
                    (e.style.MozTransform = t),
                    (e.style.msTransform = t),
                    (e.style.OTransform = t);
                }),
                (y.buffer.style.display = "none");
              var i = function (e) {
                  var t = getComputedStyle(y.total),
                    n = (0, b.offset)(y.total),
                    o = y.total.offsetWidth,
                    i =
                      void 0 !== t.webkitTransform
                        ? "webkitTransform"
                        : void 0 !== t.mozTransform
                        ? "mozTransform "
                        : void 0 !== t.oTransform
                        ? "oTransform"
                        : void 0 !== t.msTransform
                        ? "msTransform"
                        : "transform",
                    r =
                      "WebKitCSSMatrix" in window
                        ? "WebKitCSSMatrix"
                        : "MSCSSMatrix" in window
                        ? "MSCSSMatrix"
                        : "CSSMatrix" in window
                        ? "CSSMatrix"
                        : void 0,
                    a = 0,
                    s = 0,
                    l = 0,
                    d = void 0;
                  if (
                    ((d =
                      e.originalEvent && e.originalEvent.changedTouches
                        ? e.originalEvent.changedTouches[0].pageX
                        : e.changedTouches
                        ? e.changedTouches[0].pageX
                        : e.pageX),
                    y.getDuration())
                  ) {
                    if (
                      (d < n.left
                        ? (d = n.left)
                        : d > o + n.left && (d = o + n.left),
                      (a = (l = d - n.left) / o),
                      (y.newTime = a * y.getDuration()),
                      v &&
                        null !== y.getCurrentTime() &&
                        y.newTime.toFixed(4) !==
                          y.getCurrentTime().toFixed(4) &&
                        (y.setCurrentRailHandle(y.newTime),
                        y.updateCurrent(y.newTime)),
                      !g.IS_IOS && !g.IS_ANDROID)
                    ) {
                      if (
                        (l < 0 && (l = 0),
                        y.options.useSmoothHover &&
                          null !== r &&
                          void 0 !== window[r])
                      ) {
                        var u = new window[r](getComputedStyle(y.handle)[i])
                            .m41,
                          c =
                            l / parseFloat(getComputedStyle(y.total).width) -
                            u / parseFloat(getComputedStyle(y.total).width);
                        (y.hovered.style.left = u + "px"),
                          y.setTransformStyle(y.hovered, "scaleX(" + c + ")"),
                          y.hovered.setAttribute("pos", l),
                          0 <= c
                            ? (0, b.removeClass)(y.hovered, "negative")
                            : (0, b.addClass)(y.hovered, "negative");
                      }
                      if (y.timefloat) {
                        var f = y.timefloat.offsetWidth / 2,
                          p = mejs.Utils.offset(y.getElement(y.container)),
                          m = getComputedStyle(y.timefloat);
                        (s =
                          d - p.left < y.timefloat.offsetWidth
                            ? f
                            : d - p.left >=
                              y.getElement(y.container).offsetWidth - f
                            ? y.total.offsetWidth - f
                            : l),
                          (0, b.hasClass)(
                            y.getElement(y.container),
                            y.options.classPrefix + "long-video"
                          ) &&
                            (s +=
                              parseFloat(m.marginLeft) / 2 +
                              y.timefloat.offsetWidth / 2),
                          (y.timefloat.style.left = s + "px"),
                          (y.timefloatcurrent.innerHTML = (0,
                          E.secondsToTimeCode)(
                            y.newTime,
                            h.options.alwaysShowHours,
                            h.options.showTimecodeFrameCount,
                            h.options.framesPerSecond,
                            h.options.secondsDecimalLength,
                            h.options.timeFormat
                          )),
                          (y.timefloat.style.display = "block");
                      }
                    }
                  } else
                    g.IS_IOS ||
                      g.IS_ANDROID ||
                      !y.timefloat ||
                      ((s =
                        y.timefloat.offsetWidth + o >=
                        y.getElement(y.container).offsetWidth
                          ? y.timefloat.offsetWidth / 2
                          : 0),
                      (y.timefloat.style.left = s + "px"),
                      (y.timefloat.style.left = s + "px"),
                      (y.timefloat.style.display = "block"));
                },
                f = function () {
                  1e3 <= new Date() - u && y.play();
                };
              y.slider.addEventListener("focus", function () {
                h.options.autoRewind = !1;
              }),
                y.slider.addEventListener("blur", function () {
                  h.options.autoRewind = t;
                }),
                y.slider.addEventListener("keydown", function (e) {
                  if (
                    (1e3 <= new Date() - u && (c = y.paused),
                    y.options.enableKeyboard && y.options.keyActions.length)
                  ) {
                    var t = e.which || e.keyCode || 0,
                      n = y.getDuration(),
                      o = h.options.defaultSeekForwardInterval(d),
                      i = h.options.defaultSeekBackwardInterval(d),
                      r = y.getCurrentTime(),
                      a = y
                        .getElement(y.container)
                        .querySelector(
                          "." + y.options.classPrefix + "volume-slider"
                        );
                    if (38 === t || 40 === t) {
                      a && (a.style.display = "block"),
                        y.isVideo && (y.showControls(), y.startControlsTimer());
                      var s =
                          38 === t
                            ? Math.min(y.volume + 0.1, 1)
                            : Math.max(y.volume - 0.1, 0),
                        l = s <= 0;
                      return y.setVolume(s), void y.setMuted(l);
                    }
                    switch ((a && (a.style.display = "none"), t)) {
                      case 37:
                        y.getDuration() !== 1 / 0 && (r -= i);
                        break;
                      case 39:
                        y.getDuration() !== 1 / 0 && (r += o);
                        break;
                      case 36:
                        r = 0;
                        break;
                      case 35:
                        r = n;
                        break;
                      case 13:
                      case 32:
                        return void (
                          g.IS_FIREFOX && (y.paused ? y.play() : y.pause())
                        );
                      default:
                        return;
                    }
                    (r = r < 0 || isNaN(r) ? 0 : n <= r ? n : Math.floor(r)),
                      (u = new Date()),
                      c || h.pause(),
                      r < y.getDuration() && !c && setTimeout(f, 1100),
                      y.setCurrentTime(r),
                      h.showControls(),
                      e.preventDefault(),
                      e.stopPropagation();
                  }
                });
              var r = ["mousedown", "touchstart"];
              y.slider.addEventListener("dragstart", function () {
                return !1;
              });
              for (var a = 0, l = r.length; a < l; a++)
                y.slider.addEventListener(
                  r[a],
                  function (e) {
                    if (
                      ((y.forcedHandlePause = !1),
                      y.getDuration() !== 1 / 0 &&
                        (1 === e.which || 0 === e.which))
                    ) {
                      y.paused || (y.pause(), (y.forcedHandlePause = !0)),
                        (v = !0),
                        i(e);
                      for (
                        var t = ["mouseup", "touchend"], n = 0, o = t.length;
                        n < o;
                        n++
                      )
                        y.getElement(y.container).addEventListener(
                          t[n],
                          function (e) {
                            var t = e.target;
                            (t === y.slider ||
                              t.closest(
                                "." + y.options.classPrefix + "time-slider"
                              )) &&
                              i(e);
                          }
                        );
                      y.globalBind("mouseup.dur touchend.dur", function () {
                        v &&
                          null !== y.getCurrentTime() &&
                          y.newTime.toFixed(4) !==
                            y.getCurrentTime().toFixed(4) &&
                          (y.setCurrentTime(y.newTime),
                          y.setCurrentRailHandle(y.newTime),
                          y.updateCurrent(y.newTime)),
                          y.forcedHandlePause && (y.slider.focus(), y.play()),
                          (y.forcedHandlePause = !1),
                          (v = !1),
                          y.timefloat && (y.timefloat.style.display = "none");
                      });
                    }
                  },
                  !(!g.SUPPORT_PASSIVE_EVENT || "touchstart" !== r[a]) && {
                    passive: !0,
                  }
                );
              y.slider.addEventListener("mouseenter", function (e) {
                e.target === y.slider &&
                  y.getDuration() !== 1 / 0 &&
                  (y
                    .getElement(y.container)
                    .addEventListener("mousemove", function (e) {
                      var t = e.target;
                      (t === y.slider ||
                        t.closest(
                          "." + y.options.classPrefix + "time-slider"
                        )) &&
                        i(e);
                    }),
                  !y.timefloat ||
                    g.IS_IOS ||
                    g.IS_ANDROID ||
                    (y.timefloat.style.display = "block"),
                  y.hovered &&
                    !g.IS_IOS &&
                    !g.IS_ANDROID &&
                    y.options.useSmoothHover &&
                    (0, b.removeClass)(y.hovered, "no-hover"));
              }),
                y.slider.addEventListener("mouseleave", function () {
                  y.getDuration() !== 1 / 0 &&
                    (v ||
                      (y.timefloat && (y.timefloat.style.display = "none"),
                      y.hovered &&
                        y.options.useSmoothHover &&
                        (0, b.addClass)(y.hovered, "no-hover")));
                }),
                (y.broadcastCallback = function (e) {
                  var t,
                    n,
                    o,
                    i,
                    r = s.querySelector(
                      "." + y.options.classPrefix + "broadcast"
                    );
                  if (y.options.forceLive || y.getDuration() === 1 / 0) {
                    if (!r && y.options.forceLive) {
                      var a = p.default.createElement("span");
                      (a.className = y.options.classPrefix + "broadcast"),
                        (a.innerText = m.default.t("mejs.live-broadcast")),
                        (y.slider.style.display = "none"),
                        y.rail.appendChild(a);
                    }
                  } else
                    r && ((y.slider.style.display = ""), r.remove()),
                      h.setProgressRail(e),
                      y.forcedHandlePause || h.setCurrentRail(e),
                      (t = y.getCurrentTime()),
                      (n = m.default.t("mejs.time-slider")),
                      (o = (0, E.secondsToTimeCode)(
                        t,
                        h.options.alwaysShowHours,
                        h.options.showTimecodeFrameCount,
                        h.options.framesPerSecond,
                        h.options.secondsDecimalLength,
                        h.options.timeFormat
                      )),
                      (i = y.getDuration()),
                      y.slider.setAttribute("role", "slider"),
                      (y.slider.tabIndex = 0),
                      d.paused
                        ? (y.slider.setAttribute("aria-label", n),
                          y.slider.setAttribute("aria-valuemin", 0),
                          y.slider.setAttribute(
                            "aria-valuemax",
                            isNaN(i) ? 0 : i
                          ),
                          y.slider.setAttribute("aria-valuenow", t),
                          y.slider.setAttribute("aria-valuetext", o))
                        : (y.slider.removeAttribute("aria-label"),
                          y.slider.removeAttribute("aria-valuemin"),
                          y.slider.removeAttribute("aria-valuemax"),
                          y.slider.removeAttribute("aria-valuenow"),
                          y.slider.removeAttribute("aria-valuetext"));
                }),
                d.addEventListener("progress", y.broadcastCallback),
                d.addEventListener("timeupdate", y.broadcastCallback),
                d.addEventListener("play", function () {
                  y.buffer.style.display = "none";
                }),
                d.addEventListener("playing", function () {
                  y.buffer.style.display = "none";
                }),
                d.addEventListener("seeking", function () {
                  y.buffer.style.display = "";
                }),
                d.addEventListener("seeked", function () {
                  y.buffer.style.display = "none";
                }),
                d.addEventListener("pause", function () {
                  y.buffer.style.display = "none";
                }),
                d.addEventListener("waiting", function () {
                  y.buffer.style.display = "";
                }),
                d.addEventListener("loadeddata", function () {
                  y.buffer.style.display = "";
                }),
                d.addEventListener("canplay", function () {
                  y.buffer.style.display = "none";
                }),
                d.addEventListener("error", function () {
                  y.buffer.style.display = "none";
                }),
                y
                  .getElement(y.container)
                  .addEventListener("controlsresize", function (e) {
                    y.getDuration() !== 1 / 0 &&
                      (h.setProgressRail(e),
                      y.forcedHandlePause || h.setCurrentRail(e));
                  });
            },
            cleanprogress: function (e, t, n, o) {
              o.removeEventListener("progress", e.broadcastCallback),
                o.removeEventListener("timeupdate", e.broadcastCallback),
                e.rail && e.rail.remove();
            },
            setProgressRail: function (e) {
              var t = this,
                n = void 0 !== e ? e.detail.target || e.target : t.media,
                o = null;
              n &&
              n.buffered &&
              0 < n.buffered.length &&
              n.buffered.end &&
              t.getDuration()
                ? (o = n.buffered.end(n.buffered.length - 1) / t.getDuration())
                : n &&
                  void 0 !== n.bytesTotal &&
                  0 < n.bytesTotal &&
                  void 0 !== n.bufferedBytes
                ? (o = n.bufferedBytes / n.bytesTotal)
                : e &&
                  e.lengthComputable &&
                  0 !== e.total &&
                  (o = e.loaded / e.total),
                null !== o &&
                  ((o = Math.min(1, Math.max(0, o))),
                  t.loaded &&
                    t.setTransformStyle(t.loaded, "scaleX(" + o + ")"));
            },
            setCurrentRailHandle: function (e) {
              this.setCurrentRailMain(this, e);
            },
            setCurrentRail: function () {
              this.setCurrentRailMain(this);
            },
            setCurrentRailMain: function (e, t) {
              if (void 0 !== e.getCurrentTime() && e.getDuration()) {
                var n = void 0 === t ? e.getCurrentTime() : t;
                if (e.total && e.handle) {
                  var o = parseFloat(getComputedStyle(e.total).width),
                    i = Math.round((o * n) / e.getDuration()),
                    r = i - Math.round(e.handle.offsetWidth / 2);
                  if (
                    ((r = r < 0 ? 0 : r),
                    e.setTransformStyle(e.current, "scaleX(" + i / o + ")"),
                    e.setTransformStyle(e.handle, "translateX(" + r + "px)"),
                    e.options.useSmoothHover &&
                      !(0, b.hasClass)(e.hovered, "no-hover"))
                  ) {
                    var a = parseInt(e.hovered.getAttribute("pos"), 10),
                      s = (a = isNaN(a) ? 0 : a) / o - r / o;
                    (e.hovered.style.left = r + "px"),
                      e.setTransformStyle(e.hovered, "scaleX(" + s + ")"),
                      0 <= s
                        ? (0, b.removeClass)(e.hovered, "negative")
                        : (0, b.addClass)(e.hovered, "negative");
                  }
                }
              }
            },
          });
      },
      { 18: 18, 2: 2, 27: 27, 28: 28, 32: 32, 7: 7 },
    ],
    14: [
      function (e, t, n) {
        "use strict";
        var a = r(e(2)),
          o = e(18),
          i = r(o),
          s = e(32),
          l = e(28);
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.assign(o.config, {
          duration: 0,
          timeAndDurationSeparator: "<span> | </span>",
        }),
          Object.assign(i.default.prototype, {
            buildcurrent: function (e, t, n, o) {
              var i = this,
                r = a.default.createElement("div");
              (r.className = i.options.classPrefix + "time"),
                r.setAttribute("role", "timer"),
                r.setAttribute("aria-live", "off"),
                (r.innerHTML =
                  '<span class="' +
                  i.options.classPrefix +
                  'currenttime">' +
                  (0, s.secondsToTimeCode)(
                    0,
                    e.options.alwaysShowHours,
                    e.options.showTimecodeFrameCount,
                    e.options.framesPerSecond,
                    e.options.secondsDecimalLength,
                    e.options.timeFormat
                  ) +
                  "</span>"),
                i.addControlElement(r, "current"),
                e.updateCurrent(),
                (i.updateTimeCallback = function () {
                  i.controlsAreVisible && e.updateCurrent();
                }),
                o.addEventListener("timeupdate", i.updateTimeCallback);
            },
            cleancurrent: function (e, t, n, o) {
              o.removeEventListener("timeupdate", e.updateTimeCallback);
            },
            buildduration: function (e, t, n, o) {
              var i = this;
              if (
                t.lastChild.querySelector(
                  "." + i.options.classPrefix + "currenttime"
                )
              )
                t.querySelector(
                  "." + i.options.classPrefix + "time"
                ).innerHTML +=
                  i.options.timeAndDurationSeparator +
                  '<span class="' +
                  i.options.classPrefix +
                  'duration">' +
                  (0, s.secondsToTimeCode)(
                    i.options.duration,
                    i.options.alwaysShowHours,
                    i.options.showTimecodeFrameCount,
                    i.options.framesPerSecond,
                    i.options.secondsDecimalLength,
                    i.options.timeFormat
                  ) +
                  "</span>";
              else {
                t.querySelector("." + i.options.classPrefix + "currenttime") &&
                  (0, l.addClass)(
                    t.querySelector("." + i.options.classPrefix + "currenttime")
                      .parentNode,
                    i.options.classPrefix + "currenttime-container"
                  );
                var r = a.default.createElement("div");
                (r.className =
                  i.options.classPrefix +
                  "time " +
                  i.options.classPrefix +
                  "duration-container"),
                  (r.innerHTML =
                    '<span class="' +
                    i.options.classPrefix +
                    'duration">' +
                    (0, s.secondsToTimeCode)(
                      i.options.duration,
                      i.options.alwaysShowHours,
                      i.options.showTimecodeFrameCount,
                      i.options.framesPerSecond,
                      i.options.secondsDecimalLength,
                      i.options.timeFormat
                    ) +
                    "</span>"),
                  i.addControlElement(r, "duration");
              }
              (i.updateDurationCallback = function () {
                i.controlsAreVisible && e.updateDuration();
              }),
                o.addEventListener("timeupdate", i.updateDurationCallback);
            },
            cleanduration: function (e, t, n, o) {
              o.removeEventListener("timeupdate", e.updateDurationCallback);
            },
            updateCurrent: function () {
              var e = this,
                t = e.getCurrentTime();
              isNaN(t) && (t = 0);
              var n = (0, s.secondsToTimeCode)(
                t,
                e.options.alwaysShowHours,
                e.options.showTimecodeFrameCount,
                e.options.framesPerSecond,
                e.options.secondsDecimalLength,
                e.options.timeFormat
              );
              5 < n.length
                ? (0, l.addClass)(
                    e.getElement(e.container),
                    e.options.classPrefix + "long-video"
                  )
                : (0, l.removeClass)(
                    e.getElement(e.container),
                    e.options.classPrefix + "long-video"
                  ),
                e
                  .getElement(e.controls)
                  .querySelector("." + e.options.classPrefix + "currenttime") &&
                  (e
                    .getElement(e.controls)
                    .querySelector(
                      "." + e.options.classPrefix + "currenttime"
                    ).innerText = n);
            },
            updateDuration: function () {
              var e = this,
                t = e.getDuration();
              void 0 !== e.media &&
                (isNaN(t) || t === 1 / 0 || t < 0) &&
                (e.media.duration = e.options.duration = t = 0),
                0 < e.options.duration && (t = e.options.duration);
              var n = (0, s.secondsToTimeCode)(
                t,
                e.options.alwaysShowHours,
                e.options.showTimecodeFrameCount,
                e.options.framesPerSecond,
                e.options.secondsDecimalLength,
                e.options.timeFormat
              );
              5 < n.length
                ? (0, l.addClass)(
                    e.getElement(e.container),
                    e.options.classPrefix + "long-video"
                  )
                : (0, l.removeClass)(
                    e.getElement(e.container),
                    e.options.classPrefix + "long-video"
                  ),
                e
                  .getElement(e.controls)
                  .querySelector("." + e.options.classPrefix + "duration") &&
                  0 < t &&
                  (e
                    .getElement(e.controls)
                    .querySelector(
                      "." + e.options.classPrefix + "duration"
                    ).innerHTML = n);
            },
          });
      },
      { 18: 18, 2: 2, 28: 28, 32: 32 },
    ],
    15: [
      function (e, t, n) {
        "use strict";
        var L = r(e(2)),
          d = r(e(9)),
          F = r(e(7)),
          o = e(18),
          i = r(o),
          m = e(32),
          I = e(29),
          j = e(28);
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.assign(o.config, {
          startLanguage: "",
          tracksText: null,
          chaptersText: null,
          tracksAriaLive: !1,
          hideCaptionsButtonWhenEmpty: !0,
          toggleCaptionsButtonWhenOnlyOne: !1,
          slidesSelector: "",
        }),
          Object.assign(i.default.prototype, {
            hasChapters: !1,
            buildtracks: function (o, e, t, n) {
              if (
                (this.findTracks(),
                o.tracks.length || (o.trackFiles && 0 !== !o.trackFiles.length))
              ) {
                var i = this,
                  r = i.options.tracksAriaLive
                    ? ' role="log" aria-live="assertive" aria-atomic="false"'
                    : "",
                  a = (0, I.isString)(i.options.tracksText)
                    ? i.options.tracksText
                    : F.default.t("mejs.captions-subtitles"),
                  s = (0, I.isString)(i.options.chaptersText)
                    ? i.options.chaptersText
                    : F.default.t("mejs.captions-chapters"),
                  l =
                    null === o.trackFiles
                      ? o.tracks.length
                      : o.trackFiles.length;
                if (i.domNode.textTracks)
                  for (var d = i.domNode.textTracks.length - 1; 0 <= d; d--)
                    i.domNode.textTracks[d].mode = "hidden";
                i.cleartracks(o),
                  (o.captions = L.default.createElement("div")),
                  (o.captions.className =
                    i.options.classPrefix +
                    "captions-layer " +
                    i.options.classPrefix +
                    "layer"),
                  (o.captions.innerHTML =
                    '<div class="' +
                    i.options.classPrefix +
                    "captions-position " +
                    i.options.classPrefix +
                    'captions-position-hover"' +
                    r +
                    '><span class="' +
                    i.options.classPrefix +
                    'captions-text"></span></div>'),
                  (o.captions.style.display = "none"),
                  t.insertBefore(o.captions, t.firstChild),
                  (o.captionsText = o.captions.querySelector(
                    "." + i.options.classPrefix + "captions-text"
                  )),
                  (o.captionsButton = L.default.createElement("div")),
                  (o.captionsButton.className =
                    i.options.classPrefix +
                    "button " +
                    i.options.classPrefix +
                    "captions-button"),
                  (o.captionsButton.innerHTML =
                    '<button type="button" aria-controls="' +
                    i.id +
                    '" title="' +
                    a +
                    '" aria-label="' +
                    a +
                    '" tabindex="0"></button><div class="' +
                    i.options.classPrefix +
                    "captions-selector " +
                    i.options.classPrefix +
                    'offscreen"><ul class="' +
                    i.options.classPrefix +
                    'captions-selector-list"><li class="' +
                    i.options.classPrefix +
                    'captions-selector-list-item"><input type="radio" class="' +
                    i.options.classPrefix +
                    'captions-selector-input" name="' +
                    o.id +
                    '_captions" id="' +
                    o.id +
                    '_captions_none" value="none" checked disabled><label class="' +
                    i.options.classPrefix +
                    "captions-selector-label " +
                    i.options.classPrefix +
                    'captions-selected" for="' +
                    o.id +
                    '_captions_none">' +
                    F.default.t("mejs.none") +
                    "</label></li></ul></div>"),
                  i.addControlElement(o.captionsButton, "tracks"),
                  (o.captionsButton.querySelector(
                    "." + i.options.classPrefix + "captions-selector-input"
                  ).disabled = !1),
                  (o.chaptersButton = L.default.createElement("div")),
                  (o.chaptersButton.className =
                    i.options.classPrefix +
                    "button " +
                    i.options.classPrefix +
                    "chapters-button"),
                  (o.chaptersButton.innerHTML =
                    '<button type="button" aria-controls="' +
                    i.id +
                    '" title="' +
                    s +
                    '" aria-label="' +
                    s +
                    '" tabindex="0"></button><div class="' +
                    i.options.classPrefix +
                    "chapters-selector " +
                    i.options.classPrefix +
                    'offscreen"><ul class="' +
                    i.options.classPrefix +
                    'chapters-selector-list"></ul></div>');
                for (var u = 0, c = 0; c < l; c++) {
                  var f = o.tracks[c].kind;
                  o.tracks[c].src.trim() &&
                    ("subtitles" === f || "captions" === f
                      ? u++
                      : "chapters" !== f ||
                        e.querySelector(
                          "." + i.options.classPrefix + "chapter-selector"
                        ) ||
                        o.captionsButton.parentNode.insertBefore(
                          o.chaptersButton,
                          o.captionsButton
                        ));
                }
                (o.trackToLoad = -1),
                  (o.selectedTrack = null),
                  (o.isLoadingTrack = !1);
                for (var p = 0; p < l; p++) {
                  var m = o.tracks[p].kind;
                  !o.tracks[p].src.trim() ||
                    ("subtitles" !== m && "captions" !== m) ||
                    o.addTrackButton(
                      o.tracks[p].trackId,
                      o.tracks[p].srclang,
                      o.tracks[p].label
                    );
                }
                o.loadNextTrack();
                var h = ["mouseenter", "focusin"],
                  v = ["mouseleave", "focusout"];
                if (i.options.toggleCaptionsButtonWhenOnlyOne && 1 === u)
                  o.captionsButton.addEventListener("click", function (e) {
                    var t = "none";
                    null === o.selectedTrack && (t = o.tracks[0].trackId);
                    var n = e.keyCode || e.which;
                    o.setTrack(t, void 0 !== n);
                  });
                else {
                  for (
                    var y = o.captionsButton.querySelectorAll(
                        "." + i.options.classPrefix + "captions-selector-label"
                      ),
                      g =
                        o.captionsButton.querySelectorAll("input[type=radio]"),
                      E = 0,
                      b = h.length;
                    E < b;
                    E++
                  )
                    o.captionsButton.addEventListener(h[E], function () {
                      (0,
                      j.removeClass)(this.querySelector("." + i.options.classPrefix + "captions-selector"), i.options.classPrefix + "offscreen");
                    });
                  for (var S = 0, w = v.length; S < w; S++)
                    o.captionsButton.addEventListener(v[S], function () {
                      (0,
                      j.addClass)(this.querySelector("." + i.options.classPrefix + "captions-selector"), i.options.classPrefix + "offscreen");
                    });
                  for (var x = 0, T = g.length; x < T; x++)
                    g[x].addEventListener("click", function (e) {
                      var t = e.keyCode || e.which;
                      o.setTrack(this.value, void 0 !== t);
                    });
                  for (var P = 0, C = y.length; P < C; P++)
                    y[P].addEventListener("click", function (e) {
                      var t = (0, j.siblings)(this, function (e) {
                          return "INPUT" === e.tagName;
                        })[0],
                        n = (0, I.createEvent)("click", t);
                      t.dispatchEvent(n), e.preventDefault();
                    });
                  o.captionsButton.addEventListener("keydown", function (e) {
                    e.stopPropagation();
                  });
                }
                for (var k = 0, _ = h.length; k < _; k++)
                  o.chaptersButton.addEventListener(h[k], function () {
                    this.querySelector(
                      "." + i.options.classPrefix + "chapters-selector-list"
                    ).children.length &&
                      (0, j.removeClass)(
                        this.querySelector(
                          "." + i.options.classPrefix + "chapters-selector"
                        ),
                        i.options.classPrefix + "offscreen"
                      );
                  });
                for (var N = 0, A = v.length; N < A; N++)
                  o.chaptersButton.addEventListener(v[N], function () {
                    (0,
                    j.addClass)(this.querySelector("." + i.options.classPrefix + "chapters-selector"), i.options.classPrefix + "offscreen");
                  });
                o.chaptersButton.addEventListener("keydown", function (e) {
                  e.stopPropagation();
                }),
                  o.options.alwaysShowControls
                    ? (0, j.addClass)(
                        o
                          .getElement(o.container)
                          .querySelector(
                            "." + i.options.classPrefix + "captions-position"
                          ),
                        i.options.classPrefix + "captions-position-hover"
                      )
                    : (o
                        .getElement(o.container)
                        .addEventListener("controlsshown", function () {
                          (0,
                          j.addClass)(o.getElement(o.container).querySelector("." + i.options.classPrefix + "captions-position"), i.options.classPrefix + "captions-position-hover");
                        }),
                      o
                        .getElement(o.container)
                        .addEventListener("controlshidden", function () {
                          n.paused ||
                            (0, j.removeClass)(
                              o
                                .getElement(o.container)
                                .querySelector(
                                  "." +
                                    i.options.classPrefix +
                                    "captions-position"
                                ),
                              i.options.classPrefix + "captions-position-hover"
                            );
                        })),
                  n.addEventListener("timeupdate", function () {
                    o.displayCaptions();
                  }),
                  "" !== o.options.slidesSelector &&
                    ((o.slidesContainer = L.default.querySelectorAll(
                      o.options.slidesSelector
                    )),
                    n.addEventListener("timeupdate", function () {
                      o.displaySlides();
                    }));
              }
            },
            cleartracks: function (e) {
              e &&
                (e.captions && e.captions.remove(),
                e.chapters && e.chapters.remove(),
                e.captionsText && e.captionsText.remove(),
                e.captionsButton && e.captionsButton.remove(),
                e.chaptersButton && e.chaptersButton.remove());
            },
            rebuildtracks: function () {
              var e = this;
              e.findTracks(),
                e.buildtracks(
                  e,
                  e.getElement(e.controls),
                  e.getElement(e.layers),
                  e.media
                );
            },
            findTracks: function () {
              var e = this,
                t =
                  null === e.trackFiles
                    ? e.node.querySelectorAll("track")
                    : e.trackFiles,
                n = t.length;
              e.tracks = [];
              for (var o = 0; o < n; o++) {
                var i = t[o],
                  r = i.getAttribute("srclang").toLowerCase() || "",
                  a =
                    e.id +
                    "_track_" +
                    o +
                    "_" +
                    i.getAttribute("kind") +
                    "_" +
                    r;
                e.tracks.push({
                  trackId: a,
                  srclang: r,
                  src: i.getAttribute("src"),
                  kind: i.getAttribute("kind"),
                  label: i.getAttribute("label") || "",
                  entries: [],
                  isLoaded: !1,
                });
              }
            },
            setTrack: function (e, t) {
              for (
                var n = this,
                  o = n.captionsButton.querySelectorAll('input[type="radio"]'),
                  i = n.captionsButton.querySelectorAll(
                    "." + n.options.classPrefix + "captions-selected"
                  ),
                  r = n.captionsButton.querySelector(
                    'input[value="' + e + '"]'
                  ),
                  a = 0,
                  s = o.length;
                a < s;
                a++
              )
                o[a].checked = !1;
              for (var l = 0, d = i.length; l < d; l++)
                (0, j.removeClass)(
                  i[l],
                  n.options.classPrefix + "captions-selected"
                );
              r.checked = !0;
              for (
                var u = (0, j.siblings)(r, function (e) {
                    return (0,
                    j.hasClass)(e, n.options.classPrefix + "captions-selector-label");
                  }),
                  c = 0,
                  f = u.length;
                c < f;
                c++
              )
                (0, j.addClass)(
                  u[c],
                  n.options.classPrefix + "captions-selected"
                );
              if ("none" === e)
                (n.selectedTrack = null),
                  (0, j.removeClass)(
                    n.captionsButton,
                    n.options.classPrefix + "captions-enabled"
                  );
              else
                for (var p = 0, m = n.tracks.length; p < m; p++) {
                  var h = n.tracks[p];
                  if (h.trackId === e) {
                    null === n.selectedTrack &&
                      (0, j.addClass)(
                        n.captionsButton,
                        n.options.classPrefix + "captions-enabled"
                      ),
                      (n.selectedTrack = h),
                      n.captions.setAttribute("lang", n.selectedTrack.srclang),
                      n.displayCaptions();
                    break;
                  }
                }
              var v = (0, I.createEvent)("captionschange", n.media);
              (v.detail.caption = n.selectedTrack),
                n.media.dispatchEvent(v),
                t ||
                  setTimeout(function () {
                    n.getElement(n.container).focus();
                  }, 500);
            },
            loadNextTrack: function () {
              var e = this;
              e.trackToLoad++,
                e.trackToLoad < e.tracks.length
                  ? ((e.isLoadingTrack = !0), e.loadTrack(e.trackToLoad))
                  : ((e.isLoadingTrack = !1), e.checkForTracks());
            },
            loadTrack: function (e) {
              var t = this,
                n = t.tracks[e];
              void 0 === n ||
                (void 0 === n.src && "" === n.src) ||
                (0, j.ajax)(
                  n.src,
                  "text",
                  function (e) {
                    (n.entries =
                      "string" == typeof e && /<tt\s+xml/gi.exec(e)
                        ? d.default.TrackFormatParser.dfxp.parse(e)
                        : d.default.TrackFormatParser.webvtt.parse(e)),
                      (n.isLoaded = !0),
                      t.enableTrackButton(n),
                      t.loadNextTrack(),
                      "slides" === n.kind
                        ? t.setupSlides(n)
                        : "chapters" !== n.kind ||
                          t.hasChapters ||
                          (t.drawChapters(n), (t.hasChapters = !0));
                  },
                  function () {
                    t.removeTrackButton(n.trackId), t.loadNextTrack();
                  }
                );
            },
            enableTrackButton: function (e) {
              var t = this,
                n = e.srclang,
                o = L.default.getElementById("" + e.trackId);
              if (o) {
                var i = e.label;
                "" === i && (i = F.default.t(d.default.language.codes[n]) || n),
                  (o.disabled = !1);
                for (
                  var r = (0, j.siblings)(o, function (e) {
                      return (0,
                      j.hasClass)(e, t.options.classPrefix + "captions-selector-label");
                    }),
                    a = 0,
                    s = r.length;
                  a < s;
                  a++
                )
                  r[a].innerHTML = i;
                if (t.options.startLanguage === n) {
                  o.checked = !0;
                  var l = (0, I.createEvent)("click", o);
                  o.dispatchEvent(l);
                }
              }
            },
            removeTrackButton: function (e) {
              var t = L.default.getElementById("" + e);
              if (t) {
                var n = t.closest("li");
                n && n.remove();
              }
            },
            addTrackButton: function (e, t, n) {
              var o = this;
              "" === n && (n = F.default.t(d.default.language.codes[t]) || t),
                (o.captionsButton.querySelector("ul").innerHTML +=
                  '<li class="' +
                  o.options.classPrefix +
                  'captions-selector-list-item"><input type="radio" class="' +
                  o.options.classPrefix +
                  'captions-selector-input" name="' +
                  o.id +
                  '_captions" id="' +
                  e +
                  '" value="' +
                  e +
                  '" disabled><label class="' +
                  o.options.classPrefix +
                  'captions-selector-label"for="' +
                  e +
                  '">' +
                  n +
                  " (loading)</label></li>");
            },
            checkForTracks: function () {
              var e = this,
                t = !1;
              if (e.options.hideCaptionsButtonWhenEmpty) {
                for (var n = 0, o = e.tracks.length; n < o; n++) {
                  var i = e.tracks[n].kind;
                  if (
                    ("subtitles" === i || "captions" === i) &&
                    e.tracks[n].isLoaded
                  ) {
                    t = !0;
                    break;
                  }
                }
                (e.captionsButton.style.display = t ? "" : "none"),
                  e.setControlsSize();
              }
            },
            displayCaptions: function () {
              if (void 0 !== this.tracks) {
                var e = this,
                  t = e.selectedTrack;
                if (null !== t && t.isLoaded) {
                  var n = e.searchTrackPosition(t.entries, e.media.currentTime);
                  if (-1 < n)
                    return (
                      (e.captionsText.innerHTML = (function (e) {
                        var t = L.default.createElement("div");
                        t.innerHTML = e;
                        for (
                          var n = t.getElementsByTagName("script"),
                            o = n.length;
                          o--;

                        )
                          n[o].remove();
                        for (
                          var i = t.getElementsByTagName("*"),
                            r = 0,
                            a = i.length;
                          r < a;
                          r++
                        )
                          for (
                            var s = i[r].attributes,
                              l = Array.prototype.slice.call(s),
                              d = 0,
                              u = l.length;
                            d < u;
                            d++
                          )
                            l[d].name.startsWith("on") ||
                            l[d].value.startsWith("javascript")
                              ? i[r].remove()
                              : "style" === l[d].name &&
                                i[r].removeAttribute(l[d].name);
                        return t.innerHTML;
                      })(t.entries[n].text)),
                      (e.captionsText.className =
                        e.options.classPrefix +
                        "captions-text " +
                        (t.entries[n].identifier || "")),
                      (e.captions.style.display = ""),
                      void (e.captions.style.height = "0px")
                    );
                  e.captions.style.display = "none";
                } else e.captions.style.display = "none";
              }
            },
            setupSlides: function (e) {
              (this.slides = e),
                (this.slides.entries.imgs = [this.slides.entries.length]),
                this.showSlide(0);
            },
            showSlide: function (e) {
              var i = this,
                r = this;
              if (void 0 !== r.tracks && void 0 !== r.slidesContainer) {
                var t = r.slides.entries[e].text,
                  n = r.slides.entries[e].imgs;
                if (void 0 === n || void 0 === n.fadeIn) {
                  var a = L.default.createElement("img");
                  (a.src = t),
                    a.addEventListener("load", function () {
                      var e = i,
                        t = (0, j.siblings)(e, function (e) {
                          return t(e);
                        });
                      (e.style.display = "none"),
                        (r.slidesContainer.innerHTML += e.innerHTML),
                        (0, j.fadeIn)(r.slidesContainer.querySelector(a));
                      for (var n = 0, o = t.length; n < o; n++)
                        (0, j.fadeOut)(t[n], 400);
                    }),
                    (r.slides.entries[e].imgs = n = a);
                } else if (!(0, j.visible)(n)) {
                  var o = (0, j.siblings)(self, function (e) {
                    return o(e);
                  });
                  (0, j.fadeIn)(r.slidesContainer.querySelector(n));
                  for (var s = 0, l = o.length; s < l; s++)
                    (0, j.fadeOut)(o[s]);
                }
              }
            },
            displaySlides: function () {
              if (void 0 !== this.slides) {
                var e = this.slides,
                  t = this.searchTrackPosition(
                    e.entries,
                    this.media.currentTime
                  );
                -1 < t && this.showSlide(t);
              }
            },
            drawChapters: function (e) {
              var r = this,
                t = e.entries.length;
              if (t) {
                r.chaptersButton.querySelector("ul").innerHTML = "";
                for (var n = 0; n < t; n++)
                  r.chaptersButton.querySelector("ul").innerHTML +=
                    '<li class="' +
                    r.options.classPrefix +
                    'chapters-selector-list-item" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false"><input type="radio" class="' +
                    r.options.classPrefix +
                    'captions-selector-input" name="' +
                    r.id +
                    '_chapters" id="' +
                    r.id +
                    "_chapters_" +
                    n +
                    '" value="' +
                    e.entries[n].start +
                    '" disabled><label class="' +
                    r.options.classPrefix +
                    'chapters-selector-label"for="' +
                    r.id +
                    "_chapters_" +
                    n +
                    '">' +
                    e.entries[n].text +
                    "</label></li>";
                for (
                  var o = r.chaptersButton.querySelectorAll(
                      'input[type="radio"]'
                    ),
                    i = r.chaptersButton.querySelectorAll(
                      "." + r.options.classPrefix + "chapters-selector-label"
                    ),
                    a = 0,
                    s = o.length;
                  a < s;
                  a++
                )
                  (o[a].disabled = !1),
                    (o[a].checked = !1),
                    o[a].addEventListener("click", function (e) {
                      var t = r.chaptersButton.querySelectorAll("li"),
                        n = (0, j.siblings)(this, function (e) {
                          return (0,
                          j.hasClass)(e, r.options.classPrefix + "chapters-selector-label");
                        })[0];
                      (this.checked = !0),
                        this.parentNode.setAttribute("aria-checked", !0),
                        (0, j.addClass)(
                          n,
                          r.options.classPrefix + "chapters-selected"
                        ),
                        (0, j.removeClass)(
                          r.chaptersButton.querySelector(
                            "." + r.options.classPrefix + "chapters-selected"
                          ),
                          r.options.classPrefix + "chapters-selected"
                        );
                      for (var o = 0, i = t.length; o < i; o++)
                        t[o].setAttribute("aria-checked", !1);
                      void 0 === (e.keyCode || e.which) &&
                        setTimeout(function () {
                          r.getElement(r.container).focus();
                        }, 500),
                        r.media.setCurrentTime(parseFloat(this.value)),
                        r.media.paused && r.media.play();
                    });
                for (var l = 0, d = i.length; l < d; l++)
                  i[l].addEventListener("click", function (e) {
                    var t = (0, j.siblings)(this, function (e) {
                        return "INPUT" === e.tagName;
                      })[0],
                      n = (0, I.createEvent)("click", t);
                    t.dispatchEvent(n), e.preventDefault();
                  });
              }
            },
            searchTrackPosition: function (e, t) {
              for (
                var n = 0, o = e.length - 1, i = void 0, r = void 0, a = void 0;
                n <= o;

              ) {
                if (
                  ((r = e[(i = (n + o) >> 1)].start),
                  (a = e[i].stop),
                  r <= t && t < a)
                )
                  return i;
                r < t ? (n = i + 1) : t < r && (o = i - 1);
              }
              return -1;
            },
          }),
          (d.default.language = {
            codes: {
              af: "mejs.afrikaans",
              sq: "mejs.albanian",
              ar: "mejs.arabic",
              be: "mejs.belarusian",
              bg: "mejs.bulgarian",
              ca: "mejs.catalan",
              zh: "mejs.chinese",
              "zh-cn": "mejs.chinese-simplified",
              "zh-tw": "mejs.chines-traditional",
              hr: "mejs.croatian",
              cs: "mejs.czech",
              da: "mejs.danish",
              nl: "mejs.dutch",
              en: "mejs.english",
              et: "mejs.estonian",
              fl: "mejs.filipino",
              fi: "mejs.finnish",
              fr: "mejs.french",
              gl: "mejs.galician",
              de: "mejs.german",
              el: "mejs.greek",
              ht: "mejs.haitian-creole",
              iw: "mejs.hebrew",
              hi: "mejs.hindi",
              hu: "mejs.hungarian",
              is: "mejs.icelandic",
              id: "mejs.indonesian",
              ga: "mejs.irish",
              it: "mejs.italian",
              ja: "mejs.japanese",
              ko: "mejs.korean",
              lv: "mejs.latvian",
              lt: "mejs.lithuanian",
              mk: "mejs.macedonian",
              ms: "mejs.malay",
              mt: "mejs.maltese",
              no: "mejs.norwegian",
              fa: "mejs.persian",
              pl: "mejs.polish",
              pt: "mejs.portuguese",
              ro: "mejs.romanian",
              ru: "mejs.russian",
              sr: "mejs.serbian",
              sk: "mejs.slovak",
              sl: "mejs.slovenian",
              es: "mejs.spanish",
              sw: "mejs.swahili",
              sv: "mejs.swedish",
              tl: "mejs.tagalog",
              th: "mejs.thai",
              tr: "mejs.turkish",
              uk: "mejs.ukrainian",
              vi: "mejs.vietnamese",
              cy: "mejs.welsh",
              yi: "mejs.yiddish",
            },
          }),
          (d.default.TrackFormatParser = {
            webvtt: {
              pattern:
                /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
              parse: function (e) {
                for (
                  var t = e.split(/\r?\n/),
                    n = [],
                    o = void 0,
                    i = void 0,
                    r = void 0,
                    a = 0,
                    s = t.length;
                  a < s;
                  a++
                ) {
                  if ((o = this.pattern.exec(t[a])) && a < t.length) {
                    for (
                      0 <= a - 1 && "" !== t[a - 1] && (r = t[a - 1]),
                        i = t[++a],
                        a++;
                      "" !== t[a] && a < t.length;

                    )
                      (i = i + "\n" + t[a]), a++;
                    (i = i
                      .trim()
                      .replace(
                        /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
                        "<a href='$1' target='_blank'>$1</a>"
                      )),
                      n.push({
                        identifier: r,
                        start:
                          0 === (0, m.convertSMPTEtoSeconds)(o[1])
                            ? 0.2
                            : (0, m.convertSMPTEtoSeconds)(o[1]),
                        stop: (0, m.convertSMPTEtoSeconds)(o[3]),
                        text: i,
                        settings: o[5],
                      });
                  }
                  r = "";
                }
                return n;
              },
            },
            dfxp: {
              parse: function (e) {
                var t = (e = $(e).filter("tt")).firstChild,
                  n = t.querySelectorAll("p"),
                  o = e.getElementById("" + t.attr("style")),
                  i = [],
                  r = void 0;
                if (o.length) {
                  o.removeAttribute("id");
                  var a = o.attributes;
                  if (a.length) {
                    r = {};
                    for (var s = 0, l = a.length; s < l; s++)
                      r[a[s].name.split(":")[1]] = a[s].value;
                  }
                }
                for (var d = 0, u = n.length; d < u; d++) {
                  var c = void 0,
                    f = { start: null, stop: null, style: null, text: null };
                  if (
                    (n.eq(d).attr("begin") &&
                      (f.start = (0, m.convertSMPTEtoSeconds)(
                        n.eq(d).attr("begin")
                      )),
                    !f.start &&
                      n.eq(d - 1).attr("end") &&
                      (f.start = (0, m.convertSMPTEtoSeconds)(
                        n.eq(d - 1).attr("end")
                      )),
                    n.eq(d).attr("end") &&
                      (f.stop = (0, m.convertSMPTEtoSeconds)(
                        n.eq(d).attr("end")
                      )),
                    !f.stop &&
                      n.eq(d + 1).attr("begin") &&
                      (f.stop = (0, m.convertSMPTEtoSeconds)(
                        n.eq(d + 1).attr("begin")
                      )),
                    r)
                  )
                    for (var p in ((c = ""), r)) c += p + ":" + r[p] + ";";
                  c && (f.style = c),
                    0 === f.start && (f.start = 0.2),
                    (f.text = n
                      .eq(d)
                      .innerHTML.trim()
                      .replace(
                        /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
                        "<a href='$1' target='_blank'>$1</a>"
                      )),
                    i.push(f);
                }
                return i;
              },
            },
          });
      },
      { 18: 18, 2: 2, 28: 28, 29: 29, 32: 32, 7: 7, 9: 9 },
    ],
    16: [
      function (e, t, n) {
        "use strict";
        var w = i(e(2)),
          x = e(18),
          o = i(x),
          T = i(e(7)),
          P = e(27),
          C = e(29),
          k = e(28);
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.assign(x.config, {
          muteText: null,
          unmuteText: null,
          allyVolumeControlText: null,
          hideVolumeOnTouchDevices: !0,
          audioVolume: "horizontal",
          videoVolume: "vertical",
          startVolume: 0.8,
        }),
          Object.assign(o.default.prototype, {
            buildvolume: function (e, t, n, o) {
              if (
                (!P.IS_ANDROID && !P.IS_IOS) ||
                !this.options.hideVolumeOnTouchDevices
              ) {
                var a = this,
                  s = a.isVideo ? a.options.videoVolume : a.options.audioVolume,
                  r = (0, C.isString)(a.options.muteText)
                    ? a.options.muteText
                    : T.default.t("mejs.mute"),
                  l = (0, C.isString)(a.options.unmuteText)
                    ? a.options.unmuteText
                    : T.default.t("mejs.unmute"),
                  i = (0, C.isString)(a.options.allyVolumeControlText)
                    ? a.options.allyVolumeControlText
                    : T.default.t("mejs.volume-help-text"),
                  d = w.default.createElement("div");
                if (
                  ((d.className =
                    a.options.classPrefix +
                    "button " +
                    a.options.classPrefix +
                    "volume-button " +
                    a.options.classPrefix +
                    "mute"),
                  (d.innerHTML =
                    "horizontal" === s
                      ? '<button type="button" aria-controls="' +
                        a.id +
                        '" title="' +
                        r +
                        '" aria-label="' +
                        r +
                        '" tabindex="0"></button>'
                      : '<button type="button" aria-controls="' +
                        a.id +
                        '" title="' +
                        r +
                        '" aria-label="' +
                        r +
                        '" tabindex="0"></button><a href="javascript:void(0);" class="' +
                        a.options.classPrefix +
                        'volume-slider" aria-label="' +
                        T.default.t("mejs.volume-slider") +
                        '" aria-valuemin="0" aria-valuemax="100" role="slider" aria-orientation="vertical"><span class="' +
                        a.options.classPrefix +
                        'offscreen">' +
                        i +
                        '</span><div class="' +
                        a.options.classPrefix +
                        'volume-total"><div class="' +
                        a.options.classPrefix +
                        'volume-current"></div><div class="' +
                        a.options.classPrefix +
                        'volume-handle"></div></div></a>'),
                  a.addControlElement(d, "volume"),
                  a.options.keyActions.push(
                    {
                      keys: [38],
                      action: function (e) {
                        var t = e
                          .getElement(e.container)
                          .querySelector(
                            "." + x.config.classPrefix + "volume-slider"
                          );
                        t && t.matches(":focus") && (t.style.display = "block"),
                          e.isVideo &&
                            (e.showControls(), e.startControlsTimer());
                        var n = Math.min(e.volume + 0.1, 1);
                        e.setVolume(n), 0 < n && e.setMuted(!1);
                      },
                    },
                    {
                      keys: [40],
                      action: function (e) {
                        var t = e
                          .getElement(e.container)
                          .querySelector(
                            "." + x.config.classPrefix + "volume-slider"
                          );
                        t && (t.style.display = "block"),
                          e.isVideo &&
                            (e.showControls(), e.startControlsTimer());
                        var n = Math.max(e.volume - 0.1, 0);
                        e.setVolume(n), n <= 0.1 && e.setMuted(!0);
                      },
                    },
                    {
                      keys: [77],
                      action: function (e) {
                        (e
                          .getElement(e.container)
                          .querySelector(
                            "." + x.config.classPrefix + "volume-slider"
                          ).style.display = "block"),
                          e.isVideo &&
                            (e.showControls(), e.startControlsTimer()),
                          e.media.muted ? e.setMuted(!1) : e.setMuted(!0);
                      },
                    }
                  ),
                  "horizontal" === s)
                ) {
                  var u = w.default.createElement("a");
                  (u.className =
                    a.options.classPrefix + "horizontal-volume-slider"),
                    (u.href = "javascript:void(0);"),
                    u.setAttribute(
                      "aria-label",
                      T.default.t("mejs.volume-slider")
                    ),
                    u.setAttribute("aria-valuemin", 0),
                    u.setAttribute("aria-valuemax", 100),
                    u.setAttribute("aria-valuenow", 100),
                    u.setAttribute("role", "slider"),
                    (u.innerHTML +=
                      '<span class="' +
                      a.options.classPrefix +
                      'offscreen">' +
                      i +
                      '</span><div class="' +
                      a.options.classPrefix +
                      'horizontal-volume-total"><div class="' +
                      a.options.classPrefix +
                      'horizontal-volume-current"></div><div class="' +
                      a.options.classPrefix +
                      'horizontal-volume-handle"></div></div>'),
                    d.parentNode.insertBefore(u, d.nextSibling);
                }
                var c = !1,
                  f = !1,
                  p = !1,
                  m =
                    "vertical" === s
                      ? a
                          .getElement(a.container)
                          .querySelector(
                            "." + a.options.classPrefix + "volume-slider"
                          )
                      : a
                          .getElement(a.container)
                          .querySelector(
                            "." +
                              a.options.classPrefix +
                              "horizontal-volume-slider"
                          ),
                  h =
                    "vertical" === s
                      ? a
                          .getElement(a.container)
                          .querySelector(
                            "." + a.options.classPrefix + "volume-total"
                          )
                      : a
                          .getElement(a.container)
                          .querySelector(
                            "." +
                              a.options.classPrefix +
                              "horizontal-volume-total"
                          ),
                  v =
                    "vertical" === s
                      ? a
                          .getElement(a.container)
                          .querySelector(
                            "." + a.options.classPrefix + "volume-current"
                          )
                      : a
                          .getElement(a.container)
                          .querySelector(
                            "." +
                              a.options.classPrefix +
                              "horizontal-volume-current"
                          ),
                  y =
                    "vertical" === s
                      ? a
                          .getElement(a.container)
                          .querySelector(
                            "." + a.options.classPrefix + "volume-handle"
                          )
                      : a
                          .getElement(a.container)
                          .querySelector(
                            "." +
                              a.options.classPrefix +
                              "horizontal-volume-handle"
                          ),
                  g = function (e) {
                    if (null !== e && !isNaN(e) && void 0 !== e) {
                      if (((e = Math.max(0, e)), 0 === (e = Math.min(e, 1)))) {
                        (0, k.removeClass)(d, a.options.classPrefix + "mute"),
                          (0, k.addClass)(d, a.options.classPrefix + "unmute");
                        var t = d.firstElementChild;
                        t.setAttribute("title", l),
                          t.setAttribute("aria-label", l);
                      } else {
                        (0, k.removeClass)(d, a.options.classPrefix + "unmute"),
                          (0, k.addClass)(d, a.options.classPrefix + "mute");
                        var n = d.firstElementChild;
                        n.setAttribute("title", r),
                          n.setAttribute("aria-label", r);
                      }
                      var o = 100 * e + "%",
                        i = getComputedStyle(y);
                      "vertical" === s
                        ? ((v.style.bottom = 0),
                          (v.style.height = o),
                          (y.style.bottom = o),
                          (y.style.marginBottom =
                            -parseFloat(i.height) / 2 + "px"))
                        : ((v.style.left = 0),
                          (v.style.width = o),
                          (y.style.left = o),
                          (y.style.marginLeft =
                            -parseFloat(i.width) / 2 + "px"));
                    }
                  },
                  E = function (e) {
                    var t = (0, k.offset)(h),
                      n = getComputedStyle(h);
                    p = !0;
                    var o = null;
                    if ("vertical" === s) {
                      var i = parseFloat(n.height);
                      if (
                        ((o = (i - (e.pageY - t.top)) / i),
                        0 === t.top || 0 === t.left)
                      )
                        return;
                    } else {
                      var r = parseFloat(n.width);
                      o = (e.pageX - t.left) / r;
                    }
                    (o = Math.max(0, o)),
                      (o = Math.min(o, 1)),
                      g(o),
                      a.setMuted(0 === o),
                      a.setVolume(o),
                      e.preventDefault(),
                      e.stopPropagation();
                  },
                  b = function () {
                    a.muted
                      ? (g(0),
                        (0, k.removeClass)(d, a.options.classPrefix + "mute"),
                        (0, k.addClass)(d, a.options.classPrefix + "unmute"))
                      : (g(o.volume),
                        (0, k.removeClass)(d, a.options.classPrefix + "unmute"),
                        (0, k.addClass)(d, a.options.classPrefix + "mute"));
                  };
                e
                  .getElement(e.container)
                  .addEventListener("keydown", function (e) {
                    !!e.target.closest(
                      "." + a.options.classPrefix + "container"
                    ) ||
                      "vertical" !== s ||
                      (m.style.display = "none");
                  }),
                  d.addEventListener("mouseenter", function (e) {
                    e.target === d &&
                      ((m.style.display = "block"),
                      (f = !0),
                      e.preventDefault(),
                      e.stopPropagation());
                  }),
                  d.addEventListener("focusin", function () {
                    (m.style.display = "block"), (f = !0);
                  }),
                  d.addEventListener("focusout", function (e) {
                    (e.relatedTarget &&
                      (!e.relatedTarget ||
                        e.relatedTarget.matches(
                          "." + a.options.classPrefix + "volume-slider"
                        ))) ||
                      "vertical" !== s ||
                      (m.style.display = "none");
                  }),
                  d.addEventListener("mouseleave", function () {
                    (f = !1),
                      c || "vertical" !== s || (m.style.display = "none");
                  }),
                  d.addEventListener("focusout", function () {
                    f = !1;
                  }),
                  d.addEventListener("keydown", function (e) {
                    if (
                      a.options.enableKeyboard &&
                      a.options.keyActions.length
                    ) {
                      var t = e.which || e.keyCode || 0,
                        n = o.volume;
                      switch (t) {
                        case 38:
                          n = Math.min(n + 0.1, 1);
                          break;
                        case 40:
                          n = Math.max(0, n - 0.1);
                          break;
                        default:
                          return !0;
                      }
                      (c = !1),
                        g(n),
                        o.setVolume(n),
                        e.preventDefault(),
                        e.stopPropagation();
                    }
                  }),
                  d
                    .querySelector("button")
                    .addEventListener("click", function () {
                      o.setMuted(!o.muted);
                      var e = (0, C.createEvent)("volumechange", o);
                      o.dispatchEvent(e);
                    }),
                  m.addEventListener("dragstart", function () {
                    return !1;
                  }),
                  m.addEventListener("mouseover", function () {
                    f = !0;
                  }),
                  m.addEventListener("focusin", function () {
                    (m.style.display = "block"), (f = !0);
                  }),
                  m.addEventListener("focusout", function () {
                    (f = !1),
                      c || "vertical" !== s || (m.style.display = "none");
                  }),
                  m.addEventListener("mousedown", function (e) {
                    E(e),
                      a.globalBind("mousemove.vol", function (e) {
                        var t = e.target;
                        c &&
                          (t === m ||
                            t.closest(
                              "vertical" === s
                                ? "." + a.options.classPrefix + "volume-slider"
                                : "." +
                                    a.options.classPrefix +
                                    "horizontal-volume-slider"
                            )) &&
                          E(e);
                      }),
                      a.globalBind("mouseup.vol", function () {
                        (c = !1),
                          f || "vertical" !== s || (m.style.display = "none");
                      }),
                      (c = !0),
                      e.preventDefault(),
                      e.stopPropagation();
                  }),
                  o.addEventListener("volumechange", function (e) {
                    var t;
                    c || b(),
                      (t = Math.floor(100 * o.volume)),
                      m.setAttribute("aria-valuenow", t),
                      m.setAttribute("aria-valuetext", t + "%");
                  });
                var S = !1;
                o.addEventListener("rendererready", function () {
                  p ||
                    setTimeout(function () {
                      (S = !0),
                        (0 === e.options.startVolume || o.originalNode.muted) &&
                          (o.setMuted(!0), (e.options.startVolume = 0)),
                        o.setVolume(e.options.startVolume),
                        a.setControlsSize();
                    }, 250);
                }),
                  o.addEventListener("loadedmetadata", function () {
                    setTimeout(function () {
                      p ||
                        S ||
                        ((0 === e.options.startVolume ||
                          o.originalNode.muted) &&
                          o.setMuted(!0),
                        o.setVolume(e.options.startVolume),
                        a.setControlsSize()),
                        (S = !1);
                    }, 250);
                  }),
                  (0 === e.options.startVolume || o.originalNode.muted) &&
                    (o.setMuted(!0), (e.options.startVolume = 0), b()),
                  a
                    .getElement(a.container)
                    .addEventListener("controlsresize", function () {
                      b();
                    });
              }
            },
          });
      },
      { 18: 18, 2: 2, 27: 27, 28: 28, 29: 29, 7: 7 },
    ],
    17: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.EN = {
          "mejs.plural-form": 1,
          "mejs.download-file": "Download File",
          "mejs.install-flash":
            "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/",
          "mejs.fullscreen": "Fullscreen",
          "mejs.play": "Play",
          "mejs.pause": "Pause",
          "mejs.time-slider": "Time Slider",
          "mejs.time-help-text":
            "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
          "mejs.live-broadcast": "Live Broadcast",
          "mejs.volume-help-text":
            "Use Up/Down Arrow keys to increase or decrease volume.",
          "mejs.unmute": "Unmute",
          "mejs.mute": "Mute",
          "mejs.volume-slider": "Volume Slider",
          "mejs.video-player": "Video Player",
          "mejs.audio-player": "Audio Player",
          "mejs.captions-subtitles": "Captions/Subtitles",
          "mejs.captions-chapters": "Chapters",
          "mejs.none": "None",
          "mejs.afrikaans": "Afrikaans",
          "mejs.albanian": "Albanian",
          "mejs.arabic": "Arabic",
          "mejs.belarusian": "Belarusian",
          "mejs.bulgarian": "Bulgarian",
          "mejs.catalan": "Catalan",
          "mejs.chinese": "Chinese",
          "mejs.chinese-simplified": "Chinese (Simplified)",
          "mejs.chinese-traditional": "Chinese (Traditional)",
          "mejs.croatian": "Croatian",
          "mejs.czech": "Czech",
          "mejs.danish": "Danish",
          "mejs.dutch": "Dutch",
          "mejs.english": "English",
          "mejs.estonian": "Estonian",
          "mejs.filipino": "Filipino",
          "mejs.finnish": "Finnish",
          "mejs.french": "French",
          "mejs.galician": "Galician",
          "mejs.german": "German",
          "mejs.greek": "Greek",
          "mejs.haitian-creole": "Haitian Creole",
          "mejs.hebrew": "Hebrew",
          "mejs.hindi": "Hindi",
          "mejs.hungarian": "Hungarian",
          "mejs.icelandic": "Icelandic",
          "mejs.indonesian": "Indonesian",
          "mejs.irish": "Irish",
          "mejs.italian": "Italian",
          "mejs.japanese": "Japanese",
          "mejs.korean": "Korean",
          "mejs.latvian": "Latvian",
          "mejs.lithuanian": "Lithuanian",
          "mejs.macedonian": "Macedonian",
          "mejs.malay": "Malay",
          "mejs.maltese": "Maltese",
          "mejs.norwegian": "Norwegian",
          "mejs.persian": "Persian",
          "mejs.polish": "Polish",
          "mejs.portuguese": "Portuguese",
          "mejs.romanian": "Romanian",
          "mejs.russian": "Russian",
          "mejs.serbian": "Serbian",
          "mejs.slovak": "Slovak",
          "mejs.slovenian": "Slovenian",
          "mejs.spanish": "Spanish",
          "mejs.swahili": "Swahili",
          "mejs.swedish": "Swedish",
          "mejs.tagalog": "Tagalog",
          "mejs.thai": "Thai",
          "mejs.turkish": "Turkish",
          "mejs.ukrainian": "Ukrainian",
          "mejs.vietnamese": "Vietnamese",
          "mejs.welsh": "Welsh",
          "mejs.yiddish": "Yiddish",
        };
      },
      {},
    ],
    18: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.config = void 0);
        var i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          o = (function () {
            function o(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (e, t, n) {
              return t && o(e.prototype, t), n && o(e, n), e;
            };
          })(),
          S = r(e(3)),
          w = r(e(2)),
          v = r(e(9)),
          y = r(e(8)),
          a = r(e(19)),
          g = r(e(7)),
          x = e(27),
          E = e(29),
          d = e(32),
          b = e(30),
          T = (function (e) {
            {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return (t.default = e), t;
            }
          })(e(28));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (v.default.mepIndex = 0), (v.default.players = {});
        var s = (n.config = {
          poster: "",
          showPosterWhenEnded: !1,
          showPosterWhenPaused: !1,
          defaultVideoWidth: 480,
          defaultVideoHeight: 270,
          videoWidth: -1,
          videoHeight: -1,
          defaultAudioWidth: 400,
          defaultAudioHeight: 40,
          defaultSeekBackwardInterval: function (e) {
            return 0.05 * e.getDuration();
          },
          defaultSeekForwardInterval: function (e) {
            return 0.05 * e.getDuration();
          },
          setDimensions: !0,
          audioWidth: -1,
          audioHeight: -1,
          loop: !1,
          autoRewind: !0,
          enableAutosize: !0,
          timeFormat: "",
          alwaysShowHours: !1,
          showTimecodeFrameCount: !1,
          framesPerSecond: 25,
          alwaysShowControls: !1,
          hideVideoControlsOnLoad: !1,
          hideVideoControlsOnPause: !1,
          clickToPlayPause: !0,
          controlsTimeoutDefault: 1500,
          controlsTimeoutMouseEnter: 2500,
          controlsTimeoutMouseLeave: 1e3,
          iPadUseNativeControls: !1,
          iPhoneUseNativeControls: !1,
          AndroidUseNativeControls: !1,
          features: [
            "playpause",
            "current",
            "progress",
            "duration",
            "tracks",
            "volume",
            "fullscreen",
          ],
          useDefaultControls: !1,
          isVideo: !0,
          stretching: "auto",
          classPrefix: "mejs__",
          enableKeyboard: !0,
          pauseOtherPlayers: !0,
          secondsDecimalLength: 0,
          customError: null,
          keyActions: [
            {
              keys: [32, 179],
              action: function (e) {
                x.IS_FIREFOX || (e.paused || e.ended ? e.play() : e.pause());
              },
            },
          ],
        });
        v.default.MepDefaults = s;
        var l = (function () {
          function r(e, t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r);
            var n = this,
              o = "string" == typeof e ? w.default.getElementById(e) : e;
            if (!(n instanceof r)) return new r(o, t);
            if (((n.node = n.media = o), n.node)) {
              if (n.media.player) return n.media.player;
              if (
                ((n.hasFocus = !1),
                (n.controlsAreVisible = !0),
                (n.controlsEnabled = !0),
                (n.controlsTimer = null),
                (n.currentMediaTime = 0),
                (n.proxy = null),
                void 0 === t)
              ) {
                var i = n.node.getAttribute("data-mejsoptions");
                t = i ? JSON.parse(i) : {};
              }
              return (
                (n.options = Object.assign({}, s, t)),
                n.options.loop && !n.media.getAttribute("loop")
                  ? ((n.media.loop = !0), (n.node.loop = !0))
                  : n.media.loop && (n.options.loop = !0),
                n.options.timeFormat ||
                  ((n.options.timeFormat = "mm:ss"),
                  n.options.alwaysShowHours &&
                    (n.options.timeFormat = "hh:mm:ss"),
                  n.options.showTimecodeFrameCount &&
                    (n.options.timeFormat += ":ff")),
                (0, d.calculateTimeFormat)(
                  0,
                  n.options,
                  n.options.framesPerSecond || 25
                ),
                (n.id = "mep_" + v.default.mepIndex++),
                (v.default.players[n.id] = n).init(),
                n
              );
            }
          }
          return (
            o(r, [
              {
                key: "getElement",
                value: function (e) {
                  return e;
                },
              },
              {
                key: "init",
                value: function () {
                  var n = this,
                    e = Object.assign({}, n.options, {
                      success: function (e, t) {
                        n._meReady(e, t);
                      },
                      error: function (e) {
                        n._handleError(e);
                      },
                    }),
                    t = n.node.tagName.toLowerCase();
                  if (
                    ((n.isDynamic =
                      "audio" !== t && "video" !== t && "iframe" !== t),
                    (n.isVideo = n.isDynamic
                      ? n.options.isVideo
                      : "audio" !== t && n.options.isVideo),
                    (n.mediaFiles = null),
                    (n.trackFiles = null),
                    (x.IS_IPAD && n.options.iPadUseNativeControls) ||
                      (x.IS_IPHONE && n.options.iPhoneUseNativeControls))
                  )
                    n.node.setAttribute("controls", !0),
                      x.IS_IPAD && n.node.getAttribute("autoplay") && n.play();
                  else if (
                    (!n.isVideo &&
                      (n.isVideo ||
                        (!n.options.features.length &&
                          !n.options.useDefaultControls))) ||
                    (x.IS_ANDROID && n.options.AndroidUseNativeControls)
                  )
                    n.isVideo ||
                      n.options.features.length ||
                      n.options.useDefaultControls ||
                      (n.node.style.display = "none");
                  else {
                    n.node.removeAttribute("controls");
                    var o = n.isVideo
                        ? g.default.t("mejs.video-player")
                        : g.default.t("mejs.audio-player"),
                      i = w.default.createElement("span");
                    if (
                      ((i.className = n.options.classPrefix + "offscreen"),
                      (i.innerText = o),
                      n.media.parentNode.insertBefore(i, n.media),
                      (n.container = w.default.createElement("div")),
                      (n.getElement(n.container).id = n.id),
                      (n.getElement(n.container).className =
                        n.options.classPrefix +
                        "container " +
                        n.options.classPrefix +
                        "container-keyboard-inactive " +
                        n.media.className),
                      (n.getElement(n.container).tabIndex = 0),
                      n
                        .getElement(n.container)
                        .setAttribute("role", "application"),
                      n.getElement(n.container).setAttribute("aria-label", o),
                      (n.getElement(n.container).innerHTML =
                        '<div class="' +
                        n.options.classPrefix +
                        'inner"><div class="' +
                        n.options.classPrefix +
                        'mediaelement"></div><div class="' +
                        n.options.classPrefix +
                        'layers"></div><div class="' +
                        n.options.classPrefix +
                        'controls"></div></div>'),
                      n
                        .getElement(n.container)
                        .addEventListener("focus", function (e) {
                          if (
                            !n.controlsAreVisible &&
                            !n.hasFocus &&
                            n.controlsEnabled
                          ) {
                            n.showControls(!0);
                            var t = (0, E.isNodeAfter)(
                              e.relatedTarget,
                              n.getElement(n.container)
                            )
                              ? "." +
                                n.options.classPrefix +
                                "controls ." +
                                n.options.classPrefix +
                                "button:last-child > button"
                              : "." +
                                n.options.classPrefix +
                                "playpause-button > button";
                            n.getElement(n.container).querySelector(t).focus();
                          }
                        }),
                      n.node.parentNode.insertBefore(
                        n.getElement(n.container),
                        n.node
                      ),
                      n.options.features.length ||
                        n.options.useDefaultControls ||
                        ((n.getElement(n.container).style.background =
                          "transparent"),
                        (n
                          .getElement(n.container)
                          .querySelector(
                            "." + n.options.classPrefix + "controls"
                          ).style.display = "none")),
                      n.isVideo &&
                        "fill" === n.options.stretching &&
                        !T.hasClass(
                          n.getElement(n.container).parentNode,
                          n.options.classPrefix + "fill-container"
                        ))
                    ) {
                      n.outerContainer = n.media.parentNode;
                      var r = w.default.createElement("div");
                      (r.className = n.options.classPrefix + "fill-container"),
                        n
                          .getElement(n.container)
                          .parentNode.insertBefore(
                            r,
                            n.getElement(n.container)
                          ),
                        r.appendChild(n.getElement(n.container));
                    }
                    if (
                      (x.IS_ANDROID &&
                        T.addClass(
                          n.getElement(n.container),
                          n.options.classPrefix + "android"
                        ),
                      x.IS_IOS &&
                        T.addClass(
                          n.getElement(n.container),
                          n.options.classPrefix + "ios"
                        ),
                      x.IS_IPAD &&
                        T.addClass(
                          n.getElement(n.container),
                          n.options.classPrefix + "ipad"
                        ),
                      x.IS_IPHONE &&
                        T.addClass(
                          n.getElement(n.container),
                          n.options.classPrefix + "iphone"
                        ),
                      T.addClass(
                        n.getElement(n.container),
                        n.isVideo
                          ? n.options.classPrefix + "video"
                          : n.options.classPrefix + "audio"
                      ),
                      x.IS_SAFARI && !x.IS_IOS)
                    ) {
                      T.addClass(
                        n.getElement(n.container),
                        n.options.classPrefix + "hide-cues"
                      );
                      for (
                        var a = n.node.cloneNode(),
                          s = n.node.children,
                          l = [],
                          d = [],
                          u = 0,
                          c = s.length;
                        u < c;
                        u++
                      ) {
                        var f = s[u];
                        !(function () {
                          switch (f.tagName.toLowerCase()) {
                            case "source":
                              var t = {};
                              Array.prototype.slice
                                .call(f.attributes)
                                .forEach(function (e) {
                                  t[e.name] = e.value;
                                }),
                                (t.type = (0, b.formatType)(t.src, t.type)),
                                l.push(t);
                              break;
                            case "track":
                              (f.mode = "hidden"), d.push(f);
                              break;
                            default:
                              a.appendChild(f.cloneNode(!0));
                          }
                        })();
                      }
                      n.node.remove(),
                        (n.node = n.media = a),
                        l.length && (n.mediaFiles = l),
                        d.length && (n.trackFiles = d);
                    }
                    n
                      .getElement(n.container)
                      .querySelector(
                        "." + n.options.classPrefix + "mediaelement"
                      )
                      .appendChild(n.node),
                      ((n.media.player = n).controls = n
                        .getElement(n.container)
                        .querySelector(
                          "." + n.options.classPrefix + "controls"
                        )),
                      (n.layers = n
                        .getElement(n.container)
                        .querySelector("." + n.options.classPrefix + "layers"));
                    var p = n.isVideo ? "video" : "audio",
                      m = p.substring(0, 1).toUpperCase() + p.substring(1);
                    0 < n.options[p + "Width"] ||
                    -1 < n.options[p + "Width"].toString().indexOf("%")
                      ? (n.width = n.options[p + "Width"])
                      : "" !== n.node.style.width && null !== n.node.style.width
                      ? (n.width = n.node.style.width)
                      : n.node.getAttribute("width")
                      ? (n.width = n.node.getAttribute("width"))
                      : (n.width = n.options["default" + m + "Width"]),
                      0 < n.options[p + "Height"] ||
                      -1 < n.options[p + "Height"].toString().indexOf("%")
                        ? (n.height = n.options[p + "Height"])
                        : "" !== n.node.style.height &&
                          null !== n.node.style.height
                        ? (n.height = n.node.style.height)
                        : n.node.getAttribute("height")
                        ? (n.height = n.node.getAttribute("height"))
                        : (n.height = n.options["default" + m + "Height"]),
                      (n.initialAspectRatio =
                        n.height >= n.width
                          ? n.width / n.height
                          : n.height / n.width),
                      n.setPlayerSize(n.width, n.height),
                      (e.pluginWidth = n.width),
                      (e.pluginHeight = n.height);
                  }
                  if (
                    ((v.default.MepDefaults = e),
                    new y.default(n.media, e, n.mediaFiles),
                    void 0 !== n.getElement(n.container) &&
                      n.options.features.length &&
                      n.controlsAreVisible &&
                      !n.options.hideVideoControlsOnLoad)
                  ) {
                    var h = (0, E.createEvent)(
                      "controlsshown",
                      n.getElement(n.container)
                    );
                    n.getElement(n.container).dispatchEvent(h);
                  }
                },
              },
              {
                key: "showControls",
                value: function (e) {
                  var i = this;
                  if (
                    ((e = void 0 === e || e),
                    !i.controlsAreVisible && i.isVideo)
                  ) {
                    if (e)
                      !(function () {
                        T.fadeIn(i.getElement(i.controls), 200, function () {
                          T.removeClass(
                            i.getElement(i.controls),
                            i.options.classPrefix + "offscreen"
                          );
                          var e = (0, E.createEvent)(
                            "controlsshown",
                            i.getElement(i.container)
                          );
                          i.getElement(i.container).dispatchEvent(e);
                        });
                        for (
                          var n = i
                              .getElement(i.container)
                              .querySelectorAll(
                                "." + i.options.classPrefix + "control"
                              ),
                            e = function (e, t) {
                              T.fadeIn(n[e], 200, function () {
                                T.removeClass(
                                  n[e],
                                  i.options.classPrefix + "offscreen"
                                );
                              });
                            },
                            t = 0,
                            o = n.length;
                          t < o;
                          t++
                        )
                          e(t);
                      })();
                    else {
                      T.removeClass(
                        i.getElement(i.controls),
                        i.options.classPrefix + "offscreen"
                      ),
                        (i.getElement(i.controls).style.display = ""),
                        (i.getElement(i.controls).style.opacity = 1);
                      for (
                        var t = i
                            .getElement(i.container)
                            .querySelectorAll(
                              "." + i.options.classPrefix + "control"
                            ),
                          n = 0,
                          o = t.length;
                        n < o;
                        n++
                      )
                        T.removeClass(
                          t[n],
                          i.options.classPrefix + "offscreen"
                        ),
                          (t[n].style.display = "");
                      var r = (0, E.createEvent)(
                        "controlsshown",
                        i.getElement(i.container)
                      );
                      i.getElement(i.container).dispatchEvent(r);
                    }
                    (i.controlsAreVisible = !0), i.setControlsSize();
                  }
                },
              },
              {
                key: "hideControls",
                value: function (e, t) {
                  var i = this;
                  if (
                    ((e = void 0 === e || e),
                    !0 === t ||
                      !(
                        !i.controlsAreVisible ||
                        i.options.alwaysShowControls ||
                        (i.paused &&
                          4 === i.readyState &&
                          ((!i.options.hideVideoControlsOnLoad &&
                            i.currentTime <= 0) ||
                            (!i.options.hideVideoControlsOnPause &&
                              0 < i.currentTime))) ||
                        (i.isVideo &&
                          !i.options.hideVideoControlsOnLoad &&
                          !i.readyState) ||
                        i.ended
                      ))
                  ) {
                    if (e)
                      !(function () {
                        T.fadeOut(i.getElement(i.controls), 200, function () {
                          T.addClass(
                            i.getElement(i.controls),
                            i.options.classPrefix + "offscreen"
                          ),
                            (i.getElement(i.controls).style.display = "");
                          var e = (0, E.createEvent)(
                            "controlshidden",
                            i.getElement(i.container)
                          );
                          i.getElement(i.container).dispatchEvent(e);
                        });
                        for (
                          var n = i
                              .getElement(i.container)
                              .querySelectorAll(
                                "." + i.options.classPrefix + "control"
                              ),
                            e = function (e, t) {
                              T.fadeOut(n[e], 200, function () {
                                T.addClass(
                                  n[e],
                                  i.options.classPrefix + "offscreen"
                                ),
                                  (n[e].style.display = "");
                              });
                            },
                            t = 0,
                            o = n.length;
                          t < o;
                          t++
                        )
                          e(t);
                      })();
                    else {
                      T.addClass(
                        i.getElement(i.controls),
                        i.options.classPrefix + "offscreen"
                      ),
                        (i.getElement(i.controls).style.display = ""),
                        (i.getElement(i.controls).style.opacity = 0);
                      for (
                        var n = i
                            .getElement(i.container)
                            .querySelectorAll(
                              "." + i.options.classPrefix + "control"
                            ),
                          o = 0,
                          r = n.length;
                        o < r;
                        o++
                      )
                        T.addClass(n[o], i.options.classPrefix + "offscreen"),
                          (n[o].style.display = "");
                      var a = (0, E.createEvent)(
                        "controlshidden",
                        i.getElement(i.container)
                      );
                      i.getElement(i.container).dispatchEvent(a);
                    }
                    i.controlsAreVisible = !1;
                  }
                },
              },
              {
                key: "startControlsTimer",
                value: function (e) {
                  var t = this;
                  (e = void 0 !== e ? e : t.options.controlsTimeoutDefault),
                    t.killControlsTimer("start"),
                    (t.controlsTimer = setTimeout(function () {
                      t.hideControls(), t.killControlsTimer("hide");
                    }, e));
                },
              },
              {
                key: "killControlsTimer",
                value: function () {
                  null !== this.controlsTimer &&
                    (clearTimeout(this.controlsTimer),
                    delete this.controlsTimer,
                    (this.controlsTimer = null));
                },
              },
              {
                key: "disableControls",
                value: function () {
                  this.killControlsTimer(),
                    (this.controlsEnabled = !1),
                    this.hideControls(!1, !0);
                },
              },
              {
                key: "enableControls",
                value: function () {
                  (this.controlsEnabled = !0), this.showControls(!1);
                },
              },
              {
                key: "_setDefaultPlayer",
                value: function () {
                  var e = this;
                  e.proxy && e.proxy.pause(),
                    (e.proxy = new a.default(e)),
                    e.media.addEventListener("loadedmetadata", function () {
                      0 < e.getCurrentTime() &&
                        0 < e.currentMediaTime &&
                        (e.setCurrentTime(e.currentMediaTime),
                        x.IS_IOS || x.IS_ANDROID || e.play());
                    });
                },
              },
              {
                key: "_meReady",
                value: function (e, t) {
                  var n = this,
                    o = t.getAttribute("autoplay"),
                    i = !(null == o || "false" === o),
                    r =
                      null !== e.rendererName &&
                      /(native|html5)/i.test(n.media.rendererName);
                  if (
                    (n.getElement(n.controls) && n.enableControls(),
                    n.getElement(n.container) &&
                      n
                        .getElement(n.container)
                        .querySelector(
                          "." + n.options.classPrefix + "overlay-play"
                        ) &&
                      (n
                        .getElement(n.container)
                        .querySelector(
                          "." + n.options.classPrefix + "overlay-play"
                        ).style.display = ""),
                    !n.created)
                  ) {
                    if (
                      ((n.created = !0),
                      (n.media = e),
                      (n.domNode = t),
                      !(
                        (x.IS_ANDROID && n.options.AndroidUseNativeControls) ||
                        (x.IS_IPAD && n.options.iPadUseNativeControls) ||
                        (x.IS_IPHONE && n.options.iPhoneUseNativeControls)
                      ))
                    ) {
                      if (
                        !n.isVideo &&
                        !n.options.features.length &&
                        !n.options.useDefaultControls
                      )
                        return (
                          i && r && n.play(),
                          void (
                            n.options.success &&
                            ("string" == typeof n.options.success
                              ? S.default[n.options.success](
                                  n.media,
                                  n.domNode,
                                  n
                                )
                              : n.options.success(n.media, n.domNode, n))
                          )
                        );
                      if (
                        ((n.featurePosition = {}),
                        n._setDefaultPlayer(),
                        n.buildposter(
                          n,
                          n.getElement(n.controls),
                          n.getElement(n.layers),
                          n.media
                        ),
                        n.buildkeyboard(
                          n,
                          n.getElement(n.controls),
                          n.getElement(n.layers),
                          n.media
                        ),
                        n.buildoverlays(
                          n,
                          n.getElement(n.controls),
                          n.getElement(n.layers),
                          n.media
                        ),
                        n.options.useDefaultControls)
                      ) {
                        var a = [
                          "playpause",
                          "current",
                          "progress",
                          "duration",
                          "tracks",
                          "volume",
                          "fullscreen",
                        ];
                        n.options.features = a.concat(
                          n.options.features.filter(function (e) {
                            return -1 === a.indexOf(e);
                          })
                        );
                      }
                      n.buildfeatures(
                        n,
                        n.getElement(n.controls),
                        n.getElement(n.layers),
                        n.media
                      );
                      var s = (0, E.createEvent)(
                        "controlsready",
                        n.getElement(n.container)
                      );
                      n.getElement(n.container).dispatchEvent(s),
                        n.setPlayerSize(n.width, n.height),
                        n.setControlsSize(),
                        n.isVideo &&
                          ((n.clickToPlayPauseCallback = function () {
                            if (n.options.clickToPlayPause) {
                              var e = n
                                  .getElement(n.container)
                                  .querySelector(
                                    "." +
                                      n.options.classPrefix +
                                      "overlay-button"
                                  ),
                                t = e.getAttribute("aria-pressed");
                              n.paused && t
                                ? n.pause()
                                : n.paused
                                ? n.play()
                                : n.pause(),
                                e.setAttribute("aria-pressed", !t),
                                n.getElement(n.container).focus();
                            }
                          }),
                          n.createIframeLayer(),
                          n.media.addEventListener(
                            "click",
                            n.clickToPlayPauseCallback
                          ),
                          (!x.IS_ANDROID && !x.IS_IOS) ||
                          n.options.alwaysShowControls
                            ? (n
                                .getElement(n.container)
                                .addEventListener("mouseenter", function () {
                                  n.controlsEnabled &&
                                    (n.options.alwaysShowControls ||
                                      (n.killControlsTimer("enter"),
                                      n.showControls(),
                                      n.startControlsTimer(
                                        n.options.controlsTimeoutMouseEnter
                                      )));
                                }),
                              n
                                .getElement(n.container)
                                .addEventListener("mousemove", function () {
                                  n.controlsEnabled &&
                                    (n.controlsAreVisible || n.showControls(),
                                    n.options.alwaysShowControls ||
                                      n.startControlsTimer(
                                        n.options.controlsTimeoutMouseEnter
                                      ));
                                }),
                              n
                                .getElement(n.container)
                                .addEventListener("mouseleave", function () {
                                  n.controlsEnabled &&
                                    (n.paused ||
                                      n.options.alwaysShowControls ||
                                      n.startControlsTimer(
                                        n.options.controlsTimeoutMouseLeave
                                      ));
                                }))
                            : n.node.addEventListener(
                                "touchstart",
                                function () {
                                  n.controlsAreVisible
                                    ? n.hideControls(!1)
                                    : n.controlsEnabled && n.showControls(!1);
                                },
                                !!x.SUPPORT_PASSIVE_EVENT && { passive: !0 }
                              ),
                          n.options.hideVideoControlsOnLoad &&
                            n.hideControls(!1),
                          n.options.enableAutosize &&
                            n.media.addEventListener(
                              "loadedmetadata",
                              function (e) {
                                var t =
                                  void 0 !== e
                                    ? e.detail.target || e.target
                                    : n.media;
                                n.options.videoHeight <= 0 &&
                                  !n.domNode.getAttribute("height") &&
                                  !n.domNode.style.height &&
                                  null !== t &&
                                  !isNaN(t.videoHeight) &&
                                  (n.setPlayerSize(t.videoWidth, t.videoHeight),
                                  n.setControlsSize(),
                                  n.media.setSize(t.videoWidth, t.videoHeight));
                              }
                            )),
                        n.media.addEventListener("play", function () {
                          for (var e in ((n.hasFocus = !0), v.default.players))
                            if (v.default.players.hasOwnProperty(e)) {
                              var t = v.default.players[e];
                              t.id === n.id ||
                                !n.options.pauseOtherPlayers ||
                                t.paused ||
                                t.ended ||
                                (t.pause(), (t.hasFocus = !1));
                            }
                          x.IS_ANDROID ||
                            x.IS_IOS ||
                            n.options.alwaysShowControls ||
                            !n.isVideo ||
                            n.hideControls();
                        }),
                        n.media.addEventListener("ended", function () {
                          if (n.options.autoRewind)
                            try {
                              n.setCurrentTime(0),
                                setTimeout(function () {
                                  var e = n
                                    .getElement(n.container)
                                    .querySelector(
                                      "." +
                                        n.options.classPrefix +
                                        "overlay-loading"
                                    );
                                  e &&
                                    e.parentNode &&
                                    (e.parentNode.style.display = "none");
                                }, 20);
                            } catch (e) {}
                          "function" == typeof n.media.renderer.stop
                            ? n.media.renderer.stop()
                            : n.pause(),
                            n.setProgressRail && n.setProgressRail(),
                            n.setCurrentRail && n.setCurrentRail(),
                            n.options.loop
                              ? n.play()
                              : !n.options.alwaysShowControls &&
                                n.controlsEnabled &&
                                n.showControls();
                        }),
                        n.media.addEventListener("loadedmetadata", function () {
                          (0, d.calculateTimeFormat)(
                            n.getDuration(),
                            n.options,
                            n.options.framesPerSecond || 25
                          ),
                            n.updateDuration && n.updateDuration(),
                            n.updateCurrent && n.updateCurrent(),
                            n.isFullScreen ||
                              (n.setPlayerSize(n.width, n.height),
                              n.setControlsSize());
                        });
                      var l = null;
                      n.media.addEventListener("timeupdate", function () {
                        isNaN(n.getDuration()) ||
                          l === n.getDuration() ||
                          ((l = n.getDuration()),
                          (0, d.calculateTimeFormat)(
                            l,
                            n.options,
                            n.options.framesPerSecond || 25
                          ),
                          n.updateDuration && n.updateDuration(),
                          n.updateCurrent && n.updateCurrent(),
                          n.setControlsSize());
                      }),
                        n
                          .getElement(n.container)
                          .addEventListener("click", function (e) {
                            T.addClass(
                              e.currentTarget,
                              n.options.classPrefix +
                                "container-keyboard-inactive"
                            );
                          }),
                        n
                          .getElement(n.container)
                          .addEventListener("focusin", function (e) {
                            T.removeClass(
                              e.currentTarget,
                              n.options.classPrefix +
                                "container-keyboard-inactive"
                            ),
                              !n.isVideo ||
                                x.IS_ANDROID ||
                                x.IS_IOS ||
                                !n.controlsEnabled ||
                                n.options.alwaysShowControls ||
                                (n.killControlsTimer("enter"),
                                n.showControls(),
                                n.startControlsTimer(
                                  n.options.controlsTimeoutMouseEnter
                                ));
                          }),
                        n
                          .getElement(n.container)
                          .addEventListener("focusout", function (e) {
                            setTimeout(function () {
                              e.relatedTarget &&
                                n.keyboardAction &&
                                !e.relatedTarget.closest(
                                  "." + n.options.classPrefix + "container"
                                ) &&
                                ((n.keyboardAction = !1),
                                !n.isVideo ||
                                  n.options.alwaysShowControls ||
                                  n.paused ||
                                  n.startControlsTimer(
                                    n.options.controlsTimeoutMouseLeave
                                  ));
                            }, 0);
                          }),
                        setTimeout(function () {
                          n.setPlayerSize(n.width, n.height),
                            n.setControlsSize();
                        }, 0),
                        (n.globalResizeCallback = function () {
                          n.isFullScreen ||
                            (x.HAS_TRUE_NATIVE_FULLSCREEN &&
                              w.default.webkitIsFullScreen) ||
                            n.setPlayerSize(n.width, n.height),
                            n.setControlsSize();
                        }),
                        n.globalBind("resize", n.globalResizeCallback);
                    }
                    i && r && n.play(),
                      n.options.success &&
                        ("string" == typeof n.options.success
                          ? S.default[n.options.success](n.media, n.domNode, n)
                          : n.options.success(n.media, n.domNode, n));
                  }
                },
              },
              {
                key: "_handleError",
                value: function (e, t, n) {
                  var o = this,
                    i = o
                      .getElement(o.layers)
                      .querySelector(
                        "." + o.options.classPrefix + "overlay-play"
                      );
                  i && (i.style.display = "none"),
                    o.options.error && o.options.error(e, t, n),
                    o
                      .getElement(o.container)
                      .querySelector(
                        "." + o.options.classPrefix + "cannotplay"
                      ) &&
                      o
                        .getElement(o.container)
                        .querySelector(
                          "." + o.options.classPrefix + "cannotplay"
                        )
                        .remove();
                  var r = w.default.createElement("div");
                  (r.className = o.options.classPrefix + "cannotplay"),
                    (r.style.width = "100%"),
                    (r.style.height = "100%");
                  var a =
                      "function" == typeof o.options.customError
                        ? o.options.customError(o.media, o.media.originalNode)
                        : o.options.customError,
                    s = "";
                  if (!a) {
                    var l = o.media.originalNode.getAttribute("poster");
                    if (
                      (l &&
                        (s =
                          '<img src="' +
                          l +
                          '" alt="' +
                          v.default.i18n.t("mejs.download-file") +
                          '">'),
                      e.message && (a = "<p>" + e.message + "</p>"),
                      e.urls)
                    )
                      for (var d = 0, u = e.urls.length; d < u; d++) {
                        var c = e.urls[d];
                        a +=
                          '<a href="' +
                          c.src +
                          '" data-type="' +
                          c.type +
                          '"><span>' +
                          v.default.i18n.t("mejs.download-file") +
                          ": " +
                          c.src +
                          "</span></a>";
                      }
                  }
                  a &&
                    o
                      .getElement(o.layers)
                      .querySelector(
                        "." + o.options.classPrefix + "overlay-error"
                      ) &&
                    ((r.innerHTML = a),
                    (o
                      .getElement(o.layers)
                      .querySelector(
                        "." + o.options.classPrefix + "overlay-error"
                      ).innerHTML = "" + s + r.outerHTML),
                    (o
                      .getElement(o.layers)
                      .querySelector(
                        "." + o.options.classPrefix + "overlay-error"
                      ).parentNode.style.display = "block")),
                    o.controlsEnabled && o.disableControls();
                },
              },
              {
                key: "setPlayerSize",
                value: function (e, t) {
                  var n = this;
                  if (!n.options.setDimensions) return !1;
                  switch (
                    (void 0 !== e && (n.width = e),
                    void 0 !== t && (n.height = t),
                    n.options.stretching)
                  ) {
                    case "fill":
                      n.isVideo
                        ? n.setFillMode()
                        : n.setDimensions(n.width, n.height);
                      break;
                    case "responsive":
                      n.setResponsiveMode();
                      break;
                    case "none":
                      n.setDimensions(n.width, n.height);
                      break;
                    default:
                      !0 === n.hasFluidMode()
                        ? n.setResponsiveMode()
                        : n.setDimensions(n.width, n.height);
                  }
                },
              },
              {
                key: "hasFluidMode",
                value: function () {
                  var e = this;
                  return (
                    -1 !== e.height.toString().indexOf("%") ||
                    (e.node &&
                      e.node.style.maxWidth &&
                      "none" !== e.node.style.maxWidth &&
                      e.node.style.maxWidth !== e.width) ||
                    (e.node &&
                      e.node.currentStyle &&
                      "100%" === e.node.currentStyle.maxWidth)
                  );
                },
              },
              {
                key: "setResponsiveMode",
                value: function () {
                  var e,
                    o = this,
                    t = (function () {
                      for (var t = void 0, n = o.getElement(o.container); n; ) {
                        try {
                          if (
                            x.IS_FIREFOX &&
                            "html" === n.tagName.toLowerCase() &&
                            S.default.self !== S.default.top &&
                            null !== S.default.frameElement
                          )
                            return S.default.frameElement;
                          t = n.parentElement;
                        } catch (e) {
                          t = n.parentElement;
                        }
                        if (t && T.visible(t)) return t;
                        n = t;
                      }
                      return null;
                    })(),
                    n = t
                      ? getComputedStyle(t, null)
                      : getComputedStyle(w.default.body, null),
                    i = o.isVideo
                      ? o.node.videoWidth && 0 < o.node.videoWidth
                        ? o.node.videoWidth
                        : o.node.getAttribute("width")
                        ? o.node.getAttribute("width")
                        : o.options.defaultVideoWidth
                      : o.options.defaultAudioWidth,
                    r = o.isVideo
                      ? o.node.videoHeight && 0 < o.node.videoHeight
                        ? o.node.videoHeight
                        : o.node.getAttribute("height")
                        ? o.node.getAttribute("height")
                        : o.options.defaultVideoHeight
                      : o.options.defaultAudioHeight,
                    a =
                      ((e = 1),
                      o.isVideo &&
                        ((e =
                          o.node.videoWidth &&
                          0 < o.node.videoWidth &&
                          o.node.videoHeight &&
                          0 < o.node.videoHeight
                            ? o.height >= o.width
                              ? o.node.videoWidth / o.node.videoHeight
                              : o.node.videoHeight / o.node.videoWidth
                            : o.initialAspectRatio),
                        (isNaN(e) || e < 0.01 || 100 < e) && (e = 1)),
                      e),
                    s = parseFloat(n.height),
                    l = void 0,
                    d = parseFloat(n.width);
                  if (
                    ((l = o.isVideo
                      ? "100%" === o.height
                        ? parseFloat((d * r) / i, 10)
                        : o.height >= o.width
                        ? parseFloat(d / a, 10)
                        : parseFloat(d * a, 10)
                      : r),
                    isNaN(l) && (l = s),
                    0 < o.getElement(o.container).parentNode.length &&
                      "body" ===
                        o
                          .getElement(o.container)
                          .parentNode.tagName.toLowerCase() &&
                      ((d =
                        S.default.innerWidth ||
                        w.default.documentElement.clientWidth ||
                        w.default.body.clientWidth),
                      (l =
                        S.default.innerHeight ||
                        w.default.documentElement.clientHeight ||
                        w.default.body.clientHeight)),
                    l && d)
                  ) {
                    (o.getElement(o.container).style.width = d + "px"),
                      (o.getElement(o.container).style.height = l + "px"),
                      (o.node.style.width = "100%"),
                      (o.node.style.height = "100%"),
                      o.isVideo && o.media.setSize && o.media.setSize(d, l);
                    for (
                      var u = o.getElement(o.layers).children,
                        c = 0,
                        f = u.length;
                      c < f;
                      c++
                    )
                      (u[c].style.width = "100%"), (u[c].style.height = "100%");
                  }
                },
              },
              {
                key: "setFillMode",
                value: function () {
                  var e = this,
                    t =
                      S.default.self !== S.default.top &&
                      null !== S.default.frameElement,
                    n = (function () {
                      for (var t = void 0, n = e.getElement(e.container); n; ) {
                        try {
                          if (
                            x.IS_FIREFOX &&
                            "html" === n.tagName.toLowerCase() &&
                            S.default.self !== S.default.top &&
                            null !== S.default.frameElement
                          )
                            return S.default.frameElement;
                          t = n.parentElement;
                        } catch (e) {
                          t = n.parentElement;
                        }
                        if (t && T.visible(t)) return t;
                        n = t;
                      }
                      return null;
                    })(),
                    o = n
                      ? getComputedStyle(n, null)
                      : getComputedStyle(w.default.body, null);
                  "none" !== e.node.style.height &&
                    e.node.style.height !== e.height &&
                    (e.node.style.height = "auto"),
                    "none" !== e.node.style.maxWidth &&
                      e.node.style.maxWidth !== e.width &&
                      (e.node.style.maxWidth = "none"),
                    "none" !== e.node.style.maxHeight &&
                      e.node.style.maxHeight !== e.height &&
                      (e.node.style.maxHeight = "none"),
                    e.node.currentStyle &&
                      ("100%" === e.node.currentStyle.height &&
                        (e.node.currentStyle.height = "auto"),
                      "100%" === e.node.currentStyle.maxWidth &&
                        (e.node.currentStyle.maxWidth = "none"),
                      "100%" === e.node.currentStyle.maxHeight &&
                        (e.node.currentStyle.maxHeight = "none")),
                    t ||
                      parseFloat(o.width) ||
                      (n.style.width = e.media.offsetWidth + "px"),
                    t ||
                      parseFloat(o.height) ||
                      (n.style.height = e.media.offsetHeight + "px"),
                    (o = getComputedStyle(n));
                  var i = parseFloat(o.width),
                    r = parseFloat(o.height);
                  e.setDimensions("100%", "100%");
                  var a = e
                    .getElement(e.container)
                    .querySelector("." + e.options.classPrefix + "poster>img");
                  a && (a.style.display = "");
                  for (
                    var s = e
                        .getElement(e.container)
                        .querySelectorAll("object, embed, iframe, video"),
                      l = e.height,
                      d = e.width,
                      u = i,
                      c = (l * i) / d,
                      f = (d * r) / l,
                      p = r,
                      m = i < f == !1,
                      h = m ? Math.floor(u) : Math.floor(f),
                      v = m ? Math.floor(c) : Math.floor(p),
                      y = m ? i + "px" : h + "px",
                      g = m ? v + "px" : r + "px",
                      E = 0,
                      b = s.length;
                    E < b;
                    E++
                  )
                    (s[E].style.height = g),
                      (s[E].style.width = y),
                      e.media.setSize && e.media.setSize(y, g),
                      (s[E].style.marginLeft = Math.floor((i - h) / 2) + "px"),
                      (s[E].style.marginTop = 0);
                },
              },
              {
                key: "setDimensions",
                value: function (e, t) {
                  var n = this;
                  (e =
                    (0, E.isString)(e) && -1 < e.indexOf("%")
                      ? e
                      : parseFloat(e) + "px"),
                    (t =
                      (0, E.isString)(t) && -1 < t.indexOf("%")
                        ? t
                        : parseFloat(t) + "px"),
                    (n.getElement(n.container).style.width = e),
                    (n.getElement(n.container).style.height = t);
                  for (
                    var o = n.getElement(n.layers).children,
                      i = 0,
                      r = o.length;
                    i < r;
                    i++
                  )
                    (o[i].style.width = e), (o[i].style.height = t);
                },
              },
              {
                key: "setControlsSize",
                value: function () {
                  var t = this;
                  if (T.visible(t.getElement(t.container)))
                    if (t.rail && T.visible(t.rail)) {
                      for (
                        var e = t.total
                            ? getComputedStyle(t.total, null)
                            : null,
                          n = e
                            ? parseFloat(e.marginLeft) +
                              parseFloat(e.marginRight)
                            : 0,
                          o = getComputedStyle(t.rail),
                          i =
                            parseFloat(o.marginLeft) +
                            parseFloat(o.marginRight),
                          r = 0,
                          a = T.siblings(t.rail, function (e) {
                            return e !== t.rail;
                          }),
                          s = a.length,
                          l = 0;
                        l < s;
                        l++
                      )
                        r += a[l].offsetWidth;
                      (r += n + (0 === n ? 2 * i : i) + 1),
                        (t.getElement(t.container).style.minWidth = r + "px");
                      var d = (0, E.createEvent)(
                        "controlsresize",
                        t.getElement(t.container)
                      );
                      t.getElement(t.container).dispatchEvent(d);
                    } else {
                      for (
                        var u = t.getElement(t.controls).children,
                          c = 0,
                          f = 0,
                          p = u.length;
                        f < p;
                        f++
                      )
                        c += u[f].offsetWidth;
                      t.getElement(t.container).style.minWidth = c + "px";
                    }
                },
              },
              {
                key: "addControlElement",
                value: function (e, t) {
                  var n = this;
                  if (void 0 !== n.featurePosition[t]) {
                    var o = n.getElement(n.controls).children[
                      n.featurePosition[t] - 1
                    ];
                    o.parentNode.insertBefore(e, o.nextSibling);
                  } else {
                    n.getElement(n.controls).appendChild(e);
                    for (
                      var i = n.getElement(n.controls).children,
                        r = 0,
                        a = i.length;
                      r < a;
                      r++
                    )
                      if (e === i[r]) {
                        n.featurePosition[t] = r;
                        break;
                      }
                  }
                },
              },
              {
                key: "createIframeLayer",
                value: function () {
                  var t = this;
                  if (
                    t.isVideo &&
                    null !== t.media.rendererName &&
                    -1 < t.media.rendererName.indexOf("iframe") &&
                    !w.default.getElementById(t.media.id + "-iframe-overlay")
                  ) {
                    var e = w.default.createElement("div"),
                      n = w.default.getElementById(
                        t.media.id + "_" + t.media.rendererName
                      );
                    (e.id = t.media.id + "-iframe-overlay"),
                      (e.className = t.options.classPrefix + "iframe-overlay"),
                      e.addEventListener("click", function (e) {
                        t.options.clickToPlayPause &&
                          (t.paused ? t.play() : t.pause(),
                          e.preventDefault(),
                          e.stopPropagation());
                      }),
                      n.parentNode.insertBefore(e, n);
                  }
                },
              },
              {
                key: "resetSize",
                value: function () {
                  var e = this;
                  setTimeout(function () {
                    e.setPlayerSize(e.width, e.height), e.setControlsSize();
                  }, 50);
                },
              },
              {
                key: "setPoster",
                value: function (e) {
                  var t = this;
                  if (t.getElement(t.container)) {
                    var n = t
                      .getElement(t.container)
                      .querySelector("." + t.options.classPrefix + "poster");
                    n ||
                      (((n = w.default.createElement("div")).className =
                        t.options.classPrefix +
                        "poster " +
                        t.options.classPrefix +
                        "layer"),
                      t.getElement(t.layers).appendChild(n));
                    var o = n.querySelector("img");
                    !o &&
                      e &&
                      (((o = w.default.createElement("img")).className =
                        t.options.classPrefix + "poster-img"),
                      (o.width = "100%"),
                      (o.height = "100%"),
                      (n.style.display = ""),
                      n.appendChild(o)),
                      e
                        ? (o.setAttribute("src", e),
                          (n.style.backgroundImage = 'url("' + e + '")'),
                          (n.style.display = ""))
                        : o
                        ? ((n.style.backgroundImage = "none"),
                          (n.style.display = "none"),
                          o.remove())
                        : (n.style.display = "none");
                  } else
                    ((x.IS_IPAD && t.options.iPadUseNativeControls) ||
                      (x.IS_IPHONE && t.options.iPhoneUseNativeControls) ||
                      (x.IS_ANDROID && t.options.AndroidUseNativeControls)) &&
                      (t.media.originalNode.poster = e);
                },
              },
              {
                key: "changeSkin",
                value: function (e) {
                  var t = this;
                  (t.getElement(t.container).className =
                    t.options.classPrefix + "container " + e),
                    t.setPlayerSize(t.width, t.height),
                    t.setControlsSize();
                },
              },
              {
                key: "globalBind",
                value: function (e, n) {
                  var o = this.node ? this.node.ownerDocument : w.default;
                  if ((e = (0, E.splitEvents)(e, this.id)).d)
                    for (
                      var t = e.d.split(" "), i = 0, r = t.length;
                      i < r;
                      i++
                    )
                      t[i].split(".").reduce(function (e, t) {
                        return o.addEventListener(t, n, !1), t;
                      }, "");
                  if (e.w)
                    for (
                      var a = e.w.split(" "), s = 0, l = a.length;
                      s < l;
                      s++
                    )
                      a[s].split(".").reduce(function (e, t) {
                        return S.default.addEventListener(t, n, !1), t;
                      }, "");
                },
              },
              {
                key: "globalUnbind",
                value: function (e, n) {
                  var o = this.node ? this.node.ownerDocument : w.default;
                  if ((e = (0, E.splitEvents)(e, this.id)).d)
                    for (
                      var t = e.d.split(" "), i = 0, r = t.length;
                      i < r;
                      i++
                    )
                      t[i].split(".").reduce(function (e, t) {
                        return o.removeEventListener(t, n, !1), t;
                      }, "");
                  if (e.w)
                    for (
                      var a = e.w.split(" "), s = 0, l = a.length;
                      s < l;
                      s++
                    )
                      a[s].split(".").reduce(function (e, t) {
                        return S.default.removeEventListener(t, n, !1), t;
                      }, "");
                },
              },
              {
                key: "buildfeatures",
                value: function (e, t, n, o) {
                  for (
                    var i = 0, r = this.options.features.length;
                    i < r;
                    i++
                  ) {
                    var a = this.options.features[i];
                    if (this["build" + a])
                      try {
                        this["build" + a](e, t, n, o);
                      } catch (e) {
                        console.error("error building " + a, e);
                      }
                  }
                },
              },
              {
                key: "buildposter",
                value: function (e, t, n, o) {
                  var i = this,
                    r = w.default.createElement("div");
                  (r.className =
                    i.options.classPrefix +
                    "poster " +
                    i.options.classPrefix +
                    "layer"),
                    n.appendChild(r);
                  var a = o.originalNode.getAttribute("poster");
                  "" !== e.options.poster &&
                    (a && x.IS_IOS && o.originalNode.removeAttribute("poster"),
                    (a = e.options.poster)),
                    a
                      ? i.setPoster(a)
                      : null !== i.media.renderer &&
                        "function" == typeof i.media.renderer.getPosterUrl
                      ? i.setPoster(i.media.renderer.getPosterUrl())
                      : (r.style.display = "none"),
                    o.addEventListener("play", function () {
                      r.style.display = "none";
                    }),
                    o.addEventListener("playing", function () {
                      r.style.display = "none";
                    }),
                    e.options.showPosterWhenEnded &&
                      e.options.autoRewind &&
                      o.addEventListener("ended", function () {
                        r.style.display = "";
                      }),
                    o.addEventListener("error", function () {
                      r.style.display = "none";
                    }),
                    e.options.showPosterWhenPaused &&
                      o.addEventListener("pause", function () {
                        e.ended || (r.style.display = "");
                      });
                },
              },
              {
                key: "buildoverlays",
                value: function (t, e, n, o) {
                  if (t.isVideo) {
                    var i = this,
                      r = w.default.createElement("div"),
                      a = w.default.createElement("div"),
                      s = w.default.createElement("div");
                    (r.style.display = "none"),
                      (r.className =
                        i.options.classPrefix +
                        "overlay " +
                        i.options.classPrefix +
                        "layer"),
                      (r.innerHTML =
                        '<div class="' +
                        i.options.classPrefix +
                        'overlay-loading"><span class="' +
                        i.options.classPrefix +
                        'overlay-loading-bg-img"></span></div>'),
                      n.appendChild(r),
                      (a.style.display = "none"),
                      (a.className =
                        i.options.classPrefix +
                        "overlay " +
                        i.options.classPrefix +
                        "layer"),
                      (a.innerHTML =
                        '<div class="' +
                        i.options.classPrefix +
                        'overlay-error"></div>'),
                      n.appendChild(a),
                      (s.className =
                        i.options.classPrefix +
                        "overlay " +
                        i.options.classPrefix +
                        "layer " +
                        i.options.classPrefix +
                        "overlay-play"),
                      (s.innerHTML =
                        '<div class="' +
                        i.options.classPrefix +
                        'overlay-button" role="button" tabindex="0" aria-label="' +
                        g.default.t("mejs.play") +
                        '" aria-pressed="false"></div>'),
                      s.addEventListener("click", function () {
                        if (i.options.clickToPlayPause) {
                          var e = i
                              .getElement(i.container)
                              .querySelector(
                                "." + i.options.classPrefix + "overlay-button"
                              ),
                            t = e.getAttribute("aria-pressed");
                          i.paused ? i.play() : i.pause(),
                            e.setAttribute("aria-pressed", !!t),
                            i.getElement(i.container).focus();
                        }
                      }),
                      s.addEventListener("keydown", function (e) {
                        var t = e.keyCode || e.which || 0;
                        if (13 === t || (x.IS_FIREFOX && 32 === t)) {
                          var n = (0, E.createEvent)("click", s);
                          return s.dispatchEvent(n), !1;
                        }
                      }),
                      n.appendChild(s),
                      null !== i.media.rendererName &&
                        ((/(youtube|facebook)/i.test(i.media.rendererName) &&
                          !(
                            i.media.originalNode.getAttribute("poster") ||
                            t.options.poster ||
                            ("function" ==
                              typeof i.media.renderer.getPosterUrl &&
                              i.media.renderer.getPosterUrl())
                          )) ||
                          x.IS_STOCK_ANDROID ||
                          i.media.originalNode.getAttribute("autoplay")) &&
                        (s.style.display = "none");
                    var l = !1;
                    o.addEventListener("play", function () {
                      (s.style.display = "none"),
                        (r.style.display = "none"),
                        (a.style.display = "none"),
                        (l = !1);
                    }),
                      o.addEventListener("playing", function () {
                        (s.style.display = "none"),
                          (r.style.display = "none"),
                          (a.style.display = "none"),
                          (l = !1);
                      }),
                      o.addEventListener("seeking", function () {
                        (s.style.display = "none"),
                          (r.style.display = ""),
                          (l = !1);
                      }),
                      o.addEventListener("seeked", function () {
                        (s.style.display =
                          i.paused && !x.IS_STOCK_ANDROID ? "" : "none"),
                          (r.style.display = "none"),
                          (l = !1);
                      }),
                      o.addEventListener("pause", function () {
                        (r.style.display = "none"),
                          x.IS_STOCK_ANDROID || l || (s.style.display = ""),
                          (l = !1);
                      }),
                      o.addEventListener("waiting", function () {
                        (r.style.display = ""), (l = !1);
                      }),
                      o.addEventListener("loadeddata", function () {
                        (r.style.display = ""),
                          x.IS_ANDROID &&
                            (o.canplayTimeout = setTimeout(function () {
                              if (w.default.createEvent) {
                                var e = w.default.createEvent("HTMLEvents");
                                return (
                                  e.initEvent("canplay", !0, !0),
                                  o.dispatchEvent(e)
                                );
                              }
                            }, 300)),
                          (l = !1);
                      }),
                      o.addEventListener("canplay", function () {
                        (r.style.display = "none"),
                          clearTimeout(o.canplayTimeout),
                          (l = !1);
                      }),
                      o.addEventListener("error", function (e) {
                        i._handleError(e, i.media, i.node),
                          (r.style.display = "none"),
                          (s.style.display = "none"),
                          (l = !0);
                      }),
                      o.addEventListener("loadedmetadata", function () {
                        i.controlsEnabled || i.enableControls();
                      }),
                      o.addEventListener("keydown", function (e) {
                        i.onkeydown(t, o, e), (l = !1);
                      });
                  }
                },
              },
              {
                key: "buildkeyboard",
                value: function (o, e, t, i) {
                  var r = this;
                  r
                    .getElement(r.container)
                    .addEventListener("keydown", function () {
                      r.keyboardAction = !0;
                    }),
                    (r.globalKeydownCallback = function (e) {
                      var t = w.default.activeElement.closest(
                          "." + r.options.classPrefix + "container"
                        ),
                        n = r.media.closest(
                          "." + r.options.classPrefix + "container"
                        );
                      return (
                        (r.hasFocus = !(!t || !n || t.id !== n.id)),
                        r.onkeydown(o, i, e)
                      );
                    }),
                    (r.globalClickCallback = function (e) {
                      r.hasFocus = !!e.target.closest(
                        "." + r.options.classPrefix + "container"
                      );
                    }),
                    r.globalBind("keydown", r.globalKeydownCallback),
                    r.globalBind("click", r.globalClickCallback);
                },
              },
              {
                key: "onkeydown",
                value: function (e, t, n) {
                  if (e.hasFocus && e.options.enableKeyboard)
                    for (var o = 0, i = e.options.keyActions.length; o < i; o++)
                      for (
                        var r = e.options.keyActions[o],
                          a = 0,
                          s = r.keys.length;
                        a < s;
                        a++
                      )
                        if (n.keyCode === r.keys[a])
                          return (
                            r.action(e, t, n.keyCode, n),
                            n.preventDefault(),
                            void n.stopPropagation()
                          );
                  return !0;
                },
              },
              {
                key: "play",
                value: function () {
                  this.proxy.play();
                },
              },
              {
                key: "pause",
                value: function () {
                  this.proxy.pause();
                },
              },
              {
                key: "load",
                value: function () {
                  this.proxy.load();
                },
              },
              {
                key: "setCurrentTime",
                value: function (e) {
                  this.proxy.setCurrentTime(e);
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.proxy.currentTime;
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.proxy.duration;
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.proxy.volume = e;
                },
              },
              {
                key: "getVolume",
                value: function () {
                  return this.proxy.getVolume();
                },
              },
              {
                key: "setMuted",
                value: function (e) {
                  this.proxy.setMuted(e);
                },
              },
              {
                key: "setSrc",
                value: function (e) {
                  this.controlsEnabled || this.enableControls(),
                    this.proxy.setSrc(e);
                },
              },
              {
                key: "getSrc",
                value: function () {
                  return this.proxy.getSrc();
                },
              },
              {
                key: "canPlayType",
                value: function (e) {
                  return this.proxy.canPlayType(e);
                },
              },
              {
                key: "remove",
                value: function () {
                  var l = this,
                    d = l.media.rendererName,
                    u = l.media.originalNode.src;
                  for (var e in l.options.features) {
                    var t = l.options.features[e];
                    if (l["clean" + t])
                      try {
                        l["clean" + t](
                          l,
                          l.getElement(l.layers),
                          l.getElement(l.controls),
                          l.media
                        );
                      } catch (e) {
                        console.error("error cleaning " + t, e);
                      }
                  }
                  var n = l.node.getAttribute("width"),
                    o = l.node.getAttribute("height");
                  (n ? -1 === n.indexOf("%") && (n += "px") : (n = "auto"),
                  o ? -1 === o.indexOf("%") && (o += "px") : (o = "auto"),
                  (l.node.style.width = n),
                  (l.node.style.height = o),
                  l.setPlayerSize(0, 0),
                  l.isDynamic
                    ? l
                        .getElement(l.container)
                        .parentNode.insertBefore(
                          l.node,
                          l.getElement(l.container)
                        )
                    : (function () {
                        l.node.setAttribute("controls", !0),
                          l.node.setAttribute(
                            "id",
                            l.node
                              .getAttribute("id")
                              .replace("_" + d, "")
                              .replace("_from_mejs", "")
                          );
                        var e = l
                          .getElement(l.container)
                          .querySelector(
                            "." + l.options.classPrefix + "poster>img"
                          );
                        (e && l.node.setAttribute("poster", e.src),
                        delete l.node.autoplay,
                        l.node.setAttribute("src", ""),
                        "" !== l.media.canPlayType((0, b.getTypeFromFile)(u)) &&
                          l.node.setAttribute("src", u),
                        d && -1 < d.indexOf("iframe")) &&
                          w.default
                            .getElementById(l.media.id + "-iframe-overlay")
                            .remove();
                        var i = l.node.cloneNode();
                        if (
                          ((i.style.display = ""),
                          l
                            .getElement(l.container)
                            .parentNode.insertBefore(
                              i,
                              l.getElement(l.container)
                            ),
                          l.node.remove(),
                          l.mediaFiles)
                        )
                          for (var t = 0, n = l.mediaFiles.length; t < n; t++) {
                            var o = w.default.createElement("source");
                            o.setAttribute("src", l.mediaFiles[t].src),
                              o.setAttribute("type", l.mediaFiles[t].type),
                              i.appendChild(o);
                          }
                        if (l.trackFiles)
                          for (
                            var r = function (e, t) {
                                var n = l.trackFiles[e],
                                  o = w.default.createElement("track");
                                (o.kind = n.kind),
                                  (o.label = n.label),
                                  (o.srclang = n.srclang),
                                  (o.src = n.src),
                                  i.appendChild(o),
                                  o.addEventListener("load", function () {
                                    (this.mode = "showing"),
                                      (i.textTracks[e].mode = "showing");
                                  });
                              },
                              a = 0,
                              s = l.trackFiles.length;
                            a < s;
                            a++
                          )
                            r(a);
                        delete l.node, delete l.mediaFiles, delete l.trackFiles;
                      })(),
                  l.media.renderer &&
                    "function" == typeof l.media.renderer.destroy &&
                    l.media.renderer.destroy(),
                  delete v.default.players[l.id],
                  "object" === i(l.getElement(l.container))) &&
                    (l
                      .getElement(l.container)
                      .parentNode.querySelector(
                        "." + l.options.classPrefix + "offscreen"
                      )
                      .remove(),
                    l.getElement(l.container).remove());
                  l.globalUnbind("resize", l.globalResizeCallback),
                    l.globalUnbind("keydown", l.globalKeydownCallback),
                    l.globalUnbind("click", l.globalClickCallback),
                    delete l.media.player;
                },
              },
              {
                key: "paused",
                get: function () {
                  return this.proxy.paused;
                },
              },
              {
                key: "muted",
                get: function () {
                  return this.proxy.muted;
                },
                set: function (e) {
                  this.setMuted(e);
                },
              },
              {
                key: "ended",
                get: function () {
                  return this.proxy.ended;
                },
              },
              {
                key: "readyState",
                get: function () {
                  return this.proxy.readyState;
                },
              },
              {
                key: "currentTime",
                set: function (e) {
                  this.setCurrentTime(e);
                },
                get: function () {
                  return this.getCurrentTime();
                },
              },
              {
                key: "duration",
                get: function () {
                  return this.getDuration();
                },
              },
              {
                key: "volume",
                set: function (e) {
                  this.setVolume(e);
                },
                get: function () {
                  return this.getVolume();
                },
              },
              {
                key: "src",
                set: function (e) {
                  this.setSrc(e);
                },
                get: function () {
                  return this.getSrc();
                },
              },
            ]),
            r
          );
        })();
        (S.default.MediaElementPlayer = l),
          (v.default.MediaElementPlayer = l),
          (n.default = l);
      },
      {
        19: 19,
        2: 2,
        27: 27,
        28: 28,
        29: 29,
        3: 3,
        30: 30,
        32: 32,
        7: 7,
        8: 8,
        9: 9,
      },
    ],
    19: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var o,
          i = (function () {
            function o(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (e, t, n) {
              return t && o(e.prototype, t), n && o(e, n), e;
            };
          })(),
          r = e(3),
          a = (o = r) && o.__esModule ? o : { default: o };
        var s = (function () {
          function e(t) {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              (this.media = t.media),
              (this.isVideo = t.isVideo),
              (this.classPrefix = t.options.classPrefix),
              (this.createIframeLayer = function () {
                return t.createIframeLayer();
              }),
              (this.setPoster = function (e) {
                return t.setPoster(e);
              }),
              this
            );
          }
          return (
            i(e, [
              {
                key: "play",
                value: function () {
                  this.media.play();
                },
              },
              {
                key: "pause",
                value: function () {
                  this.media.pause();
                },
              },
              {
                key: "load",
                value: function () {
                  this.isLoaded || this.media.load(), (this.isLoaded = !0);
                },
              },
              {
                key: "setCurrentTime",
                value: function (e) {
                  this.media.setCurrentTime(e);
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.media.currentTime;
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.media.getDuration();
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.media.setVolume(e);
                },
              },
              {
                key: "getVolume",
                value: function () {
                  return this.media.getVolume();
                },
              },
              {
                key: "setMuted",
                value: function (e) {
                  this.media.setMuted(e);
                },
              },
              {
                key: "setSrc",
                value: function (e) {
                  var t = this,
                    n = document.getElementById(t.media.id + "-iframe-overlay");
                  n && n.remove(),
                    t.media.setSrc(e),
                    t.createIframeLayer(),
                    null !== t.media.renderer &&
                      "function" == typeof t.media.renderer.getPosterUrl &&
                      t.setPoster(t.media.renderer.getPosterUrl());
                },
              },
              {
                key: "getSrc",
                value: function () {
                  return this.media.getSrc();
                },
              },
              {
                key: "canPlayType",
                value: function (e) {
                  return this.media.canPlayType(e);
                },
              },
              {
                key: "paused",
                get: function () {
                  return this.media.paused;
                },
              },
              {
                key: "muted",
                set: function (e) {
                  this.setMuted(e);
                },
                get: function () {
                  return this.media.muted;
                },
              },
              {
                key: "ended",
                get: function () {
                  return this.media.ended;
                },
              },
              {
                key: "readyState",
                get: function () {
                  return this.media.readyState;
                },
              },
              {
                key: "currentTime",
                set: function (e) {
                  this.setCurrentTime(e);
                },
                get: function () {
                  return this.getCurrentTime();
                },
              },
              {
                key: "duration",
                get: function () {
                  return this.getDuration();
                },
              },
              {
                key: "remainingTime",
                get: function () {
                  return this.getDuration() - this.currentTime();
                },
              },
              {
                key: "volume",
                set: function (e) {
                  this.setVolume(e);
                },
                get: function () {
                  return this.getVolume();
                },
              },
              {
                key: "src",
                set: function (e) {
                  this.setSrc(e);
                },
                get: function () {
                  return this.getSrc();
                },
              },
            ]),
            e
          );
        })();
        (n.default = s), (a.default.DefaultPlayer = s);
      },
      { 3: 3 },
    ],
    20: [
      function (e, t, n) {
        "use strict";
        a(e(3));
        var o,
          i = a(e(9)),
          r = a(e(18));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        "undefined" != typeof jQuery
          ? (i.default.$ = jQuery)
          : "undefined" != typeof Zepto
          ? (i.default.$ = Zepto)
          : "undefined" != typeof ender && (i.default.$ = ender),
          void 0 !== (o = i.default.$) &&
            ((o.fn.mediaelementplayer = function (e) {
              return (
                !1 === e
                  ? this.each(function () {
                      var e = o(this).data("mediaelementplayer");
                      e && e.remove(), o(this).removeData("mediaelementplayer");
                    })
                  : this.each(function () {
                      o(this).data(
                        "mediaelementplayer",
                        new r.default(this, e)
                      );
                    }),
                this
              );
            }),
            o(document).ready(function () {
              o(
                "." + i.default.MepDefaults.classPrefix + "player"
              ).mediaelementplayer();
            }));
      },
      { 18: 18, 3: 3, 9: 9 },
    ],
    21: [
      function (e, t, n) {
        "use strict";
        var b =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          S = a(e(3)),
          w = a(e(9)),
          x = e(10),
          T = e(29),
          o = e(30),
          i = e(27),
          r = e(28);
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var P = {
            promise: null,
            load: function (e) {
              return (
                "undefined" != typeof dashjs
                  ? (P.promise = new Promise(function (e) {
                      e();
                    }).then(function () {
                      P._createPlayer(e);
                    }))
                  : ((e.options.path =
                      "string" == typeof e.options.path
                        ? e.options.path
                        : "https://cdn.dashjs.org/latest/dash.all.min.js"),
                    (P.promise =
                      P.promise || (0, r.loadScript)(e.options.path)),
                    P.promise.then(function () {
                      P._createPlayer(e);
                    })),
                P.promise
              );
            },
            _createPlayer: function (e) {
              var t = dashjs.MediaPlayer().create();
              return S.default["__ready__" + e.id](t), t;
            },
          },
          s = {
            name: "native_dash",
            options: {
              prefix: "native_dash",
              dash: {
                path: "https://cdn.dashjs.org/latest/dash.all.min.js",
                debug: !1,
                drm: {},
                robustnessLevel: "",
              },
            },
            canPlayType: function (e) {
              return (
                i.HAS_MSE &&
                -1 < ["application/dash+xml"].indexOf(e.toLowerCase())
              );
            },
            create: function (s, l, e) {
              var t = s.originalNode,
                r = s.id + "_" + l.prefix,
                a = t.autoplay,
                n = t.children,
                d = null,
                u = null;
              t.removeAttribute("type");
              for (var o = 0, i = n.length; o < i; o++)
                n[o].removeAttribute("type");
              (d = t.cloneNode(!0)), (l = Object.assign(l, s.options));
              for (
                var c = w.default.html5media.properties,
                  f = w.default.html5media.events
                    .concat(["click", "mouseover", "mouseout"])
                    .filter(function (e) {
                      return "error" !== e;
                    }),
                  p = function (e) {
                    var t = (0, T.createEvent)(e.type, s);
                    s.dispatchEvent(t);
                  },
                  m = function (i) {
                    var e =
                      "" + i.substring(0, 1).toUpperCase() + i.substring(1);
                    (d["get" + e] = function () {
                      return null !== u ? d[i] : null;
                    }),
                      (d["set" + e] = function (e) {
                        if (
                          -1 ===
                          w.default.html5media.readOnlyProperties.indexOf(i)
                        )
                          if ("src" === i) {
                            var t =
                              "object" ===
                                (void 0 === e ? "undefined" : b(e)) && e.src
                                ? e.src
                                : e;
                            if (((d[i] = t), null !== u)) {
                              u.reset();
                              for (var n = 0, o = f.length; n < o; n++)
                                d.removeEventListener(f[n], p);
                              (u = P._createPlayer({ options: l.dash, id: r })),
                                e &&
                                  "object" ===
                                    (void 0 === e ? "undefined" : b(e)) &&
                                  "object" === b(e.drm) &&
                                  (u.setProtectionData(e.drm),
                                  (0, T.isString)(l.dash.robustnessLevel) &&
                                    l.dash.robustnessLevel &&
                                    u
                                      .getProtectionController()
                                      .setRobustnessLevel(
                                        l.dash.robustnessLevel
                                      )),
                                u.attachSource(t),
                                a && u.play();
                            }
                          } else d[i] = e;
                      });
                  },
                  h = 0,
                  v = c.length;
                h < v;
                h++
              )
                m(c[h]);
              if (
                ((S.default["__ready__" + r] = function (e) {
                  s.dashPlayer = u = e;
                  for (
                    var t, n = dashjs.MediaPlayer.events, o = 0, i = f.length;
                    o < i;
                    o++
                  )
                    "loadedmetadata" === (t = f[o]) &&
                      (u.initialize(),
                      u.attachView(d),
                      u.setAutoPlay(!1),
                      "object" !== b(l.dash.drm) ||
                        w.default.Utils.isObjectEmpty(l.dash.drm) ||
                        (u.setProtectionData(l.dash.drm),
                        (0, T.isString)(l.dash.robustnessLevel) &&
                          l.dash.robustnessLevel &&
                          u
                            .getProtectionController()
                            .setRobustnessLevel(l.dash.robustnessLevel)),
                      u.attachSource(d.getSrc())),
                      d.addEventListener(t, p);
                  var r = function (e) {
                    if ("error" === e.type.toLowerCase())
                      s.generateError(e.message, d.src), console.error(e);
                    else {
                      var t = (0, T.createEvent)(e.type, s);
                      (t.data = e), s.dispatchEvent(t);
                    }
                  };
                  for (var a in n)
                    n.hasOwnProperty(a) &&
                      u.on(n[a], function (e) {
                        return r(e);
                      });
                }),
                e && 0 < e.length)
              )
                for (var y = 0, g = e.length; y < g; y++)
                  if (x.renderer.renderers[l.prefix].canPlayType(e[y].type)) {
                    d.setAttribute("src", e[y].src),
                      void 0 !== e[y].drm && (l.dash.drm = e[y].drm);
                    break;
                  }
              d.setAttribute("id", r),
                t.parentNode.insertBefore(d, t),
                (t.autoplay = !1),
                (t.style.display = "none"),
                (d.setSize = function (e, t) {
                  return (
                    (d.style.width = e + "px"), (d.style.height = t + "px"), d
                  );
                }),
                (d.hide = function () {
                  return d.pause(), (d.style.display = "none"), d;
                }),
                (d.show = function () {
                  return (d.style.display = ""), d;
                }),
                (d.destroy = function () {
                  null !== u && u.reset();
                });
              var E = (0, T.createEvent)("rendererready", d);
              return (
                s.dispatchEvent(E),
                s.promises.push(P.load({ options: l.dash, id: r })),
                d
              );
            },
          };
        o.typeChecks.push(function (e) {
          return ~e.toLowerCase().indexOf(".mpd")
            ? "application/dash+xml"
            : null;
        }),
          x.renderer.add(s);
      },
      { 10: 10, 27: 27, 28: 28, 29: 29, 3: 3, 30: 30, 9: 9 },
    ],
    22: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.PluginDetector = void 0);
        var d =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          C = o(e(3)),
          k = o(e(2)),
          _ = o(e(9)),
          N = o(e(7)),
          A = e(10),
          L = e(29),
          F = e(27),
          I = e(30);
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = (n.PluginDetector = {
          plugins: [],
          hasPluginVersion: function (e, t) {
            var n = r.plugins[e];
            return (
              (t[1] = t[1] || 0),
              (t[2] = t[2] || 0),
              n[0] > t[0] ||
                (n[0] === t[0] && n[1] > t[1]) ||
                (n[0] === t[0] && n[1] === t[1] && n[2] >= t[2])
            );
          },
          addPlugin: function (e, t, n, o, i) {
            r.plugins[e] = r.detectPlugin(t, n, o, i);
          },
          detectPlugin: function (e, t, n, o) {
            var i = [0, 0, 0],
              r = void 0,
              a = void 0;
            if (
              null !== F.NAV.plugins &&
              void 0 !== F.NAV.plugins &&
              "object" === d(F.NAV.plugins[e])
            ) {
              if (
                (r = F.NAV.plugins[e].description) &&
                (void 0 === F.NAV.mimeTypes ||
                  !F.NAV.mimeTypes[t] ||
                  F.NAV.mimeTypes[t].enabledPlugin)
              )
                for (
                  var s = 0,
                    l = (i = r
                      .replace(e, "")
                      .replace(/^\s+/, "")
                      .replace(/\sr/gi, ".")
                      .split(".")).length;
                  s < l;
                  s++
                )
                  i[s] = parseInt(i[s].match(/\d+/), 10);
            } else if (void 0 !== C.default.ActiveXObject)
              try {
                (a = new ActiveXObject(n)) && (i = o(a));
              } catch (e) {}
            return i;
          },
        });
        r.addPlugin(
          "flash",
          "Shockwave Flash",
          "application/x-shockwave-flash",
          "ShockwaveFlash.ShockwaveFlash",
          function (e) {
            var t = [],
              n = e.GetVariable("$version");
            return (
              n &&
                ((n = n.split(" ")[1].split(",")),
                (t = [
                  parseInt(n[0], 10),
                  parseInt(n[1], 10),
                  parseInt(n[2], 10),
                ])),
              t
            );
          }
        );
        var i = {
          create: function (e, t, n) {
            var r = {},
              o = !1;
            (r.options = t),
              (r.id = e.id + "_" + r.options.prefix),
              (r.mediaElement = e),
              (r.flashState = {}),
              (r.flashApi = null),
              (r.flashApiStack = []);
            for (
              var i = _.default.html5media.properties,
                a = function (t) {
                  r.flashState[t] = null;
                  var e = "" + t.substring(0, 1).toUpperCase() + t.substring(1);
                  (r["get" + e] = function () {
                    if (null === r.flashApi) return null;
                    if ("function" != typeof r.flashApi["get_" + t])
                      return null;
                    var e = r.flashApi["get_" + t]();
                    return "buffered" === t
                      ? {
                          start: function () {
                            return 0;
                          },
                          end: function () {
                            return e;
                          },
                          length: 1,
                        }
                      : e;
                  }),
                    (r["set" + e] = function (e) {
                      if (
                        ("src" === t && (e = (0, I.absolutizeUrl)(e)),
                        null !== r.flashApi &&
                          void 0 !== r.flashApi["set_" + t])
                      )
                        try {
                          r.flashApi["set_" + t](e);
                        } catch (e) {}
                      else
                        r.flashApiStack.push({
                          type: "set",
                          propName: t,
                          value: e,
                        });
                    });
                },
                s = 0,
                l = i.length;
              s < l;
              s++
            )
              a(i[s]);
            var d = _.default.html5media.methods,
              u = function (e) {
                r[e] = function () {
                  if (o)
                    if (null !== r.flashApi) {
                      if (r.flashApi["fire_" + e])
                        try {
                          r.flashApi["fire_" + e]();
                        } catch (e) {}
                    } else
                      r.flashApiStack.push({ type: "call", methodName: e });
                };
              };
            d.push("stop");
            for (var c = 0, f = d.length; c < f; c++) u(d[c]);
            for (var p = ["rendererready"], m = 0, h = p.length; m < h; m++) {
              var v = (0, L.createEvent)(p[m], r);
              e.dispatchEvent(v);
            }
            (C.default["__ready__" + r.id] = function () {
              if (
                ((r.flashReady = !0),
                (r.flashApi = k.default.getElementById("__" + r.id)),
                r.flashApiStack.length)
              )
                for (var e = 0, t = r.flashApiStack.length; e < t; e++) {
                  var n = r.flashApiStack[e];
                  if ("set" === n.type) {
                    var o = n.propName,
                      i = "" + o.substring(0, 1).toUpperCase() + o.substring(1);
                    r["set" + i](n.value);
                  } else "call" === n.type && r[n.methodName]();
                }
            }),
              (C.default["__event__" + r.id] = function (e, t) {
                var n = (0, L.createEvent)(e, r);
                if (t)
                  try {
                    (n.data = JSON.parse(t)), (n.details.data = JSON.parse(t));
                  } catch (e) {
                    n.message = t;
                  }
                r.mediaElement.dispatchEvent(n);
              }),
              (r.flashWrapper = k.default.createElement("div")),
              -1 ===
                ["always", "sameDomain"].indexOf(r.options.shimScriptAccess) &&
                (r.options.shimScriptAccess = "sameDomain");
            var y = e.originalNode.autoplay,
              g = [
                "uid=" + r.id,
                "autoplay=" + y,
                "allowScriptAccess=" + r.options.shimScriptAccess,
                "preload=" + (e.originalNode.getAttribute("preload") || ""),
              ],
              E =
                null !== e.originalNode &&
                "video" === e.originalNode.tagName.toLowerCase(),
              b = E ? e.originalNode.height : 1,
              S = E ? e.originalNode.width : 1;
            e.originalNode.getAttribute("src") &&
              g.push("src=" + e.originalNode.getAttribute("src")),
              !0 === r.options.enablePseudoStreaming &&
                (g.push(
                  "pseudostreamstart=" +
                    r.options.pseudoStreamingStartQueryParam
                ),
                g.push("pseudostreamtype=" + r.options.pseudoStreamingType)),
              r.options.streamDelimiter &&
                g.push(
                  "streamdelimiter=" +
                    encodeURIComponent(r.options.streamDelimiter)
                ),
              r.options.proxyType && g.push("proxytype=" + r.options.proxyType),
              e.appendChild(r.flashWrapper),
              (e.originalNode.style.display = "none");
            var w = [];
            if (F.IS_IE || F.IS_EDGE) {
              var x = k.default.createElement("div");
              r.flashWrapper.appendChild(x),
                (w = F.IS_EDGE
                  ? [
                      'type="application/x-shockwave-flash"',
                      'data="' +
                        r.options.pluginPath +
                        r.options.filename +
                        '"',
                      'id="__' + r.id + '"',
                      'width="' + S + '"',
                      'height="' + b + "'\"",
                    ]
                  : [
                      'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"',
                      'codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"',
                      'id="__' + r.id + '"',
                      'width="' + S + '"',
                      'height="' + b + '"',
                    ]),
                E || w.push('style="clip: rect(0 0 0 0); position: absolute;"'),
                (x.outerHTML =
                  "<object " +
                  w.join(" ") +
                  '><param name="movie" value="' +
                  r.options.pluginPath +
                  r.options.filename +
                  "?x=" +
                  new Date() +
                  '" /><param name="flashvars" value="' +
                  g.join("&amp;") +
                  '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' +
                  r.options.shimScriptAccess +
                  '" /><param name="allowFullScreen" value="true" /><div>' +
                  N.default.t("mejs.install-flash") +
                  "</div></object>");
            } else
              (w = [
                'id="__' + r.id + '"',
                'name="__' + r.id + '"',
                'play="true"',
                'loop="false"',
                'quality="high"',
                'bgcolor="#000000"',
                'wmode="transparent"',
                'allowScriptAccess="' + r.options.shimScriptAccess + '"',
                'allowFullScreen="true"',
                'type="application/x-shockwave-flash"',
                'pluginspage="//www.macromedia.com/go/getflashplayer"',
                'src="' + r.options.pluginPath + r.options.filename + '"',
                'flashvars="' + g.join("&") + '"',
              ]),
                E
                  ? (w.push('width="' + S + '"'), w.push('height="' + b + '"'))
                  : w.push(
                      'style="position: fixed; left: -9999em; top: -9999em;"'
                    ),
                (r.flashWrapper.innerHTML = "<embed " + w.join(" ") + ">");
            if (
              ((r.flashNode = r.flashWrapper.lastChild),
              (r.hide = function () {
                (o = !1), E && (r.flashNode.style.display = "none");
              }),
              (r.show = function () {
                (o = !0), E && (r.flashNode.style.display = "");
              }),
              (r.setSize = function (e, t) {
                (r.flashNode.style.width = e + "px"),
                  (r.flashNode.style.height = t + "px"),
                  null !== r.flashApi &&
                    "function" == typeof r.flashApi.fire_setSize &&
                    r.flashApi.fire_setSize(e, t);
              }),
              (r.destroy = function () {
                r.flashNode.remove();
              }),
              n && 0 < n.length)
            )
              for (var T = 0, P = n.length; T < P; T++)
                if (A.renderer.renderers[t.prefix].canPlayType(n[T].type)) {
                  r.setSrc(n[T].src);
                  break;
                }
            return r;
          },
        };
        if (r.hasPluginVersion("flash", [10, 0, 0])) {
          I.typeChecks.push(function (e) {
            return (e = e.toLowerCase()).startsWith("rtmp")
              ? ~e.indexOf(".mp3")
                ? "audio/rtmp"
                : "video/rtmp"
              : /\.og(a|g)/i.test(e)
              ? "audio/ogg"
              : ~e.indexOf(".m3u8")
              ? "application/x-mpegURL"
              : ~e.indexOf(".mpd")
              ? "application/dash+xml"
              : ~e.indexOf(".flv")
              ? "video/flv"
              : null;
          });
          var a = {
            name: "flash_video",
            options: {
              prefix: "flash_video",
              filename: "mediaelement-flash-video.swf",
              enablePseudoStreaming: !1,
              pseudoStreamingStartQueryParam: "start",
              pseudoStreamingType: "byte",
              proxyType: "",
              streamDelimiter: "",
            },
            canPlayType: function (e) {
              return ~[
                "video/mp4",
                "video/rtmp",
                "audio/rtmp",
                "rtmp/mp4",
                "audio/mp4",
                "video/flv",
                "video/x-flv",
              ].indexOf(e.toLowerCase());
            },
            create: i.create,
          };
          A.renderer.add(a);
          var s = {
            name: "flash_hls",
            options: {
              prefix: "flash_hls",
              filename: "mediaelement-flash-video-hls.swf",
            },
            canPlayType: function (e) {
              return ~[
                "application/x-mpegurl",
                "application/vnd.apple.mpegurl",
                "audio/mpegurl",
                "audio/hls",
                "video/hls",
              ].indexOf(e.toLowerCase());
            },
            create: i.create,
          };
          A.renderer.add(s);
          var l = {
            name: "flash_dash",
            options: {
              prefix: "flash_dash",
              filename: "mediaelement-flash-video-mdash.swf",
            },
            canPlayType: function (e) {
              return ~["application/dash+xml"].indexOf(e.toLowerCase());
            },
            create: i.create,
          };
          A.renderer.add(l);
          var u = {
            name: "flash_audio",
            options: {
              prefix: "flash_audio",
              filename: "mediaelement-flash-audio.swf",
            },
            canPlayType: function (e) {
              return ~["audio/mp3"].indexOf(e.toLowerCase());
            },
            create: i.create,
          };
          A.renderer.add(u);
          var c = {
            name: "flash_audio_ogg",
            options: {
              prefix: "flash_audio_ogg",
              filename: "mediaelement-flash-audio-ogg.swf",
            },
            canPlayType: function (e) {
              return ~["audio/ogg", "audio/oga", "audio/ogv"].indexOf(
                e.toLowerCase()
              );
            },
            create: i.create,
          };
          A.renderer.add(c);
        }
      },
      { 10: 10, 2: 2, 27: 27, 29: 29, 3: 3, 30: 30, 7: 7, 9: 9 },
    ],
    23: [
      function (e, t, n) {
        "use strict";
        var g =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          E = a(e(3)),
          b = a(e(9)),
          S = e(10),
          w = e(29),
          o = e(27),
          i = e(30),
          r = e(28);
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var x = {
            promise: null,
            load: function (e) {
              return (
                "undefined" != typeof flvjs
                  ? (x.promise = new Promise(function (e) {
                      e();
                    }).then(function () {
                      x._createPlayer(e);
                    }))
                  : ((e.options.path =
                      "string" == typeof e.options.path
                        ? e.options.path
                        : "https://cdn.jsdelivr.net/npm/flv.js@latest"),
                    (x.promise =
                      x.promise || (0, r.loadScript)(e.options.path)),
                    x.promise.then(function () {
                      x._createPlayer(e);
                    })),
                x.promise
              );
            },
            _createPlayer: function (e) {
              (flvjs.LoggingControl.enableDebug = e.options.debug),
                (flvjs.LoggingControl.enableVerbose = e.options.debug);
              var t = flvjs.createPlayer(e.options, e.configs);
              return E.default["__ready__" + e.id](t), t;
            },
          },
          s = {
            name: "native_flv",
            options: {
              prefix: "native_flv",
              flv: {
                path: "https://cdn.jsdelivr.net/npm/flv.js@latest",
                cors: !0,
                debug: !1,
              },
            },
            canPlayType: function (e) {
              return (
                o.HAS_MSE &&
                -1 < ["video/x-flv", "video/flv"].indexOf(e.toLowerCase())
              );
            },
            create: function (s, a, e) {
              var t = s.originalNode,
                l = s.id + "_" + a.prefix,
                d = null,
                u = null;
              (d = t.cloneNode(!0)), (a = Object.assign(a, s.options));
              for (
                var n = b.default.html5media.properties,
                  c = b.default.html5media.events
                    .concat(["click", "mouseover", "mouseout"])
                    .filter(function (e) {
                      return "error" !== e;
                    }),
                  f = function (e) {
                    var t = (0, w.createEvent)(e.type, s);
                    s.dispatchEvent(t);
                  },
                  o = function (r) {
                    var e =
                      "" + r.substring(0, 1).toUpperCase() + r.substring(1);
                    (d["get" + e] = function () {
                      return null !== u ? d[r] : null;
                    }),
                      (d["set" + e] = function (e) {
                        if (
                          -1 ===
                          b.default.html5media.readOnlyProperties.indexOf(r)
                        )
                          if ("src" === r) {
                            if (
                              ((d[r] =
                                "object" ===
                                  (void 0 === e ? "undefined" : g(e)) && e.src
                                  ? e.src
                                  : e),
                              null !== u)
                            ) {
                              var t = { type: "flv" };
                              (t.url = e),
                                (t.cors = a.flv.cors),
                                (t.debug = a.flv.debug),
                                (t.path = a.flv.path);
                              var n = a.flv.configs;
                              u.destroy();
                              for (var o = 0, i = c.length; o < i; o++)
                                d.removeEventListener(c[o], f);
                              (u = x._createPlayer({
                                options: t,
                                configs: n,
                                id: l,
                              })).attachMediaElement(d),
                                u.load();
                            }
                          } else d[r] = e;
                      });
                  },
                  i = 0,
                  r = n.length;
                i < r;
                i++
              )
                o(n[i]);
              if (
                ((E.default["__ready__" + l] = function (e) {
                  s.flvPlayer = u = e;
                  for (var t, i = flvjs.Events, n = 0, o = c.length; n < o; n++)
                    "loadedmetadata" === (t = c[n]) &&
                      (u.unload(),
                      u.detachMediaElement(),
                      u.attachMediaElement(d),
                      u.load()),
                      d.addEventListener(t, f);
                  var r = function (o) {
                    i.hasOwnProperty(o) &&
                      u.on(i[o], function () {
                        for (
                          var e = arguments.length, t = Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return (function (e, t) {
                          if ("error" === e) {
                            var n = t[0] + ": " + t[1] + " " + t[2].msg;
                            s.generateError(n, d.src);
                          } else {
                            var o = (0, w.createEvent)(e, s);
                            (o.data = t), s.dispatchEvent(o);
                          }
                        })(i[o], t);
                      });
                  };
                  for (var a in i) r(a);
                }),
                e && 0 < e.length)
              )
                for (var p = 0, m = e.length; p < m; p++)
                  if (S.renderer.renderers[a.prefix].canPlayType(e[p].type)) {
                    d.setAttribute("src", e[p].src);
                    break;
                  }
              d.setAttribute("id", l),
                t.parentNode.insertBefore(d, t),
                (t.autoplay = !1),
                (t.style.display = "none");
              var h = { type: "flv" };
              (h.url = d.src),
                (h.cors = a.flv.cors),
                (h.debug = a.flv.debug),
                (h.path = a.flv.path);
              var v = a.flv.configs;
              (d.setSize = function (e, t) {
                return (
                  (d.style.width = e + "px"), (d.style.height = t + "px"), d
                );
              }),
                (d.hide = function () {
                  return null !== u && u.pause(), (d.style.display = "none"), d;
                }),
                (d.show = function () {
                  return (d.style.display = ""), d;
                }),
                (d.destroy = function () {
                  null !== u && u.destroy();
                });
              var y = (0, w.createEvent)("rendererready", d);
              return (
                s.dispatchEvent(y),
                s.promises.push(x.load({ options: h, configs: v, id: l })),
                d
              );
            },
          };
        i.typeChecks.push(function (e) {
          return ~e.toLowerCase().indexOf(".flv") ? "video/flv" : null;
        }),
          S.renderer.add(s);
      },
      { 10: 10, 27: 27, 28: 28, 29: 29, 3: 3, 30: 30, 9: 9 },
    ],
    24: [
      function (e, t, n) {
        "use strict";
        var g =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          E = a(e(3)),
          b = a(e(9)),
          S = e(10),
          w = e(29),
          o = e(27),
          i = e(30),
          r = e(28);
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var x = {
            promise: null,
            load: function (e) {
              return (
                "undefined" != typeof Hls
                  ? (x.promise = new Promise(function (e) {
                      e();
                    }).then(function () {
                      x._createPlayer(e);
                    }))
                  : ((e.options.path =
                      "string" == typeof e.options.path
                        ? e.options.path
                        : "https://cdn.jsdelivr.net/npm/hls.js@latest"),
                    (x.promise =
                      x.promise || (0, r.loadScript)(e.options.path)),
                    x.promise.then(function () {
                      x._createPlayer(e);
                    })),
                x.promise
              );
            },
            _createPlayer: function (e) {
              var t = new Hls(e.options);
              return E.default["__ready__" + e.id](t), t;
            },
          },
          s = {
            name: "native_hls",
            options: {
              prefix: "native_hls",
              hls: {
                path: "https://cdn.jsdelivr.net/npm/hls.js@latest",
                autoStartLoad: !1,
                debug: !1,
              },
            },
            canPlayType: function (e) {
              return (
                o.HAS_MSE &&
                -1 <
                  [
                    "application/x-mpegurl",
                    "application/vnd.apple.mpegurl",
                    "audio/mpegurl",
                    "audio/hls",
                    "video/hls",
                  ].indexOf(e.toLowerCase())
              );
            },
            create: function (d, i, u) {
              var e = d.originalNode,
                r = d.id + "_" + i.prefix,
                t = e.getAttribute("preload"),
                n = e.autoplay,
                c = null,
                f = null,
                p = 0,
                m = u.length;
              (f = e.cloneNode(!0)),
                ((i = Object.assign(i, d.options)).hls.autoStartLoad =
                  (t && "none" !== t) || n);
              for (
                var o = b.default.html5media.properties,
                  h = b.default.html5media.events
                    .concat(["click", "mouseover", "mouseout"])
                    .filter(function (e) {
                      return "error" !== e;
                    }),
                  v = function (e) {
                    var t = (0, w.createEvent)(e.type, d);
                    d.dispatchEvent(t);
                  },
                  a = function (o) {
                    var e =
                      "" + o.substring(0, 1).toUpperCase() + o.substring(1);
                    (f["get" + e] = function () {
                      return null !== c ? f[o] : null;
                    }),
                      (f["set" + e] = function (e) {
                        if (
                          -1 ===
                          b.default.html5media.readOnlyProperties.indexOf(o)
                        )
                          if ("src" === o) {
                            if (
                              ((f[o] =
                                "object" ===
                                  (void 0 === e ? "undefined" : g(e)) && e.src
                                  ? e.src
                                  : e),
                              null !== c)
                            ) {
                              c.destroy();
                              for (var t = 0, n = h.length; t < n; t++)
                                f.removeEventListener(h[t], v);
                              (c = x._createPlayer({
                                options: i.hls,
                                id: r,
                              })).loadSource(e),
                                c.attachMedia(f);
                            }
                          } else f[o] = e;
                      });
                  },
                  s = 0,
                  l = o.length;
                s < l;
                s++
              )
                a(o[s]);
              if (
                ((E.default["__ready__" + r] = function (e) {
                  d.hlsPlayer = c = e;
                  for (
                    var i = Hls.Events,
                      t = function (e) {
                        if ("loadedmetadata" === e) {
                          var t = d.originalNode.src;
                          c.detachMedia(), c.loadSource(t), c.attachMedia(f);
                        }
                        f.addEventListener(e, v);
                      },
                      n = 0,
                      o = h.length;
                    n < o;
                    n++
                  )
                    t(h[n]);
                  var s = void 0,
                    l = void 0,
                    r = function (o) {
                      i.hasOwnProperty(o) &&
                        c.on(i[o], function () {
                          for (
                            var e = arguments.length, t = Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return (function (e, t) {
                            if (
                              "hlsError" === e &&
                              (console.warn(t), (t = t[1]).fatal)
                            )
                              switch (t.type) {
                                case "mediaError":
                                  var n = new Date().getTime();
                                  if (!s || 3e3 < n - s)
                                    (s = new Date().getTime()),
                                      c.recoverMediaError();
                                  else if (!l || 3e3 < n - l)
                                    (l = new Date().getTime()),
                                      console.warn(
                                        "Attempting to swap Audio Codec and recover from media error"
                                      ),
                                      c.swapAudioCodec(),
                                      c.recoverMediaError();
                                  else {
                                    var o =
                                      "Cannot recover, last media error recovery failed";
                                    d.generateError(o, f.src), console.error(o);
                                  }
                                  break;
                                case "networkError":
                                  if ("manifestLoadError" === t.details)
                                    if (p < m && void 0 !== u[p + 1])
                                      f.setSrc(u[p++].src), f.load(), f.play();
                                    else {
                                      var i = "Network error";
                                      d.generateError(i, u), console.error(i);
                                    }
                                  else {
                                    var r = "Network error";
                                    d.generateError(r, u), console.error(r);
                                  }
                                  break;
                                default:
                                  c.destroy();
                              }
                            else {
                              var a = (0, w.createEvent)(e, d);
                              (a.data = t), d.dispatchEvent(a);
                            }
                          })(i[o], t);
                        });
                    };
                  for (var a in i) r(a);
                }),
                0 < m)
              )
                for (; p < m; p++)
                  if (S.renderer.renderers[i.prefix].canPlayType(u[p].type)) {
                    f.setAttribute("src", u[p].src);
                    break;
                  }
              "auto" === t ||
                n ||
                (f.addEventListener("play", function () {
                  null !== c && c.startLoad();
                }),
                f.addEventListener("pause", function () {
                  null !== c && c.stopLoad();
                })),
                f.setAttribute("id", r),
                e.parentNode.insertBefore(f, e),
                (e.autoplay = !1),
                (e.style.display = "none"),
                (f.setSize = function (e, t) {
                  return (
                    (f.style.width = e + "px"), (f.style.height = t + "px"), f
                  );
                }),
                (f.hide = function () {
                  return f.pause(), (f.style.display = "none"), f;
                }),
                (f.show = function () {
                  return (f.style.display = ""), f;
                }),
                (f.destroy = function () {
                  null !== c && (c.stopLoad(), c.destroy());
                });
              var y = (0, w.createEvent)("rendererready", f);
              return (
                d.dispatchEvent(y),
                d.promises.push(x.load({ options: i.hls, id: r })),
                f
              );
            },
          };
        i.typeChecks.push(function (e) {
          return ~e.toLowerCase().indexOf(".m3u8")
            ? "application/x-mpegURL"
            : null;
        }),
          S.renderer.add(s);
      },
      { 10: 10, 27: 27, 28: 28, 29: 29, 3: 3, 30: 30, 9: 9 },
    ],
    25: [
      function (e, t, n) {
        "use strict";
        var o = r(e(3)),
          y = r(e(2)),
          g = r(e(9)),
          E = e(10),
          b = e(29),
          i = e(27);
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = {
          name: "html5",
          options: { prefix: "html5" },
          canPlayType: function (e) {
            var t = y.default.createElement("video");
            return (i.IS_ANDROID && /\/mp(3|4)$/i.test(e)) ||
              (~[
                "application/x-mpegurl",
                "vnd.apple.mpegurl",
                "audio/mpegurl",
                "audio/hls",
                "video/hls",
              ].indexOf(e.toLowerCase()) &&
                i.SUPPORTS_NATIVE_HLS)
              ? "yes"
              : t.canPlayType
              ? t.canPlayType(e.toLowerCase()).replace(/no/, "")
              : "";
          },
          create: function (n, e, t) {
            var o = n.id + "_" + e.prefix,
              i = !1,
              r = null;
            void 0 === n.originalNode || null === n.originalNode
              ? ((r = y.default.createElement("audio")), n.appendChild(r))
              : (r = n.originalNode),
              r.setAttribute("id", o);
            for (
              var a = g.default.html5media.properties,
                s = function (t) {
                  var e = "" + t.substring(0, 1).toUpperCase() + t.substring(1);
                  (r["get" + e] = function () {
                    return r[t];
                  }),
                    (r["set" + e] = function (e) {
                      -1 ===
                        g.default.html5media.readOnlyProperties.indexOf(t) &&
                        (r[t] = e);
                    });
                },
                l = 0,
                d = a.length;
              l < d;
              l++
            )
              s(a[l]);
            for (
              var u,
                c = g.default.html5media.events
                  .concat(["click", "mouseover", "mouseout"])
                  .filter(function (e) {
                    return "error" !== e;
                  }),
                f = 0,
                p = c.length;
              f < p;
              f++
            )
              (u = c[f]),
                r.addEventListener(u, function (e) {
                  if (i) {
                    var t = (0, b.createEvent)(e.type, e.target);
                    n.dispatchEvent(t);
                  }
                });
            (r.setSize = function (e, t) {
              return (r.style.width = e + "px"), (r.style.height = t + "px"), r;
            }),
              (r.hide = function () {
                return (i = !1), (r.style.display = "none"), r;
              }),
              (r.show = function () {
                return (i = !0), (r.style.display = ""), r;
              });
            var m = 0,
              h = t.length;
            if (0 < h)
              for (; m < h; m++)
                if (E.renderer.renderers[e.prefix].canPlayType(t[m].type)) {
                  r.setAttribute("src", t[m].src);
                  break;
                }
            r.addEventListener("error", function (e) {
              4 === e.target.error.code &&
                i &&
                (m < h && void 0 !== t[m + 1]
                  ? ((r.src = t[m++].src), r.load(), r.play())
                  : n.generateError(
                      "Media error: Format(s) not supported or source(s) not found",
                      t
                    ));
            });
            var v = (0, b.createEvent)("rendererready", r);
            return n.dispatchEvent(v), r;
          },
        };
        (o.default.HtmlMediaElement = g.default.HtmlMediaElement = a),
          E.renderer.add(a);
      },
      { 10: 10, 2: 2, 27: 27, 29: 29, 3: 3, 9: 9 },
    ],
    26: [
      function (e, t, n) {
        "use strict";
        var x = a(e(3)),
          T = a(e(2)),
          P = a(e(9)),
          o = e(10),
          C = e(29),
          i = e(30),
          r = e(28);
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var k = {
            isIframeStarted: !1,
            isIframeLoaded: !1,
            iframeQueue: [],
            enqueueIframe: function (e) {
              (k.isLoaded = "undefined" != typeof YT && YT.loaded),
                k.isLoaded
                  ? k.createIframe(e)
                  : (k.loadIframeApi(), k.iframeQueue.push(e));
            },
            loadIframeApi: function () {
              k.isIframeStarted ||
                ((0, r.loadScript)("https://www.youtube.com/player_api"),
                (k.isIframeStarted = !0));
            },
            iFrameReady: function () {
              for (
                k.isLoaded = !0, k.isIframeLoaded = !0;
                0 < k.iframeQueue.length;

              ) {
                var e = k.iframeQueue.pop();
                k.createIframe(e);
              }
            },
            createIframe: function (e) {
              return new YT.Player(e.containerId, e);
            },
            getYouTubeId: function (e) {
              var t = "";
              return (
                0 < e.indexOf("?")
                  ? "" === (t = k.getYouTubeIdFromParam(e)) &&
                    (t = k.getYouTubeIdFromUrl(e))
                  : (t = k.getYouTubeIdFromUrl(e)),
                (t = t.substring(t.lastIndexOf("/") + 1).split("?"))[0]
              );
            },
            getYouTubeIdFromParam: function (e) {
              if (null == e || !e.trim().length) return null;
              for (
                var t = e.split("?")[1].split("&"), n = "", o = 0, i = t.length;
                o < i;
                o++
              ) {
                var r = t[o].split("=");
                if ("v" === r[0]) {
                  n = r[1];
                  break;
                }
              }
              return n;
            },
            getYouTubeIdFromUrl: function (e) {
              return null != e && e.trim().length
                ? (e = e.split("?")[0]).substring(e.lastIndexOf("/") + 1)
                : null;
            },
            getYouTubeNoCookieUrl: function (e) {
              if (
                null == e ||
                !e.trim().length ||
                -1 === e.indexOf("//www.youtube")
              )
                return e;
              var t = e.split("/");
              return (
                (t[2] = t[2].replace(".com", "-nocookie.com")), t.join("/")
              );
            },
          },
          s = {
            name: "youtube_iframe",
            options: {
              prefix: "youtube_iframe",
              youtube: {
                autoplay: 0,
                controls: 0,
                disablekb: 1,
                end: 0,
                loop: 0,
                modestbranding: 0,
                playsinline: 0,
                rel: 0,
                showinfo: 0,
                start: 0,
                iv_load_policy: 3,
                nocookie: !1,
                imageQuality: null,
              },
            },
            canPlayType: function (e) {
              return ~["video/youtube", "video/x-youtube"].indexOf(
                e.toLowerCase()
              );
            },
            create: function (m, n, o) {
              var h = {},
                v = [],
                y = null,
                r = !0,
                a = !1,
                g = null;
              (h.options = n),
                (h.id = m.id + "_" + n.prefix),
                (h.mediaElement = m);
              for (
                var e = P.default.html5media.properties,
                  t = function (i) {
                    var e =
                      "" + i.substring(0, 1).toUpperCase() + i.substring(1);
                    (h["get" + e] = function () {
                      if (null === y) return null;
                      switch (i) {
                        case "currentTime":
                          return y.getCurrentTime();
                        case "duration":
                          return y.getDuration();
                        case "volume":
                          return y.getVolume() / 100;
                        case "playbackRate":
                          return y.getPlaybackRate();
                        case "paused":
                          return r;
                        case "ended":
                          return a;
                        case "muted":
                          return y.isMuted();
                        case "buffered":
                          var e = y.getVideoLoadedFraction(),
                            t = y.getDuration();
                          return {
                            start: function () {
                              return 0;
                            },
                            end: function () {
                              return e * t;
                            },
                            length: 1,
                          };
                        case "src":
                          return y.getVideoUrl();
                        case "readyState":
                          return 4;
                      }
                      return null;
                    }),
                      (h["set" + e] = function (e) {
                        if (null !== y)
                          switch (i) {
                            case "src":
                              var t = "string" == typeof e ? e : e[0].src,
                                n = k.getYouTubeId(t);
                              m.originalNode.autoplay
                                ? y.loadVideoById(n)
                                : y.cueVideoById(n);
                              break;
                            case "currentTime":
                              y.seekTo(e);
                              break;
                            case "muted":
                              e ? y.mute() : y.unMute(),
                                setTimeout(function () {
                                  var e = (0, C.createEvent)("volumechange", h);
                                  m.dispatchEvent(e);
                                }, 50);
                              break;
                            case "volume":
                              e,
                                y.setVolume(100 * e),
                                setTimeout(function () {
                                  var e = (0, C.createEvent)("volumechange", h);
                                  m.dispatchEvent(e);
                                }, 50);
                              break;
                            case "playbackRate":
                              y.setPlaybackRate(e),
                                setTimeout(function () {
                                  var e = (0, C.createEvent)("ratechange", h);
                                  m.dispatchEvent(e);
                                }, 50);
                              break;
                            case "readyState":
                              var o = (0, C.createEvent)("canplay", h);
                              m.dispatchEvent(o);
                          }
                        else v.push({ type: "set", propName: i, value: e });
                      });
                  },
                  i = 0,
                  s = e.length;
                i < s;
                i++
              )
                t(e[i]);
              for (
                var l = P.default.html5media.methods,
                  d = function (e) {
                    h[e] = function () {
                      if (null !== y)
                        switch (e) {
                          case "play":
                            return (r = !1), y.playVideo();
                          case "pause":
                            return (r = !0), y.pauseVideo();
                          case "load":
                            return null;
                        }
                      else v.push({ type: "call", methodName: e });
                    };
                  },
                  u = 0,
                  c = l.length;
                u < c;
                u++
              )
                d(l[u]);
              var f = T.default.createElement("div");
              (f.id = h.id),
                h.options.youtube.nocookie &&
                  (m.originalNode.src = k.getYouTubeNoCookieUrl(o[0].src)),
                m.originalNode.parentNode.insertBefore(f, m.originalNode),
                (m.originalNode.style.display = "none");
              var p = "audio" === m.originalNode.tagName.toLowerCase(),
                E = p ? "1" : m.originalNode.height,
                b = p ? "1" : m.originalNode.width,
                S = k.getYouTubeId(o[0].src),
                w = {
                  id: h.id,
                  containerId: f.id,
                  videoId: S,
                  height: E,
                  width: b,
                  playerVars: Object.assign(
                    {
                      controls: 0,
                      rel: 0,
                      disablekb: 1,
                      showinfo: 0,
                      modestbranding: 0,
                      html5: 1,
                      iv_load_policy: 3,
                    },
                    h.options.youtube
                  ),
                  origin: x.default.location.host,
                  events: {
                    onReady: function (e) {
                      if (
                        ((m.youTubeApi = y = e.target),
                        (m.youTubeState = { paused: !0, ended: !1 }),
                        v.length)
                      )
                        for (var t = 0, n = v.length; t < n; t++) {
                          var o = v[t];
                          if ("set" === o.type) {
                            var i = o.propName,
                              r =
                                "" +
                                i.substring(0, 1).toUpperCase() +
                                i.substring(1);
                            h["set" + r](o.value);
                          } else "call" === o.type && h[o.methodName]();
                        }
                      (g = y.getIframe()), m.originalNode.muted && y.mute();
                      for (
                        var a = ["mouseover", "mouseout"],
                          s = function (e) {
                            var t = (0, C.createEvent)(e.type, h);
                            m.dispatchEvent(t);
                          },
                          l = 0,
                          d = a.length;
                        l < d;
                        l++
                      )
                        g.addEventListener(a[l], s, !1);
                      for (
                        var u = [
                            "rendererready",
                            "loadedmetadata",
                            "loadeddata",
                            "canplay",
                          ],
                          c = 0,
                          f = u.length;
                        c < f;
                        c++
                      ) {
                        var p = (0, C.createEvent)(u[c], h);
                        m.dispatchEvent(p);
                      }
                    },
                    onStateChange: function (e) {
                      var t = [];
                      switch (e.data) {
                        case -1:
                          (t = ["loadedmetadata"]), (a = !(r = !0));
                          break;
                        case 0:
                          (r = !(t = ["ended"])),
                            (a = !h.options.youtube.loop),
                            h.options.youtube.loop || h.stopInterval();
                          break;
                        case 1:
                          (a = r = !(t = ["play", "playing"])),
                            h.startInterval();
                          break;
                        case 2:
                          (t = ["pause"]), (a = !(r = !0)), h.stopInterval();
                          break;
                        case 3:
                          a = !(t = ["progress"]);
                          break;
                        case 5:
                          (t = ["loadeddata", "loadedmetadata", "canplay"]),
                            (a = !(r = !0));
                      }
                      for (var n = 0, o = t.length; n < o; n++) {
                        var i = (0, C.createEvent)(t[n], h);
                        m.dispatchEvent(i);
                      }
                    },
                    onError: function (e) {
                      return (function (e) {
                        var t = "";
                        switch (e.data) {
                          case 2:
                            t =
                              "The request contains an invalid parameter value. Verify that video ID has 11 characters and that contains no invalid characters, such as exclamation points or asterisks.";
                            break;
                          case 5:
                            t =
                              "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.";
                            break;
                          case 100:
                            t =
                              "The video requested was not found. Either video has been removed or has been marked as private.";
                            break;
                          case 101:
                          case 105:
                            t =
                              "The owner of the requested video does not allow it to be played in embedded players.";
                            break;
                          default:
                            t = "Unknown error.";
                        }
                        m.generateError("Code " + e.data + ": " + t, o);
                      })(e);
                    },
                  },
                };
              return (
                (p || m.originalNode.hasAttribute("playsinline")) &&
                  (w.playerVars.playsinline = 1),
                m.originalNode.controls && (w.playerVars.controls = 1),
                m.originalNode.autoplay && (w.playerVars.autoplay = 1),
                m.originalNode.loop && (w.playerVars.loop = 1),
                ((w.playerVars.loop && 1 === parseInt(w.playerVars.loop, 10)) ||
                  -1 < m.originalNode.src.indexOf("loop=")) &&
                  !w.playerVars.playlist &&
                  -1 === m.originalNode.src.indexOf("playlist=") &&
                  (w.playerVars.playlist = k.getYouTubeId(m.originalNode.src)),
                k.enqueueIframe(w),
                (h.onEvent = function (e, t, n) {
                  null != n && (m.youTubeState = n);
                }),
                (h.setSize = function (e, t) {
                  null !== y && y.setSize(e, t);
                }),
                (h.hide = function () {
                  h.stopInterval(), h.pause(), g && (g.style.display = "none");
                }),
                (h.show = function () {
                  g && (g.style.display = "");
                }),
                (h.destroy = function () {
                  y.destroy();
                }),
                (h.interval = null),
                (h.startInterval = function () {
                  h.interval = setInterval(function () {
                    var e = (0, C.createEvent)("timeupdate", h);
                    m.dispatchEvent(e);
                  }, 250);
                }),
                (h.stopInterval = function () {
                  h.interval && clearInterval(h.interval);
                }),
                (h.getPosterUrl = function () {
                  var e = n.youtube.imageQuality,
                    t = k.getYouTubeId(m.originalNode.src);
                  return e &&
                    -1 <
                      [
                        "default",
                        "hqdefault",
                        "mqdefault",
                        "sddefault",
                        "maxresdefault",
                      ].indexOf(e) &&
                    t
                    ? "https://img.youtube.com/vi/" + t + "/" + e + ".jpg"
                    : "";
                }),
                h
              );
            },
          };
        (x.default.onYouTubePlayerAPIReady = function () {
          k.iFrameReady();
        }),
          i.typeChecks.push(function (e) {
            return /\/\/(www\.youtube|youtu\.?be)/i.test(e)
              ? "video/x-youtube"
              : null;
          }),
          o.renderer.add(s);
      },
      { 10: 10, 2: 2, 28: 28, 29: 29, 3: 3, 30: 30, 9: 9 },
    ],
    27: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.cancelFullScreen =
            n.requestFullScreen =
            n.isFullScreen =
            n.FULLSCREEN_EVENT_NAME =
            n.HAS_NATIVE_FULLSCREEN_ENABLED =
            n.HAS_TRUE_NATIVE_FULLSCREEN =
            n.HAS_IOS_FULLSCREEN =
            n.HAS_MS_NATIVE_FULLSCREEN =
            n.HAS_MOZ_NATIVE_FULLSCREEN =
            n.HAS_WEBKIT_NATIVE_FULLSCREEN =
            n.HAS_NATIVE_FULLSCREEN =
            n.SUPPORTS_NATIVE_HLS =
            n.SUPPORT_PASSIVE_EVENT =
            n.SUPPORT_POINTER_EVENTS =
            n.HAS_MSE =
            n.IS_STOCK_ANDROID =
            n.IS_SAFARI =
            n.IS_FIREFOX =
            n.IS_CHROME =
            n.IS_EDGE =
            n.IS_IE =
            n.IS_ANDROID =
            n.IS_IOS =
            n.IS_IPOD =
            n.IS_IPHONE =
            n.IS_IPAD =
            n.UA =
            n.NAV =
              void 0);
        var i = a(e(3)),
          r = a(e(2)),
          o = a(e(9));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        for (
          var s = (n.NAV = i.default.navigator),
            l = (n.UA = s.userAgent.toLowerCase()),
            d = (n.IS_IPAD = /ipad/i.test(l) && !i.default.MSStream),
            u = (n.IS_IPHONE = /iphone/i.test(l) && !i.default.MSStream),
            c = (n.IS_IPOD = /ipod/i.test(l) && !i.default.MSStream),
            f =
              ((n.IS_IOS = /ipad|iphone|ipod/i.test(l) && !i.default.MSStream),
              (n.IS_ANDROID = /android/i.test(l))),
            p = (n.IS_IE = /(trident|microsoft)/i.test(s.appName)),
            m = (n.IS_EDGE =
              ("msLaunchUri" in s) && !("documentMode" in r.default)),
            h = (n.IS_CHROME = /chrome/i.test(l)),
            v = (n.IS_FIREFOX = /firefox/i.test(l)),
            y = (n.IS_SAFARI = /safari/i.test(l) && !h),
            g = (n.IS_STOCK_ANDROID = /^mozilla\/\d+\.\d+\s\(linux;\su;/i.test(
              l
            )),
            E = (n.HAS_MSE = ("MediaSource" in i.default)),
            b = (n.SUPPORT_POINTER_EVENTS = (function () {
              var e = r.default.createElement("x"),
                t = r.default.documentElement,
                n = i.default.getComputedStyle;
              if (!("pointerEvents" in e.style)) return !1;
              (e.style.pointerEvents = "auto"),
                (e.style.pointerEvents = "x"),
                t.appendChild(e);
              var o = n && "auto" === (n(e, "") || {}).pointerEvents;
              return e.remove(), !!o;
            })()),
            S = (n.SUPPORT_PASSIVE_EVENT = (function () {
              var e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                  get: function () {
                    e = !0;
                  },
                });
                i.default.addEventListener("test", null, t);
              } catch (e) {}
              return e;
            })()),
            w = ["source", "track", "audio", "video"],
            x = void 0,
            T = 0,
            P = w.length;
          T < P;
          T++
        )
          x = r.default.createElement(w[T]);
        var C = (n.SUPPORTS_NATIVE_HLS =
            y || (f && (h || g)) || (p && /edge/i.test(l))),
          k = void 0 !== x.webkitEnterFullscreen,
          _ = void 0 !== x.requestFullscreen;
        k && /mac os x 10_5/i.test(l) && (k = _ = !1);
        var N = void 0 !== x.webkitRequestFullScreen,
          A = void 0 !== x.mozRequestFullScreen,
          L = void 0 !== x.msRequestFullscreen,
          F = N || A || L,
          I = F,
          j = "",
          M = void 0,
          O = void 0,
          D = void 0;
        A
          ? (I = r.default.mozFullScreenEnabled)
          : L && (I = r.default.msFullscreenEnabled),
          h && (k = !1),
          F &&
            (N
              ? (j = "webkitfullscreenchange")
              : A
              ? (j = "mozfullscreenchange")
              : L && (j = "MSFullscreenChange"),
            (n.isFullScreen = M =
              function () {
                return A
                  ? r.default.mozFullScreen
                  : N
                  ? r.default.webkitIsFullScreen
                  : L
                  ? null !== r.default.msFullscreenElement
                  : void 0;
              }),
            (n.requestFullScreen = O =
              function (e) {
                N
                  ? e.webkitRequestFullScreen()
                  : A
                  ? e.mozRequestFullScreen()
                  : L && e.msRequestFullscreen();
              }),
            (n.cancelFullScreen = D =
              function () {
                N
                  ? r.default.webkitCancelFullScreen()
                  : A
                  ? r.default.mozCancelFullScreen()
                  : L && r.default.msExitFullscreen();
              }));
        var R = (n.HAS_NATIVE_FULLSCREEN = _),
          V = (n.HAS_WEBKIT_NATIVE_FULLSCREEN = N),
          H = (n.HAS_MOZ_NATIVE_FULLSCREEN = A),
          U = (n.HAS_MS_NATIVE_FULLSCREEN = L),
          q = (n.HAS_IOS_FULLSCREEN = k),
          B = (n.HAS_TRUE_NATIVE_FULLSCREEN = F),
          z = (n.HAS_NATIVE_FULLSCREEN_ENABLED = I),
          W = (n.FULLSCREEN_EVENT_NAME = j);
        (n.isFullScreen = M),
          (n.requestFullScreen = O),
          (n.cancelFullScreen = D),
          (o.default.Features = o.default.Features || {}),
          (o.default.Features.isiPad = d),
          (o.default.Features.isiPod = c),
          (o.default.Features.isiPhone = u),
          (o.default.Features.isiOS =
            o.default.Features.isiPhone || o.default.Features.isiPad),
          (o.default.Features.isAndroid = f),
          (o.default.Features.isIE = p),
          (o.default.Features.isEdge = m),
          (o.default.Features.isChrome = h),
          (o.default.Features.isFirefox = v),
          (o.default.Features.isSafari = y),
          (o.default.Features.isStockAndroid = g),
          (o.default.Features.hasMSE = E),
          (o.default.Features.supportsNativeHLS = C),
          (o.default.Features.supportsPointerEvents = b),
          (o.default.Features.supportsPassiveEvent = S),
          (o.default.Features.hasiOSFullScreen = q),
          (o.default.Features.hasNativeFullscreen = R),
          (o.default.Features.hasWebkitNativeFullScreen = V),
          (o.default.Features.hasMozNativeFullScreen = H),
          (o.default.Features.hasMsNativeFullScreen = U),
          (o.default.Features.hasTrueNativeFullScreen = B),
          (o.default.Features.nativeFullScreenEnabled = z),
          (o.default.Features.fullScreenEventName = W),
          (o.default.Features.isFullScreen = M),
          (o.default.Features.requestFullScreen = O),
          (o.default.Features.cancelFullScreen = D);
      },
      { 2: 2, 3: 3, 9: 9 },
    ],
    28: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.removeClass = n.addClass = n.hasClass = void 0),
          (n.loadScript = a),
          (n.offset = s),
          (n.toggleClass = h),
          (n.fadeOut = v),
          (n.fadeIn = y),
          (n.siblings = g),
          (n.visible = E),
          (n.ajax = b);
        var l = r(e(3)),
          i = r(e(2)),
          o = r(e(9));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a(o) {
          return new Promise(function (e, t) {
            var n = i.default.createElement("script");
            (n.src = o),
              (n.async = !0),
              (n.onload = function () {
                n.remove(), e();
              }),
              (n.onerror = function () {
                n.remove(), t();
              }),
              i.default.head.appendChild(n);
          });
        }
        function s(e) {
          var t = e.getBoundingClientRect(),
            n = l.default.pageXOffset || i.default.documentElement.scrollLeft,
            o = l.default.pageYOffset || i.default.documentElement.scrollTop;
          return { top: t.top + o, left: t.left + n };
        }
        var d = void 0,
          u = void 0,
          c = void 0;
        c =
          "classList" in i.default.documentElement
            ? ((d = function (e, t) {
                return void 0 !== e.classList && e.classList.contains(t);
              }),
              (u = function (e, t) {
                return e.classList.add(t);
              }),
              function (e, t) {
                return e.classList.remove(t);
              })
            : ((d = function (e, t) {
                return new RegExp("\\b" + t + "\\b").test(e.className);
              }),
              (u = function (e, t) {
                f(e, t) || (e.className += " " + t);
              }),
              function (e, t) {
                e.className = e.className.replace(
                  new RegExp("\\b" + t + "\\b", "g"),
                  ""
                );
              });
        var f = (n.hasClass = d),
          p = (n.addClass = u),
          m = (n.removeClass = c);
        function h(e, t) {
          f(e, t) ? m(e, t) : p(e, t);
        }
        function v(i) {
          var r =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : 400,
            a = arguments[2];
          i.style.opacity || (i.style.opacity = 1);
          var s = null;
          l.default.requestAnimationFrame(function e(t) {
            var n = t - (s = s || t),
              o = parseFloat(1 - n / r, 2);
            (i.style.opacity = o < 0 ? 0 : o),
              r < n
                ? a && "function" == typeof a && a()
                : l.default.requestAnimationFrame(e);
          });
        }
        function y(i) {
          var r =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : 400,
            a = arguments[2];
          i.style.opacity || (i.style.opacity = 0);
          var s = null;
          l.default.requestAnimationFrame(function e(t) {
            var n = t - (s = s || t),
              o = parseFloat(n / r, 2);
            (i.style.opacity = 1 < o ? 1 : o),
              r < n
                ? a && "function" == typeof a && a()
                : l.default.requestAnimationFrame(e);
          });
        }
        function g(e, t) {
          var n = [];
          for (
            e = e.parentNode.firstChild;
            (t && !t(e)) || n.push(e), (e = e.nextSibling);

          );
          return n;
        }
        function E(e) {
          return void 0 !== e.getClientRects && "function" === e.getClientRects
            ? !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            : !(!e.offsetWidth && !e.offsetHeight);
        }
        function b(e, t, n, o) {
          var i = l.default.XMLHttpRequest
              ? new XMLHttpRequest()
              : new ActiveXObject("Microsoft.XMLHTTP"),
            r = "application/x-www-form-urlencoded; charset=UTF-8",
            a = !1,
            s = "*/".concat("*");
          switch (t) {
            case "text":
              r = "text/plain";
              break;
            case "json":
              r = "application/json, text/javascript";
              break;
            case "html":
              r = "text/html";
              break;
            case "xml":
              r = "application/xml, text/xml";
          }
          "application/x-www-form-urlencoded" !== r &&
            (s = r + ", */*; q=0.01"),
            i &&
              (i.open("GET", e, !0),
              i.setRequestHeader("Accept", s),
              (i.onreadystatechange = function () {
                if (!a && 4 === i.readyState)
                  if (200 === i.status) {
                    a = !0;
                    var e = void 0;
                    switch (t) {
                      case "json":
                        e = JSON.parse(i.responseText);
                        break;
                      case "xml":
                        e = i.responseXML;
                        break;
                      default:
                        e = i.responseText;
                    }
                    n(e);
                  } else "function" == typeof o && o(i.status);
              }),
              i.send());
        }
        (o.default.Utils = o.default.Utils || {}),
          (o.default.Utils.offset = s),
          (o.default.Utils.hasClass = f),
          (o.default.Utils.addClass = p),
          (o.default.Utils.removeClass = m),
          (o.default.Utils.toggleClass = h),
          (o.default.Utils.fadeIn = y),
          (o.default.Utils.fadeOut = v),
          (o.default.Utils.siblings = g),
          (o.default.Utils.visible = E),
          (o.default.Utils.ajax = b),
          (o.default.Utils.loadScript = a);
      },
      { 2: 2, 3: 3, 9: 9 },
    ],
    29: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.escapeHTML = a),
          (n.debounce = s),
          (n.isObjectEmpty = l),
          (n.splitEvents = d),
          (n.createEvent = u),
          (n.isNodeAfter = c),
          (n.isString = f);
        var o,
          i = e(9),
          r = (o = i) && o.__esModule ? o : { default: o };
        function a(e) {
          if ("string" != typeof e)
            throw new Error("Argument passed must be a string");
          var t = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
          return e.replace(/[&<>"]/g, function (e) {
            return t[e];
          });
        }
        function s(o, i) {
          var r = this,
            a = arguments,
            s = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
          if ("function" != typeof o)
            throw new Error("First argument must be a function");
          if ("number" != typeof i)
            throw new Error("Second argument must be a numeric value");
          var l = void 0;
          return function () {
            var e = r,
              t = a,
              n = s && !l;
            clearTimeout(l),
              (l = setTimeout(function () {
                (l = null), s || o.apply(e, t);
              }, i)),
              n && o.apply(e, t);
          };
        }
        function l(e) {
          return Object.getOwnPropertyNames(e).length <= 0;
        }
        function d(e, n) {
          var o =
              /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/,
            i = { d: [], w: [] };
          return (
            (e || "").split(" ").forEach(function (e) {
              var t = e + (n ? "." + n : "");
              t.startsWith(".")
                ? (i.d.push(t), i.w.push(t))
                : i[o.test(e) ? "w" : "d"].push(t);
            }),
            (i.d = i.d.join(" ")),
            (i.w = i.w.join(" ")),
            i
          );
        }
        function u(e, t) {
          if ("string" != typeof e)
            throw new Error("Event name must be a string");
          var n = e.match(/([a-z]+\.([a-z]+))/i),
            o = { target: t };
          return (
            null !== n && ((e = n[1]), (o.namespace = n[2])),
            new window.CustomEvent(e, { detail: o })
          );
        }
        function c(e, t) {
          return !!(e && t && 2 & e.compareDocumentPosition(t));
        }
        function f(e) {
          return "string" == typeof e;
        }
        (r.default.Utils = r.default.Utils || {}),
          (r.default.Utils.escapeHTML = a),
          (r.default.Utils.debounce = s),
          (r.default.Utils.isObjectEmpty = l),
          (r.default.Utils.splitEvents = d),
          (r.default.Utils.createEvent = u),
          (r.default.Utils.isNodeAfter = c),
          (r.default.Utils.isString = f);
      },
      { 9: 9 },
    ],
    30: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.typeChecks = void 0),
          (n.absolutizeUrl = l),
          (n.formatType = d),
          (n.getMimeFromType = u),
          (n.getTypeFromFile = c),
          (n.getExtension = f),
          (n.normalizeExtension = p);
        var o,
          i = e(9),
          r = (o = i) && o.__esModule ? o : { default: o },
          a = e(29);
        var s = (n.typeChecks = []);
        function l(e) {
          if ("string" != typeof e)
            throw new Error("`url` argument must be a string");
          var t = document.createElement("div");
          return (
            (t.innerHTML = '<a href="' + (0, a.escapeHTML)(e) + '">x</a>'),
            t.firstChild.href
          );
        }
        function d(e) {
          var t =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
          return e && !t ? c(e) : t;
        }
        function u(e) {
          if ("string" != typeof e)
            throw new Error("`type` argument must be a string");
          return e && -1 < e.indexOf(";") ? e.substr(0, e.indexOf(";")) : e;
        }
        function c(e) {
          if ("string" != typeof e)
            throw new Error("`url` argument must be a string");
          for (var t = 0, n = s.length; t < n; t++) {
            var o = s[t](e);
            if (o) return o;
          }
          var i = p(f(e)),
            r = "video/mp4";
          return (
            i &&
              (~[
                "mp4",
                "m4v",
                "ogg",
                "ogv",
                "webm",
                "flv",
                "mpeg",
                "mov",
              ].indexOf(i)
                ? (r = "video/" + i)
                : ~["mp3", "oga", "wav", "mid", "midi"].indexOf(i) &&
                  (r = "audio/" + i)),
            r
          );
        }
        function f(e) {
          if ("string" != typeof e)
            throw new Error("`url` argument must be a string");
          var t = e.split("?")[0].split("\\").pop().split("/").pop();
          return ~t.indexOf(".") ? t.substring(t.lastIndexOf(".") + 1) : "";
        }
        function p(e) {
          if ("string" != typeof e)
            throw new Error("`extension` argument must be a string");
          switch (e) {
            case "mp4":
            case "m4v":
              return "mp4";
            case "webm":
            case "webma":
            case "webmv":
              return "webm";
            case "ogg":
            case "oga":
            case "ogv":
              return "ogg";
            default:
              return e;
          }
        }
        (r.default.Utils = r.default.Utils || {}),
          (r.default.Utils.typeChecks = s),
          (r.default.Utils.absolutizeUrl = l),
          (r.default.Utils.formatType = d),
          (r.default.Utils.getMimeFromType = u),
          (r.default.Utils.getTypeFromFile = c),
          (r.default.Utils.getExtension = f),
          (r.default.Utils.normalizeExtension = p);
      },
      { 29: 29, 9: 9 },
    ],
    31: [
      function (e, t, n) {
        "use strict";
        var o,
          i = a(e(2)),
          r = a(e(5));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        if (
          ([
            Element.prototype,
            CharacterData.prototype,
            DocumentType.prototype,
          ].forEach(function (e) {
            e.hasOwnProperty("remove") ||
              Object.defineProperty(e, "remove", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function () {
                  this.parentNode.removeChild(this);
                },
              });
          }),
          (function () {
            if ("function" == typeof window.CustomEvent) return;
            function e(e, t) {
              t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
              var n = i.default.createEvent("CustomEvent");
              return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
            }
            (e.prototype = window.Event.prototype), (window.CustomEvent = e);
          })(),
          "function" != typeof Object.assign &&
            (Object.assign = function (e) {
              if (null == e)
                throw new TypeError(
                  "Cannot convert undefined or null to object"
                );
              for (var t = Object(e), n = 1, o = arguments.length; n < o; n++) {
                var i = arguments[n];
                if (null !== i)
                  for (var r in i)
                    Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
              }
              return t;
            }),
          String.prototype.startsWith ||
            (String.prototype.startsWith = function (e, t) {
              return (t = t || 0), this.substr(t, e.length) === e;
            }),
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.matchesSelector ||
              Element.prototype.mozMatchesSelector ||
              Element.prototype.msMatchesSelector ||
              Element.prototype.oMatchesSelector ||
              Element.prototype.webkitMatchesSelector ||
              function (e) {
                for (
                  var t = (
                      this.document || this.ownerDocument
                    ).querySelectorAll(e),
                    n = t.length - 1;
                  0 <= --n && t.item(n) !== this;

                );
                return -1 < n;
              }),
          window.Element &&
            !Element.prototype.closest &&
            (Element.prototype.closest = function (e) {
              var t = (this.document || this.ownerDocument).querySelectorAll(e),
                n = void 0,
                o = this;
              do {
                for (n = t.length; 0 <= --n && t.item(n) !== o; );
              } while (n < 0 && (o = o.parentElement));
              return o;
            }),
          (function () {
            for (
              var i = 0, e = ["ms", "moz", "webkit", "o"], t = 0;
              t < e.length && !window.requestAnimationFrame;
              ++t
            )
              (window.requestAnimationFrame =
                window[e[t] + "RequestAnimationFrame"]),
                (window.cancelAnimationFrame =
                  window[e[t] + "CancelAnimationFrame"] ||
                  window[e[t] + "CancelRequestAnimationFrame"]);
            window.requestAnimationFrame ||
              (window.requestAnimationFrame = function (e) {
                var t = new Date().getTime(),
                  n = Math.max(0, 16 - (t - i)),
                  o = window.setTimeout(function () {
                    e(t + n);
                  }, n);
                return (i = t + n), o;
              }),
              window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (e) {
                  clearTimeout(e);
                });
          })(),
          /firefox/i.test(navigator.userAgent))
        ) {
          var s = window.getComputedStyle;
          window.getComputedStyle = function (e, t) {
            var n = s(e, t);
            return null === n ? { getPropertyValue: function () {} } : n;
          };
        }
        window.Promise || (window.Promise = r.default),
          (o = window.Node || window.Element) &&
            o.prototype &&
            null === o.prototype.children &&
            Object.defineProperty(o.prototype, "children", {
              get: function () {
                for (
                  var e = 0, t = void 0, n = this.childNodes, o = [];
                  (t = n[e++]);

                )
                  1 === t.nodeType && o.push(t);
                return o;
              },
            });
      },
      { 2: 2, 5: 5 },
    ],
    32: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.isDropFrame = C),
          (n.secondsToTimeCode = a),
          (n.timeCodeToSeconds = s),
          (n.calculateTimeFormat = l),
          (n.convertSMPTEtoSeconds = d);
        var o,
          i = e(9),
          r = (o = i) && o.__esModule ? o : { default: o };
        function C() {
          return !(
            (0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : 25) %
              1 ==
            0
          );
        }
        function a(e) {
          var t =
              1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            o =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : 25,
            i =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            r =
              5 < arguments.length && void 0 !== arguments[5]
                ? arguments[5]
                : "hh:mm:ss";
          e = !e || "number" != typeof e || e < 0 ? 0 : e;
          var a = Math.round(0.066666 * o),
            s = Math.round(o),
            l = 24 * Math.round(3600 * o),
            d = Math.round(600 * o),
            u = C(o) ? ";" : ":",
            c = void 0,
            f = void 0,
            p = void 0,
            m = void 0,
            h = Math.round(e * o);
          if (C(o)) {
            h < 0 && (h = l + h);
            var v = (h %= l) % d;
            (h += 9 * a * Math.floor(h / d)),
              a < v && (h += a * Math.floor((v - a) / Math.round(60 * s - a)));
            var y = Math.floor(h / s);
            (c = Math.floor(Math.floor(y / 60) / 60)),
              (f = Math.floor(y / 60) % 60),
              (p = n ? y % 60 : Math.floor((h / s) % 60).toFixed(i));
          } else
            (c = Math.floor(e / 3600) % 24),
              (f = Math.floor(e / 60) % 60),
              (p = n ? Math.floor(e % 60) : Math.floor(e % 60).toFixed(i));
          (c = c <= 0 ? 0 : c),
            (p = 60 === (p = p <= 0 ? 0 : p) ? 0 : p),
            (f = 60 === (f = f <= 0 ? 0 : f) ? 0 : f);
          for (var g = r.split(":"), E = {}, b = 0, S = g.length; b < S; ++b) {
            for (var w = "", x = 0, T = g[b].length; x < T; x++)
              w.indexOf(g[b][x]) < 0 && (w += g[b][x]);
            ~["f", "s", "m", "h"].indexOf(w) && (E[w] = g[b].length);
          }
          var P = t || 0 < c ? (c < 10 && 1 < E.h ? "0" + c : c) + ":" : "";
          return (
            (P += (f < 10 && 1 < E.m ? "0" + f : f) + ":"),
            (P += "" + (p < 10 && 1 < E.s ? "0" + p : p)),
            n &&
              (P +=
                (m = (m = (h % s).toFixed(0)) <= 0 ? 0 : m) < 10 && E.f
                  ? u + "0" + m
                  : "" + u + m),
            P
          );
        }
        function s(e) {
          var t =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 25;
          if ("string" != typeof e)
            throw new TypeError("Time must be a string");
          if (
            (0 < e.indexOf(";") && (e = e.replace(";", ":")),
            !/\d{2}(\:\d{2}){0,3}/i.test(e))
          )
            throw new TypeError("Time code must have the format `00:00:00`");
          var n = e.split(":"),
            o = void 0,
            i = 0,
            r = 0,
            a = 0,
            s = 0,
            l = 0,
            d = Math.round(0.066666 * t),
            u = Math.round(t),
            c = 3600 * u,
            f = 60 * u;
          switch (n.length) {
            default:
            case 1:
              a = parseInt(n[0], 10);
              break;
            case 2:
              (r = parseInt(n[0], 10)), (a = parseInt(n[1], 10));
              break;
            case 3:
              (i = parseInt(n[0], 10)),
                (r = parseInt(n[1], 10)),
                (a = parseInt(n[2], 10));
              break;
            case 4:
              (i = parseInt(n[0], 10)),
                (r = parseInt(n[1], 10)),
                (a = parseInt(n[2], 10)),
                (s = parseInt(n[3], 10));
          }
          return (
            (o = C(t)
              ? c * i +
                f * r +
                u * a +
                s -
                d * ((l = 60 * i + r) - Math.floor(l / 10))
              : (c * i + f * r + t * a + s) / t),
            parseFloat(o.toFixed(3))
          );
        }
        function l(e, t) {
          var n =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 25;
          e = !e || "number" != typeof e || e < 0 ? 0 : e;
          for (
            var o = Math.floor(e / 3600) % 24,
              i = Math.floor(e / 60) % 60,
              r = Math.floor(e % 60),
              a = [
                [Math.floor(((e % 1) * n).toFixed(3)), "f"],
                [r, "s"],
                [i, "m"],
                [o, "h"],
              ],
              s = t.timeFormat,
              l = s[1] === s[0],
              d = l ? 2 : 1,
              u = s.length < d ? s[d] : ":",
              c = s[0],
              f = !1,
              p = 0,
              m = a.length;
            p < m;
            p++
          )
            if (~s.indexOf(a[p][1])) f = !0;
            else if (f) {
              for (var h = !1, v = p; v < m; v++)
                if (0 < a[v][0]) {
                  h = !0;
                  break;
                }
              if (!h) break;
              l || (s = c + s),
                (s = a[p][1] + u + s),
                l && (s = a[p][1] + s),
                (c = a[p][1]);
            }
          t.timeFormat = s;
        }
        function d(e) {
          if ("string" != typeof e)
            throw new TypeError("Argument must be a string value");
          for (
            var t = ~(e = e.replace(",", ".")).indexOf(".")
                ? e.split(".")[1].length
                : 0,
              n = 0,
              o = 1,
              i = 0,
              r = (e = e.split(":").reverse()).length;
            i < r;
            i++
          )
            (o = 1), 0 < i && (o = Math.pow(60, i)), (n += Number(e[i]) * o);
          return Number(n.toFixed(t));
        }
        (r.default.Utils = r.default.Utils || {}),
          (r.default.Utils.secondsToTimeCode = a),
          (r.default.Utils.timeCodeToSeconds = s),
          (r.default.Utils.calculateTimeFormat = l),
          (r.default.Utils.convertSMPTEtoSeconds = d);
      },
      { 9: 9 },
    ],
  },
  {},
  [31, 8, 7, 17, 25, 22, 21, 23, 24, 26, 18, 20, 19, 11, 12, 13, 14, 15, 16]
);
